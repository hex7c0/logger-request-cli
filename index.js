'use strict';
/**
 * @file logger-request-cli main
 * @module logger-request-cli
 * @subpackage main
 * @version 1.1.0
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2014
 * @license GPLv3
 */

/*
 * initialize module
 */
var ansi = require('ansi-styles');
var fs = require('fs');
var resolve = require('path').resolve;
var startline = require('startline');
var table = require('text-table');
var input = require('./lib/in.js');
var output = require('./lib/out.js');
var re = new RegExp('\x1b(?:\\[(?:\\d+[ABCDEFGJKSTm]|\\d+;\\d+[Hfm]|'
  + '\\d+;\\d+;\\d+m|6n|s|u|\\?25[lh])|\\w)', 'g'); // ansi hack

/*
 * functions
 */
/**
 * function wrapper for multiple require
 * 
 * @function wrapper
 * @param {Object} my - custom object parsed
 * @return {Object}
 */
function wrapper(my) {

  var start = process.hrtime();
  var c = 0, e = 0;
  var doit = [];
  var stream = startline({
    file: my.filename,
    encoding: 'utf8',
  });

  // options
  var open = ansi.green.open;
  var close = ansi.green.close;
  if (my.url) {
    doit
    .push([ input.url, [ Object.create(null), 'url' ],
      [ output.url, [ open + 'ROUTE', 'METHOD', 'STATUS', 'COUNTER', close ] ] ]);
  }
  if (my.ip) {
    doit.push([ input.cc, [ Object.create(null), 'ip' ],
      [ output.ip, [ open + 'IP', 'COUNTER' + close ] ] ]);
  }
  if (my.response) {
    doit.push([ input.avg, [ {
      what: 0,
      total: 0,
      max: 0,
      min: 10000
    }, 'response' ], [ output.avg, [ open + 'RESPONSE', 'MS' + close ] ] ]);
  }
  if (my.pid) {
    doit.push([ input.cc, [ Object.create(null), 'pid' ],
      [ output.cc, [ open + 'PID' + close ] ] ]);
  }
  if (my.bytesReq) {
    doit.push([ input.avg, [ {
      what: 0,
      total: 0,
      max: 0,
      min: 10000
    }, 'bytesReq' ],
      [ output.avg, [ open + 'BYTES REQUESTED', 'BYTE' + close ] ] ]);
  }
  if (my.bytesRes) {
    doit.push([ input.avg, [ {
      what: 0,
      total: 0,
      max: 0,
      min: 10000
    }, 'bytesRes' ], [ output.avg, [ open + 'BYTES SENT', 'BYTE' + close ] ] ]);
  }
  if (my.referrer) {
    doit.push([ input.cc, [ Object.create(null), 'referrer' ],
      [ output.cc, [ open + 'REFERRER' + close ] ] ]);
  }
  if (my.auth) {
    doit.push([ input.cc, [ Object.create(null), 'auth' ],
      [ output.cc, [ open + 'USER ATHENTICATION' + close ] ] ]);
  }
  if (my.agent) {
    doit.push([ input.cc, [ Object.create(null), 'agent' ],
      [ output.cc, [ open + 'USER-AGENT' + close ] ] ]);
  }
  if (my.version) {
    doit.push([ input.cc, [ Object.create(null), 'version' ],
      [ output.cc, [ open + 'HTTP VERSION' + close ] ] ]);
  }
  if (my.level) {
    doit.push([ input.cc, [ Object.create(null), 'level' ],
      [ output.cc, [ open + 'LOG LEVEL' + close ] ] ]);
  }
  if (my.message) {
    doit.push([ input.cc, [ Object.create(null), 'message' ],
      [ output.cc, [ open + 'LOG MESSAGE' + close ] ] ]);
  }
  if (my.timestamp) {
    doit.push([ input.cc, [ Object.create(null), 'timestamp' ],
      [ output.cc, [ open + 'LOG TIMESTAMP' + close ] ] ]);
  }

  // go
  if (my.search) {
    doit = [];
    stream.on('line', function(lines) {

      var s = lines.match(my.search);
      if (s) {
        var line = lines.replace(my.search, ansi.red.open + s[0]
          + ansi.red.close + ansi.gray.open);
        // console.log(s)
        doit.push([ 'line ' + c, ansi.gray.open + line + ansi.gray.close ]);
      }
      c++;
      return;
    });
    stream.on('close', function() {

      if (doit.length === 0) {
        console.log('Not found');
      }
      console.log(table(doit));
      return;
    });
    return;
  }

  stream.on('line', function(lines) {

    c++;
    try {
      var line = JSON.parse(lines);
      for (var i = 0, ii = doit.length; i < ii; i++) {
        var params = doit[i][1];
        params[0] = doit[i][0](line, params);
      }
    } catch (err) {
      e++;
    }
    return;
  });
  stream.on('close', function() {

    var out = [];
    var csv = [];
    for (var i = 0, ii = doit.length; i < ii; i++) {
      var buff = doit[i][2][0](doit[i][1], doit[i][2][1]);
      for (var b = 0, bb = buff.length; b < bb; b++) {
        out.push(buff[b]);
      }
    }

    var consol = out.slice();
    if (my.report) {
      csv.push([ ansi.yellow.open + 'REPORT' + ansi.yellow.close ], [
        'line parsed', ansi.underline.open + c + ansi.underline.close ]);
      consol.push(csv[0]);
      consol.push(csv[1]);
      if (e > 0) {
        csv.push([ ansi.red.open + 'line error', e + ansi.red.close ]);
        consol.push(csv[2]);
      }
      var diff = process.hrtime(start);
      diff = ((diff[0] * 1e9 + diff[1]) / 1000000).toFixed(3) + ' ms';
      csv.push([ 'time elapsed',
        ansi.underline.open + diff + ansi.underline.close ]);
      consol.push(csv[csv.length - 1]);
    }

    // print
    if (my.csv) { // file
      var to_csv = require('./lib/csv.js');
      console.log(table(csv, {
        align: [ 'l', 'r' ],
        stringLength: function(s) {

          return s.replace(re, '').length;
        }
      }));
      to_csv(String(my.csv), out);
    } else { // console
      console.log(table(consol, {
        align: [ 'l', 'r' ],
        stringLength: function(s) {

          return s.replace(re, '').length;
        }
      }));
    }
    return;
  });

  return my;
}

/**
 * option setting
 * 
 * @exports parser
 * @function parser
 * @param {Object} opt - various options. Check README.md
 * @return {Object}
 */
function parser(opt) {

  var options = opt || Object.create(null);
  var my = {
    filename: resolve(String(options.filename)),
    ip: Boolean(options.ip),
    url: Boolean(options.url),
    response: Boolean(options.response),
    pid: Boolean(options.pid),
    bytesReq: Boolean(options.bytesReq),
    bytesRes: Boolean(options.bytesRes),
    referrer: Boolean(options.referrer),
    auth: Boolean(options.auth),
    agent: Boolean(options.agent),
    version: Boolean(options.version),
    level: Boolean(options.level),
    message: Boolean(options.message),
    timestamp: Boolean(options.timestamp),
    report: options.report === false ? false : true,
    csv: options.csv,
    search: options.search
  };
  if (!fs.existsSync(my.filename)) {
    var e = my.filename + ' not exists';
    throw new Error(e);
  }
  if (my.csv) {
    my.csv = resolve(String(my.csv));
  }
  if (my.search) {
    my.search = new RegExp(my.search, 'g');
  }

  return wrapper(my);
}
module.exports = parser;

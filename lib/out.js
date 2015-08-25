'use strict';
/**
 * @file output functions
 * @module logger-request-cli
 * @subpackage lib
 * @version 1.1.0
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2014
 * @license GPLv3
 */

/*
 * initialize module
 */
var ansi = require('ansi-styles');
var cyan = ansi.cyan.open;
var close = ansi.cyan.close;
var gray = ansi.gray.open;
var magenta = ansi.magenta.open;

/*
 * functions
 */
/**
 * output for url
 * 
 * @function url
 * @param {Array} input - line parsed
 * @param {String} output - header
 * @return {Array}
 */
function url(input, output) {

  var i = 0, p = 0;
  var event = input[0];
  var out = [ output ];
  for ( var route in event) {
    for ( var method in event[route]) {
      for ( var status in event[route][method]) {
        ++i;
        p += event[route][method][status].counter;
        out.push([ route, gray + method, magenta + status,
          cyan + event[route][method][status].counter + close ]);
      }
    }
  }
  if (i === 0 && p === 0) {
    return [];
  }
  out.push('',
    [ 'url parsed', ansi.underline.open + i + ansi.underline.close ], [
      'total request', ansi.underline.open + p + ansi.underline.close ], '');
  return out;
}

/**
 * output for ip
 * 
 * @function ip
 * @param {Array} input - line parsed
 * @param {String} output - header
 * @return {Array}
 */
function ip(input, output) {

  var i = 0;
  var event = input[0];
  var out = [ output ];
  for ( var ips in event) {
    ++i;
    out.push([ ips, cyan + event[ips].counter + close ]);
  }
  if (i === 0) {
    return [];
  }
  out.push('', [ 'unique ip', ansi.underline.open + i + ansi.underline.close ],
    '');
  return out;
}

/**
 * output for counter
 * 
 * @function cc
 * @param {Array} input - line parsed
 * @param {String} output - header
 * @return {Array}
 */
function cc(input, output) {

  var event = input[0];
  var out = [ output ];
  for ( var a in event) {
    if (a != 'undefined') {
      out.push([ a, cyan + event[a].counter + close ]);
    }
  }
  if (out.length < 2) {
    return [];
  }
  out.push('');
  return out;
}

/**
 * output for average
 * 
 * @function avg
 * @param {Array} input - line parsed
 * @param {String} output - header
 * @return {Array}
 */
function avg(input, output) {

  var event = input[0];
  if (event.what === 0 && event.total === 0) {
    return [];
  }
  return [ output, [ 'total', cyan + event.what.toFixed(3) + close ],
    [ 'average', cyan + (event.what / event.total).toFixed(3) + close ],
    [ 'max', cyan + event.max.toFixed(3) + close ],
    [ 'min', cyan + event.min.toFixed(3) + close ], [ '' ] ];
}

/**
 * export functions
 * 
 * @exports Object
 */
module.exports = {
  url: url,
  ip: ip,
  cc: cc,
  avg: avg
};

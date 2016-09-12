#!/usr/bin/env node
'use strict';

process.title = 'loggerRequest';
var VERSION = require('../package.json').version;
var cli = require('cli');
var parser = require('..');

cli.parse({
  filename: [ false, 'Pathname of the log file to be read', 'file' ],
  ip: [ 'i', 'Parse ip' ],
  url: [ 'u', 'Parse url' ],
  response: [ 'r', 'Parse time of response' ],
  pid: [ 'p', 'Parse pid' ],
  bytesReq: [ 'q', 'Parse bytesReq' ],
  bytesRes: [ 's', 'Parse bytesRes' ],
  referrer: [ 'e', 'Parse referrer' ],
  auth: [ 'a', 'Parse basic-authentication' ],
  agent: [ 'b', 'Parse user agent' ],
  w3c: [ 'w', 'Parse http version' ],
  level: [ 'l', 'Parse log level' ],
  message: [ 'm', 'Parse log message' ],
  timestamp: [ 't', 'Parse log timestamp' ],
  report: [ 'R', 'Not print filename stats' ],
  csv: [ false, 'Write results to csv file', 'string' ],
  search: [ false, 'Search string inside logfile', 'string' ],
  version: [ 'v', 'Display the current version' ]
});

cli.main(function(args, options) {

  if (options.version) {
    return console.log(process.title + ' v' + VERSION);
  } else if (args.length == 0 && !options.filename) {
    this.fatal('Missing logfile');
  }

  var f = args[0] || options.filename;
  var R = options.report == true ? false : true;
  return parser({
    filename: f,
    ip: options.ip,
    url: options.url,
    response: options.response,
    pid: options.pid,
    bytesReq: options.bytesReq,
    bytesRes: options.bytesRes,
    referrer: options.referrer,
    auth: options.auth,
    agent: options.agent,
    version: options.w3c,
    level: options.level,
    message: options.message,
    timestamp: options.timestamp,
    report: R,
    csv: options.csv,
    search: options.search
  });
});

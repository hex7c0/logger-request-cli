#!/usr/bin/env node

"use strict";

process.title = 'logger-request';

var VERSION = '1.0.0';
var cli = require('cli');
var parser = require('../index.min.js');

cli.parse({
    filename: [false,'Pathname of the log file to be read','file'],
    ip: ['i','Parse ip'],
    url: ['u','Parse url'],
    reponse: ['r','Parse time of response'],
    pid: ['p','Parse pid'],
    bytesReq: ['q','Parse bytesReq'],
    bytesRes: ['s','Parse bytesRes'],
    referrer: ['e','Parse referrer'],
    auth: ['a','Parse basic-authentication'],
    agent: ['u','Parse user agent'],
    w3c: ['w','Parse http version'],
    level: ['l','Parse log level'],
    message: ['m','Parse log message'],
    timestamp: ['t','Parse log timestamp'],
    report: ['R','Print filename stats'],
    version: ['v','Display the current version']
});

cli.main(function(args,options) {

    // cli.debug(args);
    // cli.debug(options);
    if (options.version) {
        console.log(process.title + ' v' + VERSION);
        return;
    } else if (args.length == 0 && !options.filename) {
        this.fatal('Missing logfile');
    }

    var f = options.filename || args[0];
    return parser({
        filename: f,
        ip: options.ip,
        url: options.rl,
        reponse: options.reponse,
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
        report: options.report,
        version: options.version
    });
});

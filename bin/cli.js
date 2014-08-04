#!/usr/bin/env node

process.title = 'logger-request';

"use strict";

var VERSION = '1.1.0';
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
    report: ['R','Not print filename stats'],
    csv: [false,'Write results to csv file','string'],
    search: [false,'Search string inside logfile','string'],
    version: ['v','Display the current version']
});

cli.main(function(args,options) {

    // console.log(args);
    // console.log(options);
    if (options.version) {
        console.log(process.title + ' v' + VERSION);
        return;
    } else if (args.length == 0 && !options.filename) {
        this.fatal('Missing logfile');
    }

    var f = args[0] || options.filename;
    var R = options.report == true ? false : true;
    var p = parser({
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
    // console.log(p)
    return p;
});

"use strict";
/**
 * @file out functions
 * @module logger-request-cli
 * @package logger-request-cli
 * @subpackage lib
 * @version 1.0.0
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2014
 * @license GPLv3
 */

/*
 * functions
 */
function url(input,output) {

    var i = 0, p = 0;
    var event = input[0];
    var out = [output];
    for ( var route in event) {
        for ( var method in event[route]) {
            for ( var status in event[route][method]) {
                i++;
                p += event[route][method][status].counter;
                out.push([route,method,status,
                        event[route][method][status].counter]);
            }
        }
    }
    out.push('',['url parsed',i],['total request',p],'');
    return out;
}

function ip(input,output) {

    var i = 0;
    var event = input[0];
    var out = [output];
    for ( var ip in event) {
        i++;
        out.push([ip,event[ip].counter]);
    }
    out.push('',['unique ip',i],'');
    return out;
}

function avg(input,output) {

    var event = input[0];
    return [output,['total',event.what],['average',(event.what / event.total)],
            ['max',event.max],['min',event.min],['']];
}

function cc(input,output) {

    var event = input[0];
    var out = [output];
    for ( var a in event) {
        if (a != 'undefined') {
            out.push([a,event[a].counter]);
        }
    }
    if (out.length < 2) {
        var out = [];
    } else {
        out.push('');
    }
    return out;
}

module.exports = {
    url: url,
    ip: ip,
    avg: avg,
    cc: cc,

};

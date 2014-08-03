"use strict";
/**
 * @file output functions
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
/**
 * output for url
 * 
 * @function url
 * @param {Array} input - line parsed
 * @param {String} output - header
 * @return {Array}
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
    if (i == 0 && p == 0) {
        return [];
    }
    out.push('',['url parsed',i],['total request',p],'');
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
function ip(input,output) {

    var i = 0;
    var event = input[0];
    var out = [output];
    for ( var ip in event) {
        i++;
        out.push([ip,event[ip].counter]);
    }
    if (i == 0) {
        return [];
    }
    out.push('',['unique ip',i],'');
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
function cc(input,output) {

    var event = input[0];
    var out = [output];
    for ( var a in event) {
        if (a != 'undefined') {
            out.push([a,event[a].counter]);
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
function avg(input,output) {

    var event = input[0];
    if (event.what == 0 && event.total == 0) {
        return [];
    }
    return [output,['total',event.what],['average',(event.what / event.total)],
            ['max',event.max],['min',event.min],['']];
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

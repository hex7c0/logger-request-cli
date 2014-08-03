"use strict";
/**
 * @file input functions
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
 * input for url
 * 
 * @function url
 * @param {String} line - line read
 * @param {Array} output - object stored
 * @return {Object}
 */
function url(line,params) {

    var event = params[0];
    var what = params[1];
    try {
        event[line[what]][line.method][line.status].counter++;
    } catch (TypeError) {
        if (event[line[what]] == undefined) {
            event[line[what]] = Object.create(null);
        }
        if (event[line[what]][line.method] == undefined) {
            event[line[what]][line.method] = Object.create(null);
        }
        if (event[line[what]][line.method][line.status] == undefined) {
            event[line[what]][line.method][line.status] = {
                counter: 1
            };
        }
    }
    return event;
}

/**
 * input for counter
 * 
 * @function cc
 * @param {String} line - line read
 * @param {Array} output - object stored
 * @return {Object}
 */
function cc(line,params) {

    var event = params[0];
    var what = params[1];
    try {
        event[line[what]].counter++;
    } catch (TypeError) {
        event[line[what]] = {
            counter: 1
        };
    }
    return event;
}

/**
 * input for average
 * 
 * @function avg
 * @param {String} line - line read
 * @param {Array} output - object stored
 * @return {Object}
 */
function avg(line,params) {

    var event = params[0];
    var what = params[1];
    var r = Number(line[what]);
    event.what += r;
    event.total++;
    if (r > event.max) {
        event.max = r;
    }
    if (r < event.min) {
        event.min = r;
    }
    return event;
}

/**
 * export functions
 * 
 * @exports Object
 */
module.exports = {
    url: url,
    cc: cc,
    avg: avg
};

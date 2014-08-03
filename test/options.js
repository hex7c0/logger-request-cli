"use strict";
/**
 * @file options test
 * @module logger-request-cli
 * @package logger-request-cli
 * @subpackage test
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
try {
    var parser = require('../index.min.js'); // use require('logger-request-cli')
    var assert = require('assert');
} catch (MODULE_NOT_FOUND) {
    console.error(MODULE_NOT_FOUND);
    process.exit(1);
}

/*
 * test module
 */
describe('options',function() {

    describe('should read all file without parsing (no logile)',function() {

        var m = parser({
            filename: __dirname + '/options.js',
            ip: true,
            url: true,
            response: true,
            pid: true,
            bytesReq: true,
            bytesRes: true,
            referrer: true,
            auth: true,
            agent: true,
            version: true,
            level: true,
            message: true,
            timestamp: true,
            report: true
        });

        it('should return all options',function(done) {

            assert.deepEqual(m.ip,true,'ip');
            assert.deepEqual(m.url,true,'url');
            assert.deepEqual(m.response,true,'response');
            assert.deepEqual(m.pid,true,'pid');
            assert.deepEqual(m.bytesReq,true,'bytesReq');
            assert.deepEqual(m.bytesRes,true,'bytesRes');
            assert.deepEqual(m.referrer,true,'referrer');
            assert.deepEqual(m.auth,true,'auth');
            assert.deepEqual(m.agent,true,'agent');
            assert.deepEqual(m.version,true,'version');
            assert.deepEqual(m.level,true,'level');
            assert.deepEqual(m.message,true,'message');
            assert.deepEqual(m.timestamp,true,'timestamp');
            assert.deepEqual(m.report,true,'report');
            done();
        });
    });
});

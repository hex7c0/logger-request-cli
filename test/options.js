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
} catch (MODULE_NOT_FOUND) {
    console.error(MODULE_NOT_FOUND);
    process.exit(1);
}

/*
 * test module
 */
describe('options',function() {

    it('should read all file without parsing (no logile)',function(done) {

        parser({
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
        done();
    });
});

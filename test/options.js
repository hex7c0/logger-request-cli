'use strict';
/**
 * @file options test
 * @module logger-request-cli
 * @subpackage test
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
var parser = require('..');
var assert = require('assert');

/*
 * test module
 */
describe('options', function() {

  var m;

  it('should read all file without parsing (no logile)', function(done) {

    m = parser({
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
  it('should return all options', function(done) {

    assert.ok(m.ip, 'ip');
    assert.ok(m.url, 'url');
    assert.ok(m.response, 'response');
    assert.ok(m.pid, 'pid');
    assert.ok(m.bytesReq, 'bytesReq');
    assert.ok(m.bytesRes, 'bytesRes');
    assert.ok(m.referrer, 'referrer');
    assert.ok(m.auth, 'auth');
    assert.ok(m.agent, 'agent');
    assert.ok(m.version, 'version');
    assert.ok(m.level, 'level');
    assert.ok(m.message, 'message');
    assert.ok(m.timestamp, 'timestamp');
    assert.ok(m.report, 'report');
    done();
  });
});

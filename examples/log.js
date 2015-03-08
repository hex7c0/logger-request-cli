'use strict';
/**
 * @file log example
 * @module logger-request-cli
 * @subpackage examples
 * @version 0.0.2
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
var parser = require('..'); // use require('logger-request-cli') instead

// using function
parser({
  filename: 'A.log',
  // ip: true,
  response: true
});

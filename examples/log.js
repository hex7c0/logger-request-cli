"use strict";
/**
 * @file log example
 * @module logger-request-cli
 * @package logger-request-cli
 * @subpackage examples
 * @version 0.0.2
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/**
 * initialize module
 */
// import
try {
    var parser = require('../index.min.js'); // use require('logger-request-cli') instead
} catch (MODULE_NOT_FOUND) {
    console.error(MODULE_NOT_FOUND);
    process.exit(1);
}

// using function
parser({
    filename: 'A.log',
    ip: true
});

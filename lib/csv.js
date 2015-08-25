'use strict';
/**
 * @file csv writer
 * @module logger-request-cli
 * @subpackage lib
 * @version 1.1.0
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2014
 * @license GPLv3
 */

/*
 * initialize module
 */
var fs = require('fs');
var re = new RegExp('\x1b(?:\\[(?:\\d+[ABCDEFGJKSTm]|\\d+;\\d+[Hfm]|'
  + '\\d+;\\d+;\\d+m|6n|s|u|\\?25[lh])|\\w)', 'g'); // ansi hack

/*
 * functions
 */
/**
 * write to csv
 * 
 * @function csv
 * @param {String} file - name of file
 * @param {Array} data - lines parsed
 */
module.exports = function csv(file, data) {

  var str = '';
  for (var i = 0, ii = data.length; i < ii; ++i) {
    str += data[i].toString();
    str += '\n';
  }
  str = str.replace(re, '');
  return fs.writeFile(file, str, function(err) {

    if (err) {
      console.error('CSV write false');
    } else {
      console.log('CSV write true');
    }
    return;
  });
};

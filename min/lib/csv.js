/*
 * logger-request-cli v1.1.2
 * (c) hex7c0 http://supergiovane.tk/#/logger-request-cli
 * Licensed under GPLv3
 */
"use strict";var re=new RegExp("(?:\\[(?:\\d+[ABCDEFGJKSTm]|\\d+;\\d+[Hfm]|\\d+;\\d+;\\d+m|6n|s|u|\\?25[lh])|\\w)","g");try{var fs=require("fs")}catch(MODULE_NOT_FOUND){console.error(MODULE_NOT_FOUND),process.exit(1)}module.exports=function(a,b){for(var c="",d=0,e=b.length;e>d;d++)c+=b[d].toString(),c+="\n";c=c.replace(re,""),fs.writeFile(a,c,function(a){a&&console.log("CSV write false"),console.log("CSV write true")})};

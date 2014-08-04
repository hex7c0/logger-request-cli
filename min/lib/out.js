/*
 * logger-request-cli v1.1.0
 * (c) hex7c0 http://supergiovane.tk/#/logger-request-cli
 * Licensed under GPLv3
 */
"use strict";function url(a,b){var c=0,d=0,e=a[0],f=[b];for(var g in e)for(var h in e[g])for(var i in e[g][h])c++,d+=e[g][h][i].counter,f.push([g,gray+h,magenta+i,cyan+e[g][h][i].counter+close]);return 0==c&&0==d?[]:(f.push("",["url parsed",ansi.underline.open+c+ansi.underline.close],["total request",ansi.underline.open+d+ansi.underline.close],""),f)}function ip(a,b){var c=0,d=a[0],e=[b];for(var f in d)c++,e.push([f,cyan+d[f].counter+close]);return 0==c?[]:(e.push("",["unique ip",ansi.underline.open+c+ansi.underline.close],""),e)}function cc(a,b){var c=a[0],d=[b];for(var e in c)"undefined"!=e&&d.push([e,cyan+c[e].counter+close]);return d.length<2?[]:(d.push(""),d)}function avg(a,b){var c=a[0];return 0==c.what&&0==c.total?[]:[b,["total",cyan+c.what+close],["average",cyan+c.what/c.total+close],["max",cyan+c.max+close],["min",cyan+c.min+close],[""]]}var ansi=require("ansi-styles"),cyan=ansi.cyan.open,close=ansi.cyan.close,gray=ansi.gray.open,magenta=ansi.magenta.open;module.exports={url:url,ip:ip,cc:cc,avg:avg};

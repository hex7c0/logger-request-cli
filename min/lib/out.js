/*
 * logger-request-cli v0.0.1
 * (c) hex7c0 https://github.com/hex7c0/logger-request-cli/
 * Licensed under GPLv3
 */
"use strict";function url(a,b){var c=0,d=0,e=a[0],f=[b];for(var g in e)for(var h in e[g])for(var i in e[g][h])c++,d+=e[g][h][i].counter,f.push([g,h,i,e[g][h][i].counter]);return f.push("",["url parsed",c],["total request",d],""),f}function ip(a,b){var c=0,d=a[0],e=[b];for(var f in d)c++,e.push([f,d[f].counter]);return e.push("",["unique ip",c],""),e}function cc(a,b){var c=a[0],d=[b];for(var e in c)"undefined"!=e&&d.push([e,c[e].counter]);if(d.length<2)var d=[];else d.push("");return d}function avg(a,b){var c=a[0];return[b,["total",c.what],["average",c.what/c.total],["max",c.max],["min",c.min],[""]]}module.exports={url:url,ip:ip,cc:cc,avg:avg};

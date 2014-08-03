/*
 * logger-request-cli v0.0.1
 * (c) hex7c0 https://github.com/hex7c0/logger-request-cli/
 * Licensed under GPLv3
 */
"use strict";function url(a,b){var c=b[0],d=b[1];try{c[a[d]][a.method][a.status].counter++}catch(e){void 0==c[a[d]]&&(c[a[d]]=Object.create(null)),void 0==c[a[d]][a.method]&&(c[a[d]][a.method]=Object.create(null)),void 0==c[a[d]][a.method][a.status]&&(c[a[d]][a.method][a.status]={counter:1})}return c}function cc(a,b){var c=b[0],d=b[1];try{c[a[d]].counter++}catch(e){c[a[d]]={counter:1}}return c}function avg(a,b){var c=b[0],d=b[1],e=Number(a[d]);return c.what+=e,c.total++,e>c.max&&(c.max=e),e<c.min&&(c.min=e),c}try{var fs=require("fs"),startline=require("startline"),table=require("text-table")}catch(MODULE_NOT_FOUND){console.error(MODULE_NOT_FOUND),process.exit(1)}module.exports={url:url,cc:cc,avg:avg};
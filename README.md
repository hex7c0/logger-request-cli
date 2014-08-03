# [logger-request-cli](https://github.com/hex7c0/logger-request-cli)
[![NPM version](https://badge.fury.io/js/logger-request-cli.svg)](http://badge.fury.io/js/logger-request-cli)
[![Build Status](https://travis-ci.org/hex7c0/logger-request-cli.svg?branch=master)](https://travis-ci.org/hex7c0/logger-request-cli)
[![devDependency Status](https://david-dm.org/hex7c0/logger-request-cli/dev-status.svg)](https://david-dm.org/hex7c0/logger-request-cli#info=devDependencies)

[`Logger request`](https://github.com/hex7c0/logger-request) parser for [nodejs](http://nodejs.org/).
Show output to console.

## Installation

Install through NPM

```
npm install -g logger-request-cli
```
or
```
git clone git://github.com/hex7c0/logger-request-cli.git
```

## API

inside nodejs project
```js
var parser = require('logger-request-cli');

parser({
    filename: 'A.log',
    bytesReq: true
});
```

### parser(options)

#### options

 - `filename` - **String** Filename of the logfile to read it *(default "null")*
 - `ip` - **Boolean** Flag for `req.ip` *(default "disabled")*
 - `url` - **Boolean** Flag for `req.url` *(default "disabled")*
 - `response` - **Boolean** Flag for `time of response` *(default "disabled")*
 - `pid` - **Boolean** Flag for `process.pid` *(default "disabled")*
 - `bytesReq` - **Boolean** Flag for `req.socket.bytesRead` *(default "disabled")*
 - `bytesRes` - **Boolean** Flag for `req.socket._bytesDispatched` *(default "disabled")*
 - `referrer` - **Boolean** Flag for `req.headers['referrer']` *(default "disabled")*
 - `auth` - **Boolean** Flag for `basic-authentication` *(default "disabled")*
 - `agent` - **Boolean** Flag for `req.headers['user-agent']` *(default "disabled")*
 - `version` - **Boolean** Flag for `req.httpVersionMajor` *(default "disabled")*
 - `level` - **Boolean** Flag for `log level` *(default "disabled")*
 - `message` - **Boolean** Flag for `log message` *(default "disabled")*
 - `timestamp` - **Boolean** Flag for `log timestamp` *(default "disabled")*
 - `report` - **Boolean** Flag for `filename stats` *(default "disabled")*

#### Examples

Take a look at my [examples](https://github.com/hex7c0/logger-request-cli/tree/master/examples)

## License
Copyright (c) 2014 hex7c0

Licensed under the GPLv3 license

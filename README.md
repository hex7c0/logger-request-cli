# [logger-request-cli](https://github.com/hex7c0/logger-request-cli)

[![NPM version](https://img.shields.io/npm/v/logger-request-cli.svg)](https://www.npmjs.com/package/logger-request-cli)
[![Linux Status](https://img.shields.io/travis/hex7c0/logger-request-cli.svg?label=linux-osx)](https://travis-ci.org/hex7c0/logger-request-cli)
[![Windows Status](https://img.shields.io/appveyor/ci/hex7c0/logger-request-cli.svg?label=windows)](https://ci.appveyor.com/project/hex7c0/logger-request-cli)
[![Dependency Status](https://img.shields.io/david/hex7c0/logger-request-cli.svg)](https://david-dm.org/hex7c0/logger-request-cli)

Parser for [`Logger request`](https://github.com/hex7c0/logger-request).
Show output to console.

## Installation

Install through NPM

```bash
npm install -g logger-request-cli
```
or
```bash
git clone git://github.com/hex7c0/logger-request-cli.git
```

## API

global parser with `-g` option
```bash
$ logger-request -h

Usage:
  logger-request [OPTIONS] [ARGS]

Options: 
      --filename FILE    Pathname of the log file to be read
  -i, --ip               Parse ip
  -u, --url              Parse url
  -r, --reponse          Parse time of response
  -p, --pid              Parse pid
  -q, --bytesReq         Parse bytesReq
  -s, --bytesRes         Parse bytesRes
  -e, --referrer         Parse referrer
  -a, --auth             Parse basic-authentication
  -u, --agent            Parse user agent
  -w, --w3c              Parse http version
  -l, --level            Parse log level
  -m, --message          Parse log message
  -t, --timestamp        Parse log timestamp
  -R, --report           Not print filename stats
      --csv STRING       Write results to csv file
      --search STRING    Search string inside logfile
  -v, --version          Display the current version
  -h, --help             Display help and usage details

$ logger-request -u A.log

$ logger-request --csv a.csv A.log

$ logger-request --search monitode A.log
```

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

 - `filename` - **String** Pathname of the logfile to be read *(default "null")*
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
 - `csv` - **String** Write parsed object to csv file *(default "disabled")*
 - `search` - **String** Search string inside logfile *(default "disabled")*
 - `report` - **Boolean** Flag for `filename stats` *(default "enabled")*

## Examples

Take a look at my [examples](examples)

### [License GPLv3](LICENSE)

# node-easylog

![npm](https://img.shields.io/npm/v/node-easylog.svg) ![license](https://img.shields.io/npm/l/node-easylog.svg) ![github-issues](https://img.shields.io/github/issues/naxus28/node-easylog.svg)  ![Circle CI build status](https://circleci.com/gh/naxus28/node-easylog.svg?style=svg)

A simple node module that prints friendly messages to the console

![nodei.co](https://nodei.co/npm/node-easylog.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/naxus28/node-easylog.svg)
![stars](https://img.shields.io/github/stars/naxus28/node-easylog.svg)
![forks](https://img.shields.io/github/forks/naxus28/node-easylog.svg)

![forks](https://img.shields.io/github/forks/naxus28/node-easylog.svg)

![](https://david-dm.org/naxus28/node-easylog/status.svg)
![](https://david-dm.org/naxus28/node-easylog/dev-status.svg)

## Features


## Install

`npm install --save node-easylog`

## Usage
Node-easylog currently has only a "log" method that takes an object with a mandatory "message" key

`**var logger = require('node-easylog');** // require the module`

`**logger.log({'message': 'Hello World'});** // logs "Hello World" to the console`


_Log Types_

The "log" method takes an optional second key "logType" whose accepted values are: "success", "error" , "warn", and "notice" 

`**var logger = require('node-easylog');**`

`**logger.log({'message': 'Hello World', 'logType': 'success'});** // logs "Hello World" in the green color`

`**logger.log({'message': 'Hello World', 'logType': 'error'});** // logs "Hello World" in the red color`

`**logger.log({'message': 'Hello World', 'logType': 'warn'});** // logs "Hello World" in the yellow color`

`**logger.log({'message': 'Hello World', 'logType': 'notice'});** // logs "Hello World" in the blue color` 


## Test

 - **npm run test** : `mocha src/test/index.js -w`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[cli-color](https://www.npmjs.com/package/cli-color) | ^1.1.0 | ✖
[pretty-error](https://www.npmjs.com/package/pretty-error) | ^2.0.2 | ✖
[babel-cli](https://www.npmjs.com/package/babel-cli) | ^6.23.0 | ✔
[chai](https://www.npmjs.com/package/chai) | ^3.5.0 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^3.2.0 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔


## Contributing

Contributions welcome; Please submit all pull requests the against master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

Gabriel Ferraz

## License

 - **MIT** : http://opensource.org/licenses/MIT

var clc = require('cli-color');
var PrettyError = require('pretty-error');
var prettyError = new PrettyError();

var exceptions = {
  argumentException: {
    exceptionType: 'Argument Exception',
    missingMsg: 'The "log" method takes a mandatory object with a property "message"; i.e. log({"message": "hello world"})',
    logTypeError: '"logType" needs to be set to one of these values: "success", "error", "warn", or "notice"; i.e. log({"message": "hello world", "logType": "success"}). Any other value will throw an error',
    objPropertyError: 'The "log" method takes an object with a mandatory key "message" and an optional key "logType". i.e. log({"message": "hello world", "logType": "success"}). Check for typos.'
  }
};

var logProperties = [
  'message',
  'logType'
];

var logTypes = {
	error: clc.red,
	warn: clc.yellow,
	notice: clc.blue,
	success: clc.green
};

// pretty error custom styles
prettyError.appendStyle({
  'pretty-error > header > title > kind': { background: 'none', color: 'red' },
  'pretty-error > header > colon': { display: 'none' },
  'pretty-error > header > message': {
    color: 'red',
    background: 'none',
    padding: '0 1'
  },
  'pretty-error > trace > item': {
    marginLeft: 2,
    bullet: '"<grey>o</grey>"'
  },
  'pretty-error > trace > item > header > pointer > file': { color: 'bright-cyan'},
  'pretty-error > trace > item > header > pointer > colon': { color: 'cyan' },
  'pretty-error > trace > item > header > pointer > line': { color: 'bright-cyan' },
  'pretty-error > trace > item > header > what': { color: 'bright-white' },
  'pretty-error > trace > item > footer > addr': { display: 'none' }
});


module.exports = {
	exceptions,
  logTypes,
  logProperties,
	prettyError
};



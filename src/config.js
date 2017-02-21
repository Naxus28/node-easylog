const clc = require('cli-color');
var PrettyError = require('pretty-error');
var pe = new PrettyError();

const logTypes = {
	error: clc.red,
	warn: clc.yellow,
	notice: clc.blue,
	success: clc.green
};

const exceptions = {
	argumentException: {
		exceptionType: 'Argument Exception',
		message: 'The "log" function accepts either of these four strings as a second optional argument: "success", "error", "warn", or "notice". Any other value will throw an error'
	}
};

// pretty error custom styles
pe.appendStyle({
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
	logTypes,
	exceptions,
	pe
};



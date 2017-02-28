var expect = require('chai').expect;
var logger = require('../index.js');

describe('logger.log()', () => {

	it('should print "Hello World"', () => {
		logger.log({'message': 'Hello World', 'logType': 'success'}).then(
			(result) => {
				expect(result).to.equal('Hello World');
			},
			(error) => {
				return error;
			});
	});

	it('should log a string', () => {
		logger.log({'message': 'Hello World', 'logType': 'success'}).then(
			(result) => {
				expect(typeof result).to.equal('string');
			},
			(error) => {
				return error;
			});

	});

	it('should error out and display friendly warning the use about the allowed "logTypes" error message as well as the error call stack', () => {
		logger.log({'message': 'Hello World', 'logType': 'shouldFail'}).then(
			(result) => {
				expect(result).to.be.undefined;
			},
			(error) => {
				return error;
			});
	});

	it('should error out and display friendly error message warning the use about the allowed object keys to be used as arguments as well as the error call stack', () => {
		logger.log({'messag': 'Hello World', 'logType': 'success'}).then(
			(result) => {
				expect(result).to.be.undefined;
			},
			(error) => {
				return error;
			});
	});

});
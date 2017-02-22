let chai = require('chai');
let expect = chai.expect;
let logger = require('../index.js');

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

	it('should error out and display friendly error message and call stack', () => {
		logger.log({'message': 'Hello World', 'logType': 'shouldFail'}).then(
			(result) => {
				expect(result).to.be.undefined;
			},
			(error) => {
				return error;
			});
	});

});
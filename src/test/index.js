let chai = require('chai');
let expect = chai.expect;
let logger = require('../index.js');

describe('logger.log()', () => {
	
	it('should print "Hello World"', () => {
		let result = logger.log('Hello World');
		expect(result).to.equal('Hello World')
	});

	it('should log a string', () => {
		let result = logger.log('Hello World');
		expect(typeof result).to.equal('string');
	});

	it('should error out and return "undefined" if wrong argument is passed', () => {
		let result = logger.log('Hello World', 'shouldFail');
		expect(result).to.be.undefined;
	});

});
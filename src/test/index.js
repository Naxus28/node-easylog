let chai = require('chai');
let expect = chai.expect;
var should = chai.Should();
let logger = require('../index.js');
const config = require('../config');
const ArgumentException = require('../helperClasses/Errors').ArgumentException;

describe('logger.log()', () => {
	
	it('should print "Hello World"', () => {
		let result = logger.log('Hello World');
		expect(result).to.equal('Hello World')
	});

	it('should log a string', () => {
		let result = logger.log('Hello World');
		expect(typeof result).to.equal('string');
	});

	it('should throw an exception of type "Argument Exception" be "undefined"', () => {
		let result = logger.log('Hello World', 'fail');
		expect(result).to.be.undefined;
	});

});
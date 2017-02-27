const util = require('util');
const config = require('../../config');

class ExceptionsHandler {
	constructor(exception, message) {
 		this.exception = exception;
 		this.message = message;
	}

	formatError() {
		let errorObj = {
			exception: this.exception,
			message: this.message
		};

		let parsedObject = util.inspect(errorObj); // util.inspect drills into the object and gets key/value pairs (otherwise it prints [Object Object])
		
		return new Error(parsedObject); 
	}

	setError(exception, message) {
 		this.exception = exception;
 		this.message = message;
	}

	getError() {
		let formattedError = this.formatError();
		console.log(config.prettyError.render(formattedError));
	}
}

class ArgumentException extends ExceptionsHandler {
	constructor(exception, message) {
		super(exception, message);
	}
}

module.exports = {
	ArgumentException
}
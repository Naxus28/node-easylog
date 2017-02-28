'use strict';
const config = require('./config');
const objKeysValid = require('./helpers/utilities/validation').objKeysValid;
const ArgumentException = require('./helpers/classes/Errors').ArgumentException;

const logPromise = (params) => {
	return new Promise( (resolve, reject) => {
		setTimeout(() => {
			let objKeysArray = Object.keys(params);
			let exception = new ArgumentException();

			if (!objKeysValid(objKeysArray)) {
				exception.setError(config.exceptions.argumentException.exceptionType, config.exceptions.argumentException.objPropertyError);
				reject(exception.getError());
			} else if (!params.message) { 
				exception.setError(config.exceptions.argumentException.exceptionType, config.exceptions.argumentException.missingMsg);
				reject(exception.getError());
			} else if (params.logType) {
				if (config.logTypes[params.logType]) {
					resolve(params.message);
				} else {
					exception.setError(config.exceptions.argumentException.exceptionType, config.exceptions.argumentException.logTypeError);
					reject(exception.getError());
				}
			} else {
					resolve(params.message);
			}
		}, 0);
	});
}

const log = (params) => {
	return logPromise(params).then(
		(result) => {
			let logMsg = config.logTypes[params.logType] ? config.logTypes[params.logType](result) : result
			console.log(logMsg);
			
			return logMsg;
		},
		(error) => {
			return error;
		});
};

module.exports = {
	log
};


const config = require('./config');
const isValidKey = require('./helpers/utilities/validation').isValidKey;
const ArgumentException = require('./helpers/classes/Errors').ArgumentException;

const logPromise = (params) => {
	return new Promise( (resolve, reject) => {
		setTimeout(() => {
			let objKeysArray = Object.keys(params);

			if (!isValidKey(objKeysArray)) {
				let exception = new ArgumentException(config.exceptions.argumentException.exceptionType, config.exceptions.argumentException.objPropertyError);
				reject(exception.getError());
			} else {
				if (params.logType && config.logTypes[params.logType]) {
					resolve(params.message);
				} else {
					let exception = new ArgumentException(config.exceptions.argumentException.exceptionType, config.exceptions.argumentException.logTypeError);
					reject(exception.getError());
				}
			}
		}, 0);
	});
}

const log = (params) => {
	return logPromise(params).then(
		(result) => {
			console.log(config.logTypes[params.logType](result));
			return result;
		},
		(error) => {
			return error;
		});
};

module.exports = {
	log
};


const config = require('./config');
const ArgumentException = require('./helperClasses/Errors').ArgumentException;

const logPromise = (params) => {
	return new Promise( (resolve, reject) => {
		setTimeout(() => {
			if (params.logType && config.logTypes[params.logType]) {
				resolve(params.message);
			} else {
				let exception = new ArgumentException(config.exceptions.argumentException.exceptionType, config.exceptions.argumentException.message);
				reject(exception.toString());
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


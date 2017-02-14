const config = require('./config');
const ArgumentException = require('./helperClasses/Errors').ArgumentException;

const log = (params) => {
	
	let logCallBack = () => {
		if (params.logType) {
			if (config.logTypes[params.logType]) {
				message = config.logTypes[params.logType](params.message);
			} else {
				let exception = new ArgumentException(config.exceptions.argumentException.exceptionType, config.exceptions.argumentException.message);
				return exception.toString();
			}
		}

		return console.log(message);
	}

	setTimeout(logCallBack, 0);
};


module.exports = {
	log
};





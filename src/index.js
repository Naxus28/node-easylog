const config = require('./config');
const ArgumentException = require('./helperClasses/Errors').ArgumentException;

module.exports = {
	log: function(message, logType) {
		if (logType) {
			if (config.logTypes[logType]) {
				message = config.logTypes[logType](message);
			} else {
				let exception = new ArgumentException(config.exceptions.argumentException.exceptionType, config.exceptions.argumentException.message);
				console.log(exception.toString());
				return;
			}
		}
		console.log(message);
		return message;
	}
}





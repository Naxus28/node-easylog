var logger = require('./index');

logger.log({'message': 'hello world'});
logger.log({'logType': 'error'});
// logger.log({'message': 'hello world', 'logType': 'notice'});
// logger.log({'message': 'hello world', 'logType': 'warn'});
// logger.log({'message': 'hello world', 'logType': 'success'});
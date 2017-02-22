var logger = require('./index');

logger.log({'message': 'hello world', 'logTpe': 'success'});
logger.log({'message': 'hello world', 'logType': 'error'});
logger.log({'message': 'hello world', 'logType': 'notice'});
logger.log({'message': 'hello world', 'logType': 'warn'});
logger.log({'message': 'hello world', 'logType': 'success'});
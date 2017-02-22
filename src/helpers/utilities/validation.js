const config = require('../../config');

let isValidKey = function(element, index, array) { 
  return config.logProperties.includes(element); 
} 

module.exports = {
	isValidKey
};
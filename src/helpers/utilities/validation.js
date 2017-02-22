const config = require('../../config');

let testObjKeys = function(element, index, array) { 
  return config.logProperties.includes(element); 
} 

let isValidKey = function(objKeysArray) {
	return objKeysArray.every(testObjKeys);
}


module.exports = {
	isValidKey
};
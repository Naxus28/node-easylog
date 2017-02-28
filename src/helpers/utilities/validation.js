var config = require('../../config');

var testObjKeys = function(element, index, array) { 
  return config.logProperties.includes(element); 
} 

var objKeysValid = function(objKeysArray) {
	return objKeysArray.every(testObjKeys);
}


module.exports = {
	objKeysValid
};
'use strict';

const config = require('../../config');

let testObjKeys = function(element, index, array) { 
  return config.logProperties.includes(element); 
} 

let objKeysValid = function(objKeysArray) {
	return objKeysArray.every(testObjKeys);
}


module.exports = {
	objKeysValid
};
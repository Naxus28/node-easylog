const config = require('../../config');

let testObjKeys = (element, index, array) => config.logProperties.includes(element); 

let objKeysValid = (objKeysArray) => objKeysArray.every(testObjKeys);

module.exports = {
	objKeysValid
};
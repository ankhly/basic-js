const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	if (!Array.isArray(arr)) {
		throw Error(`'arr' parameter must be an instance of the Array!`);
	}
	for (let j = 0; j < 2; j++) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == '--double-prev') {
				if (i == 0) {
					arr.splice(i, 1);
				} else {
					arr[i] = arr[i - 1];
				}
			}
			if (arr[i] == '--discard-prev') {
				if (i == 0) {
					arr.splice(i, 1);
				} else {
					arr.splice(i, 1);
					arr.splice(i - 1, 1);
				}

			}
			if (arr[i] == '--discard-next') {
				if (i == arr.length - 1) {
					arr.splice(i, 1);
				} else {
					arr.splice(i, 2);
				}
			}
			if (arr[i] == '--double-next') {
				if (i == arr.length - 1) {
					arr.splice(i, 1);
				} else {
					arr[i] = arr[i + 1];
				}
			}

		}
	}
	return arr;
	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

module.exports = {
	transform
};

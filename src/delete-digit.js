const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	n = n.toString();
	let arr = [];
	for (let i = 0; i < n.length; i++) {
		let str = '';
		for (let j = 0; j < n.length; j++) {
			if (j !== i) {
				str += n[j];
			}
		}
		arr.push(+str)
	}
	arr = arr.sort(function (a, b) {
		return b - a;
	})
	return arr[0];
	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

module.exports = {
	deleteDigit
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
	n = n.toString().split('').reduce(function (a, b) {
		return a * 1 + b * 1;
	}, 0);
	if (n.toString().length !== 1) {
		for (let i = 0; i < n.toString().length; i++) {
			n = n.toString().split('').reduce(function (a, b) {
				return a * 1 + b * 1;
			}, 0);
			return n;
		}
	} else {
		return n;

	}
	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

module.exports = {
	getSumOfDigits
};

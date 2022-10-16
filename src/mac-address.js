const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
	n = n.split('-');
	let arr = [];
	for (let i = 0; i < n.length; i++) {
		if ((n[i][0] == 0 || n[i][0] == 1 || n[i][0] == 2 || n[i][0] == 3 || n[i][0] == 4 || n[i][0] == 5 || n[i][0] == 6 || n[i][0] == 7 || n[i][0] == 8 || n[i][0] == 9 || n[i][0] == "A" || n[i][0] == "B" || n[i][0] == "C" || n[i][0] == "D" || n[i][0] == "E" || n[i][0] == "F") && (n[i][1] == 0 || n[i][1] == 1 || n[i][1] == 2 || n[i][1] == 3 || n[i][1] == 4 || n[i][1] == 5 || n[i][1] == 6 || n[i][1] == 7 || n[i][1] == 8 || n[i][1] == 9 || n[i][1] == "A" || n[i][1] == "B" || n[i][1] == "C" || n[i][1] == "D" || n[i][1] == "E" || n[i][1] == "F")) {
			arr.push(n[i])
		}
	}
	if (arr.length == 6) {
		return true;
	} else {
		return false;
	}
	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}
module.exports = {
	isMAC48Address
};

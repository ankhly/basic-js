const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	s1 = s1.split('').sort();
	s2 = s2.split('').sort();
	let count = 0;
	let j = 0;
	if (s1.length == s2.length) {
		for (let i = 0; i < s1.length; i++) {
			if (s1[i] == s2[j]) {
				count++;
			}
			j++;
		}
	} else {
		for (let i = 0; i < s1.length; i++) {
			if (s1[i] == s2[j]) {
				count++;
				j++;
			}

		}
	}

	return count
	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

module.exports = {
	getCommonCharacterCount
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	let newArr = [];
	arr.forEach(function (v) {
		if (v !== -1) {
			newArr.push(v)
		}
	})
	newArr = newArr.sort(function (a, b) {
		return a - b;
	})
	let res = [];
	let j = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == -1) {
			res.push(arr[i])
		} else {
			res.push(newArr[j])
			j++
		}
	}
	return res

	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

module.exports = {
	sortByHeight
};

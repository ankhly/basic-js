const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr) {
		if (Array.isArray(arr)) {
			let res = 1;
			for (let i = 0; i < arr.length; i++) {
				let count = 1;
				if (Array.isArray(arr[i])) {
					const calc = new DepthCalculator();
					count = calc.calculateDepth(arr[i]);
					count++;
				}
				if (count > res) {
					res = count
				}
			}
			return res;
		}
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}
}

module.exports = {
	DepthCalculator
};

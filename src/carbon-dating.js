const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
	let result;
	if (typeof (sampleActivity) !== 'string') {
		return false;
	} else {
		sampleActivity = 1 * sampleActivity;
		let a = HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / sampleActivity);
		result = Math.ceil(a / 0.693);
		if (result < 0 || isNaN(result) || result == Infinity) {
			return false;
		}
	}
	return result;
	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

module.exports = {
	dateSample
};

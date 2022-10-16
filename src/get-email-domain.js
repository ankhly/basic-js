const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
	let arr = [];
	for (let i = email.length; i--;) {
		if (email[i] == '@') {
			break;
		}
		arr.push(email[i]);
	}
	return arr.reverse().join('')
	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

module.exports = {
	getEmailDomain
};

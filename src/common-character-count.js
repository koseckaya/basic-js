//const { NotImplementedError } = require('../extensions/index.js');

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
function getCommonCharacterCount(s1, s2 ) {
  let first = s1.split('')
  let second = s2
  let count = first.reduce((acc, item) => {

    let index = second.indexOf(item)
    if (index !== -1) {
      acc++
      second = second.slice(0, index) + second.slice(index + 1, second.length)
    }

    return acc
  }, 0)
  return count
}

module.exports = {
  getCommonCharacterCount
};


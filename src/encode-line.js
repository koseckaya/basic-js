const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let letter, count = 0;

  return str.split('').reduce((acc, i, index) => {
    if (!letter) { letter = i; }
    if (letter != i) {
      acc += (count === 1 ? '' : count) + letter;
      letter = i;
      count = 1;
    } else {
      count++;
    }

    if (index + 1 == str.length) {
      acc += (count === 1 ? '' : count) + letter;
    }

    return acc;
  }, '')

}

module.exports = {
  encodeLine
};

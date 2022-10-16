//const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit( n ) {
  let num = n.toString().split('').map(e => +e)
  let max = 0
  for (let i = 0; i < num.length; i++) {
    const arr = num.filter((j, index) => {
      return !(index == i)
    })
    let numb = +arr.join('')
    if( max < numb) max =numb
  }

return max
}

module.exports = {
  deleteDigit
};

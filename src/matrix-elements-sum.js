const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const excludeColumnIds = [];

  return matrix.reduce((acc, i) => {
    i.forEach((item, column) => {
      if (excludeColumnIds.includes(column)) {
        return;
      }

      if (item === 0) {
        excludeColumnIds.push(column);
      } else {
        acc += item;
      }
    });

    return acc;
  }, 0);
}

module.exports = {
  getMatrixElementsSum
};

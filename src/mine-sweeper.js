/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let matrixSizeY = matrix.length;
  let matrixSizeX = matrix[0].length;

  let map = [...(new Array(matrixSizeY))].map(() => {
    return new Array(matrixSizeX).fill(0);
  })

  return matrix.reduce((acc, row, indexY) => {
    row.forEach((mine, indexX) => {
      if (mine) {
        if (indexY - 1 >= 0) {
          if (acc[indexY - 1][indexX - 1] !== undefined) {
            acc[indexY - 1][indexX - 1]++;
          }
          if (acc[indexY - 1][indexX] !== undefined) {
            acc[indexY - 1][indexX]++;
          }
          if (acc[indexY - 1][indexX + 1] !== undefined) {
            acc[indexY - 1][indexX + 1]++;
          }
        }
        if (indexY + 1 <= matrixSizeY) {
          if (acc[indexY + 1][indexX - 1] !== undefined) {
            acc[indexY + 1][indexX - 1]++;
          }
          if (acc[indexY + 1][indexX] !== undefined) {
            acc[indexY + 1][indexX]++;
          }
          if (acc[indexY + 1][indexX + 1] !== undefined) {
            acc[indexY + 1][indexX + 1]++;
          }
        }

        if (indexX - 1 >= 0) {
          if (acc[indexY][indexX - 1] !== undefined) {
            acc[indexY][indexX - 1]++;
          }
        }

        if (indexX + 1 <= matrixSizeX) {
          if (acc[indexY][indexX + 1] !== undefined) {
            acc[indexY][indexX + 1] += 1;
          }
        }
      }
    })

    return acc
  }, map)
}

module.exports = {
  minesweeper
};
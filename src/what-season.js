//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date, antiCheat = true) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }

  if (antiCheat) {
    const springDate = new Date(2020, 02, 31)
    if (getSeason(springDate, false) !== 'spring') {
      throw new Error('Invalid date!')
    }
    if (Object.keys(date).length !== 0) {
      throw new Error('Invalid date!')
    }
  }

  if (date instanceof Date && !isNaN(date)) {
    let month = date.getMonth()
    if (month >= 2 && month <= 4) return 'spring'
    if (month >= 5 && month <= 7) return 'summer'
    if (month >= 8 && month <= 10) return 'autumn'
    return 'winter'
  } else {
    throw new Error ('Invalid date!')
  }
}

module.exports = {
  getSeason
};
//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  repeatTimes = options.repeatTimes || 1
  separator = options.separator || '+'
  additionSeparator = options.additionSeparator || '|'
  additionRepeatTimes = options.additionRepeatTimes || 1
  str = String(str)
  options.addition = String(options.addition)
  if (options.addition === 'undefined') {
    options.addition =  ''
  }
 
  let aSarr = []
  while (additionRepeatTimes--) {
    aSarr.push(options.addition)
  }
   let addSepar = aSarr.join(`${ additionSeparator }`)
  let resArr = []
  while (repeatTimes--) {
    resArr.push(str + addSepar)
  }
  let res = resArr.join(`${separator}`)
  return res
}

module.exports = {
  repeater
};

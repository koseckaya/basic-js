//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (typeof value === 'undefined') {
      this.chain.push(`( )`)
    } else {
      this.chain.push(`( ${value} )`)
    }
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.chain.length) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!')
    }

    this.chain.splice(position - 1, 1)

    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let resultChain = this.chain.join('~~')
    this.chain = []
    return resultChain
  }
};

module.exports = {
  chainMaker
};

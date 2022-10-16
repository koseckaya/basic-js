/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  direct;
  matrix = {};

  constructor(direct = true) {
    this.direct = direct

    this.setupMatrix();
  }

  setupMatrix() {
    let alph = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i <= 25; i++) {
      this.matrix[alph[i]] = {};
      const subAlph = alph.substring(i, 26 + i)
      for (let j = 0; j <= 25; j++) {
        this.matrix[alph[i]][alph[j]] = subAlph[j];
      }
    }
  }

  changeMessage(message) {
    return message.toLowerCase()
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!')
    let res = ''
    let messageLower = this.changeMessage(message);
    let keyString = this.getKeyString(messageLower, key);

    for (let i = 0; i < messageLower.length; i++) {
      if (/[a-z]/.test(messageLower[i])) {
        res += this.matrix[messageLower[i]][keyString[i]];
      } else {
        res += messageLower[i];
      }
    }

    return this.getResultMessage(res)

  }
  decrypt(encMessage, key) {
    if (!encMessage || !key) throw new Error('Incorrect arguments!')
    let res = ''
    let encMessageLower = this.changeMessage(encMessage);
    let keyString = this.getKeyString(encMessageLower, key);

    for (let i = 0; i < encMessageLower.length; i++) {
      if (/[a-z]/.test(encMessageLower[i])) {
        const subAlph = this.matrix[keyString[i]];

        for (const key in subAlph) {
          const element = subAlph[key];

          if (element === encMessageLower[i]) {
            res += key;
          }
        }
      } else {
        res += encMessageLower[i];
      }
    }

    return this.getResultMessage(res)

  }

  getKeyString(message, key) {
    let keyString = '';

    if (key.length < message.length) {
      const countKeys = Math.ceil(message.length / key.length);
      keyString = key.repeat(countKeys).substring(0, message.length);
    } else {
      keyString = key.substring(0, message.length);
    }

    let countLetter = 0;
    const result = message.replace(/[a-z]/g, () => {
      return keyString[countLetter++]
    })

    return result.toLowerCase();
  }

  getResultMessage(result) {
    return this.direct ? result.toUpperCase() : result.split('').reverse().join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};

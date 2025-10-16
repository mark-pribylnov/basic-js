const { NotImplementedError } = require("../lib");

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
 * AEIHQX SX DLLU! -> ALPHON SE ALPH!
 *
 */

class VigenereCipheringMachine {
  constructor(NOTreversed = true) {
    this.NOTreversed = NOTreversed;
  }

  convertToRealKeyword(w, kw) {
    const newStr = [];
    let j = 0;
    const regEx = /[A-Za-z]/;

    for (let i = 0; i < w.length; i++) {
      if (w[i].match(regEx)) {
        newStr.push(kw[j % kw.length].toUpperCase());
        j++;
      } else {
        newStr.push(w[i]);
      }
    }
    return newStr.join("");
  }

  encrypt(message, keyword) {
    if (!message || !keyword) {
      throw new Error("Incorrect arguments!");
    }

    const realKeyword = this.convertToRealKeyword(message, keyword);
    message = message.toUpperCase();

    const charCodeCapitalA = 65;
    const charCodeCapitalZ = 90;
    const alphabetLength = charCodeCapitalZ - charCodeCapitalA + 1;

    const finalStr = [];
    let keywordPointer = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (char.match(/[A-Z]/)) {
        const messageCharCode = char.charCodeAt(0) - charCodeCapitalA;
        const keywordCharCode = realKeyword[i].charCodeAt(0) - charCodeCapitalA;

        const encryptedCharCode = (messageCharCode + keywordCharCode) % alphabetLength;
        finalStr.push(String.fromCharCode(encryptedCharCode + charCodeCapitalA));
        keywordPointer++;
      } else {
        finalStr.push(char);
      }
    }

    const encrypted = finalStr.join("");
    return this.NOTreversed ? encrypted : encrypted.split("").reverse().join("");
  }

  decrypt(encryptedMessage, keyword) {
    if (!encryptedMessage || !keyword) {
      throw new Error("Incorrect arguments!");
    }

    const realKeyword = this.convertToRealKeyword(encryptedMessage, keyword);
    encryptedMessage = encryptedMessage.toUpperCase();

    const charCodeCapitalA = 65;
    const charCodeCapitalZ = 90;
    const alphabetLength = charCodeCapitalZ - charCodeCapitalA + 1;

    const finalStr = [];
    let keywordIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];

      if (char.match(/[A-Z]/)) {
        const encryptedCharCode = char.charCodeAt(0) - charCodeCapitalA;
        const keywordCharCode = realKeyword[i].charCodeAt(0) - charCodeCapitalA;

        const decryptedCharCode = (encryptedCharCode - keywordCharCode + alphabetLength) % alphabetLength;
        finalStr.push(String.fromCharCode(decryptedCharCode + charCodeCapitalA));
        keywordIndex++;
      } else {
        finalStr.push(char);
      }
    }

    const decrypted = finalStr.join("");
    return this.NOTreversed ? decrypted : decrypted.split("").reverse().join("");
  }
}

const objDirect = new VigenereCipheringMachine();
const objReverse = new VigenereCipheringMachine(true);

// console.log(obj.encrypt("attack at dawn!", "alphonse"));
// console.log(objDirect.decrypt("AEIHQX SX DLLU!", "alphonse"));
// console.log(objReverse.encrypt("attack at dawn!", "alphonse"));
// console.log(objReverse.decrypt("AEIHQX SX DLLU!", "alphonse"));

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};

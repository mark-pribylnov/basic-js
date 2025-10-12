const { NotImplementedError } = require("../lib");

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
  function getCharClones(string, index, counter) {
    const nextChar = string[index + 1];
    const currentChar = string[index];
    if (nextChar !== currentChar) return [counter, index];

    return getCharClones(str, index + 1, (counter += 1));
  }

  let finalStr = "";

  for (let i = 0; i <= str.length - 1; ) {
    const nextChar = str[i + 1];
    const currentChar = str[i];

    if (nextChar === currentChar) {
      const [counter, lastCheckedIndex] = getCharClones(str, i, 1);
      finalStr += `${counter}${currentChar}`;
      i = lastCheckedIndex + 1;
    } else {
      finalStr += currentChar;
      i += 1;
    }
  }

  return finalStr;
}
// just inside the loop in the body if the next char is the same do i+=2 and write "n"char else write the char as it is.
// console.log(encodeLine("aabbbc")); //3b2ac
// console.log(encodeLine("aaaatttt"));
// console.log(encodeLine("aabbccc"));
// console.log(encodeLine("abbcca"));
// console.log(encodeLine("xyz"));
// console.log(encodeLine(""));

module.exports = {
  encodeLine,
};

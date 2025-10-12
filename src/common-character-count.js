const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  function getCommonChars(str1, str2) {
    const arr = [];

    str1.split("").forEach(char => {
      if (!arr.includes(char) && str2.includes(char)) {
        arr.push(char);
      }
    });

    return arr;
  }
  function countCommonIndiviually(commonChars, str) {
    return commonChars.map(char => {
      const counter = str.split("").reduce((acc, strChar) => {
        if (char === strChar) return (acc += 1);
        return acc;
      }, 0);

      return [char, counter];
    });
  }
  function calcCommonChars(arr1, arr2) {
    let commonCounter = 0;

    arr1.forEach((el, ind) => {
      let biggerNum = null;
      let lowerNum = null;

      if (el[1] > arr2[ind][1]) {
        biggerNum = el[1];
        lowerNum = arr2[ind][1];
      } else {
        biggerNum = arr2[ind][1];
        lowerNum = el[1];
      }

      commonCounter += lowerNum;
    });

    return commonCounter;
  }

  const commonChars = getCommonChars(s1, s2);

  const firstCommonChars = countCommonIndiviually(commonChars, s1);
  const secondCommonChars = countCommonIndiviually(commonChars, s2);

  return calcCommonChars(firstCommonChars, secondCommonChars);
}

console.log(getCommonCharacterCount("aabcc", "adcaa")); //3
console.log(getCommonCharacterCount("abca", "xyzbac")); //3
console.log(getCommonCharacterCount("zzzz", "zzzzzzzz")); //4
console.log(getCommonCharacterCount("", "abc")); //0
console.log(getCommonCharacterCount("a", "b")); //0

module.exports = {
  getCommonCharacterCount,
};

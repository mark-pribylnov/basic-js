const { NotImplementedError } = require("../lib");

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
 * repeater('STRING',
 * {
 * repeatTimes: 3,
 * separator: '**',
 * addition: 'PLUS',
 * additionRepeatTimes: 3,
 * additionSeparator: '00'
 * })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 * '   STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *     STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS
 */

function repeater(str, options) {
  str = String(str);

  function createAddition(separator) {
    let addition = "";
    for (let i = 1; i <= options.additionRepeatTimes; i++) {
      if (i === options.additionRepeatTimes) {
        addition += options.addition;
      } else {
        addition += options.addition + separator;
      }
    }
    return addition;
  }
  function createRepeatedStr(s, repeatTimes) {
    return Array(repeatTimes).fill(s);
  }
  function addAdditionAndSeparator(s, addition) {
    return s.map(el => {
      el += addition + options.separator;
      return el;
    });
  }
  function addAddition(s, addition) {
    return s.map(el => {
      el += addition;
      return el;
    });
  }
  function joinStr(s, separator = "") {
    return s.join(separator);
  }
  function cutOffSeparator(s) {
    return s.slice(0, -options.separator.length);
  }

  if (Object.keys(options).length === 1 && Object.keys(options)[0] === "repeatTimes") {
    const repeatedStr = createRepeatedStr(str, options.repeatTimes);
    const joined = joinStr(repeatedStr, "+");
    return joined;
  }
  if (!Object.keys(options).includes("repeatTimes")) {
    return str + options.addition;
  }

  if (
    !Object.keys(options).includes("separator") &&
    !Object.keys(options).includes("additionRepeatTimes") &&
    !Object.keys(options).includes("additionSeparator")
  ) {
    const repeatedStr = createRepeatedStr(str, options.repeatTimes);
    const repeatedStrWithAddition = addAddition(repeatedStr, options.addition);
    const joined = joinStr(repeatedStrWithAddition, "+");
    return joined;
  }
  if (Object.keys(options).length === 4 || Object.keys(options).length === 3) {
    const addition = options.additionSeparator ? createAddition(options.additionSeparator) : createAddition("|");
    const repeatedStr = createRepeatedStr(str, options.repeatTimes);
    const repeatedStrWithAddition = addAddition(repeatedStr, addition);
    const joined = options.separator
      ? joinStr(repeatedStrWithAddition, options.separator)
      : joinStr(repeatedStrWithAddition, "+");
    return joined;
  }

  const addition = createAddition(options.additionSeparator);
  const repeatedStr = createRepeatedStr(str, options.repeatTimes);
  const repeatedStrWithSeparator = addAdditionAndSeparator(repeatedStr, addition);
  const joined = joinStr(repeatedStrWithSeparator);
  const final = cutOffSeparator(joined);

  return final;
}

// console.log(
//   repeater("STRING", {
//     repeatTimes: 3,
//     separator: "**",
//     addition: "PLUS",
//     additionRepeatTimes: 3,
//     additionSeparator: "00",
//   })
// );
// console.log(repeater("la", { repeatTimes: 3 })); // la+la+la
// console.log(repeater("single", { repeatTimes: 1 })); // single
// console.log(repeater("12345", { repeatTimes: 5 })); // 12345+12345+12345+12345+12345
// console.log(repeater("la", { repeatTimes: 3, separator: "s" })); // laslasla
// console.log(repeater("TESTstr", { separator: "ds", addition: "ADD!", additionSeparator: ")))000" })); // TESTstrADD!

const objWithSpecificCoercion = {
  [Symbol.toPrimitive]: hint => (hint !== "number" ? "STRING_OR_DEFAULT" : "NUMBER"),
};
// console.log(repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion }));
// "STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT"

// repeater("REPEATABLE_STRING", { repeatTimes: 2, addition: "ADDITION", additionRepeatTimes: 3 });
// REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION

// console.log(
//   repeater("REPEATABLE_STRING", {
//     repeatTimes: 2,
//     addition: "ADDITION",
//     additionSeparator: "222",
//     additionRepeatTimes: 3,
//   })
// );
// REPEATABLE_STRINGADDITION222ADDITION222ADDITION+REPEATABLE_STRINGADDITION222ADDITION222ADDITION

// console.log(
//   repeater("REPEATABLE_STRING", {
//     repeatTimes: 2,
//     separator: "222",
//     addition: "ADDITION",
//     additionRepeatTimes: 3,
//   })
// );
// REPEATABLE_STRINGADDITION|ADDITION|ADDITION222REPEATABLE_STRINGADDITION|ADDITION|ADDITION

module.exports = {
  repeater,
};

const { NotImplementedError } = require("../extensions/index.js");

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
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date === undefined) {
    console.log("Unable to determine the time of year!");
    return "Unable to determine the time of year!";
  }

  if (
    typeof date === "string" ||
    typeof date === "number" ||
    typeof date === "function" ||
    date.toString() === "[object Object]" ||
    Array.isArray(date) ||
    Object.getOwnPropertyNames(date).length
  ) {
    throw new Error("Invalid date!");
  }

  let month;

  try {
    month = date.getMonth();
  } catch {}

  if (month === 11 || month <= 1) {
    console.log("winter");
    return "winter";
  } else if (month >= 2 && month < 5) {
    console.log("spring");
    return "spring";
  } else if (month >= 5 && month < 8) {
    console.log("summer");
    return "summer";
  } else if (month >= 8 && month < 11) {
    console.log("autumn (fall)");
    return "autumn (fall)";
  }

  throw new Error("Invalid date!");
}

module.exports = {
  getSeason,
};

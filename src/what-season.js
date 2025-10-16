const { NotImplementedError } = require("../lib");

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
  try {
    if (!date) return "Unable to determine the time of year!";
    // if (!(date instanceof Date)) throw new Error("Invalid date!");
    // if (isNaN(date)) throw new Error("Invalid date!");
    // console.log(date);

    const month = date.getMonth() + 1;

    if ((month >= 1 && month <= 2) || month === 12) return "winter";
    if (month >= 3 && month <= 5) return "spring";
    if (month >= 6 && month <= 8) return "summer";
    if (month >= 9 && month <= 11) return "autumn";
    return month;
  } catch (error) {
    throw new Error("Invalid date!");
  }
}

// console.log(getSeason(new Date(2020, 02, 31)));

module.exports = {
  getSeason,
};

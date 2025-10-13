const { NotImplementedError } = require("../lib");
// https://en.wikipedia.org/wiki/Tower_of_Hanoi#:~:text=The%20minimum%20number%20of%20moves%20required%20to%20solve%20a%20Tower%20of%20Hanoi%20puzzle%20is%202n%20%E2%88%92%201%2C%20where%20n%20is%20the%20number%20of%20disks.

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1;
  const turnsInSecond = turnsSpeed / 60 / 60;
  const seconds = Math.floor(turns / turnsInSecond);

  return { turns, seconds };
}

console.log(calculateHanoi(38, 4594));

module.exports = {
  calculateHanoi,
};

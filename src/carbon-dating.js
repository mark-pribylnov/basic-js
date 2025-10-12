const { NotImplementedError } = require("../lib");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (
    !sampleActivity ||
    typeof sampleActivity !== "string" ||
    isNaN(Number(sampleActivity)) ||
    !sampleActivity.trim() ||
    sampleActivity >= 9000 ||
    // !Number(sampleActivity)
    Number(sampleActivity) <= 0
  )
    return false;

  console.log(Number(sampleActivity));
  // console.log(typeof NaN);

  const time = (Math.log(MODERN_ACTIVITY / sampleActivity) / Math.log(2)) * HALF_LIFE_PERIOD;

  if (time <= 0) return false;
  // return Math.round(time);
  return Math.ceil(time);
}

console.log(dateSample("0"));
module.exports = {
  dateSample,
};

// assert.strictEqual(dateSample("9000"), false);
//   assert.strictEqual(dateSample("15.1"), false);
//   assert.strictEqual(dateSample("0"), false);
//   assert.strictEqual(dateSample("-5"), false);
//   assert.strictEqual(dateSample("-55.8"), false);

// test("should return false on wrong type", () => {
//   assert.strictEqual(dateSample(3), false);
//   assert.strictEqual(dateSample(3.312312), false);
//   assert.strictEqual(dateSample(false), false);
//   assert.strictEqual(dateSample(null), false);
//   assert.strictEqual(dateSample(undefined), false);
//   assert.strictEqual(dateSample([3]), false);
//   assert.strictEqual(dateSample(["3"]), false);
//   assert.strictEqual(dateSample({ 3.14: "3dec" }), false);
// });

// test("should return false if no argument", () => {
//   assert.strictEqual(dateSample(), false);
// });

// test("should validate parameter", () => {
//   assert.strictEqual(dateSample("ACTIVITY OVER 9000"), false);
//   assert.strictEqual(dateSample("one"), false);
//   assert.strictEqual(dateSample(""), false);
//   assert.strictEqual(dateSample(" "), false);
//   assert.strictEqual(dateSample(" \n\t\r"), false);
// });

// function dateSample(sampleActivity) {
//   sampleActivity = +sampleActivity;

//   function countFullCycles(modernActivity, curruntCycle = 0) {
//     if (modernActivity / 2 < 1) {
//       const lastFullHalfLife = modernActivity;
//       const remainder = modernActivity / 2;
//       const fullCycles = curruntCycle;

//       return [lastFullHalfLife, remainder, fullCycles];
//     }

//     return countFullCycles(modernActivity / 2, (curruntCycle += 1));
//   }

//   const [lastFullHalfLife, remainder, fullCycles] = countFullCycles(MODERN_ACTIVITY);

//   const lastFraction = (lastFullHalfLife - 1) / (lastFullHalfLife - remainder);

//   const totalTime = fullCycles * HALF_LIFE_PERIOD + lastFraction * HALF_LIFE_PERIOD;
//   console.log(remainder, lastFraction.toFixed(3));

//   return totalTime;
// }

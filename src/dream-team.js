const { NotImplementedError } = require("../lib");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (typeof members !== "string" && !Array.isArray(members)) return false;
  return members
    .map(name => {
      if (typeof name === "string") {
        return name.trim()[0].toUpperCase();
      }
    })
    .sort()
    .join("");
}

// console.log(createDreamTeam(["Matt", "Ann", "Dmitry", "Max"]));
// console.log(createDreamTeam(["Olivia", 1111, "Lily", "Oscar", true, null]));
module.exports = {
  createDreamTeam,
};

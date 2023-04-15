const { NotImplementedError } = require("../extensions/index.js");

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members)) return false;

  if (members.length === 0) {
    console.log(false);
    return false;
  }

  let teamName = [];
  for (let person of members) {
    if (typeof person === "string") {
      for (let char of person) {
        if (char !== " ") {
          teamName.push(char.toUpperCase());
          break;
        }
      }
    }
  }

  teamName = teamName.sort().join("");
  console.log(teamName);
  return teamName;
}

module.exports = {
  createDreamTeam,
};

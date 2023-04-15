"use strict";

function dreamTeam(members) {
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

dreamTeam([
  "   William Alston ",
  " Paul Benacerraf",
  "  Ross Cameron",
  "       Gilles Deleuze",
  "  Arda Denkel ",
  "  Michael Devitt",
  "  Kit Fine",
  " Nelson Goodman",
  "David Kolb",
  "   Saul Kripke",
  "  Trenton Merricks",
  "  Jay Rosenberg",
]);
//ADGJKMNPRSTW

// for (let char of "   William Alston ") {
//   if (char !== " ") {
//     console.log(char);
//   }
// }

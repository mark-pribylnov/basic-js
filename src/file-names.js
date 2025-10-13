const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const copy = {};
  const newArr = [];

  names.map(name => {
    if (copy[name] === undefined) {
      if (newArr.includes(name)) {
        copy[name] = 1;
        newArr.push(`${name}(${copy[name]})`);
        return;
      }
      copy[name] = 0;
      newArr.push(name);
      return;
    } else {
      copy[name] += 1;
      newArr.push(`${name}(${copy[name]})`);
      return;
    }
  });

  return newArr;
}

console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));

module.exports = {
  renameFiles,
};

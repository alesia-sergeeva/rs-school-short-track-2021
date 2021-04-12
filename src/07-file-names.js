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
  const arrNames = [];
  const obj = {};
  for (let i = 0; i < names.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(obj, names[i])) {
      obj[names[i]] += 1;
    } else {
      obj[names[i]] = 0;
    }
    if (!arrNames.includes(names[i])) {
      arrNames.push(names[i]);
    } else {
      arrNames.push(`${names[i]}(${obj[names[i]]})`);
    }
    if (!Object.prototype.hasOwnProperty.call(obj, arrNames[arrNames.length - 1])) {
      obj[arrNames[arrNames.length - 1]] = 0;
    }
  }
  return arrNames;
}

module.exports = renameFiles;

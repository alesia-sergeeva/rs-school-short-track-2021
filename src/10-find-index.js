/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  let middle;
  let res;

  while (lastIndex >= firstIndex) {
    middle = Math.floor((firstIndex + lastIndex) / 2);
    res = array[middle];
    if (res > value) {
      lastIndex = middle - 1;
    } else if (res < value) {
      firstIndex = middle + 1;
    } else if (res === value) {
      return middle;
    }
  }
  return false;
}

module.exports = findIndex;

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const res = new Array(arr.length);
  const currArr = [];

  arr.forEach((elem, i) => {
    if (elem === -1) {
      res[i] = elem;
    } else {
      currArr.push(elem);
    }
  });

  for (let i = 0; i < res.length; i++) {
    if (!res[i]) {
      const min = currArr.reduce((acc, curr) => (acc < curr ? acc : curr));
      res[i] = min;
      currArr.splice(currArr.indexOf(min), 1);
    }
  }

  return res;
}

module.exports = sortByHeight;

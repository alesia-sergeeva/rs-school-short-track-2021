/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let currS2 = s2;
  let res = 0;

  for (let i = 0; i < s1.length; i++) {
    const letter = s1[i];
    const indexS2 = currS2.indexOf(letter);

    if (indexS2 >= 0) {
      res++;
      currS2 = currS2.slice(0, indexS2) + currS2.slice(indexS2 + 1);
    }
  }
  return res;
}

module.exports = getCommonCharacterCount;

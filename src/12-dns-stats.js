/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsObj = {};

  const arr = [];
  for (let i = 0; i < domains.length; i++) {
    const tempArr = domains[i].split('.').reverse();
    let tempName = '';
    for (let j = 0; j < tempArr.length; j++) {
      tempName += `.${tempArr[j]}`;
      arr.push(tempName);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (Object.keys(domainsObj).indexOf(arr[i]) !== -1) {
      domainsObj[arr[i]] += 1;
    } else {
      domainsObj[arr[i]] = 1;
    }
  }
  return domainsObj;
}

module.exports = getDNSStats;

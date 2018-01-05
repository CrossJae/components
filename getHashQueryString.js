/**
 * 获取 hash 参数
 * @param {*string} key
 */
export function getHashQueryString(key) {
  let hash = location.search;
  let reg = new RegExp('[\?\&]' + key + '=([^\&]+)', 'i');
  let result = hash.match(reg);

  if (result == null || result.length < 1) {
    return '';
  }

  return result[1];
}

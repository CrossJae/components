/*
 * _.capitalize([string=''])
 * Converts the first character of string to upper case and the remaining to lower case.
 * 转换字符串第一个字符为大写，其他为小写
 */

// lodash
// 又借助了_.upperFirst
function capitalize(string) {
  return upperFirst(string.toLowerCase())
}

// mine
// 字符串分解成数组，将字符串小写，将第一个替换成大写。
const capitalize = (str) => {
  if( str && typeof str === 'string'){
    const arr = str.split('');
    return str.toLowerCase().replace(arr[0], arr[0].toUpperCase());
  }else{
    return str;
  }
}

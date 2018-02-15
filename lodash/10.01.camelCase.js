/*
 * _.camelCase([string=''])
 * Converts `string` to [camel case]
 * 将字符串里的字母转换成驼峰格式
 */

// 依托于_.words，将字符串返回成单词数组，将所有单词都小写，再将首字母大写（capitalize）拼接成字符串

// lodash
const camelCase = (string) => (
  words(`${string}`.replace(/['\u2019]/g, '')).reduce((result, word, index) => {
    word = word.toLowerCase()
    return result + (index ? capitalize(word) : word)
  }, '')
)

export default camelCase

// mine
// 没有考虑将所有单词字母先小写
function camelCase(str){
  // 思路：1.碰到非字母字符后的第一个字母，变成大写，2.去掉非字母字符
  return str.replace(/[^a-zA-Z]+([a-zA-Z])/g, function(word){
    var _W = word.substring(word.length-1,word.string).toUpperCase();
    return _W
  }).replace(/[^a-zA-Z]/g, '');
}

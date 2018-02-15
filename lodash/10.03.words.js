/*
 * _.words([string=''], [pattern])
 * 拆分字符串成数组
 * _.words('fred, barney, & pebbles');
 * => ['fred', 'barney', 'pebbles']
 */


// lodash
function words(string, pattern) {
  if (pattern === undefined) {
    const result = hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string)
    return result || []
  }
  return string.match(pattern) || []
}

export default words

// mine
function words(str, reg){
  return reg ? str.match(reg) : str.match(/[a-zA-Z]+/g) || [];
}


// question
// 不太懂为什么要区分unicode和ascii字符

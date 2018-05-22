import asciiToArray from './asciiToArray.js'
import hasUnicode from './hasUnicode.js'
import unicodeToArray from './unicodeToArray.js'

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string) // 普通的字符串转数组方法 str.split('')
}

export default stringToArray

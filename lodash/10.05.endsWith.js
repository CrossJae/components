/*
 * _.endsWith([string=''], [target], [position=string.length])
 * 检查字符串是不是以target结尾
 */


 /**
  * Checks if `string` ends with the given target string.
  *
  * @since 3.0.0
  * @category String
  * @param {string} [string=''] The string to inspect.
  * @param {string} [target] The string to search for.
  * @param {number} [position=string.length] The position to search up to.
  * @returns {boolean} Returns `true` if `string` ends with `target`,
  *  else `false`.
  * @see includes, startsWith
  * @example
  *
  * endsWith('abc', 'c')
  * // => true
  *
  * endsWith('abc', 'b')
  * // => false
  *
  * endsWith('abc', 'b', 2)
  * // => true
  */
 function endsWith(string, target, position) {
   const { length } = string// 将length解藕出来
   position = position === undefined ? length : +position;// 为什么不能直接position?length:+position
   if (position < 0 || position != position) {
     position = 0
   }
   else if (position > length) {
     position = length
   }
   const end = position
   position -= target.length;// ！！！被我遗忘，没有考虑target可能不是一个字符
   return position >= 0 && string.slice(position, end) == target
 }

 export default endsWith

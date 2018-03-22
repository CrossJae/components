import slice from '../slice.js'

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  const { length } = array
  end = end === undefined ? length : end; // 未传end取len
  return (!start && end >= length) ? array : slice(array, start, end)
}

export default castSlice
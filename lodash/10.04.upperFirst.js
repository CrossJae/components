/*
 * _.upperFirst([string=''])
 * Converts the first character of `string` to upper case.
 * 转换第一个字符为大写
 */

// lodash
// 借助了internal/createCaseFirst.js
// createCaseFirst返回函数，操作upperFirst带的参数
const upperFirst = createCaseFirst('toUpperCase')

// mine

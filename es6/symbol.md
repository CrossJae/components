# Symbol

1. 一种数据类型，类似字符串，不是对象
2. symbol值可以用作标识符、对象的属性名
3. `Object.getOwnPropertySymbols(x)`
4. `Symbol.for`为 Symbol 值登记的名字，是全局环境的，可以在不同的 iframe 或 service worker 中取到同一个值。
5. 

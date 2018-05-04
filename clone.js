// js，各种数据类型的拷贝
// 基础类型：undefined, null, boolean, string, number, symbol
// 引用类型：object

/* number
 * string
 * array
 * reg
 * function
 * date
 * object
 *
 * map
 * symbol
 * buffer
 */

// function t(){
//   let m = String.prototype.toString.apply(arguments);
//   console.log(m)
// }
// t([1,2,3])
// JSON.parse(JSON.stringify(obj))


// var cloneObj = function(obj){
//   var str, newobj = obj.constructor === Array ? [] : {};
//   if(typeof obj !== 'object'){
//     return;
//   }else if(window.JSON){
//     str = JSON.string(obj),
//     newobj = JSONparse(str);
//   }else{
//     for(var i in obj){
//       newobj[i] = typeof obj[i] === 'object'?cloneObj(obj[i]) : obj[i];
//     }
//   }
//   return newobj;
// }


// var a = {
//   name:'cross',
//   age: 20
// }
// var b = {
//   like: 'game'
// }
// Object.assign(a, b);
// console.log(a);
// console.log(b);

/*
 * protoArray： 要添加方法的对象数组
 * nameToFunc: 方法对象
*/
function defineMethods(protoArray, nameToFunc){
  protoArray.forEach(function(proto){
    var names = Object.keys(nameToFunc),// 返回方法key值的数组，是个数组！！！
        i = 0;
    for(; i< names.length;i++){
      Object.defineProperty(proto, names[i], {
        enumerable: false,
        configurable: true,
        writable: true,
        value: nameToFunc[names[i]]
      })
    }
  })
}
defineMethods( [ Object.prototype ], {
  '$clone': function(srcStack, dstStack){
    
  }
})
// var a = {
//   'clone': function(){
//     console.log('abc');
//   }
// }

// var a = function(){
//     console.log('ab')
// }
//
// var test = Object.keys(a)
// console.log(test);

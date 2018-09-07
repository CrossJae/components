/*
 * 函数柯里化 Curry
 * 将某个函数作为参数传递到另一个函数中
 * 通过闭包的方式，将参数（函数）传递参数进而实现求值
 * https://github.com/xingbofeng/xingbofeng.github.io/issues/20
*/
// function curry(fn){
//     var args = Array.prototype.slice.call(arguments, 1);
//     return function(){
//         var innerArgs = Array.prototype.slice.call(arguments);
//         var finalArgs = args.concat(innerArgs);
//         return fn.apply(null, finalArgs);
//     }
// }
function curry(fn){
    const args1 = Array.prototype.slice.call(arguments, 1);
    return function(){
        const args2 = Array.from(arguments);
        const arr = args1.concat(args2);
        return fn.apply(this, arr);
    }
}

const sum = (a, b) =>{
    return a+b;
}
const result = curry(sum, 1)(2);
console.log(result); // 3
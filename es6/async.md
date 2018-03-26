# async

* Generator语法糖
* 判断函数是否是async，使用`Object.prototype.toString.call(fn)`，如果输出`[object AsyncFunction]`那就是async函数，否则是普通函数
* 内置执行器，不需要next方法
* 返回值是Promise对象；Generator生成器的返回是Iterator对象。
* async可以看作多个异步操作，包装成一个Promise对象，是Generator和Promise更高级的封装
* 多个await命令，不存在继发关系的时候，最好同时触发，使用`Promise.all([])`
```
let [foo, bar] = await Promise.all([
    getFoo(),
    getBar()
]);
```
* 可以按顺序执行异步操作的方案
* 使用方法：
  * 声明一个异步函数`async function someName(){...}`
  * 暂停异步的功能执行`await someAsyncCall()`
* async的基础还是异步请求、回调、promise、generator
```
// 古老的回调地狱，回调函数中包含回调，难以阅读和理解
$.ajax({
  url: 'ddd',
  dataType: 'jsonp',
  success: function(){
    $.ajax({
        success: function(){
          $.ajax({
            ...
          })
        }
    })
  }
})
```

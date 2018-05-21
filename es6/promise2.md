# Promise博客

* Promise实例参数是一个函数
* new Promise返回一个promise对象
* .then方法调用两个回调函数onFulfilled和onRejected
* Promise和请求无关，可以配合请求，形成 **异步请求方案**
* .then / .catch 创建并返回一个新的Promise对象

### Promise基础知识

1. 为什么出现Promise
    * 解决了回调地狱的难以理解、编写、修改的问题
2. 特点
    * 一旦建立，立即执行，无法取消
    * 链式调用`.then`
    * 可以捕捉错误`.then(null, onRejected)`或者`.catch()`
3. 状态
    1. pedding
    2. fulfilled
    3. rejected
    * 其中，fulfilled和rejected都是已定型状态`resolved`，一旦定型就不会改变
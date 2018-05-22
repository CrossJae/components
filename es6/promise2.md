# Promise博客

* Promise实例参数是一个函数
* new Promise返回一个promise对象
* .then方法调用两个回调函数onFulfilled和onRejected
* Promise和请求无关，可以配合请求，形成 **异步请求方案**
* .then / .catch 创建并返回一个新的Promise对象

### Promise基础知识

1. Promise解决了什么痛点
    * 解决了回调地狱的难以理解、编写、修改的问题
2. 特点
    * 一旦建立，立即执行，无法取消
    * 链式调用`.then`
    * 可以捕捉错误`.then(null, onRejected)`或者`.catch()`
3. 状态
    1. pedding - 进行中
    2. fulfilled - 已成功
    3. rejected - 已失败
    * 其中，`fulfilled`和`rejected`都是已定型状态`resolved`，一旦定型就不会改变
4. 使用方法
    ```
    // new Promise()的参数是一个函数
    // 该函数的两个参数是回调函数resolve和reject
    const name = 'cross';
    const promise = new Promise((resolve, reject) => {
        if(name === 'cross'){
            resolve(name);
        }else{
            reject();
        }
    })
    // .then(resolve, reject)，then接受两个参数，并执行？
    promise.then(value => {
        // success
        console.log('==================success=================', value);
        console.log(value);
    }, error => {
        // failure
        console.log('==================failure=================', error);
    })
    ```
5. Promise.all()
    * 参数：数组
    * 功能：数组内的所有Promise都执行完，进行下一步
6. Promise.race()
    * 参数：数组
7. 例子，如何嵌套请求，比如从接口A拿到用户id，通过id拼接到接口b拿到跟用户相关的商品
# Promise

1. 一个容器，保存着某个未来会结束的事件结果。
2. 代表一个异步操作，三种状态：pending（进行中）/ fulfilled（已成功）/ rejected（已失败）
3. resolved（已定型）
4. 将异步操作用同步操作的流程表达出来，避免层层嵌套回调函数。
5. 缺点：无法取消，一旦建立，立即执行。
6. 使用方法
  ```
  const promise = new Promise(function(resolve, reject){
    if(成功){
      resolve(value);
    }else{
      reject(error);
    }
  })

  promise.then(function(value){
    // success
  }, function(error){
    // failure
  })
  ```
7. then接受两个参数，1是resolved时执行的函数，2是rejected时执行的函数（可选），一般使用catch()
8. 简单实例
  ```
  function timeout(ms){
    return new Promise(function(resolve, reject){
      setTimeout(resolve, ms, 'done');
    })
  }
  timeout(100).then(function(value){
    console.log(value);
  })
  ```
9. Promise.prototype中包含三个方法
  * then()
  * finally() 无论resolve还是reject都执行
  * catch()。Promise.prototype.call()是.then(null, rejection)的别名，错误时的回调函数
10. Promise内部错误不会影响外部，如果没有catch捕获错误，那就不会传递到外层，甚至catch本身也会发生错误。
11. Promise.all()
12. Promise.race() , race本身有竞速的意思，所以是参数里所有的promise对象谁率先改变状态（resolve / reject），就用谁的状态
13. Promise.resolve()
14. Promise.reject()
15. Promise.try()

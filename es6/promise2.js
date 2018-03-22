// ajax典型的异步
// request.onreadystatechange = function(){
//   if(request.readyState === 4){
//     if(request.status === 200){
//       return success(request.responseText);
//     }else{
//       return fail(request.status);
//     }
//   }
// }

// promise
// 以同步的书写方式，表达异步的操作，避免层层嵌套
// function test(resolve, reject){
//   var timeOut = Math.random() * 2;
//   log('set timout to: ' + timeOut + ' seconds.');
//   setTimeout(function(){
//     if(timeOut < 1){
//       log('call resolve()');
//       resolve('200 ok');
//     }else{
//       log('call reject()');
//       reject('timeout in ' + timeOut + ' seconds.');
//     }
//   }, timeOut * 1000);
// }

// easy
// function timeout(ms){
//   return new Promise(function(resolve, reject){
//     setTimeout(resolve, ms, 'done');
//   })
// }
// timeout(100).then(function(value){
//   console.log(value);
// })


// 执行机制
// let promise = new Promise(function(resolve, reject){
//   console.log('Promise'); // 立即执行
//   resolve();
// })
// promise.then(function(){
//   console.log('resolved');// 进入microTask队列
// })
// console.log('Hi');// 主线程
// Promise, Hi, resolved

// 异步加载图片
// function loadImageAsync(url){
//   return new Promise(function(resolve, reject){
//     const image = new Image();
//     image.onload = function(){
//       resolve();
//     };
//     image.onerror = function(){
//       reject(new Error('Could not load' + url));
//     };
//     image.src = url;
//   })
// }

//
const p1 = new Promise(function(resolve, reject){
  setTimeout(function(){
    reject(new Error('failure'))
  }, 3000);
});
const p2 = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve(p1)
  }, 1000);
})

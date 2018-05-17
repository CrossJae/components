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
// const p1 = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     reject(new Error('failure'))
//   }, 3000);
// });
// const p2 = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     resolve(p1)
//   }, 1000);
// })

// ---------------------180507
// function test(resolve, reject){
//   let flag = 2;
//   if(flag === 1){
//     resolve('200 ok');
//   }else{
//     reject('error');
//   }
// }

// let p1 = new Promise(test);
// let p2 = p1.then(function(result){
//   console.log('成功：' + result);
// })
// let p3 = p2.catch(function(reason){
//   console.log('失败：' + reason);
// })

// ---------------------180507
// function cook(){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       console.log('做饭完毕');
//       resolve('鸡蛋炒饭');
//     }, 500)
//   });

// }

// function eat(data){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       console.log('吃完：' + data);
//       resolve('碗和筷子');
//     }, 500)
//   });
// }

// function wash(data){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       console.log('洗了：' + data);
//       resolve('finish!');
//     }, 500)
//   })
// }

// cook()
// .then(eat)
// .then(wash)
// .then(function(data){
//   console.log(data);
// })

// ---------------------180507
// function getUserId(){
//   return new Promise(function(resolve){
//     Y.io('/userid', {
//       on: {
//         success: function(id, res){
//           resolve(JSON.parse(res).id);
//         }
//       }
//     })
//   })
// }
// getUserId().then(function(id){
//   // do sth with id
// })

// // 简单的Promise实现
// function Promise(fn){
//   var value = null,
//       deferreds = [];

//   this.then = function(onFulfilled){
//     deferreds.push(onFulfilled);
//   }
//   function resolve(value){
//     deferreds.forEach(function(deferred){
//       deferred(value);
//     })
//   }
//   fn(resolve);
// }

// ---------------------180517

// var winner = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     console.log('1-1 this is winner');
//     resolve('1-2 this is winner');
//   },4);
// })
// var loser = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     console.log('2-1 this is loser');
//     resolve('2-2 this is loser');
//   }, 1000);
// })
// Promise.all([winner, loser])
// .then(function(value){
//   console.log(value);
// })


// ---------------------180517fetch
function test(){
  return new Promise(function(resolve, reject){
    window['inner'] = function(){
      resolve('this is inner');
    }
  })
}

test().then(function(value){
  console.log(value);
})

inner();

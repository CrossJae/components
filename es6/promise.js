/*
 * Promise
 * copy from https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
 */
// console.log('script start');
//
// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);
//
// Promise.resolve().then(function() {
//   console.log('promise1');
// }).then(function() {
//   console.log('promise2');
// });
//
// console.log('script end');

/*
 * 1. run script
 * 2. log: script start
 * 3. setTimeout callbacks are queued as tasks
 * 4. Promise callbacks are queued as microtasks
 * 5. log: script end
 * 6. At the end of a task, we process microtasks
 * 7. log: promise1
 * 8. log: promise2
 * 9. log: setTimeout(after the browser update rendering)
 */

// reference 描述js执行机制，包括macroTask和microTask
// https://juejin.im/post/59e85eebf265da430d571f89
// 在每一次事件循环中，macrotask 只会提取一个执行，而 microtask 会一直提取，直到 microtasks 队列清空。
console.log('1');

setTimeout(function(){
  console.log('2');
  process.nextTick(function(){
    console.log('3');
  })
  new Promise(function(resolve){
    console.log('4');
    resolve();
  }).then(function(){
    console.log('5');
  })
})

process.nextTick(function(){
  console.log('6');
})

new Promise(function(resolve){
  console.log('7');
  resolve();
}).then(function(){
  console.log('8');
})

setTimeout(function(){
  console.log('9');
  process.nextTick(function(){
    console.log('10');
  })
  new Promise(function(resolve){
    console.log('11');
    resolve();
  }).then(function(){
    console.log('12');
  })
})

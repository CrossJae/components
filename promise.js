/*
 * Promise
 * copy from https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
 */
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');

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

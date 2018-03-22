// 没有yield的时候，Generator就是一个暂缓执行函数
// function* test(){
//   console.log('hello world!');
// }
// var t = test();
// t.next();

// // yield会暂停
// function* test(){
//   yield 'hello';
// }
// var t = test();
// console.log(t.next()); //{ value: 'hello', done: false }
// console.log(t.next()); //{ value: undefined, done: true }


// with Iterator
function* iterEntries(obj){
  let keys = Object.keys(obj); // Object.keys() 返回obj的key的数组
  for(let i=0; i<keys.length; i++){
    let key = keys[i];
    yield [key, obj[key]]; // 输出key和value
  }
}
let myObj = {foo:3, bar:7};
// for(let [key, value] of iterEntries(myObj)){
//   console.log(key, value);
// }
console.log(iterEntries(myObj).next())

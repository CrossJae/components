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
// function* iterEntries(obj){
//   let keys = Object.keys(obj); // Object.keys() 返回obj的key的数组
//   for(let i=0; i<keys.length; i++){
//     let key = keys[i];
//     yield [key, obj[key]]; // 输出key和value
//   }
// }
// let myObj = {foo:3, bar:7};
// // for(let [key, value] of iterEntries(myObj)){
// //   console.log(key, value);
// // }
// console.log(iterEntries(myObj).next())

// fibonacci 斐波那契数列
// function* fibonacci(){
//   let [prev, curr] = [0, 1];
//   for(;;){
//     [prev, curr] = [curr, prev+curr];
//     yield curr;
//   }
// }
// for(let n of fibonacci()){
//   if(n>1000){
//     break
//   }
//   console.log(n);
// }

// 
function* G1(){
  yield 'a';
  yield* G2(); //使用yield* 执行G2()
  yield 'b';
}

function* G2(){
  yield 'x';
  yield 'y';
}

for(let n of G1()){
  console.log(n); // a x y b
}

// 
// const thunk = function (fileName, codeType){
//   return function(callback){
//     fs.readFile(fileName, codeType, callback);
//   }
// }
// const readFileThunk = thunk('data1.json', 'utf-8')
// readFileThunk((err, data) => {
//   //获取文件内容
// })

// 自驱动流程
function run(generator){
  const g = generator();
  function next(err, data){
    const result = g.next(data);
    if(result.done){
      return
    }
    result.value(next);
  }
  next()
}
const 
/*
 * 最基本的例子
*/
// function* gen(){
//   yield 1;
//   yield 2;
//   return 3;
// }
// const g = gen(); // g保存了gen()返回的遍历器对象
// console.log(g.next());//{ value: 1, done: false }
// console.log(g.next());//{ value: 2, done: false }
// console.log(g.next());//{ value: 3, done: true }

// 没有yield的时候，Generator就是一个暂缓执行函数
// function* test(){
//   console.log('hello world!');
// }
// var t = test();
// t.next();

// yield会暂停
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
// function* G1(){
//   yield 'a';
//   yield* G2(); //使用yield* 执行G2()
//   yield 'b';
// }

// function* G2(){
//   yield 'x';
//   yield 'y';
// }

// for(let n of G1()){
//   console.log(n); // a x y b
// }

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
// function run(generator){
//   const g = generator();
//   function next(err, data){
//     const result = g.next(data);
//     if(result.done){
//       return
//     }
//     result.value(next);
//   }
//   next()
// }
// const 


/*
 * 闭包内执行一次next
*/
// function wrapper(gen){
//   return function(){
//     const genObj = gen();
//     genObj.next();
//     return genObj;
//   }
// }
// // const generator = wrapper(function* generator(){
// //   console.log(`hello ${yield}`);
// //   return 'done'
// // })

// // 一个生成器函数
// const generator = function* (){
//   console.log(`hello ${yield}`);
//   return 'done';
// }
// // 包裹函数
// const gen1 = wrapper(generator);
// // 遍历器
// const a = gen1();
// console.log(a.next('keith'))

/*
 * array, string只要有iterator接口，就能够被yield*遍历
*/
// const arr = ['a', 'b'];
// const str = 'keith';
// function* gen(){
//   yield arr;
//   yield* arr;
//   yield str;
//   yield* str;
// }
// const g = gen();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

/*
 * 提取嵌套数组
 * for...of循环可以自动遍历generator函数生成的iterator对象，不用调用next方法
*/
// const arr = [1, [[2, 3], 4]];
// const str = arr.toString().replace(/,/g, '');
// console.log(str);
// for(let item of str){
//   console.log(item);
// }

// const arr = [1, [[2, 3], 4]];
// function* gen(arr){
//   if(Array.isArray(arr)){
//     for(let i=0; i<arr.length; i++){
//       yield* gen(arr[i]);
//     }
//   }else{
//     yield arr;
//   }
// }
// const g = gen(arr);
// for(let item of g){
//   console.log(item)
// }

/*
 * 异步任务
*/
const person = sex => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const data = {
        sex,
        name: 'keith',
        height: 180
      }
      resolve(data);
    }, 1000);
  })
}

function* gen(){
  const data = yield person('boy');
  console.log(data);
}

const g = gen();
const next1 = g.next();
next1.value.then((data)=>{
  g.next(data);
})

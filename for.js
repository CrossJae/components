/*
 * 经典面试题
 */

/*
 * 1.
 */
for(var i=0;i<5;i++){
  console.log(i);
}
// 0,1,2,3,4

/*
 * 2.
 */
for(var i=0;i<5;i++){
  setTimeout(function(){
    console.log(i);
  },i*1000);
}
// settimeout会延迟执行，执行到console的时候，i=5
// 5,5,5,5,5

/*
 * 3.
 */
for(var i=0;i<5;i++){
  (function(i){ // 这个i很重要，如果删掉结果就是输出5
    setTimeout(function(){
      console.log(i);
    },i*1000)
  })(i)
}
// 闭包，立即执行
// 0,1,2,3,4

/*
 * 4.
 */
for (var i = 0; i < 5; i++) {
  setTimeout((function(i) {
    console.log(i);
  })(i), i * 1000);
}
// 5,5,5,5,5

/*
 * 5. Promise
 */
setTimeout(function(){
  console.log(1)
},0);
new Promise(function executor(resolve){
  console.log(2);
  for(var i=0;i<10000;i++){
    i == 9999 && resolve();
  }
  console.log(3);
}).then(function(){
  console.log(4);
});
console.log(5);
//2,3,5,4,1

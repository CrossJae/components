// 他们的用途相同，都是在特定的作用域中调用函数。
// 接收参数方面不同，apply()接收两个参数，一个是函数运行的作用域(this)，另一个是参数数组。
// call()方法第一个参数与apply()方法相同，但传递给函数的参数必须列举出来。
// 实现bind的方法


// 1
window.firstName = 'cross';
window.lastName = 'jae';
var myObject = {
  firstName: 'my',
  lastName: 'object',
}
function HelloName(){
  console.log(this.firstName + ' ' + this.lastName);
}
HelloName.call(window);// cross jae
HelloName.call(myObject);// my Object
HelloName.apply(window);// cross jae
HelloName.apply(myObject);// my Object

// 2
function sum(num1, num2){
  return num1 + num2;
}
console.log(sum.apply(window, [10, 20]));// 30
console.log(sum.call(window, 10, 20));// 30

// 3
function temp1(){
  console.log(this); // Obj
  function temp2(){
    console.log(this); // window
  }
  temp2();
}
var Obj = {};
temp1.call(Obj);

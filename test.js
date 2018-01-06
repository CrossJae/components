/*
 * 1-4. 隐式混入
 */
var Something = {
  cool: function(){
    this.greeting = 'hello world!';
    this.count = this.count?this.count+1:1;
  }
}
Something.cool();
console.log(Something.greeting); // 'hello world!'
console.log(Something.count); //1

var Another = {
  cool: function(){
    Something.cool.call(this);
  }
}
Another.cool();
console.log(Another.greeting); // 'hello world!'
console.log(Another.count); //1

/*
 * Object.prototype.hasOwnProperty()
 * hasOwnProperty()判断一个属性是定义在对象本身，而不是原型链上
*/

function func(){
    this.name = 'cross';
    this.age = 30
}
func.prototype.sayHi = function(){
    console.log('hello')
}

console.log(func.hasOwnProperty('sayHi')); //false
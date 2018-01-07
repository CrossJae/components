/*
 * 1-1. 显示混入
 * 许多库和框架里成为extend
 */
function mixin(sourceObj, targetObj){
  for(var key in sourceObj){
    if(!(key in targetObj)){
      targetObj[key] = sourceObj[key];
    }
  }
  return targetObj;
}

var Vehicle = {
  engines: 1,
  ignition: function(){
    console.log('turning on my engine.');
  },
  drive: function(){
    this.ignition();
    console.log('steering and moving forward!');
  }
};

var Car = mixin(Vehicle, {
  wheel: 4,
  drive: function(){
    Vehicle.drive.call(this);
    console.log('rolling on all' + this.wheels + ' wheels!');
  }
})

/*
 * 1-2. 另一种显示混入
 * 有重写风险
 */
function mixin(sourceObj, targetObj){
  for(var key in sourceObj){
    targetObj[key] = sourceObj[key];
  }
  return targetObj;
}

var Vehicle = {
  // ...
}
// 创建空对象复制vehicle的内容
var Car = mixin(Vehicle, {});
// 新内容复制到car中
mixin({
  wheel: 4,
  drive: function(){
    //...
  }
}, Car);

/*
 * 1-3. 显示混入-寄生继承
 */
function Vehicle(){
  this.enginers = 1;
}
Vehicle.prototype.ignition = function(){
  console.log('turning on my engine.');
}
Vehicle.prototype.drive = function(){
  this.ignition();
  console.log('steering and moving forward!');
}
// 寄生
function Car(){
  var car = new Vehicle();
  car.wheels = 4;
  // 保存Vehicle的drive的特殊引用
  var vehDrive = car.drive;
  // 重写drive
  car.drive = function(){
    vehDrive.call(this);
    console.log('rolling on all' + this.wheels + ' wheels!');
  };
  return car;
}
var myCar = new Car();
myCar.drive();

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

/*
 * 2. 原型风格
 */
function Foo(name){
  this.name = name;
}
Foo.prototype.myName = function(){
  return this.name;
}
function Bar(name, label){
  Foo.call(this, name);
  this.label = label;
}
// 关联到Foo.prototype
// es6写法：Object.setPrototypeOf(Bar.prototype, Foo.prototype);
Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.myLabel = function(){
  return this.label;
}
var a = new Bar('a', 'obj a');
a.myName();//a
a.myLabel();//obj a

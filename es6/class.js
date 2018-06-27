/*
 * get set
*/
// class MyClass {
//     constructor(){}
//     get prop(){
//         return 'getter';
//     }
//     set prop(value){
//         console.log('setter: ' + value);
//     }
// }
// let inst = new MyClass();
// inst.prop = 123;
// console.log(inst.prop);

 
/*
 * 静态方法，不会被实例继承
*/
// class Foo {
//     static classMethod(){
//         return 'hello';
//     }
// }
// Foo.classMethod(); //静态方法可以直接调用，不用new

/*
 * new.target，子类继承父类，new.target返回子类的名称
*/
// class Rectangle{
//     constructor(len, width){
//         console.log(new.target === Rectangle);
//     }
// }
// class Square extends Rectangle {
//     constructor(length){
//         super(length, length);
//     }
// }
// var obj = new Square(3); // false

/*
 * Object.getPrototypeOf() 从子类获取父类的方法
*/
// class Point {}
// class newPoint extends Point {}
// console.log(Object.getPrototypeOf(newPoint));

/*
 * super.p() 相当于A.prototype.p
*/
// class A {
//     p() {
//         return 2;
//     }
// }
// class B extends A {
//     constructor(){
//         super();
//         console.log(super.p()); //2
//     }
// }
// let b = new B();

class A {
    constructor(){
        this.x = 1;
    }
    print(){
        console.log(this.x);
    }
}
class B extends A {
    constructor(){
        super();
        this.x = 2;
    }
    m(){
        super.print(); // A.prototype.print(), this ->B
    }
}
let b = new B();
b.m(); // 2


class A {
    constructor(){
        this.x = 1;
    }
}
class B extends A {
    constructor(){
        super();
        this.x = 2;
        super.x = 3; // this.x = 3
        console.log(super.x); //undefined A.prototype.x
        console.log(this.x); //3
    }
}
let b = new B();



class Parent {
    static myMethod(msg) {
        console.log('static', msg);
    }
    myMethod(msg){
        console.log('instance', msg);
    }
}

class Child extends Parent {
    static myMethod(msg){
        super.myMethod(msg); // Parent.myMethod(msg)
    }
    myMethod(msg){
        super.myMethod(msg); // Parent.prototype.myMethod(msg)
    }
}
Child.myMethod(1); // static, 1
var child = new Child();
child.myMethod(2); // instance, 2


/*
 * mixin
*/
function mix(...mixins){
    class Mix{}
    for(let mixin of mixins){
        copyProperties(Mix.prototype, mixin);
        copyProperties(Mix.prototype, Reflect.getPrototypeOf(mixin));
    }
    return Mix;
}

function copyProperties(target, source){
    for(let key of Reflect.ownKeys(source)){
        if(key !== 'constructor'
            && key !== 'prototype'
            && key !== 'name'
        ){
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc)
        }
    }
}
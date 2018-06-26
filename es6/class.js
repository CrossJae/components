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
class Rectangle{
    constructor(len, width){
        console.log(new.target === Rectangle);
    }
}
class Square extends Rectangle {
    constructor(length){
        super(length, length);
    }
}
var obj = new Square(3); // false
@testable
class MyClass {

}

function testable(target) {
    // target代表的是被修饰的类？
    target.isTestable = true;
}
console.log(MyClass.isTestable);

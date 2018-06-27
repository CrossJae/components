## Class

### 基础
* 以前，生成实例的原始方法是构造函数，现在引入了类Class，更加接近传统语言（C++，Java）的写法。
* 可以看作是语法糖，绝大部分功能ES5都可以做到
* 对比
    ```
    // es5
    function Point(x, y){
        this.x = x;
        this.y = y;
    }
    Point.prototype.toString = function(){
        return '(' + this.x + ', ' + this.y + ')';
    }
    var p = new Point(1, 2);

    // es6
    class Point {
        constructor(x, y){
            this.x = x;
            this.y = y;
        } 
        toString(){ // 方法无需function关键字
             return '(' + this.x + ', ' + this.y + ')';
        }
    }
    ```
* 类的所有方法和属性都在类的prototype属性上
    ```
    class Point {
        constructor(){}
        toString(){}
        toValue(){}
    }
    // 等同于
    Point.prototype = {
        constructor(){},
        toSring(){},
        toValue(){}
    }
    // 类的新方法添加到prototype对象上
    Object.assign(Point.prototype, {
        toString(){}
        toValue(){}
    })
    ```
* `Point.prototype.constructor === Point` true，与es5相同
* 类和模块的内部，默认是`严格模式`
* 立即执行的class `let person = new class {}();`
* 私有属性和私有方法（不太熟悉）
* name属性返回class后面的类名，比如
    ```
    class Point {}
    Point.name // Point
    let po = new Point();
    po.name // Point
    ```
* 静态方法`static`
    * 静态方法可以被类直接调用，不能被实例调用
    * 静态方法可以和非静态方法同名
    * 父类的静态方法可以被子类继承
        ```
        class Foo {
            static classMethod(){
                return 'hello';
            }
        }
        class Bar extends Foo {}
        Bar.classMethod() //'hello'
        ```
    * 也可以在`super`对象上调用
        ```
        class Bar extends Foo {
            static classMethod(){
                return super.classMethod() + ', too';
            }
        }
        Bar.classMethod() //'hello, too'
        ```
* class内部只有静态方法`static`，没有静态属性`props`
* 实例属性，提案
    ```
    //以前
    class ReactCounter extends React.Component{
        constructor(props){
            super(props);
            this.state = {}
        }
    }
    //现在
    class ReactCounter extends React.Component{
        state = {}
    }
    ```
* `new.target`属性，返回new命令作用于的那个构造函数，如果构造函数不是通过new调用的，new.target返回undefined
    * 子类继承父类，new.target返回子类
    ```
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
    ```


### 继承`extends`
* `Object.getPrototypeOf()` 从子类上获取父类
    ```
    Object.getPrototypeOf(ColorPoint) === Point
    ```
* `super`
    * super当作函数，代表父类的构造函数
        * 子类的构造函数必须先执行一次super函数，代表调用父类的构造函数
            ```
            class A {}
            class B extends A {
                constructor(){
                    super();
                }
            }
            ```
            super()在这里相当于，`A.prototype.constructor.call(this)`
        * 只能在子类的构造函数中调用，其他地方均会报错
    * super当作对象
        * 在普通方法中，指向父类的原型对象，相当于`A.prototype`
            ```
            class A {
                p(){
                    return 2;
                }
            }
            class B extends A {
                constructor(){
                    super();
                    console.log(super.p()); //2
                }
            }
            let b = new B();
            ```
        * 静态方法中，指向父类
* Class作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链
    * 作为一个对象，子类B的原型__proto__属性是父类A
    * 作为一个构造函数，子类B的原型对象prototype属性是父类的原型对象prototype属性的实例
    ```
    class A {}
    class B extends A {}
    B.__proto__ === A //true
    B.prototype.__proto__ = A.prototype //true
    ```

### 原生构造函数
* Boolean()
* Number()
* String()
* Array()
* Date()
* Function()
* RegExp()
* Error()
* Object()
* ES5是先建子类的实例对象this，再将父类的属性添加到子类上，由于父类的内部属性无法获取，导致无法继承原生的构造函数
* ES6是先建父类的实例对象this，再用子类的构造函数修饰this，使得父类的所有行为都可以继承。
    
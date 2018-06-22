## Class

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
        toString(){
             return '(' + this.x + ', ' + this.y + ')';
        }
    }
    ```
* 类和模块的内部，默认是`严格模式`
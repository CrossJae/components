#let / const
1. let命令
    * 基本用法：只在代码块内有效
    * 不存在变量提升（跟var相比）
    * 暂时性死区：变量必须声明再使用
    * 不允许重复声明：包括函数内部重新声明函数参数
2. 块级作用域
    * 为什么需要块级作用域：覆盖外层变量、计数的循环变量泄漏为全局变量
    * es6的块级作用域：立即执行函数不再必要（？）
    * 块级作用域与函数声明：In strict mode code, functions can only be declared at top level or inside a block.在严格模式下，函数声明必须在顶层或块级作用域中。
3. const命令
    * 基本用法：常量，不可改变，声明时必须赋值
    * 本质：const实际保证的不是变量的值不得改动，而是变量指向的那个内存地址不得改动
        ```
        const foo = {};
        foo.prop = 1;
        console.log(foo.prop); //1，foo储存的是一个地址，地址指向一个对象，对象本身是可变的
        ```
    * es6声明变量的六种方法：var / function / let / const / import / class
4. 顶层对象的属性：let/const/class命令声明的全局变量，不属于顶层对象的属性`let a = 1; window.a; //undefined`
5. global对象：提案将所有环境（window, web worker, node）的顶层变量都定义为global
6. 补充：
    * 设置循环变量的部分是一个父作用域
    * 循环体内部是单独的子作用域
        ```
        for(let i=0;i<1;i++){
            let i = 'abc';
            console.log(i);
        }
        // abc
        ```

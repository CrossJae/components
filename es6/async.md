# async

1. Generator语法糖
2. 内置执行器，不需要next方法
3. 返回值是Promise对象；Generator的返回是Iterator对象。
4. async可以看作多个异步操作，包装成一个Promise对象
5. 多个await命令，不存在继发关系，最好同时触发
```
let [foo, bar] = await Promise.all([
    getFoo(),
    getBar()
]);
```

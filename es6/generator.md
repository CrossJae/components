# Generator「生成器」

1. 异步编程解决方案（js真的在异步这一块做了很多努力啊）
2. Generator是一个状态机，封装了多个内部状态。Generator函数返回一个遍历器对象，一次遍历函数内部的每一个状态
3. 与普通函数对比
  * function关键字与函数名之间有个星号`function* helloWorldGenerator(){...}`
  * 函数内部使用yield表达式，定义不同的内部状态，yield是产出的意思 `yield 'hello'`
  * 调用Generator函数，该函数并不执行，返回的也不是运行结果，而是 **一个指向内部状态的指针** ，就是遍历器对象（Iterator Object）
4. 以下实例函数有三个状态，分别位hello, world 和return语句
```
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
```
5. Generator函数是分段执行的，yield暂停执行，next()方法恢复
```
var hw = helloWorldGenerator();
hw.next(); // {value:'hello', done: false}
```

### 应用
1. 异步操作的同步表达（Promise?）
2. 控制流管理
3. 部署Iterator接口
4. 作为数据结构
5. 

# Generator「生成器」

* 异步编程解决方案（js真的在异步这一块做了很多努力啊）
* "暂停yield"是generator的本质
* Generator是一个状态机，封装了多个内部状态。Generator函数返回一个 **遍历器对象**，一次遍历函数内部的每一个状态
* 与普通函数对比
  * function关键字与函数名之间有个星号`function* helloWorldGenerator(){...}`
  * 函数内部使用yield表达式，定义不同的内部状态，yield是产出的意思 `yield 'hello'`
  * 调用Generator函数，该函数并不执行，返回的也不是运行结果，而是 **一个指向内部状态的指针** ，就是遍历器对象（Iterator Object）
* 以下实例函数有三个状态，分别位hello, world 和return语句
  ```
  function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
  }
  ```
* Generator函数是分段执行的，yield暂停执行，next()方法恢复
  ```
  var hw = helloWorldGenerator();
  hw.next(); // {value:'hello', done: false}
  ```
* yeild本身没有返回值
  ```
  function* gen(){
    var x = yield 'hello world';
    var y = x/2;
    return [x, y];
  }
  const g = gen();
  g.next(); //{value: 'hello world', done: false}
  g.next(); //{value: [undefined, NaN], done: true}
  ```
* 通过next向内传递参数， **next的参数表示上一个yeild的返回值**，所以第一个next()的参数无效
  ```
  function* gen(){
    var x = yield 'hello world';
    var y = x/2;
    return [x, y];
  }
  const g = gen();
  g.next(); //{value: 'hello world', done: false}
  g.next(10); //{value: [10, 5], done: true}
  ```
* 使用闭包，第一次next()就可以传递参数
  ```
  function wrapper(gen){
    return function(...args){
      const genObj = gen(...args);
      genObj.next();
      return genObj;
    }
  }
  const generator = wrapper(function* generator(){
    console.log(`hello ${yeild}`);
    return 'done'
  })
  const a = generator().next('keith');
  console.log(a); //hello keith, done
  ```


### 应用
* 异步操作的同步表达（Promise?）
* 控制流管理
* 部署Iterator接口
* 作为数据结构


### 博客
1. Generator为什么出现？
  * 异步编程解决方案
2. 特点
  * 暂停
  * 调用Generator函数时，并不执行
  * 返回一个遍历器对象，每次遍历函数内部的每个状态
  * 碰到return和yeild都会执行


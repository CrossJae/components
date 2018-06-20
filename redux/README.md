## redux

### 优点
1. 状态管理库
2. 简化API(flux)
3. 让state的变化可预测

### 用途
复杂应用、庞大系统时优秀的扩展能力
可以用action追溯每次修改，比如录制用户会话并回放所有action来重现它。（？）

### 原理
把每次修改state的行为，改变成修改对象action和函数reducer，导致state改变

### 使用
state 是只读的
action（对象）描述发生了什么的指示器
reducer（函数）是用来将action和state串起来，返回新的state

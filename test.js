var person = (function(){
    // console.log('abc');
    var name = 'cross';
    var hello = 'hello';
    // return 'abc';//自执行函数可以有返回值！！！
    return {
        name: function(n){
            name = n;
        },
        sayhello: function(){
            return `${hello}, ${name}!`;
        }
    }
})();

console.log(person.sayhello());

person.name('jae');// 可以修改自执行函数中的变量

console.log(person.sayhello());
console.log(person);

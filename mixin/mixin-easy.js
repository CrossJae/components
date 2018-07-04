/*
 * 2018.6.27
 * 通过浅复制、深复制实现继承的思想，进一步扩展成mixin混入模式
 * 不是完整的复制一个对象，而是从多个对象中复制出属性，组合成一个新对象
*/

function mixin(){
    let child = {};
    for(let i = 0; i<arguments.length; i+=1){
        for(let prop in arguments[i]){
            if(arguments[i].hasOwnProperty(prop)){
                child[prop] = arguments[i][prop];
            }
        }
    }
    return child;
}

const person = mixin({
    age: 30,
    gender: 'female'
},{
    interest: 'read travel'
},{
    job: 'fe'
})
console.dir(person)
function mix(...mixins){
    class Mix{}

    for(let mixin of mixins){
        // 拷贝实例属性
        copyProperties(Mix.prototype, mixin);
        // 拷贝原型属性
        copyProperties(Mix.prototype, Reflect.getPrototypeOf(mixin));
    }

    return Mix;
}

function copyProperties(target, source){
    for(let key of Reflect.ownKeys(source)){
        if(key !== 'constructor'
         && key !== 'prototype'
         && key !== 'name'
        ){
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}

// 使用
class DistributedEdit extends mix(){
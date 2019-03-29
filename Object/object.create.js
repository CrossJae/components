// Object.create，返回新的对象，参数是新对象的原型对象
var proto = {
    sentence: 4,
    probation: 2
}

var firstPrisoner = Object.create(proto);
firstPrisoner.name = 'Joe';

var secondePrisoner = Object.create(proto);
secondePrisoner.name = 'Sam';

// 工厂模式
var makePrisoner = function(name, id){
    var prisoner = Object.create(proto);
    prisoner.name = name;
    prisoner.id = id;
    return prisoner;
}

// polyfill
var objectCreat = function(arg){
    if(!arg) return {};
    function obj(){}
    obj.prototype = arg; //1. 将属性关联到原型上
    return new obj; // 2. 返回构造函数
}
Object.create = Object.create || objectCreat;
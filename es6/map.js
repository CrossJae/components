// 1. 基本用法
const map1 = new Map();
const obj = {
    p: 'Hello World!'
};
map1.set(obj, 'content');
console.log('map1 ::>', map1); // Map { { p: 'Hello World!' } => 'content' }
console.log('map1-key ::>', map1.get(obj));

// 2. 接受数组作为参数
const arr = [['name', 'zhangsan'], ['title', 'Author']];
const map2 = new Map(arr);
console.log('map2 ::>', map2); // Map { 'name' => 'zhangsan', 'title' => 'Author' }

// 3. Map键实际是跟内存地址绑定的，只要内存地址不同，就视为两个键
const map3 = new Map();
map3.set(['a'], 555);
console.log('map3-1 ::>', map3);
console.log('map3-2 ::>', map3.get(['a'])); // undefined

/*
 * 4. Map实例的属性和方法
 * 属性：constructor / size
 * 方法：set / get / has / delete / clear
 */ 

/*
 * 5. 遍历
 * keys() / values() / entries() / forEach()
 */ 
const map5 = new Map([['name', 'cross'], ['age', 30]]);
for(let i of map5.entries()){ // 等同于for(let i of map5){}
    console.log('map5 ::>', i); //[ 'name', 'cross' ]...
}

// 6-1. Map => Array
const map61 = new Map();
map61.set('name', 'cross').set('age', 30);
const arr61 = [...map61];
console.log('map6-1 ::>', arr61); // [ [ 'name', 'cross' ], [ 'age', 30 ] ]

// 6-2. Array => Map , 数组当作Map参数

// 6-3. Map => Object , 前提是所有键值都是字符串
function strMapToObject(strMap){
    const obj = Object.create(null); //const obj = {};
    for(let [key, val] of strMap){
        obj[key] = val;
    }
    return obj;
}
const map63 = new Map().set('yes', true).set('no', false);
console.log('map6-3 ::>', strMapToObject(map63)); // { yes: true, no: false }

// 6-4. Object => Map
function objectToStrMap(obj){
    const strMap = new Map();
    for(let key of Object.keys(obj)){
        strMap.set(key, obj[key]);
    }
    return strMap;
}
const map64 = objectToStrMap({ yes: true, no: false });
console.log('map6-4 ::>', map64); // Map { 'yes' => true, 'no' => false }

// 6-5. Map => JSON
// 两种情况，1.键名是字符串 2.键名是非字符串（转成数组）
// 6-5-1 字符串
const map651 = new Map().set('yes', true).set('no', false);
function strMapToJson(strMap){
    return JSON.stringify(strMapToObject(strMap));
}
const json651 = strMapToJson(map651);
console.log('map6-5-1 ::>', json651); // {"yes":true,"no":false}
// 6-5-2 非字符串
const map652 = new Map().set('yes', true).set({a: 1}, 3);
const json652 = JSON.stringify([...map652]);
console.log('map6-5-2 ::>', json652); // [["yes",true],[{"a":1},3]]

// 6-6. JSON => Map
const json66 = '{"yes":true,"no":false}';
function jsonToStrMap(json){
    return objectToStrMap(JSON.parse(json));
}
const map66 = jsonToStrMap(json66);
console.log('map66 ::>', map66); // Map { 'yes' => true, 'no' => false }
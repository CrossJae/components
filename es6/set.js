/*
 * 总结：
 * 增 - s.add(n)
 * 查 - s.has(n)
 * 改 - 转成数组之后使用map或者filter等操作，再赋值给之前的set对象
 * 删 - s.delete(n)
 */ 

// 1. 基本用法
const s = new Set(); // Set {}
[2, 3, 5, 4, 5, 2, 2].map(x => s.add(x));
for(i of s) {
    console.log(i); // 2 3 5 4
}

// 2. 可以接受数组当参数
const set = new Set([1, 2, 3, 4, 4]);
console.log([...set]); // [1, 2, 3, 4]
console.log(set.size); // 4


// 3. 两个对象不相等，不精确相等 === ， NaN等于自身
const set3 = new Set();
set3.add({}); // 增加一个空对象
set3.add({}); // 再增加一个空对象
console.log('set3 ::>', set3); // Set { {}, {} }

/*
 * 4. Set实例的属性和方法
 * 属性：constructor / size
 * 方法：add / delete / has / clear
 */ 
const set4 = new Set();
set4.add(2).add(3).add(2).add(4);
console.log('set4 ::>', set4); // Set { 2, 3, 4 }
set4.delete(2);
console.log('set4 ::>', set4); // Set { 3, 4 }
console.log(set4.has(5)); // false
set4.clear();
console.log('set4 ::>', set4); // Set {}

// 5. 与对象对比
const someName = "width";
const properties = {
    "width": 1,
    "height": 1
}
if(properties[someName]){
    // do something
}
const properties1 = new Set();
properties1.add("width");
properties1.add("height");
if(properties1.has(someName)){
    // do something
}

// 6. Set => Array 🌸🍃 数组去重的方法
const set6 = new Set([1, 2, 3, 4, 5]);
const arr6 = Array.from(set6); // 【...set6】
console.log('arr6 ::>', arr6);

/*
 * 7. 遍历
 * keys() / values() / entries() / forEach()
 * 由于Set结构没有键名，只有键值，keys和values行为一致
 */ 
const set7 = new Set(['red', 'green', 'blue']);
for(let i of set7.keys()){ // keys和values行为一致
    console.log('set7-1 ::>', i);
}
for(let i of set7.entries()){ // entries返回键值对
    console.log('set7-2 ::>', i); // ["red", "red"]...
}

// 8. 并集Union / 交集Intersect / 差集Difference
const set81 = new Set([1, 2, 3]);
const set82 = new Set([4, 2, 3]);
const union = new Set([...set81, ...set82]);
const intersect = new Set([...set81].filter(x => set82.has(x)));
const diff = new Set([...set81].filter(x => !set82.has(x)));
console.log('set8并集交集差集 ::>', union, intersect, diff);


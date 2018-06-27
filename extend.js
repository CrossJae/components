/*
 * 通过复制属性实现继承
 * 分为：浅复制、深复制
*/

/*
 * 浅复制
*/
function extend(parent, child){ // child继承parent
    child = child || {};
    for(let i in parent){
        if(parent.hasOwnProperty(i)){
            child[i] = parent[i];
        }
    }
    return child;
}
p1 = {name: 'cross', book:[1,2,3], address: 'abc', interest: {read: true}}
p2 = {age: 30}
p3 = extend(p1, p2);
console.log(p3);
p1.book.push(4);
p1.name = 'jae';
p1.interest.game = true;
console.log(p3); // 引用类型book会被改变

/*
 * 深复制
*/
// function extend(parent, child){
//     child = child || {};
//     for(let i in parent){
//         if(parent.hasOwnProperty(i)){
//             if(typeof parent[i] === 'object'){
//                 child[i] = (Array.isArray(parent[i])) ? [] : {};
//                 extend(parent[i], child[i]); // 回调
//             }else{
//                 child[i] = parent[i];
//             }

//         }
//     }
//     return child;
// }
// var p3 = {
//     counts: [1,2,3],
//     interest: {
//         read: true
//     }
// }
// var c3 = extend(p3);
// console.log(c3, p3);
// p3.counts.push(4);
// p3.interest.play = true;
// console.log(c3, p3);// c3未被改变

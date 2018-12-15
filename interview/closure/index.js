// 闭包

function makeCounter(){
    let count = 0;
    console.log('count', count)
    return function(){
        return count++;
    }
}

let counter = makeCounter()
console.log(counter());
console.log(counter());
console.log(counter());

// 运行结果 node indexjs
// count 0
// 0
// 1
// 2
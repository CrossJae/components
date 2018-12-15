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
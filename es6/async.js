//generator的语法糖
function timeout(ms){
  return new Promise(function(resolve, reject){
    setTimeout(resolve, ms);
  })
}

async function asyncPrint(value, ms){
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 5000)

// class的方法
class Index {
  async index(name){
    const cache = await fn();
    return xxx
  }
}

// 

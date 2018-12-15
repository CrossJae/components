var originObj = {
  name: 'cross',
  age: 18,
  tags: ['js', 'html', 'css'],
  like: {
    singer: 'jay',
    flower: 'rose',
    color: 'green'
  }
}

//1.for...in
// for(var key in originObj){
//   console.log(key); //name, age, tags, like
// }

var newObj = Reflect.ownKeys(originObj);
console.log(newObj)
console.log(Object.keys(originObj))

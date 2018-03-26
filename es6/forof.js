// var arr = ['car', 'bus', 'taxi'], i = 0;
// for(var value of arr){
//   console.log(++i, value);
// }

var obj = {
  'car': 2,
  'bus': 10,
  'taxi': 1
}

// var str = 'hello world'
obj[Symbol.iterator] = arr[Symbol.iterator].bind()
for(var value of obj){
  console.log(value);
}

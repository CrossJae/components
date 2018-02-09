// 数组去重
// unique([0, 1, 2, 2, 3, 3, 4]) // => [0, 1, 2, 3, 4]
// unique([0, 1, '1', '1', 2]) // => [0, 1, '1', 2]

// 以下方法都不包括数组中含有对象的方法

// 我第一时间能想到的方法，太笨了！要进行 n*(n-1)/2 次循环
function unique(arr){
  var len = arr.length,
      newarr = [],
      flag=0;
  for(var i=0; i<len; i++){
    for(var j=i+1; j<len; j++){
      if(arr[i] === arr[j]){
        flag = 1;
        break; // 只是退出了当前循环 for j
      }
    }
    flag === 0 && newarr.push(arr[i]);
    flag = 0;
  }
  return newarr;
}

// 使用Array.prototype.indexOf()方法，判断是否存在该值
function unique(arr){
  var temp = [];
  for(var i=0; i<arr.length; i++){
    temp.indexOf(arr[i]) < 0 && temp.push(arr[i]);
  }
  return temp;
}

// new Map(), Map是一种数据类型，类似对象，允许把对象作为key，形成value: value的方式
function unique(arr){
  const temp = new Map();
  return arr.filter(function(num){
    !temp.has(num) && temp.set(num,1)
  })
}

// 遍历数组，并对数组元素进行一些操作

var originArr = ['Car', 'Bike', 'Taxi', 'Truck', 'Train'];

// 1.for
// for(var i=0; i<originArr.length; i++){
//   originArr[i] = originArr[i] + '001';
// }
// console.log('originArr', originArr); //originArr [ 'Car001', 'Bike001', 'Taxi001', 'Truck001', 'Train001' ]

// 2.forEach
// originArr.forEach(function(item, index){
//   originArr[index] = item + '001';
//   console.log(item);// 'Car', 'Bike', 'Taxi', 'Truck', 'Train'
// })
// console.log('originArr', originArr); //originArr [ 'Car001', 'Bike001', 'Taxi001', 'Truck001', 'Train001' ]

//3.map
// var newArr = originArr.map(function(item, index){
//   return item + '001';
// })
// console.log('originArr', originArr); //originArr [ 'Car', 'Bike', 'Taxi', 'Truck', 'Train' ]
// console.log('newArr', newArr); //newArr [ 'Car001', 'Bike001', 'Taxi001', 'Truck001', 'Train001' ]

//4.for...in 不建议 因为可能无序
// for(var key in originArr){
//   originArr[key] = originArr[key] + '001';
//   console.log(key); // 0,1,2,3,4
// }
// console.log('originArr', originArr); //originArr [ 'Car001', 'Bike001', 'Taxi001', 'Truck001', 'Train001' ]

//5.for...of
// for(let item of originArr){
//   console.log(item);// 'Car', 'Bike', 'Taxi', 'Truck', 'Train'
// }

//6.filter 过滤
// var newArr = originArr.filter(function(item, index){
//   return item !== 'Truck';
// })
// console.log('originArr', originArr); //originArr [ 'Car', 'Bike', 'Taxi', 'Truck', 'Train' ]
// console.log('newArr', newArr); //newArr [ 'Car', 'Bike', 'Taxi', 'Train' ]

//7.some 有一项满足就返回true
// var newArr = originArr.some(function(item, index){
//   console.log(item);//'Car', 'Bike', 'Taxi' 执行三次
//   return item === 'Taxi';
// })
// console.log('originArr', originArr); //originArr [ 'Car', 'Bike', 'Taxi', 'Truck', 'Train' ]
// console.log('newArr', newArr); //true

//8.every 每一项满足才返回true，有一项不满足就返回false
// var newArr = originArr.every(function(item, index){
//   console.log(item);//'Car', 'Bike', 'Taxi' 执行三次,碰到不满足的条件return
//   return item !== 'Taxi';
// })
// console.log('originArr', originArr); //originArr [ 'Car', 'Bike', 'Taxi', 'Truck', 'Train' ]
// console.log('newArr', newArr); //false

//9.reduce 数组归并
var newArr = originArr.reduce(function(pre, cur, index, index){
  return pre + cur;
})
console.log('originArr', originArr); //originArr [ 'Car', 'Bike', 'Taxi', 'Truck', 'Train' ]
console.log('newArr', newArr); //CarBikeTaxiTruckTrain

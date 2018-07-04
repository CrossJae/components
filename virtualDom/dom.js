/*
 * 打印出一个简单div的所有属性
*/
var div = document.createElement('div');
var str = '';
for(var key in div){
    str = str + key + ",";
}
//"align,title,lang,.....很多属性

/*
 * 打印出window的方法
*/
for(var propName in window){
    console.log(propName);
}
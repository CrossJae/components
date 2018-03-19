/*
 * _.endsWidth([string=''], [target], [position=string.length])
 *
 * 确认是否以某字符串结尾，或某位置是否是某字符串
 */

 function endsWith(string, target, position){
   const { length } = string;
   // 考虑各种position的情况
   position = position === undefined ? length : +position; // +position是什么意思
   if(position<0 || position!=position){ // position!=position是什么意思？
     position = 0;
   }
   else if(position > length){
     position = length;
   }
   const end = position; // 结束
   position -= target.length;// 起始点
   return position >=0 && string.slice(position, end) == target;
 }

 console.log(endsWith('hello world!', 'world', 11));

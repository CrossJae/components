const buffer = new ArrayBuffer(16);// 16个字节

/*
 * Int32Array: 代表32位整数的视图
 * 每个32位整数占4个字节（32 / 8 = 4）（8位整数代表1个字节）
 * 所以buffer可以写入4个整数，int32View为[0, 0, 0, 0]
 */
const int32View = new Int32Array(buffer); 

for(let i = 0; i<int32View.length; i++){
    int32View[i] = i * 2;
}
// console.log(int32View); // [0,2,4,6]


/*
 * Int16Array: 代表16位整数的视图
 * 每个16位整数占2个字节（16 / 8 = 2）
 * 所以buffer可以写入8个整数
 */
const int16View = new Int16Array(buffer);
console.log(int16View);
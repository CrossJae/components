const myProperty = {
    siwtch: 2170,
    gameCard: [
        {
            name: '塞尔达',
            price: 320 
        },
        {
            name: '莉蒂与苏尔的工作室',
            price: 399 
        },
        {
            name: '巴方旅人',
            price: 379
        },
        {
            name: '光明之响',
            price: 295
        },
        {
            name: '异度神剑2',
            price: 429
        },
        {
            name: '封闭的梦魇',
            price: 349
        },
        {
            name: '煮糊了2',
            price: 285
        },
        {
            name: '太鼓达人+鼓',
            price: 517
        }
    ],
    iWatch3: 4988,
    iMacPro: 13888,
    iPhoneX: 9688,
    iPadPro: 5388,
    iPadKeyboard: 1188,
    iPadPencil: 728,
    ASUS: 8499,
}
let sum = 0;
for(let key in myProperty){
    let cur = myProperty[key];
    if(typeof cur === 'number'){
        sum += cur;
    }else{
        for(let key in cur){
            sum += cur[key].price;
        }
    }
}
console.log(sum);//49510
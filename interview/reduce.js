/*
 * Array.prototype.reduce
 * 参数: accumulator, currentValue, currentIndex, array
 * array.reduce(function(accumulator, currentValue, currentIndex, array){}, intialValue)
*/

// 对象取值
let getValue = (source, target) => {
    let reg = /{{([^}]+)}}/g;
    // console.log(reg.exec(target)[1])
    return reg.exec(target)[1].split('.').reduce((pre, next) => {
        return pre[next];
    }, source);
};

let test = {
    author: 'Somebody',
    title: 'Title of article',
    category: {
        ngCached: true,
        ngxCachedTime: 1536311340,
        title: 'frontend'
    },
    user: {
        isAuthor: false,
        role: 'guest',
        community: {
            uid: 19499773,
            updateAt: '2018-09-05T02:27:13.630Z'
         }
    }
}; 

let uid= '{{ user.community.uid }}';
let cate = '{{ category }}';

let date = getValue(test, uid);

console.log(date);  // 19499773
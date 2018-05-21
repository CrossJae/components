// import co from 'co';
// import thunkify from 'thunkify';
const co = require('co');
const thunkify = require('thunkify');
const fs = require('fs');

const readFileThunk = thunkify(fs.readFile);

const gen = function* (){
    const r1 = yield readFileThunk('data1.json');
    console.log(r1.toString());
    const r2 = yield readFileThunk('data2.json');
    console.log(r2.toString());
}
// 自驱动
const c = co(gen);
// co()返回的是promise对象
c.then(data => {
    console.log('finish');
})
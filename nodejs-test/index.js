// const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.statusCode = 200;
//     res.end('hello')
//     // 如何把某个文件渲染进来？
// }).listen(4000);

const fs = require('fs');

fs.open('log.txt', 'r+', function(err, fd){
    if(err){
        return console.log(err);
    }
    console.log(fd);
})
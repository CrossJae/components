const http = require('http');
const util = require('util');
const url = require('url');

//
// var server = new http.Server();
//
// server.on('request', function(req, res){
//   console.log(req.url);
//   res.writeHead(200, {
//     'Content-type': 'text/html'
//   })
//   res.write('hello world');
//   res.end('server is ok');
// })
// server.on('connection',()=>{
//     a();
// });
// server.on('close', function(){
//   console.log('server will close');
// })
//
// server.close();
// server.listen(8080);

// 简洁写法
http.createServer(function(req, res){

  // console.log(req.httpVersion);
  // console.log(req.headers);
  // console.log(req.method);

  // res.writeHead(404,{'Content-Type':'text/plain'});// text/plain 纯文本 不解析；text/html会解析
  // res.write("hello~");
  res.write(util.inspect(url.parse(req.url, true)))
  res.end("bye");
}).listen(4000)

const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
	if(req.url == '/favicon.ico') return;
	let pathname = path.join(__dirname, url.parse(req.url).pathname);
	pathname = decodeURIComponent(pathname);
	console.log(pathname);
	// res.statusCode = 200;
	// res.setHeader('Content-Type', 'text/plain')
	// res.end('hello world');

	if(fs.statSync(pathname).isDirectory()){
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
		fs.readdir(pathname, (err, files)=>{
			console.log('==================files=================', files);
			res.write('<ul>');
			files.forEach((item)=>{
				let link = path.join(url.parse(req.url).pathname, item);
				res.write(`<li><a href="${link}">${item}</a></li>`);
			})
			res.end('</ul>');
		})
	}else{
		// binary二进制编码读取，也可以用utf-8
		fs.readFile(pathname, 'binary', (err, data)=>{
			if(err){
				res.writeHead(500, {'Content-Type': 'text/plain'});
				res.end(JSON.stringify(err));
				return false
			}
			res.writeHead(200, {'Content-Type': `${mime.getType(pathname)}; charset:UTF-8`});
			res.write(data, 'binary');
			res.end();
		})
	}
})

server.listen(port, hostname, ()=>{
	console.log('服务器运行');
})

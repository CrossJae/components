const fs = require('fs');

// 1. 删除某个文件，同步
// fs.unlinkSync('tmp/hello.js');
// console.log('success');

// 2. 删除某个文件，异步
// fs.unlink('tmp/hello.js',(err)=>{
//   if(err) throw err;
//   console.log('success');
// });


// 3. 文件属性，异步
// fs.stat('tmp/hello.js',(err, stats)=>{
//   if(err) throw err;
//   console.log(JSON.stringify(stats));
//   // console.log(stats['birthtime']);
// });

// 4. 异步，回调
fs.rename('tmp/hello.js', 'tmp/world.js', (err)=>{
  if(err) throw err;
  fs.stat('tmp/world.js', (err, stats)=>{
    if(err) throw err;
    console.log(`文件属性：${JSON.stringify(stats)}`);
    fs.rename('tmp/world.js', 'tmp/hello.js', (err)=>{
      if(err) throw err;
      console.log('rename again');
    })
  })
})

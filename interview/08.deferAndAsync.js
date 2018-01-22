/*
浏览器渲染过程：
1. 浏览器通过HTTP协议请求服务器，获取HMTL文档并开始从上到下解析，构建DOM；
2. 在构建DOM过程中，如果遇到外联的样式声明和脚本声明，则暂停文档解析，创建新的网络连接，并开始下载样式文件和脚本文件；
3. 样式文件下载完成后，构建CSSDOM；脚本文件下载完成后，解释并执行，然后继续解析文档构建DOM
4. 完成文档解析后，将DOM和CSSDOM进行关联和映射，最后将视图渲染到浏览器窗口
在这个过程中，脚本文件的下载和执行是与文档解析同步进行，也就是说，它会阻塞文档的解析，如果控制得不好，在用户体验上就会造成一定程度的影响。
*/


/*
  defer：用于开启新的线程下载脚本文件，并使脚本在文档解析完成后执行。
  async：HTML5新增属性，用于异步下载脚本文件，下载完毕立即解释执行代码。

  如果有多个声明了defer的脚本，则会按顺序下载和执行 ，defer脚本会在DOMContentLoaded和load事件之前执行
  如果有多个声明了async的脚本，其下载和执行也是异步的，不能确保彼此的先后顺序 ，async会在load事件之前执行，但并不能确保与DOMContentLoaded的执行先后顺序

  如果 async="async"：脚本相对于页面的其余部分异步地执行（当页面继续进行解析时，脚本将被执行）
  如果不使用 async ，而使用 defer="defer"：脚本将在页面完成解析时执行
  如果既不使用 async 也不使用 defer：在浏览器继续解析页面之前，立即读取并执行脚本
*/

// 创建script，插入到DOM中，加载完毕后callBack

function loadScript(url, callback){
  var script = document.createElement_x("script")
  script.type = "text/javascript";
  if (script.readyState){ //IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
      script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else { //Others: Firefox, Safari, Chrome, and Opera
    script.onload = function(){
      callback();
    };
  }
  script.src = url;
  document.body.appendChild(script);
}

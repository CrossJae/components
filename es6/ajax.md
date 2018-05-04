# ajax

以前一直用jq的`$.ajax()`方法，但并没有仔细研究过原理代码，感觉这也是导致我现在不怎么了解node和es6的promise等原理的原因。

ajax的特点：局部更新网页，与服务端进行少量数据交换。

通过`XMLHtmlRequest对象`与服务器交换数据（Ie5/6是ActiveXObject）
```
var xmlhttp = new XMLHtmlReuest();
var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //ie5+6
```

属性方法：
```
xmlhttp.onreadystatechange = function(){} //readyState改变触发onreadystatechange

xmlhttp.readyState //4的时候是已经响应
xmlhttp.status //状态码

xmlhttp.responseText //响应数据
```
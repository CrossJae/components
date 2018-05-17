/* ---------------------180516
 * 场景：所有XHR（异步处理）全部结束后进行某操作
 * 01 不使用promise的写法，使用回调
*/

// 发送请求的函数
function getURLCallback(URL, callback){
  var req = new XMLHttpRequest();
  // true代表异步
	req.open('GET', URL, true);
	req.onload = function(){
		if(reg.status === 200){
			callback(null, req.responseText);
		}else{
			callback(new Error(req.statusText), req.response)
		}
  }	
  req.onerror = function(){
    callback(new Error(req.statusText));
  };
  // 发送请求
  req.send();
}
// 对JSON数据进行安全的解析，防止出错
function jsonParse(callback, error, value){
  if(error){
    callback(error, value);
  }else{
    try{
      var result = JSON.parse(value);
      callback(null, result);
    }catch(e){
      callback(e, value);
    }
  }
}
var request = {
  comment: function getComment(callback){
    return getURLCallback('http://azu.github.io/promises-book/json/comment.json', jsonParse(null, callback));
  },
  people: function getPeople(callback){
    return getURLCallback('http://azu.github.io/promises-book/json/people.json', jsonParse(null, callback));
  }
}
// 多个xhr请求，所有请求返回时调用callback
function allRequest(requests, callback, results){
  // 请求数组requests里没有请求时
  if(requests.length === 0){
    return callback(null, results);
  }
  var req = requests.shift();
  req(function(error, value){
    if(error){
      callback(error, value);
    }else{
      results.push(value);
      allRequest(requests, callback, results); // 递归
    }
  })
}
function main(callback){
  allRequest([request.comment, request.people], callback, []);
}
// 运行
main(function(error, results){
  if(error){
    return console.error(error);
  }
  console.log(results);
})
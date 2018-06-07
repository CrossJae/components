var cookieUtil = {
  set : function(name, value, expires, path, domain, secure){
    var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if(expires instanceof Date){
      cookieText = cookieText + ';expires=' + expires.toGMTString();
    }
    if(path){
      cookieText = cookieText + ';path=' + path;
    }
    if(domain){
      cookieText = cookieText + ';domain' + domain;
    }
    if(secure){
      cookieText = cookieText + ';secure';
    }
    document.cookie = cookieText;
  },
  get : function(name){
    var cookieName = encodeURIComponent('name') + '=',
        cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = null;
    if(cookieStart>-1){
      var cookieEnd = document.cookie.indexOf(';', cookieStart);
      if(cookieEnd==-1){
        cookieEnd = document.cookie.length; // 如果没有分号，那么结束处就是总长度
      }
      cookieValue = document.cookie.substring(cookieStart+cookieName.length, cookieEnd);
      cookieValue = decodeURIComponent(cookieValue);
    }
    return cookieValue;
  }
};

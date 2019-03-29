var ua = navigator.userAgent.toLowerCase();
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36
var uaPairs = ua.replace(/\([^)]+\)/g, '').split(/\s+/);
// ["Mozilla/5.0", "AppleWebKit/537.36", "Chrome/72.0.3626.121", "Safari/537.36"]
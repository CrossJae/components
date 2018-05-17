/*
 * fetch-jsopn源码分析
 * https://github.com/camsong/fetch-jsonp
*/


// 基础配置
const defaultOptions = {
    timeout: 5000, //超时时间
    jsonpCallback: 'callback',
    jsonpCallbackFunction: null,
  };

// 生成回调函数
function generateCallbackFunction() {
    return `jsonp_${Date.now()}_${Math.ceil(Math.random() * 100000)}`;
}

// 删除回调函数
function clearFunction(functionName) {
    // IE8 throws an exception when you try to delete a property on window
    // http://stackoverflow.com/a/1824228/751089
    try {
        delete window[functionName];
    } catch (e) {
        window[functionName] = undefined;
    }
}

// 删除script
function removeScript(scriptId) {
    const script = document.getElementById(scriptId);
    if (script) {
        document.getElementsByTagName('head')[0].removeChild(script);
    }
}

function fetchJsonp(_url, options = {}) {
    // to avoid param reassign
    let url = _url;
    const timeout = options.timeout || defaultOptions.timeout;
    const jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;

    let timeoutId;

    // 返回promise对象
    return new Promise((resolve, reject) => {
        // 回调函数名称
        const callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
        // script id名称
        const scriptId = `${jsonpCallback}_${callbackFunction}`;

        // 接口会调用这个函数
        // callbackFunction({ 接口数据key/value })
        window[callbackFunction] = (response) => {
            resolve({
                ok: true,
                // keep consistent with fetch API
                // Promise.resolve(value)是new Promise()的快捷方式，相当于
                /*
                 * new Promise(function(resolve){
                 *   resolve(value)
                 * })
                */
                json: () => Promise.resolve(response),
            });

            if (timeoutId) clearTimeout(timeoutId);

            removeScript(scriptId);

            clearFunction(callbackFunction);
        };

        // Check if the user set their own params, and if not add a ? to start a list of params
        url += (url.indexOf('?') === -1) ? '?' : '&';
        // 创建script
        const jsonpScript = document.createElement('script');
        jsonpScript.setAttribute('src', `${url}${jsonpCallback}=${callbackFunction}`);
        if (options.charset) {
            jsonpScript.setAttribute('charset', options.charset);
        }
        // 设置script的id名称，移除script用
        jsonpScript.id = scriptId;
        // 插入页面后，就会调用script中的回调函数callbackFunction({接口数据})
        document.getElementsByTagName('head')[0].appendChild(jsonpScript);

        timeoutId = setTimeout(() => {
            // 捕捉异常超时
            reject(new Error(`JSONP request to ${_url} timed out`));

            clearFunction(callbackFunction);
            removeScript(scriptId);
            window[callbackFunction] = () => {
                clearFunction(callbackFunction);
            };
        }, timeout);

        // Caught if got 404/500
        jsonpScript.onerror = () => {
            reject(new Error(`JSONP request to ${_url} failed`));

            clearFunction(callbackFunction);
            removeScript(scriptId);
            if (timeoutId) clearTimeout(timeoutId);
        };
    });
}

// export as global function
/*
let local;
if (typeof global !== 'undefined') {
local = global;
} else if (typeof self !== 'undefined') {
local = self;
} else {
try {
    local = Function('return this')();
} catch (e) {
    throw new Error('polyfill failed because global object is unavailable in this environment');
}
}
local.fetchJsonp = fetchJsonp;
*/

export default fetchJsonp;
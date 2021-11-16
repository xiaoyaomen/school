(function(global){"use strict";var _Base64=global.Base64;var version="2.1.4";var buffer;if(typeof module!=="undefined"&&module.exports){buffer=require("buffer").Buffer}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var b64tab=function(bin){var t={};for(var i=0,l=bin.length;i<l;i++)t[bin.charAt(i)]=i;return t}(b64chars);var fromCharCode=String.fromCharCode;var cb_utob=function(c){if(c.length<2){var cc=c.charCodeAt(0);return cc<128?c:cc<2048?fromCharCode(192|cc>>>6)+fromCharCode(128|cc&63):fromCharCode(224|cc>>>12&15)+fromCharCode(128|cc>>>6&63)+fromCharCode(128|cc&63)}else{var cc=65536+(c.charCodeAt(0)-55296)*1024+(c.charCodeAt(1)-56320);return fromCharCode(240|cc>>>18&7)+fromCharCode(128|cc>>>12&63)+fromCharCode(128|cc>>>6&63)+fromCharCode(128|cc&63)}};var re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;var utob=function(u){return u.replace(re_utob,cb_utob)};var cb_encode=function(ccc){var padlen=[0,2,1][ccc.length%3],ord=ccc.charCodeAt(0)<<16|(ccc.length>1?ccc.charCodeAt(1):0)<<8|(ccc.length>2?ccc.charCodeAt(2):0),chars=[b64chars.charAt(ord>>>18),b64chars.charAt(ord>>>12&63),padlen>=2?"=":b64chars.charAt(ord>>>6&63),padlen>=1?"=":b64chars.charAt(ord&63)];return chars.join("")};var btoa=global.btoa?function(b){return global.btoa(b)}:function(b){return b.replace(/[\s\S]{1,3}/g,cb_encode)};var _encode=buffer?function(u){return new buffer(u).toString("base64")}:function(u){return btoa(utob(u))};var encode=function(u,urisafe){return!urisafe?_encode(u):_encode(u).replace(/[+\/]/g,function(m0){return m0=="+"?"-":"_"}).replace(/=/g,"")};var encodeURI=function(u){return encode(u,true)};var re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g");var cb_btou=function(cccc){switch(cccc.length){case 4:var cp=(7&cccc.charCodeAt(0))<<18|(63&cccc.charCodeAt(1))<<12|(63&cccc.charCodeAt(2))<<6|63&cccc.charCodeAt(3),offset=cp-65536;return fromCharCode((offset>>>10)+55296)+fromCharCode((offset&1023)+56320);case 3:return fromCharCode((15&cccc.charCodeAt(0))<<12|(63&cccc.charCodeAt(1))<<6|63&cccc.charCodeAt(2));default:return fromCharCode((31&cccc.charCodeAt(0))<<6|63&cccc.charCodeAt(1))}};var btou=function(b){return b.replace(re_btou,cb_btou)};var cb_decode=function(cccc){var len=cccc.length,padlen=len%4,n=(len>0?b64tab[cccc.charAt(0)]<<18:0)|(len>1?b64tab[cccc.charAt(1)]<<12:0)|(len>2?b64tab[cccc.charAt(2)]<<6:0)|(len>3?b64tab[cccc.charAt(3)]:0),chars=[fromCharCode(n>>>16),fromCharCode(n>>>8&255),fromCharCode(n&255)];chars.length-=[0,0,2,1][padlen];return chars.join("")};var atob=global.atob?function(a){return global.atob(a)}:function(a){return a.replace(/[\s\S]{1,4}/g,cb_decode)};var _decode=buffer?function(a){return new buffer(a,"base64").toString()}:function(a){return btou(atob(a))};var decode=function(a){return _decode(a.replace(/[-_]/g,function(m0){return m0=="-"?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))};var noConflict=function(){var Base64=global.Base64;global.Base64=_Base64;return Base64};global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict};if(typeof Object.defineProperty==="function"){var noEnum=function(v){return{value:v,enumerable:false,writable:true,configurable:true}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum(function(){return decode(this)}));Object.defineProperty(String.prototype,"toBase64",noEnum(function(urisafe){return encode(this,urisafe)}));Object.defineProperty(String.prototype,"toBase64URI",noEnum(function(){return encode(this,true)}))}}})(this);;
/*
Copyright (c) 2005 JSON.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The Software shall be used for Good, not Evil.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/*
    The global object JSON contains two methods.

    JSON.stringify(value) takes a JavaScript value and produces a JSON text.
    The value must not be cyclical.

    JSON.parse(text) takes a JSON text and produces a JavaScript value. It will
    return false if there is an error.
*/
var JSON = function () {
    var m = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        s = {
            'boolean': function (x) {
                return String(x);
            },
            number: function (x) {
                return isFinite(x) ? String(x) : 'null';
            },
            string: function (x) {
                if (/["\\\x00-\x1f]/.test(x)) {
                    x = x.replace(/([\x00-\x1f\\"])/g, function(a, b) {
                        var c = m[b];
                        if (c) {
                            return c;
                        }
                        c = b.charCodeAt();
                        return '\\u00' +
                            Math.floor(c / 16).toString(16) +
                            (c % 16).toString(16);
                    });
                }
                return '"' + x + '"';
            },
            object: function (x) {
                if (x) {
                    var a = [], b, f, i, l, v;
                    if (x instanceof Array) {
                        a[0] = '[';
                        l = x.length;
                        for (i = 0; i < l; i += 1) {
                            v = x[i];
                            f = s[typeof v];
                            if (f) {
                                v = f(v);
                                if (typeof v == 'string') {
                                    if (b) {
                                        a[a.length] = ',';
                                    }
                                    a[a.length] = v;
                                    b = true;
                                }
                            }
                        }
                        a[a.length] = ']';
                    } else if (x instanceof Object) {
                        a[0] = '{';
                        for (i in x) {
                            v = x[i];
                            f = s[typeof v];
                            if (f) {
                                v = f(v);
                                if (typeof v == 'string') {
                                    if (b) {
                                        a[a.length] = ',';
                                    }
                                    a.push(s.string(i), ':', v);
                                    b = true;
                                }
                            }
                        }
                        a[a.length] = '}';
                    } else {
                        return;
                    }
                    return a.join('');
                }
                return 'null';
            }
        };
    return {
        copyright: '(c)2005 JSON.org',
        license: 'http://www.crockford.com/JSON/license.html',
/*
    Stringify a JavaScript value, producing a JSON text.
*/
        stringify: function (v) {
            var f = s[typeof v];
            if (f) {
                v = f(v);
                if (typeof v == 'string') {
                    return v;
                }
            }
            return null;
        },
/*
    Parse a JSON text, producing a JavaScript value.
    It returns false if there is a syntax error.
*/
        parse: function (text) {
            try {
                return !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(
                        text.replace(/"(\\.|[^"\\])*"/g, ''))) &&
                    eval('(' + text + ')');
            } catch (e) {
                return false;
            }
        }
    };
}();;
;(function($, undefined){
    var debug = 0;
//log
    var log = function(msg){
        if(debug){
            var err = new Error();
            Error.captureStackTrace(err, arguments.callee);
            console.log((err.stack.split('at ')[1]).replace(/(.*)\/(.*)\)/,'$2').replace(/\s/g,''),':',msg);
        }
    };
//MiTools
    /**
     * author: Sam
     * 处理url parse generator
     * 两方法互逆
     * @param {Object} urlStr
     * @return  {
                    url : gwdHttps+'api.html',
                    query : {
                        'path1' : 'qihoo-mall-goodsinfo',
                        'path2' : 'listpage',
                        'cv' : clientVersion,
                        'url' : encodeURIComponent(pageUrl),
                        'mid' : Mid,
                        'type' : regItem.type,
                        'prevpop' : ''
                    }
                }
     */
    function parseUrl(url){
        var result = anchor = null, tmp, pairs, i;
        try{
            if(typeof url == 'string'){
                result = {};
                tmp = url.split('#');
                if (tmp.length > 1) {
                    anchor = tmp.slice(1).join('#'); 
                }
                result['anchor'] = anchor;
                
                tmp = tmp[0].split('?');
                result["url"] = tmp[0];
                result['query'] = {};
                if(tmp.length>1){
                    tmp = tmp.slice(1).join('?').split('&');
                    for(i=0;i<tmp.length;++i){
                        pairs = tmp[i].split("=");
                        result['query'][pairs[0]] = pairs.length>1 ? pairs.slice(1).join('=') : null;
                    }
                }
            }else{
                log("请检查输入的url串是否合法:"+url);
            }
        }catch(e){
            log("pareUrl出错:"+url);
            log(e);
        }
        return result;
    }
    /**
     * 传入一个对象产生完整的url
     */
    function generateUrl(data){
        var key,anchor,query, tmp = result = null;
        try{
            if(data && typeof data.url == 'string'){
                result = data.url;
                anchor = data.anchor;
                query = data.query;
                if(typeof query == 'string'){
                    tmp = query;    
                }else if($.isArray(query)){
                    tmp = query.join('&');
                }else if(query){
                    for(key in query){
                        if(tmp == null){
                            tmp = '';
                        }else{
                            tmp += '&';
                        }
                        if (query[key] != null) {
                            tmp += key + '=' + query[key];
                        }else {
                            tmp += key;
                        }
                    }
                }
                if(tmp != null){
                    result += '?'+tmp;
                }
                if(anchor!=null){
                    result += '#'+anchor;
                }
            }
        }catch(e){
            log("generateUrl出错:"+url);
            log(e);
        }
        return result;
    }
    
    /**
     * 元素是否可见
     */
    function elemIsVisible(elem){
        var $elem = $(elem)
        var visible = $elem.is(':visible');
        if(visible){
            $elem.parents().each(function(i){
                if(!$(this).is(':visible')){
                    visible = false;
                    return false;
                }
            });
        }
        return visible;
    }
    //格式化价格数字
    function getPrFix(pri){
        if(!pri || pri == ""){
            return 0;
        }
        var _price = pri.toString();
        var _p = _price.indexOf('.');
        var toFix = '.';
        if(_p > -1){
            var p1 = _price.substr(++_p,1);
            var p2 = _price.substr(++_p,1);
            if ( p1 > 0 && p2 == 0 ) {
                toFix = toFix + p1;
            }else if( p1 > 0  && p2 > 0 || p2 > 0 && p1 == 0 ){
                toFix = toFix + p1 + p2;
            }else{
                toFix = 0;
            }
            _price = parseInt(_price) + toFix;
        }
        return Number(_price);
    }
    /**
     * author: Sam
     * 打乱数组
     * @param {Object} array
     */
    function arrayShuffle(array){
        var max = array.length, pos, tmp;
        for(var i = array.length-1; i>=0; --i){
            pos = (Math.random()*max--)>>0;
            tmp = array[i];
            array[i] = array[pos];
            array[pos] = tmp;
        }
        return array;
    }
    
    //unicode16编码
    function toUnicode16(str){
        str += "";
        var buffer = [];
        var hex;
        for(var i=0; i<str.length; ++i){
            hex = str.charCodeAt(i).toString(16);
            if(hex.length > 4){
                log("编码位数出错");
            }
            while(hex.length<4){
                hex = '0'+hex;
            }
            buffer[buffer.length] = hex;
        }
        return buffer.join('');
    }
    //unicode 16 解码
    function parseUnicode16(str){
        var buffer = [];
        for(var i=0; i<str.length; i+=4){
            buffer[buffer.length] = parseInt(str.substr(i,4),16);
        }
        return String.fromCharCode.apply(null,buffer);
    }
    /**
     * Sam
     * 接受输入 buffer, 返回拼接后总厂为 maxLen（不包括省略号）的 buffer
     * @param {Object} buffer  Array
     * @param {Object} maxLen  合并后允许的极限长度
     * @param {Object} chkWideChar 是否按宽字符判断长度 
     * @param {Object} showEllipsis 显示省略号
     */
    function prepareStrBufferByLen(buffer, maxLen, chkWideChar, showEllipsis){
        var total = 0,
            ellipsis = typeof showEllipsis == 'string' ? showEllipsis : showEllipsis ? '...' : '',
            len, i;
        for(i=0;i < buffer.length; ++i){
            len = MiTools.getStrLen(buffer[i],chkWideChar);
            total += len;
            if(total >= maxLen){
                if(total > maxLen){
                    if(chkWideChar){
                        buffer[i] = MiTools.subWideCharStr(buffer[i], len - (total - maxLen)) + ellipsis;
                    }else{
                        buffer[i] = buffer[i].slice(0,len - (total - maxLen)) + ellipsis;
                    }
                }else if(i < buffer.length - 1){
                    buffer[++i] = ellipsis; 
                }
                if(buffer[i]=='' && i>0){
                    --i;
                }
                buffer = buffer.slice(0,i+1);
                break;
            }
        }
        return buffer;
    }

    /**
     * 宽字符文本截长 Sam
     * @param {Object} str
     * @param {Object} maxLen
     * @param {Object} showEllipsis
     */
    function subWideCharStr(str,maxLen, showEllipsis){
        var wlen = 0;
        var ellipsis = typeof showEllipsis == 'string' ? showEllipsis : showEllipsis ? '...' : '';
        if(str.charCodeAt(0)>128 && maxLen<2 || str.charCodeAt(0)<=128 && maxLen<1){
            return '';
        }else{
            for(var i = 0;i < str.length; i++) {
                var iCode = str[i].charCodeAt();
                if(iCode > 128){
                    wlen += 2;
                }else{
                    wlen += 1;
                }
                if(wlen == maxLen && i<str.length-1){
                    return str.slice(0,i+1)+ellipsis;
                }else if(wlen > maxLen){
                    return str.slice(0,i)+ellipsis;
                }
            }
            return str;
        }
    };
    /**
     * 获取文本长度（可指定获取宽字符）Sam
     * @param {Object} str
     * @param {Object} chkWideChar
     */
    function getStrLen(str,chkWideChar){
        if(!chkWideChar){
            return str.length;
        }else{
            var len = str.length;
            for(var i = 0;i < str.length; i++) {
                var iCode = str[i].charCodeAt();
                if(iCode > 128){
                    len++;
                }
            }
            return len;
        }
    }
    
    //获得浏览器滚动条宽度
    var getScrollWidth = (function(){
        var scrollWidth = 0;
        return function () {
            if(scrollWidth != 0){
                return scrollWidth;
            }
            var noScroll, scroll, oDiv = document.createElement("DIV");
            oDiv.style.cssText = "position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;";
            noScroll = document.body.appendChild(oDiv).clientWidth;
            oDiv.style.overflowY = "scroll";
            scroll = oDiv.clientWidth;
            document.body.removeChild(oDiv);
            scrollWidth = noScroll-scroll;
            return noScroll-scroll;
        }
    })();
    function getTop(e){ 
        var offset=e.offsetTop;
        if(e.offsetParent!=null){
            offset+=getTop(e.offsetParent); 
        }
        return offset; 
    }
    function getLeft(e){ 
        var offset=e.offsetLeft; 
        if(e.offsetParent!=null){
            offset+=getLeft(e.offsetParent); 
        }
        return offset; 
    }
    /**
     * 获得某天零点的unix时间戳
     */
    function getDayTime(date){
        date = date || new Date();
        return new Date(date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()).getTime();
    }
    /**
     * 格式化日期字符串
     */
    function getDateStr(nowDate){
        var nowTime = nowDate || new Date();
        var year = nowTime.getFullYear();   
        var month=nowTime.getMonth()+1;     
        var date=nowTime.getDate();     
        return year+"/"+month+"/"+date;
    }
        
    /**
     * 确保图片加载后调用回调函数
     * @author Sam
     * @param {Object} img 
     * @param {Object} fn 回调
     */
    function runAfterImgLoad(img,fn){
        if(!img.complete){
            img.onload = function(){
                fn && fn(img);
            };
        }else{
            setTimeout(function(){
                fn && fn(img);
            },0);
        }
    }
    
    function formalizeUrl(url){
        if(typeof url == 'string'){
            //var url_info = $.url();
            var local_url = window.location.href || '';
            if(url.indexOf('//') == 0){
//              url = url_info.attr("protocol") + ':' + url;
                url = (window.location.protocol || local_url.split('/')[0]) + url;
            }else if(url.indexOf('/') == 0){
//              url = url_info.attr('base') + url; 
                url = (window.location.protocol || local_url.split('/')[0]) + '//' + window.location.host + url;
            }
        }
        return url;
    }
    
    /**
     * Sam 20140724
     * url检测器的单例工厂
     */
    function getCheckUrlFn(regArray){
        var checker;
        if($.isFunction(getCheckUrlFn.checker)){
            checker = getCheckUrlFn.checker;
        }else{
            var goodsUrlRegList = [];
            for(var i = 0;i<regArray.length;i++){
                var domainReg = JSON.parse(regArray[i].reg.replace(/\\/g,"\\\\"));
                var type = regArray[i].type;
                var urlReg = domainReg.url;
                if( urlReg ){
                    var urlRuleList = urlReg.page.reg.rule;
                    for(var uIndex in urlRuleList){
                        if( type == 1 ){
                            goodsUrlRegList.push(urlRuleList[uIndex][0]);
                        }
                    }
                }
            }
            checker = function(url){
                var isTrue = false;
                var checkUrlList = [];
                var targetUrl = null;
                checkUrlList.push(url);
                if( url.indexOf("http") != 0 ){
                    checkUrlList.push("http:"+url);
                    checkUrlList.push("http://www."+domain+url);
                    checkUrlList.push("http://www."+domain+"/"+url);
                    checkUrlList.push("http://item."+domain+url);
                    checkUrlList.push("http://item."+domain+"/"+url);
                    checkUrlList.push("http://mall.jumei.com/cetaphil"+url.replace("..",""));
                    if( pageUrl.indexOf("com.cn") != -1 ){
                        checkUrlList.push("http://www."+domain+".cn"+url);
                        checkUrlList.push("http://www."+domain+".cn/"+url);
                        checkUrlList.push("http://item."+domain+".cn"+url);
                        checkUrlList.push("http://item."+domain+".cn/"+url);
                    }
                }
                $.each(goodsUrlRegList,function(i,item){
                    $.each(checkUrlList,function(j,urlItem){
                        if( new RegExp(item).exec(urlItem) ){
                            isTrue = true;
                            targetUrl = urlItem;
                            return false;
                        }
                    });
                    if( isTrue ){
                        return false;
                    }
                });
                return {isTrue:isTrue,targetUrl:targetUrl};
            }
        }
        return checker;
    }
    
    
//Extension
    /**
     * 插件后台消息发送方法
     */
    function sendMessage(obj, callBack){
        if(chrome.extension && chrome.extension.sendMessage){
            chrome.extension.sendMessage(obj, function (result){
                callBack && callBack(result);
            });
        }else if(chrome.runtime && chrome.runtime.sendMessage){
            chrome.runtime.sendMessage(obj, function (result){
                callBack && callBack(result);
            });
        }
    }
    
    /**
     * 后台发请求方法
     */
    function doAjax(config,callback){
        if(config){
            var url = config.url;
            if(url){
                try{
                    url = MiTools.parseUrl(url);
                    url.query.ref = encodeURIComponent(window.location.href);
                    if(url.query.qhtag){
                        var tmp = url.query.qhtag;
                        delete url.query.qhtag;
                        url.query.qhtag = tmp;
                    }
                    config.url = generateUrl(url);
                }catch(e){
                }
            }
            Extension.sendMessage({greeting: 'DO_AJAX',config:config},function(data){
                callback && callback(data);
            });
        }
    }
    /**
     * 操作后台本地存储options和options_temp 字段的get方法
     * @param {Object} callback(options, optionsTemp)
     */
    function getGwdOptions(callback){
        Extension.sendMessage({greeting: "GET_OPTIONS"},function (obj){
            var gwdOptions, gwdOptionsTmp;
            gwdOptions = JSON.parse(obj['options']);
            if(obj['options_temp'] && obj['options_temp']!=''){
                gwdOptionsTmp = JSON.parse(obj['options_temp']);
                if($.isArray(gwdOptionsTmp)){
                    if (gwdOptions.length == 2) {
                        gwdOptionsTmp = {};
                        for(key in gwdOptionsTmp[1]){
                            gwdOptionsTmp[key] = [gwdOptionsTmp[0],gwdOptionsTmp[1][key]];
                        }
                    }
                }
            }
            if(!gwdOptionsTmp){
                gwdOptionsTmp = {};
            }
            callback && callback(gwdOptions,gwdOptionsTmp);
        });
    }
    /**
     * 操作后台本地存储options和options_temp 字段的set方法。注意直接调用set会覆盖
     * @param {Object} options 对象  options options_temp
     */
    function setGwdOptions(options,optionsTemp){
        if(!options && !optionsTemp){
            return false;
        }
        var data = {};
        if(options){
            data['options'] = JSON.stringify(options);
        }
        if(optionsTemp){
            data['options_temp'] = JSON.stringify(optionsTemp);
        }
        Extension.sendMessage({greeting: "SET_OPTIONS",data:data},function (obj){});
    }
    function updateGwdOptions(options, optionsTemp){
        Extension.getGwdOptions(function(old, tempOld){
            var key;
            if(old && options){
                for(key in options){
                    old[key] = options[key]
                }
            }else if(options){
                old = options;  
            }else{
                old = null;
            }
            
            if(tempOld && optionsTemp){
                for(key in optionsTemp){
                    tempOld[key] = optionsTemp[key];
                }
            }else if(optionsTemp){
                tempOld = optionsTemp;
            }else{
                tempOld = null;
            }
            Extension.setGwdOptions(old,tempOld);
        });
    }
    function getHistPriceDrawer(){
        var histPriceDrawer = null;
        return function(){
            if(!histPriceDrawer){
                histPriceDrawer = new HistPriceDrawer();
            }
            return histPriceDrawer;
            
        };
    }
    var dynamicTpl = (function() {
        var mapedTable = {};
        var mapTable = {};
        var t = +new Date;//+new Date,
        var map = function(name){
            if(mapedTable[name]){
                return name;
            }
            if(mapTable[name]){
                return mapTable[name];
            }
            var md5Str = $.md5(name+t);
            md5Str = md5Str.match(/\D/)[0]  + md5Str.substr(26);
            mapTable[name] = md5Str;
            mapedTable[md5Str] = name;
            return mapTable[name];
        };
        var obj = {
            css:function(text){
                text  = $.trim(text.replace(/[\t\r\n]/g,''));
                var that = this,text = str = text.replace(/\/\*.*?\*\//g,'').replace(/\s+/g,' ');
                $.each(str.replace(/\{.*?\}/g,'|').split('|'),function(i,val){
                    text = text.replace(''+val,that.getSelector(val));
                });
                return text;
            },
            html:function(text){
                text  = $.trim(text.replace(/[\t\r\n]/g,''));
                var reg = /\s+(class|id)\s*=\s*["'](.*?)["']/g;
                return text.replace(reg,function($0,$1,$2){
                    var arr = [];
                    $.each($2.split(' '),function(k,v){
                        arr.push(MiTools.dynamicTpl.get(v));
                    });
                    return ' ' + $1 +'="' + arr.join(' ') + '"';
                });
            },
            get :function(name){
                return map(name);
            },
            getSelector : function(selector){
                if(!selector) return selector;
                var that = this;
                // return selector.replace(/([#\.])(.*?)(?=($|\[|\:|#|\.|,|\s|\+|\~|'|"|>))/g,function($0,$1,$2){ //bugfix，这行是老代码，不要删
                return selector.replace(/([#\.])(.*?)(?=($|\[|\:|#|\.|,|\s|\+|\~|'|"|>|\)))/g,function($0,$1,$2){
                    return $1 + that.get($2);
                // }).replace(/:(not|has)\(('|")(.*?)$2\)/g,function($0,$1,$2,$3){  //bugfix，这行是老代码，不要删
                }).replace(/:(not|has)\(('|")(.*?)\2\)/g,function($0,$1,$2,$3){
                    return ':' + $1 + '(' + $2 + that.getSelector($3) + $2 + ')';
                });
            }
        };
        var fun = function(str){
            str  = $.trim(str.replace(/[\t\r\n]/g,''));
            if(str.charAt(0) === "<" && str.charAt( str.length - 1 ) === ">" && str.length >= 3){
                str = obj.html( str.replace(/(<style.*?>)(.*?)(<\/style>)/g,function($0,$1,$2,$3){
                    return $1 + obj.css($2) + $3;
                })); 
            }else{
                str = obj.getSelector(str);
            }
            return str; 
        }
        $.extend(fun,obj);
        return fun;
    })();
    function loadCompress(){
        //改写一下选择器，用于混淆
        var tmp = {};
        var old$ = $;
        var oldFuns = {},newFuns = {};
        for(var key in $.fn){
            if($.isFunction($.fn[key])){
                oldFuns[key] = $.fn[key];
            }
        }
        $.each(['addClass','removeClass','toggleClass','hasClass'],function(key,val){
            newFuns[val] = function(){
                var arr = Array.prototype.slice.call(arguments);
                if(!this.isOrigin){
                    $.each(arr,function(k,v){
                        if(typeof v == 'string'){
                            var temp = [];
                            $.each(v.split(' '),function(k1,v1){
                                temp.push(MiTools.dynamicTpl.get(v1))
                            })
                            arr[k] = temp.join(' ');
                        }
                    })
                }
                return oldFuns[val].apply(this,arr);
            };
        });
        $.each(['on','off'],function(key,val){
            newFuns[val] = function(){
                var arr = Array.prototype.slice.call(arguments);
                if(!this.isOrigin && typeof arr[1] == 'string'){
                    arr[1] = MiTools.dynamicTpl.getSelector(arr[1]);
                }
                return oldFuns[val].apply(this,arr);
            }
        });
        $.each(['is','index','find','replaceAll','has','not','filter','parents'],function(key,val){
            newFuns[val] = function(selector){
                if(typeof selector == 'string'){
                    if(typeof this.isOrigin === 'undefined' && tmp[selector] || this.isOrigin === true){
                        selector = selector;
                    }else {
                        selector = MiTools.dynamicTpl.getSelector(selector);
                    }
                }
                return oldFuns[val].call(this,selector);
            }
        });

        $.each(['wrapAll','wrapInner','wrap','unwrap','append','prepend','before','after','html','replaceWith','appendTo','prependTo','insertBefore','insertAfter'],function(key,val){
            newFuns[val] = function(){
                var arr = Array.prototype.slice.call(arguments);
                if(!this.isOrigin){
                    $.each(arr,function(k,str){
                        if(typeof str == 'string' ){
                            str  = $.trim(str.replace(/[\t\r\n]/g,''));
                            if(str.charAt(0) === "<" && str.charAt( str.length - 1 ) === ">" && str.length >= 3){
                                str = MiTools.dynamicTpl.html( str.replace(/(<style.*?>)(.*?)(<\/style>)/g,function($0,$1,$2,$3){
                                    return $1 + MiTools.dynamicTpl.css($2) + $3;
                                })); 
                            }
                        }
                        arr[k] = str;
                    })
                }
                return oldFuns[val].apply(this,arr);
            }
        });
        $.extend($.fn,newFuns);
        window.$ = function(selector,context,isNew){
            var isOriginSelector = (arguments.length == 3 && isNew === false) || (arguments.length == 2 && context === false);
            if(!isOriginSelector){
                if(typeof selector == 'string'){
                    selector = MiTools.dynamicTpl(selector);
                }
            }
            tmp[selector] = isOriginSelector;
            var dom = old$(selector,context);
            if(isOriginSelector){
                dom.isOrigin = true;
            }else{
                dom.isOrigin = false;
            }
            return dom;
        };
        old$.extend(window.$,old$, {isCompressed: true});
    }

    function getNVCVal(callback) {
        var listener = function(e) {
            if (e.detail) {
	            document.removeEventListener('MMZ_GOT_NVCVAL', listener);
	            callback && callback(e.detail.nvcval);
            }
        }
	    document.addEventListener('MMZ_GOT_NVCVAL', listener);
        injectScript(function() {
	        var evt = document.createEvent("CustomEvent"),
                nvcval = window.getNVCVal();
	        evt.initCustomEvent('MMZ_GOT_NVCVAL', true, true, {nvcval: nvcval});
	        // setTimeout(function(){
	        document.dispatchEvent(evt);
	        //两种方式，兼容不同浏览器
	        document.dispatchEvent(new CustomEvent('MMZ_GOT_NVCVAL', { detail: {nvcval: nvcval} }))
        });
    }
    
    var Tools = {};
    Tools.parseUrl = parseUrl;
    Tools.generateUrl = generateUrl;
    Tools.elemIsVisible = elemIsVisible;
    Tools.getPrFix = getPrFix;
    Tools.arrayShuffle = arrayShuffle;
    Tools.encodeUnicode16 = toUnicode16;
    Tools.decodeUnicode16 = parseUnicode16;
    Tools.prepareStrBufferByLen = prepareStrBufferByLen;
    Tools.subWideCharStr = subWideCharStr;
    Tools.getStrLen = getStrLen;
    Tools.getScrollWidth = getScrollWidth;
    Tools.getLeft = getLeft;
    Tools.getTop = getTop;
    Tools.getDayTime = getDayTime;
    Tools.getDateStr = getDateStr;
    Tools.runAfterImgLoad = runAfterImgLoad;
    Tools.getCheckUrlFn = getCheckUrlFn;
    Tools.MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    Tools.getHistPriceDrawer = getHistPriceDrawer();
    Tools.formalizeUrl = formalizeUrl;
    Tools.dynamicTpl = dynamicTpl;
    Tools.loadCompress = loadCompress;
    Tools.getNVCVal = getNVCVal;
    
    var Extension = {};
    Extension.sendMessage = sendMessage;
    Extension.ajax = doAjax;
    Extension.getGwdOptions = getGwdOptions;
    Extension.setGwdOptions = setGwdOptions;
    Extension.updateGwdOptions = updateGwdOptions;
    Extension.debug = debug;
    
    window.MiTools = Tools;
    window.Extension = Extension;
    window.log = log;
    window.global = {};
})(jQuery);;
//初始化随机选择器
MiTools.loadCompress();;
var animate = (function (){
	return {
		defaultImg : chrome.extension.getURL("images/animation_default.png"),
		animation : function (){
			Extension.sendMessage({greeting: "ANIMATE_START_TEXT"},function(){});
		},
		FlyIconAnimate : function (info, imageObj , top , left, callback ){
			if(!info || $('#____goods_divPageShow').size() ) {
				return false;
			}
			var self = this;
			var imgObj = imageObj || [];
			var windowWidth = Math.min.apply(Math,[document.documentElement.clientWidth,document.body.clientWidth]);
			var windowHeight = Math.min.apply(Math,[document.documentElement.clientHeight,document.body.clientHeight]);
			windowHeight = windowHeight > 300 ? windowHeight : Math.max.apply(Math,[document.documentElement.clientHeight,document.body.clientHeight]);
			var topFly = top == null ? 0 : top;
			var lefFly = left == null ? windowWidth - 80 : left;
			var appendHtml = [];
			if(typeof info == 'object'){
				var img = new Image;
				img.src = info.pic&&info.pic != "" ? info.pic : this.defaultImg;
				var price = info.price,
					name = info.name,
					shop = info.shopName;
				if(img.width>img.height){
					var picWidth = 300;
					var picHeight = 300 * img.height / img.width;
				}else{
					var picHeight = 300;
					var picWidth = 300 * img.width / img.height;
				}
				if( !$('#webkitAnimationNew').size() ){
					appendHtml.push('<style id = "webkitAnimationNew" type="text/css">@-webkit-keyframes rotate{from{-webkit-transform:rotate(0deg);width:'+picWidth+'px;height: '+picHeight+'px;}to{-webkit-transform:rotate(180deg);left:'+lefFly+'px;top:'+topFly+'px;opacity:0.1;width:0px;height:0px;}}\
					.___goods_div_animate{-webkit-animation:rotate 0.8s 0s linear;}\
					#____goods_divPageShow{background-color: rgba(0,0,0,0.6);padding:0;z-index:2147483647;left:'+(windowWidth-300)/2+'px;top:'+(windowHeight-410)/2+'px;display:block;position:fixed;overflow: hidden;}\
					#___goods_img_holder{width:300px;height:300px;overflow: hidden;}\
					#__goods_divImageShow{width:100%;height:100%;}\
					#___goods_detail_holder{width:270px;height:82px;background:#ffffff;position:relative;font-size:14px;padding:14px 15px;font-family:"PingFang SC", "Helvetica Neue", "Helvetica", "STHeitiSC-Light","Arial","Microsoft Yahei", sans-serif;;}\
					#__goods_name{color:#333333;white-space:nowrap;display:block;width:100%;overflow:hidden;}\
					#__goods_price{color:#ff4800;font-size:18px;margin-top:10px;font-weight:bold;}\
					#__goods_shop{color:#999999;margin-top:5px;}\
					#___goods_mask{position:fixed;top:0;left:0;z-index:2147483647;display:block;width:100%;height:100%;background:rgba(0,0,0,0.05);}</style>');
				}
				$('#___goods_mask').toggle();
				if( !$('#___goods_mask').size() ){
					appendHtml.push('<div id = "___goods_mask"></div>');
				}
				var detailHtml = "";
				if(name || price || shop){
					detailHtml = '<div id="___goods_detail_holder">\
									<div id="__goods_name">'+name+'</div>\
									<div id="__goods_price">¥ '+ parseFloat(price).toFixed(2)+'</div>\
									<div id="__goods_shop">'+shop+'</div>\
								</div>';
				}
				appendHtml.push('<div id= "____goods_divPageShow">\
									<div id = "___goods_img_holder">\
										<img id = "__goods_divImageShow" src = "'+img.src+'" />\
									</div>'
									+detailHtml+
								'</div>');
				$('body').append(appendHtml.join(''));
				if( imgObj.length ){
					$('#___goods_border').css({width:picWidth,height:picHeight});
					$('#____goods_divPageShow').css({left:(windowWidth-picWidth)/2 , top:(windowHeight-picHeight)/2});
				}
				
				setTimeout(function (){
					$("#____goods_divPageShow").addClass('___goods_div_animate');
					setTimeout(function(){
						$("#____goods_divPageShow").remove();
						if( !callback ){
							self.animation();
						}else{
							try{
								callback();
							}catch(e){
							}
						}
						$('#___goods_mask').toggle();
					},750);
				},600);
			}else if(typeof info == 'string'){
				var proportion = windowWidth/windowHeight;
				var picHeight = imgObj.length ? imgObj[1] : parseInt(windowHeight*0.6);
				var picWidth = imgObj.length ? imgObj[0] : parseInt(picHeight*proportion);
				if ( !$('#webkitAnimation').size() ) {		
					appendHtml.push('<style id = "webkitAnimation" type="text/css">@-webkit-keyframes rotate{from{-webkit-transform:rotate(0deg);width:'+picWidth+'px;height: '+picHeight+'px;}to{-webkit-transform:rotate(180deg);left:'+lefFly+'px;top:'+topFly+'px;opacity:0.1;width:0px;height:0px;}}.___goods_div_animate{-webkit-animation:rotate 0.8s 0s linear;}#____goods_divPageShow{background-color: rgba(0,0,0,0.6);padding: 5px;z-index:2147483647;left:'+(windowWidth-picWidth)/2+'px;top:'+(windowHeight-picHeight)/2+'px;display:block;position:fixed;overflow: hidden;}#___goods_border{width:'+picWidth+'px;height: '+picHeight+'px;overflow: hidden;}#__goods_divImageShow{width:100%;height:100%;}#___goods_mask{position:fixed;top:0;left:0;z-index:2147483647;display:block;width:100%;height:100%;background:rgba(0,0,0,0.05);}</style>');
				}
				$('#___goods_mask').toggle();
				if( !$('#___goods_mask').size() ){
					appendHtml.push('<div id = "___goods_mask"></div>');
				}
				appendHtml.push('<div id= "____goods_divPageShow"><div id = "___goods_border"><img id = "__goods_divImageShow" src = "'+info+'"/></div></div>');
				$('body').append(appendHtml.join(''));
				if( imgObj.length ){
					$('#___goods_border').css({width:picWidth,height:picHeight});
					$('#____goods_divPageShow').css({left:(windowWidth-picWidth)/2 , top:(windowHeight-picHeight)/2});
				}
				setTimeout(function (){
					$("#____goods_divPageShow").addClass('___goods_div_animate');
					setTimeout(function(){
						$("#____goods_divPageShow").remove();
						if( !callback ){
							self.animation();
						}else{
							try{
								callback();
							}catch(e){
							}
						}
						$('#___goods_mask').toggle();
					},750);
				},600);
			}
			
			return false;
		
		},
		getAnimateTime : function (offset, _width) {
			var _offsetLeft = offset.left + _width;
			var _left = $(window).width() - (document.documentElement.scrollLeft - document.documentElement.clientLeft) - 100;
			var _offsetTop = offset.top - (document.documentElement.scrollTop - document.documentElement.clientTop);
			var _top = 0;
			var sqrt = Math.sqrt((_left - _offsetLeft) * (_left - _offsetLeft) + (_top - _offsetTop) * (_top - _offsetTop));
			return (sqrt / 1500) * 1000;
		}
	};
})();;
var QRCode;!function(){function a(a){this.mode=c.MODE_8BIT_BYTE,this.data=a,this.parsedData=[];for(var b=[],d=0,e=this.data.length;e>d;d++){var f=this.data.charCodeAt(d);f>65536?(b[0]=240|(1835008&f)>>>18,b[1]=128|(258048&f)>>>12,b[2]=128|(4032&f)>>>6,b[3]=128|63&f):f>2048?(b[0]=224|(61440&f)>>>12,b[1]=128|(4032&f)>>>6,b[2]=128|63&f):f>128?(b[0]=192|(1984&f)>>>6,b[1]=128|63&f):b[0]=f,this.parsedData=this.parsedData.concat(b)}this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function b(a,b){this.typeNumber=a,this.errorCorrectLevel=b,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function i(a,b){if(void 0==a.length)throw new Error(a.length+"/"+b);for(var c=0;c<a.length&&0==a[c];)c++;this.num=new Array(a.length-c+b);for(var d=0;d<a.length-c;d++)this.num[d]=a[d+c]}function j(a,b){this.totalCount=a,this.dataCount=b}function k(){this.buffer=[],this.length=0}function m(){return"undefined"!=typeof CanvasRenderingContext2D}function n(){var a=!1,b=navigator.userAgent;return/android/i.test(b)&&(a=!0,aMat=b.toString().match(/android ([0-9]\.[0-9])/i),aMat&&aMat[1]&&(a=parseFloat(aMat[1]))),a}function r(a,b){for(var c=1,e=s(a),f=0,g=l.length;g>=f;f++){var h=0;switch(b){case d.L:h=l[f][0];break;case d.M:h=l[f][1];break;case d.Q:h=l[f][2];break;case d.H:h=l[f][3]}if(h>=e)break;c++}if(c>l.length)throw new Error("Too long data");return c}function s(a){var b=encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return b.length+(b.length!=a?3:0)}a.prototype={getLength:function(){return this.parsedData.length},write:function(a){for(var b=0,c=this.parsedData.length;c>b;b++)a.put(this.parsedData[b],8)}},b.prototype={addData:function(b){var c=new a(b);this.dataList.push(c),this.dataCache=null},isDark:function(a,b){if(0>a||this.moduleCount<=a||0>b||this.moduleCount<=b)throw new Error(a+","+b);return this.modules[a][b]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[d][e]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(a,c),this.typeNumber>=7&&this.setupTypeNumber(a),null==this.dataCache&&(this.dataCache=b.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,b){for(var c=-1;7>=c;c++)if(!(-1>=a+c||this.moduleCount<=a+c))for(var d=-1;7>=d;d++)-1>=b+d||this.moduleCount<=b+d||(this.modules[a+c][b+d]=c>=0&&6>=c&&(0==d||6==d)||d>=0&&6>=d&&(0==c||6==c)||c>=2&&4>=c&&d>=2&&4>=d?!0:!1)},getBestMaskPattern:function(){for(var a=0,b=0,c=0;8>c;c++){this.makeImpl(!0,c);var d=f.getLostPoint(this);(0==c||a>d)&&(a=d,b=c)}return b},createMovieClip:function(a,b,c){var d=a.createEmptyMovieClip(b,c),e=1;this.make();for(var f=0;f<this.modules.length;f++)for(var g=f*e,h=0;h<this.modules[f].length;h++){var i=h*e,j=this.modules[f][h];j&&(d.beginFill(0,100),d.moveTo(i,g),d.lineTo(i+e,g),d.lineTo(i+e,g+e),d.lineTo(i,g+e),d.endFill())}return d},setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(var b=8;b<this.moduleCount-8;b++)null==this.modules[6][b]&&(this.modules[6][b]=0==b%2)},setupPositionAdjustPattern:function(){for(var a=f.getPatternPosition(this.typeNumber),b=0;b<a.length;b++)for(var c=0;c<a.length;c++){var d=a[b],e=a[c];if(null==this.modules[d][e])for(var g=-2;2>=g;g++)for(var h=-2;2>=h;h++)this.modules[d+g][e+h]=-2==g||2==g||-2==h||2==h||0==g&&0==h?!0:!1}},setupTypeNumber:function(a){for(var b=f.getBCHTypeNumber(this.typeNumber),c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(var c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d}},setupTypeInfo:function(a,b){for(var c=this.errorCorrectLevel<<3|b,d=f.getBCHTypeInfo(c),e=0;15>e;e++){var g=!a&&1==(1&d>>e);6>e?this.modules[e][8]=g:8>e?this.modules[e+1][8]=g:this.modules[this.moduleCount-15+e][8]=g}for(var e=0;15>e;e++){var g=!a&&1==(1&d>>e);8>e?this.modules[8][this.moduleCount-e-1]=g:9>e?this.modules[8][15-e-1+1]=g:this.modules[8][15-e-1]=g}this.modules[this.moduleCount-8][8]=!a},mapData:function(a,b){for(var c=-1,d=this.moduleCount-1,e=7,g=0,h=this.moduleCount-1;h>0;h-=2)for(6==h&&h--;;){for(var i=0;2>i;i++)if(null==this.modules[d][h-i]){var j=!1;g<a.length&&(j=1==(1&a[g]>>>e));var k=f.getMask(b,d,h-i);k&&(j=!j),this.modules[d][h-i]=j,e--,-1==e&&(g++,e=7)}if(d+=c,0>d||this.moduleCount<=d){d-=c,c=-c;break}}}},b.PAD0=236,b.PAD1=17,b.createData=function(a,c,d){for(var e=j.getRSBlocks(a,c),g=new k,h=0;h<d.length;h++){var i=d[h];g.put(i.mode,4),g.put(i.getLength(),f.getLengthInBits(i.mode,a)),i.write(g)}for(var l=0,h=0;h<e.length;h++)l+=e[h].dataCount;if(g.getLengthInBits()>8*l)throw new Error("code length overflow. ("+g.getLengthInBits()+">"+8*l+")");for(g.getLengthInBits()+4<=8*l&&g.put(0,4);0!=g.getLengthInBits()%8;)g.putBit(!1);for(;;){if(g.getLengthInBits()>=8*l)break;if(g.put(b.PAD0,8),g.getLengthInBits()>=8*l)break;g.put(b.PAD1,8)}return b.createBytes(g,e)},b.createBytes=function(a,b){for(var c=0,d=0,e=0,g=new Array(b.length),h=new Array(b.length),j=0;j<b.length;j++){var k=b[j].dataCount,l=b[j].totalCount-k;d=Math.max(d,k),e=Math.max(e,l),g[j]=new Array(k);for(var m=0;m<g[j].length;m++)g[j][m]=255&a.buffer[m+c];c+=k;var n=f.getErrorCorrectPolynomial(l),o=new i(g[j],n.getLength()-1),p=o.mod(n);h[j]=new Array(n.getLength()-1);for(var m=0;m<h[j].length;m++){var q=m+p.getLength()-h[j].length;h[j][m]=q>=0?p.get(q):0}}for(var r=0,m=0;m<b.length;m++)r+=b[m].totalCount;for(var s=new Array(r),t=0,m=0;d>m;m++)for(var j=0;j<b.length;j++)m<g[j].length&&(s[t++]=g[j][m]);for(var m=0;e>m;m++)for(var j=0;j<b.length;j++)m<h[j].length&&(s[t++]=h[j][m]);return s};for(var c={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},d={L:1,M:0,Q:3,H:2},e={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var b=a<<10;f.getBCHDigit(b)-f.getBCHDigit(f.G15)>=0;)b^=f.G15<<f.getBCHDigit(b)-f.getBCHDigit(f.G15);return(a<<10|b)^f.G15_MASK},getBCHTypeNumber:function(a){for(var b=a<<12;f.getBCHDigit(b)-f.getBCHDigit(f.G18)>=0;)b^=f.G18<<f.getBCHDigit(b)-f.getBCHDigit(f.G18);return a<<12|b},getBCHDigit:function(a){for(var b=0;0!=a;)b++,a>>>=1;return b},getPatternPosition:function(a){return f.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,b,c){switch(a){case e.PATTERN000:return 0==(b+c)%2;case e.PATTERN001:return 0==b%2;case e.PATTERN010:return 0==c%3;case e.PATTERN011:return 0==(b+c)%3;case e.PATTERN100:return 0==(Math.floor(b/2)+Math.floor(c/3))%2;case e.PATTERN101:return 0==b*c%2+b*c%3;case e.PATTERN110:return 0==(b*c%2+b*c%3)%2;case e.PATTERN111:return 0==(b*c%3+(b+c)%2)%2;default:throw new Error("bad maskPattern:"+a)}},getErrorCorrectPolynomial:function(a){for(var b=new i([1],0),c=0;a>c;c++)b=b.multiply(new i([1,g.gexp(c)],0));return b},getLengthInBits:function(a,b){if(b>=1&&10>b)switch(a){case c.MODE_NUMBER:return 10;case c.MODE_ALPHA_NUM:return 9;case c.MODE_8BIT_BYTE:return 8;case c.MODE_KANJI:return 8;default:throw new Error("mode:"+a)}else if(27>b)switch(a){case c.MODE_NUMBER:return 12;case c.MODE_ALPHA_NUM:return 11;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 10;default:throw new Error("mode:"+a)}else{if(!(41>b))throw new Error("type:"+b);switch(a){case c.MODE_NUMBER:return 14;case c.MODE_ALPHA_NUM:return 13;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 12;default:throw new Error("mode:"+a)}}},getLostPoint:function(a){for(var b=a.getModuleCount(),c=0,d=0;b>d;d++)for(var e=0;b>e;e++){for(var f=0,g=a.isDark(d,e),h=-1;1>=h;h++)if(!(0>d+h||d+h>=b))for(var i=-1;1>=i;i++)0>e+i||e+i>=b||(0!=h||0!=i)&&g==a.isDark(d+h,e+i)&&f++;f>5&&(c+=3+f-5)}for(var d=0;b-1>d;d++)for(var e=0;b-1>e;e++){var j=0;a.isDark(d,e)&&j++,a.isDark(d+1,e)&&j++,a.isDark(d,e+1)&&j++,a.isDark(d+1,e+1)&&j++,(0==j||4==j)&&(c+=3)}for(var d=0;b>d;d++)for(var e=0;b-6>e;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(c+=40);for(var e=0;b>e;e++)for(var d=0;b-6>d;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+5,e)&&a.isDark(d+6,e)&&(c+=40);for(var k=0,e=0;b>e;e++)for(var d=0;b>d;d++)a.isDark(d,e)&&k++;var l=Math.abs(100*k/b/b-50)/5;return c+=10*l}},g={glog:function(a){if(1>a)throw new Error("glog("+a+")");return g.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;a>=256;)a-=255;return g.EXP_TABLE[a]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;8>h;h++)g.EXP_TABLE[h]=1<<h;for(var h=8;256>h;h++)g.EXP_TABLE[h]=g.EXP_TABLE[h-4]^g.EXP_TABLE[h-5]^g.EXP_TABLE[h-6]^g.EXP_TABLE[h-8];for(var h=0;255>h;h++)g.LOG_TABLE[g.EXP_TABLE[h]]=h;i.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var b=new Array(this.getLength()+a.getLength()-1),c=0;c<this.getLength();c++)for(var d=0;d<a.getLength();d++)b[c+d]^=g.gexp(g.glog(this.get(c))+g.glog(a.get(d)));return new i(b,0)},mod:function(a){if(this.getLength()-a.getLength()<0)return this;for(var b=g.glog(this.get(0))-g.glog(a.get(0)),c=new Array(this.getLength()),d=0;d<this.getLength();d++)c[d]=this.get(d);for(var d=0;d<a.getLength();d++)c[d]^=g.gexp(g.glog(a.get(d))+b);return new i(c,0).mod(a)}},j.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],j.getRSBlocks=function(a,b){var c=j.getRsBlockTable(a,b);if(void 0==c)throw new Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+b);for(var d=c.length/3,e=[],f=0;d>f;f++)for(var g=c[3*f+0],h=c[3*f+1],i=c[3*f+2],k=0;g>k;k++)e.push(new j(h,i));return e},j.getRsBlockTable=function(a,b){switch(b){case d.L:return j.RS_BLOCK_TABLE[4*(a-1)+0];case d.M:return j.RS_BLOCK_TABLE[4*(a-1)+1];case d.Q:return j.RS_BLOCK_TABLE[4*(a-1)+2];case d.H:return j.RS_BLOCK_TABLE[4*(a-1)+3];default:return void 0}},k.prototype={get:function(a){var b=Math.floor(a/8);return 1==(1&this.buffer[b]>>>7-a%8)},put:function(a,b){for(var c=0;b>c;c++)this.putBit(1==(1&a>>>b-c-1))},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&this.buffer.push(0),a&&(this.buffer[b]|=128>>>this.length%8),this.length++}};var l=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],o=function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){function g(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)b.hasOwnProperty(d)&&c.setAttribute(d,b[d]);return c}var b=this._htOption,c=this._el,d=a.getModuleCount();Math.floor(b.width/d),Math.floor(b.height/d),this.clear();var h=g("svg",{viewBox:"0 0 "+String(d)+" "+String(d),width:"100%",height:"100%",fill:b.colorLight});h.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),c.appendChild(h),h.appendChild(g("rect",{fill:b.colorDark,width:"1",height:"1",id:"template"}));for(var i=0;d>i;i++)for(var j=0;d>j;j++)if(a.isDark(i,j)){var k=g("use",{x:String(i),y:String(j)});k.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),h.appendChild(k)}},a.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},a}(),p="svg"===document.documentElement.tagName.toLowerCase(),q=p?o:m()?function(){function a(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function d(a,b){var c=this;if(c._fFail=b,c._fSuccess=a,null===c._bSupportDataURI){var d=document.createElement("img"),e=function(){c._bSupportDataURI=!1,c._fFail&&_fFail.call(c)},f=function(){c._bSupportDataURI=!0,c._fSuccess&&c._fSuccess.call(c)};return d.onabort=e,d.onerror=e,d.onload=f,d.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",void 0}c._bSupportDataURI===!0&&c._fSuccess?c._fSuccess.call(c):c._bSupportDataURI===!1&&c._fFail&&c._fFail.call(c)}if(this._android&&this._android<=2.1){var b=1/window.devicePixelRatio,c=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(a,d,e,f,g,h,i,j){if("nodeName"in a&&/img/i.test(a.nodeName))for(var l=arguments.length-1;l>=1;l--)arguments[l]=arguments[l]*b;else"undefined"==typeof j&&(arguments[1]*=b,arguments[2]*=b,arguments[3]*=b,arguments[4]*=b);c.apply(this,arguments)}}var e=function(a,b){this._bIsPainted=!1,this._android=n(),this._htOption=b,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=b.width,this._elCanvas.height=b.height,a.appendChild(this._elCanvas),this._el=a,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return e.prototype.draw=function(a){var b=this._elImage,c=this._oContext,d=this._htOption,e=a.getModuleCount(),f=d.width/e,g=d.height/e,h=Math.round(f),i=Math.round(g);b.style.display="none",this.clear();for(var j=0;e>j;j++)for(var k=0;e>k;k++){var l=a.isDark(j,k),m=k*f,n=j*g;c.strokeStyle=l?d.colorDark:d.colorLight,c.lineWidth=1,c.fillStyle=l?d.colorDark:d.colorLight,c.fillRect(m,n,f,g),c.strokeRect(Math.floor(m)+.5,Math.floor(n)+.5,h,i),c.strokeRect(Math.ceil(m)-.5,Math.ceil(n)-.5,h,i)}this._bIsPainted=!0},e.prototype.makeImage=function(){this._bIsPainted&&d.call(this,a)},e.prototype.isPainted=function(){return this._bIsPainted},e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},e.prototype.round=function(a){return a?Math.floor(1e3*a)/1e3:a},e}():function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){for(var b=this._htOption,c=this._el,d=a.getModuleCount(),e=Math.floor(b.width/d),f=Math.floor(b.height/d),g=['<table style="border:0;border-collapse:collapse;">'],h=0;d>h;h++){g.push("<tr>");for(var i=0;d>i;i++)g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+e+"px;height:"+f+"px;background-color:"+(a.isDark(h,i)?b.colorDark:b.colorLight)+';"></td>');g.push("</tr>")}g.push("</table>"),c.innerHTML=g.join("");var j=c.childNodes[0],k=(b.width-j.offsetWidth)/2,l=(b.height-j.offsetHeight)/2;k>0&&l>0&&(j.style.margin=l+"px "+k+"px")},a.prototype.clear=function(){this._el.innerHTML=""},a}();QRCode=function(a,b){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:d.H},"string"==typeof b&&(b={text:b}),b)for(var c in b)this._htOption[c]=b[c];"string"==typeof a&&(a=document.getElementById(a)),this._android=n(),this._el=a,this._oQRCode=null,this._oDrawing=new q(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},QRCode.prototype.makeCode=function(a){this._oQRCode=new b(r(a,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(a),this._oQRCode.make(),this._el.title=a,this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=d}();;
/*! fly - v1.0.0 - 2014-12-22
* https://github.com/amibug/fly
* Copyright (c) 2014 wuyuedong; Licensed MIT */
!function(a){a.fly=function(b,c){var d={version:"1.0.0",autoPlay:!0,vertex_Rtop:20,speed:1.2,start:{},end:{},onEnd:a.noop},e=this,f=a(b);e.init=function(a){this.setOptions(a),!!this.settings.autoPlay&&this.play()},e.setOptions=function(b){this.settings=a.extend(!0,{},d,b);var c=this.settings,e=c.start,g=c.end;f.css({marginTop:"0px",marginLeft:"0px",position:"fixed"}).appendTo("body"),null!=g.width&&null!=g.height&&a.extend(!0,e,{width:f.width(),height:f.height()});var h=Math.min(e.top,g.top)-Math.abs(e.left-g.left)/3;h<c.vertex_Rtop&&(h=Math.min(c.vertex_Rtop,Math.min(e.top,g.top)));var i=Math.sqrt(Math.pow(e.top-g.top,2)+Math.pow(e.left-g.left,2)),j=Math.ceil(Math.min(Math.max(Math.log(i)/.05-75,30),100)/c.speed),k=e.top==h?0:-Math.sqrt((g.top-h)/(e.top-h)),l=(k*e.left-g.left)/(k-1),m=g.left==l?0:(g.top-h)/Math.pow(g.left-l,2);a.extend(!0,c,{count:-1,steps:j,vertex_left:l,vertex_top:h,curvature:m})},e.play=function(){this.move()},e.move=function(){var b=this.settings,c=b.start,d=b.count,e=b.steps,g=b.end,h=c.left+(g.left-c.left)*d/e,i=0==b.curvature?c.top+(g.top-c.top)*d/e:b.curvature*Math.pow(h-b.vertex_left,2)+b.vertex_top;if(null!=g.width&&null!=g.height){var j=e/2,k=g.width-(g.width-c.width)*Math.cos(j>d?0:(d-j)/(e-j)*Math.PI/2),l=g.height-(g.height-c.height)*Math.cos(j>d?0:(d-j)/(e-j)*Math.PI/2);f.css({width:k+"px",height:l+"px","font-size":Math.min(k,l)+"px"})}f.css({left:h+"px",top:i+"px"}),b.count++;var m=window.requestAnimationFrame(a.proxy(this.move,this));d==e&&(window.cancelAnimationFrame(m),b.onEnd.apply(this))},e.destory=function(){f.remove()},e.init(c)},a.fn.fly=function(b){return this.each(function(){void 0==a(this).data("fly")&&a(this).data("fly",new a.fly(this,b))})}}(jQuery);;
;(function($, undefined){
	var priceSniffer = new PriceSniffer();
	/**
	 * 嗅探页面上商品价格
	 * @author  Sam
	 * @sniff  主功能函数，输入图片的jquery对象和查找深度，返回提取的价格，找不到返回-1
	 */
	function PriceSniffer(){
		var sniffer = this;
		this.STRICT_MODE = 0;
		if(typeof PriceSniffer._initialized == 'undefined'){
			if(!$.isFunction(String.prototype.endsWith)){
				String.prototype.endsWith = function(str){
					if(str==null||str==""||this.length==0||str.length>this.length){
						return false;
					}
					return this.substring(this.length-str.length)==str;
				}
			}
			var _regp =  new RegExp(".*");
			_regp.compile('[￥¥]\\s*(\\d{1,3}(,\\d{3})+|\\d{1,4}(\\s\\d{4})+|\\d+)(\\.\\d{1,2}){0,1}','g');
			PriceSniffer.prototype.REGEX_GET_PRICE = _regp;
			PriceSniffer.prototype.BLACK_LIST = ['lefeng.com','m6go.com','wanggou.com']
			PriceSniffer.prototype.sniff = function($target,depth){
				var price = -1;
				if($.inArray(domain,this.BLACK_LIST)>=0){
					return price;
				}
				if(!$.isNumeric(depth)){
					depth = 10;
				}
				var priceArray = [],
					buffer = new NodeBuffer(),
					re = sniffer.REGEX_GET_PRICE,
					_level = 0;
				while(_level<depth && $target.length>0 && $target.height()<1000){
					if( !$target[0] || !$target[0].tagName || $target[0].tagName.toUpperCase() == 'LI' ){
						break;
					}
					
					var $parent = $target.parent();
					var $nodes = $target.siblings().not('script').not('style').clone();
					$nodes.find('*').each(function(i){
						var $this = $(this);
						var tagName = this.tagName && this.tagName.toLowerCase();
						var exceptions = ['script','style'];
						if($.inArray(tagName,exceptions) >= 0){
							$this.remove();
						}
					});
					
					/**
					 * Sam 2014.10.25 试图解决价格是图片的问题,把img内容替换成_
					 */
					$nodes.find('img').each(function(i,elem){
						$(elem).after('_').remove();
					});
					var targetStruct = sniffer.getStructStr($target);
					if(_level>0){
						if(sniffer.STRICT_MODE == 0){
							//有一个不相似的节点就不break
							for(var i=0;i<$nodes.length;++i){
								if(targetStruct != sniffer.getStructStr($nodes.eq(i))){
									break;
								}
							}
							if($nodes.length!=0 && i>=$nodes.length){
								break;
							}
						}
						if(sniffer.STRICT_MODE == 1){
							//有一个相似的节点就break
							for(var i=0;i<$nodes.length;++i){
								if(targetStruct == sniffer.getStructStr($nodes.eq(i))){
									break;
								}
							}
							if($nodes.length!=0 && i<$nodes.length){
								break;
							}
						}
					}
					for(var i=0,stopSearch=false;i<$nodes.length && !stopSearch;++i){
						var $node = $nodes.eq(i);
						var	alltext = this.getText($node),
							group = alltext.match(re);
//						console.log(alltext, group);
						$node.hide().appendTo($parent);
						if(group!=null){
							for(var n = 0;n<group.length; ++n){
							//预处理 删除符合规则的某些节点
								var _price = group[n],
									priceNodes = sniffer.getNodesWithText($node,_price);
//								console.log(_price);
								if(priceNodes.length>1){
									//log("find Node="+priceNodes.length)
								}
								if(priceNodes.length==0){
									//log("进行模糊匹配");
									priceNodes = sniffer.getNodesHasText($node,_price);
								}
								var j = 0;
								while(j<priceNodes.length){
									var priceNode = priceNodes[j];
//									console.log(priceNode[0].outerHTML);
									if(domain=="taobao.com" && priceNode.prev().text().trim()=="邮"){
										priceNodes.splice(j,1);
										continue;
									}
									if(sniffer.hasDeletedPrice(priceNode,"text-decoration","line-through") || (domain=="dangdang.com" && sniffer.hasDeletedPrice(priceNode,'background-image','bg_through.|bg_del.')) || (domain=="yintai.com"&&sniffer.hasDeletedPrice(priceNode,'background-image','sprit-hf'))){
										priceNodes.splice(j,1);
										continue;
									}
									_price = sniffer.getPrice(_price);
									if($.inArray(_price,priceArray)<0){
										priceArray.push(_price);
									}
									/**
									 * Sam 2015-1-12 优化：多于一个价格就不用检索了
									 */
									if(priceArray.length>1){
//										console.log('find more than 1')
										stopSearch = true;
										break;
									}
									++j;
								}
							}
						}else{
						}
						$node.remove();
					}
					if(priceArray.length>0){
						if(priceArray.length == 1){
							price = priceArray[0];
						}
						break;
					}
					$target = $parent;
					++_level;
				}
				return price;
			};
			PriceSniffer.prototype.getText = function($node){
				var text = '';
				var node = $node[0];
				if( node ){					
					if( node.nodeType == 3){
						text = $.trim($node.text());
					}else if( node.tagName && node.tagName.toLowerCase() != 'iframe'){
						var children = $node.contents(), tmp, last;
						for(var i = 0; i < children.length; ++i ){
							tmp = this.getText( children.eq(i) );
							if( tmp ){
								last = text.substr(-1,1);
								if( last && $.isNumeric(tmp.charAt(0)) && ($.isNumeric(last) || last == '.') ){
									text += '_' + tmp;
								}else{
									text += tmp;
								}
							}
						}
					}
				}
				return text;
			};
			PriceSniffer.prototype.hasDeletedPrice = function($node,name,value){
				var checkChildren = true;
				if($node[0].nodeType==3){
					checkChildren = false;
					$node = $node.parent();
				}
				var _val = $node.css(name);
				if(name=="text-decoration" && _val == value && $node.text().trim()!=""){
					return true;
				}
				if(_val && name=="background-image"){
					var _values = value.split("|");
					for(var i=0;i<_values.length;++i){
						if(_val.indexOf(_values[i])>=0){
							return true;
						}
					}
				}
				if(checkChildren){
					var $cNodes = $node.children();
					for(var i=0;i<$cNodes.length;++i){
						var $cNode = $cNodes.eq(i);
						if(arguments.callee($cNode,name,value)){
							return true;
							break;
						}
					}
				}
				return false;
			}
			PriceSniffer.prototype.getPrice = function(priceStr){
				var pos = Math.max(priceStr.indexOf("¥"),priceStr.indexOf("￥"));
				if(pos>=0){
					priceStr = priceStr.slice(pos+1).trim().replace(/\s+|,/g,'');
				}
				return priceStr;
			}
			PriceSniffer.prototype.getPriceStr = function(priceStr){
				var pos = Math.max(priceStr.indexOf("¥"),priceStr.indexOf("￥"));
				if(pos>=0){
					priceStr = priceStr.slice(pos).trim();
				}
				return priceStr;
			}
			PriceSniffer.prototype.isPrice = function(str){
				var isPrice = false;
				if(str.indexOf("￥")==0 || str.indexOf("¥")==0){
					str = str.slice(1).trim();
					var parts = str.split('.');
					if(parts.length==1 || parts.length==2){
						var isNumeric = true;
						for(var i= 0;i<parts.length && isNumeric; ++i){
							var ss = parts[i].split(',');
							for(var j= 0;j<ss.length; ++j){
								if(!sniffer.isNumeric(ss[j])){
									isNumeric = false;
								}
							}
						}
						if(isNumeric){
							isPrice = true;
						}
					}
				}
				return isPrice;
			}
			PriceSniffer.prototype.isNumeric = function(str){
				return str.length == str.trim().length && $.isNumeric(str);
			}
			PriceSniffer.prototype.getNodesIsPrice = function($node){
				return getNodes(function($node){
									var text = $node.text().trim();
									if(domain == "vancl.com"){
										var bg = $node.css("background-image");
										if(bg && (bg.indexOf("icon-off.png")>=0 || bg.indexOf("clear.png")>=0 ||bg.indexOf("duan.png")>=0) && sniffer.isNumeric(text)){
											return true;
										}
										if(text.indexOf("售价￥")==0 && sniffer.isPrice(text.slice(2))){
											return true;
										}
									}
									if(domain == "dangdang.com"){
										var hasPrice = false;
										if($node[0].nodeType==3){
											var _texts = text.split(/\s+/);
											for(var i=0;i<_texts.length;++i){
												var _text = _texts[i];
												if(_text==""){
													continue;
												} 
												if(sniffer.isPrice(sniffer.getPriceStr(_text))){
													hasPrice = true;
													break;
												}
											}
										}
										if(hasPrice){
											return hasPrice;
										}
									}
									return sniffer.isPrice(text);
								},$node);
			}
			PriceSniffer.prototype.getNodesWithText = function($node,str){ //精确查找最浅元素
				return getNodes(function($node){
									return $node.text().trim() == str.trim();
								},$node);
			}
			PriceSniffer.prototype.getNodesHasText = function($node,str){ //模糊查找最深元素
				return getNodes(function($node){
									if($node.text().indexOf(str)>=0){
										var $cNodes = $node.contents();
										for(var i=0;i<$cNodes.length;++i){
											var $cNode = $cNodes.eq(i);
											if($cNode.text().indexOf(str)>=0){
												return false;
											}
										}
										return true;
									}else{
										return false;
									}
								},$node);
			}
			PriceSniffer.prototype.haveSameStruct = function($node1,$node2){
				return sniffer.getStructStr($node1) ==  sniffer.getStructStr($node2);
			}
			PriceSniffer.prototype.getStructStr = function($node){
				var str = '<'+$node[0].tagName+'>';
				var $cNodes = $node.children();
				for(var i=0;i<$cNodes.length;++i){
					str+=arguments.callee($cNodes.eq(i));
				}
				str += '</'+$node[0].tagName+'>';
				return str;
			}
			PriceSniffer.prototype.textPreprocess  = function(text){
				var res = sniffer.REGEXES_TXT_PREPROCESS;
				if(domain == "taobao.com"){
					text = text.replace(res['taobao'],' ');
				}else if(domain == "suning.com"){
					text = text.replace(res['suning'],' ');
				}
				return text;
			}
			PriceSniffer._initialized = true;
		}
	}

	/**
	 * 查询符合条件的所有节点并以一个jquery对象数组的形式返回；（包括本节点与子节点）
	 * 不包括iframe
	 * @author  Sam
	 * @param {Object} fn fn返回true时将节点加入返回数组中。
	 * @param {Object} $node 初始节点
	 */

	function getNodes(fn,$node, $prev){
		var tag = $node[0].tagName;
		if(tag && tag.toLowerCase() == 'iframe'){
			return [];
		}
		if(fn && fn($node, $prev)){
			return [$node];
		}else{
			var $cNodes = $node.contents(),collection=[];
			for(var i=0;i<$cNodes.length;++i){
				collection = collection.concat(arguments.callee(fn, $cNodes.eq(i), i>0?$cNodes.eq(i-1):null ));
			}
			return collection;
		}
	}
	/**
	 * 用来选择一批dom节点，暂时删除，并在未来某一时刻还原。内部是一个栈结构
	 * @author  Sam
	 * remove函数：删除
	 * restor函数：还原
	 */
	function NodeBuffer(){
		var buffer = this;
		buffer.stack = [];
		if(typeof NodeBuffer._initialized == 'undefined'){
			NodeBuffer.prototype.remove = function(selFn,$root,filterFn){
				var nodes = getNodes(selFn,$root),
					stack = buffer.stack;
				if(filterFn){
					nodes = filterFn(nodes);
				}
				for(var i=0;i<nodes.length;++i){
					var node = nodes[i],
						p = node.parent();
					stack.push({parent:p,index:p.contents().index(node),node:node})
					node.detach();
				}
			};
			NodeBuffer.prototype.restore = function(){
				var stack = buffer.stack, obj;
				for(var i=stack.length-1;i>=0;--i){
					var obj = stack[i],
						p = obj.parent,
						index = obj.index,
						$node = obj.node;
					if(index == p.contents().length){
						p.append($node);
					}else{
						$node.insertBefore(p.contents().eq(index));
					}
				}
				stack.length = 0;
			};
			NodeBuffer._initialized = true;
		}
	}
	
	function loadFloatCurveFunc(regArray, hasFloatCurveTrigger){
		if( !regArray || regArray.length<1 ){
			return false;
		}
		if(!loadFloatCurveFunc._initialized){
			loadFloatCurveFunc._initialized = true;
		}else{
			return false;
		}
		var histPriceDrawer = MiTools.getHistPriceDrawer();
		if(hasFloatCurveTrigger){
			loadFloatCurveTriggerFunc();
		}	
		var checkGoodsUrl = MiTools.getCheckUrlFn(regArray);
		var isTB = extractUrlDomain(pageUrl) == 'taobao.com';
		var goodsUrlRegList = [];
		for(var i = 0;i<regArray.length;i++){
			var domainReg = JSON.parse(regArray[i].reg.replace(/\\/g,"\\\\"));
			var type = regArray[i].type;
			var urlReg = domainReg.url;
			if( urlReg ){
				var urlRuleList = urlReg.page.reg.rule;
				for(var uIndex in urlRuleList){
					if( type == 1 ){
						goodsUrlRegList.push(urlRuleList[uIndex][0]);
					}
				}
			}
		}
		var hoverTimer = null,imgMouseoutTimer = null,tempRemoveTimer = null,
			_GUSS_IMG,_GUSS_INITED;

		var confObj = {
				series:{
					subline:false
				},
				xaxis:{
					autoscaleMargin:0.02,
					labelWidth:0,
					labelHeight:0,
					tickFormatter:function(v,axis){
						return "";
					}
				},
				yaxis:{
					position: "right",
					tickFormatter:function(v,axis){return ""}
				},
				grid:{
					show:true,
					color:'#ffffff',
					borderWidth:0
				},
				haveCoordinate:false,
				haveMover : false,
				showLastPoint : false,
				showLowestPoint :true
			};
		//监测超链接地址变动
		var link_change_ob = MiTools.MutationObserver 
							&& (new MiTools.MutationObserver(function(mutations){
								$.each(mutations,function(i, mutation){
									var a = mutation['target'];
									if(a){
										var $a = $(a);
										if($a.attr('href') != mutation['oldValue']){
											setTimeout(function(){
												$a.find('img').each(function(i, img){
													delete img['-gwd-fc-data'];
													histPriceDrawer.remove('.mmz_float_curve');
												});
											},0);
										}
									}
								});
							}));
		
		function observeHrefChange($img, link_change_ob){
			var $a = $img.parents('a:eq(0)');
			if(link_change_ob && $a.length>0 && !$a[0]['-gwd-fc-observed']){
				link_change_ob.observe($a[0], {
					attributes : true,
					attributeOldValue : true,
					attributeFilter : ['href']
				});
				$a[0]['-gwd-fc-observed'] = true;
			}
		}
		
		/**
		 * 处理hover事件。this请指向相应的商品图片。
		 * 
		 * 因为mhpc接口现在不返回cps商家信息，所以cps商家需要在第一次展现时额外请求一次老接口（getOnlineFloatCurveData）来获得。
		 * @author  Sam
		 * @param {Object} _timeout
		 * @param {Object} type
		 */
		var hoverHandler = function(_timeout,type){
			if(!FloatCurve.isShow()){
				return true;
			}
			var hoverImg = $(this),
				_timeout = _timeout == null? 500 : _timeout,
				info = this['-gwd-fc-data'];
			hoverTimer = setTimeout(function(){
				//已经请求过数据 且 “有数据”的情况（请求后/读取缓存后，挂在image上）。符合浮动价格曲线小标签形式的商品始终走这个分支。
				if(info != null){
					//未请求过cps商家的情况
					if(info.view == null){
						getOnlineFloatCurveData(info.url,info.price,function(res){
							completeInfoWithOldData(info,res);
							if(info.pcinfo.info.length>=2){
								makeFloatCurve(hoverImg[0],info);
							}
						},true);
					//已经请求过cps商家的情况
					}else{
						setTimeout(function(){
							if(info.pcinfo.info.length>=2){
								makeFloatCurve(hoverImg[0],info);
							}
						},0);
					}
				//未请求过数据的情况。浮动价格曲线hover图片展现形式时，第一次hover时走这个分支。所以下面只处理单个图片的情况
				}else if(typeof info == 'undefined'){
					checkFloatCurveHistory([hoverImg[0]],
						function(imgArray,infos){
							if (imgArray.length > 0) {
								var info = infos[0],
									img = imgArray[0];
								if(info.value){
									img["-gwd-fc-data"] = info;
									if(info.pcinfo.info.length>=2){
										makeFloatCurve(img,info);
									}
								}else{
									img["-gwd-fc-data"] = null;
								}
							}
						},
						function(imgArray){
							if(imgArray.length>0){
								getOnlineFloatCurveDataArray(imgArray[0],function(infos,$imgArray,prices){
									infos.map(function(info,i){
										var img = $imgArray[i][0];
										if(info.value){
											var price = prices[i];
											if(price>=0){
												info.price = price;
											}
											getOnlineFloatCurveData(info.url,price,function(res){
												info = calcOnlineData(info);
												img['-gwd-fc-data'] = info;
												completeInfoWithOldData(info,res);
												if(info.pcinfo.info.length>=2){
													makeFloatCurve(img,info);
												}
											},true);
										}else{
											img['-gwd-fc-data'] = null;
										}
									});
								});	
							}
						}
					);
				}
			},_timeout);
			return false;
		}
		/**
		 * 	组装新旧数据，组装后成为完整的浮动价格曲线数据（可以缓存）
		 * 
		 * @author  Sam
		 */
		function completeInfoWithOldData(info,res){
			if(res){
				if(res.info && res.info.length>0){
					info.info = res.info;
				}
				info.view = res.view || 0;	
				info.collection = res.collection || 0;
			}
			updateFloatCurveHistory(info);
			return info;
		}
		var lock = false;
		function getOnlineFloatCurveData(goodsUrl,price,callback,getInfoOnly){
			if( lock ){
				return false;
			}
			lock = true;
			Extension.ajax({
				type :'GET',
				cache: false,
				url : gwdHttps+'api.html?path1=qihoo-mall-goodsinfo&path2=hpcv2&url='+encodeURIComponent(goodsUrl)+"&cv="+clientVersion+"&depot="+encodeURIComponent(depotCity==""?-1:depotCity)+"&price="+(price==null?-1:price)+"&gio="+(getInfoOnly?1:0),
				async: true,
				timeout : 3000,
				dataType : 'json'				
			},function(res){
				if(res){
					lock = false;
					callback && callback(res);
				}else{
					lock = false;
					callback && callback(null);
					log("浮动曲线获取失败");
				}
			});
		}
		
		$("a img").live("mouseenter",function(){
			if(!FloatCurve.isShow()){
				return;
			}
			if (!hasFloatCurveTrigger || !imgAllowFloatCurve(this)) {
				observeHrefChange($(this), link_change_ob);
				hoverHandler.apply(this, [300, 'floatcurve_img_hover']);
			}else {
				/*
				$trigger= $(this).siblings('.gwd_float_curve_trigger'),
				img = this;
				if($trigger.length>0){
					$newTrigger = $trigger.clone().addClass('gwd_float_curve_trigger_temp');
					clearTimeout(tempRemoveTimer);
					$('.gwd_float_curve_trigger_temp').remove();
					tempRemoveTimer = setTimeout(function(){
						setTriggerPos($newTrigger,img);
						$newTrigger.appendTo('body')._hoverImg = img;
						tempRemoveTimer = setTimeout(function(){
							$('.gwd_float_curve_trigger_temp').remove();
						},2500);
					},500);
					$newTrigger[0]._hoverImg = $trigger[0]._hoverImg; 
				}*/
				;
			}
		}).live("mouseleave", function(){
			if (!FloatCurve.isShow()) {
				return;
			}
			if (this['-gwd-fc-data']) {
				clearTimeout(hoverTimer);
				clearTimeout(imgMouseoutTimer);
				imgMouseoutTimer = setTimeout(function(){
					histPriceDrawer.remove($('.mmz_float_curve'));
				}, 300);
			}
		});
		
		$(".mmz_float_curve").live("mouseenter", function(){
			clearTimeout(imgMouseoutTimer);
			imgMouseoutTimer = null;
			return false;
		}).live("mouseleave", function(){
			clearTimeout(hoverTimer);
			clearTimeout(imgMouseoutTimer);
			imgMouseoutTimer = setTimeout(function(){
				histPriceDrawer.remove($('.mmz_float_curve'));
			},0);
			return false;
		});
		//一键关闭相关功能	
		$('.gwd_float_curve_option_panel > span').live('click',function(){
			var $this = $(this), 
				parent = $('.mmz_float_curve'),
				gwdOptions, gwdOptionsTmp, todayString;
			$this.parent().parent().removeClass('gwd_hide');
			$this.find('i').css('display','block');
			Extension.sendMessage({greeting: "GET_OPTIONS"},function (obj){
				if($this.hasClass('gwd_float_curve_option_close_forever')){
					gwdOptions = JSON.parse(obj.options);
					gwdOptions['float_pricetrend_opt'] = 'close';
					Extension.sendMessage({greeting: "SET_OPTIONS",data:{"options":JSON.stringify(gwdOptions)}},function (obj){});
				}else{
					todayString = MiTools.getDateStr();
					if(!obj['options_temp'] || obj['options_temp']==''){
						gwdOptionsTmp = JSON.parse(obj['options_temp']);
					}
					if(!gwdOptionsTmp || $.isArray(gwdOptionsTmp)){
						gwdOptionsTmp = {};
					}
					gwdOptionsTmp['float_pricetrend_opt'] = [todayString,'close'];
					Extension.sendMessage({greeting: "SET_OPTIONS",data:{"options_temp":JSON.stringify(gwdOptionsTmp)}},function (obj){});
				}
				$('.gwd_float_curve_trigger').remove();
				FloatCurve.is_show = false;
			});
			$('<div class="gwd_float_curve_mask">\
					<div class="gwd_float_curve_close_confirm_wrapper">\
						<div class="gwd_float_curve_close_confirm_exit" style="background-image:url('+backgroundImg+');"></div>\
						<div class="gwd_float_curve_close_confirm_word">已关闭价格曲线</div>\
						<div class="gwd_float_curve_close_confirm_guide">请在喵喵工具条[<a>设置</a>]中重新开启</div>\
					</div>\
				</div>').css({width:parent[0].offsetWidth,height:parent[0].offsetHeight}).appendTo(parent);
			return false;
		});
		$('.gwd_float_curve_close_confirm_exit').live('click',function(){
			histPriceDrawer.remove($('.mmz_float_curve'));
			return false;
		});
		$('.gwd_float_curve_close_confirm_guide a').live('click',function(){
			histPriceDrawer.remove($('.mmz_float_curve'));
			Extension.sendMessage({greeting: "GO_TO_OPTION"},function(){});
			return false;
		});
		$('.mmz_float_curve_compare_goods tr').live('click',function(e){
			this.getElementsByTagName('a')[0].click()
		});
		
		/**
		 * 生成浮动价格曲线。se版没有毛玻璃效果，chrome版有
		 * 
		 * 注意删除浮动价格曲线容器请用histPriceDrawer.remove 不要直接用jquery的remove，可以释放一部分缓存数据
		 * @author  Sam
		 * @param {Object} hoverImg
		 * @param {Object} info
		 */
		function makeFloatCurve(hoverImg,info){
			imgMouseoutTimer && clearTimeout(imgMouseoutTimer);	
			histPriceDrawer.remove($('.mmz_float_curve'));
			if(false && clientType != 'customization'){
				if(typeof _GUSS_IMG == 'undefined'){
					$(window).scroll(function(){
						_GUSS_INITED = false;
					}).resize(function(){
						_GUSS_INITED = false;
					});	
				}
				if(!_GUSS_IMG || !_GUSS_INITED){
					Extension.sendMessage({greeting: "CREATE_BASE64_URL"},function(obj){
						_GUSS_IMG = obj.imgSrc;
						_GUSS_INITED = true;
						makeFloatCurvePicture($(hoverImg),info,obj.imgSrc);
						initPriceNew(info.pcinfo,".mmz_float_curve",confObj);
					});
				}else{
					setTimeout(function(){
						makeFloatCurvePicture($(hoverImg),info,_GUSS_IMG);
						initPriceNew(info.pcinfo,".mmz_float_curve",confObj);
					},0)
				}
			}else{
				makeFloatCurvePicture($(hoverImg),info);
				initPriceNew(info.pcinfo,".mmz_float_curve",confObj);
			}
		}
		/**
		 * 生成浮动价格曲线的外围样式（除了canvas）
		 * 
		 * @author  Sam
		 * @param {Object} hoverItem 对应图片
		 * @param {Object} data 商品数据
		 * @param {Object} _guss_bg 背景图（毛玻璃效果），可为null则浮动价格曲线不透明
		 */
		function makeFloatCurvePicture(hoverItem,data,_guss_bg){
			var haveGoodsItems = true;
			if( !data.info || data.info.length<1 ){
				haveGoodsItems = false;
			}
			var pcinfo = data.pcinfo,
				cpr = MiTools.getPrFix(pcinfo.cpr || pcinfo.info[pcinfo.info.length-1]['pr']),
				hpr = Math.max.apply(Math,[pcinfo.hpr,cpr]),
				lpr = Math.min.apply(Math,[pcinfo.lpr,cpr]),
				hpr_class = lpr_class = cprHtml = "",
				showCpr = true,
				labels = pcinfo.labels;
			if(!labels){
				labels = ['1月前', '2月前'];
			}
			if(hpr == cpr){
				hpr_class = 'gwd_float_curve_hp';
				showCpr = false;
			}
			if(lpr == cpr){
				lpr_class = 'gwd_float_curve_hp';
				showCpr = false;
			}
			if(showCpr){
				cprHtml = '<span class="gwd_float_curve_cp gwd_float_curve_hp">¥ '+cpr+'</span>';
			}
			var hotword = '', collection = data.collection, view = data.view;
			if(collection >= 50){
				hotword = '<div class="gwd_float_curve_highlight">荐：收藏'+collection+'</div>';
			}else if(view >= 100){
				hotword = '<div class="gwd_float_curve_highlight">荐：昨日浏览'+view+'</div>';
			}
			var picOpacity = "";
			if(true || clientType=='customization'){
				picOpacity = "opacity:1;"
			}
			var insertHtml = '<div class="mmz_float_curve">\
								<div class="gwd_float_curve_option" style="background-image:url('+backgroundImg+')">\
									<div class="gwd_float_curve_option_panel_holder gwd_hide">\
										<div class="gwd_float_curve_option_panel" style="background-image:url('+backgroundImg+')">\
											<span class="gwd_float_curve_option_close_today" >今天不再显示<i class="gwd_float_curve_option_close_tick" style="background-image:url('+backgroundImg+');"></i></span>\
											<span class="gwd_float_curve_option_close_forever" >以后永远不显示<i class="gwd_float_curve_option_close_tick" style="background-image:url('+backgroundImg+');"></i></span>\
										</div>\
									</div>\
								</div>\
								<div class="gwd_float_curve_holder" style="'+picOpacity+'">\
									<div class="gwd_float_curve_wrapper_plot">\
										<div class="mmz_float_curve_head">\
											<span class="gwd_float_curve_logo" style="background-image:url('+backgroundImg+')"></span>\
											<span class="gwd_float_curve_word">\
												<a href="http://www.henzan.com?from=mmz_float_curve" target="_blank" class="gwd_float_curve_domain">喵喵折</a><i></i><em>历史价格</em>\
											</span>\
										</div>\
										<div class="mmz_float_curve_main">\
											<div class="gwd_float_curve_container mmz_placeholder"></div>\
											<div class="gwd_float_curve_pr">\
												<span class="gwd_float_curve_bp '+hpr_class+'">¥ '+hpr+'</span>\
												<span class="gwd_float_curve_sp '+lpr_class+'">¥ '+lpr+'</span>\
												'+cprHtml+'\
											</div>\
											<div class="gwd_float_curve_container_border"></div>\
											<div class="gwd_float_curve_mr">\
												<span class="gwd_float_curve_mr_two">'+labels[1]+'</span>\
												<span class="gwd_float_curve_mr_one">'+labels[0]+'</span>\
											</div>\
										</div>\
										'+hotword+'\
									</div>';
			if( haveGoodsItems ){
				insertHtml += '<table class="mmz_float_curve_compare_goods">\
								 <tr class="gwd_ns_th"><td colspan="3">其他商家报价<span class="gwd_ns_line"></span></td></tr>';
				var cmpPrices = [], cmpPrLowest;
				for(var i=0;i<data.info.length; ++i){
					cmpPrices[cmpPrices.length] = data.info[i].pr;
				}
				cmpPrLowest = Math.min.apply(Math,cmpPrices);
				for(i=0;i<data.info.length;i++){
					var cpsUrl = gwdUrlJump+encodeURIComponent(data.info[i].rf)+"&from"+encodeURIComponent(pageUrl)+"&cv="+clientVersion+"&pr="+data.info[i].pr+"&tp=plugin_floatcurve",
						cmpPr = MiTools.getPrFix(data.info[i].pr);
					insertHtml += '<tr>\
										<td class="gwd_float_curve_compare_goods_item">\
											<a href="'+cpsUrl+'" target="_blank" title="'+data.info[i].mc+'">\
												<span class="gwd_float_curve_compare_goods_logo" style="background-image:url('+(data.info[i]["icon"] ? data.info[i]["icon"].replace(/(\n)|(\r)/g,"") : "")+')"></span>\
												'+data.info[i].mc+'\
											</a>\
										</td>\
										<td class="gwd_float_curve_compare_goods_price'+(cmpPr == cmpPrLowest?' gwd_float_curve_compare_goods_price_lowest':'')+'">¥ '+MiTools.getPrFix(data.info[i].pr)+'</td>\
										'+(data.info[i].yhq?'<td class="gwd_float_curve_compare_goods_yhq"><a href="http://youhui.360.cn/quan?fname=quan_top&eee=quan_top" target="_blank">券（'+data.info[i].yhq.num+'）</a></td>':'')+'\
										<td class="gwd_float_curve_compare_goods_tip">'+(cmpPr >= MiTools.getPrFix(cpr)?'<span class="gwd_notip">—</span>':'<div class="gwd_tip">更低价</div>')+'</td>\
									</tr>';
				}
				insertHtml += '</table>';
			}
				insertHtml += '</div>\
								<span class="gwd_float_curve_triangle"></span>';
			if(_guss_bg){
				insertHtml+='<div class="gwd_float_curve_guss_overlay"><img class="gwd_float_curve_guss_pic" src="'+_guss_bg+'"/></div>';
			}
			insertHtml+=  '</div>';
			var float_curve_node = $(insertHtml).appendTo('body');
//			$("body").append(insertHtml);
			float_curve_node.find(".gwd_float_curve_compare_goods_item a").click(function(e){
				e.stopPropagation();
			});
			var hoverItemWidth = hoverItem[0].offsetWidth;
			var hoverItemHeight = hoverItem[0].offsetHeight;
			var hoverItemLeft = hoverItem.offset().left;
			var hoverItemTop = hoverItem.offset().top;
			var distanceRight = window.innerWidth-MiTools.getScrollWidth()-hoverItemLeft-hoverItemWidth;
			//var distanceLeft = pageX(hoverItem[0]);
			var gwdFloatCurveHeight = float_curve_node[0].offsetHeight;
			var gwdFloatCurveWidth = float_curve_node[0].offsetWidth;
			var gwdFloatCurveTop = hoverItemTop+((hoverItemHeight-gwdFloatCurveHeight)/2);
			var gwdFloatCurveLeft = 0;
			$('.gwd_float_curve_triangle').css('top',float_curve_node.height()/2-8);
			if( distanceRight > 310 ){
//				$(".gwd_float_curve_triangle_right").hide();
				float_curve_node.addClass('gwd_ns_right');
				gwdFloatCurveLeft = hoverItemLeft+hoverItemWidth+10;
			}else if(hoverItemLeft > 310){
				float_curve_node.addClass('gwd_ns_left');
//				$(".gwd_float_curve_triangle_left").hide();
				gwdFloatCurveLeft = hoverItemLeft-gwdFloatCurveWidth-10;
			}else{
//				$(".gwd_float_curve_triangle_right").hide();
//				float_curve_node.addClass('gwd_ns_right');
				gwdFloatCurveLeft = window.innerWidth-MiTools.getScrollWidth()-310;
			}
			float_curve_node.find(".gwd_float_curve_guss_pic").css({"left":-(gwdFloatCurveLeft-document.body.scrollLeft),'top':-(gwdFloatCurveTop-document.body.scrollTop)});
			float_curve_node.css({'left':gwdFloatCurveLeft,'top':gwdFloatCurveTop});
		}

		/**
		 * @author  Sam
		 * 加载新浮动价格曲线功能模块(小标签触发)
		 * 
		 */
		function loadFloatCurveTriggerFunc(){
			//可能出小图标的图片队列
			var imgQueue = [];
			//监测超链接地址变动
			var link_change_ob = MiTools.MutationObserver 
								&& (new MiTools.MutationObserver(function(mutations){
									$.each(mutations,function(i, mutation){
										var a = mutation['target'];
										if(a && FloatCurve.isShow()){
//											console.log($img.attr('href'), mutation['oldValue'])
											var $a = $(a);
											if($a.attr('href') != mutation['oldValue']){
												setTimeout(function(){
													$a.find('img').each(function(i, img){
														var $img = $(img);
														delete img['-gwd-fc-data'];
														$img.parent().find('.gwd_float_curve_trigger').remove();
														histPriceDrawer.remove('.mmz_float_curve')
														checkImgAndEnqueue(img);
													});
												},100);
											}
										}
									});
								}));
			var startPolling = (function(){
				var	_pollHandler = null;
				var cnt = 0;
				return function (_interval,_start){
					_pollHandler && clearTimeout(_pollHandler);

					if(_start != null){
						cnt = 0;
					}

					_interval = (_interval||0) * (cnt||1);
					var _timeout = _start != null ? _start : _interval;
					var self = arguments.callee;
					_pollHandler = setTimeout(function(){
						if(imgQueue.length > 0) {
							checkFloatCurveHistory(imgQueue,
								function(imgArray, infos){
									initFloatCurveTrigger(imgArray,infos);
								},
								function(imgQueue){
									var q = imgQueue.splice(0, 50);
									getOnlineFloatCurveDataArray(q, function(infos, $imgArray, prices){
										initFloatCurveTrigger($imgArray, infos, prices);
									});
								}
							);
						}else{
							if(cnt < 2){
								cnt++;
							}else{
								cnt = cnt * 2;
							}		
						}
//						console.log(_interval);
						self(_interval);
					},_timeout);
				}
			})();
			checkImgAndEnqueue();
			;(function(){
				var _enqueueHandlerScroll = null;
				$(window).on('scroll resize',function(){
					if(FloatCurve.isShow()){
						_enqueueHandlerScroll && clearTimeout(_enqueueHandlerScroll);
						_enqueueHandlerScroll = setTimeout(function(){
							checkImgAndEnqueue();
						},300);	
					}
				});
			})();

			$(".gwd_float_curve_trigger").live("mouseenter",function (){
				var img = this._hoverImg;
				if(img){
//					var $img = $(img);
//					if(img['-gwd-fc-href'] != getImageReferUrl($img, checkGoodsUrl)){
//						clearDataOnImage($img);
//						delete img['-gwd-fc-href'];
//						checkImgAndEnqueue(img);
//					}else{
						hoverHandler.apply(img,[0,'floatcurve_icon_hover']);
//					}
				}
				return false;
			}).live("mouseleave",function(e){
				var img = this._hoverImg;
				if(img){
					var x = e.pageX;
					var y = e.pageY;
					var $img = $(img);
					var start = $img.offset();
					if(x<=start.left || x>=start.left+img.offsetWidth || y<=start.top || y>=start.top+img.offsetHeight){
						$img.trigger('mouseleave');
					}
				}
				return false;
			});
			
			//检查图片是否需要出小图标并入队
			function checkImgAndEnqueue(img){
				//_pollHandler && clearTimeout(_pollHandler);
				if(img){
					MiTools.runAfterImgLoad(img,enqueueVisibleImgBySize);
				}else{
					$('a img').each(function(i,img){
						MiTools.runAfterImgLoad(img,enqueueVisibleImgBySize);
					});
				}
				startPolling(1000,0);
			}
			
			//符合要求的图片入队
			function enqueueVisibleImgBySize(img){			
				if(img){
					if(!imgAllowFloatCurve(img)){
						return false;
					}
					var $img = $(img);
					var href = getImageReferUrl($img, checkGoodsUrl);
					if(!href){
						//todo:clear
//						clearDataOnImage($img);
						return false;
					}
					observeHrefChange($img, link_change_ob);
					if(typeof img['-gwd-fc-data'] == 'undefined'){
						//没有加载过数据(或者url变更),需要重新请求
						if($.inArray(img,imgQueue)<0 && elementIsInVisibleArea(img) ){
							imgQueue[imgQueue.length] = img;
						}
					}else{
						//已经加载过数据，调整位置
//						var $parent = getParentNode($img, function($parent){
//							return true;
//						});
						$parent = $img.parent();
						if($parent && $parent.length > 0){
							var trigger = $parent.find('.gwd_float_curve_trigger');
							if(trigger.length > 0 && elementIsInVisibleArea(img)){
								setTriggerPos(trigger,img, $parent);
							}
						}
					}
				}
				return false;
			}
			
			/**
			 * 产生浮动价格曲线小标签
			 * 
			 * 这里用works来收集小标签在更新缓存后一起添加，是因为之前的缓存设计模式下，
			 * 如果实时append标签，会有多次异步调用间相互覆盖缓存的问题。
			 * 现在把缓存放后台了，可能没这个问题了但不是很确定。
			 * 
			 * @param {Object} $imgArray
			 * @param {Object} infos
			 * @param {Object} prices  有prices字段表示刚提取过页面上的价格数据，需要做整合和计算数据的处理。否则为历史数据，直接使用
			 */
			function initFloatCurveTrigger($imgArray,infos,prices){
				var buffer = [],works = [];
				infos.map(function(data, i){
					var $img = $($imgArray[i]),
						img = $img[0];
					if(!data.value){
						img['-gwd-fc-data'] = null;
						if(prices){
							buffer[buffer.length] = data;
						}
//						return false;
					}else{
						if(prices){
							var price = prices[i];
							if(price>=0){
								data.price = price;
							}
							data = calcOnlineData(data);
							buffer[buffer.length] = data;
						}
						img['-gwd-fc-data'] = data;	
					}
					var	info = data.pcinfo,
						trend = info && info.trend,
						$p,trigger,rType,rHint;
					switch(trend){
						case 4:
							rType = 'normal';
							rHint = '平稳';
							break;
						case 2:
							rType = 'down';
							rHint = info.discount ? info.discount+'折' : "打折";
							break;
						case 1:
							rType = 'lowest';
							rHint = info.discount ? info.discount+'折' : "低价";
							break;
						case 3:
							rType = 'up';
							rHint = '上涨';
							break;	
						/*
						default:
							rType = 'noinfo';
							rHint = '暂无';
							break;
							*/
					}
					if(rType){
						var trigger = $('<div id="gwd_float_curve_trigger" class="gwd_float_curve_trigger gwd_float_curve_'+rType+'"><div class="gwd_float_curve_wrapper">'+(rType=='noinfo'?'':'<span class="gwd_float_curve_trigger_icon" style="background-image:url('+backgroundImg+')">')+'</span><span class="gwd_float_curve_trigger_hint">'+rHint+'</span><div class="gwd_float_curve_overlay"></div></div></div>');
						trigger[0]._hoverImg = img;
//						img._gwd_trigger = trigger[0];
//						var $p = getParentNode($img, function($parent){
//							return true;
//						});
						$p = $img.parent();
						if($p && $p.length > 0){
							var position = $p.css('position');
							if(position != 'absolute' && position != 'fixed'){
								$p.css('position','relative');
							}
							if($p.css('z-index') == 'auto' && $p.css('transform') == 'none' && $p.css('-webkit-transform') == 'none'){
								$p.css('transform', 'scale(1)');
								$p.css('-webkit-transform', 'scale(1)');
							}
							$p.find('#gwd_float_curve_trigger').remove();
							works[works.length] = {p:$p,t:trigger, img: img};
						}
					}
				});
				if(buffer.length>0){
					updateFloatCurveHistory(buffer,function(){
						works.map(function(work){
							work.p.append(work.t);
							setTriggerPos(work.t, work.img, work.p);
						});

					});
				}else{
					works.map(function(work){
						work.p.append(work.t);
						setTriggerPos(work.t, work.img, work.p);
					})
				}
			}
		}
		/**
		 * 计算触发小图片的定位
		 * 
		 * @author  Sam
		 * @param {Object} trigger 浮动价格曲线触发小图标
		 * @param {Object} img  对应的图片
		 * @param {Object} isOuterTrigger 为true则计算图标相对于body的定位，否则计算图片相对于img父元素的定位
		 */
		function setTriggerPos(trigger,img, $parent){
			if(!img){
				return false;
			}
			var $img = $(img),
				imgW = img.offsetWidth,
				imgH = img.offsetHeight,
				imgTop = $img.offset().top,
				imgLeft = $img.offset().left,
				triggerWidthHalf = trigger[0].offsetWidth /2,
				triggerHeight = trigger[0].offsetHeight,
				triggerLeft,triggerTop;
			if($parent != null && $parent.length > 0){
				var	pTop = $parent.offset().top,
					pLeft = $parent.offset().left;
				var imgFloat = $img.css('float'),imgDisplay = $img.css('display');
				triggerTop = imgTop - pTop + imgH - triggerHeight;
				if($parent.css('display')=='inline' && (imgFloat=='left'||imgFloat=='right' || imgDisplay=='block')){
					if($img.siblings(':not(.gwd_float_curve_trigger)').length>0){
						triggerLeft = -imgW/2-triggerWidthHalf;
					}else{
						triggerLeft = imgLeft - pLeft + imgW/2 - triggerWidthHalf;
						triggerTop = - triggerHeight;
					}
				}else{
					triggerLeft = imgLeft - pLeft + imgW/2 - triggerWidthHalf;
				}
				trigger.css({left:triggerLeft,top:triggerTop});	
			}else{
				triggerTop = imgTop + imgH - triggerHeight;
				triggerLeft = imgLeft + imgW/2 - triggerWidthHalf;
				trigger.css({left:triggerLeft,top:triggerTop});	
			}
		}
		/**
		 * 从mhpc接口批量拉数据
		 * 此接口中附带有控制浮动价格曲线开启的开关
		 * 
		 * @author  Sam
		 * @param {Object} imgArray
		 * @param {Object} callback
		 */
		function getOnlineFloatCurveDataArray(imgArray,callback){
			var urls = [], prices = [], $imgMap = [], ids = [], self = arguments.callee, forIcon = true;
			if(Object.prototype.toString.apply(imgArray).toLowerCase() != '[object array]'){
				imgArray = [imgArray];
				forIcon = false;
			}
			imgArray.map(function(img){
				var $img = $(img);
				var url = getImageReferUrl($img,checkGoodsUrl);
				var tmp;
				if(url){
					if(isTB){
						$img.parents('.pic-box:eq(0)').siblings('.similar-btns').find('a').each(function(i,elem){
							tmp = $(elem).attr('href');
							if(!tmp){
								return true;
							}
							tmp = MiTools.parseUrl(tmp).query.uniqpid;
							if(tmp){
								return false;
							}else{
								return true;
							}
						})
						ids[ids.length] = tmp || 0;
					}
					//拿页面详情价格
					var price = priceSniffer.sniff($img);
					prices.push(price);
					urls.push(url);
					$imgMap.push($img);
				}
			});
			if(urls.length == 0){
				return false;
			}
			Extension.ajax({
				type : 'POST',
				url : gwdHttps + 'api.html?path1=qihoo-mall-goodsinfo&path2=mhpc',
				data : 'urls='+encodeURIComponent(urls.join(';'))+'&depot='+encodeURIComponent(depotCity==""?-1:depotCity)+'&prices='+encodeURIComponent(prices.join(';'))+'&foricon='+Number(forIcon)+"&cv="+clientVersion+'&pinfo='+encodeURIComponent(ids.join(';')),
				async : true,
				dataType : 'json',
				cache : false,
				timeout : 3000		
			},function(res){
				//sam debug
				var fake = [];
				for(var i = 0; i<urls.length;++i){
					fake.push({});
				}
				
				if(res && res.RC == 1){
					var ts = (new Date().getTime()/1000) ^ 0;
					if(res.show_float_pc == 2 && !FloatCurve.is_enhance_mode){
						$('.gwd_float_curve_trigger').remove();
						histPriceDrawer.remove('.mmz_float_curve');
						FloatCurve.server_banned = true;
					}else if(res.data && res.data.length == urls.length){
						for(var i in urls){
							if(!res['data'][i]['url']){
								res['data'][i]['url'] = urls[i];
							}
						}
						callback && callback(res.data,$imgMap,prices);
					}else{
						callback && callback(fake,$imgMap,prices);
					}
				}else{
					callback && callback(fake,$imgMap,prices);
				}
				$imgMap = null;
				urls = null;
				prices = null;
			});
		}
		/**
		 * 判断商品是否有历史数据，并过滤成两组（会改变输入数组）
		 * @author  Sam
		 * @param {Object} 待处理图片数组
		 * @param {Object} handleHistoryGoods 接收 有历史记录的商品和相应的记录 为参数
		 * @param {Object} handleNoHistoryGoods 接收 删除有历史记录的图片后的原输入数组为参数
		 */
		function checkFloatCurveHistory(imgQueue,handleHistoryGoods,handleNoHistoryGoods){
			Extension.sendMessage({greeting:'GET_FLOAT_CURVE_HISTORY'},function(obj){
				var buffer = [],infos=[], history = obj.data;
				for(var i=imgQueue.length-1;i>=0;--i){
					var img = imgQueue[i];
					//infoArray是image的情况
					var href = getImageReferUrl($(img),checkGoodsUrl);
					if(!href){
						imgQueue.splice(i,1);
					}else if(history[href]){
						buffer[buffer.length] = imgQueue.splice(i,1)[0];
						infos[infos.length] = history[href];
					}
				}
				buffer.length>0 && handleHistoryGoods && handleHistoryGoods(buffer,infos);
				handleNoHistoryGoods && handleNoHistoryGoods(imgQueue);
			});
		}
		/**
		 * 记录历史数据（相关的逻辑在background里）
		 * @author  Sam
		 * @param {Object} infoArray
		 * @param {Object} callback
		 */
		function updateFloatCurveHistory(infoArray,callback){
			if(!$.isArray(infoArray)){
				infoArray = [infoArray];
			}
			Extension.sendMessage({greeting:'SAVE_FLOAT_CURVE_HISTORY',infos:infoArray},function(){
				callback && callback();
			});
		}
		
		/**
		 * 将 mhpc接口返回的历史价格数据按天数填充完整，并计算趋势、最高价、最低价等
		 * @author  Sam
		 * @param {Object} data
		 */
		function calcOnlineData(data){
			if(false && Extension.debug){
				if(data.value){
					data.value = '20150207|1_'+data.value;
				}
			}
			var values = (data.value && data.value.split('_')) || [],
				d = new Date;
			var MILLISECONDS_MONTHLY = 30 * 86400*1000;
		
			var pcinfo_info = [],
				pcinfo_ed = MiTools.getDayTime(d),
//				pcinfo_bd,
				pcinfo_label = null,
				pcinfo_bd = pcinfo_ed - 6*MILLISECONDS_MONTHLY,
				prices = [],
				sArray = [],
				findIndex = 1;
			var tickWeight = 2;
			
			var lastDayObj = values.reduce(function(prevObj,cur,index,values){
				var data = cur.split('|');
				var dt = MiTools.getDayTime(new Date(getDataTime(data[0]))),
					pr = MiTools.getPrFix(parseFloat(data[1]));
				var infoObj = {dt:dt,pr: pr,recorded:false};
				if(dt<pcinfo_bd){
					return null;
				}else{
					if(prevObj){
						var _pdt = prevObj.dt + 86400000;
						while(_pdt < dt){
							if(_pdt>=pcinfo_bd){
								if(!prevObj.recorded){
									prices.push(prevObj.pr);
									prevObj.recorded = true;
								}
								pcinfo_info.push({dt:_pdt,pr:prevObj.pr});
							}
							_pdt += 86400000;
						}
						sArray.push([dt,prevObj.pr,dt,findIndex]);				
						sArray.push([dt,pr,++findIndex]);
					}else{
						//第一个有效日期
						var duration = pcinfo_ed - dt;
						if(duration <= MILLISECONDS_MONTHLY){
							pcinfo_label = ['2周前','4周前'];
							
							tickWeight = 1;
						}else if(duration <= 2*MILLISECONDS_MONTHLY){
							pcinfo_label = ['1月前','2月前'];
							tickWeight = 2;
						}else if(duration <= 4*MILLISECONDS_MONTHLY){
							pcinfo_label = ['2月前','4月前'];
							tickWeight = 4;
						}else{
							pcinfo_label = ['3月前','6月前'];
							tickWeight = 6;
						}
						pcinfo_bd = pcinfo_ed - tickWeight * MILLISECONDS_MONTHLY;
						sArray.push([dt,pr,dt,findIndex]);
					}
					prices.push(pr);
					infoObj.recorded = true;
					pcinfo_info.push(infoObj);
				}
				return infoObj;
			},null);
			if(lastDayObj != null){
				var _pdt = lastDayObj.dt + 86400000;
				while(_pdt < pcinfo_ed){
					if(_pdt>=pcinfo_bd){
						if(!lastDayObj.recorded){
							prices.push(lastDayObj.pr);
							lastDayObj.recorded = true;
						}
						pcinfo_info.push({dt:_pdt,pr:lastDayObj.pr});
					}
					_pdt += 86400000;
				}
			}	
			//插入最后一天价格
			data.price = MiTools.getPrFix(parseFloat(data.price));
			sArray.push([pcinfo_ed+86400000,data.price,findIndex]);
			if(data.price >= 0){
				prices.push(data.price);
				pcinfo_info.push({dt:pcinfo_ed,pr:data.price});
			}else if(lastDayObj != null){
				data.price = lastDayObj.pr;
				prices.push(data.price);
				pcinfo_info.push({dt:pcinfo_ed,pr:lastDayObj.pr});
			}
			var diffPrices = prices.reduceRight(function(arr,price){
				if($.inArray(price,arr)<0){
					arr.push(price);
				}
				return arr;
			},[]);
			var pcinfo = {
					id : data.id,
					shop : domain,
					bd : pcinfo_bd,
					ed : pcinfo_ed,
					info : pcinfo_info,
					diffpr : diffPrices,
					searchArr : sArray,
					labels : pcinfo_label,
					tickWeight : tickWeight
			}
			if(diffPrices.length>0 && prices.length>1){
				var pcinfo_hpr = Math.max.apply(Math,diffPrices),
					pcinfo_lpr = Math.min.apply(Math,diffPrices);
				var pcinfo_trend = 0,
					pcinfo_discount = null;
				if(diffPrices.length < 2){
					pcinfo_trend = 4;
				}else{
					pcinfo_discount = parseInt(100*diffPrices[0]/diffPrices[1])/10;
					if(pcinfo_discount < 10){
						if(data.price == pcinfo_lpr){
							pcinfo_trend = 1;
						}else{
							pcinfo_trend = 2;
						}
					}else{
							pcinfo_trend = 3;
					}
				}
				pcinfo.hpr = pcinfo_hpr;
				pcinfo.lpr = pcinfo_lpr;
				pcinfo.discount = pcinfo_discount;
				pcinfo.trend = pcinfo_trend;
			}
			data.pcinfo = pcinfo;
			return data;
		}
		
		function initPriceNew(qDate,container,exConfObj){
			var placeholder = $(container+" .mmz_placeholder");
			histPriceDrawer.addLocalCalculatedData(qDate,placeholder);
			histPriceDrawer.draw(placeholder,exConfObj);
		}
	}
	
	/**
	 * 设置浮动价格曲线整体触发和小标签触发的开关
	 * @author : Sam
	 * @param {Object} json 两个字段 icon_list控制小标签，hover_pc控制整体触发。1为开启，2为关闭。
	 */
	function updateFloatCurveDisplayOption(json){
		if(json){
			if(json['icon_list'] == 1){
				Extension.sendMessage({greeting:'SET_FLOAT_CURVE_DISPLAY',show:true,forIcon:true},function(obj){});
			}else if (json['icon_list'] == 2){
				Extension.sendMessage({greeting:'SET_FLOAT_CURVE_DISPLAY',show:false,forIcon:true},function(obj){});
			}
			if(json['hover_pc'] == 1){
				Extension.sendMessage({greeting:'SET_FLOAT_CURVE_DISPLAY',show:true,forIcon:false},function(obj){});
			}else if(json['hover_pc'] == 2){
				Extension.sendMessage({greeting:'SET_FLOAT_CURVE_DISPLAY',show:false,forIcon:false},function(obj){});
			}
		}
	}
	/**
	 * 判断图片是否在屏幕可视范围内
	 * @author : Sam
	 * @param {Object} 原生image对象
	 */
	function elementIsInVisibleArea(elem){
		var isVisible = true;
		if(elem){
			var	win = $(window),
				winTop = win.scrollTop(),
				winBottom = winTop + win.height(),
				winLeft = win.scrollLeft(),
				winRight = winLeft + win.width(),
				$elem = $(elem),
				elemTop = $elem.offset().top,
				elemLeft = $elem.offset().left,
				elemBottom = elemTop + elem.offsetHeight,
				elemRight = elemLeft + elem.offsetWidth;
			if(elemTop>=winBottom || elemBottom<=winTop || elemRight<=winLeft || elemLeft>=winRight){
				isVisible = false;
			}
		}else{
			isVisible = false;
		}
		return isVisible;
	}
	
	//判断图片是否符合出小标签的尺寸
	function imgAllowFloatCurve(img){
		return img.offsetWidth>=160 && img.offsetHeight>=160;
	}
	
	/**
	 * 寻找img对应的商品url并返回
	 * 这里碰到带分号的url就截断分号以后的部分。因为目前服务器端是以split(";")来截断url数组的
	 * 
	 * @author  Sam
	 * 依赖checkGoodsUrl()
	 * @param {Object} $img
	 */
	function getImageReferUrl($img, checkGoodsUrl){
		var ret = null;
		$a = $img.parents('a').eq(0);
		if ($a.length > 0) {
			var url = MiTools.formalizeUrl($a.attr('href'));
			var checkedURL = url && checkGoodsUrl(url);
			if (checkedURL && checkedURL.isTrue) {
				ret = checkedURL.targetUrl.split(';')[0];
			}
		}
		return ret;
	}
	
	/**
	 * 寻找符合条件的父节点
	 * @author  Sam
	 * @param {Object} $node
	 * @param {Object} fn fun接受一个jQuery对象（输入节点的父辈->爷辈递归）为参数，整个函数返回第一个使fn返回true的节点
	 */
	function getParentNode($node,fn){
		var $p = $node.parent();
		if($p.length>0){
			if(!fn || fn($p)){
				return $p;
			}else{
				return arguments.callee($p,fn);
			}
		}else{
			return null;
		}
	}
	
	/**
	 * 判断商家是否开启小标签
	 *  @author Sam
	 */
	function domainHasFloatCurveTrigger(){
		var	BLACK_LIST = ['paipai.com','wanggou.com','s.cn'],
			WHITE_LIST = ['taobao.com','jd.com','yhd.com','dangdang.com'];
		return $.inArray(domain,WHITE_LIST)>=0;
	}
	
	/**
	 * 快速打开小标签
	 */
	function loadFloatCurveQuickOpenFunc(regArray){
		if(!loadFloatCurveQuickOpenFunc._initialized){
			loadFloatCurveQuickOpenFunc._initialized = true;
		}else{
			return false;
		}
		if( !regArray || regArray.length<1 ){
			return false;
		}
		
		var MAX_SHOW_DAILY = 5,
			SHOW_LAG = 300,
			checkGoodsUrl = MiTools.getCheckUrlFn(regArray),
			today = MiTools.getDateStr(),
			hoverTimer = null,
			hideTimer = null;
		var showQuickOpen = function(hoverItem,time){
			var holder = $('body').find('.gwd_float_curve_quick_open'),
				top, left;
			if (holder.length > 0) {
				holder.remove();
			}
				holder = $('<div class="gwd_float_curve_quick_open">\
								<div class="gwd_float_curve_quick_open_holder">\
									<div class="gwd_mi_icon" style="background-image:url('+backgroundImg+');"></div>\
									<div class="gwd_content_wrapper">\
										<div class="gwd_content_icon"  style="background-image:url('+backgroundImg+');"></div>\
										<div class="gwd_content_words">开启价格曲线</div>\
									</div>\
									<div class="gwd_close_wrapper">\
										<div class="gwd_close_icon" style="background-image:url('+backgroundImg+');"></div>\
									</div>\
								</div>\
							</div>').appendTo('body');
			
			holder.css('top','-9999px');
			top = hoverItem.offset().top + hoverItem[0].offsetHeight;
			left = hoverItem.offset().left +(hoverItem[0].offsetWidth - holder[0].offsetWidth)/2;
			holder.css({top:top,left:left});
			Extension.sendMessage({greeting: "GET_OPTIONS"},function (obj){
				var tmpOptions;
				if(obj['options_temp'] && obj['options_temp']!=''){
					tmpOptions = JSON.parse(obj['options_temp']);
					if(!$.isArray(tmpOptions)){
						tmpOptions['fc_quick_open_show'] = [today,time+1];	
					}else{
						tmpOptions = {'fc_quick_open_show':[today,time+1]};
					}
				}else{
					tmpOptions = {'fc_quick_open_show':[today,time+1]};
				}
				Extension.sendMessage({greeting: "SET_OPTIONS",data:{'options_temp':JSON.stringify(tmpOptions)}},function(){});
			});
		};
		$('a img').live('mouseenter',function(){
			if(FloatCurve.is_show){
				return true;
			}
			var $this = $(this);
			if (imgAllowFloatCurve(this) && getImageReferUrl($this, checkGoodsUrl)) {
				hoverTimer = setTimeout(function(){
					Extension.sendMessage({greeting: "GET_OPTIONS"},function (obj){
						var tmpOptions, p, holder, time;
						try{
							tmpOptions = JSON.parse(obj['options_temp']);
							time = tmpOptions['fc_quick_open_show'][0]!= today ? 0 : tmpOptions['fc_quick_open_show'][1];
							if(time < MAX_SHOW_DAILY){
								showQuickOpen($this,  time);
							}
						}catch(e){
							showQuickOpen($this,0);
						}
					});
				},SHOW_LAG);
			}
		//	return false;
		});
		
		$('a img').live('mouseleave',function(){
			if(FloatCurve.is_show){
				return true;
			}
			if (imgAllowFloatCurve(this)){
				clearTimeout(hoverTimer);
				clearTimeout(hideTimer);
				hideTimer = setTimeout(function(){
					$('.gwd_float_curve_quick_open').css('top','-9999px');
				},200)
			}
		//	return false;
		});
		$('.gwd_float_curve_quick_open .gwd_close_icon').live('click',function(){
			$('.gwd_float_curve_quick_open').css('top','-9999px');
			return false;
		});
		$('.gwd_float_curve_quick_open').live('mouseenter',function(){
			clearTimeout(hideTimer);
			return false;
		}).live('mouseleave',function(){
			clearTimeout(hideTimer);
			hideTimer = setTimeout(function(){
				$('.gwd_float_curve_quick_open').css('top','-9999px');
			},200);
		});
		
		$('.gwd_float_curve_quick_open_holder .gwd_content_wrapper').live('click',function(){
			var $this = $(this),
				wordDiv = $this.find('.gwd_content_words'),
				openSuccessHtml = '已成功开启';
			if(wordDiv.text() != openSuccessHtml){
				openFloatCurveOption(null, function(){
					wordDiv.text(openSuccessHtml);
					FloatCurve.is_show = true;
					loadFloatCurveFunc(regArray, domainHasFloatCurveTrigger());
					//loadFloatCurveIfServerAllowed(regArray);
				});
			}
			return false;
		});
	}
	/**
	 * 开启价格曲线设置
	 */
	function openFloatCurveOption (nextServerOptTime, callback){
		Extension.sendMessage({greeting: "GET_OPTIONS"},function (obj){
			var options = JSON.parse(obj['options']), 
				tmpOptions;
			options['float_pricetrend_opt'] = 'open';
			if(obj['options_temp'] && obj['options_temp']!=''){
				tmpOptions = JSON.parse(obj['options_temp']);
				delete tmpOptions['float_pricetrend_opt'];
				delete tmpOptions['fc_quick_open_show'];
			}
			if(nextServerOptTime){
				tmpOptions['fc_next_open'] = nextServerOptTime;
			}
			Extension.sendMessage({greeting: "SET_OPTIONS",data:{'options':JSON.stringify(options),'options_temp':JSON.stringify(tmpOptions)}},function(){
				callback && callback();
			});
		});
	}
	
	/**
	 * 初始化入口
	 */
	function loadFloatCurveIfServerAllowed(regArray){
		Extension.sendMessage({greeting:'GET_FLOAT_CURVE_DISPLAY', showAll: true},function(res){
			var _t = new Date().getTime();
			var opt = res.opt, icon_opt = res.icon_opt;
			if(opt.show != false || _t - opt.t > 21600000){
				var hasFloatCurveTrigger = domainHasFloatCurveTrigger() && (icon_opt.show != false || _t - icon_opt.t > 21600000);
				loadFloatCurveFunc(regArray, hasFloatCurveTrigger);
			}
		});
	}
	
	var FloatCurve = {};
	FloatCurve.init = function(regArray){
		Extension.getGwdOptions(function(options, optionsTemp){
			FloatCurve.is_show = (!optionsTemp['float_pricetrend_opt'] 
									|| optionsTemp['float_pricetrend_opt'][0]!= MiTools.getDateStr() 
									|| optionsTemp['float_pricetrend_opt'][1]!='close'
		   						)&& options.float_pricetrend_opt == "open";
			FloatCurve.is_enhance_mode = options.enhance_mode_opt == 'open';
//			FloatCurve.next_open_time = optionsTemp['fc_next_open']||0;
			if(FloatCurve.is_show){
				//loadFloatCurveIfServerAllowed(regArray);
				loadFloatCurveFunc(regArray, domainHasFloatCurveTrigger());
			}
			FloatCurve.initQuickOpen(regArray);
		});
	};
	FloatCurve.updateDisplayOption = updateFloatCurveDisplayOption;
	FloatCurve.initQuickOpen = loadFloatCurveQuickOpenFunc;
	FloatCurve.is_show = true;
	FloatCurve.server_banned = false;
//	FloatCurve.next_open_time = 0; //下次打开
	FloatCurve.isShow = function(){
		return FloatCurve.is_show && !FloatCurve.server_banned;
	};
	FloatCurve.is_enhance_mode = false;
	
	window.FloatCurve = FloatCurve;
})($);;
var clientVersion,gwdHttps,gwdUrlJump,clientType,isShowFlag;
var Mid = '';
var configInfo = {};
var pageUrl = window.location.href;
var domain = extractUrlDomain(pageUrl);
var pageTitle = document.title;
var isGulike = false;
var backgroundImg = chrome.extension.getURL("images/background_new.png");
var qrImg = chrome.extension.getURL("images/qrcode.png");
var scanImg = chrome.extension.getURL("images/scan.png");
var pageHtml = "";
var histPriceDrawer = MiTools.getHistPriceDrawer();
var depotCity = "";
var haveDianShang = false;
var temptype = 0;
var isGWZS, backgroundImg_gwzs;
var is360Browser = function(){
    return clientType === 'customization' ? true : false;
};
setTimeout(function(){
	chrome.storage.local.get('storageCheckTime',function(result){
		stat.getInfo(4).step = 'debug';
		if(!result){
			stat.getInfo(4).debug = 'fail';
			stat.run(4);
		}else{
			var today = MiTools.getDateStr();
			if(!result.storageCheckTime || result.storageCheckTime != today){
				result.storageCheckTime = today;
				stat.getInfo(4).debug = 'succ';
				stat.run(4);
			}
			chrome.storage.local.set({storageCheckTime:result.storageCheckTime});
		}
	});
},3000);
//Sam 商业化统计信息
var gl_commercialStat = {
	clink : pageUrl,
	MVsend:0,	//MV请求数
	MVback:0,	//MV返回数
	hisprice:0, //历史价格
	coupon:0,	//优惠
	eva:0,		//综合评价
	cid:'',
	kwd:''
};

var isTaobao = (function(){
	var isTaobao = null;
	return function(){
		if(isTaobao == null){
			if(domain == 'taobao.com' || domain == 'tmall.com' || domain=='alitrip.com'){
				isTaobao = true;
			}else{
				isTaobao = false;
			}
		}
		return isTaobao;
	}
})();

//收藏按钮是否固定
var gl_allowModifyCollectBtnPosition = false;
var gwd_toolbar_container_state = "open";
if( domain.indexOf("tmall.hk") > -1 ){
	domain = "tmall.com";
}

//获得版本号
Extension.sendMessage({greeting: "GET_CLIENT_CONFIG"},function(obj){
	isGulike = obj.isGulk;
	clientVersion = obj.clientVersion;
	gwdHttps = obj.gwdHttps;
	gwdUrlJump = obj.gwdUrlJump;
	clientType = obj.clientType;
	configInfo = obj;
	Mid = obj.Mid;
	if(!obj.verConflict || obj.clientType == 'general'){
		resetGulike();
	}
});
//重置猜你喜欢的值
function resetGulike(){
	Extension.sendMessage({greeting: "MANAGE_GULIKE"},function (obj){
		if(obj){
			if(obj == "yes"){
				isGulike = isGulike;
			}else{
				isGulike = false;
			}
		}
		initPlueChrome();
	});
}
function initPlueChrome() {
	if(pageUrl.indexOf('http://www.henzan.com/my?act=mmz') == 0 ){
		gouwudaiHomePage();
	}else if(pageUrl.indexOf('http://www.henzan.com/haitao/cart') == 0 ){
		loadHzHaitaoCart();
	}else{
		chrome.storage.local.get("shoptemplate",function(items){
			try{
				if(items["shoptemplate"][domain]){
					loadByTemplate(domain,items["shoptemplate"][domain].regarray);
				}else{
					loadNotpl();
				}
			}catch(error){
				log(error);
				ErrorLoad();
			}
		});
	}
}
//当模板缓存异常时进行内置模板的加载
function ErrorLoad(){
	Extension.sendMessage({greeting: "GET_TEMP_TEMPLATE"},function(obj){
		var template = JSON.parse(obj.tempTemplate).shoptemplate[domain];
		if(JSON.parse(obj.tempTemplate).shoptemplate[domain]){
			loadByTemplate(domain, template.regarray, true);
		}else{
			loadNotpl();
		}
	});
}
/**
 * 依赖模板来加载插件功能的控制函数
 *
 * @para isErrorLoad 如果拿不到线上模板时要关闭某项功能，通过if判断该参数来进行
 */
function loadByTemplate(domain,regArray, isErrorLoad){
	stat && stat.pushInfo(0,'step','cover');
	var temp = pageUrl.replace("http://","").split("?")[0].split(domain)[1];
	var loaded = false;
	if( temp == "" || temp == "/" ){
		if(domain == "360.cn"){
			return false;
		}
		//加载抢先开启功能
		if(clientType == "customization"){
			forestallOpen(haveDianShang);
		}
	}
	regArray.sort(function(a,b){
		if(a.type < 0 && b.type < 0){
			return b.type - a.type;
		}else if(a.type < 0){
			return 1;
		}else if(b.type < 0){
			return -1;
		}else{
			return a.type - b.type;
		}
	});
	for(var i = 0;i<regArray.length;i++){
		var domainReg = JSON.parse(regArray[i].reg.replace(/\\/g,"\\\\"));
		var type = regArray[i].type;
		var urlReg = domainReg.url;
		if(type == 1 && typeof d12 != "undefined"){
			d12.template = regArray[i];
		}
		if(type == 1 || type == 4){
			haveDianShang = true;
		}
		if(urlReg){
			var urlRuleList = urlReg.page.reg.rule;
			for(var uIndex in urlRuleList){
				if(new RegExp(urlRuleList[uIndex][0]).exec(pageUrl)){
					temptype = type;
					loaded = true;
					switch(type){
						case 1 :
							//coverRateStat(2,'detail');
							stat.getBase().scene = 'nscdp';
							setTimeout(function(){
								if (typeof d12 != 'undefined') {
									d12.shopContentLoad(i,regArray);
								}
							},1000);
							break;
						case 10 :
						case 11 :
						case 12 :
							stat.getBase().scene = 'cat';
							setTimeout(function(){
								if(typeof d12 != 'undefined'){
									d12.channelLoad(i,regArray);
								}
							},1000);
							break;
						default:
							if(type < 0){
								stat.getBase().scene = 'cat';
								setTimeout(function(){
									if(typeof d12 != 'undefined'){
										d12.channelLoad(i,regArray);
									}
								},1000);
							}else{
								loaded = false;
							}
							break;
					}
					//haveDianShang = false;
					break;
					//return false;
				}
			}
		}
		if(loaded){
			break;
		}
	}
	//加载浮动价格曲线
	if(haveDianShang){
		_extractDepot(regArray); //识别城市分仓
		loadRandomCssFunc(); //电商页面开启随机class
		if (!isGWZS) {
			setTimeout(function(){
				FloatCurve.init(regArray);
			},3000);
		}
	}
	return false;
}
//根据url获得此url对应的domain
function extractUrlDomain(url){
	var regList = /^https?\:\/\/[^\/]*?([^\/\.]+(?:\.com|\.cn|\.net|\.hk|\.co|\.de)(?:\.[a-z]{1,2})?)(?![^\/])/.exec(url);
	if( regList && regList.length>1 ){
		return regList[1];
	}else{
		return "";
	}
}


//给JQuery添加一个文本获取方法，只获得目标元素包含的文本信息
jQuery.fn.selfText=function(){
     return $(this).clone().children().remove().end().text().replace(/(^\s*)|(\s*$)/g,'');
}
//给jquery添加一个页面内元素滚动时不触发浏览器的滚动条的方法
jQuery.fn.preventScroll=function(){
	var _this = this.get(0);
    if($.browser.mozilla){
        _this.addEventListener('DOMMouseScroll',function(e){
            _this.scrollTop += e.detail > 0 ? 60 : -60;
            e.preventDefault();
        },false);
    }else{
        _this.onmousewheel = function(e){
            e = e || window.event;
            _this.scrollTop += e.wheelDelta > 0 ? -60 : 60;
            return false;
        };
    }
    return this;
}
//加密算法
var riddle = {
	zero: ["0", "00", "000", "0000", "00000", "000000", "0000000", "00000000"],
	strReverse: function(e) {
		var f = [];
		var g;
		for (g = 0, l = e.length; g < l; g++) {
			f[f.length] = e.charAt(g);
		}
		return f.reverse().join("");
	},
	encrypt: function(f, h, g) {
		var e = [];
		var j;
		for (j = 0, l = f.length; j < l; j++) {
			e[e.length] = riddle.to(f.charCodeAt(j), h);
		}
		return g ? riddle.strReverse(e.join("")) : e.join("");
	},
	to: function(f, h) {
		var e = "" + (f + 88).toString(16),
		g = h - e.length;
		if (g > 0) {
			return riddle.zero[g - 1] + e;
		}
		return e;
	},
	decrypt: function(f, k, h) {
		var e = [];
		if (h) {
			f = riddle.strReverse(f);
		}
		for (var o = 0, n = 0; o < f.length; o += k, n++) {
			var g = f.substring(o, o + k);
			e[n] = riddle.tranFormat(g, k);
		}
		return String.fromCharCode.apply(String, e);
	},
	tranFormat: function(e, f) {
		if (e.length !== f) {
			return 0;
		}
		return parseInt(e.replace(/^0+/g, ""), 16) - 88;
	}
}



//延迟hover
function hoverDelayFunction(hoverDelayList,timeout){
	var list = hoverDelayList;
	timeout = timeout == null ? 150 : timeout;
	$.each(list,function(i,item){
		var hoverDelayItem = item;
		var agencyElement = hoverDelayItem[0];
		var hoverElement = hoverDelayItem[1];
		var showElement = hoverDelayItem[2];
		var showCallBackFunction = hoverDelayItem[3];
		var hideCallBackFunction = hoverDelayItem[4];
		var showDelayTimer = null;
		$(agencyElement).on("mouseenter",hoverElement,function(){
			var hoverItem = $(this);
			showDelayTimer = setTimeout(function(){
				showDelayTimer = null;
				hoverItem.find(showElement).show().trigger('mmz-hover-show');
				showCallBackFunction&&showCallBackFunction(hoverItem);
			},timeout);
		});
		$(agencyElement).on("mouseleave",hoverElement,function(){
			clearTimeout(showDelayTimer);
			if(!showDelayTimer){
				var hoverItem = $(this);
				hideCallBackFunction&&hideCallBackFunction(hoverItem);
				hoverItem.find(showElement).hide().trigger('mmz-hover-hide');
			}
		});
    });
}
//加载历史价格曲线
function initPrice(qDate,container,exConfObj){
	var placeholder = $(container).find('#chrome-price').show().end().find(".mmz_placeholder");
	histPriceDrawer.addData(qDate,placeholder);
	histPriceDrawer.draw(placeholder,exConfObj);
}


//插件条相关功能
/**
 * GYK
 * Sam修改  依赖页面选择器不太稳定
 * 搜索结果页添加大搜索导流
 */
function loadMoreGoods(){
	var url = MiTools.parseUrl(pageUrl);
	var domain = extractUrlDomain(pageUrl);
	var queryKeys = {
		'tmall.com' : 'q',
		'taobao.com' : 'q',
		'jd.com' : 'keyword'
	}
	var key = queryKeys[domain];
	if(url.query && url.query[key]){
/**
 * 这里keyword选择器写死了，建议给运营去搞 --- Sam
 */
		var keywords = $('[name="q"]').val() || $('#key').val();
		var subKW = MiTools.subWideCharStr(keywords,12,true);
		var host = domain.split('.')[0];
		var moreGoodsHtml = '<div class="gwd_toolbar_more_goods"><a href="http://www.so.com/s?q='+encodeURIComponent(keywords)+'&src=gwxm-'+host+'&from=gwxm-'+host+'&resultFrom=gwxm-'+host+'" target="_blank" title="更多'+keywords+'">更多<em>'+ subKW +'</em>>></a></div>';
		$('.gwd_toolbar_info').append(moreGoodsHtml);
	}
}
var MV = {
//    mvBaseInfo : [{ pubid:1026621, showid:'1TsBFK' }, { pubid:1026622, showid:'x4bcvK' }, { pubid:1026623, showid:'gDLoOj' }, { pubid:1026624, showid:'Muk4yJ' }, { pubid:1026625, showid:'DAk4dz' },{pubid:1027099,showid:'h3SN7B'}],
//	mvBaseInfo : [{ pubid:1029369, showid:'Z3lOsM' }],
    mvUid : (function () {
        function getHash (str) {
        	var hash = 1,
            charCode = 0,
            idx;
            if(str){
                hash = 0;
                for(idx = str.length - 1; idx >= 0; idx--){
                    charCode = str.charCodeAt(idx);
                    hash = (hash << 6&268435455) + charCode+(charCode << 14);
                    charCode = hash&266338304;
                    hash = charCode != 0 ? hash ^ charCode>>21 : hash;
                }
            }
            return hash;
        }
        return '';
        return ("" + getHash(window.location.href) + getHash(document.domain) + (new Date() -0) + Math.floor(Math.random()*1000)).substr(0, 32);
    })(),
    data:null,
	sinfo : null,
//    mvShowNum : 9999,
	pushNums : [2,2],
    mvData:[],
    mvADNum:0,
    requestMvNum:0,
    XNum:0,
	tag:'大家还在看',
	imgOption: null, //去后台取图片的设置
    assembly:function(noMvTag){
        log("rewrite assembly please!")
    },
    assembleMvData:function(mergeData){
        var data = this.data,mvData = this.mvData;
        var showOrder;
        var info;
        var curData = [];
        var ctrmsg = data.ctrmsg;
        var tarr = [];
        var isMvfirst = false;
        var order = [];
        $.each(ctrmsg && ctrmsg.ctrlist,function(k,v){
            tarr.push([k,v*100]);
        })
		tarr = tarr.slice(0,Math.min(this.curCanShowNum,mergeData.length+mvData.length));
        $.each(tarr.sort(function(a,b){ return a[1] < b[1] ? 1 : -1}),function(k,v){
            order.push(v[0]);
        });
        if(+ctrmsg.mvecpm >= +ctrmsg.xecpm){  
            info = [mvData,mergeData] ;
            isMvfirst = true;
//            showOrder = [2,2,2,2,2,2];
        }else{
			info = [mergeData,mvData] ;
//            showOrder = [2,2,2,2,2,2];
        }
        log('mvecpm,xecpm:' + ctrmsg.mvecpm +','+ctrmsg.xecpm)
        log(isMvfirst ? '先展示mv' : '先展示喜宝')
        log('广告位价值：')
        log(ctrmsg.ctrlist)
        log('展现顺序：')
		log(order)
		
		var pos = [0,0], pushNums=this.pushNums || [2,2], i=j=0, oIndex=0, endCnt = 0,prevPos = [0,0];
		var pushNum;
		while(true){
			if(endCnt>=info.length){
				break;
			}
			if(pos[i]<0 || pos[i] >= info[i].length){
				if(pos[i]>=0){
					pos[i] = -1;
					endCnt++;
				}
				i = (i+1)%info.length;
				j = j<pushNums.length-1 ? j+1 : j+1-info.length;
				continue;
			}
			pushNum = +pushNums[j];
			if(oIndex < order.length){
				curData[order[oIndex]] = info[i][pos[i]++];		
				oIndex++;
			}else{
				curData[curData.length] = info[i][pos[i]++];
			}
			if((pos[i]-prevPos[i])%pushNum == 0){
				prevPos[i] = pos[i];
				i = (i+1)%info.length;
				j = j<pushNums.length-1 ? j+1 : j+1-info.length;
			}
		}
        return curData;
    },
    handleData:function(){
        log('mv 实际返回数据：'+ this.mvADNum);
        var that = this;
        var newData = {title:that.tag,data:[],titletype:0,titletypestr:'recommend_mv'};
		var info = this.sinfo;
		if(info){
			newData.title = info.title;
			newData.data = this.assembleMvData(info.data);
		}else{
			newData.data = this.mvData;
		}
		this.sinfo = newData;
        this.assembly();
    },
    calculateNum:function(){
        var that = this;
        var data = this.data;
      	var info = this.sinfo;
		var ctrmsg = data.ctrmsg;
       	var curCanShowNum = this.curCanShowNum;
       	var getScale = function(total,data){
			var sum,xNum;
			sum = +ctrmsg.mvecpm + +ctrmsg.xecpm
            if(sum > 0){
				xNum = Math.round(total*ctrmsg.xecpm/sum);	
			}else{
				//xNum = 0;
				xNum = (total/2) >> 0;
			}
            return Math.min(xNum,data.length);
        }
        if(info){
            this.XNum = getScale(curCanShowNum,info.data);
            this.requestMvNum = curCanShowNum - this.XNum;
            log('第一部分数据为大家还在看，合并mv数据。第一部分数据：'+info.data.length+'。请求mv个数：' + this.requestMvNum +';喜宝个数：' + this.XNum);
        }else{
            this.requestMvNum = curCanShowNum;
            log('没有数据。请求mv个数：' + this.requestMvNum);
        }
    },
	init : function(data,resolve){
		if(!data.ctrmsg){
			log('Warning: 服务器未提供ecpm信息，采用默认值');
            //stat.click({a:'',b:'noecpm',h:'gwd.mv.360.cn',u:this.mvUid});
		}
		data.ctrmsg = $.extend({mvecpm:0, xecpm:0,ctrlist:[]},data.ctrmsg);
		this.data = data;		
		this.resolve = resolve;
		if(typeof data.mixrate == 'string'){
			MV.pushNums = data.mixrate.split(',');
		}
	},
	getMvData : function(){
        log('getMvData');        
        var that = this;
        var mvData = this.data.mv;
        var maxReqNum = that.requestMvNum;
        var url = MiTools.parseUrl(mvData.req);
        url.query.impct = maxReqNum;
        var imgOption = this.imgOption || null;
        var mvtmpData = {},mvShowData = [],mvI = 0;
		gl_commercialStat.MVsend = that.requestMvNum;
		stat.pushInfo(1,'step','mvreq');
		Extension.ajax({
			type :'GET',
            url : MiTools.generateUrl(url),
            timeout : 5000,
            dataType : 'html'		
		},function(jsonp){
		//	var jsonp = [[{'link':'http://tf24dg.prod.mediav.com:8000/c?type=2&oimpid=3OGZ_mj20-ps&pub=112012_515677_1036756&cus=28305_1024060_9841017_45297162_0&fee=qrUUUUZUUUPQ&pinfo=&solutiontype=1&solutionowner=1&creativetype=12&ref=%28null%29&url=http://fenxi.com?ceshiceshi','logo':''}, { 'vt': '8', 'curl' : '', 'curl1' : 'http://tf24dg.prod.mediav.com:8000/c?type=2&oimpid=3OGZ_mj20-ps&pub=112012_515677_1036756&cus=28305_1024060_9841017_45297162_45297162001&fee=qrUUUUZUUUPQ&pinfo=8_NKGHA&solutiontype=1&solutionowner=1&creativetype=12&ref=%28null%29&url=http://cn.ihg.com/hotels/redirect?path=hd®ionCode=280&localeCode=zh&hotelCode=NKGHA&checkInMonthYear=032015&checkInDate=24&checkOutMonthYear=032015&checkOutDate=26&ceshiceshi', 'height' : '160', 'pimg' : 'http://img.derbysoft.com/img/NKGHA.jpg', 'pn' : '南京绿地洲际酒店', 'price' : '938', 'timg' : 'http://f2.mediav.com/fpass/item1/20150428/28305-5846262355775139949_104x160_20150428164256_18482.jpg', 'width' : '104' } ]];
			if(jsonp){
				stat.pushInfo(1,'step','mvresp');
				try{
					jsonp = jsonp.trim().replace(/'/g,'"');
					jsonp = JSON.parse(jsonp);
				}catch(e){
					log('mv接口数据parse error');
					that.assembly();
					return;
				}
				var i = 0, buffer = [], complete = 0;
				if(jsonp && jsonp.length){
					$.each(jsonp,function(key,val){
                        that.mvADNum++;
						var v1 = $.isArray(val)? val[1] : val;
						//return 还是 return false?
                        if(!v1 || !v1.curl1){return;}
						gl_commercialStat.MVback++;
						var _url;
						try{
							_url = v1.curl1.split('&url=')[1] || 'parseError';
						}catch(e){
							_url = 'parseError';
						}
						var index = i;
						i++;
						Extension.sendMessage($.extend(true,{greeting:'GET_IMAGE',image:v1.timg,stretch:true},imgOption),function(imgSrc){
							buffer.push({index:index,data:{mlogo:'',mname:'',pic:imgSrc, price:v1.u_pricing||v1.price, title:'',url:v1.curl1,_url:_url, pn:v1.pn}});
							complete++;
							if(complete== i){
								buffer.sort(function(a,b){return a.index-b.index});
								$.each(buffer.slice(0, maxReqNum),function(i,item){
									that.mvData.push(item.data);
								})
								that.handleData();
							}
						});
                    });
				}
				if(i==0){
				    //没有mv数据统计
                    that.assembly();
                    log('没有mv数据');
				}
			}else{
				that.assembly();
                log('mv接口请求失败');
			}
		});
    }
};

//判断网站类别
function typeOfWeb(regArray,haveDianShang){
	for(var i = 0;i<regArray.length;i++){
		var type = regArray[i].type;
		if(type == 1 || type == 4){
			haveDianShang = true;
		}
		log(haveDianShang);
	}
}
//抢先开启相关功能
function forestallOpen(haveDianshang){
	if( domain == "360.cn" || !haveDianShang){
		return false;
	}
	setTimeout(function(){
		Extension.sendMessage({greeting:"FORESTALL_OPEN",order:"GET"},function(obj){
			if(obj.order){
				$("body").append('<div class="gwd_forestall_open">\
									<div class="gwd_forestall_open_head">\
										<span class="gwd_forestall_open_logo" style="background-image:url('+backgroundImg+')"></span>\
										<span class="gwd_forestall_open_word">喵喵折</span>\
										<span class="gwd_forestall_open_close" style="background-image:url('+backgroundImg+')"></span>\
									</div>\
									<p class="gwd_forestall_open_title">开启历史价格图</p>\
									<div class="gwd_forestall_open_info">帮你一眼识破虚假促销</br>平均每单为你节省<em>20%</em></div>\
									<div class="gwd_forestall_open_wallpaper" style="background-image:url('+chrome.extension.getURL("images/open_background.png")+')"></div>\
									<div class="gwd_forestall_open_button" style="background-image:url('+backgroundImg+')">\
										果断开启\
									</div>\
									<div class="gwd_forestall_open_destruct">\
										<input type="checkbox" class="gwd_forestall_open_no_show"/>\
										<label>不再提醒</label>\
									</div>\
									<img src="'+gwdHttps+'api.html?path1=qihoo-mall-goodsinfo&path2=cps&url='+encodeURIComponent(pageUrl)+'&from=forestall_open_show&cv='+clientVersion+'" style="display:none;"></img>\
								</div>');
				$(".gwd_forestall_open").on("click",function(e){
					var className = e.target.className;
					switch(className){
						case "gwd_forestall_open_close" :
							$(this).hide();
							return false;
						case "gwd_forestall_open_no_show" :
							if($(e.target).attr("id")=="gwd_forestall_open_no_show_click"){
								return false;
							}
							$(e.target).attr("id","gwd_forestall_open_no_show_click");
							/*
							Extension.ajax({
								type:'GET',cache:false,url:gwdHttps+'api.html?path1=qihoo-mall-goodsinfo&path2=cps&url='+encodeURIComponent(pageUrl)+'&from=forestall_open_noshow&cv='+clientVersion,async:true,timeout:3000,dataType:'json'
							},function(){});
							*/
							Extension.sendMessage({greeting:"FORESTALL_OPEN",order:"NO_SHOW"},function(obj){});
							$(this).hide();
							return false;
						case "gwd_forestall_open_button" :
							if($(e.target).attr("id")=="gwd_forestall_open_button_click"){
								return false;
							}
							$(e.target).attr("id","gwd_forestall_open_button_click");
							Extension.ajax({
								type:'GET',cache:false,url:gwdHttps+'api.html?path1=qihoo-mall-goodsinfo&path2=cps&url='+encodeURIComponent(pageUrl)+'&from=forestall_open_agreement&cv='+clientVersion,async:true,timeout:3000,dataType:'json'
							},function(){});
							Extension.sendMessage({greeting:"FORESTALL_OPEN",order:"SET"},function(obj){
								if( obj.state && obj.state == "done" ){
									$(".gwd_forestall_open_button").text("开启成功");
									$(".gwd_forestall_open_info").css("color","#ff643a");
									$(".gwd_forestall_open").on("mouseout",function(){
										$(this).hide();
									});
								}
							});
							return false;
					}
				});
				var closetimer = null;
				closetimer = setTimeout(function(){
					$(".gwd_forestall_open").hide();
				},1000*60);
				$(".gwd_forestall_open").mouseenter(function(){
					clearTimeout(closetimer);
				});
				$(".gwd_forestall_open").mouseleave(function(){
					closetimer = setTimeout(function(){
						$(".gwd_forestall_open").hide();
					},1000*60);
				});
			}
		});
	},3000);
}

/**
 * 倒入收藏
 */
function gouwudaiHomePage(){
	Extension.sendMessage({greeting:"COLLECT_HISTORY_LOCAL_NUM"},function(obj){
		obj = obj || {};
		var cnum = obj.cnum || 0;
		if(obj.state == "done" || !(cnum > 0)){
			return false;
		}
		var text = '未登录状态下您已收藏了<em> '+cnum+' </em>件商品，立即同步到您的账户，随时随地登录查看。';
		var $pop =$('<div class="gwd_import">\
							<div class="gwd_import_popup">\
								<div class="gwd_ns_header"><span class="gwd_ns_title">导入登录前收藏的商品<span><i class="gwd_ns_close" style="background-image:url('+backgroundImg+')"></i></div>\
								<div class="gwd_ns_logo" style="background-image:url('+backgroundImg+')"></div>\
								<div class="gwd_import_popup_info">未登录状态下您已收藏了<em> '+cnum+' </em>件商品，立即同步到您的账户，随时随地登录查看。</div>\
								<div class="gwd_import_button_wrapper">\
									<span class="gwd_cancel_button">不再提醒</span>\
									<span class="gwd_import_button">立即导入</span>\
								</div>\
							</div>\
							<div class="gwd_import_ing">正在导入，请稍后...</div>\
							<div class="gwd_import_done"><div class="gwd_import_done_logo" style="background-image:url('+chrome.extension.getURL("images/newimage.png")+')"></div><span>导入成功</span></div>\
						</div>', false).appendTo('body');
		$pop.find(".gwd_import_button").click(function(){
			$pop.find(".gwd_import_popup").hide();
			$pop.find(".gwd_import_ing").show();
			Extension.sendMessage({greeting:"UPDATE_LOCAL_INFO_INTO_CLOUD"},function(obj){
				$pop.find(".gwd_import_ing").hide();
				$pop.find(".gwd_import_done").show();
				Extension.sendMessage({greeting:"DONT_IMPORT_REMIND"},function(obj){});
				setTimeout(function(){
					$pop.find(".gwd_import").hide();
					window.location.reload();
				},3000);
			});
		});
		$pop.find(".gwd_cancel_button").click(function(){
			$pop.find(".gwd_import").hide();
			Extension.sendMessage({greeting:"DONT_IMPORT_REMIND"},function(obj){});
		});
		$pop.find('.gwd_ns_close').click(function(){
			$pop.find(".gwd_import").hide();
		});
	})
}
function cssCompatibility(){
	var browserVersions = "";
	if( navigator.userAgent.indexOf("Chrome/") != -1){
		browserVersions = parseInt(navigator.userAgent.split("Chrome/")[1].split(".")[0]);
		if( browserVersions < 26 ){
			var itemOne = $('head style:contains("mmz_toolbar_container_box")');
			if( itemOne.length > 0 ){
				itemOne.remove();
			}
			var width = window.innerWidth-MiTools.getScrollWidth();
			$('head').append('<style type="text/css">\
				.mmz_toolbar_container_box.taobao_goods_page {max-width: '+(width-318)+'px;}\
			</style>');
		}else{
			return false;
		}
	}else{
		return false;
	}
}

/**
 * 抽取页面城市信息
 * @author : Sam
 * @param {Object} regArray
 */
function _extractDepot(regArray){
	try{
		var i,j;
		for(i=0; i<regArray.length; ++i){
			var domainReg = JSON.parse(regArray[i].reg.replace(/\\/g,"\\\\"));
			if ("depot" in domainReg) {
				var selArray = domainReg["depot"]["page"]["element"]["label"];
				for(j=0; j<selArray.length; ++j){
					var _city = $(selArray[j],false).text().trim();
					if(_city != ""){
						depotCity = _city;
					}
				}
			}
		}
	}catch(e){
		log(e);
	}
}


//统计相关数据
;(function($){
	$(document).on('click','[gwd-subject]',function(e){
		var $this = $(this);
		if($this.find('a').length <= 0 && $this.find('[gwd-href]').length <=0){
			stat.getInfo(3).step = 'click';
			stat.pushInfo(3,'subject',$this.attr('gwd-subject'));
			stat.run(3);
		}
	});
})(window.jQuery);

//获取url参数by小牛
function getUrlParam(url,name){
	var pattern = new RegExp("[?&]"+name+"\=([^&]+)", "g");
	var matcher = pattern.exec(url);
	var item = null;
	if(null != matcher){
		try{
			item = decodeURIComponent(decodeURIComponent(matcher[1]));
		}catch(e){
			try{
				item = decodeURIComponent(matcher[1]);
			}catch(e){
				item = matcher[1];
			}
		}
	}
	return item;
}

/**
 * 抽取页面信息的函数，从详情页的函数中提出。
 * 详情页的pageInfoExtract还是暂时在用原函数，调用地方太多
 * @param {Object} regItem 将对正则的依赖转移到调用环境。原函数依赖外部变量。
 */
function pageInfoExtract(regItem){
	log('进入抓取');
	var pageInfoObject = {"shopName":"","shopId":-1,"price":0,"name":"","pic":"","isSale":0,"district":"","version":"","noSale":0};
	var reg = JSON.parse(regItem.reg.replace(/\\/g,"\\\\"));
	log(regItem);
	//针对淘宝xss过滤字符串
	var xssFilter =function(string){
		return string.replace(/</g, '&lt;').replace(/>/g, '&gt;');
	};
	pageInfoObject.shopName = regItem.shopname;
	pageInfoObject.shopId = regItem.shopid;
	pageInfoObject.version = reg["versions"];
	pageInfoObject.sku_var = reg["sku_var"] || '';

	for(var mateField in reg){
//		if(mateField === 'skuoriginalprice'){
//			delete reg[mateField].page.reg;
//			reg[mateField].page.element = {
//				label: ["body"],
//				method: "html().match('skuMap.*}}').join().match(/\\d+\\.\\d+/g).join(';')"
//			}
//		}
		if( mateField === "url" || mateField === "pageimplant" || mateField === "execjs"){
			continue;
		}
		for(var mateMethod in reg[mateField].page){
			if( mateMethod === "element" ){
				var labelList = reg[mateField].page[mateMethod].label;
				var checkObject = reg[mateField].page[mateMethod].check;
				var methodObject = reg[mateField].page[mateMethod].method;
				for(var labelIndex in labelList){
					var text = null;
					try{
						if(mateField === "issale"){
							if( $(labelList[labelIndex],false).length > 0 && !$(labelList[labelIndex],false).is(':hidden') ){
								text = true;
							}
						}else if( mateField === "nosale" ){
							if( $(labelList[labelIndex],false).length > 0 ){
								text = true;
							}
						}else{
							if( methodObject ){
								text = eval('$(labelList[labelIndex],false)'+'.'+methodObject);
							}else{
								if( mateField === "bigpic" ){
									text = $(labelList[labelIndex],false).attr("src");
								}else{
									text = $(labelList[labelIndex],false).selfText();
								}
							}
						}
					}catch(ex){
						text = '';
					}

					if( text ){
						for(var check in reg[mateField].page[mateMethod].check){
							try{
								if( check === "replace" ){
									var rep = reg[mateField].page[mateMethod].check.replace;
									for(var repIndex in rep){
										text = text.replace(new RegExp(rep[repIndex][0],"g"),rep[repIndex][1]);
									}
								}else if( check === "split" ){
									var sp = reg[mateField].page[mateMethod].check.split;
									for(var spIndex in sp){
										if( text.indexOf(sp[spIndex][0]) != -1 ){
											text = text.split(sp[spIndex][0])[parseInt(sp[spIndex][1])];
										}
									}
								}
							}catch(ex){
								
							}
						}
						if( mateField === "price" ){
							if( (pageInfoObject.price == 0 && text != "" && !isNaN(text) && parseFloat(text) > 0) || (parseFloat(text) > 0 && parseFloat(text) < pageInfoObject.price) ){
								pageInfoObject.price = MiTools.getPrFix(parseFloat(text));
							}
						}else if( mateField === "name" ){
							var text=xssFilter(text);
							if( pageInfoObject.name === "" ){
								pageInfoObject.name = text;
							}
							if( pageInfoObject.name != "" && pageInfoObject.name != text ){
								pageInfoObject.name = pageTitle;
							}
						}else if( mateField === "issale" ){
							if( text ){
								pageInfoObject.isSale = 1;
							}
						}else if( mateField === "nosale" ){
							if( text ){
								pageInfoObject.noSale = 1;
							}
						}else if( mateField === "bigpic" ){
							if( pageInfoObject.pic === "" && text != "" ){
								pageInfoObject.pic = text;
							}
						}else if( mateField === "district" ){
							if( pageInfoObject.district === "" && text != "" ){
								pageInfoObject.district = text;
							}
						}else{
							if( !text || text == "" ){
								text = "none";
							}
							if( !(mateField in pageInfoObject) ){
								pageInfoObject[mateField] = text;
							}else{
								pageInfoObject[mateField] = pageInfoObject[mateField] + "|||" + text;
							}
						}
					}
				}
			}else if(mateMethod === "reg"){
				var rule = reg[mateField].page[mateMethod].rule;
				for(var ruleIndex in rule){
					var text = null;
					try{
						pageHtml || (pageHtml = document.head.innerHTML+document.body.innerHTML);
						var res = new RegExp(rule[ruleIndex][0]).exec(pageHtml);
						if( res && res.length > parseInt(rule[ruleIndex][1]) ){
							if( mateField === "issale" || mateField === "nosale" ){
								text = true;
							}else{
								text = res[parseInt(rule[ruleIndex][1])];
							}
						}
					}catch(ex){
						text = '';
					}
					
					if( text ){
						for(var check in reg[mateField].page[mateMethod].check){
							try{
								if( check === "replace" ){
									var rep = reg[mateField].page[mateMethod].check.replace;
									for(var repIndex in rep){
										text = text.replace(new RegExp(rep[repIndex][0],"g"),rep[repIndex][1]);
									}
								}else if( check === "split" ){
									var sp = reg[mateField].page[mateMethod].check.split;
									for(var spIndex in sp){
										if( text.indexOf(sp[spIndex][0]) != -1 ){
											text = text.split(sp[spIndex][0])[parseInt(sp[spIndex][1])];
										}
									}
								}
							}catch(ex){
								
							}
						}
						if(mateField === "price"){
							if( (pageInfoObject.price == 0 && text != "" && !isNaN(text) && parseFloat(text) > 0) || (parseFloat(text) > 0 && parseFloat(text) < pageInfoObject.price) ){
								pageInfoObject.price = MiTools.getPrFix(parseFloat(text));
							}
						}else if( mateField === "name" ){
							var text=xssFilter(text);
							if( pageInfoObject.name === "" ){
								pageInfoObject.name = text;
							}
							if( pageInfoObject.name != "" && pageInfoObject.name != text ){
								pageInfoObject.name = pageTitle;
							}
						}else if( mateField === "issale" ){
							if( text ){
								pageInfoObject.isSale = 1;
							}
						}else if( mateField === "nosale" ){
							if( text ){
								pageInfoObject.noSale = 1;
							}
						}else if( mateField === "bigpic" ){
							if( pageInfoObject.pic === "" && text != "" ){
								pageInfoObject.pic = text;
							}
						}else if( mateField === "district" ){
							if( pageInfoObject.district === "" && text != "" ){
								pageInfoObject.district = text;
							}
						}else{
							if( !text || text == "" ){
								text = "none";
							}
							if( !(mateField in pageInfoObject) ){
								pageInfoObject[mateField] = text;
							}else{
								pageInfoObject[mateField] = pageInfoObject[mateField] + "|||" + text;
							}
						}
					}
				}
			}
		}
	}
	if(pageInfoObject.name === ""){
		pageInfoObject.name = pageTitle;
	}
	log("页面信息抓取完毕");
	;(function(){
		var key, key0;
		try{
			for(var key in pageInfoObject){
				if(pageInfoObject[key] && key[key.length-1] == 1){
					key0 = key.slice(0,key.length-1);
					if(!pageInfoObject[key0]){
						pageInfoObject[key0] = pageInfoObject[key];
					}
				}
			}
		}catch(e){
		}
	})();

	return pageInfoObject;
}

/**
 * 得到比价条操作对象的单例工厂
 * 最新版详细文档：http://add.corp.qihoo.net/pages/editpage.action?pageId=12100126
 */
function getToolbarLoader(){
	var fn = arguments.callee;
	if(typeof fn.singleton == 'undefined'){
		//给jQuery添加新的尺子方法，试图解决安全浏览器设整数宽后仍渲染成带小数点，并导致jquery尺子方法的结果少1px的问题。——Sam 2015/01/19
		$.fn.widthR = function(){
			var width = 0;
			try{
				if(this.length>0){
					width = this.width();
					if(width != parseFloat(window.getComputedStyle(this.get(0))['width'])){
						width += 1;
					}
				}
			}catch(e){
				width = 0;
			}
			return width;
		};
		$.fn.outerWidthR = function(){
			var outerWidth = 0;
			try{
				if(this.length>0){
					var width = this.width();
					outerWidth = $.fn.outerWidth.apply(this,arguments) || 0;
					if(width != parseFloat(window.getComputedStyle(this.get(0))['width'])){
						outerWidth += 1;
					}
				}
			}catch(e){
				outerWidth = 0;
			}
			return outerWidth;
		};
		fn.singleton = {
			_options : {
				isNewStyle : false,
				openTabSavingData : false,
				showAfterImgReady : true,
				showGoodsTitle : true, //展示商品title
				showBijia : true, //展示比价、同款等
				showKLHK : true, //展示看了还看、大家还在看类数据
				showInsetBtn : true, //展示内置按钮
				showHistoryPrice : true, //展示历史价格
//				loadMashangmai : true, //显示马上买模块
				goodsDistribution : [1,1,1], //商品展示比例
				paddingRight : 254, //右侧留空
				showWhenEmpty : true, //推荐商品为空时仍然展示比价条
				showSmall : true, //收起状态下显示小条
				show : true, //允许显示大条
				useLocalImage : true,
				dummy : '<li class="gwd_toolbar_goods_item_pic"></li>'
			},
			'.toolbar' : null,
			'.flex' : null,
			'.pageInfo' : null,
			_isActive : false,
			_isActivePopup : false,
			_template : null,
			_loadings : [],
			layouter : null,
			guideItemFormatter : null,
			imageItemFormatter : null,
			textItemFormatter : null,
			_layouter : function(calcMaxNum){
				var toolbar = this.getToolbar();
				var maxWidth = $(window).width() - this._options.paddingRight - parseInt(toolbar.css('padding-right')) - parseInt(toolbar.css('padding-left'));
				var target = this.getFlex().children();
				var goodslistSelector = '.gwd_toolbar_goods_list';
				var totalWidth = toolbar.find('.gwd_toolbar_logo').outerWidthR(true);
				//试图解决chrome下自适应宽度有小数点，但jquery量不出来的bug
				var distrib = this._options.goodsDistribution;
				var adaptWidth = function($elem){
					if($elem[0] && !$elem[0].style.width){
						if ($elem.hasClass('gwd_toolbar_coupon')) {
							$elem.width($elem.width() + 10);
						} else {
							$elem.width($elem.width());
						}
					}
				};
				var	i, listNum, endCnt, listArray,tmp, width;
				target.not(goodslistSelector).each(function(i,elem){
					tmp = $(elem);
					adaptWidth(tmp);
					totalWidth += tmp.outerWidthR(true);
				});
				target = target.filter(goodslistSelector);
				listArray = [];
				listNum = target.length;
				if(listNum>0){
					for(i=0; i<listNum; ++i){
						tmp = target.eq(i);
						adaptWidth(tmp.find('.gwd_toolbar_goods_item_guide'));
						width = tmp.find('.gwd_toolbar_goods_item_guide').outerWidthR(true);
						listArray[i] = {
							index : i,
							list : tmp,
							pos : 0,
							liSet : tmp.find('li').not('.gwd_toolbar_goods_item_guide'),
							width : width,
							weight : 0,
							posInc : function(){
								this.pos ++;
								if(this.pos >= this.liSet.length){
									this.isEnded = true;
								}else{
									this.weight = this.pos / this.distrib;
								}								
							},
							distrib : (+distrib[i]) || 1,
							isEnded : false
						}
						totalWidth += width + tmp.outerWidth(true) - tmp.width();
					}
					while(true){
						listArray.sort(function(a,b){
							if(a.isEnded){
								return 1;
							}else if(b.isEnded){
								return -1;
							}else{
								return a.weight - b.weight;
							}
						});
						if(listArray[0].isEnded){
							break;
						}
						tmp = listArray[0];
						target = tmp.liSet.eq(tmp.pos);
						adaptWidth(target);
						width = target.outerWidthR(true);
						if(tmp.pos<1 || totalWidth + width <= maxWidth){
							tmp.posInc();
							tmp.width += width;
							totalWidth += width;
						}else{
							tmp.isEnded = true;
						}				
					}
					listArray.sort(function(a,b){
						return a.index - b.index;
					});
					if(calcMaxNum){
						return listArray;
					}else{
						for(i=0; i<listNum; ++i){
							tmp = listArray[i];
							tmp.liSet.slice(0,tmp.pos).css('visibility','visible').end().slice(tmp.pos).css('visibility','hidden');
							tmp.list.width(tmp.width).css('min-width',tmp.width+'px');
						}
						toolbar.css('min-width',totalWidth);
					}
				}
			},
			_guideItemFormatter : function(text){
				var url = '';
				if(text && typeof text == 'object'){
					if(text.url){
						url = 'gwd-href="'+text.url+'"';
					}
					text = text.text || text.html || '';
				}
				return (text && '<li class="gwd_toolbar_goods_item_guide" '+url+'><span class="gwd_toolbar_goods_item_guide_content">'+text+'</span></li>') || '';		
			},
			/**
			 * 
			 * @param {Object} data image：图片地址 url：跳转地址 title：hover标题 price：价格（数字）
			 */
			_imageItemFormatter : function(data){
				var $item;
				if(typeof data != 'string'){
					var price = $.isNumeric(data.price) ? '¥ '+MiTools.getPrFix(data.price) : data.price;
					//data.image = "http://gtms02.alicdn.com/tps/i2/TB1SdyTHXXXXXaaXXXXc8PZ9XXX-130-200.png";
					var image = this._options.useLocalImage && data.image && data.image.indexOf('data:image/')<0 ? null: data.image; 
					$item = $('<li class="gwd_toolbar_goods_item_pic" title="'+ (this._options.showGoodsTitle?(data.title||''):'') +'" gwd-href="'+data.url+'">\
								<img src="'+ (image||'') +'">\
								<div class="gwd_price_hint">'+price+'</div>\
							</li>');
					if(!image && data.image){
						Extension.sendMessage({greeting:'GET_IMAGE',image:data.image,width:64,height:64,stretch:true},function(imgSrc){
							$item.find('img').attr('src',imgSrc);
						});
					}
				}else{
					$item = $(data);
				}				
				return $item;
			},
			_textItemFormatter: function(data){
				if(typeof data != 'string'){
					data = '<li class="gwd_toolbar_goods_item_text gwd_toolbar_underline_box" title="'+ (this._options.showGoodsTitle?(data.title||''):'') +'" gwd-href="'+data.url+'">'+(data.title||'')+'</li>';
				}
				return $(data);
			},
			activate : function(){
				if(!this._isActive){
					this._isActive = true;
					$('.gwd_toolbar_container_close').live("click",function(e){
						var todayString = MiTools.getDateStr();
						Extension.sendMessage({greeting: "GET_OPTIONS"},function (obj){
							var gwdOptionsTmp;
							if(obj['options_temp'] && obj['options_temp']!=''){
								gwdOptionsTmp = JSON.parse(obj['options_temp']);
							}
							if(!gwdOptionsTmp || $.isArray(gwdOptionsTmp)){
								gwdOptionsTmp = {};
							}
							gwdOptionsTmp['priceratio_opt'] = [todayString,'close'];
							Extension.sendMessage({greeting: "SET_OPTIONS",data:{"options_temp":JSON.stringify(gwdOptionsTmp)}},function (obj){});
						});
						$('#gwd_popinfo_container').hide();
						$(".mmz_toolbar_container_box").removeClass('gwd_toolbar_no_transition').addClass("gwd_toolbar_container_shrink");
						e.preventDefault();
						//return false;
				    });
					$('.mmz_toolbar_control_shrink').live("click",function(e){
						var todayString = MiTools.getDateStr();
						Extension.sendMessage({greeting: "GET_OPTIONS"},function (obj){
							gwd_options = JSON.parse(obj.options);
							gwd_options["priceratio_opt"] = "open";
							var gwdOptionsTmp;
							if(obj['options_temp'] && obj['options_temp']!=''){
								gwdOptionsTmp = JSON.parse(obj['options_temp']);
							}
							if(!gwdOptionsTmp || $.isArray(gwdOptionsTmp)){
								gwdOptionsTmp = {};
							}
							gwdOptionsTmp['priceratio_opt'] = [todayString,'open'];
							Extension.sendMessage({greeting: "SET_OPTIONS",data:{"options":JSON.stringify(gwd_options),"options_temp":JSON.stringify(gwdOptionsTmp)}},function (obj){});
						});
						$(".mmz_toolbar_container_box").removeClass("gwd_toolbar_container_shrink");
						setTimeout(function(){
							$(".mmz_toolbar_container_box").addClass('gwd_toolbar_no_transition');
						},500)
						e.preventDefault();
//						return false;
					});
					if (isGWZS) {
						return ;
					}
					$(".gwd_bj_logo_menu_collect").live("click",function(e){
						var $this = $(this);
						if($('.msg_hint').length>0){
							Extension.sendMessage({greeting: "GOTO_LOADING_PAGE",args:"p,a",from:'plugin_toolbar'},function(message){});
						}else{
							Extension.sendMessage({greeting: "GOTO_LOADING_PAGE",from: 'plugin_toolbar'},function(){});
						}
						e.preventDefault();
						//return false;
					});
					$(".gwd_bj_logo_menu_feedback").live("click",function(e){
						Extension.sendMessage({greeting: "GO_TO_FEEDBACK",furl:pageUrl,from:'plugin_toolbar'},function(){});
				        e.preventDefault();
						//return false;
					});
					$(".gwd_bj_logo_menu_options").live("click",function(e){
						Extension.sendMessage({greeting: "GO_TO_OPTION"},function(){});
						e.preventDefault();
						//return false;
					});
					$(".gwd_bj_logo_menu_mmz, .gwd_toolbar_logo_icon_holder").live("click",function(e){
						Extension.sendMessage({greeting: "GO_TO_MMZ", from : 'plugin_toolbar'},function(){});
						e.preventDefault();
						//return false;
					});
					//Sam 20140723 比价条提示新消息处理
//					(function(){
//						var onMessage = (chrome.runtime && chrome.runtime.onMessage) || (chrome.extension && chrome.extension.onMessage);
//						if(onMessage){
//							$('.gwd_bj_logo_menu_collect').live('click',function(){
//								Extension.sendMessage({greeting: "SAVE_OLD_BADGET",text: ''},function(message){});
//								$('.msg_hint').remove();
//							});
//							onMessage.addListener(function(msg){
//								if(msg.greeting == 'HAS_NEW_MESSAGE' && msg.number != ''){
//									var hintDiv = $('.msg_hint'), html;
//									if(hintDiv.length>0){
//										hintDiv.html(msg.number);
//									}else{
//										html = '<div class="msg_hint"><span class="small_tail"></span>'+msg.number+'</div>';
//										$('.gwd_toolbar_logo').append(html);
//										$('.gwd_bj_logo_menu_collect').append(html);
//									}
//								}
//							});
//							Extension.sendMessage({greeting:'GET_NEW_MESSAGE_NUM'})
//						}
//					})();
				}
			},
			activatePopup : function(){
				var that = this;
				if(!that._isActivePopup){
					that._isActivePopup = true;
					var hoverDelayList = [];
					//注意这里给弹层添加副类gwd_toolbar_assist_popbox就可以弹出了，不要每次改动都加新类进去！ - Sam
					hoverDelayList.push([".mmz_toolbar_container_box",".gwd_toolbar_assist_item,.gwd_toolbar_logo,.gwd_toolbar_info>.gwd_toolbar_underline_box",".gwd_toolbar_assist_popbox:not(.gwd_ns_disabled),.gwd_bj_logo_menu",function(hoverItem){
						var pop = $(".gwd_toolbar_assist_popbox",hoverItem);
						if(pop.length > 0){
							var coveredWidth = pop.offset().left + pop.width()-(window.innerWidth-MiTools.getScrollWidth());
							if(coveredWidth>0){
								var left = pop.position().left;
								pop.css("left",(left-coveredWidth-5)+"px");
							}
						}
					},function(hoverItem){
						var subject = hoverItem.attr('gwd-subject');
						if(subject && !hoverItem.hasClass('gwd_ns_savetofavor')){
							if(!hoverItem.attr('gwd-hoverdone')){
								hoverItem.attr('gwd-hoverdone',1);
								stat.pushInfo(2,'subject',subject);
								stat.pushInfo(2,'step','hover');
								hoverItem.find('.gwd_toolbar_assist_popbox [gwd-module],.gwd_bj_logo_menu [gwd-module]').each(function(){
									stat.pushInfo(2,'module',subject+'_'+$(this).attr('gwd-module'));
								});
								stat.run(2);
							}
						}
					}]);
					/*
					this.find(".gwd_toolbar_logo_hint_holder").mouseenter(function(e){
						return false;
					}).click(function(e){
						Extension.updateGwdOptions(null,{'newbrand_anim':['',4,8]});
						$(this).hide();
						e.preventDefault();
						//return false;
					});
					*/
					hoverDelayFunction(hoverDelayList);
				}
			},
			initShrink : function(title, trend){
				var small = null;
				if(this._options.showSmall){					
					small = $('.mmz_toolbar_control_shrink');
					if(small.length>0){
						if(title){
							small.attr('title',title);
						}
					}else{
						small = $('<div class="mmz_toolbar_control_shrink" gwd-subject="open" title="'+(title||'')+'">\
								  		<div class="gwd_toolbar_logo_icon">'+
                        ( !isGWZS ?
                        '<span style="background-image:url('+backgroundImg+')"></span>':
								  			'<span class="gwzs" style="background-image:url('+backgroundImg_gwzs+')"></span>')+
								  		'</div>\
										<div class="price_trend_logo_holder" >\
											<span class="price_trend_logo" style="background-image:url('+backgroundImg+')"></span>\
										</div>\
										<div class="gwd_toolbar_state_switch_btn" >\
											<span style="background-image:url('+backgroundImg+')"></span>\
										</div>\
									</div>');
						if(trend != null){
							small.addClass(classNames[trend]);
						}
						small.appendTo('body');
					}
					var classNames = ['gwd_ns_trend_lowest','gwd_ns_trend_down','gwd_ns_trend_up','gwd_ns_trend_steady'];
					if(trend != null){
						small.addClass('gwd_ns_trend');
						var trend_holder = small.find('.price_trend_logo_holder');
						$.each(classNames, function(i, className){
							if(trend_holder.hasClass(className)){
								trend_holder.removeClass(className);
								return false;
							}
						});
						trend_holder.addClass(classNames[trend]);
					}
				}
				return small;
			},
			//注意这里原来有个影响动画的animate参数和回调函数，其他拷贝版本好像都没带过来
			init :	function(options){
				options && this.setOptions(options);
				options = this._options;
				this.initShrink('正在加载...');
				if($(".mmz_toolbar_container_box").length >= 1){
					this.reset();
				}else{
					this.refreshCache();
				}
				var _this = this;
				var html = '<div class="mmz_toolbar_container_box mmz_toolbar_containerX mmz_toolbar_big gwd_ns_mmz">\
								<div class="gwd_toolbar_logo gwd_toolbar_underline_box" gwd-subject="logo">\
									<div class="gwd_toolbar_logo_icon_holder" gwd-href _name="plugin_toolbar_logo" >';
                if (!isGWZS) {
                    html +=            '<div class="mmz_toolbar_logo_icon gwd_ns_pic"  style="background-image:url('+backgroundImg+')"></div>\
										<div class="mmz_toolbar_logo_icon gwd_ns_text"  style="background-image:url('+backgroundImg+')"></div>\
										<div class="mmz_toolbar_logo_icon gwd_ns_hint">&nbsp;</div>\
									</div>\
									<ul class="gwd_bj_logo_menu">\
										<!--li class="gwd_bj_logo_menu_history" gwd-module="browhist" gwd-href>\
											<span class="gwd_bj_logo_menu_logo" style="background-image:url('+backgroundImg+')"></span>\
											<span class="gwd_bj_logo_menu_word">浏览历史</span>\
										</li-->\
										<li class="gwd_bj_logo_menu_mmz" gwd-module="mmz" gwd-href="">\
											<span class="gwd_bj_logo_menu_word">喵喵折</span>\
										</li>\
										<li class="gwd_bj_logo_menu_collect" gwd-module="myfav" _name="plugin_toolbar_favorite" gwd-href>\
											<span class="gwd_bj_logo_menu_word">我的收藏</span>\
										</li>\
										<li class="gwd_bj_logo_menu_htorder" gwd-module="htorder" gwd-href="http://www.henzan.com/my?act=haitao">\
											<span class="gwd_bj_logo_menu_word">海淘订单</span>\
										</li>\
										<li class="gwd_bj_logo_menu_options" gwd-module="setting" gwd-href>\
											<span class="gwd_bj_logo_menu_word">功能设置</span>\
										</li>\
										<li class="gwd_bj_logo_menu_feedback" gwd-module="feedbk" gwd-href>\
											<span class="gwd_bj_logo_menu_word">意见反馈</span>\
										</li>\
									</ul>';
                } else {
                    html +=            '<div class="mmz_toolbar_logo_icon gwzs_ns_pic"  style="background-image:url('+backgroundImg_gwzs+')"></div>\
                                    </div>';
                }
                    html +=             '<!--div class="gwd_toolbar_logo_hint_holder" title="知道啦喵~">\
										<div class="gwd_toolbar_logo_hint gwd_ns_normal" style="background-image:url('+chrome.extension.getURL("images/change-brand.png")+')"></div>\
										<div class="gwd_toolbar_logo_hint gwd_ns_hover" style="background-image:url('+chrome.extension.getURL("images/change-brand-hover.png")+')"></div>\
									</div-->\
								</div>\
								<div class="gwd_toolbar_info">\
								</div>\
								<div class="gwd_toolbar_container_close" title="收起喵喵折" style="background-image:url('+backgroundImg+')">\
		            				<span style="background-image:url('+backgroundImg+')"></span>\
		            			</div>\
							</div>';
				html = $(html).appendTo('body').on('click','[gwd-href]',function(e){
					var url = $(this).attr('gwd-href');
					if(url && url != ""){
						if(_this._options.openTabSavingData){
							var price = getUrlParam(url,"pr");
							var issale = getUrlParam(url,"ms");
							var tp = getUrlParam(url,"tp");
							Extension.sendMessage({greeting:"OPEN_TAB_SAVING_DATA",tUrl:url,price:price,issale:issale,tp:tp,active:true},function(){});
						}else{
							var url = $(this).attr('gwd-href');
							Extension.sendMessage({greeting:'OPEN_TAB',url:url,closest:true,active:true},function(){});	
						}
					}
					var $this = $(this);
					stat.getInfo(3).step = 'click';
					var module = $this.attr('gwd-module') || $this.parents('[gwd-module]').attr('gwd-module');
					var subject = $this.attr('gwd-subject') || $this.parents('[gwd-subject]').attr('gwd-subject');
					if(module){
						stat.pushInfo(3,'module',(subject ? subject+'_':'') + module);
					}else{
						stat.pushInfo(3,'subject',subject);
					}
					stat.run(3);

					// ferri打点 比价点击和推荐点击
					var $element = $(e.target);
					if($element.parent().hasClass('gwd_toolbar_goods_item_pic')){
						var growingTp = 'recom_click';
					}else if($element.parent().hasClass('gwd_toolbar_goods_item_text')){
						var growingTp = 'current_click';
					}
					growingTp&&chrome.extension.sendMessage(
						{
							'greeting':'GROWINGIO_EVENT',
							'type':growingTp,
							'domain':extractUrlDomain(pageUrl)
						},
					$.noop)
					e && e.preventDefault();
				});
				this.activatePopup();
				if (Extension.debug) {
					;(function(con){
						var handler = null;
						var timeout = 300;
						con.on('mouseenter','[gwd-href]',function(e){
							var elem = this;
							handler = setTimeout(function(){
								log("链接地址：",$(elem).attr('gwd-href'))
							},timeout)
						}).on("mouseleave",'[gwd-href]',function(e){
							clearTimeout(handler)
						});
					})(html);
				}
			},
			reset : function(){
				this.getToolbar().remove();
				this.refreshCache();
				this._isActivePopup = false;
			},
			setOptions : function(options){
				if(typeof options != 'string'){
					$.extend(true,this._options, options);
				}
			},
			getOptions :function(){
				return this._options;
			},
			execServerOptions : function(serverOpts,gwd_options, keys){
				try{
//			        var keys = {'show_toolbar':'show', 'show_history':'showHistoryPrice', 'show_small':'showSmall', 'show_bijia':'showBijia', 'show_klhk':'showKLHK', 'show_inset_btn':'showInsetBtn'};
			        var opts = {}, resetcd, server_reset_cd;
			        if(serverOpts['no_enhance_opt'] == 1 && !gwd_options['enhance_opt_noreset']){
			        	gwd_options['enhance_mode_opt'] = 'close';
			        	server_reset_cd = parseInt(serverOpts.enhance_reset_cd);
			        	resetcd = (server_reset_cd < 86400 * 5 && server_reset_cd > 0 ) ? server_reset_cd : 86400;
			        	Extension.updateGwdOptions({'enhance_mode_opt':'close'}, {'enhance_opt_noreset': [((new Date())/1000^0) + resetcd]});
			        }
					if(gwd_options['enhance_mode_opt'] != 'open'){
				        $.each(keys, function(key, val){
                            if(serverOpts[key] == 3){
                            	//强制打开	
                                 opts[val] = true;
                            }else if(serverOpts[key] == 2){
                                 opts[val] = false;
                            }
                        });
				        this.setOptions(opts);
					}
			    }catch(e){
			        log(e);
			    }
			},
			makeComponentContainer : function(){
				return $('<ul class="gwd_toolbar_goods_list"></ul>');
			},
			makeComponent : function(dataArray,guideHtml,type){
				var tp = type=='image' ? type : 'text',
					fnName = tp+'ItemFormatter';
				if(!$.isFunction(this[fnName])){
					fnName = '_'+fnName;
				}
				var formatGuideHtml = $.isFunction(this.guideItemFormatter) ? this.guideItemFormatter : this._guideItemFormatter;
				var con = this.makeComponentContainer();
				con.append(formatGuideHtml.apply(this,[guideHtml]));
				var	i;
				if($.isArray(dataArray)){
					for(i in dataArray){
						con.append(this[fnName](dataArray[i]));
					}
				}
				return con;
			},
			addComponent : function(dataArray, guideHtml, type, usePrepend){
				var flex = this.getFlex();
				var coms = this.getComponents();
				var method,target;
				if (usePrepend) {
					if (coms.length > 0) {
						method = 'insertBefore';
						target = coms.first();
					}else {
						method = 'prependTo';
						target = flex;
					}
				}else{
					if (coms.length > 0) {
						method = 'insertAfter';
						target = coms.last();
					}else {
						method = 'appendTo';
						target = flex;
					}
				}
				return this.makeComponent(dataArray, guideHtml, type)[method](target);
			},
			addDummyComponent : function(dummyNum,guideHtml,type,usePrepend){
				var dummy = this._options.dummy;
				var buffer = [];
				for(var i = 0;i<dummyNum; ++i){
					buffer[buffer.length] = dummy;
				}
				return this.addComponent(buffer,guideHtml,type,usePrepend);
			},
			getComponents : function(){
				return this.getFlex().find('.gwd_toolbar_goods_list');
			},
			refreshCache : function(name){
				if(typeof name == 'string'){
					var name = '.' + name;
					if(name in this){
						this[name] = null;
					}
				}else{
					for(var key in this){
						if(key[0] == '.'){
							this[key] = null;
						}
					}
				}
			},
			getFlex : function(){
				var result;
				if(this['.flex']){
					result = this['.flex'];
				}else{
					result = $('.gwd_toolbar_info');
					if(result.length>0){
						this['.flex'] = result;
					}
				}
				return result;
			},
			getToolbar : function(){
				var result;
				if(this['.toolbar']){
					result = this['.toolbar'];
				}else{
					result = $('.mmz_toolbar_containerX');
					if(result.length>0){
						this['.toolbar'] = result;
					}
				}
				return result;
			},
			calcMaxNum : function(callback){
				var _this = this;
				var loadings = this._loadings.slice();
				this._loadings.length = 0;
				this._loadings.push(
					Promise.all(loadings).then(function(){
						return new Promise(function(resolve,reject){
							var toolbar = _this.getToolbar();
							toolbar.addClass('gwd_toolbar_dummy');
							if(callback){
								setTimeout(function(){
									callback(_this._layouter(true),resolve);
									setTimeout(function(){
										log('操作超时');
										resolve();
									},10000);
								},50);
							}else{
								resolve();	
							}
						});
					})
				);
			},
			show : function(callback){
				var _this = this;
				Promise.all(this._loadings).then(function(){
					_this._loadings.length = 0;
					if (_this._options.show && (_this._options.showWhenEmpty || _this.getFlex().children().length > 0)) {
						_this.initShrink("展开喵喵折");
						var toolbar = _this.getToolbar();
						toolbar.addClass('gwd_toolbar_dummy');
						setTimeout(function(){
							var layouter = _this.getLayouter();
							var tasks = [];
							if (_this._options.showAfterImgReady) {
								toolbar.find('img').each(function(i, image){
									tasks[tasks.length] = new Promise(function(s, f){
										if (image.complete) {
											s();
										}
										else {
											image.onload = s;
										}
									})
								});
							}
							Promise.all(tasks).then(function(){
								layouter.apply(_this);
								Extension.getGwdOptions(function(options,optionsTemp){
								    /*
									if(optionsTemp["newbrand_anim"] && optionsTemp["newbrand_anim"].length < 3){
										optionsTemp["newbrand_anim"] =  null;
									}
									*/
									var classname = 'gwd_ns_newbrand';
									/*
									var today = MiTools.getDateStr();
									if(!optionsTemp["newbrand_anim"] || ((optionsTemp["newbrand_anim"][0] != today || optionsTemp["newbrand_anim"][1] < 3) && optionsTemp["newbrand_anim"][2] < 7)){
										classname = 'gwd_ns_anim';
										var todayCnt = (optionsTemp["newbrand_anim"] && optionsTemp["newbrand_anim"][0] == today) ? ++optionsTemp["newbrand_anim"][1] : 1;  
										var totalCnt = optionsTemp["newbrand_anim"] ? optionsTemp["newbrand_anim"][0] == today ? optionsTemp["newbrand_anim"][2] : ++optionsTemp["newbrand_anim"][2] : 1;
										Extension.updateGwdOptions(null,{'newbrand_anim':[today, todayCnt, totalCnt] });
									}
									*/
									_this.find('.gwd_toolbar_logo').addClass(classname);
								});
									
								toolbar.removeClass('gwd_toolbar_dummy').show().removeClass("gwd_toolbar_container_shrink");
								setTimeout(function(){
									toolbar.addClass('gwd_toolbar_no_transition');
								}, 500);
								(function(_this, layouter){
									var handler = null;
									$(window).resize(function(){
										clearTimeout(handler);
										handler = setTimeout(function(){
											//toolbar.addClass('gwd_toolbar_no_transition');
											layouter.apply(_this);
										//toolbar.removeClass('gwd_toolbar_no_transition');
										}, 30);
									});
								})(_this, layouter);
								//统计
								stat.pushInfo(1, 'step', 'show');
								var names = ['subject', 'module'];
								$.each(names, function(i, name){
									var fullname = 'gwd-' + name;
									_this.getToolbar().find('[' + fullname + ']').each(function(i, elem){
										var $elem = $(elem);
										if (MiTools.elemIsVisible($elem)) {
											stat.pushInfo(1, name, $elem.attr(fullname));
										}
									});
								});
								stat.run(1);
								// ferri打点，淘宝，天猫等在mmz 2.0.0.6版本需增强模式才能展示条，判断是否开启增强模式
								var isAli = document.domain;
								if(isAli.indexOf('taobao')>=0||isAli.indexOf('tmall')>=0){

									chrome.extension.sendMessage(
									{
										'greeting':'BAR_IS_SHOW',
										'show':true,
									},
									$.noop)

								}
								callback && setTimeout(callback, 100);
							})['catch'](function(e){
								log(e)
							});
						}, 50);
					}else{
						_this.reset();
						_this.initShrink('无比价');
					}
				})
			},
			addToolbarClass : function(cls){
				this.getToolbar().addClass(cls);
			},
			//主要用来获得和复用默认方法
			getDefaultFormatter : function(type){
				var formatter = null;
				switch(type){
					case 'guide':
					case 'text':
					case 'image':
						formatter = this['_'+type+'ItemFormatter'];
						break;
					default:
						throw new Error('unknown formatter type');
						break;
				}
				return formatter;
			},
			setFormatter :function(type,formatter){
				if(typeof type == 'object'){
					for(var key in type){
						this.setFormatter(key,type[key]);
					}
				}else{
					switch(type){
						case 'guide':
						case 'text':
						case 'image':
							this[type+'ItemFormatter'] = formatter;
							break;
						default:
							throw new Error('unknown formatter type: '+type);
							break;
					};
				}
			},
			setLayouter : function(layouter){
				this.layouter = layouter;
			},
			getLayouter : function(){
				return $.isFunction(this.layouter) ? this.layouter : this._layouter;
			},
			loadYHQ : function(callback,type){
			//	var pageUrl = "http://www.lefeng.com";
				var _this = this;
				var holder = $('<div class="gwd_toolbar_underline_box gwd_toolbar_discount_coupon" gwd-subject="quan">\
		                        	<div class="gwd_toolbar_assist_item_info">\
		                        		<span class="discount_coupon_logo" style="background-image:url('+backgroundImg+')"></span>\
		                                <span class="discount_coupon_word">优惠券</span>\
		                            </div>\
		                        </div>').appendTo(this.getFlex());
				this._loadings.push(new Promise(function(resolve,reject){
					Extension.ajax({
						type :'GET',
						cache: false,
						url : gwdHttps+'api.html?path1=qihoo-mall-goodsinfo&path2=yhq&url='+encodeURIComponent(pageUrl)+(type ? '&casetype='+type : ''),
						async: true,
						timeout : 5000,
						dataType : 'json'
					},function(info){
						if(info){
							if( info.RC == 2 ){
								holder.remove();
								resolve();
								return false;
							}
							var moreHref = "http://youhui.360.cn/couponsearch.html?";
							try{
								if(info.yinfo.data[0].bid == null){
									moreHref += 'bid='+info.yinfo.data[0].bid;
								}else{
									moreHref += 'keyword='+encodeURIComponent(info.yinfo.shopName);
								}
							}catch(e){
								moreHref += 'keyword='+encodeURIComponent(info.yinfo.shopName);
							}
							var showMore = type=="tuan" ? '<a class="gwd_quan_more" target="_blank" href="'+moreHref+'">更多>></a>' : '';
							var insertHtml ='<div class="gwd_quan_info gwd_toolbar_assist_popbox">\
												<h1 class="gwd_quan_header">'+info.yinfo.shopName+'优惠券'+showMore+'</h1>\
												<ul class="gwd_quan_list">';
							var quanItems = info.yinfo.data;
							var quanMaxLen = type=="tuan"? 1 : quanItems.length;
							for(var i=0;i<quanMaxLen;i++){
								var item = quanItems[i];
								var htmlTestOne = '';
								var htmlTestTwo = '';
								if( item.type == 1 ){
									htmlTestOne='<span class="gwd_quan_reduce_small">满<em>'+item.typeinf[0]+'</em>减<em>'+item.typeinf[1]+'</em></span>，';
									htmlTestTwo='<p class="gwd_quan_reduce_big">满<em>'+item.typeinf[0]+'</em>减<em>'+item.typeinf[1]+'</em></p>';
									if( i==0 ){
										$(".gwd_toolbar_discount_coupon .discount_coupon_word").html('满<em>'+item.typeinf[0]+'</em>减<em>'+item.typeinf[1]+'</em>');
									}
								}else if( item.type == 2 ){
									htmlTestOne='<span class="gwd_quan_reduce_small">立减<em>'+item.typeinf[0]+'</em>元</span>，';
									htmlTestTwo='<p class="gwd_quan_reduce_big">立减<em>'+item.typeinf[0]+'</em>元</p>';
									if( i==0 ){
										$(".gwd_toolbar_discount_coupon .discount_coupon_word").html('立减<em>'+item.typeinf[0]+'</em>元');
									}
								}
								var islastClassName = "";
								if( i==quanItems.length-1 ){
									islastClassName = "gwd_quan_last";
								}
								insertHtml+='<li class="gwd_quan_item '+islastClassName+'" id="'+(i==0?"gwd_quan_item_have_hover":"")+'">\
												<a href="'+item.url+'" target="_blank">\
													<div class="gwd_quan_unfold">\
														<span class="gwd_quan_source '+(item.privilege?"":"gwd_hide")+'">['+item.privilege+']</span>\
														'+htmlTestOne+'\
														<span class="gwd_quan_use">'+item.effectiveRange+'</span>\
													</div>\
													<div class="gwd_quan_fold">\
														<div class="gwd_quan_icon '+(item.privilegePinyin?"gwd_quan_"+item.privilegePinyin:"gwd_hide")+'" style="background-image:url('+backgroundImg+')"></div>\
														<div class="gwd_quan_left">\
															<div class="gwd_quan_shopLogo">\
																<img src="'+item.shopLogo+'">\
															</div>\
															<div class="gwd_quan_get" style="background-image:url('+backgroundImg+')"></div>\
														</div>\
														<div class="gwd_quan_right" style="background-image:url('+backgroundImg+')">\
															'+htmlTestTwo+'\
															<p class="gwd_quan_detail">使用范围：'+item.effectiveRange+'</p>\
															<p class="gwd_quan_detail">有效期至：'+item.expirationDate+'</p>\
														</div>\
													</div>\
												</a>\
											</li>';
							}
							insertHtml+='</ul>\
									</div>';
							if( insertHtml && insertHtml != "" ){
								gl_commercialStat.coupon = 1;
								holder.append(insertHtml);
								callback && callback();
							}
							$(".gwd_quan_list").on("mouseenter",".gwd_quan_item",function(){
								if( $(this).attr("id") == "gwd_quan_item_have_hover" ){
									return true;
								}else{
									$(".gwd_quan_list #gwd_quan_item_have_hover").attr("id","");
									$(this).attr("id","gwd_quan_item_have_hover");
								}
							});
						}else{
							log("优惠券接口请求超时");
							holder.remove();
						}
						resolve();
					});
				})['catch'](function(e){
					log(e);
					holder.remove();
				}));
			},
			//加载海淘订单
			loadHaitaoList:function(){
				var holder = $('<div class="gwd_ns_haitao_list gwd_toolbar_underline_box">\
								<a href="http://www.henzan.com/my?act=haitao" target="_blank" class="gwd_toolbar_assist_item_info">\
									<div class="gwd_toolbar_haitao_list_logo" style="background-image:url('+backgroundImg+')"></div>\
		                    		<div class="gwd_toolbar_haitao_list_words gwd_font_black">海淘订单</div>\
	                    		</a>\
							</div>');
				holder.appendTo(this.getFlex());

			},
			//加载海淘模块
			loadHaitao : function(datas){				
				var _this = this;
				var saved_goods_info = null; // {data:, t:, page_info}
				var holder = $('<div class="gwd_ns_haitao gwd_toolbar_underline_box" title="" gwd-subject="haitao">\
				                    <div class="gwd_toolbar_assist_item_info">\
										<div class="gwd_toolbar_haitao_logo" style="background-image:url('+backgroundImg+')"></div>\
				                    	<div class="gwd_toolbar_haitao_words gwd_font_black">海淘购物车</div>\
				                    	<div class="gwd_toolbar_haitao_num gwd_hide"></div>\
				                    	<div class="gwd_toolbar_haitao_cart_add" style="opacity:0;">1</div>\
			                    	</div>\
			                    	<div id="gwd_haitao_popup" class="gwd_toolbar_assist_popbox">\
										<div class="gwd_toolbar_haitao_title">喵喵折一键海淘<i class="gwd_toolbar_haitao_close"  style="background-image:url('+backgroundImg+')"></i></div>\
										<div class="gwd_toolbar_haitao_hd">\
											<span class="gwd_toolbar_haitao_pagi gwd_ns_goods gwd_ns_selected">当前商品</span>\
											<span class="gwd_toolbar_haitao_pagi gwd_ns_cart">购物车<em class="gwd_toolbar_haitao_cart_num gwd_hide"></em></span>\
											<span class="gwd_toolbar_haitao_link"><a href="http://www.henzan.com/mmz/haitao" target="_blank">海淘帮助</a></span>\
											<i class="gwd_ns_spt"></i>\
											<span class="gwd_toolbar_haitao_link"><a href="http://www.henzan.com/my?act=haitao" target="_blank">订单查询</a></span>\
										</div>\
										<div class="gwd_toolbar_haitao_bd">\
											<div class="gwd_toolbar_haitao_goods_cont gwd_ns_selected">\
												<div class="gwd_toolbar_haitao_info gwd_ns_loading">\
													<div class="gwd_toolbar_haitao_loading_anim">\
														<div class="gwd_toolbar_haitao_loading_anim_wrapper gwd_ns_left"><div class="gwd_toolbar_haitao_loading_anim_part"></div></div>\
														<div class="gwd_toolbar_haitao_loading_anim_wrapper gwd_ns_right"><div class="gwd_toolbar_haitao_loading_anim_part"></div></div>\
													</div>\
													<span class="gwd_toolbar_haitao_info_warn">加载中...</span>\
												</div>\
												<div class="gwd_toolbar_haitao_info gwd_ns_fail">\
													<span class="gwd_toolbar_haitao_fail_icon" style="background-image:url('+backgroundImg+')"></span>\
													<span class="gwd_toolbar_haitao_info_hint">加载失败，请重试</span>\
													<span class="gwd_toolbar_haitao_info_normal"><span class="gwd_toolbar_haitao_btn gwd_ns_retry">重新加载</span></span>\
												</div>\
												<div class="gwd_toolbar_haitao_info gwd_ns_soldout">\
													<span class="gwd_toolbar_haitao_info_warn">您购买的商品无货了。</span>\
													<span class="gwd_toolbar_haitao_info_normal">提示：</span>\
													<span class="gwd_toolbar_haitao_info_normal">您购买的商品目前处于缺货状态无法购买。</span>\
												</div>\
												<div class="gwd_toolbar_haitao_info gwd_ns_forbidden">\
													<span class="gwd_toolbar_haitao_info_normal">抱歉，因海关禁运，该商品无法一键海淘。</span>\
													<span class="gwd_toolbar_haitao_info_help"><a href="http://www.henzan.com/mmz/haitao#contraband" target="_blank">查看禁运物品说明</a></span>\
												</div>\
												<div class="gwd_toolbar_haitao_info gwd_ns_nospec">\
													<span class="gwd_toolbar_haitao_info_warn">您还没有选择好尺码信息。</span>\
													<span class="gwd_toolbar_haitao_info_normal">提示：</span>\
													<span class="gwd_toolbar_haitao_info_normal">在当前网页上选择好尺码信息后再点击“一键海淘”。</span>\
													<span class="gwd_toolbar_haitao_info_help">不会选尺码，点击<a href="http://www.henzan.com/mmz/haitao#size-chart" target="_blank">“尺码助手”</a>。</span>\
												</div>\
												<div class="gwd_toolbar_haitao_info gwd_ns_overlimit">\
													<span class="gwd_toolbar_haitao_info_warn">您的购买金额超过限制。</span>\
													<span class="gwd_toolbar_haitao_info_normal">提示：</span>\
													<span class="gwd_toolbar_haitao_info_normal">商品金额过高，只支持1万元以内商品。</span>\
													<span class="gwd_toolbar_haitao_info_help">喵喵折提供最高2000元的赔付，<a href="http://www.henzan.com/mmz/haitao#losing-table" target="_blank">点此查看具体政策</a>。</span>\
												</div>\
												<div class="gwd_toolbar_haitao_goods">\
													<div class="gwd_toolbar_haitao_ginfo gwd_ns_name"><span class="gwd_toolbar_haitao_ginfo_key">商品名 :</span><span class="gwd_toolbar_haitao_ginfo_value"></span></div>\
													<div class="gwd_toolbar_haitao_ginfo gwd_ns_size"><span class="gwd_toolbar_haitao_ginfo_key">规格 :</span><span class="gwd_toolbar_haitao_ginfo_value"></span></div>\
													<div class="gwd_toolbar_haitao_ginfo gwd_ns_price"><span class="gwd_toolbar_haitao_ginfo_key">商家价格 :</span><span class="gwd_toolbar_haitao_ginfo_value gwd_ns_price"></span></div>\
													<div class="gwd_toolbar_haitao_ginfo gwd_ns_freight"><span class="gwd_toolbar_haitao_ginfo_key">官方运费 :</span><span class="gwd_toolbar_haitao_ginfo_value gwd_ns_price"></span></div>\
													<div class="gwd_toolbar_haitao_ginfo gwd_ns_transfee"><span class="gwd_toolbar_haitao_ginfo_key">转运费 :</span><span class="gwd_toolbar_haitao_ginfo_value gwd_ns_price"><span></span><span class="gwd_toolbar_haitao_link"><a href="http://www.henzan.com/mmz/haitao#transit-charge" target="_blank">（转运费说明）</a></span></span></div>\
													<div class="gwd_toolbar_haitao_ginfo gwd_ns_duty"><span class="gwd_toolbar_haitao_ginfo_key">关税 :</span><span class="gwd_toolbar_haitao_ginfo_value gwd_ns_price"><span></span><span class="gwd_toolbar_haitao_link"><a href="http://www.henzan.com/mmz/haitao#tariff" target="_blank">（关税说明）</a></span></span></div>\
													<div class="gwd_toolbar_haitao_ginfo gwd_ns_total"><span class="gwd_toolbar_haitao_ginfo_key">到手价 :</span><span class="gwd_toolbar_haitao_ginfo_value gwd_ns_price"></span></div>\
													<div class="gwd_toolbar_haitao_ginfo gwd_ns_quantity"><span class="gwd_toolbar_haitao_ginfo_key">购买数量 :</span><span class="gwd_toolbar_haitao_ginfo_value"><select></select><span class="gwd_toolbar_haitao_hint"></span></span></div>\
													<div class="gwd_toolbar_haitao_ginfo gwd_ns_eta"><span class="gwd_toolbar_haitao_ginfo_key">预计到货 :</span><span class="gwd_toolbar_haitao_ginfo_value"></span></div>\
													<div class="gwd_toolbar_haitao_opts"><span class="gwd_toolbar_haitao_btn gwd_ns_checkout">立即结算</span><span class="gwd_toolbar_haitao_btn gwd_ns_addcart">加入购物车</span><span class="gwd_toolbar_haitao_hint"></span></div>\
												</div>\
											</div>\
											<div class="gwd_toolbar_haitao_cart_cont">\
												<div class="gwd_toolbar_haitao_info gwd_ns_cartempty gwd_hide">\
													<span class="gwd_toolbar_haitao_info_normal">购物车内还没有东西，在购物网站访问您喜欢的商品，然后再点击一键海淘放入购物车内。</span>\
													<span class="gwd_toolbar_haitao_info_normal">注意购物车只会显示当前正在浏览的购物网站上的商品。</span>\
													<span class="gwd_toolbar_haitao_info_help"><a href="http://www.henzan.com/mmz/haitao#haitao-help" target="_blank">喵喵折一键海淘说明</a></span>\
												</div>\
												<div class="gwd_toolbar_haitao_cart">\
													<div class="gwd_toolbar_haitao_cart_items">\
													</div>\
													<div class="gwd_toolbar_haitao_opts"><span class="gwd_toolbar_haitao_btn gwd_ns_checkout">立即结算</span><span class="gwd_toolbar_haitao_hint">注意：仅显示当前停留网站的商品。</span></div>\
												</div>\
											</div>\
										</div>\
									</div>\
			                    </div>');
				holder.appendTo(this.getFlex());
				
				holder.find('#gwd_haitao_popup').on('click', '.gwd_toolbar_haitao_pagi.gwd_ns_goods', function(){
					showGoodsPage();
					return false;
				}).on('click', '.gwd_toolbar_haitao_pagi.gwd_ns_cart', function(){
					switchCartInfo();
					showCartPage();
					requestCartInfo(function(datas){
						if( !datas ){
							return;
						}
						updateCartNum(datas);
						if( datas.length ){
							updateCart(datas);
						}else{
							switchCartInfo(holder, true);
						}
					});
					return false;
				}).on('click', '.gwd_toolbar_haitao_close', function(){
					holder.find('#gwd_haitao_popup').hide().trigger('mmz-hover-hide');
					return false;
				}).on('click', '.gwd_toolbar_haitao_btn.gwd_ns_addcart', function(){
					//加入购物车
					var $cont = holder.find('.gwd_toolbar_haitao_goods_cont');
					var buy_num = $cont.find('.gwd_ns_quantity .gwd_toolbar_haitao_ginfo_value select').val();
					buy_num = buy_num > 1 ? window.parseInt(buy_num) : 1;
					
					var goods = getFormattedGoodsData( buy_num );
					addToCart(goods, function(result){
						if( !result ){
							return;
						}
						if( result.success && result.data ){
							holder.find('.gwd_toolbar_haitao_pagi.gwd_ns_cart').click();
						}else if( result.data ){
							var $hint = $cont.find('.gwd_toolbar_haitao_opts .gwd_toolbar_haitao_hint');
							if( result.status == 'numMax' ){
								$hint.text('购物车中的该物品数量不能超过10个');
							}else if( result.status == 'cartMax' ){
								$hint.text('购物车中的物品不能超过10种');
							}
						}else{
							switchGoodsInfo(1);
						}
					});
					return false;
				}).on('click', '.gwd_toolbar_haitao_goods .gwd_ns_checkout', function(){
					//立即结算（单品）
					var buy_num = holder.find('.gwd_toolbar_haitao_goods_cont .gwd_ns_quantity .gwd_toolbar_haitao_ginfo_value select').val();
					buy_num = buy_num > 1 ? window.parseInt(buy_num) : 1;
					
					var goods = getFormattedGoodsData( buy_num );
					if( goods ){
						openCheckoutPage( goods, function(res){
							if(res && res.success){
								holder.find('#gwd_haitao_popup').trigger('mouseleave');
							}else if(res && res.over_cost_limit){
								switchGoodsInfo(5);
							}else{
								switchGoodsInfo(1);
							}
						});
					}else{
						switchGoodsInfo(1);
					}
					return false;
				}).on('click', '.gwd_toolbar_haitao_cart .gwd_ns_checkout', function(){
					//立即结算（购物车）
					openCheckoutPage( null, function(res){
						if(res && res.success){
							holder.find('#gwd_haitao_popup').trigger('mouseleave');
						}else if(res && res.over_cost_limit){
							switchGoodsInfo(5);
							showGoodsPage();
						}else{
							switchGoodsInfo(1);
							showGoodsPage();
						}
					});
					return false;
				}).on('click', '.gwd_toolbar_haitao_btn.gwd_ns_retry', function(){
					//失败重试
//					holder.find('#gwd_haitao_popup').trigger('mmz-hover-show');
					render();
					return false;
				}).on('click', '.gwd_toolbar_haitao_cart_delete', function(e){
					var $item = $(e.target).parents('.gwd_toolbar_haitao_cart_item').eq(0);
					var id = $item.data('htid') || '';
					removeFromCart(id, function(datas){
						if( !datas ){
							return;
						}
						updateCartNum(datas);
						$item.hide();
						if( !datas.length ){
							switchCartInfo(true);
						}
					});
					return false;
				}).on('mmz-hover-show',function(){
					requestCartInfo(function(datas){
						updateCartNum(datas);
						holder.find('.gwd_toolbar_haitao_num').addClass('gwd_hide');
					});
					// showGoodsPage();
					showCartPage();
					_this.haitao.render();
					return false;
				}).on('mmz-hover-hide', function(){
					var $chartNum = holder.find('.gwd_toolbar_haitao_num');
					var num = $chartNum.text();
					if( num ){
						$chartNum.removeClass('gwd_hide');
					}
					// showGoodsPage();
					showCartPage();
					var $cont = holder.find('.gwd_toolbar_haitao_goods_cont');
					$cont.find('.gwd_toolbar_haitao_opts .gwd_toolbar_haitao_info_hint').text('');
					return false;
				});
				//默认展示购物车一览
				holder.find('.gwd_toolbar_haitao_pagi.gwd_ns_cart').click();
				/**
				 * 显示商品页
				 */
				function showGoodsPage(){
					holder.find('.gwd_toolbar_haitao_pagi.gwd_ns_cart, .gwd_toolbar_haitao_cart_cont').removeClass('gwd_ns_selected');
					holder.find('.gwd_toolbar_haitao_pagi.gwd_ns_goods, .gwd_toolbar_haitao_goods_cont').addClass('gwd_ns_selected');
				}
				/**
				 * 显示购物车页
				 */
				function showCartPage(){
					holder.find('.gwd_toolbar_haitao_pagi.gwd_ns_goods, .gwd_toolbar_haitao_goods_cont').removeClass('gwd_ns_selected');
					holder.find('.gwd_toolbar_haitao_pagi.gwd_ns_cart, .gwd_toolbar_haitao_cart_cont').addClass('gwd_ns_selected');
				}
				/**
				 * 切换展示 提示/商品信息
				 */
				function switchGoodsInfo(index){
					//index:  null(default)-main	0-加载中    1-失败   2-缺货  3-违禁  4-缺少尺码  5-金额太大
					var $cont = holder.find('.gwd_toolbar_haitao_goods_cont');
					if( index == null ){
						$cont.find('.gwd_toolbar_haitao_info').addClass('gwd_hide');
						$cont.find('.gwd_toolbar_haitao_goods').removeClass('gwd_hide');
					}else{
						$cont.find('.gwd_toolbar_haitao_goods').addClass('gwd_hide');
						$cont.find('.gwd_toolbar_haitao_info').addClass('gwd_hide').eq(index).removeClass('gwd_hide');	
					}
					$cont.find('.gwd_toolbar_haitao_opts .gwd_toolbar_haitao_hint').text('');
				}
				/**
				 * 刷新购物车数量
				 */
				function updateCartNum(datas){
					var $cont = holder.find('.gwd_toolbar_haitao_cart_num,.gwd_toolbar_haitao_num');
					if( !datas || !datas.length ){
						$cont.text('').addClass('gwd_hide');
					}else{
						if( datas.length < 10 ){
							$cont.removeClass('gwd_ns_max');							
						}else{
							$cont.addClass('gwd_ns_max');
						}
						var num = 0;
						for (var i = 0; i < datas.length; i++){
							if( datas[i].buy_num ){
								num = datas[i].buy_num + num;
							}
						}
						if( num ){
							$cont.text( num ).removeClass('gwd_hide');
						}
					}
				}
				/**
				 * 刷新购物车信息展示
				 */
				function updateCart( datas ){
					if( !datas || !datas.length ){
						return;
					}
					var $cont = holder.find('.gwd_toolbar_haitao_cart_items');
					var html = '';
					var i, data, info, price;
					for( i = datas.length - 1; i >= 0; --i ){
						data = datas[i];
						info = data['goods_info'];
						if( !data || !(info.goods_price > 0) || !(data.buy_num > 0)){
							continue;
						}
						price = '¥' + MiTools.getPrFix(info.goods_price) + ' × ' + window.parseInt(data.buy_num);
						html += '<div class="gwd_toolbar_haitao_cart_item" data-htid="'+data.haitao_id+'">\
									<div class="gwd_toolbar_haitao_gpic '+(info.pic_url?'':'gwd_ns_nopic')+'"><a target = "_blank" href="'+(data.source_url||'')+'"><img src="'+(info.pic_url||'http://img1.miaomiaoz.com/image/b1502fb330bfb7b17bf46b481468bb62.png')+'"></a></div>\
									<div class="gwd_toolbar_haitao_ginfo gwd_ns_name"><a target="_blank" href ="'+(data.source_url||'')+'">'+(info.product_name||'')+'</a></div>\
									<div class="gwd_toolbar_haitao_ginfo gwd_ns_size"><span class="gwd_toolbar_haitao_ginfo_key">规格 :</span><span class="gwd_toolbar_haitao_ginfo_value">'+(info.spec_name_desc||'标配')+'</span></div>\
									<div class="gwd_toolbar_haitao_ginfo gwd_ns_total"><span class="gwd_toolbar_haitao_ginfo_key">价格 :</span><span class="gwd_toolbar_haitao_ginfo_value gwd_ns_price">'+price+'</span></div>\
									<i class="gwd_toolbar_haitao_cart_delete" style="background-image:url('+backgroundImg+')"></i>\
								</div>';
					}
//					$cont.find('.gwd_toolbar_haitao_cart_items').detach().html( html ).prependTo($cont);
					$cont.html( html );
					holder.find('.gwd_toolbar_haitao_cart .gwd_toolbar_haitao_opts').removeClass('gwd_hide');
				}
				/**
				 * 切换显示购物车为空提示
				 */
				function switchCartInfo(is_show_hint){
					var $cont = holder.find('.gwd_toolbar_haitao_cart_cont');
					if( !is_show_hint ){
						$cont.find('.gwd_toolbar_haitao_opts, .gwd_toolbar_haitao_info').addClass('gwd_hide');
						$cont.find('.gwd_toolbar_haitao_cart_items').empty();
					}else{
						$cont.find('.gwd_toolbar_haitao_info').removeClass('gwd_hide');
					}
				}
				/**
				 * 刷新商品信息展示
				 */
				function updateGoods( data ){
					if( !data ){
						return;
					}
					var $cont = holder.find('.gwd_toolbar_haitao_goods_cont');
					var i, tmp, max;
					
					$cont.find('.gwd_ns_name .gwd_toolbar_haitao_ginfo_value').text(data.product_name || '');
					$cont.find('.gwd_ns_size .gwd_toolbar_haitao_ginfo_value').text(data.spec_name_desc || '标配');
					$cont.find('.gwd_ns_price .gwd_toolbar_haitao_ginfo_value').text( '¥' + MiTools.getPrFix(data.goods_price) );
					$cont.find('.gwd_ns_freight .gwd_toolbar_haitao_ginfo_value').text( '¥' + MiTools.getPrFix(data.official_postage) );
					$cont.find('.gwd_ns_transfee .gwd_toolbar_haitao_ginfo_value span:eq(0)').text( '¥' + MiTools.getPrFix(data.international_postage) );
					$cont.find('.gwd_ns_total .gwd_toolbar_haitao_ginfo_value').text( '¥' + MiTools.getPrFix(data.total_cost) );
					$cont.find('.gwd_ns_eta .gwd_toolbar_haitao_ginfo_value').text( data.arrive_time||'暂时无法预估' );
					
					if( !data.tax_fee && data.tax_original_fee > 0 ){
						$cont.find('.gwd_ns_duty .gwd_toolbar_haitao_ginfo_value span').eq(1).find('a').text('（免关税）')
							.end().end().eq(0).addClass('gwd_price_del').text( '¥' + MiTools.getPrFix(data.tax_original_fee) );
					}else{
						$cont.find('.gwd_ns_duty .gwd_toolbar_haitao_ginfo_value span').eq(1).find('a').text('（关税说明）')
						.end().end().eq(0).removeClass('gwd_price_del').text( '¥' + MiTools.getPrFix(data.tax_fee) );
					}
					
					max = window.parseInt(data.max_buy_num);
					max = max < 10 ? max : 10;
					if( max > 0){
						tmp = '<option value="1" selected>1</option>';
						for(i=2; i <= max; ++i){
							tmp += '<option value="' + i + '">' + i + '</option>';
						}
						
						$cont.find('.gwd_ns_quantity .gwd_toolbar_haitao_ginfo_value').find('.gwd_toolbar_haitao_hint').text(data.max_buy_num > 10 ? '货源充足' : '最多'+max+'件')
							.end().find('select').html(tmp).prop('disabled',false);
					}else{
						$cont.find('.gwd_ns_quantity .gwd_toolbar_haitao_ginfo_value').find('.gwd_toolbar_haitao_hint').text('暂无供货')
							.end().find('select').empty().prop('disabled',true);
					}
				}
				/**
				 * 商品从购物车删除
				 */
				function removeFromCart(id, callback){
					Extension.sendMessage({greeting:'MINUS_HAITAO_CART', goods_id: id, domain: domain}, function(items){
						callback && callback(items);
					});
				}
				function getFormattedGoodsData( buy_num ){
					var data;
					var goods = saved_goods_info && saved_goods_info.data;
					if( goods && goods.product_status == 1 && goods.match_type == 1 && goods.product_detail && goods.product_detail.goods_id ){
						data = {};
						data.haitao_id = goods.product_detail.goods_id;
						data.buy_num = buy_num;
						data.dsb_url = goods.product_url;
						data.source_url = goods.origin_url;
						data.goods_info = goods.product_detail;
					}else{
						data = null;
					}
					return data;
				}
				/**
				 * 商品加入购物车
				 */
				function addToCart( goods, callback ){
					if( goods ){
						Extension.sendMessage({greeting:'ADD_HAITAO_CART', goods: goods, domain: domain}, function(result){
							callback && callback(result);
						});
					}else{
						setTimeout(function(){
							callback && callback({success: false});
						}, 0);
					}
				}
				function openCheckoutPage( goods_info, callback ){
					Extension.sendMessage({greeting: 'OPEN_HAITAO_CHECKOUT', goods: goods_info, domain: domain}, function(res){
						callback && callback(res);
					});
				}
				/**
				 * 获取购物车信息
				 */
				function requestCartInfo( callback ){
					Extension.sendMessage({greeting: 'GET_HAITAO_CART', domain: domain}, function( items ){
						callback && callback(items);
					});
				}
				//ferri 存储最近一次goods_info接口请求时间
				var recentAjaxTime;
				/**
				 * 获取海淘商品信息
				 */
				function requestGoodsInfo(page_info, callback, no_cache ,isFirst ){
					var t = new Date().getTime();
					var req_interval = 600000;
					recentAjaxTime = t;

					var clean_page_info = {url:window.location.href||''};
					var keys = ['ht_sku','ht_category','ht_source','ht_brand','ht_spec','price'];
					var chk_keys = ['url','ht_sku','ht_spec'];
					var page_not_changed = true;
					var k, i;
					for(i in keys){
						k = keys[i];
						if( (k in page_info) && page_info[k] != null ){
							clean_page_info[k] = (''+page_info[k]).split('|||')[0];
						}else{
							clean_page_info[k] = '';
						}
					}
					if( saved_goods_info && saved_goods_info.page_info ){
						for(i in chk_keys){
							k = chk_keys[i];
							if( clean_page_info[k] !== saved_goods_info.page_info[k] ){
								page_not_changed = false;
								break;
							}
						}
					}
					if( !no_cache
						&& page_not_changed
						&& saved_goods_info 
						&& saved_goods_info.data 
						&& saved_goods_info.isFirst == !!isFirst
						&& t - saved_goods_info.t < req_interval
						//没库存情况没做缓存
						&& page_info.isSale
					){
						//走缓存
						setTimeout(function(){
							callback && callback(saved_goods_info.data,true);
						},0);
					}else{
						Extension.sendMessage({greeting: 'GET_MID'}, function( mid ){
							if( mid ){
								//有库存的情况下请求
								if( page_info.isSale ){
									var link = window.location.href;
									var params = {
										link: clean_page_info['url'],
										mid: mid,
										sku: clean_page_info['ht_sku'],
										brand: clean_page_info['ht_brand'],
										cat: clean_page_info['ht_category'],
										source: clean_page_info['ht_source'],
										spec: clean_page_info['ht_spec']
									};
									//走接口1加载不用传递is_upd参数,但是需要传递price字段可以返回预估价
									if( !isFirst ){
										params.is_upd = 1;
									}else{
										params.price = clean_page_info['price'];
									}
									Extension.ajax({
										url: 'http://www.henzan.com/api/haitao/goods_info',
										type: 'POST',
										data: params,
										dataType: 'json',
										async: true,
										timeout: 10000
									}, function(res){
										//如果请求返回时间过长而且产生了下次请求，那么这次请求返回数据不作处理
										if( recentAjaxTime && t <  recentAjaxTime ){
											return;
										}								
										var data = (res && res.RC == 1 && res.data) || null;
										if( data ){
											data.origin_url = link;
										}
										if( data && ( data.product_detail || data.product_detail_estimate )){
											var info = data.product_detail || data.product_detail_estimate;
											var price_keys = [
								                  'goods_price',
								                  'official_postage',
								                  'international_postage',
								                  'tax_fee'
							                  ];
											var i, tmp;
											info.total_cost = 0;
											for(i in price_keys){
												tmp = price_keys[i];
												if( info[tmp] > 0 ){
													info[tmp] = info[tmp]/100;
												}else{
													info[tmp] = 0;
												}
												info.total_cost += info[tmp];
											}
											//不计算总价的keys
											price_keys = [
										                  'goods_original_price',
										                  'official_original_postage',
										                  'internationall_original_postage',
										                  'tax_original_fee'
										                  ];
											for(i in price_keys){
												tmp = price_keys[i];
												if( info[tmp] > 0 ){
													info[tmp] = info[tmp]/100;
												}else{
													info[tmp] = 0;
												}
											}
											info.weight = info.weight > 0 ? info.weight/1000 : 0;
											info.arrive_time = data.arrive_time || '';
											//缓存
											saved_goods_info = {
												t: t,
												data: data,
												page_info: clean_page_info
											};
											if( isFirst ){
												saved_goods_info.isFirst = true;
											}else{
												saved_goods_info.isFirst = false;
											}
										}else{
											saved_goods_info = null;
										}
										callback && callback(data);
									});
								}else{
									var data = {};
									data.product_status = 5;
									setTimeout(function(){
										callback && callback(data)
									},0);
								}
							}else{
								saved_goods_info = null;
								callback && callback(null);
							}
						});
					}
				}
				
				/**
				 * 刷新海淘
				 */
				var saved_render_info;
				var lock = false;
				function render(page_info, callback ,isFirst){
					//ferri 在hover请求接口2时，判断之前请求是否加载完毕
					if( !isFirst && lock){
                        callback && callback();
						return;
					}
					if( page_info == null ){
						page_info = saved_render_info;
					}else if( $.isFunction(page_info) ){
						page_info = saved_render_info;
						callback = page_info;
					}
					if( !page_info ){
                        callback && callback();
						return;
					}
					lock = true;
					saved_render_info = page_info;

					var btn = _this.haitao_btn;

					try{
						//统一请求数据，然后分别处理内置按钮跟比价条伤的逻辑
						if( page_info.ht_sku ){
							//第一次加载页面只需要渲染btn上的价格
							if( isFirst ){
								if( btn ){
									btn.switchBtnInfo(0);
								}
								requestGoodsInfo(page_info, function(data){
									var cost_limit = 12000;
									if( !data ){									
										if( btn ){
											btn.switchBtnInfo(-1);
										}
									}else if( data.product_status == 4 ){										
										if( btn ){
											btn.switchBtnInfo(-2);
										}
									}else if( data.product_status == 5 ){
										if( btn ){
											btn.switchBtnInfo(-2);
										}
									}else if( data.product_detail && data.match_type == 1 ){
										btn && btn.switchBtnInfo(data.product_detail.goods_price);
									}else if( data.product_detail_estimate ){
										btn && btn.switchBtnInfo(data.product_detail_estimate.goods_price);
									}else{
										if( btn ){
											btn.switchBtnInfo(-1);
										}
									}
									lock = false;
								},null,true);
							}else{
								//找到sku的情况
								//index:  null(default)-main	0-加载中    1-失败   2-缺货  3-违禁  4-缺少尺码  5-金额太大	
								switchGoodsInfo(0);
								if( btn ){
									btn.switchBtnInfo(0);
									btn.switchGoodsInfo(0);
								} 
								//noRender表示走缓存的话，不刷新弹窗数据
								requestGoodsInfo(page_info, function(data,noRender){
									var cost_limit = 12000;
									if( !data ){
										switchGoodsInfo(1);
										
										if( btn ){
											btn.switchBtnInfo(-1);
											btn.switchGoodsInfo(1);
										}
									}else if( data.product_status == 4 ){
										switchGoodsInfo(3);
										
										if( btn ){
											btn.switchBtnInfo(-2);
											btn.switchGoodsInfo(3);
										}
									}else if( data.product_status == 5 ){
										switchGoodsInfo(2);
										
										if( btn ){
											btn.switchBtnInfo(-2);
											btn.switchGoodsInfo(2);
										}
									}else if( data.product_detail && data.match_type == 1 ){
										if( !noRender ){
											if( data.product_detail.goods_price < cost_limit ){
												updateGoods(data.product_detail);
												switchGoodsInfo();
												
												if( btn ){
													btn.updateGoods(data.product_detail);
													btn.switchGoodsInfo();
												}
											}else{
												switchGoodsInfo(5);
												
												btn && btn.switchGoodsInfo(5);
											}
										}else{
											if( data.product_detail.goods_price < cost_limit ){
												switchGoodsInfo();
												
												if( btn ){
													btn.switchGoodsInfo();
												}
											}else{
												switchGoodsInfo(5);
												
												btn && btn.switchGoodsInfo(5);
											}
										}
										btn && btn.switchBtnInfo(data.product_detail.goods_price);
									}else{
										switchGoodsInfo(1);
										
										if( btn ){
											btn.switchBtnInfo(-1);
											btn.switchGoodsInfo(1);
										}
									}
									lock = false;
								});
							}
						}else{
							//提示缺少尺码
							switchGoodsInfo(4);
							
							if( btn ){
								btn.switchBtnInfo(-2);
								btn.switchGoodsInfo(4);
							}
						}
					}catch(e){
					}
					
					callback && callback();
					
//					$holder_toolbar.find('.gwd_toolbar_haitao_pagi.gwd_ns_goods').trigger('click');
				}
				
				/**
				 * 播放加入购物车提醒
				 */
				function playAddToCartAnim(){
					//预留，本期不做
				}
				
				/**
				 * 暴露接口出去给内置曲线用
				 */
				var haitao = {};
				
				haitao.switchGoodsInfo = switchGoodsInfo;
				haitao.updateGoods = updateGoods;
				haitao.switchCartInfo = switchCartInfo;
				haitao.updateCartNum = updateCartNum;
				haitao.requestGoodsInfo = requestGoodsInfo;
				haitao.addToCart = addToCart;
				haitao.getFormattedGoodsData = getFormattedGoodsData;
				haitao.openCheckoutPage = openCheckoutPage;
				haitao.playAddToCartAnim = playAddToCartAnim;
				haitao.render = render;
				haitao.holder = holder;
				
				this.haitao = haitao;
			},
			/**
			 * 加载内置按钮上的海淘模块
			 */
			loadHaitaoBtn: function(){
				var toolbar = this;
				var holder = $('<div class="gwd_chrome_insert_info_haitao_holder">\
						<div class="gwd_chrome_insert_info_haitao_stat">\
							<!-- 加载状态 -->\
							<div class="">\
								<i class="gwd_haitao_icon loading_icon" style="background-image:url(' + backgroundImg + ')"></i>\
								<span class="gwd_haitao_hint">一键海淘</span>\
							</div>\
							<!-- 加载成功 -->\
							<div class="gwd_hide">\
								<i class="gwd_haitao_icon" style="background-image:url(' + backgroundImg + ')"></i>\
								<span class="gwd_haitao_hint">一键海淘 <em></em></span>\
							</div>\
							<!-- 加载失败 -->\
							<div class="gwd_hide">\
								<i class="gwd_haitao_icon fail_icon" style="background-image:url(' + backgroundImg + ')"></i>\
								<span class="gwd_haitao_hint">海淘信息获取失败</span>\
							</div>\
							<!-- 金额超限制｜违禁｜无货 -->\
							<div class="gwd_hide">\
								<i class="gwd_haitao_icon disabled_icon" style="background-image:url(' + backgroundImg + ')"></i>\
								<span class="gwd_haitao_hint">一键海淘</span>\
							</div>\
						</div>\
						<div class="gwd_chrome_insert_info_haitao_detail" style="display:none;">\
							<div class="gwd_haitao_cont gwd_loading">正在计算运费、关税等信息<br>请稍等或稍后来看...\
							</div>\
							<div class="gwd_haitao_cont gwd_ns_fail gwd_hide">\
								<span class="gwd_haitao_icon fail_icon" style="background-image:url(' + backgroundImg + ')"></span>\
								<span class="gwd_haitao_hint">加载失败，请重试</span>\
								<span class="gwd_haitao_cont_normal">\
								<span class="gwd_haitao_btn gwd_ns_retry">重新加载</span></span>\
							</div>\
							<div class="gwd_haitao_cont gwd_ns_soldout gwd_hide">\
								<span class="gwd_haitao_cont_warn">您购买的商品无货了。</span>\
								<span class="gwd_haitao_cont_normal">提示：</span>\
								<span class="gwd_haitao_cont_normal">您购买的商品目前处于缺货状态无法购买。</span>\
							</div>\
							<div class="gwd_haitao_cont gwd_ns_forbidden gwd_hide">\
								<span class="gwd_haitao_cont_normal">抱歉，因海关禁运，该商品无法一键海淘。</span>\
								<span class="gwd_haitao_cont_help"><a href="http://www.henzan.com/mmz/haitao#contraband" target="_blank">查看禁运物品说明</a></span>\
							</div>\
							<div class="gwd_haitao_cont gwd_ns_nospec gwd_hide">\
								<span class="gwd_haitao_cont_warn">您还没有选择好尺码信息。</span>\
								<span class="gwd_haitao_cont_normal">提示：</span>\
								<span class="gwd_haitao_cont_normal">在当前网页上选择好尺码信息后再点击“一键海淘”。</span>\
								<span class="gwd_haitao_cont_help">不会选尺码，点击<a href="http://www.henzan.com/mmz/haitao#size-chart" target="_blank">“尺码助手”</a>。</span>\
							</div>\
							<div class="gwd_haitao_cont gwd_ns_overlimit gwd_hide">\
								<span class="gwd_haitao_cont_warn">您的购买金额超过限制。</span>\
								<span class="gwd_haitao_cont_normal">提示：</span>\
								<span class="gwd_haitao_cont_normal">该商品金额过高，只支持1万元以下商品。</span>\
								<span class="gwd_haitao_cont_normal">喵喵折支持2000元内的商品的赔付，</span>\
								<span class="gwd_haitao_cont_help"><a href="http://www.henzan.com/mmz/haitao#losing-table" target="_blank">点此查看具体政策</a>。</span>\
							</div>\
							<div class="gwd_haitao_goods gwd_hide">\
								<div class="gwd_haitao_ginfo gwd_ns_size">\
									<span class="gwd_haitao_ginfo_key">规格 :</span>\
									<span class="gwd_haitao_ginfo_value"><em></em></span>\
								</div>\
								<div class="gwd_haitao_ginfo gwd_ns_price">\
									<span class="gwd_haitao_ginfo_key">商家价格 :</span>\
									<span class="gwd_haitao_ginfo_value gwd_ns_price"><em></em></span>\
								</div>\
								<div class="gwd_haitao_ginfo gwd_ns_freight">\
									<span class="gwd_haitao_ginfo_key">官方运费 :</span>\
									<span class="gwd_haitao_ginfo_value gwd_ns_price"><em></em></span>\
								</div>\
								<div class="gwd_haitao_ginfo gwd_ns_transfee">\
									<span class="gwd_haitao_ginfo_key">转运费 :</span>\
									<span class="gwd_haitao_ginfo_value gwd_ns_price">\
										<span><em></em></span>\
										<span class="gwd_haitao_link">\
											<a href="http://www.henzan.com/mmz/haitao#transit-charge" target="_blank">（转运费说明）</a>\
										</span>\
									</span>\
								</div>\
								<div class="gwd_haitao_ginfo gwd_ns_duty">\
									<span class="gwd_haitao_ginfo_key">关税 :</span>\
									<span class="gwd_haitao_ginfo_value gwd_ns_price">\
										<!-- class="gwd_price_del" 时价格为划掉状态 -->\
										<span class="gwd_price"><em></em></span>\
										<span class="gwd_haitao_link">\
											<a href="http://www.henzan.com/mmz/haitao#tariff" target="_blank">（关税说明）</a>\
											<!-- 关税价格处于划掉状态时文字说明为免关税 -->\
										</span>\
									</span>\
								</div>\
								<div class="gwd_haitao_ginfo gwd_ns_total">\
									<span class="gwd_haitao_ginfo_key">到手价 :</span>\
									<span class="gwd_haitao_ginfo_value gwd_ns_price"><em></em></span>\
								</div>\
								<div class="gwd_haitao_ginfo gwd_ns_quantity">\
									<span class="gwd_haitao_ginfo_key">购买数量 :</span>\
									<span class="gwd_haitao_ginfo_value">\
										<!--span class="gwd_ns_select">\
											<span class="gwd_ns_option" value="1">1</span>\
											<span class="gwd_ns_option" value="2">2</span>\
											<span class="gwd_ns_option" value="3">3</span>\
										</span-->\
										<select></select>\
										<span class="gwd_haitao_hint"></span>\
									</span>\
								</div>\
								<div class="gwd_haitao_ginfo gwd_ns_eta">\
									<span class="gwd_haitao_ginfo_key">预计到货时间 :</span>\
									<span class="gwd_haitao_ginfo_value">3月15日－3月25日</span>\
								</div>\
								<div class="gwd_haitao_opts">\
									<span class="gwd_haitao_btn gwd_ns_checkout">立即结算</span>\
									<span class="gwd_haitao_btn gwd_ns_addcart">加入购物车</span>\
									<span class="gwd_haitao_jump gwd_haitao_link"><a href="http://www.henzan.com/mmz/haitao" target="_blank">一键海淘帮助</a></span>\
									<span class="gwd_haitao_hint gwd_haitao_tips_show"></span>\
								</div>\
							</div>\
						</div>\
					</div>');
				holder.insertAfter(".button_container .gouwudai_chrome_insert_info_div_pbutton:eq(0)");
				
				var haitao = toolbar.haitao;
				
				var lock;
				holder.on('click', '.gwd_haitao_btn.gwd_ns_addcart', function(event){

					if( lock ){
						return;
					}
					lock = true;
					//加入购物车
					var $cont = holder.find('.gwd_haitao_goods');
					var buy_num = $cont.find('.gwd_ns_quantity .gwd_haitao_ginfo_value select').val();
					buy_num = buy_num > 1 ? window.parseInt(buy_num) : 1;
					
					var goods = haitao.getFormattedGoodsData( buy_num );
					haitao.addToCart(goods, function(result){
						//有返回值并且条都存在才能走加入购物车逻辑
						if( !result || !($('.mmz_toolbar_control_shrink,.mmz_toolbar_container_box').length == 2) ){
							return;
						}
						if( result.success && result.data ){
							//操作成功
//							holder.find('.gwd_toolbar_haitao_pagi.gwd_ns_cart').click();
							//todo: 播放收藏动画
							// var page_info = toolbar.getPageInfo();
							// var offset, x, y, tmp;
							// var x_fix = 0;
							// if( window.parseInt(toolbar.getToolbar().css('left')) < 0 ){
							// 	tmp = $('.mmz_toolbar_control_shrink');
							// }else{
							// 	tmp = toolbar.haitao.holder;
							// 	if( !tmp.length ){
							// 		tmp = toolbar.getToolbar();
							// 	}else{
							// 		x_fix = tmp.width();
							// 	}
							// }

							// offset = tmp.offset();
							// x = offset ? offset.left - $(window).scrollLeft() + x_fix : 0;
							// y = offset ? offset.top - $(window).scrollTop() : 0;

		     //                animate.FlyIconAnimate(page_info,[], y, x, haitao.playAddToCartAnim);

							//点击购物车动画
							var imgSrc, x, y, _x , _y ,tmp, offset;
							var x_fix = 0;
							var _toolbar = toolbar.getToolbar();
							//toolbar是否展开
							var isToolbarSmall = (window.parseInt(_toolbar.css('left')) < 0 || _toolbar.is(':hidden') );
							if( isToolbarSmall ){
								tmp = $('.mmz_toolbar_control_shrink');
							}else{
								tmp = toolbar.haitao.holder;
								if( !tmp.length ){
									tmp = _toolbar;
								}else{
									x_fix = tmp.width();
								}
							}
							offset = tmp.offset();
							x = offset ? offset.left - $(window).scrollLeft() + x_fix : 0;
							y = offset ? offset.top - $(window).scrollTop() : 0;
							_x = event.pageX - $(window).scrollLeft();
							_y = event.pageY - $(window).scrollTop();
							var page_info = toolbar.getPageInfo();
		     				if( page_info.pic ){
		     					imgSrc = page_info.pic;
		     				}else{
		     					imgSrc = chrome.extension.getURL("images/animation_default.png");
		     				}
		     				flyImg = $('<img src = "'+ imgSrc +'" style = "display: block;width: 50px;height: 50px;border-radius: 50px;position: fixed;z-index: 9999999999;">');
		     				flyImg.fly({
								start: {
									left: _x,
									top: _y
								},
								end: {
									left: x,
									top: y,
									width: 0,
									height: 0
								},
								onEnd: function(){
									if( isToolbarSmall ){
										$('.mmz_toolbar_control_shrink').click();
									}
									//刷新toolbar购物车信息
									$('.gwd_ns_haitao .gwd_toolbar_haitao_pagi.gwd_ns_cart').click();
									var $animate = $('.gwd_ns_haitao .gwd_toolbar_haitao_cart_add');
									$animate.css('opacity','0.5');
									$animate.toggleClass('gwd_toolbar_haitao_cart_animate');
									setTimeout(function(){
										$animate.toggleClass('gwd_toolbar_haitao_cart_animate');
										$animate.css('opacity','0');
									},1000)
									lock = false;
								}
							});
						}else if( result.data ){
							//物品没问题，操作失败
							var $hint = $cont.find('.gwd_haitao_opts .gwd_haitao_hint');
							if( result.status == 'numMax' ){
								$hint.text('该商品最多购买10件');
							}else if( result.status == 'cartMax' ){
								$hint.text('购物车最多只能添加10种商品');
							}
							lock = false;
						}else{
							//操作失败
							switchGoodsInfo(1);
							lock = false;
						}
					});
					return false;
				}).on('click', '.gwd_haitao_goods .gwd_ns_checkout', function(){
					//立即结算（单品）
					var buy_num = holder.find('.gwd_haitao_goods .gwd_ns_quantity .gwd_haitao_ginfo_value select').val();
					buy_num = buy_num > 1 ? window.parseInt(buy_num) : 1;
					
					var goods = haitao.getFormattedGoodsData( buy_num );
					if( goods ){
						haitao.openCheckoutPage( goods, function(res){
							if(res && res.success){
								//操作成功，关闭页面
								//todo
//								holder.find('#gwd_haitao_popup').trigger('mouseleave');
							}else if(res && res.over_cost_limit){
								switchGoodsInfo(5);
							}else{
								switchGoodsInfo(1);
							}
						});
					}else{
						switchGoodsInfo(1);
					}
					return false;
				}).on('click', '.gwd_haitao_btn.gwd_ns_retry', function(){
					//失败重试
					haitao.render();
					return false;
				}).on('mmz-hover-hide', function(){
					var $cont = holder.find('.gwd_haitao_goods');
					$cont.find('.gwd_haitao_opts .gwd_haitao_hint').text('');
					return false;
				});
				
				/**
				 * 刷新商品信息展示
				 */
				function updateGoods( data ){
					if( !data ){
						return;
					}
					
					var $cont = holder.find('.gwd_haitao_goods');
					var i, tmp, max;
					
					$cont.find('.gwd_ns_size .gwd_haitao_ginfo_value em').text( data.spec_name_desc || '标配' );
					$cont.find('.gwd_ns_price .gwd_haitao_ginfo_value em').text( '¥' + MiTools.getPrFix(data.goods_price) );
					$cont.find('.gwd_ns_freight .gwd_haitao_ginfo_value em').text( '¥' + MiTools.getPrFix(data.official_postage) );
					$cont.find('.gwd_ns_transfee .gwd_haitao_ginfo_value span:eq(0) em').text( '¥' + MiTools.getPrFix(data.international_postage) );
					if( !data.tax_fee && data.tax_original_fee > 0 ){
						$cont.find('.gwd_ns_duty .gwd_haitao_ginfo_value span').eq(1).find('a').text('（免关税）')
							.end().end().eq(0).addClass('gwd_price_del')
						.find('em').text( '¥' + MiTools.getPrFix(data.tax_original_fee) );
					}else{
						$cont.find('.gwd_ns_duty .gwd_haitao_ginfo_value span').eq(1).find('a').text('（关税说明）')
							.end().end().eq(0).removeClass('gwd_price_del')
						.find('em').text( '¥' + MiTools.getPrFix(data.tax_fee) );
					}
					
					$cont.find('.gwd_ns_total .gwd_haitao_ginfo_value em').text( '¥' + MiTools.getPrFix(data.total_cost) );
					$cont.find('.gwd_ns_eta .gwd_haitao_ginfo_value').text( data.arrive_time ||'暂时无法预估' );
					
					max = window.parseInt(data.max_buy_num);
					max = max < 10 ? max : 10;
					if( max > 0 ){
//						tmp = '<span class="gwd_ns_option" value="1">1</span>';
//						for(i=2; i <= max; ++i){
//							tmp += '<span class="gwd_ns_option" value="' + i + '">' + i + '</span>';
//						}
						tmp = '<option value="1" selected>1</option>'
						for(i=2; i <= max; ++i){
							tmp += '<option value="' + i + '">' + i + '</span>';
						}
							
						$cont.find('.gwd_ns_quantity .gwd_haitao_ginfo_value').find('.gwd_haitao_hint').text(data.max_buy_num > 10 ? '货源充足' : '最多'+max+'件')
							.end().find('select').html(tmp).prop('disabled',false);
					}else{
						$cont.find('.gwd_ns_quantity .gwd_haitao_ginfo_value').find('.gwd_haitao_hint').text('暂无供货')
							.end().find('select').empty().prop('disabled',true);
					}
				}
				
				/**
				 * 切换面板上显示状态
				 * @param int price  +:成功  0:loading  -1:失败 -2:非法
				 */
				function switchBtnInfo(price){
					var $cont = holder.find('.gwd_chrome_insert_info_haitao_stat').children();
					
					price = MiTools.getPrFix(price);
					
					if( !price ){
						$cont.addClass('gwd_hide')
							.eq(0).removeClass('gwd_hide');
					}else if( price > 0 ){
						$cont.addClass('gwd_hide')
							.eq(1).find('em').text('¥'+price).end().removeClass('gwd_hide');
					}else if( price == -2 ){
						$cont.addClass('gwd_hide')
							.eq(3).removeClass('gwd_hide');
					}else{
						$cont.addClass('gwd_hide')
							.eq(2).removeClass('gwd_hide');
					}
				}
				
				/**
				 * 切换展示 提示/商品信息
				 */
				function switchGoodsInfo(index){
					//index:  null(default)-main	0-加载中    1-失败   2-缺货  3-违禁  4-缺少尺码  5-金额太大
					var $cont = holder.find('.gwd_chrome_insert_info_haitao_detail');
					if( index == null ){
						$cont.find('.gwd_haitao_cont').addClass('gwd_hide');
						$cont.find('.gwd_haitao_goods').removeClass('gwd_hide');
					}else{
						$cont.find('.gwd_haitao_goods').addClass('gwd_hide');
						$cont.find('.gwd_haitao_cont').addClass('gwd_hide').eq(index).removeClass('gwd_hide');
					}
					$cont.find('.gwd_haitao_opts .gwd_haitao_hint').text('');
				}
				
				var haitao_btn = {};
				haitao_btn.switchGoodsInfo = switchGoodsInfo;
				haitao_btn.switchBtnInfo = switchBtnInfo;
				haitao_btn.updateGoods = updateGoods;
				
				this.haitao_btn = haitao_btn;
				hoverDelayFunction([[".gouwudai_chrome_insert_info_div",".gwd_chrome_insert_info_haitao_holder",".gwd_chrome_insert_info_haitao_detail",function(){
					//防止sku变化请求1接口一直加载不出来，hover将之前弹窗加载成功的信息显示出来，应该弹窗进行一次刷新
					// switchGoodsInfo(0);
					toolbar.haitao.render();
				}]]);
			},
			/**
			 * @param insertBeforeNode 在节点前插入
			 */
			loadHistoryPrice : function(json,type,insertBeforeNode){
				if ( json && this._options.showHistoryPrice) {
                    var data = json.pcinfo;
					var holder = this.find('.gwd_toolbar_price_trend');
					if(holder.length <= 0){
						var holder = $('<div class="gwd_toolbar_underline_box gwd_toolbar_price_trend" gwd-subject="history">\
		                            <div class="gwd_toolbar_assist_item_info">\
		                                <span class="price_trend_logo" style="background-image:url('+backgroundImg+')"></span>\
		                                <span class="price_trend_word"></span>\
		                            </div>\
		                            <div class="gwd_toolbar_price_trend_tips" style="background-image:url('+backgroundImg+')"></div>\
		                        </div>');
						if( insertBeforeNode ){
							holder.insertBefore(insertBeforeNode);
						}else{
							holder.appendTo(this.getFlex());
						}
					}
					var trend = 4;
					if ( type !== "repair_price_trend" || !data || !data.info ) {
						trend = json.trend || 4;
					} else {
						var len = data.info.length;
						var current = 0;
						while(current<=0){
							current = MiTools.getPrFix(data.info[len-1].pr);
							len--;
						}
						var minPrice = MiTools.getPrFix(data.lpr);
						for ( var i = len; i >= 0; i--) {
							var pr = MiTools.getPrFix(data.info[i].pr);
							if (current < pr && current <= minPrice) {
								trend = 1;
								break;
							}
							if (current < pr && current > minPrice) {
								trend = 2;
								break;
							}
							if (current > pr) {
								trend = 3;
								break;
							}
						}
					}
					json.trend = trend;
					if( data ){
						data.trend = trend;
					}
					this.initShrink(null, trend-1);
//					$('.gwd_toolbar_price_trend').show();
					var trendWord = "";
					var trendHolder = holder.find('.gwd_toolbar_assist_item_info');
					var classNames = ['gwd_ns_trend_lowest','gwd_ns_trend_down','gwd_ns_trend_up','gwd_ns_trend_steady'];
					$.each(classNames, function(i, className){
						if(trendHolder.hasClass(className)){
							trendHolder.removeClass(className);
							return false;
						}
					});
					trendHolder.addClass(classNames[trend-1]);
					switch(trend){
						case 1 :
							trendWord = "历史低价";
							break;
						case 2 :
							trendWord = "价格下降";
							break;
						case 3 :
							trendWord = "价格上涨";
							break;
						case 4 :
						default :
							trendWord = "价格平稳";
							break;
					}
					trendHolder.find(".price_trend_word").text(trendWord);
					if(type != "repair_price_trend"){
						gl_commercialStat.hisprice = 1;

                        var wareHouseShow = "gwd_hide";
                        if( domain == "yixun.com" ){
                            wareHouseShow = "";
                        }
                        $('.gwd_toolbar_price_trend').append('\
							<div id="chrome-price" class="chrome-price gwd_toolbar_assist_popbox">\
								<div id ="titleBarId" class="title-bar">\
									<span>'+
                            (!isGWZS ?
                                '<a href="https://www.miaomiaozhe.com" target="_blank">喵喵折</a><i></i><em>历史价格</em>' : '<a>历史价格数据来自喵喵折</a>')+
                            '</span>\
                            <div class="right-board">\
                                <p class="price">当前 <strong>¥ ' + ( (data && data.info && data.info[data.info.length-1].pr) || "0" ) + '</strong></p>\
										<!--p class="ware-house">' + (data && data.wareHouse || "北京仓" ) + '</p-->\
										<p class="price-intro">\
											<span class="intro-thumb" style="background-image:url('+backgroundImg+')"></span>\
											<span class="intro-detail"><span>1.不同地区的定价少数情况可能不同。</span><span>2.货币单位请以当前网站支持的货币为准。</span></span>\
										</p>\
									</div>\
								</div>\
								<div id ="priceHist" class="content-pane">\
									<div class="chart mmz_placeholder"></div>\
									<div class="rightWord">\
			                            <div class="high">\
			                                <div>最高价</div>\
			                                <div id="lastHeight"></div>\
			                            </div>\
			                            <div class="low">\
			                                <div>最低价</div>\
			                                <div id="lastLow"></div>\
			                            </div>\
		                        	</div>\
									<span style="display:none;" class="gwd_warehouse '+wareHouseShow+'">*北京仓</span>\
								</div>'+
                            (!isGWZS ?
                                '<div class = "jump-link"><a target="_blank" href="http://qr15.cn/FcZW6J">全网商家历史低价精选</a></div>': '')+
                            '</div>');
                        if( data ){
                            initPrice(data, holder);
                            holder.find('#chrome-price').hide();
						}else{
                            holder.find("#chrome-price").addClass('gwd_ns_disabled').hide();
						}
                        holder.mouseenter(function(){
                            // 比价条历史价格hover
                            chrome.extension.sendMessage({
                                'greeting': 'GROWINGIO_EVENT',
                                'type': 'pricebar_history',
                                'domain': extractUrlDomain(pageUrl)
                            }, $.noop);
                        }).mouseleave(function(){});
					}else{
						$('.gwd_toolbar_price_trend .right-board .price').html('当前 <strong>¥ ' + ( ( data && data.info && data.info[data.info.length-1].pr) || "0" ) + '</strong>');
						$('.gwd_toolbar_price_trend .mmz_placeholder').remove();
						$('.gwd_toolbar_price_trend #priceHist').prepend('<div class="chart mmz_placeholder"></div>');
//						$(".gwd_toolbar_price_trend .chrome-price").show();
						if( data ){
                            // initPrice(data,".gwd_toolbar_price_trend");
                            initPrice(data, holder);
                            holder.find("#chrome-price").hide();
						}else{
                            holder.find("#chrome-price").addClass('gwd_ns_disabled').hide();
						}
						// $(".gwd_toolbar_price_trend .chrome-price").hide();
					}
				}
			},
			loadSavetofavor:function(finfo,ginfo){
				var _this = this;
				var pageInfo = this.getPageInfo();
				var $html = $('<div class="gwd_ns_savetofavor gwd_toolbar_underline_box" title="收藏后，商品降价/到货会有提醒哦" gwd-subject="favorite">\
		                    	<div class="gwd_toolbar_save_logo" style="background-image:url('+backgroundImg+')"></div>\
		                    	<div class="gwd_toolbar_save_words gwd_font_black">收藏</div>\
								<div class="gwd_toolbar_save_words gwd_font_black gwd_ns_done">已收藏</div>\
								<div class="gwd_toolbar_save_tips" style="background-image:url('+backgroundImg+')"></div>\
		                    </div>');
                $html.appendTo(this.getFlex()).on('click',function(){
                	// 比价条收藏点击
	                chrome.extension.sendMessage({
	                	'greeting': 'GROWINGIO_EVENT',
	                	'type': 'pricebar_collect',
	                	'domain': extractUrlDomain(pageUrl)
	                }, $.noop);
                    _this.doSavetofavor($(this));
                }).hover(function(){
                    var $this = $(this);
                    if($this.hasClass('gwd_ns_done')){
                        $this.find(".gwd_ns_done").html("我的收藏");
                    }
                },function(){
                    var $this = $(this);
                    if($this.hasClass('gwd_ns_done')){
                        $this.find(".gwd_ns_done").html("已收藏");
                    }
                })
                this.loadGoodsCollectByPerson(finfo,ginfo,function(){
                    _this.collectButtonStateChange("initialization");
                })
            },
            loadQrcode : function(json){
                if (isGWZS || !json.bottom_barcode) {
                    return ;
                }
                var $html = $('<div class="gwd_toolbar_underline_box gwd_ns_qrcode">\
								<div class = "gwd_toolbar_qrcode_button">\
									<div class="gwd_toolbar_qrcode_logo" style="background-image:url('+backgroundImg+')"></div>\
									<div class="gwd_toolbar_qrcode_words">'+(json.bottom_barcode_inset_description || '手机比价')+'</div>\
								</div>\
								<div class = "gwd_toolbar_qrcode_window gwd_toolbar_assist_popbox">\
									<div class="gwd_toolbar_qrcode_popup">\
										<div id="bottom_qrcode"></div>\
										<p>'+(json.bottom_barcode_popup_description || '扫一扫看比价')+'</p>\
									</div>\
								</div>\
		                    </div>');
				$html.appendTo(this.getFlex()).mouseenter(function() {
					// 比价条扫码hover
					chrome.extension.sendMessage({
						'greeting': 'GROWINGIO_EVENT',
						'type': 'pricebar_scan',
						'domain': extractUrlDomain(pageUrl)
					}, $.noop);
				});
	            var qrcode =  $("#bottom_qrcode").get(0);
	            if( !qrcode ){
		            return;
	            }
	            var url = decodeURIComponent(json.bottom_barcode);
	            new QRCode(qrcode, {
		            text: url,
		            width: 130,
		            height: 130,
		            colorDark : "#000000",
		            colorLight : "#ffffff",
	            });
			},
			loadCoupon: function (json) {
				var shop_name = json.cinfo.goods_shop_name,
					goods_url = json.cinfo.goods_url,
					id = json.yhq_id, grTp_postfix = '', _blank = false;
				if (shop_name.indexOf('京东') >= 0) {
					if (isGWZS) {
						return;
					}
					grTp_postfix = '_jd';
					_blank = true;
				}
                var self = this;
                self._loadings.push(new Promise(function (resolve, reject) {
                    Extension.ajax({
                        type:'GET',
                        cache:false,
                        url:json.yhq_url+json.yhq_partner_id+'/10002/'+id,
                        async:true,
                        timeout:3000,
                        dataType:'json'
                    }, function (json) {
                    	try {
                            if (json && json.code && json.code == 200) {
                                var coupon = json.data && json.data.coupon;
                                var currentTime = new Date().getTime();
                                if (coupon && coupon.is_valid && coupon.remain_count > 0 && currentTime < new Date(coupon.end_time) && currentTime > new Date(coupon.start_time)) {
                                	var coupon_content = '',
		                                coupon_pop = '';
                                	if (coupon.coupon_money > 0) {
		                                coupon_content = '<span class="RMB_icon">￥</span><span class="coupon_money">' + MiTools.getPrFix(coupon.coupon_money) + '</span>';
		                                coupon_pop = '当前商品立减';
	                                } else if (coupon.coupon_discount != '') {
		                                coupon_content = '<span class="coupon_discount">' + MiTools.getPrFix(coupon.coupon_discount) + '</span><span class="discount_icon">折</span>';
		                                coupon_pop = '点击立即领取';
	                                } else {
                                		return ;
	                                }
                                    var $html = $(
                                        '<div class="gwd_toolbar_underline_box gwd_toolbar_coupon">' +
                                        '<div class="gwd_toolbar_coupon_button">' +
                                        '<a href="' + json.data.click_url + '" '+ (_blank? 'target="_blank"' : '') +'>' +
                                        '<div class="coupon-left">' +
                                        coupon_content +
                                        '</div>' +
                                        '<div class="coupon-right">' +
                                        '<p>优</p>' +
                                        '<p>惠</p>' +
                                        '<p>券</p>' +
                                        '</div>' +
                                        '</a>' +
                                        '</div>' +
                                        '<div class="gwd_toolbar_coupon_window">' +
                                        coupon_pop +
                                        '</div>' +
                                        '</div>');
                                    $html.click(function () {
                                        // ekko打点 比价条优惠券点击
	                                    var growingTp = (isGWZS?isGWZS:'')+'pricebar_coupon_click'+(isGWZS?'':grTp_postfix);
                                        chrome.extension.sendMessage({
                                            'greeting': 'GROWINGIO_EVENT',
                                            'type': growingTp,
                                            'domain': extractUrlDomain(pageUrl)
                                        }, $.noop);
                                    });
                                    var $toolbar = self.getFlex();
                                    var $qr = $toolbar.find('.gwd_toolbar_underline_box.gwd_ns_qrcode');
                                    var $ad = $toolbar.find('ul.gwd_toolbar_goods_list');
                                    if ($qr.length>0) {
                                        $qr.after($html);
                                    } else if($ad.length > 0) {
                                    	$ad.eq(0).before($html);
                                    } else {
	                                    $toolbar.append($html);
                                    }
									var growingTp = (isGWZS?isGWZS:'')+'pricebar_coupon'+(isGWZS?'':grTp_postfix);
                                    // ekko打点 比价条优惠券显示
                                    chrome.extension.sendMessage({
                                        'greeting': 'GROWINGIO_EVENT',
                                        'type': growingTp,
                                        'domain': extractUrlDomain(pageUrl)
                                    }, $.noop);
                                }
                            }
                        } catch(e) {}
                        resolve();
                    });
                }));

            },
			reloadSavetofavor : function(){
				this.find('.gwd_ns_savetofavor').detach().appendTo(this.getFlex());
			},
			/**
			*加载用户体验文章数量
			*/
			loadUserExper : function(article){
				if(article && article.count > 0 && article.url){
					var _html='<div class="gwd_user_exper gwd_toolbar_underline_box" gwd-href="'+article.url+'">'
					+'<span class="gwd_user_exper_text gwd_ns_firstline">'+article.count+'位</span>'
					+'<span class="gwd_user_exper_text gwd_ns_secondline">用户晒单</span>'
					+'</div>';
					this.getFlex().append(_html);
				}				
			},
			/**
			 * 下面2个方法一个属性是收藏相关。。。日后需解耦移出
			 */
			theGoodsCollectInfo : {person_num:0,have_collect:false},
			loadGoodsCollectByPerson : function(finfo,ginfo,callback){
				var theGoodsCollectInfo = this.theGoodsCollectInfo; 
				var id = (ginfo && ginfo.goods_id) ? ginfo.goods_id : -1;
				Extension.sendMessage({greeting: "HAVE_LOCAL_COLLECT",goods_id: id},function(obj){
					theGoodsCollectInfo.person_num = (finfo && finfo.cnt) ? (finfo.cnt + obj.num) : obj.num;
					theGoodsCollectInfo.have_collect = (obj.num > 0 || (finfo && finfo.self)) ? true : false;
					if( theGoodsCollectInfo.have_collect ){
						theGoodsCollectInfo.collect_before_word = "已收藏";
						theGoodsCollectInfo.collect_after_word = "已收藏";
					}else{
						theGoodsCollectInfo.collect_before_word = "收藏";
						theGoodsCollectInfo.collect_after_word = "已收藏";
					}
					if( !theGoodsCollectInfo.person_num || theGoodsCollectInfo.person_num == 0 ){
						theGoodsCollectInfo.collect_before_num = "成为第<em>1</em>人";
						theGoodsCollectInfo.collect_after_num = "我是第<em>1</em>人";
					}else{
						theGoodsCollectInfo.collect_before_num = "共<em>"+theGoodsCollectInfo.person_num+"</em>人";
						if( theGoodsCollectInfo.have_collect ){
							theGoodsCollectInfo.collect_after_num = "共<em>"+theGoodsCollectInfo.person_num+"</em>人";
						}else{
							theGoodsCollectInfo.collect_after_num = "共<em>"+(theGoodsCollectInfo.person_num+1)+"</em>人";
						}
					}
					callback && callback();
				});
			},
			//收藏按钮状态改变方法
			collectButtonStateChange : function(state){
				var theGoodsCollectInfo = this.theGoodsCollectInfo;
				if( state == "initialization"){
					if( theGoodsCollectInfo.have_collect ){
						//theGoodsHaveCollectDone = true;
						this.find('.gwd_ns_savetofavor').addClass("gwd_ns_done").attr('title','我的收藏');;
						$(".gouwudai_chrome_insert_info_div_cbutton").addClass("have_collect_done").addClass("gwd_ns_done").attr('title','我的收藏');
						$(".gouwudai_chrome_insert_info_div_cbutton .collect_word").text(theGoodsCollectInfo.collect_after_word);
						$(".gouwudai_chrome_insert_info_div_cbutton .collect_num").html("("+theGoodsCollectInfo.collect_after_num+")");
					}else{
						$('.gwd_toolbar_collect,.gouwudai_chrome_insert_info_div_cbutton').attr('title','收藏后，商品降价/到货会有提醒哦');
						$(".gouwudai_chrome_insert_info_div_cbutton .collect_num").html("("+theGoodsCollectInfo.collect_before_num+")");
					}
				}else if( state == "collect_done" ){
					this.find('.gwd_ns_savetofavor').addClass("gwd_ns_done").attr('title','我的收藏');
					$(".gouwudai_chrome_insert_info_div_cbutton").addClass("have_collect_done").addClass("gwd_ns_done").attr('title','我的收藏');
					$(".gouwudai_chrome_insert_info_div_cbutton .collect_word").text(theGoodsCollectInfo.collect_after_word);
					$(".gouwudai_chrome_insert_info_div_cbutton .collect_num").html("("+theGoodsCollectInfo.collect_after_num+")");
				}
			},
			doSavetofavor : function($node){
				var isDone = $node.hasClass('gwd_ns_done');
				collectGoodsUnitiveFun($node,this.getTemplate(),isDone);
				if(!isDone){
					Extension.sendMessage({
						'greeting': 'SAVE_BIJIA_INFO_CURRENT',
						data: {have_collect:true},
						is_update: true
					}, $.noop);
					this.collectButtonStateChange("collect_done");
				}
			},
			getPageInfo : function(noCache){
				if(noCache || !this['.pageInfo']){
					this['.pageInfo'] = pageInfoExtract(this.getTemplate());
				}
				return this['.pageInfo'];
			},
			getTemplate : function(){
				if(!this._template){
					throw new Error('模板为空！');
				}
				return this._template;
			},
			setTemplate : function(template){
				if(typeof template != 'undefined'){
					this._template = template;
				}
			},
			find:function(selector){
				return this.getToolbar().find(selector);
			}
		}
	}
	return fn.singleton;
}

//商品收藏统一方法
/**
 * 注意这里有个bug,第一次不带参数调用无法成功初始化！待检查调用或修复
 * @param {Object} $node
 * @param {Object} template
 * @param {Object} saveDone
 */
function collectGoodsUnitiveFun($node,template,saveDone){
	var fn = collectGoodsUnitiveFun;
	initFn(fn,[fn,gwdHttps,template],function(fn,gwdHttps,template){
		fn._collectable = true;
		window.addEventListener("message", function(event){
		    if (event.source != window){
		    	return false;
		    }
			if(event.data.type){
				var pageUrl = window.location.href || '';
				switch(event.data.type){
					case "FROM_PAGE_RIGHT_BUTTON":
						Extension.ajax({
							type :'GET',
							url : gwdHttps + 'api.html?path1=qihoo-mall-browserplugin&path2=systeminfo&cmd=all&url='+encodeURIComponent(pageUrl),
							timeout : 2000	
						},function(responseText){
							if(responseText){
								var systemInfo = JSON.parse(responseText);
								var sysTime = systemInfo.time;
								var sysId = systemInfo.id;
								var sysUrl = systemInfo.url;
								var state = 0;
								if( sysTime && sysId && sysUrl ){
									var pageInfo = {
			    						time:sysTime,
			    						id:sysId,
			    						url:sysUrl
									};
									var goodsInfo = pageInfoExtract(template);
							    	if( goodsInfo.price > 0 && goodsInfo.name != "" && goodsInfo.pic != "" ){
							    		state = 1;
										pageInfo = $.extend({},pageInfo,{
											ourl:pageUrl,
					    					price:goodsInfo.price,
					    					name:goodsInfo.name,
					    					pic:goodsInfo.pic,
					    					issale:goodsInfo.isSale,
					    					shopname:goodsInfo.shopName,
					    					shopid:goodsInfo.shopId
										});
									}
									Extension.sendMessage({
						    				greeting: "FROM_PAGE_RIGHT_BUTTON",
						    				from :event.data.from,
						    				text:pageUrl,
						    				title:pageTitle,
						    				pagecrawl:state,
						    				pageinfo:pageInfo,
						    				pageDetailInfo:goodsInfo
						    			},function(message){
											if( message.nologin && message.nologin=="yes" ){
						    					if( message.remainingsum < 0 ){
						    						fn._collectable = false;
						    						fn.collectPopup({model:"fail"});
						    						fn.modifyCollectYisualEffect("all","prohibit");
						    					}else{
						    						fn.collectPopup({model:"succ",num:message.remainingsum});
						    					}
						    				}
						    			}
						    		);
								}
							}
						});
						break;
					default :
						break;
				}
			}
		}, false);
		fn.modifyCollectYisualEffect = function(site,action){
			if(site == "fixed" && $("#mmz-extension-fixed-button")){
				var fixedStat = $("#mmz-extension-fixed-button").attr("_cancollect");
				if(action == "prohibit"){
					if(!fixedStat || fixedStat == "yes"){
						$("#mmz-extension-fixed-button .hospice").css("-webkit-filter","grayscale(100%)");
						$("#mmz-extension-fixed-button").append('<div class="fixed-collect-hover">\
																<div class="fixed-collect-hover-info">\
																	<span >未登录只能标记30个商品为收藏<br>\
																		<a href="javascript:void(0);" target="_blank" class="all-login-click">登录</a>后，无数量限制\
																		<a href="javascript:void(0);" target="_blank" id="go_to_help">?</a>\
																	</span>\
																</div>\
															</div>');
						$("#mmz-extension-fixed-button").hover(function(){
							var thisTop = $(this)[0].offsetTop;
							var thisLeft = $(this)[0].offsetLeft;
							var windowWith = window.innerWidth;
							var windowHeight = window.innerHeight;
							var thisWidth = $(this).width();
							var thisHeight = $(this).height();
							var rightWidth = windowWith - thisLeft;
							var bottomHeight =  windowHeight - thisTop - thisHeight;
							$(this).find(".fixed-collect-hover").css("right","0px");
							$(this).find(".fixed-collect-hover").css("top","25px");
							$(this).find(".fixed-collect-hover").show().click(function(){return false;});
							return false;
						},function(){
							$(this).find(".fixed-collect-hover").hide();
							return false;
						});
						$("#mmz-extension-fixed-button").attr("_cancollect","no");
					}
				}else if(action == "allow"){
					if(fixedStat && fixedStat == "no"){
						$("#mmz-extension-fixed-button .hospice").css("-webkit-filter","grayscale(0%)");
						if($("#mmz-extension-fixed-button").find(".fixed-collect-hover")){
							$("#mmz-extension-fixed-button .fixed-collect-hover").remove();
							$("#mmz-extension-fixed-button").unbind("mouseenter mouseleave");
						}
						$("#mmz-extension-fixed-button").attr("_cancollect","yes");
					}
				}
			}else if(site == "page" && $(".gouwudai_chrome_insert_info_div_cbutton")){
				var pageStat = $(".gouwudai_chrome_insert_info_div_cbutton").attr("_cancollect");
				if(action == "prohibit"){
					if(!pageStat || pageStat == "yes"){
						$(".gouwudai_chrome_insert_info_div_cbutton .hospice").css("-webkit-filter","grayscale(100%)");
						$(".gouwudai_chrome_insert_info_div_cbutton").append('<div class="fixed-collect-hover" style="left:-1px;">\
														<div class="fixed-collect-hover-logo" style="background-image:url('+backgroundImg+')"></div>\
														<div class="fixed-collect-hover-info">\
															<span >未登录只能标记30个商品为收藏<br>\
																<a href="javascript:void(0);" target="_blank" class="all-login-click">登录</a>后，无数量限制\
																<a href="javascript:void(0);" target="_blank" id="go_to_help">?</a>\
															</span>\
														</div>\
													</div>');
						$(".gouwudai_chrome_insert_info_div_cbutton").hover(function(){
							$(this).find(".fixed-collect-hover").show();
						},function(){
							$(this).find(".fixed-collect-hover").hide();
						});
					}
				}else if(action == "allow"){
					if(pageStat && pageStat == "no"){
						$(".gouwudai_chrome_insert_info_div_cbutton .hospice").css("-webkit-filter","grayscale(0%)");
						if($(".gouwudai_chrome_insert_info_div_cbutton").find(".fixed-collect-hover")){
							$(".gouwudai_chrome_insert_info_div_cbutton .fixed-collect-hover").remove();
							$("#mmz-extension-fixed-button").unbind("mouseenter mouseleave");
						}
						$(".gouwudai_chrome_insert_info_div_cbutton").attr("_cancollect","yes");
					}
				}
			}else if(site == "inline"){
				var inlineStat = $(".gwd_toolbar_collect").attr("_cancollect");
				if(action == "prohibit"){
					if(!inlineStat || inlineStat == "yes"){
						$(".gwd_toolbar_collect .gwd_toolbar_collect_logo").css("-webkit-filter","grayscale(100%)");
						$(".gwd_toolbar_collect").append('<div class="fixed-collect-hover">\
														<div class="fixed-collect-hover-logo" style="background-image:url('+backgroundImg+')"></div>\
														<div class="fixed-collect-hover-info">\
															<span >未登录只能标记30个商品为收藏<br>\
																<a href="javascript:void(0);" target="_blank" class="all-login-click">登录</a>后，无数量限制\
																<a href="javascript:void(0);" target="_blank" id="go_to_help">?</a>\
															</span>\
														</div>\
													</div>');
						$(".gwd_toolbar_collect").hover(function(){
							$(this).find(".fixed-collect-hover").css("bottom","48px").css("right","-1px").show();
						},function(){
							$(this).find(".fixed-collect-hover").hide();
						});
					}
				}else if(action == "allow"){
					if(pageStat && pageStat == "no"){
						$(".gwd_toolbar_collect .gwd_toolbar_collect_logo").css("-webkit-filter","grayscale(0%)");
						if($(".gwd_toolbar_collect").find(".fixed-collect-hover")){
							$(".gwd_toolbar_collect .fixed-collect-hover").remove();
							$(".gwd_toolbar_collect").unbind("mouseenter mouseleave");
						}
						$(".gwd_toolbar_collect").attr("_cancollect","yes");
					}
				}
			}else if(site == "all"){
				arguments.callee("fixed",action);
				arguments.callee("page",action);
				arguments.callee("inline",action);
			}
			$(".fixed-collect-hover-info .all-login-click,.fixed-collect-hover-info #go_to_help").off("click");
			$(".fixed-collect-hover-info .all-login-click").on("click",function(){
				Extension.sendMessage({greeting:"GO_TO_LOGIN"},function(){});
				return false;
			});
			$(".fixed-collect-hover-info #go_to_help").on("click",function(){
				Extension.sendMessage({greeting:"GO_TO_HELP"},function(){});
				return false;
			});
		};
		fn.collectPopup = function(obj){
			if( (30-obj.num) <= 9 ){
				return false;
			}
			Extension.sendMessage({greeting: "get_noremind_hide"},function(result){
				if( result.show == "hide" ){
					return false;
				}
				setTimeout(function(){
					if( $('.gwd_collect_popup').size() ){
						$('.gwd_collect_popup').remove();
					}
					var model = "";
					var title = "";
					var info = "";
					if( obj.model == "succ" ){
						var remainingSum = obj.num;
						model = "succ";
						title = "我已收藏";
						info = "只能再将"+remainingSum+"件商品标为收藏，登录后不再限制";
					}else{
						return false;
						model = "fail";
						title = "失败";
						info = "登录前最多标记30件商品为收藏，登录后不再限制";
					}
					var toops ='<div class="gwd_collect_popup">\
									<div class="gwd_collect_popup_logo_'+model+'" style="background-image:url('+backgroundImg+')"></div>\
									<span class="gwd_collect_popup_title_'+model+'">'+title+'</span>\
									<span class="gwd_collect_popup_info_'+model+'">'+info+'</span>\
									<h3>\
										<a href="#" target="_blank" class="gwd_collect_popup_login all-login-click">立即登录</a>\
										<span class="gwd_collect_popup_goto_loadingpage">查看我的收藏</span>\
									</h3>\
									<span class="gwd_collect_popup_close" style="background-image:url('+backgroundImg+')"></span>\
									<div style="position:absolute;top:7px;right:30px;">\
										<input type="checkbox" id="gwd_collect_popup_noremind">\
										<label for="gwd_collect_popup_noremind" style="position:relative;top:-2px;">不再提醒</label>\
									</div>\
								</div>';
					$('body').append(toops);
					$('.gwd_collect_popup_close').click(function (){
						$('.gwd_collect_popup').remove();
						return false;
					});
					$(".gwd_collect_popup_goto_loadingpage").click(function(){
						Extension.sendMessage({greeting: "GOTO_LOADING_PAGE", from : 'plugin_toolbar'},function(obj){});
						return false;
					});
					$("#gwd_collect_popup_noremind").click(function(){
						if($("#gwd_collect_popup_noremind").prop('checked')){
							Extension.sendMessage({greeting: "collect_popup_noremind_hide"},function(obj){});
						}else{
							Extension.sendMessage({greeting: "collect_popup_noremind_show"},function(obj){});
						}
					});
					$('.gwd_collect_popup').animate({opacity: 0.35},4000,function(){
					    $(this).remove();
					}).mouseover(function(){
					 	var _this = $(this);
					 	if ( _this.is(':animated') ) {
					 		_this.css('opacity',1);
					 		_this.stop();
					 	};
					}).mouseout(function(){
					 	$(this).animate({opacity: 0.35},2000,function(){
							$(this).remove();
						});
					});
				},1300);
			});
			return false;
		};
	});
	if(!arguments.length){
		return fn;
	}
	var collectable = fn._collectable;
	var from = clientVersion;
	var $node = $($node);
	
	if($node.parents('.mmz_toolbar_big').length == 0){
		from += "_nothing_small";
	}else if($node.hasClass("gwd_toolbar_underline_box")){
		from += "_inline_recommend";
	}else if($node.hasClass("gouwudai_chrome_insert_info_div_cbutton")){
		from += "_inpage_button";
	}else{
		from += "_inline_priceratio";
	}
	if(saveDone){
		Extension.sendMessage({greeting: "GOTO_LOADING_PAGE",from: 'plugin_toolbar'},function(){});
	}else if(collectable){
		try{
			new Audio(chrome.extension.getURL('images/photoShutter.mp3')).play();
		}catch(error){
			log("无法创建audio");
		}
		Extension.sendMessage({greeting: "CREATE_BASE64_URL"},function(obj){
			setTimeout(function(){
				var info = pageInfoExtract(template) || {};
				if(obj.position && obj.position.location == 'sidebar'){
                    animate.FlyIconAnimate(info,[],(obj.position.index*42+27),80);
                }else{
                    animate.FlyIconAnimate(info);
                }
				$('.gwd_ns_savetofavor').addClass("gwd_ns_done");
			},100);
		});
		window.postMessage({type: "FROM_PAGE_RIGHT_BUTTON",from :from}, "*");
	}else{
		fn.collectPopup({model:"fail"});
	}
}

function initFn(fn,argv,init){
	var tmp;
	if(!fn._initialized){
		if($.isFunction(argv)){
			tmp = init;
			init = argv;
			argv = tmp;
		}
		if($.isArray(argv)){
			init.apply(null,argv);
		}else{
			init();
		}
		fn._initialized = true;
	}
	return false;
}

/**
 * author: Gyk
 * 加载无模板业务
 */
function loadNotpl(){
	log('in notpl');
}

function loadHzHaitaoCart(){
	var cart = null;
	setTimeout(load, 0);
	
	function load(){
		getGoodsList(function(data){
			loadCart(data);
		});
	}
	
	function getGoodsList(callback){
		Extension.sendMessage({greeting:'GET_HAITAO_CHECKOUT_CART'}, function(data){
			callback && callback(data);
		});
	}
	
	function loadCart(data){
		if( !data ){
			data = {};
		}
		if( !data.cart ){
			cart = [];
		}
		
		//接受页面返回
		var prev_detail = null;
		document.addEventListener('DoClearJob', function (e) {
			if( !prev_detail && e.detail ){
				prev_detail = e.detail;
				Extension.sendMessage({greeting:'HAITAO_CHECKOUT_DONE', order: e.detail}, function(){});
			}
		});
		
		//调用页面接口
		injectScript(function(data){
			try{
				window.mmz.loadCartFunc(data);
			}catch(e){
			}
		}, JSON.stringify(data));
	}
}

/**
 * 页面注入函数
 * @param func
 */
function injectScript( func , params){
	var actualCode = '(' + func + ')('+params+');';
	var script = document.createElement('script');
	script.textContent = actualCode;
	document.documentElement.appendChild(script);
	// script.remove();
}

/**
 * 加载随机class功能 
 */
function loadRandomCssFunc(){
	$.ajax({
		url:chrome.extension.getURL('css/content.css'),
		async:false,
		type:'GET',
		success:function(data){
			if( data ){
				$('head').append('<style>' + data + '</style>');
			}else{
				log('获取css样式文件失败');
			}
		},
		error:function(e){
			log('获取css样式文件失败');
		}
	});
}
;
;(function(undefined){
	var isBG = !!window._services;
	
	//根据url获得此url对应的domain
	function extractUrlDomain(url){
		var regList = /^https?\:\/\/[^\/]*?([^\/\.]+(?:\.com|\.cn|\.net|\.hk|\.co|\.de)(?:\.[a-z]{1,2})?)/.exec(url);
		if( regList && regList.length>1 ){
			return regList[1];
		}else{
			return "";
		}
	}
	
	function generateUrl(data){
		var key,anchor,query, tmp = result = null;
		try{
			if(data && typeof data.url == 'string'){
				result = data.url;
				anchor = data.anchor;
				query = data.query;
				if(typeof query == 'string'){
					tmp = query;	
				}else if($.isArray(query)){
					tmp = query.join('&');
				}else if(query){
					for(key in query){
						if(tmp == null){
							tmp = '';
						}else{
							tmp += '&';
						}
						if (query[key] != null) {
							tmp += key + '=' + query[key];
						}else {
							tmp += key;
						}
					}
				}
				if(tmp != null){
					result += '?'+tmp;
				}
				if(anchor!=null){
					result += '#'+anchor;
				}
			}
		}catch(e){
			log("generateUrl出错:"+url);
			log(e);
		}
		return result;
	}
 
	//获得版本号
	var initStat = function(obj){
		var clientType = obj.clientType == 'customization' ? 'se':'chrome';
		var clientVersion = obj.clientVersion;
		var Mid = obj.Mid;
		
		var curUid;
		var getUid = function(){
	        function S4() {
	            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	        }
	        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
	    };
		
		var prevJob = new Promise(function(resolve,reject){
			chrome.storage.local.get('_uid',function(data){
				if(!data){
					reject();
					return;
				}
				curUid = data['_uid'];
		        if(!curUid){
		            curUid = getUid();
		            chrome.storage.local.set({_uid:curUid},function(){
						resolve();
					});
		        }else{
					resolve();
				}
		    });
		})['catch'](function(err){
			curUid = getUid();
		});
	
		var doWork = function(work){
			if(!curUid){
				prevJob = prevJob.then(function(resolve){
					work();
					resolve();
				},$.noop)
			}else{
				work();
			}
		}
		//@to be deprecated
	    var stat = {
			//@to be deprecated
	        click:function(arg){
				var work = function(){
					var base = {
		                a:'',
		                b:'',
		                n:'',
		                c:clientType,
		                r:'',
		                h:'stat_gouwudai.360.cn',
		                y:1,
		                u:curUid,
		                t:+new Date
		            };
		            $.extend(base,arg);
		            $.get('http://s.360.cn/ec/s.html?'+$.param(base));
				}
				doWork(work);
	        },
			//@to be deprecated
	        pv:function(arg){
				var work = function(){
					var base = {
		                pv:1,
		                f:screen.width + '_' + screen.height,
		                l:'chrome',
		                c:clientType,
		                r:'',
		                h:'stat_gouwudai.360.cn',
		                y:1,
		                u:curUid,
		                t:+new Date
		            };
		            $.extend(base,arg);
		            $.get('http://s.360.cn/ec/s.html?'+$.param(base));
				}
				doWork(work);
	        },
			display:function(arg){
				return;
				chrome.extension.sendMessage({'greeting':'GET_XUID'},function(info){
					var base = {
						p : 'gwxm'
					};
					info.mid = Mid || '';
					$.extend(info,arg);
					base.msg = Base64.encode(JSON.stringify(info));
					chrome.extension.sendMessage({greeting:'DO_AJAX',config:{
						type : 'POST',
						url : 'http://p.s.360.cn/pstat/plog.php',
						data : $.param(base)
					}},$.noop);
				});
			},
			_baseInfo : (function(){
				var info = {
					browser : clientType,					
					plugver : clientVersion,
					scene : "",
					catid : 0
				};
				if(!isBG){
					info = $.extend(true, info, {
						url : encodeURIComponent(pageUrl.split('?')[0]),
						domain : extractUrlDomain(pageUrl)
					});
				}
				return info;
			})(),
			_infos : [],
			init : function(type){
				var MAX = 5;
				var infos = this._infos;
				if(type == null){
					infos.length = 0;
					for(var i=0; i<MAX; ++i){
						infos[i] = {
							step : [],
							subject : [],
							module : []
						}
					}
				}else if(type<MAX && type>=0){
					infos[type] =  {
						step : [],
						subject : [],
						module : []
					}
				}
			},
			getBase : function(){
				return this._baseInfo;
			},
			getInfo : function(type){
				if(type!=null && this._infos[type]){
					return this._infos[type];
				}else{
					console.error("无效类型");
				}
			},
			//新静态打点接口
			run : function(type,data){
				//ferri 暂时不用360打点
				return;
				var fn = arguments.callee;
				try{
					if(typeof fn.singleton == 'undefined'){
						fn.singleton = {
							'stat' : function(data){
//								var base = this.base;
								var tail = "";
								var ex = {};
								for(var key in data){
									if($.isArray(data[key])){
										ex[key] = data[key].join('-');
									}else{
										ex[key] = data[key];
									}
								}
								if(isBG){
									chrome.tabs.query({active:true, currentWindow: true},function(tabs){
										if(tabs && tabs[0]){
											var tab = tabs[0];
											tail = '&pagetitle='+encodeURIComponent(tab.title);
											var tabUrl = tab.url.split('#')[0].split('?')[0];
											_services.getXUid(function(info){
												info.mid = Mid || '';
												var url = generateUrl({
													url : 'http://s.360.cn/d11/s.html',
													query : $.extend(true,{},info,{
														url: encodeURIComponent(tabUrl),
														domain: extractUrlDomain(tabUrl),
														scrsize : parseInt(screen.width)+'x'+parseInt(screen.height),
														winsize : tab.width + 'x' + tab.height
													},ex)
												}) + tail;
												_services.doAjax({
													type :'GET',
													url : url
												},$.noop);
											});
										}
									});
								}else{
									tail = '&pagetitle='+encodeURIComponent(pageTitle);
									chrome.extension.sendMessage({'greeting':'GET_XUID'},function(info){
										info.mid = Mid || '';
										var url = generateUrl({
											url : 'http://s.360.cn/d11/s.html',
											query : $.extend(true,{},info,{
												scrsize : parseInt(screen.width)+'x'+parseInt(screen.height),
												winsize : $(window).width() + 'x' + $(window).height()
											},ex)
										}) + tail;
										chrome.extension.sendMessage({'greeting':'DO_AJAX',config:{
											type :'GET',
											url : url
										}},$.noop);
									});
								}
							}
						}
					}
					var info = this.getInfo(type);
					if(info && !info.loaded){
						fn.singleton.stat($.extend(true,{},info,this.getBase(),data));
						info.loaded = true;
						if(type >= 2){
							this.init(type);
						}
					}
				}catch(e){
					console.log(e)
				}
			},
			pushInfo : function(type,name,value){
				var info = this.getInfo(type);
				if(info && $.isArray(info[name]) && $.inArray(value,info[name])<0){
					info[name].push(value)
				}
			}
	    };
		stat.init();
	    window.stat = stat;
	};
	if(isBG){
		_services.getClientConfig(initStat);
	}else{
		chrome.extension.sendMessage({greeting: "GET_CLIENT_CONFIG"},initStat);
	}
	
})();
;
var d12 = {};

;(function(undefined){
	var ad = {
		runLocal : true,
		updateAD : function(json,fromScene){
			if(json && json.adSrc){
				Extension.sendMessage({'greeting':'SET_AD',ad:json.adSrc,fromScene:fromScene||null},$.noop);
			}
		}
	};
	
//	var localImgPath = chrome.extension.getURL("double12/images");
//	var backgroundPath = chrome.extension.getURL("/double11/images/");
	var isShowCouponHint = function(url){
		var couponDomainList = ["jd.com","vip.com","jumei.com","yhd.com"];
		var result = false;
		if(typeof url == "string"){
			for(var i =0; i<couponDomainList.length; ++i){
				if(url.indexOf(couponDomainList[i]) >= 0){
					result = true;
					break;
				}
			}
		}
		return result;
	};
	var domain = extractUrlDomain(pageUrl);
		
	var isVisible = function(elem){
		var $elem = $(elem);
		var visible = $elem.is(':visible');
		if(visible){
			$elem.parents().each(function(i){
				if(!$(this).is(':visible')){
					visible = false;
					return false;
				}
			});
		}
		return visible;
	}
	var toolbar = $.extend(true,{},getToolbarLoader(),{
		loadMarket : function(data){
			if(data.nianhuo_log_img && data.nianhuo_log_url){
				var market = $('<div class="gwd_toolbar_market" gwd-subject="nianhuo_logo" gwd-href="'+data.nianhuo_log_url+'" style="background-image:url('+data.nianhuo_log_img+');">\
								</div>');
				Extension.sendMessage({greeting:'GET_IMAGE',image:data.nianhuo_log_img,width:108,height:64},function(imgSrc){
					market.css('background-image','url('+imgSrc+')');
				});
				this.getFlex().append(market);
			}
		},
		loadNotice : function(popad){
			if(popad && popad.ads && !$('#gwd_popinfo_container').length){
				var toolbar = this.getToolbar();
				Extension.sendMessage({greeting:'FILTER_AND_SAVE_POPINFO', data: popad.ads}, function(ads){
					if(ads && ads.length > 0){
						var popinfo =  $('<div id="gwd_popinfo_container" class="gwd_popinfo_container">\
											<div class="gwd_popinfo_header"><i class="gwd_ns_logo" style="background-image:url('+backgroundImg+');"></i><span class="gwd_ns_title">优质精选</span><i class="gwd_ns_close" style="background-image:url('+backgroundImg+');"></i></div>\
										 </div>');
						for(var i = 0; i < ads.length; ++i){
							var link = ads[i].link,
								isCmd = false,
								item, url_info;
							if(link && (typeof link == 'string')){
								var matches = link.match(/^gwdcmd:\/\/(.+)$/);
								if(matches){
									isCmd = true;
									link = matches[1];
								}else{
									url_info = MiTools.parseUrl(link);
									if(url_info){
										url_info.query.from = 'plugin_toolbar';
										link = MiTools.generateUrl(url_info);
									}
								}
							}else{
								link = 'https://www.henzan.com?from=plugin_toolbar';
							}
							item = $( (isCmd ? '' : '<a href="'+link+'" target="_blank">')+'<div title="'+(ads[i].title||'')+'" class="gwd_popinfo_item '+( i == 0 ? 'gwd_ns_big':'')+'"><img class="gwd_popinfo_pic" src="'+( i== 0 ? ads[i].pic : ads[i].pic_s )+'" /><div class="gwd_popinfo_title"><span>'+(ads[i].title||'')+'</span></div></div>'  + (isCmd ? '' : '</a>') );
							if(isCmd){
								(function(msg){
									item.on('click',function(){
										Extension.sendMessage({greeting:msg}, $.noop);
									});
								})(link);
							}
							item.appendTo(popinfo);
						}
						popinfo.on('click','.gwd_ns_close',function(){
							popinfo.hide();
						});
						popinfo.appendTo('body');
						Extension.ajax({
							'url' : gwdHttps+'api.html?path1=qihoo-mall-stat&path2=plugin-popad',
							'type' : 'GET',
							'async' : true
						});
						var server_exp = parseInt(popad.cd);
						var exp = (server_exp < 86400 * 5 && server_exp > 0) ?  server_exp : 86400;
						Extension.updateGwdOptions(null, {'next_bjpop': ((new Date())/1000^0) + exp});
						setTimeout(function(){
							popinfo.css({'left': 0, 'bottom':toolbar.height()+1});
						}, 500);
					}
				});
			}
		},
		loadExtraModules : function(modules){
			if(!modules || !modules.length){
				return;
			}
			var container = this.getFlex();
			$.each(modules, function(i, module){
				if(!module || !module.pic || !module.link || (typeof module.link != 'string') ){
					return true;
				}
				var link = module.link,
				isCmd = false,
				item, url_info;
				var matches = link.match(/^gwdcmd:\/\/(.+)$/);
				if(matches){
					isCmd = true;
					link = matches[1];
				}else{
					url_info = MiTools.parseUrl(link);
					if(url_info){
						url_info.query.from = 'plugin_toolbar';
						link = MiTools.generateUrl(url_info);
					}
				}
				var item = 		'<div class="gwd_toolbar_exmodule gwd_toolbar_underline_box" title="' + (module.title||'') + '" ' + ( module.stat ? 'gwd-subject="'+module.stat+'" ' : '' ) + (isCmd ? '' : 'gwd-href="'+link+'" ') + '>\
									<img class="gwd_toolbar_exmodule_pic" src="' + module.pic + '" />\
									<div class="gwd_toolbar_exmodule_text">' + (module.text||'') + '</div>';
				if(module.hint){
					item += 		'<div class="gwd_toolbar_hint">最低价</span>';
				}
				item +=			'</div>';
				item = $(item);
				if(isCmd){
					(function(msg){
						item.on('click',function(){
							Extension.sendMessage({greeting:msg, from:'plugin_toolbar'}, $.noop);
						});
					})(link);
				}
				item.appendTo(container);
			});
		},
		init : function(){
			getToolbarLoader().init.apply(this,arguments);
			this.addToolbarClass('gwd_ns_x12');
		}
	});
	
	var channelLoad = function(index,regArray){
		var regItem = regArray ? regArray[index] : null;
		if(!regItem){
			return false;
		}
		new Promise(function(resolve,reject){
			Extension.sendMessage({'greeting':'GET_AD'},function(src){
				if(src){
					Extension.ajax({
						url : src,
						type : 'GET',
						cache : false,
						dataType : 'text'
					},function(str){
						if(str){
							try{
								eval('(' + str + ')');
							}catch(e){
								log(e)
							}
						}
						if(ad.runLocal){
							resolve();
						}else{
							reject();
						}
					});
				}else{
					resolve();
				}
			});
		}).then(function(){
			//统计埋点			
			var	URL_FOR_DATA = {
						url : gwdHttps+'api.html',
						query : {
							'path1' : 'qihoo-mall-goodsinfo',
							'path2' : 'listpage',
							'cv' : clientVersion,
							'url' : encodeURIComponent(pageUrl),
							'mid' : Mid,
							'type' : regItem.type,
							'prevpop' : ''
						}
					};
			//格式化文字的文案
			toolbar.setFormatter({
				'image': function(data){
					var channel = data._channel || 'cps';
					var tp = channel == "mv" ? ('plugin_recommend_mv'+data._showid):"plugin_recommend_sinfo_without_rf";
					data.image = data.pic;
					//data.price = $.isNumeric(data.price) ? MiTools.getPrFix(data.price) : data.price;
					//data._url = data.curl1;
					data.url = data.rf || gwdUrlJump+encodeURIComponent(data.url)+"&from="+encodeURIComponent(pageUrl)+"&cv="+clientVersion+"&pr="+data.price+"&tp="+tp;
					return this.getDefaultFormatter('image').call(this,data);
				},
				'text' : function(data){
					data.title = data.title||'';
					data.url = data.url||'https://www.henzan.com';
					var url_info = MiTools.parseUrl( data.url );
					if(url_info){
						url_info.query.from = 'plugin_toolbar';
						data.url = MiTools.generateUrl(url_info);
					}
					var html = '<li class="gwd_toolbar_henzan_item_pic" title="'+data.title+'" gwd-href="'+data.url+'" gwd-channel="hz">\
									<div class="gwd_henzan_pic">\
										<img src="'+data.pic_url+'">\
									</div>\
									<div class="gwd_henzan_desc">\
										<div class="gwd_henzan_desc_text">'+data.title+'</div>\
										<div class="gwd_henzan_desc_meta">\
											<span class="henzan_icon" ><i class="henzan_icon_view" style="background-image:url('+backgroundImg+');"></i>'+(data.article_view_nums||0)+'</span>\
											<span class="henzan_icon" ><i class="henzan_icon_zan" style="background-image:url('+backgroundImg+');"></i>'+(data.article_zan_nums||0)+'</span>\
										</div>\
									</div>\
								</li>';
					return $(html);
				}
			});
			toolbar.setOptions({
				showWhenEmpty : false,
				showSmall : true,
				show : true,
				showKLHK: true
			});
			toolbar.setTemplate(regItem);
			//注册点击事件
			toolbar.activate();
			var gwd_options = {};
			var checkOptions  = new Promise(function(resolve,reject){
				//获取设置
				Extension.getGwdOptions(function(options, optionsTemp){
					gwd_options = options;
					var nowTime = (new Date())/1000;
					if (optionsTemp["priceratio_opt"] && optionsTemp["priceratio_opt"][0] == MiTools.getDateStr() && optionsTemp["priceratio_opt"][1] == 'close') {
						gwd_options["priceratio_opt"] = optionsTemp["priceratio_opt"][1];
					}
					if(!gwd_options["priceratio_opt"] || gwd_options["priceratio_opt"] == ""){
						gwd_options["priceratio_opt"] = "open";
					}
					if(optionsTemp['enhance_opt_noreset'] && optionsTemp['enhance_opt_noreset'][0] > nowTime){
						gwd_options['enhance_opt_noreset'] = true;
					}
					if(options['popinfo_opt'] == 'open' && (optionsTemp['next_bjpop'] > nowTime )){
						gwd_options["popinfo_opt"] = 'close';
					}
					if(options['klhk_opt'] != 'open'){
						toolbar.setOptions({'showKLHK':false});
					}
					if(!isGulike && gwd_options["priceratio_opt"] == "open"){
						gwd_toolbar_container_state = 'open';
						resolve(0);
					}else{
						gwd_toolbar_container_state = 'close';
						toolbar.setOptions({'show':false});
						if (!isGulike) {
							resolve(1);
						}else {
							reject(new Error('有猜你喜欢'));
						}
					}
					$.extend(true,URL_FOR_DATA.query,{
						'toolbar_state': gwd_toolbar_container_state
					});
				});
			}).then(function(errCode){
				if (ad.data0 !== undefined) {
					return {errCode:errCode,data:ad.data0};
				}
				return new Promise(function(resolve, reject){
					Extension.sendMessage({'greeting':'GET_POPINFO_HISTORY'}, function(ids){
						var str = '';
						if(ids && ids.length > 0){
							str = ids.join(',');
						}
						URL_FOR_DATA.query.prevpop = str;
						resolve();
					});
					setTimeout(function(){
						resolve();
					},1000);
				}).then(function(){
					return new Promise(function(resolve,reject){
						var exInfo = {
							guideHtml : '<div>热门</div><div>爆款</div>',
							comClass : 'gwd_ns_klhk',
							gwdSubject : 'catklhk-'+regItem.type
						};						
						//情景化页面
						var	pageInfo = toolbar.getPageInfo();
						delete pageInfo['version'];
						delete pageInfo['shopId'];
						log(pageInfo);
						if(stat.getInfo(0).loaded){
							stat.pushInfo(1,'step','360req');
						}else{
							stat.pushInfo(0,'step','360req');
						}
						Extension.ajax({
							url : MiTools.generateUrl(URL_FOR_DATA),
							type : 'POST',
							timeout: 3000,
							cache: false,
							async: true,
							data: {"checkinfo":riddle.encrypt(encodeURIComponent(JSON.stringify(pageInfo)), 2, true)},
							withMiTplMD5:true,
							dataType : 'json'
						},function(json){
							if(json != null){
								if(isTaobao()){
									stat.pushInfo(0,'step','360resp');
								}else{
									stat.pushInfo(1,'step','360resp');
								}
							}
							stat.run(0);
							// ferri打点，minibar出现次数
							var growingTp = (isGWZS?isGWZS:'') + 'minibar';
							chrome.extension.sendMessage(
								{
									'greeting':'GROWINGIO_EVENT',
									'type':growingTp,
									'domain':extractUrlDomain(pageUrl)
								},
							$.noop)
							ad.updateAD(json,true);
							ad.data0 = json;
							//模板紧急更新是否开启
							if(json && json.tempupdate && json.tempupdate == 1 ){
								Extension.sendMessage({greeting: "UPDATE_TEMPLATE"});
							}
							if(json){
								if(json.popUpPlan == 'B' || (json.popUpPlan == 'A' && regItem && (domain=='jd.com' || domain=='taobao.com' ||domain=='tmall.com'))){
									Extension.sendMessage({greeting:'OPEN_D12',config:json},$.noop);
								}
							}
							//浮动价格曲线开关
//							FloatCurve.updateDisplayOption(json);
							//云控开关检查
							;(function(json){
								toolbar.execServerOptions(json, gwd_options, {'show_toolbar':'show', 'show_small':'showSmall', 'show_klhk':'showKLHK'});
							})(json);
//							$.extend(true,exInfo, json);
							resolve({errCode:errCode, data:$.extend(true, {}, exInfo, json)});
						});
					});
				});
			}).then(function(data){
				return new Promise(function(resolve,reject){
                    var json = data.data;
					var errCode = data.errCode;
					if(json && json.RC == 1 ){
						log("服务端mv分类信息 匹配成功");
						if(errCode == 0){
							resolve(json);
						}else{
							reject(json);
						}
					}else{
						log("服务端无信息且不允许展示");
						reject(new Error("服务端无信息"));
					}
				});
			});
	
			/**
			 * 加载比价条
			 * 缩起状态时点击小购物袋图标后才加载
			 * 
			 * @param {Object} regItem 
			 * @param {Object} preJob 前置任务
			 */
			(function (regItem,preJob){
				var callee = arguments.callee;
				var preperation = (preJob instanceof Promise && preJob) || new Promise(function(resolve,reject){resolve()});
				preperation.then(function(data){
					//加载比价条
					log("加载比价条");
					if(typeof data.showrate == 'string'){
						toolbar.setOptions({goodsDistribution:data.showrate.split(',')});
					}
					var cidNames = ['cat3_id','cid'];
					$.each(cidNames,function(i,name){
						if(name in data){
							stat.getBase().catid = data[name];
							return false;
						}
					});
					;(function(){
						var statNames = ['xbdata'];
						$.each(statNames,function(i,name){
							if(name in data){
								var dataArray = data[name];
								$.each(dataArray,function(j,dataItem){
									dataItem._channel = 'notmv';
								});
							}
						});
					})();
					
					toolbar.init();
//					toolbar.loadMarket(data);
					if (!isGWZS) {
						toolbar.loadExtraModules(data.modules);
					}
					if(toolbar.getOptions().showKLHK){
						if(data.article && data.article.hzexp && data.article.hzexp.length > 0){
							toolbar.addComponent(data.article.hzexp, '<div>达人</div><div>晒物</div>');
						}
						log('开始请求mv还在看商品');
						var dummy = toolbar.addDummyComponent((data.mv&&data.mv.max_num)||10,data.guideHtml,'image').addClass(data.comClass);
						toolbar.addToolbarClass('gwd_ns_channel');
						toolbar.calcMaxNum(function(res,resolve){
							dummy.remove();
							if(res){
								for (var i = 0; i < res.length; ++i) {
									if (res[i].list.hasClass(data.comClass)) {
										MV.init(data,resolve);
										MV.sinfo = {data: data.xbdata || []};
										if(data.personal && data.personal.length > 0){
											MV.curCanShowNum = Math.max(res[i].pos - Math.min(data.personal.length , 2),0);
										}else{
											MV.curCanShowNum = res[i].pos;
										}
										MV.assembly = function(){
											var sinfo = this.sinfo;
											var data = this.data;
											if (sinfo.data && sinfo.data.length > 0) {
												$.each(sinfo.data, function(i, item){
													if (!item._channel) {
														item._channel = 'mv';
														item._showid = '_' + ((data.mv && data.mv.g_showid) || 'Z3lOsM');
													}
												});
												toolbar.addComponent((data.personal||[]).slice(0,2).concat(sinfo.data).concat((data.personal||[]).slice(2)), data.guideHtml, 'image').addClass(data.comClass).attr('gwd-subject',data.gwdSubject);
											}else if(data.personal && data.personal.length>0){
												toolbar.addComponent(data.personal, data.guideHtml,'image').addClass(data.comClass).attr('gwd-subject',data.gwdSubject);
											}
											this.resolve && this.resolve();
										};
										if(data.mv && data.mv.req){
											MV.calculateNum();
											if (MV.requestMvNum) {
												MV.getMvData();
											} else {
												MV.assembly();
											}
										}else{
											MV.assembly();
										}
									}
								}
							}else{
								log("没有信息，calcMaxNum函数可能运行出错");
								resolve && resolve();
							}
						});
					}
					toolbar.show(function(){
						if(gwd_options['popinfo_opt'] == 'open'){
							toolbar.loadNotice(data.popad);
						}
					});
				})['catch'](function(errInfo){
					log(errInfo);
					if(!(errInfo instanceof Error)){
						stat.getInfo(0).step = stat.getInfo(0).step.concat(stat.getInfo(1).step);
						stat.getInfo(1).step = [];
						stat.run(0);
						$('.mmz_toolbar_control_shrink').live('click',function(){
							var fn = arguments.callee;
							setTimeout(function(){
								callee(regItem,new Promise(function(resolve,reject){
									resolve(errInfo);
								}));
								$('.mmz_toolbar_control_shrink').die('click',fn);
							},500);
						});
						toolbar.setOptions({'show':true});
						toolbar.initShrink('展开喵喵折');					
					}else{
						stat.run(0);
						toolbar.reset();
						toolbar.initShrink('无比价');
					}
				});
			})(regItem, checkOptions);
			haveDianShang = false;
		});
	};
	var shopContentLoad = function(index,regArray){

		var fixTd;
		var data_cache = {current:null};
		var regItem = regArray[index];
		new Promise(function(resolve,reject){
			var inject = function() {
				window.NVC_Opt = {
					appkey:'FFFF0N00000000006AFF',
					scene:'nvc_activity',
					isH5:false,
					popUp:false,
					trans: {"key1": "code0","nvcCode":400},
					renderTo: '#nc-container',
					language: "cn",
					customWidth: 300,
					nvcCallback: function(nvcval) {
						var evt = document.createEvent("CustomEvent");
						evt.initCustomEvent('MMZ_NVC_PASS', true, true, {nvcval: nvcval});
						document.dispatchEvent(evt);
						document.dispatchEvent(new CustomEvent('MMZ_NVC_PASS', { detail: {nvcval:nvcval} }));

					}
				}
			};
			if ($.isCompressed) {
				inject = inject.toString().replace(/nc-container/g, MiTools.dynamicTpl.get('nc-container'));
			}
			injectScript(inject);
			var guide = document.createElement('script');
			guide.src = '//g.alicdn.com/sd/nvc/1.1.112/guide.js?t='+MiTools.getDateStr();
			document.body.appendChild(guide);
			resolve();
		}).then(function() {
			return new Promise(function(resolve, reject) {
				Extension.sendMessage({'greeting':'GET_AD'},function(src){
					if(src){
						Extension.ajax({
							url : src,
							type : 'GET',
							cache : false,
							dataType : 'text'
						},function(str){
							if(str){
								try{
									eval('(' + str + ')');
								}catch(e){
									log(e);
								}
							}
							if(ad.runLocal){
								resolve();
							}else{
								reject();
							}
						});
					}else{
						resolve();
					}
				});
			})
		}).then(function(){
			var userId = "";
			var iconClass = '';
			var gwd_options = {};
			var gwd_toolbar_container_type = "have_collect_button";
			var builtinButtonInfo = null;
			var jumpPageInfo = {};
			var NS_DICT = {
				0 : 'djhzk',
				1 : 'tongkuan',
				4 : 'klhk'
			};
			//初始化比价条对象
			toolbar.setFormatter({
				'text':	function(data){
					var haveGoods = data.ms == 1;
					data.url = data.jump;
//					var isThirdparty = data.thirdparty || false;
					return this.getDefaultFormatter('text').call(this,data)
								.addClass(haveGoods?'':'gwd_ns_nogoods')
//								.addClass(isThirdparty?'gwd_ns_thirdparty':'')
								.attr({'gwd-channel' : 'cps','gwd-price' : data.pr})
								.append('		<span class="gwd_toolbar_goods_item_text_multiline gwd_font_bold '+( haveGoods ? 'gwd_font_red':'gwd_font_lightgray')+'">'+(haveGoods?'¥ '+MiTools.getPrFix(data.pr) : '缺货')+'</span>\
												<span class="gwd_toolbar_goods_item_text_multiline gwd_font_black">'+data.mc+'</span>\
												'+(data.tip ?'<div class="gwd_toolbar_hint">最低价</div>':''));
				},
				'image' : function(data){
					var channel = data._channel || 'cps';
					var tp = channel == "mv" ? ('plugin_recommend_mv'+data._showid):"plugin_recommend_sinfo_without_rf";
					data.image = data.pic;
					//data.price = $.isNumeric(data.price) ? MiTools.getPrFix(data.price) : data.price;
					//data._url = data._url || data.url;
					data.url = data.rf || gwdUrlJump+encodeURIComponent(data.url)+"&from="+encodeURIComponent(pageUrl)+"&cv="+clientVersion+"&pr="+data.price+"&tp="+tp;
					return this.getDefaultFormatter('image').call(this,data).attr({
						'gwd-channel': channel,
						'gwd-price' : data.price
					});
				}
			});
			toolbar.setOptions({
				openTabSavingData : true,
				isNewStyle : true,
				showAfterImgReady : false,
				paddingRight : domain=='jd.com'? 150 : 40,
				showWhenEmpty : true,
				showHistoryPrice : true,
//				loadMashangmai : !isTaobao(),
				showSmall : true,
				show : true,
				showKLHK : true,
				showInsetBtn : true
			});
			//设置模板
			toolbar.setTemplate(regItem);
			toolbar.activate();
			//统计访问商家信息
//			Extension.sendMessage({greeting: "SAVE_VISIT_HISTORY",domain:domain},function (obj){});
		
			var checkOptions  = new Promise(function(resolve,reject){
				//获取设置
				Extension.getGwdOptions(function(options, optionsTemp){
					gwd_options = options;
					var nowTime = (new Date())/1000;
					if (optionsTemp["priceratio_opt"] && optionsTemp["priceratio_opt"][0] == MiTools.getDateStr() && optionsTemp["priceratio_opt"][1] == 'close') {
						gwd_options["priceratio_opt"] = optionsTemp["priceratio_opt"][1];
					}
					if(!gwd_options["priceratio_opt"] || gwd_options["priceratio_opt"] == ""){
						gwd_options["priceratio_opt"] = "open";
					}
					if(options['popinfo_opt'] == 'open' && optionsTemp['next_bjpop'] > nowTime ){
						gwd_options["popinfo_opt"] = 'close';
					}
					if(optionsTemp['enhance_opt_noreset'] && optionsTemp['enhance_opt_noreset'][0] > nowTime){
						gwd_options['enhance_opt_noreset'] = true;
					}
					if(options['klhk_opt'] != 'open'){
						toolbar.setOptions({'showKLHK':false});
					}
					if(options['inpage_button_opt'] != 'open'){
						toolbar.setOptions({'showInsetBtn':false});
					}
					if(!isGulike && gwd_options["priceratio_opt"] == "open"){
						gwd_toolbar_container_state = 'open';
						resolve(0);
					}else{
						gwd_toolbar_container_state = 'close';
						toolbar.setOptions({'show':false});
						if (!isGulike) {
							resolve(1);
						}else {
							reject(new Error('有猜你喜欢'));
						}
					}
				});
			}).then(function(errCode){
				if (ad.data0 !== undefined) {
					return {errCode:errCode,data:ad.data0};
				}
				return new Promise(function(resolve, reject){
					Extension.sendMessage({'greeting':'GET_POPINFO_HISTORY'}, function(ids){
						var str = '';
						if(ids && ids.length > 0){
							str = ids.join(',');
						}
						resolve(str);
					});
					setTimeout(function(){
						resolve('');
					},1000);
				}).then(function(popids){
					return new Promise(function(resolve,reject){
						Extension.sendMessage({greeting:'GET_REFERER_PRICE'},function(refererPageInfo){
							log("跳转链接的信息：");
							log(refererPageInfo);
							var pageInfo = toolbar.getPageInfo();
							log("上传的页面商品详情：");
							log($.extend({},pageInfo));
							var startPrice = MiTools.getPrFix(pageInfo.price);
							var startIssale = pageInfo.isSale;
							var tPrice = tSale = '';
							var fromTp = 0;
							if(refererPageInfo && refererPageInfo.data){
								tPrice = refererPageInfo.data.tPrice;
								tSale = refererPageInfo.data.tSale;
								fromTp = refererPageInfo.data.fromTp;
							}
							stat.pushInfo(0,'step','360req');
							var url = location.href;
							var ajaxUrl = gwdHttps + 'api.html?path1=qihoo-mall-goodsinfo&path2=goodspricecmp&prevpop='+popids+'&url='+encodeURIComponent(url)+'&v=v5&bfrom=normal'+(gwd_options["popinfo_opt"] == 'open' ? '&pop=1' : '')+'&cv='+clientVersion+'&hisOpn='+(gwd_options["history_opt"] == "open" ? 1 : 0)+'&toolbar_state='+gwd_toolbar_container_state+'&isGulike='+isGulike.toString()+'&mid='+Mid+'&tPrice='+tPrice+'&tSale='+tSale+'&fromTp='+fromTp;
							var _ajaxUrl = MiTools.parseUrl(ajaxUrl);
							Extension.ajax({
								type :'POST',
								cache: false,
								url : ajaxUrl,
								async: true,
								data : {"checkinfo":riddle.encrypt(encodeURIComponent(JSON.stringify(pageInfo)), 2, true)},
								timeout : 5000,
								withMiTplMD5:true,
								dataType : 'json'
							},function(json){
								if(json != null){
									if(isTaobao()){
										stat.pushInfo(0,'step','360resp');
									}else{
										stat.pushInfo(1,'step','360resp');
									}
								}
								if( json ){
									json.pageInfo = pageInfo;
								}
								ad.updateAD(json,true);
								//更新浮动价格曲线设置
//								FloatCurve.updateDisplayOption(json);
								//模板紧急更新是否开启
								if(json && json.tempupdate && json.tempupdate == 1 ){
									Extension.sendMessage({greeting: "UPDATE_TEMPLATE"});
								}
								if(json){
									if(json.popUpPlan == 'B' || (json.popUpPlan == 'A' && domain!='jd.com' && domain!='taobao.com' && domain!='tmall.com')){
										Extension.sendMessage({greeting:'OPEN_D12',config:json},$.noop);
									}
								}
								ad.data0 = json;
								if( json&&location.hostname.indexOf('6pm.com' )!== -1){
									getSpecFrom6pm(json.pageInfo);
								}
								if(json){
									getSku(pageInfo, function(sku){
										var cache_key = getDataCacheKey(sku, url);
										data_cache[cache_key] = json;
										data_cache.current = cache_key;
										resolve({errCode: errCode, data: json,ajaxUrl:_ajaxUrl, cache_key: cache_key});
									});
								}else{
									resolve({errCode: errCode, data: json,ajaxUrl:_ajaxUrl});
								}
							});
						});
					});
				});
				
			}).then(function(data){
				return new Promise(function(resolve,reject){
					var json = data.data;
					var errCode = data.errCode;
					if(!json){
						var con = toolbar.getToolbar();
						if( con.attr("id") == "gwd_toolbar_container_animation" ){
							con.attr("id","");
						}
						toolbar.initShrink("无比价");
						log("比价请求超时！");
						reject(new Error("比价请求超时或者服务器无返回"));
					}else{
						//发送浏览历史
//						Extension.sendMessage({greeting: "HISTORY_INISET_RECORD",obj:{goodInfo:json.cinfo}});
						if(json.info && json.info.gl && json.info.gl.length > 0 ){
						//有比价
							;(function(data){
								//获得跳转url
								function getJumpUrl(obj , top){
									var top = top || 'plugin_compare';
									var jumpUr = gwdUrlJump +encodeURIComponent(obj.ourl)+'&from='+encodeURIComponent(pageUrl)+'&cv='+clientVersion+'&mi='+obj.mi+'&pr='+obj.pr+'&ms='+obj.ms+'&tp='+top;
									if( obj['tip'] && top == 'plugin_compare' ){
										jumpUr += '&tip=1';
									}
									obj.jump = obj.rf || jumpUr;
									return obj;
								}
								var objGl = data.info.gl;
								for(var i = 0;i<objGl.length;i++){
									//objGl[i]._url = objGl[i].ourl;
									objGl[i] = getJumpUrl(objGl[i]);
								}
							})(json);
						}
						//云控开关检查
						;(function(json){
							toolbar.execServerOptions(json, gwd_options, {'show_toolbar':'show', 'show_history':'showHistoryPrice', 'show_small':'showSmall', 'show_bijia':'showBijia', 'show_klhk':'showKLHK', 'show_inset_btn':'showInsetBtn'});
						})(json);
						builtinButton(regItem);
						//页面嵌入历史价格
						insetHistoryPriceButton(json, null, !toolbar.getOptions().showInsetBtn);
						//页面嵌入全网比价信息 //注意一定要在生成jumpUrl后调用该方法
						insertBijiaIntoPage(json);
                        if (json.cinfo && !!json.yhq_url && !!json.yhq_partner_id  && !!json.yhq_id) {
                            insertCoupon(json);
                        }
						insertQrButton(json);
						hoverDelayFunction([
							[".gouwudai_chrome_insert_info_div", ".gouwudai_chrome_insert_info_div_pbutton", ".chrome-price:not(.gwd_ns_disabled)"],
							[".gouwudai_chrome_insert_info_div", ".gouwudai_chrome_insert_qr", ".gouwudai_chrome_insert_qr_detail"]
                        ]);
						//-----页面嵌入按钮结束
						toolbar.init();

						//加载海淘
						if( !isGWZS && json.ht_switch ){
							toolbar.loadHaitao();
							toolbar.loadHaitaoList();
							//页面嵌入一键海淘 add by lin
							toolbar.loadHaitaoBtn();
							toolbar.haitao && toolbar.haitao.render(json.pageInfo,null,true);
						}
						toolbar.loadHistoryPrice(json);
			            if (!isGWZS) {
			                toolbar.loadSavetofavor(json.finfo,json.cinfo);
			            }
			            toolbar.loadQrcode(json);
			            if (json.cinfo && !!json.yhq_url && !!json.yhq_partner_id && !!json.yhq_id) {
			                toolbar.loadCoupon(json);
			            }

                        // insertHistoryCurve(json);
                        if ( json.pcswitch === 1) {
                            //不信任pcinfo
							json.cinfo.pid = json && json.pcinfo && json.pcinfo.id;
                            json.pcinfo = null;
                            //屏蔽hover效果
                            // console.log("add");
                            $('.chrome-price').addClass('gwd_ns_disabled');
                            setTimeout(function() {
                                new Promise(function(resolve, reject) {
                                    var initOver = function(e) {
                                        document.removeEventListener('MMZ_GET_NVCVAL_INIT', initOver);
                                        resolve();
                                    };
                                    document.addEventListener('MMZ_GET_NVCVAL_INIT', initOver);
                                    var inject = function() {
                                        var _mmz_intval = setInterval(function() {
                                            if (window.getNVCVal) {
                                                var evt = document.createEvent("CustomEvent");
                                                evt.initCustomEvent('MMZ_GET_NVCVAL_INIT', true, true, {});
                                                document.dispatchEvent(evt);
                                                document.dispatchEvent(new CustomEvent('MMZ_GET_NVCVAL_INIT', {}));
                                                clearInterval(_mmz_intval);
                                            }
                                        }, 100);
                                    };
                                    injectScript(inject);
                                }).then(function() {
                                    insertNVC();
                                    // insertNVC(data.cache_key);
                                })
                            }, 0);
                        }
                        // else {
                        // 	setTimeout(function() {
                        // 		insertHistoryCurve(json);
                        // 	}, 0);
                        // }

						//定时刷新页面
						;(function(){
							function isOutOfDate(href, pre_href, page_info, pre_page_info ){
								var out_of_date = false;
								if( (href != pre_href) || (page_info.sku != pre_page_info.sku) ){
									out_of_date = true;
								}
								return out_of_date;
							}
							
							function updatePcinfo (pcinfo, href, page_info, pre_page_info ){
								var updated = false;
								if( pcinfo ){
									var startPrice = MiTools.getPrFix( pre_page_info.price );
									var startIssale = pre_page_info.isSale;
									var startMPrice = MiTools.getPrFix(pre_page_info.mobile_price);
									var startFreight = pre_page_info.freight;
									
									var newPrice = MiTools.getPrFix( page_info.price);
									var newIssale = page_info.isSale;
									var newMPrice = MiTools.getPrFix( page_info.mobile_price );
									var newFreight = page_info.freight;
									
									var price = newMPrice || newPrice;
//									console.log(json.pcinfo.info.length);
									if( price && price != pcinfo.info[pcinfo.info.length-1].pr ){
										pcinfo.info[pcinfo.info.length-1].pr = price;
										if(pcinfo.info[pcinfo.info.length-1].info){
											delete pcinfo.info[pcinfo.info.length-1].info.desc;
										}
										updated = true;
									}
									//请求线上价格数据后，关键字段改变则重新回传
									if( newPrice != startPrice
											|| newIssale != startIssale
											|| newMPrice != startMPrice
											|| newFreight != startFreight
									){
										Extension.ajax({
											type: 'POST',
					                        cache: false,
					                        url: gwdHttps + 'api.html?path1=qihoo-mall-goodsinfo&path2=yhq&url=' + encodeURIComponent(href) + '&cv=' + clientVersion+'&type=2',
					                        async: true,
					                        timeout: 5000,
					                        data: {"checkinfo":riddle.encrypt(encodeURIComponent(JSON.stringify(page_info)), 2, true)},
					                        dataType: 'json'
										},function(info){
											if(info){
												log("修复线上价格成功");
											}else{
												log("修复线上价格失败");
											}
										});
										// passed = true; //?  -sam
									}
								}
								return updated;
							}

							//注意这个地方，在pcswitch=1的时候，不承担渲染价格曲线的任务了
							function chkAndRender(json, pre_href, pre_cache_key, callback){
								var href = window.location.href || '';
								var page_info = toolbar.getPageInfo(true);
								getSku(page_info, function(sku){
									var cache_key = getDataCacheKey(sku, href);
									
									var pre_page_info = json.pageInfo;

									if( isOutOfDate(href, pre_href, page_info, pre_page_info) ){
										//过期了则把数据缓存下来，等待下次执行
										data_cache[pre_cache_key] = json;
										callback && callback();
										return;
									}

									//ferri 6pm 获取商品尺寸
									if( json && json.pageInfo && json.pageInfo['ht_spec'] ){
										page_info['ht_spec'] = json.pageInfo['ht_spec'];
										page_info['sizeChange'] = json['sizeChange'];
									}
									json.pageInfo = page_info;
									//从缓存维持住pcinfo(如果有的话)
									if( data_cache[cache_key] && data_cache[cache_key].pcinfo ){
										json.pcinfo = data_cache[cache_key].pcinfo;
									}
									data_cache[cache_key] = json;
									if( data_cache.current != cache_key ){
										//更新数据了
										data_cache.current = cache_key;
										if(json && json.pcinfo){
                                            // console.log('remove')
                                            $('.chrome-price').removeClass("gwd_ns_disabled");
                                            $('.gouwudai_chrome_insert_info_div_pbutton, .gwd_toolbar_price_trend').removeClass('gwd_ns_checkpc gwd_ns_nvc');
										}else{
											// console.log('add')
                                            $('.chrome-price').addClass("gwd_ns_disabled");
                                            $('.gouwudai_chrome_insert_info_div_pbutton, .gwd_toolbar_price_trend').addClass('gwd_ns_checkpc');
										}
                                        render(json, href);
										//刷新海淘展示,回调到刷新后做
										if( toolbar.haitao ){
                                            toolbar.haitao.render(page_info, callback, true);
                                            return;
										}
									}else if( updatePcinfo(json.pcinfo, href, page_info, pre_page_info) ){
										render(json, href);
									}else if( json.pageInfo['sizeChange'] ){
										if( toolbar.haitao ){
                                            toolbar.haitao.render(page_info, function(){
                                                if( json ){
                                                    json['sizeChange'] = false;
                                                }
                                                callback && callback();
                                            }, true);
                                            return;
										}
									}
									
									callback && callback();
									return;
								});
							}
							
							function render(json,url){
								// if( json && json.pcinfo ){
									insertBijiaIntoPage(json, true);
									if(isGulike){
										//重新处理内置按钮部分的价格曲线
										insetHistoryPriceButton(json, "repair_price_trend", !toolbar.getOptions().showInsetBtn);
									}else{
										//加载价格走势
										toolbar.loadHistoryPrice(json, "repair_price_trend");
										//重新处理内置按钮部分的价格曲线
										insetHistoryPriceButton(json, "repair_price_trend", !toolbar.getOptions().showInsetBtn);
									}
									Extension.sendMessage({
										greeting: 'SAVE_BIJIA_INFO_CURRENT',
										data: json
									}, $.noop);
//										$(".gwd_toolbar_info .gwd_toolbar_price_trend").remove();
//										$(".gouwudai_chrome_insert_info_div_pbutton").remove();
//										//页面嵌入历史价格
//										insetHistoryPrice(pcinfo);
//										toolbar.loadHistoryPrice(pcinfo,null,toolbar.getFlex().find('.gwd_ns_savetofavor'));
// 								}
							}							
							
							
							var lock = false;
							var _handler = setInterval(function(){
								if(lock){
									return;
								}
								lock = true;
								
								var href = window.location.href || '';
								var page_info = toolbar.getPageInfo(true);
								getSku(page_info, function(sku){
									var cache_key = getDataCacheKey(sku, href);
									var cached_toolbar_data;
									
									if( !data_cache[cache_key] ){
										data.ajaxUrl.query.url = encodeURIComponent(href);
										var url = MiTools.generateUrl(data.ajaxUrl);
										// console.log(page_info);
										Extension.ajax(
											{
												type :'POST',
												cache: false,
												url : url,
												async: true,
												data : {"checkinfo":riddle.encrypt(encodeURIComponent(JSON.stringify(page_info)), 2, true)},
												timeout : 5000,
												withMiTplMD5: true,
												dataType : 'json'
											},
											function(json){
												if(json != null){
													json.pageInfo = page_info;
                                                    // $('.gouwudai_chrome_insert_info_div_pbutton, .gwd_toolbar_price_trend').removeClass('gwd_ns_nvc').addClass('gwd_ns_checkpc');
													if( json.pcswitch === 1 ){
                                                        json.cinfo.pid = json && json.pcinfo && json.pcinfo.id;
                                                        json.pcinfo = null;
													}
													chkAndRender(json, href, cache_key, function(){
														lock = false;
													});
												}else{
													lock = false;
												}
											}
										);
									}else{
										cached_toolbar_data = data_cache[cache_key];
										//取缓存
										chkAndRender(cached_toolbar_data, href, cache_key, function(){
											lock = false;
										});
									}
								});
							}, 500);							
						})();

						if(json.article && json.article.count > 0){
							toolbar.loadUserExper(json.article);
							//页面嵌入用户体验
							insertUserExper(json.article);
						}


						(function(finfo,ginfo){
							var id = (ginfo && ginfo.goods_id) ? ginfo.goods_id : -1;
							Extension.sendMessage({greeting: "HAVE_LOCAL_COLLECT",goods_id: id},function(obj){
								json.have_collect = (obj.num > 0 || (finfo && finfo.self)) ? true : false;
								Extension.sendMessage({
									greeting: 'SAVE_BIJIA_INFO_CURRENT',
									data: json
								}, $.noop);
							});
						})(json.finfo,json.cinfo);
						if(errCode == 0){
							resolve(json);
						}else{
							reject(json);
						}
						/*
							ferri添加
							param json 获取的价格曲线数据
							param prePageInfo  页面信息
							param url 页面url
						*/
//						function fixTrend(json,prePageInfo,url){
//							fixTd && clearTimeout(fixTd);
//
//							fixTd = setTimeout(function(){
//								var startPrice = MiTools.getPrFix( prePageInfo.price );
//								var startIssale = prePageInfo.isSale;
//								var startMPrice = MiTools.getPrFix(prePageInfo.mobile_price);
//								var startProm = prePageInfo.prom;
//								var startFreight = prePageInfo.freight;
//
//								var pageInfoSec = toolbar.getPageInfo(true);
//								var newPrice = MiTools.getPrFix( pageInfoSec.price);
//								var newIssale = pageInfoSec.isSale;
//								var newMPrice = MiTools.getPrFix( pageInfoSec.mobile_price );
//								var newProm = pageInfoSec.prom;
//								var newFreight = pageInfoSec.freight;
//
//								var price = newMPrice || newPrice;
//								if( json.pcinfo && price && price != json.pcinfo.info[json.pcinfo.info.length-1].pr ){
//									json.pcinfo.info[json.pcinfo.info.length-1].pr = price;
//									if(json.pcinfo.info[json.pcinfo.info.length-1].info){
//										delete json.pcinfo.info[json.pcinfo.info.length-1].info.desc;
//									}
//
//									insertBijiaIntoPage(json, true);
//									if(isGulike){
//										//重新处理内置按钮部分的价格曲线
//										insetHistoryPriceButton(json.pcinfo, "repair_price_trend", !toolbar.getOptions().showInsetBtn);
//									}else{
//										//加载价格走势
//										toolbar.loadHistoryPrice(json.pcinfo, "repair_price_trend");
//										//重新处理内置按钮部分的价格曲线
//										insetHistoryPriceButton(json.pcinfo, "repair_price_trend", !toolbar.getOptions().showInsetBtn);
//									}
//									Extension.sendMessage({
//	                                    'greeting': 'SAVE_BIJIA_INFO_CURRENT',
//	                                    data: json
//	                                }, $.noop);
//								}
//
//								if( newPrice != startPrice
//										|| newIssale != startIssale
//										|| newMPrice != startMPrice
//										|| newFreight != startFreight
//								){
//									Extension.ajax({
//										type: 'POST',
//				                        cache: false,
//				                        url: gwdHttps + 'api.html?path1=qihoo-mall-goodsinfo&path2=yhq&url=' + encodeURIComponent(url) + '&cv=' + clientVersion+'&type=2',
//				                        async: true,
//				                        timeout: 5000,
//				                        data: {"checkinfo":riddle.encrypt(encodeURIComponent(JSON.stringify(pageInfoSec)), 2, true)},
//				                        dataType: 'json'
//									},function(info){
//										if(info){
//											log("修复线上价格成功");
//										}else{
//											log("修复线上价格失败");
//										}
//									})
//								}
//							},2000);
//						}
//						fixTrend(json,toolbar.getPageInfo(), href);
						//注册监听收藏事件
//						if (json && json.pageInfo && json.pageInfo.name && json.pageInfo.price) {
							(function(){
								var onMessage = (chrome.runtime && chrome.runtime.onMessage) || (chrome.extension && chrome.extension.onMessage);
								if(onMessage){
									onMessage.addListener(function(msg,sender, sendResponse){
										if(msg && msg.greeting=="FROM_POPUP_COLLECT_BUTTON"){
											Extension.sendMessage({
												greeting: 'SAVE_BIJIA_INFO_CURRENT',
												data: {have_collect:true},
												is_update: true
											}, $.noop);
											var cbtn = $('.gwd_ns_savetofavor');
											toolbar.doSavetofavor(cbtn);
										}
									})
								}
							})();
//						}
					}
				});
			});
						
			;(function(regItem,preJob){
				var callee = arguments.callee;
				var preperation = (preJob instanceof Promise && preJob) || new Promise(function(resolve,reject){resolve()});
				
				preperation.then(function(json){
					stat.run(0);
					// ferri打点 比价条显示次数
					var growingTp = (isGWZS?isGWZS:'')+'pricebar';
		            chrome.extension.sendMessage(
						{
							'greeting':'GROWINGIO_EVENT',
							'type':growingTp,
							'domain':extractUrlDomain(pageUrl)
						},
					$.noop)
					toolbar.addToolbarClass('gwd_ns_ds');
					//toolbar.loadHistoryPrice(json.pcinfo);

					//-----比价条开始
					var i,tmp,
						djhzk = {title:'<div>大家</div><div>还看</div>',data:[],titletype:0,titletypestr:'djhzk'},
						djhzkClass = 'gwd_ns_' + NS_DICT[0],
						showRates = json.showrate ? json.showrate.split(',') : [1, 1, 1],
						showBijia = toolbar.getOptions().showBijia,
						showKLHK = toolbar.getOptions().showKLHK;
					if(json.mv){
						gl_commercialStat.cid = json.mv.cid;
						gl_commercialStat.kwd = json.mv.kwd;
					}
					if (json.info && json.info.gl && json.info.gl.length > 0) {
						stat.getBase().scene = 'scdp';
						//比价条插入比价
						if(!isGWZS && showBijia){
						    toolbar.addComponent(json.info.gl, null, 'text').addClass('gwd_ns_bijia').attr({
                                'gwd-subject': 'bijia'
                            });
						}else if(showRates.length > 2){
							showRates = showRates.slice(1);
						}
					}
					
					//var djhzkGuideHtml = '看了还看';
					//json.mv = {"id":"3721506734645983040","tags":"apple,iphone,6,a1586,16gb,金色,移动,联,通电,信,4g,手机","price":"4888.0","kwd":"iphone","g_showid":"Z3lOsM","cid":48};
					//json.mv = null;
					var djhzkGuideHtml = '<div>大家</div><div>还看</div>';
					
					if(json.sinfo && json.sinfo.length>0){
						json.sinfo.sort(function(a,b){
							if(a.titletype == 0){
								//大家还在看
								return 1;
							}else{
								return a.titletype - b.titletype;
							}
						});
						if(!showBijia && json.sinfo[0].titletype == 1){
							json.sinfo = json.sinfo.slice(1);
							if(showRates.length > 2){
								showRates = showRates.slice(1);
							}
						}
						
						if(!showKLHK){
							//看了还看关闭，则只保留同款数据 type:1, 不需要showRates了，恢复默认值
							if(json.sinfo[0] && json.sinfo[0].titletype == 1){
								json.sinfo = [json.sinfo[0]];
							}else{
								json.sinfo = [];
							}
						}
					}
					if(!isGWZS && json.sinfo && json.sinfo.length>0){
						if(!json.sinfo[1] && showRates.length >= 2){
							showRates.splice(showRates.length - 2, 1);
						}
						for(i=0; i<json.sinfo.length; ++i){
							tmp = json.sinfo[i];
							if(tmp.titletype != 0){
								//4: klhk
								if(tmp.titletype == 4 && tmp.data && tmp.data.length>0){
								    tmp.title = djhzkGuideHtml;
									djhzkGuideHtml = '';
								}
								toolbar.addComponent(tmp.data,tmp.title,'image')
									.addClass('gwd_ns_' + NS_DICT[tmp.titletype]).attr('gwd-subject',NS_DICT[tmp.titletype]);
							}else{
							    //喜宝数据
								djhzk = tmp;
							}
						}
					}
					for(i=0;i<djhzk.data.length; ++i){
						djhzk.data[i]._channel = 'xb';
					}
					if(!isGWZS && showKLHK){
						toolbar.setOptions({goodsDistribution:showRates || [1,1,1]});
						tmp = toolbar.addDummyComponent((json.mv&&json.mv.max_num)||10,djhzkGuideHtml,'image').addClass(djhzkClass);
						toolbar.calcMaxNum(function(res,resolve){
							tmp.remove();
							if (res) {
								for (var i = 0; i < res.length; ++i) {
									if (res[i].list.hasClass(djhzkClass)) {
										MV.init(json, resolve);
										MV.sinfo = djhzk;
										MV.curCanShowNum = res[i].pos; //能显示的总量
										MV.assembly = function(){
											var sinfo = this.sinfo;
											var data = this.data;
											var i;
											if (sinfo.data.length > 0) {
												for (i = 0; i < sinfo.data.length; ++i) {
													if (!sinfo.data[i]._channel) {
														sinfo.data[i]._channel = 'mv';
														sinfo.data[i]._showid = '_' + ((json.mv && json.mv.g_showid) || 'Z3lOsM');										
													}
												}
//												var prepend = toolbar.getComponents().length <= 0;
												toolbar.addComponent(sinfo.data,djhzkGuideHtml, 'image', false).addClass(djhzkClass).attr('gwd-subject', NS_DICT[0]);
												//toolbar.find('.gwd_toolbar_price_trend').before(toolbar.makeComponent(sinfo.data, djhzkGuideHtml, 'image').addClass(djhzkClass).attr('gwd-subject', NS_DICT[0]));
											}
											this.resolve && this.resolve();
										}
										if(json.mv && json.mv.req){
											MV.calculateNum();
											if (MV.requestMvNum) {
												MV.getMvData();
											}
											else {
												MV.assembly();
											}
										}
										else {
											MV.assembly();
										}
										break;
									}
								}
							}
							else {
								resolve && resolve();
							}
						});
					}

					toolbar.show(function(){
						//toolbar.addToolbarClass('gwd_toolbar_container_shrink');
						pageInfoInitialize();
						if(gwd_options['popinfo_opt'] == 'open'){
							toolbar.loadNotice(json.popad);
						}
						//展现打点
						var getGoodsUrl = function(originUrl,channel){
							var url = '',tmp;
							try{
								switch(channel){
									case 'mv':
										tmp = MiTools.parseUrl(originUrl);
										originUrl = decodeURIComponent(tmp.query.url);
										tmp = originUrl.split('&url=');
										if(tmp.length>1){
											buffer = [tmp[0]];
											buffer[1] = encodeURIComponent(tmp.slice(1).join('&url='));												
											originUrl = buffer.join('&url=');
										}
										tmp = MiTools.parseUrl(originUrl);
										url = decodeURIComponent(tmp.query.url);
										break;
									case 'xb':
										tmp = MiTools.parseUrl(originUrl);
										originUrl = decodeURIComponent(tmp.query.url);
										
										tmp = MiTools.parseUrl(originUrl);
										url = decodeURIComponent(tmp.query.url);
										break;
									case 'cps':
										tmp = MiTools.parseUrl(originUrl);
										url = decodeURIComponent(tmp.query.url);
										break;
									default:
										log("无法识别的channel")
										break;
								}	
							}catch(e){
								log(e)
							}
							return url;
						};
						var info = gl_commercialStat;
						info.browser = is360Browser() ? 'se' : 'chrome';
						info.version = clientVersion;
						var goodsInfo = null, content = [];
						toolbar.getComponents().each(function(i,con){
							var $con = $(con)
							var key = $con.attr('gwd-subject');
							if(!key){
								log('错误！无法识别板块内容！');
							}
							var $lis = $con.children(":visible").not('.gwd_toolbar_goods_item_guide');
							var goodsInfo = {
								num : $lis.length,
								detail : [],
								title : key
							};
							$lis.each(function(i,elem){
								var $this = $(elem);
								var price = $this.attr('gwd-price') || ''; //没有时传啥
								var channel = $this.attr('gwd-channel') || 'cps';
								if(price){
									price = MiTools.getPrFix(price,2);
								}
								var href = $this.attr('gwd-href');
								goodsInfo.detail[goodsInfo.detail.length] = {
									pos : i+1,
									price : price,
									goods : Number(!$this.hasClass('gwd_ns_nogoods')),
									channel : channel,
									link : href && getGoodsUrl(href,channel)
								}
								var pos = i+1;
								if(key=="bijia"){
									pos += "_0"
								}
								$this.attr('gwd-href', href+"&num="+goodsInfo.num+"&pos="+pos+"&title="+key+'&cid='+(json.mv?encodeURIComponent(json.mv.cid):'')+'&kwd='+(json.mv?encodeURIComponent(json.mv.kwd):'')+'&browser='+	(is360Browser() ? 'se' : 'chrome')+'&channel='+channel);
							});
							content[content.length] = goodsInfo;
						});
						info.content = content;
						log('plog打点');
						log(info);
						stat.display(info);
					});
	
	//				启用动画？
	//				$(".gwd_toolbar_all_goods .gwd_bj_one_goods").hover(function(){
	//			        Extension.sendMessage({greeting: "HOVER_TOOLBAR"},function(){});
	//			    },function(){});
	//				//比价和收藏跳转链接点出类型
	//				$(".gwd_toolbar_all_goods a,.gwd_toolbar_third_goods a").live("click",function(e){
	//					var clickElement = $(this);
	//					var url = clickElement.attr("href");
	//					if(url && url != ""){
	//						var price = getUrlParam(url,"pr");
	//						var issale = getUrlParam(url,"ms");
	//						var tp = getUrlParam(url,"tp");
	//						Extension.sendMessage({greeting:"OPEN_TAB_SAVING_DATA",tUrl:url,price:price,issale:issale,tp:tp},function(){});
	//                        e.preventDefault();
	//					}
	//				});
					//收藏提示动画
					setTimeout(function (){
						Extension.sendMessage({greeting:'GET_FAVORITE_FOR_GUIDE'},function(obj){
							if( !obj || obj.state == "no" ){
								return false;
							}
						 	var goodsNum = obj.goodsNum;
						 	var model = "gwd_ns_one";
							if( !goodsNum ) {
								var trend = json.trend || json.pcinfo && json.pcinfo.trend || 4;
								if( trend == 3 ) {
									model = "gwd_ns_two";
								}else{
									model = "gwd_ns_three";
								}
							}
							toolbar.find('.gwd_toolbar_save_tips').addClass(model);
				    	});
				    },10000);
	//			    //价格走势提示动画
	//			    setTimeout(function(){
	//			    	if( json.pcinfo && json.pcinfo.trend == 1 ){
	//			    		Extension.sendMessage({greeting:'GET_HISTORY_PRICE_ANIMATION'},function(obj){
	//			    			if( obj.state == "no" ){
	//			    				return false;
	//			    			}
	//			    			$(".gwd_toolbar_price_trend_tips").show();
	//			    			$(".gwd_toolbar_price_trend").mouseenter(function(){
	//			    				$(".gwd_toolbar_price_trend_tips").addClass("gwd_toolbar_price_trend_tips_hide");
	//			    				setTimeout(function(){
	//			    					$(".gwd_toolbar_price_trend_tips").hide();
	//			    				},500);
	//			    			});
	//			    			Extension.sendMessage({greeting:'HISTORY_PRICE_ANIMATION_DONE'},function(obj){});
	//			    		});
	//			    	}
	//			    },2000);
	//				//执行比价条动画
	//				if( json.ARC == 1 ){
	//					animationCallBack && animationCallBack();
	//				}else if( $(".mmz_toolbar_container_box").attr("id") == "gwd_toolbar_container_animation" ){
	//					$(".mmz_toolbar_container_box").css("-webkit-transition","none 0.5s ease");
	//					$(".mmz_toolbar_container_box").attr("id","");
	//					setTimeout(function(){
	//						$(".mmz_toolbar_container_box").css("-webkit-transition","all 0.5s ease");
	//					},1);
	//				}
				})['catch'](function(errInfo){
					log(errInfo);
					if(!(errInfo instanceof Error)){
						stat.getInfo(0).step = stat.getInfo(0).step.concat(stat.getInfo(1).step);
						stat.getInfo(1).step = [];
						stat.run(0);
						$('.mmz_toolbar_control_shrink').live('click',function(){
							var fn = arguments.callee;
							setTimeout(function(){
								callee(regItem,new Promise(function(resolve,reject){
									resolve(errInfo);
								}));
								$('.mmz_toolbar_control_shrink').die('click',fn);
							},500);
						});
						toolbar.setOptions({'show':true});
						toolbar.initShrink('展开喵喵折');					
					}else{
						stat.run(0);
						toolbar.reset();
						toolbar.initShrink('无比价');
					}
				});
			})(regArray[index],checkOptions)
			
			$("body").on("contextmenu",".gwd_toolbar_collect,.gouwudai_chrome_insert_info_div_cbutton",function(e){
				return false;
			});
		
		    $(".all-login-click").live('click',function (event){
		    	Extension.sendMessage({greeting:"GO_TO_LOGIN"},function(){});
				$('.gwd_remind_popup,gwd_collect_popup,.fixed-collect-hover,.nologin-history-tips').hide();
				return false;
			});
		    function pageInfoInitialize(){	
			    if( !isGulike ){
			    	Extension.sendMessage({greeting: "GET_LOCAL_HISTORY_STATE"},function(obj){
						if(obj.userId && obj.userId != ""){
							userId = obj.userId;
						}
						var now = new Date();
						var nowTime = parseInt(now/1000);
						var todayString = MiTools.getDateStr();
						if((!userId || userId == "") && nowTime - obj.earlyHistoryTime > 6*24*60*60 && obj.historyLastRecordTime != todayString){
							$("body").append('<div class="nologin-history-tips">\
												<div class="nologin-history-tips-logo" style="background-image:url('+backgroundImg+')"></div>\
												<div class="nologin-history-tips-info">\
													<span>立即登录喵喵折享受收藏商品永久保存，<br>\
													多平台同步，降价提醒等服务！\
													</span>\
													<h3><a href="#" target="_blank" class="nologin-history-tips-login all-login-click">立即登录</a><span class="nologin-history-tips-cancel">取消</span></h3>\
												</div>\
												<span class="nologin-history-tips-close" style="background-image:url('+backgroundImg+')"></span>\
											</div>');
							$(".nologin-history-tips-close, .nologin-history-tips-cancel").click(function(){
								$(".nologin-history-tips").hide();
								return false;
							});
							Extension.sendMessage({greeting: "HISTORY_RECORD_TIME",day:todayString},function(obj){});
						}
					});
				}
		    }

		    /**
		     * ferri  6pm获取商品dimensions
		     * @param {object} 从接口获取的商品信息.
		     */
		    function getSpecFrom6pm(page_info){
		    	var listener = function(e){
		    		if( data_cache.current ){
		    			var data = data_cache[data_cache.current];
		    			if (e.detail) {
                            data['sizeChange'] = e.detail.sizeChange;
                            var tmp = {};
                            for (var key in e.detail) {
                                if (key != 'sizeChange')
                                    tmp[key] = e.detail[key];
                            }
                            data['pageInfo']['ht_spec'] = JSON.stringify(tmp);
						} else {
		    				data['sizeChange'] = false;
                            data['pageInfo']['ht_spec'] = '';
						}
		    		}else{
                        if (e.detail) {
                            page_info['sizeChange'] = e.detail.sizeChange;
                            var tmp = {};
                            for (var key in e.detail) {
                                if (key != 'sizeChange')
                                    tmp[key] = e.detail[key];
                            }
                            page_info['ht_spec'] = JSON.stringify(tmp);
						} else {
                            page_info['sizeChange'] = false;
                            page_info['ht_spec'] = '';
						}
		    		}
	    		};
	    		document.addEventListener('MMZ_GOT_6PM_DIMENSIONS', listener);
	    		//注入脚本获取页面尺寸

                function trigger(spec){
                    var evt = document.createEvent("CustomEvent");
                    evt.initCustomEvent('MMZ_GOT_6PM_DIMENSIONS', true, true, spec);
                    // setTimeout(function(){
                    document.dispatchEvent(evt);
                    //两种方式，兼容不同浏览器
                    document.dispatchEvent(new CustomEvent('MMZ_GOT_6PM_DIMENSIONS', { detail: spec }));
                    // },0)
                }

                Extension.sendMessage({greeting:"GET_6PM_SCRIPT"}, function(script) {
					window.injectScript('function() {'+trigger+script+'}');
                });
		    }
		    /**
		     * 从页面信息得到skuid
		     */
		    function getSku(page_info, callback){
	    		var sku = '';
		    	if( page_info ){
			    	if( page_info.sku_var ){
				    	var _handle = null;
				    	var done = false;
			    		var listener = function(e){
			    			if( !done && e.detail ){
			    				stopListen();
			    				clearTimeout(_handle);
			    				
			    				sku = e.detail;
			    				page_info.sku = sku;

			    				callback && callback(sku);
			    			}
			    		};
			    		
			    		var stopListen = function(){
			    			//done理论上来说不用加，加一下双保险，防止产生死循环
			    			done = true;
			    			document.removeEventListener('MMZ_GOT_PAGE_SKU', listener);
			    		}
			    		
			    		document.addEventListener('MMZ_GOT_PAGE_SKU', listener);
			    		//防止失败
			    		_handle = setTimeout(function(){
			    			stopListen();
			    			
			    			page_info.sku = sku;
			    			
			    			callback && callback(sku);
			    		}, 1000);
			    		//注入
			    		window.injectScript(function(var_name){
			    			var sku;
			    			try{
			    				sku = eval(var_name);
			    			}catch(e){
			    				sku = '';
			    			}
			    			var evt = document.createEvent("CustomEvent");
			    			evt.initCustomEvent('MMZ_GOT_PAGE_SKU', true, true,  sku );
			    			document.dispatchEvent(evt);
			    			//两种方式，兼容不同浏览器
			    			document.dispatchEvent(new CustomEvent('MMZ_GOT_PAGE_SKU', { detail: sku }));
			    		}, page_info.sku_var);
			    	}else{
			    		if( typeof page_info.sku === 'string'){
					    	sku = page_info.sku.split('|||')[0];
			    		}
			    		page_info.sku = sku;
			    		
			    		setTimeout(function(){
						    callback && callback(sku);
			    		}, 0);
			    	}
		    	}else{
		    		setTimeout(function(){
					    callback && callback(sku);
		    		}, 0);
		    	}
			}
			/**
			 * 生成data_cache用key
			 */
			function getDataCacheKey( sku, href ){
				return sku + '|||' + href;
			}
			//页面嵌入用户体验数量
			function insertUserExper(article){
				if(article && article.count > 0 && article.url){
					var _html = '<div class="user-exper">\
									<a href="'+article.url+'" target="_blank">\
										<span class="icon" style="background-image:url('+backgroundImg+')"></span>\
										<span><em>'+article.count+'</em>人晒单</span>\
									</a>\
								</div>';
					var collect_btn = $('.gouwudai_chrome_insert_info_div_cbutton');
					if(collect_btn.length > 0){
						collect_btn.before(_html);
					}else{
						$(".button_container").append(_html);
					}
				}
			}
			function insertCoupon(json) {
				var shop_name = json.cinfo.goods_shop_name,
					goods_url = json.cinfo.goods_url,
					id = json.yhq_id, grTp_postfix = '', _blank = false;
				if (shop_name.indexOf('京东') >= 0) {
					if (isGWZS) {
						return;
					}
					grTp_postfix = '_jd';
					_blank = true;
				}

                var self = this;
                Extension.ajax({
                    type:'GET',
                    cache:false,
                    url:json.yhq_url+json.yhq_partner_id+'/10001/'+id,
                    async:true,
                    timeout:3000,
                    dataType:'json'
                }, function (json) {
                    if (json && json.code && json.code == 200) {
                        var coupon = json.data && json.data.coupon;
                        var currentTime = new Date().getTime();
                        if (!coupon || !coupon.is_valid||coupon.remain_count<=0||new Date().getTime()>new Date(coupon.end_time)||currentTime<new Date(coupon.start_time)) {
	                        return;
                        }
                        var coupon_content ='';
                        if (coupon.coupon_money > 0) {
                        	coupon_content = '<span class="coupon_money">' + MiTools.getPrFix(coupon.coupon_money) + '</span>元';
                        } else if (coupon.coupon_discount != '') {
                        	coupon_content = '<span class="coupon_discount">' + MiTools.getPrFix(coupon.coupon_discount) + '</span>折'
                        } else {
                        	return;
                        }
                        var $button = $(
                            '<div class="gouwudai_chrome_insert_coupon">' +
                            '<a href="' + json.data.click_url + '" '+ (_blank ? 'target="_blank"' : '')+'>' +
                            "<i class=\"i\" style=\"background-image:url('" + backgroundImg + "');\"></i>" +
                            coupon_content +
                            '优惠券' +
                            '</a>' +
                            '</div>');
                        $button.click(function () {
                            // ekko打点 嵌入条优惠券点击
	                        var growingTp = (isGWZS?isGWZS:'')+'insetbar_coupon_click'+(isGWZS?'':grTp_postfix);
                            chrome.extension.sendMessage({
                                'greeting': 'GROWINGIO_EVENT',
                                'type': growingTp,
                                'domain': extractUrlDomain(pageUrl)
                            }, $.noop);
                        });
                        $('.button_container .gouwudai_chrome_insert_info_div_pbutton').after($button);

                        // ekko打点 嵌入条优惠券显示
	                    var growingTp = (isGWZS?isGWZS:'')+'insetbar_coupon'+(isGWZS?'':grTp_postfix);
                        chrome.extension.sendMessage({
                            'greeting':'GROWINGIO_EVENT',
                            'type':growingTp,
                            'domain':extractUrlDomain(pageUrl)
                        }, $.noop);
                    }
                });
			}

			//页面嵌入二维码
		    function insertQrButton(json){
		    	//在6pm不会展示
		    	if( domain == "6pm.com" || !(json && json.barcode) ){
		    		return;
		    	}
		    	var hPButtonHtml = '<div class="gouwudai_chrome_insert_qr">\
										<div class="gouwudai_chrome_insert_qr_container">\
											<span class="qr_logo" style="background-image:url('+backgroundImg+')"></span>\
											<span class="qr_word">'+(json.barcode_inset_description||'手机看比价')+'</span>\
										</div>\
									</div>';
				$(hPButtonHtml).append('\
					<div class="gouwudai_chrome_insert_qr_detail">\
						<div class="gouwudai_chrome_qrcode_popup">\
							<div id = "qrcode"></div> \
							<p>'+(json.barcode_popup_description||'扫一扫手机看比价')+'</p>\
						<div>\
					</div>').appendTo('.button_container');
				var qrcode =  $("#qrcode").get(0);
				if( !qrcode ){
					return;
				}
				var url = decodeURIComponent(json.barcode);
				new QRCode(qrcode, {
					text: url,
					width: 130,
					height: 130,
					colorDark : "#000000",
					colorLight : "#ffffff",
				});
				$('.gouwudai_chrome_insert_qr_container').mouseenter(function() {
					// 嵌入条扫码hover
					chrome.extension.sendMessage({
						'greeting': 'GROWINGIO_EVENT',
						'type': 'insetbar_scan',
						'domain': extractUrlDomain(pageUrl)
					}, $.noop);
				})
		    }
			// function insetHistoryPrice(obj){
			// 	var hPButtonHtml = '<div class="gouwudai_chrome_insert_info_div_pbutton">\
			// 							<div class="gouwudai_chrome_insert_history_price_container">\
			// 								<span class="collect_logo" style="background-image:url('+backgroundImg+')"></span>\
			// 								<span class="collect_word">最近降价</span>\
			// 							</div>\
			// 						</div>';
			// 		$(hPButtonHtml).append('\
			// 		<div id="chrome-price" class="chrome-price">\
			// 			<div id ="titleBarId" class="title-bar">\
			// 				<span>'+
             //    (!isGWZS ?
             //        '<a href="https://www.miaomiaozhe.com" target="_blank">喵喵折</a><i></i><em>历史价格</em>' : '<a>历史价格数据来自喵喵折</a>')+
			// 				'</span>\
			// 				<div class="right-board">\
			// 					<p class="price">当前 <strong>¥ '+( (obj.info && obj.info.length > 0 && obj.info[obj.info.length-1].pr) || "0")+'</strong></p>\
			// 					<!--p class="ware-house">'+ (obj.wareHouse || "北京仓") +'</p-->\
			// 					<p class="price-intro">\
			// 						<span class="intro-thumb" style="background-image:url('+backgroundImg+')"></span>\
			// 						<span class="intro-detail"><span>1.不同地区的定价少数情况可能不同。</span><span>2.货币单位请以当前网站支持的货币为准。</span></span>\
			// 					</p>\
			// 				</div>\
			// 			</div>\
			// 			<div id ="priceHist" class="content-pane">\
			// 				<div class="chart mmz_placeholder"></div>\
			// 				<div class="rightWord">\
	         //                    <div class="high">\
	         //                        <div>最高价</div>\
	         //                        <div id="lastHeight"></div>\
	         //                    </div>\
	         //                    <div class="low">\
	         //                        <div>最低价</div>\
	         //                        <div id="lastLow"></div>\
	         //                    </div>\
	         //            	</div>\
			// 				<span style="display:none;" class="gwd_warehouse gwd_hide">*北京仓</span>\
			// 			</div>\
			// 		</div>').prependTo('.button_container');
			// 	var trend = 4;
	        	// var len = obj.info.length;
			// 	var current = 0;
			// 	while(current<=0){
			// 		current = MiTools.getPrFix(obj.info[len-1].pr);
			// 		len--;
			// 	}
			// 	var minPrice = MiTools.getPrFix(obj.lpr);
			// 	for ( var i = len; i >= 0; i--) {
			// 		var pr = MiTools.getPrFix(obj.info[i].pr);
			// 		if (current < pr && current <= minPrice) {
			// 			trend = 1;
			// 			break;
			// 		}
			// 		if (current < pr && current > minPrice) {
			// 			trend = 2;
			// 			break;
			// 		}
			// 		if (current > pr) {
			// 			trend = 3;
			// 			break;
			// 		}
			// 	}
			// 	obj.trend = trend;
			// 	var trendWord = "";
			// 	switch(trend){
			// 		case 1 :
			// 			trendWord = "历史低价";
			// 			$(".gouwudai_chrome_insert_info_div_pbutton .collect_logo").css("background-position","-531px -583px");
			// 			$(".gouwudai_chrome_insert_info_div_pbutton .collect_word").text(trendWord);
			// 			break;
			// 		case 2 :
			// 			trendWord = "价格下降";
			// 			$(".gouwudai_chrome_insert_info_div_pbutton .collect_logo").css("background-position","-531px -566px");
			// 			$(".gouwudai_chrome_insert_info_div_pbutton .collect_word").text(trendWord);
			// 			break;
			// 		case 3 :
			// 			trendWord = "价格上涨";
			// 			$(".gouwudai_chrome_insert_info_div_pbutton .collect_logo").css("background-position","-531px -550px");
			// 			$(".gouwudai_chrome_insert_info_div_pbutton .collect_word").text(trendWord);
			// 			break;
			// 		case 4 :
			// 			trendWord = "价格平稳";
			// 			$(".gouwudai_chrome_insert_info_div_pbutton .collect_logo").css("background-position","-531px -534px");
			// 			$(".gouwudai_chrome_insert_info_div_pbutton .collect_word").text(trendWord);
			// 			break;
			// 	}
			// 	var $button = $(".gouwudai_chrome_insert_info_div_pbutton");
			// 	var placeholder = $button.find('#chrome-price').show().end().find(".mmz_placeholder");
			// 	histPriceDrawer.addData(obj,placeholder);
			// 	histPriceDrawer.draw(placeholder);
			// 	$button.find('#chrome-price').hide();
			// 	hoverDelayFunction([[".gouwudai_chrome_insert_info_div",".gouwudai_chrome_insert_info_div_pbutton",".chrome-price,"]]);
			//
			// }
			//页面嵌入历史价格按钮的方法
			function insetHistoryPriceButton(json,type, isHide){
				var obj = json.pcinfo;
				if(type != "repair_price_trend"){
					var collectType = gwd_options["page_icon"];
					if(!builtinButtonInfo){
						if(collectType == "page"){
							$("#mmz-extension-fixed-button").removeClass("extension-fixed-hidden");
						}
						return false;
					}
					var hPButtonHtml = "";
					// if( obj ){
						hPButtonHtml = '<div class="gouwudai_chrome_insert_info_div_pbutton">\
											<div class="gouwudai_chrome_insert_history_price_container">\
												<span class="collect_logo" style="background-image:url('+backgroundImg+')"></span>\
												<span class="collect_word">最近降价</span>\
											</div>\
										</div>';
					// }
					var containerTagName = "div";
					if(builtinButtonInfo[0].tagName.toLowerCase() == "li"){
						containerTagName = "li";
					}
					var cButtonHtml =  '<'+containerTagName+' class="mmz_chrome_insert_info_container_box '+ (!json.pcswitch&&!obj&&collectType!="page"?"gwd_hide":"")+ '">\
											<div class="gouwudai_chrome_insert_info_div">';
                    if (!isGWZS) {
					    cButtonHtml +=     '<a class="gwd_logo" target = "_blank" href="https://www.henzan.com/mmz?from=plugin_toolbar&referer=" style="background-image:url('+backgroundImg+')"></a>';
                    } else {
                        cButtonHtml +=     '<span class="gwzs_logo" style="background-image:url('+backgroundImg_gwzs+')"></span>'
                    }
	                    cButtonHtml +=     	    '<div class="button_container">\
													'+hPButtonHtml;
                    if (!isGWZS) {
						cButtonHtml +=				'<div class="gouwudai_chrome_insert_info_div_cbutton '+(!gl_allowModifyCollectBtnPosition || collectType=="page"?"":"gwd_hide")+'">\
														<div class="hospice">\
															<span class="collect_logo" style="background-image:url('+backgroundImg+')"></span><span class="collect_word"> 收藏  </span><span class="have_collect_hover">我的收藏</span>\
														</div>\
													</div>';
                    }
						cButtonHtml +=			'</div>\
										    </div>\
										    <div class="gwd_insert_options">\
												<span class="gwd_insert_options_logo" style="background-image:url('+backgroundImg+')"></span>\
												<ul class="gwd_insert_options_menu">\
													<li _mt="1">\
														页面内大按钮\
														<em style="background:url('+backgroundImg+') no-repeat -236px -62px;top:4px;right:8px;"></em>\
													</li>\
													<li _mt="2">\
														页面内小按钮\
														<em style="background:url('+backgroundImg+') no-repeat -236px -62px;top:30px;right:8px;"></em>\
													</li>\
													<li _mt="3">\
														移至下方工具栏\
														<em style="background:url('+backgroundImg+') no-repeat -236px -62px;top:30px;right:8px;"></em>\
													</li>\
													<li class="gwd_li_last" _mt="4">\
														更多设置选项>>\
													</li>\
												</ul>\
											</div>\
										</'+containerTagName+'>';
					builtinButtonInfo.after(cButtonHtml);
					if( isGulike ){
						$(".gwd_insert_options li:nth-child(3)").hide();
					}
                    var wareHouseShow = "gwd_hide";
                    if( domain == "yixun.com" ){
                        wareHouseShow = "";
                    }
					// 嵌入条价格曲线
					$('.gouwudai_chrome_insert_info_div_pbutton').append('\
						 <div id="chrome-price" class="chrome-price">'+
						'<div id ="titleBarId" class="title-bar">\
							<span>'+
						(!isGWZS ?
							'<a href="https://www.miaomiaozhe.com" target="_blank">喵喵折</a><i></i><em>历史价格</em>' : '<a>历史价格数据来自喵喵折</a>')+
						'</span>\
						<div class="right-board">\
							<p class="price">当前 <strong>¥ '+( ( obj && obj.info && obj.info.length > 0 && obj.info[obj.info.length-1].pr) || "0")+'</strong></p>\
									<!--p class="ware-house">'+ (obj && obj.wareHouse || "北京仓") +'</p-->\
									<p class="price-intro">\
										<span class="intro-thumb" style="background-image:url('+backgroundImg+')"></span>\
										<span class="intro-detail"><span>1.不同地区的定价少数情况可能不同。</span><span>2.货币单位请以当前网站支持的货币为准。</span></span>\
									</p>'+
						(!isGWZS ?
							'<p class="app-scan">\
								<span class="scan-txt">降价提醒</span>\
								<span class="scan-show">\
									<span class="hover-triangle"></span>\
									<span class="scan-show-top">\
										<span class="scan-qrcode" id="scan_qrcode"></span>\
										<span class="scan-image"><img src="'+scanImg+'"></span>\
											</span>\
											<span class="scan-show-bottom">\
												<a class="app-download" href="http://qr15.cn/FxzKyM" target="_blank">下载喵喵折APP</a> 扫码设置降价提醒\
											</span>\
										</span>\
									</p>'
							: '')
						+'</div>\
							</div>'+
						'<div id ="priceHist" class="content-pane">\
							<div class="chart mmz_placeholder"></div>\
							<div class="rightWord">\
								<div class="high">\
									<div>最高价</div>\
									<div id="lastHeight"></div>\
								</div>\
								<div class="low">\
									<div>最低价</div>\
									<div id="lastLow"></div>\
								</div>\
							</div>\
							<span style="display:none;" class="gwd_warehouse '+wareHouseShow+'">*北京仓</span>\
							</div>'+
						(!isGWZS ?
							'<div class = "jump-link"><a target="_blank" href="http://qr15.cn/FcZW6J">全网商家历史低价精选</a></div>': '')+
						'</div>');
                    if (json.barcode) {
                        var qrcode =  $("#scan_qrcode").get(0);
                        if( qrcode ){
                            var url = decodeURIComponent(json.barcode);
                            new QRCode(qrcode, {
                                text: url,
                                width: 120,
                                height: 120,
                                colorDark : "#000000",
                                colorLight : "#ffffff"
                            });
                        }
                    }

					var trend = 4;
					var trendWord = "";
					// if ( json.pcswitch === 1 ) {
					if( !obj ) {
						trend = json.trend || 4;
					} else {
						var trend = 4;
						var len = obj.info.length;
						var current = 0;
						while( len > 0 && !(current>0) ){
							current = MiTools.getPrFix(obj.info[len-1].pr);
							len--;
						}
						var minPrice = MiTools.getPrFix(obj.lpr);
						for ( var i = len; i >= 0; i--) {
							var pr = MiTools.getPrFix(obj.info[i].pr);
							if (current < pr && current <= minPrice) {
								trend = 1;
								break;
							}
							if (current < pr && current > minPrice) {
								trend = 2;
								break;
							}
							if (current > pr) {
								trend = 3;
								break;
							}
						}
						json.trend = obj.trend = trend;
					}
					switch(trend){
						case 1 :
							trendWord = "历史低价";
							$(".gouwudai_chrome_insert_info_div_pbutton .collect_logo").css("background-position","-531px -583px");
							$(".gouwudai_chrome_insert_info_div_pbutton .collect_word").text(trendWord);
							$(".gouwudai_chrome_insert_nc_button .nc-button-price-trend .collect_logo").css("background-position","-531px -583px");
							$(".gouwudai_chrome_insert_nc_button .nc-button-price-trend .collect_word").text(trendWord);
							break;
						case 2 :
							trendWord = "价格下降";
							$(".gouwudai_chrome_insert_info_div_pbutton .collect_logo").css("background-position","-531px -566px");
							$(".gouwudai_chrome_insert_info_div_pbutton .collect_word").text(trendWord);
							$(".gouwudai_chrome_insert_nc_button .nc-button-price-trend .collect_logo").css("background-position","-531px -566px");
							$(".gouwudai_chrome_insert_nc_button .nc-button-price-trend .collect_word").text(trendWord);
							break;
						case 3 :
							trendWord = "价格上涨";
							$(".gouwudai_chrome_insert_info_div_pbutton .collect_logo").css("background-position","-531px -550px");
							$(".gouwudai_chrome_insert_info_div_pbutton .collect_word").text(trendWord);
							$(".gouwudai_chrome_insert_nc_button .nc-button-price-trend .collect_logo").css("background-position","-531px -550px");
							$(".gouwudai_chrome_insert_nc_button .nc-button-price-trend .collect_word").text(trendWord);
							break;
						case 4 :
							trendWord = "价格平稳";
							$(".gouwudai_chrome_insert_info_div_pbutton .collect_logo").css("background-position","-531px -534px");
							$(".gouwudai_chrome_insert_info_div_pbutton .collect_word").text(trendWord);
							$(".gouwudai_chrome_insert_nc_button .nc-button-price-trend .collect_logo").css("background-position","-531px -534px");
							$(".gouwudai_chrome_insert_nc_button .nc-button-price-trend .collect_word").text(trendWord);
							break;
					}
					// if( obj ){
					// 	var ajaxDone = false;
					// 	var ajaxlock = false;
					// 	$(".gouwudai_chrome_insert_info_div_pbutton").mouseenter(function(){
					// 	    return;
					// 		if( !ajaxDone && !ajaxlock ){
					// 			ajaxlock = true;
					// 			Extension.ajax({
					// 				type :'GET',
					// 				cache: false,
					// 				url : gwdHttps+'api.html?path1=qihoo-mall-goodsinfo&path2=cps&url='+encodeURIComponent(pageUrl)+'&from=inpage_button_hover&cv='+clientVersion,
					// 				async: true,
					// 				timeout : 3000,
					// 				dataType : 'json'
					// 			},function(json){
					// 				ajaxDone = true;
					// 				ajaxlock = false;
					// 			})
					// 		}
					// 	}).mouseleave(function(){});
					// }
					if(isHide){
						$(".mmz_chrome_insert_info_container_box").hide();
					}

                    $('.gouwudai_chrome_insert_history_price_container').mouseenter(function() {
                        $('#chrome-price .app-scan').removeClass('show-scan');
                        // 嵌入条历史价格hover
                        chrome.extension.sendMessage({
                            'greeting': 'GROWINGIO_EVENT',
                            'type': 'insetbar_history',
                            'domain': extractUrlDomain(pageUrl)
                        }, $.noop);
                    });

					$('.gouwudai_chrome_insert_info_div_pbutton').on('click', '#chrome-price .app-scan', function() {
						$(this).toggleClass('show-scan');
						// 嵌入条降价提醒hover
						chrome.extension.sendMessage({
							'greeting': 'GROWINGIO_EVENT',
							'type': 'insetbar_remind',
							'domain': extractUrlDomain(pageUrl)
						}, $.noop);
					});

					$(".gouwudai_chrome_insert_info_div_cbutton").hover(function(){
						if($(this).hasClass("have_collect_done")){
							$(this).find(".hospice").find(".collect_word").hide();
							$(this).find(".have_collect_hover").show();
						}
					},function(){
						$(this).find(".hospice").removeAttr("style").find(".collect_word").show();
						$(this).find(".have_collect_hover").hide();
					}).click(function(){
						// 嵌入条收藏点击
						chrome.extension.sendMessage({
							'greeting': 'GROWINGIO_EVENT',
							'type': 'insetbar_collect',
							'domain': extractUrlDomain(pageUrl)
						}, $.noop);
						toolbar.doSavetofavor($(this));
					});

					if( obj ){
						initPrice(obj, '.gouwudai_chrome_insert_info_div');
                        $(".gouwudai_chrome_insert_info_div_pbutton #chrome-price").hide();
					}else{
                        $(".gouwudai_chrome_insert_info_div_pbutton #chrome-price").addClass('gwd_ns_disabled').hide();
					}
				}else{
					if( obj ){
						var trend = 4;
						var len = obj.info.length;
						var current = 0;
						while( len > 0 && !(current>0) ){
							current = MiTools.getPrFix(obj.info[len-1].pr);
							len--;
						}
						var minPrice = obj.lpr;
						for ( var i = len; i >= 0; i--) {
							var pr = MiTools.getPrFix(obj.info[i].pr);
							if (current < pr && current <= minPrice) {
								trend = 1;
								break;
							}
							if (current < pr && current > minPrice) {
								trend = 2;
								break;
							}
							if (current > pr) {
								trend = 3;
								break;
							}
						}
						json.trend = obj.trend = trend;
						var trendWord = "";
						switch(trend){
							case 1 :
								trendWord = "历史低价";
								$(".gouwudai_chrome_insert_info_div_pbutton .collect_logo").css("background-position","-531px -583px");
								$(".gouwudai_chrome_insert_info_div_pbutton .collect_word").text(trendWord);
								break;
							case 2 :
								trendWord = "价格下降";
								$(".gouwudai_chrome_insert_info_div_pbutton .collect_logo").css("background-position","-531px -566px");
								$(".gouwudai_chrome_insert_info_div_pbutton .collect_word").text(trendWord);
								break;
							case 3 :
								trendWord = "价格上涨";
								$(".gouwudai_chrome_insert_info_div_pbutton .collect_logo").css("background-position","-531px -550px");
								$(".gouwudai_chrome_insert_info_div_pbutton .collect_word").text(trendWord);
								break;
							case 4 :
								trendWord = "价格平稳";
								$(".gouwudai_chrome_insert_info_div_pbutton .collect_logo").css("background-position","-531px -534px");
								$(".gouwudai_chrome_insert_info_div_pbutton .collect_word").text(trendWord);
								break;
						}
						$(".gouwudai_chrome_insert_info_div_pbutton .right-board .price").html('当前 <strong>¥ '+( (obj.info && obj.info.length > 0 && obj.info[obj.info.length-1].pr) || "0")+'</strong>');
						$(".gouwudai_chrome_insert_info_div_pbutton .mmz_placeholder").remove();
						$(".gouwudai_chrome_insert_info_div_pbutton #priceHist").prepend('<div class="chart mmz_placeholder"></div>');
//						$(".gouwudai_chrome_insert_info_div_pbutton #chrome-price").show();
						initPrice(obj,".gouwudai_chrome_insert_info_div");
						$(".gouwudai_chrome_insert_info_div_pbutton #chrome-price").hide();
					}else{
                        $(".gouwudai_chrome_insert_info_div_pbutton #chrome-price").addClass('gwd_ns_disabled').hide();
					}
				}
			}
			
			function insertNVC() {
                $('body').append(
                    '<div id="nc-container" class="nc-container" style="display:none;"></div>' +
                    '<div class="nc-guide-text" style="display:none;">拖动滑块校验后查看</div>' +
                    '<div class="nc-guide-popup" style="display:none;">点击查看</div>');
                hoverDelayFunction([[".gouwudai_chrome_insert_info_div, .mmz_toolbar_containerX",".gwd_ns_nvc", ".nc-container,.nc-guide-text"]])
				var elem = null;

				var container = $('.gouwudai_chrome_insert_info_div_pbutton, .gwd_toolbar_price_trend');
                container.addClass('gwd_ns_checkpc');
				function requestPriceCurve(nvcval, notfirst, callback) {
					var pageInfo = toolbar.getPageInfo(true);
                    getSku(pageInfo, function(sku){
                        var cache_key = getDataCacheKey(sku, window.location.href);
						var json = data_cache[cache_key];
						if( !json ){
							//说明sku变了但是定时轮询还没返回
							alert('商品信息发生变化，请点击重试');
							callback && callback(false);
							return;
						}

                        Extension.ajax({
                            type: 'POST',
                            cache: false,
                            url: 'https://ext.henzanapp.com/api.html?path1=qihoo-mall-goodsinfo&path2=pricecurve',
                            async: true,
                            data: {
                                nvcVal: nvcval,
                                id: json.cinfo.pid || json.cinfo.goods_id,
                                price: json.pageInfo && json.pageInfo.price
                            },
                            timeout: 5000,
                            withMiTplMD5: true,
                            dataType: 'json'
                        }, function(res) {
                            // if( !window.samfirst ){
                            	// window.samfirst = 1;
                        		// res.check = 400;
							// }
                            if ( res && res.RC == 1) {
                                // hoverDelayFunction([[".gouwudai_chrome_insert_info_div",".gouwudai_chrome_insert_info_div_pbutton", ".nc-container,.nc-guide-text"]])
                                // hoverDelayFunction([[".mmz_toolbar_containerX",".gwd_toolbar_price_trend", ".nc-container,.nc-guide-text"]])
                                if (res.check == 100 || res.check === 200) {
                                    json.pcinfo = res.pcinfo;
                                    container.removeClass('gwd_ns_nvc');
                                    // insertHistoryCurve(json, elem);
                                    if(isGulike){
                                        //重新处理内置按钮部分的价格曲线
                                        insetHistoryPriceButton(json, "repair_price_trend", !toolbar.getOptions().showInsetBtn);
                                    }else{
                                        //加载价格走势
                                        toolbar.loadHistoryPrice(json, "repair_price_trend");
                                        //重新处理内置按钮部分的价格曲线
                                        insetHistoryPriceButton(json, "repair_price_trend", !toolbar.getOptions().showInsetBtn);
                                    }
                                    // console.log('remove')
									if( json.pcinfo ){
                                        $('.chrome-price').removeClass("gwd_ns_disabled");
									}
                                    if( elem ){
                                    	$(elem).find('.chrome-price').trigger('mouseenter');
									}
                                } else {
                                    function nvcPass(e) {
                                        document.removeEventListener('MMZ_NVC_PASS', nvcPass);
                                        var nvcval = e.detail.nvcval;
                                        requestPriceCurve(nvcval, true, callback);
                                    }
                                    document.addEventListener('MMZ_NVC_PASS', nvcPass);
                                    var inject;
                                    if (!notfirst) {
                                        inject = function() {
                                            //唤醒滑动验证
                                            getNC().then(function(){
                                                _nvc_nc.upLang('cn', {
                                                    _startTEXT: "请按住滑块，拖动到最右边",
                                                    _yesTEXT: "验证通过",
                                                    _error300: "哎呀，出错了，点击<a href=\"javascript:__nc.reset()\">刷新</a>再来一次",
                                                    _errorNetwork: "网络不给力，请<a href=\"javascript:__nc.reset()\">点击刷新</a>",
                                                });
                                                _nvc_nc.reset()
                                            })
                                        }
                                    } else {
                                        inject = function() {
                                            _nvc_nc.reset()
                                        }
                                    }
                                    if ($.isCompressed) {
                                        inject = inject.toString().replace('/gouwudai_chrome_insert_nc_button/g', MiTools.dynamicTpl.get('gouwudai_chrome_insert_nc_button'));
                                    }
                                    injectScript(inject);
                                    container.addClass('gwd_ns_nvc');
                                    $(elem).find('.nc-container,.nc-guide-text').show();
                                }
                                callback && callback(true);
                            } else {
                                alert('价格曲线获取失败');
                                callback && callback(false);
                            }
                        });
                    });
				}

				// var lock = false;
                container.on('click', function() {
					if( !$(this).hasClass('gwd_ns_checkpc') ){
						return;
					}

                    container.removeClass('gwd_ns_checkpc');
					// $('.nc-guide-popup').remove();
					new Promise(function(resolve, reject) {
						MiTools.getNVCVal(function(nvcval) {
							resolve(nvcval);
						})
					}).then(function(nvcval) {
						// requestPriceCurve(json, nvcval)
						return new Promise(function(resolve, reject){
                            requestPriceCurve(nvcval, false, function (success) {
								success ? resolve() : reject();
                            });
						});
					}).catch(function(e) {
                        container.removeClass('gwd_ns_nvc').addClass('gwd_ns_checkpc');
					});
				}).on('mouseenter', function() {
					elem = this;
					$(this).append($('.nc-container, .nc-guide-text, .nc-guide-popup'));
				});
			}

			//to be deprecated 里面是偶然内聚，解耦一下 - Sam
			// function insertHistoryCurve(json, elem) {
			// 	var obj = json.pcinfo ;
			// 	var wareHouseShow = "gwd_hide";
			// 	if( domain == "yixun.com" ){
			// 		wareHouseShow = "";
			// 	}
			// 	// 嵌入条价格曲线
			// 	$('.gouwudai_chrome_insert_info_div_pbutton').append('\
			// 				 <div id="chrome-price" class="chrome-price">'+
			// 		'<div id ="titleBarId" class="title-bar">\
			// 			<span>'+
			// 		(!isGWZS ?
			// 			'<a href="https://www.miaomiaozhe.com" target="_blank">喵喵折</a><i></i><em>历史价格</em>' : '<a>历史价格数据来自喵喵折</a>')+
			// 		'</span>\
			// 		<div class="right-board">\
			// 			<p class="price">当前 <strong>¥ '+( ( obj && obj.info && obj.info.length > 0 && obj.info[obj.info.length-1].pr) || "0")+'</strong></p>\
			// 							<!--p class="ware-house">'+ (obj && obj.wareHouse || "北京仓") +'</p-->\
			// 							<p class="price-intro">\
			// 								<span class="intro-thumb" style="background-image:url('+backgroundImg+')"></span>\
			// 								<span class="intro-detail"><span>1.不同地区的定价少数情况可能不同。</span><span>2.货币单位请以当前网站支持的货币为准。</span></span>\
			// 							</p>'+
			// 		(!isGWZS ?
			// 			'<p class="app-scan">\
			// 				<span class="scan-txt">降价提醒</span>\
			// 				<span class="scan-show">\
			// 					<span class="hover-triangle"></span>\
			// 					<span class="scan-show-top">\
			// 						<span class="scan-qrcode" id="scan_qrcode"></span>\
			// 						<span class="scan-image"><img src="'+scanImg+'"></span>\
			// 									</span>\
			// 									<span class="scan-show-bottom">\
			// 										<a class="app-download" href="http://qr15.cn/FxzKyM" target="_blank">下载喵喵折APP</a> 扫码设置降价提醒\
			// 									</span>\
			// 								</span>\
			// 							</p>'
			// 			: '')
			// 		+'</div>\
			// 					</div>'+
			// 		'<div id ="priceHist" class="content-pane">\
			// 			<div class="chart mmz_placeholder"></div>\
			// 			<div class="rightWord">\
			// 				<div class="high">\
			// 					<div>最高价</div>\
			// 					<div id="lastHeight"></div>\
			// 				</div>\
			// 				<div class="low">\
			// 					<div>最低价</div>\
			// 					<div id="lastLow"></div>\
			// 				</div>\
			// 			</div>\
			// 			<span style="display:none;" class="gwd_warehouse '+wareHouseShow+'">*北京仓</span>\
			// 					</div>'+
			// 		(!isGWZS ?
			// 			'<div class = "jump-link"><a target="_blank" href="http://qr15.cn/FcZW6J">全网商家历史低价精选</a></div>': '')+
			// 		'</div>');
            //
			// 	// 比价条价格曲线
             //    // console.log($('.gwd_toolbar_price_trend').length);
			// 	$('.gwd_toolbar_price_trend').append('\
			// 				<div id="chrome-price" class="chrome-price gwd_toolbar_assist_popbox">\
			// 					<div id ="titleBarId" class="title-bar">\
			// 						<span>'+
			// 		(!isGWZS ?
			// 			'<a href="https://www.miaomiaozhe.com" target="_blank">喵喵折</a><i></i><em>历史价格</em>' : '<a>历史价格数据来自喵喵折</a>')+
			// 		'</span>\
			// 		<div class="right-board">\
			// 			<p class="price">当前 <strong>¥ ' + ( (obj && obj.info && obj.info[obj.info.length-1].pr) || "0" ) + '</strong></p>\
			// 							<!--p class="ware-house">' + (obj && obj.wareHouse || "北京仓" ) + '</p-->\
			// 							<p class="price-intro">\
			// 								<span class="intro-thumb" style="background-image:url('+backgroundImg+')"></span>\
			// 								<span class="intro-detail"><span>1.不同地区的定价少数情况可能不同。</span><span>2.货币单位请以当前网站支持的货币为准。</span></span>\
			// 							</p>\
			// 						</div>\
			// 					</div>\
			// 					<div id ="priceHist" class="content-pane">\
			// 						<div class="chart mmz_placeholder"></div>\
			// 						<div class="rightWord">\
			//                             <div class="high">\
			//                                 <div>最高价</div>\
			//                                 <div id="lastHeight"></div>\
			//                             </div>\
			//                             <div class="low">\
			//                                 <div>最低价</div>\
			//                                 <div id="lastLow"></div>\
			//                             </div>\
		     //                    	</div>\
			// 						<span style="display:none;" class="gwd_warehouse '+wareHouseShow+'">*北京仓</span>\
			// 					</div>'+
			// 		(!isGWZS ?
			// 			'<div class = "jump-link"><a target="_blank" href="http://qr15.cn/FcZW6J">全网商家历史低价精选</a></div>': '')+
			// 		'</div>');
            //
			// 	if (json.barcode) {
			// 		var qrcode =  $("#scan_qrcode").get(0);
			// 		if( qrcode ){
			// 			var url = decodeURIComponent(json.barcode);
			// 			new QRCode(qrcode, {
			// 				text: url,
			// 				width: 120,
			// 				height: 120,
			// 				colorDark : "#000000",
			// 				colorLight : "#ffffff"
			// 			});
			// 		}
			// 	}
            //
			// 	$('.gouwudai_chrome_insert_history_price_container').mouseenter(function() {
			// 		$('#chrome-price .app-scan').removeClass('show-scan');
			// 		// 嵌入条历史价格hover
			// 		chrome.extension.sendMessage({
			// 			'greeting': 'GROWINGIO_EVENT',
			// 			'type': 'insetbar_history',
			// 			'domain': extractUrlDomain(pageUrl)
			// 		}, $.noop);
			// 	})
			// 	$(".gwd_toolbar_price_trend").mouseenter(function(){
			// 		// 比价条历史价格hover
			// 		chrome.extension.sendMessage({
			// 			'greeting': 'GROWINGIO_EVENT',
			// 			'type': 'pricebar_history',
			// 			'domain': extractUrlDomain(pageUrl)
			// 		}, $.noop);
			// 	}).mouseleave(function(){});
            //
			// 	if( obj ){
             //        initPrice(obj,".gwd_toolbar_price_trend");
             //        initPrice(obj,".gouwudai_chrome_insert_info_div");
			// 	}
			// 	$(".chrome-price").hide();
			// 	// $('.nc-container, .nc-guide-text').remove();
			// 	if (elem) {
			// 		$(elem).find('.chrome-price').show();
			// 	}
			// }

			//页面嵌入比价信息
			function insertBijiaIntoPage(json,isRepair){
				var info = json && json.info;
				if(info && $.isArray(info.gl) && info.gl.length>0){
					var bijiaInfo = info.gl, hasLowerPrice = false, hintHtml, cmpPrLowest, i, cpsUrl, cmpPr, tmp;
					try {
						cmpPrLowest = json.pcinfo.info[json.pcinfo.info.length - 1].pr;
					} catch (e) {
						cmpPrLowest = Infinity;
					}
					for (i = 0; i < bijiaInfo.length; ++i) {
						if (cmpPrLowest > bijiaInfo[i].pr) {
							hasLowerPrice = true;
							cmpPrLowest = +bijiaInfo[i].pr;
						}
					}
					if (hasLowerPrice) {
						hintHtml = '更低 <em>¥' + MiTools.getPrFix(cmpPrLowest) + '</em>';
					} else {
						hintHtml = '其他 <em>' + info.gl.length + '</em> 家报价';
					}
					if (!isRepair) {
						var cmpHtml = '<div class="gwd_compare_price_holder">\
											<div class="gwd_compare_price_open' + (hasLowerPrice ? '' : '') + '">\
												<div class="gwd_compare_price_icon" style="background-image:url(' + backgroundImg + ')"></div>\
												<span class="gwd_compare_price_hint">' + hintHtml + '</span>\
											</div>\
											<div class="gwd_compare_price_detail_list_holder">\
												<table class="gwd_compare_price_detail_list">';
						for (i = 0; i < bijiaInfo.length; ++i) {
							cpsUrl = '' + bijiaInfo[i]["jump"] + '&pos=' + (i + 1) + '_0&from=plugin_inpage_compareprice';
							cmpPr = MiTools.getPrFix(bijiaInfo[i].pr);
							cmpHtml += 				'<tr>\
														<td class="gwd_compare_price_detail_item">\
															<a href="' + cpsUrl + '" target="_blank" title="' + bijiaInfo[i].mc + '">' + bijiaInfo[i].mc + '</a>\
														</td>\
														<td class="gwd_compare_price_detail_price">¥ ' +
							MiTools.getPrFix(bijiaInfo[i].pr) +
							'</td>\
													 </tr>';
						}
						cmpHtml += 				'</table>\
											</div>\
										</div>';
						$('.gouwudai_chrome_insert_info_div_cbutton').before(cmpHtml);
						//添加

						//修复两次跳转的问题
						$('.gwd_compare_price_detail_list a').click(function(e){
							e.stopPropagation();
						});
						tmp = $('.gwd_compare_price_detail_list_holder');
						//console.log(tmp.width(), tmp.outerWidth());
						//$('.gwd_compare_price_open').css('min-width', tmp.width() - 31);
						tmp.addClass('gwd_hide').css('visibility', 'visible');
//						tmp.css('visibility', 'visible');
						$('.gwd_compare_price_detail_list tr').on('click', function(e){
							this.getElementsByTagName('a')[0].click();
						});
					}else{
						$('.gwd_compare_price_hint').html(hintHtml);
					}
				}
			}

			//比价动画
			function toolbarReminderAnimation(){
				Extension.sendMessage({greeting: "GET_BROWSER_TYPE_AND_LOGO_POSITION"},function(obj){
					$("body").append('<div class="gwd_fly_logo" style="background-image:url('+backgroundImg+')"></div>');
					if( obj && obj.x > -1 && obj.y > -1 ){
						$(".gwd_toolbar_logo .gwd_logo_first").css("visibility","hidden");
						var bottom = window.innerHeight - obj.y;
						$(".gwd_fly_logo").css("bottom",bottom);
						$(".gwd_fly_logo").show();
						setTimeout(function(){
							$(".gwd_toolbar_logo .gwd_logo_first").css("visibility","visible");
							$(".gwd_fly_logo").hide();
						},1100);
					}
					$(".mmz_toolbar_container_box").css("-webkit-transition","none 0.5s ease");
					$(".gwd_bj_low_price").hide();
					setTimeout(function(){
						$(".mmz_toolbar_container_box").css("-webkit-transition","all 0.5s ease");
						var goodsItems = $(".gwd_toolbar_all_goods .gwd_bj_one_goods");
						$.each(goodsItems,function(i,item){
							$(item).css("left",0-(item.offsetLeft+$(item).width()));
					    });
					    setTimeout(function(){
					    	$(".mmz_toolbar_container_box .gwd_bj_one_goods").css("-webkit-transition","all 0.75s ease");
						    $(".mmz_toolbar_container_box").attr("id","");
							$(".gwd_toolbar_logo").css("z-index",2001);
						    beginAnimation(goodsItems,function(){
						    	$(".mmz_toolbar_container_box .gwd_bj_one_goods").css("-webkit-transition","none 0.75s ease");
						    	$(".gwd_toolbar_logo").css("z-index",2000);
						    },function(item){
						    	item.find(".gwd_bj_low_price_big").show();
						    	setTimeout(function(){
						    		item.find(".gwd_bj_low_price").show();
						    		Extension.sendMessage({greeting: "TOOLBAR_REMINDER_ANIMATION_TIME"},function(obj){});
						    	},4800);
						    });
					    },300);
					},300);
					function beginAnimation(list,callBack,tipsCallBack){
						for(var i=(list.length-1);i>=0;i--){
							(function(num){
								setTimeout(function(){
									$(list[num]).css("left","0px");
									if( num==0 ){
										setTimeout(function(){
											callBack&&callBack();
										},750);
									}
									if( $(list[num]).find(".gwd_bj_low_price") ){
										setTimeout(function(){
											tipsCallBack&&tipsCallBack($(list[num]));
										},750);
									}
								},40*(list.length-num-1));
							})(i);
					    }
					}
				});
			}
			
			function builtinButton (template){
				try {
					if (template && template.reg) {
						var reg = JSON.parse(template.reg.replace(/\\/g, "\\\\"));
						for (var mateField in reg) {
							if (mateField == "pageimplant") {
								var peArray = reg[mateField]["position"];
								for (var peIndex = 0; peIndex < peArray.length; peIndex++) {
									if ($(peArray[peIndex],false).is(':visible')) {
										builtinButtonInfo = $(peArray[peIndex],false);
										builtinButtonInfo.isOrigin = false;
										break;
									}
								}
								var styleStr = '';
								var elementcss = reg[mateField]["cssstyle"];
								for (var element in elementcss) {
									var cssStr = '';
									var cssMap = elementcss[element];
									for (var cssName in cssMap) {
										$(element).css(cssName, cssMap[cssName]);
										cssStr += cssName + ':' + cssMap[cssName] + ';';
									}
									styleStr += '<style type="text/css">' + element + '{' + cssStr + '}</style>';
								}
								if (styleStr != "") {
									$('head').append(styleStr);
								}
							}
							else 
								if (mateField == "execjs") {
	//									var _handler;
	//									setTimeout(function(){
	//	                  					_handler= setInterval(function(){                                  
	//	                                        $('style').each(function(){
	//	                                            if($(this).html().indexOf('jabpa') > -1) {
	//	                                                $(this).remove();
	//	                                            }
	//	                                        });
	//	                                        if(!$('.mmz_toolbar_containerX')[0]){
	//												for(var i=0;i<100000;++i){
	//													clearTimeout(i);
	//												}
	//												toolbar && toolbar.refreshCache();
	//	                                            initPlueChrome();
	//	                                        }
	//	                                    },5000);
	//										$('head').prepend('<script>setTimeout(function(){for(var iiii=0;iiii<1000000;iiii++){if(iiii=='+_handler+'){;}else{clearInterval(iiii);}};},3000);</script>');
	//	                                },1000);
	//								try {
	//									console.log(reg[mateField]['content']);
	//									eval('(' + reg[mateField]['content'] + ')');
	//								}
	//								catch (e) {
	//								}
								}
						}
					}
				}catch(e){}
			}
		});
	};

	d12.shopContentLoad = shopContentLoad;
	d12.channelLoad = channelLoad;
})();

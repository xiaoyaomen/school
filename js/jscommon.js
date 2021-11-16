/*! jQuery v1.8.3 jquery.com | jquery.org/license */(function(e,t){function n(e){var t=dt[e]={};return Y.each(e.split(tt),function(e,n){t[n]=!0}),t}function r(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(mt,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:vt.test(r)?Y.parseJSON(r):r}catch(s){}Y.data(e,n,r)}else r=t}return r}function i(e){var t;for(t in e){if(t==="data"&&Y.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function s(){return!1}function o(){return!0}function u(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function a(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function f(e,t,n){t=t||0;if(Y.isFunction(t))return Y.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return Y.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=Y.grep(e,function(e){return e.nodeType===1});if(Bt.test(t))return Y.filter(t,r,!n);t=Y.filter(t,r)}return Y.grep(e,function(e,r){return Y.inArray(e,t)>=0===n})}function l(e){var t=It.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function c(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function h(e,t){if(t.nodeType!==1||!Y.hasData(e))return;var n,r,i,s=Y._data(e),o=Y._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)Y.event.add(t,n,u[n][r])}o.data&&(o.data=Y.extend({},o.data))}function p(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),Y.support.html5Clone&&e.innerHTML&&!Y.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Kt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(Y.expando)}function d(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function v(e){Kt.test(e.type)&&(e.defaultChecked=e.checked)}function m(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=yn.length;while(i--){t=yn[i]+n;if(t in e)return t}return r}function g(e,t){return e=t||e,Y.css(e,"display")==="none"||!Y.contains(e.ownerDocument,e)}function y(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=Y._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&g(n)&&(i[s]=Y._data(n,"olddisplay",S(n.nodeName)))):(r=nn(n,"display"),!i[s]&&r!=="none"&&Y._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function b(e,t,n){var r=cn.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function w(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=Y.css(e,n+gn[i],!0)),r?(n==="content"&&(s-=parseFloat(nn(e,"padding"+gn[i]))||0),n!=="margin"&&(s-=parseFloat(nn(e,"border"+gn[i]+"Width"))||0)):(s+=parseFloat(nn(e,"padding"+gn[i]))||0,n!=="padding"&&(s+=parseFloat(nn(e,"border"+gn[i]+"Width"))||0));return s}function E(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=Y.support.boxSizing&&Y.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=nn(e,t);if(r<0||r==null)r=e.style[t];if(hn.test(r))return r;i=s&&(Y.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+w(e,t,n||(s?"border":"content"),i)+"px"}function S(e){if(dn[e])return dn[e];var t=Y("<"+e+">").appendTo(R.body),n=t.css("display");t.remove();if(n==="none"||n===""){rn=R.body.appendChild(rn||Y.extend(R.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!sn||!rn.createElement)sn=(rn.contentWindow||rn.contentDocument).document,sn.write("<!doctype html><html><body>"),sn.close();t=sn.body.appendChild(sn.createElement(e)),n=nn(t,"display"),R.body.removeChild(rn)}return dn[e]=n,n}function x(e,t,n,r){var i;if(Y.isArray(t))Y.each(t,function(t,i){n||En.test(e)?r(e,i):x(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&Y.type(t)==="object")for(i in t)x(e+"["+i+"]",t[i],n,r);else r(e,t)}function T(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(tt),u=0,a=o.length;if(Y.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function N(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===jn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=N(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=N(e,n,r,i,"*",o)),u}function C(e,n){var r,i,s=Y.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&Y.extend(!0,e,i)}function k(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function L(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function A(){try{return new e.XMLHttpRequest}catch(t){}}function O(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function M(){return setTimeout(function(){Jn=t},0),Jn=Y.now()}function _(e,t){Y.each(t,function(t,n){var r=(er[t]||[]).concat(er["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function D(e,t,n){var r,i=0,s=0,o=Zn.length,u=Y.Deferred().always(function(){delete a.elem}),a=function(){var t=Jn||M(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:Y.extend({},t),opts:Y.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Jn||M(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=Y.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;P(l,f.opts.specialEasing);for(;i<o;i++){r=Zn[i].call(f,e,l,f.opts);if(r)return r}return _(f,l),Y.isFunction(f.opts.start)&&f.opts.start.call(e,f),Y.fx.timer(Y.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function P(e,t){var n,r,i,s,o;for(n in e){r=Y.camelCase(n),i=t[r],s=e[n],Y.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=Y.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function H(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},v=[],m=e.nodeType&&g(e);n.queue||(l=Y._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,Y.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],Y.css(e,"display")==="inline"&&Y.css(e,"float")==="none"&&(!Y.support.inlineBlockNeedsLayout||S(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",Y.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Qn.exec(s)){delete t[r],a=a||s==="toggle";if(s===(m?"hide":"show"))continue;v.push(r)}}o=v.length;if(o){u=Y._data(e,"fxshow")||Y._data(e,"fxshow",{}),"hidden"in u&&(m=u.hidden),a&&(u.hidden=!m),m?Y(e).show():h.done(function(){Y(e).hide()}),h.done(function(){var t;Y.removeData(e,"fxshow",!0);for(t in d)Y.style(e,t,d[t])});for(r=0;r<o;r++)i=v[r],f=h.createTween(i,m?u[i]:0),d[i]=u[i]||Y.style(e,i),i in u||(u[i]=f.start,m&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function B(e,t,n,r,i){return new B.prototype.init(e,t,n,r,i)}function j(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=gn[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function F(e){return Y.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var I,q,R=e.document,U=e.location,z=e.navigator,W=e.jQuery,X=e.$,V=Array.prototype.push,$=Array.prototype.slice,J=Array.prototype.indexOf,K=Object.prototype.toString,Q=Object.prototype.hasOwnProperty,G=String.prototype.trim,Y=function(e,t){return new Y.fn.init(e,t,I)},Z=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,et=/\S/,tt=/\s+/,nt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rt=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,it=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,st=/^[\],:{}\s]*$/,ot=/(?:^|:|,)(?:\s*\[)+/g,ut=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,at=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,ft=/^-ms-/,lt=/-([\da-z])/gi,ct=function(e,t){return(t+"").toUpperCase()},ht=function(){R.addEventListener?(R.removeEventListener("DOMContentLoaded",ht,!1),Y.ready()):R.readyState==="complete"&&(R.detachEvent("onreadystatechange",ht),Y.ready())},pt={};Y.fn=Y.prototype={constructor:Y,init:function(e,n,r){var i,s,o,u;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?i=[null,e,null]:i=rt.exec(e);if(i&&(i[1]||!n)){if(i[1])return n=n instanceof Y?n[0]:n,u=n&&n.nodeType?n.ownerDocument||n:R,e=Y.parseHTML(i[1],u,!0),it.test(i[1])&&Y.isPlainObject(n)&&this.attr.call(e,n,!0),Y.merge(this,e);s=R.getElementById(i[2]);if(s&&s.parentNode){if(s.id!==i[2])return r.find(e);this.length=1,this[0]=s}return this.context=R,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return Y.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),Y.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return $.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=Y.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return Y.each(this,e,t)},ready:function(e){return Y.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack($.apply(this,arguments),"slice",$.call(arguments).join(","))},map:function(e){return this.pushStack(Y.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:V,sort:[].sort,splice:[].splice},Y.fn.init.prototype=Y.fn,Y.extend=Y.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!Y.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(Y.isPlainObject(i)||(s=Y.isArray(i)))?(s?(s=!1,o=r&&Y.isArray(r)?r:[]):o=r&&Y.isPlainObject(r)?r:{},u[n]=Y.extend(l,o,i)):i!==t&&(u[n]=i)}return u},Y.extend({noConflict:function(t){return e.$===Y&&(e.$=X),t&&e.jQuery===Y&&(e.jQuery=W),Y},isReady:!1,readyWait:1,holdReady:function(e){e?Y.readyWait++:Y.ready(!0)},ready:function(e){if(e===!0?--Y.readyWait:Y.isReady)return;if(!R.body)return setTimeout(Y.ready,1);Y.isReady=!0;if(e!==!0&&--Y.readyWait>0)return;q.resolveWith(R,[Y]),Y.fn.trigger&&Y(R).trigger("ready").off("ready")},isFunction:function(e){return Y.type(e)==="function"},isArray:Array.isArray||function(e){return Y.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):pt[K.call(e)]||"object"},isPlainObject:function(e){if(!e||Y.type(e)!=="object"||e.nodeType||Y.isWindow(e))return!1;try{if(e.constructor&&!Q.call(e,"constructor")&&!Q.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||Q.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||R,(r=it.exec(e))?[t.createElement(r[1])]:(r=Y.buildFragment([e],t,n?null:[]),Y.merge([],(r.cacheable?Y.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=Y.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(st.test(t.replace(ut,"@").replace(at,"]").replace(ot,"")))return(new Function("return "+t))();Y.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&Y.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&et.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(ft,"ms-").replace(lt,ct)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||Y.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:G&&!G.call("\ufeff\u00a0")?function(e){return e==null?"":G.call(e)}:function(e){return e==null?"":(e+"").replace(nt,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=Y.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||Y.isWindow(e)?V.call(r,e):Y.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(J)return J.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof Y||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||Y.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),Y.isFunction(e)?(i=$.call(arguments,2),s=function(){return e.apply(n,i.concat($.call(arguments)))},s.guid=e.guid=e.guid||Y.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)Y.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&Y.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(Y(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),Y.ready.promise=function(t){if(!q){q=Y.Deferred();if(R.readyState==="complete")setTimeout(Y.ready,1);else if(R.addEventListener)R.addEventListener("DOMContentLoaded",ht,!1),e.addEventListener("load",Y.ready,!1);else{R.attachEvent("onreadystatechange",ht),e.attachEvent("onload",Y.ready);var n=!1;try{n=e.frameElement==null&&R.documentElement}catch(r){}n&&n.doScroll&&function i(){if(!Y.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}Y.ready()}}()}}return q.promise(t)},Y.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){pt["[object "+t+"]"]=t.toLowerCase()}),I=Y(R);var dt={};Y.Callbacks=function(e){e=typeof e=="string"?dt[e]||n(e):Y.extend({},e);var r,i,s,o,u,a,f=[],l=!e.once&&[],c=function(t){r=e.memory&&t,i=!0,a=o||0,o=0,u=f.length,s=!0;for(;f&&a<u;a++)if(f[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}s=!1,f&&(l?l.length&&c(l.shift()):r?f=[]:h.disable())},h={add:function(){if(f){var t=f.length;(function n(t){Y.each(t,function(t,r){var i=Y.type(r);i==="function"?(!e.unique||!h.has(r))&&f.push(r):r&&r.length&&i!=="string"&&n(r)})})(arguments),s?u=f.length:r&&(o=t,c(r))}return this},remove:function(){return f&&Y.each(arguments,function(e,t){var n;while((n=Y.inArray(t,f,n))>-1)f.splice(n,1),s&&(n<=u&&u--,n<=a&&a--)}),this},has:function(e){return Y.inArray(e,f)>-1},empty:function(){return f=[],this},disable:function(){return f=l=r=t,this},disabled:function(){return!f},lock:function(){return l=t,r||h.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],f&&(!i||l)&&(s?l.push(t):c(t)),this},fire:function(){return h.fireWith(this,arguments),this},fired:function(){return!!i}};return h},Y.extend({Deferred:function(e){var t=[["resolve","done",Y.Callbacks("once memory"),"resolved"],["reject","fail",Y.Callbacks("once memory"),"rejected"],["notify","progress",Y.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return Y.Deferred(function(n){Y.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](Y.isFunction(o)?function(){var e=o.apply(this,arguments);e&&Y.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?Y.extend(e,r):r}},i={};return r.pipe=r.then,Y.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=$.call(arguments),r=n.length,i=r!==1||e&&Y.isFunction(e.promise)?r:0,s=i===1?e:Y.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?$.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&Y.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),Y.support=function(){var t,n,r,i,s,o,u,a,f,l,c,h=R.createElement("div");h.setAttribute("className","t"),h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=h.getElementsByTagName("*"),r=h.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};i=R.createElement("select"),s=i.appendChild(R.createElement("option")),o=h.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:h.firstChild.nodeType===3,tbody:!h.getElementsByTagName("tbody").length,htmlSerialize:!!h.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:o.value==="on",optSelected:s.selected,getSetAttribute:h.className!=="t",enctype:!!R.createElement("form").enctype,html5Clone:R.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:R.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,i.disabled=!0,t.optDisabled=!s.disabled;try{delete h.test}catch(p){t.deleteExpando=!1}!h.addEventListener&&h.attachEvent&&h.fireEvent&&(h.attachEvent("onclick",c=function(){t.noCloneEvent=!1}),h.cloneNode(!0).fireEvent("onclick"),h.detachEvent("onclick",c)),o=R.createElement("input"),o.value="t",o.setAttribute("type","radio"),t.radioValue=o.value==="t",o.setAttribute("checked","checked"),o.setAttribute("name","t"),h.appendChild(o),u=R.createDocumentFragment(),u.appendChild(h.lastChild),t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=o.checked,u.removeChild(o),u.appendChild(h);if(h.attachEvent)for(f in{submit:!0,change:!0,focusin:!0})a="on"+f,l=a in h,l||(h.setAttribute(a,"return;"),l=typeof h[a]=="function"),t[f+"Bubbles"]=l;return Y(function(){var n,r,i,s,o="padding:0;margin:0;border:0;display:block;overflow:hidden;",u=R.getElementsByTagName("body")[0];if(!u)return;n=R.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",u.insertBefore(n,u.firstChild),r=R.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=r.getElementsByTagName("td"),i[0].style.cssText="padding:0;margin:0;border:0;display:none",l=i[0].offsetHeight===0,i[0].style.display="",i[1].style.display="none",t.reliableHiddenOffsets=l&&i[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=u.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",s=R.createElement("div"),s.style.cssText=r.style.cssText=o,s.style.marginRight=s.style.width="0",r.style.width="1px",r.appendChild(s),t.reliableMarginRight=!parseFloat((e.getComputedStyle(s,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=o+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),u.removeChild(n),n=r=i=s=null}),u.removeChild(h),n=r=i=s=o=u=h=null,t}();var vt=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,mt=/([A-Z])/g;Y.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(Y.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?Y.cache[e[Y.expando]]:e[Y.expando],!!e&&!i(e)},data:function(e,n,r,i){if(!Y.acceptData(e))return;var s,o,u=Y.expando,a=typeof n=="string",f=e.nodeType,l=f?Y.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=Y.deletedIds.pop()||Y.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=Y.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=Y.extend(l[c],n):l[c].data=Y.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[Y.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[Y.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!Y.acceptData(e))return;var r,s,o,u=e.nodeType,a=u?Y.cache:e,f=u?e[Y.expando]:Y.expando;if(!a[f])return;if(t){r=n?a[f]:a[f].data;if(r){Y.isArray(t)||(t in r?t=[t]:(t=Y.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(s=0,o=t.length;s<o;s++)delete r[t[s]];if(!(n?i:Y.isEmptyObject)(r))return}}if(!n){delete a[f].data;if(!i(a[f]))return}u?Y.cleanData([e],!0):Y.support.deleteExpando||a!=a.window?delete a[f]:a[f]=null},_data:function(e,t,n){return Y.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&Y.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),Y.fn.extend({data:function(e,n){var i,s,o,u,a,f=this[0],l=0,c=null;if(e===t){if(this.length){c=Y.data(f);if(f.nodeType===1&&!Y._data(f,"parsedAttrs")){o=f.attributes;for(a=o.length;l<a;l++)u=o[l].name,u.indexOf("data-")||(u=Y.camelCase(u.substring(5)),r(f,u,c[u]));Y._data(f,"parsedAttrs",!0)}}return c}return typeof e=="object"?this.each(function(){Y.data(this,e)}):(i=e.split(".",2),i[1]=i[1]?"."+i[1]:"",s=i[1]+"!",Y.access(this,function(n){if(n===t)return c=this.triggerHandler("getData"+s,[i[0]]),c===t&&f&&(c=Y.data(f,e),c=r(f,e,c)),c===t&&i[1]?this.data(i[0]):c;i[1]=n,this.each(function(){var t=Y(this);t.triggerHandler("setData"+s,i),Y.data(this,e,n),t.triggerHandler("changeData"+s,i)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){Y.removeData(this,e)})}}),Y.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y._data(e,t),n&&(!r||Y.isArray(n)?r=Y._data(e,t,Y.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=Y.queue(e,t),r=n.length,i=n.shift(),s=Y._queueHooks(e,t),o=function(){Y.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y._data(e,n)||Y._data(e,n,{empty:Y.Callbacks("once memory").add(function(){Y.removeData(e,t+"queue",!0),Y.removeData(e,n,!0)})})}}),Y.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?Y.queue(this[0],e):n===t?this:this.each(function(){var t=Y.queue(this,e,n);Y._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&Y.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Y.dequeue(this,e)})},delay:function(e,t){return e=Y.fx?Y.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=Y.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=Y._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var gt,yt,bt,wt=/[\t\r\n]/g,Et=/\r/g,St=/^(?:button|input)$/i,xt=/^(?:button|input|object|select|textarea)$/i,Tt=/^a(?:rea|)$/i,Nt=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,Ct=Y.support.getSetAttribute;Y.fn.extend({attr:function(e,t){return Y.access(this,Y.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){Y.removeAttr(this,e)})},prop:function(e,t){return Y.access(this,Y.prop,e,t,arguments.length>1)},removeProp:function(e){return e=Y.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(Y.isFunction(e))return this.each(function(t){Y(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(tt);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=Y.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(Y.isFunction(e))return this.each(function(t){Y(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(tt);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(wt," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?Y.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return Y.isFunction(e)?this.each(function(n){Y(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=Y(this),u=t,a=e.split(tt);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&Y._data(this,"__className__",this.className),this.className=this.className||e===!1?"":Y._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(wt," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=Y.valHooks[s.type]||Y.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(Et,""):r==null?"":r);return}return i=Y.isFunction(e),this.each(function(r){var s,o=Y(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":Y.isArray(s)&&(s=Y.map(s,function(e){return e==null?"":e+""})),n=Y.valHooks[this.type]||Y.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),Y.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(Y.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!Y.nodeName(n.parentNode,"optgroup"))){t=Y(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=Y.makeArray(t);return Y(e).find("option").each(function(){this.selected=Y.inArray(Y(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&Y.isFunction(Y.fn[n]))return Y(e)[n](r);if(typeof e.getAttribute=="undefined")return Y.prop(e,n,r);u=a!==1||!Y.isXMLDoc(e),u&&(n=n.toLowerCase(),o=Y.attrHooks[n]||(Nt.test(n)?yt:gt));if(r!==t){if(r===null){Y.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(tt);for(;o<r.length;o++)i=r[o],i&&(n=Y.propFix[i]||i,s=Nt.test(i),s||Y.attr(e,i,""),e.removeAttribute(Ct?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(St.test(e.nodeName)&&e.parentNode)Y.error("type property can't be changed");else if(!Y.support.radioValue&&t==="radio"&&Y.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return gt&&Y.nodeName(e,"button")?gt.get(e,t):t in e?e.value:null},set:function(e,t,n){if(gt&&Y.nodeName(e,"button"))return gt.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!Y.isXMLDoc(e),o&&(n=Y.propFix[n]||n,s=Y.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):xt.test(e.nodeName)||Tt.test(e.nodeName)&&e.href?0:t}}}}),yt={get:function(e,n){var r,i=Y.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?Y.removeAttr(e,n):(r=Y.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},Ct||(bt={name:!0,id:!0,coords:!0},gt=Y.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(bt[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=R.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},Y.each(["width","height"],function(e,t){Y.attrHooks[t]=Y.extend(Y.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),Y.attrHooks.contenteditable={get:gt.get,set:function(e,t,n){t===""&&(t="false"),gt.set(e,t,n)}}),Y.support.hrefNormalized||Y.each(["href","src","width","height"],function(e,n){Y.attrHooks[n]=Y.extend(Y.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),Y.support.style||(Y.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),Y.support.optSelected||(Y.propHooks.selected=Y.extend(Y.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),Y.support.enctype||(Y.propFix.enctype="encoding"),Y.support.checkOn||Y.each(["radio","checkbox"],function(){Y.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),Y.each(["radio","checkbox"],function(){Y.valHooks[this]=Y.extend(Y.valHooks[this],{set:function(e,t){if(Y.isArray(t))return e.checked=Y.inArray(Y(e).val(),t)>=0}})});var kt=/^(?:textarea|input|select)$/i,Lt=/^([^\.]*|)(?:\.(.+)|)$/,At=/(?:^|\s)hover(\.\S+|)\b/,Ot=/^key/,Mt=/^(?:mouse|contextmenu)|click/,_t=/^(?:focusinfocus|focusoutblur)$/,Dt=function(e){return Y.event.special.hover?e:e.replace(At,"mouseenter$1 mouseleave$1")};Y.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,v,m;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=Y._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=Y.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof Y=="undefined"||!!e&&Y.event.triggered===e.type?t:Y.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=Y.trim(Dt(n)).split(" ");for(f=0;f<n.length;f++){l=Lt.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),m=Y.event.special[c]||{},c=(s?m.delegateType:m.bindType)||c,m=Y.event.special[c]||{},p=Y.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&Y.expr.match.needsContext.test(s),namespace:h.join(".")},d),v=a[c];if(!v){v=a[c]=[],v.delegateCount=0;if(!m.setup||m.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}m.add&&(m.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?v.splice(v.delegateCount++,0,p):v.push(p),Y.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,v,m=Y.hasData(e)&&Y._data(e);if(!m||!(h=m.events))return;t=Y.trim(Dt(t||"")).split(" ");for(s=0;s<t.length;s++){o=Lt.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)Y.event.remove(e,u+t[s],n,r,!0);continue}p=Y.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)v=d[c],(i||a===v.origType)&&(!n||n.guid===v.guid)&&(!f||f.test(v.namespace))&&(!r||r===v.selector||r==="**"&&v.selector)&&(d.splice(c--,1),v.selector&&d.delegateCount--,p.remove&&p.remove.call(e,v));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,m.handle)===!1)&&Y.removeEvent(e,u,m.handle),delete h[u])}Y.isEmptyObject(h)&&(delete m.handle,Y.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,i,s){if(!i||i.nodeType!==3&&i.nodeType!==8){var o,u,a,f,l,c,h,p,d,v,m=n.type||n,g=[];if(_t.test(m+Y.event.triggered))return;m.indexOf("!")>=0&&(m=m.slice(0,-1),u=!0),m.indexOf(".")>=0&&(g=m.split("."),m=g.shift(),g.sort());if((!i||Y.event.customEvent[m])&&!Y.event.global[m])return;n=typeof n=="object"?n[Y.expando]?n:new Y.Event(m,n):new Y.Event(m),n.type=m,n.isTrigger=!0,n.exclusive=u,n.namespace=g.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,c=m.indexOf(":")<0?"on"+m:"";if(!i){o=Y.cache;for(a in o)o[a].events&&o[a].events[m]&&Y.event.trigger(n,r,o[a].handle.elem,!0);return}n.result=t,n.target||(n.target=i),r=r!=null?Y.makeArray(r):[],r.unshift(n),h=Y.event.special[m]||{};if(h.trigger&&h.trigger.apply(i,r)===!1)return;d=[[i,h.bindType||m]];if(!s&&!h.noBubble&&!Y.isWindow(i)){v=h.delegateType||m,f=_t.test(v+m)?i:i.parentNode;for(l=i;f;f=f.parentNode)d.push([f,v]),l=f;l===(i.ownerDocument||R)&&d.push([l.defaultView||l.parentWindow||e,v])}for(a=0;a<d.length&&!n.isPropagationStopped();a++)f=d[a][0],n.type=d[a][1],p=(Y._data(f,"events")||{})[n.type]&&Y._data(f,"handle"),p&&p.apply(f,r),p=c&&f[c],p&&Y.acceptData(f)&&p.apply&&p.apply(f,r)===!1&&n.preventDefault();return n.type=m,!s&&!n.isDefaultPrevented()&&(!h._default||h._default.apply(i.ownerDocument,r)===!1)&&(m!=="click"||!Y.nodeName(i,"a"))&&Y.acceptData(i)&&c&&i[m]&&(m!=="focus"&&m!=="blur"||n.target.offsetWidth!==0)&&!Y.isWindow(i)&&(l=i[c],l&&(i[c]=null),Y.event.triggered=m,i[m](),Y.event.triggered=t,l&&(i[c]=l)),n.result}return},dispatch:function(n){n=Y.event.fix(n||e.event);var r,i,s,o,u,a,f,l,c,h,p=(Y._data(this,"events")||{})[n.type]||[],d=p.delegateCount,v=$.call(arguments),m=!n.exclusive&&!n.namespace,g=Y.event.special[n.type]||{},y=[];v[0]=n,n.delegateTarget=this;if(g.preDispatch&&g.preDispatch.call(this,n)===!1)return;if(d&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<d;r++)l=p[r],c=l.selector,u[c]===t&&(u[c]=l.needsContext?Y(c,this).index(s)>=0:Y.find(c,this,null,[s]).length),u[c]&&f.push(l);f.length&&y.push({elem:s,matches:f})}p.length>d&&y.push({elem:this,matches:p.slice(d)});for(r=0;r<y.length&&!n.isPropagationStopped();r++){a=y[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){l=a.matches[i];if(m||!n.namespace&&!l.namespace||n.namespace_re&&n.namespace_re.test(l.namespace))n.data=l.data,n.handleObj=l,o=((Y.event.special[l.origType]||{}).handle||l.handler).apply(a.elem,v),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return g.postDispatch&&g.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,s,o=n.button,u=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||R,i=r.documentElement,s=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||s&&s.scrollLeft||0)-(i&&i.clientLeft||s&&s.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||s&&s.scrollTop||0)-(i&&i.clientTop||s&&s.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),!e.which&&o!==t&&(e.which=o&1?1:o&2?3:o&4?2:0),e}},fix:function(e){if(e[Y.expando])return e;var t,n,r=e,i=Y.event.fixHooks[e.type]||{},s=i.props?this.props.concat(i.props):this.props;e=Y.Event(r);for(t=s.length;t;)n=s[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||R),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,i.filter?i.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){Y.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=Y.extend(new Y.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?Y.event.trigger(i,null,t):Y.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},Y.event.handle=Y.event.dispatch,Y.removeEvent=R.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},Y.Event=function(e,t){if(!(this instanceof Y.Event))return new Y.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?o:s):this.type=e,t&&Y.extend(this,t),this.timeStamp=e&&e.timeStamp||Y.now(),this[Y.expando]=!0},Y.Event.prototype={preventDefault:function(){this.isDefaultPrevented=o;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=o;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=o,this.stopPropagation()},isDefaultPrevented:s,isPropagationStopped:s,isImmediatePropagationStopped:s},Y.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){Y.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!Y.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),Y.support.submitBubbles||(Y.event.special.submit={setup:function(){if(Y.nodeName(this,"form"))return!1;Y.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=Y.nodeName(n,"input")||Y.nodeName(n,"button")?n.form:t;r&&!Y._data(r,"_submit_attached")&&(Y.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),Y._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&Y.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(Y.nodeName(this,"form"))return!1;Y.event.remove(this,"._submit")}}),Y.support.changeBubbles||(Y.event.special.change={setup:function(){if(kt.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")Y.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),Y.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),Y.event.simulate("change",this,e,!0)});return!1}Y.event.add(this,"beforeactivate._change",function(e){var t=e.target;kt.test(t.nodeName)&&!Y._data(t,"_change_attached")&&(Y.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&Y.event.simulate("change",this.parentNode,e,!0)}),Y._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return Y.event.remove(this,"._change"),!kt.test(this.nodeName)}}),Y.support.focusinBubbles||Y.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){Y.event.simulate(t,e.target,Y.event.fix(e),!0)};Y.event.special[t]={setup:function(){n++===0&&R.addEventListener(e,r,!0)},teardown:function(){--n===0&&R.removeEventListener(e,r,!0)}}}),Y.fn.extend({on:function(e,n,r,i,o){var u,a;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=s;else if(!i)return this;return o===1&&(u=i,i=function(e){return Y().off(e),u.apply(this,arguments)},i.guid=u.guid||(u.guid=Y.guid++)),this.each(function(){Y.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,Y(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(o in e)this.off(o,n,e[o]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=s),this.each(function(){Y.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return Y(this.context).on(e,this.selector,t,n),this},die:function(e,t){return Y(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){Y.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return Y.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||Y.guid++,r=0,i=function(n){var i=(Y._data(this,"lastToggle"+e.guid)||0)%r;return Y._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),Y.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){Y.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Ot.test(t)&&(Y.event.fixHooks[t]=Y.event.keyHooks),Mt.test(t)&&(Y.event.fixHooks[t]=Y.event.mouseHooks)}),function(e,t){function n(e,t,n,r){n=n||[],t=t||M;var i,s,o,u,a=t.nodeType;if(!e||typeof e!="string")return n;if(a!==1&&a!==9)return[];o=E(t);if(!o&&!r)if(i=nt.exec(e))if(u=i[1]){if(a===9){s=t.getElementById(u);if(!s||!s.parentNode)return n;if(s.id===u)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(u))&&S(t,s)&&s.id===u)return n.push(s),n}else{if(i[2])return B.apply(n,j.call(t.getElementsByTagName(e),0)),n;if((u=i[3])&&dt&&t.getElementsByClassName)return B.apply(n,j.call(t.getElementsByClassName(u),0)),n}return v(e.replace(G,"$1"),t,n,r,o)}function r(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function i(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function s(e){return I(function(t){return t=+t,I(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function o(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function u(e,t){var r,i,s,o,u,a,f,l=U[A][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=b.preFilter;while(u){if(!r||(i=Z.exec(u)))i&&(u=u.slice(i[0].length)||u),a.push(s=[]);r=!1;if(i=et.exec(u))s.push(r=new O(i.shift())),u=u.slice(r.length),r.type=i[0].replace(G," ");for(o in b.filter)(i=ft[o].exec(u))&&(!f[o]||(i=f[o](i)))&&(s.push(r=new O(i.shift())),u=u.slice(r.length),r.type=o,r.matches=i);if(!r)break}return t?u.length:u?n.error(e):U(e,a).slice(0)}function a(e,t,n){var r=t.dir,i=n&&t.dir==="parentNode",s=P++;return t.first?function(t,n,s){while(t=t[r])if(i||t.nodeType===1)return e(t,n,s)}:function(t,n,o){if(!o){var u,a=D+" "+s+" ",f=a+g;while(t=t[r])if(i||t.nodeType===1){if((u=t[A])===f)return t.sizset;if(typeof u=="string"&&u.indexOf(a)===0){if(t.sizset)return t}else{t[A]=f;if(e(t,n,o))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[r])if(i||t.nodeType===1)if(e(t,n,o))return t}}function f(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function l(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function c(e,t,n,r,i,s){return r&&!r[A]&&(r=c(r)),i&&!i[A]&&(i=c(i,s)),I(function(s,o,u,a){var f,c,h,p=[],v=[],m=o.length,g=s||d(t||"*",u.nodeType?[u]:u,[]),y=e&&(s||!t)?l(g,p,e,u,a):g,b=n?i||(s?e:m||r)?[]:o:y;n&&n(y,b,u,a);if(r){f=l(b,v),r(f,[],u,a),c=f.length;while(c--)if(h=f[c])b[v[c]]=!(y[v[c]]=h)}if(s){if(i||e){if(i){f=[],c=b.length;while(c--)(h=b[c])&&f.push(y[c]=h);i(null,b=[],f,a)}c=b.length;while(c--)(h=b[c])&&(f=i?F.call(s,h):p[c])>-1&&(s[f]=!(o[f]=h))}}else b=l(b===o?b.splice(m,b.length):b),i?i(null,o,b,a):B.apply(o,b)})}function h(e){var t,n,r,i=e.length,s=b.relative[e[0].type],o=s||b.relative[" "],u=s?1:0,l=a(function(e){return e===t},o,!0),p=a(function(e){return F.call(t,e)>-1},o,!0),d=[function(e,n,r){return!s&&(r||n!==C)||((t=n).nodeType?l(e,n,r):p(e,n,r))}];for(;u<i;u++)if(n=b.relative[e[u].type])d=[a(f(d),n)];else{n=b.filter[e[u].type].apply(null,e[u].matches);if(n[A]){r=++u;for(;r<i;r++)if(b.relative[e[r].type])break;return c(u>1&&f(d),u>1&&e.slice(0,u-1).join("").replace(G,"$1"),n,u<r&&h(e.slice(u,r)),r<i&&h(e=e.slice(r)),r<i&&e.join(""))}d.push(n)}return f(d)}function p(e,t){var r=t.length>0,i=e.length>0,s=function(o,u,a,f,c){var h,p,d,v=[],m=0,y="0",w=o&&[],E=c!=null,S=C,x=o||i&&b.find.TAG("*",c&&u.parentNode||u),T=D+=S==null?1:Math.E;E&&(C=u!==M&&u,g=s.el);for(;(h=x[y])!=null;y++){if(i&&h){for(p=0;d=e[p];p++)if(d(h,u,a)){f.push(h);break}E&&(D=T,g=++s.el)}r&&((h=!d&&h)&&m--,o&&w.push(h))}m+=y;if(r&&y!==m){for(p=0;d=t[p];p++)d(w,v,u,a);if(o){if(m>0)while(y--)!w[y]&&!v[y]&&(v[y]=H.call(f));v=l(v)}B.apply(f,v),E&&!o&&v.length>0&&m+t.length>1&&n.uniqueSort(f)}return E&&(D=T,C=S),w};return s.el=0,r?I(s):s}function d(e,t,r){var i=0,s=t.length;for(;i<s;i++)n(e,t[i],r);return r}function v(e,t,n,r,i){var s,o,a,f,l,c=u(e),h=c.length;if(!r&&c.length===1){o=c[0]=c[0].slice(0);if(o.length>2&&(a=o[0]).type==="ID"&&t.nodeType===9&&!i&&b.relative[o[1].type]){t=b.find.ID(a.matches[0].replace(at,""),t,i)[0];if(!t)return n;e=e.slice(o.shift().length)}for(s=ft.POS.test(e)?-1:o.length-1;s>=0;s--){a=o[s];if(b.relative[f=a.type])break;if(l=b.find[f])if(r=l(a.matches[0].replace(at,""),it.test(o[0].type)&&t.parentNode||t,i)){o.splice(s,1),e=r.length&&o.join("");if(!e)return B.apply(n,j.call(r,0)),n;break}}}return x(e,c)(r,t,i,n,it.test(e)),n}function m(){}var g,y,b,w,E,S,x,T,N,C,k=!0,L="undefined",A=("sizcache"+Math.random()).replace(".",""),O=String,M=e.document,_=M.documentElement,D=0,P=0,H=[].pop,B=[].push,j=[].slice,F=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},I=function(e,t){return e[A]=t==null||t,e},q=function(){var e={},t=[];return I(function(n,r){return t.push(n)>b.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},R=q(),U=q(),z=q(),W="[\\x20\\t\\r\\n\\f]",X="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",V=X.replace("w","w#"),$="([*^$|!~]?=)",J="\\["+W+"*("+X+")"+W+"*(?:"+$+W+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+V+")|)|)"+W+"*\\]",K=":("+X+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+J+")|[^:]|\\\\.)*|.*))\\)|)",Q=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+W+"*((?:-\\d)?\\d*)"+W+"*\\)|)(?=[^-]|$)",G=new RegExp("^"+W+"+|((?:^|[^\\\\])(?:\\\\.)*)"+W+"+$","g"),Z=new RegExp("^"+W+"*,"+W+"*"),et=new RegExp("^"+W+"*([\\x20\\t\\r\\n\\f>+~])"+W+"*"),tt=new RegExp(K),nt=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,rt=/^:not/,it=/[\x20\t\r\n\f]*[+~]/,st=/:not\($/,ot=/h\d/i,ut=/input|select|textarea|button/i,at=/\\(?!\\)/g,ft={ID:new RegExp("^#("+X+")"),CLASS:new RegExp("^\\.("+X+")"),NAME:new RegExp("^\\[name=['\"]?("+X+")['\"]?\\]"),TAG:new RegExp("^("+X.replace("w","w*")+")"),ATTR:new RegExp("^"+J),PSEUDO:new RegExp("^"+K),POS:new RegExp(Q,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+W+"*(even|odd|(([+-]|)(\\d*)n|)"+W+"*(?:([+-]|)"+W+"*(\\d+)|))"+W+"*\\)|)","i"),needsContext:new RegExp("^"+W+"*[>+~]|"+Q,"i")},lt=function(e){var t=M.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},ct=lt(function(e){return e.appendChild(M.createComment("")),!e.getElementsByTagName("*").length}),ht=lt(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==L&&e.firstChild.getAttribute("href")==="#"}),pt=lt(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),dt=lt(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),vt=lt(function(e){e.id=A+0,e.innerHTML="<a name='"+A+"'></a><div name='"+A+"'></div>",_.insertBefore(e,_.firstChild);var t=M.getElementsByName&&M.getElementsByName(A).length===2+M.getElementsByName(A+0).length;return y=!M.getElementById(A),_.removeChild(e),t});try{j.call(_.childNodes,0)[0].nodeType}catch(mt){j=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}n.matches=function(e,t){return n(e,null,null,t)},n.matchesSelector=function(e,t){return n(t,null,null,[e]).length>0},w=n.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=w(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=w(t);return n},E=n.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},S=n.contains=_.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:_.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},n.attr=function(e,t){var n,r=E(e);return r||(t=t.toLowerCase()),(n=b.attrHandle[t])?n(e):r||pt?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},b=n.selectors={cacheLength:50,createPseudo:I,match:ft,attrHandle:ht?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:y?function(e,t,n){if(typeof t.getElementById!==L&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==L&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==L&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:ct?function(e,t){if(typeof t.getElementsByTagName!==L)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:vt&&function(e,t){if(typeof t.getElementsByName!==L)return t.getElementsByName(name)},CLASS:dt&&function(e,t,n){if(typeof t.getElementsByClassName!==L&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(at,""),e[3]=(e[4]||e[5]||"").replace(at,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||n.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&n.error(e[0]),e},PSEUDO:function(e){var t,n;if(ft.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])tt.test(t)&&(n=u(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:y?function(e){return e=e.replace(at,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace(at,""),function(t){var n=typeof t.getAttributeNode!==L&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace(at,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=R[A][e+" "];return t||(t=new RegExp("(^|"+W+")"+e+"("+W+"|$)"))&&R(e,function(e){return t.test(e.className||typeof e.getAttribute!==L&&e.getAttribute("class")||"")})},ATTR:function(e,t,r){return function(i,s){var o=n.attr(i,e);return o==null?t==="!=":t?(o+="",t==="="?o===r:t==="!="?o!==r:t==="^="?r&&o.indexOf(r)===0:t==="*="?r&&o.indexOf(r)>-1:t==="$="?r&&o.substr(o.length-r.length)===r:t==="~="?(" "+o+" ").indexOf(r)>-1:t==="|="?o===r||o.substr(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var r,i=b.pseudos[e]||b.setFilters[e.toLowerCase()]||n.error("unsupported pseudo: "+e);return i[A]?i(t):i.length>1?(r=[e,e,"",t],b.setFilters.hasOwnProperty(e.toLowerCase())?I(function(e,n){var r,s=i(e,t),o=s.length;while(o--)r=F.call(e,s[o]),e[r]=!(n[r]=s[o])}):function(e){return i(e,0,r)}):i}},pseudos:{not:I(function(e){var t=[],n=[],r=x(e.replace(G,"$1"));return r[A]?I(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:I(function(e){return function(t){return n(e,t).length>0}}),contains:I(function(e){return function(t){return(t.textContent||t.innerText||w(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!b.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return ot.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:r("radio"),checkbox:r("checkbox"),file:r("file"),password:r("password"),image:r("image"),submit:i("submit"),reset:i("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return ut.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:s(function(){return[0]}),last:s(function(e,t){return[t-1]}),eq:s(function(e,t,n){return[n<0?n+t:n]}),even:s(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:s(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:s(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:s(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},T=_.compareDocumentPosition?function(e,t){return e===t?(N=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return N=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],u=e.parentNode,a=t.parentNode,f=u;if(u===a)return o(e,t);if(!u)return-1;if(!a)return 1;while(f)i.unshift(f),f=f.parentNode;f=a;while(f)s.unshift(f),f=f.parentNode;n=i.length,r=s.length;for(var l=0;l<n&&l<r;l++)if(i[l]!==s[l])return o(i[l],s[l]);return l===n?o(e,s[l],-1):o(i[l],t,1)},[0,0].sort(T),k=!N,n.uniqueSort=function(e){var t,n=[],r=1,i=0;N=k,e.sort(T);if(N){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},n.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},x=n.compile=function(e,t){var n,r=[],i=[],s=z[A][e+" "];if(!s){t||(t=u(e)),n=t.length;while(n--)s=h(t[n]),s[A]?r.push(s):i.push(s);s=z(e,p(i,r))}return s},M.querySelectorAll&&function(){var e,t=v,r=/'|\\/g,i=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,s=[":focus"],o=[":active"],a=_.matchesSelector||_.mozMatchesSelector||_.webkitMatchesSelector||_.oMatchesSelector||_.msMatchesSelector;lt(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||s.push("\\["+W+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||s.push(":checked")}),lt(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&s.push("[*^$]="+W+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||s.push(":enabled",":disabled")}),s=new RegExp(s.join("|")),v=function(e,n,i,o,a){if(!o&&!a&&!s.test(e)){var f,l,c=!0,h=A,p=n,d=n.nodeType===9&&e;if(n.nodeType===1&&n.nodeName.toLowerCase()!=="object"){f=u(e),(c=n.getAttribute("id"))?h=c.replace(r,"\\$&"):n.setAttribute("id",h),h="[id='"+h+"'] ",l=f.length;while(l--)f[l]=h+f[l].join("");p=it.test(e)&&n.parentNode||n,d=f.join(",")}if(d)try{return B.apply(i,j.call(p.querySelectorAll(d),0)),i}catch(v){}finally{c||n.removeAttribute("id")}}return t(e,n,i,o,a)},a&&(lt(function(t){e=a.call(t,"div");try{a.call(t,"[test!='']:sizzle"),o.push("!=",K)}catch(n){}}),o=new RegExp(o.join("|")),n.matchesSelector=function(t,r){r=r.replace(i,"='$1']");if(!E(t)&&!o.test(r)&&!s.test(r))try{var u=a.call(t,r);if(u||e||t.document&&t.document.nodeType!==11)return u}catch(f){}return n(r,null,null,[t]).length>0})}(),b.pseudos.nth=b.pseudos.eq,b.filters=m.prototype=b.pseudos,b.setFilters=new m,n.attr=Y.attr,Y.find=n,Y.expr=n.selectors,Y.expr[":"]=Y.expr.pseudos,Y.unique=n.uniqueSort,Y.text=n.getText,Y.isXMLDoc=n.isXML,Y.contains=n.contains}(e);var Pt=/Until$/,Ht=/^(?:parents|prev(?:Until|All))/,Bt=/^.[^:#\[\.,]*$/,jt=Y.expr.match.needsContext,Ft={children:!0,contents:!0,next:!0,prev:!0};Y.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return Y(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(Y.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,Y.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=Y(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(Y.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(f(this,e,!1),"not",e)},filter:function(e){return this.pushStack(f(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?jt.test(e)?Y(e,this.context).index(this[0])>=0:Y.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=jt.test(e)||typeof e!="string"?Y(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:Y.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?Y.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?Y.inArray(this[0],Y(e)):Y.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?Y(e,t):Y.makeArray(e&&e.nodeType?[e]:e),r=Y.merge(this.get(),n);return this.pushStack(u(n[0])||u(r[0])?r:Y.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),Y.fn.andSelf=Y.fn.addBack,Y.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return Y.dir(e,"parentNode")},parentsUntil:function(e,t,n){return Y.dir(e,"parentNode",n)},next:function(e){return a(e,"nextSibling")},prev:function(e){return a(e,"previousSibling")},nextAll:function(e){return Y.dir(e,"nextSibling")},prevAll:function(e){return Y.dir(e,"previousSibling")},nextUntil:function(e,t,n){return Y.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return Y.dir(e,"previousSibling",n)},siblings:function(e){return Y.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return Y.sibling(e.firstChild)},contents:function(e){return Y.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:Y.merge([],e.childNodes)}},function(e,t){Y.fn[e]=function(n,r){var i=Y.map(this,t,n);return Pt.test(e)||(r=n),r&&typeof r=="string"&&(i=Y.filter(r,i)),i=this.length>1&&!Ft[e]?Y.unique(i):i,this.length>1&&Ht.test(e)&&(i=i.reverse()),this.pushStack(i,e,$.call(arguments).join(","))}}),Y.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?Y.find.matchesSelector(t[0],e)?[t[0]]:[]:Y.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!Y(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var It="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",qt=/ jQuery\d+="(?:null|\d+)"/g,Rt=/^\s+/,Ut=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,zt=/<([\w:]+)/,Wt=/<tbody/i,Xt=/<|&#?\w+;/,Vt=/<(?:script|style|link)/i,$t=/<(?:script|object|embed|option|style)/i,Jt=new RegExp("<(?:"+It+")[\\s/>]","i"),Kt=/^(?:checkbox|radio)$/,Qt=/checked\s*(?:[^=]|=\s*.checked.)/i,Gt=/\/(java|ecma)script/i,Yt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Zt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},en=l(R),tn=en.appendChild(R.createElement("div"));Zt.optgroup=Zt.option,Zt.tbody=Zt.tfoot=Zt.colgroup=Zt.caption=Zt.thead,Zt.th=Zt.td,Y.support.htmlSerialize||(Zt._default=[1,"X<div>","</div>"]),Y.fn.extend({text:function(e){return Y.access(this,function(e){return e===t?Y.text(this):this.empty().append((this[0]&&this[0].ownerDocument||R).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(Y.isFunction(e))return this.each(function(t){Y(this).wrapAll(e.call(this,t))});if(this[0]){var t=Y(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return Y.isFunction(e)?this.each(function(t){Y(this).wrapInner(e.call(this,t))}):this.each(function(){var t=Y(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=Y.isFunction(e);return this.each(function(n){Y(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){Y.nodeName(this,"body")||Y(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!u(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=Y.clean(arguments);return this.pushStack(Y.merge(e,this),"before",this.selector)}},after:function(){if(!u(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=Y.clean(arguments);return this.pushStack(Y.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||Y.filter(e,[n]).length)!t&&n.nodeType===1&&(Y.cleanData(n.getElementsByTagName("*")),Y.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&Y.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return Y.clone(this,e,t)})},html:function(e){return Y.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(qt,""):t;if(typeof e=="string"&&!Vt.test(e)&&(Y.support.htmlSerialize||!Jt.test(e))&&(Y.support.leadingWhitespace||!Rt.test(e))&&!Zt[(zt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Ut,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(Y.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return u(this[0])?this.length?this.pushStack(Y(Y.isFunction(e)?e():e),"replaceWith",e):this:Y.isFunction(e)?this.each(function(t){var n=Y(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=Y(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;Y(this).remove(),t?Y(t).before(e):Y(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],h=this.length;if(!Y.support.checkClone&&h>1&&typeof f=="string"&&Qt.test(f))return this.each(function(){Y(this).domManip(e,n,r)});if(Y.isFunction(f))return this.each(function(i){var s=Y(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=Y.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&Y.nodeName(s,"tr");for(u=i.cacheable||h-1;a<h;a++)r.call(n&&Y.nodeName(this[a],"table")?c(this[a],"tbody"):this[a],a===u?o:Y.clone(o,!0,!0))}o=s=null,l.length&&Y.each(l,function(e,t){t.src?Y.ajax?Y.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):Y.error("no ajax"):Y.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Yt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),Y.buildFragment=function(e,n,r){var i,s,o,u=e[0];return n=n||R,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof u=="string"&&u.length<512&&n===R&&u.charAt(0)==="<"&&!$t.test(u)&&(Y.support.checkClone||!Qt.test(u))&&(Y.support.html5Clone||!Jt.test(u))&&(s=!0,i=Y.fragments[u],o=i!==t),i||(i=n.createDocumentFragment(),Y.clean(e,n,i,r),s&&(Y.fragments[u]=o&&i)),{fragment:i,cacheable:s}},Y.fragments={},Y.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Y.fn[e]=function(n){var r,i=0,s=[],o=Y(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),Y(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),Y.extend({clone:function(e,t,n){var r,i,s,o;Y.support.html5Clone||Y.isXMLDoc(e)||!Jt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(tn.innerHTML=e.outerHTML,tn.removeChild(o=tn.firstChild));if((!Y.support.noCloneEvent||!Y.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!Y.isXMLDoc(e)){p(e,o),r=d(e),i=d(o);for(s=0;r[s];++s)i[s]&&p(r[s],i[s])}if(t){h(e,o);if(n){r=d(e),i=d(o);for(s=0;r[s];++s)h(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var i,s,o,u,a,f,c,h,p,d,m,g,y=t===R&&en,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=R;for(i=0;(o=e[i])!=null;i++){typeof o=="number"&&(o+="");if(!o)continue;if(typeof o=="string")if(!Xt.test(o))o=t.createTextNode(o);else{y=y||l(t),c=t.createElement("div"),y.appendChild(c),o=o.replace(Ut,"<$1></$2>"),u=(zt.exec(o)||["",""])[1].toLowerCase(),a=Zt[u]||Zt._default,f=a[0],c.innerHTML=a[1]+o+a[2];while(f--)c=c.lastChild;if(!Y.support.tbody){h=Wt.test(o),p=u==="table"&&!h?c.firstChild&&c.firstChild.childNodes:a[1]==="<table>"&&!h?c.childNodes:[];for(s=p.length-1;s>=0;--s)Y.nodeName(p[s],"tbody")&&!p[s].childNodes.length&&p[s].parentNode.removeChild(p[s])}!Y.support.leadingWhitespace&&Rt.test(o)&&c.insertBefore(t.createTextNode(Rt.exec(o)[0]),c.firstChild),o=c.childNodes,c.parentNode.removeChild(c)}o.nodeType?b.push(o):Y.merge(b,o)}c&&(o=c=y=null);if(!Y.support.appendChecked)for(i=0;(o=b[i])!=null;i++)Y.nodeName(o,"input")?v(o):typeof o.getElementsByTagName!="undefined"&&Y.grep(o.getElementsByTagName("input"),v);if(n){m=function(e){if(!e.type||Gt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(i=0;(o=b[i])!=null;i++)if(!Y.nodeName(o,"script")||!m(o))n.appendChild(o),typeof o.getElementsByTagName!="undefined"&&(g=Y.grep(Y.merge([],o.getElementsByTagName("script")),m),b.splice.apply(b,[i+1,0].concat(g)),i+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=Y.expando,a=Y.cache,f=Y.support.deleteExpando,l=Y.event.special;for(;(i=e[o])!=null;o++)if(t||Y.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?Y.event.remove(i,s):Y.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,Y.deletedIds.push(r))}}}}),function(){var e,t;Y.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=Y.uaMatch(z.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),Y.browser=t,Y.sub=function(){function e(t,n){return new e.fn.init(t,n)}Y.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(n,r){return r&&r instanceof Y&&!(r instanceof e)&&(r=e(r)),Y.fn.init.call(this,n,r,t)},e.fn.init.prototype=e.fn;var t=e(R);return e}}();var nn,rn,sn,on=/alpha\([^)]*\)/i,un=/opacity=([^)]*)/,an=/^(top|right|bottom|left)$/,fn=/^(none|table(?!-c[ea]).+)/,ln=/^margin/,cn=new RegExp("^("+Z+")(.*)$","i"),hn=new RegExp("^("+Z+")(?!px)[a-z%]+$","i"),pn=new RegExp("^([-+])=("+Z+")","i"),dn={BODY:"block"},vn={position:"absolute",visibility:"hidden",display:"block"},mn={letterSpacing:0,fontWeight:400},gn=["Top","Right","Bottom","Left"],yn=["Webkit","O","Moz","ms"],bn=Y.fn.toggle;Y.fn.extend({css:function(e,n){return Y.access(this,function(e,n,r){return r!==t?Y.style(e,n,r):Y.css(e,n)},e,n,arguments.length>1)},show:function(){return y(this,!0)},hide:function(){return y(this)},toggle:function(e,t){var n=typeof e=="boolean";return Y.isFunction(e)&&Y.isFunction(t)?bn.apply(this,arguments):this.each(function(){(n?e:g(this))?Y(this).show():Y(this).hide()})}}),Y.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=nn(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":Y.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=Y.camelCase(n),f=e.style;n=Y.cssProps[a]||(Y.cssProps[a]=m(f,a)),u=Y.cssHooks[n]||Y.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=pn.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(Y.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!Y.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=Y.camelCase(n);return n=Y.cssProps[a]||(Y.cssProps[a]=m(e.style,a)),u=Y.cssHooks[n]||Y.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=nn(e,n)),s==="normal"&&n in mn&&(s=mn[n]),r||i!==t?(o=parseFloat(s),r||Y.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?nn=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!Y.contains(t.ownerDocument,t)&&(r=Y.style(t,n)),hn.test(r)&&ln.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:R.documentElement.currentStyle&&(nn=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),hn.test(i)&&!an.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),Y.each(["height","width"],function(e,t){Y.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&fn.test(nn(e,"display"))?Y.swap(e,vn,function(){return E(e,t,r)}):E(e,t,r)},set:function(e,n,r){return b(e,n,r?w(e,t,r,Y.support.boxSizing&&Y.css(e,"boxSizing")==="border-box"):0)}}}),Y.support.opacity||(Y.cssHooks.opacity={get:function(e,t){return un.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=Y.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&Y.trim(s.replace(on,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=on.test(s)?s.replace(on,i):s+" "+i}}),Y(function(){Y.support.reliableMarginRight||(Y.cssHooks.marginRight={get:function(e,t){return Y.swap(e,{display:"inline-block"},function(){if(t)return nn(e,"marginRight")})}}),!Y.support.pixelPosition&&Y.fn.position&&Y.each(["top","left"],function(e,t){Y.cssHooks[t]={get:function(e,n){if(n){var r=nn(e,t);return hn.test(r)?Y(e).position()[t]+"px":r}}}})}),Y.expr&&Y.expr.filters&&(Y.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!Y.support.reliableHiddenOffsets&&(e.style&&e.style.display||nn(e,"display"))==="none"},Y.expr.filters.visible=function(e){return!Y.expr.filters.hidden(e)}),Y.each({margin:"",padding:"",border:"Width"},function(e,t){Y.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+gn[r]+t]=i[r]||i[r-2]||i[0];return s}},ln.test(e)||(Y.cssHooks[e+t].set=b)});var wn=/%20/g,En=/\[\]$/,Sn=/\r?\n/g,xn=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Tn=/^(?:select|textarea)/i;Y.fn.extend({serialize:function(){return Y.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?Y.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||Tn.test(this.nodeName)||xn.test(this.type))}).map(function(e,t){var n=Y(this).val();return n==null?null:Y.isArray(n)?Y.map(n,function(e,n){return{name:t.name,value:e.replace(Sn,"\r\n")}}):{name:t.name,value:n.replace(Sn,"\r\n")}}).get()}}),Y.param=function(e,n){var r,i=[],s=function(e,t){t=Y.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=Y.ajaxSettings&&Y.ajaxSettings.traditional);if(Y.isArray(e)||e.jquery&&!Y.isPlainObject(e))Y.each(e,function(){s(this.name,this.value)});else for(r in e)x(r,e[r],n,s);return i.join("&").replace(wn,"+")};var Nn,Cn,kn=/#.*$/,Ln=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,An=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,On=/^(?:GET|HEAD)$/,Mn=/^\/\//,_n=/\?/,Dn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Pn=/([?&])_=[^&]*/,Hn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Bn=Y.fn.load,jn={},Fn={},In=["*/"]+["*"];try{Cn=U.href}catch(qn){Cn=R.createElement("a"),Cn.href="",Cn=Cn.href}Nn=Hn.exec(Cn.toLowerCase())||[],Y.fn.load=function(e,n,r){if(typeof e!="string"&&Bn)return Bn.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),Y.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),Y.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?Y("<div>").append(e.replace(Dn,"")).find(i):e)}),this},Y.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){Y.fn[t]=function(e){return this.on(t,e)}}),Y.each(["get","post"],function(e,n){Y[n]=function(e,r,i,s){return Y.isFunction(r)&&(s=s||i,i=r,r=t),Y.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),Y.extend({getScript:function(e,n){return Y.get(e,t,n,"script")},getJSON:function(e,t,n){return Y.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?C(e,Y.ajaxSettings):(t=e,e=Y.ajaxSettings),C(e,t),e},ajaxSettings:{url:Cn,isLocal:An.test(Nn[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":In},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":Y.parseJSON,"text xml":Y.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:T(jn),ajaxTransport:T(Fn),ajax:function(e,n){function r(e,n,r,o){var f,c,y,b,E,x=n;if(w===2)return;w=2,a&&clearTimeout(a),u=t,s=o||"",S.readyState=e>0?4:0,r&&(b=k(h,S,r));if(e>=200&&e<300||e===304)h.ifModified&&(E=S.getResponseHeader("Last-Modified"),E&&(Y.lastModified[i]=E),E=S.getResponseHeader("Etag"),E&&(Y.etag[i]=E)),e===304?(x="notmodified",f=!0):(f=L(h,b),x=f.state,c=f.data,y=f.error,f=!y);else{y=x;if(!x||e)x="error",e<0&&(e=0)}S.status=e,S.statusText=(n||x)+"",f?v.resolveWith(p,[c,x,S]):v.rejectWith(p,[S,x,y]),S.statusCode(g),g=t,l&&d.trigger("ajax"+(f?"Success":"Error"),[S,h,f?c:y]),m.fireWith(p,[S,x]),l&&(d.trigger("ajaxComplete",[S,h]),--Y.active||Y.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var i,s,o,u,a,f,l,c,h=Y.ajaxSetup({},n),p=h.context||h,d=p!==h&&(p.nodeType||p instanceof Y)?Y(p):Y.event,v=Y.Deferred(),m=Y.Callbacks("once memory"),g=h.statusCode||{},y={},b={},w=0,E="canceled",S={readyState:0,setRequestHeader:function(e,t){if(!w){var n=e.toLowerCase();e=b[n]=b[n]||e,y[e]=t}return this},getAllResponseHeaders:function(){return w===2?s:null},getResponseHeader:function(e){var n;if(w===2){if(!o){o={};while(n=Ln.exec(s))o[n[1].toLowerCase()]=n[2]}n=o[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return w||(h.mimeType=e),this},abort:function(e){return e=e||E,u&&u.abort(e),r(0,e),this}};v.promise(S),S.success=S.done,S.error=S.fail,S.complete=m.add,S.statusCode=function(e){if(e){var t;if(w<2)for(t in e)g[t]=[g[t],e[t]];else t=e[S.status],S.always(t)}return this},h.url=((e||h.url)+"").replace(kn,"").replace(Mn,Nn[1]+"//"),h.dataTypes=Y.trim(h.dataType||"*").toLowerCase().split(tt),h.crossDomain==null&&(f=Hn.exec(h.url.toLowerCase()),h.crossDomain=!(!f||f[1]===Nn[1]&&f[2]===Nn[2]&&(f[3]||(f[1]==="http:"?80:443))==(Nn[3]||(Nn[1]==="http:"?80:443)))),h.data&&h.processData&&typeof h.data!="string"&&(h.data=Y.param(h.data,h.traditional)),N(jn,h,n,S);if(w===2)return S;l=h.global,h.type=h.type.toUpperCase(),h.hasContent=!On.test(h.type),l&&Y.active++===0&&Y.event.trigger("ajaxStart");if(!h.hasContent){h.data&&(h.url+=(_n.test(h.url)?"&":"?")+h.data,delete h.data),i=h.url;if(h.cache===!1){var x=Y.now(),T=h.url.replace(Pn,"$1_="+x);h.url=T+(T===h.url?(_n.test(h.url)?"&":"?")+"_="+x:"")}}(h.data&&h.hasContent&&h.contentType!==!1||n.contentType)&&S.setRequestHeader("Content-Type",h.contentType),h.ifModified&&(i=i||h.url,Y.lastModified[i]&&S.setRequestHeader("If-Modified-Since",Y.lastModified[i]),Y.etag[i]&&S.setRequestHeader("If-None-Match",Y.etag[i])),S.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+(h.dataTypes[0]!=="*"?", "+In+"; q=0.01":""):h.accepts["*"]);for(c in h.headers)S.setRequestHeader(c,h.headers[c]);if(!h.beforeSend||h.beforeSend.call(p,S,h)!==!1&&w!==2){E="abort";for(c in{success:1,error:1,complete:1})S[c](h[c]);u=N(Fn,h,n,S);if(!u)r(-1,"No Transport");else{S.readyState=1,l&&d.trigger("ajaxSend",[S,h]),h.async&&h.timeout>0&&(a=setTimeout(function(){S.abort("timeout")},h.timeout));try{w=1,u.send(y,r)}catch(C){if(!(w<2))throw C;r(-1,C)}}return S}return S.abort()},active:0,lastModified:{},etag:{}});var Rn=[],Un=/\?/,zn=/(=)\?(?=&|$)|\?\?/,Wn=Y.now();Y.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Rn.pop()||Y.expando+"_"+Wn++;return this[e]=!0,e}}),Y.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&zn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&zn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=Y.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(zn,"$1"+s):h?n.data=a.replace(zn,"$1"+s):l&&(n.url+=(Un.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||Y.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Rn.push(s)),u&&Y.isFunction(o)&&o(u[0]),u=o=t}),"script"}),Y.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return Y.globalEval(e),e}}}),Y.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),Y.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=R.head||R.getElementsByTagName("head")[0]||R.documentElement;return{send:function(i,s){n=R.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||s(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Xn,Vn=e.ActiveXObject?function(){for(var e in Xn)Xn[e](0,1)}:!1,$n=0;Y.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&A()||O()}:A,function(e){Y.extend(Y.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(Y.ajaxSettings.xhr()),Y.support.ajax&&Y.ajaxTransport(function(n){if(!n.crossDomain||Y.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=Y.noop,Vn&&delete Xn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++$n,Vn&&(Xn||(Xn={},Y(e).unload(Vn)),Xn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var Jn,Kn,Qn=/^(?:toggle|show|hide)$/,Gn=new RegExp("^(?:([-+])=|)("+Z+")([a-z%]*)$","i"),Yn=/queueHooks$/,Zn=[H],er={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=Gn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(Y.cssNumber[e]?"":"px");if(r!=="px"&&u){u=Y.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,Y.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};Y.Animation=Y.extend(D,{tweener:function(e,t){Y.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],er[n]=er[n]||[],er[n].unshift(t)},prefilter:function(e,t){t?Zn.unshift(e):Zn.push(e)}}),Y.Tween=B,B.prototype={constructor:B,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(Y.cssNumber[n]?"":"px")},cur:function(){var e=B.propHooks[this.prop];return e&&e.get?e.get(this):B.propHooks._default.get(this)},run:function(e){var t,n=B.propHooks[this.prop];return this.options.duration?this.pos=t=Y.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):B.propHooks._default.set(this),this}},B.prototype.init.prototype=B.prototype,B.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=Y.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){Y.fx.step[e.prop]?Y.fx.step[e.prop](e):e.elem.style&&(e.elem.style[Y.cssProps[e.prop]]!=null||Y.cssHooks[e.prop])?Y.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},B.propHooks.scrollTop=B.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Y.each(["toggle","show","hide"],function(e,t){var n=Y.fn[t];Y.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&Y.isFunction(r)&&Y.isFunction(i)?n.apply(this,arguments):this.animate(j(t,!0),r,i,s)}}),Y.fn.extend({fadeTo:function(e,t,n,r){return this.filter(g).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=Y.isEmptyObject(e),s=Y.speed(t,n,r),o=function(){var t=D(this,Y.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=Y.timers,o=Y._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Yn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&Y.dequeue(this,e)})}}),Y.each({slideDown:j("show"),slideUp:j("hide"),slideToggle:j("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Y.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),Y.speed=function(e,t,n){var r=e&&typeof e=="object"?Y.extend({},e):{complete:n||!n&&t||Y.isFunction(e)&&e,duration:e,easing:n&&t||t&&!Y.isFunction(t)&&t};r.duration=Y.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in Y.fx.speeds?Y.fx.speeds[r.duration]:Y.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){Y.isFunction(r.old)&&r.old.call(this),r.queue&&Y.dequeue(this,r.queue)},r},Y.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},Y.timers=[],Y.fx=B.prototype.init,Y.fx.tick=function(){var e,n=Y.timers,r=0;Jn=Y.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||Y.fx.stop(),Jn=t},Y.fx.timer=function(e){e()&&Y.timers.push(e)&&!Kn&&(Kn=setInterval(Y.fx.tick,Y.fx.interval))},Y.fx.interval=13,Y.fx.stop=function(){clearInterval(Kn),Kn=null},Y.fx.speeds={slow:600,fast:200,_default:400},Y.fx.step={},Y.expr&&Y.expr.filters&&(Y.expr.filters.animated=function(e){return Y.grep(Y.timers,function(t){return e===t.elem}).length});var tr=/^(?:body|html)$/i;Y.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){Y.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?Y.offset.bodyOffset(l):(n=c.documentElement,Y.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=F(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},Y.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return Y.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(Y.css(e,"marginTop"))||0,n+=parseFloat(Y.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=Y.css(e,"position");r==="static"&&(e.style.position="relative");var i=Y(e),s=i.offset(),o=Y.css(e,"top"),u=Y.css(e,"left"),a=(r==="absolute"||r==="fixed")&&Y.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),Y.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},Y.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=tr.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(Y.css(e,"marginTop"))||0,n.left-=parseFloat(Y.css(e,"marginLeft"))||0,r.top+=parseFloat(Y.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(Y.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||R.body;while(e&&!tr.test(e.nodeName)&&Y.css(e,"position")==="static")e=e.offsetParent;return e||R.body})}}),Y.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);Y.fn[e]=function(i){return Y.access(this,function(e,i,s){var o=F(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?Y(o).scrollLeft():s,r?s:Y(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),Y.each({Height:"height",Width:"width"},function(e,n){Y.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){Y.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return Y.access(this,function(n,r,i){var s;return Y.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?Y.css(n,r,i,u):Y.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=Y,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return Y})})(window);;
/*
 * JQuery URL Parser plugin
 * Developed and maintanined by Mark Perkins, mark@allmarkedup.com
 * Source repository: https://github.com/allmarkedup/jQuery-URL-Parser
 * Licensed under an MIT-style license. See https://github.com/allmarkedup/jQuery-URL-Parser/blob/master/LICENSE for details.
 */(function(a,b){function i(a,b){var c=decodeURI(a),e=f[b||!1?"strict":"loose"].exec(c),i={attr:{},param:{},seg:{}},j=14;while(j--)i.attr[d[j]]=e[j]||"";return i.param.query={},i.param.fragment={},i.attr.query.replace(g,function(a,b,c){b&&(i.param.query[b]=c)}),i.attr.fragment.replace(h,function(a,b,c){b&&(i.param.fragment[b]=c)}),i.seg.path=i.attr.path.replace(/^\/+|\/+$/g,"").split("/"),i.seg.fragment=i.attr.fragment.replace(/^\/+|\/+$/g,"").split("/"),i.attr.base=i.attr.host?i.attr.protocol+"://"+i.attr.host+(i.attr.port?":"+i.attr.port:""):"",i}function j(a){var d=a.tagName;return d!==b?c[d.toLowerCase()]:d}var c={a:"href",img:"src",form:"action",base:"href",script:"src",iframe:"src",link:"href"},d=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","fragment"],e={anchor:"fragment"},f={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},g=/(?:^|&|;)([^&=;]*)=?([^&;]*)/g,h=/(?:^|&|;)([^&=;]*)=?([^&;]*)/g;a.fn.url=function(b){var c="";return this.length&&(c=a(this).attr(j(this[0]))||""),a.url(c,b)},a.url=function(a,c){return arguments.length===1&&a===!0&&(c=!0,a=b),c=c||!1,a=a||window.location.toString(),{data:i(a,c),attr:function(a){return a=e[a]||a,a!==b?this.data.attr[a]:this.data.attr},param:function(a){return a!==b?this.data.param.query[a]:this.data.param.query},fparam:function(a){return a!==b?this.data.param.fragment[a]:this.data.param.fragment},segment:function(a){return a===b?this.data.seg.path:(a=a<0?this.data.seg.path.length+a:a-1,this.data.seg.path[a])},fsegment:function(a){return a===b?this.data.seg.fragment:(a=a<0?this.data.seg.fragment.length+a:a-1,this.data.seg.fragment[a])}}}})(jQuery);;
/*
 * jQuery MD5 Plugin 1.2.1
 * https://github.com/blueimp/jQuery-MD5
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://creativecommons.org/licenses/MIT/
 * 
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*jslint bitwise: true */
/*global unescape, jQuery */

(function ($) {
    'use strict';

    /*
    * Add integers, wrapping at 2^32. This uses 16-bit operations internally
    * to work around bugs in some JS interpreters.
    */
    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF),
            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

    /*
    * Bitwise rotate a 32-bit number to the left.
    */
    function bit_rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }

    /*
    * These functions implement the four basic operations the algorithm uses.
    */
    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }
    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }
    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }
    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    /*
    * Calculate the MD5 of an array of little-endian words, and a bit length.
    */
    function binl_md5(x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;

        var i, olda, oldb, oldc, oldd,
            a =  1732584193,
            b = -271733879,
            c = -1732584194,
            d =  271733878;

        for (i = 0; i < x.length; i += 16) {
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;

            a = md5_ff(a, b, c, d, x[i],       7, -680876936);
            d = md5_ff(d, a, b, c, x[i +  1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i +  2], 17,  606105819);
            b = md5_ff(b, c, d, a, x[i +  3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i +  4],  7, -176418897);
            d = md5_ff(d, a, b, c, x[i +  5], 12,  1200080426);
            c = md5_ff(c, d, a, b, x[i +  6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i +  7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i +  8],  7,  1770035416);
            d = md5_ff(d, a, b, c, x[i +  9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12],  7,  1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22,  1236535329);

            a = md5_gg(a, b, c, d, x[i +  1],  5, -165796510);
            d = md5_gg(d, a, b, c, x[i +  6],  9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14,  643717713);
            b = md5_gg(b, c, d, a, x[i],      20, -373897302);
            a = md5_gg(a, b, c, d, x[i +  5],  5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10],  9,  38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i +  4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i +  9],  5,  568446438);
            d = md5_gg(d, a, b, c, x[i + 14],  9, -1019803690);
            c = md5_gg(c, d, a, b, x[i +  3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i +  8], 20,  1163531501);
            a = md5_gg(a, b, c, d, x[i + 13],  5, -1444681467);
            d = md5_gg(d, a, b, c, x[i +  2],  9, -51403784);
            c = md5_gg(c, d, a, b, x[i +  7], 14,  1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

            a = md5_hh(a, b, c, d, x[i +  5],  4, -378558);
            d = md5_hh(d, a, b, c, x[i +  8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16,  1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i +  1],  4, -1530992060);
            d = md5_hh(d, a, b, c, x[i +  4], 11,  1272893353);
            c = md5_hh(c, d, a, b, x[i +  7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13],  4,  681279174);
            d = md5_hh(d, a, b, c, x[i],      11, -358537222);
            c = md5_hh(c, d, a, b, x[i +  3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i +  6], 23,  76029189);
            a = md5_hh(a, b, c, d, x[i +  9],  4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16,  530742520);
            b = md5_hh(b, c, d, a, x[i +  2], 23, -995338651);

            a = md5_ii(a, b, c, d, x[i],       6, -198630844);
            d = md5_ii(d, a, b, c, x[i +  7], 10,  1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i +  5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12],  6,  1700485571);
            d = md5_ii(d, a, b, c, x[i +  3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i +  1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i +  8],  6,  1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i +  6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21,  1309151649);
            a = md5_ii(a, b, c, d, x[i +  4],  6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i +  2], 15,  718787259);
            b = md5_ii(b, c, d, a, x[i +  9], 21, -343485551);

            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return [a, b, c, d];
    }

    /*
    * Convert an array of little-endian words to a string
    */
    function binl2rstr(input) {
        var i,
            output = '';
        for (i = 0; i < input.length * 32; i += 8) {
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
        }
        return output;
    }

    /*
    * Convert a raw string to an array of little-endian words
    * Characters >255 have their high-byte silently ignored.
    */
    function rstr2binl(input) {
        var i,
            output = [];
        output[(input.length >> 2) - 1] = undefined;
        for (i = 0; i < output.length; i += 1) {
            output[i] = 0;
        }
        for (i = 0; i < input.length * 8; i += 8) {
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
        }
        return output;
    }

    /*
    * Calculate the MD5 of a raw string
    */
    function rstr_md5(s) {
        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
    }

    /*
    * Calculate the HMAC-MD5, of a key and some data (raw strings)
    */
    function rstr_hmac_md5(key, data) {
        var i,
            bkey = rstr2binl(key),
            ipad = [],
            opad = [],
            hash;
        ipad[15] = opad[15] = undefined;                        
        if (bkey.length > 16) {
            bkey = binl_md5(bkey, key.length * 8);
        }
        for (i = 0; i < 16; i += 1) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
    }

    /*
    * Convert a raw string to a hex string
    */
    function rstr2hex(input) {
        var hex_tab = '0123456789abcdef',
            output = '',
            x,
            i;
        for (i = 0; i < input.length; i += 1) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt((x >>> 4) & 0x0F) +
                hex_tab.charAt(x & 0x0F);
        }
        return output;
    }

    /*
    * Encode a string as utf-8
    */
    function str2rstr_utf8(input) {
        return unescape(encodeURIComponent(input));
    }

    /*
    * Take string arguments and return either raw or hex encoded strings
    */
    function raw_md5(s) {
        return rstr_md5(str2rstr_utf8(s));
    }
    function hex_md5(s) {
        return rstr2hex(raw_md5(s));
    }
    function raw_hmac_md5(k, d) {
        return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
    }
    function hex_hmac_md5(k, d) {
        return rstr2hex(raw_hmac_md5(k, d));
    }
    $.md5 = function (string, key, raw) {
        if (!key) {
            if (!raw) {
                return hex_md5(string);
            } else {
                return raw_md5(string);
            }
        }
        if (!raw) {
            return hex_hmac_md5(key, string);
        } else {
            return raw_hmac_md5(key, string);
        }
    };
}(typeof jQuery === 'function' ? jQuery : this));;
!function(){var a,b,c,d;!function(){var e={},f={};a=function(a,b,c){e[a]={deps:b,callback:c}},d=c=b=function(a){function c(b){if("."!==b.charAt(0))return b;for(var c=b.split("/"),d=a.split("/").slice(0,-1),e=0,f=c.length;f>e;e++){var g=c[e];if(".."===g)d.pop();else{if("."===g)continue;d.push(g)}}return d.join("/")}if(d._eak_seen=e,f[a])return f[a];if(f[a]={},!e[a])throw new Error("Could not find module "+a);for(var g,h=e[a],i=h.deps,j=h.callback,k=[],l=0,m=i.length;m>l;l++)"exports"===i[l]?k.push(g={}):k.push(b(c(i[l])));var n=j.apply(this,k);return f[a]=g||n}}(),a("promise/all",["./utils","exports"],function(a,b){"use strict";function c(a){var b=this;if(!d(a))throw new TypeError("You must pass an array to all.");return new b(function(b,c){function d(a){return function(b){f(a,b)}}function f(a,c){h[a]=c,0===--i&&b(h)}var g,h=[],i=a.length;0===i&&b([]);for(var j=0;j<a.length;j++)g=a[j],g&&e(g.then)?g.then(d(j),c):f(j,g)})}var d=a.isArray,e=a.isFunction;b.all=c}),a("promise/asap",["exports"],function(a){"use strict";function b(){return function(){process.nextTick(e)}}function c(){var a=0,b=new i(e),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2}}function d(){return function(){j.setTimeout(e,1)}}function e(){for(var a=0;a<k.length;a++){var b=k[a],c=b[0],d=b[1];c(d)}k=[]}function f(a,b){var c=k.push([a,b]);1===c&&g()}var g,h="undefined"!=typeof window?window:{},i=h.MutationObserver||h.WebKitMutationObserver,j="undefined"!=typeof global?global:void 0===this?window:this,k=[];g="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?b():i?c():d(),a.asap=f}),a("promise/config",["exports"],function(a){"use strict";function b(a,b){return 2!==arguments.length?c[a]:(c[a]=b,void 0)}var c={instrument:!1};a.config=c,a.configure=b}),a("promise/polyfill",["./promise","./utils","exports"],function(a,b,c){"use strict";function d(){var a;a="undefined"!=typeof global?global:"undefined"!=typeof window&&window.document?window:self;var b="Promise"in a&&"resolve"in a.Promise&&"reject"in a.Promise&&"all"in a.Promise&&"race"in a.Promise&&function(){var b;return new a.Promise(function(a){b=a}),f(b)}();a.Promise=e;}var e=a.Promise,f=b.isFunction;c.polyfill=d}),a("promise/promise",["./config","./utils","./all","./race","./resolve","./reject","./asap","exports"],function(a,b,c,d,e,f,g,h){"use strict";function i(a){if(!v(a))throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(!(this instanceof i))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._subscribers=[],j(a,this)}function j(a,b){function c(a){o(b,a)}function d(a){q(b,a)}try{a(c,d)}catch(e){d(e)}}function k(a,b,c,d){var e,f,g,h,i=v(c);if(i)try{e=c(d),g=!0}catch(j){h=!0,f=j}else e=d,g=!0;n(b,e)||(i&&g?o(b,e):h?q(b,f):a===D?o(b,e):a===E&&q(b,e))}function l(a,b,c,d){var e=a._subscribers,f=e.length;e[f]=b,e[f+D]=c,e[f+E]=d}function m(a,b){for(var c,d,e=a._subscribers,f=a._detail,g=0;g<e.length;g+=3)c=e[g],d=e[g+b],k(b,c,d,f);a._subscribers=null}function n(a,b){var c,d=null;try{if(a===b)throw new TypeError("A promises callback cannot return that same promise.");if(u(b)&&(d=b.then,v(d)))return d.call(b,function(d){return c?!0:(c=!0,b!==d?o(a,d):p(a,d),void 0)},function(b){return c?!0:(c=!0,q(a,b),void 0)}),!0}catch(e){return c?!0:(q(a,e),!0)}return!1}function o(a,b){a===b?p(a,b):n(a,b)||p(a,b)}function p(a,b){a._state===B&&(a._state=C,a._detail=b,t.async(r,a))}function q(a,b){a._state===B&&(a._state=C,a._detail=b,t.async(s,a))}function r(a){m(a,a._state=D)}function s(a){m(a,a._state=E)}var t=a.config,u=(a.configure,b.objectOrFunction),v=b.isFunction,w=(b.now,c.all),x=d.race,y=e.resolve,z=f.reject,A=g.asap;t.async=A;var B=void 0,C=0,D=1,E=2;i.prototype={constructor:i,_state:void 0,_detail:void 0,_subscribers:void 0,then:function(a,b){var c=this,d=new this.constructor(function(){});if(this._state){var e=arguments;t.async(function(){k(c._state,d,e[c._state-1],c._detail)})}else l(this,d,a,b);return d},"catch":function(a){return this.then(null,a)}},i.all=w,i.race=x,i.resolve=y,i.reject=z,h.Promise=i}),a("promise/race",["./utils","exports"],function(a,b){"use strict";function c(a){var b=this;if(!d(a))throw new TypeError("You must pass an array to race.");return new b(function(b,c){for(var d,e=0;e<a.length;e++)d=a[e],d&&"function"==typeof d.then?d.then(b,c):b(d)})}var d=a.isArray;b.race=c}),a("promise/reject",["exports"],function(a){"use strict";function b(a){var b=this;return new b(function(b,c){c(a)})}a.reject=b}),a("promise/resolve",["exports"],function(a){"use strict";function b(a){if(a&&"object"==typeof a&&a.constructor===this)return a;var b=this;return new b(function(b){b(a)})}a.resolve=b}),a("promise/utils",["exports"],function(a){"use strict";function b(a){return c(a)||"object"==typeof a&&null!==a}function c(a){return"function"==typeof a}function d(a){return"[object Array]"===Object.prototype.toString.call(a)}var e=Date.now||function(){return(new Date).getTime()};a.objectOrFunction=b,a.isFunction=c,a.isArray=d,a.now=e}),b("promise/polyfill").polyfill()}();;
/**
 * es6-Promise 工作流相关
 * 依赖：es6-promises.js
 * @param {Object} job ()
 */

function Workflow(){
	this.promise = null;
	this.add = function(job,errorHandler){
		if(!this.promise){
			this.promise = runAndGetPromise(job);
		}else{
			var _flow = this,
				handlers = [function(message){
					return runAndGetPromise.apply(this,[job,message]);
				}];
			if($.isFunction(errorHandler)){
				handlers[handlers.length] = errorHandler;
			}
			this.promise = this.promise.then.apply(this.promise,handlers);
		}
		return this;
	}
};

function runAndGetPromise(job,message){
	if(!$.isFunction(job)) throw new Error("job must be a function!");
	return new Promise(function(resolve,reject){
				job(resolve, reject, message);
			});
};
/*! Javascript plotting library for jQuery, v. 0.7.
 *
 * Released under the MIT license by IOLA, December 2007.
 *
 */

// first an inline dependency, jquery.colorhelpers.js, we inline it here
// for convenience

/* Plugin for jQuery for working with colors.
 * 
 * Version 1.1.
 * 
 * Inspiration from jQuery color animation plugin by John Resig.
 *
 * Released under the MIT license by Ole Laursen, October 2009.
 *
 * Examples:
 *
 *   $.color.parse("#fff").scale('rgb', 0.25).add('a', -0.5).toString()
 *   var c = $.color.extract($("#mydiv"), 'background-color');
 *   console.log(c.r, c.g, c.b, c.a);
 *   $.color.make(100, 50, 25, 0.4).toString() // returns "rgba(100,50,25,0.4)"
 *
 * Note that .scale() and .add() return the same modified object
 * instead of making a new one.
 *
 * V. 1.1: Fix error handling so e.g. parsing an empty string does
 * produce a color rather than just crashing.
 */ 
(function(B){B.color={};B.color.make=function(F,E,C,D){var G={};G.r=F||0;G.g=E||0;G.b=C||0;G.a=D!=null?D:1;G.add=function(J,I){for(var H=0;H<J.length;++H){G[J.charAt(H)]+=I}return G.normalize()};G.scale=function(J,I){for(var H=0;H<J.length;++H){G[J.charAt(H)]*=I}return G.normalize()};G.toString=function(){if(G.a>=1){return"rgb("+[G.r,G.g,G.b].join(",")+")"}else{return"rgba("+[G.r,G.g,G.b,G.a].join(",")+")"}};G.normalize=function(){function H(J,K,I){return K<J?J:(K>I?I:K)}G.r=H(0,parseInt(G.r),255);G.g=H(0,parseInt(G.g),255);G.b=H(0,parseInt(G.b),255);G.a=H(0,G.a,1);return G};G.clone=function(){return B.color.make(G.r,G.b,G.g,G.a)};return G.normalize()};B.color.extract=function(D,C){var E;do{E=D.css(C).toLowerCase();if(E!=""&&E!="transparent"){break}D=D.parent()}while(!B.nodeName(D.get(0),"body"));if(E=="rgba(0, 0, 0, 0)"){E="transparent"}return B.color.parse(E)};B.color.parse=function(F){var E,C=B.color.make;if(E=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(F)){return C(parseInt(E[1],10),parseInt(E[2],10),parseInt(E[3],10))}if(E=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(F)){return C(parseInt(E[1],10),parseInt(E[2],10),parseInt(E[3],10),parseFloat(E[4]))}if(E=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(F)){return C(parseFloat(E[1])*2.55,parseFloat(E[2])*2.55,parseFloat(E[3])*2.55)}if(E=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(F)){return C(parseFloat(E[1])*2.55,parseFloat(E[2])*2.55,parseFloat(E[3])*2.55,parseFloat(E[4]))}if(E=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(F)){return C(parseInt(E[1],16),parseInt(E[2],16),parseInt(E[3],16))}if(E=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(F)){return C(parseInt(E[1]+E[1],16),parseInt(E[2]+E[2],16),parseInt(E[3]+E[3],16))}var D=B.trim(F).toLowerCase();if(D=="transparent"){return C(255,255,255,0)}else{E=A[D]||[0,0,0];return C(E[0],E[1],E[2])}};var A={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);

// the actual Flot code
(function($) {
    function Plot(placeholder, data_, options_, plugins) {
        // data is on the form:
        //   [ series1, series2 ... ]
        // where series is either just the data as [ [x1, y1], [x2, y2], ... ]
        // or { data: [ [x1, y1], [x2, y2], ... ], label: "some label", ... }
        
        var series = [],
            options = {
				//Sam -- 自定义插件默认类名等,防止被覆盖
				className : {
					overlay : 'gwd_flot_overlay',
					subOverlay : 'gwd_flot_subOverlay',
					base : 'gwd_flot_base'
				},
                // the color theme used for graphs
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: true,
                    noColumns: 1, // number of colums in legend table
                    labelFormatter: null, // fn: string -> string
                    labelBoxBorderColor: "#ccc", // border color for the little label boxes
                    container: null, // container (as jQuery object) to put legend in, null means default on top of graph
                    position: "ne", // position of default legend container within plot
                    margin: 5, // distance from grid edge to default legend container within plot
                    backgroundColor: null, // null means auto-detect
                    backgroundOpacity: 0.85 // set to 0 to avoid background
                },
                xaxis: {
                    show: null, // null = auto-detect, true = always, false = never
                    position: "bottom", // or "top"
                    mode: null, // null or "time"
                    color: null, // base color, labels, ticks
                    tickColor: null, // possibly different color of ticks, e.g. "rgba(0,0,0,0.15)"
                    transform: null, // null or f: number -> number to transform axis
                    inverseTransform: null, // if transform is set, this should be the inverse function
                    min: null, // min. value to show, null means set automatically
                    max: null, // max. value to show, null means set automatically
                    autoscaleMargin: null, // margin in % to add if auto-setting min/max
                    ticks: null, // either [1, 3] or [[1, "a"], 3] or (fn: axis info -> ticks) or app. number of ticks for auto-ticks
                    tickFormatter: null, // fn: number -> string
                    labelWidth: null, // size of tick labels in pixels
                    labelHeight: null,
                    reserveSpace: null, // whether to reserve space even if axis isn't shown
                    tickLength: null, // size in pixels of ticks, or "full" for whole line
                    alignTicksWithAxis: null, // axis number or null for no sync
                    
                    // mode specific options
                    tickDecimals: null, // no. of decimals, null means auto
                    tickSize: null, // number or [number, "unit"]
                    minTickSize: null, // number or [number, "unit"]
                    monthNames: null, // list of names of months
                    timeformat: null, // format string to use
                    twelveHourClock: false // 12 or 24 time in time mode
                },
                yaxis: {
                    autoscaleMargin: 0.02,
                    position: "left" // or "right"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: true,
                        radius: 2,
                        lineWidth: 2, // in pixels
                        fill: true,
                        fillColor: null,
                        symbol: "circle" // or callback
                    },
                  //added by Sam
                    eventpoints: {
                        show: false,
                        radius: 2,
                        lineWidth: 2, // in pixels
                        fill: true,
                        fillColor: null,
                        symbol: "circle" // or callback
                    },
                    lines: {
                        // we don't put in show: false so we can see
                        // whether lines were actively disabled 
                        lineWidth: 3, // in pixels
                        fill: false,
                        fillColor: null,
                        steps: false
                    },
                    bars: {
                        show: false,
                    //  img: "images/plothighlight.png", // or null:使用绘图来描绘点
                        lineWidth: 2, // in pixels
                        barWidth: 1, // in units of the x axis
                        fill: true,
                        fillColor: null,
                        align: "left", // or "center" 
                        horizontal: false
                    },
                    shadowSize: 0,
                    subline:false
                },
                grid: {
                    show: true,
                    aboveData: false,
                    color: "#888888", // primary color used for outline and labels
                    backgroundColor: null, // null for transparent, else color
                    borderColor: null, // set if different from the grid color
                    tickColor: null, // color for the ticks, e.g. "rgba(0,0,0,0.15)"
                    labelMargin: 5, // in pixels
                    axisMargin: 8, // in pixels
                    borderWidth: 1, // in pixels
                    minBorderMargin: null, // in pixels, null means taken from points radius
                    markings: null, // array of ranges or fn: axes -> array of ranges
                    markingsColor: "white",
                    markingsLineWidth: 1,
                    // interactive stuff
                    clickable: false,
                    hoverable: false,
                    autoHighlight: true, // highlight in case mouse is near
                    mouseActiveRadius: 10 // how far the mouse can be away to activate an item
                },
                hooks: {}
              //  haveCoordinate : true,
             //   haveMover : true
            },
        canvas = null,      // the canvas for the plot itself
        overlay = null,     // canvas for interactive stuff on top of plot
        subOverlay = null,  //subOverlay用来画辅助线 --Sam
        eventHolder = null, // jQuery object that events should be bound to
        ctx = null, octx = null, soctx = null,
        xaxes = [], yaxes = [],
        plotOffset = { left: 0, right: 0, top: 0, bottom: 0},
        canvasWidth = 0, canvasHeight = 0,
        plotWidth = 0, plotHeight = 0,
        hooks = {
            processOptions: [],
            processRawData: [],
            processDatapoints: [],
            drawSeries: [],
            draw: [],
            bindEvents: [],
            drawOverlay: [],
            shutdown: []
        },
        plot = this;

        // public functions
        plot.setData = setData;
        plot.setupGrid = setupGrid;
        plot.draw = draw;
       // plot.haveMover = options_.haveMover;
      //  plot.haveCoordinate = options_.haveCoordinate;
        plot.getPlaceholder = function() { return placeholder; };
        plot.getCanvas = function() { return canvas; };
        plot.getPlotOffset = function() { return plotOffset; };
        plot.width = function () { return plotWidth; };
        plot.height = function () { return plotHeight; };
        plot.offset = function () {
            var o = eventHolder.offset();
            o.left += plotOffset.left;
            o.top += plotOffset.top;
            return o;
        };
        plot.getData = function () { return series; };/* 获取series*/
        plot.getAxes = function () {
            var res = {}, i;
            $.each(xaxes.concat(yaxes), function (_, axis) {
                if (axis)
                    res[axis.direction + (axis.n != 1 ? axis.n : "") + "axis"] = axis;
            });
            return res;
        };
        plot.getXAxes = function () { return xaxes; };
        plot.getYAxes = function () { return yaxes; };
        plot.c2p = canvasToAxisCoords;
        plot.p2c = axisToCanvasCoords;
        plot.getOptions = function () { return options; };/* 获取配置*/
        plot.highlight = highlight;
        plot.unhighlight = unhighlight;
        plot.triggerRedrawOverlay = triggerRedrawOverlay;
        plot.pointOffset = function(point) {
            return {
                left: parseInt(xaxes[axisNumber(point, "x") - 1].p2c(+point.x) + plotOffset.left),
                top: parseInt(yaxes[axisNumber(point, "y") - 1].p2c(+point.y) + plotOffset.top)
            };
        };
        plot.shutdown = shutdown;
        plot.resize = function () {
            getCanvasDimensions();
            resizeCanvas(canvas);
            resizeCanvas(overlay);
        };

        // public attributes
        plot.hooks = hooks;
        
        // initialize
        initPlugins(plot);
        parseOptions(options_);
        setupCanvases();
        setData(data_);
        setupGrid();
        setupSubOverlay();
        draw();
        bindEvents();


        function executeHooks(hook, args) {
            args = [plot].concat(args);
            for (var i = 0; i < hook.length; ++i)
                hook[i].apply(this, args);
        }

        function initPlugins() {
            for (var i = 0; i < plugins.length; ++i) {
                var p = plugins[i];
                p.init(plot);
                if (p.options)
                    $.extend(true, options, p.options);
            }
        }
        
        function parseOptions(opts) {
            var i;
            $.extend(true, options, opts);
            
            if (options.xaxis.color == null)
                options.xaxis.color = options.grid.color;
            if (options.yaxis.color == null)
                options.yaxis.color = options.grid.color;
            
            if (options.xaxis.tickColor == null) // backwards-compatibility
                options.xaxis.tickColor = options.grid.tickColor;
            if (options.yaxis.tickColor == null) // backwards-compatibility
                options.yaxis.tickColor = options.grid.tickColor;

            if (options.grid.borderColor == null)
                options.grid.borderColor = options.grid.color;
            if (options.grid.tickColor == null)
                options.grid.tickColor = $.color.parse(options.grid.color).scale('a', 0.22).toString();
            
            // fill in defaults in axes, copy at least always the
            // first as the rest of the code assumes it'll be there
            for (i = 0; i < Math.max(1, options.xaxes.length); ++i)
                options.xaxes[i] = $.extend(true, {}, options.xaxis, options.xaxes[i]);
            for (i = 0; i < Math.max(1, options.yaxes.length); ++i)
                options.yaxes[i] = $.extend(true, {}, options.yaxis, options.yaxes[i]);

            // backwards compatibility, to be removed in future
            if (options.xaxis.noTicks && options.xaxis.ticks == null)
                options.xaxis.ticks = options.xaxis.noTicks;
            if (options.yaxis.noTicks && options.yaxis.ticks == null)
                options.yaxis.ticks = options.yaxis.noTicks;
            if (options.x2axis) {
                options.xaxes[1] = $.extend(true, {}, options.xaxis, options.x2axis);
                options.xaxes[1].position = "top";
            }
            if (options.y2axis) {
                options.yaxes[1] = $.extend(true, {}, options.yaxis, options.y2axis);
                options.yaxes[1].position = "right";
            }
            if (options.grid.coloredAreas)
                options.grid.markings = options.grid.coloredAreas;
            if (options.grid.coloredAreasColor)
                options.grid.markingsColor = options.grid.coloredAreasColor;
            if (options.lines)
                $.extend(true, options.series.lines, options.lines);
            if (options.points)
                $.extend(true, options.series.points, options.points);
            if (options.bars)
                $.extend(true, options.series.bars, options.bars);
            if (options.shadowSize != null)
                options.series.shadowSize = options.shadowSize;
            // save options on axes for future reference
            for (i = 0; i < options.xaxes.length; ++i)
				getOrCreateAxis(xaxes, i + 1).options = options.xaxes[i];
			
            for (i = 0; i < options.yaxes.length; ++i)
                getOrCreateAxis(yaxes, i + 1).options = options.yaxes[i];

            // add hooks from options
            for (var n in hooks)
                if (options.hooks[n] && options.hooks[n].length)
                    hooks[n] = hooks[n].concat(options.hooks[n]);

            executeHooks(hooks.processOptions, [options]);
        }

        function setData(d) {
            series = parseData(d);
            fillInSeriesOptions();
            processData();
        }
        
        function parseData(d) {
            var res = [];
            for (var i = 0; i < d.length; ++i) {
                var s = $.extend(true, {}, options.series);

                if (d[i].data != null) {
                    s.data = d[i].data; // move the data instead of deep-copy
                    delete d[i].data;

                    $.extend(true, s, d[i]);

                    d[i].data = s.data;
                }
                else
                    s.data = d[i];
                res.push(s);
            }

            return res;
        }
        
        function axisNumber(obj, coord) {
            var a = obj[coord + "axis"];
            if (typeof a == "object") // if we got a real axis, extract number
                a = a.n;
            if (typeof a != "number")
                a = 1; // default to first axis
            return a;
        }

        function allAxes() {
            // return flat array without annoying null entries
            return $.grep(xaxes.concat(yaxes), function (a) { return a; });
        }
        
        function canvasToAxisCoords(pos) {
            // return an object with x/y corresponding to all used axes 
            var res = {}, i, axis;
            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used)
                    res["x" + axis.n] = axis.c2p(pos.left);
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used)
                    res["y" + axis.n] = axis.c2p(pos.top);
            }
            
            if (res.x1 !== undefined)
                res.x = res.x1;
            if (res.y1 !== undefined)
                res.y = res.y1;

            return res;
        }
        
        function axisToCanvasCoords(pos) {
            // get canvas coords from the first pair of x/y found in pos
            var res = {}, i, axis, key;

            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used) {
                    key = "x" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "x";

                    if (pos[key] != null) {
                        res.left = axis.p2c(pos[key]);
                        break;
                    }
                }
            }
            
            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used) {
                    key = "y" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "y";

                    if (pos[key] != null) {
                        res.top = axis.p2c(pos[key]);
                        break;
                    }
                }
            }
            
            return res;
        }
        
        function getOrCreateAxis(axes, number) {
            if (!axes[number - 1])
                axes[number - 1] = {
                    n: number, // save the number for future reference
                    direction: axes == xaxes ? "x" : "y",
                    options: $.extend(true, {}, axes == xaxes ? options.xaxis : options.yaxis)
                };
                
            return axes[number - 1];
        }

        function fillInSeriesOptions() {
            var i;
            
            // collect what we already got of colors
            var neededColors = series.length,
                usedColors = [],
                assignedColors = [];
            for (i = 0; i < series.length; ++i) {
                var sc = series[i].color;
                if (sc != null) {
                    --neededColors;
                    if (typeof sc == "number")
                        assignedColors.push(sc);
                    else
                        usedColors.push($.color.parse(series[i].color));
                }
            }
            
            // we might need to generate more colors if higher indices
            // are assigned
            for (i = 0; i < assignedColors.length; ++i) {
                neededColors = Math.max(neededColors, assignedColors[i] + 1);
            }

            // produce colors as needed
            var colors = [], variation = 0;
            i = 0;
            while (colors.length < neededColors) {
                var c;
                if (options.colors.length == i) // check degenerate case
                    c = $.color.make(100, 100, 100);
                else
                    c = $.color.parse(options.colors[i]);

                // vary color if needed
                var sign = variation % 2 == 1 ? -1 : 1;
                c.scale('rgb', 1 + sign * Math.ceil(variation / 2) * 0.2)

                // FIXME: if we're getting to close to something else,
                // we should probably skip this one
                colors.push(c);
                
                ++i;
                if (i >= options.colors.length) {
                    i = 0;
                    ++variation;
                }
            }

            // fill in the options
            var colori = 0, s;
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                
                // assign colors
                if (s.color == null) {
                    s.color = colors[colori].toString();
                    ++colori;
                }
                else if (typeof s.color == "number")
                    s.color = colors[s.color].toString();

                // turn on lines automatically in case nothing is set
                if (s.lines.show == null) {
                    var v, show = true;
                    for (v in s)
                        if (s[v] && s[v].show) {
                            show = false;
                            break;
                        }
                    if (show)
                        s.lines.show = true;
                }

                // setup axes
                s.xaxis = getOrCreateAxis(xaxes, axisNumber(s, "x"));
                s.yaxis = getOrCreateAxis(yaxes, axisNumber(s, "y"));
            }
        }
        
        function processData() {
            var topSentry = Number.POSITIVE_INFINITY,
                bottomSentry = Number.NEGATIVE_INFINITY,
                fakeInfinity = Number.MAX_VALUE,
                i, j, k, m, length,
                s, points, ps, x, y, axis, val, f, p;

            function updateAxis(axis, min, max) {
                if (min < axis.datamin && min != -fakeInfinity)
                    axis.datamin = min;
                if (max > axis.datamax && max != fakeInfinity)
                    axis.datamax = max;
            }

            $.each(allAxes(), function (_, axis) {
                // init axis
                axis.datamin = topSentry;
                axis.datamax = bottomSentry;
                axis.used = false;
            });
            
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                s.datapoints = { points: [] };
                
                executeHooks(hooks.processRawData, [ s, s.data, s.datapoints ]);
            }
            
            // first pass: clean and copy data
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                var data = s.data, format = s.datapoints.format;

                if (!format) {
                    format = [];
                    // find out how to copy
                    format.push({ x: true, number: true, required: true });
                    format.push({ y: true, number: true, required: true });

                    if (s.bars.show || (s.lines.show && s.lines.fill)) {
                        format.push({ y: true, number: true, required: false, defaultValue: 0 });
                        if (s.bars.horizontal) {
                            delete format[format.length - 1].y;
                            format[format.length - 1].x = true;
                        }
                    }
                    
                    s.datapoints.format = format;
                }

                if (s.datapoints.pointsize != null)
                    continue; // already filled in

                s.datapoints.pointsize = format.length;
                
                ps = s.datapoints.pointsize;
                points = s.datapoints.points;

                insertSteps = s.lines.show && s.lines.steps;
                s.xaxis.used = s.yaxis.used = true;
                
                for (j = k = 0; j < data.length; ++j, k += ps) {
                    p = data[j];

                    var nullify = p == null;
                    if (!nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = p[m];
                            f = format[m];

                            if (f) {
                                if (f.number && val != null) {
                                    val = +val; // convert to number
                                    if (isNaN(val))
                                        val = null;
                                    else if (val == Infinity)
                                        val = fakeInfinity;
                                    else if (val == -Infinity)
                                        val = -fakeInfinity;
                                }

                                if (val == null) {
                                    if (f.required)
                                        nullify = true;
                                    
                                    if (f.defaultValue != null)
                                        val = f.defaultValue;
                                }
                            }
                            
                            points[k + m] = val;
                        }
                    }
                    
                    if (nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = points[k + m];
                            if (val != null) {
                                f = format[m];
                                // extract min/max info
                                if (f.x)
                                    updateAxis(s.xaxis, val, val);
                                if (f.y)
                                    updateAxis(s.yaxis, val, val);
                            }
                            points[k + m] = null;
                        }
                    }
                    else {
                        // a little bit of line specific stuff that
                        // perhaps shouldn't be here, but lacking
                        // better means...
                        if (insertSteps && k > 0
                            && points[k - ps] != null
                            && points[k - ps] != points[k]
                            && points[k - ps + 1] != points[k + 1]) {
                            // copy the point to make room for a middle point
                            for (m = 0; m < ps; ++m)
                                points[k + ps + m] = points[k + m];

                            // middle point has same y
                            points[k + 1] = points[k - ps + 1];

                            // we've added a point, better reflect that
                            k += ps;
                        }
                    }
                }
            }

            // give the hooks a chance to run
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                
                executeHooks(hooks.processDatapoints, [ s, s.datapoints]);
            }

            // second pass: find datamax/datamin for auto-scaling
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                points = s.datapoints.points,
                ps = s.datapoints.pointsize;

                var xmin = topSentry, ymin = topSentry,
                    xmax = bottomSentry, ymax = bottomSentry;
                
                for (j = 0; j < points.length; j += ps) {
                    if (points[j] == null)
                        continue;

                    for (m = 0; m < ps; ++m) {
                        val = points[j + m];
                        f = format[m];
                        if (!f || val == fakeInfinity || val == -fakeInfinity)
                            continue;
                        
                        if (f.x) {
                            if (val < xmin)
                                xmin = val;
                            if (val > xmax)
                                xmax = val;
                        }
                        if (f.y) {
                            if (val < ymin)
                                ymin = val;
                            if (val > ymax)
                                ymax = val;
                        }
                    }
                }
                
                if (s.bars.show) {
                    // make sure we got room for the bar on the dancing floor
                    var delta = s.bars.align == "left" ? 0 : -s.bars.barWidth/2;
                    if (s.bars.horizontal) {
                        ymin += delta;
                        ymax += delta + s.bars.barWidth;
                    }
                    else {
                        xmin += delta;
                        xmax += delta + s.bars.barWidth;
                    }
                }
                
                updateAxis(s.xaxis, xmin, xmax);
                updateAxis(s.yaxis, ymin, ymax);
            }

            $.each(allAxes(), function (_, axis) {
                if (axis.datamin == topSentry)
                    axis.datamin = null;
                if (axis.datamax == bottomSentry)
                    axis.datamax = null;
            });
        }

        function makeCanvas(skipPositioning, cls) {
            var c = document.createElement('canvas');
            c.className = cls;
            c.width = canvasWidth;
            c.height = canvasHeight;
            
            if (!skipPositioning)
                $(c).css({ position: 'absolute', left: 0, top: 0 });
            
            $(c).appendTo(placeholder);
                
            if (!c.getContext) // excanvas hack
                c = window.G_vmlCanvasManager.initElement(c);

            // used for resetting in case we get replotted
            c.getContext("2d").save();
            
            return c;
        }

        function getCanvasDimensions() {
            canvasWidth = placeholder.width();
            canvasHeight = placeholder.height();
            
            if (canvasWidth <= 0 || canvasHeight <= 0)
                throw "Invalid dimensions for plot, width = " + canvasWidth + ", height = " + canvasHeight;
        }

        function resizeCanvas(c) {
            // resizing should reset the state (excanvas seems to be
            // buggy though)
            if (c.width != canvasWidth)
                c.width = canvasWidth;

            if (c.height != canvasHeight)
                c.height = canvasHeight;

            // so try to get back to the initial state (even if it's
            // gone now, this should be safe according to the spec)
            var cctx = c.getContext("2d");
            cctx.restore();

            // and save again
            cctx.save();
        }
        
        //初始化subOverlay;by Sam
        function setupSubOverlay(){
            subOverlay = makeCanvas(false,options.className.subOverlay); //subOverlay，用来画辅助线 -- Sam 2013-7-23
            var _h = plotHeight+6;
            $(subOverlay).css({top:0,height:plotHeight,width:canvasWidth,'z-index':99999});
			$(overlay).css({'z-index':100000});
			soctx = subOverlay.getContext("2d");
            soctx.fillStyle="#dbd5d2";
        }
        function setupCanvases() {
            var reused,
                existingCanvas = placeholder.children("canvas."+options.className.base),
                existingOverlay = placeholder.children("canvas."+options.className.overlay);
            if (existingCanvas.length == 0 || existingOverlay.length == 0) {
                placeholder.html(""); // make sure placeholder is clear
                placeholder.css({ padding: 0 }); // padding messes up the positioning
                if (placeholder.css("position") == 'static')
                    placeholder.css("position", "relative"); // for positioning labels and overlay
                getCanvasDimensions();
                canvas = makeCanvas(true, options.className.base);
                overlay = makeCanvas(false, options.className.overlay); // overlay canvas for interactive features
                reused = false;
            }else {
                canvas = existingCanvas.get(0);
                overlay = existingOverlay.get(0);
                reused = true;
            }
            ctx = canvas.getContext("2d");
            octx = overlay.getContext("2d");
            // we include the canvas in the event holder too, because IE 7
            // sometimes has trouble with the stacking order
            eventHolder = $([overlay, canvas]);
            if (reused) {
                // run shutdown in the old plot object
                placeholder.data("plot").shutdown();
                // reset reused canvases
                plot.resize();
                // make sure overlay pixels are cleared (canvas is cleared when we redraw)
                octx.clearRect(0, 0, canvasWidth, canvasHeight);
                // then whack any remaining obvious garbage left
                eventHolder.unbind();
                placeholder.children().not([canvas, overlay]).remove(); 
            }
            // save in case we get replotted
            placeholder.data("plot", plot);
        }
        function bindEvents() {
            // bind events
            if (options.grid.hoverable) {
                eventHolder.mousemove(onMouseMove);
                eventHolder.mouseleave(onMouseLeave);
            }
            if (options.grid.clickable)
                eventHolder.click(onClick);
            executeHooks(hooks.bindEvents, [eventHolder]);
            //Sam --- 修复IE8下点击报错的问题
			if($.browser.msie && $.browser.version < 9){
				placeholder.on('mousedown keydown click',function(e){
					e && e.stopPropagation && e.stopPropagation();
					return false;
				});
			}
        }
        function shutdown() {
            if (redrawTimeout)
                clearTimeout(redrawTimeout);
            eventHolder.unbind("mousemove", onMouseMove);
            eventHolder.unbind("mouseleave", onMouseLeave);
            eventHolder.unbind("click", onClick);
            executeHooks(hooks.shutdown, [eventHolder]);
        }
        function setTransformationHelpers(axis) {
            // set helper functions on the axis, assumes plot area
            // has been computed already
            function identity(x) { return x; }
            var s, m, t = axis.options.transform || identity,
                it = axis.options.inverseTransform;
            // precompute how much the axis is scaling a point
            // in canvas space
            if (axis.direction == "x") {
                s = axis.scale = plotWidth / Math.abs(t(axis.max) - t(axis.min));
                m = Math.min(t(axis.max), t(axis.min));
            }
            else {
                s = axis.scale = plotHeight / Math.abs(t(axis.max) - t(axis.min));
                s = -s;
                m = Math.max(t(axis.max), t(axis.min));
            }

            // data point to canvas coordinate
            if (t == identity) // slight optimization
                axis.p2c = function (p) { return (p - m) * s; };
            else
                axis.p2c = function (p) { return (t(p) - m) * s; };
            // canvas coordinate to data point
            if (!it)
                axis.c2p = function (c) { return m + c / s; };
            else
                axis.c2p = function (c) { return it(m + c / s); };
        }

        function measureTickLabels(axis) {
            var opts = axis.options, i, ticks = axis.ticks || [], labels = [],
                l, w = opts.labelWidth, h = opts.labelHeight, dummyDiv;
/**
 * Sam 2014-10-12
 * 将dummy挂到body下面测量距离。解决由于placeholder尚未显示，导致测距时测到距离为0的情况
 * @param {Object} labels
 * @param {Object} width
 */
            function makeDummyDiv(labels, width) {
				var p = placeholder.is(':visible') ? placeholder : "body";
				return $('<div style="position:absolute;top:-10000px;' + width + 'font-size:smaller">' +
                         '<div class="' + axis.direction + 'Axis ' + axis.direction + axis.n + 'Axis">'
                         + labels.join("") + '</div></div>')
                    .appendTo(p);
			}
            
            if (axis.direction == "x") {
                // to avoid measuring the widths of the labels (it's slow), we
                // construct fixed-size boxes and put the labels inside
                // them, we don't need the exact figures and the
                // fixed-size box content is easy to center
                if (w == null)
                    w = Math.floor(canvasWidth / (ticks.length > 0 ? ticks.length : 1));

                // measure x label heights
                if (h == null) {
                    labels = [];
                    for (i = 0; i < ticks.length; ++i) {
                        l = ticks[i].label;
                        if (l)
                            labels.push('<div class="tickLabel" style="float:left;width:' + w + 'px">' + l + '</div>');
                    }

                    if (labels.length > 0) {
                        // stick them all in the same div and measure
                        // collective height
                        labels.push('<div style="clear:left"></div>');
                        dummyDiv = makeDummyDiv(labels, "width:10000px;");
                        h = dummyDiv.height();
                        dummyDiv.remove();
                    }
                }
            }
            else if (w == null || h == null) {
                // calculate y label dimensions
                for (i = 0; i < ticks.length; ++i) {
                    l = ticks[i].label;
                    if (l)
                        labels.push('<div class="tickLabel">' + l + '</div>');
                }
                if (labels.length > 0) {
                    dummyDiv = makeDummyDiv(labels, "");
                    if (w == null)
                        w = dummyDiv.children().width();
                    if (h == null)
                        h = dummyDiv.find("div.tickLabel").height();
                    dummyDiv.remove();
                }
            }

            if (w == null)
                w = 0;
            if (h == null)
                h = 0;

            axis.labelWidth = w;
            axis.labelHeight = h;
        }

        function allocateAxisBoxFirstPhase(axis) {
            // find the bounding box of the axis by looking at label
            // widths/heights and ticks, make room by diminishing the
            // plotOffset

            var lw = axis.labelWidth,
                lh = axis.labelHeight,
                pos = axis.options.position,
                tickLength = axis.options.tickLength,
                axismargin = options.grid.axisMargin,
                padding = options.grid.labelMargin,
                all = axis.direction == "x" ? xaxes : yaxes,
                index;
            // determine axis margin
            var samePosition = $.grep(all, function (a) {
                return a && a.options.position == pos && a.reserveSpace;
            });
            if ($.inArray(axis, samePosition) == samePosition.length - 1)
                axismargin = 0; // outermost

            // determine tick length - if we're innermost, we can use "full"
            if (tickLength == null)
                tickLength = "full";

            var sameDirection = $.grep(all, function (a) {
                return a && a.reserveSpace;
            });

            var innermost = $.inArray(axis, sameDirection) == 0;
            if (!innermost && tickLength == "full")
                tickLength = 5;
                
            if (!isNaN(+tickLength))
                padding += +tickLength;

            // compute box
            if (axis.direction == "x") {
                lh += padding;
                
                if (pos == "bottom") {
                    plotOffset.bottom += lh + axismargin;
                    axis.box = { top: canvasHeight - plotOffset.bottom, height: lh };
                }
                else {
                    axis.box = { top: plotOffset.top + axismargin, height: lh };
                    plotOffset.top += lh + axismargin;
                }
            }
            else {
                lw += padding;
                if (pos == "left") {
                    axis.box = { left: plotOffset.left + axismargin, width: lw };
                    plotOffset.left += lw + axismargin;
					/*
                    if( !plot.haveCoordinate ){
                        plotOffset.left = 33;
                    }*/
                }
                else {
                    plotOffset.right += lw + axismargin;
                    axis.box = { left: canvasWidth - plotOffset.right, width: lw };
                }
            }

             // save for future reference
            axis.position = pos;
            axis.tickLength = tickLength;
            axis.box.padding = padding;
            axis.innermost = innermost;
        }

        function allocateAxisBoxSecondPhase(axis) {
            // set remaining bounding box coordinates
            if (axis.direction == "x") {
                axis.box.left = plotOffset.left;
                axis.box.width = plotWidth;
            }
            else {
                axis.box.top = plotOffset.top;
                axis.box.height = plotHeight;
            }
        }
        
        function setupGrid() {
            var i, axes = allAxes();

            // first calculate the plot and axis box dimensions

            $.each(axes, function (_, axis) {
                axis.show = axis.options.show;
                if (axis.show == null)
                    axis.show = axis.used; // by default an axis is visible if it's got data
                
                axis.reserveSpace = axis.show || axis.options.reserveSpace;

                setRange(axis);
            });

            allocatedAxes = $.grep(axes, function (axis) { return axis.reserveSpace; });

            plotOffset.left = plotOffset.right = plotOffset.top = plotOffset.bottom = 0;
            if (options.grid.show) {
                $.each(allocatedAxes, function (_, axis) {
                    // make the ticks
                    setupTickGeneration(axis);
                    setTicks(axis);
                    snapRangeToTicks(axis, axis.ticks);

                    // find labelWidth/Height for axis
                    measureTickLabels(axis);
                });

                // with all dimensions in house, we can compute the
                // axis boxes, start from the outside (reverse order)
                for (i = allocatedAxes.length - 1; i >= 0; --i)
                    allocateAxisBoxFirstPhase(allocatedAxes[i]);

                // make sure we've got enough space for things that
                // might stick out
                var minMargin = options.grid.minBorderMargin;
                if (minMargin == null) {
                    minMargin = 0;
                    for (i = 0; i < series.length; ++i)
                        minMargin = Math.max(minMargin, series[i].points.radius + series[i].points.lineWidth/2);
                }
                    
                for (var a in plotOffset) {
                    plotOffset[a] += options.grid.borderWidth;
                    plotOffset[a] = Math.max(minMargin, plotOffset[a]);
                }
            }
            plotWidth = canvasWidth - plotOffset.left - plotOffset.right;
            plotHeight = canvasHeight - plotOffset.bottom - plotOffset.top;
            // now we got the proper plotWidth/Height, we can compute the scaling
            $.each(axes, function (_, axis) {
                setTransformationHelpers(axis);
            });
            if (options.grid.show) {
                $.each(allocatedAxes, function (_, axis) {
                    allocateAxisBoxSecondPhase(axis);
                });
                insertAxisLabels();
            }
            
            insertLegend();
        }
        
        function setRange(axis) {
            var opts = axis.options,
                min = +(opts.min != null ? opts.min : axis.datamin),
                max = +(opts.max != null ? opts.max : axis.datamax),
                delta = max - min;

            if (delta == 0.0) {
                // degenerate case
                var widen = max == 0 ? 1 : 0.01;

                if (opts.min == null)
                    min -= widen;
                // always widen max if we couldn't widen min to ensure we
                // don't fall into min == max which doesn't work
                if (opts.max == null || opts.min != null)
                    max += widen;
            }
            else {
                // consider autoscaling
                var margin = opts.autoscaleMargin;
                if (margin != null) {
                    if (opts.min == null) {
                        min -= delta * margin;
                        // make sure we don't go below zero if all values
                        // are positive
                        if (min < 0 && axis.datamin != null && axis.datamin >= 0)
                            min = 0;
                    }
                    if (opts.max == null) {
                        max += delta * margin;
                        if (max > 0 && axis.datamax != null && axis.datamax <= 0)
                            max = 0;
                    }
                }
            }
            axis.min = min;
            axis.max = max;
        }

        function setupTickGeneration(axis) {
            var opts = axis.options;
                
            // estimate number of ticks
            var noTicks;
            if (typeof opts.ticks == "number" && opts.ticks > 0)
                noTicks = opts.ticks;
            else
                // heuristic based on the model a*sqrt(x) fitted to
                // some data points that seemed reasonable
                noTicks = 0.3 * Math.sqrt(axis.direction == "x" ? canvasWidth : canvasHeight);

            var delta = (axis.max - axis.min) / noTicks,
                size, generator, unit, formatter, i, magn, norm;

            if (opts.mode == "time") {
                // pretty handling of time
                
                // map of app. size of time units in milliseconds
                var timeUnitSize = {
                    "second": 1000,
                    "minute": 60 * 1000,
                    "hour": 60 * 60 * 1000,
                    "day": 24 * 60 * 60 * 1000,
                    "month": 30 * 24 * 60 * 60 * 1000,
                    "year": 365.2425 * 24 * 60 * 60 * 1000
                };


                // the allowed tick sizes, after 1 year we use
                // an integer algorithm
                var spec = [
                    [1, "second"], [2, "second"], [5, "second"], [10, "second"],
                    [30, "second"], 
                    [1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"],
                    [30, "minute"], 
                    [1, "hour"], [2, "hour"], [4, "hour"],
                    [8, "hour"], [12, "hour"],
                    [1, "day"], [2, "day"], [3, "day"],
                    [0.25, "month"], [0.5, "month"], [1, "month"],
                    [2, "month"], [3, "month"], [6, "month"],
                    [1, "year"]
                ];

                var minSize = 0;
                if (opts.minTickSize != null) {
                    if (typeof opts.tickSize == "number")
                        minSize = opts.tickSize;
                    else
                        minSize = opts.minTickSize[0] * timeUnitSize[opts.minTickSize[1]];
                }

                for (var i = 0; i < spec.length - 1; ++i)
                    if (delta < (spec[i][0] * timeUnitSize[spec[i][1]]
                                 + spec[i + 1][0] * timeUnitSize[spec[i + 1][1]]) / 2
                       && spec[i][0] * timeUnitSize[spec[i][1]] >= minSize)
                        break;
                size = spec[i][0];
                unit = spec[i][1];
                
                // special-case the possibility of several years
                if (unit == "year") {
                    magn = Math.pow(10, Math.floor(Math.log(delta / timeUnitSize.year) / Math.LN10));
                    norm = (delta / timeUnitSize.year) / magn;
                    if (norm < 1.5)
                        size = 1;
                    else if (norm < 3)
                        size = 2;
                    else if (norm < 7.5)
                        size = 5;
                    else
                        size = 10;

                    size *= magn;
                }

                axis.tickSize = opts.tickSize || [size, unit];
                
                generator = function(axis) {
                    var ticks = [],
                        tickSize = axis.tickSize[0], unit = axis.tickSize[1],
                        d = new Date(axis.min);
                    
                    var step = tickSize * timeUnitSize[unit];

                    if (unit == "second")
                        d.setUTCSeconds(floorInBase(d.getUTCSeconds(), tickSize));
                    if (unit == "minute")
                        d.setUTCMinutes(floorInBase(d.getUTCMinutes(), tickSize));
                    if (unit == "hour")
                        d.setUTCHours(floorInBase(d.getUTCHours(), tickSize));
                    if (unit == "month")
                        d.setUTCMonth(floorInBase(d.getUTCMonth(), tickSize));
                    if (unit == "year")
                        d.setUTCFullYear(floorInBase(d.getUTCFullYear(), tickSize));
                    
                    // reset smaller components
                    d.setUTCMilliseconds(0);
                    if (step >= timeUnitSize.minute)
                        d.setUTCSeconds(0);
                    if (step >= timeUnitSize.hour)
                        d.setUTCMinutes(0);
                    if (step >= timeUnitSize.day)
                        d.setUTCHours(0);
                    if (step >= timeUnitSize.day * 4)
                        d.setUTCDate(1);
                    if (step >= timeUnitSize.year)
                        d.setUTCMonth(0);


                    var carry = 0, v = Number.NaN, prev;
                    do {
                        prev = v;
                        v = d.getTime();
                        ticks.push(v);
                        if (unit == "month") {
                            if (tickSize < 1) {
                                // a bit complicated - we'll divide the month
                                // up but we need to take care of fractions
                                // so we don't end up in the middle of a day
                                d.setUTCDate(1);
                                var start = d.getTime();
                                d.setUTCMonth(d.getUTCMonth() + 1);
                                var end = d.getTime();
                                d.setTime(v + carry * timeUnitSize.hour + (end - start) * tickSize);
                                carry = d.getUTCHours();
                                d.setUTCHours(0);
                            }
                            else
                                d.setUTCMonth(d.getUTCMonth() + tickSize);
                        }
                        else if (unit == "year") {
                            d.setUTCFullYear(d.getUTCFullYear() + tickSize);
                        }
                        else
                            d.setTime(v + step);
                    } while (v < axis.max && v != prev);

                    return ticks;
                };

                formatter = function (v, axis) {
                    var d = new Date(v);

                    // first check global format
                    if (opts.timeformat != null)
                        return $.plot.formatDate(d, opts.timeformat, opts.monthNames);
                    
                    var t = axis.tickSize[0] * timeUnitSize[axis.tickSize[1]];
                    var span = axis.max - axis.min;
                    var suffix = (opts.twelveHourClock) ? " %p" : "";
                    
                    if (t < timeUnitSize.minute)
                        fmt = "%h:%M:%S" + suffix;
                    else if (t < timeUnitSize.day) {
                        if (span < 2 * timeUnitSize.day)
                            fmt = "%h:%M" + suffix;
                        else
                            fmt = "%b %d %h:%M" + suffix;
                    }
                    else if (t < timeUnitSize.month)
                        fmt = "%b %d";
                    else if (t < timeUnitSize.year) {
                        if (span < timeUnitSize.year)
                            fmt = "%b";
                        else
                            fmt = "%b %y";
                    }
                    else
                        fmt = "%y";
                    
                    return $.plot.formatDate(d, fmt, opts.monthNames);
                };
            }
            else {
                // pretty rounding of base-10 numbers
                var maxDec = opts.tickDecimals;
                var dec = -Math.floor(Math.log(delta) / Math.LN10);
                if (maxDec != null && dec > maxDec)
                    dec = maxDec;

                magn = Math.pow(10, -dec);
                norm = delta / magn; // norm is between 1.0 and 10.0
                
                if (norm < 1.5)
                    size = 1;
                else if (norm < 3) {
                    size = 2;
                    // special case for 2.5, requires an extra decimal
                    if (norm > 2.25 && (maxDec == null || dec + 1 <= maxDec)) {
                        size = 2.5;
                        ++dec;
                    }
                }
                else if (norm < 7.5)
                    size = 5;
                else
                    size = 10;

                size *= magn;
                
                if (opts.minTickSize != null && size < opts.minTickSize)
                    size = opts.minTickSize;

                axis.tickDecimals = Math.max(0, maxDec != null ? maxDec : dec);
                axis.tickSize = opts.tickSize || size;

                generator = function (axis) {
                    var ticks = [];

                    // spew out all possible ticks
                    var start = floorInBase(axis.min, axis.tickSize),
                        i = 0, v = Number.NaN, prev;
                    do {
                        prev = v;
                        v = start + i * axis.tickSize;
                        ticks.push(v);
                        ++i;
                    } while (v < axis.max && v != prev);
                    return ticks;
                };

                formatter = function (v, axis) {
                    return v.toFixed(axis.tickDecimals);
                };
            }

            if (opts.alignTicksWithAxis != null) {
                var otherAxis = (axis.direction == "x" ? xaxes : yaxes)[opts.alignTicksWithAxis - 1];
                if (otherAxis && otherAxis.used && otherAxis != axis) {
                    // consider snapping min/max to outermost nice ticks
                    var niceTicks = generator(axis);
                    if (niceTicks.length > 0) {
                        if (opts.min == null)
                            axis.min = Math.min(axis.min, niceTicks[0]);
                        if (opts.max == null && niceTicks.length > 1)
                            axis.max = Math.max(axis.max, niceTicks[niceTicks.length - 1]);
                    }
                    
                    generator = function (axis) {
                        // copy ticks, scaled to this axis
                        var ticks = [], v, i;
                        for (i = 0; i < otherAxis.ticks.length; ++i) {
                            v = (otherAxis.ticks[i].v - otherAxis.min) / (otherAxis.max - otherAxis.min);
                            v = axis.min + v * (axis.max - axis.min);
                            ticks.push(v);
                        }
                        return ticks;
                    };
                    
                    // we might need an extra decimal since forced
                    // ticks don't necessarily fit naturally
                    if (axis.mode != "time" && opts.tickDecimals == null) {
                        var extraDec = Math.max(0, -Math.floor(Math.log(delta) / Math.LN10) + 1),
                            ts = generator(axis);

                        // only proceed if the tick interval rounded
                        // with an extra decimal doesn't give us a
                        // zero at end
                        if (!(ts.length > 1 && /\..*0$/.test((ts[1] - ts[0]).toFixed(extraDec))))
                            axis.tickDecimals = extraDec;
                    }
                }
            }

            axis.tickGenerator = generator;
            if ($.isFunction(opts.tickFormatter))
                axis.tickFormatter = function (v, axis) { return "" + opts.tickFormatter(v, axis); };
            else
                axis.tickFormatter = formatter;
        }
        
        function setTicks(axis) {
            var oticks = axis.options.ticks, ticks = [];
            if (oticks == null || (typeof oticks == "number" && oticks > 0))
                ticks = axis.tickGenerator(axis);
            else if (oticks) {
                if ($.isFunction(oticks))
                    // generate the ticks
                    ticks = oticks({ min: axis.min, max: axis.max });
                else
                    ticks = oticks;
            }

            // clean up/labelify the supplied ticks, copy them over
            var i, v;
            axis.ticks = [];
            for (i = 0; i < ticks.length; ++i) {
                var label = null;
                var t = ticks[i];
                if (typeof t == "object") {
                    v = +t[0];
                    if (t.length > 1)
                        label = t[1];
                }
                else
                    v = +t;
                if (label == null)
                    label = axis.tickFormatter(v, axis);
                if (!isNaN(v))
                    axis.ticks.push({ v: v, label: label });
            }
        }

        function snapRangeToTicks(axis, ticks) {
            if (axis.options.autoscaleMargin && ticks.length > 0) {
                // snap to ticks
                if (axis.options.min == null)
                    axis.min = Math.min(axis.min, ticks[0].v);
                if (axis.options.max == null && ticks.length > 1)
                    axis.max = Math.max(axis.max, ticks[ticks.length - 1].v);
            }
        }
      
        function draw() {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            var grid = options.grid;

            // draw background, if any
            if (grid.show && grid.backgroundColor)
                drawBackground();
            
            if (grid.show && !grid.aboveData)
                drawGrid();

            for (var i = 0; i < series.length; ++i) {
                executeHooks(hooks.drawSeries, [ctx, series[i]]);
                drawSeries(series[i]);
            }

            executeHooks(hooks.draw, [ctx]);
            
            if (grid.show && grid.aboveData)
                drawGrid();
			
/**
	Sam
	控制Grid边界
*/
			var isRedrawRightBorder = $.browser.msie && $.browser.version < 9 ? false : true;//ie8下clearRect()有bug，详见excanvas.js实现 -- Far
			if (isRedrawRightBorder) {
				var bw = options.grid.borderWidth;
				ctx.save();
				ctx.translate(plotOffset.left, plotOffset.top);
                ctx.strokeStyle = options.grid.borderColor;
                ctx.lineWidth = bw;
				var offset = series[0].points.radius + series[0].points.lineWidth / 2;
				var points = series[0].datapoints.points;
				var _width = series[0].xaxis.p2c(points[points.length-4]);
				ctx.clearRect(_width+bw,-bw,plotWidth + bw, plotHeight + bw*2);				
				if(bw){
					ctx.strokeRect(_width,0,options.grid.borderWidth, plotHeight);
				}
				ctx.restore();
            }
        }

        function extractRange(ranges, coord) {
            var axis, from, to, key, axes = allAxes();

            for (i = 0; i < axes.length; ++i) {
                axis = axes[i];
                if (axis.direction == coord) {
                    key = coord + axis.n + "axis";
                    if (!ranges[key] && axis.n == 1)
                        key = coord + "axis"; // support x1axis as xaxis
                    if (ranges[key]) {
                        from = ranges[key].from;
                        to = ranges[key].to;
                        break;
                    }
                }
            }

            // backwards-compat stuff - to be removed in future
            if (!ranges[key]) {
                axis = coord == "x" ? xaxes[0] : yaxes[0];
                from = ranges[coord + "1"];
                to = ranges[coord + "2"];
            }

            // auto-reverse as an added bonus
            if (from != null && to != null && from > to) {
                var tmp = from;
                from = to;
                to = tmp;
            }
            
            return { from: from, to: to, axis: axis };
        }
        
        function drawBackground() {
            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);
            ctx.fillStyle = getColorOrGradient(options.grid.backgroundColor, plotHeight, 0, "rgba(255, 255, 255, 0)");
            ctx.fillRect(0, 0, plotWidth, plotHeight);
            ctx.restore();
        }

        function drawGrid() {
            var i;
            
            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // draw markings
            var markings = options.grid.markings;
            if (markings) {
                if ($.isFunction(markings)) {
                    var axes = plot.getAxes();
                    // xmin etc. is backwards compatibility, to be
                    // removed in the future
                    axes.xmin = axes.xaxis.min;
                    axes.xmax = axes.xaxis.max;
                    axes.ymin = axes.yaxis.min;
                    axes.ymax = axes.yaxis.max;
                    
                    markings = markings(axes);
                }

                for (i = 0; i < markings.length; ++i) {
                    var m = markings[i],
                        xrange = extractRange(m, "x"),
                        yrange = extractRange(m, "y");

                    // fill in missing
                    if (xrange.from == null)
                        xrange.from = xrange.axis.min;
                    if (xrange.to == null)
                        xrange.to = xrange.axis.max;
                    if (yrange.from == null)
                        yrange.from = yrange.axis.min;
                    if (yrange.to == null)
                        yrange.to = yrange.axis.max;

                    // clip
                    if (xrange.to < xrange.axis.min || xrange.from > xrange.axis.max ||
                        yrange.to < yrange.axis.min || yrange.from > yrange.axis.max)
                        continue;

                    xrange.from = Math.max(xrange.from, xrange.axis.min);
                    xrange.to = Math.min(xrange.to, xrange.axis.max);
                    yrange.from = Math.max(yrange.from, yrange.axis.min);
                    yrange.to = Math.min(yrange.to, yrange.axis.max);

                    if (xrange.from == xrange.to && yrange.from == yrange.to)
                        continue;

                    // then draw
                    xrange.from = xrange.axis.p2c(xrange.from);
                    xrange.to = xrange.axis.p2c(xrange.to);
                    yrange.from = yrange.axis.p2c(yrange.from);
                    yrange.to = yrange.axis.p2c(yrange.to);
                    
                    if (xrange.from == xrange.to || yrange.from == yrange.to) {
                        // draw line
                        ctx.beginPath();
                        ctx.strokeStyle = m.color || options.grid.markingsColor;
                        ctx.lineWidth = m.lineWidth || options.grid.markingsLineWidth;
                        ctx.moveTo(xrange.from, yrange.from);
                        ctx.lineTo(xrange.to, yrange.to);
                        ctx.stroke();
                    }
                    else {
                        // fill area
                        ctx.fillStyle = m.color || options.grid.markingsColor;
                        ctx.fillRect(xrange.from, yrange.to,
                                     xrange.to - xrange.from,
                                     yrange.from - yrange.to);
                    }
                }
            }
            
            // draw the ticks
            var axes = allAxes(), bw = options.grid.borderWidth;

            for (var j = 0; j < axes.length; ++j) {
                var axis = axes[j], box = axis.box,
                    t = axis.tickLength, x, y, xoff, yoff;
                if (!axis.show || axis.ticks.length == 0)
                    continue
                
                ctx.strokeStyle = axis.options.tickColor || $.color.parse(axis.options.color).scale('a', 0.22).toString();
                ctx.lineWidth = 1;

                // find the edges
                if (axis.direction == "x") {
                    x = 0;
                    if (t == "full")
                        y = (axis.position == "top" ? 0 : plotHeight);
                    else
                        y = box.top - plotOffset.top + (axis.position == "top" ? box.height : 0);
                }
                else {
                    y = 0;
                    if (t == "full")
                        x = (axis.position == "left" ? 0 : plotWidth);
                    else
                        x = box.left - plotOffset.left + (axis.position == "left" ? box.width : 0);
                }
                
                // draw tick bar
                if (!axis.innermost) {
                    ctx.beginPath();
                    xoff = yoff = 0;
                    if (axis.direction == "x")
                        xoff = plotWidth;
                    else
                        yoff = plotHeight;
                    
                    if (ctx.lineWidth == 1) {
                        x = Math.floor(x) + 0.5;
                        y = Math.floor(y) + 0.5;
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                    ctx.stroke();
                }

                // draw ticks
                ctx.beginPath();
                for (i = 0; i < axis.ticks.length; ++i) {
                    var v = axis.ticks[i].v;
                    
                    xoff = yoff = 0;

                    if (v < axis.min || v > axis.max
                        // skip those lying on the axes if we got a border
                        || (t == "full" && bw > 0
                            && (v == axis.min || v == axis.max)))
                        continue;

                    if (axis.direction == "x") {
                        x = axis.p2c(v);
                        yoff = t == "full" ? -plotHeight : t;
                        
                        if (axis.position == "top")
                            yoff = -yoff;
                    }
                    else {
                        y = axis.p2c(v);
                        xoff = t == "full" ? -plotWidth : t;
                        
                        if (axis.position == "left")
                            xoff = -xoff;
                    }

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x")
                            x = Math.floor(x) + 0.5;
                        else
                            y = Math.floor(y) + 0.5;
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                }
                
                ctx.stroke();
            }
            
            
            // draw border
            if (bw) {
                ctx.lineWidth = bw;
                ctx.strokeStyle = options.grid.borderColor;
                ctx.strokeRect(-bw/2, -bw/2, plotWidth + bw, plotHeight + bw);
            }

            ctx.restore();
        }

        function insertAxisLabels() {
            placeholder.find(".tickLabels").remove();
            
            var html = ['<div class="tickLabels" style="font-size:smaller">'];
			
            var axes = allAxes();
			for (var j = 0; j < axes.length; ++j) {
                var axis = axes[j], box = axis.box;
                if (!axis.show)
                    continue;
                //debug: html.push('<div style="position:absolute;opacity:0.10;background-color:red;left:' + box.left + 'px;top:' + box.top + 'px;width:' + box.width +  'px;height:' + box.height + 'px"></div>')
                html.push('<div class="' + axis.direction + 'Axis ' + axis.direction + axis.n + 'Axis" style="color:' + axis.options.color + '">');
                for (var i = 0; i < axis.ticks.length; ++i) {
                    var tick = axis.ticks[i];
                    if (!tick.label || tick.v < axis.min || tick.v > axis.max)
                        continue;

                    var pos = {}, align;
                    
                    if (axis.direction == "x") {
                        align = "center";
                        pos.left = Math.round(plotOffset.left + axis.p2c(tick.v) - axis.labelWidth/2);
                        if (axis.position == "bottom")
                            pos.top = box.top + box.padding;
                        else
                            pos.bottom = canvasHeight - (box.top + box.height - box.padding);
                    }
                    else {
                        pos.top = Math.round(plotOffset.top + axis.p2c(tick.v) - axis.labelHeight/2);
                        if (axis.position == "left") {
                            pos.right = canvasWidth - (box.left + box.width - box.padding)
                            align = "right";
                        }
                        else {
                            pos.left = box.left + box.padding;
                            align = "left";
                        }
                    }

                    pos.width = axis.labelWidth;

                    var style = ["position:absolute", "text-align:" + align ];
                    for (var a in pos)
                        style.push(a + ":" + pos[a] + "px")
                    
                    html.push('<div class="tickLabel" style="' + style.join(';') + '">' + tick.label + '</div>');
                }
                // if ( axis.direction == 'y') {
                //     html.push('<div id="clearPloecho" style="position: absolute;height: 162px;width: '+(axis.labelWidth+11)+'px;top: 0;left: -5px;"></div>');

                // };
                html.push('</div>');
            }

            html.push('</div>');

            placeholder.append(html.join(""));
        }

        function drawSeries(series) {
            if (series.lines.show)
                drawSeriesLines(series);
            if (series.bars.show)
                drawSeriesBars(series);
            if (series.points.show)
                drawSeriesPoints(series);
            //added by Sam 增加事件点
            if (series.eventpoints.show)
                drawEventPoints(series);
        }
        
        function drawSeriesLines(series) {
            // by Sam 2013-7-22 在(x,y),(x2,y2)间画虚线 dashArr: 实线、虚线数组
            function plotDash(x,y,x2,y2,dashArr){
                ctx.beginPath();
                ctx.save();
                ctx.lineWidth = series.lines.lineWidth;
                var dashArray = dashArr || [4, 2]; //[0]为实线长，[1]为虚线长  
                var dashCount = dashArray.length;  
                ctx.moveTo(x, y);  
                var dx = (x2 - x), dy = (y2 - y);  
                var slope = dy / dx;  
                var distRemaining = Math.sqrt(dx * dx + dy * dy);  
                var dashIndex = 0, draw = true;
                var xSteps = [Math.sqrt(dashArray[0] * dashArray[0] / (1 + slope * slope)),Math.sqrt(dashArray[1] * dashArray[1] / (1 + slope * slope))];
                while (distRemaining >= 0.1) {
                    var index = dashIndex++ % dashCount;
                    var dashLength = dashArray[index];
                    if (dashLength > distRemaining) dashLength = distRemaining; 
                    var signal = (x2 > x ? 1 : -1); 
                    x += xSteps[index] * signal;
                    y += slope * xSteps[index] * signal;  
                    draw ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
                    distRemaining -= dashLength;
                    draw = !draw;  
                }
                ctx.stroke();
                ctx.restore();
            }
            
            
            function plotLine(datapoints, xoffset, yoffset, axisx, axisy) {
				var points = datapoints.points,
                    ps = datapoints.pointsize,
                    prevx = null, prevy = null;
                //缺点则画虚线  Sam
                if(points.length>1 || points[0]>axisx.min){
                    plotDash(axisx.p2c(axisx.min),axisy.p2c(points[1]),axisx.p2c(points[0]),axisy.p2c(points[1]));
                }
                ctx.beginPath();
                for (var i = ps; i < points.length; i += ps) {
                    var x1 = points[i - ps], y1 = points[i - ps + 1],
                        x2 = points[i], y2 = points[i + 1];
                    
                    if (x1 == null || x2 == null)
                        continue;

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min) {
                        if (y2 < axisy.min)
                            continue;   // line segment is outside
                        // compute new intersection point
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min) {
                        if (y1 < axisy.min)
                            continue;
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max) {
                        if (y2 > axisy.max)
                            continue;
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max) {
                        if (y1 > axisy.max)
                            continue;
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (x1 != prevx || y1 != prevy)
                        ctx.moveTo(axisx.p2c(x1) + xoffset, axisy.p2c(y1) + yoffset);
                    
                    prevx = x2;
                    prevy = y2;
                    ctx.lineTo(axisx.p2c(x2) + xoffset, axisy.p2c(y2) + yoffset);
                }
                
                ctx.stroke();
            }

            function plotLineArea(datapoints, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    bottom = Math.min(Math.max(0, axisy.min), axisy.max),
                    i = 0, top, areaOpen = false,
                    ypos = 1, segmentStart = 0, segmentEnd = 0;

                // we process each segment in two turns, first forward
                // direction to sketch out top, then once we hit the
                // end we go backwards to sketch the bottom
                while (true) {
                    if (ps > 0 && i > points.length + ps)
                        break;

                    i += ps; // ps is negative if going backwards

                    var x1 = points[i - ps],
                        y1 = points[i - ps + ypos],
                        x2 = points[i], y2 = points[i + ypos];

                    if (areaOpen) {
                        if (ps > 0 && x1 != null && x2 == null) {
                            // at turning point
                            segmentEnd = i;
                            ps = -ps;
                            ypos = 2;
                            continue;
                        }

                        if (ps < 0 && i == segmentStart + ps) {
                            // done with the reverse sweep
                            ctx.fill();
                            areaOpen = false;
                            ps = -ps;
                            ypos = 1;
                            i = segmentStart = segmentEnd + ps;
                            continue;
                        }
                    }

                    if (x1 == null || x2 == null)
                        continue;

                    // clip x values
                    
                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (!areaOpen) {
                        // open area
                        ctx.beginPath();
                        ctx.moveTo(axisx.p2c(x1), axisy.p2c(bottom));
                        areaOpen = true;
                    }
                    
                    // now first check the case where both is outside
                    if (y1 >= axisy.max && y2 >= axisy.max) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.max));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.max));
                        continue;
                    }
                    else if (y1 <= axisy.min && y2 <= axisy.min) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.min));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.min));
                        continue;
                    }
                    
                    // else it's a bit more complicated, there might
                    // be a flat maxed out rectangle first, then a
                    // triangular cutout or reverse; to find these
                    // keep track of the current x values
                    var x1old = x1, x2old = x2;

                    // clip the y values, without shortcutting, we
                    // go through all cases in turn
                    
                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min && y2 >= axisy.min) {
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min && y1 >= axisy.min) {
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max && y2 <= axisy.max) {
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max && y1 <= axisy.max) {
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // if the x value was changed we got a rectangle
                    // to fill
                    if (x1 != x1old) {
                        ctx.lineTo(axisx.p2c(x1old), axisy.p2c(y1));
                        // it goes to (x1, y1), but we fill that below
                    }
                    
                    // fill triangular section, this sometimes result
                    // in redundant points if (x1, y1) hasn't changed
                    // from previous line to, but we just ignore that
                    ctx.lineTo(axisx.p2c(x1), axisy.p2c(y1));
                    ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));

                    // fill the other rectangle if it's there
                    if (x2 != x2old) {
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));
                        ctx.lineTo(axisx.p2c(x2old), axisy.p2c(y2));
                    }
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);
            ctx.lineJoin = "round";

            var lw = series.lines.lineWidth,
                sw = series.shadowSize;
            // FIXME: consider another form of shadow when filling is turned on
            if (lw > 0 && sw > 0) {
                // draw shadow as a thick and thin line with transparency
                ctx.lineWidth = sw;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                // position shadow at angle from the mid of line
                var angle = Math.PI/18;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/2), Math.cos(angle) * (lw/2 + sw/2), series.xaxis, series.yaxis);
                ctx.lineWidth = sw/2;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/4), Math.cos(angle) * (lw/2 + sw/4), series.xaxis, series.yaxis);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            var fillStyle = getFillStyle(series.lines, series.color, 0, plotHeight);
            if (fillStyle) {
                ctx.fillStyle = fillStyle;
                plotLineArea(series.datapoints, series.xaxis, series.yaxis);
            }

            if (lw > 0)
                plotLine(series.datapoints, 0, 0, series.xaxis, series.yaxis);
            ctx.restore();
        }
        
        //added by Sam
        function drawEventPoints(series){
        	function plotPoints(s, radius, fillStyle, offset, shadow, axisx, axisy, symbol) {
                var data = s.data;
                var points = s.datapoints.points, ps = s.datapoints.pointsize;
                
                var eventMap = {};
                for (var i = 0; i < data.length; ++i) {
                	if( data[i] && data[i][2]){
                    	eventMap[data[i][0]] = data[i][2];
                	}
                }
                for (var i = 0; i < points.length; i += ps) {
                    var x = points[i], y = points[i + 1];
                    if (x == null || x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max || !eventMap[x] )
                        continue;
                    
                    ctx.beginPath();
                    x = axisx.p2c(x);
                    y = axisy.p2c(y) + offset;
                    if (symbol == "circle")
                        ctx.arc(x, y, radius, 0, shadow ? Math.PI : Math.PI * 2, false);
                    else
                        symbol(ctx, x, y, radius, shadow);
                    ctx.closePath();
                    
                    if (fillStyle) {
                        ctx.fillStyle = fillStyle;
                        ctx.fill();
                    }
                    ctx.stroke();
                }
            }
            
            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            var lw = series.eventpoints.lineWidth,
                sw = series.shadowSize,
                radius = series.eventpoints.radius,
                symbol = series.eventpoints.symbol;
            if (lw > 0 && sw > 0) {
                // draw shadow in two steps
                var w = sw / 2;
                ctx.lineWidth = w;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                plotPoints(series, radius, null, w + w/2, true,
                           series.xaxis, series.yaxis, symbol);

                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                plotPoints(series.datapoints, radius, null, w/2, true,
                           series.xaxis, series.yaxis, symbol);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            plotPoints(series, radius,
                       getFillStyle(series.eventpoints, series.color), 0, false,
                       series.xaxis, series.yaxis, symbol);
            ctx.restore();
        }
        
        function drawSeriesPoints(series) {
            function plotPoints(datapoints, radius, fillStyle, offset, shadow, axisx, axisy, symbol) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    var x = points[i], y = points[i + 1];
                    if (x == null || x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                        continue;
                    
                    ctx.beginPath();
                    x = axisx.p2c(x);
                    y = axisy.p2c(y) + offset;
                    if (symbol == "circle")
                        ctx.arc(x, y, radius, 0, shadow ? Math.PI : Math.PI * 2, false);
                    else
                        symbol(ctx, x, y, radius, shadow);
                    ctx.closePath();
                    
                    if (fillStyle) {
                        ctx.fillStyle = fillStyle;
                        ctx.fill();
                    }
                    ctx.stroke();
                }
            }
            
            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            var lw = series.points.lineWidth,
                sw = series.shadowSize,
                radius = series.points.radius,
                symbol = series.points.symbol;
            if (lw > 0 && sw > 0) {
                // draw shadow in two steps
                var w = sw / 2;
                ctx.lineWidth = w;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                plotPoints(series.datapoints, radius, null, w + w/2, true,
                           series.xaxis, series.yaxis, symbol);

                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                plotPoints(series.datapoints, radius, null, w/2, true,
                           series.xaxis, series.yaxis, symbol);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            plotPoints(series.datapoints, radius,
                       getFillStyle(series.points, series.color), 0, false,
                       series.xaxis, series.yaxis, symbol);
            ctx.restore();
        }

        function drawBar(x, y, b, barLeft, barRight, offset, fillStyleCallback, axisx, axisy, c, horizontal, lineWidth) {
            var left, right, bottom, top,
                drawLeft, drawRight, drawTop, drawBottom,
                tmp;

            // in horizontal mode, we start the bar from the left
            // instead of from the bottom so it appears to be
            // horizontal rather than vertical
            if (horizontal) {
                drawBottom = drawRight = drawTop = true;
                drawLeft = false;
                left = b;
                right = x;
                top = y + barLeft;
                bottom = y + barRight;

                // account for negative bars
                if (right < left) {
                    tmp = right;
                    right = left;
                    left = tmp;
                    drawLeft = true;
                    drawRight = false;
                }
            }
            else {
                drawLeft = drawRight = drawTop = true;
                drawBottom = false;
                left = x + barLeft;
                right = x + barRight;
                bottom = b;
                top = y;

                // account for negative bars
                if (top < bottom) {
                    tmp = top;
                    top = bottom;
                    bottom = tmp;
                    drawBottom = true;
                    drawTop = false;
                }
            }
           
            // clip
            if (right < axisx.min || left > axisx.max ||
                top < axisy.min || bottom > axisy.max)
                return;
            
            if (left < axisx.min) {
                left = axisx.min;
                drawLeft = false;
            }

            if (right > axisx.max) {
                right = axisx.max;
                drawRight = false;
            }

            if (bottom < axisy.min) {
                bottom = axisy.min;
                drawBottom = false;
            }
            
            if (top > axisy.max) {
                top = axisy.max;
                drawTop = false;
            }

            left = axisx.p2c(left);
            bottom = axisy.p2c(bottom);
            right = axisx.p2c(right);
            top = axisy.p2c(top);
            
            // fill the bar
            if (fillStyleCallback) {
                c.beginPath();
                c.moveTo(left, bottom);
                c.lineTo(left, top);
                c.lineTo(right, top);
                c.lineTo(right, bottom);
                c.fillStyle = fillStyleCallback(bottom, top);
                c.fill();
            }

            // draw outline
            if (lineWidth > 0 && (drawLeft || drawRight || drawTop || drawBottom)) {
                c.beginPath();

                // FIXME: inline moveTo is buggy with excanvas
                c.moveTo(left, bottom + offset);
                if (drawLeft)
                    c.lineTo(left, top + offset);
                else
                    c.moveTo(left, top + offset);
                if (drawTop)
                    c.lineTo(right, top + offset);
                else
                    c.moveTo(right, top + offset);
                if (drawRight)
                    c.lineTo(right, bottom + offset);
                else
                    c.moveTo(right, bottom + offset);
                if (drawBottom)
                    c.lineTo(left, bottom + offset);
                else
                    c.moveTo(left, bottom + offset);
                c.stroke();
            }
        }
        
        function drawSeriesBars(series) {
            function plotBars(datapoints, barLeft, barRight, offset, fillStyleCallback, axisx, axisy) {
                var points = datapoints.points, ps = datapoints.pointsize;
                
                for (var i = 0; i < points.length; i += ps) {
                    if (points[i] == null)
                        continue;
                    drawBar(points[i], points[i + 1], points[i + 2], barLeft, barRight, offset, fillStyleCallback, axisx, axisy, ctx, series.bars.horizontal, series.bars.lineWidth);
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // FIXME: figure out a way to add shadows (for instance along the right edge)
            ctx.lineWidth = series.bars.lineWidth;
            ctx.strokeStyle = series.color;
            var barLeft = series.bars.align == "left" ? 0 : -series.bars.barWidth/2;
            var fillStyleCallback = series.bars.fill ? function (bottom, top) { return getFillStyle(series.bars, series.color, bottom, top); } : null;
            plotBars(series.datapoints, barLeft, barLeft + series.bars.barWidth, 0, fillStyleCallback, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function getFillStyle(filloptions, seriesColor, bottom, top) {
            var fill = filloptions.fill;
            if (!fill)
                return null;

            if (filloptions.fillColor)
                return getColorOrGradient(filloptions.fillColor, bottom, top, seriesColor);
            
            var c = $.color.parse(seriesColor);
            c.a = typeof fill == "number" ? fill : 0.4;
            c.normalize();
            return c.toString();
        }
        
        function insertLegend() {
            placeholder.find(".legend").remove();
            if (!options.legend.show)
                return;
            
            var fragments = [], rowStarted = false,
                lf = options.legend.labelFormatter, s, label;
            for (var i = 0; i < series.length; ++i) {
                s = series[i];
                label = s.label;
                if (!label)
                    continue;
                
                if (i % options.legend.noColumns == 0) {
                    if (rowStarted)
                        fragments.push('</tr>');
                    fragments.push('<tr>');
                    rowStarted = true;
                }

                if (lf)
                    label = lf(label, s);
                
                fragments.push(
                    '<td class="legendColorBox"><div style="border:1px solid ' + options.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + s.color + ';overflow:hidden"></div></div></td>' +
                    '<td class="legendLabel">' + label + '</td>');
            }
            if (rowStarted)
                fragments.push('</tr>');
            
            if (fragments.length == 0)
                return;

            var table = '<table style="font-size:smaller;color:' + options.grid.color + '">' + fragments.join("") + '</table>';
            if (options.legend.container != null)
                $(options.legend.container).html(table);
            else {
                var pos = "",
                    p = options.legend.position,
                    m = options.legend.margin;
                if (m[0] == null)
                    m = [m, m];
                if (p.charAt(0) == "n")
                    pos += 'top:' + (m[1] + plotOffset.top) + 'px;';
                else if (p.charAt(0) == "s")
                    pos += 'bottom:' + (m[1] + plotOffset.bottom) + 'px;';
                if (p.charAt(1) == "e")
                    pos += 'right:' + (m[0] + plotOffset.right) + 'px;';
                else if (p.charAt(1) == "w")
                    pos += 'left:' + (m[0] + plotOffset.left) + 'px;';
                var legend = $('<div class="legend">' + table.replace('style="', 'style="position:absolute;' + pos +';') + '</div>').appendTo(placeholder);
                if (options.legend.backgroundOpacity != 0.0) {
                    // put in the transparent background
                    // separately to avoid blended labels and
                    // label boxes
                    var c = options.legend.backgroundColor;
                    if (c == null) {
                        c = options.grid.backgroundColor;
                        if (c && typeof c == "string")
                            c = $.color.parse(c);
                        else
                            c = $.color.extract(legend, 'background-color');
                        c.a = 1;
                        c = c.toString();
                    }
                    var div = legend.children();
                    $('<div style="position:absolute;width:' + div.width() + 'px;height:' + div.height() + 'px;' + pos +'background-color:' + c + ';"> </div>').prependTo(legend).css('opacity', options.legend.backgroundOpacity);
                }
            }
        }


        // interactive features
        
        var highlights = [],
            redrawTimeout = null;
        
        // returns the data item the mouse is over, or null if none is found
        function findNearbyItem(mouseX, mouseY, seriesFilter) {
            var maxDistance = options.grid.mouseActiveRadius,
                smallestDistance = maxDistance * maxDistance + 1,
                item = null, foundPoint = false, i, j;

            for (i = series.length - 1; i >= 0; --i) {
                if (!seriesFilter(series[i]))
                    continue;
                
                var s = series[i],
                    axisx = s.xaxis,
                    axisy = s.yaxis,
                    points = s.datapoints.points,
                    ps = s.datapoints.pointsize,
                    mx = axisx.c2p(mouseX), // precompute some stuff to make the loop faster
                    my = axisy.c2p(mouseY),
                    maxx = maxDistance / axisx.scale,
                    maxy = maxDistance / axisy.scale;

                // with inverse transforms, we can't use the maxx/maxy
                // optimization, sadly
                if (axisx.options.inverseTransform)
                    maxx = Number.MAX_VALUE;
                if (axisy.options.inverseTransform)
                    maxy = Number.MAX_VALUE;
                
                if (s.lines.show || s.points.show) {
                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1];
                        if (x == null)
                            continue;
                        
                        // For points and lines, the cursor must be within a
                        // certain distance to the data point
                        if (x - mx > maxx || x - mx < -maxx ||
                            y - my > maxy || y - my < -maxy)
                            continue;

                        // We have to calculate distances in pixels, not in
                        // data units, because the scales of the axes may be different
                        var dx = Math.abs(axisx.p2c(x) - mouseX),
                            dy = Math.abs(axisy.p2c(y) - mouseY),
                            dist = dx * dx + dy * dy; // we save the sqrt

                        // use <= to ensure last point takes precedence
                        // (last generally means on top of)
                        if (dist < smallestDistance) {
                            smallestDistance = dist;
                            item = [i, j / ps];
                        }
                    }
                }
                    
                if (s.bars.show && !item) { // no other point can be nearby
                    var barLeft = s.bars.align == "left" ? 0 : -s.bars.barWidth/2,
                        barRight = barLeft + s.bars.barWidth;
                    
                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1], b = points[j + 2];
                        if (x == null)
                            continue;
  
                        // for a bar graph, the cursor must be inside the bar
                        if (series[i].bars.horizontal ? 
                            (mx <= Math.max(b, x) && mx >= Math.min(b, x) && 
                             my >= y + barLeft && my <= y + barRight) :
                            (mx >= x + barLeft && mx <= x + barRight &&
                             my >= Math.min(b, y) && my <= Math.max(b, y)))
                                item = [i, j / ps];
                    }
                }
            }

            if (item) {
                i = item[0];
                j = item[1];
                ps = series[i].datapoints.pointsize;
                
                return { datapoint: series[i].datapoints.points.slice(j * ps, (j + 1) * ps),
                         dataIndex: j,
                         series: series[i],
                         seriesIndex: i };
            }
            
            return null;
        }

        function onMouseMove(e) {
            if (options.grid.hoverable)
                setTimeout(function (){
                    triggerClickHoverEvent("plothover", e,
                                       function (s) { return s["hoverable"] != false; });
                },30);
                
        }

        function onMouseLeave(e) {
            if (options.grid.hoverable)
                setTimeout(function (){
                    triggerClickHoverEvent("plothover", e,
                                       function (s) { return false; });
                 },30);
        }

        function onClick(e) {
            triggerClickHoverEvent("plotclick", e,
                                   function (s) { return s["clickable"] != false; });
        }

        // trigger click or hover event (they send the same parameters
        // so we share their code)
        function triggerClickHoverEvent(eventname, event, seriesFilter) {       	
            var offset = eventHolder.offset(),
                canvasX = event.pageX - offset.left - plotOffset.left,
                canvasY = event.pageY - offset.top - plotOffset.top,
				pos = canvasToAxisCoords({ left: canvasX, top: canvasY });
            pos.pageX = event.pageX;//鼠标在页面上的位置,从页面左上角开始,即是以页面为参考点,不随滑动条移动而变化
            pos.pageY = event.pageY;
            //添加鼠标指针
            pos.clientX = event.clientX;//鼠标在页面上可视区域的位置,从浏览器可视区域左上角开始,即是以浏览器滑动条此刻的滑动到的位置为参考点,随滑动条移动 而变化.
            pos.clientY = event.clientY;

            var item = findNearbyItem(canvasX, canvasY, seriesFilter);

            if (item) {
                // fill in mouse pos for any listeners out there
                item.pageX = parseInt(item.series.xaxis.p2c(item.datapoint[0]) + offset.left + plotOffset.left);
                item.pageY = parseInt(item.series.yaxis.p2c(item.datapoint[1]) + offset.top + plotOffset.top);
            }

            if (options.grid.autoHighlight) {
                // clear auto-highlights
                for (var i = 0; i < highlights.length; ++i) {
                    var h = highlights[i];
                    if (h.auto == eventname &&
                        !(item && h.series == item.series &&
                          h.point[0] == item.datapoint[0] &&
                          h.point[1] == item.datapoint[1]))
                        unhighlight(h.series, h.point);
                }
                
                if (item)
                    highlight(item.series, item.datapoint, eventname);
            }
            placeholder.trigger(eventname, [ pos, item ]);
        }

        function triggerRedrawOverlay() {
            if (!redrawTimeout)
                redrawTimeout = setTimeout(drawOverlay, 30);
        }

        function drawOverlay() {
            redrawTimeout = null;
            // draw highlights
            octx.save();
            octx.clearRect(0, 0, canvasWidth, canvasHeight);
            soctx.clearRect(0, 0, canvasWidth, canvasHeight); //清空subOverlay Sam
            octx.translate(plotOffset.left, plotOffset.top);
            var i, hi;
            for (i = 0; i < highlights.length; ++i) {
                hi = highlights[i];
                if (hi.series.bars.show)
                    drawBarHighlight(hi.series, hi.point);
                else
                    drawPointHighlight(hi.series, hi.point);
            }
            octx.restore();
            executeHooks(hooks.drawOverlay, [octx]);
        }
        
        function highlight(s, point, auto) {
            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }
            var i = indexOfHighlight(s, point);
            if (i == -1) {
                highlights.push({ series: s, point: point, auto: auto });
                triggerRedrawOverlay();
            }
            else if (!auto)
                highlights[i].auto = false;
        }
        // function json2str(o) {
        //     var arr = [];
        //     var fmt = function(s) {
        //         if (typeof s == 'object' && s != null) return json2str(s);
        //         return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s;
        //      }
        //      for (var i in o) arr.push("'" + i + "':" + fmt(o[i]));
        //      return '{' + arr.join(',') + '}';
        //  }
        function unhighlight(s, point) {
            if (s == null && point == null) {
                highlights = [];
                triggerRedrawOverlay();
            }
            
            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number")
                point = s.data[point];

            var i = indexOfHighlight(s, point);
            if (i != -1) {
                highlights.splice(i, 1);
                triggerRedrawOverlay();
            }
        }
        
        function indexOfHighlight(s, p) {
            for (var i = 0; i < highlights.length; ++i) {
                var h = highlights[i];
                if (h.series == s && h.point[0] == p[0]
                    && h.point[1] == p[1])
                    return i;
            }
            return -1;
        }
    
        function drawImgHighlight(series, point){
            var x = point[0], y = point[1],
                axisx = series.xaxis, axisy = series.yaxis;
        }
        /**
        Sam 2013-7-23
        */
        function drawSubline(series,x,y){
            //Sam 画辅助线
            soctx.save();
            if(series.points.fillColor){
                soctx.fillStyle = series.points.fillColor;
            }
            soctx.translate(plotOffset.left, plotOffset.top);
			soctx.beginPath();
            soctx.fillRect(x,y,1,canvasHeight);
            soctx.restore();
        }
        
        function drawPointHighlight(series, point) {
            var x = point[0], y = point[1],
                axisx = series.xaxis, axisy = series.yaxis;
            
            if (x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                return;
            
            var pointRadius = series.points.radius + series.points.lineWidth / 2;
            octx.lineWidth = pointRadius;
            octx.strokeStyle = $.color.parse(series.color).scale('a', 1).toString();
            var radius = 1.5 * pointRadius,
                x = axisx.p2c(x),
                y = axisy.p2c(y);
            octx.beginPath();
            if (series.points.symbol == "circle"){
                octx.lineWidth = series.bars.lineWidth;//SAM
                octx.arc(x, y, radius, 0, 2 * Math.PI, false);              
            }else
                series.points.symbol(octx, x, y, radius, false);
            octx.closePath();
            octx.stroke();
            //填充+画辅助线 Sam

            if(series.points.fill && series.points.fillColor){
                octx.fillStyle = series.points.fillColor;
                octx.fill();
            }
            if(series.subline) drawSubline(series, x,y);
        }

        function drawBarHighlight(series, point) {
            octx.lineWidth = series.bars.lineWidth;
            octx.strokeStyle = $.color.parse(series.color).scale('a', 0.5).toString();
            var fillStyle = $.color.parse(series.color).scale('a', 0.5).toString();
            var barLeft = series.bars.align == "left" ? 0 : -series.bars.barWidth/2;
            drawBar(point[0], point[1], point[2] || 0, barLeft, barLeft + series.bars.barWidth,
                    0, function () { return fillStyle; }, series.xaxis, series.yaxis, octx, series.bars.horizontal, series.bars.lineWidth);
        }

        function getColorOrGradient(spec, bottom, top, defaultColor) {
            if (typeof spec == "string")
                return spec;
            else {
                // assume this is a gradient spec; IE currently only
                // supports a simple vertical gradient properly, so that's
                // what we support too
                var gradient = ctx.createLinearGradient(0, top, 0, bottom);
                
                for (var i = 0, l = spec.colors.length; i < l; ++i) {
                    var c = spec.colors[i];
                    if (typeof c != "string") {
                        var co = $.color.parse(defaultColor);
                        if (c.brightness != null)
                            co = co.scale('rgb', c.brightness)
                        if (c.opacity != null)
                            co.a *= c.opacity;
                        c = co.toString();
                    }
                    gradient.addColorStop(i / (l - 1), c);
                }
                
                return gradient;
            }
        }
    }

    $.plot = function(placeholder, data, options) {
        var plot = new Plot($(placeholder), data, options, $.plot.plugins);
        return plot;
    };

    $.plot.version = "0.7";
    
    $.plot.plugins = [];

    // returns a string with the date d formatted according to fmt
    $.plot.formatDate = function(d, fmt, monthNames) {
        var leftPad = function(n) {
            n = "" + n;
            return n.length == 1 ? "0" + n : n;
        };
        
        var r = [];
        var escape = false, padNext = false;
        var hours = d.getUTCHours();
        var isAM = hours < 12;
        if (monthNames == null)
            monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        if (fmt.search(/%p|%P/) != -1) {
            if (hours > 12) {
                hours = hours - 12;
            } else if (hours == 0) {
                hours = 12;
            }
        }
        for (var i = 0; i < fmt.length; ++i) {
            var c = fmt.charAt(i);
            
            if (escape) {
                switch (c) {
                case 'h': c = "" + hours; break;
                case 'H': c = leftPad(hours); break;
                case 'M': c = leftPad(d.getUTCMinutes()); break;
                case 'S': c = leftPad(d.getUTCSeconds()); break;
                case 'd': c = "" + d.getUTCDate(); break;
                case 'm': c = "" + (d.getUTCMonth() + 1); break;
                case 'y': c = "" + d.getUTCFullYear(); break;
                case 'b': c = "" + monthNames[d.getUTCMonth()]; break;
                case 'p': c = (isAM) ? ("" + "am") : ("" + "pm"); break;
                case 'P': c = (isAM) ? ("" + "AM") : ("" + "PM"); break;
                case '0': c = ""; padNext = true; break;
                }
                if (c && padNext) {
                    c = leftPad(c);
                    padNext = false;
                }
                r.push(c);
                if (!padNext)
                    escape = false;
            }
            else {
                if (c == "%")
                    escape = true;
                else
                    r.push(c);
            }
        }
        return r.join("");
    };
    
    // round to nearby lower multiple of base
    function floorInBase(n, base) {
        return base * Math.floor(n / base);
    }
    
})(jQuery);
;
var backgroundImg = chrome.extension.getURL("images/background_new.png");
var debug = false;

function HistPriceDrawer(){
	var drawer = this;
	drawer.targets = [];	
	
	if(typeof HistPriceDrawer._initialized == 'undefined'){
		HistPriceDrawer.DRAW_ALL = 0;
		/**
		以后读写flot插件内部方法等操作，可在init函数里做
		by Sam
		*/
		$.plot.plugins.push({
			init:function(plot){
				/**
				plot.highlight = function(){...};
				*/
			}
		})
		HistPriceDrawer.prototype.remove = function($conObjs){
			if(!($conObjs instanceof jQuery)){
				$conObjs = $($conObjs);
			}
			if($conObjs.length==0){
//				console.log("无效选择器");
				return false;
			}
			var objArray = [];
			$conObjs.each(function(i,$obj){
				objArray.push($obj[0]);
			})
			
			drawer.targets = drawer.targets.reduce(function(prev,target){
				if($.inArray(target['obj'][0],objArray) < 0){
					prev.push(target);
				}else{
					for(var key in target){
						target[key] = null;
					}
				}
				return prev;
			},[]);
			$conObjs.remove();
		};
		/**
		 * 浮动价格曲线的数据请用这个函数来add（不需要做转化）
		 * @author  Sam
		 * @param {Object} qDate
		 * @param {Object} $conObjs
		 */
		HistPriceDrawer.prototype.addLocalCalculatedData = function(qDate,$conObjs){
			if(!($conObjs instanceof jQuery)){
				$conObjs = $($conObjs);
			}
			if($conObjs.length==0){
//				console.log("无效选择器");
				return false;
			}
			var hpr = qDate.hpr,
				lpr = qDate.lpr,
				padData = [],
				diffArr = qDate.diffpr,
				searchArr = qDate.searchArr,
				findIndex = 1,
				ed = qDate.ed,
				st = qDate.bd;
			var tickWeight = qDate.tickWeight || 2;
			qDate.info.map(function(data){
				padData.push([data['dt'],getPrFix(data['pr'],2)]);
			});
			padData.push([ed+86400000,getPrFix(qDate.info[qDate.info.length-1]['pr'],2)]);
			var tick = [];
			var yaxisFix = (hpr-lpr)*0.2;
			var tickSize = 5 * tickWeight;
            for(var i=st;i<ed;i+=tickSize * 86400000){
                tick.push(i); 
            }
            tick[tick.length] = tick[tick.length - 1] + tickSize * 86400000;
            var configObj = {
                series: {
                    lines: {show: true, fillColor:"#ff3636", lineWidth:2},
                    points: {
                    	show: false,
                    	fillColor:"#ffffff", 
                    	symbol:function(octx, x, y, radius){
                    		try{
                    			octx.arc(x, y, 2, 0, 2 * Math.PI);
                    		}catch(e){
                    			
                    		}
                    	}
                    },
                    bars: {lineWidth:5},
                    subline: true
                },
                xaxis: {
                    ticks : tick,
                    mode:"time",
                    tickSize : [ tickSize ,'day'],
                    timeformat:"%m-%d",
                    min:st,
					tickFormatter:function(v,axis){
						return "";
						if(v==axis.datamax){
                            v -= 86400000;
                        }
                        var d = new Date(v);
                        return (d.getMonth() + 1)+"-"+d.getDate();
                    }
                },
				yaxis:{
					max:hpr+yaxisFix,
					min:Math.max.apply(Math,[0,lpr-yaxisFix])
				},
                grid: {
                    hoverable: true,
                    clickable: true,
                    autoHighlight: false,
                    backgroundColor : '#ffffff',
                    borderColor: '#eeeeee',
                    minBorderMargin : 1,
                    markings: function(axes) {
                        var markings = [];
                        for(var x = Math.floor(axes.yaxis.min); x < axes.yaxis.max; x += (axes.yaxis.tickSize * 2))
                        markings.push({ yaxis: { from: x, to: x + axes.yaxis.tickSize }});
                        return markings;
                    }
                },
				haveCoordinate : true,
				haveMover : true,
				showLastPoint : false,
				showLowestPoint : false
            };
            if(diffArr.length < 2){
                configObj.yaxis = {
                    min : getPrFix( lpr*0.95),
                    max : getPrFix( hpr*1.05)
                }
            }
			var data = {
				data:padData,
				sArray:searchArr,
				hiPrice:hpr,
				loPrice:lpr,
				st:st,
				ed:ed,
				tick:tick,
				config:configObj
			};
			for(var i=0;i<$conObjs.length;++i){
				var $conObj = $conObjs.eq(i),
					searchResult = searchInTargets($conObj[0]),
					target = {obj:$conObj.empty(),data:data,redrawable:true,signList:[],sameFlag:null,plot:null};
				if(searchResult == null){
					drawer.targets.push(target);
				}else{
					searchResult = target;
				}
			}
		}
/**
Old addData Method
@To Be Deprcated In Future- By Sam
--has some bugs;
*/
//addData		
        HistPriceDrawer.prototype.addData = function(qDate,$conObjs){
            if(!($conObjs instanceof jQuery)){
				$conObjs = $($conObjs);
			}
			if($conObjs.length==0){
//				console.log("无效选择器");
				return false;
			}
			var SECONDS_MONTHLY = 30 * 86400;
			var hpr = qDate.hpr,
				lpr = qDate.lpr,
				padData = [],
				diffArr = [],
				searchArr = [],
				descMap = {},
				findIndex = 1,
				ed = getDayTime(new Date())/1000,
				st,
				duration,
				tickWeight,
				curTimestamp;
			try{
				st = new Date(qDate.info[0].dt).getTime()/1000;
				duration = ed - st;
			}catch(e){
				duration = 2*SECONDS_MONTHLY;
				st = ed - duration;
			}
			if(duration <= SECONDS_MONTHLY){
				tickWeight = 1;
			}else if(duration <= 2*SECONDS_MONTHLY){
				tickWeight = 2;
			}else if(duration <= 4*SECONDS_MONTHLY){
				tickWeight = 4;
			}else{
				tickWeight = 6;
			}
			st = ed - tickWeight * SECONDS_MONTHLY;			
            for(var i = 0;i < qDate.info.length;++i){
                curTimestamp = getDataTime(qDate.info[i]['dt']);
                
                if(!qDate.info[i] || curTimestamp < st*1000){
                    continue;
                }
//                if(!(i%10)) qDate.info[i]['desc'] = 'test';
                if( qDate.info[i]['info'] && qDate.info[i]['info']['desc'] ){
                    descMap[qDate.info[i]['dt']] = qDate.info[i]['info']['desc'];
                }

				qDate.info[i]['pr'] = getPrFix(qDate.info[i]['pr'],2);
                if(diffArr.length === 0 || diffArr[diffArr.length - 1] != qDate.info[i]['pr']){
                    diffArr[diffArr.length] = qDate.info[i]['pr'];
                    if(searchArr.length > 0 ) {
                        searchArr[searchArr.length] = [curTimestamp,qDate.info[i-1]['pr'],curTimestamp,findIndex];
                        searchArr[searchArr.length] = [curTimestamp,qDate.info[i]['pr'],++findIndex];
                    }else{
                        searchArr[searchArr.length] = [curTimestamp,qDate.info[i]['pr'],curTimestamp,findIndex];
                    }
                }
                padData.push([curTimestamp,qDate.info[i]['pr'], qDate.info[i]['info'] && qDate.info[i]['info']['desc']]);
                if(i == qDate.info.length - 1){
					var _tmpDate = curTimestamp;
					while( _tmpDate < ed*1000){
						_tmpDate += 86400000;
						padData.push([_tmpDate,qDate.info[i]['pr'], qDate.info[i]['pr'], qDate.info[i]['info'] && qDate.info[i]['info']['desc']]);
						if(searchArr.length > 0 ) {
							searchArr[searchArr.length] = [_tmpDate,qDate.info[i]['pr'],_tmpDate,findIndex];
							searchArr[searchArr.length] = [_tmpDate,qDate.info[i]['pr'],++findIndex];
						}else{
							searchArr[searchArr.length] = [curTimestamp,qDate.info[i]['pr'],curTimestamp,findIndex];
						}
					}
                    padData.push([( ed * 1000 + 86400000),qDate.info[i]['pr'], qDate.info[i]['info'] && qDate.info[i]['info']['desc']]);
                    searchArr[searchArr.length] = [( ed * 1000 + 86400000), qDate.info[i]['pr'],findIndex];
                }
            }
	//		此处注释勿删除
	//		var MathMax = Math.max.apply(Math,diffArr);
    //     	var MathMin = Math.min.apply(Math,diffArr);
    //	    var tmpHr = MathMax > hpr ? MathMax : hpr ;
    //		var tmpLr = MathMin < lpr ? MathMin : lpr ;
			var tmpHr = Math.max.apply(Math,diffArr),
				tmpLr = Math.min.apply(Math,diffArr);
			var tick = [];
			var yaxisFix = (tmpHr-tmpLr)*0.2;
			var tickSize = 5 * tickWeight;
            for(var i=st;i<ed;i=(i +(86400 * tickSize))){
                tick.push(i*1000);
            }
            tick[tick.length] = tick[tick.length - 1] + ( 86400 * tickSize * 1000); 
			var configObj = {
                series: {
                    lines: {show: true, fillColor:"#ff3636", lineWidth: 2},
                    points: {
                    	show: false,
                    	fillColor:"#ff3636", 
                    	symbol:function(octx, x, y, radius){
                    		try{
                    			octx.arc(x, y, 3, 0, 2 * Math.PI);
                    		}catch(e){
                    			
                    		}
                    	}	                    
                    },
                    eventpoints: {
                    	show: true,
                    	fillColor:"#ffffff", 
                    	symbol:function(octx, x, y, radius){
                    		try{
                    			octx.arc(x, y, 3, 0, 2 * Math.PI);
                    		}catch(e){
                    			
                    		}
                    	}	                    
                    },
                    bars: {lineWidth:5},
                    subline: true
                },
                xaxis: {
                    ticks : tick,
                    mode:"time",
                    tickSize : [tickSize ,'day'],
                    tickColor:'#eeeeee',
                    labelHeight: 36,
                    timeformat:"%m-%d",
                    min:st*1000,
					tickFormatter:function(v,axis){
                        if(v==axis.datamax){
                            v -= 86400000;
                        }
                        var d = new Date(v);
                        return (d.getMonth() + 1)+"-"+d.getDate();
                    }
                },
				yaxis:{
                    tickColor:'#eeeeee',
					max:tmpHr+yaxisFix,
					min:Math.max.apply(Math,[0,tmpLr-yaxisFix])
				},
                grid: {
                    hoverable: true,
                    clickable: true,
                    autoHighlight: false,
                    backgroundColor : '#ffffff',
                    borderColor: '#eeeeee',
                    color: '#929292',
                    minBorderMargin : 1,
                    markings: function(axes) {
                        var markings = [];
                        for(var x = Math.floor(axes.yaxis.min); x < axes.yaxis.max; x += (axes.yaxis.tickSize * 2))
                        markings.push({ yaxis: { from: x, to: x + axes.yaxis.tickSize }});
                        return markings;
                    }
                },
				haveCoordinate : true,
				haveMover : true,
				showLastPoint : true,
				showLowestPoint : false
            };
            if(diffArr.length < 2){
                configObj.yaxis = {
                    min : getPrFix( tmpLr*0.95),
                    max : getPrFix( tmpHr*1.05)
                }
            }
			var data = {
				data:padData,
				sArray:searchArr,
				descMap: descMap,
				hiPrice:tmpHr,
				loPrice:tmpLr,
				st:st,
				ed:ed,
				tick:tick,
				config:configObj
			};
			for(var i=0;i<$conObjs.length;++i){
				var $conObj = $conObjs.eq(i),
					searchResult = searchInTargets($conObj[0]),
					target = {obj:$conObj.empty(),data:data,redrawable:true,signList:[],sameFlag:null,plot:null};
				if(searchResult == null){
					drawer.targets.push(target);
				}else{
					searchResult = target;
				}
			}
			return data;
        };
        HistPriceDrawer.prototype.draw = function($conObjs,exConfObj){
			var targets,i;
			if($conObjs == HistPriceDrawer.DRAW_ALL){
				targets = drawer.targets;
			}else{
				targets = [];
				if(!($conObjs instanceof jQuery)){
					$conObjs = $($conObjs);
				}
				if($conObjs.length==0){
//					console.log("无效选择器");
					return false;
				}
				for(i=0;i<$conObjs.length;++i){
					var $conObj = $conObjs.eq(i),
						searchResult = searchInTargets($conObj[0]);
					if(searchResult != null){
						targets.push(searchResult);
					}
				}
			}
			$.each(targets, function(i, target){
				var data = target.data;
				if(target.redrawable && data.data.length>0){
					var config = $.extend(true,{},data.config,exConfObj),
						container = target.obj,
						plot = $.plot(container,[{data:data.data, color:"#ff3636"}],config);
					target.plot = plot;
					container.parent().find('#lastHeight').text('¥ ' + getPrFix(data.hiPrice));
					container.parent().find('#lastLow').text('¥ ' + getPrFix(data.loPrice));
					if(config.haveMover){
						initMoverDivs(container, plot.getPlotOffset());
						container.bind("plothover", function (event, pos, item) {
							//已隐藏时不触发
							if(!plot.getPlaceholder().is(':visible')){
								return false;
							}
							if(Math.round(pos.x1) < ((data.st*1000)) || pos.x1 >= (data.tick[data.tick.length-1] - 86400000/10)){
								return false;
							}
							if(item){
								moveDrow(target,item.datapoint[0], item.datapoint[1]);
							}else{
							   var index = findSarch(pos.x1,data.sArray);
							   if(index.length > 3){
									var _clientX = index[0];
									if(index[3] == 1){
										_clientX = Math.round(pos.x1);
										if(index[2] - index[0] == 86400000){
											_clientX = Math.round(pos.x1) - 60000000;
										}
									}
									if(pos.x1<index[0]){
										moveDrow(target, _clientX, -1);
									}else{
										moveDrow(target, _clientX,  index[1]);
									}
							   }else{
									moveDrow(target,Math.round(pos.x1), index[1]);
							   }
							}
						});
						container.mouseover(function (e){
							var id = $(e.target).attr('id');
							if(id==''){
								return false;
							}
							var clearPoint = setTimeout(function (){
								var xieInfo = container.find('#xieInfo');
								if(xieInfo.is(':visible')){
									xieInfo.hide();
									drawHight(plot,target.signList[1],false);
								}
							},300);
							return false;
						});
					}
					if(config.showLowestPoint){
						var datas = data.data,
							i = datas.length-2, 
							lowestDayData;
						while(i >= 0){
							if(Math.abs(datas[i][1] - data.loPrice) < 0.01){
								lowestDayData = datas[i];
								break;
							}
							--i;
						}
						moveDrow(target,lowestDayData[0], lowestDayData[1],true);
						insertLopriceHint(plot,lowestDayData,container);				
						if(config.haveMover){
							container.mouseover(function(e){
								removeLopriceHint(container);
								return false;
							});
						}
					}else if(config.showLastPoint){
						if(config.haveMover){
							var lastDayData = data.data[data.data.length-2];
							moveDrow(target,lastDayData[0], lastDayData[1]);							
						}else{
							drawHight(plot,data.data[data.data.length-2],true);
						}
					}
					target.redrawable = false;
				}
			});
            return false;
        };
		
		function getDayTime(date){
			return new Date(date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()).getTime();
		}
		function pageX(elem){
			return elem.offsetParent?(elem.offsetLeft+pageX(elem.offsetParent)):elem.offsetLeft;
        }
		
        //初始化提示框
        function initMoverDivs(container, offset){
            var xieInfo = "<div id='xieInfo' class='hover-data' style='display: none;position:absolute;left:0;bottom:"+offset.bottom+"px;width:0px;height:0px;z-index: 100001;'>\
                                <div id='price' style='position:absolute;color:#fff;background-color:#ff3636;font-size:12px;white-space:nowrap;height: 20px;padding:0 10px;line-height: 20px;-ms-transform:translateX(-50%);-webkit-transform:translateX(-50%);transform:translateX(-50%);'></div>\
                                <div id='arrowIcon' style='width:0px;height:0px;border-width:4px;border-color:#ff3636 transparent transparent;border-style:solid;position:absolute;left:-4px;'></div>\
                                <div id='dateTime' style='position:absolute;font-size:12px;top:-1px;display: block;white-space:nowrap;height: 20px;padding:0 6px;line-height: 20px;border:1px solid #ff3636;background-color:rgba(255,255,255,0.8); color:#ff3636;-ms-transform:translateX(-50%);-webkit-transform:translateX(-50%);transform:translateX(-50%);'></div>\
                            </div>";
            container.append(xieInfo);
        }
		
		//格式化价格数字
		function getPrFix(pri,precision){
			if( !pri ){
				return 0;
			}
			
			var _price = pri.toString();
			var _p = _price.indexOf('.');
			var pres = precision || 2;
			if(_p>-1){
				_p++;
				var fNums = [], end = Math.min(pres+_p,_price.length);
				while(_p<end){
					fNums.push(_price.substr(_p++,1));
				}
				while(fNums.length>0 && fNums[fNums.length-1]=="0"){
					fNums.pop();
				}
				if(fNums.length>0){
					_price = parseInt(_price) + '.' + fNums.join('');
				}else{
					_price = parseInt(_price) + '.0';
				}
			}
			return Number(_price);
		}

		function moveDrow(target,posX, price, noTip){
			signLists(target,Math.round(posX), price,  noTip);
			return false;
		};
		
		function signLists(target,clientX, price, noTip){
			var signList = target.signList,
				plot = target.plot;
			if(signList.length ==0){
				signList[0] = signList[1] = [clientX ,price];
				if(!noTip){
					moveTip(target, price, signList[1]);	
				}
				drawHight(plot,signList[1],true, noTip);
			}else{
				signList[1] = [clientX ,price];
				if(signList[0] && signList[1]){
					if(signList[0][0] !== signList[1][0]){
						moveTip(target,-1);
						drawHight(plot,signList[0],false, noTip);
						signList[0] = signList[1];
						moveTip(target, price, signList[1]);
						drawHight(plot,signList[1],true, noTip);
					}else{
						clearTimeout(target.sameFlag);
						target.sameFlag = setTimeout(function (){
							moveTip(target,-1);
							drawHight(plot,signList[1],false, noTip);
						},10000);
					}
				}else{
					signList[0] = signList[1];
					moveTip(target,-1);
					drawHight(plot,signList[1],false, noTip);
				}
			}
			return false;
		}
		
		function findSarch(x, searchAr){
			var _search = searchAr;
			var len = _search.length;
			if(len>1){
				var midd = Math.ceil(len/2);
				var middArr = _search[midd];
				if(x > middArr[0]){
					return findSarch(x, _search.slice(midd,len));
				}else{
					return findSarch(x, _search.slice(0,midd));
				}
			}else{
				 return _search[0];
			}
		}
		function drawHight(plot,dataPoint, flag, noSubline){
			var series = plot.getData()[0];
			series.color = "#ff3636";
			if(flag){
				if(noSubline && series.subline){
					series.subline = false;
					plot.highlight(series, dataPoint);
					setTimeout(function(){
						series.subline = true;
					},300);
				}else{
					plot.highlight(series, dataPoint);
				}
			}else{
				plot.unhighlight(series, dataPoint);
			}
			return false;
		}
		function insertLopriceHint(plot,dataPoint,container){
			var s = plot.getData()[0],
				x = s.xaxis.p2c(dataPoint[0]),
				y = s.yaxis.p2c(dataPoint[1]),
				styleScript = $('#gwd_float_curve_lowest_price_hint'),
				hintDiv, hintWidth;
			if(styleScript.length == 0){
				$('body').append('<style id="gwd_float_curve_lowest_price_hint">\
									.mmz_placeholder #loprice_hint_holder {height:12px;line-height:12px;background-color:#ff3636;padding:4px 8px;position:absolute;z-index:1000001;color:#ffffff; visibility:hidden;}\
									.mmz_placeholder #loprice_hint_holder .gwd_small_tail {width:0;height:0;position:absolute;top:20px;border-top:3px solid #ff3636;}\
									.mmz_placeholder #loprice_hint_holder .gwd_small_tail.gwd_ns_left {left:0;border-right:5px solid transparent;}\
									.mmz_placeholder #loprice_hint_holder .gwd_small_tail.gwd_ns_right {right:0;border-left:5px solid transparent;}\
								</style>');
			}
			hintDiv = $('<div id="loprice_hint_holder"><div class="gwd_small_tail"></div>¥ '+getPrFix(dataPoint[1])+'</div>').appendTo(container);
			hintWidth = hintDiv[0].offsetWidth;
			if(x > plot.width() - hintWidth - 4){
				x = x - hintWidth + plot.getPlotOffset().left;
//				hintDiv.find('.gwd_small_tail').css('left',hintWidth-6);
				hintDiv.find('.gwd_small_tail').addClass('gwd_ns_right');
			}else{
				x += 2;
				hintDiv.find('.gwd_small_tail').addClass('gwd_ns_left');
			}
			hintDiv.css({'top':y - 28, 'left':x, 'visibility':'visible'});
		}
		function removeLopriceHint(container){
			container.find('#loprice_hint_holder').remove();
		}
		function moveTip(target,price, dataPoint){
			var container = target.obj;
			var descMap = target.data.descMap || {};
			setTimeout(function (){
				if(price == -1){
					container.find('#xieInfo').hide();
				}else{
					var plot = target.plot;
					var hOffset = plot.height() - (((plot.getData()[0]).yaxis).p2c(dataPoint[1]));
					var date = new Date(dataPoint[0]);
					var xinif = container.find('#xieInfo');
					var priceCon = xinif.find('#price');
					var dateCon = xinif.find('#dateTime');
					var arrow = xinif.find('#arrowIcon');
					
					var dYear = date.getFullYear();
					var dMon = date.getMonth() + 1;
					var dDay = date.getDate();
					dMon = dMon < 10 ? '0' + dMon : dMon;
					dDay = dDay < 10 ? '0' + dDay : dDay;
					
					var dKey = dYear + '/' + dMon + '/' + dDay;
					priceCon.text(descMap[dKey] ||('¥ '+getPrFix(price)) );
					dateCon.text(dYear + '-' + dMon + '-' + dDay);
					priceCon.css('bottom',hOffset+10+'px');
					arrow.css('bottom',hOffset+1+'px');
					xinif.css('left',plot.pointOffset({x:dataPoint[0],y:dataPoint[1]}).left).show();
				}
			},50);
			return false;
		}
		function searchInTargets(node){
			var targets = drawer.targets,
				len = targets.length;
			for(var i=0;i<len;++i){
				var target = targets[i];
				if(target["obj"][0] ==  node){
					return target;
				}
			}
			return null;
		}
        HistPriceDrawer._initialized = true;
    }
}



//格式化时间
function getDataTime(oldTime){
	var _time = typeof oldTime ==='string' ? oldTime : oldTime.toString();
	if(_time.indexOf('/') == -1){
		_time = _time.replace(/(\d{0,4})(\d{0,2})(\d{0,2})/i,function (a,b,c,d){ return b+'/'+c+'/'+d });
	}
	return (new Date(_time)).getTime();
}
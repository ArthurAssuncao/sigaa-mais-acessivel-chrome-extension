!function n(o,i,a){function u(e,t){if(!i[e]){if(!o[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(c)return c(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}r=i[e]={exports:{}},o[e][0].call(r.exports,function(t){return u(o[e][1][t]||t)},r,r.exports,n,o,i,a)}return i[e].exports}for(var c="function"==typeof require&&require,t=0;t<a.length;t++)u(a[t]);return u}({1:[function(t,e,r){function c(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}e.exports=function(u){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=u.apply(t,a);function o(t){c(n,e,r,o,i,"next",t)}function i(t){c(n,e,r,o,i,"throw",t)}o(void 0)})}},e.exports.__esModule=!0,e.exports.default=e.exports},{}],2:[function(t,e,r){e.exports=function(t){return t&&t.__esModule?t:{default:t}},e.exports.__esModule=!0,e.exports.default=e.exports},{}],3:[function(t,e,r){e.exports=t("regenerator-runtime")},{"regenerator-runtime":4}],4:[function(t,e,r){e=function(a){"use strict";var c,u=Object.prototype,s=u.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},n=t.iterator||"@@iterator",l=t.asyncIterator||"@@asyncIterator",h=t.toStringTag||"@@toStringTag";function r(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{r({},"")}catch(t){r=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o,i,a,u,e=e&&e.prototype instanceof w?e:w,e=Object.create(e.prototype),n=new O(n||[]);return e._invoke=(o=t,i=r,a=n,u=y,function(t,e){if(u===v)throw new Error("Generator is already running");if(u===m){if("throw"===t)throw e;return k()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){r=function t(e,r){var n=e.iterator[r.method];if(n===c){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=c,t(e,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}n=d(n,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;n=n.arg;if(!n)return r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f;{if(!n.done)return n;r[e.resultName]=n.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=c)}r.delegate=null;return f}(r,a);if(r){if(r===f)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(u===y)throw u=m,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u=v;r=d(o,i,a);if("normal"===r.type){if(u=a.done?m:g,r.arg!==f)return{value:r.arg,done:a.done}}else"throw"===r.type&&(u=m,a.method="throw",a.arg=r.arg)}}),e}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=p;var y="suspendedStart",g="suspendedYield",v="executing",m="completed",f={};function w(){}function x(){}function e(){}var t={},o=(r(t,n,function(){return this}),Object.getPrototypeOf),o=o&&o(o(j([]))),i=(o&&o!==u&&s.call(o,n)&&(t=o),e.prototype=w.prototype=Object.create(t));function b(t){["next","throw","return"].forEach(function(e){r(t,e,function(t){return this._invoke(e,t)})})}function E(a,u){var e;this._invoke=function(r,n){function t(){return new u(function(t,e){!function e(t,r,n,o){var i,t=d(a[t],a,r);if("throw"!==t.type)return(r=(i=t.arg).value)&&"object"==typeof r&&s.call(r,"__await")?u.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):u.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(s.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=c,t.done=!0,t}).next=t}return{next:k}}function k(){return{value:c,done:!0}}return r(i,"constructor",x.prototype=e),r(e,"constructor",x),x.displayName=r(e,h,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,e):(t.__proto__=e,r(t,h,"GeneratorFunction")),t.prototype=Object.create(i),t},a.awrap=function(t){return{__await:t}},b(E.prototype),r(E.prototype,l,function(){return this}),a.AsyncIterator=E,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new E(p(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(i),r(i,h,"Generator"),r(i,n,function(){return this}),r(i,"toString",function(){return"[object Generator]"}),a.keys=function(r){var t,n=[];for(t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=c)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=c),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=s.call(o,"catchLoc"),u=s.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,_(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=c),f}},a}("object"==typeof e?e.exports:{});try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},{}],5:[function(t,e,r){"use strict";var n=t("@babel/runtime/helpers/interopRequireDefault"),o=n(t("@babel/runtime/regenerator")),i=n(t("@babel/runtime/helpers/asyncToGenerator"));function a(){return(a=(0,i.default)(o.default.mark(function t(){return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("popup.js start"),document.getElementById("shutdown-icon").addEventListener("click",c),e=void 0,(e=chrome.runtime.connect({name:"sigaa-extension"})).postMessage({action:"getState"}),e.onMessage.addListener(function(t){var e;"ok"==t.response&&(e=document.getElementById("shutdown-button"),t=t.state,console.log("extension "+t),e.dataset.active="true"===t?"true":"false")});case 4:case"end":return t.stop()}var e},t)}))).apply(this,arguments)}function u(t){chrome.runtime.sendMessage({action:"activeExtension",value:t})}function c(){var e,t=document.getElementById("shutdown-button"),r=!("true"===t.dataset.active),t=(t.dataset.active=r,document.getElementById("shutdown-label"));r?(t.textContent="Extensão Ativada",u(!0)):u(!(t.textContent="Extensão Desativada")),e=r,chrome.tabs.query({active:!0,currentWindow:!0},function(t){chrome.tabs.sendMessage(t[0].id,{changeState:!0,newState:e},function(t){})})}window.onload=function(){!function(){a.apply(this,arguments)}()}},{"@babel/runtime/helpers/asyncToGenerator":1,"@babel/runtime/helpers/interopRequireDefault":2,"@babel/runtime/regenerator":3}]},{},[5]);
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).assetsRetry=e()}(this,function(){"use strict";function o(t){return t}function u(){}function i(t,e,n){t[e]=t[e]||n}function r(t,e){try{return"function"==typeof t[e]}catch(t){return!1}}function c(t){return Array.isArray(t)?t.reduce(function(t,e,n,r){return t[e]=r[(n+1)%r.length],t},{}):t}function d(e,t){return Object.keys(t).filter(function(t){return-1<e.indexOf(t)}).sort(function(t,e){return e.length-t.length})[0]}var e,h="retryTimes",v="succeeded",m="failed",a="maxRetryCount",f="onRetry",p="domain",g="_$assetsRetryScript",E="_$assetsRetryOnerror",s="script",b="data-assets-retry-hooked",O="data-retry-id",l=window.document,y=Object.prototype.hasOwnProperty,j=function(t,e,n){var r=t.indexOf(e);return-1===r?t:t.substring(0,r)+n+t.substring(r+e.length)},L=function(t){return[].slice.call(t)},R=function(e,t,n){if(void 0===n&&(n=u),"loading"!==l.readyState||/Edge|MSIE|rv:/i.test(navigator.userAgent)){var r=l.createElement(s);Object.keys(HTMLScriptElement.prototype).forEach(function(t){if("src"!==t&&e[t]&&"object"!=typeof e[t])try{r[t]=e[t]}catch(t){}}),r.src=t,r.onload=e.onload,r.onerror=e.onerror,r.setAttribute(O,w());var o=e.getAttribute("nonce");o&&r.setAttribute("nonce",o),l.getElementsByTagName("head")[0].appendChild(r)}else{var i=w(),c=e.outerHTML.replace(/data-retry-id="[^"]+"/,"").replace(/src=(?:"[^"]+"|.+)([ >])/,O+"="+i+' src="'+t+'"$1');l.write(c);var a=l.querySelector("script["+O+'="'+i+'"]');a&&(a.onload=n)}},S=function(t){return t.rules?t.rules:t.cssRules?t.cssRules:[]},T=function(e,t,n){var r=l.createElement("link");Object.keys(HTMLLinkElement.prototype).forEach(function(t){if("href"!==t&&e[t]&&"object"!=typeof e[t])try{r[t]=e[t]}catch(t){}}),r.href=t,r.onload=n,r.setAttribute(O,w()),l.getElementsByTagName("head")[0].appendChild(r)},k=function(t){return t?t instanceof HTMLElement?[t.nodeName,t.src,t.href,t.getAttribute(O)].join(";"):"not_supported":"null"},w=function(){return Math.random().toString(36).slice(2)},M={},H=function(t,e){var n,r=d(t,e);if(!r)return[];var o,i,c=(i=r,(o=t).substr(o.indexOf(i)+i.length,o.length));return M[c]=M[c]||((n={})[h]=0,n[m]=[],n[v]=[],n),[r,M[c]]};try{e=function(t){for(var e=Object.getPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__},n=Object.keys(t);e(t);)n=n.concat(Object.keys(e(t))),t=e(t);return n.filter(function(t){return"constructor"!==t})}(HTMLScriptElement.prototype)}catch(t){}function A(s,t){var l=t[a],d=c(t[p]),y=t[f];return e.reduce(function(t,e){var n=r(HTMLScriptElement.prototype,e);return t[e]=n?{value:function(){return s[g][e].apply(s[g],arguments)}}:{set:function(o){return"onerror"===e?(s[E]=o,void(s[g].onerror=function(t){t.stopPropagation&&t.stopPropagation();var e=s[g].src,n=H(e,d),r=n[0],o=n[1];if(r&&o){var i=j(e,r,d[r]),c=y(i,e,o);if(null!==c){if("string"!=typeof c)throw new Error("a string should be returned in `onRetry` function");var a,u,f;o[h]<=l?R(s[g],c):(a=s[E],u=s[g],f=t,"function"==typeof a&&a.call(u,f))}}})):"onload"===e?(s._$assetsRetryOnload=o,void(s[g].onload=function(t){var e=s[g].src,n=H(e,d),r=(n[0],n[1]);r&&(-1===r[m].indexOf(e)&&r[v].push(e),o&&!o._called&&(o._called=!0,o.call(s[g],t)))})):void(s[g][e]=o)},get:function(){return s[g][e]}},t},{})}var x=function(n){var r=l.createElement;l.createElement=function(t,e){return t===s?function(t,e){var n;t.setAttribute(b,"true");var r=((n={})[g]=t,n[E]=u,n),o=A(r,e);return Object.defineProperties(r,o),r}(r.call(l,s),n):r.call(l,t,e)},l.createElement.toString=function(){return"function createElement() { [native code] }"}},_=function(n){Object.keys(n).filter(function(t){return r(n,t)}).forEach(function(t){var e=n[t];n[t]=function(){var t=[].slice.call(arguments).map(function(t){return y.call(t,g)?t[g]:t});return e.apply(this,t)},/^\w+$/.test(t)&&(n[t].toString=new Function("return 'function "+t+"() { [native code] }'"))})};var I={};function P(y){function r(t){if(t){var e,n=t.target||t.srcElement,r=y.domain,o=(e=n)instanceof HTMLScriptElement||e instanceof HTMLImageElement?e.src:e instanceof HTMLLinkElement?e.href:null;if(o){var i=H(o,r),c=i[0],a=i[1];if(a&&c&&(a[h]++,a[m].push(o),r[c]&&!(a[h]>y.maxRetryCount))){var u=r[c],f=j(o,c,u),s=p(f,o,a);if(null!==s){if("string"!=typeof s)throw new Error("a string should be returned in `onRetry` function");var l=k(n);if(!I[l]){I[l]=!0;var d=function(){a[v].push(s)};n instanceof HTMLScriptElement&&!n.getAttribute(b)&&n.src?R(n,s,d):n instanceof HTMLLinkElement&&n.href?T(n,s,d):n instanceof HTMLImageElement&&n.src&&(n.setAttribute(O,w()),n.src=s,n.onload=d)}}}}}}var p=y.onRetry;l.addEventListener("error",r,!0),l.addEventListener("load",function(t){if(t){var e=t.target||t.srcElement;if(e instanceof HTMLLinkElement)if(l.styleSheets){var n=L(l.styleSheets).filter(function(t){return t.href===e.href})[0];if(n.rules||n.cssRules)0===L(S(n)).length&&r(t)}}},!0)}function C(t,e,n,r){var o=r.domain,i=r.onRetry,c=e.style&&e.style[t];if(c&&!/^url\(["']?data:/.test(c)){var a=c.match(/^url\(["']?(.+?)["']?\)/)||[],u=a[1];if(u){var f=d(u,o);if(f&&o[f]){var s=Object.keys(o).map(function(t){var e=j(u,f,t);return'url("'+i(e,u,null)+'")'}).join(","),l=e.selectorText+"{ "+t.replace(/([a-z])([A-Z])/g,function(t,e,n){return e+"-"+n.toLowerCase()})+": "+s+" !important; }";try{n.insertRule(l,S(n).length)}catch(t){n.insertRule(l,0)}}}}}var N={},$=function(t,r){var o=["backgroundImage","borderImage","listStyleImage"];t.forEach(function(n){L(S(n)).forEach(function(e){o.forEach(function(t){C(t,e,n,r)})}),n.href&&(N[n.href]=!0)})},B=function(t,e){return L(t).filter(function(t){return!(!t.href||N[t.href]||!function(t){try{return 0<S(t).length}catch(t){return!1}}(t))&&!!d(t.href,e)})};return function(t){var e;void 0===t&&(t={});try{if(i(t,a,3),i(t,f,o),"object"!=typeof t[p])throw new Error("opts.domain cannot be non-object.");var n=Object.keys(t).filter(function(t){return-1===[a,f,p].indexOf(t)});if(0<n.length)throw new Error("option name: "+n.join(", ")+" is not valid.");var r=((e={})[a]=t[a],e[f]=t[f],e[p]=c(t[p]),e);return x(r),"undefined"!=typeof Node&&_(Node.prototype),"undefined"!=typeof Element&&_(Element.prototype),P(r),function(e){var t=l.styleSheets,n=e.domain;if(!t)return;setInterval(function(){var t=B(l.styleSheets,n);0<t.length&&$(t,e)},250)}(r),M}catch(t){console&&console.error("[assetsRetry] error captured",t)}}});
//# sourceMappingURL=assets-retry.umd.js.map

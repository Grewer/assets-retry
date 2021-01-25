!function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : (e = e || self).assetsRetry = t()
}(this, function() {
    'use strict'

    function r(e) {
        return e
    }

    function f() {
    }

    var m = 'retryTimes', v = 'succeeded', b = 'failed', E = 'maxRetryCount', o = 'onRetry',
        i = 'onFail', a = 'domain', w = 'data-assets-retry-hooked', L = 'data-assets-retry-ignore',
        d = 'data-retry-id', c = window, l = window.document, t = c.HTMLElement,
        M = c.HTMLScriptElement, n = c.HTMLLinkElement, s = c.HTMLImageElement,
        T = function(e, t, n) {
            var r = e.indexOf(t)
            return -1 === r ? e : e.substring(0, r) + n + e.substring(r + t.length)
        }, j = function(t, e, n, r) {
            void 0 === n && (n = f), void 0 === r && (r = !1)
            var o, i, a, c, s, u = r || t.defer || t.async
            'loading' !== l.readyState || /Edge|MSIE|rv:/i.test(navigator.userAgent) || u ? (o = l.createElement('script'), Object.keys(M.prototype).forEach(function(e) {
                if ('src' !== e && t[e] && 'object' != typeof t[e]) try {
                    o[e] = t[e]
                } catch (e) {
                }
            }), o.src = e, o.onload = t.onload, o.onerror = t.onerror, o.setAttribute(d, y()), (i = t.getAttribute('nonce')) && o.setAttribute('nonce', i), l.getElementsByTagName('head')[0].appendChild(o)) : (a = y(), c = t.outerHTML.replace(/data-retry-id="[^"]+"/, '').replace(/src=(?:"[^"]+"|.+)([ >])/, d + '=' + a + ' src="' + e + '"$1'), l.write(c), (s = l.querySelector('script[' + d + '="' + a + '"]')) && (s.onload = n))
        }, A = function(e) {
            return e ? e instanceof t ? [e.nodeName, e.src, e.href, e.getAttribute(d)].join(';') : 'not_supported' : 'null'
        }, y = function() {
            return Math.random().toString(36).slice(2)
        }, x = function(e) {
            return e instanceof M || e instanceof s ? e.src : e instanceof n ? e.href : null
        }, u = {}, H = function(e, t) {
            var n, r = O(e, t), o = r[0], i = r[1]
            return o ? (u[o] = u[o] || ((n = {})[m] = 0, n[b] = [], n[v] = [], n), [i, u[o]]) : []
        }, O = function(e, t) {
            var n, r, o, i, a = (n = e, r = t, Object.keys(r).filter(function(e) {
                return -1 < n.indexOf(e)
            }).sort(function(e, t) {
                return t.length - e.length
            })[0])
            return a ? [(i = a, (o = e).substr(o.indexOf(i) + i.length, o.length)), a] : [e, '']
        }, R = {}
    return function(e) {
        var t, y, p, g, h
        void 0 === e && (e = {})
        try {
            if ('object' != typeof e[a]) throw new Error('opts.domain cannot be non-object.')
            var n = ((t = {})[E] = e[E] || 3, t[o] = e[o] || r, t[i] = e[i], t[a] = e[a], t)
            return p = (y = n)[o], g = y[i], h = y[a], l.addEventListener('error', function(e) {
                if (e) {
                    var t = e.target || e.srcElement, n = x(t)
                    if (n) {
                        var r = H(n, h), o = r[0], i = r[1],
                            a = t instanceof HTMLElement && t.hasAttribute(L)
                        if (i && o && !a) {
                            i[m]++, i[b].push(n)
                            var c, s = i[m] > y[E]
                            if (s && (c = O(n, h)[0], g && g(c)), h[o] && !s) {
                                var u = h[o], f = T(n, o, u), d = p(f, n, i)
                                if (null !== d) {
                                    if ('string' != typeof d) throw new Error('a string should be returned in `onRetry` function')
                                    var l = A(t)
                                    R[l] || (R[l] = !0, t instanceof M && !t.getAttribute(w) && t.src && j(t, d, function() {
                                        i[v].push(d)
                                    }))
                                }
                            }
                        }
                    }
                }
            }, !0), u
        } catch (e) {
            c.console && console.error('[assetsRetry] error captured', e)
        }
    }
})
//# sourceMappingURL=assets-retry.umd.js.map

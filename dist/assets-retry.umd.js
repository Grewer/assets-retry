!function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : (e = e || self).assetsRetry = t()
}(this, function() {
    'use strict'

    function a(e) {
        return e
    }

    function f() {
    }

    var m = 'retryTimes', v = 'succeeded', b = 'failed', E = 'maxRetryCount', c = 'onRetry',
        s = 'onSuccess', u = 'onFail', d = 'domain', w = 'data-assets-retry-hooked',
        j = 'data-assets-retry-ignore', l = 'data-retry-id', L = window, A = window.document,
        t = L.HTMLElement, M = L.HTMLScriptElement, n = L.HTMLLinkElement, r = L.HTMLImageElement,
        T = function(e, t, n) {
            var r = e.indexOf(t)
            return -1 === r ? e : e.substring(0, r) + n + e.substring(r + t.length)
        }, x = function(t, e, n, r) {
            void 0 === n && (n = f), void 0 === r && (r = !1)
            var o, i, a, c, s, u = r || t.defer || t.async
            'loading' !== A.readyState || /Edge|MSIE|rv:/i.test(navigator.userAgent) || u ? (o = A.createElement('script'), Object.keys(M.prototype).forEach(function(e) {
                if ('src' !== e && t[e] && 'object' != typeof t[e]) try {
                    o[e] = t[e]
                } catch (e) {
                }
            }), o.src = e, o.onload = t.onload, o.onerror = t.onerror, o.setAttribute(l, y()), (i = t.getAttribute('nonce')) && o.setAttribute('nonce', i), A.getElementsByTagName('head')[0].appendChild(o)) : (a = y(), c = t.outerHTML.replace(/data-retry-id="[^"]+"/, '').replace(/src=(?:"[^"]+"|.+)([ >])/, l + '=' + a + ' src="' + e + '"$1'), A.write(c), (s = A.querySelector('script[' + l + '="' + a + '"]')) && (s.onload = n))
        }, O = function(e) {
            return e ? e instanceof t ? [e.nodeName, e.src, e.href, e.getAttribute(l)].join(';') : 'not_supported' : 'null'
        }, y = function() {
            return Math.random().toString(36).slice(2)
        }, H = function(e) {
            return e instanceof M || e instanceof r ? e.src : e instanceof n ? e.href : null
        }, S = {}, k = function(e, t) {
            var n, r = R(e, t), o = r[0], i = r[1]
            return o ? (S[o] = S[o] || ((n = {})[m] = 0, n[b] = [], n[v] = [], n), [i, S[o]]) : []
        }, R = function(e, t) {
            var n, r, o, i, a = (n = e, r = t, Object.keys(r).filter(function(e) {
                return -1 < n.indexOf(e)
            }).sort(function(e, t) {
                return t.length - e.length
            })[0])
            return a ? [(i = a, (o = e).substr(o.indexOf(i) + i.length, o.length)), a] : ['', '']
        }, C = {}
    return function(e) {
        var t, y, g, o, p, h
        void 0 === e && (e = {})
        try {
            if ('object' != typeof e[d]) throw new Error('opts.domain cannot be non-object.')
            var n = [E, c, s, u, d], r = Object.keys(e).filter(function(e) {
                return -1 === n.indexOf(e)
            })
            if (0 < r.length) throw new Error('option name: ' + r.join(', ') + ' is not valid.')
            var i = ((t = {})[E] = e[E] || 3, t[c] = e[c] || a, t[s] = e[s] || f, t[u] = e[u] || f, t[d] = e[d], t)
            return g = (y = i)[c], o = y[s], p = y[u], h = y[d], A.addEventListener('error', function(e) {
                if (e) {
                    var t = e.target || e.srcElement, n = H(t)
                    if (n) {
                        var r = k(n, h), o = r[0], i = r[1],
                            a = t instanceof HTMLElement && t.hasAttribute(j)
                        if (i && o && !a) {
                            i[m]++, i[b].push(n)
                            var c, s = i[m] > y[E]
                            if (s && (c = R(n, h)[0], p(c)), h[o] && !s) {
                                var u = h[o], f = T(n, o, u), d = g(f, n, i)
                                if (null !== d) {
                                    if ('string' != typeof d) throw new Error('a string should be returned in `onRetry` function')
                                    var l = O(t)
                                    C[l] || (C[l] = !0, t instanceof M && !t.getAttribute(w) && t.src && x(t, d, function() {
                                        i[v].push(d)
                                    }))
                                }
                            }
                        }
                    }
                }
            }, !0), A.addEventListener('load', function(e) {
                var t, n, r
                e && (t = e.target || e.srcElement, (n = H(t)) && t.getAttribute(l) && (r = R(n, h)[0], o(r)))
            }, !0), S
        } catch (e) {
            L.console && console.error('[assetsRetry] error captured', e)
        }
    }
})
//# sourceMappingURL=assets-retry.umd.js.map

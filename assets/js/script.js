/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (a, b) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";
  var c = [],
    d = a.document,
    e = Object.getPrototypeOf,
    f = c.slice,
    g = c.concat,
    h = c.push,
    i = c.indexOf,
    j = {},
    k = j.toString,
    l = j.hasOwnProperty,
    m = l.toString,
    n = m.call(Object),
    o = {};
  function p(a, b) {
    b = b || d;
    var c = b.createElement("script");
    (c.text = a), b.head.appendChild(c).parentNode.removeChild(c);
  }
  var q = "3.2.1",
    r = function (a, b) {
      return new r.fn.init(a, b);
    },
    s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    t = /^-ms-/,
    u = /-([a-z])/g,
    v = function (a, b) {
      return b.toUpperCase();
    };
  (r.fn = r.prototype =
    {
      jquery: q,
      constructor: r,
      length: 0,
      toArray: function () {
        return f.call(this);
      },
      get: function (a) {
        return null == a
          ? f.call(this)
          : a < 0
          ? this[a + this.length]
          : this[a];
      },
      pushStack: function (a) {
        var b = r.merge(this.constructor(), a);
        return (b.prevObject = this), b;
      },
      each: function (a) {
        return r.each(this, a);
      },
      map: function (a) {
        return this.pushStack(
          r.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(f.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (a < 0 ? b : 0);
        return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: h,
      sort: c.sort,
      splice: c.splice,
    }),
    (r.extend = r.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || r.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          h < i;
          h++
        )
          if (null != (a = arguments[h]))
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (r.isPlainObject(d) || (e = Array.isArray(d)))
                    ? (e
                        ? ((e = !1), (f = c && Array.isArray(c) ? c : []))
                        : (f = c && r.isPlainObject(c) ? c : {}),
                      (g[b] = r.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d));
        return g;
      }),
    r.extend({
      expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === r.type(a);
      },
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        var b = r.type(a);
        return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
      },
      isPlainObject: function (a) {
        var b, c;
        return (
          !(!a || "[object Object]" !== k.call(a)) &&
          (!(b = e(a)) ||
            ((c = l.call(b, "constructor") && b.constructor),
            "function" == typeof c && m.call(c) === n))
        );
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? j[k.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        p(a);
      },
      camelCase: function (a) {
        return a.replace(t, "ms-").replace(u, v);
      },
      each: function (a, b) {
        var c,
          d = 0;
        if (w(a)) {
          for (c = a.length; d < c; d++)
            if (b.call(a[d], d, a[d]) === !1) break;
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(s, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (w(Object(a))
              ? r.merge(c, "string" == typeof a ? [a] : a)
              : h.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : i.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          e,
          f = 0,
          h = [];
        if (w(a))
          for (d = a.length; f < d; f++)
            (e = b(a[f], f, c)), null != e && h.push(e);
        else for (f in a) (e = b(a[f], f, c)), null != e && h.push(e);
        return g.apply([], h);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, e;
        if (
          ("string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          r.isFunction(a))
        )
          return (
            (d = f.call(arguments, 2)),
            (e = function () {
              return a.apply(b || this, d.concat(f.call(arguments)));
            }),
            (e.guid = a.guid = a.guid || r.guid++),
            e
          );
      },
      now: Date.now,
      support: o,
    }),
    "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]),
    r.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function w(a) {
    var b = !!a && "length" in a && a.length,
      c = r.type(a);
    return (
      "function" !== c &&
      !r.isWindow(a) &&
      ("array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a))
    );
  }
  var x = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = {}.hasOwnProperty,
      D = [],
      E = D.pop,
      F = D.push,
      G = D.push,
      H = D.slice,
      I = function (a, b) {
        for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
        return -1;
      },
      J =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      K = "[\\x20\\t\\r\\n\\f]",
      L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      M =
        "\\[" +
        K +
        "*(" +
        L +
        ")(?:" +
        K +
        "*([*^$|!~]?=)" +
        K +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        L +
        "))|)" +
        K +
        "*\\]",
      N =
        ":(" +
        L +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        M +
        ")*)|.*)\\)|)",
      O = new RegExp(K + "+", "g"),
      P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
      Q = new RegExp("^" + K + "*," + K + "*"),
      R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
      S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
      T = new RegExp(N),
      U = new RegExp("^" + L + "$"),
      V = {
        ID: new RegExp("^#(" + L + ")"),
        CLASS: new RegExp("^\\.(" + L + ")"),
        TAG: new RegExp("^(" + L + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + N),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            K +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            K +
            "*(?:([+-]|)" +
            K +
            "*(\\d+)|))" +
            K +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + J + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            K +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            K +
            "*((?:-\\d)?\\d*)" +
            K +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      W = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      Y = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      $ = /[+~]/,
      _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
      aa = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : d < 0
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ca = function (a, b) {
        return b
          ? "\0" === a
            ? "\ufffd"
            : a.slice(0, -1) +
              "\\" +
              a.charCodeAt(a.length - 1).toString(16) +
              " "
          : "\\" + a;
      },
      da = function () {
        m();
      },
      ea = ta(
        function (a) {
          return a.disabled === !0 && ("form" in a || "label" in a);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      G.apply((D = H.call(v.childNodes)), v.childNodes),
        D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = {
        apply: D.length
          ? function (a, b) {
              F.apply(a, H.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function ga(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s = b && b.ownerDocument,
        w = b ? b.nodeType : 9;
      if (
        ((d = d || []),
        "string" != typeof a || !a || (1 !== w && 9 !== w && 11 !== w))
      )
        return d;
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== w && (l = Z.exec(a)))
          if ((f = l[1])) {
            if (9 === w) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d;
            } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f)
              return d.push(j), d;
          } else {
            if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
            if (
              (f = l[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return G.apply(d, b.getElementsByClassName(f)), d;
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) (s = b), (r = a);
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id"))
              ? (k = k.replace(ba, ca))
              : b.setAttribute("id", (k = u)),
              (o = g(a)),
              (h = o.length);
            while (h--) o[h] = "#" + k + " " + sa(o[h]);
            (r = o.join(",")), (s = ($.test(a) && qa(b.parentNode)) || b);
          }
          if (r)
            try {
              return G.apply(d, s.querySelectorAll(r)), d;
            } catch (x) {
            } finally {
              k === u && b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(P, "$1"), b, d, e);
    }
    function ha() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ia(a) {
      return (a[u] = !0), a;
    }
    function ja(a) {
      var b = n.createElement("fieldset");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ka(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function la(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          a.sourceIndex - b.sourceIndex;
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function oa(a) {
      return function (b) {
        return "form" in b
          ? b.parentNode && b.disabled === !1
            ? "label" in b
              ? "label" in b.parentNode
                ? b.parentNode.disabled === a
                : b.disabled === a
              : b.isDisabled === a || (b.isDisabled !== !a && ea(b) === a)
            : b.disabled === a
          : "label" in b && b.disabled === a;
      };
    }
    function pa(a) {
      return ia(function (b) {
        return (
          (b = +b),
          ia(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = ga.support = {}),
      (f = ga.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return !!b && "HTML" !== b.nodeName;
        }),
      (m = ga.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = n.documentElement),
              (p = !f(n)),
              v !== n &&
                (e = n.defaultView) &&
                e.top !== e &&
                (e.addEventListener
                  ? e.addEventListener("unload", da, !1)
                  : e.attachEvent && e.attachEvent("onunload", da)),
              (c.attributes = ja(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ja(function (a) {
                return (
                  a.appendChild(n.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName = Y.test(n.getElementsByClassName)),
              (c.getById = ja(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !n.getElementsByName || !n.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.filter.ID = function (a) {
                    var b = a.replace(_, aa);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }),
                  (d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c ? [c] : [];
                    }
                  }))
                : ((d.filter.ID = function (a) {
                    var b = a.replace(_, aa);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  }),
                  (d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c,
                        d,
                        e,
                        f = b.getElementById(a);
                      if (f) {
                        if (
                          ((c = f.getAttributeNode("id")), c && c.value === a)
                        )
                          return [f];
                        (e = b.getElementsByName(a)), (d = 0);
                        while ((f = e[d++]))
                          if (
                            ((c = f.getAttributeNode("id")), c && c.value === a)
                          )
                            return [f];
                      }
                      return [];
                    }
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  if ("undefined" != typeof b.getElementsByClassName && p)
                    return b.getElementsByClassName(a);
                }),
              (r = []),
              (q = []),
              (c.qsa = Y.test(n.querySelectorAll)) &&
                (ja(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push("[*^$]=" + K + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + K + "*(?:value|" + J + ")"),
                    a.querySelectorAll("[id~=" + u + "-]").length ||
                      q.push("~="),
                    a.querySelectorAll(":checked").length || q.push(":checked"),
                    a.querySelectorAll("a#" + u + "+*").length ||
                      q.push(".#.+[+~]");
                }),
                ja(function (a) {
                  a.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var b = n.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + K + "*[*^$|!~]?="),
                    2 !== a.querySelectorAll(":enabled").length &&
                      q.push(":enabled", ":disabled"),
                    (o.appendChild(a).disabled = !0),
                    2 !== a.querySelectorAll(":disabled").length &&
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = Y.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ja(function (a) {
                  (c.disconnectedMatch = s.call(a, "*")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", N);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = Y.test(o.compareDocumentPosition)),
              (t =
                b || Y.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === n || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === n || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? I(k, a) - I(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      g = [a],
                      h = [b];
                    if (!e || !f)
                      return a === n
                        ? -1
                        : b === n
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? I(k, a) - I(k, b)
                        : 0;
                    if (e === f) return la(a, b);
                    c = a;
                    while ((c = c.parentNode)) g.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d
                      ? la(g[d], h[d])
                      : g[d] === v
                      ? -1
                      : h[d] === v
                      ? 1
                      : 0;
                  }),
              n)
            : n;
        }),
      (ga.matches = function (a, b) {
        return ga(a, null, null, b);
      }),
      (ga.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(S, "='$1']")),
          c.matchesSelector &&
            p &&
            !A[b + " "] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return ga(b, n, null, [a]).length > 0;
      }),
      (ga.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (ga.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (ga.escape = function (a) {
        return (a + "").replace(ba, ca);
      }),
      (ga.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (ga.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = ga.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = ga.selectors =
        {
          cacheLength: 50,
          createPseudo: ia,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(_, aa)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || ga.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && ga.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return V.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      T.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(_, aa).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = ga.attr(d, a);
                return null == e
                  ? "!=" === b
                  : !b ||
                      ((e += ""),
                      "=" === b
                        ? e === c
                        : "!=" === b
                        ? e !== c
                        : "^=" === b
                        ? c && 0 === e.indexOf(c)
                        : "*=" === b
                        ? c && e.indexOf(c) > -1
                        : "$=" === b
                        ? c && e.slice(-c.length) === c
                        : "~=" === b
                        ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1
                        : "|=" === b &&
                          (e === c || e.slice(0, c.length + 1) === c + "-"));
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h,
                      t = !1;
                    if (q) {
                      if (f) {
                        while (p) {
                          m = b;
                          while ((m = m[p]))
                            if (
                              h
                                ? m.nodeName.toLowerCase() === r
                                : 1 === m.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (m = q),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n && j[2]),
                          (m = n && q.childNodes[n]);
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (1 === m.nodeType && ++t && m === b) {
                            k[a] = [w, n, t];
                            break;
                          }
                      } else if (
                        (s &&
                          ((m = b),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n)),
                        t === !1)
                      )
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType) &&
                            ++t &&
                            (s &&
                              ((l = m[u] || (m[u] = {})),
                              (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                              (k[a] = [w, t])),
                            m === b)
                          )
                            break;
                      return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  ga.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ia(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = I(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ia(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(P, "$1"));
              return d[u]
                ? ia(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (
                      (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: ia(function (a) {
              return function (b) {
                return ga(a, b).length > 0;
              };
            }),
            contains: ia(function (a) {
              return (
                (a = a.replace(_, aa)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: ia(function (a) {
              return (
                U.test(a || "") || ga.error("unsupported lang: " + a),
                (a = a.replace(_, aa).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: oa(!1),
            disabled: oa(!0),
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return X.test(a.nodeName);
            },
            input: function (a) {
              return W.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: pa(function () {
              return [0];
            }),
            last: pa(function (a, b) {
              return [b - 1];
            }),
            eq: pa(function (a, b, c) {
              return [c < 0 ? c + b : c];
            }),
            even: pa(function (a, b) {
              for (var c = 0; c < b; c += 2) a.push(c);
              return a;
            }),
            odd: pa(function (a, b) {
              for (var c = 1; c < b; c += 2) a.push(c);
              return a;
            }),
            lt: pa(function (a, b, c) {
              for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: pa(function (a, b, c) {
              for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = ma(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);
    function ra() {}
    (ra.prototype = d.filters = d.pseudos),
      (d.setFilters = new ra()),
      (g = ga.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (c && !(e = Q.exec(h))) ||
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = R.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(P, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = V[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        });
    function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
      return d;
    }
    function ta(a, b, c) {
      var d = b.dir,
        e = b.next,
        f = e || d,
        g = c && "parentNode" === f,
        h = x++;
      return b.first
        ? function (b, c, e) {
            while ((b = b[d])) if (1 === b.nodeType || g) return a(b, c, e);
            return !1;
          }
        : function (b, c, i) {
            var j,
              k,
              l,
              m = [w, h];
            if (i) {
              while ((b = b[d]))
                if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || g)
                  if (
                    ((l = b[u] || (b[u] = {})),
                    (k = l[b.uniqueID] || (l[b.uniqueID] = {})),
                    e && e === b.nodeName.toLowerCase())
                  )
                    b = b[d] || b;
                  else {
                    if ((j = k[f]) && j[0] === w && j[1] === h)
                      return (m[2] = j[2]);
                    if (((k[f] = m), (m[2] = a(b, c, i)))) return !0;
                  }
            return !1;
          };
    }
    function ua(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
      return c;
    }
    function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
      return g;
    }
    function xa(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = xa(d)),
        e && !e[u] && (e = xa(e, f)),
        ia(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : wa(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = wa(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? I(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = wa(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : G.apply(g, r);
        })
      );
    }
    function ya(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = ta(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = ta(
            function (a) {
              return I(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        i < f;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [ta(ua(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break;
            return xa(
              i > 1 && ua(m),
              i > 1 &&
                sa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(P, "$1"),
              c,
              i < e && ya(a.slice(i, e)),
              e < f && ya((a = a.slice(e))),
              e < f && sa(a)
            );
          }
          m.push(c);
        }
      return ua(m);
    }
    function za(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG("*", k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length;
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l);
                  break;
                }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, f && t.push(l));
          }
          if (((r += s), c && s !== r)) {
            o = 0;
            while ((q = b[o++])) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i));
              u = wa(u);
            }
            G.apply(i, u),
              k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
          }
          return k && ((w = y), (j = v)), t;
        };
      return c ? ia(f) : f;
    }
    return (
      (h = ga.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = ya(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, za(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = ga.select =
        function (a, b, c, e) {
          var f,
            i,
            j,
            k,
            l,
            m = "function" == typeof a && a,
            n = !e && g((a = m.selector || a));
          if (((c = c || []), 1 === n.length)) {
            if (
              ((i = n[0] = n[0].slice(0)),
              i.length > 2 &&
                "ID" === (j = i[0]).type &&
                9 === b.nodeType &&
                p &&
                d.relative[i[1].type])
            ) {
              if (
                ((b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0]), !b)
              )
                return c;
              m && (b = b.parentNode), (a = a.slice(i.shift().value.length));
            }
            f = V.needsContext.test(a) ? 0 : i.length;
            while (f--) {
              if (((j = i[f]), d.relative[(k = j.type)])) break;
              if (
                (l = d.find[k]) &&
                (e = l(
                  j.matches[0].replace(_, aa),
                  ($.test(i[0].type) && qa(b.parentNode)) || b
                ))
              ) {
                if ((i.splice(f, 1), (a = e.length && sa(i)), !a))
                  return G.apply(c, e), c;
                break;
              }
            }
          }
          return (
            (m || h(a, n))(
              e,
              b,
              !p,
              c,
              !b || ($.test(a) && qa(b.parentNode)) || b
            ),
            c
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ja(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
      })),
      ja(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ka("type|href|height|width", function (a, b, c) {
          if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ja(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ka("value", function (a, b, c) {
          if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }),
      ja(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ka(J, function (a, b, c) {
          var d;
          if (!c)
            return a[b] === !0
              ? b.toLowerCase()
              : (d = a.getAttributeNode(b)) && d.specified
              ? d.value
              : null;
        }),
      ga
    );
  })(a);
  (r.find = x),
    (r.expr = x.selectors),
    (r.expr[":"] = r.expr.pseudos),
    (r.uniqueSort = r.unique = x.uniqueSort),
    (r.text = x.getText),
    (r.isXMLDoc = x.isXML),
    (r.contains = x.contains),
    (r.escapeSelector = x.escape);
  var y = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && r(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    z = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    A = r.expr.match.needsContext;
  function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }
  var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    D = /^.[^:#\[\.,]*$/;
  function E(a, b, c) {
    return r.isFunction(b)
      ? r.grep(a, function (a, d) {
          return !!b.call(a, d, a) !== c;
        })
      : b.nodeType
      ? r.grep(a, function (a) {
          return (a === b) !== c;
        })
      : "string" != typeof b
      ? r.grep(a, function (a) {
          return i.call(b, a) > -1 !== c;
        })
      : D.test(b)
      ? r.filter(b, a, c)
      : ((b = r.filter(b, a)),
        r.grep(a, function (a) {
          return i.call(b, a) > -1 !== c && 1 === a.nodeType;
        }));
  }
  (r.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? r.find.matchesSelector(d, a)
          ? [d]
          : []
        : r.find.matches(
            a,
            r.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    r.fn.extend({
      find: function (a) {
        var b,
          c,
          d = this.length,
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            r(a).filter(function () {
              for (b = 0; b < d; b++) if (r.contains(e[b], this)) return !0;
            })
          );
        for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
        return d > 1 ? r.uniqueSort(c) : c;
      },
      filter: function (a) {
        return this.pushStack(E(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(E(this, a || [], !0));
      },
      is: function (a) {
        return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1)
          .length;
      },
    });
  var F,
    G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    H = (r.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (((c = c || F), "string" == typeof a)) {
        if (
          ((e =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : G.exec(a)),
          !e || (!e[1] && b))
        )
          return !b || b.jquery
            ? (b || c).find(a)
            : this.constructor(b).find(a);
        if (e[1]) {
          if (
            ((b = b instanceof r ? b[0] : b),
            r.merge(
              this,
              r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
            ),
            C.test(e[1]) && r.isPlainObject(b))
          )
            for (e in b)
              r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        return (
          (f = d.getElementById(e[2])),
          f && ((this[0] = f), (this.length = 1)),
          this
        );
      }
      return a.nodeType
        ? ((this[0] = a), (this.length = 1), this)
        : r.isFunction(a)
        ? void 0 !== c.ready
          ? c.ready(a)
          : a(r)
        : r.makeArray(a, this);
    });
  (H.prototype = r.fn), (F = r(d));
  var I = /^(?:parents|prev(?:Until|All))/,
    J = { children: !0, contents: !0, next: !0, prev: !0 };
  r.fn.extend({
    has: function (a) {
      var b = r(a, this),
        c = b.length;
      return this.filter(function () {
        for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return !0;
      });
    },
    closest: function (a, b) {
      var c,
        d = 0,
        e = this.length,
        f = [],
        g = "string" != typeof a && r(a);
      if (!A.test(a))
        for (; d < e; d++)
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && r.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
      return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? i.call(r(a), this[0])
          : i.call(this, a.jquery ? a[0] : a)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  });
  function K(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  r.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return y(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return y(a, "parentNode", c);
      },
      next: function (a) {
        return K(a, "nextSibling");
      },
      prev: function (a) {
        return K(a, "previousSibling");
      },
      nextAll: function (a) {
        return y(a, "nextSibling");
      },
      prevAll: function (a) {
        return y(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return y(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return y(a, "previousSibling", c);
      },
      siblings: function (a) {
        return z((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return z(a.firstChild);
      },
      contents: function (a) {
        return B(a, "iframe")
          ? a.contentDocument
          : (B(a, "template") && (a = a.content || a),
            r.merge([], a.childNodes));
      },
    },
    function (a, b) {
      r.fn[a] = function (c, d) {
        var e = r.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = r.filter(d, e)),
          this.length > 1 &&
            (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    }
  );
  var L = /[^\x20\t\r\n\f]+/g;
  function M(a) {
    var b = {};
    return (
      r.each(a.match(L) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  r.Callbacks = function (a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = e || a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1));
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
      },
      j = {
        add: function () {
          return (
            f &&
              (c && !b && ((h = f.length - 1), g.push(c)),
              (function d(b) {
                r.each(b, function (b, c) {
                  r.isFunction(c)
                    ? (a.unique && j.has(c)) || f.push(c)
                    : c && c.length && "string" !== r.type(c) && d(c);
                });
              })(arguments),
              c && !b && i()),
            this
          );
        },
        remove: function () {
          return (
            r.each(arguments, function (a, b) {
              var c;
              while ((c = r.inArray(b, f, c)) > -1)
                f.splice(c, 1), c <= h && h--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? r.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (e = g = []), (f = c = ""), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (e = g = []), c || b || (f = c = ""), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          );
        },
        fire: function () {
          return j.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return j;
  };
  function N(a) {
    return a;
  }
  function O(a) {
    throw a;
  }
  function P(a, b, c, d) {
    var e;
    try {
      a && r.isFunction((e = a.promise))
        ? e.call(a).done(b).fail(c)
        : a && r.isFunction((e = a.then))
        ? e.call(a, b, c)
        : b.apply(void 0, [a].slice(d));
    } catch (a) {
      c.apply(void 0, [a]);
    }
  }
  r.extend({
    Deferred: function (b) {
      var c = [
          [
            "notify",
            "progress",
            r.Callbacks("memory"),
            r.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            r.Callbacks("once memory"),
            r.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            r.Callbacks("once memory"),
            r.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
        d = "pending",
        e = {
          state: function () {
            return d;
          },
          always: function () {
            return f.done(arguments).fail(arguments), this;
          },
          catch: function (a) {
            return e.then(null, a);
          },
          pipe: function () {
            var a = arguments;
            return r
              .Deferred(function (b) {
                r.each(c, function (c, d) {
                  var e = r.isFunction(a[d[4]]) && a[d[4]];
                  f[d[1]](function () {
                    var a = e && e.apply(this, arguments);
                    a && r.isFunction(a.promise)
                      ? a
                          .promise()
                          .progress(b.notify)
                          .done(b.resolve)
                          .fail(b.reject)
                      : b[d[0] + "With"](this, e ? [a] : arguments);
                  });
                }),
                  (a = null);
              })
              .promise();
          },
          then: function (b, d, e) {
            var f = 0;
            function g(b, c, d, e) {
              return function () {
                var h = this,
                  i = arguments,
                  j = function () {
                    var a, j;
                    if (!(b < f)) {
                      if (((a = d.apply(h, i)), a === c.promise()))
                        throw new TypeError("Thenable self-resolution");
                      (j =
                        a &&
                        ("object" == typeof a || "function" == typeof a) &&
                        a.then),
                        r.isFunction(j)
                          ? e
                            ? j.call(a, g(f, c, N, e), g(f, c, O, e))
                            : (f++,
                              j.call(
                                a,
                                g(f, c, N, e),
                                g(f, c, O, e),
                                g(f, c, N, c.notifyWith)
                              ))
                          : (d !== N && ((h = void 0), (i = [a])),
                            (e || c.resolveWith)(h, i));
                    }
                  },
                  k = e
                    ? j
                    : function () {
                        try {
                          j();
                        } catch (a) {
                          r.Deferred.exceptionHook &&
                            r.Deferred.exceptionHook(a, k.stackTrace),
                            b + 1 >= f &&
                              (d !== O && ((h = void 0), (i = [a])),
                              c.rejectWith(h, i));
                        }
                      };
                b
                  ? k()
                  : (r.Deferred.getStackHook &&
                      (k.stackTrace = r.Deferred.getStackHook()),
                    a.setTimeout(k));
              };
            }
            return r
              .Deferred(function (a) {
                c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)),
                  c[1][3].add(g(0, a, r.isFunction(b) ? b : N)),
                  c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
              })
              .promise();
          },
          promise: function (a) {
            return null != a ? r.extend(a, e) : e;
          },
        },
        f = {};
      return (
        r.each(c, function (a, b) {
          var g = b[2],
            h = b[5];
          (e[b[1]] = g.add),
            h &&
              g.add(
                function () {
                  d = h;
                },
                c[3 - a][2].disable,
                c[0][2].lock
              ),
            g.add(b[3].fire),
            (f[b[0]] = function () {
              return (
                f[b[0] + "With"](this === f ? void 0 : this, arguments), this
              );
            }),
            (f[b[0] + "With"] = g.fireWith);
        }),
        e.promise(f),
        b && b.call(f, f),
        f
      );
    },
    when: function (a) {
      var b = arguments.length,
        c = b,
        d = Array(c),
        e = f.call(arguments),
        g = r.Deferred(),
        h = function (a) {
          return function (c) {
            (d[a] = this),
              (e[a] = arguments.length > 1 ? f.call(arguments) : c),
              --b || g.resolveWith(d, e);
          };
        };
      if (
        b <= 1 &&
        (P(a, g.done(h(c)).resolve, g.reject, !b),
        "pending" === g.state() || r.isFunction(e[c] && e[c].then))
      )
        return g.then();
      while (c--) P(e[c], h(c), g.reject);
      return g.promise();
    },
  });
  var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (r.Deferred.exceptionHook = function (b, c) {
    a.console &&
      a.console.warn &&
      b &&
      Q.test(b.name) &&
      a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }),
    (r.readyException = function (b) {
      a.setTimeout(function () {
        throw b;
      });
    });
  var R = r.Deferred();
  (r.fn.ready = function (a) {
    return (
      R.then(a)["catch"](function (a) {
        r.readyException(a);
      }),
      this
    );
  }),
    r.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (a) {
        (a === !0 ? --r.readyWait : r.isReady) ||
          ((r.isReady = !0),
          (a !== !0 && --r.readyWait > 0) || R.resolveWith(d, [r]));
      },
    }),
    (r.ready.then = R.then);
  function S() {
    d.removeEventListener("DOMContentLoaded", S),
      a.removeEventListener("load", S),
      r.ready();
  }
  "complete" === d.readyState ||
  ("loading" !== d.readyState && !d.documentElement.doScroll)
    ? a.setTimeout(r.ready)
    : (d.addEventListener("DOMContentLoaded", S),
      a.addEventListener("load", S));
  var T = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === r.type(c)) {
        e = !0;
        for (h in c) T(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        r.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(r(a), c);
              }))),
        b)
      )
        for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    U = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
  function V() {
    this.expando = r.expando + V.uid++;
  }
  (V.uid = 1),
    (V.prototype = {
      cache: function (a) {
        var b = a[this.expando];
        return (
          b ||
            ((b = {}),
            U(a) &&
              (a.nodeType
                ? (a[this.expando] = b)
                : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0,
                  }))),
          b
        );
      },
      set: function (a, b, c) {
        var d,
          e = this.cache(a);
        if ("string" == typeof b) e[r.camelCase(b)] = c;
        else for (d in b) e[r.camelCase(d)] = b[d];
        return e;
      },
      get: function (a, b) {
        return void 0 === b
          ? this.cache(a)
          : a[this.expando] && a[this.expando][r.camelCase(b)];
      },
      access: function (a, b, c) {
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? this.get(a, b)
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d = a[this.expando];
        if (void 0 !== d) {
          if (void 0 !== b) {
            Array.isArray(b)
              ? (b = b.map(r.camelCase))
              : ((b = r.camelCase(b)), (b = b in d ? [b] : b.match(L) || [])),
              (c = b.length);
            while (c--) delete d[b[c]];
          }
          (void 0 === b || r.isEmptyObject(d)) &&
            (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
        }
      },
      hasData: function (a) {
        var b = a[this.expando];
        return void 0 !== b && !r.isEmptyObject(b);
      },
    });
  var W = new V(),
    X = new V(),
    Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function $(a) {
    return (
      "true" === a ||
      ("false" !== a &&
        ("null" === a
          ? null
          : a === +a + ""
          ? +a
          : Y.test(a)
          ? JSON.parse(a)
          : a))
    );
  }
  function _(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(Z, "-$&").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c = $(c);
        } catch (e) {}
        X.set(a, b, c);
      } else c = void 0;
    return c;
  }
  r.extend({
    hasData: function (a) {
      return X.hasData(a) || W.hasData(a);
    },
    data: function (a, b, c) {
      return X.access(a, b, c);
    },
    removeData: function (a, b) {
      X.remove(a, b);
    },
    _data: function (a, b, c) {
      return W.access(a, b, c);
    },
    _removeData: function (a, b) {
      W.remove(a, b);
    },
  }),
    r.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = X.get(f)), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = r.camelCase(d.slice(5))), _(f, d, e[d])));
            W.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              X.set(this, a);
            })
          : T(
              this,
              function (b) {
                var c;
                if (f && void 0 === b) {
                  if (((c = X.get(f, a)), void 0 !== c)) return c;
                  if (((c = _(f, a)), void 0 !== c)) return c;
                } else
                  this.each(function () {
                    X.set(this, a, b);
                  });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          X.remove(this, a);
        });
      },
    }),
    r.extend({
      queue: function (a, b, c) {
        var d;
        if (a)
          return (
            (b = (b || "fx") + "queue"),
            (d = W.get(a, b)),
            c &&
              (!d || Array.isArray(c)
                ? (d = W.access(a, b, r.makeArray(c)))
                : d.push(c)),
            d || []
          );
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function () {
            r.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          W.get(a, c) ||
          W.access(a, c, {
            empty: r.Callbacks("once memory").add(function () {
              W.remove(a, [b + "queue", c]);
            }),
          })
        );
      },
    }),
    r.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? r.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          r.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = W.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
    ca = ["Top", "Right", "Bottom", "Left"],
    da = function (a, b) {
      return (
        (a = b || a),
        "none" === a.style.display ||
          ("" === a.style.display &&
            r.contains(a.ownerDocument, a) &&
            "none" === r.css(a, "display"))
      );
    },
    ea = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    };
  function fa(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur();
          }
        : function () {
            return r.css(a, b, "");
          },
      i = h(),
      j = (c && c[3]) || (r.cssNumber[b] ? "" : "px"),
      k = (r.cssNumber[b] || ("px" !== j && +i)) && ba.exec(r.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do (f = f || ".5"), (k /= f), r.style(a, b, k + j);
      while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  var ga = {};
  function ha(a) {
    var b,
      c = a.ownerDocument,
      d = a.nodeName,
      e = ga[d];
    return e
      ? e
      : ((b = c.body.appendChild(c.createElement(d))),
        (e = r.css(b, "display")),
        b.parentNode.removeChild(b),
        "none" === e && (e = "block"),
        (ga[d] = e),
        e);
  }
  function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
      (d = a[f]),
        d.style &&
          ((c = d.style.display),
          b
            ? ("none" === c &&
                ((e[f] = W.get(d, "display") || null),
                e[f] || (d.style.display = "")),
              "" === d.style.display && da(d) && (e[f] = ha(d)))
            : "none" !== c && ((e[f] = "none"), W.set(d, "display", c)));
    for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
    return a;
  }
  r.fn.extend({
    show: function () {
      return ia(this, !0);
    },
    hide: function () {
      return ia(this);
    },
    toggle: function (a) {
      return "boolean" == typeof a
        ? a
          ? this.show()
          : this.hide()
        : this.each(function () {
            da(this) ? r(this).show() : r(this).hide();
          });
    },
  });
  var ja = /^(?:checkbox|radio)$/i,
    ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    la = /^$|\/(?:java|ecma)script/i,
    ma = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (ma.optgroup = ma.option),
    (ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead),
    (ma.th = ma.td);
  function na(a, b) {
    var c;
    return (
      (c =
        "undefined" != typeof a.getElementsByTagName
          ? a.getElementsByTagName(b || "*")
          : "undefined" != typeof a.querySelectorAll
          ? a.querySelectorAll(b || "*")
          : []),
      void 0 === b || (b && B(a, b)) ? r.merge([a], c) : c
    );
  }
  function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++)
      W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
  }
  var pa = /<|&#?\w+;/;
  function qa(a, b, c, d, e) {
    for (
      var f,
        g,
        h,
        i,
        j,
        k,
        l = b.createDocumentFragment(),
        m = [],
        n = 0,
        o = a.length;
      n < o;
      n++
    )
      if (((f = a[n]), f || 0 === f))
        if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
        else if (pa.test(f)) {
          (g = g || l.appendChild(b.createElement("div"))),
            (h = (ka.exec(f) || ["", ""])[1].toLowerCase()),
            (i = ma[h] || ma._default),
            (g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2]),
            (k = i[0]);
          while (k--) g = g.lastChild;
          r.merge(m, g.childNodes), (g = l.firstChild), (g.textContent = "");
        } else m.push(b.createTextNode(f));
    (l.textContent = ""), (n = 0);
    while ((f = m[n++]))
      if (d && r.inArray(f, d) > -1) e && e.push(f);
      else if (
        ((j = r.contains(f.ownerDocument, f)),
        (g = na(l.appendChild(f), "script")),
        j && oa(g),
        c)
      ) {
        k = 0;
        while ((f = g[k++])) la.test(f.type || "") && c.push(f);
      }
    return l;
  }
  !(function () {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement("div")),
      c = d.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var ra = d.documentElement,
    sa = /^key/,
    ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ua = /^([^.]*)(?:\.(.+)|)/;
  function va() {
    return !0;
  }
  function wa() {
    return !1;
  }
  function xa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function ya(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0));
      for (h in b) ya(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ("string" == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      e === !1)
    )
      e = wa;
    else if (!e) return a;
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return r().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = r.guid++))),
      a.each(function () {
        r.event.add(this, b, e, d, c);
      })
    );
  }
  (r.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = W.get(a);
      if (q) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          e && r.find.matchesSelector(ra, e),
          c.guid || (c.guid = r.guid++),
          (i = q.events) || (i = q.events = {}),
          (g = q.handle) ||
            (g = q.handle =
              function (b) {
                return "undefined" != typeof r && r.event.triggered !== b.type
                  ? r.event.dispatch.apply(a, arguments)
                  : void 0;
              }),
          (b = (b || "").match(L) || [""]),
          (j = b.length);
        while (j--)
          (h = ua.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n &&
              ((l = r.event.special[n] || {}),
              (n = (e ? l.delegateType : l.bindType) || n),
              (l = r.event.special[n] || {}),
              (k = r.extend(
                {
                  type: n,
                  origType: p,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && r.expr.match.needsContext.test(e),
                  namespace: o.join("."),
                },
                f
              )),
              (m = i[n]) ||
                ((m = i[n] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(n, g))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (r.event.global[n] = !0));
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = W.hasData(a) && W.get(a);
      if (q && (i = q.events)) {
        (b = (b || "").match(L) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = ua.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n)
          ) {
            (l = r.event.special[n] || {}),
              (n = (d ? l.delegateType : l.bindType) || n),
              (m = i[n] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && p !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) ||
                r.removeEvent(a, n, q.handle),
              delete i[n]);
          } else for (n in i) r.event.remove(a, n + b[j], c, d, !0);
        r.isEmptyObject(i) && W.remove(a, "handle events");
      }
    },
    dispatch: function (a) {
      var b = r.event.fix(a),
        c,
        d,
        e,
        f,
        g,
        h,
        i = new Array(arguments.length),
        j = (W.get(this, "events") || {})[b.type] || [],
        k = r.event.special[b.type] || {};
      for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
      if (
        ((b.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, b) !== !1)
      ) {
        (h = r.event.handlers.call(this, b, j)), (c = 0);
        while ((f = h[c++]) && !b.isPropagationStopped()) {
          (b.currentTarget = f.elem), (d = 0);
          while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())
            (b.rnamespace && !b.rnamespace.test(g.namespace)) ||
              ((b.handleObj = g),
              (b.data = g.data),
              (e = (
                (r.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== e &&
                (b.result = e) === !1 &&
                (b.preventDefault(), b.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g,
        h = [],
        i = b.delegateCount,
        j = a.target;
      if (i && j.nodeType && !("click" === a.type && a.button >= 1))
        for (; j !== this; j = j.parentNode || this)
          if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
            for (f = [], g = {}, c = 0; c < i; c++)
              (d = b[c]),
                (e = d.selector + " "),
                void 0 === g[e] &&
                  (g[e] = d.needsContext
                    ? r(e, this).index(j) > -1
                    : r.find(e, this, null, [j]).length),
                g[e] && f.push(d);
            f.length && h.push({ elem: j, handlers: f });
          }
      return (
        (j = this), i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h
      );
    },
    addProp: function (a, b) {
      Object.defineProperty(r.Event.prototype, a, {
        enumerable: !0,
        configurable: !0,
        get: r.isFunction(b)
          ? function () {
              if (this.originalEvent) return b(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[a];
            },
        set: function (b) {
          Object.defineProperty(this, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: b,
          });
        },
      });
    },
    fix: function (a) {
      return a[r.expando] ? a : new r.Event(a);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== xa() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === xa() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && B(this, "input"))
            return this.click(), !1;
        },
        _default: function (a) {
          return B(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
  }),
    (r.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c);
    }),
    (r.Event = function (a, b) {
      return this instanceof r.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? va
                  : wa),
              (this.target =
                a.target && 3 === a.target.nodeType
                  ? a.target.parentNode
                  : a.target),
              (this.currentTarget = a.currentTarget),
              (this.relatedTarget = a.relatedTarget))
            : (this.type = a),
          b && r.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || r.now()),
          void (this[r.expando] = !0))
        : new r.Event(a, b);
    }),
    (r.Event.prototype = {
      constructor: r.Event,
      isDefaultPrevented: wa,
      isPropagationStopped: wa,
      isImmediatePropagationStopped: wa,
      isSimulated: !1,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = va),
          a && !this.isSimulated && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = va),
          a && !this.isSimulated && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = va),
          a && !this.isSimulated && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    r.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (a) {
          var b = a.button;
          return null == a.which && sa.test(a.type)
            ? null != a.charCode
              ? a.charCode
              : a.keyCode
            : !a.which && void 0 !== b && ta.test(a.type)
            ? 1 & b
              ? 1
              : 2 & b
              ? 3
              : 4 & b
              ? 2
              : 0
            : a.which;
        },
      },
      r.event.addProp
    ),
    r.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        r.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (e && (e === d || r.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    r.fn.extend({
      on: function (a, b, c, d) {
        return ya(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return ya(this, a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            r(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
          c === !1 && (c = wa),
          this.each(function () {
            r.event.remove(this, a, c, b);
          })
        );
      },
    });
  var za =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Aa = /<script|<style|<link/i,
    Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ca = /^true\/(.*)/,
    Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? r(">tbody", a)[0] || a
      : a;
  }
  function Fa(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function Ga(a) {
    var b = Ca.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function Ha(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        W.hasData(a) &&
        ((f = W.access(a)), (g = W.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]);
      }
      X.hasData(a) && ((h = X.access(a)), (i = r.extend({}, h)), X.set(b, i));
    }
  }
  function Ia(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && ja.test(a.type)
      ? (b.checked = a.checked)
      : ("input" !== c && "textarea" !== c) ||
        (b.defaultValue = a.defaultValue);
  }
  function Ja(a, b, c, d) {
    b = g.apply([], b);
    var e,
      f,
      h,
      i,
      j,
      k,
      l = 0,
      m = a.length,
      n = m - 1,
      q = b[0],
      s = r.isFunction(q);
    if (s || (m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)))
      return a.each(function (e) {
        var f = a.eq(e);
        s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
      });
    if (
      m &&
      ((e = qa(b, a[0].ownerDocument, !1, a, d)),
      (f = e.firstChild),
      1 === e.childNodes.length && (e = f),
      f || d)
    ) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++)
        (j = e),
          l !== n &&
            ((j = r.clone(j, !0, !0)), i && r.merge(h, na(j, "script"))),
          c.call(a[l], j, l);
      if (i)
        for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++)
          (j = h[l]),
            la.test(j.type || "") &&
              !W.access(j, "globalEval") &&
              r.contains(k, j) &&
              (j.src
                ? r._evalUrl && r._evalUrl(j.src)
                : p(j.textContent.replace(Da, ""), k));
    }
    return a;
  }
  function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || r.cleanData(na(d)),
        d.parentNode &&
          (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")),
          d.parentNode.removeChild(d));
    return a;
  }
  r.extend({
    htmlPrefilter: function (a) {
      return a.replace(za, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = r.contains(a.ownerDocument, a);
      if (
        !(
          o.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          r.isXMLDoc(a)
        )
      )
        for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++)
          Ia(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++)
            Ha(f[d], g[d]);
        else Ha(a, h);
      return (
        (g = na(h, "script")), g.length > 0 && oa(g, !i && na(a, "script")), h
      );
    },
    cleanData: function (a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (U(c)) {
          if ((b = c[W.expando])) {
            if (b.events)
              for (d in b.events)
                e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            c[W.expando] = void 0;
          }
          c[X.expando] && (c[X.expando] = void 0);
        }
    },
  }),
    r.fn.extend({
      detach: function (a) {
        return Ka(this, a, !0);
      },
      remove: function (a) {
        return Ka(this, a);
      },
      text: function (a) {
        return T(
          this,
          function (a) {
            return void 0 === a
              ? r.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return Ja(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ea(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return Ja(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ea(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return Ja(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return Ja(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (r.cleanData(na(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null != a && a),
          (b = null == b ? a : b),
          this.map(function () {
            return r.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return T(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !Aa.test(a) &&
              !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = r.htmlPrefilter(a);
              try {
                for (; c < d; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (r.cleanData(na(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return Ja(
          this,
          arguments,
          function (b) {
            var c = this.parentNode;
            r.inArray(this, a) < 0 &&
              (r.cleanData(na(this)), c && c.replaceChild(b, this));
          },
          a
        );
      },
    }),
    r.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        r.fn[a] = function (a) {
          for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++)
            (c = g === f ? this : this.clone(!0)),
              r(e[g])[b](c),
              h.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var La = /^margin/,
    Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
    Na = function (b) {
      var c = b.ownerDocument.defaultView;
      return (c && c.opener) || (c = a), c.getComputedStyle(b);
    };
  !(function () {
    function b() {
      if (i) {
        (i.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (i.innerHTML = ""),
          ra.appendChild(h);
        var b = a.getComputedStyle(i);
        (c = "1%" !== b.top),
          (g = "2px" === b.marginLeft),
          (e = "4px" === b.width),
          (i.style.marginRight = "50%"),
          (f = "4px" === b.marginRight),
          ra.removeChild(h),
          (i = null);
      }
    }
    var c,
      e,
      f,
      g,
      h = d.createElement("div"),
      i = d.createElement("div");
    i.style &&
      ((i.style.backgroundClip = "content-box"),
      (i.cloneNode(!0).style.backgroundClip = ""),
      (o.clearCloneStyle = "content-box" === i.style.backgroundClip),
      (h.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      h.appendChild(i),
      r.extend(o, {
        pixelPosition: function () {
          return b(), c;
        },
        boxSizingReliable: function () {
          return b(), e;
        },
        pixelMarginRight: function () {
          return b(), f;
        },
        reliableMarginLeft: function () {
          return b(), g;
        },
      }));
  })();
  function Oa(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || Na(a)),
      c &&
        ((g = c.getPropertyValue(b) || c[b]),
        "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)),
        !o.pixelMarginRight() &&
          Ma.test(g) &&
          La.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    );
  }
  function Pa(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  var Qa = /^(none|table(?!-c[ea]).+)/,
    Ra = /^--/,
    Sa = { position: "absolute", visibility: "hidden", display: "block" },
    Ta = { letterSpacing: "0", fontWeight: "400" },
    Ua = ["Webkit", "Moz", "ms"],
    Va = d.createElement("div").style;
  function Wa(a) {
    if (a in Va) return a;
    var b = a[0].toUpperCase() + a.slice(1),
      c = Ua.length;
    while (c--) if (((a = Ua[c] + b), a in Va)) return a;
  }
  function Xa(a) {
    var b = r.cssProps[a];
    return b || (b = r.cssProps[a] = Wa(a) || a), b;
  }
  function Ya(a, b, c) {
    var d = ba.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }
  function Za(a, b, c, d, e) {
    var f,
      g = 0;
    for (
      f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
      f < 4;
      f += 2
    )
      "margin" === c && (g += r.css(a, c + ca[f], !0, e)),
        d
          ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)),
            "margin" !== c &&
              (g -= r.css(a, "border" + ca[f] + "Width", !0, e)))
          : ((g += r.css(a, "padding" + ca[f], !0, e)),
            "padding" !== c &&
              (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    return g;
  }
  function $a(a, b, c) {
    var d,
      e = Na(a),
      f = Oa(a, b, e),
      g = "border-box" === r.css(a, "boxSizing", !1, e);
    return Ma.test(f)
      ? f
      : ((d = g && (o.boxSizingReliable() || f === a.style[b])),
        "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]),
        (f = parseFloat(f) || 0),
        f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
  }
  r.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Oa(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = r.camelCase(b),
          i = Ra.test(b),
          j = a.style;
        return (
          i || (b = Xa(h)),
          (g = r.cssHooks[b] || r.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : j[b]
            : ((f = typeof c),
              "string" === f &&
                (e = ba.exec(c)) &&
                e[1] &&
                ((c = fa(a, b, e)), (f = "number")),
              null != c &&
                c === c &&
                ("number" === f &&
                  (c += (e && e[3]) || (r.cssNumber[h] ? "" : "px")),
                o.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (j[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i ? j.setProperty(b, c) : (j[b] = c))),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = r.camelCase(b),
        i = Ra.test(b);
      return (
        i || (b = Xa(h)),
        (g = r.cssHooks[b] || r.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = Oa(a, b, d)),
        "normal" === e && b in Ta && (e = Ta[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e)
          : e
      );
    },
  }),
    r.each(["height", "width"], function (a, b) {
      r.cssHooks[b] = {
        get: function (a, c, d) {
          if (c)
            return !Qa.test(r.css(a, "display")) ||
              (a.getClientRects().length && a.getBoundingClientRect().width)
              ? $a(a, b, d)
              : ea(a, Sa, function () {
                  return $a(a, b, d);
                });
        },
        set: function (a, c, d) {
          var e,
            f = d && Na(a),
            g =
              d &&
              Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
          return (
            g &&
              (e = ba.exec(c)) &&
              "px" !== (e[3] || "px") &&
              ((a.style[b] = c), (c = r.css(a, b))),
            Ya(a, c, g)
          );
        },
      };
    }),
    (r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
      if (b)
        return (
          (parseFloat(Oa(a, "marginLeft")) ||
            a.getBoundingClientRect().left -
              ea(a, { marginLeft: 0 }, function () {
                return a.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (r.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            d < 4;
            d++
          )
            e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        La.test(a) || (r.cssHooks[a + b].set = Ya);
    }),
    r.fn.extend({
      css: function (a, b) {
        return T(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (Array.isArray(b)) {
              for (d = Na(a), e = b.length; g < e; g++)
                f[b[g]] = r.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
    });
  function _a(a, b, c, d, e) {
    return new _a.prototype.init(a, b, c, d, e);
  }
  (r.Tween = _a),
    (_a.prototype = {
      constructor: _a,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || r.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (r.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = _a.propHooks[this.prop];
        return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = _a.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                r.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : _a.propHooks._default.set(this),
          this
        );
      },
    }),
    (_a.prototype.init.prototype = _a.prototype),
    (_a.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = r.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
        },
        set: function (a) {
          r.fx.step[a.prop]
            ? r.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : r.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    }),
    (_a.propHooks.scrollTop = _a.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (r.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (r.fx = _a.prototype.init),
    (r.fx.step = {});
  var ab,
    bb,
    cb = /^(?:toggle|show|hide)$/,
    db = /queueHooks$/;
  function eb() {
    bb &&
      (d.hidden === !1 && a.requestAnimationFrame
        ? a.requestAnimationFrame(eb)
        : a.setTimeout(eb, r.fx.interval),
      r.fx.tick());
  }
  function fb() {
    return (
      a.setTimeout(function () {
        ab = void 0;
      }),
      (ab = r.now())
    );
  }
  function gb(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; d < 4; d += 2 - b)
      (c = ca[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function hb(a, b, c) {
    for (
      var d,
        e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]),
        f = 0,
        g = e.length;
      f < g;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function ib(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = "width" in b || "height" in b,
      m = this,
      n = {},
      o = a.style,
      p = a.nodeType && da(a),
      q = W.get(a, "fxshow");
    c.queue ||
      ((g = r._queueHooks(a, "fx")),
      null == g.unqueued &&
        ((g.unqueued = 0),
        (h = g.empty.fire),
        (g.empty.fire = function () {
          g.unqueued || h();
        })),
      g.unqueued++,
      m.always(function () {
        m.always(function () {
          g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
        });
      }));
    for (d in b)
      if (((e = b[d]), cb.test(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
        ) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        n[d] = (q && q[d]) || r.style(a, d);
      }
    if (((i = !r.isEmptyObject(b)), i || !r.isEmptyObject(n))) {
      l &&
        1 === a.nodeType &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = q && q.display),
        null == j && (j = W.get(a, "display")),
        (k = r.css(a, "display")),
        "none" === k &&
          (j
            ? (k = j)
            : (ia([a], !0),
              (j = a.style.display || j),
              (k = r.css(a, "display")),
              ia([a]))),
        ("inline" === k || ("inline-block" === k && null != j)) &&
          "none" === r.css(a, "float") &&
          (i ||
            (m.done(function () {
              o.display = j;
            }),
            null == j && ((k = o.display), (j = "none" === k ? "" : k))),
          (o.display = "inline-block"))),
        c.overflow &&
          ((o.overflow = "hidden"),
          m.always(function () {
            (o.overflow = c.overflow[0]),
              (o.overflowX = c.overflow[1]),
              (o.overflowY = c.overflow[2]);
          })),
        (i = !1);
      for (d in n)
        i ||
          (q
            ? "hidden" in q && (p = q.hidden)
            : (q = W.access(a, "fxshow", { display: j })),
          f && (q.hidden = !p),
          p && ia([a], !0),
          m.done(function () {
            p || ia([a]), W.remove(a, "fxshow");
            for (d in n) r.style(a, d, n[d]);
          })),
          (i = hb(p ? q[d] : 0, d, m)),
          d in q || ((q[d] = i.start), p && ((i.end = i.start), (i.start = 0)));
    }
  }
  function jb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = r.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        Array.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = r.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function kb(a, b, c) {
    var d,
      e,
      f = 0,
      g = kb.prefilters.length,
      h = r.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = ab || fb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          g < i;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          f < 1 && i
            ? c
            : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: r.extend({}, b),
        opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: ab || fb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = r.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; c < d; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        },
      }),
      k = j.props;
    for (jb(k, j.opts.specialEasing); f < g; f++)
      if ((d = kb.prefilters[f].call(j, a, k, j.opts)))
        return (
          r.isFunction(d.stop) &&
            (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)),
          d
        );
    return (
      r.map(k, hb, j),
      r.isFunction(j.opts.start) && j.opts.start.call(a, j),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always),
      r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
    );
  }
  (r.Animation = r.extend(kb, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b);
          return fa(c.elem, a, ba.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      r.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(L));
      for (var c, d = 0, e = a.length; d < e; d++)
        (c = a[d]),
          (kb.tweeners[c] = kb.tweeners[c] || []),
          kb.tweeners[c].unshift(b);
    },
    prefilters: [ib],
    prefilter: function (a, b) {
      b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
    },
  })),
    (r.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? r.extend({}, a)
          : {
              complete: c || (!c && b) || (r.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !r.isFunction(b) && b),
            };
      return (
        r.fx.off
          ? (d.duration = 0)
          : "number" != typeof d.duration &&
            (d.duration in r.fx.speeds
              ? (d.duration = r.fx.speeds[d.duration])
              : (d.duration = r.fx.speeds._default)),
        (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          r.isFunction(d.old) && d.old.call(this),
            d.queue && r.dequeue(this, d.queue);
        }),
        d
      );
    }),
    r.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(da)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function () {
            var b = kb(this, r.extend({}, a), f);
            (e || W.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = r.timers,
              g = W.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (!b && c) || r.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = W.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = r.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                r.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; b < g; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    r.each(["toggle", "show", "hide"], function (a, b) {
      var c = r.fn[b];
      r.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(gb(b, !0), a, d, e);
      };
    }),
    r.each(
      {
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        r.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (r.timers = []),
    (r.fx.tick = function () {
      var a,
        b = 0,
        c = r.timers;
      for (ab = r.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || r.fx.stop(), (ab = void 0);
    }),
    (r.fx.timer = function (a) {
      r.timers.push(a), r.fx.start();
    }),
    (r.fx.interval = 13),
    (r.fx.start = function () {
      bb || ((bb = !0), eb());
    }),
    (r.fx.stop = function () {
      bb = null;
    }),
    (r.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (r.fn.delay = function (b, c) {
      return (
        (b = r.fx ? r.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function () {
      var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
      (a.type = "checkbox"),
        (o.checkOn = "" !== a.value),
        (o.optSelected = c.selected),
        (a = d.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (o.radioValue = "t" === a.value);
    })();
  var lb,
    mb = r.expr.attrHandle;
  r.fn.extend({
    attr: function (a, b) {
      return T(this, r.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    },
  }),
    r.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return "undefined" == typeof a.getAttribute
            ? r.prop(a, b, c)
            : ((1 === f && r.isXMLDoc(a)) ||
                (e =
                  r.attrHooks[b.toLowerCase()] ||
                  (r.expr.match.bool.test(b) ? lb : void 0)),
              void 0 !== c
                ? null === c
                  ? void r.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : ((d = r.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!o.radioValue && "radio" === b && B(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d = 0,
          e = b && b.match(L);
        if (e && 1 === a.nodeType) while ((c = e[d++])) a.removeAttribute(c);
      },
    }),
    (lb = {
      set: function (a, b, c) {
        return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = mb[b] || r.find.attr;
      mb[b] = function (a, b, d) {
        var e,
          f,
          g = b.toLowerCase();
        return (
          d ||
            ((f = mb[g]),
            (mb[g] = e),
            (e = null != c(a, b, d) ? g : null),
            (mb[g] = f)),
          e
        );
      };
    });
  var nb = /^(?:input|select|textarea|button)$/i,
    ob = /^(?:a|area)$/i;
  r.fn.extend({
    prop: function (a, b) {
      return T(this, r.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    },
  }),
    r.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && r.isXMLDoc(a)) ||
              ((b = r.propFix[b] || b), (e = r.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = r.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : nb.test(a.nodeName) || (ob.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    o.optSelected ||
      (r.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function (a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        },
      }),
    r.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        r.propFix[this.toLowerCase()] = this;
      }
    );
  function pb(a) {
    var b = a.match(L) || [];
    return b.join(" ");
  }
  function qb(a) {
    return (a.getAttribute && a.getAttribute("class")) || "";
  }
  r.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (r.isFunction(a))
        return this.each(function (b) {
          r(this).addClass(a.call(this, b, qb(this)));
        });
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while ((c = this[i++]))
          if (((e = qb(c)), (d = 1 === c.nodeType && " " + pb(e) + " "))) {
            g = 0;
            while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            (h = pb(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (r.isFunction(a))
        return this.each(function (b) {
          r(this).removeClass(a.call(this, b, qb(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while ((c = this[i++]))
          if (((e = qb(c)), (d = 1 === c.nodeType && " " + pb(e) + " "))) {
            g = 0;
            while ((f = b[g++]))
              while (d.indexOf(" " + f + " ") > -1)
                d = d.replace(" " + f + " ", " ");
            (h = pb(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : r.isFunction(a)
        ? this.each(function (c) {
            r(this).toggleClass(a.call(this, c, qb(this), b), b);
          })
        : this.each(function () {
            var b, d, e, f;
            if ("string" === c) {
              (d = 0), (e = r(this)), (f = a.match(L) || []);
              while ((b = f[d++]))
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else (void 0 !== a && "boolean" !== c) || ((b = qb(this)), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0;
      b = " " + a + " ";
      while ((c = this[d++]))
        if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1)
          return !0;
      return !1;
    },
  });
  var rb = /\r/g;
  r.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = r.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, r(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : Array.isArray(e) &&
                    (e = r.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  r.valHooks[this.type] ||
                  r.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    r.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = r.find.attr(a, "value");
            return null != b ? b : pb(r.text(a));
          },
        },
        select: {
          get: function (a) {
            var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;
            for (d = f < 0 ? i : g ? f : 0; d < i; d++)
              if (
                ((c = e[d]),
                (c.selected || d === f) &&
                  !c.disabled &&
                  (!c.parentNode.disabled || !B(c.parentNode, "optgroup")))
              ) {
                if (((b = r(c).val()), g)) return b;
                h.push(b);
              }
            return h;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;
            while (g--)
              (d = e[g]),
                (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) &&
                  (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    r.each(["radio", "checkbox"], function () {
      (r.valHooks[this] = {
        set: function (a, b) {
          if (Array.isArray(b))
            return (a.checked = r.inArray(r(a).val(), b) > -1);
        },
      }),
        o.checkOn ||
          (r.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var sb = /^(?:focusinfocus|focusoutblur)$/;
  r.extend(r.event, {
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        k,
        m,
        n,
        o = [e || d],
        p = l.call(b, "type") ? b.type : b,
        q = l.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((h = i = e = e || d),
        3 !== e.nodeType &&
          8 !== e.nodeType &&
          !sb.test(p + r.event.triggered) &&
          (p.indexOf(".") > -1 &&
            ((q = p.split(".")), (p = q.shift()), q.sort()),
          (k = p.indexOf(":") < 0 && "on" + p),
          (b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b)),
          (b.isTrigger = f ? 2 : 3),
          (b.namespace = q.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = e),
          (c = null == c ? [b] : r.makeArray(c, [b])),
          (n = r.event.special[p] || {}),
          f || !n.trigger || n.trigger.apply(e, c) !== !1))
      ) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (
            j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            o.push(h), (i = h);
          i === (e.ownerDocument || d) &&
            o.push(i.defaultView || i.parentWindow || a);
        }
        g = 0;
        while ((h = o[g++]) && !b.isPropagationStopped())
          (b.type = g > 1 ? j : n.bindType || p),
            (m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle")),
            m && m.apply(h, c),
            (m = k && h[k]),
            m &&
              m.apply &&
              U(h) &&
              ((b.result = m.apply(h, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = p),
          f ||
            b.isDefaultPrevented() ||
            (n._default && n._default.apply(o.pop(), c) !== !1) ||
            !U(e) ||
            (k &&
              r.isFunction(e[p]) &&
              !r.isWindow(e) &&
              ((i = e[k]),
              i && (e[k] = null),
              (r.event.triggered = p),
              e[p](),
              (r.event.triggered = void 0),
              i && (e[k] = i))),
          b.result
        );
      }
    },
    simulate: function (a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });
      r.event.trigger(d, null, b);
    },
  }),
    r.fn.extend({
      trigger: function (a, b) {
        return this.each(function () {
          r.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        if (c) return r.event.trigger(a, b, c, !0);
      },
    }),
    r.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (a, b) {
        r.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    r.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    (o.focusin = "onfocusin" in a),
    o.focusin ||
      r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          r.event.simulate(b, a.target, r.event.fix(a));
        };
        r.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = W.access(d, b);
            e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = W.access(d, b) - 1;
            e
              ? W.access(d, b, e)
              : (d.removeEventListener(a, c, !0), W.remove(d, b));
          },
        };
      });
  var tb = a.location,
    ub = r.now(),
    vb = /\?/;
  r.parseXML = function (b) {
    var c;
    if (!b || "string" != typeof b) return null;
    try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }
    return (
      (c && !c.getElementsByTagName("parsererror").length) ||
        r.error("Invalid XML: " + b),
      c
    );
  };
  var wb = /\[\]$/,
    xb = /\r?\n/g,
    yb = /^(?:submit|button|image|reset|file)$/i,
    zb = /^(?:input|select|textarea|keygen)/i;
  function Ab(a, b, c, d) {
    var e;
    if (Array.isArray(b))
      r.each(b, function (b, e) {
        c || wb.test(a)
          ? d(a, e)
          : Ab(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            );
      });
    else if (c || "object" !== r.type(b)) d(a, b);
    else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
  }
  (r.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        var c = r.isFunction(b) ? b() : b;
        d[d.length] =
          encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
      };
    if (Array.isArray(a) || (a.jquery && !r.isPlainObject(a)))
      r.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Ab(c, a[c], b, e);
    return d.join("&");
  }),
    r.fn.extend({
      serialize: function () {
        return r.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = r.prop(this, "elements");
          return a ? r.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !r(this).is(":disabled") &&
              zb.test(this.nodeName) &&
              !yb.test(a) &&
              (this.checked || !ja.test(a))
            );
          })
          .map(function (a, b) {
            var c = r(this).val();
            return null == c
              ? null
              : Array.isArray(c)
              ? r.map(c, function (a) {
                  return { name: b.name, value: a.replace(xb, "\r\n") };
                })
              : { name: b.name, value: c.replace(xb, "\r\n") };
          })
          .get();
      },
    });
  var Bb = /%20/g,
    Cb = /#.*$/,
    Db = /([?&])_=[^&]*/,
    Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Gb = /^(?:GET|HEAD)$/,
    Hb = /^\/\//,
    Ib = {},
    Jb = {},
    Kb = "*/".concat("*"),
    Lb = d.createElement("a");
  Lb.href = tb.href;
  function Mb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(L) || [];
      if (r.isFunction(c))
        while ((d = f[e++]))
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function Nb(a, b, c, d) {
    var e = {},
      f = a === Jb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        r.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Ob(a, b) {
    var c,
      d,
      e = r.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && r.extend(!0, a, d), a;
  }
  function Pb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    if (f) return f !== i[0] && i.unshift(f), c[f];
  }
  function Qb(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  r.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: tb.href,
      type: "GET",
      isLocal: Fb.test(tb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Kb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": r.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
    },
    ajaxPrefilter: Mb(Ib),
    ajaxTransport: Mb(Jb),
    ajax: function (b, c) {
      "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
      var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o = r.ajaxSetup({}, c),
        p = o.context || o,
        q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
        s = r.Deferred(),
        t = r.Callbacks("once memory"),
        u = o.statusCode || {},
        v = {},
        w = {},
        x = "canceled",
        y = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (k) {
              if (!h) {
                h = {};
                while ((b = Eb.exec(g))) h[b[1].toLowerCase()] = b[2];
              }
              b = h[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return k ? g : null;
          },
          setRequestHeader: function (a, b) {
            return (
              null == k &&
                ((a = w[a.toLowerCase()] = w[a.toLowerCase()] || a),
                (v[a] = b)),
              this
            );
          },
          overrideMimeType: function (a) {
            return null == k && (o.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (k) y.always(a[y.status]);
              else for (b in a) u[b] = [u[b], a[b]];
            return this;
          },
          abort: function (a) {
            var b = a || x;
            return e && e.abort(b), A(0, b), this;
          },
        };
      if (
        (s.promise(y),
        (o.url = ((b || o.url || tb.href) + "").replace(
          Hb,
          tb.protocol + "//"
        )),
        (o.type = c.method || c.type || o.method || o.type),
        (o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""]),
        null == o.crossDomain)
      ) {
        j = d.createElement("a");
        try {
          (j.href = o.url),
            (j.href = j.href),
            (o.crossDomain =
              Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host);
        } catch (z) {
          o.crossDomain = !0;
        }
      }
      if (
        (o.data &&
          o.processData &&
          "string" != typeof o.data &&
          (o.data = r.param(o.data, o.traditional)),
        Nb(Ib, o, c, y),
        k)
      )
        return y;
      (l = r.event && o.global),
        l && 0 === r.active++ && r.event.trigger("ajaxStart"),
        (o.type = o.type.toUpperCase()),
        (o.hasContent = !Gb.test(o.type)),
        (f = o.url.replace(Cb, "")),
        o.hasContent
          ? o.data &&
            o.processData &&
            0 ===
              (o.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (o.data = o.data.replace(Bb, "+"))
          : ((n = o.url.slice(f.length)),
            o.data && ((f += (vb.test(f) ? "&" : "?") + o.data), delete o.data),
            o.cache === !1 &&
              ((f = f.replace(Db, "$1")),
              (n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n)),
            (o.url = f + n)),
        o.ifModified &&
          (r.lastModified[f] &&
            y.setRequestHeader("If-Modified-Since", r.lastModified[f]),
          r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])),
        ((o.data && o.hasContent && o.contentType !== !1) || c.contentType) &&
          y.setRequestHeader("Content-Type", o.contentType),
        y.setRequestHeader(
          "Accept",
          o.dataTypes[0] && o.accepts[o.dataTypes[0]]
            ? o.accepts[o.dataTypes[0]] +
                ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "")
            : o.accepts["*"]
        );
      for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
      if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k))
        return y.abort();
      if (
        ((x = "abort"),
        t.add(o.complete),
        y.done(o.success),
        y.fail(o.error),
        (e = Nb(Jb, o, c, y)))
      ) {
        if (((y.readyState = 1), l && q.trigger("ajaxSend", [y, o]), k))
          return y;
        o.async &&
          o.timeout > 0 &&
          (i = a.setTimeout(function () {
            y.abort("timeout");
          }, o.timeout));
        try {
          (k = !1), e.send(v, A);
        } catch (z) {
          if (k) throw z;
          A(-1, z);
        }
      } else A(-1, "No Transport");
      function A(b, c, d, h) {
        var j,
          m,
          n,
          v,
          w,
          x = c;
        k ||
          ((k = !0),
          i && a.clearTimeout(i),
          (e = void 0),
          (g = h || ""),
          (y.readyState = b > 0 ? 4 : 0),
          (j = (b >= 200 && b < 300) || 304 === b),
          d && (v = Pb(o, y, d)),
          (v = Qb(o, v, y, j)),
          j
            ? (o.ifModified &&
                ((w = y.getResponseHeader("Last-Modified")),
                w && (r.lastModified[f] = w),
                (w = y.getResponseHeader("etag")),
                w && (r.etag[f] = w)),
              204 === b || "HEAD" === o.type
                ? (x = "nocontent")
                : 304 === b
                ? (x = "notmodified")
                : ((x = v.state), (m = v.data), (n = v.error), (j = !n)))
            : ((n = x), (!b && x) || ((x = "error"), b < 0 && (b = 0))),
          (y.status = b),
          (y.statusText = (c || x) + ""),
          j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]),
          y.statusCode(u),
          (u = void 0),
          l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]),
          t.fireWith(p, [y, x]),
          l &&
            (q.trigger("ajaxComplete", [y, o]),
            --r.active || r.event.trigger("ajaxStop")));
      }
      return y;
    },
    getJSON: function (a, b, c) {
      return r.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return r.get(a, void 0, b, "script");
    },
  }),
    r.each(["get", "post"], function (a, b) {
      r[b] = function (a, c, d, e) {
        return (
          r.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          r.ajax(
            r.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              r.isPlainObject(a) && a
            )
          )
        );
      };
    }),
    (r._evalUrl = function (a) {
      return r.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    r.fn.extend({
      wrapAll: function (a) {
        var b;
        return (
          this[0] &&
            (r.isFunction(a) && (a = a.call(this[0])),
            (b = r(a, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (a) {
        return r.isFunction(a)
          ? this.each(function (b) {
              r(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = r(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = r.isFunction(a);
        return this.each(function (c) {
          r(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function (a) {
        return (
          this.parent(a)
            .not("body")
            .each(function () {
              r(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (r.expr.pseudos.hidden = function (a) {
      return !r.expr.pseudos.visible(a);
    }),
    (r.expr.pseudos.visible = function (a) {
      return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }),
    (r.ajaxSettings.xhr = function () {
      try {
        return new a.XMLHttpRequest();
      } catch (b) {}
    });
  var Rb = { 0: 200, 1223: 204 },
    Sb = r.ajaxSettings.xhr();
  (o.cors = !!Sb && "withCredentials" in Sb),
    (o.ajax = Sb = !!Sb),
    r.ajaxTransport(function (b) {
      var c, d;
      if (o.cors || (Sb && !b.crossDomain))
        return {
          send: function (e, f) {
            var g,
              h = b.xhr();
            if (
              (h.open(b.type, b.url, b.async, b.username, b.password),
              b.xhrFields)
            )
              for (g in b.xhrFields) h[g] = b.xhrFields[g];
            b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
              b.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest");
            for (g in e) h.setRequestHeader(g, e[g]);
            (c = function (a) {
              return function () {
                c &&
                  ((c =
                    d =
                    h.onload =
                    h.onerror =
                    h.onabort =
                    h.onreadystatechange =
                      null),
                  "abort" === a
                    ? h.abort()
                    : "error" === a
                    ? "number" != typeof h.status
                      ? f(0, "error")
                      : f(h.status, h.statusText)
                    : f(
                        Rb[h.status] || h.status,
                        h.statusText,
                        "text" !== (h.responseType || "text") ||
                          "string" != typeof h.responseText
                          ? { binary: h.response }
                          : { text: h.responseText },
                        h.getAllResponseHeaders()
                      ));
              };
            }),
              (h.onload = c()),
              (d = h.onerror = c("error")),
              void 0 !== h.onabort
                ? (h.onabort = d)
                : (h.onreadystatechange = function () {
                    4 === h.readyState &&
                      a.setTimeout(function () {
                        c && d();
                      });
                  }),
              (c = c("abort"));
            try {
              h.send((b.hasContent && b.data) || null);
            } catch (i) {
              if (c) throw i;
            }
          },
          abort: function () {
            c && c();
          },
        };
    }),
    r.ajaxPrefilter(function (a) {
      a.crossDomain && (a.contents.script = !1);
    }),
    r.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (a) {
          return r.globalEval(a), a;
        },
      },
    }),
    r.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    r.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (e, f) {
            (b = r("<script>")
              .prop({ charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && f("error" === a.type ? 404 : 200, a.type);
                })
              )),
              d.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Tb = [],
    Ub = /(=)\?(?=&|$)|\?\?/;
  r.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Tb.pop() || r.expando + "_" + ub++;
      return (this[a] = !0), a;
    },
  }),
    r.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Ub.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ub.test(b.data) &&
              "data");
      if (h || "jsonp" === b.dataTypes[0])
        return (
          (e = b.jsonpCallback =
            r.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Ub, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || r.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            void 0 === f ? r(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Tb.push(e)),
              g && r.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script"
        );
    }),
    (o.createHTMLDocument = (function () {
      var a = d.implementation.createHTMLDocument("").body;
      return (
        (a.innerHTML = "<form></form><form></form>"), 2 === a.childNodes.length
      );
    })()),
    (r.parseHTML = function (a, b, c) {
      if ("string" != typeof a) return [];
      "boolean" == typeof b && ((c = b), (b = !1));
      var e, f, g;
      return (
        b ||
          (o.createHTMLDocument
            ? ((b = d.implementation.createHTMLDocument("")),
              (e = b.createElement("base")),
              (e.href = d.location.href),
              b.head.appendChild(e))
            : (b = d)),
        (f = C.exec(a)),
        (g = !c && []),
        f
          ? [b.createElement(f[1])]
          : ((f = qa([a], b, g)),
            g && g.length && r(g).remove(),
            r.merge([], f.childNodes))
      );
    }),
    (r.fn.load = function (a, b, c) {
      var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
      return (
        h > -1 && ((d = pb(a.slice(h))), (a = a.slice(0, h))),
        r.isFunction(b)
          ? ((c = b), (b = void 0))
          : b && "object" == typeof b && (e = "POST"),
        g.length > 0 &&
          r
            .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
            .done(function (a) {
              (f = arguments),
                g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
            })
            .always(
              c &&
                function (a, b) {
                  g.each(function () {
                    c.apply(this, f || [a.responseText, b, a]);
                  });
                }
            ),
        this
      );
    }),
    r.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        r.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (r.expr.pseudos.animated = function (a) {
      return r.grep(r.timers, function (b) {
        return a === b.elem;
      }).length;
    }),
    (r.offset = {
      setOffset: function (a, b, c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};
        "static" === k && (a.style.position = "relative"),
          (h = l.offset()),
          (f = r.css(a, "top")),
          (i = r.css(a, "left")),
          (j =
            ("absolute" === k || "fixed" === k) &&
            (f + i).indexOf("auto") > -1),
          j
            ? ((d = l.position()), (g = d.top), (e = d.left))
            : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
          r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))),
          null != b.top && (m.top = b.top - h.top + g),
          null != b.left && (m.left = b.left - h.left + e),
          "using" in b ? b.using.call(a, m) : l.css(m);
      },
    }),
    r.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                r.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d,
          e,
          f = this[0];
        if (f)
          return f.getClientRects().length
            ? ((d = f.getBoundingClientRect()),
              (b = f.ownerDocument),
              (c = b.documentElement),
              (e = b.defaultView),
              {
                top: d.top + e.pageYOffset - c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft,
              })
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === r.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                B(a[0], "html") || (d = a.offset()),
                (d = {
                  top: d.top + r.css(a[0], "borderTopWidth", !0),
                  left: d.left + r.css(a[0], "borderLeftWidth", !0),
                })),
            {
              top: b.top - d.top - r.css(c, "marginTop", !0),
              left: b.left - d.left - r.css(c, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent;
          while (a && "static" === r.css(a, "position")) a = a.offsetParent;
          return a || ra;
        });
      },
    }),
    r.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function (d) {
          return T(
            this,
            function (a, d, e) {
              var f;
              return (
                r.isWindow(a)
                  ? (f = a)
                  : 9 === a.nodeType && (f = a.defaultView),
                void 0 === e
                  ? f
                    ? f[b]
                    : a[d]
                  : void (f
                      ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
                      : (a[d] = e))
              );
            },
            a,
            d,
            arguments.length
          );
        };
      }
    ),
    r.each(["top", "left"], function (a, b) {
      r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
        if (c)
          return (c = Oa(a, b)), Ma.test(c) ? r(a).position()[b] + "px" : c;
      });
    }),
    r.each({ Height: "height", Width: "width" }, function (a, b) {
      r.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          r.fn[d] = function (e, f) {
            var g = arguments.length && (c || "boolean" != typeof e),
              h = c || (e === !0 || f === !0 ? "margin" : "border");
            return T(
              this,
              function (b, c, e) {
                var f;
                return r.isWindow(b)
                  ? 0 === d.indexOf("outer")
                    ? b["inner" + a]
                    : b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((f = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      f["scroll" + a],
                      b.body["offset" + a],
                      f["offset" + a],
                      f["client" + a]
                    ))
                  : void 0 === e
                  ? r.css(b, c, h)
                  : r.style(b, c, e, h);
              },
              b,
              g ? e : void 0,
              g
            );
          };
        }
      );
    }),
    r.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    }),
    (r.holdReady = function (a) {
      a ? r.readyWait++ : r.ready(!0);
    }),
    (r.isArray = Array.isArray),
    (r.parseJSON = JSON.parse),
    (r.nodeName = B),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return r;
      });
  var Vb = a.jQuery,
    Wb = a.$;
  return (
    (r.noConflict = function (b) {
      return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
    }),
    b || (a.jQuery = a.$ = r),
    r
  );
});
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */ (function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.Popper = t());
})(this, function () {
  "use strict";
  function e(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }
  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = window.getComputedStyle(e, null);
    return t ? o[t] : o;
  }
  function o(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }
  function n(e) {
    if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName))
      return window.document.body;
    var i = t(e),
      r = i.overflow,
      p = i.overflowX,
      s = i.overflowY;
    return /(auto|scroll)/.test(r + s + p) ? e : n(o(e));
  }
  function r(e) {
    var o = e && e.offsetParent,
      i = o && o.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TD", "TABLE"].indexOf(o.nodeName) &&
        "static" === t(o, "position")
        ? r(o)
        : o
      : window.document.documentElement;
  }
  function p(e) {
    var t = e.nodeName;
    return "BODY" !== t && ("HTML" === t || r(e.firstElementChild) === e);
  }
  function s(e) {
    return null === e.parentNode ? e : s(e.parentNode);
  }
  function d(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType)
      return window.document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = o ? e : t,
      n = o ? t : e,
      a = document.createRange();
    a.setStart(i, 0), a.setEnd(n, 0);
    var l = a.commonAncestorContainer;
    if ((e !== l && t !== l) || i.contains(n)) return p(l) ? l : r(l);
    var f = s(e);
    return f.host ? d(f.host, t) : d(e, s(t).host);
  }
  function a(e) {
    var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
      o = "top" === t ? "scrollTop" : "scrollLeft",
      i = e.nodeName;
    if ("BODY" === i || "HTML" === i) {
      var n = window.document.documentElement,
        r = window.document.scrollingElement || n;
      return r[o];
    }
    return e[o];
  }
  function l(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      i = a(t, "top"),
      n = a(t, "left"),
      r = o ? -1 : 1;
    return (
      (e.top += i * r),
      (e.bottom += i * r),
      (e.left += n * r),
      (e.right += n * r),
      e
    );
  }
  function f(e, t) {
    var o = "x" === t ? "Left" : "Top",
      i = "Left" == o ? "Right" : "Bottom";
    return (
      +e["border" + o + "Width"].split("px")[0] +
      +e["border" + i + "Width"].split("px")[0]
    );
  }
  function m(e, t, o, i) {
    return X(
      t["offset" + e],
      t["scroll" + e],
      o["client" + e],
      o["offset" + e],
      o["scroll" + e],
      ne()
        ? o["offset" + e] +
            i["margin" + ("Height" === e ? "Top" : "Left")] +
            i["margin" + ("Height" === e ? "Bottom" : "Right")]
        : 0
    );
  }
  function c() {
    var e = window.document.body,
      t = window.document.documentElement,
      o = ne() && window.getComputedStyle(t);
    return { height: m("Height", e, t, o), width: m("Width", e, t, o) };
  }
  function h(e) {
    return de({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }
  function g(e) {
    var o = {};
    if (ne())
      try {
        o = e.getBoundingClientRect();
        var i = a(e, "top"),
          n = a(e, "left");
        (o.top += i), (o.left += n), (o.bottom += i), (o.right += n);
      } catch (e) {}
    else o = e.getBoundingClientRect();
    var r = {
        left: o.left,
        top: o.top,
        width: o.right - o.left,
        height: o.bottom - o.top,
      },
      p = "HTML" === e.nodeName ? c() : {},
      s = p.width || e.clientWidth || r.right - r.left,
      d = p.height || e.clientHeight || r.bottom - r.top,
      l = e.offsetWidth - s,
      m = e.offsetHeight - d;
    if (l || m) {
      var g = t(e);
      (l -= f(g, "x")), (m -= f(g, "y")), (r.width -= l), (r.height -= m);
    }
    return h(r);
  }
  function u(e, o) {
    var i = ne(),
      r = "HTML" === o.nodeName,
      p = g(e),
      s = g(o),
      d = n(e),
      a = t(o),
      f = +a.borderTopWidth.split("px")[0],
      m = +a.borderLeftWidth.split("px")[0],
      c = h({
        top: p.top - s.top - f,
        left: p.left - s.left - m,
        width: p.width,
        height: p.height,
      });
    if (((c.marginTop = 0), (c.marginLeft = 0), !i && r)) {
      var u = +a.marginTop.split("px")[0],
        b = +a.marginLeft.split("px")[0];
      (c.top -= f - u),
        (c.bottom -= f - u),
        (c.left -= m - b),
        (c.right -= m - b),
        (c.marginTop = u),
        (c.marginLeft = b);
    }
    return (
      (i ? o.contains(d) : o === d && "BODY" !== d.nodeName) && (c = l(c, o)), c
    );
  }
  function b(e) {
    var t = window.document.documentElement,
      o = u(e, t),
      i = X(t.clientWidth, window.innerWidth || 0),
      n = X(t.clientHeight, window.innerHeight || 0),
      r = a(t),
      p = a(t, "left"),
      s = {
        top: r - o.top + o.marginTop,
        left: p - o.left + o.marginLeft,
        width: i,
        height: n,
      };
    return h(s);
  }
  function y(e) {
    var i = e.nodeName;
    return "BODY" === i || "HTML" === i
      ? !1
      : "fixed" === t(e, "position") || y(o(e));
  }
  function w(e, t, i, r) {
    var p = { top: 0, left: 0 },
      s = d(e, t);
    if ("viewport" === r) p = b(s);
    else {
      var a;
      "scrollParent" === r
        ? ((a = n(o(e))),
          "BODY" === a.nodeName && (a = window.document.documentElement))
        : "window" === r
        ? (a = window.document.documentElement)
        : (a = r);
      var l = u(a, s);
      if ("HTML" === a.nodeName && !y(s)) {
        var f = c(),
          m = f.height,
          h = f.width;
        (p.top += l.top - l.marginTop),
          (p.bottom = m + l.top),
          (p.left += l.left - l.marginLeft),
          (p.right = h + l.left);
      } else p = l;
    }
    return (p.left += i), (p.top += i), (p.right -= i), (p.bottom -= i), p;
  }
  function E(e) {
    var t = e.width,
      o = e.height;
    return t * o;
  }
  function v(e, t, o, i, n) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf("auto")) return e;
    var p = w(o, i, r, n),
      s = {
        top: { width: p.width, height: t.top - p.top },
        right: { width: p.right - t.right, height: p.height },
        bottom: { width: p.width, height: p.bottom - t.bottom },
        left: { width: t.left - p.left, height: p.height },
      },
      d = Object.keys(s)
        .map(function (e) {
          return de({ key: e }, s[e], { area: E(s[e]) });
        })
        .sort(function (e, t) {
          return t.area - e.area;
        }),
      a = d.filter(function (e) {
        var t = e.width,
          i = e.height;
        return t >= o.clientWidth && i >= o.clientHeight;
      }),
      l = 0 < a.length ? a[0].key : d[0].key,
      f = e.split("-")[1];
    return l + (f ? "-" + f : "");
  }
  function x(e, t, o) {
    var i = d(t, o);
    return u(o, i);
  }
  function O(e) {
    var t = window.getComputedStyle(e),
      o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
      n = { width: e.offsetWidth + i, height: e.offsetHeight + o };
    return n;
  }
  function L(e) {
    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }
  function S(e, t, o) {
    o = o.split("-")[0];
    var i = O(e),
      n = { width: i.width, height: i.height },
      r = -1 !== ["right", "left"].indexOf(o),
      p = r ? "top" : "left",
      s = r ? "left" : "top",
      d = r ? "height" : "width",
      a = r ? "width" : "height";
    return (
      (n[p] = t[p] + t[d] / 2 - i[d] / 2),
      (n[s] = o === s ? t[s] - i[a] : t[L(s)]),
      n
    );
  }
  function T(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function C(e, t, o) {
    if (Array.prototype.findIndex)
      return e.findIndex(function (e) {
        return e[t] === o;
      });
    var i = T(e, function (e) {
      return e[t] === o;
    });
    return e.indexOf(i);
  }
  function N(t, o, i) {
    var n = void 0 === i ? t : t.slice(0, C(t, "name", i));
    return (
      n.forEach(function (t) {
        t.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var i = t.function || t.fn;
        t.enabled &&
          e(i) &&
          ((o.offsets.popper = h(o.offsets.popper)),
          (o.offsets.reference = h(o.offsets.reference)),
          (o = i(o, t)));
      }),
      o
    );
  }
  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (e.offsets.reference = x(this.state, this.popper, this.reference)),
        (e.placement = v(
          this.options.placement,
          e.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (e.originalPlacement = e.placement),
        (e.offsets.popper = S(this.popper, e.offsets.reference, e.placement)),
        (e.offsets.popper.position = "absolute"),
        (e = N(this.modifiers, e)),
        this.state.isCreated
          ? this.options.onUpdate(e)
          : ((this.state.isCreated = !0), this.options.onCreate(e));
    }
  }
  function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
        i = e.enabled;
      return i && o === t;
    });
  }
  function B(e) {
    for (
      var t = [!1, "ms", "Webkit", "Moz", "O"],
        o = e.charAt(0).toUpperCase() + e.slice(1),
        n = 0;
      n < t.length - 1;
      n++
    ) {
      var i = t[n],
        r = i ? "" + i + o : e;
      if ("undefined" != typeof window.document.body.style[r]) return r;
    }
    return null;
  }
  function P() {
    return (
      (this.state.isDestroyed = !0),
      W(this.modifiers, "applyStyle") &&
        (this.popper.removeAttribute("x-placement"),
        (this.popper.style.left = ""),
        (this.popper.style.position = ""),
        (this.popper.style.top = ""),
        (this.popper.style[B("transform")] = "")),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function D(e, t, o, i) {
    var r = "BODY" === e.nodeName,
      p = r ? window : e;
    p.addEventListener(t, o, { passive: !0 }),
      r || D(n(p.parentNode), t, o, i),
      i.push(p);
  }
  function H(e, t, o, i) {
    (o.updateBound = i),
      window.addEventListener("resize", o.updateBound, { passive: !0 });
    var r = n(e);
    return (
      D(r, "scroll", o.updateBound, o.scrollParents),
      (o.scrollElement = r),
      (o.eventsEnabled = !0),
      o
    );
  }
  function A() {
    this.state.eventsEnabled ||
      (this.state = H(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function M(e, t) {
    return (
      window.removeEventListener("resize", t.updateBound),
      t.scrollParents.forEach(function (e) {
        e.removeEventListener("scroll", t.updateBound);
      }),
      (t.updateBound = null),
      (t.scrollParents = []),
      (t.scrollElement = null),
      (t.eventsEnabled = !1),
      t
    );
  }
  function I() {
    this.state.eventsEnabled &&
      (window.cancelAnimationFrame(this.scheduleUpdate),
      (this.state = M(this.reference, this.state)));
  }
  function R(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function U(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o) &&
        R(t[o]) &&
        (i = "px"),
        (e.style[o] = t[o] + i);
    });
  }
  function Y(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = t[o];
      !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }
  function F(e, t, o) {
    var i = T(e, function (e) {
        var o = e.name;
        return o === t;
      }),
      n =
        !!i &&
        e.some(function (e) {
          return e.name === o && e.enabled && e.order < i.order;
        });
    if (!n) {
      var r = "`" + t + "`";
      console.warn(
        "`" +
          o +
          "`" +
          " modifier is required by " +
          r +
          " modifier in order to work, be sure to include it before " +
          r +
          "!"
      );
    }
    return n;
  }
  function j(e) {
    return "end" === e ? "start" : "start" === e ? "end" : e;
  }
  function K(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = le.indexOf(e),
      i = le.slice(o + 1).concat(le.slice(0, o));
    return t ? i.reverse() : i;
  }
  function q(e, t, o, i) {
    var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      r = +n[1],
      p = n[2];
    if (!r) return e;
    if (0 === p.indexOf("%")) {
      var s;
      switch (p) {
        case "%p":
          s = o;
          break;
        case "%":
        case "%r":
        default:
          s = i;
      }
      var d = h(s);
      return (d[t] / 100) * r;
    }
    if ("vh" === p || "vw" === p) {
      var a;
      return (
        (a =
          "vh" === p
            ? X(document.documentElement.clientHeight, window.innerHeight || 0)
            : X(document.documentElement.clientWidth, window.innerWidth || 0)),
        (a / 100) * r
      );
    }
    return r;
  }
  function G(e, t, o, i) {
    var n = [0, 0],
      r = -1 !== ["right", "left"].indexOf(i),
      p = e.split(/(\+|\-)/).map(function (e) {
        return e.trim();
      }),
      s = p.indexOf(
        T(p, function (e) {
          return -1 !== e.search(/,|\s/);
        })
      );
    p[s] &&
      -1 === p[s].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var d = /\s*,\s*|\s+/,
      a =
        -1 === s
          ? [p]
          : [
              p.slice(0, s).concat([p[s].split(d)[0]]),
              [p[s].split(d)[1]].concat(p.slice(s + 1)),
            ];
    return (
      (a = a.map(function (e, i) {
        var n = (1 === i ? !r : r) ? "height" : "width",
          p = !1;
        return e
          .reduce(function (e, t) {
            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
              ? ((e[e.length - 1] = t), (p = !0), e)
              : p
              ? ((e[e.length - 1] += t), (p = !1), e)
              : e.concat(t);
          }, [])
          .map(function (e) {
            return q(e, n, t, o);
          });
      })),
      a.forEach(function (e, t) {
        e.forEach(function (o, i) {
          R(o) && (n[t] += o * ("-" === e[i - 1] ? -1 : 1));
        });
      }),
      n
    );
  }
  function z(e, t) {
    var o,
      i = t.offset,
      n = e.placement,
      r = e.offsets,
      p = r.popper,
      s = r.reference,
      d = n.split("-")[0];
    return (
      (o = R(+i) ? [+i, 0] : G(i, p, s, d)),
      "left" === d
        ? ((p.top += o[0]), (p.left -= o[1]))
        : "right" === d
        ? ((p.top += o[0]), (p.left += o[1]))
        : "top" === d
        ? ((p.left += o[0]), (p.top -= o[1]))
        : "bottom" === d && ((p.left += o[0]), (p.top += o[1])),
      (e.popper = p),
      e
    );
  }
  for (
    var V = Math.min,
      _ = Math.floor,
      X = Math.max,
      Q = ["native code", "[object MutationObserverConstructor]"],
      J = function (e) {
        return Q.some(function (t) {
          return -1 < (e || "").toString().indexOf(t);
        });
      },
      Z = "undefined" != typeof window,
      $ = ["Edge", "Trident", "Firefox"],
      ee = 0,
      te = 0;
    te < $.length;
    te += 1
  )
    if (Z && 0 <= navigator.userAgent.indexOf($[te])) {
      ee = 1;
      break;
    }
  var i,
    oe = Z && J(window.MutationObserver),
    ie = oe
      ? function (e) {
          var t = !1,
            o = 0,
            i = document.createElement("span"),
            n = new MutationObserver(function () {
              e(), (t = !1);
            });
          return (
            n.observe(i, { attributes: !0 }),
            function () {
              t || ((t = !0), i.setAttribute("x-index", o), ++o);
            }
          );
        }
      : function (e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              setTimeout(function () {
                (t = !1), e();
              }, ee));
          };
        },
    ne = function () {
      return (
        void 0 == i && (i = -1 !== navigator.appVersion.indexOf("MSIE 10")), i
      );
    },
    re = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    },
    pe = (function () {
      function e(e, t) {
        for (var o, n = 0; n < t.length; n++)
          (o = t[n]),
            (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
      }
      return function (t, o, i) {
        return o && e(t.prototype, o), i && e(t, i), t;
      };
    })(),
    se = function (e, t, o) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = o),
        e
      );
    },
    de =
      Object.assign ||
      function (e) {
        for (var t, o = 1; o < arguments.length; o++)
          for (var i in ((t = arguments[o]), t))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      },
    ae = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    le = ae.slice(3),
    fe = {
      FLIP: "flip",
      CLOCKWISE: "clockwise",
      COUNTERCLOCKWISE: "counterclockwise",
    },
    me = (function () {
      function t(o, i) {
        var n = this,
          r =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        re(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(n.update);
          }),
          (this.update = ie(this.update.bind(this))),
          (this.options = de({}, t.Defaults, r)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = o.jquery ? o[0] : o),
          (this.popper = i.jquery ? i[0] : i),
          (this.options.modifiers = {}),
          Object.keys(de({}, t.Defaults.modifiers, r.modifiers)).forEach(
            function (e) {
              n.options.modifiers[e] = de(
                {},
                t.Defaults.modifiers[e] || {},
                r.modifiers ? r.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (e) {
              return de({ name: e }, n.options.modifiers[e]);
            })
            .sort(function (e, t) {
              return e.order - t.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              e(t.onLoad) &&
              t.onLoad(n.reference, n.popper, n.options, t, n.state);
          }),
          this.update();
        var p = this.options.eventsEnabled;
        p && this.enableEventListeners(), (this.state.eventsEnabled = p);
      }
      return (
        pe(t, [
          {
            key: "update",
            value: function () {
              return k.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return P.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return A.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return I.call(this);
            },
          },
        ]),
        t
      );
    })();
  return (
    (me.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
    (me.placements = ae),
    (me.Defaults = {
      placement: "bottom",
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (e) {
            var t = e.placement,
              o = t.split("-")[0],
              i = t.split("-")[1];
            if (i) {
              var n = e.offsets,
                r = n.reference,
                p = n.popper,
                s = -1 !== ["bottom", "top"].indexOf(o),
                d = s ? "left" : "top",
                a = s ? "width" : "height",
                l = {
                  start: se({}, d, r[d]),
                  end: se({}, d, r[d] + r[a] - p[a]),
                };
              e.offsets.popper = de({}, p, l[i]);
            }
            return e;
          },
        },
        offset: { order: 200, enabled: !0, fn: z, offset: 0 },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (e, t) {
            var o = t.boundariesElement || r(e.instance.popper);
            e.instance.reference === o && (o = r(o));
            var i = w(e.instance.popper, e.instance.reference, t.padding, o);
            t.boundaries = i;
            var n = t.priority,
              p = e.offsets.popper,
              s = {
                primary: function (e) {
                  var o = p[e];
                  return (
                    p[e] < i[e] &&
                      !t.escapeWithReference &&
                      (o = X(p[e], i[e])),
                    se({}, e, o)
                  );
                },
                secondary: function (e) {
                  var o = "right" === e ? "left" : "top",
                    n = p[o];
                  return (
                    p[e] > i[e] &&
                      !t.escapeWithReference &&
                      (n = V(
                        p[o],
                        i[e] - ("right" === e ? p.width : p.height)
                      )),
                    se({}, o, n)
                  );
                },
              };
            return (
              n.forEach(function (e) {
                var t =
                  -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                p = de({}, p, s[t](e));
              }),
              (e.offsets.popper = p),
              e
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (e) {
            var t = e.offsets,
              o = t.popper,
              i = t.reference,
              n = e.placement.split("-")[0],
              r = _,
              p = -1 !== ["top", "bottom"].indexOf(n),
              s = p ? "right" : "bottom",
              d = p ? "left" : "top",
              a = p ? "width" : "height";
            return (
              o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]),
              o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])),
              e
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (e, o) {
            if (!F(e.instance.modifiers, "arrow", "keepTogether")) return e;
            var i = o.element;
            if ("string" == typeof i) {
              if (((i = e.instance.popper.querySelector(i)), !i)) return e;
            } else if (!e.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                e
              );
            var n = e.placement.split("-")[0],
              r = e.offsets,
              p = r.popper,
              s = r.reference,
              d = -1 !== ["left", "right"].indexOf(n),
              a = d ? "height" : "width",
              l = d ? "Top" : "Left",
              f = l.toLowerCase(),
              m = d ? "left" : "top",
              c = d ? "bottom" : "right",
              g = O(i)[a];
            s[c] - g < p[f] && (e.offsets.popper[f] -= p[f] - (s[c] - g)),
              s[f] + g > p[c] && (e.offsets.popper[f] += s[f] + g - p[c]);
            var u = s[f] + s[a] / 2 - g / 2,
              b = t(e.instance.popper, "margin" + l).replace("px", ""),
              y = u - h(e.offsets.popper)[f] - b;
            return (
              (y = X(V(p[a] - g, y), 0)),
              (e.arrowElement = i),
              (e.offsets.arrow = {}),
              (e.offsets.arrow[f] = Math.round(y)),
              (e.offsets.arrow[m] = ""),
              e
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (e, t) {
            if (W(e.instance.modifiers, "inner")) return e;
            if (e.flipped && e.placement === e.originalPlacement) return e;
            var o = w(
                e.instance.popper,
                e.instance.reference,
                t.padding,
                t.boundariesElement
              ),
              i = e.placement.split("-")[0],
              n = L(i),
              r = e.placement.split("-")[1] || "",
              p = [];
            switch (t.behavior) {
              case fe.FLIP:
                p = [i, n];
                break;
              case fe.CLOCKWISE:
                p = K(i);
                break;
              case fe.COUNTERCLOCKWISE:
                p = K(i, !0);
                break;
              default:
                p = t.behavior;
            }
            return (
              p.forEach(function (s, d) {
                if (i !== s || p.length === d + 1) return e;
                (i = e.placement.split("-")[0]), (n = L(i));
                var a = e.offsets.popper,
                  l = e.offsets.reference,
                  f = _,
                  m =
                    ("left" === i && f(a.right) > f(l.left)) ||
                    ("right" === i && f(a.left) < f(l.right)) ||
                    ("top" === i && f(a.bottom) > f(l.top)) ||
                    ("bottom" === i && f(a.top) < f(l.bottom)),
                  c = f(a.left) < f(o.left),
                  h = f(a.right) > f(o.right),
                  g = f(a.top) < f(o.top),
                  u = f(a.bottom) > f(o.bottom),
                  b =
                    ("left" === i && c) ||
                    ("right" === i && h) ||
                    ("top" === i && g) ||
                    ("bottom" === i && u),
                  y = -1 !== ["top", "bottom"].indexOf(i),
                  w =
                    !!t.flipVariations &&
                    ((y && "start" === r && c) ||
                      (y && "end" === r && h) ||
                      (!y && "start" === r && g) ||
                      (!y && "end" === r && u));
                (m || b || w) &&
                  ((e.flipped = !0),
                  (m || b) && (i = p[d + 1]),
                  w && (r = j(r)),
                  (e.placement = i + (r ? "-" + r : "")),
                  (e.offsets.popper = de(
                    {},
                    e.offsets.popper,
                    S(e.instance.popper, e.offsets.reference, e.placement)
                  )),
                  (e = N(e.instance.modifiers, e, "flip")));
              }),
              e
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (e) {
            var t = e.placement,
              o = t.split("-")[0],
              i = e.offsets,
              n = i.popper,
              r = i.reference,
              p = -1 !== ["left", "right"].indexOf(o),
              s = -1 === ["top", "left"].indexOf(o);
            return (
              (n[p ? "left" : "top"] =
                r[o] - (s ? n[p ? "width" : "height"] : 0)),
              (e.placement = L(t)),
              (e.offsets.popper = h(n)),
              e
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (e) {
            if (!F(e.instance.modifiers, "hide", "preventOverflow")) return e;
            var t = e.offsets.reference,
              o = T(e.instance.modifiers, function (e) {
                return "preventOverflow" === e.name;
              }).boundaries;
            if (
              t.bottom < o.top ||
              t.left > o.right ||
              t.top > o.bottom ||
              t.right < o.left
            ) {
              if (!0 === e.hide) return e;
              (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === e.hide) return e;
              (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
            }
            return e;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (e, t) {
            var o = t.x,
              i = t.y,
              n = e.offsets.popper,
              p = T(e.instance.modifiers, function (e) {
                return "applyStyle" === e.name;
              }).gpuAcceleration;
            void 0 !== p &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var s,
              d,
              a = void 0 === p ? t.gpuAcceleration : p,
              l = r(e.instance.popper),
              f = g(l),
              m = { position: n.position },
              c = {
                left: _(n.left),
                top: _(n.top),
                bottom: _(n.bottom),
                right: _(n.right),
              },
              h = "bottom" === o ? "top" : "bottom",
              u = "right" === i ? "left" : "right",
              b = B("transform");
            if (
              ((d = "bottom" == h ? -f.height + c.bottom : c.top),
              (s = "right" == u ? -f.width + c.right : c.left),
              a && b)
            )
              (m[b] = "translate3d(" + s + "px, " + d + "px, 0)"),
                (m[h] = 0),
                (m[u] = 0),
                (m.willChange = "transform");
            else {
              var y = "bottom" == h ? -1 : 1,
                w = "right" == u ? -1 : 1;
              (m[h] = d * y), (m[u] = s * w), (m.willChange = h + ", " + u);
            }
            var E = { "x-placement": e.placement };
            return (
              (e.attributes = de({}, E, e.attributes)),
              (e.styles = de({}, m, e.styles)),
              (e.arrowStyles = de({}, e.offsets.arrow, e.arrowStyles)),
              e
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (e) {
            return (
              U(e.instance.popper, e.styles),
              Y(e.instance.popper, e.attributes),
              e.arrowElement &&
                Object.keys(e.arrowStyles).length &&
                U(e.arrowElement, e.arrowStyles),
              e
            );
          },
          onLoad: function (e, t, o, i, n) {
            var r = x(n, t, e),
              p = v(
                o.placement,
                r,
                t,
                e,
                o.modifiers.flip.boundariesElement,
                o.modifiers.flip.padding
              );
            return (
              t.setAttribute("x-placement", p),
              U(t, { position: "absolute" }),
              o
            );
          },
          gpuAcceleration: void 0,
        },
      },
    }),
    me
  );
});
/*!
 * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
var bootstrap = (function (t, e, n) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  (e = e && e.hasOwnProperty("default") ? e.default : e),
    (n = n && n.hasOwnProperty("default") ? n.default : n);
  var s = (function () {
      function t(t) {
        return {}.toString
          .call(t)
          .match(/\s([a-zA-Z]+)/)[1]
          .toLowerCase();
      }
      function n() {
        return {
          bindType: r.end,
          delegateType: r.end,
          handle: function (t) {
            if (e(t.target).is(this))
              return t.handleObj.handler.apply(this, arguments);
          },
        };
      }
      function i() {
        if (window.QUnit) return !1;
        var t = document.createElement("bootstrap");
        for (var e in o)
          if ("undefined" != typeof t.style[e]) return { end: o[e] };
        return !1;
      }
      function s(t) {
        var n = this,
          i = !1;
        return (
          e(this).one(a.TRANSITION_END, function () {
            i = !0;
          }),
          setTimeout(function () {
            i || a.triggerTransitionEnd(n);
          }, t),
          this
        );
      }
      var r = !1,
        o = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        },
        a = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (t) {
            do {
              t += ~~(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
          },
          getSelectorFromElement: function (t) {
            var n = t.getAttribute("data-target");
            (n && "#" !== n) || (n = t.getAttribute("href") || "");
            try {
              return e(document).find(n).length > 0 ? n : null;
            } catch (t) {
              return null;
            }
          },
          reflow: function (t) {
            return t.offsetHeight;
          },
          triggerTransitionEnd: function (t) {
            e(t).trigger(r.end);
          },
          supportsTransitionEnd: function () {
            return Boolean(r);
          },
          isElement: function (t) {
            return (t[0] || t).nodeType;
          },
          typeCheckConfig: function (e, n, i) {
            for (var s in i)
              if (Object.prototype.hasOwnProperty.call(i, s)) {
                var r = i[s],
                  o = n[s],
                  l = o && a.isElement(o) ? "element" : t(o);
                if (!new RegExp(r).test(l))
                  throw new Error(
                    e.toUpperCase() +
                      ': Option "' +
                      s +
                      '" provided type "' +
                      l +
                      '" but expected type "' +
                      r +
                      '".'
                  );
              }
          },
        };
      return (
        (r = i()),
        (e.fn.emulateTransitionEnd = s),
        a.supportsTransitionEnd() && (e.event.special[a.TRANSITION_END] = n()),
        a
      );
    })(),
    r = function (t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
    },
    o = function (t, e) {
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e);
    },
    a = (function () {
      var t = "alert",
        n = e.fn[t],
        i = {
          CLOSE: "close.bs.alert",
          CLOSED: "closed.bs.alert",
          CLICK_DATA_API: "click.bs.alert.data-api",
        },
        o = { ALERT: "alert", FADE: "fade", SHOW: "show" },
        a = (function () {
          function t(t) {
            this._element = t;
          }
          var n = t.prototype;
          return (
            (n.close = function (t) {
              t = t || this._element;
              var e = this._getRootElement(t);
              this._triggerCloseEvent(e).isDefaultPrevented() ||
                this._removeElement(e);
            }),
            (n.dispose = function () {
              e.removeData(this._element, "bs.alert"), (this._element = null);
            }),
            (n._getRootElement = function (t) {
              var n = s.getSelectorFromElement(t),
                i = !1;
              return (
                n && (i = e(n)[0]), i || (i = e(t).closest("." + o.ALERT)[0]), i
              );
            }),
            (n._triggerCloseEvent = function (t) {
              var n = e.Event(i.CLOSE);
              return e(t).trigger(n), n;
            }),
            (n._removeElement = function (t) {
              var n = this;
              e(t).removeClass(o.SHOW),
                s.supportsTransitionEnd() && e(t).hasClass(o.FADE)
                  ? e(t)
                      .one(s.TRANSITION_END, function (e) {
                        return n._destroyElement(t, e);
                      })
                      .emulateTransitionEnd(150)
                  : this._destroyElement(t);
            }),
            (n._destroyElement = function (t) {
              e(t).detach().trigger(i.CLOSED).remove();
            }),
            (t._jQueryInterface = function (n) {
              return this.each(function () {
                var i = e(this),
                  s = i.data("bs.alert");
                s || ((s = new t(this)), i.data("bs.alert", s)),
                  "close" === n && s[n](this);
              });
            }),
            (t._handleDismiss = function (t) {
              return function (e) {
                e && e.preventDefault(), t.close(this);
              };
            }),
            r(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0-beta.2";
                },
              },
            ]),
            t
          );
        })();
      return (
        e(document).on(
          i.CLICK_DATA_API,
          { DISMISS: '[data-dismiss="alert"]' }.DISMISS,
          a._handleDismiss(new a())
        ),
        (e.fn[t] = a._jQueryInterface),
        (e.fn[t].Constructor = a),
        (e.fn[t].noConflict = function () {
          return (e.fn[t] = n), a._jQueryInterface;
        }),
        a
      );
    })(),
    l = (function () {
      var t = "button",
        n = e.fn[t],
        i = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
        s = {
          DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
          DATA_TOGGLE: '[data-toggle="buttons"]',
          INPUT: "input",
          ACTIVE: ".active",
          BUTTON: ".btn",
        },
        o = {
          CLICK_DATA_API: "click.bs.button.data-api",
          FOCUS_BLUR_DATA_API:
            "focus.bs.button.data-api blur.bs.button.data-api",
        },
        a = (function () {
          function t(t) {
            this._element = t;
          }
          var n = t.prototype;
          return (
            (n.toggle = function () {
              var t = !0,
                n = !0,
                r = e(this._element).closest(s.DATA_TOGGLE)[0];
              if (r) {
                var o = e(this._element).find(s.INPUT)[0];
                if (o) {
                  if ("radio" === o.type)
                    if (o.checked && e(this._element).hasClass(i.ACTIVE))
                      t = !1;
                    else {
                      var a = e(r).find(s.ACTIVE)[0];
                      a && e(a).removeClass(i.ACTIVE);
                    }
                  if (t) {
                    if (
                      o.hasAttribute("disabled") ||
                      r.hasAttribute("disabled") ||
                      o.classList.contains("disabled") ||
                      r.classList.contains("disabled")
                    )
                      return;
                    (o.checked = !e(this._element).hasClass(i.ACTIVE)),
                      e(o).trigger("change");
                  }
                  o.focus(), (n = !1);
                }
              }
              n &&
                this._element.setAttribute(
                  "aria-pressed",
                  !e(this._element).hasClass(i.ACTIVE)
                ),
                t && e(this._element).toggleClass(i.ACTIVE);
            }),
            (n.dispose = function () {
              e.removeData(this._element, "bs.button"), (this._element = null);
            }),
            (t._jQueryInterface = function (n) {
              return this.each(function () {
                var i = e(this).data("bs.button");
                i || ((i = new t(this)), e(this).data("bs.button", i)),
                  "toggle" === n && i[n]();
              });
            }),
            r(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0-beta.2";
                },
              },
            ]),
            t
          );
        })();
      return (
        e(document)
          .on(o.CLICK_DATA_API, s.DATA_TOGGLE_CARROT, function (t) {
            t.preventDefault();
            var n = t.target;
            e(n).hasClass(i.BUTTON) || (n = e(n).closest(s.BUTTON)),
              a._jQueryInterface.call(e(n), "toggle");
          })
          .on(o.FOCUS_BLUR_DATA_API, s.DATA_TOGGLE_CARROT, function (t) {
            var n = e(t.target).closest(s.BUTTON)[0];
            e(n).toggleClass(i.FOCUS, /^focus(in)?$/.test(t.type));
          }),
        (e.fn[t] = a._jQueryInterface),
        (e.fn[t].Constructor = a),
        (e.fn[t].noConflict = function () {
          return (e.fn[t] = n), a._jQueryInterface;
        }),
        a
      );
    })(),
    h = (function () {
      var t = "carousel",
        n = "bs.carousel",
        i = "." + n,
        o = e.fn[t],
        a = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0,
        },
        l = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
        },
        h = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" },
        c = {
          SLIDE: "slide" + i,
          SLID: "slid" + i,
          KEYDOWN: "keydown" + i,
          MOUSEENTER: "mouseenter" + i,
          MOUSELEAVE: "mouseleave" + i,
          TOUCHEND: "touchend" + i,
          LOAD_DATA_API: "load.bs.carousel.data-api",
          CLICK_DATA_API: "click.bs.carousel.data-api",
        },
        u = {
          CAROUSEL: "carousel",
          ACTIVE: "active",
          SLIDE: "slide",
          RIGHT: "carousel-item-right",
          LEFT: "carousel-item-left",
          NEXT: "carousel-item-next",
          PREV: "carousel-item-prev",
          ITEM: "carousel-item",
        },
        d = {
          ACTIVE: ".active",
          ACTIVE_ITEM: ".active.carousel-item",
          ITEM: ".carousel-item",
          NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
          INDICATORS: ".carousel-indicators",
          DATA_SLIDE: "[data-slide], [data-slide-to]",
          DATA_RIDE: '[data-ride="carousel"]',
        },
        f = (function () {
          function o(t, n) {
            (this._items = null),
              (this._interval = null),
              (this._activeElement = null),
              (this._isPaused = !1),
              (this._isSliding = !1),
              (this.touchTimeout = null),
              (this._config = this._getConfig(n)),
              (this._element = e(t)[0]),
              (this._indicatorsElement = e(this._element).find(
                d.INDICATORS
              )[0]),
              this._addEventListeners();
          }
          var f = o.prototype;
          return (
            (f.next = function () {
              this._isSliding || this._slide(h.NEXT);
            }),
            (f.nextWhenVisible = function () {
              !document.hidden &&
                e(this._element).is(":visible") &&
                "hidden" !== e(this._element).css("visibility") &&
                this.next();
            }),
            (f.prev = function () {
              this._isSliding || this._slide(h.PREV);
            }),
            (f.pause = function (t) {
              t || (this._isPaused = !0),
                e(this._element).find(d.NEXT_PREV)[0] &&
                  s.supportsTransitionEnd() &&
                  (s.triggerTransitionEnd(this._element), this.cycle(!0)),
                clearInterval(this._interval),
                (this._interval = null);
            }),
            (f.cycle = function (t) {
              t || (this._isPaused = !1),
                this._interval &&
                  (clearInterval(this._interval), (this._interval = null)),
                this._config.interval &&
                  !this._isPaused &&
                  (this._interval = setInterval(
                    (document.visibilityState
                      ? this.nextWhenVisible
                      : this.next
                    ).bind(this),
                    this._config.interval
                  ));
            }),
            (f.to = function (t) {
              var n = this;
              this._activeElement = e(this._element).find(d.ACTIVE_ITEM)[0];
              var i = this._getItemIndex(this._activeElement);
              if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                  e(this._element).one(c.SLID, function () {
                    return n.to(t);
                  });
                else {
                  if (i === t) return this.pause(), void this.cycle();
                  var s = t > i ? h.NEXT : h.PREV;
                  this._slide(s, this._items[t]);
                }
            }),
            (f.dispose = function () {
              e(this._element).off(i),
                e.removeData(this._element, n),
                (this._items = null),
                (this._config = null),
                (this._element = null),
                (this._interval = null),
                (this._isPaused = null),
                (this._isSliding = null),
                (this._activeElement = null),
                (this._indicatorsElement = null);
            }),
            (f._getConfig = function (n) {
              return (n = e.extend({}, a, n)), s.typeCheckConfig(t, n, l), n;
            }),
            (f._addEventListeners = function () {
              var t = this;
              this._config.keyboard &&
                e(this._element).on(c.KEYDOWN, function (e) {
                  return t._keydown(e);
                }),
                "hover" === this._config.pause &&
                  (e(this._element)
                    .on(c.MOUSEENTER, function (e) {
                      return t.pause(e);
                    })
                    .on(c.MOUSELEAVE, function (e) {
                      return t.cycle(e);
                    }),
                  "ontouchstart" in document.documentElement &&
                    e(this._element).on(c.TOUCHEND, function () {
                      t.pause(),
                        t.touchTimeout && clearTimeout(t.touchTimeout),
                        (t.touchTimeout = setTimeout(function (e) {
                          return t.cycle(e);
                        }, 500 + t._config.interval));
                    }));
            }),
            (f._keydown = function (t) {
              if (!/input|textarea/i.test(t.target.tagName))
                switch (t.which) {
                  case 37:
                    t.preventDefault(), this.prev();
                    break;
                  case 39:
                    t.preventDefault(), this.next();
                    break;
                  default:
                    return;
                }
            }),
            (f._getItemIndex = function (t) {
              return (
                (this._items = e.makeArray(e(t).parent().find(d.ITEM))),
                this._items.indexOf(t)
              );
            }),
            (f._getItemByDirection = function (t, e) {
              var n = t === h.NEXT,
                i = t === h.PREV,
                s = this._getItemIndex(e),
                r = this._items.length - 1;
              if (((i && 0 === s) || (n && s === r)) && !this._config.wrap)
                return e;
              var o = (s + (t === h.PREV ? -1 : 1)) % this._items.length;
              return -1 === o
                ? this._items[this._items.length - 1]
                : this._items[o];
            }),
            (f._triggerSlideEvent = function (t, n) {
              var i = this._getItemIndex(t),
                s = this._getItemIndex(e(this._element).find(d.ACTIVE_ITEM)[0]),
                r = e.Event(c.SLIDE, {
                  relatedTarget: t,
                  direction: n,
                  from: s,
                  to: i,
                });
              return e(this._element).trigger(r), r;
            }),
            (f._setActiveIndicatorElement = function (t) {
              if (this._indicatorsElement) {
                e(this._indicatorsElement).find(d.ACTIVE).removeClass(u.ACTIVE);
                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                n && e(n).addClass(u.ACTIVE);
              }
            }),
            (f._slide = function (t, n) {
              var i,
                r,
                o,
                a = this,
                l = e(this._element).find(d.ACTIVE_ITEM)[0],
                f = this._getItemIndex(l),
                _ = n || (l && this._getItemByDirection(t, l)),
                g = this._getItemIndex(_),
                m = Boolean(this._interval);
              if (
                (t === h.NEXT
                  ? ((i = u.LEFT), (r = u.NEXT), (o = h.LEFT))
                  : ((i = u.RIGHT), (r = u.PREV), (o = h.RIGHT)),
                _ && e(_).hasClass(u.ACTIVE))
              )
                this._isSliding = !1;
              else if (
                !this._triggerSlideEvent(_, o).isDefaultPrevented() &&
                l &&
                _
              ) {
                (this._isSliding = !0),
                  m && this.pause(),
                  this._setActiveIndicatorElement(_);
                var p = e.Event(c.SLID, {
                  relatedTarget: _,
                  direction: o,
                  from: f,
                  to: g,
                });
                s.supportsTransitionEnd() && e(this._element).hasClass(u.SLIDE)
                  ? (e(_).addClass(r),
                    s.reflow(_),
                    e(l).addClass(i),
                    e(_).addClass(i),
                    e(l)
                      .one(s.TRANSITION_END, function () {
                        e(_)
                          .removeClass(i + " " + r)
                          .addClass(u.ACTIVE),
                          e(l).removeClass(u.ACTIVE + " " + r + " " + i),
                          (a._isSliding = !1),
                          setTimeout(function () {
                            return e(a._element).trigger(p);
                          }, 0);
                      })
                      .emulateTransitionEnd(600))
                  : (e(l).removeClass(u.ACTIVE),
                    e(_).addClass(u.ACTIVE),
                    (this._isSliding = !1),
                    e(this._element).trigger(p)),
                  m && this.cycle();
              }
            }),
            (o._jQueryInterface = function (t) {
              return this.each(function () {
                var i = e(this).data(n),
                  s = e.extend({}, a, e(this).data());
                "object" == typeof t && e.extend(s, t);
                var r = "string" == typeof t ? t : s.slide;
                if (
                  (i || ((i = new o(this, s)), e(this).data(n, i)),
                  "number" == typeof t)
                )
                  i.to(t);
                else if ("string" == typeof r) {
                  if ("undefined" == typeof i[r])
                    throw new Error('No method named "' + r + '"');
                  i[r]();
                } else s.interval && (i.pause(), i.cycle());
              });
            }),
            (o._dataApiClickHandler = function (t) {
              var i = s.getSelectorFromElement(this);
              if (i) {
                var r = e(i)[0];
                if (r && e(r).hasClass(u.CAROUSEL)) {
                  var a = e.extend({}, e(r).data(), e(this).data()),
                    l = this.getAttribute("data-slide-to");
                  l && (a.interval = !1),
                    o._jQueryInterface.call(e(r), a),
                    l && e(r).data(n).to(l),
                    t.preventDefault();
                }
              }
            }),
            r(o, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0-beta.2";
                },
              },
              {
                key: "Default",
                get: function () {
                  return a;
                },
              },
            ]),
            o
          );
        })();
      return (
        e(document).on(c.CLICK_DATA_API, d.DATA_SLIDE, f._dataApiClickHandler),
        e(window).on(c.LOAD_DATA_API, function () {
          e(d.DATA_RIDE).each(function () {
            var t = e(this);
            f._jQueryInterface.call(t, t.data());
          });
        }),
        (e.fn[t] = f._jQueryInterface),
        (e.fn[t].Constructor = f),
        (e.fn[t].noConflict = function () {
          return (e.fn[t] = o), f._jQueryInterface;
        }),
        f
      );
    })(),
    c = (function () {
      var t = "collapse",
        n = "bs.collapse",
        i = e.fn[t],
        o = { toggle: !0, parent: "" },
        a = { toggle: "boolean", parent: "(string|element)" },
        l = {
          SHOW: "show.bs.collapse",
          SHOWN: "shown.bs.collapse",
          HIDE: "hide.bs.collapse",
          HIDDEN: "hidden.bs.collapse",
          CLICK_DATA_API: "click.bs.collapse.data-api",
        },
        h = {
          SHOW: "show",
          COLLAPSE: "collapse",
          COLLAPSING: "collapsing",
          COLLAPSED: "collapsed",
        },
        c = { WIDTH: "width", HEIGHT: "height" },
        u = {
          ACTIVES: ".show, .collapsing",
          DATA_TOGGLE: '[data-toggle="collapse"]',
        },
        d = (function () {
          function i(t, n) {
            (this._isTransitioning = !1),
              (this._element = t),
              (this._config = this._getConfig(n)),
              (this._triggerArray = e.makeArray(
                e(
                  '[data-toggle="collapse"][href="#' +
                    t.id +
                    '"],[data-toggle="collapse"][data-target="#' +
                    t.id +
                    '"]'
                )
              ));
            for (var i = e(u.DATA_TOGGLE), r = 0; r < i.length; r++) {
              var o = i[r],
                a = s.getSelectorFromElement(o);
              null !== a &&
                e(a).filter(t).length > 0 &&
                this._triggerArray.push(o);
            }
            (this._parent = this._config.parent ? this._getParent() : null),
              this._config.parent ||
                this._addAriaAndCollapsedClass(
                  this._element,
                  this._triggerArray
                ),
              this._config.toggle && this.toggle();
          }
          var d = i.prototype;
          return (
            (d.toggle = function () {
              e(this._element).hasClass(h.SHOW) ? this.hide() : this.show();
            }),
            (d.show = function () {
              var t = this;
              if (
                !this._isTransitioning &&
                !e(this._element).hasClass(h.SHOW)
              ) {
                var r, o;
                if (
                  (this._parent &&
                    ((r = e.makeArray(
                      e(this._parent).children().children(u.ACTIVES)
                    )).length ||
                      (r = null)),
                  !(r && (o = e(r).data(n)) && o._isTransitioning))
                ) {
                  var a = e.Event(l.SHOW);
                  if ((e(this._element).trigger(a), !a.isDefaultPrevented())) {
                    r &&
                      (i._jQueryInterface.call(e(r), "hide"),
                      o || e(r).data(n, null));
                    var c = this._getDimension();
                    e(this._element)
                      .removeClass(h.COLLAPSE)
                      .addClass(h.COLLAPSING),
                      (this._element.style[c] = 0),
                      this._triggerArray.length &&
                        e(this._triggerArray)
                          .removeClass(h.COLLAPSED)
                          .attr("aria-expanded", !0),
                      this.setTransitioning(!0);
                    var d = function () {
                      e(t._element)
                        .removeClass(h.COLLAPSING)
                        .addClass(h.COLLAPSE)
                        .addClass(h.SHOW),
                        (t._element.style[c] = ""),
                        t.setTransitioning(!1),
                        e(t._element).trigger(l.SHOWN);
                    };
                    if (s.supportsTransitionEnd()) {
                      var f = "scroll" + (c[0].toUpperCase() + c.slice(1));
                      e(this._element)
                        .one(s.TRANSITION_END, d)
                        .emulateTransitionEnd(600),
                        (this._element.style[c] = this._element[f] + "px");
                    } else d();
                  }
                }
              }
            }),
            (d.hide = function () {
              var t = this;
              if (!this._isTransitioning && e(this._element).hasClass(h.SHOW)) {
                var n = e.Event(l.HIDE);
                if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
                  var i = this._getDimension();
                  if (
                    ((this._element.style[i] =
                      this._element.getBoundingClientRect()[i] + "px"),
                    s.reflow(this._element),
                    e(this._element)
                      .addClass(h.COLLAPSING)
                      .removeClass(h.COLLAPSE)
                      .removeClass(h.SHOW),
                    this._triggerArray.length)
                  )
                    for (var r = 0; r < this._triggerArray.length; r++) {
                      var o = this._triggerArray[r],
                        a = s.getSelectorFromElement(o);
                      null !== a &&
                        (e(a).hasClass(h.SHOW) ||
                          e(o).addClass(h.COLLAPSED).attr("aria-expanded", !1));
                    }
                  this.setTransitioning(!0);
                  var c = function () {
                    t.setTransitioning(!1),
                      e(t._element)
                        .removeClass(h.COLLAPSING)
                        .addClass(h.COLLAPSE)
                        .trigger(l.HIDDEN);
                  };
                  (this._element.style[i] = ""),
                    s.supportsTransitionEnd()
                      ? e(this._element)
                          .one(s.TRANSITION_END, c)
                          .emulateTransitionEnd(600)
                      : c();
                }
              }
            }),
            (d.setTransitioning = function (t) {
              this._isTransitioning = t;
            }),
            (d.dispose = function () {
              e.removeData(this._element, n),
                (this._config = null),
                (this._parent = null),
                (this._element = null),
                (this._triggerArray = null),
                (this._isTransitioning = null);
            }),
            (d._getConfig = function (n) {
              return (
                (n = e.extend({}, o, n)),
                (n.toggle = Boolean(n.toggle)),
                s.typeCheckConfig(t, n, a),
                n
              );
            }),
            (d._getDimension = function () {
              return e(this._element).hasClass(c.WIDTH) ? c.WIDTH : c.HEIGHT;
            }),
            (d._getParent = function () {
              var t = this,
                n = null;
              s.isElement(this._config.parent)
                ? ((n = this._config.parent),
                  "undefined" != typeof this._config.parent.jquery &&
                    (n = this._config.parent[0]))
                : (n = e(this._config.parent)[0]);
              var r =
                '[data-toggle="collapse"][data-parent="' +
                this._config.parent +
                '"]';
              return (
                e(n)
                  .find(r)
                  .each(function (e, n) {
                    t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [
                      n,
                    ]);
                  }),
                n
              );
            }),
            (d._addAriaAndCollapsedClass = function (t, n) {
              if (t) {
                var i = e(t).hasClass(h.SHOW);
                n.length &&
                  e(n).toggleClass(h.COLLAPSED, !i).attr("aria-expanded", i);
              }
            }),
            (i._getTargetFromElement = function (t) {
              var n = s.getSelectorFromElement(t);
              return n ? e(n)[0] : null;
            }),
            (i._jQueryInterface = function (t) {
              return this.each(function () {
                var s = e(this),
                  r = s.data(n),
                  a = e.extend({}, o, s.data(), "object" == typeof t && t);
                if (
                  (!r && a.toggle && /show|hide/.test(t) && (a.toggle = !1),
                  r || ((r = new i(this, a)), s.data(n, r)),
                  "string" == typeof t)
                ) {
                  if ("undefined" == typeof r[t])
                    throw new Error('No method named "' + t + '"');
                  r[t]();
                }
              });
            }),
            r(i, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0-beta.2";
                },
              },
              {
                key: "Default",
                get: function () {
                  return o;
                },
              },
            ]),
            i
          );
        })();
      return (
        e(document).on(l.CLICK_DATA_API, u.DATA_TOGGLE, function (t) {
          "A" === t.currentTarget.tagName && t.preventDefault();
          var i = e(this),
            r = s.getSelectorFromElement(this);
          e(r).each(function () {
            var t = e(this),
              s = t.data(n) ? "toggle" : i.data();
            d._jQueryInterface.call(t, s);
          });
        }),
        (e.fn[t] = d._jQueryInterface),
        (e.fn[t].Constructor = d),
        (e.fn[t].noConflict = function () {
          return (e.fn[t] = i), d._jQueryInterface;
        }),
        d
      );
    })(),
    u = (function () {
      if ("undefined" == typeof n)
        throw new Error(
          "Bootstrap dropdown require Popper.js (https://popper.js.org)"
        );
      var t = "dropdown",
        i = "bs.dropdown",
        o = "." + i,
        a = e.fn[t],
        l = new RegExp("38|40|27"),
        h = {
          HIDE: "hide" + o,
          HIDDEN: "hidden" + o,
          SHOW: "show" + o,
          SHOWN: "shown" + o,
          CLICK: "click" + o,
          CLICK_DATA_API: "click.bs.dropdown.data-api",
          KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
          KEYUP_DATA_API: "keyup.bs.dropdown.data-api",
        },
        c = {
          DISABLED: "disabled",
          SHOW: "show",
          DROPUP: "dropup",
          MENURIGHT: "dropdown-menu-right",
          MENULEFT: "dropdown-menu-left",
        },
        u = {
          DATA_TOGGLE: '[data-toggle="dropdown"]',
          FORM_CHILD: ".dropdown form",
          MENU: ".dropdown-menu",
          NAVBAR_NAV: ".navbar-nav",
          VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)",
        },
        d = {
          TOP: "top-start",
          TOPEND: "top-end",
          BOTTOM: "bottom-start",
          BOTTOMEND: "bottom-end",
        },
        f = { offset: 0, flip: !0 },
        _ = { offset: "(number|string|function)", flip: "boolean" },
        g = (function () {
          function a(t, e) {
            (this._element = t),
              (this._popper = null),
              (this._config = this._getConfig(e)),
              (this._menu = this._getMenuElement()),
              (this._inNavbar = this._detectNavbar()),
              this._addEventListeners();
          }
          var g = a.prototype;
          return (
            (g.toggle = function () {
              if (
                !this._element.disabled &&
                !e(this._element).hasClass(c.DISABLED)
              ) {
                var t = a._getParentFromElement(this._element),
                  i = e(this._menu).hasClass(c.SHOW);
                if ((a._clearMenus(), !i)) {
                  var s = { relatedTarget: this._element },
                    r = e.Event(h.SHOW, s);
                  if ((e(t).trigger(r), !r.isDefaultPrevented())) {
                    var o = this._element;
                    e(t).hasClass(c.DROPUP) &&
                      (e(this._menu).hasClass(c.MENULEFT) ||
                        e(this._menu).hasClass(c.MENURIGHT)) &&
                      (o = t),
                      (this._popper = new n(
                        o,
                        this._menu,
                        this._getPopperConfig()
                      )),
                      "ontouchstart" in document.documentElement &&
                        !e(t).closest(u.NAVBAR_NAV).length &&
                        e("body").children().on("mouseover", null, e.noop),
                      this._element.focus(),
                      this._element.setAttribute("aria-expanded", !0),
                      e(this._menu).toggleClass(c.SHOW),
                      e(t).toggleClass(c.SHOW).trigger(e.Event(h.SHOWN, s));
                  }
                }
              }
            }),
            (g.dispose = function () {
              e.removeData(this._element, i),
                e(this._element).off(o),
                (this._element = null),
                (this._menu = null),
                null !== this._popper && this._popper.destroy(),
                (this._popper = null);
            }),
            (g.update = function () {
              (this._inNavbar = this._detectNavbar()),
                null !== this._popper && this._popper.scheduleUpdate();
            }),
            (g._addEventListeners = function () {
              var t = this;
              e(this._element).on(h.CLICK, function (e) {
                e.preventDefault(), e.stopPropagation(), t.toggle();
              });
            }),
            (g._getConfig = function (n) {
              return (
                (n = e.extend(
                  {},
                  this.constructor.Default,
                  e(this._element).data(),
                  n
                )),
                s.typeCheckConfig(t, n, this.constructor.DefaultType),
                n
              );
            }),
            (g._getMenuElement = function () {
              if (!this._menu) {
                var t = a._getParentFromElement(this._element);
                this._menu = e(t).find(u.MENU)[0];
              }
              return this._menu;
            }),
            (g._getPlacement = function () {
              var t = e(this._element).parent(),
                n = d.BOTTOM;
              return (
                t.hasClass(c.DROPUP)
                  ? ((n = d.TOP),
                    e(this._menu).hasClass(c.MENURIGHT) && (n = d.TOPEND))
                  : e(this._menu).hasClass(c.MENURIGHT) && (n = d.BOTTOMEND),
                n
              );
            }),
            (g._detectNavbar = function () {
              return e(this._element).closest(".navbar").length > 0;
            }),
            (g._getPopperConfig = function () {
              var t = this,
                n = {};
              "function" == typeof this._config.offset
                ? (n.fn = function (n) {
                    return (
                      (n.offsets = e.extend(
                        {},
                        n.offsets,
                        t._config.offset(n.offsets) || {}
                      )),
                      n
                    );
                  })
                : (n.offset = this._config.offset);
              var i = {
                placement: this._getPlacement(),
                modifiers: { offset: n, flip: { enabled: this._config.flip } },
              };
              return (
                this._inNavbar &&
                  (i.modifiers.applyStyle = { enabled: !this._inNavbar }),
                i
              );
            }),
            (a._jQueryInterface = function (t) {
              return this.each(function () {
                var n = e(this).data(i),
                  s = "object" == typeof t ? t : null;
                if (
                  (n || ((n = new a(this, s)), e(this).data(i, n)),
                  "string" == typeof t)
                ) {
                  if ("undefined" == typeof n[t])
                    throw new Error('No method named "' + t + '"');
                  n[t]();
                }
              });
            }),
            (a._clearMenus = function (t) {
              if (
                !t ||
                (3 !== t.which && ("keyup" !== t.type || 9 === t.which))
              )
                for (
                  var n = e.makeArray(e(u.DATA_TOGGLE)), s = 0;
                  s < n.length;
                  s++
                ) {
                  var r = a._getParentFromElement(n[s]),
                    o = e(n[s]).data(i),
                    l = { relatedTarget: n[s] };
                  if (o) {
                    var d = o._menu;
                    if (
                      e(r).hasClass(c.SHOW) &&
                      !(
                        t &&
                        (("click" === t.type &&
                          /input|textarea/i.test(t.target.tagName)) ||
                          ("keyup" === t.type && 9 === t.which)) &&
                        e.contains(r, t.target)
                      )
                    ) {
                      var f = e.Event(h.HIDE, l);
                      e(r).trigger(f),
                        f.isDefaultPrevented() ||
                          ("ontouchstart" in document.documentElement &&
                            e("body").children().off("mouseover", null, e.noop),
                          n[s].setAttribute("aria-expanded", "false"),
                          e(d).removeClass(c.SHOW),
                          e(r)
                            .removeClass(c.SHOW)
                            .trigger(e.Event(h.HIDDEN, l)));
                    }
                  }
                }
            }),
            (a._getParentFromElement = function (t) {
              var n,
                i = s.getSelectorFromElement(t);
              return i && (n = e(i)[0]), n || t.parentNode;
            }),
            (a._dataApiKeydownHandler = function (t) {
              if (
                !(
                  !l.test(t.which) ||
                  (/button/i.test(t.target.tagName) && 32 === t.which) ||
                  /input|textarea/i.test(t.target.tagName) ||
                  (t.preventDefault(),
                  t.stopPropagation(),
                  this.disabled || e(this).hasClass(c.DISABLED))
                )
              ) {
                var n = a._getParentFromElement(this),
                  i = e(n).hasClass(c.SHOW);
                if (
                  (i || (27 === t.which && 32 === t.which)) &&
                  (!i || (27 !== t.which && 32 !== t.which))
                ) {
                  var s = e(n).find(u.VISIBLE_ITEMS).get();
                  if (s.length) {
                    var r = s.indexOf(t.target);
                    38 === t.which && r > 0 && r--,
                      40 === t.which && r < s.length - 1 && r++,
                      r < 0 && (r = 0),
                      s[r].focus();
                  }
                } else {
                  if (27 === t.which) {
                    var o = e(n).find(u.DATA_TOGGLE)[0];
                    e(o).trigger("focus");
                  }
                  e(this).trigger("click");
                }
              }
            }),
            r(a, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0-beta.2";
                },
              },
              {
                key: "Default",
                get: function () {
                  return f;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return _;
                },
              },
            ]),
            a
          );
        })();
      return (
        e(document)
          .on(h.KEYDOWN_DATA_API, u.DATA_TOGGLE, g._dataApiKeydownHandler)
          .on(h.KEYDOWN_DATA_API, u.MENU, g._dataApiKeydownHandler)
          .on(h.CLICK_DATA_API + " " + h.KEYUP_DATA_API, g._clearMenus)
          .on(h.CLICK_DATA_API, u.DATA_TOGGLE, function (t) {
            t.preventDefault(),
              t.stopPropagation(),
              g._jQueryInterface.call(e(this), "toggle");
          })
          .on(h.CLICK_DATA_API, u.FORM_CHILD, function (t) {
            t.stopPropagation();
          }),
        (e.fn[t] = g._jQueryInterface),
        (e.fn[t].Constructor = g),
        (e.fn[t].noConflict = function () {
          return (e.fn[t] = a), g._jQueryInterface;
        }),
        g
      );
    })(),
    d = (function () {
      var t = "modal",
        n = ".bs.modal",
        i = e.fn[t],
        o = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        a = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean",
        },
        l = {
          HIDE: "hide.bs.modal",
          HIDDEN: "hidden.bs.modal",
          SHOW: "show.bs.modal",
          SHOWN: "shown.bs.modal",
          FOCUSIN: "focusin.bs.modal",
          RESIZE: "resize.bs.modal",
          CLICK_DISMISS: "click.dismiss.bs.modal",
          KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
          MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
          MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
          CLICK_DATA_API: "click.bs.modal.data-api",
        },
        h = {
          SCROLLBAR_MEASURER: "modal-scrollbar-measure",
          BACKDROP: "modal-backdrop",
          OPEN: "modal-open",
          FADE: "fade",
          SHOW: "show",
        },
        c = {
          DIALOG: ".modal-dialog",
          DATA_TOGGLE: '[data-toggle="modal"]',
          DATA_DISMISS: '[data-dismiss="modal"]',
          FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          STICKY_CONTENT: ".sticky-top",
          NAVBAR_TOGGLER: ".navbar-toggler",
        },
        u = (function () {
          function i(t, n) {
            (this._config = this._getConfig(n)),
              (this._element = t),
              (this._dialog = e(t).find(c.DIALOG)[0]),
              (this._backdrop = null),
              (this._isShown = !1),
              (this._isBodyOverflowing = !1),
              (this._ignoreBackdropClick = !1),
              (this._originalBodyPadding = 0),
              (this._scrollbarWidth = 0);
          }
          var u = i.prototype;
          return (
            (u.toggle = function (t) {
              return this._isShown ? this.hide() : this.show(t);
            }),
            (u.show = function (t) {
              var n = this;
              if (!this._isTransitioning && !this._isShown) {
                s.supportsTransitionEnd() &&
                  e(this._element).hasClass(h.FADE) &&
                  (this._isTransitioning = !0);
                var i = e.Event(l.SHOW, { relatedTarget: t });
                e(this._element).trigger(i),
                  this._isShown ||
                    i.isDefaultPrevented() ||
                    ((this._isShown = !0),
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    e(document.body).addClass(h.OPEN),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    e(this._element).on(
                      l.CLICK_DISMISS,
                      c.DATA_DISMISS,
                      function (t) {
                        return n.hide(t);
                      }
                    ),
                    e(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
                      e(n._element).one(l.MOUSEUP_DISMISS, function (t) {
                        e(t.target).is(n._element) &&
                          (n._ignoreBackdropClick = !0);
                      });
                    }),
                    this._showBackdrop(function () {
                      return n._showElement(t);
                    }));
              }
            }),
            (u.hide = function (t) {
              var n = this;
              if (
                (t && t.preventDefault(),
                !this._isTransitioning && this._isShown)
              ) {
                var i = e.Event(l.HIDE);
                if (
                  (e(this._element).trigger(i),
                  this._isShown && !i.isDefaultPrevented())
                ) {
                  this._isShown = !1;
                  var r =
                    s.supportsTransitionEnd() &&
                    e(this._element).hasClass(h.FADE);
                  r && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    e(document).off(l.FOCUSIN),
                    e(this._element).removeClass(h.SHOW),
                    e(this._element).off(l.CLICK_DISMISS),
                    e(this._dialog).off(l.MOUSEDOWN_DISMISS),
                    r
                      ? e(this._element)
                          .one(s.TRANSITION_END, function (t) {
                            return n._hideModal(t);
                          })
                          .emulateTransitionEnd(300)
                      : this._hideModal();
                }
              }
            }),
            (u.dispose = function () {
              e.removeData(this._element, "bs.modal"),
                e(window, document, this._element, this._backdrop).off(n),
                (this._config = null),
                (this._element = null),
                (this._dialog = null),
                (this._backdrop = null),
                (this._isShown = null),
                (this._isBodyOverflowing = null),
                (this._ignoreBackdropClick = null),
                (this._scrollbarWidth = null);
            }),
            (u.handleUpdate = function () {
              this._adjustDialog();
            }),
            (u._getConfig = function (n) {
              return (n = e.extend({}, o, n)), s.typeCheckConfig(t, n, a), n;
            }),
            (u._showElement = function (t) {
              var n = this,
                i =
                  s.supportsTransitionEnd() &&
                  e(this._element).hasClass(h.FADE);
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                document.body.appendChild(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                (this._element.scrollTop = 0),
                i && s.reflow(this._element),
                e(this._element).addClass(h.SHOW),
                this._config.focus && this._enforceFocus();
              var r = e.Event(l.SHOWN, { relatedTarget: t }),
                o = function () {
                  n._config.focus && n._element.focus(),
                    (n._isTransitioning = !1),
                    e(n._element).trigger(r);
                };
              i
                ? e(this._dialog)
                    .one(s.TRANSITION_END, o)
                    .emulateTransitionEnd(300)
                : o();
            }),
            (u._enforceFocus = function () {
              var t = this;
              e(document)
                .off(l.FOCUSIN)
                .on(l.FOCUSIN, function (n) {
                  document === n.target ||
                    t._element === n.target ||
                    e(t._element).has(n.target).length ||
                    t._element.focus();
                });
            }),
            (u._setEscapeEvent = function () {
              var t = this;
              this._isShown && this._config.keyboard
                ? e(this._element).on(l.KEYDOWN_DISMISS, function (e) {
                    27 === e.which && (e.preventDefault(), t.hide());
                  })
                : this._isShown || e(this._element).off(l.KEYDOWN_DISMISS);
            }),
            (u._setResizeEvent = function () {
              var t = this;
              this._isShown
                ? e(window).on(l.RESIZE, function (e) {
                    return t.handleUpdate(e);
                  })
                : e(window).off(l.RESIZE);
            }),
            (u._hideModal = function () {
              var t = this;
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                (this._isTransitioning = !1),
                this._showBackdrop(function () {
                  e(document.body).removeClass(h.OPEN),
                    t._resetAdjustments(),
                    t._resetScrollbar(),
                    e(t._element).trigger(l.HIDDEN);
                });
            }),
            (u._removeBackdrop = function () {
              this._backdrop &&
                (e(this._backdrop).remove(), (this._backdrop = null));
            }),
            (u._showBackdrop = function (t) {
              var n = this,
                i = e(this._element).hasClass(h.FADE) ? h.FADE : "";
              if (this._isShown && this._config.backdrop) {
                var r = s.supportsTransitionEnd() && i;
                if (
                  ((this._backdrop = document.createElement("div")),
                  (this._backdrop.className = h.BACKDROP),
                  i && e(this._backdrop).addClass(i),
                  e(this._backdrop).appendTo(document.body),
                  e(this._element).on(l.CLICK_DISMISS, function (t) {
                    n._ignoreBackdropClick
                      ? (n._ignoreBackdropClick = !1)
                      : t.target === t.currentTarget &&
                        ("static" === n._config.backdrop
                          ? n._element.focus()
                          : n.hide());
                  }),
                  r && s.reflow(this._backdrop),
                  e(this._backdrop).addClass(h.SHOW),
                  !t)
                )
                  return;
                if (!r) return void t();
                e(this._backdrop)
                  .one(s.TRANSITION_END, t)
                  .emulateTransitionEnd(150);
              } else if (!this._isShown && this._backdrop) {
                e(this._backdrop).removeClass(h.SHOW);
                var o = function () {
                  n._removeBackdrop(), t && t();
                };
                s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE)
                  ? e(this._backdrop)
                      .one(s.TRANSITION_END, o)
                      .emulateTransitionEnd(150)
                  : o();
              } else t && t();
            }),
            (u._adjustDialog = function () {
              var t =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              !this._isBodyOverflowing &&
                t &&
                (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing &&
                  !t &&
                  (this._element.style.paddingRight =
                    this._scrollbarWidth + "px");
            }),
            (u._resetAdjustments = function () {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }),
            (u._checkScrollbar = function () {
              var t = document.body.getBoundingClientRect();
              (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
                (this._scrollbarWidth = this._getScrollbarWidth());
            }),
            (u._setScrollbar = function () {
              var t = this;
              if (this._isBodyOverflowing) {
                e(c.FIXED_CONTENT).each(function (n, i) {
                  var s = e(i)[0].style.paddingRight,
                    r = e(i).css("padding-right");
                  e(i)
                    .data("padding-right", s)
                    .css(
                      "padding-right",
                      parseFloat(r) + t._scrollbarWidth + "px"
                    );
                }),
                  e(c.STICKY_CONTENT).each(function (n, i) {
                    var s = e(i)[0].style.marginRight,
                      r = e(i).css("margin-right");
                    e(i)
                      .data("margin-right", s)
                      .css(
                        "margin-right",
                        parseFloat(r) - t._scrollbarWidth + "px"
                      );
                  }),
                  e(c.NAVBAR_TOGGLER).each(function (n, i) {
                    var s = e(i)[0].style.marginRight,
                      r = e(i).css("margin-right");
                    e(i)
                      .data("margin-right", s)
                      .css(
                        "margin-right",
                        parseFloat(r) + t._scrollbarWidth + "px"
                      );
                  });
                var n = document.body.style.paddingRight,
                  i = e("body").css("padding-right");
                e("body")
                  .data("padding-right", n)
                  .css(
                    "padding-right",
                    parseFloat(i) + this._scrollbarWidth + "px"
                  );
              }
            }),
            (u._resetScrollbar = function () {
              e(c.FIXED_CONTENT).each(function (t, n) {
                var i = e(n).data("padding-right");
                "undefined" != typeof i &&
                  e(n).css("padding-right", i).removeData("padding-right");
              }),
                e(c.STICKY_CONTENT + ", " + c.NAVBAR_TOGGLER).each(function (
                  t,
                  n
                ) {
                  var i = e(n).data("margin-right");
                  "undefined" != typeof i &&
                    e(n).css("margin-right", i).removeData("margin-right");
                });
              var t = e("body").data("padding-right");
              "undefined" != typeof t &&
                e("body").css("padding-right", t).removeData("padding-right");
            }),
            (u._getScrollbarWidth = function () {
              var t = document.createElement("div");
              (t.className = h.SCROLLBAR_MEASURER),
                document.body.appendChild(t);
              var e = t.getBoundingClientRect().width - t.clientWidth;
              return document.body.removeChild(t), e;
            }),
            (i._jQueryInterface = function (t, n) {
              return this.each(function () {
                var s = e(this).data("bs.modal"),
                  r = e.extend(
                    {},
                    i.Default,
                    e(this).data(),
                    "object" == typeof t && t
                  );
                if (
                  (s || ((s = new i(this, r)), e(this).data("bs.modal", s)),
                  "string" == typeof t)
                ) {
                  if ("undefined" == typeof s[t])
                    throw new Error('No method named "' + t + '"');
                  s[t](n);
                } else r.show && s.show(n);
              });
            }),
            r(i, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0-beta.2";
                },
              },
              {
                key: "Default",
                get: function () {
                  return o;
                },
              },
            ]),
            i
          );
        })();
      return (
        e(document).on(l.CLICK_DATA_API, c.DATA_TOGGLE, function (t) {
          var n,
            i = this,
            r = s.getSelectorFromElement(this);
          r && (n = e(r)[0]);
          var o = e(n).data("bs.modal")
            ? "toggle"
            : e.extend({}, e(n).data(), e(this).data());
          ("A" !== this.tagName && "AREA" !== this.tagName) ||
            t.preventDefault();
          var a = e(n).one(l.SHOW, function (t) {
            t.isDefaultPrevented() ||
              a.one(l.HIDDEN, function () {
                e(i).is(":visible") && i.focus();
              });
          });
          u._jQueryInterface.call(e(n), o, this);
        }),
        (e.fn[t] = u._jQueryInterface),
        (e.fn[t].Constructor = u),
        (e.fn[t].noConflict = function () {
          return (e.fn[t] = i), u._jQueryInterface;
        }),
        u
      );
    })(),
    f = (function () {
      if ("undefined" == typeof n)
        throw new Error(
          "Bootstrap tooltips require Popper.js (https://popper.js.org)"
        );
      var t = "tooltip",
        i = ".bs.tooltip",
        o = e.fn[t],
        a = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        l = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
        },
        h = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left",
        },
        c = {
          animation: !0,
          template:
            '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: 0,
          container: !1,
          fallbackPlacement: "flip",
        },
        u = { SHOW: "show", OUT: "out" },
        d = {
          HIDE: "hide" + i,
          HIDDEN: "hidden" + i,
          SHOW: "show" + i,
          SHOWN: "shown" + i,
          INSERTED: "inserted" + i,
          CLICK: "click" + i,
          FOCUSIN: "focusin" + i,
          FOCUSOUT: "focusout" + i,
          MOUSEENTER: "mouseenter" + i,
          MOUSELEAVE: "mouseleave" + i,
        },
        f = { FADE: "fade", SHOW: "show" },
        _ = {
          TOOLTIP: ".tooltip",
          TOOLTIP_INNER: ".tooltip-inner",
          ARROW: ".arrow",
        },
        g = {
          HOVER: "hover",
          FOCUS: "focus",
          CLICK: "click",
          MANUAL: "manual",
        },
        m = (function () {
          function o(t, e) {
            (this._isEnabled = !0),
              (this._timeout = 0),
              (this._hoverState = ""),
              (this._activeTrigger = {}),
              (this._popper = null),
              (this.element = t),
              (this.config = this._getConfig(e)),
              (this.tip = null),
              this._setListeners();
          }
          var m = o.prototype;
          return (
            (m.enable = function () {
              this._isEnabled = !0;
            }),
            (m.disable = function () {
              this._isEnabled = !1;
            }),
            (m.toggleEnabled = function () {
              this._isEnabled = !this._isEnabled;
            }),
            (m.toggle = function (t) {
              if (this._isEnabled)
                if (t) {
                  var n = this.constructor.DATA_KEY,
                    i = e(t.currentTarget).data(n);
                  i ||
                    ((i = new this.constructor(
                      t.currentTarget,
                      this._getDelegateConfig()
                    )),
                    e(t.currentTarget).data(n, i)),
                    (i._activeTrigger.click = !i._activeTrigger.click),
                    i._isWithActiveTrigger()
                      ? i._enter(null, i)
                      : i._leave(null, i);
                } else {
                  if (e(this.getTipElement()).hasClass(f.SHOW))
                    return void this._leave(null, this);
                  this._enter(null, this);
                }
            }),
            (m.dispose = function () {
              clearTimeout(this._timeout),
                e.removeData(this.element, this.constructor.DATA_KEY),
                e(this.element).off(this.constructor.EVENT_KEY),
                e(this.element).closest(".modal").off("hide.bs.modal"),
                this.tip && e(this.tip).remove(),
                (this._isEnabled = null),
                (this._timeout = null),
                (this._hoverState = null),
                (this._activeTrigger = null),
                null !== this._popper && this._popper.destroy(),
                (this._popper = null),
                (this.element = null),
                (this.config = null),
                (this.tip = null);
            }),
            (m.show = function () {
              var t = this;
              if ("none" === e(this.element).css("display"))
                throw new Error("Please use show on visible elements");
              var i = e.Event(this.constructor.Event.SHOW);
              if (this.isWithContent() && this._isEnabled) {
                e(this.element).trigger(i);
                var r = e.contains(
                  this.element.ownerDocument.documentElement,
                  this.element
                );
                if (i.isDefaultPrevented() || !r) return;
                var a = this.getTipElement(),
                  l = s.getUID(this.constructor.NAME);
                a.setAttribute("id", l),
                  this.element.setAttribute("aria-describedby", l),
                  this.setContent(),
                  this.config.animation && e(a).addClass(f.FADE);
                var h =
                    "function" == typeof this.config.placement
                      ? this.config.placement.call(this, a, this.element)
                      : this.config.placement,
                  c = this._getAttachment(h);
                this.addAttachmentClass(c);
                var d =
                  !1 === this.config.container
                    ? document.body
                    : e(this.config.container);
                e(a).data(this.constructor.DATA_KEY, this),
                  e.contains(
                    this.element.ownerDocument.documentElement,
                    this.tip
                  ) || e(a).appendTo(d),
                  e(this.element).trigger(this.constructor.Event.INSERTED),
                  (this._popper = new n(this.element, a, {
                    placement: c,
                    modifiers: {
                      offset: { offset: this.config.offset },
                      flip: { behavior: this.config.fallbackPlacement },
                      arrow: { element: _.ARROW },
                    },
                    onCreate: function (e) {
                      e.originalPlacement !== e.placement &&
                        t._handlePopperPlacementChange(e);
                    },
                    onUpdate: function (e) {
                      t._handlePopperPlacementChange(e);
                    },
                  })),
                  e(a).addClass(f.SHOW),
                  "ontouchstart" in document.documentElement &&
                    e("body").children().on("mouseover", null, e.noop);
                var g = function () {
                  t.config.animation && t._fixTransition();
                  var n = t._hoverState;
                  (t._hoverState = null),
                    e(t.element).trigger(t.constructor.Event.SHOWN),
                    n === u.OUT && t._leave(null, t);
                };
                s.supportsTransitionEnd() && e(this.tip).hasClass(f.FADE)
                  ? e(this.tip)
                      .one(s.TRANSITION_END, g)
                      .emulateTransitionEnd(o._TRANSITION_DURATION)
                  : g();
              }
            }),
            (m.hide = function (t) {
              var n = this,
                i = this.getTipElement(),
                r = e.Event(this.constructor.Event.HIDE),
                o = function () {
                  n._hoverState !== u.SHOW &&
                    i.parentNode &&
                    i.parentNode.removeChild(i),
                    n._cleanTipClass(),
                    n.element.removeAttribute("aria-describedby"),
                    e(n.element).trigger(n.constructor.Event.HIDDEN),
                    null !== n._popper && n._popper.destroy(),
                    t && t();
                };
              e(this.element).trigger(r),
                r.isDefaultPrevented() ||
                  (e(i).removeClass(f.SHOW),
                  "ontouchstart" in document.documentElement &&
                    e("body").children().off("mouseover", null, e.noop),
                  (this._activeTrigger[g.CLICK] = !1),
                  (this._activeTrigger[g.FOCUS] = !1),
                  (this._activeTrigger[g.HOVER] = !1),
                  s.supportsTransitionEnd() && e(this.tip).hasClass(f.FADE)
                    ? e(i).one(s.TRANSITION_END, o).emulateTransitionEnd(150)
                    : o(),
                  (this._hoverState = ""));
            }),
            (m.update = function () {
              null !== this._popper && this._popper.scheduleUpdate();
            }),
            (m.isWithContent = function () {
              return Boolean(this.getTitle());
            }),
            (m.addAttachmentClass = function (t) {
              e(this.getTipElement()).addClass("bs-tooltip-" + t);
            }),
            (m.getTipElement = function () {
              return (
                (this.tip = this.tip || e(this.config.template)[0]), this.tip
              );
            }),
            (m.setContent = function () {
              var t = e(this.getTipElement());
              this.setElementContent(t.find(_.TOOLTIP_INNER), this.getTitle()),
                t.removeClass(f.FADE + " " + f.SHOW);
            }),
            (m.setElementContent = function (t, n) {
              var i = this.config.html;
              "object" == typeof n && (n.nodeType || n.jquery)
                ? i
                  ? e(n).parent().is(t) || t.empty().append(n)
                  : t.text(e(n).text())
                : t[i ? "html" : "text"](n);
            }),
            (m.getTitle = function () {
              var t = this.element.getAttribute("data-original-title");
              return (
                t ||
                  (t =
                    "function" == typeof this.config.title
                      ? this.config.title.call(this.element)
                      : this.config.title),
                t
              );
            }),
            (m._getAttachment = function (t) {
              return h[t.toUpperCase()];
            }),
            (m._setListeners = function () {
              var t = this;
              this.config.trigger.split(" ").forEach(function (n) {
                if ("click" === n)
                  e(t.element).on(
                    t.constructor.Event.CLICK,
                    t.config.selector,
                    function (e) {
                      return t.toggle(e);
                    }
                  );
                else if (n !== g.MANUAL) {
                  var i =
                      n === g.HOVER
                        ? t.constructor.Event.MOUSEENTER
                        : t.constructor.Event.FOCUSIN,
                    s =
                      n === g.HOVER
                        ? t.constructor.Event.MOUSELEAVE
                        : t.constructor.Event.FOCUSOUT;
                  e(t.element)
                    .on(i, t.config.selector, function (e) {
                      return t._enter(e);
                    })
                    .on(s, t.config.selector, function (e) {
                      return t._leave(e);
                    });
                }
                e(t.element)
                  .closest(".modal")
                  .on("hide.bs.modal", function () {
                    return t.hide();
                  });
              }),
                this.config.selector
                  ? (this.config = e.extend({}, this.config, {
                      trigger: "manual",
                      selector: "",
                    }))
                  : this._fixTitle();
            }),
            (m._fixTitle = function () {
              var t = typeof this.element.getAttribute("data-original-title");
              (this.element.getAttribute("title") || "string" !== t) &&
                (this.element.setAttribute(
                  "data-original-title",
                  this.element.getAttribute("title") || ""
                ),
                this.element.setAttribute("title", ""));
            }),
            (m._enter = function (t, n) {
              var i = this.constructor.DATA_KEY;
              (n = n || e(t.currentTarget).data(i)) ||
                ((n = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                e(t.currentTarget).data(i, n)),
                t &&
                  (n._activeTrigger["focusin" === t.type ? g.FOCUS : g.HOVER] =
                    !0),
                e(n.getTipElement()).hasClass(f.SHOW) ||
                n._hoverState === u.SHOW
                  ? (n._hoverState = u.SHOW)
                  : (clearTimeout(n._timeout),
                    (n._hoverState = u.SHOW),
                    n.config.delay && n.config.delay.show
                      ? (n._timeout = setTimeout(function () {
                          n._hoverState === u.SHOW && n.show();
                        }, n.config.delay.show))
                      : n.show());
            }),
            (m._leave = function (t, n) {
              var i = this.constructor.DATA_KEY;
              (n = n || e(t.currentTarget).data(i)) ||
                ((n = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                e(t.currentTarget).data(i, n)),
                t &&
                  (n._activeTrigger["focusout" === t.type ? g.FOCUS : g.HOVER] =
                    !1),
                n._isWithActiveTrigger() ||
                  (clearTimeout(n._timeout),
                  (n._hoverState = u.OUT),
                  n.config.delay && n.config.delay.hide
                    ? (n._timeout = setTimeout(function () {
                        n._hoverState === u.OUT && n.hide();
                      }, n.config.delay.hide))
                    : n.hide());
            }),
            (m._isWithActiveTrigger = function () {
              for (var t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
              return !1;
            }),
            (m._getConfig = function (n) {
              return (
                "number" ==
                  typeof (n = e.extend(
                    {},
                    this.constructor.Default,
                    e(this.element).data(),
                    n
                  )).delay && (n.delay = { show: n.delay, hide: n.delay }),
                "number" == typeof n.title && (n.title = n.title.toString()),
                "number" == typeof n.content &&
                  (n.content = n.content.toString()),
                s.typeCheckConfig(t, n, this.constructor.DefaultType),
                n
              );
            }),
            (m._getDelegateConfig = function () {
              var t = {};
              if (this.config)
                for (var e in this.config)
                  this.constructor.Default[e] !== this.config[e] &&
                    (t[e] = this.config[e]);
              return t;
            }),
            (m._cleanTipClass = function () {
              var t = e(this.getTipElement()),
                n = t.attr("class").match(a);
              null !== n && n.length > 0 && t.removeClass(n.join(""));
            }),
            (m._handlePopperPlacementChange = function (t) {
              this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(t.placement));
            }),
            (m._fixTransition = function () {
              var t = this.getTipElement(),
                n = this.config.animation;
              null === t.getAttribute("x-placement") &&
                (e(t).removeClass(f.FADE),
                (this.config.animation = !1),
                this.hide(),
                this.show(),
                (this.config.animation = n));
            }),
            (o._jQueryInterface = function (t) {
              return this.each(function () {
                var n = e(this).data("bs.tooltip"),
                  i = "object" == typeof t && t;
                if (
                  (n || !/dispose|hide/.test(t)) &&
                  (n || ((n = new o(this, i)), e(this).data("bs.tooltip", n)),
                  "string" == typeof t)
                ) {
                  if ("undefined" == typeof n[t])
                    throw new Error('No method named "' + t + '"');
                  n[t]();
                }
              });
            }),
            r(o, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0-beta.2";
                },
              },
              {
                key: "Default",
                get: function () {
                  return c;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return t;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return "bs.tooltip";
                },
              },
              {
                key: "Event",
                get: function () {
                  return d;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return i;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return l;
                },
              },
            ]),
            o
          );
        })();
      return (
        (e.fn[t] = m._jQueryInterface),
        (e.fn[t].Constructor = m),
        (e.fn[t].noConflict = function () {
          return (e.fn[t] = o), m._jQueryInterface;
        }),
        m
      );
    })(),
    _ = (function () {
      var t = "popover",
        n = ".bs.popover",
        i = e.fn[t],
        s = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        a = e.extend({}, f.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        }),
        l = e.extend({}, f.DefaultType, {
          content: "(string|element|function)",
        }),
        h = { FADE: "fade", SHOW: "show" },
        c = { TITLE: ".popover-header", CONTENT: ".popover-body" },
        u = {
          HIDE: "hide" + n,
          HIDDEN: "hidden" + n,
          SHOW: "show" + n,
          SHOWN: "shown" + n,
          INSERTED: "inserted" + n,
          CLICK: "click" + n,
          FOCUSIN: "focusin" + n,
          FOCUSOUT: "focusout" + n,
          MOUSEENTER: "mouseenter" + n,
          MOUSELEAVE: "mouseleave" + n,
        },
        d = (function (i) {
          function d() {
            return i.apply(this, arguments) || this;
          }
          o(d, i);
          var f = d.prototype;
          return (
            (f.isWithContent = function () {
              return this.getTitle() || this._getContent();
            }),
            (f.addAttachmentClass = function (t) {
              e(this.getTipElement()).addClass("bs-popover-" + t);
            }),
            (f.getTipElement = function () {
              return (
                (this.tip = this.tip || e(this.config.template)[0]), this.tip
              );
            }),
            (f.setContent = function () {
              var t = e(this.getTipElement());
              this.setElementContent(t.find(c.TITLE), this.getTitle()),
                this.setElementContent(t.find(c.CONTENT), this._getContent()),
                t.removeClass(h.FADE + " " + h.SHOW);
            }),
            (f._getContent = function () {
              return (
                this.element.getAttribute("data-content") ||
                ("function" == typeof this.config.content
                  ? this.config.content.call(this.element)
                  : this.config.content)
              );
            }),
            (f._cleanTipClass = function () {
              var t = e(this.getTipElement()),
                n = t.attr("class").match(s);
              null !== n && n.length > 0 && t.removeClass(n.join(""));
            }),
            (d._jQueryInterface = function (t) {
              return this.each(function () {
                var n = e(this).data("bs.popover"),
                  i = "object" == typeof t ? t : null;
                if (
                  (n || !/destroy|hide/.test(t)) &&
                  (n || ((n = new d(this, i)), e(this).data("bs.popover", n)),
                  "string" == typeof t)
                ) {
                  if ("undefined" == typeof n[t])
                    throw new Error('No method named "' + t + '"');
                  n[t]();
                }
              });
            }),
            r(d, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0-beta.2";
                },
              },
              {
                key: "Default",
                get: function () {
                  return a;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return t;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return "bs.popover";
                },
              },
              {
                key: "Event",
                get: function () {
                  return u;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return n;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return l;
                },
              },
            ]),
            d
          );
        })(f);
      return (
        (e.fn[t] = d._jQueryInterface),
        (e.fn[t].Constructor = d),
        (e.fn[t].noConflict = function () {
          return (e.fn[t] = i), d._jQueryInterface;
        }),
        d
      );
    })(),
    g = (function () {
      var t = "scrollspy",
        n = e.fn[t],
        i = { offset: 10, method: "auto", target: "" },
        o = { offset: "number", method: "string", target: "(string|element)" },
        a = {
          ACTIVATE: "activate.bs.scrollspy",
          SCROLL: "scroll.bs.scrollspy",
          LOAD_DATA_API: "load.bs.scrollspy.data-api",
        },
        l = {
          DROPDOWN_ITEM: "dropdown-item",
          DROPDOWN_MENU: "dropdown-menu",
          ACTIVE: "active",
        },
        h = {
          DATA_SPY: '[data-spy="scroll"]',
          ACTIVE: ".active",
          NAV_LIST_GROUP: ".nav, .list-group",
          NAV_LINKS: ".nav-link",
          NAV_ITEMS: ".nav-item",
          LIST_ITEMS: ".list-group-item",
          DROPDOWN: ".dropdown",
          DROPDOWN_ITEMS: ".dropdown-item",
          DROPDOWN_TOGGLE: ".dropdown-toggle",
        },
        c = { OFFSET: "offset", POSITION: "position" },
        u = (function () {
          function n(t, n) {
            var i = this;
            (this._element = t),
              (this._scrollElement = "BODY" === t.tagName ? window : t),
              (this._config = this._getConfig(n)),
              (this._selector =
                this._config.target +
                " " +
                h.NAV_LINKS +
                "," +
                this._config.target +
                " " +
                h.LIST_ITEMS +
                "," +
                this._config.target +
                " " +
                h.DROPDOWN_ITEMS),
              (this._offsets = []),
              (this._targets = []),
              (this._activeTarget = null),
              (this._scrollHeight = 0),
              e(this._scrollElement).on(a.SCROLL, function (t) {
                return i._process(t);
              }),
              this.refresh(),
              this._process();
          }
          var u = n.prototype;
          return (
            (u.refresh = function () {
              var t = this,
                n =
                  this._scrollElement !== this._scrollElement.window
                    ? c.POSITION
                    : c.OFFSET,
                i = "auto" === this._config.method ? n : this._config.method,
                r = i === c.POSITION ? this._getScrollTop() : 0;
              (this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight()),
                e
                  .makeArray(e(this._selector))
                  .map(function (t) {
                    var n,
                      o = s.getSelectorFromElement(t);
                    if ((o && (n = e(o)[0]), n)) {
                      var a = n.getBoundingClientRect();
                      if (a.width || a.height) return [e(n)[i]().top + r, o];
                    }
                    return null;
                  })
                  .filter(function (t) {
                    return t;
                  })
                  .sort(function (t, e) {
                    return t[0] - e[0];
                  })
                  .forEach(function (e) {
                    t._offsets.push(e[0]), t._targets.push(e[1]);
                  });
            }),
            (u.dispose = function () {
              e.removeData(this._element, "bs.scrollspy"),
                e(this._scrollElement).off(".bs.scrollspy"),
                (this._element = null),
                (this._scrollElement = null),
                (this._config = null),
                (this._selector = null),
                (this._offsets = null),
                (this._targets = null),
                (this._activeTarget = null),
                (this._scrollHeight = null);
            }),
            (u._getConfig = function (n) {
              if ("string" != typeof (n = e.extend({}, i, n)).target) {
                var r = e(n.target).attr("id");
                r || ((r = s.getUID(t)), e(n.target).attr("id", r)),
                  (n.target = "#" + r);
              }
              return s.typeCheckConfig(t, n, o), n;
            }),
            (u._getScrollTop = function () {
              return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop;
            }),
            (u._getScrollHeight = function () {
              return (
                this._scrollElement.scrollHeight ||
                Math.max(
                  document.body.scrollHeight,
                  document.documentElement.scrollHeight
                )
              );
            }),
            (u._getOffsetHeight = function () {
              return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height;
            }),
            (u._process = function () {
              var t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                n = this._config.offset + e - this._getOffsetHeight();
              if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i);
              } else {
                if (
                  this._activeTarget &&
                  t < this._offsets[0] &&
                  this._offsets[0] > 0
                )
                  return (this._activeTarget = null), void this._clear();
                for (var s = this._offsets.length; s--; )
                  this._activeTarget !== this._targets[s] &&
                    t >= this._offsets[s] &&
                    ("undefined" == typeof this._offsets[s + 1] ||
                      t < this._offsets[s + 1]) &&
                    this._activate(this._targets[s]);
              }
            }),
            (u._activate = function (t) {
              (this._activeTarget = t), this._clear();
              var n = this._selector.split(",");
              n = n.map(function (e) {
                return (
                  e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                );
              });
              var i = e(n.join(","));
              i.hasClass(l.DROPDOWN_ITEM)
                ? (i
                    .closest(h.DROPDOWN)
                    .find(h.DROPDOWN_TOGGLE)
                    .addClass(l.ACTIVE),
                  i.addClass(l.ACTIVE))
                : (i.addClass(l.ACTIVE),
                  i
                    .parents(h.NAV_LIST_GROUP)
                    .prev(h.NAV_LINKS + ", " + h.LIST_ITEMS)
                    .addClass(l.ACTIVE),
                  i
                    .parents(h.NAV_LIST_GROUP)
                    .prev(h.NAV_ITEMS)
                    .children(h.NAV_LINKS)
                    .addClass(l.ACTIVE)),
                e(this._scrollElement).trigger(a.ACTIVATE, {
                  relatedTarget: t,
                });
            }),
            (u._clear = function () {
              e(this._selector).filter(h.ACTIVE).removeClass(l.ACTIVE);
            }),
            (n._jQueryInterface = function (t) {
              return this.each(function () {
                var i = e(this).data("bs.scrollspy"),
                  s = "object" == typeof t && t;
                if (
                  (i || ((i = new n(this, s)), e(this).data("bs.scrollspy", i)),
                  "string" == typeof t)
                ) {
                  if ("undefined" == typeof i[t])
                    throw new Error('No method named "' + t + '"');
                  i[t]();
                }
              });
            }),
            r(n, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0-beta.2";
                },
              },
              {
                key: "Default",
                get: function () {
                  return i;
                },
              },
            ]),
            n
          );
        })();
      return (
        e(window).on(a.LOAD_DATA_API, function () {
          for (var t = e.makeArray(e(h.DATA_SPY)), n = t.length; n--; ) {
            var i = e(t[n]);
            u._jQueryInterface.call(i, i.data());
          }
        }),
        (e.fn[t] = u._jQueryInterface),
        (e.fn[t].Constructor = u),
        (e.fn[t].noConflict = function () {
          return (e.fn[t] = n), u._jQueryInterface;
        }),
        u
      );
    })(),
    m = (function () {
      var t = e.fn.tab,
        n = {
          HIDE: "hide.bs.tab",
          HIDDEN: "hidden.bs.tab",
          SHOW: "show.bs.tab",
          SHOWN: "shown.bs.tab",
          CLICK_DATA_API: "click.bs.tab.data-api",
        },
        i = {
          DROPDOWN_MENU: "dropdown-menu",
          ACTIVE: "active",
          DISABLED: "disabled",
          FADE: "fade",
          SHOW: "show",
        },
        o = {
          DROPDOWN: ".dropdown",
          NAV_LIST_GROUP: ".nav, .list-group",
          ACTIVE: ".active",
          ACTIVE_UL: "> li > .active",
          DATA_TOGGLE:
            '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
          DROPDOWN_TOGGLE: ".dropdown-toggle",
          DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active",
        },
        a = (function () {
          function t(t) {
            this._element = t;
          }
          var a = t.prototype;
          return (
            (a.show = function () {
              var t = this;
              if (
                !(
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                    e(this._element).hasClass(i.ACTIVE)) ||
                  e(this._element).hasClass(i.DISABLED)
                )
              ) {
                var r,
                  a,
                  l = e(this._element).closest(o.NAV_LIST_GROUP)[0],
                  h = s.getSelectorFromElement(this._element);
                if (l) {
                  var c = "UL" === l.nodeName ? o.ACTIVE_UL : o.ACTIVE;
                  (a = e.makeArray(e(l).find(c))), (a = a[a.length - 1]);
                }
                var u = e.Event(n.HIDE, { relatedTarget: this._element }),
                  d = e.Event(n.SHOW, { relatedTarget: a });
                if (
                  (a && e(a).trigger(u),
                  e(this._element).trigger(d),
                  !d.isDefaultPrevented() && !u.isDefaultPrevented())
                ) {
                  h && (r = e(h)[0]), this._activate(this._element, l);
                  var f = function () {
                    var i = e.Event(n.HIDDEN, { relatedTarget: t._element }),
                      s = e.Event(n.SHOWN, { relatedTarget: a });
                    e(a).trigger(i), e(t._element).trigger(s);
                  };
                  r ? this._activate(r, r.parentNode, f) : f();
                }
              }
            }),
            (a.dispose = function () {
              e.removeData(this._element, "bs.tab"), (this._element = null);
            }),
            (a._activate = function (t, n, r) {
              var a,
                l = this,
                h = (a =
                  "UL" === n.nodeName
                    ? e(n).find(o.ACTIVE_UL)
                    : e(n).children(o.ACTIVE))[0],
                c =
                  r && s.supportsTransitionEnd() && h && e(h).hasClass(i.FADE),
                u = function () {
                  return l._transitionComplete(t, h, c, r);
                };
              h && c
                ? e(h).one(s.TRANSITION_END, u).emulateTransitionEnd(150)
                : u(),
                h && e(h).removeClass(i.SHOW);
            }),
            (a._transitionComplete = function (t, n, r, a) {
              if (n) {
                e(n).removeClass(i.ACTIVE);
                var l = e(n.parentNode).find(o.DROPDOWN_ACTIVE_CHILD)[0];
                l && e(l).removeClass(i.ACTIVE),
                  "tab" === n.getAttribute("role") &&
                    n.setAttribute("aria-selected", !1);
              }
              if (
                (e(t).addClass(i.ACTIVE),
                "tab" === t.getAttribute("role") &&
                  t.setAttribute("aria-selected", !0),
                r
                  ? (s.reflow(t), e(t).addClass(i.SHOW))
                  : e(t).removeClass(i.FADE),
                t.parentNode && e(t.parentNode).hasClass(i.DROPDOWN_MENU))
              ) {
                var h = e(t).closest(o.DROPDOWN)[0];
                h && e(h).find(o.DROPDOWN_TOGGLE).addClass(i.ACTIVE),
                  t.setAttribute("aria-expanded", !0);
              }
              a && a();
            }),
            (t._jQueryInterface = function (n) {
              return this.each(function () {
                var i = e(this),
                  s = i.data("bs.tab");
                if (
                  (s || ((s = new t(this)), i.data("bs.tab", s)),
                  "string" == typeof n)
                ) {
                  if ("undefined" == typeof s[n])
                    throw new Error('No method named "' + n + '"');
                  s[n]();
                }
              });
            }),
            r(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0-beta.2";
                },
              },
            ]),
            t
          );
        })();
      return (
        e(document).on(n.CLICK_DATA_API, o.DATA_TOGGLE, function (t) {
          t.preventDefault(), a._jQueryInterface.call(e(this), "show");
        }),
        (e.fn.tab = a._jQueryInterface),
        (e.fn.tab.Constructor = a),
        (e.fn.tab.noConflict = function () {
          return (e.fn.tab = t), a._jQueryInterface;
        }),
        a
      );
    })();
  return (
    (function () {
      if ("undefined" == typeof e)
        throw new Error(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = e.fn.jquery.split(" ")[0].split(".");
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        t[0] >= 4
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    })(),
    (t.Util = s),
    (t.Alert = a),
    (t.Button = l),
    (t.Carousel = h),
    (t.Collapse = c),
    (t.Dropdown = u),
    (t.Modal = d),
    (t.Popover = _),
    (t.Scrollspy = g),
    (t.Tab = m),
    (t.Tooltip = f),
    t
  );
})({}, $, Popper);
// ==================================================
// fancyBox v3.2.10
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
!(function (t, e, n, o) {
  "use strict";
  function i(t) {
    var e = n(t.currentTarget),
      o = t.data ? t.data.options : {},
      i = e.attr("data-fancybox") || "",
      a = 0,
      s = [];
    t.isDefaultPrevented() ||
      (t.preventDefault(),
      i
        ? ((s = o.selector ? n(o.selector) : t.data ? t.data.items : []),
          (s = s.length
            ? s.filter('[data-fancybox="' + i + '"]')
            : n('[data-fancybox="' + i + '"]')),
          (a = s.index(e)),
          a < 0 && (a = 0))
        : (s = [e]),
      n.fancybox.open(s, o, a));
  }
  if (n) {
    if (n.fn.fancybox)
      return void (
        "console" in t && console.log("fancyBox already initialized")
      );
    var a = {
        loop: !1,
        margin: [44, 0],
        gutter: 50,
        keyboard: !0,
        arrows: !0,
        infobar: !0,
        toolbar: !0,
        buttons: ["slideShow", "fullScreen", "thumbs", "share", "close"],
        idleTime: 3,
        smallBtn: "auto",
        protect: !1,
        modal: !1,
        image: { preload: "auto" },
        ajax: { settings: { data: { fancybox: !0 } } },
        iframe: {
          tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
          preload: !0,
          css: {},
          attr: { scrolling: "auto" },
        },
        defaultType: "image",
        animationEffect: "zoom",
        animationDuration: 500,
        zoomOpacity: "auto",
        transitionEffect: "fade",
        transitionDuration: 366,
        slideClass: "",
        baseClass: "",
        baseTpl:
          '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
        btnTpl: {
          download:
            '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',
          zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',
          close:
            '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
          smallBtn:
            '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
          arrowLeft:
            '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',
          arrowRight:
            '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>',
        },
        parentEl: "body",
        autoFocus: !1,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: { autoStart: !1 },
        touch: { vertical: !0, momentum: !0 },
        hash: null,
        media: {},
        slideShow: { autoStart: !1, speed: 4e3 },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y",
        },
        wheel: "auto",
        onInit: n.noop,
        beforeLoad: n.noop,
        afterLoad: n.noop,
        beforeShow: n.noop,
        afterShow: n.noop,
        beforeClose: n.noop,
        afterClose: n.noop,
        onActivate: n.noop,
        onDeactivate: n.noop,
        clickContent: function (t, e) {
          return "image" === t.type && "zoom";
        },
        clickSlide: "close",
        clickOutside: "close",
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
          idleTime: !1,
          margin: 0,
          clickContent: function (t, e) {
            return "image" === t.type && "toggleControls";
          },
          clickSlide: function (t, e) {
            return "image" === t.type ? "toggleControls" : "close";
          },
          dblclickContent: function (t, e) {
            return "image" === t.type && "zoom";
          },
          dblclickSlide: function (t, e) {
            return "image" === t.type && "zoom";
          },
        },
        lang: "en",
        i18n: {
          en: {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            ERROR:
              "The requested content cannot be loaded. <br/> Please try again later.",
            PLAY_START: "Start slideshow",
            PLAY_STOP: "Pause slideshow",
            FULL_SCREEN: "Full screen",
            THUMBS: "Thumbnails",
            DOWNLOAD: "Download",
            SHARE: "Share",
            ZOOM: "Zoom",
          },
          de: {
            CLOSE: "Schliessen",
            NEXT: "Weiter",
            PREV: "Zurück",
            ERROR:
              "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
            PLAY_START: "Diaschau starten",
            PLAY_STOP: "Diaschau beenden",
            FULL_SCREEN: "Vollbild",
            THUMBS: "Vorschaubilder",
            DOWNLOAD: "Herunterladen",
            SHARE: "Teilen",
            ZOOM: "Maßstab",
          },
        },
      },
      s = n(t),
      r = n(e),
      c = 0,
      l = function (t) {
        return t && t.hasOwnProperty && t instanceof n;
      },
      u = (function () {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60);
          }
        );
      })(),
      d = (function () {
        var t,
          n = e.createElement("fakeelement"),
          i = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
          };
        for (t in i) if (n.style[t] !== o) return i[t];
        return "transitionend";
      })(),
      f = function (t) {
        return t && t.length && t[0].offsetHeight;
      },
      p = function (t, o, i) {
        var a = this;
        (a.opts = n.extend(!0, { index: i }, n.fancybox.defaults, o || {})),
          n.fancybox.isMobile &&
            (a.opts = n.extend(!0, {}, a.opts, a.opts.mobile)),
          o && n.isArray(o.buttons) && (a.opts.buttons = o.buttons),
          (a.id = a.opts.id || ++c),
          (a.group = []),
          (a.currIndex = parseInt(a.opts.index, 10) || 0),
          (a.prevIndex = null),
          (a.prevPos = null),
          (a.currPos = 0),
          (a.firstRun = null),
          a.createGroup(t),
          a.group.length &&
            ((a.$lastFocus = n(e.activeElement).blur()),
            (a.slides = {}),
            a.init());
      };
    n.extend(p.prototype, {
      init: function () {
        var i,
          a,
          s,
          c = this,
          l = c.group[c.currIndex],
          u = l.opts,
          d = n.fancybox.scrollbarWidth;
        (c.scrollTop = r.scrollTop()),
          (c.scrollLeft = r.scrollLeft()),
          n.fancybox.getInstance() ||
            (n("body").addClass("fancybox-active"),
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream
              ? "image" !== l.type &&
                n("body")
                  .css("top", n("body").scrollTop() * -1)
                  .addClass("fancybox-iosfix")
              : !n.fancybox.isMobile &&
                e.body.scrollHeight > t.innerHeight &&
                (d === o &&
                  ((i = n(
                    '<div style="width:50px;height:50px;overflow:scroll;" />'
                  ).appendTo("body")),
                  (d = n.fancybox.scrollbarWidth =
                    i[0].offsetWidth - i[0].clientWidth),
                  i.remove()),
                n("head").append(
                  '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' +
                    d +
                    "px; }</style>"
                ),
                n("body").addClass("compensate-for-scrollbar"))),
          (s = ""),
          n.each(u.buttons, function (t, e) {
            s += u.btnTpl[e] || "";
          }),
          (a = n(
            c.translate(
              c,
              u.baseTpl
                .replace("{{buttons}}", s)
                .replace("{{arrows}}", u.btnTpl.arrowLeft + u.btnTpl.arrowRight)
            )
          )
            .attr("id", "fancybox-container-" + c.id)
            .addClass("fancybox-is-hidden")
            .addClass(u.baseClass)
            .data("FancyBox", c)
            .appendTo(u.parentEl)),
          (c.$refs = { container: a }),
          [
            "bg",
            "inner",
            "infobar",
            "toolbar",
            "stage",
            "caption",
            "navigation",
          ].forEach(function (t) {
            c.$refs[t] = a.find(".fancybox-" + t);
          }),
          c.trigger("onInit"),
          c.activate(),
          c.jumpTo(c.currIndex);
      },
      translate: function (t, e) {
        var n = t.opts.i18n[t.opts.lang];
        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          var i = n[e];
          return i === o ? t : i;
        });
      },
      createGroup: function (t) {
        var e = this,
          i = n.makeArray(t);
        n.each(i, function (t, i) {
          var a,
            s,
            r,
            c,
            l,
            u = {},
            d = {};
          n.isPlainObject(i)
            ? ((u = i), (d = i.opts || i))
            : "object" === n.type(i) && n(i).length
            ? ((a = n(i)),
              (d = a.data()),
              (d = n.extend({}, d, d.options || {})),
              (d.$orig = a),
              (u.src = d.src || a.attr("href")),
              u.type || u.src || ((u.type = "inline"), (u.src = i)))
            : (u = { type: "html", src: i + "" }),
            (u.opts = n.extend(!0, {}, e.opts, d)),
            n.isArray(d.buttons) && (u.opts.buttons = d.buttons),
            (s = u.type || u.opts.type),
            (c = u.src || ""),
            !s &&
              c &&
              (c.match(
                /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
              )
                ? (s = "image")
                : c.match(/\.(pdf)((\?|#).*)?$/i)
                ? (s = "pdf")
                : (r = c.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i))
                ? ((s = "video"),
                  u.opts.videoFormat ||
                    (u.opts.videoFormat =
                      "video/" + ("ogv" === r[1] ? "ogg" : r[1])))
                : "#" === c.charAt(0) && (s = "inline")),
            s ? (u.type = s) : e.trigger("objectNeedsType", u),
            (u.index = e.group.length),
            u.opts.$orig && !u.opts.$orig.length && delete u.opts.$orig,
            !u.opts.$thumb &&
              u.opts.$orig &&
              (u.opts.$thumb = u.opts.$orig.find("img:first")),
            u.opts.$thumb && !u.opts.$thumb.length && delete u.opts.$thumb,
            "function" === n.type(u.opts.caption) &&
              (u.opts.caption = u.opts.caption.apply(i, [e, u])),
            "function" === n.type(e.opts.caption) &&
              (u.opts.caption = e.opts.caption.apply(i, [e, u])),
            u.opts.caption instanceof n ||
              (u.opts.caption =
                u.opts.caption === o ? "" : u.opts.caption + ""),
            "ajax" === s &&
              ((l = c.split(/\s+/, 2)),
              l.length > 1 &&
                ((u.src = l.shift()), (u.opts.filter = l.shift()))),
            "auto" == u.opts.smallBtn &&
              (n.inArray(s, ["html", "inline", "ajax"]) > -1
                ? ((u.opts.toolbar = !1), (u.opts.smallBtn = !0))
                : (u.opts.smallBtn = !1)),
            "pdf" === s && ((u.type = "iframe"), (u.opts.iframe.preload = !1)),
            u.opts.modal &&
              (u.opts = n.extend(!0, u.opts, {
                infobar: 0,
                toolbar: 0,
                smallBtn: 0,
                keyboard: 0,
                slideShow: 0,
                fullScreen: 0,
                thumbs: 0,
                touch: 0,
                clickContent: !1,
                clickSlide: !1,
                clickOutside: !1,
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
              })),
            e.group.push(u);
        });
      },
      addEvents: function () {
        var o = this;
        o.removeEvents(),
          o.$refs.container
            .on("click.fb-close", "[data-fancybox-close]", function (t) {
              t.stopPropagation(), t.preventDefault(), o.close(t);
            })
            .on(
              "click.fb-prev touchend.fb-prev",
              "[data-fancybox-prev]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), o.previous();
              }
            )
            .on(
              "click.fb-next touchend.fb-next",
              "[data-fancybox-next]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), o.next();
              }
            )
            .on("click.fb", "[data-fancybox-zoom]", function (t) {
              o[o.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
            }),
          s.on("orientationchange.fb resize.fb", function (t) {
            t && t.originalEvent && "resize" === t.originalEvent.type
              ? u(function () {
                  o.update();
                })
              : (o.$refs.stage.hide(),
                setTimeout(function () {
                  o.$refs.stage.show(), o.update();
                }, 600));
          }),
          r.on("focusin.fb", function (t) {
            var i = n.fancybox ? n.fancybox.getInstance() : null;
            i.isClosing ||
              !i.current ||
              !i.current.opts.trapFocus ||
              n(t.target).hasClass("fancybox-container") ||
              n(t.target).is(e) ||
              (i &&
                "fixed" !== n(t.target).css("position") &&
                !i.$refs.container.has(t.target).length &&
                (t.stopPropagation(),
                i.focus(),
                s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft)));
          }),
          r.on("keydown.fb", function (t) {
            var e = o.current,
              i = t.keyCode || t.which;
            if (
              e &&
              e.opts.keyboard &&
              !n(t.target).is("input") &&
              !n(t.target).is("textarea")
            )
              return 8 === i || 27 === i
                ? (t.preventDefault(), void o.close(t))
                : 37 === i || 38 === i
                ? (t.preventDefault(), void o.previous())
                : 39 === i || 40 === i
                ? (t.preventDefault(), void o.next())
                : void o.trigger("afterKeydown", t, i);
          }),
          o.group[o.currIndex].opts.idleTime &&
            ((o.idleSecondsCounter = 0),
            r.on(
              "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
              function (t) {
                (o.idleSecondsCounter = 0),
                  o.isIdle && o.showControls(),
                  (o.isIdle = !1);
              }
            ),
            (o.idleInterval = t.setInterval(function () {
              o.idleSecondsCounter++,
                o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime &&
                  !o.isDragging &&
                  ((o.isIdle = !0),
                  (o.idleSecondsCounter = 0),
                  o.hideControls());
            }, 1e3)));
      },
      removeEvents: function () {
        var e = this;
        s.off("orientationchange.fb resize.fb"),
          r.off("focusin.fb keydown.fb .fb-idle"),
          this.$refs.container.off(".fb-close .fb-prev .fb-next"),
          e.idleInterval &&
            (t.clearInterval(e.idleInterval), (e.idleInterval = null));
      },
      previous: function (t) {
        return this.jumpTo(this.currPos - 1, t);
      },
      next: function (t) {
        return this.jumpTo(this.currPos + 1, t);
      },
      jumpTo: function (t, e, i) {
        var a,
          s,
          r,
          c,
          l,
          u,
          d,
          p = this,
          h = p.group.length;
        if (!(p.isDragging || p.isClosing || (p.isAnimating && p.firstRun))) {
          if (
            ((t = parseInt(t, 10)),
            (s = p.current ? p.current.opts.loop : p.opts.loop),
            !s && (t < 0 || t >= h))
          )
            return !1;
          if (
            ((a = p.firstRun = null === p.firstRun),
            !(h < 2 && !a && p.isDragging))
          ) {
            if (
              ((c = p.current),
              (p.prevIndex = p.currIndex),
              (p.prevPos = p.currPos),
              (r = p.createSlide(t)),
              h > 1 &&
                ((s || r.index > 0) && p.createSlide(t - 1),
                (s || r.index < h - 1) && p.createSlide(t + 1)),
              (p.current = r),
              (p.currIndex = r.index),
              (p.currPos = r.pos),
              p.trigger("beforeShow", a),
              p.updateControls(),
              (u = n.fancybox.getTranslate(r.$slide)),
              (r.isMoved =
                (0 !== u.left || 0 !== u.top) &&
                !r.$slide.hasClass("fancybox-animated")),
              (r.forcedDuration = o),
              n.isNumeric(e)
                ? (r.forcedDuration = e)
                : (e = r.opts[a ? "animationDuration" : "transitionDuration"]),
              (e = parseInt(e, 10)),
              a)
            )
              return (
                r.opts.animationEffect &&
                  e &&
                  p.$refs.container.css("transition-duration", e + "ms"),
                p.$refs.container.removeClass("fancybox-is-hidden"),
                f(p.$refs.container),
                p.$refs.container.addClass("fancybox-is-open"),
                r.$slide.addClass("fancybox-slide--current"),
                p.loadSlide(r),
                void p.preload("image")
              );
            n.each(p.slides, function (t, e) {
              n.fancybox.stop(e.$slide);
            }),
              r.$slide
                .removeClass("fancybox-slide--next fancybox-slide--previous")
                .addClass("fancybox-slide--current"),
              r.isMoved
                ? ((l = Math.round(r.$slide.width())),
                  n.each(p.slides, function (t, o) {
                    var i = o.pos - r.pos;
                    n.fancybox.animate(
                      o.$slide,
                      { top: 0, left: i * l + i * o.opts.gutter },
                      e,
                      function () {
                        o.$slide
                          .removeAttr("style")
                          .removeClass(
                            "fancybox-slide--next fancybox-slide--previous"
                          ),
                          o.pos === p.currPos &&
                            ((r.isMoved = !1), p.complete());
                      }
                    );
                  }))
                : p.$refs.stage.children().removeAttr("style"),
              r.isLoaded ? p.revealContent(r) : p.loadSlide(r),
              p.preload("image"),
              c.pos !== r.pos &&
                ((d =
                  "fancybox-slide--" + (c.pos > r.pos ? "next" : "previous")),
                c.$slide.removeClass(
                  "fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"
                ),
                (c.isComplete = !1),
                e &&
                  (r.isMoved || r.opts.transitionEffect) &&
                  (r.isMoved
                    ? c.$slide.addClass(d)
                    : ((d =
                        "fancybox-animated " +
                        d +
                        " fancybox-fx-" +
                        r.opts.transitionEffect),
                      n.fancybox.animate(c.$slide, d, e, function () {
                        c.$slide.removeClass(d).removeAttr("style");
                      }))));
          }
        }
      },
      createSlide: function (t) {
        var e,
          o,
          i = this;
        return (
          (o = t % i.group.length),
          (o = o < 0 ? i.group.length + o : o),
          !i.slides[t] &&
            i.group[o] &&
            ((e = n('<div class="fancybox-slide"></div>').appendTo(
              i.$refs.stage
            )),
            (i.slides[t] = n.extend(!0, {}, i.group[o], {
              pos: t,
              $slide: e,
              isLoaded: !1,
            })),
            i.updateSlide(i.slides[t])),
          i.slides[t]
        );
      },
      scaleToActual: function (t, e, i) {
        var a,
          s,
          r,
          c,
          l,
          u = this,
          d = u.current,
          f = d.$content,
          p = parseInt(d.$slide.width(), 10),
          h = parseInt(d.$slide.height(), 10),
          g = d.width,
          b = d.height;
        "image" != d.type ||
          d.hasError ||
          !f ||
          u.isAnimating ||
          (n.fancybox.stop(f),
          (u.isAnimating = !0),
          (t = t === o ? 0.5 * p : t),
          (e = e === o ? 0.5 * h : e),
          (a = n.fancybox.getTranslate(f)),
          (c = g / a.width),
          (l = b / a.height),
          (s = 0.5 * p - 0.5 * g),
          (r = 0.5 * h - 0.5 * b),
          g > p &&
            ((s = a.left * c - (t * c - t)),
            s > 0 && (s = 0),
            s < p - g && (s = p - g)),
          b > h &&
            ((r = a.top * l - (e * l - e)),
            r > 0 && (r = 0),
            r < h - b && (r = h - b)),
          u.updateCursor(g, b),
          n.fancybox.animate(
            f,
            { top: r, left: s, scaleX: c, scaleY: l },
            i || 330,
            function () {
              u.isAnimating = !1;
            }
          ),
          u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop());
      },
      scaleToFit: function (t) {
        var e,
          o = this,
          i = o.current,
          a = i.$content;
        "image" != i.type ||
          i.hasError ||
          !a ||
          o.isAnimating ||
          (n.fancybox.stop(a),
          (o.isAnimating = !0),
          (e = o.getFitPos(i)),
          o.updateCursor(e.width, e.height),
          n.fancybox.animate(
            a,
            {
              top: e.top,
              left: e.left,
              scaleX: e.width / a.width(),
              scaleY: e.height / a.height(),
            },
            t || 330,
            function () {
              o.isAnimating = !1;
            }
          ));
      },
      getFitPos: function (t) {
        var e,
          o,
          i,
          a,
          s,
          r = this,
          c = t.$content,
          l = t.width,
          u = t.height,
          d = t.opts.margin;
        return (
          !(!c || !c.length || (!l && !u)) &&
          ("number" === n.type(d) && (d = [d, d]),
          2 == d.length && (d = [d[0], d[1], d[0], d[1]]),
          (e = parseInt(r.$refs.stage.width(), 10) - (d[1] + d[3])),
          (o = parseInt(r.$refs.stage.height(), 10) - (d[0] + d[2])),
          (i = Math.min(1, e / l, o / u)),
          (a = Math.floor(i * l)),
          (s = Math.floor(i * u)),
          {
            top: Math.floor(0.5 * (o - s)) + d[0],
            left: Math.floor(0.5 * (e - a)) + d[3],
            width: a,
            height: s,
          })
        );
      },
      update: function () {
        var t = this;
        n.each(t.slides, function (e, n) {
          t.updateSlide(n);
        });
      },
      updateSlide: function (t, e) {
        var o = this,
          i = t && t.$content;
        i &&
          (t.width || t.height) &&
          ((o.isAnimating = !1),
          n.fancybox.stop(i),
          n.fancybox.setTranslate(i, o.getFitPos(t)),
          t.pos === o.currPos && o.updateCursor()),
          t.$slide.trigger("refresh"),
          o.trigger("onUpdate", t);
      },
      centerSlide: function (t, e) {
        var i,
          a,
          s = this;
        s.current &&
          ((i = Math.round(t.$slide.width())),
          (a = t.pos - s.current.pos),
          n.fancybox.animate(
            t.$slide,
            { top: 0, left: a * i + a * t.opts.gutter, opacity: 1 },
            e === o ? 0 : e,
            null,
            !1
          ));
      },
      updateCursor: function (t, e) {
        var n,
          i = this,
          a = i.$refs.container.removeClass(
            "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut"
          );
        i.current &&
          !i.isClosing &&
          (i.isZoomable()
            ? (a.addClass("fancybox-is-zoomable"),
              (n =
                t !== o && e !== o
                  ? t < i.current.width && e < i.current.height
                  : i.isScaledDown()),
              n
                ? a.addClass("fancybox-can-zoomIn")
                : i.current.opts.touch
                ? a.addClass("fancybox-can-drag")
                : a.addClass("fancybox-can-zoomOut"))
            : i.current.opts.touch && a.addClass("fancybox-can-drag"));
      },
      isZoomable: function () {
        var t,
          e = this,
          o = e.current;
        if (o && !e.isClosing)
          return !!(
            "image" === o.type &&
            o.isLoaded &&
            !o.hasError &&
            ("zoom" === o.opts.clickContent ||
              (n.isFunction(o.opts.clickContent) &&
                "zoom" === o.opts.clickContent(o))) &&
            ((t = e.getFitPos(o)), o.width > t.width || o.height > t.height)
          );
      },
      isScaledDown: function () {
        var t = this,
          e = t.current,
          o = e.$content,
          i = !1;
        return (
          o &&
            ((i = n.fancybox.getTranslate(o)),
            (i = i.width < e.width || i.height < e.height)),
          i
        );
      },
      canPan: function () {
        var t = this,
          e = t.current,
          n = e.$content,
          o = !1;
        return (
          n &&
            ((o = t.getFitPos(e)),
            (o =
              Math.abs(n.width() - o.width) > 1 ||
              Math.abs(n.height() - o.height) > 1)),
          o
        );
      },
      loadSlide: function (t) {
        var e,
          o,
          i,
          a = this;
        if (!t.isLoading && !t.isLoaded) {
          switch (
            ((t.isLoading = !0),
            a.trigger("beforeLoad", t),
            (e = t.type),
            (o = t.$slide),
            o
              .off("refresh")
              .trigger("onReset")
              .addClass("fancybox-slide--" + (e || "unknown"))
              .addClass(t.opts.slideClass),
            e)
          ) {
            case "image":
              a.setImage(t);
              break;
            case "iframe":
              a.setIframe(t);
              break;
            case "html":
              a.setContent(t, t.src || t.content);
              break;
            case "inline":
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
              break;
            case "ajax":
              a.showLoading(t),
                (i = n.ajax(
                  n.extend({}, t.opts.ajax.settings, {
                    url: t.src,
                    success: function (e, n) {
                      "success" === n && a.setContent(t, e);
                    },
                    error: function (e, n) {
                      e && "abort" !== n && a.setError(t);
                    },
                  })
                )),
                o.one("onReset", function () {
                  i.abort();
                });
              break;
            case "video":
              a.setContent(
                t,
                '<video controls><source src="' +
                  t.src +
                  '" type="' +
                  t.opts.videoFormat +
                  "\">Your browser doesn't support HTML5 video</video>"
              );
              break;
            default:
              a.setError(t);
          }
          return !0;
        }
      },
      setImage: function (e) {
        var o,
          i,
          a,
          s,
          r = this,
          c = e.opts.srcset || e.opts.image.srcset;
        if (c) {
          (a = t.devicePixelRatio || 1),
            (s = t.innerWidth * a),
            (i = c.split(",").map(function (t) {
              var e = {};
              return (
                t
                  .trim()
                  .split(/\s+/)
                  .forEach(function (t, n) {
                    var o = parseInt(t.substring(0, t.length - 1), 10);
                    return 0 === n
                      ? (e.url = t)
                      : void (
                          o && ((e.value = o), (e.postfix = t[t.length - 1]))
                        );
                  }),
                e
              );
            })),
            i.sort(function (t, e) {
              return t.value - e.value;
            });
          for (var l = 0; l < i.length; l++) {
            var u = i[l];
            if (
              ("w" === u.postfix && u.value >= s) ||
              ("x" === u.postfix && u.value >= a)
            ) {
              o = u;
              break;
            }
          }
          !o && i.length && (o = i[i.length - 1]),
            o &&
              ((e.src = o.url),
              e.width &&
                e.height &&
                "w" == o.postfix &&
                ((e.height = (e.width / e.height) * o.value),
                (e.width = o.value)));
        }
        (e.$content = n('<div class="fancybox-image-wrap"></div>')
          .addClass("fancybox-is-hidden")
          .appendTo(e.$slide)),
          e.opts.preload !== !1 &&
          e.opts.width &&
          e.opts.height &&
          (e.opts.thumb || e.opts.$thumb)
            ? ((e.width = e.opts.width),
              (e.height = e.opts.height),
              (e.$ghost = n("<img />")
                .one("error", function () {
                  n(this).remove(), (e.$ghost = null), r.setBigImage(e);
                })
                .one("load", function () {
                  r.afterLoad(e), r.setBigImage(e);
                })
                .addClass("fancybox-image")
                .appendTo(e.$content)
                .attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))))
            : r.setBigImage(e);
      },
      setBigImage: function (t) {
        var e = this,
          o = n("<img />");
        (t.$image = o
          .one("error", function () {
            e.setError(t);
          })
          .one("load", function () {
            clearTimeout(t.timouts),
              (t.timouts = null),
              e.isClosing ||
                ((t.width = t.opts.width || this.naturalWidth),
                (t.height = t.opts.height || this.naturalHeight),
                t.opts.image.srcset &&
                  o.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset),
                e.hideLoading(t),
                t.$ghost
                  ? (t.timouts = setTimeout(function () {
                      (t.timouts = null), t.$ghost.hide();
                    }, Math.min(300, Math.max(1e3, t.height / 1600))))
                  : e.afterLoad(t));
          })
          .addClass("fancybox-image")
          .attr("src", t.src)
          .appendTo(t.$content)),
          (o[0].complete || "complete" == o[0].readyState) &&
          o[0].naturalWidth &&
          o[0].naturalHeight
            ? o.trigger("load")
            : o[0].error
            ? o.trigger("error")
            : (t.timouts = setTimeout(function () {
                o[0].complete || t.hasError || e.showLoading(t);
              }, 100));
      },
      setIframe: function (t) {
        var e,
          i = this,
          a = t.opts.iframe,
          s = t.$slide;
        (t.$content = n(
          '<div class="fancybox-content' +
            (a.preload ? " fancybox-is-hidden" : "") +
            '"></div>'
        )
          .css(a.css)
          .appendTo(s)),
          (e = n(a.tpl.replace(/\{rnd\}/g, new Date().getTime()))
            .attr(a.attr)
            .appendTo(t.$content)),
          a.preload
            ? (i.showLoading(t),
              e.on("load.fb error.fb", function (e) {
                (this.isReady = 1), t.$slide.trigger("refresh"), i.afterLoad(t);
              }),
              s.on("refresh.fb", function () {
                var n,
                  i,
                  s,
                  r = t.$content,
                  c = a.css.width,
                  l = a.css.height;
                if (1 === e[0].isReady) {
                  try {
                    (i = e.contents()), (s = i.find("body"));
                  } catch (t) {}
                  s &&
                    s.length &&
                    (c === o &&
                      ((n =
                        e[0].contentWindow.document.documentElement
                          .scrollWidth),
                      (c = Math.ceil(s.outerWidth(!0) + (r.width() - n))),
                      (c += r.outerWidth() - r.innerWidth())),
                    l === o &&
                      ((l = Math.ceil(s.outerHeight(!0))),
                      (l += r.outerHeight() - r.innerHeight())),
                    c && r.width(c),
                    l && r.height(l)),
                    r.removeClass("fancybox-is-hidden");
                }
              }))
            : this.afterLoad(t),
          e.attr("src", t.src),
          t.opts.smallBtn === !0 &&
            t.$content.prepend(i.translate(t, t.opts.btnTpl.smallBtn)),
          s.one("onReset", function () {
            try {
              n(this).find("iframe").hide().attr("src", "//about:blank");
            } catch (t) {}
            n(this).empty(), (t.isLoaded = !1);
          });
      },
      setContent: function (t, e) {
        var o = this;
        o.isClosing ||
          (o.hideLoading(t),
          t.$slide.empty(),
          l(e) && e.parent().length
            ? (e.parent(".fancybox-slide--inline").trigger("onReset"),
              (t.$placeholder = n("<div></div>").hide().insertAfter(e)),
              e.css("display", "inline-block"))
            : t.hasError ||
              ("string" === n.type(e) &&
                ((e = n("<div>").append(n.trim(e)).contents()),
                3 === e[0].nodeType && (e = n("<div>").html(e))),
              t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
          t.$slide.one("onReset", function () {
            n(this).find("video,audio").trigger("pause"),
              t.$placeholder &&
                (t.$placeholder.after(e.hide()).remove(),
                (t.$placeholder = null)),
              t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
              t.hasError || (n(this).empty(), (t.isLoaded = !1));
          }),
          (t.$content = n(e).appendTo(t.$slide)),
          this.afterLoad(t));
      },
      setError: function (t) {
        (t.hasError = !0),
          t.$slide.removeClass("fancybox-slide--" + t.type),
          this.setContent(t, this.translate(t, t.opts.errorTpl));
      },
      showLoading: function (t) {
        var e = this;
        (t = t || e.current),
          t &&
            !t.$spinner &&
            (t.$spinner = n(e.opts.spinnerTpl).appendTo(t.$slide));
      },
      hideLoading: function (t) {
        var e = this;
        (t = t || e.current),
          t && t.$spinner && (t.$spinner.remove(), delete t.$spinner);
      },
      afterLoad: function (t) {
        var e = this;
        e.isClosing ||
          ((t.isLoading = !1),
          (t.isLoaded = !0),
          e.trigger("afterLoad", t),
          e.hideLoading(t),
          t.opts.smallBtn &&
            !t.$smallBtn &&
            (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(
              t.$content.filter("div,form").first()
            )),
          t.opts.protect &&
            t.$content &&
            !t.hasError &&
            (t.$content.on("contextmenu.fb", function (t) {
              return 2 == t.button && t.preventDefault(), !0;
            }),
            "image" === t.type &&
              n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
          e.revealContent(t));
      },
      revealContent: function (t) {
        var e,
          i,
          a,
          s,
          r,
          c = this,
          l = t.$slide,
          u = !1;
        return (
          (e = t.opts[c.firstRun ? "animationEffect" : "transitionEffect"]),
          (a = t.opts[c.firstRun ? "animationDuration" : "transitionDuration"]),
          (a = parseInt(t.forcedDuration === o ? a : t.forcedDuration, 10)),
          (!t.isMoved && t.pos === c.currPos && a) || (e = !1),
          "zoom" !== e ||
            (t.pos === c.currPos &&
              a &&
              "image" === t.type &&
              !t.hasError &&
              (u = c.getThumbPos(t))) ||
            (e = "fade"),
          "zoom" === e
            ? ((r = c.getFitPos(t)),
              (r.scaleX = r.width / u.width),
              (r.scaleY = r.height / u.height),
              delete r.width,
              delete r.height,
              (s = t.opts.zoomOpacity),
              "auto" == s &&
                (s = Math.abs(t.width / t.height - u.width / u.height) > 0.1),
              s && ((u.opacity = 0.1), (r.opacity = 1)),
              n.fancybox.setTranslate(
                t.$content.removeClass("fancybox-is-hidden"),
                u
              ),
              f(t.$content),
              void n.fancybox.animate(t.$content, r, a, function () {
                c.complete();
              }))
            : (c.updateSlide(t),
              e
                ? (n.fancybox.stop(l),
                  (i =
                    "fancybox-animated fancybox-slide--" +
                    (t.pos >= c.prevPos ? "next" : "previous") +
                    " fancybox-fx-" +
                    e),
                  l
                    .removeAttr("style")
                    .removeClass(
                      "fancybox-slide--current fancybox-slide--next fancybox-slide--previous"
                    )
                    .addClass(i),
                  t.$content.removeClass("fancybox-is-hidden"),
                  f(l),
                  void n.fancybox.animate(
                    l,
                    "fancybox-slide--current",
                    a,
                    function (e) {
                      l.removeClass(i).removeAttr("style"),
                        t.pos === c.currPos && c.complete();
                    },
                    !0
                  ))
                : (f(l),
                  t.$content.removeClass("fancybox-is-hidden"),
                  void (t.pos === c.currPos && c.complete())))
        );
      },
      getThumbPos: function (o) {
        var i,
          a = this,
          s = !1,
          r = function (e) {
            for (
              var o, i = e[0], a = i.getBoundingClientRect(), s = [];
              null !== i.parentElement;

            )
              ("hidden" !== n(i.parentElement).css("overflow") &&
                "auto" !== n(i.parentElement).css("overflow")) ||
                s.push(i.parentElement.getBoundingClientRect()),
                (i = i.parentElement);
            return (
              (o = s.every(function (t) {
                var e = Math.min(a.right, t.right) - Math.max(a.left, t.left),
                  n = Math.min(a.bottom, t.bottom) - Math.max(a.top, t.top);
                return e > 0 && n > 0;
              })),
              o &&
                a.bottom > 0 &&
                a.right > 0 &&
                a.left < n(t).width() &&
                a.top < n(t).height()
            );
          },
          c = o.opts.$thumb,
          l = c ? c.offset() : 0;
        return (
          l &&
            c[0].ownerDocument === e &&
            r(c) &&
            ((i = a.$refs.stage.offset()),
            (s = {
              top: l.top - i.top + parseFloat(c.css("border-top-width") || 0),
              left:
                l.left - i.left + parseFloat(c.css("border-left-width") || 0),
              width: c.width(),
              height: c.height(),
              scaleX: 1,
              scaleY: 1,
            })),
          s
        );
      },
      complete: function () {
        var t = this,
          o = t.current,
          i = {};
        o.isMoved ||
          !o.isLoaded ||
          o.isComplete ||
          ((o.isComplete = !0),
          o.$slide.siblings().trigger("onReset"),
          t.preload("inline"),
          f(o.$slide),
          o.$slide.addClass("fancybox-slide--complete"),
          n.each(t.slides, function (e, o) {
            o.pos >= t.currPos - 1 && o.pos <= t.currPos + 1
              ? (i[o.pos] = o)
              : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
          }),
          (t.slides = i),
          t.updateCursor(),
          t.trigger("afterShow"),
          o.$slide.find("video,audio").first().trigger("play"),
          (n(e.activeElement).is("[disabled]") ||
            (o.opts.autoFocus && "image" != o.type && "iframe" !== o.type)) &&
            t.focus());
      },
      preload: function (t) {
        var e = this,
          n = e.slides[e.currPos + 1],
          o = e.slides[e.currPos - 1];
        n && n.type === t && e.loadSlide(n),
          o && o.type === t && e.loadSlide(o);
      },
      focus: function () {
        var t,
          e = this.current;
        this.isClosing ||
          (e &&
            e.isComplete &&
            ((t = e.$slide.find("input[autofocus]:enabled:visible:first")),
            t.length ||
              (t = e.$slide
                .find("button,:input,[tabindex],a")
                .filter(":enabled:visible:first"))),
          (t = t && t.length ? t : this.$refs.container),
          t.focus());
      },
      activate: function () {
        var t = this;
        n(".fancybox-container").each(function () {
          var e = n(this).data("FancyBox");
          e &&
            e.id !== t.id &&
            !e.isClosing &&
            (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
        }),
          (t.isVisible = !0),
          (t.current || t.isIdle) && (t.update(), t.updateControls()),
          t.trigger("onActivate"),
          t.addEvents();
      },
      close: function (t, e) {
        var o,
          i,
          a,
          s,
          r,
          c,
          l = this,
          p = l.current,
          h = function () {
            l.cleanUp(t);
          };
        return (
          !l.isClosing &&
          ((l.isClosing = !0),
          l.trigger("beforeClose", t) === !1
            ? ((l.isClosing = !1),
              u(function () {
                l.update();
              }),
              !1)
            : (l.removeEvents(),
              p.timouts && clearTimeout(p.timouts),
              (a = p.$content),
              (o = p.opts.animationEffect),
              (i = n.isNumeric(e) ? e : o ? p.opts.animationDuration : 0),
              p.$slide
                .off(d)
                .removeClass(
                  "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                ),
              p.$slide.siblings().trigger("onReset").remove(),
              i &&
                l.$refs.container
                  .removeClass("fancybox-is-open")
                  .addClass("fancybox-is-closing"),
              l.hideLoading(p),
              l.hideControls(),
              l.updateCursor(),
              "zoom" !== o ||
                (t !== !0 &&
                  a &&
                  i &&
                  "image" === p.type &&
                  !p.hasError &&
                  (c = l.getThumbPos(p))) ||
                (o = "fade"),
              "zoom" === o
                ? (n.fancybox.stop(a),
                  (r = n.fancybox.getTranslate(a)),
                  (r.width = r.width * r.scaleX),
                  (r.height = r.height * r.scaleY),
                  (s = p.opts.zoomOpacity),
                  "auto" == s &&
                    (s =
                      Math.abs(p.width / p.height - c.width / c.height) > 0.1),
                  s && (c.opacity = 0),
                  (r.scaleX = r.width / c.width),
                  (r.scaleY = r.height / c.height),
                  (r.width = c.width),
                  (r.height = c.height),
                  n.fancybox.setTranslate(p.$content, r),
                  f(p.$content),
                  n.fancybox.animate(p.$content, c, i, h),
                  !0)
                : (o && i
                    ? t === !0
                      ? setTimeout(h, i)
                      : n.fancybox.animate(
                          p.$slide.removeClass("fancybox-slide--current"),
                          "fancybox-animated fancybox-slide--previous fancybox-fx-" +
                            o,
                          i,
                          h
                        )
                    : h(),
                  !0)))
        );
      },
      cleanUp: function (t) {
        var o,
          i,
          a = this,
          r = n("body");
        a.current.$slide.trigger("onReset"),
          a.$refs.container.empty().remove(),
          a.trigger("afterClose", t),
          a.$lastFocus && a.current.opts.backFocus && a.$lastFocus.focus(),
          (a.current = null),
          (o = n.fancybox.getInstance()),
          o
            ? o.activate()
            : (s.scrollTop(a.scrollTop).scrollLeft(a.scrollLeft),
              r.removeClass("fancybox-active compensate-for-scrollbar"),
              r.hasClass("fancybox-iosfix") &&
                ((i = parseInt(e.body.style.top, 10)),
                r
                  .removeClass("fancybox-iosfix")
                  .css("top", "")
                  .scrollTop(i * -1)),
              n("#fancybox-style-noscroll").remove());
      },
      trigger: function (t, e) {
        var o,
          i = Array.prototype.slice.call(arguments, 1),
          a = this,
          s = e && e.opts ? e : a.current;
        return (
          s ? i.unshift(s) : (s = a),
          i.unshift(a),
          n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
          o === !1
            ? o
            : void ("afterClose" !== t && a.$refs
                ? a.$refs.container.trigger(t + ".fb", i)
                : r.trigger(t + ".fb", i))
        );
      },
      updateControls: function (t) {
        var e = this,
          n = e.current,
          o = n.index,
          i = n.opts.caption,
          a = e.$refs.container,
          s = e.$refs.caption;
        n.$slide.trigger("refresh"),
          (e.$caption = i && i.length ? s.html(i) : null),
          e.isHiddenControls || e.isIdle || e.showControls(),
          a.find("[data-fancybox-count]").html(e.group.length),
          a.find("[data-fancybox-index]").html(o + 1),
          a
            .find("[data-fancybox-prev]")
            .prop("disabled", !n.opts.loop && o <= 0),
          a
            .find("[data-fancybox-next]")
            .prop("disabled", !n.opts.loop && o >= e.group.length - 1),
          "image" === n.type
            ? a
                .find("[data-fancybox-download]")
                .attr("href", n.opts.image.src || n.src)
                .show()
            : a.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
      },
      hideControls: function () {
        (this.isHiddenControls = !0),
          this.$refs.container.removeClass(
            "fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav"
          );
      },
      showControls: function () {
        var t = this,
          e = t.current ? t.current.opts : t.opts,
          n = t.$refs.container;
        (t.isHiddenControls = !1),
          (t.idleSecondsCounter = 0),
          n
            .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
            .toggleClass(
              "fancybox-show-infobar",
              !!(e.infobar && t.group.length > 1)
            )
            .toggleClass(
              "fancybox-show-nav",
              !!(e.arrows && t.group.length > 1)
            )
            .toggleClass("fancybox-is-modal", !!e.modal),
          t.$caption
            ? n.addClass("fancybox-show-caption ")
            : n.removeClass("fancybox-show-caption");
      },
      toggleControls: function () {
        this.isHiddenControls ? this.showControls() : this.hideControls();
      },
    }),
      (n.fancybox = {
        version: "3.2.10",
        defaults: a,
        getInstance: function (t) {
          var e = n(
              '.fancybox-container:not(".fancybox-is-closing"):last'
            ).data("FancyBox"),
            o = Array.prototype.slice.call(arguments, 1);
          return (
            e instanceof p &&
            ("string" === n.type(t)
              ? e[t].apply(e, o)
              : "function" === n.type(t) && t.apply(e, o),
            e)
          );
        },
        open: function (t, e, n) {
          return new p(t, e, n);
        },
        close: function (t) {
          var e = this.getInstance();
          e && (e.close(), t === !0 && this.close());
        },
        destroy: function () {
          this.close(!0), r.off("click.fb-start");
        },
        isMobile:
          e.createTouch !== o &&
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ),
        use3d: (function () {
          var n = e.createElement("div");
          return (
            t.getComputedStyle &&
            t.getComputedStyle(n).getPropertyValue("transform") &&
            !(e.documentMode && e.documentMode < 11)
          );
        })(),
        getTranslate: function (t) {
          var e;
          if (!t || !t.length) return !1;
          if (
            ((e = t.eq(0).css("transform")),
            e && e.indexOf("matrix") !== -1
              ? ((e = e.split("(")[1]),
                (e = e.split(")")[0]),
                (e = e.split(",")))
              : (e = []),
            e.length)
          )
            (e =
              e.length > 10
                ? [e[13], e[12], e[0], e[5]]
                : [e[5], e[4], e[0], e[3]]),
              (e = e.map(parseFloat));
          else {
            e = [0, 0, 1, 1];
            var n = /\.*translate\((.*)px,(.*)px\)/i,
              o = n.exec(t.eq(0).attr("style"));
            o && ((e[0] = parseFloat(o[2])), (e[1] = parseFloat(o[1])));
          }
          return {
            top: e[0],
            left: e[1],
            scaleX: e[2],
            scaleY: e[3],
            opacity: parseFloat(t.css("opacity")),
            width: t.width(),
            height: t.height(),
          };
        },
        setTranslate: function (t, e) {
          var n = "",
            i = {};
          if (t && e)
            return (
              (e.left === o && e.top === o) ||
                ((n =
                  (e.left === o ? t.position().left : e.left) +
                  "px, " +
                  (e.top === o ? t.position().top : e.top) +
                  "px"),
                (n = this.use3d
                  ? "translate3d(" + n + ", 0px)"
                  : "translate(" + n + ")")),
              e.scaleX !== o &&
                e.scaleY !== o &&
                (n =
                  (n.length ? n + " " : "") +
                  "scale(" +
                  e.scaleX +
                  ", " +
                  e.scaleY +
                  ")"),
              n.length && (i.transform = n),
              e.opacity !== o && (i.opacity = e.opacity),
              e.width !== o && (i.width = e.width),
              e.height !== o && (i.height = e.height),
              t.css(i)
            );
        },
        animate: function (t, e, i, a, s) {
          n.isFunction(i) && ((a = i), (i = null)),
            n.isPlainObject(e) || t.removeAttr("style"),
            t.on(d, function (i) {
              (!i ||
                !i.originalEvent ||
                (t.is(i.originalEvent.target) &&
                  "z-index" != i.originalEvent.propertyName)) &&
                (n.fancybox.stop(t),
                n.isPlainObject(e)
                  ? (e.scaleX !== o &&
                      e.scaleY !== o &&
                      (t.css("transition-duration", ""),
                      (e.width = Math.round(t.width() * e.scaleX)),
                      (e.height = Math.round(t.height() * e.scaleY)),
                      (e.scaleX = 1),
                      (e.scaleY = 1),
                      n.fancybox.setTranslate(t, e)),
                    s === !1 && t.removeAttr("style"))
                  : s !== !0 && t.removeClass(e),
                n.isFunction(a) && a(i));
            }),
            n.isNumeric(i) && t.css("transition-duration", i + "ms"),
            n.isPlainObject(e) ? n.fancybox.setTranslate(t, e) : t.addClass(e),
            e.scaleX &&
              t.hasClass("fancybox-image-wrap") &&
              t.parent().addClass("fancybox-is-scaling"),
            t.data(
              "timer",
              setTimeout(function () {
                t.trigger("transitionend");
              }, i + 16)
            );
        },
        stop: function (t) {
          clearTimeout(t.data("timer")),
            t.off("transitionend").css("transition-duration", ""),
            t.hasClass("fancybox-image-wrap") &&
              t.parent().removeClass("fancybox-is-scaling");
        },
      }),
      (n.fn.fancybox = function (t) {
        var e;
        return (
          (t = t || {}),
          (e = t.selector || !1),
          e
            ? n("body")
                .off("click.fb-start", e)
                .on("click.fb-start", e, { options: t }, i)
            : this.off("click.fb-start").on(
                "click.fb-start",
                { items: this, options: t },
                i
              ),
          this
        );
      }),
      r.on("click.fb-start", "[data-fancybox]", i);
  }
})(window, document, window.jQuery || jQuery),
  (function (t) {
    "use strict";
    var e = function (e, n, o) {
        if (e)
          return (
            (o = o || ""),
            "object" === t.type(o) && (o = t.param(o, !0)),
            t.each(n, function (t, n) {
              e = e.replace("$" + t, n || "");
            }),
            o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
            e
          );
      },
      n = {
        youtube: {
          matcher:
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1,
          },
          paramPlace: 8,
          type: "iframe",
          url: "//www.youtube.com/embed/$4",
          thumb: "//img.youtube.com/vi/$4/hqdefault.jpg",
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
            api: 1,
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2",
        },
        metacafe: {
          matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
          type: "iframe",
          url: "//www.metacafe.com/embed/$1/?ap=1",
        },
        dailymotion: {
          matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
          params: { additionalInfos: 0, autoStart: 1 },
          type: "iframe",
          url: "//www.dailymotion.com/embed/video/$1",
        },
        vine: {
          matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
          type: "iframe",
          url: "//vine.co/v/$1/embed/simple",
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l",
        },
        gmap_place: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/?ll=" +
              (t[9]
                ? t[9] +
                  "&z=" +
                  Math.floor(t[10]) +
                  (t[12] ? t[12].replace(/^\//, "&") : "")
                : t[12]) +
              "&output=" +
              (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            );
          },
        },
        gmap_search: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/maps?q=" +
              t[5].replace("query=", "q=").replace("api=1", "") +
              "&output=embed"
            );
          },
        },
      };
    t(document).on("objectNeedsType.fb", function (o, i, a) {
      var s,
        r,
        c,
        l,
        u,
        d,
        f,
        p = a.src || "",
        h = !1;
      (s = t.extend(!0, {}, n, a.opts.media)),
        t.each(s, function (n, o) {
          if ((c = p.match(o.matcher))) {
            if (((h = o.type), (d = {}), o.paramPlace && c[o.paramPlace])) {
              (u = c[o.paramPlace]),
                "?" == u[0] && (u = u.substring(1)),
                (u = u.split("&"));
              for (var i = 0; i < u.length; ++i) {
                var s = u[i].split("=", 2);
                2 == s.length &&
                  (d[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
              }
            }
            return (
              (l = t.extend(!0, {}, o.params, a.opts[n], d)),
              (p =
                "function" === t.type(o.url)
                  ? o.url.call(this, c, l, a)
                  : e(o.url, c, l)),
              (r =
                "function" === t.type(o.thumb)
                  ? o.thumb.call(this, c, l, a)
                  : e(o.thumb, c)),
              "vimeo" === n && (p = p.replace("&%23", "#")),
              !1
            );
          }
        }),
        h
          ? ((a.src = p),
            (a.type = h),
            a.opts.thumb ||
              (a.opts.$thumb && a.opts.$thumb.length) ||
              (a.opts.thumb = r),
            "iframe" === h &&
              (t.extend(!0, a.opts, {
                iframe: { preload: !1, attr: { scrolling: "no" } },
              }),
              (a.contentProvider = f),
              (a.opts.slideClass +=
                " fancybox-slide--" +
                ("gmap_place" == f || "gmap_search" == f ? "map" : "video"))))
          : p && (a.type = a.opts.defaultType);
    });
  })(window.jQuery || jQuery),
  (function (t, e, n) {
    "use strict";
    var o = (function () {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60);
          }
        );
      })(),
      i = (function () {
        return (
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function (e) {
            t.clearTimeout(e);
          }
        );
      })(),
      a = function (e) {
        var n = [];
        (e = e.originalEvent || e || t.e),
          (e =
            e.touches && e.touches.length
              ? e.touches
              : e.changedTouches && e.changedTouches.length
              ? e.changedTouches
              : [e]);
        for (var o in e)
          e[o].pageX
            ? n.push({ x: e[o].pageX, y: e[o].pageY })
            : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
        return n;
      },
      s = function (t, e, n) {
        return e && t
          ? "x" === n
            ? t.x - e.x
            : "y" === n
            ? t.y - e.y
            : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          : 0;
      },
      r = function (t) {
        if (
          t.is(
            'a,area,button,[role="button"],input,label,select,summary,textarea'
          ) ||
          n.isFunction(t.get(0).onclick) ||
          t.data("selectable")
        )
          return !0;
        for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
          if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
        return !1;
      },
      c = function (e) {
        var n = t.getComputedStyle(e)["overflow-y"],
          o = t.getComputedStyle(e)["overflow-x"],
          i =
            ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
          a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
        return i || a;
      },
      l = function (t) {
        for (var e = !1; ; ) {
          if ((e = c(t.get(0)))) break;
          if (
            ((t = t.parent()),
            !t.length || t.hasClass("fancybox-stage") || t.is("body"))
          )
            break;
        }
        return e;
      },
      u = function (t) {
        var e = this;
        (e.instance = t),
          (e.$bg = t.$refs.bg),
          (e.$stage = t.$refs.stage),
          (e.$container = t.$refs.container),
          e.destroy(),
          e.$container.on(
            "touchstart.fb.touch mousedown.fb.touch",
            n.proxy(e, "ontouchstart")
          );
      };
    (u.prototype.destroy = function () {
      this.$container.off(".fb.touch");
    }),
      (u.prototype.ontouchstart = function (o) {
        var i = this,
          c = n(o.target),
          u = i.instance,
          d = u.current,
          f = d.$content,
          p = "touchstart" == o.type;
        if (
          (p && i.$container.off("mousedown.fb.touch"),
          (!o.originalEvent || 2 != o.originalEvent.button) &&
            c.length &&
            !r(c) &&
            !r(c.parent()) &&
            (c.is("img") ||
              !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left)))
        ) {
          if (!d || i.instance.isAnimating || i.instance.isClosing)
            return o.stopPropagation(), void o.preventDefault();
          if (((i.realPoints = i.startPoints = a(o)), i.startPoints)) {
            if (
              (o.stopPropagation(),
              (i.startEvent = o),
              (i.canTap = !0),
              (i.$target = c),
              (i.$content = f),
              (i.opts = d.opts.touch),
              (i.isPanning = !1),
              (i.isSwiping = !1),
              (i.isZooming = !1),
              (i.isScrolling = !1),
              (i.sliderStartPos = i.sliderLastPos || { top: 0, left: 0 }),
              (i.contentStartPos = n.fancybox.getTranslate(i.$content)),
              (i.contentLastPos = null),
              (i.startTime = new Date().getTime()),
              (i.distanceX = i.distanceY = i.distance = 0),
              (i.canvasWidth = Math.round(d.$slide[0].clientWidth)),
              (i.canvasHeight = Math.round(d.$slide[0].clientHeight)),
              n(e)
                .off(".fb.touch")
                .on(
                  p
                    ? "touchend.fb.touch touchcancel.fb.touch"
                    : "mouseup.fb.touch mouseleave.fb.touch",
                  n.proxy(i, "ontouchend")
                )
                .on(
                  p ? "touchmove.fb.touch" : "mousemove.fb.touch",
                  n.proxy(i, "ontouchmove")
                ),
              n.fancybox.isMobile &&
                e.addEventListener("scroll", i.onscroll, !0),
              (!i.opts && !u.canPan()) ||
                (!c.is(i.$stage) && !i.$stage.find(c).length))
            )
              return void (c.is("img") && o.preventDefault());
            (n.fancybox.isMobile && (l(c) || l(c.parent()))) ||
              o.preventDefault(),
              1 === i.startPoints.length &&
                ("image" === d.type &&
                (i.contentStartPos.width > i.canvasWidth + 1 ||
                  i.contentStartPos.height > i.canvasHeight + 1)
                  ? (n.fancybox.stop(i.$content),
                    i.$content.css("transition-duration", ""),
                    (i.isPanning = !0))
                  : (i.isSwiping = !0),
                i.$container.addClass("fancybox-controls--isGrabbing")),
              2 !== i.startPoints.length ||
                u.isAnimating ||
                d.hasError ||
                "image" !== d.type ||
                (!d.isLoaded && !d.$ghost) ||
                ((i.canTap = !1),
                (i.isSwiping = !1),
                (i.isPanning = !1),
                (i.isZooming = !0),
                n.fancybox.stop(i.$content),
                i.$content.css("transition-duration", ""),
                (i.centerPointStartX =
                  0.5 * (i.startPoints[0].x + i.startPoints[1].x) -
                  n(t).scrollLeft()),
                (i.centerPointStartY =
                  0.5 * (i.startPoints[0].y + i.startPoints[1].y) -
                  n(t).scrollTop()),
                (i.percentageOfImageAtPinchPointX =
                  (i.centerPointStartX - i.contentStartPos.left) /
                  i.contentStartPos.width),
                (i.percentageOfImageAtPinchPointY =
                  (i.centerPointStartY - i.contentStartPos.top) /
                  i.contentStartPos.height),
                (i.startDistanceBetweenFingers = s(
                  i.startPoints[0],
                  i.startPoints[1]
                )));
          }
        }
      }),
      (u.prototype.onscroll = function (t) {
        self.isScrolling = !0;
      }),
      (u.prototype.ontouchmove = function (t) {
        var e = this,
          o = n(t.target);
        return e.isScrolling || (!o.is(e.$stage) && !e.$stage.find(o).length)
          ? void (e.canTap = !1)
          : ((e.newPoints = a(t)),
            void (
              (e.opts || e.instance.canPan()) &&
              e.newPoints &&
              e.newPoints.length &&
              ((e.isSwiping && e.isSwiping === !0) || t.preventDefault(),
              (e.distanceX = s(e.newPoints[0], e.startPoints[0], "x")),
              (e.distanceY = s(e.newPoints[0], e.startPoints[0], "y")),
              (e.distance = s(e.newPoints[0], e.startPoints[0])),
              e.distance > 0 &&
                (e.isSwiping
                  ? e.onSwipe(t)
                  : e.isPanning
                  ? e.onPan()
                  : e.isZooming && e.onZoom()))
            ));
      }),
      (u.prototype.onSwipe = function (e) {
        var a,
          s = this,
          r = s.isSwiping,
          c = s.sliderStartPos.left || 0;
        if (r !== !0)
          "x" == r &&
            (s.distanceX > 0 &&
            (s.instance.group.length < 2 ||
              (0 === s.instance.current.index && !s.instance.current.opts.loop))
              ? (c += Math.pow(s.distanceX, 0.8))
              : s.distanceX < 0 &&
                (s.instance.group.length < 2 ||
                  (s.instance.current.index === s.instance.group.length - 1 &&
                    !s.instance.current.opts.loop))
              ? (c -= Math.pow(-s.distanceX, 0.8))
              : (c += s.distanceX)),
            (s.sliderLastPos = {
              top: "x" == r ? 0 : s.sliderStartPos.top + s.distanceY,
              left: c,
            }),
            s.requestId && (i(s.requestId), (s.requestId = null)),
            (s.requestId = o(function () {
              s.sliderLastPos &&
                (n.each(s.instance.slides, function (t, e) {
                  var o = e.pos - s.instance.currPos;
                  n.fancybox.setTranslate(e.$slide, {
                    top: s.sliderLastPos.top,
                    left:
                      s.sliderLastPos.left +
                      o * s.canvasWidth +
                      o * e.opts.gutter,
                  });
                }),
                s.$container.addClass("fancybox-is-sliding"));
            }));
        else if (Math.abs(s.distance) > 10) {
          if (
            ((s.canTap = !1),
            s.instance.group.length < 2 && s.opts.vertical
              ? (s.isSwiping = "y")
              : s.instance.isDragging ||
                s.opts.vertical === !1 ||
                ("auto" === s.opts.vertical && n(t).width() > 800)
              ? (s.isSwiping = "x")
              : ((a = Math.abs(
                  (180 * Math.atan2(s.distanceY, s.distanceX)) / Math.PI
                )),
                (s.isSwiping = a > 45 && a < 135 ? "y" : "x")),
            (s.canTap = !1),
            "y" === s.isSwiping &&
              n.fancybox.isMobile &&
              (l(s.$target) || l(s.$target.parent())))
          )
            return void (s.isScrolling = !0);
          (s.instance.isDragging = s.isSwiping),
            (s.startPoints = s.newPoints),
            n.each(s.instance.slides, function (t, e) {
              n.fancybox.stop(e.$slide),
                e.$slide.css("transition-duration", ""),
                (e.inTransition = !1),
                e.pos === s.instance.current.pos &&
                  (s.sliderStartPos.left = n.fancybox.getTranslate(
                    e.$slide
                  ).left);
            }),
            s.instance.SlideShow &&
              s.instance.SlideShow.isActive &&
              s.instance.SlideShow.stop();
        }
      }),
      (u.prototype.onPan = function () {
        var t = this;
        return s(t.newPoints[0], t.realPoints[0]) <
          (n.fancybox.isMobile ? 10 : 5)
          ? void (t.startPoints = t.newPoints)
          : ((t.canTap = !1),
            (t.contentLastPos = t.limitMovement()),
            t.requestId && (i(t.requestId), (t.requestId = null)),
            void (t.requestId = o(function () {
              n.fancybox.setTranslate(t.$content, t.contentLastPos);
            })));
      }),
      (u.prototype.limitMovement = function () {
        var t,
          e,
          n,
          o,
          i,
          a,
          s = this,
          r = s.canvasWidth,
          c = s.canvasHeight,
          l = s.distanceX,
          u = s.distanceY,
          d = s.contentStartPos,
          f = d.left,
          p = d.top,
          h = d.width,
          g = d.height;
        return (
          (i = h > r ? f + l : f),
          (a = p + u),
          (t = Math.max(0, 0.5 * r - 0.5 * h)),
          (e = Math.max(0, 0.5 * c - 0.5 * g)),
          (n = Math.min(r - h, 0.5 * r - 0.5 * h)),
          (o = Math.min(c - g, 0.5 * c - 0.5 * g)),
          h > r &&
            (l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, 0.8) || 0),
            l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, 0.8) || 0)),
          g > c &&
            (u > 0 && a > e && (a = e - 1 + Math.pow(-e + p + u, 0.8) || 0),
            u < 0 && a < o && (a = o + 1 - Math.pow(o - p - u, 0.8) || 0)),
          { top: a, left: i, scaleX: d.scaleX, scaleY: d.scaleY }
        );
      }),
      (u.prototype.limitPosition = function (t, e, n, o) {
        var i = this,
          a = i.canvasWidth,
          s = i.canvasHeight;
        return (
          n > a
            ? ((t = t > 0 ? 0 : t), (t = t < a - n ? a - n : t))
            : (t = Math.max(0, a / 2 - n / 2)),
          o > s
            ? ((e = e > 0 ? 0 : e), (e = e < s - o ? s - o : e))
            : (e = Math.max(0, s / 2 - o / 2)),
          { top: e, left: t }
        );
      }),
      (u.prototype.onZoom = function () {
        var e = this,
          a = e.contentStartPos.width,
          r = e.contentStartPos.height,
          c = e.contentStartPos.left,
          l = e.contentStartPos.top,
          u = s(e.newPoints[0], e.newPoints[1]),
          d = u / e.startDistanceBetweenFingers,
          f = Math.floor(a * d),
          p = Math.floor(r * d),
          h = (a - f) * e.percentageOfImageAtPinchPointX,
          g = (r - p) * e.percentageOfImageAtPinchPointY,
          b = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
          m = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
          y = b - e.centerPointStartX,
          v = m - e.centerPointStartY,
          x = c + (h + y),
          w = l + (g + v),
          $ = {
            top: w,
            left: x,
            scaleX: e.contentStartPos.scaleX * d,
            scaleY: e.contentStartPos.scaleY * d,
          };
        (e.canTap = !1),
          (e.newWidth = f),
          (e.newHeight = p),
          (e.contentLastPos = $),
          e.requestId && (i(e.requestId), (e.requestId = null)),
          (e.requestId = o(function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos);
          }));
      }),
      (u.prototype.ontouchend = function (t) {
        var o = this,
          s = Math.max(new Date().getTime() - o.startTime, 1),
          r = o.isSwiping,
          c = o.isPanning,
          l = o.isZooming,
          u = o.isScrolling;
        return (
          (o.endPoints = a(t)),
          o.$container.removeClass("fancybox-controls--isGrabbing"),
          n(e).off(".fb.touch"),
          e.removeEventListener("scroll", o.onscroll, !0),
          o.requestId && (i(o.requestId), (o.requestId = null)),
          (o.isSwiping = !1),
          (o.isPanning = !1),
          (o.isZooming = !1),
          (o.isScrolling = !1),
          (o.instance.isDragging = !1),
          o.canTap
            ? o.onTap(t)
            : ((o.speed = 366),
              (o.velocityX = (o.distanceX / s) * 0.5),
              (o.velocityY = (o.distanceY / s) * 0.5),
              (o.speedX = Math.max(
                0.5 * o.speed,
                Math.min(1.5 * o.speed, (1 / Math.abs(o.velocityX)) * o.speed)
              )),
              void (c
                ? o.endPanning()
                : l
                ? o.endZooming()
                : o.endSwiping(r, u)))
        );
      }),
      (u.prototype.endSwiping = function (t, e) {
        var o = this,
          i = !1,
          a = o.instance.group.length;
        (o.sliderLastPos = null),
          "y" == t && !e && Math.abs(o.distanceY) > 50
            ? (n.fancybox.animate(
                o.instance.current.$slide,
                {
                  top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
                  opacity: 0,
                },
                150
              ),
              (i = o.instance.close(!0, 300)))
            : "x" == t && o.distanceX > 50 && a > 1
            ? (i = o.instance.previous(o.speedX))
            : "x" == t &&
              o.distanceX < -50 &&
              a > 1 &&
              (i = o.instance.next(o.speedX)),
          i !== !1 ||
            ("x" != t && "y" != t) ||
            (e || a < 2
              ? o.instance.centerSlide(o.instance.current, 150)
              : o.instance.jumpTo(o.instance.current.index)),
          o.$container.removeClass("fancybox-is-sliding");
      }),
      (u.prototype.endPanning = function () {
        var t,
          e,
          o,
          i = this;
        i.contentLastPos &&
          (i.opts.momentum === !1
            ? ((t = i.contentLastPos.left), (e = i.contentLastPos.top))
            : ((t = i.contentLastPos.left + i.velocityX * i.speed),
              (e = i.contentLastPos.top + i.velocityY * i.speed)),
          (o = i.limitPosition(
            t,
            e,
            i.contentStartPos.width,
            i.contentStartPos.height
          )),
          (o.width = i.contentStartPos.width),
          (o.height = i.contentStartPos.height),
          n.fancybox.animate(i.$content, o, 330));
      }),
      (u.prototype.endZooming = function () {
        var t,
          e,
          o,
          i,
          a = this,
          s = a.instance.current,
          r = a.newWidth,
          c = a.newHeight;
        a.contentLastPos &&
          ((t = a.contentLastPos.left),
          (e = a.contentLastPos.top),
          (i = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }),
          n.fancybox.setTranslate(a.$content, i),
          r < a.canvasWidth && c < a.canvasHeight
            ? a.instance.scaleToFit(150)
            : r > s.width || c > s.height
            ? a.instance.scaleToActual(
                a.centerPointStartX,
                a.centerPointStartY,
                150
              )
            : ((o = a.limitPosition(t, e, r, c)),
              n.fancybox.setTranslate(
                a.content,
                n.fancybox.getTranslate(a.$content)
              ),
              n.fancybox.animate(a.$content, o, 150)));
      }),
      (u.prototype.onTap = function (t) {
        var e,
          o = this,
          i = n(t.target),
          s = o.instance,
          r = s.current,
          c = (t && a(t)) || o.startPoints,
          l = c[0] ? c[0].x - o.$stage.offset().left : 0,
          u = c[0] ? c[0].y - o.$stage.offset().top : 0,
          d = function (e) {
            var i = r.opts[e];
            if ((n.isFunction(i) && (i = i.apply(s, [r, t])), i))
              switch (i) {
                case "close":
                  s.close(o.startEvent);
                  break;
                case "toggleControls":
                  s.toggleControls(!0);
                  break;
                case "next":
                  s.next();
                  break;
                case "nextOrClose":
                  s.group.length > 1 ? s.next() : s.close(o.startEvent);
                  break;
                case "zoom":
                  "image" == r.type &&
                    (r.isLoaded || r.$ghost) &&
                    (s.canPan()
                      ? s.scaleToFit()
                      : s.isScaledDown()
                      ? s.scaleToActual(l, u)
                      : s.group.length < 2 && s.close(o.startEvent));
              }
          };
        if (
          (!t.originalEvent || 2 != t.originalEvent.button) &&
          (i.is("img") || !(l > i[0].clientWidth + i.offset().left))
        ) {
          if (
            i.is(
              ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
            )
          )
            e = "Outside";
          else if (i.is(".fancybox-slide")) e = "Slide";
          else {
            if (
              !s.current.$content ||
              !s.current.$content.find(i).addBack().filter(i).length
            )
              return;
            e = "Content";
          }
          if (o.tapped) {
            if (
              (clearTimeout(o.tapped),
              (o.tapped = null),
              Math.abs(l - o.tapX) > 50 || Math.abs(u - o.tapY) > 50)
            )
              return this;
            d("dblclick" + e);
          } else
            (o.tapX = l),
              (o.tapY = u),
              r.opts["dblclick" + e] &&
              r.opts["dblclick" + e] !== r.opts["click" + e]
                ? (o.tapped = setTimeout(function () {
                    (o.tapped = null), d("click" + e);
                  }, 500))
                : d("click" + e);
          return this;
        }
      }),
      n(e).on("onActivate.fb", function (t, e) {
        e && !e.Guestures && (e.Guestures = new u(e));
      });
  })(window, document, window.jQuery || jQuery),
  (function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>',
      },
      slideShow: { autoStart: !1, speed: 3e3 },
    });
    var n = function (t) {
      (this.instance = t), this.init();
    };
    e.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function () {
        var t = this;
        (t.$button = t.instance.$refs.toolbar
          .find("[data-fancybox-play]")
          .on("click", function () {
            t.toggle();
          })),
          (t.instance.group.length < 2 ||
            !t.instance.group[t.instance.currIndex].opts.slideShow) &&
            t.$button.hide();
      },
      set: function (t) {
        var e = this;
        e.instance &&
        e.instance.current &&
        (t === !0 ||
          e.instance.current.opts.loop ||
          e.instance.currIndex < e.instance.group.length - 1)
          ? (e.timer = setTimeout(function () {
              e.isActive &&
                e.instance.jumpTo(
                  (e.instance.currIndex + 1) % e.instance.group.length
                );
            }, e.instance.current.opts.slideShow.speed))
          : (e.stop(),
            (e.instance.idleSecondsCounter = 0),
            e.instance.showControls());
      },
      clear: function () {
        var t = this;
        clearTimeout(t.timer), (t.timer = null);
      },
      start: function () {
        var t = this,
          e = t.instance.current;
        e &&
          ((t.isActive = !0),
          t.$button
            .attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP)
            .removeClass("fancybox-button--play")
            .addClass("fancybox-button--pause"),
          t.set(!0));
      },
      stop: function () {
        var t = this,
          e = t.instance.current;
        t.clear(),
          t.$button
            .attr("title", e.opts.i18n[e.opts.lang].PLAY_START)
            .removeClass("fancybox-button--pause")
            .addClass("fancybox-button--play"),
          (t.isActive = !1);
      },
      toggle: function () {
        var t = this;
        t.isActive ? t.stop() : t.start();
      },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e));
        },
        "beforeShow.fb": function (t, e, n, o) {
          var i = e && e.SlideShow;
          o
            ? i && n.opts.slideShow.autoStart && i.start()
            : i && i.isActive && i.clear();
        },
        "afterShow.fb": function (t, e, n) {
          var o = e && e.SlideShow;
          o && o.isActive && o.set();
        },
        "afterKeydown.fb": function (n, o, i, a, s) {
          var r = o && o.SlideShow;
          !r ||
            !i.opts.slideShow ||
            (80 !== s && 32 !== s) ||
            e(t.activeElement).is("button,a,input") ||
            (a.preventDefault(), r.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function (t, e) {
          var n = e && e.SlideShow;
          n && n.stop();
        },
      }),
      e(t).on("visibilitychange", function () {
        var n = e.fancybox.getInstance(),
          o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set());
      });
  })(document, window.jQuery || jQuery),
  (function (t, e) {
    "use strict";
    var n = (function () {
      var e,
        n,
        o,
        i = [
          [
            "requestFullscreen",
            "exitFullscreen",
            "fullscreenElement",
            "fullscreenEnabled",
            "fullscreenchange",
            "fullscreenerror",
          ],
          [
            "webkitRequestFullscreen",
            "webkitExitFullscreen",
            "webkitFullscreenElement",
            "webkitFullscreenEnabled",
            "webkitfullscreenchange",
            "webkitfullscreenerror",
          ],
          [
            "webkitRequestFullScreen",
            "webkitCancelFullScreen",
            "webkitCurrentFullScreenElement",
            "webkitCancelFullScreen",
            "webkitfullscreenchange",
            "webkitfullscreenerror",
          ],
          [
            "mozRequestFullScreen",
            "mozCancelFullScreen",
            "mozFullScreenElement",
            "mozFullScreenEnabled",
            "mozfullscreenchange",
            "mozfullscreenerror",
          ],
          [
            "msRequestFullscreen",
            "msExitFullscreen",
            "msFullscreenElement",
            "msFullscreenEnabled",
            "MSFullscreenChange",
            "MSFullscreenError",
          ],
        ],
        a = {};
      for (n = 0; n < i.length; n++)
        if (((e = i[n]), e && e[1] in t)) {
          for (o = 0; o < e.length; o++) a[i[0][o]] = e[o];
          return a;
        }
      return !1;
    })();
    if (!n)
      return void (
        e &&
        e.fancybox &&
        (e.fancybox.defaults.btnTpl.fullScreen = !1)
      );
    var o = {
      request: function (e) {
        (e = e || t.documentElement),
          e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
      },
      exit: function () {
        t[n.exitFullscreen]();
      },
      toggle: function (e) {
        (e = e || t.documentElement),
          this.isFullscreen() ? this.exit() : this.request(e);
      },
      isFullscreen: function () {
        return Boolean(t[n.fullscreenElement]);
      },
      enabled: function () {
        return Boolean(t[n.fullscreenEnabled]);
      },
    };
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        fullScreen:
          '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>',
      },
      fullScreen: { autoStart: !1 },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          var n;
          e && e.group[e.currIndex].opts.fullScreen
            ? ((n = e.$refs.container),
              n.on(
                "click.fb-fullscreen",
                "[data-fancybox-fullscreen]",
                function (t) {
                  t.stopPropagation(), t.preventDefault(), o.toggle(n[0]);
                }
              ),
              e.opts.fullScreen &&
                e.opts.fullScreen.autoStart === !0 &&
                o.request(n[0]),
              (e.FullScreen = o))
            : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
          e &&
            e.FullScreen &&
            70 === i &&
            (o.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]));
        },
        "beforeClose.fb": function (t) {
          t && t.FullScreen && o.exit();
        },
      }),
      e(t).on(n.fullscreenchange, function () {
        var t = o.isFullscreen(),
          n = e.fancybox.getInstance();
        n &&
          (n.current &&
            "image" === n.current.type &&
            n.isAnimating &&
            (n.current.$content.css("transition", "none"),
            (n.isAnimating = !1),
            n.update(!0, !0, 0)),
          n.trigger("onFullscreenChange", t),
          n.$refs.container.toggleClass("fancybox-is-fullscreen", t));
      });
  })(document, window.jQuery || jQuery),
  (function (t, e) {
    "use strict";
    e.fancybox.defaults = e.extend(
      !0,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>',
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y",
        },
      },
      e.fancybox.defaults
    );
    var n = function (t) {
      this.init(t);
    };
    e.extend(n.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function (t) {
        var e = this;
        (e.instance = t), (t.Thumbs = e);
        var n = t.group[0],
          o = t.group[1];
        (e.opts = t.group[t.currIndex].opts.thumbs),
          (e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]")),
          e.opts &&
          n &&
          o &&
          ("image" == n.type || n.opts.thumb || n.opts.$thumb) &&
          ("image" == o.type || o.opts.thumb || o.opts.$thumb)
            ? (e.$button.show().on("click", function () {
                e.toggle();
              }),
              (e.isActive = !0))
            : e.$button.hide();
      },
      create: function () {
        var t,
          n,
          o = this,
          i = o.instance,
          a = o.opts.parentEl;
        (o.$grid = e(
          '<div class="fancybox-thumbs fancybox-thumbs-' +
            o.opts.axis +
            '"></div>'
        ).appendTo(i.$refs.container.find(a).addBack().filter(a))),
          (t = "<ul>"),
          e.each(i.group, function (e, o) {
            (n =
              o.opts.thumb ||
              (o.opts.$thumb ? o.opts.$thumb.attr("src") : null)),
              n || "image" !== o.type || (n = o.src),
              n &&
                n.length &&
                (t +=
                  '<li data-index="' +
                  e +
                  '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' +
                  n +
                  '" /></li>');
          }),
          (t += "</ul>"),
          (o.$list = e(t)
            .appendTo(o.$grid)
            .on("click", "li", function () {
              i.jumpTo(e(this).data("index"));
            })),
          o.$list
            .find("img")
            .hide()
            .one("load", function () {
              var t,
                n,
                o,
                i,
                a = e(this).parent().removeClass("fancybox-thumbs-loading"),
                s = a.outerWidth(),
                r = a.outerHeight();
              (t = this.naturalWidth || this.width),
                (n = this.naturalHeight || this.height),
                (o = t / s),
                (i = n / r),
                o >= 1 &&
                  i >= 1 &&
                  (o > i ? ((t /= i), (n = r)) : ((t = s), (n /= o))),
                e(this)
                  .css({
                    width: Math.floor(t),
                    height: Math.floor(n),
                    "margin-top":
                      n > r
                        ? Math.floor(0.3 * r - 0.3 * n)
                        : Math.floor(0.5 * r - 0.5 * n),
                    "margin-left": Math.floor(0.5 * s - 0.5 * t),
                  })
                  .show();
            })
            .each(function () {
              this.src = e(this).data("src");
            }),
          "x" === o.opts.axis &&
            o.$list.width(
              parseInt(o.$grid.css("padding-right")) +
                i.group.length * o.$list.children().eq(0).outerWidth(!0) +
                "px"
            );
      },
      focus: function (t) {
        var e,
          n,
          o = this,
          i = o.$list;
        o.instance.current &&
          ((e = i
            .children()
            .removeClass("fancybox-thumbs-active")
            .filter('[data-index="' + o.instance.current.index + '"]')
            .addClass("fancybox-thumbs-active")),
          (n = e.position()),
          "y" === o.opts.axis &&
          (n.top < 0 || n.top > i.height() - e.outerHeight())
            ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, t)
            : "x" === o.opts.axis &&
              (n.left < i.parent().scrollLeft() ||
                n.left >
                  i.parent().scrollLeft() +
                    (i.parent().width() - e.outerWidth())) &&
              i.parent().stop().animate({ scrollLeft: n.left }, t));
      },
      update: function () {
        this.instance.$refs.container.toggleClass(
          "fancybox-show-thumbs",
          this.isVisible
        ),
          this.isVisible
            ? (this.$grid || this.create(),
              this.instance.trigger("onThumbsShow"),
              this.focus(0))
            : this.$grid && this.instance.trigger("onThumbsHide"),
          this.instance.update();
      },
      hide: function () {
        (this.isVisible = !1), this.update();
      },
      show: function () {
        (this.isVisible = !0), this.update();
      },
      toggle: function () {
        (this.isVisible = !this.isVisible), this.update();
      },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          var o;
          e &&
            !e.Thumbs &&
            ((o = new n(e)), o.isActive && o.opts.autoStart === !0 && o.show());
        },
        "beforeShow.fb": function (t, e, n, o) {
          var i = e && e.Thumbs;
          i && i.isVisible && i.focus(o ? 0 : 250);
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
          var a = e && e.Thumbs;
          a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
        },
        "beforeClose.fb": function (t, e) {
          var n = e && e.Thumbs;
          n && n.isVisible && n.opts.hideOnClose !== !1 && n.$grid.hide();
        },
      });
  })(document, window.jQuery),
  (function (t, e) {
    "use strict";
    function n(t) {
      var e = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;",
      };
      return String(t).replace(/[&<>"'`=\/]/g, function (t) {
        return e[t];
      });
    }
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>',
      },
      share: {
        tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p class="fancybox-share__links"><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>',
      },
    }),
      e(t).on("click", "[data-fancybox-share]", function () {
        var t,
          o,
          i = e.fancybox.getInstance();
        i &&
          ((t = i.current.opts.hash === !1 ? i.current.src : window.location),
          (o = i.current.opts.share.tpl
            .replace(
              /\{\{media\}\}/g,
              "image" === i.current.type
                ? encodeURIComponent(i.current.src)
                : ""
            )
            .replace(/\{\{url\}\}/g, encodeURIComponent(t))
            .replace(/\{\{url_raw\}\}/g, n(t))
            .replace(
              /\{\{descr\}\}/g,
              i.$caption ? encodeURIComponent(i.$caption.text()) : ""
            )),
          e.fancybox.open({
            src: i.translate(i, o),
            type: "html",
            opts: {
              animationEffect: "fade",
              animationDuration: 250,
              afterLoad: function (t, e) {
                e.$content.find(".fancybox-share__links a").click(function () {
                  return (
                    window.open(this.href, "Share", "width=550, height=450"), !1
                  );
                });
              },
            },
          }));
      });
  })(document, window.jQuery || jQuery),
  (function (t, e, n) {
    "use strict";
    function o() {
      var t = e.location.hash.substr(1),
        n = t.split("-"),
        o =
          n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
            ? parseInt(n.pop(-1), 10) || 1
            : 1,
        i = n.join("-");
      return o < 1 && (o = 1), { hash: t, index: o, gallery: i };
    }
    function i(t) {
      var e;
      "" !== t.gallery &&
        ((e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(
          t.index - 1
        )),
        e.length || (e = n("#" + n.escapeSelector(t.gallery))),
        e.length && ((s = !1), e.trigger("click")));
    }
    function a(t) {
      var e;
      return (
        !!t &&
        ((e = t.current ? t.current.opts : t.opts),
        e.hash || (e.$orig ? e.$orig.data("fancybox") : ""))
      );
    }
    n.escapeSelector ||
      (n.escapeSelector = function (t) {
        var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          n = function (t, e) {
            return e
              ? "\0" === t
                ? "�"
                : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
              : "\\" + t;
          };
        return (t + "").replace(e, n);
      });
    var s = !0,
      r = null,
      c = null;
    n(function () {
      n.fancybox.defaults.hash !== !1 &&
        (n(t).on({
          "onInit.fb": function (t, e) {
            var n, i;
            e.group[e.currIndex].opts.hash !== !1 &&
              ((n = o()),
              (i = a(e)),
              i && n.gallery && i == n.gallery && (e.currIndex = n.index - 1));
          },
          "beforeShow.fb": function (n, o, i) {
            var l;
            i &&
              i.opts.hash !== !1 &&
              ((l = a(o)),
              l &&
                "" !== l &&
                (e.location.hash.indexOf(l) < 0 &&
                  (o.opts.origHash = e.location.hash),
                (r = l + (o.group.length > 1 ? "-" + (i.index + 1) : "")),
                "replaceState" in e.history
                  ? (c && clearTimeout(c),
                    (c = setTimeout(function () {
                      e.history[s ? "pushState" : "replaceState"](
                        {},
                        t.title,
                        e.location.pathname + e.location.search + "#" + r
                      ),
                        (c = null),
                        (s = !1);
                    }, 300)))
                  : (e.location.hash = r)));
          },
          "beforeClose.fb": function (o, i, s) {
            var l, u;
            c && clearTimeout(c),
              s.opts.hash !== !1 &&
                ((l = a(i)),
                (u = i && i.opts.origHash ? i.opts.origHash : ""),
                l &&
                  "" !== l &&
                  ("replaceState" in history
                    ? e.history.replaceState(
                        {},
                        t.title,
                        e.location.pathname + e.location.search + u
                      )
                    : ((e.location.hash = u),
                      n(e).scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))),
                (r = null));
          },
        }),
        n(e).on("hashchange.fb", function () {
          var t = o();
          n.fancybox.getInstance()
            ? !r ||
              r === t.gallery + "-" + t.index ||
              (1 === t.index && r == t.gallery) ||
              ((r = null), n.fancybox.close())
            : "" !== t.gallery && i(t);
        }),
        setTimeout(function () {
          i(o());
        }, 50));
    });
  })(document, window, window.jQuery || jQuery),
  (function (t, e) {
    "use strict";
    var n = new Date().getTime();
    e(t).on({
      "onInit.fb": function (t, e, o) {
        e.$refs.stage.on(
          "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
          function (t) {
            var o = e.current,
              i = new Date().getTime();
            e.group.length < 1 ||
              o.opts.wheel === !1 ||
              ("auto" === o.opts.wheel && "image" !== o.type) ||
              (t.preventDefault(),
              t.stopPropagation(),
              o.$slide.hasClass("fancybox-animated") ||
                ((t = t.originalEvent || t),
                i - n < 250 ||
                  ((n = i),
                  e[
                    (-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0
                      ? "next"
                      : "previous"
                  ]())));
          }
        );
      },
    });
  })(document, window.jQuery || jQuery);
/*
 * jquery-match-height 0.7.2 by @liabru
 * http://brm.io/jquery-match-height/
 * License MIT
 */
!(function (t) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : "undefined" != typeof module && module.exports
    ? (module.exports = t(require("jquery")))
    : t(jQuery);
})(function (t) {
  var e = -1,
    o = -1,
    n = function (t) {
      return parseFloat(t) || 0;
    },
    a = function (e) {
      var o = 1,
        a = t(e),
        i = null,
        r = [];
      return (
        a.each(function () {
          var e = t(this),
            a = e.offset().top - n(e.css("margin-top")),
            s = r.length > 0 ? r[r.length - 1] : null;
          null === s
            ? r.push(e)
            : Math.floor(Math.abs(i - a)) <= o
            ? (r[r.length - 1] = s.add(e))
            : r.push(e),
            (i = a);
        }),
        r
      );
    },
    i = function (e) {
      var o = {
        byRow: !0,
        property: "height",
        target: null,
        remove: !1,
      };
      return "object" == typeof e
        ? t.extend(o, e)
        : ("boolean" == typeof e
            ? (o.byRow = e)
            : "remove" === e && (o.remove = !0),
          o);
    },
    r = (t.fn.matchHeight = function (e) {
      var o = i(e);
      if (o.remove) {
        var n = this;
        return (
          this.css(o.property, ""),
          t.each(r._groups, function (t, e) {
            e.elements = e.elements.not(n);
          }),
          this
        );
      }
      return this.length <= 1 && !o.target
        ? this
        : (r._groups.push({ elements: this, options: o }),
          r._apply(this, o),
          this);
    });
  (r.version = "0.7.2"),
    (r._groups = []),
    (r._throttle = 80),
    (r._maintainScroll = !1),
    (r._beforeUpdate = null),
    (r._afterUpdate = null),
    (r._rows = a),
    (r._parse = n),
    (r._parseOptions = i),
    (r._apply = function (e, o) {
      var s = i(o),
        h = t(e),
        l = [h],
        c = t(window).scrollTop(),
        p = t("html").outerHeight(!0),
        u = h.parents().filter(":hidden");
      return (
        u.each(function () {
          var e = t(this);
          e.data("style-cache", e.attr("style"));
        }),
        u.css("display", "block"),
        s.byRow &&
          !s.target &&
          (h.each(function () {
            var e = t(this),
              o = e.css("display");
            "inline-block" !== o &&
              "flex" !== o &&
              "inline-flex" !== o &&
              (o = "block"),
              e.data("style-cache", e.attr("style")),
              e.css({
                display: o,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden",
              });
          }),
          (l = a(h)),
          h.each(function () {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "");
          })),
        t.each(l, function (e, o) {
          var a = t(o),
            i = 0;
          if (s.target) i = s.target.outerHeight(!1);
          else {
            if (s.byRow && a.length <= 1) return void a.css(s.property, "");
            a.each(function () {
              var e = t(this),
                o = e.attr("style"),
                n = e.css("display");
              "inline-block" !== n &&
                "flex" !== n &&
                "inline-flex" !== n &&
                (n = "block");
              var a = {
                display: n,
              };
              (a[s.property] = ""),
                e.css(a),
                e.outerHeight(!1) > i && (i = e.outerHeight(!1)),
                o ? e.attr("style", o) : e.css("display", "");
            });
          }
          a.each(function () {
            var e = t(this),
              o = 0;
            (s.target && e.is(s.target)) ||
              ("border-box" !== e.css("box-sizing") &&
                ((o +=
                  n(e.css("border-top-width")) +
                  n(e.css("border-bottom-width"))),
                (o += n(e.css("padding-top")) + n(e.css("padding-bottom")))),
              e.css(s.property, i - o + "px"));
          });
        }),
        u.each(function () {
          var e = t(this);
          e.attr("style", e.data("style-cache") || null);
        }),
        r._maintainScroll &&
          t(window).scrollTop((c / p) * t("html").outerHeight(!0)),
        this
      );
    }),
    (r._applyDataApi = function () {
      var e = {};
      t("[data-match-height], [data-mh]").each(function () {
        var o = t(this),
          n = o.attr("data-mh") || o.attr("data-match-height");
        n in e ? (e[n] = e[n].add(o)) : (e[n] = o);
      }),
        t.each(e, function () {
          this.matchHeight(!0);
        });
    });
  var s = function (e) {
    r._beforeUpdate && r._beforeUpdate(e, r._groups),
      t.each(r._groups, function () {
        r._apply(this.elements, this.options);
      }),
      r._afterUpdate && r._afterUpdate(e, r._groups);
  };
  (r._update = function (n, a) {
    if (a && "resize" === a.type) {
      var i = t(window).width();
      if (i === e) return;
      e = i;
    }
    n
      ? o === -1 &&
        (o = setTimeout(function () {
          s(a), (o = -1);
        }, r._throttle))
      : s(a);
  }),
    t(r._applyDataApi);
  var h = t.fn.on ? "on" : "bind";
  t(window)[h]("load", function (t) {
    r._update(!1, t);
  }),
    t(window)[h]("resize orientationchange", function (t) {
      r._update(!0, t);
    });
});
/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */

!(function (e, t) {
  "function" == typeof define && define.amd
    ? define(t)
    : "object" == typeof exports
    ? (module.exports = t())
    : (e.ScrollMagic = t());
})(this, function () {
  "use strict";
  var e = function () {};
  (e.version = "2.0.5"), window.addEventListener("mousewheel", function () {});
  var t = "data-scrollmagic-pin-spacer";
  e.Controller = function (r) {
    var o,
      s,
      a = "ScrollMagic.Controller",
      l = "FORWARD",
      c = "REVERSE",
      u = "PAUSED",
      f = n.defaults,
      d = this,
      h = i.extend({}, f, r),
      g = [],
      p = !1,
      v = 0,
      m = u,
      w = !0,
      y = 0,
      S = !0,
      b = function () {
        for (var e in h) f.hasOwnProperty(e) || delete h[e];
        if (((h.container = i.get.elements(h.container)[0]), !h.container))
          throw a + " init failed.";
        (w =
          h.container === window ||
          h.container === document.body ||
          !document.body.contains(h.container)),
          w && (h.container = window),
          (y = z()),
          h.container.addEventListener("resize", T),
          h.container.addEventListener("scroll", T),
          (h.refreshInterval =
            parseInt(h.refreshInterval) || f.refreshInterval),
          E();
      },
      E = function () {
        h.refreshInterval > 0 && (s = window.setTimeout(A, h.refreshInterval));
      },
      x = function () {
        return h.vertical
          ? i.get.scrollTop(h.container)
          : i.get.scrollLeft(h.container);
      },
      z = function () {
        return h.vertical
          ? i.get.height(h.container)
          : i.get.width(h.container);
      },
      C = (this._setScrollPos = function (e) {
        h.vertical
          ? w
            ? window.scrollTo(i.get.scrollLeft(), e)
            : (h.container.scrollTop = e)
          : w
          ? window.scrollTo(e, i.get.scrollTop())
          : (h.container.scrollLeft = e);
      }),
      F = function () {
        if (S && p) {
          var e = i.type.Array(p) ? p : g.slice(0);
          p = !1;
          var t = v;
          v = d.scrollPos();
          var n = v - t;
          0 !== n && (m = n > 0 ? l : c),
            m === c && e.reverse(),
            e.forEach(function (e) {
              e.update(!0);
            });
        }
      },
      L = function () {
        o = i.rAF(F);
      },
      T = function (e) {
        "resize" == e.type && ((y = z()), (m = u)), p !== !0 && ((p = !0), L());
      },
      A = function () {
        if (!w && y != z()) {
          var e;
          try {
            e = new Event("resize", { bubbles: !1, cancelable: !1 });
          } catch (t) {
            (e = document.createEvent("Event")), e.initEvent("resize", !1, !1);
          }
          h.container.dispatchEvent(e);
        }
        g.forEach(function (e) {
          e.refresh();
        }),
          E();
      };
    this._options = h;
    var O = function (e) {
      if (e.length <= 1) return e;
      var t = e.slice(0);
      return (
        t.sort(function (e, t) {
          return e.scrollOffset() > t.scrollOffset() ? 1 : -1;
        }),
        t
      );
    };
    return (
      (this.addScene = function (t) {
        if (i.type.Array(t))
          t.forEach(function (e) {
            d.addScene(e);
          });
        else if (t instanceof e.Scene)
          if (t.controller() !== d) t.addTo(d);
          else if (g.indexOf(t) < 0) {
            g.push(t),
              (g = O(g)),
              t.on("shift.controller_sort", function () {
                g = O(g);
              });
            for (var n in h.globalSceneOptions)
              t[n] && t[n].call(t, h.globalSceneOptions[n]);
          }
        return d;
      }),
      (this.removeScene = function (e) {
        if (i.type.Array(e))
          e.forEach(function (e) {
            d.removeScene(e);
          });
        else {
          var t = g.indexOf(e);
          t > -1 &&
            (e.off("shift.controller_sort"), g.splice(t, 1), e.remove());
        }
        return d;
      }),
      (this.updateScene = function (t, n) {
        return (
          i.type.Array(t)
            ? t.forEach(function (e) {
                d.updateScene(e, n);
              })
            : n
            ? t.update(!0)
            : p !== !0 &&
              t instanceof e.Scene &&
              ((p = p || []), -1 == p.indexOf(t) && p.push(t), (p = O(p)), L()),
          d
        );
      }),
      (this.update = function (e) {
        return T({ type: "resize" }), e && F(), d;
      }),
      (this.scrollTo = function (n, r) {
        if (i.type.Number(n)) C.call(h.container, n, r);
        else if (n instanceof e.Scene)
          n.controller() === d && d.scrollTo(n.scrollOffset(), r);
        else if (i.type.Function(n)) C = n;
        else {
          var o = i.get.elements(n)[0];
          if (o) {
            for (; o.parentNode.hasAttribute(t); ) o = o.parentNode;
            var s = h.vertical ? "top" : "left",
              a = i.get.offset(h.container),
              l = i.get.offset(o);
            w || (a[s] -= d.scrollPos()), d.scrollTo(l[s] - a[s], r);
          }
        }
        return d;
      }),
      (this.scrollPos = function (e) {
        return arguments.length
          ? (i.type.Function(e) && (x = e), d)
          : x.call(d);
      }),
      (this.info = function (e) {
        var t = {
          size: y,
          vertical: h.vertical,
          scrollPos: v,
          scrollDirection: m,
          container: h.container,
          isDocument: w,
        };
        return arguments.length ? (void 0 !== t[e] ? t[e] : void 0) : t;
      }),
      (this.loglevel = function () {
        return d;
      }),
      (this.enabled = function (e) {
        return arguments.length
          ? (S != e && ((S = !!e), d.updateScene(g, !0)), d)
          : S;
      }),
      (this.destroy = function (e) {
        window.clearTimeout(s);
        for (var t = g.length; t--; ) g[t].destroy(e);
        return (
          h.container.removeEventListener("resize", T),
          h.container.removeEventListener("scroll", T),
          i.cAF(o),
          null
        );
      }),
      b(),
      d
    );
  };
  var n = {
    defaults: {
      container: window,
      vertical: !0,
      globalSceneOptions: {},
      loglevel: 2,
      refreshInterval: 100,
    },
  };
  (e.Controller.addOption = function (e, t) {
    n.defaults[e] = t;
  }),
    (e.Controller.extend = function (t) {
      var n = this;
      (e.Controller = function () {
        return (
          n.apply(this, arguments),
          (this.$super = i.extend({}, this)),
          t.apply(this, arguments) || this
        );
      }),
        i.extend(e.Controller, n),
        (e.Controller.prototype = n.prototype),
        (e.Controller.prototype.constructor = e.Controller);
    }),
    (e.Scene = function (n) {
      var o,
        s,
        a = "BEFORE",
        l = "DURING",
        c = "AFTER",
        u = r.defaults,
        f = this,
        d = i.extend({}, u, n),
        h = a,
        g = 0,
        p = { start: 0, end: 0 },
        v = 0,
        m = !0,
        w = function () {
          for (var e in d) u.hasOwnProperty(e) || delete d[e];
          for (var t in u) L(t);
          C();
        },
        y = {};
      (this.on = function (e, t) {
        return (
          i.type.Function(t) &&
            ((e = e.trim().split(" ")),
            e.forEach(function (e) {
              var n = e.split("."),
                r = n[0],
                i = n[1];
              "*" != r &&
                (y[r] || (y[r] = []),
                y[r].push({ namespace: i || "", callback: t }));
            })),
          f
        );
      }),
        (this.off = function (e, t) {
          return e
            ? ((e = e.trim().split(" ")),
              e.forEach(function (e) {
                var n = e.split("."),
                  r = n[0],
                  i = n[1] || "",
                  o = "*" === r ? Object.keys(y) : [r];
                o.forEach(function (e) {
                  for (var n = y[e] || [], r = n.length; r--; ) {
                    var o = n[r];
                    !o ||
                      (i !== o.namespace && "*" !== i) ||
                      (t && t != o.callback) ||
                      n.splice(r, 1);
                  }
                  n.length || delete y[e];
                });
              }),
              f)
            : f;
        }),
        (this.trigger = function (t, n) {
          if (t) {
            var r = t.trim().split("."),
              i = r[0],
              o = r[1],
              s = y[i];
            s &&
              s.forEach(function (t) {
                (o && o !== t.namespace) ||
                  t.callback.call(f, new e.Event(i, t.namespace, f, n));
              });
          }
          return f;
        }),
        f
          .on("change.internal", function (e) {
            "loglevel" !== e.what &&
              "tweenChanges" !== e.what &&
              ("triggerElement" === e.what
                ? E()
                : "reverse" === e.what && f.update());
          })
          .on("shift.internal", function () {
            S(), f.update();
          }),
        (this.addTo = function (t) {
          return (
            t instanceof e.Controller &&
              s != t &&
              (s && s.removeScene(f),
              (s = t),
              C(),
              b(!0),
              E(!0),
              S(),
              s.info("container").addEventListener("resize", x),
              t.addScene(f),
              f.trigger("add", { controller: s }),
              f.update()),
            f
          );
        }),
        (this.enabled = function (e) {
          return arguments.length
            ? (m != e && ((m = !!e), f.update(!0)), f)
            : m;
        }),
        (this.remove = function () {
          if (s) {
            s.info("container").removeEventListener("resize", x);
            var e = s;
            (s = void 0), e.removeScene(f), f.trigger("remove");
          }
          return f;
        }),
        (this.destroy = function (e) {
          return (
            f.trigger("destroy", { reset: e }), f.remove(), f.off("*.*"), null
          );
        }),
        (this.update = function (e) {
          if (s)
            if (e)
              if (s.enabled() && m) {
                var t,
                  n = s.info("scrollPos");
                (t =
                  d.duration > 0
                    ? (n - p.start) / (p.end - p.start)
                    : n >= p.start
                    ? 1
                    : 0),
                  f.trigger("update", {
                    startPos: p.start,
                    endPos: p.end,
                    scrollPos: n,
                  }),
                  f.progress(t);
              } else T && h === l && O(!0);
            else s.updateScene(f, !1);
          return f;
        }),
        (this.refresh = function () {
          return b(), E(), f;
        }),
        (this.progress = function (e) {
          if (arguments.length) {
            var t = !1,
              n = h,
              r = s ? s.info("scrollDirection") : "PAUSED",
              i = d.reverse || e >= g;
            if (
              (0 === d.duration
                ? ((t = g != e),
                  (g = 1 > e && i ? 0 : 1),
                  (h = 0 === g ? a : l))
                : 0 > e && h !== a && i
                ? ((g = 0), (h = a), (t = !0))
                : e >= 0 && 1 > e && i
                ? ((g = e), (h = l), (t = !0))
                : e >= 1 && h !== c
                ? ((g = 1), (h = c), (t = !0))
                : h !== l || i || O(),
              t)
            ) {
              var o = { progress: g, state: h, scrollDirection: r },
                u = h != n,
                p = function (e) {
                  f.trigger(e, o);
                };
              u && n !== l && (p("enter"), p(n === a ? "start" : "end")),
                p("progress"),
                u && h !== l && (p(h === a ? "start" : "end"), p("leave"));
            }
            return f;
          }
          return g;
        });
      var S = function () {
          (p = { start: v + d.offset }),
            s &&
              d.triggerElement &&
              (p.start -= s.info("size") * d.triggerHook),
            (p.end = p.start + d.duration);
        },
        b = function (e) {
          if (o) {
            var t = "duration";
            F(t, o.call(f)) &&
              !e &&
              (f.trigger("change", { what: t, newval: d[t] }),
              f.trigger("shift", { reason: t }));
          }
        },
        E = function (e) {
          var n = 0,
            r = d.triggerElement;
          if (s && r) {
            for (
              var o = s.info(),
                a = i.get.offset(o.container),
                l = o.vertical ? "top" : "left";
              r.parentNode.hasAttribute(t);

            )
              r = r.parentNode;
            var c = i.get.offset(r);
            o.isDocument || (a[l] -= s.scrollPos()), (n = c[l] - a[l]);
          }
          var u = n != v;
          (v = n),
            u && !e && f.trigger("shift", { reason: "triggerElementPosition" });
        },
        x = function () {
          d.triggerHook > 0 &&
            f.trigger("shift", { reason: "containerResize" });
        },
        z = i.extend(r.validate, {
          duration: function (e) {
            if (i.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
              var t = parseFloat(e) / 100;
              e = function () {
                return s ? s.info("size") * t : 0;
              };
            }
            if (i.type.Function(e)) {
              o = e;
              try {
                e = parseFloat(o());
              } catch (t) {
                e = -1;
              }
            }
            if (((e = parseFloat(e)), !i.type.Number(e) || 0 > e))
              throw o ? ((o = void 0), 0) : 0;
            return e;
          },
        }),
        C = function (e) {
          (e = arguments.length ? [e] : Object.keys(z)),
            e.forEach(function (e) {
              var t;
              if (z[e])
                try {
                  t = z[e](d[e]);
                } catch (n) {
                  t = u[e];
                } finally {
                  d[e] = t;
                }
            });
        },
        F = function (e, t) {
          var n = !1,
            r = d[e];
          return d[e] != t && ((d[e] = t), C(e), (n = r != d[e])), n;
        },
        L = function (e) {
          f[e] ||
            (f[e] = function (t) {
              return arguments.length
                ? ("duration" === e && (o = void 0),
                  F(e, t) &&
                    (f.trigger("change", { what: e, newval: d[e] }),
                    r.shifts.indexOf(e) > -1 &&
                      f.trigger("shift", { reason: e })),
                  f)
                : d[e];
            });
        };
      (this.controller = function () {
        return s;
      }),
        (this.state = function () {
          return h;
        }),
        (this.scrollOffset = function () {
          return p.start;
        }),
        (this.triggerPosition = function () {
          var e = d.offset;
          return (
            s && (e += d.triggerElement ? v : s.info("size") * f.triggerHook()),
            e
          );
        });
      var T, A;
      f.on("shift.internal", function (e) {
        var t = "duration" === e.reason;
        ((h === c && t) || (h === l && 0 === d.duration)) && O(), t && _();
      })
        .on("progress.internal", function () {
          O();
        })
        .on("add.internal", function () {
          _();
        })
        .on("destroy.internal", function (e) {
          f.removePin(e.reset);
        });
      var O = function (e) {
          if (T && s) {
            var t = s.info(),
              n = A.spacer.firstChild;
            if (e || h !== l) {
              var r = {
                  position: A.inFlow ? "relative" : "absolute",
                  top: 0,
                  left: 0,
                },
                o = i.css(n, "position") != r.position;
              A.pushFollowers
                ? d.duration > 0 &&
                  (h === c && 0 === parseFloat(i.css(A.spacer, "padding-top"))
                    ? (o = !0)
                    : h === a &&
                      0 === parseFloat(i.css(A.spacer, "padding-bottom")) &&
                      (o = !0))
                : (r[t.vertical ? "top" : "left"] = d.duration * g),
                i.css(n, r),
                o && _();
            } else {
              "fixed" != i.css(n, "position") &&
                (i.css(n, { position: "fixed" }), _());
              var u = i.get.offset(A.spacer, !0),
                f =
                  d.reverse || 0 === d.duration
                    ? t.scrollPos - p.start
                    : Math.round(g * d.duration * 10) / 10;
              (u[t.vertical ? "top" : "left"] += f),
                i.css(A.spacer.firstChild, { top: u.top, left: u.left });
            }
          }
        },
        _ = function () {
          if (T && s && A.inFlow) {
            var e = h === l,
              t = s.info("vertical"),
              n = A.spacer.firstChild,
              r = i.isMarginCollapseType(i.css(A.spacer, "display")),
              o = {};
            A.relSize.width || A.relSize.autoFullWidth
              ? e
                ? i.css(T, { width: i.get.width(A.spacer) })
                : i.css(T, { width: "100%" })
              : ((o["min-width"] = i.get.width(t ? T : n, !0, !0)),
                (o.width = e ? o["min-width"] : "auto")),
              A.relSize.height
                ? e
                  ? i.css(T, {
                      height:
                        i.get.height(A.spacer) -
                        (A.pushFollowers ? d.duration : 0),
                    })
                  : i.css(T, { height: "100%" })
                : ((o["min-height"] = i.get.height(t ? n : T, !0, !r)),
                  (o.height = e ? o["min-height"] : "auto")),
              A.pushFollowers &&
                ((o["padding" + (t ? "Top" : "Left")] = d.duration * g),
                (o["padding" + (t ? "Bottom" : "Right")] =
                  d.duration * (1 - g))),
              i.css(A.spacer, o);
          }
        },
        N = function () {
          s && T && h === l && !s.info("isDocument") && O();
        },
        P = function () {
          s &&
            T &&
            h === l &&
            (((A.relSize.width || A.relSize.autoFullWidth) &&
              i.get.width(window) != i.get.width(A.spacer.parentNode)) ||
              (A.relSize.height &&
                i.get.height(window) != i.get.height(A.spacer.parentNode))) &&
            _();
        },
        D = function (e) {
          s &&
            T &&
            h === l &&
            !s.info("isDocument") &&
            (e.preventDefault(),
            s._setScrollPos(
              s.info("scrollPos") -
                ((e.wheelDelta ||
                  e[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 ||
                  30 * -e.detail)
            ));
        };
      (this.setPin = function (e, n) {
        var r = { pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer" };
        if (((n = i.extend({}, r, n)), (e = i.get.elements(e)[0]), !e))
          return f;
        if ("fixed" === i.css(e, "position")) return f;
        if (T) {
          if (T === e) return f;
          f.removePin();
        }
        T = e;
        var o = T.parentNode.style.display,
          s = [
            "top",
            "left",
            "bottom",
            "right",
            "margin",
            "marginLeft",
            "marginRight",
            "marginTop",
            "marginBottom",
          ];
        T.parentNode.style.display = "none";
        var a = "absolute" != i.css(T, "position"),
          l = i.css(T, s.concat(["display"])),
          c = i.css(T, ["width", "height"]);
        (T.parentNode.style.display = o),
          !a && n.pushFollowers && (n.pushFollowers = !1);
        var u = T.parentNode.insertBefore(document.createElement("div"), T),
          d = i.extend(l, {
            position: a ? "relative" : "absolute",
            boxSizing: "content-box",
            mozBoxSizing: "content-box",
            webkitBoxSizing: "content-box",
          });
        if (
          (a || i.extend(d, i.css(T, ["width", "height"])),
          i.css(u, d),
          u.setAttribute(t, ""),
          i.addClass(u, n.spacerClass),
          (A = {
            spacer: u,
            relSize: {
              width: "%" === c.width.slice(-1),
              height: "%" === c.height.slice(-1),
              autoFullWidth:
                "auto" === c.width && a && i.isMarginCollapseType(l.display),
            },
            pushFollowers: n.pushFollowers,
            inFlow: a,
          }),
          !T.___origStyle)
        ) {
          T.___origStyle = {};
          var h = T.style,
            g = s.concat([
              "width",
              "height",
              "position",
              "boxSizing",
              "mozBoxSizing",
              "webkitBoxSizing",
            ]);
          g.forEach(function (e) {
            T.___origStyle[e] = h[e] || "";
          });
        }
        return (
          A.relSize.width && i.css(u, { width: c.width }),
          A.relSize.height && i.css(u, { height: c.height }),
          u.appendChild(T),
          i.css(T, {
            position: a ? "relative" : "absolute",
            margin: "auto",
            top: "auto",
            left: "auto",
            bottom: "auto",
            right: "auto",
          }),
          (A.relSize.width || A.relSize.autoFullWidth) &&
            i.css(T, {
              boxSizing: "border-box",
              mozBoxSizing: "border-box",
              webkitBoxSizing: "border-box",
            }),
          window.addEventListener("scroll", N),
          window.addEventListener("resize", N),
          window.addEventListener("resize", P),
          T.addEventListener("mousewheel", D),
          T.addEventListener("DOMMouseScroll", D),
          O(),
          f
        );
      }),
        (this.removePin = function (e) {
          if (T) {
            if ((h === l && O(!0), e || !s)) {
              var n = A.spacer.firstChild;
              if (n.hasAttribute(t)) {
                var r = A.spacer.style,
                  o = [
                    "margin",
                    "marginLeft",
                    "marginRight",
                    "marginTop",
                    "marginBottom",
                  ];
                (margins = {}),
                  o.forEach(function (e) {
                    margins[e] = r[e] || "";
                  }),
                  i.css(n, margins);
              }
              A.spacer.parentNode.insertBefore(n, A.spacer),
                A.spacer.parentNode.removeChild(A.spacer),
                T.parentNode.hasAttribute(t) ||
                  (i.css(T, T.___origStyle), delete T.___origStyle);
            }
            window.removeEventListener("scroll", N),
              window.removeEventListener("resize", N),
              window.removeEventListener("resize", P),
              T.removeEventListener("mousewheel", D),
              T.removeEventListener("DOMMouseScroll", D),
              (T = void 0);
          }
          return f;
        });
      var R,
        k = [];
      return (
        f.on("destroy.internal", function (e) {
          f.removeClassToggle(e.reset);
        }),
        (this.setClassToggle = function (e, t) {
          var n = i.get.elements(e);
          return 0 !== n.length && i.type.String(t)
            ? (k.length > 0 && f.removeClassToggle(),
              (R = t),
              (k = n),
              f.on("enter.internal_class leave.internal_class", function (e) {
                var t = "enter" === e.type ? i.addClass : i.removeClass;
                k.forEach(function (e) {
                  t(e, R);
                });
              }),
              f)
            : f;
        }),
        (this.removeClassToggle = function (e) {
          return (
            e &&
              k.forEach(function (e) {
                i.removeClass(e, R);
              }),
            f.off("start.internal_class end.internal_class"),
            (R = void 0),
            (k = []),
            f
          );
        }),
        w(),
        f
      );
    });
  var r = {
    defaults: {
      duration: 0,
      offset: 0,
      triggerElement: void 0,
      triggerHook: 0.5,
      reverse: !0,
      loglevel: 2,
    },
    validate: {
      offset: function (e) {
        if (((e = parseFloat(e)), !i.type.Number(e))) throw 0;
        return e;
      },
      triggerElement: function (e) {
        if ((e = e || void 0)) {
          var t = i.get.elements(e)[0];
          if (!t) throw 0;
          e = t;
        }
        return e;
      },
      triggerHook: function (e) {
        var t = { onCenter: 0.5, onEnter: 1, onLeave: 0 };
        if (i.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
        else {
          if (!(e in t)) throw 0;
          e = t[e];
        }
        return e;
      },
      reverse: function (e) {
        return !!e;
      },
    },
    shifts: ["duration", "offset", "triggerHook"],
  };
  (e.Scene.addOption = function (e, t, n, i) {
    e in r.defaults ||
      ((r.defaults[e] = t), (r.validate[e] = n), i && r.shifts.push(e));
  }),
    (e.Scene.extend = function (t) {
      var n = this;
      (e.Scene = function () {
        return (
          n.apply(this, arguments),
          (this.$super = i.extend({}, this)),
          t.apply(this, arguments) || this
        );
      }),
        i.extend(e.Scene, n),
        (e.Scene.prototype = n.prototype),
        (e.Scene.prototype.constructor = e.Scene);
    }),
    (e.Event = function (e, t, n, r) {
      r = r || {};
      for (var i in r) this[i] = r[i];
      return (
        (this.type = e),
        (this.target = this.currentTarget = n),
        (this.namespace = t || ""),
        (this.timeStamp = this.timestamp = Date.now()),
        this
      );
    });
  var i = (e._util = (function (e) {
    var t,
      n = {},
      r = function (e) {
        return parseFloat(e) || 0;
      },
      i = function (t) {
        return t.currentStyle ? t.currentStyle : e.getComputedStyle(t);
      },
      o = function (t, n, o, s) {
        if (((n = n === document ? e : n), n === e)) s = !1;
        else if (!f.DomElement(n)) return 0;
        t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
        var a =
          (o
            ? n["offset" + t] || n["outer" + t]
            : n["client" + t] || n["inner" + t]) || 0;
        if (o && s) {
          var l = i(n);
          a +=
            "Height" === t
              ? r(l.marginTop) + r(l.marginBottom)
              : r(l.marginLeft) + r(l.marginRight);
        }
        return a;
      },
      s = function (e) {
        return e
          .replace(/^[^a-z]+([a-z])/g, "$1")
          .replace(/-([a-z])/g, function (e) {
            return e[1].toUpperCase();
          });
      };
    (n.extend = function (e) {
      for (e = e || {}, t = 1; t < arguments.length; t++)
        if (arguments[t])
          for (var n in arguments[t])
            arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
      return e;
    }),
      (n.isMarginCollapseType = function (e) {
        return (
          ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
        );
      });
    var a = 0,
      l = ["ms", "moz", "webkit", "o"],
      c = e.requestAnimationFrame,
      u = e.cancelAnimationFrame;
    for (t = 0; !c && t < l.length; ++t)
      (c = e[l[t] + "RequestAnimationFrame"]),
        (u =
          e[l[t] + "CancelAnimationFrame"] ||
          e[l[t] + "CancelRequestAnimationFrame"]);
    c ||
      (c = function (t) {
        var n = new Date().getTime(),
          r = Math.max(0, 16 - (n - a)),
          i = e.setTimeout(function () {
            t(n + r);
          }, r);
        return (a = n + r), i;
      }),
      u ||
        (u = function (t) {
          e.clearTimeout(t);
        }),
      (n.rAF = c.bind(e)),
      (n.cAF = u.bind(e));
    var f = (n.type = function (e) {
      return Object.prototype.toString
        .call(e)
        .replace(/^\[object (.+)\]$/, "$1")
        .toLowerCase();
    });
    (f.String = function (e) {
      return "string" === f(e);
    }),
      (f.Function = function (e) {
        return "function" === f(e);
      }),
      (f.Array = function (e) {
        return Array.isArray(e);
      }),
      (f.Number = function (e) {
        return !f.Array(e) && e - parseFloat(e) + 1 >= 0;
      }),
      (f.DomElement = function (e) {
        return "object" == typeof HTMLElement
          ? e instanceof HTMLElement
          : e &&
              "object" == typeof e &&
              null !== e &&
              1 === e.nodeType &&
              "string" == typeof e.nodeName;
      });
    var d = (n.get = {});
    return (
      (d.elements = function (t) {
        var n = [];
        if (f.String(t))
          try {
            t = document.querySelectorAll(t);
          } catch (e) {
            return n;
          }
        if ("nodelist" === f(t) || f.Array(t))
          for (var r = 0, i = (n.length = t.length); i > r; r++) {
            var o = t[r];
            n[r] = f.DomElement(o) ? o : d.elements(o);
          }
        else (f.DomElement(t) || t === document || t === e) && (n = [t]);
        return n;
      }),
      (d.scrollTop = function (t) {
        return t && "number" == typeof t.scrollTop
          ? t.scrollTop
          : e.pageYOffset || 0;
      }),
      (d.scrollLeft = function (t) {
        return t && "number" == typeof t.scrollLeft
          ? t.scrollLeft
          : e.pageXOffset || 0;
      }),
      (d.width = function (e, t, n) {
        return o("width", e, t, n);
      }),
      (d.height = function (e, t, n) {
        return o("height", e, t, n);
      }),
      (d.offset = function (e, t) {
        var n = { top: 0, left: 0 };
        if (e && e.getBoundingClientRect) {
          var r = e.getBoundingClientRect();
          (n.top = r.top),
            (n.left = r.left),
            t || ((n.top += d.scrollTop()), (n.left += d.scrollLeft()));
        }
        return n;
      }),
      (n.addClass = function (e, t) {
        t && (e.classList ? e.classList.add(t) : (e.className += " " + t));
      }),
      (n.removeClass = function (e, t) {
        t &&
          (e.classList
            ? e.classList.remove(t)
            : (e.className = e.className.replace(
                RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"),
                " "
              )));
      }),
      (n.css = function (e, t) {
        if (f.String(t)) return i(e)[s(t)];
        if (f.Array(t)) {
          var n = {},
            r = i(e);
          return (
            t.forEach(function (e) {
              n[e] = r[s(e)];
            }),
            n
          );
        }
        for (var o in t) {
          var a = t[o];
          a == parseFloat(a) && (a += "px"), (e.style[s(o)] = a);
        }
      }),
      n
    );
  })(window || {}));
  return e;
});
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : !0 === o
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 1)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 1 &&
        ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*", function (t) {
          t.stopImmediatePropagation();
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              ((e.focussed = o.is(":focus")), e.autoPlay());
          }, 0);
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        return this.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t =
          !0 === o.options.centerMode
            ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
            : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1,
              }),
                -1 !== s &&
                  i(this).attr({
                    "aria-describedby":
                      "slick-slide-control" + e.instanceUid + s,
                  });
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.$slides.eq(s).attr("tabindex", 0);
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                n.$slider.trigger("lazyLoaded", [n, e, t]);
            });
          }),
            (r.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, e, t]);
            }),
            (r.src = t);
        });
      }
      var t,
        o,
        s,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
            : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find(".slick-slide").slice(o, s)),
        "anticipated" === n.options.lazyLoad)
      )
        for (
          var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
          a < n.options.slidesToScroll;
          a++
        )
          r < 0 && (r = n.slideCount - 1),
            (t = (t = t.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++;
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find(".slick-slide"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            e(
              n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
            );
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        if (
          ((i =
            "boolean" == typeof i
              ? !0 === (e = i)
                ? 0
                : o.slideCount - 1
              : !0 === e
              ? --i
              : i),
          o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
        )
          return !1;
        o.unload(),
          !0 === t
            ? o.$slideTrack.children().remove()
            : o.$slideTrack.children(this.options.slide).eq(i).remove(),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : void 0 !== arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(s, !1, !0)
          : t.slideHandler(s);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          i.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
});
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!(function () {
  "use strict";
  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] &&
        (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1);
  }
  var e = 0,
    i = {};
  (t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key];
    }),
    (t.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (t.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (t.prototype.next = function () {
      return this.group.next(this);
    }),
    (t.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (t.invokeAll = function (t) {
      var e = [];
      for (var o in i) e.push(i[o]);
      for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }),
    (t.destroyAll = function () {
      t.invokeAll("destroy");
    }),
    (t.disableAll = function () {
      t.invokeAll("disable");
    }),
    (t.enableAll = function () {
      t.Context.refreshAll();
      for (var e in i) i[e].enabled = !0;
      return this;
    }),
    (t.refreshAll = function () {
      t.Context.refreshAll();
    }),
    (t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (t.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (t.adapters = []),
    (t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (t.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = t);
})(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        n.windowContext ||
          ((n.windowContext = !0), (n.windowContext = new e(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || n.isTouch) &&
            ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward;
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s];
            if (null !== a.triggerPoint) {
              var l = o.oldScroll < a.triggerPoint,
                h = o.newScroll >= a.triggerPoint,
                p = l && h,
                u = !l && !h;
              (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
            }
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? n.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? n.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var r in t) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c,
              d = this.waypoints[r][a],
              f = d.options.offset,
              w = d.triggerPoint,
              y = 0,
              g = null == w;
            d.element !== d.element.window &&
              (y = d.adapter.offset()[s.offsetProp]),
              "function" == typeof f
                ? (f = f.apply(d))
                : "string" == typeof f &&
                  ((f = parseFloat(f)),
                  d.options.offset.indexOf("%") > -1 &&
                    (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = Math.floor(y + l - f)),
              (h = w < s.oldScroll),
              (p = d.triggerPoint >= s.oldScroll),
              (u = h && p),
              (c = !h && !p),
              !g && u
                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                : !g && c
                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                : g &&
                  s.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
          }
        }
        return (
          n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function (e) {
        var i =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t;
        i.call(window, e);
      }),
      (n.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = "up" === i || "left" === i;
          o.sort(n ? e : t);
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r];
            (a.options.continuous || r === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function () {
            var n = t.extend({}, o, { element: this });
            "string" == typeof n.context &&
              (n.context = t(this).closest(n.context)[0]),
              i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();
// Main Script
(function ($) {
  "use strict";
  // -----------------------------
  // Document Ready Function
  // -----------------------------
  $(document).ready(function () {
    // Video Play
    $(".video-play").click(function () {
      var video =
        '<iframe allowfullscreen src="' +
        $(this).attr("data-video") +
        '"></iframe>';
      $(this).replaceWith(video);
    });
    // -----------------------------
    //  Video Replace
    // -----------------------------
    $(".video-box i").click(function () {
      var video =
        '<iframe allowfullscreen src="' +
        $(this).attr("data-video") +
        '"></iframe>';
      $(this).replaceWith(video);
    });
    // Hero Slider
    // $('.hero-slider-wrapper').slick({
    // 	prevArrow: "<button type='button' class='slick-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    // 	nextArrow: "<button type='button' class='slick-next'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    // 	fade: true,
    // 	// cssEase: 'linear'
    // });
    // // After change Add Class
    // $('.hero-slider-wrapper').on('afterChange', function (event, slick, currentslide) {
    // 	$(this).find('.slick-slide:not(.slick-cloned):eq(' + currentslide + ')').find('.item-image').addClass('trigger');
    // 	$(this).find('.slick-slide:not(.slick-cloned):eq(' + currentslide + ')').find('span').addClass('reveal-text');
    // });
    // $('.hero-slider-wrapper').on('beforeChange', function (event, slick, currentslide) {
    // 	$(this).find('.slick-slide:not(.slick-cloned):eq(' + currentslide + ')').find('.item-image').removeClass('trigger');
    // 	$(this).find('.slick-slide:not(.slick-cloned):eq(' + currentslide + ')').find('span').removeClass('reveal-text');
    // });

    $(".product-slider-wrapper").slick({
      slidesToShow: 3,
      infinite: true,
      prevArrow:
        "<button type='button' class='slick-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            centerMode: true,
          },
        },
      ],
    });
    // Text Reveal
    $(".rev").waypoint(
      function () {
        $(this[(0, "element")]).addClass("reveal-text");
        this.destroy;
      },
      {
        offset: "bottom-in-view",
      }
    );

    $(".image-reveal").waypoint(
      function () {
        $(this[(0, "element")]).addClass("trigger");
        this.destroy;
      },
      {
        offset: "bottom-in-view",
      }
    );
    $(".vision-slider-wrapper").waypoint(
      function () {
        $(this[(0, "element")])
          .find(".slick-current")
          .find(".image")
          .addClass("trigger");
        this.destroy;
      },
      {
        offset: "bottom-in-view",
      }
    );
    $("#contact").waypoint(
      function () {
        $(".footer").toggleClass("show");
      },
      {
        offset: "bottom-in-view",
      }
    );
    // -----------------------------
    // Smmoth Scroll
    // -----------------------------
    function smoothScroll() {
      $("a.page-scroll").on("click", function (event) {
        var $anchor = $(this);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $($anchor.attr("href")).offset().top - 0,
            },
            1000
          );
        event.preventDefault();
      });
    }
    smoothScroll();

    // google map
    window.marker = null;
    function initialize() {
      var map;
      var dataCenterLat = $("#map").attr("data-center-lat");
      var dataCenterLng = $("#map").attr("data-center-lng");
      var dataPositionLat = $("#map").attr("data-position-lat");
      var dataPositionLng = $("#map").attr("data-position-lng");
      var center = new google.maps.LatLng(dataCenterLat, dataCenterLng);
      var pinPosition = new google.maps.LatLng(
        dataPositionLat,
        dataPositionLng
      );

      var style = [
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36,
            },
            {
              color: "#000000",
            },
            {
              lightness: 40,
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#000000",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 17,
            },
            {
              weight: 1.2,
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 21,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 29,
            },
            {
              weight: 0.2,
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 18,
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 19,
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000",
            },
            {
              lightness: 17,
            },
          ],
        },
      ];

      var mapOptions = {
        // SET THE CENTER
        center: center,
        // SET THE MAP STYLE & ZOOM LEVEL
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // SET THE BACKGROUND COLOUR
        backgroundColor: "#000",
        // REMOVE ALL THE CONTROLS EXCEPT ZOOM
        zoom: 10,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        // gestureHandling: 'greedy',
        disableDefaultUI: true,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.LARGE,
        },
      };
      map = new google.maps.Map(document.getElementById("map"), mapOptions);
      // SET THE MAP TYPE
      var mapType = new google.maps.StyledMapType(style, { name: "Grayscale" });
      map.mapTypes.set("grey", mapType);
      map.setMapTypeId("grey");

      //CREATE A CUSTOM PIN ICON
      var marker_image = $("#map").attr("data-marker");
      var marker_name = $("#map").attr("data-name");
      var pinIcon = new google.maps.MarkerImage(
        marker_image,
        new google.maps.Size(64, 64),
        null,
        null
      );
      marker = new google.maps.Marker({
        position: pinPosition,
        map: map,
        icon: pinIcon,
        title: marker_name,
      });
    }

    var google_map_canvas = $("#map");
    if (google_map_canvas.length) {
      google.maps.event.addDomListener(window, "load", initialize);
    }
  });

  $(window).on("load", function () {
    $(".preloader").fadeOut(2000);
  });
})(jQuery);

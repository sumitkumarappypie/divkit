var e_ = Object.defineProperty;
var t_ = (t, r, e) => r in t ? e_(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var Er = (t, r, e) => t_(t, typeof r != "symbol" ? r + "" : r, e);
/*!
    DivKit v32.39.0
    https://github.com/divkit/divkit
    @licence Apache-2.0
*/
function Zl(t) {
  return BigInt(t);
}
const Ui = Zl("9223372036854775807"), Gi = Zl("-9223372036854775808");
function gn(t) {
  const r = Zl(t);
  if (r > Ui || r < Gi)
    throw new Error("Integer overflow.");
  return r;
}
const li = gn(0);
function Jf(t) {
  let r = t;
  return r < 0 && (r = -r), r;
}
function qf(t) {
  let r = 0;
  return t > 0 ? r = 1 : t < 0 && (r = -1), gn(r);
}
function r_(t, r) {
  return r && r[3] && r[7] ? { type: "ConditionalExpression", test: t, consequent: r[3], alternate: r[7] } : t;
}
function n_(t, r) {
  return r && r[3] ? { type: "TryExpression", test: t, alternate: r[3] } : t;
}
function Zi(t, r) {
  return r.length ? r.reduce((e, n) => ({
    type: "BinaryExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), t) : t;
}
function ha(t, r) {
  return r.length ? r.reduce((e, n) => ({
    type: "LogicalExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), t) : t;
}
function o_(t, r) {
  return r.length ? r.reduce((e, n) => {
    if (!n[5])
      throw new Error("Method expected after .");
    return {
      type: "MethodExpression",
      object: e,
      method: n[3],
      arguments: n[5][2]
    };
  }, t) : t;
}
function i_(t) {
  return t === "true" || t === "false" ? { type: "BooleanLiteral", value: t === "true" } : { type: "Variable", id: { type: "Identifier", name: t } };
}
function ma(t) {
  if (t.every((e) => typeof e == "string"))
    return { type: "StringLiteral", value: t.join("") };
  let r = t.reduce((e, n) => (typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e), []).reduce((e, n) => (typeof n == "string" ? e.quasis.push({ type: "StringLiteral", value: n }) : (e.quasis.length === e.expressions.length && e.quasis.push({ type: "StringLiteral", value: "" }), e.expressions.push(n)), e), {
    type: "TemplateLiteral",
    quasis: [],
    expressions: []
  });
  return r.quasis.length === r.expressions.length && r.quasis.push({ type: "StringLiteral", value: "" }), r;
}
function s_(t) {
  try {
    return gn(t);
  } catch {
    throw new Error(`Value ${t} can't be converted to Integer type.`);
  }
}
function ba(t) {
  if (t === "'" || t === "\\")
    return t;
  throw new Error("Incorrect string escape");
}
function l_(t, r) {
  function e() {
    this.constructor = t;
  }
  e.prototype = r.prototype, t.prototype = new e();
}
function Ei(t, r, e, n) {
  var o = Error.call(this, t);
  return Object.setPrototypeOf && Object.setPrototypeOf(o, Ei.prototype), o.expected = r, o.found = e, o.location = n, o.name = "SyntaxError", o;
}
l_(Ei, Error);
function ul(t, r, e) {
  return e = e || " ", t.length > r ? t : (r -= t.length, e += e.repeat(r), t + e.slice(0, r));
}
Ei.prototype.format = function(t) {
  var r = "Error: " + this.message;
  if (this.location) {
    var e = null, n;
    for (n = 0; n < t.length; n++)
      if (t[n].source === this.location.source) {
        e = t[n].text.split(/\r\n|\n|\r/g);
        break;
      }
    var o = this.location.start, i = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(o) : o, s = this.location.source + ":" + i.line + ":" + i.column;
    if (e) {
      var a = this.location.end, l = ul("", i.line.toString().length, " "), u = e[o.line - 1], c = o.line === a.line ? a.column : u.length + 1, f = c - o.column || 1;
      r += `
 --> ` + s + `
` + l + ` |
` + i.line + " | " + u + `
` + l + " | " + ul("", o.column - 1, " ") + ul("", f, "^");
    } else
      r += `
 at ` + s;
  }
  return r;
};
Ei.buildMessage = function(t, r) {
  var e = {
    literal: function(u) {
      return '"' + o(u.text) + '"';
    },
    class: function(u) {
      var c = u.parts.map(function(f) {
        return Array.isArray(f) ? i(f[0]) + "-" + i(f[1]) : i(f);
      });
      return "[" + (u.inverted ? "^" : "") + c.join("") + "]";
    },
    any: function() {
      return "any character";
    },
    end: function() {
      return "end of input";
    },
    other: function(u) {
      return u.description;
    }
  };
  function n(u) {
    return u.charCodeAt(0).toString(16).toUpperCase();
  }
  function o(u) {
    return u.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(c) {
      return "\\x0" + n(c);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(c) {
      return "\\x" + n(c);
    });
  }
  function i(u) {
    return u.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(c) {
      return "\\x0" + n(c);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(c) {
      return "\\x" + n(c);
    });
  }
  function s(u) {
    return e[u.type](u);
  }
  function a(u) {
    var c = u.map(s), f, _;
    if (c.sort(), c.length > 0) {
      for (f = 1, _ = 1; f < c.length; f++)
        c[f - 1] !== c[f] && (c[_] = c[f], _++);
      c.length = _;
    }
    switch (c.length) {
      case 1:
        return c[0];
      case 2:
        return c[0] + " or " + c[1];
      default:
        return c.slice(0, -1).join(", ") + ", or " + c[c.length - 1];
    }
  }
  function l(u) {
    return u ? '"' + o(u) + '"' : "end of input";
  }
  return "Expected " + a(t) + " but " + l(r) + " found.";
};
function Ls(t, r) {
  r = r !== void 0 ? r : {};
  var e = {}, n = r.grammarSource, o = { start: Kr, JsonStringContents: on }, i = Kr, s = "@{", a = "}", l = "@{}", u = "\\", c = "?", f = ":", _ = "!:", h = "||", m = "&&", p = "==", k = "!=", w = ">=", O = ">", G = "<=", L = "<", ee = "+", fe = "-", P = "/", Z = "*", se = "%", j = "!", z = ".", N = "(", W = ")", ie = ",", de = "'", je = "e", Ee = "E", pe = /^[^}]/, ze = /^[^'}]/, be = /^[0-9]/, Fe = /^[a-zA-Z_]/, Ge = /^[a-zA-Z_0-9]/, Ze = /^[ \t\r\n]/, ke = Ue("@{", !1), et = Ue("}", !1), _e = Ue("@{}", !1), Ie = Ue("\\", !1), ue = Ut(), oe = Ye(["}"], !0, !1), ye = Ue("?", !1), $ = Ue(":", !1), Ae = Ue("!:", !1), xe = Ue("||", !1), qe = Ue("&&", !1), te = Ue("==", !1), Xe = Ue("!=", !1), Le = Ue(">=", !1), tt = Ue(">", !1), dt = Ue("<=", !1), lt = Ue("<", !1), wt = Ue("+", !1), ot = Ue("-", !1), At = Ue("/", !1), it = Ue("*", !1), me = Ue("%", !1), ne = Ue("!", !1), at = Ue(".", !1), Ve = Ue("(", !1), D = Ue(")", !1), jt = Ue(",", !1), gt = Jr("string"), kt = Ue("'", !1), St = Ye(["'", "}"], !0, !1), rt = Jr("integer"), Y = Ye([["0", "9"]], !1, !1), Vt = Jr("number"), Dt = Ue("e", !1), Gt = Ue("E", !1), Jt = Ye([["a", "z"], ["A", "Z"], "_"], !1, !1), ve = Ye([["a", "z"], ["A", "Z"], "_", ["0", "9"]], !1, !1), We = Jr("whitespace"), ft = Ye([" ", "	", "\r", `
`], !1, !1), Me = function(b) {
    return b;
  }, T = function(b) {
    return ma(b);
  }, Oe = function(b) {
    return b;
  }, xt = function() {
    return "";
  }, ae = function() {
    return st();
  }, mt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, Wt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, Ft = function(b) {
    return b;
  }, ar = function(b) {
    return ba(b);
  }, Te = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, bt = function(b, V) {
    return r_(b, V);
  }, er = function(b, V) {
    return n_(b, V);
  }, Qt = function(b, V) {
    return ha(b, V);
  }, Xt = function(b, V) {
    return ha(b, V);
  }, ur = function(b, V) {
    return Zi(b, V);
  }, jr = function(b, V) {
    return Zi(b, V);
  }, Yt = function(b, V) {
    return Zi(b, V);
  }, It = function(b, V) {
    return Zi(b, V);
  }, Tt = function(b) {
    return b;
  }, ut = function(b) {
    return b;
  }, qt = function(b, V) {
    return { type: "UnaryExpression", operator: b, argument: V };
  }, sr = function() {
    throw new Error("Incorrect unary operator");
  }, dr = function(b, V) {
    return o_(b, V);
  }, mr = function(b, V) {
    return { type: "CallExpression", callee: b, arguments: V };
  }, pr = function(b, V) {
    return [b, ...V];
  }, Fr = function(b) {
    return b;
  }, zr = function(b) {
    return b;
  }, gr = function(b) {
    return ma(b);
  }, $e = function(b) {
    return b;
  }, ct = function() {
    return "";
  }, Mt = function() {
    return st();
  }, br = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, wr = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, nt = function(b) {
    return b;
  }, le = function(b) {
    return ba(b);
  }, Ct = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, rr = function() {
    return { type: "IntegerLiteral", value: s_(st()) };
  }, hr = function() {
    return { type: "NumberLiteral", value: parseFloat(st()) };
  }, Sr = function() {
    return { type: "NumberLiteral", value: parseFloat(st()) };
  }, v = function() {
    const b = st();
    if (/\.\./.test(b) || /\.$/.test(b))
      throw new Error("Unexpected token: .");
    return i_(b);
  }, re = function() {
    return { type: "Identifier", name: st() };
  }, d = 0, C = 0, De = [{ line: 1, column: 1 }], Re = 0, Ot = [], H = 0, Lt;
  if ("startRule" in r) {
    if (!(r.startRule in o))
      throw new Error(`Can't start parsing from rule "` + r.startRule + '".');
    i = o[r.startRule];
  }
  function st() {
    return t.substring(C, d);
  }
  function Ue(b, V) {
    return { type: "literal", text: b, ignoreCase: V };
  }
  function Ye(b, V, X) {
    return { type: "class", parts: b, inverted: V, ignoreCase: X };
  }
  function Ut() {
    return { type: "any" };
  }
  function yr() {
    return { type: "end" };
  }
  function Jr(b) {
    return { type: "other", description: b };
  }
  function tn(b) {
    var V = De[b], X;
    if (V)
      return V;
    for (X = b - 1; !De[X]; )
      X--;
    for (V = De[X], V = {
      line: V.line,
      column: V.column
    }; X < b; )
      t.charCodeAt(X) === 10 ? (V.line++, V.column = 1) : V.column++, X++;
    return De[b] = V, V;
  }
  function Gr(b, V, X) {
    var I = tn(b), we = tn(V), ge = {
      source: n,
      start: {
        offset: b,
        line: I.line,
        column: I.column
      },
      end: {
        offset: V,
        line: we.line,
        column: we.column
      }
    };
    return ge;
  }
  function he(b) {
    d < Re || (d > Re && (Re = d, Ot = []), Ot.push(b));
  }
  function wn(b, V, X) {
    return new Ei(
      Ei.buildMessage(b, V),
      b,
      V,
      X
    );
  }
  function Kr() {
    var b, V;
    return b = d, Nt(), V = y(), V !== e ? (Nt(), C = b, b = Me(V)) : (d = b, b = e), b;
  }
  function on() {
    var b, V, X;
    for (b = d, V = [], X = zn(); X !== e; )
      V.push(X), X = zn();
    return C = b, V = T(V), b = V, b;
  }
  function zn() {
    var b, V, X, I, we;
    if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, H === 0 && he(ke)), V !== e ? (X = Nt(), I = y(), I !== e ? (Nt(), t.charCodeAt(d) === 125 ? (we = a, d++) : (we = e, H === 0 && he(et)), we !== e ? (C = b, b = Oe(I)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.substr(d, 3) === l ? (V = l, d += 3) : (V = e, H === 0 && he(_e)), V !== e && (C = b, V = xt()), b = V, b === e && (b = d, V = d, H++, t.charCodeAt(d) === 92 ? (X = u, d++) : (X = e, H === 0 && he(Ie)), X === e && (t.substr(d, 2) === s ? (X = s, d += 2) : (X = e, H === 0 && he(ke))), H--, X === e ? V = void 0 : (d = V, V = e), V !== e ? (t.length > d ? (X = t.charAt(d), d++) : (X = e, H === 0 && he(ue)), X !== e ? (C = b, b = ae()) : (d = b, b = e)) : (d = b, b = e), b === e))) {
      if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, H === 0 && he(ke)), V !== e) {
        if (X = [], pe.test(t.charAt(d)) ? (I = t.charAt(d), d++) : (I = e, H === 0 && he(oe)), I !== e)
          for (; I !== e; )
            X.push(I), pe.test(t.charAt(d)) ? (I = t.charAt(d), d++) : (I = e, H === 0 && he(oe));
        else
          X = e;
        X !== e ? (t.charCodeAt(d) === 125 ? (I = a, d++) : (I = e, H === 0 && he(et)), I !== e ? (C = b, b = mt()) : (d = b, b = e)) : (d = b, b = e);
      } else
        d = b, b = e;
      b === e && (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, H === 0 && he(ke)), V !== e && (C = b, V = Wt()), b = V, b === e && (b = d, t.charCodeAt(d) === 92 ? (V = u, d++) : (V = e, H === 0 && he(Ie)), V !== e ? (t.substr(d, 2) === s ? (X = s, d += 2) : (X = e, H === 0 && he(ke)), X !== e ? (C = b, b = Ft(X)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = u, d++) : (V = e, H === 0 && he(Ie)), V !== e ? (t.length > d ? (X = t.charAt(d), d++) : (X = e, H === 0 && he(ue)), X !== e ? (C = b, b = ar(X)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = u, d++) : (V = e, H === 0 && he(Ie)), V !== e && (C = b, V = Te()), b = V))));
    }
    return b;
  }
  function y() {
    var b, V, X, I, we, ge, Pt, Ht, Xr, Tr, Zr;
    return b = d, V = E(), V !== e ? (X = d, I = Nt(), t.charCodeAt(d) === 63 ? (we = c, d++) : (we = e, H === 0 && he(ye)), we !== e ? (ge = Nt(), Pt = y(), Pt !== e ? (Ht = Nt(), t.charCodeAt(d) === 58 ? (Xr = f, d++) : (Xr = e, H === 0 && he($)), Xr !== e ? (Tr = Nt(), Zr = y(), Zr !== e ? (I = [I, we, ge, Pt, Ht, Xr, Tr, Zr], X = I) : (d = X, X = e)) : (d = X, X = e)) : (d = X, X = e)) : (d = X, X = e), X === e && (X = null), C = b, b = bt(V, X)) : (d = b, b = e), b;
  }
  function E() {
    var b, V, X, I, we, ge, Pt;
    return b = d, V = S(), V !== e ? (X = d, I = Nt(), t.substr(d, 2) === _ ? (we = _, d += 2) : (we = e, H === 0 && he(Ae)), we !== e ? (ge = Nt(), Pt = y(), Pt !== e ? (I = [I, we, ge, Pt], X = I) : (d = X, X = e)) : (d = X, X = e), X === e && (X = null), C = b, b = er(V, X)) : (d = b, b = e), b;
  }
  function S() {
    var b, V, X, I, we, ge, Pt, Ht;
    if (b = d, V = x(), V !== e) {
      for (X = [], I = d, we = Nt(), t.substr(d, 2) === h ? (ge = h, d += 2) : (ge = e, H === 0 && he(xe)), ge !== e ? (Pt = Nt(), Ht = x(), Ht !== e ? (we = [we, ge, Pt, Ht], I = we) : (d = I, I = e)) : (d = I, I = e); I !== e; )
        X.push(I), I = d, we = Nt(), t.substr(d, 2) === h ? (ge = h, d += 2) : (ge = e, H === 0 && he(xe)), ge !== e ? (Pt = Nt(), Ht = x(), Ht !== e ? (we = [we, ge, Pt, Ht], I = we) : (d = I, I = e)) : (d = I, I = e);
      C = b, b = Qt(V, X);
    } else
      d = b, b = e;
    return b;
  }
  function x() {
    var b, V, X, I, we, ge, Pt, Ht;
    if (b = d, V = R(), V !== e) {
      for (X = [], I = d, we = Nt(), t.substr(d, 2) === m ? (ge = m, d += 2) : (ge = e, H === 0 && he(qe)), ge !== e ? (Pt = Nt(), Ht = R(), Ht !== e ? (we = [we, ge, Pt, Ht], I = we) : (d = I, I = e)) : (d = I, I = e); I !== e; )
        X.push(I), I = d, we = Nt(), t.substr(d, 2) === m ? (ge = m, d += 2) : (ge = e, H === 0 && he(qe)), ge !== e ? (Pt = Nt(), Ht = R(), Ht !== e ? (we = [we, ge, Pt, Ht], I = we) : (d = I, I = e)) : (d = I, I = e);
      C = b, b = Xt(V, X);
    } else
      d = b, b = e;
    return b;
  }
  function R() {
    var b, V, X, I, we, ge, Pt, Ht;
    if (b = d, V = Qe(), V !== e) {
      for (X = [], I = d, we = Nt(), t.substr(d, 2) === p ? (ge = p, d += 2) : (ge = e, H === 0 && he(te)), ge === e && (t.substr(d, 2) === k ? (ge = k, d += 2) : (ge = e, H === 0 && he(Xe))), ge !== e ? (Pt = Nt(), Ht = Qe(), Ht !== e ? (we = [we, ge, Pt, Ht], I = we) : (d = I, I = e)) : (d = I, I = e); I !== e; )
        X.push(I), I = d, we = Nt(), t.substr(d, 2) === p ? (ge = p, d += 2) : (ge = e, H === 0 && he(te)), ge === e && (t.substr(d, 2) === k ? (ge = k, d += 2) : (ge = e, H === 0 && he(Xe))), ge !== e ? (Pt = Nt(), Ht = Qe(), Ht !== e ? (we = [we, ge, Pt, Ht], I = we) : (d = I, I = e)) : (d = I, I = e);
      C = b, b = ur(V, X);
    } else
      d = b, b = e;
    return b;
  }
  function Qe() {
    var b, V, X, I, we, ge, Pt, Ht;
    if (b = d, V = Ce(), V !== e) {
      for (X = [], I = d, we = Nt(), t.substr(d, 2) === w ? (ge = w, d += 2) : (ge = e, H === 0 && he(Le)), ge === e && (t.charCodeAt(d) === 62 ? (ge = O, d++) : (ge = e, H === 0 && he(tt)), ge === e && (t.substr(d, 2) === G ? (ge = G, d += 2) : (ge = e, H === 0 && he(dt)), ge === e && (t.charCodeAt(d) === 60 ? (ge = L, d++) : (ge = e, H === 0 && he(lt))))), ge !== e ? (Pt = Nt(), Ht = Ce(), Ht !== e ? (we = [we, ge, Pt, Ht], I = we) : (d = I, I = e)) : (d = I, I = e); I !== e; )
        X.push(I), I = d, we = Nt(), t.substr(d, 2) === w ? (ge = w, d += 2) : (ge = e, H === 0 && he(Le)), ge === e && (t.charCodeAt(d) === 62 ? (ge = O, d++) : (ge = e, H === 0 && he(tt)), ge === e && (t.substr(d, 2) === G ? (ge = G, d += 2) : (ge = e, H === 0 && he(dt)), ge === e && (t.charCodeAt(d) === 60 ? (ge = L, d++) : (ge = e, H === 0 && he(lt))))), ge !== e ? (Pt = Nt(), Ht = Ce(), Ht !== e ? (we = [we, ge, Pt, Ht], I = we) : (d = I, I = e)) : (d = I, I = e);
      C = b, b = jr(V, X);
    } else
      d = b, b = e;
    return b;
  }
  function Ce() {
    var b, V, X, I, we, ge, Pt, Ht;
    if (b = d, V = Zt(), V !== e) {
      for (X = [], I = d, we = Nt(), t.charCodeAt(d) === 43 ? (ge = ee, d++) : (ge = e, H === 0 && he(wt)), ge === e && (t.charCodeAt(d) === 45 ? (ge = fe, d++) : (ge = e, H === 0 && he(ot))), ge !== e ? (Pt = Nt(), Ht = Zt(), Ht !== e ? (we = [we, ge, Pt, Ht], I = we) : (d = I, I = e)) : (d = I, I = e); I !== e; )
        X.push(I), I = d, we = Nt(), t.charCodeAt(d) === 43 ? (ge = ee, d++) : (ge = e, H === 0 && he(wt)), ge === e && (t.charCodeAt(d) === 45 ? (ge = fe, d++) : (ge = e, H === 0 && he(ot))), ge !== e ? (Pt = Nt(), Ht = Zt(), Ht !== e ? (we = [we, ge, Pt, Ht], I = we) : (d = I, I = e)) : (d = I, I = e);
      C = b, b = Yt(V, X);
    } else
      d = b, b = e;
    return b;
  }
  function Zt() {
    var b, V, X, I, we, ge, Pt, Ht;
    if (b = d, V = yt(), V !== e) {
      for (X = [], I = d, we = Nt(), t.charCodeAt(d) === 47 ? (ge = P, d++) : (ge = e, H === 0 && he(At)), ge === e && (t.charCodeAt(d) === 42 ? (ge = Z, d++) : (ge = e, H === 0 && he(it)), ge === e && (t.charCodeAt(d) === 37 ? (ge = se, d++) : (ge = e, H === 0 && he(me)))), ge !== e ? (Pt = Nt(), Ht = yt(), Ht !== e ? (we = [we, ge, Pt, Ht], I = we) : (d = I, I = e)) : (d = I, I = e); I !== e; )
        X.push(I), I = d, we = Nt(), t.charCodeAt(d) === 47 ? (ge = P, d++) : (ge = e, H === 0 && he(At)), ge === e && (t.charCodeAt(d) === 42 ? (ge = Z, d++) : (ge = e, H === 0 && he(it)), ge === e && (t.charCodeAt(d) === 37 ? (ge = se, d++) : (ge = e, H === 0 && he(me)))), ge !== e ? (Pt = Nt(), Ht = yt(), Ht !== e ? (we = [we, ge, Pt, Ht], I = we) : (d = I, I = e)) : (d = I, I = e);
      C = b, b = It(V, X);
    } else
      d = b, b = e;
    return b;
  }
  function yt() {
    var b, V, X, I;
    return b = d, V = d, H++, t.charCodeAt(d) === 45 ? (X = fe, d++) : (X = e, H === 0 && he(ot)), H--, X !== e ? (d = V, V = void 0) : V = e, V !== e ? (X = Dn(), X !== e ? (C = b, b = Tt(X)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, V = d, H++, t.charCodeAt(d) === 45 ? (X = fe, d++) : (X = e, H === 0 && he(ot)), H--, X !== e ? (d = V, V = void 0) : V = e, V !== e ? (X = un(), X !== e ? (C = b, b = ut(X)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 33 ? (V = j, d++) : (V = e, H === 0 && he(ne)), V === e && (t.charCodeAt(d) === 43 ? (V = ee, d++) : (V = e, H === 0 && he(wt)), V === e && (t.charCodeAt(d) === 45 ? (V = fe, d++) : (V = e, H === 0 && he(ot)))), V !== e ? (X = Nt(), I = Ke(), I === e && (I = tr()), I !== e ? (C = b, b = qt(V, I)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = tr()))), b;
  }
  function Ke() {
    var b, V;
    return b = d, t.charCodeAt(d) === 43 ? (V = ee, d++) : (V = e, H === 0 && he(wt)), V === e && (t.charCodeAt(d) === 45 ? (V = fe, d++) : (V = e, H === 0 && he(ot))), V !== e && (C = b, V = sr()), b = V, b;
  }
  function tr() {
    var b, V, X, I, we, ge, Pt, Ht, Xr, Tr, Zr, yo, ro, Vn, Hn;
    if (b = d, V = Et(), V !== e) {
      for (X = [], I = d, we = Nt(), t.charCodeAt(d) === 46 ? (ge = z, d++) : (ge = e, H === 0 && he(at)), ge !== e ? (Pt = Nt(), Ht = Sn(), Ht !== e ? (Xr = Nt(), Tr = d, t.charCodeAt(d) === 40 ? (Zr = N, d++) : (Zr = e, H === 0 && he(Ve)), Zr !== e ? (yo = Nt(), ro = Cr(), ro !== e ? (Vn = Nt(), t.charCodeAt(d) === 41 ? (Hn = W, d++) : (Hn = e, H === 0 && he(D)), Hn !== e ? (Zr = [Zr, yo, ro, Vn, Hn], Tr = Zr) : (d = Tr, Tr = e)) : (d = Tr, Tr = e)) : (d = Tr, Tr = e), Tr === e && (Tr = null), we = [we, ge, Pt, Ht, Xr, Tr], I = we) : (d = I, I = e)) : (d = I, I = e); I !== e; )
        X.push(I), I = d, we = Nt(), t.charCodeAt(d) === 46 ? (ge = z, d++) : (ge = e, H === 0 && he(at)), ge !== e ? (Pt = Nt(), Ht = Sn(), Ht !== e ? (Xr = Nt(), Tr = d, t.charCodeAt(d) === 40 ? (Zr = N, d++) : (Zr = e, H === 0 && he(Ve)), Zr !== e ? (yo = Nt(), ro = Cr(), ro !== e ? (Vn = Nt(), t.charCodeAt(d) === 41 ? (Hn = W, d++) : (Hn = e, H === 0 && he(D)), Hn !== e ? (Zr = [Zr, yo, ro, Vn, Hn], Tr = Zr) : (d = Tr, Tr = e)) : (d = Tr, Tr = e)) : (d = Tr, Tr = e), Tr === e && (Tr = null), we = [we, ge, Pt, Ht, Xr, Tr], I = we) : (d = I, I = e)) : (d = I, I = e);
      C = b, b = dr(V, X);
    } else
      d = b, b = e;
    return b;
  }
  function Et() {
    var b, V, X, I, we;
    return b = d, V = Sn(), V !== e ? (Nt(), t.charCodeAt(d) === 40 ? (X = N, d++) : (X = e, H === 0 && he(Ve)), X !== e ? (Nt(), I = Cr(), I !== e ? (Nt(), t.charCodeAt(d) === 41 ? (we = W, d++) : (we = e, H === 0 && he(D)), we !== e ? (C = b, b = mr(V, I)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = Vr()), b;
  }
  function Cr() {
    var b, V, X, I, we, ge;
    if (b = d, V = y(), V !== e) {
      for (X = [], I = d, Nt(), t.charCodeAt(d) === 44 ? (we = ie, d++) : (we = e, H === 0 && he(jt)), we !== e ? (Nt(), ge = y(), ge !== e ? I = ge : (d = I, I = e)) : (d = I, I = e); I !== e; )
        X.push(I), I = d, Nt(), t.charCodeAt(d) === 44 ? (we = ie, d++) : (we = e, H === 0 && he(jt)), we !== e ? (Nt(), ge = y(), ge !== e ? I = ge : (d = I, I = e)) : (d = I, I = e);
      C = b, b = pr(V, X);
    } else
      d = b, b = e;
    return b === e && (b = Nt()), b;
  }
  function Vr() {
    var b, V, X, I;
    return b = Rn(), b === e && (b = sn(), b === e && (b = Dn(), b === e && (b = un(), b === e && (b = d, t.charCodeAt(d) === 40 ? (V = N, d++) : (V = e, H === 0 && he(Ve)), V !== e ? (Nt(), X = y(), X !== e ? (Nt(), t.charCodeAt(d) === 41 ? (I = W, d++) : (I = e, H === 0 && he(D)), I !== e ? (C = b, b = Fr(X)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e))))), b;
  }
  function sn() {
    var b, V, X, I;
    return H++, b = d, t.charCodeAt(d) === 39 ? (V = de, d++) : (V = e, H === 0 && he(kt)), V !== e ? (X = ln(), t.charCodeAt(d) === 39 ? (I = de, d++) : (I = e, H === 0 && he(kt)), I !== e ? (C = b, b = zr(X)) : (d = b, b = e)) : (d = b, b = e), H--, b === e && (V = e, H === 0 && he(gt)), b;
  }
  function ln() {
    var b, V, X;
    for (b = d, V = [], X = Cn(); X !== e; )
      V.push(X), X = Cn();
    return C = b, V = gr(V), b = V, b;
  }
  function Cn() {
    var b, V, X, I, we;
    if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, H === 0 && he(ke)), V !== e ? (X = Nt(), I = y(), I !== e ? (Nt(), t.charCodeAt(d) === 125 ? (we = a, d++) : (we = e, H === 0 && he(et)), we !== e ? (C = b, b = $e(I)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.substr(d, 3) === l ? (V = l, d += 3) : (V = e, H === 0 && he(_e)), V !== e && (C = b, V = ct()), b = V, b === e && (b = d, V = d, H++, t.charCodeAt(d) === 92 ? (X = u, d++) : (X = e, H === 0 && he(Ie)), X === e && (t.charCodeAt(d) === 39 ? (X = de, d++) : (X = e, H === 0 && he(kt)), X === e && (t.substr(d, 2) === s ? (X = s, d += 2) : (X = e, H === 0 && he(ke)))), H--, X === e ? V = void 0 : (d = V, V = e), V !== e ? (t.length > d ? (X = t.charAt(d), d++) : (X = e, H === 0 && he(ue)), X !== e ? (C = b, b = Mt()) : (d = b, b = e)) : (d = b, b = e), b === e))) {
      if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, H === 0 && he(ke)), V !== e) {
        if (X = [], ze.test(t.charAt(d)) ? (I = t.charAt(d), d++) : (I = e, H === 0 && he(St)), I !== e)
          for (; I !== e; )
            X.push(I), ze.test(t.charAt(d)) ? (I = t.charAt(d), d++) : (I = e, H === 0 && he(St));
        else
          X = e;
        X !== e ? (t.charCodeAt(d) === 125 ? (I = a, d++) : (I = e, H === 0 && he(et)), I !== e ? (C = b, b = br()) : (d = b, b = e)) : (d = b, b = e);
      } else
        d = b, b = e;
      b === e && (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, H === 0 && he(ke)), V !== e && (C = b, V = wr()), b = V, b === e && (b = d, t.charCodeAt(d) === 92 ? (V = u, d++) : (V = e, H === 0 && he(Ie)), V !== e ? (t.substr(d, 2) === s ? (X = s, d += 2) : (X = e, H === 0 && he(ke)), X !== e ? (C = b, b = nt(X)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = u, d++) : (V = e, H === 0 && he(Ie)), V !== e ? (t.length > d ? (X = t.charAt(d), d++) : (X = e, H === 0 && he(ue)), X !== e ? (C = b, b = le(X)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = u, d++) : (V = e, H === 0 && he(Ie)), V !== e && (C = b, V = Ct()), b = V))));
    }
    return b;
  }
  function un() {
    var b, V, X;
    if (H++, b = d, t.charCodeAt(d) === 45 ? d++ : H === 0 && he(ot), V = [], be.test(t.charAt(d)) ? (X = t.charAt(d), d++) : (X = e, H === 0 && he(Y)), X !== e)
      for (; X !== e; )
        V.push(X), be.test(t.charAt(d)) ? (X = t.charAt(d), d++) : (X = e, H === 0 && he(Y));
    else
      V = e;
    return V !== e ? (C = b, b = rr()) : (d = b, b = e), H--, b === e && H === 0 && he(rt), b;
  }
  function Dn() {
    var b, V, X, I, we, ge, Pt, Ht, Xr;
    for (H++, b = d, t.charCodeAt(d) === 45 ? d++ : H === 0 && he(ot), V = [], be.test(t.charAt(d)) ? (X = t.charAt(d), d++) : (X = e, H === 0 && he(Y)); X !== e; )
      V.push(X), be.test(t.charAt(d)) ? (X = t.charAt(d), d++) : (X = e, H === 0 && he(Y));
    if (t.charCodeAt(d) === 46 ? (X = z, d++) : (X = e, H === 0 && he(at)), X !== e) {
      if (I = [], be.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, H === 0 && he(Y)), we !== e)
        for (; we !== e; )
          I.push(we), be.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, H === 0 && he(Y));
      else
        I = e;
      if (I !== e) {
        if (we = d, t.charCodeAt(d) === 101 ? (ge = je, d++) : (ge = e, H === 0 && he(Dt)), ge === e && (t.charCodeAt(d) === 69 ? (ge = Ee, d++) : (ge = e, H === 0 && he(Gt))), ge !== e) {
          if (t.charCodeAt(d) === 43 ? (Pt = ee, d++) : (Pt = e, H === 0 && he(wt)), Pt === e && (t.charCodeAt(d) === 45 ? (Pt = fe, d++) : (Pt = e, H === 0 && he(ot))), Pt === e && (Pt = null), Ht = [], be.test(t.charAt(d)) ? (Xr = t.charAt(d), d++) : (Xr = e, H === 0 && he(Y)), Xr !== e)
            for (; Xr !== e; )
              Ht.push(Xr), be.test(t.charAt(d)) ? (Xr = t.charAt(d), d++) : (Xr = e, H === 0 && he(Y));
          else
            Ht = e;
          Ht !== e ? (ge = [ge, Pt, Ht], we = ge) : (d = we, we = e);
        } else
          d = we, we = e;
        we === e && (we = null), C = b, b = hr();
      } else
        d = b, b = e;
    } else
      d = b, b = e;
    if (b === e) {
      if (b = d, t.charCodeAt(d) === 45 ? d++ : H === 0 && he(ot), V = [], be.test(t.charAt(d)) ? (X = t.charAt(d), d++) : (X = e, H === 0 && he(Y)), X !== e)
        for (; X !== e; )
          V.push(X), be.test(t.charAt(d)) ? (X = t.charAt(d), d++) : (X = e, H === 0 && he(Y));
      else
        V = e;
      if (V !== e)
        if (t.charCodeAt(d) === 101 ? (X = je, d++) : (X = e, H === 0 && he(Dt)), X === e && (t.charCodeAt(d) === 69 ? (X = Ee, d++) : (X = e, H === 0 && he(Gt))), X !== e) {
          if (t.charCodeAt(d) === 43 ? (I = ee, d++) : (I = e, H === 0 && he(wt)), I === e && (t.charCodeAt(d) === 45 ? (I = fe, d++) : (I = e, H === 0 && he(ot))), I === e && (I = null), we = [], be.test(t.charAt(d)) ? (ge = t.charAt(d), d++) : (ge = e, H === 0 && he(Y)), ge !== e)
            for (; ge !== e; )
              we.push(ge), be.test(t.charAt(d)) ? (ge = t.charAt(d), d++) : (ge = e, H === 0 && he(Y));
          else
            we = e;
          we !== e ? (C = b, b = Sr()) : (d = b, b = e);
        } else
          d = b, b = e;
      else
        d = b, b = e;
    }
    return H--, b === e && H === 0 && he(Vt), b;
  }
  function Rn() {
    var b, V, X, I, we, ge, Pt, Ht, Xr, Tr, Zr;
    if (b = d, Fe.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, H === 0 && he(Jt)), V !== e) {
      if (X = [], I = [], Ge.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, H === 0 && he(ve)), we !== e)
        for (; we !== e; )
          I.push(we), Ge.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, H === 0 && he(ve));
      else
        I = e;
      for (I === e && (I = d, t.charCodeAt(d) === 46 ? (we = z, d++) : (we = e, H === 0 && he(at)), we !== e ? (ge = d, H++, Pt = d, Ht = Nt(), Xr = Sn(), Xr !== e ? (Tr = Nt(), t.charCodeAt(d) === 40 ? (Zr = N, d++) : (Zr = e, H === 0 && he(Ve)), Zr !== e ? (Ht = [Ht, Xr, Tr, Zr], Pt = Ht) : (d = Pt, Pt = e)) : (d = Pt, Pt = e), H--, Pt === e ? ge = void 0 : (d = ge, ge = e), ge !== e ? (we = [we, ge], I = we) : (d = I, I = e)) : (d = I, I = e)); I !== e; ) {
        if (X.push(I), I = [], Ge.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, H === 0 && he(ve)), we !== e)
          for (; we !== e; )
            I.push(we), Ge.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, H === 0 && he(ve));
        else
          I = e;
        I === e && (I = d, t.charCodeAt(d) === 46 ? (we = z, d++) : (we = e, H === 0 && he(at)), we !== e ? (ge = d, H++, Pt = d, Ht = Nt(), Xr = Sn(), Xr !== e ? (Tr = Nt(), t.charCodeAt(d) === 40 ? (Zr = N, d++) : (Zr = e, H === 0 && he(Ve)), Zr !== e ? (Ht = [Ht, Xr, Tr, Zr], Pt = Ht) : (d = Pt, Pt = e)) : (d = Pt, Pt = e), H--, Pt === e ? ge = void 0 : (d = ge, ge = e), ge !== e ? (we = [we, ge], I = we) : (d = I, I = e)) : (d = I, I = e));
      }
      C = b, b = v();
    } else
      d = b, b = e;
    return b;
  }
  function Sn() {
    var b, V, X, I;
    if (b = d, Fe.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, H === 0 && he(Jt)), V !== e) {
      for (X = [], Ge.test(t.charAt(d)) ? (I = t.charAt(d), d++) : (I = e, H === 0 && he(ve)); I !== e; )
        X.push(I), Ge.test(t.charAt(d)) ? (I = t.charAt(d), d++) : (I = e, H === 0 && he(ve));
      C = b, b = re();
    } else
      d = b, b = e;
    return b;
  }
  function Nt() {
    var b, V;
    for (H++, b = [], Ze.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, H === 0 && he(ft)); V !== e; )
      b.push(V), Ze.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, H === 0 && he(ft));
    return H--, V = e, H === 0 && he(We), b;
  }
  if (Lt = i(), Lt !== e && d === t.length)
    return Lt;
  throw Lt !== e && d < t.length && he(yr()), wn(
    Ot,
    Re < t.length ? t.charAt(Re) : null,
    Re < t.length ? Gr(Re, Re + 1) : Gr(Re, Re)
  );
}
const a_ = 2147483647, u_ = -2147483648, c_ = Number.MAX_VALUE, f_ = Number.MIN_VALUE, Be = "string", Pe = "integer", _t = "number", Ur = "boolean", dn = "color", $n = "url", Mr = "datetime", cr = "dict", fr = "array", d_ = "function";
function no(t, r) {
  var e;
  switch ((e = r[t.type]) == null || e.call(r, t), t.type) {
    case "TemplateLiteral":
      t.expressions.forEach((n) => {
        no(n, r);
      });
      break;
    case "BinaryExpression":
    case "LogicalExpression":
      no(t.left, r), no(t.right, r);
      break;
    case "UnaryExpression":
      no(t.argument, r);
      break;
    case "ConditionalExpression":
      no(t.test, r), no(t.consequent, r), no(t.alternate, r);
      break;
    case "TryExpression":
      no(t.test, r), no(t.alternate, r);
      break;
    case "CallExpression":
      t.arguments.forEach((n) => {
        no(n, r);
      });
      break;
    case "MethodExpression":
      no(t.object, r), t.arguments.forEach((n) => {
        no(n, r);
      });
      break;
  }
}
function Yf(t, r) {
  for (; t.length < r; )
    t = "0" + t;
  return t;
}
function _r(t, r = 1, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = uo(t);
  return n ? (n.a *= r, Ql(n)) : e;
}
function __(t, r, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = uo(t);
  return n ? (n.a = r, Ql(n)) : e;
}
function Ql(t) {
  return t.a === 255 ? `#${[t.r, t.g, t.b].map((r) => Yf(Math.round(r).toString(16), 2)).join("")}` : `rgba(${t.r},${t.g},${t.b},${(t.a / 255).toFixed(2)})`;
}
function uo(t) {
  const r = (
    // #AARRGGBB
    t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #ARGB
    t.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])$/i) || // #RRGGBB
    t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #RGB
    t.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)
  );
  if (r) {
    if (r.length === 5) {
      const [u, c, f, _, h] = r, m = f.length === 2 ? f : f + f, p = _.length === 2 ? _ : _ + _, k = h.length === 2 ? h : h + h, w = c.length === 2 ? c : c + c;
      return {
        a: parseInt(w, 16),
        r: parseInt(m, 16),
        g: parseInt(p, 16),
        b: parseInt(k, 16)
      };
    }
    const [e, n, o, i] = r, s = n.length === 2 ? n : n + n, a = o.length === 2 ? o : o + o, l = i.length === 2 ? i : i + i;
    return {
      a: 255,
      r: parseInt(s, 16),
      g: parseInt(a, 16),
      b: parseInt(l, 16)
    };
  }
  return null;
}
class xl extends Error {
}
function Es(t) {
  return t.type === "url" || t.type === "color" ? {
    type: "string",
    value: t.value
  } : t;
}
function Kf(t) {
  return t.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, "");
}
function di(t, r) {
  if (t.type === "string")
    return t.value;
  if (t.type === "integer")
    return String(t.value);
  if (t.type === "number") {
    let e = String(t.value);
    return e.includes(".") || (e.includes("e") ? e = e.replace("e", ".0e") : e += ".0"), e = e.replace(/e\+?/i, "E"), e;
  } else {
    if (t.type === "boolean")
      return t.value ? "true" : "false";
    if (t.type === "datetime")
      return Kf(t.value);
    if (t.type === "color")
      return pi(Bs(t.value));
    if (t.type === "url")
      return t.value;
    if ((t.type === "dict" || t.type === "array") && r)
      return JSON.stringify(t.value);
    if (t.type === "dict")
      return "<dict>";
    if (t.type === "array")
      return "<array>";
    if (t.type === "function")
      return t.value[0].name || "Function";
  }
  throw new Error(`Unexpected type ${t.type}`);
}
function pn(t) {
  let r = di(t, !1);
  return t.type === "string" && (r = "'" + r.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'"), r;
}
function Xn(t) {
  return t === "datetime" ? "DateTime" : t.charAt(0).toUpperCase() + t.substring(1);
}
function _i(t, r) {
  return gn(r);
}
function Mn(t, r) {
  if (r < Gi || r > Ui)
    throw new Error("Integer overflow.");
}
function co(t) {
  if (typeof t != "string")
    throw new Error("Incorrect url value.");
  try {
    new URL(t);
  } catch {
    throw new Error("Incorrect url value.");
  }
}
function p_(t) {
  try {
    return co(t), !0;
  } catch {
    return !1;
  }
}
function g_(t) {
  const r = /* @__PURE__ */ new Set();
  return no(t, {
    Variable(e) {
      r.add(e.id.name);
    }
  }), [...r];
}
function En(t, r) {
  throw new xl(`Failed to evaluate [${t}]. ${r}`);
}
function h_(t, r) {
  throw new Error(r);
}
function Bs(t) {
  const r = uo(t);
  if (r)
    return r;
  throw new Error("Unable to convert value to Color, expected format #AARRGGBB.");
}
function pi(t) {
  return `#${[t.a, t.r, t.g, t.b].map((r) => {
    if (r < 0 || r > 255)
      throw new Error("Value out of range 0..1.");
    return Yf(Math.round(r).toString(16), 2);
  }).join("").toUpperCase()}`;
}
function Xo(t) {
  return pi(Bs(t));
}
function jl(t) {
  return {
    type: _t,
    value: Number(t.value)
  };
}
const m_ = {
  string: "string",
  number: "number",
  integer: "number",
  boolean: "boolean",
  color: "string",
  url: "string",
  array: "array",
  dict: "object",
  datetime: "never"
};
function Hs(t, r, e) {
  if (e === "function")
    throw new Error("Cannot convert function");
  const n = m_[e];
  let o = typeof r;
  if (n === "array" && !Array.isArray(r) || n !== "array" && o !== n || o === "object" && r === null)
    throw o === "object" && (Array.isArray(r) ? o = "array" : r === null ? o = "null" : o = "dict"), new Error(`Incorrect value type: expected ${Xn(e)}, got ${Xn(o)}.`);
  if (n === "number" && e === "integer") {
    t && Mn(t, r);
    try {
      r = gn(r);
    } catch {
      throw new Error("Cannot convert value to integer.");
    }
  }
  return n === "string" && e === "color" && (r = Xo(r)), n === "string" && e === "url" && co(r), n === "boolean" && e === Ur && (r = r ? 1 : 0), {
    type: e,
    value: r
  };
}
function b_(t) {
  return t.type === "number" || t.type === "integer" ? Number(t.value) : t.type === "boolean" ? !!t.value : t.value;
}
function Ws(t) {
  return b_(
    Hs(void 0, t.value, t.type)
  );
}
const Bi = /* @__PURE__ */ new Map(), Cl = /* @__PURE__ */ new Map(), as = /* @__PURE__ */ new Map(), El = /* @__PURE__ */ new Map();
function U(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = Bi.get(t) || [];
  Bi.has(t) || Bi.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  Cl.set(i, n);
}
function Br(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = as.get(t) || [];
  as.has(t) || as.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  El.set(i, n);
}
function y_(t, r, e) {
  const n = t.args.length;
  let o = t.args.length, i = 0;
  const s = t.args[t.args.length - 1];
  if (typeof s == "object" && s.isVararg && (o = 1 / 0), r.length < n)
    return {
      type: "few",
      expected: n,
      found: r.length,
      def: t,
      hasOverloads: e
    };
  if (r.length > o)
    return {
      type: "many",
      expected: o,
      found: r.length,
      def: t,
      hasOverloads: e
    };
  for (let a = 0; a < r.length; ++a) {
    let l = a >= t.args.length ? t.args[t.args.length - 1] : t.args[a];
    if (typeof l != "object" && (l = {
      type: l
    }), l.type === _t && r[a].type === Pe) {
      ++i;
      continue;
    }
    if (l.type !== r[a].type)
      return {
        type: "mismatch",
        expected: l.type,
        found: r[a].type,
        def: t,
        hasOverloads: e
      };
  }
  return {
    type: "match",
    conversions: i
  };
}
function Xf(t, r) {
  if (!t)
    return {
      type: "missing"
    };
  let e = null, n = null;
  for (let o = 0; o < t.length; ++o) {
    const i = y_(t[o], r, t.length > 1);
    if (i.type === "match") {
      (!n || n.conversions > i.conversions) && (n = {
        func: t[o],
        conversions: i.conversions
      });
      continue;
    }
    e || (e = i);
  }
  if (!n) {
    if (e)
      return e;
    throw new Error("Missing function");
  }
  return n;
}
function Al(t, r, e) {
  return Xf(t.get(r), e);
}
function Zf(t, r) {
  return r.map((e, n) => {
    let o = n >= t.args.length ? t.args[t.args.length - 1] : t.args[n];
    return typeof o != "object" && (o = {
      type: o
    }), o.type === _t && e.type === Pe ? jl(e) : e;
  });
}
function ya(t, r) {
  return t + ":" + r.args.map((e) => typeof e == "string" ? e : e.type).join("#");
}
function Wn(t, r) {
  return {
    type: Be,
    value: di(r, !0)
  };
}
function wa(t, r) {
  const e = Number(r.value);
  if (Number.isNaN(e) || !Number.isFinite(e))
    throw new Error("Unable to convert value to Number.");
  if (r.value === "")
    throw new Error("Unable to convert value to Number.");
  return {
    type: _t,
    value: e
  };
}
function w_(t, r) {
  if (r.value > Ui || r.value < Gi)
    throw new Error("Unable to convert value to Integer.");
  const e = r.value - r.value % 1;
  return {
    type: Pe,
    value: gn(e)
  };
}
function k_(t, r) {
  let e;
  try {
    e = gn(r.value);
  } catch {
    throw new Error("Unable to convert value to Integer.");
  }
  return {
    type: Pe,
    value: e
  };
}
function v_(t, r) {
  return {
    type: Pe,
    value: gn(r.value ? 1 : 0)
  };
}
function j_(t, r) {
  const e = Number(r.value);
  if (e !== 1 && e !== 0)
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Ur,
    value: e
  };
}
function C_(t, r) {
  if (r.value !== "true" && r.value !== "false")
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Ur,
    value: r.value === "true" ? 1 : 0
  };
}
function E_(t, r) {
  return {
    type: dn,
    value: Xo(r.value)
  };
}
function A_(t, r) {
  return co(r.value), {
    type: $n,
    value: r.value
  };
}
function S_(t, r) {
  try {
    return {
      type: Be,
      value: encodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to encodeUri string.");
  }
}
function V_(t, r) {
  try {
    return {
      type: Be,
      value: decodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to decodeUri string.");
  }
}
function $l(t, r, e, n) {
  const o = t.variables.get(r.value);
  let i;
  return o && o.getType() === n ? (i = o.getValue(), t.storeUsedVars || (t.storeUsedVars = /* @__PURE__ */ new Set()), t.storeUsedVars.add(o)) : i = e.value, n === "color" ? i = Xo(i) : n === "url" && co(i), {
    type: n,
    // value is synced with type by params
    value: i
  };
}
function Qi(t, r, e) {
  return $l(t, r, e, e.type);
}
function ka(t, r, e) {
  return $l(t, r, e, "color");
}
function va(t, r, e) {
  return $l(t, r, e, "url");
}
function Qf(t, r) {
  for (let e = 0; e < r.length; ++e) {
    const n = t.charAt(e), o = r.charAt(e);
    if (n !== o && o)
      return o;
  }
  return "";
}
const As = 1234567890;
function ja(t) {
  const r = new Intl.NumberFormat(t, {
    maximumFractionDigits: 0
  }), e = new Intl.NumberFormat(t, {
    minimumFractionDigits: 1
  }), n = r.format(As), o = e.format(As);
  return Qf(n, o);
}
function F_(t) {
  const r = new Intl.NumberFormat(t, {
    useGrouping: !1
  }), e = new Intl.NumberFormat(t, {
    useGrouping: !0
  }), n = r.format(As), o = e.format(As);
  return Qf(n, o);
}
function Ho(t, r, e, n) {
  const o = e.value, i = o.replace(/,/g, "");
  if (!/^((#+)|(#*0+))(\.0*#*)?$/.test(i) && !/^#*0*\.((0*#*)|(#+))$/.test(i) || /,.*,/.test(o) || o.indexOf(",") > o.indexOf(".") && o.indexOf(".") > -1)
    throw new Error("Incorrect format pattern.");
  const s = o.split("."), a = s[0], l = s[1] || "", u = o.replace(/[^#0.]/g, "").split("."), c = u[0], f = u[1] || "", _ = a.indexOf(","), h = _ > -1 ? a.length - _ - 1 : -1;
  if (_ > -1 && h < 1 || l.indexOf(",") > -1)
    throw new Error("Incorrect format pattern.");
  try {
    let m = 0;
    for (; c[c.length - 1 - m] === "0"; )
      ++m;
    let p = 0;
    for (; f[p] === "0"; )
      ++p;
    let k = p;
    for (; f[k] === "#"; )
      ++k;
    let O = new Intl.NumberFormat((n == null ? void 0 : n.value) || void 0, {
      useGrouping: !1,
      minimumIntegerDigits: Math.min(Math.max(m, 1), 21),
      minimumFractionDigits: Math.min(Math.max(p, 0), 100),
      maximumFractionDigits: Math.min(Math.max(k, p, 0), 100),
      roundingMode: "halfEven"
    }).format(r.value);
    if (_ > -1 && h > 0) {
      const G = F_(n == null ? void 0 : n.value), L = ja(n == null ? void 0 : n.value);
      if (G && L) {
        const ee = O.split(L), fe = ee[0];
        let P = "";
        for (let Z = fe.length - 1; Z >= 0; --Z)
          P = fe[Z] + P, Z > 0 && (fe.length - Z) % h === 0 && (P = G + P);
        O = P + (ee.length > 1 ? L + ee[1] : "");
      }
    }
    if (p === 0 && k === 0 && o.endsWith(".")) {
      const G = ja(n == null ? void 0 : n.value);
      G && (O += G);
    }
    return {
      type: Be,
      value: O
    };
  } catch (m) {
    throw new Error("Incorrect or unsupported number format." + m + " " + (n == null ? void 0 : n.value) || void 0);
  }
}
function I_() {
  U("toString", [Pe], Wn), U("toString", [_t], Wn), U("toString", [Ur], Wn), U("toString", [dn], Wn), U("toString", [$n], Wn), U("toString", [Be], Wn), U("toString", [fr], Wn), U("toString", [cr], Wn), U("toNumber", [Pe], wa), U("toNumber", [Be], wa), U("toInteger", [_t], w_), U("toInteger", [Be], k_), U("toInteger", [Ur], v_), U("toBoolean", [Pe], j_), U("toBoolean", [Be], C_), U("toColor", [Be], E_), U("toUrl", [Be], A_), U("encodeUri", [Be], S_), U("decodeUri", [Be], V_), U("getIntegerValue", [Be, Pe], Qi), U("getNumberValue", [Be, _t], Qi), U("getBooleanValue", [Be, Ur], Qi), U("getStringValue", [Be, Be], Qi), U("getColorValue", [Be, dn], ka), U("getColorValue", [Be, Be], ka), U("getUrlValue", [Be, $n], va), U("getUrlValue", [Be, Be], va), Br("toString", [Pe], Wn), Br("toString", [_t], Wn), Br("toString", [Ur], Wn), Br("toString", [dn], Wn), Br("toString", [$n], Wn), Br("toString", [Be], Wn), Br("toString", [fr], Wn), Br("toString", [cr], Wn), U("decimalFormat", [Pe, Be], Ho), U("decimalFormat", [_t, Be], Ho), U("decimalFormat", [Pe, Be, Be], Ho), U("decimalFormat", [_t, Be, Be], Ho), Br("decimalFormat", [Pe, Be], Ho), Br("decimalFormat", [_t, Be], Ho), Br("decimalFormat", [Pe, Be, Be], Ho), Br("decimalFormat", [_t, Be, Be], Ho);
}
function Un(t, r) {
  return !t || !r ? t : t.padStart(r, "0");
}
const Sl = {
  G(t, r) {
    let e;
    return t < 4 ? e = "short" : t === 5 ? e = "narrow" : e = "long", r({
      era: e
    }, "era");
  },
  d(t, r) {
    return Un(r({
      day: "numeric"
    }, "day"), t > 1 ? t : 0);
  },
  D(t, r) {
    return Un(r({}, "dayofyear"), t > 1 ? t : 0);
  },
  F(t, r) {
    return Un(r({}, "dayofweekinmonth"), t > 1 ? t : 0);
  },
  M(t, r) {
    let e;
    return t === 1 ? e = "numeric" : t === 2 ? e = "2-digit" : t === 3 ? e = "short" : t === 5 ? e = "narrow" : e = "long", r({
      month: e,
      // to get a genitive case of month
      day: "numeric"
    }, "month");
  },
  y(t, r) {
    return Un(r({
      year: t === 2 ? "2-digit" : "numeric"
    }, "year"), t > 2 ? t : void 0);
  },
  Y(t, r) {
    return Un(r({
      year: t === 2 ? "2-digit" : "numeric"
    }, "weekyear"), t > 2 ? t : void 0);
  },
  u(t, r) {
    return Un(r({
      year: "numeric"
    }, "extendedyear"), t > 1 ? t : void 0);
  },
  E(t, r) {
    let e;
    return t <= 3 ? e = "short" : t === 5 ? e = "narrow" : e = "long", r({
      weekday: e
    }, "weekday");
  },
  e(t, r) {
    return t > 2 ? Sl.E(t, r) : Un(r({}, "weekdaynumeric"), t > 1 ? t : void 0);
  },
  w(t, r) {
    return Un(r({}, "week"), t > 1 ? t : void 0);
  },
  W(t, r) {
    return Un(r({}, "weekofmonth"), t > 1 ? t : void 0);
  },
  H(t, r) {
    const e = r({
      hour: "numeric",
      hour12: !1,
      hourCycle: "h23"
    }, "hour");
    if (!e)
      return;
    const n = String(Number(e) % 24);
    return Un(n, t > 1 ? t : void 0);
  },
  h(t, r) {
    return Un(r({
      hour: "numeric",
      hour12: !0,
      hourCycle: "h12"
    }, "hour"), t > 1 ? t : void 0);
  },
  K(t, r) {
    const e = r({
      hour: "numeric",
      hour12: !0,
      hourCycle: "h11"
    }, "hour");
    if (!e)
      return;
    const n = String(Number(e) % 12);
    return Un(n, t > 1 ? t : void 0);
  },
  k(t, r) {
    return Un(r({
      hour: "numeric",
      hour12: !1,
      hourCycle: "h24"
    }, "hour"), t > 2 ? t : void 0);
  },
  a(t, r) {
    return r({
      hour: "numeric",
      hour12: !0,
      hourCycle: "h11",
      dayPeriod: void 0
    }, "dayPeriod");
  },
  m(t, r) {
    return Un(r({
      minute: "numeric"
    }, "minute"), t > 1 ? t : void 0);
  },
  s(t, r) {
    return Un(r({
      second: "numeric"
    }, "second"), t > 1 ? t : void 0);
  },
  S(t, r) {
    const e = r({
      fractionalSecondDigits: Math.min(3, t)
    }, "fractionalSecond");
    return e && t > 3 ? e.padEnd(t, "0") : e;
  },
  z(t, r) {
    return r({
      timeZoneName: t === 4 ? "long" : "short"
    }, "timeZoneName");
  },
  Z(t, r) {
    const e = -Number(r({}, "timezoneoffset")), n = Math.abs(e / 60), o = Math.floor(n) * 100 + (n - Math.floor(n)) * 60;
    return (e >= 0 ? "+" : "-") + Un(String(o), 4);
  }
}, D_ = /(\w)\1*|''|'(''|[^'])+('|$)|./g, T_ = /^'([^]*?)'?$/, M_ = /''/g, P_ = /[a-zA-Z]/, ea = 1e3 * 60 * 60 * 24;
function N_(t) {
  const r = t.match(T_);
  return r ? r[1].replace(M_, "'") : t;
}
function Vl(t, r, e) {
  const n = t[r ? "getUTCDay" : "getDay"](), o = n < e ? e - n - 7 : e - n;
  return new Date(t.getTime() + ea * o);
}
function Ca(t, r, e) {
  const n = new Date(t);
  return n[r ? "setUTCDate" : "setDate"](1), n[r ? "setUTCMonth" : "setMonth"](0), Vl(n, r, e);
}
function Ea(t, r) {
  return Math.round((t.getTime() - r.getTime()) / ea);
}
function Aa(t, r, e) {
  let n = 0;
  const o = Ca(t, r || !1, e), i = new Date(t);
  i[r ? "setUTCFullYear" : "setFullYear"](t[r ? "getUTCFullYear" : "getFullYear"]() + 1);
  const s = Ca(i, r || !1, e), a = t.getTime() < o.getTime(), l = t.getTime() >= s.getTime();
  let u = t[r ? "getUTCFullYear" : "getFullYear"]();
  if (a) {
    --u, o[r ? "setUTCFullYear" : "setFullYear"](o[r ? "getUTCFullYear" : "getFullYear"]() - 1);
    const c = Ea(Vl(t, r, e), o);
    n = Math.round(c / 7) + 1;
  } else if (l)
    ++u, n = 1;
  else {
    const c = Ea(Vl(t, r, e), o);
    n = Math.round(c / 7) + 1;
  }
  return {
    week: n,
    year: u
  };
}
function z_(t, r, {
  locale: e,
  isUTC: n,
  weekStartDay: o = 0
} = {}) {
  const i = (s, a) => {
    if (a === "week") {
      const { week: c } = Aa(t, n || !1, o);
      return String(c);
    }
    if (a === "weekofmonth") {
      const c = t[n ? "getUTCDay" : "getDay"](), f = new Date(t);
      f[n ? "setUTCDate" : "setDate"](1);
      const _ = f[n ? "getUTCDay" : "getDay"](), h = t[n ? "getUTCDate" : "getDate"]();
      return String(Math.ceil(h / 7) + (c < _ ? 1 : 0));
    }
    if (a === "dayofweekinmonth") {
      const c = t[n ? "getUTCDate" : "getDate"]();
      return String(Math.ceil(c / 7));
    }
    if (a === "weekdaynumeric") {
      let c = t[n ? "getUTCDay" : "getDay"]();
      return c < o && (c += 7), String(c - o + 1);
    }
    if (a === "dayofyear") {
      const c = new Date(t);
      c[n ? "setUTCMonth" : "setMonth"](0), c[n ? "setUTCDate" : "setDate"](1), c[n ? "setUTCHours" : "setHours"](1), c[n ? "setUTCMinutes" : "setMinutes"](1), c[n ? "setUTCSeconds" : "setSeconds"](1);
      const f = Math.ceil((t.getTime() - c.getTime()) / ea);
      return String(f);
    }
    if (a === "weekyear") {
      let { year: c } = Aa(t, n || !1, o);
      return c < 1 && (c = 1 - c), s.year === "2-digit" ? String(c % 100) : String(c);
    }
    if (a === "extendedyear") {
      const c = t[n ? "getUTCFullYear" : "getFullYear"]();
      return s.year === "2-digit" ? String(c % 100) : String(c);
    }
    if (a === "timezoneoffset")
      return n ? "0" : String(t.getTimezoneOffset());
    n && (s.timeZone = "UTC");
    const u = new Intl.DateTimeFormat(e, s).formatToParts(t);
    for (let c = 0; c < u.length; ++c)
      if (u[c].type === a)
        return u[c].value;
  };
  return (r.match(D_) || []).map((s) => {
    if (s === "''")
      return "'";
    const a = s[0];
    if (a === "'")
      return N_(s);
    if (Sl[a])
      return Sl[a](s.length, i);
    if (a.match(P_))
      throw new Error(
        `Format string contains an unescaped latin alphabet character "${a}"`
      );
    return s;
  }).join("");
}
function R_(t) {
  const r = new Date(t);
  return r.setUTCMonth(r.getUTCMonth() + 1), r.setUTCDate(0), r.getUTCDate();
}
function O_(t, r) {
  return {
    type: Mr,
    value: new Date(Number(r.value) * 1e3)
  };
}
function L_(t, r) {
  const e = new Date(Number(r.value) * 1e3), n = e.getTimezoneOffset();
  return e.setMinutes(e.getMinutes() - n), {
    type: Mr,
    value: e
  };
}
function B_() {
  return {
    type: Mr,
    value: /* @__PURE__ */ new Date()
  };
}
function H_(t, r, e) {
  return {
    type: Mr,
    value: new Date(r.value.getTime() + Number(e.value))
  };
}
function W_(t, r, e) {
  const n = new Date(r.value);
  return n.setUTCFullYear(Number(e.value)), {
    type: Mr,
    value: n
  };
}
function U_(t, r, e) {
  const n = Number(e.value);
  if (n < 1 || n > 12)
    throw new Error(`Expecting month in [1..12], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMonth(n - 1), {
    type: Mr,
    value: o
  };
}
function G_(t, r, e) {
  const n = new Date(r.value), o = Number(e.value);
  if (o <= 0 && o !== -1 || o > R_(n))
    throw new Error(`Unable to set day ${o} for date ${di(r, !1)}.`);
  return n.setUTCDate(o === -1 ? 0 : o), {
    type: Mr,
    value: n
  };
}
function J_(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 23)
    throw new Error(`Expecting hours in [0..23], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCHours(n), {
    type: Mr,
    value: o
  };
}
function q_(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting minutes in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMinutes(n), {
    type: Mr,
    value: o
  };
}
function Y_(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting seconds in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCSeconds(n), {
    type: Mr,
    value: o
  };
}
function K_(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 999)
    throw new Error(`Expecting millis in [0..999], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMilliseconds(n), {
    type: Mr,
    value: o
  };
}
const Zo = (t) => (r, e) => {
  let o = new Date(e.value.getTime())[t]();
  return t === "getUTCMonth" ? ++o : t === "getUTCDay" && o === 0 && (o = 7), {
    type: Pe,
    value: gn(o)
  };
};
function xf(t) {
  return (r, e, n, o) => ({
    type: Be,
    value: z_(e.value, n.value, {
      locale: o == null ? void 0 : o.value,
      isUTC: t,
      weekStartDay: r.weekStartDay
    })
  });
}
const X_ = Zo("getUTCFullYear"), Z_ = Zo("getUTCMonth"), Q_ = Zo("getUTCDate"), x_ = Zo("getUTCDay"), $_ = Zo("getUTCHours"), ep = Zo("getUTCMinutes"), tp = Zo("getUTCSeconds"), rp = Zo("getUTCMilliseconds"), Sa = xf(!1), Va = xf(!0);
function np() {
  U("parseUnixTime", [Pe], O_), U("parseUnixTimeAsLocal", [Pe], L_), U("nowLocal", [], B_), U("addMillis", [Mr, Pe], H_), U("setYear", [Mr, Pe], W_), U("setMonth", [Mr, Pe], U_), U("setDay", [Mr, Pe], G_), U("setHours", [Mr, Pe], J_), U("setMinutes", [Mr, Pe], q_), U("setSeconds", [Mr, Pe], Y_), U("setMillis", [Mr, Pe], K_), U("getYear", [Mr], X_), U("getMonth", [Mr], Z_), U("getDay", [Mr], Q_), U("getDayOfWeek", [Mr], x_), U("getHours", [Mr], $_), U("getMinutes", [Mr], ep), U("getSeconds", [Mr], tp), U("getMillis", [Mr], rp), U("formatDateAsLocal", [Mr, Be], Sa), U("formatDateAsUTC", [Mr, Be], Va), U("formatDateAsLocalWithLocale", [Mr, Be, Be], Sa), U("formatDateAsUTCWithLocale", [Mr, Be, Be], Va);
}
function op(t) {
  return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function K(t, r = {}) {
  const e = t;
  return e.level = r.level || "error", r.additional && (e.additional = r.additional), e;
}
function ip(t, r) {
  return {
    type: Pe,
    value: gn(r.value.length)
  };
}
function sp(t, r, e) {
  return {
    type: Ur,
    value: r.value.includes(e.value) ? 1 : 0
  };
}
function lp(t, r, e, n) {
  if (n.value < e.value)
    throw new Error("Indexes should be in ascending order.");
  if (e.value < 0 || e.value > r.value.length || n.value < 0 || n.value > r.value.length)
    throw new Error("Indexes are out of bounds.");
  return {
    type: Be,
    value: r.value.substring(Number(e.value), Number(n.value))
  };
}
function ap(t, r, e, n) {
  let o;
  return e.value ? o = r.value.replace(new RegExp(op(e.value), "g"), n.value) : o = r.value, {
    type: Be,
    value: o
  };
}
function up(t, r, e) {
  return {
    type: Pe,
    value: gn(r.value.indexOf(e.value))
  };
}
function cp(t, r, e) {
  return {
    type: Pe,
    value: gn(r.value.lastIndexOf(e.value))
  };
}
function fp(t, r) {
  return {
    type: Be,
    value: r.value.trim()
  };
}
function dp(t, r) {
  return {
    type: Be,
    value: r.value.replace(/^\s+/, "")
  };
}
function _p(t, r) {
  return {
    type: Be,
    value: r.value.replace(/\s+$/, "")
  };
}
function pp(t, r) {
  return {
    type: Be,
    value: r.value.toUpperCase()
  };
}
function gp(t, r) {
  return {
    type: Be,
    value: r.value.toLowerCase()
  };
}
function $f(t, r, e, n) {
  if (!n.value.length)
    return t.warnings.push(K(new Error("String for padding is empty."), {
      level: "warn"
    })), "";
  let o = "";
  const i = r.type === Be ? r.value : di(r, !1);
  for (; o.length + i.length < e.value; )
    o += n.value;
  return o.length > 0 && o.length + i.length > e.value && (o = o.substring(0, Number(e.value) - Number(i.length))), o;
}
function Fa(t, r, e, n) {
  const o = $f(t, r, e, n);
  return {
    type: Be,
    value: o + di(r, !1)
  };
}
function Ia(t, r, e, n) {
  const o = $f(t, r, e, n);
  return {
    type: Be,
    value: di(r, !1) + o
  };
}
function hp(t, r, e) {
  let n;
  try {
    n = new RegExp(e.value);
  } catch {
    throw new Error("Invalid regular expression.");
  }
  return {
    type: Ur,
    value: n.test(r.value) ? 1 : 0
  };
}
function mp(t, r) {
  return {
    type: Be,
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping
    value: r.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  };
}
function bp() {
  U("len", [Be], ip), U("contains", [Be, Be], sp), U("substring", [Be, Pe, Pe], lp), U("replaceAll", [Be, Be, Be], ap), U("index", [Be, Be], up), U("lastIndex", [Be, Be], cp), U("trim", [Be], fp), U("trimLeft", [Be], dp), U("trimRight", [Be], _p), U("toUpperCase", [Be], pp), U("toLowerCase", [Be], gp), U("padStart", [Be, Pe, Be], Fa), U("padStart", [Pe, Pe, Be], Fa), U("padEnd", [Be, Pe, Be], Ia), U("padEnd", [Pe, Pe, Be], Ia), U("testRegex", [Be, Be], hp), U("encodeRegex", [Be], mp);
}
function yp(t, r, e) {
  if (e.value === li)
    throw new Error("Division by zero is not supported.");
  let n = r.value / e.value;
  return n = _i(t, n), Mn(t, n), {
    type: Pe,
    value: n
  };
}
function wp(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value / e.value;
  return {
    type: _t,
    value: n
  };
}
function kp(t, r, e) {
  if (e.value === li)
    throw new Error("Division by zero is not supported.");
  let n = r.value % e.value;
  return n = _i(t, n), Mn(t, n), {
    type: Pe,
    value: n
  };
}
function vp(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value % e.value;
  return {
    type: _t,
    value: n
  };
}
function jp(t, ...r) {
  let e = r.length ? r[0].value : li;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value, e = _i(t, e), Mn(t, e);
  return {
    type: Pe,
    value: e
  };
}
function Cp(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value;
  return {
    type: _t,
    value: e
  };
}
function Ep(t, ...r) {
  let e = r.length ? r[0].value : li;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value, e = _i(t, e), Mn(t, e);
  return {
    type: Pe,
    value: e
  };
}
function Ap(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value;
  return {
    type: _t,
    value: e
  };
}
function Sp(t, ...r) {
  let e = li;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value, e = _i(t, e), Mn(t, e);
  return {
    type: Pe,
    value: e
  };
}
function Vp(t, ...r) {
  let e = 0;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value;
  return {
    type: _t,
    value: e
  };
}
function Fp(t, r) {
  const e = Jf(r.value);
  return Mn(t, e), {
    type: r.type,
    value: e
  };
}
function Ip(t, r) {
  const e = Math.abs(r.value);
  return {
    type: _t,
    value: e
  };
}
function Dp(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  let e = r[0].value;
  for (let n = 1; n < r.length; ++n)
    r[n].value > e && (e = r[n].value);
  return {
    type: Pe,
    value: e
  };
}
function Tp(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: _t,
    value: Math.max(...r.map((e) => e.value))
  };
}
function Mp(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  let e = r[0].value;
  for (let n = 1; n < r.length; ++n)
    r[n].value < e && (e = r[n].value);
  return {
    type: Pe,
    value: e
  };
}
function Pp(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: _t,
    value: Math.min(...r.map((e) => e.value))
  };
}
function Np() {
  return {
    type: _t,
    value: c_
  };
}
function zp() {
  return {
    type: _t,
    value: f_
  };
}
function Rp(t) {
  return Mn(t, Ui), {
    type: Pe,
    value: Ui
  };
}
function Op(t) {
  return Mn(t, Gi), {
    type: Pe,
    value: Gi
  };
}
function Lp(t, r) {
  const e = Math.sign(r.value);
  return {
    type: _t,
    // js treats Math.round(-0.5) as 0, which is different to other platforms
    value: e * Math.round(Math.abs(r.value))
  };
}
function Bp(t, r) {
  return {
    type: _t,
    value: Math.floor(r.value)
  };
}
function Hp(t, r) {
  return {
    type: _t,
    value: Math.ceil(r.value)
  };
}
function Wp(t, r) {
  return {
    type: Pe,
    value: qf(r.value)
  };
}
function Up(t, r) {
  return {
    type: _t,
    value: Math.sign(r.value)
  };
}
function Gp(t, r, e) {
  let n;
  if (e.value === li)
    n = r.value;
  else if (r.value === li)
    n = gn(0);
  else {
    const o = qf(e.value);
    n = Jf(r.value) * o;
  }
  return Mn(t, n), {
    type: Pe,
    value: n
  };
}
function Jp(t, r, e) {
  let n = Math.sign(e.value);
  n === 0 && (n = Object.is(n, 0) ? 1 : -1);
  const o = Math.abs(r.value) * n;
  return {
    type: _t,
    value: o
  };
}
function qp() {
  U("div", [Pe, Pe], yp), U("div", [_t, _t], wp), U("mod", [Pe, Pe], kp), U("mod", [_t, _t], vp), U("mul", [{
    type: Pe,
    isVararg: !0
  }], jp), U("mul", [{
    type: _t,
    isVararg: !0
  }], Cp), U("sub", [{
    type: Pe,
    isVararg: !0
  }], Ep), U("sub", [{
    type: _t,
    isVararg: !0
  }], Ap), U("sum", [{
    type: Pe,
    isVararg: !0
  }], Sp), U("sum", [{
    type: _t,
    isVararg: !0
  }], Vp), U("abs", [Pe], Fp), U("abs", [_t], Ip), U("max", [{
    type: Pe,
    isVararg: !0
  }], Dp), U("max", [{
    type: _t,
    isVararg: !0
  }], Tp), U("min", [{
    type: Pe,
    isVararg: !0
  }], Mp), U("min", [{
    type: _t,
    isVararg: !0
  }], Pp), U("maxNumber", [], Np), U("minNumber", [], zp), U("maxInteger", [], Rp), U("minInteger", [], Op), U("round", [_t], Lp), U("floor", [_t], Bp), U("ceil", [_t], Hp), U("signum", [Pe], Wp), U("signum", [_t], Up), U("copySign", [Pe, Pe], Gp), U("copySign", [_t, _t], Jp);
}
function Us(t) {
  return (r, e) => {
    const n = Bs(e.value);
    return {
      type: _t,
      value: n[t] / 255
    };
  };
}
function Gs(t) {
  return (r, e, n) => {
    const o = Bs(e.value);
    return o[t] = n.value * 255, {
      type: dn,
      value: pi(o)
    };
  };
}
const Da = Us("a"), Ta = Us("r"), Ma = Us("g"), Pa = Us("b"), Na = Gs("a"), za = Gs("r"), Ra = Gs("g"), Oa = Gs("b");
function Yp(t, r, e, n) {
  const o = {
    a: 255,
    r: r.value * 255,
    g: e.value * 255,
    b: n.value * 255
  };
  return {
    type: dn,
    value: pi(o)
  };
}
function Kp(t, r, e, n, o) {
  const i = {
    a: r.value * 255,
    r: e.value * 255,
    g: n.value * 255,
    b: o.value * 255
  };
  return {
    type: dn,
    value: pi(i)
  };
}
function Xp() {
  U("getColorAlpha", [Be], Da), U("getColorAlpha", [dn], Da), U("getColorRed", [Be], Ta), U("getColorRed", [dn], Ta), U("getColorGreen", [Be], Ma), U("getColorGreen", [dn], Ma), U("getColorBlue", [Be], Pa), U("getColorBlue", [dn], Pa), U("setColorAlpha", [Be, _t], Na), U("setColorAlpha", [dn, _t], Na), U("setColorRed", [Be, _t], za), U("setColorRed", [dn, _t], za), U("setColorGreen", [Be, _t], Ra), U("setColorGreen", [dn, _t], Ra), U("setColorBlue", [Be, _t], Oa), U("setColorBlue", [dn, _t], Oa), U("rgb", [_t, _t, _t], Yp), U("argb", [_t, _t, _t, _t], Kp);
}
function Qo(t, r, e, n) {
  if (r.value < 0)
    throw new Error("Expecting non-negative number of milliseconds.");
  let o = gn(r.value) / gn(e);
  return Mn(t, o), n && (o = gn(o) % gn(n)), {
    type: Pe,
    value: o
  };
}
const ed = 1e3, Zp = 60, td = 1e3 * 60, Qp = 60, rd = 1e3 * 60 * 60, xp = 24, $p = 1e3 * 60 * 60 * 24, eg = 1e3 * 60 * 60 * 24 * 7;
function tg(t, r) {
  return Qo(t, r, ed, Zp);
}
function rg(t, r) {
  return Qo(t, r, ed);
}
function ng(t, r) {
  return Qo(t, r, td, Qp);
}
function og(t, r) {
  return Qo(t, r, td);
}
function ig(t, r) {
  return Qo(t, r, rd, xp);
}
function sg(t, r) {
  return Qo(t, r, rd);
}
function lg(t, r) {
  return Qo(t, r, $p);
}
function ag(t, r) {
  return Qo(t, r, eg);
}
function ug() {
  U("getIntervalSeconds", [Pe], tg), U("getIntervalTotalSeconds", [Pe], rg), U("getIntervalMinutes", [Pe], ng), U("getIntervalTotalMinutes", [Pe], og), U("getIntervalHours", [Pe], ig), U("getIntervalTotalHours", [Pe], sg), U("getIntervalTotalDays", [Pe], lg), U("getIntervalTotalWeeks", [Pe], ag);
}
function cg(t, r) {
  let e = t;
  for (let n = 0; n < r.length; ++n) {
    if (!e)
      throw new Error(`Missing property "${r[n]}" in the dict.`);
    const o = e[r[n]];
    if (o === void 0)
      throw new Error(`Missing property "${r[n]}" in the dict.`);
    e = o;
  }
  return e;
}
function xo(t) {
  return (r, e, ...n) => {
    if (n.length === 0)
      throw new Error("Non empty argument list is required.");
    const o = cg(e.value, n.map((i) => i.value));
    return Hs(r, o, t);
  };
}
function Fi(t, r) {
  return (e, n, o, ...i) => {
    try {
      return t(e, o, ...i);
    } catch {
      let a = n.value;
      return r === "color" ? a = Xo(a) : r === "url" && co(a), {
        type: r,
        value: a
      };
    }
  };
}
const us = xo(Be), cs = xo(_t), fs = xo(Pe), ds = xo(Ur), _s = xo(dn), ps = xo($n), Fl = xo(fr), Il = xo(cr), La = Fi(us, Be), Ba = Fi(cs, _t), Ha = Fi(fs, Pe), Wa = Fi(ds, Ur), xi = Fi(_s, dn), $i = Fi(ps, $n);
function fg(t, r, ...e) {
  try {
    return Fl(t, r, ...e);
  } catch {
    return {
      type: fr,
      value: []
    };
  }
}
function dg(t, r, ...e) {
  try {
    return Il(t, r, ...e);
  } catch {
    return {
      type: cr,
      value: {}
    };
  }
}
function _g(t, r, e) {
  return {
    type: Ur,
    value: e.value in r.value ? 1 : 0
  };
}
function pg(t, r) {
  return {
    type: Ur,
    value: Object.keys(r.value).length ? 0 : 1
  };
}
function gg(t, r) {
  return {
    type: Pe,
    value: gn(Object.keys(r.value).length)
  };
}
function Ua(t, r) {
  return {
    type: fr,
    value: Object.keys(r.value)
  };
}
function Ga(t, r) {
  return {
    type: fr,
    value: Object.values(r.value)
  };
}
function hg() {
  const t = {
    type: Be,
    isVararg: !0
  };
  U("getDictString", [cr, t], us), U("getStringFromDict", [cr, t], us), U("getDictNumber", [cr, t], cs), U("getNumberFromDict", [cr, t], cs), U("getDictInteger", [cr, t], fs), U("getIntegerFromDict", [cr, t], fs), U("getDictBoolean", [cr, t], ds), U("getBooleanFromDict", [cr, t], ds), U("getDictColor", [cr, t], _s), U("getColorFromDict", [cr, t], _s), U("getDictUrl", [cr, t], ps), U("getUrlFromDict", [cr, t], ps), U("getDictOptString", [Be, cr, t], La), U("getOptStringFromDict", [Be, cr, t], La), U("getDictOptNumber", [_t, cr, t], Ba), U("getOptNumberFromDict", [_t, cr, t], Ba), U("getDictOptInteger", [Pe, cr, t], Ha), U("getOptIntegerFromDict", [Pe, cr, t], Ha), U("getDictOptBoolean", [Ur, cr, t], Wa), U("getOptBooleanFromDict", [Ur, cr, t], Wa), U("getDictOptColor", [dn, cr, t], xi), U("getOptColorFromDict", [dn, cr, t], xi), U("getDictOptColor", [Be, cr, t], xi), U("getOptColorFromDict", [Be, cr, t], xi), U("getDictOptUrl", [Be, cr, t], $i), U("getOptUrlFromDict", [Be, cr, t], $i), U("getDictOptUrl", [$n, cr, t], $i), U("getOptUrlFromDict", [$n, cr, t], $i), U("getDictFromDict", [cr, t], Il), U("getArrayFromDict", [cr, t], Fl), U("getOptArrayFromDict", [cr, t], fg), U("getOptDictFromDict", [cr, t], dg), U("len", [cr], gg), U("getDictKeys", [cr], Ua), U("getDictValues", [cr], Ga), Br("getString", [cr, t], us), Br("getBoolean", [cr, t], ds), Br("getInteger", [cr, t], fs), Br("getNumber", [cr, t], cs), Br("getUrl", [cr, t], ps), Br("getColor", [cr, t], _s), Br("getArray", [cr, t], Fl), Br("getDict", [cr, t], Il), Br("containsKey", [cr, Be], _g), Br("isEmpty", [cr], pg), Br("getKeys", [cr], Ua), Br("getValues", [cr], Ga);
}
function $o(t, r) {
  return (e, n, o) => {
    if (o.value < 0 || o.value >= n.value.length)
      throw new Error(`Requested index (${o.value}) out of bounds array size (${n.value.length}).`);
    let i = n.value[Number(o.value)], s = typeof i;
    if (t === "array" && !Array.isArray(i) || t !== "array" && s !== t || s === "object" && i === null)
      throw s === "object" && (Array.isArray(i) ? s = "Array" : i === null ? s = "Null" : s = "Dict"), new Error(`Incorrect value type: expected ${Xn(r)}, got ${Xn(s)}.`);
    if (t === "number" && r === "integer") {
      Mn(e, i);
      try {
        i = gn(i);
      } catch {
        throw new Error("Cannot convert value to integer.");
      }
    }
    return t === "string" && r === "color" && (i = Xo(i)), t === "string" && r === "url" && co(i), {
      type: r,
      value: i
    };
  };
}
function Ii(t, r) {
  return (e, n, o, i) => {
    try {
      return t(e, n, o);
    } catch {
      let a = i.value;
      return r === "color" ? a = Xo(a) : r === "url" && co(a), {
        type: r,
        value: a
      };
    }
  };
}
const gs = $o("string", "string"), hs = $o("number", "number"), ms = $o("number", "integer"), bs = $o("boolean", "boolean"), ys = $o("string", "color"), ws = $o("string", "url"), Dl = $o("array", "array"), Tl = $o("object", "dict"), Ja = Ii(gs, "string"), qa = Ii(hs, "number"), Ya = Ii(ms, "integer"), Ka = Ii(bs, "boolean"), es = Ii(ys, "color"), ts = Ii(ws, "url");
function mg(t, r, e) {
  try {
    return Dl(t, r, e);
  } catch {
    return {
      type: fr,
      value: []
    };
  }
}
function bg(t, r, e) {
  try {
    return Tl(t, r, e);
  } catch {
    return {
      type: cr,
      value: {}
    };
  }
}
function yg(t, r) {
  return {
    type: Pe,
    value: gn(r.value.length)
  };
}
function wg(t, r) {
  return {
    type: Ur,
    value: r.value.length === 0 ? 1 : 0
  };
}
function kg(t, r, e) {
  return r.value.length ? {
    type: fr,
    value: r.value.filter((n) => {
      const o = [];
      if (typeof n == "string")
        uo(n) && o.push([{
          type: dn,
          value: n
        }]), p_(n) && o.push([{
          type: $n,
          value: n
        }]), o.push([{
          type: Be,
          value: n
        }]);
      else if (typeof n == "number")
        Math.round(n) === n && (Mn(t, n), o.push([{
          type: Pe,
          value: gn(n)
        }])), o.push([{
          type: _t,
          value: n
        }]);
      else if (typeof n == "bigint")
        Mn(t, n), o.push([{
          type: Pe,
          value: n
        }]);
      else if (Array.isArray(n))
        o.push([{
          type: fr,
          value: n
        }]);
      else if (typeof n == "object") {
        if (n === null)
          throw new Error("Incorrect value type: Null");
        o.push([{
          type: cr,
          value: n
        }]);
      } else if (typeof n == "boolean")
        o.push([{
          type: Ur,
          value: n ? 1 : 0
        }]);
      else
        throw new Error(`Incorrect value type: ${Xn(typeof n)}`);
      let i = {
        type: "missing"
      };
      for (const c of o)
        if (i = Xf(e.value, c), "func" in i)
          break;
      let s;
      if ("func" in i)
        s = i.func;
      else {
        const c = e.value[0];
        Cd(c.name || "Function", o[0], i, !0);
      }
      const a = s.args[0], l = Hs(
        t,
        n,
        typeof a == "string" ? a : a.type
      ), u = s.cb(t, l);
      if (u.type !== Ur)
        throw new Error("Function must return boolean value.");
      return u.value;
    })
  } : {
    type: fr,
    value: []
  };
}
function vg() {
  U("getArrayString", [
    fr,
    Pe
  ], gs), U("getStringFromArray", [
    fr,
    Pe
  ], gs), U("getArrayNumber", [
    fr,
    Pe
  ], hs), U("getNumberFromArray", [
    fr,
    Pe
  ], hs), U("getArrayInteger", [
    fr,
    Pe
  ], ms), U("getIntegerFromArray", [
    fr,
    Pe
  ], ms), U("getArrayBoolean", [
    fr,
    Pe
  ], bs), U("getBooleanFromArray", [
    fr,
    Pe
  ], bs), U("getArrayColor", [
    fr,
    Pe
  ], ys), U("getColorFromArray", [
    fr,
    Pe
  ], ys), U("getArrayUrl", [
    fr,
    Pe
  ], ws), U("getUrlFromArray", [
    fr,
    Pe
  ], ws), U("getArrayFromArray", [
    fr,
    Pe
  ], Dl), U("getDictFromArray", [
    fr,
    Pe
  ], Tl), U("getArrayOptString", [
    fr,
    Pe,
    Be
  ], Ja), U("getOptStringFromArray", [
    fr,
    Pe,
    Be
  ], Ja), U("getArrayOptNumber", [
    fr,
    Pe,
    _t
  ], qa), U("getOptNumberFromArray", [
    fr,
    Pe,
    _t
  ], qa), U("getArrayOptInteger", [
    fr,
    Pe,
    Pe
  ], Ya), U("getOptIntegerFromArray", [
    fr,
    Pe,
    Pe
  ], Ya), U("getArrayOptBoolean", [
    fr,
    Pe,
    Ur
  ], Ka), U("getOptBooleanFromArray", [
    fr,
    Pe,
    Ur
  ], Ka), U("getArrayOptColor", [
    fr,
    Pe,
    dn
  ], es), U("getOptColorFromArray", [
    fr,
    Pe,
    dn
  ], es), U("getArrayOptColor", [
    fr,
    Pe,
    Be
  ], es), U("getOptColorFromArray", [
    fr,
    Pe,
    Be
  ], es), U("getArrayOptUrl", [
    fr,
    Pe,
    $n
  ], ts), U("getOptUrlFromArray", [
    fr,
    Pe,
    $n
  ], ts), U("getArrayOptUrl", [
    fr,
    Pe,
    Be
  ], ts), U("getOptUrlFromArray", [
    fr,
    Pe,
    Be
  ], ts), U("getOptArrayFromArray", [
    fr,
    Pe
  ], mg), U("getOptDictFromArray", [
    fr,
    Pe
  ], bg), U("len", [
    fr
  ], yg), Br("getString", [fr, Pe], gs), Br("getInteger", [fr, Pe], ms), Br("getNumber", [fr, Pe], hs), Br("getBoolean", [fr, Pe], bs), Br("getUrl", [fr, Pe], ws), Br("getColor", [fr, Pe], ys), Br("getArray", [fr, Pe], Dl), Br("getDict", [fr, Pe], Tl), Br("isEmpty", [fr], wg), Br("filter", [fr, d_], kg);
}
function ko(t) {
  return (r, e, n) => {
    if (!r.store) {
      if (!n)
        throw new Error("Missing value.");
      return {
        type: t,
        value: n.value
      };
    }
    let o;
    t === "boolean" ? o = "boolean" : t === "number" || t === "integer" ? o = "number" : o = "string";
    let i;
    if (r.store.get ? i = r.store.get(e.value, t) : r.store.getValue && (i = r.store.getValue(e.value, o)), i === void 0) {
      if (!n)
        throw new Error("Missing value.");
      return t === "url" && co(n.value), {
        type: t,
        value: n.value
      };
    } else t === "url" && co(i);
    return Hs(r, i, t);
  };
}
function jg() {
  U("getStoredIntegerValue", [Be, Pe], ko(Pe)), U("getStoredNumberValue", [Be, _t], ko(_t)), U("getStoredStringValue", [Be, Be], ko(Be)), U("getStoredUrlValue", [Be, $n], ko($n)), U("getStoredUrlValue", [Be, Be], ko($n)), U("getStoredColorValue", [Be, dn], ko(dn)), U("getStoredColorValue", [Be, Be], ko(dn)), U("getStoredBooleanValue", [Be, Ur], ko(Ur)), U("getStoredArrayValue", [Be], ko(fr)), U("getStoredDictValue", [Be], ko(cr));
}
function Cg() {
  return {
    type: _t,
    value: Math.PI
  };
}
function Eg(t, r) {
  return {
    type: _t,
    value: r.value / 180 * Math.PI
  };
}
function Ag(t, r) {
  return {
    type: _t,
    value: r.value / Math.PI * 180
  };
}
function Sg(t, r) {
  return {
    type: _t,
    value: Math.sin(r.value)
  };
}
function Vg(t, r) {
  return {
    type: _t,
    value: Math.cos(r.value)
  };
}
function Fg(t, r) {
  return {
    type: _t,
    value: Math.tan(r.value)
  };
}
function Ig(t, r) {
  const e = Math.tan(r.value);
  if (Math.abs(e) < 1e-12)
    throw new Error("Cotangent is undefined for the given value.");
  return {
    type: _t,
    value: 1 / e
  };
}
function Dg(t, r) {
  return {
    type: _t,
    value: Math.atan(r.value)
  };
}
function Tg(t, r, e) {
  return {
    type: _t,
    value: Math.atan2(r.value, e.value)
  };
}
function Mg(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arcsine is undefined for the given value.");
  return {
    type: _t,
    value: Math.asin(r.value)
  };
}
function Pg(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arccosine is undefined for the given value.");
  return {
    type: _t,
    value: Math.acos(r.value)
  };
}
function Ng() {
  U("pi", [], Cg), U("toRadians", [_t], Eg), U("toDegrees", [_t], Ag), U("sin", [_t], Sg), U("cos", [_t], Vg), U("tan", [_t], Fg), U("cot", [_t], Ig), U("atan", [_t], Dg), U("atan2", [_t, _t], Tg), U("asin", [_t], Mg), U("acos", [_t], Pg);
}
function zg() {
  I_(), np(), ug(), bp(), qp(), Xp(), hg(), vg(), jg(), Ng();
}
function A() {
}
const Js = (t) => t;
function bo(t, r) {
  for (const e in r) t[e] = r[e];
  return (
    /** @type {T & S} */
    t
  );
}
function nd(t) {
  return t();
}
function Xa() {
  return /* @__PURE__ */ Object.create(null);
}
function Hr(t) {
  t.forEach(nd);
}
function Pr(t) {
  return typeof t == "function";
}
function Rg(t, r) {
  return t != t ? r == r : t !== r || t && typeof t == "object" || typeof t == "function";
}
let rs;
function Zn(t, r) {
  return t === r ? !0 : (rs || (rs = document.createElement("a")), rs.href = r, t === rs.href);
}
function Ar(t, r) {
  return t != t ? r == r : t !== r;
}
function Og(t) {
  return Object.keys(t).length === 0;
}
function F(t, ...r) {
  if (t == null) {
    for (const n of r)
      n(void 0);
    return A;
  }
  const e = t.subscribe(...r);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function Ml(t) {
  let r;
  return F(t, (e) => r = e)(), r;
}
function bn(t, r, e) {
  t.$$.on_destroy.push(F(r, e));
}
function qs(t, r, e, n) {
  if (t) {
    const o = od(t, r, e, n);
    return t[0](o);
  }
}
function od(t, r, e, n) {
  return t[1] && n ? bo(e.ctx.slice(), t[1](n(r))) : e.ctx;
}
function Ys(t, r, e, n) {
  if (t[2] && n) {
    const o = t[2](n(e));
    if (r.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const i = [], s = Math.max(r.dirty.length, o.length);
      for (let a = 0; a < s; a += 1)
        i[a] = r.dirty[a] | o[a];
      return i;
    }
    return r.dirty | o;
  }
  return r.dirty;
}
function Ks(t, r, e, n, o, i) {
  if (o) {
    const s = od(r, e, n, i);
    t.p(s, o);
  }
}
function Xs(t) {
  if (t.ctx.length > 32) {
    const r = [], e = t.ctx.length / 32;
    for (let n = 0; n < e; n++)
      r[n] = -1;
    return r;
  }
  return -1;
}
function cl(t, r, e) {
  return t.set(e), r;
}
function Zs(t) {
  return t && Pr(t.destroy) ? t.destroy : A;
}
function Za(t) {
  const r = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return r ? [parseFloat(r[1]), r[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const id = typeof window < "u";
let ta = id ? () => window.performance.now() : () => Date.now(), ra = id ? (t) => requestAnimationFrame(t) : A;
const ki = /* @__PURE__ */ new Set();
function sd(t) {
  ki.forEach((r) => {
    r.c(t) || (ki.delete(r), r.f());
  }), ki.size !== 0 && ra(sd);
}
function na(t) {
  let r;
  return ki.size === 0 && ra(sd), {
    promise: new Promise((e) => {
      ki.add(r = { c: t, f: e });
    }),
    abort() {
      ki.delete(r);
    }
  };
}
const Io = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function pt(t, r) {
  t.appendChild(r);
}
function ld(t) {
  if (!t) return document;
  const r = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return r && /** @type {ShadowRoot} */
  r.host ? (
    /** @type {ShadowRoot} */
    r
  ) : t.ownerDocument;
}
function Lg(t) {
  const r = Se("style");
  return r.textContent = "/* empty */", Bg(ld(t), r), r.sheet;
}
function Bg(t, r) {
  return pt(
    /** @type {Document} */
    t.head || t,
    r
  ), r.sheet;
}
function q(t, r, e) {
  t.insertBefore(r, e || null);
}
function J(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function nn(t, r) {
  for (let e = 0; e < t.length; e += 1)
    t[e] && t[e].d(r);
}
function Se(t) {
  return document.createElement(t);
}
function $r(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Pn(t) {
  return document.createTextNode(t);
}
function lr() {
  return Pn(" ");
}
function Kt() {
  return Pn("");
}
function He(t, r, e, n) {
  return t.addEventListener(r, e, n), () => t.removeEventListener(r, e, n);
}
function g(t, r, e) {
  e == null ? t.removeAttribute(r) : t.getAttribute(r) !== e && t.setAttribute(r, e);
}
const Hg = ["width", "height"];
function Oo(t, r) {
  const e = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in r)
    r[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = r[n] : n === "__value" ? t.value = t[n] = r[n] : e[n] && e[n].set && Hg.indexOf(n) === -1 ? t[n] = r[n] : g(t, n, r[n]);
}
function Wg(t, r) {
  Object.keys(r).forEach((e) => {
    Ug(t, e, r[e]);
  });
}
function Ug(t, r, e) {
  const n = r.toLowerCase();
  n in t ? t[n] = typeof t[n] == "boolean" && e === "" ? !0 : e : r in t ? t[r] = typeof t[r] == "boolean" && e === "" ? !0 : e : g(t, r, e);
}
function qo(t) {
  return /-/.test(t) ? Wg : Oo;
}
function Gg(t) {
  return Array.from(t.childNodes);
}
function Qn(t, r) {
  r = "" + r, t.data !== r && (t.data = /** @type {string} */
  r);
}
function Qa(t, r) {
  t.value = r == null ? "" : r;
}
function M(t, r, e, n) {
  e == null ? t.style.removeProperty(r) : t.style.setProperty(r, e, "");
}
function xa(t, r, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const o = t.options[n];
    if (o.__value === r) {
      o.selected = !0;
      return;
    }
  }
  (!e || r !== void 0) && (t.selectedIndex = -1);
}
function Jg(t) {
  const r = t.querySelector(":checked");
  return r && r.__value;
}
function ad(t, r, { bubbles: e = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: r, bubbles: e, cancelable: n });
}
function $a(t, r) {
  return new t(r);
}
const Ss = /* @__PURE__ */ new Map();
let Vs = 0;
function qg(t) {
  let r = 5381, e = t.length;
  for (; e--; ) r = (r << 5) - r ^ t.charCodeAt(e);
  return r >>> 0;
}
function Yg(t, r) {
  const e = { stylesheet: Lg(r), rules: {} };
  return Ss.set(t, e), e;
}
function Fs(t, r, e, n, o, i, s, a = 0) {
  const l = 16.666 / n;
  let u = `{
`;
  for (let k = 0; k <= 1; k += l) {
    const w = r + (e - r) * i(k);
    u += k * 100 + `%{${s(w, 1 - w)}}
`;
  }
  const c = u + `100% {${s(e, 1 - e)}}
}`, f = `__svelte_${qg(c)}_${a}`, _ = ld(t), { stylesheet: h, rules: m } = Ss.get(_) || Yg(_, t);
  m[f] || (m[f] = !0, h.insertRule(`@keyframes ${f} ${c}`, h.cssRules.length));
  const p = t.style.animation || "";
  return t.style.animation = `${p ? `${p}, ` : ""}${f} ${n}ms linear ${o}ms 1 both`, Vs += 1, f;
}
function Is(t, r) {
  const e = (t.style.animation || "").split(", "), n = e.filter(
    r ? (i) => i.indexOf(r) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), o = e.length - n.length;
  o && (t.style.animation = n.join(", "), Vs -= o, Vs || Kg());
}
function Kg() {
  ra(() => {
    Vs || (Ss.forEach((t) => {
      const { ownerNode: r } = t.stylesheet;
      r && J(r);
    }), Ss.clear());
  });
}
let Ji;
function Hi(t) {
  Ji = t;
}
function Di() {
  if (!Ji) throw new Error("Function called outside component initialization");
  return Ji;
}
function to(t) {
  Di().$$.on_mount.push(t);
}
function Qs(t) {
  Di().$$.after_update.push(t);
}
function an(t) {
  Di().$$.on_destroy.push(t);
}
function Xg() {
  const t = Di();
  return (r, e, { cancelable: n = !1 } = {}) => {
    const o = t.$$.callbacks[r];
    if (o) {
      const i = ad(
        /** @type {string} */
        r,
        e,
        { cancelable: n }
      );
      return o.slice().forEach((s) => {
        s.call(t, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function ni(t, r) {
  return Di().$$.context.set(t, r), r;
}
function Dr(t) {
  return Di().$$.context.get(t);
}
function Ln(t, r) {
  const e = t.$$.callbacks[r.type];
  e && e.slice().forEach((n) => n.call(this, r));
}
const bi = [], Ir = [];
let vi = [];
const eu = [], ud = /* @__PURE__ */ Promise.resolve();
let Pl = !1;
function cd() {
  Pl || (Pl = !0, ud.then(fd));
}
function An() {
  return cd(), ud;
}
function eo(t) {
  vi.push(t);
}
const fl = /* @__PURE__ */ new Set();
let gi = 0;
function fd() {
  if (gi !== 0)
    return;
  const t = Ji;
  do {
    try {
      for (; gi < bi.length; ) {
        const r = bi[gi];
        gi++, Hi(r), Zg(r.$$);
      }
    } catch (r) {
      throw bi.length = 0, gi = 0, r;
    }
    for (Hi(null), bi.length = 0, gi = 0; Ir.length; ) Ir.pop()();
    for (let r = 0; r < vi.length; r += 1) {
      const e = vi[r];
      fl.has(e) || (fl.add(e), e());
    }
    vi.length = 0;
  } while (bi.length);
  for (; eu.length; )
    eu.pop()();
  Pl = !1, fl.clear(), Hi(t);
}
function Zg(t) {
  if (t.fragment !== null) {
    t.update(), Hr(t.before_update);
    const r = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, r), t.after_update.forEach(eo);
  }
}
function Qg(t) {
  const r = [], e = [];
  vi.forEach((n) => t.indexOf(n) === -1 ? r.push(n) : e.push(n)), e.forEach((n) => n()), vi = r;
}
let Ri;
function oa() {
  return Ri || (Ri = Promise.resolve(), Ri.then(() => {
    Ri = null;
  })), Ri;
}
function ii(t, r, e) {
  t.dispatchEvent(ad(`${r ? "intro" : "outro"}${e}`));
}
const ks = /* @__PURE__ */ new Set();
let Eo;
function or() {
  Eo = {
    r: 0,
    c: [],
    p: Eo
    // parent group
  };
}
function ir() {
  Eo.r || Hr(Eo.c), Eo = Eo.p;
}
function B(t, r) {
  t && t.i && (ks.delete(t), t.i(r));
}
function Q(t, r, e, n) {
  if (t && t.o) {
    if (ks.has(t)) return;
    ks.add(t), Eo.c.push(() => {
      ks.delete(t), n && (e && t.d(1), n());
    }), t.o(r);
  } else n && n();
}
const ia = { duration: 0 };
function xs(t, r, e) {
  const n = { direction: "in" };
  let o = r(t, e, n), i = !1, s, a, l = 0;
  function u() {
    s && Is(t, s);
  }
  function c() {
    const {
      delay: _ = 0,
      duration: h = 300,
      easing: m = Js,
      tick: p = A,
      css: k
    } = o || ia;
    k && (s = Fs(t, 0, 1, h, _, m, k, l++)), p(0, 1);
    const w = ta() + _, O = w + h;
    a && a.abort(), i = !0, eo(() => ii(t, !0, "start")), a = na((G) => {
      if (i) {
        if (G >= O)
          return p(1, 0), ii(t, !0, "end"), u(), i = !1;
        if (G >= w) {
          const L = m((G - w) / h);
          p(L, 1 - L);
        }
      }
      return i;
    });
  }
  let f = !1;
  return {
    start() {
      f || (f = !0, Is(t), Pr(o) ? (o = o(n), oa().then(c)) : c());
    },
    invalidate() {
      f = !1;
    },
    end() {
      i && (u(), i = !1);
    }
  };
}
function dd(t, r, e) {
  const n = { direction: "out" };
  let o = r(t, e, n), i = !0, s;
  const a = Eo;
  a.r += 1;
  let l;
  function u() {
    const {
      delay: c = 0,
      duration: f = 300,
      easing: _ = Js,
      tick: h = A,
      css: m
    } = o || ia;
    m && (s = Fs(t, 1, 0, f, c, _, m));
    const p = ta() + c, k = p + f;
    eo(() => ii(t, !1, "start")), "inert" in t && (l = /** @type {HTMLElement} */
    t.inert, t.inert = !0), na((w) => {
      if (i) {
        if (w >= k)
          return h(0, 1), ii(t, !1, "end"), --a.r || Hr(a.c), !1;
        if (w >= p) {
          const O = _((w - p) / f);
          h(1 - O, O);
        }
      }
      return i;
    });
  }
  return Pr(o) ? oa().then(() => {
    o = o(n), u();
  }) : u(), {
    end(c) {
      c && "inert" in t && (t.inert = l), c && o.tick && o.tick(1, 0), i && (s && Is(t, s), i = !1);
    }
  };
}
function tu(t, r, e, n) {
  let i = r(t, e, { direction: "both" }), s = n ? 0 : 1, a = null, l = null, u = null, c;
  function f() {
    u && Is(t, u);
  }
  function _(m, p) {
    const k = (
      /** @type {Program['d']} */
      m.b - s
    );
    return p *= Math.abs(k), {
      a: s,
      b: m.b,
      d: k,
      duration: p,
      start: m.start,
      end: m.start + p,
      group: m.group
    };
  }
  function h(m) {
    const {
      delay: p = 0,
      duration: k = 300,
      easing: w = Js,
      tick: O = A,
      css: G
    } = i || ia, L = {
      start: ta() + p,
      b: m
    };
    m || (L.group = Eo, Eo.r += 1), "inert" in t && (m ? c !== void 0 && (t.inert = c) : (c = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), a || l ? l = L : (G && (f(), u = Fs(t, s, m, k, p, w, G)), m && O(0, 1), a = _(L, k), eo(() => ii(t, m, "start")), na((ee) => {
      if (l && ee > l.start && (a = _(l, k), l = null, ii(t, a.b, "start"), G && (f(), u = Fs(
        t,
        s,
        a.b,
        a.duration,
        0,
        w,
        i.css
      ))), a) {
        if (ee >= a.end)
          O(s = a.b, 1 - s), ii(t, a.b, "end"), l || (a.b ? f() : --a.group.r || Hr(a.group.c)), a = null;
        else if (ee >= a.start) {
          const fe = ee - a.start;
          s = a.a + a.d * w(fe / a.duration), O(s, 1 - s);
        }
      }
      return !!(a || l);
    }));
  }
  return {
    run(m) {
      Pr(i) ? oa().then(() => {
        i = i({ direction: m ? "in" : "out" }), h(m);
      }) : h(m);
    },
    end() {
      f(), a = l = null;
    }
  };
}
function nr(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function _d(t, r) {
  Q(t, 1, 1, () => {
    r.delete(t.key);
  });
}
function pd(t, r, e, n, o, i, s, a, l, u, c, f) {
  let _ = t.length, h = i.length, m = _;
  const p = {};
  for (; m--; ) p[t[m].key] = m;
  const k = [], w = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), G = [];
  for (m = h; m--; ) {
    const P = f(o, i, m), Z = e(P);
    let se = s.get(Z);
    se ? G.push(() => se.p(P, r)) : (se = u(Z, P), se.c()), w.set(Z, k[m] = se), Z in p && O.set(Z, Math.abs(m - p[Z]));
  }
  const L = /* @__PURE__ */ new Set(), ee = /* @__PURE__ */ new Set();
  function fe(P) {
    B(P, 1), P.m(a, c), s.set(P.key, P), c = P.first, h--;
  }
  for (; _ && h; ) {
    const P = k[h - 1], Z = t[_ - 1], se = P.key, j = Z.key;
    P === Z ? (c = P.first, _--, h--) : w.has(j) ? !s.has(se) || L.has(se) ? fe(P) : ee.has(j) ? _-- : O.get(se) > O.get(j) ? (ee.add(se), fe(P)) : (L.add(j), _--) : (l(Z, s), _--);
  }
  for (; _--; ) {
    const P = t[_];
    w.has(P.key) || l(P, s);
  }
  for (; h; ) fe(k[h - 1]);
  return Hr(G), k;
}
function Do(t, r) {
  const e = {}, n = {}, o = { $$scope: 1 };
  let i = t.length;
  for (; i--; ) {
    const s = t[i], a = r[i];
    if (a) {
      for (const l in s)
        l in a || (n[l] = 1);
      for (const l in a)
        o[l] || (e[l] = a[l], o[l] = 1);
      t[i] = a;
    } else
      for (const l in s)
        o[l] = 1;
  }
  for (const s in n)
    s in e || (e[s] = void 0);
  return e;
}
function gd(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Bt(t) {
  t && t.c();
}
function zt(t, r, e) {
  const { fragment: n, after_update: o } = t.$$;
  n && n.m(r, e), eo(() => {
    const i = t.$$.on_mount.map(nd).filter(Pr);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : Hr(i), t.$$.on_mount = [];
  }), o.forEach(eo);
}
function Rt(t, r) {
  const e = t.$$;
  e.fragment !== null && (Qg(e.after_update), Hr(e.on_destroy), e.fragment && e.fragment.d(r), e.on_destroy = e.fragment = null, e.ctx = []);
}
function xg(t, r) {
  t.$$.dirty[0] === -1 && (bi.push(t), cd(), t.$$.dirty.fill(0)), t.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function Or(t, r, e, n, o, i, s = null, a = [-1]) {
  const l = Ji;
  Hi(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: A,
    not_equal: o,
    bound: Xa(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(r.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: Xa(),
    dirty: a,
    skip_bound: !1,
    root: r.target || l.$$.root
  };
  s && s(u.root);
  let c = !1;
  if (u.ctx = e ? e(t, r.props || {}, (f, _, ...h) => {
    const m = h.length ? h[0] : _;
    return u.ctx && o(u.ctx[f], u.ctx[f] = m) && (!u.skip_bound && u.bound[f] && u.bound[f](m), c && xg(t, f)), _;
  }) : [], u.update(), c = !0, Hr(u.before_update), u.fragment = n ? n(u.ctx) : !1, r.target) {
    if (r.hydrate) {
      const f = Gg(r.target);
      u.fragment && u.fragment.l(f), f.forEach(J);
    } else
      u.fragment && u.fragment.c();
    r.intro && B(t.$$.fragment), zt(t, r.target, r.anchor), fd();
  }
  Hi(l);
}
class Lr {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Er(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Er(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Rt(this, 1), this.$destroy = A;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(r, e) {
    if (!Pr(e))
      return A;
    const n = this.$$.callbacks[r] || (this.$$.callbacks[r] = []);
    return n.push(e), () => {
      const o = n.indexOf(e);
      o !== -1 && n.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(r) {
    this.$$set && !Og(r) && (this.$$.skip_bound = !0, this.$$set(r), this.$$.skip_bound = !1);
  }
}
const $g = "4", hi = [];
function eh(t, r) {
  return {
    subscribe: Ao(t, r).subscribe
  };
}
function Ao(t, r = A) {
  let e;
  const n = /* @__PURE__ */ new Set();
  function o(a) {
    if (Rg(t, a) && (t = a, e)) {
      const l = !hi.length;
      for (const u of n)
        u[1](), hi.push(u, t);
      if (l) {
        for (let u = 0; u < hi.length; u += 2)
          hi[u][0](hi[u + 1]);
        hi.length = 0;
      }
    }
  }
  function i(a) {
    o(a(t));
  }
  function s(a, l = A) {
    const u = [a, l];
    return n.add(u), n.size === 1 && (e = r(o, i) || A), a(t), () => {
      n.delete(u), n.size === 0 && e && (e(), e = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Ti(t, r, e) {
  const n = !Array.isArray(t), o = n ? [t] : t;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = r.length < 2;
  return eh(e, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, f = A;
    const _ = () => {
      if (c)
        return;
      f();
      const m = r(n ? u[0] : u, s, a);
      i ? s(m) : f = Pr(m) ? m : A;
    }, h = o.map(
      (m, p) => F(
        m,
        (k) => {
          u[p] = k, c &= ~(1 << p), l && _();
        },
        () => {
          c |= 1 << p;
        }
      )
    );
    return l = !0, _(), function() {
      Hr(h), f(), l = !1;
    };
  });
}
class Lo {
  constructor(r, e) {
    Er(this, "name");
    Er(this, "value");
    Er(this, "store");
    const n = this.convertValue(e);
    this.name = r, this.value = n;
  }
  getName() {
    return this.name;
  }
  subscribe(r) {
    return this.store || (this.store = Ao(this.value)), this.store.subscribe(r);
  }
  set(r) {
    const e = this.fromString(r);
    this.setValue(e);
  }
  setValue(r) {
    const e = this.convertValue(r);
    this.value = e, this.store && this.store.set(e);
  }
  getValue() {
    return this.value;
  }
}
class hd extends Lo {
  convertValue(r) {
    if (typeof r != "string")
      throw new Error("Incorrect variable value");
    return r;
  }
  fromString(r) {
    return r;
  }
  getType() {
    return "string";
  }
}
class md extends Lo {
  convertValue(r) {
    if (typeof r != "bigint" && typeof r != "number")
      throw new Error("Incorrect variable value");
    try {
      return gn(r);
    } catch {
      throw new Error("Incorrect variable value");
    }
  }
  fromString(r) {
    try {
      return gn(r);
    } catch {
      throw new Error("Incorrect variable value");
    }
  }
  getType() {
    return "integer";
  }
}
class bd extends Lo {
  convertValue(r) {
    if (typeof r != "number" || Number.isNaN(r) || !isFinite(r))
      throw new Error("Incorrect variable value");
    return r;
  }
  fromString(r) {
    const e = Number(r);
    return this.convertValue(e);
  }
  getType() {
    return "number";
  }
}
class yd extends Lo {
  convertValue(r) {
    if (r !== 1 && r !== 0 && r !== !0 && r !== !1)
      throw new Error("Incorrect variable value");
    return !!r;
  }
  fromString(r) {
    if (r === "1" || r === "true")
      return !0;
    if (r === "0" || r === "false")
      return !1;
    throw new Error("Incorrect variable value");
  }
  getType() {
    return "boolean";
  }
}
class wd extends Lo {
  convertValue(r) {
    if (typeof r != "string" || !uo(r))
      throw new Error("Incorrect variable value");
    return Xo(r);
  }
  fromString(r) {
    return this.convertValue(r);
  }
  getType() {
    return "color";
  }
}
class kd extends Lo {
  convertValue(r) {
    if (typeof r != "string")
      throw new Error("Incorrect variable value");
    return co(r), r;
  }
  fromString(r) {
    return co(r), r;
  }
  getType() {
    return "url";
  }
}
class vd extends Lo {
  convertValue(r) {
    if (typeof r != "object" || !r)
      throw new Error("Incorrect variable value");
    return r;
  }
  fromString(r) {
    try {
      return JSON.parse(r);
    } catch {
      throw new Error("Incorrect dict value");
    }
  }
  getType() {
    return "dict";
  }
}
class jd extends Lo {
  convertValue(r) {
    if (!Array.isArray(r))
      throw new Error("Incorrect variable value");
    return r;
  }
  fromString(r) {
    try {
      return JSON.parse(r);
    } catch {
      throw new Error("Incorrect array value");
    }
  }
  getType() {
    return "array";
  }
}
const Nl = {
  string: hd,
  number: bd,
  integer: md,
  boolean: yd,
  color: wd,
  url: kd,
  dict: vd,
  array: jd
};
function io(t, r, e) {
  if (!(r in Nl))
    throw new Error("Unsupported variable type");
  return new Nl[r](t, e);
}
function th() {
}
function rh(t) {
  return t(this.value), th;
}
function ru() {
  throw new Error("Cannot change the value of this type of variable");
}
class nh extends hd {
}
class oh extends bd {
}
class ih extends md {
}
class sh extends yd {
}
class lh extends wd {
}
class ah extends kd {
}
class uh extends vd {
}
class ch extends jd {
}
class fh extends Lo {
  convertValue(r) {
    if (!(r instanceof Date))
      throw new Error("Incorrect variable value");
    return r;
  }
  fromString() {
    throw new Error("Datetime variable does not support setter from string");
  }
  getType() {
    return "datetime";
  }
}
const Ds = {
  string: nh,
  number: oh,
  integer: ih,
  boolean: sh,
  color: lh,
  url: ah,
  dict: uh,
  array: ch,
  datetime: fh
};
for (const t in Ds) {
  const r = Ds[t];
  r.prototype.subscribe = rh, r.prototype.set = ru, r.prototype.setValue = ru;
}
function vs(t, r, e) {
  if (!(r in Ds))
    throw new Error("Unsupported variable type");
  return new Ds[r](t, e);
}
function dh(t) {
  const r = t.getType();
  let e = t.getValue();
  return r === Ur && (e = e ? 1 : 0), {
    type: r,
    value: e
  };
}
function _h(t, r) {
  if (r === "string")
    return t;
  if (r === "integer")
    try {
      return gn(t);
    } catch {
      throw new Error("Incorrect variable value");
    }
  else if (r === "number") {
    const e = Number(t);
    if (Number.isNaN(e) || !isFinite(e))
      throw new Error("Incorrect variable value");
    return e;
  } else if (r === "boolean") {
    if (t === "1" || t === "true")
      return !0;
    if (t === "0" || t === "false")
      return !1;
    throw new Error("Incorrect variable value");
  } else if (r === "color") {
    if (typeof t != "string" || !uo(t))
      throw new Error("Incorrect variable value");
    return Xo(t);
  } else if (r === "url") {
    if (typeof t != "string")
      throw new Error("Incorrect variable value");
    return co(t), t;
  } else if (r === "dict" || r === "array")
    try {
      return JSON.parse(t);
    } catch {
      throw new Error("Incorrect dict value");
    }
  throw new Error(`Unexpected type ${r}`);
}
zg();
function ph(t, r) {
  return {
    type: Be,
    value: r.value
  };
}
function gh(t, r) {
  return {
    type: _t,
    value: r.value
  };
}
function hh(t, r) {
  return Mn(t, r.value), {
    type: Pe,
    value: r.value
  };
}
function mh(t, r) {
  return {
    type: Ur,
    value: r.value ? 1 : 0
  };
}
function bh(t, r) {
  const e = Es(Bn(t, r.argument));
  switch (r.operator) {
    case "!":
      if (e.type === Ur)
        return {
          type: Ur,
          value: e.value ? 0 : 1
        };
      En(`${r.operator}${pn(e)}`, "A Boolean is expected after a unary not.");
    case "+":
    case "-":
      const n = r.operator === "+" ? 1 : -1;
      if (e.type === Pe) {
        const o = e.value * gn(n);
        return Mn(t, o), {
          type: Pe,
          value: o
        };
      } else {
        if (e.type === _t)
          return {
            type: _t,
            value: e.value * n
          };
        En(
          `${r.operator}${pn(e)}`,
          `A Number is expected after a unary ${r.operator === "+" ? "plus" : "minus"}.`
        );
      }
  }
}
function yh(t, r) {
  const e = Es(Bn(t, r.test));
  if (e.type === Ur)
    return e.value ? Bn(t, r.consequent) : Bn(t, r.alternate);
  En(
    `${pn(e)} ? ${pn(Bn(t, r.consequent))} : ${pn(Bn(t, r.alternate))}`,
    "Ternary must be called with a Boolean value as a condition."
  );
}
function wh(t, r) {
  try {
    return Bn(t, r.test);
  } catch {
    return Bn(t, r.alternate);
  }
}
function kh(t, r) {
  let e = "";
  if (r.quasis.length === 2 && r.quasis[0].value === "" && r.quasis[1].value === "")
    return Bn(t, r.expressions[0]);
  for (let n = 0; n < r.expressions.length; ++n)
    e += r.quasis[n].value, e += di(Bn(t, r.expressions[n]), !0);
  return e += r.quasis[r.quasis.length - 1].value, {
    type: Be,
    value: e
  };
}
function vh(t, r) {
  const e = Es(Bn(t, r.left));
  if (e.type !== Ur && En(
    `${pn(e)} ${r.operator} ...`,
    `'${r.operator}' must be called with boolean operands.`
  ), r.operator === "||" && e.value)
    return e;
  if (r.operator === "&&" && !e.value)
    return {
      type: Ur,
      value: 0
    };
  const n = Es(Bn(t, r.right));
  return n.type !== Ur && En(
    `${pn(e)} ${r.operator} ${pn(n)}`,
    `Operator '${r.operator}' cannot be applied to different types: Boolean and ${Xn(n.type)}.`
  ), {
    type: Ur,
    value: n.value
  };
}
function jh(t, r, e) {
  let n;
  return r.type === Mr && e.type === Mr ? n = r.value.getTime() === e.value.getTime() : n = r.value === e.value, t === "!=" && (n = !n), {
    type: Ur,
    value: n ? 1 : 0
  };
}
function Ch(t, r, e) {
  (r.type !== _t && r.type !== Pe && r.type !== Mr || e.type !== _t && e.type !== Pe && e.type !== Mr) && En(
    `${pn(r)} ${t} ${pn(e)}`,
    `Operator '${t}' cannot be applied to ${Xn(r.type)} type.`
  );
  let n;
  const o = r.type === Mr ? r.value.getTime() : r.value, i = e.type === Mr ? e.value.getTime() : e.value;
  return t === ">" ? n = o > i : t === ">=" ? n = o >= i : t === "<" ? n = o < i : n = o <= i, {
    type: Ur,
    value: n ? 1 : 0
  };
}
function Eh(t, r, e, n) {
  if (e.type !== Be && e.type !== _t && e.type !== Pe && En(
    `${pn(e)} ${r} ${pn(n)}`,
    `Operator '${r}' cannot be applied to ${Xn(e.type)} type.`
  ), e.type === Be)
    return r === "-" && En(
      `${pn(e)} - ${pn(n)}`,
      `Operator '${r}' cannot be applied to ${Xn(e.type)} type.`
    ), {
      type: Be,
      value: e.value + n.value
    };
  let o = r === "+" ? e.value + n.value : e.value - n.value;
  if (e.type === Pe)
    try {
      o = _i(t, o), Mn(t, o);
    } catch (i) {
      En(
        `${pn(e)} ${r} ${pn(n)}`,
        i.message
      );
    }
  return {
    type: e.type,
    value: o
  };
}
function Ah(t, r, e, n) {
  e.type !== Pe && e.type !== _t && En(
    `${pn(e)} ${r} ${pn(n)}`,
    `Operator '${r}' cannot be applied to ${Xn(e.type)} type.`
  );
  let o;
  if (r === "*")
    o = e.value * n.value;
  else if (r === "/" || r === "%")
    Number(n.value) === 0 && En(
      `${pn(e)} ${r} ${pn(n)}`,
      "Division by zero is not supported."
    ), r === "/" ? o = e.value / n.value : o = e.value % n.value;
  else
    throw new Error(`Unsupported operation ${r}`);
  if (e.type === Pe)
    try {
      o = _i(t, o), Mn(t, o);
    } catch (i) {
      En(
        `${pn(e)} ${r} ${pn(n)}`,
        i.message
      );
    }
  return {
    type: e.type,
    value: o
  };
}
function Sh(t, r) {
  const e = r.operator;
  let n = Bn(t, r.left), o = Bn(t, r.right);
  if ((n.type === "number" && o.type === "integer" || n.type === "integer" && o.type === "number") && (n.type === "integer" ? n = jl(n) : o.type === "integer" && (o = jl(o))), n.type !== o.type && En(
    `${pn(n)} ${r.operator} ${pn(o)}`,
    `Operator '${e}' cannot be applied to different types: ${Xn(n.type)} and ${Xn(o.type)}.`
  ), e === "==" || e === "!=")
    return jh(e, n, o);
  if (e === ">" || e === ">=" || e === "<" || e === "<=")
    return Ch(e, n, o);
  if (e === "+" || e === "-")
    return Eh(t, e, n, o);
  if (e === "/" || e === "*" || e === "%")
    return Ah(t, e, n, o);
  throw new Error(`Unsupported operation ${e}`);
}
function Ts(t) {
  return t.map(pn).join(", ");
}
function Vh(t, r) {
  const e = r.callee.name;
  let n, o = r.arguments.map((a) => Bn(t, a));
  const i = e + ":" + o.map((a) => a.type).join("#");
  let s;
  if (t.customFunctions && (s = Al(t.customFunctions, e, o)), !s || !("func" in s))
    if (Cl.has(i))
      s = {
        func: Cl.get(i),
        conversions: 0
      };
    else {
      const a = Al(Bi, e, o);
      ("func" in a || !s || s.type === "missing") && (s = a);
    }
  if (s && (("expected" in s || "type" in s && s.type === "missing") && Cd(e, o, s), n = s.func, s.conversions && (o = Zf(n, o))), !n)
    throw new Error("Function not found");
  try {
    return n.cb(t, ...o);
  } catch (a) {
    if (a && a instanceof xl)
      throw a;
    const l = `${e}(${Ts(o)})`;
    En(l, a.message);
  }
}
function Cd(t, r, e, n = !1) {
  const o = r.map((a) => Xn(a.type)).join(", "), i = `${t}(${Ts(r)})`, s = n ? h_ : En;
  if (e.type === "few" && r.length === 0 && e.hasOverloads)
    s(i, "Function requires non empty argument list.");
  else if (e.type === "many" || e.type === "few" || e.type === "mismatch")
    if (e.hasOverloads)
      s(i, `Function has no matching overload for given argument types: ${o}.`);
    else if (e.type === "many" || e.type === "few")
      e.def.args.some((a) => typeof a == "object" && a.isVararg) ? s(i, `At least ${e.def.args.length} argument(s) expected.`) : s(i, `Exactly ${e.def.args.length} argument(s) expected.`);
    else {
      const a = e.def.args.map((l) => Xn(typeof l == "string" ? l : l.type)).join(", ");
      s(i, `Invalid argument type: expected ${a}, got ${o}.`);
    }
  else
    s(i, `Unknown function name: ${t}.`);
}
function Fh(t, r) {
  const e = r.method.name;
  let n, o = [r.object, ...r.arguments].map((s) => Bn(t, s));
  const i = e + ":" + o.map((s) => s.type).join("#");
  if (El.has(i))
    n = El.get(i);
  else {
    const s = Al(as, e, o);
    if ("expected" in s || "type" in s && s.type === "missing") {
      const a = o.slice(1).map((u) => Xn(u.type)).join(", "), l = `${e}(${Ts(o.slice(1))})`;
      s.type === "few" && o.length === 1 ? En(l, "Method requires non empty argument list.") : s.type === "many" ? En(l, `Method has no matching overload for given argument types: ${a}.`) : s.type === "few" || s.type === "mismatch" ? En(l, `Method has no matching overload for given argument types: ${a}.`) : En(l, `Unknown method name: ${e}.`);
    }
    n = s.func, s.conversions && (o = Zf(n, o));
  }
  if (!n)
    throw new Error("Method not found");
  try {
    return n.cb(t, ...o);
  } catch (s) {
    if (s && s instanceof xl)
      throw s;
    const a = `${e}(${Ts(o.slice(1))})`;
    En(a, s.message);
  }
}
function Ih(t, r) {
  var i;
  const e = r.id.name, n = (i = t.customFunctions) == null ? void 0 : i.get(e);
  if (n)
    return {
      type: "function",
      value: n
    };
  const o = t.variables.get(e);
  if (o)
    return dh(o);
  throw new Error(`Variable '${e}' is missing.`);
}
const nu = {
  StringLiteral: ph,
  NumberLiteral: gh,
  IntegerLiteral: hh,
  BooleanLiteral: mh,
  UnaryExpression: bh,
  ConditionalExpression: yh,
  TryExpression: wh,
  TemplateLiteral: kh,
  LogicalExpression: vh,
  BinaryExpression: Sh,
  CallExpression: Vh,
  MethodExpression: Fh,
  Variable: Ih
};
function Bn(t, r) {
  if (r.type in nu)
    return nu[r.type](t, r);
  throw new Error("Unsupported expression");
}
function $s(t, r, e, n, o) {
  try {
    const i = {
      variables: t,
      customFunctions: r,
      warnings: [],
      store: e,
      weekStartDay: (o == null ? void 0 : o.weekStartDay) || 0
    };
    return {
      result: Bn(i, n),
      warnings: i.warnings,
      usedVars: i.storeUsedVars
    };
  } catch (i) {
    return {
      result: {
        type: "error",
        value: i.message
      },
      warnings: []
    };
  }
}
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add($g);
const Dh = "appkit-root_platform_desktop", Th = "appkit-root__clickable", Mh = "appkit-root", Ph = "appkit-root__selectable", Nh = "appkit-root__unselectable", vr = {
  root_platform_desktop: Dh,
  root__clickable: Th,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  "root__any-actions": "appkit-root__any-actions",
  root: Mh,
  root__selectable: Ph,
  root__unselectable: Nh,
  "root__only-desktop": "appkit-root__only-desktop",
  "root_restrict-scroll": "appkit-root_restrict-scroll",
  "root_disabled-context-menu": "appkit-root_disabled-context-menu"
}, Yr = Symbol("root"), zh = "appkit-outer", Rh = "appkit-outer_width_content", Oh = "appkit-outer_height_content", Lh = "appkit-root__clickable", Bh = "appkit-outer__border", Hh = "appkit-outer_visibility_invisible", Wh = "appkit-outer_visibility_gone", Ms = {
  outer: zh,
  outer_width_content: Rh,
  outer_height_content: Oh,
  root__clickable: Lh,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  "outer_hide-on-transition-in": "appkit-outer_hide-on-transition-in",
  "outer_halign-self_start": "appkit-outer_halign-self_start",
  "outer_halign-self_center": "appkit-outer_halign-self_center",
  "outer_halign-self_end": "appkit-outer_halign-self_end",
  "outer_halign-self_stretch": "appkit-outer_halign-self_stretch",
  "outer_valign-self_start": "appkit-outer_valign-self_start",
  "outer_valign-self_center": "appkit-outer_valign-self_center",
  "outer_valign-self_end": "appkit-outer_valign-self_end",
  "outer_valign-self_stretch": "appkit-outer_valign-self_stretch",
  "outer_parent-flex_vertical": "appkit-outer_parent-flex_vertical",
  "outer_parent-flex_horizontal": "appkit-outer_parent-flex_horizontal",
  "outer_valign-self_baseline": "appkit-outer_valign-self_baseline",
  "outer_width-constrained": "appkit-outer_width-constrained",
  "outer_parent-grid": "appkit-outer_parent-grid",
  "outer_height-constrained": "appkit-outer_height-constrained",
  "outer_parent-overlap": "appkit-outer_parent-overlap",
  "outer_scroll-snap_start": "appkit-outer_scroll-snap_start",
  "outer_scroll-snap_center": "appkit-outer_scroll-snap_center",
  "outer_scroll-snap_end": "appkit-outer_scroll-snap_end",
  outer__border: Bh,
  outer_visibility_invisible: Hh,
  outer_visibility_gone: Wh,
  "outer_has-action-animation": "appkit-outer_has-action-animation",
  "outer_has-custom-focus": "appkit-outer_has-custom-focus"
};
function $t(t) {
  if (!t)
    return;
  let r = "";
  for (const e in t)
    if (t.hasOwnProperty(e)) {
      if (!t[e] && t[e] !== 0)
        continue;
      r && (r += ";"), r += e + ":" + String(t[e]);
    }
  return r || void 0;
}
function ce(t) {
  if (typeof t != "number" && typeof t != "string" || !t)
    return "0";
  const r = Number(t);
  return Number.isNaN(r) ? "0" : Math.ceil(r * 1e3) / 1e4 + "em";
}
function fn(t) {
  let r = ce(t);
  return r === "0" && (r += "em"), r;
}
function zl(t) {
  let r = String(t);
  return r.indexOf("&") > -1 && (r = r.replace(/&/g, "&amp;")), r.indexOf("<") > -1 && (r = r.replace(/</g, "&lt;")), r.indexOf(">") > -1 && (r = r.replace(/>/g, "&gt;")), r.indexOf('"') > -1 && (r = r.replace(/"/g, "&quot;")), r;
}
const To = Boolean;
function el(t, r) {
  if (t.length === 1 && t[0].type === "solid")
    return Gh({
      bg: t[0]
    });
  const e = t.map((n) => {
    if (n.type === "solid")
      return Uh({
        bg: n
      });
    if (n.type === "gradient")
      return Jh({
        bg: n
      });
    if (n.type === "image")
      return Kh({
        bg: n,
        direction: r
      });
    if (n.type === "radial_gradient")
      return Yh({
        bg: n
      });
  }).filter(To).reverse().reduce(function(n, o) {
    return n.image.push(o.image), n.size.push(o.size || "auto"), n.position.push(o.pos || "50% 50%"), n;
  }, {
    image: [],
    size: [],
    position: []
  });
  return {
    image: e.image.join(","),
    size: e.size.join(","),
    position: e.position.join(",")
  };
}
function Uh(t) {
  const r = _r(t.bg.color || "transparent");
  return {
    size: void 0,
    pos: void 0,
    image: `linear-gradient(to bottom,${r},${r})`
  };
}
function Gh(t) {
  return {
    color: _r(t.bg.color || "transparent"),
    size: "auto",
    position: "50% 50%"
  };
}
function Ed(t) {
  return t.every((n) => n.color && typeof n.position == "number" && n.position >= 0 && n.position <= 1) ? t.sort((n, o) => Math.abs(n.position - o.position) < 1e-6 ? 0 : n.position - o.position).map((n) => `${_r(n.color)} ${(n.position * 100).toFixed(2)}%`).join(",") : void 0;
}
function Jh(t) {
  var n, o, i, s;
  if (!Array.isArray((n = t.bg) == null ? void 0 : n.colors) && !Array.isArray((o = t.bg) == null ? void 0 : o.color_map))
    return;
  const r = (i = t.bg.colors) == null ? void 0 : i.filter(To);
  if (!(r != null && r.length) && !((s = t.bg) != null && s.color_map))
    return;
  let e;
  if (t.bg.color_map) {
    const a = Ed(t.bg.color_map);
    if (!a)
      return;
    e = "linear-gradient(" + (90 - Number(t.bg.angle || 0) + "deg") + "," + a + ")";
  } else {
    if (!r)
      return;
    e = "linear-gradient(" + (90 - Number(t.bg.angle || 0) + "deg") + "," + r.map((a) => _r(a)).join(",") + ")";
  }
  return {
    size: void 0,
    pos: void 0,
    image: e
  };
}
const qh = {
  nearest_corner: "closest-corner",
  farthest_corner: "farthest-corner",
  nearest_side: "closest-side",
  farthest_side: "farthest-side"
};
function ou(t) {
  if (t && typeof t == "object" && "type" in t && t.value !== void 0) {
    if (t.type === "fixed")
      return fn(t.value);
    if (t.type === "relative")
      return `${Number(t.value) * 100}%`;
  }
  return "50%";
}
function Yh(t) {
  var a, l, u, c;
  if (!Array.isArray((a = t.bg) == null ? void 0 : a.colors) && !Array.isArray((l = t.bg) == null ? void 0 : l.color_map))
    return;
  const r = (u = t.bg.colors) == null ? void 0 : u.filter(To);
  if (!(r != null && r.length) && !((c = t.bg) != null && c.color_map))
    return;
  let e;
  if (t.bg.color_map ? e = Ed(t.bg.color_map) : r && (e = r.map((f) => _r(f)).join(",")), !e)
    return;
  const n = t.bg.radius;
  let o;
  n && typeof n == "object" && "type" in n && n.value !== void 0 && (n.type === "fixed" ? o = fn(n.value) : n.type === "relative" && (o = qh[n.value]));
  const i = ou(t.bg.center_x), s = ou(t.bg.center_y);
  return {
    size: void 0,
    pos: void 0,
    image: `radial-gradient(circle ${o || "farthest-corner"} at ${i} ${s},` + e + ")"
  };
}
function Kh(t) {
  var e;
  const r = (e = t.bg) == null ? void 0 : e.image_url;
  if (r)
    return {
      size: Ad(t.bg.scale),
      pos: Sd(t.bg, t.direction),
      image: 'url("' + zl(r) + '")'
    };
}
function Ad(t) {
  return t === "fit" ? "contain" : t === "stretch" ? "fill" : t === "no_scale" ? "none" : "cover";
}
function Xh(t) {
  return t === "none" ? "auto" : t === "fill" ? "100% 100%" : t;
}
function Sd(t, r) {
  let e, n;
  return t.content_alignment_horizontal === "left" || r === "ltr" && t.content_alignment_horizontal === "start" || r === "rtl" && t.content_alignment_horizontal === "end" ? e = "0%" : t.content_alignment_horizontal === "right" || r === "ltr" && t.content_alignment_horizontal === "end" || r === "rtl" && t.content_alignment_horizontal === "start" ? e = "100%" : e = "50%", t.content_alignment_vertical === "top" ? n = "0%" : t.content_alignment_vertical === "bottom" ? n = "100%" : n = "50%", e + " " + n;
}
function en(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e < 0 ? r : e;
}
function iu(t, r, e) {
  return typeof r == "number" && (t && r > 0 && r <= 100 || !t && r >= 0 && r < 100) ? r : e;
}
function Zh(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1 && t.index !== void 0;
}
function Qh(t, {
  visibilityActions: r,
  disappearActions: e,
  rootCtx: n,
  componentContext: o
}) {
  const i = [];
  r && r.forEach((h) => {
    i.push({
      type: "visibility",
      index: i.length,
      action: h,
      visible: !1,
      count: 0,
      finished: !1
    });
  }), e && e.forEach((h) => {
    i.push({
      type: "disappear",
      index: i.length,
      action: h,
      // false, so disappear only works after the element becomes visible
      visible: !1,
      count: 0,
      finished: !1
    });
  });
  const s = i.map((h, m) => {
    const p = h.type === "visibility";
    return o.getDerivedFromVars({
      index: m,
      visibility_percentage: h.action.visibility_percentage,
      visibility_duration: p ? h.action.visibility_duration : h.action.disappear_duration,
      log_limit: h.action.log_limit,
      is_enabled: h.action.is_enabled
    }, void 0, !0);
  });
  let a;
  const l = () => {
    a && a.disconnect(), i.forEach((h) => {
      h.timer && clearTimeout(h.timer);
    });
  }, u = Ti(s, (h) => h);
  let c;
  const f = (h) => {
    const m = h.type === "visibility";
    o.execAnyActions([h.action], {
      logType: m ? "visible" : "disappear",
      node: t,
      processUrls: !1
    });
  }, _ = u.subscribe((h) => {
    c = h.filter(Zh);
    const m = {};
    c.forEach((w) => {
      m[w.index] = w;
    }), l();
    const p = [...new Set(c.map((w) => {
      const O = i[w.index].type === "visibility";
      return iu(
        O,
        w.visibility_percentage,
        O ? 50 : 0
      ) / 100;
    }))];
    if (!p.length)
      return;
    const k = (w) => {
      w.forEach((O) => {
        c.forEach((G) => {
          const L = i[G.index], ee = L.type === "visibility", fe = iu(
            ee,
            G.visibility_percentage,
            ee ? 50 : 0
          );
          let P;
          fe === 0 ? P = O.intersectionRatio >= 1e-12 : P = O.intersectionRatio >= fe / 100, (ee ? !L.visible && P : L.visible && !P) ? L.finished || (L.timer = setTimeout(() => {
            ++L.count;
            const j = G.log_limit === 0 ? 1 / 0 : G.log_limit || 1;
            L.count >= j && (L.finished = !0), f(L);
          }, en(G.visibility_duration, 800))) : (ee ? !P : P) && L.timer && clearTimeout(L.timer), L.visible = P;
        });
      });
    };
    a = new IntersectionObserver(k, {
      threshold: p
    }), a.observe(t);
  });
  return {
    destroy() {
      c == null || c.forEach((h) => {
        const m = i[h.index];
        !m || m.type !== "disappear" || !m.visible || m.finished || n.registerTimeout(window.setTimeout(() => {
          f(m);
        }, h.visibility_duration));
      }), l(), _();
    }
  };
}
function su(t, r) {
  r && t.push(r);
}
function ht(t, r, e) {
  const n = [];
  su(n, r[t]);
  for (const o in e)
    if (e.hasOwnProperty(o)) {
      const i = e[o];
      if (i) {
        const s = `${t}_${o}` + (typeof i == "string" ? `_${i}` : "");
        su(n, r[s]);
      }
    }
  return n.join(" ");
}
function xh(t, r, e, n) {
  var o;
  return (o = r.componentDevtool) == null || o.call(r, {
    type: "mount",
    node: t,
    json: e.json,
    origJson: e.origJson,
    templateContext: e.templateContext,
    componentContext: e,
    devapi: n
  }), {
    update(i) {
      var s;
      (s = r.componentDevtool) == null || s.call(r, {
        type: "update",
        node: t,
        json: i.json,
        origJson: i.origJson,
        templateContext: i.templateContext,
        componentContext: i
      });
    },
    destroy() {
      var i;
      (i = r.componentDevtool) == null || i.call(r, {
        type: "destroy",
        node: t,
        json: e.json,
        origJson: e.origJson,
        templateContext: e.templateContext,
        componentContext: e
      });
    }
  };
}
const Vd = xh, sa = Symbol("state");
function mo(t, r) {
  var s, a;
  const e = t.top || 0, n = ((s = r === "ltr" ? t.end : t.start) != null ? s : t.right) || 0, o = t.bottom || 0, i = ((a = r === "ltr" ? t.start : t.end) != null ? a : t.left) || 0;
  return e === 0 && n === 0 && o === 0 && i === 0 ? "" : ce(e) + " " + ce(n) + " " + ce(o) + " " + ce(i);
}
function tl(t) {
  if (typeof t != "number" && typeof t != "string")
    return !1;
  const r = Number(t);
  return !Number.isNaN(r);
}
function Tn(t) {
  return tl(t) && t >= 0;
}
function Ps(t, r, e) {
  var o, i;
  if (!t)
    return e;
  const n = [
    t.top,
    (o = r === "ltr" ? t.end : t.start) != null ? o : t.right,
    t.bottom,
    (i = r === "ltr" ? t.start : t.end) != null ? i : t.left
  ];
  for (let s = 0; s < n.length; ++s)
    if (n[s] && !Tn(n[s]))
      return e;
  return mo(t, r);
}
function $h(t, r) {
  return !Tn(t) || t === void 0 || t > 1 ? r : Number(t);
}
const e0 = Object.prototype.hasOwnProperty;
function Mi(t, r) {
  if (Object.is(t, r))
    return !0;
  if (typeof t != "object" || t === null || typeof r != "object" || r === null)
    return Object.is(t, r);
  const e = Object.keys(t), n = Object.keys(r);
  if (e.length !== n.length)
    return !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (!e0.call(r, i) || !Mi(t[i], r[i]))
      return !1;
  }
  return !0;
}
function Uo(t, r) {
  return Mi(t, r) ? r : t;
}
function t0(t, r) {
  return t === "visible" || t === "invisible" || t === "gone" ? t : r;
}
function Fd(t, r) {
  return t === "linear" || t === "ease" || t === "ease_in_out" || t === "ease_in" || t === "ease_out" ? t : r;
}
function oo(t, r) {
  const e = Number(t);
  return Number.isNaN(e) ? r : e;
}
function qi(t) {
  const r = [];
  return t.name === "set" ? (t.items || []).forEach((e) => {
    r.push(...qi(e));
  }) : r.push(t), r;
}
function Pi(t, r) {
  if (!t || typeof t != "object")
    return r;
  const e = [
    "top",
    "right",
    "bottom",
    "left"
  ];
  for (let n = 0; n < e.length; ++n)
    if (t[e[n]] && !Tn(t[e[n]]))
      return r;
  return t;
}
function r0(t, r) {
  if (!t && !r)
    return {};
  if (!r)
    return t;
  if (!t)
    return r;
  const e = {};
  return [
    "top",
    "right",
    "bottom",
    "left",
    "start",
    "end"
  ].forEach((n) => {
    const o = t[n];
    o && (e[n] = o);
    const i = r[n];
    i && (e[n] = (e[n] || 0) + i);
  }), e;
}
function n0(t, r) {
  const e = [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ];
  for (let n = 0; n < e.length; ++n)
    if (e[n] && !Tn(e[n]))
      return r;
  return t;
}
function js(t, r = 0, e = 10) {
  return [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ].map((n) => ce((n || r) / e * 10)).join(" ");
}
function o0(t) {
  var r, e, n, o, i, s;
  return ce(((e = (r = t.offset) == null ? void 0 : r.x) == null ? void 0 : e.value) || 0) + " " + ce(((o = (n = t.offset) == null ? void 0 : n.y) == null ? void 0 : o.value) || 0) + " " + ce((i = t.blur) != null ? i : 2) + " " + _r(t.color || "#000000", (s = t.alpha) != null ? s : 0.19);
}
function i0(t, r) {
  var e, n, o, i, s, a;
  return "drop-shadow(" + _r(t.color || "#000000", (e = t.alpha) != null ? e : 0.19) + " " + ce((((o = (n = t.offset) == null ? void 0 : n.x) == null ? void 0 : o.value) || 0) * 10 / r) + " " + ce((((s = (i = t.offset) == null ? void 0 : i.y) == null ? void 0 : s.value) || 0) * 10 / r) + " " + ce(((a = t.blur) != null ? a : 2) * 10 / r) + ")";
}
let dl;
function Ai() {
  return typeof matchMedia > "u" ? !1 : (dl || (dl = window.matchMedia("(prefers-reduced-motion)")), dl.matches);
}
const s0 = 8, l0 = (t, r, e, n) => {
  let o;
  return (e || n) && typeof ResizeObserver < "u" && (o = new ResizeObserver(async () => {
    let i = 0;
    const s = {}, a = (u, c) => {
      if (u) {
        const f = r.getVariable(u, "integer");
        if (f) {
          if (c = Math.round(c), s[u] || (s[u] = /* @__PURE__ */ new Set()), !s[u].has(c))
            return f.setValue(c), s[u].add(c), !0;
        } else {
          const _ = new Error("Missing variable");
          _.level = "error", _.additional = {
            variableName: u
          }, r.logError(_);
        }
      }
      return !1;
    }, l = () => {
      if (!t)
        return !1;
      const u = t.getBoundingClientRect(), c = a(e, u.width), f = a(n, u.height);
      return c || f;
    };
    for (; l(); ) {
      if (++i > s0) {
        const u = new Error("Recursive layout in size_provider");
        u.level = "warn", u.additional = {
          widthVariableName: e,
          heightVariableName: n
        }, r.logError(u);
        break;
      }
      await An();
    }
  }), o.observe(t)), o;
}, la = Symbol("enabled");
function _n(t, r) {
  return t === 1 || t === 0 || t === !1 || t === !0 ? !!t : r;
}
function Yo(t) {
  return [
    t.state_description,
    t.description,
    t.hint
  ].filter(Boolean).join(", ");
}
const lu = 1, Ko = 2;
function au(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "translation-fixed")
      return ce(t.value * r);
    if (t.type === "translation-percentage")
      return `${t.value * r}%`;
  }
}
function ns(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "pivot-fixed")
      return ce(t.value * r);
    if (t.type === "pivot-percentage")
      return `${t.value * r}%`;
  }
}
function a0(t) {
  return t.map((r) => {
    if (r.type === "rotation") {
      if (typeof r.angle == "number") {
        const e = ns(r.pivot_x) || "50%", n = ns(r.pivot_y) || "50%", o = ns(r.pivot_x, -1) || "-50%", i = ns(r.pivot_y, -1) || "-50%";
        return `translate(${e}, ${n}) rotate(${r.angle}deg) translate(${o}, ${i})`;
      }
    } else if (r.type === "translation") {
      const e = au(r.x) || 0, n = au(r.y) || 0;
      return `translate(${e}, ${n})`;
    }
  }).filter(Boolean).join(" ");
}
const u0 = "appkit-actionable__button", uu = {
  actionable__button: u0
};
function c0() {
}
const So = Symbol("action");
function Rl(t) {
  if (t.startsWith("tel:"))
    return "tel";
  if (t.startsWith("/"))
    return "https";
  const r = /^([^/]+):\/\//.exec(t);
  return r && r[1] || "";
}
function Ol(t, r) {
  return r.has(t);
}
function f0(t) {
  let r = (
    /*containerElement*/
    t[7]
  ), e, n, o = (
    /*containerElement*/
    t[7] && _l(t)
  );
  return {
    c() {
      o && o.c(), e = Kt();
    },
    m(i, s) {
      o && o.m(i, s), q(i, e, s), n = !0;
    },
    p(i, s) {
      /*containerElement*/
      i[7] ? r ? Ar(
        r,
        /*containerElement*/
        i[7]
      ) ? (o.d(1), o = _l(i), r = /*containerElement*/
      i[7], o.c(), o.m(e.parentNode, e)) : o.p(i, s) : (o = _l(i), r = /*containerElement*/
      i[7], o.c(), o.m(e.parentNode, e)) : r && (o.d(1), o = null, r = /*containerElement*/
      i[7]);
    },
    i(i) {
      n || (B(o, i), n = !0);
    },
    o(i) {
      Q(o, i), n = !1;
    },
    d(i) {
      i && J(e), o && o.d(i);
    }
  };
}
function d0(t) {
  var f;
  let r, e, n, o, i, s;
  const a = (
    /*#slots*/
    t[31].default
  ), l = qs(
    a,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let u = [
    {
      class: e = /*cls*/
      t[2] + " " + uu.actionable__button + " " + vr["root__any-actions"] + ` ${/*isNativeActionAnimation*/
      t[6] ? vr.root__clickable : vr["root__clickable-no-transition"]} ${vr.root__unselectable} ` + /*longTapActions*/
      ((f = t[1]) != null && f.length ? vr["root_disabled-context-menu"] : "")
    },
    { style: (
      /*style*/
      t[3]
    ) },
    { role: (
      /*role*/
      t[11]
    ) },
    { "aria-checked": (
      /*isChecked*/
      t[15]
    ) },
    { type: "button" },
    {
      tabindex: n = /*componentContext*/
      t[0].fakeElement === Ko ? -1 : null
    },
    /*attrs*/
    t[4]
  ], c = {};
  for (let _ = 0; _ < u.length; _ += 1)
    c = bo(c, u[_]);
  return {
    c() {
      r = Se("button"), l && l.c(), Oo(r, c);
    },
    m(_, h) {
      q(_, r, h), l && l.m(r, null), r.autofocus && r.focus(), t[48](r), o = !0, i || (s = [
        Zs(
          /*use*/
          t[5].call(null, r)
        ),
        He(
          r,
          "click",
          /*click_handler_1*/
          t[37]
        ),
        He(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        He(
          r,
          "focus",
          /*focus_handler_1*/
          t[38]
        ),
        He(
          r,
          "blur",
          /*blur_handler_1*/
          t[39]
        ),
        He(
          r,
          "pointerdown",
          /*pointerdown_handler_1*/
          t[40]
        ),
        He(
          r,
          "wheel",
          /*wheel_handler_1*/
          t[41]
        )
      ], i = !0);
    },
    p(_, h) {
      var m;
      l && l.p && (!o || h[0] & /*$$scope*/
      1073741824) && Ks(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? Ys(
          a,
          /*$$scope*/
          _[30],
          h,
          null
        ) : Xs(
          /*$$scope*/
          _[30]
        ),
        null
      ), Oo(r, c = Do(u, [
        (!o || h[0] & /*cls, isNativeActionAnimation, longTapActions*/
        70 && e !== (e = /*cls*/
        _[2] + " " + uu.actionable__button + " " + vr["root__any-actions"] + ` ${/*isNativeActionAnimation*/
        _[6] ? vr.root__clickable : vr["root__clickable-no-transition"]} ${vr.root__unselectable} ` + /*longTapActions*/
        ((m = _[1]) != null && m.length ? vr["root_disabled-context-menu"] : ""))) && { class: e },
        (!o || h[0] & /*style*/
        8) && { style: (
          /*style*/
          _[3]
        ) },
        (!o || h[0] & /*role*/
        2048) && { role: (
          /*role*/
          _[11]
        ) },
        (!o || h[0] & /*isChecked*/
        32768) && { "aria-checked": (
          /*isChecked*/
          _[15]
        ) },
        { type: "button" },
        (!o || h[0] & /*componentContext*/
        1 && n !== (n = /*componentContext*/
        _[0].fakeElement === Ko ? -1 : null)) && { tabindex: n },
        h[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (B(l, _), o = !0);
    },
    o(_) {
      Q(l, _), o = !1;
    },
    d(_) {
      _ && J(r), l && l.d(_), t[48](null), i = !1, Hr(s);
    }
  };
}
function _0(t) {
  var f;
  let r, e, n, o, i, s;
  const a = (
    /*#slots*/
    t[31].default
  ), l = qs(
    a,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let u = [
    { href: (
      /*href*/
      t[9]
    ) },
    { target: (
      /*target*/
      t[13]
    ) },
    { style: (
      /*style*/
      t[3]
    ) },
    { role: (
      /*role*/
      t[11]
    ) },
    { "aria-checked": (
      /*isChecked*/
      t[15]
    ) },
    {
      class: e = /*cls*/
      t[2] + " " + vr["root__any-actions"] + " " + /*isNativeActionAnimation*/
      (t[6] ? vr.root__clickable : vr["root__clickable-no-transition"]) + " " + /*longTapActions*/
      ((f = t[1]) != null && f.length ? vr["root_disabled-context-menu"] : "")
    },
    {
      tabindex: n = /*componentContext*/
      t[0].fakeElement === Ko ? -1 : null
    },
    /*attrs*/
    t[4]
  ], c = {};
  for (let _ = 0; _ < u.length; _ += 1)
    c = bo(c, u[_]);
  return {
    c() {
      r = Se("a"), l && l.c(), Oo(r, c);
    },
    m(_, h) {
      q(_, r, h), l && l.m(r, null), t[47](r), o = !0, i || (s = [
        Zs(
          /*use*/
          t[5].call(null, r)
        ),
        He(
          r,
          "click",
          /*click_handler*/
          t[32]
        ),
        He(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        He(
          r,
          "focus",
          /*focus_handler*/
          t[33]
        ),
        He(
          r,
          "blur",
          /*blur_handler*/
          t[34]
        ),
        He(
          r,
          "pointerdown",
          /*pointerdown_handler*/
          t[35]
        ),
        He(
          r,
          "wheel",
          /*wheel_handler*/
          t[36]
        )
      ], i = !0);
    },
    p(_, h) {
      var m;
      l && l.p && (!o || h[0] & /*$$scope*/
      1073741824) && Ks(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? Ys(
          a,
          /*$$scope*/
          _[30],
          h,
          null
        ) : Xs(
          /*$$scope*/
          _[30]
        ),
        null
      ), Oo(r, c = Do(u, [
        (!o || h[0] & /*href*/
        512) && { href: (
          /*href*/
          _[9]
        ) },
        (!o || h[0] & /*target*/
        8192) && { target: (
          /*target*/
          _[13]
        ) },
        (!o || h[0] & /*style*/
        8) && { style: (
          /*style*/
          _[3]
        ) },
        (!o || h[0] & /*role*/
        2048) && { role: (
          /*role*/
          _[11]
        ) },
        (!o || h[0] & /*isChecked*/
        32768) && { "aria-checked": (
          /*isChecked*/
          _[15]
        ) },
        (!o || h[0] & /*cls, isNativeActionAnimation, longTapActions*/
        70 && e !== (e = /*cls*/
        _[2] + " " + vr["root__any-actions"] + " " + /*isNativeActionAnimation*/
        (_[6] ? vr.root__clickable : vr["root__clickable-no-transition"]) + " " + /*longTapActions*/
        ((m = _[1]) != null && m.length ? vr["root_disabled-context-menu"] : ""))) && { class: e },
        (!o || h[0] & /*componentContext*/
        1 && n !== (n = /*componentContext*/
        _[0].fakeElement === Ko ? -1 : null)) && { tabindex: n },
        h[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (B(l, _), o = !0);
    },
    o(_) {
      Q(l, _), o = !1;
    },
    d(_) {
      _ && J(r), l && l.d(_), t[47](null), i = !1, Hr(s);
    }
  };
}
function _l(t) {
  var f;
  let r, e, n, o, i, s;
  const a = (
    /*#slots*/
    t[31].default
  ), l = qs(
    a,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let u = [
    {
      class: e = /*cls*/
      t[2] + " " + /*longTapActions*/
      ((f = t[1]) != null && f.length ? vr["root_disabled-context-menu"] : "") + " " + /*hasAnyActions*/
      (t[14] ? vr["root__any-actions"] : "")
    },
    { style: (
      /*style*/
      t[3]
    ) },
    { role: (
      /*role*/
      t[11]
    ) },
    { "aria-checked": (
      /*isChecked*/
      t[15]
    ) },
    {
      "aria-hidden": n = /*ariaHidden*/
      t[12] || void 0
    },
    /*attrs*/
    t[4]
  ], c = {};
  for (let _ = 0; _ < u.length; _ += 1)
    c = bo(c, u[_]);
  return {
    c() {
      r = Se(
        /*containerElement*/
        t[7]
      ), l && l.c(), qo(
        /*containerElement*/
        t[7]
      )(r, c);
    },
    m(_, h) {
      q(_, r, h), l && l.m(r, null), t[49](r), o = !0, i || (s = [
        Zs(
          /*use*/
          t[5].call(null, r)
        ),
        He(
          r,
          "click",
          /*click_handler_2*/
          t[42]
        ),
        He(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        He(
          r,
          "focus",
          /*focus_handler_2*/
          t[43]
        ),
        He(
          r,
          "blur",
          /*blur_handler_2*/
          t[44]
        ),
        He(
          r,
          "pointerdown",
          /*pointerdown_handler_2*/
          t[45]
        ),
        He(
          r,
          "wheel",
          /*wheel_handler_2*/
          t[46]
        )
      ], i = !0);
    },
    p(_, h) {
      var m;
      l && l.p && (!o || h[0] & /*$$scope*/
      1073741824) && Ks(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? Ys(
          a,
          /*$$scope*/
          _[30],
          h,
          null
        ) : Xs(
          /*$$scope*/
          _[30]
        ),
        null
      ), qo(
        /*containerElement*/
        _[7]
      )(r, c = Do(u, [
        (!o || h[0] & /*cls, longTapActions, hasAnyActions*/
        16390 && e !== (e = /*cls*/
        _[2] + " " + /*longTapActions*/
        ((m = _[1]) != null && m.length ? vr["root_disabled-context-menu"] : "") + " " + /*hasAnyActions*/
        (_[14] ? vr["root__any-actions"] : ""))) && { class: e },
        (!o || h[0] & /*style*/
        8) && { style: (
          /*style*/
          _[3]
        ) },
        (!o || h[0] & /*role*/
        2048) && { role: (
          /*role*/
          _[11]
        ) },
        (!o || h[0] & /*isChecked*/
        32768) && { "aria-checked": (
          /*isChecked*/
          _[15]
        ) },
        (!o || h[0] & /*ariaHidden*/
        4096 && n !== (n = /*ariaHidden*/
        _[12] || void 0)) && {
          "aria-hidden": n
        },
        h[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (B(l, _), o = !0);
    },
    o(_) {
      Q(l, _), o = !1;
    },
    d(_) {
      _ && J(r), l && l.d(_), t[49](null), i = !1, Hr(s);
    }
  };
}
function p0(t) {
  let r, e, n, o;
  const i = [_0, d0, f0], s = [];
  function a(l, u) {
    return (
      /*href*/
      l[9] ? 0 : (
        /*hasJSAction*/
        l[10] ? 1 : 2
      )
    );
  }
  return r = a(t), e = s[r] = i[r](t), {
    c() {
      e.c(), n = Kt();
    },
    m(l, u) {
      s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? s[r].p(l, u) : (or(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ir(), e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n));
    },
    i(l) {
      o || (B(e), o = !0);
    },
    o(l) {
      Q(e), o = !1;
    },
    d(l) {
      l && J(n), s[r].d(l);
    }
  };
}
const cu = 8, fu = 400, pl = 400, g0 = /* @__PURE__ */ new Set(["button", "image", "checkbox", "radio", "header"]);
function du(t) {
  t.preventDefault();
}
function h0(t, r, e) {
  let n, o, i = A, s = () => (i(), i = F(n, (Y) => e(29, o = Y)), n);
  t.$$.on_destroy.push(() => i());
  let { $$slots: a = {}, $$scope: l } = r, { componentContext: u } = r, { id: c = "" } = r, { actions: f = void 0 } = r, { doubleTapActions: _ = void 0 } = r, { longTapActions: h = void 0 } = r, { pressStartActions: m = void 0 } = r, { pressEndActions: p = void 0 } = r, { hoverStartActions: k = void 0 } = r, { hoverEndActions: w = void 0 } = r, { cls: O = "" } = r, { style: G = null } = r, { attrs: L = void 0 } = r, { use: ee = c0 } = r, { customAction: fe = null } = r, { isNativeActionAnimation: P = !0 } = r, { hasInnerFocusable: Z = !1 } = r, { customAccessibility: se = void 0 } = r, { captureFocusOnAction: j = !0 } = r, { containerElement: z = "span" } = r;
  const N = Dr(Yr), W = Dr(So);
  ni(So, {
    hasAction() {
      return !!(W.hasAction() || f != null && f.length || (se == null ? void 0 : se.mode) === "exclude");
    }
  });
  let ie, de = "", je, Ee = -1, pe = -1, ze = null, be = !1, Fe = !1, Ge = !1, Ze, ke, et, _e, Ie = !1;
  function ue() {
    return (o == null ? void 0 : o.some((Y) => {
      if (Y != null && Y.typed)
        return !0;
      const Vt = Y == null ? void 0 : Y.url;
      if (!Vt)
        return !1;
      const Dt = Rl(Vt);
      return Dt && !Ol(Dt, N.getBuiltinProtocols());
    })) || !1;
  }
  async function oe(Y, Vt) {
    f && (Y && ue() && Y.preventDefault(), u.execAnyActions(f, { node: ie, processUrls: Vt }));
  }
  async function ye(Y) {
    if (W.hasAction() || Y.button !== void 0 && Y.button !== 0)
      return;
    const Vt = Date.now();
    if (Ee > 0 && Vt > Ee + fu) {
      Y.preventDefault();
      return;
    }
    if (_ != null && _.length && pe > 0 && Vt - pe < pl) {
      Y.preventDefault(), u.execAnyActions(_, { processUrls: !0, node: ie }), pe = -1;
      return;
    }
    if (pe = Vt, _ != null && _.length && Ee > 0 && Vt < Ee + pl) {
      Y.preventDefault(), clearTimeout(ke), ke = window.setTimeout(
        () => {
          oe(void 0, !0);
        },
        pl
      );
      return;
    }
    (fe == null ? void 0 : fe(Y)) === !1 ? Y.preventDefault() : oe(Y, !1);
  }
  function $(Y) {
    W.hasAction() || (ze = { x: Y.clientX, y: Y.clientY }, be = !1, Ee = Date.now(), Ze && clearTimeout(Ze), clearTimeout(ke), u.execAnyActions(m, { node: ie }));
  }
  function Ae(Y) {
    ze && (Math.abs(ze.x - Y.clientX) > cu || Math.abs(ze.y - Y.clientY) > cu) && (be = !0);
  }
  function xe(Y) {
    W.hasAction() || !ze || Ee < 0 || (!be && Date.now() - Ee >= fu && (Y.stopImmediatePropagation(), u.execAnyActions(h, { processUrls: !0, node: ie })), Ze && clearTimeout(Ze), Ze = window.setTimeout(
      () => {
        ze = null, Ee = -1;
      },
      100
    ), u.execAnyActions(p, { node: ie }));
  }
  function qe() {
    W.hasAction() || u.execAnyActions(k, { node: ie });
  }
  function te() {
    W.hasAction() || u.execAnyActions(w, { node: ie });
  }
  function Xe(Y) {
    const Vt = Y.target;
    Vt instanceof HTMLElement && (Vt.tagName === "INPUT" || Vt.contentEditable === "true") || Y.ctrlKey || Y.metaKey || Y.altKey || Y.shiftKey || Y.key === "Enter" && Array.isArray(f) && f.length && (u.execAnyActions(f), Y.preventDefault());
  }
  to(() => {
    c && !Z && N.registerFocusable(c, {
      focus() {
        ie && (de || Fe) && ie.focus();
      }
    });
  }), an(() => {
    typeof window < "u" && (window.removeEventListener("pointermove", Ae), window.removeEventListener("pointerup", xe), window.removeEventListener("pointercancel", xe)), c && !Z && N.unregisterFocusable(c), Ze && clearTimeout(Ze), ke && clearTimeout(ke);
  });
  function Le(Y) {
    Ln.call(this, t, Y);
  }
  function tt(Y) {
    Ln.call(this, t, Y);
  }
  function dt(Y) {
    Ln.call(this, t, Y);
  }
  function lt(Y) {
    Ln.call(this, t, Y);
  }
  function wt(Y) {
    Ln.call(this, t, Y);
  }
  function ot(Y) {
    Ln.call(this, t, Y);
  }
  function At(Y) {
    Ln.call(this, t, Y);
  }
  function it(Y) {
    Ln.call(this, t, Y);
  }
  function me(Y) {
    Ln.call(this, t, Y);
  }
  function ne(Y) {
    Ln.call(this, t, Y);
  }
  function at(Y) {
    Ln.call(this, t, Y);
  }
  function Ve(Y) {
    Ln.call(this, t, Y);
  }
  function D(Y) {
    Ln.call(this, t, Y);
  }
  function jt(Y) {
    Ln.call(this, t, Y);
  }
  function gt(Y) {
    Ln.call(this, t, Y);
  }
  function kt(Y) {
    Ir[Y ? "unshift" : "push"](() => {
      ie = Y, e(8, ie);
    });
  }
  function St(Y) {
    Ir[Y ? "unshift" : "push"](() => {
      ie = Y, e(8, ie);
    });
  }
  function rt(Y) {
    Ir[Y ? "unshift" : "push"](() => {
      ie = Y, e(8, ie);
    });
  }
  return t.$$set = (Y) => {
    "componentContext" in Y && e(0, u = Y.componentContext), "id" in Y && e(18, c = Y.id), "actions" in Y && e(19, f = Y.actions), "doubleTapActions" in Y && e(20, _ = Y.doubleTapActions), "longTapActions" in Y && e(1, h = Y.longTapActions), "pressStartActions" in Y && e(21, m = Y.pressStartActions), "pressEndActions" in Y && e(22, p = Y.pressEndActions), "hoverStartActions" in Y && e(23, k = Y.hoverStartActions), "hoverEndActions" in Y && e(24, w = Y.hoverEndActions), "cls" in Y && e(2, O = Y.cls), "style" in Y && e(3, G = Y.style), "attrs" in Y && e(4, L = Y.attrs), "use" in Y && e(5, ee = Y.use), "customAction" in Y && e(25, fe = Y.customAction), "isNativeActionAnimation" in Y && e(6, P = Y.isNativeActionAnimation), "hasInnerFocusable" in Y && e(26, Z = Y.hasInnerFocusable), "customAccessibility" in Y && e(27, se = Y.customAccessibility), "captureFocusOnAction" in Y && e(28, j = Y.captureFocusOnAction), "containerElement" in Y && e(7, z = Y.containerElement), "$$scope" in Y && e(30, l = Y.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*customAccessibility*/
    134217728 && e(12, Ie = (se == null ? void 0 : se.mode) === "exclude"), t.$$.dirty[0] & /*componentContext, actions*/
    524289 && s(e(16, n = u.getDerivedFromVars(f, void 0, !0))), t.$$.dirty[0] & /*$processedActions, customAction, href, ariaHidden, componentContext*/
    570429953) {
      if (Array.isArray(o) && (o != null && o.length))
        for (let Y = 0; Y < o.length; ++Y) {
          const Vt = o[Y].url;
          if (Vt) {
            e(9, de = Vt), e(13, je = o[Y].target || void 0);
            break;
          }
        }
      e(10, Fe = !!fe), (de || Array.isArray(o) && (o != null && o.length)) && (W.hasAction() || Ie) ? (e(9, de = ""), u.logError(K(new Error("Actionable element is forbidden inside other actionable element or inside accessibility mode=exlucde"), {
        level: "warn",
        additional: { actions: o }
      }))) : de && !Ol(Rl(de), N.getBuiltinProtocols()) ? (e(9, de = ""), e(10, Fe = !0)) : !de && Array.isArray(o) && (o != null && o.length) && (e(10, Fe = !0), o.some((Y) => Y.url || Y.typed || Y.menu_items) || u.logError(K(new Error("The component has a list of actions, but does not have a real action"), {
        level: "warn",
        additional: { actions: o }
      })));
    }
    t.$$.dirty[0] & /*customAccessibility, href, hasJSAction, role*/
    134221312 && (se != null && se.type && g0.has(se.type) ? se.type === "header" ? e(11, et = "heading") : e(11, et = se.type) : de ? e(11, et = void 0) : Fe && e(11, et = "button"), (et === "checkbox" || et === "radio") && typeof (se == null ? void 0 : se.is_checked) == "boolean" ? e(15, _e = se.is_checked) : e(15, _e = void 0)), t.$$.dirty[0] & /*node, href, hasJSAction, doubleTapActions, longTapActions, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions, captureFocusOnAction*/
    300943106 && ie && (de || Fe || _ != null && _.length ? ie.addEventListener("click", ye) : ie.removeEventListener("click", ye), _ != null && _.length || h != null && h.length || m != null && m.length || p != null && p.length ? (ie.addEventListener("pointerdown", $, { passive: !0 }), window.addEventListener("pointermove", Ae, { passive: !0 }), window.addEventListener("pointerup", xe, { passive: !0 }), window.addEventListener("pointercancel", xe, { passive: !0 })) : (ie.removeEventListener("pointerdown", $), window.removeEventListener("pointerup", xe), window.removeEventListener("pointermove", Ae), window.removeEventListener("pointercancel", xe)), k != null && k.length ? ie.addEventListener("pointerenter", qe) : ie.removeEventListener("pointerenter", qe), w != null && w.length ? ie.addEventListener("pointerleave", te) : ie.removeEventListener("pointerleave", te), j === !1 ? ie.addEventListener("mousedown", du) : ie.removeEventListener("mousedown", du), e(14, Ge = !!(de || Fe || _ != null && _.length || h != null && h.length || m != null && m.length || p != null && p.length || k != null && k.length || w != null && w.length)));
  }, [
    u,
    h,
    O,
    G,
    L,
    ee,
    P,
    z,
    ie,
    de,
    Fe,
    et,
    Ie,
    je,
    Ge,
    _e,
    n,
    Xe,
    c,
    f,
    _,
    m,
    p,
    k,
    w,
    fe,
    Z,
    se,
    j,
    o,
    l,
    a,
    Le,
    tt,
    dt,
    lt,
    wt,
    ot,
    At,
    it,
    me,
    ne,
    at,
    Ve,
    D,
    jt,
    gt,
    kt,
    St,
    rt
  ];
}
class rl extends Lr {
  constructor(r) {
    super(), Or(
      this,
      r,
      h0,
      p0,
      Ar,
      {
        componentContext: 0,
        id: 18,
        actions: 19,
        doubleTapActions: 20,
        longTapActions: 1,
        pressStartActions: 21,
        pressEndActions: 22,
        hoverStartActions: 23,
        hoverEndActions: 24,
        cls: 2,
        style: 3,
        attrs: 4,
        use: 5,
        customAction: 25,
        isNativeActionAnimation: 6,
        hasInnerFocusable: 26,
        customAccessibility: 27,
        captureFocusOnAction: 28,
        containerElement: 7
      },
      null,
      [-1, -1, -1]
    );
  }
}
const oi = {
  "outer-background": "appkit-outer-background",
  "outer-background_clip": "appkit-outer-background_clip",
  "outer-background__item": "appkit-outer-background__item",
  "outer-background__item_hidden": "appkit-outer-background__item_hidden"
};
function Jn(t) {
  return tl(t) && t > 0;
}
function Id(t, r) {
  return t.map((e) => {
    if (!e) {
      r(K(new Error("Incorrect filter"), {
        level: "warn"
      }));
      return;
    }
    if (e.type === "blur") {
      if (Jn(e.radius))
        return `blur(${fn(e.radius / 2)})`;
    } else {
      if (e.type === "rtl_mirror")
        return;
      r(K(new Error("Unknown filter"), {
        level: "warn",
        additional: {
          filter: e.type
        }
      }));
    }
  }).filter(Boolean).join(" ");
}
function _u(t, r, e) {
  const n = t.slice();
  return n[6] = r[e], n;
}
function m0(t) {
  let r, e;
  return {
    c() {
      r = Se("span"), g(r, "class", oi["outer-background__item"]), g(r, "style", e = $t(
        /*item*/
        t[6].style
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o & /*styles*/
      2 && e !== (e = $t(
        /*item*/
        n[6].style
      )) && g(r, "style", e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function b0(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Se("img"), Zn(r.src, e = /*item*/
      t[6].image_url) || g(r, "src", e), g(r, "alt", ""), g(r, "aria-hidden", "true"), g(r, "loading", "lazy"), g(r, "decoding", "async"), g(r, "class", oi["outer-background__item"]), g(r, "style", n = $t(
        /*item*/
        t[6].style
      ));
    },
    m(s, a) {
      q(s, r, a), o || (i = He(
        r,
        "error",
        /*onImgError*/
        t[2]
      ), o = !0);
    },
    p(s, a) {
      a & /*styles*/
      2 && !Zn(r.src, e = /*item*/
      s[6].image_url) && g(r, "src", e), a & /*styles*/
      2 && n !== (n = $t(
        /*item*/
        s[6].style
      )) && g(r, "style", n);
    },
    d(s) {
      s && J(r), o = !1, i();
    }
  };
}
function pu(t) {
  let r;
  function e(i, s) {
    return (
      /*item*/
      i[6].image_url ? b0 : m0
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Kt();
    },
    m(i, s) {
      o.m(i, s), q(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && J(r), o.d(i);
    }
  };
}
function y0(t) {
  let r, e, n = nr(
    /*styles*/
    t[1]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = pu(_u(t, n, i));
  return {
    c() {
      r = Se("span");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", e = oi["outer-background"] + /*radius*/
      (t[0] ? " " + oi["outer-background_clip"] : "")), M(
        r,
        "border-radius",
        /*radius*/
        t[0]
      );
    },
    m(i, s) {
      q(i, r, s);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(r, null);
    },
    p(i, [s]) {
      if (s & /*styles, onImgError*/
      6) {
        n = nr(
          /*styles*/
          i[1]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = _u(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = pu(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s & /*radius*/
      1 && e !== (e = oi["outer-background"] + /*radius*/
      (i[0] ? " " + oi["outer-background_clip"] : "")) && g(r, "class", e), s & /*radius*/
      1 && M(
        r,
        "border-radius",
        /*radius*/
        i[0]
      );
    },
    i: A,
    o: A,
    d(i) {
      i && J(r), nn(o, i);
    }
  };
}
function w0(t, r, e) {
  let n, { direction: o } = r, { componentContext: i } = r, { background: s = [] } = r, { radius: a = "" } = r;
  function l(u) {
    u.target && "classList" in u.target && u.target.classList.add(oi["outer-background__item_hidden"]);
  }
  return t.$$set = (u) => {
    "direction" in u && e(3, o = u.direction), "componentContext" in u && e(4, i = u.componentContext), "background" in u && e(5, s = u.background), "radius" in u && e(0, a = u.radius);
  }, t.$$.update = () => {
    t.$$.dirty & /*background, direction, componentContext*/
    56 && e(1, n = s.map((u) => {
      const c = {}, f = { style: c };
      if (u.type === "nine_patch_image" && u.insets)
        c["border-image"] = `url("${u.image_url}") ${u.insets.top || 0} ${u.insets.right || 0} ${u.insets.bottom || 0} ${u.insets.left || 0} fill`, c["border-image-width"] = "auto";
      else {
        const _ = el([u], o);
        u.type === "solid" && (c["background-color"] = _.color), u.type === "gradient" && (c["background-image"] = _.image), u.type === "image" && (c.opacity = Number(u.alpha), f.image_url = u.image_url, c["object-fit"] = _.size, c["object-position"] = _.position, Array.isArray(u.filters) && u.filters.length && (c.filter = Id(u.filters, i.logError), o === "rtl" && u.filters.some((h) => h.type === "rtl_mirror") && (c.transform = "scale(-1,1)")));
      }
      return f;
    }));
  }, [a, n, l, o, i, s];
}
class k0 extends Lr {
  constructor(r) {
    super(), Or(this, r, w0, y0, Ar, {
      direction: 3,
      componentContext: 4,
      background: 5,
      radius: 0
    });
  }
}
const v0 = (t) => ({
  hasCustomFocus: t[0] & /*hasCustomFocus*/
  131072,
  widthMin: t[0] & /*widthMin*/
  64,
  widthMax: t[0] & /*widthMax*/
  128,
  heightMin: t[0] & /*heightMin*/
  256,
  heightMax: t[0] & /*heightMax*/
  512
}), gu = (t) => ({
  focusHandler: (
    /*focusHandler*/
    t[51]
  ),
  blurHandler: (
    /*blurHandler*/
    t[52]
  ),
  hasCustomFocus: (
    /*hasCustomFocus*/
    t[17]
  ),
  widthMin: (
    /*widthMin*/
    t[6]
  ),
  widthMax: (
    /*widthMax*/
    t[7]
  ),
  heightMin: (
    /*heightMin*/
    t[8]
  ),
  heightMax: (
    /*heightMax*/
    t[9]
  )
});
function hu(t) {
  let r, e;
  return r = new rl({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      id: (
        /*componentContext*/
        t[0].json.id
      ),
      use: (
        /*useAction*/
        t[50]
      ),
      cls: (
        /*cls*/
        t[1] + " " + ht(
          "outer",
          Ms,
          /*mods*/
          t[31]
        ) + /*customClass*/
        (t[30] ? ` ${/*customClass*/
        t[30]}` : "") + /*hoverClassName*/
        (t[18] ? ` ${/*hoverClassName*/
        t[18]}` : "")
      ),
      style: $t(
        /*stl*/
        t[29]
      ),
      actions: (
        /*actions*/
        t[25]
      ),
      doubleTapActions: (
        /*doubleTapActions*/
        t[26]
      ),
      longTapActions: (
        /*longTapActions*/
        t[27]
      ),
      pressStartActions: (
        /*pressStartActions*/
        t[12]
      ),
      pressEndActions: (
        /*pressEndActions*/
        t[13]
      ),
      hoverStartActions: (
        /*hoverStartActions*/
        t[14]
      ),
      hoverEndActions: (
        /*hoverEndActions*/
        t[15]
      ),
      attrs: (
        /*attrs*/
        t[21]
      ),
      hasInnerFocusable: (
        /*hasInnerFocusable*/
        t[2]
      ),
      isNativeActionAnimation: !/*actionAnimationList*/
      t[16].length || yu(
        /*actionAnimationList*/
        t[16]
      ),
      customAccessibility: (
        /*$jsonAccessibility*/
        t[20]
      ),
      captureFocusOnAction: (
        /*captureFocusOnAction*/
        t[28]
      ),
      containerElement: (
        /*containerElement*/
        t[3]
      ),
      $$slots: { default: [j0] },
      $$scope: { ctx: t }
    }
  }), r.$on(
    "focus",
    /*focusHandler*/
    t[51]
  ), r.$on(
    "blur",
    /*blurHandler*/
    t[52]
  ), r.$on(
    "pointerdown",
    /*pointerdown_handler*/
    t[127]
  ), r.$on(
    "wheel",
    /*wheel_handler*/
    t[128]
  ), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*componentContext*/
      1 && (i.id = /*componentContext*/
      n[0].json.id), o[0] & /*cls, customClass, hoverClassName*/
      1074003970 | o[1] & /*mods*/
      1 && (i.cls = /*cls*/
      n[1] + " " + ht(
        "outer",
        Ms,
        /*mods*/
        n[31]
      ) + /*customClass*/
      (n[30] ? ` ${/*customClass*/
      n[30]}` : "") + /*hoverClassName*/
      (n[18] ? ` ${/*hoverClassName*/
      n[18]}` : "")), o[0] & /*stl*/
      536870912 && (i.style = $t(
        /*stl*/
        n[29]
      )), o[0] & /*actions*/
      33554432 && (i.actions = /*actions*/
      n[25]), o[0] & /*doubleTapActions*/
      67108864 && (i.doubleTapActions = /*doubleTapActions*/
      n[26]), o[0] & /*longTapActions*/
      134217728 && (i.longTapActions = /*longTapActions*/
      n[27]), o[0] & /*pressStartActions*/
      4096 && (i.pressStartActions = /*pressStartActions*/
      n[12]), o[0] & /*pressEndActions*/
      8192 && (i.pressEndActions = /*pressEndActions*/
      n[13]), o[0] & /*hoverStartActions*/
      16384 && (i.hoverStartActions = /*hoverStartActions*/
      n[14]), o[0] & /*hoverEndActions*/
      32768 && (i.hoverEndActions = /*hoverEndActions*/
      n[15]), o[0] & /*attrs*/
      2097152 && (i.attrs = /*attrs*/
      n[21]), o[0] & /*hasInnerFocusable*/
      4 && (i.hasInnerFocusable = /*hasInnerFocusable*/
      n[2]), o[0] & /*actionAnimationList*/
      65536 && (i.isNativeActionAnimation = !/*actionAnimationList*/
      n[16].length || yu(
        /*actionAnimationList*/
        n[16]
      )), o[0] & /*$jsonAccessibility*/
      1048576 && (i.customAccessibility = /*$jsonAccessibility*/
      n[20]), o[0] & /*captureFocusOnAction*/
      268435456 && (i.captureFocusOnAction = /*captureFocusOnAction*/
      n[28]), o[0] & /*containerElement*/
      8 && (i.containerElement = /*containerElement*/
      n[3]), o[0] & /*borderElemStyle, hasBorder, hasCustomFocus, widthMin, widthMax, heightMin, heightMax, componentContext, $direction, background, backgroundRadius, hasSeparateBg*/
      4853745 | o[4] & /*$$scope*/
      32 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function mu(t) {
  let r, e;
  return r = new k0({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      direction: (
        /*$direction*/
        t[19]
      ),
      background: (
        /*background*/
        t[10]
      ),
      radius: (
        /*backgroundRadius*/
        t[5]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*$direction*/
      524288 && (i.direction = /*$direction*/
      n[19]), o[0] & /*background*/
      1024 && (i.background = /*background*/
      n[10]), o[0] & /*backgroundRadius*/
      32 && (i.radius = /*backgroundRadius*/
      n[5]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function bu(t) {
  let r, e;
  return {
    c() {
      r = Se("span"), g(r, "class", Ms.outer__border), g(r, "style", e = $t(
        /*borderElemStyle*/
        t[4]
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o[0] & /*borderElemStyle*/
      16 && e !== (e = $t(
        /*borderElemStyle*/
        n[4]
      )) && g(r, "style", e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function j0(t) {
  let r, e, n, o = (
    /*hasSeparateBg*/
    t[11] && mu(t)
  );
  const i = (
    /*#slots*/
    t[126].default
  ), s = qs(
    i,
    t,
    /*$$scope*/
    t[129],
    gu
  );
  let a = (
    /*hasBorder*/
    t[22] && bu(t)
  );
  return {
    c() {
      o && o.c(), r = Kt(), s && s.c(), a && a.c(), e = Kt();
    },
    m(l, u) {
      o && o.m(l, u), q(l, r, u), s && s.m(l, u), a && a.m(l, u), q(l, e, u), n = !0;
    },
    p(l, u) {
      /*hasSeparateBg*/
      l[11] ? o ? (o.p(l, u), u[0] & /*hasSeparateBg*/
      2048 && B(o, 1)) : (o = mu(l), o.c(), B(o, 1), o.m(r.parentNode, r)) : o && (or(), Q(o, 1, 1, () => {
        o = null;
      }), ir()), s && s.p && (!n || u[0] & /*hasCustomFocus, widthMin, widthMax, heightMin, heightMax*/
      132032 | u[4] & /*$$scope*/
      32) && Ks(
        s,
        i,
        l,
        /*$$scope*/
        l[129],
        n ? Ys(
          i,
          /*$$scope*/
          l[129],
          u,
          v0
        ) : Xs(
          /*$$scope*/
          l[129]
        ),
        gu
      ), /*hasBorder*/
      l[22] ? a ? a.p(l, u) : (a = bu(l), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null);
    },
    i(l) {
      n || (B(o), B(s, l), n = !0);
    },
    o(l) {
      Q(o), Q(s, l), n = !1;
    },
    d(l) {
      l && (J(r), J(e)), o && o.d(l), s && s.d(l), a && a.d(l);
    }
  };
}
function C0(t) {
  let r, e, n = !/*hasWidthError*/
  t[23] && !/*hasHeightError*/
  t[24] && hu(t);
  return {
    c() {
      n && n.c(), r = Kt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, i) {
      !/*hasWidthError*/
      o[23] && !/*hasHeightError*/
      o[24] ? n ? (n.p(o, i), i[0] & /*hasWidthError, hasHeightError*/
      25165824 && B(n, 1)) : (n = hu(o), n.c(), B(n, 1), n.m(r.parentNode, r)) : n && (or(), Q(n, 1, 1, () => {
        n = null;
      }), ir());
    },
    i(o) {
      e || (B(n), e = !0);
    },
    o(o) {
      Q(n), e = !1;
    },
    d(o) {
      o && J(r), n && n.d(o);
    }
  };
}
const E0 = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
}, A0 = {
  left: "end",
  center: "center",
  right: "start",
  start: "start",
  end: "end"
}, S0 = {
  top: "start",
  center: "center",
  bottom: "end",
  baseline: "baseline"
}, gl = (t) => `The component id with the "${t}" property for state change is missing. Either specify the id, or specify the "transition_trigger" property without "state_change" value.`;
function yu(t) {
  return t.some((r) => r.name === "native");
}
function V0(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, G, L, ee, fe, P, Z, se, j, z, N, W = A, ie = () => (W(), W = F(w, (Ne) => e(110, N = Ne)), w), de, je = A, Ee = () => (je(), je = F(O, (Ne) => e(111, de = Ne)), O), pe, ze = A, be = () => (ze(), ze = F(k, (Ne) => e(112, pe = Ne)), k), Fe, Ge = A, Ze = () => (Ge(), Ge = F(G, (Ne) => e(113, Fe = Ne)), G), ke, et = A, _e = () => (et(), et = F(p, (Ne) => e(114, ke = Ne)), p), Ie, ue, oe = A, ye = () => (oe(), oe = F(m, (Ne) => e(115, ue = Ne)), m), $, Ae = A, xe = () => (Ae(), Ae = F(o, (Ne) => e(116, $ = Ne)), o), qe, te = A, Xe = () => (te(), te = F(h, (Ne) => e(20, qe = Ne)), h), Le, tt = A, dt = () => (tt(), tt = F(_, (Ne) => e(117, Le = Ne)), _), lt, wt = A, ot = () => (wt(), wt = F(f, (Ne) => e(118, lt = Ne)), f), At, it = A, me = () => (it(), it = F(c, (Ne) => e(119, At = Ne)), c), ne, at = A, Ve = () => (at(), at = F(a, (Ne) => e(120, ne = Ne)), a), D, jt = A, gt = () => (jt(), jt = F(u, (Ne) => e(121, D = Ne)), u), kt, St = A, rt = () => (St(), St = F(l, (Ne) => e(122, kt = Ne)), l), Y, Vt = A, Dt = () => (Vt(), Vt = F(s, (Ne) => e(123, Y = Ne)), s), Gt, Jt = A, ve = () => (Jt(), Jt = F(i, (Ne) => e(124, Gt = Ne)), i), We;
  t.$$.on_destroy.push(() => W()), t.$$.on_destroy.push(() => je()), t.$$.on_destroy.push(() => ze()), t.$$.on_destroy.push(() => Ge()), t.$$.on_destroy.push(() => et()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => te()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => wt()), t.$$.on_destroy.push(() => it()), t.$$.on_destroy.push(() => at()), t.$$.on_destroy.push(() => jt()), t.$$.on_destroy.push(() => St()), t.$$.on_destroy.push(() => Vt()), t.$$.on_destroy.push(() => Jt());
  let { $$slots: ft = {}, $$scope: Me } = r, { componentContext: T } = r, { cls: Oe = "" } = r, { style: xt = void 0 } = r, { layoutParams: ae = {} } = r, { customDescription: mt = !1 } = r, { customPaddings: Wt = !1 } = r, { customActions: Ft = "" } = r, { additionalPaddings: ar = null } = r, { heightByAspect: Te = !1 } = r, { parentOf: bt = void 0 } = r, { parentOfSimpleMode: er = void 0 } = r, { replaceItems: Qt = void 0 } = r, { hasInnerFocusable: Xt = !1 } = r, { alwaysCustomFocus: ur = !1 } = r, { containerElement: jr = "span" } = r, { devapi: Yt = void 0 } = r;
  const It = Dr(Yr), Tt = Dr(sa), { isEnabled: ut } = Dr(la);
  bn(t, ut, (Ne) => e(125, We = Ne));
  const qt = It.direction;
  bn(t, qt, (Ne) => e(19, Ie = Ne));
  let sr, dr, mr = null, pr = [], Fr = {}, zr = {}, gr = !1, $e = 1, ct = "transparent", Mt = 0, br = {
    "top-left": 0,
    "top-right": 0,
    "bottom-right": 0,
    "bottom-left": 0
  }, wr = "", nt = null, le = "", Ct = {}, rr, hr, Sr, v = 0, re = 0, d = 0, C = !1, De = !1, Re = {}, Ot, H, Lt, st = 0, Ue = 0, Ye = 0, Ut = !1, yr = !1, Jr = 1, tn, Gr, he, wn, Kr = [], on = !1, zn = !1, y, E, S, x = [], R = [], Qe = [], Ce = [], Zt = [], yt = [], Ke = [], tr = [], Et = [], Cr = [], Vr = "", sn, ln, Cn, un, Dn = !1, Rn = "visible", Sn, Nt, b = !1, V = !0, X, I, we, ge = null, Pt;
  function Ht() {
    e(72, nt = null), e(73, le = ""), e(86, Jr = 1), e(98, Dn = !1), e(99, Rn = "visible"), e(100, Sn = void 0), e(28, V = !0), Kr = T.fakeElement ? [] : T.json.transition_triggers || ["state_change", "visibility_change"], e(89, on = Kr.indexOf("state_change") !== -1), zn = Kr.indexOf("visibility_change") !== -1, sr && Xi(sr), I == null || I(), We && e(102, I = It.processVariableTriggers(T, T.json.variable_triggers));
  }
  function Xr(Ne, Nr) {
    if (!Array.isArray(bt) || !Qt || er && (Array.isArray(Nr) ? Nr.length : 0) !== 1)
      return;
    const hn = bt.findIndex((Qr) => (Qr == null ? void 0 : Qr.id) === Ne), Rr = bt.slice();
    Rr.splice(hn, 1, ...(Nr || []).map((Qr) => ({ json: Qr, id: Qr == null ? void 0 : Qr.id }))), e(53, bt = Rr), Qt(Rr.map((Qr) => Qr == null ? void 0 : Qr.json));
  }
  function Tr(Ne) {
    const Nr = oo(Ne.start_value, 1), hn = oo(Ne.end_value, 1), Rr = en(Ne.start_delay, 0), Qr = Ai() ? 0 : en(Ne.duration, 300), On = Fd(Ne.interpolator, "ease_in_out").replace(/_/g, "-");
    switch (Ne.name) {
      case "fade":
        return e(94, sn = Nr), e(95, ln = hn), `opacity ${Qr}ms ${On} ${Rr}ms`;
      case "scale":
        return e(96, Cn = Nr), e(97, un = hn), `transform ${Qr}ms ${On} ${Rr}ms`;
      case "native":
      case "no_animation":
        return "";
      default:
        return T.logError(K(new Error("Unknown action_animation name"), {
          additional: { animation: Ne.name }
        })), "";
    }
  }
  async function Zr(Ne) {
    e(99, Rn = Ne);
    const Nr = Ne === "visible" ? "in" : "out", hn = Nr === "in" ? T.json.transition_in : T.json.transition_out;
    if (zn && hn) {
      let Rr;
      Ne === "gone" && (Rr = sr.getBoundingClientRect()), await An(), Nr === "in" && e(91, E = !0), Tt.runVisibilityTransition(
        {
          ...T.json,
          visibility: "visible"
        },
        T,
        hn,
        sr,
        Nr,
        Rr
      ).then(() => {
        Nr === "in" && e(91, E = !1);
      }).catch((Qr) => {
        throw Nr === "in" && e(91, E = !1), Qr;
      });
    }
  }
  function yo() {
    if (mr && sr) {
      const Ne = It.getExtensionContext(T);
      mr.forEach((Nr) => {
        var hn;
        (hn = Nr.unmountView) == null || hn.call(Nr, sr, Ne);
      }), mr = null;
    }
  }
  function ro() {
    if (mr != null && mr.length) {
      const Ne = It.getExtensionContext(T);
      mr.forEach((Nr) => {
        var hn;
        (hn = Nr.updateView) == null || hn.call(Nr, sr, Ne);
      });
    }
    ge && ge.update(T);
  }
  let Vn = null, Hn = "";
  function Xi(Ne) {
    var wo, Ni, zi;
    we == null || we.destroy(), e(65, sr = Ne), on && T.json.transition_in && (T.id ? Tt.registerChildWithTransitionIn(T.json, T, T.json.transition_in, Ne).then(() => {
      e(90, y = !1);
    }).catch((Bo) => {
      throw e(90, y = !1), Bo;
    }) : T.logError(K(new Error(gl("transition_in")), { level: "warn" }))), on && T.json.transition_out && (T.id ? Tt.registerChildWithTransitionOut(T.json, T, T.json.transition_out, Ne) : T.logError(K(new Error(gl("transition_out")), { level: "warn" }))), T.fakeElement || (T.json.transition_change && !T.id && T.logError(K(new Error(gl("transition_change")), { level: "warn" })), Tt.registerChildWithTransitionChange(T.json, T, T.json.transition_change, Ne).then(() => {
      e(92, S = !1);
    }).catch((Bo) => {
      throw e(92, S = !1), Bo;
    }));
    const Nr = !T.fakeElement || T.fakeElement === Ko, hn = Nr ? T.json.visibility_actions || T.json.visibility_action && [T.json.visibility_action] : [], Rr = Nr ? T.json.disappear_actions : [];
    let Qr;
    (Array.isArray(hn) && hn.length || Array.isArray(Rr) && Rr.length) && (Qr = Qh(Ne, {
      visibilityActions: hn,
      disappearActions: Rr,
      rootCtx: It,
      componentContext: T
    }));
    const On = T.id;
    return On && (Pt == null || Pt(), Pt = It.registerId(On, {
      context: () => T,
      node: () => sr
    }), Tt.registerChild(On)), (wo = T.json.tooltips) == null || wo.forEach((Bo) => {
      It.registerTooltip(Ne, Bo);
    }), Nt && (Nt.disconnect(), Nt = void 0), Nt = l0(sr, T, (Ni = T.json.layout_provider) == null ? void 0 : Ni.width_variable_name, (zi = T.json.layout_provider) == null ? void 0 : zi.height_variable_name), T.fakeElement || (ge = Vd(Ne, It, T, Yt)), we = {
      destroy() {
        Pt && (Pt(), Pt = void 0), On && Tt.unregisterChild(On), Qr && Qr.destroy(), ge && ge.destroy();
      }
    }, we;
  }
  function ll() {
    T.json.focus && ((ur || !Ml(It.isPointerFocus)) && e(17, b = !0), T.execAnyActions(Ce));
  }
  function al() {
    T.json.focus && (e(17, b = !1), T.execAnyActions(Zt));
  }
  Qs(ro), an(() => {
    var Ne;
    pr.forEach((Nr) => {
      It.unregisterParentOf(Nr);
    }), e(66, pr = []), Nt && (Nt.disconnect(), Nt = void 0), (Ne = T.json.tooltips) == null || Ne.forEach((Nr) => {
      It.unregisterTooltip(Nr);
    }), I == null || I(), yo(), Vn && (Vn.remove(), e(103, Vn = null));
  });
  function Je(Ne) {
    Ln.call(this, t, Ne);
  }
  function kr(Ne) {
    Ln.call(this, t, Ne);
  }
  return t.$$set = (Ne) => {
    "componentContext" in Ne && e(0, T = Ne.componentContext), "cls" in Ne && e(1, Oe = Ne.cls), "style" in Ne && e(54, xt = Ne.style), "layoutParams" in Ne && e(55, ae = Ne.layoutParams), "customDescription" in Ne && e(56, mt = Ne.customDescription), "customPaddings" in Ne && e(57, Wt = Ne.customPaddings), "customActions" in Ne && e(58, Ft = Ne.customActions), "additionalPaddings" in Ne && e(59, ar = Ne.additionalPaddings), "heightByAspect" in Ne && e(60, Te = Ne.heightByAspect), "parentOf" in Ne && e(53, bt = Ne.parentOf), "parentOfSimpleMode" in Ne && e(61, er = Ne.parentOfSimpleMode), "replaceItems" in Ne && e(62, Qt = Ne.replaceItems), "hasInnerFocusable" in Ne && e(2, Xt = Ne.hasInnerFocusable), "alwaysCustomFocus" in Ne && e(63, ur = Ne.alwaysCustomFocus), "containerElement" in Ne && e(3, jr = Ne.containerElement), "devapi" in Ne && e(64, Yt = Ne.devapi), "$$scope" in Ne && e(129, Me = Ne.$$scope);
  }, t.$$.update = () => {
    var Ne, Nr, hn, Rr, Qr, On, wo, Ni, zi, Bo, ga;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(109, n = T.origJson), t.$$.dirty[3] & /*origJson*/
    65536 && n && Ht(), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[3] & /*prevTriggersUnsubscribe*/
    512 | t.$$.dirty[4] & /*$isEnabled*/
    2 && (We ? (I == null || I(), e(102, I = It.processVariableTriggers(T, T.json.variable_triggers))) : I == null || I()), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(47, o = T.getDerivedFromVars(T.json.focus))), t.$$.dirty[0] & /*componentContext*/
    1 && ve(e(46, i = T.getDerivedFromVars(T.json.border))), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(45, s = T.getDerivedFromVars(T.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Ve(e(44, a = T.getDerivedFromVars(T.json.margins))), t.$$.dirty[0] & /*componentContext*/
    1 && rt(e(43, l = T.getDerivedFromVars(T.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && gt(e(42, u = T.getDerivedFromVars(T.json.alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(41, c = T.getDerivedFromVars(T.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && ot(e(40, f = T.getDerivedFromVars(T.json.alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && dt(e(39, _ = T.getDerivedFromVars(T.json.alpha))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(38, h = T.getDerivedFromVars(T.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && ye(e(37, m = T.getDerivedFromVars(T.json.background))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(36, p = T.getDerivedFromVars(T.json.action_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(35, k = T.getDerivedFromVars(T.json.visibility))), t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(34, w = T.getDerivedFromVars(T.json.transform))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(33, O = T.getDerivedFromVars(T.json.transformations))), t.$$.dirty[0] & /*componentContext*/
    1 && Ze(e(32, G = T.getDerivedFromVars(T.json.capture_focus_on_action))), t.$$.dirty[1] & /*parentOf, parentOfSimpleMode*/
    1077936128 | t.$$.dirty[2] & /*prevChilds*/
    16 && (pr.forEach((vt) => {
      It.unregisterParentOf(vt);
    }), e(66, pr = []), bt && bt.forEach((vt) => {
      vt != null && vt.id && (pr.push(vt.id), It.registerParentOf(vt.id, {
        replaceWith: Xr,
        isSingleMode: !!er
      }));
    })), t.$$.dirty[0] & /*hasCustomFocus, borderElemStyle*/
    131088 | t.$$.dirty[2] & /*strokeWidth, strokeColor, cornersRadius, cornerRadius, borderStyle*/
    992 | t.$$.dirty[3] & /*$jsonFocus*/
    8388608 | t.$$.dirty[4] & /*$jsonBorder*/
    1) {
      const vt = b && ($ != null && $.border) ? $.border : Gt;
      let xr = {}, kn = {}, Fn = !1, rn = "";
      if (vt) {
        if (_n(vt.has_shadow, !1)) {
          const cn = vt.shadow;
          cn ? xr["box-shadow"] = o0(cn) : xr["box-shadow"] = "0 1px 2px 0 rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.07)";
        }
        if (vt.stroke) {
          Fn = !0, e(68, $e = en(vt.stroke.width, $e)), e(69, ct = _r(vt.stroke.color, 1, ct));
          const cn = ((Ne = vt.stroke.style) == null ? void 0 : Ne.type) === "dashed" ? "dashed" : "solid";
          kn["--divkit-border"] = `${ce($e + 1)} ${cn} ${ct}`;
        }
        if (vt.corners_radius && typeof vt.corners_radius == "object") {
          e(71, br = n0(vt.corners_radius, br)), xr["border-radius"] = js(br);
          const cn = {};
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((Yn) => {
            cn[Yn] = (br[Yn] || 0) + 1;
          }), kn["--divkit-border-radius"] = js(cn);
        } else vt.corner_radius && (e(70, Mt = en(vt.corner_radius, Mt)), e(71, br = {
          "top-left": Mt,
          "top-right": Mt,
          "bottom-right": Mt,
          "bottom-left": Mt
        }), xr["border-radius"] = ce(Mt), kn["--divkit-border-radius"] = ce(Mt + 1));
        if (Fn && $e && (vt.corners_radius || vt.corner_radius)) {
          let cn = { ...br };
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((Yn) => {
            cn[Yn] = (cn[Yn] || 0) + $e / 2;
          }), rn = js(cn);
        }
      }
      e(67, Fr = Uo(xr, Fr)), e(4, zr = Uo(kn, zr)), e(22, gr = Fn), e(5, wr = rn);
    }
    if (t.$$.dirty[1] & /*customPaddings*/
    67108864 | t.$$.dirty[2] & /*selfPadding*/
    1024 | t.$$.dirty[3] & /*$jsonPaddings*/
    1073741824 && e(72, nt = Pi(
      Y && !Wt ? Y : void 0,
      nt
    )), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[1] & /*additionalPaddings*/
    268435456 | t.$$.dirty[2] & /*selfPadding*/
    1024 && e(105, L = mo(r0(nt, ar), Ie)), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[2] & /*margin*/
    2048 | t.$$.dirty[3] & /*$jsonMargins*/
    134217728 && e(73, le = Ps(ne, Ie, le)), t.$$.dirty[0] & /*componentContext, $direction*/
    524289 | t.$$.dirty[1] & /*layoutParams*/
    16777216 | t.$$.dirty[2] & /*widthNum, widthMods*/
    20480 | t.$$.dirty[3] & /*$jsonWidth, $jsonMargins, $jsonAlignmentHorizontal*/
    939524096) {
      let vt, xr, kn, Fn, rn = {}, cn = 0, Yn = 0, Mo = !1, Po = !1;
      const mn = (Nr = T.json.width) == null ? void 0 : Nr.type;
      if (mn === "fixed")
        e(76, v = en(kt == null ? void 0 : kt.value, v)), xr = ce(v);
      else if (mn === "wrap_content" || (mn === "match_parent" || !mn) && ae.parentHorizontalWrapContent)
        vt = "content", (mn === "wrap_content" && (kt != null && kt.constrained) || (mn === "match_parent" || !mn) && ae.parentHorizontalWrapContent) && (rn["width-constrained"] = !0, ae.parentContainerOrientation === "horizontal" && (Yn = 1)), (mn === "match_parent" || !mn) && T.logError(K(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      else if (vt = "parent", ae.parentContainerOrientation === "vertical" && ae.parentContainerWrap && (Po = !0, T.logError(K(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), ae.parentContainerOrientation === "vertical" && ae.parentContainerKnownWidth || ae.stretchWidth || ae.parentContainerOrientation === "horizontal" && ae.treatMatchParentAs100) {
        const qr = (Rr = (hn = Ie === "ltr" ? ne == null ? void 0 : ne.start : ne == null ? void 0 : ne.end) != null ? hn : ne == null ? void 0 : ne.left) != null ? Rr : 0, In = (On = (Qr = Ie === "ltr" ? ne == null ? void 0 : ne.end : ne == null ? void 0 : ne.start) != null ? Qr : ne == null ? void 0 : ne.right) != null ? On : 0, jn = `calc(100% - ${fn(qr + In)})`;
        ae.stretchWidth ? (xr = "0", kn = jn) : xr = jn;
      } else ae.parentContainerOrientation === "horizontal" && (cn = kt && "weight" in kt && kt.weight || 1, ae.parentContainerWrap && (Mo = !0));
      if (mn === "wrap_content" || mn === "match_parent") {
        const qr = kt;
        let In, jn;
        qr.min_size && Tn(qr.min_size.value) && (In = qr.min_size.value), qr.max_size && Tn(qr.max_size.value) && (jn = qr.max_size.value), In !== void 0 && jn !== void 0 && In > jn && (T.logError(K(new Error("Element has incorrect width constraints (min size is bigger than max size)."), {
          additional: {
            id: T.json.id,
            minSize: In + "dp",
            maxSize: jn + "dp"
          }
        })), In = jn = void 0), In !== void 0 && (kn = ce(In)), jn !== void 0 && (Fn = ce(jn));
      }
      if (vt === "parent")
        rn["halign-self"] = "stretch";
      else {
        const qr = D;
        qr === "left" || qr === "center" || qr === "right" || qr === "start" || qr === "end" ? rn["halign-self"] = (Ie === "ltr" ? E0 : A0)[qr] : rn["halign-self"] = ae.parentHAlign || "start";
      }
      vt && (rn.width = vt), e(75, rr = xr), e(6, hr = kn), e(7, Sr = Fn), e(77, re = cn), e(78, d = Yn), e(74, Ct = Uo(rn, Ct)), e(79, C = Mo), e(23, De = Po);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*heightByAspect, layoutParams*/
    553648128 | t.$$.dirty[2] & /*heightNum, heightMods*/
    1310720 | t.$$.dirty[3] & /*$jsonHeight, $jsonMargins, $jsonAlignmentVertical*/
    234881024) {
      let vt, xr, kn, Fn, rn = {}, cn = 0, Yn = 0, Mo = !1, Po = !1;
      const mn = (wo = T.json.height) == null ? void 0 : wo.type;
      if (!Te) if (mn === "fixed")
        e(82, st = en(At == null ? void 0 : At.value, st)), xr = ce(st);
      else if (mn === "match_parent" && !ae.parentVerticalWrapContent)
        if (vt = "parent", ae.parentContainerOrientation === "horizontal" && ae.parentContainerWrap && (Po = !0, T.logError(K(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), ae.parentContainerOrientation === "horizontal" && ae.parentContainerKnownHeight || ae.stretchHeight || ae.parentContainerOrientation === "vertical" && ae.treatMatchParentAs100) {
          const qr = (Ni = ne == null ? void 0 : ne.top) != null ? Ni : 0, In = (zi = ne == null ? void 0 : ne.bottom) != null ? zi : 0, jn = `calc(100% - ${fn(qr + In)})`;
          ae.stretchHeight ? (xr = "0", kn = jn) : xr = jn;
        } else ae.parentContainerOrientation === "vertical" && (cn = (At == null ? void 0 : At.weight) || 1, ae.parentContainerWrap && (Mo = !0));
      else
        vt = "content", (mn === "wrap_content" && (At != null && At.constrained) || mn === "match_parent" && ae.parentVerticalWrapContent) && (rn["height-constrained"] = !0, ae.parentContainerOrientation === "vertical" && (Yn = 1)), mn === "match_parent" && T.logError(K(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      if (!Te && (mn === "match_parent" || mn === "wrap_content")) {
        const qr = At;
        let In, jn;
        qr.min_size && Tn(qr.min_size.value) && (In = qr.min_size.value), qr.max_size && Tn(qr.max_size.value) && (jn = qr.max_size.value), In !== void 0 && jn !== void 0 && In > jn && (T.logError(K(new Error("Element has incorrect height constraints (min size is bigger than max size)."), {
          additional: {
            id: T.json.id,
            minSize: In + "dp",
            maxSize: jn + "dp"
          }
        })), In = jn = void 0), In !== void 0 && (kn = ce(In)), jn !== void 0 && (Fn = ce(jn));
      }
      if (vt === "parent")
        rn["valign-self"] = "stretch";
      else {
        const qr = lt;
        qr === "top" || qr === "center" || qr === "bottom" || qr === "baseline" && ae.parentContainerOrientation === "horizontal" ? rn["valign-self"] = S0[qr] : rn["valign-self"] = ae.parentVAlign || "start";
      }
      vt && (rn.height = vt), e(81, Ot = xr), e(8, H = kn), e(9, Lt = Fn), e(83, Ue = cn), e(84, Ye = Yn), e(80, Re = Uo(rn, Re)), e(85, Ut = Mo), e(24, yr = Po);
    }
    if (t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(108, ee = ae.overlapParent ? !0 : void 0), t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(106, fe = ae.gridArea ? `${ae.gridArea.y + 1}/${ae.gridArea.x + 1}/span ${ae.gridArea.rowSpan}/span ${ae.gridArea.colSpan}` : void 0), t.$$.dirty[2] & /*alpha*/
    16777216 | t.$$.dirty[3] & /*$jsonAlpha*/
    16777216 && (e(86, Jr = $h(Le, Jr)), e(87, tn = Jr === 1 ? void 0 : Jr)), t.$$.dirty[0] & /*$jsonAccessibility*/
    1048576 | t.$$.dirty[1] & /*customDescription*/
    33554432 && (e(21, dr = void 0), qe && !mt)) {
      const vt = Yo(qe);
      vt && (e(21, dr = {}), e(21, dr["aria-label"] = vt, dr));
    }
    if (t.$$.dirty[0] & /*hasCustomFocus, background, backgroundRadius, hasSeparateBg, $direction*/
    658464 | t.$$.dirty[3] & /*$jsonFocus, $jsonBackground*/
    12582912 && (e(10, Gr = b && ($ != null && $.background) ? $.background : ue), e(88, he = {}), e(11, wn = !1), Array.isArray(Gr) && (e(11, wn = Gr.some((vt) => vt.type === "image" || vt.type === "nine_patch_image") || !!wr), !wn))) {
      const vt = el(Gr, Ie);
      e(88, he["background-color"] = vt.color, he), e(88, he["background-image"] = vt.image, he), e(88, he["background-size"] = vt.size, he), e(88, he["background-position"] = vt.position, he), e(88, he["background-repeat"] = "no-repeat", he);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(90, y = void 0), on && T.id && T.json.transition_in && It.isRunning("stateChange") && e(90, y = !0)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(92, S = void 0), on && T.id && It.isRunning("stateChange") && Tt.hasTransitionChange(T.id) && e(92, S = !0)), t.$$.dirty[0] & /*componentContext, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions*/
    61441 | t.$$.dirty[1] & /*customActions*/
    134217728) {
      const vt = T.json;
      let xr = vt.actions || vt.action && [vt.action] || [], kn = vt.doubletap_actions || [], Fn = vt.longtap_actions || [], rn = ((Bo = vt.focus) == null ? void 0 : Bo.on_focus) || [], cn = ((ga = vt.focus) == null ? void 0 : ga.on_blur) || [], Yn = vt.press_start_actions || [], Mo = vt.press_end_actions || [], Po = vt.hover_start_actions || [], mn = vt.hover_end_actions || [];
      T.fakeElement && T.fakeElement !== Ko ? (xr = [], kn = [], Fn = [], rn = [], cn = []) : (Array.isArray(xr) || (xr = [], T.logError(K(new Error("Actions should be array")))), Array.isArray(kn) || (kn = [], T.logError(K(new Error("DoubleTapActions should be array")))), Array.isArray(Fn) || (Fn = [], T.logError(K(new Error("LongTapActions should be array")))), Array.isArray(rn) || (rn = [], T.logError(K(new Error("FocusActions should be array")))), Array.isArray(cn) || (cn = [], T.logError(K(new Error("BlurActions should be array")))), Array.isArray(Yn) || (Yn = [], T.logError(K(new Error("PressStartActions should be array")))), Array.isArray(Mo) || (Mo = [], T.logError(K(new Error("PressEndActions should be array")))), Array.isArray(Po) || (Po = [], T.logError(K(new Error("HoverStartActions should be array")))), Array.isArray(mn) || (mn = [], T.logError(K(new Error("HoverEndActions should be array"))))), (xr.length || kn.length || Fn.length || yt.length || Ke.length || tr.length || Et.length) && Ft && (xr = [], kn = [], Fn = [], e(12, yt = []), e(13, Ke = []), e(14, tr = []), e(15, Et = []), T.logError(K(new Error(`Cannot use action on component "${Ft}"`)))), e(25, x = xr), e(26, R = kn), e(27, Qe = Fn), Ce = rn, Zt = cn, e(12, yt = Yn), e(13, Ke = Mo), e(14, tr = Po), e(15, Et = mn);
    }
    if (t.$$.dirty[0] & /*actionAnimationList*/
    65536 | t.$$.dirty[3] & /*$jsonActionAnimation*/
    2097152 && ke && (e(16, Cr = qi(ke)), e(93, Vr = Cr.map(Tr).filter(Boolean).join(", "))), t.$$.dirty[3] & /*$jsonCaptureFocusOnAction*/
    1048576 && typeof Fe == "boolean" && e(28, V = Fe), t.$$.dirty[3] & /*visibility, $jsonVisibility, isVisibilityInited*/
    524384) {
      const vt = Rn, xr = t0(pe, Rn);
      vt !== xr && (Dn && (Rn === "visible" || xr === "visible") ? Zr(xr) : e(99, Rn = xr)), Dn || e(98, Dn = !0);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*currentNode*/
    8 | t.$$.dirty[3] & /*prevExtensionsVal*/
    256 && T.json && sr && !Mi(T.json.extensions, X)) {
      let vt = e(101, X = T.json.extensions);
      An().then(() => {
        if (!(vt !== X || !sr) && (yo(), Array.isArray(T.json.extensions))) {
          const xr = It.getExtensionContext(T);
          mr = T.json.extensions.map((kn) => {
            var cn;
            const Fn = kn.id;
            if (!Fn)
              return;
            const rn = It.getExtension(Fn, kn.params);
            return rn && ((cn = rn.mountView) == null || cn.call(rn, sr, xr)), rn;
          }).filter(To);
        }
      });
    }
    if (t.$$.dirty[0] & /*hasCustomFocus, componentContext*/
    131073 | t.$$.dirty[1] & /*layoutParams*/
    16777216 | t.$$.dirty[2] & /*widthMods, heightMods, stateChangingInProgress, visibilityChangingInProgress, transitionChangeInProgress*/
    1879314432 | t.$$.dirty[3] & /*parentOverlapMod, visibility, actionAnimationTransition*/
    32833 && e(31, P = {
      ...Ct,
      ...Re,
      "parent-overlap": ee,
      "scroll-snap": ae.scrollSnap,
      "hide-on-transition-in": y || E || S,
      visibility: Rn,
      "has-action-animation": !!Vr,
      "parent-flex": ae.parentContainerOrientation || void 0,
      "parent-grid": !!ae.gridArea || void 0,
      "has-custom-focus": !!(b && T.json.focus)
    }), t.$$.dirty[3] & /*$jsonTransformations, $jsonTransform*/
    393216) {
      let vt;
      Array.isArray(de) ? vt = de : N && N.rotation !== void 0 && (vt = [
        {
          type: "rotation",
          angle: N.rotation,
          pivot_x: N.pivot_x,
          pivot_y: N.pivot_y
        }
      ]), vt ? e(100, Sn = a0(vt)) : e(100, Sn = void 0);
    }
    if (t.$$.dirty[2] & /*widthFill, heightFill, widthFlexGrow, heightFlexGrow*/
    10649600 && e(104, Z = C || Ut ? "100%" : re || Ue ? 0 : void 0), t.$$.dirty[0] & /*componentContext*/
    1 && e(30, se = T.json["custom-class"] || ""), t.$$.dirty[0] & /*componentContext*/
    1 && e(107, j = T.json.hover), t.$$.dirty[0] & /*hoverClassName*/
    262144 | t.$$.dirty[3] & /*hoverConfig, hoverStyleEl*/
    17408)
      if (j && typeof j == "object" && typeof document < "u") {
        Hn || e(18, Hn = "divkit-hover-" + Math.random().toString(36).slice(2, 9));
        let vt = "";
        j.background_color && (vt += `background-color: ${j.background_color} !important;`), j.opacity !== void 0 && (vt += `opacity: ${j.opacity} !important;`), j.scale !== void 0 && (vt += `scale: ${j.scale} !important;`), j.color && (vt += `color: ${j.color} !important;`), j.border_color && (vt += `border-color: ${j.border_color} !important;`), (j["box-shadow"] || j.box_shadow) && (vt += `box-shadow: ${j["box-shadow"] || j.box_shadow} !important;`), vt && (Vn || (e(103, Vn = document.createElement("style")), document.head.appendChild(Vn)), e(103, Vn.textContent = `.${Hn}:hover { ${vt} }`, Vn));
      } else Vn && (Vn.remove(), e(103, Vn = null), e(18, Hn = ""));
    t.$$.dirty[0] & /*widthMin, widthMax, componentContext, heightMin, heightMax*/
    961 | t.$$.dirty[1] & /*style*/
    8388608 | t.$$.dirty[2] & /*backgroundStyle, borderStyle, width, height, margin, opacity, widthFlexGrow, heightFlexGrow, widthFlexShrink, heightFlexShrink*/
    107587616 | t.$$.dirty[3] & /*gridArea, padding, actionAnimationTransition, transform, flexBasis, animationOpacityStart, animationOpacityEnd, animationScaleStart, animationScaleEnd*/
    14495 && e(29, z = {
      ...xt,
      ...he,
      ...Fr,
      width: rr,
      "min-width": hr,
      "max-width": Sr || (() => {
        const vt = T.json.max_width;
        if ((vt == null ? void 0 : vt.type) === "fixed" && (vt != null && vt.value)) return ce(vt.value);
      })(),
      height: Ot,
      "min-height": H,
      // input max-height
      "max-height": Lt || (xt == null ? void 0 : xt["max-height"]) || (() => {
        const vt = T.json.max_height;
        if ((vt == null ? void 0 : vt.type) === "fixed" && (vt != null && vt.value)) return ce(vt.value);
      })(),
      "grid-area": fe,
      padding: L,
      margin: le,
      opacity: tn,
      transition: Vr,
      "transform-origin": Sn ? "0 0" : void 0,
      transform: Sn,
      "flex-grow": re || Ue || void 0,
      "flex-shrink": d || Ye ? 1 : void 0,
      "flex-basis": Z,
      "--divkit-animation-opacity-start": sn,
      "--divkit-animation-opacity-end": ln,
      "--divkit-animation-scale-start": Cn,
      "--divkit-animation-scale-end": un
    });
  }, [
    T,
    Oe,
    Xt,
    jr,
    zr,
    wr,
    hr,
    Sr,
    H,
    Lt,
    Gr,
    wn,
    yt,
    Ke,
    tr,
    Et,
    Cr,
    b,
    Hn,
    Ie,
    qe,
    dr,
    gr,
    De,
    yr,
    x,
    R,
    Qe,
    V,
    z,
    se,
    P,
    G,
    O,
    w,
    k,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    ut,
    qt,
    Xi,
    ll,
    al,
    bt,
    xt,
    ae,
    mt,
    Wt,
    Ft,
    ar,
    Te,
    er,
    Qt,
    ur,
    Yt,
    sr,
    pr,
    Fr,
    $e,
    ct,
    Mt,
    br,
    nt,
    le,
    Ct,
    rr,
    v,
    re,
    d,
    C,
    Re,
    Ot,
    st,
    Ue,
    Ye,
    Ut,
    Jr,
    tn,
    he,
    on,
    y,
    E,
    S,
    Vr,
    sn,
    ln,
    Cn,
    un,
    Dn,
    Rn,
    Sn,
    X,
    I,
    Vn,
    Z,
    L,
    fe,
    j,
    ee,
    n,
    N,
    de,
    pe,
    Fe,
    ke,
    ue,
    $,
    Le,
    lt,
    At,
    ne,
    D,
    kt,
    Y,
    Gt,
    We,
    ft,
    Je,
    kr,
    Me
  ];
}
class yn extends Lr {
  constructor(r) {
    super(), Or(
      this,
      r,
      V0,
      C0,
      Ar,
      {
        componentContext: 0,
        cls: 1,
        style: 54,
        layoutParams: 55,
        customDescription: 56,
        customPaddings: 57,
        customActions: 58,
        additionalPaddings: 59,
        heightByAspect: 60,
        parentOf: 53,
        parentOfSimpleMode: 61,
        replaceItems: 62,
        hasInnerFocusable: 2,
        alwaysCustomFocus: 63,
        containerElement: 3,
        devapi: 64
      },
      null,
      [-1, -1, -1, -1, -1]
    );
  }
}
const F0 = "appkit-text", I0 = "appkit-text_halign_start", D0 = "appkit-text_halign_center", T0 = "appkit-text_halign_end", M0 = "appkit-text_valign_start", P0 = "appkit-text_valign_center", N0 = "appkit-text_valign_end", z0 = "appkit-text_valign_baseline", R0 = "appkit-text__inner", O0 = "appkit-text_singleline", L0 = "appkit-text_multiline", B0 = "appkit-text_truncate_none", H0 = "appkit-text__inner_gradient", W0 = "appkit-text__image", U0 = "appkit-text__image_hidden", lo = {
  "text-range": "appkit-text-range",
  text: F0,
  text_halign_start: I0,
  text_halign_center: D0,
  text_halign_end: T0,
  text_valign_start: M0,
  text_valign_center: P0,
  text_valign_end: N0,
  text_valign_baseline: z0,
  text__inner: R0,
  text_singleline: O0,
  text_multiline: L0,
  text_truncate_none: B0,
  "text__inner_has-cloud-bg": "appkit-text__inner_has-cloud-bg",
  "text__inner_cloud-bg": "appkit-text__inner_cloud-bg",
  text__inner_gradient: H0,
  "text__image-wrapper": "appkit-text__image-wrapper",
  "text__image-wrapper_crop": "appkit-text__image-wrapper_crop",
  "text__image-wrapper_align_top": "appkit-text__image-wrapper_align_top",
  "text__image-wrapper_align_center": "appkit-text__image-wrapper_align_center",
  "text__image-wrapper_align_bottom": "appkit-text__image-wrapper_align_bottom",
  "text__image-wrapper_align_baseline": "appkit-text__image-wrapper_align_baseline",
  text__image: W0,
  text__image_hidden: U0,
  "text_has-focus-color": "appkit-text_has-focus-color"
}, vo = {
  "text-range": "appkit-text-range",
  "text-range_cloud": "appkit-text-range_cloud",
  "text-range_singleline": "appkit-text-range_singleline",
  "text-range__top-offset": "appkit-text-range__top-offset",
  "text-range_decoration_both": "appkit-text-range_decoration_both",
  "text-range_decoration_underline": "appkit-text-range_decoration_underline",
  "text-range_decoration_strike": "appkit-text-range_decoration_strike",
  "text-range_decoration_none": "appkit-text-range_decoration_none",
  "text-range_align_top": "appkit-text-range_align_top",
  "text-range_align_center": "appkit-text-range_align_center",
  "text-range_align_bottom": "appkit-text-range_align_bottom",
  "text-range_align_baseline": "appkit-text-range_align_baseline",
  "text-range__cloud-svg": "appkit-text-range__cloud-svg",
  "text-range_relative-vertical-align": "appkit-text-range_relative-vertical-align",
  "text-range_has-particles-mask": "appkit-text-range_has-particles-mask",
  "text-range__mask-animation": "appkit-text-range__mask-animation",
  "text-range_mask-animated": "appkit-text-range_mask-animated",
  "divkit-mask-particles-0": "appkit-divkit-mask-particles-0",
  "divkit-mask-particles-1": "appkit-divkit-mask-particles-1",
  "divkit-mask-particles-2": "appkit-divkit-mask-particles-2",
  "divkit-mask-particles-3": "appkit-divkit-mask-particles-3",
  "divkit-mask-particles-4": "appkit-divkit-mask-particles-4",
  "divkit-mask-particles-5": "appkit-divkit-mask-particles-5"
};
function Gn(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e <= 0 ? r : e;
}
function G0(t) {
  if (t === "light" || t === "medium" || t === "bold" || t === "regular" || t === "semi_bold")
    return t === "medium" ? 500 : t === "bold" ? 700 : t === "light" ? 300 : t === "semi_bold" ? 600 : 400;
}
function ai(t, r, e) {
  return typeof r == "number" && r > 0 ? r : G0(t) || e;
}
function Ll(t, r) {
  if (!t)
    return {};
  const e = {};
  for (const n of ["left", "top", "right", "bottom", "start", "end"]) {
    const o = t[n];
    o && (e[n] = o * r);
  }
  return e;
}
function Si(t) {
  if (t && typeof t == "object") {
    const r = [];
    for (const e in t) {
      const n = t[e];
      r.push(`"${e}" ${n}`);
    }
    return r.join(", ");
  }
  return "";
}
function wu(t) {
  let r, e, n, o, i, s, a;
  return {
    c() {
      r = $r("svg"), e = $r("defs"), n = $r("filter"), o = $r("feGaussianBlur"), i = $r("feColorMatrix"), a = $r("feBlend"), g(o, "in", "SourceGraphic"), g(o, "result", "blurred"), g(o, "stdDeviation", "3"), g(i, "in", "blurred"), g(i, "result", "withMatrix"), g(i, "type", "matrix"), g(i, "values", s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      t[5] + " -" + /*borderRadius*/
      t[5]), g(a, "in", "SourceGraphic"), g(a, "in2", "withMatrix"), g(
        n,
        "id",
        /*cloudFilterId*/
        t[11]
      ), g(r, "class", vo["text-range__cloud-svg"]);
    },
    m(l, u) {
      q(l, r, u), pt(r, e), pt(e, n), pt(n, o), pt(n, i), pt(n, a);
    },
    p(l, u) {
      u[0] & /*borderRadius*/
      32 && s !== (s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      l[5] + " -" + /*borderRadius*/
      l[5]) && g(i, "values", s);
    },
    d(l) {
      l && J(r);
    }
  };
}
function ku(t) {
  let r;
  return {
    c() {
      r = Se("span"), g(r, "class", vo["text-range__top-offset"]), M(
        r,
        "margin-top",
        /*topOffset*/
        t[9]
      );
    },
    m(e, n) {
      q(e, r, n);
    },
    p(e, n) {
      n[0] & /*topOffset*/
      512 && M(
        r,
        "margin-top",
        /*topOffset*/
        e[9]
      );
    },
    d(e) {
      e && J(r);
    }
  };
}
function vu(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Se("div"), e = Se("div"), n = Se("div"), o = Se("div"), i = Se("div"), s = Se("div"), g(r, "class", vo["text-range__mask-animation"]), g(e, "class", vo["text-range__mask-animation"]), g(n, "class", vo["text-range__mask-animation"]), g(o, "class", vo["text-range__mask-animation"]), g(i, "class", vo["text-range__mask-animation"]), g(s, "class", vo["text-range__mask-animation"]);
    },
    m(a, l) {
      q(a, r, l), q(a, e, l), q(a, n, l), q(a, o, l), q(a, i, l), q(a, s, l);
    },
    d(a) {
      a && (J(r), J(e), J(n), J(o), J(i), J(s));
    }
  };
}
function J0(t) {
  let r = (
    /*text*/
    (t[1] || "​") + ""
  ), e, n = (
    /*maskColor*/
    t[4] && vu()
  );
  return {
    c() {
      n && n.c(), e = Pn(r);
    },
    m(o, i) {
      n && n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      /*maskColor*/
      o[4] ? n || (n = vu(), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null), i[0] & /*text*/
      2 && r !== (r = /*text*/
      (o[1] || "​") + "") && Qn(e, r);
    },
    d(o) {
      o && J(e), n && n.d(o);
    }
  };
}
function q0(t) {
  let r, e, n, o, i = (
    /*cloudBg*/
    t[3] && /*hasCloudBg*/
    t[6] && wu(t)
  ), s = (
    /*topOffset*/
    t[9] && ku(t)
  );
  return n = new rl({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      cls: ht(
        "text-range",
        vo,
        /*mods*/
        t[8]
      ),
      actions: (
        /*actions*/
        t[2]
      ),
      style: $t(
        /*style*/
        t[7]
      ),
      $$slots: { default: [J0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      i && i.c(), r = Kt(), s && s.c(), e = Kt(), Bt(n.$$.fragment);
    },
    m(a, l) {
      i && i.m(a, l), q(a, r, l), s && s.m(a, l), q(a, e, l), zt(n, a, l), o = !0;
    },
    p(a, l) {
      /*cloudBg*/
      a[3] && /*hasCloudBg*/
      a[6] ? i ? i.p(a, l) : (i = wu(a), i.c(), i.m(r.parentNode, r)) : i && (i.d(1), i = null), /*topOffset*/
      a[9] ? s ? s.p(a, l) : (s = ku(a), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null);
      const u = {};
      l[0] & /*componentContext*/
      1 && (u.componentContext = /*componentContext*/
      a[0]), l[0] & /*mods*/
      256 && (u.cls = ht(
        "text-range",
        vo,
        /*mods*/
        a[8]
      )), l[0] & /*actions*/
      4 && (u.actions = /*actions*/
      a[2]), l[0] & /*style*/
      128 && (u.style = $t(
        /*style*/
        a[7]
      )), l[0] & /*text, maskColor*/
      18 | l[1] & /*$$scope*/
      64 && (u.$$scope = { dirty: l, ctx: a }), n.$set(u);
    },
    i(a) {
      o || (B(n.$$.fragment, a), o = !0);
    },
    o(a) {
      Q(n.$$.fragment, a), o = !1;
    },
    d(a) {
      a && (J(r), J(e)), i && i.d(a), s && s.d(a), Rt(n, a);
    }
  };
}
function Y0(t, r, e) {
  let n, o, i, s, a, l, u, c, f, { componentContext: _ } = r, { text: h } = r, { rootFontSize: m } = r, { textStyles: p = {} } = r, { singleline: k = !1 } = r, { actions: w = void 0 } = r, { cloudBg: O = !1 } = r, { cloudBgId: G = "" } = r, { customLineHeight: L = null } = r;
  const ee = Dr(Yr), fe = ee.direction;
  bn(t, fe, (ke) => e(35, f = ke));
  const P = O && G || ee.genId("text-range") || "";
  let Z = "none", se = 12, j = 1.25, z = "", N, W = "", ie = "", de = "", je, Ee = null, pe, ze, be = !1, Fe, Ge, Ze;
  return t.$$set = (ke) => {
    "componentContext" in ke && e(0, _ = ke.componentContext), "text" in ke && e(1, h = ke.text), "rootFontSize" in ke && e(12, m = ke.rootFontSize), "textStyles" in ke && e(13, p = ke.textStyles), "singleline" in ke && e(14, k = ke.singleline), "actions" in ke && e(2, w = ke.actions), "cloudBg" in ke && e(3, O = ke.cloudBg), "cloudBgId" in ke && e(15, G = ke.cloudBgId), "customLineHeight" in ke && e(16, L = ke.customLineHeight);
  }, t.$$.update = () => {
    var ke, et, _e, Ie, ue, oe, ye, $;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && _.json && (e(17, Z = "none"), e(18, se = 12), e(19, j = 1.25), e(20, z = ""), e(21, N = void 0), e(22, W = ""), e(23, ie = ""), e(24, de = ""), e(25, je = void 0), e(26, Ee = null), e(27, pe = void 0), e(28, ze = void 0), e(29, be = !1), e(4, Fe = void 0), e(30, Ge = void 0), e(31, Ze = void 0)), t.$$.dirty[0] & /*textStyles*/
    8192) {
      let Ae = "none";
      (p.underline || p.strike) && (p.underline === "single" && p.strike === "single" ? Ae = "both" : p.underline === "single" ? Ae = "underline" : p.strike === "single" && (Ae = "strike")), e(17, Z = Ae);
    }
    if (t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(18, se = Gn(p.font_size, se)), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && Jn(p.line_height) && e(19, j = Number(p.line_height) / se), t.$$.dirty[0] & /*textStyles*/
    8192 && Tn(p.letter_spacing) && e(20, z = ce(p.letter_spacing)), t.$$.dirty[0] & /*textStyles, fontWeight*/
    2105344 && (e(21, N = ai(p.font_weight, p.font_weight_value, N)), typeof p.font_family == "string" && p.font_family ? e(22, W = ee.typefaceProvider(p.font_family, { fontWeight: N || 400 })) : e(22, W = "")), t.$$.dirty[0] & /*textStyles, fontVariationSettings*/
    8396800) {
      const Ae = Si(p.font_variation_settings);
      Ae !== ie && e(23, ie = Ae);
    }
    if (t.$$.dirty[0] & /*textStyles, color*/
    16785408 && e(24, de = _r(p.text_color, 1, de)), t.$$.dirty[0] & /*textStyles*/
    8192 && e(9, n = p.top_offset ? ce(p.top_offset) : ""), t.$$.dirty[0] & /*textStyles*/
    8192 && e(6, o = ((ke = p.background) == null ? void 0 : ke.type) === "cloud"), t.$$.dirty[0] & /*textStyles*/
    8192 && e(33, i = ((et = p.background) == null ? void 0 : et.type) === "cloud" ? p.background.paddings : void 0), t.$$.dirty[0] & /*textStyles, cloudBg, hasCloudBg, fontSize*/
    270408 | t.$$.dirty[1] & /*$direction*/
    16) {
      const Ae = p.mask, xe = !!(Ae && (Ae.type === "solid" || Ae.type === "particles") && Ae.is_enabled !== !1 && Ae.color);
      if (O || xe ? e(25, je = "transparent") : e(25, je = void 0), e(29, be = !1), e(4, Fe = void 0), e(30, Ge = void 0), e(31, Ze = void 0), O)
        o ? e(28, ze = __(p.background.color, 255, "transparent")) : e(28, ze = void 0);
      else if (Ae && xe) {
        if (Ae.type === "solid")
          e(28, ze = _r(Ae.color));
        else if (Ae.type === "particles") {
          const qe = Gn((_e = Ae.particle_size) == null ? void 0 : _e.value, 1), te = ce(qe * 10 / se), Xe = Gn(Ae.density, 0.8), Le = _r(Ae.color);
          e(28, ze = void 0), e(4, Fe = Le), e(30, Ge = te), e(31, Ze = String(Xe)), e(29, be = Ae.is_animated === !0);
        }
      } else ((Ie = p.background) == null ? void 0 : Ie.type) === "solid" ? e(28, ze = el([p.background], f).color) : e(28, ze = void 0);
    }
    t.$$.dirty[0] & /*textStyles*/
    8192 && ((ue = p.border) != null && ue.stroke && p.border.stroke.color && _r(p.border.stroke.color) !== "transparent" && Jn(p.border.stroke.width) && ((oe = p.background) == null ? void 0 : oe.type) !== "cloud" ? e(26, Ee = {
      color: p.border.stroke.color,
      width: p.border.stroke.width,
      corner_radius: p.border.corner_radius
    }) : e(26, Ee = null)), t.$$.dirty[0] & /*cloudBg, hasCloudBg, textStyles, border*/
    67117128 && e(5, s = O ? o && p.background.corner_radius || 0 : Ee ? Gn(Ee.corner_radius, 0) : 0), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(32, a = p.text_shadow ? i0(p.text_shadow, se) : void 0), t.$$.dirty[0] & /*textStyles*/
    8192 && typeof p.baseline_offset == "number" && e(27, pe = p.baseline_offset), t.$$.dirty[0] & /*textStyles*/
    8192 && e(34, l = typeof p.baseline_offset == "number" ? void 0 : p.alignment_vertical), t.$$.dirty[0] & /*singleline, decoration, hasCloudBg, customLineHeight, verticalAlign, maskColor, maskAnimated*/
    671301712 | t.$$.dirty[1] & /*customVerticalAlign*/
    8 && e(8, u = {
      singleline: k,
      decoration: Z,
      align: l,
      cloud: o,
      "relative-vertical-align": !!(L && pe),
      "has-particles-mask": !!Fe,
      "mask-animated": be
    }), t.$$.dirty[0] & /*fontSize, rootFontSize, lineHeight, letterSpacing, fontWeight, fontFamily, customLineHeight, verticalAlign, cloudBg, hasCloudBg, cloudBgId, colorOverride, color, background, textStyles, border, borderRadius, fontVariationSettings, maskColor, maskSize*/
    1610461304 | t.$$.dirty[1] & /*customVerticalAlign, cloudPadding, $direction, shadow, maskDensity*/
    31 && e(7, c = {
      "font-size": ce(se * 10 / m),
      "line-height": l ? "normal" : j,
      "letter-spacing": z,
      "font-weight": N,
      "font-family": W,
      "vertical-align": L || pe === void 0 ? void 0 : ce(pe * 10 / se),
      top: L && pe !== void 0 ? ce(-pe * 10 / se) : void 0,
      margin: i ? mo(Ll(i, -10 / se), f) : void 0,
      padding: i ? mo(Ll(i, 10 / se), f) : void 0,
      filter: O && o && !G ? `url(#${P})` : a,
      color: je || de,
      background: ze,
      opacity: O && o && !G ? (($ = (ye = uo(p.background.color)) == null ? void 0 : ye.a) != null ? $ : 255) / 255 : void 0,
      /**
      * box-shadow instead of border because:
      * 1) Doesn't take space as border does
      * 2) There should not be a border-radius on line breaks, but there should be a border
      */
      "box-shadow": Ee ? `inset 0 0 0 ${ce(Ee.width * 10 / se)} ${Ee.color}` : void 0,
      "border-radius": s ? ce(s * 10 / se) : void 0,
      "font-feature-settings": p.font_feature_settings || void 0,
      "font-variation-settings": ie || void 0,
      "--divkit-text-mask-color": Fe,
      "--divkit-text-mask-size": Ge,
      "--divkit-text-mask-density": Ze
    });
  }, [
    _,
    h,
    w,
    O,
    Fe,
    s,
    o,
    c,
    u,
    n,
    fe,
    P,
    m,
    p,
    k,
    G,
    L,
    Z,
    se,
    j,
    z,
    N,
    W,
    ie,
    de,
    je,
    Ee,
    pe,
    ze,
    be,
    Ge,
    Ze,
    a,
    i,
    l,
    f
  ];
}
class aa extends Lr {
  constructor(r) {
    super(), Or(
      this,
      r,
      Y0,
      q0,
      Ar,
      {
        componentContext: 0,
        text: 1,
        rootFontSize: 12,
        textStyles: 13,
        singleline: 14,
        actions: 2,
        cloudBg: 3,
        cloudBgId: 15,
        customLineHeight: 16
      },
      null,
      [-1, -1]
    );
  }
}
function nl(t, r, e) {
  return t === "left" || t === "center" || t === "right" || t === "start" || t === "end" ? t === "left" ? r === "ltr" ? "start" : "end" : t === "right" ? r === "ltr" ? "end" : "start" : t : e;
}
function ol(t, r) {
  return t === "top" || t === "center" || t === "bottom" || t === "baseline" ? t === "top" ? "start" : t === "bottom" ? "end" : t : r;
}
function K0(t) {
  return String(t != null ? t : "");
}
function Dd(t, r) {
  return t === "source_in" || t === "source_atop" || t === "darken" || t === "lighten" || t === "multiply" || t === "screen" ? t : r;
}
function Ns(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1;
}
function ua(t, r) {
  let e;
  return function(...n) {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      t.apply(this, n), e = null;
    }, r);
  };
}
function X0(t, r) {
  let e = null;
  const n = () => {
    const a = getComputedStyle(t), l = parseFloat(a.lineHeight);
    t.style.webkitLineClamp = "", t.style.maxHeight = "";
    const u = t.offsetHeight, c = t.scrollHeight;
    let f = Math.max(1, Math.floor(u / l));
    r.maxLines && r.maxLines < f && (f = r.maxLines), c > f * l + 1e-9 && (t.style.webkitLineClamp = String(f), t.style.maxHeight = l * f + "px");
  }, o = ua(n, 50), i = () => {
    e && (e.disconnect(), e = null);
  }, s = () => {
    if (i(), r.enabled) {
      if (n(), typeof ResizeObserver < "u") {
        e = new ResizeObserver(o);
        const a = t.parentElement;
        a && e.observe(a);
      }
    } else
      t.style.webkitLineClamp = String(r.lineClamp || "");
  };
  return s(), {
    update(a) {
      r = a, s();
    },
    destroy() {
      i();
    }
  };
}
const { Boolean: Td } = Io;
function ju(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function Cu(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function Eu(t) {
  let r = (
    /*htmlTag*/
    t[9]
  ), e, n = (
    /*htmlTag*/
    t[9] && hl(t)
  );
  return {
    c() {
      n && n.c(), e = Kt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      /*htmlTag*/
      o[9] ? r ? Ar(
        r,
        /*htmlTag*/
        o[9]
      ) ? (n.d(1), n = hl(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = hl(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : r && (n.d(1), n = null, r = /*htmlTag*/
      o[9]);
    },
    i: A,
    o(o) {
      Q(n, o);
    },
    d(o) {
      o && J(e), n && n.d(o);
    }
  };
}
function Z0(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Se("span"), e = Se("span"), g(e, "class", n = ht("text__image-wrapper", lo, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), g(e, "style", o = $t({
        width: (
          /*item*/
          t[71].image.width
        ),
        height: (
          /*customLineHeight*/
          t[11] && /*item*/
          t[71].image.verticalAlign !== "baseline" ? (
            /*customLineHeight*/
            t[11] + "em"
          ) : void 0
        )
      })), g(r, "style", i = $t(
        /*item*/
        t[71].image.wrapperStyle
      ));
    },
    m(s, a) {
      q(s, r, a), pt(r, e);
    },
    p(s, a) {
      a[0] & /*renderList, customLineHeight*/
      10240 && n !== (n = ht("text__image-wrapper", lo, {
        align: (
          /*item*/
          s[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          s[11] !== null
        )
      })) && g(e, "class", n), a[0] & /*renderList, customLineHeight*/
      10240 && o !== (o = $t({
        width: (
          /*item*/
          s[71].image.width
        ),
        height: (
          /*customLineHeight*/
          s[11] && /*item*/
          s[71].image.verticalAlign !== "baseline" ? (
            /*customLineHeight*/
            s[11] + "em"
          ) : void 0
        )
      })) && g(e, "style", o), a[0] & /*renderList*/
      8192 && i !== (i = $t(
        /*item*/
        s[71].image.wrapperStyle
      )) && g(r, "style", i);
    },
    i: A,
    o: A,
    d(s) {
      s && J(r);
    }
  };
}
function Q0(t) {
  let r, e, n = (
    /*item*/
    t[71].text && Au(t)
  );
  return {
    c() {
      n && n.c(), r = Kt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && B(n, 1)) : (n = Au(o), n.c(), B(n, 1), n.m(r.parentNode, r)) : n && (or(), Q(n, 1, 1, () => {
        n = null;
      }), ir());
    },
    i(o) {
      e || (B(n), e = !0);
    },
    o(o) {
      Q(n), e = !1;
    },
    d(o) {
      o && J(r), n && n.d(o);
    }
  };
}
function Au(t) {
  let r, e;
  return r = new aa({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      text: (
        /*item*/
        t[71].text
      ),
      rootFontSize: (
        /*fontSize*/
        t[3]
      ),
      textStyles: (
        /*item*/
        t[71].textStyles
      ),
      singleline: (
        /*singleline*/
        t[8]
      ),
      cloudBg: !0,
      cloudBgId: (
        /*wholeTextCloudBgId*/
        t[14]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*renderList*/
      8192 && (i.text = /*item*/
      n[71].text), o[0] & /*fontSize*/
      8 && (i.rootFontSize = /*fontSize*/
      n[3]), o[0] & /*renderList*/
      8192 && (i.textStyles = /*item*/
      n[71].textStyles), o[0] & /*singleline*/
      256 && (i.singleline = /*singleline*/
      n[8]), o[0] & /*wholeTextCloudBgId*/
      16384 && (i.cloudBgId = /*wholeTextCloudBgId*/
      n[14]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Su(t) {
  let r, e, n, o;
  const i = [Q0, Z0], s = [];
  function a(l, u) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (or(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ir()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (B(e), o = !0);
    },
    o(l) {
      Q(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function hl(t) {
  let r, e, n, o, i = nr(
    /*renderList*/
    t[13]
  ), s = [];
  for (let c = 0; c < i.length; c += 1)
    s[c] = Su(Cu(t, i, c));
  const a = (c) => Q(s[c], 1, 1, () => {
    s[c] = null;
  });
  let l = [
    {
      class: e = ht("text__inner", lo, {
        .../*innerMods*/
        t[19],
        "cloud-bg": !0
      })
    },
    {
      style: n = $t({
        .../*style*/
        t[18],
        padding: (
          /*cloudPadding*/
          t[17]
        ),
        filter: (
          /*wholeTextCloudBgId*/
          t[14] ? `url(#${/*wholeTextCloudBgId*/
          t[14]})` : void 0
        ),
        opacity: (
          /*wholeTextCloudBgOpacity*/
          t[15]
        )
      })
    }
  ], u = {};
  for (let c = 0; c < l.length; c += 1)
    u = bo(u, l[c]);
  return {
    c() {
      r = Se(
        /*htmlTag*/
        t[9]
      );
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      qo(
        /*htmlTag*/
        t[9]
      )(r, u);
    },
    m(c, f) {
      q(c, r, f);
      for (let _ = 0; _ < s.length; _ += 1)
        s[_] && s[_].m(r, null);
      o = !0;
    },
    p(c, f) {
      if (f[0] & /*componentContext, renderList, fontSize, singleline, wholeTextCloudBgId, customLineHeight*/
      26889) {
        i = nr(
          /*renderList*/
          c[13]
        );
        let _;
        for (_ = 0; _ < i.length; _ += 1) {
          const h = Cu(c, i, _);
          s[_] ? (s[_].p(h, f), B(s[_], 1)) : (s[_] = Su(h), s[_].c(), B(s[_], 1), s[_].m(r, null));
        }
        for (or(), _ = i.length; _ < s.length; _ += 1)
          a(_);
        ir();
      }
      qo(
        /*htmlTag*/
        c[9]
      )(r, u = Do(l, [
        (!o || f[0] & /*innerMods*/
        524288 && e !== (e = ht("text__inner", lo, {
          .../*innerMods*/
          c[19],
          "cloud-bg": !0
        }))) && { class: e },
        (!o || f[0] & /*style, cloudPadding, wholeTextCloudBgId, wholeTextCloudBgOpacity*/
        442368 && n !== (n = $t({
          .../*style*/
          c[18],
          padding: (
            /*cloudPadding*/
            c[17]
          ),
          filter: (
            /*wholeTextCloudBgId*/
            c[14] ? `url(#${/*wholeTextCloudBgId*/
            c[14]})` : void 0
          ),
          opacity: (
            /*wholeTextCloudBgOpacity*/
            c[15]
          )
        }))) && { style: n }
      ]));
    },
    i(c) {
      if (!o) {
        for (let f = 0; f < i.length; f += 1)
          B(s[f]);
        o = !0;
      }
    },
    o(c) {
      s = s.filter(Td);
      for (let f = 0; f < s.length; f += 1)
        Q(s[f]);
      o = !1;
    },
    d(c) {
      c && J(r), nn(s, c);
    }
  };
}
function x0(t) {
  let r, e;
  return r = new aa({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      text: (
        /*text*/
        t[2]
      ),
      rootFontSize: (
        /*fontSize*/
        t[3]
      ),
      textStyles: (
        /*rootTextStyles*/
        t[7]
      ),
      singleline: (
        /*singleline*/
        t[8]
      ),
      customLineHeight: (
        /*customLineHeight*/
        t[11]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*text*/
      4 && (i.text = /*text*/
      n[2]), o[0] & /*fontSize*/
      8 && (i.rootFontSize = /*fontSize*/
      n[3]), o[0] & /*rootTextStyles*/
      128 && (i.textStyles = /*rootTextStyles*/
      n[7]), o[0] & /*singleline*/
      256 && (i.singleline = /*singleline*/
      n[8]), o[0] & /*customLineHeight*/
      2048 && (i.customLineHeight = /*customLineHeight*/
      n[11]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function $0(t) {
  let r, e, n = nr(
    /*renderList*/
    t[13]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Fu(ju(t, n, s));
  const i = (s) => Q(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = Kt();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      q(s, r, a), e = !0;
    },
    p(s, a) {
      if (a[0] & /*componentContext, renderList, fontSize, singleline, customLineHeight*/
      10505 | a[1] & /*onImgError*/
      256) {
        n = nr(
          /*renderList*/
          s[13]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = ju(s, n, l);
          o[l] ? (o[l].p(u, a), B(o[l], 1)) : (o[l] = Fu(u), o[l].c(), B(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (or(), l = n.length; l < o.length; l += 1)
          i(l);
        ir();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          B(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Td);
      for (let a = 0; a < o.length; a += 1)
        Q(o[a]);
      e = !1;
    },
    d(s) {
      s && J(r), nn(o, s);
    }
  };
}
function em(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h, m = [
    { class: o = lo.text__image },
    {
      src: i = /*item*/
      t[71].image.url
    },
    {
      loading: s = /*item*/
      t[71].image.preloadRequired ? "eager" : "lazy"
    },
    { decoding: "async" },
    {
      alt: a = /*item*/
      t[71].image.description
    },
    /*item*/
    t[71].image.a11yAttrs,
    {
      style: l = $t({
        height: (
          /*item*/
          t[71].image.height
        ),
        filter: (
          /*item*/
          t[71].image.svgFilterId ? `url(#${/*item*/
          t[71].image.svgFilterId})` : void 0
        )
      })
    }
  ], p = {};
  for (let k = 0; k < m.length; k += 1)
    p = bo(p, m[k]);
  return {
    c() {
      r = Se("span"), e = Se("span"), n = Se("img"), Oo(n, p), g(e, "class", u = ht("text__image-wrapper", lo, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), g(e, "style", c = $t({
        width: (
          /*item*/
          t[71].image.width
        ),
        height: (
          /*customLineHeight*/
          t[11] && /*item*/
          t[71].image.verticalAlign !== "baseline" ? (
            /*customLineHeight*/
            t[11] + "em"
          ) : void 0
        )
      })), g(r, "style", f = $t(
        /*item*/
        t[71].image.wrapperStyle
      ));
    },
    m(k, w) {
      q(k, r, w), pt(r, e), pt(e, n), _ || (h = He(
        n,
        "error",
        /*onImgError*/
        t[39]
      ), _ = !0);
    },
    p(k, w) {
      Oo(n, p = Do(m, [
        { class: o },
        w[0] & /*renderList*/
        8192 && !Zn(n.src, i = /*item*/
        k[71].image.url) && { src: i },
        w[0] & /*renderList*/
        8192 && s !== (s = /*item*/
        k[71].image.preloadRequired ? "eager" : "lazy") && { loading: s },
        { decoding: "async" },
        w[0] & /*renderList*/
        8192 && a !== (a = /*item*/
        k[71].image.description) && { alt: a },
        w[0] & /*renderList*/
        8192 && /*item*/
        k[71].image.a11yAttrs,
        w[0] & /*renderList*/
        8192 && l !== (l = $t({
          height: (
            /*item*/
            k[71].image.height
          ),
          filter: (
            /*item*/
            k[71].image.svgFilterId ? `url(#${/*item*/
            k[71].image.svgFilterId})` : void 0
          )
        })) && { style: l }
      ])), w[0] & /*renderList, customLineHeight*/
      10240 && u !== (u = ht("text__image-wrapper", lo, {
        align: (
          /*item*/
          k[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          k[11] !== null
        )
      })) && g(e, "class", u), w[0] & /*renderList, customLineHeight*/
      10240 && c !== (c = $t({
        width: (
          /*item*/
          k[71].image.width
        ),
        height: (
          /*customLineHeight*/
          k[11] && /*item*/
          k[71].image.verticalAlign !== "baseline" ? (
            /*customLineHeight*/
            k[11] + "em"
          ) : void 0
        )
      })) && g(e, "style", c), w[0] & /*renderList*/
      8192 && f !== (f = $t(
        /*item*/
        k[71].image.wrapperStyle
      )) && g(r, "style", f);
    },
    i: A,
    o: A,
    d(k) {
      k && J(r), _ = !1, h();
    }
  };
}
function tm(t) {
  let r, e, n = (
    /*item*/
    t[71].text && Vu(t)
  );
  return {
    c() {
      n && n.c(), r = Kt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && B(n, 1)) : (n = Vu(o), n.c(), B(n, 1), n.m(r.parentNode, r)) : n && (or(), Q(n, 1, 1, () => {
        n = null;
      }), ir());
    },
    i(o) {
      e || (B(n), e = !0);
    },
    o(o) {
      Q(n), e = !1;
    },
    d(o) {
      o && J(r), n && n.d(o);
    }
  };
}
function Vu(t) {
  let r, e;
  return r = new aa({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      text: (
        /*item*/
        t[71].text
      ),
      rootFontSize: (
        /*fontSize*/
        t[3]
      ),
      textStyles: (
        /*item*/
        t[71].textStyles
      ),
      singleline: (
        /*singleline*/
        t[8]
      ),
      actions: (
        /*item*/
        t[71].actions
      ),
      customLineHeight: (
        /*customLineHeight*/
        t[11]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*renderList*/
      8192 && (i.text = /*item*/
      n[71].text), o[0] & /*fontSize*/
      8 && (i.rootFontSize = /*fontSize*/
      n[3]), o[0] & /*renderList*/
      8192 && (i.textStyles = /*item*/
      n[71].textStyles), o[0] & /*singleline*/
      256 && (i.singleline = /*singleline*/
      n[8]), o[0] & /*renderList*/
      8192 && (i.actions = /*item*/
      n[71].actions), o[0] & /*customLineHeight*/
      2048 && (i.customLineHeight = /*customLineHeight*/
      n[11]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Fu(t) {
  let r, e, n, o;
  const i = [tm, em], s = [];
  function a(l, u) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (or(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ir()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (B(e), o = !0);
    },
    o(l) {
      Q(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function ml(t) {
  let r, e, n, o, i, s, a, l, u;
  const c = [$0, x0], f = [];
  function _(p, k) {
    return (
      /*renderList*/
      p[13].length ? 0 : 1
    );
  }
  e = _(t), n = f[e] = c[e](t);
  let h = [
    {
      class: o = ht(
        "text__inner",
        lo,
        /*innerMods*/
        t[19]
      )
    },
    {
      style: i = $t(
        /*style*/
        t[18]
      )
    }
  ], m = {};
  for (let p = 0; p < h.length; p += 1)
    m = bo(m, h[p]);
  return {
    c() {
      r = Se(
        /*htmlTag*/
        t[9]
      ), n.c(), qo(
        /*htmlTag*/
        t[9]
      )(r, m);
    },
    m(p, k) {
      q(p, r, k), f[e].m(r, null), a = !0, l || (u = Zs(s = X0.call(null, r, {
        enabled: (
          /*$jsonAutoEllipsize*/
          t[10]
        ),
        lineClamp: typeof /*lineClamp*/
        t[4] == "number" ? (
          /*lineClamp*/
          t[4]
        ) : void 0,
        maxLines: (
          /*maxLines*/
          t[12]
        )
      })), l = !0);
    },
    p(p, k) {
      let w = e;
      e = _(p), e === w ? f[e].p(p, k) : (or(), Q(f[w], 1, 1, () => {
        f[w] = null;
      }), ir(), n = f[e], n ? n.p(p, k) : (n = f[e] = c[e](p), n.c()), B(n, 1), n.m(r, null)), qo(
        /*htmlTag*/
        p[9]
      )(r, m = Do(h, [
        (!a || k[0] & /*innerMods*/
        524288 && o !== (o = ht(
          "text__inner",
          lo,
          /*innerMods*/
          p[19]
        ))) && { class: o },
        (!a || k[0] & /*style*/
        262144 && i !== (i = $t(
          /*style*/
          p[18]
        ))) && { style: i }
      ])), s && Pr(s.update) && k[0] & /*$jsonAutoEllipsize, lineClamp, maxLines*/
      5136 && s.update.call(null, {
        enabled: (
          /*$jsonAutoEllipsize*/
          p[10]
        ),
        lineClamp: typeof /*lineClamp*/
        p[4] == "number" ? (
          /*lineClamp*/
          p[4]
        ) : void 0,
        maxLines: (
          /*maxLines*/
          p[12]
        )
      });
    },
    i(p) {
      a || (B(n), a = !0);
    },
    o(p) {
      Q(n), a = !1;
    },
    d(p) {
      p && J(r), f[e].d(), l = !1, u();
    }
  };
}
function rm(t) {
  let r, e = (
    /*htmlTag*/
    t[9]
  ), n, o, i = (
    /*hasCloudBg*/
    t[6] && Eu(t)
  ), s = (
    /*htmlTag*/
    t[9] && ml(t)
  );
  return {
    c() {
      i && i.c(), r = lr(), s && s.c(), n = Kt();
    },
    m(a, l) {
      i && i.m(a, l), q(a, r, l), s && s.m(a, l), q(a, n, l), o = !0;
    },
    p(a, l) {
      /*hasCloudBg*/
      a[6] ? i ? (i.p(a, l), l[0] & /*hasCloudBg*/
      64 && B(i, 1)) : (i = Eu(a), i.c(), B(i, 1), i.m(r.parentNode, r)) : i && (or(), Q(i, 1, 1, () => {
        i = null;
      }), ir()), /*htmlTag*/
      a[9] ? e ? Ar(
        e,
        /*htmlTag*/
        a[9]
      ) ? (s.d(1), s = ml(a), e = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : s.p(a, l) : (s = ml(a), e = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : e && (s.d(1), s = null, e = /*htmlTag*/
      a[9]);
    },
    i(a) {
      o || (B(i), o = !0);
    },
    o(a) {
      Q(i), Q(s, a), o = !1;
    },
    d(a) {
      a && (J(r), J(n)), i && i.d(a), s && s.d(a);
    }
  };
}
function nm(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: ht(
        "text",
        lo,
        /*mods*/
        t[20]
      ) + " " + /*selectable*/
      (t[5] ? vr.root__selectable : vr.root__unselectable),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      containerElement: (
        /*containerElement*/
        t[16]
      ),
      $$slots: { default: [rm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods, selectable*/
      1048608 && (i.cls = ht(
        "text",
        lo,
        /*mods*/
        n[20]
      ) + " " + /*selectable*/
      (n[5] ? vr.root__selectable : vr.root__unselectable)), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*containerElement*/
      65536 && (i.containerElement = /*containerElement*/
      n[16]), o[0] & /*innerMods, style, htmlTag, $jsonAutoEllipsize, lineClamp, maxLines, renderList, componentContext, fontSize, singleline, customLineHeight, text, rootTextStyles, cloudPadding, wholeTextCloudBgId, wholeTextCloudBgOpacity, hasCloudBg*/
      983005 | o[2] & /*$$scope*/
      16384 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function om(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, G, L, ee, fe, P, Z, se, j, z, N, W, ie, de = A, je = () => (de(), de = F(O, (ct) => e(52, ie = ct)), O), Ee, pe = A, ze = () => (pe(), pe = F(i, (ct) => e(53, Ee = ct)), i), be, Fe = A, Ge = () => (Fe(), Fe = F(o, (ct) => e(54, be = ct)), o), Ze, ke = A, et = () => (ke(), ke = F(k, (ct) => e(55, Ze = ct)), k), _e, Ie = A, ue = () => (Ie(), Ie = F(p, (ct) => e(56, _e = ct)), p), oe, ye = A, $ = () => (ye(), ye = F(m, (ct) => e(57, oe = ct)), m), Ae, xe = A, qe = () => (xe(), xe = F(h, (ct) => e(58, Ae = ct)), h), te, Xe = A, Le = () => (Xe(), Xe = F(_, (ct) => e(59, te = ct)), _), tt, dt = A, lt = () => (dt(), dt = F(u, (ct) => e(60, tt = ct)), u), wt, ot = A, At = () => (ot(), ot = F(f, (ct) => e(61, wt = ct)), f), it, me = A, ne = () => (me(), me = F(c, (ct) => e(62, it = ct)), c), at, Ve = A, D = () => (Ve(), Ve = F(w, (ct) => e(10, at = ct)), w), jt, gt = A, kt = () => (gt(), gt = F(l, (ct) => e(63, jt = ct)), l), St, rt = A, Y = () => (rt(), rt = F(a, (ct) => e(64, St = ct)), a), Vt, Dt = A, Gt = () => (Dt(), Dt = F(s, (ct) => e(65, Vt = ct)), s), Jt, ve = A, We = () => (ve(), ve = F(n, (ct) => e(66, Jt = ct)), n), ft, Me = A, T = () => (Me(), Me = F(G, (ct) => e(67, ft = ct)), G);
  t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => Fe()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => Ie()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Xe()), t.$$.on_destroy.push(() => dt()), t.$$.on_destroy.push(() => ot()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => Ve()), t.$$.on_destroy.push(() => gt()), t.$$.on_destroy.push(() => rt()), t.$$.on_destroy.push(() => Dt()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => Me());
  let { componentContext: Oe } = r, { layoutParams: xt = void 0 } = r;
  const ae = Dr(Yr), mt = ae.direction;
  bn(t, mt, (ct) => e(51, W = ct));
  let Wt = "", Ft = 12, ar = 1.25, Te = null, bt = "", er, Qt = "", Xt = !1, ur = "start", jr = "start", Yt = "", It = "", Tt = "", ut = !1, qt = [], sr = !1, dr = "", mr, pr = [], Fr = {}, zr = "span";
  function gr(ct, Mt, br, wr) {
    var re, d;
    let nt = [];
    if (pr.forEach(([C, De]) => {
      ae.removeSvgFilter(C, De);
    }), pr = [], !(Array.isArray(Mt) && Mt.length || Array.isArray(br) && br.length && ct)) {
      e(13, qt = []);
      return;
    }
    const le = ct;
    let Ct = Mt || [{ start: 0, end: le.length }], rr = br || [], hr = 0, Sr = [], v = [];
    Ct.forEach((C) => {
      const De = C.start || 0, Re = C.end || ct.length, Ot = {
        top_offset: 0,
        ...C,
        start: De,
        end: Re
      };
      v.push({
        index: De,
        range: Ot,
        type: "rangeStart",
        isStart: !0
      }), v.push({
        index: Re,
        range: Ot,
        type: "rangeEnd"
      });
    }), rr.forEach((C, De) => {
      C.start !== void 0 && C.url && C.start <= le.length && v.push({
        index: C.indexing_direction === "reversed" ? ct.length - C.start : C.start,
        image: C,
        type: "image",
        arrayIndex: De
      });
    }), v.sort((C, De) => C.index === De.index ? C.type !== De.type ? C.type === "image" ? -1 : De.type === "image" ? 1 : C.type < De.type ? -1 : 1 : C.type === "image" && De.type === "image" ? De.arrayIndex - C.arrayIndex : C.type === "rangeStart" && De.type === "rangeStart" ? C.range.end - De.range.end : C.type === "rangeStart" ? 1 : De.type === "rangeStart" ? -1 : C.type !== "image" && De.type !== "image" ? C.range.start - De.range.start : 0 : C.index - De.index), v.forEach((C) => {
      var Ot, H, Lt, st;
      let De = C.type === "image" ? null : C.range, Re = C.index;
      if (Re > hr) {
        let Ue = Object.assign({ ...wr }, ...Sr);
        Sr.length && Sr[Sr.length - 1].start !== hr && (Ue.top_offset = 0), nt.push({
          text: le.substring(hr, Re),
          textStyles: Ue,
          actions: C.type === "rangeEnd" && ((H = (Ot = C.range) == null ? void 0 : Ot.actions) == null ? void 0 : H.filter(Ns)) || void 0
        });
      }
      if (C.type === "rangeStart" && De)
        Sr.push(De);
      else if (C.type === "rangeEnd")
        Sr = Sr.filter((Ue) => Ue !== C.range);
      else if (C.type === "image") {
        let Ue = Object.assign({ ...wr }, ...Sr), Ye = ce((C.image.width && C.image.width.value || 20) * 10 / (Ue.font_size || 12)), Ut = ce((C.image.height && C.image.height.value || 20) * 10 / (Ue.font_size || 12));
        const yr = {
          "font-size": ce((Number(Ue.font_size) || 12) * 10 / Ft)
        };
        let Jr = "";
        const tn = C.image.tint_color, Gr = Dd(C.image.tint_mode, "source_in");
        if (tn) {
          const on = _r(C.image.tint_color);
          Jr = ae.addSvgFilter(on, Gr), pr.push([on, Gr]);
        }
        const he = {}, wn = (Lt = C.image.accessibility) == null ? void 0 : Lt.type, Kr = ((st = C.image.accessibility) == null ? void 0 : st.description) || "";
        (wn === "button" || wn === "image") && Kr ? he.role = wn : (!Kr || wn === "none") && (he["aria-hidden"] = "true"), nt.push({
          image: {
            url: C.image.url,
            width: Ye,
            height: Ut,
            wrapperStyle: yr,
            svgFilterId: Jr,
            preloadRequired: !!C.image.preload_required,
            verticalAlign: C.image.alignment_vertical,
            description: Kr,
            a11yAttrs: he
          }
        });
      }
      hr = Re;
    }), hr < le.length && nt.push({
      text: le.substring(hr),
      textStyles: { ...wr }
    }), e(13, qt = nt), e(6, sr = nt.some((C) => {
      var De;
      return "text" in C && ((De = C.textStyles.background) == null ? void 0 : De.type) === "cloud";
    })), e(14, dr = sr && nt.length === 1 ? ae.genId("text-whole-bg") : ""), e(15, mr = dr ? ((d = (re = uo(nt[0].textStyles.background.color)) == null ? void 0 : re.a) != null ? d : 255) / 255 : void 0);
  }
  function $e(ct) {
    ct.target && "classList" in ct.target && ct.target.classList.add(lo.text__image_hidden);
  }
  return an(() => {
    pr.forEach(([ct, Mt]) => {
      ae.removeSvgFilter(ct, Mt);
    });
  }), t.$$set = (ct) => {
    "componentContext" in ct && e(0, Oe = ct.componentContext), "layoutParams" in ct && e(1, xt = ct.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && Oe.json && (e(3, Ft = 12), e(40, ar = 1.25), e(11, Te = null), e(41, bt = ""), e(12, er = void 0), e(4, Qt = ""), e(42, Xt = !1), e(43, ur = "start"), e(44, jr = "start"), e(45, Yt = ""), e(47, Tt = ""), e(5, ut = !1)), t.$$.dirty[0] & /*componentContext*/
    1 && We(e(37, n = Oe.getDerivedFromVars(Oe.json.text))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(36, o = Oe.getDerivedFromVars(Oe.json.ranges, void 0, !0, 3))), t.$$.dirty[0] & /*componentContext*/
    1 && ze(e(35, i = Oe.getDerivedFromVars(Oe.json.images))), t.$$.dirty[0] & /*componentContext*/
    1 && Gt(e(34, s = Oe.getDerivedFromVars(
      {
        font_size: Oe.json.font_size,
        letter_spacing: Oe.json.letter_spacing,
        font_weight: Oe.json.font_weight,
        font_weight_value: Oe.json.font_weight_value,
        font_family: Oe.json.font_family,
        text_color: Oe.json.text_color,
        underline: Oe.json.underline,
        strike: Oe.json.strike,
        line_height: Oe.json.line_height,
        text_shadow: Oe.json.text_shadow,
        font_feature_settings: Oe.json.font_feature_settings,
        font_variation_settings: Oe.json.font_variation_settings
      },
      void 0,
      !0,
      1
    ))), t.$$.dirty[0] & /*componentContext*/
    1 && Y(e(33, a = Oe.getDerivedFromVars(Oe.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && kt(e(32, l = Oe.getDerivedFromVars(Oe.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && lt(e(31, u = Oe.getDerivedFromVars(Oe.json.max_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(30, c = Oe.getDerivedFromVars(Oe.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && At(e(29, f = Oe.getDerivedFromVars(Oe.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(28, _ = Oe.getDerivedFromVars(Oe.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(27, h = Oe.getDerivedFromVars(Oe.json.focused_text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && $(e(26, m = Oe.getDerivedFromVars(Oe.json.truncate))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(25, p = Oe.getDerivedFromVars(Oe.json.text_gradient))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(24, k = Oe.getDerivedFromVars(Oe.json.selectable))), t.$$.dirty[0] & /*componentContext*/
    1 && D(e(23, w = Oe.getDerivedFromVars(Oe.json.auto_ellipsize))), t.$$.dirty[0] & /*componentContext*/
    1 && je(e(22, O = Oe.getDerivedFromVars(Oe.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && T(e(21, G = Oe.getDerivedFromVars(Oe.json.heading_type))), t.$$.dirty[2] & /*$jsonHeadingType*/
    32 && e(9, L = (() => {
      const ct = ft;
      if (ct && typeof ct == "string") {
        const Mt = ct.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(Mt))
          return Mt;
      }
      return "span";
    })()), t.$$.dirty[0] & /*htmlTag*/
    512 && e(16, zr = L !== "span" ? "div" : "span"), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonText*/
    16 && (typeof Oe.json.text == "string" ? e(2, Wt = K0(Jt)) : (e(2, Wt = ""), Oe.logError(K(new Error("Incorrect text value type"))))), t.$$.dirty[1] & /*$jsonTextGradient, $direction*/
    34603008) {
      let ct = "";
      if (_e) {
        const Mt = el([_e], W);
        Mt.image && (ct = Mt.image);
      }
      e(47, Tt = ct);
    }
    if (t.$$.dirty[1] & /*gradient*/
    65536 | t.$$.dirty[2] & /*$jsonRootTextStyles*/
    8 && e(7, Fr = Tt ? { ...Vt, text_color: "" } : Vt), t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[2] & /*$jsonTextSize*/
    4 && e(3, Ft = Gn(St, Ft)), t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*lineHeight*/
    512 | t.$$.dirty[2] & /*$jsonLineHeight*/
    2) {
      const ct = jt;
      Jn(ct) ? (e(40, ar = Number(ct) / Ft), e(11, Te = ar)) : e(11, Te = null);
    }
    if (t.$$.dirty[1] & /*$jsonMaxLines*/
    536870912 && e(8, ee = tt === 1), t.$$.dirty[0] & /*$jsonAutoEllipsize*/
    1024 | t.$$.dirty[1] & /*$jsonMaxLines, lineHeight*/
    536871424) {
      let ct = "", Mt, br = "", wr = !1;
      if (tt && tt > 1) {
        const nt = Number(tt);
        ct = nt * ar + "em", Mt = nt, br = nt, wr = !0;
      } else at && tt !== 1 && (wr = !0);
      e(41, bt = ct), e(12, er = Mt), e(4, Qt = br), e(42, Xt = wr);
    }
    if (t.$$.dirty[1] & /*$direction, halign*/
    1052672 | t.$$.dirty[2] & /*$jsonHAlign*/
    1 && e(43, ur = nl(it, W, ur)), t.$$.dirty[1] & /*$jsonVAlign, valign*/
    1073750016 && e(44, jr = ol(wt, jr)), t.$$.dirty[0] & /*text*/
    4 | t.$$.dirty[1] & /*$jsonRanges*/
    8388608 && e(50, fe = !be || Wt && be.length === 1 && be[0] && (!be[0].start || be[0].start === 0) && (!be[0].end || typeof be[0].end == "number" && be[0].end >= Wt.length)), t.$$.dirty[1] & /*gradient, $jsonTextColor, $jsonRanges*/
    276889600 && e(49, P = !!(!Tt && te) != !!(be && be[0] && be[0].text_color)), t.$$.dirty[1] & /*$jsonMaxLines, isAllTextSameColor, isOnlyOneColorDefined, $jsonTextColor, $jsonRanges, rootTextColor*/
    814497792) {
      let ct = "";
      tt && fe && P && (ct = _r(te || be && be[0] && be[0].text_color, 1, Yt)), e(45, Yt = ct);
    }
    t.$$.dirty[1] & /*$jsonFocusTextColor, focusTextColor*/
    134250496 && e(46, It = _r(Ae, 1, It)), t.$$.dirty[1] & /*$jsonTruncate*/
    67108864 && e(48, Z = oe === "none" ? "none" : ""), t.$$.dirty[0] & /*selectable*/
    32 | t.$$.dirty[1] & /*$jsonSelectable*/
    16777216 && e(5, ut = _n(Ze, ut)), t.$$.dirty[0] & /*text, rootTextStyles*/
    132 | t.$$.dirty[1] & /*$jsonRanges, $jsonImages*/
    12582912 && gr(Wt, be, Ee, Fr), t.$$.dirty[0] & /*singleline*/
    256 | t.$$.dirty[1] & /*multiline, halign, valign, truncate, focusTextColor*/
    178176 && e(20, se = {
      singleline: ee,
      multiline: Xt,
      halign: ur,
      valign: jr,
      truncate: Z,
      "has-focus-color": !!It
    }), t.$$.dirty[0] & /*hasCloudBg*/
    64 | t.$$.dirty[1] & /*gradient*/
    65536 && e(19, j = {
      gradient: !!Tt,
      "has-cloud-bg": sr
    }), t.$$.dirty[0] & /*fontSize, lineClamp*/
    24 | t.$$.dirty[1] & /*lineHeight, maxHeight, rootTextColor, gradient, focusTextColor*/
    116224 && e(18, z = {
      "font-size": ce(Ft),
      "line-height": ar,
      "max-height": bt,
      "-webkit-line-clamp": Qt,
      color: Yt,
      "background-image": Tt,
      "--divkit-text-focus-color": It
    }), t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*$jsonPaddings, $direction*/
    3145728 && e(17, N = mo(Ll(Pi(ie, {}) || {}, 10 / Ft), W));
  }, [
    Oe,
    xt,
    Wt,
    Ft,
    Qt,
    ut,
    sr,
    Fr,
    ee,
    L,
    at,
    Te,
    er,
    qt,
    dr,
    mr,
    zr,
    N,
    z,
    j,
    se,
    G,
    O,
    w,
    k,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    n,
    mt,
    $e,
    ar,
    bt,
    Xt,
    ur,
    jr,
    Yt,
    It,
    Tt,
    Z,
    P,
    fe,
    W,
    ie,
    Ee,
    be,
    Ze,
    _e,
    oe,
    Ae,
    te,
    tt,
    wt,
    it,
    jt,
    St,
    Vt,
    Jt,
    ft
  ];
}
class im extends Lr {
  constructor(r) {
    super(), Or(this, r, om, nm, Ar, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const sm = "appkit-container", lm = "appkit-container_wrap", am = "appkit-container_overflow_visible", um = "appkit-container_orientation_vertical", cm = "appkit-container_valign_start", fm = "appkit-container_valign_center", dm = "appkit-container_valign_end", _m = "appkit-container_halign_start", pm = "appkit-container_halign_center", gm = "appkit-container_halign_end", hm = "appkit-container_orientation_horizontal", mm = "appkit-container_orientation_overlap", Iu = {
  container: sm,
  container_wrap: lm,
  container_overflow_visible: am,
  container_orientation_vertical: um,
  container_valign_start: cm,
  container_valign_center: fm,
  container_valign_end: dm,
  "container_valign_space-between": "appkit-container_valign_space-between",
  "container_valign_space-around": "appkit-container_valign_space-around",
  "container_valign_space-evenly": "appkit-container_valign_space-evenly",
  container_halign_start: _m,
  container_halign_center: pm,
  container_halign_end: gm,
  "container_halign_space-between": "appkit-container_halign_space-between",
  "container_halign_space-around": "appkit-container_halign_space-around",
  "container_halign_space-evenly": "appkit-container_halign_space-evenly",
  container_orientation_horizontal: hm,
  container_orientation_overlap: mm,
  "container_fixed-container": "appkit-container_fixed-container",
  "container_responsive-mobile-vertical": "appkit-container_responsive-mobile-vertical",
  "container_responsive-mobile-horizontal": "appkit-container_responsive-mobile-horizontal",
  "container_responsive-mobile-has-height": "appkit-container_responsive-mobile-has-height",
  "container_responsive-tablet-vertical": "appkit-container_responsive-tablet-vertical",
  "container_responsive-tablet-horizontal": "appkit-container_responsive-tablet-horizontal",
  "container_responsive-tablet-has-height": "appkit-container_responsive-tablet-has-height"
};
function Du(t) {
  return {
    top: Number(t == null ? void 0 : t.top) || 0,
    right: Number(t == null ? void 0 : t.right) || 0,
    bottom: Number(t == null ? void 0 : t.bottom) || 0,
    left: Number(t == null ? void 0 : t.left) || 0
  };
}
function Tu(t, r, e) {
  const n = ((r == null ? void 0 : r.margins.left) || 0) + ((r == null ? void 0 : r.margins.right) || 0), o = ((r == null ? void 0 : r.margins.top) || 0) + ((r == null ? void 0 : r.margins.bottom) || 0);
  r != null && r.show_at_start && (e ? t.top = r.style.height + o : t.left = r.style.width + n), r != null && r.show_at_end && (e ? t.bottom = r.style.height + o : t.right = r.style.width + n);
}
function bm(t, r, e) {
  const n = {};
  return Tu(n, r, t === "vertical"), Tu(n, e, t === "horizontal"), n;
}
function ym({
  orientation: t,
  separator: r,
  lineSeparator: e,
  itemSpacing: n,
  lineSpacing: o
}) {
  let i;
  const s = ((r == null ? void 0 : r.margins.left) || 0) + ((r == null ? void 0 : r.margins.right) || 0), a = ((r == null ? void 0 : r.margins.top) || 0) + ((r == null ? void 0 : r.margins.bottom) || 0), l = ((e == null ? void 0 : e.margins.left) || 0) + ((e == null ? void 0 : e.margins.right) || 0), u = ((e == null ? void 0 : e.margins.top) || 0) + ((e == null ? void 0 : e.margins.bottom) || 0);
  return t === "horizontal" ? i = [
    e != null && e.show_between ? e.style.height + u : o,
    r != null && r.show_between ? r.style.width + s : n
  ] : i = [
    r != null && r.show_between ? r.style.height + a : n,
    e != null && e.show_between ? e.style.width + l : o
  ], i.map(ce).join(" ");
}
function wm(t) {
  var e;
  const r = (e = t.width) == null ? void 0 : e.type;
  return r !== "wrap_content" && r !== "fixed";
}
function km(t) {
  var e;
  return ((e = t.height) == null ? void 0 : e.type) === "match_parent";
}
function vm(t, r) {
  return t === "vertical" || t === "horizontal" || t === "overlap" ? t : r;
}
function jm(t) {
  var r, e, n;
  return {
    width: en((r = t.item_width) == null ? void 0 : r.value, 10),
    height: en((e = t.item_height) == null ? void 0 : e.value, 10),
    radius: en((n = t.corner_radius) == null ? void 0 : n.value, 5)
  };
}
function Cm(t) {
  var e;
  const r = en((e = t.radius) == null ? void 0 : e.value, 10) * 2;
  return {
    width: r,
    height: r,
    radius: r
  };
}
function Em(t, r, e) {
  var l;
  const n = {}, o = r.stroke || (e == null ? void 0 : e.stroke), i = o != null && o.color ? _r(o.color) : "", s = o != null && o.width ? Number((l = o.width) != null ? l : 1) : "";
  n.width = t.width, n.height = t.height, n.borderRadius = t.radius;
  const a = r.background_color || (e == null ? void 0 : e.color);
  return n.background = _r(a), i && s && (n.boxShadow = `inset 0 0 0 ${ce(s)} ${i}`), n;
}
function so(t, r, e) {
  if (!t || !t.shape || !t.shape.type || !r.includes(t.shape.type) || t.type !== "shape_drawable")
    return e;
  let n;
  if (t.shape.type === "rounded_rectangle")
    n = jm(t.shape);
  else if (t.shape.type === "circle")
    n = Cm(t.shape);
  else
    return e;
  return Em(n, t.shape, {
    color: t.color,
    stroke: t.stroke
  });
}
let Oi;
function Mu() {
  if (typeof document > "u" && (Oi = !0), Oi !== void 0)
    return Oi;
  const t = document.createElement("div");
  return t.style.position = "absolute", t.style.display = "flex", t.style.flexDirection = "column", t.style.gap = "1px", t.appendChild(document.createElement("div")), t.appendChild(document.createElement("div")), document.body.appendChild(t), Oi = t.scrollHeight === 1, document.body.removeChild(t), Oi;
}
function Am(t, r) {
  return t === "top" || t === "center" || t === "bottom" || t === "baseline" || t === "space-between" || t === "space-around" || t === "space-evenly" ? t === "top" ? "start" : t === "bottom" ? "end" : t : r;
}
function Sm(t, r, e) {
  return t === "left" || t === "center" || t === "right" || t === "space-between" || t === "space-around" || t === "space-evenly" || t === "start" || t === "end" ? t === "left" ? r === "ltr" ? "start" : "end" : t === "right" ? r === "ltr" ? "end" : "start" : t : e;
}
function Vm() {
}
function Go(t) {
  return {
    subscribe(r) {
      return r(t), Vm;
    }
  };
}
function il(t, r, e, n) {
  const o = [], i = n.prototypes;
  return i && t.forEach((s, a) => {
    if (s === null || typeof s != "object")
      return;
    const l = r.preparePrototypeVariables(n.data_element_name || "it", s, a);
    let u, c;
    for (let f = 0; f < i.length; ++f) {
      const _ = i[f];
      if (!_.div)
        continue;
      if (_.selector === void 0) {
        u = _.div, c = e.getJsonWithVars(_.id, l);
        break;
      }
      if (e.getJsonWithVars(_.selector, l)) {
        u = _.div, c = e.getJsonWithVars(_.id, l);
        break;
      }
    }
    u && o.push({
      div: u,
      id: c,
      vars: l,
      key: c || { index: a, data: s }
    });
  }), o;
}
const Yi = {
  "container-separator": "appkit-container-separator",
  "container-separator__item": "appkit-container-separator__item",
  "container-separator__shape": "appkit-container-separator__shape"
};
function Fm(t, r) {
  let e = 0, n, o = !1;
  return function() {
    const i = Date.now();
    return !e || Math.abs(i - e) > r ? (e = i, n = t.apply(this, arguments)) : (o || (o = !0, setTimeout(() => {
      o = !1, n = t.apply(this, arguments);
    }, r)), n);
  };
}
function Im(t) {
  const r = t.getBoundingClientRect(), e = getComputedStyle(t);
  return {
    top: r.top - parseFloat(e.marginTop),
    right: r.right + parseFloat(e.marginRight),
    bottom: r.bottom + parseFloat(e.marginBottom),
    left: r.left - parseFloat(e.marginLeft)
  };
}
const { window: Dm } = Io;
function Pu(t, r, e) {
  const n = t.slice();
  return n[16] = r[e], n;
}
function Nu(t) {
  let r, e, n = `${/*item*/
  t[16].style.width}px`, o = `${/*item*/
  t[16].style.height}px`, i = `${/*item*/
  t[16].style.borderRadius}px`, s, a = `${/*item*/
  t[16].left}px`, l = `${/*item*/
  t[16].top}px`, u = `${/*item*/
  t[16].width}px`, c = `${/*item*/
  t[16].height}px`;
  return {
    c() {
      r = Se("div"), e = Se("div"), s = lr(), g(e, "class", Yi["container-separator__shape"]), M(e, "width", n), M(e, "height", o), M(e, "border-radius", i), M(
        e,
        "background",
        /*item*/
        t[16].style.background
      ), M(
        e,
        "box-shadow",
        /*item*/
        t[16].style.boxShadow
      ), g(r, "class", Yi["container-separator__item"]), M(r, "left", a), M(r, "top", l), M(r, "width", u), M(r, "height", c);
    },
    m(f, _) {
      q(f, r, _), pt(r, e), pt(r, s);
    },
    p(f, _) {
      _ & /*separators*/
      2 && n !== (n = `${/*item*/
      f[16].style.width}px`) && M(e, "width", n), _ & /*separators*/
      2 && o !== (o = `${/*item*/
      f[16].style.height}px`) && M(e, "height", o), _ & /*separators*/
      2 && i !== (i = `${/*item*/
      f[16].style.borderRadius}px`) && M(e, "border-radius", i), _ & /*separators*/
      2 && M(
        e,
        "background",
        /*item*/
        f[16].style.background
      ), _ & /*separators*/
      2 && M(
        e,
        "box-shadow",
        /*item*/
        f[16].style.boxShadow
      ), _ & /*separators*/
      2 && a !== (a = `${/*item*/
      f[16].left}px`) && M(r, "left", a), _ & /*separators*/
      2 && l !== (l = `${/*item*/
      f[16].top}px`) && M(r, "top", l), _ & /*separators*/
      2 && u !== (u = `${/*item*/
      f[16].width}px`) && M(r, "width", u), _ & /*separators*/
      2 && c !== (c = `${/*item*/
      f[16].height}px`) && M(r, "height", c);
    },
    d(f) {
      f && J(r);
    }
  };
}
function Tm(t) {
  let r, e, n, o = nr(
    /*separators*/
    t[1]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = Nu(Pu(t, o, s));
  return {
    c() {
      r = Se("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      g(r, "class", Yi["container-separator"]);
    },
    m(s, a) {
      q(s, r, a);
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, null);
      t[13](r), e || (n = He(
        Dm,
        "resize",
        /*throttledUpdated*/
        t[2]
      ), e = !0);
    },
    p(s, [a]) {
      if (a & /*separators*/
      2) {
        o = nr(
          /*separators*/
          s[1]
        );
        let l;
        for (l = 0; l < o.length; l += 1) {
          const u = Pu(s, o, l);
          i[l] ? i[l].p(u, a) : (i[l] = Nu(u), i[l].c(), i[l].m(r, null));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = o.length;
      }
    },
    i: A,
    o: A,
    d(s) {
      s && J(r), nn(i, s), t[13](null), e = !1, n();
    }
  };
}
const Mm = 10;
function bl(t, r, e, n, o, i) {
  const s = r.margins.left, a = r.margins.right, l = r.margins.top, u = r.margins.bottom;
  i ? t.push({
    top: e.bottom + l,
    left: o.left + s,
    width: Math.max(0, o.right - o.left - s - a),
    height: n.top - e.bottom - l - u,
    style: r.style
  }) : t.push({
    top: o.top + l,
    left: e.right + s,
    width: n.left - e.right - s - a,
    height: Math.max(0, o.bottom - o.top - l - u),
    style: r.style
  });
}
function zu(t, r, e, n, o, i) {
  const s = {
    top: Math.min(...e.map((a) => a.top)),
    right: Math.max(...e.map((a) => a.right)),
    bottom: Math.max(...e.map((a) => a.bottom)),
    left: Math.min(...e.map((a) => a.left))
  };
  if (r != null && r.show_at_start) {
    let a, l;
    o === "space-around" || o === "space-evenly" ? (a = i.left - r.style.width, l = i.top - r.style.height) : (a = e[0].left - r.style.width - r.margins.left - r.margins.right, l = e[0].top - r.style.height - r.margins.top - r.margins.bottom), bl(
      t,
      r,
      // only right and bottom is used
      { top: 0, right: a, bottom: l, left: 0 },
      e[0],
      s,
      n
    );
  }
  if (r != null && r.show_between)
    for (let a = 0; a < e.length - 1; ++a)
      bl(t, r, e[a], e[a + 1], s, n);
  if (r != null && r.show_at_end) {
    const a = e[e.length - 1];
    let l, u;
    o === "space-around" || o === "space-evenly" ? (l = i.bottom + r.style.height, u = i.right + r.style.width) : (l = a.bottom + r.style.height + r.margins.top + r.margins.bottom, u = a.right + r.style.width + r.margins.left + r.margins.right), bl(
      t,
      r,
      a,
      // only top and left is used
      { top: l, right: 0, bottom: 0, left: u },
      s,
      n
    );
  }
}
function Pm(t, r, e) {
  let n, { orientation: o } = r, { separator: i } = r, { lineSeparator: s } = r, { contentHAlign: a } = r, { contentVAlign: l } = r, { direction: u } = r;
  const c = Fm(w, Mm);
  let f = [], _, h = !1, m = null, p = null;
  function k(G) {
    G.some((L) => {
      var fe;
      const ee = (fe = L.target) == null ? void 0 : fe.classList;
      return !(ee != null && ee.contains(Yi["container-separator__shape"])) && !(ee != null && ee.contains(Yi["container-separator"]));
    }) && c();
  }
  function w() {
    if (!n)
      return;
    const G = n.getBoundingClientRect(), L = window.getComputedStyle(n), ee = {
      top: G.top + parseFloat(L.paddingTop),
      right: G.right - parseFloat(L.paddingRight),
      bottom: G.bottom - parseFloat(L.paddingBottom),
      left: G.left + parseFloat(L.paddingLeft)
    };
    e(1, f = []);
    let fe = [...n.children].filter((se) => se !== _ && se instanceof HTMLElement && !se.classList.contains(Ms.outer__border) && getComputedStyle(se).display !== "none"), P = [];
    for (; fe.length; ) {
      const se = [], j = fe.shift();
      se.push(j);
      let z = j.getBoundingClientRect(), N = z.left, W = z.right, ie = z.bottom;
      for (; fe.length; ) {
        let de = fe[0], je = de.getBoundingClientRect();
        if (o === "vertical") {
          if (je.top < ie)
            break;
        } else if (u === "ltr" ? je.left < W : je.right > N)
          break;
        W = Math.max(W, je.right), N = Math.min(N, je.left), ie = Math.max(ie, je.bottom), se.push(de), fe.shift();
      }
      P.push(se);
    }
    const Z = [];
    P.forEach((se) => {
      const j = se.map((N) => Im(N));
      u === "rtl" && o === "horizontal" && j.reverse(), i && zu(
        f,
        i,
        j,
        o === "vertical",
        o === "vertical" ? l : a,
        ee
      );
      const z = {
        top: Math.min(...j.map((N) => N.top)),
        right: Math.max(...j.map((N) => N.right)),
        bottom: Math.max(...j.map((N) => N.bottom)),
        left: Math.min(...j.map((N) => N.left))
      };
      Z.push(z);
    }), u === "rtl" && o === "vertical" && Z.reverse(), s && zu(
      f,
      s,
      Z,
      o === "horizontal",
      o === "vertical" ? a : l,
      ee
    ), f.forEach((se) => {
      se.top -= G.top, se.left -= G.left;
    });
  }
  to(() => {
    e(9, h = !0);
  }), an(() => {
    e(9, h = !1);
  });
  function O(G) {
    Ir[G ? "unshift" : "push"](() => {
      _ = G, e(0, _);
    });
  }
  return t.$$set = (G) => {
    "orientation" in G && e(3, o = G.orientation), "separator" in G && e(4, i = G.separator), "lineSeparator" in G && e(5, s = G.lineSeparator), "contentHAlign" in G && e(6, a = G.contentHAlign), "contentVAlign" in G && e(7, l = G.contentVAlign), "direction" in G && e(8, u = G.direction);
  }, t.$$.update = () => {
    t.$$.dirty & /*node*/
    1 && e(12, n = (_ == null ? void 0 : _.parentElement) || null), t.$$.dirty & /*mounted, parentElement, mutationObserver, resizeObserver*/
    7680 && (h && n || m || p) && (m && (m.disconnect(), e(10, m = null)), p && (p.disconnect(), e(11, p = null)), h && n && (typeof MutationObserver < "u" && (e(10, m = new MutationObserver(k)), m.observe(n, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    })), typeof ResizeObserver < "u" && (e(11, p = new ResizeObserver(c)), p.observe(n)))), t.$$.dirty & /*mounted, parentElement*/
    4608 && h && n && c();
  }, [
    _,
    f,
    c,
    o,
    i,
    s,
    a,
    l,
    u,
    h,
    m,
    p,
    n,
    O
  ];
}
class Nm extends Lr {
  constructor(r) {
    super(), Or(this, r, Pm, Tm, Ar, {
      orientation: 3,
      separator: 4,
      lineSeparator: 5,
      contentHAlign: 6,
      contentVAlign: 7,
      direction: 8
    });
  }
}
const { Boolean: zm } = Io;
function Ru(t, r, e) {
  const n = t.slice();
  return n[63] = r[e], n;
}
function Ou(t) {
  let r, e;
  return r = new qn({
    props: {
      componentContext: (
        /*item*/
        t[63]
      ),
      layoutParams: (
        /*childLayoutParams*/
        t[8]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*items*/
      512 && (i.componentContext = /*item*/
      n[63]), o[0] & /*childLayoutParams*/
      256 && (i.layoutParams = /*childLayoutParams*/
      n[8]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Lu(t) {
  let r, e;
  return r = new Nm({
    props: {
      direction: (
        /*$direction*/
        t[10]
      ),
      separator: (
        /*separator*/
        t[5]
      ),
      lineSeparator: (
        /*lineSeparator*/
        t[6]
      ),
      orientation: (
        /*orientation*/
        t[2]
      ),
      contentHAlign: (
        /*contentHAlign*/
        t[4]
      ),
      contentVAlign: (
        /*contentVAlign*/
        t[3]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*$direction*/
      1024 && (i.direction = /*$direction*/
      n[10]), o[0] & /*separator*/
      32 && (i.separator = /*separator*/
      n[5]), o[0] & /*lineSeparator*/
      64 && (i.lineSeparator = /*lineSeparator*/
      n[6]), o[0] & /*orientation*/
      4 && (i.orientation = /*orientation*/
      n[2]), o[0] & /*contentHAlign*/
      16 && (i.contentHAlign = /*contentHAlign*/
      n[4]), o[0] & /*contentVAlign*/
      8 && (i.contentVAlign = /*contentVAlign*/
      n[3]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Rm(t) {
  let r, e, n, o = nr(
    /*items*/
    t[9]
  ), i = [];
  for (let l = 0; l < o.length; l += 1)
    i[l] = Ou(Ru(t, o, l));
  const s = (l) => Q(i[l], 1, 1, () => {
    i[l] = null;
  });
  let a = (
    /*separator*/
    (t[5] || /*lineSeparator*/
    t[6]) && Lu(t)
  );
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      r = lr(), a && a.c(), e = Kt();
    },
    m(l, u) {
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(l, u);
      q(l, r, u), a && a.m(l, u), q(l, e, u), n = !0;
    },
    p(l, u) {
      if (u[0] & /*items, childLayoutParams*/
      768) {
        o = nr(
          /*items*/
          l[9]
        );
        let c;
        for (c = 0; c < o.length; c += 1) {
          const f = Ru(l, o, c);
          i[c] ? (i[c].p(f, u), B(i[c], 1)) : (i[c] = Ou(f), i[c].c(), B(i[c], 1), i[c].m(r.parentNode, r));
        }
        for (or(), c = o.length; c < i.length; c += 1)
          s(c);
        ir();
      }
      /*separator*/
      l[5] || /*lineSeparator*/
      l[6] ? a ? (a.p(l, u), u[0] & /*separator, lineSeparator*/
      96 && B(a, 1)) : (a = Lu(l), a.c(), B(a, 1), a.m(e.parentNode, e)) : a && (or(), Q(a, 1, 1, () => {
        a = null;
      }), ir());
    },
    i(l) {
      if (!n) {
        for (let u = 0; u < o.length; u += 1)
          B(i[u]);
        B(a), n = !0;
      }
    },
    o(l) {
      i = i.filter(zm);
      for (let u = 0; u < i.length; u += 1)
        Q(i[u]);
      Q(a), n = !1;
    },
    d(l) {
      l && (J(r), J(e)), nn(i, l), a && a.d(l);
    }
  };
}
function Om(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: ht(
        "container",
        Iu,
        /*mods*/
        t[12]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      style: (
        /*style*/
        t[13]
      ),
      additionalPaddings: (
        /*additionalPaddings*/
        t[14]
      ),
      heightByAspect: !!/*aspect*/
      t[7],
      parentOf: (
        /*items*/
        t[9]
      ),
      replaceItems: (
        /*replaceItems*/
        t[31]
      ),
      $$slots: { default: [Rm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = ht(
        "container",
        Iu,
        /*mods*/
        n[12]
      )), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*style*/
      8192 && (i.style = /*style*/
      n[13]), o[0] & /*additionalPaddings*/
      16384 && (i.additionalPaddings = /*additionalPaddings*/
      n[14]), o[0] & /*aspect*/
      128 && (i.heightByAspect = !!/*aspect*/
      n[7]), o[0] & /*items*/
      512 && (i.parentOf = /*items*/
      n[9]), o[0] & /*$direction, separator, lineSeparator, orientation, contentHAlign, contentVAlign, items, childLayoutParams*/
      1916 | o[2] & /*$$scope*/
      16 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
const Lm = {
  start: "start",
  center: "center",
  end: "end",
  // 'space-*' values doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, Bm = {
  start: "start",
  center: "center",
  end: "end",
  baseline: "baseline",
  // 'space-*' doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, Bu = ["rounded_rectangle", "circle"];
function Hm(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, G, L, ee, fe, P, Z, se, j, z, N = A, W = () => (N(), N = F(w, (ut) => e(45, z = ut)), w), ie, de = A, je = () => (de(), de = F(G, (ut) => e(46, ie = ut)), G), Ee, pe = A, ze = () => (pe(), pe = F(O, (ut) => e(47, Ee = ut)), O), be, Fe = A, Ge = () => (Fe(), Fe = F(k, (ut) => e(48, be = ut)), k), Ze, ke = A, et = () => (ke(), ke = F(p, (ut) => e(49, Ze = ut)), p), _e, Ie = A, ue = () => (Ie(), Ie = F(m, (ut) => e(50, _e = ut)), m), oe, ye = A, $ = () => (ye(), ye = F(f, (ut) => e(51, oe = ut)), f), Ae, xe = A, qe = () => (xe(), xe = F(c, (ut) => e(52, Ae = ut)), c), te, Xe = A, Le = () => (Xe(), Xe = F(h, (ut) => e(53, te = ut)), h), tt, dt = A, lt = () => (dt(), dt = F(_, (ut) => e(54, tt = ut)), _), wt, ot, At = A, it = () => (At(), At = F(u, (ut) => e(55, ot = ut)), u), me, ne = A, at = () => (ne(), ne = F(l, (ut) => e(56, me = ut)), l), Ve, D = A, jt = () => (D(), D = F(T, (ut) => e(57, Ve = ut)), T), gt, kt = A, St = () => (kt(), kt = F(a, (ut) => e(58, gt = ut)), a), rt, Y = A, Vt = () => (Y(), Y = F(s, (ut) => e(59, rt = ut)), s), Dt, Gt = A, Jt = () => (Gt(), Gt = F(i, (ut) => e(60, Dt = ut)), i);
  t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => Fe()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => Ie()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Xe()), t.$$.on_destroy.push(() => dt()), t.$$.on_destroy.push(() => At()), t.$$.on_destroy.push(() => ne()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => kt()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => Gt());
  let { componentContext: ve } = r, { layoutParams: We = void 0 } = r;
  const ft = Dr(Yr), Me = ft.direction;
  bn(t, Me, (ut) => e(10, wt = ut));
  let T, Oe = "vertical", xt = "start", ae = "start", mt = null, Wt = null, Ft, ar = {}, Te = 0, bt = 0, er = !1;
  function Qt() {
    e(2, Oe = "vertical"), e(3, xt = "start"), e(4, ae = "start"), e(7, Ft = void 0), e(32, Te = 0), e(33, bt = 0), e(34, er = !1);
  }
  function Xt(ut) {
    e(0, ve = e(35, jr = {
      ...ve,
      json: {
        ...ve.json,
        items: ut.filter(To)
      }
    }));
  }
  let ur = [], jr, Yt = {}, It, Tt;
  return an(() => {
    ur.forEach((ut) => {
      ut.destroy();
    });
  }), t.$$set = (ut) => {
    "componentContext" in ut && e(0, ve = ut.componentContext), "layoutParams" in ut && e(1, We = ut.layoutParams);
  }, t.$$.update = () => {
    var ut, qt, sr, dr, mr, pr, Fr, zr, gr, $e, ct;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(44, n = ve.origJson), t.$$.dirty[1] & /*origJson*/
    8192 && n && Qt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(43, o = ve.json.items), t.$$.dirty[0] & /*componentContext*/
    1 && Jt(e(29, i = typeof ((ut = ve.json.item_builder) == null ? void 0 : ut.data) == "string" ? ve.getDerivedFromVars((qt = ve.json.item_builder) == null ? void 0 : qt.data, void 0, !0) : (sr = ve.json.item_builder) != null && sr.data ? Go(ve.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && Vt(e(28, s = ve.getDerivedFromVars(ve.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && St(e(27, a = ve.getDerivedFromVars(ve.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && at(e(26, l = ve.getDerivedFromVars(ve.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && it(e(25, u = ve.getDerivedFromVars(ve.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(24, c = ve.getDerivedFromVars(ve.json.separator))), t.$$.dirty[0] & /*componentContext*/
    1 && $(e(23, f = ve.getDerivedFromVars(ve.json.line_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && lt(e(22, _ = ve.getDerivedFromVars(ve.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(21, h = ve.getDerivedFromVars(ve.json.line_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(20, m = ve.getDerivedFromVars(ve.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(19, p = ve.getDerivedFromVars(ve.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(18, k = ve.getDerivedFromVars(ve.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && W(e(17, w = ve.getDerivedFromVars(ve.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && ze(e(16, O = ve.getDerivedFromVars(ve.json.max_width))), t.$$.dirty[0] & /*componentContext*/
    1 && je(e(15, G = ve.getDerivedFromVars(ve.json.responsive))), t.$$.dirty[0] & /*componentContext, items*/
    513 | t.$$.dirty[1] & /*$jsonItemBuilderData, jsonItems, prevContext*/
    536875024) {
      let Mt = [];
      if (ve.json.item_builder && Array.isArray(Dt) && Array.isArray(ve.json.item_builder.prototypes)) {
        const le = ve.json.item_builder;
        Mt = il(Dt, ft, ve, le);
      } else
        Mt = (Array.isArray(o) && o || []).map((le, Ct) => ({
          div: le,
          key: le.id || { index: Ct, data: le }
        }));
      const br = new Set(ur), wr = /* @__PURE__ */ new Map();
      let nt = !1;
      jr === ve && ur.forEach((le) => {
        le.key && (typeof le.key == "string" && wr.has(le.key) ? nt || (nt = !0, ve.logError(K(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: le.key } }))) : wr.set(
          typeof le.key == "string" ? le.key : le.key.index,
          le
        ));
      }), e(9, ur = Mt.map((le, Ct) => {
        let rr = !nt && wr.get(le.id), hr = wr.get(Ct);
        return !rr && !le.id && typeof le.key == "object" && typeof (hr == null ? void 0 : hr.key) == "object" && Mi(hr.key.data, le.key.data) && (rr = hr), rr ? (br.delete(rr), rr) : ve.produceChildContext(le.div, {
          path: Ct,
          variables: le.vars,
          id: le.id,
          key: le.key
        });
      }));
      for (const le of br)
        le.destroy();
      e(35, jr = ve);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    513) {
      let Mt = [];
      ur.forEach((br) => {
        Mt.push(ve.getDerivedFromVars({
          width: br.json.width,
          height: br.json.height
        }));
      }), jt(e(11, T = Ti(Mt, (br) => [...br])));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonOrientation*/
    268435456 && e(2, Oe = vm(rt, Oe)), t.$$.dirty[1] & /*$jsonLayoutMode*/
    134217728 && e(38, L = gt === "wrap"), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(42, ee = Oe !== "horizontal" && !L), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(41, fe = Oe !== "vertical" && !L), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(40, P = Oe === "overlap" && !Ve.every(wm)), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(39, Z = Oe === "overlap" && !Ve.every(km)), t.$$.dirty[0] & /*contentVAlign*/
    8 | t.$$.dirty[1] & /*$jsonContentVAlign*/
    33554432 && e(3, xt = Am(me, xt)), t.$$.dirty[0] & /*$direction, contentHAlign*/
    1040 | t.$$.dirty[1] & /*$jsonContentHAlign*/
    16777216 && e(4, ae = Sm(ot, wt, ae)), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    8388610 && e(32, Te = en(tt, Te)), t.$$.dirty[1] & /*$jsonLineSpacing, lineSpacing*/
    4194308 && e(33, bt = en(te, bt)), t.$$.dirty[0] & /*orientation, separator, componentContext*/
    37 | t.$$.dirty[1] & /*$jsonSeparator, itemSpacing*/
    2097154)
      if (Ae != null && Ae.style && Oe !== "overlap" && Mu()) {
        const Mt = so(Ae.style, Bu, (mt == null ? void 0 : mt.style) || null);
        Mt ? (e(5, mt = {
          show_at_start: !!((dr = Ae.show_at_start) != null && dr),
          show_at_end: !!((mr = Ae.show_at_end) != null && mr),
          show_between: !!((pr = Ae.show_between) == null || pr),
          style: Mt,
          margins: Du(Ae.margins)
        }), mt.show_between && Te && ve.logError(K(new Error("item_spacing will be ignored due to the 'separator' property."), { level: "warn" }))) : e(5, mt = null);
      } else
        e(5, mt = null);
    if (t.$$.dirty[0] & /*orientation, lineSeparator, componentContext*/
    69 | t.$$.dirty[1] & /*$jsonLineSeparator, lineSpacing*/
    1048580)
      if (oe != null && oe.style && Oe !== "overlap" && Mu()) {
        const Mt = so(oe.style, Bu, (Wt == null ? void 0 : Wt.style) || null);
        Mt ? (e(6, Wt = {
          show_at_start: !!((Fr = oe.show_at_start) != null && Fr),
          show_at_end: !!((zr = oe.show_at_end) != null && zr),
          show_between: !!((gr = oe.show_between) == null || gr),
          style: Mt,
          margins: Du(oe.margins)
        }), Wt.show_between && bt && ve.logError(K(new Error("line_spacing will be ignored due to the 'line_separator' property."), { level: "warn" }))) : e(6, Wt = null);
      } else
        e(6, Wt = null);
    if (t.$$.dirty[0] & /*separator, lineSeparator, orientation*/
    100 && e(14, se = mt || Wt ? bm(Oe, mt, Wt) : null), t.$$.dirty[1] & /*$jsonAspect*/
    524288) {
      const Mt = _e == null ? void 0 : _e.ratio;
      Mt && Jn(Mt) ? e(7, Ft = Mt) : e(7, Ft = void 0);
    }
    if (t.$$.dirty[0] & /*orientation, contentHAlign, contentVAlign, layoutParams, aspect, childLayoutParams*/
    414 | t.$$.dirty[1] & /*wrap, $jsonWidth, $jsonHeight, supportWidthWrapContent, supportHeightWrapContent, stretchWidth, stretchHeight*/
    397184) {
      let Mt = {};
      Oe === "overlap" && (Mt.overlapParent = !0), Oe !== "horizontal" && (Mt.parentHAlign = L ? "start" : Lm[ae]), Oe !== "vertical" && (Mt.parentVAlign = L ? "start" : Bm[xt]);
      const br = (Ze == null ? void 0 : Ze.type) === "wrap_content" || (Ze == null ? void 0 : Ze.type) === "match_parent" && (We == null ? void 0 : We.parentHorizontalWrapContent), wr = !be || be.type === "wrap_content" || be.type === "match_parent" && (We == null ? void 0 : We.parentVerticalWrapContent);
      !ee && br && (Mt.parentHorizontalWrapContent = !0), !Ft && !fe && wr && (Mt.parentVerticalWrapContent = !0), br || (Mt.parentContainerKnownWidth = !0), wr || (Mt.parentContainerKnownHeight = !0), Mt.stretchWidth = P, Mt.stretchHeight = Z, Oe === "horizontal" && (Mt.parentContainerOrientation = "horizontal"), Oe === "vertical" && (Mt.parentContainerOrientation = "vertical"), L && (Mt.parentContainerWrap = !0), e(8, ar = Uo(Mt, ar));
    }
    if (t.$$.dirty[1] & /*$jsonMaxWidth*/
    65536 && e(34, er = (Ee == null ? void 0 : Ee.type) === "fixed"), t.$$.dirty[0] & /*orientation, contentVAlign, contentHAlign*/
    28 | t.$$.dirty[1] & /*$jsonResponsive, wrap, $jsonClipToBounds, isFixedContainer, responsiveMobileHeight, responsiveTabletHeight*/
    49384) {
      let Mt, br;
      if (e(36, It = void 0), e(37, Tt = void 0), ie) {
        const wr = ie == null ? void 0 : ie.mobile, nt = ie == null ? void 0 : ie.tablet;
        if (wr != null && wr.orientation && (Mt = String(wr.orientation)), nt != null && nt.orientation && (br = String(nt.orientation)), (($e = wr == null ? void 0 : wr.height) == null ? void 0 : $e.type) === "fixed" && wr.height.value !== void 0) {
          const le = en(wr.height.value, 0);
          e(36, It = le > 0 ? le : void 0);
        }
        if (((ct = nt == null ? void 0 : nt.height) == null ? void 0 : ct.type) === "fixed" && nt.height.value !== void 0) {
          const le = en(nt.height.value, 0);
          e(37, Tt = le > 0 ? le : void 0);
        }
      }
      e(12, Yt = {
        orientation: Oe,
        valign: xt,
        halign: ae,
        wrap: L,
        overflow: z === !1 || z === 0 ? "visible" : void 0,
        "fixed-container": er,
        "responsive-mobile-vertical": Mt === "vertical",
        "responsive-mobile-horizontal": Mt === "horizontal",
        "responsive-tablet-vertical": br === "vertical",
        "responsive-tablet-horizontal": br === "horizontal",
        "responsive-mobile-has-height": It !== void 0,
        "responsive-tablet-has-height": Tt !== void 0
      });
    }
    t.$$.dirty[0] & /*separator, lineSeparator, orientation, aspect*/
    228 | t.$$.dirty[1] & /*itemSpacing, lineSpacing, responsiveMobileHeight, responsiveTabletHeight*/
    102 && e(13, j = {
      gap: mt || Wt || Te || bt ? ym({
        orientation: Oe,
        separator: mt,
        lineSeparator: Wt,
        itemSpacing: Te,
        lineSpacing: bt
      }) : void 0,
      "aspect-ratio": Ft,
      "--responsive-mobile-height": It !== void 0 ? ce(It) : void 0,
      "--responsive-tablet-height": Tt !== void 0 ? ce(Tt) : void 0
    });
  }, [
    ve,
    We,
    Oe,
    xt,
    ae,
    mt,
    Wt,
    Ft,
    ar,
    ur,
    wt,
    T,
    Yt,
    j,
    se,
    G,
    O,
    w,
    k,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    Me,
    Xt,
    Te,
    bt,
    er,
    jr,
    It,
    Tt,
    L,
    Z,
    P,
    fe,
    ee,
    o,
    n,
    z,
    ie,
    Ee,
    be,
    Ze,
    _e,
    oe,
    Ae,
    te,
    tt,
    ot,
    me,
    Ve,
    gt,
    rt,
    Dt
  ];
}
class Wm extends Lr {
  constructor(r) {
    super(), Or(this, r, Hm, Om, Ar, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Um = "appkit-separator", Gm = "appkit-separator_orientation_horizontal", Jm = "appkit-separator_orientation_vertical", qm = "appkit-separator__inner", Bl = {
  separator: Um,
  separator_orientation_horizontal: Gm,
  separator_orientation_vertical: Jm,
  separator__inner: qm
};
function ca(t, r) {
  return t === "vertical" || t === "horizontal" ? t : r;
}
function Hu(t) {
  let r, e;
  return {
    c() {
      r = Se("span"), g(r, "class", Bl.separator__inner), g(r, "style", e = $t(
        /*style*/
        t[3]
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o & /*style*/
      8 && e !== (e = $t(
        /*style*/
        n[3]
      )) && g(r, "style", e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function Ym(t) {
  let r, e = (
    /*hasContent*/
    t[4] && Hu(t)
  );
  return {
    c() {
      e && e.c(), r = Kt();
    },
    m(n, o) {
      e && e.m(n, o), q(n, r, o);
    },
    p(n, o) {
      /*hasContent*/
      n[4] ? e ? e.p(n, o) : (e = Hu(n), e.c(), e.m(r.parentNode, r)) : e && (e.d(1), e = null);
    },
    d(n) {
      n && J(r), e && e.d(n);
    }
  };
}
function Km(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: ht(
        "separator",
        Bl,
        /*mods*/
        t[2]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: { default: [Ym] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, [o]) {
      const i = {};
      o & /*mods*/
      4 && (i.cls = ht(
        "separator",
        Bl,
        /*mods*/
        n[2]
      )), o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o & /*$$scope, style, hasContent*/
      8216 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Xm(t, r, e) {
  let n, o, i, s, a, l, u, c, f = A, _ = () => (f(), f = F(o, (O) => e(11, c = O)), o);
  t.$$.on_destroy.push(() => f());
  let { componentContext: h } = r, { layoutParams: m = void 0 } = r, p = "horizontal", k = "rgba(0,0,0,0.08)";
  function w() {
    e(6, p = "horizontal"), e(7, k = "rgba(0,0,0,0.08)");
  }
  return t.$$set = (O) => {
    "componentContext" in O && e(0, h = O.componentContext), "layoutParams" in O && e(1, m = O.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(10, n = h.origJson), t.$$.dirty & /*origJson*/
    1024 && n && w(), t.$$.dirty & /*componentContext*/
    1 && _(e(5, o = h.getDerivedFromVars(h.json.delimiter_style))), t.$$.dirty & /*$jsonDelimiterStyle, orientation*/
    2112 && e(6, p = ca(c == null ? void 0 : c.orientation, p)), t.$$.dirty & /*$jsonDelimiterStyle*/
    2048 && e(4, i = !(c != null && c.color && (c.color === "transparent" || c.color.length === 9 && c.color.indexOf("#00") === 0))), t.$$.dirty & /*$jsonDelimiterStyle, background*/
    2176 && e(7, k = _r(c == null ? void 0 : c.color, 1, k)), t.$$.dirty & /*orientation*/
    64 && e(9, s = p === "horizontal" ? "100%" : ce(1)), t.$$.dirty & /*orientation*/
    64 && e(8, a = p === "horizontal" ? ce(1) : "100%"), t.$$.dirty & /*background, width, height*/
    896 && e(3, l = { background: k, width: s, height: a }), t.$$.dirty & /*orientation*/
    64 && e(2, u = { orientation: p });
  }, [
    h,
    m,
    u,
    l,
    i,
    o,
    p,
    k,
    a,
    s,
    n,
    c
  ];
}
class Zm extends Lr {
  constructor(r) {
    super(), Or(this, r, Xm, Km, Ar, { componentContext: 0, layoutParams: 1 });
  }
}
const Qm = "appkit-image", xm = "appkit-image__image", $m = "appkit-image_error", e1 = "appkit-image_aspect", t1 = "appkit-image_loaded", Hl = {
  image: Qm,
  "image_is-width-content": "appkit-image_is-width-content",
  "image_is-height-content": "appkit-image_is-height-content",
  image__image: xm,
  image_error: $m,
  "image_is-rtl-mirror": "appkit-image_is-rtl-mirror",
  image_aspect: e1,
  "image_aspect-content": "appkit-image_aspect-content",
  image_loaded: t1,
  "divkit-image-appearance": "appkit-divkit-image-appearance",
  "image_before-appearance": "appkit-image_before-appearance"
};
function r1(t, r, e) {
  const n = t.content_alignment_horizontal, o = t.content_alignment_vertical;
  return n && n !== "left" && n !== "center" && n !== "right" && n !== "start" && n !== "end" || o && o !== "top" && o !== "center" && o !== "bottom" ? e : Sd({
    content_alignment_horizontal: n,
    content_alignment_vertical: o
  }, r);
}
function Md(t) {
  return t.startsWith("data:") ? zl(t) : `data:image/jpg;base64,${zl(t)}`;
}
function n1(t, r, e) {
  let { componentContext: n } = r;
  const o = Dr(Yr);
  let i = null;
  function s() {
    i && i.update(n);
  }
  return to(() => {
    n.fakeElement || (i = Vd(null, o, n));
  }), Qs(s), an(() => {
    i && i.destroy();
  }), t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext);
  }, [n];
}
class Nn extends Lr {
  constructor(r) {
    super(), Or(this, r, n1, null, Ar, { componentContext: 0 });
  }
}
function o1(t) {
  let r, e;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function i1(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: ht(
        "image",
        Hl,
        /*mods*/
        t[12]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      customDescription: !0,
      style: { "aspect-ratio": (
        /*aspectRatio*/
        t[4]
      ) },
      heightByAspect: (
        /*aspectRatio*/
        t[4] !== void 0
      ),
      $$slots: {
        default: [
          s1,
          ({ widthMin: n, widthMax: o, heightMin: i, heightMax: s }) => ({
            75: n,
            76: o,
            77: i,
            78: s
          }),
          ({ widthMin: n, widthMax: o, heightMin: i, heightMax: s }) => [
            0,
            0,
            (n ? 8192 : 0) | (o ? 16384 : 0) | (i ? 32768 : 0) | (s ? 65536 : 0)
          ]
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = ht(
        "image",
        Hl,
        /*mods*/
        n[12]
      )), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*aspectRatio*/
      16 && (i.style = { "aspect-ratio": (
        /*aspectRatio*/
        n[4]
      ) }), o[0] & /*aspectRatio*/
      16 && (i.heightByAspect = /*aspectRatio*/
      n[4] !== void 0), o[0] & /*svgFilterId, state, imageUrl, highPrority, style, isWidthContent, isHeightContent, alt, img*/
      11756 | o[1] & /*$jsonPreloadRequired*/
      1 | o[2] & /*$$scope, widthMin, widthMax, heightMin, heightMax*/
      253952 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Wu(t) {
  let r, e, n, o, i, s, a, l;
  return {
    c() {
      r = Se("img"), g(r, "class", Hl.image__image), Zn(r.src, e = /*state*/
      t[2] === Wi ? Wl : (
        /*imageUrl*/
        t[3]
      )) || g(r, "src", e), g(r, "loading", n = /*$jsonPreloadRequired*/
      t[31] || /*highPrority*/
      t[10] ? "eager" : "lazy"), g(r, "decoding", o = /*highPrority*/
      t[10] ? "sync" : "async"), g(r, "style", i = $t({
        .../*style*/
        t[11],
        "min-width": (
          /*isWidthContent*/
          t[7] ? (
            /*widthMin*/
            t[75]
          ) : void 0
        ),
        "max-width": (
          /*isWidthContent*/
          t[7] ? (
            /*widthMax*/
            t[76]
          ) : void 0
        ),
        "min-height": (
          /*isHeightContent*/
          t[6] ? (
            /*heightMin*/
            t[77]
          ) : void 0
        ),
        "max-height": (
          /*isHeightContent*/
          t[6] ? (
            /*heightMax*/
            t[78]
          ) : void 0
        )
      })), g(
        r,
        "alt",
        /*alt*/
        t[13]
      ), g(r, "aria-hidden", s = /*alt*/
      t[13] ? null : "true");
    },
    m(u, c) {
      q(u, r, c), t[70](r), a || (l = [
        He(
          r,
          "load",
          /*onLoad*/
          t[33]
        ),
        He(
          r,
          "error",
          /*onError*/
          t[34]
        )
      ], a = !0);
    },
    p(u, c) {
      c[0] & /*state, imageUrl*/
      12 && !Zn(r.src, e = /*state*/
      u[2] === Wi ? Wl : (
        /*imageUrl*/
        u[3]
      )) && g(r, "src", e), c[0] & /*highPrority*/
      1024 | c[1] & /*$jsonPreloadRequired*/
      1 && n !== (n = /*$jsonPreloadRequired*/
      u[31] || /*highPrority*/
      u[10] ? "eager" : "lazy") && g(r, "loading", n), c[0] & /*highPrority*/
      1024 && o !== (o = /*highPrority*/
      u[10] ? "sync" : "async") && g(r, "decoding", o), c[0] & /*style, isWidthContent, isHeightContent*/
      2240 | c[2] & /*widthMin, widthMax, heightMin, heightMax*/
      122880 && i !== (i = $t({
        .../*style*/
        u[11],
        "min-width": (
          /*isWidthContent*/
          u[7] ? (
            /*widthMin*/
            u[75]
          ) : void 0
        ),
        "max-width": (
          /*isWidthContent*/
          u[7] ? (
            /*widthMax*/
            u[76]
          ) : void 0
        ),
        "min-height": (
          /*isHeightContent*/
          u[6] ? (
            /*heightMin*/
            u[77]
          ) : void 0
        ),
        "max-height": (
          /*isHeightContent*/
          u[6] ? (
            /*heightMax*/
            u[78]
          ) : void 0
        )
      })) && g(r, "style", i), c[0] & /*alt*/
      8192 && g(
        r,
        "alt",
        /*alt*/
        u[13]
      ), c[0] & /*alt*/
      8192 && s !== (s = /*alt*/
      u[13] ? null : "true") && g(r, "aria-hidden", s);
    },
    d(u) {
      u && J(r), t[70](null), a = !1, Hr(l);
    }
  };
}
function s1(t) {
  let r = (
    /*svgFilterId*/
    t[5]
  ), e, n = Wu(t);
  return {
    c() {
      n.c(), e = Kt();
    },
    m(o, i) {
      n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      i[0] & /*svgFilterId*/
      32 && Ar(r, r = /*svgFilterId*/
      o[5]) ? (n.d(1), n = Wu(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && J(e), n.d(o);
    }
  };
}
function l1(t) {
  let r, e, n, o;
  const i = [i1, o1], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[9] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (or(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ir()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (B(e), o = !0);
    },
    o(l) {
      Q(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
const Wl = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", a1 = "empty://", u1 = "rgba(0,0,0,0.08)", ei = 0, yl = 1, Wi = 2, Uu = /\.gif($|\?)/i, c1 = "data:image/gif", Gu = 'A Gif image was used for the "Image" component. The animation will be played on the web platform, but it does not match the behavior of other platforms.';
function f1(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, G, L, ee, fe, P, Z, se, j, z = A, N = () => (z(), z = F(O, (nt) => e(53, j = nt)), O), W, ie, de = A, je = () => (de(), de = F(w, (nt) => e(55, ie = nt)), w), Ee, pe = A, ze = () => (pe(), pe = F(k, (nt) => e(56, Ee = nt)), k), be, Fe = A, Ge = () => (Fe(), Fe = F(p, (nt) => e(57, be = nt)), p), Ze, ke = A, et = () => (ke(), ke = F(_, (nt) => e(58, Ze = nt)), _), _e, Ie = A, ue = () => (Ie(), Ie = F(m, (nt) => e(59, _e = nt)), m), oe, ye = A, $ = () => (ye(), ye = F(h, (nt) => e(60, oe = nt)), h), Ae, xe = A, qe = () => (xe(), xe = F(f, (nt) => e(61, Ae = nt)), f), te, Xe = A, Le = () => (Xe(), Xe = F(c, (nt) => e(62, te = nt)), c), tt, dt = A, lt = () => (dt(), dt = F(u, (nt) => e(63, tt = nt)), u), wt, ot = A, At = () => (ot(), ot = F(l, (nt) => e(64, wt = nt)), l), it, me = A, ne = () => (me(), me = F(a, (nt) => e(65, it = nt)), a), at, Ve = A, D = () => (Ve(), Ve = F(s, (nt) => e(66, at = nt)), s), jt, gt = A, kt = () => (gt(), gt = F(L, (nt) => e(67, jt = nt)), L), St, rt = A, Y = () => (rt(), rt = F(o, (nt) => e(68, St = nt)), o), Vt, Dt = A, Gt = () => (Dt(), Dt = F(i, (nt) => e(69, Vt = nt)), i), Jt, ve = A, We = () => (ve(), ve = F(G, (nt) => e(31, Jt = nt)), G);
  t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => Fe()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => Ie()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Xe()), t.$$.on_destroy.push(() => dt()), t.$$.on_destroy.push(() => ot()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => Ve()), t.$$.on_destroy.push(() => gt()), t.$$.on_destroy.push(() => rt()), t.$$.on_destroy.push(() => Dt()), t.$$.on_destroy.push(() => ve());
  let { componentContext: ft } = r, { layoutParams: Me = void 0 } = r;
  const T = Dr(Yr), Oe = T.direction;
  bn(t, Oe, (nt) => e(54, W = nt));
  let xt, ae = ei, mt = !1, Wt = u1, Ft = !1, ar, Te = "", bt = "none", er = "50% 50%", Qt = !1, Xt = "center", ur, jr, Yt = "source_in", It = "", Tt = "", ut = 0, qt = 0, sr = 0, dr = "", mr = "", pr = !1, Fr = !1, zr = !1;
  function gr() {
    e(4, ur = void 0), e(40, Qt = !1), e(38, bt = "none"), e(39, er = "50% 50%"), e(43, Yt = "source_in"), e(51, Fr = !1), e(10, zr = !1);
  }
  function $e(nt) {
    e(2, ae = ei);
  }
  function ct(nt) {
    e(39, er = r1(nt, W, er));
  }
  function Mt() {
    ae === ei && e(2, ae = yl);
  }
  function br() {
    ae === ei && e(2, ae = Wi);
  }
  an(() => {
    T.removeSvgFilter(jr, Yt);
  });
  function wr(nt) {
    Ir[nt ? "unshift" : "push"](() => {
      xt = nt, e(8, xt);
    });
  }
  return t.$$set = (nt) => {
    "componentContext" in nt && e(0, ft = nt.componentContext), "layoutParams" in nt && e(1, Me = nt.layoutParams);
  }, t.$$.update = () => {
    var nt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(52, n = ft.origJson), t.$$.dirty[1] & /*origJson*/
    2097152 && n && gr(), t.$$.dirty[0] & /*componentContext*/
    1 && Y(e(30, o = ft.getDerivedFromVars(ft.json.image_url))), t.$$.dirty[0] & /*componentContext*/
    1 && Gt(e(29, i = ft.getDerivedFromVars(ft.json.gif_url))), t.$$.dirty[0] & /*componentContext*/
    1 && D(e(28, s = ft.getDerivedFromVars(ft.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(27, a = ft.getDerivedFromVars(ft.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && At(e(26, l = ft.getDerivedFromVars(ft.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && lt(e(25, u = ft.getDerivedFromVars(ft.json.preview_url))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(24, c = ft.getDerivedFromVars(ft.json.placeholder_color))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(23, f = ft.getDerivedFromVars(ft.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(22, _ = ft.getDerivedFromVars({
      content_alignment_horizontal: ft.json.content_alignment_horizontal,
      content_alignment_vertical: ft.json.content_alignment_vertical
    }))), t.$$.dirty[0] & /*componentContext*/
    1 && $(e(21, h = ft.getDerivedFromVars(ft.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(20, m = ft.getDerivedFromVars(ft.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(19, p = ft.getDerivedFromVars(ft.json.tint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ze(e(18, k = ft.getDerivedFromVars(ft.json.tint_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && je(e(17, w = ft.getDerivedFromVars(ft.json.appearance_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(16, O = ft.getDerivedFromVars(ft.json.filters))), t.$$.dirty[0] & /*componentContext*/
    1 && We(e(15, G = ft.getDerivedFromVars(ft.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && kt(e(14, L = ft.getDerivedFromVars(ft.json.high_priority_preview_show))), t.$$.dirty[0] & /*componentContext, imageUrl*/
    9 | t.$$.dirty[1] & /*isEmpty*/
    16 | t.$$.dirty[2] & /*$jsonGifUrl, $jsonImageUrl*/
    192) {
      const le = ft.json.type === "gif";
      let Ct = le ? Vt : St;
      e(35, mt = Ct === a1), mt && (Ct = Wl), e(3, ar = Ct), !le && ar && Uu.test(ar) && ft.logError(K(new Error(Gu), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*imageUrl*/
    8 && $e(), t.$$.dirty[1] & /*highPriorityPreview*/
    1048576 | t.$$.dirty[2] & /*$jsonHighPriorityPreviewShow*/
    32 && e(51, Fr = _n(jt, Fr)), t.$$.dirty[0] & /*imageUrl, componentContext*/
    9 && (ar ? e(9, Ft = !1) : (e(9, Ft = !0), ft.logError(K(new Error(`Missing "${ft.json.type === "gif" ? "gif_url" : "image_url"}" for "${ft.json.type}"`))))), t.$$.dirty[2] & /*$jsonWidth*/
    16 && e(7, ee = (at == null ? void 0 : at.type) === "wrap_content"), t.$$.dirty[2] & /*$jsonHeight*/
    8 && e(6, fe = (it == null ? void 0 : it.type) === "wrap_content"), t.$$.dirty[0] & /*componentContext, state*/
    5 | t.$$.dirty[1] & /*isEmpty, highPriorityPreview*/
    1048592 | t.$$.dirty[2] & /*$jsonPreview, $jsonPreviewUrl*/
    6) {
      const le = ft.json.type === "gif", Ct = wt, rr = tt;
      (ae === ei || ae === Wi || mt) && (Ct || rr) ? (e(37, Te = `url("${rr || Md(Ct || "")}")`), e(10, zr = Fr)) : (e(37, Te = ""), e(10, zr = !1)), !le && (rr && Uu.test(rr) || Ct && Ct.startsWith(c1)) && ft.logError(K(new Error(Gu), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*state*/
    4 | t.$$.dirty[1] & /*isEmpty, placeholderColor*/
    48 | t.$$.dirty[2] & /*$jsonPlaceholderColor*/
    1 && (ae === ei || ae === Wi || mt ? e(36, Wt = _r(te, 1, Wt)) : e(36, Wt = "")), t.$$.dirty[1] & /*$jsonScale, scale*/
    1073741952 && e(38, bt = Ad(Ae) || bt), t.$$.dirty[1] & /*$jsonPosition*/
    134217728 && ct(Ze), t.$$.dirty[1] & /*$jsonA11y*/
    536870912 && e(13, P = (oe == null ? void 0 : oe.description) || ""), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAspect, aspectContent, $jsonPosition*/
    402653696) {
      e(41, Xt = "center");
      const le = _e == null ? void 0 : _e.ratio;
      le && Jn(le) ? (e(4, ur = le), e(40, Qt = ((nt = ft.json.width) == null ? void 0 : nt.type) === "wrap_content"), Qt && (Ze.content_alignment_vertical === "top" ? e(41, Xt = "top") : Ze.content_alignment_vertical === "bottom" && e(41, Xt = "bottom"))) : e(4, ur = void 0);
    }
    if (t.$$.dirty[1] & /*$jsonTintColor, $jsonTintMode, tintMode, tintColor*/
    100669440) {
      const le = be, Ct = le ? _r(le) : void 0, rr = Dd(Ee, Yt);
      (Ct !== jr || rr !== Yt) && (T.removeSvgFilter(jr, Yt), e(5, It = Ct ? T.addSvgFilter(Ct, rr) : ""), e(42, jr = Ct), e(43, Yt = rr));
    }
    if (t.$$.dirty[1] & /*$jsonAppearanceAnimation*/
    16777216 && ie && ie.type === "fade") {
      const le = ie;
      e(44, Tt = Fd(le.interpolator, "ease_in_out").replace(/_/g, "-")), e(47, sr = en(le.duration, 300)), e(46, qt = en(le.start_delay, 0)), e(45, ut = en(le.alpha, 0));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonFilters, $direction*/
    12582912) {
      let le = "", Ct = "";
      Array.isArray(j) && j.length && (le = Id(j, ft.logError)), le && (Ct = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"), e(48, dr = le), e(49, mr = Ct), e(50, pr = W === "rtl" && Array.isArray(j) && j.some((rr) => rr.type === "rtl_mirror"));
    }
    t.$$.dirty[0] & /*aspectRatio, isWidthContent, isHeightContent, state*/
    212 | t.$$.dirty[1] & /*aspectContent, aspectContentVAlign, animationInterpolator, isRTLMirror*/
    534016 && e(12, Z = {
      aspect: ur !== void 0,
      "aspect-content": Qt,
      "aspect-valign": Xt !== "center" ? Xt : void 0,
      "is-width-content": ee,
      "is-height-content": fe,
      loaded: ae === yl,
      "before-appearance": !!Tt && ae === ei,
      "is-rtl-mirror": pr
    }), t.$$.dirty[0] & /*aspectRatio, state, svgFilterId*/
    52 | t.$$.dirty[1] & /*backgroundImage, placeholderColor, scale, filterClipPath, position, filter, animationInterpolator, animationFadeStart, animationDelay, animationDuration*/
    516576 && e(11, se = {
      // Image preview shows, if loading of original image is failed
      "background-image": Te,
      "background-color": Te ? void 0 : Wt,
      "background-size": Xh(bt),
      "clip-path": mr || void 0,
      "object-fit": bt,
      "object-position": er,
      "aspect-ratio": ur,
      filter: [
        ae === yl && It ? `url(#${It})` : "",
        dr
      ].filter(Boolean).join(" "),
      "--divkit-appearance-interpolator": Tt || void 0,
      "--divkit-appearance-fade-start": Tt ? ut : void 0,
      "--divkit-appearance-delay": Tt ? `${qt}ms` : void 0,
      "--divkit-appearance-duration": Tt ? `${sr}ms` : void 0
    });
  }, [
    ft,
    Me,
    ae,
    ar,
    ur,
    It,
    fe,
    ee,
    xt,
    Ft,
    zr,
    se,
    Z,
    P,
    L,
    G,
    O,
    w,
    k,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    Jt,
    Oe,
    Mt,
    br,
    mt,
    Wt,
    Te,
    bt,
    er,
    Qt,
    Xt,
    jr,
    Yt,
    Tt,
    ut,
    qt,
    sr,
    dr,
    mr,
    pr,
    Fr,
    n,
    j,
    W,
    ie,
    Ee,
    be,
    Ze,
    _e,
    oe,
    Ae,
    te,
    tt,
    wt,
    it,
    at,
    jt,
    St,
    Vt,
    wr
  ];
}
class Ju extends Lr {
  constructor(r) {
    super(), Or(this, r, f1, l1, Ar, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const d1 = "appkit-grid", _1 = "appkit-grid_halign_start", p1 = "appkit-grid_halign_center", g1 = "appkit-grid_halign_end", h1 = "appkit-grid_valign_start", m1 = "appkit-grid_valign_center", b1 = "appkit-grid_valign_end", qu = {
  grid: d1,
  grid_halign_start: _1,
  grid_halign_center: p1,
  grid_halign_end: g1,
  grid_valign_start: h1,
  grid_valign_center: m1,
  grid_valign_end: b1
};
function Yu(t) {
  return t > 0 && t < 1;
}
function Ku(t) {
  return String(Math.ceil(t * 1e3) / 1e3);
}
function Xu(t, r, e, n) {
  if (t.some(Yu)) {
    const l = Math.max(...t.filter(Yu).map((u) => 1 / u));
    t = t.map((u) => u * l);
  }
  const o = t.every(Boolean);
  let i = 0, s = 0;
  const a = [];
  if (o) {
    s = t.reduce((l, u) => l + u, 0);
    for (let l = 0; l < n; ++l) {
      if (!r[l])
        continue;
      const u = r[l] / t[l] * s;
      u > i && (i = u);
    }
  }
  for (let l = 0; l < n; ++l)
    i && !e[l] ? a[l] = `minmax(${ce(i * t[l] / s)},${Ku(t[l])}fr)` : o || !e[l] && t[l] ? a[l] = `${Ku(t[l])}fr` : a[l] = "auto";
  return a.join(" ");
}
function Zu(t, r, e) {
  const n = t.slice();
  return n[33] = r[e], n;
}
function y1(t) {
  let r, e;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function w1(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: ht(
        "grid",
        qu,
        /*mods*/
        t[7]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      style: (
        /*style*/
        t[6]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      parentOf: (
        /*items*/
        t[2]
      ),
      replaceItems: (
        /*replaceItems*/
        t[12]
      ),
      $$slots: { default: [k1] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = ht(
        "grid",
        qu,
        /*mods*/
        n[7]
      )), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*style*/
      64 && (i.style = /*style*/
      n[6]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*items*/
      4 && (i.parentOf = /*items*/
      n[2]), o[0] & /*resultItems*/
      32 | o[1] & /*$$scope*/
      32 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Qu(t) {
  let r, e;
  return r = new qn({
    props: {
      componentContext: (
        /*item*/
        t[33].componentContext
      ),
      layoutParams: (
        /*item*/
        t[33].layoutParams
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*resultItems*/
      32 && (i.componentContext = /*item*/
      n[33].componentContext), o[0] & /*resultItems*/
      32 && (i.layoutParams = /*item*/
      n[33].layoutParams), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function k1(t) {
  let r, e, n = nr(
    /*resultItems*/
    t[5]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Qu(Zu(t, n, s));
  const i = (s) => Q(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = Kt();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      q(s, r, a), e = !0;
    },
    p(s, a) {
      if (a[0] & /*resultItems*/
      32) {
        n = nr(
          /*resultItems*/
          s[5]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = Zu(s, n, l);
          o[l] ? (o[l].p(u, a), B(o[l], 1)) : (o[l] = Qu(u), o[l].c(), B(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (or(), l = n.length; l < o.length; l += 1)
          i(l);
        ir();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          B(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        Q(o[a]);
      e = !1;
    },
    d(s) {
      s && J(r), nn(o, s);
    }
  };
}
function v1(t) {
  let r, e, n, o;
  const i = [w1, y1], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (or(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ir()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (B(e), o = !0);
    },
    o(l) {
      Q(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function j1(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _ = A, h = () => (_(), _ = F(a, (ue) => e(27, f = ue)), a), m, p = A, k = () => (p(), p = F(s, (ue) => e(28, m = ue)), s), w, O = A, G = () => (O(), O = F(W, (ue) => e(29, w = ue)), W), L, ee = A, fe = () => (ee(), ee = F(i, (ue) => e(30, L = ue)), i);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => ee());
  let { componentContext: P } = r, { layoutParams: Z = void 0 } = r;
  const j = Dr(Yr).direction;
  bn(t, j, (ue) => e(26, c = ue));
  let z = !1, N = 0, W, ie, de = [], je = [], Ee = [], pe = [], ze = [], be = [], Fe = 0, Ge = "start", Ze = "start", ke = [], et;
  function _e() {
    e(3, z = !1), e(13, N = 0), e(21, Ge = "start"), e(22, Ze = "start");
  }
  function Ie(ue) {
    e(0, P = e(23, et = {
      ...P,
      json: {
        ...P.json,
        items: ue.filter(To)
      }
    }));
  }
  return an(() => {
    ke.forEach((ue) => {
      ue.destroy();
    });
  }), t.$$set = (ue) => {
    "componentContext" in ue && e(0, P = ue.componentContext), "layoutParams" in ue && e(1, Z = ue.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(25, n = P.origJson), t.$$.dirty[0] & /*origJson*/
    33554432 && n && _e(), t.$$.dirty[0] & /*componentContext*/
    1 && e(24, o = Array.isArray(P.json.items) && P.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(10, i = P.getDerivedFromVars(P.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && k(e(9, s = P.getDerivedFromVars(P.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && h(e(8, a = P.getDerivedFromVars(P.json.content_alignment_horizontal))), t.$$.dirty[0] & /*$jsonColumnCount, columnCount, componentContext*/
    1073750017 && (e(13, N = Gn(L, N)), N < 1 ? (e(3, z = !0), P.logError(K(new Error("Incorrect column_count for grid")))) : e(3, z = !1)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonItems*/
    25165829) {
      const ue = new Set(ke), oe = /* @__PURE__ */ new Map();
      et === P && ke.forEach((ye) => {
        oe.set(ye.json, ye);
      }), e(2, ke = o.map((ye, $) => {
        const Ae = oe.get(ye);
        return Ae ? (ue.delete(Ae), Ae) : P.produceChildContext(ye, { path: $ });
      }));
      for (const ye of ue)
        ye.destroy();
      e(23, et = P);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    5) {
      let ue = [];
      ke.forEach((oe) => {
        ue.push(P.getDerivedFromVars({
          rowSpan: oe.json.row_span,
          columnSpan: oe.json.column_span,
          width: oe.json.width,
          height: oe.json.height
        }));
      }), G(e(4, W = Ti(ue, (oe) => [...oe])));
    }
    if (t.$$.dirty[0] & /*items, $childStore, columnCount, columnsWeight, rowsWeight, columnsMinWidth, rowsMinHeight*/
    537124868) {
      const ue = {};
      let oe = 0, ye = 0;
      e(14, de = []), e(15, je = []), e(16, Ee = []), e(17, pe = []), e(18, ze = []), e(19, be = []);
      let $ = 0;
      e(5, ie = ke.map((Ae, xe) => {
        var ot, At, it, me;
        const qe = w[xe], te = Math.min(N, Number(qe.columnSpan) || 1), Xe = Number(qe.rowSpan) || 1, Le = ((ot = qe.width) == null ? void 0 : ot.type) === "match_parent" ? Number(qe.width.weight || 1) / te : 0, tt = ((At = qe.height) == null ? void 0 : At.type) === "match_parent" ? Number(qe.height.weight || 1) / Xe : 0, dt = ((it = qe.width) == null ? void 0 : it.type) === "fixed" && qe.width.value ? Number(qe.width.value) / te : 0, lt = ((me = qe.height) == null ? void 0 : me.type) === "fixed" && qe.height.value ? Number(qe.height.value) / Xe : 0;
        for (; ; ) {
          let ne = !0;
          e: for (let at = oe; at < oe + te; ++at)
            for (let Ve = ye; Ve < ye + Xe; ++Ve)
              if (ue[at + "_" + Ve]) {
                ne = !1;
                break e;
              }
          if (ne)
            break;
          ++oe, oe > N - te && (oe = 0, ++ye);
        }
        const wt = { x: oe, y: ye, colSpan: te, rowSpan: Xe };
        for (let ne = oe; ne < oe + te; ++ne)
          for (let at = ye; at < ye + Xe; ++at)
            ue[ne + "_" + at] = !0, (!de[ne] || de[ne] < Le) && e(14, de[ne] = Le, de), (!je[at] || je[at] < tt) && e(15, je[at] = tt, je), te === 1 && (!Ee[ne] || Ee[ne] < dt) && e(16, Ee[ne] = dt, Ee), Xe === 1 && (!pe[at] || pe[at] < lt) && e(17, pe[at] = lt, pe), te === 1 && dt && e(18, ze[ne] = dt, ze), Xe === 1 && lt && e(19, be[ne] = lt, be);
        return $ = Math.max($, ye + Xe), {
          componentContext: Ae,
          layoutParams: { gridArea: wt }
        };
      })), e(20, Fe = Math.max(ye + 1, $));
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    270532608 && e(21, Ge = ol(m, Ge)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    205520896 && e(22, Ze = nl(f, c, Ze)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    6291456 && e(7, l = {
      valign: Ge,
      halign: Ze
    }), t.$$.dirty[0] & /*columnsWeight, columnsMinWidth, columnsWidth, columnCount, rowsWeight, rowsMinHeight, rowsHeight, rowCount*/
    2088960 && e(6, u = {
      "grid-template-columns": Xu(de, Ee, ze, N),
      "grid-template-rows": Xu(je, pe, be, Fe)
    });
  }, [
    P,
    Z,
    ke,
    z,
    W,
    ie,
    u,
    l,
    a,
    s,
    i,
    j,
    Ie,
    N,
    de,
    je,
    Ee,
    pe,
    ze,
    be,
    Fe,
    Ge,
    Ze,
    et,
    o,
    n,
    c,
    f,
    m,
    w,
    L
  ];
}
class C1 extends Lr {
  constructor(r) {
    super(), Or(this, r, j1, v1, Ar, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const E1 = "appkit-outer_width_content", A1 = "appkit-outer_height_content", S1 = "appkit-gallery", V1 = "appkit-gallery__scroller", F1 = "appkit-gallery_scrollbar_none", I1 = "appkit-gallery_orientation_horizontal", D1 = "appkit-gallery_orientation_vertical", T1 = "appkit-gallery__items", M1 = "appkit-gallery__arrow", P1 = "appkit-gallery__gap", ao = {
  outer_width_content: E1,
  outer_height_content: A1,
  gallery: S1,
  gallery__scroller: V1,
  gallery_scrollbar_none: F1,
  gallery_orientation_horizontal: I1,
  gallery_orientation_vertical: D1,
  "gallery_scroll-snap": "appkit-gallery_scroll-snap",
  "gallery__items-grid": "appkit-gallery__items-grid",
  gallery__items: T1,
  gallery__arrow: M1,
  "gallery__arrow-icon-path": "appkit-gallery__arrow-icon-path",
  gallery__gap: P1
}, N1 = "appkit-arrow", z1 = "appkit-arrow__icon", R1 = "appkit-arrow_left", O1 = "appkit-arrow_right", fo = {
  arrow: N1,
  arrow__icon: z1,
  arrow_left: R1,
  arrow_right: O1
};
function L1(t, r) {
  return t === "start" || t === "center" || t === "end" ? t : r;
}
function B1(t) {
  const r = [];
  let e = t[0], n = 1;
  for (let o = 1; o <= t.length; o++)
    t[o] !== e ? (r.push(n > 1 ? `repeat(${n}, ${e})` : e), e = t[o], n = 1) : n++;
  return r.join(" ");
}
function jo(t, r) {
  let e = t % r;
  return e < 0 && (e += r), e;
}
const { Boolean: Pd, window: H1 } = Io;
function xu(t, r, e) {
  const n = t.slice();
  return n[86] = r[e], n[87] = r, n[88] = e, n;
}
function $u(t, r, e) {
  const n = t.slice();
  return n[89] = r[e], n;
}
function ec(t) {
  let r;
  return {
    c() {
      r = Se("div"), g(r, "class", ao.gallery__gap), M(
        r,
        "width",
        /*orientation*/
        t[4] === "horizontal" ? (
          /*gridGap*/
          t[12]
        ) : void 0
      ), M(
        r,
        "height",
        /*orientation*/
        t[4] !== "horizontal" ? (
          /*gridGap*/
          t[12]
        ) : void 0
      );
    },
    m(e, n) {
      q(e, r, n);
    },
    p(e, n) {
      n[0] & /*orientation, gridGap*/
      4112 && M(
        r,
        "width",
        /*orientation*/
        e[4] === "horizontal" ? (
          /*gridGap*/
          e[12]
        ) : void 0
      ), n[0] & /*orientation, gridGap*/
      4112 && M(
        r,
        "height",
        /*orientation*/
        e[4] !== "horizontal" ? (
          /*gridGap*/
          e[12]
        ) : void 0
      );
    },
    d(e) {
      e && J(r);
    }
  };
}
function tc(t) {
  let r, e, n, o = (
    /*item*/
    t[89].hasGapBefore && ec(t)
  );
  return e = new qn({
    props: {
      componentContext: (
        /*item*/
        t[89].componentContext
      ),
      layoutParams: (
        /*childLayoutParams*/
        t[6]
      )
    }
  }), {
    c() {
      o && o.c(), r = lr(), Bt(e.$$.fragment);
    },
    m(i, s) {
      o && o.m(i, s), q(i, r, s), zt(e, i, s), n = !0;
    },
    p(i, s) {
      /*item*/
      i[89].hasGapBefore ? o ? o.p(i, s) : (o = ec(i), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
      const a = {};
      s[0] & /*itemsGrid*/
      262144 && (a.componentContext = /*item*/
      i[89].componentContext), s[0] & /*childLayoutParams*/
      64 && (a.layoutParams = /*childLayoutParams*/
      i[6]), e.$set(a);
    },
    i(i) {
      n || (B(e.$$.fragment, i), n = !0);
    },
    o(i) {
      Q(e.$$.fragment, i), n = !1;
    },
    d(i) {
      i && J(r), o && o.d(i), Rt(e, i);
    }
  };
}
function rc(t) {
  let r, e, n, o, i, s, a = (
    /*rowIndex*/
    t[88]
  ), l, u = nr(
    /*itemsRow*/
    t[86]
  ), c = [];
  for (let m = 0; m < u.length; m += 1)
    c[m] = tc($u(t, u, m));
  const f = (m) => Q(c[m], 1, 1, () => {
    c[m] = null;
  }), _ = () => (
    /*div1_binding*/
    t[71](r, a)
  ), h = () => (
    /*div1_binding*/
    t[71](null, a)
  );
  return {
    c() {
      r = Se("div");
      for (let m = 0; m < c.length; m += 1)
        c[m].c();
      e = lr(), n = Se("div"), i = lr(), g(n, "class", ao.gallery__gap), g(n, "style", o = $t(
        /*lastPaddingSize*/
        t[13]
      )), g(r, "class", ao.gallery__items), g(r, "style", s = $t(
        /*columnStyle*/
        t[16]
      ));
    },
    m(m, p) {
      q(m, r, p);
      for (let k = 0; k < c.length; k += 1)
        c[k] && c[k].m(r, null);
      pt(r, e), pt(r, n), pt(r, i), _(), l = !0;
    },
    p(m, p) {
      if (t = m, p[0] & /*itemsGrid, childLayoutParams, orientation, gridGap*/
      266320) {
        u = nr(
          /*itemsRow*/
          t[86]
        );
        let k;
        for (k = 0; k < u.length; k += 1) {
          const w = $u(t, u, k);
          c[k] ? (c[k].p(w, p), B(c[k], 1)) : (c[k] = tc(w), c[k].c(), B(c[k], 1), c[k].m(r, e));
        }
        for (or(), k = u.length; k < c.length; k += 1)
          f(k);
        ir();
      }
      (!l || p[0] & /*lastPaddingSize*/
      8192 && o !== (o = $t(
        /*lastPaddingSize*/
        t[13]
      ))) && g(n, "style", o), (!l || p[0] & /*columnStyle*/
      65536 && s !== (s = $t(
        /*columnStyle*/
        t[16]
      ))) && g(r, "style", s), a !== /*rowIndex*/
      t[88] && (h(), a = /*rowIndex*/
      t[88], _());
    },
    i(m) {
      if (!l) {
        for (let p = 0; p < u.length; p += 1)
          B(c[p]);
        l = !0;
      }
    },
    o(m) {
      c = c.filter(Pd);
      for (let p = 0; p < c.length; p += 1)
        Q(c[p]);
      l = !1;
    },
    d(m) {
      m && J(r), nn(c, m), h();
    }
  };
}
function nc(t) {
  let r, e, n = (
    /*hasScrollLeft*/
    t[10] && /*shouldCheckArrows*/
    t[8] && oc(t)
  ), o = (
    /*hasScrollRight*/
    t[11] && /*shouldCheckArrows*/
    t[8] && ic(t)
  );
  return {
    c() {
      n && n.c(), r = lr(), o && o.c(), e = Kt();
    },
    m(i, s) {
      n && n.m(i, s), q(i, r, s), o && o.m(i, s), q(i, e, s);
    },
    p(i, s) {
      /*hasScrollLeft*/
      i[10] && /*shouldCheckArrows*/
      i[8] ? n ? n.p(i, s) : (n = oc(i), n.c(), n.m(r.parentNode, r)) : n && (n.d(1), n = null), /*hasScrollRight*/
      i[11] && /*shouldCheckArrows*/
      i[8] ? o ? o.p(i, s) : (o = ic(i), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null);
    },
    d(i) {
      i && (J(r), J(e)), n && n.d(i), o && o.d(i);
    }
  };
}
function oc(t) {
  let r, e, n, o = !/*leftClass*/
  t[32] && W1();
  return {
    c() {
      r = Se("div"), o && o.c(), g(
        r,
        "class",
        /*leftClass*/
        t[32] || `${ao.gallery__arrow} ${fo.arrow} ${fo.arrow_left}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = He(
        r,
        "click",
        /*click_handler*/
        t[74]
      ), e = !0);
    },
    p: A,
    d(i) {
      i && J(r), o && o.d(), e = !1, n();
    }
  };
}
function W1(t) {
  let r, e;
  return {
    c() {
      r = $r("svg"), e = $r("path"), g(e, "class", ao["gallery__arrow-icon-path"]), g(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", fo.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), pt(r, e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function ic(t) {
  let r, e, n, o = !/*rightClass*/
  t[33] && U1();
  return {
    c() {
      r = Se("div"), o && o.c(), g(
        r,
        "class",
        /*rightClass*/
        t[33] || `${ao.gallery__arrow} ${fo.arrow} ${fo.arrow_right}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = He(
        r,
        "click",
        /*click_handler_1*/
        t[75]
      ), e = !0);
    },
    p: A,
    d(i) {
      i && J(r), o && o.d(), e = !1, n();
    }
  };
}
function U1(t) {
  let r, e;
  return {
    c() {
      r = $r("svg"), e = $r("path"), g(e, "class", ao["gallery__arrow-icon-path"]), g(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", fo.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), pt(r, e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function G1(t) {
  let r, e, n, o, i, s, a, l, u, c, f = nr(
    /*itemsGrid*/
    t[18]
  ), _ = [];
  for (let p = 0; p < f.length; p += 1)
    _[p] = rc(xu(t, f, p));
  const h = (p) => Q(_[p], 1, 1, () => {
    _[p] = null;
  });
  let m = (
    /*orientation*/
    t[4] === "horizontal" && nc(t)
  );
  return {
    c() {
      r = Se("div"), e = Se("div");
      for (let p = 0; p < _.length; p += 1)
        _[p].c();
      s = lr(), m && m.c(), a = Kt(), g(e, "class", ao["gallery__items-grid"]), g(e, "style", n = $t(
        /*gridStyle*/
        t[17]
      )), g(r, "class", o = ao.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? vr["root_restrict-scroll"] : "")), g(r, "style", i = $t(
        /*scrollerStyle*/
        t[5]
      ));
    },
    m(p, k) {
      q(p, r, k), pt(r, e);
      for (let w = 0; w < _.length; w += 1)
        _[w] && _[w].m(e, null);
      t[72](e), t[73](r), q(p, s, k), m && m.m(p, k), q(p, a, k), l = !0, u || (c = He(r, "scroll", function() {
        Pr(
          /*shouldCheckArrows*/
          t[8] ? (
            /*updateArrowsVisibility*/
            t[36]
          ) : null
        ) && /*shouldCheckArrows*/
        (t[8] ? (
          /*updateArrowsVisibility*/
          t[36]
        ) : null).apply(this, arguments);
      }), u = !0);
    },
    p(p, k) {
      if (t = p, k[0] & /*columnStyle, galleryItemsWrappers, lastPaddingSize, itemsGrid, childLayoutParams, orientation, gridGap*/
      340560) {
        f = nr(
          /*itemsGrid*/
          t[18]
        );
        let w;
        for (w = 0; w < f.length; w += 1) {
          const O = xu(t, f, w);
          _[w] ? (_[w].p(O, k), B(_[w], 1)) : (_[w] = rc(O), _[w].c(), B(_[w], 1), _[w].m(e, null));
        }
        for (or(), w = f.length; w < _.length; w += 1)
          h(w);
        ir();
      }
      (!l || k[0] & /*gridStyle*/
      131072 && n !== (n = $t(
        /*gridStyle*/
        t[17]
      ))) && g(e, "style", n), (!l || k[0] & /*$jsonRestrictParentScroll*/
      1073741824 && o !== (o = ao.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? vr["root_restrict-scroll"] : ""))) && g(r, "class", o), (!l || k[0] & /*scrollerStyle*/
      32 && i !== (i = $t(
        /*scrollerStyle*/
        t[5]
      ))) && g(r, "style", i), /*orientation*/
      t[4] === "horizontal" ? m ? m.p(t, k) : (m = nc(t), m.c(), m.m(a.parentNode, a)) : m && (m.d(1), m = null);
    },
    i(p) {
      if (!l) {
        for (let k = 0; k < f.length; k += 1)
          B(_[k]);
        l = !0;
      }
    },
    o(p) {
      _ = _.filter(Pd);
      for (let k = 0; k < _.length; k += 1)
        Q(_[k]);
      l = !1;
    },
    d(p) {
      p && (J(r), J(s), J(a)), nn(_, p), t[72](null), t[73](null), m && m.d(p), u = !1, c();
    }
  };
}
function J1(t) {
  let r, e, n, o;
  return r = new yn({
    props: {
      cls: ht(
        "gallery",
        ao,
        /*mods*/
        t[15]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      customPaddings: !0,
      customActions: "gallery",
      parentOf: (
        /*items*/
        t[7]
      ),
      replaceItems: (
        /*replaceItems*/
        t[34]
      ),
      $$slots: { default: [G1] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(i, s) {
      zt(r, i, s), e = !0, n || (o = He(H1, "resize", function() {
        Pr(
          /*shouldCheckArrows*/
          t[8] ? (
            /*updateArrowsVisibilityDebounced*/
            t[37]
          ) : null
        ) && /*shouldCheckArrows*/
        (t[8] ? (
          /*updateArrowsVisibilityDebounced*/
          t[37]
        ) : null).apply(this, arguments);
      }), n = !0);
    },
    p(i, s) {
      t = i;
      const a = {};
      s[0] & /*mods*/
      32768 && (a.cls = ht(
        "gallery",
        ao,
        /*mods*/
        t[15]
      )), s[0] & /*componentContext*/
      1 && (a.componentContext = /*componentContext*/
      t[0]), s[0] & /*layoutParams*/
      2 && (a.layoutParams = /*layoutParams*/
      t[1]), s[0] & /*items*/
      128 && (a.parentOf = /*items*/
      t[7]), s[0] & /*hasScrollRight, shouldCheckArrows, hasScrollLeft, orientation, $jsonRestrictParentScroll, scrollerStyle, scroller, gridStyle, itemsGridElem, itemsGrid, columnStyle, galleryItemsWrappers, lastPaddingSize, childLayoutParams, gridGap*/
      1074216828 | s[2] & /*$$scope*/
      1073741824 && (a.$$scope = { dirty: s, ctx: t }), r.$set(a);
    },
    i(i) {
      e || (B(r.$$.fragment, i), e = !0);
    },
    o(i) {
      Q(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Rt(r, i), n = !1, o();
    }
  };
}
function q1(t, r, e) {
  let n = 0, o = [], i = [];
  for (let s = 0; s < t.length; ++s)
    o[n] || (o[n] = []), o[n].push({
      index: s,
      hasGapBefore: i[n] && r[s].visibility !== "gone",
      componentContext: t[s]
    }), !i[n] && r[s].visibility !== "gone" && (i[n] = !0), ++n >= e && (n = 0);
  return o;
}
function Y1(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, G, L, ee, fe, P, Z, se = A, j = () => (se(), se = F(p, (le) => e(59, Z = le)), p), z, N = A, W = () => (N(), N = F(m, (le) => e(60, z = le)), m), ie, de = A, je = () => (de(), de = F(_, (le) => e(61, ie = le)), _), Ee, pe = A, ze = () => (pe(), pe = F(Wt, (le) => e(62, Ee = le)), Wt), be, Fe = A, Ge = () => (Fe(), Fe = F(f, (le) => e(63, be = le)), f), Ze, ke = A, et = () => (ke(), ke = F(c, (le) => e(64, Ze = le)), c), _e, Ie = A, ue = () => (Ie(), Ie = F(u, (le) => e(65, _e = le)), u), oe, ye = A, $ = () => (ye(), ye = F(l, (le) => e(66, oe = le)), l), Ae, xe = A, qe = () => (xe(), xe = F(a, (le) => e(67, Ae = le)), a), te, Xe, Le = A, tt = () => (Le(), Le = F(i, (le) => e(69, Xe = le)), i), dt, lt = A, wt = () => (lt(), lt = F(s, (le) => e(70, dt = le)), s), ot, At = A, it = () => (At(), At = F(h, (le) => e(30, ot = le)), h);
  t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => Fe()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => Ie()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Le()), t.$$.on_destroy.push(() => lt()), t.$$.on_destroy.push(() => At());
  let { componentContext: me } = r, { layoutParams: ne = void 0 } = r;
  const at = Dr(Yr), Ve = at.direction;
  bn(t, Ve, (le) => e(58, P = le));
  let D, jt = [], gt = !1, kt = !1, St = null, rt, Y = !1;
  const Vt = at.getCustomization("galleryLeftClass"), Dt = at.getCustomization("galleryRightClass");
  let Gt, Jt = 1, ve = "horizontal", We = "start", ft, Me = 8, T, Oe, xt = "", ae, mt = [], Wt, Ft = {}, ar = !1, Te = {}, bt = 0;
  function er() {
    e(42, Jt = 1), e(4, ve = "horizontal"), e(43, We = "start"), e(44, Me = 8), e(47, xt = "");
  }
  let Qt = null, Xt = null;
  function ur() {
    var rr, hr;
    const le = Gn(dt, Jt), Ct = me.json.responsive;
    if (!Ct || typeof Ct != "object") {
      e(42, Jt = le);
      return;
    }
    Qt != null && Qt.matches && ((rr = Ct.mobile) != null && rr.column_count) ? e(42, Jt = Ct.mobile.column_count) : Xt != null && Xt.matches && ((hr = Ct.tablet) != null && hr.column_count) ? e(42, Jt = Ct.tablet.column_count) : e(42, Jt = le);
  }
  function jr(le) {
    e(0, me = e(53, Tt = {
      ...me,
      json: {
        ...me.json,
        items: le.filter(To)
      }
    }));
  }
  const Yt = at.isDesktop;
  bn(t, Yt, (le) => e(68, te = le));
  let It = [], Tt;
  function ut() {
    if (!D)
      return;
    let le = D.scrollLeft;
    P === "rtl" && (le *= -1);
    const Ct = D.scrollWidth, rr = D.offsetWidth;
    P === "ltr" ? (e(10, gt = le > 2), e(11, kt = le + rr < Ct - 2)) : (e(11, kt = le > 2), e(10, gt = le + rr < Ct - 2));
  }
  const qt = ua(ut, 50);
  function sr(le) {
    D.scroll({
      left: D.scrollLeft + D.offsetWidth * 0.75 * (le === "right" ? 1 : -1),
      behavior: "smooth"
    });
  }
  function dr() {
    let le = [], Ct = jt[0].children.length;
    for (let rr = 0; rr < Ct; rr += 2)
      for (let hr = 0; hr < Jt; ++hr) {
        const Sr = jt[hr].children[rr];
        Sr && le.push(Sr);
      }
    return le;
  }
  function mr(le, Ct = !0) {
    const hr = ve === "horizontal" ? "left" : "top";
    D.scroll({
      [hr]: le,
      behavior: Ct ? "smooth" : "instant"
    });
  }
  function pr(le, Ct, { animated: rr = !0, extraOffset: hr = 0, overflow: Sr = "clamp" } = {}) {
    const v = ve === "horizontal", re = v ? "offsetLeft" : "offsetTop";
    Ct > le.length - 1 ? Ct = Sr === "ring" ? jo(Ct, le.length) : le.length - 1 : Ct < 0 && (Ct = Sr === "ring" ? jo(Ct, le.length) : 0);
    const d = le[Ct];
    if (d) {
      let C;
      if (P === "ltr" || !v)
        C = d[re] + 0.01 - Me / 2;
      else {
        const De = D.offsetWidth;
        C = d[re] + d.offsetWidth + 0.01 - Me / 2 - De;
      }
      if (hr) {
        C += hr;
        const De = v ? D.scrollWidth - D.offsetWidth : D.scrollHeight - D.offsetHeight;
        C > De && (Sr === "clamp" ? C = De : Sr === "ring" && (C = jo(C, De))), C < 0 && (Sr === "clamp" ? C = 0 : Sr === "ring" && (C = jo(C, De)));
      }
      mr(C, rr);
    }
  }
  function Fr(le, { overflow: Ct = "clamp", animated: rr = !0 } = {}) {
    const hr = ve === "horizontal", Sr = P === "ltr" || !hr ? 1 : -1, v = hr ? D.scrollLeft : D.scrollTop, re = hr ? D.scrollWidth - D.offsetWidth : D.scrollHeight - D.offsetHeight;
    let d = v * Sr + le;
    d > re ? Ct === "clamp" ? d = re : Ct === "ring" && (d = jo(d, re)) : d < 0 && (Ct === "clamp" ? d = 0 : Ct === "ring" && (d = jo(d, re))), mr(d * Sr, rr);
  }
  function zr(le, Ct) {
    return ve === "horizontal" ? Ct.right > le.left && le.right > Ct.left : Ct.bottom > le.top && le.bottom > Ct.top;
  }
  function gr(le, Ct) {
    return ve === "horizontal" ? Ct.left >= le.left && Ct.right <= le.right : Ct.top >= le.top && Ct.bottom <= le.bottom;
  }
  function $e(le) {
    const Ct = dr(), rr = D.getBoundingClientRect(), hr = Ct.findIndex((re) => gr(rr, re.getBoundingClientRect()));
    if (hr !== -1)
      return hr;
    const Sr = Ct.map((re) => zr(rr, re.getBoundingClientRect())), v = Sr.findIndex(Boolean);
    return v !== -1 ? le === "prev" && Sr.filter(Boolean).length === 2 ? v + 1 : v : le === "prev" ? 1 : Ct.length - 2;
  }
  to(() => {
    if (e(40, Y = !0), ut(), bt) {
      const le = dr();
      pr(le, bt, { animated: !1 });
    }
  }), an(() => {
    e(40, Y = !1), It.forEach((le) => {
      le.destroy();
    }), Gt && !me.fakeElement && (at.unregisterInstance(Gt), e(41, Gt = void 0)), Qt && Qt.removeEventListener("change", ur), Xt && Xt.removeEventListener("change", ur);
  });
  function ct(le, Ct) {
    Ir[le ? "unshift" : "push"](() => {
      jt[Ct] = le, e(9, jt);
    });
  }
  function Mt(le) {
    Ir[le ? "unshift" : "push"](() => {
      rt = le, e(3, rt);
    });
  }
  function br(le) {
    Ir[le ? "unshift" : "push"](() => {
      D = le, e(2, D);
    });
  }
  const wr = () => sr("left"), nt = () => sr("right");
  return t.$$set = (le) => {
    "componentContext" in le && e(0, me = le.componentContext), "layoutParams" in le && e(1, ne = le.layoutParams);
  }, t.$$.update = () => {
    var le, Ct, rr, hr, Sr, v;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(57, n = me.origJson), t.$$.dirty[1] & /*origJson*/
    67108864 && n && er(), t.$$.dirty[0] & /*componentContext*/
    1 && e(56, o = Array.isArray(me.json.items) && me.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && tt(e(29, i = typeof ((le = me.json.item_builder) == null ? void 0 : le.data) == "string" ? me.getDerivedFromVars((Ct = me.json.item_builder) == null ? void 0 : Ct.data, void 0, !0) : (rr = me.json.item_builder) != null && rr.data ? Go(me.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && wt(e(28, s = me.getDerivedFromVars(me.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(27, a = me.getDerivedFromVars(me.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*columns, mobileQuery, tabletQuery*/
    3147776 | t.$$.dirty[2] & /*$jsonColumnCount*/
    256) {
      const re = Gn(dt, Jt), d = me.json.responsive;
      d && typeof d == "object" && typeof window < "u" ? (Qt || (e(51, Qt = window.matchMedia("(max-width: 767px)")), e(52, Xt = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), Qt.addEventListener("change", ur), Xt.addEventListener("change", ur)), ur()) : e(42, Jt = re);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && $(e(26, l = me.getDerivedFromVars(me.json.cross_content_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(25, u = me.getDerivedFromVars(me.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(24, c = me.getDerivedFromVars(me.json.cross_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(23, f = me.getDerivedFromVars(me.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && je(e(22, _ = me.getDerivedFromVars(me.json.scroll_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && it(e(21, h = me.getDerivedFromVars(me.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && W(e(20, m = me.getDerivedFromVars(me.json.scrollbar))), t.$$.dirty[0] & /*componentContext*/
    1 && j(e(19, p = me.getDerivedFromVars(me.json.default_item))), t.$$.dirty[0] & /*componentContext, items*/
    129 | t.$$.dirty[1] & /*jsonItems, prevContext*/
    37748736 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    128) {
      let re = [];
      if (me.json.item_builder && Array.isArray(Xe) && Array.isArray(me.json.item_builder.prototypes)) {
        const Re = me.json.item_builder;
        re = il(Xe, at, me, Re);
      } else
        re = (Array.isArray(o) && o || []).map((Re, Ot) => ({
          div: Re,
          key: Re.id || { index: Ot, data: Re }
        }));
      const d = new Set(It), C = /* @__PURE__ */ new Map();
      let De = !1;
      Tt === me && It.forEach((Re) => {
        Re.key && (typeof Re.key == "string" && C.has(Re.key) ? De || (De = !0, me.logError(K(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: Re.key } }))) : C.set(
          typeof Re.key == "string" ? Re.key : Re.key.index,
          Re
        ));
      }), e(7, It = re.map((Re, Ot) => {
        let H = !De && C.get(Re.id), Lt = C.get(Ot);
        return !H && !Re.id && typeof Re.key == "object" && typeof (Lt == null ? void 0 : Lt.key) == "object" && Mi(Lt.key.data, Re.key.data) && (H = Lt), H ? (d.delete(H), H) : me.produceChildContext(Re.div, {
          path: Ot,
          variables: Re.vars,
          id: Re.id,
          key: Re.key
        });
      }));
      for (const Re of d)
        Re.destroy();
      e(53, Tt = me);
    }
    if (t.$$.dirty[1] & /*mounted*/
    512 | t.$$.dirty[2] & /*$isDesktop*/
    64 && e(8, k = te && Y), t.$$.dirty[0] & /*shouldCheckArrows, itemsGridElem*/
    264 | t.$$.dirty[1] & /*resizeObserver*/
    256 && (k ? typeof ResizeObserver < "u" && (e(39, St = new ResizeObserver(() => {
      qt();
    })), St.observe(rt)) : St && (St.disconnect(), e(39, St = null))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[2] & /*$jsonOrientation*/
    32 && e(4, ve = ca(Ae, ve)), t.$$.dirty[1] & /*align*/
    4096 | t.$$.dirty[2] & /*$jsonCrossContentAlignment*/
    16 && e(43, We = L1(oe, We)), t.$$.dirty[1] & /*itemSpacing*/
    8192 | t.$$.dirty[2] & /*$jsonItemSpacing*/
    8 && (e(44, Me = en(_e, Me)), e(12, ft = ce(Me))), t.$$.dirty[1] & /*itemSpacing, crossSpacing*/
    40960 | t.$$.dirty[2] & /*$jsonCrossSpacing*/
    4 && (e(46, Oe = en(Ze, Me)), e(45, T = ce(Oe))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*$direction, padding*/
    134283264 | t.$$.dirty[2] & /*$jsonPaddings*/
    2) {
      e(47, xt = Ps(be, P, xt));
      const re = ve === "horizontal" ? (Sr = (hr = be == null ? void 0 : be.end) != null ? hr : be == null ? void 0 : be[P === "ltr" ? "right" : "left"]) != null ? Sr : 0 : (v = be == null ? void 0 : be.bottom) != null ? v : 0, d = ce(re);
      e(13, ae = {
        width: ve === "horizontal" ? d : "1px",
        height: ve === "horizontal" ? "1px" : d,
        "margin-right": ve === "horizontal" && P === "ltr" ? "-" + d : void 0,
        "margin-left": ve === "horizontal" && P === "rtl" ? "-" + d : void 0,
        "margin-bottom": ve === "vertical" ? "-" + d : void 0
      });
    }
    if (t.$$.dirty[0] & /*items, orientation*/
    144) {
      let re = [];
      It.forEach((d) => {
        const C = ve === "horizontal" ? "width" : "height";
        re.push(d.getDerivedFromVars({
          size: d.json[C],
          visibility: d.json.visibility
        }));
      }), ze(e(14, Wt = Ti(re, (d) => [...d])));
    }
    if (t.$$.dirty[0] & /*items*/
    128 | t.$$.dirty[1] & /*columns*/
    2048 | t.$$.dirty[2] & /*$childStore*/
    1 && e(18, w = q1(It, Ee, Jt)), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*columns, templateSizes*/
    133120 | t.$$.dirty[2] & /*$childStore*/
    1 && (e(48, mt = []), Jt > 1 || Ee.forEach((re, d) => {
      var C;
      re.visibility !== "gone" && (!re.size && ve === "horizontal" || ((C = re.size) == null ? void 0 : C.type) === "match_parent" ? mt.push("100%") : mt.push("max-content"), d + 1 < Ee.length && mt.push("auto"));
    }), mt.push("auto")), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, O = me.json.fixed_columns === !0), t.$$.dirty[0] & /*orientation, scrollerStyle, childLayoutParams*/
    112 | t.$$.dirty[1] & /*align, $jsonScrollMode, itemSpacing*/
    1073754112) {
      const re = {};
      let d = {};
      if (e(49, ar = !1), d.treatMatchParentAs100 = !0, ve === "horizontal" ? (d.parentVAlign = We, d.parentContainerOrientation = "horizontal") : (d.parentHAlign = We, d.parentContainerOrientation = "vertical"), ie === "paging") {
        e(49, ar = !0), d.scrollSnap = "start";
        const C = ve === "horizontal" ? "scroll-padding-left" : "scroll-padding-top";
        re[C] = ce(Me / 2);
      }
      e(5, Ft = Uo(re, Ft)), e(6, Te = Uo(d, Te));
    }
    t.$$.dirty[0] & /*orientation*/
    16 && e(54, G = ve === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*padding, crossGridGap, fixedColumns, columns*/
    16861184 && e(17, L = {
      padding: xt,
      "grid-gap": T,
      ...O && Jt > 1 && ve === "vertical" ? {
        display: "grid",
        "grid-template-columns": `repeat(${Jt}, 1fr)`
      } : {}
    }), t.$$.dirty[1] & /*gridTemplate, templateSizes*/
    8519680 && e(16, ee = {
      [G]: B1(mt)
    }), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*scrollSnap, $jsonScrollbar*/
    537133056 && e(15, fe = {
      orientation: ve,
      "scroll-snap": ar,
      scrollbar: z === "auto" ? "auto" : "none"
    }), t.$$.dirty[1] & /*$jsonDefaultItem, defaultItem*/
    268959744 && e(50, bt = en(Z, bt)), t.$$.dirty[0] & /*componentContext*/
    1 && me.json && qt(), t.$$.dirty[0] & /*componentContext, orientation, scroller*/
    21 | t.$$.dirty[1] & /*prevId, $direction*/
    134218752 && me.json && (Gt && (at.unregisterInstance(Gt), e(41, Gt = void 0)), me.id && !me.fakeElement && (e(41, Gt = me.id), at.registerInstance(Gt, {
      setCurrentItem(re, d) {
        const C = dr();
        if (re < 0 || re > C.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        pr(C, re, { animated: d });
      },
      setPreviousItem(re, d, C) {
        const De = $e("prev"), Re = dr();
        let Ot = De - re;
        pr(Re, Ot, { animated: C, overflow: d });
      },
      setNextItem(re, d, C) {
        const De = ve === "horizontal", Re = P === "ltr" || !De ? 1 : -1, Ot = De ? D.scrollLeft * Re + D.offsetWidth === D.scrollWidth : D.scrollTop + D.offsetHeight === D.scrollHeight, H = dr();
        if (Ot && d === "ring") {
          pr(H, 0, { animated: C });
          return;
        }
        let st = $e("next") + re;
        pr(H, st, { animated: C, overflow: d });
      },
      scrollToStart(re) {
        mr(0, re);
      },
      scrollToEnd(re) {
        mr(
          P === "ltr" || ve !== "horizontal" ? 1e6 : -1e6,
          re
        );
      },
      scrollToPosition(re, d) {
        mr(
          P === "ltr" || ve !== "horizontal" ? re : -re,
          d
        );
      },
      scrollCombined({ step: re, offset: d, overflow: C, animated: De }) {
        if (re) {
          const Ot = $e(re > 0 ? "next" : "prev") + re;
          pr(dr(), Ot, { animated: De, extraOffset: d, overflow: C });
        } else d && Fr(d, { overflow: C, animated: De });
      }
    })));
  }, [
    me,
    ne,
    D,
    rt,
    ve,
    Ft,
    Te,
    It,
    k,
    jt,
    gt,
    kt,
    ft,
    ae,
    Wt,
    fe,
    ee,
    L,
    w,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    ot,
    Ve,
    Vt,
    Dt,
    jr,
    Yt,
    ut,
    qt,
    sr,
    St,
    Y,
    Gt,
    Jt,
    We,
    Me,
    T,
    Oe,
    xt,
    mt,
    ar,
    bt,
    Qt,
    Xt,
    Tt,
    G,
    O,
    o,
    n,
    P,
    Z,
    z,
    ie,
    Ee,
    be,
    Ze,
    _e,
    oe,
    Ae,
    te,
    Xe,
    dt,
    ct,
    Mt,
    br,
    wr,
    nt
  ];
}
class K1 extends Lr {
  constructor(r) {
    super(), Or(this, r, Y1, J1, Ar, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const X1 = "appkit-outer", Z1 = "appkit-tabs", Q1 = "appkit-tabs__list", x1 = "appkit-tabs__item", $1 = "appkit-tabs__item_selected", eb = "appkit-tabs_animation_fade", tb = "appkit-tabs_animation_none", rb = "appkit-tabs__item_actionable", nb = "appkit-tabs__panels", ob = "appkit-tabs__swiper", ib = "appkit-tabs__swiper_animated", sb = "appkit-tabs__swiper_inited", lb = "appkit-tabs__panel", ab = "appkit-tabs__panel_visible", ub = "appkit-tabs__separator", cb = "appkit-tabs__delimitier", vn = {
  outer: X1,
  "root__any-actions": "appkit-root__any-actions",
  tabs: Z1,
  tabs__list: Q1,
  "tabs__items-bg": "appkit-tabs__items-bg",
  "tabs__items-text": "appkit-tabs__items-text",
  tabs__item: x1,
  tabs__item_selected: $1,
  tabs_animation_fade: eb,
  tabs_animation_none: tb,
  tabs__item_actionable: rb,
  tabs__panels: nb,
  "tabs_own-height": "appkit-tabs_own-height",
  tabs__swiper: ob,
  tabs__swiper_animated: ib,
  tabs__swiper_inited: sb,
  tabs__panel: lb,
  tabs__panel_visible: ab,
  "tabs_height-parent_yes": "appkit-tabs_height-parent_yes",
  tabs__separator: ub,
  tabs__delimitier: cb,
  "tabs__tabs-highlighter": "appkit-tabs__tabs-highlighter"
};
function fb(t, r) {
  var n, o;
  if (!t || !t.image_url || typeof t.image_url != "string")
    return r;
  const e = {
    url: t.image_url,
    width: 12,
    height: 12
  };
  return ((n = t.width) == null ? void 0 : n.type) === "fixed" && Jn(t.width.value) && (e.width = t.width.value), ((o = t.height) == null ? void 0 : o.type) === "fixed" && Jn(t.height.value) && (e.height = t.height.value), e;
}
const Nd = 37, zd = 39, Rd = 36, Od = 35;
function db(t, r, e, n) {
  const o = [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ];
  for (let i = 0; i < o.length; ++i)
    if (o[i] && !Tn(o[i]))
      return n;
  return js(t, r, e);
}
function sc(t) {
  const r = t.touches[0], e = r.clientX || r.pageX, n = r.clientY || r.pageY;
  return { x: e, y: n };
}
function _b(t) {
  let r, e;
  return r = new qn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, [o]) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function pb(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r, { enabled: i } = r;
  const s = Ao(i);
  return ni(la, { isEnabled: s }), t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams), "enabled" in a && e(2, i = a.enabled);
  }, t.$$.update = () => {
    t.$$.dirty & /*enabled*/
    4 && s.set(i);
  }, [n, o, i];
}
class gb extends Lr {
  constructor(r) {
    super(), Or(this, r, pb, _b, Ar, {
      componentContext: 0,
      layoutParams: 1,
      enabled: 2
    });
  }
}
const { Boolean: lc, window: hb } = Io;
function ac(t, r, e) {
  const n = t.slice();
  n[99] = r[e];
  const o = (
    /*item*/
    n[99].index
  );
  n[100] = o;
  const i = (
    /*showedPanels*/
    n[33][
      /*index*/
      n[100]
    ]
  );
  return n[101] = i, n;
}
function uc(t, r, e) {
  const n = t.slice();
  n[99] = r[e];
  const o = (
    /*item*/
    n[99].index
  );
  n[100] = o;
  const i = (
    /*index*/
    n[100] === /*selected*/
    n[17]
  );
  return n[104] = i, n;
}
function cc(t, r, e) {
  const n = t.slice();
  n[99] = r[e];
  const o = (
    /*item*/
    n[99].index
  );
  n[100] = o;
  const i = (
    /*index*/
    n[100] === /*selected*/
    n[17]
  );
  return n[104] = i, n;
}
function mb(t) {
  let r, e;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function bb(t) {
  let r, e;
  const n = [
    {
      cls: ht(
        "tabs",
        vn,
        /*mods*/
        t[24]
      )
    },
    {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    },
    { layoutParams: (
      /*layoutParams*/
      t[1]
    ) },
    { customActions: "tabs" },
    { parentOf: (
      /*parentOfItems*/
      t[47]
    ) },
    { parentOfSimpleMode: !0 },
    { replaceItems: (
      /*replaceItems*/
      t[53]
    ) },
    /*devapi*/
    t[52]
  ];
  let o = {
    $$slots: { default: [wb] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = bo(o, n[i]);
  return r = new yn({ props: o }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(i, s) {
      zt(r, i, s), e = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams*/
      16777219 | s[1] & /*parentOfItems, replaceItems, devapi*/
      6356992 ? Do(n, [
        s[0] & /*mods*/
        16777216 && {
          cls: ht(
            "tabs",
            vn,
            /*mods*/
            i[24]
          )
        },
        s[0] & /*componentContext*/
        1 && {
          componentContext: (
            /*componentContext*/
            i[0]
          )
        },
        s[0] & /*layoutParams*/
        2 && { layoutParams: (
          /*layoutParams*/
          i[1]
        ) },
        n[3],
        s[1] & /*parentOfItems*/
        65536 && { parentOf: (
          /*parentOfItems*/
          i[47]
        ) },
        n[5],
        s[1] & /*replaceItems*/
        4194304 && { replaceItems: (
          /*replaceItems*/
          i[53]
        ) },
        s[1] & /*devapi*/
        2097152 && gd(
          /*devapi*/
          i[52]
        )
      ]) : {};
      s[0] & /*panelsWrapper, swiperElem, $childStore, childLayoutParams, selected, $jsonSeparator, tabsElem, titlePadding, $direction, tabFontSize, tabPaddings, tabLineHeight, tabLetterSpacing, tabActiveFontWeight, tabInactiveFontWeight, tabActiveFontFamily, tabInactiveFontFamily, tabActiveFontVariationSettings, tabInactiveFontVariationSettings, tabActiveTextColor, tabInactiveTextColor, tabActiveBackground, tabInactiveBackground, tabBorderRadius, tabItemSpacing, componentContext, delimitierStyle, animationType*/
      2130706425 | s[1] & /*$jsonRestrictParentScroll, isSwipeEnabled, isSwipeInitialized, isAnimated, visiblePanels, showedPanels, separatorStyle, animationDuration, selectedTabStyles*/
      131327 | s[3] & /*$$scope*/
      65536 && (a.$$scope = { dirty: s, ctx: i }), r.$set(a);
    },
    i(i) {
      e || (B(r.$$.fragment, i), e = !0);
    },
    o(i) {
      Q(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Rt(r, i);
    }
  };
}
function fc(t) {
  let r;
  return {
    c() {
      r = Se("span"), g(r, "class", vn.tabs__delimitier), M(
        r,
        "width",
        /*delimitierStyle*/
        t[15].width ? ce(
          /*delimitierStyle*/
          t[15].width
        ) : void 0
      ), M(
        r,
        "height",
        /*delimitierStyle*/
        t[15].height ? ce(
          /*delimitierStyle*/
          t[15].height
        ) : void 0
      );
    },
    m(e, n) {
      q(e, r, n);
    },
    p(e, n) {
      n[0] & /*delimitierStyle*/
      32768 && M(
        r,
        "width",
        /*delimitierStyle*/
        e[15].width ? ce(
          /*delimitierStyle*/
          e[15].width
        ) : void 0
      ), n[0] & /*delimitierStyle*/
      32768 && M(
        r,
        "height",
        /*delimitierStyle*/
        e[15].height ? ce(
          /*delimitierStyle*/
          e[15].height
        ) : void 0
      );
    },
    d(e) {
      e && J(r);
    }
  };
}
function dc(t) {
  let r, e, n = (
    /*item*/
    t[99].title + ""
  ), o, i, s = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && fc(t)
  );
  return {
    c() {
      s && s.c(), r = lr(), e = Se("span"), o = Pn(n), g(e, "class", i = ht("tabs__item", vn, {
        selected: (
          /*isSelected*/
          t[104]
        ),
        actionable: !!/*item*/
        t[99].title_click_action
      }));
    },
    m(a, l) {
      s && s.m(a, l), q(a, r, l), q(a, e, l), pt(e, o);
    },
    p(a, l) {
      /*delimitierStyle*/
      a[15] && /*index*/
      a[100] > 0 ? s ? s.p(a, l) : (s = fc(a), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null), l[0] & /*$childStore*/
      262144 && n !== (n = /*item*/
      a[99].title + "") && Qn(o, n), l[0] & /*$childStore, selected*/
      393216 && i !== (i = ht("tabs__item", vn, {
        selected: (
          /*isSelected*/
          a[104]
        ),
        actionable: !!/*item*/
        a[99].title_click_action
      })) && g(e, "class", i);
    },
    d(a) {
      a && (J(r), J(e)), s && s.d(a);
    }
  };
}
function _c(t) {
  let r, e;
  return {
    c() {
      r = Se("div"), g(r, "class", vn["tabs__tabs-highlighter"]), g(r, "style", e = $t(
        /*selectedTabStyles*/
        t[36]
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o[1] & /*selectedTabStyles*/
      32 && e !== (e = $t(
        /*selectedTabStyles*/
        n[36]
      )) && g(r, "style", e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function pc(t) {
  let r, e;
  return {
    c() {
      r = Se("img"), g(r, "class", vn.tabs__delimitier), g(r, "alt", ""), g(r, "loading", "lazy"), g(r, "decoding", "async"), Zn(r.src, e = /*delimitierStyle*/
      t[15].url) || g(r, "src", e), M(
        r,
        "width",
        /*delimitierStyle*/
        t[15].width ? ce(
          /*delimitierStyle*/
          t[15].width
        ) : void 0
      ), M(
        r,
        "height",
        /*delimitierStyle*/
        t[15].height ? ce(
          /*delimitierStyle*/
          t[15].height
        ) : void 0
      );
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o[0] & /*delimitierStyle*/
      32768 && !Zn(r.src, e = /*delimitierStyle*/
      n[15].url) && g(r, "src", e), o[0] & /*delimitierStyle*/
      32768 && M(
        r,
        "width",
        /*delimitierStyle*/
        n[15].width ? ce(
          /*delimitierStyle*/
          n[15].width
        ) : void 0
      ), o[0] & /*delimitierStyle*/
      32768 && M(
        r,
        "height",
        /*delimitierStyle*/
        n[15].height ? ce(
          /*delimitierStyle*/
          n[15].height
        ) : void 0
      );
    },
    d(n) {
      n && J(r);
    }
  };
}
function yb(t) {
  let r = (
    /*item*/
    t[99].title + ""
  ), e;
  return {
    c() {
      e = Pn(r);
    },
    m(n, o) {
      q(n, e, o);
    },
    p(n, o) {
      o[0] & /*$childStore*/
      262144 && r !== (r = /*item*/
      n[99].title + "") && Qn(e, r);
    },
    d(n) {
      n && J(e);
    }
  };
}
function gc(t) {
  let r, e, n, o = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && pc(t)
  );
  function i(...s) {
    return (
      /*func*/
      t[73](
        /*index*/
        t[100],
        ...s
      )
    );
  }
  return e = new rl({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      cls: ht("tabs__item", vn, {
        selected: (
          /*isSelected*/
          t[104]
        ),
        actionable: !!/*item*/
        t[99].title_click_action
      }),
      actions: (
        /*item*/
        t[99].title_click_action && !/*componentContext*/
        t[0].fakeElement ? [
          /*item*/
          t[99].title_click_action
        ].filter(Ns) : []
      ),
      attrs: {
        id: `${/*instId*/
        t[50]}-tab-${/*index*/
        t[100]}`,
        "aria-controls": `${/*instId*/
        t[50]}-panel-${/*index*/
        t[100]}`,
        role: "tab",
        // eslint-disable-next-line no-nested-ternary
        tabindex: (
          /*isSelected*/
          t[104] && !/*componentContext*/
          t[0].fakeElement ? (
            /*item*/
            t[99].title_click_action ? void 0 : "0"
          ) : "-1"
        ),
        "aria-selected": (
          /*isSelected*/
          t[104] ? "true" : "false"
        )
      },
      customAction: (
        /*componentContext*/
        t[0].fakeElement ? null : i
      ),
      $$slots: { default: [yb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      o && o.c(), r = lr(), Bt(e.$$.fragment);
    },
    m(s, a) {
      o && o.m(s, a), q(s, r, a), zt(e, s, a), n = !0;
    },
    p(s, a) {
      t = s, /*delimitierStyle*/
      t[15] && /*index*/
      t[100] > 0 ? o ? o.p(t, a) : (o = pc(t), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
      const l = {};
      a[0] & /*componentContext*/
      1 && (l.componentContext = /*componentContext*/
      t[0]), a[0] & /*$childStore, selected*/
      393216 && (l.cls = ht("tabs__item", vn, {
        selected: (
          /*isSelected*/
          t[104]
        ),
        actionable: !!/*item*/
        t[99].title_click_action
      })), a[0] & /*$childStore, componentContext*/
      262145 && (l.actions = /*item*/
      t[99].title_click_action && !/*componentContext*/
      t[0].fakeElement ? [
        /*item*/
        t[99].title_click_action
      ].filter(Ns) : []), a[0] & /*$childStore, selected, componentContext*/
      393217 && (l.attrs = {
        id: `${/*instId*/
        t[50]}-tab-${/*index*/
        t[100]}`,
        "aria-controls": `${/*instId*/
        t[50]}-panel-${/*index*/
        t[100]}`,
        role: "tab",
        // eslint-disable-next-line no-nested-ternary
        tabindex: (
          /*isSelected*/
          t[104] && !/*componentContext*/
          t[0].fakeElement ? (
            /*item*/
            t[99].title_click_action ? void 0 : "0"
          ) : "-1"
        ),
        "aria-selected": (
          /*isSelected*/
          t[104] ? "true" : "false"
        )
      }), a[0] & /*componentContext, $childStore*/
      262145 && (l.customAction = /*componentContext*/
      t[0].fakeElement ? null : i), a[0] & /*$childStore*/
      262144 | a[3] & /*$$scope*/
      65536 && (l.$$scope = { dirty: a, ctx: t }), e.$set(l);
    },
    i(s) {
      n || (B(e.$$.fragment, s), n = !0);
    },
    o(s) {
      Q(e.$$.fragment, s), n = !1;
    },
    d(s) {
      s && J(r), o && o.d(s), Rt(e, s);
    }
  };
}
function hc(t) {
  let r, e;
  return {
    c() {
      r = Se("div"), g(r, "class", vn.tabs__separator), g(r, "style", e = $t(
        /*separatorStyle*/
        t[38]
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o[1] & /*separatorStyle*/
      128 && e !== (e = $t(
        /*separatorStyle*/
        n[38]
      )) && g(r, "style", e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function mc(t) {
  let r, e;
  return r = new gb({
    props: {
      componentContext: (
        /*childComponentContext*/
        t[101]
      ),
      layoutParams: (
        /*childLayoutParams*/
        t[3]
      ),
      enabled: (
        /*index*/
        t[100] === /*selected*/
        t[17]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*$childStore*/
      262144 | o[1] & /*showedPanels*/
      4 && (i.componentContext = /*childComponentContext*/
      n[101]), o[0] & /*childLayoutParams*/
      8 && (i.layoutParams = /*childLayoutParams*/
      n[3]), o[0] & /*$childStore, selected*/
      393216 && (i.enabled = /*index*/
      n[100] === /*selected*/
      n[17]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function bc(t) {
  let r, e, n, o, i, s, a = (
    /*childComponentContext*/
    t[101] && mc(t)
  );
  return {
    c() {
      r = Se("div"), a && a.c(), e = lr(), g(r, "class", n = ht("tabs__panel", vn, {
        visible: (
          /*visiblePanels*/
          t[34][
            /*index*/
            t[100]
          ]
        )
      })), g(r, "role", "tabpanel"), g(r, "id", o = /*instId*/
      t[50] + "-panel-" + /*index*/
      t[100]), g(r, "aria-labelledby", i = /*instId*/
      t[50] + "-tab-" + /*index*/
      t[100]), M(
        r,
        "left",
        /*index*/
        t[100] * 100 + "%"
      );
    },
    m(l, u) {
      q(l, r, u), a && a.m(r, null), pt(r, e), s = !0;
    },
    p(l, u) {
      /*childComponentContext*/
      l[101] ? a ? (a.p(l, u), u[0] & /*$childStore*/
      262144 | u[1] & /*showedPanels*/
      4 && B(a, 1)) : (a = mc(l), a.c(), B(a, 1), a.m(r, e)) : a && (or(), Q(a, 1, 1, () => {
        a = null;
      }), ir()), (!s || u[0] & /*$childStore*/
      262144 | u[1] & /*visiblePanels*/
      8 && n !== (n = ht("tabs__panel", vn, {
        visible: (
          /*visiblePanels*/
          l[34][
            /*index*/
            l[100]
          ]
        )
      }))) && g(r, "class", n), (!s || u[0] & /*$childStore*/
      262144 && o !== (o = /*instId*/
      l[50] + "-panel-" + /*index*/
      l[100])) && g(r, "id", o), (!s || u[0] & /*$childStore*/
      262144 && i !== (i = /*instId*/
      l[50] + "-tab-" + /*index*/
      l[100])) && g(r, "aria-labelledby", i), (!s || u[0] & /*$childStore*/
      262144) && M(
        r,
        "left",
        /*index*/
        l[100] * 100 + "%"
      );
    },
    i(l) {
      s || (B(a), s = !0);
    },
    o(l) {
      Q(a), s = !1;
    },
    d(l) {
      l && J(r), a && a.d();
    }
  };
}
function wb(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h, m, p, k = nr(
    /*$childStore*/
    t[18]
  ), w = [];
  for (let j = 0; j < k.length; j += 1)
    w[j] = dc(cc(t, k, j));
  let O = (
    /*animationType*/
    t[16] === "slide" && /*selectedTabStyles*/
    t[36] && _c(t)
  ), G = nr(
    /*$childStore*/
    t[18]
  ), L = [];
  for (let j = 0; j < G.length; j += 1)
    L[j] = gc(uc(t, G, j));
  const ee = (j) => Q(L[j], 1, 1, () => {
    L[j] = null;
  });
  let fe = (
    /*$jsonSeparator*/
    t[20] && hc(t)
  ), P = nr(
    /*$childStore*/
    t[18]
  ), Z = [];
  for (let j = 0; j < P.length; j += 1)
    Z[j] = bc(ac(t, P, j));
  const se = (j) => Q(Z[j], 1, 1, () => {
    Z[j] = null;
  });
  return {
    c() {
      r = Se("div"), e = Se("div");
      for (let j = 0; j < w.length; j += 1)
        w[j].c();
      n = lr(), O && O.c(), o = lr(), i = Se("div");
      for (let j = 0; j < L.length; j += 1)
        L[j].c();
      a = lr(), fe && fe.c(), l = lr(), u = Se("div"), c = Se("div");
      for (let j = 0; j < Z.length; j += 1)
        Z[j].c();
      g(e, "class", vn["tabs__items-bg"]), g(e, "aria-hidden", "true"), g(i, "class", vn["tabs__items-text"]), g(r, "class", s = vn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? vr["root_restrict-scroll"] : "")), g(r, "role", "tablist"), M(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? mo(
          /*titlePadding*/
          t[14],
          /*$direction*/
          t[19]
        ) : ""
      ), M(r, "--divkit-tabs-font-size", ce(
        /*tabFontSize*/
        t[4]
      )), M(
        r,
        "--divkit-tabs-paddings",
        /*tabPaddings*/
        t[5]
      ), M(
        r,
        "--divkit-tabs-line-height",
        /*tabLineHeight*/
        t[25]
      ), M(
        r,
        "--divkit-tabs-letter-spacing",
        /*tabLetterSpacing*/
        t[26]
      ), M(
        r,
        "--divkit-tabs-active-font-weight",
        /*tabActiveFontWeight*/
        t[7] || ""
      ), M(
        r,
        "--divkit-tabs-inactive-font-weight",
        /*tabInactiveFontWeight*/
        t[8] || ""
      ), M(
        r,
        "--divkit-tabs-active-font-family",
        /*tabActiveFontFamily*/
        t[27] || ""
      ), M(
        r,
        "--divkit-tabs-inactive-font-family",
        /*tabInactiveFontFamily*/
        t[29] || ""
      ), M(
        r,
        "--divkit-tabs-active-font-variation-settings",
        /*tabActiveFontVariationSettings*/
        t[28] || ""
      ), M(
        r,
        "--divkit-tabs-inactive-font-variation-settings",
        /*tabInactiveFontVariationSettings*/
        t[30] || ""
      ), M(
        r,
        "--divkit-tabs-active-text-color",
        /*tabActiveTextColor*/
        t[9]
      ), M(
        r,
        "--divkit-tabs-inactive-text-color",
        /*tabInactiveTextColor*/
        t[10]
      ), M(
        r,
        "--divkit-tabs-active-background-color",
        /*tabActiveBackground*/
        t[11]
      ), M(
        r,
        "--divkit-tabs-inactive-background-color",
        /*tabInactiveBackground*/
        t[12]
      ), M(
        r,
        "--divkit-tabs-border-radius",
        /*tabBorderRadius*/
        t[6]
      ), M(
        r,
        "--divkit-tabs-items-spacing",
        /*tabItemSpacing*/
        t[13] ? fn(
          /*tabItemSpacing*/
          t[13] * 10 / /*tabFontSize*/
          t[4]
        ) : ""
      ), M(
        r,
        "--divkit-tabs-animation-duration",
        /*animationDuration*/
        t[35] !== void 0 ? `${/*animationDuration*/
        t[35]}ms` : ""
      ), g(c, "class", f = ht("tabs__swiper", vn, {
        inited: (
          /*isSwipeInitialized*/
          t[31]
        ),
        animated: (
          /*isAnimated*/
          t[32]
        )
      })), g(u, "class", _ = vn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? vr["root_restrict-scroll"] : ""));
    },
    m(j, z) {
      q(j, r, z), pt(r, e);
      for (let N = 0; N < w.length; N += 1)
        w[N] && w[N].m(e, null);
      pt(e, n), O && O.m(e, null), pt(r, o), pt(r, i);
      for (let N = 0; N < L.length; N += 1)
        L[N] && L[N].m(i, null);
      t[74](r), q(j, a, z), fe && fe.m(j, z), q(j, l, z), q(j, u, z), pt(u, c);
      for (let N = 0; N < Z.length; N += 1)
        Z[N] && Z[N].m(c, null);
      t[75](c), t[76](u), h = !0, m || (p = [
        He(
          r,
          "keydown",
          /*onTabKeydown*/
          t[55]
        ),
        He(u, "touchstart", function() {
          Pr(
            /*isSwipeEnabled*/
            t[37] ? (
              /*onTouchStart*/
              t[56]
            ) : void 0
          ) && (t[37] ? (
            /*onTouchStart*/
            t[56]
          ) : void 0).apply(this, arguments);
        }),
        He(u, "touchmove", function() {
          Pr(
            /*isSwipeEnabled*/
            t[37] ? (
              /*onTouchMove*/
              t[57]
            ) : void 0
          ) && (t[37] ? (
            /*onTouchMove*/
            t[57]
          ) : void 0).apply(this, arguments);
        }),
        He(u, "touchend", function() {
          Pr(
            /*isSwipeEnabled*/
            t[37] ? (
              /*onTouchEnd*/
              t[58]
            ) : void 0
          ) && (t[37] ? (
            /*onTouchEnd*/
            t[58]
          ) : void 0).apply(this, arguments);
        }),
        He(u, "touchcancel", function() {
          Pr(
            /*isSwipeEnabled*/
            t[37] ? (
              /*onTouchEnd*/
              t[58]
            ) : void 0
          ) && (t[37] ? (
            /*onTouchEnd*/
            t[58]
          ) : void 0).apply(this, arguments);
        })
      ], m = !0);
    },
    p(j, z) {
      if (t = j, z[0] & /*$childStore, selected, delimitierStyle*/
      425984) {
        k = nr(
          /*$childStore*/
          t[18]
        );
        let N;
        for (N = 0; N < k.length; N += 1) {
          const W = cc(t, k, N);
          w[N] ? w[N].p(W, z) : (w[N] = dc(W), w[N].c(), w[N].m(e, n));
        }
        for (; N < w.length; N += 1)
          w[N].d(1);
        w.length = k.length;
      }
      if (/*animationType*/
      t[16] === "slide" && /*selectedTabStyles*/
      t[36] ? O ? O.p(t, z) : (O = _c(t), O.c(), O.m(e, null)) : O && (O.d(1), O = null), z[0] & /*componentContext, $childStore, selected, delimitierStyle*/
      425985 | z[1] & /*instId, selectItem*/
      8912896) {
        G = nr(
          /*$childStore*/
          t[18]
        );
        let N;
        for (N = 0; N < G.length; N += 1) {
          const W = uc(t, G, N);
          L[N] ? (L[N].p(W, z), B(L[N], 1)) : (L[N] = gc(W), L[N].c(), B(L[N], 1), L[N].m(i, null));
        }
        for (or(), N = G.length; N < L.length; N += 1)
          ee(N);
        ir();
      }
      if ((!h || z[1] & /*$jsonRestrictParentScroll*/
      131072 && s !== (s = vn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? vr["root_restrict-scroll"] : ""))) && g(r, "class", s), z[0] & /*titlePadding, $direction*/
      540672 && M(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? mo(
          /*titlePadding*/
          t[14],
          /*$direction*/
          t[19]
        ) : ""
      ), z[0] & /*tabFontSize*/
      16 && M(r, "--divkit-tabs-font-size", ce(
        /*tabFontSize*/
        t[4]
      )), z[0] & /*tabPaddings*/
      32 && M(
        r,
        "--divkit-tabs-paddings",
        /*tabPaddings*/
        t[5]
      ), z[0] & /*tabLineHeight*/
      33554432 && M(
        r,
        "--divkit-tabs-line-height",
        /*tabLineHeight*/
        t[25]
      ), z[0] & /*tabLetterSpacing*/
      67108864 && M(
        r,
        "--divkit-tabs-letter-spacing",
        /*tabLetterSpacing*/
        t[26]
      ), z[0] & /*tabActiveFontWeight*/
      128 && M(
        r,
        "--divkit-tabs-active-font-weight",
        /*tabActiveFontWeight*/
        t[7] || ""
      ), z[0] & /*tabInactiveFontWeight*/
      256 && M(
        r,
        "--divkit-tabs-inactive-font-weight",
        /*tabInactiveFontWeight*/
        t[8] || ""
      ), z[0] & /*tabActiveFontFamily*/
      134217728 && M(
        r,
        "--divkit-tabs-active-font-family",
        /*tabActiveFontFamily*/
        t[27] || ""
      ), z[0] & /*tabInactiveFontFamily*/
      536870912 && M(
        r,
        "--divkit-tabs-inactive-font-family",
        /*tabInactiveFontFamily*/
        t[29] || ""
      ), z[0] & /*tabActiveFontVariationSettings*/
      268435456 && M(
        r,
        "--divkit-tabs-active-font-variation-settings",
        /*tabActiveFontVariationSettings*/
        t[28] || ""
      ), z[0] & /*tabInactiveFontVariationSettings*/
      1073741824 && M(
        r,
        "--divkit-tabs-inactive-font-variation-settings",
        /*tabInactiveFontVariationSettings*/
        t[30] || ""
      ), z[0] & /*tabActiveTextColor*/
      512 && M(
        r,
        "--divkit-tabs-active-text-color",
        /*tabActiveTextColor*/
        t[9]
      ), z[0] & /*tabInactiveTextColor*/
      1024 && M(
        r,
        "--divkit-tabs-inactive-text-color",
        /*tabInactiveTextColor*/
        t[10]
      ), z[0] & /*tabActiveBackground*/
      2048 && M(
        r,
        "--divkit-tabs-active-background-color",
        /*tabActiveBackground*/
        t[11]
      ), z[0] & /*tabInactiveBackground*/
      4096 && M(
        r,
        "--divkit-tabs-inactive-background-color",
        /*tabInactiveBackground*/
        t[12]
      ), z[0] & /*tabBorderRadius*/
      64 && M(
        r,
        "--divkit-tabs-border-radius",
        /*tabBorderRadius*/
        t[6]
      ), z[0] & /*tabItemSpacing, tabFontSize*/
      8208 && M(
        r,
        "--divkit-tabs-items-spacing",
        /*tabItemSpacing*/
        t[13] ? fn(
          /*tabItemSpacing*/
          t[13] * 10 / /*tabFontSize*/
          t[4]
        ) : ""
      ), z[1] & /*animationDuration*/
      16 && M(
        r,
        "--divkit-tabs-animation-duration",
        /*animationDuration*/
        t[35] !== void 0 ? `${/*animationDuration*/
        t[35]}ms` : ""
      ), /*$jsonSeparator*/
      t[20] ? fe ? fe.p(t, z) : (fe = hc(t), fe.c(), fe.m(l.parentNode, l)) : fe && (fe.d(1), fe = null), z[0] & /*$childStore, childLayoutParams, selected*/
      393224 | z[1] & /*visiblePanels, instId, showedPanels*/
      524300) {
        P = nr(
          /*$childStore*/
          t[18]
        );
        let N;
        for (N = 0; N < P.length; N += 1) {
          const W = ac(t, P, N);
          Z[N] ? (Z[N].p(W, z), B(Z[N], 1)) : (Z[N] = bc(W), Z[N].c(), B(Z[N], 1), Z[N].m(c, null));
        }
        for (or(), N = P.length; N < Z.length; N += 1)
          se(N);
        ir();
      }
      (!h || z[1] & /*isSwipeInitialized, isAnimated*/
      3 && f !== (f = ht("tabs__swiper", vn, {
        inited: (
          /*isSwipeInitialized*/
          t[31]
        ),
        animated: (
          /*isAnimated*/
          t[32]
        )
      }))) && g(c, "class", f), (!h || z[1] & /*$jsonRestrictParentScroll*/
      131072 && _ !== (_ = vn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? vr["root_restrict-scroll"] : ""))) && g(u, "class", _);
    },
    i(j) {
      if (!h) {
        for (let z = 0; z < G.length; z += 1)
          B(L[z]);
        for (let z = 0; z < P.length; z += 1)
          B(Z[z]);
        h = !0;
      }
    },
    o(j) {
      L = L.filter(lc);
      for (let z = 0; z < L.length; z += 1)
        Q(L[z]);
      Z = Z.filter(lc);
      for (let z = 0; z < Z.length; z += 1)
        Q(Z[z]);
      h = !1;
    },
    d(j) {
      j && (J(r), J(a), J(l), J(u)), nn(w, j), O && O.d(), nn(L, j), t[74](null), fe && fe.d(j), nn(Z, j), t[75](null), t[76](null), m = !1, Hr(p);
    }
  };
}
function kb(t) {
  let r, e, n, o, i, s;
  const a = [bb, mb], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[2] ? 1 : 0
    );
  }
  return ~(r = u(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(c, f) {
      ~r && l[r].m(c, f), q(c, n, f), o = !0, i || (s = He(hb, "resize", function() {
        Pr(
          /*animationType*/
          t[16] === "slide" ? (
            /*updateSlideAnimation*/
            t[59]
          ) : void 0
        ) && (t[16] === "slide" ? (
          /*updateSlideAnimation*/
          t[59]
        ) : void 0).apply(this, arguments);
      }), i = !0);
    },
    p(c, f) {
      t = c;
      let _ = r;
      r = u(t), r === _ ? ~r && l[r].p(t, f) : (e && (or(), Q(l[_], 1, 1, () => {
        l[_] = null;
      }), ir()), ~r ? (e = l[r], e ? e.p(t, f) : (e = l[r] = a[r](t), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(c) {
      o || (B(e), o = !0);
    },
    o(c) {
      Q(e), o = !1;
    },
    d(c) {
      c && J(n), ~r && l[r].d(c), i = !1, s();
    }
  };
}
function vb(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, G, L, ee = A, fe = () => (ee(), ee = F(a, (v) => e(67, L = v)), a), P, Z = A, se = () => (Z(), Z = F(m, (v) => e(68, P = v)), m), j, z = A, N = () => (z(), z = F(h, (v) => e(69, j = v)), h), W, ie = A, de = () => (ie(), ie = F(f, (v) => e(70, W = v)), f), je, Ee, pe = A, ze = () => (pe(), pe = F(c, (v) => e(71, Ee = v)), c), be, Fe = A, Ge = () => (Fe(), Fe = F(u, (v) => e(72, be = v)), u), Ze, ke = A, et = () => (ke(), ke = F(l, (v) => e(20, Ze = v)), l), _e, Ie = A, ue = () => (Ie(), Ie = F(_, (v) => e(48, _e = v)), _);
  t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => ie()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => Fe()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => Ie());
  let { componentContext: oe } = r, { layoutParams: ye = void 0 } = r;
  const $ = Dr(Yr), Ae = $.direction;
  bn(t, Ae, (v) => e(19, je = v));
  const xe = $.genId("tabs");
  let qe, te = !1, Xe = Ao([]);
  bn(t, Xe, (v) => e(18, G = v));
  let Le = {}, tt, dt, lt, wt = {}, ot = 12, At = "", it = "", me = "", ne = "", at, Ve = "", D = "", jt, gt = "", kt = "", St = "", rt = "", Y = "", Vt = "", Dt = 0, Gt = "", Jt = "", ve = null, We = !1, ft = !1, Me, T = [], Oe = [], xt = null, ae = null, mt = null, Wt, Ft = !1, ar = !1, Te, bt, er, Qt = "slide", Xt, ur, jr, Yt = {
    devapi: {
      getState() {
        return p;
      },
      setState(v) {
        return qt(v, !1, !0);
      }
    }
  };
  function It() {
    e(4, ot = 12), e(5, At = ""), e(6, ne = ""), e(7, at = void 0), e(27, Ve = ""), e(28, D = ""), e(8, jt = void 0), e(29, gt = ""), e(30, kt = ""), e(9, St = ""), e(10, rt = ""), e(11, Y = ""), e(12, Vt = ""), e(13, Dt = 0), e(61, Gt = ""), e(62, Jt = ""), e(14, ve = null), e(15, er = void 0), e(16, Qt = "slide"), e(35, Xt = 300), e(36, ur = void 0), le();
  }
  function Tt(v) {
    oe.json.items && e(0, oe = jr = {
      ...oe,
      json: {
        ...oe.json,
        items: oe.json.items.map((re, d) => ({ ...re, div: v[d] }))
      }
    });
  }
  function ut(v) {
    if (te)
      return;
    const re = new Set(T.filter(To)), d = /* @__PURE__ */ new Map();
    jr === oe && T.forEach((C) => {
      C && d.set(C.json, C);
    }), e(33, T = v.map((C, De) => {
      if ((De === p || T[De]) && (C != null && C.div)) {
        const Re = d.get(C.div);
        return Re ? (re.delete(Re), Re) : oe.produceChildContext(C.div, { path: De });
      }
    })), e(34, Oe = v.map((C, De) => De === p));
    for (const C of re)
      C.destroy();
    jr = oe;
  }
  async function qt(v, re, d) {
    if (Me = p, e(17, p = v), ct(), mr(d), le(), re) {
      await An();
      const C = tt.querySelector(`.${vn.tabs__item_selected}`);
      C && C.focus();
    }
  }
  function sr(v, re = !1) {
    const d = G == null ? void 0 : G.length;
    if (!d)
      return;
    const C = G.map((H) => H.index);
    let Re = C.indexOf(p) + v;
    Re >= d ? Re = 0 : Re < 0 && (Re = d - 1);
    const Ot = C[Re];
    qt(Ot, re, !0);
  }
  function dr(v, re) {
    return p !== re ? (qt(re, !1, !0), !1) : !0;
  }
  function mr(v = !0) {
    e(32, ft = v), pr(-p * 100), Fr(), zr(), gr(), bt = -p * dt.clientWidth;
  }
  async function pr(v) {
    await An(), e(23, lt.style.transform = `translate3d(${v}%,0,0)`, lt);
  }
  function Fr(v = !1) {
    const re = v ? Math.max(0, p - 1) : Math.min(p, Me != null ? Me : p), d = v ? Math.min(o.length - 1, p + 1) : Math.max(p, Me != null ? Me : p);
    $.devtoolCreateHierarchy !== "eager" && T.forEach((C) => {
      C == null || C.destroy();
    }), e(33, T = T.map((C, De) => {
      var Ot;
      if (C)
        return C;
      const Re = (Ot = o[De]) == null ? void 0 : Ot.div;
      if ((De >= re && De <= d || $.devtoolCreateHierarchy === "eager") && Re)
        return oe.produceChildContext(Re, { path: De });
    })), e(34, Oe = Oe.map((C, De) => De >= re && De <= d));
  }
  async function zr() {
    var re;
    if (((re = oe.json.height) == null ? void 0 : re.type) === "match_parent")
      return;
    await An();
    const v = document.getElementById(`${xe}-panel-${p}`);
    v && e(22, dt.style.height = ce(v.offsetHeight), dt);
  }
  function gr() {
    xt && clearTimeout(xt), xt = window.setTimeout(
      () => {
        e(34, Oe = o.map((v, re) => re === p));
      },
      400
    );
  }
  function $e(v) {
    if (!(v.ctrlKey || v.shiftKey || v.altKey || v.metaKey) && o) {
      if (v.which === Nd)
        sr(-1, !0);
      else if (v.which === zd)
        sr(1, !0);
      else if (v.which === Rd)
        qt(0, !0, !0);
      else if (v.which === Od)
        qt(o.length - 1, !0, !0);
      else
        return;
      v.preventDefault();
    }
  }
  function ct() {
    We || (e(31, We = !0), e(22, dt.style.height = ce(dt.clientHeight), dt), e(23, lt.style.transform = `translate3d(${-(Me != null ? Me : p) * 100}%,0,0)`, lt));
  }
  function Mt(v) {
    var C;
    const re = v.target, d = (C = re == null ? void 0 : re.closest) == null ? void 0 : C.call(re, `.${vr["root_restrict-scroll"]}`);
    o.length < 2 || v.touches.length > 1 || d && d !== dt || (Ft = !1, ar = !1, ae = sc(v), mt = null, Wt = Date.now(), Te = bt || -p * dt.clientWidth, e(32, ft = !1), xt && clearTimeout(xt));
  }
  function br(v) {
    const re = sc(v);
    if (!ae || mt && mt.x === re.x && mt.y === re.y)
      return;
    mt = re;
    const d = dt.clientWidth;
    if (Ft) {
      bt = re.x - ae.x + Te;
      const C = d * o.length;
      if (bt > 0)
        bt = bt * d / (bt + d * 3);
      else if (-bt + d > C) {
        let De = -bt + d - C;
        De = De * d / (De + d * 3), bt = d - C - De;
      }
      pr(bt * 100 / d);
    } else Math.abs(re.y - ae.y) > 10 ? ar = !0 : !ar && Math.abs(re.x - ae.x) > 8 && (ct(), Ft = !0, ae = re, pr(-p * 100), Fr(!0));
    Ft && v.cancelable && v.preventDefault();
  }
  function wr() {
    ar = !1, ae = null;
    let v = p;
    if (!Ft)
      return;
    Ft = !1;
    const re = Math.min(512, dt.clientWidth), d = Math.abs(Te - bt), C = Math.min(1, (Date.now() - Wt) / 750);
    d > re / 4 * C && (v += Te > bt ? 1 : -1), v >= o.length ? v = o.length - 1 : v < 0 && (v = 0), v === p ? (e(32, ft = !0), bt = -v * re, pr(-v * 100), gr()) : qt(v, !1, !0);
  }
  function nt(v, re) {
    return v > o.length - 1 ? re === "ring" ? jo(v, o.length) : o.length - 1 : v < 0 ? re === "ring" ? jo(v, o.length) : 0 : v;
  }
  function le() {
    Qt === "slide" && An().then(() => {
      const v = tt == null ? void 0 : tt.querySelector("." + vn.tabs__item_selected);
      v && e(36, ur = {
        left: `${v.offsetLeft}px`,
        width: `${v.offsetWidth}px`,
        height: `${v.offsetHeight}px`
      });
    });
  }
  to(() => {
    le(), $.devtoolCreateHierarchy === "eager" && qt(p, !1, !1);
  }), an(() => {
    T.forEach((v) => {
      v == null || v.destroy();
    }), qe && ($.unregisterInstance(qe), e(60, qe = void 0));
  });
  const Ct = (v, re) => dr(re, v);
  function rr(v) {
    Ir[v ? "unshift" : "push"](() => {
      tt = v, e(21, tt);
    });
  }
  function hr(v) {
    Ir[v ? "unshift" : "push"](() => {
      lt = v, e(23, lt);
    });
  }
  function Sr(v) {
    Ir[v ? "unshift" : "push"](() => {
      dt = v, e(22, dt);
    });
  }
  return t.$$set = (v) => {
    "componentContext" in v && e(0, oe = v.componentContext), "layoutParams" in v && e(1, ye = v.layoutParams);
  }, t.$$.update = () => {
    var v, re, d, C, De, Re, Ot, H, Lt, st;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(66, n = oe.origJson), t.$$.dirty[2] & /*origJson*/
    16 && n && It(), t.$$.dirty[0] & /*componentContext*/
    1 && e(63, o = Array.isArray(oe.json.items) && oe.json.items || []), t.$$.dirty[2] & /*items*/
    2 && e(47, i = o.map((Ue) => {
      var Ye;
      return { json: Ue.div, id: (Ye = Ue.div) == null ? void 0 : Ye.id };
    })), t.$$.dirty[0] & /*componentContext*/
    1 && e(65, s = oe.getJsonWithVars(oe.json.selected_tab)), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(46, a = oe.getDerivedFromVars(oe.json.tab_title_style, void 0, !0))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(45, l = oe.getDerivedFromVars(oe.json.has_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(44, u = oe.getDerivedFromVars(oe.json.separator_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ze(e(43, c = oe.getDerivedFromVars(oe.json.separator_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(42, f = oe.getDerivedFromVars(oe.json.switch_tabs_by_content_swipe_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(41, _ = oe.getDerivedFromVars(oe.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(40, h = oe.getDerivedFromVars(oe.json.title_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && se(e(39, m = oe.getDerivedFromVars(oe.json.tab_title_delimiter))), t.$$.dirty[2] & /*jsonSelectedTab*/
    8 && e(17, p = s && Number(s) || 0), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*items*/
    2)
      if (Array.isArray(o) && o.length) {
        let Ue = [];
        o.forEach((Ye, Ut) => {
          const yr = oe.getJsonWithVars({
            index: Ut,
            title: Ye.title,
            title_click_action: Ye.title_click_action
          });
          yr.title && typeof yr.title == "string" ? Ue.push(yr) : oe.logError(K(new Error("Incorrect title for the tab"), { additional: { index: Ut } }));
        }), Xe.set(Ue);
      } else
        Xe.set([]);
    if (t.$$.dirty[0] & /*$childStore, componentContext*/
    262145 && (G != null && G.length ? e(2, te = !1) : (e(2, te = !0), oe.logError(K(new Error('Incorrect or empty "items" prop for div "tabs"'))))), t.$$.dirty[0] & /*componentContext, childLayoutParams*/
    9) {
      let Ue = { parentContainerOrientation: "horizontal" };
      ((v = oe.json.width) == null ? void 0 : v.type) === "wrap_content" && (Ue.parentHorizontalWrapContent = !0), (!oe.json.height || oe.json.height.type === "wrap_content") && (Ue.parentVerticalWrapContent = !0), e(3, Le = Uo(Ue, Le));
    }
    if (t.$$.dirty[0] & /*hasError, selected, componentContext*/
    131077 | t.$$.dirty[2] & /*items*/
    2 && !te && (p < 0 || p >= o.length) && (oe.logError(K(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: oe.json.selected_tab,
        length: o.length
      }
    })), e(17, p = p < 0 ? 0 : o.length - 1)), t.$$.dirty[0] & /*hasError, $childStore, selected, componentContext*/
    393221 && !te && !G.some((Ue) => p === Ue.index) && (oe.logError(K(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: oe.json.selected_tab
      }
    })), e(17, p = ((re = G[0]) == null ? void 0 : re.index) || 0)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && e(64, k = L || {}), t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(4, ot = Gn(k.font_size, ot)), t.$$.dirty[0] & /*tabFontSize, $direction, tabPaddings*/
    524336 | t.$$.dirty[2] & /*tabStyle*/
    4 && (k.font_size || k.paddings)) {
      const Ue = k.paddings || { top: 6, right: 8, bottom: 6, left: 8 }, Ye = {
        top: (Number(Ue.top) || 0) / ot * 10,
        right: (Number(je === "ltr" ? Ue.end : Ue.start) || Number(Ue.right) || 0) / ot * 10,
        bottom: (Number(Ue.bottom) || 0) / ot * 10,
        left: (Number(je === "ltr" ? Ue.start : Ue.end) || Number(Ue.left) || 0) / ot * 10
      };
      e(5, At = Ps(Ye, je, At));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Ue = k.line_height;
      Ue !== void 0 && Jn(Ue) && e(25, it = ce(Ue / ot * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Ue = k.letter_spacing;
      Ue !== void 0 && Tn(Ue) && e(26, me = ce(Ue / ot * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize, tabBorderRadius*/
    80 | t.$$.dirty[2] & /*tabStyle*/
    4 && (k.corner_radius || k.corners_radius || k.font_size)) {
      const Ue = (d = k.corner_radius) != null ? d : 1e3;
      k.corners_radius ? e(6, ne = db(k.corners_radius, Ue, ot, ne)) : Tn(Ue) && e(6, ne = ce(Ue / ot * 10));
    }
    t.$$.dirty[0] & /*tabActiveFontWeight*/
    128 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(7, at = ai(k.active_font_weight || k.font_weight, void 0, at)), k.font_family && typeof k.font_family == "string" ? e(27, Ve = $.typefaceProvider(k.font_family, { fontWeight: at || 400 })) : e(27, Ve = ""), e(28, D = Si(k.active_font_variation_settings))), t.$$.dirty[0] & /*tabInactiveFontWeight*/
    256 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(8, jt = ai(k.inactive_font_weight || k.font_weight, void 0, jt)), k.font_family && typeof k.font_family == "string" ? e(29, gt = $.typefaceProvider(k.font_family, { fontWeight: jt || 400 })) : e(29, gt = ""), e(30, kt = Si(k.inactive_font_variation_settings))), t.$$.dirty[0] & /*tabActiveTextColor*/
    512 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(9, St = _r(k.active_text_color, 1, St)), t.$$.dirty[0] & /*tabInactiveTextColor*/
    1024 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(10, rt = _r(k.inactive_text_color, 1, rt)), t.$$.dirty[0] & /*tabActiveBackground*/
    2048 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(11, Y = _r(k.active_background_color, 1, Y)), t.$$.dirty[0] & /*tabInactiveBackground*/
    4096 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(12, Vt = _r(k.inactive_background_color, 1, Vt)), t.$$.dirty[0] & /*tabItemSpacing*/
    8192 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(13, Dt = en(k.item_spacing, Dt)), t.$$.dirty[0] & /*$jsonSeparator, $direction*/
    1572864 | t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*$jsonSeparatorColor, $jsonSeparatorPaddings, separatorMargins*/
    1537 && Ze && (be && e(61, Gt = _r(be, 1, Gt)), Ee && e(62, Jt = Ps(Ee, je, Jt))), t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*separatorMargins*/
    1 && e(38, w = {
      background: Gt,
      margin: Jt
    }), t.$$.dirty[2] & /*$jsonSwipeEnabled*/
    256 && e(37, O = typeof W > "u" ? !0 : !!W), t.$$.dirty[0] & /*titlePadding*/
    16384 | t.$$.dirty[2] & /*$jsonTitlePaddings*/
    128 && e(14, ve = Pi(j || void 0, ve)), t.$$.dirty[0] & /*delimitierStyle*/
    32768 | t.$$.dirty[2] & /*$jsonDelimiterStyle*/
    64 && e(15, er = fb(P, er)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && ((L == null ? void 0 : L.animation_type) === "fade" || (L == null ? void 0 : L.animation_type) === "none") && e(16, Qt = L.animation_type), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && Tn(L == null ? void 0 : L.animation_duration) && e(35, Xt = L.animation_duration), t.$$.dirty[2] & /*items*/
    2 && ut(o), t.$$.dirty[0] & /*componentContext, hasError, selected*/
    131077 | t.$$.dirty[1] & /*prevId*/
    536870912 | t.$$.dirty[2] & /*items*/
    2 && oe.json && (qe && ($.unregisterInstance(qe), e(60, qe = void 0)), oe.id && !te && !oe.fakeElement && (e(60, qe = oe.id), $.registerInstance(qe, {
      setCurrentItem(Ue, Ye) {
        if (Ue < 0 || Ue > o.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        qt(Ue, !1, Ye);
      },
      setPreviousItem(Ue, Ye, Ut) {
        let yr = nt(p - Ue, Ye);
        qt(yr, !1, Ut);
      },
      setNextItem(Ue, Ye, Ut) {
        let yr = nt(p + Ue, Ye);
        qt(yr, !1, Ut);
      },
      scrollToStart(Ue) {
        qt(0, !1, Ue);
      },
      scrollToEnd(Ue) {
        qt(o.length - 1, !1, Ue);
      },
      scrollCombined({ step: Ue, overflow: Ye, animated: Ut }) {
        Ue && qt(nt(p + Ue, Ye || "clamp"), !1, Ut || !0);
      }
    }))), t.$$.dirty[0] & /*componentContext, selected, animationType*/
    196609 | t.$$.dirty[2] & /*items*/
    2 && e(24, wt = {
      "height-parent": ((C = oe.json.height) == null ? void 0 : C.type) === "match_parent" ? "yes" : "",
      "own-height": (((De = oe.json.height) == null ? void 0 : De.type) === "match_parent" || ((Re = oe.json.height) == null ? void 0 : Re.type) === "fixed") && !(((Lt = (H = (Ot = o[p]) == null ? void 0 : Ot.div) == null ? void 0 : H.height) == null ? void 0 : Lt.type) === "wrap_content" && ((st = o[p].div) != null && st.height.constrained)),
      animation: Qt
    });
  }, [
    oe,
    ye,
    te,
    Le,
    ot,
    At,
    ne,
    at,
    jt,
    St,
    rt,
    Y,
    Vt,
    Dt,
    ve,
    er,
    Qt,
    p,
    G,
    je,
    Ze,
    tt,
    dt,
    lt,
    wt,
    it,
    me,
    Ve,
    D,
    gt,
    kt,
    We,
    ft,
    T,
    Oe,
    Xt,
    ur,
    O,
    w,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    i,
    _e,
    Ae,
    xe,
    Xe,
    Yt,
    Tt,
    dr,
    $e,
    Mt,
    br,
    wr,
    le,
    qe,
    Gt,
    Jt,
    o,
    k,
    s,
    n,
    L,
    P,
    j,
    W,
    Ee,
    be,
    Ct,
    rr,
    hr,
    Sr
  ];
}
class jb extends Lr {
  constructor(r) {
    super(), Or(this, r, vb, kb, Ar, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const Cb = "appkit-state", Eb = "appkit-state_overflow_visible", Ab = "appkit-state__animations", ui = {
  state: Cb,
  state_overflow_visible: Eb,
  state__animations: Ab,
  "state__animation-child": "appkit-state__animation-child",
  "state__animation-child-inner": "appkit-state__animation-child-inner"
};
function sl(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function Sb(t) {
  return t * t * t;
}
function Ld(t) {
  const r = t - 1;
  return r * r * r + 1;
}
function Bd(t) {
  return (r) => {
    if (r <= 0)
      return 0;
    if (r >= 1)
      return 1;
    const e = r * t.length, n = Math.floor(e), o = t[n], i = t[n + 1], s = e - n;
    return o * s + i * (1 - s);
  };
}
const Vb = [
  21e-4,
  45e-4,
  71e-4,
  0.01,
  0.0131,
  0.0165,
  0.0202,
  0.0242,
  0.0284,
  0.033,
  0.0378,
  0.0429,
  0.0483,
  0.054,
  0.0601,
  0.0664,
  0.0731,
  0.08,
  0.0872,
  0.0948,
  0.1026,
  0.1108,
  0.1192,
  0.1279,
  0.1369,
  0.1461,
  0.1556,
  0.1653,
  0.1753,
  0.1855,
  0.1958,
  0.2064,
  0.2171,
  0.2279,
  0.2389,
  0.25,
  0.2612,
  0.2725,
  0.2839,
  0.2952,
  0.3067,
  0.3181,
  0.3295,
  0.341,
  0.3524,
  0.3637,
  0.375,
  0.3863,
  0.3974,
  0.4085,
  0.4195,
  0.4304,
  0.4412,
  0.4519,
  0.4624,
  0.4729,
  0.4832,
  0.4934,
  0.5034,
  0.5133,
  0.5231,
  0.5327,
  0.5422,
  0.5516,
  0.5608,
  0.5699,
  0.5788,
  0.5876,
  0.5963,
  0.6048,
  0.6132,
  0.6214,
  0.6295,
  0.6375,
  0.6453,
  0.653,
  0.6606,
  0.668,
  0.6754,
  0.6825,
  0.6896,
  0.6965,
  0.7034,
  0.7101,
  0.7166,
  0.7231,
  0.7295,
  0.7357,
  0.7418,
  0.7479,
  0.7538,
  0.7596,
  0.7653,
  0.7709,
  0.7764,
  0.7818,
  0.7871,
  0.7923,
  0.7974,
  0.8024,
  0.8073,
  0.8122,
  0.8169,
  0.8216,
  0.8261,
  0.8306,
  0.835,
  0.8394,
  0.8436,
  0.8478,
  0.8518,
  0.8558,
  0.8598,
  0.8636,
  0.8674,
  0.8711,
  0.8747,
  0.8783,
  0.8818,
  0.8852,
  0.8886,
  0.8919,
  0.8951,
  0.8983,
  0.9014,
  0.9044,
  0.9074,
  0.9103,
  0.9131,
  0.9159,
  0.9187,
  0.9213,
  0.924,
  0.9265,
  0.929,
  0.9315,
  0.9339,
  0.9362,
  0.9385,
  0.9408,
  0.943,
  0.9451,
  0.9472,
  0.9492,
  0.9512,
  0.9532,
  0.9551,
  0.9569,
  0.9587,
  0.9605,
  0.9622,
  0.9638,
  0.9655,
  0.967,
  0.9686,
  0.9701,
  0.9715,
  0.9729,
  0.9743,
  0.9756,
  0.9769,
  0.9782,
  0.9794,
  0.9805,
  0.9817,
  0.9828,
  0.9838,
  0.9848,
  0.9858,
  0.9868,
  0.9877,
  0.9886,
  0.9894,
  0.9902,
  0.991,
  0.9917,
  0.9924,
  0.9931,
  0.9937,
  0.9943,
  0.9949,
  0.9954,
  0.9959,
  0.9964,
  0.9969,
  0.9973,
  0.9977,
  0.998,
  0.9983,
  0.9986,
  0.9989,
  0.9991,
  0.9993,
  0.9995,
  0.9997,
  0.9998,
  0.9999,
  0.9999,
  1,
  1
], Fb = Bd(Vb), Ib = [
  5e-4,
  2e-3,
  45e-4,
  78e-4,
  0.0119,
  0.0168,
  0.0224,
  0.0286,
  0.0355,
  0.0429,
  0.0508,
  0.0592,
  0.0681,
  0.0774,
  0.087,
  0.0969,
  0.1072,
  0.1177,
  0.1285,
  0.1395,
  0.1507,
  0.1621,
  0.1736,
  0.1853,
  0.197,
  0.2089,
  0.2208,
  0.2328,
  0.2448,
  0.2569,
  0.2689,
  0.281,
  0.293,
  0.305,
  0.317,
  0.3289,
  0.3408,
  0.3526,
  0.3644,
  0.376,
  0.3876,
  0.3991,
  0.4105,
  0.4218,
  0.433,
  0.444,
  0.455,
  0.4658,
  0.4765,
  0.4871,
  0.4975,
  0.5078,
  0.518,
  0.528,
  0.5379,
  0.5477,
  0.5573,
  0.5668,
  0.5761,
  0.5853,
  0.5944,
  0.6033,
  0.612,
  0.6206,
  0.6291,
  0.6374,
  0.6456,
  0.6537,
  0.6616,
  0.6693,
  0.677,
  0.6845,
  0.6918,
  0.699,
  0.7061,
  0.713,
  0.7199,
  0.7265,
  0.7331,
  0.7395,
  0.7458,
  0.752,
  0.758,
  0.764,
  0.7698,
  0.7755,
  0.781,
  0.7865,
  0.7918,
  0.7971,
  0.8022,
  0.8072,
  0.8121,
  0.8169,
  0.8216,
  0.8262,
  0.8307,
  0.8351,
  0.8394,
  0.8436,
  0.8477,
  0.8517,
  0.8557,
  0.8595,
  0.8633,
  0.8669,
  0.8705,
  0.874,
  0.8775,
  0.8808,
  0.8841,
  0.8873,
  0.8904,
  0.8934,
  0.8964,
  0.8993,
  0.9022,
  0.9049,
  0.9076,
  0.9103,
  0.9129,
  0.9154,
  0.9178,
  0.9202,
  0.9226,
  0.9249,
  0.9271,
  0.9293,
  0.9314,
  0.9335,
  0.9355,
  0.9375,
  0.9394,
  0.9413,
  0.9431,
  0.9449,
  0.9466,
  0.9483,
  0.95,
  0.9516,
  0.9532,
  0.9547,
  0.9562,
  0.9576,
  0.9591,
  0.9605,
  0.9618,
  0.9631,
  0.9644,
  0.9657,
  0.9669,
  0.9681,
  0.9692,
  0.9703,
  0.9714,
  0.9725,
  0.9736,
  0.9746,
  0.9756,
  0.9765,
  0.9775,
  0.9784,
  0.9793,
  0.9802,
  0.981,
  0.9818,
  0.9826,
  0.9834,
  0.9842,
  0.9849,
  0.9856,
  0.9863,
  0.987,
  0.9877,
  0.9883,
  0.989,
  0.9896,
  0.9902,
  0.9908,
  0.9913,
  0.9919,
  0.9924,
  0.993,
  0.9935,
  0.994,
  0.9944,
  0.9949,
  0.9954,
  0.9958,
  0.9963,
  0.9967,
  0.9971,
  0.9975,
  0.9979,
  0.9983,
  0.9986,
  0.999,
  0.9993,
  0.9997,
  1
], Db = Bd(Ib), Ul = {
  linear: Js,
  ease: Fb,
  ease_in: Sb,
  ease_out: Ld,
  ease_in_out: sl,
  spring: Db
};
function fa(t) {
  return Ul[t];
}
const Hd = 200, Wd = 0, Tb = 0, Mb = 0;
function yc(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || Hd) + (Number(r.start_delay) || Wd)
  ));
}
function Pb(t, {
  transitions: r,
  elementBbox: e,
  rootBbox: n,
  direction: o,
  maxDuration: i,
  alpha: s
}) {
  const a = s != null ? s : 1;
  return {
    duration: Ai() ? 0 : i,
    css: (l) => {
      const u = l * i, c = r.map((w) => {
        var Z, se, j;
        const O = Number(w.start_delay) || Wd, G = Number(w.duration) || Hd, L = Math.max(0, Math.min(1, (u - O) / G)), ee = o === "in" ? 1 - L : L, P = (fa(w.interpolator || "ease_in_out") || sl)(ee);
        if (w.type === "fade")
          return P >= 1 ? {
            active: !1,
            opacity: 0
          } : {
            active: P > 0 && P < 1,
            opacity: (1 - P) * a + P * (w.alpha || Tb)
          };
        if (w.type === "slide") {
          const z = w.edge === "top" || w.edge === "left" ? -1 : 1, N = w.edge === "top" || w.edge === "bottom" || !w.edge ? "translateY" : "translateX";
          let W = (Z = w.distance) == null ? void 0 : Z.value;
          W === void 0 && (w.edge === "top" || w.edge === "bottom" || !w.edge ? W = Math.abs(
            n[w.edge === "bottom" ? "bottom" : "top"] - e[w.edge === "bottom" ? "top" : "bottom"]
          ) : W = Math.abs(
            n[w.edge === "left" ? "left" : "right"] - e[w.edge === "left" ? "right" : "left"]
          ));
          const ie = W * P;
          return {
            active: P > 0 && P < 1,
            translate: `${N}(${ie * z}px)`
          };
        } else if (w.type === "scale") {
          const z = 1 - P + P * (w.scale || Mb), N = (se = w.pivot_x) != null ? se : 0.5, W = (j = w.pivot_y) != null ? j : 0.5, ie = (1 - z) * e.width * N, de = (1 - z) * e.height * W;
          return {
            active: P > 0 && P < 1,
            scale: `translate(${ie}px, ${de}px) scale(${z})`
          };
        }
        return {};
      }), f = c.map((w) => w.opacity).filter((w) => w !== void 0).reduce((w, O) => w * O, 1), _ = c.map((w) => w.translate).filter((w) => w !== void 0).join(" "), h = c.map((w) => w.scale).filter((w) => w !== void 0).join(" "), m = c.filter((w) => w.active).map((w) => w.scale).filter((w) => w !== void 0), p = m.length ? m[m.length - 1] : h;
      return `transform:${[_, p].filter(Boolean).join(" ") || "none"};opacity:${f}`;
    }
  };
}
function zo(t, r, e) {
  return t * (1 - e) + r * e;
}
const Nb = 200, zb = 0;
function Rb(t, {
  rootBbox: r,
  beforeBbox: e,
  afterBbox: n,
  transition: o
}) {
  var i, s;
  return {
    delay: (i = o.start_delay) != null ? i : zb,
    duration: Ai() ? 0 : (s = o.duration) != null ? s : Nb,
    easing: o.interpolator && o.interpolator in Ul ? Ul[o.interpolator] : sl,
    css: (a) => [
      `top:${zo(e.top, n.top, a) - r.top}px`,
      `left:${zo(e.left, n.left, a) - r.left}px`,
      `width:${zo(e.width, n.width, a)}px`,
      `height:${zo(e.height, n.height, a)}px`
    ].join(";")
  };
}
function Ud(t) {
  const r = [];
  return t.type === "set" ? (t.items || []).forEach((e) => {
    r.push(...Ud(e));
  }) : r.push(t), r;
}
const { Map: Ob } = Io;
function wc(t, r, e) {
  const n = t.slice();
  return n[37] = r[e], n;
}
function kc(t, r, e) {
  const n = t.slice();
  return n[40] = r[e], n;
}
function Lb(t) {
  let r, e;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Bb(t) {
  let r, e;
  const n = [
    {
      cls: ht(
        "state",
        ui,
        /*mods*/
        t[8]
      )
    },
    {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    },
    { layoutParams: (
      /*layoutParams*/
      t[1]
    ) },
    { parentOf: (
      /*parentOfItems*/
      t[9]
    ) },
    { parentOfSimpleMode: !0 },
    { replaceItems: (
      /*replaceItems*/
      t[12]
    ) },
    /*devapi*/
    t[11]
  ];
  let o = {
    $$slots: { default: [Ub] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = bo(o, n[i]);
  return r = new yn({ props: o }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(i, s) {
      zt(r, i, s), e = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams, parentOfItems, replaceItems, devapi*/
      6915 ? Do(n, [
        s[0] & /*mods*/
        256 && {
          cls: ht(
            "state",
            ui,
            /*mods*/
            i[8]
          )
        },
        s[0] & /*componentContext*/
        1 && {
          componentContext: (
            /*componentContext*/
            i[0]
          )
        },
        s[0] & /*layoutParams*/
        2 && { layoutParams: (
          /*layoutParams*/
          i[1]
        ) },
        s[0] & /*parentOfItems*/
        512 && { parentOf: (
          /*parentOfItems*/
          i[9]
        ) },
        n[4],
        s[0] & /*replaceItems*/
        4096 && { replaceItems: (
          /*replaceItems*/
          i[12]
        ) },
        s[0] & /*devapi*/
        2048 && gd(
          /*devapi*/
          i[11]
        )
      ]) : {};
      s[0] & /*animationRoot, animationList, selectedId, selectedComponentContext, childContexts*/
      248 | s[1] & /*$$scope*/
      4096 && (a.$$scope = { dirty: s, ctx: i }), r.$set(a);
    },
    i(i) {
      e || (B(r.$$.fragment, i), e = !0);
    },
    o(i) {
      Q(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Rt(r, i);
    }
  };
}
function vc(t) {
  let r, e, n = nr(
    /*childContexts*/
    t[7]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Cc(kc(t, n, s));
  const i = (s) => Q(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = Kt();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      q(s, r, a), e = !0;
    },
    p(s, a) {
      if (a[0] & /*childContexts, selectedComponentContext*/
      192) {
        n = nr(
          /*childContexts*/
          s[7]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = kc(s, n, l);
          o[l] ? (o[l].p(u, a), B(o[l], 1)) : (o[l] = Cc(u), o[l].c(), B(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (or(), l = n.length; l < o.length; l += 1)
          i(l);
        ir();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          B(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        Q(o[a]);
      e = !1;
    },
    d(s) {
      s && J(r), nn(o, s);
    }
  };
}
function jc(t) {
  let r, e, n, o;
  return e = new qn({
    props: { componentContext: (
      /*context*/
      t[40]
    ) }
  }), {
    c() {
      r = Se("div"), Bt(e.$$.fragment), n = lr(), r.hidden = !0, g(r, "data-hidden", "true");
    },
    m(i, s) {
      q(i, r, s), zt(e, r, null), pt(r, n), o = !0;
    },
    p(i, s) {
      const a = {};
      s[0] & /*childContexts*/
      128 && (a.componentContext = /*context*/
      i[40]), e.$set(a);
    },
    i(i) {
      o || (B(e.$$.fragment, i), o = !0);
    },
    o(i) {
      Q(e.$$.fragment, i), o = !1;
    },
    d(i) {
      i && J(r), Rt(e);
    }
  };
}
function Cc(t) {
  let r, e, n = (
    /*context*/
    t[40] && /*context*/
    t[40] !== /*selectedComponentContext*/
    t[6] && jc(t)
  );
  return {
    c() {
      n && n.c(), r = Kt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, i) {
      /*context*/
      o[40] && /*context*/
      o[40] !== /*selectedComponentContext*/
      o[6] ? n ? (n.p(o, i), i[0] & /*childContexts, selectedComponentContext*/
      192 && B(n, 1)) : (n = jc(o), n.c(), B(n, 1), n.m(r.parentNode, r)) : n && (or(), Q(n, 1, 1, () => {
        n = null;
      }), ir());
    },
    i(o) {
      e || (B(n), e = !0);
    },
    o(o) {
      Q(n), e = !1;
    },
    d(o) {
      o && J(r), n && n.d(o);
    }
  };
}
function Ec(t) {
  let r = (
    /*selectedId*/
    t[5]
  ), e, n, o = Ac(t);
  return {
    c() {
      o.c(), e = Kt();
    },
    m(i, s) {
      o.m(i, s), q(i, e, s), n = !0;
    },
    p(i, s) {
      s[0] & /*selectedId*/
      32 && Ar(r, r = /*selectedId*/
      i[5]) ? (or(), Q(o, 1, 1, A), ir(), o = Ac(i), o.c(), B(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
    },
    i(i) {
      n || (B(o), n = !0);
    },
    o(i) {
      Q(o), n = !1;
    },
    d(i) {
      i && J(e), o.d(i);
    }
  };
}
function Ac(t) {
  let r, e;
  return r = new qn({
    props: {
      componentContext: (
        /*selectedComponentContext*/
        t[6]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*selectedComponentContext*/
      64 && (i.componentContext = /*selectedComponentContext*/
      n[6]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Hb(t) {
  let r, e, n, o, i, s, a, l;
  n = new qn({
    props: {
      componentContext: (
        /*item*/
        t[37].componentContextCopy
      )
    }
  });
  function u() {
    return (
      /*introend_handler_1*/
      t[22](
        /*item*/
        t[37]
      )
    );
  }
  return {
    c() {
      r = Se("div"), e = Se("div"), Bt(n.$$.fragment), o = lr(), g(e, "class", ui["state__animation-child-inner"]), g(r, "class", ui["state__animation-child"]);
    },
    m(c, f) {
      q(c, r, f), pt(r, e), zt(n, e, null), pt(r, o), s = !0, a || (l = He(r, "introend", u), a = !0);
    },
    p(c, f) {
      t = c;
      const _ = {};
      f[0] & /*animationList*/
      16 && (_.componentContext = /*item*/
      t[37].componentContextCopy), n.$set(_);
    },
    i(c) {
      s || (B(n.$$.fragment, c), i || eo(() => {
        i = xs(
          r,
          Rb,
          /*item*/
          t[37]
        ), i.start();
      }), s = !0);
    },
    o(c) {
      Q(n.$$.fragment, c), s = !1;
    },
    d(c) {
      c && J(r), Rt(n), a = !1, l();
    }
  };
}
function Wb(t) {
  let r, e, n, o, i, s = `${/*item*/
  t[37].offsetLeft}px`, a = `${/*item*/
  t[37].offsetTop}px`, l = `${/*item*/
  t[37].width}px`, u = `${/*item*/
  t[37].height}px`, c, f, _;
  n = new qn({
    props: {
      componentContext: (
        /*item*/
        t[37].componentContextCopy
      )
    }
  });
  function h() {
    return (
      /*introend_handler*/
      t[21](
        /*item*/
        t[37]
      )
    );
  }
  return {
    c() {
      r = Se("div"), e = Se("div"), Bt(n.$$.fragment), o = lr(), g(e, "class", ui["state__animation-child-inner"]), g(r, "class", ui["state__animation-child"]), M(r, "left", s), M(r, "top", a), M(r, "width", l), M(r, "height", u);
    },
    m(m, p) {
      q(m, r, p), pt(r, e), zt(n, e, null), pt(r, o), c = !0, f || (_ = He(r, "introend", h), f = !0);
    },
    p(m, p) {
      t = m;
      const k = {};
      p[0] & /*animationList*/
      16 && (k.componentContext = /*item*/
      t[37].componentContextCopy), n.$set(k), p[0] & /*animationList*/
      16 && s !== (s = `${/*item*/
      t[37].offsetLeft}px`) && M(r, "left", s), p[0] & /*animationList*/
      16 && a !== (a = `${/*item*/
      t[37].offsetTop}px`) && M(r, "top", a), p[0] & /*animationList*/
      16 && l !== (l = `${/*item*/
      t[37].width}px`) && M(r, "width", l), p[0] & /*animationList*/
      16 && u !== (u = `${/*item*/
      t[37].height}px`) && M(r, "height", u);
    },
    i(m) {
      c || (B(n.$$.fragment, m), i || eo(() => {
        i = xs(
          r,
          Pb,
          /*item*/
          t[37]
        ), i.start();
      }), c = !0);
    },
    o(m) {
      Q(n.$$.fragment, m), c = !1;
    },
    d(m) {
      m && J(r), Rt(n), f = !1, _();
    }
  };
}
function Sc(t, r) {
  let e, n, o, i, s;
  const a = [Wb, Hb], l = [];
  function u(c, f) {
    return "direction" in /*item*/
    c[37] ? 0 : 1;
  }
  return n = u(r), o = l[n] = a[n](r), {
    key: t,
    first: null,
    c() {
      e = Kt(), o.c(), i = Kt(), this.first = e;
    },
    m(c, f) {
      q(c, e, f), l[n].m(c, f), q(c, i, f), s = !0;
    },
    p(c, f) {
      r = c;
      let _ = n;
      n = u(r), n === _ ? l[n].p(r, f) : (or(), Q(l[_], 1, 1, () => {
        l[_] = null;
      }), ir(), o = l[n], o ? o.p(r, f) : (o = l[n] = a[n](r), o.c()), B(o, 1), o.m(i.parentNode, i));
    },
    i(c) {
      s || (B(o), s = !0);
    },
    o(c) {
      Q(o), s = !1;
    },
    d(c) {
      c && (J(e), J(i)), l[n].d(c);
    }
  };
}
function Ub(t) {
  let r, e, n, o = [], i = new Ob(), s, a = (
    /*childContexts*/
    t[7] && vc(t)
  ), l = (
    /*selectedComponentContext*/
    t[6] && Ec(t)
  ), u = nr(
    /*animationList*/
    t[4]
  );
  const c = (f) => (
    /*item*/
    f[37]
  );
  for (let f = 0; f < u.length; f += 1) {
    let _ = wc(t, u, f), h = c(_);
    i.set(h, o[f] = Sc(h, _));
  }
  return {
    c() {
      a && a.c(), r = lr(), l && l.c(), e = lr(), n = Se("div");
      for (let f = 0; f < o.length; f += 1)
        o[f].c();
      g(n, "class", ui.state__animations), g(n, "aria-hidden", "true");
    },
    m(f, _) {
      a && a.m(f, _), q(f, r, _), l && l.m(f, _), q(f, e, _), q(f, n, _);
      for (let h = 0; h < o.length; h += 1)
        o[h] && o[h].m(n, null);
      t[23](n), s = !0;
    },
    p(f, _) {
      /*childContexts*/
      f[7] ? a ? (a.p(f, _), _[0] & /*childContexts*/
      128 && B(a, 1)) : (a = vc(f), a.c(), B(a, 1), a.m(r.parentNode, r)) : a && (or(), Q(a, 1, 1, () => {
        a = null;
      }), ir()), /*selectedComponentContext*/
      f[6] ? l ? (l.p(f, _), _[0] & /*selectedComponentContext*/
      64 && B(l, 1)) : (l = Ec(f), l.c(), B(l, 1), l.m(e.parentNode, e)) : l && (or(), Q(l, 1, 1, () => {
        l = null;
      }), ir()), _[0] & /*animationList, onOutro*/
      8208 && (u = nr(
        /*animationList*/
        f[4]
      ), or(), o = pd(o, _, c, 1, f, u, i, n, _d, Sc, null, wc), ir());
    },
    i(f) {
      if (!s) {
        B(a), B(l);
        for (let _ = 0; _ < u.length; _ += 1)
          B(o[_]);
        s = !0;
      }
    },
    o(f) {
      Q(a), Q(l);
      for (let _ = 0; _ < o.length; _ += 1)
        Q(o[_]);
      s = !1;
    },
    d(f) {
      f && (J(r), J(e), J(n)), a && a.d(f), l && l.d(f);
      for (let _ = 0; _ < o.length; _ += 1)
        o[_].d();
      t[23](null);
    }
  };
}
function Gb(t) {
  let r, e, n, o;
  const i = [Bb, Lb], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (or(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ir()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (B(e), o = !0);
    },
    o(l) {
      Q(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Jb(t) {
  return t.some((r) => r.type === "fade");
}
function Gd(t) {
  return t.type === "change_bounds" ? t : t.type === "set" ? Gd(t.items[0]) : null;
}
function qb(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h = A, m = () => (h(), h = F(i, (_e) => e(20, _ = _e)), i);
  t.$$.on_destroy.push(() => h());
  let { componentContext: p } = r, { layoutParams: k = void 0 } = r;
  const w = Dr(Yr);
  let O = !1, G, L = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Set(), fe = [], P = [], Z = [], se = [], j, z, N, W, ie = !1, de = {
    devapi: {
      getState() {
        return z;
      },
      setState(_e) {
        return be(_e);
      }
    }
  };
  function je() {
    e(15, ie = !1);
  }
  function Ee(_e) {
    W ? e(6, N = W[u.findIndex((Ie) => Ie.state_id === (_e == null ? void 0 : _e.state_id))]) : (N && N.destroy(), e(6, N = _e != null && _e.div ? p.produceChildContext(_e.div, {
      path: _e.state_id || "<unknown>"
    }) : void 0));
  }
  function pe(_e) {
    const Ie = p.json.states;
    if (!Ie)
      return;
    const ue = /* @__PURE__ */ new Set();
    e(16, u = Ie.map((oe, ye) => (u[ye].div !== _e[ye] && oe.state_id && ue.add(oe.state_id), { ...oe, div: _e[ye] }))), e(0, p.json = { ...p.json, states: u }, p), z && ue.has(z) && Ee(u.find((oe) => oe.state_id === z) || null);
  }
  function ze(_e, Ie, ue) {
    let { json: oe, parentComponentContext: ye, transitions: $, node: Ae } = Ie;
    oe = p.getJsonWithVars(oe), $ = p.getJsonWithVars($);
    const xe = Ud($), qe = Ie.bbox || Ae.getBoundingClientRect(), te = {
      ...oe,
      margins: void 0,
      alpha: Jb(xe) ? void 0 : oe.alpha
    };
    return {
      id: ye.id || "",
      json: te,
      componentContextCopy: ye.produceChildContext(te, { fake: lu }),
      elementBbox: qe,
      rootBbox: _e,
      transitions: xe,
      alpha: oe.alpha,
      width: qe.width,
      height: qe.height,
      offsetTop: qe.top - _e.top,
      offsetLeft: qe.left - _e.left,
      direction: ue,
      resolvePromise: Ie.resolvePromise,
      node: Ie.node
    };
  }
  async function be(_e) {
    if (z === _e)
      return p;
    w.setRunning("stateChange", !0);
    const Ie = new Set(ee);
    fe.forEach((te) => {
      te.resolvePromise && te.resolvePromise();
    }), e(4, fe = []);
    let ue = [];
    if (G) {
      const te = G.getBoundingClientRect();
      ue = Z.map((Xe) => ze(te, Xe, "out"));
    }
    se.forEach((te) => {
      te.transitions && L.set(te.id, {
        transitions: te.transitions,
        rect: te.node.getBoundingClientRect()
      });
    }), P = [], Z = [], se = [];
    const oe = u.find((te) => te.state_id === _e) || null;
    if (oe ? (e(5, z = _e), a == null || a.setValue(z), Ee(oe)) : p.logError(K(new Error("Cannot find state with id"), { additional: { stateId: _e } })), await An(), !G)
      return;
    const ye = G.getBoundingClientRect();
    let $ = P.filter((te) => {
      var Xe;
      return te.parentComponentContext.id && !Ie.has(te.parentComponentContext.id) ? !0 : ((Xe = te.resolvePromise) == null || Xe.call(te), !1);
    }).map((te) => ze(ye, te, "in"));
    ue = ue.filter((te) => {
      var Xe;
      return te.id && !ee.has(te.id) ? !0 : ((Xe = te.resolvePromise) == null || Xe.call(te), !1);
    });
    const Ae = ue.concat($), xe = Ae.reduce(
      (te, Xe) => Math.max(te, yc(Xe.transitions)),
      0
    ), qe = se.filter((te) => L.has(te.id)).map((te) => {
      const Xe = {
        ...te.json,
        margins: void 0,
        width: { type: "match_parent" },
        height: { type: "match_parent" }
      }, Le = L.get(te.id);
      return {
        id: te.parentComponentContext.id || "",
        json: Xe,
        componentContextCopy: te.parentComponentContext.produceChildContext(Xe, { fake: lu }),
        rootBbox: ye,
        beforeBbox: Le.rect,
        afterBbox: te.node.getBoundingClientRect(),
        node: te.node,
        transition: p.getJsonWithVars(Gd(Le.transitions)),
        resolvePromise: te.resolvePromise
      };
    });
    return e(4, fe = [
      ...Ae.map((te) => ({ ...te, maxDuration: xe })),
      ...qe
    ]), L.clear(), w.setRunning("stateChange", !1), p;
  }
  ni(sa, {
    // eslint-disable-next-line max-params
    runVisibilityTransition(_e, Ie, ue, oe, ye, $) {
      if (!G)
        return Promise.resolve();
      const Ae = G.getBoundingClientRect(), xe = ze(
        Ae,
        {
          json: _e,
          parentComponentContext: Ie,
          transitions: ue,
          node: oe,
          bbox: $
        },
        ye
      ), qe = yc(xe.transitions), te = { ...xe, maxDuration: qe };
      return e(4, fe = [...fe.filter((Xe) => Xe.node !== xe.node), te]), new Promise((Xe) => {
        te.resolvePromise = Xe;
      });
    },
    registerChildWithTransitionIn(_e, Ie, ue, oe) {
      const ye = {
        json: _e,
        parentComponentContext: Ie,
        transitions: ue,
        node: oe
      };
      return P.push(ye), new Promise(($) => {
        ye.resolvePromise = $;
      });
    },
    registerChildWithTransitionOut(_e, Ie, ue, oe) {
      const ye = {
        json: _e,
        parentComponentContext: Ie,
        transitions: ue,
        node: oe
      };
      return Z.push(ye), new Promise(($) => {
        ye.resolvePromise = $;
      });
    },
    registerChildWithTransitionChange(_e, Ie, ue, oe) {
      const ye = Ie.id;
      if (!ye)
        return Promise.resolve();
      const $ = {
        id: ye,
        json: _e,
        parentComponentContext: Ie,
        transitions: ue,
        node: oe
      };
      return se.push($), new Promise((Ae) => {
        $.resolvePromise = Ae;
      });
    },
    hasTransitionChange(_e) {
      return _e ? L.has(_e) : !1;
    },
    registerChild(_e) {
      ee.add(_e);
    },
    unregisterChild(_e) {
      ee.delete(_e);
    }
  });
  function Fe(_e) {
    if (!ie && (e(15, ie = !0), _e.length)) {
      w.devtoolCreateHierarchy === "eager" && e(7, W = _e.map((ue) => ue != null && ue.div ? p.produceChildContext(ue.div, { path: ue.state_id || "<unknown>" }) : void 0));
      const Ie = (a == null ? void 0 : a.getValue()) || o;
      if (Ie) {
        e(5, z = Ie);
        const ue = _e.find((oe) => oe.state_id === z) || null;
        Ee(ue), ue || p.logError(K(new Error("Cannot find state for default_state_id"), { additional: { selectedId: z } }));
      } else {
        const ue = _e[0];
        e(5, z = ue.state_id), Ee(ue);
      }
      a && (a.setValue(z), a.subscribe((ue) => {
        be(ue);
      }));
    }
  }
  function Ge(_e) {
    e(4, fe = fe.filter((Ie) => Ie !== _e)), _e.resolvePromise && _e.resolvePromise();
  }
  an(() => {
    W ? W.forEach((_e) => {
      _e == null || _e.destroy();
    }) : N && N.destroy(), j && (j(), e(14, j = void 0));
  });
  const Ze = (_e) => Ge(_e), ke = (_e) => Ge(_e);
  function et(_e) {
    Ir[_e ? "unshift" : "push"](() => {
      G = _e, e(3, G);
    });
  }
  return t.$$set = (_e) => {
    "componentContext" in _e && e(0, p = _e.componentContext), "layoutParams" in _e && e(1, k = _e.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*componentContext*/
    1 && e(17, n = p.json.div_id || p.id), t.$$.dirty[0] & /*componentContext*/
    1 && (o = p.getJsonWithVars(p.json.default_state_id)), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(10, i = p.getDerivedFromVars(p.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, s = p.json.state_id_variable), t.$$.dirty[0] & /*stateVariableName, componentContext*/
    524289 && (a = s ? p.getVariable(s, "string") || w.awaitGlobalVariable(s, "string", "") : null), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, l = p.origJson), t.$$.dirty[0] & /*origJson*/
    262144 && l && je(), t.$$.dirty[0] & /*stateId, componentContext*/
    131073 && (n ? e(2, O = !1) : (e(2, O = !0), p.logError(K(new Error('Missing "id" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext*/
    1 && p.json && (ee = /* @__PURE__ */ new Set()), t.$$.dirty[0] & /*componentContext*/
    1 && e(16, u = Array.isArray(p.json.states) && p.json.states || []), t.$$.dirty[0] & /*items*/
    65536 && e(9, c = u.map((_e) => {
      var Ie;
      return { json: _e.div, id: (Ie = _e.div) == null ? void 0 : Ie.id };
    })), t.$$.dirty[0] & /*items, componentContext*/
    65537 && (u != null && u.length ? e(2, O = !1) : (e(2, O = !0), p.logError(K(new Error('Empty "states" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext, stateUnregister, stateId*/
    147457 && p.json && (j && (j(), e(14, j = void 0)), n && !(p != null && p.fakeElement) && e(14, j = p.registerState(n, be))), t.$$.dirty[0] & /*inited, items*/
    98304 && !ie && Fe(u), t.$$.dirty[0] & /*$jsonClipToBounds*/
    1048576 && e(8, f = {
      overflow: _ === !1 || _ === 0 ? "visible" : void 0
    });
  }, [
    p,
    k,
    O,
    G,
    fe,
    z,
    N,
    W,
    f,
    c,
    i,
    de,
    pe,
    Ge,
    j,
    ie,
    u,
    n,
    l,
    s,
    _,
    Ze,
    ke,
    et
  ];
}
class Yb extends Lr {
  constructor(r) {
    super(), Or(this, r, qb, Gb, Ar, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Kb = "appkit-pager", Xb = "appkit-pager__items", Zb = "appkit-pager_animated", Qb = "appkit-pager__item", xb = "appkit-pager_clip", $b = "appkit-pager_orientation_horizontal", ey = "appkit-pager_orientation_vertical", ty = "appkit-pager__item_height_content", ry = "appkit-pager__item_height_fixed", ny = "appkit-pager__item_width_content", oy = "appkit-pager__item_width_fixed", iy = "appkit-pager__arrow", Vo = {
  pager: Kb,
  pager__items: Xb,
  pager_animated: Zb,
  pager__item: Qb,
  "pager_scroll-align_start": "appkit-pager_scroll-align_start",
  "pager_scroll-align_center": "appkit-pager_scroll-align_center",
  "pager_scroll-align_end": "appkit-pager_scroll-align_end",
  pager_clip: xb,
  pager_orientation_horizontal: $b,
  pager_orientation_vertical: ey,
  "pager_cross-align_center": "appkit-pager_cross-align_center",
  "pager_cross-align_end": "appkit-pager_cross-align_end",
  pager__item_height_content: ty,
  pager__item_height_fixed: ry,
  "pager__item_height-constrained": "appkit-pager__item_height-constrained",
  pager__item_width_content: ny,
  pager__item_width_fixed: oy,
  "pager__item_width-constrained": "appkit-pager__item_width-constrained",
  pager__arrow: iy,
  "pager__arrow-icon-path": "appkit-pager__arrow-icon-path"
}, { window: sy } = Io;
function Vc(t, r, e) {
  const n = t.slice();
  return n[95] = r[e], n;
}
function ly(t) {
  let r, e;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function ay(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: ht(
        "pager",
        Vo,
        /*mods*/
        t[13]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      customPaddings: !0,
      parentOf: (
        /*items*/
        t[3]
      ),
      replaceItems: (
        /*replaceItems*/
        t[30]
      ),
      $$slots: { default: [fy] },
      $$scope: { ctx: t }
    }
  }), r.$on(
    "pointerdown",
    /*onPointerDown*/
    t[35]
  ), r.$on(
    "wheel",
    /*onWheel*/
    t[36]
  ), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      8192 && (i.cls = ht(
        "pager",
        Vo,
        /*mods*/
        n[13]
      )), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*items*/
      8 && (i.parentOf = /*items*/
      n[3]), o[0] & /*$direction, hasScrollRight, shouldCheckArrows, hasScrollLeft, $jsonRestrictParentScroll, style, pagerItemsWrapper, visibleItems, orientation, childLayoutParams*/
      16801492 | o[3] & /*$$scope*/
      32 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Fc(t) {
  let r, e, n, o, i, s, a;
  return e = new qn({
    props: {
      componentContext: (
        /*item*/
        t[95].componentContext
      ),
      layoutParams: (
        /*childLayoutParams*/
        t[9]
      )
    }
  }), {
    c() {
      r = Se("div"), Bt(e.$$.fragment), n = lr(), g(r, "class", o = ht("pager__item", Vo, Tc(
        /*orientation*/
        t[2],
        /*item*/
        t[95]
      ))), g(r, "role", "tabpanel"), g(r, "id", i = /*instId*/
      t[26] + "-panel-" + /*item*/
      t[95].index), g(r, "aria-labelledby", s = /*instId*/
      t[26] + "-tab-" + /*item*/
      t[95].index);
    },
    m(l, u) {
      q(l, r, u), zt(e, r, null), pt(r, n), a = !0;
    },
    p(l, u) {
      const c = {};
      u[0] & /*visibleItems*/
      16 && (c.componentContext = /*item*/
      l[95].componentContext), u[0] & /*childLayoutParams*/
      512 && (c.layoutParams = /*childLayoutParams*/
      l[9]), e.$set(c), (!a || u[0] & /*orientation, visibleItems*/
      20 && o !== (o = ht("pager__item", Vo, Tc(
        /*orientation*/
        l[2],
        /*item*/
        l[95]
      )))) && g(r, "class", o), (!a || u[0] & /*visibleItems*/
      16 && i !== (i = /*instId*/
      l[26] + "-panel-" + /*item*/
      l[95].index)) && g(r, "id", i), (!a || u[0] & /*visibleItems*/
      16 && s !== (s = /*instId*/
      l[26] + "-tab-" + /*item*/
      l[95].index)) && g(r, "aria-labelledby", s);
    },
    i(l) {
      a || (B(e.$$.fragment, l), a = !0);
    },
    o(l) {
      Q(e.$$.fragment, l), a = !1;
    },
    d(l) {
      l && J(r), Rt(e);
    }
  };
}
function Ic(t) {
  let r, e, n, o = !/*leftClass*/
  t[27] && uy();
  return {
    c() {
      r = Se("div"), o && o.c(), g(
        r,
        "class",
        /*leftClass*/
        t[27] || `${Vo.pager__arrow} ${fo.arrow} ${fo.arrow_left}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = He(
        r,
        "click",
        /*click_handler*/
        t[70]
      ), e = !0);
    },
    p: A,
    d(i) {
      i && J(r), o && o.d(), e = !1, n();
    }
  };
}
function uy(t) {
  let r, e;
  return {
    c() {
      r = $r("svg"), e = $r("path"), g(e, "class", Vo["pager__arrow-icon-path"]), g(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", fo.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), pt(r, e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function Dc(t) {
  let r, e, n, o = !/*rightClass*/
  t[28] && cy();
  return {
    c() {
      r = Se("div"), o && o.c(), g(
        r,
        "class",
        /*rightClass*/
        t[28] || `${Vo.pager__arrow} ${fo.arrow} ${fo.arrow_right}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = He(
        r,
        "click",
        /*click_handler_1*/
        t[71]
      ), e = !0);
    },
    p: A,
    d(i) {
      i && J(r), o && o.d(), e = !1, n();
    }
  };
}
function cy(t) {
  let r, e;
  return {
    c() {
      r = $r("svg"), e = $r("path"), g(e, "class", Vo["pager__arrow-icon-path"]), g(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", fo.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), pt(r, e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function fy(t) {
  let r, e, n, o, i, s, a, l, u, c = nr(
    /*visibleItems*/
    t[4]
  ), f = [];
  for (let p = 0; p < c.length; p += 1)
    f[p] = Fc(Vc(t, c, p));
  const _ = (p) => Q(f[p], 1, 1, () => {
    f[p] = null;
  });
  let h = (
    /*hasScrollLeft*/
    t[11] && /*shouldCheckArrows*/
    t[12] && Ic(t)
  ), m = (
    /*hasScrollRight*/
    t[10] && /*shouldCheckArrows*/
    t[12] && Dc(t)
  );
  return {
    c() {
      r = Se("div");
      for (let p = 0; p < f.length; p += 1)
        f[p].c();
      o = lr(), h && h.c(), i = lr(), m && m.c(), s = Kt(), g(r, "class", e = Vo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (t[24] ? vr["root_restrict-scroll"] : "")), g(r, "style", n = $t(
        /*style*/
        t[14]
      ));
    },
    m(p, k) {
      q(p, r, k);
      for (let w = 0; w < f.length; w += 1)
        f[w] && f[w].m(r, null);
      t[69](r), q(p, o, k), h && h.m(p, k), q(p, i, k), m && m.m(p, k), q(p, s, k), a = !0, l || (u = [
        He(
          r,
          "transitionend",
          /*onTransitionEnd*/
          t[37]
        ),
        He(
          r,
          "focus",
          /*onFocus*/
          t[33],
          !0
        ),
        He(
          r,
          "click",
          /*onItemsClick*/
          t[34],
          !0
        )
      ], l = !0);
    },
    p(p, k) {
      if (k[0] & /*orientation, visibleItems, instId, childLayoutParams*/
      67109396) {
        c = nr(
          /*visibleItems*/
          p[4]
        );
        let w;
        for (w = 0; w < c.length; w += 1) {
          const O = Vc(p, c, w);
          f[w] ? (f[w].p(O, k), B(f[w], 1)) : (f[w] = Fc(O), f[w].c(), B(f[w], 1), f[w].m(r, null));
        }
        for (or(), w = c.length; w < f.length; w += 1)
          _(w);
        ir();
      }
      (!a || k[0] & /*$jsonRestrictParentScroll*/
      16777216 && e !== (e = Vo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (p[24] ? vr["root_restrict-scroll"] : ""))) && g(r, "class", e), (!a || k[0] & /*style*/
      16384 && n !== (n = $t(
        /*style*/
        p[14]
      ))) && g(r, "style", n), /*hasScrollLeft*/
      p[11] && /*shouldCheckArrows*/
      p[12] ? h ? h.p(p, k) : (h = Ic(p), h.c(), h.m(i.parentNode, i)) : h && (h.d(1), h = null), /*hasScrollRight*/
      p[10] && /*shouldCheckArrows*/
      p[12] ? m ? m.p(p, k) : (m = Dc(p), m.c(), m.m(s.parentNode, s)) : m && (m.d(1), m = null);
    },
    i(p) {
      if (!a) {
        for (let k = 0; k < c.length; k += 1)
          B(f[k]);
        a = !0;
      }
    },
    o(p) {
      f = f.filter(Boolean);
      for (let k = 0; k < f.length; k += 1)
        Q(f[k]);
      a = !1;
    },
    d(p) {
      p && (J(r), J(o), J(i), J(s)), nn(f, p), t[69](null), h && h.d(p), m && m.d(p), l = !1, Hr(u);
    }
  };
}
function dy(t) {
  let r, e, n, o, i, s;
  const a = [ay, ly], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[5] ? 1 : 0
    );
  }
  return ~(r = u(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(c, f) {
      ~r && l[r].m(c, f), q(c, n, f), o = !0, i || (s = He(
        sy,
        "resize",
        /*resnap*/
        t[38]
      ), i = !0);
    },
    p(c, f) {
      let _ = r;
      r = u(c), r === _ ? ~r && l[r].p(c, f) : (e && (or(), Q(l[_], 1, 1, () => {
        l[_] = null;
      }), ir()), ~r ? (e = l[r], e ? e.p(c, f) : (e = l[r] = a[r](c), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(c) {
      o || (B(e), o = !0);
    },
    o(c) {
      Q(e), o = !1;
    },
    d(c) {
      c && J(n), ~r && l[r].d(c), i = !1, s();
    }
  };
}
const os = {
  wrap_content: "content",
  fixed: "fixed",
  match_parent: "parent"
}, _o = 2, _y = 400, py = 8;
function Tc(t, r) {
  var n, o, i, s;
  if (t === "horizontal") {
    const a = ((n = r.height) == null ? void 0 : n.type) || "";
    return {
      height: a in os ? os[a] : "content",
      "height-constrained": ((o = r.height) == null ? void 0 : o.type) === "wrap_content" ? _n(r.height.constrained, !1) : !1
    };
  }
  const e = ((i = r.width) == null ? void 0 : i.type) || "";
  return {
    width: e in os ? os[e] : "parent",
    "width-constrained": ((s = r.width) == null ? void 0 : s.type) === "wrap_content" ? _n(r.width.constrained, !1) : !1
  };
}
function gy(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, G, L, ee, fe, P, Z = A, se = () => (Z(), Z = F(c, (v) => e(60, P = v)), c), j, z = A, N = () => (z(), z = F(i, (v) => e(61, j = v)), i), W, ie = A, de = () => (ie(), ie = F(f, (v) => e(62, W = v)), f), je, Ee = A, pe = () => (Ee(), Ee = F(l, (v) => e(63, je = v)), l), ze, be = A, Fe = () => (be(), be = F(a, (v) => e(64, ze = v)), a), Ge, Ze = A, ke = () => (Ze(), Ze = F(s, (v) => e(65, Ge = v)), s), et, _e = A, Ie = () => (_e(), _e = F(Ve, (v) => e(66, et = v)), Ve), ue, oe = A, ye = () => (oe(), oe = F(o, (v) => e(67, ue = v)), o), $, Ae = A, xe = () => (Ae(), Ae = F(_, (v) => e(68, $ = v)), _), qe, te = A, Xe = () => (te(), te = F(u, (v) => e(24, qe = v)), u);
  t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => ie()), t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => Ze()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => te());
  let { componentContext: Le } = r, { layoutParams: tt = void 0 } = r;
  const dt = Dr(Yr), lt = dt.direction;
  bn(t, lt, (v) => e(6, ee = v));
  const wt = dt.genId("pager"), ot = dt.getCustomization("pagerLeftClass"), At = dt.getCustomization("pagerRightClass"), it = dt.isDesktop;
  bn(t, it, (v) => e(59, fe = v));
  let me, ne, at = !1, Ve, D = 0, jt = 0, gt = !1, kt = "horizontal", St = "0em", rt = {}, Y = "", Vt = "", Dt = "", Gt = {}, Jt = "start", ve = "center", We = [], ft = 0, Me = [], T = {}, Oe = {}, xt, ae, mt = 0, Wt = !1, Ft = !1, ar = !1, Te = !1, bt = 0, er = "", Qt = 0, Xt;
  function ur() {
    e(43, rt = {}), e(9, Gt = {}), e(47, Jt = "start"), e(48, ve = "center"), e(52, Wt = !1), e(53, Ft = !1), Te = !1;
  }
  function jr(v) {
    e(0, Le = e(51, xt = {
      ...Le,
      json: {
        ...Le.json,
        items: v.filter(To)
      }
    }));
  }
  function Yt(v, re) {
    ae && ae.update({
      instId: wt,
      currentItem: Oe[re],
      size: v,
      scrollToPagerItem(d) {
        qt(T[d]);
      }
    });
  }
  function It(v) {
    var d;
    if (v === jt || (jt = v, !We[v]))
      return;
    const re = (d = We[v].json) == null ? void 0 : d.selected_actions;
    re != null && re.length && Le.execAnyActions(re);
  }
  function Tt(v) {
    const re = Ft ? !1 : v === 0, d = Ft ? !1 : v === Me.length - 1, C = kt === "horizontal", De = ne.children[v + (Ft ? _o : 0)];
    if (!De)
      return 0;
    const Re = C ? "offsetLeft" : "offsetTop", Ot = C ? "offsetWidth" : "offsetHeight", H = $e(), Lt = zr(), st = gr(), Ue = ct();
    return H >= Ue + Lt + st || re ? 0 : d ? (H - Lt - st - Ue) * (ee === "rtl" ? -1 : 1) : ve === "start" && ee === "ltr" || ve === "end" && ee === "rtl" ? -(De[Re] - Lt) : ve === "end" && ee === "ltr" || ve === "start" && ee === "rtl" ? -(De[Re] + De[Ot] - H + st) : ne[Ot] / 2 - (De[Re] + De[Ot] / 2);
  }
  function ut(v, re) {
    if (!ne)
      return;
    const d = Tt(v);
    e(54, ar = re), An().then(() => {
      var C;
      bt = d, e(55, er = sr(bt)), e(40, D = (C = T[v]) != null ? C : 0), Te = Ft && (v < 0 || v >= ft);
    });
  }
  function qt(v, re = !0) {
    var d;
    ut((d = Oe[v]) != null ? d : 0, re);
  }
  function sr(v) {
    return `${kt === "horizontal" ? "translateX" : "translateY"}(${fn(v)})`;
  }
  function dr(v, re) {
    return Ft && v >= -_o && v < ft + _o ? v : v > Me.length - 1 ? re === "ring" ? jo(v, Me.length) : Me.length - 1 : v < 0 ? re === "ring" ? jo(v, Me.length) : 0 : v;
  }
  function mr(v, re, d) {
    const C = dr(Oe[D] - v, re);
    ut(C, d);
  }
  function pr(v, re, d) {
    const C = dr(Oe[D] + v, re);
    ut(C, d);
  }
  function Fr() {
    ae == null || ae.destroy(), ae = void 0, me && (dt.unregisterInstance(me), me = void 0), Le.fakeElement || (ae = Le.registerPager(Le.id || void 0)), Le.id && !Le.fakeElement && (me = Le.id, dt.registerInstance(
      me,
      {
        setCurrentItem(v, re) {
          if (v < 0 || v > We.length - 1)
            throw new Error('Item is out of range in "set-current-item" action');
          qt(v, re);
        },
        setPreviousItem: mr,
        setNextItem: pr,
        scrollToStart(v) {
          qt(Me[Ft ? _o : 0].index, v);
        },
        scrollToEnd(v) {
          qt(Me[Me.length - 1 - (Ft ? _o : 0)].index, v);
        },
        scrollCombined({ step: v, overflow: re, animated: d }) {
          v && qt(dr(Oe[D] + v, re || "clamp"), d);
        }
      },
      "warn"
    ));
  }
  function zr() {
    var re, d, C;
    return kt === "horizontal" ? (d = (re = rt.start) != null ? re : ee === "ltr" ? rt.left : rt.right) != null ? d : 0 : (C = rt.top) != null ? C : 0;
  }
  function gr() {
    var re, d, C;
    return kt === "horizontal" ? (d = (re = rt.end) != null ? re : ee === "ltr" ? rt.right : rt.left) != null ? d : 0 : (C = rt.bottom) != null ? C : 0;
  }
  function $e() {
    var re, d;
    return ne ? kt === "horizontal" ? ((re = ne.parentElement) == null ? void 0 : re.offsetWidth) || 0 : ((d = ne.parentElement) == null ? void 0 : d.offsetHeight) || 0 : 0;
  }
  function ct() {
    const v = kt === "horizontal", re = Array.from(ne.children), d = re[0].getBoundingClientRect(), C = re[re.length - 1].getBoundingClientRect();
    return v ? ee === "rtl" ? d.right - C.left : C.right - d.left : C.bottom - d.top;
  }
  function Mt(v) {
    const re = v.target;
    if (!(re instanceof Element) || !ne)
      return;
    let d = re;
    for (; d.parentElement && d.parentElement !== ne; )
      d = d.parentElement;
    if (!d)
      return;
    const C = Array.from(ne.children).indexOf(d);
    if (C < 0)
      return;
    const De = C - (Ft ? _o : 0);
    ut(De, !0);
  }
  function br(v) {
    Date.now() - Qt < 300 && (v.preventDefault(), v.stopImmediatePropagation());
  }
  function wr(v) {
    if (!dt.pagerMouseDragEnabled && v.pointerType === "mouse")
      return;
    const re = kt === "horizontal", d = re ? v.pageX : v.pageY, C = bt, De = $e() - zr() - gr(), Re = ct(), Ot = Date.now(), H = (st) => {
      const Ue = re ? st.pageX : st.pageY;
      let Ye = C + Ue - d;
      if (!Ft) {
        if (ee === "rtl") {
          if (Ye < 0)
            Ye = Ye * De / (Ye + De * 3);
          else if (Ye + De > Re) {
            let Ut = Ye + De - Re;
            Ut = Ut * De / (Ut + De * 3), Ye = -De + Re + Ut;
          }
        } else if (ee === "ltr") {
          if (Ye > 0)
            Ye = Ye * De / (Ye + De * 3);
          else if (-Ye + De > Re) {
            let Ut = -Ye + De - Re;
            Ut = Ut * De / (Ut + De * 3), Ye = De - Re - Ut;
          }
        }
      }
      bt = Ye, e(55, er = sr(bt)), st.preventDefault();
    }, Lt = (st) => {
      Xt == null || Xt(), Xt = void 0;
      const Ue = Math.min(512, De), Ye = Math.abs(C - bt);
      if (Ye < py) {
        ut(Oe[D], !0);
        return;
      }
      st.preventDefault(), Qt = Date.now();
      const Ut = Math.min(1, (Date.now() - Ot) / 750);
      let yr = Oe[D];
      Ye > Ue / 4 * Ut && (yr += (C > bt ? 1 : -1) * (ee === "rtl" ? -1 : 1)), Ft || (yr >= Me.length ? yr = Me.length - 1 : yr < 0 && (yr = 0)), ut(yr, !0);
    };
    window.addEventListener("pointermove", H), window.addEventListener("pointerup", Lt), window.addEventListener("pointercancel", Lt), Xt == null || Xt(), Xt = () => {
      window.removeEventListener("pointermove", H), window.removeEventListener("pointerup", Lt), window.removeEventListener("pointercancel", Lt);
    };
  }
  function nt(v) {
    if (!v.deltaX || Math.abs(v.deltaX) < Math.abs(v.deltaY))
      return;
    const re = Date.now();
    if (re - mt < _y)
      return;
    mt = re, (ee === "rtl" ? -1 : 1) * v.deltaX > 0 ? pr(1, "clamp", !0) : mr(1, "clamp", !0);
  }
  function le() {
    e(54, ar = !1), Te && An().then(() => {
      qt(D, !1);
    });
  }
  function Ct() {
    An().then(() => {
      qt(D, !1);
    });
  }
  to(() => {
    e(39, at = !0), ne && qt(D, !1);
  }), an(() => {
    e(39, at = !1), Xt == null || Xt(), We.forEach((v) => {
      v.destroy();
    }), me && (dt.unregisterInstance(me), me = void 0), ae == null || ae.destroy(), ae = void 0;
  });
  function rr(v) {
    Ir[v ? "unshift" : "push"](() => {
      ne = v, e(7, ne);
    });
  }
  const hr = () => (ee === "ltr" ? mr : pr)(1, "clamp", !0), Sr = () => (ee === "ltr" ? pr : mr)(1, "clamp", !0);
  return t.$$set = (v) => {
    "componentContext" in v && e(0, Le = v.componentContext), "layoutParams" in v && e(1, tt = v.layoutParams);
  }, t.$$.update = () => {
    var v, re, d, C, De;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(58, n = Le.origJson), t.$$.dirty[1] & /*origJson*/
    134217728 && n && ur(), t.$$.dirty[0] & /*componentContext*/
    1 && ye(e(23, o = typeof ((v = Le.json.item_builder) == null ? void 0 : v.data) == "string" ? Le.getDerivedFromVars((re = Le.json.item_builder) == null ? void 0 : re.data, void 0, !0) : (d = Le.json.item_builder) != null && d.data ? Go(Le.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(22, i = Le.getDerivedFromVars(Le.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && ke(e(21, s = Le.getDerivedFromVars(Le.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && Fe(e(20, a = Le.getDerivedFromVars(Le.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(19, l = Le.getDerivedFromVars(Le.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(18, u = Le.getDerivedFromVars(Le.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && se(e(17, c = Le.getDerivedFromVars(Le.json.cross_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(16, f = Le.getDerivedFromVars(Le.json.scroll_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(15, _ = Le.getDerivedFromVars(Le.json.infinite_scroll))), t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$jsonInfiniteScroll*/
    64 && e(52, Wt = _n($, Wt)), t.$$.dirty[0] & /*componentContext, items*/
    9 | t.$$.dirty[1] & /*prevContext*/
    1048576 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    32) {
      let Re = [];
      if (Le.json.item_builder && Array.isArray(ue) && Array.isArray(Le.json.item_builder.prototypes)) {
        const st = Le.json.item_builder;
        Re = il(ue, dt, Le, st);
      } else
        Re = (Array.isArray(Le.json.items) && Le.json.items || []).map((st, Ue) => ({
          div: st,
          key: st.id || { index: Ue, data: st }
        }));
      const Ot = new Set(We), H = /* @__PURE__ */ new Map();
      let Lt = !1;
      xt === Le && We.forEach((st) => {
        st.key && (typeof st.key == "string" && H.has(st.key) ? Lt || (Lt = !0, Le.logError(K(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: st.key } }))) : H.set(
          typeof st.key == "string" ? st.key : st.key.index,
          st
        ));
      }), e(3, We = Re.map((st, Ue) => {
        let Ye = !Lt && H.get(st.id), Ut = H.get(Ue);
        return !Ye && !st.id && typeof st.key == "object" && typeof (Ut == null ? void 0 : Ut.key) == "object" && Mi(Ut.key.data, st.key.data) && (Ye = Ut), Ye ? (Ot.delete(Ye), Ye) : Le.produceChildContext(st.div, {
          path: Ue,
          variables: st.vars,
          id: st.id,
          key: st.key
        });
      }));
      for (const st of Ot)
        st.destroy();
      e(51, xt = Le);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    9) {
      let Re = [];
      We.forEach((Ot) => {
        Re.push(Le.getDerivedFromVars({
          width: Ot.json.width,
          height: Ot.json.height,
          visibility: Ot.json.visibility
        }));
      }), Ie(e(8, Ve = Ti(Re, (Ot) => [...Ot])));
    }
    if (t.$$.dirty[0] & /*items, visibleItems*/
    24 | t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$childStore*/
    16) {
      if (e(50, Oe = {}), T = {}, e(4, Me = et.map((Re, Ot) => ({
        width: Re.width,
        height: Re.height,
        index: Ot,
        componentContext: We[Ot]
      })).filter((Re, Ot) => et[Ot].visibility !== "gone")), Me.forEach((Re, Ot) => {
        T[Ot] = Re.index, e(50, Oe[Re.index] = Ot, Oe);
      }), e(49, ft = Me.length), Wt && Me.length >= _o) {
        const Re = Me.slice(0, _o).map((H) => ({
          ...H,
          componentContext: H.componentContext.dup(Ko),
          duplicate: !0
        })), Ot = Me.slice(Me.length - _o).map((H) => ({
          ...H,
          componentContext: H.componentContext.dup(Ko),
          duplicate: !0
        }));
        Re.forEach((H, Lt) => {
          T[Me.length + Lt] = Lt;
        }), Ot.forEach((H, Lt) => {
          T[Lt - _o] = Me.length - _o + Lt;
        }), e(4, Me = [].concat(Ot, Me, Re)), e(53, Ft = !0);
      } else
        e(53, Ft = !1);
      Ct();
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonLayoutMode*/
    1073741824 && (j ? j.type !== "percentage" && j.type !== "fixed" && j.type !== "wrap_content" ? (e(41, gt = !0), Le.logError(K(new Error('Incorrect value of "layout_mode.type" for div "pager"')))) : e(41, gt = !1) : (e(41, gt = !0), Le.logError(K(new Error('Empty "layout_mode" prop for div "pager"'))))), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[2] & /*$jsonOrientation*/
    8 && e(2, kt = ca(Ge, kt)), t.$$.dirty[2] & /*$jsonItemSpacing*/
    4) {
      const Re = ze == null ? void 0 : ze.value;
      Re && Tn(Re) && e(42, St = fn(Re || 0));
    }
    if (t.$$.dirty[0] & /*$direction*/
    64 | t.$$.dirty[1] & /*paddingObj*/
    4096 | t.$$.dirty[2] & /*$jsonPaddings*/
    2 && (e(43, rt = Pi(je, rt)), e(44, Y = mo(rt, ee))), t.$$.dirty[0] & /*orientation*/
    4 && e(57, h = kt === "horizontal" ? "grid-auto-columns" : "grid-auto-rows"), t.$$.dirty[0] & /*orientation*/
    4 && e(56, m = kt === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[2] & /*$jsonScrollAxisAlignment*/
    1 && (W === "start" || W === "center" || W === "end") && (e(48, ve = W), Ct()), t.$$.dirty[0] & /*orientation, $direction, visibleItems*/
    84 | t.$$.dirty[1] & /*paddingObj, $jsonLayoutMode, scrollAxisAlignment, itemSpacing*/
    1073879040) {
      const Re = fn(kt === "horizontal" ? (rt == null ? void 0 : rt.start) || (ee === "ltr" ? rt == null ? void 0 : rt.left : rt == null ? void 0 : rt.right) || 0 : (rt == null ? void 0 : rt.top) || 0), Ot = fn(kt === "horizontal" ? (rt == null ? void 0 : rt.end) || (ee === "ltr" ? rt == null ? void 0 : rt.right : rt == null ? void 0 : rt.left) || 0 : (rt == null ? void 0 : rt.bottom) || 0);
      if ((j == null ? void 0 : j.type) === "fixed") {
        const H = ((C = j.neighbour_page_width) == null ? void 0 : C.value) || 0;
        ve === "center" ? e(45, Vt = `calc(100% + ${Re} + ${Ot} - 2 * ${fn(H)} - 2 * ${St})`) : ve === "start" ? e(45, Vt = `calc(100% + ${Ot} - ${fn(H)} - ${St})`) : e(45, Vt = `calc(100% + ${Re} - ${fn(H)} - ${St})`), e(46, Dt = "");
      } else if ((j == null ? void 0 : j.type) === "percentage") {
        let H = (De = j.page_width) == null ? void 0 : De.value;
        (typeof H != "number" || H < 0) && (H = 100), e(45, Vt = `calc(${(H / 100).toFixed(2)} * (100% + ${Re} + ${Ot}))`), e(46, Dt = "");
      } else (j == null ? void 0 : j.type) === "wrap_content" && (e(45, Vt = ""), e(46, Dt = Me.map((H) => {
        var Ue, Ye;
        const Lt = H[kt === "horizontal" ? "width" : "height"];
        if ((Lt == null ? void 0 : Lt.type) === "fixed" || (Lt == null ? void 0 : Lt.type) === "wrap_content")
          return "minmax(max-content, auto)";
        let st = "100%";
        return (Lt == null ? void 0 : Lt.type) === "match_parent" && (Tn((Ue = Lt.max_size) == null ? void 0 : Ue.value) && (st = `min(${st}, ${fn(Lt.max_size.value)})`), Tn((Ye = Lt.min_size) == null ? void 0 : Ye.value) && (st = `max(${st}, ${fn(Lt.min_size.value)})`)), st;
      }).join(" ")));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonCrossAxisAlignment, crossAxisAlignment*/
    536936448 && (P === "start" || P === "center" || P === "end") && (e(47, Jt = P), e(9, Gt = {
      [kt === "horizontal" ? "parentVAlign" : "parentHAlign"]: Jt
    })), t.$$.dirty[1] & /*itemSpacing, padding, gridAutoSizeProp, autoSizeVal, gridTemplateSizeProp, templateSizeVal, transformStr*/
    117499904 && e(14, p = {
      "grid-gap": St,
      padding: Y,
      [h]: Vt,
      [m]: Dt,
      transform: er
    }), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*animated, crossAxisAlignment, scrollAxisAlignment*/
    8585216 && e(13, k = {
      animated: ar,
      clip: dt.pagerChildrenClipEnabled,
      orientation: kt,
      "cross-align": Jt,
      "scroll-align": ve
    }), t.$$.dirty[1] & /*hasLayoutModeError*/
    1024 && e(5, w = gt), t.$$.dirty[0] & /*hasError*/
    32 | t.$$.dirty[1] & /*$isDesktop, mounted*/
    268435712 && e(12, O = fe && at && !w), t.$$.dirty[0] & /*componentContext, items*/
    9 && Le.json) {
      const Re = Le.getJsonWithVars(Le.json.default_item);
      typeof Re == "number" && Re >= 0 && Re < We.length && (e(40, D = jt = Re), Yt(We.length, Re)), Fr();
    }
    t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(11, G = Ft || (ee === "ltr" ? Oe[D] > 0 : Oe[D] + 1 < Me.length)), t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(10, L = Ft || (ee === "ltr" ? Oe[D] + 1 < Me.length : Oe[D] > 0)), t.$$.dirty[1] & /*visibleItemsWithOutDuplicates, currentItem*/
    262656 && Yt(ft, D), t.$$.dirty[1] & /*currentItem*/
    512 && It(D);
  }, [
    Le,
    tt,
    kt,
    We,
    Me,
    w,
    ee,
    ne,
    Ve,
    Gt,
    L,
    G,
    O,
    k,
    p,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    qe,
    lt,
    wt,
    ot,
    At,
    it,
    jr,
    mr,
    pr,
    Mt,
    br,
    wr,
    nt,
    le,
    Ct,
    at,
    D,
    gt,
    St,
    rt,
    Y,
    Vt,
    Dt,
    Jt,
    ve,
    ft,
    Oe,
    xt,
    Wt,
    Ft,
    ar,
    er,
    m,
    h,
    n,
    fe,
    P,
    j,
    W,
    je,
    ze,
    Ge,
    et,
    ue,
    $,
    rr,
    hr,
    Sr
  ];
}
class hy extends Lr {
  constructor(r) {
    super(), Or(this, r, gy, dy, Ar, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const my = "appkit-indicator", by = "appkit-indicator_visible", yy = "appkit-indicator__scroller", wy = "appkit-indicator__items", ky = "appkit-indicator__item", vy = "appkit-indicator_placement_default", jy = "appkit-indicator__item_active", Cy = "appkit-indicator_direction_ltr", Ey = "appkit-indicator_direction_rtl", Ay = "appkit-indicator_placement_stretch", ci = {
  indicator: my,
  indicator_visible: by,
  indicator__scroller: yy,
  indicator__items: wy,
  indicator__item: ky,
  indicator_placement_default: vy,
  indicator__item_active: jy,
  indicator_direction_ltr: Cy,
  indicator_direction_rtl: Ey,
  indicator_placement_stretch: Ay
};
function Mc(t, r, e) {
  const n = t.slice();
  n[43] = r[e], n[46] = e;
  const o = (
    /*index*/
    n[46] === /*pagerData*/
    n[8].currentItem
  );
  return n[44] = o, n;
}
function Pc(t) {
  let r, e = nr(Array(
    /*pagerData*/
    t[8].size
  )), n = [];
  for (let o = 0; o < e.length; o += 1)
    n[o] = Nc(Mc(t, e, o));
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      r = Kt();
    },
    m(o, i) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(o, i);
      q(o, r, i);
    },
    p(o, i) {
      if (i[0] & /*pagerData, onIndicatorItemClick, onIndicatorItemKeydown*/
      6291712) {
        e = nr(Array(
          /*pagerData*/
          o[8].size
        ));
        let s;
        for (s = 0; s < e.length; s += 1) {
          const a = Mc(o, e, s);
          n[s] ? n[s].p(a, i) : (n[s] = Nc(a), n[s].c(), n[s].m(r.parentNode, r));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = e.length;
      }
    },
    d(o) {
      o && J(r), nn(n, o);
    }
  };
}
function Nc(t) {
  let r, e, n, o, i, s, a, l;
  function u() {
    return (
      /*click_handler*/
      t[34](
        /*index*/
        t[46]
      )
    );
  }
  return {
    c() {
      r = Se("div"), g(r, "class", e = ht("indicator__item", ci, { active: (
        /*isActiveItem*/
        t[44]
      ) }) + " " + vr.root__clickable), g(r, "role", "tab"), g(r, "id", n = /*pagerData*/
      t[8].instId + "-tab-" + /*index*/
      t[46]), g(r, "aria-controls", o = /*pagerData*/
      t[8].instId + "-panel-" + /*index*/
      t[46]), g(r, "aria-selected", i = /*isActiveItem*/
      t[44] ? "true" : "false"), g(r, "tabindex", s = /*isActiveItem*/
      t[44] ? 0 : -1);
    },
    m(c, f) {
      q(c, r, f), a || (l = [
        He(r, "click", u),
        He(
          r,
          "keydown",
          /*onIndicatorItemKeydown*/
          t[22]
        )
      ], a = !0);
    },
    p(c, f) {
      t = c, f[0] & /*pagerData*/
      256 && e !== (e = ht("indicator__item", ci, { active: (
        /*isActiveItem*/
        t[44]
      ) }) + " " + vr.root__clickable) && g(r, "class", e), f[0] & /*pagerData*/
      256 && n !== (n = /*pagerData*/
      t[8].instId + "-tab-" + /*index*/
      t[46]) && g(r, "id", n), f[0] & /*pagerData*/
      256 && o !== (o = /*pagerData*/
      t[8].instId + "-panel-" + /*index*/
      t[46]) && g(r, "aria-controls", o), f[0] & /*pagerData*/
      256 && i !== (i = /*isActiveItem*/
      t[44] ? "true" : "false") && g(r, "aria-selected", i), f[0] & /*pagerData*/
      256 && s !== (s = /*isActiveItem*/
      t[44] ? 0 : -1) && g(r, "tabindex", s);
    },
    d(c) {
      c && J(r), a = !1, Hr(l);
    }
  };
}
function Sy(t) {
  let r, e, n = (
    /*pagerData*/
    t[8] && Pc(t)
  );
  return {
    c() {
      r = Se("div"), e = Se("div"), n && n.c(), g(e, "class", ci.indicator__items), g(e, "role", "tablist"), M(
        e,
        "margin",
        /*placement*/
        t[4] === "default" ? `0 ${ce(Math.max(
          0,
          /*activeStyle*/
          t[2].width - /*inactiveStyle*/
          t[3].width
        ) / 2)}` : ""
      ), M(e, "--divkit-indicator-inactive-width", ce(
        /*inactiveStyle*/
        t[3].width
      )), M(e, "--divkit-indicator-inactive-height", ce(
        /*inactiveStyle*/
        t[3].height
      )), M(e, "--divkit-indicator-inactive-border-radius", ce(
        /*inactiveStyle*/
        t[3].borderRadius
      )), M(
        e,
        "--divkit-indicator-inactive-background",
        /*inactiveStyle*/
        t[3].background || ""
      ), M(
        e,
        "--divkit-indicator-inactive-box-shadow",
        /*inactiveStyle*/
        t[3].boxShadow || ""
      ), M(e, "--divkit-indicator-active-width", ce(
        /*activeStyle*/
        t[2].width
      )), M(e, "--divkit-indicator-active-height", ce(
        /*activeStyle*/
        t[2].height
      )), M(e, "--divkit-indicator-active-border-radius", ce(
        /*activeStyle*/
        t[2].borderRadius
      )), M(
        e,
        "--divkit-indicator-active-background",
        /*activeStyle*/
        t[2].background || ""
      ), M(
        e,
        "--divkit-indicator-active-box-shadow",
        /*activeStyle*/
        t[2].boxShadow || ""
      ), M(
        e,
        "--divkit-indicator-active-scale",
        /*activeStyle*/
        t[2].width / /*inactiveStyle*/
        t[3].width
      ), M(
        e,
        "--divkit-indicator-default-margin",
        /*placement*/
        t[4] === "default" ? `0 ${ce(
          /*spaceBetweenCenters*/
          (t[5] - /*inactiveStyle*/
          t[3].width) / 2
        )}` : ""
      ), M(
        e,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        t[4] === "stretch" ? ce(
          /*itemSpacing*/
          t[7]
        ) : ""
      ), M(
        e,
        "--divkit-indicator-stretch-max-count",
        /*placement*/
        t[4] === "stretch" ? (
          /*maxVisibleItems*/
          t[6]
        ) : ""
      ), M(
        e,
        "--divkit-indicator-stretch-max-spacer",
        /*placement*/
        t[4] === "stretch" ? ce(
          /*maxVisibleItems*/
          (t[6] - 1) * /*itemSpacing*/
          t[7]
        ) : ""
      ), g(r, "class", ci.indicator__scroller);
    },
    m(o, i) {
      q(o, r, i), pt(r, e), n && n.m(e, null), t[35](e), t[36](r);
    },
    p(o, i) {
      /*pagerData*/
      o[8] ? n ? n.p(o, i) : (n = Pc(o), n.c(), n.m(e, null)) : n && (n.d(1), n = null), i[0] & /*placement, activeStyle, inactiveStyle*/
      28 && M(
        e,
        "margin",
        /*placement*/
        o[4] === "default" ? `0 ${ce(Math.max(
          0,
          /*activeStyle*/
          o[2].width - /*inactiveStyle*/
          o[3].width
        ) / 2)}` : ""
      ), i[0] & /*inactiveStyle*/
      8 && M(e, "--divkit-indicator-inactive-width", ce(
        /*inactiveStyle*/
        o[3].width
      )), i[0] & /*inactiveStyle*/
      8 && M(e, "--divkit-indicator-inactive-height", ce(
        /*inactiveStyle*/
        o[3].height
      )), i[0] & /*inactiveStyle*/
      8 && M(e, "--divkit-indicator-inactive-border-radius", ce(
        /*inactiveStyle*/
        o[3].borderRadius
      )), i[0] & /*inactiveStyle*/
      8 && M(
        e,
        "--divkit-indicator-inactive-background",
        /*inactiveStyle*/
        o[3].background || ""
      ), i[0] & /*inactiveStyle*/
      8 && M(
        e,
        "--divkit-indicator-inactive-box-shadow",
        /*inactiveStyle*/
        o[3].boxShadow || ""
      ), i[0] & /*activeStyle*/
      4 && M(e, "--divkit-indicator-active-width", ce(
        /*activeStyle*/
        o[2].width
      )), i[0] & /*activeStyle*/
      4 && M(e, "--divkit-indicator-active-height", ce(
        /*activeStyle*/
        o[2].height
      )), i[0] & /*activeStyle*/
      4 && M(e, "--divkit-indicator-active-border-radius", ce(
        /*activeStyle*/
        o[2].borderRadius
      )), i[0] & /*activeStyle*/
      4 && M(
        e,
        "--divkit-indicator-active-background",
        /*activeStyle*/
        o[2].background || ""
      ), i[0] & /*activeStyle*/
      4 && M(
        e,
        "--divkit-indicator-active-box-shadow",
        /*activeStyle*/
        o[2].boxShadow || ""
      ), i[0] & /*activeStyle, inactiveStyle*/
      12 && M(
        e,
        "--divkit-indicator-active-scale",
        /*activeStyle*/
        o[2].width / /*inactiveStyle*/
        o[3].width
      ), i[0] & /*placement, spaceBetweenCenters, inactiveStyle*/
      56 && M(
        e,
        "--divkit-indicator-default-margin",
        /*placement*/
        o[4] === "default" ? `0 ${ce(
          /*spaceBetweenCenters*/
          (o[5] - /*inactiveStyle*/
          o[3].width) / 2
        )}` : ""
      ), i[0] & /*placement, itemSpacing*/
      144 && M(
        e,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        o[4] === "stretch" ? ce(
          /*itemSpacing*/
          o[7]
        ) : ""
      ), i[0] & /*placement, maxVisibleItems*/
      80 && M(
        e,
        "--divkit-indicator-stretch-max-count",
        /*placement*/
        o[4] === "stretch" ? (
          /*maxVisibleItems*/
          o[6]
        ) : ""
      ), i[0] & /*placement, maxVisibleItems, itemSpacing*/
      208 && M(
        e,
        "--divkit-indicator-stretch-max-spacer",
        /*placement*/
        o[4] === "stretch" ? ce(
          /*maxVisibleItems*/
          (o[6] - 1) * /*itemSpacing*/
          o[7]
        ) : ""
      );
    },
    d(o) {
      o && J(r), n && n.d(), t[35](null), t[36](null);
    }
  };
}
function Vy(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: ht(
        "indicator",
        ci,
        /*mods*/
        t[11]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: { default: [Sy] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = ht(
        "indicator",
        ci,
        /*mods*/
        n[11]
      )), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*scroller, indicatorItemsWrapper, placement, activeStyle, inactiveStyle, spaceBetweenCenters, itemSpacing, maxVisibleItems, pagerData*/
      2044 | o[1] & /*$$scope*/
      65536 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
const wl = ["rounded_rectangle", "circle"];
function Fy(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p = A, k = () => (p(), p = F(c, (ne) => e(26, m = ne)), c), w, O = A, G = () => (O(), O = F(f, (ne) => e(27, w = ne)), f), L, ee = A, fe = () => (ee(), ee = F(i, (ne) => e(28, L = ne)), i), P, Z = A, se = () => (Z(), Z = F(s, (ne) => e(29, P = ne)), s), j, z = A, N = () => (z(), z = F(o, (ne) => e(30, j = ne)), o), W, ie = A, de = () => (ie(), ie = F(a, (ne) => e(31, W = ne)), a), je, Ee = A, pe = () => (Ee(), Ee = F(u, (ne) => e(32, je = ne)), u), ze, be = A, Fe = () => (be(), be = F(l, (ne) => e(33, ze = ne)), l);
  t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => ie()), t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => be());
  let { componentContext: Ge } = r, { layoutParams: Ze = void 0 } = r;
  const et = Dr(Yr).direction;
  bn(t, et, (ne) => e(25, h = ne));
  let _e = {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    background: "#ffdc60"
  }, Ie = {
    width: 10,
    height: 10,
    borderRadius: 5,
    background: "#33919cb5"
  }, ue = "default", oe = 15, ye = 10, $ = 5, Ae, xe, qe, te, Xe = !1;
  function Le() {
    e(4, ue = "default"), e(5, oe = 15), e(6, ye = 10), e(7, $ = 5), e(2, _e = {
      width: 13,
      height: 13,
      borderRadius: 6.5,
      background: "#ffdc60"
    }), e(3, Ie = {
      width: 10,
      height: 10,
      borderRadius: 5,
      background: "#33919cb5"
    });
  }
  async function tt(ne) {
    if (e(8, qe = ne), await An(), xe) {
      const at = xe.children[qe.currentItem];
      if (at) {
        const Ve = at.offsetLeft;
        Ae.scroll({
          left: Ve - Ae.clientWidth / 2,
          behavior: "smooth"
        });
      }
    }
  }
  function dt(ne) {
    ne !== qe.currentItem && qe.scrollToPagerItem(ne);
  }
  function lt(ne) {
    if (ne.ctrlKey || ne.shiftKey || ne.altKey || ne.metaKey)
      return;
    const { size: at, currentItem: Ve } = qe;
    if (ne.which === Nd) {
      const D = Ve - 1 < 0 ? Ve : Ve - 1;
      wt(D);
    } else if (ne.which === zd) {
      const D = Ve + 1 >= at ? Ve : Ve + 1;
      wt(D);
    } else if (ne.which === Rd)
      wt(0);
    else if (ne.which === Od)
      wt(at - 1);
    else
      return;
    ne.preventDefault();
  }
  async function wt(ne) {
    qe.scrollToPagerItem(ne), await An();
    const at = xe.querySelector(`.${ci.indicator__item_active}`);
    at && at.focus();
  }
  function ot() {
    te == null || te(), te = void 0;
    const ne = Ge.json.pager_id;
    te = Ge.listenPager(ne, tt);
  }
  to(() => {
    e(23, Xe = !0);
  }), an(() => {
    e(23, Xe = !1), te == null || te(), te = void 0;
  });
  const At = (ne) => dt(ne);
  function it(ne) {
    Ir[ne ? "unshift" : "push"](() => {
      xe = ne, e(10, xe);
    });
  }
  function me(ne) {
    Ir[ne ? "unshift" : "push"](() => {
      Ae = ne, e(9, Ae);
    });
  }
  return t.$$set = (ne) => {
    "componentContext" in ne && e(0, Ge = ne.componentContext), "layoutParams" in ne && e(1, Ze = ne.layoutParams);
  }, t.$$.update = () => {
    var ne, at;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(24, n = Ge.origJson), t.$$.dirty[0] & /*origJson*/
    16777216 && n && Le(), t.$$.dirty[0] & /*origJson, mounted*/
    25165824 && n && Xe && ot(), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(19, o = Ge.getDerivedFromVars(Ge.json.shape))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(18, i = Ge.getDerivedFromVars(Ge.json.active_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && se(e(17, s = Ge.getDerivedFromVars(Ge.json.inactive_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(16, a = Ge.getDerivedFromVars(Ge.json.active_item_size))), t.$$.dirty[0] & /*componentContext*/
    1 && Fe(e(15, l = Ge.getDerivedFromVars(Ge.json.active_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(14, u = Ge.getDerivedFromVars(Ge.json.inactive_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && k(e(13, c = Ge.getDerivedFromVars(Ge.json.space_between_centers))), t.$$.dirty[0] & /*componentContext*/
    1 && G(e(12, f = Ge.getDerivedFromVars(Ge.json.items_placement))), t.$$.dirty[0] & /*activeStyle, inactiveStyle, $jsonShape, $jsonInactiveItemColor, $jsonActiveItemColor*/
    1879048204 | t.$$.dirty[1] & /*$jsonActiveShape, $jsonInactiveShape, $jsonActiveItemSize*/
    7 && (ze && e(2, _e = so(
      {
        type: "shape_drawable",
        shape: ze
      },
      wl,
      _e
    )), je && e(3, Ie = so(
      {
        type: "shape_drawable",
        shape: je
      },
      wl,
      Ie
    )), !ze && !je && j)) {
      const Ve = Gn(W, 1.3);
      e(3, Ie = so(
        {
          type: "shape_drawable",
          shape: j,
          color: Ie.background
        },
        wl,
        Ie
      )), e(3, Ie.background = _r(P, 1, Ie.background), Ie), e(2, _e = {
        ...Ie,
        width: Ie.width * Ve,
        height: Ie.height * Ve,
        borderRadius: Ie.borderRadius * Ve,
        background: _e.background
      }), e(2, _e.background = _r(L, 1, _e.background), _e);
    }
    if (t.$$.dirty[0] & /*$jsonItemsPlacement, placement, spaceBetweenCenters, maxVisibleItems, itemSpacing, $jsonSpaceBetweenCenters*/
    201326832)
      if (w && (w.type === "default" || w.type === "stretch")) {
        if (e(4, ue = w.type), ue === "default")
          e(5, oe = en((ne = w.space_between_centers) == null ? void 0 : ne.value, oe));
        else if (ue === "stretch") {
          const Ve = w;
          e(6, ye = Gn(Ve.max_visible_items, ye)), e(7, $ = en((at = Ve.item_spacing) == null ? void 0 : at.value, $));
        }
      } else
        e(4, ue = "default"), m && e(5, oe = en(m.value, oe));
    t.$$.dirty[0] & /*placement, $direction, pagerData*/
    33554704 && e(11, _ = {
      placement: ue,
      direction: h,
      visible: (qe == null ? void 0 : qe.size) > 1
    });
  }, [
    Ge,
    Ze,
    _e,
    Ie,
    ue,
    oe,
    ye,
    $,
    qe,
    Ae,
    xe,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    et,
    dt,
    lt,
    Xe,
    n,
    h,
    m,
    w,
    L,
    P,
    j,
    W,
    je,
    ze,
    At,
    it,
    me
  ];
}
class Iy extends Lr {
  constructor(r) {
    super(), Or(this, r, Fy, Vy, Ar, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Dy = "appkit-slider", Ty = "appkit-slider__input", My = "appkit-slider__input_secondary", Py = "appkit-slider__thumb", Ny = "appkit-slider_direction_rtl", zy = "appkit-slider__thumb_secondary", Ry = "appkit-slider__track", Oy = "appkit-slider__tick", Ly = "appkit-slider__tick_active", By = "appkit-slider__tick_inactive", Wr = {
  slider: Dy,
  slider__input: Ty,
  slider__input_secondary: My,
  slider__thumb: Py,
  slider_direction_rtl: Ny,
  slider__thumb_secondary: zy,
  "slider__tracks-wrapper": "appkit-slider__tracks-wrapper",
  "slider__tracks-inner": "appkit-slider__tracks-inner",
  "slider__tracks-ranges": "appkit-slider__tracks-ranges",
  "slider__tracks-ranges_rtl": "appkit-slider__tracks-ranges_rtl",
  slider__track: Ry,
  "slider__thumb-text": "appkit-slider__thumb-text",
  "slider__thumb-text_secondary": "appkit-slider__thumb-text_secondary",
  slider__tick: Oy,
  slider__tick_active: Ly,
  slider__tick_inactive: By
};
function zc(t, r, e) {
  var a, l;
  if (!t || !t.font_size)
    return e;
  const n = t.offset, o = t.text_color && _r(t.text_color) || "#000", i = ai(t.font_weight, t.font_weight_value, void 0), s = Si(t.font_variation_settings) || void 0;
  if (Jn(t.font_size) && o !== "transparent") {
    const u = {
      fontSize: ce(t.font_size),
      fontWeight: i,
      fontVariationSettings: s,
      textColor: o
    };
    return typeof ((a = n == null ? void 0 : n.x) == null ? void 0 : a.value) == "number" && typeof ((l = n == null ? void 0 : n.y) == null ? void 0 : l.value) == "number" && (u.offset = {
      x: n.x.value,
      y: n.y.value
    }), t.font_family && typeof t.font_family == "string" && (u.fontFamily = r(t.font_family, {
      fontWeight: i
    }) || ""), u;
  }
}
function Co(t, r, e) {
  return Math.max(r, Math.min(e, Number(t)));
}
function Rc(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function Oc(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function Lc(t, r, e) {
  const n = t.slice();
  return n[90] = r[e], n;
}
function Hy(t) {
  let r, e;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Wy(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: ht(
        "slider",
        Wr,
        /*mods*/
        t[24]
      ),
      style: (
        /*stl*/
        t[25]
      ),
      customDescription: !0,
      customActions: "slider",
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: {
        default: [
          Uy,
          ({ focusHandler: n, blurHandler: o }) => ({ 83: n, 84: o }),
          ({ focusHandler: n, blurHandler: o }) => [0, 0, (n ? 2097152 : 0) | (o ? 4194304 : 0)]
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      16777216 && (i.cls = ht(
        "slider",
        Wr,
        /*mods*/
        n[24]
      )), o[0] & /*stl*/
      33554432 && (i.style = /*stl*/
      n[25]), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*tracksInner, switchedTracks, minValue, maxValue, value, value2, isEnabled, secondaryDescription, secondVariable, description, input, thumbSecondaryStyle, textSecondaryStyle, thumbStyle, textStyle, markInactiveTicks, markActiveTicks, $direction, renderRanges*/
      4193276 | o[2] & /*focusHandler, blurHandler*/
      6291456 | o[3] & /*$$scope*/
      1 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Bc(t) {
  let r;
  return {
    c() {
      r = Se("div"), g(r, "class", Wr.slider__track), M(
        r,
        "left",
        /*range*/
        t[90].left
      ), M(
        r,
        "right",
        /*range*/
        t[90].right
      ), M(
        r,
        "height",
        /*range*/
        t[90].height
      ), M(
        r,
        "border-radius",
        /*range*/
        t[90].borderRadius
      ), M(
        r,
        "background",
        /*range*/
        t[90].background
      ), M(
        r,
        "box-shadow",
        /*range*/
        t[90].boxShadow
      );
    },
    m(e, n) {
      q(e, r, n);
    },
    p(e, n) {
      n[0] & /*renderRanges*/
      2097152 && M(
        r,
        "left",
        /*range*/
        e[90].left
      ), n[0] & /*renderRanges*/
      2097152 && M(
        r,
        "right",
        /*range*/
        e[90].right
      ), n[0] & /*renderRanges*/
      2097152 && M(
        r,
        "height",
        /*range*/
        e[90].height
      ), n[0] & /*renderRanges*/
      2097152 && M(
        r,
        "border-radius",
        /*range*/
        e[90].borderRadius
      ), n[0] & /*renderRanges*/
      2097152 && M(
        r,
        "background",
        /*range*/
        e[90].background
      ), n[0] & /*renderRanges*/
      2097152 && M(
        r,
        "box-shadow",
        /*range*/
        e[90].boxShadow
      );
    },
    d(e) {
      e && J(r);
    }
  };
}
function Hc(t) {
  let r;
  return {
    c() {
      r = Se("div"), g(r, "class", Wr.slider__tick + " " + Wr.slider__tick_active), M(
        r,
        "--divkit-slider-tick",
        /*val*/
        t[85]
      );
    },
    m(e, n) {
      q(e, r, n);
    },
    p(e, n) {
      n[0] & /*markActiveTicks*/
      131072 && M(
        r,
        "--divkit-slider-tick",
        /*val*/
        e[85]
      );
    },
    d(e) {
      e && J(r);
    }
  };
}
function Wc(t) {
  let r;
  return {
    c() {
      r = Se("div"), g(r, "class", Wr.slider__tick + " " + Wr.slider__tick_inactive), M(
        r,
        "--divkit-slider-tick",
        /*val*/
        t[85]
      );
    },
    m(e, n) {
      q(e, r, n);
    },
    p(e, n) {
      n[0] & /*markInactiveTicks*/
      262144 && M(
        r,
        "--divkit-slider-tick",
        /*val*/
        e[85]
      );
    },
    d(e) {
      e && J(r);
    }
  };
}
function Uc(t) {
  let r, e, n;
  return {
    c() {
      var o, i, s, a, l;
      r = Se("div"), e = Se("div"), n = Pn(
        /*value*/
        t[11]
      ), g(e, "class", Wr["slider__thumb-text-inner"]), M(
        e,
        "font-size",
        /*textStyle*/
        ((o = t[7]) == null ? void 0 : o.fontSize) || "1em"
      ), M(
        e,
        "font-weight",
        /*textStyle*/
        ((i = t[7]) == null ? void 0 : i.fontWeight) || ""
      ), M(
        e,
        "font-family",
        /*textStyle*/
        ((s = t[7]) == null ? void 0 : s.fontFamily) || ""
      ), M(
        e,
        "font-variation-settings",
        /*textStyle*/
        ((a = t[7]) == null ? void 0 : a.fontVariationSettings) || ""
      ), M(
        e,
        "color",
        /*textStyle*/
        ((l = t[7]) == null ? void 0 : l.textColor) || "#000"
      ), g(r, "class", Wr["slider__thumb-text"]);
    },
    m(o, i) {
      q(o, r, i), pt(r, e), pt(e, n);
    },
    p(o, i) {
      var s, a, l, u, c;
      i[0] & /*value*/
      2048 && Qn(
        n,
        /*value*/
        o[11]
      ), i[0] & /*textStyle*/
      128 && M(
        e,
        "font-size",
        /*textStyle*/
        ((s = o[7]) == null ? void 0 : s.fontSize) || "1em"
      ), i[0] & /*textStyle*/
      128 && M(
        e,
        "font-weight",
        /*textStyle*/
        ((a = o[7]) == null ? void 0 : a.fontWeight) || ""
      ), i[0] & /*textStyle*/
      128 && M(
        e,
        "font-family",
        /*textStyle*/
        ((l = o[7]) == null ? void 0 : l.fontFamily) || ""
      ), i[0] & /*textStyle*/
      128 && M(
        e,
        "font-variation-settings",
        /*textStyle*/
        ((u = o[7]) == null ? void 0 : u.fontVariationSettings) || ""
      ), i[0] & /*textStyle*/
      128 && M(
        e,
        "color",
        /*textStyle*/
        ((c = o[7]) == null ? void 0 : c.textColor) || "#000"
      );
    },
    d(o) {
      o && J(r);
    }
  };
}
function Gc(t) {
  let r, e = (
    /*textSecondaryStyle*/
    t[8] && Jc(t)
  );
  return {
    c() {
      r = Se("div"), e && e.c(), g(r, "class", Wr.slider__thumb + " " + Wr.slider__thumb_secondary), M(r, "border-radius", ce(
        /*thumbSecondaryStyle*/
        t[6].borderRadius
      )), M(
        r,
        "background",
        /*thumbSecondaryStyle*/
        t[6].background
      ), M(
        r,
        "box-shadow",
        /*thumbSecondaryStyle*/
        t[6].boxShadow || ""
      );
    },
    m(n, o) {
      q(n, r, o), e && e.m(r, null);
    },
    p(n, o) {
      /*textSecondaryStyle*/
      n[8] ? e ? e.p(n, o) : (e = Jc(n), e.c(), e.m(r, null)) : e && (e.d(1), e = null), o[0] & /*thumbSecondaryStyle*/
      64 && M(r, "border-radius", ce(
        /*thumbSecondaryStyle*/
        n[6].borderRadius
      )), o[0] & /*thumbSecondaryStyle*/
      64 && M(
        r,
        "background",
        /*thumbSecondaryStyle*/
        n[6].background
      ), o[0] & /*thumbSecondaryStyle*/
      64 && M(
        r,
        "box-shadow",
        /*thumbSecondaryStyle*/
        n[6].boxShadow || ""
      );
    },
    d(n) {
      n && J(r), e && e.d();
    }
  };
}
function Jc(t) {
  let r, e, n;
  return {
    c() {
      var o, i, s, a, l;
      r = Se("div"), e = Se("div"), n = Pn(
        /*value2*/
        t[12]
      ), g(e, "class", Wr["slider__thumb-text-inner"]), M(
        e,
        "font-size",
        /*textSecondaryStyle*/
        ((o = t[8]) == null ? void 0 : o.fontSize) || "1em"
      ), M(
        e,
        "font-weight",
        /*textSecondaryStyle*/
        ((i = t[8]) == null ? void 0 : i.fontWeight) || ""
      ), M(
        e,
        "font-family",
        /*textSecondaryStyle*/
        ((s = t[8]) == null ? void 0 : s.fontFamily) || ""
      ), M(
        e,
        "font-variation-settings",
        /*textSecondaryStyle*/
        ((a = t[8]) == null ? void 0 : a.fontVariationSettings) || ""
      ), M(
        e,
        "color",
        /*textSecondaryStyle*/
        ((l = t[8]) == null ? void 0 : l.textColor) || "#000"
      ), g(r, "class", Wr["slider__thumb-text"] + " " + Wr["slider__thumb-text_secondary"]);
    },
    m(o, i) {
      q(o, r, i), pt(r, e), pt(e, n);
    },
    p(o, i) {
      var s, a, l, u, c;
      i[0] & /*value2*/
      4096 && Qn(
        n,
        /*value2*/
        o[12]
      ), i[0] & /*textSecondaryStyle*/
      256 && M(
        e,
        "font-size",
        /*textSecondaryStyle*/
        ((s = o[8]) == null ? void 0 : s.fontSize) || "1em"
      ), i[0] & /*textSecondaryStyle*/
      256 && M(
        e,
        "font-weight",
        /*textSecondaryStyle*/
        ((a = o[8]) == null ? void 0 : a.fontWeight) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && M(
        e,
        "font-family",
        /*textSecondaryStyle*/
        ((l = o[8]) == null ? void 0 : l.fontFamily) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && M(
        e,
        "font-variation-settings",
        /*textSecondaryStyle*/
        ((u = o[8]) == null ? void 0 : u.fontVariationSettings) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && M(
        e,
        "color",
        /*textSecondaryStyle*/
        ((c = o[8]) == null ? void 0 : c.textColor) || "#000"
      );
    },
    d(o) {
      o && J(r);
    }
  };
}
function qc(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Se("input"), g(r, "type", "range"), g(r, "class", e = /*switchedTracks*/
      t[16] ? Wr.slider__input : `${Wr.slider__input} ${Wr.slider__input_secondary}`), g(
        r,
        "min",
        /*minValue*/
        t[3]
      ), g(
        r,
        "max",
        /*maxValue*/
        t[4]
      ), g(r, "step", "1"), r.value = n = /*switchedTracks*/
      t[16] ? (
        /*value*/
        t[11]
      ) : (
        /*value2*/
        t[12]
      ), r.disabled = o = !/*isEnabled*/
      t[9], g(
        r,
        "aria-label",
        /*secondaryDescription*/
        t[20]
      );
    },
    m(a, l) {
      q(a, r, l), i || (s = [
        He(
          r,
          "input",
          /*input_handler_1*/
          t[75]
        ),
        He(r, "mousedown", function() {
          Pr(
            /*secondVariable*/
            t[13] ? (
              /*onSecondMousedown*/
              t[41]
            ) : null
          ) && (t[13] ? (
            /*onSecondMousedown*/
            t[41]
          ) : null).apply(this, arguments);
        }),
        He(r, "touchstart", function() {
          Pr(
            /*secondVariable*/
            t[13] ? (
              /*onSecondMousedown*/
              t[41]
            ) : null
          ) && (t[13] ? (
            /*onSecondMousedown*/
            t[41]
          ) : null).apply(this, arguments);
        }),
        He(r, "focus", function() {
          Pr(
            /*focusHandler*/
            t[83]
          ) && t[83].apply(this, arguments);
        }),
        He(r, "blur", function() {
          Pr(
            /*blurHandler*/
            t[84]
          ) && t[84].apply(this, arguments);
        })
      ], i = !0);
    },
    p(a, l) {
      t = a, l[0] & /*switchedTracks*/
      65536 && e !== (e = /*switchedTracks*/
      t[16] ? Wr.slider__input : `${Wr.slider__input} ${Wr.slider__input_secondary}`) && g(r, "class", e), l[0] & /*minValue*/
      8 && g(
        r,
        "min",
        /*minValue*/
        t[3]
      ), l[0] & /*maxValue*/
      16 && g(
        r,
        "max",
        /*maxValue*/
        t[4]
      ), l[0] & /*switchedTracks, value, value2*/
      71680 && n !== (n = /*switchedTracks*/
      t[16] ? (
        /*value*/
        t[11]
      ) : (
        /*value2*/
        t[12]
      )) && (r.value = n), l[0] & /*isEnabled*/
      512 && o !== (o = !/*isEnabled*/
      t[9]) && (r.disabled = o), l[0] & /*secondaryDescription*/
      1048576 && g(
        r,
        "aria-label",
        /*secondaryDescription*/
        t[20]
      );
    },
    d(a) {
      a && J(r), i = !1, Hr(s);
    }
  };
}
function Uy(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O = nr(
    /*renderRanges*/
    t[21]
  ), G = [];
  for (let z = 0; z < O.length; z += 1)
    G[z] = Bc(Lc(t, O, z));
  let L = nr(
    /*markActiveTicks*/
    t[17]
  ), ee = [];
  for (let z = 0; z < L.length; z += 1)
    ee[z] = Hc(Oc(t, L, z));
  let fe = nr(
    /*markInactiveTicks*/
    t[18]
  ), P = [];
  for (let z = 0; z < fe.length; z += 1)
    P[z] = Wc(Rc(t, fe, z));
  let Z = (
    /*textStyle*/
    t[7] && Uc(t)
  ), se = (
    /*secondVariable*/
    t[13] && Gc(t)
  ), j = (
    /*secondVariable*/
    t[13] && qc(t)
  );
  return {
    c() {
      r = Se("div"), e = Se("div"), n = Se("div");
      for (let z = 0; z < G.length; z += 1)
        G[z].c();
      i = lr();
      for (let z = 0; z < ee.length; z += 1)
        ee[z].c();
      s = lr();
      for (let z = 0; z < P.length; z += 1)
        P[z].c();
      a = lr(), l = Se("div"), Z && Z.c(), u = lr(), se && se.c(), c = lr(), f = Se("input"), p = lr(), j && j.c(), g(n, "class", o = Wr["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Wr["slider__tracks-ranges_rtl"] : "")), g(l, "class", Wr.slider__thumb), M(l, "border-radius", ce(
        /*thumbStyle*/
        t[5].borderRadius
      )), M(
        l,
        "background",
        /*thumbStyle*/
        t[5].background
      ), M(
        l,
        "box-shadow",
        /*thumbStyle*/
        t[5].boxShadow || ""
      ), g(f, "type", "range"), g(f, "class", _ = /*switchedTracks*/
      t[16] ? `${Wr.slider__input} ${Wr.slider__input_secondary}` : Wr.slider__input), g(
        f,
        "min",
        /*minValue*/
        t[3]
      ), g(
        f,
        "max",
        /*maxValue*/
        t[4]
      ), g(f, "step", "1"), f.value = h = /*switchedTracks*/
      t[16] ? (
        /*value2*/
        t[12]
      ) : (
        /*value*/
        t[11]
      ), f.disabled = m = !/*isEnabled*/
      t[9], g(
        f,
        "aria-label",
        /*description*/
        t[19]
      ), g(e, "class", Wr["slider__tracks-inner"]), g(r, "class", Wr["slider__tracks-wrapper"]);
    },
    m(z, N) {
      q(z, r, N), pt(r, e), pt(e, n);
      for (let W = 0; W < G.length; W += 1)
        G[W] && G[W].m(n, null);
      pt(e, i);
      for (let W = 0; W < ee.length; W += 1)
        ee[W] && ee[W].m(e, null);
      pt(e, s);
      for (let W = 0; W < P.length; W += 1)
        P[W] && P[W].m(e, null);
      pt(e, a), pt(e, l), Z && Z.m(l, null), pt(e, u), se && se.m(e, null), pt(e, c), pt(e, f), t[74](f), pt(e, p), j && j.m(e, null), t[76](e), k || (w = [
        He(
          f,
          "input",
          /*input_handler*/
          t[73]
        ),
        He(f, "focus", function() {
          Pr(
            /*focusHandler*/
            t[83]
          ) && t[83].apply(this, arguments);
        }),
        He(f, "blur", function() {
          Pr(
            /*blurHandler*/
            t[84]
          ) && t[84].apply(this, arguments);
        })
      ], k = !0);
    },
    p(z, N) {
      if (t = z, N[0] & /*renderRanges*/
      2097152) {
        O = nr(
          /*renderRanges*/
          t[21]
        );
        let W;
        for (W = 0; W < O.length; W += 1) {
          const ie = Lc(t, O, W);
          G[W] ? G[W].p(ie, N) : (G[W] = Bc(ie), G[W].c(), G[W].m(n, null));
        }
        for (; W < G.length; W += 1)
          G[W].d(1);
        G.length = O.length;
      }
      if (N[0] & /*$direction*/
      16384 && o !== (o = Wr["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Wr["slider__tracks-ranges_rtl"] : "")) && g(n, "class", o), N[0] & /*markActiveTicks*/
      131072) {
        L = nr(
          /*markActiveTicks*/
          t[17]
        );
        let W;
        for (W = 0; W < L.length; W += 1) {
          const ie = Oc(t, L, W);
          ee[W] ? ee[W].p(ie, N) : (ee[W] = Hc(ie), ee[W].c(), ee[W].m(e, s));
        }
        for (; W < ee.length; W += 1)
          ee[W].d(1);
        ee.length = L.length;
      }
      if (N[0] & /*markInactiveTicks*/
      262144) {
        fe = nr(
          /*markInactiveTicks*/
          t[18]
        );
        let W;
        for (W = 0; W < fe.length; W += 1) {
          const ie = Rc(t, fe, W);
          P[W] ? P[W].p(ie, N) : (P[W] = Wc(ie), P[W].c(), P[W].m(e, a));
        }
        for (; W < P.length; W += 1)
          P[W].d(1);
        P.length = fe.length;
      }
      /*textStyle*/
      t[7] ? Z ? Z.p(t, N) : (Z = Uc(t), Z.c(), Z.m(l, null)) : Z && (Z.d(1), Z = null), N[0] & /*thumbStyle*/
      32 && M(l, "border-radius", ce(
        /*thumbStyle*/
        t[5].borderRadius
      )), N[0] & /*thumbStyle*/
      32 && M(
        l,
        "background",
        /*thumbStyle*/
        t[5].background
      ), N[0] & /*thumbStyle*/
      32 && M(
        l,
        "box-shadow",
        /*thumbStyle*/
        t[5].boxShadow || ""
      ), /*secondVariable*/
      t[13] ? se ? se.p(t, N) : (se = Gc(t), se.c(), se.m(e, c)) : se && (se.d(1), se = null), N[0] & /*switchedTracks*/
      65536 && _ !== (_ = /*switchedTracks*/
      t[16] ? `${Wr.slider__input} ${Wr.slider__input_secondary}` : Wr.slider__input) && g(f, "class", _), N[0] & /*minValue*/
      8 && g(
        f,
        "min",
        /*minValue*/
        t[3]
      ), N[0] & /*maxValue*/
      16 && g(
        f,
        "max",
        /*maxValue*/
        t[4]
      ), N[0] & /*switchedTracks, value2, value*/
      71680 && h !== (h = /*switchedTracks*/
      t[16] ? (
        /*value2*/
        t[12]
      ) : (
        /*value*/
        t[11]
      )) && (f.value = h), N[0] & /*isEnabled*/
      512 && m !== (m = !/*isEnabled*/
      t[9]) && (f.disabled = m), N[0] & /*description*/
      524288 && g(
        f,
        "aria-label",
        /*description*/
        t[19]
      ), /*secondVariable*/
      t[13] ? j ? j.p(t, N) : (j = qc(t), j.c(), j.m(e, null)) : j && (j.d(1), j = null);
    },
    d(z) {
      z && J(r), nn(G, z), nn(ee, z), nn(P, z), Z && Z.d(), se && se.d(), t[74](null), j && j.d(), t[76](null), k = !1, Hr(w);
    }
  };
}
function Gy(t) {
  let r, e, n, o, i, s;
  const a = [Wy, Hy], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[10] ? 1 : 0
    );
  }
  return ~(r = u(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(c, f) {
      ~r && l[r].m(c, f), q(c, n, f), o = !0, i || (s = He(
        window,
        "resize",
        /*checkTicksDebounced*/
        t[43]
      ), i = !0);
    },
    p(c, f) {
      let _ = r;
      r = u(c), r === _ ? ~r && l[r].p(c, f) : (e && (or(), Q(l[_], 1, 1, () => {
        l[_] = null;
      }), ir()), ~r ? (e = l[r], e ? e.p(c, f) : (e = l[r] = a[r](c), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(c) {
      o || (B(e), o = !0);
    },
    o(c) {
      Q(e), o = !1;
    },
    d(c) {
      c && J(n), ~r && l[r].d(c), i = !1, s();
    }
  };
}
const xn = {
  width: 10,
  height: 10,
  borderRadius: 5,
  background: "#000"
}, is = ["rounded_rectangle", "circle"], kl = ["rounded_rectangle"];
function ss(t, r, e, n, o) {
  let i = [];
  if (o)
    for (let s = t; s < r; ++s)
      i.push((s - e) / (n - e));
  else {
    for (let s = e; s < t; ++s)
      i.push((s - e) / (n - e));
    for (let s = r; s < n + 1; ++s)
      i.push((s - e) / (n - e));
  }
  return i;
}
function Jy(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, G, L, ee, fe, P, Z, se, j, z, N, W, ie, de, je = A, Ee = () => (je(), je = F(ee, (v) => e(57, de = v)), ee), pe, ze = A, be = () => (ze(), ze = F(G, (v) => e(58, pe = v)), G), Fe, Ge = A, Ze = () => (Ge(), Ge = F(L, (v) => e(59, Fe = v)), L), ke, et = A, _e = () => (et(), et = F(O, (v) => e(60, ke = v)), O), Ie, ue = A, oe = () => (ue(), ue = F(w, (v) => e(61, Ie = v)), w), ye, $ = A, Ae = () => ($(), $ = F(k, (v) => e(62, ye = v)), k), xe, qe = A, te = () => (qe(), qe = F(p, (v) => e(63, xe = v)), p), Xe, Le = A, tt = () => (Le(), Le = F(m, (v) => e(64, Xe = v)), m), dt, lt = A, wt = () => (lt(), lt = F(h, (v) => e(65, dt = v)), h), ot, At = A, it = () => (At(), At = F(_, (v) => e(66, ot = v)), _), me, ne = A, at = () => (ne(), ne = F(f, (v) => e(67, me = v)), f), Ve, D = A, jt = () => (D(), D = F(c, (v) => e(68, Ve = v)), c), gt, kt = A, St = () => (kt(), kt = F(a, (v) => e(69, gt = v)), a), rt, Y = A, Vt = () => (Y(), Y = F(s, (v) => e(70, rt = v)), s), Dt, Gt = A, Jt = () => (Gt(), Gt = F(u, (v) => e(71, Dt = v)), u), ve, We = A, ft = () => (We(), We = F(l, (v) => e(72, ve = v)), l);
  t.$$.on_destroy.push(() => je()), t.$$.on_destroy.push(() => ze()), t.$$.on_destroy.push(() => Ge()), t.$$.on_destroy.push(() => et()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => qe()), t.$$.on_destroy.push(() => Le()), t.$$.on_destroy.push(() => lt()), t.$$.on_destroy.push(() => At()), t.$$.on_destroy.push(() => ne()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => kt()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => Gt()), t.$$.on_destroy.push(() => We());
  let { componentContext: Me } = r, { layoutParams: T = void 0 } = r;
  const Oe = Dr(Yr), xt = Dr(So), ae = Oe.direction;
  bn(t, ae, (v) => e(14, ie = v));
  let mt, Wt, Ft, ar = !1, Te = 0, bt = 100, er = xn, Qt = er, Xt = xn, ur = xn, jr, Yt = null, It, Tt = null, ut, qt = ut, sr = "", dr = "", mr = !0, pr = !1, Fr = [];
  function zr() {
    e(5, er = xn), e(6, Qt = er), e(45, Xt = xn), e(46, ur = xn), e(47, Yt = null), e(48, Tt = null), e(7, ut = void 0), e(8, qt = void 0), e(19, sr = ""), e(9, mr = !0), e(20, dr = "");
  }
  let gr = Co(rt || 0, Te, bt), $e = Co(gt || 0, Te, bt);
  function ct({ direction: v, minValue: re, maxValue: d, trackActiveOffset: C, trackActivePart: De, trackInactiveStyle: Re, trackActiveStyle: Ot, ranges: H = [] }) {
    const Lt = [], st = (Ye, Ut, yr) => {
      var tn, Gr, he, wn;
      const Jr = (Kr, on, zn, y) => {
        var x, R, Qe, Ce;
        const E = Math.max(Kr, Ut);
        if (Math.min(on, yr) - E > 0) {
          const Zt = y && (R = (x = y[v === "ltr" ? "start" : "end"]) != null ? x : y.left) != null ? R : 0, yt = y && (Ce = (Qe = y[v === "ltr" ? "end" : "start"]) != null ? Qe : y.right) != null ? Ce : 0;
          Lt.push({
            left: Kr,
            right: on,
            totalLeft: Ut,
            totalRight: yr,
            leftMargin: Zt,
            rightMargin: yt,
            style: zn
          });
        }
      };
      if ((!H[0] || ((tn = H[0].start) != null ? tn : re) > Ut) && Jr(Ut, H[0] ? (Gr = H[0].start) != null ? Gr : re : yr, Ye === "inactive" ? Re : Ot), H.forEach((Kr, on) => {
        var Ce, Zt, yt, Ke;
        const zn = Kr[Ye === "inactive" ? "track_inactive_style" : "track_active_style"], E = zn ? so(zn, kl, xn) : Ye === "inactive" ? Re : Ot, S = H[on - 1], x = H[on + 1], R = (Zt = (Ce = Kr.start) != null ? Ce : S == null ? void 0 : S.end) != null ? Zt : Ut, Qe = (Ke = (yt = Kr.end) != null ? yt : x == null ? void 0 : x.start) != null ? Ke : yr;
        Jr(R, Qe, E, Kr.margins);
      }), H[H.length - 1] && ((he = H[H.length - 1].end) != null ? he : d) < yr) {
        const Kr = (wn = H[H.length - 1].end) != null ? wn : d;
        Jr(Kr, yr, Ye === "inactive" ? Re : Ot);
      }
    };
    st("inactive", re, d), st("active", C, C + De);
    const Ue = d - re;
    e(21, Fr = Lt.map((Ye) => {
      let Ut = `${(Ye.left - re) * 100 / Ue}%`;
      Ye.leftMargin && (Ut = `calc(${Ut} + ${fn(Ye.leftMargin)})`);
      let yr;
      Ye.totalLeft < Ye.left ? yr = Ut : Ye.leftMargin ? yr = `max(${(Ye.totalLeft - re) * 100 / Ue}%, ${Ut})` : yr = `${(Math.max(Ye.totalLeft, Ye.left) - re) * 100 / Ue}%`;
      let Jr = `${(1 - (Ye.right - re) / Ue) * 100}%`;
      Ye.rightMargin && (Jr = `calc(${Jr} + ${fn(Ye.rightMargin)})`);
      let tn;
      return Ye.totalRight > Ye.right ? tn = Jr : Ye.rightMargin ? tn = `max(${(1 - (Ye.totalRight - re) / Ue) * 100}%, ${Jr})` : tn = `${(1 - (Math.max(Ye.totalRight, Ye.right) - re) / Ue) * 100}%`, {
        left: yr,
        right: tn,
        height: ce(Ye.style.height),
        borderRadius: ce(Ye.style.borderRadius),
        background: Ye.style.background,
        boxShadow: Ye.style.boxShadow || ""
      };
    }));
  }
  function Mt(v) {
    var H, Lt;
    if (!mr)
      return;
    const re = "pageX" in v ? v.pageX : (Lt = (H = v.changedTouches) == null ? void 0 : H[0]) == null ? void 0 : Lt.pageX;
    if (re === void 0)
      return;
    const d = Ft.getBoundingClientRect();
    let C = (re - d.left) / d.width;
    ie === "rtl" && (C = 1 - C);
    const De = Te + (bt - Te) * C, Re = Math.round(Co(De, Te, bt)), Ot = (gr + $e) / 2;
    e(16, ar = Re < Ot == gr < $e);
  }
  function br(v, re) {
    const d = Number(v.target.value);
    ar === (re === "first") ? (e(12, $e = d), a.setValue(d)) : (e(11, gr = d), s.setValue(d));
  }
  let wr = !1;
  function nt() {
    if (!Ft)
      return;
    const v = bt - Te, re = (Yt == null ? void 0 : Yt.width) || 0, d = (Tt == null ? void 0 : Tt.width) || 0;
    Math.max(re, d) * v >= (Ft == null ? void 0 : Ft.clientWidth) ? wr || (Me.logError(K(new Error("Slider ticks overlap each other"), { level: "warn" })), wr = !0) : wr = !1;
  }
  const le = ua(nt, 50);
  to(() => {
    nt();
  }), an(() => {
    mt && (Oe.unregisterFocusable(mt), e(44, mt = void 0));
  });
  const Ct = (v) => br(v, "first");
  function rr(v) {
    Ir[v ? "unshift" : "push"](() => {
      Wt = v, e(2, Wt);
    });
  }
  const hr = (v) => br(v, "second");
  function Sr(v) {
    Ir[v ? "unshift" : "push"](() => {
      Ft = v, e(15, Ft);
    });
  }
  return t.$$set = (v) => {
    "componentContext" in v && e(0, Me = v.componentContext), "layoutParams" in v && e(1, T = v.layoutParams);
  }, t.$$.update = () => {
    var v, re, d, C;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(56, n = Me.origJson), t.$$.dirty[1] & /*origJson*/
    33554432 && n && zr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, o = Me.json.thumb_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(13, i = Me.json.thumb_secondary_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*firstVariable*/
    16777216 && Vt(e(22, s = o && (Me.getVariable(o, "integer") || Oe.awaitGlobalVariable(o, "integer", 0)) || io("temp", "integer", 0))), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 && St(e(23, a = i && (Me.getVariable(i, "integer") || Oe.awaitGlobalVariable(i, "integer", 0)) || io("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(39, l = Me.getDerivedFromVars(Me.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Jt(e(38, u = Me.getDerivedFromVars(Me.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && jt(e(37, c = Me.getDerivedFromVars(Me.json.thumb_style))), t.$$.dirty[0] & /*componentContext*/
    1 && at(e(36, f = Me.getDerivedFromVars(Me.json.thumb_secondary_style))), t.$$.dirty[0] & /*componentContext*/
    1 && it(e(35, _ = Me.getDerivedFromVars(Me.json.track_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && wt(e(34, h = Me.getDerivedFromVars(Me.json.track_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && tt(e(33, m = Me.getDerivedFromVars(Me.json.tick_mark_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && te(e(32, p = Me.getDerivedFromVars(Me.json.tick_mark_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(31, k = Me.getDerivedFromVars(Me.json.thumb_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(30, w = Me.getDerivedFromVars(Me.json.thumb_secondary_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(29, O = Me.getDerivedFromVars(Me.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(28, G = Me.getDerivedFromVars(Me.json.secondary_value_accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Ze(e(27, L = Me.getDerivedFromVars(Me.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(26, ee = Me.getDerivedFromVars(Me.json.ranges))), t.$$.dirty[0] & /*minValue, maxValue*/
    24 | t.$$.dirty[2] & /*$jsonMinValue, $jsonMaxValue*/
    1536 && (e(3, Te = oo(ve, Te)), e(4, bt = oo(Dt, bt)), nt()), t.$$.dirty[0] & /*minValue, maxValue, value*/
    2072 | t.$$.dirty[2] & /*$valueVariable*/
    256) {
      const De = Co(rt || 0, Te, bt);
      De !== gr && e(11, gr = De);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue, value2*/
    4120 | t.$$.dirty[2] & /*$value2Variable*/
    128) {
      const De = Co(gt || 0, Te, bt);
      De !== $e && e(12, $e = De);
    }
    if (t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbStyle*/
    64 && e(5, er = so(Ve, is, er)), t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbSecondaryStyle*/
    32 && e(6, Qt = so(me, is, er)), t.$$.dirty[1] & /*trackInactiveStyle*/
    16384 | t.$$.dirty[2] & /*$jsonTrackInactiveStyle*/
    16 && e(45, Xt = so(ot, kl, Xt)), t.$$.dirty[1] & /*trackActiveStyle*/
    32768 | t.$$.dirty[2] & /*$jsonTrackActiveStyle*/
    8 && e(46, ur = so(dt, kl, ur)), t.$$.dirty[2] & /*$jsonMarkActiveStyle*/
    4) {
      let De = so(Xe, is, xn);
      De !== xn && e(47, Yt = De);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markActiveStyle*/
    65536 && (Yt ? (e(17, jr = i ? ss(Math.min(gr, $e), Math.max(gr, $e) + 1, Te, bt, !0) : ss(Te, gr, Te, bt, !0)), nt()) : e(17, jr = [])), t.$$.dirty[2] & /*$jsonMarkInactiveStyle*/
    2) {
      let De = so(xe, is, xn);
      De !== xn && e(48, Tt = De);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markInactiveStyle*/
    131072 && (Tt ? (e(18, It = i ? ss(Math.min(gr, $e), Math.max(gr, $e) + 1, Te, bt, !1) : ss(gr + 1, bt + 1, Te, bt, !0)), nt()) : e(18, It = [])), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[2] & /*$jsonTextStyle*/
    1 && e(7, ut = zc(ye, Oe.typefaceProvider, ut)), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[1] & /*$jsonSecondaryTextStyle*/
    1073741824 && e(8, qt = zc(Ie, Oe.typefaceProvider, ut)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    536870912 && (ke != null && ke.description ? e(19, sr = Yo(ke)) : Me.logError(K(new Error('Missing accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    512 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    268435456 && e(9, mr = _n(Fe, mr)), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 | t.$$.dirty[1] & /*$jsonSecondaryAccessibility*/
    134217728 && (pe != null && pe.description ? e(20, dr = Yo(pe)) : i && Me.logError(K(new Error('Missing second accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext, thumbStyle, hasError*/
    1057 | t.$$.dirty[1] & /*trackActiveStyle, trackInactiveStyle*/
    49152) {
      let De = !1;
      xt.hasAction() ? (Me.logError(K(new Error('Cannot show "slider" inside component with an action or inside accessibility mode=exclude'))), De = !0) : er === xn ? (Me.logError(K(new Error('Missing "thumb_style" in slider'))), De = !0) : ur === xn ? (Me.logError(K(new Error('Missing "track_active_style" in slider'))), De = !0) : Xt === xn && (Me.logError(K(new Error('Missing "track_inactive_style" in slider'))), De = !0), De !== pr && e(10, pr = De);
    }
    t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(52, fe = ce(Math.max(...[er.width, Qt.width, 0].filter(Tn)))), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(51, P = ce(Math.max(...[er.height, Qt.height, 0].filter(Tn)))), t.$$.dirty[0] & /*value, minValue, maxValue*/
    2072 && e(50, Z = (gr - Te) / (bt - Te)), t.$$.dirty[0] & /*secondVariable, value2, minValue, maxValue*/
    12312 && e(49, se = i ? ($e - Te) / (bt - Te) : void 0), t.$$.dirty[0] & /*value, value2, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(54, j = se !== void 0 ? Math.min(gr, $e) : Te), t.$$.dirty[0] & /*value2, value, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(53, z = se !== void 0 ? Math.abs($e - gr) : gr - Te), t.$$.dirty[0] & /*$direction, minValue, maxValue*/
    16408 | t.$$.dirty[1] & /*trackActiveOffset, trackActivePart, trackInactiveStyle, trackActiveStyle, $jsonRanges*/
    79740928 && ct({
      direction: ie,
      minValue: Te,
      maxValue: bt,
      trackActiveOffset: j,
      trackActivePart: z,
      trackInactiveStyle: Xt,
      trackActiveStyle: ur,
      ranges: de
    }), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle, textStyle, textSecondaryStyle*/
    480 | t.$$.dirty[1] & /*markActiveStyle, markInactiveStyle, maxThumbWidth, maxThumbHeight, trackPart, trackSecondaryPart*/
    4128768 && e(25, N = {
      "--divkit-slider-thumb-width": ce(er.width),
      "--divkit-slider-thumb-height": ce(er.height),
      "--divkit-slider-thumb-secondary-width": ce(Qt.width),
      "--divkit-slider-thumb-secondary-height": ce(Qt.height),
      "--divkit-slider-text-offset-x": (v = ut == null ? void 0 : ut.offset) != null && v.x ? fn(ut.offset.x) : void 0,
      "--divkit-slider-text-offset-y": (re = ut == null ? void 0 : ut.offset) != null && re.y ? fn(ut.offset.y) : void 0,
      "--divkit-slider-text-secondary-offset-x": (d = qt == null ? void 0 : qt.offset) != null && d.x ? fn(qt.offset.x) : void 0,
      "--divkit-slider-text-secondary-offset-y": (C = qt == null ? void 0 : qt.offset) != null && C.y ? fn(qt.offset.y) : void 0,
      "--divkit-slider-tick-active-width": Yt ? ce(Yt.width) : void 0,
      "--divkit-slider-tick-active-height": Yt ? ce(Yt.height) : void 0,
      "--divkit-slider-tick-active-border-radius": Yt ? ce(Yt.borderRadius) : void 0,
      "--divkit-slider-tick-active-background": (Yt == null ? void 0 : Yt.background) || void 0,
      "--divkit-slider-tick-active-box-shadow": (Yt == null ? void 0 : Yt.boxShadow) || void 0,
      "--divkit-slider-tick-inactive-width": Tt ? ce(Tt.width) : void 0,
      "--divkit-slider-tick-inactive-height": Tt ? ce(Tt.height) : void 0,
      "--divkit-slider-tick-inactive-border-radius": Tt ? ce(Tt.borderRadius) : void 0,
      "--divkit-slider-tick-inactive-background": (Tt == null ? void 0 : Tt.background) || void 0,
      "--divkit-slider-tick-inactive-box-shadow": (Tt == null ? void 0 : Tt.boxShadow) || void 0,
      "--divkit-slider-max-thumb-width": fe,
      "--divkit-slider-max-thumb-height": P,
      "--divkit-slider-track-part": Z,
      "--divkit-slider-track-secondary-part": se
    }), t.$$.dirty[0] & /*$direction*/
    16384 && e(24, W = { direction: ie }), t.$$.dirty[0] & /*componentContext, input*/
    5 | t.$$.dirty[1] & /*prevId*/
    8192 && Me.json && Wt && (mt && (Oe.unregisterFocusable(mt), e(44, mt = void 0)), Me.id && !Me.fakeElement && (e(44, mt = Me.id), Oe.registerFocusable(mt, {
      focus() {
        Wt && Wt.focus();
      }
    })));
  }, [
    Me,
    T,
    Wt,
    Te,
    bt,
    er,
    Qt,
    ut,
    qt,
    mr,
    pr,
    gr,
    $e,
    i,
    ie,
    Ft,
    ar,
    jr,
    It,
    sr,
    dr,
    Fr,
    s,
    a,
    W,
    N,
    ee,
    L,
    G,
    O,
    w,
    k,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    ae,
    Mt,
    br,
    le,
    mt,
    Xt,
    ur,
    Yt,
    Tt,
    se,
    Z,
    P,
    fe,
    z,
    j,
    o,
    n,
    de,
    pe,
    Fe,
    ke,
    Ie,
    ye,
    xe,
    Xe,
    dt,
    ot,
    me,
    Ve,
    gt,
    rt,
    Dt,
    ve,
    Ct,
    rr,
    hr,
    Sr
  ];
}
class qy extends Lr {
  constructor(r) {
    super(), Or(this, r, Jy, Gy, Ar, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const Yy = "appkit-input", Ky = "appkit-input__aligner", Xy = "appkit-input__input", Zy = "appkit-input__placeholder", Qy = "appkit-input__input_singleline", xy = "appkit-input__input_multiline", Fo = {
  input: Yy,
  "input_alignment-horizontal_center": "appkit-input_alignment-horizontal_center",
  "input_alignment-horizontal_end": "appkit-input_alignment-horizontal_end",
  input__aligner: Ky,
  input__input: Xy,
  input__placeholder: Zy,
  "input_alignment-vertical_start": "appkit-input_alignment-vertical_start",
  "input_alignment-vertical_end": "appkit-input_alignment-vertical_end",
  "input_alignment-vertical_baseline": "appkit-input_alignment-vertical_baseline",
  "input_highlight-color": "appkit-input_highlight-color",
  input__input_singleline: Qy,
  "input__scroll-wrapper": "appkit-input__scroll-wrapper",
  input__input_multiline: xy,
  "input__input_has-custom-focus": "appkit-input__input_has-custom-focus"
};
function Ki(t, r) {
  if (t === r)
    return {
      start: t.length,
      added: 0,
      removed: 0
    };
  if (t.length > r.length) {
    const i = Ki(r, t);
    return {
      start: i.start,
      added: i.removed,
      removed: i.added
    };
  }
  let e = 0, n = r.length - 1;
  const o = r.length - t.length;
  for (; e < n && e < t.length && t[e] === r[e]; )
    ++e;
  for (; n - o >= e && t[n - o] === r[n]; )
    --n;
  return ++n, {
    start: e,
    added: n - e,
    removed: n - e - o
  };
}
class Yc {
  constructor(r) {
    this.char = r;
  }
}
class po {
  constructor(r, e, n) {
    this.char = r, this.filter = e, this.placeholder = n;
  }
}
class da {
  constructor(r) {
    Er(this, "maskData");
    Er(this, "filters", /* @__PURE__ */ new Map());
    Er(this, "destructedValue", []);
    Er(this, "cursorPos", 0);
    this.maskData = r, this.updateMaskData(r);
  }
  get cursorPosition() {
    return this.cursorPos;
  }
  get rawValue() {
    return this.collectValueRange(0, this.destructedValue.length - 1);
  }
  get value() {
    let r = "";
    for (let e = 0; e < this.destructedValue.length; ++e) {
      const n = this.destructedValue[e];
      if (n instanceof Yc)
        r += n.char;
      else if (n instanceof po)
        if (n.char)
          r += n.char;
        else if (this.maskData.alwaysVisible)
          r += n.placeholder;
        else
          break;
    }
    return r;
  }
  firstEmptyHolderIndex() {
    const r = this.destructedValue.findIndex((e) => e instanceof po && !e.char);
    return r !== -1 ? r : this.destructedValue.length;
  }
  updateMaskData(r, e = !0) {
    const n = this.maskData !== r && e ? this.rawValue : null;
    this.filters = /* @__PURE__ */ new Map(), this.maskData = r, this.maskData.decoding.forEach((o) => {
      if (o.filter)
        try {
          const i = new RegExp(o.filter);
          this.filters.set(o.key, i);
        } catch (i) {
          this.onException(K(i, {
            level: "error",
            additional: {
              key: o.key
            }
          }));
        }
    }), this.destructedValue = this.maskData.pattern.split("").map((o) => {
      const i = this.maskData.decoding.find((s) => s.key === o);
      return i ? new po(
        null,
        this.filters.get(i.key),
        i.placeholder
      ) : new Yc(o);
    }), n !== null && this.overrideRawValue(n);
  }
  overrideRawValue(r) {
    this.clearRange(0, this.destructedValue.length), this.replaceChars(r, 0), this.cursorPos = Math.min(this.cursorPos, this.value.length);
  }
  applyChangeFrom(r, e) {
    const n = Ki(this.value, r);
    e !== void 0 && (n.start = Math.max(0, e - n.added));
    const o = this.replaceBodyTail(n, r);
    this.calculateCursorPosition(n, o);
  }
  replaceBodyTail(r, e) {
    const n = this.buildBodySubstring(r, e), o = this.buildTailSubstring(r);
    this.cleanup(r);
    const i = this.firstEmptyHolderIndex(), s = o ? this.calculateMaxShift(o, i) : void 0;
    this.replaceChars(n, i, s);
    const a = this.firstEmptyHolderIndex();
    return this.replaceChars(o, a), a;
  }
  buildBodySubstring(r, e) {
    return e.substring(r.start, r.start + r.added);
  }
  buildTailSubstring(r) {
    return this.collectValueRange(
      r.start + r.removed,
      this.destructedValue.length - 1
    );
  }
  calculateMaxShift(r, e) {
    if (this.filters.size <= 1) {
      let i = 0, s = e;
      for (; s < this.destructedValue.length; )
        this.destructedValue[s] instanceof po && ++i, ++s;
      return Math.max(0, i - r.length);
    }
    const n = this.calculateInsertableSubstring(r, e);
    let o = 0;
    for (; o < this.destructedValue.length && n === this.calculateInsertableSubstring(r, e + o); )
      ++o;
    return Math.max(0, o - 1);
  }
  cleanup(r) {
    if (r.added === 0 && r.removed === 1) {
      let e = r.start;
      for (; e >= 0; ) {
        const n = this.destructedValue[e];
        if (n instanceof po && n.char !== null) {
          n.char = null;
          break;
        } else
          --e;
      }
    }
    this.clearRange(r.start, this.destructedValue.length);
  }
  clearRange(r, e) {
    let n = r;
    for (; n < e && n < this.destructedValue.length; ) {
      const o = this.destructedValue[n];
      o instanceof po && (o.char = null), ++n;
    }
  }
  calculateCursorPosition(r, e) {
    const n = this.firstEmptyHolderIndex();
    let o;
    r.start < n ? o = Math.min(this.firstHolderAfter(e), this.value.length) : o = n, this.cursorPos = o;
  }
  calculateInsertableSubstring(r, e) {
    let n = "", o = e;
    const i = () => {
      var s;
      for (; o < this.destructedValue.length && !(this.destructedValue[o] instanceof po); )
        ++o;
      return (s = this.destructedValue[o]) == null ? void 0 : s.filter;
    };
    return r.split("").forEach((s) => {
      const a = i();
      a != null && a.test(s) && (n += s, ++o);
    }), n;
  }
  collectValueRange(r, e) {
    let n = "", o = r;
    for (; o <= e; ) {
      const i = this.destructedValue[o];
      i instanceof po && i.char !== null && (n += i.char), ++o;
    }
    return n;
  }
  replaceChars(r, e, n) {
    let o = this.calculateInsertableSubstring(r, e);
    n !== void 0 && (o = o.substring(0, n));
    let i = e, s = 0;
    for (; i < this.destructedValue.length && s < o.length; ) {
      const a = this.destructedValue[i], l = o[s];
      a instanceof po && (a.char = l, ++s), ++i;
    }
  }
  firstHolderAfter(r) {
    let e = r;
    for (; e < this.destructedValue.length && !(this.destructedValue[e] instanceof po); )
      ++e;
    return e;
  }
}
class $y extends da {
  constructor(r, e) {
    super(r), this.logError = e;
  }
  onException(r) {
    this.logError(r);
  }
}
function ew(t, r, e) {
  if (typeof t.pattern == "string" && Array.isArray(t.pattern_elements) && t.pattern_elements.every((n) => n.key && typeof n.key == "string")) {
    const n = {
      pattern: t.pattern,
      alwaysVisible: !!t.always_visible,
      decoding: t.pattern_elements.map((o) => ({
        key: o.key,
        filter: o.regex && typeof o.regex == "string" ? o.regex : void 0,
        placeholder: o.placeholder && typeof o.placeholder == "string" ? o.placeholder : "_"
      }))
    };
    return e ? (e.updateMaskData(n), e) : new $y(n, r);
  }
  return e || null;
}
class tw extends da {
  constructor(e = void 0, n) {
    super({
      pattern: "",
      decoding: [],
      alwaysVisible: !1
    });
    Er(this, "currencyFormatter", new Intl.NumberFormat());
    Er(this, "decimalSeparator", ".");
    Er(this, "localeDigits", {});
    Er(this, "trimZeroRegExp", new RegExp(""));
    this.logError = n, this.initFormatter(e);
  }
  updateCurrencyParams(e) {
    const n = this.parseFormat(this.rawValue) || 0;
    this.initFormatter(e);
    const o = n.toString().replace(".", this.decimalSeparator);
    this.applyChangeFrom(o);
  }
  initFormatter(e) {
    try {
      this.currencyFormatter = new Intl.NumberFormat(e, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }), this.decimalSeparator = this.currencyFormatter.format(0)[1], this.localeDigits = new Array(10).fill("").reduce((i, s, a) => (i[a] = this.currencyFormatter.format(a)[0], i), {});
      const o = Object.keys(this.localeDigits).filter((i) => i !== "0").map((i) => this.localeDigits[i]).join("|");
      this.trimZeroRegExp = new RegExp(`^${this.localeDigits[0]}+(?=${o})`);
    } catch (n) {
      this.onException(K(n, {
        level: "error",
        additional: {
          locale: e
        }
      }));
    }
  }
  invalidateMaskDataForFormatted(e) {
    const n = this.currencyFormatter.format(e), o = this.formatPattern(n), i = [{
      key: "#",
      filter: `[${[...Object.values(this.localeDigits)].join("")}]`,
      placeholder: this.localeDigits[0]
    }, {
      key: this.decimalSeparator,
      filter: `[${this.decimalSeparator}]`,
      placeholder: this.decimalSeparator
    }];
    this.updateMaskData({
      pattern: o,
      decoding: i,
      alwaysVisible: this.maskData.alwaysVisible
    }, !1);
  }
  overrideRawValue(e) {
    const n = this.parseFormat(e) || 0;
    this.invalidateMaskDataForFormatted(n), super.overrideRawValue(e);
  }
  applyChangeFrom(e, n) {
    const o = Ki(this.value, e), i = this.value.lastIndexOf(this.decimalSeparator), s = e.lastIndexOf(this.decimalSeparator), a = i !== s || i === -1 && s === -1, l = this.validFormat(e, o);
    this.cleanup(o);
    const u = this.parseFormat(l) || 0;
    a && this.invalidateMaskDataForFormatted(u), this.replaceChars(l, 0), this.value.length > o.start && !this.isDigit(this.value[o.start]) ? this.cursorPos = n != null ? n : this.cursorPosition : this.cursorPos = Math.abs(this.value.length - (e.length - (n != null ? n : this.cursorPosition)));
  }
  parseFormat(e) {
    return parseFloat(
      e.replace(/./g, (n) => {
        const o = this.localeDigits[n];
        return o || (n === this.decimalSeparator ? "." : "");
      })
    );
  }
  formatPattern(e) {
    let n = "";
    for (const o of e)
      n += this.isDigit(o) ? "#" : o;
    return n;
  }
  validFormat(e, n) {
    if (!e)
      return "";
    let o = -1, i = 0;
    for (; i < e.length; ) {
      if (e[i] === this.decimalSeparator && !this.inDiff(n, i)) {
        o = i;
        break;
      }
      i++;
    }
    let s = -1;
    n.added === 1 && n.removed === 0 && [",", "."].includes(e[n.start]) && (s = n.start);
    const a = this.currencyFormatter.resolvedOptions().maximumFractionDigits || 0;
    let l = a;
    if (o !== -1)
      for (i = o; i < e.length; )
        this.isDigit(e[i]) && !this.inDiff(n, i) && l--, i++;
    else {
      let _ = !1;
      for (let h = 0; h < e.length; h++) {
        const m = e[h];
        m === this.decimalSeparator ? _ = !0 : !this.inDiff(n, h) && _ && this.isDigit(m) && l--;
      }
    }
    const u = e.includes(this.decimalSeparator) || s !== -1, c = [];
    i = e.length - 1;
    let f = !1;
    for (; i >= 0; ) {
      const _ = e[i], h = c.length <= a;
      this.isDigit(_) ? this.inDiff(n, i) && !f && u ? l > 0 && (c.push(_), l--) : c.push(_) : h && o === -1 && i === s ? (c.push(this.decimalSeparator), f = !0) : h && _ === this.decimalSeparator && (o === i || o === -1) && (c.push(this.decimalSeparator), f = !0, o = i), i--;
    }
    return c.reverse().join("").replace(this.trimZeroRegExp, "");
  }
  inDiff(e, n) {
    return e.start <= n && n < e.start + e.added;
  }
  isDigit(e) {
    return !!this.localeDigits[e];
  }
  onException(e) {
    this.logError(e);
  }
}
function rw(t, r, e) {
  return e ? (e.updateCurrencyParams(t.locale), e) : new tw(t.locale, r);
}
const Jd = 3;
function Gl(t) {
  const r = t.textContent;
  let e = 0;
  return typeof r == "string" && (e += r.length, t instanceof HTMLElement && (t.tagName === "DIV" || t.tagName === "BR") && ++e), e;
}
function Kc(t, r) {
  var e;
  try {
    let n = 0;
    const o = window.getSelection();
    if (!o)
      return 0;
    const i = o.getRangeAt(0);
    let s;
    if (i && (n += r === "end" ? i.endOffset : i.startOffset, s = r === "end" ? i.endContainer : i.startContainer), s instanceof HTMLElement) {
      let a = 0;
      for (let l = 0, u = Math.min(n, s.childNodes.length); l < u; ++l)
        a += Gl(s.childNodes[l]);
      n = a;
    }
    for (; s && s !== t; ) {
      const a = s.parentNode;
      if (!a)
        return 0;
      const l = Array.from(a.childNodes).indexOf(s);
      for (let u = 0; u < l; ++u) {
        const c = a.childNodes[u];
        n += Gl(c);
      }
      s instanceof HTMLElement && (s.tagName === "DIV" && ((e = a.childNodes[l - 1]) == null ? void 0 : e.nodeType) === Jd || s.tagName === "BR") && ++n, s = a;
    }
    return n;
  } catch {
    return 0;
  }
}
function Jl(t, r, e, n) {
  if (t.nodeType === Jd) {
    try {
      e === "start" ? r.setStart(t, n) : r.setEnd(t, n);
    } catch {
    }
    return;
  }
  if (t instanceof HTMLElement && t.tagName === "BR") {
    try {
      const o = window.getSelection();
      if (o) {
        o.removeAllRanges();
        const i = document.createRange(), s = t.parentNode, a = Array.from(s.childNodes).indexOf(t) + 1;
        i.setStart(s, a), i.setEnd(s, a), o.addRange(i);
      }
    } catch {
    }
    return;
  }
  for (let o = 0, i = t.childNodes.length; o < i; ++o) {
    const s = t.childNodes[o], a = Gl(s);
    if (n <= a) {
      Jl(s, r, e, n);
      return;
    }
    n -= a;
  }
}
const nw = {
  kotlin: {
    public_default_values: !0
  },
  swift: {
    public_default_values: !0
  }
}, ow = {
  rus_local: {
    value: "0 (000) 000-00-00"
  },
  rus: {
    value: "+0 (000) 000-00-00"
  },
  am: {
    value: "+000 (000) 000-00-00"
  },
  az: {
    value: "+000 (000) 000-00-00"
  },
  br: {
    value: "+00 (00) 0000-0000"
  },
  by: {
    value: "+000 (00) 000-00-00"
  },
  kg: {
    value: "+000 (000) 000-00-00"
  },
  md: {
    value: "+000 (000) 0-00-00"
  },
  kz: {
    value: "+0 (000) 000-00-00"
  },
  ua: {
    value: "+000 (00) 000-00-00"
  },
  uz: {
    value: "+000 (00) 000-00-00"
  },
  uk: {
    value: "+00 0000 000000"
  },
  swiss: {
    value: "+00 00 000-00-00"
  },
  angola: {
    value: "+000 000 000 000"
  },
  netherlands: {
    value: "+00 00 000 0000"
  },
  ge: {
    value: "+000 (000) 00-00-00"
  },
  short: {
    value: "+0 (000) 000-00-00"
  },
  middle: {
    value: "+00 (000) 000-00-00"
  },
  long: {
    value: "+000 (00) 000-00-00"
  },
  universal: {
    value: "+0000000000000"
  }
}, iw = "object", sw = {
  extra_numbers: {
    type: "string",
    enum: [
      "00"
    ]
  },
  value: {
    type: "object",
    additionalProperties: !0,
    default_value: {
      1: {
        $ref: "#/constants/short"
      },
      2: {
        0: {
          $ref: "#/constants/middle"
        },
        4: {
          4: {
            $ref: "#/constants/angola"
          },
          "*": {
            $ref: "#/constants/long"
          }
        },
        7: {
          $ref: "#/constants/middle"
        },
        "*": {
          $ref: "#/constants/long"
        }
      },
      3: {
        1: {
          $ref: "#/constants/netherlands"
        },
        5: {
          0: {
            $ref: "#/constants/ua"
          },
          "*": {
            $ref: "#/constants/long"
          }
        },
        7: {
          3: {
            $ref: "#/constants/md"
          },
          4: {
            $ref: "#/constants/am"
          },
          5: {
            $ref: "#/constants/by"
          },
          "*": {
            $ref: "#/constants/long"
          }
        },
        8: {
          0: {
            $ref: "#/constants/ua"
          },
          "*": {
            $ref: "#/constants/long"
          }
        },
        "*": {
          $ref: "#/constants/middle"
        }
      },
      4: {
        1: {
          $ref: "#/constants/swiss"
        },
        2: {
          $ref: "#/constants/long"
        },
        4: {
          $ref: "#/constants/uk"
        },
        "*": {
          $ref: "#/constants/middle"
        }
      },
      5: {
        0: {
          $ref: "#/constants/long"
        },
        5: {
          $ref: "#/constants/br"
        },
        9: {
          $ref: "#/constants/long"
        },
        "*": {
          $ref: "#/constants/middle"
        }
      },
      6: {
        7: {
          $ref: "#/constants/long"
        },
        8: {
          $ref: "#/constants/long"
        },
        9: {
          $ref: "#/constants/long"
        },
        "*": {
          $ref: "#/constants/middle"
        }
      },
      7: {
        3: {
          3: {
            $ref: "#/constants/kz"
          },
          "*": {
            $ref: "#/constants/rus"
          }
        },
        7: {
          $ref: "#/constants/kz"
        },
        "*": {
          $ref: "#/constants/rus"
        }
      },
      8: {
        5: {
          $ref: "#/constants/long"
        },
        8: {
          $ref: "#/constants/long"
        },
        9: {
          $ref: "#/constants/rus_local"
        },
        "*": {
          $ref: "#/constants/middle"
        }
      },
      9: {
        6: {
          $ref: "#/constants/long"
        },
        7: {
          $ref: "#/constants/long"
        },
        9: {
          4: {
            $ref: "#/constants/az"
          },
          5: {
            $ref: "#/constants/ge"
          },
          6: {
            $ref: "#/constants/kg"
          },
          8: {
            $ref: "#/constants/uz"
          },
          "*": {
            $ref: "#/constants/long"
          }
        },
        "*": {
          $ref: "#/constants/middle"
        }
      },
      "*": {
        $ref: "#/constants/universal"
      }
    }
  }
}, qd = {
  codegen: nw,
  constants: ow,
  type: iw,
  properties: sw
}, lw = "000000000000000", Xc = "*", aw = "00", Zc = [{
  key: "0",
  filter: "\\d",
  placeholder: "_"
}];
class uw extends da {
  constructor(e) {
    super({
      pattern: xc(""),
      decoding: Zc,
      alwaysVisible: !1
    });
    Er(this, "decimalSeparator", ".");
    Er(this, "localeDigits", {});
    Er(this, "trimZeroRegExp", new RegExp(""));
    this.logError = e;
  }
  overrideRawValue(e) {
    this.tryInvalidateMaskDataWith(e), super.overrideRawValue(e);
  }
  applyChangeFrom(e, n) {
    const o = Ki(this.value, e);
    n !== void 0 && (o.start = Math.max(0, n - o.added));
    const i = this.rawValue, s = this.replaceBodyTail(o, e), a = this.rawValue, l = this.newMaskPatternFor(a);
    if (l == null) {
      this.calculateCursorPosition(o, s);
      return;
    }
    this.updateMaskDataWith(l), this.replaceChars(a, 0);
    const u = Ki(i, a), c = u.start + u.added;
    this.calculateCursorPositionBy(c);
  }
  calculateCursorPositionBy(e) {
    let n = 0, o = 0;
    for (; n < this.destructedValue.length && o < e; )
      this.destructedValue[n++] instanceof po && o++;
    this.cursorPos = this.firstHolderAfter(n);
  }
  tryInvalidateMaskDataWith(e) {
    const n = this.newMaskPatternFor(e);
    n && this.updateMaskDataWith(n);
  }
  newMaskPatternFor(e) {
    const n = xc(e), o = this.maskData.pattern;
    return n !== o ? n : null;
  }
  updateMaskDataWith(e) {
    return this.updateMaskData({
      pattern: e,
      decoding: Zc,
      alwaysVisible: this.maskData.alwaysVisible
    }, !1);
  }
  onException(e) {
    this.logError(e);
  }
}
function Qc(t) {
  return "$ref" in t ? qd.constants[t.$ref.split("/").pop()] : t;
}
function xc(t) {
  if (!t)
    return lw;
  let r = qd.properties.value.default_value, e = 0;
  for (; !("value" in r); ) {
    if (e >= t.length) {
      r = Qc(r[Xc]);
      break;
    }
    const n = t[e++];
    r = Qc(r[n in r ? n : Xc]);
  }
  return r.value + aw;
}
function cw(t, r) {
  return r || new uw(t);
}
function fw(t) {
  let r, e;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function dw(t) {
  let r, e;
  return r = new yn({
    props: {
      alwaysCustomFocus: !0,
      cls: ht(
        "input",
        Fo,
        /*mods*/
        t[20]
      ),
      style: (
        /*stl*/
        t[19]
      ),
      customDescription: !0,
      customActions: "input",
      customPaddings: !0,
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: {
        default: [
          mw,
          ({ focusHandler: n, blurHandler: o, hasCustomFocus: i }) => ({
            123: n,
            124: o,
            125: i
          }),
          ({ focusHandler: n, blurHandler: o, hasCustomFocus: i }) => [
            0,
            0,
            0,
            n ? 1073741824 : 0,
            (o ? 1 : 0) | (i ? 2 : 0)
          ]
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      1048576 && (i.cls = ht(
        "input",
        Fo,
        /*mods*/
        n[20]
      )), o[0] & /*stl*/
      524288 && (i.style = /*stl*/
      n[19]), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*autocapitalization, description, enterKeyType, describedBy, paddingStl, input, contentEditableValue, isEnabled, verticalPaddingStl, placeholder, isMultiline, inputType, inputMode, maxLength, value*/
      2555756 | o[1] & /*$jsonSelectAll*/
      65536 | o[3] & /*focusHandler*/
      1073741824 | o[4] & /*$$scope, hasCustomFocus, blurHandler*/
      7 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function _w(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Se("input"), g(
        r,
        "type",
        /*inputType*/
        t[10]
      ), g(
        r,
        "inputmode",
        /*inputMode*/
        t[11]
      ), g(r, "class", e = ht("input__input", Fo, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[125]
        ),
        singleline: !0
      })), g(r, "autocomplete", "off"), g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[13]
      ), g(
        r,
        "aria-label",
        /*description*/
        t[12]
      ), g(r, "aria-describedby", n = /*describedBy*/
      t[15] || void 0), g(r, "style", o = $t(
        /*paddingStl*/
        t[18]
      )), r.disabled = i = !/*isEnabled*/
      t[5], g(r, "maxlength", s = /*maxLength*/
      t[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        t[6]
      )), g(
        r,
        "placeholder",
        /*placeholder*/
        t[21]
      ), r.value = /*value*/
      t[3], g(r, "enterkeyhint", a = /*enterKeyType*/
      t[14] === "default" ? void 0 : (
        /*enterKeyType*/
        t[14]
      ));
    },
    m(c, f) {
      q(c, r, f), t[106](r), l || (u = [
        He(
          r,
          "input",
          /*onInput*/
          t[49]
        ),
        He(
          r,
          "keydown",
          /*onKeyDown*/
          t[51]
        ),
        He(r, "mousedown", function() {
          Pr(
            /*$jsonSelectAll*/
            t[47] ? (
              /*onMousedown*/
              t[52]
            ) : void 0
          ) && (t[47] ? (
            /*onMousedown*/
            t[52]
          ) : void 0).apply(this, arguments);
        }),
        He(r, "click", function() {
          Pr(
            /*$jsonSelectAll*/
            t[47] ? (
              /*onClick*/
              t[53]
            ) : void 0
          ) && (t[47] ? (
            /*onClick*/
            t[53]
          ) : void 0).apply(this, arguments);
        }),
        He(r, "focus", function() {
          Pr(
            /*focusHandler*/
            t[123]
          ) && t[123].apply(this, arguments);
        }),
        He(r, "blur", function() {
          Pr(
            /*blurHandler*/
            t[124]
          ) && t[124].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[0] & /*inputType*/
      1024 && g(
        r,
        "type",
        /*inputType*/
        t[10]
      ), f[0] & /*inputMode*/
      2048 && g(
        r,
        "inputmode",
        /*inputMode*/
        t[11]
      ), f[4] & /*hasCustomFocus*/
      2 && e !== (e = ht("input__input", Fo, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[125]
        ),
        singleline: !0
      })) && g(r, "class", e), f[0] & /*autocapitalization*/
      8192 && g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[13]
      ), f[0] & /*description*/
      4096 && g(
        r,
        "aria-label",
        /*description*/
        t[12]
      ), f[0] & /*describedBy*/
      32768 && n !== (n = /*describedBy*/
      t[15] || void 0) && g(r, "aria-describedby", n), f[0] & /*paddingStl*/
      262144 && o !== (o = $t(
        /*paddingStl*/
        t[18]
      )) && g(r, "style", o), f[0] & /*isEnabled*/
      32 && i !== (i = !/*isEnabled*/
      t[5]) && (r.disabled = i), f[0] & /*maxLength*/
      64 && s !== (s = /*maxLength*/
      t[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        t[6]
      )) && g(r, "maxlength", s), f[0] & /*placeholder*/
      2097152 && g(
        r,
        "placeholder",
        /*placeholder*/
        t[21]
      ), f[0] & /*value*/
      8 && r.value !== /*value*/
      t[3] && (r.value = /*value*/
      t[3]), f[0] & /*enterKeyType*/
      16384 && a !== (a = /*enterKeyType*/
      t[14] === "default" ? void 0 : (
        /*enterKeyType*/
        t[14]
      )) && g(r, "enterkeyhint", a);
    },
    d(c) {
      c && J(r), t[106](null), l = !1, Hr(u);
    }
  };
}
function pw(t) {
  let r, e, n, o, i, s, a = !/*contentEditableValue*/
  t[9] && /*placeholder*/
  t[21] && $c(t);
  function l(f, _) {
    return (
      /*isEnabled*/
      f[5] ? hw : gw
    );
  }
  let u = l(t), c = u(t);
  return {
    c() {
      r = Se("span"), a && a.c(), e = lr(), n = Se("span"), o = Pn("​"), s = lr(), c.c(), g(n, "class", Fo.input__aligner), g(n, "aria-hidden", "true"), g(n, "style", i = $t(
        /*verticalPaddingStl*/
        t[17]
      )), g(r, "class", Fo["input__scroll-wrapper"]);
    },
    m(f, _) {
      q(f, r, _), a && a.m(r, null), pt(r, e), pt(r, n), pt(n, o), pt(r, s), c.m(r, null);
    },
    p(f, _) {
      !/*contentEditableValue*/
      f[9] && /*placeholder*/
      f[21] ? a ? a.p(f, _) : (a = $c(f), a.c(), a.m(r, e)) : a && (a.d(1), a = null), _[0] & /*verticalPaddingStl*/
      131072 && i !== (i = $t(
        /*verticalPaddingStl*/
        f[17]
      )) && g(n, "style", i), u === (u = l(f)) && c ? c.p(f, _) : (c.d(1), c = u(f), c && (c.c(), c.m(r, null)));
    },
    d(f) {
      f && J(r), a && a.d(), c.d();
    }
  };
}
function $c(t) {
  let r, e, n;
  return {
    c() {
      r = Se("div"), e = Pn(
        /*placeholder*/
        t[21]
      ), g(r, "class", Fo.input__placeholder), g(r, "aria-hidden", "true"), g(r, "style", n = $t(
        /*paddingStl*/
        t[18]
      ));
    },
    m(o, i) {
      q(o, r, i), pt(r, e);
    },
    p(o, i) {
      i[0] & /*placeholder*/
      2097152 && Qn(
        e,
        /*placeholder*/
        o[21]
      ), i[0] & /*paddingStl*/
      262144 && n !== (n = $t(
        /*paddingStl*/
        o[18]
      )) && g(r, "style", n);
    },
    d(o) {
      o && J(r);
    }
  };
}
function gw(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Se("span"), g(r, "class", ht("input__input", Fo, { multiline: !0 })), g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[13]
      ), g(r, "contenteditable", "false"), g(r, "role", "textbox"), g(
        r,
        "aria-label",
        /*description*/
        t[12]
      ), g(r, "aria-disabled", "true"), g(r, "aria-multiline", "true"), g(r, "aria-describedby", e = /*describedBy*/
      t[15] || void 0), g(r, "style", n = $t(
        /*paddingStl*/
        t[18]
      )), /*contentEditableValue*/
      t[9] === void 0 && eo(() => (
        /*span_input_handler_1*/
        t[105].call(r)
      ));
    },
    m(s, a) {
      q(s, r, a), t[104](r), /*contentEditableValue*/
      t[9] !== void 0 && (r.innerText = /*contentEditableValue*/
      t[9]), o || (i = He(
        r,
        "input",
        /*span_input_handler_1*/
        t[105]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*autocapitalization*/
      8192 && g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        s[13]
      ), a[0] & /*description*/
      4096 && g(
        r,
        "aria-label",
        /*description*/
        s[12]
      ), a[0] & /*describedBy*/
      32768 && e !== (e = /*describedBy*/
      s[15] || void 0) && g(r, "aria-describedby", e), a[0] & /*paddingStl*/
      262144 && n !== (n = $t(
        /*paddingStl*/
        s[18]
      )) && g(r, "style", n), a[0] & /*contentEditableValue*/
      512 && /*contentEditableValue*/
      s[9] !== r.innerText && (r.innerText = /*contentEditableValue*/
      s[9]);
    },
    d(s) {
      s && J(r), t[104](null), o = !1, i();
    }
  };
}
function hw(t) {
  let r, e, n, o, i, s, a;
  return {
    c() {
      r = Se("span"), g(r, "class", e = ht("input__input", Fo, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[125]
        ),
        multiline: !0
      })), g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[13]
      ), g(r, "contenteditable", "true"), g(r, "role", "textbox"), g(r, "tabindex", "0"), g(
        r,
        "aria-label",
        /*description*/
        t[12]
      ), g(r, "aria-multiline", "true"), g(r, "enterkeyhint", n = /*enterKeyType*/
      t[14] === "default" ? void 0 : (
        /*enterKeyType*/
        t[14]
      )), g(r, "aria-describedby", o = /*describedBy*/
      t[15] || void 0), g(r, "style", i = $t(
        /*paddingStl*/
        t[18]
      )), /*contentEditableValue*/
      t[9] === void 0 && eo(() => (
        /*span_input_handler*/
        t[103].call(r)
      ));
    },
    m(l, u) {
      q(l, r, u), t[102](r), /*contentEditableValue*/
      t[9] !== void 0 && (r.innerText = /*contentEditableValue*/
      t[9]), s || (a = [
        He(
          r,
          "input",
          /*span_input_handler*/
          t[103]
        ),
        He(
          r,
          "input",
          /*onInput*/
          t[49]
        ),
        He(
          r,
          "keydown",
          /*blockOverflow*/
          t[50]
        ),
        He(
          r,
          "keydown",
          /*onKeyDown*/
          t[51]
        ),
        He(r, "paste", kw),
        He(r, "mousedown", function() {
          Pr(
            /*$jsonSelectAll*/
            t[47] ? (
              /*onMousedown*/
              t[52]
            ) : void 0
          ) && (t[47] ? (
            /*onMousedown*/
            t[52]
          ) : void 0).apply(this, arguments);
        }),
        He(r, "click", function() {
          Pr(
            /*$jsonSelectAll*/
            t[47] ? (
              /*onClick*/
              t[53]
            ) : void 0
          ) && (t[47] ? (
            /*onClick*/
            t[53]
          ) : void 0).apply(this, arguments);
        }),
        He(r, "focus", function() {
          Pr(
            /*focusHandler*/
            t[123]
          ) && t[123].apply(this, arguments);
        }),
        He(r, "blur", function() {
          Pr(
            /*blurHandler*/
            t[124]
          ) && t[124].apply(this, arguments);
        })
      ], s = !0);
    },
    p(l, u) {
      t = l, u[4] & /*hasCustomFocus*/
      2 && e !== (e = ht("input__input", Fo, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[125]
        ),
        multiline: !0
      })) && g(r, "class", e), u[0] & /*autocapitalization*/
      8192 && g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[13]
      ), u[0] & /*description*/
      4096 && g(
        r,
        "aria-label",
        /*description*/
        t[12]
      ), u[0] & /*enterKeyType*/
      16384 && n !== (n = /*enterKeyType*/
      t[14] === "default" ? void 0 : (
        /*enterKeyType*/
        t[14]
      )) && g(r, "enterkeyhint", n), u[0] & /*describedBy*/
      32768 && o !== (o = /*describedBy*/
      t[15] || void 0) && g(r, "aria-describedby", o), u[0] & /*paddingStl*/
      262144 && i !== (i = $t(
        /*paddingStl*/
        t[18]
      )) && g(r, "style", i), u[0] & /*contentEditableValue*/
      512 && /*contentEditableValue*/
      t[9] !== r.innerText && (r.innerText = /*contentEditableValue*/
      t[9]);
    },
    d(l) {
      l && J(r), t[102](null), s = !1, Hr(a);
    }
  };
}
function mw(t) {
  let r;
  function e(i, s) {
    return (
      /*isMultiline*/
      i[8] ? pw : _w
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Kt();
    },
    m(i, s) {
      o.m(i, s), q(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && J(r), o.d(i);
    }
  };
}
function bw(t) {
  let r, e, n, o;
  const i = [dw, fw], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (or(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ir()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (B(e), o = !0);
    },
    o(l) {
      Q(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
const yw = typeof document < "u" && "inputMode" in document.createElement("input"), ef = {
  email: "email",
  number: "number",
  phone: "tel",
  single_line_text: "text",
  multi_line_text: "text",
  uri: "url",
  password: "password"
}, ww = /* @__PURE__ */ new Set([
  "Backspace",
  "Delete",
  "Tab",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "End",
  "Control",
  "Shift",
  "Alt",
  "Command",
  "Meta",
  "Escape"
]);
function kw(t) {
  if (t.preventDefault(), t.clipboardData) {
    let r = t.clipboardData.getData("text/plain");
    r = r.trim(), document.execCommand("inserttext", !1, r);
  }
}
function vw(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, G, L, ee, fe, P, Z, se, j, z, N, W, ie, de, je, Ee, pe, ze, be, Fe, Ge, Ze, ke = A, et = () => (ke(), ke = F(s, (Je) => e(76, Ze = Je)), s), _e, Ie = A, ue = () => (Ie(), Ie = F(a, (Je) => e(77, _e = Je)), a), oe, ye = A, $ = () => (ye(), ye = F(je, (Je) => e(111, oe = Je)), je), Ae, xe = A, qe = () => (xe(), xe = F(ie, (Je) => e(78, Ae = Je)), ie), te, Xe = A, Le = () => (Xe(), Xe = F(se, (Je) => e(79, te = Je)), se), tt, dt = A, lt = () => (dt(), dt = F(W, (Je) => e(80, tt = Je)), W), wt, ot, At = A, it = () => (At(), At = F(Z, (Je) => e(82, ot = Je)), Z), me, ne = A, at = () => (ne(), ne = F(P, (Je) => e(83, me = Je)), P), Ve, D = A, jt = () => (D(), D = F(fe, (Je) => e(84, Ve = Je)), fe), gt, kt = A, St = () => (kt(), kt = F(ee, (Je) => e(85, gt = Je)), ee), rt, Y = A, Vt = () => (Y(), Y = F(N, (Je) => e(86, rt = Je)), N), Dt, Gt = A, Jt = () => (Gt(), Gt = F(z, (Je) => e(87, Dt = Je)), z), ve, We = A, ft = () => (We(), We = F(L, (Je) => e(88, ve = Je)), L), Me, T = A, Oe = () => (T(), T = F(G, (Je) => e(89, Me = Je)), G), xt, ae = A, mt = () => (ae(), ae = F(O, (Je) => e(90, xt = Je)), O), Wt, Ft = A, ar = () => (Ft(), Ft = F(w, (Je) => e(91, Wt = Je)), w), Te, bt = A, er = () => (bt(), bt = F(k, (Je) => e(92, Te = Je)), k), Qt, Xt = A, ur = () => (Xt(), Xt = F(p, (Je) => e(93, Qt = Je)), p), jr, Yt = A, It = () => (Yt(), Yt = F(m, (Je) => e(94, jr = Je)), m), Tt, ut = A, qt = () => (ut(), ut = F(h, (Je) => e(95, Tt = Je)), h), sr, dr = A, mr = () => (dr(), dr = F(_, (Je) => e(96, sr = Je)), _), pr, Fr = A, zr = () => (Fr(), Fr = F(f, (Je) => e(97, pr = Je)), f), gr, $e = A, ct = () => ($e(), $e = F(c, (Je) => e(98, gr = Je)), c), Mt, br = A, wr = () => (br(), br = F(u, (Je) => e(99, Mt = Je)), u), nt, le = A, Ct = () => (le(), le = F(l, (Je) => e(100, nt = Je)), l), rr, hr = A, Sr = () => (hr(), hr = F(de, (Je) => e(101, rr = Je)), de), v, re = A, d = () => (re(), re = F(j, (Je) => e(47, v = Je)), j);
  t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => Ie()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Xe()), t.$$.on_destroy.push(() => dt()), t.$$.on_destroy.push(() => At()), t.$$.on_destroy.push(() => ne()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => kt()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => Gt()), t.$$.on_destroy.push(() => We()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => Ft()), t.$$.on_destroy.push(() => bt()), t.$$.on_destroy.push(() => Xt()), t.$$.on_destroy.push(() => Yt()), t.$$.on_destroy.push(() => ut()), t.$$.on_destroy.push(() => dr()), t.$$.on_destroy.push(() => Fr()), t.$$.on_destroy.push(() => $e()), t.$$.on_destroy.push(() => br()), t.$$.on_destroy.push(() => le()), t.$$.on_destroy.push(() => hr()), t.$$.on_destroy.push(() => re());
  let { componentContext: C } = r, { layoutParams: De = void 0 } = r;
  const Re = Dr(Yr), Ot = Dr(So), H = Re.direction;
  bn(t, H, (Je) => e(81, wt = Je));
  let Lt, st, Ue = !1, Ye = null, Ut = "", yr = "", Jr = !1, tn = "", Gr = 12, he, wn = "", Kr = "", on, zn = "", y = "#000", E = "", S = "start", x = "center", R = "multi_line_text", Qe = "text", Ce, Zt = "", yt = null, Ke = "", tr = "", Et = "", Cr = !0, Vr = 1 / 0, sn = "off", ln = "default", Cn = "", un = !1, Dn = !0, Rn = 0, Sn = 0;
  function Nt() {
    e(56, tn = ""), e(57, Gr = 12), e(58, he = void 0), e(59, wn = ""), e(60, Kr = ""), e(61, on = void 0), e(63, y = "#000"), e(64, E = ""), e(65, S = "left"), e(66, x = "center"), e(67, R = "multi_line_text"), e(10, Qe = "text"), e(11, Ce = void 0), e(5, Cr = !0), e(6, Vr = 1 / 0), e(13, sn = "off"), e(14, ln = "default"), e(15, Cn = ""), Rn = 0, Sn = 0;
  }
  function b(Je) {
    (Je == null ? void 0 : Je.type) === "fixed_length" ? e(55, Ye = ew(Je, C.logError, Ye)) : (Je == null ? void 0 : Je.type) === "currency" ? e(55, Ye = rw(Je, C.logError, Ye)) : (Je == null ? void 0 : Je.type) === "phone" && e(55, Ye = cw(C.logError, Ye)), Ye && yo();
  }
  function V(Je) {
    if (!Array.isArray(oe))
      return !0;
    for (const kr of oe)
      if (kr) {
        if (kr.type === "regex")
          try {
            if (!new RegExp("^" + (kr.pattern || "") + "$").test(Je))
              return !1;
          } catch (Ne) {
            return C.logError(K(new Error("Failed to create a regex"), {
              additional: { originalError: String(Ne) }
            })), !0;
          }
        else if (kr.type === "expression" && !kr.condition)
          return !1;
      }
    return !0;
  }
  function X(Je) {
    const kr = Je.target;
    let Ne = (pe ? kr.innerText : kr.value) || "";
    Ne === `
` && (Ne = ""), Ne.length > Vr && (Ne = e(9, yr = Ut), kr instanceof HTMLInputElement && (kr.value = Ne)), Ut !== Ne && (V(Ne) ? (e(3, Ut = e(9, yr = Ne)), s.setValue(Ne), Ye && Zr(), ro()) : (e(3, Ut = e(9, yr = Ne)), kr instanceof HTMLInputElement && (kr.value = Ne), An().then(() => {
      Tr(Rn, Sn);
    })));
  }
  function I(Je) {
    Ut.length >= Vr && !ww.has(Je.key) && !(Je.ctrlKey || Je.altKey || Je.metaKey) && Je.preventDefault();
  }
  function we(Je) {
    if (Rn = Ht() || 0, Sn = Xr() || 0, Je.ctrlKey || Je.metaKey || Je.altKey || Je.shiftKey)
      return;
    const kr = C.json.enter_key_actions;
    Je.key === "Enter" && Array.isArray(kr) && kr.length && (Je.preventDefault(), C.execAnyActions(kr));
  }
  function ge() {
    Ue = !1, setTimeout(
      () => {
        Ue = !0;
      },
      250
    );
  }
  function Pt() {
    if (!Ue)
      if (st instanceof HTMLInputElement)
        st.select();
      else {
        const Je = window.getSelection(), kr = document.createRange();
        kr.selectNodeContents(st), Je && (Je.removeAllRanges(), Je.addRange(kr));
      }
  }
  function Ht() {
    return st instanceof HTMLInputElement ? st.selectionStart === null ? void 0 : st.selectionStart : Kc(st, "start");
  }
  function Xr() {
    return st instanceof HTMLInputElement ? st.selectionEnd === null ? void 0 : st.selectionEnd : Kc(st, "end");
  }
  function Tr(Je, kr) {
    if (st instanceof HTMLInputElement)
      e(2, st.selectionStart = Je, st), e(2, st.selectionEnd = kr, st);
    else {
      const Ne = window.getSelection();
      if (Ne) {
        Ne.removeAllRanges();
        const Nr = document.createRange();
        Jl(st, Nr, "start", Je), Jl(st, Nr, "end", kr), Ne.addRange(Nr);
      }
    }
  }
  async function Zr() {
    if (!st || !Ye)
      return;
    const Je = Ht() || 0, kr = Xr() || 0;
    Ye.applyChangeFrom(Ut, kr === Je ? kr : 0), a.set(Ye.rawValue), cl(s, Ze = e(3, Ut = e(9, yr = Ye.value)), Ze);
    const Ne = Ye.cursorPosition;
    await An(), document.activeElement === st && Tr(Ne, Ne);
  }
  async function yo() {
    if (!st || !Ye)
      return;
    Ye.overrideRawValue(_e), a.set(Ye.rawValue), cl(s, Ze = e(3, Ut = e(9, yr = Ye.value)), Ze);
    const Je = Ye.cursorPosition;
    await An(), document.activeElement === st && Tr(Je, Je);
  }
  function ro() {
    const Je = Dn;
    Dn = !1;
    const kr = C.json.validators;
    if (!Array.isArray(kr) || !kr.length)
      return;
    const Nr = C.getJsonWithVars(kr).filter((Rr) => (Rr.type === "regex" || Rr.type === "expression") && Rr.label_id && Rr.variable), hn = [];
    Nr.forEach((Rr) => {
      const Qr = C.getVariable(Rr.variable);
      if (!Qr)
        return;
      if (Qr.getType() !== "boolean") {
        Je && C.logError(K(new Error("Incorrect variable type for the validator"), {
          additional: { variable: Rr.variable }
        }));
        return;
      }
      let On = !1;
      if (Ut === "" && (Rr.allow_empty === !0 || Rr.allow_empty === 1))
        On = !0;
      else if (Rr.type === "regex") {
        if (!Rr.pattern || typeof Rr.pattern != "string")
          return;
        try {
          On = new RegExp("^" + Rr.pattern + "$").test(Ut);
        } catch {
          Je && C.logError(K(new Error("Failed to create a regular expression using the validator pattern"), {
            additional: { pattern: Rr.pattern }
          }));
          return;
        }
      } else if (Rr.type === "expression")
        On = Rr.condition === !0 || Rr.condition === 1;
      else
        return;
      if (Qr.setValue(On), !On) {
        const wo = Re.getComponentId(Rr.label_id);
        wo && hn.push(wo);
      }
    }), e(15, Cn = hn.join(" "));
  }
  to(() => {
    e(72, un = !0), st && Ye && _e && (Ye.overrideRawValue(_e), cl(s, Ze = e(3, Ut = e(9, yr = Ye.value)), Ze));
  }), an(() => {
    e(72, un = !1), Lt && (Re.unregisterFocusable(Lt), e(54, Lt = void 0));
  });
  function Vn(Je) {
    Ir[Je ? "unshift" : "push"](() => {
      st = Je, e(2, st);
    });
  }
  function Hn() {
    yr = this.innerText, e(9, yr), e(55, Ye), e(3, Ut), e(76, Ze), e(6, Vr), e(7, s), e(86, rt), e(73, o), e(0, C);
  }
  function Xi(Je) {
    Ir[Je ? "unshift" : "push"](() => {
      st = Je, e(2, st);
    });
  }
  function ll() {
    yr = this.innerText, e(9, yr), e(55, Ye), e(3, Ut), e(76, Ze), e(6, Vr), e(7, s), e(86, rt), e(73, o), e(0, C);
  }
  function al(Je) {
    Ir[Je ? "unshift" : "push"](() => {
      st = Je, e(2, st);
    });
  }
  return t.$$set = (Je) => {
    "componentContext" in Je && e(0, C = Je.componentContext), "layoutParams" in Je && e(1, De = Je.layoutParams);
  }, t.$$.update = () => {
    var Je;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(75, n = C.origJson), t.$$.dirty[2] & /*origJson*/
    8192 && n && Nt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(73, o = C.json.text_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(74, i = (Je = C.json.mask) == null ? void 0 : Je.raw_text_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*variable*/
    2048 && et(e(7, s = o && (C.getVariable(o, "string") || Re.awaitGlobalVariable(o, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*rawVariable*/
    4096 && ue(e(16, a = i && (C.getVariable(i, "string") || Re.awaitGlobalVariable(i, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && Ct(e(46, l = C.getDerivedFromVars(C.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && wr(e(45, u = C.getDerivedFromVars(C.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(44, c = C.getDerivedFromVars(C.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && zr(e(43, f = C.getDerivedFromVars(C.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && mr(e(42, _ = C.getDerivedFromVars(C.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && qt(e(41, h = C.getDerivedFromVars(C.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && It(e(40, m = C.getDerivedFromVars(C.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && ur(e(39, p = C.getDerivedFromVars(C.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && er(e(38, k = C.getDerivedFromVars(C.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && ar(e(37, w = C.getDerivedFromVars(C.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && mt(e(36, O = C.getDerivedFromVars(C.json.highlight_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(35, G = C.getDerivedFromVars(C.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(34, L = C.getDerivedFromVars(C.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && St(e(33, ee = C.getDerivedFromVars(C.json.keyboard_type))), t.$$.dirty[0] & /*componentContext*/
    1 && jt(e(32, fe = C.getDerivedFromVars(C.json.mask))), t.$$.dirty[0] & /*componentContext*/
    1 && at(e(31, P = C.getDerivedFromVars(C.json.max_visible_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && it(e(30, Z = C.getDerivedFromVars(C.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(29, se = C.getDerivedFromVars(C.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && d(e(28, j = C.getDerivedFromVars(C.json.select_all_on_focus))), t.$$.dirty[0] & /*componentContext*/
    1 && Jt(e(27, z = C.getDerivedFromVars(C.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Vt(e(26, N = C.getDerivedFromVars(C.json.max_length))), t.$$.dirty[0] & /*componentContext*/
    1 && lt(e(25, W = C.getDerivedFromVars(C.json.autocapitalization))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(24, ie = C.getDerivedFromVars(C.json.enter_key_type))), t.$$.dirty[0] & /*componentContext*/
    1 && Sr(e(23, de = C.getDerivedFromVars(C.json.validators))), t.$$.dirty[0] & /*componentContext*/
    1 && $(e(22, je = C.getDerivedFromVars(C.json.filters))), t.$$.dirty[0] & /*componentContext, hasError*/
    17 | t.$$.dirty[2] & /*variable, $jsonAccessibility*/
    133120) {
      let kr = !1;
      o ? (Ot.hasAction() || (te == null ? void 0 : te.mode) === "exclude") && (kr = !0, C.logError(K(new Error('Cannot show "input" inside component with an action or inside accessibility mode=exclude')))) : (e(4, Jr = !0), C.logError(K(new Error('Missing "text_variable" in "input"')))), Jr !== kr && e(4, Jr = kr);
    }
    if (t.$$.dirty[2] & /*$jsonMask*/
    4194304 && b(Ve), t.$$.dirty[0] & /*maxLength*/
    64 | t.$$.dirty[2] & /*$jsonMaxLength*/
    16777216 && e(6, Vr = Gn(rt, Vr)), t.$$.dirty[0] & /*value, maxLength, valueVariable*/
    200 | t.$$.dirty[1] & /*inputMask*/
    16777216 | t.$$.dirty[2] & /*$valueVariable*/
    16384 && !Ye && Ut !== Ze) {
      let kr = Ze;
      kr.length > Vr && (kr = kr.slice(0, Vr), s.setValue(kr)), e(3, Ut = e(9, yr = kr)), ro();
    }
    if (t.$$.dirty[1] & /*inputMask*/
    16777216 | t.$$.dirty[2] & /*$rawValueVariable*/
    32768 && Ye && Ye.rawValue !== _e && (yo(), ro()), t.$$.dirty[2] & /*mounted*/
    1024 | t.$$.dirty[3] & /*$jsonValidators*/
    256 && rr && un && ro(), t.$$.dirty[3] & /*$jsonHintText*/
    128 && e(21, Ee = nt), t.$$.dirty[1] & /*hintColor*/
    33554432 | t.$$.dirty[3] & /*$jsonHintColor*/
    64 && e(56, tn = _r(Mt, 1, tn)), t.$$.dirty[1] & /*fontSize*/
    67108864 | t.$$.dirty[3] & /*$jsonFontSize*/
    32 && e(57, Gr = Gn(gr, Gr)), t.$$.dirty[1] & /*fontWeight*/
    134217728 | t.$$.dirty[3] & /*$jsonFontWeight, $jsonFontWeightValue, $jsonFontFamily*/
    28 && (e(58, he = ai(pr, sr, he)), Tt && typeof Tt == "string" ? e(59, wn = Re.typefaceProvider(Tt, { fontWeight: he || 400 })) : e(59, wn = "")), t.$$.dirty[1] & /*fontVariationSettings*/
    536870912 | t.$$.dirty[3] & /*$jsonFontVariationSettings*/
    2) {
      const kr = Si(jr);
      kr !== Kr && e(60, Kr = kr);
    }
    if (t.$$.dirty[1] & /*fontSize*/
    67108864 | t.$$.dirty[3] & /*$jsonLineHeight*/
    1) {
      const kr = Qt;
      Jn(kr) && e(61, on = kr / Gr);
    }
    t.$$.dirty[2] & /*$jsonLetterSpacing*/
    1073741824 && tl(Te) && e(62, zn = ce(Te)), t.$$.dirty[2] & /*$jsonTextColor, textColor*/
    536870914 && e(63, y = _r(Wt, 1, y)), t.$$.dirty[2] & /*$jsonHighlightColor, highlightColor*/
    268435460 && e(64, E = _r(xt, 1, E)), t.$$.dirty[2] & /*$jsonAlignmentHorizontal, $direction, alignmentHorizontal*/
    134742024 && e(65, S = nl(Me, wt, S)), t.$$.dirty[2] & /*$jsonAlignmentVertical, alignmentVertical*/
    67108880 && e(66, x = ol(ve, x)), t.$$.dirty[0] & /*isEnabled*/
    32 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    33554432 && e(5, Cr = _n(Dt, Cr)), t.$$.dirty[2] & /*$jsonKeyboardType, $jsonMask, keyboardType*/
    12582944 && (gt && gt in ef && (e(10, Qe = ef[gt]), e(67, R = gt)), (Ve == null ? void 0 : Ve.type) === "currency" ? (e(10, Qe = yw ? "text" : "tel"), e(11, Ce = "decimal")) : R === "number" ? e(11, Ce = "decimal") : e(11, Ce = void 0)), t.$$.dirty[2] & /*keyboardType*/
    32 && e(8, pe = R === "multi_line_text"), t.$$.dirty[1] & /*lineHeight, fontSize*/
    1140850688 | t.$$.dirty[2] & /*$jsonVisibleMaxLines, $jsonPaddings, selfPadding, $direction*/
    3670144 && (Jn(me) ? e(68, Zt = `calc(${me * (on || 1.25) * (Gr / 10) + "em"} + ${fn(en(ot == null ? void 0 : ot.top, 0) + en(ot == null ? void 0 : ot.bottom, 0))})`) : e(68, Zt = ""), e(69, yt = Pi(ot || void 0, yt)), e(70, Ke = yt ? mo(
      {
        top: (Number(yt.top) || 0) / Gr * 10,
        right: (Number(wt === "ltr" ? yt.end : yt.start) || Number(yt.right) || 0) / Gr * 10,
        bottom: (Number(yt.bottom) || 0) / Gr * 10,
        left: (Number(wt === "ltr" ? yt.start : yt.end) || Number(yt.left) || 0) / Gr * 10
      },
      wt
    ) : ""), e(71, tr = yt ? mo(
      {
        top: (Number(yt.top) || 0) / Gr * 10,
        bottom: (Number(yt.bottom) || 0) / Gr * 10
      },
      wt
    ) : "")), t.$$.dirty[2] & /*$jsonAutocapitalization*/
    262144 && (tt === "all_characters" ? e(13, sn = "characters") : tt === "sentences" ? e(13, sn = "sentences") : tt === "words" ? e(13, sn = "words") : (tt === "none" || tt === "auto") && e(13, sn = "off")), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonAccessibility*/
    131072 && (te != null && te.description ? e(12, Et = Yo(te)) : C.logError(K(new Error('Missing accessibility "description" for input'), { level: "warn" }))), t.$$.dirty[2] & /*$jsonEnterKeyType*/
    65536 && (Ae === "default" || Ae === "done" || Ae === "go" || Ae === "search" || Ae === "send") && e(14, ln = Ae), t.$$.dirty[0] & /*isMultiline*/
    256 | t.$$.dirty[2] & /*highlightColor, alignmentHorizontal, alignmentVertical*/
    28 && e(20, ze = {
      "highlight-color": !!E,
      multiline: pe,
      "alignment-horizontal": S,
      "alignment-vertical": x
    }), t.$$.dirty[1] & /*hintColor, lineHeight, fontWeight, fontFamily, fontVariationSettings*/
    2046820352 | t.$$.dirty[2] & /*highlightColor, letterSpacing, textColor, maxHeight*/
    71 && e(19, be = {
      "--divkit-input-hint-color": tn,
      "--divkit-input-highlight-color": E,
      "--divkit-input-line-height": on,
      "font-weight": he,
      "font-family": wn,
      "font-variation-settings": Kr,
      "letter-spacing": zn,
      color: y,
      "max-height": Zt
    }), t.$$.dirty[1] & /*fontSize*/
    67108864 | t.$$.dirty[2] & /*padding*/
    256 && e(18, Fe = { "font-size": ce(Gr), padding: Ke }), t.$$.dirty[1] & /*fontSize*/
    67108864 | t.$$.dirty[2] & /*verticalPadding*/
    512 && e(17, Ge = {
      "font-size": ce(Gr),
      padding: tr
    }), t.$$.dirty[0] & /*input, componentContext, value*/
    13 | t.$$.dirty[1] & /*prevId*/
    8388608 && st && C.json && (Lt && (Re.unregisterFocusable(Lt), e(54, Lt = void 0)), C.id && !C.fakeElement && (e(54, Lt = C.id), Re.registerFocusable(Lt, {
      focus() {
        st && (st.focus(), Tr(Ut.length, Ut.length));
      }
    })));
  }, [
    C,
    De,
    st,
    Ut,
    Jr,
    Cr,
    Vr,
    s,
    pe,
    yr,
    Qe,
    Ce,
    Et,
    sn,
    ln,
    Cn,
    a,
    Ge,
    Fe,
    be,
    ze,
    Ee,
    je,
    de,
    ie,
    W,
    N,
    z,
    j,
    se,
    Z,
    P,
    fe,
    ee,
    L,
    G,
    O,
    w,
    k,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    v,
    H,
    X,
    I,
    we,
    ge,
    Pt,
    Lt,
    Ye,
    tn,
    Gr,
    he,
    wn,
    Kr,
    on,
    zn,
    y,
    E,
    S,
    x,
    R,
    Zt,
    yt,
    Ke,
    tr,
    un,
    o,
    i,
    n,
    Ze,
    _e,
    Ae,
    te,
    tt,
    wt,
    ot,
    me,
    Ve,
    gt,
    rt,
    Dt,
    ve,
    Me,
    xt,
    Wt,
    Te,
    Qt,
    jr,
    Tt,
    sr,
    pr,
    gr,
    Mt,
    nt,
    rr,
    Vn,
    Hn,
    Xi,
    ll,
    al
  ];
}
class jw extends Lr {
  constructor(r) {
    super(), Or(this, r, vw, bw, Ar, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1, -1]);
  }
}
const Cw = "appkit-select", Ew = "appkit-select_hint", Aw = "appkit-select__select", Sw = "appkit-select__option", ji = {
  select: Cw,
  "select__select-text": "appkit-select__select-text",
  select_hint: Ew,
  select__select: Aw,
  "select__select_has-custom-focused": "appkit-select__select_has-custom-focused",
  "has-custom-focused": "appkit-has-custom-focused",
  select__option: Sw
};
function tf(t, r, e) {
  const n = t.slice();
  return n[62] = r[e], n;
}
function Vw(t) {
  let r, e;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Fw(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: ht(
        "select",
        ji,
        /*mods*/
        t[11]
      ),
      style: (
        /*stl*/
        t[10]
      ),
      customDescription: !0,
      customActions: "select",
      customPaddings: !0,
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: {
        default: [
          Iw,
          ({ hasCustomFocus: n, focusHandler: o, blurHandler: i }) => ({
            59: n,
            60: o,
            61: i
          }),
          ({ hasCustomFocus: n, focusHandler: o, blurHandler: i }) => [
            0,
            (n ? 268435456 : 0) | (o ? 536870912 : 0) | (i ? 1073741824 : 0)
          ]
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = ht(
        "select",
        ji,
        /*mods*/
        n[11]
      )), o[0] & /*stl*/
      1024 && (i.style = /*stl*/
      n[10]), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*description, selectStl, select, $valueVariable, filteredItems, innerStl, selectText, $jsonHintText*/
      33555444 | o[1] & /*hasCustomFocus, focusHandler, blurHandler*/
      1879048192 | o[2] & /*$$scope*/
      8 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function rf(t) {
  let r, e = (
    /*item*/
    (t[62].text || /*item*/
    t[62].value) + ""
  ), n, o;
  return {
    c() {
      r = Se("option"), n = Pn(e), g(r, "class", ji.select__option), r.__value = o = /*item*/
      t[62].value, Qa(r, r.__value);
    },
    m(i, s) {
      q(i, r, s), pt(r, n);
    },
    p(i, s) {
      s[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      (i[62].text || /*item*/
      i[62].value) + "") && Qn(n, e), s[0] & /*filteredItems*/
      32 && o !== (o = /*item*/
      i[62].value) && (r.__value = o, Qa(r, r.__value));
    },
    d(i) {
      i && J(r);
    }
  };
}
function Iw(t) {
  let r, e = (
    /*selectText*/
    (t[4] || /*$jsonHintText*/
    t[25] || "​") + ""
  ), n, o, i, s, a, l, u, c, f = nr(
    /*filteredItems*/
    t[5]
  ), _ = [];
  for (let h = 0; h < f.length; h += 1)
    _[h] = rf(tf(t, f, h));
  return {
    c() {
      r = Se("span"), n = Pn(e), i = lr(), s = Se("select");
      for (let h = 0; h < _.length; h += 1)
        _[h].c();
      g(r, "class", ji["select__select-text"]), g(r, "style", o = $t(
        /*innerStl*/
        t[9]
      )), g(r, "aria-hidden", "true"), g(s, "class", a = ht("select__select", ji, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[59]
        )
      })), g(
        s,
        "aria-label",
        /*description*/
        t[7]
      ), g(s, "style", l = $t(
        /*selectStl*/
        t[8]
      )), /*$valueVariable*/
      t[6] === void 0 && eo(() => (
        /*select_1_change_handler*/
        t[55].call(s)
      ));
    },
    m(h, m) {
      q(h, r, m), pt(r, n), q(h, i, m), q(h, s, m);
      for (let p = 0; p < _.length; p += 1)
        _[p] && _[p].m(s, null);
      t[54](s), xa(
        s,
        /*$valueVariable*/
        t[6],
        !0
      ), u || (c = [
        He(
          s,
          "change",
          /*select_1_change_handler*/
          t[55]
        ),
        He(s, "focus", function() {
          Pr(
            /*focusHandler*/
            t[60]
          ) && t[60].apply(this, arguments);
        }),
        He(s, "blur", function() {
          Pr(
            /*blurHandler*/
            t[61]
          ) && t[61].apply(this, arguments);
        })
      ], u = !0);
    },
    p(h, m) {
      if (t = h, m[0] & /*selectText, $jsonHintText*/
      33554448 && e !== (e = /*selectText*/
      (t[4] || /*$jsonHintText*/
      t[25] || "​") + "") && Qn(n, e), m[0] & /*innerStl*/
      512 && o !== (o = $t(
        /*innerStl*/
        t[9]
      )) && g(r, "style", o), m[0] & /*filteredItems*/
      32) {
        f = nr(
          /*filteredItems*/
          t[5]
        );
        let p;
        for (p = 0; p < f.length; p += 1) {
          const k = tf(t, f, p);
          _[p] ? _[p].p(k, m) : (_[p] = rf(k), _[p].c(), _[p].m(s, null));
        }
        for (; p < _.length; p += 1)
          _[p].d(1);
        _.length = f.length;
      }
      m[1] & /*hasCustomFocus*/
      268435456 && a !== (a = ht("select__select", ji, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[59]
        )
      })) && g(s, "class", a), m[0] & /*description*/
      128 && g(
        s,
        "aria-label",
        /*description*/
        t[7]
      ), m[0] & /*selectStl*/
      256 && l !== (l = $t(
        /*selectStl*/
        t[8]
      )) && g(s, "style", l), m[0] & /*$valueVariable, filteredItems*/
      96 && xa(
        s,
        /*$valueVariable*/
        t[6]
      );
    },
    d(h) {
      h && (J(r), J(i), J(s)), nn(_, h), t[54](null), u = !1, Hr(c);
    }
  };
}
function Dw(t) {
  let r, e, n, o;
  const i = [Fw, Vw], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (or(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ir()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (B(e), o = !0);
    },
    o(l) {
      Q(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Tw(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, G, L, ee, fe, P, Z, se = A, j = () => (se(), se = F(G, (Te) => e(42, Z = Te)), G), z, N = A, W = () => (N(), N = F(O, (Te) => e(43, z = Te)), O), ie, de = A, je = () => (de(), de = F(w, (Te) => e(44, ie = Te)), w), Ee, pe = A, ze = () => (pe(), pe = F(k, (Te) => e(45, Ee = Te)), k), be, Fe = A, Ge = () => (Fe(), Fe = F(p, (Te) => e(46, be = Te)), p), Ze, ke = A, et = () => (ke(), ke = F(m, (Te) => e(47, Ze = Te)), m), _e, Ie = A, ue = () => (Ie(), Ie = F(h, (Te) => e(48, _e = Te)), h), oe, ye = A, $ = () => (ye(), ye = F(_, (Te) => e(49, oe = Te)), _), Ae, xe = A, qe = () => (xe(), xe = F(f, (Te) => e(50, Ae = Te)), f), te, Xe = A, Le = () => (Xe(), Xe = F(c, (Te) => e(51, te = Te)), c), tt, dt, lt = A, wt = () => (lt(), lt = F(l, (Te) => e(53, dt = Te)), l), ot, At = A, it = () => (At(), At = F(a, (Te) => e(6, ot = Te)), a), me, ne = A, at = () => (ne(), ne = F(u, (Te) => e(25, me = Te)), u);
  t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => Fe()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => Ie()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Xe()), t.$$.on_destroy.push(() => lt()), t.$$.on_destroy.push(() => At()), t.$$.on_destroy.push(() => ne());
  let { componentContext: Ve } = r, { layoutParams: D = void 0 } = r;
  const jt = Dr(Yr), gt = Dr(So), kt = jt.direction;
  bn(t, kt, (Te) => e(52, tt = Te));
  let St, rt, Y = !1, Vt = "", Dt = null, Gt = "", Jt = "rgba(0,0,0,.45)", ve = 12, We, ft = "", Me = "", T, Oe = "", xt = "#000", ae = "", mt;
  function Wt() {
    e(28, Dt = null), e(30, Jt = "rgba(0,0,0,.45)"), e(31, ve = 12), e(32, We = void 0), e(33, ft = ""), e(34, Me = ""), e(35, T = void 0), e(36, Oe = ""), e(37, xt = "#000"), e(7, ae = "");
  }
  an(() => {
    St && (jt.unregisterFocusable(St), e(27, St = void 0));
  });
  function Ft(Te) {
    Ir[Te ? "unshift" : "push"](() => {
      rt = Te, e(2, rt);
    });
  }
  function ar() {
    ot = Jg(this), a.set(ot), e(5, s), e(40, i), e(0, Ve);
  }
  return t.$$set = (Te) => {
    "componentContext" in Te && e(0, Ve = Te.componentContext), "layoutParams" in Te && e(1, D = Te.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(41, n = Ve.origJson), t.$$.dirty[1] & /*origJson*/
    1024 && n && Wt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(39, o = Ve.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(40, i = Ve.json.options), t.$$.dirty[1] & /*items*/
    512 && e(5, s = Array.isArray(i) && i.filter((Te) => typeof Te.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    256 && it(e(24, a = o && (Ve.getVariable(o, "string") || jt.awaitGlobalVariable(o, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && wt(e(23, l = Ve.getDerivedFromVars(Ve.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && at(e(22, u = Ve.getDerivedFromVars(Ve.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(21, c = Ve.getDerivedFromVars(Ve.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(20, f = Ve.getDerivedFromVars(Ve.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && $(e(19, _ = Ve.getDerivedFromVars(Ve.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(18, h = Ve.getDerivedFromVars(Ve.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(17, m = Ve.getDerivedFromVars(Ve.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(16, p = Ve.getDerivedFromVars(Ve.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && ze(e(15, k = Ve.getDerivedFromVars(Ve.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && je(e(14, w = Ve.getDerivedFromVars(Ve.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && W(e(13, O = Ve.getDerivedFromVars(Ve.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && j(e(12, G = Ve.getDerivedFromVars(Ve.json.accessibility))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || Ve.logError(K(new Error('Empty selection "items" in "select"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    2304) {
      let Te = !1;
      o ? (gt.hasAction() || (Z == null ? void 0 : Z.mode) === "exclude") && (Te = !0, Ve.logError(K(new Error('Cannot show "select" inside component with an action or inside accessibility mode=exclude')))) : (e(3, Y = !0), Ve.logError(K(new Error('Missing "value_variable" in "select"')))), Y !== Te && e(3, Y = Te);
    }
    if (t.$$.dirty[0] & /*filteredItems, $valueVariable, componentContext*/
    97 | t.$$.dirty[1] & /*prevWarnValue*/
    128) {
      const Te = s.find((bt) => bt.value === ot);
      Te ? e(4, Vt = (typeof Te.text == "string" ? Te.text : Te.value) || "") : (e(4, Vt = ""), ot && mt !== ot && (e(38, mt = ot), Ve.logError(K(new Error('Value from the variable was not found in the selection items for "select"')))));
    }
    if (t.$$.dirty[1] & /*$jsonFontSize, fontSize*/
    524289 && e(31, ve = Gn(Ae, ve)), t.$$.dirty[0] & /*selfPadding*/
    268435456 | t.$$.dirty[1] & /*$jsonPaddings, fontSize, $direction*/
    6291457 && (e(28, Dt = Pi(dt || void 0, Dt)), e(29, Gt = Dt ? mo(
      {
        top: (Number(Dt.top) || 0) / ve * 10,
        right: (Number(tt === "ltr" ? Dt.end : Dt.start) || Number(Dt.right) || 0) / ve * 10,
        bottom: (Number(Dt.bottom) || 0) / ve * 10,
        left: (Number(tt === "ltr" ? Dt.start : Dt.end) || Number(Dt.left) || 0) / ve * 10
      },
      tt
    ) : "")), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*$jsonHintColor*/
    1048576 && e(30, Jt = _r(te, 1, Jt)), t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontWeightValue, fontWeight, $jsonFontFamily*/
    458754 && (e(32, We = ai(oe, _e, We)), Ze && typeof Ze == "string" ? e(33, ft = jt.typefaceProvider(Ze, { fontWeight: We || 400 })) : e(33, ft = "")), t.$$.dirty[1] & /*$jsonFontVariationSettings, fontVariationSettings*/
    32776) {
      const Te = Si(be);
      Te !== Me && e(34, Me = Te);
    }
    if (t.$$.dirty[1] & /*$jsonLineHeight, fontSize*/
    16385) {
      const Te = Ee;
      Jn(Te) && e(35, T = Te / ve);
    }
    t.$$.dirty[1] & /*$jsonLetterSpacing, fontSize*/
    8193 && tl(ie) && e(36, Oe = ce(ie / ve * 10)), t.$$.dirty[1] & /*$jsonTextColor, textColor*/
    4160 && e(37, xt = _r(z, 1, xt)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    2048 && (Z != null && Z.description ? e(7, ae = Yo(Z)) : Ve.logError(K(new Error('Missing accessibility "description" for select'), { level: "warn" }))), t.$$.dirty[0] & /*selectText*/
    16 && e(11, L = { hint: !Vt }), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*fontWeight, fontFamily, fontVariationSettings, textColor*/
    78 && e(10, ee = {
      "--divkit-input-hint-color": Jt,
      "font-weight": We,
      "font-family": ft,
      "font-variation-settings": Me,
      color: xt
    }), t.$$.dirty[0] & /*padding*/
    536870912 | t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(9, fe = {
      padding: Gt,
      "font-size": ce(ve),
      "line-height": T,
      "letter-spacing": Oe
    }), t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(8, P = {
      "font-size": ce(ve),
      "line-height": T,
      "letter-spacing": Oe
    }), t.$$.dirty[0] & /*componentContext, select, prevId*/
    134217733 && Ve.json && rt && (St && (jt.unregisterFocusable(St), e(27, St = void 0)), Ve.id && !Ve.fakeElement && (e(27, St = Ve.id), jt.registerFocusable(St, {
      focus() {
        rt && rt.focus();
      }
    })));
  }, [
    Ve,
    D,
    rt,
    Y,
    Vt,
    s,
    ot,
    ae,
    P,
    fe,
    ee,
    L,
    G,
    O,
    w,
    k,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    me,
    kt,
    St,
    Dt,
    Gt,
    Jt,
    ve,
    We,
    ft,
    Me,
    T,
    Oe,
    xt,
    mt,
    o,
    i,
    n,
    Z,
    z,
    ie,
    Ee,
    be,
    Ze,
    _e,
    oe,
    Ae,
    te,
    tt,
    dt,
    Ft,
    ar
  ];
}
class Mw extends Lr {
  constructor(r) {
    super(), Or(this, r, Tw, Dw, Ar, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Pw = "appkit-video__video", Nw = "appkit-video__container", zw = "appkit-video_absolute", fi = {
  video__video: Pw,
  video__container: Nw,
  "video__aspect-wrapper": "appkit-video__aspect-wrapper",
  video_absolute: zw
};
function Rw(t, r) {
  return Array.isArray(t) && t.length ? t.filter((e) => (e == null ? void 0 : e.type) === "video_source" && typeof e.url == "string" && typeof e.mime_type == "string").map((e) => {
    const n = {
      src: e.url
    };
    return e.mime_type && (n.type = e.mime_type), n;
  }) : r;
}
function Ow(t) {
  return t === "fill" ? "cover" : t === "no_scale" ? "none" : "contain";
}
function nf(t, r, e) {
  const n = t.slice();
  return n[60] = r[e], n;
}
function of(t, r, e) {
  const n = t.slice();
  return n[60] = r[e], n;
}
function Lw(t) {
  let r, e;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Bw(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: ht(
        "video",
        fi,
        /*mods*/
        t[15]
      ),
      customActions: "video",
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      heightByAspect: (
        /*aspectPaddingBottom*/
        t[11] !== "0"
      ),
      $$slots: { default: [qw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = ht(
        "video",
        fi,
        /*mods*/
        n[15]
      )), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*aspectPaddingBottom*/
      2048 && (i.heightByAspect = /*aspectPaddingBottom*/
      n[11] !== "0"), o[0] & /*aspectPaddingBottom, videoParentElem, providedVideoTemplate, shouldUseVideoProvider, style, loop, autoplay, muted, poster, preload, videoElem, sources*/
      32760 | o[2] & /*$$scope*/
      8 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Hw(t) {
  let r, e, n, o, i, s = nr(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = lf(nf(t, s, l));
  return {
    c() {
      r = Se("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      g(r, "class", fi.video__video), g(r, "style", e = $t(
        /*style*/
        t[14]
      )), r.playsInline = !0, r.loop = /*loop*/
      t[5], r.autoplay = /*autoplay*/
      t[6], r.muted = /*muted*/
      t[7], g(
        r,
        "poster",
        /*poster*/
        t[9]
      ), g(r, "preload", n = /*preload*/
      t[8] ? "metadata" : "auto");
    },
    m(l, u) {
      q(l, r, u);
      for (let c = 0; c < a.length; c += 1)
        a[c] && a[c].m(r, null);
      t[52](r), o || (i = [
        He(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          t[26]
        ),
        He(
          r,
          "ended",
          /*onEnd*/
          t[27]
        ),
        He(
          r,
          "playing",
          /*onPlaying*/
          t[28]
        ),
        He(
          r,
          "pause",
          /*onPause*/
          t[29]
        ),
        He(
          r,
          "waiting",
          /*onWaiting*/
          t[30]
        ),
        He(
          r,
          "error",
          /*onError*/
          t[31]
        )
      ], o = !0);
    },
    p(l, u) {
      if (u[0] & /*sources*/
      16 | u[1] & /*onError*/
      1) {
        s = nr(
          /*sources*/
          l[4]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = nf(l, s, c);
          a[c] ? a[c].p(f, u) : (a[c] = lf(f), a[c].c(), a[c].m(r, null));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = s.length;
      }
      u[0] & /*style*/
      16384 && e !== (e = $t(
        /*style*/
        l[14]
      )) && g(r, "style", e), u[0] & /*loop*/
      32 && (r.loop = /*loop*/
      l[5]), u[0] & /*autoplay*/
      64 && (r.autoplay = /*autoplay*/
      l[6]), u[0] & /*muted*/
      128 && (r.muted = /*muted*/
      l[7]), u[0] & /*poster*/
      512 && g(
        r,
        "poster",
        /*poster*/
        l[9]
      ), u[0] & /*preload*/
      256 && n !== (n = /*preload*/
      l[8] ? "metadata" : "auto") && g(r, "preload", n);
    },
    d(l) {
      l && J(r), nn(a, l), t[52](null), o = !1, Hr(i);
    }
  };
}
function Ww(t) {
  let r;
  return {
    c() {
      r = Se("div"), g(r, "class", fi.video__container);
    },
    m(e, n) {
      q(e, r, n), r.innerHTML = /*providedVideoTemplate*/
      t[12], t[51](r);
    },
    p(e, n) {
      n[0] & /*providedVideoTemplate*/
      4096 && (r.innerHTML = /*providedVideoTemplate*/
      e[12]);
    },
    d(e) {
      e && J(r), t[51](null);
    }
  };
}
function Uw(t) {
  let r, e = `${/*aspectPaddingBottom*/
  t[11]}%`;
  function n(s, a) {
    return (
      /*shouldUseVideoProvider*/
      s[13] ? Jw : Gw
    );
  }
  let o = n(t), i = o(t);
  return {
    c() {
      r = Se("div"), i.c(), g(r, "class", fi["video__aspect-wrapper"]), M(r, "padding-bottom", e);
    },
    m(s, a) {
      q(s, r, a), i.m(r, null);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, null))), a[0] & /*aspectPaddingBottom*/
      2048 && e !== (e = `${/*aspectPaddingBottom*/
      s[11]}%`) && M(r, "padding-bottom", e);
    },
    d(s) {
      s && J(r), i.d();
    }
  };
}
function sf(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Se("source"), Zn(r.src, e = /*source*/
      t[60].src) || g(r, "src", e), g(r, "type", n = /*source*/
      t[60].type);
    },
    m(s, a) {
      q(s, r, a), o || (i = He(
        r,
        "error",
        /*onError*/
        t[31]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*sources*/
      16 && !Zn(r.src, e = /*source*/
      s[60].src) && g(r, "src", e), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && g(r, "type", n);
    },
    d(s) {
      s && J(r), o = !1, i();
    }
  };
}
function lf(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = sf(t);
  return {
    c() {
      n.c(), e = Kt();
    },
    m(o, i) {
      n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Ar(r, r = /*source*/
      o[60]) ? (n.d(1), n = sf(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && J(e), n.d(o);
    }
  };
}
function Gw(t) {
  let r, e, n, o, i, s = nr(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = uf(of(t, s, l));
  return {
    c() {
      r = Se("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      g(r, "class", fi.video__video), g(r, "style", e = $t(
        /*style*/
        t[14]
      )), r.playsInline = !0, r.loop = /*loop*/
      t[5], r.autoplay = /*autoplay*/
      t[6], r.muted = /*muted*/
      t[7], g(
        r,
        "poster",
        /*poster*/
        t[9]
      ), g(r, "preload", n = /*preload*/
      t[8] ? "metadata" : "auto");
    },
    m(l, u) {
      q(l, r, u);
      for (let c = 0; c < a.length; c += 1)
        a[c] && a[c].m(r, null);
      t[50](r), o || (i = [
        He(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          t[26]
        ),
        He(
          r,
          "ended",
          /*onEnd*/
          t[27]
        ),
        He(
          r,
          "playing",
          /*onPlaying*/
          t[28]
        ),
        He(
          r,
          "pause",
          /*onPause*/
          t[29]
        ),
        He(
          r,
          "waiting",
          /*onWaiting*/
          t[30]
        ),
        He(
          r,
          "error",
          /*onError*/
          t[31]
        )
      ], o = !0);
    },
    p(l, u) {
      if (u[0] & /*sources*/
      16 | u[1] & /*onError*/
      1) {
        s = nr(
          /*sources*/
          l[4]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = of(l, s, c);
          a[c] ? a[c].p(f, u) : (a[c] = uf(f), a[c].c(), a[c].m(r, null));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = s.length;
      }
      u[0] & /*style*/
      16384 && e !== (e = $t(
        /*style*/
        l[14]
      )) && g(r, "style", e), u[0] & /*loop*/
      32 && (r.loop = /*loop*/
      l[5]), u[0] & /*autoplay*/
      64 && (r.autoplay = /*autoplay*/
      l[6]), u[0] & /*muted*/
      128 && (r.muted = /*muted*/
      l[7]), u[0] & /*poster*/
      512 && g(
        r,
        "poster",
        /*poster*/
        l[9]
      ), u[0] & /*preload*/
      256 && n !== (n = /*preload*/
      l[8] ? "metadata" : "auto") && g(r, "preload", n);
    },
    d(l) {
      l && J(r), nn(a, l), t[50](null), o = !1, Hr(i);
    }
  };
}
function Jw(t) {
  let r;
  return {
    c() {
      r = Se("div"), g(r, "class", fi.video__container);
    },
    m(e, n) {
      q(e, r, n), r.innerHTML = /*providedVideoTemplate*/
      t[12], t[49](r);
    },
    p(e, n) {
      n[0] & /*providedVideoTemplate*/
      4096 && (r.innerHTML = /*providedVideoTemplate*/
      e[12]);
    },
    d(e) {
      e && J(r), t[49](null);
    }
  };
}
function af(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Se("source"), Zn(r.src, e = /*source*/
      t[60].src) || g(r, "src", e), g(r, "type", n = /*source*/
      t[60].type);
    },
    m(s, a) {
      q(s, r, a), o || (i = He(
        r,
        "error",
        /*onError*/
        t[31]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*sources*/
      16 && !Zn(r.src, e = /*source*/
      s[60].src) && g(r, "src", e), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && g(r, "type", n);
    },
    d(s) {
      s && J(r), o = !1, i();
    }
  };
}
function uf(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = af(t);
  return {
    c() {
      n.c(), e = Kt();
    },
    m(o, i) {
      n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Ar(r, r = /*source*/
      o[60]) ? (n.d(1), n = af(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && J(e), n.d(o);
    }
  };
}
function qw(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[11] !== "0" ? Uw : (
        /*shouldUseVideoProvider*/
        i[13] ? Ww : Hw
      )
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Kt();
    },
    m(i, s) {
      o.m(i, s), q(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && J(r), o.d(i);
    }
  };
}
function Yw(t) {
  let r, e, n, o;
  const i = [Bw, Lw], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (or(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ir()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (B(e), o = !0);
    },
    o(l) {
      Q(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Kw(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O = A, G = () => (O(), O = F(a, (ae) => e(39, w = ae)), a), L, ee = A, fe = () => (ee(), ee = F(m, (ae) => e(40, L = ae)), m), P, Z = A, se = () => (Z(), Z = F(h, (ae) => e(41, P = ae)), h), j, z = A, N = () => (z(), z = F(_, (ae) => e(42, j = ae)), _), W, ie = A, de = () => (ie(), ie = F(f, (ae) => e(43, W = ae)), f), je, Ee = A, pe = () => (Ee(), Ee = F(c, (ae) => e(44, je = ae)), c), ze, be = A, Fe = () => (be(), be = F(u, (ae) => e(45, ze = ae)), u), Ge, Ze = A, ke = () => (Ze(), Ze = F(l, (ae) => e(46, Ge = ae)), l), et, _e = A, Ie = () => (_e(), _e = F(s, (ae) => e(47, et = ae)), s), ue, oe = A, ye = () => (oe(), oe = F(i, (ae) => e(48, ue = ae)), i);
  t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => ie()), t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => Ze()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => oe());
  let { componentContext: $ } = r, { layoutParams: Ae = void 0 } = r;
  const xe = Dr(Yr), qe = xe.videoPlayerProvider;
  let te, Xe = !1, Le = !1, tt, dt, lt = [], wt = !1, ot = !1, At = !1, it = !1, me, ne = "fit", at = "0", Ve = !1, D, jt = "", gt, kt = !!qe;
  function St(ae) {
    var er, Qt;
    const mt = $.getJsonWithVars({
      sources: ae.video_sources,
      repeatable: ae.repeatable,
      autostart: ae.autostart,
      preloadRequired: ae.preload_required,
      muted: ae.muted,
      preview: ae.preview,
      aspect: ae.aspect,
      scale: ae.scale,
      payload: ae.player_settings_payload
    }), Wt = _n(mt.repeatable, !1), Ft = _n(mt.autostart, !1), ar = _n(mt.preloadRequired, !1), Te = _n(mt.muted, !1), bt = (er = mt.aspect) != null && er.ratio && Jn(mt.aspect.ratio) ? mt.aspect.ratio : void 0;
    if ((Qt = mt.sources) != null && Qt.length)
      return {
        sources: mt.sources,
        repeatable: Wt,
        autostart: Ft,
        preloadRequired: ar,
        muted: Te,
        preview: mt.preview,
        aspect: bt,
        scale: mt.scale,
        payload: mt.payload
      };
  }
  function rt(ae) {
    var mt;
    if (Le) {
      Le = !1;
      return;
    }
    gt ? (mt = gt.seek) == null || mt.call(gt, Number(ae)) : tt && e(3, tt.currentTime = Number(ae) / 1e3, tt);
  }
  function Y() {
    gt ? gt.pause() : tt == null || tt.pause();
  }
  function Vt() {
    if (gt) {
      gt.play();
      return;
    }
    const ae = tt == null ? void 0 : tt.play();
    ae && ae.catch((mt) => {
      $.logError(K(new Error("Video playing error"), {
        level: "error",
        additional: { originalText: String(mt) }
      }));
    });
  }
  function Dt() {
    tt && (Le = !0, o.setValue(Math.floor(tt.currentTime * 1e3)));
  }
  function Gt() {
    $.execAnyActions($.json.end_actions);
  }
  function Jt() {
    $.execAnyActions($.json.resume_actions);
  }
  function ve() {
    $.execAnyActions($.json.pause_actions);
  }
  function We() {
    $.execAnyActions($.json.buffering_actions);
  }
  function ft() {
    $.execAnyActions($.json.fatal_actions);
  }
  to(() => {
    if (qe && dt) {
      const ae = St($.json);
      if (ae) {
        const mt = qe.instance(dt, ae);
        mt ? e(36, gt = mt) : e(13, kt = !1);
      }
    }
  }), an(() => {
    te && (xe.unregisterInstance(te), e(32, te = void 0)), D && (D(), e(35, D = void 0)), gt && (gt.destroy(), e(36, gt = void 0));
  });
  function Me(ae) {
    Ir[ae ? "unshift" : "push"](() => {
      dt = ae, e(10, dt);
    });
  }
  function T(ae) {
    Ir[ae ? "unshift" : "push"](() => {
      tt = ae, e(3, tt);
    });
  }
  function Oe(ae) {
    Ir[ae ? "unshift" : "push"](() => {
      dt = ae, e(10, dt);
    });
  }
  function xt(ae) {
    Ir[ae ? "unshift" : "push"](() => {
      tt = ae, e(3, tt);
    });
  }
  return t.$$set = (ae) => {
    "componentContext" in ae && e(0, $ = ae.componentContext), "layoutParams" in ae && e(1, Ae = ae.layoutParams);
  }, t.$$.update = () => {
    var ae;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && $.json && (e(5, wt = !1), e(6, ot = !1), e(7, At = !1), e(8, it = !1), e(9, me = void 0), e(33, ne = "fit"), e(34, Ve = !1), e(13, kt = !!qe)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*customVideoInstance, $jsonSource, $jsonRepeatable, $jsonAutostart, $jsonMuted, $jsonPreload, $jsonPreview, $jsonScale, $jsonAspect*/
    260384 && $.json && gt && (ue || et || w || Ge || ze || je || W || j)) {
      const mt = St($.json);
      mt && ((ae = gt.update) == null || ae.call(gt, mt));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(38, n = $.json.elapsed_time_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*elapsedVariableName*/
    128 && e(37, o = n && ($.getVariable(n, "integer") || xe.awaitGlobalVariable(n, "integer", 0)) || io("temp", "integer", 0)), t.$$.dirty[1] & /*elapsedVariable, elapsedVariableUnsubscriber*/
    80 && o && (D && D(), e(35, D = o.subscribe(rt))), t.$$.dirty[0] & /*componentContext*/
    1 && ye(e(25, i = $.getDerivedFromVars($.json.video_sources))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(24, s = $.getDerivedFromVars($.json.repeatable))), t.$$.dirty[0] & /*componentContext*/
    1 && G(e(23, a = $.getDerivedFromVars($.json.autostart))), t.$$.dirty[0] & /*componentContext*/
    1 && ke(e(22, l = $.getDerivedFromVars($.json.muted))), t.$$.dirty[0] & /*componentContext*/
    1 && Fe(e(21, u = $.getDerivedFromVars($.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(20, c = $.getDerivedFromVars($.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(19, f = $.getDerivedFromVars($.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(18, _ = $.getDerivedFromVars($.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && se(e(17, h = $.getDerivedFromVars($.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(16, m = $.getDerivedFromVars($.json.height))), t.$$.dirty[0] & /*sources, componentContext*/
    17 | t.$$.dirty[1] & /*$jsonSource*/
    131072 && (e(4, lt = Rw(ue, lt)), lt.length ? e(2, Xe = !1) : (e(2, Xe = !0), $.logError(K(new Error('Missing "video_sources" in "video"'))))), t.$$.dirty[0] & /*loop*/
    32 | t.$$.dirty[1] & /*$jsonRepeatable*/
    65536 && e(5, wt = _n(et, wt)), t.$$.dirty[0] & /*autoplay*/
    64 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && e(6, ot = _n(w, ot)), t.$$.dirty[0] & /*muted*/
    128 | t.$$.dirty[1] & /*$jsonMuted*/
    32768 && e(7, At = _n(Ge, At)), t.$$.dirty[0] & /*preload*/
    256 | t.$$.dirty[1] & /*$jsonPreload*/
    16384 && e(8, it = _n(ze, it)), t.$$.dirty[0] & /*poster*/
    512 | t.$$.dirty[1] & /*$jsonPreview*/
    8192 && e(9, me = typeof je == "string" ? Md(je) : me), t.$$.dirty[1] & /*$jsonScale, scale*/
    4100 && e(33, ne = Ow(W) || ne), t.$$.dirty[1] & /*$jsonAspect, $jsonWidth, $jsonHeight*/
    3584) {
      const mt = j == null ? void 0 : j.ratio;
      mt && Jn(mt) ? (e(11, at = (100 / Number(mt)).toFixed(2)), e(34, Ve = !0)) : (e(11, at = "0"), e(34, Ve = (!P || P.type === "match_parent") && (L == null ? void 0 : L.type) === "match_parent"));
    }
    t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*prevId*/
    2 && $.json && (te && (xe.unregisterInstance(te), e(32, te = void 0)), $.id && !Xe && !$.fakeElement && (e(32, te = $.id), xe.registerInstance(te, { pause: Y, start: Vt }))), t.$$.dirty[0] & /*componentContext, videoElem*/
    9 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && $.json && w && tt && Vt(), t.$$.dirty[1] & /*isAbsolute*/
    8 && e(15, p = { absolute: Ve }), t.$$.dirty[1] & /*scale*/
    4 && e(14, k = { "object-fit": ne });
  }, [
    $,
    Ae,
    Xe,
    tt,
    lt,
    wt,
    ot,
    At,
    it,
    me,
    dt,
    at,
    jt,
    kt,
    k,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    Dt,
    Gt,
    Jt,
    ve,
    We,
    ft,
    te,
    ne,
    Ve,
    D,
    gt,
    o,
    n,
    w,
    L,
    P,
    j,
    W,
    je,
    ze,
    Ge,
    et,
    ue,
    Me,
    T,
    Oe,
    xt
  ];
}
class Xw extends Lr {
  constructor(r) {
    super(), Or(this, r, Kw, Yw, Ar, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Zw = "appkit-switch__tumbler", Qw = "appkit-switch__tumbler_checked", xw = "appkit-switch_disabled", $w = "appkit-switch__thumb", ek = "appkit-switch_direction_rtl", tk = "appkit-switch__input", ti = {
  switch: "appkit-switch",
  switch__tumbler: Zw,
  switch__tumbler_checked: Qw,
  switch_disabled: xw,
  switch__thumb: $w,
  switch_direction_rtl: ek,
  switch__input: tk
};
function Ci(t) {
  return t === !0 || t === 1;
}
function rk(t) {
  let r, e;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function nk(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: ht(
        "switch",
        ti,
        /*mods*/
        t[9]
      ),
      style: (
        /*stl*/
        t[8]
      ),
      customDescription: !0,
      customActions: "switch",
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: {
        default: [
          ok,
          ({ focusHandler: n, blurHandler: o, hasCustomFocus: i }) => ({
            29: n,
            30: o,
            31: i
          }),
          ({ focusHandler: n, blurHandler: o, hasCustomFocus: i }) => [
            (n ? 536870912 : 0) | (o ? 1073741824 : 0),
            i ? 1 : 0
          ]
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = ht(
        "switch",
        ti,
        /*mods*/
        n[9]
      )), o[0] & /*stl*/
      256 && (i.style = /*stl*/
      n[8]), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*description, isEnabled, value, input, focusHandler, blurHandler*/
      1610612844 | o[1] & /*$$scope, hasCustomFocus*/
      3 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function ok(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Se("div"), e = Se("div"), o = lr(), i = Se("input"), g(e, "class", ti.switch__thumb), g(r, "class", n = ht("switch__tumbler", ti, { checked: (
        /*value*/
        t[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = ht("switch__input", ti, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[31]
        )
      })), g(i, "autocomplete", "off"), g(
        i,
        "aria-label",
        /*description*/
        t[6]
      ), i.disabled = a = !/*isEnabled*/
      t[5], i.checked = /*value*/
      t[3];
    },
    m(c, f) {
      q(c, r, f), pt(r, e), q(c, o, f), q(c, i, f), t[25](i), l || (u = [
        He(
          i,
          "input",
          /*onInput*/
          t[14]
        ),
        He(i, "focus", function() {
          Pr(
            /*focusHandler*/
            t[29]
          ) && t[29].apply(this, arguments);
        }),
        He(i, "blur", function() {
          Pr(
            /*blurHandler*/
            t[30]
          ) && t[30].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[0] & /*value*/
      8 && n !== (n = ht("switch__tumbler", ti, { checked: (
        /*value*/
        t[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      1 && s !== (s = ht("switch__input", ti, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[31]
        )
      })) && g(i, "class", s), f[0] & /*description*/
      64 && g(
        i,
        "aria-label",
        /*description*/
        t[6]
      ), f[0] & /*isEnabled*/
      32 && a !== (a = !/*isEnabled*/
      t[5]) && (i.disabled = a), f[0] & /*value*/
      8 && (i.checked = /*value*/
      t[3]);
    },
    d(c) {
      c && (J(r), J(o), J(i)), t[25](null), l = !1, Hr(u);
    }
  };
}
function ik(t) {
  let r, e, n, o;
  const i = [nk, rk], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (or(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ir()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (B(e), o = !0);
    },
    o(l) {
      Q(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function sk(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h = A, m = () => (h(), h = F(s, (ke) => e(21, _ = ke)), s), p, k = A, w = () => (k(), k = F(l, (ke) => e(22, p = ke)), l), O, G = A, L = () => (G(), G = F(a, (ke) => e(23, O = ke)), a), ee, fe = A, P = () => (fe(), fe = F(i, (ke) => e(24, ee = ke)), i);
  t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => k()), t.$$.on_destroy.push(() => G()), t.$$.on_destroy.push(() => fe());
  let { componentContext: Z } = r, { layoutParams: se = void 0 } = r;
  const j = Dr(Yr), z = Dr(So), N = j.direction;
  bn(t, N, (ke) => e(20, f = ke));
  let W, ie, de = !1, je = !1, Ee = "", pe = !0, ze = "#129386", be = "#1293864c";
  function Fe() {
    e(5, pe = !0), e(16, ze = "#129386"), e(17, be = "#1293864c");
  }
  function Ge(ke) {
    e(3, de = ke.target.checked), i.setValue(de);
  }
  an(() => {
    W && (j.unregisterFocusable(W), e(15, W = void 0));
  });
  function Ze(ke) {
    Ir[ke ? "unshift" : "push"](() => {
      ie = ke, e(2, ie);
    });
  }
  return t.$$set = (ke) => {
    "componentContext" in ke && e(0, Z = ke.componentContext), "layoutParams" in ke && e(1, se = ke.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(19, n = Z.origJson), t.$$.dirty[0] & /*origJson*/
    524288 && n && Fe(), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, o = Z.json.is_on_variable), t.$$.dirty[0] & /*variable, componentContext*/
    262145 && P(e(7, i = o && (Z.getVariable(o, "boolean") || j.awaitGlobalVariable(o, "boolean", !1)) || io("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(12, s = Z.getDerivedFromVars(Z.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && L(e(11, a = Z.getDerivedFromVars(Z.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && w(e(10, l = Z.getDerivedFromVars(Z.json.on_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    2359313) {
      let ke = !1;
      o ? (z.hasAction() || (_ == null ? void 0 : _.mode) === "exclude") && (ke = !0, Z.logError(K(new Error('Cannot show "switch" inside component with an action or inside accessibility mode=exclude')))) : (ke = !0, Z.logError(K(new Error('Missing "is_on_variable" in "switch"')))), je !== ke && e(4, je = ke);
    }
    if (t.$$.dirty[0] & /*value, $valueVariable*/
    16777224 && Ci(de) !== Ci(ee) && e(3, de = Ci(ee)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    8388640 && e(5, pe = _n(O, pe)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    4259840 && (e(16, ze = _r(p, 1, ze)), typeof p == "string")) {
      const ke = uo(p);
      ke && (ke.a *= 0.3, e(17, be = Ql(ke)));
    }
    t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    2097153 && (_ != null && _.description ? e(6, Ee = Yo(_)) : Z.logError(K(new Error('Missing accessibility "description" for switch'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled, $direction*/
    1048608 && e(9, u = {
      disabled: !pe,
      direction: f
    }), t.$$.dirty[0] & /*onColor, onSubColor*/
    196608 && e(8, c = {
      "--divkit-switch-on-color": ze,
      "--divkit-switch-on-sub-color": be
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    32773 && ie && Z.json && (W && (j.unregisterFocusable(W), e(15, W = void 0)), Z.id && !Z.fakeElement && (e(15, W = Z.id), j.registerFocusable(W, {
      focus() {
        ie && ie.focus();
      }
    })));
  }, [
    Z,
    se,
    ie,
    de,
    je,
    pe,
    Ee,
    i,
    c,
    u,
    l,
    a,
    s,
    N,
    Ge,
    W,
    ze,
    be,
    o,
    n,
    f,
    _,
    p,
    O,
    ee,
    Ze
  ];
}
class lk extends Lr {
  constructor(r) {
    super(), Or(this, r, sk, ik, Ar, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const ak = "appkit-checkbox", uk = "appkit-checkbox__box", ck = "appkit-checkbox__box_checked", fk = "appkit-checkbox__checkmark", dk = "appkit-checkbox_disabled", _k = "appkit-checkbox__input", ri = {
  checkbox: ak,
  checkbox__box: uk,
  checkbox__box_checked: ck,
  checkbox__checkmark: fk,
  checkbox_disabled: dk,
  checkbox__input: _k
};
function pk(t) {
  let r, e;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function gk(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: ht(
        "checkbox",
        ri,
        /*mods*/
        t[9]
      ),
      style: (
        /*stl*/
        t[8]
      ),
      customDescription: !0,
      customActions: "checkbox",
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: {
        default: [
          hk,
          ({ focusHandler: n, blurHandler: o, hasCustomFocus: i }) => ({
            32: n,
            33: o,
            34: i
          }),
          ({ focusHandler: n, blurHandler: o, hasCustomFocus: i }) => [
            0,
            (n ? 2 : 0) | (o ? 4 : 0) | (i ? 8 : 0)
          ]
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = ht(
        "checkbox",
        ri,
        /*mods*/
        n[9]
      )), o[0] & /*stl*/
      256 && (i.style = /*stl*/
      n[8]), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*value, description, isEnabled, input*/
      108 | o[1] & /*$$scope, hasCustomFocus, focusHandler, blurHandler*/
      30 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function hk(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Se("div"), e = Se("div"), o = lr(), i = Se("input"), g(e, "class", ri.checkbox__checkmark), g(r, "class", n = ht("checkbox__box", ri, { checked: (
        /*value*/
        t[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = ht("checkbox__input", ri, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[34]
        )
      })), g(i, "autocomplete", "off"), g(i, "role", "checkbox"), g(
        i,
        "aria-checked",
        /*value*/
        t[3]
      ), g(
        i,
        "aria-label",
        /*description*/
        t[6]
      ), i.disabled = a = !/*isEnabled*/
      t[5], i.checked = /*value*/
      t[3];
    },
    m(c, f) {
      q(c, r, f), pt(r, e), q(c, o, f), q(c, i, f), t[28](i), l || (u = [
        He(
          i,
          "input",
          /*onInput*/
          t[15]
        ),
        He(i, "focus", function() {
          Pr(
            /*focusHandler*/
            t[32]
          ) && t[32].apply(this, arguments);
        }),
        He(i, "blur", function() {
          Pr(
            /*blurHandler*/
            t[33]
          ) && t[33].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[0] & /*value*/
      8 && n !== (n = ht("checkbox__box", ri, { checked: (
        /*value*/
        t[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      8 && s !== (s = ht("checkbox__input", ri, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[34]
        )
      })) && g(i, "class", s), f[0] & /*value*/
      8 && g(
        i,
        "aria-checked",
        /*value*/
        t[3]
      ), f[0] & /*description*/
      64 && g(
        i,
        "aria-label",
        /*description*/
        t[6]
      ), f[0] & /*isEnabled*/
      32 && a !== (a = !/*isEnabled*/
      t[5]) && (i.disabled = a), f[0] & /*value*/
      8 && (i.checked = /*value*/
      t[3]);
    },
    d(c) {
      c && (J(r), J(o), J(i)), t[28](null), l = !1, Hr(u);
    }
  };
}
function mk(t) {
  let r, e, n, o;
  const i = [gk, pk], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (or(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ir()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (B(e), o = !0);
    },
    o(l) {
      Q(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function bk(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m = A, p = () => (m(), m = F(s, ($) => e(22, h = $)), s), k, w = A, O = () => (w(), w = F(c, ($) => e(23, k = $)), c), G, L = A, ee = () => (L(), L = F(u, ($) => e(24, G = $)), u), fe, P = A, Z = () => (P(), P = F(l, ($) => e(25, fe = $)), l), se, j = A, z = () => (j(), j = F(a, ($) => e(26, se = $)), a), N, W = A, ie = () => (W(), W = F(i, ($) => e(27, N = $)), i);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => L()), t.$$.on_destroy.push(() => P()), t.$$.on_destroy.push(() => j()), t.$$.on_destroy.push(() => W());
  let { componentContext: de } = r, { layoutParams: je = void 0 } = r;
  const Ee = Dr(Yr), pe = Dr(So);
  let ze, be, Fe = !1, Ge = !1, Ze = "", ke = !0, et = "#129386", _e = "rgba(0, 0, 0, .3)", Ie = "#fff";
  function ue() {
    e(5, ke = !0), e(17, et = "#129386"), e(18, _e = "rgba(0, 0, 0, .3)"), e(19, Ie = "#fff");
  }
  function oe($) {
    e(3, Fe = $.target.checked), i.setValue(Fe);
  }
  an(() => {
    ze && (Ee.unregisterFocusable(ze), e(16, ze = void 0));
  });
  function ye($) {
    Ir[$ ? "unshift" : "push"](() => {
      be = $, e(2, be);
    });
  }
  return t.$$set = ($) => {
    "componentContext" in $ && e(0, de = $.componentContext), "layoutParams" in $ && e(1, je = $.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(21, n = de.origJson), t.$$.dirty[0] & /*origJson*/
    2097152 && n && ue(), t.$$.dirty[0] & /*componentContext*/
    1 && e(20, o = de.json.is_checked_variable), t.$$.dirty[0] & /*variable, componentContext*/
    1048577 && ie(e(7, i = o && (de.getVariable(o, "boolean") || Ee.awaitGlobalVariable(o, "boolean", !1)) || io("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && p(e(14, s = de.getDerivedFromVars(de.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && z(e(13, a = de.getDerivedFromVars(de.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Z(e(12, l = de.getDerivedFromVars(de.json.on_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ee(e(11, u = de.getDerivedFromVars(de.json.off_color))), t.$$.dirty[0] & /*componentContext*/
    1 && O(e(10, c = de.getDerivedFromVars(de.json.check_mark_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    5242897) {
      let $ = !1;
      o ? (pe.hasAction() || (h == null ? void 0 : h.mode) === "exclude") && ($ = !0, de.logError(K(new Error('Cannot show "checkbox" inside component with an action or inside accessibility mode=exclude')))) : ($ = !0, de.logError(K(new Error('Missing "is_checked_variable" in "checkbox"')))), Ge !== $ && e(4, Ge = $);
    }
    t.$$.dirty[0] & /*value, $valueVariable*/
    134217736 && Ci(Fe) !== Ci(N) && e(3, Fe = Ci(N)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    67108896 && e(5, ke = _n(se, ke)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    33685504 && e(17, et = _r(fe, 1, et)), t.$$.dirty[0] & /*$jsonOffColor, offColor*/
    17039360 && e(18, _e = _r(G, 1, _e)), t.$$.dirty[0] & /*$jsonCheckMarkColor, checkMarkColor*/
    8912896 && e(19, Ie = _r(k, 1, Ie)), t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    4194305 && (h != null && h.description ? e(6, Ze = Yo(h)) : de.logError(K(new Error('Missing accessibility "description" for checkbox'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    32 && e(9, f = { disabled: !ke }), t.$$.dirty[0] & /*onColor, offColor, checkMarkColor*/
    917504 && e(8, _ = {
      "--divkit-checkbox-on-color": et,
      "--divkit-checkbox-off-color": _e,
      "--divkit-checkbox-check-mark-color": Ie
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    65541 && be && de.json && (ze && (Ee.unregisterFocusable(ze), e(16, ze = void 0)), de.id && !de.fakeElement && (e(16, ze = de.id), Ee.registerFocusable(ze, {
      focus() {
        be && be.focus();
      }
    })));
  }, [
    de,
    je,
    be,
    Fe,
    Ge,
    ke,
    Ze,
    i,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    oe,
    ze,
    et,
    _e,
    Ie,
    o,
    n,
    h,
    k,
    G,
    fe,
    se,
    N,
    ye
  ];
}
class yk extends Lr {
  constructor(r) {
    super(), Or(this, r, bk, mk, Ar, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const wk = "appkit-radio", kk = "appkit-radio__group", vk = "appkit-radio__group_vertical", jk = "appkit-radio__group_horizontal", Ck = "appkit-radio__item", Ek = "appkit-radio_disabled", Ak = "appkit-radio__circle", Sk = "appkit-radio__circle_selected", Vk = "appkit-radio__dot", Fk = "appkit-radio__label", Ik = "appkit-radio__input", go = {
  radio: wk,
  radio__group: kk,
  radio__group_vertical: vk,
  radio__group_horizontal: jk,
  radio__item: Ck,
  radio_disabled: Ek,
  radio__circle: Ak,
  radio__circle_selected: Sk,
  radio__dot: Vk,
  radio__label: Fk,
  radio__input: Ik
};
function cf(t, r, e) {
  const n = t.slice();
  return n[55] = r[e], n;
}
function Dk(t) {
  let r, e;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Tk(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: ht(
        "radio",
        go,
        /*mods*/
        t[11]
      ),
      style: (
        /*stl*/
        t[9]
      ),
      customDescription: !0,
      customActions: "radio",
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: {
        default: [
          Nk,
          ({ focusHandler: n, blurHandler: o, hasCustomFocus: i }) => ({
            52: n,
            53: o,
            54: i
          }),
          ({ focusHandler: n, blurHandler: o, hasCustomFocus: i }) => [
            0,
            (n ? 2097152 : 0) | (o ? 4194304 : 0) | (i ? 8388608 : 0)
          ]
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = ht(
        "radio",
        go,
        /*mods*/
        n[11]
      )), o[0] & /*stl*/
      512 && (i.style = /*stl*/
      n[9]), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*groupMods, groupStl, description, container, filteredItems, groupName, $valueVariable, isEnabled*/
      8394100 | o[1] & /*$$scope, focusHandler, blurHandler*/
      140509184 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Mk(t) {
  let r, e = (
    /*item*/
    t[55].value + ""
  ), n;
  return {
    c() {
      r = Se("span"), n = Pn(e), g(r, "class", go.radio__label);
    },
    m(o, i) {
      q(o, r, i), pt(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      o[55].value + "") && Qn(n, e);
    },
    d(o) {
      o && J(r);
    }
  };
}
function Pk(t) {
  let r, e = (
    /*item*/
    t[55].text + ""
  ), n;
  return {
    c() {
      r = Se("span"), n = Pn(e), g(r, "class", go.radio__label);
    },
    m(o, i) {
      q(o, r, i), pt(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      o[55].text + "") && Qn(n, e);
    },
    d(o) {
      o && J(r);
    }
  };
}
function ff(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h;
  function m(O, G) {
    return (
      /*item*/
      O[55].text ? Pk : Mk
    );
  }
  let p = m(t), k = p(t);
  function w() {
    return (
      /*change_handler*/
      t[47](
        /*item*/
        t[55]
      )
    );
  }
  return {
    c() {
      r = Se("label"), e = Se("div"), n = Se("div"), i = lr(), k.c(), s = lr(), a = Se("input"), f = lr(), g(n, "class", go.radio__dot), g(e, "class", o = ht("radio__circle", go, {
        selected: (
          /*$valueVariable*/
          t[23] === /*item*/
          t[55].value
        )
      })), g(a, "type", "radio"), g(a, "class", go.radio__input), g(
        a,
        "name",
        /*groupName*/
        t[12]
      ), a.value = l = /*item*/
      t[55].value, a.checked = u = /*$valueVariable*/
      t[23] === /*item*/
      t[55].value, a.disabled = c = !/*isEnabled*/
      t[4], g(r, "class", go.radio__item);
    },
    m(O, G) {
      q(O, r, G), pt(r, e), pt(e, n), pt(r, i), k.m(r, null), pt(r, s), pt(r, a), pt(r, f), _ || (h = [
        He(a, "change", w),
        He(a, "focus", function() {
          Pr(
            /*focusHandler*/
            t[52]
          ) && t[52].apply(this, arguments);
        }),
        He(a, "blur", function() {
          Pr(
            /*blurHandler*/
            t[53]
          ) && t[53].apply(this, arguments);
        })
      ], _ = !0);
    },
    p(O, G) {
      t = O, G[0] & /*$valueVariable, filteredItems*/
      8388640 && o !== (o = ht("radio__circle", go, {
        selected: (
          /*$valueVariable*/
          t[23] === /*item*/
          t[55].value
        )
      })) && g(e, "class", o), p === (p = m(t)) && k ? k.p(t, G) : (k.d(1), k = p(t), k && (k.c(), k.m(r, s))), G[0] & /*groupName*/
      4096 && g(
        a,
        "name",
        /*groupName*/
        t[12]
      ), G[0] & /*filteredItems*/
      32 && l !== (l = /*item*/
      t[55].value) && (a.value = l), G[0] & /*$valueVariable, filteredItems*/
      8388640 && u !== (u = /*$valueVariable*/
      t[23] === /*item*/
      t[55].value) && (a.checked = u), G[0] & /*isEnabled*/
      16 && c !== (c = !/*isEnabled*/
      t[4]) && (a.disabled = c);
    },
    d(O) {
      O && J(r), k.d(), _ = !1, Hr(h);
    }
  };
}
function Nk(t) {
  let r, e, n = nr(
    /*filteredItems*/
    t[5]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = ff(cf(t, n, i));
  return {
    c() {
      r = Se("div");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", e = ht(
        "radio__group",
        go,
        /*groupMods*/
        t[10]
      )), g(
        r,
        "style",
        /*groupStl*/
        t[8]
      ), g(r, "role", "radiogroup"), g(
        r,
        "aria-label",
        /*description*/
        t[6]
      );
    },
    m(i, s) {
      q(i, r, s);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(r, null);
      t[48](r);
    },
    p(i, s) {
      if (s[0] & /*groupName, filteredItems, $valueVariable, isEnabled, onChange*/
      25169968 | s[1] & /*focusHandler, blurHandler*/
      6291456) {
        n = nr(
          /*filteredItems*/
          i[5]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = cf(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = ff(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s[0] & /*groupMods*/
      1024 && e !== (e = ht(
        "radio__group",
        go,
        /*groupMods*/
        i[10]
      )) && g(r, "class", e), s[0] & /*groupStl*/
      256 && g(
        r,
        "style",
        /*groupStl*/
        i[8]
      ), s[0] & /*description*/
      64 && g(
        r,
        "aria-label",
        /*description*/
        i[6]
      );
    },
    d(i) {
      i && J(r), nn(o, i), t[48](null);
    }
  };
}
function zk(t) {
  let r, e, n, o;
  const i = [Tk, Dk], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (or(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ir()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (B(e), o = !0);
    },
    o(l) {
      Q(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Rk(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, G, L, ee, fe, P, Z = A, se = () => (Z(), Z = F(l, (We) => e(37, P = We)), l), j, z = A, N = () => (z(), z = F(w, (We) => e(38, j = We)), w), W, ie = A, de = () => (ie(), ie = F(k, (We) => e(39, W = We)), k), je, Ee = A, pe = () => (Ee(), Ee = F(p, (We) => e(40, je = We)), p), ze, be = A, Fe = () => (be(), be = F(m, (We) => e(41, ze = We)), m), Ge, Ze = A, ke = () => (Ze(), Ze = F(h, (We) => e(42, Ge = We)), h), et, _e = A, Ie = () => (_e(), _e = F(_, (We) => e(43, et = We)), _), ue, oe = A, ye = () => (oe(), oe = F(f, (We) => e(44, ue = We)), f), $, Ae = A, xe = () => (Ae(), Ae = F(c, (We) => e(45, $ = We)), c), qe, te = A, Xe = () => (te(), te = F(u, (We) => e(46, qe = We)), u), Le, tt = A, dt = () => (tt(), tt = F(a, (We) => e(23, Le = We)), a);
  t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => ie()), t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => Ze()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => te()), t.$$.on_destroy.push(() => tt());
  let { componentContext: lt } = r, { layoutParams: wt = void 0 } = r;
  const ot = Dr(Yr), At = Dr(So);
  let it, me, ne = !1, at = "", Ve = !0, D = "#129386", jt = "rgba(0, 0, 0, 0.3)", gt = "", kt, St, rt = "", Y = "vertical", Vt = 8;
  function Dt() {
    e(4, Ve = !0), e(26, D = "#129386"), e(27, jt = "rgba(0, 0, 0, 0.3)"), e(28, gt = ""), e(29, kt = void 0), e(30, St = void 0), e(31, rt = ""), e(32, Y = "vertical"), e(33, Vt = 8);
  }
  function Gt(We) {
    a.setValue(We);
  }
  an(() => {
    it && (ot.unregisterFocusable(it), e(25, it = void 0));
  });
  const Jt = (We) => Gt(We.value);
  function ve(We) {
    Ir[We ? "unshift" : "push"](() => {
      me = We, e(2, me);
    });
  }
  return t.$$set = (We) => {
    "componentContext" in We && e(0, lt = We.componentContext), "layoutParams" in We && e(1, wt = We.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(36, n = lt.origJson), t.$$.dirty[1] & /*origJson*/
    32 && n && Dt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(34, o = lt.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(35, i = lt.json.options), t.$$.dirty[1] & /*items*/
    16 && e(5, s = Array.isArray(i) && i.filter((We) => typeof We.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8 && dt(e(7, a = o && (lt.getVariable(o, "string") || ot.awaitGlobalVariable(o, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && se(e(22, l = lt.getDerivedFromVars(lt.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(21, u = lt.getDerivedFromVars(lt.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(20, c = lt.getDerivedFromVars(lt.json.selected_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ye(e(19, f = lt.getDerivedFromVars(lt.json.default_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(18, _ = lt.getDerivedFromVars(lt.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ke(e(17, h = lt.getDerivedFromVars(lt.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && Fe(e(16, m = lt.getDerivedFromVars(lt.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(15, p = lt.getDerivedFromVars(lt.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(14, k = lt.getDerivedFromVars(lt.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(13, w = lt.getDerivedFromVars(lt.json.item_spacing))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || lt.logError(K(new Error('Empty "options" in "radio"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    72) {
      let We = !1;
      o ? (At.hasAction() || (P == null ? void 0 : P.mode) === "exclude") && (We = !0, lt.logError(K(new Error('Cannot show "radio" inside component with an action or inside accessibility mode=exclude')))) : (We = !0, lt.logError(K(new Error('Missing "value_variable" in "radio"')))), ne !== We && e(3, ne = We);
    }
    t.$$.dirty[0] & /*isEnabled*/
    16 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    32768 && e(4, Ve = _n(qe, Ve)), t.$$.dirty[0] & /*selectedColor*/
    67108864 | t.$$.dirty[1] & /*$jsonSelectedColor*/
    16384 && e(26, D = _r($, 1, D)), t.$$.dirty[0] & /*defaultColor*/
    134217728 | t.$$.dirty[1] & /*$jsonDefaultColor*/
    8192 && e(27, jt = _r(ue, 1, jt)), t.$$.dirty[0] & /*textColor*/
    268435456 | t.$$.dirty[1] & /*$jsonTextColor*/
    4096 && e(28, gt = _r(et, 1, gt)), t.$$.dirty[0] & /*fontSize*/
    536870912 | t.$$.dirty[1] & /*$jsonFontSize*/
    2048 && e(29, kt = typeof Ge == "number" && Ge > 0 ? Ge : kt), t.$$.dirty[0] & /*fontWeight*/
    1073741824 | t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontFamily*/
    1536 && (e(30, St = ai(ze, void 0, St)), je && typeof je == "string" ? e(31, rt = ot.typefaceProvider(je, { fontWeight: St || 400 })) : e(31, rt = "")), t.$$.dirty[1] & /*$jsonOrientation, orientation*/
    258 && e(32, Y = W === "horizontal" || W === "vertical" ? W : Y), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    132 && e(33, Vt = typeof j == "number" && j >= 0 ? j : Vt), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    64 && (P != null && P.description ? e(6, at = Yo(P)) : lt.logError(K(new Error('Missing accessibility "description" for radio'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext*/
    1 && e(12, O = lt.id || `radio_${Math.random().toString(36).slice(2)}`), t.$$.dirty[0] & /*isEnabled*/
    16 && e(11, G = { disabled: !Ve }), t.$$.dirty[1] & /*orientation*/
    2 && e(10, L = { [Y]: !0 }), t.$$.dirty[0] & /*selectedColor, defaultColor, textColor, fontSize, fontWeight*/
    2080374784 | t.$$.dirty[1] & /*fontFamily*/
    1 && e(9, ee = {
      "--divkit-radio-selected-color": D,
      "--divkit-radio-default-color": jt,
      ...gt ? { "--divkit-radio-text-color": gt } : {},
      ...kt ? { "font-size": ce(kt) } : {},
      ...St ? { "font-weight": St } : {},
      ...rt ? { "font-family": rt } : {}
    }), t.$$.dirty[1] & /*itemSpacing*/
    4 && e(8, fe = `gap: ${ce(Vt)}`), t.$$.dirty[0] & /*container, componentContext, prevId*/
    33554437 && me && lt.json && (it && (ot.unregisterFocusable(it), e(25, it = void 0)), lt.id && !lt.fakeElement && (e(25, it = lt.id), ot.registerFocusable(it, {
      focus() {
        if (me) {
          const We = me.querySelector("input");
          We && We.focus();
        }
      }
    })));
  }, [
    lt,
    wt,
    me,
    ne,
    Ve,
    s,
    at,
    a,
    fe,
    ee,
    L,
    G,
    O,
    w,
    k,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    Le,
    Gt,
    it,
    D,
    jt,
    gt,
    kt,
    St,
    rt,
    Y,
    Vt,
    o,
    i,
    n,
    P,
    j,
    W,
    je,
    ze,
    Ge,
    et,
    ue,
    $,
    qe,
    Jt,
    ve
  ];
}
class Ok extends Lr {
  constructor(r) {
    super(), Or(this, r, Rk, zk, Ar, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Lk = "appkit-progress", Bk = "appkit-progress__linear", Hk = "appkit-progress__circular", Jo = {
  progress: Lk,
  progress__linear: Bk,
  "progress__linear-fill": "appkit-progress__linear-fill",
  "progress__linear-fill_indeterminate": "appkit-progress__linear-fill_indeterminate",
  "progress-linear-indeterminate": "appkit-progress-linear-indeterminate",
  progress__circular: Hk,
  "progress__circular-track": "appkit-progress__circular-track",
  "progress__circular-fill": "appkit-progress__circular-fill",
  "progress__circular-fill_indeterminate": "appkit-progress__circular-fill_indeterminate",
  "progress-circular-indeterminate": "appkit-progress-circular-indeterminate"
};
function Wk(t) {
  let r, e;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Uk(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: ht("progress", Jo, {}),
      style: (
        /*stl*/
        t[7]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: { default: [qk] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*stl*/
      128 && (i.style = /*stl*/
      n[7]), o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o & /*$$scope, trackThickness, ariaValue, isIndeterminate, progressValue, progressStyle, circularOffset*/
      134218108 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Gk(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = $r("svg"), e = $r("circle"), n = $r("circle"), g(e, "class", Jo["progress__circular-track"]), g(e, "cx", Wo / 2), g(e, "cy", Wo / 2), g(e, "r", ql), g(
        e,
        "stroke-width",
        /*trackThickness*/
        t[5]
      ), g(n, "class", o = ht("progress__circular-fill", Jo, {
        indeterminate: (
          /*isIndeterminate*/
          t[4]
        )
      })), g(n, "cx", Wo / 2), g(n, "cy", Wo / 2), g(n, "r", ql), g(
        n,
        "stroke-width",
        /*trackThickness*/
        t[5]
      ), g(
        n,
        "stroke-dasharray",
        /*circularCircumference*/
        t[15]
      ), g(n, "stroke-dashoffset", i = /*isIndeterminate*/
      t[4] ? (
        /*circularCircumference*/
        t[15] * 0.75
      ) : (
        /*circularOffset*/
        t[8]
      )), g(n, "stroke-linecap", "round"), g(r, "class", Jo.progress__circular), g(r, "width", Wo), g(r, "height", Wo), g(r, "viewBox", "0 0 " + Wo + " " + Wo), g(r, "role", "progressbar"), g(
        r,
        "aria-valuenow",
        /*ariaValue*/
        t[6]
      ), g(r, "aria-valuemin", 0), g(r, "aria-valuemax", 100);
    },
    m(s, a) {
      q(s, r, a), pt(r, e), pt(r, n);
    },
    p(s, a) {
      a & /*trackThickness*/
      32 && g(
        e,
        "stroke-width",
        /*trackThickness*/
        s[5]
      ), a & /*isIndeterminate*/
      16 && o !== (o = ht("progress__circular-fill", Jo, {
        indeterminate: (
          /*isIndeterminate*/
          s[4]
        )
      })) && g(n, "class", o), a & /*trackThickness*/
      32 && g(
        n,
        "stroke-width",
        /*trackThickness*/
        s[5]
      ), a & /*isIndeterminate, circularOffset*/
      272 && i !== (i = /*isIndeterminate*/
      s[4] ? (
        /*circularCircumference*/
        s[15] * 0.75
      ) : (
        /*circularOffset*/
        s[8]
      )) && g(n, "stroke-dashoffset", i), a & /*ariaValue*/
      64 && g(
        r,
        "aria-valuenow",
        /*ariaValue*/
        s[6]
      );
    },
    d(s) {
      s && J(r);
    }
  };
}
function Jk(t) {
  let r, e, n;
  return {
    c() {
      r = Se("div"), e = Se("div"), g(e, "class", n = ht("progress__linear-fill", Jo, {
        indeterminate: (
          /*isIndeterminate*/
          t[4]
        )
      })), M(
        e,
        "width",
        /*isIndeterminate*/
        t[4] ? "30%" : (
          /*progressValue*/
          t[2] * 100 + "%"
        )
      ), g(r, "class", Jo.progress__linear), M(r, "height", ce(
        /*trackThickness*/
        t[5]
      )), g(r, "role", "progressbar"), g(
        r,
        "aria-valuenow",
        /*ariaValue*/
        t[6]
      ), g(r, "aria-valuemin", 0), g(r, "aria-valuemax", 100);
    },
    m(o, i) {
      q(o, r, i), pt(r, e);
    },
    p(o, i) {
      i & /*isIndeterminate*/
      16 && n !== (n = ht("progress__linear-fill", Jo, {
        indeterminate: (
          /*isIndeterminate*/
          o[4]
        )
      })) && g(e, "class", n), i & /*isIndeterminate, progressValue*/
      20 && M(
        e,
        "width",
        /*isIndeterminate*/
        o[4] ? "30%" : (
          /*progressValue*/
          o[2] * 100 + "%"
        )
      ), i & /*trackThickness*/
      32 && M(r, "height", ce(
        /*trackThickness*/
        o[5]
      )), i & /*ariaValue*/
      64 && g(
        r,
        "aria-valuenow",
        /*ariaValue*/
        o[6]
      );
    },
    d(o) {
      o && J(r);
    }
  };
}
function qk(t) {
  let r;
  function e(i, s) {
    return (
      /*progressStyle*/
      i[3] === "linear" ? Jk : Gk
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Kt();
    },
    m(i, s) {
      o.m(i, s), q(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && J(r), o.d(i);
    }
  };
}
function Yk(t) {
  let r, e, n, o;
  const i = [Uk, Wk], s = [];
  function a(l, u) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, [u]) {
      e && e.p(l, u);
    },
    i(l) {
      o || (B(e), o = !0);
    },
    o(l) {
      Q(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
const Wo = 48, ql = 20;
function Kk(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m = A, p = () => (m(), m = F(u, (et) => e(19, h = et)), u), k, w = A, O = () => (w(), w = F(l, (et) => e(20, k = et)), l), G, L = A, ee = () => (L(), L = F(a, (et) => e(21, G = et)), a), fe, P = A, Z = () => (P(), P = F(s, (et) => e(22, fe = et)), s), se, j = A, z = () => (j(), j = F(i, (et) => e(23, se = et)), i), N, W = A, ie = () => (W(), W = F(o, (et) => e(24, N = et)), o);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => L()), t.$$.on_destroy.push(() => P()), t.$$.on_destroy.push(() => j()), t.$$.on_destroy.push(() => W());
  let { componentContext: de } = r, { layoutParams: je = void 0 } = r;
  Dr(Yr);
  let Ee = 0, pe = "linear", ze = !1, be = "#129386", Fe = "rgba(0, 0, 0, .1)", Ge = 4;
  function Ze() {
    e(2, Ee = 0), e(3, pe = "linear"), e(4, ze = !1), e(16, be = "#129386"), e(17, Fe = "rgba(0, 0, 0, .1)"), e(5, Ge = 4);
  }
  const ke = 2 * Math.PI * ql;
  return t.$$set = (et) => {
    "componentContext" in et && e(0, de = et.componentContext), "layoutParams" in et && e(1, je = et.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(18, n = de.origJson), t.$$.dirty & /*origJson*/
    262144 && n && Ze(), t.$$.dirty & /*componentContext*/
    1 && ie(e(14, o = de.getDerivedFromVars(de.json.value))), t.$$.dirty & /*componentContext*/
    1 && z(e(13, i = de.getDerivedFromVars(de.json.style))), t.$$.dirty & /*componentContext*/
    1 && Z(e(12, s = de.getDerivedFromVars(de.json.is_indeterminate))), t.$$.dirty & /*componentContext*/
    1 && ee(e(11, a = de.getDerivedFromVars(de.json.active_color))), t.$$.dirty & /*componentContext*/
    1 && O(e(10, l = de.getDerivedFromVars(de.json.inactive_color))), t.$$.dirty & /*componentContext*/
    1 && p(e(9, u = de.getDerivedFromVars(de.json.track_thickness))), t.$$.dirty & /*$jsonValue, progressValue*/
    16777220 && e(2, Ee = typeof N == "number" ? Math.max(0, Math.min(1, N)) : Ee), t.$$.dirty & /*$jsonStyle, progressStyle*/
    8388616 && e(3, pe = se === "linear" || se === "circular" ? se : pe), t.$$.dirty & /*$jsonIsIndeterminate, isIndeterminate*/
    4194320 && e(4, ze = _n(fe, ze)), t.$$.dirty & /*$jsonActiveColor, activeColor*/
    2162688 && e(16, be = _r(G, 1, be)), t.$$.dirty & /*$jsonInactiveColor, inactiveColor*/
    1179648 && e(17, Fe = _r(k, 1, Fe)), t.$$.dirty & /*$jsonTrackThickness, trackThickness*/
    524320 && e(5, Ge = typeof h == "number" && h >= 0 ? h : Ge), t.$$.dirty & /*progressValue*/
    4 && e(8, c = ke * (1 - Ee)), t.$$.dirty & /*activeColor, inactiveColor*/
    196608 && e(7, f = {
      "--divkit-progress-active-color": be,
      "--divkit-progress-inactive-color": Fe
    }), t.$$.dirty & /*isIndeterminate, progressValue*/
    20 && e(6, _ = ze ? void 0 : Math.round(Ee * 100));
  }, [
    de,
    je,
    Ee,
    pe,
    ze,
    Ge,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    ke,
    be,
    Fe,
    n,
    h,
    k,
    G,
    fe,
    se,
    N
  ];
}
class Xk extends Lr {
  constructor(r) {
    super(), Or(this, r, Kk, Yk, Ar, { componentContext: 0, layoutParams: 1 });
  }
}
const Zk = "appkit-table", Qk = "appkit-table_halign_start", xk = "appkit-table_halign_center", $k = "appkit-table_halign_end", ev = "appkit-table_valign_start", tv = "appkit-table_valign_center", rv = "appkit-table_valign_end", nv = "appkit-table__cell", ov = "appkit-table__cell_halign_left", iv = "appkit-table__cell_halign_start", sv = "appkit-table__cell_halign_center", lv = "appkit-table__cell_halign_right", av = "appkit-table__cell_halign_end", uv = "appkit-table__cell_valign_top", cv = "appkit-table__cell_valign_center", fv = "appkit-table__cell_valign_bottom", dv = "appkit-table__cell_valign_baseline", _v = "appkit-table__separator", pv = "appkit-table__separator_row", gv = "appkit-table__separator_col", Ro = {
  table: Zk,
  table_halign_start: Qk,
  table_halign_center: xk,
  table_halign_end: $k,
  table_valign_start: ev,
  table_valign_center: tv,
  table_valign_end: rv,
  table__cell: nv,
  table__cell_halign_left: ov,
  table__cell_halign_start: iv,
  table__cell_halign_center: sv,
  table__cell_halign_right: lv,
  table__cell_halign_end: av,
  table__cell_valign_top: uv,
  table__cell_valign_center: cv,
  table__cell_valign_bottom: fv,
  table__cell_valign_baseline: dv,
  table__separator: _v,
  table__separator_row: pv,
  table__separator_col: gv
};
function df(t, r, e) {
  const n = t.slice();
  return n[35] = r[e], n;
}
function _f(t, r, e) {
  const n = t.slice();
  return n[38] = r[e], n;
}
function hv(t) {
  let r, e;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function mv(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: ht(
        "table",
        Ro,
        /*mods*/
        t[7]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      style: (
        /*style*/
        t[6]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      parentOf: (
        /*items*/
        t[2]
      ),
      $$slots: { default: [bv] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = ht(
        "table",
        Ro,
        /*mods*/
        n[7]
      )), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*style*/
      64 && (i.style = /*style*/
      n[6]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*items*/
      4 && (i.parentOf = /*items*/
      n[2]), o[0] & /*separatorElements, cellPlacements*/
      48 | o[1] & /*$$scope*/
      1024 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function pf(t) {
  var a, l, u, c, f, _, h, m;
  let r, e, n, o = `${/*placement*/
  ((l = (a = t[38].layoutParams.gridArea) == null ? void 0 : a.x) != null ? l : 0) + 1} / span ${/*placement*/
  (c = (u = t[38].layoutParams.gridArea) == null ? void 0 : u.colSpan) != null ? c : 1}`, i = `${/*placement*/
  ((_ = (f = t[38].layoutParams.gridArea) == null ? void 0 : f.y) != null ? _ : 0) + 1} / span ${/*placement*/
  (m = (h = t[38].layoutParams.gridArea) == null ? void 0 : h.rowSpan) != null ? m : 1}`, s;
  return e = new qn({
    props: {
      componentContext: (
        /*placement*/
        t[38].componentContext
      ),
      layoutParams: (
        /*placement*/
        t[38].layoutParams
      )
    }
  }), {
    c() {
      r = Se("div"), Bt(e.$$.fragment), g(r, "class", n = ht("table__cell", Ro, {
        halign: (
          /*placement*/
          t[38].cellHAlign
        ),
        valign: (
          /*placement*/
          t[38].cellVAlign
        )
      })), M(r, "grid-column", o), M(r, "grid-row", i), M(
        r,
        "background",
        /*placement*/
        t[38].backgroundStyle || void 0
      );
    },
    m(p, k) {
      q(p, r, k), zt(e, r, null), s = !0;
    },
    p(p, k) {
      var O, G, L, ee, fe, P, Z, se;
      const w = {};
      k[0] & /*cellPlacements*/
      16 && (w.componentContext = /*placement*/
      p[38].componentContext), k[0] & /*cellPlacements*/
      16 && (w.layoutParams = /*placement*/
      p[38].layoutParams), e.$set(w), (!s || k[0] & /*cellPlacements*/
      16 && n !== (n = ht("table__cell", Ro, {
        halign: (
          /*placement*/
          p[38].cellHAlign
        ),
        valign: (
          /*placement*/
          p[38].cellVAlign
        )
      }))) && g(r, "class", n), k[0] & /*cellPlacements*/
      16 && o !== (o = `${/*placement*/
      ((G = (O = p[38].layoutParams.gridArea) == null ? void 0 : O.x) != null ? G : 0) + 1} / span ${/*placement*/
      (ee = (L = p[38].layoutParams.gridArea) == null ? void 0 : L.colSpan) != null ? ee : 1}`) && M(r, "grid-column", o), k[0] & /*cellPlacements*/
      16 && i !== (i = `${/*placement*/
      ((P = (fe = p[38].layoutParams.gridArea) == null ? void 0 : fe.y) != null ? P : 0) + 1} / span ${/*placement*/
      (se = (Z = p[38].layoutParams.gridArea) == null ? void 0 : Z.rowSpan) != null ? se : 1}`) && M(r, "grid-row", i), k[0] & /*cellPlacements*/
      16 && M(
        r,
        "background",
        /*placement*/
        p[38].backgroundStyle || void 0
      );
    },
    i(p) {
      s || (B(e.$$.fragment, p), s = !0);
    },
    o(p) {
      Q(e.$$.fragment, p), s = !1;
    },
    d(p) {
      p && J(r), Rt(e);
    }
  };
}
function gf(t) {
  let r, e, n, o;
  return {
    c() {
      r = Se("div"), e = Se("div"), o = lr(), g(e, "class", n = /*sep*/
      t[35].width ? Ro.table__separator_col : Ro.table__separator_row), M(
        e,
        "background",
        /*sep*/
        t[35].background
      ), M(
        e,
        "height",
        /*sep*/
        t[35].height || void 0
      ), M(
        e,
        "width",
        /*sep*/
        t[35].width || void 0
      ), g(r, "class", Ro.table__separator), M(
        r,
        "grid-column",
        /*sep*/
        t[35].gridColumn
      ), M(
        r,
        "grid-row",
        /*sep*/
        t[35].gridRow
      ), M(
        r,
        "margin-top",
        /*sep*/
        t[35].marginTop || void 0
      ), M(
        r,
        "margin-bottom",
        /*sep*/
        t[35].marginBottom || void 0
      ), M(
        r,
        "margin-left",
        /*sep*/
        t[35].marginLeft || void 0
      ), M(
        r,
        "margin-right",
        /*sep*/
        t[35].marginRight || void 0
      );
    },
    m(i, s) {
      q(i, r, s), pt(r, e), pt(r, o);
    },
    p(i, s) {
      s[0] & /*separatorElements*/
      32 && n !== (n = /*sep*/
      i[35].width ? Ro.table__separator_col : Ro.table__separator_row) && g(e, "class", n), s[0] & /*separatorElements*/
      32 && M(
        e,
        "background",
        /*sep*/
        i[35].background
      ), s[0] & /*separatorElements*/
      32 && M(
        e,
        "height",
        /*sep*/
        i[35].height || void 0
      ), s[0] & /*separatorElements*/
      32 && M(
        e,
        "width",
        /*sep*/
        i[35].width || void 0
      ), s[0] & /*separatorElements*/
      32 && M(
        r,
        "grid-column",
        /*sep*/
        i[35].gridColumn
      ), s[0] & /*separatorElements*/
      32 && M(
        r,
        "grid-row",
        /*sep*/
        i[35].gridRow
      ), s[0] & /*separatorElements*/
      32 && M(
        r,
        "margin-top",
        /*sep*/
        i[35].marginTop || void 0
      ), s[0] & /*separatorElements*/
      32 && M(
        r,
        "margin-bottom",
        /*sep*/
        i[35].marginBottom || void 0
      ), s[0] & /*separatorElements*/
      32 && M(
        r,
        "margin-left",
        /*sep*/
        i[35].marginLeft || void 0
      ), s[0] & /*separatorElements*/
      32 && M(
        r,
        "margin-right",
        /*sep*/
        i[35].marginRight || void 0
      );
    },
    d(i) {
      i && J(r);
    }
  };
}
function bv(t) {
  let r, e, n, o = nr(
    /*cellPlacements*/
    t[4]
  ), i = [];
  for (let u = 0; u < o.length; u += 1)
    i[u] = pf(_f(t, o, u));
  const s = (u) => Q(i[u], 1, 1, () => {
    i[u] = null;
  });
  let a = nr(
    /*separatorElements*/
    t[5]
  ), l = [];
  for (let u = 0; u < a.length; u += 1)
    l[u] = gf(df(t, a, u));
  return {
    c() {
      for (let u = 0; u < i.length; u += 1)
        i[u].c();
      r = lr();
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      e = Kt();
    },
    m(u, c) {
      for (let f = 0; f < i.length; f += 1)
        i[f] && i[f].m(u, c);
      q(u, r, c);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(u, c);
      q(u, e, c), n = !0;
    },
    p(u, c) {
      if (c[0] & /*cellPlacements*/
      16) {
        o = nr(
          /*cellPlacements*/
          u[4]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const _ = _f(u, o, f);
          i[f] ? (i[f].p(_, c), B(i[f], 1)) : (i[f] = pf(_), i[f].c(), B(i[f], 1), i[f].m(r.parentNode, r));
        }
        for (or(), f = o.length; f < i.length; f += 1)
          s(f);
        ir();
      }
      if (c[0] & /*separatorElements*/
      32) {
        a = nr(
          /*separatorElements*/
          u[5]
        );
        let f;
        for (f = 0; f < a.length; f += 1) {
          const _ = df(u, a, f);
          l[f] ? l[f].p(_, c) : (l[f] = gf(_), l[f].c(), l[f].m(e.parentNode, e));
        }
        for (; f < l.length; f += 1)
          l[f].d(1);
        l.length = a.length;
      }
    },
    i(u) {
      if (!n) {
        for (let c = 0; c < o.length; c += 1)
          B(i[c]);
        n = !0;
      }
    },
    o(u) {
      i = i.filter(Boolean);
      for (let c = 0; c < i.length; c += 1)
        Q(i[c]);
      n = !1;
    },
    d(u) {
      u && (J(r), J(e)), nn(i, u), nn(l, u);
    }
  };
}
function yv(t) {
  let r, e, n, o;
  const i = [mv, hv], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (or(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ir()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (B(e), o = !0);
    },
    o(l) {
      Q(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function wv(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p = A, k = () => (p(), p = F(s, (ye) => e(22, m = ye)), s), w, O = A, G = () => (O(), O = F(i, (ye) => e(23, w = ye)), i), L, ee = A, fe = () => (ee(), ee = F(a, (ye) => e(24, L = ye)), a), P, Z = A, se = () => (Z(), Z = F(l, (ye) => e(25, P = ye)), l);
  t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Z());
  let { componentContext: j } = r, { layoutParams: z = void 0 } = r;
  const N = Dr(Yr), W = N.direction;
  bn(t, W, (ye) => e(21, h = ye));
  let ie = !1, de = "start", je = "start", Ee = [], pe, ze = [], be = [], Fe = "";
  function Ge() {
    e(3, ie = !1), e(13, de = "start"), e(14, je = "start");
  }
  function Ze(ye) {
    var te, Xe;
    if (!ye || !ye.style) return null;
    let $ = "#E0E0E0", Ae = 1;
    const xe = ye.style;
    if (xe.type === "shape_drawable" && xe.shape) {
      const Le = xe.shape;
      $ = _r(Le.background_color || xe.color || "#E0E0E0"), Le.type === "rounded_rectangle" && (Ae = Number(((te = Le.item_height) == null ? void 0 : te.value) || ((Xe = Le.item_width) == null ? void 0 : Xe.value) || 1));
    } else xe.color && ($ = _r(xe.color));
    const qe = ye.margins || {};
    return {
      color: $,
      thickness: Ae,
      show_at_start: ye.show_at_start === 1 || ye.show_at_start === !0,
      show_between: ye.show_between !== 0 && ye.show_between !== !1,
      show_at_end: ye.show_at_end === 1 || ye.show_at_end === !0,
      marginTop: Number(qe.top) || 0,
      marginBottom: Number(qe.bottom) || 0,
      marginLeft: Number(qe.left) || 0,
      marginRight: Number(qe.right) || 0
    };
  }
  function ke(ye, $) {
    const Ae = ye.header_row;
    let xe = [];
    return ye.row_builder && Array.isArray($) ? xe = il($, N, j, ye.row_builder).map((te) => te.div) : Array.isArray(ye.rows) && (xe = ye.rows), { rows: xe, headerRow: Ae };
  }
  let et = [];
  function _e(ye, $) {
    et = [];
    for (let Ae = 0; Ae < ye; Ae++)
      et[Ae] = new Array($).fill(!1);
  }
  function Ie(ye, $, Ae, xe) {
    var qe;
    for (let te = ye; te < ye + Ae && te < et.length; te++)
      for (let Xe = $; Xe < $ + xe && Xe < (((qe = et[0]) == null ? void 0 : qe.length) || 0); Xe++)
        et[te][Xe] = !0;
  }
  function ue(ye, $) {
    var xe;
    if (ye >= et.length) return $;
    let Ae = $;
    for (; Ae < (((xe = et[0]) == null ? void 0 : xe.length) || 0) && et[ye][Ae]; )
      Ae++;
    return Ae;
  }
  function oe(ye, $, Ae, xe, qe, te, Xe, Le, tt, dt) {
    const lt = Array.isArray(ye.cells) ? ye.cells : [];
    let wt = 0;
    for (let ot = 0; ot < lt.length; ot++) {
      const At = lt[ot];
      if (!At || !At.div) continue;
      const it = Math.max(1, Number(At.column_span) || 1), me = Math.max(1, Number(At.row_span) || 1);
      wt = ue($, wt), Ie($, wt, me, it);
      const ne = Array.isArray(Ae) && Ae[wt], at = At.content_alignment_horizontal || ne && ne.content_alignment_horizontal || void 0, Ve = At.content_alignment_vertical || ne && ne.content_alignment_vertical || void 0;
      let D;
      const jt = At.background || xe;
      if (jt && Array.isArray(jt) && jt.length > 0) {
        const St = jt[0];
        St && St.type === "solid" && St.color && (D = _r(St.color));
      }
      const gt = tt.get(At.div);
      let kt;
      gt ? (dt.delete(gt), kt = gt) : kt = j.produceChildContext(At.div, { path: `${te}_${ot}` }), Xe.push(kt), Le.push({
        componentContext: kt,
        layoutParams: {
          gridArea: {
            x: wt,
            y: $,
            colSpan: it,
            rowSpan: me
          }
        },
        cellHAlign: at,
        cellVAlign: Ve,
        backgroundStyle: D
      }), wt += it;
    }
  }
  return an(() => {
    Ee.forEach((ye) => {
      ye.destroy();
    });
  }), t.$$set = (ye) => {
    "componentContext" in ye && e(0, j = ye.componentContext), "layoutParams" in ye && e(1, z = ye.layoutParams);
  }, t.$$.update = () => {
    var ye, $, Ae;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(20, n = j.origJson), t.$$.dirty[0] & /*origJson*/
    1048576 && n && Ge(), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, o = j.json.columns), t.$$.dirty[0] & /*componentContext*/
    1 && G(e(11, i = j.getDerivedFromVars(j.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && k(e(10, s = j.getDerivedFromVars(j.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(9, a = j.getDerivedFromVars(j.json.striped))), t.$$.dirty[0] & /*componentContext*/
    1 && se(e(8, l = typeof ((ye = j.json.row_builder) == null ? void 0 : ye.data) == "string" ? j.getDerivedFromVars(($ = j.json.row_builder) == null ? void 0 : $.data, void 0, !0) : (Ae = j.json.row_builder) != null && Ae.data ? Go(j.json.row_builder.data) : void 0)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && (!Array.isArray(o) || o.length === 0 ? e(3, ie = !0) : e(3, ie = !1)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && e(17, u = Array.isArray(o) ? o.length : 0), t.$$.dirty[0] & /*jsonColumns*/
    524288)
      if (Array.isArray(o)) {
        const xe = [];
        for (let qe = 0; qe < o.length; qe++) {
          const te = o[qe], Xe = te == null ? void 0 : te.width;
          if ((Xe == null ? void 0 : Xe.type) === "fixed" && Xe.value)
            xe.push(ce(Number(Xe.value)));
          else if ((Xe == null ? void 0 : Xe.type) === "match_parent") {
            const Le = Number(Xe.weight || 1);
            xe.push(`${Le}fr`);
          } else
            xe.push("auto");
        }
        e(16, Fe = xe.join(" "));
      } else
        e(16, Fe = "");
    if (t.$$.dirty[0] & /*componentContext, $jsonRowBuilderData*/
    33554433 && e(18, c = ke(j.json, P)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonColumns, allRows, columnCount, $jsonStriped*/
    17727493) {
      const xe = new Set(Ee), qe = /* @__PURE__ */ new Map();
      pe === j && Ee.forEach((D) => {
        qe.set(D.json, D);
      });
      const te = [], Xe = [], Le = [];
      let tt = 0;
      const dt = j.json, lt = Array.isArray(o) ? o : [], wt = !!(c.headerRow && Array.isArray(c.headerRow.cells)), ot = c.rows.length, At = (wt ? 1 : 0) + ot;
      _e(At + 10, u + 10);
      const it = Ze(dt.row_separator), me = Ze(dt.column_separator), ne = Ze(dt.header_separator);
      wt && (oe(c.headerRow, tt, lt, c.headerRow.background || dt.header_background, void 0, -1, te, Xe, qe, xe), tt++);
      const at = c.rows;
      for (let D = 0; D < at.length; D++) {
        const jt = at[D];
        if (!jt || !Array.isArray(jt.cells)) continue;
        let gt = jt.background;
        !gt && L && (D % 2 === 0 ? gt = L.even_row_background : gt = L.odd_row_background), oe(jt, tt, lt, gt, void 0, D, te, Xe, qe, xe), tt++;
      }
      const Ve = tt;
      if (ne && wt && ot > 0 && Le.push({
        gridColumn: `1 / span ${u}`,
        gridRow: "1 / span 1",
        background: ne.color,
        height: ce(ne.thickness),
        marginTop: ne.marginTop ? ce(ne.marginTop) : void 0,
        marginBottom: ne.marginBottom ? ce(ne.marginBottom) : void 0,
        marginLeft: ne.marginLeft ? ce(ne.marginLeft) : void 0,
        marginRight: ne.marginRight ? ce(ne.marginRight) : void 0
      }), it) {
        const D = wt ? 1 : 0;
        if (it.show_at_start && ot > 0 && Le.push({
          gridColumn: `1 / span ${u}`,
          gridRow: `${D + 1} / span 1`,
          background: it.color,
          height: ce(it.thickness),
          marginTop: it.marginTop ? ce(it.marginTop) : void 0,
          marginBottom: it.marginBottom ? ce(it.marginBottom) : void 0,
          marginLeft: it.marginLeft ? ce(it.marginLeft) : void 0,
          marginRight: it.marginRight ? ce(it.marginRight) : void 0
        }), it.show_between)
          for (let jt = D; jt < Ve - 1; jt++)
            Le.push({
              gridColumn: `1 / span ${u}`,
              gridRow: `${jt + 1} / span 1`,
              background: it.color,
              height: ce(it.thickness),
              marginTop: it.marginTop ? ce(it.marginTop) : void 0,
              marginBottom: it.marginBottom ? ce(it.marginBottom) : void 0,
              marginLeft: it.marginLeft ? ce(it.marginLeft) : void 0,
              marginRight: it.marginRight ? ce(it.marginRight) : void 0
            });
        it.show_at_end && ot > 0 && Le.push({
          gridColumn: `1 / span ${u}`,
          gridRow: `${Ve} / span 1`,
          background: it.color,
          height: ce(it.thickness),
          marginTop: it.marginTop ? ce(it.marginTop) : void 0,
          marginBottom: it.marginBottom ? ce(it.marginBottom) : void 0,
          marginLeft: it.marginLeft ? ce(it.marginLeft) : void 0,
          marginRight: it.marginRight ? ce(it.marginRight) : void 0
        });
      }
      if (me && u > 0) {
        if (me.show_at_start && Le.push({
          gridColumn: "1 / span 1",
          gridRow: `1 / span ${Ve}`,
          background: me.color,
          width: ce(me.thickness),
          marginTop: me.marginTop ? ce(me.marginTop) : void 0,
          marginBottom: me.marginBottom ? ce(me.marginBottom) : void 0,
          marginLeft: me.marginLeft ? ce(me.marginLeft) : void 0,
          marginRight: me.marginRight ? ce(me.marginRight) : void 0
        }), me.show_between)
          for (let D = 0; D < u - 1; D++)
            Le.push({
              gridColumn: `${D + 1} / span 1`,
              gridRow: `1 / span ${Ve}`,
              background: me.color,
              width: ce(me.thickness),
              marginTop: me.marginTop ? ce(me.marginTop) : void 0,
              marginBottom: me.marginBottom ? ce(me.marginBottom) : void 0,
              marginLeft: me.marginLeft ? ce(me.marginLeft) : void 0,
              marginRight: me.marginRight ? ce(me.marginRight) : void 0
            });
        me.show_at_end && Le.push({
          gridColumn: `${u} / span 1`,
          gridRow: `1 / span ${Ve}`,
          background: me.color,
          width: ce(me.thickness),
          marginTop: me.marginTop ? ce(me.marginTop) : void 0,
          marginBottom: me.marginBottom ? ce(me.marginBottom) : void 0,
          marginLeft: me.marginLeft ? ce(me.marginLeft) : void 0,
          marginRight: me.marginRight ? ce(me.marginRight) : void 0
        });
      }
      for (const D of xe)
        D.destroy();
      e(2, Ee = te), e(4, ze = Xe), e(5, be = Le), e(15, pe = j);
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    8396800 && e(13, de = ol(w, de)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    6307840 && e(14, je = nl(m, h, je)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    24576 && e(7, f = {
      valign: de,
      halign: je
    }), t.$$.dirty[0] & /*gridTemplateColumns*/
    65536 && e(6, _ = {
      "grid-template-columns": Fe
    });
  }, [
    j,
    z,
    Ee,
    ie,
    ze,
    be,
    _,
    f,
    l,
    a,
    s,
    i,
    W,
    de,
    je,
    pe,
    Fe,
    u,
    c,
    o,
    n,
    h,
    m,
    w,
    L,
    P
  ];
}
class kv extends Lr {
  constructor(r) {
    super(), Or(this, r, wv, yv, Ar, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const vv = "appkit-counter", jv = "appkit-counter__container", Cv = "appkit-counter__button", Ev = "appkit-counter__value", Av = "appkit-counter_disabled", wi = {
  counter: vv,
  counter__container: jv,
  counter__button: Cv,
  counter__value: Ev,
  counter_disabled: Av
};
function Sv(t) {
  let r, e;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Vv(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: ht(
        "counter",
        wi,
        /*mods*/
        t[15]
      ),
      style: (
        /*stl*/
        t[14]
      ),
      customDescription: !0,
      customActions: "counter",
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: { default: [Fv] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = ht(
        "counter",
        wi,
        /*mods*/
        n[15]
      )), o[0] & /*stl*/
      16384 && (i.style = /*stl*/
      n[14]), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*isEnabled, value, maxValue, disabledButtonColor, buttonColor, buttonSize, iconColor, valueWidth, textColor, fontSize, fontWeight, minValue*/
      147448 | o[2] & /*$$scope*/
      64 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Fv(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h, m, p, k;
  return {
    c() {
      r = Se("div"), e = Se("button"), n = $r("svg"), o = $r("line"), s = lr(), a = Se("div"), l = Pn(
        /*value*/
        t[17]
      ), u = lr(), c = Se("button"), f = $r("svg"), _ = $r("line"), h = $r("line"), g(o, "x1", "6"), g(o, "y1", "12"), g(o, "x2", "18"), g(o, "y2", "12"), g(
        o,
        "stroke",
        /*iconColor*/
        t[6]
      ), g(o, "stroke-width", "2.5"), g(o, "stroke-linecap", "round"), g(n, "viewBox", "0 0 24 24"), g(n, "fill", "none"), g(n, "xmlns", "http://www.w3.org/2000/svg"), g(e, "class", wi.counter__button), e.disabled = i = !/*isEnabled*/
      t[3] || /*value*/
      t[17] <= /*minValue*/
      t[11], g(e, "aria-label", "Decrease value"), M(
        e,
        "background",
        /*value*/
        t[17] <= /*minValue*/
        t[11] ? (
          /*disabledButtonColor*/
          t[7]
        ) : (
          /*buttonColor*/
          t[4]
        )
      ), M(e, "width", ce(
        /*buttonSize*/
        t[5]
      )), M(e, "height", ce(
        /*buttonSize*/
        t[5]
      )), g(a, "class", wi.counter__value), M(a, "width", ce(
        /*valueWidth*/
        t[10]
      )), M(
        a,
        "color",
        /*textColor*/
        t[8]
      ), M(a, "font-size", ce(
        /*fontSize*/
        t[9]
      )), M(
        a,
        "font-weight",
        /*fontWeight*/
        t[13]
      ), g(_, "x1", "12"), g(_, "y1", "6"), g(_, "x2", "12"), g(_, "y2", "18"), g(
        _,
        "stroke",
        /*iconColor*/
        t[6]
      ), g(_, "stroke-width", "2.5"), g(_, "stroke-linecap", "round"), g(h, "x1", "6"), g(h, "y1", "12"), g(h, "x2", "18"), g(h, "y2", "12"), g(
        h,
        "stroke",
        /*iconColor*/
        t[6]
      ), g(h, "stroke-width", "2.5"), g(h, "stroke-linecap", "round"), g(f, "viewBox", "0 0 24 24"), g(f, "fill", "none"), g(f, "xmlns", "http://www.w3.org/2000/svg"), g(c, "class", wi.counter__button), c.disabled = m = !/*isEnabled*/
      t[3] || /*value*/
      t[17] >= /*maxValue*/
      t[12], g(c, "aria-label", "Increase value"), M(
        c,
        "background",
        /*value*/
        t[17] >= /*maxValue*/
        t[12] ? (
          /*disabledButtonColor*/
          t[7]
        ) : (
          /*buttonColor*/
          t[4]
        )
      ), M(c, "width", ce(
        /*buttonSize*/
        t[5]
      )), M(c, "height", ce(
        /*buttonSize*/
        t[5]
      )), g(r, "class", wi.counter__container);
    },
    m(w, O) {
      q(w, r, O), pt(r, e), pt(e, n), pt(n, o), pt(r, s), pt(r, a), pt(a, l), pt(r, u), pt(r, c), pt(c, f), pt(f, _), pt(f, h), p || (k = [
        He(
          e,
          "click",
          /*decrement*/
          t[36]
        ),
        He(
          c,
          "click",
          /*increment*/
          t[35]
        )
      ], p = !0);
    },
    p(w, O) {
      O[0] & /*iconColor*/
      64 && g(
        o,
        "stroke",
        /*iconColor*/
        w[6]
      ), O[0] & /*isEnabled, value, minValue*/
      133128 && i !== (i = !/*isEnabled*/
      w[3] || /*value*/
      w[17] <= /*minValue*/
      w[11]) && (e.disabled = i), O[0] & /*value, minValue, disabledButtonColor, buttonColor*/
      133264 && M(
        e,
        "background",
        /*value*/
        w[17] <= /*minValue*/
        w[11] ? (
          /*disabledButtonColor*/
          w[7]
        ) : (
          /*buttonColor*/
          w[4]
        )
      ), O[0] & /*buttonSize*/
      32 && M(e, "width", ce(
        /*buttonSize*/
        w[5]
      )), O[0] & /*buttonSize*/
      32 && M(e, "height", ce(
        /*buttonSize*/
        w[5]
      )), O[0] & /*value*/
      131072 && Qn(
        l,
        /*value*/
        w[17]
      ), O[0] & /*valueWidth*/
      1024 && M(a, "width", ce(
        /*valueWidth*/
        w[10]
      )), O[0] & /*textColor*/
      256 && M(
        a,
        "color",
        /*textColor*/
        w[8]
      ), O[0] & /*fontSize*/
      512 && M(a, "font-size", ce(
        /*fontSize*/
        w[9]
      )), O[0] & /*fontWeight*/
      8192 && M(
        a,
        "font-weight",
        /*fontWeight*/
        w[13]
      ), O[0] & /*iconColor*/
      64 && g(
        _,
        "stroke",
        /*iconColor*/
        w[6]
      ), O[0] & /*iconColor*/
      64 && g(
        h,
        "stroke",
        /*iconColor*/
        w[6]
      ), O[0] & /*isEnabled, value, maxValue*/
      135176 && m !== (m = !/*isEnabled*/
      w[3] || /*value*/
      w[17] >= /*maxValue*/
      w[12]) && (c.disabled = m), O[0] & /*value, maxValue, disabledButtonColor, buttonColor*/
      135312 && M(
        c,
        "background",
        /*value*/
        w[17] >= /*maxValue*/
        w[12] ? (
          /*disabledButtonColor*/
          w[7]
        ) : (
          /*buttonColor*/
          w[4]
        )
      ), O[0] & /*buttonSize*/
      32 && M(c, "width", ce(
        /*buttonSize*/
        w[5]
      )), O[0] & /*buttonSize*/
      32 && M(c, "height", ce(
        /*buttonSize*/
        w[5]
      ));
    },
    d(w) {
      w && J(r), p = !1, Hr(k);
    }
  };
}
function Iv(t) {
  let r, e, n, o;
  const i = [Vv, Sv], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (or(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ir()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (B(e), o = !0);
    },
    o(l) {
      Q(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Dv(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, G, L, ee, fe, P, Z, se, j, z = A, N = () => (z(), z = F(i, ($e) => e(46, j = $e)), i), W, ie = A, de = () => (ie(), ie = F(fe, ($e) => e(47, W = $e)), fe), je, Ee = A, pe = () => (Ee(), Ee = F(ee, ($e) => e(48, je = $e)), ee), ze, be = A, Fe = () => (be(), be = F(L, ($e) => e(49, ze = $e)), L), Ge, Ze = A, ke = () => (Ze(), Ze = F(G, ($e) => e(50, Ge = $e)), G), et, _e = A, Ie = () => (_e(), _e = F(O, ($e) => e(51, et = $e)), O), ue, oe = A, ye = () => (oe(), oe = F(w, ($e) => e(52, ue = $e)), w), $, Ae = A, xe = () => (Ae(), Ae = F(k, ($e) => e(53, $ = $e)), k), qe, te = A, Xe = () => (te(), te = F(p, ($e) => e(54, qe = $e)), p), Le, tt = A, dt = () => (tt(), tt = F(m, ($e) => e(55, Le = $e)), m), lt, wt = A, ot = () => (wt(), wt = F(h, ($e) => e(56, lt = $e)), h), At, it = A, me = () => (it(), it = F(_, ($e) => e(57, At = $e)), _), ne, at = A, Ve = () => (at(), at = F(f, ($e) => e(58, ne = $e)), f), D, jt = A, gt = () => (jt(), jt = F(c, ($e) => e(59, D = $e)), c), kt, St = A, rt = () => (St(), St = F(u, ($e) => e(60, kt = $e)), u), Y, Vt = A, Dt = () => (Vt(), Vt = F(l, ($e) => e(61, Y = $e)), l), Gt, Jt = A, ve = () => (Jt(), Jt = F(a, ($e) => e(62, Gt = $e)), a), We, ft = A, Me = () => (ft(), ft = F(s, ($e) => e(63, We = $e)), s);
  t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => ie()), t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => Ze()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => te()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => wt()), t.$$.on_destroy.push(() => it()), t.$$.on_destroy.push(() => at()), t.$$.on_destroy.push(() => jt()), t.$$.on_destroy.push(() => St()), t.$$.on_destroy.push(() => Vt()), t.$$.on_destroy.push(() => Jt()), t.$$.on_destroy.push(() => ft());
  let { componentContext: T } = r, { layoutParams: Oe = void 0 } = r;
  const xt = Dr(Yr), ae = Dr(So);
  let mt = !1, Wt = !0, Ft = "#4CAF50", ar = 36, Te = "#ffffff", bt = "#cccccc", er = "#1B2630", Qt = 16, Xt = 700, ur = 40, jr = "#F5F5F5", Yt = "#E0E0E0", It = 1, Tt = 999, ut = 6, qt = 0, sr = 99, dr = 1;
  const mr = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  };
  function pr() {
    e(3, Wt = !0), e(4, Ft = "#4CAF50"), e(5, ar = 36), e(6, Te = "#ffffff"), e(7, bt = "#cccccc"), e(8, er = "#1B2630"), e(9, Qt = 16), e(13, Xt = 700), e(10, ur = 40), e(37, jr = "#F5F5F5"), e(38, Yt = "#E0E0E0"), e(39, It = 1), e(40, Tt = 999), e(41, ut = 6), e(11, qt = 0), e(12, sr = 99), e(42, dr = 1);
  }
  function Fr() {
    if (!Wt) return;
    const $e = Math.min(P + dr, sr);
    $e !== P && (i.setValue($e), T.json.on_increment_actions && T.execAnyActions(T.json.on_increment_actions), T.json.on_value_change_actions && T.execAnyActions(T.json.on_value_change_actions));
  }
  function zr() {
    if (!Wt) return;
    const $e = Math.max(P - dr, qt);
    $e !== P && (i.setValue($e), T.json.on_decrement_actions && T.execAnyActions(T.json.on_decrement_actions), T.json.on_value_change_actions && T.execAnyActions(T.json.on_value_change_actions));
  }
  let gr;
  return an(() => {
    gr && (xt.unregisterFocusable(gr), e(43, gr = void 0));
  }), t.$$set = ($e) => {
    "componentContext" in $e && e(0, T = $e.componentContext), "layoutParams" in $e && e(1, Oe = $e.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(45, n = T.origJson), t.$$.dirty[1] & /*origJson*/
    16384 && n && pr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(44, o = T.json.counter_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8192 && N(e(16, i = o && (T.getVariable(o, "integer") || xt.awaitGlobalVariable(o, "integer", 0)) || io("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && Me(e(34, s = T.getDerivedFromVars(T.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && ve(e(33, a = T.getDerivedFromVars(T.json.button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(32, l = T.getDerivedFromVars(T.json.button_size))), t.$$.dirty[0] & /*componentContext*/
    1 && rt(e(31, u = T.getDerivedFromVars(T.json.icon_color))), t.$$.dirty[0] & /*componentContext*/
    1 && gt(e(30, c = T.getDerivedFromVars(T.json.disabled_button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ve(e(29, f = T.getDerivedFromVars(T.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(28, _ = T.getDerivedFromVars(T.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && ot(e(27, h = T.getDerivedFromVars(T.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && dt(e(26, m = T.getDerivedFromVars(T.json.value_width))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(25, p = T.getDerivedFromVars(T.json.background_color))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(24, k = T.getDerivedFromVars(T.json.border_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ye(e(23, w = T.getDerivedFromVars(T.json.border_width))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(22, O = T.getDerivedFromVars(T.json.corner_radius))), t.$$.dirty[0] & /*componentContext*/
    1 && ke(e(21, G = T.getDerivedFromVars(T.json.padding))), t.$$.dirty[0] & /*componentContext*/
    1 && Fe(e(20, L = T.getDerivedFromVars(T.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(19, ee = T.getDerivedFromVars(T.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(18, fe = T.getDerivedFromVars(T.json.step))), t.$$.dirty[0] & /*isEnabled*/
    8 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    2 && e(3, Wt = _n(We, Wt)), t.$$.dirty[0] & /*buttonColor*/
    16 | t.$$.dirty[2] & /*$jsonButtonColor*/
    1 && e(4, Ft = _r(Gt, 1, Ft)), t.$$.dirty[0] & /*buttonSize*/
    32 | t.$$.dirty[1] & /*$jsonButtonSize*/
    1073741824 && e(5, ar = oo(Y, ar)), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*$jsonIconColor*/
    536870912 && e(6, Te = _r(kt, 1, Te)), t.$$.dirty[0] & /*disabledButtonColor*/
    128 | t.$$.dirty[1] & /*$jsonDisabledButtonColor*/
    268435456 && e(7, bt = _r(D, 1, bt)), t.$$.dirty[0] & /*textColor*/
    256 | t.$$.dirty[1] & /*$jsonTextColor*/
    134217728 && e(8, er = _r(ne, 1, er)), t.$$.dirty[0] & /*fontSize*/
    512 | t.$$.dirty[1] & /*$jsonFontSize*/
    67108864 && e(9, Qt = oo(At, Qt)), t.$$.dirty[1] & /*$jsonFontWeight*/
    33554432) {
      const $e = lt;
      if (typeof $e == "string")
        if ($e in mr)
          e(13, Xt = mr[$e]);
        else {
          const ct = parseInt($e, 10);
          !Number.isNaN(ct) && ct > 0 && e(13, Xt = ct);
        }
      else typeof $e == "number" && $e > 0 && e(13, Xt = $e);
    }
    if (t.$$.dirty[0] & /*valueWidth*/
    1024 | t.$$.dirty[1] & /*$jsonValueWidth*/
    16777216 && e(10, ur = oo(Le, ur)), t.$$.dirty[1] & /*$jsonBackgroundColor, backgroundColor*/
    8388672 && e(37, jr = _r(qe, 1, jr)), t.$$.dirty[1] & /*$jsonBorderColor, borderColor*/
    4194432 && e(38, Yt = _r($, 1, Yt)), t.$$.dirty[1] & /*$jsonBorderWidth, borderWidth*/
    2097408 && e(39, It = oo(ue, It)), t.$$.dirty[1] & /*$jsonCornerRadius, cornerRadius*/
    1049088 && e(40, Tt = oo(et, Tt)), t.$$.dirty[1] & /*$jsonPadding, padding*/
    525312 && e(41, ut = oo(Ge, ut)), t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$jsonMinValue, $jsonMaxValue*/
    393216 && (e(11, qt = oo(ze, qt)), e(12, sr = oo(je, sr))), t.$$.dirty[1] & /*$jsonStep, step*/
    67584) {
      const $e = oo(W, dr);
      $e > 0 && e(42, dr = $e);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$valueVariable*/
    32768 && e(17, P = Co(j || 0, qt, sr)), t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*variable*/
    8192) {
      let $e = !1;
      o ? ae.hasAction() && ($e = !0, T.logError(K(new Error('Cannot show "counter" inside component with an action')))) : ($e = !0, T.logError(K(new Error('Missing "counter_value_variable" in "counter"')))), mt !== $e && e(2, mt = $e);
    }
    t.$$.dirty[0] & /*isEnabled*/
    8 && e(15, Z = { disabled: !Wt }), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*backgroundColor, borderColor, borderWidth, cornerRadius, padding*/
    1984 && e(14, se = {
      "--divkit-counter-bg": jr,
      "--divkit-counter-border-color": Yt,
      "--divkit-counter-border-width": ce(It),
      "--divkit-counter-radius": ce(Tt),
      "--divkit-counter-padding": ce(ut),
      "--divkit-counter-icon-color": Te
    }), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*prevId*/
    4096 && T.json && (gr && (xt.unregisterFocusable(gr), e(43, gr = void 0)), T.id && !T.fakeElement && (e(43, gr = T.id), xt.registerFocusable(gr, {
      focus() {
      }
    })));
  }, [
    T,
    Oe,
    mt,
    Wt,
    Ft,
    ar,
    Te,
    bt,
    er,
    Qt,
    ur,
    qt,
    sr,
    Xt,
    se,
    Z,
    i,
    P,
    fe,
    ee,
    L,
    G,
    O,
    w,
    k,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    Fr,
    zr,
    jr,
    Yt,
    It,
    Tt,
    ut,
    dr,
    gr,
    o,
    n,
    j,
    W,
    je,
    ze,
    Ge,
    et,
    ue,
    $,
    qe,
    Le,
    lt,
    At,
    ne,
    D,
    kt,
    Y,
    Gt,
    We
  ];
}
class Tv extends Lr {
  constructor(r) {
    super(), Or(this, r, Dv, Iv, Ar, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Mv = "appkit-webview__frame", zs = {
  webview__frame: Mv,
  "webview__aspect-wrapper": "appkit-webview__aspect-wrapper"
};
function Pv(t) {
  let r, e;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Nv(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: ht("webview", zs, {}),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      heightByAspect: (
        /*aspectPaddingBottom*/
        t[6] !== "0"
      ),
      $$slots: { default: [Ov] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o & /*aspectPaddingBottom*/
      64 && (i.heightByAspect = /*aspectPaddingBottom*/
      n[6] !== "0"), o & /*$$scope, aspectPaddingBottom, url, html, sandbox, allowScrolling*/
      268435676 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function zv(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Se("iframe"), g(r, "class", zs.webview__frame), Zn(r.src, e = /*url*/
      t[2] || void 0) || g(r, "src", e), g(r, "srcdoc", n = /*url*/
      t[2] ? void 0 : (
        /*html*/
        t[3]
      )), g(
        r,
        "sandbox",
        /*sandbox*/
        t[7]
      ), g(r, "scrolling", o = /*allowScrolling*/
      t[4] ? "auto" : "no"), g(r, "title", "webview");
    },
    m(a, l) {
      q(a, r, l), i || (s = [
        He(
          r,
          "load",
          /*onLoad*/
          t[15]
        ),
        He(
          r,
          "error",
          /*onError*/
          t[16]
        )
      ], i = !0);
    },
    p(a, l) {
      l & /*url*/
      4 && !Zn(r.src, e = /*url*/
      a[2] || void 0) && g(r, "src", e), l & /*url, html*/
      12 && n !== (n = /*url*/
      a[2] ? void 0 : (
        /*html*/
        a[3]
      )) && g(r, "srcdoc", n), l & /*sandbox*/
      128 && g(
        r,
        "sandbox",
        /*sandbox*/
        a[7]
      ), l & /*allowScrolling*/
      16 && o !== (o = /*allowScrolling*/
      a[4] ? "auto" : "no") && g(r, "scrolling", o);
    },
    d(a) {
      a && J(r), i = !1, Hr(s);
    }
  };
}
function Rv(t) {
  let r, e, n, o, i, s = `${/*aspectPaddingBottom*/
  t[6]}%`, a, l;
  return {
    c() {
      r = Se("div"), e = Se("iframe"), g(e, "class", zs.webview__frame), Zn(e.src, n = /*url*/
      t[2] || void 0) || g(e, "src", n), g(e, "srcdoc", o = /*url*/
      t[2] ? void 0 : (
        /*html*/
        t[3]
      )), g(
        e,
        "sandbox",
        /*sandbox*/
        t[7]
      ), g(e, "scrolling", i = /*allowScrolling*/
      t[4] ? "auto" : "no"), g(e, "title", "webview"), g(r, "class", zs["webview__aspect-wrapper"]), M(r, "padding-bottom", s);
    },
    m(u, c) {
      q(u, r, c), pt(r, e), a || (l = [
        He(
          e,
          "load",
          /*onLoad*/
          t[15]
        ),
        He(
          e,
          "error",
          /*onError*/
          t[16]
        )
      ], a = !0);
    },
    p(u, c) {
      c & /*url*/
      4 && !Zn(e.src, n = /*url*/
      u[2] || void 0) && g(e, "src", n), c & /*url, html*/
      12 && o !== (o = /*url*/
      u[2] ? void 0 : (
        /*html*/
        u[3]
      )) && g(e, "srcdoc", o), c & /*sandbox*/
      128 && g(
        e,
        "sandbox",
        /*sandbox*/
        u[7]
      ), c & /*allowScrolling*/
      16 && i !== (i = /*allowScrolling*/
      u[4] ? "auto" : "no") && g(e, "scrolling", i), c & /*aspectPaddingBottom*/
      64 && s !== (s = `${/*aspectPaddingBottom*/
      u[6]}%`) && M(r, "padding-bottom", s);
    },
    d(u) {
      u && J(r), a = !1, Hr(l);
    }
  };
}
function Ov(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[6] !== "0" ? Rv : zv
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Kt();
    },
    m(i, s) {
      o.m(i, s), q(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && J(r), o.d(i);
    }
  };
}
function Lv(t) {
  let r, e, n, o;
  const i = [Nv, Pv], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[5] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, [u]) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (or(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ir()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (B(e), o = !0);
    },
    o(l) {
      Q(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Bv(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _ = A, h = () => (_(), _ = F(u, (ue) => e(20, f = ue)), u), m, p = A, k = () => (p(), p = F(l, (ue) => e(21, m = ue)), l), w, O = A, G = () => (O(), O = F(a, (ue) => e(22, w = ue)), a), L, ee = A, fe = () => (ee(), ee = F(s, (ue) => e(23, L = ue)), s), P, Z = A, se = () => (Z(), Z = F(i, (ue) => e(24, P = ue)), i), j, z = A, N = () => (z(), z = F(o, (ue) => e(25, j = ue)), o), W, ie = A, de = () => (ie(), ie = F(n, (ue) => e(26, W = ue)), n);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => ie());
  let { componentContext: je } = r, { layoutParams: Ee = void 0 } = r;
  Dr(Yr);
  let pe = !1, ze, be, Fe = !1, Ge = !0, Ze = !1, ke = !1, et = "0";
  function _e() {
    je.execAnyActions(je.json.on_load_actions);
  }
  function Ie() {
    je.execAnyActions(je.json.on_error_actions);
  }
  return t.$$set = (ue) => {
    "componentContext" in ue && e(0, je = ue.componentContext), "layoutParams" in ue && e(1, Ee = ue.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext*/
    1 && de(e(14, n = je.getDerivedFromVars(je.json.url))), t.$$.dirty & /*componentContext*/
    1 && N(e(13, o = je.getDerivedFromVars(je.json.html))), t.$$.dirty & /*componentContext*/
    1 && se(e(12, i = je.getDerivedFromVars(je.json.javascript_enabled))), t.$$.dirty & /*componentContext*/
    1 && fe(e(11, s = je.getDerivedFromVars(je.json.allow_scrolling))), t.$$.dirty & /*componentContext*/
    1 && G(e(10, a = je.getDerivedFromVars(je.json.allow_navigation))), t.$$.dirty & /*componentContext*/
    1 && k(e(9, l = je.getDerivedFromVars(je.json.scale_to_fit))), t.$$.dirty & /*componentContext*/
    1 && h(e(8, u = je.getDerivedFromVars(je.json.aspect))), t.$$.dirty & /*$jsonUrl, $jsonHtml, url, html, componentContext*/
    100663309 && (e(2, ze = typeof W == "string" ? W : void 0), e(3, be = typeof j == "string" ? j : void 0), !ze && !be ? (e(5, pe = !0), je.logError(K(new Error('Missing "url" or "html" in "webview"')))) : e(5, pe = !1)), t.$$.dirty & /*$jsonJsEnabled, javascriptEnabled*/
    16908288 && e(17, Fe = _n(P, Fe)), t.$$.dirty & /*$jsonAllowScrolling, allowScrolling*/
    8388624 && e(4, Ge = _n(L, Ge)), t.$$.dirty & /*$jsonAllowNavigation, allowNavigation*/
    4456448 && e(18, Ze = _n(w, Ze)), t.$$.dirty & /*$jsonScaleToFit, scaleToFit*/
    2621440 && e(19, ke = _n(m, ke)), t.$$.dirty & /*$jsonAspect*/
    1048576) {
      const ue = f == null ? void 0 : f.ratio;
      ue && Jn(ue) ? e(6, et = (100 / Number(ue)).toFixed(2)) : e(6, et = "0");
    }
    t.$$.dirty & /*javascriptEnabled, allowNavigation*/
    393216 && e(7, c = [
      "allow-same-origin",
      ...Fe ? ["allow-scripts"] : [],
      ...Ze ? ["allow-popups"] : []
    ].join(" "));
  }, [
    je,
    Ee,
    ze,
    be,
    Ge,
    pe,
    et,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    n,
    _e,
    Ie,
    Fe,
    Ze,
    ke,
    f,
    m,
    w,
    L,
    P,
    j,
    W
  ];
}
class Hv extends Lr {
  constructor(r) {
    super(), Or(this, r, Bv, Lv, Ar, { componentContext: 0, layoutParams: 1 });
  }
}
function hf(t, r, e) {
  const n = t.slice();
  return n[11] = r[e], n;
}
function Wv(t) {
  let r, e;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Uv(t) {
  let r, e;
  return r = new yn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: { default: [Gv] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o & /*$$scope, componentContext, customElem, desc, jsonItems, items, hasItemsError, templateAttrs, templateContent*/
      16893 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function mf(t) {
  let r, e = [
    /*templateAttrs*/
    t[8]
  ], n = {};
  for (let o = 0; o < e.length; o += 1)
    n = bo(n, e[o]);
  return {
    c() {
      r = Se("template"), Oo(r, n);
    },
    m(o, i) {
      q(o, r, i), r.content.innerHTML = /*templateContent*/
      t[7];
    },
    p(o, i) {
      i & /*templateContent*/
      128 && (r.content.innerHTML = /*templateContent*/
      o[7]), Oo(r, n = Do(e, [i & /*templateAttrs*/
      256 && /*templateAttrs*/
      o[8]]));
    },
    d(o) {
      o && J(r);
    }
  };
}
function bf(t) {
  let r = (
    /*jsonItems*/
    t[5]
  ), e, n, o = wf(t);
  return {
    c() {
      o.c(), e = Kt();
    },
    m(i, s) {
      o.m(i, s), q(i, e, s), n = !0;
    },
    p(i, s) {
      s & /*jsonItems*/
      32 && Ar(r, r = /*jsonItems*/
      i[5]) ? (or(), Q(o, 1, 1, A), ir(), o = wf(i), o.c(), B(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
    },
    i(i) {
      n || (B(o), n = !0);
    },
    o(i) {
      Q(o), n = !1;
    },
    d(i) {
      i && J(e), o.d(i);
    }
  };
}
function yf(t) {
  let r, e;
  return r = new qn({
    props: { componentContext: (
      /*item*/
      t[11]
    ) }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*items*/
      8 && (i.componentContext = /*item*/
      n[11]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function wf(t) {
  let r, e, n = nr(
    /*items*/
    t[3]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = yf(hf(t, n, s));
  const i = (s) => Q(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = Kt();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      q(s, r, a), e = !0;
    },
    p(s, a) {
      if (a & /*items*/
      8) {
        n = nr(
          /*items*/
          s[3]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = hf(s, n, l);
          o[l] ? (o[l].p(u, a), B(o[l], 1)) : (o[l] = yf(u), o[l].c(), B(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (or(), l = n.length; l < o.length; l += 1)
          i(l);
        ir();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          B(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        Q(o[a]);
      e = !1;
    },
    d(s) {
      s && J(r), nn(o, s);
    }
  };
}
function vl(t) {
  let r, e, n, o = (
    /*templateContent*/
    t[7] && mf(t)
  ), i = !/*hasItemsError*/
  t[4] && /*jsonItems*/
  t[5] && bf(t), s = [
    /*componentContext*/
    t[0].json.custom_props || {}
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = bo(a, s[l]);
  return {
    c() {
      r = Se(
        /*desc*/
        t[2].element
      ), o && o.c(), e = lr(), i && i.c(), qo(
        /*desc*/
        t[2].element
      )(r, a);
    },
    m(l, u) {
      q(l, r, u), o && o.m(r, null), pt(r, e), i && i.m(r, null), t[9](r), n = !0;
    },
    p(l, u) {
      /*templateContent*/
      l[7] ? o ? o.p(l, u) : (o = mf(l), o.c(), o.m(r, e)) : o && (o.d(1), o = null), !/*hasItemsError*/
      l[4] && /*jsonItems*/
      l[5] ? i ? (i.p(l, u), u & /*hasItemsError, jsonItems*/
      48 && B(i, 1)) : (i = bf(l), i.c(), B(i, 1), i.m(r, null)) : i && (or(), Q(i, 1, 1, () => {
        i = null;
      }), ir()), qo(
        /*desc*/
        l[2].element
      )(r, a = Do(s, [
        u & /*componentContext*/
        1 && /*componentContext*/
        (l[0].json.custom_props || {})
      ]));
    },
    i(l) {
      n || (B(i), n = !0);
    },
    o(l) {
      Q(i), n = !1;
    },
    d(l) {
      l && J(r), o && o.d(), i && i.d(), t[9](null);
    }
  };
}
function Gv(t) {
  let r = (
    /*desc*/
    t[2].element
  ), e, n = (
    /*desc*/
    t[2].element && vl(t)
  );
  return {
    c() {
      n && n.c(), e = Kt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      /*desc*/
      o[2].element ? r ? Ar(
        r,
        /*desc*/
        o[2].element
      ) ? (n.d(1), n = vl(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = vl(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : r && (n.d(1), n = null, r = /*desc*/
      o[2].element);
    },
    i: A,
    o(o) {
      Q(n, o);
    },
    d(o) {
      o && J(e), n && n.d(o);
    }
  };
}
function Jv(t) {
  let r, e, n, o;
  const i = [Uv, Wv], s = [];
  function a(l, u) {
    return (
      /*desc*/
      l[2] ? 0 : 1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, [u]) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (or(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ir()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (B(e), o = !0);
    },
    o(l) {
      Q(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function qv(t, r, e) {
  let n, { componentContext: o } = r, { layoutParams: i = void 0 } = r;
  const s = Dr(Yr);
  let a, l = null, u = "", c = {}, f = [], _ = !1;
  to(() => {
    if (a && "divKitApiCallback" in a && typeof a.divKitApiCallback == "function") {
      const m = s.getExtensionContext(o);
      a.divKitApiCallback(m);
    }
  }), an(() => {
    f.forEach((m) => {
      m.destroy();
    });
  });
  function h(m) {
    Ir[m ? "unshift" : "push"](() => {
      a = m, e(6, a);
    });
  }
  return t.$$set = (m) => {
    "componentContext" in m && e(0, o = m.componentContext), "layoutParams" in m && e(1, i = m.layoutParams);
  }, t.$$.update = () => {
    var m;
    if (t.$$.dirty & /*componentContext, desc*/
    5)
      if (typeof o.json.custom_type == "string" && o.json.custom_type && ((m = s.customComponents) != null && m.has(o.json.custom_type))) {
        if (e(2, l = s.customComponents.get(o.json.custom_type)), typeof l.template == "function") {
          const p = s.getExtensionContext(o), k = /* @__PURE__ */ new Map();
          for (const [w, O] of p.variables)
            k.set(w, O.getValue());
          e(7, u = l.template({
            props: o.json.custom_props,
            variables: k
          }));
        } else l.template && typeof l.template == "string" ? e(7, u = l.template) : e(7, u = "");
        e(8, c = {
          shadowrootmode: l.shadowRootMode || "open"
        });
      } else
        e(2, l = null), e(7, u = ";"), o.logError(K(new Error('Unknown or incorrect "custom_type" prop for div "custom"')));
    t.$$.dirty & /*componentContext*/
    1 && e(5, n = o.json.items), t.$$.dirty & /*jsonItems, componentContext*/
    33 && (n !== void 0 && !Array.isArray(n) ? (e(4, _ = !0), o.logError(K(new Error('Incorrect "items" prop for div "custom"')))) : e(4, _ = !1)), t.$$.dirty & /*items, hasItemsError, jsonItems, componentContext*/
    57 && (f.forEach((p) => {
      p.destroy();
    }), e(3, f = (!_ && n || []).map((p, k) => o.produceChildContext(p, { path: k }))));
  }, [
    o,
    i,
    l,
    f,
    _,
    n,
    a,
    u,
    c,
    h
  ];
}
class Yv extends Lr {
  constructor(r) {
    super(), Or(this, r, qv, Jv, Ar, { componentContext: 0, layoutParams: 1 });
  }
}
const Kv = "appkit-breadcrumb", Xv = "appkit-breadcrumb__list", Zv = "appkit-breadcrumb__item", Qv = "appkit-breadcrumb__label", xv = "appkit-breadcrumb__label_link", $v = "appkit-breadcrumb__separator", si = {
  breadcrumb: Kv,
  breadcrumb__list: Xv,
  breadcrumb__item: Zv,
  breadcrumb__label: Qv,
  breadcrumb__label_link: xv,
  breadcrumb__separator: $v
};
function kf(t, r, e) {
  const n = t.slice();
  return n[25] = r[e], n[27] = e, n;
}
function e2(t) {
  let r, e;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function t2(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: ht("breadcrumb", si, {}),
      style: (
        /*stl*/
        t[3]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: { default: [o2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*stl*/
      8 && (i.style = /*stl*/
      n[3]), o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o & /*$$scope, crumbs, separator*/
      268435476 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function r2(t) {
  let r, e = (
    /*crumb*/
    t[25].title + ""
  ), n, o, i, s, a, l;
  function u() {
    return (
      /*click_handler*/
      t[21](
        /*crumb*/
        t[25]
      )
    );
  }
  function c(...f) {
    return (
      /*keydown_handler*/
      t[22](
        /*crumb*/
        t[25],
        ...f
      )
    );
  }
  return {
    c() {
      r = Se("span"), n = Pn(e), o = lr(), i = Se("span"), s = Pn(
        /*separator*/
        t[2]
      ), g(r, "class", si.breadcrumb__label + " " + si.breadcrumb__label_link), g(r, "role", "link"), g(r, "tabindex", "0"), g(i, "class", si.breadcrumb__separator), g(i, "aria-hidden", "true");
    },
    m(f, _) {
      q(f, r, _), pt(r, n), q(f, o, _), q(f, i, _), pt(i, s), a || (l = [
        He(r, "click", u),
        He(r, "keydown", c)
      ], a = !0);
    },
    p(f, _) {
      t = f, _ & /*crumbs*/
      16 && e !== (e = /*crumb*/
      t[25].title + "") && Qn(n, e), _ & /*separator*/
      4 && Qn(
        s,
        /*separator*/
        t[2]
      );
    },
    d(f) {
      f && (J(r), J(o), J(i)), a = !1, Hr(l);
    }
  };
}
function n2(t) {
  let r, e = (
    /*crumb*/
    t[25].title + ""
  ), n;
  return {
    c() {
      r = Se("span"), n = Pn(e), g(r, "class", si.breadcrumb__label), g(r, "aria-current", "page");
    },
    m(o, i) {
      q(o, r, i), pt(r, n);
    },
    p(o, i) {
      i & /*crumbs*/
      16 && e !== (e = /*crumb*/
      o[25].title + "") && Qn(n, e);
    },
    d(o) {
      o && J(r);
    }
  };
}
function vf(t) {
  let r, e;
  function n(s, a) {
    return (
      /*index*/
      s[27] === /*crumbs*/
      s[4].length - 1 ? n2 : r2
    );
  }
  let o = n(t), i = o(t);
  return {
    c() {
      r = Se("li"), i.c(), e = lr(), g(r, "class", si.breadcrumb__item);
    },
    m(s, a) {
      q(s, r, a), i.m(r, null), pt(r, e);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, e)));
    },
    d(s) {
      s && J(r), i.d();
    }
  };
}
function o2(t) {
  let r, e, n = nr(
    /*crumbs*/
    t[4]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = vf(kf(t, n, i));
  return {
    c() {
      r = Se("nav"), e = Se("ol");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(e, "class", si.breadcrumb__list), g(r, "aria-label", "breadcrumb");
    },
    m(i, s) {
      q(i, r, s), pt(r, e);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(e, null);
    },
    p(i, s) {
      if (s & /*crumbs, separator, handleCrumbClick, handleCrumbKeydown*/
      3092) {
        n = nr(
          /*crumbs*/
          i[4]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = kf(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = vf(l), o[a].c(), o[a].m(e, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && J(r), nn(o, i);
    }
  };
}
function i2(t) {
  let r, e, n, o;
  const i = [t2, e2], s = [];
  function a(l, u) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, [u]) {
      e && e.p(l, u);
    },
    i(l) {
      o || (B(e), o = !0);
    },
    o(l) {
      Q(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function s2(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _ = A, h = () => (_(), _ = F(l, (Fe) => e(16, f = Fe)), l), m, p = A, k = () => (p(), p = F(a, (Fe) => e(17, m = Fe)), a), w, O = A, G = () => (O(), O = F(s, (Fe) => e(18, w = Fe)), s), L, ee = A, fe = () => (ee(), ee = F(i, (Fe) => e(19, L = Fe)), i), P, Z = A, se = () => (Z(), Z = F(o, (Fe) => e(20, P = Fe)), o);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Z());
  let { componentContext: j } = r, { layoutParams: z = void 0 } = r;
  Dr(Yr);
  let N = "/", W = "#0077CC", ie = "#111111", de = 14;
  function je() {
    e(2, N = "/"), e(12, W = "#0077CC"), e(13, ie = "#111111"), e(14, de = 14);
  }
  function Ee(Fe) {
    Fe.action && j.execAnyActions([Fe.action]);
  }
  function pe(Fe, Ge) {
    Ge.action && (Fe.key === "Enter" || Fe.key === " ") && (j.execAnyActions([Ge.action]), Fe.preventDefault());
  }
  const ze = (Fe) => Ee(Fe), be = (Fe, Ge) => pe(Ge, Fe);
  return t.$$set = (Fe) => {
    "componentContext" in Fe && e(0, j = Fe.componentContext), "layoutParams" in Fe && e(1, z = Fe.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(15, n = j.origJson), t.$$.dirty & /*origJson*/
    32768 && n && je(), t.$$.dirty & /*componentContext*/
    1 && se(e(9, o = j.getDerivedFromVars(j.json.separator))), t.$$.dirty & /*componentContext*/
    1 && fe(e(8, i = j.getDerivedFromVars(j.json.item_text_color))), t.$$.dirty & /*componentContext*/
    1 && G(e(7, s = j.getDerivedFromVars(j.json.active_text_color))), t.$$.dirty & /*componentContext*/
    1 && k(e(6, a = j.getDerivedFromVars(j.json.item_font_size))), t.$$.dirty & /*componentContext*/
    1 && h(e(5, l = j.getDerivedFromVars(j.json.crumbs))), t.$$.dirty & /*$jsonSeparator, separator*/
    1048580 && e(2, N = typeof P == "string" && P.length > 0 ? P : N), t.$$.dirty & /*$jsonItemTextColor, itemTextColor*/
    528384 && e(12, W = _r(L, 1, W)), t.$$.dirty & /*$jsonActiveTextColor, activeTextColor*/
    270336 && e(13, ie = _r(w, 1, ie)), t.$$.dirty & /*$jsonItemFontSize, itemFontSize*/
    147456 && e(14, de = Gn(m, de)), t.$$.dirty & /*$jsonCrumbs, componentContext*/
    65537 && e(4, u = Array.isArray(f) ? f : j.json.crumbs || []), t.$$.dirty & /*itemTextColor, activeTextColor, itemFontSize*/
    28672 && e(3, c = {
      "--divkit-breadcrumb-item-color": W,
      "--divkit-breadcrumb-active-color": ie,
      "--divkit-breadcrumb-font-size": ce(de)
    });
  }, [
    j,
    z,
    N,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    Ee,
    pe,
    W,
    ie,
    de,
    n,
    f,
    m,
    w,
    L,
    P,
    ze,
    be
  ];
}
class l2 extends Lr {
  constructor(r) {
    super(), Or(this, r, s2, i2, Ar, { componentContext: 0, layoutParams: 1 });
  }
}
const Yd = {
  text: im,
  container: Wm,
  separator: Zm,
  image: Ju,
  gif: Ju,
  grid: C1,
  gallery: K1,
  tabs: jb,
  state: Yb,
  pager: hy,
  indicator: Iy,
  slider: qy,
  input: jw,
  select: Mw,
  video: Xw,
  switch: lk,
  checkbox: yk,
  radio: Ok,
  progress: Xk,
  table: kv,
  counter: Tv,
  webview: Hv,
  custom: Yv,
  breadcrumb: l2
};
function jf(t) {
  let r, e, n;
  var o = (
    /*component*/
    t[2]
  );
  function i(s, a) {
    return {
      props: {
        componentContext: (
          /*componentContext*/
          s[0]
        ),
        layoutParams: (
          /*layoutParams*/
          s[1]
        )
      }
    };
  }
  return o && (r = $a(o, i(t))), {
    c() {
      r && Bt(r.$$.fragment), e = Kt();
    },
    m(s, a) {
      r && zt(r, s, a), q(s, e, a), n = !0;
    },
    p(s, a) {
      if (a & /*component*/
      4 && o !== (o = /*component*/
      s[2])) {
        if (r) {
          or();
          const l = r;
          Q(l.$$.fragment, 1, 0, () => {
            Rt(l, 1);
          }), ir();
        }
        o ? (r = $a(o, i(s)), Bt(r.$$.fragment), B(r.$$.fragment, 1), zt(r, e.parentNode, e)) : r = null;
      } else if (o) {
        const l = {};
        a & /*componentContext*/
        1 && (l.componentContext = /*componentContext*/
        s[0]), a & /*layoutParams*/
        2 && (l.layoutParams = /*layoutParams*/
        s[1]), r.$set(l);
      }
    },
    i(s) {
      n || (r && B(r.$$.fragment, s), n = !0);
    },
    o(s) {
      r && Q(r.$$.fragment, s), n = !1;
    },
    d(s) {
      s && J(e), r && Rt(r, s);
    }
  };
}
function a2(t) {
  let r, e, n = (
    /*component*/
    t[2] && jf(t)
  );
  return {
    c() {
      n && n.c(), r = Kt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, [i]) {
      /*component*/
      o[2] ? n ? (n.p(o, i), i & /*component*/
      4 && B(n, 1)) : (n = jf(o), n.c(), B(n, 1), n.m(r.parentNode, r)) : n && (or(), Q(n, 1, 1, () => {
        n = null;
      }), ir());
    },
    i(o) {
      e || (B(n), e = !0);
    },
    o(o) {
      Q(n), e = !1;
    },
    d(o) {
      o && J(r), n && n.d(o);
    }
  };
}
function u2(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r;
  const i = Dr(Yr);
  let s;
  return t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext, component*/
    5) {
      const a = n.json;
      if (e(2, s = (a == null ? void 0 : a.type) && Yd[a.type] || void 0), !s) {
        let l;
        a != null && a.type && i.hasTemplate(a.type) ? l = "Recursive template" : l = "Unknown component", n.logError(K(new Error(l), {
          additional: {
            component: (a == null ? void 0 : a.type) || "<missing>"
          }
        }));
      }
    }
  }, [n, o, s];
}
class qn extends Lr {
  constructor(r) {
    super(), Or(this, r, u2, a2, Ar, { componentContext: 0, layoutParams: 1 });
  }
}
const c2 = {
  "root-svg-filters": "appkit-root-svg-filters"
};
function Cf(t, r, e) {
  const n = t.slice();
  n[1] = r[e];
  const o = (
    /*filterKey*/
    n[1].split(":")
  );
  return n[2] = o[0], n[3] = o[1], n;
}
function Ef(t) {
  let r, e, n = nr([...Object.keys(
    /*svgFiltersMap*/
    t[0]
  )]), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Af(Cf(t, n, i));
  return {
    c() {
      r = $r("svg"), e = $r("defs");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", c2["root-svg-filters"]), g(r, "aria-hidden", "true");
    },
    m(i, s) {
      q(i, r, s), pt(r, e);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(e, null);
    },
    p(i, s) {
      if (s & /*svgFiltersMap, Object*/
      1) {
        n = nr([...Object.keys(
          /*svgFiltersMap*/
          i[0]
        )]);
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Cf(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Af(l), o[a].c(), o[a].m(e, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && J(r), nn(o, i);
    }
  };
}
function f2(t) {
  let r, e;
  return {
    c() {
      r = $r("feBlend"), g(r, "in2", "SourceGraphic"), g(r, "mode", e = /*filterMode*/
      t[3]);
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o & /*svgFiltersMap*/
      1 && e !== (e = /*filterMode*/
      n[3]) && g(r, "mode", e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function d2(t) {
  let r;
  return {
    c() {
      r = $r("feComposite"), g(r, "in2", "SourceGraphic"), g(r, "operator", "arithmetic"), g(r, "k1", "1"), g(r, "k2", "0"), g(r, "k3", "0"), g(r, "k4", "0");
    },
    m(e, n) {
      q(e, r, n);
    },
    p: A,
    d(e) {
      e && J(r);
    }
  };
}
function _2(t) {
  let r, e;
  return {
    c() {
      r = $r("feComposite"), g(r, "in2", "SourceGraphic"), g(r, "operator", e = /*filterMode*/
      t[3].split("_")[1]);
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o & /*svgFiltersMap*/
      1 && e !== (e = /*filterMode*/
      n[3].split("_")[1]) && g(r, "operator", e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function Af(t) {
  let r, e, n, o;
  function i(l, u) {
    return (
      /*filterMode*/
      l[3] === "source_in" || /*filterMode*/
      l[3] === "source_atop" ? _2 : (
        /*filterMode*/
        l[3] === "multiply" ? d2 : f2
      )
    );
  }
  let s = i(t), a = s(t);
  return {
    c() {
      r = $r("filter"), e = $r("feFlood"), a.c(), g(e, "flood-color", n = /*filterColor*/
      t[2]), g(r, "id", o = /*svgFiltersMap*/
      t[0][
        /*filterKey*/
        t[1]
      ]);
    },
    m(l, u) {
      q(l, r, u), pt(r, e), a.m(r, null);
    },
    p(l, u) {
      u & /*svgFiltersMap*/
      1 && n !== (n = /*filterColor*/
      l[2]) && g(e, "flood-color", n), s === (s = i(l)) && a ? a.p(l, u) : (a.d(1), a = s(l), a && (a.c(), a.m(r, null))), u & /*svgFiltersMap*/
      1 && o !== (o = /*svgFiltersMap*/
      l[0][
        /*filterKey*/
        l[1]
      ]) && g(r, "id", o);
    },
    d(l) {
      l && J(r), a.d();
    }
  };
}
function p2(t) {
  let r = Object.keys(
    /*svgFiltersMap*/
    t[0]
  ).length, e, n = r && Ef(t);
  return {
    c() {
      n && n.c(), e = Kt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, e, i);
    },
    p(o, [i]) {
      i & /*svgFiltersMap*/
      1 && (r = Object.keys(
        /*svgFiltersMap*/
        o[0]
      ).length), r ? n ? n.p(o, i) : (n = Ef(o), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: A,
    o: A,
    d(o) {
      o && J(e), n && n.d(o);
    }
  };
}
function g2(t, r, e) {
  let { svgFiltersMap: n } = r;
  return t.$$set = (o) => {
    "svgFiltersMap" in o && e(0, n = o.svgFiltersMap);
  }, [n];
}
class h2 extends Lr {
  constructor(r) {
    super(), Or(this, r, g2, p2, Ar, { svgFiltersMap: 0 });
  }
}
function m2(t, r, e, n) {
  const o = e[t.type];
  if (!o)
    return n(K(new Error("No such template"), {
      additional: {
        template: t.type
      }
    })), {
      json: t,
      templateContext: r
    };
  let i;
  const s = {};
  for (i in r)
    r.hasOwnProperty(i) && (s[i] = r[i]);
  for (i in t)
    i === "type" || i === "__proto__" || t.hasOwnProperty(i) && (s[i] = t[i]);
  function a(u, c) {
    const f = Object.keys(c).filter((m) => m !== "__proto__"), _ = f.filter((m) => m.charAt(0) !== "$"), h = f.filter((m) => m.charAt(0) === "$");
    return _.forEach((m) => {
      const p = c[m];
      typeof p == "object" && p !== null ? (u[m] = Array.isArray(p) ? [] : {}, a(u[m], p)) : u[m] = p;
    }), h.forEach((m) => {
      const p = c[m], k = s[p];
      if (k !== void 0) {
        const w = m.substring(1);
        u[w] = k;
      }
    }), u;
  }
  const l = a({}, o);
  for (i in t)
    i === "type" || i === "__proto__" || t.hasOwnProperty(i) && (l[i] = t[i]);
  return {
    json: l,
    templateContext: s
  };
}
const b2 = 128, yi = /* @__PURE__ */ new Map();
let Sf;
function Kd(t) {
  return yi.get(t);
}
function Xd(t, r) {
  t !== Sf && (yi.delete(t), yi.size >= b2 && yi.delete(yi.keys().next().value), yi.set(t, r), Sf = t);
}
const Vf = /* @__PURE__ */ new Set([
  "string",
  "integer",
  "number",
  "boolean",
  "datetime",
  "color",
  "url",
  "dict",
  "array"
]);
function y2(t) {
  if (!(typeof t.name == "string" && t.name))
    throw new Error("Incorrect function name");
  if (!(typeof t.body == "string" && t.body))
    throw new Error("Incorrect function body");
  if (!(t.return_type && Vf.has(t.return_type)))
    throw new Error("Incorrect function return_type");
  if (!Array.isArray(t.arguments))
    throw new Error("Incorrect function arguments");
  const r = /* @__PURE__ */ new Set();
  t.arguments.forEach((e) => {
    if (!(typeof e.name == "string" && e.name))
      throw new Error("Incorrect argument name");
    if (!(e.type && Vf.has(e.type)))
      throw new Error("Incorrect argument type");
    if (r.has(e.name))
      throw new Error("Duplicate argument name");
    r.add(e.name);
  });
}
function w2(t) {
  let r;
  return {
    name: t.name,
    args: t.arguments.map((e) => ({
      type: e.type
    })),
    cb(e, ...n) {
      r || (r = Kd(t.body) || Ls(t.body, {
        startRule: "JsonStringContents"
      }), Xd(t.body, r));
      const o = /* @__PURE__ */ new Map();
      n.forEach((a, l) => {
        if (a.type === "function")
          throw new Error("Incorrect argument type: function");
        const u = vs(t.arguments[l].name, a.type, a.value);
        o.set(u.getName(), u);
      });
      const i = $s(o, e.customFunctions, e.store, r, {
        weekStartDay: e.weekStartDay
      });
      i.warnings.forEach((a) => {
        e.warnings.push(a);
      });
      const s = i.result;
      if (s.type === "error")
        throw new Error(s.value);
      if (s.type !== t.return_type)
        throw new Error("Incorrect function return_type");
      return s;
    }
  };
}
function k2(t, r) {
  if (!t)
    return r || void 0;
  if (!r)
    return t || void 0;
  const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
  for (const [o, i] of r) {
    for (const s of i) {
      const a = ya(o, s);
      n.add(a);
    }
    e.set(o, i);
  }
  for (const [o, i] of t)
    for (const s of i) {
      const a = ya(o, s);
      if (!n.has(a)) {
        n.add(a);
        const l = e.get(o) || [];
        l.push(s), e.set(o, l);
      }
    }
  return e;
}
function v2(t) {
  if (!t)
    return K(new Error("Missing object"));
  const r = t.card, e = t.templates || {};
  if (!r)
    return K(new Error("Missing card"));
  if (!r.states || !r.states.length)
    return K(new Error("Missing states"));
  for (const n in e)
    if (e.hasOwnProperty(n) && n in Yd)
      return K(new Error("Template name collision"), {
        additional: {
          templateName: n
        }
      });
  for (let n = 0; n < r.states.length; ++n) {
    if (!r.states[n].div)
      return K(new Error("Missing state div"), {
        additional: {
          stateId: r.states[n].state_id
        }
      });
    if (typeof r.states[n].state_id != "number")
      return K(new Error("Missing state_id"), {
        additional: {
          index: n
        }
      });
  }
  return null;
}
function j2(t) {
  return [...new Set(t)];
}
class Zd {
  constructor(r, e) {
    Er(this, "ast");
    Er(this, "expr");
    this.ast = r, this.expr = e;
  }
  /**
   * Applies variables into ast
   * @param variables
   * @param logError
   */
  apply({
    variables: r,
    customFunctions: e,
    logError: n,
    store: o,
    weekStartDay: i,
    keepComplex: s
  }) {
    var l;
    let a;
    try {
      a = $s(r, e, o, this.ast, {
        weekStartDay: i
      }), a.warnings.forEach(n);
      const u = a.result;
      if (u.type === "error")
        return n(K(new Error("Expression execution error"), {
          additional: {
            message: u.value,
            expression: this.expr
          }
        })), {
          result: void 0,
          usedVars: a.usedVars
        };
      const c = u.value;
      if (c instanceof Date)
        return {
          result: Kf(c),
          usedVars: a.usedVars
        };
      if (u.type === "boolean")
        return {
          result: !!c,
          usedVars: a.usedVars
        };
      if (u.type === "color") {
        const f = uo(String(c));
        if (f)
          return {
            result: pi(f),
            usedVars: a.usedVars
          };
        n(K(new Error("Expression execution error")));
      }
      if (u.type === "integer")
        return c > a_ || c < u_ ? (n(K(new Error("Expression result is out of 32-bit int range"))), {
          result: void 0,
          usedVars: a.usedVars
        }) : {
          result: Number(c),
          usedVars: a.usedVars
        };
      if (u.type === "function")
        return {
          result: `<${((l = u.value[0]) == null ? void 0 : l.name) || "Function"}>`,
          usedVars: a.usedVars
        };
      if (!s && (u.type === "array" || u.type === "dict"))
        try {
          return {
            result: JSON.stringify(c),
            usedVars: a.usedVars
          };
        } catch {
          return n(K(new Error(`Failed to stringify ${u.type}`))), {
            result: `<${u.type}>`,
            usedVars: a.usedVars
          };
        }
      return {
        result: c,
        usedVars: a.usedVars
      };
    } catch {
      return n(K(new Error("Expression execution error"), {
        additional: {
          expression: this.expr
        }
      })), {
        result: void 0,
        usedVars: a == null ? void 0 : a.usedVars
      };
    }
  }
}
function C2(t) {
  return t.indexOf("@{") > -1 || t.indexOf("\\") > -1;
}
function Yl(t, r, e, n) {
  if (t)
    if (typeof t == "string") {
      if (C2(t)) {
        r.hasExpression = !0;
        try {
          const o = Kd(t) || Ls(t, {
            startRule: "JsonStringContents"
          });
          Xd(t, o);
          const i = g_(o);
          return r.vars.push(...i), new Zd(o, t);
        } catch {
          e(K(new Error("Unable to parse expression"), {
            additional: {
              expression: t
            }
          }));
          return;
        }
      }
    } else {
      if (Array.isArray(t) && n > 0)
        return t.map((o) => Yl(o, r, e, n - 1));
      if (typeof t == "object" && n > 0) {
        const o = {};
        for (const i in t)
          o[i] = Yl(t[i], r, e, n - 1);
        return o;
      }
    }
  return t;
}
function Kl(t, r) {
  if (t) {
    if (t instanceof Zd)
      return t.apply(r);
    if (Array.isArray(t)) {
      let e;
      return {
        result: t.map((o) => {
          const i = Kl(o, r);
          if (i.usedVars) {
            e || (e = /* @__PURE__ */ new Set());
            for (const s of i.usedVars)
              e.add(s);
          }
          return i.result;
        }),
        usedVars: e
      };
    } else if (typeof t == "object") {
      const e = {};
      let n;
      for (const o in t) {
        const i = Kl(t[o], r);
        if (e[o] = i.result, i.usedVars) {
          n || (n = /* @__PURE__ */ new Set());
          for (const s of i.usedVars)
            n.add(s);
        }
      }
      return {
        result: e,
        usedVars: n
      };
    }
  }
  return {
    result: t
  };
}
function Ff(t, r, e, n, o = 1 / 0) {
  const i = {
    vars: [],
    hasExpression: !1
  }, s = Yl(t, i, r, o);
  return {
    vars: j2(i.vars),
    hasExpression: i.hasExpression,
    applyVars(l, u, c) {
      return Kl(s, {
        variables: l,
        customFunctions: u,
        logError: r,
        store: e,
        weekStartDay: n,
        keepComplex: c
      });
    }
  };
}
class Qd {
  constructor() {
    Er(this, "_vars", /* @__PURE__ */ new Map());
    Er(this, "_lastAddedVariable", Ao(""));
  }
  setVariable(r) {
    const e = r.getName();
    if (this._vars.has(e))
      throw new Error("Variable with the same name already exist");
    this._vars.set(e, r), this._lastAddedVariable.set(e);
  }
  getVariable(r) {
    return this._vars.get(r);
  }
  list() {
    return this._vars.values();
  }
  getVariables() {
    return this._vars;
  }
  getLastAddedVariableStore() {
    return this._lastAddedVariable;
  }
}
function A3() {
  return new Qd();
}
const E2 = ["start", "stop", "pause", "resume", "cancel", "reset"], A2 = new Set(E2);
class S2 {
  constructor(r) {
    Er(this, "timers", /* @__PURE__ */ new Map());
    Er(this, "logError");
    Er(this, "applyVars");
    Er(this, "hasVariableWithType");
    Er(this, "setVariableValue");
    Er(this, "execAnyActions");
    Er(this, "visibilityHandler");
    Er(this, "awaitActions", []);
    this.logError = r.logError, this.applyVars = r.applyVars, this.hasVariableWithType = r.hasVariableWithType, this.setVariableValue = r.setVariableValue, this.execAnyActions = r.execAnyActions, this.visibilityHandler = () => {
      document.visibilityState === "visible" ? (this.awaitActions.forEach(({ id: e, action: n }) => {
        this.execTimerAction(e, n);
      }), this.awaitActions = [], this.unholdAll()) : this.holdAll();
    }, document.addEventListener("visibilitychange", this.visibilityHandler);
  }
  destroy() {
    document.removeEventListener("visibilitychange", this.visibilityHandler);
    for (const [r, e] of this.timers)
      this.stopTimerTimeouts(e);
  }
  createTimer(r) {
    if (!(r != null && r.id)) {
      this.logError(K(new Error("Missing timer id")));
      return;
    }
    if (!(r.duration || r.tick_interval && (r.value_variable || r.tick_actions))) {
      this.logError(K(new Error("Misconfigured timer"), {
        additional: {
          id: r.id
        }
      }));
      return;
    }
    this.timers.set(r.id, {
      state: "stopped",
      definition: r
    });
  }
  execTimerAction(r, e) {
    if (!r || !e || !this.timers.has(r) || !A2.has(e)) {
      this.logError(K(new Error("Incorrect timer action"), {
        additional: {
          id: r,
          action: e
        }
      }));
      return;
    }
    const n = e;
    if (document.visibilityState !== "visible") {
      this.awaitActions.push({
        id: r,
        action: n
      });
      return;
    }
    const o = this.timers.get(r);
    this[n](o);
  }
  stopTimerTimeouts(r) {
    r.durationTimeout && (clearTimeout(r.durationTimeout), r.durationTimeout = void 0), r.tickTimeout && (clearTimeout(r.tickTimeout), r.tickTimeout = void 0);
  }
  async tickOrUnholdAction(r) {
    const e = performance.now(), n = (r.durationPassed || 0) + e - (r.durationStarted || 0);
    r.duration && n > r.duration || (this.updateVariable(r, n), await this.callActions(r, "tick"), r.tickCount !== void 0 && ++r.tickCount);
  }
  startOrResume(r) {
    r.state = "running", r.hold = !1, r.durationStarted = performance.now();
    const e = r.duration;
    e && (r.durationTimeout = window.setTimeout(async () => {
      this.updateVariable(r, e), r.tickCountPredict && r.tickCount !== void 0 && r.tickCount < r.tickCountPredict && await this.callActions(r, "tick"), this.stop(r);
    }, Math.max(0, e - (r.durationPassed || 0))));
    const n = r.tick;
    if (n) {
      const o = () => {
        const i = r.tickStarted = performance.now(), s = Math.max(0, n - (r.tickPassed || 0));
        r.tickTimeout = window.setTimeout(async () => {
          await this.tickOrUnholdAction(r), r.tickPassed = (performance.now() - i - s) % n, r.state === "running" && o();
        }, s);
      };
      o();
    }
  }
  applyVarsInt(r) {
    let e = this.applyVars(r);
    if (typeof e == "string") {
      if (e === r)
        return;
      e = Number(e);
    }
    if (!(e === void 0 || Number.isNaN(e) || Math.round(e) !== e))
      return e;
  }
  start(r) {
    if (r.state === "running") {
      this.logError(K(new Error("The timer is already running")));
      return;
    } else if (r.state === "paused") {
      this.logError(K(new Error("The timer is paused")));
      return;
    }
    const e = r.definition.value_variable;
    if (e && !this.hasVariableWithType(e, "integer")) {
      this.logError(K(new Error("Cannot find variable"), {
        additional: {
          name: e
        }
      }));
      return;
    }
    if (e && this.setVariableValue(e, 0), r.definition.duration !== void 0 && (r.duration = this.applyVarsInt(r.definition.duration), r.duration === void 0 || r.duration < 0)) {
      this.logError(K(new Error("Incorrect timer properties"), {
        additional: {
          id: r.definition.id
        }
      }));
      return;
    }
    if (r.definition.tick_interval !== void 0 && (r.tick = this.applyVarsInt(r.definition.tick_interval), r.tick === void 0 || r.tick <= 0)) {
      this.logError(K(new Error("Incorrect timer properties"), {
        additional: {
          id: r.definition.id
        }
      }));
      return;
    }
    r.duration !== void 0 && r.tick !== void 0 && (r.tickCount = 0, r.tickCountPredict = Math.floor(r.duration / r.tick)), this.startOrResume(r);
  }
  stop(r) {
    if (r.state === "stopped") {
      this.logError(K(new Error("The timer has already been stopped")));
      return;
    }
    r.state = "stopped", r.durationPassed = 0, r.tickPassed = 0, this.stopTimerTimeouts(r), this.callActions(r, "end");
  }
  pause(r) {
    if (r.state === "stopped") {
      this.logError(K(new Error("The timer has already been stopped")));
      return;
    } else if (r.state === "paused") {
      this.logError(K(new Error("The timer has already been paused")));
      return;
    }
    r.state = "paused", this.stopTimerTimeouts(r);
    const e = performance.now();
    r.durationStarted && (r.durationPassed = (r.durationPassed || 0) + e - r.durationStarted), r.tickStarted && (r.tickPassed = (r.tickPassed || 0) + e - r.tickStarted);
    const n = r.definition.value_variable;
    n && r.durationPassed && this.setVariableValue(n, Math.round(r.durationPassed));
  }
  resume(r) {
    if (r.state === "stopped") {
      this.logError(K(new Error("The timer has already been stopped")));
      return;
    } else if (r.state === "running") {
      this.logError(K(new Error("The timer is already running")));
      return;
    }
    this.startOrResume(r);
  }
  cancel(r) {
    r.state !== "stopped" && (r.state = "stopped", r.durationPassed = 0, r.tickPassed = 0, this.stopTimerTimeouts(r));
  }
  reset(r) {
    this.cancel(r), this.start(r);
  }
  updateVariable(r, e) {
    const n = r.definition.value_variable;
    n && this.setVariableValue(n, Math.round(e));
  }
  async callActions(r, e) {
    const n = r.definition[e === "end" ? "end_actions" : "tick_actions"];
    if (n)
      return this.execAnyActions(n, {
        processUrls: !1
      });
  }
  holdAll() {
    for (const [r, e] of this.timers)
      e.state === "running" && (e.hold = !0, this.stopTimerTimeouts(e));
  }
  async unholdAll() {
    for (const [r, e] of this.timers)
      if (e.state === "running" && e.hold) {
        const n = performance.now();
        e.durationStarted && (e.durationPassed = (e.durationPassed || 0) + n - e.durationStarted), e.tickStarted && (e.tickPassed = (e.tickPassed || 0) + n - e.tickStarted), e.tick && await this.tickOrUnholdAction(e), this.startOrResume(e);
      }
  }
}
function V2(t, r, e, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number" && i !== void 0) {
    e(K(new Error("Incorrect array_insert_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  _a(t, r, e, n, (a) => {
    const l = a.getValue();
    if (typeof i == "number" && (i < 0 || i > l.length))
      e(K(new Error(`Index out of bound for mutation ${n.type}`), {
        additional: {
          name: o,
          index: i,
          length: l.length
        }
      }));
    else if (!s.type)
      e(K(new Error("Incorrect value type"), {
        additional: {
          name: o
        }
      }));
    else {
      const u = l.slice(), c = Ws(s);
      typeof i == "number" ? u.splice(i, 0, c) : u.push(c), a.setValue(u);
    }
  });
}
function F2(t, r, e, n) {
  const { variable_name: o, index: i } = n;
  if (typeof i != "number") {
    e(K(new Error("Incorrect array_remove_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  _a(t, r, e, n, (s) => {
    const a = s.getValue();
    if (typeof i == "number" && (i < 0 || i >= a.length))
      e(K(new Error(`Index out of bound for mutation ${n.type}`), {
        additional: {
          name: o,
          index: i,
          length: a.length
        }
      }));
    else {
      const l = a.slice();
      l.splice(i, 1), s.setValue(l);
    }
  });
}
function I2(t, r, e, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number") {
    e(K(new Error("Incorrect array_set_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  _a(t, r, e, n, (a) => {
    const l = a.getValue();
    if (typeof i == "number" && (i < 0 || i >= l.length))
      e(K(new Error(`Index out of bound for mutation ${n.type}`), {
        additional: {
          name: o,
          index: i,
          length: l.length
        }
      }));
    else if (!s.type)
      e(K(new Error("Incorrect value type"), {
        additional: {
          name: o
        }
      }));
    else {
      const u = l.slice();
      u[i] = Ws(s), a.setValue(u);
    }
  });
}
function _a(t, r, e, n, o) {
  const { variable_name: i } = n;
  if (!i) {
    e(K(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: i
      }
    }));
    return;
  }
  const s = (t == null ? void 0 : t.getVariable(i)) || r.get(i);
  if (!s) {
    e(K(new Error("Cannot find variable"), {
      additional: {
        name: i
      }
    }));
    return;
  }
  const a = s.getType();
  a === "array" ? o(s) : e(K(new Error("Trying to insert value into the non-array"), {
    additional: {
      name: i,
      type: a
    }
  }));
}
function D2(t, r, e, n) {
  const { variable_name: o, key: i, value: s } = n;
  if (typeof i != "string") {
    e(K(new Error("Incorrect dict_set_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  if (!o) {
    e(K(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  s && !s.type && e(K(new Error("Incorrect value type"), {
    additional: {
      name: o
    }
  }));
  const a = (t == null ? void 0 : t.getVariable(o)) || r.get(o);
  if (!a) {
    e(K(new Error("Cannot find variable"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  const l = a.getType();
  if (l === "dict") {
    const c = { ...a.getValue() };
    s ? c[i] = Ws(s) : delete c[i], a.setValue(c);
  } else
    e(K(new Error("Trying to set value into the non-dict"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function T2(t, r) {
  if (!(r.content && (r.content.type === "text" || r.content.type === "url") && typeof r.content.value == "string")) {
    t(K(new Error("Incorrect action"), {
      additional: {
        action: r
      }
    }));
    return;
  }
  if (!(typeof navigator < "u" && "clipboard" in navigator && navigator.clipboard && "writeText" in navigator.clipboard && typeof navigator.clipboard.writeText == "function")) {
    t(K(new Error("Clipboard is unavailable"), {
      additional: {
        action: r
      }
    }));
    return;
  }
  navigator.clipboard.writeText(r.content.value).catch((e) => {
    t(K(new Error("Failed to copy to the clipboard"), {
      additional: {
        originalError: String(e)
      }
    }));
  });
}
function M2(t) {
  if (t === "normal" || t === "reverse" || t === "alternate" || t === "alternate_reverse")
    return t;
}
function P2(t, r, e, n) {
  var G, L, ee, fe;
  const o = Gn(t.duration, 0);
  if (!o || t.type !== "color_animator" && t.type !== "number_animator")
    return;
  const i = (G = t.start_value_typed ? t.start_value_typed.value : t.start_value) != null ? G : r.getValue(), s = t.end_value_typed ? t.end_value_typed.value : t.end_value;
  if (i === void 0 || s === void 0 || t.type === "color_animator" && (typeof i != "string" && i !== void 0 || typeof s != "string") || t.type === "number_animator" && (typeof i != "number" && i !== void 0 || typeof s != "number"))
    return;
  const a = t.type === "color_animator" && uo(i), l = t.type === "color_animator" && uo(s);
  if (t.type === "color_animator" && (!a || !l))
    return;
  const u = en(t.start_delay, 0), c = fa(t.interpolator || "linear"), f = M2(t.direction) || "normal", _ = ((L = t.repeat_count) == null ? void 0 : L.type) === "infinity" ? 1 / 0 : ((ee = t.repeat_count) == null ? void 0 : ee.type) === "fixed" ? en((fe = t.repeat_count) == null ? void 0 : fe.value, 1) : 1;
  let h = 0, m = performance.now();
  const p = _ === 1 / 0 ? 1 / 0 : _ * o + u;
  function k(P) {
    if (t.type === "color_animator") {
      if (!a || !l)
        throw new Error("Missing start/end value");
      return pi({
        a: Co(zo(a.a, l.a, P), 0, 255),
        r: Co(zo(a.r, l.r, P), 0, 255),
        g: Co(zo(a.g, l.g, P), 0, 255),
        b: Co(zo(a.b, l.b, P), 0, 255)
      });
    }
    return zo(i, s, P);
  }
  function w(P) {
    const Z = P - m;
    if (m = P, h += Z, h >= u) {
      let se = Math.floor((h - u) / o), j = (h - u - se * o) / o;
      se >= _ && (se = _ - 1, j = 1);
      let z;
      f === "normal" || f === "alternate" && se % 2 === 0 || f === "alternate_reverse" && se % 2 === 1 ? z = "normal" : z = "reverse", z === "reverse" && (j = 1 - j);
      const N = k(c(j));
      r.setValue(N);
    }
    h < p ? O = requestAnimationFrame(w) : (e(), n(t.end_actions));
  }
  let O = requestAnimationFrame(w);
  return {
    stop() {
      cancelAnimationFrame(O), n(t.cancel_actions), n(t.end_actions);
    }
  };
}
function N2(t) {
  let r = t;
  for (; r && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function z2(t) {
  let r = t;
  for (; r != null && r.parent && r.json.type !== "state" && !r.isRootState && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function Rs(t) {
  return !!(t && typeof t == "string");
}
const R2 = /* @__PURE__ */ new Set([
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "head",
  "options"
]);
function O2(t) {
  return t === void 0 || R2.has(t);
}
function L2(t) {
  return t === void 0 || Array.isArray(t) && t.every((r) => Rs(r.name) && Rs(r.value));
}
function B2(t) {
  var r, e, n;
  return Rs(t.container_id) && Rs((r = t.request) == null ? void 0 : r.url) && O2((e = t.request) == null ? void 0 : e.method) && L2((n = t.request) == null ? void 0 : n.headers);
}
function H2(t, r, e, n) {
  const { variable_name: o, path: i, value: s } = n;
  if (!(s != null && s.value)) {
    e(K(new Error("Missing value for an action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  if (typeof i != "string" || !i || i.charAt(0) === "/" || i.charAt(i.length - 1) === "/") {
    e(K(new Error(`Value '${i}' for key 'path' is not valid`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  if (!o) {
    e(K(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  const a = (t == null ? void 0 : t.getVariable(o)) || r.get(o);
  if (!a) {
    e(K(new Error("Cannot find variable"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  const l = a.getType();
  if (l === "dict" || l === "array") {
    const u = a.getValue(), c = i.replace(/\/+/g, "/");
    if (c === "/") {
      e(K(new Error(`Value '${i}' for key 'path' is not valid`), {
        additional: {
          name: o,
          type: l,
          path: i
        }
      }));
      return;
    }
    const f = c.split("/"), _ = l === "array" ? u.slice() : { ...u };
    let h = _;
    for (let m = 0; m < f.length; ++m) {
      const p = f[m];
      if (!p) {
        e(K(new Error("Path is empty"), {
          additional: {
            name: o,
            type: l,
            path: i
          }
        }));
        return;
      }
      if (!h || typeof h != "object") {
        e(K(new Error(`Element with path '${f.slice(0, m).join("/")}' is not ${h === void 0 ? "found" : "a structure"}`), {
          additional: {
            name: o,
            type: l,
            path: i
          }
        }));
        return;
      }
      if (Array.isArray(h)) {
        const k = Number(p);
        if (Number.isNaN(k)) {
          e(K(new Error(`Unable to use '${p}' as array index`), {
            additional: {
              name: o,
              type: l,
              path: i
            }
          }));
          return;
        }
        if (m + 1 === f.length && (k < 0 || k > h.length)) {
          e(K(new Error(`Position '${k}' is out of array bounds`), {
            additional: {
              name: o,
              type: l,
              path: i
            }
          }));
          return;
        }
      }
      m + 1 < f.length && (h = h[p]);
    }
    h[f[f.length - 1]] = Ws(s), a.setValue(_);
  } else
    e(K(new Error("Action requires array or dictionary variable"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function If(t, { delay: r = 0, duration: e = 400, easing: n = Ld, x: o = 0, y: i = 0, opacity: s = 0 } = {}) {
  const a = getComputedStyle(t), l = +a.opacity, u = a.transform === "none" ? "" : a.transform, c = l * (1 - s), [f, _] = Za(o), [h, m] = Za(i);
  return {
    delay: r,
    duration: e,
    easing: n,
    css: (p, k) => `
			transform: ${u} translate(${(1 - p) * f}${_}, ${(1 - p) * h}${m});
			opacity: ${l - c * k}`
  };
}
const W2 = "appkit-outer", U2 = "appkit-root__clickable", G2 = "undefined", J2 = "appkit-tooltip", q2 = "appkit-tooltip_visible", Y2 = "appkit-tooltip_modal", K2 = "appkit-tooltip__inner", X2 = "appkit-tooltip__overlay", Z2 = "appkit-tooltip__substrate", ho = {
  outer: W2,
  root__clickable: U2,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  root__selectable: G2,
  tooltip: J2,
  tooltip_visible: q2,
  tooltip_modal: Y2,
  tooltip__inner: K2,
  tooltip__overlay: X2,
  tooltip__substrate: Z2
}, xd = 300, $d = 0;
function Xl(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || xd) + (Number(r.start_delay) || $d)
  ));
}
function Os(t, {
  animations: r,
  direction: e
}) {
  if (!r)
    return {};
  const n = qi(r), o = Xl(n);
  return n.some((s) => s.name === "no_animation") ? {} : {
    duration: Ai() ? 0 : o,
    css: (s) => {
      const a = s * o, l = n.map((p) => {
        var ee, fe, P, Z, se, j, z, N, W, ie, de, je;
        const k = Number(p.start_delay) || $d, w = Number(p.duration) || xd, O = e === "in" ? Math.max(0, Math.min(1, (a - k) / w)) : Math.max(0, Math.min(1, (a - (o - w) + k) / w)), L = (fa(p.interpolator || "ease_in_out") || sl)(O);
        if (p.name === "fade") {
          const Ee = e === "in" ? (ee = p.start_value) != null ? ee : 0 : (fe = p.end_value) != null ? fe : 0, pe = e === "in" ? (P = p.end_value) != null ? P : 1 : (Z = p.start_value) != null ? Z : 1;
          return {
            active: L > 0 && L < 1,
            opacity: (1 - L) * Ee + L * pe
          };
        } else if (p.name === "translate") {
          const Ee = -(e === "in" ? (se = p.start_value) != null ? se : 10 : (j = p.end_value) != null ? j : 10), pe = -(e === "in" ? (z = p.end_value) != null ? z : 0 : (N = p.start_value) != null ? N : 0);
          return {
            active: L > 0 && L < 1,
            translate: `translateY(${(1 - L) * Ee + L * pe}${e === "in" && p.start_value !== void 0 || e === "out" && p.end_value !== void 0 ? "%" : "px"})`
          };
        } else if (p.name === "scale") {
          const Ee = e === "in" ? (W = p.start_value) != null ? W : 0 : (ie = p.end_value) != null ? ie : 0, pe = e === "in" ? (de = p.end_value) != null ? de : 1 : (je = p.start_value) != null ? je : 1;
          return {
            active: L > 0 && L < 1,
            scale: `scale(${(1 - L) * Ee + L * pe})`
          };
        }
        return {};
      }), u = l.map((p) => p.opacity).filter((p) => p !== void 0).reduce((p, k) => p * k, 1), c = l.map((p) => p.translate).filter((p) => p !== void 0).join(" "), f = l.map((p) => p.scale).filter((p) => p !== void 0).join(" "), _ = l.filter((p) => p.active).map((p) => p.scale).filter((p) => p !== void 0), h = _.length ? _[_.length - 1] : f;
      return `transform:${[c, h].filter(Boolean).join(" ") || "none"};opacity:${u}`;
    }
  };
}
const Li = typeof window < "u" && "HTMLDialogElement" in window, { document: Q2, window: x2 } = Io;
function $2(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _ = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && Df(t)
  ), h = (
    /*substrateComponentContext*/
    t[14] && Tf(t)
  );
  return i = new qn({
    props: {
      componentContext: (
        /*componentContext*/
        t[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = lr(), h && h.c(), e = lr(), n = Se("div"), o = Se("div"), Bt(i.$$.fragment), g(o, "class", ho.tooltip__inner), g(n, "class", s = ht(
        "tooltip",
        ho,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? vr.root_platform_desktop : "")), g(n, "role", "dialog"), g(
        n,
        "aria-modal",
        /*modal*/
        t[3]
      ), M(
        n,
        "top",
        /*tooltipY*/
        t[11]
      ), M(
        n,
        "left",
        /*tooltipX*/
        t[10]
      ), M(
        n,
        "width",
        /*tooltipWidth*/
        t[12]
      ), M(
        n,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    m(m, p) {
      _ && _.m(m, p), q(m, r, p), h && h.m(m, p), q(m, e, p), q(m, n, p), pt(n, o), zt(i, o, null), t[40](o), t[41](n), u = !0, c || (f = [
        He(
          n,
          "keydown",
          /*onKeyDown*/
          t[26]
        ),
        He(
          n,
          "introstart",
          /*onIntroStart*/
          t[28]
        ),
        He(
          n,
          "introend",
          /*onIntroEnd*/
          t[29]
        ),
        He(
          n,
          "outrostart",
          /*onOutroStart*/
          t[30]
        )
      ], c = !0);
    },
    p(m, p) {
      t = m, /*visible*/
      t[1] && /*modal*/
      t[3] ? _ ? _.p(t, p) : (_ = Df(t), _.c(), _.m(r.parentNode, r)) : _ && (_.d(1), _ = null), /*substrateComponentContext*/
      t[14] ? h ? (h.p(t, p), p[0] & /*substrateComponentContext*/
      16384 && B(h, 1)) : (h = Tf(t), h.c(), B(h, 1), h.m(e.parentNode, e)) : h && (or(), Q(h, 1, 1, () => {
        h = null;
      }), ir());
      const k = {};
      p[0] & /*componentContext*/
      4 && (k.componentContext = /*componentContext*/
      t[2]), i.$set(k), (!u || p[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = ht(
        "tooltip",
        ho,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? vr.root_platform_desktop : ""))) && g(n, "class", s), (!u || p[0] & /*modal*/
      8) && g(
        n,
        "aria-modal",
        /*modal*/
        t[3]
      ), p[0] & /*tooltipY*/
      2048 && M(
        n,
        "top",
        /*tooltipY*/
        t[11]
      ), p[0] & /*tooltipX*/
      1024 && M(
        n,
        "left",
        /*tooltipX*/
        t[10]
      ), p[0] & /*tooltipWidth*/
      4096 && M(
        n,
        "width",
        /*tooltipWidth*/
        t[12]
      ), p[0] & /*tooltipHeight*/
      8192 && M(
        n,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    i(m) {
      u || (B(h), B(i.$$.fragment, m), eo(() => {
        u && (l && l.end(1), a = xs(n, Os, {
          animations: (
            /*$animationIn*/
            t[5] || Vi
          ),
          direction: "in"
        }), a.start());
      }), u = !0);
    },
    o(m) {
      Q(h), Q(i.$$.fragment, m), a && a.invalidate(), l = dd(n, Os, {
        animations: (
          /*$animationOut*/
          t[4] || Vi
        ),
        direction: "out"
      }), u = !1;
    },
    d(m) {
      m && (J(r), J(e), J(n)), _ && _.d(m), h && h.d(m), Rt(i), t[40](null), t[41](null), m && l && l.end(), c = !1, Hr(f);
    }
  };
}
function e3(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _ = (
    /*substrateComponentContext*/
    t[14] && Mf(t)
  ), h = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && /*data*/
    t[0].background_accessibility_description && Pf(t)
  );
  return i = new qn({
    props: {
      componentContext: (
        /*componentContext*/
        t[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = lr(), e = Se("dialog"), h && h.c(), n = lr(), o = Se("div"), Bt(i.$$.fragment), g(o, "class", ho.tooltip__inner), g(e, "class", s = ht(
        "tooltip",
        ho,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? vr.root_platform_desktop : "")), M(
        e,
        "top",
        /*tooltipY*/
        t[11]
      ), M(
        e,
        "left",
        /*tooltipX*/
        t[10]
      ), M(
        e,
        "width",
        /*tooltipWidth*/
        t[12]
      ), M(
        e,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    m(m, p) {
      _ && _.m(m, p), q(m, r, p), q(m, e, p), h && h.m(e, null), pt(e, n), pt(e, o), zt(i, o, null), t[36](o), t[37](e), u = !0, c || (f = [
        He(
          e,
          "keydown",
          /*onKeyDown*/
          t[26]
        ),
        He(
          e,
          "close",
          /*onClose*/
          t[27]
        ),
        He(
          e,
          "cancel",
          /*onClose*/
          t[27]
        ),
        He(
          e,
          "click",
          /*onOutClick*/
          t[23]
        ),
        He(
          e,
          "introstart",
          /*onIntroStart*/
          t[28]
        ),
        He(
          e,
          "introend",
          /*onIntroEnd*/
          t[29]
        ),
        He(
          e,
          "outrostart",
          /*onOutroStart*/
          t[30]
        )
      ], c = !0);
    },
    p(m, p) {
      t = m, /*substrateComponentContext*/
      t[14] ? _ ? (_.p(t, p), p[0] & /*substrateComponentContext*/
      16384 && B(_, 1)) : (_ = Mf(t), _.c(), B(_, 1), _.m(r.parentNode, r)) : _ && (or(), Q(_, 1, 1, () => {
        _ = null;
      }), ir()), /*visible*/
      t[1] && /*modal*/
      t[3] && /*data*/
      t[0].background_accessibility_description ? h ? h.p(t, p) : (h = Pf(t), h.c(), h.m(e, n)) : h && (h.d(1), h = null);
      const k = {};
      p[0] & /*componentContext*/
      4 && (k.componentContext = /*componentContext*/
      t[2]), i.$set(k), (!u || p[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = ht(
        "tooltip",
        ho,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? vr.root_platform_desktop : ""))) && g(e, "class", s), p[0] & /*tooltipY*/
      2048 && M(
        e,
        "top",
        /*tooltipY*/
        t[11]
      ), p[0] & /*tooltipX*/
      1024 && M(
        e,
        "left",
        /*tooltipX*/
        t[10]
      ), p[0] & /*tooltipWidth*/
      4096 && M(
        e,
        "width",
        /*tooltipWidth*/
        t[12]
      ), p[0] & /*tooltipHeight*/
      8192 && M(
        e,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    i(m) {
      u || (B(_), B(i.$$.fragment, m), eo(() => {
        u && (l && l.end(1), a = xs(e, Os, {
          animations: (
            /*$animationIn*/
            t[5] || Vi
          ),
          direction: "in"
        }), a.start());
      }), u = !0);
    },
    o(m) {
      Q(_), Q(i.$$.fragment, m), a && a.invalidate(), l = dd(e, Os, {
        animations: (
          /*$animationOut*/
          t[4] || Vi
        ),
        direction: "out"
      }), u = !1;
    },
    d(m) {
      m && (J(r), J(e)), _ && _.d(m), h && h.d(), Rt(i), t[36](null), t[37](null), m && l && l.end(), c = !1, Hr(f);
    }
  };
}
function Df(t) {
  let r;
  function e(i, s) {
    return (
      /*data*/
      i[0].background_accessibility_description ? r3 : t3
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Kt();
    },
    m(i, s) {
      o.m(i, s), q(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && J(r), o.d(i);
    }
  };
}
function t3(t) {
  let r, e, n;
  return {
    c() {
      r = Se("div"), g(r, "class", ho.tooltip__overlay);
    },
    m(o, i) {
      q(o, r, i), e || (n = He(
        r,
        "click",
        /*closeByOutside*/
        t[24]
      ), e = !0);
    },
    p: A,
    d(o) {
      o && J(r), e = !1, n();
    }
  };
}
function r3(t) {
  let r, e, n, o;
  return {
    c() {
      r = Se("button"), g(r, "class", ho.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", e = /*data*/
      t[0].background_accessibility_description);
    },
    m(i, s) {
      q(i, r, s), n || (o = He(
        r,
        "click",
        /*closeByOutside*/
        t[24]
      ), n = !0);
    },
    p(i, s) {
      s[0] & /*data*/
      1 && e !== (e = /*data*/
      i[0].background_accessibility_description) && g(r, "aria-label", e);
    },
    d(i) {
      i && J(r), n = !1, o();
    }
  };
}
function Tf(t) {
  let r, e, n, o, i;
  return e = new qn({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        t[14]
      )
    }
  }), {
    c() {
      r = Se("div"), Bt(e.$$.fragment), n = lr(), o = Se("div"), g(r, "class", ho.tooltip__substrate);
    },
    m(s, a) {
      q(s, r, a), zt(e, r, null), t[38](r), q(s, n, a), q(s, o, a), t[39](o), i = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*substrateComponentContext*/
      16384 && (l.componentContext = /*substrateComponentContext*/
      s[14]), e.$set(l);
    },
    i(s) {
      i || (B(e.$$.fragment, s), i = !0);
    },
    o(s) {
      Q(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (J(r), J(n), J(o)), Rt(e), t[38](null), t[39](null);
    }
  };
}
function Mf(t) {
  let r, e, n, o, i;
  return e = new qn({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        t[14]
      )
    }
  }), {
    c() {
      r = Se("div"), Bt(e.$$.fragment), n = lr(), o = Se("div"), g(r, "class", ho.tooltip__substrate);
    },
    m(s, a) {
      q(s, r, a), zt(e, r, null), t[34](r), q(s, n, a), q(s, o, a), t[35](o), i = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*substrateComponentContext*/
      16384 && (l.componentContext = /*substrateComponentContext*/
      s[14]), e.$set(l);
    },
    i(s) {
      i || (B(e.$$.fragment, s), i = !0);
    },
    o(s) {
      Q(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (J(r), J(n), J(o)), Rt(e), t[34](null), t[35](null);
    }
  };
}
function Pf(t) {
  let r, e, n, o;
  return {
    c() {
      r = Se("button"), g(r, "class", ho.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", e = /*data*/
      t[0].background_accessibility_description);
    },
    m(i, s) {
      q(i, r, s), n || (o = He(
        r,
        "click",
        /*closeByOutside*/
        t[24]
      ), n = !0);
    },
    p(i, s) {
      s[0] & /*data*/
      1 && e !== (e = /*data*/
      i[0].background_accessibility_description) && g(r, "aria-label", e);
    },
    d(i) {
      i && J(r), n = !1, o();
    }
  };
}
function n3(t) {
  let r, e, n, o, i, s, a;
  const l = [e3, $2], u = [];
  function c(f, _) {
    return Li ? 0 : 1;
  }
  return e = c(), n = u[e] = l[e](t), {
    c() {
      r = lr(), n.c(), o = Kt();
    },
    m(f, _) {
      q(f, r, _), u[e].m(f, _), q(f, o, _), i = !0, s || (a = [
        He(
          x2,
          "resize",
          /*onWindowResize*/
          t[25]
        ),
        He(
          Q2.body,
          "click",
          /*onOutClick*/
          t[23],
          !0
        )
      ], s = !0);
    },
    p(f, _) {
      n.p(f, _);
    },
    i(f) {
      i || (B(n), i = !0);
    },
    o(f) {
      Q(n), i = !1;
    },
    d(f) {
      f && (J(r), J(o)), u[e].d(f), s = !1, Hr(a);
    }
  };
}
const Vi = {
  name: "set",
  items: [{ name: "translate" }, { name: "fade" }]
};
let Kn = [];
function o3(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _ = A, h = () => (_(), _ = F(i, (D) => e(46, f = D)), i), m, p = A, k = () => (p(), p = F(o, (D) => e(47, m = D)), o), w, O = A, G = () => (O(), O = F(n, (D) => e(48, w = D)), n), L, ee = A, fe = () => (ee(), ee = F(a, (D) => e(4, L = D)), a), P, Z = A, se = () => (Z(), Z = F(s, (D) => e(5, P = D)), s), j;
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Z());
  let { ownerNode: z } = r, { data: N } = r, { internalId: W } = r, { parentComponentContext: ie } = r;
  const de = Dr(Yr), je = de.isDesktop;
  bn(t, je, (D) => e(21, j = D));
  const Ee = Date.now();
  let pe, ze, be, Fe, Ge = !1, Ze = "", ke = "", et = "", _e = "", Ie = null, ue, oe, ye = !0, $ = null;
  function Ae() {
    var ft, Me;
    if (!pe || !z)
      return;
    const D = pe.parentElement;
    if (!D)
      return;
    const jt = pe.style.cssText;
    e(6, pe.style.cssText += ";transform: none !important", pe);
    const gt = z.getBoundingClientRect(), kt = pe.getBoundingClientRect(), St = D.getBoundingClientRect();
    e(6, pe.style.cssText = jt, pe);
    let rt = 0, Y = 0, Vt = null, Dt = null, Gt = 0, Jt = 0;
    const ve = (ft = ue == null ? void 0 : ue.json) == null ? void 0 : ft.width, We = (Me = ue == null ? void 0 : ue.json) == null ? void 0 : Me.height;
    if (!ve || ve.type === "match_parent" ? Gt = Vt = window.innerWidth : ve.type === "fixed" && ve.value ? Gt = Vt = ve.value : Gt = kt.width, (We == null ? void 0 : We.type) === "match_parent" ? Jt = Dt = window.innerHeight : (We == null ? void 0 : We.type) === "fixed" && We.value ? Jt = Dt = We.value : Jt = kt.height, w === "left" || w === "bottom-left" || w === "top-left")
      rt = gt.left - Gt;
    else if (w === "top" || w === "bottom" || w === "center")
      rt = (gt.left + gt.right) / 2 - Gt / 2;
    else if (w === "right" || w === "bottom-right" || w === "top-right")
      rt = gt.right;
    else
      return;
    if (w === "top" || w === "top-left" || w === "top-right")
      Y = gt.top - Jt;
    else if (w === "left" || w === "right" || w === "center")
      Y = (gt.top + gt.bottom) / 2 - Jt / 2;
    else if (w === "bottom-left" || w === "bottom" || w === "bottom-right")
      Y = gt.bottom;
    else
      return;
    Li && ye || (rt -= St.left, Y -= St.top), rt += m || 0, Y += f || 0, e(10, Ze = `${rt}px`), e(11, ke = `${Y}px`), e(12, et = Vt !== null ? `${Vt}px` : ""), e(13, _e = Dt !== null ? `${Dt}px` : ""), e(1, Ge = !0), Vt === null || Dt === null ? typeof ResizeObserver < "u" && !Ie && (Ie = new ResizeObserver(() => {
      requestAnimationFrame(Ae);
    }), Ie.observe(pe)) : Ie == null || Ie.disconnect();
  }
  function xe(D) {
    if (Kn.length && Kn[Kn.length - 1] !== pe)
      return;
    const jt = D.composedPath();
    Date.now() - Ee < 100 || jt.includes(pe) && !(Li && jt[0] === pe) || qe();
  }
  function qe(D) {
    D == null || D.stopPropagation(), D == null || D.preventDefault(), ue.getJsonWithVars(N.close_by_tap_outside) !== !1 && (Kn = Kn.filter((jt) => jt !== pe), de.onTooltipClose(W)), N.tap_outside_actions && ue.execAnyActions(N.tap_outside_actions, { processUrls: !0 });
  }
  function te() {
    Ae();
  }
  function Xe(D) {
    Kn.length && Kn[Kn.length - 1] !== pe || D.key === "Escape" && !D.ctrlKey && !D.shiftKey && !D.altKey && !D.metaKey && (Kn = Kn.filter((jt) => jt !== pe), de.onTooltipClose(W));
  }
  function Le(D) {
    Kn = Kn.filter((jt) => jt !== pe), de.onTooltipClose(W), D.preventDefault();
  }
  function tt() {
    be && be.animate({ opacity: [0, 1] }, {
      duration: l,
      easing: "ease-in-out"
    });
  }
  function dt() {
    be && pe.insertBefore(be, ze);
  }
  function lt() {
    Fe != null && Fe.parentElement && be && (Fe.parentElement.insertBefore(be, Fe), be.animate({ opacity: [1, 0] }, {
      duration: u,
      easing: "ease-in-out"
    }));
  }
  to(() => {
    try {
      $ = document.activeElement;
    } catch {
    }
    if (de.tooltipRoot) {
      const D = window.getComputedStyle(pe);
      e(6, pe.style.fontSize = D.fontSize, pe), e(6, pe.style.fontFamily = D.fontFamily, pe), e(6, pe.style.lineHeight = D.lineHeight, pe), de.tooltipRoot.appendChild(pe);
    }
    Li && pe && pe instanceof HTMLDialogElement && pe[ye ? "showModal" : "show"](), ye && Kn.push(pe);
  }), Qs(() => {
    Ge || Ae();
  }), an(() => {
    if (ue && ue.destroy(), oe && oe.destroy(), Ie == null || Ie.disconnect(), Kn = Kn.filter((D) => D !== pe), ye && $ && $ instanceof HTMLElement) {
      Li && pe && pe instanceof HTMLDialogElement && pe.close();
      try {
        $.focus({ preventScroll: !0 });
      } catch {
      }
    }
  });
  function wt(D) {
    Ir[D ? "unshift" : "push"](() => {
      be = D, e(8, be);
    });
  }
  function ot(D) {
    Ir[D ? "unshift" : "push"](() => {
      Fe = D, e(9, Fe);
    });
  }
  function At(D) {
    Ir[D ? "unshift" : "push"](() => {
      ze = D, e(7, ze);
    });
  }
  function it(D) {
    Ir[D ? "unshift" : "push"](() => {
      pe = D, e(6, pe);
    });
  }
  function me(D) {
    Ir[D ? "unshift" : "push"](() => {
      be = D, e(8, be);
    });
  }
  function ne(D) {
    Ir[D ? "unshift" : "push"](() => {
      Fe = D, e(9, Fe);
    });
  }
  function at(D) {
    Ir[D ? "unshift" : "push"](() => {
      ze = D, e(7, ze);
    });
  }
  function Ve(D) {
    Ir[D ? "unshift" : "push"](() => {
      pe = D, e(6, pe);
    });
  }
  return t.$$set = (D) => {
    "ownerNode" in D && e(31, z = D.ownerNode), "data" in D && e(0, N = D.data), "internalId" in D && e(32, W = D.internalId), "parentComponentContext" in D && e(33, ie = D.parentComponentContext);
  }, t.$$.update = () => {
    var D, jt, gt, kt, St;
    t.$$.dirty[0] & /*componentContext, data*/
    5 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && (ue && ue.destroy(), e(2, ue = ie.produceChildContext(N.div || {}, { isTooltipRoot: !0 })), N.substrate_div && e(14, oe = ie.produceChildContext(N.substrate_div, { isTooltipRoot: !0 }))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && G(e(20, n = ie.getDerivedFromVars(N.position))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && k(e(19, o = ie.getDerivedFromVars((jt = (D = N.offset) == null ? void 0 : D.x) == null ? void 0 : jt.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && h(e(18, i = ie.getDerivedFromVars((kt = (gt = N.offset) == null ? void 0 : gt.y) == null ? void 0 : kt.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && se(e(17, s = ie.getDerivedFromVars(N.animation_in))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && fe(e(16, a = ie.getDerivedFromVars(N.animation_out))), t.$$.dirty[0] & /*$animationIn*/
    32 && (l = Ai() ? 0 : Xl(qi(P || Vi))), t.$$.dirty[0] & /*$animationOut*/
    16 && (u = Ai() ? 0 : Xl(qi(L || Vi))), t.$$.dirty[0] & /*data*/
    1 && (((St = N.mode) == null ? void 0 : St.type) === "non_modal" ? e(3, ye = !1) : e(3, ye = !0)), t.$$.dirty[0] & /*visible, modal*/
    10 && e(15, c = { visible: Ge, modal: ye });
  }, [
    N,
    Ge,
    ue,
    ye,
    L,
    P,
    pe,
    ze,
    be,
    Fe,
    Ze,
    ke,
    et,
    _e,
    oe,
    c,
    a,
    s,
    i,
    o,
    n,
    j,
    je,
    xe,
    qe,
    te,
    Xe,
    Le,
    tt,
    dt,
    lt,
    z,
    W,
    ie,
    wt,
    ot,
    At,
    it,
    me,
    ne,
    at,
    Ve
  ];
}
class i3 extends Lr {
  constructor(r) {
    super(), Or(
      this,
      r,
      o3,
      n3,
      Ar,
      {
        ownerNode: 31,
        data: 0,
        internalId: 32,
        parentComponentContext: 33
      },
      null,
      [-1, -1]
    );
  }
}
const s3 = "appkit-root_platform_desktop", l3 = "appkit-menu", a3 = "appkit-menu_visible", u3 = "appkit-menu__list", c3 = "appkit-menu__item", Cs = {
  root_platform_desktop: s3,
  menu: l3,
  menu_visible: a3,
  menu__list: u3,
  menu__item: c3
}, { window: Nf } = Io;
function zf(t, r, e) {
  const n = t.slice();
  return n[23] = r[e], n;
}
function f3(t) {
  let r = (
    /*item*/
    t[23].text + ""
  ), e;
  return {
    c() {
      e = Pn(r);
    },
    m(n, o) {
      q(n, e, o);
    },
    p(n, o) {
      o & /*items*/
      1 && r !== (r = /*item*/
      n[23].text + "") && Qn(e, r);
    },
    d(n) {
      n && J(e);
    }
  };
}
function Rf(t) {
  let r, e, n, o;
  return e = new rl({
    props: {
      componentContext: (
        /*parentComponentContext*/
        t[1]
      ),
      actions: (
        /*item*/
        t[23].actions || /*item*/
        t[23].action && [
          /*item*/
          t[23].action
        ]
      ),
      cls: Cs.menu__item + " " + /*itemMix*/
      t[10],
      customAction: (
        /*onItemAction*/
        t[14]
      ),
      $$slots: { default: [f3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      r = Se("li"), Bt(e.$$.fragment), n = lr();
    },
    m(i, s) {
      q(i, r, s), zt(e, r, null), pt(r, n), o = !0;
    },
    p(i, s) {
      const a = {};
      s & /*parentComponentContext*/
      2 && (a.componentContext = /*parentComponentContext*/
      i[1]), s & /*items*/
      1 && (a.actions = /*item*/
      i[23].actions || /*item*/
      i[23].action && [
        /*item*/
        i[23].action
      ]), s & /*$$scope, items*/
      67108865 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
    },
    i(i) {
      o || (B(e.$$.fragment, i), o = !0);
    },
    o(i) {
      Q(e.$$.fragment, i), o = !1;
    },
    d(i) {
      i && J(r), Rt(e);
    }
  };
}
function d3(t) {
  let r, e, n, o, i, s, a, l = nr(
    /*items*/
    t[0]
  ), u = [];
  for (let f = 0; f < l.length; f += 1)
    u[f] = Rf(zf(t, l, f));
  const c = (f) => Q(u[f], 1, 1, () => {
    u[f] = null;
  });
  return {
    c() {
      r = Se("div"), e = Se("ul");
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      g(e, "class", Cs.menu__list), g(r, "class", n = ht(
        "menu",
        Cs,
        /*mods*/
        t[7]
      ) + " " + /*$isDesktop*/
      (t[8] ? vr.root_platform_desktop : "") + " " + /*popupMix*/
      t[9]), M(
        r,
        "top",
        /*menuY*/
        t[4]
      ), M(
        r,
        "left",
        /*menuX*/
        t[3]
      ), M(
        r,
        "width",
        /*menuWidth*/
        t[5]
      ), M(
        r,
        "height",
        /*menuHeight*/
        t[6]
      );
    },
    m(f, _) {
      q(f, r, _), pt(r, e);
      for (let h = 0; h < u.length; h += 1)
        u[h] && u[h].m(e, null);
      t[17](r), i = !0, s || (a = [
        He(
          Nf,
          "click",
          /*onWindowClick*/
          t[12]
        ),
        He(
          Nf,
          "resize",
          /*onWindowResize*/
          t[13]
        )
      ], s = !0);
    },
    p(f, [_]) {
      if (_ & /*parentComponentContext, items, itemMix, onItemAction*/
      17411) {
        l = nr(
          /*items*/
          f[0]
        );
        let h;
        for (h = 0; h < l.length; h += 1) {
          const m = zf(f, l, h);
          u[h] ? (u[h].p(m, _), B(u[h], 1)) : (u[h] = Rf(m), u[h].c(), B(u[h], 1), u[h].m(e, null));
        }
        for (or(), h = l.length; h < u.length; h += 1)
          c(h);
        ir();
      }
      (!i || _ & /*mods, $isDesktop*/
      384 && n !== (n = ht(
        "menu",
        Cs,
        /*mods*/
        f[7]
      ) + " " + /*$isDesktop*/
      (f[8] ? vr.root_platform_desktop : "") + " " + /*popupMix*/
      f[9])) && g(r, "class", n), _ & /*menuY*/
      16 && M(
        r,
        "top",
        /*menuY*/
        f[4]
      ), _ & /*menuX*/
      8 && M(
        r,
        "left",
        /*menuX*/
        f[3]
      ), _ & /*menuWidth*/
      32 && M(
        r,
        "width",
        /*menuWidth*/
        f[5]
      ), _ & /*menuHeight*/
      64 && M(
        r,
        "height",
        /*menuHeight*/
        f[6]
      );
    },
    i(f) {
      if (!i) {
        for (let _ = 0; _ < l.length; _ += 1)
          B(u[_]);
        f && eo(() => {
          i && (o || (o = tu(r, If, { y: 20 }, !0)), o.run(1));
        }), i = !0;
      }
    },
    o(f) {
      u = u.filter(Boolean);
      for (let _ = 0; _ < u.length; _ += 1)
        Q(u[_]);
      f && (o || (o = tu(r, If, { y: 20 }, !1)), o.run(0)), i = !1;
    },
    d(f) {
      f && J(r), nn(u, f), t[17](null), f && o && o.end(), s = !1, Hr(a);
    }
  };
}
function _3(t, r, e) {
  let n, o, { ownerNode: i } = r, { items: s } = r, { parentComponentContext: a } = r;
  const l = Dr(Yr), u = l.getCustomization("menuPopupClass") || "", c = l.getCustomization("menuItemClass") || "", f = l.isDesktop;
  bn(t, f, (j) => e(8, o = j));
  const _ = Date.now(), h = Xg();
  let m, p = !1, k = "", w = "", O = "", G = "", L = null;
  function ee() {
    if (!m || !i)
      return;
    const j = m.parentElement;
    if (!j)
      return;
    const z = i.getBoundingClientRect(), N = m.getBoundingClientRect(), W = j.getBoundingClientRect(), ie = window.innerWidth, de = window.innerHeight;
    let je = 0, Ee = 0, pe = N.width, ze = N.height;
    je = z.left - W.left, Ee = z.bottom - W.top, je + pe > ie && (je = ie - pe), je < 0 && (je = 0), Ee + ze > de && (z.top - W.top - ze > 0 ? Ee = z.top - W.top - ze : Ee = de - ze), Ee < 0 && (Ee = 0), e(3, k = `${je}px`), e(4, w = `${Ee}px`), e(5, O = ""), e(6, G = ""), e(16, p = !0), typeof ResizeObserver < "u" && !L && (L = new ResizeObserver(() => {
      requestAnimationFrame(ee);
    }), L.observe(m));
  }
  function fe(j) {
    Date.now() - _ < 100 || j.composedPath().includes(m) || h("close");
  }
  function P() {
    ee();
  }
  function Z() {
    return h("close"), !0;
  }
  to(() => {
    if (l.tooltipRoot) {
      const j = window.getComputedStyle(m);
      e(2, m.style.fontSize = j.fontSize, m), e(2, m.style.fontFamily = j.fontFamily, m), e(2, m.style.lineHeight = j.lineHeight, m), l.tooltipRoot.appendChild(m);
    }
  }), Qs(() => {
    p || ee();
  }), an(() => {
    L == null || L.disconnect();
  });
  function se(j) {
    Ir[j ? "unshift" : "push"](() => {
      m = j, e(2, m);
    });
  }
  return t.$$set = (j) => {
    "ownerNode" in j && e(15, i = j.ownerNode), "items" in j && e(0, s = j.items), "parentComponentContext" in j && e(1, a = j.parentComponentContext);
  }, t.$$.update = () => {
    t.$$.dirty & /*visible*/
    65536 && e(7, n = { visible: p });
  }, [
    s,
    a,
    m,
    k,
    w,
    O,
    G,
    n,
    o,
    u,
    c,
    f,
    fe,
    P,
    Z,
    i,
    p,
    se
  ];
}
class p3 extends Lr {
  constructor(r) {
    super(), Or(this, r, _3, d3, Ar, {
      ownerNode: 15,
      items: 0,
      parentComponentContext: 1
    });
  }
}
const { Map: g3 } = Io;
function Of(t, r, e) {
  const n = t.slice();
  return n[134] = r[e], n;
}
function Lf(t) {
  let r, e, n, o, i, s, a, l, u, c;
  e = new h2({
    props: { svgFiltersMap: (
      /*svgFiltersMap*/
      t[5]
    ) }
  }), o = new qn({
    props: {
      componentContext: (
        /*rootStateComponentContext*/
        t[6]
      )
    }
  });
  let f = (
    /*tooltips*/
    t[3] && Bf(t)
  ), _ = (
    /*menu*/
    t[4] && Wf(t)
  );
  return {
    c() {
      r = Se("div"), Bt(e.$$.fragment), n = lr(), Bt(o.$$.fragment), i = lr(), f && f.c(), s = lr(), _ && _.c(), g(r, "class", a = vr.root + /*$isDesktop*/
      (t[7] ? ` ${vr.root_platform_desktop}` : "") + /*mix*/
      (t[0] ? ` ${/*mix*/
      t[0]}` : "")), g(
        r,
        "dir",
        /*$directionStore*/
        t[8]
      );
    },
    m(h, m) {
      q(h, r, m), zt(e, r, null), pt(r, n), zt(o, r, null), pt(r, i), f && f.m(r, null), pt(r, s), _ && _.m(r, null), l = !0, u || (c = He(r, "touchstart", y3, { passive: !0 }), u = !0);
    },
    p(h, m) {
      const p = {};
      m[0] & /*svgFiltersMap*/
      32 && (p.svgFiltersMap = /*svgFiltersMap*/
      h[5]), e.$set(p);
      const k = {};
      m[0] & /*rootStateComponentContext*/
      64 && (k.componentContext = /*rootStateComponentContext*/
      h[6]), o.$set(k), /*tooltips*/
      h[3] ? f ? (f.p(h, m), m[0] & /*tooltips*/
      8 && B(f, 1)) : (f = Bf(h), f.c(), B(f, 1), f.m(r, s)) : f && (or(), Q(f, 1, 1, () => {
        f = null;
      }), ir()), /*menu*/
      h[4] ? _ ? (_.p(h, m), m[0] & /*menu*/
      16 && B(_, 1)) : (_ = Wf(h), _.c(), B(_, 1), _.m(r, null)) : _ && (or(), Q(_, 1, 1, () => {
        _ = null;
      }), ir()), (!l || m[0] & /*$isDesktop, mix*/
      129 && a !== (a = vr.root + /*$isDesktop*/
      (h[7] ? ` ${vr.root_platform_desktop}` : "") + /*mix*/
      (h[0] ? ` ${/*mix*/
      h[0]}` : ""))) && g(r, "class", a), (!l || m[0] & /*$directionStore*/
      256) && g(
        r,
        "dir",
        /*$directionStore*/
        h[8]
      );
    },
    i(h) {
      l || (B(e.$$.fragment, h), B(o.$$.fragment, h), B(f), B(_), l = !0);
    },
    o(h) {
      Q(e.$$.fragment, h), Q(o.$$.fragment, h), Q(f), Q(_), l = !1;
    },
    d(h) {
      h && J(r), Rt(e), Rt(o), f && f.d(), _ && _.d(), u = !1, c();
    }
  };
}
function Bf(t) {
  let r = [], e = new g3(), n, o, i = nr(
    /*tooltips*/
    t[3]
  );
  const s = (a) => (
    /*item*/
    a[134].internalId
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = Of(t, i, a), u = s(l);
    e.set(u, r[a] = Hf(u, l));
  }
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      n = Kt();
    },
    m(a, l) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(a, l);
      q(a, n, l), o = !0;
    },
    p(a, l) {
      l[0] & /*tooltips, rootStateComponentContext*/
      72 && (i = nr(
        /*tooltips*/
        a[3]
      ), or(), r = pd(r, l, s, 1, a, i, e, n.parentNode, _d, Hf, n, Of), ir());
    },
    i(a) {
      if (!o) {
        for (let l = 0; l < i.length; l += 1)
          B(r[l]);
        o = !0;
      }
    },
    o(a) {
      for (let l = 0; l < r.length; l += 1)
        Q(r[l]);
      o = !1;
    },
    d(a) {
      a && J(n);
      for (let l = 0; l < r.length; l += 1)
        r[l].d(a);
    }
  };
}
function Hf(t, r) {
  let e, n, o;
  return n = new i3({
    props: {
      ownerNode: (
        /*item*/
        r[134].ownerNode
      ),
      data: (
        /*item*/
        r[134].desc
      ),
      internalId: (
        /*item*/
        r[134].internalId
      ),
      parentComponentContext: (
        /*item*/
        r[134].componentContext || /*rootStateComponentContext*/
        r[6]
      )
    }
  }), {
    key: t,
    first: null,
    c() {
      e = Kt(), Bt(n.$$.fragment), this.first = e;
    },
    m(i, s) {
      q(i, e, s), zt(n, i, s), o = !0;
    },
    p(i, s) {
      r = i;
      const a = {};
      s[0] & /*tooltips*/
      8 && (a.ownerNode = /*item*/
      r[134].ownerNode), s[0] & /*tooltips*/
      8 && (a.data = /*item*/
      r[134].desc), s[0] & /*tooltips*/
      8 && (a.internalId = /*item*/
      r[134].internalId), s[0] & /*tooltips, rootStateComponentContext*/
      72 && (a.parentComponentContext = /*item*/
      r[134].componentContext || /*rootStateComponentContext*/
      r[6]), n.$set(a);
    },
    i(i) {
      o || (B(n.$$.fragment, i), o = !0);
    },
    o(i) {
      Q(n.$$.fragment, i), o = !1;
    },
    d(i) {
      i && J(e), Rt(n, i);
    }
  };
}
function Wf(t) {
  let r, e;
  return r = new p3({
    props: {
      ownerNode: (
        /*menu*/
        t[4].node
      ),
      items: (
        /*menu*/
        t[4].items
      ),
      parentComponentContext: (
        /*menu*/
        t[4].componentContext || /*rootStateComponentContext*/
        t[6]
      )
    }
  }), r.$on(
    "close",
    /*close_handler*/
    t[45]
  ), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      zt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*menu*/
      16 && (i.ownerNode = /*menu*/
      n[4].node), o[0] & /*menu*/
      16 && (i.items = /*menu*/
      n[4].items), o[0] & /*menu, rootStateComponentContext*/
      80 && (i.parentComponentContext = /*menu*/
      n[4].componentContext || /*rootStateComponentContext*/
      n[6]), r.$set(i);
    },
    i(n) {
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function h3(t) {
  let r, e, n = !/*hasError*/
  t[1] && !/*hasIdError*/
  t[2] && /*rootStateComponentContext*/
  t[6] && Lf(t);
  return {
    c() {
      n && n.c(), r = Kt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, i) {
      !/*hasError*/
      o[1] && !/*hasIdError*/
      o[2] && /*rootStateComponentContext*/
      o[6] ? n ? (n.p(o, i), i[0] & /*hasError, hasIdError, rootStateComponentContext*/
      70 && B(n, 1)) : (n = Lf(o), n.c(), B(n, 1), n.m(r.parentNode, r)) : n && (or(), Q(n, 1, 1, () => {
        n = null;
      }), ir());
    },
    i(o) {
      e || (B(n), e = !0);
    },
    o(o) {
      Q(n), e = !1;
    },
    d(o) {
      o && J(r), n && n.d(o);
    }
  };
}
let pa = Ao(!0), ls = 0;
function Uf() {
  pa.set(!1);
}
function Gf() {
  pa.set(!0);
}
const m3 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean"]), b3 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean", "array", "dict"]);
function No(t, r) {
  if (t && r)
    return new Map([...t, ...r]);
  if (t)
    return t;
  if (r)
    return r;
}
function y3() {
}
function w3(t, r, e) {
  var Kr, on, zn;
  let n, o, i, s, { id: a } = r, { json: l = {} } = r, { platform: u = "auto" } = r, { theme: c = "system" } = r, { globalVariablesController: f = void 0 } = r, { mix: _ = "" } = r, { customization: h = {} } = r, { builtinProtocols: m = ["http", "https", "tel", "mailto", "intent"] } = r, { extensions: p = /* @__PURE__ */ new Map() } = r, { onError: k = void 0 } = r, { onStat: w = void 0 } = r, { onSubmit: O = void 0 } = r, { onCustomAction: G = void 0 } = r, { onComponent: L = void 0 } = r, { typefaceProvider: ee = (y) => "" } = r, { fetchInit: fe = {} } = r, { tooltipRoot: P = void 0 } = r, { customComponents: Z = void 0 } = r, { direction: se = "ltr" } = r, { store: j = void 0 } = r, { pagerChildrenClipEnabled: z = !0 } = r, { pagerMouseDragEnabled: N = !0 } = r, { weekStartDay: W = 0 } = r, { videoPlayerProvider: ie = void 0 } = r, { devtoolCreateHierarchy: de = "lazy" } = r, je = !0, Ee = Ao(u === "desktop");
  if (bn(t, Ee, (y) => e(7, i = y)), u === "auto" && typeof matchMedia < "u") {
    const y = matchMedia("(any-pointer: coarse)");
    Ee.set(!y.matches), y.addListener(() => {
      Ee.set(!y.matches);
    });
  }
  let pe = "light", ze = null;
  const be = Ao(se === "rtl" ? "rtl" : "ltr");
  bn(t, be, (y) => e(8, s = y));
  function Fe() {
    c !== "system" || !ze || e(41, pe = ze.matches ? "dark" : "light");
  }
  function Ge(y) {
    e(12, c = y);
  }
  function Ze() {
    return qe;
  }
  function ke() {
    return te;
  }
  function et(y) {
    e(11, l = y);
  }
  function _e(y) {
    return bt(y, D);
  }
  const Ie = new Set(m);
  let ue = !1, oe = !1;
  a || (oe = !0, D(K(new Error('"id" prop is required'))));
  const ye = { stateChange: !1 }, $ = f || new Qd(), Ae = $.getLastAddedVariableStore(), xe = $.getVariables(), qe = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map();
  let tt = null;
  const dt = /* @__PURE__ */ new Map();
  let lt = 0, wt = [];
  const ot = /* @__PURE__ */ new Set();
  let At;
  const it = [];
  function me(y) {
    return h == null ? void 0 : h[y];
  }
  function ne(y, E, { additionalVars: S, keepComplex: x = !1, customFunctions: R, emptyVarsError: Qe, maxDepth: Ce } = {}) {
    var tr;
    if (!E)
      return Go(E);
    const Zt = No(te, S), yt = Ff(E, y, j, W, Ce);
    if (!yt.vars.length)
      if (yt.hasExpression) {
        const Et = yt.applyVars(Zt, R);
        if (!((tr = Et.usedVars) != null && tr.size))
          return Qe && Qe(), Go(Et.result);
      } else
        return Qe && Qe(), Go(E);
    const Ke = yt.vars.map((Et) => Zt.get(Et) || rr(Et)).filter(To);
    return Ao(void 0, (Et) => {
      const Cr = /* @__PURE__ */ new Map();
      let Vr;
      const sn = () => {
        var Cn;
        const ln = yt.applyVars(Zt, R, x);
        for (const [un, Dn] of Cr)
          (Cn = ln.usedVars) != null && Cn.has(un) || (Dn(), Cr.delete(un));
        if (ln.usedVars) {
          for (const un of ln.usedVars)
            if (!Cr.has(un)) {
              let Dn = !0;
              Cr.set(un, un.subscribe(() => {
                Dn || Et(sn()), Dn = !1;
              }));
            }
        }
        return ln.result;
      };
      return Vr = Ti(Ke, sn).subscribe((ln) => {
        Et(ln);
      }), () => {
        Vr == null || Vr();
        for (const [ln, Cn] of Cr)
          Cn();
      };
    });
  }
  function at(y, E, S, x = !1, R = void 0) {
    const Qe = Ff(E, y, j, W);
    if (!Qe.hasExpression)
      return E;
    const Ce = No(te, S);
    return Qe.applyVars(Ce, R, x).result;
  }
  function Ve(y, E, S) {
    const x = /* @__PURE__ */ new Map(), R = vs(y, "dict", E);
    x.set(y, R);
    const Qe = vs("index", "integer", S);
    return x.set("index", Qe), x;
  }
  function D(y) {
    k ? k({ error: y }) : (y == null ? void 0 : y.level) === "warn" ? console.warn(y) : console.error(y);
  }
  function jt(y, E) {
    w && w({ type: y, action: E });
  }
  function gt(y) {
    return y in n;
  }
  function kt(y, E) {
    if (!y)
      return { json: y, templateContext: E };
    const S = /* @__PURE__ */ new Set([y.type]);
    for (; y.type && y.type in n; ) {
      if ({ json: y, templateContext: E } = m2(y, E, n, D), S.has(y.type))
        return { json: y, templateContext: E };
      S.add(y.type);
    }
    return { json: y, templateContext: E };
  }
  function St({ type: y, node: E, json: S, origJson: x, templateContext: R, componentContext: Qe, devapi: Ce }) {
    L && L({
      type: y,
      node: E,
      json: S,
      origJson: x,
      templateContext: R,
      componentContext: Qe,
      devapi: Ce
    });
  }
  let rt = 0;
  function Y(y) {
    return `${a}-${rt++}`;
  }
  function Vt(y) {
    return `divkit-${Y()}`;
  }
  let Dt = {}, Gt = {};
  function Jt(y, E) {
    const S = `${y}:${E}`;
    if (Gt[S] = Gt[S] || 0, ++Gt[S], Dt[S])
      return Dt[S];
    const x = `${Y()}-svg-filter`;
    return e(5, Dt = { ...Dt, [S]: x }), x;
  }
  function ve(y, E) {
    if (!y)
      return;
    const S = `${y}:${E}`;
    Gt[S] && --Gt[S] === 0 && e(5, Dt = Object.keys(Dt).reduce(
      (x, R) => (Gt[R] && (x[R] = Dt[R]), x),
      {}
    ));
  }
  const We = Y() + "-id-", ft = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map();
  function T(y) {
    return We + y;
  }
  function Oe(y, E) {
    let S = ft.get(y) || [];
    return ft.has(y) || ft.set(y, S), S.push(E), () => {
      S = S.filter((R) => R !== E), S.length || ft.delete(y);
      const x = T(y);
      Me.has(x) && Me.delete(x);
    };
  }
  function xt(y) {
    var S, x;
    const E = (x = (S = ft.get(y)) == null ? void 0 : S[0]) == null ? void 0 : x.node();
    if (E) {
      const R = T(y), Qe = Me.get(R);
      return Qe && Qe !== E && Qe.removeAttribute("id"), E.setAttribute("id", R), Me.set(R, E), R;
    }
    return "";
  }
  async function ae(y, E) {
    var Ce, Zt;
    if (!y)
      throw new Error("Missing state id");
    let S = y.split("/");
    const x = S.length % 2 === 0 && N2(E);
    let R = x || tn;
    const Qe = (E == null ? void 0 : E.logError) || D;
    if (!x)
      if ((Ce = R.states) != null && Ce.root) {
        const yt = R.states.root;
        if (yt.length > 1) {
          Qe(K(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: y } }));
          return;
        }
        if (R = await yt[0](S[0]), !R)
          return;
        S = S.slice(1);
      } else
        return;
    for (let yt = 0; yt < S.length; yt += 2) {
      const Ke = S[yt], tr = S[yt + 1];
      if ((Zt = R.states) != null && Zt[Ke]) {
        const Et = R.states[Ke];
        if (Et.length > 1) {
          Qe(K(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: y } }));
          return;
        }
        if (R = await Et[0](tr), !R)
          return;
      } else
        return;
    }
  }
  async function mt(y, E, S) {
    var Cr;
    const x = (y == null ? void 0 : y.logError) || D;
    if (!B2(E)) {
      x(K(new Error("Incorrect submit action"), {
        additional: { containerId: E.container_id }
      }));
      return;
    }
    const R = ft.get(E.container_id);
    if ((R == null ? void 0 : R.length) !== 1) {
      x(K(new Error("Error resolving container. Found multiple elements that respond to id"), {
        additional: { containerId: E.container_id }
      }));
      return;
    }
    const Qe = R[0].context(), Ce = {};
    if (Qe.variables)
      for (const [Vr, sn] of Qe.variables) {
        const ln = sn.getValue();
        typeof ln == "bigint" ? Ce[Vr] = Number(ln) : Ce[Vr] = ln;
      }
    if (O) {
      Promise.resolve().then(() => O(E, Ce)).then(() => {
        It(S.on_success_actions, { componentContext: y });
      }).catch(() => {
        It(S.on_fail_actions, { componentContext: y });
      });
      return;
    }
    const Zt = Object.keys(Ce).length > 0, yt = (E.request.method || "post").toLowerCase();
    if ((yt === "get" || yt === "head") && Zt) {
      x(K(new Error("Can't send variables using the get/head method."), { additional: { url: E.request.url } }));
      return;
    }
    let Ke = !1;
    const tr = [];
    (Cr = E.request.headers) == null || Cr.forEach((Vr) => {
      tr.push([Vr.name, Vr.value]), Vr.name.toLowerCase() === "content-type" && (Ke = !0);
    }), Ke || tr.push(["Content-Type", "application/json"]);
    let Et;
    typeof fe == "function" ? Et = fe(E.request.url) : Et = fe, fetch(E.request.url, {
      ...Et,
      method: yt,
      headers: tr,
      body: Zt ? JSON.stringify(Ce) : void 0
    }).then((Vr) => {
      if (!Vr.ok)
        throw new Error("Response is not ok");
      It(S.on_success_actions, { componentContext: y });
    }).catch((Vr) => {
      x(K(new Error("Failed to submit"), {
        additional: {
          url: E.request.url,
          originalError: Vr
        }
      })), It(S.on_fail_actions, { componentContext: y });
    });
  }
  function Wt(y, E) {
    var R, Qe, Ce, Zt, yt, Ke, tr, Et, Cr;
    const S = (y == null ? void 0 : y.logError) || D, x = E.id && ct(E.id);
    if (!x) {
      S(K(new Error('Missing component for "scroll_to" action'), { additional: { id: E.id } }));
      return;
    }
    if (E.animated !== void 0 && typeof E.animated != "boolean") {
      S(K(new Error('Missing properties for "scroll_to" action'), { additional: { id: E.id } }));
      return;
    }
    switch ((R = E.destination) == null ? void 0 : R.type) {
      case "index": {
        typeof E.destination.value == "number" && x.setCurrentItem(E.destination.value, (Qe = E.animated) != null ? Qe : !0);
        break;
      }
      case "offset": {
        typeof E.destination.value == "number" && ((Zt = x.scrollToPosition) == null || Zt.call(x, E.destination.value, (Ce = E.animated) != null ? Ce : !0));
        break;
      }
      case "start": {
        (Ke = x.scrollToStart) == null || Ke.call(x, (yt = E.animated) != null ? yt : !0);
        break;
      }
      case "end": {
        (Et = x.scrollToEnd) == null || Et.call(x, (tr = E.animated) != null ? tr : !0);
        break;
      }
      default:
        S(K(new Error('Unknown destination for "scroll_to" action'), {
          additional: {
            id: E.id,
            destination: (Cr = E.destination) == null ? void 0 : Cr.type
          }
        }));
    }
  }
  function Ft(y, E) {
    var R;
    const S = (y == null ? void 0 : y.logError) || D, x = E.id && ct(E.id);
    if (!x) {
      S(K(new Error('Missing component for "scroll_by" action'), { additional: { id: E.id } }));
      return;
    }
    if (typeof E.item_count != "number" && E.item_count !== void 0 || typeof E.offset != "number" && E.offset !== void 0 || E.overflow !== void 0 && E.overflow !== "clamp" && E.overflow !== "ring" || E.animated !== void 0 && typeof E.animated != "boolean") {
      S(K(new Error('Missing properties for "scroll_by" action'), { additional: { id: E.id } }));
      return;
    }
    (R = x.scrollCombined) == null || R.call(x, {
      step: E.item_count,
      offset: E.offset,
      overflow: E.overflow,
      animated: E.animated
    });
  }
  function ar(y, E, { item: S, step: x, overflow: R, animated: Qe }) {
    var tr, Et, Cr, Vr, sn;
    if (!E)
      throw new Error(`Missing id for "${y}" action`);
    const Ce = Number(S);
    if (y === "set_current_item" && Number.isNaN(Ce))
      throw new Error(`Incorrect item for "${y}" action`);
    let Zt = Number(x);
    if (!x && (y === "set_previous_item" || y === "set_next_item") && (Zt = 1), !x && (y === "scroll_backward" || y === "scroll_forward" || y === "scroll_to_position") || Number.isNaN(Zt))
      throw new Error(`Incorrect step value for "${y}" action`);
    if (R && R !== "clamp" && R !== "ring")
      throw new Error(`Incorrect overflow value for "${y}" action`);
    R = R || "clamp";
    const yt = Qe === null || Qe !== "0" && Qe !== "false", Ke = ct(E);
    if (Ke)
      switch (y) {
        case "set_current_item":
          Ke.setCurrentItem(Ce, yt);
          return;
        case "set_previous_item":
          Ke.setPreviousItem(Zt, R, yt);
          return;
        case "set_next_item":
          Ke.setNextItem(Zt, R, yt);
          return;
        case "scroll_to_start":
          (tr = Ke.scrollToStart) == null || tr.call(Ke, yt);
          return;
        case "scroll_to_end":
          (Et = Ke.scrollToEnd) == null || Et.call(Ke, yt);
          return;
        case "scroll_backward":
          (Cr = Ke.scrollCombined) == null || Cr.call(Ke, {
            offset: -Zt,
            overflow: R,
            animated: yt
          });
          return;
        case "scroll_forward":
          (Vr = Ke.scrollCombined) == null || Vr.call(Ke, {
            offset: Zt,
            overflow: R,
            animated: yt
          });
          return;
        case "scroll_to_position":
          (sn = Ke.scrollToPosition) == null || sn.call(Ke, Zt, yt);
          return;
      }
  }
  function Te(y, E, S) {
    const x = (S == null ? void 0 : S.logError) || D;
    if (y) {
      const R = ct(y);
      R ? E === "start" ? R.start() : E === "pause" ? R.pause() : x(K(new Error("Unknown video action"), { additional: { id: y, action: E } })) : x(K(new Error("Video component is not found"), { additional: { id: y, action: E } }));
    } else
      x(K(new Error("Missing id in video action"), { additional: { action: E } }));
  }
  function bt(y, E, S) {
    var x, R, Qe;
    if (y.templates)
      for (const Ce in y.templates)
        n.hasOwnProperty(Ce) || (n[Ce] = y.templates[Ce]);
    if (Array.isArray((x = y.patch) == null ? void 0 : x.changes)) {
      if (y.patch.mode === "transactional") {
        const Ce = y.patch.changes.find((Zt) => {
          const yt = mr.get(Zt.id);
          if (!yt)
            return !0;
          const Ke = Array.isArray(Zt.items) ? Zt.items.length : 0;
          return !!(yt.isSingleMode && Ke !== 1);
        });
        if (Ce)
          return E(K(new Error("Skipping transactional, child is not found or broken"), { additional: { url: S, id: Ce.id } })), It((R = y.patch) == null ? void 0 : R.on_failed_actions), !1;
      }
      return y.patch.changes.forEach((Ce) => {
        const Zt = mr.get(Ce.id);
        Zt && Zt.replaceWith(Ce.id, Ce.items);
      }), It((Qe = y.patch) == null ? void 0 : Qe.on_applied_actions), !0;
    }
    return !1;
  }
  function er(y, E, S) {
    const x = (S == null ? void 0 : S.logError) || D;
    if (y) {
      let R;
      typeof fe == "function" ? R = fe(y) : R = fe, fetch(y, R).then((Qe) => {
        if (!Qe.ok)
          throw new Error("Response is not ok");
        return Qe.json();
      }).then((Qe) => {
        if (!Qe) {
          x(K(new Error("Incorrect patch"), { additional: { url: y } })), It(E == null ? void 0 : E.on_fail_actions, { componentContext: S });
          return;
        }
        bt(Qe, x, y) ? It(E == null ? void 0 : E.on_success_actions, { componentContext: S }) : It(E == null ? void 0 : E.on_fail_actions, { componentContext: S });
      }).catch((Qe) => {
        x(K(new Error("Failed to download the patch"), { additional: { url: y, originalError: Qe } })), It(E == null ? void 0 : E.on_fail_actions, { componentContext: S });
      });
    } else
      x(K(new Error("Missing url in download action"), { additional: { url: y } }));
  }
  function Qt(y, E, S) {
    var Zt;
    const x = (S == null ? void 0 : S.logError) || D;
    if (!y) {
      x(K(new Error("Missing id in show_tooltip action")));
      return;
    }
    const R = Fr.get(y);
    if (!R) {
      x(K(new Error("Tooltip with the provided id is not found"), { additional: { id: y } }));
      return;
    }
    if (E !== "true" && E !== !0 && ot.has(y))
      return;
    ot.add(y);
    const Qe = {
      internalId: ++lt,
      ownerNode: R.onwerNode,
      desc: R.tooltip,
      timeoutId: 0,
      componentContext: S
    };
    e(3, wt = [...wt, Qe]);
    const Ce = (Zt = R.tooltip.duration) != null ? Zt : 5e3;
    Ce && (Qe.timeoutId = window.setTimeout(
      () => {
        Qe.timeoutId = 0, e(3, wt = wt.filter((yt) => yt.internalId !== Qe.internalId));
      },
      Ce
    ));
  }
  function Xt(y, E) {
    const S = (E == null ? void 0 : E.logError) || D;
    if (!y) {
      S(K(new Error("Missing id in hide_tooltip action")));
      return;
    }
    e(3, wt = wt.filter((x) => {
      const R = x.desc.id !== y;
      return !R && x.timeoutId && (clearTimeout(x.timeoutId), x.timeoutId = null), R;
    }));
  }
  function ur(y, E, S, x, R) {
    const Qe = (y == null ? void 0 : y.logError) || D;
    if (!j) {
      Qe(K(new Error("Store is not configured")));
      return;
    }
    let Ce = S;
    if (!E || !Ce || !x || !R) {
      Qe(K(new Error("Missing required params for set_stored_value")));
      return;
    }
    if (!b3.has(x)) {
      Qe(K(new Error("Incorrect stored type")));
      return;
    }
    if (x === "boolean" && (Ce = Ce === "true" || Ce === "1"), j.set)
      j.set(E, x, Ce, Number(R));
    else if (j.setValue) {
      if (!m3.has(x)) {
        Qe(K(new Error("Incorrect stored type")));
        return;
      }
      if (typeof Ce != "string" && typeof Ce != "number" && typeof Ce != "boolean") {
        Qe(K(new Error("Incorrect stored value")));
        return;
      }
      (x === "integer" || x === "number") && (Ce = Number(Ce)), j.setValue(E, x, Ce, Number(R));
    }
  }
  function jr(y) {
    Yt(at(D, y, void 0, !0), y);
  }
  async function Yt(y, E, S) {
    var Zt, yt;
    const x = y.scope_id, R = (S == null ? void 0 : S.logError) || D;
    if (x) {
      const Ke = zr.get(x);
      if (Ke && (Ke == null ? void 0 : Ke.size) > 1)
        R(K(new Error(`Ambiguous scope id. There are ${Ke.size} divs with id '${x}'`), { additional: { count: Ke.size, scopeId: x } }));
      else if ((Ke == null ? void 0 : Ke.size) === 1) {
        const tr = Ke.values().next().value;
        tr && (S = tr);
      } else {
        R(K(new Error("The scope with the specified scope_id is missing"), { additional: { scopeId: x } }));
        return;
      }
    }
    const Qe = y.url ? String(y.url) : "", Ce = y.typed;
    if (Ns(y)) {
      if (Ce)
        switch (Ce.type) {
          case "set_variable": {
            const { variable_name: Ke, value: tr } = Ce;
            if (Ke && tr) {
              const Et = (S == null ? void 0 : S.getVariable(Ke)) || te.get(Ke);
              Et ? Et.getType() === tr.type ? Et.setValue(tr.value) : R(K(new Error("Trying to set value with invalid type"), { additional: { name: Ke, type: tr.type } })) : R(K(new Error("Cannot find variable"), { additional: { name: Ke } }));
            } else
              R(K(new Error("Incorrect set_variable action"), { additional: { name: Ke } }));
            break;
          }
          case "array_insert_value":
            V2(S, te, R, Ce);
            break;
          case "array_remove_value":
            F2(S, te, R, Ce);
            break;
          case "array_set_value":
            I2(S, te, R, Ce);
            break;
          case "copy_to_clipboard":
            T2(R, Ce);
            break;
          case "focus_element": {
            const Ke = Ce.element_id && pr.get(Ce.element_id);
            Ke ? Ke.focus() : R(K(new Error("Incorrect focus_element action"), {
              additional: { elementId: Ce.element_id }
            }));
            break;
          }
          case "clear_focus": {
            try {
              document.activeElement instanceof HTMLElement && document.activeElement.blur();
            } catch {
            }
            break;
          }
          case "dict_set_value": {
            D2(S, te, R, Ce);
            break;
          }
          case "animator_start": {
            const Ke = Ce.animator_id && (S == null ? void 0 : S.getAnimator(Ce.animator_id));
            if (!Ke) {
              R(K(new Error("Missing animator"), {
                additional: { animator_id: Ce.animator_id }
              }));
              return;
            }
            const { duration: tr, start_delay: Et, interpolator: Cr, direction: Vr, repeat_count: sn, start_value: ln, end_value: Cn } = Ce, un = S ? S.getJsonWithVars(Ke) : at(D, Ke), Dn = {
              ...un,
              end_actions: Ke.end_actions,
              cancel_actions: Ke.cancel_actions,
              duration: tr !== void 0 ? tr : un.duration,
              start_delay: Et !== void 0 ? Et : un.start_delay,
              interpolator: Cr !== void 0 ? Cr : un.interpolator,
              direction: Vr !== void 0 ? Vr : un.direction,
              repeat_count: sn !== void 0 ? sn : un.repeat_count,
              start_value_typed: ln,
              end_value_typed: Cn
            }, Rn = Ke.variable_name && ((S == null ? void 0 : S.getVariable(Ke.variable_name)) || te.get(Ke.variable_name));
            if (!Rn)
              return;
            const Sn = dt.get(Ke.id);
            Sn && Sn.stop();
            const Nt = P2(
              Dn,
              Rn,
              () => {
                dt.delete(Ke.id);
              },
              (b, V) => ((S == null ? void 0 : S.execAnyActions) || It)(b, V)
            );
            Nt && dt.set(Ke.id, Nt);
            break;
          }
          case "animator_stop": {
            const Ke = dt.get(Ce.animator_id);
            Ke && (Ke.stop(), dt.delete(Ce.animator_id));
            break;
          }
          case "show_tooltip": {
            Qt(Ce.id, Ce.multiple, S);
            break;
          }
          case "hide_tooltip": {
            Xt(Ce.id, S);
            break;
          }
          case "timer": {
            tt ? tt.execTimerAction(Ce.id, Ce.action) : R(K(new Error("Incorrect timer action"), {
              additional: {
                id: Ce.id,
                action: Ce.action
              }
            }));
            break;
          }
          case "download": {
            er(Ce.url, E.typed, S);
            break;
          }
          case "video": {
            Te(Ce.id, Ce.action, S);
            break;
          }
          case "set_stored_value": {
            ur(S, Ce.name, (Zt = Ce.value) == null ? void 0 : Zt.value, (yt = Ce.value) == null ? void 0 : yt.type, Ce.lifetime);
            break;
          }
          case "set_state": {
            await ae(Ce.state_id, S);
            break;
          }
          case "submit": {
            await mt(S, Ce, E.typed);
            break;
          }
          case "scroll_to": {
            Wt(S, Ce);
            break;
          }
          case "scroll_by": {
            Ft(S, Ce);
            break;
          }
          case "update_structure": {
            H2(S, te, R, Ce);
            break;
          }
          case "custom": {
            Tt({
              ...E,
              // todo remove in major release
              url: ""
            });
            break;
          }
          default:
            R(K(new Error("Unknown type of action"), { additional: { type: Ce.type } }));
        }
      else if (Qe)
        try {
          const Ke = Qe.replace(/div-action:\/\//, ""), tr = /([^?]+)\?(.+)/.exec(Ke);
          if (!tr)
            return;
          const Et = new URLSearchParams(tr[2]);
          switch (tr[1]) {
            case "set_state":
              await ae(Et.get("state_id"), S);
              break;
            case "set_current_item":
            case "set_previous_item":
            case "set_next_item":
            case "scroll_to_start":
            case "scroll_to_end":
            case "scroll_backward":
            case "scroll_forward":
            case "scroll_to_position":
              ar(tr[1], Et.get("id"), {
                item: Et.get("item"),
                step: Et.get("step"),
                overflow: Et.get("overflow"),
                animated: Et.get("animated")
              });
              break;
            case "set_variable":
              const Cr = Et.get("name"), Vr = Et.get("value");
              if (Cr && Vr !== null) {
                const Cn = (S == null ? void 0 : S.getVariable(Cr)) || te.get(Cr);
                Cn ? Cn.set(Vr) : R(K(new Error("Cannot find variable"), { additional: { name: Cr } }));
              } else
                R(K(new Error("Incorrect set_variable_action"), { additional: { url: Ke } }));
              break;
            case "timer":
              const sn = Et.get("action"), ln = Et.get("id");
              tt ? tt.execTimerAction(ln, sn) : R(K(new Error("Incorrect timer action"), {
                additional: { id: ln, action: sn }
              }));
              break;
            case "video":
              Te(Et.get("id"), Et.get("action"), S);
              break;
            case "download":
              er(Et.get("url"), E.download_callbacks, S);
              break;
            case "show_tooltip":
              Qt(Et.get("id"), Et.get("multiple"), S);
              break;
            case "hide_tooltip":
              Xt(Et.get("id"), S);
              break;
            case "set_stored_value": {
              ur(S, Et.get("name"), Et.get("value"), Et.get("type"), Et.get("lifetime"));
              break;
            }
            default:
              R(K(new Error("Unknown type of action"), { additional: { url: Qe } }));
          }
        } catch (Ke) {
          R(K(Ke, { additional: { url: Qe } }));
        }
    }
  }
  async function It(y, E = {}) {
    var R;
    if (!y || !Array.isArray(y))
      return;
    const S = ((R = E.componentContext) == null ? void 0 : R.logError) || D, x = (Qe) => E.componentContext ? E.componentContext.getJsonWithVars(Qe, E.additionalVars, !0) : at(S, Qe, E.additionalVars, !0);
    for (let Qe = 0; Qe < y.length; ++Qe) {
      let Ce = x(y[Qe]);
      const Zt = Ce.is_enabled;
      if (Zt === 0 || Zt === !1)
        continue;
      const yt = Ce.url;
      if (Ce.typed)
        await Yt(Ce, y[Qe], E.componentContext);
      else if (yt) {
        const tr = Rl(yt);
        if (tr)
          if (Ol(tr, Ie)) {
            if (E.processUrls)
              if (Ce.target === "_blank") {
                const Et = window.open("", "_blank");
                Et && (Et.opener = null, Et.location = yt);
              } else
                location.href = yt;
          } else tr === "div-action" ? (await Yt(Ce, y[Qe], E.componentContext), await An()) : Ce.log_id && (Tt(Ce), await An());
      } else E.node && Array.isArray(Ce.menu_items) && Ce.menu_items.length && e(4, At = {
        items: Ce.menu_items,
        node: E.node,
        componentContext: E.componentContext
      });
    }
    y.forEach((Qe) => {
      Qe.log_id && jt(E.logType || "click", Qe);
    });
  }
  function Tt(y) {
    G == null || G(y);
  }
  function ut(y, E) {
    const S = (y == null ? void 0 : y.logError) || D;
    if (!Array.isArray(E) || !E.length)
      return;
    const x = [];
    return E.forEach((R) => {
      let Qe = !1;
      if (typeof R.condition != "string") {
        S(K(new Error("variable_trigger has a condition that is not a string"), {
          additional: { condition: R.condition }
        }));
        return;
      }
      if (!Array.isArray(R.actions)) {
        S(K(new Error("variable_trigger has no actions"), {
          additional: { condition: R.condition }
        }));
        return;
      }
      const Ce = R.mode || "on_condition";
      if (Ce !== "on_variable" && Ce !== "on_condition") {
        S(K(new Error("variable_trigger has an unsupported mode"), { additional: { mode: Ce } }));
        return;
      }
      const yt = ne(S, { condition: R.condition }, {
        additionalVars: y == null ? void 0 : y.variables,
        customFunctions: y == null ? void 0 : y.customFunctions,
        emptyVarsError: () => {
          S(K(new Error("variable_trigger must have variables in the condition"), {
            additional: { condition: R.condition }
          }));
        }
      }).subscribe(async (Ke) => {
        Ke.condition !== void 0 && (// if condition is truthy
        Ke.condition && // and trigger mode matches
        (Ce === "on_variable" || Ce === "on_condition" && Qe === !1) ? (Qe = !!Ke.condition, y ? await y.execAnyActions(R.actions, { logType: "trigger" }) : await It(R.actions, { logType: "trigger" })) : Qe = !!Ke.condition);
      });
      x.push(yt);
    }), () => {
      x.forEach((R) => {
        R();
      });
    };
  }
  function qt(y) {
    return ye[y];
  }
  function sr(y, E) {
    ye[y] = E;
  }
  const dr = /* @__PURE__ */ new Map(), mr = /* @__PURE__ */ new Map(), pr = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Map(), zr = /* @__PURE__ */ new Map();
  function gr(y, E, S = "error") {
    if (dr.has(y)) {
      D(K(new Error("Duplicate instance id"), {
        level: S,
        additional: { id: y }
      }));
      return;
    }
    dr.set(y, E);
  }
  function $e(y) {
    dr.delete(y);
  }
  function ct(y) {
    if (!dr.has(y)) {
      D(K(new Error("Missing instance with id"), { additional: { id: y } }));
      return;
    }
    return dr.get(y);
  }
  function Mt(y, E) {
    mr.set(y, E);
  }
  function br(y) {
    mr.delete(y);
  }
  function wr(y, E) {
    pr.set(y, E);
  }
  function nt(y) {
    pr.delete(y);
  }
  function le(y, E) {
    const S = E.id;
    S && (Fr.has(S) && D(K(new Error("Duplicate tooltip id"), { additional: { id: S } })), Fr.set(S, { onwerNode: y, tooltip: E }));
  }
  function Ct(y) {
    const E = y.id;
    E && (Fr.delete(E), wt.some((S) => S.desc.id === E) && e(3, wt = wt.filter((S) => S.desc.id !== E)));
  }
  function rr(y) {
    const E = Xe.get(y) || Ao(void 0);
    return Xe.has(y) || Xe.set(y, E), E;
  }
  function hr(y, E, S) {
    const x = Le.get(y);
    if (x)
      return x;
    const R = io(y, E, S);
    return Le.set(y, R), R;
  }
  function Sr() {
    if (!Ut)
      return;
    Ut[pe].forEach((E) => {
      const S = te.get(E.name);
      S && S.setValue(E.color);
    });
  }
  function v() {
    return Ie;
  }
  function re(y, E) {
    const S = p.get(y);
    if (S)
      return new S(E || {});
  }
  function d(y) {
    return {
      variables: No(te, y.variables),
      derviedExpression(E) {
        return y.getDerivedFromVars(E);
      },
      processExpressions(E) {
        return y.getJsonWithVars(E);
      },
      execAction: jr,
      logError: D,
      getComponentProperty(E) {
        return y.getJsonWithVars(y.json[E]);
      },
      direction: se
    };
  }
  function C(y, E) {
    const S = /* @__PURE__ */ new Map(), x = (E == null ? void 0 : E.logError) || D;
    return y.forEach((R) => {
      if (S) {
        try {
          y2(R);
        } catch (Zt) {
          x(K(Zt));
          return;
        }
        const Qe = R, Ce = S.get(Qe.name) || [];
        Ce.push(w2(Qe)), S.set(Qe.name, Ce);
      }
    }), S;
  }
  function De(y) {
    const E = {
      id: "",
      json: {},
      path: [],
      templateContext: {},
      logError(S) {
        S.additional = S.additional || {}, S.additional.path = E.path.join("/");
        {
          S.additional.json = E.json, S.additional.origJson = E.origJson;
          const x = [];
          let R = E;
          for (; R.parent; )
            x.push(R), R = R.parent;
          S.additional.fullpath = x;
        }
        D(S);
      },
      execAnyActions(S, x = {}) {
        return It(S, {
          componentContext: E,
          processUrls: x.processUrls,
          node: x.node,
          logType: x.logType,
          additionalVars: x.additionalVars
        });
      },
      getDerivedFromVars(S, x, R = !1, Qe = 1 / 0) {
        return ne(E.logError, S, {
          additionalVars: No(E.variables, x),
          keepComplex: R,
          customFunctions: E.customFunctions,
          maxDepth: Qe
        });
      },
      getJsonWithVars(S, x, R = !1) {
        return at(E.logError, S, No(E.variables, x), R, E.customFunctions);
      },
      evalExpression(S, x, R) {
        return $s(No(te, E.variables), E.customFunctions, S, x, R);
      },
      produceChildContext(S, x = {}) {
        const R = De(this);
        let Qe = S, Ce = this.templateContext;
        const { templateContext: Zt, json: yt } = kt(Qe, Ce);
        if (R.json = yt, R.templateContext = Zt, R.origJson = S, R.id = x.id || yt.id || "", R.id) {
          let Et = zr.get(R.id);
          Et || (Et = /* @__PURE__ */ new Set(), zr.set(R.id, Et)), Et.add(R);
        }
        x.key && (R.key = x.key), x.path !== void 0 && R.path.push(String(x.path)), S.type && !x.isRootState && R.path.push(S.type), x.isTooltipRoot && (R.isTooltipRoot = !0);
        let Ke;
        Array.isArray(yt.variables) ? (Ke = No(this.variables, No(x.variables, /* @__PURE__ */ new Map())), yt.variables.forEach((Et) => {
          const Cr = st(Et, R, Ke);
          Cr && Ke && Ke.set(Cr.getName(), Cr);
        })) : x.variables ? Ke = No(this.variables, x.variables) : this.variables && (Ke = this.variables), R.variables = Ke, Ke && (R.selfVariables = /* @__PURE__ */ new Set([...Ke.keys()]));
        let tr;
        return Array.isArray(yt.functions) && (tr = C(yt.functions, this)), R.customFunctions = k2(this.customFunctions, tr), Array.isArray(yt.animators) && (R.animators = yt.animators.reduce(
          (Et, Cr) => (Cr.id && (Et[Cr.id] = Cr), Et),
          {}
        )), x.fake && (R.fakeElement = x.fake), x.isRootState && (R.isRootState = !0), R;
      },
      dup(S) {
        return { ...E, fakeElement: S };
      },
      getVariable(S, x) {
        var Qe;
        const R = ((Qe = E.variables) == null ? void 0 : Qe.get(S)) || te.get(S);
        if (R) {
          const Ce = R.getType();
          if (x && Ce !== x) {
            E.logError(K(new Error(`Variable should have type "${x}"`), { additional: { name: S, foundType: Ce } }));
            return;
          }
        }
        return R;
      },
      getAnimator(S) {
        var x, R;
        return ((x = E.animators) == null ? void 0 : x[S]) || ((R = E.parent) == null ? void 0 : R.getAnimator(S)) || void 0;
      },
      registerState(S, x) {
        const R = z2(E.parent);
        return R && (R.states = R.states || {}, R.states[S] = R.states[S] || [], R.states[S].push(x)), () => {
          var Qe;
          (Qe = R == null ? void 0 : R.states) != null && Qe[S] && (R.states[S] = R.states[S].filter((Ce) => Ce !== x), R.states[S].length || delete R.states[S]);
        };
      },
      registerPager(S) {
        const x = E.parent;
        return x ? (x.pagers = x.pagers || /* @__PURE__ */ new Map(), x.pagers.has(S) ? {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          update() {
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          destroy() {
          }
        } : (x.pagers.set(S, null), {
          update(R) {
            var yt, Ke;
            x.pagers && x.pagers.set(S, R);
            const Qe = S ? (yt = x.pagerListeners) == null ? void 0 : yt.get(S) : void 0, Ce = (Ke = x.pagerListeners) == null ? void 0 : Ke.get(void 0);
            [...Qe || [], ...Ce || []].forEach((tr) => {
              tr(R);
            });
          },
          destroy() {
            x.pagers && x.pagers.delete(S);
          }
        })) : {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          update() {
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          destroy() {
          }
        };
      },
      listenPager(S, x) {
        var yt, Ke, tr;
        let R = E.parent;
        for (; R && !(R.pagers && (S ? R.pagers.get(S) : (yt = R.pagers) != null && yt.size)); )
          R = R.parent;
        if (!R)
          return () => {
          };
        R.pagerListeners = E.pagerListeners || /* @__PURE__ */ new Map();
        const Qe = R.pagerListeners.get(S) || [];
        R.pagerListeners.has(S) || R.pagerListeners.set(S, Qe), Qe.push(x);
        const Ce = S || ((Ke = R.pagers) == null ? void 0 : Ke.keys().next().value) || void 0, Zt = (tr = R.pagers) == null ? void 0 : tr.get(Ce);
        return Zt && x(Zt), () => {
          if (!R.pagerListeners)
            return;
          let Et = R.pagerListeners.get(Ce);
          Et && (Et = Et.filter((Cr) => Cr !== x) || [], Et.length ? R.pagerListeners.set(S, Et) : R.pagerListeners.delete(S));
        };
      },
      destroy() {
        const S = zr.get(E.id);
        S && (S.delete(E), S.size || zr.delete(E.id));
      }
    };
    return y ? (E.parent = y, E.path = y.path.slice(), y.fakeElement && (E.fakeElement = y.fakeElement)) : (E.json = { type: "root" }, E.isRootState = !0), E;
  }
  function Re(y) {
    je ? it.push(y) : clearTimeout(y);
  }
  ni(Yr, {
    logStat: jt,
    hasTemplate: gt,
    genId: Y,
    genClass: Vt,
    execCustomAction: Tt,
    processVariableTriggers: ut,
    isRunning: qt,
    setRunning: sr,
    pagerChildrenClipEnabled: z,
    pagerMouseDragEnabled: N,
    registerInstance: gr,
    unregisterInstance: $e,
    registerParentOf: Mt,
    unregisterParentOf: br,
    registerTooltip: le,
    unregisterTooltip: Ct,
    onTooltipClose: he,
    tooltipRoot: P,
    registerFocusable: wr,
    unregisterFocusable: nt,
    addSvgFilter: Jt,
    removeSvgFilter: ve,
    registerId: Oe,
    getComponentId: xt,
    preparePrototypeVariables: Ve,
    getCustomization: me,
    getBuiltinProtocols: v,
    getExtension: re,
    getExtensionContext: d,
    registerTimeout: Re,
    typefaceProvider: ee,
    isDesktop: Ee,
    isPointerFocus: pa,
    customComponents: Z,
    direction: be,
    videoPlayerProvider: ie,
    awaitGlobalVariable: hr,
    componentDevtool: St,
    devtoolCreateHierarchy: de
  }), ni(So, {
    hasAction() {
      return !1;
    }
  }), ni(sa, {
    runVisibilityTransition(y, E, S, x, R) {
      return Promise.resolve();
    },
    registerChildWithTransitionIn(y, E, S, x) {
      return Promise.resolve();
    },
    registerChildWithTransitionOut(y, E, S, x) {
      return Promise.resolve();
    },
    registerChildWithTransitionChange(y, E, S, x) {
      return Promise.resolve();
    },
    hasTransitionChange(y) {
      return !1;
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    registerChild(y) {
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    unregisterChild(y) {
    }
  }), ni(la, { isEnabled: Go(!0) });
  function Ot(y, E) {
    const S = te.get(y);
    return (S == null ? void 0 : S.getType()) === E;
  }
  function H(y, E) {
    const S = te.get(y);
    S ? S.setValue(E) : D(K(new Error("Cannot find variable"), { additional: { name: y } }));
  }
  function Lt(y, E, S) {
    const x = (E == null ? void 0 : E.logError) || D, R = y.name, Qe = y.value_type;
    if (typeof y.get != "string" || !y.get) {
      x(K(new Error("Incorrect property getter"), { additional: { name: R } }));
      return;
    }
    if (!R) {
      x(K(new Error("Missing property name")));
      return;
    }
    if (!Qe) {
      x(K(new Error("Missing property value_type")));
      return;
    }
    const Ce = E ? E.getDerivedFromVars(y.get, void 0, !0) : ne(D, y.get, { keepComplex: !0 });
    if (Ml(Ce) === void 0)
      return;
    const yt = (Ke) => {
      const tr = vs(y.new_value_variable_name || "new_value", y.value_type, Ke), Et = new Map(S);
      Et.set(tr.getName(), tr), Array.isArray(y.set) && y.set.length ? E ? E.execAnyActions(y.set, { additionalVars: Et }) : It(y.set, { additionalVars: Et }) : x(K(new Error("Cannot set property. No setters provided."), { additional: { name: R } }));
    };
    return {
      getName() {
        return R;
      },
      subscribe(Ke) {
        return Ce.subscribe(Ke);
      },
      set(Ke) {
        const tr = _h(Ke, Qe);
        yt(tr);
      },
      setValue: yt,
      getValue() {
        return Ml(Ce);
      },
      getType() {
        return Qe;
      }
    };
  }
  function st(y, E, S) {
    if (y.type === "property")
      return Lt(y, E, S);
    if (!y.type || !y.name || !(y.type in Nl) || !("value" in y))
      return;
    const x = y.value;
    let R = E ? E.getJsonWithVars(x, S, !0) : at(D, x, S, !0);
    if (!(x && typeof x == "string" && R === void 0)) {
      y.type === "integer" && typeof R == "number" && (R > Number.MAX_SAFE_INTEGER || R < Number.MIN_SAFE_INTEGER) && D(K(new Error("The value of the integer variable could lose accuracy"), {
        level: "warn",
        additional: { name: y.name, value: R }
      }));
      try {
        return io(y.name, y.type, R);
      } catch (Qe) {
        D(K(Qe, { additional: { name: y.name } }));
      }
    }
  }
  function Ue(y) {
    const E = st(y);
    E && (qe.set(y.name, E), te.set(y.name, E));
  }
  for (const [y, E] of xe)
    te.has(y) || te.set(y, E);
  const Ye = (Kr = l == null ? void 0 : l.card) == null ? void 0 : Kr.variables;
  Array.isArray(Ye) && Ye.forEach((y) => {
    if (y && y.name) {
      if (qe.has(y.name)) {
        D(K(new Error("Duplicate variable"), { additional: { name: y.name } }));
        return;
      }
      Ue(y);
    }
  });
  const Ut = l.palette;
  Ut && Ut[pe].forEach((E) => {
    if (qe.has(E.name)) {
      D(K(new Error("Duplicate variable"), { additional: { name: E.name } }));
      return;
    }
    try {
      const S = io(E.name, "color", E.color);
      qe.set(E.name, S), te.set(E.name, S);
    } catch (S) {
      D(K(S, { additional: { name: E.name } }));
    }
  }), Ae.subscribe((y) => {
    if (y && !te.has(y)) {
      const E = xe.get(y);
      te.set(y, E);
      const S = Xe.get(y);
      if (S) {
        let R = 0;
        E.subscribe(() => {
          S.set(++R);
        });
      }
      const x = Le.get(y);
      x && x.getType() === E.getType() && E.subscribe((R) => {
        x.set(R);
      });
    }
  });
  const yr = () => {
    var y;
    ut(void 0, (y = l == null ? void 0 : l.card) == null ? void 0 : y.variable_triggers);
  }, Jr = (on = l == null ? void 0 : l.card) == null ? void 0 : on.timers;
  if (Jr && typeof document < "u") {
    const y = tt = new S2({
      logError: D,
      applyVars: (E) => at(D, E),
      hasVariableWithType: Ot,
      setVariableValue: H,
      execAnyActions: It
    });
    Jr.forEach((E) => y.createTimer(E));
  }
  const tn = De();
  Array.isArray((zn = l.card) == null ? void 0 : zn.functions) && (tn.customFunctions = C(l.card.functions));
  let Gr;
  function he(y) {
    e(3, wt = wt.filter((E) => E.internalId !== y));
  }
  to(() => {
    ls++, ls === 1 && (window.addEventListener("keydown", Uf), window.addEventListener("pointerdown", Gf)), An().then(() => {
      je && yr();
    });
  }), an(() => {
    je = !1, ls--, ls || (window.removeEventListener("keydown", Uf), window.removeEventListener("pointerdown", Gf));
    for (const [y, E] of dt)
      E.stop();
    tt && tt.destroy(), wt.forEach((y) => {
      y.timeoutId && (clearTimeout(y.timeoutId), y.timeoutId = null);
    }), it.forEach((y) => {
      clearTimeout(y);
    });
  });
  const wn = () => e(4, At = void 0);
  return t.$$set = (y) => {
    "id" in y && e(13, a = y.id), "json" in y && e(11, l = y.json), "platform" in y && e(14, u = y.platform), "theme" in y && e(12, c = y.theme), "globalVariablesController" in y && e(15, f = y.globalVariablesController), "mix" in y && e(0, _ = y.mix), "customization" in y && e(16, h = y.customization), "builtinProtocols" in y && e(17, m = y.builtinProtocols), "extensions" in y && e(18, p = y.extensions), "onError" in y && e(19, k = y.onError), "onStat" in y && e(20, w = y.onStat), "onSubmit" in y && e(21, O = y.onSubmit), "onCustomAction" in y && e(22, G = y.onCustomAction), "onComponent" in y && e(23, L = y.onComponent), "typefaceProvider" in y && e(24, ee = y.typefaceProvider), "fetchInit" in y && e(25, fe = y.fetchInit), "tooltipRoot" in y && e(26, P = y.tooltipRoot), "customComponents" in y && e(27, Z = y.customComponents), "direction" in y && e(28, se = y.direction), "store" in y && e(29, j = y.store), "pagerChildrenClipEnabled" in y && e(30, z = y.pagerChildrenClipEnabled), "pagerMouseDragEnabled" in y && e(31, N = y.pagerMouseDragEnabled), "weekStartDay" in y && e(32, W = y.weekStartDay), "videoPlayerProvider" in y && e(33, ie = y.videoPlayerProvider), "devtoolCreateHierarchy" in y && e(34, de = y.devtoolCreateHierarchy);
  }, t.$$.update = () => {
    var y, E;
    if (t.$$.dirty[0] & /*theme*/
    4096 | t.$$.dirty[1] & /*themeQuery*/
    2048 && (c === "light" || c === "dark" ? e(41, pe = c) : c === "system" ? typeof matchMedia < "u" ? (ze || (e(42, ze = matchMedia("(prefers-color-scheme: dark)")), ze.addListener(Fe)), e(41, pe = ze.matches ? "dark" : "light")) : e(41, pe = "light") : D(K(new Error("Unsupported theme")))), t.$$.dirty[1] & /*currentTheme*/
    1024 && pe && Sr(), t.$$.dirty[0] & /*json*/
    2048) {
      e(1, ue = !1);
      const S = v2(l);
      S && (e(1, ue = !0), D(S));
    }
    if (t.$$.dirty[0] & /*json*/
    2048 && (n = l.templates || {}), t.$$.dirty[0] & /*json*/
    2048 && (y = l == null ? void 0 : l.card) != null && y.variables && Array.isArray(l.card.variables) && l.card.variables !== Ye && l.card.variables.forEach((S) => {
      S && S.name && !qe.has(S.name) && !te.has(S.name) && Ue(S);
    }), t.$$.dirty[0] & /*json*/
    2048 && e(44, o = (E = l == null ? void 0 : l.card) == null ? void 0 : E.states), t.$$.dirty[0] & /*hasError, hasIdError*/
    6 | t.$$.dirty[1] & /*states, rootComponentContext*/
    12288 && o && !ue && !oe) {
      const S = {
        type: "state",
        id: "root",
        width: { type: "match_parent" },
        height: { type: "match_parent" },
        states: o.map((x) => ({
          state_id: x.state_id.toString(),
          div: x.div
        }))
      };
      e(6, Gr = tn.produceChildContext(S, { isRootState: !0 }));
    }
  }, [
    _,
    ue,
    oe,
    wt,
    At,
    Dt,
    Gr,
    i,
    s,
    Ee,
    be,
    l,
    c,
    a,
    u,
    f,
    h,
    m,
    p,
    k,
    w,
    O,
    G,
    L,
    ee,
    fe,
    P,
    Z,
    se,
    j,
    z,
    N,
    W,
    ie,
    de,
    Ge,
    Ze,
    ke,
    et,
    _e,
    jr,
    pe,
    ze,
    tn,
    o,
    wn
  ];
}
class k3 extends Lr {
  constructor(r) {
    super(), Or(
      this,
      r,
      w3,
      h3,
      Ar,
      {
        id: 13,
        json: 11,
        platform: 14,
        theme: 12,
        globalVariablesController: 15,
        mix: 0,
        customization: 16,
        builtinProtocols: 17,
        extensions: 18,
        onError: 19,
        onStat: 20,
        onSubmit: 21,
        onCustomAction: 22,
        onComponent: 23,
        typefaceProvider: 24,
        fetchInit: 25,
        tooltipRoot: 26,
        customComponents: 27,
        direction: 28,
        store: 29,
        pagerChildrenClipEnabled: 30,
        pagerMouseDragEnabled: 31,
        weekStartDay: 32,
        videoPlayerProvider: 33,
        devtoolCreateHierarchy: 34,
        setTheme: 35,
        getDebugVariables: 36,
        getDebugAllVariables: 37,
        setData: 38,
        applyPatch: 39,
        execAction: 40
      },
      null,
      [-1, -1, -1, -1, -1]
    );
  }
  get setTheme() {
    return this.$$.ctx[35];
  }
  get getDebugVariables() {
    return this.$$.ctx[36];
  }
  get getDebugAllVariables() {
    return this.$$.ctx[37];
  }
  get setData() {
    return this.$$.ctx[38];
  }
  get applyPatch() {
    return this.$$.ctx[39];
  }
  get execAction() {
    return this.$$.ctx[40];
  }
}
const v3 = 8;
class S3 {
  constructor(r) {
    Er(this, "widthVariableName");
    Er(this, "heightVariableName");
    Er(this, "resizeObserver");
    Er(this, "context");
    Er(this, "node");
    Er(this, "sizeHistory", {});
    this.widthVariableName = r.width_variable_name, this.heightVariableName = r.height_variable_name;
  }
  setVariable(r, e) {
    if (!this.context)
      return !1;
    if (r) {
      const n = this.context.variables.get(r);
      if (n && n.getType() === "integer") {
        if (e = Math.round(e), this.sizeHistory[r] || (this.sizeHistory[r] = /* @__PURE__ */ new Set()), !this.sizeHistory[r].has(e))
          return n.setValue(e), this.sizeHistory[r].add(e), !0;
      } else {
        const o = new Error("Missing variable");
        o.level = "error", o.additional = {
          variableName: r
        }, this.context.logError(o);
      }
    }
    return !1;
  }
  recalcProps() {
    if (!this.node || !this.context)
      return !1;
    const r = this.node.getBoundingClientRect(), e = this.setVariable(this.widthVariableName, r.width), n = this.setVariable(this.heightVariableName, r.height);
    return e || n;
  }
  mountView(r, e) {
    var n;
    this.node = r, this.context = e, !this.resizeObserver && typeof ResizeObserver < "u" && (this.resizeObserver = new ResizeObserver(async () => {
      let o = 0;
      for (; this.recalcProps(); ) {
        if (++o > v3) {
          const i = new Error("Recursive layout in size_provider");
          i.level = "warn", i.additional = {
            widthVariableName: this.widthVariableName,
            heightVariableName: this.heightVariableName
          }, e.logError(i);
          break;
        }
        await An();
      }
      this.sizeHistory = {};
    })), (n = this.resizeObserver) == null || n.observe(r), this.recalcProps();
  }
  unmountView(r, e) {
    var n;
    (n = this.resizeObserver) == null || n.disconnect(), this.resizeObserver = void 0;
  }
}
const mi = 8;
class V3 {
  constructor(r) {
    Er(this, "context");
    Er(this, "params");
    Er(this, "startCoords");
    this.params = r, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this);
  }
  processActions(r) {
    const e = this.params[r];
    Array.isArray(e) && e.length && this.context && this.context.processExpressions(e).forEach((o) => {
      var i;
      (i = this.context) == null || i.execAction(o);
    });
  }
  onPointerDown(r) {
    this.startCoords = {
      pageX: r.pageX,
      pageY: r.pageY
    };
  }
  onPointerMove(r) {
    if (!this.startCoords)
      return;
    const e = r.pageX - this.startCoords.pageX, n = r.pageY - this.startCoords.pageY;
    (Math.abs(e) > mi || Math.abs(n) > mi) && (Math.abs(e) > Math.abs(n) ? e > mi ? this.processActions("swipe_right") : e < -mi && this.processActions("swipe_left") : n > mi ? this.processActions("swipe_down") : n < -mi && this.processActions("swipe_up"), this.startCoords = void 0);
  }
  onPointerUp() {
    this.startCoords = void 0;
  }
  mountView(r, e) {
    this.context = e, r.addEventListener("pointerdown", this.onPointerDown), r.addEventListener("pointermove", this.onPointerMove), r.addEventListener("pointerup", this.onPointerUp), r.addEventListener("pointercancel", this.onPointerUp), r.style.pointerEvents = "auto";
  }
  updateView(r) {
    r.style.pointerEvents = "auto";
  }
  unmountView(r, e) {
    r.removeEventListener("pointerdown", this.onPointerDown), r.removeEventListener("pointermove", this.onPointerMove), r.removeEventListener("pointerup", this.onPointerUp), r.removeEventListener("pointercancel", this.onPointerUp), r.style.pointerEvents = "";
  }
}
function j3(t) {
  return t instanceof HTMLElement;
}
function I3(t) {
  return class {
    constructor(e) {
      Er(this, "params");
      Er(this, "animItem");
      Er(this, "wrapper");
      Er(this, "isPlayingUnsubscriber");
      Er(this, "isPlaying", !0);
      Er(this, "unsubscribe");
      this.params = e;
    }
    loadData(e) {
      return this.params.lottie_json ? Promise.resolve(this.params.lottie_json) : e ? fetch(e).then((n) => {
        if (!n.ok)
          throw new Error("Response is not ok");
        return n.json();
      }) : Promise.reject("Missing data");
    }
    getRatio(e) {
      var o;
      const n = (o = e.getComponentProperty("aspect")) == null ? void 0 : o.ratio;
      if (typeof n == "number" && n > 0)
        return n;
    }
    getScale(e) {
      const n = e.getComponentProperty("scale");
      if (n === "stretch")
        return {
          attribute: "none",
          noScale: !1,
          hAlign: "center",
          vAlign: "center"
        };
      let o = e.getComponentProperty("content_alignment_horizontal"), i = e.getComponentProperty("content_alignment_vertical"), s = "Mid", a = "Mid";
      return o === "start" ? o = e.direction === "ltr" ? "start" : "end" : o === "end" ? o = e.direction === "ltr" ? "end" : "start" : o === "left" ? o = "start" : o === "right" ? o = "end" : o = "center", i === "top" ? i = "start" : i === "bottom" ? i = "end" : i = "center", n === "no_scale" ? {
        attribute: "xMidYMid meet",
        noScale: !0,
        hAlign: o,
        vAlign: i
      } : (o === "start" ? s = "Min" : o === "end" && (s = "Max"), i === "start" ? a = "Min" : i === "end" && (a = "Max"), n === "fit" || n === "no_scale" ? {
        attribute: `x${s}Y${a} meet`,
        noScale: !1,
        hAlign: o,
        vAlign: i
      } : {
        attribute: `x${s}Y${a} slice`,
        noScale: !1,
        hAlign: o,
        vAlign: i
      });
    }
    getSvg() {
      var n;
      const e = (n = this.wrapper) == null ? void 0 : n.firstElementChild;
      if (e instanceof SVGElement)
        return e;
    }
    setWrapperScale(e) {
      this.wrapper && (e.noScale ? (this.wrapper.style.display = "flex", this.wrapper.style.alignItems = e.vAlign, this.wrapper.style.justifyContent = e.hAlign) : (this.wrapper.style.display = "", this.wrapper.style.alignItems = "", this.wrapper.style.justifyContent = ""));
    }
    setSvgScale(e) {
      const n = this.getSvg();
      n && (e.noScale ? (n.style.flex = "0 0 auto", n.style.width = "", n.style.height = "") : (n.style.flex = "", n.style.width = "100%", n.style.height = "100%"));
    }
    mountView(e, n) {
      var f;
      if (!this.params.lottie_url && !this.params.lottie_json)
        return;
      const o = Array.from(e.children).filter(j3);
      o.forEach((_) => {
        _.style.display = "none";
      }), e.setAttribute("data-lottie", "true");
      const i = this.wrapper = document.createElement("div");
      this.wrapper.style.width = "100%", this.wrapper.style.height = "100%";
      const s = this.getRatio(n), a = this.getScale(n);
      s && (this.wrapper.style.aspectRatio = String(s)), this.setWrapperScale(a), e.appendChild(this.wrapper);
      const l = Number((f = n.processExpressions(this.params.repeat_count)) != null ? f : -1), u = n.processExpressions(this.params.repeat_mode), c = () => {
        var h, m;
        (h = this.animItem) == null || h.destroy(), o.forEach((p) => {
          p.style.display = "";
        }), e.removeAttribute("data-lottie"), this.wrapper && ((m = this.wrapper.parentNode) == null || m.removeChild(this.wrapper), this.wrapper = void 0);
        const _ = new Error("Failed to load lottie animation");
        _.level = "error", _.additional = {
          url: this.params.lottie_url
        }, n.logError(_);
      };
      this.unsubscribe = n.derviedExpression(this.params.lottie_url).subscribe((_) => {
        this.loadData(_).then((h) => {
          var k;
          (k = this.animItem) == null || k.destroy();
          const m = l !== 0, p = this.animItem = t({
            container: i,
            animationData: h,
            renderer: "svg",
            loop: m,
            rendererSettings: {
              preserveAspectRatio: a.attribute
            }
          });
          if (this.setSvgScale(a), this.animItem.addEventListener("data_failed", c), m && (u === "reverse" || l !== -1)) {
            let w = 1, O = 0;
            p.addEventListener("loopComplete", () => {
              ++O, l !== -1 && O === l + 1 ? (p.stop(), p.goToAndStop(p.totalFrames, !0)) : (u === "reverse" && (w *= -1, p.setDirection(w)), p.goToAndPlay(w === 1 ? 0 : p.totalFrames, !0));
            });
          }
        }).catch(c);
      }), this.isPlayingUnsubscriber = n.derviedExpression(this.params.is_playing).subscribe((_) => {
        this.isPlaying = _ !== !1, this.animItem && this.animItem[this.isPlaying ? "play" : "pause"]();
      });
    }
    updateView(e, n) {
      if (!this.wrapper)
        return;
      const o = this.getRatio(n);
      o && (this.wrapper.style.aspectRatio = String(o));
      const i = this.getSvg();
      if (i) {
        const s = this.getScale(n);
        this.setWrapperScale(s), this.setSvgScale(s), i.setAttribute("preserveAspectRatio", s.attribute);
      }
    }
    unmountView(e, n) {
      var o, i, s, a;
      (o = this.animItem) == null || o.destroy(), this.wrapper && ((i = this.wrapper.parentNode) == null || i.removeChild(this.wrapper), this.wrapper = void 0), e.removeAttribute("data-lottie"), (s = this.unsubscribe) == null || s.call(this), (a = this.isPlayingUnsubscriber) == null || a.call(this);
    }
  };
}
function T3(t, r = {}) {
  return class {
    constructor() {
      Er(this, "prevDOM", null);
    }
    recalc(n, o) {
      const i = n.firstElementChild, s = i == null ? void 0 : i.firstElementChild;
      if (!s)
        return;
      this.prevDOM = i.cloneNode(!0);
      const a = o.getComponentProperty("text") || "", l = t(a), u = document.createElement("div");
      u.innerHTML = l, r != null && r.cssClass && u.classList.add(r.cssClass);
      const c = Array.from(i.childNodes);
      for (let f = 0, _ = c.length; f < _; ++f) {
        const h = c[f];
        (h.nodeType !== 1 || h !== s) && i.removeChild(h);
      }
      s.innerHTML = "", s.appendChild(u);
    }
    mountView(n, o) {
      this.recalc(n, o);
    }
    updateView(n, o) {
      this.recalc(n, o);
    }
    unmountView(n) {
      if (this.prevDOM) {
        const o = n.firstElementChild;
        o && o.replaceWith(this.prevDOM), this.prevDOM = null;
      }
    }
  };
}
function M3(t) {
  const { target: r, hydrate: e, ...n } = t, o = new k3({
    target: r,
    props: n,
    hydrate: e
  });
  return {
    $destroy() {
      o.$destroy();
    },
    execAction(i) {
      o.execAction(i);
    },
    setTheme(i) {
      o.setTheme(i);
    },
    setData(i) {
      o.setData(i);
    },
    applyPatch(i) {
      return o.applyPatch(i);
    },
    getDebugVariables() {
      return o.getDebugVariables();
    },
    getDebugAllVariables() {
      return o.getDebugAllVariables();
    }
  };
}
function P3(t, r) {
  return C3(t, r).result;
}
function C3(t, r) {
  let e;
  try {
    e = Ls(t, {
      startRule: (r == null ? void 0 : r.type) === "json" ? "JsonStringContents" : "start"
    });
  } catch {
    return {
      result: {
        type: "error",
        value: "Unable to parse expression"
      },
      warnings: []
    };
  }
  return $s((r == null ? void 0 : r.variables) || /* @__PURE__ */ new Map(), void 0, void 0, e);
}
function N3() {
  return Array.from(Bi.keys());
}
function z3(t, r) {
  return Ls(t, {
    startRule: (r == null ? void 0 : r.type) === "json" ? "JsonStringContents" : "start"
  });
}
export {
  V3 as Gesture,
  S3 as SizeProvider,
  A3 as createGlobalVariablesController,
  io as createVariable,
  P3 as evalExpression,
  C3 as evalExpressionWithFullResult,
  N3 as functionNames,
  I3 as lottieExtensionBuilder,
  T3 as markdownExtensionBuilder,
  z3 as parseExpression,
  M3 as render,
  di as valToString,
  no as walkExpression
};
//# sourceMappingURL=client-devtool.mjs.map

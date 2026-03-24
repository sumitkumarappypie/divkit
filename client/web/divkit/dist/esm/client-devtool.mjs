var E_ = Object.defineProperty;
var A_ = (t, r, e) => r in t ? E_(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var Ar = (t, r, e) => A_(t, typeof r != "symbol" ? r + "" : r, e);
/*!
    DivKit v32.39.0
    https://github.com/divkit/divkit
    @licence Apache-2.0
*/
function ua(t) {
  return BigInt(t);
}
const is = ua("9223372036854775807"), ss = ua("-9223372036854775808");
function _n(t) {
  const r = ua(t);
  if (r > is || r < ss)
    throw new Error("Integer overflow.");
  return r;
}
const mi = _n(0);
function ad(t) {
  let r = t;
  return r < 0 && (r = -r), r;
}
function ud(t) {
  let r = 0;
  return t > 0 ? r = 1 : t < 0 && (r = -1), _n(r);
}
function S_(t, r) {
  return r && r[3] && r[7] ? { type: "ConditionalExpression", test: t, consequent: r[3], alternate: r[7] } : t;
}
function V_(t, r) {
  return r && r[3] ? { type: "TryExpression", test: t, alternate: r[3] } : t;
}
function ds(t, r) {
  return r.length ? r.reduce((e, n) => ({
    type: "BinaryExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), t) : t;
}
function Da(t, r) {
  return r.length ? r.reduce((e, n) => ({
    type: "LogicalExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), t) : t;
}
function F_(t, r) {
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
function I_(t) {
  return t === "true" || t === "false" ? { type: "BooleanLiteral", value: t === "true" } : { type: "Variable", id: { type: "Identifier", name: t } };
}
function Ta(t) {
  if (t.every((e) => typeof e == "string"))
    return { type: "StringLiteral", value: t.join("") };
  let r = t.reduce((e, n) => (typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e), []).reduce((e, n) => (typeof n == "string" ? e.quasis.push({ type: "StringLiteral", value: n }) : (e.quasis.length === e.expressions.length && e.quasis.push({ type: "StringLiteral", value: "" }), e.expressions.push(n)), e), {
    type: "TemplateLiteral",
    quasis: [],
    expressions: []
  });
  return r.quasis.length === r.expressions.length && r.quasis.push({ type: "StringLiteral", value: "" }), r;
}
function D_(t) {
  try {
    return _n(t);
  } catch {
    throw new Error(`Value ${t} can't be converted to Integer type.`);
  }
}
function Ma(t) {
  if (t === "'" || t === "\\")
    return t;
  throw new Error("Incorrect string escape");
}
function T_(t, r) {
  function e() {
    this.constructor = t;
  }
  e.prototype = r.prototype, t.prototype = new e();
}
function zi(t, r, e, n) {
  var o = Error.call(this, t);
  return Object.setPrototypeOf && Object.setPrototypeOf(o, zi.prototype), o.expected = r, o.found = e, o.location = n, o.name = "SyntaxError", o;
}
T_(zi, Error);
function jl(t, r, e) {
  return e = e || " ", t.length > r ? t : (r -= t.length, e += e.repeat(r), t + e.slice(0, r));
}
zi.prototype.format = function(t) {
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
      var a = this.location.end, l = jl("", i.line.toString().length, " "), u = e[o.line - 1], c = o.line === a.line ? a.column : u.length + 1, f = c - o.column || 1;
      r += `
 --> ` + s + `
` + l + ` |
` + i.line + " | " + u + `
` + l + " | " + jl("", o.column - 1, " ") + jl("", f, "^");
    } else
      r += `
 at ` + s;
  }
  return r;
};
zi.buildMessage = function(t, r) {
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
function tl(t, r) {
  r = r !== void 0 ? r : {};
  var e = {}, n = r.grammarSource, o = { start: Yr, JsonStringContents: pn }, i = Yr, s = "@{", a = "}", l = "@{}", u = "\\", c = "?", f = ":", _ = "!:", h = "||", m = "&&", p = "==", w = "!=", k = ">=", N = ">", H = "<=", O = "<", ne = "+", de = "-", T = "/", X = "*", le = "%", C = "!", D = ".", M = "(", W = ")", Q = ",", me = "'", Ee = "e", ve = "E", he = /^[^}]/, Se = /^[^'}]/, Z = /^[0-9]/, et = /^[a-zA-Z_]/, Je = /^[a-zA-Z_0-9]/, qe = /^[ \t\r\n]/, be = Ye("@{", !1), Te = Ye("}", !1), ue = Ye("@{}", !1), ge = Ye("\\", !1), ce = Wt(), re = ct(["}"], !0, !1), ae = Ye("?", !1), oe = Ye(":", !1), we = Ye("!:", !1), Re = Ye("||", !1), Ge = Ye("&&", !1), ee = Ye("==", !1), Oe = Ye("!=", !1), Ne = Ye(">=", !1), nt = Ye(">", !1), at = Ye("<=", !1), tt = Ye("<", !1), yt = Ye("+", !1), rt = Ye("-", !1), Mt = Ye("/", !1), ft = Ye("*", !1), K = Ye("%", !1), _e = Ye("!", !1), st = Ye(".", !1), Pe = Ye("(", !1), I = Ye(")", !1), jt = Ye(",", !1), lt = br("string"), Et = Ye("'", !1), Dt = ct(["'", "}"], !0, !1), ot = br("integer"), q = ct([["0", "9"]], !1, !1), Tt = br("number"), Ft = Ye("e", !1), Kt = Ye("E", !1), Xt = ct([["a", "z"], ["A", "Z"], "_"], !1, !1), je = ct([["a", "z"], ["A", "Z"], "_", ["0", "9"]], !1, !1), Ke = br("whitespace"), _t = ct([" ", "	", "\r", `
`], !1, !1), Fe = function(b) {
    return b;
  }, $e = function(b) {
    return Ta(b);
  }, Be = function(b) {
    return b;
  }, Vt = function() {
    return "";
  }, ze = function() {
    return Ht();
  }, mt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, Ut = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, It = function(b) {
    return b;
  }, hr = function(b) {
    return Ma(b);
  }, De = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, kt = function(b, V) {
    return S_(b, V);
  }, ar = function(b, V) {
    return V_(b, V);
  }, rr = function(b, V) {
    return Da(b, V);
  }, er = function(b, V) {
    return Da(b, V);
  }, mr = function(b, V) {
    return ds(b, V);
  }, vr = function(b, V) {
    return ds(b, V);
  }, tr = function(b, V) {
    return ds(b, V);
  }, nr = function(b, V) {
    return ds(b, V);
  }, Rt = function(b) {
    return b;
  }, pt = function(b) {
    return b;
  }, xt = function(b, V) {
    return { type: "UnaryExpression", operator: b, argument: V };
  }, ie = function() {
    throw new Error("Incorrect unary operator");
  }, yr = function(b, V) {
    return F_(b, V);
  }, kr = function(b, V) {
    return { type: "CallExpression", callee: b, arguments: V };
  }, Ct = function(b, V) {
    return [b, ...V];
  }, Tr = function(b) {
    return b;
  }, Br = function(b) {
    return b;
  }, cr = function(b) {
    return Ta(b);
  }, ut = function(b) {
    return b;
  }, vt = function() {
    return "";
  }, Gt = function() {
    return Ht();
  }, Zt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, ur = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, dt = function(b) {
    return b;
  }, fe = function(b) {
    return Ma(b);
  }, wt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, or = function() {
    return { type: "IntegerLiteral", value: D_(Ht()) };
  }, Yt = function() {
    return { type: "NumberLiteral", value: parseFloat(Ht()) };
  }, jr = function() {
    return { type: "NumberLiteral", value: parseFloat(Ht()) };
  }, v = function() {
    const b = Ht();
    if (/\.\./.test(b) || /\.$/.test(b))
      throw new Error("Unexpected token: .");
    return I_(b);
  }, se = function() {
    return { type: "Identifier", name: Ht() };
  }, d = 0, B = 0, Ie = [{ line: 1, column: 1 }], He = 0, ke = [], R = 0, Jt;
  if ("startRule" in r) {
    if (!(r.startRule in o))
      throw new Error(`Can't start parsing from rule "` + r.startRule + '".');
    i = o[r.startRule];
  }
  function Ht() {
    return t.substring(B, d);
  }
  function Ye(b, V) {
    return { type: "literal", text: b, ignoreCase: V };
  }
  function ct(b, V, $) {
    return { type: "class", parts: b, inverted: V, ignoreCase: $ };
  }
  function Wt() {
    return { type: "any" };
  }
  function Fr() {
    return { type: "end" };
  }
  function br(b) {
    return { type: "other", description: b };
  }
  function Mr(b) {
    var V = Ie[b], $;
    if (V)
      return V;
    for ($ = b - 1; !Ie[$]; )
      $--;
    for (V = Ie[$], V = {
      line: V.line,
      column: V.column
    }; $ < b; )
      t.charCodeAt($) === 10 ? (V.line++, V.column = 1) : V.column++, $++;
    return Ie[b] = V, V;
  }
  function jn(b, V, $) {
    var P = Mr(b), Ce = Mr(V), ye = {
      source: n,
      start: {
        offset: b,
        line: P.line,
        column: P.column
      },
      end: {
        offset: V,
        line: Ce.line,
        column: Ce.column
      }
    };
    return ye;
  }
  function Ae(b) {
    d < He || (d > He && (He = d, ke = []), ke.push(b));
  }
  function Qr(b, V, $) {
    return new zi(
      zi.buildMessage(b, V),
      b,
      V,
      $
    );
  }
  function Yr() {
    var b, V;
    return b = d, zt(), V = y(), V !== e ? (zt(), B = b, b = Fe(V)) : (d = b, b = e), b;
  }
  function pn() {
    var b, V, $;
    for (b = d, V = [], $ = Cn(); $ !== e; )
      V.push($), $ = Cn();
    return B = b, V = $e(V), b = V, b;
  }
  function Cn() {
    var b, V, $, P, Ce;
    if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, R === 0 && Ae(be)), V !== e ? ($ = zt(), P = y(), P !== e ? (zt(), t.charCodeAt(d) === 125 ? (Ce = a, d++) : (Ce = e, R === 0 && Ae(Te)), Ce !== e ? (B = b, b = Be(P)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.substr(d, 3) === l ? (V = l, d += 3) : (V = e, R === 0 && Ae(ue)), V !== e && (B = b, V = Vt()), b = V, b === e && (b = d, V = d, R++, t.charCodeAt(d) === 92 ? ($ = u, d++) : ($ = e, R === 0 && Ae(ge)), $ === e && (t.substr(d, 2) === s ? ($ = s, d += 2) : ($ = e, R === 0 && Ae(be))), R--, $ === e ? V = void 0 : (d = V, V = e), V !== e ? (t.length > d ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ae(ce)), $ !== e ? (B = b, b = ze()) : (d = b, b = e)) : (d = b, b = e), b === e))) {
      if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, R === 0 && Ae(be)), V !== e) {
        if ($ = [], he.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, R === 0 && Ae(re)), P !== e)
          for (; P !== e; )
            $.push(P), he.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, R === 0 && Ae(re));
        else
          $ = e;
        $ !== e ? (t.charCodeAt(d) === 125 ? (P = a, d++) : (P = e, R === 0 && Ae(Te)), P !== e ? (B = b, b = mt()) : (d = b, b = e)) : (d = b, b = e);
      } else
        d = b, b = e;
      b === e && (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, R === 0 && Ae(be)), V !== e && (B = b, V = Ut()), b = V, b === e && (b = d, t.charCodeAt(d) === 92 ? (V = u, d++) : (V = e, R === 0 && Ae(ge)), V !== e ? (t.substr(d, 2) === s ? ($ = s, d += 2) : ($ = e, R === 0 && Ae(be)), $ !== e ? (B = b, b = It($)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = u, d++) : (V = e, R === 0 && Ae(ge)), V !== e ? (t.length > d ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ae(ce)), $ !== e ? (B = b, b = hr($)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = u, d++) : (V = e, R === 0 && Ae(ge)), V !== e && (B = b, V = De()), b = V))));
    }
    return b;
  }
  function y() {
    var b, V, $, P, Ce, ye, Ot, Bt, qr, Pr, Rr;
    return b = d, V = E(), V !== e ? ($ = d, P = zt(), t.charCodeAt(d) === 63 ? (Ce = c, d++) : (Ce = e, R === 0 && Ae(ae)), Ce !== e ? (ye = zt(), Ot = y(), Ot !== e ? (Bt = zt(), t.charCodeAt(d) === 58 ? (qr = f, d++) : (qr = e, R === 0 && Ae(oe)), qr !== e ? (Pr = zt(), Rr = y(), Rr !== e ? (P = [P, Ce, ye, Ot, Bt, qr, Pr, Rr], $ = P) : (d = $, $ = e)) : (d = $, $ = e)) : (d = $, $ = e)) : (d = $, $ = e), $ === e && ($ = null), B = b, b = kt(V, $)) : (d = b, b = e), b;
  }
  function E() {
    var b, V, $, P, Ce, ye, Ot;
    return b = d, V = A(), V !== e ? ($ = d, P = zt(), t.substr(d, 2) === _ ? (Ce = _, d += 2) : (Ce = e, R === 0 && Ae(we)), Ce !== e ? (ye = zt(), Ot = y(), Ot !== e ? (P = [P, Ce, ye, Ot], $ = P) : (d = $, $ = e)) : (d = $, $ = e), $ === e && ($ = null), B = b, b = ar(V, $)) : (d = b, b = e), b;
  }
  function A() {
    var b, V, $, P, Ce, ye, Ot, Bt;
    if (b = d, V = te(), V !== e) {
      for ($ = [], P = d, Ce = zt(), t.substr(d, 2) === h ? (ye = h, d += 2) : (ye = e, R === 0 && Ae(Re)), ye !== e ? (Ot = zt(), Bt = te(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        $.push(P), P = d, Ce = zt(), t.substr(d, 2) === h ? (ye = h, d += 2) : (ye = e, R === 0 && Ae(Re)), ye !== e ? (Ot = zt(), Bt = te(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e);
      B = b, b = rr(V, $);
    } else
      d = b, b = e;
    return b;
  }
  function te() {
    var b, V, $, P, Ce, ye, Ot, Bt;
    if (b = d, V = z(), V !== e) {
      for ($ = [], P = d, Ce = zt(), t.substr(d, 2) === m ? (ye = m, d += 2) : (ye = e, R === 0 && Ae(Ge)), ye !== e ? (Ot = zt(), Bt = z(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        $.push(P), P = d, Ce = zt(), t.substr(d, 2) === m ? (ye = m, d += 2) : (ye = e, R === 0 && Ae(Ge)), ye !== e ? (Ot = zt(), Bt = z(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e);
      B = b, b = er(V, $);
    } else
      d = b, b = e;
    return b;
  }
  function z() {
    var b, V, $, P, Ce, ye, Ot, Bt;
    if (b = d, V = xe(), V !== e) {
      for ($ = [], P = d, Ce = zt(), t.substr(d, 2) === p ? (ye = p, d += 2) : (ye = e, R === 0 && Ae(ee)), ye === e && (t.substr(d, 2) === w ? (ye = w, d += 2) : (ye = e, R === 0 && Ae(Oe))), ye !== e ? (Ot = zt(), Bt = xe(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        $.push(P), P = d, Ce = zt(), t.substr(d, 2) === p ? (ye = p, d += 2) : (ye = e, R === 0 && Ae(ee)), ye === e && (t.substr(d, 2) === w ? (ye = w, d += 2) : (ye = e, R === 0 && Ae(Oe))), ye !== e ? (Ot = zt(), Bt = xe(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e);
      B = b, b = mr(V, $);
    } else
      d = b, b = e;
    return b;
  }
  function xe() {
    var b, V, $, P, Ce, ye, Ot, Bt;
    if (b = d, V = Ve(), V !== e) {
      for ($ = [], P = d, Ce = zt(), t.substr(d, 2) === k ? (ye = k, d += 2) : (ye = e, R === 0 && Ae(Ne)), ye === e && (t.charCodeAt(d) === 62 ? (ye = N, d++) : (ye = e, R === 0 && Ae(nt)), ye === e && (t.substr(d, 2) === H ? (ye = H, d += 2) : (ye = e, R === 0 && Ae(at)), ye === e && (t.charCodeAt(d) === 60 ? (ye = O, d++) : (ye = e, R === 0 && Ae(tt))))), ye !== e ? (Ot = zt(), Bt = Ve(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        $.push(P), P = d, Ce = zt(), t.substr(d, 2) === k ? (ye = k, d += 2) : (ye = e, R === 0 && Ae(Ne)), ye === e && (t.charCodeAt(d) === 62 ? (ye = N, d++) : (ye = e, R === 0 && Ae(nt)), ye === e && (t.substr(d, 2) === H ? (ye = H, d += 2) : (ye = e, R === 0 && Ae(at)), ye === e && (t.charCodeAt(d) === 60 ? (ye = O, d++) : (ye = e, R === 0 && Ae(tt))))), ye !== e ? (Ot = zt(), Bt = Ve(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e);
      B = b, b = vr(V, $);
    } else
      d = b, b = e;
    return b;
  }
  function Ve() {
    var b, V, $, P, Ce, ye, Ot, Bt;
    if (b = d, V = $t(), V !== e) {
      for ($ = [], P = d, Ce = zt(), t.charCodeAt(d) === 43 ? (ye = ne, d++) : (ye = e, R === 0 && Ae(yt)), ye === e && (t.charCodeAt(d) === 45 ? (ye = de, d++) : (ye = e, R === 0 && Ae(rt))), ye !== e ? (Ot = zt(), Bt = $t(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        $.push(P), P = d, Ce = zt(), t.charCodeAt(d) === 43 ? (ye = ne, d++) : (ye = e, R === 0 && Ae(yt)), ye === e && (t.charCodeAt(d) === 45 ? (ye = de, d++) : (ye = e, R === 0 && Ae(rt))), ye !== e ? (Ot = zt(), Bt = $t(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e);
      B = b, b = tr(V, $);
    } else
      d = b, b = e;
    return b;
  }
  function $t() {
    var b, V, $, P, Ce, ye, Ot, Bt;
    if (b = d, V = At(), V !== e) {
      for ($ = [], P = d, Ce = zt(), t.charCodeAt(d) === 47 ? (ye = T, d++) : (ye = e, R === 0 && Ae(Mt)), ye === e && (t.charCodeAt(d) === 42 ? (ye = X, d++) : (ye = e, R === 0 && Ae(ft)), ye === e && (t.charCodeAt(d) === 37 ? (ye = le, d++) : (ye = e, R === 0 && Ae(K)))), ye !== e ? (Ot = zt(), Bt = At(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        $.push(P), P = d, Ce = zt(), t.charCodeAt(d) === 47 ? (ye = T, d++) : (ye = e, R === 0 && Ae(Mt)), ye === e && (t.charCodeAt(d) === 42 ? (ye = X, d++) : (ye = e, R === 0 && Ae(ft)), ye === e && (t.charCodeAt(d) === 37 ? (ye = le, d++) : (ye = e, R === 0 && Ae(K)))), ye !== e ? (Ot = zt(), Bt = At(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e);
      B = b, b = nr(V, $);
    } else
      d = b, b = e;
    return b;
  }
  function At() {
    var b, V, $, P;
    return b = d, V = d, R++, t.charCodeAt(d) === 45 ? ($ = de, d++) : ($ = e, R === 0 && Ae(rt)), R--, $ !== e ? (d = V, V = void 0) : V = e, V !== e ? ($ = Sn(), $ !== e ? (B = b, b = Rt($)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, V = d, R++, t.charCodeAt(d) === 45 ? ($ = de, d++) : ($ = e, R === 0 && Ae(rt)), R--, $ !== e ? (d = V, V = void 0) : V = e, V !== e ? ($ = hn(), $ !== e ? (B = b, b = pt($)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 33 ? (V = C, d++) : (V = e, R === 0 && Ae(_e)), V === e && (t.charCodeAt(d) === 43 ? (V = ne, d++) : (V = e, R === 0 && Ae(yt)), V === e && (t.charCodeAt(d) === 45 ? (V = de, d++) : (V = e, R === 0 && Ae(rt)))), V !== e ? ($ = zt(), P = Xe(), P === e && (P = qt()), P !== e ? (B = b, b = xt(V, P)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = qt()))), b;
  }
  function Xe() {
    var b, V;
    return b = d, t.charCodeAt(d) === 43 ? (V = ne, d++) : (V = e, R === 0 && Ae(yt)), V === e && (t.charCodeAt(d) === 45 ? (V = de, d++) : (V = e, R === 0 && Ae(rt))), V !== e && (B = b, V = ie()), b = V, b;
  }
  function qt() {
    var b, V, $, P, Ce, ye, Ot, Bt, qr, Pr, Rr, mo, to, ro, Qn;
    if (b = d, V = St(), V !== e) {
      for ($ = [], P = d, Ce = zt(), t.charCodeAt(d) === 46 ? (ye = D, d++) : (ye = e, R === 0 && Ae(st)), ye !== e ? (Ot = zt(), Bt = Pn(), Bt !== e ? (qr = zt(), Pr = d, t.charCodeAt(d) === 40 ? (Rr = M, d++) : (Rr = e, R === 0 && Ae(Pe)), Rr !== e ? (mo = zt(), to = Cr(), to !== e ? (ro = zt(), t.charCodeAt(d) === 41 ? (Qn = W, d++) : (Qn = e, R === 0 && Ae(I)), Qn !== e ? (Rr = [Rr, mo, to, ro, Qn], Pr = Rr) : (d = Pr, Pr = e)) : (d = Pr, Pr = e)) : (d = Pr, Pr = e), Pr === e && (Pr = null), Ce = [Ce, ye, Ot, Bt, qr, Pr], P = Ce) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        $.push(P), P = d, Ce = zt(), t.charCodeAt(d) === 46 ? (ye = D, d++) : (ye = e, R === 0 && Ae(st)), ye !== e ? (Ot = zt(), Bt = Pn(), Bt !== e ? (qr = zt(), Pr = d, t.charCodeAt(d) === 40 ? (Rr = M, d++) : (Rr = e, R === 0 && Ae(Pe)), Rr !== e ? (mo = zt(), to = Cr(), to !== e ? (ro = zt(), t.charCodeAt(d) === 41 ? (Qn = W, d++) : (Qn = e, R === 0 && Ae(I)), Qn !== e ? (Rr = [Rr, mo, to, ro, Qn], Pr = Rr) : (d = Pr, Pr = e)) : (d = Pr, Pr = e)) : (d = Pr, Pr = e), Pr === e && (Pr = null), Ce = [Ce, ye, Ot, Bt, qr, Pr], P = Ce) : (d = P, P = e)) : (d = P, P = e);
      B = b, b = yr(V, $);
    } else
      d = b, b = e;
    return b;
  }
  function St() {
    var b, V, $, P, Ce;
    return b = d, V = Pn(), V !== e ? (zt(), t.charCodeAt(d) === 40 ? ($ = M, d++) : ($ = e, R === 0 && Ae(Pe)), $ !== e ? (zt(), P = Cr(), P !== e ? (zt(), t.charCodeAt(d) === 41 ? (Ce = W, d++) : (Ce = e, R === 0 && Ae(I)), Ce !== e ? (B = b, b = kr(V, P)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = Wr()), b;
  }
  function Cr() {
    var b, V, $, P, Ce, ye;
    if (b = d, V = y(), V !== e) {
      for ($ = [], P = d, zt(), t.charCodeAt(d) === 44 ? (Ce = Q, d++) : (Ce = e, R === 0 && Ae(jt)), Ce !== e ? (zt(), ye = y(), ye !== e ? P = ye : (d = P, P = e)) : (d = P, P = e); P !== e; )
        $.push(P), P = d, zt(), t.charCodeAt(d) === 44 ? (Ce = Q, d++) : (Ce = e, R === 0 && Ae(jt)), Ce !== e ? (zt(), ye = y(), ye !== e ? P = ye : (d = P, P = e)) : (d = P, P = e);
      B = b, b = Ct(V, $);
    } else
      d = b, b = e;
    return b === e && (b = zt()), b;
  }
  function Wr() {
    var b, V, $, P;
    return b = so(), b === e && (b = ln(), b === e && (b = Sn(), b === e && (b = hn(), b === e && (b = d, t.charCodeAt(d) === 40 ? (V = M, d++) : (V = e, R === 0 && Ae(Pe)), V !== e ? (zt(), $ = y(), $ !== e ? (zt(), t.charCodeAt(d) === 41 ? (P = W, d++) : (P = e, R === 0 && Ae(I)), P !== e ? (B = b, b = Tr($)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e))))), b;
  }
  function ln() {
    var b, V, $, P;
    return R++, b = d, t.charCodeAt(d) === 39 ? (V = me, d++) : (V = e, R === 0 && Ae(Et)), V !== e ? ($ = Ir(), t.charCodeAt(d) === 39 ? (P = me, d++) : (P = e, R === 0 && Ae(Et)), P !== e ? (B = b, b = Br($)) : (d = b, b = e)) : (d = b, b = e), R--, b === e && (V = e, R === 0 && Ae(lt)), b;
  }
  function Ir() {
    var b, V, $;
    for (b = d, V = [], $ = gn(); $ !== e; )
      V.push($), $ = gn();
    return B = b, V = cr(V), b = V, b;
  }
  function gn() {
    var b, V, $, P, Ce;
    if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, R === 0 && Ae(be)), V !== e ? ($ = zt(), P = y(), P !== e ? (zt(), t.charCodeAt(d) === 125 ? (Ce = a, d++) : (Ce = e, R === 0 && Ae(Te)), Ce !== e ? (B = b, b = ut(P)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.substr(d, 3) === l ? (V = l, d += 3) : (V = e, R === 0 && Ae(ue)), V !== e && (B = b, V = vt()), b = V, b === e && (b = d, V = d, R++, t.charCodeAt(d) === 92 ? ($ = u, d++) : ($ = e, R === 0 && Ae(ge)), $ === e && (t.charCodeAt(d) === 39 ? ($ = me, d++) : ($ = e, R === 0 && Ae(Et)), $ === e && (t.substr(d, 2) === s ? ($ = s, d += 2) : ($ = e, R === 0 && Ae(be)))), R--, $ === e ? V = void 0 : (d = V, V = e), V !== e ? (t.length > d ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ae(ce)), $ !== e ? (B = b, b = Gt()) : (d = b, b = e)) : (d = b, b = e), b === e))) {
      if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, R === 0 && Ae(be)), V !== e) {
        if ($ = [], Se.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, R === 0 && Ae(Dt)), P !== e)
          for (; P !== e; )
            $.push(P), Se.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, R === 0 && Ae(Dt));
        else
          $ = e;
        $ !== e ? (t.charCodeAt(d) === 125 ? (P = a, d++) : (P = e, R === 0 && Ae(Te)), P !== e ? (B = b, b = Zt()) : (d = b, b = e)) : (d = b, b = e);
      } else
        d = b, b = e;
      b === e && (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, R === 0 && Ae(be)), V !== e && (B = b, V = ur()), b = V, b === e && (b = d, t.charCodeAt(d) === 92 ? (V = u, d++) : (V = e, R === 0 && Ae(ge)), V !== e ? (t.substr(d, 2) === s ? ($ = s, d += 2) : ($ = e, R === 0 && Ae(be)), $ !== e ? (B = b, b = dt($)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = u, d++) : (V = e, R === 0 && Ae(ge)), V !== e ? (t.length > d ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ae(ce)), $ !== e ? (B = b, b = fe($)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = u, d++) : (V = e, R === 0 && Ae(ge)), V !== e && (B = b, V = wt()), b = V))));
    }
    return b;
  }
  function hn() {
    var b, V, $;
    if (R++, b = d, t.charCodeAt(d) === 45 ? d++ : R === 0 && Ae(rt), V = [], Z.test(t.charAt(d)) ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ae(q)), $ !== e)
      for (; $ !== e; )
        V.push($), Z.test(t.charAt(d)) ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ae(q));
    else
      V = e;
    return V !== e ? (B = b, b = or()) : (d = b, b = e), R--, b === e && R === 0 && Ae(ot), b;
  }
  function Sn() {
    var b, V, $, P, Ce, ye, Ot, Bt, qr;
    for (R++, b = d, t.charCodeAt(d) === 45 ? d++ : R === 0 && Ae(rt), V = [], Z.test(t.charAt(d)) ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ae(q)); $ !== e; )
      V.push($), Z.test(t.charAt(d)) ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ae(q));
    if (t.charCodeAt(d) === 46 ? ($ = D, d++) : ($ = e, R === 0 && Ae(st)), $ !== e) {
      if (P = [], Z.test(t.charAt(d)) ? (Ce = t.charAt(d), d++) : (Ce = e, R === 0 && Ae(q)), Ce !== e)
        for (; Ce !== e; )
          P.push(Ce), Z.test(t.charAt(d)) ? (Ce = t.charAt(d), d++) : (Ce = e, R === 0 && Ae(q));
      else
        P = e;
      if (P !== e) {
        if (Ce = d, t.charCodeAt(d) === 101 ? (ye = Ee, d++) : (ye = e, R === 0 && Ae(Ft)), ye === e && (t.charCodeAt(d) === 69 ? (ye = ve, d++) : (ye = e, R === 0 && Ae(Kt))), ye !== e) {
          if (t.charCodeAt(d) === 43 ? (Ot = ne, d++) : (Ot = e, R === 0 && Ae(yt)), Ot === e && (t.charCodeAt(d) === 45 ? (Ot = de, d++) : (Ot = e, R === 0 && Ae(rt))), Ot === e && (Ot = null), Bt = [], Z.test(t.charAt(d)) ? (qr = t.charAt(d), d++) : (qr = e, R === 0 && Ae(q)), qr !== e)
            for (; qr !== e; )
              Bt.push(qr), Z.test(t.charAt(d)) ? (qr = t.charAt(d), d++) : (qr = e, R === 0 && Ae(q));
          else
            Bt = e;
          Bt !== e ? (ye = [ye, Ot, Bt], Ce = ye) : (d = Ce, Ce = e);
        } else
          d = Ce, Ce = e;
        Ce === e && (Ce = null), B = b, b = Yt();
      } else
        d = b, b = e;
    } else
      d = b, b = e;
    if (b === e) {
      if (b = d, t.charCodeAt(d) === 45 ? d++ : R === 0 && Ae(rt), V = [], Z.test(t.charAt(d)) ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ae(q)), $ !== e)
        for (; $ !== e; )
          V.push($), Z.test(t.charAt(d)) ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ae(q));
      else
        V = e;
      if (V !== e)
        if (t.charCodeAt(d) === 101 ? ($ = Ee, d++) : ($ = e, R === 0 && Ae(Ft)), $ === e && (t.charCodeAt(d) === 69 ? ($ = ve, d++) : ($ = e, R === 0 && Ae(Kt))), $ !== e) {
          if (t.charCodeAt(d) === 43 ? (P = ne, d++) : (P = e, R === 0 && Ae(yt)), P === e && (t.charCodeAt(d) === 45 ? (P = de, d++) : (P = e, R === 0 && Ae(rt))), P === e && (P = null), Ce = [], Z.test(t.charAt(d)) ? (ye = t.charAt(d), d++) : (ye = e, R === 0 && Ae(q)), ye !== e)
            for (; ye !== e; )
              Ce.push(ye), Z.test(t.charAt(d)) ? (ye = t.charAt(d), d++) : (ye = e, R === 0 && Ae(q));
          else
            Ce = e;
          Ce !== e ? (B = b, b = jr()) : (d = b, b = e);
        } else
          d = b, b = e;
      else
        d = b, b = e;
    }
    return R--, b === e && R === 0 && Ae(Tt), b;
  }
  function so() {
    var b, V, $, P, Ce, ye, Ot, Bt, qr, Pr, Rr;
    if (b = d, et.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, R === 0 && Ae(Xt)), V !== e) {
      if ($ = [], P = [], Je.test(t.charAt(d)) ? (Ce = t.charAt(d), d++) : (Ce = e, R === 0 && Ae(je)), Ce !== e)
        for (; Ce !== e; )
          P.push(Ce), Je.test(t.charAt(d)) ? (Ce = t.charAt(d), d++) : (Ce = e, R === 0 && Ae(je));
      else
        P = e;
      for (P === e && (P = d, t.charCodeAt(d) === 46 ? (Ce = D, d++) : (Ce = e, R === 0 && Ae(st)), Ce !== e ? (ye = d, R++, Ot = d, Bt = zt(), qr = Pn(), qr !== e ? (Pr = zt(), t.charCodeAt(d) === 40 ? (Rr = M, d++) : (Rr = e, R === 0 && Ae(Pe)), Rr !== e ? (Bt = [Bt, qr, Pr, Rr], Ot = Bt) : (d = Ot, Ot = e)) : (d = Ot, Ot = e), R--, Ot === e ? ye = void 0 : (d = ye, ye = e), ye !== e ? (Ce = [Ce, ye], P = Ce) : (d = P, P = e)) : (d = P, P = e)); P !== e; ) {
        if ($.push(P), P = [], Je.test(t.charAt(d)) ? (Ce = t.charAt(d), d++) : (Ce = e, R === 0 && Ae(je)), Ce !== e)
          for (; Ce !== e; )
            P.push(Ce), Je.test(t.charAt(d)) ? (Ce = t.charAt(d), d++) : (Ce = e, R === 0 && Ae(je));
        else
          P = e;
        P === e && (P = d, t.charCodeAt(d) === 46 ? (Ce = D, d++) : (Ce = e, R === 0 && Ae(st)), Ce !== e ? (ye = d, R++, Ot = d, Bt = zt(), qr = Pn(), qr !== e ? (Pr = zt(), t.charCodeAt(d) === 40 ? (Rr = M, d++) : (Rr = e, R === 0 && Ae(Pe)), Rr !== e ? (Bt = [Bt, qr, Pr, Rr], Ot = Bt) : (d = Ot, Ot = e)) : (d = Ot, Ot = e), R--, Ot === e ? ye = void 0 : (d = ye, ye = e), ye !== e ? (Ce = [Ce, ye], P = Ce) : (d = P, P = e)) : (d = P, P = e));
      }
      B = b, b = v();
    } else
      d = b, b = e;
    return b;
  }
  function Pn() {
    var b, V, $, P;
    if (b = d, et.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, R === 0 && Ae(Xt)), V !== e) {
      for ($ = [], Je.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, R === 0 && Ae(je)); P !== e; )
        $.push(P), Je.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, R === 0 && Ae(je));
      B = b, b = se();
    } else
      d = b, b = e;
    return b;
  }
  function zt() {
    var b, V;
    for (R++, b = [], qe.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, R === 0 && Ae(_t)); V !== e; )
      b.push(V), qe.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, R === 0 && Ae(_t));
    return R--, V = e, R === 0 && Ae(Ke), b;
  }
  if (Jt = i(), Jt !== e && d === t.length)
    return Jt;
  throw Jt !== e && d < t.length && Ae(Fr()), Qr(
    ke,
    He < t.length ? t.charAt(He) : null,
    He < t.length ? jn(He, He + 1) : jn(He, He)
  );
}
const M_ = 2147483647, P_ = -2147483648, N_ = Number.MAX_VALUE, z_ = Number.MIN_VALUE, We = "string", Le = "integer", gt = "number", Gr = "boolean", fn = "color", $n = "url", Nr = "datetime", fr = "dict", dr = "array", L_ = "function";
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
function cd(t, r) {
  for (; t.length < r; )
    t = "0" + t;
  return t;
}
function pr(t, r = 1, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = fo(t);
  return n ? (n.a *= r, ca(n)) : e;
}
function O_(t, r, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = fo(t);
  return n ? (n.a = r, ca(n)) : e;
}
function ca(t) {
  return t.a === 255 ? `#${[t.r, t.g, t.b].map((r) => cd(Math.round(r).toString(16), 2)).join("")}` : `rgba(${t.r},${t.g},${t.b},${(t.a / 255).toFixed(2)})`;
}
function fo(t) {
  const r = (
    // #AARRGGBB
    t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #ARGB
    t.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])$/i) || // #RRGGBB
    t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #RGB
    t.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)
  );
  if (r) {
    if (r.length === 5) {
      const [u, c, f, _, h] = r, m = f.length === 2 ? f : f + f, p = _.length === 2 ? _ : _ + _, w = h.length === 2 ? h : h + h, k = c.length === 2 ? c : c + c;
      return {
        a: parseInt(k, 16),
        r: parseInt(m, 16),
        g: parseInt(p, 16),
        b: parseInt(w, 16)
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
class fa extends Error {
}
function Hs(t) {
  return t.type === "url" || t.type === "color" ? {
    type: "string",
    value: t.value
  } : t;
}
function fd(t) {
  return t.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, "");
}
function ji(t, r) {
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
      return fd(t.value);
    if (t.type === "color")
      return Ei(rl(t.value));
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
function dn(t) {
  let r = ji(t, !1);
  return t.type === "string" && (r = "'" + r.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'"), r;
}
function Yn(t) {
  return t === "datetime" ? "DateTime" : t.charAt(0).toUpperCase() + t.substring(1);
}
function Ci(t, r) {
  return _n(r);
}
function Ln(t, r) {
  if (r < ss || r > is)
    throw new Error("Integer overflow.");
}
function _o(t) {
  if (typeof t != "string")
    throw new Error("Incorrect url value.");
  try {
    new URL(t);
  } catch {
    throw new Error("Incorrect url value.");
  }
}
function B_(t) {
  try {
    return _o(t), !0;
  } catch {
    return !1;
  }
}
function R_(t) {
  const r = /* @__PURE__ */ new Set();
  return no(t, {
    Variable(e) {
      r.add(e.id.name);
    }
  }), [...r];
}
function Fn(t, r) {
  throw new fa(`Failed to evaluate [${t}]. ${r}`);
}
function H_(t, r) {
  throw new Error(r);
}
function rl(t) {
  const r = fo(t);
  if (r)
    return r;
  throw new Error("Unable to convert value to Color, expected format #AARRGGBB.");
}
function Ei(t) {
  return `#${[t.a, t.r, t.g, t.b].map((r) => {
    if (r < 0 || r > 255)
      throw new Error("Value out of range 0..1.");
    return cd(Math.round(r).toString(16), 2);
  }).join("").toUpperCase()}`;
}
function ni(t) {
  return Ei(rl(t));
}
function Ll(t) {
  return {
    type: gt,
    value: Number(t.value)
  };
}
const W_ = {
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
function nl(t, r, e) {
  if (e === "function")
    throw new Error("Cannot convert function");
  const n = W_[e];
  let o = typeof r;
  if (n === "array" && !Array.isArray(r) || n !== "array" && o !== n || o === "object" && r === null)
    throw o === "object" && (Array.isArray(r) ? o = "array" : r === null ? o = "null" : o = "dict"), new Error(`Incorrect value type: expected ${Yn(e)}, got ${Yn(o)}.`);
  if (n === "number" && e === "integer") {
    t && Ln(t, r);
    try {
      r = _n(r);
    } catch {
      throw new Error("Cannot convert value to integer.");
    }
  }
  return n === "string" && e === "color" && (r = ni(r)), n === "string" && e === "url" && _o(r), n === "boolean" && e === Gr && (r = r ? 1 : 0), {
    type: e,
    value: r
  };
}
function U_(t) {
  return t.type === "number" || t.type === "integer" ? Number(t.value) : t.type === "boolean" ? !!t.value : t.value;
}
function ol(t) {
  return U_(
    nl(void 0, t.value, t.type)
  );
}
const rs = /* @__PURE__ */ new Map(), Ol = /* @__PURE__ */ new Map(), Cs = /* @__PURE__ */ new Map(), Bl = /* @__PURE__ */ new Map();
function U(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = rs.get(t) || [];
  rs.has(t) || rs.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  Ol.set(i, n);
}
function Hr(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = Cs.get(t) || [];
  Cs.has(t) || Cs.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  Bl.set(i, n);
}
function G_(t, r, e) {
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
    }), l.type === gt && r[a].type === Le) {
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
function dd(t, r) {
  if (!t)
    return {
      type: "missing"
    };
  let e = null, n = null;
  for (let o = 0; o < t.length; ++o) {
    const i = G_(t[o], r, t.length > 1);
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
function Rl(t, r, e) {
  return dd(t.get(r), e);
}
function _d(t, r) {
  return r.map((e, n) => {
    let o = n >= t.args.length ? t.args[t.args.length - 1] : t.args[n];
    return typeof o != "object" && (o = {
      type: o
    }), o.type === gt && e.type === Le ? Ll(e) : e;
  });
}
function Pa(t, r) {
  return t + ":" + r.args.map((e) => typeof e == "string" ? e : e.type).join("#");
}
function Hn(t, r) {
  return {
    type: We,
    value: ji(r, !0)
  };
}
function Na(t, r) {
  const e = Number(r.value);
  if (Number.isNaN(e) || !Number.isFinite(e))
    throw new Error("Unable to convert value to Number.");
  if (r.value === "")
    throw new Error("Unable to convert value to Number.");
  return {
    type: gt,
    value: e
  };
}
function J_(t, r) {
  if (r.value > is || r.value < ss)
    throw new Error("Unable to convert value to Integer.");
  const e = r.value - r.value % 1;
  return {
    type: Le,
    value: _n(e)
  };
}
function q_(t, r) {
  let e;
  try {
    e = _n(r.value);
  } catch {
    throw new Error("Unable to convert value to Integer.");
  }
  return {
    type: Le,
    value: e
  };
}
function K_(t, r) {
  return {
    type: Le,
    value: _n(r.value ? 1 : 0)
  };
}
function Y_(t, r) {
  const e = Number(r.value);
  if (e !== 1 && e !== 0)
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Gr,
    value: e
  };
}
function X_(t, r) {
  if (r.value !== "true" && r.value !== "false")
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Gr,
    value: r.value === "true" ? 1 : 0
  };
}
function Z_(t, r) {
  return {
    type: fn,
    value: ni(r.value)
  };
}
function Q_(t, r) {
  return _o(r.value), {
    type: $n,
    value: r.value
  };
}
function x_(t, r) {
  try {
    return {
      type: We,
      value: encodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to encodeUri string.");
  }
}
function $_(t, r) {
  try {
    return {
      type: We,
      value: decodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to decodeUri string.");
  }
}
function da(t, r, e, n) {
  const o = t.variables.get(r.value);
  let i;
  return o && o.getType() === n ? (i = o.getValue(), t.storeUsedVars || (t.storeUsedVars = /* @__PURE__ */ new Set()), t.storeUsedVars.add(o)) : i = e.value, n === "color" ? i = ni(i) : n === "url" && _o(i), {
    type: n,
    // value is synced with type by params
    value: i
  };
}
function _s(t, r, e) {
  return da(t, r, e, e.type);
}
function za(t, r, e) {
  return da(t, r, e, "color");
}
function La(t, r, e) {
  return da(t, r, e, "url");
}
function pd(t, r) {
  for (let e = 0; e < r.length; ++e) {
    const n = t.charAt(e), o = r.charAt(e);
    if (n !== o && o)
      return o;
  }
  return "";
}
const Ws = 1234567890;
function Oa(t) {
  const r = new Intl.NumberFormat(t, {
    maximumFractionDigits: 0
  }), e = new Intl.NumberFormat(t, {
    minimumFractionDigits: 1
  }), n = r.format(Ws), o = e.format(Ws);
  return pd(n, o);
}
function ep(t) {
  const r = new Intl.NumberFormat(t, {
    useGrouping: !1
  }), e = new Intl.NumberFormat(t, {
    useGrouping: !0
  }), n = r.format(Ws), o = e.format(Ws);
  return pd(n, o);
}
function Zo(t, r, e, n) {
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
    let w = p;
    for (; f[w] === "#"; )
      ++w;
    let N = new Intl.NumberFormat((n == null ? void 0 : n.value) || void 0, {
      useGrouping: !1,
      minimumIntegerDigits: Math.min(Math.max(m, 1), 21),
      minimumFractionDigits: Math.min(Math.max(p, 0), 100),
      maximumFractionDigits: Math.min(Math.max(w, p, 0), 100),
      roundingMode: "halfEven"
    }).format(r.value);
    if (_ > -1 && h > 0) {
      const H = ep(n == null ? void 0 : n.value), O = Oa(n == null ? void 0 : n.value);
      if (H && O) {
        const ne = N.split(O), de = ne[0];
        let T = "";
        for (let X = de.length - 1; X >= 0; --X)
          T = de[X] + T, X > 0 && (de.length - X) % h === 0 && (T = H + T);
        N = T + (ne.length > 1 ? O + ne[1] : "");
      }
    }
    if (p === 0 && w === 0 && o.endsWith(".")) {
      const H = Oa(n == null ? void 0 : n.value);
      H && (N += H);
    }
    return {
      type: We,
      value: N
    };
  } catch (m) {
    throw new Error("Incorrect or unsupported number format." + m + " " + (n == null ? void 0 : n.value) || void 0);
  }
}
function tp() {
  U("toString", [Le], Hn), U("toString", [gt], Hn), U("toString", [Gr], Hn), U("toString", [fn], Hn), U("toString", [$n], Hn), U("toString", [We], Hn), U("toString", [dr], Hn), U("toString", [fr], Hn), U("toNumber", [Le], Na), U("toNumber", [We], Na), U("toInteger", [gt], J_), U("toInteger", [We], q_), U("toInteger", [Gr], K_), U("toBoolean", [Le], Y_), U("toBoolean", [We], X_), U("toColor", [We], Z_), U("toUrl", [We], Q_), U("encodeUri", [We], x_), U("decodeUri", [We], $_), U("getIntegerValue", [We, Le], _s), U("getNumberValue", [We, gt], _s), U("getBooleanValue", [We, Gr], _s), U("getStringValue", [We, We], _s), U("getColorValue", [We, fn], za), U("getColorValue", [We, We], za), U("getUrlValue", [We, $n], La), U("getUrlValue", [We, We], La), Hr("toString", [Le], Hn), Hr("toString", [gt], Hn), Hr("toString", [Gr], Hn), Hr("toString", [fn], Hn), Hr("toString", [$n], Hn), Hr("toString", [We], Hn), Hr("toString", [dr], Hn), Hr("toString", [fr], Hn), U("decimalFormat", [Le, We], Zo), U("decimalFormat", [gt, We], Zo), U("decimalFormat", [Le, We, We], Zo), U("decimalFormat", [gt, We, We], Zo), Hr("decimalFormat", [Le, We], Zo), Hr("decimalFormat", [gt, We], Zo), Hr("decimalFormat", [Le, We, We], Zo), Hr("decimalFormat", [gt, We, We], Zo);
}
function Wn(t, r) {
  return !t || !r ? t : t.padStart(r, "0");
}
const Hl = {
  G(t, r) {
    let e;
    return t < 4 ? e = "short" : t === 5 ? e = "narrow" : e = "long", r({
      era: e
    }, "era");
  },
  d(t, r) {
    return Wn(r({
      day: "numeric"
    }, "day"), t > 1 ? t : 0);
  },
  D(t, r) {
    return Wn(r({}, "dayofyear"), t > 1 ? t : 0);
  },
  F(t, r) {
    return Wn(r({}, "dayofweekinmonth"), t > 1 ? t : 0);
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
    return Wn(r({
      year: t === 2 ? "2-digit" : "numeric"
    }, "year"), t > 2 ? t : void 0);
  },
  Y(t, r) {
    return Wn(r({
      year: t === 2 ? "2-digit" : "numeric"
    }, "weekyear"), t > 2 ? t : void 0);
  },
  u(t, r) {
    return Wn(r({
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
    return t > 2 ? Hl.E(t, r) : Wn(r({}, "weekdaynumeric"), t > 1 ? t : void 0);
  },
  w(t, r) {
    return Wn(r({}, "week"), t > 1 ? t : void 0);
  },
  W(t, r) {
    return Wn(r({}, "weekofmonth"), t > 1 ? t : void 0);
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
    return Wn(n, t > 1 ? t : void 0);
  },
  h(t, r) {
    return Wn(r({
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
    return Wn(n, t > 1 ? t : void 0);
  },
  k(t, r) {
    return Wn(r({
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
    return Wn(r({
      minute: "numeric"
    }, "minute"), t > 1 ? t : void 0);
  },
  s(t, r) {
    return Wn(r({
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
    return (e >= 0 ? "+" : "-") + Wn(String(o), 4);
  }
}, rp = /(\w)\1*|''|'(''|[^'])+('|$)|./g, np = /^'([^]*?)'?$/, op = /''/g, ip = /[a-zA-Z]/, _a = 1e3 * 60 * 60 * 24;
function sp(t) {
  const r = t.match(np);
  return r ? r[1].replace(op, "'") : t;
}
function Wl(t, r, e) {
  const n = t[r ? "getUTCDay" : "getDay"](), o = n < e ? e - n - 7 : e - n;
  return new Date(t.getTime() + _a * o);
}
function Ba(t, r, e) {
  const n = new Date(t);
  return n[r ? "setUTCDate" : "setDate"](1), n[r ? "setUTCMonth" : "setMonth"](0), Wl(n, r, e);
}
function Ra(t, r) {
  return Math.round((t.getTime() - r.getTime()) / _a);
}
function Ha(t, r, e) {
  let n = 0;
  const o = Ba(t, r || !1, e), i = new Date(t);
  i[r ? "setUTCFullYear" : "setFullYear"](t[r ? "getUTCFullYear" : "getFullYear"]() + 1);
  const s = Ba(i, r || !1, e), a = t.getTime() < o.getTime(), l = t.getTime() >= s.getTime();
  let u = t[r ? "getUTCFullYear" : "getFullYear"]();
  if (a) {
    --u, o[r ? "setUTCFullYear" : "setFullYear"](o[r ? "getUTCFullYear" : "getFullYear"]() - 1);
    const c = Ra(Wl(t, r, e), o);
    n = Math.round(c / 7) + 1;
  } else if (l)
    ++u, n = 1;
  else {
    const c = Ra(Wl(t, r, e), o);
    n = Math.round(c / 7) + 1;
  }
  return {
    week: n,
    year: u
  };
}
function lp(t, r, {
  locale: e,
  isUTC: n,
  weekStartDay: o = 0
} = {}) {
  const i = (s, a) => {
    if (a === "week") {
      const { week: c } = Ha(t, n || !1, o);
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
      const f = Math.ceil((t.getTime() - c.getTime()) / _a);
      return String(f);
    }
    if (a === "weekyear") {
      let { year: c } = Ha(t, n || !1, o);
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
  return (r.match(rp) || []).map((s) => {
    if (s === "''")
      return "'";
    const a = s[0];
    if (a === "'")
      return sp(s);
    if (Hl[a])
      return Hl[a](s.length, i);
    if (a.match(ip))
      throw new Error(
        `Format string contains an unescaped latin alphabet character "${a}"`
      );
    return s;
  }).join("");
}
function ap(t) {
  const r = new Date(t);
  return r.setUTCMonth(r.getUTCMonth() + 1), r.setUTCDate(0), r.getUTCDate();
}
function up(t, r) {
  return {
    type: Nr,
    value: new Date(Number(r.value) * 1e3)
  };
}
function cp(t, r) {
  const e = new Date(Number(r.value) * 1e3), n = e.getTimezoneOffset();
  return e.setMinutes(e.getMinutes() - n), {
    type: Nr,
    value: e
  };
}
function fp() {
  return {
    type: Nr,
    value: /* @__PURE__ */ new Date()
  };
}
function dp(t, r, e) {
  return {
    type: Nr,
    value: new Date(r.value.getTime() + Number(e.value))
  };
}
function _p(t, r, e) {
  const n = new Date(r.value);
  return n.setUTCFullYear(Number(e.value)), {
    type: Nr,
    value: n
  };
}
function pp(t, r, e) {
  const n = Number(e.value);
  if (n < 1 || n > 12)
    throw new Error(`Expecting month in [1..12], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMonth(n - 1), {
    type: Nr,
    value: o
  };
}
function gp(t, r, e) {
  const n = new Date(r.value), o = Number(e.value);
  if (o <= 0 && o !== -1 || o > ap(n))
    throw new Error(`Unable to set day ${o} for date ${ji(r, !1)}.`);
  return n.setUTCDate(o === -1 ? 0 : o), {
    type: Nr,
    value: n
  };
}
function hp(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 23)
    throw new Error(`Expecting hours in [0..23], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCHours(n), {
    type: Nr,
    value: o
  };
}
function mp(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting minutes in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMinutes(n), {
    type: Nr,
    value: o
  };
}
function bp(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting seconds in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCSeconds(n), {
    type: Nr,
    value: o
  };
}
function yp(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 999)
    throw new Error(`Expecting millis in [0..999], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMilliseconds(n), {
    type: Nr,
    value: o
  };
}
const oi = (t) => (r, e) => {
  let o = new Date(e.value.getTime())[t]();
  return t === "getUTCMonth" ? ++o : t === "getUTCDay" && o === 0 && (o = 7), {
    type: Le,
    value: _n(o)
  };
};
function gd(t) {
  return (r, e, n, o) => ({
    type: We,
    value: lp(e.value, n.value, {
      locale: o == null ? void 0 : o.value,
      isUTC: t,
      weekStartDay: r.weekStartDay
    })
  });
}
const wp = oi("getUTCFullYear"), kp = oi("getUTCMonth"), vp = oi("getUTCDate"), jp = oi("getUTCDay"), Cp = oi("getUTCHours"), Ep = oi("getUTCMinutes"), Ap = oi("getUTCSeconds"), Sp = oi("getUTCMilliseconds"), Wa = gd(!1), Ua = gd(!0);
function Vp() {
  U("parseUnixTime", [Le], up), U("parseUnixTimeAsLocal", [Le], cp), U("nowLocal", [], fp), U("addMillis", [Nr, Le], dp), U("setYear", [Nr, Le], _p), U("setMonth", [Nr, Le], pp), U("setDay", [Nr, Le], gp), U("setHours", [Nr, Le], hp), U("setMinutes", [Nr, Le], mp), U("setSeconds", [Nr, Le], bp), U("setMillis", [Nr, Le], yp), U("getYear", [Nr], wp), U("getMonth", [Nr], kp), U("getDay", [Nr], vp), U("getDayOfWeek", [Nr], jp), U("getHours", [Nr], Cp), U("getMinutes", [Nr], Ep), U("getSeconds", [Nr], Ap), U("getMillis", [Nr], Sp), U("formatDateAsLocal", [Nr, We], Wa), U("formatDateAsUTC", [Nr, We], Ua), U("formatDateAsLocalWithLocale", [Nr, We, We], Wa), U("formatDateAsUTCWithLocale", [Nr, We, We], Ua);
}
function Fp(t) {
  return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Y(t, r = {}) {
  const e = t;
  return e.level = r.level || "error", r.additional && (e.additional = r.additional), e;
}
function Ip(t, r) {
  return {
    type: Le,
    value: _n(r.value.length)
  };
}
function Dp(t, r, e) {
  return {
    type: Gr,
    value: r.value.includes(e.value) ? 1 : 0
  };
}
function Tp(t, r, e, n) {
  if (n.value < e.value)
    throw new Error("Indexes should be in ascending order.");
  if (e.value < 0 || e.value > r.value.length || n.value < 0 || n.value > r.value.length)
    throw new Error("Indexes are out of bounds.");
  return {
    type: We,
    value: r.value.substring(Number(e.value), Number(n.value))
  };
}
function Mp(t, r, e, n) {
  let o;
  return e.value ? o = r.value.replace(new RegExp(Fp(e.value), "g"), n.value) : o = r.value, {
    type: We,
    value: o
  };
}
function Pp(t, r, e) {
  return {
    type: Le,
    value: _n(r.value.indexOf(e.value))
  };
}
function Np(t, r, e) {
  return {
    type: Le,
    value: _n(r.value.lastIndexOf(e.value))
  };
}
function zp(t, r) {
  return {
    type: We,
    value: r.value.trim()
  };
}
function Lp(t, r) {
  return {
    type: We,
    value: r.value.replace(/^\s+/, "")
  };
}
function Op(t, r) {
  return {
    type: We,
    value: r.value.replace(/\s+$/, "")
  };
}
function Bp(t, r) {
  return {
    type: We,
    value: r.value.toUpperCase()
  };
}
function Rp(t, r) {
  return {
    type: We,
    value: r.value.toLowerCase()
  };
}
function hd(t, r, e, n) {
  if (!n.value.length)
    return t.warnings.push(Y(new Error("String for padding is empty."), {
      level: "warn"
    })), "";
  let o = "";
  const i = r.type === We ? r.value : ji(r, !1);
  for (; o.length + i.length < e.value; )
    o += n.value;
  return o.length > 0 && o.length + i.length > e.value && (o = o.substring(0, Number(e.value) - Number(i.length))), o;
}
function Ga(t, r, e, n) {
  const o = hd(t, r, e, n);
  return {
    type: We,
    value: o + ji(r, !1)
  };
}
function Ja(t, r, e, n) {
  const o = hd(t, r, e, n);
  return {
    type: We,
    value: ji(r, !1) + o
  };
}
function Hp(t, r, e) {
  let n;
  try {
    n = new RegExp(e.value);
  } catch {
    throw new Error("Invalid regular expression.");
  }
  return {
    type: Gr,
    value: n.test(r.value) ? 1 : 0
  };
}
function Wp(t, r) {
  return {
    type: We,
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping
    value: r.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  };
}
function Up() {
  U("len", [We], Ip), U("contains", [We, We], Dp), U("substring", [We, Le, Le], Tp), U("replaceAll", [We, We, We], Mp), U("index", [We, We], Pp), U("lastIndex", [We, We], Np), U("trim", [We], zp), U("trimLeft", [We], Lp), U("trimRight", [We], Op), U("toUpperCase", [We], Bp), U("toLowerCase", [We], Rp), U("padStart", [We, Le, We], Ga), U("padStart", [Le, Le, We], Ga), U("padEnd", [We, Le, We], Ja), U("padEnd", [Le, Le, We], Ja), U("testRegex", [We, We], Hp), U("encodeRegex", [We], Wp);
}
function Gp(t, r, e) {
  if (e.value === mi)
    throw new Error("Division by zero is not supported.");
  let n = r.value / e.value;
  return n = Ci(t, n), Ln(t, n), {
    type: Le,
    value: n
  };
}
function Jp(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value / e.value;
  return {
    type: gt,
    value: n
  };
}
function qp(t, r, e) {
  if (e.value === mi)
    throw new Error("Division by zero is not supported.");
  let n = r.value % e.value;
  return n = Ci(t, n), Ln(t, n), {
    type: Le,
    value: n
  };
}
function Kp(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value % e.value;
  return {
    type: gt,
    value: n
  };
}
function Yp(t, ...r) {
  let e = r.length ? r[0].value : mi;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value, e = Ci(t, e), Ln(t, e);
  return {
    type: Le,
    value: e
  };
}
function Xp(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value;
  return {
    type: gt,
    value: e
  };
}
function Zp(t, ...r) {
  let e = r.length ? r[0].value : mi;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value, e = Ci(t, e), Ln(t, e);
  return {
    type: Le,
    value: e
  };
}
function Qp(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value;
  return {
    type: gt,
    value: e
  };
}
function xp(t, ...r) {
  let e = mi;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value, e = Ci(t, e), Ln(t, e);
  return {
    type: Le,
    value: e
  };
}
function $p(t, ...r) {
  let e = 0;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value;
  return {
    type: gt,
    value: e
  };
}
function eg(t, r) {
  const e = ad(r.value);
  return Ln(t, e), {
    type: r.type,
    value: e
  };
}
function tg(t, r) {
  const e = Math.abs(r.value);
  return {
    type: gt,
    value: e
  };
}
function rg(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  let e = r[0].value;
  for (let n = 1; n < r.length; ++n)
    r[n].value > e && (e = r[n].value);
  return {
    type: Le,
    value: e
  };
}
function ng(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: gt,
    value: Math.max(...r.map((e) => e.value))
  };
}
function og(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  let e = r[0].value;
  for (let n = 1; n < r.length; ++n)
    r[n].value < e && (e = r[n].value);
  return {
    type: Le,
    value: e
  };
}
function ig(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: gt,
    value: Math.min(...r.map((e) => e.value))
  };
}
function sg() {
  return {
    type: gt,
    value: N_
  };
}
function lg() {
  return {
    type: gt,
    value: z_
  };
}
function ag(t) {
  return Ln(t, is), {
    type: Le,
    value: is
  };
}
function ug(t) {
  return Ln(t, ss), {
    type: Le,
    value: ss
  };
}
function cg(t, r) {
  const e = Math.sign(r.value);
  return {
    type: gt,
    // js treats Math.round(-0.5) as 0, which is different to other platforms
    value: e * Math.round(Math.abs(r.value))
  };
}
function fg(t, r) {
  return {
    type: gt,
    value: Math.floor(r.value)
  };
}
function dg(t, r) {
  return {
    type: gt,
    value: Math.ceil(r.value)
  };
}
function _g(t, r) {
  return {
    type: Le,
    value: ud(r.value)
  };
}
function pg(t, r) {
  return {
    type: gt,
    value: Math.sign(r.value)
  };
}
function gg(t, r, e) {
  let n;
  if (e.value === mi)
    n = r.value;
  else if (r.value === mi)
    n = _n(0);
  else {
    const o = ud(e.value);
    n = ad(r.value) * o;
  }
  return Ln(t, n), {
    type: Le,
    value: n
  };
}
function hg(t, r, e) {
  let n = Math.sign(e.value);
  n === 0 && (n = Object.is(n, 0) ? 1 : -1);
  const o = Math.abs(r.value) * n;
  return {
    type: gt,
    value: o
  };
}
function mg() {
  U("div", [Le, Le], Gp), U("div", [gt, gt], Jp), U("mod", [Le, Le], qp), U("mod", [gt, gt], Kp), U("mul", [{
    type: Le,
    isVararg: !0
  }], Yp), U("mul", [{
    type: gt,
    isVararg: !0
  }], Xp), U("sub", [{
    type: Le,
    isVararg: !0
  }], Zp), U("sub", [{
    type: gt,
    isVararg: !0
  }], Qp), U("sum", [{
    type: Le,
    isVararg: !0
  }], xp), U("sum", [{
    type: gt,
    isVararg: !0
  }], $p), U("abs", [Le], eg), U("abs", [gt], tg), U("max", [{
    type: Le,
    isVararg: !0
  }], rg), U("max", [{
    type: gt,
    isVararg: !0
  }], ng), U("min", [{
    type: Le,
    isVararg: !0
  }], og), U("min", [{
    type: gt,
    isVararg: !0
  }], ig), U("maxNumber", [], sg), U("minNumber", [], lg), U("maxInteger", [], ag), U("minInteger", [], ug), U("round", [gt], cg), U("floor", [gt], fg), U("ceil", [gt], dg), U("signum", [Le], _g), U("signum", [gt], pg), U("copySign", [Le, Le], gg), U("copySign", [gt, gt], hg);
}
function il(t) {
  return (r, e) => {
    const n = rl(e.value);
    return {
      type: gt,
      value: n[t] / 255
    };
  };
}
function sl(t) {
  return (r, e, n) => {
    const o = rl(e.value);
    return o[t] = n.value * 255, {
      type: fn,
      value: Ei(o)
    };
  };
}
const qa = il("a"), Ka = il("r"), Ya = il("g"), Xa = il("b"), Za = sl("a"), Qa = sl("r"), xa = sl("g"), $a = sl("b");
function bg(t, r, e, n) {
  const o = {
    a: 255,
    r: r.value * 255,
    g: e.value * 255,
    b: n.value * 255
  };
  return {
    type: fn,
    value: Ei(o)
  };
}
function yg(t, r, e, n, o) {
  const i = {
    a: r.value * 255,
    r: e.value * 255,
    g: n.value * 255,
    b: o.value * 255
  };
  return {
    type: fn,
    value: Ei(i)
  };
}
function wg() {
  U("getColorAlpha", [We], qa), U("getColorAlpha", [fn], qa), U("getColorRed", [We], Ka), U("getColorRed", [fn], Ka), U("getColorGreen", [We], Ya), U("getColorGreen", [fn], Ya), U("getColorBlue", [We], Xa), U("getColorBlue", [fn], Xa), U("setColorAlpha", [We, gt], Za), U("setColorAlpha", [fn, gt], Za), U("setColorRed", [We, gt], Qa), U("setColorRed", [fn, gt], Qa), U("setColorGreen", [We, gt], xa), U("setColorGreen", [fn, gt], xa), U("setColorBlue", [We, gt], $a), U("setColorBlue", [fn, gt], $a), U("rgb", [gt, gt, gt], bg), U("argb", [gt, gt, gt, gt], yg);
}
function ii(t, r, e, n) {
  if (r.value < 0)
    throw new Error("Expecting non-negative number of milliseconds.");
  let o = _n(r.value) / _n(e);
  return Ln(t, o), n && (o = _n(o) % _n(n)), {
    type: Le,
    value: o
  };
}
const md = 1e3, kg = 60, bd = 1e3 * 60, vg = 60, yd = 1e3 * 60 * 60, jg = 24, Cg = 1e3 * 60 * 60 * 24, Eg = 1e3 * 60 * 60 * 24 * 7;
function Ag(t, r) {
  return ii(t, r, md, kg);
}
function Sg(t, r) {
  return ii(t, r, md);
}
function Vg(t, r) {
  return ii(t, r, bd, vg);
}
function Fg(t, r) {
  return ii(t, r, bd);
}
function Ig(t, r) {
  return ii(t, r, yd, jg);
}
function Dg(t, r) {
  return ii(t, r, yd);
}
function Tg(t, r) {
  return ii(t, r, Cg);
}
function Mg(t, r) {
  return ii(t, r, Eg);
}
function Pg() {
  U("getIntervalSeconds", [Le], Ag), U("getIntervalTotalSeconds", [Le], Sg), U("getIntervalMinutes", [Le], Vg), U("getIntervalTotalMinutes", [Le], Fg), U("getIntervalHours", [Le], Ig), U("getIntervalTotalHours", [Le], Dg), U("getIntervalTotalDays", [Le], Tg), U("getIntervalTotalWeeks", [Le], Mg);
}
function Ng(t, r) {
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
function si(t) {
  return (r, e, ...n) => {
    if (n.length === 0)
      throw new Error("Non empty argument list is required.");
    const o = Ng(e.value, n.map((i) => i.value));
    return nl(r, o, t);
  };
}
function Hi(t, r) {
  return (e, n, o, ...i) => {
    try {
      return t(e, o, ...i);
    } catch {
      let a = n.value;
      return r === "color" ? a = ni(a) : r === "url" && _o(a), {
        type: r,
        value: a
      };
    }
  };
}
const Es = si(We), As = si(gt), Ss = si(Le), Vs = si(Gr), Fs = si(fn), Is = si($n), Ul = si(dr), Gl = si(fr), eu = Hi(Es, We), tu = Hi(As, gt), ru = Hi(Ss, Le), nu = Hi(Vs, Gr), ps = Hi(Fs, fn), gs = Hi(Is, $n);
function zg(t, r, ...e) {
  try {
    return Ul(t, r, ...e);
  } catch {
    return {
      type: dr,
      value: []
    };
  }
}
function Lg(t, r, ...e) {
  try {
    return Gl(t, r, ...e);
  } catch {
    return {
      type: fr,
      value: {}
    };
  }
}
function Og(t, r, e) {
  return {
    type: Gr,
    value: e.value in r.value ? 1 : 0
  };
}
function Bg(t, r) {
  return {
    type: Gr,
    value: Object.keys(r.value).length ? 0 : 1
  };
}
function Rg(t, r) {
  return {
    type: Le,
    value: _n(Object.keys(r.value).length)
  };
}
function ou(t, r) {
  return {
    type: dr,
    value: Object.keys(r.value)
  };
}
function iu(t, r) {
  return {
    type: dr,
    value: Object.values(r.value)
  };
}
function Hg() {
  const t = {
    type: We,
    isVararg: !0
  };
  U("getDictString", [fr, t], Es), U("getStringFromDict", [fr, t], Es), U("getDictNumber", [fr, t], As), U("getNumberFromDict", [fr, t], As), U("getDictInteger", [fr, t], Ss), U("getIntegerFromDict", [fr, t], Ss), U("getDictBoolean", [fr, t], Vs), U("getBooleanFromDict", [fr, t], Vs), U("getDictColor", [fr, t], Fs), U("getColorFromDict", [fr, t], Fs), U("getDictUrl", [fr, t], Is), U("getUrlFromDict", [fr, t], Is), U("getDictOptString", [We, fr, t], eu), U("getOptStringFromDict", [We, fr, t], eu), U("getDictOptNumber", [gt, fr, t], tu), U("getOptNumberFromDict", [gt, fr, t], tu), U("getDictOptInteger", [Le, fr, t], ru), U("getOptIntegerFromDict", [Le, fr, t], ru), U("getDictOptBoolean", [Gr, fr, t], nu), U("getOptBooleanFromDict", [Gr, fr, t], nu), U("getDictOptColor", [fn, fr, t], ps), U("getOptColorFromDict", [fn, fr, t], ps), U("getDictOptColor", [We, fr, t], ps), U("getOptColorFromDict", [We, fr, t], ps), U("getDictOptUrl", [We, fr, t], gs), U("getOptUrlFromDict", [We, fr, t], gs), U("getDictOptUrl", [$n, fr, t], gs), U("getOptUrlFromDict", [$n, fr, t], gs), U("getDictFromDict", [fr, t], Gl), U("getArrayFromDict", [fr, t], Ul), U("getOptArrayFromDict", [fr, t], zg), U("getOptDictFromDict", [fr, t], Lg), U("len", [fr], Rg), U("getDictKeys", [fr], ou), U("getDictValues", [fr], iu), Hr("getString", [fr, t], Es), Hr("getBoolean", [fr, t], Vs), Hr("getInteger", [fr, t], Ss), Hr("getNumber", [fr, t], As), Hr("getUrl", [fr, t], Is), Hr("getColor", [fr, t], Fs), Hr("getArray", [fr, t], Ul), Hr("getDict", [fr, t], Gl), Hr("containsKey", [fr, We], Og), Hr("isEmpty", [fr], Bg), Hr("getKeys", [fr], ou), Hr("getValues", [fr], iu);
}
function li(t, r) {
  return (e, n, o) => {
    if (o.value < 0 || o.value >= n.value.length)
      throw new Error(`Requested index (${o.value}) out of bounds array size (${n.value.length}).`);
    let i = n.value[Number(o.value)], s = typeof i;
    if (t === "array" && !Array.isArray(i) || t !== "array" && s !== t || s === "object" && i === null)
      throw s === "object" && (Array.isArray(i) ? s = "Array" : i === null ? s = "Null" : s = "Dict"), new Error(`Incorrect value type: expected ${Yn(r)}, got ${Yn(s)}.`);
    if (t === "number" && r === "integer") {
      Ln(e, i);
      try {
        i = _n(i);
      } catch {
        throw new Error("Cannot convert value to integer.");
      }
    }
    return t === "string" && r === "color" && (i = ni(i)), t === "string" && r === "url" && _o(i), {
      type: r,
      value: i
    };
  };
}
function Wi(t, r) {
  return (e, n, o, i) => {
    try {
      return t(e, n, o);
    } catch {
      let a = i.value;
      return r === "color" ? a = ni(a) : r === "url" && _o(a), {
        type: r,
        value: a
      };
    }
  };
}
const Ds = li("string", "string"), Ts = li("number", "number"), Ms = li("number", "integer"), Ps = li("boolean", "boolean"), Ns = li("string", "color"), zs = li("string", "url"), Jl = li("array", "array"), ql = li("object", "dict"), su = Wi(Ds, "string"), lu = Wi(Ts, "number"), au = Wi(Ms, "integer"), uu = Wi(Ps, "boolean"), hs = Wi(Ns, "color"), ms = Wi(zs, "url");
function Wg(t, r, e) {
  try {
    return Jl(t, r, e);
  } catch {
    return {
      type: dr,
      value: []
    };
  }
}
function Ug(t, r, e) {
  try {
    return ql(t, r, e);
  } catch {
    return {
      type: fr,
      value: {}
    };
  }
}
function Gg(t, r) {
  return {
    type: Le,
    value: _n(r.value.length)
  };
}
function Jg(t, r) {
  return {
    type: Gr,
    value: r.value.length === 0 ? 1 : 0
  };
}
function qg(t, r, e) {
  return r.value.length ? {
    type: dr,
    value: r.value.filter((n) => {
      const o = [];
      if (typeof n == "string")
        fo(n) && o.push([{
          type: fn,
          value: n
        }]), B_(n) && o.push([{
          type: $n,
          value: n
        }]), o.push([{
          type: We,
          value: n
        }]);
      else if (typeof n == "number")
        Math.round(n) === n && (Ln(t, n), o.push([{
          type: Le,
          value: _n(n)
        }])), o.push([{
          type: gt,
          value: n
        }]);
      else if (typeof n == "bigint")
        Ln(t, n), o.push([{
          type: Le,
          value: n
        }]);
      else if (Array.isArray(n))
        o.push([{
          type: dr,
          value: n
        }]);
      else if (typeof n == "object") {
        if (n === null)
          throw new Error("Incorrect value type: Null");
        o.push([{
          type: fr,
          value: n
        }]);
      } else if (typeof n == "boolean")
        o.push([{
          type: Gr,
          value: n ? 1 : 0
        }]);
      else
        throw new Error(`Incorrect value type: ${Yn(typeof n)}`);
      let i = {
        type: "missing"
      };
      for (const c of o)
        if (i = dd(e.value, c), "func" in i)
          break;
      let s;
      if ("func" in i)
        s = i.func;
      else {
        const c = e.value[0];
        Hd(c.name || "Function", o[0], i, !0);
      }
      const a = s.args[0], l = nl(
        t,
        n,
        typeof a == "string" ? a : a.type
      ), u = s.cb(t, l);
      if (u.type !== Gr)
        throw new Error("Function must return boolean value.");
      return u.value;
    })
  } : {
    type: dr,
    value: []
  };
}
function Kg() {
  U("getArrayString", [
    dr,
    Le
  ], Ds), U("getStringFromArray", [
    dr,
    Le
  ], Ds), U("getArrayNumber", [
    dr,
    Le
  ], Ts), U("getNumberFromArray", [
    dr,
    Le
  ], Ts), U("getArrayInteger", [
    dr,
    Le
  ], Ms), U("getIntegerFromArray", [
    dr,
    Le
  ], Ms), U("getArrayBoolean", [
    dr,
    Le
  ], Ps), U("getBooleanFromArray", [
    dr,
    Le
  ], Ps), U("getArrayColor", [
    dr,
    Le
  ], Ns), U("getColorFromArray", [
    dr,
    Le
  ], Ns), U("getArrayUrl", [
    dr,
    Le
  ], zs), U("getUrlFromArray", [
    dr,
    Le
  ], zs), U("getArrayFromArray", [
    dr,
    Le
  ], Jl), U("getDictFromArray", [
    dr,
    Le
  ], ql), U("getArrayOptString", [
    dr,
    Le,
    We
  ], su), U("getOptStringFromArray", [
    dr,
    Le,
    We
  ], su), U("getArrayOptNumber", [
    dr,
    Le,
    gt
  ], lu), U("getOptNumberFromArray", [
    dr,
    Le,
    gt
  ], lu), U("getArrayOptInteger", [
    dr,
    Le,
    Le
  ], au), U("getOptIntegerFromArray", [
    dr,
    Le,
    Le
  ], au), U("getArrayOptBoolean", [
    dr,
    Le,
    Gr
  ], uu), U("getOptBooleanFromArray", [
    dr,
    Le,
    Gr
  ], uu), U("getArrayOptColor", [
    dr,
    Le,
    fn
  ], hs), U("getOptColorFromArray", [
    dr,
    Le,
    fn
  ], hs), U("getArrayOptColor", [
    dr,
    Le,
    We
  ], hs), U("getOptColorFromArray", [
    dr,
    Le,
    We
  ], hs), U("getArrayOptUrl", [
    dr,
    Le,
    $n
  ], ms), U("getOptUrlFromArray", [
    dr,
    Le,
    $n
  ], ms), U("getArrayOptUrl", [
    dr,
    Le,
    We
  ], ms), U("getOptUrlFromArray", [
    dr,
    Le,
    We
  ], ms), U("getOptArrayFromArray", [
    dr,
    Le
  ], Wg), U("getOptDictFromArray", [
    dr,
    Le
  ], Ug), U("len", [
    dr
  ], Gg), Hr("getString", [dr, Le], Ds), Hr("getInteger", [dr, Le], Ms), Hr("getNumber", [dr, Le], Ts), Hr("getBoolean", [dr, Le], Ps), Hr("getUrl", [dr, Le], zs), Hr("getColor", [dr, Le], Ns), Hr("getArray", [dr, Le], Jl), Hr("getDict", [dr, Le], ql), Hr("isEmpty", [dr], Jg), Hr("filter", [dr, L_], qg);
}
function Ao(t) {
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
      return t === "url" && _o(n.value), {
        type: t,
        value: n.value
      };
    } else t === "url" && _o(i);
    return nl(r, i, t);
  };
}
function Yg() {
  U("getStoredIntegerValue", [We, Le], Ao(Le)), U("getStoredNumberValue", [We, gt], Ao(gt)), U("getStoredStringValue", [We, We], Ao(We)), U("getStoredUrlValue", [We, $n], Ao($n)), U("getStoredUrlValue", [We, We], Ao($n)), U("getStoredColorValue", [We, fn], Ao(fn)), U("getStoredColorValue", [We, We], Ao(fn)), U("getStoredBooleanValue", [We, Gr], Ao(Gr)), U("getStoredArrayValue", [We], Ao(dr)), U("getStoredDictValue", [We], Ao(fr));
}
function Xg() {
  return {
    type: gt,
    value: Math.PI
  };
}
function Zg(t, r) {
  return {
    type: gt,
    value: r.value / 180 * Math.PI
  };
}
function Qg(t, r) {
  return {
    type: gt,
    value: r.value / Math.PI * 180
  };
}
function xg(t, r) {
  return {
    type: gt,
    value: Math.sin(r.value)
  };
}
function $g(t, r) {
  return {
    type: gt,
    value: Math.cos(r.value)
  };
}
function eh(t, r) {
  return {
    type: gt,
    value: Math.tan(r.value)
  };
}
function th(t, r) {
  const e = Math.tan(r.value);
  if (Math.abs(e) < 1e-12)
    throw new Error("Cotangent is undefined for the given value.");
  return {
    type: gt,
    value: 1 / e
  };
}
function rh(t, r) {
  return {
    type: gt,
    value: Math.atan(r.value)
  };
}
function nh(t, r, e) {
  return {
    type: gt,
    value: Math.atan2(r.value, e.value)
  };
}
function oh(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arcsine is undefined for the given value.");
  return {
    type: gt,
    value: Math.asin(r.value)
  };
}
function ih(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arccosine is undefined for the given value.");
  return {
    type: gt,
    value: Math.acos(r.value)
  };
}
function sh() {
  U("pi", [], Xg), U("toRadians", [gt], Zg), U("toDegrees", [gt], Qg), U("sin", [gt], xg), U("cos", [gt], $g), U("tan", [gt], eh), U("cot", [gt], th), U("atan", [gt], rh), U("atan2", [gt, gt], nh), U("asin", [gt], oh), U("acos", [gt], ih);
}
function lh() {
  tp(), Vp(), Pg(), Up(), mg(), wg(), Hg(), Kg(), Yg(), sh();
}
function j() {
}
const ll = (t) => t;
function jo(t, r) {
  for (const e in r) t[e] = r[e];
  return (
    /** @type {T & S} */
    t
  );
}
function wd(t) {
  return t();
}
function cu() {
  return /* @__PURE__ */ Object.create(null);
}
function Jr(t) {
  t.forEach(wd);
}
function zr(t) {
  return typeof t == "function";
}
function ah(t, r) {
  return t != t ? r == r : t !== r || t && typeof t == "object" || typeof t == "function";
}
let bs;
function Xn(t, r) {
  return t === r ? !0 : (bs || (bs = document.createElement("a")), bs.href = r, t === bs.href);
}
function Sr(t, r) {
  return t != t ? r == r : t !== r;
}
function uh(t) {
  return Object.keys(t).length === 0;
}
function S(t, ...r) {
  if (t == null) {
    for (const n of r)
      n(void 0);
    return j;
  }
  const e = t.subscribe(...r);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function Kl(t) {
  let r;
  return S(t, (e) => r = e)(), r;
}
function yn(t, r, e) {
  t.$$.on_destroy.push(S(r, e));
}
function al(t, r, e, n) {
  if (t) {
    const o = kd(t, r, e, n);
    return t[0](o);
  }
}
function kd(t, r, e, n) {
  return t[1] && n ? jo(e.ctx.slice(), t[1](n(r))) : e.ctx;
}
function ul(t, r, e, n) {
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
function cl(t, r, e, n, o, i) {
  if (o) {
    const s = kd(r, e, n, i);
    t.p(s, o);
  }
}
function fl(t) {
  if (t.ctx.length > 32) {
    const r = [], e = t.ctx.length / 32;
    for (let n = 0; n < e; n++)
      r[n] = -1;
    return r;
  }
  return -1;
}
function Cl(t, r, e) {
  return t.set(e), r;
}
function dl(t) {
  return t && zr(t.destroy) ? t.destroy : j;
}
function fu(t) {
  const r = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return r ? [parseFloat(r[1]), r[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const vd = typeof window < "u";
let pa = vd ? () => window.performance.now() : () => Date.now(), ga = vd ? (t) => requestAnimationFrame(t) : j;
const Ti = /* @__PURE__ */ new Set();
function jd(t) {
  Ti.forEach((r) => {
    r.c(t) || (Ti.delete(r), r.f());
  }), Ti.size !== 0 && ga(jd);
}
function ha(t) {
  let r;
  return Ti.size === 0 && ga(jd), {
    promise: new Promise((e) => {
      Ti.add(r = { c: t, f: e });
    }),
    abort() {
      Ti.delete(r);
    }
  };
}
const Po = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function bt(t, r) {
  t.appendChild(r);
}
function Cd(t) {
  if (!t) return document;
  const r = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return r && /** @type {ShadowRoot} */
  r.host ? (
    /** @type {ShadowRoot} */
    r
  ) : t.ownerDocument;
}
function ch(t) {
  const r = Me("style");
  return r.textContent = "/* empty */", fh(Cd(t), r), r.sheet;
}
function fh(t, r) {
  return bt(
    /** @type {Document} */
    t.head || t,
    r
  ), r.sheet;
}
function J(t, r, e) {
  t.insertBefore(r, e || null);
}
function G(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function on(t, r) {
  for (let e = 0; e < t.length; e += 1)
    t[e] && t[e].d(r);
}
function Me(t) {
  return document.createElement(t);
}
function en(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Gn(t) {
  return document.createTextNode(t);
}
function gr() {
  return Gn(" ");
}
function Qt() {
  return Gn("");
}
function Qe(t, r, e, n) {
  return t.addEventListener(r, e, n), () => t.removeEventListener(r, e, n);
}
function g(t, r, e) {
  e == null ? t.removeAttribute(r) : t.getAttribute(r) !== e && t.setAttribute(r, e);
}
const dh = ["width", "height"];
function qo(t, r) {
  const e = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in r)
    r[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = r[n] : n === "__value" ? t.value = t[n] = r[n] : e[n] && e[n].set && dh.indexOf(n) === -1 ? t[n] = r[n] : g(t, n, r[n]);
}
function _h(t, r) {
  Object.keys(r).forEach((e) => {
    ph(t, e, r[e]);
  });
}
function ph(t, r, e) {
  const n = r.toLowerCase();
  n in t ? t[n] = typeof t[n] == "boolean" && e === "" ? !0 : e : r in t ? t[r] = typeof t[r] == "boolean" && e === "" ? !0 : e : g(t, r, e);
}
function ei(t) {
  return /-/.test(t) ? _h : qo;
}
function gh(t) {
  return Array.from(t.childNodes);
}
function eo(t, r) {
  r = "" + r, t.data !== r && (t.data = /** @type {string} */
  r);
}
function du(t, r) {
  t.value = r == null ? "" : r;
}
function F(t, r, e, n) {
  e == null ? t.style.removeProperty(r) : t.style.setProperty(r, e, "");
}
function _u(t, r, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const o = t.options[n];
    if (o.__value === r) {
      o.selected = !0;
      return;
    }
  }
  (!e || r !== void 0) && (t.selectedIndex = -1);
}
function hh(t) {
  const r = t.querySelector(":checked");
  return r && r.__value;
}
function Ed(t, r, { bubbles: e = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: r, bubbles: e, cancelable: n });
}
function pu(t, r) {
  return new t(r);
}
const Us = /* @__PURE__ */ new Map();
let Gs = 0;
function mh(t) {
  let r = 5381, e = t.length;
  for (; e--; ) r = (r << 5) - r ^ t.charCodeAt(e);
  return r >>> 0;
}
function bh(t, r) {
  const e = { stylesheet: ch(r), rules: {} };
  return Us.set(t, e), e;
}
function Js(t, r, e, n, o, i, s, a = 0) {
  const l = 16.666 / n;
  let u = `{
`;
  for (let w = 0; w <= 1; w += l) {
    const k = r + (e - r) * i(w);
    u += w * 100 + `%{${s(k, 1 - k)}}
`;
  }
  const c = u + `100% {${s(e, 1 - e)}}
}`, f = `__svelte_${mh(c)}_${a}`, _ = Cd(t), { stylesheet: h, rules: m } = Us.get(_) || bh(_, t);
  m[f] || (m[f] = !0, h.insertRule(`@keyframes ${f} ${c}`, h.cssRules.length));
  const p = t.style.animation || "";
  return t.style.animation = `${p ? `${p}, ` : ""}${f} ${n}ms linear ${o}ms 1 both`, Gs += 1, f;
}
function qs(t, r) {
  const e = (t.style.animation || "").split(", "), n = e.filter(
    r ? (i) => i.indexOf(r) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), o = e.length - n.length;
  o && (t.style.animation = n.join(", "), Gs -= o, Gs || yh());
}
function yh() {
  ga(() => {
    Gs || (Us.forEach((t) => {
      const { ownerNode: r } = t.stylesheet;
      r && G(r);
    }), Us.clear());
  });
}
let ls;
function ns(t) {
  ls = t;
}
function Ui() {
  if (!ls) throw new Error("Function called outside component initialization");
  return ls;
}
function Zn(t) {
  Ui().$$.on_mount.push(t);
}
function _l(t) {
  Ui().$$.after_update.push(t);
}
function sn(t) {
  Ui().$$.on_destroy.push(t);
}
function wh() {
  const t = Ui();
  return (r, e, { cancelable: n = !1 } = {}) => {
    const o = t.$$.callbacks[r];
    if (o) {
      const i = Ed(
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
function _i(t, r) {
  return Ui().$$.context.set(t, r), r;
}
function Dr(t) {
  return Ui().$$.context.get(t);
}
function On(t, r) {
  const e = t.$$.callbacks[r.type];
  e && e.slice().forEach((n) => n.call(this, r));
}
const Fi = [], Vr = [];
let Mi = [];
const gu = [], Ad = /* @__PURE__ */ Promise.resolve();
let Yl = !1;
function Sd() {
  Yl || (Yl = !0, Ad.then(Vd));
}
function In() {
  return Sd(), Ad;
}
function po(t) {
  Mi.push(t);
}
const El = /* @__PURE__ */ new Set();
let Ai = 0;
function Vd() {
  if (Ai !== 0)
    return;
  const t = ls;
  do {
    try {
      for (; Ai < Fi.length; ) {
        const r = Fi[Ai];
        Ai++, ns(r), kh(r.$$);
      }
    } catch (r) {
      throw Fi.length = 0, Ai = 0, r;
    }
    for (ns(null), Fi.length = 0, Ai = 0; Vr.length; ) Vr.pop()();
    for (let r = 0; r < Mi.length; r += 1) {
      const e = Mi[r];
      El.has(e) || (El.add(e), e());
    }
    Mi.length = 0;
  } while (Fi.length);
  for (; gu.length; )
    gu.pop()();
  Yl = !1, El.clear(), ns(t);
}
function kh(t) {
  if (t.fragment !== null) {
    t.update(), Jr(t.before_update);
    const r = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, r), t.after_update.forEach(po);
  }
}
function vh(t) {
  const r = [], e = [];
  Mi.forEach((n) => t.indexOf(n) === -1 ? r.push(n) : e.push(n)), e.forEach((n) => n()), Mi = r;
}
let $i;
function ma() {
  return $i || ($i = Promise.resolve(), $i.then(() => {
    $i = null;
  })), $i;
}
function gi(t, r, e) {
  t.dispatchEvent(Ed(`${r ? "intro" : "outro"}${e}`));
}
const Ls = /* @__PURE__ */ new Set();
let Io;
function sr() {
  Io = {
    r: 0,
    c: [],
    p: Io
    // parent group
  };
}
function lr() {
  Io.r || Jr(Io.c), Io = Io.p;
}
function L(t, r) {
  t && t.i && (Ls.delete(t), t.i(r));
}
function x(t, r, e, n) {
  if (t && t.o) {
    if (Ls.has(t)) return;
    Ls.add(t), Io.c.push(() => {
      Ls.delete(t), n && (e && t.d(1), n());
    }), t.o(r);
  } else n && n();
}
const ba = { duration: 0 };
function pl(t, r, e) {
  const n = { direction: "in" };
  let o = r(t, e, n), i = !1, s, a, l = 0;
  function u() {
    s && qs(t, s);
  }
  function c() {
    const {
      delay: _ = 0,
      duration: h = 300,
      easing: m = ll,
      tick: p = j,
      css: w
    } = o || ba;
    w && (s = Js(t, 0, 1, h, _, m, w, l++)), p(0, 1);
    const k = pa() + _, N = k + h;
    a && a.abort(), i = !0, po(() => gi(t, !0, "start")), a = ha((H) => {
      if (i) {
        if (H >= N)
          return p(1, 0), gi(t, !0, "end"), u(), i = !1;
        if (H >= k) {
          const O = m((H - k) / h);
          p(O, 1 - O);
        }
      }
      return i;
    });
  }
  let f = !1;
  return {
    start() {
      f || (f = !0, qs(t), zr(o) ? (o = o(n), ma().then(c)) : c());
    },
    invalidate() {
      f = !1;
    },
    end() {
      i && (u(), i = !1);
    }
  };
}
function Fd(t, r, e) {
  const n = { direction: "out" };
  let o = r(t, e, n), i = !0, s;
  const a = Io;
  a.r += 1;
  let l;
  function u() {
    const {
      delay: c = 0,
      duration: f = 300,
      easing: _ = ll,
      tick: h = j,
      css: m
    } = o || ba;
    m && (s = Js(t, 1, 0, f, c, _, m));
    const p = pa() + c, w = p + f;
    po(() => gi(t, !1, "start")), "inert" in t && (l = /** @type {HTMLElement} */
    t.inert, t.inert = !0), ha((k) => {
      if (i) {
        if (k >= w)
          return h(0, 1), gi(t, !1, "end"), --a.r || Jr(a.c), !1;
        if (k >= p) {
          const N = _((k - p) / f);
          h(1 - N, N);
        }
      }
      return i;
    });
  }
  return zr(o) ? ma().then(() => {
    o = o(n), u();
  }) : u(), {
    end(c) {
      c && "inert" in t && (t.inert = l), c && o.tick && o.tick(1, 0), i && (s && qs(t, s), i = !1);
    }
  };
}
function hu(t, r, e, n) {
  let i = r(t, e, { direction: "both" }), s = n ? 0 : 1, a = null, l = null, u = null, c;
  function f() {
    u && qs(t, u);
  }
  function _(m, p) {
    const w = (
      /** @type {Program['d']} */
      m.b - s
    );
    return p *= Math.abs(w), {
      a: s,
      b: m.b,
      d: w,
      duration: p,
      start: m.start,
      end: m.start + p,
      group: m.group
    };
  }
  function h(m) {
    const {
      delay: p = 0,
      duration: w = 300,
      easing: k = ll,
      tick: N = j,
      css: H
    } = i || ba, O = {
      start: pa() + p,
      b: m
    };
    m || (O.group = Io, Io.r += 1), "inert" in t && (m ? c !== void 0 && (t.inert = c) : (c = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), a || l ? l = O : (H && (f(), u = Js(t, s, m, w, p, k, H)), m && N(0, 1), a = _(O, w), po(() => gi(t, m, "start")), ha((ne) => {
      if (l && ne > l.start && (a = _(l, w), l = null, gi(t, a.b, "start"), H && (f(), u = Js(
        t,
        s,
        a.b,
        a.duration,
        0,
        k,
        i.css
      ))), a) {
        if (ne >= a.end)
          N(s = a.b, 1 - s), gi(t, a.b, "end"), l || (a.b ? f() : --a.group.r || Jr(a.group.c)), a = null;
        else if (ne >= a.start) {
          const de = ne - a.start;
          s = a.a + a.d * k(de / a.duration), N(s, 1 - s);
        }
      }
      return !!(a || l);
    }));
  }
  return {
    run(m) {
      zr(i) ? ma().then(() => {
        i = i({ direction: m ? "in" : "out" }), h(m);
      }) : h(m);
    },
    end() {
      f(), a = l = null;
    }
  };
}
function ir(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function Id(t, r) {
  x(t, 1, 1, () => {
    r.delete(t.key);
  });
}
function Dd(t, r, e, n, o, i, s, a, l, u, c, f) {
  let _ = t.length, h = i.length, m = _;
  const p = {};
  for (; m--; ) p[t[m].key] = m;
  const w = [], k = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), H = [];
  for (m = h; m--; ) {
    const T = f(o, i, m), X = e(T);
    let le = s.get(X);
    le ? H.push(() => le.p(T, r)) : (le = u(X, T), le.c()), k.set(X, w[m] = le), X in p && N.set(X, Math.abs(m - p[X]));
  }
  const O = /* @__PURE__ */ new Set(), ne = /* @__PURE__ */ new Set();
  function de(T) {
    L(T, 1), T.m(a, c), s.set(T.key, T), c = T.first, h--;
  }
  for (; _ && h; ) {
    const T = w[h - 1], X = t[_ - 1], le = T.key, C = X.key;
    T === X ? (c = T.first, _--, h--) : k.has(C) ? !s.has(le) || O.has(le) ? de(T) : ne.has(C) ? _-- : N.get(le) > N.get(C) ? (ne.add(le), de(T)) : (O.add(C), _--) : (l(X, s), _--);
  }
  for (; _--; ) {
    const T = t[_];
    k.has(T.key) || l(T, s);
  }
  for (; h; ) de(w[h - 1]);
  return Jr(H), w;
}
function No(t, r) {
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
function Td(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Lt(t) {
  t && t.c();
}
function Pt(t, r, e) {
  const { fragment: n, after_update: o } = t.$$;
  n && n.m(r, e), po(() => {
    const i = t.$$.on_mount.map(wd).filter(zr);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : Jr(i), t.$$.on_mount = [];
  }), o.forEach(po);
}
function Nt(t, r) {
  const e = t.$$;
  e.fragment !== null && (vh(e.after_update), Jr(e.on_destroy), e.fragment && e.fragment.d(r), e.on_destroy = e.fragment = null, e.ctx = []);
}
function jh(t, r) {
  t.$$.dirty[0] === -1 && (Fi.push(t), Sd(), t.$$.dirty.fill(0)), t.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function Lr(t, r, e, n, o, i, s = null, a = [-1]) {
  const l = ls;
  ns(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: j,
    not_equal: o,
    bound: cu(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(r.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: cu(),
    dirty: a,
    skip_bound: !1,
    root: r.target || l.$$.root
  };
  s && s(u.root);
  let c = !1;
  if (u.ctx = e ? e(t, r.props || {}, (f, _, ...h) => {
    const m = h.length ? h[0] : _;
    return u.ctx && o(u.ctx[f], u.ctx[f] = m) && (!u.skip_bound && u.bound[f] && u.bound[f](m), c && jh(t, f)), _;
  }) : [], u.update(), c = !0, Jr(u.before_update), u.fragment = n ? n(u.ctx) : !1, r.target) {
    if (r.hydrate) {
      const f = gh(r.target);
      u.fragment && u.fragment.l(f), f.forEach(G);
    } else
      u.fragment && u.fragment.c();
    r.intro && L(t.$$.fragment), Pt(t, r.target, r.anchor), Vd();
  }
  ns(l);
}
class Or {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ar(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ar(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Nt(this, 1), this.$destroy = j;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(r, e) {
    if (!zr(e))
      return j;
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
    this.$$set && !uh(r) && (this.$$.skip_bound = !0, this.$$set(r), this.$$.skip_bound = !1);
  }
}
const Ch = "4", Si = [];
function Eh(t, r) {
  return {
    subscribe: Do(t, r).subscribe
  };
}
function Do(t, r = j) {
  let e;
  const n = /* @__PURE__ */ new Set();
  function o(a) {
    if (ah(t, a) && (t = a, e)) {
      const l = !Si.length;
      for (const u of n)
        u[1](), Si.push(u, t);
      if (l) {
        for (let u = 0; u < Si.length; u += 2)
          Si[u][0](Si[u + 1]);
        Si.length = 0;
      }
    }
  }
  function i(a) {
    o(a(t));
  }
  function s(a, l = j) {
    const u = [a, l];
    return n.add(u), n.size === 1 && (e = r(o, i) || j), a(t), () => {
      n.delete(u), n.size === 0 && e && (e(), e = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Gi(t, r, e) {
  const n = !Array.isArray(t), o = n ? [t] : t;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = r.length < 2;
  return Eh(e, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, f = j;
    const _ = () => {
      if (c)
        return;
      f();
      const m = r(n ? u[0] : u, s, a);
      i ? s(m) : f = zr(m) ? m : j;
    }, h = o.map(
      (m, p) => S(
        m,
        (w) => {
          u[p] = w, c &= ~(1 << p), l && _();
        },
        () => {
          c |= 1 << p;
        }
      )
    );
    return l = !0, _(), function() {
      Jr(h), f(), l = !1;
    };
  });
}
class Ko {
  constructor(r, e) {
    Ar(this, "name");
    Ar(this, "value");
    Ar(this, "store");
    const n = this.convertValue(e);
    this.name = r, this.value = n;
  }
  getName() {
    return this.name;
  }
  subscribe(r) {
    return this.store || (this.store = Do(this.value)), this.store.subscribe(r);
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
class Md extends Ko {
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
class Pd extends Ko {
  convertValue(r) {
    if (typeof r != "bigint" && typeof r != "number")
      throw new Error("Incorrect variable value");
    try {
      return _n(r);
    } catch {
      throw new Error("Incorrect variable value");
    }
  }
  fromString(r) {
    try {
      return _n(r);
    } catch {
      throw new Error("Incorrect variable value");
    }
  }
  getType() {
    return "integer";
  }
}
class Nd extends Ko {
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
class zd extends Ko {
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
class Ld extends Ko {
  convertValue(r) {
    if (typeof r != "string" || !fo(r))
      throw new Error("Incorrect variable value");
    return ni(r);
  }
  fromString(r) {
    return this.convertValue(r);
  }
  getType() {
    return "color";
  }
}
class Od extends Ko {
  convertValue(r) {
    if (typeof r != "string")
      throw new Error("Incorrect variable value");
    return _o(r), r;
  }
  fromString(r) {
    return _o(r), r;
  }
  getType() {
    return "url";
  }
}
class Bd extends Ko {
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
class Rd extends Ko {
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
const Xl = {
  string: Md,
  number: Nd,
  integer: Pd,
  boolean: zd,
  color: Ld,
  url: Od,
  dict: Bd,
  array: Rd
};
function io(t, r, e) {
  if (!(r in Xl))
    throw new Error("Unsupported variable type");
  return new Xl[r](t, e);
}
function Ah() {
}
function Sh(t) {
  return t(this.value), Ah;
}
function mu() {
  throw new Error("Cannot change the value of this type of variable");
}
class Vh extends Md {
}
class Fh extends Nd {
}
class Ih extends Pd {
}
class Dh extends zd {
}
class Th extends Ld {
}
class Mh extends Od {
}
class Ph extends Bd {
}
class Nh extends Rd {
}
class zh extends Ko {
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
const Ks = {
  string: Vh,
  number: Fh,
  integer: Ih,
  boolean: Dh,
  color: Th,
  url: Mh,
  dict: Ph,
  array: Nh,
  datetime: zh
};
for (const t in Ks) {
  const r = Ks[t];
  r.prototype.subscribe = Sh, r.prototype.set = mu, r.prototype.setValue = mu;
}
function Os(t, r, e) {
  if (!(r in Ks))
    throw new Error("Unsupported variable type");
  return new Ks[r](t, e);
}
function Lh(t) {
  const r = t.getType();
  let e = t.getValue();
  return r === Gr && (e = e ? 1 : 0), {
    type: r,
    value: e
  };
}
function Oh(t, r) {
  if (r === "string")
    return t;
  if (r === "integer")
    try {
      return _n(t);
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
    if (typeof t != "string" || !fo(t))
      throw new Error("Incorrect variable value");
    return ni(t);
  } else if (r === "url") {
    if (typeof t != "string")
      throw new Error("Incorrect variable value");
    return _o(t), t;
  } else if (r === "dict" || r === "array")
    try {
      return JSON.parse(t);
    } catch {
      throw new Error("Incorrect dict value");
    }
  throw new Error(`Unexpected type ${r}`);
}
lh();
function Bh(t, r) {
  return {
    type: We,
    value: r.value
  };
}
function Rh(t, r) {
  return {
    type: gt,
    value: r.value
  };
}
function Hh(t, r) {
  return Ln(t, r.value), {
    type: Le,
    value: r.value
  };
}
function Wh(t, r) {
  return {
    type: Gr,
    value: r.value ? 1 : 0
  };
}
function Uh(t, r) {
  const e = Hs(Bn(t, r.argument));
  switch (r.operator) {
    case "!":
      if (e.type === Gr)
        return {
          type: Gr,
          value: e.value ? 0 : 1
        };
      Fn(`${r.operator}${dn(e)}`, "A Boolean is expected after a unary not.");
    case "+":
    case "-":
      const n = r.operator === "+" ? 1 : -1;
      if (e.type === Le) {
        const o = e.value * _n(n);
        return Ln(t, o), {
          type: Le,
          value: o
        };
      } else {
        if (e.type === gt)
          return {
            type: gt,
            value: e.value * n
          };
        Fn(
          `${r.operator}${dn(e)}`,
          `A Number is expected after a unary ${r.operator === "+" ? "plus" : "minus"}.`
        );
      }
  }
}
function Gh(t, r) {
  const e = Hs(Bn(t, r.test));
  if (e.type === Gr)
    return e.value ? Bn(t, r.consequent) : Bn(t, r.alternate);
  Fn(
    `${dn(e)} ? ${dn(Bn(t, r.consequent))} : ${dn(Bn(t, r.alternate))}`,
    "Ternary must be called with a Boolean value as a condition."
  );
}
function Jh(t, r) {
  try {
    return Bn(t, r.test);
  } catch {
    return Bn(t, r.alternate);
  }
}
function qh(t, r) {
  let e = "";
  if (r.quasis.length === 2 && r.quasis[0].value === "" && r.quasis[1].value === "")
    return Bn(t, r.expressions[0]);
  for (let n = 0; n < r.expressions.length; ++n)
    e += r.quasis[n].value, e += ji(Bn(t, r.expressions[n]), !0);
  return e += r.quasis[r.quasis.length - 1].value, {
    type: We,
    value: e
  };
}
function Kh(t, r) {
  const e = Hs(Bn(t, r.left));
  if (e.type !== Gr && Fn(
    `${dn(e)} ${r.operator} ...`,
    `'${r.operator}' must be called with boolean operands.`
  ), r.operator === "||" && e.value)
    return e;
  if (r.operator === "&&" && !e.value)
    return {
      type: Gr,
      value: 0
    };
  const n = Hs(Bn(t, r.right));
  return n.type !== Gr && Fn(
    `${dn(e)} ${r.operator} ${dn(n)}`,
    `Operator '${r.operator}' cannot be applied to different types: Boolean and ${Yn(n.type)}.`
  ), {
    type: Gr,
    value: n.value
  };
}
function Yh(t, r, e) {
  let n;
  return r.type === Nr && e.type === Nr ? n = r.value.getTime() === e.value.getTime() : n = r.value === e.value, t === "!=" && (n = !n), {
    type: Gr,
    value: n ? 1 : 0
  };
}
function Xh(t, r, e) {
  (r.type !== gt && r.type !== Le && r.type !== Nr || e.type !== gt && e.type !== Le && e.type !== Nr) && Fn(
    `${dn(r)} ${t} ${dn(e)}`,
    `Operator '${t}' cannot be applied to ${Yn(r.type)} type.`
  );
  let n;
  const o = r.type === Nr ? r.value.getTime() : r.value, i = e.type === Nr ? e.value.getTime() : e.value;
  return t === ">" ? n = o > i : t === ">=" ? n = o >= i : t === "<" ? n = o < i : n = o <= i, {
    type: Gr,
    value: n ? 1 : 0
  };
}
function Zh(t, r, e, n) {
  if (e.type !== We && e.type !== gt && e.type !== Le && Fn(
    `${dn(e)} ${r} ${dn(n)}`,
    `Operator '${r}' cannot be applied to ${Yn(e.type)} type.`
  ), e.type === We)
    return r === "-" && Fn(
      `${dn(e)} - ${dn(n)}`,
      `Operator '${r}' cannot be applied to ${Yn(e.type)} type.`
    ), {
      type: We,
      value: e.value + n.value
    };
  let o = r === "+" ? e.value + n.value : e.value - n.value;
  if (e.type === Le)
    try {
      o = Ci(t, o), Ln(t, o);
    } catch (i) {
      Fn(
        `${dn(e)} ${r} ${dn(n)}`,
        i.message
      );
    }
  return {
    type: e.type,
    value: o
  };
}
function Qh(t, r, e, n) {
  e.type !== Le && e.type !== gt && Fn(
    `${dn(e)} ${r} ${dn(n)}`,
    `Operator '${r}' cannot be applied to ${Yn(e.type)} type.`
  );
  let o;
  if (r === "*")
    o = e.value * n.value;
  else if (r === "/" || r === "%")
    Number(n.value) === 0 && Fn(
      `${dn(e)} ${r} ${dn(n)}`,
      "Division by zero is not supported."
    ), r === "/" ? o = e.value / n.value : o = e.value % n.value;
  else
    throw new Error(`Unsupported operation ${r}`);
  if (e.type === Le)
    try {
      o = Ci(t, o), Ln(t, o);
    } catch (i) {
      Fn(
        `${dn(e)} ${r} ${dn(n)}`,
        i.message
      );
    }
  return {
    type: e.type,
    value: o
  };
}
function xh(t, r) {
  const e = r.operator;
  let n = Bn(t, r.left), o = Bn(t, r.right);
  if ((n.type === "number" && o.type === "integer" || n.type === "integer" && o.type === "number") && (n.type === "integer" ? n = Ll(n) : o.type === "integer" && (o = Ll(o))), n.type !== o.type && Fn(
    `${dn(n)} ${r.operator} ${dn(o)}`,
    `Operator '${e}' cannot be applied to different types: ${Yn(n.type)} and ${Yn(o.type)}.`
  ), e === "==" || e === "!=")
    return Yh(e, n, o);
  if (e === ">" || e === ">=" || e === "<" || e === "<=")
    return Xh(e, n, o);
  if (e === "+" || e === "-")
    return Zh(t, e, n, o);
  if (e === "/" || e === "*" || e === "%")
    return Qh(t, e, n, o);
  throw new Error(`Unsupported operation ${e}`);
}
function Ys(t) {
  return t.map(dn).join(", ");
}
function $h(t, r) {
  const e = r.callee.name;
  let n, o = r.arguments.map((a) => Bn(t, a));
  const i = e + ":" + o.map((a) => a.type).join("#");
  let s;
  if (t.customFunctions && (s = Rl(t.customFunctions, e, o)), !s || !("func" in s))
    if (Ol.has(i))
      s = {
        func: Ol.get(i),
        conversions: 0
      };
    else {
      const a = Rl(rs, e, o);
      ("func" in a || !s || s.type === "missing") && (s = a);
    }
  if (s && (("expected" in s || "type" in s && s.type === "missing") && Hd(e, o, s), n = s.func, s.conversions && (o = _d(n, o))), !n)
    throw new Error("Function not found");
  try {
    return n.cb(t, ...o);
  } catch (a) {
    if (a && a instanceof fa)
      throw a;
    const l = `${e}(${Ys(o)})`;
    Fn(l, a.message);
  }
}
function Hd(t, r, e, n = !1) {
  const o = r.map((a) => Yn(a.type)).join(", "), i = `${t}(${Ys(r)})`, s = n ? H_ : Fn;
  if (e.type === "few" && r.length === 0 && e.hasOverloads)
    s(i, "Function requires non empty argument list.");
  else if (e.type === "many" || e.type === "few" || e.type === "mismatch")
    if (e.hasOverloads)
      s(i, `Function has no matching overload for given argument types: ${o}.`);
    else if (e.type === "many" || e.type === "few")
      e.def.args.some((a) => typeof a == "object" && a.isVararg) ? s(i, `At least ${e.def.args.length} argument(s) expected.`) : s(i, `Exactly ${e.def.args.length} argument(s) expected.`);
    else {
      const a = e.def.args.map((l) => Yn(typeof l == "string" ? l : l.type)).join(", ");
      s(i, `Invalid argument type: expected ${a}, got ${o}.`);
    }
  else
    s(i, `Unknown function name: ${t}.`);
}
function em(t, r) {
  const e = r.method.name;
  let n, o = [r.object, ...r.arguments].map((s) => Bn(t, s));
  const i = e + ":" + o.map((s) => s.type).join("#");
  if (Bl.has(i))
    n = Bl.get(i);
  else {
    const s = Rl(Cs, e, o);
    if ("expected" in s || "type" in s && s.type === "missing") {
      const a = o.slice(1).map((u) => Yn(u.type)).join(", "), l = `${e}(${Ys(o.slice(1))})`;
      s.type === "few" && o.length === 1 ? Fn(l, "Method requires non empty argument list.") : s.type === "many" ? Fn(l, `Method has no matching overload for given argument types: ${a}.`) : s.type === "few" || s.type === "mismatch" ? Fn(l, `Method has no matching overload for given argument types: ${a}.`) : Fn(l, `Unknown method name: ${e}.`);
    }
    n = s.func, s.conversions && (o = _d(n, o));
  }
  if (!n)
    throw new Error("Method not found");
  try {
    return n.cb(t, ...o);
  } catch (s) {
    if (s && s instanceof fa)
      throw s;
    const a = `${e}(${Ys(o.slice(1))})`;
    Fn(a, s.message);
  }
}
function tm(t, r) {
  var i;
  const e = r.id.name, n = (i = t.customFunctions) == null ? void 0 : i.get(e);
  if (n)
    return {
      type: "function",
      value: n
    };
  const o = t.variables.get(e);
  if (o)
    return Lh(o);
  throw new Error(`Variable '${e}' is missing.`);
}
const bu = {
  StringLiteral: Bh,
  NumberLiteral: Rh,
  IntegerLiteral: Hh,
  BooleanLiteral: Wh,
  UnaryExpression: Uh,
  ConditionalExpression: Gh,
  TryExpression: Jh,
  TemplateLiteral: qh,
  LogicalExpression: Kh,
  BinaryExpression: xh,
  CallExpression: $h,
  MethodExpression: em,
  Variable: tm
};
function Bn(t, r) {
  if (r.type in bu)
    return bu[r.type](t, r);
  throw new Error("Unsupported expression");
}
function gl(t, r, e, n, o) {
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
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ch);
const rm = "appkit-root_platform_desktop", nm = "appkit-root__clickable", om = "appkit-root", im = "appkit-root__selectable", sm = "appkit-root__unselectable", Er = {
  root_platform_desktop: rm,
  root__clickable: nm,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  "root__any-actions": "appkit-root__any-actions",
  root: om,
  root__selectable: im,
  root__unselectable: sm,
  "root__only-desktop": "appkit-root__only-desktop",
  "root_restrict-scroll": "appkit-root_restrict-scroll",
  "root_disabled-context-menu": "appkit-root_disabled-context-menu"
}, Kr = Symbol("root"), lm = "appkit-outer", am = "appkit-outer_width_content", um = "appkit-outer_height_content", cm = "appkit-root__clickable", fm = "appkit-outer__border", dm = "appkit-outer_visibility_invisible", _m = "appkit-outer_visibility_gone", Xs = {
  outer: lm,
  outer_width_content: am,
  outer_height_content: um,
  root__clickable: cm,
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
  outer__border: fm,
  outer_visibility_invisible: dm,
  outer_visibility_gone: _m,
  "outer_has-action-animation": "appkit-outer_has-action-animation",
  "outer_has-custom-focus": "appkit-outer_has-custom-focus"
};
function _r(t) {
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
function pe(t) {
  if (typeof t != "number" && typeof t != "string" || !t)
    return "0";
  const r = Number(t);
  return Number.isNaN(r) ? "0" : Math.ceil(r * 1e3) / 1e4 + "em";
}
function an(t) {
  let r = pe(t);
  return r === "0" && (r += "em"), r;
}
function Zl(t) {
  let r = String(t);
  return r.indexOf("&") > -1 && (r = r.replace(/&/g, "&amp;")), r.indexOf("<") > -1 && (r = r.replace(/</g, "&lt;")), r.indexOf(">") > -1 && (r = r.replace(/>/g, "&gt;")), r.indexOf('"') > -1 && (r = r.replace(/"/g, "&quot;")), r;
}
const zo = Boolean;
function hl(t, r) {
  if (t.length === 1 && t[0].type === "solid")
    return gm({
      bg: t[0]
    });
  const e = t.map((n) => {
    if (n.type === "solid")
      return pm({
        bg: n
      });
    if (n.type === "gradient")
      return hm({
        bg: n
      });
    if (n.type === "image")
      return ym({
        bg: n,
        direction: r
      });
    if (n.type === "radial_gradient")
      return bm({
        bg: n
      });
  }).filter(zo).reverse().reduce(function(n, o) {
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
function pm(t) {
  const r = pr(t.bg.color || "transparent");
  return {
    size: void 0,
    pos: void 0,
    image: `linear-gradient(to bottom,${r},${r})`
  };
}
function gm(t) {
  return {
    color: pr(t.bg.color || "transparent"),
    size: "auto",
    position: "50% 50%"
  };
}
function Wd(t) {
  return t.every((n) => n.color && typeof n.position == "number" && n.position >= 0 && n.position <= 1) ? t.sort((n, o) => Math.abs(n.position - o.position) < 1e-6 ? 0 : n.position - o.position).map((n) => `${pr(n.color)} ${(n.position * 100).toFixed(2)}%`).join(",") : void 0;
}
function hm(t) {
  var n, o, i, s;
  if (!Array.isArray((n = t.bg) == null ? void 0 : n.colors) && !Array.isArray((o = t.bg) == null ? void 0 : o.color_map))
    return;
  const r = (i = t.bg.colors) == null ? void 0 : i.filter(zo);
  if (!(r != null && r.length) && !((s = t.bg) != null && s.color_map))
    return;
  let e;
  if (t.bg.color_map) {
    const a = Wd(t.bg.color_map);
    if (!a)
      return;
    e = "linear-gradient(" + (90 - Number(t.bg.angle || 0) + "deg") + "," + a + ")";
  } else {
    if (!r)
      return;
    e = "linear-gradient(" + (90 - Number(t.bg.angle || 0) + "deg") + "," + r.map((a) => pr(a)).join(",") + ")";
  }
  return {
    size: void 0,
    pos: void 0,
    image: e
  };
}
const mm = {
  nearest_corner: "closest-corner",
  farthest_corner: "farthest-corner",
  nearest_side: "closest-side",
  farthest_side: "farthest-side"
};
function yu(t) {
  if (t && typeof t == "object" && "type" in t && t.value !== void 0) {
    if (t.type === "fixed")
      return an(t.value);
    if (t.type === "relative")
      return `${Number(t.value) * 100}%`;
  }
  return "50%";
}
function bm(t) {
  var a, l, u, c;
  if (!Array.isArray((a = t.bg) == null ? void 0 : a.colors) && !Array.isArray((l = t.bg) == null ? void 0 : l.color_map))
    return;
  const r = (u = t.bg.colors) == null ? void 0 : u.filter(zo);
  if (!(r != null && r.length) && !((c = t.bg) != null && c.color_map))
    return;
  let e;
  if (t.bg.color_map ? e = Wd(t.bg.color_map) : r && (e = r.map((f) => pr(f)).join(",")), !e)
    return;
  const n = t.bg.radius;
  let o;
  n && typeof n == "object" && "type" in n && n.value !== void 0 && (n.type === "fixed" ? o = an(n.value) : n.type === "relative" && (o = mm[n.value]));
  const i = yu(t.bg.center_x), s = yu(t.bg.center_y);
  return {
    size: void 0,
    pos: void 0,
    image: `radial-gradient(circle ${o || "farthest-corner"} at ${i} ${s},` + e + ")"
  };
}
function ym(t) {
  var e;
  const r = (e = t.bg) == null ? void 0 : e.image_url;
  if (r)
    return {
      size: Ud(t.bg.scale),
      pos: Gd(t.bg, t.direction),
      image: 'url("' + Zl(r) + '")'
    };
}
function Ud(t) {
  return t === "fit" ? "contain" : t === "stretch" ? "fill" : t === "no_scale" ? "none" : "cover";
}
function wm(t) {
  return t === "none" ? "auto" : t === "fill" ? "100% 100%" : t;
}
function Gd(t, r) {
  let e, n;
  return t.content_alignment_horizontal === "left" || r === "ltr" && t.content_alignment_horizontal === "start" || r === "rtl" && t.content_alignment_horizontal === "end" ? e = "0%" : t.content_alignment_horizontal === "right" || r === "ltr" && t.content_alignment_horizontal === "end" || r === "rtl" && t.content_alignment_horizontal === "start" ? e = "100%" : e = "50%", t.content_alignment_vertical === "top" ? n = "0%" : t.content_alignment_vertical === "bottom" ? n = "100%" : n = "50%", e + " " + n;
}
function tn(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e < 0 ? r : e;
}
function wu(t, r, e) {
  return typeof r == "number" && (t && r > 0 && r <= 100 || !t && r >= 0 && r < 100) ? r : e;
}
function km(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1 && t.index !== void 0;
}
function vm(t, {
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
  }, u = Gi(s, (h) => h);
  let c;
  const f = (h) => {
    const m = h.type === "visibility";
    o.execAnyActions([h.action], {
      logType: m ? "visible" : "disappear",
      node: t,
      processUrls: !1
    });
  }, _ = u.subscribe((h) => {
    c = h.filter(km);
    const m = {};
    c.forEach((k) => {
      m[k.index] = k;
    }), l();
    const p = [...new Set(c.map((k) => {
      const N = i[k.index].type === "visibility";
      return wu(
        N,
        k.visibility_percentage,
        N ? 50 : 0
      ) / 100;
    }))];
    if (!p.length)
      return;
    const w = (k) => {
      k.forEach((N) => {
        c.forEach((H) => {
          const O = i[H.index], ne = O.type === "visibility", de = wu(
            ne,
            H.visibility_percentage,
            ne ? 50 : 0
          );
          let T;
          de === 0 ? T = N.intersectionRatio >= 1e-12 : T = N.intersectionRatio >= de / 100, (ne ? !O.visible && T : O.visible && !T) ? O.finished || (O.timer = setTimeout(() => {
            ++O.count;
            const C = H.log_limit === 0 ? 1 / 0 : H.log_limit || 1;
            O.count >= C && (O.finished = !0), f(O);
          }, tn(H.visibility_duration, 800))) : (ne ? !T : T) && O.timer && clearTimeout(O.timer), O.visible = T;
        });
      });
    };
    a = new IntersectionObserver(w, {
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
function ku(t, r) {
  r && t.push(r);
}
function ht(t, r, e) {
  const n = [];
  ku(n, r[t]);
  for (const o in e)
    if (e.hasOwnProperty(o)) {
      const i = e[o];
      if (i) {
        const s = `${t}_${o}` + (typeof i == "string" ? `_${i}` : "");
        ku(n, r[s]);
      }
    }
  return n.join(" ");
}
function jm(t, r, e, n) {
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
const Jd = jm, ya = Symbol("state");
function go(t, r) {
  var s, a;
  const e = t.top || 0, n = ((s = r === "ltr" ? t.end : t.start) != null ? s : t.right) || 0, o = t.bottom || 0, i = ((a = r === "ltr" ? t.start : t.end) != null ? a : t.left) || 0;
  return e === 0 && n === 0 && o === 0 && i === 0 ? "" : pe(e) + " " + pe(n) + " " + pe(o) + " " + pe(i);
}
function ml(t) {
  if (typeof t != "number" && typeof t != "string")
    return !1;
  const r = Number(t);
  return !Number.isNaN(r);
}
function Nn(t) {
  return ml(t) && t >= 0;
}
function as(t, r, e) {
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
    if (n[s] && !Nn(n[s]))
      return e;
  return go(t, r);
}
function Cm(t, r) {
  return !Nn(t) || t === void 0 || t > 1 ? r : Number(t);
}
const Em = Object.prototype.hasOwnProperty;
function Ji(t, r) {
  if (Object.is(t, r))
    return !0;
  if (typeof t != "object" || t === null || typeof r != "object" || r === null)
    return Object.is(t, r);
  const e = Object.keys(t), n = Object.keys(r);
  if (e.length !== n.length)
    return !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (!Em.call(r, i) || !Ji(t[i], r[i]))
      return !1;
  }
  return !0;
}
function xo(t, r) {
  return Ji(t, r) ? r : t;
}
function Am(t, r) {
  return t === "visible" || t === "invisible" || t === "gone" ? t : r;
}
function qd(t, r) {
  return t === "linear" || t === "ease" || t === "ease_in_out" || t === "ease_in" || t === "ease_out" ? t : r;
}
function oo(t, r) {
  const e = Number(t);
  return Number.isNaN(e) ? r : e;
}
function us(t) {
  const r = [];
  return t.name === "set" ? (t.items || []).forEach((e) => {
    r.push(...us(e));
  }) : r.push(t), r;
}
function bi(t, r) {
  if (!t || typeof t != "object")
    return r;
  const e = [
    "top",
    "right",
    "bottom",
    "left"
  ];
  for (let n = 0; n < e.length; ++n)
    if (t[e[n]] && !Nn(t[e[n]]))
      return r;
  return t;
}
function Sm(t, r) {
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
function Vm(t, r) {
  const e = [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ];
  for (let n = 0; n < e.length; ++n)
    if (e[n] && !Nn(e[n]))
      return r;
  return t;
}
function Bs(t, r = 0, e = 10) {
  return [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ].map((n) => pe((n || r) / e * 10)).join(" ");
}
function Fm(t) {
  var r, e, n, o, i, s;
  return pe(((e = (r = t.offset) == null ? void 0 : r.x) == null ? void 0 : e.value) || 0) + " " + pe(((o = (n = t.offset) == null ? void 0 : n.y) == null ? void 0 : o.value) || 0) + " " + pe((i = t.blur) != null ? i : 2) + " " + pr(t.color || "#000000", (s = t.alpha) != null ? s : 0.19);
}
function Im(t, r) {
  var e, n, o, i, s, a;
  return "drop-shadow(" + pr(t.color || "#000000", (e = t.alpha) != null ? e : 0.19) + " " + pe((((o = (n = t.offset) == null ? void 0 : n.x) == null ? void 0 : o.value) || 0) * 10 / r) + " " + pe((((s = (i = t.offset) == null ? void 0 : i.y) == null ? void 0 : s.value) || 0) * 10 / r) + " " + pe(((a = t.blur) != null ? a : 2) * 10 / r) + ")";
}
let Al;
function Li() {
  return typeof matchMedia > "u" ? !1 : (Al || (Al = window.matchMedia("(prefers-reduced-motion)")), Al.matches);
}
const Dm = 8, Tm = (t, r, e, n) => {
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
      if (++i > Dm) {
        const u = new Error("Recursive layout in size_provider");
        u.level = "warn", u.additional = {
          widthVariableName: e,
          heightVariableName: n
        }, r.logError(u);
        break;
      }
      await In();
    }
  }), o.observe(t)), o;
}, wa = Symbol("enabled");
function nn(t, r) {
  return t === 1 || t === 0 || t === !1 || t === !0 ? !!t : r;
}
function ti(t) {
  return [
    t.state_description,
    t.description,
    t.hint
  ].filter(Boolean).join(", ");
}
const vu = 1, ri = 2;
function ju(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "translation-fixed")
      return pe(t.value * r);
    if (t.type === "translation-percentage")
      return `${t.value * r}%`;
  }
}
function ys(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "pivot-fixed")
      return pe(t.value * r);
    if (t.type === "pivot-percentage")
      return `${t.value * r}%`;
  }
}
function Mm(t) {
  return t.map((r) => {
    if (r.type === "rotation") {
      if (typeof r.angle == "number") {
        const e = ys(r.pivot_x) || "50%", n = ys(r.pivot_y) || "50%", o = ys(r.pivot_x, -1) || "-50%", i = ys(r.pivot_y, -1) || "-50%";
        return `translate(${e}, ${n}) rotate(${r.angle}deg) translate(${o}, ${i})`;
      }
    } else if (r.type === "translation") {
      const e = ju(r.x) || 0, n = ju(r.y) || 0;
      return `translate(${e}, ${n})`;
    }
  }).filter(Boolean).join(" ");
}
const Pm = "appkit-actionable__button", Cu = {
  actionable__button: Pm
};
function Nm() {
}
const To = Symbol("action");
function Ql(t) {
  if (t.startsWith("tel:"))
    return "tel";
  if (t.startsWith("/"))
    return "https";
  const r = /^([^/]+):\/\//.exec(t);
  return r && r[1] || "";
}
function xl(t, r) {
  return r.has(t);
}
function zm(t) {
  let r = (
    /*containerElement*/
    t[7]
  ), e, n, o = (
    /*containerElement*/
    t[7] && Sl(t)
  );
  return {
    c() {
      o && o.c(), e = Qt();
    },
    m(i, s) {
      o && o.m(i, s), J(i, e, s), n = !0;
    },
    p(i, s) {
      /*containerElement*/
      i[7] ? r ? Sr(
        r,
        /*containerElement*/
        i[7]
      ) ? (o.d(1), o = Sl(i), r = /*containerElement*/
      i[7], o.c(), o.m(e.parentNode, e)) : o.p(i, s) : (o = Sl(i), r = /*containerElement*/
      i[7], o.c(), o.m(e.parentNode, e)) : r && (o.d(1), o = null, r = /*containerElement*/
      i[7]);
    },
    i(i) {
      n || (L(o, i), n = !0);
    },
    o(i) {
      x(o, i), n = !1;
    },
    d(i) {
      i && G(e), o && o.d(i);
    }
  };
}
function Lm(t) {
  var f;
  let r, e, n, o, i, s;
  const a = (
    /*#slots*/
    t[31].default
  ), l = al(
    a,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let u = [
    {
      class: e = /*cls*/
      t[2] + " " + Cu.actionable__button + " " + Er["root__any-actions"] + ` ${/*isNativeActionAnimation*/
      t[6] ? Er.root__clickable : Er["root__clickable-no-transition"]} ${Er.root__unselectable} ` + /*longTapActions*/
      ((f = t[1]) != null && f.length ? Er["root_disabled-context-menu"] : "")
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
      t[0].fakeElement === ri ? -1 : null
    },
    /*attrs*/
    t[4]
  ], c = {};
  for (let _ = 0; _ < u.length; _ += 1)
    c = jo(c, u[_]);
  return {
    c() {
      r = Me("button"), l && l.c(), qo(r, c);
    },
    m(_, h) {
      J(_, r, h), l && l.m(r, null), r.autofocus && r.focus(), t[48](r), o = !0, i || (s = [
        dl(
          /*use*/
          t[5].call(null, r)
        ),
        Qe(
          r,
          "click",
          /*click_handler_1*/
          t[37]
        ),
        Qe(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        Qe(
          r,
          "focus",
          /*focus_handler_1*/
          t[38]
        ),
        Qe(
          r,
          "blur",
          /*blur_handler_1*/
          t[39]
        ),
        Qe(
          r,
          "pointerdown",
          /*pointerdown_handler_1*/
          t[40]
        ),
        Qe(
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
      1073741824) && cl(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? ul(
          a,
          /*$$scope*/
          _[30],
          h,
          null
        ) : fl(
          /*$$scope*/
          _[30]
        ),
        null
      ), qo(r, c = No(u, [
        (!o || h[0] & /*cls, isNativeActionAnimation, longTapActions*/
        70 && e !== (e = /*cls*/
        _[2] + " " + Cu.actionable__button + " " + Er["root__any-actions"] + ` ${/*isNativeActionAnimation*/
        _[6] ? Er.root__clickable : Er["root__clickable-no-transition"]} ${Er.root__unselectable} ` + /*longTapActions*/
        ((m = _[1]) != null && m.length ? Er["root_disabled-context-menu"] : ""))) && { class: e },
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
        _[0].fakeElement === ri ? -1 : null)) && { tabindex: n },
        h[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (L(l, _), o = !0);
    },
    o(_) {
      x(l, _), o = !1;
    },
    d(_) {
      _ && G(r), l && l.d(_), t[48](null), i = !1, Jr(s);
    }
  };
}
function Om(t) {
  var f;
  let r, e, n, o, i, s;
  const a = (
    /*#slots*/
    t[31].default
  ), l = al(
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
      t[2] + " " + Er["root__any-actions"] + " " + /*isNativeActionAnimation*/
      (t[6] ? Er.root__clickable : Er["root__clickable-no-transition"]) + " " + /*longTapActions*/
      ((f = t[1]) != null && f.length ? Er["root_disabled-context-menu"] : "")
    },
    {
      tabindex: n = /*componentContext*/
      t[0].fakeElement === ri ? -1 : null
    },
    /*attrs*/
    t[4]
  ], c = {};
  for (let _ = 0; _ < u.length; _ += 1)
    c = jo(c, u[_]);
  return {
    c() {
      r = Me("a"), l && l.c(), qo(r, c);
    },
    m(_, h) {
      J(_, r, h), l && l.m(r, null), t[47](r), o = !0, i || (s = [
        dl(
          /*use*/
          t[5].call(null, r)
        ),
        Qe(
          r,
          "click",
          /*click_handler*/
          t[32]
        ),
        Qe(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        Qe(
          r,
          "focus",
          /*focus_handler*/
          t[33]
        ),
        Qe(
          r,
          "blur",
          /*blur_handler*/
          t[34]
        ),
        Qe(
          r,
          "pointerdown",
          /*pointerdown_handler*/
          t[35]
        ),
        Qe(
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
      1073741824) && cl(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? ul(
          a,
          /*$$scope*/
          _[30],
          h,
          null
        ) : fl(
          /*$$scope*/
          _[30]
        ),
        null
      ), qo(r, c = No(u, [
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
        _[2] + " " + Er["root__any-actions"] + " " + /*isNativeActionAnimation*/
        (_[6] ? Er.root__clickable : Er["root__clickable-no-transition"]) + " " + /*longTapActions*/
        ((m = _[1]) != null && m.length ? Er["root_disabled-context-menu"] : ""))) && { class: e },
        (!o || h[0] & /*componentContext*/
        1 && n !== (n = /*componentContext*/
        _[0].fakeElement === ri ? -1 : null)) && { tabindex: n },
        h[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (L(l, _), o = !0);
    },
    o(_) {
      x(l, _), o = !1;
    },
    d(_) {
      _ && G(r), l && l.d(_), t[47](null), i = !1, Jr(s);
    }
  };
}
function Sl(t) {
  var f;
  let r, e, n, o, i, s;
  const a = (
    /*#slots*/
    t[31].default
  ), l = al(
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
      ((f = t[1]) != null && f.length ? Er["root_disabled-context-menu"] : "") + " " + /*hasAnyActions*/
      (t[14] ? Er["root__any-actions"] : "")
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
    c = jo(c, u[_]);
  return {
    c() {
      r = Me(
        /*containerElement*/
        t[7]
      ), l && l.c(), ei(
        /*containerElement*/
        t[7]
      )(r, c);
    },
    m(_, h) {
      J(_, r, h), l && l.m(r, null), t[49](r), o = !0, i || (s = [
        dl(
          /*use*/
          t[5].call(null, r)
        ),
        Qe(
          r,
          "click",
          /*click_handler_2*/
          t[42]
        ),
        Qe(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        Qe(
          r,
          "focus",
          /*focus_handler_2*/
          t[43]
        ),
        Qe(
          r,
          "blur",
          /*blur_handler_2*/
          t[44]
        ),
        Qe(
          r,
          "pointerdown",
          /*pointerdown_handler_2*/
          t[45]
        ),
        Qe(
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
      1073741824) && cl(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? ul(
          a,
          /*$$scope*/
          _[30],
          h,
          null
        ) : fl(
          /*$$scope*/
          _[30]
        ),
        null
      ), ei(
        /*containerElement*/
        _[7]
      )(r, c = No(u, [
        (!o || h[0] & /*cls, longTapActions, hasAnyActions*/
        16390 && e !== (e = /*cls*/
        _[2] + " " + /*longTapActions*/
        ((m = _[1]) != null && m.length ? Er["root_disabled-context-menu"] : "") + " " + /*hasAnyActions*/
        (_[14] ? Er["root__any-actions"] : ""))) && { class: e },
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
      o || (L(l, _), o = !0);
    },
    o(_) {
      x(l, _), o = !1;
    },
    d(_) {
      _ && G(r), l && l.d(_), t[49](null), i = !1, Jr(s);
    }
  };
}
function Bm(t) {
  let r, e, n, o;
  const i = [Om, Lm, zm], s = [];
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
      e.c(), n = Qt();
    },
    m(l, u) {
      s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? s[r].p(l, u) : (sr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), lr(), e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n));
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), s[r].d(l);
    }
  };
}
const Eu = 8, Au = 400, Vl = 400, Rm = /* @__PURE__ */ new Set(["button", "image", "checkbox", "radio", "header"]);
function Su(t) {
  t.preventDefault();
}
function Hm(t, r, e) {
  let n, o, i = j, s = () => (i(), i = S(n, (q) => e(29, o = q)), n);
  t.$$.on_destroy.push(() => i());
  let { $$slots: a = {}, $$scope: l } = r, { componentContext: u } = r, { id: c = "" } = r, { actions: f = void 0 } = r, { doubleTapActions: _ = void 0 } = r, { longTapActions: h = void 0 } = r, { pressStartActions: m = void 0 } = r, { pressEndActions: p = void 0 } = r, { hoverStartActions: w = void 0 } = r, { hoverEndActions: k = void 0 } = r, { cls: N = "" } = r, { style: H = null } = r, { attrs: O = void 0 } = r, { use: ne = Nm } = r, { customAction: de = null } = r, { isNativeActionAnimation: T = !0 } = r, { hasInnerFocusable: X = !1 } = r, { customAccessibility: le = void 0 } = r, { captureFocusOnAction: C = !0 } = r, { containerElement: D = "span" } = r;
  const M = Dr(Kr), W = Dr(To);
  _i(To, {
    hasAction() {
      return !!(W.hasAction() || f != null && f.length || (le == null ? void 0 : le.mode) === "exclude");
    }
  });
  let Q, me = "", Ee, ve = -1, he = -1, Se = null, Z = !1, et = !1, Je = !1, qe, be, Te, ue, ge = !1;
  function ce() {
    return (o == null ? void 0 : o.some((q) => {
      if (q != null && q.typed)
        return !0;
      const Tt = q == null ? void 0 : q.url;
      if (!Tt)
        return !1;
      const Ft = Ql(Tt);
      return Ft && !xl(Ft, M.getBuiltinProtocols());
    })) || !1;
  }
  async function re(q, Tt) {
    f && (q && ce() && q.preventDefault(), u.execAnyActions(f, { node: Q, processUrls: Tt }));
  }
  async function ae(q) {
    if (W.hasAction() || q.button !== void 0 && q.button !== 0)
      return;
    const Tt = Date.now();
    if (ve > 0 && Tt > ve + Au) {
      q.preventDefault();
      return;
    }
    if (_ != null && _.length && he > 0 && Tt - he < Vl) {
      q.preventDefault(), u.execAnyActions(_, { processUrls: !0, node: Q }), he = -1;
      return;
    }
    if (he = Tt, _ != null && _.length && ve > 0 && Tt < ve + Vl) {
      q.preventDefault(), clearTimeout(be), be = window.setTimeout(
        () => {
          re(void 0, !0);
        },
        Vl
      );
      return;
    }
    (de == null ? void 0 : de(q)) === !1 ? q.preventDefault() : re(q, !1);
  }
  function oe(q) {
    W.hasAction() || (Se = { x: q.clientX, y: q.clientY }, Z = !1, ve = Date.now(), qe && clearTimeout(qe), clearTimeout(be), u.execAnyActions(m, { node: Q }));
  }
  function we(q) {
    Se && (Math.abs(Se.x - q.clientX) > Eu || Math.abs(Se.y - q.clientY) > Eu) && (Z = !0);
  }
  function Re(q) {
    W.hasAction() || !Se || ve < 0 || (!Z && Date.now() - ve >= Au && (q.stopImmediatePropagation(), u.execAnyActions(h, { processUrls: !0, node: Q })), qe && clearTimeout(qe), qe = window.setTimeout(
      () => {
        Se = null, ve = -1;
      },
      100
    ), u.execAnyActions(p, { node: Q }));
  }
  function Ge() {
    W.hasAction() || u.execAnyActions(w, { node: Q });
  }
  function ee() {
    W.hasAction() || u.execAnyActions(k, { node: Q });
  }
  function Oe(q) {
    const Tt = q.target;
    Tt instanceof HTMLElement && (Tt.tagName === "INPUT" || Tt.contentEditable === "true") || q.ctrlKey || q.metaKey || q.altKey || q.shiftKey || q.key === "Enter" && Array.isArray(f) && f.length && (u.execAnyActions(f), q.preventDefault());
  }
  Zn(() => {
    c && !X && M.registerFocusable(c, {
      focus() {
        Q && (me || et) && Q.focus();
      }
    });
  }), sn(() => {
    typeof window < "u" && (window.removeEventListener("pointermove", we), window.removeEventListener("pointerup", Re), window.removeEventListener("pointercancel", Re)), c && !X && M.unregisterFocusable(c), qe && clearTimeout(qe), be && clearTimeout(be);
  });
  function Ne(q) {
    On.call(this, t, q);
  }
  function nt(q) {
    On.call(this, t, q);
  }
  function at(q) {
    On.call(this, t, q);
  }
  function tt(q) {
    On.call(this, t, q);
  }
  function yt(q) {
    On.call(this, t, q);
  }
  function rt(q) {
    On.call(this, t, q);
  }
  function Mt(q) {
    On.call(this, t, q);
  }
  function ft(q) {
    On.call(this, t, q);
  }
  function K(q) {
    On.call(this, t, q);
  }
  function _e(q) {
    On.call(this, t, q);
  }
  function st(q) {
    On.call(this, t, q);
  }
  function Pe(q) {
    On.call(this, t, q);
  }
  function I(q) {
    On.call(this, t, q);
  }
  function jt(q) {
    On.call(this, t, q);
  }
  function lt(q) {
    On.call(this, t, q);
  }
  function Et(q) {
    Vr[q ? "unshift" : "push"](() => {
      Q = q, e(8, Q);
    });
  }
  function Dt(q) {
    Vr[q ? "unshift" : "push"](() => {
      Q = q, e(8, Q);
    });
  }
  function ot(q) {
    Vr[q ? "unshift" : "push"](() => {
      Q = q, e(8, Q);
    });
  }
  return t.$$set = (q) => {
    "componentContext" in q && e(0, u = q.componentContext), "id" in q && e(18, c = q.id), "actions" in q && e(19, f = q.actions), "doubleTapActions" in q && e(20, _ = q.doubleTapActions), "longTapActions" in q && e(1, h = q.longTapActions), "pressStartActions" in q && e(21, m = q.pressStartActions), "pressEndActions" in q && e(22, p = q.pressEndActions), "hoverStartActions" in q && e(23, w = q.hoverStartActions), "hoverEndActions" in q && e(24, k = q.hoverEndActions), "cls" in q && e(2, N = q.cls), "style" in q && e(3, H = q.style), "attrs" in q && e(4, O = q.attrs), "use" in q && e(5, ne = q.use), "customAction" in q && e(25, de = q.customAction), "isNativeActionAnimation" in q && e(6, T = q.isNativeActionAnimation), "hasInnerFocusable" in q && e(26, X = q.hasInnerFocusable), "customAccessibility" in q && e(27, le = q.customAccessibility), "captureFocusOnAction" in q && e(28, C = q.captureFocusOnAction), "containerElement" in q && e(7, D = q.containerElement), "$$scope" in q && e(30, l = q.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*customAccessibility*/
    134217728 && e(12, ge = (le == null ? void 0 : le.mode) === "exclude"), t.$$.dirty[0] & /*componentContext, actions*/
    524289 && s(e(16, n = u.getDerivedFromVars(f, void 0, !0))), t.$$.dirty[0] & /*$processedActions, customAction, href, ariaHidden, componentContext*/
    570429953) {
      if (Array.isArray(o) && (o != null && o.length))
        for (let q = 0; q < o.length; ++q) {
          const Tt = o[q].url;
          if (Tt) {
            e(9, me = Tt), e(13, Ee = o[q].target || void 0);
            break;
          }
        }
      e(10, et = !!de), (me || Array.isArray(o) && (o != null && o.length)) && (W.hasAction() || ge) ? (e(9, me = ""), u.logError(Y(new Error("Actionable element is forbidden inside other actionable element or inside accessibility mode=exlucde"), {
        level: "warn",
        additional: { actions: o }
      }))) : me && !xl(Ql(me), M.getBuiltinProtocols()) ? (e(9, me = ""), e(10, et = !0)) : !me && Array.isArray(o) && (o != null && o.length) && (e(10, et = !0), o.some((q) => q.url || q.typed || q.menu_items) || u.logError(Y(new Error("The component has a list of actions, but does not have a real action"), {
        level: "warn",
        additional: { actions: o }
      })));
    }
    t.$$.dirty[0] & /*customAccessibility, href, hasJSAction, role*/
    134221312 && (le != null && le.type && Rm.has(le.type) ? le.type === "header" ? e(11, Te = "heading") : e(11, Te = le.type) : me ? e(11, Te = void 0) : et && e(11, Te = "button"), (Te === "checkbox" || Te === "radio") && typeof (le == null ? void 0 : le.is_checked) == "boolean" ? e(15, ue = le.is_checked) : e(15, ue = void 0)), t.$$.dirty[0] & /*node, href, hasJSAction, doubleTapActions, longTapActions, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions, captureFocusOnAction*/
    300943106 && Q && (me || et || _ != null && _.length ? Q.addEventListener("click", ae) : Q.removeEventListener("click", ae), _ != null && _.length || h != null && h.length || m != null && m.length || p != null && p.length ? (Q.addEventListener("pointerdown", oe, { passive: !0 }), window.addEventListener("pointermove", we, { passive: !0 }), window.addEventListener("pointerup", Re, { passive: !0 }), window.addEventListener("pointercancel", Re, { passive: !0 })) : (Q.removeEventListener("pointerdown", oe), window.removeEventListener("pointerup", Re), window.removeEventListener("pointermove", we), window.removeEventListener("pointercancel", Re)), w != null && w.length ? Q.addEventListener("pointerenter", Ge) : Q.removeEventListener("pointerenter", Ge), k != null && k.length ? Q.addEventListener("pointerleave", ee) : Q.removeEventListener("pointerleave", ee), C === !1 ? Q.addEventListener("mousedown", Su) : Q.removeEventListener("mousedown", Su), e(14, Je = !!(me || et || _ != null && _.length || h != null && h.length || m != null && m.length || p != null && p.length || w != null && w.length || k != null && k.length)));
  }, [
    u,
    h,
    N,
    H,
    O,
    ne,
    T,
    D,
    Q,
    me,
    et,
    Te,
    ge,
    Ee,
    Je,
    ue,
    n,
    Oe,
    c,
    f,
    _,
    m,
    p,
    w,
    k,
    de,
    X,
    le,
    C,
    o,
    l,
    a,
    Ne,
    nt,
    at,
    tt,
    yt,
    rt,
    Mt,
    ft,
    K,
    _e,
    st,
    Pe,
    I,
    jt,
    lt,
    Et,
    Dt,
    ot
  ];
}
class bl extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      Hm,
      Bm,
      Sr,
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
const pi = {
  "outer-background": "appkit-outer-background",
  "outer-background_clip": "appkit-outer-background_clip",
  "outer-background__item": "appkit-outer-background__item",
  "outer-background__item_hidden": "appkit-outer-background__item_hidden"
};
function zn(t) {
  return ml(t) && t > 0;
}
function Kd(t, r) {
  return t.map((e) => {
    if (!e) {
      r(Y(new Error("Incorrect filter"), {
        level: "warn"
      }));
      return;
    }
    if (e.type === "blur") {
      if (zn(e.radius))
        return `blur(${an(e.radius / 2)})`;
    } else {
      if (e.type === "rtl_mirror")
        return;
      r(Y(new Error("Unknown filter"), {
        level: "warn",
        additional: {
          filter: e.type
        }
      }));
    }
  }).filter(Boolean).join(" ");
}
function Vu(t, r, e) {
  const n = t.slice();
  return n[6] = r[e], n;
}
function Wm(t) {
  let r, e;
  return {
    c() {
      r = Me("span"), g(r, "class", pi["outer-background__item"]), g(r, "style", e = _r(
        /*item*/
        t[6].style
      ));
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o & /*styles*/
      2 && e !== (e = _r(
        /*item*/
        n[6].style
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Um(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Me("img"), Xn(r.src, e = /*item*/
      t[6].image_url) || g(r, "src", e), g(r, "alt", ""), g(r, "aria-hidden", "true"), g(r, "loading", "lazy"), g(r, "decoding", "async"), g(r, "class", pi["outer-background__item"]), g(r, "style", n = _r(
        /*item*/
        t[6].style
      ));
    },
    m(s, a) {
      J(s, r, a), o || (i = Qe(
        r,
        "error",
        /*onImgError*/
        t[2]
      ), o = !0);
    },
    p(s, a) {
      a & /*styles*/
      2 && !Xn(r.src, e = /*item*/
      s[6].image_url) && g(r, "src", e), a & /*styles*/
      2 && n !== (n = _r(
        /*item*/
        s[6].style
      )) && g(r, "style", n);
    },
    d(s) {
      s && G(r), o = !1, i();
    }
  };
}
function Fu(t) {
  let r;
  function e(i, s) {
    return (
      /*item*/
      i[6].image_url ? Um : Wm
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Qt();
    },
    m(i, s) {
      o.m(i, s), J(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && G(r), o.d(i);
    }
  };
}
function Gm(t) {
  let r, e, n = ir(
    /*styles*/
    t[1]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Fu(Vu(t, n, i));
  return {
    c() {
      r = Me("span");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", e = pi["outer-background"] + /*radius*/
      (t[0] ? " " + pi["outer-background_clip"] : "")), F(
        r,
        "border-radius",
        /*radius*/
        t[0]
      );
    },
    m(i, s) {
      J(i, r, s);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(r, null);
    },
    p(i, [s]) {
      if (s & /*styles, onImgError*/
      6) {
        n = ir(
          /*styles*/
          i[1]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Vu(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Fu(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s & /*radius*/
      1 && e !== (e = pi["outer-background"] + /*radius*/
      (i[0] ? " " + pi["outer-background_clip"] : "")) && g(r, "class", e), s & /*radius*/
      1 && F(
        r,
        "border-radius",
        /*radius*/
        i[0]
      );
    },
    i: j,
    o: j,
    d(i) {
      i && G(r), on(o, i);
    }
  };
}
function Jm(t, r, e) {
  let n, { direction: o } = r, { componentContext: i } = r, { background: s = [] } = r, { radius: a = "" } = r;
  function l(u) {
    u.target && "classList" in u.target && u.target.classList.add(pi["outer-background__item_hidden"]);
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
        const _ = hl([u], o);
        u.type === "solid" && (c["background-color"] = _.color), u.type === "gradient" && (c["background-image"] = _.image), u.type === "image" && (c.opacity = Number(u.alpha), f.image_url = u.image_url, c["object-fit"] = _.size, c["object-position"] = _.position, Array.isArray(u.filters) && u.filters.length && (c.filter = Kd(u.filters, i.logError), o === "rtl" && u.filters.some((h) => h.type === "rtl_mirror") && (c.transform = "scale(-1,1)")));
      }
      return f;
    }));
  }, [a, n, l, o, i, s];
}
class qm extends Or {
  constructor(r) {
    super(), Lr(this, r, Jm, Gm, Sr, {
      direction: 3,
      componentContext: 4,
      background: 5,
      radius: 0
    });
  }
}
const Km = (t) => ({
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
}), Iu = (t) => ({
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
function Du(t) {
  let r, e;
  return r = new bl({
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
          Xs,
          /*mods*/
          t[31]
        ) + /*customClass*/
        (t[30] ? ` ${/*customClass*/
        t[30]}` : "") + /*hoverClassName*/
        (t[18] ? ` ${/*hoverClassName*/
        t[18]}` : "")
      ),
      style: _r(
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
      t[16].length || Lu(
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
      $$slots: { default: [Ym] },
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
    t[150]
  ), r.$on(
    "wheel",
    /*wheel_handler*/
    t[151]
  ), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
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
        Xs,
        /*mods*/
        n[31]
      ) + /*customClass*/
      (n[30] ? ` ${/*customClass*/
      n[30]}` : "") + /*hoverClassName*/
      (n[18] ? ` ${/*hoverClassName*/
      n[18]}` : "")), o[0] & /*stl*/
      536870912 && (i.style = _r(
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
      n[16].length || Lu(
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
      268435456 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function Tu(t) {
  let r, e;
  return r = new qm({
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function Mu(t) {
  let r, e;
  return {
    c() {
      r = Me("span"), g(r, "class", Xs.outer__border), g(r, "style", e = _r(
        /*borderElemStyle*/
        t[4]
      ));
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o[0] & /*borderElemStyle*/
      16 && e !== (e = _r(
        /*borderElemStyle*/
        n[4]
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Ym(t) {
  let r, e, n, o = (
    /*hasSeparateBg*/
    t[11] && Tu(t)
  );
  const i = (
    /*#slots*/
    t[149].default
  ), s = al(
    i,
    t,
    /*$$scope*/
    t[152],
    Iu
  );
  let a = (
    /*hasBorder*/
    t[22] && Mu(t)
  );
  return {
    c() {
      o && o.c(), r = Qt(), s && s.c(), a && a.c(), e = Qt();
    },
    m(l, u) {
      o && o.m(l, u), J(l, r, u), s && s.m(l, u), a && a.m(l, u), J(l, e, u), n = !0;
    },
    p(l, u) {
      /*hasSeparateBg*/
      l[11] ? o ? (o.p(l, u), u[0] & /*hasSeparateBg*/
      2048 && L(o, 1)) : (o = Tu(l), o.c(), L(o, 1), o.m(r.parentNode, r)) : o && (sr(), x(o, 1, 1, () => {
        o = null;
      }), lr()), s && s.p && (!n || u[0] & /*hasCustomFocus, widthMin, widthMax, heightMin, heightMax*/
      132032 | u[4] & /*$$scope*/
      268435456) && cl(
        s,
        i,
        l,
        /*$$scope*/
        l[152],
        n ? ul(
          i,
          /*$$scope*/
          l[152],
          u,
          Km
        ) : fl(
          /*$$scope*/
          l[152]
        ),
        Iu
      ), /*hasBorder*/
      l[22] ? a ? a.p(l, u) : (a = Mu(l), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null);
    },
    i(l) {
      n || (L(o), L(s, l), n = !0);
    },
    o(l) {
      x(o), x(s, l), n = !1;
    },
    d(l) {
      l && (G(r), G(e)), o && o.d(l), s && s.d(l), a && a.d(l);
    }
  };
}
function Xm(t) {
  let r, e, n = !/*hasWidthError*/
  t[23] && !/*hasHeightError*/
  t[24] && Du(t);
  return {
    c() {
      n && n.c(), r = Qt();
    },
    m(o, i) {
      n && n.m(o, i), J(o, r, i), e = !0;
    },
    p(o, i) {
      !/*hasWidthError*/
      o[23] && !/*hasHeightError*/
      o[24] ? n ? (n.p(o, i), i[0] & /*hasWidthError, hasHeightError*/
      25165824 && L(n, 1)) : (n = Du(o), n.c(), L(n, 1), n.m(r.parentNode, r)) : n && (sr(), x(n, 1, 1, () => {
        n = null;
      }), lr());
    },
    i(o) {
      e || (L(n), e = !0);
    },
    o(o) {
      x(n), e = !1;
    },
    d(o) {
      o && G(r), n && n.d(o);
    }
  };
}
const Pu = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
}, Nu = {
  left: "end",
  center: "center",
  right: "start",
  start: "start",
  end: "end"
}, zu = {
  top: "start",
  center: "center",
  bottom: "end",
  baseline: "baseline"
}, Fl = (t) => `The component id with the "${t}" property for state change is missing. Either specify the id, or specify the "transition_trigger" property without "state_change" value.`;
function Lu(t) {
  return t.some((r) => r.name === "native");
}
function Zm(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, O, ne, de, T, X, le, C, D, M, W, Q, me, Ee, ve, he, Se, Z, et, Je, qe, be, Te, ue, ge, ce, re, ae, oe, we, Re, Ge = j, ee = () => (Ge(), Ge = S(k, (it) => e(133, Re = it)), k), Oe, Ne = j, nt = () => (Ne(), Ne = S(N, (it) => e(134, Oe = it)), N), at, tt = j, yt = () => (tt(), tt = S(w, (it) => e(135, at = it)), w), rt, Mt = j, ft = () => (Mt(), Mt = S(H, (it) => e(136, rt = it)), H), K, _e = j, st = () => (_e(), _e = S(p, (it) => e(137, K = it)), p), Pe, I = j, jt = () => (I(), I = S(m, (it) => e(138, Pe = it)), m), lt, Et = j, Dt = () => (Et(), Et = S(o, (it) => e(139, lt = it)), o), ot, q = j, Tt = () => (q(), q = S(h, (it) => e(20, ot = it)), h), Ft, Kt = j, Xt = () => (Kt(), Kt = S(_, (it) => e(140, Ft = it)), _), je, Ke = j, _t = () => (Ke(), Ke = S(f, (it) => e(141, je = it)), f), Fe, $e = j, Be = () => ($e(), $e = S(c, (it) => e(142, Fe = it)), c), Vt, ze = j, mt = () => (ze(), ze = S(a, (it) => e(143, Vt = it)), a), Ut, It = j, hr = () => (It(), It = S(u, (it) => e(144, Ut = it)), u), De, kt = j, ar = () => (kt(), kt = S(l, (it) => e(145, De = it)), l), rr, er = j, mr = () => (er(), er = S(s, (it) => e(146, rr = it)), s), vr, tr = j, nr = () => (tr(), tr = S(i, (it) => e(147, vr = it)), i), Rt;
  t.$$.on_destroy.push(() => Ge()), t.$$.on_destroy.push(() => Ne()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => Mt()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => Et()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => Kt()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => $e()), t.$$.on_destroy.push(() => ze()), t.$$.on_destroy.push(() => It()), t.$$.on_destroy.push(() => kt()), t.$$.on_destroy.push(() => er()), t.$$.on_destroy.push(() => tr());
  let { $$slots: pt = {}, $$scope: xt } = r, { componentContext: ie } = r, { cls: yr = "" } = r, { style: kr = void 0 } = r, { layoutParams: Ct = {} } = r, { customDescription: Tr = !1 } = r, { customPaddings: Br = !1 } = r, { customActions: cr = "" } = r, { additionalPaddings: ut = null } = r, { heightByAspect: vt = !1 } = r, { parentOf: Gt = void 0 } = r, { parentOfSimpleMode: Zt = void 0 } = r, { replaceItems: ur = void 0 } = r, { hasInnerFocusable: dt = !1 } = r, { alwaysCustomFocus: fe = !1 } = r, { containerElement: wt = "span" } = r, { devapi: or = void 0 } = r;
  const Yt = Dr(Kr), jr = Dr(ya), { isEnabled: v } = Dr(wa);
  yn(t, v, (it) => e(148, Rt = it));
  const se = Yt.direction;
  yn(t, se, (it) => e(19, we = it));
  let d, B, Ie = null, He = [], ke = {}, R = {}, Jt = !1, Ht = 1, Ye = "transparent", ct = 0, Wt = {
    "top-left": 0,
    "top-right": 0,
    "bottom-right": 0,
    "bottom-left": 0
  }, Fr = "", br = null, Mr = "", jn = {}, Ae, Qr, Yr, pn = 0, Cn = 0, y = 0, E = !1, A = !1, te = {}, z, xe, Ve, $t = 0, At = 0, Xe = 0, qt = !1, St = !1, Cr = 1, Wr, ln, Ir, gn, hn = [], Sn = !1, so = !1, Pn, zt, b, V = [], $ = [], P = [], Ce = [], ye = [], Ot = [], Bt = [], qr = [], Pr = [], Rr = [], mo = "", to, ro, Qn, qi, Ze = !1, wr = "visible", rn, Lo, Oo = !1, wn = !0, Yo, En, Co, Ki = null, ai;
  function h_() {
    e(72, br = null), e(73, Mr = ""), e(86, Cr = 1), e(98, Ze = !1), e(99, wr = "visible"), e(100, rn = void 0), e(28, wn = !0), hn = ie.fakeElement ? [] : ie.json.transition_triggers || ["state_change", "visibility_change"], e(89, Sn = hn.indexOf("state_change") !== -1), so = hn.indexOf("visibility_change") !== -1, d && Fa(d), En == null || En(), Rt && e(102, En = Yt.processVariableTriggers(ie, ie.json.variable_triggers));
  }
  function m_(it, Xr) {
    if (!Array.isArray(Gt) || !ur || Zt && (Array.isArray(Xr) ? Xr.length : 0) !== 1)
      return;
    const Vn = Gt.findIndex((un) => (un == null ? void 0 : un.id) === it), Rn = Gt.slice();
    Rn.splice(Vn, 1, ...(Xr || []).map((un) => ({ json: un, id: un == null ? void 0 : un.id }))), e(53, Gt = Rn), ur(Rn.map((un) => un == null ? void 0 : un.json));
  }
  function b_(it) {
    const Xr = oo(it.start_value, 1), Vn = oo(it.end_value, 1), Rn = tn(it.start_delay, 0), un = Li() ? 0 : tn(it.duration, 300), bo = qd(it.interpolator, "ease_in_out").replace(/_/g, "-");
    switch (it.name) {
      case "fade":
        return e(94, to = Xr), e(95, ro = Vn), `opacity ${un}ms ${bo} ${Rn}ms`;
      case "scale":
        return e(96, Qn = Xr), e(97, qi = Vn), `transform ${un}ms ${bo} ${Rn}ms`;
      case "native":
      case "no_animation":
        return "";
      default:
        return ie.logError(Y(new Error("Unknown action_animation name"), {
          additional: { animation: it.name }
        })), "";
    }
  }
  async function y_(it) {
    e(99, wr = it);
    const Xr = it === "visible" ? "in" : "out", Vn = Xr === "in" ? ie.json.transition_in : ie.json.transition_out;
    if (so && Vn) {
      let Rn;
      it === "gone" && (Rn = d.getBoundingClientRect()), await In(), Xr === "in" && e(91, zt = !0), jr.runVisibilityTransition(
        {
          ...ie.json,
          visibility: "visible"
        },
        ie,
        Vn,
        d,
        Xr,
        Rn
      ).then(() => {
        Xr === "in" && e(91, zt = !1);
      }).catch((un) => {
        throw Xr === "in" && e(91, zt = !1), un;
      });
    }
  }
  function Va() {
    if (Ie && d) {
      const it = Yt.getExtensionContext(ie);
      Ie.forEach((Xr) => {
        var Vn;
        (Vn = Xr.unmountView) == null || Vn.call(Xr, d, it);
      }), Ie = null;
    }
  }
  function w_() {
    if (Ie != null && Ie.length) {
      const it = Yt.getExtensionContext(ie);
      Ie.forEach((Xr) => {
        var Vn;
        (Vn = Xr.updateView) == null || Vn.call(Xr, d, it);
      });
    }
    Ki && Ki.update(ie);
  }
  let Eo = null, Bo = null, ui = "desktop";
  function Yi() {
    Eo != null && Eo.matches ? e(105, ui = "mobile") : Bo != null && Bo.matches ? e(105, ui = "tablet") : e(105, ui = "desktop");
  }
  let lo = null, Xi = "";
  function Fa(it) {
    var Zi, Qi, xi;
    Co == null || Co.destroy(), e(65, d = it), Sn && ie.json.transition_in && (ie.id ? jr.registerChildWithTransitionIn(ie.json, ie, ie.json.transition_in, it).then(() => {
      e(90, Pn = !1);
    }).catch((Xo) => {
      throw e(90, Pn = !1), Xo;
    }) : ie.logError(Y(new Error(Fl("transition_in")), { level: "warn" }))), Sn && ie.json.transition_out && (ie.id ? jr.registerChildWithTransitionOut(ie.json, ie, ie.json.transition_out, it) : ie.logError(Y(new Error(Fl("transition_out")), { level: "warn" }))), ie.fakeElement || (ie.json.transition_change && !ie.id && ie.logError(Y(new Error(Fl("transition_change")), { level: "warn" })), jr.registerChildWithTransitionChange(ie.json, ie, ie.json.transition_change, it).then(() => {
      e(92, b = !1);
    }).catch((Xo) => {
      throw e(92, b = !1), Xo;
    }));
    const Xr = !ie.fakeElement || ie.fakeElement === ri, Vn = Xr ? ie.json.visibility_actions || ie.json.visibility_action && [ie.json.visibility_action] : [], Rn = Xr ? ie.json.disappear_actions : [];
    let un;
    (Array.isArray(Vn) && Vn.length || Array.isArray(Rn) && Rn.length) && (un = vm(it, {
      visibilityActions: Vn,
      disappearActions: Rn,
      rootCtx: Yt,
      componentContext: ie
    }));
    const bo = ie.id;
    return bo && (ai == null || ai(), ai = Yt.registerId(bo, {
      context: () => ie,
      node: () => d
    }), jr.registerChild(bo)), (Zi = ie.json.tooltips) == null || Zi.forEach((Xo) => {
      Yt.registerTooltip(it, Xo);
    }), Lo && (Lo.disconnect(), Lo = void 0), Lo = Tm(d, ie, (Qi = ie.json.layout_provider) == null ? void 0 : Qi.width_variable_name, (xi = ie.json.layout_provider) == null ? void 0 : xi.height_variable_name), ie.fakeElement || (Ki = Jd(it, Yt, ie, or)), Co = {
      destroy() {
        ai && (ai(), ai = void 0), bo && jr.unregisterChild(bo), un && un.destroy(), Ki && Ki.destroy();
      }
    }, Co;
  }
  function k_() {
    ie.json.focus && ((fe || !Kl(Yt.isPointerFocus)) && e(17, Oo = !0), ie.execAnyActions(Ce));
  }
  function v_() {
    ie.json.focus && (e(17, Oo = !1), ie.execAnyActions(ye));
  }
  _l(w_), sn(() => {
    var it;
    He.forEach((Xr) => {
      Yt.unregisterParentOf(Xr);
    }), e(66, He = []), Lo && (Lo.disconnect(), Lo = void 0), (it = ie.json.tooltips) == null || it.forEach((Xr) => {
      Yt.unregisterTooltip(Xr);
    }), En == null || En(), Va(), lo && (lo.remove(), e(106, lo = null)), Eo && (Eo.removeEventListener("change", Yi), e(103, Eo = null)), Bo && (Bo.removeEventListener("change", Yi), e(104, Bo = null));
  });
  function j_(it) {
    On.call(this, t, it);
  }
  function C_(it) {
    On.call(this, t, it);
  }
  return t.$$set = (it) => {
    "componentContext" in it && e(0, ie = it.componentContext), "cls" in it && e(1, yr = it.cls), "style" in it && e(54, kr = it.style), "layoutParams" in it && e(55, Ct = it.layoutParams), "customDescription" in it && e(56, Tr = it.customDescription), "customPaddings" in it && e(57, Br = it.customPaddings), "customActions" in it && e(58, cr = it.customActions), "additionalPaddings" in it && e(59, ut = it.additionalPaddings), "heightByAspect" in it && e(60, vt = it.heightByAspect), "parentOf" in it && e(53, Gt = it.parentOf), "parentOfSimpleMode" in it && e(61, Zt = it.parentOfSimpleMode), "replaceItems" in it && e(62, ur = it.replaceItems), "hasInnerFocusable" in it && e(2, dt = it.hasInnerFocusable), "alwaysCustomFocus" in it && e(63, fe = it.alwaysCustomFocus), "containerElement" in it && e(3, wt = it.containerElement), "devapi" in it && e(64, or = it.devapi), "$$scope" in it && e(152, xt = it.$$scope);
  }, t.$$.update = () => {
    var it, Xr, Vn, Rn, un, bo, Zi, Qi, xi, Xo, Ia;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(132, n = ie.origJson), t.$$.dirty[4] & /*origJson*/
    256 && n && h_(), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[3] & /*prevTriggersUnsubscribe*/
    512 | t.$$.dirty[4] & /*$isEnabled*/
    16777216 && (Rt ? (En == null || En(), e(102, En = Yt.processVariableTriggers(ie, ie.json.variable_triggers))) : En == null || En()), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(47, o = ie.getDerivedFromVars(ie.json.focus))), t.$$.dirty[0] & /*componentContext*/
    1 && nr(e(46, i = ie.getDerivedFromVars(ie.json.border))), t.$$.dirty[0] & /*componentContext*/
    1 && mr(e(45, s = ie.getDerivedFromVars(ie.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && mt(e(44, a = ie.getDerivedFromVars(ie.json.margins))), t.$$.dirty[0] & /*componentContext*/
    1 && ar(e(43, l = ie.getDerivedFromVars(ie.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && hr(e(42, u = ie.getDerivedFromVars(ie.json.alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Be(e(41, c = ie.getDerivedFromVars(ie.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(40, f = ie.getDerivedFromVars(ie.json.alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Xt(e(39, _ = ie.getDerivedFromVars(ie.json.alpha))), t.$$.dirty[0] & /*componentContext*/
    1 && Tt(e(38, h = ie.getDerivedFromVars(ie.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && jt(e(37, m = ie.getDerivedFromVars(ie.json.background))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(36, p = ie.getDerivedFromVars(ie.json.action_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && yt(e(35, w = ie.getDerivedFromVars(ie.json.visibility))), t.$$.dirty[0] & /*componentContext*/
    1 && ee(e(34, k = ie.getDerivedFromVars(ie.json.transform))), t.$$.dirty[0] & /*componentContext*/
    1 && nt(e(33, N = ie.getDerivedFromVars(ie.json.transformations))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(32, H = ie.getDerivedFromVars(ie.json.capture_focus_on_action))), t.$$.dirty[1] & /*parentOf, parentOfSimpleMode*/
    1077936128 | t.$$.dirty[2] & /*prevChilds*/
    16 && (He.forEach((Ue) => {
      Yt.unregisterParentOf(Ue);
    }), e(66, He = []), Gt && Gt.forEach((Ue) => {
      Ue != null && Ue.id && (He.push(Ue.id), Yt.registerParentOf(Ue.id, {
        replaceWith: m_,
        isSingleMode: !!Zt
      }));
    })), t.$$.dirty[0] & /*hasCustomFocus, borderElemStyle*/
    131088 | t.$$.dirty[2] & /*strokeWidth, strokeColor, cornersRadius, cornerRadius, borderStyle*/
    992 | t.$$.dirty[4] & /*$jsonFocus, $jsonBorder*/
    8421376) {
      const Ue = Oo && (lt != null && lt.border) ? lt.border : vr;
      let xr = {}, kn = {}, Dn = !1, $r = "";
      if (Ue) {
        if (nn(Ue.has_shadow, !1)) {
          const cn = Ue.shadow;
          cn ? xr["box-shadow"] = Fm(cn) : xr["box-shadow"] = "0 1px 2px 0 rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.07)";
        }
        if (Ue.stroke) {
          Dn = !0, e(68, Ht = tn(Ue.stroke.width, Ht)), e(69, Ye = pr(Ue.stroke.color, 1, Ye));
          const cn = ((it = Ue.stroke.style) == null ? void 0 : it.type) === "dashed" ? "dashed" : "solid";
          kn["--divkit-border"] = `${pe(Ht + 1)} ${cn} ${Ye}`;
        }
        if (Ue.corners_radius && typeof Ue.corners_radius == "object") {
          e(71, Wt = Vm(Ue.corners_radius, Wt)), xr["border-radius"] = Bs(Wt);
          const cn = {};
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((qn) => {
            cn[qn] = (Wt[qn] || 0) + 1;
          }), kn["--divkit-border-radius"] = Bs(cn);
        } else Ue.corner_radius && (e(70, ct = tn(Ue.corner_radius, ct)), e(71, Wt = {
          "top-left": ct,
          "top-right": ct,
          "bottom-right": ct,
          "bottom-left": ct
        }), xr["border-radius"] = pe(ct), kn["--divkit-border-radius"] = pe(ct + 1));
        if (Dn && Ht && (Ue.corners_radius || Ue.corner_radius)) {
          let cn = { ...Wt };
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((qn) => {
            cn[qn] = (cn[qn] || 0) + Ht / 2;
          }), $r = Bs(cn);
        }
      }
      e(67, ke = xo(xr, ke)), e(4, R = xo(kn, R)), e(22, Jt = Dn), e(5, Fr = $r);
    }
    if (t.$$.dirty[1] & /*customPaddings*/
    67108864 | t.$$.dirty[2] & /*selfPadding*/
    1024 | t.$$.dirty[4] & /*$jsonPaddings*/
    4194304 && e(72, br = bi(
      rr && !Br ? rr : void 0,
      br
    )), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[1] & /*additionalPaddings*/
    268435456 | t.$$.dirty[2] & /*selfPadding*/
    1024 && e(119, O = go(Sm(br, ut), we)), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[2] & /*margin*/
    2048 | t.$$.dirty[4] & /*$jsonMargins*/
    524288 && e(73, Mr = as(Vt, we, Mr)), t.$$.dirty[0] & /*componentContext*/
    1 && e(130, Se = ie.json.responsive), t.$$.dirty[3] & /*responsiveMobileQuery, responsiveTabletQuery*/
    3072 | t.$$.dirty[4] & /*responsiveConfig*/
    64 && (Se && typeof Se == "object" && typeof window < "u" ? (Eo || (e(103, Eo = window.matchMedia("(max-width: 767px)")), e(104, Bo = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), Eo.addEventListener("change", Yi), Bo.addEventListener("change", Yi)), Yi()) : e(105, ui = "desktop")), t.$$.dirty[3] & /*responsiveBreakpoint*/
    4096 | t.$$.dirty[4] & /*responsiveConfig*/
    64 && e(126, Z = ui !== "desktop" && (Se == null ? void 0 : Se[ui]) || null), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(128, ce = (() => {
      const Ue = Z == null ? void 0 : Z.alignment_horizontal;
      if (Ue === "left" || Ue === "center" || Ue === "right" || Ue === "start" || Ue === "end")
        return (we === "ltr" ? Pu : Nu)[Ue];
    })()), t.$$.dirty[0] & /*componentContext, $direction*/
    524289 | t.$$.dirty[1] & /*layoutParams*/
    16777216 | t.$$.dirty[2] & /*widthNum, widthMods*/
    20480 | t.$$.dirty[4] & /*$jsonWidth, $jsonMargins, responsiveAlignmentHorizontal, $jsonAlignmentHorizontal*/
    3670032) {
      let Ue, xr, kn, Dn, $r = {}, cn = 0, qn = 0, Ro = !1, Ho = !1;
      const bn = (Xr = ie.json.width) == null ? void 0 : Xr.type;
      if (bn === "fixed")
        e(76, pn = tn(De == null ? void 0 : De.value, pn)), xr = pe(pn);
      else if (bn === "wrap_content" || (bn === "match_parent" || !bn) && Ct.parentHorizontalWrapContent)
        Ue = "content", (bn === "wrap_content" && (De != null && De.constrained) || (bn === "match_parent" || !bn) && Ct.parentHorizontalWrapContent) && ($r["width-constrained"] = !0, Ct.parentContainerOrientation === "horizontal" && (qn = 1)), (bn === "match_parent" || !bn) && ie.logError(Y(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      else if (Ue = "parent", Ct.parentContainerOrientation === "vertical" && Ct.parentContainerWrap && (Ho = !0, ie.logError(Y(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), Ct.parentContainerOrientation === "vertical" && Ct.parentContainerKnownWidth || Ct.stretchWidth || Ct.parentContainerOrientation === "horizontal" && Ct.treatMatchParentAs100) {
        const Zr = (Rn = (Vn = we === "ltr" ? Vt == null ? void 0 : Vt.start : Vt == null ? void 0 : Vt.end) != null ? Vn : Vt == null ? void 0 : Vt.left) != null ? Rn : 0, Tn = (bo = (un = we === "ltr" ? Vt == null ? void 0 : Vt.end : Vt == null ? void 0 : Vt.start) != null ? un : Vt == null ? void 0 : Vt.right) != null ? bo : 0, An = `calc(100% - ${an(Zr + Tn)})`;
        Ct.stretchWidth ? (xr = "0", kn = An) : xr = An;
      } else Ct.parentContainerOrientation === "horizontal" && (cn = De && "weight" in De && De.weight || 1, Ct.parentContainerWrap && (Ro = !0));
      if (bn === "wrap_content" || bn === "match_parent") {
        const Zr = De;
        let Tn, An;
        Zr.min_size && Nn(Zr.min_size.value) && (Tn = Zr.min_size.value), Zr.max_size && Nn(Zr.max_size.value) && (An = Zr.max_size.value), Tn !== void 0 && An !== void 0 && Tn > An && (ie.logError(Y(new Error("Element has incorrect width constraints (min size is bigger than max size)."), {
          additional: {
            id: ie.json.id,
            minSize: Tn + "dp",
            maxSize: An + "dp"
          }
        })), Tn = An = void 0), Tn !== void 0 && (kn = pe(Tn)), An !== void 0 && (Dn = pe(An));
      }
      if (ce)
        $r["halign-self"] = ce;
      else if (Ue === "parent")
        $r["halign-self"] = "stretch";
      else {
        const Zr = Ut;
        Zr === "left" || Zr === "center" || Zr === "right" || Zr === "start" || Zr === "end" ? $r["halign-self"] = (we === "ltr" ? Pu : Nu)[Zr] : $r["halign-self"] = Ct.parentHAlign || "start";
      }
      Ue && ($r.width = Ue), e(75, Ae = xr), e(6, Qr = kn), e(7, Yr = Dn), e(77, Cn = cn), e(78, y = qn), e(74, jn = xo($r, jn)), e(79, E = Ro), e(23, A = Ho);
    }
    if (t.$$.dirty[4] & /*activeResponsive*/
    4 && e(127, re = (() => {
      const Ue = Z == null ? void 0 : Z.alignment_vertical;
      if (Ue === "top" || Ue === "center" || Ue === "bottom" || Ue === "baseline")
        return zu[Ue];
    })()), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*heightByAspect, layoutParams*/
    553648128 | t.$$.dirty[2] & /*heightNum, heightMods*/
    1310720 | t.$$.dirty[4] & /*$jsonHeight, $jsonMargins, responsiveAlignmentVertical, $jsonAlignmentVertical*/
    917512) {
      let Ue, xr, kn, Dn, $r = {}, cn = 0, qn = 0, Ro = !1, Ho = !1;
      const bn = (Zi = ie.json.height) == null ? void 0 : Zi.type;
      if (!vt) if (bn === "fixed")
        e(82, $t = tn(Fe == null ? void 0 : Fe.value, $t)), xr = pe($t);
      else if (bn === "match_parent" && !Ct.parentVerticalWrapContent)
        if (Ue = "parent", Ct.parentContainerOrientation === "horizontal" && Ct.parentContainerWrap && (Ho = !0, ie.logError(Y(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), Ct.parentContainerOrientation === "horizontal" && Ct.parentContainerKnownHeight || Ct.stretchHeight || Ct.parentContainerOrientation === "vertical" && Ct.treatMatchParentAs100) {
          const Zr = (Qi = Vt == null ? void 0 : Vt.top) != null ? Qi : 0, Tn = (xi = Vt == null ? void 0 : Vt.bottom) != null ? xi : 0, An = `calc(100% - ${an(Zr + Tn)})`;
          Ct.stretchHeight ? (xr = "0", kn = An) : xr = An;
        } else Ct.parentContainerOrientation === "vertical" && (cn = (Fe == null ? void 0 : Fe.weight) || 1, Ct.parentContainerWrap && (Ro = !0));
      else
        Ue = "content", (bn === "wrap_content" && (Fe != null && Fe.constrained) || bn === "match_parent" && Ct.parentVerticalWrapContent) && ($r["height-constrained"] = !0, Ct.parentContainerOrientation === "vertical" && (qn = 1)), bn === "match_parent" && ie.logError(Y(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      if (!vt && (bn === "match_parent" || bn === "wrap_content")) {
        const Zr = Fe;
        let Tn, An;
        Zr.min_size && Nn(Zr.min_size.value) && (Tn = Zr.min_size.value), Zr.max_size && Nn(Zr.max_size.value) && (An = Zr.max_size.value), Tn !== void 0 && An !== void 0 && Tn > An && (ie.logError(Y(new Error("Element has incorrect height constraints (min size is bigger than max size)."), {
          additional: {
            id: ie.json.id,
            minSize: Tn + "dp",
            maxSize: An + "dp"
          }
        })), Tn = An = void 0), Tn !== void 0 && (kn = pe(Tn)), An !== void 0 && (Dn = pe(An));
      }
      if (re)
        $r["valign-self"] = re;
      else if (Ue === "parent")
        $r["valign-self"] = "stretch";
      else {
        const Zr = je;
        Zr === "top" || Zr === "center" || Zr === "bottom" || Zr === "baseline" && Ct.parentContainerOrientation === "horizontal" ? $r["valign-self"] = zu[Zr] : $r["valign-self"] = Ct.parentVAlign || "start";
      }
      Ue && ($r.height = Ue), e(81, z = xr), e(8, xe = kn), e(9, Ve = Dn), e(83, At = cn), e(84, Xe = qn), e(80, te = xo($r, te)), e(85, qt = Ro), e(24, St = Ho);
    }
    if (t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(131, ne = Ct.overlapParent ? !0 : void 0), t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(121, de = Ct.gridArea ? `${Ct.gridArea.y + 1}/${Ct.gridArea.x + 1}/span ${Ct.gridArea.rowSpan}/span ${Ct.gridArea.colSpan}` : void 0), t.$$.dirty[2] & /*alpha*/
    16777216 | t.$$.dirty[4] & /*$jsonAlpha*/
    65536 && (e(86, Cr = Cm(Ft, Cr)), e(87, Wr = Cr === 1 ? void 0 : Cr)), t.$$.dirty[0] & /*$jsonAccessibility*/
    1048576 | t.$$.dirty[1] & /*customDescription*/
    33554432 && (e(21, B = void 0), ot && !Tr)) {
      const Ue = ti(ot);
      Ue && (e(21, B = {}), e(21, B["aria-label"] = Ue, B));
    }
    if (t.$$.dirty[0] & /*hasCustomFocus, background, backgroundRadius, hasSeparateBg, $direction*/
    658464 | t.$$.dirty[4] & /*$jsonFocus, $jsonBackground*/
    49152 && (e(10, ln = Oo && (lt != null && lt.background) ? lt.background : Pe), e(88, Ir = {}), e(11, gn = !1), Array.isArray(ln) && (e(11, gn = ln.some((Ue) => Ue.type === "image" || Ue.type === "nine_patch_image") || !!Fr), !gn))) {
      const Ue = hl(ln, we);
      e(88, Ir["background-color"] = Ue.color, Ir), e(88, Ir["background-image"] = Ue.image, Ir), e(88, Ir["background-size"] = Ue.size, Ir), e(88, Ir["background-position"] = Ue.position, Ir), e(88, Ir["background-repeat"] = "no-repeat", Ir);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(90, Pn = void 0), Sn && ie.id && ie.json.transition_in && Yt.isRunning("stateChange") && e(90, Pn = !0)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(92, b = void 0), Sn && ie.id && Yt.isRunning("stateChange") && jr.hasTransitionChange(ie.id) && e(92, b = !0)), t.$$.dirty[0] & /*componentContext, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions*/
    61441 | t.$$.dirty[1] & /*customActions*/
    134217728) {
      const Ue = ie.json;
      let xr = Ue.actions || Ue.action && [Ue.action] || [], kn = Ue.doubletap_actions || [], Dn = Ue.longtap_actions || [], $r = ((Xo = Ue.focus) == null ? void 0 : Xo.on_focus) || [], cn = ((Ia = Ue.focus) == null ? void 0 : Ia.on_blur) || [], qn = Ue.press_start_actions || [], Ro = Ue.press_end_actions || [], Ho = Ue.hover_start_actions || [], bn = Ue.hover_end_actions || [];
      ie.fakeElement && ie.fakeElement !== ri ? (xr = [], kn = [], Dn = [], $r = [], cn = []) : (Array.isArray(xr) || (xr = [], ie.logError(Y(new Error("Actions should be array")))), Array.isArray(kn) || (kn = [], ie.logError(Y(new Error("DoubleTapActions should be array")))), Array.isArray(Dn) || (Dn = [], ie.logError(Y(new Error("LongTapActions should be array")))), Array.isArray($r) || ($r = [], ie.logError(Y(new Error("FocusActions should be array")))), Array.isArray(cn) || (cn = [], ie.logError(Y(new Error("BlurActions should be array")))), Array.isArray(qn) || (qn = [], ie.logError(Y(new Error("PressStartActions should be array")))), Array.isArray(Ro) || (Ro = [], ie.logError(Y(new Error("PressEndActions should be array")))), Array.isArray(Ho) || (Ho = [], ie.logError(Y(new Error("HoverStartActions should be array")))), Array.isArray(bn) || (bn = [], ie.logError(Y(new Error("HoverEndActions should be array"))))), (xr.length || kn.length || Dn.length || Ot.length || Bt.length || qr.length || Pr.length) && cr && (xr = [], kn = [], Dn = [], e(12, Ot = []), e(13, Bt = []), e(14, qr = []), e(15, Pr = []), ie.logError(Y(new Error(`Cannot use action on component "${cr}"`)))), e(25, V = xr), e(26, $ = kn), e(27, P = Dn), Ce = $r, ye = cn, e(12, Ot = qn), e(13, Bt = Ro), e(14, qr = Ho), e(15, Pr = bn);
    }
    if (t.$$.dirty[0] & /*actionAnimationList*/
    65536 | t.$$.dirty[4] & /*$jsonActionAnimation*/
    8192 && K && (e(16, Rr = us(K)), e(93, mo = Rr.map(b_).filter(Boolean).join(", "))), t.$$.dirty[4] & /*$jsonCaptureFocusOnAction*/
    4096 && typeof rt == "boolean" && e(28, wn = rt), t.$$.dirty[3] & /*visibility, isVisibilityInited*/
    96 | t.$$.dirty[4] & /*$jsonVisibility*/
    2048) {
      const Ue = wr, xr = Am(at, wr);
      Ue !== xr && (Ze && (wr === "visible" || xr === "visible") ? y_(xr) : e(99, wr = xr)), Ze || e(98, Ze = !0);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*currentNode*/
    8 | t.$$.dirty[3] & /*prevExtensionsVal*/
    256 && ie.json && d && !Ji(ie.json.extensions, Yo)) {
      let Ue = e(101, Yo = ie.json.extensions);
      In().then(() => {
        if (!(Ue !== Yo || !d) && (Va(), Array.isArray(ie.json.extensions))) {
          const xr = Yt.getExtensionContext(ie);
          Ie = ie.json.extensions.map((kn) => {
            var cn;
            const Dn = kn.id;
            if (!Dn)
              return;
            const $r = Yt.getExtension(Dn, kn.params);
            return $r && ((cn = $r.mountView) == null || cn.call($r, d, xr)), $r;
          }).filter(zo);
        }
      });
    }
    if (t.$$.dirty[4] & /*activeResponsive*/
    4 && e(129, ge = Z == null ? void 0 : Z.visibility), t.$$.dirty[0] & /*hasCustomFocus, componentContext*/
    131073 | t.$$.dirty[1] & /*layoutParams*/
    16777216 | t.$$.dirty[2] & /*widthMods, heightMods, stateChangingInProgress, visibilityChangingInProgress, transitionChangeInProgress*/
    1879314432 | t.$$.dirty[3] & /*visibility, actionAnimationTransition*/
    65 | t.$$.dirty[4] & /*responsiveAlignmentHorizontal, responsiveAlignmentVertical, parentOverlapMod, responsiveVisibility*/
    184 && e(31, T = {
      ...jn,
      ...te,
      ...ce ? {
        "halign-self": ce
      } : {},
      ...re ? {
        "valign-self": re
      } : {},
      "parent-overlap": ne,
      "scroll-snap": Ct.scrollSnap,
      "hide-on-transition-in": Pn || zt || b,
      visibility: ge || wr,
      "has-action-animation": !!mo,
      "parent-flex": Ct.parentContainerOrientation || void 0,
      "parent-grid": !!Ct.gridArea || void 0,
      "has-custom-focus": !!(Oo && ie.json.focus)
    }), t.$$.dirty[4] & /*$jsonTransformations, $jsonTransform*/
    1536) {
      let Ue;
      Array.isArray(Oe) ? Ue = Oe : Re && Re.rotation !== void 0 && (Ue = [
        {
          type: "rotation",
          angle: Re.rotation,
          pivot_x: Re.pivot_x,
          pivot_y: Re.pivot_y
        }
      ]), Ue ? e(100, rn = Mm(Ue)) : e(100, rn = void 0);
    }
    if (t.$$.dirty[2] & /*widthFill, heightFill, widthFlexGrow, heightFlexGrow*/
    10649600 && e(115, X = E || qt ? "100%" : Cn || At ? 0 : void 0), t.$$.dirty[0] & /*componentContext*/
    1 && e(30, le = ie.json["custom-class"] || ""), t.$$.dirty[0] & /*componentContext*/
    1 && e(113, C = ie.json.position), t.$$.dirty[0] & /*componentContext*/
    1 && e(114, D = ie.json.sticky_top), t.$$.dirty[0] & /*componentContext*/
    1 && e(112, M = ie.json.sticky_bottom), t.$$.dirty[0] & /*componentContext*/
    1 && e(111, W = ie.json.z_index), t.$$.dirty[0] & /*componentContext*/
    1 && e(110, Q = ie.json.cursor), t.$$.dirty[0] & /*componentContext*/
    1 && e(109, me = ie.json.backdrop_filter), t.$$.dirty[0] & /*componentContext*/
    1 && e(108, Ee = ie.json.overflow), t.$$.dirty[0] & /*componentContext*/
    1 && e(107, ve = ie.json["box-shadow"]), t.$$.dirty[0] & /*componentContext*/
    1 && e(116, he = ie.json.custom_transition), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(120, et = (() => {
      if (!(Z != null && Z.paddings)) return;
      const Ue = Z.paddings;
      return go(bi(Ue, null), we);
    })()), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(118, Je = (() => {
      if (!(Z != null && Z.margins)) return;
      const Ue = Z.margins;
      return as(Ue, we, "");
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(123, qe = (() => {
      if (Z != null && Z["max-width"] && typeof Z["max-width"] == "string")
        return Z["max-width"];
      if (!(Z != null && Z.max_width)) return;
      const Ue = Z.max_width;
      if (Ue.type === "fixed" && Ue.value) return Ue.value + "px";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(124, be = (() => {
      if (!(Z != null && Z.width)) return;
      const Ue = Z.width;
      if (Ue.type === "fixed" && Ue.value) return pe(Ue.value);
      if (Ue.type === "match_parent") return "100%";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(122, Te = (() => {
      if (!(Z != null && Z.height)) return;
      const Ue = Z.height;
      if (Ue.type === "fixed" && Ue.value) return pe(Ue.value);
      if (Ue.type === "match_parent") return "100%";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(117, ue = (Z == null ? void 0 : Z.opacity) !== void 0 ? Z.opacity : void 0), t.$$.dirty[0] & /*componentContext*/
    1 && e(125, ae = ie.json.hover), t.$$.dirty[0] & /*hoverClassName*/
    262144 | t.$$.dirty[3] & /*hoverStyleEl*/
    8192 | t.$$.dirty[4] & /*hoverConfig*/
    2)
      if (ae && typeof ae == "object" && typeof document < "u") {
        Xi || e(18, Xi = "divkit-hover-" + Math.random().toString(36).slice(2, 9));
        let Ue = "";
        ae.background_color && (Ue += `background-color: ${ae.background_color} !important;`), ae.opacity !== void 0 && (Ue += `opacity: ${ae.opacity} !important;`), ae.scale !== void 0 && (Ue += `scale: ${ae.scale} !important;`), ae.color && (Ue += `color: ${ae.color} !important;`), ae.border_color && (Ue += `border-color: ${ae.border_color} !important;`), (ae["box-shadow"] || ae.box_shadow) && (Ue += `box-shadow: ${ae["box-shadow"] || ae.box_shadow} !important;`), Ue && (lo || (e(106, lo = document.createElement("style")), document.head.appendChild(lo)), e(106, lo.textContent = `.${Xi}:hover { ${Ue} }`, lo));
      } else lo && (lo.remove(), e(106, lo = null), e(18, Xi = ""));
    t.$$.dirty[0] & /*widthMin, widthMax, componentContext, heightMin, heightMax*/
    961 | t.$$.dirty[1] & /*style*/
    8388608 | t.$$.dirty[2] & /*backgroundStyle, borderStyle, width, height, margin, opacity, widthFlexGrow, heightFlexGrow, widthFlexShrink, heightFlexShrink*/
    107587616 | t.$$.dirty[3] & /*responsiveMaxWidth, responsiveHeight, gridArea, responsivePadding, padding, responsiveMargin, responsiveOpacity, customTransition, actionAnimationTransition, transform, flexBasis, customPosition, customStickyTop, customStickyBottom, customZIndex, customCursor, customBackdropFilter, customOverflow, customBoxShadow, animationOpacityStart, animationOpacityEnd, animationScaleStart, animationScaleEnd*/
    2147467423 | t.$$.dirty[4] & /*responsiveWidth*/
    1 && e(29, oe = {
      ...kr,
      ...Ir,
      ...ke,
      width: be || Ae,
      "min-width": Qr,
      "max-width": qe || Yr || (() => {
        const Ue = ie.json.max_width;
        if ((Ue == null ? void 0 : Ue.type) === "fixed" && (Ue != null && Ue.value)) return pe(Ue.value);
      })(),
      height: Te || z,
      "min-height": xe,
      // input max-height
      "max-height": Ve || (kr == null ? void 0 : kr["max-height"]) || (() => {
        const Ue = ie.json.max_height;
        if ((Ue == null ? void 0 : Ue.type) === "fixed" && (Ue != null && Ue.value)) return pe(Ue.value);
      })(),
      "grid-area": de,
      padding: et || O,
      margin: Je || Mr,
      opacity: ue !== void 0 ? ue : Wr,
      transition: he || mo,
      "transform-origin": rn ? "0 0" : void 0,
      transform: rn,
      "flex-grow": Cn || At || void 0,
      "flex-shrink": y || Xe ? 1 : void 0,
      "flex-basis": X,
      position: C,
      top: C === "sticky" && D !== void 0 ? pe(D) : void 0,
      bottom: C === "sticky" && M !== void 0 ? pe(M) : void 0,
      "z-index": W,
      cursor: Q,
      "backdrop-filter": me,
      "-webkit-backdrop-filter": me,
      overflow: Ee,
      "box-shadow": ve,
      "--divkit-animation-opacity-start": to,
      "--divkit-animation-opacity-end": ro,
      "--divkit-animation-scale-start": Qn,
      "--divkit-animation-scale-end": qi
    });
  }, [
    ie,
    yr,
    dt,
    wt,
    R,
    Fr,
    Qr,
    Yr,
    xe,
    Ve,
    ln,
    gn,
    Ot,
    Bt,
    qr,
    Pr,
    Rr,
    Oo,
    Xi,
    we,
    ot,
    B,
    Jt,
    A,
    St,
    V,
    $,
    P,
    wn,
    oe,
    le,
    T,
    H,
    N,
    k,
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
    o,
    v,
    se,
    Fa,
    k_,
    v_,
    Gt,
    kr,
    Ct,
    Tr,
    Br,
    cr,
    ut,
    vt,
    Zt,
    ur,
    fe,
    or,
    d,
    He,
    ke,
    Ht,
    Ye,
    ct,
    Wt,
    br,
    Mr,
    jn,
    Ae,
    pn,
    Cn,
    y,
    E,
    te,
    z,
    $t,
    At,
    Xe,
    qt,
    Cr,
    Wr,
    Ir,
    Sn,
    Pn,
    zt,
    b,
    mo,
    to,
    ro,
    Qn,
    qi,
    Ze,
    wr,
    rn,
    Yo,
    En,
    Eo,
    Bo,
    ui,
    lo,
    ve,
    Ee,
    me,
    Q,
    W,
    M,
    C,
    D,
    X,
    he,
    ue,
    Je,
    O,
    et,
    de,
    Te,
    qe,
    be,
    ae,
    Z,
    re,
    ce,
    ge,
    Se,
    ne,
    n,
    Re,
    Oe,
    at,
    rt,
    K,
    Pe,
    lt,
    Ft,
    je,
    Fe,
    Vt,
    Ut,
    De,
    rr,
    vr,
    Rt,
    pt,
    j_,
    C_,
    xt
  ];
}
class mn extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      Zm,
      Xm,
      Sr,
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
      [-1, -1, -1, -1, -1, -1]
    );
  }
}
const Qm = "appkit-text", xm = "appkit-text_halign_start", $m = "appkit-text_halign_center", e0 = "appkit-text_halign_end", t0 = "appkit-text_valign_start", r0 = "appkit-text_valign_center", n0 = "appkit-text_valign_end", o0 = "appkit-text_valign_baseline", i0 = "appkit-text__inner", s0 = "appkit-text_singleline", l0 = "appkit-text_multiline", a0 = "appkit-text_truncate_none", u0 = "appkit-text__inner_gradient", c0 = "appkit-text__image", f0 = "appkit-text__image_hidden", uo = {
  "text-range": "appkit-text-range",
  text: Qm,
  text_halign_start: xm,
  text_halign_center: $m,
  text_halign_end: e0,
  text_valign_start: t0,
  text_valign_center: r0,
  text_valign_end: n0,
  text_valign_baseline: o0,
  text__inner: i0,
  text_singleline: s0,
  text_multiline: l0,
  text_truncate_none: a0,
  "text__inner_has-cloud-bg": "appkit-text__inner_has-cloud-bg",
  "text__inner_cloud-bg": "appkit-text__inner_cloud-bg",
  text__inner_gradient: u0,
  "text__image-wrapper": "appkit-text__image-wrapper",
  "text__image-wrapper_crop": "appkit-text__image-wrapper_crop",
  "text__image-wrapper_align_top": "appkit-text__image-wrapper_align_top",
  "text__image-wrapper_align_center": "appkit-text__image-wrapper_align_center",
  "text__image-wrapper_align_bottom": "appkit-text__image-wrapper_align_bottom",
  "text__image-wrapper_align_baseline": "appkit-text__image-wrapper_align_baseline",
  text__image: c0,
  text__image_hidden: f0,
  "text_has-focus-color": "appkit-text_has-focus-color"
}, So = {
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
function Un(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e <= 0 ? r : e;
}
function d0(t) {
  if (t === "light" || t === "medium" || t === "bold" || t === "regular" || t === "semi_bold")
    return t === "medium" ? 500 : t === "bold" ? 700 : t === "light" ? 300 : t === "semi_bold" ? 600 : 400;
}
function yi(t, r, e) {
  return typeof r == "number" && r > 0 ? r : d0(t) || e;
}
function $l(t, r) {
  if (!t)
    return {};
  const e = {};
  for (const n of ["left", "top", "right", "bottom", "start", "end"]) {
    const o = t[n];
    o && (e[n] = o * r);
  }
  return e;
}
function Oi(t) {
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
function Ou(t) {
  let r, e, n, o, i, s, a;
  return {
    c() {
      r = en("svg"), e = en("defs"), n = en("filter"), o = en("feGaussianBlur"), i = en("feColorMatrix"), a = en("feBlend"), g(o, "in", "SourceGraphic"), g(o, "result", "blurred"), g(o, "stdDeviation", "3"), g(i, "in", "blurred"), g(i, "result", "withMatrix"), g(i, "type", "matrix"), g(i, "values", s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      t[5] + " -" + /*borderRadius*/
      t[5]), g(a, "in", "SourceGraphic"), g(a, "in2", "withMatrix"), g(
        n,
        "id",
        /*cloudFilterId*/
        t[11]
      ), g(r, "class", So["text-range__cloud-svg"]);
    },
    m(l, u) {
      J(l, r, u), bt(r, e), bt(e, n), bt(n, o), bt(n, i), bt(n, a);
    },
    p(l, u) {
      u[0] & /*borderRadius*/
      32 && s !== (s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      l[5] + " -" + /*borderRadius*/
      l[5]) && g(i, "values", s);
    },
    d(l) {
      l && G(r);
    }
  };
}
function Bu(t) {
  let r;
  return {
    c() {
      r = Me("span"), g(r, "class", So["text-range__top-offset"]), F(
        r,
        "margin-top",
        /*topOffset*/
        t[9]
      );
    },
    m(e, n) {
      J(e, r, n);
    },
    p(e, n) {
      n[0] & /*topOffset*/
      512 && F(
        r,
        "margin-top",
        /*topOffset*/
        e[9]
      );
    },
    d(e) {
      e && G(r);
    }
  };
}
function Ru(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Me("div"), e = Me("div"), n = Me("div"), o = Me("div"), i = Me("div"), s = Me("div"), g(r, "class", So["text-range__mask-animation"]), g(e, "class", So["text-range__mask-animation"]), g(n, "class", So["text-range__mask-animation"]), g(o, "class", So["text-range__mask-animation"]), g(i, "class", So["text-range__mask-animation"]), g(s, "class", So["text-range__mask-animation"]);
    },
    m(a, l) {
      J(a, r, l), J(a, e, l), J(a, n, l), J(a, o, l), J(a, i, l), J(a, s, l);
    },
    d(a) {
      a && (G(r), G(e), G(n), G(o), G(i), G(s));
    }
  };
}
function _0(t) {
  let r = (
    /*text*/
    (t[1] || "​") + ""
  ), e, n = (
    /*maskColor*/
    t[4] && Ru()
  );
  return {
    c() {
      n && n.c(), e = Gn(r);
    },
    m(o, i) {
      n && n.m(o, i), J(o, e, i);
    },
    p(o, i) {
      /*maskColor*/
      o[4] ? n || (n = Ru(), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null), i[0] & /*text*/
      2 && r !== (r = /*text*/
      (o[1] || "​") + "") && eo(e, r);
    },
    d(o) {
      o && G(e), n && n.d(o);
    }
  };
}
function p0(t) {
  let r, e, n, o, i = (
    /*cloudBg*/
    t[3] && /*hasCloudBg*/
    t[6] && Ou(t)
  ), s = (
    /*topOffset*/
    t[9] && Bu(t)
  );
  return n = new bl({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      cls: ht(
        "text-range",
        So,
        /*mods*/
        t[8]
      ),
      actions: (
        /*actions*/
        t[2]
      ),
      style: _r(
        /*style*/
        t[7]
      ),
      $$slots: { default: [_0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      i && i.c(), r = Qt(), s && s.c(), e = Qt(), Lt(n.$$.fragment);
    },
    m(a, l) {
      i && i.m(a, l), J(a, r, l), s && s.m(a, l), J(a, e, l), Pt(n, a, l), o = !0;
    },
    p(a, l) {
      /*cloudBg*/
      a[3] && /*hasCloudBg*/
      a[6] ? i ? i.p(a, l) : (i = Ou(a), i.c(), i.m(r.parentNode, r)) : i && (i.d(1), i = null), /*topOffset*/
      a[9] ? s ? s.p(a, l) : (s = Bu(a), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null);
      const u = {};
      l[0] & /*componentContext*/
      1 && (u.componentContext = /*componentContext*/
      a[0]), l[0] & /*mods*/
      256 && (u.cls = ht(
        "text-range",
        So,
        /*mods*/
        a[8]
      )), l[0] & /*actions*/
      4 && (u.actions = /*actions*/
      a[2]), l[0] & /*style*/
      128 && (u.style = _r(
        /*style*/
        a[7]
      )), l[0] & /*text, maskColor*/
      18 | l[1] & /*$$scope*/
      64 && (u.$$scope = { dirty: l, ctx: a }), n.$set(u);
    },
    i(a) {
      o || (L(n.$$.fragment, a), o = !0);
    },
    o(a) {
      x(n.$$.fragment, a), o = !1;
    },
    d(a) {
      a && (G(r), G(e)), i && i.d(a), s && s.d(a), Nt(n, a);
    }
  };
}
function g0(t, r, e) {
  let n, o, i, s, a, l, u, c, f, { componentContext: _ } = r, { text: h } = r, { rootFontSize: m } = r, { textStyles: p = {} } = r, { singleline: w = !1 } = r, { actions: k = void 0 } = r, { cloudBg: N = !1 } = r, { cloudBgId: H = "" } = r, { customLineHeight: O = null } = r;
  const ne = Dr(Kr), de = ne.direction;
  yn(t, de, (be) => e(35, f = be));
  const T = N && H || ne.genId("text-range") || "";
  let X = "none", le = 12, C = 1.25, D = "", M, W = "", Q = "", me = "", Ee, ve = null, he, Se, Z = !1, et, Je, qe;
  return t.$$set = (be) => {
    "componentContext" in be && e(0, _ = be.componentContext), "text" in be && e(1, h = be.text), "rootFontSize" in be && e(12, m = be.rootFontSize), "textStyles" in be && e(13, p = be.textStyles), "singleline" in be && e(14, w = be.singleline), "actions" in be && e(2, k = be.actions), "cloudBg" in be && e(3, N = be.cloudBg), "cloudBgId" in be && e(15, H = be.cloudBgId), "customLineHeight" in be && e(16, O = be.customLineHeight);
  }, t.$$.update = () => {
    var be, Te, ue, ge, ce, re, ae, oe;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && _.json && (e(17, X = "none"), e(18, le = 12), e(19, C = 1.25), e(20, D = ""), e(21, M = void 0), e(22, W = ""), e(23, Q = ""), e(24, me = ""), e(25, Ee = void 0), e(26, ve = null), e(27, he = void 0), e(28, Se = void 0), e(29, Z = !1), e(4, et = void 0), e(30, Je = void 0), e(31, qe = void 0)), t.$$.dirty[0] & /*textStyles*/
    8192) {
      let we = "none";
      (p.underline || p.strike) && (p.underline === "single" && p.strike === "single" ? we = "both" : p.underline === "single" ? we = "underline" : p.strike === "single" && (we = "strike")), e(17, X = we);
    }
    if (t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(18, le = Un(p.font_size, le)), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && zn(p.line_height) && e(19, C = Number(p.line_height) / le), t.$$.dirty[0] & /*textStyles*/
    8192 && Nn(p.letter_spacing) && e(20, D = pe(p.letter_spacing)), t.$$.dirty[0] & /*textStyles, fontWeight*/
    2105344 && (e(21, M = yi(p.font_weight, p.font_weight_value, M)), typeof p.font_family == "string" && p.font_family ? e(22, W = ne.typefaceProvider(p.font_family, { fontWeight: M || 400 })) : e(22, W = "")), t.$$.dirty[0] & /*textStyles, fontVariationSettings*/
    8396800) {
      const we = Oi(p.font_variation_settings);
      we !== Q && e(23, Q = we);
    }
    if (t.$$.dirty[0] & /*textStyles, color*/
    16785408 && e(24, me = pr(p.text_color, 1, me)), t.$$.dirty[0] & /*textStyles*/
    8192 && e(9, n = p.top_offset ? pe(p.top_offset) : ""), t.$$.dirty[0] & /*textStyles*/
    8192 && e(6, o = ((be = p.background) == null ? void 0 : be.type) === "cloud"), t.$$.dirty[0] & /*textStyles*/
    8192 && e(33, i = ((Te = p.background) == null ? void 0 : Te.type) === "cloud" ? p.background.paddings : void 0), t.$$.dirty[0] & /*textStyles, cloudBg, hasCloudBg, fontSize*/
    270408 | t.$$.dirty[1] & /*$direction*/
    16) {
      const we = p.mask, Re = !!(we && (we.type === "solid" || we.type === "particles") && we.is_enabled !== !1 && we.color);
      if (N || Re ? e(25, Ee = "transparent") : e(25, Ee = void 0), e(29, Z = !1), e(4, et = void 0), e(30, Je = void 0), e(31, qe = void 0), N)
        o ? e(28, Se = O_(p.background.color, 255, "transparent")) : e(28, Se = void 0);
      else if (we && Re) {
        if (we.type === "solid")
          e(28, Se = pr(we.color));
        else if (we.type === "particles") {
          const Ge = Un((ue = we.particle_size) == null ? void 0 : ue.value, 1), ee = pe(Ge * 10 / le), Oe = Un(we.density, 0.8), Ne = pr(we.color);
          e(28, Se = void 0), e(4, et = Ne), e(30, Je = ee), e(31, qe = String(Oe)), e(29, Z = we.is_animated === !0);
        }
      } else ((ge = p.background) == null ? void 0 : ge.type) === "solid" ? e(28, Se = hl([p.background], f).color) : e(28, Se = void 0);
    }
    t.$$.dirty[0] & /*textStyles*/
    8192 && ((ce = p.border) != null && ce.stroke && p.border.stroke.color && pr(p.border.stroke.color) !== "transparent" && zn(p.border.stroke.width) && ((re = p.background) == null ? void 0 : re.type) !== "cloud" ? e(26, ve = {
      color: p.border.stroke.color,
      width: p.border.stroke.width,
      corner_radius: p.border.corner_radius
    }) : e(26, ve = null)), t.$$.dirty[0] & /*cloudBg, hasCloudBg, textStyles, border*/
    67117128 && e(5, s = N ? o && p.background.corner_radius || 0 : ve ? Un(ve.corner_radius, 0) : 0), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(32, a = p.text_shadow ? Im(p.text_shadow, le) : void 0), t.$$.dirty[0] & /*textStyles*/
    8192 && typeof p.baseline_offset == "number" && e(27, he = p.baseline_offset), t.$$.dirty[0] & /*textStyles*/
    8192 && e(34, l = typeof p.baseline_offset == "number" ? void 0 : p.alignment_vertical), t.$$.dirty[0] & /*singleline, decoration, hasCloudBg, customLineHeight, verticalAlign, maskColor, maskAnimated*/
    671301712 | t.$$.dirty[1] & /*customVerticalAlign*/
    8 && e(8, u = {
      singleline: w,
      decoration: X,
      align: l,
      cloud: o,
      "relative-vertical-align": !!(O && he),
      "has-particles-mask": !!et,
      "mask-animated": Z
    }), t.$$.dirty[0] & /*fontSize, rootFontSize, lineHeight, letterSpacing, fontWeight, fontFamily, customLineHeight, verticalAlign, cloudBg, hasCloudBg, cloudBgId, colorOverride, color, background, textStyles, border, borderRadius, fontVariationSettings, maskColor, maskSize*/
    1610461304 | t.$$.dirty[1] & /*customVerticalAlign, cloudPadding, $direction, shadow, maskDensity*/
    31 && e(7, c = {
      "font-size": pe(le * 10 / m),
      "line-height": l ? "normal" : C,
      "letter-spacing": D,
      "font-weight": M,
      "font-family": W,
      "vertical-align": O || he === void 0 ? void 0 : pe(he * 10 / le),
      top: O && he !== void 0 ? pe(-he * 10 / le) : void 0,
      margin: i ? go($l(i, -10 / le), f) : void 0,
      padding: i ? go($l(i, 10 / le), f) : void 0,
      filter: N && o && !H ? `url(#${T})` : a,
      color: Ee || me,
      background: Se,
      opacity: N && o && !H ? ((oe = (ae = fo(p.background.color)) == null ? void 0 : ae.a) != null ? oe : 255) / 255 : void 0,
      /**
      * box-shadow instead of border because:
      * 1) Doesn't take space as border does
      * 2) There should not be a border-radius on line breaks, but there should be a border
      */
      "box-shadow": ve ? `inset 0 0 0 ${pe(ve.width * 10 / le)} ${ve.color}` : void 0,
      "border-radius": s ? pe(s * 10 / le) : void 0,
      "font-feature-settings": p.font_feature_settings || void 0,
      "font-variation-settings": Q || void 0,
      "--divkit-text-mask-color": et,
      "--divkit-text-mask-size": Je,
      "--divkit-text-mask-density": qe
    });
  }, [
    _,
    h,
    k,
    N,
    et,
    s,
    o,
    c,
    u,
    n,
    de,
    T,
    m,
    p,
    w,
    H,
    O,
    X,
    le,
    C,
    D,
    M,
    W,
    Q,
    me,
    Ee,
    ve,
    he,
    Se,
    Z,
    Je,
    qe,
    a,
    i,
    l,
    f
  ];
}
class ka extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      g0,
      p0,
      Sr,
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
function yl(t, r, e) {
  return t === "left" || t === "center" || t === "right" || t === "start" || t === "end" ? t === "left" ? r === "ltr" ? "start" : "end" : t === "right" ? r === "ltr" ? "end" : "start" : t : e;
}
function wl(t, r) {
  return t === "top" || t === "center" || t === "bottom" || t === "baseline" ? t === "top" ? "start" : t === "bottom" ? "end" : t : r;
}
function h0(t) {
  return String(t != null ? t : "");
}
function Yd(t, r) {
  return t === "source_in" || t === "source_atop" || t === "darken" || t === "lighten" || t === "multiply" || t === "screen" ? t : r;
}
function Zs(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1;
}
function va(t, r) {
  let e;
  return function(...n) {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      t.apply(this, n), e = null;
    }, r);
  };
}
function m0(t, r) {
  let e = null;
  const n = () => {
    const a = getComputedStyle(t), l = parseFloat(a.lineHeight);
    t.style.webkitLineClamp = "", t.style.maxHeight = "";
    const u = t.offsetHeight, c = t.scrollHeight;
    let f = Math.max(1, Math.floor(u / l));
    r.maxLines && r.maxLines < f && (f = r.maxLines), c > f * l + 1e-9 && (t.style.webkitLineClamp = String(f), t.style.maxHeight = l * f + "px");
  }, o = va(n, 50), i = () => {
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
const { Boolean: Xd } = Po;
function Hu(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function Wu(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function Uu(t) {
  let r = (
    /*htmlTag*/
    t[9]
  ), e, n = (
    /*htmlTag*/
    t[9] && Il(t)
  );
  return {
    c() {
      n && n.c(), e = Qt();
    },
    m(o, i) {
      n && n.m(o, i), J(o, e, i);
    },
    p(o, i) {
      /*htmlTag*/
      o[9] ? r ? Sr(
        r,
        /*htmlTag*/
        o[9]
      ) ? (n.d(1), n = Il(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = Il(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : r && (n.d(1), n = null, r = /*htmlTag*/
      o[9]);
    },
    i: j,
    o(o) {
      x(n, o);
    },
    d(o) {
      o && G(e), n && n.d(o);
    }
  };
}
function b0(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Me("span"), e = Me("span"), g(e, "class", n = ht("text__image-wrapper", uo, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), g(e, "style", o = _r({
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
      })), g(r, "style", i = _r(
        /*item*/
        t[71].image.wrapperStyle
      ));
    },
    m(s, a) {
      J(s, r, a), bt(r, e);
    },
    p(s, a) {
      a[0] & /*renderList, customLineHeight*/
      10240 && n !== (n = ht("text__image-wrapper", uo, {
        align: (
          /*item*/
          s[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          s[11] !== null
        )
      })) && g(e, "class", n), a[0] & /*renderList, customLineHeight*/
      10240 && o !== (o = _r({
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
      8192 && i !== (i = _r(
        /*item*/
        s[71].image.wrapperStyle
      )) && g(r, "style", i);
    },
    i: j,
    o: j,
    d(s) {
      s && G(r);
    }
  };
}
function y0(t) {
  let r, e, n = (
    /*item*/
    t[71].text && Gu(t)
  );
  return {
    c() {
      n && n.c(), r = Qt();
    },
    m(o, i) {
      n && n.m(o, i), J(o, r, i), e = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && L(n, 1)) : (n = Gu(o), n.c(), L(n, 1), n.m(r.parentNode, r)) : n && (sr(), x(n, 1, 1, () => {
        n = null;
      }), lr());
    },
    i(o) {
      e || (L(n), e = !0);
    },
    o(o) {
      x(n), e = !1;
    },
    d(o) {
      o && G(r), n && n.d(o);
    }
  };
}
function Gu(t) {
  let r, e;
  return r = new ka({
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function Ju(t) {
  let r, e, n, o;
  const i = [y0, b0], s = [];
  function a(l, u) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (sr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), lr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Il(t) {
  let r, e, n, o, i = ir(
    /*renderList*/
    t[13]
  ), s = [];
  for (let c = 0; c < i.length; c += 1)
    s[c] = Ju(Wu(t, i, c));
  const a = (c) => x(s[c], 1, 1, () => {
    s[c] = null;
  });
  let l = [
    {
      class: e = ht("text__inner", uo, {
        .../*innerMods*/
        t[19],
        "cloud-bg": !0
      })
    },
    {
      style: n = _r({
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
    u = jo(u, l[c]);
  return {
    c() {
      r = Me(
        /*htmlTag*/
        t[9]
      );
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      ei(
        /*htmlTag*/
        t[9]
      )(r, u);
    },
    m(c, f) {
      J(c, r, f);
      for (let _ = 0; _ < s.length; _ += 1)
        s[_] && s[_].m(r, null);
      o = !0;
    },
    p(c, f) {
      if (f[0] & /*componentContext, renderList, fontSize, singleline, wholeTextCloudBgId, customLineHeight*/
      26889) {
        i = ir(
          /*renderList*/
          c[13]
        );
        let _;
        for (_ = 0; _ < i.length; _ += 1) {
          const h = Wu(c, i, _);
          s[_] ? (s[_].p(h, f), L(s[_], 1)) : (s[_] = Ju(h), s[_].c(), L(s[_], 1), s[_].m(r, null));
        }
        for (sr(), _ = i.length; _ < s.length; _ += 1)
          a(_);
        lr();
      }
      ei(
        /*htmlTag*/
        c[9]
      )(r, u = No(l, [
        (!o || f[0] & /*innerMods*/
        524288 && e !== (e = ht("text__inner", uo, {
          .../*innerMods*/
          c[19],
          "cloud-bg": !0
        }))) && { class: e },
        (!o || f[0] & /*style, cloudPadding, wholeTextCloudBgId, wholeTextCloudBgOpacity*/
        442368 && n !== (n = _r({
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
          L(s[f]);
        o = !0;
      }
    },
    o(c) {
      s = s.filter(Xd);
      for (let f = 0; f < s.length; f += 1)
        x(s[f]);
      o = !1;
    },
    d(c) {
      c && G(r), on(s, c);
    }
  };
}
function w0(t) {
  let r, e;
  return r = new ka({
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function k0(t) {
  let r, e, n = ir(
    /*renderList*/
    t[13]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Ku(Hu(t, n, s));
  const i = (s) => x(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = Qt();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      J(s, r, a), e = !0;
    },
    p(s, a) {
      if (a[0] & /*componentContext, renderList, fontSize, singleline, customLineHeight*/
      10505 | a[1] & /*onImgError*/
      256) {
        n = ir(
          /*renderList*/
          s[13]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = Hu(s, n, l);
          o[l] ? (o[l].p(u, a), L(o[l], 1)) : (o[l] = Ku(u), o[l].c(), L(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (sr(), l = n.length; l < o.length; l += 1)
          i(l);
        lr();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          L(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Xd);
      for (let a = 0; a < o.length; a += 1)
        x(o[a]);
      e = !1;
    },
    d(s) {
      s && G(r), on(o, s);
    }
  };
}
function v0(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h, m = [
    { class: o = uo.text__image },
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
      style: l = _r({
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
  for (let w = 0; w < m.length; w += 1)
    p = jo(p, m[w]);
  return {
    c() {
      r = Me("span"), e = Me("span"), n = Me("img"), qo(n, p), g(e, "class", u = ht("text__image-wrapper", uo, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), g(e, "style", c = _r({
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
      })), g(r, "style", f = _r(
        /*item*/
        t[71].image.wrapperStyle
      ));
    },
    m(w, k) {
      J(w, r, k), bt(r, e), bt(e, n), _ || (h = Qe(
        n,
        "error",
        /*onImgError*/
        t[39]
      ), _ = !0);
    },
    p(w, k) {
      qo(n, p = No(m, [
        { class: o },
        k[0] & /*renderList*/
        8192 && !Xn(n.src, i = /*item*/
        w[71].image.url) && { src: i },
        k[0] & /*renderList*/
        8192 && s !== (s = /*item*/
        w[71].image.preloadRequired ? "eager" : "lazy") && { loading: s },
        { decoding: "async" },
        k[0] & /*renderList*/
        8192 && a !== (a = /*item*/
        w[71].image.description) && { alt: a },
        k[0] & /*renderList*/
        8192 && /*item*/
        w[71].image.a11yAttrs,
        k[0] & /*renderList*/
        8192 && l !== (l = _r({
          height: (
            /*item*/
            w[71].image.height
          ),
          filter: (
            /*item*/
            w[71].image.svgFilterId ? `url(#${/*item*/
            w[71].image.svgFilterId})` : void 0
          )
        })) && { style: l }
      ])), k[0] & /*renderList, customLineHeight*/
      10240 && u !== (u = ht("text__image-wrapper", uo, {
        align: (
          /*item*/
          w[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          w[11] !== null
        )
      })) && g(e, "class", u), k[0] & /*renderList, customLineHeight*/
      10240 && c !== (c = _r({
        width: (
          /*item*/
          w[71].image.width
        ),
        height: (
          /*customLineHeight*/
          w[11] && /*item*/
          w[71].image.verticalAlign !== "baseline" ? (
            /*customLineHeight*/
            w[11] + "em"
          ) : void 0
        )
      })) && g(e, "style", c), k[0] & /*renderList*/
      8192 && f !== (f = _r(
        /*item*/
        w[71].image.wrapperStyle
      )) && g(r, "style", f);
    },
    i: j,
    o: j,
    d(w) {
      w && G(r), _ = !1, h();
    }
  };
}
function j0(t) {
  let r, e, n = (
    /*item*/
    t[71].text && qu(t)
  );
  return {
    c() {
      n && n.c(), r = Qt();
    },
    m(o, i) {
      n && n.m(o, i), J(o, r, i), e = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && L(n, 1)) : (n = qu(o), n.c(), L(n, 1), n.m(r.parentNode, r)) : n && (sr(), x(n, 1, 1, () => {
        n = null;
      }), lr());
    },
    i(o) {
      e || (L(n), e = !0);
    },
    o(o) {
      x(n), e = !1;
    },
    d(o) {
      o && G(r), n && n.d(o);
    }
  };
}
function qu(t) {
  let r, e;
  return r = new ka({
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function Ku(t) {
  let r, e, n, o;
  const i = [j0, v0], s = [];
  function a(l, u) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (sr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), lr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Dl(t) {
  let r, e, n, o, i, s, a, l, u;
  const c = [k0, w0], f = [];
  function _(p, w) {
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
        uo,
        /*innerMods*/
        t[19]
      )
    },
    {
      style: i = _r(
        /*style*/
        t[18]
      )
    }
  ], m = {};
  for (let p = 0; p < h.length; p += 1)
    m = jo(m, h[p]);
  return {
    c() {
      r = Me(
        /*htmlTag*/
        t[9]
      ), n.c(), ei(
        /*htmlTag*/
        t[9]
      )(r, m);
    },
    m(p, w) {
      J(p, r, w), f[e].m(r, null), a = !0, l || (u = dl(s = m0.call(null, r, {
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
    p(p, w) {
      let k = e;
      e = _(p), e === k ? f[e].p(p, w) : (sr(), x(f[k], 1, 1, () => {
        f[k] = null;
      }), lr(), n = f[e], n ? n.p(p, w) : (n = f[e] = c[e](p), n.c()), L(n, 1), n.m(r, null)), ei(
        /*htmlTag*/
        p[9]
      )(r, m = No(h, [
        (!a || w[0] & /*innerMods*/
        524288 && o !== (o = ht(
          "text__inner",
          uo,
          /*innerMods*/
          p[19]
        ))) && { class: o },
        (!a || w[0] & /*style*/
        262144 && i !== (i = _r(
          /*style*/
          p[18]
        ))) && { style: i }
      ])), s && zr(s.update) && w[0] & /*$jsonAutoEllipsize, lineClamp, maxLines*/
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
      a || (L(n), a = !0);
    },
    o(p) {
      x(n), a = !1;
    },
    d(p) {
      p && G(r), f[e].d(), l = !1, u();
    }
  };
}
function C0(t) {
  let r, e = (
    /*htmlTag*/
    t[9]
  ), n, o, i = (
    /*hasCloudBg*/
    t[6] && Uu(t)
  ), s = (
    /*htmlTag*/
    t[9] && Dl(t)
  );
  return {
    c() {
      i && i.c(), r = gr(), s && s.c(), n = Qt();
    },
    m(a, l) {
      i && i.m(a, l), J(a, r, l), s && s.m(a, l), J(a, n, l), o = !0;
    },
    p(a, l) {
      /*hasCloudBg*/
      a[6] ? i ? (i.p(a, l), l[0] & /*hasCloudBg*/
      64 && L(i, 1)) : (i = Uu(a), i.c(), L(i, 1), i.m(r.parentNode, r)) : i && (sr(), x(i, 1, 1, () => {
        i = null;
      }), lr()), /*htmlTag*/
      a[9] ? e ? Sr(
        e,
        /*htmlTag*/
        a[9]
      ) ? (s.d(1), s = Dl(a), e = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : s.p(a, l) : (s = Dl(a), e = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : e && (s.d(1), s = null, e = /*htmlTag*/
      a[9]);
    },
    i(a) {
      o || (L(i), o = !0);
    },
    o(a) {
      x(i), x(s, a), o = !1;
    },
    d(a) {
      a && (G(r), G(n)), i && i.d(a), s && s.d(a);
    }
  };
}
function E0(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht(
        "text",
        uo,
        /*mods*/
        t[20]
      ) + " " + /*selectable*/
      (t[5] ? Er.root__selectable : Er.root__unselectable),
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
      $$slots: { default: [C0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods, selectable*/
      1048608 && (i.cls = ht(
        "text",
        uo,
        /*mods*/
        n[20]
      ) + " " + /*selectable*/
      (n[5] ? Er.root__selectable : Er.root__unselectable)), o[0] & /*componentContext*/
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function A0(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, O, ne, de, T, X, le, C, D, M, W, Q, me = j, Ee = () => (me(), me = S(N, (vt) => e(52, Q = vt)), N), ve, he = j, Se = () => (he(), he = S(i, (vt) => e(53, ve = vt)), i), Z, et = j, Je = () => (et(), et = S(o, (vt) => e(54, Z = vt)), o), qe, be = j, Te = () => (be(), be = S(w, (vt) => e(55, qe = vt)), w), ue, ge = j, ce = () => (ge(), ge = S(p, (vt) => e(56, ue = vt)), p), re, ae = j, oe = () => (ae(), ae = S(m, (vt) => e(57, re = vt)), m), we, Re = j, Ge = () => (Re(), Re = S(h, (vt) => e(58, we = vt)), h), ee, Oe = j, Ne = () => (Oe(), Oe = S(_, (vt) => e(59, ee = vt)), _), nt, at = j, tt = () => (at(), at = S(u, (vt) => e(60, nt = vt)), u), yt, rt = j, Mt = () => (rt(), rt = S(f, (vt) => e(61, yt = vt)), f), ft, K = j, _e = () => (K(), K = S(c, (vt) => e(62, ft = vt)), c), st, Pe = j, I = () => (Pe(), Pe = S(k, (vt) => e(10, st = vt)), k), jt, lt = j, Et = () => (lt(), lt = S(l, (vt) => e(63, jt = vt)), l), Dt, ot = j, q = () => (ot(), ot = S(a, (vt) => e(64, Dt = vt)), a), Tt, Ft = j, Kt = () => (Ft(), Ft = S(s, (vt) => e(65, Tt = vt)), s), Xt, je = j, Ke = () => (je(), je = S(n, (vt) => e(66, Xt = vt)), n), _t, Fe = j, $e = () => (Fe(), Fe = S(H, (vt) => e(67, _t = vt)), H);
  t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => et()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => at()), t.$$.on_destroy.push(() => rt()), t.$$.on_destroy.push(() => K()), t.$$.on_destroy.push(() => Pe()), t.$$.on_destroy.push(() => lt()), t.$$.on_destroy.push(() => ot()), t.$$.on_destroy.push(() => Ft()), t.$$.on_destroy.push(() => je()), t.$$.on_destroy.push(() => Fe());
  let { componentContext: Be } = r, { layoutParams: Vt = void 0 } = r;
  const ze = Dr(Kr), mt = ze.direction;
  yn(t, mt, (vt) => e(51, W = vt));
  let Ut = "", It = 12, hr = 1.25, De = null, kt = "", ar, rr = "", er = !1, mr = "start", vr = "start", tr = "", nr = "", Rt = "", pt = !1, xt = [], ie = !1, yr = "", kr, Ct = [], Tr = {}, Br = "span";
  function cr(vt, Gt, Zt, ur) {
    var se, d;
    let dt = [];
    if (Ct.forEach(([B, Ie]) => {
      ze.removeSvgFilter(B, Ie);
    }), Ct = [], !(Array.isArray(Gt) && Gt.length || Array.isArray(Zt) && Zt.length && vt)) {
      e(13, xt = []);
      return;
    }
    const fe = vt;
    let wt = Gt || [{ start: 0, end: fe.length }], or = Zt || [], Yt = 0, jr = [], v = [];
    wt.forEach((B) => {
      const Ie = B.start || 0, He = B.end || vt.length, ke = {
        top_offset: 0,
        ...B,
        start: Ie,
        end: He
      };
      v.push({
        index: Ie,
        range: ke,
        type: "rangeStart",
        isStart: !0
      }), v.push({
        index: He,
        range: ke,
        type: "rangeEnd"
      });
    }), or.forEach((B, Ie) => {
      B.start !== void 0 && B.url && B.start <= fe.length && v.push({
        index: B.indexing_direction === "reversed" ? vt.length - B.start : B.start,
        image: B,
        type: "image",
        arrayIndex: Ie
      });
    }), v.sort((B, Ie) => B.index === Ie.index ? B.type !== Ie.type ? B.type === "image" ? -1 : Ie.type === "image" ? 1 : B.type < Ie.type ? -1 : 1 : B.type === "image" && Ie.type === "image" ? Ie.arrayIndex - B.arrayIndex : B.type === "rangeStart" && Ie.type === "rangeStart" ? B.range.end - Ie.range.end : B.type === "rangeStart" ? 1 : Ie.type === "rangeStart" ? -1 : B.type !== "image" && Ie.type !== "image" ? B.range.start - Ie.range.start : 0 : B.index - Ie.index), v.forEach((B) => {
      var ke, R, Jt, Ht;
      let Ie = B.type === "image" ? null : B.range, He = B.index;
      if (He > Yt) {
        let Ye = Object.assign({ ...ur }, ...jr);
        jr.length && jr[jr.length - 1].start !== Yt && (Ye.top_offset = 0), dt.push({
          text: fe.substring(Yt, He),
          textStyles: Ye,
          actions: B.type === "rangeEnd" && ((R = (ke = B.range) == null ? void 0 : ke.actions) == null ? void 0 : R.filter(Zs)) || void 0
        });
      }
      if (B.type === "rangeStart" && Ie)
        jr.push(Ie);
      else if (B.type === "rangeEnd")
        jr = jr.filter((Ye) => Ye !== B.range);
      else if (B.type === "image") {
        let Ye = Object.assign({ ...ur }, ...jr), ct = pe((B.image.width && B.image.width.value || 20) * 10 / (Ye.font_size || 12)), Wt = pe((B.image.height && B.image.height.value || 20) * 10 / (Ye.font_size || 12));
        const Fr = {
          "font-size": pe((Number(Ye.font_size) || 12) * 10 / It)
        };
        let br = "";
        const Mr = B.image.tint_color, jn = Yd(B.image.tint_mode, "source_in");
        if (Mr) {
          const pn = pr(B.image.tint_color);
          br = ze.addSvgFilter(pn, jn), Ct.push([pn, jn]);
        }
        const Ae = {}, Qr = (Jt = B.image.accessibility) == null ? void 0 : Jt.type, Yr = ((Ht = B.image.accessibility) == null ? void 0 : Ht.description) || "";
        (Qr === "button" || Qr === "image") && Yr ? Ae.role = Qr : (!Yr || Qr === "none") && (Ae["aria-hidden"] = "true"), dt.push({
          image: {
            url: B.image.url,
            width: ct,
            height: Wt,
            wrapperStyle: Fr,
            svgFilterId: br,
            preloadRequired: !!B.image.preload_required,
            verticalAlign: B.image.alignment_vertical,
            description: Yr,
            a11yAttrs: Ae
          }
        });
      }
      Yt = He;
    }), Yt < fe.length && dt.push({
      text: fe.substring(Yt),
      textStyles: { ...ur }
    }), e(13, xt = dt), e(6, ie = dt.some((B) => {
      var Ie;
      return "text" in B && ((Ie = B.textStyles.background) == null ? void 0 : Ie.type) === "cloud";
    })), e(14, yr = ie && dt.length === 1 ? ze.genId("text-whole-bg") : ""), e(15, kr = yr ? ((d = (se = fo(dt[0].textStyles.background.color)) == null ? void 0 : se.a) != null ? d : 255) / 255 : void 0);
  }
  function ut(vt) {
    vt.target && "classList" in vt.target && vt.target.classList.add(uo.text__image_hidden);
  }
  return sn(() => {
    Ct.forEach(([vt, Gt]) => {
      ze.removeSvgFilter(vt, Gt);
    });
  }), t.$$set = (vt) => {
    "componentContext" in vt && e(0, Be = vt.componentContext), "layoutParams" in vt && e(1, Vt = vt.layoutParams);
  }, t.$$.update = () => {
    var vt, Gt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && Be.json && (e(3, It = 12), e(40, hr = 1.25), e(11, De = null), e(41, kt = ""), e(12, ar = void 0), e(4, rr = ""), e(42, er = !1), e(43, mr = "start"), e(44, vr = "start"), e(45, tr = ""), e(47, Rt = ""), e(5, pt = !1)), t.$$.dirty[0] & /*componentContext*/
    1 && Ke(e(37, n = Be.getDerivedFromVars(Be.json.text))), t.$$.dirty[0] & /*componentContext*/
    1 && Je(e(36, o = Be.getDerivedFromVars(Be.json.ranges, void 0, !0, 3))), t.$$.dirty[0] & /*componentContext*/
    1 && Se(e(35, i = Be.getDerivedFromVars(Be.json.images))), t.$$.dirty[0] & /*componentContext*/
    1 && Kt(e(34, s = Be.getDerivedFromVars(
      {
        font_size: Be.json.font_size,
        letter_spacing: Be.json.letter_spacing,
        font_weight: Be.json.font_weight,
        font_weight_value: Be.json.font_weight_value,
        font_family: Be.json.font_family,
        text_color: Be.json.text_color,
        underline: Be.json.underline,
        strike: Be.json.strike,
        line_height: Be.json.line_height,
        text_shadow: Be.json.text_shadow,
        font_feature_settings: Be.json.font_feature_settings,
        font_variation_settings: Be.json.font_variation_settings
      },
      void 0,
      !0,
      1
    ))), t.$$.dirty[0] & /*componentContext*/
    1 && q(e(33, a = Be.getDerivedFromVars(Be.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && Et(e(32, l = Be.getDerivedFromVars(Be.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && tt(e(31, u = Be.getDerivedFromVars(Be.json.max_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(30, c = Be.getDerivedFromVars(Be.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Mt(e(29, f = Be.getDerivedFromVars(Be.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Ne(e(28, _ = Be.getDerivedFromVars(Be.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(27, h = Be.getDerivedFromVars(Be.json.focused_text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(26, m = Be.getDerivedFromVars(Be.json.truncate))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(25, p = Be.getDerivedFromVars(Be.json.text_gradient))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(24, w = Be.getDerivedFromVars(Be.json.selectable))), t.$$.dirty[0] & /*componentContext*/
    1 && I(e(23, k = Be.getDerivedFromVars(Be.json.auto_ellipsize))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(22, N = Be.getDerivedFromVars(Be.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && $e(e(21, H = Be.getDerivedFromVars(Be.json.heading_type))), t.$$.dirty[2] & /*$jsonHeadingType*/
    32 && e(9, O = (() => {
      const Zt = _t;
      if (Zt && typeof Zt == "string") {
        const ur = Zt.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(ur))
          return ur;
      }
      return "span";
    })()), t.$$.dirty[0] & /*htmlTag*/
    512 && e(16, Br = O !== "span" ? "div" : "span"), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonText*/
    16 && (typeof Be.json.text == "string" ? e(2, Ut = h0(Xt)) : (e(2, Ut = ""), Be.logError(Y(new Error("Incorrect text value type"))))), t.$$.dirty[1] & /*$jsonTextGradient, $direction*/
    34603008) {
      let Zt = "";
      if (ue) {
        const ur = hl([ue], W);
        ur.image && (Zt = ur.image);
      }
      e(47, Rt = Zt);
    }
    if (t.$$.dirty[1] & /*gradient*/
    65536 | t.$$.dirty[2] & /*$jsonRootTextStyles*/
    8 && e(7, Tr = Rt ? { ...Tt, text_color: "" } : Tt), t.$$.dirty[0] & /*fontSize, componentContext*/
    9 | t.$$.dirty[2] & /*$jsonTextSize*/
    4) {
      e(3, It = Un(Dt, It));
      const Zt = Be.json.responsive;
      if (Zt && typeof Zt == "object" && typeof window < "u") {
        const ur = window.matchMedia("(max-width: 767px)").matches, dt = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
        ur && ((vt = Zt.mobile) != null && vt.font_size) ? e(3, It = Zt.mobile.font_size) : dt && ((Gt = Zt.tablet) != null && Gt.font_size) && e(3, It = Zt.tablet.font_size);
      }
    }
    if (t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*lineHeight*/
    512 | t.$$.dirty[2] & /*$jsonLineHeight*/
    2) {
      const Zt = jt;
      zn(Zt) ? (e(40, hr = Number(Zt) / It), e(11, De = hr)) : e(11, De = null);
    }
    if (t.$$.dirty[1] & /*$jsonMaxLines*/
    536870912 && e(8, ne = nt === 1), t.$$.dirty[0] & /*$jsonAutoEllipsize*/
    1024 | t.$$.dirty[1] & /*$jsonMaxLines, lineHeight*/
    536871424) {
      let Zt = "", ur, dt = "", fe = !1;
      if (nt && nt > 1) {
        const wt = Number(nt);
        Zt = wt * hr + "em", ur = wt, dt = wt, fe = !0;
      } else st && nt !== 1 && (fe = !0);
      e(41, kt = Zt), e(12, ar = ur), e(4, rr = dt), e(42, er = fe);
    }
    if (t.$$.dirty[1] & /*$direction, halign*/
    1052672 | t.$$.dirty[2] & /*$jsonHAlign*/
    1 && e(43, mr = yl(ft, W, mr)), t.$$.dirty[1] & /*$jsonVAlign, valign*/
    1073750016 && e(44, vr = wl(yt, vr)), t.$$.dirty[0] & /*text*/
    4 | t.$$.dirty[1] & /*$jsonRanges*/
    8388608 && e(50, de = !Z || Ut && Z.length === 1 && Z[0] && (!Z[0].start || Z[0].start === 0) && (!Z[0].end || typeof Z[0].end == "number" && Z[0].end >= Ut.length)), t.$$.dirty[1] & /*gradient, $jsonTextColor, $jsonRanges*/
    276889600 && e(49, T = !!(!Rt && ee) != !!(Z && Z[0] && Z[0].text_color)), t.$$.dirty[1] & /*$jsonMaxLines, isAllTextSameColor, isOnlyOneColorDefined, $jsonTextColor, $jsonRanges, rootTextColor*/
    814497792) {
      let Zt = "";
      nt && de && T && (Zt = pr(ee || Z && Z[0] && Z[0].text_color, 1, tr)), e(45, tr = Zt);
    }
    t.$$.dirty[1] & /*$jsonFocusTextColor, focusTextColor*/
    134250496 && e(46, nr = pr(we, 1, nr)), t.$$.dirty[1] & /*$jsonTruncate*/
    67108864 && e(48, X = re === "none" ? "none" : ""), t.$$.dirty[0] & /*selectable*/
    32 | t.$$.dirty[1] & /*$jsonSelectable*/
    16777216 && e(5, pt = nn(qe, pt)), t.$$.dirty[0] & /*text, rootTextStyles*/
    132 | t.$$.dirty[1] & /*$jsonRanges, $jsonImages*/
    12582912 && cr(Ut, Z, ve, Tr), t.$$.dirty[0] & /*singleline*/
    256 | t.$$.dirty[1] & /*multiline, halign, valign, truncate, focusTextColor*/
    178176 && e(20, le = {
      singleline: ne,
      multiline: er,
      halign: mr,
      valign: vr,
      truncate: X,
      "has-focus-color": !!nr
    }), t.$$.dirty[0] & /*hasCloudBg*/
    64 | t.$$.dirty[1] & /*gradient*/
    65536 && e(19, C = {
      gradient: !!Rt,
      "has-cloud-bg": ie
    }), t.$$.dirty[0] & /*fontSize, lineClamp*/
    24 | t.$$.dirty[1] & /*lineHeight, maxHeight, rootTextColor, gradient, focusTextColor*/
    116224 && e(18, D = {
      "font-size": pe(It),
      "line-height": hr,
      "max-height": kt,
      "-webkit-line-clamp": rr,
      color: tr,
      "background-image": Rt,
      "--divkit-text-focus-color": nr
    }), t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*$jsonPaddings, $direction*/
    3145728 && e(17, M = go($l(bi(Q, {}) || {}, 10 / It), W));
  }, [
    Be,
    Vt,
    Ut,
    It,
    rr,
    pt,
    ie,
    Tr,
    ne,
    O,
    st,
    De,
    ar,
    xt,
    yr,
    kr,
    Br,
    M,
    D,
    C,
    le,
    H,
    N,
    k,
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
    o,
    n,
    mt,
    ut,
    hr,
    kt,
    er,
    mr,
    vr,
    tr,
    nr,
    Rt,
    X,
    T,
    de,
    W,
    Q,
    ve,
    Z,
    qe,
    ue,
    re,
    we,
    ee,
    nt,
    yt,
    ft,
    jt,
    Dt,
    Tt,
    Xt,
    _t
  ];
}
class S0 extends Or {
  constructor(r) {
    super(), Lr(this, r, A0, E0, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const V0 = "appkit-container", F0 = "appkit-container_wrap", I0 = "appkit-container_overflow_visible", D0 = "appkit-container_orientation_vertical", T0 = "appkit-container_valign_start", M0 = "appkit-container_valign_center", P0 = "appkit-container_valign_end", N0 = "appkit-container_halign_start", z0 = "appkit-container_halign_center", L0 = "appkit-container_halign_end", O0 = "appkit-container_orientation_horizontal", B0 = "appkit-container_orientation_overlap", Yu = {
  container: V0,
  container_wrap: F0,
  container_overflow_visible: I0,
  container_orientation_vertical: D0,
  container_valign_start: T0,
  container_valign_center: M0,
  container_valign_end: P0,
  "container_valign_space-between": "appkit-container_valign_space-between",
  "container_valign_space-around": "appkit-container_valign_space-around",
  "container_valign_space-evenly": "appkit-container_valign_space-evenly",
  container_halign_start: N0,
  container_halign_center: z0,
  container_halign_end: L0,
  "container_halign_space-between": "appkit-container_halign_space-between",
  "container_halign_space-around": "appkit-container_halign_space-around",
  "container_halign_space-evenly": "appkit-container_halign_space-evenly",
  container_orientation_horizontal: O0,
  container_orientation_overlap: B0,
  "container_fixed-container": "appkit-container_fixed-container",
  "container_responsive-mobile-vertical": "appkit-container_responsive-mobile-vertical",
  "container_responsive-mobile-horizontal": "appkit-container_responsive-mobile-horizontal",
  "container_responsive-mobile-has-height": "appkit-container_responsive-mobile-has-height",
  "container_responsive-tablet-vertical": "appkit-container_responsive-tablet-vertical",
  "container_responsive-tablet-horizontal": "appkit-container_responsive-tablet-horizontal",
  "container_responsive-tablet-has-height": "appkit-container_responsive-tablet-has-height"
};
function Xu(t) {
  return {
    top: Number(t == null ? void 0 : t.top) || 0,
    right: Number(t == null ? void 0 : t.right) || 0,
    bottom: Number(t == null ? void 0 : t.bottom) || 0,
    left: Number(t == null ? void 0 : t.left) || 0
  };
}
function Zu(t, r, e) {
  const n = ((r == null ? void 0 : r.margins.left) || 0) + ((r == null ? void 0 : r.margins.right) || 0), o = ((r == null ? void 0 : r.margins.top) || 0) + ((r == null ? void 0 : r.margins.bottom) || 0);
  r != null && r.show_at_start && (e ? t.top = r.style.height + o : t.left = r.style.width + n), r != null && r.show_at_end && (e ? t.bottom = r.style.height + o : t.right = r.style.width + n);
}
function R0(t, r, e) {
  const n = {};
  return Zu(n, r, t === "vertical"), Zu(n, e, t === "horizontal"), n;
}
function H0({
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
  ], i.map(pe).join(" ");
}
function W0(t) {
  var e;
  const r = (e = t.width) == null ? void 0 : e.type;
  return r !== "wrap_content" && r !== "fixed";
}
function U0(t) {
  var e;
  return ((e = t.height) == null ? void 0 : e.type) === "match_parent";
}
function G0(t, r) {
  return t === "vertical" || t === "horizontal" || t === "overlap" ? t : r;
}
function J0(t) {
  var r, e, n;
  return {
    width: tn((r = t.item_width) == null ? void 0 : r.value, 10),
    height: tn((e = t.item_height) == null ? void 0 : e.value, 10),
    radius: tn((n = t.corner_radius) == null ? void 0 : n.value, 5)
  };
}
function q0(t) {
  var e;
  const r = tn((e = t.radius) == null ? void 0 : e.value, 10) * 2;
  return {
    width: r,
    height: r,
    radius: r
  };
}
function K0(t, r, e) {
  var l;
  const n = {}, o = r.stroke || (e == null ? void 0 : e.stroke), i = o != null && o.color ? pr(o.color) : "", s = o != null && o.width ? Number((l = o.width) != null ? l : 1) : "";
  n.width = t.width, n.height = t.height, n.borderRadius = t.radius;
  const a = r.background_color || (e == null ? void 0 : e.color);
  return n.background = pr(a), i && s && (n.boxShadow = `inset 0 0 0 ${pe(s)} ${i}`), n;
}
function ao(t, r, e) {
  if (!t || !t.shape || !t.shape.type || !r.includes(t.shape.type) || t.type !== "shape_drawable")
    return e;
  let n;
  if (t.shape.type === "rounded_rectangle")
    n = J0(t.shape);
  else if (t.shape.type === "circle")
    n = q0(t.shape);
  else
    return e;
  return K0(n, t.shape, {
    color: t.color,
    stroke: t.stroke
  });
}
let es;
function Qu() {
  if (typeof document > "u" && (es = !0), es !== void 0)
    return es;
  const t = document.createElement("div");
  return t.style.position = "absolute", t.style.display = "flex", t.style.flexDirection = "column", t.style.gap = "1px", t.appendChild(document.createElement("div")), t.appendChild(document.createElement("div")), document.body.appendChild(t), es = t.scrollHeight === 1, document.body.removeChild(t), es;
}
function Y0(t, r) {
  return t === "top" || t === "center" || t === "bottom" || t === "baseline" || t === "space-between" || t === "space-around" || t === "space-evenly" ? t === "top" ? "start" : t === "bottom" ? "end" : t : r;
}
function X0(t, r, e) {
  return t === "left" || t === "center" || t === "right" || t === "space-between" || t === "space-around" || t === "space-evenly" || t === "start" || t === "end" ? t === "left" ? r === "ltr" ? "start" : "end" : t === "right" ? r === "ltr" ? "end" : "start" : t : e;
}
function Z0() {
}
function Jo(t) {
  return {
    subscribe(r) {
      return r(t), Z0;
    }
  };
}
function kl(t, r, e, n) {
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
const cs = {
  "container-separator": "appkit-container-separator",
  "container-separator__item": "appkit-container-separator__item",
  "container-separator__shape": "appkit-container-separator__shape"
};
function Q0(t, r) {
  let e = 0, n, o = !1;
  return function() {
    const i = Date.now();
    return !e || Math.abs(i - e) > r ? (e = i, n = t.apply(this, arguments)) : (o || (o = !0, setTimeout(() => {
      o = !1, n = t.apply(this, arguments);
    }, r)), n);
  };
}
function x0(t) {
  const r = t.getBoundingClientRect(), e = getComputedStyle(t);
  return {
    top: r.top - parseFloat(e.marginTop),
    right: r.right + parseFloat(e.marginRight),
    bottom: r.bottom + parseFloat(e.marginBottom),
    left: r.left - parseFloat(e.marginLeft)
  };
}
const { window: $0 } = Po;
function xu(t, r, e) {
  const n = t.slice();
  return n[16] = r[e], n;
}
function $u(t) {
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
      r = Me("div"), e = Me("div"), s = gr(), g(e, "class", cs["container-separator__shape"]), F(e, "width", n), F(e, "height", o), F(e, "border-radius", i), F(
        e,
        "background",
        /*item*/
        t[16].style.background
      ), F(
        e,
        "box-shadow",
        /*item*/
        t[16].style.boxShadow
      ), g(r, "class", cs["container-separator__item"]), F(r, "left", a), F(r, "top", l), F(r, "width", u), F(r, "height", c);
    },
    m(f, _) {
      J(f, r, _), bt(r, e), bt(r, s);
    },
    p(f, _) {
      _ & /*separators*/
      2 && n !== (n = `${/*item*/
      f[16].style.width}px`) && F(e, "width", n), _ & /*separators*/
      2 && o !== (o = `${/*item*/
      f[16].style.height}px`) && F(e, "height", o), _ & /*separators*/
      2 && i !== (i = `${/*item*/
      f[16].style.borderRadius}px`) && F(e, "border-radius", i), _ & /*separators*/
      2 && F(
        e,
        "background",
        /*item*/
        f[16].style.background
      ), _ & /*separators*/
      2 && F(
        e,
        "box-shadow",
        /*item*/
        f[16].style.boxShadow
      ), _ & /*separators*/
      2 && a !== (a = `${/*item*/
      f[16].left}px`) && F(r, "left", a), _ & /*separators*/
      2 && l !== (l = `${/*item*/
      f[16].top}px`) && F(r, "top", l), _ & /*separators*/
      2 && u !== (u = `${/*item*/
      f[16].width}px`) && F(r, "width", u), _ & /*separators*/
      2 && c !== (c = `${/*item*/
      f[16].height}px`) && F(r, "height", c);
    },
    d(f) {
      f && G(r);
    }
  };
}
function e1(t) {
  let r, e, n, o = ir(
    /*separators*/
    t[1]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = $u(xu(t, o, s));
  return {
    c() {
      r = Me("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      g(r, "class", cs["container-separator"]);
    },
    m(s, a) {
      J(s, r, a);
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, null);
      t[13](r), e || (n = Qe(
        $0,
        "resize",
        /*throttledUpdated*/
        t[2]
      ), e = !0);
    },
    p(s, [a]) {
      if (a & /*separators*/
      2) {
        o = ir(
          /*separators*/
          s[1]
        );
        let l;
        for (l = 0; l < o.length; l += 1) {
          const u = xu(s, o, l);
          i[l] ? i[l].p(u, a) : (i[l] = $u(u), i[l].c(), i[l].m(r, null));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = o.length;
      }
    },
    i: j,
    o: j,
    d(s) {
      s && G(r), on(i, s), t[13](null), e = !1, n();
    }
  };
}
const t1 = 10;
function Tl(t, r, e, n, o, i) {
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
function ec(t, r, e, n, o, i) {
  const s = {
    top: Math.min(...e.map((a) => a.top)),
    right: Math.max(...e.map((a) => a.right)),
    bottom: Math.max(...e.map((a) => a.bottom)),
    left: Math.min(...e.map((a) => a.left))
  };
  if (r != null && r.show_at_start) {
    let a, l;
    o === "space-around" || o === "space-evenly" ? (a = i.left - r.style.width, l = i.top - r.style.height) : (a = e[0].left - r.style.width - r.margins.left - r.margins.right, l = e[0].top - r.style.height - r.margins.top - r.margins.bottom), Tl(
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
      Tl(t, r, e[a], e[a + 1], s, n);
  if (r != null && r.show_at_end) {
    const a = e[e.length - 1];
    let l, u;
    o === "space-around" || o === "space-evenly" ? (l = i.bottom + r.style.height, u = i.right + r.style.width) : (l = a.bottom + r.style.height + r.margins.top + r.margins.bottom, u = a.right + r.style.width + r.margins.left + r.margins.right), Tl(
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
function r1(t, r, e) {
  let n, { orientation: o } = r, { separator: i } = r, { lineSeparator: s } = r, { contentHAlign: a } = r, { contentVAlign: l } = r, { direction: u } = r;
  const c = Q0(k, t1);
  let f = [], _, h = !1, m = null, p = null;
  function w(H) {
    H.some((O) => {
      var de;
      const ne = (de = O.target) == null ? void 0 : de.classList;
      return !(ne != null && ne.contains(cs["container-separator__shape"])) && !(ne != null && ne.contains(cs["container-separator"]));
    }) && c();
  }
  function k() {
    if (!n)
      return;
    const H = n.getBoundingClientRect(), O = window.getComputedStyle(n), ne = {
      top: H.top + parseFloat(O.paddingTop),
      right: H.right - parseFloat(O.paddingRight),
      bottom: H.bottom - parseFloat(O.paddingBottom),
      left: H.left + parseFloat(O.paddingLeft)
    };
    e(1, f = []);
    let de = [...n.children].filter((le) => le !== _ && le instanceof HTMLElement && !le.classList.contains(Xs.outer__border) && getComputedStyle(le).display !== "none"), T = [];
    for (; de.length; ) {
      const le = [], C = de.shift();
      le.push(C);
      let D = C.getBoundingClientRect(), M = D.left, W = D.right, Q = D.bottom;
      for (; de.length; ) {
        let me = de[0], Ee = me.getBoundingClientRect();
        if (o === "vertical") {
          if (Ee.top < Q)
            break;
        } else if (u === "ltr" ? Ee.left < W : Ee.right > M)
          break;
        W = Math.max(W, Ee.right), M = Math.min(M, Ee.left), Q = Math.max(Q, Ee.bottom), le.push(me), de.shift();
      }
      T.push(le);
    }
    const X = [];
    T.forEach((le) => {
      const C = le.map((M) => x0(M));
      u === "rtl" && o === "horizontal" && C.reverse(), i && ec(
        f,
        i,
        C,
        o === "vertical",
        o === "vertical" ? l : a,
        ne
      );
      const D = {
        top: Math.min(...C.map((M) => M.top)),
        right: Math.max(...C.map((M) => M.right)),
        bottom: Math.max(...C.map((M) => M.bottom)),
        left: Math.min(...C.map((M) => M.left))
      };
      X.push(D);
    }), u === "rtl" && o === "vertical" && X.reverse(), s && ec(
      f,
      s,
      X,
      o === "horizontal",
      o === "vertical" ? a : l,
      ne
    ), f.forEach((le) => {
      le.top -= H.top, le.left -= H.left;
    });
  }
  Zn(() => {
    e(9, h = !0);
  }), sn(() => {
    e(9, h = !1);
  });
  function N(H) {
    Vr[H ? "unshift" : "push"](() => {
      _ = H, e(0, _);
    });
  }
  return t.$$set = (H) => {
    "orientation" in H && e(3, o = H.orientation), "separator" in H && e(4, i = H.separator), "lineSeparator" in H && e(5, s = H.lineSeparator), "contentHAlign" in H && e(6, a = H.contentHAlign), "contentVAlign" in H && e(7, l = H.contentVAlign), "direction" in H && e(8, u = H.direction);
  }, t.$$.update = () => {
    t.$$.dirty & /*node*/
    1 && e(12, n = (_ == null ? void 0 : _.parentElement) || null), t.$$.dirty & /*mounted, parentElement, mutationObserver, resizeObserver*/
    7680 && (h && n || m || p) && (m && (m.disconnect(), e(10, m = null)), p && (p.disconnect(), e(11, p = null)), h && n && (typeof MutationObserver < "u" && (e(10, m = new MutationObserver(w)), m.observe(n, {
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
    N
  ];
}
class n1 extends Or {
  constructor(r) {
    super(), Lr(this, r, r1, e1, Sr, {
      orientation: 3,
      separator: 4,
      lineSeparator: 5,
      contentHAlign: 6,
      contentVAlign: 7,
      direction: 8
    });
  }
}
const { Boolean: o1 } = Po;
function tc(t, r, e) {
  const n = t.slice();
  return n[63] = r[e], n;
}
function rc(t) {
  let r, e;
  return r = new Jn({
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function nc(t) {
  let r, e;
  return r = new n1({
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function i1(t) {
  let r, e, n, o = ir(
    /*items*/
    t[9]
  ), i = [];
  for (let l = 0; l < o.length; l += 1)
    i[l] = rc(tc(t, o, l));
  const s = (l) => x(i[l], 1, 1, () => {
    i[l] = null;
  });
  let a = (
    /*separator*/
    (t[5] || /*lineSeparator*/
    t[6]) && nc(t)
  );
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      r = gr(), a && a.c(), e = Qt();
    },
    m(l, u) {
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(l, u);
      J(l, r, u), a && a.m(l, u), J(l, e, u), n = !0;
    },
    p(l, u) {
      if (u[0] & /*items, childLayoutParams*/
      768) {
        o = ir(
          /*items*/
          l[9]
        );
        let c;
        for (c = 0; c < o.length; c += 1) {
          const f = tc(l, o, c);
          i[c] ? (i[c].p(f, u), L(i[c], 1)) : (i[c] = rc(f), i[c].c(), L(i[c], 1), i[c].m(r.parentNode, r));
        }
        for (sr(), c = o.length; c < i.length; c += 1)
          s(c);
        lr();
      }
      /*separator*/
      l[5] || /*lineSeparator*/
      l[6] ? a ? (a.p(l, u), u[0] & /*separator, lineSeparator*/
      96 && L(a, 1)) : (a = nc(l), a.c(), L(a, 1), a.m(e.parentNode, e)) : a && (sr(), x(a, 1, 1, () => {
        a = null;
      }), lr());
    },
    i(l) {
      if (!n) {
        for (let u = 0; u < o.length; u += 1)
          L(i[u]);
        L(a), n = !0;
      }
    },
    o(l) {
      i = i.filter(o1);
      for (let u = 0; u < i.length; u += 1)
        x(i[u]);
      x(a), n = !1;
    },
    d(l) {
      l && (G(r), G(e)), on(i, l), a && a.d(l);
    }
  };
}
function s1(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht(
        "container",
        Yu,
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
      $$slots: { default: [i1] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = ht(
        "container",
        Yu,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
const l1 = {
  start: "start",
  center: "center",
  end: "end",
  // 'space-*' values doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, a1 = {
  start: "start",
  center: "center",
  end: "end",
  baseline: "baseline",
  // 'space-*' doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, oc = ["rounded_rectangle", "circle"];
function u1(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, O, ne, de, T, X, le, C, D, M = j, W = () => (M(), M = S(k, (pt) => e(45, D = pt)), k), Q, me = j, Ee = () => (me(), me = S(H, (pt) => e(46, Q = pt)), H), ve, he = j, Se = () => (he(), he = S(N, (pt) => e(47, ve = pt)), N), Z, et = j, Je = () => (et(), et = S(w, (pt) => e(48, Z = pt)), w), qe, be = j, Te = () => (be(), be = S(p, (pt) => e(49, qe = pt)), p), ue, ge = j, ce = () => (ge(), ge = S(m, (pt) => e(50, ue = pt)), m), re, ae = j, oe = () => (ae(), ae = S(f, (pt) => e(51, re = pt)), f), we, Re = j, Ge = () => (Re(), Re = S(c, (pt) => e(52, we = pt)), c), ee, Oe = j, Ne = () => (Oe(), Oe = S(h, (pt) => e(53, ee = pt)), h), nt, at = j, tt = () => (at(), at = S(_, (pt) => e(54, nt = pt)), _), yt, rt, Mt = j, ft = () => (Mt(), Mt = S(u, (pt) => e(55, rt = pt)), u), K, _e = j, st = () => (_e(), _e = S(l, (pt) => e(56, K = pt)), l), Pe, I = j, jt = () => (I(), I = S($e, (pt) => e(57, Pe = pt)), $e), lt, Et = j, Dt = () => (Et(), Et = S(a, (pt) => e(58, lt = pt)), a), ot, q = j, Tt = () => (q(), q = S(s, (pt) => e(59, ot = pt)), s), Ft, Kt = j, Xt = () => (Kt(), Kt = S(i, (pt) => e(60, Ft = pt)), i);
  t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => et()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => at()), t.$$.on_destroy.push(() => Mt()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => Et()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => Kt());
  let { componentContext: je } = r, { layoutParams: Ke = void 0 } = r;
  const _t = Dr(Kr), Fe = _t.direction;
  yn(t, Fe, (pt) => e(10, yt = pt));
  let $e, Be = "vertical", Vt = "start", ze = "start", mt = null, Ut = null, It, hr = {}, De = 0, kt = 0, ar = !1;
  function rr() {
    e(2, Be = "vertical"), e(3, Vt = "start"), e(4, ze = "start"), e(7, It = void 0), e(32, De = 0), e(33, kt = 0), e(34, ar = !1);
  }
  function er(pt) {
    e(0, je = e(35, vr = {
      ...je,
      json: {
        ...je.json,
        items: pt.filter(zo)
      }
    }));
  }
  let mr = [], vr, tr = {}, nr, Rt;
  return sn(() => {
    mr.forEach((pt) => {
      pt.destroy();
    });
  }), t.$$set = (pt) => {
    "componentContext" in pt && e(0, je = pt.componentContext), "layoutParams" in pt && e(1, Ke = pt.layoutParams);
  }, t.$$.update = () => {
    var pt, xt, ie, yr, kr, Ct, Tr, Br, cr, ut, vt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(44, n = je.origJson), t.$$.dirty[1] & /*origJson*/
    8192 && n && rr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(43, o = je.json.items), t.$$.dirty[0] & /*componentContext*/
    1 && Xt(e(29, i = typeof ((pt = je.json.item_builder) == null ? void 0 : pt.data) == "string" ? je.getDerivedFromVars((xt = je.json.item_builder) == null ? void 0 : xt.data, void 0, !0) : (ie = je.json.item_builder) != null && ie.data ? Jo(je.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && Tt(e(28, s = je.getDerivedFromVars(je.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(27, a = je.getDerivedFromVars(je.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(26, l = je.getDerivedFromVars(je.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(25, u = je.getDerivedFromVars(je.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(24, c = je.getDerivedFromVars(je.json.separator))), t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(23, f = je.getDerivedFromVars(je.json.line_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && tt(e(22, _ = je.getDerivedFromVars(je.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Ne(e(21, h = je.getDerivedFromVars(je.json.line_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(20, m = je.getDerivedFromVars(je.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(19, p = je.getDerivedFromVars(je.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && Je(e(18, w = je.getDerivedFromVars(je.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && W(e(17, k = je.getDerivedFromVars(je.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && Se(e(16, N = je.getDerivedFromVars(je.json.max_width))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(15, H = je.getDerivedFromVars(je.json.responsive))), t.$$.dirty[0] & /*componentContext, items*/
    513 | t.$$.dirty[1] & /*$jsonItemBuilderData, jsonItems, prevContext*/
    536875024) {
      let Gt = [];
      if (je.json.item_builder && Array.isArray(Ft) && Array.isArray(je.json.item_builder.prototypes)) {
        const fe = je.json.item_builder;
        Gt = kl(Ft, _t, je, fe);
      } else
        Gt = (Array.isArray(o) && o || []).map((fe, wt) => ({
          div: fe,
          key: fe.id || { index: wt, data: fe }
        }));
      const Zt = new Set(mr), ur = /* @__PURE__ */ new Map();
      let dt = !1;
      vr === je && mr.forEach((fe) => {
        fe.key && (typeof fe.key == "string" && ur.has(fe.key) ? dt || (dt = !0, je.logError(Y(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: fe.key } }))) : ur.set(
          typeof fe.key == "string" ? fe.key : fe.key.index,
          fe
        ));
      }), e(9, mr = Gt.map((fe, wt) => {
        let or = !dt && ur.get(fe.id), Yt = ur.get(wt);
        return !or && !fe.id && typeof fe.key == "object" && typeof (Yt == null ? void 0 : Yt.key) == "object" && Ji(Yt.key.data, fe.key.data) && (or = Yt), or ? (Zt.delete(or), or) : je.produceChildContext(fe.div, {
          path: wt,
          variables: fe.vars,
          id: fe.id,
          key: fe.key
        });
      }));
      for (const fe of Zt)
        fe.destroy();
      e(35, vr = je);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    513) {
      let Gt = [];
      mr.forEach((Zt) => {
        Gt.push(je.getDerivedFromVars({
          width: Zt.json.width,
          height: Zt.json.height
        }));
      }), jt(e(11, $e = Gi(Gt, (Zt) => [...Zt])));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonOrientation*/
    268435456 && e(2, Be = G0(ot, Be)), t.$$.dirty[1] & /*$jsonLayoutMode*/
    134217728 && e(38, O = lt === "wrap"), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(42, ne = Be !== "horizontal" && !O), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(41, de = Be !== "vertical" && !O), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(40, T = Be === "overlap" && !Pe.every(W0)), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(39, X = Be === "overlap" && !Pe.every(U0)), t.$$.dirty[0] & /*contentVAlign*/
    8 | t.$$.dirty[1] & /*$jsonContentVAlign*/
    33554432 && e(3, Vt = Y0(K, Vt)), t.$$.dirty[0] & /*$direction, contentHAlign*/
    1040 | t.$$.dirty[1] & /*$jsonContentHAlign*/
    16777216 && e(4, ze = X0(rt, yt, ze)), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    8388610 && e(32, De = tn(nt, De)), t.$$.dirty[1] & /*$jsonLineSpacing, lineSpacing*/
    4194308 && e(33, kt = tn(ee, kt)), t.$$.dirty[0] & /*orientation, separator, componentContext*/
    37 | t.$$.dirty[1] & /*$jsonSeparator, itemSpacing*/
    2097154)
      if (we != null && we.style && Be !== "overlap" && Qu()) {
        const Gt = ao(we.style, oc, (mt == null ? void 0 : mt.style) || null);
        Gt ? (e(5, mt = {
          show_at_start: !!((yr = we.show_at_start) != null && yr),
          show_at_end: !!((kr = we.show_at_end) != null && kr),
          show_between: !!((Ct = we.show_between) == null || Ct),
          style: Gt,
          margins: Xu(we.margins)
        }), mt.show_between && De && je.logError(Y(new Error("item_spacing will be ignored due to the 'separator' property."), { level: "warn" }))) : e(5, mt = null);
      } else
        e(5, mt = null);
    if (t.$$.dirty[0] & /*orientation, lineSeparator, componentContext*/
    69 | t.$$.dirty[1] & /*$jsonLineSeparator, lineSpacing*/
    1048580)
      if (re != null && re.style && Be !== "overlap" && Qu()) {
        const Gt = ao(re.style, oc, (Ut == null ? void 0 : Ut.style) || null);
        Gt ? (e(6, Ut = {
          show_at_start: !!((Tr = re.show_at_start) != null && Tr),
          show_at_end: !!((Br = re.show_at_end) != null && Br),
          show_between: !!((cr = re.show_between) == null || cr),
          style: Gt,
          margins: Xu(re.margins)
        }), Ut.show_between && kt && je.logError(Y(new Error("line_spacing will be ignored due to the 'line_separator' property."), { level: "warn" }))) : e(6, Ut = null);
      } else
        e(6, Ut = null);
    if (t.$$.dirty[0] & /*separator, lineSeparator, orientation*/
    100 && e(14, le = mt || Ut ? R0(Be, mt, Ut) : null), t.$$.dirty[1] & /*$jsonAspect*/
    524288) {
      const Gt = ue == null ? void 0 : ue.ratio;
      Gt && zn(Gt) ? e(7, It = Gt) : e(7, It = void 0);
    }
    if (t.$$.dirty[0] & /*orientation, contentHAlign, contentVAlign, layoutParams, aspect, childLayoutParams*/
    414 | t.$$.dirty[1] & /*wrap, $jsonWidth, $jsonHeight, supportWidthWrapContent, supportHeightWrapContent, stretchWidth, stretchHeight*/
    397184) {
      let Gt = {};
      Be === "overlap" && (Gt.overlapParent = !0), Be !== "horizontal" && (Gt.parentHAlign = O ? "start" : l1[ze]), Be !== "vertical" && (Gt.parentVAlign = O ? "start" : a1[Vt]);
      const Zt = (qe == null ? void 0 : qe.type) === "wrap_content" || (qe == null ? void 0 : qe.type) === "match_parent" && (Ke == null ? void 0 : Ke.parentHorizontalWrapContent), ur = !Z || Z.type === "wrap_content" || Z.type === "match_parent" && (Ke == null ? void 0 : Ke.parentVerticalWrapContent);
      !ne && Zt && (Gt.parentHorizontalWrapContent = !0), !It && !de && ur && (Gt.parentVerticalWrapContent = !0), Zt || (Gt.parentContainerKnownWidth = !0), ur || (Gt.parentContainerKnownHeight = !0), Gt.stretchWidth = T, Gt.stretchHeight = X, Be === "horizontal" && (Gt.parentContainerOrientation = "horizontal"), Be === "vertical" && (Gt.parentContainerOrientation = "vertical"), O && (Gt.parentContainerWrap = !0), e(8, hr = xo(Gt, hr));
    }
    if (t.$$.dirty[1] & /*$jsonMaxWidth*/
    65536 && e(34, ar = (ve == null ? void 0 : ve.type) === "fixed"), t.$$.dirty[0] & /*orientation, contentVAlign, contentHAlign*/
    28 | t.$$.dirty[1] & /*$jsonResponsive, wrap, $jsonClipToBounds, isFixedContainer, responsiveMobileHeight, responsiveTabletHeight*/
    49384) {
      let Gt, Zt;
      if (e(36, nr = void 0), e(37, Rt = void 0), Q) {
        const ur = Q == null ? void 0 : Q.mobile, dt = Q == null ? void 0 : Q.tablet;
        if (ur != null && ur.orientation && (Gt = String(ur.orientation)), dt != null && dt.orientation && (Zt = String(dt.orientation)), ((ut = ur == null ? void 0 : ur.height) == null ? void 0 : ut.type) === "fixed" && ur.height.value !== void 0) {
          const fe = tn(ur.height.value, 0);
          e(36, nr = fe > 0 ? fe : void 0);
        }
        if (((vt = dt == null ? void 0 : dt.height) == null ? void 0 : vt.type) === "fixed" && dt.height.value !== void 0) {
          const fe = tn(dt.height.value, 0);
          e(37, Rt = fe > 0 ? fe : void 0);
        }
      }
      e(12, tr = {
        orientation: Be,
        valign: Vt,
        halign: ze,
        wrap: O,
        overflow: D === !1 || D === 0 ? "visible" : void 0,
        "fixed-container": ar,
        "responsive-mobile-vertical": Gt === "vertical",
        "responsive-mobile-horizontal": Gt === "horizontal",
        "responsive-tablet-vertical": Zt === "vertical",
        "responsive-tablet-horizontal": Zt === "horizontal",
        "responsive-mobile-has-height": nr !== void 0,
        "responsive-tablet-has-height": Rt !== void 0
      });
    }
    t.$$.dirty[0] & /*separator, lineSeparator, orientation, aspect*/
    228 | t.$$.dirty[1] & /*itemSpacing, lineSpacing, responsiveMobileHeight, responsiveTabletHeight*/
    102 && e(13, C = {
      gap: mt || Ut || De || kt ? H0({
        orientation: Be,
        separator: mt,
        lineSeparator: Ut,
        itemSpacing: De,
        lineSpacing: kt
      }) : void 0,
      "aspect-ratio": It,
      "--responsive-mobile-height": nr !== void 0 ? pe(nr) : void 0,
      "--responsive-tablet-height": Rt !== void 0 ? pe(Rt) : void 0
    });
  }, [
    je,
    Ke,
    Be,
    Vt,
    ze,
    mt,
    Ut,
    It,
    hr,
    mr,
    yt,
    $e,
    tr,
    C,
    le,
    H,
    N,
    k,
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
    Fe,
    er,
    De,
    kt,
    ar,
    vr,
    nr,
    Rt,
    O,
    X,
    T,
    de,
    ne,
    o,
    n,
    D,
    Q,
    ve,
    Z,
    qe,
    ue,
    re,
    we,
    ee,
    nt,
    rt,
    K,
    Pe,
    lt,
    ot,
    Ft
  ];
}
class c1 extends Or {
  constructor(r) {
    super(), Lr(this, r, u1, s1, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const f1 = "appkit-separator", d1 = "appkit-separator_orientation_horizontal", _1 = "appkit-separator_orientation_vertical", p1 = "appkit-separator__inner", ea = {
  separator: f1,
  separator_orientation_horizontal: d1,
  separator_orientation_vertical: _1,
  separator__inner: p1
};
function ja(t, r) {
  return t === "vertical" || t === "horizontal" ? t : r;
}
function ic(t) {
  let r, e;
  return {
    c() {
      r = Me("span"), g(r, "class", ea.separator__inner), g(r, "style", e = _r(
        /*style*/
        t[3]
      ));
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o & /*style*/
      8 && e !== (e = _r(
        /*style*/
        n[3]
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function g1(t) {
  let r, e = (
    /*hasContent*/
    t[4] && ic(t)
  );
  return {
    c() {
      e && e.c(), r = Qt();
    },
    m(n, o) {
      e && e.m(n, o), J(n, r, o);
    },
    p(n, o) {
      /*hasContent*/
      n[4] ? e ? e.p(n, o) : (e = ic(n), e.c(), e.m(r.parentNode, r)) : e && (e.d(1), e = null);
    },
    d(n) {
      n && G(r), e && e.d(n);
    }
  };
}
function h1(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht(
        "separator",
        ea,
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
      $$slots: { default: [g1] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, [o]) {
      const i = {};
      o & /*mods*/
      4 && (i.cls = ht(
        "separator",
        ea,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function m1(t, r, e) {
  let n, o, i, s, a, l, u, c, f = j, _ = () => (f(), f = S(o, (N) => e(11, c = N)), o);
  t.$$.on_destroy.push(() => f());
  let { componentContext: h } = r, { layoutParams: m = void 0 } = r, p = "horizontal", w = "rgba(0,0,0,0.08)";
  function k() {
    e(6, p = "horizontal"), e(7, w = "rgba(0,0,0,0.08)");
  }
  return t.$$set = (N) => {
    "componentContext" in N && e(0, h = N.componentContext), "layoutParams" in N && e(1, m = N.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(10, n = h.origJson), t.$$.dirty & /*origJson*/
    1024 && n && k(), t.$$.dirty & /*componentContext*/
    1 && _(e(5, o = h.getDerivedFromVars(h.json.delimiter_style))), t.$$.dirty & /*$jsonDelimiterStyle, orientation*/
    2112 && e(6, p = ja(c == null ? void 0 : c.orientation, p)), t.$$.dirty & /*$jsonDelimiterStyle*/
    2048 && e(4, i = !(c != null && c.color && (c.color === "transparent" || c.color.length === 9 && c.color.indexOf("#00") === 0))), t.$$.dirty & /*$jsonDelimiterStyle, background*/
    2176 && e(7, w = pr(c == null ? void 0 : c.color, 1, w)), t.$$.dirty & /*orientation*/
    64 && e(9, s = p === "horizontal" ? "100%" : pe(1)), t.$$.dirty & /*orientation*/
    64 && e(8, a = p === "horizontal" ? pe(1) : "100%"), t.$$.dirty & /*background, width, height*/
    896 && e(3, l = { background: w, width: s, height: a }), t.$$.dirty & /*orientation*/
    64 && e(2, u = { orientation: p });
  }, [
    h,
    m,
    u,
    l,
    i,
    o,
    p,
    w,
    a,
    s,
    n,
    c
  ];
}
class b1 extends Or {
  constructor(r) {
    super(), Lr(this, r, m1, h1, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const y1 = "appkit-image", w1 = "appkit-image__image", k1 = "appkit-image_error", v1 = "appkit-image_aspect", j1 = "appkit-image_loaded", ta = {
  image: y1,
  "image_is-width-content": "appkit-image_is-width-content",
  "image_is-height-content": "appkit-image_is-height-content",
  image__image: w1,
  image_error: k1,
  "image_is-rtl-mirror": "appkit-image_is-rtl-mirror",
  image_aspect: v1,
  "image_aspect-content": "appkit-image_aspect-content",
  image_loaded: j1,
  "divkit-image-appearance": "appkit-divkit-image-appearance",
  "image_before-appearance": "appkit-image_before-appearance"
};
function C1(t, r, e) {
  const n = t.content_alignment_horizontal, o = t.content_alignment_vertical;
  return n && n !== "left" && n !== "center" && n !== "right" && n !== "start" && n !== "end" || o && o !== "top" && o !== "center" && o !== "bottom" ? e : Gd({
    content_alignment_horizontal: n,
    content_alignment_vertical: o
  }, r);
}
function Zd(t) {
  return t.startsWith("data:") ? Zl(t) : `data:image/jpg;base64,${Zl(t)}`;
}
function E1(t, r, e) {
  let { componentContext: n } = r;
  const o = Dr(Kr);
  let i = null;
  function s() {
    i && i.update(n);
  }
  return Zn(() => {
    n.fakeElement || (i = Jd(null, o, n));
  }), _l(s), sn(() => {
    i && i.destroy();
  }), t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext);
  }, [n];
}
class Mn extends Or {
  constructor(r) {
    super(), Lr(this, r, E1, null, Sr, { componentContext: 0 });
  }
}
function A1(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function S1(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht(
        "image",
        ta,
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
          V1,
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = ht(
        "image",
        ta,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function sc(t) {
  let r, e, n, o, i, s, a, l;
  return {
    c() {
      r = Me("img"), g(r, "class", ta.image__image), Xn(r.src, e = /*state*/
      t[2] === os ? ra : (
        /*imageUrl*/
        t[3]
      )) || g(r, "src", e), g(r, "loading", n = /*$jsonPreloadRequired*/
      t[31] || /*highPrority*/
      t[10] ? "eager" : "lazy"), g(r, "decoding", o = /*highPrority*/
      t[10] ? "sync" : "async"), g(r, "style", i = _r({
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
      J(u, r, c), t[70](r), a || (l = [
        Qe(
          r,
          "load",
          /*onLoad*/
          t[33]
        ),
        Qe(
          r,
          "error",
          /*onError*/
          t[34]
        )
      ], a = !0);
    },
    p(u, c) {
      c[0] & /*state, imageUrl*/
      12 && !Xn(r.src, e = /*state*/
      u[2] === os ? ra : (
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
      122880 && i !== (i = _r({
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
      u && G(r), t[70](null), a = !1, Jr(l);
    }
  };
}
function V1(t) {
  let r = (
    /*svgFilterId*/
    t[5]
  ), e, n = sc(t);
  return {
    c() {
      n.c(), e = Qt();
    },
    m(o, i) {
      n.m(o, i), J(o, e, i);
    },
    p(o, i) {
      i[0] & /*svgFilterId*/
      32 && Sr(r, r = /*svgFilterId*/
      o[5]) ? (n.d(1), n = sc(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && G(e), n.d(o);
    }
  };
}
function F1(t) {
  let r, e, n, o;
  const i = [S1, A1], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[9] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (sr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), lr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
const ra = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", I1 = "empty://", D1 = "rgba(0,0,0,0.08)", ci = 0, Ml = 1, os = 2, lc = /\.gif($|\?)/i, T1 = "data:image/gif", ac = 'A Gif image was used for the "Image" component. The animation will be played on the web platform, but it does not match the behavior of other platforms.';
function M1(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, O, ne, de, T, X, le, C, D = j, M = () => (D(), D = S(N, (dt) => e(53, C = dt)), N), W, Q, me = j, Ee = () => (me(), me = S(k, (dt) => e(55, Q = dt)), k), ve, he = j, Se = () => (he(), he = S(w, (dt) => e(56, ve = dt)), w), Z, et = j, Je = () => (et(), et = S(p, (dt) => e(57, Z = dt)), p), qe, be = j, Te = () => (be(), be = S(_, (dt) => e(58, qe = dt)), _), ue, ge = j, ce = () => (ge(), ge = S(m, (dt) => e(59, ue = dt)), m), re, ae = j, oe = () => (ae(), ae = S(h, (dt) => e(60, re = dt)), h), we, Re = j, Ge = () => (Re(), Re = S(f, (dt) => e(61, we = dt)), f), ee, Oe = j, Ne = () => (Oe(), Oe = S(c, (dt) => e(62, ee = dt)), c), nt, at = j, tt = () => (at(), at = S(u, (dt) => e(63, nt = dt)), u), yt, rt = j, Mt = () => (rt(), rt = S(l, (dt) => e(64, yt = dt)), l), ft, K = j, _e = () => (K(), K = S(a, (dt) => e(65, ft = dt)), a), st, Pe = j, I = () => (Pe(), Pe = S(s, (dt) => e(66, st = dt)), s), jt, lt = j, Et = () => (lt(), lt = S(O, (dt) => e(67, jt = dt)), O), Dt, ot = j, q = () => (ot(), ot = S(o, (dt) => e(68, Dt = dt)), o), Tt, Ft = j, Kt = () => (Ft(), Ft = S(i, (dt) => e(69, Tt = dt)), i), Xt, je = j, Ke = () => (je(), je = S(H, (dt) => e(31, Xt = dt)), H);
  t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => et()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => at()), t.$$.on_destroy.push(() => rt()), t.$$.on_destroy.push(() => K()), t.$$.on_destroy.push(() => Pe()), t.$$.on_destroy.push(() => lt()), t.$$.on_destroy.push(() => ot()), t.$$.on_destroy.push(() => Ft()), t.$$.on_destroy.push(() => je());
  let { componentContext: _t } = r, { layoutParams: Fe = void 0 } = r;
  const $e = Dr(Kr), Be = $e.direction;
  yn(t, Be, (dt) => e(54, W = dt));
  let Vt, ze = ci, mt = !1, Ut = D1, It = !1, hr, De = "", kt = "none", ar = "50% 50%", rr = !1, er = "center", mr, vr, tr = "source_in", nr = "", Rt = "", pt = 0, xt = 0, ie = 0, yr = "", kr = "", Ct = !1, Tr = !1, Br = !1;
  function cr() {
    e(4, mr = void 0), e(40, rr = !1), e(38, kt = "none"), e(39, ar = "50% 50%"), e(43, tr = "source_in"), e(51, Tr = !1), e(10, Br = !1);
  }
  function ut(dt) {
    e(2, ze = ci);
  }
  function vt(dt) {
    e(39, ar = C1(dt, W, ar));
  }
  function Gt() {
    ze === ci && e(2, ze = Ml);
  }
  function Zt() {
    ze === ci && e(2, ze = os);
  }
  sn(() => {
    $e.removeSvgFilter(vr, tr);
  });
  function ur(dt) {
    Vr[dt ? "unshift" : "push"](() => {
      Vt = dt, e(8, Vt);
    });
  }
  return t.$$set = (dt) => {
    "componentContext" in dt && e(0, _t = dt.componentContext), "layoutParams" in dt && e(1, Fe = dt.layoutParams);
  }, t.$$.update = () => {
    var dt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(52, n = _t.origJson), t.$$.dirty[1] & /*origJson*/
    2097152 && n && cr(), t.$$.dirty[0] & /*componentContext*/
    1 && q(e(30, o = _t.getDerivedFromVars(_t.json.image_url))), t.$$.dirty[0] & /*componentContext*/
    1 && Kt(e(29, i = _t.getDerivedFromVars(_t.json.gif_url))), t.$$.dirty[0] & /*componentContext*/
    1 && I(e(28, s = _t.getDerivedFromVars(_t.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(27, a = _t.getDerivedFromVars(_t.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && Mt(e(26, l = _t.getDerivedFromVars(_t.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && tt(e(25, u = _t.getDerivedFromVars(_t.json.preview_url))), t.$$.dirty[0] & /*componentContext*/
    1 && Ne(e(24, c = _t.getDerivedFromVars(_t.json.placeholder_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(23, f = _t.getDerivedFromVars(_t.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(22, _ = _t.getDerivedFromVars({
      content_alignment_horizontal: _t.json.content_alignment_horizontal,
      content_alignment_vertical: _t.json.content_alignment_vertical
    }))), t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(21, h = _t.getDerivedFromVars(_t.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(20, m = _t.getDerivedFromVars(_t.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && Je(e(19, p = _t.getDerivedFromVars(_t.json.tint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Se(e(18, w = _t.getDerivedFromVars(_t.json.tint_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(17, k = _t.getDerivedFromVars(_t.json.appearance_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(16, N = _t.getDerivedFromVars(_t.json.filters))), t.$$.dirty[0] & /*componentContext*/
    1 && Ke(e(15, H = _t.getDerivedFromVars(_t.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && Et(e(14, O = _t.getDerivedFromVars(_t.json.high_priority_preview_show))), t.$$.dirty[0] & /*componentContext, imageUrl*/
    9 | t.$$.dirty[1] & /*isEmpty*/
    16 | t.$$.dirty[2] & /*$jsonGifUrl, $jsonImageUrl*/
    192) {
      const fe = _t.json.type === "gif";
      let wt = fe ? Tt : Dt;
      e(35, mt = wt === I1), mt && (wt = ra), e(3, hr = wt), !fe && hr && lc.test(hr) && _t.logError(Y(new Error(ac), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*imageUrl*/
    8 && ut(), t.$$.dirty[1] & /*highPriorityPreview*/
    1048576 | t.$$.dirty[2] & /*$jsonHighPriorityPreviewShow*/
    32 && e(51, Tr = nn(jt, Tr)), t.$$.dirty[0] & /*imageUrl, componentContext*/
    9 && (hr ? e(9, It = !1) : (e(9, It = !0), _t.logError(Y(new Error(`Missing "${_t.json.type === "gif" ? "gif_url" : "image_url"}" for "${_t.json.type}"`))))), t.$$.dirty[2] & /*$jsonWidth*/
    16 && e(7, ne = (st == null ? void 0 : st.type) === "wrap_content"), t.$$.dirty[2] & /*$jsonHeight*/
    8 && e(6, de = (ft == null ? void 0 : ft.type) === "wrap_content"), t.$$.dirty[0] & /*componentContext, state*/
    5 | t.$$.dirty[1] & /*isEmpty, highPriorityPreview*/
    1048592 | t.$$.dirty[2] & /*$jsonPreview, $jsonPreviewUrl*/
    6) {
      const fe = _t.json.type === "gif", wt = yt, or = nt;
      (ze === ci || ze === os || mt) && (wt || or) ? (e(37, De = `url("${or || Zd(wt || "")}")`), e(10, Br = Tr)) : (e(37, De = ""), e(10, Br = !1)), !fe && (or && lc.test(or) || wt && wt.startsWith(T1)) && _t.logError(Y(new Error(ac), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*state*/
    4 | t.$$.dirty[1] & /*isEmpty, placeholderColor*/
    48 | t.$$.dirty[2] & /*$jsonPlaceholderColor*/
    1 && (ze === ci || ze === os || mt ? e(36, Ut = pr(ee, 1, Ut)) : e(36, Ut = "")), t.$$.dirty[1] & /*$jsonScale, scale*/
    1073741952 && e(38, kt = Ud(we) || kt), t.$$.dirty[1] & /*$jsonPosition*/
    134217728 && vt(qe), t.$$.dirty[1] & /*$jsonA11y*/
    536870912 && e(13, T = (re == null ? void 0 : re.description) || ""), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAspect, aspectContent, $jsonPosition*/
    402653696) {
      e(41, er = "center");
      const fe = ue == null ? void 0 : ue.ratio;
      fe && zn(fe) ? (e(4, mr = fe), e(40, rr = ((dt = _t.json.width) == null ? void 0 : dt.type) === "wrap_content"), rr && (qe.content_alignment_vertical === "top" ? e(41, er = "top") : qe.content_alignment_vertical === "bottom" && e(41, er = "bottom"))) : e(4, mr = void 0);
    }
    if (t.$$.dirty[1] & /*$jsonTintColor, $jsonTintMode, tintMode, tintColor*/
    100669440) {
      const fe = Z, wt = fe ? pr(fe) : void 0, or = Yd(ve, tr);
      (wt !== vr || or !== tr) && ($e.removeSvgFilter(vr, tr), e(5, nr = wt ? $e.addSvgFilter(wt, or) : ""), e(42, vr = wt), e(43, tr = or));
    }
    if (t.$$.dirty[1] & /*$jsonAppearanceAnimation*/
    16777216 && Q && Q.type === "fade") {
      const fe = Q;
      e(44, Rt = qd(fe.interpolator, "ease_in_out").replace(/_/g, "-")), e(47, ie = tn(fe.duration, 300)), e(46, xt = tn(fe.start_delay, 0)), e(45, pt = tn(fe.alpha, 0));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonFilters, $direction*/
    12582912) {
      let fe = "", wt = "";
      Array.isArray(C) && C.length && (fe = Kd(C, _t.logError)), fe && (wt = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"), e(48, yr = fe), e(49, kr = wt), e(50, Ct = W === "rtl" && Array.isArray(C) && C.some((or) => or.type === "rtl_mirror"));
    }
    t.$$.dirty[0] & /*aspectRatio, isWidthContent, isHeightContent, state*/
    212 | t.$$.dirty[1] & /*aspectContent, aspectContentVAlign, animationInterpolator, isRTLMirror*/
    534016 && e(12, X = {
      aspect: mr !== void 0,
      "aspect-content": rr,
      "aspect-valign": er !== "center" ? er : void 0,
      "is-width-content": ne,
      "is-height-content": de,
      loaded: ze === Ml,
      "before-appearance": !!Rt && ze === ci,
      "is-rtl-mirror": Ct
    }), t.$$.dirty[0] & /*aspectRatio, state, svgFilterId*/
    52 | t.$$.dirty[1] & /*backgroundImage, placeholderColor, scale, filterClipPath, position, filter, animationInterpolator, animationFadeStart, animationDelay, animationDuration*/
    516576 && e(11, le = {
      // Image preview shows, if loading of original image is failed
      "background-image": De,
      "background-color": De ? void 0 : Ut,
      "background-size": wm(kt),
      "clip-path": kr || void 0,
      "object-fit": kt,
      "object-position": ar,
      "aspect-ratio": mr,
      filter: [
        ze === Ml && nr ? `url(#${nr})` : "",
        yr
      ].filter(Boolean).join(" "),
      "--divkit-appearance-interpolator": Rt || void 0,
      "--divkit-appearance-fade-start": Rt ? pt : void 0,
      "--divkit-appearance-delay": Rt ? `${xt}ms` : void 0,
      "--divkit-appearance-duration": Rt ? `${ie}ms` : void 0
    });
  }, [
    _t,
    Fe,
    ze,
    hr,
    mr,
    nr,
    de,
    ne,
    Vt,
    It,
    Br,
    le,
    X,
    T,
    O,
    H,
    N,
    k,
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
    o,
    Xt,
    Be,
    Gt,
    Zt,
    mt,
    Ut,
    De,
    kt,
    ar,
    rr,
    er,
    vr,
    tr,
    Rt,
    pt,
    xt,
    ie,
    yr,
    kr,
    Ct,
    Tr,
    n,
    C,
    W,
    Q,
    ve,
    Z,
    qe,
    ue,
    re,
    we,
    ee,
    nt,
    yt,
    ft,
    st,
    jt,
    Dt,
    Tt,
    ur
  ];
}
class uc extends Or {
  constructor(r) {
    super(), Lr(this, r, M1, F1, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const P1 = "appkit-grid", N1 = "appkit-grid_halign_start", z1 = "appkit-grid_halign_center", L1 = "appkit-grid_halign_end", O1 = "appkit-grid_valign_start", B1 = "appkit-grid_valign_center", R1 = "appkit-grid_valign_end", cc = {
  grid: P1,
  grid_halign_start: N1,
  grid_halign_center: z1,
  grid_halign_end: L1,
  grid_valign_start: O1,
  grid_valign_center: B1,
  grid_valign_end: R1
};
function fc(t) {
  return t > 0 && t < 1;
}
function dc(t) {
  return String(Math.ceil(t * 1e3) / 1e3);
}
function _c(t, r, e, n) {
  if (t.some(fc)) {
    const l = Math.max(...t.filter(fc).map((u) => 1 / u));
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
    i && !e[l] ? a[l] = `minmax(${pe(i * t[l] / s)},${dc(t[l])}fr)` : o || !e[l] && t[l] ? a[l] = `${dc(t[l])}fr` : a[l] = "auto";
  return a.join(" ");
}
function pc(t, r, e) {
  const n = t.slice();
  return n[33] = r[e], n;
}
function H1(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function W1(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht(
        "grid",
        cc,
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
      $$slots: { default: [U1] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = ht(
        "grid",
        cc,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function gc(t) {
  let r, e;
  return r = new Jn({
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function U1(t) {
  let r, e, n = ir(
    /*resultItems*/
    t[5]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = gc(pc(t, n, s));
  const i = (s) => x(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = Qt();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      J(s, r, a), e = !0;
    },
    p(s, a) {
      if (a[0] & /*resultItems*/
      32) {
        n = ir(
          /*resultItems*/
          s[5]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = pc(s, n, l);
          o[l] ? (o[l].p(u, a), L(o[l], 1)) : (o[l] = gc(u), o[l].c(), L(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (sr(), l = n.length; l < o.length; l += 1)
          i(l);
        lr();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          L(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        x(o[a]);
      e = !1;
    },
    d(s) {
      s && G(r), on(o, s);
    }
  };
}
function G1(t) {
  let r, e, n, o;
  const i = [W1, H1], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (sr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), lr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function J1(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _ = j, h = () => (_(), _ = S(a, (ce) => e(27, f = ce)), a), m, p = j, w = () => (p(), p = S(s, (ce) => e(28, m = ce)), s), k, N = j, H = () => (N(), N = S(W, (ce) => e(29, k = ce)), W), O, ne = j, de = () => (ne(), ne = S(i, (ce) => e(30, O = ce)), i);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => ne());
  let { componentContext: T } = r, { layoutParams: X = void 0 } = r;
  const C = Dr(Kr).direction;
  yn(t, C, (ce) => e(26, c = ce));
  let D = !1, M = 0, W, Q, me = [], Ee = [], ve = [], he = [], Se = [], Z = [], et = 0, Je = "start", qe = "start", be = [], Te;
  function ue() {
    e(3, D = !1), e(13, M = 0), e(21, Je = "start"), e(22, qe = "start");
  }
  function ge(ce) {
    e(0, T = e(23, Te = {
      ...T,
      json: {
        ...T.json,
        items: ce.filter(zo)
      }
    }));
  }
  return sn(() => {
    be.forEach((ce) => {
      ce.destroy();
    });
  }), t.$$set = (ce) => {
    "componentContext" in ce && e(0, T = ce.componentContext), "layoutParams" in ce && e(1, X = ce.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(25, n = T.origJson), t.$$.dirty[0] & /*origJson*/
    33554432 && n && ue(), t.$$.dirty[0] & /*componentContext*/
    1 && e(24, o = Array.isArray(T.json.items) && T.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(10, i = T.getDerivedFromVars(T.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && w(e(9, s = T.getDerivedFromVars(T.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && h(e(8, a = T.getDerivedFromVars(T.json.content_alignment_horizontal))), t.$$.dirty[0] & /*$jsonColumnCount, columnCount, componentContext*/
    1073750017 && (e(13, M = Un(O, M)), M < 1 ? (e(3, D = !0), T.logError(Y(new Error("Incorrect column_count for grid")))) : e(3, D = !1)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonItems*/
    25165829) {
      const ce = new Set(be), re = /* @__PURE__ */ new Map();
      Te === T && be.forEach((ae) => {
        re.set(ae.json, ae);
      }), e(2, be = o.map((ae, oe) => {
        const we = re.get(ae);
        return we ? (ce.delete(we), we) : T.produceChildContext(ae, { path: oe });
      }));
      for (const ae of ce)
        ae.destroy();
      e(23, Te = T);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    5) {
      let ce = [];
      be.forEach((re) => {
        ce.push(T.getDerivedFromVars({
          rowSpan: re.json.row_span,
          columnSpan: re.json.column_span,
          width: re.json.width,
          height: re.json.height
        }));
      }), H(e(4, W = Gi(ce, (re) => [...re])));
    }
    if (t.$$.dirty[0] & /*items, $childStore, columnCount, columnsWeight, rowsWeight, columnsMinWidth, rowsMinHeight*/
    537124868) {
      const ce = {};
      let re = 0, ae = 0;
      e(14, me = []), e(15, Ee = []), e(16, ve = []), e(17, he = []), e(18, Se = []), e(19, Z = []);
      let oe = 0;
      e(5, Q = be.map((we, Re) => {
        var rt, Mt, ft, K;
        const Ge = k[Re], ee = Math.min(M, Number(Ge.columnSpan) || 1), Oe = Number(Ge.rowSpan) || 1, Ne = ((rt = Ge.width) == null ? void 0 : rt.type) === "match_parent" ? Number(Ge.width.weight || 1) / ee : 0, nt = ((Mt = Ge.height) == null ? void 0 : Mt.type) === "match_parent" ? Number(Ge.height.weight || 1) / Oe : 0, at = ((ft = Ge.width) == null ? void 0 : ft.type) === "fixed" && Ge.width.value ? Number(Ge.width.value) / ee : 0, tt = ((K = Ge.height) == null ? void 0 : K.type) === "fixed" && Ge.height.value ? Number(Ge.height.value) / Oe : 0;
        for (; ; ) {
          let _e = !0;
          e: for (let st = re; st < re + ee; ++st)
            for (let Pe = ae; Pe < ae + Oe; ++Pe)
              if (ce[st + "_" + Pe]) {
                _e = !1;
                break e;
              }
          if (_e)
            break;
          ++re, re > M - ee && (re = 0, ++ae);
        }
        const yt = { x: re, y: ae, colSpan: ee, rowSpan: Oe };
        for (let _e = re; _e < re + ee; ++_e)
          for (let st = ae; st < ae + Oe; ++st)
            ce[_e + "_" + st] = !0, (!me[_e] || me[_e] < Ne) && e(14, me[_e] = Ne, me), (!Ee[st] || Ee[st] < nt) && e(15, Ee[st] = nt, Ee), ee === 1 && (!ve[_e] || ve[_e] < at) && e(16, ve[_e] = at, ve), Oe === 1 && (!he[st] || he[st] < tt) && e(17, he[st] = tt, he), ee === 1 && at && e(18, Se[_e] = at, Se), Oe === 1 && tt && e(19, Z[_e] = tt, Z);
        return oe = Math.max(oe, ae + Oe), {
          componentContext: we,
          layoutParams: { gridArea: yt }
        };
      })), e(20, et = Math.max(ae + 1, oe));
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    270532608 && e(21, Je = wl(m, Je)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    205520896 && e(22, qe = yl(f, c, qe)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    6291456 && e(7, l = {
      valign: Je,
      halign: qe
    }), t.$$.dirty[0] & /*columnsWeight, columnsMinWidth, columnsWidth, columnCount, rowsWeight, rowsMinHeight, rowsHeight, rowCount*/
    2088960 && e(6, u = {
      "grid-template-columns": _c(me, ve, Se, M),
      "grid-template-rows": _c(Ee, he, Z, et)
    });
  }, [
    T,
    X,
    be,
    D,
    W,
    Q,
    u,
    l,
    a,
    s,
    i,
    C,
    ge,
    M,
    me,
    Ee,
    ve,
    he,
    Se,
    Z,
    et,
    Je,
    qe,
    Te,
    o,
    n,
    c,
    f,
    m,
    k,
    O
  ];
}
class q1 extends Or {
  constructor(r) {
    super(), Lr(this, r, J1, G1, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const K1 = "appkit-outer_width_content", Y1 = "appkit-outer_height_content", X1 = "appkit-gallery", Z1 = "appkit-gallery__scroller", Q1 = "appkit-gallery_scrollbar_none", x1 = "appkit-gallery_orientation_horizontal", $1 = "appkit-gallery_orientation_vertical", eb = "appkit-gallery__items", tb = "appkit-gallery__arrow", rb = "appkit-gallery__gap", co = {
  outer_width_content: K1,
  outer_height_content: Y1,
  gallery: X1,
  gallery__scroller: Z1,
  gallery_scrollbar_none: Q1,
  gallery_orientation_horizontal: x1,
  gallery_orientation_vertical: $1,
  "gallery_scroll-snap": "appkit-gallery_scroll-snap",
  "gallery__items-grid": "appkit-gallery__items-grid",
  gallery__items: eb,
  gallery__arrow: tb,
  "gallery__arrow-icon-path": "appkit-gallery__arrow-icon-path",
  gallery__gap: rb
}, nb = "appkit-arrow", ob = "appkit-arrow__icon", ib = "appkit-arrow_left", sb = "appkit-arrow_right", ho = {
  arrow: nb,
  arrow__icon: ob,
  arrow_left: ib,
  arrow_right: sb
};
function lb(t, r) {
  return t === "start" || t === "center" || t === "end" ? t : r;
}
function ab(t) {
  const r = [];
  let e = t[0], n = 1;
  for (let o = 1; o <= t.length; o++)
    t[o] !== e ? (r.push(n > 1 ? `repeat(${n}, ${e})` : e), e = t[o], n = 1) : n++;
  return r.join(" ");
}
function Vo(t, r) {
  let e = t % r;
  return e < 0 && (e += r), e;
}
const { Boolean: Qd, window: ub } = Po;
function hc(t, r, e) {
  const n = t.slice();
  return n[86] = r[e], n[87] = r, n[88] = e, n;
}
function mc(t, r, e) {
  const n = t.slice();
  return n[89] = r[e], n;
}
function bc(t) {
  let r;
  return {
    c() {
      r = Me("div"), g(r, "class", co.gallery__gap), F(
        r,
        "width",
        /*orientation*/
        t[4] === "horizontal" ? (
          /*gridGap*/
          t[12]
        ) : void 0
      ), F(
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
      J(e, r, n);
    },
    p(e, n) {
      n[0] & /*orientation, gridGap*/
      4112 && F(
        r,
        "width",
        /*orientation*/
        e[4] === "horizontal" ? (
          /*gridGap*/
          e[12]
        ) : void 0
      ), n[0] & /*orientation, gridGap*/
      4112 && F(
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
      e && G(r);
    }
  };
}
function yc(t) {
  let r, e, n, o = (
    /*item*/
    t[89].hasGapBefore && bc(t)
  );
  return e = new Jn({
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
      o && o.c(), r = gr(), Lt(e.$$.fragment);
    },
    m(i, s) {
      o && o.m(i, s), J(i, r, s), Pt(e, i, s), n = !0;
    },
    p(i, s) {
      /*item*/
      i[89].hasGapBefore ? o ? o.p(i, s) : (o = bc(i), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
      const a = {};
      s[0] & /*itemsGrid*/
      262144 && (a.componentContext = /*item*/
      i[89].componentContext), s[0] & /*childLayoutParams*/
      64 && (a.layoutParams = /*childLayoutParams*/
      i[6]), e.$set(a);
    },
    i(i) {
      n || (L(e.$$.fragment, i), n = !0);
    },
    o(i) {
      x(e.$$.fragment, i), n = !1;
    },
    d(i) {
      i && G(r), o && o.d(i), Nt(e, i);
    }
  };
}
function wc(t) {
  let r, e, n, o, i, s, a = (
    /*rowIndex*/
    t[88]
  ), l, u = ir(
    /*itemsRow*/
    t[86]
  ), c = [];
  for (let m = 0; m < u.length; m += 1)
    c[m] = yc(mc(t, u, m));
  const f = (m) => x(c[m], 1, 1, () => {
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
      r = Me("div");
      for (let m = 0; m < c.length; m += 1)
        c[m].c();
      e = gr(), n = Me("div"), i = gr(), g(n, "class", co.gallery__gap), g(n, "style", o = _r(
        /*lastPaddingSize*/
        t[13]
      )), g(r, "class", co.gallery__items), g(r, "style", s = _r(
        /*columnStyle*/
        t[16]
      ));
    },
    m(m, p) {
      J(m, r, p);
      for (let w = 0; w < c.length; w += 1)
        c[w] && c[w].m(r, null);
      bt(r, e), bt(r, n), bt(r, i), _(), l = !0;
    },
    p(m, p) {
      if (t = m, p[0] & /*itemsGrid, childLayoutParams, orientation, gridGap*/
      266320) {
        u = ir(
          /*itemsRow*/
          t[86]
        );
        let w;
        for (w = 0; w < u.length; w += 1) {
          const k = mc(t, u, w);
          c[w] ? (c[w].p(k, p), L(c[w], 1)) : (c[w] = yc(k), c[w].c(), L(c[w], 1), c[w].m(r, e));
        }
        for (sr(), w = u.length; w < c.length; w += 1)
          f(w);
        lr();
      }
      (!l || p[0] & /*lastPaddingSize*/
      8192 && o !== (o = _r(
        /*lastPaddingSize*/
        t[13]
      ))) && g(n, "style", o), (!l || p[0] & /*columnStyle*/
      65536 && s !== (s = _r(
        /*columnStyle*/
        t[16]
      ))) && g(r, "style", s), a !== /*rowIndex*/
      t[88] && (h(), a = /*rowIndex*/
      t[88], _());
    },
    i(m) {
      if (!l) {
        for (let p = 0; p < u.length; p += 1)
          L(c[p]);
        l = !0;
      }
    },
    o(m) {
      c = c.filter(Qd);
      for (let p = 0; p < c.length; p += 1)
        x(c[p]);
      l = !1;
    },
    d(m) {
      m && G(r), on(c, m), h();
    }
  };
}
function kc(t) {
  let r, e, n = (
    /*hasScrollLeft*/
    t[10] && /*shouldCheckArrows*/
    t[8] && vc(t)
  ), o = (
    /*hasScrollRight*/
    t[11] && /*shouldCheckArrows*/
    t[8] && jc(t)
  );
  return {
    c() {
      n && n.c(), r = gr(), o && o.c(), e = Qt();
    },
    m(i, s) {
      n && n.m(i, s), J(i, r, s), o && o.m(i, s), J(i, e, s);
    },
    p(i, s) {
      /*hasScrollLeft*/
      i[10] && /*shouldCheckArrows*/
      i[8] ? n ? n.p(i, s) : (n = vc(i), n.c(), n.m(r.parentNode, r)) : n && (n.d(1), n = null), /*hasScrollRight*/
      i[11] && /*shouldCheckArrows*/
      i[8] ? o ? o.p(i, s) : (o = jc(i), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null);
    },
    d(i) {
      i && (G(r), G(e)), n && n.d(i), o && o.d(i);
    }
  };
}
function vc(t) {
  let r, e, n, o = !/*leftClass*/
  t[32] && cb();
  return {
    c() {
      r = Me("div"), o && o.c(), g(
        r,
        "class",
        /*leftClass*/
        t[32] || `${co.gallery__arrow} ${ho.arrow} ${ho.arrow_left}`
      );
    },
    m(i, s) {
      J(i, r, s), o && o.m(r, null), e || (n = Qe(
        r,
        "click",
        /*click_handler*/
        t[74]
      ), e = !0);
    },
    p: j,
    d(i) {
      i && G(r), o && o.d(), e = !1, n();
    }
  };
}
function cb(t) {
  let r, e;
  return {
    c() {
      r = en("svg"), e = en("path"), g(e, "class", co["gallery__arrow-icon-path"]), g(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", ho.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      J(n, r, o), bt(r, e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function jc(t) {
  let r, e, n, o = !/*rightClass*/
  t[33] && fb();
  return {
    c() {
      r = Me("div"), o && o.c(), g(
        r,
        "class",
        /*rightClass*/
        t[33] || `${co.gallery__arrow} ${ho.arrow} ${ho.arrow_right}`
      );
    },
    m(i, s) {
      J(i, r, s), o && o.m(r, null), e || (n = Qe(
        r,
        "click",
        /*click_handler_1*/
        t[75]
      ), e = !0);
    },
    p: j,
    d(i) {
      i && G(r), o && o.d(), e = !1, n();
    }
  };
}
function fb(t) {
  let r, e;
  return {
    c() {
      r = en("svg"), e = en("path"), g(e, "class", co["gallery__arrow-icon-path"]), g(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", ho.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      J(n, r, o), bt(r, e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function db(t) {
  let r, e, n, o, i, s, a, l, u, c, f = ir(
    /*itemsGrid*/
    t[18]
  ), _ = [];
  for (let p = 0; p < f.length; p += 1)
    _[p] = wc(hc(t, f, p));
  const h = (p) => x(_[p], 1, 1, () => {
    _[p] = null;
  });
  let m = (
    /*orientation*/
    t[4] === "horizontal" && kc(t)
  );
  return {
    c() {
      r = Me("div"), e = Me("div");
      for (let p = 0; p < _.length; p += 1)
        _[p].c();
      s = gr(), m && m.c(), a = Qt(), g(e, "class", co["gallery__items-grid"]), g(e, "style", n = _r(
        /*gridStyle*/
        t[17]
      )), g(r, "class", o = co.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? Er["root_restrict-scroll"] : "")), g(r, "style", i = _r(
        /*scrollerStyle*/
        t[5]
      ));
    },
    m(p, w) {
      J(p, r, w), bt(r, e);
      for (let k = 0; k < _.length; k += 1)
        _[k] && _[k].m(e, null);
      t[72](e), t[73](r), J(p, s, w), m && m.m(p, w), J(p, a, w), l = !0, u || (c = Qe(r, "scroll", function() {
        zr(
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
    p(p, w) {
      if (t = p, w[0] & /*columnStyle, galleryItemsWrappers, lastPaddingSize, itemsGrid, childLayoutParams, orientation, gridGap*/
      340560) {
        f = ir(
          /*itemsGrid*/
          t[18]
        );
        let k;
        for (k = 0; k < f.length; k += 1) {
          const N = hc(t, f, k);
          _[k] ? (_[k].p(N, w), L(_[k], 1)) : (_[k] = wc(N), _[k].c(), L(_[k], 1), _[k].m(e, null));
        }
        for (sr(), k = f.length; k < _.length; k += 1)
          h(k);
        lr();
      }
      (!l || w[0] & /*gridStyle*/
      131072 && n !== (n = _r(
        /*gridStyle*/
        t[17]
      ))) && g(e, "style", n), (!l || w[0] & /*$jsonRestrictParentScroll*/
      1073741824 && o !== (o = co.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? Er["root_restrict-scroll"] : ""))) && g(r, "class", o), (!l || w[0] & /*scrollerStyle*/
      32 && i !== (i = _r(
        /*scrollerStyle*/
        t[5]
      ))) && g(r, "style", i), /*orientation*/
      t[4] === "horizontal" ? m ? m.p(t, w) : (m = kc(t), m.c(), m.m(a.parentNode, a)) : m && (m.d(1), m = null);
    },
    i(p) {
      if (!l) {
        for (let w = 0; w < f.length; w += 1)
          L(_[w]);
        l = !0;
      }
    },
    o(p) {
      _ = _.filter(Qd);
      for (let w = 0; w < _.length; w += 1)
        x(_[w]);
      l = !1;
    },
    d(p) {
      p && (G(r), G(s), G(a)), on(_, p), t[72](null), t[73](null), m && m.d(p), u = !1, c();
    }
  };
}
function _b(t) {
  let r, e, n, o;
  return r = new mn({
    props: {
      cls: ht(
        "gallery",
        co,
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
      $$slots: { default: [db] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(i, s) {
      Pt(r, i, s), e = !0, n || (o = Qe(ub, "resize", function() {
        zr(
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
        co,
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
      e || (L(r.$$.fragment, i), e = !0);
    },
    o(i) {
      x(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Nt(r, i), n = !1, o();
    }
  };
}
function pb(t, r, e) {
  let n = 0, o = [], i = [];
  for (let s = 0; s < t.length; ++s)
    o[n] || (o[n] = []), o[n].push({
      index: s,
      hasGapBefore: i[n] && r[s].visibility !== "gone",
      componentContext: t[s]
    }), !i[n] && r[s].visibility !== "gone" && (i[n] = !0), ++n >= e && (n = 0);
  return o;
}
function gb(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, O, ne, de, T, X, le = j, C = () => (le(), le = S(p, (fe) => e(59, X = fe)), p), D, M = j, W = () => (M(), M = S(m, (fe) => e(60, D = fe)), m), Q, me = j, Ee = () => (me(), me = S(_, (fe) => e(61, Q = fe)), _), ve, he = j, Se = () => (he(), he = S(Ut, (fe) => e(62, ve = fe)), Ut), Z, et = j, Je = () => (et(), et = S(f, (fe) => e(63, Z = fe)), f), qe, be = j, Te = () => (be(), be = S(c, (fe) => e(64, qe = fe)), c), ue, ge = j, ce = () => (ge(), ge = S(u, (fe) => e(65, ue = fe)), u), re, ae = j, oe = () => (ae(), ae = S(l, (fe) => e(66, re = fe)), l), we, Re = j, Ge = () => (Re(), Re = S(a, (fe) => e(67, we = fe)), a), ee, Oe, Ne = j, nt = () => (Ne(), Ne = S(i, (fe) => e(69, Oe = fe)), i), at, tt = j, yt = () => (tt(), tt = S(s, (fe) => e(70, at = fe)), s), rt, Mt = j, ft = () => (Mt(), Mt = S(h, (fe) => e(30, rt = fe)), h);
  t.$$.on_destroy.push(() => le()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => et()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => Ne()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => Mt());
  let { componentContext: K } = r, { layoutParams: _e = void 0 } = r;
  const st = Dr(Kr), Pe = st.direction;
  yn(t, Pe, (fe) => e(58, T = fe));
  let I, jt = [], lt = !1, Et = !1, Dt = null, ot, q = !1;
  const Tt = st.getCustomization("galleryLeftClass"), Ft = st.getCustomization("galleryRightClass");
  let Kt, Xt = 1, je = "horizontal", Ke = "start", _t, Fe = 8, $e, Be, Vt = "", ze, mt = [], Ut, It = {}, hr = !1, De = {}, kt = 0;
  function ar() {
    e(42, Xt = 1), e(4, je = "horizontal"), e(43, Ke = "start"), e(44, Fe = 8), e(47, Vt = "");
  }
  let rr = null, er = null;
  function mr() {
    var or, Yt;
    const fe = Un(at, Xt), wt = K.json.responsive;
    if (!wt || typeof wt != "object") {
      e(42, Xt = fe);
      return;
    }
    rr != null && rr.matches && ((or = wt.mobile) != null && or.column_count) ? e(42, Xt = wt.mobile.column_count) : er != null && er.matches && ((Yt = wt.tablet) != null && Yt.column_count) ? e(42, Xt = wt.tablet.column_count) : e(42, Xt = fe);
  }
  function vr(fe) {
    e(0, K = e(53, Rt = {
      ...K,
      json: {
        ...K.json,
        items: fe.filter(zo)
      }
    }));
  }
  const tr = st.isDesktop;
  yn(t, tr, (fe) => e(68, ee = fe));
  let nr = [], Rt;
  function pt() {
    if (!I)
      return;
    let fe = I.scrollLeft;
    T === "rtl" && (fe *= -1);
    const wt = I.scrollWidth, or = I.offsetWidth;
    T === "ltr" ? (e(10, lt = fe > 2), e(11, Et = fe + or < wt - 2)) : (e(11, Et = fe > 2), e(10, lt = fe + or < wt - 2));
  }
  const xt = va(pt, 50);
  function ie(fe) {
    I.scroll({
      left: I.scrollLeft + I.offsetWidth * 0.75 * (fe === "right" ? 1 : -1),
      behavior: "smooth"
    });
  }
  function yr() {
    let fe = [], wt = jt[0].children.length;
    for (let or = 0; or < wt; or += 2)
      for (let Yt = 0; Yt < Xt; ++Yt) {
        const jr = jt[Yt].children[or];
        jr && fe.push(jr);
      }
    return fe;
  }
  function kr(fe, wt = !0) {
    const Yt = je === "horizontal" ? "left" : "top";
    I.scroll({
      [Yt]: fe,
      behavior: wt ? "smooth" : "instant"
    });
  }
  function Ct(fe, wt, { animated: or = !0, extraOffset: Yt = 0, overflow: jr = "clamp" } = {}) {
    const v = je === "horizontal", se = v ? "offsetLeft" : "offsetTop";
    wt > fe.length - 1 ? wt = jr === "ring" ? Vo(wt, fe.length) : fe.length - 1 : wt < 0 && (wt = jr === "ring" ? Vo(wt, fe.length) : 0);
    const d = fe[wt];
    if (d) {
      let B;
      if (T === "ltr" || !v)
        B = d[se] + 0.01 - Fe / 2;
      else {
        const Ie = I.offsetWidth;
        B = d[se] + d.offsetWidth + 0.01 - Fe / 2 - Ie;
      }
      if (Yt) {
        B += Yt;
        const Ie = v ? I.scrollWidth - I.offsetWidth : I.scrollHeight - I.offsetHeight;
        B > Ie && (jr === "clamp" ? B = Ie : jr === "ring" && (B = Vo(B, Ie))), B < 0 && (jr === "clamp" ? B = 0 : jr === "ring" && (B = Vo(B, Ie)));
      }
      kr(B, or);
    }
  }
  function Tr(fe, { overflow: wt = "clamp", animated: or = !0 } = {}) {
    const Yt = je === "horizontal", jr = T === "ltr" || !Yt ? 1 : -1, v = Yt ? I.scrollLeft : I.scrollTop, se = Yt ? I.scrollWidth - I.offsetWidth : I.scrollHeight - I.offsetHeight;
    let d = v * jr + fe;
    d > se ? wt === "clamp" ? d = se : wt === "ring" && (d = Vo(d, se)) : d < 0 && (wt === "clamp" ? d = 0 : wt === "ring" && (d = Vo(d, se))), kr(d * jr, or);
  }
  function Br(fe, wt) {
    return je === "horizontal" ? wt.right > fe.left && fe.right > wt.left : wt.bottom > fe.top && fe.bottom > wt.top;
  }
  function cr(fe, wt) {
    return je === "horizontal" ? wt.left >= fe.left && wt.right <= fe.right : wt.top >= fe.top && wt.bottom <= fe.bottom;
  }
  function ut(fe) {
    const wt = yr(), or = I.getBoundingClientRect(), Yt = wt.findIndex((se) => cr(or, se.getBoundingClientRect()));
    if (Yt !== -1)
      return Yt;
    const jr = wt.map((se) => Br(or, se.getBoundingClientRect())), v = jr.findIndex(Boolean);
    return v !== -1 ? fe === "prev" && jr.filter(Boolean).length === 2 ? v + 1 : v : fe === "prev" ? 1 : wt.length - 2;
  }
  Zn(() => {
    if (e(40, q = !0), pt(), kt) {
      const fe = yr();
      Ct(fe, kt, { animated: !1 });
    }
  }), sn(() => {
    e(40, q = !1), nr.forEach((fe) => {
      fe.destroy();
    }), Kt && !K.fakeElement && (st.unregisterInstance(Kt), e(41, Kt = void 0)), rr && rr.removeEventListener("change", mr), er && er.removeEventListener("change", mr);
  });
  function vt(fe, wt) {
    Vr[fe ? "unshift" : "push"](() => {
      jt[wt] = fe, e(9, jt);
    });
  }
  function Gt(fe) {
    Vr[fe ? "unshift" : "push"](() => {
      ot = fe, e(3, ot);
    });
  }
  function Zt(fe) {
    Vr[fe ? "unshift" : "push"](() => {
      I = fe, e(2, I);
    });
  }
  const ur = () => ie("left"), dt = () => ie("right");
  return t.$$set = (fe) => {
    "componentContext" in fe && e(0, K = fe.componentContext), "layoutParams" in fe && e(1, _e = fe.layoutParams);
  }, t.$$.update = () => {
    var fe, wt, or, Yt, jr, v;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(57, n = K.origJson), t.$$.dirty[1] & /*origJson*/
    67108864 && n && ar(), t.$$.dirty[0] & /*componentContext*/
    1 && e(56, o = Array.isArray(K.json.items) && K.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && nt(e(29, i = typeof ((fe = K.json.item_builder) == null ? void 0 : fe.data) == "string" ? K.getDerivedFromVars((wt = K.json.item_builder) == null ? void 0 : wt.data, void 0, !0) : (or = K.json.item_builder) != null && or.data ? Jo(K.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && yt(e(28, s = K.getDerivedFromVars(K.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(27, a = K.getDerivedFromVars(K.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*columns, mobileQuery, tabletQuery*/
    3147776 | t.$$.dirty[2] & /*$jsonColumnCount*/
    256) {
      const se = Un(at, Xt), d = K.json.responsive;
      d && typeof d == "object" && typeof window < "u" ? (rr || (e(51, rr = window.matchMedia("(max-width: 767px)")), e(52, er = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), rr.addEventListener("change", mr), er.addEventListener("change", mr)), mr()) : e(42, Xt = se);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(26, l = K.getDerivedFromVars(K.json.cross_content_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(25, u = K.getDerivedFromVars(K.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(24, c = K.getDerivedFromVars(K.json.cross_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Je(e(23, f = K.getDerivedFromVars(K.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(22, _ = K.getDerivedFromVars(K.json.scroll_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(21, h = K.getDerivedFromVars(K.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && W(e(20, m = K.getDerivedFromVars(K.json.scrollbar))), t.$$.dirty[0] & /*componentContext*/
    1 && C(e(19, p = K.getDerivedFromVars(K.json.default_item))), t.$$.dirty[0] & /*componentContext, items*/
    129 | t.$$.dirty[1] & /*jsonItems, prevContext*/
    37748736 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    128) {
      let se = [];
      if (K.json.item_builder && Array.isArray(Oe) && Array.isArray(K.json.item_builder.prototypes)) {
        const He = K.json.item_builder;
        se = kl(Oe, st, K, He);
      } else
        se = (Array.isArray(o) && o || []).map((He, ke) => ({
          div: He,
          key: He.id || { index: ke, data: He }
        }));
      const d = new Set(nr), B = /* @__PURE__ */ new Map();
      let Ie = !1;
      Rt === K && nr.forEach((He) => {
        He.key && (typeof He.key == "string" && B.has(He.key) ? Ie || (Ie = !0, K.logError(Y(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: He.key } }))) : B.set(
          typeof He.key == "string" ? He.key : He.key.index,
          He
        ));
      }), e(7, nr = se.map((He, ke) => {
        let R = !Ie && B.get(He.id), Jt = B.get(ke);
        return !R && !He.id && typeof He.key == "object" && typeof (Jt == null ? void 0 : Jt.key) == "object" && Ji(Jt.key.data, He.key.data) && (R = Jt), R ? (d.delete(R), R) : K.produceChildContext(He.div, {
          path: ke,
          variables: He.vars,
          id: He.id,
          key: He.key
        });
      }));
      for (const He of d)
        He.destroy();
      e(53, Rt = K);
    }
    if (t.$$.dirty[1] & /*mounted*/
    512 | t.$$.dirty[2] & /*$isDesktop*/
    64 && e(8, w = ee && q), t.$$.dirty[0] & /*shouldCheckArrows, itemsGridElem*/
    264 | t.$$.dirty[1] & /*resizeObserver*/
    256 && (w ? typeof ResizeObserver < "u" && (e(39, Dt = new ResizeObserver(() => {
      xt();
    })), Dt.observe(ot)) : Dt && (Dt.disconnect(), e(39, Dt = null))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[2] & /*$jsonOrientation*/
    32 && e(4, je = ja(we, je)), t.$$.dirty[1] & /*align*/
    4096 | t.$$.dirty[2] & /*$jsonCrossContentAlignment*/
    16 && e(43, Ke = lb(re, Ke)), t.$$.dirty[1] & /*itemSpacing*/
    8192 | t.$$.dirty[2] & /*$jsonItemSpacing*/
    8 && (e(44, Fe = tn(ue, Fe)), e(12, _t = pe(Fe))), t.$$.dirty[1] & /*itemSpacing, crossSpacing*/
    40960 | t.$$.dirty[2] & /*$jsonCrossSpacing*/
    4 && (e(46, Be = tn(qe, Fe)), e(45, $e = pe(Be))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*$direction, padding*/
    134283264 | t.$$.dirty[2] & /*$jsonPaddings*/
    2) {
      e(47, Vt = as(Z, T, Vt));
      const se = je === "horizontal" ? (jr = (Yt = Z == null ? void 0 : Z.end) != null ? Yt : Z == null ? void 0 : Z[T === "ltr" ? "right" : "left"]) != null ? jr : 0 : (v = Z == null ? void 0 : Z.bottom) != null ? v : 0, d = pe(se);
      e(13, ze = {
        width: je === "horizontal" ? d : "1px",
        height: je === "horizontal" ? "1px" : d,
        "margin-right": je === "horizontal" && T === "ltr" ? "-" + d : void 0,
        "margin-left": je === "horizontal" && T === "rtl" ? "-" + d : void 0,
        "margin-bottom": je === "vertical" ? "-" + d : void 0
      });
    }
    if (t.$$.dirty[0] & /*items, orientation*/
    144) {
      let se = [];
      nr.forEach((d) => {
        const B = je === "horizontal" ? "width" : "height";
        se.push(d.getDerivedFromVars({
          size: d.json[B],
          visibility: d.json.visibility
        }));
      }), Se(e(14, Ut = Gi(se, (d) => [...d])));
    }
    if (t.$$.dirty[0] & /*items*/
    128 | t.$$.dirty[1] & /*columns*/
    2048 | t.$$.dirty[2] & /*$childStore*/
    1 && e(18, k = pb(nr, ve, Xt)), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*columns, templateSizes*/
    133120 | t.$$.dirty[2] & /*$childStore*/
    1 && (e(48, mt = []), Xt > 1 || ve.forEach((se, d) => {
      var B;
      se.visibility !== "gone" && (!se.size && je === "horizontal" || ((B = se.size) == null ? void 0 : B.type) === "match_parent" ? mt.push("100%") : mt.push("max-content"), d + 1 < ve.length && mt.push("auto"));
    }), mt.push("auto")), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, N = K.json.fixed_columns === !0), t.$$.dirty[0] & /*orientation, scrollerStyle, childLayoutParams*/
    112 | t.$$.dirty[1] & /*align, $jsonScrollMode, itemSpacing*/
    1073754112) {
      const se = {};
      let d = {};
      if (e(49, hr = !1), d.treatMatchParentAs100 = !0, je === "horizontal" ? (d.parentVAlign = Ke, d.parentContainerOrientation = "horizontal") : (d.parentHAlign = Ke, d.parentContainerOrientation = "vertical"), Q === "paging") {
        e(49, hr = !0), d.scrollSnap = "start";
        const B = je === "horizontal" ? "scroll-padding-left" : "scroll-padding-top";
        se[B] = pe(Fe / 2);
      }
      e(5, It = xo(se, It)), e(6, De = xo(d, De));
    }
    t.$$.dirty[0] & /*orientation*/
    16 && e(54, H = je === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*padding, crossGridGap, fixedColumns, columns*/
    16861184 && e(17, O = {
      padding: Vt,
      "grid-gap": $e,
      ...N && Xt > 1 && je === "vertical" ? {
        display: "grid",
        "grid-template-columns": `repeat(${Xt}, 1fr)`
      } : {}
    }), t.$$.dirty[1] & /*gridTemplate, templateSizes*/
    8519680 && e(16, ne = {
      [H]: ab(mt)
    }), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*scrollSnap, $jsonScrollbar*/
    537133056 && e(15, de = {
      orientation: je,
      "scroll-snap": hr,
      scrollbar: D === "auto" ? "auto" : "none"
    }), t.$$.dirty[1] & /*$jsonDefaultItem, defaultItem*/
    268959744 && e(50, kt = tn(X, kt)), t.$$.dirty[0] & /*componentContext*/
    1 && K.json && xt(), t.$$.dirty[0] & /*componentContext, orientation, scroller*/
    21 | t.$$.dirty[1] & /*prevId, $direction*/
    134218752 && K.json && (Kt && (st.unregisterInstance(Kt), e(41, Kt = void 0)), K.id && !K.fakeElement && (e(41, Kt = K.id), st.registerInstance(Kt, {
      setCurrentItem(se, d) {
        const B = yr();
        if (se < 0 || se > B.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        Ct(B, se, { animated: d });
      },
      setPreviousItem(se, d, B) {
        const Ie = ut("prev"), He = yr();
        let ke = Ie - se;
        Ct(He, ke, { animated: B, overflow: d });
      },
      setNextItem(se, d, B) {
        const Ie = je === "horizontal", He = T === "ltr" || !Ie ? 1 : -1, ke = Ie ? I.scrollLeft * He + I.offsetWidth === I.scrollWidth : I.scrollTop + I.offsetHeight === I.scrollHeight, R = yr();
        if (ke && d === "ring") {
          Ct(R, 0, { animated: B });
          return;
        }
        let Ht = ut("next") + se;
        Ct(R, Ht, { animated: B, overflow: d });
      },
      scrollToStart(se) {
        kr(0, se);
      },
      scrollToEnd(se) {
        kr(
          T === "ltr" || je !== "horizontal" ? 1e6 : -1e6,
          se
        );
      },
      scrollToPosition(se, d) {
        kr(
          T === "ltr" || je !== "horizontal" ? se : -se,
          d
        );
      },
      scrollCombined({ step: se, offset: d, overflow: B, animated: Ie }) {
        if (se) {
          const ke = ut(se > 0 ? "next" : "prev") + se;
          Ct(yr(), ke, { animated: Ie, extraOffset: d, overflow: B });
        } else d && Tr(d, { overflow: B, animated: Ie });
      }
    })));
  }, [
    K,
    _e,
    I,
    ot,
    je,
    It,
    De,
    nr,
    w,
    jt,
    lt,
    Et,
    _t,
    ze,
    Ut,
    de,
    ne,
    O,
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
    rt,
    Pe,
    Tt,
    Ft,
    vr,
    tr,
    pt,
    xt,
    ie,
    Dt,
    q,
    Kt,
    Xt,
    Ke,
    Fe,
    $e,
    Be,
    Vt,
    mt,
    hr,
    kt,
    rr,
    er,
    Rt,
    H,
    N,
    o,
    n,
    T,
    X,
    D,
    Q,
    ve,
    Z,
    qe,
    ue,
    re,
    we,
    ee,
    Oe,
    at,
    vt,
    Gt,
    Zt,
    ur,
    dt
  ];
}
class hb extends Or {
  constructor(r) {
    super(), Lr(this, r, gb, _b, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const mb = "appkit-outer", bb = "appkit-tabs", yb = "appkit-tabs__list", wb = "appkit-tabs__item", kb = "appkit-tabs__item_selected", vb = "appkit-tabs_animation_fade", jb = "appkit-tabs_animation_none", Cb = "appkit-tabs__item_actionable", Eb = "appkit-tabs__panels", Ab = "appkit-tabs__swiper", Sb = "appkit-tabs__swiper_animated", Vb = "appkit-tabs__swiper_inited", Fb = "appkit-tabs__panel", Ib = "appkit-tabs__panel_visible", Db = "appkit-tabs__separator", Tb = "appkit-tabs__delimitier", vn = {
  outer: mb,
  "root__any-actions": "appkit-root__any-actions",
  tabs: bb,
  tabs__list: yb,
  "tabs__items-bg": "appkit-tabs__items-bg",
  "tabs__items-text": "appkit-tabs__items-text",
  tabs__item: wb,
  tabs__item_selected: kb,
  tabs_animation_fade: vb,
  tabs_animation_none: jb,
  tabs__item_actionable: Cb,
  tabs__panels: Eb,
  "tabs_own-height": "appkit-tabs_own-height",
  tabs__swiper: Ab,
  tabs__swiper_animated: Sb,
  tabs__swiper_inited: Vb,
  tabs__panel: Fb,
  tabs__panel_visible: Ib,
  "tabs_height-parent_yes": "appkit-tabs_height-parent_yes",
  tabs__separator: Db,
  tabs__delimitier: Tb,
  "tabs__tabs-highlighter": "appkit-tabs__tabs-highlighter"
};
function Mb(t, r) {
  var n, o;
  if (!t || !t.image_url || typeof t.image_url != "string")
    return r;
  const e = {
    url: t.image_url,
    width: 12,
    height: 12
  };
  return ((n = t.width) == null ? void 0 : n.type) === "fixed" && zn(t.width.value) && (e.width = t.width.value), ((o = t.height) == null ? void 0 : o.type) === "fixed" && zn(t.height.value) && (e.height = t.height.value), e;
}
const xd = 37, $d = 39, e_ = 36, t_ = 35;
function Pb(t, r, e, n) {
  const o = [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ];
  for (let i = 0; i < o.length; ++i)
    if (o[i] && !Nn(o[i]))
      return n;
  return Bs(t, r, e);
}
function Cc(t) {
  const r = t.touches[0], e = r.clientX || r.pageX, n = r.clientY || r.pageY;
  return { x: e, y: n };
}
function Nb(t) {
  let r, e;
  return r = new Jn({
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function zb(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r, { enabled: i } = r;
  const s = Do(i);
  return _i(wa, { isEnabled: s }), t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams), "enabled" in a && e(2, i = a.enabled);
  }, t.$$.update = () => {
    t.$$.dirty & /*enabled*/
    4 && s.set(i);
  }, [n, o, i];
}
class Lb extends Or {
  constructor(r) {
    super(), Lr(this, r, zb, Nb, Sr, {
      componentContext: 0,
      layoutParams: 1,
      enabled: 2
    });
  }
}
const { Boolean: Ec, window: Ob } = Po;
function Ac(t, r, e) {
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
function Sc(t, r, e) {
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
function Vc(t, r, e) {
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
function Bb(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function Rb(t) {
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
    $$slots: { default: [Wb] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = jo(o, n[i]);
  return r = new mn({ props: o }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(i, s) {
      Pt(r, i, s), e = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams*/
      16777219 | s[1] & /*parentOfItems, replaceItems, devapi*/
      6356992 ? No(n, [
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
        2097152 && Td(
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
      e || (L(r.$$.fragment, i), e = !0);
    },
    o(i) {
      x(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Nt(r, i);
    }
  };
}
function Fc(t) {
  let r;
  return {
    c() {
      r = Me("span"), g(r, "class", vn.tabs__delimitier), F(
        r,
        "width",
        /*delimitierStyle*/
        t[15].width ? pe(
          /*delimitierStyle*/
          t[15].width
        ) : void 0
      ), F(
        r,
        "height",
        /*delimitierStyle*/
        t[15].height ? pe(
          /*delimitierStyle*/
          t[15].height
        ) : void 0
      );
    },
    m(e, n) {
      J(e, r, n);
    },
    p(e, n) {
      n[0] & /*delimitierStyle*/
      32768 && F(
        r,
        "width",
        /*delimitierStyle*/
        e[15].width ? pe(
          /*delimitierStyle*/
          e[15].width
        ) : void 0
      ), n[0] & /*delimitierStyle*/
      32768 && F(
        r,
        "height",
        /*delimitierStyle*/
        e[15].height ? pe(
          /*delimitierStyle*/
          e[15].height
        ) : void 0
      );
    },
    d(e) {
      e && G(r);
    }
  };
}
function Ic(t) {
  let r, e, n = (
    /*item*/
    t[99].title + ""
  ), o, i, s = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && Fc(t)
  );
  return {
    c() {
      s && s.c(), r = gr(), e = Me("span"), o = Gn(n), g(e, "class", i = ht("tabs__item", vn, {
        selected: (
          /*isSelected*/
          t[104]
        ),
        actionable: !!/*item*/
        t[99].title_click_action
      }));
    },
    m(a, l) {
      s && s.m(a, l), J(a, r, l), J(a, e, l), bt(e, o);
    },
    p(a, l) {
      /*delimitierStyle*/
      a[15] && /*index*/
      a[100] > 0 ? s ? s.p(a, l) : (s = Fc(a), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null), l[0] & /*$childStore*/
      262144 && n !== (n = /*item*/
      a[99].title + "") && eo(o, n), l[0] & /*$childStore, selected*/
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
      a && (G(r), G(e)), s && s.d(a);
    }
  };
}
function Dc(t) {
  let r, e;
  return {
    c() {
      r = Me("div"), g(r, "class", vn["tabs__tabs-highlighter"]), g(r, "style", e = _r(
        /*selectedTabStyles*/
        t[36]
      ));
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o[1] & /*selectedTabStyles*/
      32 && e !== (e = _r(
        /*selectedTabStyles*/
        n[36]
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Tc(t) {
  let r, e;
  return {
    c() {
      r = Me("img"), g(r, "class", vn.tabs__delimitier), g(r, "alt", ""), g(r, "loading", "lazy"), g(r, "decoding", "async"), Xn(r.src, e = /*delimitierStyle*/
      t[15].url) || g(r, "src", e), F(
        r,
        "width",
        /*delimitierStyle*/
        t[15].width ? pe(
          /*delimitierStyle*/
          t[15].width
        ) : void 0
      ), F(
        r,
        "height",
        /*delimitierStyle*/
        t[15].height ? pe(
          /*delimitierStyle*/
          t[15].height
        ) : void 0
      );
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o[0] & /*delimitierStyle*/
      32768 && !Xn(r.src, e = /*delimitierStyle*/
      n[15].url) && g(r, "src", e), o[0] & /*delimitierStyle*/
      32768 && F(
        r,
        "width",
        /*delimitierStyle*/
        n[15].width ? pe(
          /*delimitierStyle*/
          n[15].width
        ) : void 0
      ), o[0] & /*delimitierStyle*/
      32768 && F(
        r,
        "height",
        /*delimitierStyle*/
        n[15].height ? pe(
          /*delimitierStyle*/
          n[15].height
        ) : void 0
      );
    },
    d(n) {
      n && G(r);
    }
  };
}
function Hb(t) {
  let r = (
    /*item*/
    t[99].title + ""
  ), e;
  return {
    c() {
      e = Gn(r);
    },
    m(n, o) {
      J(n, e, o);
    },
    p(n, o) {
      o[0] & /*$childStore*/
      262144 && r !== (r = /*item*/
      n[99].title + "") && eo(e, r);
    },
    d(n) {
      n && G(e);
    }
  };
}
function Mc(t) {
  let r, e, n, o = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && Tc(t)
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
  return e = new bl({
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
        ].filter(Zs) : []
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
      $$slots: { default: [Hb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      o && o.c(), r = gr(), Lt(e.$$.fragment);
    },
    m(s, a) {
      o && o.m(s, a), J(s, r, a), Pt(e, s, a), n = !0;
    },
    p(s, a) {
      t = s, /*delimitierStyle*/
      t[15] && /*index*/
      t[100] > 0 ? o ? o.p(t, a) : (o = Tc(t), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
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
      ].filter(Zs) : []), a[0] & /*$childStore, selected, componentContext*/
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
      n || (L(e.$$.fragment, s), n = !0);
    },
    o(s) {
      x(e.$$.fragment, s), n = !1;
    },
    d(s) {
      s && G(r), o && o.d(s), Nt(e, s);
    }
  };
}
function Pc(t) {
  let r, e;
  return {
    c() {
      r = Me("div"), g(r, "class", vn.tabs__separator), g(r, "style", e = _r(
        /*separatorStyle*/
        t[38]
      ));
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o[1] & /*separatorStyle*/
      128 && e !== (e = _r(
        /*separatorStyle*/
        n[38]
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Nc(t) {
  let r, e;
  return r = new Lb({
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function zc(t) {
  let r, e, n, o, i, s, a = (
    /*childComponentContext*/
    t[101] && Nc(t)
  );
  return {
    c() {
      r = Me("div"), a && a.c(), e = gr(), g(r, "class", n = ht("tabs__panel", vn, {
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
      t[100]), F(
        r,
        "left",
        /*index*/
        t[100] * 100 + "%"
      );
    },
    m(l, u) {
      J(l, r, u), a && a.m(r, null), bt(r, e), s = !0;
    },
    p(l, u) {
      /*childComponentContext*/
      l[101] ? a ? (a.p(l, u), u[0] & /*$childStore*/
      262144 | u[1] & /*showedPanels*/
      4 && L(a, 1)) : (a = Nc(l), a.c(), L(a, 1), a.m(r, e)) : a && (sr(), x(a, 1, 1, () => {
        a = null;
      }), lr()), (!s || u[0] & /*$childStore*/
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
      262144) && F(
        r,
        "left",
        /*index*/
        l[100] * 100 + "%"
      );
    },
    i(l) {
      s || (L(a), s = !0);
    },
    o(l) {
      x(a), s = !1;
    },
    d(l) {
      l && G(r), a && a.d();
    }
  };
}
function Wb(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h, m, p, w = ir(
    /*$childStore*/
    t[18]
  ), k = [];
  for (let C = 0; C < w.length; C += 1)
    k[C] = Ic(Vc(t, w, C));
  let N = (
    /*animationType*/
    t[16] === "slide" && /*selectedTabStyles*/
    t[36] && Dc(t)
  ), H = ir(
    /*$childStore*/
    t[18]
  ), O = [];
  for (let C = 0; C < H.length; C += 1)
    O[C] = Mc(Sc(t, H, C));
  const ne = (C) => x(O[C], 1, 1, () => {
    O[C] = null;
  });
  let de = (
    /*$jsonSeparator*/
    t[20] && Pc(t)
  ), T = ir(
    /*$childStore*/
    t[18]
  ), X = [];
  for (let C = 0; C < T.length; C += 1)
    X[C] = zc(Ac(t, T, C));
  const le = (C) => x(X[C], 1, 1, () => {
    X[C] = null;
  });
  return {
    c() {
      r = Me("div"), e = Me("div");
      for (let C = 0; C < k.length; C += 1)
        k[C].c();
      n = gr(), N && N.c(), o = gr(), i = Me("div");
      for (let C = 0; C < O.length; C += 1)
        O[C].c();
      a = gr(), de && de.c(), l = gr(), u = Me("div"), c = Me("div");
      for (let C = 0; C < X.length; C += 1)
        X[C].c();
      g(e, "class", vn["tabs__items-bg"]), g(e, "aria-hidden", "true"), g(i, "class", vn["tabs__items-text"]), g(r, "class", s = vn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Er["root_restrict-scroll"] : "")), g(r, "role", "tablist"), F(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? go(
          /*titlePadding*/
          t[14],
          /*$direction*/
          t[19]
        ) : ""
      ), F(r, "--divkit-tabs-font-size", pe(
        /*tabFontSize*/
        t[4]
      )), F(
        r,
        "--divkit-tabs-paddings",
        /*tabPaddings*/
        t[5]
      ), F(
        r,
        "--divkit-tabs-line-height",
        /*tabLineHeight*/
        t[25]
      ), F(
        r,
        "--divkit-tabs-letter-spacing",
        /*tabLetterSpacing*/
        t[26]
      ), F(
        r,
        "--divkit-tabs-active-font-weight",
        /*tabActiveFontWeight*/
        t[7] || ""
      ), F(
        r,
        "--divkit-tabs-inactive-font-weight",
        /*tabInactiveFontWeight*/
        t[8] || ""
      ), F(
        r,
        "--divkit-tabs-active-font-family",
        /*tabActiveFontFamily*/
        t[27] || ""
      ), F(
        r,
        "--divkit-tabs-inactive-font-family",
        /*tabInactiveFontFamily*/
        t[29] || ""
      ), F(
        r,
        "--divkit-tabs-active-font-variation-settings",
        /*tabActiveFontVariationSettings*/
        t[28] || ""
      ), F(
        r,
        "--divkit-tabs-inactive-font-variation-settings",
        /*tabInactiveFontVariationSettings*/
        t[30] || ""
      ), F(
        r,
        "--divkit-tabs-active-text-color",
        /*tabActiveTextColor*/
        t[9]
      ), F(
        r,
        "--divkit-tabs-inactive-text-color",
        /*tabInactiveTextColor*/
        t[10]
      ), F(
        r,
        "--divkit-tabs-active-background-color",
        /*tabActiveBackground*/
        t[11]
      ), F(
        r,
        "--divkit-tabs-inactive-background-color",
        /*tabInactiveBackground*/
        t[12]
      ), F(
        r,
        "--divkit-tabs-border-radius",
        /*tabBorderRadius*/
        t[6]
      ), F(
        r,
        "--divkit-tabs-items-spacing",
        /*tabItemSpacing*/
        t[13] ? an(
          /*tabItemSpacing*/
          t[13] * 10 / /*tabFontSize*/
          t[4]
        ) : ""
      ), F(
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
      (t[48] ? Er["root_restrict-scroll"] : ""));
    },
    m(C, D) {
      J(C, r, D), bt(r, e);
      for (let M = 0; M < k.length; M += 1)
        k[M] && k[M].m(e, null);
      bt(e, n), N && N.m(e, null), bt(r, o), bt(r, i);
      for (let M = 0; M < O.length; M += 1)
        O[M] && O[M].m(i, null);
      t[74](r), J(C, a, D), de && de.m(C, D), J(C, l, D), J(C, u, D), bt(u, c);
      for (let M = 0; M < X.length; M += 1)
        X[M] && X[M].m(c, null);
      t[75](c), t[76](u), h = !0, m || (p = [
        Qe(
          r,
          "keydown",
          /*onTabKeydown*/
          t[55]
        ),
        Qe(u, "touchstart", function() {
          zr(
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
        Qe(u, "touchmove", function() {
          zr(
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
        Qe(u, "touchend", function() {
          zr(
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
        Qe(u, "touchcancel", function() {
          zr(
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
    p(C, D) {
      if (t = C, D[0] & /*$childStore, selected, delimitierStyle*/
      425984) {
        w = ir(
          /*$childStore*/
          t[18]
        );
        let M;
        for (M = 0; M < w.length; M += 1) {
          const W = Vc(t, w, M);
          k[M] ? k[M].p(W, D) : (k[M] = Ic(W), k[M].c(), k[M].m(e, n));
        }
        for (; M < k.length; M += 1)
          k[M].d(1);
        k.length = w.length;
      }
      if (/*animationType*/
      t[16] === "slide" && /*selectedTabStyles*/
      t[36] ? N ? N.p(t, D) : (N = Dc(t), N.c(), N.m(e, null)) : N && (N.d(1), N = null), D[0] & /*componentContext, $childStore, selected, delimitierStyle*/
      425985 | D[1] & /*instId, selectItem*/
      8912896) {
        H = ir(
          /*$childStore*/
          t[18]
        );
        let M;
        for (M = 0; M < H.length; M += 1) {
          const W = Sc(t, H, M);
          O[M] ? (O[M].p(W, D), L(O[M], 1)) : (O[M] = Mc(W), O[M].c(), L(O[M], 1), O[M].m(i, null));
        }
        for (sr(), M = H.length; M < O.length; M += 1)
          ne(M);
        lr();
      }
      if ((!h || D[1] & /*$jsonRestrictParentScroll*/
      131072 && s !== (s = vn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Er["root_restrict-scroll"] : ""))) && g(r, "class", s), D[0] & /*titlePadding, $direction*/
      540672 && F(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? go(
          /*titlePadding*/
          t[14],
          /*$direction*/
          t[19]
        ) : ""
      ), D[0] & /*tabFontSize*/
      16 && F(r, "--divkit-tabs-font-size", pe(
        /*tabFontSize*/
        t[4]
      )), D[0] & /*tabPaddings*/
      32 && F(
        r,
        "--divkit-tabs-paddings",
        /*tabPaddings*/
        t[5]
      ), D[0] & /*tabLineHeight*/
      33554432 && F(
        r,
        "--divkit-tabs-line-height",
        /*tabLineHeight*/
        t[25]
      ), D[0] & /*tabLetterSpacing*/
      67108864 && F(
        r,
        "--divkit-tabs-letter-spacing",
        /*tabLetterSpacing*/
        t[26]
      ), D[0] & /*tabActiveFontWeight*/
      128 && F(
        r,
        "--divkit-tabs-active-font-weight",
        /*tabActiveFontWeight*/
        t[7] || ""
      ), D[0] & /*tabInactiveFontWeight*/
      256 && F(
        r,
        "--divkit-tabs-inactive-font-weight",
        /*tabInactiveFontWeight*/
        t[8] || ""
      ), D[0] & /*tabActiveFontFamily*/
      134217728 && F(
        r,
        "--divkit-tabs-active-font-family",
        /*tabActiveFontFamily*/
        t[27] || ""
      ), D[0] & /*tabInactiveFontFamily*/
      536870912 && F(
        r,
        "--divkit-tabs-inactive-font-family",
        /*tabInactiveFontFamily*/
        t[29] || ""
      ), D[0] & /*tabActiveFontVariationSettings*/
      268435456 && F(
        r,
        "--divkit-tabs-active-font-variation-settings",
        /*tabActiveFontVariationSettings*/
        t[28] || ""
      ), D[0] & /*tabInactiveFontVariationSettings*/
      1073741824 && F(
        r,
        "--divkit-tabs-inactive-font-variation-settings",
        /*tabInactiveFontVariationSettings*/
        t[30] || ""
      ), D[0] & /*tabActiveTextColor*/
      512 && F(
        r,
        "--divkit-tabs-active-text-color",
        /*tabActiveTextColor*/
        t[9]
      ), D[0] & /*tabInactiveTextColor*/
      1024 && F(
        r,
        "--divkit-tabs-inactive-text-color",
        /*tabInactiveTextColor*/
        t[10]
      ), D[0] & /*tabActiveBackground*/
      2048 && F(
        r,
        "--divkit-tabs-active-background-color",
        /*tabActiveBackground*/
        t[11]
      ), D[0] & /*tabInactiveBackground*/
      4096 && F(
        r,
        "--divkit-tabs-inactive-background-color",
        /*tabInactiveBackground*/
        t[12]
      ), D[0] & /*tabBorderRadius*/
      64 && F(
        r,
        "--divkit-tabs-border-radius",
        /*tabBorderRadius*/
        t[6]
      ), D[0] & /*tabItemSpacing, tabFontSize*/
      8208 && F(
        r,
        "--divkit-tabs-items-spacing",
        /*tabItemSpacing*/
        t[13] ? an(
          /*tabItemSpacing*/
          t[13] * 10 / /*tabFontSize*/
          t[4]
        ) : ""
      ), D[1] & /*animationDuration*/
      16 && F(
        r,
        "--divkit-tabs-animation-duration",
        /*animationDuration*/
        t[35] !== void 0 ? `${/*animationDuration*/
        t[35]}ms` : ""
      ), /*$jsonSeparator*/
      t[20] ? de ? de.p(t, D) : (de = Pc(t), de.c(), de.m(l.parentNode, l)) : de && (de.d(1), de = null), D[0] & /*$childStore, childLayoutParams, selected*/
      393224 | D[1] & /*visiblePanels, instId, showedPanels*/
      524300) {
        T = ir(
          /*$childStore*/
          t[18]
        );
        let M;
        for (M = 0; M < T.length; M += 1) {
          const W = Ac(t, T, M);
          X[M] ? (X[M].p(W, D), L(X[M], 1)) : (X[M] = zc(W), X[M].c(), L(X[M], 1), X[M].m(c, null));
        }
        for (sr(), M = T.length; M < X.length; M += 1)
          le(M);
        lr();
      }
      (!h || D[1] & /*isSwipeInitialized, isAnimated*/
      3 && f !== (f = ht("tabs__swiper", vn, {
        inited: (
          /*isSwipeInitialized*/
          t[31]
        ),
        animated: (
          /*isAnimated*/
          t[32]
        )
      }))) && g(c, "class", f), (!h || D[1] & /*$jsonRestrictParentScroll*/
      131072 && _ !== (_ = vn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Er["root_restrict-scroll"] : ""))) && g(u, "class", _);
    },
    i(C) {
      if (!h) {
        for (let D = 0; D < H.length; D += 1)
          L(O[D]);
        for (let D = 0; D < T.length; D += 1)
          L(X[D]);
        h = !0;
      }
    },
    o(C) {
      O = O.filter(Ec);
      for (let D = 0; D < O.length; D += 1)
        x(O[D]);
      X = X.filter(Ec);
      for (let D = 0; D < X.length; D += 1)
        x(X[D]);
      h = !1;
    },
    d(C) {
      C && (G(r), G(a), G(l), G(u)), on(k, C), N && N.d(), on(O, C), t[74](null), de && de.d(C), on(X, C), t[75](null), t[76](null), m = !1, Jr(p);
    }
  };
}
function Ub(t) {
  let r, e, n, o, i, s;
  const a = [Rb, Bb], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[2] ? 1 : 0
    );
  }
  return ~(r = u(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(c, f) {
      ~r && l[r].m(c, f), J(c, n, f), o = !0, i || (s = Qe(Ob, "resize", function() {
        zr(
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
      r = u(t), r === _ ? ~r && l[r].p(t, f) : (e && (sr(), x(l[_], 1, 1, () => {
        l[_] = null;
      }), lr()), ~r ? (e = l[r], e ? e.p(t, f) : (e = l[r] = a[r](t), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(c) {
      o || (L(e), o = !0);
    },
    o(c) {
      x(e), o = !1;
    },
    d(c) {
      c && G(n), ~r && l[r].d(c), i = !1, s();
    }
  };
}
function Gb(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, O, ne = j, de = () => (ne(), ne = S(a, (v) => e(67, O = v)), a), T, X = j, le = () => (X(), X = S(m, (v) => e(68, T = v)), m), C, D = j, M = () => (D(), D = S(h, (v) => e(69, C = v)), h), W, Q = j, me = () => (Q(), Q = S(f, (v) => e(70, W = v)), f), Ee, ve, he = j, Se = () => (he(), he = S(c, (v) => e(71, ve = v)), c), Z, et = j, Je = () => (et(), et = S(u, (v) => e(72, Z = v)), u), qe, be = j, Te = () => (be(), be = S(l, (v) => e(20, qe = v)), l), ue, ge = j, ce = () => (ge(), ge = S(_, (v) => e(48, ue = v)), _);
  t.$$.on_destroy.push(() => ne()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => et()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => ge());
  let { componentContext: re } = r, { layoutParams: ae = void 0 } = r;
  const oe = Dr(Kr), we = oe.direction;
  yn(t, we, (v) => e(19, Ee = v));
  const Re = oe.genId("tabs");
  let Ge, ee = !1, Oe = Do([]);
  yn(t, Oe, (v) => e(18, H = v));
  let Ne = {}, nt, at, tt, yt = {}, rt = 12, Mt = "", ft = "", K = "", _e = "", st, Pe = "", I = "", jt, lt = "", Et = "", Dt = "", ot = "", q = "", Tt = "", Ft = 0, Kt = "", Xt = "", je = null, Ke = !1, _t = !1, Fe, $e = [], Be = [], Vt = null, ze = null, mt = null, Ut, It = !1, hr = !1, De, kt, ar, rr = "slide", er, mr, vr, tr = {
    devapi: {
      getState() {
        return p;
      },
      setState(v) {
        return xt(v, !1, !0);
      }
    }
  };
  function nr() {
    e(4, rt = 12), e(5, Mt = ""), e(6, _e = ""), e(7, st = void 0), e(27, Pe = ""), e(28, I = ""), e(8, jt = void 0), e(29, lt = ""), e(30, Et = ""), e(9, Dt = ""), e(10, ot = ""), e(11, q = ""), e(12, Tt = ""), e(13, Ft = 0), e(61, Kt = ""), e(62, Xt = ""), e(14, je = null), e(15, ar = void 0), e(16, rr = "slide"), e(35, er = 300), e(36, mr = void 0), fe();
  }
  function Rt(v) {
    re.json.items && e(0, re = vr = {
      ...re,
      json: {
        ...re.json,
        items: re.json.items.map((se, d) => ({ ...se, div: v[d] }))
      }
    });
  }
  function pt(v) {
    if (ee)
      return;
    const se = new Set($e.filter(zo)), d = /* @__PURE__ */ new Map();
    vr === re && $e.forEach((B) => {
      B && d.set(B.json, B);
    }), e(33, $e = v.map((B, Ie) => {
      if ((Ie === p || $e[Ie]) && (B != null && B.div)) {
        const He = d.get(B.div);
        return He ? (se.delete(He), He) : re.produceChildContext(B.div, { path: Ie });
      }
    })), e(34, Be = v.map((B, Ie) => Ie === p));
    for (const B of se)
      B.destroy();
    vr = re;
  }
  async function xt(v, se, d) {
    if (Fe = p, e(17, p = v), vt(), kr(d), fe(), se) {
      await In();
      const B = nt.querySelector(`.${vn.tabs__item_selected}`);
      B && B.focus();
    }
  }
  function ie(v, se = !1) {
    const d = H == null ? void 0 : H.length;
    if (!d)
      return;
    const B = H.map((R) => R.index);
    let He = B.indexOf(p) + v;
    He >= d ? He = 0 : He < 0 && (He = d - 1);
    const ke = B[He];
    xt(ke, se, !0);
  }
  function yr(v, se) {
    return p !== se ? (xt(se, !1, !0), !1) : !0;
  }
  function kr(v = !0) {
    e(32, _t = v), Ct(-p * 100), Tr(), Br(), cr(), kt = -p * at.clientWidth;
  }
  async function Ct(v) {
    await In(), e(23, tt.style.transform = `translate3d(${v}%,0,0)`, tt);
  }
  function Tr(v = !1) {
    const se = v ? Math.max(0, p - 1) : Math.min(p, Fe != null ? Fe : p), d = v ? Math.min(o.length - 1, p + 1) : Math.max(p, Fe != null ? Fe : p);
    oe.devtoolCreateHierarchy !== "eager" && $e.forEach((B) => {
      B == null || B.destroy();
    }), e(33, $e = $e.map((B, Ie) => {
      var ke;
      if (B)
        return B;
      const He = (ke = o[Ie]) == null ? void 0 : ke.div;
      if ((Ie >= se && Ie <= d || oe.devtoolCreateHierarchy === "eager") && He)
        return re.produceChildContext(He, { path: Ie });
    })), e(34, Be = Be.map((B, Ie) => Ie >= se && Ie <= d));
  }
  async function Br() {
    var se;
    if (((se = re.json.height) == null ? void 0 : se.type) === "match_parent")
      return;
    await In();
    const v = document.getElementById(`${Re}-panel-${p}`);
    v && e(22, at.style.height = pe(v.offsetHeight), at);
  }
  function cr() {
    Vt && clearTimeout(Vt), Vt = window.setTimeout(
      () => {
        e(34, Be = o.map((v, se) => se === p));
      },
      400
    );
  }
  function ut(v) {
    if (!(v.ctrlKey || v.shiftKey || v.altKey || v.metaKey) && o) {
      if (v.which === xd)
        ie(-1, !0);
      else if (v.which === $d)
        ie(1, !0);
      else if (v.which === e_)
        xt(0, !0, !0);
      else if (v.which === t_)
        xt(o.length - 1, !0, !0);
      else
        return;
      v.preventDefault();
    }
  }
  function vt() {
    Ke || (e(31, Ke = !0), e(22, at.style.height = pe(at.clientHeight), at), e(23, tt.style.transform = `translate3d(${-(Fe != null ? Fe : p) * 100}%,0,0)`, tt));
  }
  function Gt(v) {
    var B;
    const se = v.target, d = (B = se == null ? void 0 : se.closest) == null ? void 0 : B.call(se, `.${Er["root_restrict-scroll"]}`);
    o.length < 2 || v.touches.length > 1 || d && d !== at || (It = !1, hr = !1, ze = Cc(v), mt = null, Ut = Date.now(), De = kt || -p * at.clientWidth, e(32, _t = !1), Vt && clearTimeout(Vt));
  }
  function Zt(v) {
    const se = Cc(v);
    if (!ze || mt && mt.x === se.x && mt.y === se.y)
      return;
    mt = se;
    const d = at.clientWidth;
    if (It) {
      kt = se.x - ze.x + De;
      const B = d * o.length;
      if (kt > 0)
        kt = kt * d / (kt + d * 3);
      else if (-kt + d > B) {
        let Ie = -kt + d - B;
        Ie = Ie * d / (Ie + d * 3), kt = d - B - Ie;
      }
      Ct(kt * 100 / d);
    } else Math.abs(se.y - ze.y) > 10 ? hr = !0 : !hr && Math.abs(se.x - ze.x) > 8 && (vt(), It = !0, ze = se, Ct(-p * 100), Tr(!0));
    It && v.cancelable && v.preventDefault();
  }
  function ur() {
    hr = !1, ze = null;
    let v = p;
    if (!It)
      return;
    It = !1;
    const se = Math.min(512, at.clientWidth), d = Math.abs(De - kt), B = Math.min(1, (Date.now() - Ut) / 750);
    d > se / 4 * B && (v += De > kt ? 1 : -1), v >= o.length ? v = o.length - 1 : v < 0 && (v = 0), v === p ? (e(32, _t = !0), kt = -v * se, Ct(-v * 100), cr()) : xt(v, !1, !0);
  }
  function dt(v, se) {
    return v > o.length - 1 ? se === "ring" ? Vo(v, o.length) : o.length - 1 : v < 0 ? se === "ring" ? Vo(v, o.length) : 0 : v;
  }
  function fe() {
    rr === "slide" && In().then(() => {
      const v = nt == null ? void 0 : nt.querySelector("." + vn.tabs__item_selected);
      v && e(36, mr = {
        left: `${v.offsetLeft}px`,
        width: `${v.offsetWidth}px`,
        height: `${v.offsetHeight}px`
      });
    });
  }
  Zn(() => {
    fe(), oe.devtoolCreateHierarchy === "eager" && xt(p, !1, !1);
  }), sn(() => {
    $e.forEach((v) => {
      v == null || v.destroy();
    }), Ge && (oe.unregisterInstance(Ge), e(60, Ge = void 0));
  });
  const wt = (v, se) => yr(se, v);
  function or(v) {
    Vr[v ? "unshift" : "push"](() => {
      nt = v, e(21, nt);
    });
  }
  function Yt(v) {
    Vr[v ? "unshift" : "push"](() => {
      tt = v, e(23, tt);
    });
  }
  function jr(v) {
    Vr[v ? "unshift" : "push"](() => {
      at = v, e(22, at);
    });
  }
  return t.$$set = (v) => {
    "componentContext" in v && e(0, re = v.componentContext), "layoutParams" in v && e(1, ae = v.layoutParams);
  }, t.$$.update = () => {
    var v, se, d, B, Ie, He, ke, R, Jt, Ht;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(66, n = re.origJson), t.$$.dirty[2] & /*origJson*/
    16 && n && nr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(63, o = Array.isArray(re.json.items) && re.json.items || []), t.$$.dirty[2] & /*items*/
    2 && e(47, i = o.map((Ye) => {
      var ct;
      return { json: Ye.div, id: (ct = Ye.div) == null ? void 0 : ct.id };
    })), t.$$.dirty[0] & /*componentContext*/
    1 && e(65, s = re.getJsonWithVars(re.json.selected_tab)), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(46, a = re.getDerivedFromVars(re.json.tab_title_style, void 0, !0))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(45, l = re.getDerivedFromVars(re.json.has_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && Je(e(44, u = re.getDerivedFromVars(re.json.separator_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Se(e(43, c = re.getDerivedFromVars(re.json.separator_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(42, f = re.getDerivedFromVars(re.json.switch_tabs_by_content_swipe_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(41, _ = re.getDerivedFromVars(re.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(40, h = re.getDerivedFromVars(re.json.title_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(39, m = re.getDerivedFromVars(re.json.tab_title_delimiter))), t.$$.dirty[2] & /*jsonSelectedTab*/
    8 && e(17, p = s && Number(s) || 0), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*items*/
    2)
      if (Array.isArray(o) && o.length) {
        let Ye = [];
        o.forEach((ct, Wt) => {
          const Fr = re.getJsonWithVars({
            index: Wt,
            title: ct.title,
            title_click_action: ct.title_click_action
          });
          Fr.title && typeof Fr.title == "string" ? Ye.push(Fr) : re.logError(Y(new Error("Incorrect title for the tab"), { additional: { index: Wt } }));
        }), Oe.set(Ye);
      } else
        Oe.set([]);
    if (t.$$.dirty[0] & /*$childStore, componentContext*/
    262145 && (H != null && H.length ? e(2, ee = !1) : (e(2, ee = !0), re.logError(Y(new Error('Incorrect or empty "items" prop for div "tabs"'))))), t.$$.dirty[0] & /*componentContext, childLayoutParams*/
    9) {
      let Ye = { parentContainerOrientation: "horizontal" };
      ((v = re.json.width) == null ? void 0 : v.type) === "wrap_content" && (Ye.parentHorizontalWrapContent = !0), (!re.json.height || re.json.height.type === "wrap_content") && (Ye.parentVerticalWrapContent = !0), e(3, Ne = xo(Ye, Ne));
    }
    if (t.$$.dirty[0] & /*hasError, selected, componentContext*/
    131077 | t.$$.dirty[2] & /*items*/
    2 && !ee && (p < 0 || p >= o.length) && (re.logError(Y(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: re.json.selected_tab,
        length: o.length
      }
    })), e(17, p = p < 0 ? 0 : o.length - 1)), t.$$.dirty[0] & /*hasError, $childStore, selected, componentContext*/
    393221 && !ee && !H.some((Ye) => p === Ye.index) && (re.logError(Y(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: re.json.selected_tab
      }
    })), e(17, p = ((se = H[0]) == null ? void 0 : se.index) || 0)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && e(64, w = O || {}), t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(4, rt = Un(w.font_size, rt)), t.$$.dirty[0] & /*tabFontSize, $direction, tabPaddings*/
    524336 | t.$$.dirty[2] & /*tabStyle*/
    4 && (w.font_size || w.paddings)) {
      const Ye = w.paddings || { top: 6, right: 8, bottom: 6, left: 8 }, ct = {
        top: (Number(Ye.top) || 0) / rt * 10,
        right: (Number(Ee === "ltr" ? Ye.end : Ye.start) || Number(Ye.right) || 0) / rt * 10,
        bottom: (Number(Ye.bottom) || 0) / rt * 10,
        left: (Number(Ee === "ltr" ? Ye.start : Ye.end) || Number(Ye.left) || 0) / rt * 10
      };
      e(5, Mt = as(ct, Ee, Mt));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Ye = w.line_height;
      Ye !== void 0 && zn(Ye) && e(25, ft = pe(Ye / rt * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Ye = w.letter_spacing;
      Ye !== void 0 && Nn(Ye) && e(26, K = pe(Ye / rt * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize, tabBorderRadius*/
    80 | t.$$.dirty[2] & /*tabStyle*/
    4 && (w.corner_radius || w.corners_radius || w.font_size)) {
      const Ye = (d = w.corner_radius) != null ? d : 1e3;
      w.corners_radius ? e(6, _e = Pb(w.corners_radius, Ye, rt, _e)) : Nn(Ye) && e(6, _e = pe(Ye / rt * 10));
    }
    t.$$.dirty[0] & /*tabActiveFontWeight*/
    128 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(7, st = yi(w.active_font_weight || w.font_weight, void 0, st)), w.font_family && typeof w.font_family == "string" ? e(27, Pe = oe.typefaceProvider(w.font_family, { fontWeight: st || 400 })) : e(27, Pe = ""), e(28, I = Oi(w.active_font_variation_settings))), t.$$.dirty[0] & /*tabInactiveFontWeight*/
    256 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(8, jt = yi(w.inactive_font_weight || w.font_weight, void 0, jt)), w.font_family && typeof w.font_family == "string" ? e(29, lt = oe.typefaceProvider(w.font_family, { fontWeight: jt || 400 })) : e(29, lt = ""), e(30, Et = Oi(w.inactive_font_variation_settings))), t.$$.dirty[0] & /*tabActiveTextColor*/
    512 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(9, Dt = pr(w.active_text_color, 1, Dt)), t.$$.dirty[0] & /*tabInactiveTextColor*/
    1024 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(10, ot = pr(w.inactive_text_color, 1, ot)), t.$$.dirty[0] & /*tabActiveBackground*/
    2048 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(11, q = pr(w.active_background_color, 1, q)), t.$$.dirty[0] & /*tabInactiveBackground*/
    4096 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(12, Tt = pr(w.inactive_background_color, 1, Tt)), t.$$.dirty[0] & /*tabItemSpacing*/
    8192 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(13, Ft = tn(w.item_spacing, Ft)), t.$$.dirty[0] & /*$jsonSeparator, $direction*/
    1572864 | t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*$jsonSeparatorColor, $jsonSeparatorPaddings, separatorMargins*/
    1537 && qe && (Z && e(61, Kt = pr(Z, 1, Kt)), ve && e(62, Xt = as(ve, Ee, Xt))), t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*separatorMargins*/
    1 && e(38, k = {
      background: Kt,
      margin: Xt
    }), t.$$.dirty[2] & /*$jsonSwipeEnabled*/
    256 && e(37, N = typeof W > "u" ? !0 : !!W), t.$$.dirty[0] & /*titlePadding*/
    16384 | t.$$.dirty[2] & /*$jsonTitlePaddings*/
    128 && e(14, je = bi(C || void 0, je)), t.$$.dirty[0] & /*delimitierStyle*/
    32768 | t.$$.dirty[2] & /*$jsonDelimiterStyle*/
    64 && e(15, ar = Mb(T, ar)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && ((O == null ? void 0 : O.animation_type) === "fade" || (O == null ? void 0 : O.animation_type) === "none") && e(16, rr = O.animation_type), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && Nn(O == null ? void 0 : O.animation_duration) && e(35, er = O.animation_duration), t.$$.dirty[2] & /*items*/
    2 && pt(o), t.$$.dirty[0] & /*componentContext, hasError, selected*/
    131077 | t.$$.dirty[1] & /*prevId*/
    536870912 | t.$$.dirty[2] & /*items*/
    2 && re.json && (Ge && (oe.unregisterInstance(Ge), e(60, Ge = void 0)), re.id && !ee && !re.fakeElement && (e(60, Ge = re.id), oe.registerInstance(Ge, {
      setCurrentItem(Ye, ct) {
        if (Ye < 0 || Ye > o.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        xt(Ye, !1, ct);
      },
      setPreviousItem(Ye, ct, Wt) {
        let Fr = dt(p - Ye, ct);
        xt(Fr, !1, Wt);
      },
      setNextItem(Ye, ct, Wt) {
        let Fr = dt(p + Ye, ct);
        xt(Fr, !1, Wt);
      },
      scrollToStart(Ye) {
        xt(0, !1, Ye);
      },
      scrollToEnd(Ye) {
        xt(o.length - 1, !1, Ye);
      },
      scrollCombined({ step: Ye, overflow: ct, animated: Wt }) {
        Ye && xt(dt(p + Ye, ct || "clamp"), !1, Wt || !0);
      }
    }))), t.$$.dirty[0] & /*componentContext, selected, animationType*/
    196609 | t.$$.dirty[2] & /*items*/
    2 && e(24, yt = {
      "height-parent": ((B = re.json.height) == null ? void 0 : B.type) === "match_parent" ? "yes" : "",
      "own-height": (((Ie = re.json.height) == null ? void 0 : Ie.type) === "match_parent" || ((He = re.json.height) == null ? void 0 : He.type) === "fixed") && !(((Jt = (R = (ke = o[p]) == null ? void 0 : ke.div) == null ? void 0 : R.height) == null ? void 0 : Jt.type) === "wrap_content" && ((Ht = o[p].div) != null && Ht.height.constrained)),
      animation: rr
    });
  }, [
    re,
    ae,
    ee,
    Ne,
    rt,
    Mt,
    _e,
    st,
    jt,
    Dt,
    ot,
    q,
    Tt,
    Ft,
    je,
    ar,
    rr,
    p,
    H,
    Ee,
    qe,
    nt,
    at,
    tt,
    yt,
    ft,
    K,
    Pe,
    I,
    lt,
    Et,
    Ke,
    _t,
    $e,
    Be,
    er,
    mr,
    N,
    k,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    i,
    ue,
    we,
    Re,
    Oe,
    tr,
    Rt,
    yr,
    ut,
    Gt,
    Zt,
    ur,
    fe,
    Ge,
    Kt,
    Xt,
    o,
    w,
    s,
    n,
    O,
    T,
    C,
    W,
    ve,
    Z,
    wt,
    or,
    Yt,
    jr
  ];
}
class Jb extends Or {
  constructor(r) {
    super(), Lr(this, r, Gb, Ub, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const qb = "appkit-state", Kb = "appkit-state_overflow_visible", Yb = "appkit-state__animations", wi = {
  state: qb,
  state_overflow_visible: Kb,
  state__animations: Yb,
  "state__animation-child": "appkit-state__animation-child",
  "state__animation-child-inner": "appkit-state__animation-child-inner"
};
function vl(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function Xb(t) {
  return t * t * t;
}
function r_(t) {
  const r = t - 1;
  return r * r * r + 1;
}
function n_(t) {
  return (r) => {
    if (r <= 0)
      return 0;
    if (r >= 1)
      return 1;
    const e = r * t.length, n = Math.floor(e), o = t[n], i = t[n + 1], s = e - n;
    return o * s + i * (1 - s);
  };
}
const Zb = [
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
], Qb = n_(Zb), xb = [
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
], $b = n_(xb), na = {
  linear: ll,
  ease: Qb,
  ease_in: Xb,
  ease_out: r_,
  ease_in_out: vl,
  spring: $b
};
function Ca(t) {
  return na[t];
}
const o_ = 200, i_ = 0, ey = 0, ty = 0;
function Lc(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || o_) + (Number(r.start_delay) || i_)
  ));
}
function ry(t, {
  transitions: r,
  elementBbox: e,
  rootBbox: n,
  direction: o,
  maxDuration: i,
  alpha: s
}) {
  const a = s != null ? s : 1;
  return {
    duration: Li() ? 0 : i,
    css: (l) => {
      const u = l * i, c = r.map((k) => {
        var X, le, C;
        const N = Number(k.start_delay) || i_, H = Number(k.duration) || o_, O = Math.max(0, Math.min(1, (u - N) / H)), ne = o === "in" ? 1 - O : O, T = (Ca(k.interpolator || "ease_in_out") || vl)(ne);
        if (k.type === "fade")
          return T >= 1 ? {
            active: !1,
            opacity: 0
          } : {
            active: T > 0 && T < 1,
            opacity: (1 - T) * a + T * (k.alpha || ey)
          };
        if (k.type === "slide") {
          const D = k.edge === "top" || k.edge === "left" ? -1 : 1, M = k.edge === "top" || k.edge === "bottom" || !k.edge ? "translateY" : "translateX";
          let W = (X = k.distance) == null ? void 0 : X.value;
          W === void 0 && (k.edge === "top" || k.edge === "bottom" || !k.edge ? W = Math.abs(
            n[k.edge === "bottom" ? "bottom" : "top"] - e[k.edge === "bottom" ? "top" : "bottom"]
          ) : W = Math.abs(
            n[k.edge === "left" ? "left" : "right"] - e[k.edge === "left" ? "right" : "left"]
          ));
          const Q = W * T;
          return {
            active: T > 0 && T < 1,
            translate: `${M}(${Q * D}px)`
          };
        } else if (k.type === "scale") {
          const D = 1 - T + T * (k.scale || ty), M = (le = k.pivot_x) != null ? le : 0.5, W = (C = k.pivot_y) != null ? C : 0.5, Q = (1 - D) * e.width * M, me = (1 - D) * e.height * W;
          return {
            active: T > 0 && T < 1,
            scale: `translate(${Q}px, ${me}px) scale(${D})`
          };
        }
        return {};
      }), f = c.map((k) => k.opacity).filter((k) => k !== void 0).reduce((k, N) => k * N, 1), _ = c.map((k) => k.translate).filter((k) => k !== void 0).join(" "), h = c.map((k) => k.scale).filter((k) => k !== void 0).join(" "), m = c.filter((k) => k.active).map((k) => k.scale).filter((k) => k !== void 0), p = m.length ? m[m.length - 1] : h;
      return `transform:${[_, p].filter(Boolean).join(" ") || "none"};opacity:${f}`;
    }
  };
}
function Uo(t, r, e) {
  return t * (1 - e) + r * e;
}
const ny = 200, oy = 0;
function iy(t, {
  rootBbox: r,
  beforeBbox: e,
  afterBbox: n,
  transition: o
}) {
  var i, s;
  return {
    delay: (i = o.start_delay) != null ? i : oy,
    duration: Li() ? 0 : (s = o.duration) != null ? s : ny,
    easing: o.interpolator && o.interpolator in na ? na[o.interpolator] : vl,
    css: (a) => [
      `top:${Uo(e.top, n.top, a) - r.top}px`,
      `left:${Uo(e.left, n.left, a) - r.left}px`,
      `width:${Uo(e.width, n.width, a)}px`,
      `height:${Uo(e.height, n.height, a)}px`
    ].join(";")
  };
}
function s_(t) {
  const r = [];
  return t.type === "set" ? (t.items || []).forEach((e) => {
    r.push(...s_(e));
  }) : r.push(t), r;
}
const { Map: sy } = Po;
function Oc(t, r, e) {
  const n = t.slice();
  return n[37] = r[e], n;
}
function Bc(t, r, e) {
  const n = t.slice();
  return n[40] = r[e], n;
}
function ly(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function ay(t) {
  let r, e;
  const n = [
    {
      cls: ht(
        "state",
        wi,
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
    $$slots: { default: [fy] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = jo(o, n[i]);
  return r = new mn({ props: o }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(i, s) {
      Pt(r, i, s), e = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams, parentOfItems, replaceItems, devapi*/
      6915 ? No(n, [
        s[0] & /*mods*/
        256 && {
          cls: ht(
            "state",
            wi,
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
        2048 && Td(
          /*devapi*/
          i[11]
        )
      ]) : {};
      s[0] & /*animationRoot, animationList, selectedId, selectedComponentContext, childContexts*/
      248 | s[1] & /*$$scope*/
      4096 && (a.$$scope = { dirty: s, ctx: i }), r.$set(a);
    },
    i(i) {
      e || (L(r.$$.fragment, i), e = !0);
    },
    o(i) {
      x(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Nt(r, i);
    }
  };
}
function Rc(t) {
  let r, e, n = ir(
    /*childContexts*/
    t[7]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Wc(Bc(t, n, s));
  const i = (s) => x(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = Qt();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      J(s, r, a), e = !0;
    },
    p(s, a) {
      if (a[0] & /*childContexts, selectedComponentContext*/
      192) {
        n = ir(
          /*childContexts*/
          s[7]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = Bc(s, n, l);
          o[l] ? (o[l].p(u, a), L(o[l], 1)) : (o[l] = Wc(u), o[l].c(), L(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (sr(), l = n.length; l < o.length; l += 1)
          i(l);
        lr();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          L(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        x(o[a]);
      e = !1;
    },
    d(s) {
      s && G(r), on(o, s);
    }
  };
}
function Hc(t) {
  let r, e, n, o;
  return e = new Jn({
    props: { componentContext: (
      /*context*/
      t[40]
    ) }
  }), {
    c() {
      r = Me("div"), Lt(e.$$.fragment), n = gr(), r.hidden = !0, g(r, "data-hidden", "true");
    },
    m(i, s) {
      J(i, r, s), Pt(e, r, null), bt(r, n), o = !0;
    },
    p(i, s) {
      const a = {};
      s[0] & /*childContexts*/
      128 && (a.componentContext = /*context*/
      i[40]), e.$set(a);
    },
    i(i) {
      o || (L(e.$$.fragment, i), o = !0);
    },
    o(i) {
      x(e.$$.fragment, i), o = !1;
    },
    d(i) {
      i && G(r), Nt(e);
    }
  };
}
function Wc(t) {
  let r, e, n = (
    /*context*/
    t[40] && /*context*/
    t[40] !== /*selectedComponentContext*/
    t[6] && Hc(t)
  );
  return {
    c() {
      n && n.c(), r = Qt();
    },
    m(o, i) {
      n && n.m(o, i), J(o, r, i), e = !0;
    },
    p(o, i) {
      /*context*/
      o[40] && /*context*/
      o[40] !== /*selectedComponentContext*/
      o[6] ? n ? (n.p(o, i), i[0] & /*childContexts, selectedComponentContext*/
      192 && L(n, 1)) : (n = Hc(o), n.c(), L(n, 1), n.m(r.parentNode, r)) : n && (sr(), x(n, 1, 1, () => {
        n = null;
      }), lr());
    },
    i(o) {
      e || (L(n), e = !0);
    },
    o(o) {
      x(n), e = !1;
    },
    d(o) {
      o && G(r), n && n.d(o);
    }
  };
}
function Uc(t) {
  let r = (
    /*selectedId*/
    t[5]
  ), e, n, o = Gc(t);
  return {
    c() {
      o.c(), e = Qt();
    },
    m(i, s) {
      o.m(i, s), J(i, e, s), n = !0;
    },
    p(i, s) {
      s[0] & /*selectedId*/
      32 && Sr(r, r = /*selectedId*/
      i[5]) ? (sr(), x(o, 1, 1, j), lr(), o = Gc(i), o.c(), L(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
    },
    i(i) {
      n || (L(o), n = !0);
    },
    o(i) {
      x(o), n = !1;
    },
    d(i) {
      i && G(e), o.d(i);
    }
  };
}
function Gc(t) {
  let r, e;
  return r = new Jn({
    props: {
      componentContext: (
        /*selectedComponentContext*/
        t[6]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*selectedComponentContext*/
      64 && (i.componentContext = /*selectedComponentContext*/
      n[6]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function uy(t) {
  let r, e, n, o, i, s, a, l;
  n = new Jn({
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
      r = Me("div"), e = Me("div"), Lt(n.$$.fragment), o = gr(), g(e, "class", wi["state__animation-child-inner"]), g(r, "class", wi["state__animation-child"]);
    },
    m(c, f) {
      J(c, r, f), bt(r, e), Pt(n, e, null), bt(r, o), s = !0, a || (l = Qe(r, "introend", u), a = !0);
    },
    p(c, f) {
      t = c;
      const _ = {};
      f[0] & /*animationList*/
      16 && (_.componentContext = /*item*/
      t[37].componentContextCopy), n.$set(_);
    },
    i(c) {
      s || (L(n.$$.fragment, c), i || po(() => {
        i = pl(
          r,
          iy,
          /*item*/
          t[37]
        ), i.start();
      }), s = !0);
    },
    o(c) {
      x(n.$$.fragment, c), s = !1;
    },
    d(c) {
      c && G(r), Nt(n), a = !1, l();
    }
  };
}
function cy(t) {
  let r, e, n, o, i, s = `${/*item*/
  t[37].offsetLeft}px`, a = `${/*item*/
  t[37].offsetTop}px`, l = `${/*item*/
  t[37].width}px`, u = `${/*item*/
  t[37].height}px`, c, f, _;
  n = new Jn({
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
      r = Me("div"), e = Me("div"), Lt(n.$$.fragment), o = gr(), g(e, "class", wi["state__animation-child-inner"]), g(r, "class", wi["state__animation-child"]), F(r, "left", s), F(r, "top", a), F(r, "width", l), F(r, "height", u);
    },
    m(m, p) {
      J(m, r, p), bt(r, e), Pt(n, e, null), bt(r, o), c = !0, f || (_ = Qe(r, "introend", h), f = !0);
    },
    p(m, p) {
      t = m;
      const w = {};
      p[0] & /*animationList*/
      16 && (w.componentContext = /*item*/
      t[37].componentContextCopy), n.$set(w), p[0] & /*animationList*/
      16 && s !== (s = `${/*item*/
      t[37].offsetLeft}px`) && F(r, "left", s), p[0] & /*animationList*/
      16 && a !== (a = `${/*item*/
      t[37].offsetTop}px`) && F(r, "top", a), p[0] & /*animationList*/
      16 && l !== (l = `${/*item*/
      t[37].width}px`) && F(r, "width", l), p[0] & /*animationList*/
      16 && u !== (u = `${/*item*/
      t[37].height}px`) && F(r, "height", u);
    },
    i(m) {
      c || (L(n.$$.fragment, m), i || po(() => {
        i = pl(
          r,
          ry,
          /*item*/
          t[37]
        ), i.start();
      }), c = !0);
    },
    o(m) {
      x(n.$$.fragment, m), c = !1;
    },
    d(m) {
      m && G(r), Nt(n), f = !1, _();
    }
  };
}
function Jc(t, r) {
  let e, n, o, i, s;
  const a = [cy, uy], l = [];
  function u(c, f) {
    return "direction" in /*item*/
    c[37] ? 0 : 1;
  }
  return n = u(r), o = l[n] = a[n](r), {
    key: t,
    first: null,
    c() {
      e = Qt(), o.c(), i = Qt(), this.first = e;
    },
    m(c, f) {
      J(c, e, f), l[n].m(c, f), J(c, i, f), s = !0;
    },
    p(c, f) {
      r = c;
      let _ = n;
      n = u(r), n === _ ? l[n].p(r, f) : (sr(), x(l[_], 1, 1, () => {
        l[_] = null;
      }), lr(), o = l[n], o ? o.p(r, f) : (o = l[n] = a[n](r), o.c()), L(o, 1), o.m(i.parentNode, i));
    },
    i(c) {
      s || (L(o), s = !0);
    },
    o(c) {
      x(o), s = !1;
    },
    d(c) {
      c && (G(e), G(i)), l[n].d(c);
    }
  };
}
function fy(t) {
  let r, e, n, o = [], i = new sy(), s, a = (
    /*childContexts*/
    t[7] && Rc(t)
  ), l = (
    /*selectedComponentContext*/
    t[6] && Uc(t)
  ), u = ir(
    /*animationList*/
    t[4]
  );
  const c = (f) => (
    /*item*/
    f[37]
  );
  for (let f = 0; f < u.length; f += 1) {
    let _ = Oc(t, u, f), h = c(_);
    i.set(h, o[f] = Jc(h, _));
  }
  return {
    c() {
      a && a.c(), r = gr(), l && l.c(), e = gr(), n = Me("div");
      for (let f = 0; f < o.length; f += 1)
        o[f].c();
      g(n, "class", wi.state__animations), g(n, "aria-hidden", "true");
    },
    m(f, _) {
      a && a.m(f, _), J(f, r, _), l && l.m(f, _), J(f, e, _), J(f, n, _);
      for (let h = 0; h < o.length; h += 1)
        o[h] && o[h].m(n, null);
      t[23](n), s = !0;
    },
    p(f, _) {
      /*childContexts*/
      f[7] ? a ? (a.p(f, _), _[0] & /*childContexts*/
      128 && L(a, 1)) : (a = Rc(f), a.c(), L(a, 1), a.m(r.parentNode, r)) : a && (sr(), x(a, 1, 1, () => {
        a = null;
      }), lr()), /*selectedComponentContext*/
      f[6] ? l ? (l.p(f, _), _[0] & /*selectedComponentContext*/
      64 && L(l, 1)) : (l = Uc(f), l.c(), L(l, 1), l.m(e.parentNode, e)) : l && (sr(), x(l, 1, 1, () => {
        l = null;
      }), lr()), _[0] & /*animationList, onOutro*/
      8208 && (u = ir(
        /*animationList*/
        f[4]
      ), sr(), o = Dd(o, _, c, 1, f, u, i, n, Id, Jc, null, Oc), lr());
    },
    i(f) {
      if (!s) {
        L(a), L(l);
        for (let _ = 0; _ < u.length; _ += 1)
          L(o[_]);
        s = !0;
      }
    },
    o(f) {
      x(a), x(l);
      for (let _ = 0; _ < o.length; _ += 1)
        x(o[_]);
      s = !1;
    },
    d(f) {
      f && (G(r), G(e), G(n)), a && a.d(f), l && l.d(f);
      for (let _ = 0; _ < o.length; _ += 1)
        o[_].d();
      t[23](null);
    }
  };
}
function dy(t) {
  let r, e, n, o;
  const i = [ay, ly], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (sr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), lr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function _y(t) {
  return t.some((r) => r.type === "fade");
}
function l_(t) {
  return t.type === "change_bounds" ? t : t.type === "set" ? l_(t.items[0]) : null;
}
function py(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h = j, m = () => (h(), h = S(i, (ue) => e(20, _ = ue)), i);
  t.$$.on_destroy.push(() => h());
  let { componentContext: p } = r, { layoutParams: w = void 0 } = r;
  const k = Dr(Kr);
  let N = !1, H, O = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Set(), de = [], T = [], X = [], le = [], C, D, M, W, Q = !1, me = {
    devapi: {
      getState() {
        return D;
      },
      setState(ue) {
        return Z(ue);
      }
    }
  };
  function Ee() {
    e(15, Q = !1);
  }
  function ve(ue) {
    W ? e(6, M = W[u.findIndex((ge) => ge.state_id === (ue == null ? void 0 : ue.state_id))]) : (M && M.destroy(), e(6, M = ue != null && ue.div ? p.produceChildContext(ue.div, {
      path: ue.state_id || "<unknown>"
    }) : void 0));
  }
  function he(ue) {
    const ge = p.json.states;
    if (!ge)
      return;
    const ce = /* @__PURE__ */ new Set();
    e(16, u = ge.map((re, ae) => (u[ae].div !== ue[ae] && re.state_id && ce.add(re.state_id), { ...re, div: ue[ae] }))), e(0, p.json = { ...p.json, states: u }, p), D && ce.has(D) && ve(u.find((re) => re.state_id === D) || null);
  }
  function Se(ue, ge, ce) {
    let { json: re, parentComponentContext: ae, transitions: oe, node: we } = ge;
    re = p.getJsonWithVars(re), oe = p.getJsonWithVars(oe);
    const Re = s_(oe), Ge = ge.bbox || we.getBoundingClientRect(), ee = {
      ...re,
      margins: void 0,
      alpha: _y(Re) ? void 0 : re.alpha
    };
    return {
      id: ae.id || "",
      json: ee,
      componentContextCopy: ae.produceChildContext(ee, { fake: vu }),
      elementBbox: Ge,
      rootBbox: ue,
      transitions: Re,
      alpha: re.alpha,
      width: Ge.width,
      height: Ge.height,
      offsetTop: Ge.top - ue.top,
      offsetLeft: Ge.left - ue.left,
      direction: ce,
      resolvePromise: ge.resolvePromise,
      node: ge.node
    };
  }
  async function Z(ue) {
    if (D === ue)
      return p;
    k.setRunning("stateChange", !0);
    const ge = new Set(ne);
    de.forEach((ee) => {
      ee.resolvePromise && ee.resolvePromise();
    }), e(4, de = []);
    let ce = [];
    if (H) {
      const ee = H.getBoundingClientRect();
      ce = X.map((Oe) => Se(ee, Oe, "out"));
    }
    le.forEach((ee) => {
      ee.transitions && O.set(ee.id, {
        transitions: ee.transitions,
        rect: ee.node.getBoundingClientRect()
      });
    }), T = [], X = [], le = [];
    const re = u.find((ee) => ee.state_id === ue) || null;
    if (re ? (e(5, D = ue), a == null || a.setValue(D), ve(re)) : p.logError(Y(new Error("Cannot find state with id"), { additional: { stateId: ue } })), await In(), !H)
      return;
    const ae = H.getBoundingClientRect();
    let oe = T.filter((ee) => {
      var Oe;
      return ee.parentComponentContext.id && !ge.has(ee.parentComponentContext.id) ? !0 : ((Oe = ee.resolvePromise) == null || Oe.call(ee), !1);
    }).map((ee) => Se(ae, ee, "in"));
    ce = ce.filter((ee) => {
      var Oe;
      return ee.id && !ne.has(ee.id) ? !0 : ((Oe = ee.resolvePromise) == null || Oe.call(ee), !1);
    });
    const we = ce.concat(oe), Re = we.reduce(
      (ee, Oe) => Math.max(ee, Lc(Oe.transitions)),
      0
    ), Ge = le.filter((ee) => O.has(ee.id)).map((ee) => {
      const Oe = {
        ...ee.json,
        margins: void 0,
        width: { type: "match_parent" },
        height: { type: "match_parent" }
      }, Ne = O.get(ee.id);
      return {
        id: ee.parentComponentContext.id || "",
        json: Oe,
        componentContextCopy: ee.parentComponentContext.produceChildContext(Oe, { fake: vu }),
        rootBbox: ae,
        beforeBbox: Ne.rect,
        afterBbox: ee.node.getBoundingClientRect(),
        node: ee.node,
        transition: p.getJsonWithVars(l_(Ne.transitions)),
        resolvePromise: ee.resolvePromise
      };
    });
    return e(4, de = [
      ...we.map((ee) => ({ ...ee, maxDuration: Re })),
      ...Ge
    ]), O.clear(), k.setRunning("stateChange", !1), p;
  }
  _i(ya, {
    // eslint-disable-next-line max-params
    runVisibilityTransition(ue, ge, ce, re, ae, oe) {
      if (!H)
        return Promise.resolve();
      const we = H.getBoundingClientRect(), Re = Se(
        we,
        {
          json: ue,
          parentComponentContext: ge,
          transitions: ce,
          node: re,
          bbox: oe
        },
        ae
      ), Ge = Lc(Re.transitions), ee = { ...Re, maxDuration: Ge };
      return e(4, de = [...de.filter((Oe) => Oe.node !== Re.node), ee]), new Promise((Oe) => {
        ee.resolvePromise = Oe;
      });
    },
    registerChildWithTransitionIn(ue, ge, ce, re) {
      const ae = {
        json: ue,
        parentComponentContext: ge,
        transitions: ce,
        node: re
      };
      return T.push(ae), new Promise((oe) => {
        ae.resolvePromise = oe;
      });
    },
    registerChildWithTransitionOut(ue, ge, ce, re) {
      const ae = {
        json: ue,
        parentComponentContext: ge,
        transitions: ce,
        node: re
      };
      return X.push(ae), new Promise((oe) => {
        ae.resolvePromise = oe;
      });
    },
    registerChildWithTransitionChange(ue, ge, ce, re) {
      const ae = ge.id;
      if (!ae)
        return Promise.resolve();
      const oe = {
        id: ae,
        json: ue,
        parentComponentContext: ge,
        transitions: ce,
        node: re
      };
      return le.push(oe), new Promise((we) => {
        oe.resolvePromise = we;
      });
    },
    hasTransitionChange(ue) {
      return ue ? O.has(ue) : !1;
    },
    registerChild(ue) {
      ne.add(ue);
    },
    unregisterChild(ue) {
      ne.delete(ue);
    }
  });
  function et(ue) {
    if (!Q && (e(15, Q = !0), ue.length)) {
      k.devtoolCreateHierarchy === "eager" && e(7, W = ue.map((ce) => ce != null && ce.div ? p.produceChildContext(ce.div, { path: ce.state_id || "<unknown>" }) : void 0));
      const ge = (a == null ? void 0 : a.getValue()) || o;
      if (ge) {
        e(5, D = ge);
        const ce = ue.find((re) => re.state_id === D) || null;
        ve(ce), ce || p.logError(Y(new Error("Cannot find state for default_state_id"), { additional: { selectedId: D } }));
      } else {
        const ce = ue[0];
        e(5, D = ce.state_id), ve(ce);
      }
      a && (a.setValue(D), a.subscribe((ce) => {
        Z(ce);
      }));
    }
  }
  function Je(ue) {
    e(4, de = de.filter((ge) => ge !== ue)), ue.resolvePromise && ue.resolvePromise();
  }
  sn(() => {
    W ? W.forEach((ue) => {
      ue == null || ue.destroy();
    }) : M && M.destroy(), C && (C(), e(14, C = void 0));
  });
  const qe = (ue) => Je(ue), be = (ue) => Je(ue);
  function Te(ue) {
    Vr[ue ? "unshift" : "push"](() => {
      H = ue, e(3, H);
    });
  }
  return t.$$set = (ue) => {
    "componentContext" in ue && e(0, p = ue.componentContext), "layoutParams" in ue && e(1, w = ue.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*componentContext*/
    1 && e(17, n = p.json.div_id || p.id), t.$$.dirty[0] & /*componentContext*/
    1 && (o = p.getJsonWithVars(p.json.default_state_id)), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(10, i = p.getDerivedFromVars(p.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, s = p.json.state_id_variable), t.$$.dirty[0] & /*stateVariableName, componentContext*/
    524289 && (a = s ? p.getVariable(s, "string") || k.awaitGlobalVariable(s, "string", "") : null), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, l = p.origJson), t.$$.dirty[0] & /*origJson*/
    262144 && l && Ee(), t.$$.dirty[0] & /*stateId, componentContext*/
    131073 && (n ? e(2, N = !1) : (e(2, N = !0), p.logError(Y(new Error('Missing "id" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext*/
    1 && p.json && (ne = /* @__PURE__ */ new Set()), t.$$.dirty[0] & /*componentContext*/
    1 && e(16, u = Array.isArray(p.json.states) && p.json.states || []), t.$$.dirty[0] & /*items*/
    65536 && e(9, c = u.map((ue) => {
      var ge;
      return { json: ue.div, id: (ge = ue.div) == null ? void 0 : ge.id };
    })), t.$$.dirty[0] & /*items, componentContext*/
    65537 && (u != null && u.length ? e(2, N = !1) : (e(2, N = !0), p.logError(Y(new Error('Empty "states" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext, stateUnregister, stateId*/
    147457 && p.json && (C && (C(), e(14, C = void 0)), n && !(p != null && p.fakeElement) && e(14, C = p.registerState(n, Z))), t.$$.dirty[0] & /*inited, items*/
    98304 && !Q && et(u), t.$$.dirty[0] & /*$jsonClipToBounds*/
    1048576 && e(8, f = {
      overflow: _ === !1 || _ === 0 ? "visible" : void 0
    });
  }, [
    p,
    w,
    N,
    H,
    de,
    D,
    M,
    W,
    f,
    c,
    i,
    me,
    he,
    Je,
    C,
    Q,
    u,
    n,
    l,
    s,
    _,
    qe,
    be,
    Te
  ];
}
class gy extends Or {
  constructor(r) {
    super(), Lr(this, r, py, dy, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const hy = "appkit-pager", my = "appkit-pager__items", by = "appkit-pager_animated", yy = "appkit-pager__item", wy = "appkit-pager_clip", ky = "appkit-pager_orientation_horizontal", vy = "appkit-pager_orientation_vertical", jy = "appkit-pager__item_height_content", Cy = "appkit-pager__item_height_fixed", Ey = "appkit-pager__item_width_content", Ay = "appkit-pager__item_width_fixed", Sy = "appkit-pager__arrow", Mo = {
  pager: hy,
  pager__items: my,
  pager_animated: by,
  pager__item: yy,
  "pager_scroll-align_start": "appkit-pager_scroll-align_start",
  "pager_scroll-align_center": "appkit-pager_scroll-align_center",
  "pager_scroll-align_end": "appkit-pager_scroll-align_end",
  pager_clip: wy,
  pager_orientation_horizontal: ky,
  pager_orientation_vertical: vy,
  "pager_cross-align_center": "appkit-pager_cross-align_center",
  "pager_cross-align_end": "appkit-pager_cross-align_end",
  pager__item_height_content: jy,
  pager__item_height_fixed: Cy,
  "pager__item_height-constrained": "appkit-pager__item_height-constrained",
  pager__item_width_content: Ey,
  pager__item_width_fixed: Ay,
  "pager__item_width-constrained": "appkit-pager__item_width-constrained",
  pager__arrow: Sy,
  "pager__arrow-icon-path": "appkit-pager__arrow-icon-path"
}, { window: Vy } = Po;
function qc(t, r, e) {
  const n = t.slice();
  return n[95] = r[e], n;
}
function Fy(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function Iy(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht(
        "pager",
        Mo,
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
      $$slots: { default: [My] },
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      8192 && (i.cls = ht(
        "pager",
        Mo,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function Kc(t) {
  let r, e, n, o, i, s, a;
  return e = new Jn({
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
      r = Me("div"), Lt(e.$$.fragment), n = gr(), g(r, "class", o = ht("pager__item", Mo, Zc(
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
      J(l, r, u), Pt(e, r, null), bt(r, n), a = !0;
    },
    p(l, u) {
      const c = {};
      u[0] & /*visibleItems*/
      16 && (c.componentContext = /*item*/
      l[95].componentContext), u[0] & /*childLayoutParams*/
      512 && (c.layoutParams = /*childLayoutParams*/
      l[9]), e.$set(c), (!a || u[0] & /*orientation, visibleItems*/
      20 && o !== (o = ht("pager__item", Mo, Zc(
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
      a || (L(e.$$.fragment, l), a = !0);
    },
    o(l) {
      x(e.$$.fragment, l), a = !1;
    },
    d(l) {
      l && G(r), Nt(e);
    }
  };
}
function Yc(t) {
  let r, e, n, o = !/*leftClass*/
  t[27] && Dy();
  return {
    c() {
      r = Me("div"), o && o.c(), g(
        r,
        "class",
        /*leftClass*/
        t[27] || `${Mo.pager__arrow} ${ho.arrow} ${ho.arrow_left}`
      );
    },
    m(i, s) {
      J(i, r, s), o && o.m(r, null), e || (n = Qe(
        r,
        "click",
        /*click_handler*/
        t[70]
      ), e = !0);
    },
    p: j,
    d(i) {
      i && G(r), o && o.d(), e = !1, n();
    }
  };
}
function Dy(t) {
  let r, e;
  return {
    c() {
      r = en("svg"), e = en("path"), g(e, "class", Mo["pager__arrow-icon-path"]), g(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", ho.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      J(n, r, o), bt(r, e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Xc(t) {
  let r, e, n, o = !/*rightClass*/
  t[28] && Ty();
  return {
    c() {
      r = Me("div"), o && o.c(), g(
        r,
        "class",
        /*rightClass*/
        t[28] || `${Mo.pager__arrow} ${ho.arrow} ${ho.arrow_right}`
      );
    },
    m(i, s) {
      J(i, r, s), o && o.m(r, null), e || (n = Qe(
        r,
        "click",
        /*click_handler_1*/
        t[71]
      ), e = !0);
    },
    p: j,
    d(i) {
      i && G(r), o && o.d(), e = !1, n();
    }
  };
}
function Ty(t) {
  let r, e;
  return {
    c() {
      r = en("svg"), e = en("path"), g(e, "class", Mo["pager__arrow-icon-path"]), g(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", ho.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      J(n, r, o), bt(r, e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function My(t) {
  let r, e, n, o, i, s, a, l, u, c = ir(
    /*visibleItems*/
    t[4]
  ), f = [];
  for (let p = 0; p < c.length; p += 1)
    f[p] = Kc(qc(t, c, p));
  const _ = (p) => x(f[p], 1, 1, () => {
    f[p] = null;
  });
  let h = (
    /*hasScrollLeft*/
    t[11] && /*shouldCheckArrows*/
    t[12] && Yc(t)
  ), m = (
    /*hasScrollRight*/
    t[10] && /*shouldCheckArrows*/
    t[12] && Xc(t)
  );
  return {
    c() {
      r = Me("div");
      for (let p = 0; p < f.length; p += 1)
        f[p].c();
      o = gr(), h && h.c(), i = gr(), m && m.c(), s = Qt(), g(r, "class", e = Mo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (t[24] ? Er["root_restrict-scroll"] : "")), g(r, "style", n = _r(
        /*style*/
        t[14]
      ));
    },
    m(p, w) {
      J(p, r, w);
      for (let k = 0; k < f.length; k += 1)
        f[k] && f[k].m(r, null);
      t[69](r), J(p, o, w), h && h.m(p, w), J(p, i, w), m && m.m(p, w), J(p, s, w), a = !0, l || (u = [
        Qe(
          r,
          "transitionend",
          /*onTransitionEnd*/
          t[37]
        ),
        Qe(
          r,
          "focus",
          /*onFocus*/
          t[33],
          !0
        ),
        Qe(
          r,
          "click",
          /*onItemsClick*/
          t[34],
          !0
        )
      ], l = !0);
    },
    p(p, w) {
      if (w[0] & /*orientation, visibleItems, instId, childLayoutParams*/
      67109396) {
        c = ir(
          /*visibleItems*/
          p[4]
        );
        let k;
        for (k = 0; k < c.length; k += 1) {
          const N = qc(p, c, k);
          f[k] ? (f[k].p(N, w), L(f[k], 1)) : (f[k] = Kc(N), f[k].c(), L(f[k], 1), f[k].m(r, null));
        }
        for (sr(), k = c.length; k < f.length; k += 1)
          _(k);
        lr();
      }
      (!a || w[0] & /*$jsonRestrictParentScroll*/
      16777216 && e !== (e = Mo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (p[24] ? Er["root_restrict-scroll"] : ""))) && g(r, "class", e), (!a || w[0] & /*style*/
      16384 && n !== (n = _r(
        /*style*/
        p[14]
      ))) && g(r, "style", n), /*hasScrollLeft*/
      p[11] && /*shouldCheckArrows*/
      p[12] ? h ? h.p(p, w) : (h = Yc(p), h.c(), h.m(i.parentNode, i)) : h && (h.d(1), h = null), /*hasScrollRight*/
      p[10] && /*shouldCheckArrows*/
      p[12] ? m ? m.p(p, w) : (m = Xc(p), m.c(), m.m(s.parentNode, s)) : m && (m.d(1), m = null);
    },
    i(p) {
      if (!a) {
        for (let w = 0; w < c.length; w += 1)
          L(f[w]);
        a = !0;
      }
    },
    o(p) {
      f = f.filter(Boolean);
      for (let w = 0; w < f.length; w += 1)
        x(f[w]);
      a = !1;
    },
    d(p) {
      p && (G(r), G(o), G(i), G(s)), on(f, p), t[69](null), h && h.d(p), m && m.d(p), l = !1, Jr(u);
    }
  };
}
function Py(t) {
  let r, e, n, o, i, s;
  const a = [Iy, Fy], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[5] ? 1 : 0
    );
  }
  return ~(r = u(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(c, f) {
      ~r && l[r].m(c, f), J(c, n, f), o = !0, i || (s = Qe(
        Vy,
        "resize",
        /*resnap*/
        t[38]
      ), i = !0);
    },
    p(c, f) {
      let _ = r;
      r = u(c), r === _ ? ~r && l[r].p(c, f) : (e && (sr(), x(l[_], 1, 1, () => {
        l[_] = null;
      }), lr()), ~r ? (e = l[r], e ? e.p(c, f) : (e = l[r] = a[r](c), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(c) {
      o || (L(e), o = !0);
    },
    o(c) {
      x(e), o = !1;
    },
    d(c) {
      c && G(n), ~r && l[r].d(c), i = !1, s();
    }
  };
}
const ws = {
  wrap_content: "content",
  fixed: "fixed",
  match_parent: "parent"
}, yo = 2, Ny = 400, zy = 8;
function Zc(t, r) {
  var n, o, i, s;
  if (t === "horizontal") {
    const a = ((n = r.height) == null ? void 0 : n.type) || "";
    return {
      height: a in ws ? ws[a] : "content",
      "height-constrained": ((o = r.height) == null ? void 0 : o.type) === "wrap_content" ? nn(r.height.constrained, !1) : !1
    };
  }
  const e = ((i = r.width) == null ? void 0 : i.type) || "";
  return {
    width: e in ws ? ws[e] : "parent",
    "width-constrained": ((s = r.width) == null ? void 0 : s.type) === "wrap_content" ? nn(r.width.constrained, !1) : !1
  };
}
function Ly(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, O, ne, de, T, X = j, le = () => (X(), X = S(c, (v) => e(60, T = v)), c), C, D = j, M = () => (D(), D = S(i, (v) => e(61, C = v)), i), W, Q = j, me = () => (Q(), Q = S(f, (v) => e(62, W = v)), f), Ee, ve = j, he = () => (ve(), ve = S(l, (v) => e(63, Ee = v)), l), Se, Z = j, et = () => (Z(), Z = S(a, (v) => e(64, Se = v)), a), Je, qe = j, be = () => (qe(), qe = S(s, (v) => e(65, Je = v)), s), Te, ue = j, ge = () => (ue(), ue = S(Pe, (v) => e(66, Te = v)), Pe), ce, re = j, ae = () => (re(), re = S(o, (v) => e(67, ce = v)), o), oe, we = j, Re = () => (we(), we = S(_, (v) => e(68, oe = v)), _), Ge, ee = j, Oe = () => (ee(), ee = S(u, (v) => e(24, Ge = v)), u);
  t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => qe()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => ee());
  let { componentContext: Ne } = r, { layoutParams: nt = void 0 } = r;
  const at = Dr(Kr), tt = at.direction;
  yn(t, tt, (v) => e(6, ne = v));
  const yt = at.genId("pager"), rt = at.getCustomization("pagerLeftClass"), Mt = at.getCustomization("pagerRightClass"), ft = at.isDesktop;
  yn(t, ft, (v) => e(59, de = v));
  let K, _e, st = !1, Pe, I = 0, jt = 0, lt = !1, Et = "horizontal", Dt = "0em", ot = {}, q = "", Tt = "", Ft = "", Kt = {}, Xt = "start", je = "center", Ke = [], _t = 0, Fe = [], $e = {}, Be = {}, Vt, ze, mt = 0, Ut = !1, It = !1, hr = !1, De = !1, kt = 0, ar = "", rr = 0, er;
  function mr() {
    e(43, ot = {}), e(9, Kt = {}), e(47, Xt = "start"), e(48, je = "center"), e(52, Ut = !1), e(53, It = !1), De = !1;
  }
  function vr(v) {
    e(0, Ne = e(51, Vt = {
      ...Ne,
      json: {
        ...Ne.json,
        items: v.filter(zo)
      }
    }));
  }
  function tr(v, se) {
    ze && ze.update({
      instId: yt,
      currentItem: Be[se],
      size: v,
      scrollToPagerItem(d) {
        xt($e[d]);
      }
    });
  }
  function nr(v) {
    var d;
    if (v === jt || (jt = v, !Ke[v]))
      return;
    const se = (d = Ke[v].json) == null ? void 0 : d.selected_actions;
    se != null && se.length && Ne.execAnyActions(se);
  }
  function Rt(v) {
    const se = It ? !1 : v === 0, d = It ? !1 : v === Fe.length - 1, B = Et === "horizontal", Ie = _e.children[v + (It ? yo : 0)];
    if (!Ie)
      return 0;
    const He = B ? "offsetLeft" : "offsetTop", ke = B ? "offsetWidth" : "offsetHeight", R = ut(), Jt = Br(), Ht = cr(), Ye = vt();
    return R >= Ye + Jt + Ht || se ? 0 : d ? (R - Jt - Ht - Ye) * (ne === "rtl" ? -1 : 1) : je === "start" && ne === "ltr" || je === "end" && ne === "rtl" ? -(Ie[He] - Jt) : je === "end" && ne === "ltr" || je === "start" && ne === "rtl" ? -(Ie[He] + Ie[ke] - R + Ht) : _e[ke] / 2 - (Ie[He] + Ie[ke] / 2);
  }
  function pt(v, se) {
    if (!_e)
      return;
    const d = Rt(v);
    e(54, hr = se), In().then(() => {
      var B;
      kt = d, e(55, ar = ie(kt)), e(40, I = (B = $e[v]) != null ? B : 0), De = It && (v < 0 || v >= _t);
    });
  }
  function xt(v, se = !0) {
    var d;
    pt((d = Be[v]) != null ? d : 0, se);
  }
  function ie(v) {
    return `${Et === "horizontal" ? "translateX" : "translateY"}(${an(v)})`;
  }
  function yr(v, se) {
    return It && v >= -yo && v < _t + yo ? v : v > Fe.length - 1 ? se === "ring" ? Vo(v, Fe.length) : Fe.length - 1 : v < 0 ? se === "ring" ? Vo(v, Fe.length) : 0 : v;
  }
  function kr(v, se, d) {
    const B = yr(Be[I] - v, se);
    pt(B, d);
  }
  function Ct(v, se, d) {
    const B = yr(Be[I] + v, se);
    pt(B, d);
  }
  function Tr() {
    ze == null || ze.destroy(), ze = void 0, K && (at.unregisterInstance(K), K = void 0), Ne.fakeElement || (ze = Ne.registerPager(Ne.id || void 0)), Ne.id && !Ne.fakeElement && (K = Ne.id, at.registerInstance(
      K,
      {
        setCurrentItem(v, se) {
          if (v < 0 || v > Ke.length - 1)
            throw new Error('Item is out of range in "set-current-item" action');
          xt(v, se);
        },
        setPreviousItem: kr,
        setNextItem: Ct,
        scrollToStart(v) {
          xt(Fe[It ? yo : 0].index, v);
        },
        scrollToEnd(v) {
          xt(Fe[Fe.length - 1 - (It ? yo : 0)].index, v);
        },
        scrollCombined({ step: v, overflow: se, animated: d }) {
          v && xt(yr(Be[I] + v, se || "clamp"), d);
        }
      },
      "warn"
    ));
  }
  function Br() {
    var se, d, B;
    return Et === "horizontal" ? (d = (se = ot.start) != null ? se : ne === "ltr" ? ot.left : ot.right) != null ? d : 0 : (B = ot.top) != null ? B : 0;
  }
  function cr() {
    var se, d, B;
    return Et === "horizontal" ? (d = (se = ot.end) != null ? se : ne === "ltr" ? ot.right : ot.left) != null ? d : 0 : (B = ot.bottom) != null ? B : 0;
  }
  function ut() {
    var se, d;
    return _e ? Et === "horizontal" ? ((se = _e.parentElement) == null ? void 0 : se.offsetWidth) || 0 : ((d = _e.parentElement) == null ? void 0 : d.offsetHeight) || 0 : 0;
  }
  function vt() {
    const v = Et === "horizontal", se = Array.from(_e.children), d = se[0].getBoundingClientRect(), B = se[se.length - 1].getBoundingClientRect();
    return v ? ne === "rtl" ? d.right - B.left : B.right - d.left : B.bottom - d.top;
  }
  function Gt(v) {
    const se = v.target;
    if (!(se instanceof Element) || !_e)
      return;
    let d = se;
    for (; d.parentElement && d.parentElement !== _e; )
      d = d.parentElement;
    if (!d)
      return;
    const B = Array.from(_e.children).indexOf(d);
    if (B < 0)
      return;
    const Ie = B - (It ? yo : 0);
    pt(Ie, !0);
  }
  function Zt(v) {
    Date.now() - rr < 300 && (v.preventDefault(), v.stopImmediatePropagation());
  }
  function ur(v) {
    if (!at.pagerMouseDragEnabled && v.pointerType === "mouse")
      return;
    const se = Et === "horizontal", d = se ? v.pageX : v.pageY, B = kt, Ie = ut() - Br() - cr(), He = vt(), ke = Date.now(), R = (Ht) => {
      const Ye = se ? Ht.pageX : Ht.pageY;
      let ct = B + Ye - d;
      if (!It) {
        if (ne === "rtl") {
          if (ct < 0)
            ct = ct * Ie / (ct + Ie * 3);
          else if (ct + Ie > He) {
            let Wt = ct + Ie - He;
            Wt = Wt * Ie / (Wt + Ie * 3), ct = -Ie + He + Wt;
          }
        } else if (ne === "ltr") {
          if (ct > 0)
            ct = ct * Ie / (ct + Ie * 3);
          else if (-ct + Ie > He) {
            let Wt = -ct + Ie - He;
            Wt = Wt * Ie / (Wt + Ie * 3), ct = Ie - He - Wt;
          }
        }
      }
      kt = ct, e(55, ar = ie(kt)), Ht.preventDefault();
    }, Jt = (Ht) => {
      er == null || er(), er = void 0;
      const Ye = Math.min(512, Ie), ct = Math.abs(B - kt);
      if (ct < zy) {
        pt(Be[I], !0);
        return;
      }
      Ht.preventDefault(), rr = Date.now();
      const Wt = Math.min(1, (Date.now() - ke) / 750);
      let Fr = Be[I];
      ct > Ye / 4 * Wt && (Fr += (B > kt ? 1 : -1) * (ne === "rtl" ? -1 : 1)), It || (Fr >= Fe.length ? Fr = Fe.length - 1 : Fr < 0 && (Fr = 0)), pt(Fr, !0);
    };
    window.addEventListener("pointermove", R), window.addEventListener("pointerup", Jt), window.addEventListener("pointercancel", Jt), er == null || er(), er = () => {
      window.removeEventListener("pointermove", R), window.removeEventListener("pointerup", Jt), window.removeEventListener("pointercancel", Jt);
    };
  }
  function dt(v) {
    if (!v.deltaX || Math.abs(v.deltaX) < Math.abs(v.deltaY))
      return;
    const se = Date.now();
    if (se - mt < Ny)
      return;
    mt = se, (ne === "rtl" ? -1 : 1) * v.deltaX > 0 ? Ct(1, "clamp", !0) : kr(1, "clamp", !0);
  }
  function fe() {
    e(54, hr = !1), De && In().then(() => {
      xt(I, !1);
    });
  }
  function wt() {
    In().then(() => {
      xt(I, !1);
    });
  }
  Zn(() => {
    e(39, st = !0), _e && xt(I, !1);
  }), sn(() => {
    e(39, st = !1), er == null || er(), Ke.forEach((v) => {
      v.destroy();
    }), K && (at.unregisterInstance(K), K = void 0), ze == null || ze.destroy(), ze = void 0;
  });
  function or(v) {
    Vr[v ? "unshift" : "push"](() => {
      _e = v, e(7, _e);
    });
  }
  const Yt = () => (ne === "ltr" ? kr : Ct)(1, "clamp", !0), jr = () => (ne === "ltr" ? Ct : kr)(1, "clamp", !0);
  return t.$$set = (v) => {
    "componentContext" in v && e(0, Ne = v.componentContext), "layoutParams" in v && e(1, nt = v.layoutParams);
  }, t.$$.update = () => {
    var v, se, d, B, Ie;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(58, n = Ne.origJson), t.$$.dirty[1] & /*origJson*/
    134217728 && n && mr(), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(23, o = typeof ((v = Ne.json.item_builder) == null ? void 0 : v.data) == "string" ? Ne.getDerivedFromVars((se = Ne.json.item_builder) == null ? void 0 : se.data, void 0, !0) : (d = Ne.json.item_builder) != null && d.data ? Jo(Ne.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(22, i = Ne.getDerivedFromVars(Ne.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(21, s = Ne.getDerivedFromVars(Ne.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(20, a = Ne.getDerivedFromVars(Ne.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(19, l = Ne.getDerivedFromVars(Ne.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(18, u = Ne.getDerivedFromVars(Ne.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(17, c = Ne.getDerivedFromVars(Ne.json.cross_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(16, f = Ne.getDerivedFromVars(Ne.json.scroll_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && Re(e(15, _ = Ne.getDerivedFromVars(Ne.json.infinite_scroll))), t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$jsonInfiniteScroll*/
    64 && e(52, Ut = nn(oe, Ut)), t.$$.dirty[0] & /*componentContext, items*/
    9 | t.$$.dirty[1] & /*prevContext*/
    1048576 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    32) {
      let He = [];
      if (Ne.json.item_builder && Array.isArray(ce) && Array.isArray(Ne.json.item_builder.prototypes)) {
        const Ht = Ne.json.item_builder;
        He = kl(ce, at, Ne, Ht);
      } else
        He = (Array.isArray(Ne.json.items) && Ne.json.items || []).map((Ht, Ye) => ({
          div: Ht,
          key: Ht.id || { index: Ye, data: Ht }
        }));
      const ke = new Set(Ke), R = /* @__PURE__ */ new Map();
      let Jt = !1;
      Vt === Ne && Ke.forEach((Ht) => {
        Ht.key && (typeof Ht.key == "string" && R.has(Ht.key) ? Jt || (Jt = !0, Ne.logError(Y(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: Ht.key } }))) : R.set(
          typeof Ht.key == "string" ? Ht.key : Ht.key.index,
          Ht
        ));
      }), e(3, Ke = He.map((Ht, Ye) => {
        let ct = !Jt && R.get(Ht.id), Wt = R.get(Ye);
        return !ct && !Ht.id && typeof Ht.key == "object" && typeof (Wt == null ? void 0 : Wt.key) == "object" && Ji(Wt.key.data, Ht.key.data) && (ct = Wt), ct ? (ke.delete(ct), ct) : Ne.produceChildContext(Ht.div, {
          path: Ye,
          variables: Ht.vars,
          id: Ht.id,
          key: Ht.key
        });
      }));
      for (const Ht of ke)
        Ht.destroy();
      e(51, Vt = Ne);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    9) {
      let He = [];
      Ke.forEach((ke) => {
        He.push(Ne.getDerivedFromVars({
          width: ke.json.width,
          height: ke.json.height,
          visibility: ke.json.visibility
        }));
      }), ge(e(8, Pe = Gi(He, (ke) => [...ke])));
    }
    if (t.$$.dirty[0] & /*items, visibleItems*/
    24 | t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$childStore*/
    16) {
      if (e(50, Be = {}), $e = {}, e(4, Fe = Te.map((He, ke) => ({
        width: He.width,
        height: He.height,
        index: ke,
        componentContext: Ke[ke]
      })).filter((He, ke) => Te[ke].visibility !== "gone")), Fe.forEach((He, ke) => {
        $e[ke] = He.index, e(50, Be[He.index] = ke, Be);
      }), e(49, _t = Fe.length), Ut && Fe.length >= yo) {
        const He = Fe.slice(0, yo).map((R) => ({
          ...R,
          componentContext: R.componentContext.dup(ri),
          duplicate: !0
        })), ke = Fe.slice(Fe.length - yo).map((R) => ({
          ...R,
          componentContext: R.componentContext.dup(ri),
          duplicate: !0
        }));
        He.forEach((R, Jt) => {
          $e[Fe.length + Jt] = Jt;
        }), ke.forEach((R, Jt) => {
          $e[Jt - yo] = Fe.length - yo + Jt;
        }), e(4, Fe = [].concat(ke, Fe, He)), e(53, It = !0);
      } else
        e(53, It = !1);
      wt();
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonLayoutMode*/
    1073741824 && (C ? C.type !== "percentage" && C.type !== "fixed" && C.type !== "wrap_content" ? (e(41, lt = !0), Ne.logError(Y(new Error('Incorrect value of "layout_mode.type" for div "pager"')))) : e(41, lt = !1) : (e(41, lt = !0), Ne.logError(Y(new Error('Empty "layout_mode" prop for div "pager"'))))), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[2] & /*$jsonOrientation*/
    8 && e(2, Et = ja(Je, Et)), t.$$.dirty[2] & /*$jsonItemSpacing*/
    4) {
      const He = Se == null ? void 0 : Se.value;
      He && Nn(He) && e(42, Dt = an(He || 0));
    }
    if (t.$$.dirty[0] & /*$direction*/
    64 | t.$$.dirty[1] & /*paddingObj*/
    4096 | t.$$.dirty[2] & /*$jsonPaddings*/
    2 && (e(43, ot = bi(Ee, ot)), e(44, q = go(ot, ne))), t.$$.dirty[0] & /*orientation*/
    4 && e(57, h = Et === "horizontal" ? "grid-auto-columns" : "grid-auto-rows"), t.$$.dirty[0] & /*orientation*/
    4 && e(56, m = Et === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[2] & /*$jsonScrollAxisAlignment*/
    1 && (W === "start" || W === "center" || W === "end") && (e(48, je = W), wt()), t.$$.dirty[0] & /*orientation, $direction, visibleItems*/
    84 | t.$$.dirty[1] & /*paddingObj, $jsonLayoutMode, scrollAxisAlignment, itemSpacing*/
    1073879040) {
      const He = an(Et === "horizontal" ? (ot == null ? void 0 : ot.start) || (ne === "ltr" ? ot == null ? void 0 : ot.left : ot == null ? void 0 : ot.right) || 0 : (ot == null ? void 0 : ot.top) || 0), ke = an(Et === "horizontal" ? (ot == null ? void 0 : ot.end) || (ne === "ltr" ? ot == null ? void 0 : ot.right : ot == null ? void 0 : ot.left) || 0 : (ot == null ? void 0 : ot.bottom) || 0);
      if ((C == null ? void 0 : C.type) === "fixed") {
        const R = ((B = C.neighbour_page_width) == null ? void 0 : B.value) || 0;
        je === "center" ? e(45, Tt = `calc(100% + ${He} + ${ke} - 2 * ${an(R)} - 2 * ${Dt})`) : je === "start" ? e(45, Tt = `calc(100% + ${ke} - ${an(R)} - ${Dt})`) : e(45, Tt = `calc(100% + ${He} - ${an(R)} - ${Dt})`), e(46, Ft = "");
      } else if ((C == null ? void 0 : C.type) === "percentage") {
        let R = (Ie = C.page_width) == null ? void 0 : Ie.value;
        (typeof R != "number" || R < 0) && (R = 100), e(45, Tt = `calc(${(R / 100).toFixed(2)} * (100% + ${He} + ${ke}))`), e(46, Ft = "");
      } else (C == null ? void 0 : C.type) === "wrap_content" && (e(45, Tt = ""), e(46, Ft = Fe.map((R) => {
        var Ye, ct;
        const Jt = R[Et === "horizontal" ? "width" : "height"];
        if ((Jt == null ? void 0 : Jt.type) === "fixed" || (Jt == null ? void 0 : Jt.type) === "wrap_content")
          return "minmax(max-content, auto)";
        let Ht = "100%";
        return (Jt == null ? void 0 : Jt.type) === "match_parent" && (Nn((Ye = Jt.max_size) == null ? void 0 : Ye.value) && (Ht = `min(${Ht}, ${an(Jt.max_size.value)})`), Nn((ct = Jt.min_size) == null ? void 0 : ct.value) && (Ht = `max(${Ht}, ${an(Jt.min_size.value)})`)), Ht;
      }).join(" ")));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonCrossAxisAlignment, crossAxisAlignment*/
    536936448 && (T === "start" || T === "center" || T === "end") && (e(47, Xt = T), e(9, Kt = {
      [Et === "horizontal" ? "parentVAlign" : "parentHAlign"]: Xt
    })), t.$$.dirty[1] & /*itemSpacing, padding, gridAutoSizeProp, autoSizeVal, gridTemplateSizeProp, templateSizeVal, transformStr*/
    117499904 && e(14, p = {
      "grid-gap": Dt,
      padding: q,
      [h]: Tt,
      [m]: Ft,
      transform: ar
    }), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*animated, crossAxisAlignment, scrollAxisAlignment*/
    8585216 && e(13, w = {
      animated: hr,
      clip: at.pagerChildrenClipEnabled,
      orientation: Et,
      "cross-align": Xt,
      "scroll-align": je
    }), t.$$.dirty[1] & /*hasLayoutModeError*/
    1024 && e(5, k = lt), t.$$.dirty[0] & /*hasError*/
    32 | t.$$.dirty[1] & /*$isDesktop, mounted*/
    268435712 && e(12, N = de && st && !k), t.$$.dirty[0] & /*componentContext, items*/
    9 && Ne.json) {
      const He = Ne.getJsonWithVars(Ne.json.default_item);
      typeof He == "number" && He >= 0 && He < Ke.length && (e(40, I = jt = He), tr(Ke.length, He)), Tr();
    }
    t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(11, H = It || (ne === "ltr" ? Be[I] > 0 : Be[I] + 1 < Fe.length)), t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(10, O = It || (ne === "ltr" ? Be[I] + 1 < Fe.length : Be[I] > 0)), t.$$.dirty[1] & /*visibleItemsWithOutDuplicates, currentItem*/
    262656 && tr(_t, I), t.$$.dirty[1] & /*currentItem*/
    512 && nr(I);
  }, [
    Ne,
    nt,
    Et,
    Ke,
    Fe,
    k,
    ne,
    _e,
    Pe,
    Kt,
    O,
    H,
    N,
    w,
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
    Ge,
    tt,
    yt,
    rt,
    Mt,
    ft,
    vr,
    kr,
    Ct,
    Gt,
    Zt,
    ur,
    dt,
    fe,
    wt,
    st,
    I,
    lt,
    Dt,
    ot,
    q,
    Tt,
    Ft,
    Xt,
    je,
    _t,
    Be,
    Vt,
    Ut,
    It,
    hr,
    ar,
    m,
    h,
    n,
    de,
    T,
    C,
    W,
    Ee,
    Se,
    Je,
    Te,
    ce,
    oe,
    or,
    Yt,
    jr
  ];
}
class Oy extends Or {
  constructor(r) {
    super(), Lr(this, r, Ly, Py, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const By = "appkit-indicator", Ry = "appkit-indicator_visible", Hy = "appkit-indicator__scroller", Wy = "appkit-indicator__items", Uy = "appkit-indicator__item", Gy = "appkit-indicator_placement_default", Jy = "appkit-indicator__item_active", qy = "appkit-indicator_direction_ltr", Ky = "appkit-indicator_direction_rtl", Yy = "appkit-indicator_placement_stretch", ki = {
  indicator: By,
  indicator_visible: Ry,
  indicator__scroller: Hy,
  indicator__items: Wy,
  indicator__item: Uy,
  indicator_placement_default: Gy,
  indicator__item_active: Jy,
  indicator_direction_ltr: qy,
  indicator_direction_rtl: Ky,
  indicator_placement_stretch: Yy
};
function Qc(t, r, e) {
  const n = t.slice();
  n[43] = r[e], n[46] = e;
  const o = (
    /*index*/
    n[46] === /*pagerData*/
    n[8].currentItem
  );
  return n[44] = o, n;
}
function xc(t) {
  let r, e = ir(Array(
    /*pagerData*/
    t[8].size
  )), n = [];
  for (let o = 0; o < e.length; o += 1)
    n[o] = $c(Qc(t, e, o));
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      r = Qt();
    },
    m(o, i) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(o, i);
      J(o, r, i);
    },
    p(o, i) {
      if (i[0] & /*pagerData, onIndicatorItemClick, onIndicatorItemKeydown*/
      6291712) {
        e = ir(Array(
          /*pagerData*/
          o[8].size
        ));
        let s;
        for (s = 0; s < e.length; s += 1) {
          const a = Qc(o, e, s);
          n[s] ? n[s].p(a, i) : (n[s] = $c(a), n[s].c(), n[s].m(r.parentNode, r));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = e.length;
      }
    },
    d(o) {
      o && G(r), on(n, o);
    }
  };
}
function $c(t) {
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
      r = Me("div"), g(r, "class", e = ht("indicator__item", ki, { active: (
        /*isActiveItem*/
        t[44]
      ) }) + " " + Er.root__clickable), g(r, "role", "tab"), g(r, "id", n = /*pagerData*/
      t[8].instId + "-tab-" + /*index*/
      t[46]), g(r, "aria-controls", o = /*pagerData*/
      t[8].instId + "-panel-" + /*index*/
      t[46]), g(r, "aria-selected", i = /*isActiveItem*/
      t[44] ? "true" : "false"), g(r, "tabindex", s = /*isActiveItem*/
      t[44] ? 0 : -1);
    },
    m(c, f) {
      J(c, r, f), a || (l = [
        Qe(r, "click", u),
        Qe(
          r,
          "keydown",
          /*onIndicatorItemKeydown*/
          t[22]
        )
      ], a = !0);
    },
    p(c, f) {
      t = c, f[0] & /*pagerData*/
      256 && e !== (e = ht("indicator__item", ki, { active: (
        /*isActiveItem*/
        t[44]
      ) }) + " " + Er.root__clickable) && g(r, "class", e), f[0] & /*pagerData*/
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
      c && G(r), a = !1, Jr(l);
    }
  };
}
function Xy(t) {
  let r, e, n = (
    /*pagerData*/
    t[8] && xc(t)
  );
  return {
    c() {
      r = Me("div"), e = Me("div"), n && n.c(), g(e, "class", ki.indicator__items), g(e, "role", "tablist"), F(
        e,
        "margin",
        /*placement*/
        t[4] === "default" ? `0 ${pe(Math.max(
          0,
          /*activeStyle*/
          t[2].width - /*inactiveStyle*/
          t[3].width
        ) / 2)}` : ""
      ), F(e, "--divkit-indicator-inactive-width", pe(
        /*inactiveStyle*/
        t[3].width
      )), F(e, "--divkit-indicator-inactive-height", pe(
        /*inactiveStyle*/
        t[3].height
      )), F(e, "--divkit-indicator-inactive-border-radius", pe(
        /*inactiveStyle*/
        t[3].borderRadius
      )), F(
        e,
        "--divkit-indicator-inactive-background",
        /*inactiveStyle*/
        t[3].background || ""
      ), F(
        e,
        "--divkit-indicator-inactive-box-shadow",
        /*inactiveStyle*/
        t[3].boxShadow || ""
      ), F(e, "--divkit-indicator-active-width", pe(
        /*activeStyle*/
        t[2].width
      )), F(e, "--divkit-indicator-active-height", pe(
        /*activeStyle*/
        t[2].height
      )), F(e, "--divkit-indicator-active-border-radius", pe(
        /*activeStyle*/
        t[2].borderRadius
      )), F(
        e,
        "--divkit-indicator-active-background",
        /*activeStyle*/
        t[2].background || ""
      ), F(
        e,
        "--divkit-indicator-active-box-shadow",
        /*activeStyle*/
        t[2].boxShadow || ""
      ), F(
        e,
        "--divkit-indicator-active-scale",
        /*activeStyle*/
        t[2].width / /*inactiveStyle*/
        t[3].width
      ), F(
        e,
        "--divkit-indicator-default-margin",
        /*placement*/
        t[4] === "default" ? `0 ${pe(
          /*spaceBetweenCenters*/
          (t[5] - /*inactiveStyle*/
          t[3].width) / 2
        )}` : ""
      ), F(
        e,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        t[4] === "stretch" ? pe(
          /*itemSpacing*/
          t[7]
        ) : ""
      ), F(
        e,
        "--divkit-indicator-stretch-max-count",
        /*placement*/
        t[4] === "stretch" ? (
          /*maxVisibleItems*/
          t[6]
        ) : ""
      ), F(
        e,
        "--divkit-indicator-stretch-max-spacer",
        /*placement*/
        t[4] === "stretch" ? pe(
          /*maxVisibleItems*/
          (t[6] - 1) * /*itemSpacing*/
          t[7]
        ) : ""
      ), g(r, "class", ki.indicator__scroller);
    },
    m(o, i) {
      J(o, r, i), bt(r, e), n && n.m(e, null), t[35](e), t[36](r);
    },
    p(o, i) {
      /*pagerData*/
      o[8] ? n ? n.p(o, i) : (n = xc(o), n.c(), n.m(e, null)) : n && (n.d(1), n = null), i[0] & /*placement, activeStyle, inactiveStyle*/
      28 && F(
        e,
        "margin",
        /*placement*/
        o[4] === "default" ? `0 ${pe(Math.max(
          0,
          /*activeStyle*/
          o[2].width - /*inactiveStyle*/
          o[3].width
        ) / 2)}` : ""
      ), i[0] & /*inactiveStyle*/
      8 && F(e, "--divkit-indicator-inactive-width", pe(
        /*inactiveStyle*/
        o[3].width
      )), i[0] & /*inactiveStyle*/
      8 && F(e, "--divkit-indicator-inactive-height", pe(
        /*inactiveStyle*/
        o[3].height
      )), i[0] & /*inactiveStyle*/
      8 && F(e, "--divkit-indicator-inactive-border-radius", pe(
        /*inactiveStyle*/
        o[3].borderRadius
      )), i[0] & /*inactiveStyle*/
      8 && F(
        e,
        "--divkit-indicator-inactive-background",
        /*inactiveStyle*/
        o[3].background || ""
      ), i[0] & /*inactiveStyle*/
      8 && F(
        e,
        "--divkit-indicator-inactive-box-shadow",
        /*inactiveStyle*/
        o[3].boxShadow || ""
      ), i[0] & /*activeStyle*/
      4 && F(e, "--divkit-indicator-active-width", pe(
        /*activeStyle*/
        o[2].width
      )), i[0] & /*activeStyle*/
      4 && F(e, "--divkit-indicator-active-height", pe(
        /*activeStyle*/
        o[2].height
      )), i[0] & /*activeStyle*/
      4 && F(e, "--divkit-indicator-active-border-radius", pe(
        /*activeStyle*/
        o[2].borderRadius
      )), i[0] & /*activeStyle*/
      4 && F(
        e,
        "--divkit-indicator-active-background",
        /*activeStyle*/
        o[2].background || ""
      ), i[0] & /*activeStyle*/
      4 && F(
        e,
        "--divkit-indicator-active-box-shadow",
        /*activeStyle*/
        o[2].boxShadow || ""
      ), i[0] & /*activeStyle, inactiveStyle*/
      12 && F(
        e,
        "--divkit-indicator-active-scale",
        /*activeStyle*/
        o[2].width / /*inactiveStyle*/
        o[3].width
      ), i[0] & /*placement, spaceBetweenCenters, inactiveStyle*/
      56 && F(
        e,
        "--divkit-indicator-default-margin",
        /*placement*/
        o[4] === "default" ? `0 ${pe(
          /*spaceBetweenCenters*/
          (o[5] - /*inactiveStyle*/
          o[3].width) / 2
        )}` : ""
      ), i[0] & /*placement, itemSpacing*/
      144 && F(
        e,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        o[4] === "stretch" ? pe(
          /*itemSpacing*/
          o[7]
        ) : ""
      ), i[0] & /*placement, maxVisibleItems*/
      80 && F(
        e,
        "--divkit-indicator-stretch-max-count",
        /*placement*/
        o[4] === "stretch" ? (
          /*maxVisibleItems*/
          o[6]
        ) : ""
      ), i[0] & /*placement, maxVisibleItems, itemSpacing*/
      208 && F(
        e,
        "--divkit-indicator-stretch-max-spacer",
        /*placement*/
        o[4] === "stretch" ? pe(
          /*maxVisibleItems*/
          (o[6] - 1) * /*itemSpacing*/
          o[7]
        ) : ""
      );
    },
    d(o) {
      o && G(r), n && n.d(), t[35](null), t[36](null);
    }
  };
}
function Zy(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht(
        "indicator",
        ki,
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
      $$slots: { default: [Xy] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = ht(
        "indicator",
        ki,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
const Pl = ["rounded_rectangle", "circle"];
function Qy(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p = j, w = () => (p(), p = S(c, (_e) => e(26, m = _e)), c), k, N = j, H = () => (N(), N = S(f, (_e) => e(27, k = _e)), f), O, ne = j, de = () => (ne(), ne = S(i, (_e) => e(28, O = _e)), i), T, X = j, le = () => (X(), X = S(s, (_e) => e(29, T = _e)), s), C, D = j, M = () => (D(), D = S(o, (_e) => e(30, C = _e)), o), W, Q = j, me = () => (Q(), Q = S(a, (_e) => e(31, W = _e)), a), Ee, ve = j, he = () => (ve(), ve = S(u, (_e) => e(32, Ee = _e)), u), Se, Z = j, et = () => (Z(), Z = S(l, (_e) => e(33, Se = _e)), l);
  t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => ne()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => Z());
  let { componentContext: Je } = r, { layoutParams: qe = void 0 } = r;
  const Te = Dr(Kr).direction;
  yn(t, Te, (_e) => e(25, h = _e));
  let ue = {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    background: "#ffdc60"
  }, ge = {
    width: 10,
    height: 10,
    borderRadius: 5,
    background: "#33919cb5"
  }, ce = "default", re = 15, ae = 10, oe = 5, we, Re, Ge, ee, Oe = !1;
  function Ne() {
    e(4, ce = "default"), e(5, re = 15), e(6, ae = 10), e(7, oe = 5), e(2, ue = {
      width: 13,
      height: 13,
      borderRadius: 6.5,
      background: "#ffdc60"
    }), e(3, ge = {
      width: 10,
      height: 10,
      borderRadius: 5,
      background: "#33919cb5"
    });
  }
  async function nt(_e) {
    if (e(8, Ge = _e), await In(), Re) {
      const st = Re.children[Ge.currentItem];
      if (st) {
        const Pe = st.offsetLeft;
        we.scroll({
          left: Pe - we.clientWidth / 2,
          behavior: "smooth"
        });
      }
    }
  }
  function at(_e) {
    _e !== Ge.currentItem && Ge.scrollToPagerItem(_e);
  }
  function tt(_e) {
    if (_e.ctrlKey || _e.shiftKey || _e.altKey || _e.metaKey)
      return;
    const { size: st, currentItem: Pe } = Ge;
    if (_e.which === xd) {
      const I = Pe - 1 < 0 ? Pe : Pe - 1;
      yt(I);
    } else if (_e.which === $d) {
      const I = Pe + 1 >= st ? Pe : Pe + 1;
      yt(I);
    } else if (_e.which === e_)
      yt(0);
    else if (_e.which === t_)
      yt(st - 1);
    else
      return;
    _e.preventDefault();
  }
  async function yt(_e) {
    Ge.scrollToPagerItem(_e), await In();
    const st = Re.querySelector(`.${ki.indicator__item_active}`);
    st && st.focus();
  }
  function rt() {
    ee == null || ee(), ee = void 0;
    const _e = Je.json.pager_id;
    ee = Je.listenPager(_e, nt);
  }
  Zn(() => {
    e(23, Oe = !0);
  }), sn(() => {
    e(23, Oe = !1), ee == null || ee(), ee = void 0;
  });
  const Mt = (_e) => at(_e);
  function ft(_e) {
    Vr[_e ? "unshift" : "push"](() => {
      Re = _e, e(10, Re);
    });
  }
  function K(_e) {
    Vr[_e ? "unshift" : "push"](() => {
      we = _e, e(9, we);
    });
  }
  return t.$$set = (_e) => {
    "componentContext" in _e && e(0, Je = _e.componentContext), "layoutParams" in _e && e(1, qe = _e.layoutParams);
  }, t.$$.update = () => {
    var _e, st;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(24, n = Je.origJson), t.$$.dirty[0] & /*origJson*/
    16777216 && n && Ne(), t.$$.dirty[0] & /*origJson, mounted*/
    25165824 && n && Oe && rt(), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(19, o = Je.getDerivedFromVars(Je.json.shape))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(18, i = Je.getDerivedFromVars(Je.json.active_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(17, s = Je.getDerivedFromVars(Je.json.inactive_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(16, a = Je.getDerivedFromVars(Je.json.active_item_size))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(15, l = Je.getDerivedFromVars(Je.json.active_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(14, u = Je.getDerivedFromVars(Je.json.inactive_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && w(e(13, c = Je.getDerivedFromVars(Je.json.space_between_centers))), t.$$.dirty[0] & /*componentContext*/
    1 && H(e(12, f = Je.getDerivedFromVars(Je.json.items_placement))), t.$$.dirty[0] & /*activeStyle, inactiveStyle, $jsonShape, $jsonInactiveItemColor, $jsonActiveItemColor*/
    1879048204 | t.$$.dirty[1] & /*$jsonActiveShape, $jsonInactiveShape, $jsonActiveItemSize*/
    7 && (Se && e(2, ue = ao(
      {
        type: "shape_drawable",
        shape: Se
      },
      Pl,
      ue
    )), Ee && e(3, ge = ao(
      {
        type: "shape_drawable",
        shape: Ee
      },
      Pl,
      ge
    )), !Se && !Ee && C)) {
      const Pe = Un(W, 1.3);
      e(3, ge = ao(
        {
          type: "shape_drawable",
          shape: C,
          color: ge.background
        },
        Pl,
        ge
      )), e(3, ge.background = pr(T, 1, ge.background), ge), e(2, ue = {
        ...ge,
        width: ge.width * Pe,
        height: ge.height * Pe,
        borderRadius: ge.borderRadius * Pe,
        background: ue.background
      }), e(2, ue.background = pr(O, 1, ue.background), ue);
    }
    if (t.$$.dirty[0] & /*$jsonItemsPlacement, placement, spaceBetweenCenters, maxVisibleItems, itemSpacing, $jsonSpaceBetweenCenters*/
    201326832)
      if (k && (k.type === "default" || k.type === "stretch")) {
        if (e(4, ce = k.type), ce === "default")
          e(5, re = tn((_e = k.space_between_centers) == null ? void 0 : _e.value, re));
        else if (ce === "stretch") {
          const Pe = k;
          e(6, ae = Un(Pe.max_visible_items, ae)), e(7, oe = tn((st = Pe.item_spacing) == null ? void 0 : st.value, oe));
        }
      } else
        e(4, ce = "default"), m && e(5, re = tn(m.value, re));
    t.$$.dirty[0] & /*placement, $direction, pagerData*/
    33554704 && e(11, _ = {
      placement: ce,
      direction: h,
      visible: (Ge == null ? void 0 : Ge.size) > 1
    });
  }, [
    Je,
    qe,
    ue,
    ge,
    ce,
    re,
    ae,
    oe,
    Ge,
    we,
    Re,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    Te,
    at,
    tt,
    Oe,
    n,
    h,
    m,
    k,
    O,
    T,
    C,
    W,
    Ee,
    Se,
    Mt,
    ft,
    K
  ];
}
class xy extends Or {
  constructor(r) {
    super(), Lr(this, r, Qy, Zy, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const $y = "appkit-slider", ew = "appkit-slider__input", tw = "appkit-slider__input_secondary", rw = "appkit-slider__thumb", nw = "appkit-slider_direction_rtl", ow = "appkit-slider__thumb_secondary", iw = "appkit-slider__track", sw = "appkit-slider__tick", lw = "appkit-slider__tick_active", aw = "appkit-slider__tick_inactive", Ur = {
  slider: $y,
  slider__input: ew,
  slider__input_secondary: tw,
  slider__thumb: rw,
  slider_direction_rtl: nw,
  slider__thumb_secondary: ow,
  "slider__tracks-wrapper": "appkit-slider__tracks-wrapper",
  "slider__tracks-inner": "appkit-slider__tracks-inner",
  "slider__tracks-ranges": "appkit-slider__tracks-ranges",
  "slider__tracks-ranges_rtl": "appkit-slider__tracks-ranges_rtl",
  slider__track: iw,
  "slider__thumb-text": "appkit-slider__thumb-text",
  "slider__thumb-text_secondary": "appkit-slider__thumb-text_secondary",
  slider__tick: sw,
  slider__tick_active: lw,
  slider__tick_inactive: aw
};
function ef(t, r, e) {
  var a, l;
  if (!t || !t.font_size)
    return e;
  const n = t.offset, o = t.text_color && pr(t.text_color) || "#000", i = yi(t.font_weight, t.font_weight_value, void 0), s = Oi(t.font_variation_settings) || void 0;
  if (zn(t.font_size) && o !== "transparent") {
    const u = {
      fontSize: pe(t.font_size),
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
function Fo(t, r, e) {
  return Math.max(r, Math.min(e, Number(t)));
}
function tf(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function rf(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function nf(t, r, e) {
  const n = t.slice();
  return n[90] = r[e], n;
}
function uw(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function cw(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht(
        "slider",
        Ur,
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
          fw,
          ({ focusHandler: n, blurHandler: o }) => ({ 83: n, 84: o }),
          ({ focusHandler: n, blurHandler: o }) => [0, 0, (n ? 2097152 : 0) | (o ? 4194304 : 0)]
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      16777216 && (i.cls = ht(
        "slider",
        Ur,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function of(t) {
  let r;
  return {
    c() {
      r = Me("div"), g(r, "class", Ur.slider__track), F(
        r,
        "left",
        /*range*/
        t[90].left
      ), F(
        r,
        "right",
        /*range*/
        t[90].right
      ), F(
        r,
        "height",
        /*range*/
        t[90].height
      ), F(
        r,
        "border-radius",
        /*range*/
        t[90].borderRadius
      ), F(
        r,
        "background",
        /*range*/
        t[90].background
      ), F(
        r,
        "box-shadow",
        /*range*/
        t[90].boxShadow
      );
    },
    m(e, n) {
      J(e, r, n);
    },
    p(e, n) {
      n[0] & /*renderRanges*/
      2097152 && F(
        r,
        "left",
        /*range*/
        e[90].left
      ), n[0] & /*renderRanges*/
      2097152 && F(
        r,
        "right",
        /*range*/
        e[90].right
      ), n[0] & /*renderRanges*/
      2097152 && F(
        r,
        "height",
        /*range*/
        e[90].height
      ), n[0] & /*renderRanges*/
      2097152 && F(
        r,
        "border-radius",
        /*range*/
        e[90].borderRadius
      ), n[0] & /*renderRanges*/
      2097152 && F(
        r,
        "background",
        /*range*/
        e[90].background
      ), n[0] & /*renderRanges*/
      2097152 && F(
        r,
        "box-shadow",
        /*range*/
        e[90].boxShadow
      );
    },
    d(e) {
      e && G(r);
    }
  };
}
function sf(t) {
  let r;
  return {
    c() {
      r = Me("div"), g(r, "class", Ur.slider__tick + " " + Ur.slider__tick_active), F(
        r,
        "--divkit-slider-tick",
        /*val*/
        t[85]
      );
    },
    m(e, n) {
      J(e, r, n);
    },
    p(e, n) {
      n[0] & /*markActiveTicks*/
      131072 && F(
        r,
        "--divkit-slider-tick",
        /*val*/
        e[85]
      );
    },
    d(e) {
      e && G(r);
    }
  };
}
function lf(t) {
  let r;
  return {
    c() {
      r = Me("div"), g(r, "class", Ur.slider__tick + " " + Ur.slider__tick_inactive), F(
        r,
        "--divkit-slider-tick",
        /*val*/
        t[85]
      );
    },
    m(e, n) {
      J(e, r, n);
    },
    p(e, n) {
      n[0] & /*markInactiveTicks*/
      262144 && F(
        r,
        "--divkit-slider-tick",
        /*val*/
        e[85]
      );
    },
    d(e) {
      e && G(r);
    }
  };
}
function af(t) {
  let r, e, n;
  return {
    c() {
      var o, i, s, a, l;
      r = Me("div"), e = Me("div"), n = Gn(
        /*value*/
        t[11]
      ), g(e, "class", Ur["slider__thumb-text-inner"]), F(
        e,
        "font-size",
        /*textStyle*/
        ((o = t[7]) == null ? void 0 : o.fontSize) || "1em"
      ), F(
        e,
        "font-weight",
        /*textStyle*/
        ((i = t[7]) == null ? void 0 : i.fontWeight) || ""
      ), F(
        e,
        "font-family",
        /*textStyle*/
        ((s = t[7]) == null ? void 0 : s.fontFamily) || ""
      ), F(
        e,
        "font-variation-settings",
        /*textStyle*/
        ((a = t[7]) == null ? void 0 : a.fontVariationSettings) || ""
      ), F(
        e,
        "color",
        /*textStyle*/
        ((l = t[7]) == null ? void 0 : l.textColor) || "#000"
      ), g(r, "class", Ur["slider__thumb-text"]);
    },
    m(o, i) {
      J(o, r, i), bt(r, e), bt(e, n);
    },
    p(o, i) {
      var s, a, l, u, c;
      i[0] & /*value*/
      2048 && eo(
        n,
        /*value*/
        o[11]
      ), i[0] & /*textStyle*/
      128 && F(
        e,
        "font-size",
        /*textStyle*/
        ((s = o[7]) == null ? void 0 : s.fontSize) || "1em"
      ), i[0] & /*textStyle*/
      128 && F(
        e,
        "font-weight",
        /*textStyle*/
        ((a = o[7]) == null ? void 0 : a.fontWeight) || ""
      ), i[0] & /*textStyle*/
      128 && F(
        e,
        "font-family",
        /*textStyle*/
        ((l = o[7]) == null ? void 0 : l.fontFamily) || ""
      ), i[0] & /*textStyle*/
      128 && F(
        e,
        "font-variation-settings",
        /*textStyle*/
        ((u = o[7]) == null ? void 0 : u.fontVariationSettings) || ""
      ), i[0] & /*textStyle*/
      128 && F(
        e,
        "color",
        /*textStyle*/
        ((c = o[7]) == null ? void 0 : c.textColor) || "#000"
      );
    },
    d(o) {
      o && G(r);
    }
  };
}
function uf(t) {
  let r, e = (
    /*textSecondaryStyle*/
    t[8] && cf(t)
  );
  return {
    c() {
      r = Me("div"), e && e.c(), g(r, "class", Ur.slider__thumb + " " + Ur.slider__thumb_secondary), F(r, "border-radius", pe(
        /*thumbSecondaryStyle*/
        t[6].borderRadius
      )), F(
        r,
        "background",
        /*thumbSecondaryStyle*/
        t[6].background
      ), F(
        r,
        "box-shadow",
        /*thumbSecondaryStyle*/
        t[6].boxShadow || ""
      );
    },
    m(n, o) {
      J(n, r, o), e && e.m(r, null);
    },
    p(n, o) {
      /*textSecondaryStyle*/
      n[8] ? e ? e.p(n, o) : (e = cf(n), e.c(), e.m(r, null)) : e && (e.d(1), e = null), o[0] & /*thumbSecondaryStyle*/
      64 && F(r, "border-radius", pe(
        /*thumbSecondaryStyle*/
        n[6].borderRadius
      )), o[0] & /*thumbSecondaryStyle*/
      64 && F(
        r,
        "background",
        /*thumbSecondaryStyle*/
        n[6].background
      ), o[0] & /*thumbSecondaryStyle*/
      64 && F(
        r,
        "box-shadow",
        /*thumbSecondaryStyle*/
        n[6].boxShadow || ""
      );
    },
    d(n) {
      n && G(r), e && e.d();
    }
  };
}
function cf(t) {
  let r, e, n;
  return {
    c() {
      var o, i, s, a, l;
      r = Me("div"), e = Me("div"), n = Gn(
        /*value2*/
        t[12]
      ), g(e, "class", Ur["slider__thumb-text-inner"]), F(
        e,
        "font-size",
        /*textSecondaryStyle*/
        ((o = t[8]) == null ? void 0 : o.fontSize) || "1em"
      ), F(
        e,
        "font-weight",
        /*textSecondaryStyle*/
        ((i = t[8]) == null ? void 0 : i.fontWeight) || ""
      ), F(
        e,
        "font-family",
        /*textSecondaryStyle*/
        ((s = t[8]) == null ? void 0 : s.fontFamily) || ""
      ), F(
        e,
        "font-variation-settings",
        /*textSecondaryStyle*/
        ((a = t[8]) == null ? void 0 : a.fontVariationSettings) || ""
      ), F(
        e,
        "color",
        /*textSecondaryStyle*/
        ((l = t[8]) == null ? void 0 : l.textColor) || "#000"
      ), g(r, "class", Ur["slider__thumb-text"] + " " + Ur["slider__thumb-text_secondary"]);
    },
    m(o, i) {
      J(o, r, i), bt(r, e), bt(e, n);
    },
    p(o, i) {
      var s, a, l, u, c;
      i[0] & /*value2*/
      4096 && eo(
        n,
        /*value2*/
        o[12]
      ), i[0] & /*textSecondaryStyle*/
      256 && F(
        e,
        "font-size",
        /*textSecondaryStyle*/
        ((s = o[8]) == null ? void 0 : s.fontSize) || "1em"
      ), i[0] & /*textSecondaryStyle*/
      256 && F(
        e,
        "font-weight",
        /*textSecondaryStyle*/
        ((a = o[8]) == null ? void 0 : a.fontWeight) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && F(
        e,
        "font-family",
        /*textSecondaryStyle*/
        ((l = o[8]) == null ? void 0 : l.fontFamily) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && F(
        e,
        "font-variation-settings",
        /*textSecondaryStyle*/
        ((u = o[8]) == null ? void 0 : u.fontVariationSettings) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && F(
        e,
        "color",
        /*textSecondaryStyle*/
        ((c = o[8]) == null ? void 0 : c.textColor) || "#000"
      );
    },
    d(o) {
      o && G(r);
    }
  };
}
function ff(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Me("input"), g(r, "type", "range"), g(r, "class", e = /*switchedTracks*/
      t[16] ? Ur.slider__input : `${Ur.slider__input} ${Ur.slider__input_secondary}`), g(
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
      J(a, r, l), i || (s = [
        Qe(
          r,
          "input",
          /*input_handler_1*/
          t[75]
        ),
        Qe(r, "mousedown", function() {
          zr(
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
        Qe(r, "touchstart", function() {
          zr(
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
        Qe(r, "focus", function() {
          zr(
            /*focusHandler*/
            t[83]
          ) && t[83].apply(this, arguments);
        }),
        Qe(r, "blur", function() {
          zr(
            /*blurHandler*/
            t[84]
          ) && t[84].apply(this, arguments);
        })
      ], i = !0);
    },
    p(a, l) {
      t = a, l[0] & /*switchedTracks*/
      65536 && e !== (e = /*switchedTracks*/
      t[16] ? Ur.slider__input : `${Ur.slider__input} ${Ur.slider__input_secondary}`) && g(r, "class", e), l[0] & /*minValue*/
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
      a && G(r), i = !1, Jr(s);
    }
  };
}
function fw(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N = ir(
    /*renderRanges*/
    t[21]
  ), H = [];
  for (let D = 0; D < N.length; D += 1)
    H[D] = of(nf(t, N, D));
  let O = ir(
    /*markActiveTicks*/
    t[17]
  ), ne = [];
  for (let D = 0; D < O.length; D += 1)
    ne[D] = sf(rf(t, O, D));
  let de = ir(
    /*markInactiveTicks*/
    t[18]
  ), T = [];
  for (let D = 0; D < de.length; D += 1)
    T[D] = lf(tf(t, de, D));
  let X = (
    /*textStyle*/
    t[7] && af(t)
  ), le = (
    /*secondVariable*/
    t[13] && uf(t)
  ), C = (
    /*secondVariable*/
    t[13] && ff(t)
  );
  return {
    c() {
      r = Me("div"), e = Me("div"), n = Me("div");
      for (let D = 0; D < H.length; D += 1)
        H[D].c();
      i = gr();
      for (let D = 0; D < ne.length; D += 1)
        ne[D].c();
      s = gr();
      for (let D = 0; D < T.length; D += 1)
        T[D].c();
      a = gr(), l = Me("div"), X && X.c(), u = gr(), le && le.c(), c = gr(), f = Me("input"), p = gr(), C && C.c(), g(n, "class", o = Ur["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Ur["slider__tracks-ranges_rtl"] : "")), g(l, "class", Ur.slider__thumb), F(l, "border-radius", pe(
        /*thumbStyle*/
        t[5].borderRadius
      )), F(
        l,
        "background",
        /*thumbStyle*/
        t[5].background
      ), F(
        l,
        "box-shadow",
        /*thumbStyle*/
        t[5].boxShadow || ""
      ), g(f, "type", "range"), g(f, "class", _ = /*switchedTracks*/
      t[16] ? `${Ur.slider__input} ${Ur.slider__input_secondary}` : Ur.slider__input), g(
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
      ), g(e, "class", Ur["slider__tracks-inner"]), g(r, "class", Ur["slider__tracks-wrapper"]);
    },
    m(D, M) {
      J(D, r, M), bt(r, e), bt(e, n);
      for (let W = 0; W < H.length; W += 1)
        H[W] && H[W].m(n, null);
      bt(e, i);
      for (let W = 0; W < ne.length; W += 1)
        ne[W] && ne[W].m(e, null);
      bt(e, s);
      for (let W = 0; W < T.length; W += 1)
        T[W] && T[W].m(e, null);
      bt(e, a), bt(e, l), X && X.m(l, null), bt(e, u), le && le.m(e, null), bt(e, c), bt(e, f), t[74](f), bt(e, p), C && C.m(e, null), t[76](e), w || (k = [
        Qe(
          f,
          "input",
          /*input_handler*/
          t[73]
        ),
        Qe(f, "focus", function() {
          zr(
            /*focusHandler*/
            t[83]
          ) && t[83].apply(this, arguments);
        }),
        Qe(f, "blur", function() {
          zr(
            /*blurHandler*/
            t[84]
          ) && t[84].apply(this, arguments);
        })
      ], w = !0);
    },
    p(D, M) {
      if (t = D, M[0] & /*renderRanges*/
      2097152) {
        N = ir(
          /*renderRanges*/
          t[21]
        );
        let W;
        for (W = 0; W < N.length; W += 1) {
          const Q = nf(t, N, W);
          H[W] ? H[W].p(Q, M) : (H[W] = of(Q), H[W].c(), H[W].m(n, null));
        }
        for (; W < H.length; W += 1)
          H[W].d(1);
        H.length = N.length;
      }
      if (M[0] & /*$direction*/
      16384 && o !== (o = Ur["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Ur["slider__tracks-ranges_rtl"] : "")) && g(n, "class", o), M[0] & /*markActiveTicks*/
      131072) {
        O = ir(
          /*markActiveTicks*/
          t[17]
        );
        let W;
        for (W = 0; W < O.length; W += 1) {
          const Q = rf(t, O, W);
          ne[W] ? ne[W].p(Q, M) : (ne[W] = sf(Q), ne[W].c(), ne[W].m(e, s));
        }
        for (; W < ne.length; W += 1)
          ne[W].d(1);
        ne.length = O.length;
      }
      if (M[0] & /*markInactiveTicks*/
      262144) {
        de = ir(
          /*markInactiveTicks*/
          t[18]
        );
        let W;
        for (W = 0; W < de.length; W += 1) {
          const Q = tf(t, de, W);
          T[W] ? T[W].p(Q, M) : (T[W] = lf(Q), T[W].c(), T[W].m(e, a));
        }
        for (; W < T.length; W += 1)
          T[W].d(1);
        T.length = de.length;
      }
      /*textStyle*/
      t[7] ? X ? X.p(t, M) : (X = af(t), X.c(), X.m(l, null)) : X && (X.d(1), X = null), M[0] & /*thumbStyle*/
      32 && F(l, "border-radius", pe(
        /*thumbStyle*/
        t[5].borderRadius
      )), M[0] & /*thumbStyle*/
      32 && F(
        l,
        "background",
        /*thumbStyle*/
        t[5].background
      ), M[0] & /*thumbStyle*/
      32 && F(
        l,
        "box-shadow",
        /*thumbStyle*/
        t[5].boxShadow || ""
      ), /*secondVariable*/
      t[13] ? le ? le.p(t, M) : (le = uf(t), le.c(), le.m(e, c)) : le && (le.d(1), le = null), M[0] & /*switchedTracks*/
      65536 && _ !== (_ = /*switchedTracks*/
      t[16] ? `${Ur.slider__input} ${Ur.slider__input_secondary}` : Ur.slider__input) && g(f, "class", _), M[0] & /*minValue*/
      8 && g(
        f,
        "min",
        /*minValue*/
        t[3]
      ), M[0] & /*maxValue*/
      16 && g(
        f,
        "max",
        /*maxValue*/
        t[4]
      ), M[0] & /*switchedTracks, value2, value*/
      71680 && h !== (h = /*switchedTracks*/
      t[16] ? (
        /*value2*/
        t[12]
      ) : (
        /*value*/
        t[11]
      )) && (f.value = h), M[0] & /*isEnabled*/
      512 && m !== (m = !/*isEnabled*/
      t[9]) && (f.disabled = m), M[0] & /*description*/
      524288 && g(
        f,
        "aria-label",
        /*description*/
        t[19]
      ), /*secondVariable*/
      t[13] ? C ? C.p(t, M) : (C = ff(t), C.c(), C.m(e, null)) : C && (C.d(1), C = null);
    },
    d(D) {
      D && G(r), on(H, D), on(ne, D), on(T, D), X && X.d(), le && le.d(), t[74](null), C && C.d(), t[76](null), w = !1, Jr(k);
    }
  };
}
function dw(t) {
  let r, e, n, o, i, s;
  const a = [cw, uw], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[10] ? 1 : 0
    );
  }
  return ~(r = u(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(c, f) {
      ~r && l[r].m(c, f), J(c, n, f), o = !0, i || (s = Qe(
        window,
        "resize",
        /*checkTicksDebounced*/
        t[43]
      ), i = !0);
    },
    p(c, f) {
      let _ = r;
      r = u(c), r === _ ? ~r && l[r].p(c, f) : (e && (sr(), x(l[_], 1, 1, () => {
        l[_] = null;
      }), lr()), ~r ? (e = l[r], e ? e.p(c, f) : (e = l[r] = a[r](c), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(c) {
      o || (L(e), o = !0);
    },
    o(c) {
      x(e), o = !1;
    },
    d(c) {
      c && G(n), ~r && l[r].d(c), i = !1, s();
    }
  };
}
const xn = {
  width: 10,
  height: 10,
  borderRadius: 5,
  background: "#000"
}, ks = ["rounded_rectangle", "circle"], Nl = ["rounded_rectangle"];
function vs(t, r, e, n, o) {
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
function _w(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, O, ne, de, T, X, le, C, D, M, W, Q, me, Ee = j, ve = () => (Ee(), Ee = S(ne, (v) => e(57, me = v)), ne), he, Se = j, Z = () => (Se(), Se = S(H, (v) => e(58, he = v)), H), et, Je = j, qe = () => (Je(), Je = S(O, (v) => e(59, et = v)), O), be, Te = j, ue = () => (Te(), Te = S(N, (v) => e(60, be = v)), N), ge, ce = j, re = () => (ce(), ce = S(k, (v) => e(61, ge = v)), k), ae, oe = j, we = () => (oe(), oe = S(w, (v) => e(62, ae = v)), w), Re, Ge = j, ee = () => (Ge(), Ge = S(p, (v) => e(63, Re = v)), p), Oe, Ne = j, nt = () => (Ne(), Ne = S(m, (v) => e(64, Oe = v)), m), at, tt = j, yt = () => (tt(), tt = S(h, (v) => e(65, at = v)), h), rt, Mt = j, ft = () => (Mt(), Mt = S(_, (v) => e(66, rt = v)), _), K, _e = j, st = () => (_e(), _e = S(f, (v) => e(67, K = v)), f), Pe, I = j, jt = () => (I(), I = S(c, (v) => e(68, Pe = v)), c), lt, Et = j, Dt = () => (Et(), Et = S(a, (v) => e(69, lt = v)), a), ot, q = j, Tt = () => (q(), q = S(s, (v) => e(70, ot = v)), s), Ft, Kt = j, Xt = () => (Kt(), Kt = S(u, (v) => e(71, Ft = v)), u), je, Ke = j, _t = () => (Ke(), Ke = S(l, (v) => e(72, je = v)), l);
  t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => Se()), t.$$.on_destroy.push(() => Je()), t.$$.on_destroy.push(() => Te()), t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Ge()), t.$$.on_destroy.push(() => Ne()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => Mt()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => Et()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => Kt()), t.$$.on_destroy.push(() => Ke());
  let { componentContext: Fe } = r, { layoutParams: $e = void 0 } = r;
  const Be = Dr(Kr), Vt = Dr(To), ze = Be.direction;
  yn(t, ze, (v) => e(14, Q = v));
  let mt, Ut, It, hr = !1, De = 0, kt = 100, ar = xn, rr = ar, er = xn, mr = xn, vr, tr = null, nr, Rt = null, pt, xt = pt, ie = "", yr = "", kr = !0, Ct = !1, Tr = [];
  function Br() {
    e(5, ar = xn), e(6, rr = ar), e(45, er = xn), e(46, mr = xn), e(47, tr = null), e(48, Rt = null), e(7, pt = void 0), e(8, xt = void 0), e(19, ie = ""), e(9, kr = !0), e(20, yr = "");
  }
  let cr = Fo(ot || 0, De, kt), ut = Fo(lt || 0, De, kt);
  function vt({ direction: v, minValue: se, maxValue: d, trackActiveOffset: B, trackActivePart: Ie, trackInactiveStyle: He, trackActiveStyle: ke, ranges: R = [] }) {
    const Jt = [], Ht = (ct, Wt, Fr) => {
      var Mr, jn, Ae, Qr;
      const br = (Yr, pn, Cn, y) => {
        var te, z, xe, Ve;
        const E = Math.max(Yr, Wt);
        if (Math.min(pn, Fr) - E > 0) {
          const $t = y && (z = (te = y[v === "ltr" ? "start" : "end"]) != null ? te : y.left) != null ? z : 0, At = y && (Ve = (xe = y[v === "ltr" ? "end" : "start"]) != null ? xe : y.right) != null ? Ve : 0;
          Jt.push({
            left: Yr,
            right: pn,
            totalLeft: Wt,
            totalRight: Fr,
            leftMargin: $t,
            rightMargin: At,
            style: Cn
          });
        }
      };
      if ((!R[0] || ((Mr = R[0].start) != null ? Mr : se) > Wt) && br(Wt, R[0] ? (jn = R[0].start) != null ? jn : se : Fr, ct === "inactive" ? He : ke), R.forEach((Yr, pn) => {
        var Ve, $t, At, Xe;
        const Cn = Yr[ct === "inactive" ? "track_inactive_style" : "track_active_style"], E = Cn ? ao(Cn, Nl, xn) : ct === "inactive" ? He : ke, A = R[pn - 1], te = R[pn + 1], z = ($t = (Ve = Yr.start) != null ? Ve : A == null ? void 0 : A.end) != null ? $t : Wt, xe = (Xe = (At = Yr.end) != null ? At : te == null ? void 0 : te.start) != null ? Xe : Fr;
        br(z, xe, E, Yr.margins);
      }), R[R.length - 1] && ((Ae = R[R.length - 1].end) != null ? Ae : d) < Fr) {
        const Yr = (Qr = R[R.length - 1].end) != null ? Qr : d;
        br(Yr, Fr, ct === "inactive" ? He : ke);
      }
    };
    Ht("inactive", se, d), Ht("active", B, B + Ie);
    const Ye = d - se;
    e(21, Tr = Jt.map((ct) => {
      let Wt = `${(ct.left - se) * 100 / Ye}%`;
      ct.leftMargin && (Wt = `calc(${Wt} + ${an(ct.leftMargin)})`);
      let Fr;
      ct.totalLeft < ct.left ? Fr = Wt : ct.leftMargin ? Fr = `max(${(ct.totalLeft - se) * 100 / Ye}%, ${Wt})` : Fr = `${(Math.max(ct.totalLeft, ct.left) - se) * 100 / Ye}%`;
      let br = `${(1 - (ct.right - se) / Ye) * 100}%`;
      ct.rightMargin && (br = `calc(${br} + ${an(ct.rightMargin)})`);
      let Mr;
      return ct.totalRight > ct.right ? Mr = br : ct.rightMargin ? Mr = `max(${(1 - (ct.totalRight - se) / Ye) * 100}%, ${br})` : Mr = `${(1 - (Math.max(ct.totalRight, ct.right) - se) / Ye) * 100}%`, {
        left: Fr,
        right: Mr,
        height: pe(ct.style.height),
        borderRadius: pe(ct.style.borderRadius),
        background: ct.style.background,
        boxShadow: ct.style.boxShadow || ""
      };
    }));
  }
  function Gt(v) {
    var R, Jt;
    if (!kr)
      return;
    const se = "pageX" in v ? v.pageX : (Jt = (R = v.changedTouches) == null ? void 0 : R[0]) == null ? void 0 : Jt.pageX;
    if (se === void 0)
      return;
    const d = It.getBoundingClientRect();
    let B = (se - d.left) / d.width;
    Q === "rtl" && (B = 1 - B);
    const Ie = De + (kt - De) * B, He = Math.round(Fo(Ie, De, kt)), ke = (cr + ut) / 2;
    e(16, hr = He < ke == cr < ut);
  }
  function Zt(v, se) {
    const d = Number(v.target.value);
    hr === (se === "first") ? (e(12, ut = d), a.setValue(d)) : (e(11, cr = d), s.setValue(d));
  }
  let ur = !1;
  function dt() {
    if (!It)
      return;
    const v = kt - De, se = (tr == null ? void 0 : tr.width) || 0, d = (Rt == null ? void 0 : Rt.width) || 0;
    Math.max(se, d) * v >= (It == null ? void 0 : It.clientWidth) ? ur || (Fe.logError(Y(new Error("Slider ticks overlap each other"), { level: "warn" })), ur = !0) : ur = !1;
  }
  const fe = va(dt, 50);
  Zn(() => {
    dt();
  }), sn(() => {
    mt && (Be.unregisterFocusable(mt), e(44, mt = void 0));
  });
  const wt = (v) => Zt(v, "first");
  function or(v) {
    Vr[v ? "unshift" : "push"](() => {
      Ut = v, e(2, Ut);
    });
  }
  const Yt = (v) => Zt(v, "second");
  function jr(v) {
    Vr[v ? "unshift" : "push"](() => {
      It = v, e(15, It);
    });
  }
  return t.$$set = (v) => {
    "componentContext" in v && e(0, Fe = v.componentContext), "layoutParams" in v && e(1, $e = v.layoutParams);
  }, t.$$.update = () => {
    var v, se, d, B;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(56, n = Fe.origJson), t.$$.dirty[1] & /*origJson*/
    33554432 && n && Br(), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, o = Fe.json.thumb_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(13, i = Fe.json.thumb_secondary_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*firstVariable*/
    16777216 && Tt(e(22, s = o && (Fe.getVariable(o, "integer") || Be.awaitGlobalVariable(o, "integer", 0)) || io("temp", "integer", 0))), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 && Dt(e(23, a = i && (Fe.getVariable(i, "integer") || Be.awaitGlobalVariable(i, "integer", 0)) || io("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(39, l = Fe.getDerivedFromVars(Fe.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Xt(e(38, u = Fe.getDerivedFromVars(Fe.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && jt(e(37, c = Fe.getDerivedFromVars(Fe.json.thumb_style))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(36, f = Fe.getDerivedFromVars(Fe.json.thumb_secondary_style))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(35, _ = Fe.getDerivedFromVars(Fe.json.track_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && yt(e(34, h = Fe.getDerivedFromVars(Fe.json.track_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && nt(e(33, m = Fe.getDerivedFromVars(Fe.json.tick_mark_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && ee(e(32, p = Fe.getDerivedFromVars(Fe.json.tick_mark_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && we(e(31, w = Fe.getDerivedFromVars(Fe.json.thumb_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && re(e(30, k = Fe.getDerivedFromVars(Fe.json.thumb_secondary_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(29, N = Fe.getDerivedFromVars(Fe.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Z(e(28, H = Fe.getDerivedFromVars(Fe.json.secondary_value_accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(27, O = Fe.getDerivedFromVars(Fe.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && ve(e(26, ne = Fe.getDerivedFromVars(Fe.json.ranges))), t.$$.dirty[0] & /*minValue, maxValue*/
    24 | t.$$.dirty[2] & /*$jsonMinValue, $jsonMaxValue*/
    1536 && (e(3, De = oo(je, De)), e(4, kt = oo(Ft, kt)), dt()), t.$$.dirty[0] & /*minValue, maxValue, value*/
    2072 | t.$$.dirty[2] & /*$valueVariable*/
    256) {
      const Ie = Fo(ot || 0, De, kt);
      Ie !== cr && e(11, cr = Ie);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue, value2*/
    4120 | t.$$.dirty[2] & /*$value2Variable*/
    128) {
      const Ie = Fo(lt || 0, De, kt);
      Ie !== ut && e(12, ut = Ie);
    }
    if (t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbStyle*/
    64 && e(5, ar = ao(Pe, ks, ar)), t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbSecondaryStyle*/
    32 && e(6, rr = ao(K, ks, ar)), t.$$.dirty[1] & /*trackInactiveStyle*/
    16384 | t.$$.dirty[2] & /*$jsonTrackInactiveStyle*/
    16 && e(45, er = ao(rt, Nl, er)), t.$$.dirty[1] & /*trackActiveStyle*/
    32768 | t.$$.dirty[2] & /*$jsonTrackActiveStyle*/
    8 && e(46, mr = ao(at, Nl, mr)), t.$$.dirty[2] & /*$jsonMarkActiveStyle*/
    4) {
      let Ie = ao(Oe, ks, xn);
      Ie !== xn && e(47, tr = Ie);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markActiveStyle*/
    65536 && (tr ? (e(17, vr = i ? vs(Math.min(cr, ut), Math.max(cr, ut) + 1, De, kt, !0) : vs(De, cr, De, kt, !0)), dt()) : e(17, vr = [])), t.$$.dirty[2] & /*$jsonMarkInactiveStyle*/
    2) {
      let Ie = ao(Re, ks, xn);
      Ie !== xn && e(48, Rt = Ie);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markInactiveStyle*/
    131072 && (Rt ? (e(18, nr = i ? vs(Math.min(cr, ut), Math.max(cr, ut) + 1, De, kt, !1) : vs(cr + 1, kt + 1, De, kt, !0)), dt()) : e(18, nr = [])), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[2] & /*$jsonTextStyle*/
    1 && e(7, pt = ef(ae, Be.typefaceProvider, pt)), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[1] & /*$jsonSecondaryTextStyle*/
    1073741824 && e(8, xt = ef(ge, Be.typefaceProvider, pt)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    536870912 && (be != null && be.description ? e(19, ie = ti(be)) : Fe.logError(Y(new Error('Missing accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    512 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    268435456 && e(9, kr = nn(et, kr)), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 | t.$$.dirty[1] & /*$jsonSecondaryAccessibility*/
    134217728 && (he != null && he.description ? e(20, yr = ti(he)) : i && Fe.logError(Y(new Error('Missing second accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext, thumbStyle, hasError*/
    1057 | t.$$.dirty[1] & /*trackActiveStyle, trackInactiveStyle*/
    49152) {
      let Ie = !1;
      Vt.hasAction() ? (Fe.logError(Y(new Error('Cannot show "slider" inside component with an action or inside accessibility mode=exclude'))), Ie = !0) : ar === xn ? (Fe.logError(Y(new Error('Missing "thumb_style" in slider'))), Ie = !0) : mr === xn ? (Fe.logError(Y(new Error('Missing "track_active_style" in slider'))), Ie = !0) : er === xn && (Fe.logError(Y(new Error('Missing "track_inactive_style" in slider'))), Ie = !0), Ie !== Ct && e(10, Ct = Ie);
    }
    t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(52, de = pe(Math.max(...[ar.width, rr.width, 0].filter(Nn)))), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(51, T = pe(Math.max(...[ar.height, rr.height, 0].filter(Nn)))), t.$$.dirty[0] & /*value, minValue, maxValue*/
    2072 && e(50, X = (cr - De) / (kt - De)), t.$$.dirty[0] & /*secondVariable, value2, minValue, maxValue*/
    12312 && e(49, le = i ? (ut - De) / (kt - De) : void 0), t.$$.dirty[0] & /*value, value2, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(54, C = le !== void 0 ? Math.min(cr, ut) : De), t.$$.dirty[0] & /*value2, value, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(53, D = le !== void 0 ? Math.abs(ut - cr) : cr - De), t.$$.dirty[0] & /*$direction, minValue, maxValue*/
    16408 | t.$$.dirty[1] & /*trackActiveOffset, trackActivePart, trackInactiveStyle, trackActiveStyle, $jsonRanges*/
    79740928 && vt({
      direction: Q,
      minValue: De,
      maxValue: kt,
      trackActiveOffset: C,
      trackActivePart: D,
      trackInactiveStyle: er,
      trackActiveStyle: mr,
      ranges: me
    }), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle, textStyle, textSecondaryStyle*/
    480 | t.$$.dirty[1] & /*markActiveStyle, markInactiveStyle, maxThumbWidth, maxThumbHeight, trackPart, trackSecondaryPart*/
    4128768 && e(25, M = {
      "--divkit-slider-thumb-width": pe(ar.width),
      "--divkit-slider-thumb-height": pe(ar.height),
      "--divkit-slider-thumb-secondary-width": pe(rr.width),
      "--divkit-slider-thumb-secondary-height": pe(rr.height),
      "--divkit-slider-text-offset-x": (v = pt == null ? void 0 : pt.offset) != null && v.x ? an(pt.offset.x) : void 0,
      "--divkit-slider-text-offset-y": (se = pt == null ? void 0 : pt.offset) != null && se.y ? an(pt.offset.y) : void 0,
      "--divkit-slider-text-secondary-offset-x": (d = xt == null ? void 0 : xt.offset) != null && d.x ? an(xt.offset.x) : void 0,
      "--divkit-slider-text-secondary-offset-y": (B = xt == null ? void 0 : xt.offset) != null && B.y ? an(xt.offset.y) : void 0,
      "--divkit-slider-tick-active-width": tr ? pe(tr.width) : void 0,
      "--divkit-slider-tick-active-height": tr ? pe(tr.height) : void 0,
      "--divkit-slider-tick-active-border-radius": tr ? pe(tr.borderRadius) : void 0,
      "--divkit-slider-tick-active-background": (tr == null ? void 0 : tr.background) || void 0,
      "--divkit-slider-tick-active-box-shadow": (tr == null ? void 0 : tr.boxShadow) || void 0,
      "--divkit-slider-tick-inactive-width": Rt ? pe(Rt.width) : void 0,
      "--divkit-slider-tick-inactive-height": Rt ? pe(Rt.height) : void 0,
      "--divkit-slider-tick-inactive-border-radius": Rt ? pe(Rt.borderRadius) : void 0,
      "--divkit-slider-tick-inactive-background": (Rt == null ? void 0 : Rt.background) || void 0,
      "--divkit-slider-tick-inactive-box-shadow": (Rt == null ? void 0 : Rt.boxShadow) || void 0,
      "--divkit-slider-max-thumb-width": de,
      "--divkit-slider-max-thumb-height": T,
      "--divkit-slider-track-part": X,
      "--divkit-slider-track-secondary-part": le
    }), t.$$.dirty[0] & /*$direction*/
    16384 && e(24, W = { direction: Q }), t.$$.dirty[0] & /*componentContext, input*/
    5 | t.$$.dirty[1] & /*prevId*/
    8192 && Fe.json && Ut && (mt && (Be.unregisterFocusable(mt), e(44, mt = void 0)), Fe.id && !Fe.fakeElement && (e(44, mt = Fe.id), Be.registerFocusable(mt, {
      focus() {
        Ut && Ut.focus();
      }
    })));
  }, [
    Fe,
    $e,
    Ut,
    De,
    kt,
    ar,
    rr,
    pt,
    xt,
    kr,
    Ct,
    cr,
    ut,
    i,
    Q,
    It,
    hr,
    vr,
    nr,
    ie,
    yr,
    Tr,
    s,
    a,
    W,
    M,
    ne,
    O,
    H,
    N,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    ze,
    Gt,
    Zt,
    fe,
    mt,
    er,
    mr,
    tr,
    Rt,
    le,
    X,
    T,
    de,
    D,
    C,
    o,
    n,
    me,
    he,
    et,
    be,
    ge,
    ae,
    Re,
    Oe,
    at,
    rt,
    K,
    Pe,
    lt,
    ot,
    Ft,
    je,
    wt,
    or,
    Yt,
    jr
  ];
}
class pw extends Or {
  constructor(r) {
    super(), Lr(this, r, _w, dw, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const gw = "appkit-input", hw = "appkit-input__aligner", mw = "appkit-input__input", bw = "appkit-input__placeholder", yw = "appkit-input__input_singleline", ww = "appkit-input__input_multiline", Bi = {
  input: gw,
  "input_alignment-horizontal_center": "appkit-input_alignment-horizontal_center",
  "input_alignment-horizontal_end": "appkit-input_alignment-horizontal_end",
  input__aligner: hw,
  input__input: mw,
  input__placeholder: bw,
  "input_alignment-vertical_start": "appkit-input_alignment-vertical_start",
  "input_alignment-vertical_end": "appkit-input_alignment-vertical_end",
  "input_alignment-vertical_baseline": "appkit-input_alignment-vertical_baseline",
  "input_highlight-color": "appkit-input_highlight-color",
  input__input_singleline: yw,
  "input__scroll-wrapper": "appkit-input__scroll-wrapper",
  input__input_multiline: ww,
  "input__input_has-custom-focus": "appkit-input__input_has-custom-focus"
};
function fs(t, r) {
  if (t === r)
    return {
      start: t.length,
      added: 0,
      removed: 0
    };
  if (t.length > r.length) {
    const i = fs(r, t);
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
class df {
  constructor(r) {
    this.char = r;
  }
}
class wo {
  constructor(r, e, n) {
    this.char = r, this.filter = e, this.placeholder = n;
  }
}
class Ea {
  constructor(r) {
    Ar(this, "maskData");
    Ar(this, "filters", /* @__PURE__ */ new Map());
    Ar(this, "destructedValue", []);
    Ar(this, "cursorPos", 0);
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
      if (n instanceof df)
        r += n.char;
      else if (n instanceof wo)
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
    const r = this.destructedValue.findIndex((e) => e instanceof wo && !e.char);
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
          this.onException(Y(i, {
            level: "error",
            additional: {
              key: o.key
            }
          }));
        }
    }), this.destructedValue = this.maskData.pattern.split("").map((o) => {
      const i = this.maskData.decoding.find((s) => s.key === o);
      return i ? new wo(
        null,
        this.filters.get(i.key),
        i.placeholder
      ) : new df(o);
    }), n !== null && this.overrideRawValue(n);
  }
  overrideRawValue(r) {
    this.clearRange(0, this.destructedValue.length), this.replaceChars(r, 0), this.cursorPos = Math.min(this.cursorPos, this.value.length);
  }
  applyChangeFrom(r, e) {
    const n = fs(this.value, r);
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
        this.destructedValue[s] instanceof wo && ++i, ++s;
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
        if (n instanceof wo && n.char !== null) {
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
      o instanceof wo && (o.char = null), ++n;
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
      for (; o < this.destructedValue.length && !(this.destructedValue[o] instanceof wo); )
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
      i instanceof wo && i.char !== null && (n += i.char), ++o;
    }
    return n;
  }
  replaceChars(r, e, n) {
    let o = this.calculateInsertableSubstring(r, e);
    n !== void 0 && (o = o.substring(0, n));
    let i = e, s = 0;
    for (; i < this.destructedValue.length && s < o.length; ) {
      const a = this.destructedValue[i], l = o[s];
      a instanceof wo && (a.char = l, ++s), ++i;
    }
  }
  firstHolderAfter(r) {
    let e = r;
    for (; e < this.destructedValue.length && !(this.destructedValue[e] instanceof wo); )
      ++e;
    return e;
  }
}
class kw extends Ea {
  constructor(r, e) {
    super(r), this.logError = e;
  }
  onException(r) {
    this.logError(r);
  }
}
function vw(t, r, e) {
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
    return e ? (e.updateMaskData(n), e) : new kw(n, r);
  }
  return e || null;
}
class jw extends Ea {
  constructor(e = void 0, n) {
    super({
      pattern: "",
      decoding: [],
      alwaysVisible: !1
    });
    Ar(this, "currencyFormatter", new Intl.NumberFormat());
    Ar(this, "decimalSeparator", ".");
    Ar(this, "localeDigits", {});
    Ar(this, "trimZeroRegExp", new RegExp(""));
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
      this.onException(Y(n, {
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
    const o = fs(this.value, e), i = this.value.lastIndexOf(this.decimalSeparator), s = e.lastIndexOf(this.decimalSeparator), a = i !== s || i === -1 && s === -1, l = this.validFormat(e, o);
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
function Cw(t, r, e) {
  return e ? (e.updateCurrencyParams(t.locale), e) : new jw(t.locale, r);
}
const Ew = {
  kotlin: {
    public_default_values: !0
  },
  swift: {
    public_default_values: !0
  }
}, Aw = {
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
}, Sw = "object", Vw = {
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
}, a_ = {
  codegen: Ew,
  constants: Aw,
  type: Sw,
  properties: Vw
}, Fw = "000000000000000", _f = "*", Iw = "00", pf = [{
  key: "0",
  filter: "\\d",
  placeholder: "_"
}];
class Dw extends Ea {
  constructor(e) {
    super({
      pattern: hf(""),
      decoding: pf,
      alwaysVisible: !1
    });
    Ar(this, "decimalSeparator", ".");
    Ar(this, "localeDigits", {});
    Ar(this, "trimZeroRegExp", new RegExp(""));
    this.logError = e;
  }
  overrideRawValue(e) {
    this.tryInvalidateMaskDataWith(e), super.overrideRawValue(e);
  }
  applyChangeFrom(e, n) {
    const o = fs(this.value, e);
    n !== void 0 && (o.start = Math.max(0, n - o.added));
    const i = this.rawValue, s = this.replaceBodyTail(o, e), a = this.rawValue, l = this.newMaskPatternFor(a);
    if (l == null) {
      this.calculateCursorPosition(o, s);
      return;
    }
    this.updateMaskDataWith(l), this.replaceChars(a, 0);
    const u = fs(i, a), c = u.start + u.added;
    this.calculateCursorPositionBy(c);
  }
  calculateCursorPositionBy(e) {
    let n = 0, o = 0;
    for (; n < this.destructedValue.length && o < e; )
      this.destructedValue[n++] instanceof wo && o++;
    this.cursorPos = this.firstHolderAfter(n);
  }
  tryInvalidateMaskDataWith(e) {
    const n = this.newMaskPatternFor(e);
    n && this.updateMaskDataWith(n);
  }
  newMaskPatternFor(e) {
    const n = hf(e), o = this.maskData.pattern;
    return n !== o ? n : null;
  }
  updateMaskDataWith(e) {
    return this.updateMaskData({
      pattern: e,
      decoding: pf,
      alwaysVisible: this.maskData.alwaysVisible
    }, !1);
  }
  onException(e) {
    this.logError(e);
  }
}
function gf(t) {
  return "$ref" in t ? a_.constants[t.$ref.split("/").pop()] : t;
}
function hf(t) {
  if (!t)
    return Fw;
  let r = a_.properties.value.default_value, e = 0;
  for (; !("value" in r); ) {
    if (e >= t.length) {
      r = gf(r[_f]);
      break;
    }
    const n = t[e++];
    r = gf(r[n in r ? n : _f]);
  }
  return r.value + Iw;
}
function Tw(t, r) {
  return r || new Dw(t);
}
function Mw(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function Pw(t) {
  let r, e;
  return r = new mn({
    props: {
      alwaysCustomFocus: !0,
      cls: ht(
        "input",
        Bi,
        /*mods*/
        t[18]
      ),
      style: (
        /*stl*/
        t[17]
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
          Lw,
          ({ focusHandler: n, blurHandler: o, hasCustomFocus: i }) => ({
            121: n,
            122: o,
            123: i
          }),
          ({ focusHandler: n, blurHandler: o, hasCustomFocus: i }) => [
            0,
            0,
            0,
            (n ? 268435456 : 0) | (o ? 536870912 : 0) | (i ? 1073741824 : 0)
          ]
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      262144 && (i.cls = ht(
        "input",
        Bi,
        /*mods*/
        n[18]
      )), o[0] & /*stl*/
      131072 && (i.style = /*stl*/
      n[17]), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*autocapitalization, description, describedBy, enterKeyType, paddingStl, isEnabled, maxLength, placeholder, value, input, isMultiline, inputType, inputMode*/
      622444 | o[1] & /*$jsonSelectAll*/
      32768 | o[3] & /*hasCustomFocus, focusHandler, blurHandler*/
      1879048192 | o[4] & /*$$scope*/
      1 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function Nw(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Me("input"), g(
        r,
        "type",
        /*inputType*/
        t[9]
      ), g(
        r,
        "inputmode",
        /*inputMode*/
        t[10]
      ), g(r, "class", e = ht("input__input", Bi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[123]
        ),
        singleline: !0
      })), g(r, "autocomplete", "off"), g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[12]
      ), g(
        r,
        "aria-label",
        /*description*/
        t[11]
      ), g(r, "aria-describedby", n = /*describedBy*/
      t[14] || void 0), g(r, "style", o = _r(
        /*paddingStl*/
        t[16]
      )), r.disabled = i = !/*isEnabled*/
      t[5], g(r, "maxlength", s = /*maxLength*/
      t[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        t[6]
      )), g(
        r,
        "placeholder",
        /*placeholder*/
        t[19]
      ), r.value = /*value*/
      t[3], g(r, "enterkeyhint", a = /*enterKeyType*/
      t[13] === "default" ? void 0 : (
        /*enterKeyType*/
        t[13]
      ));
    },
    m(c, f) {
      J(c, r, f), t[102](r), l || (u = [
        Qe(
          r,
          "input",
          /*onInput*/
          t[48]
        ),
        Qe(
          r,
          "keydown",
          /*onKeyDown*/
          t[49]
        ),
        Qe(r, "mousedown", function() {
          zr(
            /*$jsonSelectAll*/
            t[46] ? (
              /*onMousedown*/
              t[50]
            ) : void 0
          ) && (t[46] ? (
            /*onMousedown*/
            t[50]
          ) : void 0).apply(this, arguments);
        }),
        Qe(r, "click", function() {
          zr(
            /*$jsonSelectAll*/
            t[46] ? (
              /*onClick*/
              t[51]
            ) : void 0
          ) && (t[46] ? (
            /*onClick*/
            t[51]
          ) : void 0).apply(this, arguments);
        }),
        Qe(r, "focus", function() {
          zr(
            /*focusHandler*/
            t[121]
          ) && t[121].apply(this, arguments);
        }),
        Qe(r, "blur", function() {
          zr(
            /*blurHandler*/
            t[122]
          ) && t[122].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[0] & /*inputType*/
      512 && g(
        r,
        "type",
        /*inputType*/
        t[9]
      ), f[0] & /*inputMode*/
      1024 && g(
        r,
        "inputmode",
        /*inputMode*/
        t[10]
      ), f[3] & /*hasCustomFocus*/
      1073741824 && e !== (e = ht("input__input", Bi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[123]
        ),
        singleline: !0
      })) && g(r, "class", e), f[0] & /*autocapitalization*/
      4096 && g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[12]
      ), f[0] & /*description*/
      2048 && g(
        r,
        "aria-label",
        /*description*/
        t[11]
      ), f[0] & /*describedBy*/
      16384 && n !== (n = /*describedBy*/
      t[14] || void 0) && g(r, "aria-describedby", n), f[0] & /*paddingStl*/
      65536 && o !== (o = _r(
        /*paddingStl*/
        t[16]
      )) && g(r, "style", o), f[0] & /*isEnabled*/
      32 && i !== (i = !/*isEnabled*/
      t[5]) && (r.disabled = i), f[0] & /*maxLength*/
      64 && s !== (s = /*maxLength*/
      t[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        t[6]
      )) && g(r, "maxlength", s), f[0] & /*placeholder*/
      524288 && g(
        r,
        "placeholder",
        /*placeholder*/
        t[19]
      ), f[0] & /*value*/
      8 && r.value !== /*value*/
      t[3] && (r.value = /*value*/
      t[3]), f[0] & /*enterKeyType*/
      8192 && a !== (a = /*enterKeyType*/
      t[13] === "default" ? void 0 : (
        /*enterKeyType*/
        t[13]
      )) && g(r, "enterkeyhint", a);
    },
    d(c) {
      c && G(r), t[102](null), l = !1, Jr(u);
    }
  };
}
function zw(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Me("textarea"), g(r, "class", e = ht("input__input", Bi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[123]
        ),
        multiline: !0
      })), g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[12]
      ), g(
        r,
        "aria-label",
        /*description*/
        t[11]
      ), g(r, "aria-describedby", n = /*describedBy*/
      t[14] || void 0), g(r, "enterkeyhint", o = /*enterKeyType*/
      t[13] === "default" ? void 0 : (
        /*enterKeyType*/
        t[13]
      )), g(r, "style", i = _r(
        /*paddingStl*/
        t[16]
      )), r.disabled = s = !/*isEnabled*/
      t[5], g(r, "maxlength", a = /*maxLength*/
      t[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        t[6]
      )), g(
        r,
        "placeholder",
        /*placeholder*/
        t[19]
      ), r.value = /*value*/
      t[3];
    },
    m(c, f) {
      J(c, r, f), t[101](r), l || (u = [
        Qe(
          r,
          "input",
          /*onInput*/
          t[48]
        ),
        Qe(
          r,
          "keydown",
          /*onKeyDown*/
          t[49]
        ),
        Qe(r, "mousedown", function() {
          zr(
            /*$jsonSelectAll*/
            t[46] ? (
              /*onMousedown*/
              t[50]
            ) : void 0
          ) && (t[46] ? (
            /*onMousedown*/
            t[50]
          ) : void 0).apply(this, arguments);
        }),
        Qe(r, "click", function() {
          zr(
            /*$jsonSelectAll*/
            t[46] ? (
              /*onClick*/
              t[51]
            ) : void 0
          ) && (t[46] ? (
            /*onClick*/
            t[51]
          ) : void 0).apply(this, arguments);
        }),
        Qe(r, "focus", function() {
          zr(
            /*focusHandler*/
            t[121]
          ) && t[121].apply(this, arguments);
        }),
        Qe(r, "blur", function() {
          zr(
            /*blurHandler*/
            t[122]
          ) && t[122].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[3] & /*hasCustomFocus*/
      1073741824 && e !== (e = ht("input__input", Bi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[123]
        ),
        multiline: !0
      })) && g(r, "class", e), f[0] & /*autocapitalization*/
      4096 && g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[12]
      ), f[0] & /*description*/
      2048 && g(
        r,
        "aria-label",
        /*description*/
        t[11]
      ), f[0] & /*describedBy*/
      16384 && n !== (n = /*describedBy*/
      t[14] || void 0) && g(r, "aria-describedby", n), f[0] & /*enterKeyType*/
      8192 && o !== (o = /*enterKeyType*/
      t[13] === "default" ? void 0 : (
        /*enterKeyType*/
        t[13]
      )) && g(r, "enterkeyhint", o), f[0] & /*paddingStl*/
      65536 && i !== (i = _r(
        /*paddingStl*/
        t[16]
      )) && g(r, "style", i), f[0] & /*isEnabled*/
      32 && s !== (s = !/*isEnabled*/
      t[5]) && (r.disabled = s), f[0] & /*maxLength*/
      64 && a !== (a = /*maxLength*/
      t[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        t[6]
      )) && g(r, "maxlength", a), f[0] & /*placeholder*/
      524288 && g(
        r,
        "placeholder",
        /*placeholder*/
        t[19]
      ), f[0] & /*value*/
      8 && (r.value = /*value*/
      t[3]);
    },
    d(c) {
      c && G(r), t[101](null), l = !1, Jr(u);
    }
  };
}
function Lw(t) {
  let r;
  function e(i, s) {
    return (
      /*isMultiline*/
      i[8] ? zw : Nw
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Qt();
    },
    m(i, s) {
      o.m(i, s), J(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && G(r), o.d(i);
    }
  };
}
function Ow(t) {
  let r, e, n, o;
  const i = [Pw, Mw], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (sr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), lr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
const Bw = typeof document < "u" && "inputMode" in document.createElement("input"), mf = {
  email: "email",
  number: "number",
  phone: "tel",
  single_line_text: "text",
  multi_line_text: "text",
  uri: "url",
  password: "password"
};
function Rw(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, O, ne, de, T, X, le, C, D, M, W, Q, me, Ee, ve, he, Se, Z, et, Je, qe, be = j, Te = () => (be(), be = S(s, (Ze) => e(74, qe = Ze)), s), ue, ge = j, ce = () => (ge(), ge = S(a, (Ze) => e(75, ue = Ze)), a), re, ae = j, oe = () => (ae(), ae = S(Ee, (Ze) => e(108, re = Ze)), Ee), we, Re = j, Ge = () => (Re(), Re = S(Q, (Ze) => e(76, we = Ze)), Q), ee, Oe = j, Ne = () => (Oe(), Oe = S(le, (Ze) => e(77, ee = Ze)), le), nt, at = j, tt = () => (at(), at = S(W, (Ze) => e(78, nt = Ze)), W), yt, rt, Mt = j, ft = () => (Mt(), Mt = S(X, (Ze) => e(80, rt = Ze)), X), K, _e = j, st = () => (_e(), _e = S(T, (Ze) => e(81, K = Ze)), T), Pe, I = j, jt = () => (I(), I = S(ve, (Ze) => e(82, Pe = Ze)), ve), lt, Et = j, Dt = () => (Et(), Et = S(de, (Ze) => e(83, lt = Ze)), de), ot, q = j, Tt = () => (q(), q = S(ne, (Ze) => e(84, ot = Ze)), ne), Ft, Kt = j, Xt = () => (Kt(), Kt = S(M, (Ze) => e(85, Ft = Ze)), M), je, Ke = j, _t = () => (Ke(), Ke = S(D, (Ze) => e(86, je = Ze)), D), Fe, $e = j, Be = () => ($e(), $e = S(O, (Ze) => e(87, Fe = Ze)), O), Vt, ze = j, mt = () => (ze(), ze = S(H, (Ze) => e(88, Vt = Ze)), H), Ut, It = j, hr = () => (It(), It = S(N, (Ze) => e(89, Ut = Ze)), N), De, kt = j, ar = () => (kt(), kt = S(k, (Ze) => e(90, De = Ze)), k), rr, er = j, mr = () => (er(), er = S(w, (Ze) => e(91, rr = Ze)), w), vr, tr = j, nr = () => (tr(), tr = S(p, (Ze) => e(92, vr = Ze)), p), Rt, pt = j, xt = () => (pt(), pt = S(m, (Ze) => e(93, Rt = Ze)), m), ie, yr = j, kr = () => (yr(), yr = S(h, (Ze) => e(94, ie = Ze)), h), Ct, Tr = j, Br = () => (Tr(), Tr = S(_, (Ze) => e(95, Ct = Ze)), _), cr, ut = j, vt = () => (ut(), ut = S(f, (Ze) => e(96, cr = Ze)), f), Gt, Zt = j, ur = () => (Zt(), Zt = S(c, (Ze) => e(97, Gt = Ze)), c), dt, fe = j, wt = () => (fe(), fe = S(u, (Ze) => e(98, dt = Ze)), u), or, Yt = j, jr = () => (Yt(), Yt = S(l, (Ze) => e(99, or = Ze)), l), v, se = j, d = () => (se(), se = S(me, (Ze) => e(100, v = Ze)), me), B, Ie = j, He = () => (Ie(), Ie = S(C, (Ze) => e(46, B = Ze)), C);
  t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => at()), t.$$.on_destroy.push(() => Mt()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => Et()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => Kt()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => $e()), t.$$.on_destroy.push(() => ze()), t.$$.on_destroy.push(() => It()), t.$$.on_destroy.push(() => kt()), t.$$.on_destroy.push(() => er()), t.$$.on_destroy.push(() => tr()), t.$$.on_destroy.push(() => pt()), t.$$.on_destroy.push(() => yr()), t.$$.on_destroy.push(() => Tr()), t.$$.on_destroy.push(() => ut()), t.$$.on_destroy.push(() => Zt()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => Yt()), t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => Ie());
  let { componentContext: ke } = r, { layoutParams: R = void 0 } = r;
  const Jt = Dr(Kr), Ht = Dr(To), Ye = Jt.direction;
  yn(t, Ye, (Ze) => e(79, yt = Ze));
  let ct, Wt, Fr = !1, br = null, Mr = "", jn = !1, Ae = "", Qr = 12, Yr, pn = "", Cn = "", y, E = "", A = "#000", te = "", z = "start", xe = "center", Ve = "multi_line_text", $t = "text", At, Xe = "", qt = null, St = "", Cr = "", Wr = "", ln = !0, Ir = 1 / 0, gn = "off", hn = "default", Sn = "", so = !1, Pn = !0, zt = 0, b = 0;
  function V() {
    e(54, Ae = ""), e(55, Qr = 12), e(56, Yr = void 0), e(57, pn = ""), e(58, Cn = ""), e(59, y = void 0), e(61, A = "#000"), e(62, te = ""), e(63, z = "left"), e(64, xe = "center"), e(65, Ve = "multi_line_text"), e(9, $t = "text"), e(10, At = void 0), e(5, ln = !0), e(6, Ir = 1 / 0), e(12, gn = "off"), e(13, hn = "default"), e(14, Sn = ""), zt = 0, b = 0;
  }
  function $(Ze) {
    (Ze == null ? void 0 : Ze.type) === "fixed_length" ? e(53, br = vw(Ze, ke.logError, br)) : (Ze == null ? void 0 : Ze.type) === "currency" ? e(53, br = Cw(Ze, ke.logError, br)) : (Ze == null ? void 0 : Ze.type) === "phone" && e(53, br = Tw(ke.logError, br)), br && to();
  }
  function P(Ze) {
    if (!Array.isArray(re))
      return !0;
    for (const wr of re)
      if (wr) {
        if (wr.type === "regex")
          try {
            if (!new RegExp("^" + (wr.pattern || "") + "$").test(Ze))
              return !1;
          } catch (rn) {
            return ke.logError(Y(new Error("Failed to create a regex"), {
              additional: { originalError: String(rn) }
            })), !0;
          }
        else if (wr.type === "expression" && !wr.condition)
          return !1;
      }
    return !0;
  }
  function Ce(Ze) {
    const wr = Ze.target;
    let rn = wr.value || "";
    rn === `
` && (rn = ""), rn.length > Ir && (rn = Mr, wr instanceof HTMLInputElement && (wr.value = rn)), Mr !== rn && (P(rn) ? (e(3, Mr = rn), s.setValue(rn), br && mo(), ro()) : (e(3, Mr = rn), wr instanceof HTMLInputElement && (wr.value = rn), In().then(() => {
      Rr(zt, b);
    })));
  }
  function ye(Ze) {
    if (zt = qr() || 0, b = Pr() || 0, Ze.ctrlKey || Ze.metaKey || Ze.altKey || Ze.shiftKey)
      return;
    const wr = ke.json.enter_key_actions;
    Ze.key === "Enter" && Array.isArray(wr) && wr.length && (Ze.preventDefault(), ke.execAnyActions(wr));
  }
  function Ot() {
    Fr = !1, setTimeout(
      () => {
        Fr = !0;
      },
      250
    );
  }
  function Bt() {
    Fr || Wt.select();
  }
  function qr() {
    const Ze = Wt;
    return Ze.selectionStart === null ? void 0 : Ze.selectionStart;
  }
  function Pr() {
    const Ze = Wt;
    return Ze.selectionEnd === null ? void 0 : Ze.selectionEnd;
  }
  function Rr(Ze, wr) {
    const rn = Wt;
    rn.selectionStart = Ze, rn.selectionEnd = wr;
  }
  async function mo() {
    if (!Wt || !br)
      return;
    const Ze = qr() || 0, wr = Pr() || 0;
    br.applyChangeFrom(Mr, wr === Ze ? wr : 0), a.set(br.rawValue), Cl(s, qe = e(3, Mr = br.value), qe);
    const rn = br.cursorPosition;
    await In(), document.activeElement === Wt && Rr(rn, rn);
  }
  async function to() {
    if (!Wt || !br)
      return;
    br.overrideRawValue(ue), a.set(br.rawValue), Cl(s, qe = e(3, Mr = br.value), qe);
    const Ze = br.cursorPosition;
    await In(), document.activeElement === Wt && Rr(Ze, Ze);
  }
  function ro() {
    const Ze = Pn;
    Pn = !1;
    const wr = ke.json.validators;
    if (!Array.isArray(wr) || !wr.length)
      return;
    const Lo = ke.getJsonWithVars(wr).filter((wn) => (wn.type === "regex" || wn.type === "expression") && wn.label_id && wn.variable), Oo = [];
    Lo.forEach((wn) => {
      const Yo = ke.getVariable(wn.variable);
      if (!Yo)
        return;
      if (Yo.getType() !== "boolean") {
        Ze && ke.logError(Y(new Error("Incorrect variable type for the validator"), {
          additional: { variable: wn.variable }
        }));
        return;
      }
      let En = !1;
      if (Mr === "" && (wn.allow_empty === !0 || wn.allow_empty === 1))
        En = !0;
      else if (wn.type === "regex") {
        if (!wn.pattern || typeof wn.pattern != "string")
          return;
        try {
          En = new RegExp("^" + wn.pattern + "$").test(Mr);
        } catch {
          Ze && ke.logError(Y(new Error("Failed to create a regular expression using the validator pattern"), {
            additional: { pattern: wn.pattern }
          }));
          return;
        }
      } else if (wn.type === "expression")
        En = wn.condition === !0 || wn.condition === 1;
      else
        return;
      if (Yo.setValue(En), !En) {
        const Co = Jt.getComponentId(wn.label_id);
        Co && Oo.push(Co);
      }
    }), e(14, Sn = Oo.join(" "));
  }
  Zn(() => {
    e(70, so = !0), Wt && br && ue && (br.overrideRawValue(ue), Cl(s, qe = e(3, Mr = br.value), qe));
  }), sn(() => {
    e(70, so = !1), ct && (Jt.unregisterFocusable(ct), e(52, ct = void 0));
  });
  function Qn(Ze) {
    Vr[Ze ? "unshift" : "push"](() => {
      Wt = Ze, e(2, Wt);
    });
  }
  function qi(Ze) {
    Vr[Ze ? "unshift" : "push"](() => {
      Wt = Ze, e(2, Wt);
    });
  }
  return t.$$set = (Ze) => {
    "componentContext" in Ze && e(0, ke = Ze.componentContext), "layoutParams" in Ze && e(1, R = Ze.layoutParams);
  }, t.$$.update = () => {
    var Ze;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(73, n = ke.origJson), t.$$.dirty[2] & /*origJson*/
    2048 && n && V(), t.$$.dirty[0] & /*componentContext*/
    1 && e(71, o = ke.json.text_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(72, i = (Ze = ke.json.mask) == null ? void 0 : Ze.raw_text_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*variable*/
    512 && Te(e(7, s = o && (ke.getVariable(o, "string") || Jt.awaitGlobalVariable(o, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*rawVariable*/
    1024 && ce(e(15, a = i && (ke.getVariable(i, "string") || Jt.awaitGlobalVariable(i, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && jr(e(45, l = ke.getDerivedFromVars(ke.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && wt(e(44, u = ke.getDerivedFromVars(ke.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ur(e(43, c = ke.getDerivedFromVars(ke.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && vt(e(42, f = ke.getDerivedFromVars(ke.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && Br(e(41, _ = ke.getDerivedFromVars(ke.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && kr(e(40, h = ke.getDerivedFromVars(ke.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && xt(e(39, m = ke.getDerivedFromVars(ke.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && nr(e(38, p = ke.getDerivedFromVars(ke.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && mr(e(37, w = ke.getDerivedFromVars(ke.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && ar(e(36, k = ke.getDerivedFromVars(ke.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && hr(e(35, N = ke.getDerivedFromVars(ke.json.highlight_color))), t.$$.dirty[0] & /*componentContext*/
    1 && mt(e(34, H = ke.getDerivedFromVars(ke.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Be(e(33, O = ke.getDerivedFromVars(ke.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Tt(e(32, ne = ke.getDerivedFromVars(ke.json.keyboard_type))), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(31, de = ke.getDerivedFromVars(ke.json.mask))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(30, T = ke.getDerivedFromVars(ke.json.max_visible_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(29, X = ke.getDerivedFromVars(ke.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Ne(e(28, le = ke.getDerivedFromVars(ke.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && He(e(27, C = ke.getDerivedFromVars(ke.json.select_all_on_focus))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(26, D = ke.getDerivedFromVars(ke.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Xt(e(25, M = ke.getDerivedFromVars(ke.json.max_length))), t.$$.dirty[0] & /*componentContext*/
    1 && tt(e(24, W = ke.getDerivedFromVars(ke.json.autocapitalization))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(23, Q = ke.getDerivedFromVars(ke.json.enter_key_type))), t.$$.dirty[0] & /*componentContext*/
    1 && d(e(22, me = ke.getDerivedFromVars(ke.json.validators))), t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(21, Ee = ke.getDerivedFromVars(ke.json.filters))), t.$$.dirty[0] & /*componentContext*/
    1 && jt(e(20, ve = ke.getDerivedFromVars(ke.json.max_input_height))), t.$$.dirty[0] & /*componentContext, hasError*/
    17 | t.$$.dirty[2] & /*variable, $jsonAccessibility*/
    33280) {
      let wr = !1;
      o ? (Ht.hasAction() || (ee == null ? void 0 : ee.mode) === "exclude") && (wr = !0, ke.logError(Y(new Error('Cannot show "input" inside component with an action or inside accessibility mode=exclude')))) : (e(4, jn = !0), ke.logError(Y(new Error('Missing "text_variable" in "input"')))), jn !== wr && e(4, jn = wr);
    }
    if (t.$$.dirty[2] & /*$jsonMask*/
    2097152 && $(lt), t.$$.dirty[0] & /*maxLength*/
    64 | t.$$.dirty[2] & /*$jsonMaxLength*/
    8388608 && e(6, Ir = Un(Ft, Ir)), t.$$.dirty[0] & /*value, maxLength, valueVariable*/
    200 | t.$$.dirty[1] & /*inputMask*/
    4194304 | t.$$.dirty[2] & /*$valueVariable*/
    4096 && !br && Mr !== qe) {
      let wr = qe;
      wr.length > Ir && (wr = wr.slice(0, Ir), s.setValue(wr)), e(3, Mr = wr), ro();
    }
    if (t.$$.dirty[1] & /*inputMask*/
    4194304 | t.$$.dirty[2] & /*$rawValueVariable*/
    8192 && br && br.rawValue !== ue && (to(), ro()), t.$$.dirty[2] & /*mounted*/
    256 | t.$$.dirty[3] & /*$jsonValidators*/
    128 && v && so && ro(), t.$$.dirty[3] & /*$jsonHintText*/
    64 && e(19, he = or), t.$$.dirty[1] & /*hintColor*/
    8388608 | t.$$.dirty[3] & /*$jsonHintColor*/
    32 && e(54, Ae = pr(dt, 1, Ae)), t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[3] & /*$jsonFontSize*/
    16 && e(55, Qr = Un(Gt, Qr)), t.$$.dirty[1] & /*fontWeight*/
    33554432 | t.$$.dirty[3] & /*$jsonFontWeight, $jsonFontWeightValue, $jsonFontFamily*/
    14 && (e(56, Yr = yi(cr, Ct, Yr)), ie && typeof ie == "string" ? e(57, pn = Jt.typefaceProvider(ie, { fontWeight: Yr || 400 })) : e(57, pn = "")), t.$$.dirty[1] & /*fontVariationSettings*/
    134217728 | t.$$.dirty[3] & /*$jsonFontVariationSettings*/
    1) {
      const wr = Oi(Rt);
      wr !== Cn && e(58, Cn = wr);
    }
    if (t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[2] & /*$jsonLineHeight*/
    1073741824) {
      const wr = vr;
      zn(wr) && e(59, y = wr / Qr);
    }
    t.$$.dirty[2] & /*$jsonLetterSpacing*/
    536870912 && ml(rr) && e(60, E = pe(rr)), t.$$.dirty[1] & /*textColor*/
    1073741824 | t.$$.dirty[2] & /*$jsonTextColor*/
    268435456 && e(61, A = pr(De, 1, A)), t.$$.dirty[2] & /*$jsonHighlightColor, highlightColor*/
    134217729 && e(62, te = pr(Ut, 1, te)), t.$$.dirty[2] & /*$jsonAlignmentHorizontal, $direction, alignmentHorizontal*/
    67239938 && e(63, z = yl(Vt, yt, z)), t.$$.dirty[2] & /*$jsonAlignmentVertical, alignmentVertical*/
    33554436 && e(64, xe = wl(Fe, xe)), t.$$.dirty[0] & /*isEnabled*/
    32 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    16777216 && e(5, ln = nn(je, ln)), t.$$.dirty[2] & /*$jsonKeyboardType, $jsonMask, keyboardType*/
    6291464 && (ot && ot in mf && (e(9, $t = mf[ot]), e(65, Ve = ot)), (lt == null ? void 0 : lt.type) === "currency" ? (e(9, $t = Bw ? "text" : "tel"), e(10, At = "decimal")) : Ve === "number" ? e(10, At = "decimal") : e(10, At = void 0)), t.$$.dirty[2] & /*keyboardType*/
    8 && e(8, Se = Ve === "multi_line_text"), t.$$.dirty[1] & /*lineHeight, fontSize*/
    285212672 | t.$$.dirty[2] & /*$jsonMaxInputHeight, $jsonVisibleMaxLines, $jsonPaddings, selfPadding, $direction*/
    1966112 && (zn(Pe) ? e(66, Xe = an(Pe)) : zn(K) ? e(66, Xe = `calc(${K * (y || 1.25) * (Qr / 10) + "em"} + ${an(tn(rt == null ? void 0 : rt.top, 0) + tn(rt == null ? void 0 : rt.bottom, 0))})`) : e(66, Xe = ""), e(67, qt = bi(rt || void 0, qt)), e(68, St = qt ? go(
      {
        top: (Number(qt.top) || 0) / Qr * 10,
        right: (Number(yt === "ltr" ? qt.end : qt.start) || Number(qt.right) || 0) / Qr * 10,
        bottom: (Number(qt.bottom) || 0) / Qr * 10,
        left: (Number(yt === "ltr" ? qt.start : qt.end) || Number(qt.left) || 0) / Qr * 10
      },
      yt
    ) : ""), e(69, Cr = qt ? go(
      {
        top: (Number(qt.top) || 0) / Qr * 10,
        bottom: (Number(qt.bottom) || 0) / Qr * 10
      },
      yt
    ) : "")), t.$$.dirty[2] & /*$jsonAutocapitalization*/
    65536 && (nt === "all_characters" ? e(12, gn = "characters") : nt === "sentences" ? e(12, gn = "sentences") : nt === "words" ? e(12, gn = "words") : (nt === "none" || nt === "auto") && e(12, gn = "off")), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonAccessibility*/
    32768 && (ee != null && ee.description ? e(11, Wr = ti(ee)) : ke.logError(Y(new Error('Missing accessibility "description" for input'), { level: "warn" }))), t.$$.dirty[2] & /*$jsonEnterKeyType*/
    16384 && (we === "default" || we === "done" || we === "go" || we === "search" || we === "send") && e(13, hn = we), t.$$.dirty[0] & /*isMultiline*/
    256 | t.$$.dirty[2] & /*highlightColor, alignmentHorizontal, alignmentVertical*/
    7 && e(18, Z = {
      "highlight-color": !!te,
      multiline: Se,
      "alignment-horizontal": z,
      "alignment-vertical": xe
    }), t.$$.dirty[1] & /*hintColor, lineHeight, fontWeight, fontFamily, fontVariationSettings, letterSpacing, textColor*/
    2122317824 | t.$$.dirty[2] & /*highlightColor, maxHeight*/
    17 && e(17, et = {
      "--divkit-input-hint-color": Ae,
      "--divkit-input-highlight-color": te,
      "--divkit-input-line-height": y,
      "font-weight": Yr,
      "font-family": pn,
      "font-variation-settings": Cn,
      "letter-spacing": E,
      color: A,
      "max-height": Xe
    }), t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[2] & /*padding*/
    64 && e(16, Je = { "font-size": pe(Qr), padding: St }), t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[2] & /*verticalPadding*/
    128, t.$$.dirty[0] & /*input, componentContext, value*/
    13 | t.$$.dirty[1] & /*prevId*/
    2097152 && Wt && ke.json && (ct && (Jt.unregisterFocusable(ct), e(52, ct = void 0)), ke.id && !ke.fakeElement && (e(52, ct = ke.id), Jt.registerFocusable(ct, {
      focus() {
        Wt && (Wt.focus(), Rr(Mr.length, Mr.length));
      }
    })));
  }, [
    ke,
    R,
    Wt,
    Mr,
    jn,
    ln,
    Ir,
    s,
    Se,
    $t,
    At,
    Wr,
    gn,
    hn,
    Sn,
    a,
    Je,
    et,
    Z,
    he,
    ve,
    Ee,
    me,
    Q,
    W,
    M,
    D,
    C,
    le,
    X,
    T,
    de,
    ne,
    O,
    H,
    N,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    B,
    Ye,
    Ce,
    ye,
    Ot,
    Bt,
    ct,
    br,
    Ae,
    Qr,
    Yr,
    pn,
    Cn,
    y,
    E,
    A,
    te,
    z,
    xe,
    Ve,
    Xe,
    qt,
    St,
    Cr,
    so,
    o,
    i,
    n,
    qe,
    ue,
    we,
    ee,
    nt,
    yt,
    rt,
    K,
    Pe,
    lt,
    ot,
    Ft,
    je,
    Fe,
    Vt,
    Ut,
    De,
    rr,
    vr,
    Rt,
    ie,
    Ct,
    cr,
    Gt,
    dt,
    or,
    v,
    Qn,
    qi
  ];
}
class Hw extends Or {
  constructor(r) {
    super(), Lr(this, r, Rw, Ow, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1, -1]);
  }
}
const Ww = "appkit-select", Uw = "appkit-select_hint", Gw = "appkit-select__select", Jw = "appkit-select__option", Pi = {
  select: Ww,
  "select__select-text": "appkit-select__select-text",
  select_hint: Uw,
  select__select: Gw,
  "select__select_has-custom-focused": "appkit-select__select_has-custom-focused",
  "has-custom-focused": "appkit-has-custom-focused",
  select__option: Jw
};
function bf(t, r, e) {
  const n = t.slice();
  return n[62] = r[e], n;
}
function qw(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function Kw(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht(
        "select",
        Pi,
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
          Yw,
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = ht(
        "select",
        Pi,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function yf(t) {
  let r, e = (
    /*item*/
    (t[62].text || /*item*/
    t[62].value) + ""
  ), n, o;
  return {
    c() {
      r = Me("option"), n = Gn(e), g(r, "class", Pi.select__option), r.__value = o = /*item*/
      t[62].value, du(r, r.__value);
    },
    m(i, s) {
      J(i, r, s), bt(r, n);
    },
    p(i, s) {
      s[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      (i[62].text || /*item*/
      i[62].value) + "") && eo(n, e), s[0] & /*filteredItems*/
      32 && o !== (o = /*item*/
      i[62].value) && (r.__value = o, du(r, r.__value));
    },
    d(i) {
      i && G(r);
    }
  };
}
function Yw(t) {
  let r, e = (
    /*selectText*/
    (t[4] || /*$jsonHintText*/
    t[25] || "​") + ""
  ), n, o, i, s, a, l, u, c, f = ir(
    /*filteredItems*/
    t[5]
  ), _ = [];
  for (let h = 0; h < f.length; h += 1)
    _[h] = yf(bf(t, f, h));
  return {
    c() {
      r = Me("span"), n = Gn(e), i = gr(), s = Me("select");
      for (let h = 0; h < _.length; h += 1)
        _[h].c();
      g(r, "class", Pi["select__select-text"]), g(r, "style", o = _r(
        /*innerStl*/
        t[9]
      )), g(r, "aria-hidden", "true"), g(s, "class", a = ht("select__select", Pi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[59]
        )
      })), g(
        s,
        "aria-label",
        /*description*/
        t[7]
      ), g(s, "style", l = _r(
        /*selectStl*/
        t[8]
      )), /*$valueVariable*/
      t[6] === void 0 && po(() => (
        /*select_1_change_handler*/
        t[55].call(s)
      ));
    },
    m(h, m) {
      J(h, r, m), bt(r, n), J(h, i, m), J(h, s, m);
      for (let p = 0; p < _.length; p += 1)
        _[p] && _[p].m(s, null);
      t[54](s), _u(
        s,
        /*$valueVariable*/
        t[6],
        !0
      ), u || (c = [
        Qe(
          s,
          "change",
          /*select_1_change_handler*/
          t[55]
        ),
        Qe(s, "focus", function() {
          zr(
            /*focusHandler*/
            t[60]
          ) && t[60].apply(this, arguments);
        }),
        Qe(s, "blur", function() {
          zr(
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
      t[25] || "​") + "") && eo(n, e), m[0] & /*innerStl*/
      512 && o !== (o = _r(
        /*innerStl*/
        t[9]
      )) && g(r, "style", o), m[0] & /*filteredItems*/
      32) {
        f = ir(
          /*filteredItems*/
          t[5]
        );
        let p;
        for (p = 0; p < f.length; p += 1) {
          const w = bf(t, f, p);
          _[p] ? _[p].p(w, m) : (_[p] = yf(w), _[p].c(), _[p].m(s, null));
        }
        for (; p < _.length; p += 1)
          _[p].d(1);
        _.length = f.length;
      }
      m[1] & /*hasCustomFocus*/
      268435456 && a !== (a = ht("select__select", Pi, {
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
      256 && l !== (l = _r(
        /*selectStl*/
        t[8]
      )) && g(s, "style", l), m[0] & /*$valueVariable, filteredItems*/
      96 && _u(
        s,
        /*$valueVariable*/
        t[6]
      );
    },
    d(h) {
      h && (G(r), G(i), G(s)), on(_, h), t[54](null), u = !1, Jr(c);
    }
  };
}
function Xw(t) {
  let r, e, n, o;
  const i = [Kw, qw], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (sr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), lr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Zw(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, O, ne, de, T, X, le = j, C = () => (le(), le = S(H, (De) => e(42, X = De)), H), D, M = j, W = () => (M(), M = S(N, (De) => e(43, D = De)), N), Q, me = j, Ee = () => (me(), me = S(k, (De) => e(44, Q = De)), k), ve, he = j, Se = () => (he(), he = S(w, (De) => e(45, ve = De)), w), Z, et = j, Je = () => (et(), et = S(p, (De) => e(46, Z = De)), p), qe, be = j, Te = () => (be(), be = S(m, (De) => e(47, qe = De)), m), ue, ge = j, ce = () => (ge(), ge = S(h, (De) => e(48, ue = De)), h), re, ae = j, oe = () => (ae(), ae = S(_, (De) => e(49, re = De)), _), we, Re = j, Ge = () => (Re(), Re = S(f, (De) => e(50, we = De)), f), ee, Oe = j, Ne = () => (Oe(), Oe = S(c, (De) => e(51, ee = De)), c), nt, at, tt = j, yt = () => (tt(), tt = S(l, (De) => e(53, at = De)), l), rt, Mt = j, ft = () => (Mt(), Mt = S(a, (De) => e(6, rt = De)), a), K, _e = j, st = () => (_e(), _e = S(u, (De) => e(25, K = De)), u);
  t.$$.on_destroy.push(() => le()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => et()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => Mt()), t.$$.on_destroy.push(() => _e());
  let { componentContext: Pe } = r, { layoutParams: I = void 0 } = r;
  const jt = Dr(Kr), lt = Dr(To), Et = jt.direction;
  yn(t, Et, (De) => e(52, nt = De));
  let Dt, ot, q = !1, Tt = "", Ft = null, Kt = "", Xt = "rgba(0,0,0,.45)", je = 12, Ke, _t = "", Fe = "", $e, Be = "", Vt = "#000", ze = "", mt;
  function Ut() {
    e(28, Ft = null), e(30, Xt = "rgba(0,0,0,.45)"), e(31, je = 12), e(32, Ke = void 0), e(33, _t = ""), e(34, Fe = ""), e(35, $e = void 0), e(36, Be = ""), e(37, Vt = "#000"), e(7, ze = "");
  }
  sn(() => {
    Dt && (jt.unregisterFocusable(Dt), e(27, Dt = void 0));
  });
  function It(De) {
    Vr[De ? "unshift" : "push"](() => {
      ot = De, e(2, ot);
    });
  }
  function hr() {
    rt = hh(this), a.set(rt), e(5, s), e(40, i), e(0, Pe);
  }
  return t.$$set = (De) => {
    "componentContext" in De && e(0, Pe = De.componentContext), "layoutParams" in De && e(1, I = De.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(41, n = Pe.origJson), t.$$.dirty[1] & /*origJson*/
    1024 && n && Ut(), t.$$.dirty[0] & /*componentContext*/
    1 && e(39, o = Pe.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(40, i = Pe.json.options), t.$$.dirty[1] & /*items*/
    512 && e(5, s = Array.isArray(i) && i.filter((De) => typeof De.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    256 && ft(e(24, a = o && (Pe.getVariable(o, "string") || jt.awaitGlobalVariable(o, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && yt(e(23, l = Pe.getDerivedFromVars(Pe.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(22, u = Pe.getDerivedFromVars(Pe.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && Ne(e(21, c = Pe.getDerivedFromVars(Pe.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(20, f = Pe.getDerivedFromVars(Pe.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(19, _ = Pe.getDerivedFromVars(Pe.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(18, h = Pe.getDerivedFromVars(Pe.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(17, m = Pe.getDerivedFromVars(Pe.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && Je(e(16, p = Pe.getDerivedFromVars(Pe.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && Se(e(15, w = Pe.getDerivedFromVars(Pe.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(14, k = Pe.getDerivedFromVars(Pe.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && W(e(13, N = Pe.getDerivedFromVars(Pe.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && C(e(12, H = Pe.getDerivedFromVars(Pe.json.accessibility))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || Pe.logError(Y(new Error('Empty selection "items" in "select"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    2304) {
      let De = !1;
      o ? (lt.hasAction() || (X == null ? void 0 : X.mode) === "exclude") && (De = !0, Pe.logError(Y(new Error('Cannot show "select" inside component with an action or inside accessibility mode=exclude')))) : (e(3, q = !0), Pe.logError(Y(new Error('Missing "value_variable" in "select"')))), q !== De && e(3, q = De);
    }
    if (t.$$.dirty[0] & /*filteredItems, $valueVariable, componentContext*/
    97 | t.$$.dirty[1] & /*prevWarnValue*/
    128) {
      const De = s.find((kt) => kt.value === rt);
      De ? e(4, Tt = (typeof De.text == "string" ? De.text : De.value) || "") : (e(4, Tt = ""), rt && mt !== rt && (e(38, mt = rt), Pe.logError(Y(new Error('Value from the variable was not found in the selection items for "select"')))));
    }
    if (t.$$.dirty[1] & /*$jsonFontSize, fontSize*/
    524289 && e(31, je = Un(we, je)), t.$$.dirty[0] & /*selfPadding*/
    268435456 | t.$$.dirty[1] & /*$jsonPaddings, fontSize, $direction*/
    6291457 && (e(28, Ft = bi(at || void 0, Ft)), e(29, Kt = Ft ? go(
      {
        top: (Number(Ft.top) || 0) / je * 10,
        right: (Number(nt === "ltr" ? Ft.end : Ft.start) || Number(Ft.right) || 0) / je * 10,
        bottom: (Number(Ft.bottom) || 0) / je * 10,
        left: (Number(nt === "ltr" ? Ft.start : Ft.end) || Number(Ft.left) || 0) / je * 10
      },
      nt
    ) : "")), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*$jsonHintColor*/
    1048576 && e(30, Xt = pr(ee, 1, Xt)), t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontWeightValue, fontWeight, $jsonFontFamily*/
    458754 && (e(32, Ke = yi(re, ue, Ke)), qe && typeof qe == "string" ? e(33, _t = jt.typefaceProvider(qe, { fontWeight: Ke || 400 })) : e(33, _t = "")), t.$$.dirty[1] & /*$jsonFontVariationSettings, fontVariationSettings*/
    32776) {
      const De = Oi(Z);
      De !== Fe && e(34, Fe = De);
    }
    if (t.$$.dirty[1] & /*$jsonLineHeight, fontSize*/
    16385) {
      const De = ve;
      zn(De) && e(35, $e = De / je);
    }
    t.$$.dirty[1] & /*$jsonLetterSpacing, fontSize*/
    8193 && ml(Q) && e(36, Be = pe(Q / je * 10)), t.$$.dirty[1] & /*$jsonTextColor, textColor*/
    4160 && e(37, Vt = pr(D, 1, Vt)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    2048 && (X != null && X.description ? e(7, ze = ti(X)) : Pe.logError(Y(new Error('Missing accessibility "description" for select'), { level: "warn" }))), t.$$.dirty[0] & /*selectText*/
    16 && e(11, O = { hint: !Tt }), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*fontWeight, fontFamily, fontVariationSettings, textColor*/
    78 && e(10, ne = {
      "--divkit-input-hint-color": Xt,
      "font-weight": Ke,
      "font-family": _t,
      "font-variation-settings": Fe,
      color: Vt
    }), t.$$.dirty[0] & /*padding*/
    536870912 | t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(9, de = {
      padding: Kt,
      "font-size": pe(je),
      "line-height": $e,
      "letter-spacing": Be
    }), t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(8, T = {
      "font-size": pe(je),
      "line-height": $e,
      "letter-spacing": Be
    }), t.$$.dirty[0] & /*componentContext, select, prevId*/
    134217733 && Pe.json && ot && (Dt && (jt.unregisterFocusable(Dt), e(27, Dt = void 0)), Pe.id && !Pe.fakeElement && (e(27, Dt = Pe.id), jt.registerFocusable(Dt, {
      focus() {
        ot && ot.focus();
      }
    })));
  }, [
    Pe,
    I,
    ot,
    q,
    Tt,
    s,
    rt,
    ze,
    T,
    de,
    ne,
    O,
    H,
    N,
    k,
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
    K,
    Et,
    Dt,
    Ft,
    Kt,
    Xt,
    je,
    Ke,
    _t,
    Fe,
    $e,
    Be,
    Vt,
    mt,
    o,
    i,
    n,
    X,
    D,
    Q,
    ve,
    Z,
    qe,
    ue,
    re,
    we,
    ee,
    nt,
    at,
    It,
    hr
  ];
}
class Qw extends Or {
  constructor(r) {
    super(), Lr(this, r, Zw, Xw, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const xw = "appkit-video__video", $w = "appkit-video__container", ek = "appkit-video_absolute", vi = {
  video__video: xw,
  video__container: $w,
  "video__aspect-wrapper": "appkit-video__aspect-wrapper",
  video_absolute: ek
};
function tk(t, r) {
  return Array.isArray(t) && t.length ? t.filter((e) => (e == null ? void 0 : e.type) === "video_source" && typeof e.url == "string" && typeof e.mime_type == "string").map((e) => {
    const n = {
      src: e.url
    };
    return e.mime_type && (n.type = e.mime_type), n;
  }) : r;
}
function rk(t) {
  return t === "fill" ? "cover" : t === "no_scale" ? "none" : "contain";
}
function wf(t, r, e) {
  const n = t.slice();
  return n[60] = r[e], n;
}
function kf(t, r, e) {
  const n = t.slice();
  return n[60] = r[e], n;
}
function nk(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function ok(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht(
        "video",
        vi,
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
      $$slots: { default: [ck] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = ht(
        "video",
        vi,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function ik(t) {
  let r, e, n, o, i, s = ir(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = jf(wf(t, s, l));
  return {
    c() {
      r = Me("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      g(r, "class", vi.video__video), g(r, "style", e = _r(
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
      J(l, r, u);
      for (let c = 0; c < a.length; c += 1)
        a[c] && a[c].m(r, null);
      t[52](r), o || (i = [
        Qe(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          t[26]
        ),
        Qe(
          r,
          "ended",
          /*onEnd*/
          t[27]
        ),
        Qe(
          r,
          "playing",
          /*onPlaying*/
          t[28]
        ),
        Qe(
          r,
          "pause",
          /*onPause*/
          t[29]
        ),
        Qe(
          r,
          "waiting",
          /*onWaiting*/
          t[30]
        ),
        Qe(
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
        s = ir(
          /*sources*/
          l[4]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = wf(l, s, c);
          a[c] ? a[c].p(f, u) : (a[c] = jf(f), a[c].c(), a[c].m(r, null));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = s.length;
      }
      u[0] & /*style*/
      16384 && e !== (e = _r(
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
      l && G(r), on(a, l), t[52](null), o = !1, Jr(i);
    }
  };
}
function sk(t) {
  let r;
  return {
    c() {
      r = Me("div"), g(r, "class", vi.video__container);
    },
    m(e, n) {
      J(e, r, n), r.innerHTML = /*providedVideoTemplate*/
      t[12], t[51](r);
    },
    p(e, n) {
      n[0] & /*providedVideoTemplate*/
      4096 && (r.innerHTML = /*providedVideoTemplate*/
      e[12]);
    },
    d(e) {
      e && G(r), t[51](null);
    }
  };
}
function lk(t) {
  let r, e = `${/*aspectPaddingBottom*/
  t[11]}%`;
  function n(s, a) {
    return (
      /*shouldUseVideoProvider*/
      s[13] ? uk : ak
    );
  }
  let o = n(t), i = o(t);
  return {
    c() {
      r = Me("div"), i.c(), g(r, "class", vi["video__aspect-wrapper"]), F(r, "padding-bottom", e);
    },
    m(s, a) {
      J(s, r, a), i.m(r, null);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, null))), a[0] & /*aspectPaddingBottom*/
      2048 && e !== (e = `${/*aspectPaddingBottom*/
      s[11]}%`) && F(r, "padding-bottom", e);
    },
    d(s) {
      s && G(r), i.d();
    }
  };
}
function vf(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Me("source"), Xn(r.src, e = /*source*/
      t[60].src) || g(r, "src", e), g(r, "type", n = /*source*/
      t[60].type);
    },
    m(s, a) {
      J(s, r, a), o || (i = Qe(
        r,
        "error",
        /*onError*/
        t[31]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*sources*/
      16 && !Xn(r.src, e = /*source*/
      s[60].src) && g(r, "src", e), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && g(r, "type", n);
    },
    d(s) {
      s && G(r), o = !1, i();
    }
  };
}
function jf(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = vf(t);
  return {
    c() {
      n.c(), e = Qt();
    },
    m(o, i) {
      n.m(o, i), J(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Sr(r, r = /*source*/
      o[60]) ? (n.d(1), n = vf(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && G(e), n.d(o);
    }
  };
}
function ak(t) {
  let r, e, n, o, i, s = ir(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = Ef(kf(t, s, l));
  return {
    c() {
      r = Me("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      g(r, "class", vi.video__video), g(r, "style", e = _r(
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
      J(l, r, u);
      for (let c = 0; c < a.length; c += 1)
        a[c] && a[c].m(r, null);
      t[50](r), o || (i = [
        Qe(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          t[26]
        ),
        Qe(
          r,
          "ended",
          /*onEnd*/
          t[27]
        ),
        Qe(
          r,
          "playing",
          /*onPlaying*/
          t[28]
        ),
        Qe(
          r,
          "pause",
          /*onPause*/
          t[29]
        ),
        Qe(
          r,
          "waiting",
          /*onWaiting*/
          t[30]
        ),
        Qe(
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
        s = ir(
          /*sources*/
          l[4]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = kf(l, s, c);
          a[c] ? a[c].p(f, u) : (a[c] = Ef(f), a[c].c(), a[c].m(r, null));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = s.length;
      }
      u[0] & /*style*/
      16384 && e !== (e = _r(
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
      l && G(r), on(a, l), t[50](null), o = !1, Jr(i);
    }
  };
}
function uk(t) {
  let r;
  return {
    c() {
      r = Me("div"), g(r, "class", vi.video__container);
    },
    m(e, n) {
      J(e, r, n), r.innerHTML = /*providedVideoTemplate*/
      t[12], t[49](r);
    },
    p(e, n) {
      n[0] & /*providedVideoTemplate*/
      4096 && (r.innerHTML = /*providedVideoTemplate*/
      e[12]);
    },
    d(e) {
      e && G(r), t[49](null);
    }
  };
}
function Cf(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Me("source"), Xn(r.src, e = /*source*/
      t[60].src) || g(r, "src", e), g(r, "type", n = /*source*/
      t[60].type);
    },
    m(s, a) {
      J(s, r, a), o || (i = Qe(
        r,
        "error",
        /*onError*/
        t[31]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*sources*/
      16 && !Xn(r.src, e = /*source*/
      s[60].src) && g(r, "src", e), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && g(r, "type", n);
    },
    d(s) {
      s && G(r), o = !1, i();
    }
  };
}
function Ef(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = Cf(t);
  return {
    c() {
      n.c(), e = Qt();
    },
    m(o, i) {
      n.m(o, i), J(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Sr(r, r = /*source*/
      o[60]) ? (n.d(1), n = Cf(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && G(e), n.d(o);
    }
  };
}
function ck(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[11] !== "0" ? lk : (
        /*shouldUseVideoProvider*/
        i[13] ? sk : ik
      )
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Qt();
    },
    m(i, s) {
      o.m(i, s), J(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && G(r), o.d(i);
    }
  };
}
function fk(t) {
  let r, e, n, o;
  const i = [ok, nk], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (sr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), lr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function dk(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N = j, H = () => (N(), N = S(a, (ze) => e(39, k = ze)), a), O, ne = j, de = () => (ne(), ne = S(m, (ze) => e(40, O = ze)), m), T, X = j, le = () => (X(), X = S(h, (ze) => e(41, T = ze)), h), C, D = j, M = () => (D(), D = S(_, (ze) => e(42, C = ze)), _), W, Q = j, me = () => (Q(), Q = S(f, (ze) => e(43, W = ze)), f), Ee, ve = j, he = () => (ve(), ve = S(c, (ze) => e(44, Ee = ze)), c), Se, Z = j, et = () => (Z(), Z = S(u, (ze) => e(45, Se = ze)), u), Je, qe = j, be = () => (qe(), qe = S(l, (ze) => e(46, Je = ze)), l), Te, ue = j, ge = () => (ue(), ue = S(s, (ze) => e(47, Te = ze)), s), ce, re = j, ae = () => (re(), re = S(i, (ze) => e(48, ce = ze)), i);
  t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => ne()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => qe()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => re());
  let { componentContext: oe } = r, { layoutParams: we = void 0 } = r;
  const Re = Dr(Kr), Ge = Re.videoPlayerProvider;
  let ee, Oe = !1, Ne = !1, nt, at, tt = [], yt = !1, rt = !1, Mt = !1, ft = !1, K, _e = "fit", st = "0", Pe = !1, I, jt = "", lt, Et = !!Ge;
  function Dt(ze) {
    var ar, rr;
    const mt = oe.getJsonWithVars({
      sources: ze.video_sources,
      repeatable: ze.repeatable,
      autostart: ze.autostart,
      preloadRequired: ze.preload_required,
      muted: ze.muted,
      preview: ze.preview,
      aspect: ze.aspect,
      scale: ze.scale,
      payload: ze.player_settings_payload
    }), Ut = nn(mt.repeatable, !1), It = nn(mt.autostart, !1), hr = nn(mt.preloadRequired, !1), De = nn(mt.muted, !1), kt = (ar = mt.aspect) != null && ar.ratio && zn(mt.aspect.ratio) ? mt.aspect.ratio : void 0;
    if ((rr = mt.sources) != null && rr.length)
      return {
        sources: mt.sources,
        repeatable: Ut,
        autostart: It,
        preloadRequired: hr,
        muted: De,
        preview: mt.preview,
        aspect: kt,
        scale: mt.scale,
        payload: mt.payload
      };
  }
  function ot(ze) {
    var mt;
    if (Ne) {
      Ne = !1;
      return;
    }
    lt ? (mt = lt.seek) == null || mt.call(lt, Number(ze)) : nt && e(3, nt.currentTime = Number(ze) / 1e3, nt);
  }
  function q() {
    lt ? lt.pause() : nt == null || nt.pause();
  }
  function Tt() {
    if (lt) {
      lt.play();
      return;
    }
    const ze = nt == null ? void 0 : nt.play();
    ze && ze.catch((mt) => {
      oe.logError(Y(new Error("Video playing error"), {
        level: "error",
        additional: { originalText: String(mt) }
      }));
    });
  }
  function Ft() {
    nt && (Ne = !0, o.setValue(Math.floor(nt.currentTime * 1e3)));
  }
  function Kt() {
    oe.execAnyActions(oe.json.end_actions);
  }
  function Xt() {
    oe.execAnyActions(oe.json.resume_actions);
  }
  function je() {
    oe.execAnyActions(oe.json.pause_actions);
  }
  function Ke() {
    oe.execAnyActions(oe.json.buffering_actions);
  }
  function _t() {
    oe.execAnyActions(oe.json.fatal_actions);
  }
  Zn(() => {
    if (Ge && at) {
      const ze = Dt(oe.json);
      if (ze) {
        const mt = Ge.instance(at, ze);
        mt ? e(36, lt = mt) : e(13, Et = !1);
      }
    }
  }), sn(() => {
    ee && (Re.unregisterInstance(ee), e(32, ee = void 0)), I && (I(), e(35, I = void 0)), lt && (lt.destroy(), e(36, lt = void 0));
  });
  function Fe(ze) {
    Vr[ze ? "unshift" : "push"](() => {
      at = ze, e(10, at);
    });
  }
  function $e(ze) {
    Vr[ze ? "unshift" : "push"](() => {
      nt = ze, e(3, nt);
    });
  }
  function Be(ze) {
    Vr[ze ? "unshift" : "push"](() => {
      at = ze, e(10, at);
    });
  }
  function Vt(ze) {
    Vr[ze ? "unshift" : "push"](() => {
      nt = ze, e(3, nt);
    });
  }
  return t.$$set = (ze) => {
    "componentContext" in ze && e(0, oe = ze.componentContext), "layoutParams" in ze && e(1, we = ze.layoutParams);
  }, t.$$.update = () => {
    var ze;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && oe.json && (e(5, yt = !1), e(6, rt = !1), e(7, Mt = !1), e(8, ft = !1), e(9, K = void 0), e(33, _e = "fit"), e(34, Pe = !1), e(13, Et = !!Ge)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*customVideoInstance, $jsonSource, $jsonRepeatable, $jsonAutostart, $jsonMuted, $jsonPreload, $jsonPreview, $jsonScale, $jsonAspect*/
    260384 && oe.json && lt && (ce || Te || k || Je || Se || Ee || W || C)) {
      const mt = Dt(oe.json);
      mt && ((ze = lt.update) == null || ze.call(lt, mt));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(38, n = oe.json.elapsed_time_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*elapsedVariableName*/
    128 && e(37, o = n && (oe.getVariable(n, "integer") || Re.awaitGlobalVariable(n, "integer", 0)) || io("temp", "integer", 0)), t.$$.dirty[1] & /*elapsedVariable, elapsedVariableUnsubscriber*/
    80 && o && (I && I(), e(35, I = o.subscribe(ot))), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(25, i = oe.getDerivedFromVars(oe.json.video_sources))), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(24, s = oe.getDerivedFromVars(oe.json.repeatable))), t.$$.dirty[0] & /*componentContext*/
    1 && H(e(23, a = oe.getDerivedFromVars(oe.json.autostart))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(22, l = oe.getDerivedFromVars(oe.json.muted))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(21, u = oe.getDerivedFromVars(oe.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(20, c = oe.getDerivedFromVars(oe.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(19, f = oe.getDerivedFromVars(oe.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(18, _ = oe.getDerivedFromVars(oe.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(17, h = oe.getDerivedFromVars(oe.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(16, m = oe.getDerivedFromVars(oe.json.height))), t.$$.dirty[0] & /*sources, componentContext*/
    17 | t.$$.dirty[1] & /*$jsonSource*/
    131072 && (e(4, tt = tk(ce, tt)), tt.length ? e(2, Oe = !1) : (e(2, Oe = !0), oe.logError(Y(new Error('Missing "video_sources" in "video"'))))), t.$$.dirty[0] & /*loop*/
    32 | t.$$.dirty[1] & /*$jsonRepeatable*/
    65536 && e(5, yt = nn(Te, yt)), t.$$.dirty[0] & /*autoplay*/
    64 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && e(6, rt = nn(k, rt)), t.$$.dirty[0] & /*muted*/
    128 | t.$$.dirty[1] & /*$jsonMuted*/
    32768 && e(7, Mt = nn(Je, Mt)), t.$$.dirty[0] & /*preload*/
    256 | t.$$.dirty[1] & /*$jsonPreload*/
    16384 && e(8, ft = nn(Se, ft)), t.$$.dirty[0] & /*poster*/
    512 | t.$$.dirty[1] & /*$jsonPreview*/
    8192 && e(9, K = typeof Ee == "string" ? Zd(Ee) : K), t.$$.dirty[1] & /*$jsonScale, scale*/
    4100 && e(33, _e = rk(W) || _e), t.$$.dirty[1] & /*$jsonAspect, $jsonWidth, $jsonHeight*/
    3584) {
      const mt = C == null ? void 0 : C.ratio;
      mt && zn(mt) ? (e(11, st = (100 / Number(mt)).toFixed(2)), e(34, Pe = !0)) : (e(11, st = "0"), e(34, Pe = (!T || T.type === "match_parent") && (O == null ? void 0 : O.type) === "match_parent"));
    }
    t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*prevId*/
    2 && oe.json && (ee && (Re.unregisterInstance(ee), e(32, ee = void 0)), oe.id && !Oe && !oe.fakeElement && (e(32, ee = oe.id), Re.registerInstance(ee, { pause: q, start: Tt }))), t.$$.dirty[0] & /*componentContext, videoElem*/
    9 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && oe.json && k && nt && Tt(), t.$$.dirty[1] & /*isAbsolute*/
    8 && e(15, p = { absolute: Pe }), t.$$.dirty[1] & /*scale*/
    4 && e(14, w = { "object-fit": _e });
  }, [
    oe,
    we,
    Oe,
    nt,
    tt,
    yt,
    rt,
    Mt,
    ft,
    K,
    at,
    st,
    jt,
    Et,
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
    Ft,
    Kt,
    Xt,
    je,
    Ke,
    _t,
    ee,
    _e,
    Pe,
    I,
    lt,
    o,
    n,
    k,
    O,
    T,
    C,
    W,
    Ee,
    Se,
    Je,
    Te,
    ce,
    Fe,
    $e,
    Be,
    Vt
  ];
}
class _k extends Or {
  constructor(r) {
    super(), Lr(this, r, dk, fk, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const pk = "appkit-switch__tumbler", gk = "appkit-switch__tumbler_checked", hk = "appkit-switch_disabled", mk = "appkit-switch__thumb", bk = "appkit-switch_direction_rtl", yk = "appkit-switch__input", fi = {
  switch: "appkit-switch",
  switch__tumbler: pk,
  switch__tumbler_checked: gk,
  switch_disabled: hk,
  switch__thumb: mk,
  switch_direction_rtl: bk,
  switch__input: yk
};
function Ni(t) {
  return t === !0 || t === 1;
}
function wk(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function kk(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht(
        "switch",
        fi,
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
          vk,
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = ht(
        "switch",
        fi,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function vk(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Me("div"), e = Me("div"), o = gr(), i = Me("input"), g(e, "class", fi.switch__thumb), g(r, "class", n = ht("switch__tumbler", fi, { checked: (
        /*value*/
        t[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = ht("switch__input", fi, {
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
      J(c, r, f), bt(r, e), J(c, o, f), J(c, i, f), t[25](i), l || (u = [
        Qe(
          i,
          "input",
          /*onInput*/
          t[14]
        ),
        Qe(i, "focus", function() {
          zr(
            /*focusHandler*/
            t[29]
          ) && t[29].apply(this, arguments);
        }),
        Qe(i, "blur", function() {
          zr(
            /*blurHandler*/
            t[30]
          ) && t[30].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[0] & /*value*/
      8 && n !== (n = ht("switch__tumbler", fi, { checked: (
        /*value*/
        t[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      1 && s !== (s = ht("switch__input", fi, {
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
      c && (G(r), G(o), G(i)), t[25](null), l = !1, Jr(u);
    }
  };
}
function jk(t) {
  let r, e, n, o;
  const i = [kk, wk], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (sr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), lr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Ck(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h = j, m = () => (h(), h = S(s, (be) => e(21, _ = be)), s), p, w = j, k = () => (w(), w = S(l, (be) => e(22, p = be)), l), N, H = j, O = () => (H(), H = S(a, (be) => e(23, N = be)), a), ne, de = j, T = () => (de(), de = S(i, (be) => e(24, ne = be)), i);
  t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => H()), t.$$.on_destroy.push(() => de());
  let { componentContext: X } = r, { layoutParams: le = void 0 } = r;
  const C = Dr(Kr), D = Dr(To), M = C.direction;
  yn(t, M, (be) => e(20, f = be));
  let W, Q, me = !1, Ee = !1, ve = "", he = !0, Se = "#129386", Z = "#1293864c";
  function et() {
    e(5, he = !0), e(16, Se = "#129386"), e(17, Z = "#1293864c");
  }
  function Je(be) {
    e(3, me = be.target.checked), i.setValue(me);
  }
  sn(() => {
    W && (C.unregisterFocusable(W), e(15, W = void 0));
  });
  function qe(be) {
    Vr[be ? "unshift" : "push"](() => {
      Q = be, e(2, Q);
    });
  }
  return t.$$set = (be) => {
    "componentContext" in be && e(0, X = be.componentContext), "layoutParams" in be && e(1, le = be.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(19, n = X.origJson), t.$$.dirty[0] & /*origJson*/
    524288 && n && et(), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, o = X.json.is_on_variable), t.$$.dirty[0] & /*variable, componentContext*/
    262145 && T(e(7, i = o && (X.getVariable(o, "boolean") || C.awaitGlobalVariable(o, "boolean", !1)) || io("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(12, s = X.getDerivedFromVars(X.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && O(e(11, a = X.getDerivedFromVars(X.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && k(e(10, l = X.getDerivedFromVars(X.json.on_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    2359313) {
      let be = !1;
      o ? (D.hasAction() || (_ == null ? void 0 : _.mode) === "exclude") && (be = !0, X.logError(Y(new Error('Cannot show "switch" inside component with an action or inside accessibility mode=exclude')))) : (be = !0, X.logError(Y(new Error('Missing "is_on_variable" in "switch"')))), Ee !== be && e(4, Ee = be);
    }
    if (t.$$.dirty[0] & /*value, $valueVariable*/
    16777224 && Ni(me) !== Ni(ne) && e(3, me = Ni(ne)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    8388640 && e(5, he = nn(N, he)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    4259840 && (e(16, Se = pr(p, 1, Se)), typeof p == "string")) {
      const be = fo(p);
      be && (be.a *= 0.3, e(17, Z = ca(be)));
    }
    t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    2097153 && (_ != null && _.description ? e(6, ve = ti(_)) : X.logError(Y(new Error('Missing accessibility "description" for switch'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled, $direction*/
    1048608 && e(9, u = {
      disabled: !he,
      direction: f
    }), t.$$.dirty[0] & /*onColor, onSubColor*/
    196608 && e(8, c = {
      "--divkit-switch-on-color": Se,
      "--divkit-switch-on-sub-color": Z
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    32773 && Q && X.json && (W && (C.unregisterFocusable(W), e(15, W = void 0)), X.id && !X.fakeElement && (e(15, W = X.id), C.registerFocusable(W, {
      focus() {
        Q && Q.focus();
      }
    })));
  }, [
    X,
    le,
    Q,
    me,
    Ee,
    he,
    ve,
    i,
    c,
    u,
    l,
    a,
    s,
    M,
    Je,
    W,
    Se,
    Z,
    o,
    n,
    f,
    _,
    p,
    N,
    ne,
    qe
  ];
}
class Ek extends Or {
  constructor(r) {
    super(), Lr(this, r, Ck, jk, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Ak = "appkit-checkbox", Sk = "appkit-checkbox__box", Vk = "appkit-checkbox__box_checked", Fk = "appkit-checkbox__checkmark", Ik = "appkit-checkbox_disabled", Dk = "appkit-checkbox__input", di = {
  checkbox: Ak,
  checkbox__box: Sk,
  checkbox__box_checked: Vk,
  checkbox__checkmark: Fk,
  checkbox_disabled: Ik,
  checkbox__input: Dk
};
function Tk(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function Mk(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht(
        "checkbox",
        di,
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
          Pk,
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = ht(
        "checkbox",
        di,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function Pk(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Me("div"), e = Me("div"), o = gr(), i = Me("input"), g(e, "class", di.checkbox__checkmark), g(r, "class", n = ht("checkbox__box", di, { checked: (
        /*value*/
        t[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = ht("checkbox__input", di, {
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
      J(c, r, f), bt(r, e), J(c, o, f), J(c, i, f), t[28](i), l || (u = [
        Qe(
          i,
          "input",
          /*onInput*/
          t[15]
        ),
        Qe(i, "focus", function() {
          zr(
            /*focusHandler*/
            t[32]
          ) && t[32].apply(this, arguments);
        }),
        Qe(i, "blur", function() {
          zr(
            /*blurHandler*/
            t[33]
          ) && t[33].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[0] & /*value*/
      8 && n !== (n = ht("checkbox__box", di, { checked: (
        /*value*/
        t[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      8 && s !== (s = ht("checkbox__input", di, {
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
      c && (G(r), G(o), G(i)), t[28](null), l = !1, Jr(u);
    }
  };
}
function Nk(t) {
  let r, e, n, o;
  const i = [Mk, Tk], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (sr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), lr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function zk(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m = j, p = () => (m(), m = S(s, (oe) => e(22, h = oe)), s), w, k = j, N = () => (k(), k = S(c, (oe) => e(23, w = oe)), c), H, O = j, ne = () => (O(), O = S(u, (oe) => e(24, H = oe)), u), de, T = j, X = () => (T(), T = S(l, (oe) => e(25, de = oe)), l), le, C = j, D = () => (C(), C = S(a, (oe) => e(26, le = oe)), a), M, W = j, Q = () => (W(), W = S(i, (oe) => e(27, M = oe)), i);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => k()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => C()), t.$$.on_destroy.push(() => W());
  let { componentContext: me } = r, { layoutParams: Ee = void 0 } = r;
  const ve = Dr(Kr), he = Dr(To);
  let Se, Z, et = !1, Je = !1, qe = "", be = !0, Te = "#129386", ue = "rgba(0, 0, 0, .3)", ge = "#fff";
  function ce() {
    e(5, be = !0), e(17, Te = "#129386"), e(18, ue = "rgba(0, 0, 0, .3)"), e(19, ge = "#fff");
  }
  function re(oe) {
    e(3, et = oe.target.checked), i.setValue(et);
  }
  sn(() => {
    Se && (ve.unregisterFocusable(Se), e(16, Se = void 0));
  });
  function ae(oe) {
    Vr[oe ? "unshift" : "push"](() => {
      Z = oe, e(2, Z);
    });
  }
  return t.$$set = (oe) => {
    "componentContext" in oe && e(0, me = oe.componentContext), "layoutParams" in oe && e(1, Ee = oe.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(21, n = me.origJson), t.$$.dirty[0] & /*origJson*/
    2097152 && n && ce(), t.$$.dirty[0] & /*componentContext*/
    1 && e(20, o = me.json.is_checked_variable), t.$$.dirty[0] & /*variable, componentContext*/
    1048577 && Q(e(7, i = o && (me.getVariable(o, "boolean") || ve.awaitGlobalVariable(o, "boolean", !1)) || io("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && p(e(14, s = me.getDerivedFromVars(me.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && D(e(13, a = me.getDerivedFromVars(me.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && X(e(12, l = me.getDerivedFromVars(me.json.on_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(11, u = me.getDerivedFromVars(me.json.off_color))), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(10, c = me.getDerivedFromVars(me.json.check_mark_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    5242897) {
      let oe = !1;
      o ? (he.hasAction() || (h == null ? void 0 : h.mode) === "exclude") && (oe = !0, me.logError(Y(new Error('Cannot show "checkbox" inside component with an action or inside accessibility mode=exclude')))) : (oe = !0, me.logError(Y(new Error('Missing "is_checked_variable" in "checkbox"')))), Je !== oe && e(4, Je = oe);
    }
    t.$$.dirty[0] & /*value, $valueVariable*/
    134217736 && Ni(et) !== Ni(M) && e(3, et = Ni(M)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    67108896 && e(5, be = nn(le, be)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    33685504 && e(17, Te = pr(de, 1, Te)), t.$$.dirty[0] & /*$jsonOffColor, offColor*/
    17039360 && e(18, ue = pr(H, 1, ue)), t.$$.dirty[0] & /*$jsonCheckMarkColor, checkMarkColor*/
    8912896 && e(19, ge = pr(w, 1, ge)), t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    4194305 && (h != null && h.description ? e(6, qe = ti(h)) : me.logError(Y(new Error('Missing accessibility "description" for checkbox'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    32 && e(9, f = { disabled: !be }), t.$$.dirty[0] & /*onColor, offColor, checkMarkColor*/
    917504 && e(8, _ = {
      "--divkit-checkbox-on-color": Te,
      "--divkit-checkbox-off-color": ue,
      "--divkit-checkbox-check-mark-color": ge
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    65541 && Z && me.json && (Se && (ve.unregisterFocusable(Se), e(16, Se = void 0)), me.id && !me.fakeElement && (e(16, Se = me.id), ve.registerFocusable(Se, {
      focus() {
        Z && Z.focus();
      }
    })));
  }, [
    me,
    Ee,
    Z,
    et,
    Je,
    be,
    qe,
    i,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    re,
    Se,
    Te,
    ue,
    ge,
    o,
    n,
    h,
    w,
    H,
    de,
    le,
    M,
    ae
  ];
}
class Lk extends Or {
  constructor(r) {
    super(), Lr(this, r, zk, Nk, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Ok = "appkit-radio", Bk = "appkit-radio__group", Rk = "appkit-radio__group_vertical", Hk = "appkit-radio__group_horizontal", Wk = "appkit-radio__item", Uk = "appkit-radio_disabled", Gk = "appkit-radio__circle", Jk = "appkit-radio__circle_selected", qk = "appkit-radio__dot", Kk = "appkit-radio__label", Yk = "appkit-radio__input", ko = {
  radio: Ok,
  radio__group: Bk,
  radio__group_vertical: Rk,
  radio__group_horizontal: Hk,
  radio__item: Wk,
  radio_disabled: Uk,
  radio__circle: Gk,
  radio__circle_selected: Jk,
  radio__dot: qk,
  radio__label: Kk,
  radio__input: Yk
};
function Af(t, r, e) {
  const n = t.slice();
  return n[55] = r[e], n;
}
function Xk(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function Zk(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht(
        "radio",
        ko,
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
          $k,
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = ht(
        "radio",
        ko,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function Qk(t) {
  let r, e = (
    /*item*/
    t[55].value + ""
  ), n;
  return {
    c() {
      r = Me("span"), n = Gn(e), g(r, "class", ko.radio__label);
    },
    m(o, i) {
      J(o, r, i), bt(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      o[55].value + "") && eo(n, e);
    },
    d(o) {
      o && G(r);
    }
  };
}
function xk(t) {
  let r, e = (
    /*item*/
    t[55].text + ""
  ), n;
  return {
    c() {
      r = Me("span"), n = Gn(e), g(r, "class", ko.radio__label);
    },
    m(o, i) {
      J(o, r, i), bt(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      o[55].text + "") && eo(n, e);
    },
    d(o) {
      o && G(r);
    }
  };
}
function Sf(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h;
  function m(N, H) {
    return (
      /*item*/
      N[55].text ? xk : Qk
    );
  }
  let p = m(t), w = p(t);
  function k() {
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
      r = Me("label"), e = Me("div"), n = Me("div"), i = gr(), w.c(), s = gr(), a = Me("input"), f = gr(), g(n, "class", ko.radio__dot), g(e, "class", o = ht("radio__circle", ko, {
        selected: (
          /*$valueVariable*/
          t[23] === /*item*/
          t[55].value
        )
      })), g(a, "type", "radio"), g(a, "class", ko.radio__input), g(
        a,
        "name",
        /*groupName*/
        t[12]
      ), a.value = l = /*item*/
      t[55].value, a.checked = u = /*$valueVariable*/
      t[23] === /*item*/
      t[55].value, a.disabled = c = !/*isEnabled*/
      t[4], g(r, "class", ko.radio__item);
    },
    m(N, H) {
      J(N, r, H), bt(r, e), bt(e, n), bt(r, i), w.m(r, null), bt(r, s), bt(r, a), bt(r, f), _ || (h = [
        Qe(a, "change", k),
        Qe(a, "focus", function() {
          zr(
            /*focusHandler*/
            t[52]
          ) && t[52].apply(this, arguments);
        }),
        Qe(a, "blur", function() {
          zr(
            /*blurHandler*/
            t[53]
          ) && t[53].apply(this, arguments);
        })
      ], _ = !0);
    },
    p(N, H) {
      t = N, H[0] & /*$valueVariable, filteredItems*/
      8388640 && o !== (o = ht("radio__circle", ko, {
        selected: (
          /*$valueVariable*/
          t[23] === /*item*/
          t[55].value
        )
      })) && g(e, "class", o), p === (p = m(t)) && w ? w.p(t, H) : (w.d(1), w = p(t), w && (w.c(), w.m(r, s))), H[0] & /*groupName*/
      4096 && g(
        a,
        "name",
        /*groupName*/
        t[12]
      ), H[0] & /*filteredItems*/
      32 && l !== (l = /*item*/
      t[55].value) && (a.value = l), H[0] & /*$valueVariable, filteredItems*/
      8388640 && u !== (u = /*$valueVariable*/
      t[23] === /*item*/
      t[55].value) && (a.checked = u), H[0] & /*isEnabled*/
      16 && c !== (c = !/*isEnabled*/
      t[4]) && (a.disabled = c);
    },
    d(N) {
      N && G(r), w.d(), _ = !1, Jr(h);
    }
  };
}
function $k(t) {
  let r, e, n = ir(
    /*filteredItems*/
    t[5]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Sf(Af(t, n, i));
  return {
    c() {
      r = Me("div");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", e = ht(
        "radio__group",
        ko,
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
      J(i, r, s);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(r, null);
      t[48](r);
    },
    p(i, s) {
      if (s[0] & /*groupName, filteredItems, $valueVariable, isEnabled, onChange*/
      25169968 | s[1] & /*focusHandler, blurHandler*/
      6291456) {
        n = ir(
          /*filteredItems*/
          i[5]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Af(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Sf(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s[0] & /*groupMods*/
      1024 && e !== (e = ht(
        "radio__group",
        ko,
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
      i && G(r), on(o, i), t[48](null);
    }
  };
}
function ev(t) {
  let r, e, n, o;
  const i = [Zk, Xk], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (sr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), lr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function tv(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, O, ne, de, T, X = j, le = () => (X(), X = S(l, (Ke) => e(37, T = Ke)), l), C, D = j, M = () => (D(), D = S(k, (Ke) => e(38, C = Ke)), k), W, Q = j, me = () => (Q(), Q = S(w, (Ke) => e(39, W = Ke)), w), Ee, ve = j, he = () => (ve(), ve = S(p, (Ke) => e(40, Ee = Ke)), p), Se, Z = j, et = () => (Z(), Z = S(m, (Ke) => e(41, Se = Ke)), m), Je, qe = j, be = () => (qe(), qe = S(h, (Ke) => e(42, Je = Ke)), h), Te, ue = j, ge = () => (ue(), ue = S(_, (Ke) => e(43, Te = Ke)), _), ce, re = j, ae = () => (re(), re = S(f, (Ke) => e(44, ce = Ke)), f), oe, we = j, Re = () => (we(), we = S(c, (Ke) => e(45, oe = Ke)), c), Ge, ee = j, Oe = () => (ee(), ee = S(u, (Ke) => e(46, Ge = Ke)), u), Ne, nt = j, at = () => (nt(), nt = S(a, (Ke) => e(23, Ne = Ke)), a);
  t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => qe()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => nt());
  let { componentContext: tt } = r, { layoutParams: yt = void 0 } = r;
  const rt = Dr(Kr), Mt = Dr(To);
  let ft, K, _e = !1, st = "", Pe = !0, I = "#129386", jt = "rgba(0, 0, 0, 0.3)", lt = "", Et, Dt, ot = "", q = "vertical", Tt = 8;
  function Ft() {
    e(4, Pe = !0), e(26, I = "#129386"), e(27, jt = "rgba(0, 0, 0, 0.3)"), e(28, lt = ""), e(29, Et = void 0), e(30, Dt = void 0), e(31, ot = ""), e(32, q = "vertical"), e(33, Tt = 8);
  }
  function Kt(Ke) {
    a.setValue(Ke);
  }
  sn(() => {
    ft && (rt.unregisterFocusable(ft), e(25, ft = void 0));
  });
  const Xt = (Ke) => Kt(Ke.value);
  function je(Ke) {
    Vr[Ke ? "unshift" : "push"](() => {
      K = Ke, e(2, K);
    });
  }
  return t.$$set = (Ke) => {
    "componentContext" in Ke && e(0, tt = Ke.componentContext), "layoutParams" in Ke && e(1, yt = Ke.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(36, n = tt.origJson), t.$$.dirty[1] & /*origJson*/
    32 && n && Ft(), t.$$.dirty[0] & /*componentContext*/
    1 && e(34, o = tt.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(35, i = tt.json.options), t.$$.dirty[1] & /*items*/
    16 && e(5, s = Array.isArray(i) && i.filter((Ke) => typeof Ke.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8 && at(e(7, a = o && (tt.getVariable(o, "string") || rt.awaitGlobalVariable(o, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(22, l = tt.getDerivedFromVars(tt.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(21, u = tt.getDerivedFromVars(tt.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Re(e(20, c = tt.getDerivedFromVars(tt.json.selected_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(19, f = tt.getDerivedFromVars(tt.json.default_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(18, _ = tt.getDerivedFromVars(tt.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(17, h = tt.getDerivedFromVars(tt.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(16, m = tt.getDerivedFromVars(tt.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(15, p = tt.getDerivedFromVars(tt.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(14, w = tt.getDerivedFromVars(tt.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(13, k = tt.getDerivedFromVars(tt.json.item_spacing))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || tt.logError(Y(new Error('Empty "options" in "radio"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    72) {
      let Ke = !1;
      o ? (Mt.hasAction() || (T == null ? void 0 : T.mode) === "exclude") && (Ke = !0, tt.logError(Y(new Error('Cannot show "radio" inside component with an action or inside accessibility mode=exclude')))) : (Ke = !0, tt.logError(Y(new Error('Missing "value_variable" in "radio"')))), _e !== Ke && e(3, _e = Ke);
    }
    t.$$.dirty[0] & /*isEnabled*/
    16 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    32768 && e(4, Pe = nn(Ge, Pe)), t.$$.dirty[0] & /*selectedColor*/
    67108864 | t.$$.dirty[1] & /*$jsonSelectedColor*/
    16384 && e(26, I = pr(oe, 1, I)), t.$$.dirty[0] & /*defaultColor*/
    134217728 | t.$$.dirty[1] & /*$jsonDefaultColor*/
    8192 && e(27, jt = pr(ce, 1, jt)), t.$$.dirty[0] & /*textColor*/
    268435456 | t.$$.dirty[1] & /*$jsonTextColor*/
    4096 && e(28, lt = pr(Te, 1, lt)), t.$$.dirty[0] & /*fontSize*/
    536870912 | t.$$.dirty[1] & /*$jsonFontSize*/
    2048 && e(29, Et = typeof Je == "number" && Je > 0 ? Je : Et), t.$$.dirty[0] & /*fontWeight*/
    1073741824 | t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontFamily*/
    1536 && (e(30, Dt = yi(Se, void 0, Dt)), Ee && typeof Ee == "string" ? e(31, ot = rt.typefaceProvider(Ee, { fontWeight: Dt || 400 })) : e(31, ot = "")), t.$$.dirty[1] & /*$jsonOrientation, orientation*/
    258 && e(32, q = W === "horizontal" || W === "vertical" ? W : q), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    132 && e(33, Tt = typeof C == "number" && C >= 0 ? C : Tt), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    64 && (T != null && T.description ? e(6, st = ti(T)) : tt.logError(Y(new Error('Missing accessibility "description" for radio'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext*/
    1 && e(12, N = tt.id || `radio_${Math.random().toString(36).slice(2)}`), t.$$.dirty[0] & /*isEnabled*/
    16 && e(11, H = { disabled: !Pe }), t.$$.dirty[1] & /*orientation*/
    2 && e(10, O = { [q]: !0 }), t.$$.dirty[0] & /*selectedColor, defaultColor, textColor, fontSize, fontWeight*/
    2080374784 | t.$$.dirty[1] & /*fontFamily*/
    1 && e(9, ne = {
      "--divkit-radio-selected-color": I,
      "--divkit-radio-default-color": jt,
      ...lt ? { "--divkit-radio-text-color": lt } : {},
      ...Et ? { "font-size": pe(Et) } : {},
      ...Dt ? { "font-weight": Dt } : {},
      ...ot ? { "font-family": ot } : {}
    }), t.$$.dirty[1] & /*itemSpacing*/
    4 && e(8, de = `gap: ${pe(Tt)}`), t.$$.dirty[0] & /*container, componentContext, prevId*/
    33554437 && K && tt.json && (ft && (rt.unregisterFocusable(ft), e(25, ft = void 0)), tt.id && !tt.fakeElement && (e(25, ft = tt.id), rt.registerFocusable(ft, {
      focus() {
        if (K) {
          const Ke = K.querySelector("input");
          Ke && Ke.focus();
        }
      }
    })));
  }, [
    tt,
    yt,
    K,
    _e,
    Pe,
    s,
    st,
    a,
    de,
    ne,
    O,
    H,
    N,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    Ne,
    Kt,
    ft,
    I,
    jt,
    lt,
    Et,
    Dt,
    ot,
    q,
    Tt,
    o,
    i,
    n,
    T,
    C,
    W,
    Ee,
    Se,
    Je,
    Te,
    ce,
    oe,
    Ge,
    Xt,
    je
  ];
}
class rv extends Or {
  constructor(r) {
    super(), Lr(this, r, tv, ev, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const nv = "appkit-progress", ov = "appkit-progress__linear", iv = "appkit-progress__circular", $o = {
  progress: nv,
  progress__linear: ov,
  "progress__linear-fill": "appkit-progress__linear-fill",
  "progress__linear-fill_indeterminate": "appkit-progress__linear-fill_indeterminate",
  "progress-linear-indeterminate": "appkit-progress-linear-indeterminate",
  progress__circular: iv,
  "progress__circular-track": "appkit-progress__circular-track",
  "progress__circular-fill": "appkit-progress__circular-fill",
  "progress__circular-fill_indeterminate": "appkit-progress__circular-fill_indeterminate",
  "progress-circular-indeterminate": "appkit-progress-circular-indeterminate"
};
function sv(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function lv(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht("progress", $o, {}),
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
      $$slots: { default: [cv] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function av(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = en("svg"), e = en("circle"), n = en("circle"), g(e, "class", $o["progress__circular-track"]), g(e, "cx", Qo / 2), g(e, "cy", Qo / 2), g(e, "r", oa), g(
        e,
        "stroke-width",
        /*trackThickness*/
        t[5]
      ), g(n, "class", o = ht("progress__circular-fill", $o, {
        indeterminate: (
          /*isIndeterminate*/
          t[4]
        )
      })), g(n, "cx", Qo / 2), g(n, "cy", Qo / 2), g(n, "r", oa), g(
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
      )), g(n, "stroke-linecap", "round"), g(r, "class", $o.progress__circular), g(r, "width", Qo), g(r, "height", Qo), g(r, "viewBox", "0 0 " + Qo + " " + Qo), g(r, "role", "progressbar"), g(
        r,
        "aria-valuenow",
        /*ariaValue*/
        t[6]
      ), g(r, "aria-valuemin", 0), g(r, "aria-valuemax", 100);
    },
    m(s, a) {
      J(s, r, a), bt(r, e), bt(r, n);
    },
    p(s, a) {
      a & /*trackThickness*/
      32 && g(
        e,
        "stroke-width",
        /*trackThickness*/
        s[5]
      ), a & /*isIndeterminate*/
      16 && o !== (o = ht("progress__circular-fill", $o, {
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
      s && G(r);
    }
  };
}
function uv(t) {
  let r, e, n;
  return {
    c() {
      r = Me("div"), e = Me("div"), g(e, "class", n = ht("progress__linear-fill", $o, {
        indeterminate: (
          /*isIndeterminate*/
          t[4]
        )
      })), F(
        e,
        "width",
        /*isIndeterminate*/
        t[4] ? "30%" : (
          /*progressValue*/
          t[2] * 100 + "%"
        )
      ), g(r, "class", $o.progress__linear), F(r, "height", pe(
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
      J(o, r, i), bt(r, e);
    },
    p(o, i) {
      i & /*isIndeterminate*/
      16 && n !== (n = ht("progress__linear-fill", $o, {
        indeterminate: (
          /*isIndeterminate*/
          o[4]
        )
      })) && g(e, "class", n), i & /*isIndeterminate, progressValue*/
      20 && F(
        e,
        "width",
        /*isIndeterminate*/
        o[4] ? "30%" : (
          /*progressValue*/
          o[2] * 100 + "%"
        )
      ), i & /*trackThickness*/
      32 && F(r, "height", pe(
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
      o && G(r);
    }
  };
}
function cv(t) {
  let r;
  function e(i, s) {
    return (
      /*progressStyle*/
      i[3] === "linear" ? uv : av
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Qt();
    },
    m(i, s) {
      o.m(i, s), J(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && G(r), o.d(i);
    }
  };
}
function fv(t) {
  let r, e, n, o;
  const i = [lv, sv], s = [];
  function a(l, u) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, [u]) {
      e && e.p(l, u);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
const Qo = 48, oa = 20;
function dv(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m = j, p = () => (m(), m = S(u, (Te) => e(19, h = Te)), u), w, k = j, N = () => (k(), k = S(l, (Te) => e(20, w = Te)), l), H, O = j, ne = () => (O(), O = S(a, (Te) => e(21, H = Te)), a), de, T = j, X = () => (T(), T = S(s, (Te) => e(22, de = Te)), s), le, C = j, D = () => (C(), C = S(i, (Te) => e(23, le = Te)), i), M, W = j, Q = () => (W(), W = S(o, (Te) => e(24, M = Te)), o);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => k()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => C()), t.$$.on_destroy.push(() => W());
  let { componentContext: me } = r, { layoutParams: Ee = void 0 } = r;
  Dr(Kr);
  let ve = 0, he = "linear", Se = !1, Z = "#129386", et = "rgba(0, 0, 0, .1)", Je = 4;
  function qe() {
    e(2, ve = 0), e(3, he = "linear"), e(4, Se = !1), e(16, Z = "#129386"), e(17, et = "rgba(0, 0, 0, .1)"), e(5, Je = 4);
  }
  const be = 2 * Math.PI * oa;
  return t.$$set = (Te) => {
    "componentContext" in Te && e(0, me = Te.componentContext), "layoutParams" in Te && e(1, Ee = Te.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(18, n = me.origJson), t.$$.dirty & /*origJson*/
    262144 && n && qe(), t.$$.dirty & /*componentContext*/
    1 && Q(e(14, o = me.getDerivedFromVars(me.json.value))), t.$$.dirty & /*componentContext*/
    1 && D(e(13, i = me.getDerivedFromVars(me.json.style))), t.$$.dirty & /*componentContext*/
    1 && X(e(12, s = me.getDerivedFromVars(me.json.is_indeterminate))), t.$$.dirty & /*componentContext*/
    1 && ne(e(11, a = me.getDerivedFromVars(me.json.active_color))), t.$$.dirty & /*componentContext*/
    1 && N(e(10, l = me.getDerivedFromVars(me.json.inactive_color))), t.$$.dirty & /*componentContext*/
    1 && p(e(9, u = me.getDerivedFromVars(me.json.track_thickness))), t.$$.dirty & /*$jsonValue, progressValue*/
    16777220 && e(2, ve = typeof M == "number" ? Math.max(0, Math.min(1, M)) : ve), t.$$.dirty & /*$jsonStyle, progressStyle*/
    8388616 && e(3, he = le === "linear" || le === "circular" ? le : he), t.$$.dirty & /*$jsonIsIndeterminate, isIndeterminate*/
    4194320 && e(4, Se = nn(de, Se)), t.$$.dirty & /*$jsonActiveColor, activeColor*/
    2162688 && e(16, Z = pr(H, 1, Z)), t.$$.dirty & /*$jsonInactiveColor, inactiveColor*/
    1179648 && e(17, et = pr(w, 1, et)), t.$$.dirty & /*$jsonTrackThickness, trackThickness*/
    524320 && e(5, Je = typeof h == "number" && h >= 0 ? h : Je), t.$$.dirty & /*progressValue*/
    4 && e(8, c = be * (1 - ve)), t.$$.dirty & /*activeColor, inactiveColor*/
    196608 && e(7, f = {
      "--divkit-progress-active-color": Z,
      "--divkit-progress-inactive-color": et
    }), t.$$.dirty & /*isIndeterminate, progressValue*/
    20 && e(6, _ = Se ? void 0 : Math.round(ve * 100));
  }, [
    me,
    Ee,
    ve,
    he,
    Se,
    Je,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    be,
    Z,
    et,
    n,
    h,
    w,
    H,
    de,
    le,
    M
  ];
}
class _v extends Or {
  constructor(r) {
    super(), Lr(this, r, dv, fv, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const pv = "appkit-table", gv = "appkit-table_halign_start", hv = "appkit-table_halign_center", mv = "appkit-table_halign_end", bv = "appkit-table_valign_start", yv = "appkit-table_valign_center", wv = "appkit-table_valign_end", kv = "appkit-table__cell", vv = "appkit-table__cell_halign_left", jv = "appkit-table__cell_halign_start", Cv = "appkit-table__cell_halign_center", Ev = "appkit-table__cell_halign_right", Av = "appkit-table__cell_halign_end", Sv = "appkit-table__cell_valign_top", Vv = "appkit-table__cell_valign_center", Fv = "appkit-table__cell_valign_bottom", Iv = "appkit-table__cell_valign_baseline", Dv = "appkit-table__separator", Tv = "appkit-table__separator_row", Mv = "appkit-table__separator_col", Go = {
  table: pv,
  table_halign_start: gv,
  table_halign_center: hv,
  table_halign_end: mv,
  table_valign_start: bv,
  table_valign_center: yv,
  table_valign_end: wv,
  table__cell: kv,
  table__cell_halign_left: vv,
  table__cell_halign_start: jv,
  table__cell_halign_center: Cv,
  table__cell_halign_right: Ev,
  table__cell_halign_end: Av,
  table__cell_valign_top: Sv,
  table__cell_valign_center: Vv,
  table__cell_valign_bottom: Fv,
  table__cell_valign_baseline: Iv,
  table__separator: Dv,
  table__separator_row: Tv,
  table__separator_col: Mv
};
function Vf(t, r, e) {
  const n = t.slice();
  return n[35] = r[e], n;
}
function Ff(t, r, e) {
  const n = t.slice();
  return n[38] = r[e], n;
}
function Pv(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function Nv(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht(
        "table",
        Go,
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
      $$slots: { default: [zv] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = ht(
        "table",
        Go,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function If(t) {
  var a, l, u, c, f, _, h, m;
  let r, e, n, o = `${/*placement*/
  ((l = (a = t[38].layoutParams.gridArea) == null ? void 0 : a.x) != null ? l : 0) + 1} / span ${/*placement*/
  (c = (u = t[38].layoutParams.gridArea) == null ? void 0 : u.colSpan) != null ? c : 1}`, i = `${/*placement*/
  ((_ = (f = t[38].layoutParams.gridArea) == null ? void 0 : f.y) != null ? _ : 0) + 1} / span ${/*placement*/
  (m = (h = t[38].layoutParams.gridArea) == null ? void 0 : h.rowSpan) != null ? m : 1}`, s;
  return e = new Jn({
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
      r = Me("div"), Lt(e.$$.fragment), g(r, "class", n = ht("table__cell", Go, {
        halign: (
          /*placement*/
          t[38].cellHAlign
        ),
        valign: (
          /*placement*/
          t[38].cellVAlign
        )
      })), F(r, "grid-column", o), F(r, "grid-row", i), F(
        r,
        "background",
        /*placement*/
        t[38].backgroundStyle || void 0
      );
    },
    m(p, w) {
      J(p, r, w), Pt(e, r, null), s = !0;
    },
    p(p, w) {
      var N, H, O, ne, de, T, X, le;
      const k = {};
      w[0] & /*cellPlacements*/
      16 && (k.componentContext = /*placement*/
      p[38].componentContext), w[0] & /*cellPlacements*/
      16 && (k.layoutParams = /*placement*/
      p[38].layoutParams), e.$set(k), (!s || w[0] & /*cellPlacements*/
      16 && n !== (n = ht("table__cell", Go, {
        halign: (
          /*placement*/
          p[38].cellHAlign
        ),
        valign: (
          /*placement*/
          p[38].cellVAlign
        )
      }))) && g(r, "class", n), w[0] & /*cellPlacements*/
      16 && o !== (o = `${/*placement*/
      ((H = (N = p[38].layoutParams.gridArea) == null ? void 0 : N.x) != null ? H : 0) + 1} / span ${/*placement*/
      (ne = (O = p[38].layoutParams.gridArea) == null ? void 0 : O.colSpan) != null ? ne : 1}`) && F(r, "grid-column", o), w[0] & /*cellPlacements*/
      16 && i !== (i = `${/*placement*/
      ((T = (de = p[38].layoutParams.gridArea) == null ? void 0 : de.y) != null ? T : 0) + 1} / span ${/*placement*/
      (le = (X = p[38].layoutParams.gridArea) == null ? void 0 : X.rowSpan) != null ? le : 1}`) && F(r, "grid-row", i), w[0] & /*cellPlacements*/
      16 && F(
        r,
        "background",
        /*placement*/
        p[38].backgroundStyle || void 0
      );
    },
    i(p) {
      s || (L(e.$$.fragment, p), s = !0);
    },
    o(p) {
      x(e.$$.fragment, p), s = !1;
    },
    d(p) {
      p && G(r), Nt(e);
    }
  };
}
function Df(t) {
  let r, e, n, o;
  return {
    c() {
      r = Me("div"), e = Me("div"), o = gr(), g(e, "class", n = /*sep*/
      t[35].width ? Go.table__separator_col : Go.table__separator_row), F(
        e,
        "background",
        /*sep*/
        t[35].background
      ), F(
        e,
        "height",
        /*sep*/
        t[35].height || void 0
      ), F(
        e,
        "width",
        /*sep*/
        t[35].width || void 0
      ), g(r, "class", Go.table__separator), F(
        r,
        "grid-column",
        /*sep*/
        t[35].gridColumn
      ), F(
        r,
        "grid-row",
        /*sep*/
        t[35].gridRow
      ), F(
        r,
        "margin-top",
        /*sep*/
        t[35].marginTop || void 0
      ), F(
        r,
        "margin-bottom",
        /*sep*/
        t[35].marginBottom || void 0
      ), F(
        r,
        "margin-left",
        /*sep*/
        t[35].marginLeft || void 0
      ), F(
        r,
        "margin-right",
        /*sep*/
        t[35].marginRight || void 0
      );
    },
    m(i, s) {
      J(i, r, s), bt(r, e), bt(r, o);
    },
    p(i, s) {
      s[0] & /*separatorElements*/
      32 && n !== (n = /*sep*/
      i[35].width ? Go.table__separator_col : Go.table__separator_row) && g(e, "class", n), s[0] & /*separatorElements*/
      32 && F(
        e,
        "background",
        /*sep*/
        i[35].background
      ), s[0] & /*separatorElements*/
      32 && F(
        e,
        "height",
        /*sep*/
        i[35].height || void 0
      ), s[0] & /*separatorElements*/
      32 && F(
        e,
        "width",
        /*sep*/
        i[35].width || void 0
      ), s[0] & /*separatorElements*/
      32 && F(
        r,
        "grid-column",
        /*sep*/
        i[35].gridColumn
      ), s[0] & /*separatorElements*/
      32 && F(
        r,
        "grid-row",
        /*sep*/
        i[35].gridRow
      ), s[0] & /*separatorElements*/
      32 && F(
        r,
        "margin-top",
        /*sep*/
        i[35].marginTop || void 0
      ), s[0] & /*separatorElements*/
      32 && F(
        r,
        "margin-bottom",
        /*sep*/
        i[35].marginBottom || void 0
      ), s[0] & /*separatorElements*/
      32 && F(
        r,
        "margin-left",
        /*sep*/
        i[35].marginLeft || void 0
      ), s[0] & /*separatorElements*/
      32 && F(
        r,
        "margin-right",
        /*sep*/
        i[35].marginRight || void 0
      );
    },
    d(i) {
      i && G(r);
    }
  };
}
function zv(t) {
  let r, e, n, o = ir(
    /*cellPlacements*/
    t[4]
  ), i = [];
  for (let u = 0; u < o.length; u += 1)
    i[u] = If(Ff(t, o, u));
  const s = (u) => x(i[u], 1, 1, () => {
    i[u] = null;
  });
  let a = ir(
    /*separatorElements*/
    t[5]
  ), l = [];
  for (let u = 0; u < a.length; u += 1)
    l[u] = Df(Vf(t, a, u));
  return {
    c() {
      for (let u = 0; u < i.length; u += 1)
        i[u].c();
      r = gr();
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      e = Qt();
    },
    m(u, c) {
      for (let f = 0; f < i.length; f += 1)
        i[f] && i[f].m(u, c);
      J(u, r, c);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(u, c);
      J(u, e, c), n = !0;
    },
    p(u, c) {
      if (c[0] & /*cellPlacements*/
      16) {
        o = ir(
          /*cellPlacements*/
          u[4]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const _ = Ff(u, o, f);
          i[f] ? (i[f].p(_, c), L(i[f], 1)) : (i[f] = If(_), i[f].c(), L(i[f], 1), i[f].m(r.parentNode, r));
        }
        for (sr(), f = o.length; f < i.length; f += 1)
          s(f);
        lr();
      }
      if (c[0] & /*separatorElements*/
      32) {
        a = ir(
          /*separatorElements*/
          u[5]
        );
        let f;
        for (f = 0; f < a.length; f += 1) {
          const _ = Vf(u, a, f);
          l[f] ? l[f].p(_, c) : (l[f] = Df(_), l[f].c(), l[f].m(e.parentNode, e));
        }
        for (; f < l.length; f += 1)
          l[f].d(1);
        l.length = a.length;
      }
    },
    i(u) {
      if (!n) {
        for (let c = 0; c < o.length; c += 1)
          L(i[c]);
        n = !0;
      }
    },
    o(u) {
      i = i.filter(Boolean);
      for (let c = 0; c < i.length; c += 1)
        x(i[c]);
      n = !1;
    },
    d(u) {
      u && (G(r), G(e)), on(i, u), on(l, u);
    }
  };
}
function Lv(t) {
  let r, e, n, o;
  const i = [Nv, Pv], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (sr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), lr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Ov(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p = j, w = () => (p(), p = S(s, (ae) => e(22, m = ae)), s), k, N = j, H = () => (N(), N = S(i, (ae) => e(23, k = ae)), i), O, ne = j, de = () => (ne(), ne = S(a, (ae) => e(24, O = ae)), a), T, X = j, le = () => (X(), X = S(l, (ae) => e(25, T = ae)), l);
  t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => ne()), t.$$.on_destroy.push(() => X());
  let { componentContext: C } = r, { layoutParams: D = void 0 } = r;
  const M = Dr(Kr), W = M.direction;
  yn(t, W, (ae) => e(21, h = ae));
  let Q = !1, me = "start", Ee = "start", ve = [], he, Se = [], Z = [], et = "";
  function Je() {
    e(3, Q = !1), e(13, me = "start"), e(14, Ee = "start");
  }
  function qe(ae) {
    var ee, Oe;
    if (!ae || !ae.style) return null;
    let oe = "#E0E0E0", we = 1;
    const Re = ae.style;
    if (Re.type === "shape_drawable" && Re.shape) {
      const Ne = Re.shape;
      oe = pr(Ne.background_color || Re.color || "#E0E0E0"), Ne.type === "rounded_rectangle" && (we = Number(((ee = Ne.item_height) == null ? void 0 : ee.value) || ((Oe = Ne.item_width) == null ? void 0 : Oe.value) || 1));
    } else Re.color && (oe = pr(Re.color));
    const Ge = ae.margins || {};
    return {
      color: oe,
      thickness: we,
      show_at_start: ae.show_at_start === 1 || ae.show_at_start === !0,
      show_between: ae.show_between !== 0 && ae.show_between !== !1,
      show_at_end: ae.show_at_end === 1 || ae.show_at_end === !0,
      marginTop: Number(Ge.top) || 0,
      marginBottom: Number(Ge.bottom) || 0,
      marginLeft: Number(Ge.left) || 0,
      marginRight: Number(Ge.right) || 0
    };
  }
  function be(ae, oe) {
    const we = ae.header_row;
    let Re = [];
    return ae.row_builder && Array.isArray(oe) ? Re = kl(oe, M, C, ae.row_builder).map((ee) => ee.div) : Array.isArray(ae.rows) && (Re = ae.rows), { rows: Re, headerRow: we };
  }
  let Te = [];
  function ue(ae, oe) {
    Te = [];
    for (let we = 0; we < ae; we++)
      Te[we] = new Array(oe).fill(!1);
  }
  function ge(ae, oe, we, Re) {
    var Ge;
    for (let ee = ae; ee < ae + we && ee < Te.length; ee++)
      for (let Oe = oe; Oe < oe + Re && Oe < (((Ge = Te[0]) == null ? void 0 : Ge.length) || 0); Oe++)
        Te[ee][Oe] = !0;
  }
  function ce(ae, oe) {
    var Re;
    if (ae >= Te.length) return oe;
    let we = oe;
    for (; we < (((Re = Te[0]) == null ? void 0 : Re.length) || 0) && Te[ae][we]; )
      we++;
    return we;
  }
  function re(ae, oe, we, Re, Ge, ee, Oe, Ne, nt, at) {
    const tt = Array.isArray(ae.cells) ? ae.cells : [];
    let yt = 0;
    for (let rt = 0; rt < tt.length; rt++) {
      const Mt = tt[rt];
      if (!Mt || !Mt.div) continue;
      const ft = Math.max(1, Number(Mt.column_span) || 1), K = Math.max(1, Number(Mt.row_span) || 1);
      yt = ce(oe, yt), ge(oe, yt, K, ft);
      const _e = Array.isArray(we) && we[yt], st = Mt.content_alignment_horizontal || _e && _e.content_alignment_horizontal || void 0, Pe = Mt.content_alignment_vertical || _e && _e.content_alignment_vertical || void 0;
      let I;
      const jt = Mt.background || Re;
      if (jt && Array.isArray(jt) && jt.length > 0) {
        const Dt = jt[0];
        Dt && Dt.type === "solid" && Dt.color && (I = pr(Dt.color));
      }
      const lt = nt.get(Mt.div);
      let Et;
      lt ? (at.delete(lt), Et = lt) : Et = C.produceChildContext(Mt.div, { path: `${ee}_${rt}` }), Oe.push(Et), Ne.push({
        componentContext: Et,
        layoutParams: {
          gridArea: {
            x: yt,
            y: oe,
            colSpan: ft,
            rowSpan: K
          }
        },
        cellHAlign: st,
        cellVAlign: Pe,
        backgroundStyle: I
      }), yt += ft;
    }
  }
  return sn(() => {
    ve.forEach((ae) => {
      ae.destroy();
    });
  }), t.$$set = (ae) => {
    "componentContext" in ae && e(0, C = ae.componentContext), "layoutParams" in ae && e(1, D = ae.layoutParams);
  }, t.$$.update = () => {
    var ae, oe, we;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(20, n = C.origJson), t.$$.dirty[0] & /*origJson*/
    1048576 && n && Je(), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, o = C.json.columns), t.$$.dirty[0] & /*componentContext*/
    1 && H(e(11, i = C.getDerivedFromVars(C.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && w(e(10, s = C.getDerivedFromVars(C.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(9, a = C.getDerivedFromVars(C.json.striped))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(8, l = typeof ((ae = C.json.row_builder) == null ? void 0 : ae.data) == "string" ? C.getDerivedFromVars((oe = C.json.row_builder) == null ? void 0 : oe.data, void 0, !0) : (we = C.json.row_builder) != null && we.data ? Jo(C.json.row_builder.data) : void 0)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && (!Array.isArray(o) || o.length === 0 ? e(3, Q = !0) : e(3, Q = !1)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && e(17, u = Array.isArray(o) ? o.length : 0), t.$$.dirty[0] & /*jsonColumns*/
    524288)
      if (Array.isArray(o)) {
        const Re = [];
        for (let Ge = 0; Ge < o.length; Ge++) {
          const ee = o[Ge], Oe = ee == null ? void 0 : ee.width;
          if ((Oe == null ? void 0 : Oe.type) === "fixed" && Oe.value)
            Re.push(pe(Number(Oe.value)));
          else if ((Oe == null ? void 0 : Oe.type) === "match_parent") {
            const Ne = Number(Oe.weight || 1);
            Re.push(`${Ne}fr`);
          } else
            Re.push("auto");
        }
        e(16, et = Re.join(" "));
      } else
        e(16, et = "");
    if (t.$$.dirty[0] & /*componentContext, $jsonRowBuilderData*/
    33554433 && e(18, c = be(C.json, T)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonColumns, allRows, columnCount, $jsonStriped*/
    17727493) {
      const Re = new Set(ve), Ge = /* @__PURE__ */ new Map();
      he === C && ve.forEach((I) => {
        Ge.set(I.json, I);
      });
      const ee = [], Oe = [], Ne = [];
      let nt = 0;
      const at = C.json, tt = Array.isArray(o) ? o : [], yt = !!(c.headerRow && Array.isArray(c.headerRow.cells)), rt = c.rows.length, Mt = (yt ? 1 : 0) + rt;
      ue(Mt + 10, u + 10);
      const ft = qe(at.row_separator), K = qe(at.column_separator), _e = qe(at.header_separator);
      yt && (re(c.headerRow, nt, tt, c.headerRow.background || at.header_background, void 0, -1, ee, Oe, Ge, Re), nt++);
      const st = c.rows;
      for (let I = 0; I < st.length; I++) {
        const jt = st[I];
        if (!jt || !Array.isArray(jt.cells)) continue;
        let lt = jt.background;
        !lt && O && (I % 2 === 0 ? lt = O.even_row_background : lt = O.odd_row_background), re(jt, nt, tt, lt, void 0, I, ee, Oe, Ge, Re), nt++;
      }
      const Pe = nt;
      if (_e && yt && rt > 0 && Ne.push({
        gridColumn: `1 / span ${u}`,
        gridRow: "1 / span 1",
        background: _e.color,
        height: pe(_e.thickness),
        marginTop: _e.marginTop ? pe(_e.marginTop) : void 0,
        marginBottom: _e.marginBottom ? pe(_e.marginBottom) : void 0,
        marginLeft: _e.marginLeft ? pe(_e.marginLeft) : void 0,
        marginRight: _e.marginRight ? pe(_e.marginRight) : void 0
      }), ft) {
        const I = yt ? 1 : 0;
        if (ft.show_at_start && rt > 0 && Ne.push({
          gridColumn: `1 / span ${u}`,
          gridRow: `${I + 1} / span 1`,
          background: ft.color,
          height: pe(ft.thickness),
          marginTop: ft.marginTop ? pe(ft.marginTop) : void 0,
          marginBottom: ft.marginBottom ? pe(ft.marginBottom) : void 0,
          marginLeft: ft.marginLeft ? pe(ft.marginLeft) : void 0,
          marginRight: ft.marginRight ? pe(ft.marginRight) : void 0
        }), ft.show_between)
          for (let jt = I; jt < Pe - 1; jt++)
            Ne.push({
              gridColumn: `1 / span ${u}`,
              gridRow: `${jt + 1} / span 1`,
              background: ft.color,
              height: pe(ft.thickness),
              marginTop: ft.marginTop ? pe(ft.marginTop) : void 0,
              marginBottom: ft.marginBottom ? pe(ft.marginBottom) : void 0,
              marginLeft: ft.marginLeft ? pe(ft.marginLeft) : void 0,
              marginRight: ft.marginRight ? pe(ft.marginRight) : void 0
            });
        ft.show_at_end && rt > 0 && Ne.push({
          gridColumn: `1 / span ${u}`,
          gridRow: `${Pe} / span 1`,
          background: ft.color,
          height: pe(ft.thickness),
          marginTop: ft.marginTop ? pe(ft.marginTop) : void 0,
          marginBottom: ft.marginBottom ? pe(ft.marginBottom) : void 0,
          marginLeft: ft.marginLeft ? pe(ft.marginLeft) : void 0,
          marginRight: ft.marginRight ? pe(ft.marginRight) : void 0
        });
      }
      if (K && u > 0) {
        if (K.show_at_start && Ne.push({
          gridColumn: "1 / span 1",
          gridRow: `1 / span ${Pe}`,
          background: K.color,
          width: pe(K.thickness),
          marginTop: K.marginTop ? pe(K.marginTop) : void 0,
          marginBottom: K.marginBottom ? pe(K.marginBottom) : void 0,
          marginLeft: K.marginLeft ? pe(K.marginLeft) : void 0,
          marginRight: K.marginRight ? pe(K.marginRight) : void 0
        }), K.show_between)
          for (let I = 0; I < u - 1; I++)
            Ne.push({
              gridColumn: `${I + 1} / span 1`,
              gridRow: `1 / span ${Pe}`,
              background: K.color,
              width: pe(K.thickness),
              marginTop: K.marginTop ? pe(K.marginTop) : void 0,
              marginBottom: K.marginBottom ? pe(K.marginBottom) : void 0,
              marginLeft: K.marginLeft ? pe(K.marginLeft) : void 0,
              marginRight: K.marginRight ? pe(K.marginRight) : void 0
            });
        K.show_at_end && Ne.push({
          gridColumn: `${u} / span 1`,
          gridRow: `1 / span ${Pe}`,
          background: K.color,
          width: pe(K.thickness),
          marginTop: K.marginTop ? pe(K.marginTop) : void 0,
          marginBottom: K.marginBottom ? pe(K.marginBottom) : void 0,
          marginLeft: K.marginLeft ? pe(K.marginLeft) : void 0,
          marginRight: K.marginRight ? pe(K.marginRight) : void 0
        });
      }
      for (const I of Re)
        I.destroy();
      e(2, ve = ee), e(4, Se = Oe), e(5, Z = Ne), e(15, he = C);
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    8396800 && e(13, me = wl(k, me)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    6307840 && e(14, Ee = yl(m, h, Ee)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    24576 && e(7, f = {
      valign: me,
      halign: Ee
    }), t.$$.dirty[0] & /*gridTemplateColumns*/
    65536 && e(6, _ = {
      "grid-template-columns": et
    });
  }, [
    C,
    D,
    ve,
    Q,
    Se,
    Z,
    _,
    f,
    l,
    a,
    s,
    i,
    W,
    me,
    Ee,
    he,
    et,
    u,
    c,
    o,
    n,
    h,
    m,
    k,
    O,
    T
  ];
}
class Bv extends Or {
  constructor(r) {
    super(), Lr(this, r, Ov, Lv, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Rv = "appkit-counter", Hv = "appkit-counter__container", Wv = "appkit-counter__button", Uv = "appkit-counter__value", Gv = "appkit-counter_disabled", Di = {
  counter: Rv,
  counter__container: Hv,
  counter__button: Wv,
  counter__value: Uv,
  counter_disabled: Gv
};
function Jv(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function qv(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht(
        "counter",
        Di,
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
      $$slots: { default: [Kv] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = ht(
        "counter",
        Di,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function Kv(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h, m, p, w;
  return {
    c() {
      r = Me("div"), e = Me("button"), n = en("svg"), o = en("line"), s = gr(), a = Me("div"), l = Gn(
        /*value*/
        t[17]
      ), u = gr(), c = Me("button"), f = en("svg"), _ = en("line"), h = en("line"), g(o, "x1", "6"), g(o, "y1", "12"), g(o, "x2", "18"), g(o, "y2", "12"), g(
        o,
        "stroke",
        /*iconColor*/
        t[6]
      ), g(o, "stroke-width", "2.5"), g(o, "stroke-linecap", "round"), g(n, "viewBox", "0 0 24 24"), g(n, "fill", "none"), g(n, "xmlns", "http://www.w3.org/2000/svg"), g(e, "class", Di.counter__button), e.disabled = i = !/*isEnabled*/
      t[3] || /*value*/
      t[17] <= /*minValue*/
      t[11], g(e, "aria-label", "Decrease value"), F(
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
      ), F(e, "width", pe(
        /*buttonSize*/
        t[5]
      )), F(e, "height", pe(
        /*buttonSize*/
        t[5]
      )), g(a, "class", Di.counter__value), F(a, "width", pe(
        /*valueWidth*/
        t[10]
      )), F(
        a,
        "color",
        /*textColor*/
        t[8]
      ), F(a, "font-size", pe(
        /*fontSize*/
        t[9]
      )), F(
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
      ), g(h, "stroke-width", "2.5"), g(h, "stroke-linecap", "round"), g(f, "viewBox", "0 0 24 24"), g(f, "fill", "none"), g(f, "xmlns", "http://www.w3.org/2000/svg"), g(c, "class", Di.counter__button), c.disabled = m = !/*isEnabled*/
      t[3] || /*value*/
      t[17] >= /*maxValue*/
      t[12], g(c, "aria-label", "Increase value"), F(
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
      ), F(c, "width", pe(
        /*buttonSize*/
        t[5]
      )), F(c, "height", pe(
        /*buttonSize*/
        t[5]
      )), g(r, "class", Di.counter__container);
    },
    m(k, N) {
      J(k, r, N), bt(r, e), bt(e, n), bt(n, o), bt(r, s), bt(r, a), bt(a, l), bt(r, u), bt(r, c), bt(c, f), bt(f, _), bt(f, h), p || (w = [
        Qe(
          e,
          "click",
          /*decrement*/
          t[36]
        ),
        Qe(
          c,
          "click",
          /*increment*/
          t[35]
        )
      ], p = !0);
    },
    p(k, N) {
      N[0] & /*iconColor*/
      64 && g(
        o,
        "stroke",
        /*iconColor*/
        k[6]
      ), N[0] & /*isEnabled, value, minValue*/
      133128 && i !== (i = !/*isEnabled*/
      k[3] || /*value*/
      k[17] <= /*minValue*/
      k[11]) && (e.disabled = i), N[0] & /*value, minValue, disabledButtonColor, buttonColor*/
      133264 && F(
        e,
        "background",
        /*value*/
        k[17] <= /*minValue*/
        k[11] ? (
          /*disabledButtonColor*/
          k[7]
        ) : (
          /*buttonColor*/
          k[4]
        )
      ), N[0] & /*buttonSize*/
      32 && F(e, "width", pe(
        /*buttonSize*/
        k[5]
      )), N[0] & /*buttonSize*/
      32 && F(e, "height", pe(
        /*buttonSize*/
        k[5]
      )), N[0] & /*value*/
      131072 && eo(
        l,
        /*value*/
        k[17]
      ), N[0] & /*valueWidth*/
      1024 && F(a, "width", pe(
        /*valueWidth*/
        k[10]
      )), N[0] & /*textColor*/
      256 && F(
        a,
        "color",
        /*textColor*/
        k[8]
      ), N[0] & /*fontSize*/
      512 && F(a, "font-size", pe(
        /*fontSize*/
        k[9]
      )), N[0] & /*fontWeight*/
      8192 && F(
        a,
        "font-weight",
        /*fontWeight*/
        k[13]
      ), N[0] & /*iconColor*/
      64 && g(
        _,
        "stroke",
        /*iconColor*/
        k[6]
      ), N[0] & /*iconColor*/
      64 && g(
        h,
        "stroke",
        /*iconColor*/
        k[6]
      ), N[0] & /*isEnabled, value, maxValue*/
      135176 && m !== (m = !/*isEnabled*/
      k[3] || /*value*/
      k[17] >= /*maxValue*/
      k[12]) && (c.disabled = m), N[0] & /*value, maxValue, disabledButtonColor, buttonColor*/
      135312 && F(
        c,
        "background",
        /*value*/
        k[17] >= /*maxValue*/
        k[12] ? (
          /*disabledButtonColor*/
          k[7]
        ) : (
          /*buttonColor*/
          k[4]
        )
      ), N[0] & /*buttonSize*/
      32 && F(c, "width", pe(
        /*buttonSize*/
        k[5]
      )), N[0] & /*buttonSize*/
      32 && F(c, "height", pe(
        /*buttonSize*/
        k[5]
      ));
    },
    d(k) {
      k && G(r), p = !1, Jr(w);
    }
  };
}
function Yv(t) {
  let r, e, n, o;
  const i = [qv, Jv], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (sr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), lr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Xv(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, O, ne, de, T, X, le, C, D = j, M = () => (D(), D = S(i, (ut) => e(46, C = ut)), i), W, Q = j, me = () => (Q(), Q = S(de, (ut) => e(47, W = ut)), de), Ee, ve = j, he = () => (ve(), ve = S(ne, (ut) => e(48, Ee = ut)), ne), Se, Z = j, et = () => (Z(), Z = S(O, (ut) => e(49, Se = ut)), O), Je, qe = j, be = () => (qe(), qe = S(H, (ut) => e(50, Je = ut)), H), Te, ue = j, ge = () => (ue(), ue = S(N, (ut) => e(51, Te = ut)), N), ce, re = j, ae = () => (re(), re = S(k, (ut) => e(52, ce = ut)), k), oe, we = j, Re = () => (we(), we = S(w, (ut) => e(53, oe = ut)), w), Ge, ee = j, Oe = () => (ee(), ee = S(p, (ut) => e(54, Ge = ut)), p), Ne, nt = j, at = () => (nt(), nt = S(m, (ut) => e(55, Ne = ut)), m), tt, yt = j, rt = () => (yt(), yt = S(h, (ut) => e(56, tt = ut)), h), Mt, ft = j, K = () => (ft(), ft = S(_, (ut) => e(57, Mt = ut)), _), _e, st = j, Pe = () => (st(), st = S(f, (ut) => e(58, _e = ut)), f), I, jt = j, lt = () => (jt(), jt = S(c, (ut) => e(59, I = ut)), c), Et, Dt = j, ot = () => (Dt(), Dt = S(u, (ut) => e(60, Et = ut)), u), q, Tt = j, Ft = () => (Tt(), Tt = S(l, (ut) => e(61, q = ut)), l), Kt, Xt = j, je = () => (Xt(), Xt = S(a, (ut) => e(62, Kt = ut)), a), Ke, _t = j, Fe = () => (_t(), _t = S(s, (ut) => e(63, Ke = ut)), s);
  t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => qe()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => nt()), t.$$.on_destroy.push(() => yt()), t.$$.on_destroy.push(() => ft()), t.$$.on_destroy.push(() => st()), t.$$.on_destroy.push(() => jt()), t.$$.on_destroy.push(() => Dt()), t.$$.on_destroy.push(() => Tt()), t.$$.on_destroy.push(() => Xt()), t.$$.on_destroy.push(() => _t());
  let { componentContext: $e } = r, { layoutParams: Be = void 0 } = r;
  const Vt = Dr(Kr), ze = Dr(To);
  let mt = !1, Ut = !0, It = "#4CAF50", hr = 36, De = "#ffffff", kt = "#cccccc", ar = "#1B2630", rr = 16, er = 700, mr = 40, vr = "#F5F5F5", tr = "#E0E0E0", nr = 1, Rt = 999, pt = 6, xt = 0, ie = 99, yr = 1;
  const kr = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  };
  function Ct() {
    e(3, Ut = !0), e(4, It = "#4CAF50"), e(5, hr = 36), e(6, De = "#ffffff"), e(7, kt = "#cccccc"), e(8, ar = "#1B2630"), e(9, rr = 16), e(13, er = 700), e(10, mr = 40), e(37, vr = "#F5F5F5"), e(38, tr = "#E0E0E0"), e(39, nr = 1), e(40, Rt = 999), e(41, pt = 6), e(11, xt = 0), e(12, ie = 99), e(42, yr = 1);
  }
  function Tr() {
    if (!Ut) return;
    const ut = Math.min(T + yr, ie);
    ut !== T && (i.setValue(ut), $e.json.on_increment_actions && $e.execAnyActions($e.json.on_increment_actions), $e.json.on_value_change_actions && $e.execAnyActions($e.json.on_value_change_actions));
  }
  function Br() {
    if (!Ut) return;
    const ut = Math.max(T - yr, xt);
    ut !== T && (i.setValue(ut), $e.json.on_decrement_actions && $e.execAnyActions($e.json.on_decrement_actions), $e.json.on_value_change_actions && $e.execAnyActions($e.json.on_value_change_actions));
  }
  let cr;
  return sn(() => {
    cr && (Vt.unregisterFocusable(cr), e(43, cr = void 0));
  }), t.$$set = (ut) => {
    "componentContext" in ut && e(0, $e = ut.componentContext), "layoutParams" in ut && e(1, Be = ut.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(45, n = $e.origJson), t.$$.dirty[1] & /*origJson*/
    16384 && n && Ct(), t.$$.dirty[0] & /*componentContext*/
    1 && e(44, o = $e.json.counter_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8192 && M(e(16, i = o && ($e.getVariable(o, "integer") || Vt.awaitGlobalVariable(o, "integer", 0)) || io("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && Fe(e(34, s = $e.getDerivedFromVars($e.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && je(e(33, a = $e.getDerivedFromVars($e.json.button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ft(e(32, l = $e.getDerivedFromVars($e.json.button_size))), t.$$.dirty[0] & /*componentContext*/
    1 && ot(e(31, u = $e.getDerivedFromVars($e.json.icon_color))), t.$$.dirty[0] & /*componentContext*/
    1 && lt(e(30, c = $e.getDerivedFromVars($e.json.disabled_button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Pe(e(29, f = $e.getDerivedFromVars($e.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && K(e(28, _ = $e.getDerivedFromVars($e.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && rt(e(27, h = $e.getDerivedFromVars($e.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && at(e(26, m = $e.getDerivedFromVars($e.json.value_width))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(25, p = $e.getDerivedFromVars($e.json.background_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Re(e(24, w = $e.getDerivedFromVars($e.json.border_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(23, k = $e.getDerivedFromVars($e.json.border_width))), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(22, N = $e.getDerivedFromVars($e.json.corner_radius))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(21, H = $e.getDerivedFromVars($e.json.padding))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(20, O = $e.getDerivedFromVars($e.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(19, ne = $e.getDerivedFromVars($e.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(18, de = $e.getDerivedFromVars($e.json.step))), t.$$.dirty[0] & /*isEnabled*/
    8 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    2 && e(3, Ut = nn(Ke, Ut)), t.$$.dirty[0] & /*buttonColor*/
    16 | t.$$.dirty[2] & /*$jsonButtonColor*/
    1 && e(4, It = pr(Kt, 1, It)), t.$$.dirty[0] & /*buttonSize*/
    32 | t.$$.dirty[1] & /*$jsonButtonSize*/
    1073741824 && e(5, hr = oo(q, hr)), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*$jsonIconColor*/
    536870912 && e(6, De = pr(Et, 1, De)), t.$$.dirty[0] & /*disabledButtonColor*/
    128 | t.$$.dirty[1] & /*$jsonDisabledButtonColor*/
    268435456 && e(7, kt = pr(I, 1, kt)), t.$$.dirty[0] & /*textColor*/
    256 | t.$$.dirty[1] & /*$jsonTextColor*/
    134217728 && e(8, ar = pr(_e, 1, ar)), t.$$.dirty[0] & /*fontSize*/
    512 | t.$$.dirty[1] & /*$jsonFontSize*/
    67108864 && e(9, rr = oo(Mt, rr)), t.$$.dirty[1] & /*$jsonFontWeight*/
    33554432) {
      const ut = tt;
      if (typeof ut == "string")
        if (ut in kr)
          e(13, er = kr[ut]);
        else {
          const vt = parseInt(ut, 10);
          !Number.isNaN(vt) && vt > 0 && e(13, er = vt);
        }
      else typeof ut == "number" && ut > 0 && e(13, er = ut);
    }
    if (t.$$.dirty[0] & /*valueWidth*/
    1024 | t.$$.dirty[1] & /*$jsonValueWidth*/
    16777216 && e(10, mr = oo(Ne, mr)), t.$$.dirty[1] & /*$jsonBackgroundColor, backgroundColor*/
    8388672 && e(37, vr = pr(Ge, 1, vr)), t.$$.dirty[1] & /*$jsonBorderColor, borderColor*/
    4194432 && e(38, tr = pr(oe, 1, tr)), t.$$.dirty[1] & /*$jsonBorderWidth, borderWidth*/
    2097408 && e(39, nr = oo(ce, nr)), t.$$.dirty[1] & /*$jsonCornerRadius, cornerRadius*/
    1049088 && e(40, Rt = oo(Te, Rt)), t.$$.dirty[1] & /*$jsonPadding, padding*/
    525312 && e(41, pt = oo(Je, pt)), t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$jsonMinValue, $jsonMaxValue*/
    393216 && (e(11, xt = oo(Se, xt)), e(12, ie = oo(Ee, ie))), t.$$.dirty[1] & /*$jsonStep, step*/
    67584) {
      const ut = oo(W, yr);
      ut > 0 && e(42, yr = ut);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$valueVariable*/
    32768 && e(17, T = Fo(C || 0, xt, ie)), t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*variable*/
    8192) {
      let ut = !1;
      o ? ze.hasAction() && (ut = !0, $e.logError(Y(new Error('Cannot show "counter" inside component with an action')))) : (ut = !0, $e.logError(Y(new Error('Missing "counter_value_variable" in "counter"')))), mt !== ut && e(2, mt = ut);
    }
    t.$$.dirty[0] & /*isEnabled*/
    8 && e(15, X = { disabled: !Ut }), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*backgroundColor, borderColor, borderWidth, cornerRadius, padding*/
    1984 && e(14, le = {
      "--divkit-counter-bg": vr,
      "--divkit-counter-border-color": tr,
      "--divkit-counter-border-width": pe(nr),
      "--divkit-counter-radius": pe(Rt),
      "--divkit-counter-padding": pe(pt),
      "--divkit-counter-icon-color": De
    }), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*prevId*/
    4096 && $e.json && (cr && (Vt.unregisterFocusable(cr), e(43, cr = void 0)), $e.id && !$e.fakeElement && (e(43, cr = $e.id), Vt.registerFocusable(cr, {
      focus() {
      }
    })));
  }, [
    $e,
    Be,
    mt,
    Ut,
    It,
    hr,
    De,
    kt,
    ar,
    rr,
    mr,
    xt,
    ie,
    er,
    le,
    X,
    i,
    T,
    de,
    ne,
    O,
    H,
    N,
    k,
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
    Tr,
    Br,
    vr,
    tr,
    nr,
    Rt,
    pt,
    yr,
    cr,
    o,
    n,
    C,
    W,
    Ee,
    Se,
    Je,
    Te,
    ce,
    oe,
    Ge,
    Ne,
    tt,
    Mt,
    _e,
    I,
    Et,
    q,
    Kt,
    Ke
  ];
}
class Zv extends Or {
  constructor(r) {
    super(), Lr(this, r, Xv, Yv, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Qv = "appkit-webview__frame", Qs = {
  webview__frame: Qv,
  "webview__aspect-wrapper": "appkit-webview__aspect-wrapper"
};
function xv(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function $v(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht("webview", Qs, {}),
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
      $$slots: { default: [r2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function e2(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Me("iframe"), g(r, "class", Qs.webview__frame), Xn(r.src, e = /*url*/
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
      J(a, r, l), i || (s = [
        Qe(
          r,
          "load",
          /*onLoad*/
          t[15]
        ),
        Qe(
          r,
          "error",
          /*onError*/
          t[16]
        )
      ], i = !0);
    },
    p(a, l) {
      l & /*url*/
      4 && !Xn(r.src, e = /*url*/
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
      a && G(r), i = !1, Jr(s);
    }
  };
}
function t2(t) {
  let r, e, n, o, i, s = `${/*aspectPaddingBottom*/
  t[6]}%`, a, l;
  return {
    c() {
      r = Me("div"), e = Me("iframe"), g(e, "class", Qs.webview__frame), Xn(e.src, n = /*url*/
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
      t[4] ? "auto" : "no"), g(e, "title", "webview"), g(r, "class", Qs["webview__aspect-wrapper"]), F(r, "padding-bottom", s);
    },
    m(u, c) {
      J(u, r, c), bt(r, e), a || (l = [
        Qe(
          e,
          "load",
          /*onLoad*/
          t[15]
        ),
        Qe(
          e,
          "error",
          /*onError*/
          t[16]
        )
      ], a = !0);
    },
    p(u, c) {
      c & /*url*/
      4 && !Xn(e.src, n = /*url*/
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
      u[6]}%`) && F(r, "padding-bottom", s);
    },
    d(u) {
      u && G(r), a = !1, Jr(l);
    }
  };
}
function r2(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[6] !== "0" ? t2 : e2
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Qt();
    },
    m(i, s) {
      o.m(i, s), J(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && G(r), o.d(i);
    }
  };
}
function n2(t) {
  let r, e, n, o;
  const i = [$v, xv], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[5] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, [u]) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (sr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), lr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function o2(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _ = j, h = () => (_(), _ = S(u, (ce) => e(20, f = ce)), u), m, p = j, w = () => (p(), p = S(l, (ce) => e(21, m = ce)), l), k, N = j, H = () => (N(), N = S(a, (ce) => e(22, k = ce)), a), O, ne = j, de = () => (ne(), ne = S(s, (ce) => e(23, O = ce)), s), T, X = j, le = () => (X(), X = S(i, (ce) => e(24, T = ce)), i), C, D = j, M = () => (D(), D = S(o, (ce) => e(25, C = ce)), o), W, Q = j, me = () => (Q(), Q = S(n, (ce) => e(26, W = ce)), n);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => ne()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Q());
  let { componentContext: Ee } = r, { layoutParams: ve = void 0 } = r;
  Dr(Kr);
  let he = !1, Se, Z, et = !1, Je = !0, qe = !1, be = !1, Te = "0";
  function ue() {
    Ee.execAnyActions(Ee.json.on_load_actions);
  }
  function ge() {
    Ee.execAnyActions(Ee.json.on_error_actions);
  }
  return t.$$set = (ce) => {
    "componentContext" in ce && e(0, Ee = ce.componentContext), "layoutParams" in ce && e(1, ve = ce.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext*/
    1 && me(e(14, n = Ee.getDerivedFromVars(Ee.json.url))), t.$$.dirty & /*componentContext*/
    1 && M(e(13, o = Ee.getDerivedFromVars(Ee.json.html))), t.$$.dirty & /*componentContext*/
    1 && le(e(12, i = Ee.getDerivedFromVars(Ee.json.javascript_enabled))), t.$$.dirty & /*componentContext*/
    1 && de(e(11, s = Ee.getDerivedFromVars(Ee.json.allow_scrolling))), t.$$.dirty & /*componentContext*/
    1 && H(e(10, a = Ee.getDerivedFromVars(Ee.json.allow_navigation))), t.$$.dirty & /*componentContext*/
    1 && w(e(9, l = Ee.getDerivedFromVars(Ee.json.scale_to_fit))), t.$$.dirty & /*componentContext*/
    1 && h(e(8, u = Ee.getDerivedFromVars(Ee.json.aspect))), t.$$.dirty & /*$jsonUrl, $jsonHtml, url, html, componentContext*/
    100663309 && (e(2, Se = typeof W == "string" ? W : void 0), e(3, Z = typeof C == "string" ? C : void 0), !Se && !Z ? (e(5, he = !0), Ee.logError(Y(new Error('Missing "url" or "html" in "webview"')))) : e(5, he = !1)), t.$$.dirty & /*$jsonJsEnabled, javascriptEnabled*/
    16908288 && e(17, et = nn(T, et)), t.$$.dirty & /*$jsonAllowScrolling, allowScrolling*/
    8388624 && e(4, Je = nn(O, Je)), t.$$.dirty & /*$jsonAllowNavigation, allowNavigation*/
    4456448 && e(18, qe = nn(k, qe)), t.$$.dirty & /*$jsonScaleToFit, scaleToFit*/
    2621440 && e(19, be = nn(m, be)), t.$$.dirty & /*$jsonAspect*/
    1048576) {
      const ce = f == null ? void 0 : f.ratio;
      ce && zn(ce) ? e(6, Te = (100 / Number(ce)).toFixed(2)) : e(6, Te = "0");
    }
    t.$$.dirty & /*javascriptEnabled, allowNavigation*/
    393216 && e(7, c = [
      "allow-same-origin",
      ...et ? ["allow-scripts"] : [],
      ...qe ? ["allow-popups"] : []
    ].join(" "));
  }, [
    Ee,
    ve,
    Se,
    Z,
    Je,
    he,
    Te,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    n,
    ue,
    ge,
    et,
    qe,
    be,
    f,
    m,
    k,
    O,
    T,
    C,
    W
  ];
}
class i2 extends Or {
  constructor(r) {
    super(), Lr(this, r, o2, n2, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const xs = {
  "google-map__frame": "appkit-google-map__frame",
  "google-map__aspect-wrapper": "appkit-google-map__aspect-wrapper"
};
function s2(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function l2(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht("google-map", xs, {}),
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
        t[3] !== "0"
      ),
      $$slots: { default: [c2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*aspectPaddingBottom*/
      8 && (i.heightByAspect = /*aspectPaddingBottom*/
      n[3] !== "0"), o[0] & /*aspectPaddingBottom, iframeDoc, iframeEl*/
      56 | o[1] & /*$$scope*/
      256 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function a2(t) {
  let r;
  return {
    c() {
      r = Me("iframe"), g(r, "class", xs["google-map__frame"]), g(
        r,
        "srcdoc",
        /*iframeDoc*/
        t[4]
      ), g(r, "title", "Google Map"), g(r, "sandbox", "allow-scripts allow-same-origin");
    },
    m(e, n) {
      J(e, r, n), t[35](r);
    },
    p(e, n) {
      n[0] & /*iframeDoc*/
      16 && g(
        r,
        "srcdoc",
        /*iframeDoc*/
        e[4]
      );
    },
    d(e) {
      e && G(r), t[35](null);
    }
  };
}
function u2(t) {
  let r, e, n = `${/*aspectPaddingBottom*/
  t[3]}%`;
  return {
    c() {
      r = Me("div"), e = Me("iframe"), g(e, "class", xs["google-map__frame"]), g(
        e,
        "srcdoc",
        /*iframeDoc*/
        t[4]
      ), g(e, "title", "Google Map"), g(e, "sandbox", "allow-scripts allow-same-origin"), g(r, "class", xs["google-map__aspect-wrapper"]), F(r, "padding-bottom", n);
    },
    m(o, i) {
      J(o, r, i), bt(r, e), t[34](e);
    },
    p(o, i) {
      i[0] & /*iframeDoc*/
      16 && g(
        e,
        "srcdoc",
        /*iframeDoc*/
        o[4]
      ), i[0] & /*aspectPaddingBottom*/
      8 && n !== (n = `${/*aspectPaddingBottom*/
      o[3]}%`) && F(r, "padding-bottom", n);
    },
    d(o) {
      o && G(r), t[34](null);
    }
  };
}
function c2(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[3] !== "0" ? u2 : a2
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Qt();
    },
    m(i, s) {
      o.m(i, s), J(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && G(r), o.d(i);
    }
  };
}
function f2(t) {
  let r, e, n, o;
  const i = [l2, s2], s = [];
  function a(l, u) {
    return !/*hasError*/
    l[2] && /*iframeDoc*/
    l[4] ? 0 : 1;
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (sr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), lr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function ia(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function d2(t) {
  switch (t) {
    case "satellite":
      return "satellite";
    case "terrain":
      return "terrain";
    case "hybrid":
      return "hybrid";
    case "normal":
    default:
      return "roadmap";
  }
}
function _2(t) {
  return t.map((r, e) => {
    const n = Number(r.latitude) || 0, o = Number(r.longitude) || 0, i = r.title ? ia(String(r.title)) : "", s = r.color ? String(r.color) : "", a = r.on_click_actions && r.on_click_actions.length > 0;
    let l = "";
    s && (l = `,icon:{path:google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,fillColor:'${ia(s)}',fillOpacity:1,strokeColor:'#333',strokeWeight:1,scale:6,anchor:new google.maps.Point(0,0)}`);
    const u = a ? `m.addListener('click',function(){window.parent.postMessage({type:'marker_click',index:${e}},'*');});` : "";
    return `(function(){var m=new google.maps.Marker({position:{lat:${n},lng:${o}},map:map,title:'${i}'${l}});${u}})();`;
  }).join(`
`);
}
function p2(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m = j, p = () => (m(), m = S(_, (K) => e(24, h = K)), _), w, k = j, N = () => (k(), k = S(l, (K) => e(25, w = K)), l), H, O = j, ne = () => (O(), O = S(a, (K) => e(26, H = K)), a), de, T = j, X = () => (T(), T = S(f, (K) => e(27, de = K)), f), le, C = j, D = () => (C(), C = S(u, (K) => e(28, le = K)), u), M, W = j, Q = () => (W(), W = S(c, (K) => e(29, M = K)), c), me, Ee = j, ve = () => (Ee(), Ee = S(s, (K) => e(30, me = K)), s), he, Se = j, Z = () => (Se(), Se = S(i, (K) => e(31, he = K)), i), et, Je = j, qe = () => (Je(), Je = S(o, (K) => e(32, et = K)), o), be, Te = j, ue = () => (Te(), Te = S(n, (K) => e(33, be = K)), n);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => k()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => C()), t.$$.on_destroy.push(() => W()), t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => Se()), t.$$.on_destroy.push(() => Je()), t.$$.on_destroy.push(() => Te());
  let { componentContext: ge } = r, { layoutParams: ce = void 0 } = r;
  Dr(Kr);
  let re = !1, ae = "0", oe = 0, we = 0, Re = 10, Ge = "normal", ee = !0, Oe = !0, Ne, nt = [], at = "", tt, yt = !1;
  function rt(K) {
    if (!tt || K.source !== tt.contentWindow) return;
    const _e = K.data;
    if (!(!_e || typeof _e != "object")) {
      if (_e.type === "map_ready" && !yt)
        yt = !0, ge.execAnyActions(ge.json.on_ready_actions);
      else if (_e.type === "map_error")
        ge.execAnyActions(ge.json.on_error_actions);
      else if (_e.type === "marker_click" && typeof _e.index == "number") {
        const st = nt[_e.index];
        st != null && st.on_click_actions && ge.execAnyActions(st.on_click_actions);
      }
    }
  }
  Zn(() => {
    window.addEventListener("message", rt);
  }), sn(() => {
    window.removeEventListener("message", rt);
  });
  function Mt(K) {
    Vr[K ? "unshift" : "push"](() => {
      tt = K, e(5, tt);
    });
  }
  function ft(K) {
    Vr[K ? "unshift" : "push"](() => {
      tt = K, e(5, tt);
    });
  }
  return t.$$set = (K) => {
    "componentContext" in K && e(0, ge = K.componentContext), "layoutParams" in K && e(1, ce = K.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(15, n = ge.getDerivedFromVars(ge.json.latitude))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(14, o = ge.getDerivedFromVars(ge.json.longitude))), t.$$.dirty[0] & /*componentContext*/
    1 && Z(e(13, i = ge.getDerivedFromVars(ge.json.zoom))), t.$$.dirty[0] & /*componentContext*/
    1 && ve(e(12, s = ge.getDerivedFromVars(ge.json.map_type))), t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(11, a = ge.getDerivedFromVars(ge.json.allow_zoom))), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(10, l = ge.getDerivedFromVars(ge.json.allow_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && D(e(9, u = ge.getDerivedFromVars(ge.json.api_key))), t.$$.dirty[0] & /*componentContext*/
    1 && Q(e(8, c = ge.getDerivedFromVars(ge.json.api_key_web))), t.$$.dirty[0] & /*componentContext*/
    1 && X(e(7, f = ge.getDerivedFromVars(ge.json.markers))), t.$$.dirty[0] & /*componentContext*/
    1 && p(e(6, _ = ge.getDerivedFromVars(ge.json.aspect))), t.$$.dirty[0] & /*$jsonMapType, $jsonApiKeyWeb, $jsonApiKey, $jsonMarkers, resolvedApiKey, componentContext*/
    2017460225 | t.$$.dirty[1] & /*$jsonLatitude, $jsonLongitude, $jsonZoom*/
    7) {
      e(16, oe = typeof be == "number" ? be : 0), e(17, we = typeof et == "number" ? et : 0), e(18, Re = typeof he == "number" ? he : 10), e(19, Ge = typeof me == "string" ? me : "normal");
      const K = M, _e = le;
      e(22, Ne = typeof K == "string" ? K : typeof _e == "string" ? _e : void 0), e(23, nt = Array.isArray(de) ? de : []), Ne ? e(2, re = !1) : (e(2, re = !0), ge.logError(Y(new Error('Missing "api_key" or "api_key_web" in "google_map"'))));
    }
    if (t.$$.dirty[0] & /*$jsonAllowZoom, allowZoom*/
    68157440 && e(20, ee = nn(H, ee)), t.$$.dirty[0] & /*$jsonAllowScroll, allowScroll*/
    35651584 && e(21, Oe = nn(w, Oe)), t.$$.dirty[0] & /*$jsonAspect*/
    16777216) {
      const K = h == null ? void 0 : h.ratio;
      K && zn(K) ? e(3, ae = (100 / Number(K)).toFixed(2)) : e(3, ae = "0");
    }
    if (t.$$.dirty[0] & /*resolvedApiKey, resolvedMarkers, mapType, allowScroll, allowZoom, latitude, longitude, zoom*/
    16711680)
      if (Ne) {
        const K = _2(nt), _e = d2(Ge), st = Oe || ee ? "auto" : "none";
        e(4, at = `<!DOCTYPE html>
<html><head>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>html,body,#map{width:100%;height:100%;margin:0;padding:0;}</style>
</head><body>
<div id="map"></div>
<script>
function initMap(){
var map=new google.maps.Map(document.getElementById('map'),{
center:{lat:${oe},lng:${we}},
zoom:${Math.round(Re)},
mapTypeId:'${_e}',
gestureHandling:'${st}',
zoomControl:${ee},
scrollwheel:${Oe},
draggable:${Oe},
fullscreenControl:false,
streetViewControl:false
});
${K}
google.maps.event.addListenerOnce(map,'idle',function(){
window.parent.postMessage({type:'map_ready'},'*');
});
}
<\/script>
<script src="https://maps.googleapis.com/maps/api/js?key=${ia(Ne)}&callback=initMap" async defer
onerror="window.parent.postMessage({type:'map_error'},'*')"><\/script>
</body></html>`);
      } else
        e(4, at = "");
  }, [
    ge,
    ce,
    re,
    ae,
    at,
    tt,
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
    oe,
    we,
    Re,
    Ge,
    ee,
    Oe,
    Ne,
    nt,
    h,
    w,
    H,
    de,
    le,
    M,
    me,
    he,
    et,
    be,
    Mt,
    ft
  ];
}
class g2 extends Or {
  constructor(r) {
    super(), Lr(this, r, p2, f2, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
function Tf(t, r, e) {
  const n = t.slice();
  return n[11] = r[e], n;
}
function h2(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function m2(t) {
  let r, e;
  return r = new mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: { default: [b2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function Mf(t) {
  let r, e = [
    /*templateAttrs*/
    t[8]
  ], n = {};
  for (let o = 0; o < e.length; o += 1)
    n = jo(n, e[o]);
  return {
    c() {
      r = Me("template"), qo(r, n);
    },
    m(o, i) {
      J(o, r, i), r.content.innerHTML = /*templateContent*/
      t[7];
    },
    p(o, i) {
      i & /*templateContent*/
      128 && (r.content.innerHTML = /*templateContent*/
      o[7]), qo(r, n = No(e, [i & /*templateAttrs*/
      256 && /*templateAttrs*/
      o[8]]));
    },
    d(o) {
      o && G(r);
    }
  };
}
function Pf(t) {
  let r = (
    /*jsonItems*/
    t[5]
  ), e, n, o = zf(t);
  return {
    c() {
      o.c(), e = Qt();
    },
    m(i, s) {
      o.m(i, s), J(i, e, s), n = !0;
    },
    p(i, s) {
      s & /*jsonItems*/
      32 && Sr(r, r = /*jsonItems*/
      i[5]) ? (sr(), x(o, 1, 1, j), lr(), o = zf(i), o.c(), L(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
    },
    i(i) {
      n || (L(o), n = !0);
    },
    o(i) {
      x(o), n = !1;
    },
    d(i) {
      i && G(e), o.d(i);
    }
  };
}
function Nf(t) {
  let r, e;
  return r = new Jn({
    props: { componentContext: (
      /*item*/
      t[11]
    ) }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*items*/
      8 && (i.componentContext = /*item*/
      n[11]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function zf(t) {
  let r, e, n = ir(
    /*items*/
    t[3]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Nf(Tf(t, n, s));
  const i = (s) => x(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = Qt();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      J(s, r, a), e = !0;
    },
    p(s, a) {
      if (a & /*items*/
      8) {
        n = ir(
          /*items*/
          s[3]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = Tf(s, n, l);
          o[l] ? (o[l].p(u, a), L(o[l], 1)) : (o[l] = Nf(u), o[l].c(), L(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (sr(), l = n.length; l < o.length; l += 1)
          i(l);
        lr();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          L(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        x(o[a]);
      e = !1;
    },
    d(s) {
      s && G(r), on(o, s);
    }
  };
}
function zl(t) {
  let r, e, n, o = (
    /*templateContent*/
    t[7] && Mf(t)
  ), i = !/*hasItemsError*/
  t[4] && /*jsonItems*/
  t[5] && Pf(t), s = [
    /*componentContext*/
    t[0].json.custom_props || {}
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = jo(a, s[l]);
  return {
    c() {
      r = Me(
        /*desc*/
        t[2].element
      ), o && o.c(), e = gr(), i && i.c(), ei(
        /*desc*/
        t[2].element
      )(r, a);
    },
    m(l, u) {
      J(l, r, u), o && o.m(r, null), bt(r, e), i && i.m(r, null), t[9](r), n = !0;
    },
    p(l, u) {
      /*templateContent*/
      l[7] ? o ? o.p(l, u) : (o = Mf(l), o.c(), o.m(r, e)) : o && (o.d(1), o = null), !/*hasItemsError*/
      l[4] && /*jsonItems*/
      l[5] ? i ? (i.p(l, u), u & /*hasItemsError, jsonItems*/
      48 && L(i, 1)) : (i = Pf(l), i.c(), L(i, 1), i.m(r, null)) : i && (sr(), x(i, 1, 1, () => {
        i = null;
      }), lr()), ei(
        /*desc*/
        l[2].element
      )(r, a = No(s, [
        u & /*componentContext*/
        1 && /*componentContext*/
        (l[0].json.custom_props || {})
      ]));
    },
    i(l) {
      n || (L(i), n = !0);
    },
    o(l) {
      x(i), n = !1;
    },
    d(l) {
      l && G(r), o && o.d(), i && i.d(), t[9](null);
    }
  };
}
function b2(t) {
  let r = (
    /*desc*/
    t[2].element
  ), e, n = (
    /*desc*/
    t[2].element && zl(t)
  );
  return {
    c() {
      n && n.c(), e = Qt();
    },
    m(o, i) {
      n && n.m(o, i), J(o, e, i);
    },
    p(o, i) {
      /*desc*/
      o[2].element ? r ? Sr(
        r,
        /*desc*/
        o[2].element
      ) ? (n.d(1), n = zl(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = zl(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : r && (n.d(1), n = null, r = /*desc*/
      o[2].element);
    },
    i: j,
    o(o) {
      x(n, o);
    },
    d(o) {
      o && G(e), n && n.d(o);
    }
  };
}
function y2(t) {
  let r, e, n, o;
  const i = [m2, h2], s = [];
  function a(l, u) {
    return (
      /*desc*/
      l[2] ? 0 : 1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, [u]) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (sr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), lr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function w2(t, r, e) {
  let n, { componentContext: o } = r, { layoutParams: i = void 0 } = r;
  const s = Dr(Kr);
  let a, l = null, u = "", c = {}, f = [], _ = !1;
  Zn(() => {
    if (a && "divKitApiCallback" in a && typeof a.divKitApiCallback == "function") {
      const m = s.getExtensionContext(o);
      a.divKitApiCallback(m);
    }
  }), sn(() => {
    f.forEach((m) => {
      m.destroy();
    });
  });
  function h(m) {
    Vr[m ? "unshift" : "push"](() => {
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
          const p = s.getExtensionContext(o), w = /* @__PURE__ */ new Map();
          for (const [k, N] of p.variables)
            w.set(k, N.getValue());
          e(7, u = l.template({
            props: o.json.custom_props,
            variables: w
          }));
        } else l.template && typeof l.template == "string" ? e(7, u = l.template) : e(7, u = "");
        e(8, c = {
          shadowrootmode: l.shadowRootMode || "open"
        });
      } else
        e(2, l = null), e(7, u = ";"), o.logError(Y(new Error('Unknown or incorrect "custom_type" prop for div "custom"')));
    t.$$.dirty & /*componentContext*/
    1 && e(5, n = o.json.items), t.$$.dirty & /*jsonItems, componentContext*/
    33 && (n !== void 0 && !Array.isArray(n) ? (e(4, _ = !0), o.logError(Y(new Error('Incorrect "items" prop for div "custom"')))) : e(4, _ = !1)), t.$$.dirty & /*items, hasItemsError, jsonItems, componentContext*/
    57 && (f.forEach((p) => {
      p.destroy();
    }), e(3, f = (!_ && n || []).map((p, w) => o.produceChildContext(p, { path: w }))));
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
class k2 extends Or {
  constructor(r) {
    super(), Lr(this, r, w2, y2, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const v2 = "appkit-breadcrumb", j2 = "appkit-breadcrumb__list", C2 = "appkit-breadcrumb__item", E2 = "appkit-breadcrumb__label", A2 = "appkit-breadcrumb__label_link", S2 = "appkit-breadcrumb__separator", hi = {
  breadcrumb: v2,
  breadcrumb__list: j2,
  breadcrumb__item: C2,
  breadcrumb__label: E2,
  breadcrumb__label_link: A2,
  breadcrumb__separator: S2
};
function Lf(t, r, e) {
  const n = t.slice();
  return n[26] = r[e], n[28] = e, n;
}
function V2(t) {
  let r, e;
  return r = new Mn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function F2(t) {
  let r, e;
  return r = new mn({
    props: {
      cls: ht("breadcrumb", hi, {}),
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
      $$slots: { default: [T2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
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
      536870932 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function I2(t) {
  let r, e = (
    /*crumb*/
    t[26].title + ""
  ), n, o, i, s, a, l, u;
  function c(...f) {
    return (
      /*click_handler*/
      t[22](
        /*crumb*/
        t[26],
        ...f
      )
    );
  }
  return {
    c() {
      r = Me("a"), n = Gn(e), i = gr(), s = Me("span"), a = Gn(
        /*separator*/
        t[2]
      ), g(r, "class", hi.breadcrumb__label + " " + hi.breadcrumb__label_link), g(r, "href", o = Bf(
        /*crumb*/
        t[26]
      )), g(s, "class", hi.breadcrumb__separator), g(s, "aria-hidden", "true");
    },
    m(f, _) {
      J(f, r, _), bt(r, n), J(f, i, _), J(f, s, _), bt(s, a), l || (u = Qe(r, "click", c), l = !0);
    },
    p(f, _) {
      t = f, _ & /*crumbs*/
      16 && e !== (e = /*crumb*/
      t[26].title + "") && eo(n, e), _ & /*crumbs*/
      16 && o !== (o = Bf(
        /*crumb*/
        t[26]
      )) && g(r, "href", o), _ & /*separator*/
      4 && eo(
        a,
        /*separator*/
        t[2]
      );
    },
    d(f) {
      f && (G(r), G(i), G(s)), l = !1, u();
    }
  };
}
function D2(t) {
  let r, e = (
    /*crumb*/
    t[26].title + ""
  ), n;
  return {
    c() {
      r = Me("span"), n = Gn(e), g(r, "class", hi.breadcrumb__label), g(r, "aria-current", "page");
    },
    m(o, i) {
      J(o, r, i), bt(r, n);
    },
    p(o, i) {
      i & /*crumbs*/
      16 && e !== (e = /*crumb*/
      o[26].title + "") && eo(n, e);
    },
    d(o) {
      o && G(r);
    }
  };
}
function Of(t) {
  let r, e;
  function n(s, a) {
    return (
      /*index*/
      s[28] === /*crumbs*/
      s[4].length - 1 ? D2 : I2
    );
  }
  let o = n(t), i = o(t);
  return {
    c() {
      r = Me("li"), i.c(), e = gr(), g(r, "class", hi.breadcrumb__item);
    },
    m(s, a) {
      J(s, r, a), i.m(r, null), bt(r, e);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, e)));
    },
    d(s) {
      s && G(r), i.d();
    }
  };
}
function T2(t) {
  let r, e, n = ir(
    /*crumbs*/
    t[4]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Of(Lf(t, n, i));
  return {
    c() {
      r = Me("nav"), e = Me("ol");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(e, "class", hi.breadcrumb__list), g(r, "aria-label", "breadcrumb");
    },
    m(i, s) {
      J(i, r, s), bt(r, e);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(e, null);
    },
    p(i, s) {
      if (s & /*crumbs, separator, getHref, handleCrumbClick*/
      2068) {
        n = ir(
          /*crumbs*/
          i[4]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Lf(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Of(l), o[a].c(), o[a].m(e, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && G(r), on(o, i);
    }
  };
}
function M2(t) {
  let r, e, n, o;
  const i = [F2, V2], s = [];
  function a(l, u) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Qt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, [u]) {
      e && e.p(l, u);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Bf(t) {
  var r;
  return (r = t.action) != null && r.url && !t.action.url.startsWith("div-action://") ? t.action.url : "#";
}
function P2(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h = j, m = () => (h(), h = S(u, (Te) => e(16, _ = Te)), u), p, w = j, k = () => (w(), w = S(l, (Te) => e(17, p = Te)), l), N, H = j, O = () => (H(), H = S(a, (Te) => e(18, N = Te)), a), ne, de = j, T = () => (de(), de = S(s, (Te) => e(19, ne = Te)), s), X, le = j, C = () => (le(), le = S(i, (Te) => e(20, X = Te)), i), D, M = j, W = () => (M(), M = S(o, (Te) => e(21, D = Te)), o);
  t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => H()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => le()), t.$$.on_destroy.push(() => M());
  let { componentContext: Q } = r, { layoutParams: me = void 0 } = r;
  const Ee = Dr(Kr);
  let ve = "/", he = "#0077CC", Se = "#111111", Z = 14;
  function et() {
    e(2, ve = "/"), e(12, he = "#0077CC"), e(13, Se = "#111111"), e(14, Z = 14);
  }
  function Je(Te, ue) {
    const ge = Q.json.item_builder;
    if (ge && Array.isArray(ue) && Array.isArray(ge.prototypes)) {
      const ce = [];
      return ue.forEach((re, ae) => {
        if (re === null || typeof re != "object")
          return;
        const oe = Ee.preparePrototypeVariables(ge.data_element_name || "it", re, ae);
        for (let we = 0; we < ge.prototypes.length; ++we) {
          const Re = ge.prototypes[we];
          if (!Re.title || Re.selector !== void 0 && !Q.getJsonWithVars(Re.selector, oe))
            continue;
          const ee = { title: Q.getJsonWithVars(Re.title, oe) };
          if (Re.action) {
            const Oe = Q.getJsonWithVars(Re.action, oe);
            Oe && (ee.action = Oe);
          }
          ce.push(ee);
          break;
        }
      }), ce;
    }
    return Array.isArray(Te) ? Te : Q.json.crumbs || [];
  }
  function qe(Te, ue) {
    ue.action && (Te.preventDefault(), Q.execAnyActions([ue.action]));
  }
  const be = (Te, ue) => qe(ue, Te);
  return t.$$set = (Te) => {
    "componentContext" in Te && e(0, Q = Te.componentContext), "layoutParams" in Te && e(1, me = Te.layoutParams);
  }, t.$$.update = () => {
    var Te, ue, ge;
    t.$$.dirty & /*componentContext*/
    1 && e(15, n = Q.origJson), t.$$.dirty & /*origJson*/
    32768 && n && et(), t.$$.dirty & /*componentContext*/
    1 && W(e(10, o = Q.getDerivedFromVars(Q.json.separator))), t.$$.dirty & /*componentContext*/
    1 && C(e(9, i = Q.getDerivedFromVars(Q.json.item_text_color))), t.$$.dirty & /*componentContext*/
    1 && T(e(8, s = Q.getDerivedFromVars(Q.json.active_text_color))), t.$$.dirty & /*componentContext*/
    1 && O(e(7, a = Q.getDerivedFromVars(Q.json.item_font_size))), t.$$.dirty & /*componentContext*/
    1 && k(e(6, l = Q.getDerivedFromVars(Q.json.crumbs))), t.$$.dirty & /*componentContext*/
    1 && m(e(5, u = typeof ((Te = Q.json.item_builder) == null ? void 0 : Te.data) == "string" ? Q.getDerivedFromVars((ue = Q.json.item_builder) == null ? void 0 : ue.data, void 0, !0) : (ge = Q.json.item_builder) != null && ge.data ? Jo(Q.json.item_builder.data) : void 0)), t.$$.dirty & /*$jsonSeparator, separator*/
    2097156 && e(2, ve = typeof D == "string" && D.length > 0 ? D : ve), t.$$.dirty & /*$jsonItemTextColor, itemTextColor*/
    1052672 && e(12, he = pr(X, 1, he)), t.$$.dirty & /*$jsonActiveTextColor, activeTextColor*/
    532480 && e(13, Se = pr(ne, 1, Se)), t.$$.dirty & /*$jsonItemFontSize, itemFontSize*/
    278528 && e(14, Z = Un(N, Z)), t.$$.dirty & /*$jsonCrumbs, $jsonItemBuilderData*/
    196608 && e(4, c = Je(p, _)), t.$$.dirty & /*itemTextColor, activeTextColor, itemFontSize*/
    28672 && e(3, f = {
      "--divkit-breadcrumb-item-color": he,
      "--divkit-breadcrumb-active-color": Se,
      "--divkit-breadcrumb-font-size": pe(Z)
    });
  }, [
    Q,
    me,
    ve,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    qe,
    he,
    Se,
    Z,
    n,
    _,
    p,
    N,
    ne,
    X,
    D,
    be
  ];
}
class N2 extends Or {
  constructor(r) {
    super(), Lr(this, r, P2, M2, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const u_ = {
  text: S0,
  container: c1,
  separator: b1,
  image: uc,
  gif: uc,
  grid: q1,
  gallery: hb,
  tabs: Jb,
  state: gy,
  pager: Oy,
  indicator: xy,
  slider: pw,
  input: Hw,
  select: Qw,
  video: _k,
  switch: Ek,
  checkbox: Lk,
  radio: rv,
  progress: _v,
  table: Bv,
  counter: Zv,
  webview: i2,
  google_map: g2,
  custom: k2,
  breadcrumb: N2
};
function Rf(t) {
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
  return o && (r = pu(o, i(t))), {
    c() {
      r && Lt(r.$$.fragment), e = Qt();
    },
    m(s, a) {
      r && Pt(r, s, a), J(s, e, a), n = !0;
    },
    p(s, a) {
      if (a & /*component*/
      4 && o !== (o = /*component*/
      s[2])) {
        if (r) {
          sr();
          const l = r;
          x(l.$$.fragment, 1, 0, () => {
            Nt(l, 1);
          }), lr();
        }
        o ? (r = pu(o, i(s)), Lt(r.$$.fragment), L(r.$$.fragment, 1), Pt(r, e.parentNode, e)) : r = null;
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
      n || (r && L(r.$$.fragment, s), n = !0);
    },
    o(s) {
      r && x(r.$$.fragment, s), n = !1;
    },
    d(s) {
      s && G(e), r && Nt(r, s);
    }
  };
}
function z2(t) {
  let r, e, n = (
    /*component*/
    t[2] && Rf(t)
  );
  return {
    c() {
      n && n.c(), r = Qt();
    },
    m(o, i) {
      n && n.m(o, i), J(o, r, i), e = !0;
    },
    p(o, [i]) {
      /*component*/
      o[2] ? n ? (n.p(o, i), i & /*component*/
      4 && L(n, 1)) : (n = Rf(o), n.c(), L(n, 1), n.m(r.parentNode, r)) : n && (sr(), x(n, 1, 1, () => {
        n = null;
      }), lr());
    },
    i(o) {
      e || (L(n), e = !0);
    },
    o(o) {
      x(n), e = !1;
    },
    d(o) {
      o && G(r), n && n.d(o);
    }
  };
}
function L2(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r;
  const i = Dr(Kr);
  let s;
  return t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext, component*/
    5) {
      const a = n.json;
      if (e(2, s = (a == null ? void 0 : a.type) && u_[a.type] || void 0), !s) {
        let l;
        a != null && a.type && i.hasTemplate(a.type) ? l = "Recursive template" : l = "Unknown component", n.logError(Y(new Error(l), {
          additional: {
            component: (a == null ? void 0 : a.type) || "<missing>"
          }
        }));
      }
    }
  }, [n, o, s];
}
class Jn extends Or {
  constructor(r) {
    super(), Lr(this, r, L2, z2, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const O2 = {
  "root-svg-filters": "appkit-root-svg-filters"
};
function Hf(t, r, e) {
  const n = t.slice();
  n[1] = r[e];
  const o = (
    /*filterKey*/
    n[1].split(":")
  );
  return n[2] = o[0], n[3] = o[1], n;
}
function Wf(t) {
  let r, e, n = ir([...Object.keys(
    /*svgFiltersMap*/
    t[0]
  )]), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Uf(Hf(t, n, i));
  return {
    c() {
      r = en("svg"), e = en("defs");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", O2["root-svg-filters"]), g(r, "aria-hidden", "true");
    },
    m(i, s) {
      J(i, r, s), bt(r, e);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(e, null);
    },
    p(i, s) {
      if (s & /*svgFiltersMap, Object*/
      1) {
        n = ir([...Object.keys(
          /*svgFiltersMap*/
          i[0]
        )]);
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Hf(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Uf(l), o[a].c(), o[a].m(e, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && G(r), on(o, i);
    }
  };
}
function B2(t) {
  let r, e;
  return {
    c() {
      r = en("feBlend"), g(r, "in2", "SourceGraphic"), g(r, "mode", e = /*filterMode*/
      t[3]);
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o & /*svgFiltersMap*/
      1 && e !== (e = /*filterMode*/
      n[3]) && g(r, "mode", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function R2(t) {
  let r;
  return {
    c() {
      r = en("feComposite"), g(r, "in2", "SourceGraphic"), g(r, "operator", "arithmetic"), g(r, "k1", "1"), g(r, "k2", "0"), g(r, "k3", "0"), g(r, "k4", "0");
    },
    m(e, n) {
      J(e, r, n);
    },
    p: j,
    d(e) {
      e && G(r);
    }
  };
}
function H2(t) {
  let r, e;
  return {
    c() {
      r = en("feComposite"), g(r, "in2", "SourceGraphic"), g(r, "operator", e = /*filterMode*/
      t[3].split("_")[1]);
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o & /*svgFiltersMap*/
      1 && e !== (e = /*filterMode*/
      n[3].split("_")[1]) && g(r, "operator", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Uf(t) {
  let r, e, n, o;
  function i(l, u) {
    return (
      /*filterMode*/
      l[3] === "source_in" || /*filterMode*/
      l[3] === "source_atop" ? H2 : (
        /*filterMode*/
        l[3] === "multiply" ? R2 : B2
      )
    );
  }
  let s = i(t), a = s(t);
  return {
    c() {
      r = en("filter"), e = en("feFlood"), a.c(), g(e, "flood-color", n = /*filterColor*/
      t[2]), g(r, "id", o = /*svgFiltersMap*/
      t[0][
        /*filterKey*/
        t[1]
      ]);
    },
    m(l, u) {
      J(l, r, u), bt(r, e), a.m(r, null);
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
      l && G(r), a.d();
    }
  };
}
function W2(t) {
  let r = Object.keys(
    /*svgFiltersMap*/
    t[0]
  ).length, e, n = r && Wf(t);
  return {
    c() {
      n && n.c(), e = Qt();
    },
    m(o, i) {
      n && n.m(o, i), J(o, e, i);
    },
    p(o, [i]) {
      i & /*svgFiltersMap*/
      1 && (r = Object.keys(
        /*svgFiltersMap*/
        o[0]
      ).length), r ? n ? n.p(o, i) : (n = Wf(o), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: j,
    o: j,
    d(o) {
      o && G(e), n && n.d(o);
    }
  };
}
function U2(t, r, e) {
  let { svgFiltersMap: n } = r;
  return t.$$set = (o) => {
    "svgFiltersMap" in o && e(0, n = o.svgFiltersMap);
  }, [n];
}
class G2 extends Or {
  constructor(r) {
    super(), Lr(this, r, U2, W2, Sr, { svgFiltersMap: 0 });
  }
}
function J2(t, r, e, n) {
  const o = e[t.type];
  if (!o)
    return n(Y(new Error("No such template"), {
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
      const p = c[m], w = s[p];
      if (w !== void 0) {
        const k = m.substring(1);
        u[k] = w;
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
const q2 = 128, Ii = /* @__PURE__ */ new Map();
let Gf;
function c_(t) {
  return Ii.get(t);
}
function f_(t, r) {
  t !== Gf && (Ii.delete(t), Ii.size >= q2 && Ii.delete(Ii.keys().next().value), Ii.set(t, r), Gf = t);
}
const Jf = /* @__PURE__ */ new Set([
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
function K2(t) {
  if (!(typeof t.name == "string" && t.name))
    throw new Error("Incorrect function name");
  if (!(typeof t.body == "string" && t.body))
    throw new Error("Incorrect function body");
  if (!(t.return_type && Jf.has(t.return_type)))
    throw new Error("Incorrect function return_type");
  if (!Array.isArray(t.arguments))
    throw new Error("Incorrect function arguments");
  const r = /* @__PURE__ */ new Set();
  t.arguments.forEach((e) => {
    if (!(typeof e.name == "string" && e.name))
      throw new Error("Incorrect argument name");
    if (!(e.type && Jf.has(e.type)))
      throw new Error("Incorrect argument type");
    if (r.has(e.name))
      throw new Error("Duplicate argument name");
    r.add(e.name);
  });
}
function Y2(t) {
  let r;
  return {
    name: t.name,
    args: t.arguments.map((e) => ({
      type: e.type
    })),
    cb(e, ...n) {
      r || (r = c_(t.body) || tl(t.body, {
        startRule: "JsonStringContents"
      }), f_(t.body, r));
      const o = /* @__PURE__ */ new Map();
      n.forEach((a, l) => {
        if (a.type === "function")
          throw new Error("Incorrect argument type: function");
        const u = Os(t.arguments[l].name, a.type, a.value);
        o.set(u.getName(), u);
      });
      const i = gl(o, e.customFunctions, e.store, r, {
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
function X2(t, r) {
  if (!t)
    return r || void 0;
  if (!r)
    return t || void 0;
  const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
  for (const [o, i] of r) {
    for (const s of i) {
      const a = Pa(o, s);
      n.add(a);
    }
    e.set(o, i);
  }
  for (const [o, i] of t)
    for (const s of i) {
      const a = Pa(o, s);
      if (!n.has(a)) {
        n.add(a);
        const l = e.get(o) || [];
        l.push(s), e.set(o, l);
      }
    }
  return e;
}
function Z2(t) {
  if (!t)
    return Y(new Error("Missing object"));
  const r = t.card, e = t.templates || {};
  if (!r)
    return Y(new Error("Missing card"));
  if (!r.states || !r.states.length)
    return Y(new Error("Missing states"));
  for (const n in e)
    if (e.hasOwnProperty(n) && n in u_)
      return Y(new Error("Template name collision"), {
        additional: {
          templateName: n
        }
      });
  for (let n = 0; n < r.states.length; ++n) {
    if (!r.states[n].div)
      return Y(new Error("Missing state div"), {
        additional: {
          stateId: r.states[n].state_id
        }
      });
    if (typeof r.states[n].state_id != "number")
      return Y(new Error("Missing state_id"), {
        additional: {
          index: n
        }
      });
  }
  return null;
}
function Q2(t) {
  return [...new Set(t)];
}
class d_ {
  constructor(r, e) {
    Ar(this, "ast");
    Ar(this, "expr");
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
      a = gl(r, e, o, this.ast, {
        weekStartDay: i
      }), a.warnings.forEach(n);
      const u = a.result;
      if (u.type === "error")
        return n(Y(new Error("Expression execution error"), {
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
          result: fd(c),
          usedVars: a.usedVars
        };
      if (u.type === "boolean")
        return {
          result: !!c,
          usedVars: a.usedVars
        };
      if (u.type === "color") {
        const f = fo(String(c));
        if (f)
          return {
            result: Ei(f),
            usedVars: a.usedVars
          };
        n(Y(new Error("Expression execution error")));
      }
      if (u.type === "integer")
        return c > M_ || c < P_ ? (n(Y(new Error("Expression result is out of 32-bit int range"))), {
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
          return n(Y(new Error(`Failed to stringify ${u.type}`))), {
            result: `<${u.type}>`,
            usedVars: a.usedVars
          };
        }
      return {
        result: c,
        usedVars: a.usedVars
      };
    } catch {
      return n(Y(new Error("Expression execution error"), {
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
function x2(t) {
  return t.indexOf("@{") > -1 || t.indexOf("\\") > -1;
}
function sa(t, r, e, n) {
  if (t)
    if (typeof t == "string") {
      if (x2(t)) {
        r.hasExpression = !0;
        try {
          const o = c_(t) || tl(t, {
            startRule: "JsonStringContents"
          });
          f_(t, o);
          const i = R_(o);
          return r.vars.push(...i), new d_(o, t);
        } catch {
          e(Y(new Error("Unable to parse expression"), {
            additional: {
              expression: t
            }
          }));
          return;
        }
      }
    } else {
      if (Array.isArray(t) && n > 0)
        return t.map((o) => sa(o, r, e, n - 1));
      if (typeof t == "object" && n > 0) {
        const o = {};
        for (const i in t)
          o[i] = sa(t[i], r, e, n - 1);
        return o;
      }
    }
  return t;
}
function la(t, r) {
  if (t) {
    if (t instanceof d_)
      return t.apply(r);
    if (Array.isArray(t)) {
      let e;
      return {
        result: t.map((o) => {
          const i = la(o, r);
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
        const i = la(t[o], r);
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
function qf(t, r, e, n, o = 1 / 0) {
  const i = {
    vars: [],
    hasExpression: !1
  }, s = sa(t, i, r, o);
  return {
    vars: Q2(i.vars),
    hasExpression: i.hasExpression,
    applyVars(l, u, c) {
      return la(s, {
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
class __ {
  constructor() {
    Ar(this, "_vars", /* @__PURE__ */ new Map());
    Ar(this, "_lastAddedVariable", Do(""));
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
function e4() {
  return new __();
}
const $2 = ["start", "stop", "pause", "resume", "cancel", "reset"], e3 = new Set($2);
class t3 {
  constructor(r) {
    Ar(this, "timers", /* @__PURE__ */ new Map());
    Ar(this, "logError");
    Ar(this, "applyVars");
    Ar(this, "hasVariableWithType");
    Ar(this, "setVariableValue");
    Ar(this, "execAnyActions");
    Ar(this, "visibilityHandler");
    Ar(this, "awaitActions", []);
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
      this.logError(Y(new Error("Missing timer id")));
      return;
    }
    if (!(r.duration || r.tick_interval && (r.value_variable || r.tick_actions))) {
      this.logError(Y(new Error("Misconfigured timer"), {
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
    if (!r || !e || !this.timers.has(r) || !e3.has(e)) {
      this.logError(Y(new Error("Incorrect timer action"), {
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
      this.logError(Y(new Error("The timer is already running")));
      return;
    } else if (r.state === "paused") {
      this.logError(Y(new Error("The timer is paused")));
      return;
    }
    const e = r.definition.value_variable;
    if (e && !this.hasVariableWithType(e, "integer")) {
      this.logError(Y(new Error("Cannot find variable"), {
        additional: {
          name: e
        }
      }));
      return;
    }
    if (e && this.setVariableValue(e, 0), r.definition.duration !== void 0 && (r.duration = this.applyVarsInt(r.definition.duration), r.duration === void 0 || r.duration < 0)) {
      this.logError(Y(new Error("Incorrect timer properties"), {
        additional: {
          id: r.definition.id
        }
      }));
      return;
    }
    if (r.definition.tick_interval !== void 0 && (r.tick = this.applyVarsInt(r.definition.tick_interval), r.tick === void 0 || r.tick <= 0)) {
      this.logError(Y(new Error("Incorrect timer properties"), {
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
      this.logError(Y(new Error("The timer has already been stopped")));
      return;
    }
    r.state = "stopped", r.durationPassed = 0, r.tickPassed = 0, this.stopTimerTimeouts(r), this.callActions(r, "end");
  }
  pause(r) {
    if (r.state === "stopped") {
      this.logError(Y(new Error("The timer has already been stopped")));
      return;
    } else if (r.state === "paused") {
      this.logError(Y(new Error("The timer has already been paused")));
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
      this.logError(Y(new Error("The timer has already been stopped")));
      return;
    } else if (r.state === "running") {
      this.logError(Y(new Error("The timer is already running")));
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
function r3(t, r, e, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number" && i !== void 0) {
    e(Y(new Error("Incorrect array_insert_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Aa(t, r, e, n, (a) => {
    const l = a.getValue();
    if (typeof i == "number" && (i < 0 || i > l.length))
      e(Y(new Error(`Index out of bound for mutation ${n.type}`), {
        additional: {
          name: o,
          index: i,
          length: l.length
        }
      }));
    else if (!s.type)
      e(Y(new Error("Incorrect value type"), {
        additional: {
          name: o
        }
      }));
    else {
      const u = l.slice(), c = ol(s);
      typeof i == "number" ? u.splice(i, 0, c) : u.push(c), a.setValue(u);
    }
  });
}
function n3(t, r, e, n) {
  const { variable_name: o, index: i } = n;
  if (typeof i != "number") {
    e(Y(new Error("Incorrect array_remove_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Aa(t, r, e, n, (s) => {
    const a = s.getValue();
    if (typeof i == "number" && (i < 0 || i >= a.length))
      e(Y(new Error(`Index out of bound for mutation ${n.type}`), {
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
function o3(t, r, e, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number") {
    e(Y(new Error("Incorrect array_set_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Aa(t, r, e, n, (a) => {
    const l = a.getValue();
    if (typeof i == "number" && (i < 0 || i >= l.length))
      e(Y(new Error(`Index out of bound for mutation ${n.type}`), {
        additional: {
          name: o,
          index: i,
          length: l.length
        }
      }));
    else if (!s.type)
      e(Y(new Error("Incorrect value type"), {
        additional: {
          name: o
        }
      }));
    else {
      const u = l.slice();
      u[i] = ol(s), a.setValue(u);
    }
  });
}
function Aa(t, r, e, n, o) {
  const { variable_name: i } = n;
  if (!i) {
    e(Y(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: i
      }
    }));
    return;
  }
  const s = (t == null ? void 0 : t.getVariable(i)) || r.get(i);
  if (!s) {
    e(Y(new Error("Cannot find variable"), {
      additional: {
        name: i
      }
    }));
    return;
  }
  const a = s.getType();
  a === "array" ? o(s) : e(Y(new Error("Trying to insert value into the non-array"), {
    additional: {
      name: i,
      type: a
    }
  }));
}
function i3(t, r, e, n) {
  const { variable_name: o, key: i, value: s } = n;
  if (typeof i != "string") {
    e(Y(new Error("Incorrect dict_set_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  if (!o) {
    e(Y(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  s && !s.type && e(Y(new Error("Incorrect value type"), {
    additional: {
      name: o
    }
  }));
  const a = (t == null ? void 0 : t.getVariable(o)) || r.get(o);
  if (!a) {
    e(Y(new Error("Cannot find variable"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  const l = a.getType();
  if (l === "dict") {
    const c = { ...a.getValue() };
    s ? c[i] = ol(s) : delete c[i], a.setValue(c);
  } else
    e(Y(new Error("Trying to set value into the non-dict"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function s3(t, r) {
  if (!(r.content && (r.content.type === "text" || r.content.type === "url") && typeof r.content.value == "string")) {
    t(Y(new Error("Incorrect action"), {
      additional: {
        action: r
      }
    }));
    return;
  }
  if (!(typeof navigator < "u" && "clipboard" in navigator && navigator.clipboard && "writeText" in navigator.clipboard && typeof navigator.clipboard.writeText == "function")) {
    t(Y(new Error("Clipboard is unavailable"), {
      additional: {
        action: r
      }
    }));
    return;
  }
  navigator.clipboard.writeText(r.content.value).catch((e) => {
    t(Y(new Error("Failed to copy to the clipboard"), {
      additional: {
        originalError: String(e)
      }
    }));
  });
}
function l3(t) {
  if (t === "normal" || t === "reverse" || t === "alternate" || t === "alternate_reverse")
    return t;
}
function a3(t, r, e, n) {
  var H, O, ne, de;
  const o = Un(t.duration, 0);
  if (!o || t.type !== "color_animator" && t.type !== "number_animator")
    return;
  const i = (H = t.start_value_typed ? t.start_value_typed.value : t.start_value) != null ? H : r.getValue(), s = t.end_value_typed ? t.end_value_typed.value : t.end_value;
  if (i === void 0 || s === void 0 || t.type === "color_animator" && (typeof i != "string" && i !== void 0 || typeof s != "string") || t.type === "number_animator" && (typeof i != "number" && i !== void 0 || typeof s != "number"))
    return;
  const a = t.type === "color_animator" && fo(i), l = t.type === "color_animator" && fo(s);
  if (t.type === "color_animator" && (!a || !l))
    return;
  const u = tn(t.start_delay, 0), c = Ca(t.interpolator || "linear"), f = l3(t.direction) || "normal", _ = ((O = t.repeat_count) == null ? void 0 : O.type) === "infinity" ? 1 / 0 : ((ne = t.repeat_count) == null ? void 0 : ne.type) === "fixed" ? tn((de = t.repeat_count) == null ? void 0 : de.value, 1) : 1;
  let h = 0, m = performance.now();
  const p = _ === 1 / 0 ? 1 / 0 : _ * o + u;
  function w(T) {
    if (t.type === "color_animator") {
      if (!a || !l)
        throw new Error("Missing start/end value");
      return Ei({
        a: Fo(Uo(a.a, l.a, T), 0, 255),
        r: Fo(Uo(a.r, l.r, T), 0, 255),
        g: Fo(Uo(a.g, l.g, T), 0, 255),
        b: Fo(Uo(a.b, l.b, T), 0, 255)
      });
    }
    return Uo(i, s, T);
  }
  function k(T) {
    const X = T - m;
    if (m = T, h += X, h >= u) {
      let le = Math.floor((h - u) / o), C = (h - u - le * o) / o;
      le >= _ && (le = _ - 1, C = 1);
      let D;
      f === "normal" || f === "alternate" && le % 2 === 0 || f === "alternate_reverse" && le % 2 === 1 ? D = "normal" : D = "reverse", D === "reverse" && (C = 1 - C);
      const M = w(c(C));
      r.setValue(M);
    }
    h < p ? N = requestAnimationFrame(k) : (e(), n(t.end_actions));
  }
  let N = requestAnimationFrame(k);
  return {
    stop() {
      cancelAnimationFrame(N), n(t.cancel_actions), n(t.end_actions);
    }
  };
}
function u3(t) {
  let r = t;
  for (; r && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function c3(t) {
  let r = t;
  for (; r != null && r.parent && r.json.type !== "state" && !r.isRootState && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function $s(t) {
  return !!(t && typeof t == "string");
}
const f3 = /* @__PURE__ */ new Set([
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "head",
  "options"
]);
function d3(t) {
  return t === void 0 || f3.has(t);
}
function _3(t) {
  return t === void 0 || Array.isArray(t) && t.every((r) => $s(r.name) && $s(r.value));
}
function p3(t) {
  var r, e, n;
  return $s(t.container_id) && $s((r = t.request) == null ? void 0 : r.url) && d3((e = t.request) == null ? void 0 : e.method) && _3((n = t.request) == null ? void 0 : n.headers);
}
function g3(t, r, e, n) {
  const { variable_name: o, path: i, value: s } = n;
  if (!(s != null && s.value)) {
    e(Y(new Error("Missing value for an action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  if (typeof i != "string" || !i || i.charAt(0) === "/" || i.charAt(i.length - 1) === "/") {
    e(Y(new Error(`Value '${i}' for key 'path' is not valid`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  if (!o) {
    e(Y(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  const a = (t == null ? void 0 : t.getVariable(o)) || r.get(o);
  if (!a) {
    e(Y(new Error("Cannot find variable"), {
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
      e(Y(new Error(`Value '${i}' for key 'path' is not valid`), {
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
        e(Y(new Error("Path is empty"), {
          additional: {
            name: o,
            type: l,
            path: i
          }
        }));
        return;
      }
      if (!h || typeof h != "object") {
        e(Y(new Error(`Element with path '${f.slice(0, m).join("/")}' is not ${h === void 0 ? "found" : "a structure"}`), {
          additional: {
            name: o,
            type: l,
            path: i
          }
        }));
        return;
      }
      if (Array.isArray(h)) {
        const w = Number(p);
        if (Number.isNaN(w)) {
          e(Y(new Error(`Unable to use '${p}' as array index`), {
            additional: {
              name: o,
              type: l,
              path: i
            }
          }));
          return;
        }
        if (m + 1 === f.length && (w < 0 || w > h.length)) {
          e(Y(new Error(`Position '${w}' is out of array bounds`), {
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
    h[f[f.length - 1]] = ol(s), a.setValue(_);
  } else
    e(Y(new Error("Action requires array or dictionary variable"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function Kf(t, { delay: r = 0, duration: e = 400, easing: n = r_, x: o = 0, y: i = 0, opacity: s = 0 } = {}) {
  const a = getComputedStyle(t), l = +a.opacity, u = a.transform === "none" ? "" : a.transform, c = l * (1 - s), [f, _] = fu(o), [h, m] = fu(i);
  return {
    delay: r,
    duration: e,
    easing: n,
    css: (p, w) => `
			transform: ${u} translate(${(1 - p) * f}${_}, ${(1 - p) * h}${m});
			opacity: ${l - c * w}`
  };
}
const h3 = "appkit-outer", m3 = "appkit-root__clickable", b3 = "undefined", y3 = "appkit-tooltip", w3 = "appkit-tooltip_visible", k3 = "appkit-tooltip_modal", v3 = "appkit-tooltip__inner", j3 = "appkit-tooltip__overlay", C3 = "appkit-tooltip__substrate", vo = {
  outer: h3,
  root__clickable: m3,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  root__selectable: b3,
  tooltip: y3,
  tooltip_visible: w3,
  tooltip_modal: k3,
  tooltip__inner: v3,
  tooltip__overlay: j3,
  tooltip__substrate: C3
}, p_ = 300, g_ = 0;
function aa(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || p_) + (Number(r.start_delay) || g_)
  ));
}
function el(t, {
  animations: r,
  direction: e
}) {
  if (!r)
    return {};
  const n = us(r), o = aa(n);
  return n.some((s) => s.name === "no_animation") ? {} : {
    duration: Li() ? 0 : o,
    css: (s) => {
      const a = s * o, l = n.map((p) => {
        var ne, de, T, X, le, C, D, M, W, Q, me, Ee;
        const w = Number(p.start_delay) || g_, k = Number(p.duration) || p_, N = e === "in" ? Math.max(0, Math.min(1, (a - w) / k)) : Math.max(0, Math.min(1, (a - (o - k) + w) / k)), O = (Ca(p.interpolator || "ease_in_out") || vl)(N);
        if (p.name === "fade") {
          const ve = e === "in" ? (ne = p.start_value) != null ? ne : 0 : (de = p.end_value) != null ? de : 0, he = e === "in" ? (T = p.end_value) != null ? T : 1 : (X = p.start_value) != null ? X : 1;
          return {
            active: O > 0 && O < 1,
            opacity: (1 - O) * ve + O * he
          };
        } else if (p.name === "translate") {
          const ve = -(e === "in" ? (le = p.start_value) != null ? le : 10 : (C = p.end_value) != null ? C : 10), he = -(e === "in" ? (D = p.end_value) != null ? D : 0 : (M = p.start_value) != null ? M : 0);
          return {
            active: O > 0 && O < 1,
            translate: `translateY(${(1 - O) * ve + O * he}${e === "in" && p.start_value !== void 0 || e === "out" && p.end_value !== void 0 ? "%" : "px"})`
          };
        } else if (p.name === "scale") {
          const ve = e === "in" ? (W = p.start_value) != null ? W : 0 : (Q = p.end_value) != null ? Q : 0, he = e === "in" ? (me = p.end_value) != null ? me : 1 : (Ee = p.start_value) != null ? Ee : 1;
          return {
            active: O > 0 && O < 1,
            scale: `scale(${(1 - O) * ve + O * he})`
          };
        }
        return {};
      }), u = l.map((p) => p.opacity).filter((p) => p !== void 0).reduce((p, w) => p * w, 1), c = l.map((p) => p.translate).filter((p) => p !== void 0).join(" "), f = l.map((p) => p.scale).filter((p) => p !== void 0).join(" "), _ = l.filter((p) => p.active).map((p) => p.scale).filter((p) => p !== void 0), h = _.length ? _[_.length - 1] : f;
      return `transform:${[c, h].filter(Boolean).join(" ") || "none"};opacity:${u}`;
    }
  };
}
const ts = typeof window < "u" && "HTMLDialogElement" in window, { document: E3, window: A3 } = Po;
function S3(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _ = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && Yf(t)
  ), h = (
    /*substrateComponentContext*/
    t[14] && Xf(t)
  );
  return i = new Jn({
    props: {
      componentContext: (
        /*componentContext*/
        t[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = gr(), h && h.c(), e = gr(), n = Me("div"), o = Me("div"), Lt(i.$$.fragment), g(o, "class", vo.tooltip__inner), g(n, "class", s = ht(
        "tooltip",
        vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Er.root_platform_desktop : "")), g(n, "role", "dialog"), g(
        n,
        "aria-modal",
        /*modal*/
        t[3]
      ), F(
        n,
        "top",
        /*tooltipY*/
        t[11]
      ), F(
        n,
        "left",
        /*tooltipX*/
        t[10]
      ), F(
        n,
        "width",
        /*tooltipWidth*/
        t[12]
      ), F(
        n,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    m(m, p) {
      _ && _.m(m, p), J(m, r, p), h && h.m(m, p), J(m, e, p), J(m, n, p), bt(n, o), Pt(i, o, null), t[40](o), t[41](n), u = !0, c || (f = [
        Qe(
          n,
          "keydown",
          /*onKeyDown*/
          t[26]
        ),
        Qe(
          n,
          "introstart",
          /*onIntroStart*/
          t[28]
        ),
        Qe(
          n,
          "introend",
          /*onIntroEnd*/
          t[29]
        ),
        Qe(
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
      t[3] ? _ ? _.p(t, p) : (_ = Yf(t), _.c(), _.m(r.parentNode, r)) : _ && (_.d(1), _ = null), /*substrateComponentContext*/
      t[14] ? h ? (h.p(t, p), p[0] & /*substrateComponentContext*/
      16384 && L(h, 1)) : (h = Xf(t), h.c(), L(h, 1), h.m(e.parentNode, e)) : h && (sr(), x(h, 1, 1, () => {
        h = null;
      }), lr());
      const w = {};
      p[0] & /*componentContext*/
      4 && (w.componentContext = /*componentContext*/
      t[2]), i.$set(w), (!u || p[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = ht(
        "tooltip",
        vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Er.root_platform_desktop : ""))) && g(n, "class", s), (!u || p[0] & /*modal*/
      8) && g(
        n,
        "aria-modal",
        /*modal*/
        t[3]
      ), p[0] & /*tooltipY*/
      2048 && F(
        n,
        "top",
        /*tooltipY*/
        t[11]
      ), p[0] & /*tooltipX*/
      1024 && F(
        n,
        "left",
        /*tooltipX*/
        t[10]
      ), p[0] & /*tooltipWidth*/
      4096 && F(
        n,
        "width",
        /*tooltipWidth*/
        t[12]
      ), p[0] & /*tooltipHeight*/
      8192 && F(
        n,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    i(m) {
      u || (L(h), L(i.$$.fragment, m), po(() => {
        u && (l && l.end(1), a = pl(n, el, {
          animations: (
            /*$animationIn*/
            t[5] || Ri
          ),
          direction: "in"
        }), a.start());
      }), u = !0);
    },
    o(m) {
      x(h), x(i.$$.fragment, m), a && a.invalidate(), l = Fd(n, el, {
        animations: (
          /*$animationOut*/
          t[4] || Ri
        ),
        direction: "out"
      }), u = !1;
    },
    d(m) {
      m && (G(r), G(e), G(n)), _ && _.d(m), h && h.d(m), Nt(i), t[40](null), t[41](null), m && l && l.end(), c = !1, Jr(f);
    }
  };
}
function V3(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _ = (
    /*substrateComponentContext*/
    t[14] && Zf(t)
  ), h = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && /*data*/
    t[0].background_accessibility_description && Qf(t)
  );
  return i = new Jn({
    props: {
      componentContext: (
        /*componentContext*/
        t[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = gr(), e = Me("dialog"), h && h.c(), n = gr(), o = Me("div"), Lt(i.$$.fragment), g(o, "class", vo.tooltip__inner), g(e, "class", s = ht(
        "tooltip",
        vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Er.root_platform_desktop : "")), F(
        e,
        "top",
        /*tooltipY*/
        t[11]
      ), F(
        e,
        "left",
        /*tooltipX*/
        t[10]
      ), F(
        e,
        "width",
        /*tooltipWidth*/
        t[12]
      ), F(
        e,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    m(m, p) {
      _ && _.m(m, p), J(m, r, p), J(m, e, p), h && h.m(e, null), bt(e, n), bt(e, o), Pt(i, o, null), t[36](o), t[37](e), u = !0, c || (f = [
        Qe(
          e,
          "keydown",
          /*onKeyDown*/
          t[26]
        ),
        Qe(
          e,
          "close",
          /*onClose*/
          t[27]
        ),
        Qe(
          e,
          "cancel",
          /*onClose*/
          t[27]
        ),
        Qe(
          e,
          "click",
          /*onOutClick*/
          t[23]
        ),
        Qe(
          e,
          "introstart",
          /*onIntroStart*/
          t[28]
        ),
        Qe(
          e,
          "introend",
          /*onIntroEnd*/
          t[29]
        ),
        Qe(
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
      16384 && L(_, 1)) : (_ = Zf(t), _.c(), L(_, 1), _.m(r.parentNode, r)) : _ && (sr(), x(_, 1, 1, () => {
        _ = null;
      }), lr()), /*visible*/
      t[1] && /*modal*/
      t[3] && /*data*/
      t[0].background_accessibility_description ? h ? h.p(t, p) : (h = Qf(t), h.c(), h.m(e, n)) : h && (h.d(1), h = null);
      const w = {};
      p[0] & /*componentContext*/
      4 && (w.componentContext = /*componentContext*/
      t[2]), i.$set(w), (!u || p[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = ht(
        "tooltip",
        vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Er.root_platform_desktop : ""))) && g(e, "class", s), p[0] & /*tooltipY*/
      2048 && F(
        e,
        "top",
        /*tooltipY*/
        t[11]
      ), p[0] & /*tooltipX*/
      1024 && F(
        e,
        "left",
        /*tooltipX*/
        t[10]
      ), p[0] & /*tooltipWidth*/
      4096 && F(
        e,
        "width",
        /*tooltipWidth*/
        t[12]
      ), p[0] & /*tooltipHeight*/
      8192 && F(
        e,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    i(m) {
      u || (L(_), L(i.$$.fragment, m), po(() => {
        u && (l && l.end(1), a = pl(e, el, {
          animations: (
            /*$animationIn*/
            t[5] || Ri
          ),
          direction: "in"
        }), a.start());
      }), u = !0);
    },
    o(m) {
      x(_), x(i.$$.fragment, m), a && a.invalidate(), l = Fd(e, el, {
        animations: (
          /*$animationOut*/
          t[4] || Ri
        ),
        direction: "out"
      }), u = !1;
    },
    d(m) {
      m && (G(r), G(e)), _ && _.d(m), h && h.d(), Nt(i), t[36](null), t[37](null), m && l && l.end(), c = !1, Jr(f);
    }
  };
}
function Yf(t) {
  let r;
  function e(i, s) {
    return (
      /*data*/
      i[0].background_accessibility_description ? I3 : F3
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Qt();
    },
    m(i, s) {
      o.m(i, s), J(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && G(r), o.d(i);
    }
  };
}
function F3(t) {
  let r, e, n;
  return {
    c() {
      r = Me("div"), g(r, "class", vo.tooltip__overlay);
    },
    m(o, i) {
      J(o, r, i), e || (n = Qe(
        r,
        "click",
        /*closeByOutside*/
        t[24]
      ), e = !0);
    },
    p: j,
    d(o) {
      o && G(r), e = !1, n();
    }
  };
}
function I3(t) {
  let r, e, n, o;
  return {
    c() {
      r = Me("button"), g(r, "class", vo.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", e = /*data*/
      t[0].background_accessibility_description);
    },
    m(i, s) {
      J(i, r, s), n || (o = Qe(
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
      i && G(r), n = !1, o();
    }
  };
}
function Xf(t) {
  let r, e, n, o, i;
  return e = new Jn({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        t[14]
      )
    }
  }), {
    c() {
      r = Me("div"), Lt(e.$$.fragment), n = gr(), o = Me("div"), g(r, "class", vo.tooltip__substrate);
    },
    m(s, a) {
      J(s, r, a), Pt(e, r, null), t[38](r), J(s, n, a), J(s, o, a), t[39](o), i = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*substrateComponentContext*/
      16384 && (l.componentContext = /*substrateComponentContext*/
      s[14]), e.$set(l);
    },
    i(s) {
      i || (L(e.$$.fragment, s), i = !0);
    },
    o(s) {
      x(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (G(r), G(n), G(o)), Nt(e), t[38](null), t[39](null);
    }
  };
}
function Zf(t) {
  let r, e, n, o, i;
  return e = new Jn({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        t[14]
      )
    }
  }), {
    c() {
      r = Me("div"), Lt(e.$$.fragment), n = gr(), o = Me("div"), g(r, "class", vo.tooltip__substrate);
    },
    m(s, a) {
      J(s, r, a), Pt(e, r, null), t[34](r), J(s, n, a), J(s, o, a), t[35](o), i = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*substrateComponentContext*/
      16384 && (l.componentContext = /*substrateComponentContext*/
      s[14]), e.$set(l);
    },
    i(s) {
      i || (L(e.$$.fragment, s), i = !0);
    },
    o(s) {
      x(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (G(r), G(n), G(o)), Nt(e), t[34](null), t[35](null);
    }
  };
}
function Qf(t) {
  let r, e, n, o;
  return {
    c() {
      r = Me("button"), g(r, "class", vo.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", e = /*data*/
      t[0].background_accessibility_description);
    },
    m(i, s) {
      J(i, r, s), n || (o = Qe(
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
      i && G(r), n = !1, o();
    }
  };
}
function D3(t) {
  let r, e, n, o, i, s, a;
  const l = [V3, S3], u = [];
  function c(f, _) {
    return ts ? 0 : 1;
  }
  return e = c(), n = u[e] = l[e](t), {
    c() {
      r = gr(), n.c(), o = Qt();
    },
    m(f, _) {
      J(f, r, _), u[e].m(f, _), J(f, o, _), i = !0, s || (a = [
        Qe(
          A3,
          "resize",
          /*onWindowResize*/
          t[25]
        ),
        Qe(
          E3.body,
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
      i || (L(n), i = !0);
    },
    o(f) {
      x(n), i = !1;
    },
    d(f) {
      f && (G(r), G(o)), u[e].d(f), s = !1, Jr(a);
    }
  };
}
const Ri = {
  name: "set",
  items: [{ name: "translate" }, { name: "fade" }]
};
let Kn = [];
function T3(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _ = j, h = () => (_(), _ = S(i, (I) => e(46, f = I)), i), m, p = j, w = () => (p(), p = S(o, (I) => e(47, m = I)), o), k, N = j, H = () => (N(), N = S(n, (I) => e(48, k = I)), n), O, ne = j, de = () => (ne(), ne = S(a, (I) => e(4, O = I)), a), T, X = j, le = () => (X(), X = S(s, (I) => e(5, T = I)), s), C;
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => ne()), t.$$.on_destroy.push(() => X());
  let { ownerNode: D } = r, { data: M } = r, { internalId: W } = r, { parentComponentContext: Q } = r;
  const me = Dr(Kr), Ee = me.isDesktop;
  yn(t, Ee, (I) => e(21, C = I));
  const ve = Date.now();
  let he, Se, Z, et, Je = !1, qe = "", be = "", Te = "", ue = "", ge = null, ce, re, ae = !0, oe = null;
  function we() {
    var _t, Fe;
    if (!he || !D)
      return;
    const I = he.parentElement;
    if (!I)
      return;
    const jt = he.style.cssText;
    e(6, he.style.cssText += ";transform: none !important", he);
    const lt = D.getBoundingClientRect(), Et = he.getBoundingClientRect(), Dt = I.getBoundingClientRect();
    e(6, he.style.cssText = jt, he);
    let ot = 0, q = 0, Tt = null, Ft = null, Kt = 0, Xt = 0;
    const je = (_t = ce == null ? void 0 : ce.json) == null ? void 0 : _t.width, Ke = (Fe = ce == null ? void 0 : ce.json) == null ? void 0 : Fe.height;
    if (!je || je.type === "match_parent" ? Kt = Tt = window.innerWidth : je.type === "fixed" && je.value ? Kt = Tt = je.value : Kt = Et.width, (Ke == null ? void 0 : Ke.type) === "match_parent" ? Xt = Ft = window.innerHeight : (Ke == null ? void 0 : Ke.type) === "fixed" && Ke.value ? Xt = Ft = Ke.value : Xt = Et.height, k === "left" || k === "bottom-left" || k === "top-left")
      ot = lt.left - Kt;
    else if (k === "top" || k === "bottom" || k === "center")
      ot = (lt.left + lt.right) / 2 - Kt / 2;
    else if (k === "right" || k === "bottom-right" || k === "top-right")
      ot = lt.right;
    else
      return;
    if (k === "top" || k === "top-left" || k === "top-right")
      q = lt.top - Xt;
    else if (k === "left" || k === "right" || k === "center")
      q = (lt.top + lt.bottom) / 2 - Xt / 2;
    else if (k === "bottom-left" || k === "bottom" || k === "bottom-right")
      q = lt.bottom;
    else
      return;
    ts && ae || (ot -= Dt.left, q -= Dt.top), ot += m || 0, q += f || 0, e(10, qe = `${ot}px`), e(11, be = `${q}px`), e(12, Te = Tt !== null ? `${Tt}px` : ""), e(13, ue = Ft !== null ? `${Ft}px` : ""), e(1, Je = !0), Tt === null || Ft === null ? typeof ResizeObserver < "u" && !ge && (ge = new ResizeObserver(() => {
      requestAnimationFrame(we);
    }), ge.observe(he)) : ge == null || ge.disconnect();
  }
  function Re(I) {
    if (Kn.length && Kn[Kn.length - 1] !== he)
      return;
    const jt = I.composedPath();
    Date.now() - ve < 100 || jt.includes(he) && !(ts && jt[0] === he) || Ge();
  }
  function Ge(I) {
    I == null || I.stopPropagation(), I == null || I.preventDefault(), ce.getJsonWithVars(M.close_by_tap_outside) !== !1 && (Kn = Kn.filter((jt) => jt !== he), me.onTooltipClose(W)), M.tap_outside_actions && ce.execAnyActions(M.tap_outside_actions, { processUrls: !0 });
  }
  function ee() {
    we();
  }
  function Oe(I) {
    Kn.length && Kn[Kn.length - 1] !== he || I.key === "Escape" && !I.ctrlKey && !I.shiftKey && !I.altKey && !I.metaKey && (Kn = Kn.filter((jt) => jt !== he), me.onTooltipClose(W));
  }
  function Ne(I) {
    Kn = Kn.filter((jt) => jt !== he), me.onTooltipClose(W), I.preventDefault();
  }
  function nt() {
    Z && Z.animate({ opacity: [0, 1] }, {
      duration: l,
      easing: "ease-in-out"
    });
  }
  function at() {
    Z && he.insertBefore(Z, Se);
  }
  function tt() {
    et != null && et.parentElement && Z && (et.parentElement.insertBefore(Z, et), Z.animate({ opacity: [1, 0] }, {
      duration: u,
      easing: "ease-in-out"
    }));
  }
  Zn(() => {
    try {
      oe = document.activeElement;
    } catch {
    }
    if (me.tooltipRoot) {
      const I = window.getComputedStyle(he);
      e(6, he.style.fontSize = I.fontSize, he), e(6, he.style.fontFamily = I.fontFamily, he), e(6, he.style.lineHeight = I.lineHeight, he), me.tooltipRoot.appendChild(he);
    }
    ts && he && he instanceof HTMLDialogElement && he[ae ? "showModal" : "show"](), ae && Kn.push(he);
  }), _l(() => {
    Je || we();
  }), sn(() => {
    if (ce && ce.destroy(), re && re.destroy(), ge == null || ge.disconnect(), Kn = Kn.filter((I) => I !== he), ae && oe && oe instanceof HTMLElement) {
      ts && he && he instanceof HTMLDialogElement && he.close();
      try {
        oe.focus({ preventScroll: !0 });
      } catch {
      }
    }
  });
  function yt(I) {
    Vr[I ? "unshift" : "push"](() => {
      Z = I, e(8, Z);
    });
  }
  function rt(I) {
    Vr[I ? "unshift" : "push"](() => {
      et = I, e(9, et);
    });
  }
  function Mt(I) {
    Vr[I ? "unshift" : "push"](() => {
      Se = I, e(7, Se);
    });
  }
  function ft(I) {
    Vr[I ? "unshift" : "push"](() => {
      he = I, e(6, he);
    });
  }
  function K(I) {
    Vr[I ? "unshift" : "push"](() => {
      Z = I, e(8, Z);
    });
  }
  function _e(I) {
    Vr[I ? "unshift" : "push"](() => {
      et = I, e(9, et);
    });
  }
  function st(I) {
    Vr[I ? "unshift" : "push"](() => {
      Se = I, e(7, Se);
    });
  }
  function Pe(I) {
    Vr[I ? "unshift" : "push"](() => {
      he = I, e(6, he);
    });
  }
  return t.$$set = (I) => {
    "ownerNode" in I && e(31, D = I.ownerNode), "data" in I && e(0, M = I.data), "internalId" in I && e(32, W = I.internalId), "parentComponentContext" in I && e(33, Q = I.parentComponentContext);
  }, t.$$.update = () => {
    var I, jt, lt, Et, Dt;
    t.$$.dirty[0] & /*componentContext, data*/
    5 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && (ce && ce.destroy(), e(2, ce = Q.produceChildContext(M.div || {}, { isTooltipRoot: !0 })), M.substrate_div && e(14, re = Q.produceChildContext(M.substrate_div, { isTooltipRoot: !0 }))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && H(e(20, n = Q.getDerivedFromVars(M.position))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && w(e(19, o = Q.getDerivedFromVars((jt = (I = M.offset) == null ? void 0 : I.x) == null ? void 0 : jt.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && h(e(18, i = Q.getDerivedFromVars((Et = (lt = M.offset) == null ? void 0 : lt.y) == null ? void 0 : Et.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && le(e(17, s = Q.getDerivedFromVars(M.animation_in))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && de(e(16, a = Q.getDerivedFromVars(M.animation_out))), t.$$.dirty[0] & /*$animationIn*/
    32 && (l = Li() ? 0 : aa(us(T || Ri))), t.$$.dirty[0] & /*$animationOut*/
    16 && (u = Li() ? 0 : aa(us(O || Ri))), t.$$.dirty[0] & /*data*/
    1 && (((Dt = M.mode) == null ? void 0 : Dt.type) === "non_modal" ? e(3, ae = !1) : e(3, ae = !0)), t.$$.dirty[0] & /*visible, modal*/
    10 && e(15, c = { visible: Je, modal: ae });
  }, [
    M,
    Je,
    ce,
    ae,
    O,
    T,
    he,
    Se,
    Z,
    et,
    qe,
    be,
    Te,
    ue,
    re,
    c,
    a,
    s,
    i,
    o,
    n,
    C,
    Ee,
    Re,
    Ge,
    ee,
    Oe,
    Ne,
    nt,
    at,
    tt,
    D,
    W,
    Q,
    yt,
    rt,
    Mt,
    ft,
    K,
    _e,
    st,
    Pe
  ];
}
class M3 extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      T3,
      D3,
      Sr,
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
const P3 = "appkit-root_platform_desktop", N3 = "appkit-menu", z3 = "appkit-menu_visible", L3 = "appkit-menu__list", O3 = "appkit-menu__item", Rs = {
  root_platform_desktop: P3,
  menu: N3,
  menu_visible: z3,
  menu__list: L3,
  menu__item: O3
}, { window: xf } = Po;
function $f(t, r, e) {
  const n = t.slice();
  return n[23] = r[e], n;
}
function B3(t) {
  let r = (
    /*item*/
    t[23].text + ""
  ), e;
  return {
    c() {
      e = Gn(r);
    },
    m(n, o) {
      J(n, e, o);
    },
    p(n, o) {
      o & /*items*/
      1 && r !== (r = /*item*/
      n[23].text + "") && eo(e, r);
    },
    d(n) {
      n && G(e);
    }
  };
}
function ed(t) {
  let r, e, n, o;
  return e = new bl({
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
      cls: Rs.menu__item + " " + /*itemMix*/
      t[10],
      customAction: (
        /*onItemAction*/
        t[14]
      ),
      $$slots: { default: [B3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      r = Me("li"), Lt(e.$$.fragment), n = gr();
    },
    m(i, s) {
      J(i, r, s), Pt(e, r, null), bt(r, n), o = !0;
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
      o || (L(e.$$.fragment, i), o = !0);
    },
    o(i) {
      x(e.$$.fragment, i), o = !1;
    },
    d(i) {
      i && G(r), Nt(e);
    }
  };
}
function R3(t) {
  let r, e, n, o, i, s, a, l = ir(
    /*items*/
    t[0]
  ), u = [];
  for (let f = 0; f < l.length; f += 1)
    u[f] = ed($f(t, l, f));
  const c = (f) => x(u[f], 1, 1, () => {
    u[f] = null;
  });
  return {
    c() {
      r = Me("div"), e = Me("ul");
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      g(e, "class", Rs.menu__list), g(r, "class", n = ht(
        "menu",
        Rs,
        /*mods*/
        t[7]
      ) + " " + /*$isDesktop*/
      (t[8] ? Er.root_platform_desktop : "") + " " + /*popupMix*/
      t[9]), F(
        r,
        "top",
        /*menuY*/
        t[4]
      ), F(
        r,
        "left",
        /*menuX*/
        t[3]
      ), F(
        r,
        "width",
        /*menuWidth*/
        t[5]
      ), F(
        r,
        "height",
        /*menuHeight*/
        t[6]
      );
    },
    m(f, _) {
      J(f, r, _), bt(r, e);
      for (let h = 0; h < u.length; h += 1)
        u[h] && u[h].m(e, null);
      t[17](r), i = !0, s || (a = [
        Qe(
          xf,
          "click",
          /*onWindowClick*/
          t[12]
        ),
        Qe(
          xf,
          "resize",
          /*onWindowResize*/
          t[13]
        )
      ], s = !0);
    },
    p(f, [_]) {
      if (_ & /*parentComponentContext, items, itemMix, onItemAction*/
      17411) {
        l = ir(
          /*items*/
          f[0]
        );
        let h;
        for (h = 0; h < l.length; h += 1) {
          const m = $f(f, l, h);
          u[h] ? (u[h].p(m, _), L(u[h], 1)) : (u[h] = ed(m), u[h].c(), L(u[h], 1), u[h].m(e, null));
        }
        for (sr(), h = l.length; h < u.length; h += 1)
          c(h);
        lr();
      }
      (!i || _ & /*mods, $isDesktop*/
      384 && n !== (n = ht(
        "menu",
        Rs,
        /*mods*/
        f[7]
      ) + " " + /*$isDesktop*/
      (f[8] ? Er.root_platform_desktop : "") + " " + /*popupMix*/
      f[9])) && g(r, "class", n), _ & /*menuY*/
      16 && F(
        r,
        "top",
        /*menuY*/
        f[4]
      ), _ & /*menuX*/
      8 && F(
        r,
        "left",
        /*menuX*/
        f[3]
      ), _ & /*menuWidth*/
      32 && F(
        r,
        "width",
        /*menuWidth*/
        f[5]
      ), _ & /*menuHeight*/
      64 && F(
        r,
        "height",
        /*menuHeight*/
        f[6]
      );
    },
    i(f) {
      if (!i) {
        for (let _ = 0; _ < l.length; _ += 1)
          L(u[_]);
        f && po(() => {
          i && (o || (o = hu(r, Kf, { y: 20 }, !0)), o.run(1));
        }), i = !0;
      }
    },
    o(f) {
      u = u.filter(Boolean);
      for (let _ = 0; _ < u.length; _ += 1)
        x(u[_]);
      f && (o || (o = hu(r, Kf, { y: 20 }, !1)), o.run(0)), i = !1;
    },
    d(f) {
      f && G(r), on(u, f), t[17](null), f && o && o.end(), s = !1, Jr(a);
    }
  };
}
function H3(t, r, e) {
  let n, o, { ownerNode: i } = r, { items: s } = r, { parentComponentContext: a } = r;
  const l = Dr(Kr), u = l.getCustomization("menuPopupClass") || "", c = l.getCustomization("menuItemClass") || "", f = l.isDesktop;
  yn(t, f, (C) => e(8, o = C));
  const _ = Date.now(), h = wh();
  let m, p = !1, w = "", k = "", N = "", H = "", O = null;
  function ne() {
    if (!m || !i)
      return;
    const C = m.parentElement;
    if (!C)
      return;
    const D = i.getBoundingClientRect(), M = m.getBoundingClientRect(), W = C.getBoundingClientRect(), Q = window.innerWidth, me = window.innerHeight;
    let Ee = 0, ve = 0, he = M.width, Se = M.height;
    Ee = D.left - W.left, ve = D.bottom - W.top, Ee + he > Q && (Ee = Q - he), Ee < 0 && (Ee = 0), ve + Se > me && (D.top - W.top - Se > 0 ? ve = D.top - W.top - Se : ve = me - Se), ve < 0 && (ve = 0), e(3, w = `${Ee}px`), e(4, k = `${ve}px`), e(5, N = ""), e(6, H = ""), e(16, p = !0), typeof ResizeObserver < "u" && !O && (O = new ResizeObserver(() => {
      requestAnimationFrame(ne);
    }), O.observe(m));
  }
  function de(C) {
    Date.now() - _ < 100 || C.composedPath().includes(m) || h("close");
  }
  function T() {
    ne();
  }
  function X() {
    return h("close"), !0;
  }
  Zn(() => {
    if (l.tooltipRoot) {
      const C = window.getComputedStyle(m);
      e(2, m.style.fontSize = C.fontSize, m), e(2, m.style.fontFamily = C.fontFamily, m), e(2, m.style.lineHeight = C.lineHeight, m), l.tooltipRoot.appendChild(m);
    }
  }), _l(() => {
    p || ne();
  }), sn(() => {
    O == null || O.disconnect();
  });
  function le(C) {
    Vr[C ? "unshift" : "push"](() => {
      m = C, e(2, m);
    });
  }
  return t.$$set = (C) => {
    "ownerNode" in C && e(15, i = C.ownerNode), "items" in C && e(0, s = C.items), "parentComponentContext" in C && e(1, a = C.parentComponentContext);
  }, t.$$.update = () => {
    t.$$.dirty & /*visible*/
    65536 && e(7, n = { visible: p });
  }, [
    s,
    a,
    m,
    w,
    k,
    N,
    H,
    n,
    o,
    u,
    c,
    f,
    de,
    T,
    X,
    i,
    p,
    le
  ];
}
class W3 extends Or {
  constructor(r) {
    super(), Lr(this, r, H3, R3, Sr, {
      ownerNode: 15,
      items: 0,
      parentComponentContext: 1
    });
  }
}
const { Map: U3 } = Po;
function td(t, r, e) {
  const n = t.slice();
  return n[134] = r[e], n;
}
function rd(t) {
  let r, e, n, o, i, s, a, l, u, c;
  e = new G2({
    props: { svgFiltersMap: (
      /*svgFiltersMap*/
      t[5]
    ) }
  }), o = new Jn({
    props: {
      componentContext: (
        /*rootStateComponentContext*/
        t[6]
      )
    }
  });
  let f = (
    /*tooltips*/
    t[3] && nd(t)
  ), _ = (
    /*menu*/
    t[4] && id(t)
  );
  return {
    c() {
      r = Me("div"), Lt(e.$$.fragment), n = gr(), Lt(o.$$.fragment), i = gr(), f && f.c(), s = gr(), _ && _.c(), g(r, "class", a = Er.root + /*$isDesktop*/
      (t[7] ? ` ${Er.root_platform_desktop}` : "") + /*mix*/
      (t[0] ? ` ${/*mix*/
      t[0]}` : "")), g(
        r,
        "dir",
        /*$directionStore*/
        t[8]
      );
    },
    m(h, m) {
      J(h, r, m), Pt(e, r, null), bt(r, n), Pt(o, r, null), bt(r, i), f && f.m(r, null), bt(r, s), _ && _.m(r, null), l = !0, u || (c = Qe(r, "touchstart", K3, { passive: !0 }), u = !0);
    },
    p(h, m) {
      const p = {};
      m[0] & /*svgFiltersMap*/
      32 && (p.svgFiltersMap = /*svgFiltersMap*/
      h[5]), e.$set(p);
      const w = {};
      m[0] & /*rootStateComponentContext*/
      64 && (w.componentContext = /*rootStateComponentContext*/
      h[6]), o.$set(w), /*tooltips*/
      h[3] ? f ? (f.p(h, m), m[0] & /*tooltips*/
      8 && L(f, 1)) : (f = nd(h), f.c(), L(f, 1), f.m(r, s)) : f && (sr(), x(f, 1, 1, () => {
        f = null;
      }), lr()), /*menu*/
      h[4] ? _ ? (_.p(h, m), m[0] & /*menu*/
      16 && L(_, 1)) : (_ = id(h), _.c(), L(_, 1), _.m(r, null)) : _ && (sr(), x(_, 1, 1, () => {
        _ = null;
      }), lr()), (!l || m[0] & /*$isDesktop, mix*/
      129 && a !== (a = Er.root + /*$isDesktop*/
      (h[7] ? ` ${Er.root_platform_desktop}` : "") + /*mix*/
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
      l || (L(e.$$.fragment, h), L(o.$$.fragment, h), L(f), L(_), l = !0);
    },
    o(h) {
      x(e.$$.fragment, h), x(o.$$.fragment, h), x(f), x(_), l = !1;
    },
    d(h) {
      h && G(r), Nt(e), Nt(o), f && f.d(), _ && _.d(), u = !1, c();
    }
  };
}
function nd(t) {
  let r = [], e = new U3(), n, o, i = ir(
    /*tooltips*/
    t[3]
  );
  const s = (a) => (
    /*item*/
    a[134].internalId
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = td(t, i, a), u = s(l);
    e.set(u, r[a] = od(u, l));
  }
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      n = Qt();
    },
    m(a, l) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(a, l);
      J(a, n, l), o = !0;
    },
    p(a, l) {
      l[0] & /*tooltips, rootStateComponentContext*/
      72 && (i = ir(
        /*tooltips*/
        a[3]
      ), sr(), r = Dd(r, l, s, 1, a, i, e, n.parentNode, Id, od, n, td), lr());
    },
    i(a) {
      if (!o) {
        for (let l = 0; l < i.length; l += 1)
          L(r[l]);
        o = !0;
      }
    },
    o(a) {
      for (let l = 0; l < r.length; l += 1)
        x(r[l]);
      o = !1;
    },
    d(a) {
      a && G(n);
      for (let l = 0; l < r.length; l += 1)
        r[l].d(a);
    }
  };
}
function od(t, r) {
  let e, n, o;
  return n = new M3({
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
      e = Qt(), Lt(n.$$.fragment), this.first = e;
    },
    m(i, s) {
      J(i, e, s), Pt(n, i, s), o = !0;
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
      o || (L(n.$$.fragment, i), o = !0);
    },
    o(i) {
      x(n.$$.fragment, i), o = !1;
    },
    d(i) {
      i && G(e), Nt(n, i);
    }
  };
}
function id(t) {
  let r, e;
  return r = new W3({
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Pt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Nt(r, n);
    }
  };
}
function G3(t) {
  let r, e, n = !/*hasError*/
  t[1] && !/*hasIdError*/
  t[2] && /*rootStateComponentContext*/
  t[6] && rd(t);
  return {
    c() {
      n && n.c(), r = Qt();
    },
    m(o, i) {
      n && n.m(o, i), J(o, r, i), e = !0;
    },
    p(o, i) {
      !/*hasError*/
      o[1] && !/*hasIdError*/
      o[2] && /*rootStateComponentContext*/
      o[6] ? n ? (n.p(o, i), i[0] & /*hasError, hasIdError, rootStateComponentContext*/
      70 && L(n, 1)) : (n = rd(o), n.c(), L(n, 1), n.m(r.parentNode, r)) : n && (sr(), x(n, 1, 1, () => {
        n = null;
      }), lr());
    },
    i(o) {
      e || (L(n), e = !0);
    },
    o(o) {
      x(n), e = !1;
    },
    d(o) {
      o && G(r), n && n.d(o);
    }
  };
}
let Sa = Do(!0), js = 0;
function sd() {
  Sa.set(!1);
}
function ld() {
  Sa.set(!0);
}
const J3 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean"]), q3 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean", "array", "dict"]);
function Wo(t, r) {
  if (t && r)
    return new Map([...t, ...r]);
  if (t)
    return t;
  if (r)
    return r;
}
function K3() {
}
function Y3(t, r, e) {
  var Yr, pn, Cn;
  let n, o, i, s, { id: a } = r, { json: l = {} } = r, { platform: u = "auto" } = r, { theme: c = "system" } = r, { globalVariablesController: f = void 0 } = r, { mix: _ = "" } = r, { customization: h = {} } = r, { builtinProtocols: m = ["http", "https", "tel", "mailto", "intent"] } = r, { extensions: p = /* @__PURE__ */ new Map() } = r, { onError: w = void 0 } = r, { onStat: k = void 0 } = r, { onSubmit: N = void 0 } = r, { onCustomAction: H = void 0 } = r, { onComponent: O = void 0 } = r, { typefaceProvider: ne = (y) => "" } = r, { fetchInit: de = {} } = r, { tooltipRoot: T = void 0 } = r, { customComponents: X = void 0 } = r, { direction: le = "ltr" } = r, { store: C = void 0 } = r, { pagerChildrenClipEnabled: D = !0 } = r, { pagerMouseDragEnabled: M = !0 } = r, { weekStartDay: W = 0 } = r, { videoPlayerProvider: Q = void 0 } = r, { devtoolCreateHierarchy: me = "lazy" } = r, Ee = !0, ve = Do(u === "desktop");
  if (yn(t, ve, (y) => e(7, i = y)), u === "auto" && typeof matchMedia < "u") {
    const y = matchMedia("(any-pointer: coarse)");
    ve.set(!y.matches), y.addListener(() => {
      ve.set(!y.matches);
    });
  }
  let he = "light", Se = null;
  const Z = Do(le === "rtl" ? "rtl" : "ltr");
  yn(t, Z, (y) => e(8, s = y));
  function et() {
    c !== "system" || !Se || e(41, he = Se.matches ? "dark" : "light");
  }
  function Je(y) {
    e(12, c = y);
  }
  function qe() {
    return Ge;
  }
  function be() {
    return ee;
  }
  function Te(y) {
    e(11, l = y);
  }
  function ue(y) {
    return kt(y, I);
  }
  const ge = new Set(m);
  let ce = !1, re = !1;
  a || (re = !0, I(Y(new Error('"id" prop is required'))));
  const ae = { stateChange: !1 }, oe = f || new __(), we = oe.getLastAddedVariableStore(), Re = oe.getVariables(), Ge = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map();
  let nt = null;
  const at = /* @__PURE__ */ new Map();
  let tt = 0, yt = [];
  const rt = /* @__PURE__ */ new Set();
  let Mt;
  const ft = [];
  function K(y) {
    return h == null ? void 0 : h[y];
  }
  function _e(y, E, { additionalVars: A, keepComplex: te = !1, customFunctions: z, emptyVarsError: xe, maxDepth: Ve } = {}) {
    var qt;
    if (!E)
      return Jo(E);
    const $t = Wo(ee, A), At = qf(E, y, C, W, Ve);
    if (!At.vars.length)
      if (At.hasExpression) {
        const St = At.applyVars($t, z);
        if (!((qt = St.usedVars) != null && qt.size))
          return xe && xe(), Jo(St.result);
      } else
        return xe && xe(), Jo(E);
    const Xe = At.vars.map((St) => $t.get(St) || or(St)).filter(zo);
    return Do(void 0, (St) => {
      const Cr = /* @__PURE__ */ new Map();
      let Wr;
      const ln = () => {
        var gn;
        const Ir = At.applyVars($t, z, te);
        for (const [hn, Sn] of Cr)
          (gn = Ir.usedVars) != null && gn.has(hn) || (Sn(), Cr.delete(hn));
        if (Ir.usedVars) {
          for (const hn of Ir.usedVars)
            if (!Cr.has(hn)) {
              let Sn = !0;
              Cr.set(hn, hn.subscribe(() => {
                Sn || St(ln()), Sn = !1;
              }));
            }
        }
        return Ir.result;
      };
      return Wr = Gi(Xe, ln).subscribe((Ir) => {
        St(Ir);
      }), () => {
        Wr == null || Wr();
        for (const [Ir, gn] of Cr)
          gn();
      };
    });
  }
  function st(y, E, A, te = !1, z = void 0) {
    const xe = qf(E, y, C, W);
    if (!xe.hasExpression)
      return E;
    const Ve = Wo(ee, A);
    return xe.applyVars(Ve, z, te).result;
  }
  function Pe(y, E, A) {
    const te = /* @__PURE__ */ new Map(), z = Os(y, "dict", E);
    te.set(y, z);
    const xe = Os("index", "integer", A);
    return te.set("index", xe), te;
  }
  function I(y) {
    w ? w({ error: y }) : (y == null ? void 0 : y.level) === "warn" ? console.warn(y) : console.error(y);
  }
  function jt(y, E) {
    k && k({ type: y, action: E });
  }
  function lt(y) {
    return y in n;
  }
  function Et(y, E) {
    if (!y)
      return { json: y, templateContext: E };
    const A = /* @__PURE__ */ new Set([y.type]);
    for (; y.type && y.type in n; ) {
      if ({ json: y, templateContext: E } = J2(y, E, n, I), A.has(y.type))
        return { json: y, templateContext: E };
      A.add(y.type);
    }
    return { json: y, templateContext: E };
  }
  function Dt({ type: y, node: E, json: A, origJson: te, templateContext: z, componentContext: xe, devapi: Ve }) {
    O && O({
      type: y,
      node: E,
      json: A,
      origJson: te,
      templateContext: z,
      componentContext: xe,
      devapi: Ve
    });
  }
  let ot = 0;
  function q(y) {
    return `${a}-${ot++}`;
  }
  function Tt(y) {
    return `divkit-${q()}`;
  }
  let Ft = {}, Kt = {};
  function Xt(y, E) {
    const A = `${y}:${E}`;
    if (Kt[A] = Kt[A] || 0, ++Kt[A], Ft[A])
      return Ft[A];
    const te = `${q()}-svg-filter`;
    return e(5, Ft = { ...Ft, [A]: te }), te;
  }
  function je(y, E) {
    if (!y)
      return;
    const A = `${y}:${E}`;
    Kt[A] && --Kt[A] === 0 && e(5, Ft = Object.keys(Ft).reduce(
      (te, z) => (Kt[z] && (te[z] = Ft[z]), te),
      {}
    ));
  }
  const Ke = q() + "-id-", _t = /* @__PURE__ */ new Map(), Fe = /* @__PURE__ */ new Map();
  function $e(y) {
    return Ke + y;
  }
  function Be(y, E) {
    let A = _t.get(y) || [];
    return _t.has(y) || _t.set(y, A), A.push(E), () => {
      A = A.filter((z) => z !== E), A.length || _t.delete(y);
      const te = $e(y);
      Fe.has(te) && Fe.delete(te);
    };
  }
  function Vt(y) {
    var A, te;
    const E = (te = (A = _t.get(y)) == null ? void 0 : A[0]) == null ? void 0 : te.node();
    if (E) {
      const z = $e(y), xe = Fe.get(z);
      return xe && xe !== E && xe.removeAttribute("id"), E.setAttribute("id", z), Fe.set(z, E), z;
    }
    return "";
  }
  async function ze(y, E) {
    var Ve, $t;
    if (!y)
      throw new Error("Missing state id");
    let A = y.split("/");
    const te = A.length % 2 === 0 && u3(E);
    let z = te || Mr;
    const xe = (E == null ? void 0 : E.logError) || I;
    if (!te)
      if ((Ve = z.states) != null && Ve.root) {
        const At = z.states.root;
        if (At.length > 1) {
          xe(Y(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: y } }));
          return;
        }
        if (z = await At[0](A[0]), !z)
          return;
        A = A.slice(1);
      } else
        return;
    for (let At = 0; At < A.length; At += 2) {
      const Xe = A[At], qt = A[At + 1];
      if (($t = z.states) != null && $t[Xe]) {
        const St = z.states[Xe];
        if (St.length > 1) {
          xe(Y(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: y } }));
          return;
        }
        if (z = await St[0](qt), !z)
          return;
      } else
        return;
    }
  }
  async function mt(y, E, A) {
    var Cr;
    const te = (y == null ? void 0 : y.logError) || I;
    if (!p3(E)) {
      te(Y(new Error("Incorrect submit action"), {
        additional: { containerId: E.container_id }
      }));
      return;
    }
    const z = _t.get(E.container_id);
    if ((z == null ? void 0 : z.length) !== 1) {
      te(Y(new Error("Error resolving container. Found multiple elements that respond to id"), {
        additional: { containerId: E.container_id }
      }));
      return;
    }
    const xe = z[0].context(), Ve = {};
    if (xe.variables)
      for (const [Wr, ln] of xe.variables) {
        const Ir = ln.getValue();
        typeof Ir == "bigint" ? Ve[Wr] = Number(Ir) : Ve[Wr] = Ir;
      }
    if (N) {
      Promise.resolve().then(() => N(E, Ve)).then(() => {
        nr(A.on_success_actions, { componentContext: y });
      }).catch(() => {
        nr(A.on_fail_actions, { componentContext: y });
      });
      return;
    }
    const $t = Object.keys(Ve).length > 0, At = (E.request.method || "post").toLowerCase();
    if ((At === "get" || At === "head") && $t) {
      te(Y(new Error("Can't send variables using the get/head method."), { additional: { url: E.request.url } }));
      return;
    }
    let Xe = !1;
    const qt = [];
    (Cr = E.request.headers) == null || Cr.forEach((Wr) => {
      qt.push([Wr.name, Wr.value]), Wr.name.toLowerCase() === "content-type" && (Xe = !0);
    }), Xe || qt.push(["Content-Type", "application/json"]);
    let St;
    typeof de == "function" ? St = de(E.request.url) : St = de, fetch(E.request.url, {
      ...St,
      method: At,
      headers: qt,
      body: $t ? JSON.stringify(Ve) : void 0
    }).then((Wr) => {
      if (!Wr.ok)
        throw new Error("Response is not ok");
      nr(A.on_success_actions, { componentContext: y });
    }).catch((Wr) => {
      te(Y(new Error("Failed to submit"), {
        additional: {
          url: E.request.url,
          originalError: Wr
        }
      })), nr(A.on_fail_actions, { componentContext: y });
    });
  }
  function Ut(y, E) {
    var z, xe, Ve, $t, At, Xe, qt, St, Cr;
    const A = (y == null ? void 0 : y.logError) || I, te = E.id && vt(E.id);
    if (!te) {
      A(Y(new Error('Missing component for "scroll_to" action'), { additional: { id: E.id } }));
      return;
    }
    if (E.animated !== void 0 && typeof E.animated != "boolean") {
      A(Y(new Error('Missing properties for "scroll_to" action'), { additional: { id: E.id } }));
      return;
    }
    switch ((z = E.destination) == null ? void 0 : z.type) {
      case "index": {
        typeof E.destination.value == "number" && te.setCurrentItem(E.destination.value, (xe = E.animated) != null ? xe : !0);
        break;
      }
      case "offset": {
        typeof E.destination.value == "number" && (($t = te.scrollToPosition) == null || $t.call(te, E.destination.value, (Ve = E.animated) != null ? Ve : !0));
        break;
      }
      case "start": {
        (Xe = te.scrollToStart) == null || Xe.call(te, (At = E.animated) != null ? At : !0);
        break;
      }
      case "end": {
        (St = te.scrollToEnd) == null || St.call(te, (qt = E.animated) != null ? qt : !0);
        break;
      }
      default:
        A(Y(new Error('Unknown destination for "scroll_to" action'), {
          additional: {
            id: E.id,
            destination: (Cr = E.destination) == null ? void 0 : Cr.type
          }
        }));
    }
  }
  function It(y, E) {
    var z;
    const A = (y == null ? void 0 : y.logError) || I, te = E.id && vt(E.id);
    if (!te) {
      A(Y(new Error('Missing component for "scroll_by" action'), { additional: { id: E.id } }));
      return;
    }
    if (typeof E.item_count != "number" && E.item_count !== void 0 || typeof E.offset != "number" && E.offset !== void 0 || E.overflow !== void 0 && E.overflow !== "clamp" && E.overflow !== "ring" || E.animated !== void 0 && typeof E.animated != "boolean") {
      A(Y(new Error('Missing properties for "scroll_by" action'), { additional: { id: E.id } }));
      return;
    }
    (z = te.scrollCombined) == null || z.call(te, {
      step: E.item_count,
      offset: E.offset,
      overflow: E.overflow,
      animated: E.animated
    });
  }
  function hr(y, E, { item: A, step: te, overflow: z, animated: xe }) {
    var qt, St, Cr, Wr, ln;
    if (!E)
      throw new Error(`Missing id for "${y}" action`);
    const Ve = Number(A);
    if (y === "set_current_item" && Number.isNaN(Ve))
      throw new Error(`Incorrect item for "${y}" action`);
    let $t = Number(te);
    if (!te && (y === "set_previous_item" || y === "set_next_item") && ($t = 1), !te && (y === "scroll_backward" || y === "scroll_forward" || y === "scroll_to_position") || Number.isNaN($t))
      throw new Error(`Incorrect step value for "${y}" action`);
    if (z && z !== "clamp" && z !== "ring")
      throw new Error(`Incorrect overflow value for "${y}" action`);
    z = z || "clamp";
    const At = xe === null || xe !== "0" && xe !== "false", Xe = vt(E);
    if (Xe)
      switch (y) {
        case "set_current_item":
          Xe.setCurrentItem(Ve, At);
          return;
        case "set_previous_item":
          Xe.setPreviousItem($t, z, At);
          return;
        case "set_next_item":
          Xe.setNextItem($t, z, At);
          return;
        case "scroll_to_start":
          (qt = Xe.scrollToStart) == null || qt.call(Xe, At);
          return;
        case "scroll_to_end":
          (St = Xe.scrollToEnd) == null || St.call(Xe, At);
          return;
        case "scroll_backward":
          (Cr = Xe.scrollCombined) == null || Cr.call(Xe, {
            offset: -$t,
            overflow: z,
            animated: At
          });
          return;
        case "scroll_forward":
          (Wr = Xe.scrollCombined) == null || Wr.call(Xe, {
            offset: $t,
            overflow: z,
            animated: At
          });
          return;
        case "scroll_to_position":
          (ln = Xe.scrollToPosition) == null || ln.call(Xe, $t, At);
          return;
      }
  }
  function De(y, E, A) {
    const te = (A == null ? void 0 : A.logError) || I;
    if (y) {
      const z = vt(y);
      z ? E === "start" ? z.start() : E === "pause" ? z.pause() : te(Y(new Error("Unknown video action"), { additional: { id: y, action: E } })) : te(Y(new Error("Video component is not found"), { additional: { id: y, action: E } }));
    } else
      te(Y(new Error("Missing id in video action"), { additional: { action: E } }));
  }
  function kt(y, E, A) {
    var te, z, xe;
    if (y.templates)
      for (const Ve in y.templates)
        n.hasOwnProperty(Ve) || (n[Ve] = y.templates[Ve]);
    if (Array.isArray((te = y.patch) == null ? void 0 : te.changes)) {
      if (y.patch.mode === "transactional") {
        const Ve = y.patch.changes.find(($t) => {
          const At = kr.get($t.id);
          if (!At)
            return !0;
          const Xe = Array.isArray($t.items) ? $t.items.length : 0;
          return !!(At.isSingleMode && Xe !== 1);
        });
        if (Ve)
          return E(Y(new Error("Skipping transactional, child is not found or broken"), { additional: { url: A, id: Ve.id } })), nr((z = y.patch) == null ? void 0 : z.on_failed_actions), !1;
      }
      return y.patch.changes.forEach((Ve) => {
        const $t = kr.get(Ve.id);
        $t && $t.replaceWith(Ve.id, Ve.items);
      }), nr((xe = y.patch) == null ? void 0 : xe.on_applied_actions), !0;
    }
    return !1;
  }
  function ar(y, E, A) {
    const te = (A == null ? void 0 : A.logError) || I;
    if (y) {
      let z;
      typeof de == "function" ? z = de(y) : z = de, fetch(y, z).then((xe) => {
        if (!xe.ok)
          throw new Error("Response is not ok");
        return xe.json();
      }).then((xe) => {
        if (!xe) {
          te(Y(new Error("Incorrect patch"), { additional: { url: y } })), nr(E == null ? void 0 : E.on_fail_actions, { componentContext: A });
          return;
        }
        kt(xe, te, y) ? nr(E == null ? void 0 : E.on_success_actions, { componentContext: A }) : nr(E == null ? void 0 : E.on_fail_actions, { componentContext: A });
      }).catch((xe) => {
        te(Y(new Error("Failed to download the patch"), { additional: { url: y, originalError: xe } })), nr(E == null ? void 0 : E.on_fail_actions, { componentContext: A });
      });
    } else
      te(Y(new Error("Missing url in download action"), { additional: { url: y } }));
  }
  function rr(y, E, A) {
    var $t;
    const te = (A == null ? void 0 : A.logError) || I;
    if (!y) {
      te(Y(new Error("Missing id in show_tooltip action")));
      return;
    }
    const z = Tr.get(y);
    if (!z) {
      te(Y(new Error("Tooltip with the provided id is not found"), { additional: { id: y } }));
      return;
    }
    if (E !== "true" && E !== !0 && rt.has(y))
      return;
    rt.add(y);
    const xe = {
      internalId: ++tt,
      ownerNode: z.onwerNode,
      desc: z.tooltip,
      timeoutId: 0,
      componentContext: A
    };
    e(3, yt = [...yt, xe]);
    const Ve = ($t = z.tooltip.duration) != null ? $t : 5e3;
    Ve && (xe.timeoutId = window.setTimeout(
      () => {
        xe.timeoutId = 0, e(3, yt = yt.filter((At) => At.internalId !== xe.internalId));
      },
      Ve
    ));
  }
  function er(y, E) {
    const A = (E == null ? void 0 : E.logError) || I;
    if (!y) {
      A(Y(new Error("Missing id in hide_tooltip action")));
      return;
    }
    e(3, yt = yt.filter((te) => {
      const z = te.desc.id !== y;
      return !z && te.timeoutId && (clearTimeout(te.timeoutId), te.timeoutId = null), z;
    }));
  }
  function mr(y, E, A, te, z) {
    const xe = (y == null ? void 0 : y.logError) || I;
    if (!C) {
      xe(Y(new Error("Store is not configured")));
      return;
    }
    let Ve = A;
    if (!E || !Ve || !te || !z) {
      xe(Y(new Error("Missing required params for set_stored_value")));
      return;
    }
    if (!q3.has(te)) {
      xe(Y(new Error("Incorrect stored type")));
      return;
    }
    if (te === "boolean" && (Ve = Ve === "true" || Ve === "1"), C.set)
      C.set(E, te, Ve, Number(z));
    else if (C.setValue) {
      if (!J3.has(te)) {
        xe(Y(new Error("Incorrect stored type")));
        return;
      }
      if (typeof Ve != "string" && typeof Ve != "number" && typeof Ve != "boolean") {
        xe(Y(new Error("Incorrect stored value")));
        return;
      }
      (te === "integer" || te === "number") && (Ve = Number(Ve)), C.setValue(E, te, Ve, Number(z));
    }
  }
  function vr(y) {
    tr(st(I, y, void 0, !0), y);
  }
  async function tr(y, E, A) {
    var $t, At;
    const te = y.scope_id, z = (A == null ? void 0 : A.logError) || I;
    if (te) {
      const Xe = Br.get(te);
      if (Xe && (Xe == null ? void 0 : Xe.size) > 1)
        z(Y(new Error(`Ambiguous scope id. There are ${Xe.size} divs with id '${te}'`), { additional: { count: Xe.size, scopeId: te } }));
      else if ((Xe == null ? void 0 : Xe.size) === 1) {
        const qt = Xe.values().next().value;
        qt && (A = qt);
      } else {
        z(Y(new Error("The scope with the specified scope_id is missing"), { additional: { scopeId: te } }));
        return;
      }
    }
    const xe = y.url ? String(y.url) : "", Ve = y.typed;
    if (Zs(y)) {
      if (Ve)
        switch (Ve.type) {
          case "set_variable": {
            const { variable_name: Xe, value: qt } = Ve;
            if (Xe && qt) {
              const St = (A == null ? void 0 : A.getVariable(Xe)) || ee.get(Xe);
              St ? St.getType() === qt.type ? St.setValue(qt.value) : z(Y(new Error("Trying to set value with invalid type"), { additional: { name: Xe, type: qt.type } })) : z(Y(new Error("Cannot find variable"), { additional: { name: Xe } }));
            } else
              z(Y(new Error("Incorrect set_variable action"), { additional: { name: Xe } }));
            break;
          }
          case "array_insert_value":
            r3(A, ee, z, Ve);
            break;
          case "array_remove_value":
            n3(A, ee, z, Ve);
            break;
          case "array_set_value":
            o3(A, ee, z, Ve);
            break;
          case "copy_to_clipboard":
            s3(z, Ve);
            break;
          case "focus_element": {
            const Xe = Ve.element_id && Ct.get(Ve.element_id);
            Xe ? Xe.focus() : z(Y(new Error("Incorrect focus_element action"), {
              additional: { elementId: Ve.element_id }
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
            i3(A, ee, z, Ve);
            break;
          }
          case "animator_start": {
            const Xe = Ve.animator_id && (A == null ? void 0 : A.getAnimator(Ve.animator_id));
            if (!Xe) {
              z(Y(new Error("Missing animator"), {
                additional: { animator_id: Ve.animator_id }
              }));
              return;
            }
            const { duration: qt, start_delay: St, interpolator: Cr, direction: Wr, repeat_count: ln, start_value: Ir, end_value: gn } = Ve, hn = A ? A.getJsonWithVars(Xe) : st(I, Xe), Sn = {
              ...hn,
              end_actions: Xe.end_actions,
              cancel_actions: Xe.cancel_actions,
              duration: qt !== void 0 ? qt : hn.duration,
              start_delay: St !== void 0 ? St : hn.start_delay,
              interpolator: Cr !== void 0 ? Cr : hn.interpolator,
              direction: Wr !== void 0 ? Wr : hn.direction,
              repeat_count: ln !== void 0 ? ln : hn.repeat_count,
              start_value_typed: Ir,
              end_value_typed: gn
            }, so = Xe.variable_name && ((A == null ? void 0 : A.getVariable(Xe.variable_name)) || ee.get(Xe.variable_name));
            if (!so)
              return;
            const Pn = at.get(Xe.id);
            Pn && Pn.stop();
            const zt = a3(
              Sn,
              so,
              () => {
                at.delete(Xe.id);
              },
              (b, V) => ((A == null ? void 0 : A.execAnyActions) || nr)(b, V)
            );
            zt && at.set(Xe.id, zt);
            break;
          }
          case "animator_stop": {
            const Xe = at.get(Ve.animator_id);
            Xe && (Xe.stop(), at.delete(Ve.animator_id));
            break;
          }
          case "show_tooltip": {
            rr(Ve.id, Ve.multiple, A);
            break;
          }
          case "hide_tooltip": {
            er(Ve.id, A);
            break;
          }
          case "timer": {
            nt ? nt.execTimerAction(Ve.id, Ve.action) : z(Y(new Error("Incorrect timer action"), {
              additional: {
                id: Ve.id,
                action: Ve.action
              }
            }));
            break;
          }
          case "download": {
            ar(Ve.url, E.typed, A);
            break;
          }
          case "video": {
            De(Ve.id, Ve.action, A);
            break;
          }
          case "set_stored_value": {
            mr(A, Ve.name, ($t = Ve.value) == null ? void 0 : $t.value, (At = Ve.value) == null ? void 0 : At.type, Ve.lifetime);
            break;
          }
          case "set_state": {
            await ze(Ve.state_id, A);
            break;
          }
          case "submit": {
            await mt(A, Ve, E.typed);
            break;
          }
          case "scroll_to": {
            Ut(A, Ve);
            break;
          }
          case "scroll_by": {
            It(A, Ve);
            break;
          }
          case "update_structure": {
            g3(A, ee, z, Ve);
            break;
          }
          case "custom": {
            Rt({
              ...E,
              // todo remove in major release
              url: ""
            });
            break;
          }
          default:
            z(Y(new Error("Unknown type of action"), { additional: { type: Ve.type } }));
        }
      else if (xe)
        try {
          const Xe = xe.replace(/div-action:\/\//, ""), qt = /([^?]+)\?(.+)/.exec(Xe);
          if (!qt)
            return;
          const St = new URLSearchParams(qt[2]);
          switch (qt[1]) {
            case "set_state":
              await ze(St.get("state_id"), A);
              break;
            case "set_current_item":
            case "set_previous_item":
            case "set_next_item":
            case "scroll_to_start":
            case "scroll_to_end":
            case "scroll_backward":
            case "scroll_forward":
            case "scroll_to_position":
              hr(qt[1], St.get("id"), {
                item: St.get("item"),
                step: St.get("step"),
                overflow: St.get("overflow"),
                animated: St.get("animated")
              });
              break;
            case "set_variable":
              const Cr = St.get("name"), Wr = St.get("value");
              if (Cr && Wr !== null) {
                const gn = (A == null ? void 0 : A.getVariable(Cr)) || ee.get(Cr);
                gn ? gn.set(Wr) : z(Y(new Error("Cannot find variable"), { additional: { name: Cr } }));
              } else
                z(Y(new Error("Incorrect set_variable_action"), { additional: { url: Xe } }));
              break;
            case "timer":
              const ln = St.get("action"), Ir = St.get("id");
              nt ? nt.execTimerAction(Ir, ln) : z(Y(new Error("Incorrect timer action"), {
                additional: { id: Ir, action: ln }
              }));
              break;
            case "video":
              De(St.get("id"), St.get("action"), A);
              break;
            case "download":
              ar(St.get("url"), E.download_callbacks, A);
              break;
            case "show_tooltip":
              rr(St.get("id"), St.get("multiple"), A);
              break;
            case "hide_tooltip":
              er(St.get("id"), A);
              break;
            case "set_stored_value": {
              mr(A, St.get("name"), St.get("value"), St.get("type"), St.get("lifetime"));
              break;
            }
            default:
              z(Y(new Error("Unknown type of action"), { additional: { url: xe } }));
          }
        } catch (Xe) {
          z(Y(Xe, { additional: { url: xe } }));
        }
    }
  }
  async function nr(y, E = {}) {
    var z;
    if (!y || !Array.isArray(y))
      return;
    const A = ((z = E.componentContext) == null ? void 0 : z.logError) || I, te = (xe) => E.componentContext ? E.componentContext.getJsonWithVars(xe, E.additionalVars, !0) : st(A, xe, E.additionalVars, !0);
    for (let xe = 0; xe < y.length; ++xe) {
      let Ve = te(y[xe]);
      const $t = Ve.is_enabled;
      if ($t === 0 || $t === !1)
        continue;
      const At = Ve.url;
      if (Ve.typed)
        await tr(Ve, y[xe], E.componentContext);
      else if (At) {
        const qt = Ql(At);
        if (qt)
          if (xl(qt, ge)) {
            if (E.processUrls)
              if (Ve.target === "_blank") {
                const St = window.open("", "_blank");
                St && (St.opener = null, St.location = At);
              } else
                location.href = At;
          } else qt === "div-action" ? (await tr(Ve, y[xe], E.componentContext), await In()) : Ve.log_id && (Rt(Ve), await In());
      } else E.node && Array.isArray(Ve.menu_items) && Ve.menu_items.length && e(4, Mt = {
        items: Ve.menu_items,
        node: E.node,
        componentContext: E.componentContext
      });
    }
    y.forEach((xe) => {
      xe.log_id && jt(E.logType || "click", xe);
    });
  }
  function Rt(y) {
    H == null || H(y);
  }
  function pt(y, E) {
    const A = (y == null ? void 0 : y.logError) || I;
    if (!Array.isArray(E) || !E.length)
      return;
    const te = [];
    return E.forEach((z) => {
      let xe = !1;
      if (typeof z.condition != "string") {
        A(Y(new Error("variable_trigger has a condition that is not a string"), {
          additional: { condition: z.condition }
        }));
        return;
      }
      if (!Array.isArray(z.actions)) {
        A(Y(new Error("variable_trigger has no actions"), {
          additional: { condition: z.condition }
        }));
        return;
      }
      const Ve = z.mode || "on_condition";
      if (Ve !== "on_variable" && Ve !== "on_condition") {
        A(Y(new Error("variable_trigger has an unsupported mode"), { additional: { mode: Ve } }));
        return;
      }
      const At = _e(A, { condition: z.condition }, {
        additionalVars: y == null ? void 0 : y.variables,
        customFunctions: y == null ? void 0 : y.customFunctions,
        emptyVarsError: () => {
          A(Y(new Error("variable_trigger must have variables in the condition"), {
            additional: { condition: z.condition }
          }));
        }
      }).subscribe(async (Xe) => {
        Xe.condition !== void 0 && (// if condition is truthy
        Xe.condition && // and trigger mode matches
        (Ve === "on_variable" || Ve === "on_condition" && xe === !1) ? (xe = !!Xe.condition, y ? await y.execAnyActions(z.actions, { logType: "trigger" }) : await nr(z.actions, { logType: "trigger" })) : xe = !!Xe.condition);
      });
      te.push(At);
    }), () => {
      te.forEach((z) => {
        z();
      });
    };
  }
  function xt(y) {
    return ae[y];
  }
  function ie(y, E) {
    ae[y] = E;
  }
  const yr = /* @__PURE__ */ new Map(), kr = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map(), Tr = /* @__PURE__ */ new Map(), Br = /* @__PURE__ */ new Map();
  function cr(y, E, A = "error") {
    if (yr.has(y)) {
      I(Y(new Error("Duplicate instance id"), {
        level: A,
        additional: { id: y }
      }));
      return;
    }
    yr.set(y, E);
  }
  function ut(y) {
    yr.delete(y);
  }
  function vt(y) {
    if (!yr.has(y)) {
      I(Y(new Error("Missing instance with id"), { additional: { id: y } }));
      return;
    }
    return yr.get(y);
  }
  function Gt(y, E) {
    kr.set(y, E);
  }
  function Zt(y) {
    kr.delete(y);
  }
  function ur(y, E) {
    Ct.set(y, E);
  }
  function dt(y) {
    Ct.delete(y);
  }
  function fe(y, E) {
    const A = E.id;
    A && (Tr.has(A) && I(Y(new Error("Duplicate tooltip id"), { additional: { id: A } })), Tr.set(A, { onwerNode: y, tooltip: E }));
  }
  function wt(y) {
    const E = y.id;
    E && (Tr.delete(E), yt.some((A) => A.desc.id === E) && e(3, yt = yt.filter((A) => A.desc.id !== E)));
  }
  function or(y) {
    const E = Oe.get(y) || Do(void 0);
    return Oe.has(y) || Oe.set(y, E), E;
  }
  function Yt(y, E, A) {
    const te = Ne.get(y);
    if (te)
      return te;
    const z = io(y, E, A);
    return Ne.set(y, z), z;
  }
  function jr() {
    if (!Wt)
      return;
    Wt[he].forEach((E) => {
      const A = ee.get(E.name);
      A && A.setValue(E.color);
    });
  }
  function v() {
    return ge;
  }
  function se(y, E) {
    const A = p.get(y);
    if (A)
      return new A(E || {});
  }
  function d(y) {
    return {
      variables: Wo(ee, y.variables),
      derviedExpression(E) {
        return y.getDerivedFromVars(E);
      },
      processExpressions(E) {
        return y.getJsonWithVars(E);
      },
      execAction: vr,
      logError: I,
      getComponentProperty(E) {
        return y.getJsonWithVars(y.json[E]);
      },
      direction: le
    };
  }
  function B(y, E) {
    const A = /* @__PURE__ */ new Map(), te = (E == null ? void 0 : E.logError) || I;
    return y.forEach((z) => {
      if (A) {
        try {
          K2(z);
        } catch ($t) {
          te(Y($t));
          return;
        }
        const xe = z, Ve = A.get(xe.name) || [];
        Ve.push(Y2(xe)), A.set(xe.name, Ve);
      }
    }), A;
  }
  function Ie(y) {
    const E = {
      id: "",
      json: {},
      path: [],
      templateContext: {},
      logError(A) {
        A.additional = A.additional || {}, A.additional.path = E.path.join("/");
        {
          A.additional.json = E.json, A.additional.origJson = E.origJson;
          const te = [];
          let z = E;
          for (; z.parent; )
            te.push(z), z = z.parent;
          A.additional.fullpath = te;
        }
        I(A);
      },
      execAnyActions(A, te = {}) {
        return nr(A, {
          componentContext: E,
          processUrls: te.processUrls,
          node: te.node,
          logType: te.logType,
          additionalVars: te.additionalVars
        });
      },
      getDerivedFromVars(A, te, z = !1, xe = 1 / 0) {
        return _e(E.logError, A, {
          additionalVars: Wo(E.variables, te),
          keepComplex: z,
          customFunctions: E.customFunctions,
          maxDepth: xe
        });
      },
      getJsonWithVars(A, te, z = !1) {
        return st(E.logError, A, Wo(E.variables, te), z, E.customFunctions);
      },
      evalExpression(A, te, z) {
        return gl(Wo(ee, E.variables), E.customFunctions, A, te, z);
      },
      produceChildContext(A, te = {}) {
        const z = Ie(this);
        let xe = A, Ve = this.templateContext;
        const { templateContext: $t, json: At } = Et(xe, Ve);
        if (z.json = At, z.templateContext = $t, z.origJson = A, z.id = te.id || At.id || "", z.id) {
          let St = Br.get(z.id);
          St || (St = /* @__PURE__ */ new Set(), Br.set(z.id, St)), St.add(z);
        }
        te.key && (z.key = te.key), te.path !== void 0 && z.path.push(String(te.path)), A.type && !te.isRootState && z.path.push(A.type), te.isTooltipRoot && (z.isTooltipRoot = !0);
        let Xe;
        Array.isArray(At.variables) ? (Xe = Wo(this.variables, Wo(te.variables, /* @__PURE__ */ new Map())), At.variables.forEach((St) => {
          const Cr = Ht(St, z, Xe);
          Cr && Xe && Xe.set(Cr.getName(), Cr);
        })) : te.variables ? Xe = Wo(this.variables, te.variables) : this.variables && (Xe = this.variables), z.variables = Xe, Xe && (z.selfVariables = /* @__PURE__ */ new Set([...Xe.keys()]));
        let qt;
        return Array.isArray(At.functions) && (qt = B(At.functions, this)), z.customFunctions = X2(this.customFunctions, qt), Array.isArray(At.animators) && (z.animators = At.animators.reduce(
          (St, Cr) => (Cr.id && (St[Cr.id] = Cr), St),
          {}
        )), te.fake && (z.fakeElement = te.fake), te.isRootState && (z.isRootState = !0), z;
      },
      dup(A) {
        return { ...E, fakeElement: A };
      },
      getVariable(A, te) {
        var xe;
        const z = ((xe = E.variables) == null ? void 0 : xe.get(A)) || ee.get(A);
        if (z) {
          const Ve = z.getType();
          if (te && Ve !== te) {
            E.logError(Y(new Error(`Variable should have type "${te}"`), { additional: { name: A, foundType: Ve } }));
            return;
          }
        }
        return z;
      },
      getAnimator(A) {
        var te, z;
        return ((te = E.animators) == null ? void 0 : te[A]) || ((z = E.parent) == null ? void 0 : z.getAnimator(A)) || void 0;
      },
      registerState(A, te) {
        const z = c3(E.parent);
        return z && (z.states = z.states || {}, z.states[A] = z.states[A] || [], z.states[A].push(te)), () => {
          var xe;
          (xe = z == null ? void 0 : z.states) != null && xe[A] && (z.states[A] = z.states[A].filter((Ve) => Ve !== te), z.states[A].length || delete z.states[A]);
        };
      },
      registerPager(A) {
        const te = E.parent;
        return te ? (te.pagers = te.pagers || /* @__PURE__ */ new Map(), te.pagers.has(A) ? {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          update() {
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          destroy() {
          }
        } : (te.pagers.set(A, null), {
          update(z) {
            var At, Xe;
            te.pagers && te.pagers.set(A, z);
            const xe = A ? (At = te.pagerListeners) == null ? void 0 : At.get(A) : void 0, Ve = (Xe = te.pagerListeners) == null ? void 0 : Xe.get(void 0);
            [...xe || [], ...Ve || []].forEach((qt) => {
              qt(z);
            });
          },
          destroy() {
            te.pagers && te.pagers.delete(A);
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
      listenPager(A, te) {
        var At, Xe, qt;
        let z = E.parent;
        for (; z && !(z.pagers && (A ? z.pagers.get(A) : (At = z.pagers) != null && At.size)); )
          z = z.parent;
        if (!z)
          return () => {
          };
        z.pagerListeners = E.pagerListeners || /* @__PURE__ */ new Map();
        const xe = z.pagerListeners.get(A) || [];
        z.pagerListeners.has(A) || z.pagerListeners.set(A, xe), xe.push(te);
        const Ve = A || ((Xe = z.pagers) == null ? void 0 : Xe.keys().next().value) || void 0, $t = (qt = z.pagers) == null ? void 0 : qt.get(Ve);
        return $t && te($t), () => {
          if (!z.pagerListeners)
            return;
          let St = z.pagerListeners.get(Ve);
          St && (St = St.filter((Cr) => Cr !== te) || [], St.length ? z.pagerListeners.set(A, St) : z.pagerListeners.delete(A));
        };
      },
      destroy() {
        const A = Br.get(E.id);
        A && (A.delete(E), A.size || Br.delete(E.id));
      }
    };
    return y ? (E.parent = y, E.path = y.path.slice(), y.fakeElement && (E.fakeElement = y.fakeElement)) : (E.json = { type: "root" }, E.isRootState = !0), E;
  }
  function He(y) {
    Ee ? ft.push(y) : clearTimeout(y);
  }
  _i(Kr, {
    logStat: jt,
    hasTemplate: lt,
    genId: q,
    genClass: Tt,
    execCustomAction: Rt,
    processVariableTriggers: pt,
    isRunning: xt,
    setRunning: ie,
    pagerChildrenClipEnabled: D,
    pagerMouseDragEnabled: M,
    registerInstance: cr,
    unregisterInstance: ut,
    registerParentOf: Gt,
    unregisterParentOf: Zt,
    registerTooltip: fe,
    unregisterTooltip: wt,
    onTooltipClose: Ae,
    tooltipRoot: T,
    registerFocusable: ur,
    unregisterFocusable: dt,
    addSvgFilter: Xt,
    removeSvgFilter: je,
    registerId: Be,
    getComponentId: Vt,
    preparePrototypeVariables: Pe,
    getCustomization: K,
    getBuiltinProtocols: v,
    getExtension: se,
    getExtensionContext: d,
    registerTimeout: He,
    typefaceProvider: ne,
    isDesktop: ve,
    isPointerFocus: Sa,
    customComponents: X,
    direction: Z,
    videoPlayerProvider: Q,
    awaitGlobalVariable: Yt,
    componentDevtool: Dt,
    devtoolCreateHierarchy: me
  }), _i(To, {
    hasAction() {
      return !1;
    }
  }), _i(ya, {
    runVisibilityTransition(y, E, A, te, z) {
      return Promise.resolve();
    },
    registerChildWithTransitionIn(y, E, A, te) {
      return Promise.resolve();
    },
    registerChildWithTransitionOut(y, E, A, te) {
      return Promise.resolve();
    },
    registerChildWithTransitionChange(y, E, A, te) {
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
  }), _i(wa, { isEnabled: Jo(!0) });
  function ke(y, E) {
    const A = ee.get(y);
    return (A == null ? void 0 : A.getType()) === E;
  }
  function R(y, E) {
    const A = ee.get(y);
    A ? A.setValue(E) : I(Y(new Error("Cannot find variable"), { additional: { name: y } }));
  }
  function Jt(y, E, A) {
    const te = (E == null ? void 0 : E.logError) || I, z = y.name, xe = y.value_type;
    if (typeof y.get != "string" || !y.get) {
      te(Y(new Error("Incorrect property getter"), { additional: { name: z } }));
      return;
    }
    if (!z) {
      te(Y(new Error("Missing property name")));
      return;
    }
    if (!xe) {
      te(Y(new Error("Missing property value_type")));
      return;
    }
    const Ve = E ? E.getDerivedFromVars(y.get, void 0, !0) : _e(I, y.get, { keepComplex: !0 });
    if (Kl(Ve) === void 0)
      return;
    const At = (Xe) => {
      const qt = Os(y.new_value_variable_name || "new_value", y.value_type, Xe), St = new Map(A);
      St.set(qt.getName(), qt), Array.isArray(y.set) && y.set.length ? E ? E.execAnyActions(y.set, { additionalVars: St }) : nr(y.set, { additionalVars: St }) : te(Y(new Error("Cannot set property. No setters provided."), { additional: { name: z } }));
    };
    return {
      getName() {
        return z;
      },
      subscribe(Xe) {
        return Ve.subscribe(Xe);
      },
      set(Xe) {
        const qt = Oh(Xe, xe);
        At(qt);
      },
      setValue: At,
      getValue() {
        return Kl(Ve);
      },
      getType() {
        return xe;
      }
    };
  }
  function Ht(y, E, A) {
    if (y.type === "property")
      return Jt(y, E, A);
    if (!y.type || !y.name || !(y.type in Xl) || !("value" in y))
      return;
    const te = y.value;
    let z = E ? E.getJsonWithVars(te, A, !0) : st(I, te, A, !0);
    if (!(te && typeof te == "string" && z === void 0)) {
      y.type === "integer" && typeof z == "number" && (z > Number.MAX_SAFE_INTEGER || z < Number.MIN_SAFE_INTEGER) && I(Y(new Error("The value of the integer variable could lose accuracy"), {
        level: "warn",
        additional: { name: y.name, value: z }
      }));
      try {
        return io(y.name, y.type, z);
      } catch (xe) {
        I(Y(xe, { additional: { name: y.name } }));
      }
    }
  }
  function Ye(y) {
    const E = Ht(y);
    E && (Ge.set(y.name, E), ee.set(y.name, E));
  }
  for (const [y, E] of Re)
    ee.has(y) || ee.set(y, E);
  const ct = (Yr = l == null ? void 0 : l.card) == null ? void 0 : Yr.variables;
  Array.isArray(ct) && ct.forEach((y) => {
    if (y && y.name) {
      if (Ge.has(y.name)) {
        I(Y(new Error("Duplicate variable"), { additional: { name: y.name } }));
        return;
      }
      Ye(y);
    }
  });
  const Wt = l.palette;
  Wt && Wt[he].forEach((E) => {
    if (Ge.has(E.name)) {
      I(Y(new Error("Duplicate variable"), { additional: { name: E.name } }));
      return;
    }
    try {
      const A = io(E.name, "color", E.color);
      Ge.set(E.name, A), ee.set(E.name, A);
    } catch (A) {
      I(Y(A, { additional: { name: E.name } }));
    }
  }), we.subscribe((y) => {
    if (y && !ee.has(y)) {
      const E = Re.get(y);
      ee.set(y, E);
      const A = Oe.get(y);
      if (A) {
        let z = 0;
        E.subscribe(() => {
          A.set(++z);
        });
      }
      const te = Ne.get(y);
      te && te.getType() === E.getType() && E.subscribe((z) => {
        te.set(z);
      });
    }
  });
  const Fr = () => {
    var y;
    pt(void 0, (y = l == null ? void 0 : l.card) == null ? void 0 : y.variable_triggers);
  }, br = (pn = l == null ? void 0 : l.card) == null ? void 0 : pn.timers;
  if (br && typeof document < "u") {
    const y = nt = new t3({
      logError: I,
      applyVars: (E) => st(I, E),
      hasVariableWithType: ke,
      setVariableValue: R,
      execAnyActions: nr
    });
    br.forEach((E) => y.createTimer(E));
  }
  const Mr = Ie();
  Array.isArray((Cn = l.card) == null ? void 0 : Cn.functions) && (Mr.customFunctions = B(l.card.functions));
  let jn;
  function Ae(y) {
    e(3, yt = yt.filter((E) => E.internalId !== y));
  }
  Zn(() => {
    js++, js === 1 && (window.addEventListener("keydown", sd), window.addEventListener("pointerdown", ld)), In().then(() => {
      Ee && Fr();
    });
  }), sn(() => {
    Ee = !1, js--, js || (window.removeEventListener("keydown", sd), window.removeEventListener("pointerdown", ld));
    for (const [y, E] of at)
      E.stop();
    nt && nt.destroy(), yt.forEach((y) => {
      y.timeoutId && (clearTimeout(y.timeoutId), y.timeoutId = null);
    }), ft.forEach((y) => {
      clearTimeout(y);
    });
  });
  const Qr = () => e(4, Mt = void 0);
  return t.$$set = (y) => {
    "id" in y && e(13, a = y.id), "json" in y && e(11, l = y.json), "platform" in y && e(14, u = y.platform), "theme" in y && e(12, c = y.theme), "globalVariablesController" in y && e(15, f = y.globalVariablesController), "mix" in y && e(0, _ = y.mix), "customization" in y && e(16, h = y.customization), "builtinProtocols" in y && e(17, m = y.builtinProtocols), "extensions" in y && e(18, p = y.extensions), "onError" in y && e(19, w = y.onError), "onStat" in y && e(20, k = y.onStat), "onSubmit" in y && e(21, N = y.onSubmit), "onCustomAction" in y && e(22, H = y.onCustomAction), "onComponent" in y && e(23, O = y.onComponent), "typefaceProvider" in y && e(24, ne = y.typefaceProvider), "fetchInit" in y && e(25, de = y.fetchInit), "tooltipRoot" in y && e(26, T = y.tooltipRoot), "customComponents" in y && e(27, X = y.customComponents), "direction" in y && e(28, le = y.direction), "store" in y && e(29, C = y.store), "pagerChildrenClipEnabled" in y && e(30, D = y.pagerChildrenClipEnabled), "pagerMouseDragEnabled" in y && e(31, M = y.pagerMouseDragEnabled), "weekStartDay" in y && e(32, W = y.weekStartDay), "videoPlayerProvider" in y && e(33, Q = y.videoPlayerProvider), "devtoolCreateHierarchy" in y && e(34, me = y.devtoolCreateHierarchy);
  }, t.$$.update = () => {
    var y, E;
    if (t.$$.dirty[0] & /*theme*/
    4096 | t.$$.dirty[1] & /*themeQuery*/
    2048 && (c === "light" || c === "dark" ? e(41, he = c) : c === "system" ? typeof matchMedia < "u" ? (Se || (e(42, Se = matchMedia("(prefers-color-scheme: dark)")), Se.addListener(et)), e(41, he = Se.matches ? "dark" : "light")) : e(41, he = "light") : I(Y(new Error("Unsupported theme")))), t.$$.dirty[1] & /*currentTheme*/
    1024 && he && jr(), t.$$.dirty[0] & /*json*/
    2048) {
      e(1, ce = !1);
      const A = Z2(l);
      A && (e(1, ce = !0), I(A));
    }
    if (t.$$.dirty[0] & /*json*/
    2048 && (n = l.templates || {}), t.$$.dirty[0] & /*json*/
    2048 && (y = l == null ? void 0 : l.card) != null && y.variables && Array.isArray(l.card.variables) && l.card.variables !== ct && l.card.variables.forEach((A) => {
      A && A.name && !Ge.has(A.name) && !ee.has(A.name) && Ye(A);
    }), t.$$.dirty[0] & /*json*/
    2048 && e(44, o = (E = l == null ? void 0 : l.card) == null ? void 0 : E.states), t.$$.dirty[0] & /*hasError, hasIdError*/
    6 | t.$$.dirty[1] & /*states, rootComponentContext*/
    12288 && o && !ce && !re) {
      const A = {
        type: "state",
        id: "root",
        width: { type: "match_parent" },
        height: { type: "match_parent" },
        states: o.map((te) => ({
          state_id: te.state_id.toString(),
          div: te.div
        }))
      };
      e(6, jn = Mr.produceChildContext(A, { isRootState: !0 }));
    }
  }, [
    _,
    ce,
    re,
    yt,
    Mt,
    Ft,
    jn,
    i,
    s,
    ve,
    Z,
    l,
    c,
    a,
    u,
    f,
    h,
    m,
    p,
    w,
    k,
    N,
    H,
    O,
    ne,
    de,
    T,
    X,
    le,
    C,
    D,
    M,
    W,
    Q,
    me,
    Je,
    qe,
    be,
    Te,
    ue,
    vr,
    he,
    Se,
    Mr,
    o,
    Qr
  ];
}
class X3 extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      Y3,
      G3,
      Sr,
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
const Z3 = 8;
class t4 {
  constructor(r) {
    Ar(this, "widthVariableName");
    Ar(this, "heightVariableName");
    Ar(this, "resizeObserver");
    Ar(this, "context");
    Ar(this, "node");
    Ar(this, "sizeHistory", {});
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
        if (++o > Z3) {
          const i = new Error("Recursive layout in size_provider");
          i.level = "warn", i.additional = {
            widthVariableName: this.widthVariableName,
            heightVariableName: this.heightVariableName
          }, e.logError(i);
          break;
        }
        await In();
      }
      this.sizeHistory = {};
    })), (n = this.resizeObserver) == null || n.observe(r), this.recalcProps();
  }
  unmountView(r, e) {
    var n;
    (n = this.resizeObserver) == null || n.disconnect(), this.resizeObserver = void 0;
  }
}
const Vi = 8;
class r4 {
  constructor(r) {
    Ar(this, "context");
    Ar(this, "params");
    Ar(this, "startCoords");
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
    (Math.abs(e) > Vi || Math.abs(n) > Vi) && (Math.abs(e) > Math.abs(n) ? e > Vi ? this.processActions("swipe_right") : e < -Vi && this.processActions("swipe_left") : n > Vi ? this.processActions("swipe_down") : n < -Vi && this.processActions("swipe_up"), this.startCoords = void 0);
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
function Q3(t) {
  return t instanceof HTMLElement;
}
function o4(t) {
  return class {
    constructor(e) {
      Ar(this, "params");
      Ar(this, "animItem");
      Ar(this, "wrapper");
      Ar(this, "isPlayingUnsubscriber");
      Ar(this, "isPlaying", !0);
      Ar(this, "unsubscribe");
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
      const o = Array.from(e.children).filter(Q3);
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
          var w;
          (w = this.animItem) == null || w.destroy();
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
            let k = 1, N = 0;
            p.addEventListener("loopComplete", () => {
              ++N, l !== -1 && N === l + 1 ? (p.stop(), p.goToAndStop(p.totalFrames, !0)) : (u === "reverse" && (k *= -1, p.setDirection(k)), p.goToAndPlay(k === 1 ? 0 : p.totalFrames, !0));
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
function s4(t, r = {}) {
  return class {
    constructor() {
      Ar(this, "prevDOM", null);
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
function l4(t) {
  const { target: r, hydrate: e, ...n } = t, o = new X3({
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
function a4(t, r) {
  return x3(t, r).result;
}
function x3(t, r) {
  let e;
  try {
    e = tl(t, {
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
  return gl((r == null ? void 0 : r.variables) || /* @__PURE__ */ new Map(), void 0, void 0, e);
}
function u4() {
  return Array.from(rs.keys());
}
function c4(t, r) {
  return tl(t, {
    startRule: (r == null ? void 0 : r.type) === "json" ? "JsonStringContents" : "start"
  });
}
export {
  r4 as Gesture,
  t4 as SizeProvider,
  e4 as createGlobalVariablesController,
  io as createVariable,
  a4 as evalExpression,
  x3 as evalExpressionWithFullResult,
  u4 as functionNames,
  o4 as lottieExtensionBuilder,
  s4 as markdownExtensionBuilder,
  c4 as parseExpression,
  l4 as render,
  ji as valToString,
  no as walkExpression
};
//# sourceMappingURL=client-devtool.mjs.map

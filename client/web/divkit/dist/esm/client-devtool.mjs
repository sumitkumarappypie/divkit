var y_ = Object.defineProperty;
var w_ = (t, r, e) => r in t ? y_(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var Ar = (t, r, e) => w_(t, typeof r != "symbol" ? r + "" : r, e);
/*!
    DivKit v32.39.0
    https://github.com/divkit/divkit
    @licence Apache-2.0
*/
function la(t) {
  return BigInt(t);
}
const ns = la("9223372036854775807"), os = la("-9223372036854775808");
function _n(t) {
  const r = la(t);
  if (r > ns || r < os)
    throw new Error("Integer overflow.");
  return r;
}
const gi = _n(0);
function nd(t) {
  let r = t;
  return r < 0 && (r = -r), r;
}
function od(t) {
  let r = 0;
  return t > 0 ? r = 1 : t < 0 && (r = -1), _n(r);
}
function k_(t, r) {
  return r && r[3] && r[7] ? { type: "ConditionalExpression", test: t, consequent: r[3], alternate: r[7] } : t;
}
function v_(t, r) {
  return r && r[3] ? { type: "TryExpression", test: t, alternate: r[3] } : t;
}
function us(t, r) {
  return r.length ? r.reduce((e, n) => ({
    type: "BinaryExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), t) : t;
}
function Fa(t, r) {
  return r.length ? r.reduce((e, n) => ({
    type: "LogicalExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), t) : t;
}
function j_(t, r) {
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
function C_(t) {
  return t === "true" || t === "false" ? { type: "BooleanLiteral", value: t === "true" } : { type: "Variable", id: { type: "Identifier", name: t } };
}
function Ia(t) {
  if (t.every((e) => typeof e == "string"))
    return { type: "StringLiteral", value: t.join("") };
  let r = t.reduce((e, n) => (typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e), []).reduce((e, n) => (typeof n == "string" ? e.quasis.push({ type: "StringLiteral", value: n }) : (e.quasis.length === e.expressions.length && e.quasis.push({ type: "StringLiteral", value: "" }), e.expressions.push(n)), e), {
    type: "TemplateLiteral",
    quasis: [],
    expressions: []
  });
  return r.quasis.length === r.expressions.length && r.quasis.push({ type: "StringLiteral", value: "" }), r;
}
function E_(t) {
  try {
    return _n(t);
  } catch {
    throw new Error(`Value ${t} can't be converted to Integer type.`);
  }
}
function Da(t) {
  if (t === "'" || t === "\\")
    return t;
  throw new Error("Incorrect string escape");
}
function A_(t, r) {
  function e() {
    this.constructor = t;
  }
  e.prototype = r.prototype, t.prototype = new e();
}
function zi(t, r, e, n) {
  var o = Error.call(this, t);
  return Object.setPrototypeOf && Object.setPrototypeOf(o, zi.prototype), o.expected = r, o.found = e, o.location = n, o.name = "SyntaxError", o;
}
A_(zi, Error);
function kl(t, r, e) {
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
      var a = this.location.end, l = kl("", i.line.toString().length, " "), c = e[o.line - 1], u = o.line === a.line ? a.column : c.length + 1, f = u - o.column || 1;
      r += `
 --> ` + s + `
` + l + ` |
` + i.line + " | " + c + `
` + l + " | " + kl("", o.column - 1, " ") + kl("", f, "^");
    } else
      r += `
 at ` + s;
  }
  return r;
};
zi.buildMessage = function(t, r) {
  var e = {
    literal: function(c) {
      return '"' + o(c.text) + '"';
    },
    class: function(c) {
      var u = c.parts.map(function(f) {
        return Array.isArray(f) ? i(f[0]) + "-" + i(f[1]) : i(f);
      });
      return "[" + (c.inverted ? "^" : "") + u.join("") + "]";
    },
    any: function() {
      return "any character";
    },
    end: function() {
      return "end of input";
    },
    other: function(c) {
      return c.description;
    }
  };
  function n(c) {
    return c.charCodeAt(0).toString(16).toUpperCase();
  }
  function o(c) {
    return c.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(u) {
      return "\\x0" + n(u);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(u) {
      return "\\x" + n(u);
    });
  }
  function i(c) {
    return c.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(u) {
      return "\\x0" + n(u);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(u) {
      return "\\x" + n(u);
    });
  }
  function s(c) {
    return e[c.type](c);
  }
  function a(c) {
    var u = c.map(s), f, _;
    if (u.sort(), u.length > 0) {
      for (f = 1, _ = 1; f < u.length; f++)
        u[f - 1] !== u[f] && (u[_] = u[f], _++);
      u.length = _;
    }
    switch (u.length) {
      case 1:
        return u[0];
      case 2:
        return u[0] + " or " + u[1];
      default:
        return u.slice(0, -1).join(", ") + ", or " + u[u.length - 1];
    }
  }
  function l(c) {
    return c ? '"' + o(c) + '"' : "end of input";
  }
  return "Expected " + a(t) + " but " + l(r) + " found.";
};
function $s(t, r) {
  r = r !== void 0 ? r : {};
  var e = {}, n = r.grammarSource, o = { start: Xr, JsonStringContents: mn }, i = Xr, s = "@{", a = "}", l = "@{}", c = "\\", u = "?", f = ":", _ = "!:", h = "||", m = "&&", p = "==", w = "!=", k = ">=", z = ">", H = "<=", O = "<", oe = "+", fe = "-", T = "/", Z = "*", ce = "%", C = "!", D = ".", M = "(", W = ")", Q = ",", me = "'", Ae = "e", Ce = "E", he = /^[^}]/, Ve = /^[^'}]/, re = /^[0-9]/, $e = /^[a-zA-Z_]/, Ge = /^[a-zA-Z_0-9]/, Je = /^[ \t\r\n]/, ke = Xe("@{", !1), De = Xe("}", !1), ue = Xe("@{}", !1), ae = Xe("\\", !1), de = Wt(), ee = dt(["}"], !0, !1), ge = Xe("?", !1), ie = Xe(":", !1), Se = Xe("!:", !1), He = Xe("||", !1), We = Xe("&&", !1), te = Xe("==", !1), Oe = Xe("!=", !1), Pe = Xe(">=", !1), nt = Xe(">", !1), st = Xe("<=", !1), et = Xe("<", !1), wt = Xe("+", !1), rt = Xe("-", !1), Pt = Xe("/", !1), ct = Xe("*", !1), X = Xe("%", !1), _e = Xe("!", !1), lt = Xe(".", !1), Fe = Xe("(", !1), I = Xe(")", !1), jt = Xe(",", !1), _t = kr("string"), At = Xe("'", !1), Dt = dt(["'", "}"], !0, !1), ot = kr("integer"), K = dt([["0", "9"]], !1, !1), Mt = kr("number"), Vt = Xe("e", !1), Jt = Xe("E", !1), qt = dt([["a", "z"], ["A", "Z"], "_"], !1, !1), be = dt([["a", "z"], ["A", "Z"], "_", ["0", "9"]], !1, !1), Ke = kr("whitespace"), pt = dt([" ", "	", "\r", `
`], !1, !1), we = function(b) {
    return b;
  }, xe = function(b) {
    return Ia(b);
  }, Be = function(b) {
    return b;
  }, nr = function() {
    return "";
  }, Ne = function() {
    return Ot();
  }, bt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, Ft = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, It = function(b) {
    return b;
  }, hr = function(b) {
    return Da(b);
  }, ze = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, kt = function(b, V) {
    return k_(b, V);
  }, lr = function(b, V) {
    return v_(b, V);
  }, er = function(b, V) {
    return Fa(b, V);
  }, Xt = function(b, V) {
    return Fa(b, V);
  }, mr = function(b, V) {
    return us(b, V);
  }, vr = function(b, V) {
    return us(b, V);
  }, xt = function(b, V) {
    return us(b, V);
  }, $t = function(b, V) {
    return us(b, V);
  }, J = function(b) {
    return b;
  }, ft = function(b) {
    return b;
  }, Gt = function(b, V) {
    return { type: "UnaryExpression", operator: b, argument: V };
  }, Et = function() {
    throw new Error("Incorrect unary operator");
  }, br = function(b, V) {
    return j_(b, V);
  }, Er = function(b, V) {
    return { type: "CallExpression", callee: b, arguments: V };
  }, wr = function(b, V) {
    return [b, ...V];
  }, Dr = function(b) {
    return b;
  }, zr = function(b) {
    return b;
  }, tr = function(b) {
    return Ia(b);
  }, at = function(b) {
    return b;
  }, vt = function() {
    return "";
  }, Zt = function() {
    return Ot();
  }, Yt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, _r = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, ut = function(b) {
    return b;
  }, se = function(b) {
    return Da(b);
  }, mt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, or = function() {
    return { type: "IntegerLiteral", value: E_(Ot()) };
  }, yr = function() {
    return { type: "NumberLiteral", value: parseFloat(Ot()) };
  }, ar = function() {
    return { type: "NumberLiteral", value: parseFloat(Ot()) };
  }, v = function() {
    const b = Ot();
    if (/\.\./.test(b) || /\.$/.test(b))
      throw new Error("Unexpected token: .");
    return C_(b);
  }, le = function() {
    return { type: "Identifier", name: Ot() };
  }, d = 0, B = 0, Me = [{ line: 1, column: 1 }], qe = 0, ve = [], R = 0, Tt;
  if ("startRule" in r) {
    if (!(r.startRule in o))
      throw new Error(`Can't start parsing from rule "` + r.startRule + '".');
    i = o[r.startRule];
  }
  function Ot() {
    return t.substring(B, d);
  }
  function Xe(b, V) {
    return { type: "literal", text: b, ignoreCase: V };
  }
  function dt(b, V, $) {
    return { type: "class", parts: b, inverted: V, ignoreCase: $ };
  }
  function Wt() {
    return { type: "any" };
  }
  function Vr() {
    return { type: "end" };
  }
  function kr(b) {
    return { type: "other", description: b };
  }
  function Tr(b) {
    var V = Me[b], $;
    if (V)
      return V;
    for ($ = b - 1; !Me[$]; )
      $--;
    for (V = Me[$], V = {
      line: V.line,
      column: V.column
    }; $ < b; )
      t.charCodeAt($) === 10 ? (V.line++, V.column = 1) : V.column++, $++;
    return Me[b] = V, V;
  }
  function Cn(b, V, $) {
    var P = Tr(b), je = Tr(V), ye = {
      source: n,
      start: {
        offset: b,
        line: P.line,
        column: P.column
      },
      end: {
        offset: V,
        line: je.line,
        column: je.column
      }
    };
    return ye;
  }
  function Ee(b) {
    d < qe || (d > qe && (qe = d, ve = []), ve.push(b));
  }
  function Yr(b, V, $) {
    return new zi(
      zi.buildMessage(b, V),
      b,
      V,
      $
    );
  }
  function Xr() {
    var b, V;
    return b = d, Ht(), V = y(), V !== e ? (Ht(), B = b, b = we(V)) : (d = b, b = e), b;
  }
  function mn() {
    var b, V, $;
    for (b = d, V = [], $ = Vn(); $ !== e; )
      V.push($), $ = Vn();
    return B = b, V = xe(V), b = V, b;
  }
  function Vn() {
    var b, V, $, P, je;
    if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, R === 0 && Ee(ke)), V !== e ? ($ = Ht(), P = y(), P !== e ? (Ht(), t.charCodeAt(d) === 125 ? (je = a, d++) : (je = e, R === 0 && Ee(De)), je !== e ? (B = b, b = Be(P)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.substr(d, 3) === l ? (V = l, d += 3) : (V = e, R === 0 && Ee(ue)), V !== e && (B = b, V = nr()), b = V, b === e && (b = d, V = d, R++, t.charCodeAt(d) === 92 ? ($ = c, d++) : ($ = e, R === 0 && Ee(ae)), $ === e && (t.substr(d, 2) === s ? ($ = s, d += 2) : ($ = e, R === 0 && Ee(ke))), R--, $ === e ? V = void 0 : (d = V, V = e), V !== e ? (t.length > d ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ee(de)), $ !== e ? (B = b, b = Ne()) : (d = b, b = e)) : (d = b, b = e), b === e))) {
      if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, R === 0 && Ee(ke)), V !== e) {
        if ($ = [], he.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, R === 0 && Ee(ee)), P !== e)
          for (; P !== e; )
            $.push(P), he.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, R === 0 && Ee(ee));
        else
          $ = e;
        $ !== e ? (t.charCodeAt(d) === 125 ? (P = a, d++) : (P = e, R === 0 && Ee(De)), P !== e ? (B = b, b = bt()) : (d = b, b = e)) : (d = b, b = e);
      } else
        d = b, b = e;
      b === e && (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, R === 0 && Ee(ke)), V !== e && (B = b, V = Ft()), b = V, b === e && (b = d, t.charCodeAt(d) === 92 ? (V = c, d++) : (V = e, R === 0 && Ee(ae)), V !== e ? (t.substr(d, 2) === s ? ($ = s, d += 2) : ($ = e, R === 0 && Ee(ke)), $ !== e ? (B = b, b = It($)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = c, d++) : (V = e, R === 0 && Ee(ae)), V !== e ? (t.length > d ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ee(de)), $ !== e ? (B = b, b = hr($)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = c, d++) : (V = e, R === 0 && Ee(ae)), V !== e && (B = b, V = ze()), b = V))));
    }
    return b;
  }
  function y() {
    var b, V, $, P, je, ye, Bt, Rt, qr, Mr, Rr;
    return b = d, V = E(), V !== e ? ($ = d, P = Ht(), t.charCodeAt(d) === 63 ? (je = u, d++) : (je = e, R === 0 && Ee(ge)), je !== e ? (ye = Ht(), Bt = y(), Bt !== e ? (Rt = Ht(), t.charCodeAt(d) === 58 ? (qr = f, d++) : (qr = e, R === 0 && Ee(ie)), qr !== e ? (Mr = Ht(), Rr = y(), Rr !== e ? (P = [P, je, ye, Bt, Rt, qr, Mr, Rr], $ = P) : (d = $, $ = e)) : (d = $, $ = e)) : (d = $, $ = e)) : (d = $, $ = e), $ === e && ($ = null), B = b, b = kt(V, $)) : (d = b, b = e), b;
  }
  function E() {
    var b, V, $, P, je, ye, Bt;
    return b = d, V = A(), V !== e ? ($ = d, P = Ht(), t.substr(d, 2) === _ ? (je = _, d += 2) : (je = e, R === 0 && Ee(Se)), je !== e ? (ye = Ht(), Bt = y(), Bt !== e ? (P = [P, je, ye, Bt], $ = P) : (d = $, $ = e)) : (d = $, $ = e), $ === e && ($ = null), B = b, b = lr(V, $)) : (d = b, b = e), b;
  }
  function A() {
    var b, V, $, P, je, ye, Bt, Rt;
    if (b = d, V = ne(), V !== e) {
      for ($ = [], P = d, je = Ht(), t.substr(d, 2) === h ? (ye = h, d += 2) : (ye = e, R === 0 && Ee(He)), ye !== e ? (Bt = Ht(), Rt = ne(), Rt !== e ? (je = [je, ye, Bt, Rt], P = je) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        $.push(P), P = d, je = Ht(), t.substr(d, 2) === h ? (ye = h, d += 2) : (ye = e, R === 0 && Ee(He)), ye !== e ? (Bt = Ht(), Rt = ne(), Rt !== e ? (je = [je, ye, Bt, Rt], P = je) : (d = P, P = e)) : (d = P, P = e);
      B = b, b = er(V, $);
    } else
      d = b, b = e;
    return b;
  }
  function ne() {
    var b, V, $, P, je, ye, Bt, Rt;
    if (b = d, V = N(), V !== e) {
      for ($ = [], P = d, je = Ht(), t.substr(d, 2) === m ? (ye = m, d += 2) : (ye = e, R === 0 && Ee(We)), ye !== e ? (Bt = Ht(), Rt = N(), Rt !== e ? (je = [je, ye, Bt, Rt], P = je) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        $.push(P), P = d, je = Ht(), t.substr(d, 2) === m ? (ye = m, d += 2) : (ye = e, R === 0 && Ee(We)), ye !== e ? (Bt = Ht(), Rt = N(), Rt !== e ? (je = [je, ye, Bt, Rt], P = je) : (d = P, P = e)) : (d = P, P = e);
      B = b, b = Xt(V, $);
    } else
      d = b, b = e;
    return b;
  }
  function N() {
    var b, V, $, P, je, ye, Bt, Rt;
    if (b = d, V = Ze(), V !== e) {
      for ($ = [], P = d, je = Ht(), t.substr(d, 2) === p ? (ye = p, d += 2) : (ye = e, R === 0 && Ee(te)), ye === e && (t.substr(d, 2) === w ? (ye = w, d += 2) : (ye = e, R === 0 && Ee(Oe))), ye !== e ? (Bt = Ht(), Rt = Ze(), Rt !== e ? (je = [je, ye, Bt, Rt], P = je) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        $.push(P), P = d, je = Ht(), t.substr(d, 2) === p ? (ye = p, d += 2) : (ye = e, R === 0 && Ee(te)), ye === e && (t.substr(d, 2) === w ? (ye = w, d += 2) : (ye = e, R === 0 && Ee(Oe))), ye !== e ? (Bt = Ht(), Rt = Ze(), Rt !== e ? (je = [je, ye, Bt, Rt], P = je) : (d = P, P = e)) : (d = P, P = e);
      B = b, b = mr(V, $);
    } else
      d = b, b = e;
    return b;
  }
  function Ze() {
    var b, V, $, P, je, ye, Bt, Rt;
    if (b = d, V = Ie(), V !== e) {
      for ($ = [], P = d, je = Ht(), t.substr(d, 2) === k ? (ye = k, d += 2) : (ye = e, R === 0 && Ee(Pe)), ye === e && (t.charCodeAt(d) === 62 ? (ye = z, d++) : (ye = e, R === 0 && Ee(nt)), ye === e && (t.substr(d, 2) === H ? (ye = H, d += 2) : (ye = e, R === 0 && Ee(st)), ye === e && (t.charCodeAt(d) === 60 ? (ye = O, d++) : (ye = e, R === 0 && Ee(et))))), ye !== e ? (Bt = Ht(), Rt = Ie(), Rt !== e ? (je = [je, ye, Bt, Rt], P = je) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        $.push(P), P = d, je = Ht(), t.substr(d, 2) === k ? (ye = k, d += 2) : (ye = e, R === 0 && Ee(Pe)), ye === e && (t.charCodeAt(d) === 62 ? (ye = z, d++) : (ye = e, R === 0 && Ee(nt)), ye === e && (t.substr(d, 2) === H ? (ye = H, d += 2) : (ye = e, R === 0 && Ee(st)), ye === e && (t.charCodeAt(d) === 60 ? (ye = O, d++) : (ye = e, R === 0 && Ee(et))))), ye !== e ? (Bt = Ht(), Rt = Ie(), Rt !== e ? (je = [je, ye, Bt, Rt], P = je) : (d = P, P = e)) : (d = P, P = e);
      B = b, b = vr(V, $);
    } else
      d = b, b = e;
    return b;
  }
  function Ie() {
    var b, V, $, P, je, ye, Bt, Rt;
    if (b = d, V = Qt(), V !== e) {
      for ($ = [], P = d, je = Ht(), t.charCodeAt(d) === 43 ? (ye = oe, d++) : (ye = e, R === 0 && Ee(wt)), ye === e && (t.charCodeAt(d) === 45 ? (ye = fe, d++) : (ye = e, R === 0 && Ee(rt))), ye !== e ? (Bt = Ht(), Rt = Qt(), Rt !== e ? (je = [je, ye, Bt, Rt], P = je) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        $.push(P), P = d, je = Ht(), t.charCodeAt(d) === 43 ? (ye = oe, d++) : (ye = e, R === 0 && Ee(wt)), ye === e && (t.charCodeAt(d) === 45 ? (ye = fe, d++) : (ye = e, R === 0 && Ee(rt))), ye !== e ? (Bt = Ht(), Rt = Qt(), Rt !== e ? (je = [je, ye, Bt, Rt], P = je) : (d = P, P = e)) : (d = P, P = e);
      B = b, b = xt(V, $);
    } else
      d = b, b = e;
    return b;
  }
  function Qt() {
    var b, V, $, P, je, ye, Bt, Rt;
    if (b = d, V = St(), V !== e) {
      for ($ = [], P = d, je = Ht(), t.charCodeAt(d) === 47 ? (ye = T, d++) : (ye = e, R === 0 && Ee(Pt)), ye === e && (t.charCodeAt(d) === 42 ? (ye = Z, d++) : (ye = e, R === 0 && Ee(ct)), ye === e && (t.charCodeAt(d) === 37 ? (ye = ce, d++) : (ye = e, R === 0 && Ee(X)))), ye !== e ? (Bt = Ht(), Rt = St(), Rt !== e ? (je = [je, ye, Bt, Rt], P = je) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        $.push(P), P = d, je = Ht(), t.charCodeAt(d) === 47 ? (ye = T, d++) : (ye = e, R === 0 && Ee(Pt)), ye === e && (t.charCodeAt(d) === 42 ? (ye = Z, d++) : (ye = e, R === 0 && Ee(ct)), ye === e && (t.charCodeAt(d) === 37 ? (ye = ce, d++) : (ye = e, R === 0 && Ee(X)))), ye !== e ? (Bt = Ht(), Rt = St(), Rt !== e ? (je = [je, ye, Bt, Rt], P = je) : (d = P, P = e)) : (d = P, P = e);
      B = b, b = $t(V, $);
    } else
      d = b, b = e;
    return b;
  }
  function St() {
    var b, V, $, P;
    return b = d, V = d, R++, t.charCodeAt(d) === 45 ? ($ = fe, d++) : ($ = e, R === 0 && Ee(rt)), R--, $ !== e ? (d = V, V = void 0) : V = e, V !== e ? ($ = Fn(), $ !== e ? (B = b, b = J($)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, V = d, R++, t.charCodeAt(d) === 45 ? ($ = fe, d++) : ($ = e, R === 0 && Ee(rt)), R--, $ !== e ? (d = V, V = void 0) : V = e, V !== e ? ($ = tn(), $ !== e ? (B = b, b = ft($)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 33 ? (V = C, d++) : (V = e, R === 0 && Ee(_e)), V === e && (t.charCodeAt(d) === 43 ? (V = oe, d++) : (V = e, R === 0 && Ee(wt)), V === e && (t.charCodeAt(d) === 45 ? (V = fe, d++) : (V = e, R === 0 && Ee(rt)))), V !== e ? ($ = Ht(), P = Ue(), P === e && (P = Ut()), P !== e ? (B = b, b = Gt(V, P)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = Ut()))), b;
  }
  function Ue() {
    var b, V;
    return b = d, t.charCodeAt(d) === 43 ? (V = oe, d++) : (V = e, R === 0 && Ee(wt)), V === e && (t.charCodeAt(d) === 45 ? (V = fe, d++) : (V = e, R === 0 && Ee(rt))), V !== e && (B = b, V = Et()), b = V, b;
  }
  function Ut() {
    var b, V, $, P, je, ye, Bt, Rt, qr, Mr, Rr, Co, no, Kn, In;
    if (b = d, V = Ct(), V !== e) {
      for ($ = [], P = d, je = Ht(), t.charCodeAt(d) === 46 ? (ye = D, d++) : (ye = e, R === 0 && Ee(lt)), ye !== e ? (Bt = Ht(), Rt = $n(), Rt !== e ? (qr = Ht(), Mr = d, t.charCodeAt(d) === 40 ? (Rr = M, d++) : (Rr = e, R === 0 && Ee(Fe)), Rr !== e ? (Co = Ht(), no = cr(), no !== e ? (Kn = Ht(), t.charCodeAt(d) === 41 ? (In = W, d++) : (In = e, R === 0 && Ee(I)), In !== e ? (Rr = [Rr, Co, no, Kn, In], Mr = Rr) : (d = Mr, Mr = e)) : (d = Mr, Mr = e)) : (d = Mr, Mr = e), Mr === e && (Mr = null), je = [je, ye, Bt, Rt, qr, Mr], P = je) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        $.push(P), P = d, je = Ht(), t.charCodeAt(d) === 46 ? (ye = D, d++) : (ye = e, R === 0 && Ee(lt)), ye !== e ? (Bt = Ht(), Rt = $n(), Rt !== e ? (qr = Ht(), Mr = d, t.charCodeAt(d) === 40 ? (Rr = M, d++) : (Rr = e, R === 0 && Ee(Fe)), Rr !== e ? (Co = Ht(), no = cr(), no !== e ? (Kn = Ht(), t.charCodeAt(d) === 41 ? (In = W, d++) : (In = e, R === 0 && Ee(I)), In !== e ? (Rr = [Rr, Co, no, Kn, In], Mr = Rr) : (d = Mr, Mr = e)) : (d = Mr, Mr = e)) : (d = Mr, Mr = e), Mr === e && (Mr = null), je = [je, ye, Bt, Rt, qr, Mr], P = je) : (d = P, P = e)) : (d = P, P = e);
      B = b, b = br(V, $);
    } else
      d = b, b = e;
    return b;
  }
  function Ct() {
    var b, V, $, P, je;
    return b = d, V = $n(), V !== e ? (Ht(), t.charCodeAt(d) === 40 ? ($ = M, d++) : ($ = e, R === 0 && Ee(Fe)), $ !== e ? (Ht(), P = cr(), P !== e ? (Ht(), t.charCodeAt(d) === 41 ? (je = W, d++) : (je = e, R === 0 && Ee(I)), je !== e ? (B = b, b = Er(V, P)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = Br()), b;
  }
  function cr() {
    var b, V, $, P, je, ye;
    if (b = d, V = y(), V !== e) {
      for ($ = [], P = d, Ht(), t.charCodeAt(d) === 44 ? (je = Q, d++) : (je = e, R === 0 && Ee(jt)), je !== e ? (Ht(), ye = y(), ye !== e ? P = ye : (d = P, P = e)) : (d = P, P = e); P !== e; )
        $.push(P), P = d, Ht(), t.charCodeAt(d) === 44 ? (je = Q, d++) : (je = e, R === 0 && Ee(jt)), je !== e ? (Ht(), ye = y(), ye !== e ? P = ye : (d = P, P = e)) : (d = P, P = e);
      B = b, b = wr(V, $);
    } else
      d = b, b = e;
    return b === e && (b = Ht()), b;
  }
  function Br() {
    var b, V, $, P;
    return b = Rn(), b === e && (b = pn(), b === e && (b = Fn(), b === e && (b = tn(), b === e && (b = d, t.charCodeAt(d) === 40 ? (V = M, d++) : (V = e, R === 0 && Ee(Fe)), V !== e ? (Ht(), $ = y(), $ !== e ? (Ht(), t.charCodeAt(d) === 41 ? (P = W, d++) : (P = e, R === 0 && Ee(I)), P !== e ? (B = b, b = Dr($)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e))))), b;
  }
  function pn() {
    var b, V, $, P;
    return R++, b = d, t.charCodeAt(d) === 39 ? (V = me, d++) : (V = e, R === 0 && Ee(At)), V !== e ? ($ = Wr(), t.charCodeAt(d) === 39 ? (P = me, d++) : (P = e, R === 0 && Ee(At)), P !== e ? (B = b, b = zr($)) : (d = b, b = e)) : (d = b, b = e), R--, b === e && (V = e, R === 0 && Ee(_t)), b;
  }
  function Wr() {
    var b, V, $;
    for (b = d, V = [], $ = wn(); $ !== e; )
      V.push($), $ = wn();
    return B = b, V = tr(V), b = V, b;
  }
  function wn() {
    var b, V, $, P, je;
    if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, R === 0 && Ee(ke)), V !== e ? ($ = Ht(), P = y(), P !== e ? (Ht(), t.charCodeAt(d) === 125 ? (je = a, d++) : (je = e, R === 0 && Ee(De)), je !== e ? (B = b, b = at(P)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.substr(d, 3) === l ? (V = l, d += 3) : (V = e, R === 0 && Ee(ue)), V !== e && (B = b, V = vt()), b = V, b === e && (b = d, V = d, R++, t.charCodeAt(d) === 92 ? ($ = c, d++) : ($ = e, R === 0 && Ee(ae)), $ === e && (t.charCodeAt(d) === 39 ? ($ = me, d++) : ($ = e, R === 0 && Ee(At)), $ === e && (t.substr(d, 2) === s ? ($ = s, d += 2) : ($ = e, R === 0 && Ee(ke)))), R--, $ === e ? V = void 0 : (d = V, V = e), V !== e ? (t.length > d ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ee(de)), $ !== e ? (B = b, b = Zt()) : (d = b, b = e)) : (d = b, b = e), b === e))) {
      if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, R === 0 && Ee(ke)), V !== e) {
        if ($ = [], Ve.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, R === 0 && Ee(Dt)), P !== e)
          for (; P !== e; )
            $.push(P), Ve.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, R === 0 && Ee(Dt));
        else
          $ = e;
        $ !== e ? (t.charCodeAt(d) === 125 ? (P = a, d++) : (P = e, R === 0 && Ee(De)), P !== e ? (B = b, b = Yt()) : (d = b, b = e)) : (d = b, b = e);
      } else
        d = b, b = e;
      b === e && (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, R === 0 && Ee(ke)), V !== e && (B = b, V = _r()), b = V, b === e && (b = d, t.charCodeAt(d) === 92 ? (V = c, d++) : (V = e, R === 0 && Ee(ae)), V !== e ? (t.substr(d, 2) === s ? ($ = s, d += 2) : ($ = e, R === 0 && Ee(ke)), $ !== e ? (B = b, b = ut($)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = c, d++) : (V = e, R === 0 && Ee(ae)), V !== e ? (t.length > d ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ee(de)), $ !== e ? (B = b, b = se($)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = c, d++) : (V = e, R === 0 && Ee(ae)), V !== e && (B = b, V = mt()), b = V))));
    }
    return b;
  }
  function tn() {
    var b, V, $;
    if (R++, b = d, t.charCodeAt(d) === 45 ? d++ : R === 0 && Ee(rt), V = [], re.test(t.charAt(d)) ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ee(K)), $ !== e)
      for (; $ !== e; )
        V.push($), re.test(t.charAt(d)) ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ee(K));
    else
      V = e;
    return V !== e ? (B = b, b = or()) : (d = b, b = e), R--, b === e && R === 0 && Ee(ot), b;
  }
  function Fn() {
    var b, V, $, P, je, ye, Bt, Rt, qr;
    for (R++, b = d, t.charCodeAt(d) === 45 ? d++ : R === 0 && Ee(rt), V = [], re.test(t.charAt(d)) ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ee(K)); $ !== e; )
      V.push($), re.test(t.charAt(d)) ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ee(K));
    if (t.charCodeAt(d) === 46 ? ($ = D, d++) : ($ = e, R === 0 && Ee(lt)), $ !== e) {
      if (P = [], re.test(t.charAt(d)) ? (je = t.charAt(d), d++) : (je = e, R === 0 && Ee(K)), je !== e)
        for (; je !== e; )
          P.push(je), re.test(t.charAt(d)) ? (je = t.charAt(d), d++) : (je = e, R === 0 && Ee(K));
      else
        P = e;
      if (P !== e) {
        if (je = d, t.charCodeAt(d) === 101 ? (ye = Ae, d++) : (ye = e, R === 0 && Ee(Vt)), ye === e && (t.charCodeAt(d) === 69 ? (ye = Ce, d++) : (ye = e, R === 0 && Ee(Jt))), ye !== e) {
          if (t.charCodeAt(d) === 43 ? (Bt = oe, d++) : (Bt = e, R === 0 && Ee(wt)), Bt === e && (t.charCodeAt(d) === 45 ? (Bt = fe, d++) : (Bt = e, R === 0 && Ee(rt))), Bt === e && (Bt = null), Rt = [], re.test(t.charAt(d)) ? (qr = t.charAt(d), d++) : (qr = e, R === 0 && Ee(K)), qr !== e)
            for (; qr !== e; )
              Rt.push(qr), re.test(t.charAt(d)) ? (qr = t.charAt(d), d++) : (qr = e, R === 0 && Ee(K));
          else
            Rt = e;
          Rt !== e ? (ye = [ye, Bt, Rt], je = ye) : (d = je, je = e);
        } else
          d = je, je = e;
        je === e && (je = null), B = b, b = yr();
      } else
        d = b, b = e;
    } else
      d = b, b = e;
    if (b === e) {
      if (b = d, t.charCodeAt(d) === 45 ? d++ : R === 0 && Ee(rt), V = [], re.test(t.charAt(d)) ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ee(K)), $ !== e)
        for (; $ !== e; )
          V.push($), re.test(t.charAt(d)) ? ($ = t.charAt(d), d++) : ($ = e, R === 0 && Ee(K));
      else
        V = e;
      if (V !== e)
        if (t.charCodeAt(d) === 101 ? ($ = Ae, d++) : ($ = e, R === 0 && Ee(Vt)), $ === e && (t.charCodeAt(d) === 69 ? ($ = Ce, d++) : ($ = e, R === 0 && Ee(Jt))), $ !== e) {
          if (t.charCodeAt(d) === 43 ? (P = oe, d++) : (P = e, R === 0 && Ee(wt)), P === e && (t.charCodeAt(d) === 45 ? (P = fe, d++) : (P = e, R === 0 && Ee(rt))), P === e && (P = null), je = [], re.test(t.charAt(d)) ? (ye = t.charAt(d), d++) : (ye = e, R === 0 && Ee(K)), ye !== e)
            for (; ye !== e; )
              je.push(ye), re.test(t.charAt(d)) ? (ye = t.charAt(d), d++) : (ye = e, R === 0 && Ee(K));
          else
            je = e;
          je !== e ? (B = b, b = ar()) : (d = b, b = e);
        } else
          d = b, b = e;
      else
        d = b, b = e;
    }
    return R--, b === e && R === 0 && Ee(Mt), b;
  }
  function Rn() {
    var b, V, $, P, je, ye, Bt, Rt, qr, Mr, Rr;
    if (b = d, $e.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, R === 0 && Ee(qt)), V !== e) {
      if ($ = [], P = [], Ge.test(t.charAt(d)) ? (je = t.charAt(d), d++) : (je = e, R === 0 && Ee(be)), je !== e)
        for (; je !== e; )
          P.push(je), Ge.test(t.charAt(d)) ? (je = t.charAt(d), d++) : (je = e, R === 0 && Ee(be));
      else
        P = e;
      for (P === e && (P = d, t.charCodeAt(d) === 46 ? (je = D, d++) : (je = e, R === 0 && Ee(lt)), je !== e ? (ye = d, R++, Bt = d, Rt = Ht(), qr = $n(), qr !== e ? (Mr = Ht(), t.charCodeAt(d) === 40 ? (Rr = M, d++) : (Rr = e, R === 0 && Ee(Fe)), Rr !== e ? (Rt = [Rt, qr, Mr, Rr], Bt = Rt) : (d = Bt, Bt = e)) : (d = Bt, Bt = e), R--, Bt === e ? ye = void 0 : (d = ye, ye = e), ye !== e ? (je = [je, ye], P = je) : (d = P, P = e)) : (d = P, P = e)); P !== e; ) {
        if ($.push(P), P = [], Ge.test(t.charAt(d)) ? (je = t.charAt(d), d++) : (je = e, R === 0 && Ee(be)), je !== e)
          for (; je !== e; )
            P.push(je), Ge.test(t.charAt(d)) ? (je = t.charAt(d), d++) : (je = e, R === 0 && Ee(be));
        else
          P = e;
        P === e && (P = d, t.charCodeAt(d) === 46 ? (je = D, d++) : (je = e, R === 0 && Ee(lt)), je !== e ? (ye = d, R++, Bt = d, Rt = Ht(), qr = $n(), qr !== e ? (Mr = Ht(), t.charCodeAt(d) === 40 ? (Rr = M, d++) : (Rr = e, R === 0 && Ee(Fe)), Rr !== e ? (Rt = [Rt, qr, Mr, Rr], Bt = Rt) : (d = Bt, Bt = e)) : (d = Bt, Bt = e), R--, Bt === e ? ye = void 0 : (d = ye, ye = e), ye !== e ? (je = [je, ye], P = je) : (d = P, P = e)) : (d = P, P = e));
      }
      B = b, b = v();
    } else
      d = b, b = e;
    return b;
  }
  function $n() {
    var b, V, $, P;
    if (b = d, $e.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, R === 0 && Ee(qt)), V !== e) {
      for ($ = [], Ge.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, R === 0 && Ee(be)); P !== e; )
        $.push(P), Ge.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, R === 0 && Ee(be));
      B = b, b = le();
    } else
      d = b, b = e;
    return b;
  }
  function Ht() {
    var b, V;
    for (R++, b = [], Je.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, R === 0 && Ee(pt)); V !== e; )
      b.push(V), Je.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, R === 0 && Ee(pt));
    return R--, V = e, R === 0 && Ee(Ke), b;
  }
  if (Tt = i(), Tt !== e && d === t.length)
    return Tt;
  throw Tt !== e && d < t.length && Ee(Vr()), Yr(
    ve,
    qe < t.length ? t.charAt(qe) : null,
    qe < t.length ? Cn(qe, qe + 1) : Cn(qe, qe)
  );
}
const S_ = 2147483647, V_ = -2147483648, F_ = Number.MAX_VALUE, I_ = Number.MIN_VALUE, Re = "string", Le = "integer", gt = "number", Gr = "boolean", fn = "color", to = "url", Pr = "datetime", ur = "dict", fr = "array", D_ = "function";
function io(t, r) {
  var e;
  switch ((e = r[t.type]) == null || e.call(r, t), t.type) {
    case "TemplateLiteral":
      t.expressions.forEach((n) => {
        io(n, r);
      });
      break;
    case "BinaryExpression":
    case "LogicalExpression":
      io(t.left, r), io(t.right, r);
      break;
    case "UnaryExpression":
      io(t.argument, r);
      break;
    case "ConditionalExpression":
      io(t.test, r), io(t.consequent, r), io(t.alternate, r);
      break;
    case "TryExpression":
      io(t.test, r), io(t.alternate, r);
      break;
    case "CallExpression":
      t.arguments.forEach((n) => {
        io(n, r);
      });
      break;
    case "MethodExpression":
      io(t.object, r), t.arguments.forEach((n) => {
        io(n, r);
      });
      break;
  }
}
function id(t, r) {
  for (; t.length < r; )
    t = "0" + t;
  return t;
}
function pr(t, r = 1, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = _o(t);
  return n ? (n.a *= r, aa(n)) : e;
}
function T_(t, r, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = _o(t);
  return n ? (n.a = r, aa(n)) : e;
}
function aa(t) {
  return t.a === 255 ? `#${[t.r, t.g, t.b].map((r) => id(Math.round(r).toString(16), 2)).join("")}` : `rgba(${t.r},${t.g},${t.b},${(t.a / 255).toFixed(2)})`;
}
function _o(t) {
  const r = (
    // #AARRGGBB
    t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #ARGB
    t.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])$/i) || // #RRGGBB
    t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #RGB
    t.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)
  );
  if (r) {
    if (r.length === 5) {
      const [c, u, f, _, h] = r, m = f.length === 2 ? f : f + f, p = _.length === 2 ? _ : _ + _, w = h.length === 2 ? h : h + h, k = u.length === 2 ? u : u + u;
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
class ca extends Error {
}
function Bs(t) {
  return t.type === "url" || t.type === "color" ? {
    type: "string",
    value: t.value
  } : t;
}
function sd(t) {
  return t.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, "");
}
function ki(t, r) {
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
      return sd(t.value);
    if (t.type === "color")
      return ji(el(t.value));
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
  let r = ki(t, !1);
  return t.type === "string" && (r = "'" + r.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'"), r;
}
function Zn(t) {
  return t === "datetime" ? "DateTime" : t.charAt(0).toUpperCase() + t.substring(1);
}
function vi(t, r) {
  return _n(r);
}
function Ln(t, r) {
  if (r < os || r > ns)
    throw new Error("Integer overflow.");
}
function po(t) {
  if (typeof t != "string")
    throw new Error("Incorrect url value.");
  try {
    new URL(t);
  } catch {
    throw new Error("Incorrect url value.");
  }
}
function M_(t) {
  try {
    return po(t), !0;
  } catch {
    return !1;
  }
}
function P_(t) {
  const r = /* @__PURE__ */ new Set();
  return io(t, {
    Variable(e) {
      r.add(e.id.name);
    }
  }), [...r];
}
function An(t, r) {
  throw new ca(`Failed to evaluate [${t}]. ${r}`);
}
function N_(t, r) {
  throw new Error(r);
}
function el(t) {
  const r = _o(t);
  if (r)
    return r;
  throw new Error("Unable to convert value to Color, expected format #AARRGGBB.");
}
function ji(t) {
  return `#${[t.a, t.r, t.g, t.b].map((r) => {
    if (r < 0 || r > 255)
      throw new Error("Value out of range 0..1.");
    return id(Math.round(r).toString(16), 2);
  }).join("").toUpperCase()}`;
}
function ri(t) {
  return ji(el(t));
}
function Nl(t) {
  return {
    type: gt,
    value: Number(t.value)
  };
}
const z_ = {
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
function tl(t, r, e) {
  if (e === "function")
    throw new Error("Cannot convert function");
  const n = z_[e];
  let o = typeof r;
  if (n === "array" && !Array.isArray(r) || n !== "array" && o !== n || o === "object" && r === null)
    throw o === "object" && (Array.isArray(r) ? o = "array" : r === null ? o = "null" : o = "dict"), new Error(`Incorrect value type: expected ${Zn(e)}, got ${Zn(o)}.`);
  if (n === "number" && e === "integer") {
    t && Ln(t, r);
    try {
      r = _n(r);
    } catch {
      throw new Error("Cannot convert value to integer.");
    }
  }
  return n === "string" && e === "color" && (r = ri(r)), n === "string" && e === "url" && po(r), n === "boolean" && e === Gr && (r = r ? 1 : 0), {
    type: e,
    value: r
  };
}
function L_(t) {
  return t.type === "number" || t.type === "integer" ? Number(t.value) : t.type === "boolean" ? !!t.value : t.value;
}
function rl(t) {
  return L_(
    tl(void 0, t.value, t.type)
  );
}
const es = /* @__PURE__ */ new Map(), zl = /* @__PURE__ */ new Map(), vs = /* @__PURE__ */ new Map(), Ll = /* @__PURE__ */ new Map();
function U(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = es.get(t) || [];
  es.has(t) || es.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  zl.set(i, n);
}
function Hr(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = vs.get(t) || [];
  vs.has(t) || vs.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  Ll.set(i, n);
}
function O_(t, r, e) {
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
function ld(t, r) {
  if (!t)
    return {
      type: "missing"
    };
  let e = null, n = null;
  for (let o = 0; o < t.length; ++o) {
    const i = O_(t[o], r, t.length > 1);
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
function Ol(t, r, e) {
  return ld(t.get(r), e);
}
function ad(t, r) {
  return r.map((e, n) => {
    let o = n >= t.args.length ? t.args[t.args.length - 1] : t.args[n];
    return typeof o != "object" && (o = {
      type: o
    }), o.type === gt && e.type === Le ? Nl(e) : e;
  });
}
function Ta(t, r) {
  return t + ":" + r.args.map((e) => typeof e == "string" ? e : e.type).join("#");
}
function Wn(t, r) {
  return {
    type: Re,
    value: ki(r, !0)
  };
}
function Ma(t, r) {
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
function B_(t, r) {
  if (r.value > ns || r.value < os)
    throw new Error("Unable to convert value to Integer.");
  const e = r.value - r.value % 1;
  return {
    type: Le,
    value: _n(e)
  };
}
function R_(t, r) {
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
function H_(t, r) {
  return {
    type: Le,
    value: _n(r.value ? 1 : 0)
  };
}
function W_(t, r) {
  const e = Number(r.value);
  if (e !== 1 && e !== 0)
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Gr,
    value: e
  };
}
function U_(t, r) {
  if (r.value !== "true" && r.value !== "false")
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Gr,
    value: r.value === "true" ? 1 : 0
  };
}
function G_(t, r) {
  return {
    type: fn,
    value: ri(r.value)
  };
}
function J_(t, r) {
  return po(r.value), {
    type: to,
    value: r.value
  };
}
function q_(t, r) {
  try {
    return {
      type: Re,
      value: encodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to encodeUri string.");
  }
}
function K_(t, r) {
  try {
    return {
      type: Re,
      value: decodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to decodeUri string.");
  }
}
function ua(t, r, e, n) {
  const o = t.variables.get(r.value);
  let i;
  return o && o.getType() === n ? (i = o.getValue(), t.storeUsedVars || (t.storeUsedVars = /* @__PURE__ */ new Set()), t.storeUsedVars.add(o)) : i = e.value, n === "color" ? i = ri(i) : n === "url" && po(i), {
    type: n,
    // value is synced with type by params
    value: i
  };
}
function fs(t, r, e) {
  return ua(t, r, e, e.type);
}
function Pa(t, r, e) {
  return ua(t, r, e, "color");
}
function Na(t, r, e) {
  return ua(t, r, e, "url");
}
function cd(t, r) {
  for (let e = 0; e < r.length; ++e) {
    const n = t.charAt(e), o = r.charAt(e);
    if (n !== o && o)
      return o;
  }
  return "";
}
const Rs = 1234567890;
function za(t) {
  const r = new Intl.NumberFormat(t, {
    maximumFractionDigits: 0
  }), e = new Intl.NumberFormat(t, {
    minimumFractionDigits: 1
  }), n = r.format(Rs), o = e.format(Rs);
  return cd(n, o);
}
function Y_(t) {
  const r = new Intl.NumberFormat(t, {
    useGrouping: !1
  }), e = new Intl.NumberFormat(t, {
    useGrouping: !0
  }), n = r.format(Rs), o = e.format(Rs);
  return cd(n, o);
}
function Xo(t, r, e, n) {
  const o = e.value, i = o.replace(/,/g, "");
  if (!/^((#+)|(#*0+))(\.0*#*)?$/.test(i) && !/^#*0*\.((0*#*)|(#+))$/.test(i) || /,.*,/.test(o) || o.indexOf(",") > o.indexOf(".") && o.indexOf(".") > -1)
    throw new Error("Incorrect format pattern.");
  const s = o.split("."), a = s[0], l = s[1] || "", c = o.replace(/[^#0.]/g, "").split("."), u = c[0], f = c[1] || "", _ = a.indexOf(","), h = _ > -1 ? a.length - _ - 1 : -1;
  if (_ > -1 && h < 1 || l.indexOf(",") > -1)
    throw new Error("Incorrect format pattern.");
  try {
    let m = 0;
    for (; u[u.length - 1 - m] === "0"; )
      ++m;
    let p = 0;
    for (; f[p] === "0"; )
      ++p;
    let w = p;
    for (; f[w] === "#"; )
      ++w;
    let z = new Intl.NumberFormat((n == null ? void 0 : n.value) || void 0, {
      useGrouping: !1,
      minimumIntegerDigits: Math.min(Math.max(m, 1), 21),
      minimumFractionDigits: Math.min(Math.max(p, 0), 100),
      maximumFractionDigits: Math.min(Math.max(w, p, 0), 100),
      roundingMode: "halfEven"
    }).format(r.value);
    if (_ > -1 && h > 0) {
      const H = Y_(n == null ? void 0 : n.value), O = za(n == null ? void 0 : n.value);
      if (H && O) {
        const oe = z.split(O), fe = oe[0];
        let T = "";
        for (let Z = fe.length - 1; Z >= 0; --Z)
          T = fe[Z] + T, Z > 0 && (fe.length - Z) % h === 0 && (T = H + T);
        z = T + (oe.length > 1 ? O + oe[1] : "");
      }
    }
    if (p === 0 && w === 0 && o.endsWith(".")) {
      const H = za(n == null ? void 0 : n.value);
      H && (z += H);
    }
    return {
      type: Re,
      value: z
    };
  } catch (m) {
    throw new Error("Incorrect or unsupported number format." + m + " " + (n == null ? void 0 : n.value) || void 0);
  }
}
function X_() {
  U("toString", [Le], Wn), U("toString", [gt], Wn), U("toString", [Gr], Wn), U("toString", [fn], Wn), U("toString", [to], Wn), U("toString", [Re], Wn), U("toString", [fr], Wn), U("toString", [ur], Wn), U("toNumber", [Le], Ma), U("toNumber", [Re], Ma), U("toInteger", [gt], B_), U("toInteger", [Re], R_), U("toInteger", [Gr], H_), U("toBoolean", [Le], W_), U("toBoolean", [Re], U_), U("toColor", [Re], G_), U("toUrl", [Re], J_), U("encodeUri", [Re], q_), U("decodeUri", [Re], K_), U("getIntegerValue", [Re, Le], fs), U("getNumberValue", [Re, gt], fs), U("getBooleanValue", [Re, Gr], fs), U("getStringValue", [Re, Re], fs), U("getColorValue", [Re, fn], Pa), U("getColorValue", [Re, Re], Pa), U("getUrlValue", [Re, to], Na), U("getUrlValue", [Re, Re], Na), Hr("toString", [Le], Wn), Hr("toString", [gt], Wn), Hr("toString", [Gr], Wn), Hr("toString", [fn], Wn), Hr("toString", [to], Wn), Hr("toString", [Re], Wn), Hr("toString", [fr], Wn), Hr("toString", [ur], Wn), U("decimalFormat", [Le, Re], Xo), U("decimalFormat", [gt, Re], Xo), U("decimalFormat", [Le, Re, Re], Xo), U("decimalFormat", [gt, Re, Re], Xo), Hr("decimalFormat", [Le, Re], Xo), Hr("decimalFormat", [gt, Re], Xo), Hr("decimalFormat", [Le, Re, Re], Xo), Hr("decimalFormat", [gt, Re, Re], Xo);
}
function Un(t, r) {
  return !t || !r ? t : t.padStart(r, "0");
}
const Bl = {
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
    return t > 2 ? Bl.E(t, r) : Un(r({}, "weekdaynumeric"), t > 1 ? t : void 0);
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
}, Z_ = /(\w)\1*|''|'(''|[^'])+('|$)|./g, Q_ = /^'([^]*?)'?$/, x_ = /''/g, $_ = /[a-zA-Z]/, fa = 1e3 * 60 * 60 * 24;
function ep(t) {
  const r = t.match(Q_);
  return r ? r[1].replace(x_, "'") : t;
}
function Rl(t, r, e) {
  const n = t[r ? "getUTCDay" : "getDay"](), o = n < e ? e - n - 7 : e - n;
  return new Date(t.getTime() + fa * o);
}
function La(t, r, e) {
  const n = new Date(t);
  return n[r ? "setUTCDate" : "setDate"](1), n[r ? "setUTCMonth" : "setMonth"](0), Rl(n, r, e);
}
function Oa(t, r) {
  return Math.round((t.getTime() - r.getTime()) / fa);
}
function Ba(t, r, e) {
  let n = 0;
  const o = La(t, r || !1, e), i = new Date(t);
  i[r ? "setUTCFullYear" : "setFullYear"](t[r ? "getUTCFullYear" : "getFullYear"]() + 1);
  const s = La(i, r || !1, e), a = t.getTime() < o.getTime(), l = t.getTime() >= s.getTime();
  let c = t[r ? "getUTCFullYear" : "getFullYear"]();
  if (a) {
    --c, o[r ? "setUTCFullYear" : "setFullYear"](o[r ? "getUTCFullYear" : "getFullYear"]() - 1);
    const u = Oa(Rl(t, r, e), o);
    n = Math.round(u / 7) + 1;
  } else if (l)
    ++c, n = 1;
  else {
    const u = Oa(Rl(t, r, e), o);
    n = Math.round(u / 7) + 1;
  }
  return {
    week: n,
    year: c
  };
}
function tp(t, r, {
  locale: e,
  isUTC: n,
  weekStartDay: o = 0
} = {}) {
  const i = (s, a) => {
    if (a === "week") {
      const { week: u } = Ba(t, n || !1, o);
      return String(u);
    }
    if (a === "weekofmonth") {
      const u = t[n ? "getUTCDay" : "getDay"](), f = new Date(t);
      f[n ? "setUTCDate" : "setDate"](1);
      const _ = f[n ? "getUTCDay" : "getDay"](), h = t[n ? "getUTCDate" : "getDate"]();
      return String(Math.ceil(h / 7) + (u < _ ? 1 : 0));
    }
    if (a === "dayofweekinmonth") {
      const u = t[n ? "getUTCDate" : "getDate"]();
      return String(Math.ceil(u / 7));
    }
    if (a === "weekdaynumeric") {
      let u = t[n ? "getUTCDay" : "getDay"]();
      return u < o && (u += 7), String(u - o + 1);
    }
    if (a === "dayofyear") {
      const u = new Date(t);
      u[n ? "setUTCMonth" : "setMonth"](0), u[n ? "setUTCDate" : "setDate"](1), u[n ? "setUTCHours" : "setHours"](1), u[n ? "setUTCMinutes" : "setMinutes"](1), u[n ? "setUTCSeconds" : "setSeconds"](1);
      const f = Math.ceil((t.getTime() - u.getTime()) / fa);
      return String(f);
    }
    if (a === "weekyear") {
      let { year: u } = Ba(t, n || !1, o);
      return u < 1 && (u = 1 - u), s.year === "2-digit" ? String(u % 100) : String(u);
    }
    if (a === "extendedyear") {
      const u = t[n ? "getUTCFullYear" : "getFullYear"]();
      return s.year === "2-digit" ? String(u % 100) : String(u);
    }
    if (a === "timezoneoffset")
      return n ? "0" : String(t.getTimezoneOffset());
    n && (s.timeZone = "UTC");
    const c = new Intl.DateTimeFormat(e, s).formatToParts(t);
    for (let u = 0; u < c.length; ++u)
      if (c[u].type === a)
        return c[u].value;
  };
  return (r.match(Z_) || []).map((s) => {
    if (s === "''")
      return "'";
    const a = s[0];
    if (a === "'")
      return ep(s);
    if (Bl[a])
      return Bl[a](s.length, i);
    if (a.match($_))
      throw new Error(
        `Format string contains an unescaped latin alphabet character "${a}"`
      );
    return s;
  }).join("");
}
function rp(t) {
  const r = new Date(t);
  return r.setUTCMonth(r.getUTCMonth() + 1), r.setUTCDate(0), r.getUTCDate();
}
function np(t, r) {
  return {
    type: Pr,
    value: new Date(Number(r.value) * 1e3)
  };
}
function op(t, r) {
  const e = new Date(Number(r.value) * 1e3), n = e.getTimezoneOffset();
  return e.setMinutes(e.getMinutes() - n), {
    type: Pr,
    value: e
  };
}
function ip() {
  return {
    type: Pr,
    value: /* @__PURE__ */ new Date()
  };
}
function sp(t, r, e) {
  return {
    type: Pr,
    value: new Date(r.value.getTime() + Number(e.value))
  };
}
function lp(t, r, e) {
  const n = new Date(r.value);
  return n.setUTCFullYear(Number(e.value)), {
    type: Pr,
    value: n
  };
}
function ap(t, r, e) {
  const n = Number(e.value);
  if (n < 1 || n > 12)
    throw new Error(`Expecting month in [1..12], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMonth(n - 1), {
    type: Pr,
    value: o
  };
}
function cp(t, r, e) {
  const n = new Date(r.value), o = Number(e.value);
  if (o <= 0 && o !== -1 || o > rp(n))
    throw new Error(`Unable to set day ${o} for date ${ki(r, !1)}.`);
  return n.setUTCDate(o === -1 ? 0 : o), {
    type: Pr,
    value: n
  };
}
function up(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 23)
    throw new Error(`Expecting hours in [0..23], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCHours(n), {
    type: Pr,
    value: o
  };
}
function fp(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting minutes in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMinutes(n), {
    type: Pr,
    value: o
  };
}
function dp(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting seconds in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCSeconds(n), {
    type: Pr,
    value: o
  };
}
function _p(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 999)
    throw new Error(`Expecting millis in [0..999], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMilliseconds(n), {
    type: Pr,
    value: o
  };
}
const ni = (t) => (r, e) => {
  let o = new Date(e.value.getTime())[t]();
  return t === "getUTCMonth" ? ++o : t === "getUTCDay" && o === 0 && (o = 7), {
    type: Le,
    value: _n(o)
  };
};
function ud(t) {
  return (r, e, n, o) => ({
    type: Re,
    value: tp(e.value, n.value, {
      locale: o == null ? void 0 : o.value,
      isUTC: t,
      weekStartDay: r.weekStartDay
    })
  });
}
const pp = ni("getUTCFullYear"), gp = ni("getUTCMonth"), hp = ni("getUTCDate"), mp = ni("getUTCDay"), bp = ni("getUTCHours"), yp = ni("getUTCMinutes"), wp = ni("getUTCSeconds"), kp = ni("getUTCMilliseconds"), Ra = ud(!1), Ha = ud(!0);
function vp() {
  U("parseUnixTime", [Le], np), U("parseUnixTimeAsLocal", [Le], op), U("nowLocal", [], ip), U("addMillis", [Pr, Le], sp), U("setYear", [Pr, Le], lp), U("setMonth", [Pr, Le], ap), U("setDay", [Pr, Le], cp), U("setHours", [Pr, Le], up), U("setMinutes", [Pr, Le], fp), U("setSeconds", [Pr, Le], dp), U("setMillis", [Pr, Le], _p), U("getYear", [Pr], pp), U("getMonth", [Pr], gp), U("getDay", [Pr], hp), U("getDayOfWeek", [Pr], mp), U("getHours", [Pr], bp), U("getMinutes", [Pr], yp), U("getSeconds", [Pr], wp), U("getMillis", [Pr], kp), U("formatDateAsLocal", [Pr, Re], Ra), U("formatDateAsUTC", [Pr, Re], Ha), U("formatDateAsLocalWithLocale", [Pr, Re, Re], Ra), U("formatDateAsUTCWithLocale", [Pr, Re, Re], Ha);
}
function jp(t) {
  return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Y(t, r = {}) {
  const e = t;
  return e.level = r.level || "error", r.additional && (e.additional = r.additional), e;
}
function Cp(t, r) {
  return {
    type: Le,
    value: _n(r.value.length)
  };
}
function Ep(t, r, e) {
  return {
    type: Gr,
    value: r.value.includes(e.value) ? 1 : 0
  };
}
function Ap(t, r, e, n) {
  if (n.value < e.value)
    throw new Error("Indexes should be in ascending order.");
  if (e.value < 0 || e.value > r.value.length || n.value < 0 || n.value > r.value.length)
    throw new Error("Indexes are out of bounds.");
  return {
    type: Re,
    value: r.value.substring(Number(e.value), Number(n.value))
  };
}
function Sp(t, r, e, n) {
  let o;
  return e.value ? o = r.value.replace(new RegExp(jp(e.value), "g"), n.value) : o = r.value, {
    type: Re,
    value: o
  };
}
function Vp(t, r, e) {
  return {
    type: Le,
    value: _n(r.value.indexOf(e.value))
  };
}
function Fp(t, r, e) {
  return {
    type: Le,
    value: _n(r.value.lastIndexOf(e.value))
  };
}
function Ip(t, r) {
  return {
    type: Re,
    value: r.value.trim()
  };
}
function Dp(t, r) {
  return {
    type: Re,
    value: r.value.replace(/^\s+/, "")
  };
}
function Tp(t, r) {
  return {
    type: Re,
    value: r.value.replace(/\s+$/, "")
  };
}
function Mp(t, r) {
  return {
    type: Re,
    value: r.value.toUpperCase()
  };
}
function Pp(t, r) {
  return {
    type: Re,
    value: r.value.toLowerCase()
  };
}
function fd(t, r, e, n) {
  if (!n.value.length)
    return t.warnings.push(Y(new Error("String for padding is empty."), {
      level: "warn"
    })), "";
  let o = "";
  const i = r.type === Re ? r.value : ki(r, !1);
  for (; o.length + i.length < e.value; )
    o += n.value;
  return o.length > 0 && o.length + i.length > e.value && (o = o.substring(0, Number(e.value) - Number(i.length))), o;
}
function Wa(t, r, e, n) {
  const o = fd(t, r, e, n);
  return {
    type: Re,
    value: o + ki(r, !1)
  };
}
function Ua(t, r, e, n) {
  const o = fd(t, r, e, n);
  return {
    type: Re,
    value: ki(r, !1) + o
  };
}
function Np(t, r, e) {
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
function zp(t, r) {
  return {
    type: Re,
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping
    value: r.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  };
}
function Lp() {
  U("len", [Re], Cp), U("contains", [Re, Re], Ep), U("substring", [Re, Le, Le], Ap), U("replaceAll", [Re, Re, Re], Sp), U("index", [Re, Re], Vp), U("lastIndex", [Re, Re], Fp), U("trim", [Re], Ip), U("trimLeft", [Re], Dp), U("trimRight", [Re], Tp), U("toUpperCase", [Re], Mp), U("toLowerCase", [Re], Pp), U("padStart", [Re, Le, Re], Wa), U("padStart", [Le, Le, Re], Wa), U("padEnd", [Re, Le, Re], Ua), U("padEnd", [Le, Le, Re], Ua), U("testRegex", [Re, Re], Np), U("encodeRegex", [Re], zp);
}
function Op(t, r, e) {
  if (e.value === gi)
    throw new Error("Division by zero is not supported.");
  let n = r.value / e.value;
  return n = vi(t, n), Ln(t, n), {
    type: Le,
    value: n
  };
}
function Bp(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value / e.value;
  return {
    type: gt,
    value: n
  };
}
function Rp(t, r, e) {
  if (e.value === gi)
    throw new Error("Division by zero is not supported.");
  let n = r.value % e.value;
  return n = vi(t, n), Ln(t, n), {
    type: Le,
    value: n
  };
}
function Hp(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value % e.value;
  return {
    type: gt,
    value: n
  };
}
function Wp(t, ...r) {
  let e = r.length ? r[0].value : gi;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value, e = vi(t, e), Ln(t, e);
  return {
    type: Le,
    value: e
  };
}
function Up(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value;
  return {
    type: gt,
    value: e
  };
}
function Gp(t, ...r) {
  let e = r.length ? r[0].value : gi;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value, e = vi(t, e), Ln(t, e);
  return {
    type: Le,
    value: e
  };
}
function Jp(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value;
  return {
    type: gt,
    value: e
  };
}
function qp(t, ...r) {
  let e = gi;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value, e = vi(t, e), Ln(t, e);
  return {
    type: Le,
    value: e
  };
}
function Kp(t, ...r) {
  let e = 0;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value;
  return {
    type: gt,
    value: e
  };
}
function Yp(t, r) {
  const e = nd(r.value);
  return Ln(t, e), {
    type: r.type,
    value: e
  };
}
function Xp(t, r) {
  const e = Math.abs(r.value);
  return {
    type: gt,
    value: e
  };
}
function Zp(t, ...r) {
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
function Qp(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: gt,
    value: Math.max(...r.map((e) => e.value))
  };
}
function xp(t, ...r) {
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
function $p(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: gt,
    value: Math.min(...r.map((e) => e.value))
  };
}
function eg() {
  return {
    type: gt,
    value: F_
  };
}
function tg() {
  return {
    type: gt,
    value: I_
  };
}
function rg(t) {
  return Ln(t, ns), {
    type: Le,
    value: ns
  };
}
function ng(t) {
  return Ln(t, os), {
    type: Le,
    value: os
  };
}
function og(t, r) {
  const e = Math.sign(r.value);
  return {
    type: gt,
    // js treats Math.round(-0.5) as 0, which is different to other platforms
    value: e * Math.round(Math.abs(r.value))
  };
}
function ig(t, r) {
  return {
    type: gt,
    value: Math.floor(r.value)
  };
}
function sg(t, r) {
  return {
    type: gt,
    value: Math.ceil(r.value)
  };
}
function lg(t, r) {
  return {
    type: Le,
    value: od(r.value)
  };
}
function ag(t, r) {
  return {
    type: gt,
    value: Math.sign(r.value)
  };
}
function cg(t, r, e) {
  let n;
  if (e.value === gi)
    n = r.value;
  else if (r.value === gi)
    n = _n(0);
  else {
    const o = od(e.value);
    n = nd(r.value) * o;
  }
  return Ln(t, n), {
    type: Le,
    value: n
  };
}
function ug(t, r, e) {
  let n = Math.sign(e.value);
  n === 0 && (n = Object.is(n, 0) ? 1 : -1);
  const o = Math.abs(r.value) * n;
  return {
    type: gt,
    value: o
  };
}
function fg() {
  U("div", [Le, Le], Op), U("div", [gt, gt], Bp), U("mod", [Le, Le], Rp), U("mod", [gt, gt], Hp), U("mul", [{
    type: Le,
    isVararg: !0
  }], Wp), U("mul", [{
    type: gt,
    isVararg: !0
  }], Up), U("sub", [{
    type: Le,
    isVararg: !0
  }], Gp), U("sub", [{
    type: gt,
    isVararg: !0
  }], Jp), U("sum", [{
    type: Le,
    isVararg: !0
  }], qp), U("sum", [{
    type: gt,
    isVararg: !0
  }], Kp), U("abs", [Le], Yp), U("abs", [gt], Xp), U("max", [{
    type: Le,
    isVararg: !0
  }], Zp), U("max", [{
    type: gt,
    isVararg: !0
  }], Qp), U("min", [{
    type: Le,
    isVararg: !0
  }], xp), U("min", [{
    type: gt,
    isVararg: !0
  }], $p), U("maxNumber", [], eg), U("minNumber", [], tg), U("maxInteger", [], rg), U("minInteger", [], ng), U("round", [gt], og), U("floor", [gt], ig), U("ceil", [gt], sg), U("signum", [Le], lg), U("signum", [gt], ag), U("copySign", [Le, Le], cg), U("copySign", [gt, gt], ug);
}
function nl(t) {
  return (r, e) => {
    const n = el(e.value);
    return {
      type: gt,
      value: n[t] / 255
    };
  };
}
function ol(t) {
  return (r, e, n) => {
    const o = el(e.value);
    return o[t] = n.value * 255, {
      type: fn,
      value: ji(o)
    };
  };
}
const Ga = nl("a"), Ja = nl("r"), qa = nl("g"), Ka = nl("b"), Ya = ol("a"), Xa = ol("r"), Za = ol("g"), Qa = ol("b");
function dg(t, r, e, n) {
  const o = {
    a: 255,
    r: r.value * 255,
    g: e.value * 255,
    b: n.value * 255
  };
  return {
    type: fn,
    value: ji(o)
  };
}
function _g(t, r, e, n, o) {
  const i = {
    a: r.value * 255,
    r: e.value * 255,
    g: n.value * 255,
    b: o.value * 255
  };
  return {
    type: fn,
    value: ji(i)
  };
}
function pg() {
  U("getColorAlpha", [Re], Ga), U("getColorAlpha", [fn], Ga), U("getColorRed", [Re], Ja), U("getColorRed", [fn], Ja), U("getColorGreen", [Re], qa), U("getColorGreen", [fn], qa), U("getColorBlue", [Re], Ka), U("getColorBlue", [fn], Ka), U("setColorAlpha", [Re, gt], Ya), U("setColorAlpha", [fn, gt], Ya), U("setColorRed", [Re, gt], Xa), U("setColorRed", [fn, gt], Xa), U("setColorGreen", [Re, gt], Za), U("setColorGreen", [fn, gt], Za), U("setColorBlue", [Re, gt], Qa), U("setColorBlue", [fn, gt], Qa), U("rgb", [gt, gt, gt], dg), U("argb", [gt, gt, gt, gt], _g);
}
function oi(t, r, e, n) {
  if (r.value < 0)
    throw new Error("Expecting non-negative number of milliseconds.");
  let o = _n(r.value) / _n(e);
  return Ln(t, o), n && (o = _n(o) % _n(n)), {
    type: Le,
    value: o
  };
}
const dd = 1e3, gg = 60, _d = 1e3 * 60, hg = 60, pd = 1e3 * 60 * 60, mg = 24, bg = 1e3 * 60 * 60 * 24, yg = 1e3 * 60 * 60 * 24 * 7;
function wg(t, r) {
  return oi(t, r, dd, gg);
}
function kg(t, r) {
  return oi(t, r, dd);
}
function vg(t, r) {
  return oi(t, r, _d, hg);
}
function jg(t, r) {
  return oi(t, r, _d);
}
function Cg(t, r) {
  return oi(t, r, pd, mg);
}
function Eg(t, r) {
  return oi(t, r, pd);
}
function Ag(t, r) {
  return oi(t, r, bg);
}
function Sg(t, r) {
  return oi(t, r, yg);
}
function Vg() {
  U("getIntervalSeconds", [Le], wg), U("getIntervalTotalSeconds", [Le], kg), U("getIntervalMinutes", [Le], vg), U("getIntervalTotalMinutes", [Le], jg), U("getIntervalHours", [Le], Cg), U("getIntervalTotalHours", [Le], Eg), U("getIntervalTotalDays", [Le], Ag), U("getIntervalTotalWeeks", [Le], Sg);
}
function Fg(t, r) {
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
function ii(t) {
  return (r, e, ...n) => {
    if (n.length === 0)
      throw new Error("Non empty argument list is required.");
    const o = Fg(e.value, n.map((i) => i.value));
    return tl(r, o, t);
  };
}
function Hi(t, r) {
  return (e, n, o, ...i) => {
    try {
      return t(e, o, ...i);
    } catch {
      let a = n.value;
      return r === "color" ? a = ri(a) : r === "url" && po(a), {
        type: r,
        value: a
      };
    }
  };
}
const js = ii(Re), Cs = ii(gt), Es = ii(Le), As = ii(Gr), Ss = ii(fn), Vs = ii(to), Hl = ii(fr), Wl = ii(ur), xa = Hi(js, Re), $a = Hi(Cs, gt), ec = Hi(Es, Le), tc = Hi(As, Gr), ds = Hi(Ss, fn), _s = Hi(Vs, to);
function Ig(t, r, ...e) {
  try {
    return Hl(t, r, ...e);
  } catch {
    return {
      type: fr,
      value: []
    };
  }
}
function Dg(t, r, ...e) {
  try {
    return Wl(t, r, ...e);
  } catch {
    return {
      type: ur,
      value: {}
    };
  }
}
function Tg(t, r, e) {
  return {
    type: Gr,
    value: e.value in r.value ? 1 : 0
  };
}
function Mg(t, r) {
  return {
    type: Gr,
    value: Object.keys(r.value).length ? 0 : 1
  };
}
function Pg(t, r) {
  return {
    type: Le,
    value: _n(Object.keys(r.value).length)
  };
}
function rc(t, r) {
  return {
    type: fr,
    value: Object.keys(r.value)
  };
}
function nc(t, r) {
  return {
    type: fr,
    value: Object.values(r.value)
  };
}
function Ng() {
  const t = {
    type: Re,
    isVararg: !0
  };
  U("getDictString", [ur, t], js), U("getStringFromDict", [ur, t], js), U("getDictNumber", [ur, t], Cs), U("getNumberFromDict", [ur, t], Cs), U("getDictInteger", [ur, t], Es), U("getIntegerFromDict", [ur, t], Es), U("getDictBoolean", [ur, t], As), U("getBooleanFromDict", [ur, t], As), U("getDictColor", [ur, t], Ss), U("getColorFromDict", [ur, t], Ss), U("getDictUrl", [ur, t], Vs), U("getUrlFromDict", [ur, t], Vs), U("getDictOptString", [Re, ur, t], xa), U("getOptStringFromDict", [Re, ur, t], xa), U("getDictOptNumber", [gt, ur, t], $a), U("getOptNumberFromDict", [gt, ur, t], $a), U("getDictOptInteger", [Le, ur, t], ec), U("getOptIntegerFromDict", [Le, ur, t], ec), U("getDictOptBoolean", [Gr, ur, t], tc), U("getOptBooleanFromDict", [Gr, ur, t], tc), U("getDictOptColor", [fn, ur, t], ds), U("getOptColorFromDict", [fn, ur, t], ds), U("getDictOptColor", [Re, ur, t], ds), U("getOptColorFromDict", [Re, ur, t], ds), U("getDictOptUrl", [Re, ur, t], _s), U("getOptUrlFromDict", [Re, ur, t], _s), U("getDictOptUrl", [to, ur, t], _s), U("getOptUrlFromDict", [to, ur, t], _s), U("getDictFromDict", [ur, t], Wl), U("getArrayFromDict", [ur, t], Hl), U("getOptArrayFromDict", [ur, t], Ig), U("getOptDictFromDict", [ur, t], Dg), U("len", [ur], Pg), U("getDictKeys", [ur], rc), U("getDictValues", [ur], nc), Hr("getString", [ur, t], js), Hr("getBoolean", [ur, t], As), Hr("getInteger", [ur, t], Es), Hr("getNumber", [ur, t], Cs), Hr("getUrl", [ur, t], Vs), Hr("getColor", [ur, t], Ss), Hr("getArray", [ur, t], Hl), Hr("getDict", [ur, t], Wl), Hr("containsKey", [ur, Re], Tg), Hr("isEmpty", [ur], Mg), Hr("getKeys", [ur], rc), Hr("getValues", [ur], nc);
}
function si(t, r) {
  return (e, n, o) => {
    if (o.value < 0 || o.value >= n.value.length)
      throw new Error(`Requested index (${o.value}) out of bounds array size (${n.value.length}).`);
    let i = n.value[Number(o.value)], s = typeof i;
    if (t === "array" && !Array.isArray(i) || t !== "array" && s !== t || s === "object" && i === null)
      throw s === "object" && (Array.isArray(i) ? s = "Array" : i === null ? s = "Null" : s = "Dict"), new Error(`Incorrect value type: expected ${Zn(r)}, got ${Zn(s)}.`);
    if (t === "number" && r === "integer") {
      Ln(e, i);
      try {
        i = _n(i);
      } catch {
        throw new Error("Cannot convert value to integer.");
      }
    }
    return t === "string" && r === "color" && (i = ri(i)), t === "string" && r === "url" && po(i), {
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
      return r === "color" ? a = ri(a) : r === "url" && po(a), {
        type: r,
        value: a
      };
    }
  };
}
const Fs = si("string", "string"), Is = si("number", "number"), Ds = si("number", "integer"), Ts = si("boolean", "boolean"), Ms = si("string", "color"), Ps = si("string", "url"), Ul = si("array", "array"), Gl = si("object", "dict"), oc = Wi(Fs, "string"), ic = Wi(Is, "number"), sc = Wi(Ds, "integer"), lc = Wi(Ts, "boolean"), ps = Wi(Ms, "color"), gs = Wi(Ps, "url");
function zg(t, r, e) {
  try {
    return Ul(t, r, e);
  } catch {
    return {
      type: fr,
      value: []
    };
  }
}
function Lg(t, r, e) {
  try {
    return Gl(t, r, e);
  } catch {
    return {
      type: ur,
      value: {}
    };
  }
}
function Og(t, r) {
  return {
    type: Le,
    value: _n(r.value.length)
  };
}
function Bg(t, r) {
  return {
    type: Gr,
    value: r.value.length === 0 ? 1 : 0
  };
}
function Rg(t, r, e) {
  return r.value.length ? {
    type: fr,
    value: r.value.filter((n) => {
      const o = [];
      if (typeof n == "string")
        _o(n) && o.push([{
          type: fn,
          value: n
        }]), M_(n) && o.push([{
          type: to,
          value: n
        }]), o.push([{
          type: Re,
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
          type: fr,
          value: n
        }]);
      else if (typeof n == "object") {
        if (n === null)
          throw new Error("Incorrect value type: Null");
        o.push([{
          type: ur,
          value: n
        }]);
      } else if (typeof n == "boolean")
        o.push([{
          type: Gr,
          value: n ? 1 : 0
        }]);
      else
        throw new Error(`Incorrect value type: ${Zn(typeof n)}`);
      let i = {
        type: "missing"
      };
      for (const u of o)
        if (i = ld(e.value, u), "func" in i)
          break;
      let s;
      if ("func" in i)
        s = i.func;
      else {
        const u = e.value[0];
        zd(u.name || "Function", o[0], i, !0);
      }
      const a = s.args[0], l = tl(
        t,
        n,
        typeof a == "string" ? a : a.type
      ), c = s.cb(t, l);
      if (c.type !== Gr)
        throw new Error("Function must return boolean value.");
      return c.value;
    })
  } : {
    type: fr,
    value: []
  };
}
function Hg() {
  U("getArrayString", [
    fr,
    Le
  ], Fs), U("getStringFromArray", [
    fr,
    Le
  ], Fs), U("getArrayNumber", [
    fr,
    Le
  ], Is), U("getNumberFromArray", [
    fr,
    Le
  ], Is), U("getArrayInteger", [
    fr,
    Le
  ], Ds), U("getIntegerFromArray", [
    fr,
    Le
  ], Ds), U("getArrayBoolean", [
    fr,
    Le
  ], Ts), U("getBooleanFromArray", [
    fr,
    Le
  ], Ts), U("getArrayColor", [
    fr,
    Le
  ], Ms), U("getColorFromArray", [
    fr,
    Le
  ], Ms), U("getArrayUrl", [
    fr,
    Le
  ], Ps), U("getUrlFromArray", [
    fr,
    Le
  ], Ps), U("getArrayFromArray", [
    fr,
    Le
  ], Ul), U("getDictFromArray", [
    fr,
    Le
  ], Gl), U("getArrayOptString", [
    fr,
    Le,
    Re
  ], oc), U("getOptStringFromArray", [
    fr,
    Le,
    Re
  ], oc), U("getArrayOptNumber", [
    fr,
    Le,
    gt
  ], ic), U("getOptNumberFromArray", [
    fr,
    Le,
    gt
  ], ic), U("getArrayOptInteger", [
    fr,
    Le,
    Le
  ], sc), U("getOptIntegerFromArray", [
    fr,
    Le,
    Le
  ], sc), U("getArrayOptBoolean", [
    fr,
    Le,
    Gr
  ], lc), U("getOptBooleanFromArray", [
    fr,
    Le,
    Gr
  ], lc), U("getArrayOptColor", [
    fr,
    Le,
    fn
  ], ps), U("getOptColorFromArray", [
    fr,
    Le,
    fn
  ], ps), U("getArrayOptColor", [
    fr,
    Le,
    Re
  ], ps), U("getOptColorFromArray", [
    fr,
    Le,
    Re
  ], ps), U("getArrayOptUrl", [
    fr,
    Le,
    to
  ], gs), U("getOptUrlFromArray", [
    fr,
    Le,
    to
  ], gs), U("getArrayOptUrl", [
    fr,
    Le,
    Re
  ], gs), U("getOptUrlFromArray", [
    fr,
    Le,
    Re
  ], gs), U("getOptArrayFromArray", [
    fr,
    Le
  ], zg), U("getOptDictFromArray", [
    fr,
    Le
  ], Lg), U("len", [
    fr
  ], Og), Hr("getString", [fr, Le], Fs), Hr("getInteger", [fr, Le], Ds), Hr("getNumber", [fr, Le], Is), Hr("getBoolean", [fr, Le], Ts), Hr("getUrl", [fr, Le], Ps), Hr("getColor", [fr, Le], Ms), Hr("getArray", [fr, Le], Ul), Hr("getDict", [fr, Le], Gl), Hr("isEmpty", [fr], Bg), Hr("filter", [fr, D_], Rg);
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
      return t === "url" && po(n.value), {
        type: t,
        value: n.value
      };
    } else t === "url" && po(i);
    return tl(r, i, t);
  };
}
function Wg() {
  U("getStoredIntegerValue", [Re, Le], Ao(Le)), U("getStoredNumberValue", [Re, gt], Ao(gt)), U("getStoredStringValue", [Re, Re], Ao(Re)), U("getStoredUrlValue", [Re, to], Ao(to)), U("getStoredUrlValue", [Re, Re], Ao(to)), U("getStoredColorValue", [Re, fn], Ao(fn)), U("getStoredColorValue", [Re, Re], Ao(fn)), U("getStoredBooleanValue", [Re, Gr], Ao(Gr)), U("getStoredArrayValue", [Re], Ao(fr)), U("getStoredDictValue", [Re], Ao(ur));
}
function Ug() {
  return {
    type: gt,
    value: Math.PI
  };
}
function Gg(t, r) {
  return {
    type: gt,
    value: r.value / 180 * Math.PI
  };
}
function Jg(t, r) {
  return {
    type: gt,
    value: r.value / Math.PI * 180
  };
}
function qg(t, r) {
  return {
    type: gt,
    value: Math.sin(r.value)
  };
}
function Kg(t, r) {
  return {
    type: gt,
    value: Math.cos(r.value)
  };
}
function Yg(t, r) {
  return {
    type: gt,
    value: Math.tan(r.value)
  };
}
function Xg(t, r) {
  const e = Math.tan(r.value);
  if (Math.abs(e) < 1e-12)
    throw new Error("Cotangent is undefined for the given value.");
  return {
    type: gt,
    value: 1 / e
  };
}
function Zg(t, r) {
  return {
    type: gt,
    value: Math.atan(r.value)
  };
}
function Qg(t, r, e) {
  return {
    type: gt,
    value: Math.atan2(r.value, e.value)
  };
}
function xg(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arcsine is undefined for the given value.");
  return {
    type: gt,
    value: Math.asin(r.value)
  };
}
function $g(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arccosine is undefined for the given value.");
  return {
    type: gt,
    value: Math.acos(r.value)
  };
}
function eh() {
  U("pi", [], Ug), U("toRadians", [gt], Gg), U("toDegrees", [gt], Jg), U("sin", [gt], qg), U("cos", [gt], Kg), U("tan", [gt], Yg), U("cot", [gt], Xg), U("atan", [gt], Zg), U("atan2", [gt, gt], Qg), U("asin", [gt], xg), U("acos", [gt], $g);
}
function th() {
  X_(), vp(), Vg(), Lp(), fg(), pg(), Ng(), Hg(), Wg(), eh();
}
function j() {
}
const il = (t) => t;
function jo(t, r) {
  for (const e in r) t[e] = r[e];
  return (
    /** @type {T & S} */
    t
  );
}
function gd(t) {
  return t();
}
function ac() {
  return /* @__PURE__ */ Object.create(null);
}
function Jr(t) {
  t.forEach(gd);
}
function Nr(t) {
  return typeof t == "function";
}
function rh(t, r) {
  return t != t ? r == r : t !== r || t && typeof t == "object" || typeof t == "function";
}
let hs;
function Qn(t, r) {
  return t === r ? !0 : (hs || (hs = document.createElement("a")), hs.href = r, t === hs.href);
}
function Sr(t, r) {
  return t != t ? r == r : t !== r;
}
function nh(t) {
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
function Jl(t) {
  let r;
  return S(t, (e) => r = e)(), r;
}
function yn(t, r, e) {
  t.$$.on_destroy.push(S(r, e));
}
function sl(t, r, e, n) {
  if (t) {
    const o = hd(t, r, e, n);
    return t[0](o);
  }
}
function hd(t, r, e, n) {
  return t[1] && n ? jo(e.ctx.slice(), t[1](n(r))) : e.ctx;
}
function ll(t, r, e, n) {
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
function al(t, r, e, n, o, i) {
  if (o) {
    const s = hd(r, e, n, i);
    t.p(s, o);
  }
}
function cl(t) {
  if (t.ctx.length > 32) {
    const r = [], e = t.ctx.length / 32;
    for (let n = 0; n < e; n++)
      r[n] = -1;
    return r;
  }
  return -1;
}
function vl(t, r, e) {
  return t.set(e), r;
}
function ul(t) {
  return t && Nr(t.destroy) ? t.destroy : j;
}
function cc(t) {
  const r = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return r ? [parseFloat(r[1]), r[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const md = typeof window < "u";
let da = md ? () => window.performance.now() : () => Date.now(), _a = md ? (t) => requestAnimationFrame(t) : j;
const Ti = /* @__PURE__ */ new Set();
function bd(t) {
  Ti.forEach((r) => {
    r.c(t) || (Ti.delete(r), r.f());
  }), Ti.size !== 0 && _a(bd);
}
function pa(t) {
  let r;
  return Ti.size === 0 && _a(bd), {
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
function yt(t, r) {
  t.appendChild(r);
}
function yd(t) {
  if (!t) return document;
  const r = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return r && /** @type {ShadowRoot} */
  r.host ? (
    /** @type {ShadowRoot} */
    r
  ) : t.ownerDocument;
}
function oh(t) {
  const r = Te("style");
  return r.textContent = "/* empty */", ih(yd(t), r), r.sheet;
}
function ih(t, r) {
  return yt(
    /** @type {Document} */
    t.head || t,
    r
  ), r.sheet;
}
function q(t, r, e) {
  t.insertBefore(r, e || null);
}
function G(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function on(t, r) {
  for (let e = 0; e < t.length; e += 1)
    t[e] && t[e].d(r);
}
function Te(t) {
  return document.createElement(t);
}
function $r(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Jn(t) {
  return document.createTextNode(t);
}
function gr() {
  return Jn(" ");
}
function Kt() {
  return Jn("");
}
function Qe(t, r, e, n) {
  return t.addEventListener(r, e, n), () => t.removeEventListener(r, e, n);
}
function g(t, r, e) {
  e == null ? t.removeAttribute(r) : t.getAttribute(r) !== e && t.setAttribute(r, e);
}
const sh = ["width", "height"];
function Jo(t, r) {
  const e = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in r)
    r[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = r[n] : n === "__value" ? t.value = t[n] = r[n] : e[n] && e[n].set && sh.indexOf(n) === -1 ? t[n] = r[n] : g(t, n, r[n]);
}
function lh(t, r) {
  Object.keys(r).forEach((e) => {
    ah(t, e, r[e]);
  });
}
function ah(t, r, e) {
  const n = r.toLowerCase();
  n in t ? t[n] = typeof t[n] == "boolean" && e === "" ? !0 : e : r in t ? t[r] = typeof t[r] == "boolean" && e === "" ? !0 : e : g(t, r, e);
}
function $o(t) {
  return /-/.test(t) ? lh : Jo;
}
function ch(t) {
  return Array.from(t.childNodes);
}
function ro(t, r) {
  r = "" + r, t.data !== r && (t.data = /** @type {string} */
  r);
}
function uc(t, r) {
  t.value = r == null ? "" : r;
}
function F(t, r, e, n) {
  e == null ? t.style.removeProperty(r) : t.style.setProperty(r, e, "");
}
function fc(t, r, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const o = t.options[n];
    if (o.__value === r) {
      o.selected = !0;
      return;
    }
  }
  (!e || r !== void 0) && (t.selectedIndex = -1);
}
function uh(t) {
  const r = t.querySelector(":checked");
  return r && r.__value;
}
function wd(t, r, { bubbles: e = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: r, bubbles: e, cancelable: n });
}
function dc(t, r) {
  return new t(r);
}
const Hs = /* @__PURE__ */ new Map();
let Ws = 0;
function fh(t) {
  let r = 5381, e = t.length;
  for (; e--; ) r = (r << 5) - r ^ t.charCodeAt(e);
  return r >>> 0;
}
function dh(t, r) {
  const e = { stylesheet: oh(r), rules: {} };
  return Hs.set(t, e), e;
}
function Us(t, r, e, n, o, i, s, a = 0) {
  const l = 16.666 / n;
  let c = `{
`;
  for (let w = 0; w <= 1; w += l) {
    const k = r + (e - r) * i(w);
    c += w * 100 + `%{${s(k, 1 - k)}}
`;
  }
  const u = c + `100% {${s(e, 1 - e)}}
}`, f = `__svelte_${fh(u)}_${a}`, _ = yd(t), { stylesheet: h, rules: m } = Hs.get(_) || dh(_, t);
  m[f] || (m[f] = !0, h.insertRule(`@keyframes ${f} ${u}`, h.cssRules.length));
  const p = t.style.animation || "";
  return t.style.animation = `${p ? `${p}, ` : ""}${f} ${n}ms linear ${o}ms 1 both`, Ws += 1, f;
}
function Gs(t, r) {
  const e = (t.style.animation || "").split(", "), n = e.filter(
    r ? (i) => i.indexOf(r) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), o = e.length - n.length;
  o && (t.style.animation = n.join(", "), Ws -= o, Ws || _h());
}
function _h() {
  _a(() => {
    Ws || (Hs.forEach((t) => {
      const { ownerNode: r } = t.stylesheet;
      r && G(r);
    }), Hs.clear());
  });
}
let is;
function ts(t) {
  is = t;
}
function Ui() {
  if (!is) throw new Error("Function called outside component initialization");
  return is;
}
function xn(t) {
  Ui().$$.on_mount.push(t);
}
function fl(t) {
  Ui().$$.after_update.push(t);
}
function sn(t) {
  Ui().$$.on_destroy.push(t);
}
function ph() {
  const t = Ui();
  return (r, e, { cancelable: n = !1 } = {}) => {
    const o = t.$$.callbacks[r];
    if (o) {
      const i = wd(
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
function fi(t, r) {
  return Ui().$$.context.set(t, r), r;
}
function Ir(t) {
  return Ui().$$.context.get(t);
}
function On(t, r) {
  const e = t.$$.callbacks[r.type];
  e && e.slice().forEach((n) => n.call(this, r));
}
const Fi = [], Fr = [];
let Mi = [];
const _c = [], kd = /* @__PURE__ */ Promise.resolve();
let ql = !1;
function vd() {
  ql || (ql = !0, kd.then(jd));
}
function Sn() {
  return vd(), kd;
}
function go(t) {
  Mi.push(t);
}
const jl = /* @__PURE__ */ new Set();
let Ai = 0;
function jd() {
  if (Ai !== 0)
    return;
  const t = is;
  do {
    try {
      for (; Ai < Fi.length; ) {
        const r = Fi[Ai];
        Ai++, ts(r), gh(r.$$);
      }
    } catch (r) {
      throw Fi.length = 0, Ai = 0, r;
    }
    for (ts(null), Fi.length = 0, Ai = 0; Fr.length; ) Fr.pop()();
    for (let r = 0; r < Mi.length; r += 1) {
      const e = Mi[r];
      jl.has(e) || (jl.add(e), e());
    }
    Mi.length = 0;
  } while (Fi.length);
  for (; _c.length; )
    _c.pop()();
  ql = !1, jl.clear(), ts(t);
}
function gh(t) {
  if (t.fragment !== null) {
    t.update(), Jr(t.before_update);
    const r = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, r), t.after_update.forEach(go);
  }
}
function hh(t) {
  const r = [], e = [];
  Mi.forEach((n) => t.indexOf(n) === -1 ? r.push(n) : e.push(n)), e.forEach((n) => n()), Mi = r;
}
let Qi;
function ga() {
  return Qi || (Qi = Promise.resolve(), Qi.then(() => {
    Qi = null;
  })), Qi;
}
function _i(t, r, e) {
  t.dispatchEvent(wd(`${r ? "intro" : "outro"}${e}`));
}
const Ns = /* @__PURE__ */ new Set();
let Io;
function ir() {
  Io = {
    r: 0,
    c: [],
    p: Io
    // parent group
  };
}
function sr() {
  Io.r || Jr(Io.c), Io = Io.p;
}
function L(t, r) {
  t && t.i && (Ns.delete(t), t.i(r));
}
function x(t, r, e, n) {
  if (t && t.o) {
    if (Ns.has(t)) return;
    Ns.add(t), Io.c.push(() => {
      Ns.delete(t), n && (e && t.d(1), n());
    }), t.o(r);
  } else n && n();
}
const ha = { duration: 0 };
function dl(t, r, e) {
  const n = { direction: "in" };
  let o = r(t, e, n), i = !1, s, a, l = 0;
  function c() {
    s && Gs(t, s);
  }
  function u() {
    const {
      delay: _ = 0,
      duration: h = 300,
      easing: m = il,
      tick: p = j,
      css: w
    } = o || ha;
    w && (s = Us(t, 0, 1, h, _, m, w, l++)), p(0, 1);
    const k = da() + _, z = k + h;
    a && a.abort(), i = !0, go(() => _i(t, !0, "start")), a = pa((H) => {
      if (i) {
        if (H >= z)
          return p(1, 0), _i(t, !0, "end"), c(), i = !1;
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
      f || (f = !0, Gs(t), Nr(o) ? (o = o(n), ga().then(u)) : u());
    },
    invalidate() {
      f = !1;
    },
    end() {
      i && (c(), i = !1);
    }
  };
}
function Cd(t, r, e) {
  const n = { direction: "out" };
  let o = r(t, e, n), i = !0, s;
  const a = Io;
  a.r += 1;
  let l;
  function c() {
    const {
      delay: u = 0,
      duration: f = 300,
      easing: _ = il,
      tick: h = j,
      css: m
    } = o || ha;
    m && (s = Us(t, 1, 0, f, u, _, m));
    const p = da() + u, w = p + f;
    go(() => _i(t, !1, "start")), "inert" in t && (l = /** @type {HTMLElement} */
    t.inert, t.inert = !0), pa((k) => {
      if (i) {
        if (k >= w)
          return h(0, 1), _i(t, !1, "end"), --a.r || Jr(a.c), !1;
        if (k >= p) {
          const z = _((k - p) / f);
          h(1 - z, z);
        }
      }
      return i;
    });
  }
  return Nr(o) ? ga().then(() => {
    o = o(n), c();
  }) : c(), {
    end(u) {
      u && "inert" in t && (t.inert = l), u && o.tick && o.tick(1, 0), i && (s && Gs(t, s), i = !1);
    }
  };
}
function pc(t, r, e, n) {
  let i = r(t, e, { direction: "both" }), s = n ? 0 : 1, a = null, l = null, c = null, u;
  function f() {
    c && Gs(t, c);
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
      easing: k = il,
      tick: z = j,
      css: H
    } = i || ha, O = {
      start: da() + p,
      b: m
    };
    m || (O.group = Io, Io.r += 1), "inert" in t && (m ? u !== void 0 && (t.inert = u) : (u = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), a || l ? l = O : (H && (f(), c = Us(t, s, m, w, p, k, H)), m && z(0, 1), a = _(O, w), go(() => _i(t, m, "start")), pa((oe) => {
      if (l && oe > l.start && (a = _(l, w), l = null, _i(t, a.b, "start"), H && (f(), c = Us(
        t,
        s,
        a.b,
        a.duration,
        0,
        k,
        i.css
      ))), a) {
        if (oe >= a.end)
          z(s = a.b, 1 - s), _i(t, a.b, "end"), l || (a.b ? f() : --a.group.r || Jr(a.group.c)), a = null;
        else if (oe >= a.start) {
          const fe = oe - a.start;
          s = a.a + a.d * k(fe / a.duration), z(s, 1 - s);
        }
      }
      return !!(a || l);
    }));
  }
  return {
    run(m) {
      Nr(i) ? ga().then(() => {
        i = i({ direction: m ? "in" : "out" }), h(m);
      }) : h(m);
    },
    end() {
      f(), a = l = null;
    }
  };
}
function rr(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function Ed(t, r) {
  x(t, 1, 1, () => {
    r.delete(t.key);
  });
}
function Ad(t, r, e, n, o, i, s, a, l, c, u, f) {
  let _ = t.length, h = i.length, m = _;
  const p = {};
  for (; m--; ) p[t[m].key] = m;
  const w = [], k = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), H = [];
  for (m = h; m--; ) {
    const T = f(o, i, m), Z = e(T);
    let ce = s.get(Z);
    ce ? H.push(() => ce.p(T, r)) : (ce = c(Z, T), ce.c()), k.set(Z, w[m] = ce), Z in p && z.set(Z, Math.abs(m - p[Z]));
  }
  const O = /* @__PURE__ */ new Set(), oe = /* @__PURE__ */ new Set();
  function fe(T) {
    L(T, 1), T.m(a, u), s.set(T.key, T), u = T.first, h--;
  }
  for (; _ && h; ) {
    const T = w[h - 1], Z = t[_ - 1], ce = T.key, C = Z.key;
    T === Z ? (u = T.first, _--, h--) : k.has(C) ? !s.has(ce) || O.has(ce) ? fe(T) : oe.has(C) ? _-- : z.get(ce) > z.get(C) ? (oe.add(ce), fe(T)) : (O.add(C), _--) : (l(Z, s), _--);
  }
  for (; _--; ) {
    const T = t[_];
    k.has(T.key) || l(T, s);
  }
  for (; h; ) fe(w[h - 1]);
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
function Sd(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Lt(t) {
  t && t.c();
}
function Nt(t, r, e) {
  const { fragment: n, after_update: o } = t.$$;
  n && n.m(r, e), go(() => {
    const i = t.$$.on_mount.map(gd).filter(Nr);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : Jr(i), t.$$.on_mount = [];
  }), o.forEach(go);
}
function zt(t, r) {
  const e = t.$$;
  e.fragment !== null && (hh(e.after_update), Jr(e.on_destroy), e.fragment && e.fragment.d(r), e.on_destroy = e.fragment = null, e.ctx = []);
}
function mh(t, r) {
  t.$$.dirty[0] === -1 && (Fi.push(t), vd(), t.$$.dirty.fill(0)), t.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function Lr(t, r, e, n, o, i, s = null, a = [-1]) {
  const l = is;
  ts(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: j,
    not_equal: o,
    bound: ac(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(r.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: ac(),
    dirty: a,
    skip_bound: !1,
    root: r.target || l.$$.root
  };
  s && s(c.root);
  let u = !1;
  if (c.ctx = e ? e(t, r.props || {}, (f, _, ...h) => {
    const m = h.length ? h[0] : _;
    return c.ctx && o(c.ctx[f], c.ctx[f] = m) && (!c.skip_bound && c.bound[f] && c.bound[f](m), u && mh(t, f)), _;
  }) : [], c.update(), u = !0, Jr(c.before_update), c.fragment = n ? n(c.ctx) : !1, r.target) {
    if (r.hydrate) {
      const f = ch(r.target);
      c.fragment && c.fragment.l(f), f.forEach(G);
    } else
      c.fragment && c.fragment.c();
    r.intro && L(t.$$.fragment), Nt(t, r.target, r.anchor), jd();
  }
  ts(l);
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
    zt(this, 1), this.$destroy = j;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(r, e) {
    if (!Nr(e))
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
    this.$$set && !nh(r) && (this.$$.skip_bound = !0, this.$$set(r), this.$$.skip_bound = !1);
  }
}
const bh = "4", Si = [];
function yh(t, r) {
  return {
    subscribe: Do(t, r).subscribe
  };
}
function Do(t, r = j) {
  let e;
  const n = /* @__PURE__ */ new Set();
  function o(a) {
    if (rh(t, a) && (t = a, e)) {
      const l = !Si.length;
      for (const c of n)
        c[1](), Si.push(c, t);
      if (l) {
        for (let c = 0; c < Si.length; c += 2)
          Si[c][0](Si[c + 1]);
        Si.length = 0;
      }
    }
  }
  function i(a) {
    o(a(t));
  }
  function s(a, l = j) {
    const c = [a, l];
    return n.add(c), n.size === 1 && (e = r(o, i) || j), a(t), () => {
      n.delete(c), n.size === 0 && e && (e(), e = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Gi(t, r, e) {
  const n = !Array.isArray(t), o = n ? [t] : t;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = r.length < 2;
  return yh(e, (s, a) => {
    let l = !1;
    const c = [];
    let u = 0, f = j;
    const _ = () => {
      if (u)
        return;
      f();
      const m = r(n ? c[0] : c, s, a);
      i ? s(m) : f = Nr(m) ? m : j;
    }, h = o.map(
      (m, p) => S(
        m,
        (w) => {
          c[p] = w, u &= ~(1 << p), l && _();
        },
        () => {
          u |= 1 << p;
        }
      )
    );
    return l = !0, _(), function() {
      Jr(h), f(), l = !1;
    };
  });
}
class qo {
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
class Vd extends qo {
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
class Fd extends qo {
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
class Id extends qo {
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
class Dd extends qo {
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
class Td extends qo {
  convertValue(r) {
    if (typeof r != "string" || !_o(r))
      throw new Error("Incorrect variable value");
    return ri(r);
  }
  fromString(r) {
    return this.convertValue(r);
  }
  getType() {
    return "color";
  }
}
class Md extends qo {
  convertValue(r) {
    if (typeof r != "string")
      throw new Error("Incorrect variable value");
    return po(r), r;
  }
  fromString(r) {
    return po(r), r;
  }
  getType() {
    return "url";
  }
}
class Pd extends qo {
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
class Nd extends qo {
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
const Kl = {
  string: Vd,
  number: Id,
  integer: Fd,
  boolean: Dd,
  color: Td,
  url: Md,
  dict: Pd,
  array: Nd
};
function lo(t, r, e) {
  if (!(r in Kl))
    throw new Error("Unsupported variable type");
  return new Kl[r](t, e);
}
function wh() {
}
function kh(t) {
  return t(this.value), wh;
}
function gc() {
  throw new Error("Cannot change the value of this type of variable");
}
class vh extends Vd {
}
class jh extends Id {
}
class Ch extends Fd {
}
class Eh extends Dd {
}
class Ah extends Td {
}
class Sh extends Md {
}
class Vh extends Pd {
}
class Fh extends Nd {
}
class Ih extends qo {
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
const Js = {
  string: vh,
  number: jh,
  integer: Ch,
  boolean: Eh,
  color: Ah,
  url: Sh,
  dict: Vh,
  array: Fh,
  datetime: Ih
};
for (const t in Js) {
  const r = Js[t];
  r.prototype.subscribe = kh, r.prototype.set = gc, r.prototype.setValue = gc;
}
function zs(t, r, e) {
  if (!(r in Js))
    throw new Error("Unsupported variable type");
  return new Js[r](t, e);
}
function Dh(t) {
  const r = t.getType();
  let e = t.getValue();
  return r === Gr && (e = e ? 1 : 0), {
    type: r,
    value: e
  };
}
function Th(t, r) {
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
    if (typeof t != "string" || !_o(t))
      throw new Error("Incorrect variable value");
    return ri(t);
  } else if (r === "url") {
    if (typeof t != "string")
      throw new Error("Incorrect variable value");
    return po(t), t;
  } else if (r === "dict" || r === "array")
    try {
      return JSON.parse(t);
    } catch {
      throw new Error("Incorrect dict value");
    }
  throw new Error(`Unexpected type ${r}`);
}
th();
function Mh(t, r) {
  return {
    type: Re,
    value: r.value
  };
}
function Ph(t, r) {
  return {
    type: gt,
    value: r.value
  };
}
function Nh(t, r) {
  return Ln(t, r.value), {
    type: Le,
    value: r.value
  };
}
function zh(t, r) {
  return {
    type: Gr,
    value: r.value ? 1 : 0
  };
}
function Lh(t, r) {
  const e = Bs(Bn(t, r.argument));
  switch (r.operator) {
    case "!":
      if (e.type === Gr)
        return {
          type: Gr,
          value: e.value ? 0 : 1
        };
      An(`${r.operator}${dn(e)}`, "A Boolean is expected after a unary not.");
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
        An(
          `${r.operator}${dn(e)}`,
          `A Number is expected after a unary ${r.operator === "+" ? "plus" : "minus"}.`
        );
      }
  }
}
function Oh(t, r) {
  const e = Bs(Bn(t, r.test));
  if (e.type === Gr)
    return e.value ? Bn(t, r.consequent) : Bn(t, r.alternate);
  An(
    `${dn(e)} ? ${dn(Bn(t, r.consequent))} : ${dn(Bn(t, r.alternate))}`,
    "Ternary must be called with a Boolean value as a condition."
  );
}
function Bh(t, r) {
  try {
    return Bn(t, r.test);
  } catch {
    return Bn(t, r.alternate);
  }
}
function Rh(t, r) {
  let e = "";
  if (r.quasis.length === 2 && r.quasis[0].value === "" && r.quasis[1].value === "")
    return Bn(t, r.expressions[0]);
  for (let n = 0; n < r.expressions.length; ++n)
    e += r.quasis[n].value, e += ki(Bn(t, r.expressions[n]), !0);
  return e += r.quasis[r.quasis.length - 1].value, {
    type: Re,
    value: e
  };
}
function Hh(t, r) {
  const e = Bs(Bn(t, r.left));
  if (e.type !== Gr && An(
    `${dn(e)} ${r.operator} ...`,
    `'${r.operator}' must be called with boolean operands.`
  ), r.operator === "||" && e.value)
    return e;
  if (r.operator === "&&" && !e.value)
    return {
      type: Gr,
      value: 0
    };
  const n = Bs(Bn(t, r.right));
  return n.type !== Gr && An(
    `${dn(e)} ${r.operator} ${dn(n)}`,
    `Operator '${r.operator}' cannot be applied to different types: Boolean and ${Zn(n.type)}.`
  ), {
    type: Gr,
    value: n.value
  };
}
function Wh(t, r, e) {
  let n;
  return r.type === Pr && e.type === Pr ? n = r.value.getTime() === e.value.getTime() : n = r.value === e.value, t === "!=" && (n = !n), {
    type: Gr,
    value: n ? 1 : 0
  };
}
function Uh(t, r, e) {
  (r.type !== gt && r.type !== Le && r.type !== Pr || e.type !== gt && e.type !== Le && e.type !== Pr) && An(
    `${dn(r)} ${t} ${dn(e)}`,
    `Operator '${t}' cannot be applied to ${Zn(r.type)} type.`
  );
  let n;
  const o = r.type === Pr ? r.value.getTime() : r.value, i = e.type === Pr ? e.value.getTime() : e.value;
  return t === ">" ? n = o > i : t === ">=" ? n = o >= i : t === "<" ? n = o < i : n = o <= i, {
    type: Gr,
    value: n ? 1 : 0
  };
}
function Gh(t, r, e, n) {
  if (e.type !== Re && e.type !== gt && e.type !== Le && An(
    `${dn(e)} ${r} ${dn(n)}`,
    `Operator '${r}' cannot be applied to ${Zn(e.type)} type.`
  ), e.type === Re)
    return r === "-" && An(
      `${dn(e)} - ${dn(n)}`,
      `Operator '${r}' cannot be applied to ${Zn(e.type)} type.`
    ), {
      type: Re,
      value: e.value + n.value
    };
  let o = r === "+" ? e.value + n.value : e.value - n.value;
  if (e.type === Le)
    try {
      o = vi(t, o), Ln(t, o);
    } catch (i) {
      An(
        `${dn(e)} ${r} ${dn(n)}`,
        i.message
      );
    }
  return {
    type: e.type,
    value: o
  };
}
function Jh(t, r, e, n) {
  e.type !== Le && e.type !== gt && An(
    `${dn(e)} ${r} ${dn(n)}`,
    `Operator '${r}' cannot be applied to ${Zn(e.type)} type.`
  );
  let o;
  if (r === "*")
    o = e.value * n.value;
  else if (r === "/" || r === "%")
    Number(n.value) === 0 && An(
      `${dn(e)} ${r} ${dn(n)}`,
      "Division by zero is not supported."
    ), r === "/" ? o = e.value / n.value : o = e.value % n.value;
  else
    throw new Error(`Unsupported operation ${r}`);
  if (e.type === Le)
    try {
      o = vi(t, o), Ln(t, o);
    } catch (i) {
      An(
        `${dn(e)} ${r} ${dn(n)}`,
        i.message
      );
    }
  return {
    type: e.type,
    value: o
  };
}
function qh(t, r) {
  const e = r.operator;
  let n = Bn(t, r.left), o = Bn(t, r.right);
  if ((n.type === "number" && o.type === "integer" || n.type === "integer" && o.type === "number") && (n.type === "integer" ? n = Nl(n) : o.type === "integer" && (o = Nl(o))), n.type !== o.type && An(
    `${dn(n)} ${r.operator} ${dn(o)}`,
    `Operator '${e}' cannot be applied to different types: ${Zn(n.type)} and ${Zn(o.type)}.`
  ), e === "==" || e === "!=")
    return Wh(e, n, o);
  if (e === ">" || e === ">=" || e === "<" || e === "<=")
    return Uh(e, n, o);
  if (e === "+" || e === "-")
    return Gh(t, e, n, o);
  if (e === "/" || e === "*" || e === "%")
    return Jh(t, e, n, o);
  throw new Error(`Unsupported operation ${e}`);
}
function qs(t) {
  return t.map(dn).join(", ");
}
function Kh(t, r) {
  const e = r.callee.name;
  let n, o = r.arguments.map((a) => Bn(t, a));
  const i = e + ":" + o.map((a) => a.type).join("#");
  let s;
  if (t.customFunctions && (s = Ol(t.customFunctions, e, o)), !s || !("func" in s))
    if (zl.has(i))
      s = {
        func: zl.get(i),
        conversions: 0
      };
    else {
      const a = Ol(es, e, o);
      ("func" in a || !s || s.type === "missing") && (s = a);
    }
  if (s && (("expected" in s || "type" in s && s.type === "missing") && zd(e, o, s), n = s.func, s.conversions && (o = ad(n, o))), !n)
    throw new Error("Function not found");
  try {
    return n.cb(t, ...o);
  } catch (a) {
    if (a && a instanceof ca)
      throw a;
    const l = `${e}(${qs(o)})`;
    An(l, a.message);
  }
}
function zd(t, r, e, n = !1) {
  const o = r.map((a) => Zn(a.type)).join(", "), i = `${t}(${qs(r)})`, s = n ? N_ : An;
  if (e.type === "few" && r.length === 0 && e.hasOverloads)
    s(i, "Function requires non empty argument list.");
  else if (e.type === "many" || e.type === "few" || e.type === "mismatch")
    if (e.hasOverloads)
      s(i, `Function has no matching overload for given argument types: ${o}.`);
    else if (e.type === "many" || e.type === "few")
      e.def.args.some((a) => typeof a == "object" && a.isVararg) ? s(i, `At least ${e.def.args.length} argument(s) expected.`) : s(i, `Exactly ${e.def.args.length} argument(s) expected.`);
    else {
      const a = e.def.args.map((l) => Zn(typeof l == "string" ? l : l.type)).join(", ");
      s(i, `Invalid argument type: expected ${a}, got ${o}.`);
    }
  else
    s(i, `Unknown function name: ${t}.`);
}
function Yh(t, r) {
  const e = r.method.name;
  let n, o = [r.object, ...r.arguments].map((s) => Bn(t, s));
  const i = e + ":" + o.map((s) => s.type).join("#");
  if (Ll.has(i))
    n = Ll.get(i);
  else {
    const s = Ol(vs, e, o);
    if ("expected" in s || "type" in s && s.type === "missing") {
      const a = o.slice(1).map((c) => Zn(c.type)).join(", "), l = `${e}(${qs(o.slice(1))})`;
      s.type === "few" && o.length === 1 ? An(l, "Method requires non empty argument list.") : s.type === "many" ? An(l, `Method has no matching overload for given argument types: ${a}.`) : s.type === "few" || s.type === "mismatch" ? An(l, `Method has no matching overload for given argument types: ${a}.`) : An(l, `Unknown method name: ${e}.`);
    }
    n = s.func, s.conversions && (o = ad(n, o));
  }
  if (!n)
    throw new Error("Method not found");
  try {
    return n.cb(t, ...o);
  } catch (s) {
    if (s && s instanceof ca)
      throw s;
    const a = `${e}(${qs(o.slice(1))})`;
    An(a, s.message);
  }
}
function Xh(t, r) {
  var i;
  const e = r.id.name, n = (i = t.customFunctions) == null ? void 0 : i.get(e);
  if (n)
    return {
      type: "function",
      value: n
    };
  const o = t.variables.get(e);
  if (o)
    return Dh(o);
  throw new Error(`Variable '${e}' is missing.`);
}
const hc = {
  StringLiteral: Mh,
  NumberLiteral: Ph,
  IntegerLiteral: Nh,
  BooleanLiteral: zh,
  UnaryExpression: Lh,
  ConditionalExpression: Oh,
  TryExpression: Bh,
  TemplateLiteral: Rh,
  LogicalExpression: Hh,
  BinaryExpression: qh,
  CallExpression: Kh,
  MethodExpression: Yh,
  Variable: Xh
};
function Bn(t, r) {
  if (r.type in hc)
    return hc[r.type](t, r);
  throw new Error("Unsupported expression");
}
function _l(t, r, e, n, o) {
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
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(bh);
const Zh = "appkit-root_platform_desktop", Qh = "appkit-root__clickable", xh = "appkit-root", $h = "appkit-root__selectable", em = "appkit-root__unselectable", Cr = {
  root_platform_desktop: Zh,
  root__clickable: Qh,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  "root__any-actions": "appkit-root__any-actions",
  root: xh,
  root__selectable: $h,
  root__unselectable: em,
  "root__only-desktop": "appkit-root__only-desktop",
  "root_restrict-scroll": "appkit-root_restrict-scroll",
  "root_disabled-context-menu": "appkit-root_disabled-context-menu"
}, Kr = Symbol("root"), tm = "appkit-outer", rm = "appkit-outer_width_content", nm = "appkit-outer_height_content", om = "appkit-root__clickable", im = "appkit-outer__border", sm = "appkit-outer_visibility_invisible", lm = "appkit-outer_visibility_gone", Ks = {
  outer: tm,
  outer_width_content: rm,
  outer_height_content: nm,
  root__clickable: om,
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
  outer__border: im,
  outer_visibility_invisible: sm,
  outer_visibility_gone: lm,
  "outer_has-action-animation": "appkit-outer_has-action-animation",
  "outer_has-custom-focus": "appkit-outer_has-custom-focus"
};
function dr(t) {
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
function ln(t) {
  let r = pe(t);
  return r === "0" && (r += "em"), r;
}
function Yl(t) {
  let r = String(t);
  return r.indexOf("&") > -1 && (r = r.replace(/&/g, "&amp;")), r.indexOf("<") > -1 && (r = r.replace(/</g, "&lt;")), r.indexOf(">") > -1 && (r = r.replace(/>/g, "&gt;")), r.indexOf('"') > -1 && (r = r.replace(/"/g, "&quot;")), r;
}
const zo = Boolean;
function pl(t, r) {
  if (t.length === 1 && t[0].type === "solid")
    return cm({
      bg: t[0]
    });
  const e = t.map((n) => {
    if (n.type === "solid")
      return am({
        bg: n
      });
    if (n.type === "gradient")
      return um({
        bg: n
      });
    if (n.type === "image")
      return _m({
        bg: n,
        direction: r
      });
    if (n.type === "radial_gradient")
      return dm({
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
function am(t) {
  const r = pr(t.bg.color || "transparent");
  return {
    size: void 0,
    pos: void 0,
    image: `linear-gradient(to bottom,${r},${r})`
  };
}
function cm(t) {
  return {
    color: pr(t.bg.color || "transparent"),
    size: "auto",
    position: "50% 50%"
  };
}
function Ld(t) {
  return t.every((n) => n.color && typeof n.position == "number" && n.position >= 0 && n.position <= 1) ? t.sort((n, o) => Math.abs(n.position - o.position) < 1e-6 ? 0 : n.position - o.position).map((n) => `${pr(n.color)} ${(n.position * 100).toFixed(2)}%`).join(",") : void 0;
}
function um(t) {
  var n, o, i, s;
  if (!Array.isArray((n = t.bg) == null ? void 0 : n.colors) && !Array.isArray((o = t.bg) == null ? void 0 : o.color_map))
    return;
  const r = (i = t.bg.colors) == null ? void 0 : i.filter(zo);
  if (!(r != null && r.length) && !((s = t.bg) != null && s.color_map))
    return;
  let e;
  if (t.bg.color_map) {
    const a = Ld(t.bg.color_map);
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
const fm = {
  nearest_corner: "closest-corner",
  farthest_corner: "farthest-corner",
  nearest_side: "closest-side",
  farthest_side: "farthest-side"
};
function mc(t) {
  if (t && typeof t == "object" && "type" in t && t.value !== void 0) {
    if (t.type === "fixed")
      return ln(t.value);
    if (t.type === "relative")
      return `${Number(t.value) * 100}%`;
  }
  return "50%";
}
function dm(t) {
  var a, l, c, u;
  if (!Array.isArray((a = t.bg) == null ? void 0 : a.colors) && !Array.isArray((l = t.bg) == null ? void 0 : l.color_map))
    return;
  const r = (c = t.bg.colors) == null ? void 0 : c.filter(zo);
  if (!(r != null && r.length) && !((u = t.bg) != null && u.color_map))
    return;
  let e;
  if (t.bg.color_map ? e = Ld(t.bg.color_map) : r && (e = r.map((f) => pr(f)).join(",")), !e)
    return;
  const n = t.bg.radius;
  let o;
  n && typeof n == "object" && "type" in n && n.value !== void 0 && (n.type === "fixed" ? o = ln(n.value) : n.type === "relative" && (o = fm[n.value]));
  const i = mc(t.bg.center_x), s = mc(t.bg.center_y);
  return {
    size: void 0,
    pos: void 0,
    image: `radial-gradient(circle ${o || "farthest-corner"} at ${i} ${s},` + e + ")"
  };
}
function _m(t) {
  var e;
  const r = (e = t.bg) == null ? void 0 : e.image_url;
  if (r)
    return {
      size: Od(t.bg.scale),
      pos: Bd(t.bg, t.direction),
      image: 'url("' + Yl(r) + '")'
    };
}
function Od(t) {
  return t === "fit" ? "contain" : t === "stretch" ? "fill" : t === "no_scale" ? "none" : "cover";
}
function pm(t) {
  return t === "none" ? "auto" : t === "fill" ? "100% 100%" : t;
}
function Bd(t, r) {
  let e, n;
  return t.content_alignment_horizontal === "left" || r === "ltr" && t.content_alignment_horizontal === "start" || r === "rtl" && t.content_alignment_horizontal === "end" ? e = "0%" : t.content_alignment_horizontal === "right" || r === "ltr" && t.content_alignment_horizontal === "end" || r === "rtl" && t.content_alignment_horizontal === "start" ? e = "100%" : e = "50%", t.content_alignment_vertical === "top" ? n = "0%" : t.content_alignment_vertical === "bottom" ? n = "100%" : n = "50%", e + " " + n;
}
function en(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e < 0 ? r : e;
}
function bc(t, r, e) {
  return typeof r == "number" && (t && r > 0 && r <= 100 || !t && r >= 0 && r < 100) ? r : e;
}
function gm(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1 && t.index !== void 0;
}
function hm(t, {
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
  }, c = Gi(s, (h) => h);
  let u;
  const f = (h) => {
    const m = h.type === "visibility";
    o.execAnyActions([h.action], {
      logType: m ? "visible" : "disappear",
      node: t,
      processUrls: !1
    });
  }, _ = c.subscribe((h) => {
    u = h.filter(gm);
    const m = {};
    u.forEach((k) => {
      m[k.index] = k;
    }), l();
    const p = [...new Set(u.map((k) => {
      const z = i[k.index].type === "visibility";
      return bc(
        z,
        k.visibility_percentage,
        z ? 50 : 0
      ) / 100;
    }))];
    if (!p.length)
      return;
    const w = (k) => {
      k.forEach((z) => {
        u.forEach((H) => {
          const O = i[H.index], oe = O.type === "visibility", fe = bc(
            oe,
            H.visibility_percentage,
            oe ? 50 : 0
          );
          let T;
          fe === 0 ? T = z.intersectionRatio >= 1e-12 : T = z.intersectionRatio >= fe / 100, (oe ? !O.visible && T : O.visible && !T) ? O.finished || (O.timer = setTimeout(() => {
            ++O.count;
            const C = H.log_limit === 0 ? 1 / 0 : H.log_limit || 1;
            O.count >= C && (O.finished = !0), f(O);
          }, en(H.visibility_duration, 800))) : (oe ? !T : T) && O.timer && clearTimeout(O.timer), O.visible = T;
        });
      });
    };
    a = new IntersectionObserver(w, {
      threshold: p
    }), a.observe(t);
  });
  return {
    destroy() {
      u == null || u.forEach((h) => {
        const m = i[h.index];
        !m || m.type !== "disappear" || !m.visible || m.finished || n.registerTimeout(window.setTimeout(() => {
          f(m);
        }, h.visibility_duration));
      }), l(), _();
    }
  };
}
function yc(t, r) {
  r && t.push(r);
}
function ht(t, r, e) {
  const n = [];
  yc(n, r[t]);
  for (const o in e)
    if (e.hasOwnProperty(o)) {
      const i = e[o];
      if (i) {
        const s = `${t}_${o}` + (typeof i == "string" ? `_${i}` : "");
        yc(n, r[s]);
      }
    }
  return n.join(" ");
}
function mm(t, r, e, n) {
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
const Rd = mm, ma = Symbol("state");
function ho(t, r) {
  var s, a;
  const e = t.top || 0, n = ((s = r === "ltr" ? t.end : t.start) != null ? s : t.right) || 0, o = t.bottom || 0, i = ((a = r === "ltr" ? t.start : t.end) != null ? a : t.left) || 0;
  return e === 0 && n === 0 && o === 0 && i === 0 ? "" : pe(e) + " " + pe(n) + " " + pe(o) + " " + pe(i);
}
function gl(t) {
  if (typeof t != "number" && typeof t != "string")
    return !1;
  const r = Number(t);
  return !Number.isNaN(r);
}
function Nn(t) {
  return gl(t) && t >= 0;
}
function ss(t, r, e) {
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
  return ho(t, r);
}
function bm(t, r) {
  return !Nn(t) || t === void 0 || t > 1 ? r : Number(t);
}
const ym = Object.prototype.hasOwnProperty;
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
    if (!ym.call(r, i) || !Ji(t[i], r[i]))
      return !1;
  }
  return !0;
}
function Qo(t, r) {
  return Ji(t, r) ? r : t;
}
function wm(t, r) {
  return t === "visible" || t === "invisible" || t === "gone" ? t : r;
}
function Hd(t, r) {
  return t === "linear" || t === "ease" || t === "ease_in_out" || t === "ease_in" || t === "ease_out" ? t : r;
}
function so(t, r) {
  const e = Number(t);
  return Number.isNaN(e) ? r : e;
}
function ls(t) {
  const r = [];
  return t.name === "set" ? (t.items || []).forEach((e) => {
    r.push(...ls(e));
  }) : r.push(t), r;
}
function hi(t, r) {
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
function km(t, r) {
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
function vm(t, r) {
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
function Ls(t, r = 0, e = 10) {
  return [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ].map((n) => pe((n || r) / e * 10)).join(" ");
}
function jm(t) {
  var r, e, n, o, i, s;
  return pe(((e = (r = t.offset) == null ? void 0 : r.x) == null ? void 0 : e.value) || 0) + " " + pe(((o = (n = t.offset) == null ? void 0 : n.y) == null ? void 0 : o.value) || 0) + " " + pe((i = t.blur) != null ? i : 2) + " " + pr(t.color || "#000000", (s = t.alpha) != null ? s : 0.19);
}
function Cm(t, r) {
  var e, n, o, i, s, a;
  return "drop-shadow(" + pr(t.color || "#000000", (e = t.alpha) != null ? e : 0.19) + " " + pe((((o = (n = t.offset) == null ? void 0 : n.x) == null ? void 0 : o.value) || 0) * 10 / r) + " " + pe((((s = (i = t.offset) == null ? void 0 : i.y) == null ? void 0 : s.value) || 0) * 10 / r) + " " + pe(((a = t.blur) != null ? a : 2) * 10 / r) + ")";
}
let Cl;
function Li() {
  return typeof matchMedia > "u" ? !1 : (Cl || (Cl = window.matchMedia("(prefers-reduced-motion)")), Cl.matches);
}
const Em = 8, Am = (t, r, e, n) => {
  let o;
  return (e || n) && typeof ResizeObserver < "u" && (o = new ResizeObserver(async () => {
    let i = 0;
    const s = {}, a = (c, u) => {
      if (c) {
        const f = r.getVariable(c, "integer");
        if (f) {
          if (u = Math.round(u), s[c] || (s[c] = /* @__PURE__ */ new Set()), !s[c].has(u))
            return f.setValue(u), s[c].add(u), !0;
        } else {
          const _ = new Error("Missing variable");
          _.level = "error", _.additional = {
            variableName: c
          }, r.logError(_);
        }
      }
      return !1;
    }, l = () => {
      if (!t)
        return !1;
      const c = t.getBoundingClientRect(), u = a(e, c.width), f = a(n, c.height);
      return u || f;
    };
    for (; l(); ) {
      if (++i > Em) {
        const c = new Error("Recursive layout in size_provider");
        c.level = "warn", c.additional = {
          widthVariableName: e,
          heightVariableName: n
        }, r.logError(c);
        break;
      }
      await Sn();
    }
  }), o.observe(t)), o;
}, ba = Symbol("enabled");
function nn(t, r) {
  return t === 1 || t === 0 || t === !1 || t === !0 ? !!t : r;
}
function ei(t) {
  return [
    t.state_description,
    t.description,
    t.hint
  ].filter(Boolean).join(", ");
}
const wc = 1, ti = 2;
function kc(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "translation-fixed")
      return pe(t.value * r);
    if (t.type === "translation-percentage")
      return `${t.value * r}%`;
  }
}
function ms(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "pivot-fixed")
      return pe(t.value * r);
    if (t.type === "pivot-percentage")
      return `${t.value * r}%`;
  }
}
function Sm(t) {
  return t.map((r) => {
    if (r.type === "rotation") {
      if (typeof r.angle == "number") {
        const e = ms(r.pivot_x) || "50%", n = ms(r.pivot_y) || "50%", o = ms(r.pivot_x, -1) || "-50%", i = ms(r.pivot_y, -1) || "-50%";
        return `translate(${e}, ${n}) rotate(${r.angle}deg) translate(${o}, ${i})`;
      }
    } else if (r.type === "translation") {
      const e = kc(r.x) || 0, n = kc(r.y) || 0;
      return `translate(${e}, ${n})`;
    }
  }).filter(Boolean).join(" ");
}
const Vm = "appkit-actionable__button", vc = {
  actionable__button: Vm
};
function Fm() {
}
const To = Symbol("action");
function Xl(t) {
  if (t.startsWith("tel:"))
    return "tel";
  if (t.startsWith("/"))
    return "https";
  const r = /^([^/]+):\/\//.exec(t);
  return r && r[1] || "";
}
function Zl(t, r) {
  return r.has(t);
}
function Im(t) {
  let r = (
    /*containerElement*/
    t[7]
  ), e, n, o = (
    /*containerElement*/
    t[7] && El(t)
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
      i[7] ? r ? Sr(
        r,
        /*containerElement*/
        i[7]
      ) ? (o.d(1), o = El(i), r = /*containerElement*/
      i[7], o.c(), o.m(e.parentNode, e)) : o.p(i, s) : (o = El(i), r = /*containerElement*/
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
function Dm(t) {
  var f;
  let r, e, n, o, i, s;
  const a = (
    /*#slots*/
    t[31].default
  ), l = sl(
    a,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let c = [
    {
      class: e = /*cls*/
      t[2] + " " + vc.actionable__button + " " + Cr["root__any-actions"] + ` ${/*isNativeActionAnimation*/
      t[6] ? Cr.root__clickable : Cr["root__clickable-no-transition"]} ${Cr.root__unselectable} ` + /*longTapActions*/
      ((f = t[1]) != null && f.length ? Cr["root_disabled-context-menu"] : "")
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
      t[0].fakeElement === ti ? -1 : null
    },
    /*attrs*/
    t[4]
  ], u = {};
  for (let _ = 0; _ < c.length; _ += 1)
    u = jo(u, c[_]);
  return {
    c() {
      r = Te("button"), l && l.c(), Jo(r, u);
    },
    m(_, h) {
      q(_, r, h), l && l.m(r, null), r.autofocus && r.focus(), t[48](r), o = !0, i || (s = [
        ul(
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
      1073741824) && al(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? ll(
          a,
          /*$$scope*/
          _[30],
          h,
          null
        ) : cl(
          /*$$scope*/
          _[30]
        ),
        null
      ), Jo(r, u = No(c, [
        (!o || h[0] & /*cls, isNativeActionAnimation, longTapActions*/
        70 && e !== (e = /*cls*/
        _[2] + " " + vc.actionable__button + " " + Cr["root__any-actions"] + ` ${/*isNativeActionAnimation*/
        _[6] ? Cr.root__clickable : Cr["root__clickable-no-transition"]} ${Cr.root__unselectable} ` + /*longTapActions*/
        ((m = _[1]) != null && m.length ? Cr["root_disabled-context-menu"] : ""))) && { class: e },
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
        _[0].fakeElement === ti ? -1 : null)) && { tabindex: n },
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
function Tm(t) {
  var f;
  let r, e, n, o, i, s;
  const a = (
    /*#slots*/
    t[31].default
  ), l = sl(
    a,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let c = [
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
      t[2] + " " + Cr["root__any-actions"] + " " + /*isNativeActionAnimation*/
      (t[6] ? Cr.root__clickable : Cr["root__clickable-no-transition"]) + " " + /*longTapActions*/
      ((f = t[1]) != null && f.length ? Cr["root_disabled-context-menu"] : "")
    },
    {
      tabindex: n = /*componentContext*/
      t[0].fakeElement === ti ? -1 : null
    },
    /*attrs*/
    t[4]
  ], u = {};
  for (let _ = 0; _ < c.length; _ += 1)
    u = jo(u, c[_]);
  return {
    c() {
      r = Te("a"), l && l.c(), Jo(r, u);
    },
    m(_, h) {
      q(_, r, h), l && l.m(r, null), t[47](r), o = !0, i || (s = [
        ul(
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
      1073741824) && al(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? ll(
          a,
          /*$$scope*/
          _[30],
          h,
          null
        ) : cl(
          /*$$scope*/
          _[30]
        ),
        null
      ), Jo(r, u = No(c, [
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
        _[2] + " " + Cr["root__any-actions"] + " " + /*isNativeActionAnimation*/
        (_[6] ? Cr.root__clickable : Cr["root__clickable-no-transition"]) + " " + /*longTapActions*/
        ((m = _[1]) != null && m.length ? Cr["root_disabled-context-menu"] : ""))) && { class: e },
        (!o || h[0] & /*componentContext*/
        1 && n !== (n = /*componentContext*/
        _[0].fakeElement === ti ? -1 : null)) && { tabindex: n },
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
function El(t) {
  var f;
  let r, e, n, o, i, s;
  const a = (
    /*#slots*/
    t[31].default
  ), l = sl(
    a,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let c = [
    {
      class: e = /*cls*/
      t[2] + " " + /*longTapActions*/
      ((f = t[1]) != null && f.length ? Cr["root_disabled-context-menu"] : "") + " " + /*hasAnyActions*/
      (t[14] ? Cr["root__any-actions"] : "")
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
  ], u = {};
  for (let _ = 0; _ < c.length; _ += 1)
    u = jo(u, c[_]);
  return {
    c() {
      r = Te(
        /*containerElement*/
        t[7]
      ), l && l.c(), $o(
        /*containerElement*/
        t[7]
      )(r, u);
    },
    m(_, h) {
      q(_, r, h), l && l.m(r, null), t[49](r), o = !0, i || (s = [
        ul(
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
      1073741824) && al(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? ll(
          a,
          /*$$scope*/
          _[30],
          h,
          null
        ) : cl(
          /*$$scope*/
          _[30]
        ),
        null
      ), $o(
        /*containerElement*/
        _[7]
      )(r, u = No(c, [
        (!o || h[0] & /*cls, longTapActions, hasAnyActions*/
        16390 && e !== (e = /*cls*/
        _[2] + " " + /*longTapActions*/
        ((m = _[1]) != null && m.length ? Cr["root_disabled-context-menu"] : "") + " " + /*hasAnyActions*/
        (_[14] ? Cr["root__any-actions"] : ""))) && { class: e },
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
function Mm(t) {
  let r, e, n, o;
  const i = [Tm, Dm, Im], s = [];
  function a(l, c) {
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
    m(l, c) {
      s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? s[r].p(l, c) : (ir(), x(s[u], 1, 1, () => {
        s[u] = null;
      }), sr(), e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n));
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
const jc = 8, Cc = 400, Al = 400, Pm = /* @__PURE__ */ new Set(["button", "image", "checkbox", "radio", "header"]);
function Ec(t) {
  t.preventDefault();
}
function Nm(t, r, e) {
  let n, o, i = j, s = () => (i(), i = S(n, (K) => e(29, o = K)), n);
  t.$$.on_destroy.push(() => i());
  let { $$slots: a = {}, $$scope: l } = r, { componentContext: c } = r, { id: u = "" } = r, { actions: f = void 0 } = r, { doubleTapActions: _ = void 0 } = r, { longTapActions: h = void 0 } = r, { pressStartActions: m = void 0 } = r, { pressEndActions: p = void 0 } = r, { hoverStartActions: w = void 0 } = r, { hoverEndActions: k = void 0 } = r, { cls: z = "" } = r, { style: H = null } = r, { attrs: O = void 0 } = r, { use: oe = Fm } = r, { customAction: fe = null } = r, { isNativeActionAnimation: T = !0 } = r, { hasInnerFocusable: Z = !1 } = r, { customAccessibility: ce = void 0 } = r, { captureFocusOnAction: C = !0 } = r, { containerElement: D = "span" } = r;
  const M = Ir(Kr), W = Ir(To);
  fi(To, {
    hasAction() {
      return !!(W.hasAction() || f != null && f.length || (ce == null ? void 0 : ce.mode) === "exclude");
    }
  });
  let Q, me = "", Ae, Ce = -1, he = -1, Ve = null, re = !1, $e = !1, Ge = !1, Je, ke, De, ue, ae = !1;
  function de() {
    return (o == null ? void 0 : o.some((K) => {
      if (K != null && K.typed)
        return !0;
      const Mt = K == null ? void 0 : K.url;
      if (!Mt)
        return !1;
      const Vt = Xl(Mt);
      return Vt && !Zl(Vt, M.getBuiltinProtocols());
    })) || !1;
  }
  async function ee(K, Mt) {
    f && (K && de() && K.preventDefault(), c.execAnyActions(f, { node: Q, processUrls: Mt }));
  }
  async function ge(K) {
    if (W.hasAction() || K.button !== void 0 && K.button !== 0)
      return;
    const Mt = Date.now();
    if (Ce > 0 && Mt > Ce + Cc) {
      K.preventDefault();
      return;
    }
    if (_ != null && _.length && he > 0 && Mt - he < Al) {
      K.preventDefault(), c.execAnyActions(_, { processUrls: !0, node: Q }), he = -1;
      return;
    }
    if (he = Mt, _ != null && _.length && Ce > 0 && Mt < Ce + Al) {
      K.preventDefault(), clearTimeout(ke), ke = window.setTimeout(
        () => {
          ee(void 0, !0);
        },
        Al
      );
      return;
    }
    (fe == null ? void 0 : fe(K)) === !1 ? K.preventDefault() : ee(K, !1);
  }
  function ie(K) {
    W.hasAction() || (Ve = { x: K.clientX, y: K.clientY }, re = !1, Ce = Date.now(), Je && clearTimeout(Je), clearTimeout(ke), c.execAnyActions(m, { node: Q }));
  }
  function Se(K) {
    Ve && (Math.abs(Ve.x - K.clientX) > jc || Math.abs(Ve.y - K.clientY) > jc) && (re = !0);
  }
  function He(K) {
    W.hasAction() || !Ve || Ce < 0 || (!re && Date.now() - Ce >= Cc && (K.stopImmediatePropagation(), c.execAnyActions(h, { processUrls: !0, node: Q })), Je && clearTimeout(Je), Je = window.setTimeout(
      () => {
        Ve = null, Ce = -1;
      },
      100
    ), c.execAnyActions(p, { node: Q }));
  }
  function We() {
    W.hasAction() || c.execAnyActions(w, { node: Q });
  }
  function te() {
    W.hasAction() || c.execAnyActions(k, { node: Q });
  }
  function Oe(K) {
    const Mt = K.target;
    Mt instanceof HTMLElement && (Mt.tagName === "INPUT" || Mt.contentEditable === "true") || K.ctrlKey || K.metaKey || K.altKey || K.shiftKey || K.key === "Enter" && Array.isArray(f) && f.length && (c.execAnyActions(f), K.preventDefault());
  }
  xn(() => {
    u && !Z && M.registerFocusable(u, {
      focus() {
        Q && (me || $e) && Q.focus();
      }
    });
  }), sn(() => {
    typeof window < "u" && (window.removeEventListener("pointermove", Se), window.removeEventListener("pointerup", He), window.removeEventListener("pointercancel", He)), u && !Z && M.unregisterFocusable(u), Je && clearTimeout(Je), ke && clearTimeout(ke);
  });
  function Pe(K) {
    On.call(this, t, K);
  }
  function nt(K) {
    On.call(this, t, K);
  }
  function st(K) {
    On.call(this, t, K);
  }
  function et(K) {
    On.call(this, t, K);
  }
  function wt(K) {
    On.call(this, t, K);
  }
  function rt(K) {
    On.call(this, t, K);
  }
  function Pt(K) {
    On.call(this, t, K);
  }
  function ct(K) {
    On.call(this, t, K);
  }
  function X(K) {
    On.call(this, t, K);
  }
  function _e(K) {
    On.call(this, t, K);
  }
  function lt(K) {
    On.call(this, t, K);
  }
  function Fe(K) {
    On.call(this, t, K);
  }
  function I(K) {
    On.call(this, t, K);
  }
  function jt(K) {
    On.call(this, t, K);
  }
  function _t(K) {
    On.call(this, t, K);
  }
  function At(K) {
    Fr[K ? "unshift" : "push"](() => {
      Q = K, e(8, Q);
    });
  }
  function Dt(K) {
    Fr[K ? "unshift" : "push"](() => {
      Q = K, e(8, Q);
    });
  }
  function ot(K) {
    Fr[K ? "unshift" : "push"](() => {
      Q = K, e(8, Q);
    });
  }
  return t.$$set = (K) => {
    "componentContext" in K && e(0, c = K.componentContext), "id" in K && e(18, u = K.id), "actions" in K && e(19, f = K.actions), "doubleTapActions" in K && e(20, _ = K.doubleTapActions), "longTapActions" in K && e(1, h = K.longTapActions), "pressStartActions" in K && e(21, m = K.pressStartActions), "pressEndActions" in K && e(22, p = K.pressEndActions), "hoverStartActions" in K && e(23, w = K.hoverStartActions), "hoverEndActions" in K && e(24, k = K.hoverEndActions), "cls" in K && e(2, z = K.cls), "style" in K && e(3, H = K.style), "attrs" in K && e(4, O = K.attrs), "use" in K && e(5, oe = K.use), "customAction" in K && e(25, fe = K.customAction), "isNativeActionAnimation" in K && e(6, T = K.isNativeActionAnimation), "hasInnerFocusable" in K && e(26, Z = K.hasInnerFocusable), "customAccessibility" in K && e(27, ce = K.customAccessibility), "captureFocusOnAction" in K && e(28, C = K.captureFocusOnAction), "containerElement" in K && e(7, D = K.containerElement), "$$scope" in K && e(30, l = K.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*customAccessibility*/
    134217728 && e(12, ae = (ce == null ? void 0 : ce.mode) === "exclude"), t.$$.dirty[0] & /*componentContext, actions*/
    524289 && s(e(16, n = c.getDerivedFromVars(f, void 0, !0))), t.$$.dirty[0] & /*$processedActions, customAction, href, ariaHidden, componentContext*/
    570429953) {
      if (Array.isArray(o) && (o != null && o.length))
        for (let K = 0; K < o.length; ++K) {
          const Mt = o[K].url;
          if (Mt) {
            e(9, me = Mt), e(13, Ae = o[K].target || void 0);
            break;
          }
        }
      e(10, $e = !!fe), (me || Array.isArray(o) && (o != null && o.length)) && (W.hasAction() || ae) ? (e(9, me = ""), c.logError(Y(new Error("Actionable element is forbidden inside other actionable element or inside accessibility mode=exlucde"), {
        level: "warn",
        additional: { actions: o }
      }))) : me && !Zl(Xl(me), M.getBuiltinProtocols()) ? (e(9, me = ""), e(10, $e = !0)) : !me && Array.isArray(o) && (o != null && o.length) && (e(10, $e = !0), o.some((K) => K.url || K.typed || K.menu_items) || c.logError(Y(new Error("The component has a list of actions, but does not have a real action"), {
        level: "warn",
        additional: { actions: o }
      })));
    }
    t.$$.dirty[0] & /*customAccessibility, href, hasJSAction, role*/
    134221312 && (ce != null && ce.type && Pm.has(ce.type) ? ce.type === "header" ? e(11, De = "heading") : e(11, De = ce.type) : me ? e(11, De = void 0) : $e && e(11, De = "button"), (De === "checkbox" || De === "radio") && typeof (ce == null ? void 0 : ce.is_checked) == "boolean" ? e(15, ue = ce.is_checked) : e(15, ue = void 0)), t.$$.dirty[0] & /*node, href, hasJSAction, doubleTapActions, longTapActions, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions, captureFocusOnAction*/
    300943106 && Q && (me || $e || _ != null && _.length ? Q.addEventListener("click", ge) : Q.removeEventListener("click", ge), _ != null && _.length || h != null && h.length || m != null && m.length || p != null && p.length ? (Q.addEventListener("pointerdown", ie, { passive: !0 }), window.addEventListener("pointermove", Se, { passive: !0 }), window.addEventListener("pointerup", He, { passive: !0 }), window.addEventListener("pointercancel", He, { passive: !0 })) : (Q.removeEventListener("pointerdown", ie), window.removeEventListener("pointerup", He), window.removeEventListener("pointermove", Se), window.removeEventListener("pointercancel", He)), w != null && w.length ? Q.addEventListener("pointerenter", We) : Q.removeEventListener("pointerenter", We), k != null && k.length ? Q.addEventListener("pointerleave", te) : Q.removeEventListener("pointerleave", te), C === !1 ? Q.addEventListener("mousedown", Ec) : Q.removeEventListener("mousedown", Ec), e(14, Ge = !!(me || $e || _ != null && _.length || h != null && h.length || m != null && m.length || p != null && p.length || w != null && w.length || k != null && k.length)));
  }, [
    c,
    h,
    z,
    H,
    O,
    oe,
    T,
    D,
    Q,
    me,
    $e,
    De,
    ae,
    Ae,
    Ge,
    ue,
    n,
    Oe,
    u,
    f,
    _,
    m,
    p,
    w,
    k,
    fe,
    Z,
    ce,
    C,
    o,
    l,
    a,
    Pe,
    nt,
    st,
    et,
    wt,
    rt,
    Pt,
    ct,
    X,
    _e,
    lt,
    Fe,
    I,
    jt,
    _t,
    At,
    Dt,
    ot
  ];
}
class hl extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      Nm,
      Mm,
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
const di = {
  "outer-background": "appkit-outer-background",
  "outer-background_clip": "appkit-outer-background_clip",
  "outer-background__item": "appkit-outer-background__item",
  "outer-background__item_hidden": "appkit-outer-background__item_hidden"
};
function zn(t) {
  return gl(t) && t > 0;
}
function Wd(t, r) {
  return t.map((e) => {
    if (!e) {
      r(Y(new Error("Incorrect filter"), {
        level: "warn"
      }));
      return;
    }
    if (e.type === "blur") {
      if (zn(e.radius))
        return `blur(${ln(e.radius / 2)})`;
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
function Ac(t, r, e) {
  const n = t.slice();
  return n[6] = r[e], n;
}
function zm(t) {
  let r, e;
  return {
    c() {
      r = Te("span"), g(r, "class", di["outer-background__item"]), g(r, "style", e = dr(
        /*item*/
        t[6].style
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o & /*styles*/
      2 && e !== (e = dr(
        /*item*/
        n[6].style
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Lm(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Te("img"), Qn(r.src, e = /*item*/
      t[6].image_url) || g(r, "src", e), g(r, "alt", ""), g(r, "aria-hidden", "true"), g(r, "loading", "lazy"), g(r, "decoding", "async"), g(r, "class", di["outer-background__item"]), g(r, "style", n = dr(
        /*item*/
        t[6].style
      ));
    },
    m(s, a) {
      q(s, r, a), o || (i = Qe(
        r,
        "error",
        /*onImgError*/
        t[2]
      ), o = !0);
    },
    p(s, a) {
      a & /*styles*/
      2 && !Qn(r.src, e = /*item*/
      s[6].image_url) && g(r, "src", e), a & /*styles*/
      2 && n !== (n = dr(
        /*item*/
        s[6].style
      )) && g(r, "style", n);
    },
    d(s) {
      s && G(r), o = !1, i();
    }
  };
}
function Sc(t) {
  let r;
  function e(i, s) {
    return (
      /*item*/
      i[6].image_url ? Lm : zm
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
      i && G(r), o.d(i);
    }
  };
}
function Om(t) {
  let r, e, n = rr(
    /*styles*/
    t[1]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Sc(Ac(t, n, i));
  return {
    c() {
      r = Te("span");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", e = di["outer-background"] + /*radius*/
      (t[0] ? " " + di["outer-background_clip"] : "")), F(
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
        n = rr(
          /*styles*/
          i[1]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Ac(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Sc(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s & /*radius*/
      1 && e !== (e = di["outer-background"] + /*radius*/
      (i[0] ? " " + di["outer-background_clip"] : "")) && g(r, "class", e), s & /*radius*/
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
function Bm(t, r, e) {
  let n, { direction: o } = r, { componentContext: i } = r, { background: s = [] } = r, { radius: a = "" } = r;
  function l(c) {
    c.target && "classList" in c.target && c.target.classList.add(di["outer-background__item_hidden"]);
  }
  return t.$$set = (c) => {
    "direction" in c && e(3, o = c.direction), "componentContext" in c && e(4, i = c.componentContext), "background" in c && e(5, s = c.background), "radius" in c && e(0, a = c.radius);
  }, t.$$.update = () => {
    t.$$.dirty & /*background, direction, componentContext*/
    56 && e(1, n = s.map((c) => {
      const u = {}, f = { style: u };
      if (c.type === "nine_patch_image" && c.insets)
        u["border-image"] = `url("${c.image_url}") ${c.insets.top || 0} ${c.insets.right || 0} ${c.insets.bottom || 0} ${c.insets.left || 0} fill`, u["border-image-width"] = "auto";
      else {
        const _ = pl([c], o);
        c.type === "solid" && (u["background-color"] = _.color), c.type === "gradient" && (u["background-image"] = _.image), c.type === "image" && (u.opacity = Number(c.alpha), f.image_url = c.image_url, u["object-fit"] = _.size, u["object-position"] = _.position, Array.isArray(c.filters) && c.filters.length && (u.filter = Wd(c.filters, i.logError), o === "rtl" && c.filters.some((h) => h.type === "rtl_mirror") && (u.transform = "scale(-1,1)")));
      }
      return f;
    }));
  }, [a, n, l, o, i, s];
}
class Rm extends Or {
  constructor(r) {
    super(), Lr(this, r, Bm, Om, Sr, {
      direction: 3,
      componentContext: 4,
      background: 5,
      radius: 0
    });
  }
}
const Hm = (t) => ({
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
}), Vc = (t) => ({
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
function Fc(t) {
  let r, e;
  return r = new hl({
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
          Ks,
          /*mods*/
          t[31]
        ) + /*customClass*/
        (t[30] ? ` ${/*customClass*/
        t[30]}` : "") + /*hoverClassName*/
        (t[18] ? ` ${/*hoverClassName*/
        t[18]}` : "")
      ),
      style: dr(
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
      t[16].length || Tc(
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
      $$slots: { default: [Wm] },
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
    t[147]
  ), r.$on(
    "wheel",
    /*wheel_handler*/
    t[148]
  ), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
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
        Ks,
        /*mods*/
        n[31]
      ) + /*customClass*/
      (n[30] ? ` ${/*customClass*/
      n[30]}` : "") + /*hoverClassName*/
      (n[18] ? ` ${/*hoverClassName*/
      n[18]}` : "")), o[0] & /*stl*/
      536870912 && (i.style = dr(
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
      n[16].length || Tc(
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
      33554432 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function Ic(t) {
  let r, e;
  return r = new Rm({
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Dc(t) {
  let r, e;
  return {
    c() {
      r = Te("span"), g(r, "class", Ks.outer__border), g(r, "style", e = dr(
        /*borderElemStyle*/
        t[4]
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o[0] & /*borderElemStyle*/
      16 && e !== (e = dr(
        /*borderElemStyle*/
        n[4]
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Wm(t) {
  let r, e, n, o = (
    /*hasSeparateBg*/
    t[11] && Ic(t)
  );
  const i = (
    /*#slots*/
    t[146].default
  ), s = sl(
    i,
    t,
    /*$$scope*/
    t[149],
    Vc
  );
  let a = (
    /*hasBorder*/
    t[22] && Dc(t)
  );
  return {
    c() {
      o && o.c(), r = Kt(), s && s.c(), a && a.c(), e = Kt();
    },
    m(l, c) {
      o && o.m(l, c), q(l, r, c), s && s.m(l, c), a && a.m(l, c), q(l, e, c), n = !0;
    },
    p(l, c) {
      /*hasSeparateBg*/
      l[11] ? o ? (o.p(l, c), c[0] & /*hasSeparateBg*/
      2048 && L(o, 1)) : (o = Ic(l), o.c(), L(o, 1), o.m(r.parentNode, r)) : o && (ir(), x(o, 1, 1, () => {
        o = null;
      }), sr()), s && s.p && (!n || c[0] & /*hasCustomFocus, widthMin, widthMax, heightMin, heightMax*/
      132032 | c[4] & /*$$scope*/
      33554432) && al(
        s,
        i,
        l,
        /*$$scope*/
        l[149],
        n ? ll(
          i,
          /*$$scope*/
          l[149],
          c,
          Hm
        ) : cl(
          /*$$scope*/
          l[149]
        ),
        Vc
      ), /*hasBorder*/
      l[22] ? a ? a.p(l, c) : (a = Dc(l), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null);
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
function Um(t) {
  let r, e, n = !/*hasWidthError*/
  t[23] && !/*hasHeightError*/
  t[24] && Fc(t);
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
      25165824 && L(n, 1)) : (n = Fc(o), n.c(), L(n, 1), n.m(r.parentNode, r)) : n && (ir(), x(n, 1, 1, () => {
        n = null;
      }), sr());
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
const Gm = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
}, Jm = {
  left: "end",
  center: "center",
  right: "start",
  start: "start",
  end: "end"
}, qm = {
  top: "start",
  center: "center",
  bottom: "end",
  baseline: "baseline"
}, Sl = (t) => `The component id with the "${t}" property for state change is missing. Either specify the id, or specify the "transition_trigger" property without "state_change" value.`;
function Tc(t) {
  return t.some((r) => r.name === "native");
}
function Km(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, z, H, O, oe, fe, T, Z, ce, C, D, M, W, Q, me, Ae, Ce, he, Ve, re, $e, Ge, Je, ke, De, ue, ae, de, ee, ge, ie = j, Se = () => (ie(), ie = S(k, (it) => e(130, ge = it)), k), He, We = j, te = () => (We(), We = S(z, (it) => e(131, He = it)), z), Oe, Pe = j, nt = () => (Pe(), Pe = S(w, (it) => e(132, Oe = it)), w), st, et = j, wt = () => (et(), et = S(H, (it) => e(133, st = it)), H), rt, Pt = j, ct = () => (Pt(), Pt = S(p, (it) => e(134, rt = it)), p), X, _e = j, lt = () => (_e(), _e = S(m, (it) => e(135, X = it)), m), Fe, I = j, jt = () => (I(), I = S(o, (it) => e(136, Fe = it)), o), _t, At = j, Dt = () => (At(), At = S(h, (it) => e(20, _t = it)), h), ot, K = j, Mt = () => (K(), K = S(_, (it) => e(137, ot = it)), _), Vt, Jt = j, qt = () => (Jt(), Jt = S(f, (it) => e(138, Vt = it)), f), be, Ke = j, pt = () => (Ke(), Ke = S(u, (it) => e(139, be = it)), u), we, xe = j, Be = () => (xe(), xe = S(a, (it) => e(140, we = it)), a), nr, Ne = j, bt = () => (Ne(), Ne = S(c, (it) => e(141, nr = it)), c), Ft, It = j, hr = () => (It(), It = S(l, (it) => e(142, Ft = it)), l), ze, kt = j, lr = () => (kt(), kt = S(s, (it) => e(143, ze = it)), s), er, Xt = j, mr = () => (Xt(), Xt = S(i, (it) => e(144, er = it)), i), vr;
  t.$$.on_destroy.push(() => ie()), t.$$.on_destroy.push(() => We()), t.$$.on_destroy.push(() => Pe()), t.$$.on_destroy.push(() => et()), t.$$.on_destroy.push(() => Pt()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => At()), t.$$.on_destroy.push(() => K()), t.$$.on_destroy.push(() => Jt()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Ne()), t.$$.on_destroy.push(() => It()), t.$$.on_destroy.push(() => kt()), t.$$.on_destroy.push(() => Xt());
  let { $$slots: xt = {}, $$scope: $t } = r, { componentContext: J } = r, { cls: ft = "" } = r, { style: Gt = void 0 } = r, { layoutParams: Et = {} } = r, { customDescription: br = !1 } = r, { customPaddings: Er = !1 } = r, { customActions: wr = "" } = r, { additionalPaddings: Dr = null } = r, { heightByAspect: zr = !1 } = r, { parentOf: tr = void 0 } = r, { parentOfSimpleMode: at = void 0 } = r, { replaceItems: vt = void 0 } = r, { hasInnerFocusable: Zt = !1 } = r, { alwaysCustomFocus: Yt = !1 } = r, { containerElement: _r = "span" } = r, { devapi: ut = void 0 } = r;
  const se = Ir(Kr), mt = Ir(ma), { isEnabled: or } = Ir(ba);
  yn(t, or, (it) => e(145, vr = it));
  const yr = se.direction;
  yn(t, yr, (it) => e(19, ee = it));
  let ar, v, le = null, d = [], B = {}, Me = {}, qe = !1, ve = 1, R = "transparent", Tt = 0, Ot = {
    "top-left": 0,
    "top-right": 0,
    "bottom-right": 0,
    "bottom-left": 0
  }, Xe = "", dt = null, Wt = "", Vr = {}, kr, Tr, Cn, Ee = 0, Yr = 0, Xr = 0, mn = !1, Vn = !1, y = {}, E, A, ne, N = 0, Ze = 0, Ie = 0, Qt = !1, St = !1, Ue = 1, Ut, Ct, cr, Br, pn = [], Wr = !1, wn = !1, tn, Fn, Rn, $n = [], Ht = [], b = [], V = [], $ = [], P = [], je = [], ye = [], Bt = [], Rt = [], qr = "", Mr, Rr, Co, no, Kn = !1, In = "visible", Ko, Ye, jr = !1, an = !0, Ci, Pn, gn, Lo = null, oo;
  function Ei() {
    e(72, dt = null), e(73, Wt = ""), e(86, Ue = 1), e(98, Kn = !1), e(99, In = "visible"), e(100, Ko = void 0), e(28, an = !0), pn = J.fakeElement ? [] : J.json.transition_triggers || ["state_change", "visibility_change"], e(89, Wr = pn.indexOf("state_change") !== -1), wn = pn.indexOf("visibility_change") !== -1, ar && Sa(ar), Pn == null || Pn(), vr && e(102, Pn = se.processVariableTriggers(J, J.json.variable_triggers));
  }
  function f_(it, Zr) {
    if (!Array.isArray(tr) || !vt || at && (Array.isArray(Zr) ? Zr.length : 0) !== 1)
      return;
    const En = tr.findIndex((cn) => (cn == null ? void 0 : cn.id) === it), Hn = tr.slice();
    Hn.splice(En, 1, ...(Zr || []).map((cn) => ({ json: cn, id: cn == null ? void 0 : cn.id }))), e(53, tr = Hn), vt(Hn.map((cn) => cn == null ? void 0 : cn.json));
  }
  function d_(it) {
    const Zr = so(it.start_value, 1), En = so(it.end_value, 1), Hn = en(it.start_delay, 0), cn = Li() ? 0 : en(it.duration, 300), bo = Hd(it.interpolator, "ease_in_out").replace(/_/g, "-");
    switch (it.name) {
      case "fade":
        return e(94, Mr = Zr), e(95, Rr = En), `opacity ${cn}ms ${bo} ${Hn}ms`;
      case "scale":
        return e(96, Co = Zr), e(97, no = En), `transform ${cn}ms ${bo} ${Hn}ms`;
      case "native":
      case "no_animation":
        return "";
      default:
        return J.logError(Y(new Error("Unknown action_animation name"), {
          additional: { animation: it.name }
        })), "";
    }
  }
  async function __(it) {
    e(99, In = it);
    const Zr = it === "visible" ? "in" : "out", En = Zr === "in" ? J.json.transition_in : J.json.transition_out;
    if (wn && En) {
      let Hn;
      it === "gone" && (Hn = ar.getBoundingClientRect()), await Sn(), Zr === "in" && e(91, Fn = !0), mt.runVisibilityTransition(
        {
          ...J.json,
          visibility: "visible"
        },
        J,
        En,
        ar,
        Zr,
        Hn
      ).then(() => {
        Zr === "in" && e(91, Fn = !1);
      }).catch((cn) => {
        throw Zr === "in" && e(91, Fn = !1), cn;
      });
    }
  }
  function Aa() {
    if (le && ar) {
      const it = se.getExtensionContext(J);
      le.forEach((Zr) => {
        var En;
        (En = Zr.unmountView) == null || En.call(Zr, ar, it);
      }), le = null;
    }
  }
  function p_() {
    if (le != null && le.length) {
      const it = se.getExtensionContext(J);
      le.forEach((Zr) => {
        var En;
        (En = Zr.updateView) == null || En.call(Zr, ar, it);
      });
    }
    Lo && Lo.update(J);
  }
  let Eo = null, Oo = null, li = "desktop";
  function qi() {
    Eo != null && Eo.matches ? e(105, li = "mobile") : Oo != null && Oo.matches ? e(105, li = "tablet") : e(105, li = "desktop");
  }
  let ao = null, Ki = "";
  function Sa(it) {
    var Yi, Xi, Zi;
    gn == null || gn.destroy(), e(65, ar = it), Wr && J.json.transition_in && (J.id ? mt.registerChildWithTransitionIn(J.json, J, J.json.transition_in, it).then(() => {
      e(90, tn = !1);
    }).catch((Yo) => {
      throw e(90, tn = !1), Yo;
    }) : J.logError(Y(new Error(Sl("transition_in")), { level: "warn" }))), Wr && J.json.transition_out && (J.id ? mt.registerChildWithTransitionOut(J.json, J, J.json.transition_out, it) : J.logError(Y(new Error(Sl("transition_out")), { level: "warn" }))), J.fakeElement || (J.json.transition_change && !J.id && J.logError(Y(new Error(Sl("transition_change")), { level: "warn" })), mt.registerChildWithTransitionChange(J.json, J, J.json.transition_change, it).then(() => {
      e(92, Rn = !1);
    }).catch((Yo) => {
      throw e(92, Rn = !1), Yo;
    }));
    const Zr = !J.fakeElement || J.fakeElement === ti, En = Zr ? J.json.visibility_actions || J.json.visibility_action && [J.json.visibility_action] : [], Hn = Zr ? J.json.disappear_actions : [];
    let cn;
    (Array.isArray(En) && En.length || Array.isArray(Hn) && Hn.length) && (cn = hm(it, {
      visibilityActions: En,
      disappearActions: Hn,
      rootCtx: se,
      componentContext: J
    }));
    const bo = J.id;
    return bo && (oo == null || oo(), oo = se.registerId(bo, {
      context: () => J,
      node: () => ar
    }), mt.registerChild(bo)), (Yi = J.json.tooltips) == null || Yi.forEach((Yo) => {
      se.registerTooltip(it, Yo);
    }), Ye && (Ye.disconnect(), Ye = void 0), Ye = Am(ar, J, (Xi = J.json.layout_provider) == null ? void 0 : Xi.width_variable_name, (Zi = J.json.layout_provider) == null ? void 0 : Zi.height_variable_name), J.fakeElement || (Lo = Rd(it, se, J, ut)), gn = {
      destroy() {
        oo && (oo(), oo = void 0), bo && mt.unregisterChild(bo), cn && cn.destroy(), Lo && Lo.destroy();
      }
    }, gn;
  }
  function g_() {
    J.json.focus && ((Yt || !Jl(se.isPointerFocus)) && e(17, jr = !0), J.execAnyActions(V));
  }
  function h_() {
    J.json.focus && (e(17, jr = !1), J.execAnyActions($));
  }
  fl(p_), sn(() => {
    var it;
    d.forEach((Zr) => {
      se.unregisterParentOf(Zr);
    }), e(66, d = []), Ye && (Ye.disconnect(), Ye = void 0), (it = J.json.tooltips) == null || it.forEach((Zr) => {
      se.unregisterTooltip(Zr);
    }), Pn == null || Pn(), Aa(), ao && (ao.remove(), e(106, ao = null)), Eo && (Eo.removeEventListener("change", qi), e(103, Eo = null)), Oo && (Oo.removeEventListener("change", qi), e(104, Oo = null));
  });
  function m_(it) {
    On.call(this, t, it);
  }
  function b_(it) {
    On.call(this, t, it);
  }
  return t.$$set = (it) => {
    "componentContext" in it && e(0, J = it.componentContext), "cls" in it && e(1, ft = it.cls), "style" in it && e(54, Gt = it.style), "layoutParams" in it && e(55, Et = it.layoutParams), "customDescription" in it && e(56, br = it.customDescription), "customPaddings" in it && e(57, Er = it.customPaddings), "customActions" in it && e(58, wr = it.customActions), "additionalPaddings" in it && e(59, Dr = it.additionalPaddings), "heightByAspect" in it && e(60, zr = it.heightByAspect), "parentOf" in it && e(53, tr = it.parentOf), "parentOfSimpleMode" in it && e(61, at = it.parentOfSimpleMode), "replaceItems" in it && e(62, vt = it.replaceItems), "hasInnerFocusable" in it && e(2, Zt = it.hasInnerFocusable), "alwaysCustomFocus" in it && e(63, Yt = it.alwaysCustomFocus), "containerElement" in it && e(3, _r = it.containerElement), "devapi" in it && e(64, ut = it.devapi), "$$scope" in it && e(149, $t = it.$$scope);
  }, t.$$.update = () => {
    var it, Zr, En, Hn, cn, bo, Yi, Xi, Zi, Yo, Va;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(129, n = J.origJson), t.$$.dirty[4] & /*origJson*/
    32 && n && Ei(), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[3] & /*prevTriggersUnsubscribe*/
    512 | t.$$.dirty[4] & /*$isEnabled*/
    2097152 && (vr ? (Pn == null || Pn(), e(102, Pn = se.processVariableTriggers(J, J.json.variable_triggers))) : Pn == null || Pn()), t.$$.dirty[0] & /*componentContext*/
    1 && jt(e(47, o = J.getDerivedFromVars(J.json.focus))), t.$$.dirty[0] & /*componentContext*/
    1 && mr(e(46, i = J.getDerivedFromVars(J.json.border))), t.$$.dirty[0] & /*componentContext*/
    1 && lr(e(45, s = J.getDerivedFromVars(J.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Be(e(44, a = J.getDerivedFromVars(J.json.margins))), t.$$.dirty[0] & /*componentContext*/
    1 && hr(e(43, l = J.getDerivedFromVars(J.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && bt(e(42, c = J.getDerivedFromVars(J.json.alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && pt(e(41, u = J.getDerivedFromVars(J.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && qt(e(40, f = J.getDerivedFromVars(J.json.alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Mt(e(39, _ = J.getDerivedFromVars(J.json.alpha))), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(38, h = J.getDerivedFromVars(J.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && lt(e(37, m = J.getDerivedFromVars(J.json.background))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(36, p = J.getDerivedFromVars(J.json.action_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && nt(e(35, w = J.getDerivedFromVars(J.json.visibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Se(e(34, k = J.getDerivedFromVars(J.json.transform))), t.$$.dirty[0] & /*componentContext*/
    1 && te(e(33, z = J.getDerivedFromVars(J.json.transformations))), t.$$.dirty[0] & /*componentContext*/
    1 && wt(e(32, H = J.getDerivedFromVars(J.json.capture_focus_on_action))), t.$$.dirty[1] & /*parentOf, parentOfSimpleMode*/
    1077936128 | t.$$.dirty[2] & /*prevChilds*/
    16 && (d.forEach((tt) => {
      se.unregisterParentOf(tt);
    }), e(66, d = []), tr && tr.forEach((tt) => {
      tt != null && tt.id && (d.push(tt.id), se.registerParentOf(tt.id, {
        replaceWith: f_,
        isSingleMode: !!at
      }));
    })), t.$$.dirty[0] & /*hasCustomFocus, borderElemStyle*/
    131088 | t.$$.dirty[2] & /*strokeWidth, strokeColor, cornersRadius, cornerRadius, borderStyle*/
    992 | t.$$.dirty[4] & /*$jsonFocus, $jsonBorder*/
    1052672) {
      const tt = jr && (Fe != null && Fe.border) ? Fe.border : er;
      let xr = {}, kn = {}, Dn = !1, rn = "";
      if (tt) {
        if (nn(tt.has_shadow, !1)) {
          const un = tt.shadow;
          un ? xr["box-shadow"] = jm(un) : xr["box-shadow"] = "0 1px 2px 0 rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.07)";
        }
        if (tt.stroke) {
          Dn = !0, e(68, ve = en(tt.stroke.width, ve)), e(69, R = pr(tt.stroke.color, 1, R));
          const un = ((it = tt.stroke.style) == null ? void 0 : it.type) === "dashed" ? "dashed" : "solid";
          kn["--divkit-border"] = `${pe(ve + 1)} ${un} ${R}`;
        }
        if (tt.corners_radius && typeof tt.corners_radius == "object") {
          e(71, Ot = vm(tt.corners_radius, Ot)), xr["border-radius"] = Ls(Ot);
          const un = {};
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((Yn) => {
            un[Yn] = (Ot[Yn] || 0) + 1;
          }), kn["--divkit-border-radius"] = Ls(un);
        } else tt.corner_radius && (e(70, Tt = en(tt.corner_radius, Tt)), e(71, Ot = {
          "top-left": Tt,
          "top-right": Tt,
          "bottom-right": Tt,
          "bottom-left": Tt
        }), xr["border-radius"] = pe(Tt), kn["--divkit-border-radius"] = pe(Tt + 1));
        if (Dn && ve && (tt.corners_radius || tt.corner_radius)) {
          let un = { ...Ot };
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((Yn) => {
            un[Yn] = (un[Yn] || 0) + ve / 2;
          }), rn = Ls(un);
        }
      }
      e(67, B = Qo(xr, B)), e(4, Me = Qo(kn, Me)), e(22, qe = Dn), e(5, Xe = rn);
    }
    if (t.$$.dirty[1] & /*customPaddings*/
    67108864 | t.$$.dirty[2] & /*selfPadding*/
    1024 | t.$$.dirty[4] & /*$jsonPaddings*/
    524288 && e(72, dt = hi(
      ze && !Er ? ze : void 0,
      dt
    )), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[1] & /*additionalPaddings*/
    268435456 | t.$$.dirty[2] & /*selfPadding*/
    1024 && e(119, O = ho(km(dt, Dr), ee)), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[2] & /*margin*/
    2048 | t.$$.dirty[4] & /*$jsonMargins*/
    65536 && e(73, Wt = ss(we, ee, Wt)), t.$$.dirty[0] & /*componentContext, $direction*/
    524289 | t.$$.dirty[1] & /*layoutParams*/
    16777216 | t.$$.dirty[2] & /*widthNum, widthMods*/
    20480 | t.$$.dirty[4] & /*$jsonWidth, $jsonMargins, $jsonAlignmentHorizontal*/
    458752) {
      let tt, xr, kn, Dn, rn = {}, un = 0, Yn = 0, Bo = !1, Ro = !1;
      const bn = (Zr = J.json.width) == null ? void 0 : Zr.type;
      if (bn === "fixed")
        e(76, Ee = en(Ft == null ? void 0 : Ft.value, Ee)), xr = pe(Ee);
      else if (bn === "wrap_content" || (bn === "match_parent" || !bn) && Et.parentHorizontalWrapContent)
        tt = "content", (bn === "wrap_content" && (Ft != null && Ft.constrained) || (bn === "match_parent" || !bn) && Et.parentHorizontalWrapContent) && (rn["width-constrained"] = !0, Et.parentContainerOrientation === "horizontal" && (Yn = 1)), (bn === "match_parent" || !bn) && J.logError(Y(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      else if (tt = "parent", Et.parentContainerOrientation === "vertical" && Et.parentContainerWrap && (Ro = !0, J.logError(Y(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), Et.parentContainerOrientation === "vertical" && Et.parentContainerKnownWidth || Et.stretchWidth || Et.parentContainerOrientation === "horizontal" && Et.treatMatchParentAs100) {
        const Qr = (Hn = (En = ee === "ltr" ? we == null ? void 0 : we.start : we == null ? void 0 : we.end) != null ? En : we == null ? void 0 : we.left) != null ? Hn : 0, Tn = (bo = (cn = ee === "ltr" ? we == null ? void 0 : we.end : we == null ? void 0 : we.start) != null ? cn : we == null ? void 0 : we.right) != null ? bo : 0, jn = `calc(100% - ${ln(Qr + Tn)})`;
        Et.stretchWidth ? (xr = "0", kn = jn) : xr = jn;
      } else Et.parentContainerOrientation === "horizontal" && (un = Ft && "weight" in Ft && Ft.weight || 1, Et.parentContainerWrap && (Bo = !0));
      if (bn === "wrap_content" || bn === "match_parent") {
        const Qr = Ft;
        let Tn, jn;
        Qr.min_size && Nn(Qr.min_size.value) && (Tn = Qr.min_size.value), Qr.max_size && Nn(Qr.max_size.value) && (jn = Qr.max_size.value), Tn !== void 0 && jn !== void 0 && Tn > jn && (J.logError(Y(new Error("Element has incorrect width constraints (min size is bigger than max size)."), {
          additional: {
            id: J.json.id,
            minSize: Tn + "dp",
            maxSize: jn + "dp"
          }
        })), Tn = jn = void 0), Tn !== void 0 && (kn = pe(Tn)), jn !== void 0 && (Dn = pe(jn));
      }
      if (tt === "parent")
        rn["halign-self"] = "stretch";
      else {
        const Qr = nr;
        Qr === "left" || Qr === "center" || Qr === "right" || Qr === "start" || Qr === "end" ? rn["halign-self"] = (ee === "ltr" ? Gm : Jm)[Qr] : rn["halign-self"] = Et.parentHAlign || "start";
      }
      tt && (rn.width = tt), e(75, kr = xr), e(6, Tr = kn), e(7, Cn = Dn), e(77, Yr = un), e(78, Xr = Yn), e(74, Vr = Qo(rn, Vr)), e(79, mn = Bo), e(23, Vn = Ro);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*heightByAspect, layoutParams*/
    553648128 | t.$$.dirty[2] & /*heightNum, heightMods*/
    1310720 | t.$$.dirty[4] & /*$jsonHeight, $jsonMargins, $jsonAlignmentVertical*/
    114688) {
      let tt, xr, kn, Dn, rn = {}, un = 0, Yn = 0, Bo = !1, Ro = !1;
      const bn = (Yi = J.json.height) == null ? void 0 : Yi.type;
      if (!zr) if (bn === "fixed")
        e(82, N = en(be == null ? void 0 : be.value, N)), xr = pe(N);
      else if (bn === "match_parent" && !Et.parentVerticalWrapContent)
        if (tt = "parent", Et.parentContainerOrientation === "horizontal" && Et.parentContainerWrap && (Ro = !0, J.logError(Y(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), Et.parentContainerOrientation === "horizontal" && Et.parentContainerKnownHeight || Et.stretchHeight || Et.parentContainerOrientation === "vertical" && Et.treatMatchParentAs100) {
          const Qr = (Xi = we == null ? void 0 : we.top) != null ? Xi : 0, Tn = (Zi = we == null ? void 0 : we.bottom) != null ? Zi : 0, jn = `calc(100% - ${ln(Qr + Tn)})`;
          Et.stretchHeight ? (xr = "0", kn = jn) : xr = jn;
        } else Et.parentContainerOrientation === "vertical" && (un = (be == null ? void 0 : be.weight) || 1, Et.parentContainerWrap && (Bo = !0));
      else
        tt = "content", (bn === "wrap_content" && (be != null && be.constrained) || bn === "match_parent" && Et.parentVerticalWrapContent) && (rn["height-constrained"] = !0, Et.parentContainerOrientation === "vertical" && (Yn = 1)), bn === "match_parent" && J.logError(Y(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      if (!zr && (bn === "match_parent" || bn === "wrap_content")) {
        const Qr = be;
        let Tn, jn;
        Qr.min_size && Nn(Qr.min_size.value) && (Tn = Qr.min_size.value), Qr.max_size && Nn(Qr.max_size.value) && (jn = Qr.max_size.value), Tn !== void 0 && jn !== void 0 && Tn > jn && (J.logError(Y(new Error("Element has incorrect height constraints (min size is bigger than max size)."), {
          additional: {
            id: J.json.id,
            minSize: Tn + "dp",
            maxSize: jn + "dp"
          }
        })), Tn = jn = void 0), Tn !== void 0 && (kn = pe(Tn)), jn !== void 0 && (Dn = pe(jn));
      }
      if (tt === "parent")
        rn["valign-self"] = "stretch";
      else {
        const Qr = Vt;
        Qr === "top" || Qr === "center" || Qr === "bottom" || Qr === "baseline" && Et.parentContainerOrientation === "horizontal" ? rn["valign-self"] = qm[Qr] : rn["valign-self"] = Et.parentVAlign || "start";
      }
      tt && (rn.height = tt), e(81, E = xr), e(8, A = kn), e(9, ne = Dn), e(83, Ze = un), e(84, Ie = Yn), e(80, y = Qo(rn, y)), e(85, Qt = Bo), e(24, St = Ro);
    }
    if (t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(128, oe = Et.overlapParent ? !0 : void 0), t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(121, fe = Et.gridArea ? `${Et.gridArea.y + 1}/${Et.gridArea.x + 1}/span ${Et.gridArea.rowSpan}/span ${Et.gridArea.colSpan}` : void 0), t.$$.dirty[2] & /*alpha*/
    16777216 | t.$$.dirty[4] & /*$jsonAlpha*/
    8192 && (e(86, Ue = bm(ot, Ue)), e(87, Ut = Ue === 1 ? void 0 : Ue)), t.$$.dirty[0] & /*$jsonAccessibility*/
    1048576 | t.$$.dirty[1] & /*customDescription*/
    33554432 && (e(21, v = void 0), _t && !br)) {
      const tt = ei(_t);
      tt && (e(21, v = {}), e(21, v["aria-label"] = tt, v));
    }
    if (t.$$.dirty[0] & /*hasCustomFocus, background, backgroundRadius, hasSeparateBg, $direction*/
    658464 | t.$$.dirty[4] & /*$jsonFocus, $jsonBackground*/
    6144 && (e(10, Ct = jr && (Fe != null && Fe.background) ? Fe.background : X), e(88, cr = {}), e(11, Br = !1), Array.isArray(Ct) && (e(11, Br = Ct.some((tt) => tt.type === "image" || tt.type === "nine_patch_image") || !!Xe), !Br))) {
      const tt = pl(Ct, ee);
      e(88, cr["background-color"] = tt.color, cr), e(88, cr["background-image"] = tt.image, cr), e(88, cr["background-size"] = tt.size, cr), e(88, cr["background-position"] = tt.position, cr), e(88, cr["background-repeat"] = "no-repeat", cr);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(90, tn = void 0), Wr && J.id && J.json.transition_in && se.isRunning("stateChange") && e(90, tn = !0)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(92, Rn = void 0), Wr && J.id && se.isRunning("stateChange") && mt.hasTransitionChange(J.id) && e(92, Rn = !0)), t.$$.dirty[0] & /*componentContext, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions*/
    61441 | t.$$.dirty[1] & /*customActions*/
    134217728) {
      const tt = J.json;
      let xr = tt.actions || tt.action && [tt.action] || [], kn = tt.doubletap_actions || [], Dn = tt.longtap_actions || [], rn = ((Yo = tt.focus) == null ? void 0 : Yo.on_focus) || [], un = ((Va = tt.focus) == null ? void 0 : Va.on_blur) || [], Yn = tt.press_start_actions || [], Bo = tt.press_end_actions || [], Ro = tt.hover_start_actions || [], bn = tt.hover_end_actions || [];
      J.fakeElement && J.fakeElement !== ti ? (xr = [], kn = [], Dn = [], rn = [], un = []) : (Array.isArray(xr) || (xr = [], J.logError(Y(new Error("Actions should be array")))), Array.isArray(kn) || (kn = [], J.logError(Y(new Error("DoubleTapActions should be array")))), Array.isArray(Dn) || (Dn = [], J.logError(Y(new Error("LongTapActions should be array")))), Array.isArray(rn) || (rn = [], J.logError(Y(new Error("FocusActions should be array")))), Array.isArray(un) || (un = [], J.logError(Y(new Error("BlurActions should be array")))), Array.isArray(Yn) || (Yn = [], J.logError(Y(new Error("PressStartActions should be array")))), Array.isArray(Bo) || (Bo = [], J.logError(Y(new Error("PressEndActions should be array")))), Array.isArray(Ro) || (Ro = [], J.logError(Y(new Error("HoverStartActions should be array")))), Array.isArray(bn) || (bn = [], J.logError(Y(new Error("HoverEndActions should be array"))))), (xr.length || kn.length || Dn.length || P.length || je.length || ye.length || Bt.length) && wr && (xr = [], kn = [], Dn = [], e(12, P = []), e(13, je = []), e(14, ye = []), e(15, Bt = []), J.logError(Y(new Error(`Cannot use action on component "${wr}"`)))), e(25, $n = xr), e(26, Ht = kn), e(27, b = Dn), V = rn, $ = un, e(12, P = Yn), e(13, je = Bo), e(14, ye = Ro), e(15, Bt = bn);
    }
    if (t.$$.dirty[0] & /*actionAnimationList*/
    65536 | t.$$.dirty[4] & /*$jsonActionAnimation*/
    1024 && rt && (e(16, Rt = ls(rt)), e(93, qr = Rt.map(d_).filter(Boolean).join(", "))), t.$$.dirty[4] & /*$jsonCaptureFocusOnAction*/
    512 && typeof st == "boolean" && e(28, an = st), t.$$.dirty[3] & /*visibility, isVisibilityInited*/
    96 | t.$$.dirty[4] & /*$jsonVisibility*/
    256) {
      const tt = In, xr = wm(Oe, In);
      tt !== xr && (Kn && (In === "visible" || xr === "visible") ? __(xr) : e(99, In = xr)), Kn || e(98, Kn = !0);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*currentNode*/
    8 | t.$$.dirty[3] & /*prevExtensionsVal*/
    256 && J.json && ar && !Ji(J.json.extensions, Ci)) {
      let tt = e(101, Ci = J.json.extensions);
      Sn().then(() => {
        if (!(tt !== Ci || !ar) && (Aa(), Array.isArray(J.json.extensions))) {
          const xr = se.getExtensionContext(J);
          le = J.json.extensions.map((kn) => {
            var un;
            const Dn = kn.id;
            if (!Dn)
              return;
            const rn = se.getExtension(Dn, kn.params);
            return rn && ((un = rn.mountView) == null || un.call(rn, ar, xr)), rn;
          }).filter(zo);
        }
      });
    }
    if (t.$$.dirty[0] & /*hasCustomFocus, componentContext*/
    131073 | t.$$.dirty[1] & /*layoutParams*/
    16777216 | t.$$.dirty[2] & /*widthMods, heightMods, stateChangingInProgress, visibilityChangingInProgress, transitionChangeInProgress*/
    1879314432 | t.$$.dirty[3] & /*visibility, actionAnimationTransition*/
    65 | t.$$.dirty[4] & /*parentOverlapMod*/
    16 && e(31, T = {
      ...Vr,
      ...y,
      "parent-overlap": oe,
      "scroll-snap": Et.scrollSnap,
      "hide-on-transition-in": tn || Fn || Rn,
      visibility: In,
      "has-action-animation": !!qr,
      "parent-flex": Et.parentContainerOrientation || void 0,
      "parent-grid": !!Et.gridArea || void 0,
      "has-custom-focus": !!(jr && J.json.focus)
    }), t.$$.dirty[4] & /*$jsonTransformations, $jsonTransform*/
    192) {
      let tt;
      Array.isArray(He) ? tt = He : ge && ge.rotation !== void 0 && (tt = [
        {
          type: "rotation",
          angle: ge.rotation,
          pivot_x: ge.pivot_x,
          pivot_y: ge.pivot_y
        }
      ]), tt ? e(100, Ko = Sm(tt)) : e(100, Ko = void 0);
    }
    if (t.$$.dirty[2] & /*widthFill, heightFill, widthFlexGrow, heightFlexGrow*/
    10649600 && e(115, Z = mn || Qt ? "100%" : Yr || Ze ? 0 : void 0), t.$$.dirty[0] & /*componentContext*/
    1 && e(30, ce = J.json["custom-class"] || ""), t.$$.dirty[0] & /*componentContext*/
    1 && e(113, C = J.json.position), t.$$.dirty[0] & /*componentContext*/
    1 && e(114, D = J.json.sticky_top), t.$$.dirty[0] & /*componentContext*/
    1 && e(112, M = J.json.sticky_bottom), t.$$.dirty[0] & /*componentContext*/
    1 && e(111, W = J.json.z_index), t.$$.dirty[0] & /*componentContext*/
    1 && e(110, Q = J.json.cursor), t.$$.dirty[0] & /*componentContext*/
    1 && e(109, me = J.json.backdrop_filter), t.$$.dirty[0] & /*componentContext*/
    1 && e(108, Ae = J.json.overflow), t.$$.dirty[0] & /*componentContext*/
    1 && e(107, Ce = J.json["box-shadow"]), t.$$.dirty[0] & /*componentContext*/
    1 && e(116, he = J.json.custom_transition), t.$$.dirty[0] & /*componentContext*/
    1 && e(127, Ve = J.json.responsive), t.$$.dirty[3] & /*responsiveMobileQuery, responsiveTabletQuery*/
    3072 | t.$$.dirty[4] & /*responsiveConfig*/
    8 && (Ve && typeof Ve == "object" && typeof window < "u" ? (Eo || (e(103, Eo = window.matchMedia("(max-width: 767px)")), e(104, Oo = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), Eo.addEventListener("change", qi), Oo.addEventListener("change", qi)), qi()) : e(105, li = "desktop")), t.$$.dirty[3] & /*responsiveBreakpoint*/
    4096 | t.$$.dirty[4] & /*responsiveConfig*/
    8 && e(126, re = li !== "desktop" && (Ve == null ? void 0 : Ve[li]) || null), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(120, $e = (() => {
      if (!(re != null && re.paddings)) return;
      const tt = re.paddings;
      return ho(hi(tt, null), ee);
    })()), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(118, Ge = (() => {
      if (!(re != null && re.margins)) return;
      const tt = re.margins;
      return ss(tt, ee, "");
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(123, Je = (() => {
      if (re != null && re["max-width"] && typeof re["max-width"] == "string")
        return re["max-width"];
      if (!(re != null && re.max_width)) return;
      const tt = re.max_width;
      if (tt.type === "fixed" && tt.value) return tt.value + "px";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(124, ke = (() => {
      if (!(re != null && re.width)) return;
      const tt = re.width;
      if (tt.type === "fixed" && tt.value) return pe(tt.value);
      if (tt.type === "match_parent") return "100%";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(122, De = (() => {
      if (!(re != null && re.height)) return;
      const tt = re.height;
      if (tt.type === "fixed" && tt.value) return pe(tt.value);
      if (tt.type === "match_parent") return "100%";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(117, ue = (re == null ? void 0 : re.opacity) !== void 0 ? re.opacity : void 0), t.$$.dirty[4] & /*activeResponsive*/
    4 && (re == null || re.visibility), t.$$.dirty[0] & /*componentContext*/
    1 && e(125, ae = J.json.hover), t.$$.dirty[0] & /*hoverClassName*/
    262144 | t.$$.dirty[3] & /*hoverStyleEl*/
    8192 | t.$$.dirty[4] & /*hoverConfig*/
    2)
      if (ae && typeof ae == "object" && typeof document < "u") {
        Ki || e(18, Ki = "divkit-hover-" + Math.random().toString(36).slice(2, 9));
        let tt = "";
        ae.background_color && (tt += `background-color: ${ae.background_color} !important;`), ae.opacity !== void 0 && (tt += `opacity: ${ae.opacity} !important;`), ae.scale !== void 0 && (tt += `scale: ${ae.scale} !important;`), ae.color && (tt += `color: ${ae.color} !important;`), ae.border_color && (tt += `border-color: ${ae.border_color} !important;`), (ae["box-shadow"] || ae.box_shadow) && (tt += `box-shadow: ${ae["box-shadow"] || ae.box_shadow} !important;`), tt && (ao || (e(106, ao = document.createElement("style")), document.head.appendChild(ao)), e(106, ao.textContent = `.${Ki}:hover { ${tt} }`, ao));
      } else ao && (ao.remove(), e(106, ao = null), e(18, Ki = ""));
    t.$$.dirty[0] & /*widthMin, widthMax, componentContext, heightMin, heightMax*/
    961 | t.$$.dirty[1] & /*style*/
    8388608 | t.$$.dirty[2] & /*backgroundStyle, borderStyle, width, height, margin, opacity, widthFlexGrow, heightFlexGrow, widthFlexShrink, heightFlexShrink*/
    107587616 | t.$$.dirty[3] & /*responsiveMaxWidth, responsiveHeight, gridArea, responsivePadding, padding, responsiveMargin, responsiveOpacity, customTransition, actionAnimationTransition, transform, flexBasis, customPosition, customStickyTop, customStickyBottom, customZIndex, customCursor, customBackdropFilter, customOverflow, customBoxShadow, animationOpacityStart, animationOpacityEnd, animationScaleStart, animationScaleEnd*/
    2147467423 | t.$$.dirty[4] & /*responsiveWidth*/
    1 && e(29, de = {
      ...Gt,
      ...cr,
      ...B,
      width: ke || kr,
      "min-width": Tr,
      "max-width": Je || Cn || (() => {
        const tt = J.json.max_width;
        if ((tt == null ? void 0 : tt.type) === "fixed" && (tt != null && tt.value)) return pe(tt.value);
      })(),
      height: De || E,
      "min-height": A,
      // input max-height
      "max-height": ne || (Gt == null ? void 0 : Gt["max-height"]) || (() => {
        const tt = J.json.max_height;
        if ((tt == null ? void 0 : tt.type) === "fixed" && (tt != null && tt.value)) return pe(tt.value);
      })(),
      "grid-area": fe,
      padding: $e || O,
      margin: Ge || Wt,
      opacity: ue !== void 0 ? ue : Ut,
      transition: he || qr,
      "transform-origin": Ko ? "0 0" : void 0,
      transform: Ko,
      "flex-grow": Yr || Ze || void 0,
      "flex-shrink": Xr || Ie ? 1 : void 0,
      "flex-basis": Z,
      position: C,
      top: C === "sticky" && D !== void 0 ? pe(D) : void 0,
      bottom: C === "sticky" && M !== void 0 ? pe(M) : void 0,
      "z-index": W,
      cursor: Q,
      "backdrop-filter": me,
      "-webkit-backdrop-filter": me,
      overflow: Ae,
      "box-shadow": Ce,
      "--divkit-animation-opacity-start": Mr,
      "--divkit-animation-opacity-end": Rr,
      "--divkit-animation-scale-start": Co,
      "--divkit-animation-scale-end": no
    });
  }, [
    J,
    ft,
    Zt,
    _r,
    Me,
    Xe,
    Tr,
    Cn,
    A,
    ne,
    Ct,
    Br,
    P,
    je,
    ye,
    Bt,
    Rt,
    jr,
    Ki,
    ee,
    _t,
    v,
    qe,
    Vn,
    St,
    $n,
    Ht,
    b,
    an,
    de,
    ce,
    T,
    H,
    z,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    or,
    yr,
    Sa,
    g_,
    h_,
    tr,
    Gt,
    Et,
    br,
    Er,
    wr,
    Dr,
    zr,
    at,
    vt,
    Yt,
    ut,
    ar,
    d,
    B,
    ve,
    R,
    Tt,
    Ot,
    dt,
    Wt,
    Vr,
    kr,
    Ee,
    Yr,
    Xr,
    mn,
    y,
    E,
    N,
    Ze,
    Ie,
    Qt,
    Ue,
    Ut,
    cr,
    Wr,
    tn,
    Fn,
    Rn,
    qr,
    Mr,
    Rr,
    Co,
    no,
    Kn,
    In,
    Ko,
    Ci,
    Pn,
    Eo,
    Oo,
    li,
    ao,
    Ce,
    Ae,
    me,
    Q,
    W,
    M,
    C,
    D,
    Z,
    he,
    ue,
    Ge,
    O,
    $e,
    fe,
    De,
    Je,
    ke,
    ae,
    re,
    Ve,
    oe,
    n,
    ge,
    He,
    Oe,
    st,
    rt,
    X,
    Fe,
    ot,
    Vt,
    be,
    we,
    nr,
    Ft,
    ze,
    er,
    vr,
    xt,
    m_,
    b_,
    $t
  ];
}
class hn extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      Km,
      Um,
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
const Ym = "appkit-text", Xm = "appkit-text_halign_start", Zm = "appkit-text_halign_center", Qm = "appkit-text_halign_end", xm = "appkit-text_valign_start", $m = "appkit-text_valign_center", e0 = "appkit-text_valign_end", t0 = "appkit-text_valign_baseline", r0 = "appkit-text__inner", n0 = "appkit-text_singleline", o0 = "appkit-text_multiline", i0 = "appkit-text_truncate_none", s0 = "appkit-text__inner_gradient", l0 = "appkit-text__image", a0 = "appkit-text__image_hidden", uo = {
  "text-range": "appkit-text-range",
  text: Ym,
  text_halign_start: Xm,
  text_halign_center: Zm,
  text_halign_end: Qm,
  text_valign_start: xm,
  text_valign_center: $m,
  text_valign_end: e0,
  text_valign_baseline: t0,
  text__inner: r0,
  text_singleline: n0,
  text_multiline: o0,
  text_truncate_none: i0,
  "text__inner_has-cloud-bg": "appkit-text__inner_has-cloud-bg",
  "text__inner_cloud-bg": "appkit-text__inner_cloud-bg",
  text__inner_gradient: s0,
  "text__image-wrapper": "appkit-text__image-wrapper",
  "text__image-wrapper_crop": "appkit-text__image-wrapper_crop",
  "text__image-wrapper_align_top": "appkit-text__image-wrapper_align_top",
  "text__image-wrapper_align_center": "appkit-text__image-wrapper_align_center",
  "text__image-wrapper_align_bottom": "appkit-text__image-wrapper_align_bottom",
  "text__image-wrapper_align_baseline": "appkit-text__image-wrapper_align_baseline",
  text__image: l0,
  text__image_hidden: a0,
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
function Gn(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e <= 0 ? r : e;
}
function c0(t) {
  if (t === "light" || t === "medium" || t === "bold" || t === "regular" || t === "semi_bold")
    return t === "medium" ? 500 : t === "bold" ? 700 : t === "light" ? 300 : t === "semi_bold" ? 600 : 400;
}
function mi(t, r, e) {
  return typeof r == "number" && r > 0 ? r : c0(t) || e;
}
function Ql(t, r) {
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
function Mc(t) {
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
      ), g(r, "class", So["text-range__cloud-svg"]);
    },
    m(l, c) {
      q(l, r, c), yt(r, e), yt(e, n), yt(n, o), yt(n, i), yt(n, a);
    },
    p(l, c) {
      c[0] & /*borderRadius*/
      32 && s !== (s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      l[5] + " -" + /*borderRadius*/
      l[5]) && g(i, "values", s);
    },
    d(l) {
      l && G(r);
    }
  };
}
function Pc(t) {
  let r;
  return {
    c() {
      r = Te("span"), g(r, "class", So["text-range__top-offset"]), F(
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
function Nc(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Te("div"), e = Te("div"), n = Te("div"), o = Te("div"), i = Te("div"), s = Te("div"), g(r, "class", So["text-range__mask-animation"]), g(e, "class", So["text-range__mask-animation"]), g(n, "class", So["text-range__mask-animation"]), g(o, "class", So["text-range__mask-animation"]), g(i, "class", So["text-range__mask-animation"]), g(s, "class", So["text-range__mask-animation"]);
    },
    m(a, l) {
      q(a, r, l), q(a, e, l), q(a, n, l), q(a, o, l), q(a, i, l), q(a, s, l);
    },
    d(a) {
      a && (G(r), G(e), G(n), G(o), G(i), G(s));
    }
  };
}
function u0(t) {
  let r = (
    /*text*/
    (t[1] || "​") + ""
  ), e, n = (
    /*maskColor*/
    t[4] && Nc()
  );
  return {
    c() {
      n && n.c(), e = Jn(r);
    },
    m(o, i) {
      n && n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      /*maskColor*/
      o[4] ? n || (n = Nc(), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null), i[0] & /*text*/
      2 && r !== (r = /*text*/
      (o[1] || "​") + "") && ro(e, r);
    },
    d(o) {
      o && G(e), n && n.d(o);
    }
  };
}
function f0(t) {
  let r, e, n, o, i = (
    /*cloudBg*/
    t[3] && /*hasCloudBg*/
    t[6] && Mc(t)
  ), s = (
    /*topOffset*/
    t[9] && Pc(t)
  );
  return n = new hl({
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
      style: dr(
        /*style*/
        t[7]
      ),
      $$slots: { default: [u0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      i && i.c(), r = Kt(), s && s.c(), e = Kt(), Lt(n.$$.fragment);
    },
    m(a, l) {
      i && i.m(a, l), q(a, r, l), s && s.m(a, l), q(a, e, l), Nt(n, a, l), o = !0;
    },
    p(a, l) {
      /*cloudBg*/
      a[3] && /*hasCloudBg*/
      a[6] ? i ? i.p(a, l) : (i = Mc(a), i.c(), i.m(r.parentNode, r)) : i && (i.d(1), i = null), /*topOffset*/
      a[9] ? s ? s.p(a, l) : (s = Pc(a), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null);
      const c = {};
      l[0] & /*componentContext*/
      1 && (c.componentContext = /*componentContext*/
      a[0]), l[0] & /*mods*/
      256 && (c.cls = ht(
        "text-range",
        So,
        /*mods*/
        a[8]
      )), l[0] & /*actions*/
      4 && (c.actions = /*actions*/
      a[2]), l[0] & /*style*/
      128 && (c.style = dr(
        /*style*/
        a[7]
      )), l[0] & /*text, maskColor*/
      18 | l[1] & /*$$scope*/
      64 && (c.$$scope = { dirty: l, ctx: a }), n.$set(c);
    },
    i(a) {
      o || (L(n.$$.fragment, a), o = !0);
    },
    o(a) {
      x(n.$$.fragment, a), o = !1;
    },
    d(a) {
      a && (G(r), G(e)), i && i.d(a), s && s.d(a), zt(n, a);
    }
  };
}
function d0(t, r, e) {
  let n, o, i, s, a, l, c, u, f, { componentContext: _ } = r, { text: h } = r, { rootFontSize: m } = r, { textStyles: p = {} } = r, { singleline: w = !1 } = r, { actions: k = void 0 } = r, { cloudBg: z = !1 } = r, { cloudBgId: H = "" } = r, { customLineHeight: O = null } = r;
  const oe = Ir(Kr), fe = oe.direction;
  yn(t, fe, (ke) => e(35, f = ke));
  const T = z && H || oe.genId("text-range") || "";
  let Z = "none", ce = 12, C = 1.25, D = "", M, W = "", Q = "", me = "", Ae, Ce = null, he, Ve, re = !1, $e, Ge, Je;
  return t.$$set = (ke) => {
    "componentContext" in ke && e(0, _ = ke.componentContext), "text" in ke && e(1, h = ke.text), "rootFontSize" in ke && e(12, m = ke.rootFontSize), "textStyles" in ke && e(13, p = ke.textStyles), "singleline" in ke && e(14, w = ke.singleline), "actions" in ke && e(2, k = ke.actions), "cloudBg" in ke && e(3, z = ke.cloudBg), "cloudBgId" in ke && e(15, H = ke.cloudBgId), "customLineHeight" in ke && e(16, O = ke.customLineHeight);
  }, t.$$.update = () => {
    var ke, De, ue, ae, de, ee, ge, ie;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && _.json && (e(17, Z = "none"), e(18, ce = 12), e(19, C = 1.25), e(20, D = ""), e(21, M = void 0), e(22, W = ""), e(23, Q = ""), e(24, me = ""), e(25, Ae = void 0), e(26, Ce = null), e(27, he = void 0), e(28, Ve = void 0), e(29, re = !1), e(4, $e = void 0), e(30, Ge = void 0), e(31, Je = void 0)), t.$$.dirty[0] & /*textStyles*/
    8192) {
      let Se = "none";
      (p.underline || p.strike) && (p.underline === "single" && p.strike === "single" ? Se = "both" : p.underline === "single" ? Se = "underline" : p.strike === "single" && (Se = "strike")), e(17, Z = Se);
    }
    if (t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(18, ce = Gn(p.font_size, ce)), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && zn(p.line_height) && e(19, C = Number(p.line_height) / ce), t.$$.dirty[0] & /*textStyles*/
    8192 && Nn(p.letter_spacing) && e(20, D = pe(p.letter_spacing)), t.$$.dirty[0] & /*textStyles, fontWeight*/
    2105344 && (e(21, M = mi(p.font_weight, p.font_weight_value, M)), typeof p.font_family == "string" && p.font_family ? e(22, W = oe.typefaceProvider(p.font_family, { fontWeight: M || 400 })) : e(22, W = "")), t.$$.dirty[0] & /*textStyles, fontVariationSettings*/
    8396800) {
      const Se = Oi(p.font_variation_settings);
      Se !== Q && e(23, Q = Se);
    }
    if (t.$$.dirty[0] & /*textStyles, color*/
    16785408 && e(24, me = pr(p.text_color, 1, me)), t.$$.dirty[0] & /*textStyles*/
    8192 && e(9, n = p.top_offset ? pe(p.top_offset) : ""), t.$$.dirty[0] & /*textStyles*/
    8192 && e(6, o = ((ke = p.background) == null ? void 0 : ke.type) === "cloud"), t.$$.dirty[0] & /*textStyles*/
    8192 && e(33, i = ((De = p.background) == null ? void 0 : De.type) === "cloud" ? p.background.paddings : void 0), t.$$.dirty[0] & /*textStyles, cloudBg, hasCloudBg, fontSize*/
    270408 | t.$$.dirty[1] & /*$direction*/
    16) {
      const Se = p.mask, He = !!(Se && (Se.type === "solid" || Se.type === "particles") && Se.is_enabled !== !1 && Se.color);
      if (z || He ? e(25, Ae = "transparent") : e(25, Ae = void 0), e(29, re = !1), e(4, $e = void 0), e(30, Ge = void 0), e(31, Je = void 0), z)
        o ? e(28, Ve = T_(p.background.color, 255, "transparent")) : e(28, Ve = void 0);
      else if (Se && He) {
        if (Se.type === "solid")
          e(28, Ve = pr(Se.color));
        else if (Se.type === "particles") {
          const We = Gn((ue = Se.particle_size) == null ? void 0 : ue.value, 1), te = pe(We * 10 / ce), Oe = Gn(Se.density, 0.8), Pe = pr(Se.color);
          e(28, Ve = void 0), e(4, $e = Pe), e(30, Ge = te), e(31, Je = String(Oe)), e(29, re = Se.is_animated === !0);
        }
      } else ((ae = p.background) == null ? void 0 : ae.type) === "solid" ? e(28, Ve = pl([p.background], f).color) : e(28, Ve = void 0);
    }
    t.$$.dirty[0] & /*textStyles*/
    8192 && ((de = p.border) != null && de.stroke && p.border.stroke.color && pr(p.border.stroke.color) !== "transparent" && zn(p.border.stroke.width) && ((ee = p.background) == null ? void 0 : ee.type) !== "cloud" ? e(26, Ce = {
      color: p.border.stroke.color,
      width: p.border.stroke.width,
      corner_radius: p.border.corner_radius
    }) : e(26, Ce = null)), t.$$.dirty[0] & /*cloudBg, hasCloudBg, textStyles, border*/
    67117128 && e(5, s = z ? o && p.background.corner_radius || 0 : Ce ? Gn(Ce.corner_radius, 0) : 0), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(32, a = p.text_shadow ? Cm(p.text_shadow, ce) : void 0), t.$$.dirty[0] & /*textStyles*/
    8192 && typeof p.baseline_offset == "number" && e(27, he = p.baseline_offset), t.$$.dirty[0] & /*textStyles*/
    8192 && e(34, l = typeof p.baseline_offset == "number" ? void 0 : p.alignment_vertical), t.$$.dirty[0] & /*singleline, decoration, hasCloudBg, customLineHeight, verticalAlign, maskColor, maskAnimated*/
    671301712 | t.$$.dirty[1] & /*customVerticalAlign*/
    8 && e(8, c = {
      singleline: w,
      decoration: Z,
      align: l,
      cloud: o,
      "relative-vertical-align": !!(O && he),
      "has-particles-mask": !!$e,
      "mask-animated": re
    }), t.$$.dirty[0] & /*fontSize, rootFontSize, lineHeight, letterSpacing, fontWeight, fontFamily, customLineHeight, verticalAlign, cloudBg, hasCloudBg, cloudBgId, colorOverride, color, background, textStyles, border, borderRadius, fontVariationSettings, maskColor, maskSize*/
    1610461304 | t.$$.dirty[1] & /*customVerticalAlign, cloudPadding, $direction, shadow, maskDensity*/
    31 && e(7, u = {
      "font-size": pe(ce * 10 / m),
      "line-height": l ? "normal" : C,
      "letter-spacing": D,
      "font-weight": M,
      "font-family": W,
      "vertical-align": O || he === void 0 ? void 0 : pe(he * 10 / ce),
      top: O && he !== void 0 ? pe(-he * 10 / ce) : void 0,
      margin: i ? ho(Ql(i, -10 / ce), f) : void 0,
      padding: i ? ho(Ql(i, 10 / ce), f) : void 0,
      filter: z && o && !H ? `url(#${T})` : a,
      color: Ae || me,
      background: Ve,
      opacity: z && o && !H ? ((ie = (ge = _o(p.background.color)) == null ? void 0 : ge.a) != null ? ie : 255) / 255 : void 0,
      /**
      * box-shadow instead of border because:
      * 1) Doesn't take space as border does
      * 2) There should not be a border-radius on line breaks, but there should be a border
      */
      "box-shadow": Ce ? `inset 0 0 0 ${pe(Ce.width * 10 / ce)} ${Ce.color}` : void 0,
      "border-radius": s ? pe(s * 10 / ce) : void 0,
      "font-feature-settings": p.font_feature_settings || void 0,
      "font-variation-settings": Q || void 0,
      "--divkit-text-mask-color": $e,
      "--divkit-text-mask-size": Ge,
      "--divkit-text-mask-density": Je
    });
  }, [
    _,
    h,
    k,
    z,
    $e,
    s,
    o,
    u,
    c,
    n,
    fe,
    T,
    m,
    p,
    w,
    H,
    O,
    Z,
    ce,
    C,
    D,
    M,
    W,
    Q,
    me,
    Ae,
    Ce,
    he,
    Ve,
    re,
    Ge,
    Je,
    a,
    i,
    l,
    f
  ];
}
class ya extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      d0,
      f0,
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
function ml(t, r, e) {
  return t === "left" || t === "center" || t === "right" || t === "start" || t === "end" ? t === "left" ? r === "ltr" ? "start" : "end" : t === "right" ? r === "ltr" ? "end" : "start" : t : e;
}
function bl(t, r) {
  return t === "top" || t === "center" || t === "bottom" || t === "baseline" ? t === "top" ? "start" : t === "bottom" ? "end" : t : r;
}
function _0(t) {
  return String(t != null ? t : "");
}
function Ud(t, r) {
  return t === "source_in" || t === "source_atop" || t === "darken" || t === "lighten" || t === "multiply" || t === "screen" ? t : r;
}
function Ys(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1;
}
function wa(t, r) {
  let e;
  return function(...n) {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      t.apply(this, n), e = null;
    }, r);
  };
}
function p0(t, r) {
  let e = null;
  const n = () => {
    const a = getComputedStyle(t), l = parseFloat(a.lineHeight);
    t.style.webkitLineClamp = "", t.style.maxHeight = "";
    const c = t.offsetHeight, u = t.scrollHeight;
    let f = Math.max(1, Math.floor(c / l));
    r.maxLines && r.maxLines < f && (f = r.maxLines), u > f * l + 1e-9 && (t.style.webkitLineClamp = String(f), t.style.maxHeight = l * f + "px");
  }, o = wa(n, 50), i = () => {
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
const { Boolean: Gd } = Po;
function zc(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function Lc(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function Oc(t) {
  let r = (
    /*htmlTag*/
    t[9]
  ), e, n = (
    /*htmlTag*/
    t[9] && Vl(t)
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
      o[9] ? r ? Sr(
        r,
        /*htmlTag*/
        o[9]
      ) ? (n.d(1), n = Vl(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = Vl(o), r = /*htmlTag*/
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
function g0(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Te("span"), e = Te("span"), g(e, "class", n = ht("text__image-wrapper", uo, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), g(e, "style", o = dr({
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
      })), g(r, "style", i = dr(
        /*item*/
        t[71].image.wrapperStyle
      ));
    },
    m(s, a) {
      q(s, r, a), yt(r, e);
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
      10240 && o !== (o = dr({
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
      8192 && i !== (i = dr(
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
function h0(t) {
  let r, e, n = (
    /*item*/
    t[71].text && Bc(t)
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
      8192 && L(n, 1)) : (n = Bc(o), n.c(), L(n, 1), n.m(r.parentNode, r)) : n && (ir(), x(n, 1, 1, () => {
        n = null;
      }), sr());
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
function Bc(t) {
  let r, e;
  return r = new ya({
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Rc(t) {
  let r, e, n, o;
  const i = [h0, g0], s = [];
  function a(l, c) {
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
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (ir(), x(s[u], 1, 1, () => {
        s[u] = null;
      }), sr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
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
function Vl(t) {
  let r, e, n, o, i = rr(
    /*renderList*/
    t[13]
  ), s = [];
  for (let u = 0; u < i.length; u += 1)
    s[u] = Rc(Lc(t, i, u));
  const a = (u) => x(s[u], 1, 1, () => {
    s[u] = null;
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
      style: n = dr({
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
  ], c = {};
  for (let u = 0; u < l.length; u += 1)
    c = jo(c, l[u]);
  return {
    c() {
      r = Te(
        /*htmlTag*/
        t[9]
      );
      for (let u = 0; u < s.length; u += 1)
        s[u].c();
      $o(
        /*htmlTag*/
        t[9]
      )(r, c);
    },
    m(u, f) {
      q(u, r, f);
      for (let _ = 0; _ < s.length; _ += 1)
        s[_] && s[_].m(r, null);
      o = !0;
    },
    p(u, f) {
      if (f[0] & /*componentContext, renderList, fontSize, singleline, wholeTextCloudBgId, customLineHeight*/
      26889) {
        i = rr(
          /*renderList*/
          u[13]
        );
        let _;
        for (_ = 0; _ < i.length; _ += 1) {
          const h = Lc(u, i, _);
          s[_] ? (s[_].p(h, f), L(s[_], 1)) : (s[_] = Rc(h), s[_].c(), L(s[_], 1), s[_].m(r, null));
        }
        for (ir(), _ = i.length; _ < s.length; _ += 1)
          a(_);
        sr();
      }
      $o(
        /*htmlTag*/
        u[9]
      )(r, c = No(l, [
        (!o || f[0] & /*innerMods*/
        524288 && e !== (e = ht("text__inner", uo, {
          .../*innerMods*/
          u[19],
          "cloud-bg": !0
        }))) && { class: e },
        (!o || f[0] & /*style, cloudPadding, wholeTextCloudBgId, wholeTextCloudBgOpacity*/
        442368 && n !== (n = dr({
          .../*style*/
          u[18],
          padding: (
            /*cloudPadding*/
            u[17]
          ),
          filter: (
            /*wholeTextCloudBgId*/
            u[14] ? `url(#${/*wholeTextCloudBgId*/
            u[14]})` : void 0
          ),
          opacity: (
            /*wholeTextCloudBgOpacity*/
            u[15]
          )
        }))) && { style: n }
      ]));
    },
    i(u) {
      if (!o) {
        for (let f = 0; f < i.length; f += 1)
          L(s[f]);
        o = !0;
      }
    },
    o(u) {
      s = s.filter(Gd);
      for (let f = 0; f < s.length; f += 1)
        x(s[f]);
      o = !1;
    },
    d(u) {
      u && G(r), on(s, u);
    }
  };
}
function m0(t) {
  let r, e;
  return r = new ya({
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function b0(t) {
  let r, e, n = rr(
    /*renderList*/
    t[13]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Wc(zc(t, n, s));
  const i = (s) => x(o[s], 1, 1, () => {
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
        n = rr(
          /*renderList*/
          s[13]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const c = zc(s, n, l);
          o[l] ? (o[l].p(c, a), L(o[l], 1)) : (o[l] = Wc(c), o[l].c(), L(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (ir(), l = n.length; l < o.length; l += 1)
          i(l);
        sr();
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
      o = o.filter(Gd);
      for (let a = 0; a < o.length; a += 1)
        x(o[a]);
      e = !1;
    },
    d(s) {
      s && G(r), on(o, s);
    }
  };
}
function y0(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, h, m = [
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
      style: l = dr({
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
      r = Te("span"), e = Te("span"), n = Te("img"), Jo(n, p), g(e, "class", c = ht("text__image-wrapper", uo, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), g(e, "style", u = dr({
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
      })), g(r, "style", f = dr(
        /*item*/
        t[71].image.wrapperStyle
      ));
    },
    m(w, k) {
      q(w, r, k), yt(r, e), yt(e, n), _ || (h = Qe(
        n,
        "error",
        /*onImgError*/
        t[39]
      ), _ = !0);
    },
    p(w, k) {
      Jo(n, p = No(m, [
        { class: o },
        k[0] & /*renderList*/
        8192 && !Qn(n.src, i = /*item*/
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
        8192 && l !== (l = dr({
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
      10240 && c !== (c = ht("text__image-wrapper", uo, {
        align: (
          /*item*/
          w[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          w[11] !== null
        )
      })) && g(e, "class", c), k[0] & /*renderList, customLineHeight*/
      10240 && u !== (u = dr({
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
      })) && g(e, "style", u), k[0] & /*renderList*/
      8192 && f !== (f = dr(
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
function w0(t) {
  let r, e, n = (
    /*item*/
    t[71].text && Hc(t)
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
      8192 && L(n, 1)) : (n = Hc(o), n.c(), L(n, 1), n.m(r.parentNode, r)) : n && (ir(), x(n, 1, 1, () => {
        n = null;
      }), sr());
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
function Hc(t) {
  let r, e;
  return r = new ya({
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Wc(t) {
  let r, e, n, o;
  const i = [w0, y0], s = [];
  function a(l, c) {
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
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (ir(), x(s[u], 1, 1, () => {
        s[u] = null;
      }), sr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
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
function Fl(t) {
  let r, e, n, o, i, s, a, l, c;
  const u = [b0, m0], f = [];
  function _(p, w) {
    return (
      /*renderList*/
      p[13].length ? 0 : 1
    );
  }
  e = _(t), n = f[e] = u[e](t);
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
      style: i = dr(
        /*style*/
        t[18]
      )
    }
  ], m = {};
  for (let p = 0; p < h.length; p += 1)
    m = jo(m, h[p]);
  return {
    c() {
      r = Te(
        /*htmlTag*/
        t[9]
      ), n.c(), $o(
        /*htmlTag*/
        t[9]
      )(r, m);
    },
    m(p, w) {
      q(p, r, w), f[e].m(r, null), a = !0, l || (c = ul(s = p0.call(null, r, {
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
      e = _(p), e === k ? f[e].p(p, w) : (ir(), x(f[k], 1, 1, () => {
        f[k] = null;
      }), sr(), n = f[e], n ? n.p(p, w) : (n = f[e] = u[e](p), n.c()), L(n, 1), n.m(r, null)), $o(
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
        262144 && i !== (i = dr(
          /*style*/
          p[18]
        ))) && { style: i }
      ])), s && Nr(s.update) && w[0] & /*$jsonAutoEllipsize, lineClamp, maxLines*/
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
      p && G(r), f[e].d(), l = !1, c();
    }
  };
}
function k0(t) {
  let r, e = (
    /*htmlTag*/
    t[9]
  ), n, o, i = (
    /*hasCloudBg*/
    t[6] && Oc(t)
  ), s = (
    /*htmlTag*/
    t[9] && Fl(t)
  );
  return {
    c() {
      i && i.c(), r = gr(), s && s.c(), n = Kt();
    },
    m(a, l) {
      i && i.m(a, l), q(a, r, l), s && s.m(a, l), q(a, n, l), o = !0;
    },
    p(a, l) {
      /*hasCloudBg*/
      a[6] ? i ? (i.p(a, l), l[0] & /*hasCloudBg*/
      64 && L(i, 1)) : (i = Oc(a), i.c(), L(i, 1), i.m(r.parentNode, r)) : i && (ir(), x(i, 1, 1, () => {
        i = null;
      }), sr()), /*htmlTag*/
      a[9] ? e ? Sr(
        e,
        /*htmlTag*/
        a[9]
      ) ? (s.d(1), s = Fl(a), e = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : s.p(a, l) : (s = Fl(a), e = /*htmlTag*/
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
function v0(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "text",
        uo,
        /*mods*/
        t[20]
      ) + " " + /*selectable*/
      (t[5] ? Cr.root__selectable : Cr.root__unselectable),
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
      $$slots: { default: [k0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
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
      (n[5] ? Cr.root__selectable : Cr.root__unselectable)), o[0] & /*componentContext*/
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
      zt(r, n);
    }
  };
}
function j0(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, z, H, O, oe, fe, T, Z, ce, C, D, M, W, Q, me = j, Ae = () => (me(), me = S(z, (vt) => e(52, Q = vt)), z), Ce, he = j, Ve = () => (he(), he = S(i, (vt) => e(53, Ce = vt)), i), re, $e = j, Ge = () => ($e(), $e = S(o, (vt) => e(54, re = vt)), o), Je, ke = j, De = () => (ke(), ke = S(w, (vt) => e(55, Je = vt)), w), ue, ae = j, de = () => (ae(), ae = S(p, (vt) => e(56, ue = vt)), p), ee, ge = j, ie = () => (ge(), ge = S(m, (vt) => e(57, ee = vt)), m), Se, He = j, We = () => (He(), He = S(h, (vt) => e(58, Se = vt)), h), te, Oe = j, Pe = () => (Oe(), Oe = S(_, (vt) => e(59, te = vt)), _), nt, st = j, et = () => (st(), st = S(c, (vt) => e(60, nt = vt)), c), wt, rt = j, Pt = () => (rt(), rt = S(f, (vt) => e(61, wt = vt)), f), ct, X = j, _e = () => (X(), X = S(u, (vt) => e(62, ct = vt)), u), lt, Fe = j, I = () => (Fe(), Fe = S(k, (vt) => e(10, lt = vt)), k), jt, _t = j, At = () => (_t(), _t = S(l, (vt) => e(63, jt = vt)), l), Dt, ot = j, K = () => (ot(), ot = S(a, (vt) => e(64, Dt = vt)), a), Mt, Vt = j, Jt = () => (Vt(), Vt = S(s, (vt) => e(65, Mt = vt)), s), qt, be = j, Ke = () => (be(), be = S(n, (vt) => e(66, qt = vt)), n), pt, we = j, xe = () => (we(), we = S(H, (vt) => e(67, pt = vt)), H);
  t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => $e()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => He()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => st()), t.$$.on_destroy.push(() => rt()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => Fe()), t.$$.on_destroy.push(() => _t()), t.$$.on_destroy.push(() => ot()), t.$$.on_destroy.push(() => Vt()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => we());
  let { componentContext: Be } = r, { layoutParams: nr = void 0 } = r;
  const Ne = Ir(Kr), bt = Ne.direction;
  yn(t, bt, (vt) => e(51, W = vt));
  let Ft = "", It = 12, hr = 1.25, ze = null, kt = "", lr, er = "", Xt = !1, mr = "start", vr = "start", xt = "", $t = "", J = "", ft = !1, Gt = [], Et = !1, br = "", Er, wr = [], Dr = {}, zr = "span";
  function tr(vt, Zt, Yt, _r) {
    var le, d;
    let ut = [];
    if (wr.forEach(([B, Me]) => {
      Ne.removeSvgFilter(B, Me);
    }), wr = [], !(Array.isArray(Zt) && Zt.length || Array.isArray(Yt) && Yt.length && vt)) {
      e(13, Gt = []);
      return;
    }
    const se = vt;
    let mt = Zt || [{ start: 0, end: se.length }], or = Yt || [], yr = 0, ar = [], v = [];
    mt.forEach((B) => {
      const Me = B.start || 0, qe = B.end || vt.length, ve = {
        top_offset: 0,
        ...B,
        start: Me,
        end: qe
      };
      v.push({
        index: Me,
        range: ve,
        type: "rangeStart",
        isStart: !0
      }), v.push({
        index: qe,
        range: ve,
        type: "rangeEnd"
      });
    }), or.forEach((B, Me) => {
      B.start !== void 0 && B.url && B.start <= se.length && v.push({
        index: B.indexing_direction === "reversed" ? vt.length - B.start : B.start,
        image: B,
        type: "image",
        arrayIndex: Me
      });
    }), v.sort((B, Me) => B.index === Me.index ? B.type !== Me.type ? B.type === "image" ? -1 : Me.type === "image" ? 1 : B.type < Me.type ? -1 : 1 : B.type === "image" && Me.type === "image" ? Me.arrayIndex - B.arrayIndex : B.type === "rangeStart" && Me.type === "rangeStart" ? B.range.end - Me.range.end : B.type === "rangeStart" ? 1 : Me.type === "rangeStart" ? -1 : B.type !== "image" && Me.type !== "image" ? B.range.start - Me.range.start : 0 : B.index - Me.index), v.forEach((B) => {
      var ve, R, Tt, Ot;
      let Me = B.type === "image" ? null : B.range, qe = B.index;
      if (qe > yr) {
        let Xe = Object.assign({ ..._r }, ...ar);
        ar.length && ar[ar.length - 1].start !== yr && (Xe.top_offset = 0), ut.push({
          text: se.substring(yr, qe),
          textStyles: Xe,
          actions: B.type === "rangeEnd" && ((R = (ve = B.range) == null ? void 0 : ve.actions) == null ? void 0 : R.filter(Ys)) || void 0
        });
      }
      if (B.type === "rangeStart" && Me)
        ar.push(Me);
      else if (B.type === "rangeEnd")
        ar = ar.filter((Xe) => Xe !== B.range);
      else if (B.type === "image") {
        let Xe = Object.assign({ ..._r }, ...ar), dt = pe((B.image.width && B.image.width.value || 20) * 10 / (Xe.font_size || 12)), Wt = pe((B.image.height && B.image.height.value || 20) * 10 / (Xe.font_size || 12));
        const Vr = {
          "font-size": pe((Number(Xe.font_size) || 12) * 10 / It)
        };
        let kr = "";
        const Tr = B.image.tint_color, Cn = Ud(B.image.tint_mode, "source_in");
        if (Tr) {
          const mn = pr(B.image.tint_color);
          kr = Ne.addSvgFilter(mn, Cn), wr.push([mn, Cn]);
        }
        const Ee = {}, Yr = (Tt = B.image.accessibility) == null ? void 0 : Tt.type, Xr = ((Ot = B.image.accessibility) == null ? void 0 : Ot.description) || "";
        (Yr === "button" || Yr === "image") && Xr ? Ee.role = Yr : (!Xr || Yr === "none") && (Ee["aria-hidden"] = "true"), ut.push({
          image: {
            url: B.image.url,
            width: dt,
            height: Wt,
            wrapperStyle: Vr,
            svgFilterId: kr,
            preloadRequired: !!B.image.preload_required,
            verticalAlign: B.image.alignment_vertical,
            description: Xr,
            a11yAttrs: Ee
          }
        });
      }
      yr = qe;
    }), yr < se.length && ut.push({
      text: se.substring(yr),
      textStyles: { ..._r }
    }), e(13, Gt = ut), e(6, Et = ut.some((B) => {
      var Me;
      return "text" in B && ((Me = B.textStyles.background) == null ? void 0 : Me.type) === "cloud";
    })), e(14, br = Et && ut.length === 1 ? Ne.genId("text-whole-bg") : ""), e(15, Er = br ? ((d = (le = _o(ut[0].textStyles.background.color)) == null ? void 0 : le.a) != null ? d : 255) / 255 : void 0);
  }
  function at(vt) {
    vt.target && "classList" in vt.target && vt.target.classList.add(uo.text__image_hidden);
  }
  return sn(() => {
    wr.forEach(([vt, Zt]) => {
      Ne.removeSvgFilter(vt, Zt);
    });
  }), t.$$set = (vt) => {
    "componentContext" in vt && e(0, Be = vt.componentContext), "layoutParams" in vt && e(1, nr = vt.layoutParams);
  }, t.$$.update = () => {
    var vt, Zt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && Be.json && (e(3, It = 12), e(40, hr = 1.25), e(11, ze = null), e(41, kt = ""), e(12, lr = void 0), e(4, er = ""), e(42, Xt = !1), e(43, mr = "start"), e(44, vr = "start"), e(45, xt = ""), e(47, J = ""), e(5, ft = !1)), t.$$.dirty[0] & /*componentContext*/
    1 && Ke(e(37, n = Be.getDerivedFromVars(Be.json.text))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(36, o = Be.getDerivedFromVars(Be.json.ranges, void 0, !0, 3))), t.$$.dirty[0] & /*componentContext*/
    1 && Ve(e(35, i = Be.getDerivedFromVars(Be.json.images))), t.$$.dirty[0] & /*componentContext*/
    1 && Jt(e(34, s = Be.getDerivedFromVars(
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
    1 && K(e(33, a = Be.getDerivedFromVars(Be.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && At(e(32, l = Be.getDerivedFromVars(Be.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(31, c = Be.getDerivedFromVars(Be.json.max_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(30, u = Be.getDerivedFromVars(Be.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Pt(e(29, f = Be.getDerivedFromVars(Be.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Pe(e(28, _ = Be.getDerivedFromVars(Be.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && We(e(27, h = Be.getDerivedFromVars(Be.json.focused_text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(26, m = Be.getDerivedFromVars(Be.json.truncate))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(25, p = Be.getDerivedFromVars(Be.json.text_gradient))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(24, w = Be.getDerivedFromVars(Be.json.selectable))), t.$$.dirty[0] & /*componentContext*/
    1 && I(e(23, k = Be.getDerivedFromVars(Be.json.auto_ellipsize))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(22, z = Be.getDerivedFromVars(Be.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(21, H = Be.getDerivedFromVars(Be.json.heading_type))), t.$$.dirty[2] & /*$jsonHeadingType*/
    32 && e(9, O = (() => {
      const Yt = pt;
      if (Yt && typeof Yt == "string") {
        const _r = Yt.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(_r))
          return _r;
      }
      return "span";
    })()), t.$$.dirty[0] & /*htmlTag*/
    512 && e(16, zr = O !== "span" ? "div" : "span"), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonText*/
    16 && (typeof Be.json.text == "string" ? e(2, Ft = _0(qt)) : (e(2, Ft = ""), Be.logError(Y(new Error("Incorrect text value type"))))), t.$$.dirty[1] & /*$jsonTextGradient, $direction*/
    34603008) {
      let Yt = "";
      if (ue) {
        const _r = pl([ue], W);
        _r.image && (Yt = _r.image);
      }
      e(47, J = Yt);
    }
    if (t.$$.dirty[1] & /*gradient*/
    65536 | t.$$.dirty[2] & /*$jsonRootTextStyles*/
    8 && e(7, Dr = J ? { ...Mt, text_color: "" } : Mt), t.$$.dirty[0] & /*fontSize, componentContext*/
    9 | t.$$.dirty[2] & /*$jsonTextSize*/
    4) {
      e(3, It = Gn(Dt, It));
      const Yt = Be.json.responsive;
      if (Yt && typeof Yt == "object" && typeof window < "u") {
        const _r = window.matchMedia("(max-width: 767px)").matches, ut = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
        _r && ((vt = Yt.mobile) != null && vt.font_size) ? e(3, It = Yt.mobile.font_size) : ut && ((Zt = Yt.tablet) != null && Zt.font_size) && e(3, It = Yt.tablet.font_size);
      }
    }
    if (t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*lineHeight*/
    512 | t.$$.dirty[2] & /*$jsonLineHeight*/
    2) {
      const Yt = jt;
      zn(Yt) ? (e(40, hr = Number(Yt) / It), e(11, ze = hr)) : e(11, ze = null);
    }
    if (t.$$.dirty[1] & /*$jsonMaxLines*/
    536870912 && e(8, oe = nt === 1), t.$$.dirty[0] & /*$jsonAutoEllipsize*/
    1024 | t.$$.dirty[1] & /*$jsonMaxLines, lineHeight*/
    536871424) {
      let Yt = "", _r, ut = "", se = !1;
      if (nt && nt > 1) {
        const mt = Number(nt);
        Yt = mt * hr + "em", _r = mt, ut = mt, se = !0;
      } else lt && nt !== 1 && (se = !0);
      e(41, kt = Yt), e(12, lr = _r), e(4, er = ut), e(42, Xt = se);
    }
    if (t.$$.dirty[1] & /*$direction, halign*/
    1052672 | t.$$.dirty[2] & /*$jsonHAlign*/
    1 && e(43, mr = ml(ct, W, mr)), t.$$.dirty[1] & /*$jsonVAlign, valign*/
    1073750016 && e(44, vr = bl(wt, vr)), t.$$.dirty[0] & /*text*/
    4 | t.$$.dirty[1] & /*$jsonRanges*/
    8388608 && e(50, fe = !re || Ft && re.length === 1 && re[0] && (!re[0].start || re[0].start === 0) && (!re[0].end || typeof re[0].end == "number" && re[0].end >= Ft.length)), t.$$.dirty[1] & /*gradient, $jsonTextColor, $jsonRanges*/
    276889600 && e(49, T = !!(!J && te) != !!(re && re[0] && re[0].text_color)), t.$$.dirty[1] & /*$jsonMaxLines, isAllTextSameColor, isOnlyOneColorDefined, $jsonTextColor, $jsonRanges, rootTextColor*/
    814497792) {
      let Yt = "";
      nt && fe && T && (Yt = pr(te || re && re[0] && re[0].text_color, 1, xt)), e(45, xt = Yt);
    }
    t.$$.dirty[1] & /*$jsonFocusTextColor, focusTextColor*/
    134250496 && e(46, $t = pr(Se, 1, $t)), t.$$.dirty[1] & /*$jsonTruncate*/
    67108864 && e(48, Z = ee === "none" ? "none" : ""), t.$$.dirty[0] & /*selectable*/
    32 | t.$$.dirty[1] & /*$jsonSelectable*/
    16777216 && e(5, ft = nn(Je, ft)), t.$$.dirty[0] & /*text, rootTextStyles*/
    132 | t.$$.dirty[1] & /*$jsonRanges, $jsonImages*/
    12582912 && tr(Ft, re, Ce, Dr), t.$$.dirty[0] & /*singleline*/
    256 | t.$$.dirty[1] & /*multiline, halign, valign, truncate, focusTextColor*/
    178176 && e(20, ce = {
      singleline: oe,
      multiline: Xt,
      halign: mr,
      valign: vr,
      truncate: Z,
      "has-focus-color": !!$t
    }), t.$$.dirty[0] & /*hasCloudBg*/
    64 | t.$$.dirty[1] & /*gradient*/
    65536 && e(19, C = {
      gradient: !!J,
      "has-cloud-bg": Et
    }), t.$$.dirty[0] & /*fontSize, lineClamp*/
    24 | t.$$.dirty[1] & /*lineHeight, maxHeight, rootTextColor, gradient, focusTextColor*/
    116224 && e(18, D = {
      "font-size": pe(It),
      "line-height": hr,
      "max-height": kt,
      "-webkit-line-clamp": er,
      color: xt,
      "background-image": J,
      "--divkit-text-focus-color": $t
    }), t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*$jsonPaddings, $direction*/
    3145728 && e(17, M = ho(Ql(hi(Q, {}) || {}, 10 / It), W));
  }, [
    Be,
    nr,
    Ft,
    It,
    er,
    ft,
    Et,
    Dr,
    oe,
    O,
    lt,
    ze,
    lr,
    Gt,
    br,
    Er,
    zr,
    M,
    D,
    C,
    ce,
    H,
    z,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    n,
    bt,
    at,
    hr,
    kt,
    Xt,
    mr,
    vr,
    xt,
    $t,
    J,
    Z,
    T,
    fe,
    W,
    Q,
    Ce,
    re,
    Je,
    ue,
    ee,
    Se,
    te,
    nt,
    wt,
    ct,
    jt,
    Dt,
    Mt,
    qt,
    pt
  ];
}
class C0 extends Or {
  constructor(r) {
    super(), Lr(this, r, j0, v0, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const E0 = "appkit-container", A0 = "appkit-container_wrap", S0 = "appkit-container_overflow_visible", V0 = "appkit-container_orientation_vertical", F0 = "appkit-container_valign_start", I0 = "appkit-container_valign_center", D0 = "appkit-container_valign_end", T0 = "appkit-container_halign_start", M0 = "appkit-container_halign_center", P0 = "appkit-container_halign_end", N0 = "appkit-container_orientation_horizontal", z0 = "appkit-container_orientation_overlap", Uc = {
  container: E0,
  container_wrap: A0,
  container_overflow_visible: S0,
  container_orientation_vertical: V0,
  container_valign_start: F0,
  container_valign_center: I0,
  container_valign_end: D0,
  "container_valign_space-between": "appkit-container_valign_space-between",
  "container_valign_space-around": "appkit-container_valign_space-around",
  "container_valign_space-evenly": "appkit-container_valign_space-evenly",
  container_halign_start: T0,
  container_halign_center: M0,
  container_halign_end: P0,
  "container_halign_space-between": "appkit-container_halign_space-between",
  "container_halign_space-around": "appkit-container_halign_space-around",
  "container_halign_space-evenly": "appkit-container_halign_space-evenly",
  container_orientation_horizontal: N0,
  container_orientation_overlap: z0,
  "container_fixed-container": "appkit-container_fixed-container",
  "container_responsive-mobile-vertical": "appkit-container_responsive-mobile-vertical",
  "container_responsive-mobile-horizontal": "appkit-container_responsive-mobile-horizontal",
  "container_responsive-mobile-has-height": "appkit-container_responsive-mobile-has-height",
  "container_responsive-tablet-vertical": "appkit-container_responsive-tablet-vertical",
  "container_responsive-tablet-horizontal": "appkit-container_responsive-tablet-horizontal",
  "container_responsive-tablet-has-height": "appkit-container_responsive-tablet-has-height"
};
function Gc(t) {
  return {
    top: Number(t == null ? void 0 : t.top) || 0,
    right: Number(t == null ? void 0 : t.right) || 0,
    bottom: Number(t == null ? void 0 : t.bottom) || 0,
    left: Number(t == null ? void 0 : t.left) || 0
  };
}
function Jc(t, r, e) {
  const n = ((r == null ? void 0 : r.margins.left) || 0) + ((r == null ? void 0 : r.margins.right) || 0), o = ((r == null ? void 0 : r.margins.top) || 0) + ((r == null ? void 0 : r.margins.bottom) || 0);
  r != null && r.show_at_start && (e ? t.top = r.style.height + o : t.left = r.style.width + n), r != null && r.show_at_end && (e ? t.bottom = r.style.height + o : t.right = r.style.width + n);
}
function L0(t, r, e) {
  const n = {};
  return Jc(n, r, t === "vertical"), Jc(n, e, t === "horizontal"), n;
}
function O0({
  orientation: t,
  separator: r,
  lineSeparator: e,
  itemSpacing: n,
  lineSpacing: o
}) {
  let i;
  const s = ((r == null ? void 0 : r.margins.left) || 0) + ((r == null ? void 0 : r.margins.right) || 0), a = ((r == null ? void 0 : r.margins.top) || 0) + ((r == null ? void 0 : r.margins.bottom) || 0), l = ((e == null ? void 0 : e.margins.left) || 0) + ((e == null ? void 0 : e.margins.right) || 0), c = ((e == null ? void 0 : e.margins.top) || 0) + ((e == null ? void 0 : e.margins.bottom) || 0);
  return t === "horizontal" ? i = [
    e != null && e.show_between ? e.style.height + c : o,
    r != null && r.show_between ? r.style.width + s : n
  ] : i = [
    r != null && r.show_between ? r.style.height + a : n,
    e != null && e.show_between ? e.style.width + l : o
  ], i.map(pe).join(" ");
}
function B0(t) {
  var e;
  const r = (e = t.width) == null ? void 0 : e.type;
  return r !== "wrap_content" && r !== "fixed";
}
function R0(t) {
  var e;
  return ((e = t.height) == null ? void 0 : e.type) === "match_parent";
}
function H0(t, r) {
  return t === "vertical" || t === "horizontal" || t === "overlap" ? t : r;
}
function W0(t) {
  var r, e, n;
  return {
    width: en((r = t.item_width) == null ? void 0 : r.value, 10),
    height: en((e = t.item_height) == null ? void 0 : e.value, 10),
    radius: en((n = t.corner_radius) == null ? void 0 : n.value, 5)
  };
}
function U0(t) {
  var e;
  const r = en((e = t.radius) == null ? void 0 : e.value, 10) * 2;
  return {
    width: r,
    height: r,
    radius: r
  };
}
function G0(t, r, e) {
  var l;
  const n = {}, o = r.stroke || (e == null ? void 0 : e.stroke), i = o != null && o.color ? pr(o.color) : "", s = o != null && o.width ? Number((l = o.width) != null ? l : 1) : "";
  n.width = t.width, n.height = t.height, n.borderRadius = t.radius;
  const a = r.background_color || (e == null ? void 0 : e.color);
  return n.background = pr(a), i && s && (n.boxShadow = `inset 0 0 0 ${pe(s)} ${i}`), n;
}
function co(t, r, e) {
  if (!t || !t.shape || !t.shape.type || !r.includes(t.shape.type) || t.type !== "shape_drawable")
    return e;
  let n;
  if (t.shape.type === "rounded_rectangle")
    n = W0(t.shape);
  else if (t.shape.type === "circle")
    n = U0(t.shape);
  else
    return e;
  return G0(n, t.shape, {
    color: t.color,
    stroke: t.stroke
  });
}
let xi;
function qc() {
  if (typeof document > "u" && (xi = !0), xi !== void 0)
    return xi;
  const t = document.createElement("div");
  return t.style.position = "absolute", t.style.display = "flex", t.style.flexDirection = "column", t.style.gap = "1px", t.appendChild(document.createElement("div")), t.appendChild(document.createElement("div")), document.body.appendChild(t), xi = t.scrollHeight === 1, document.body.removeChild(t), xi;
}
function J0(t, r) {
  return t === "top" || t === "center" || t === "bottom" || t === "baseline" || t === "space-between" || t === "space-around" || t === "space-evenly" ? t === "top" ? "start" : t === "bottom" ? "end" : t : r;
}
function q0(t, r, e) {
  return t === "left" || t === "center" || t === "right" || t === "space-between" || t === "space-around" || t === "space-evenly" || t === "start" || t === "end" ? t === "left" ? r === "ltr" ? "start" : "end" : t === "right" ? r === "ltr" ? "end" : "start" : t : e;
}
function K0() {
}
function Go(t) {
  return {
    subscribe(r) {
      return r(t), K0;
    }
  };
}
function yl(t, r, e, n) {
  const o = [], i = n.prototypes;
  return i && t.forEach((s, a) => {
    if (s === null || typeof s != "object")
      return;
    const l = r.preparePrototypeVariables(n.data_element_name || "it", s, a);
    let c, u;
    for (let f = 0; f < i.length; ++f) {
      const _ = i[f];
      if (!_.div)
        continue;
      if (_.selector === void 0) {
        c = _.div, u = e.getJsonWithVars(_.id, l);
        break;
      }
      if (e.getJsonWithVars(_.selector, l)) {
        c = _.div, u = e.getJsonWithVars(_.id, l);
        break;
      }
    }
    c && o.push({
      div: c,
      id: u,
      vars: l,
      key: u || { index: a, data: s }
    });
  }), o;
}
const as = {
  "container-separator": "appkit-container-separator",
  "container-separator__item": "appkit-container-separator__item",
  "container-separator__shape": "appkit-container-separator__shape"
};
function Y0(t, r) {
  let e = 0, n, o = !1;
  return function() {
    const i = Date.now();
    return !e || Math.abs(i - e) > r ? (e = i, n = t.apply(this, arguments)) : (o || (o = !0, setTimeout(() => {
      o = !1, n = t.apply(this, arguments);
    }, r)), n);
  };
}
function X0(t) {
  const r = t.getBoundingClientRect(), e = getComputedStyle(t);
  return {
    top: r.top - parseFloat(e.marginTop),
    right: r.right + parseFloat(e.marginRight),
    bottom: r.bottom + parseFloat(e.marginBottom),
    left: r.left - parseFloat(e.marginLeft)
  };
}
const { window: Z0 } = Po;
function Kc(t, r, e) {
  const n = t.slice();
  return n[16] = r[e], n;
}
function Yc(t) {
  let r, e, n = `${/*item*/
  t[16].style.width}px`, o = `${/*item*/
  t[16].style.height}px`, i = `${/*item*/
  t[16].style.borderRadius}px`, s, a = `${/*item*/
  t[16].left}px`, l = `${/*item*/
  t[16].top}px`, c = `${/*item*/
  t[16].width}px`, u = `${/*item*/
  t[16].height}px`;
  return {
    c() {
      r = Te("div"), e = Te("div"), s = gr(), g(e, "class", as["container-separator__shape"]), F(e, "width", n), F(e, "height", o), F(e, "border-radius", i), F(
        e,
        "background",
        /*item*/
        t[16].style.background
      ), F(
        e,
        "box-shadow",
        /*item*/
        t[16].style.boxShadow
      ), g(r, "class", as["container-separator__item"]), F(r, "left", a), F(r, "top", l), F(r, "width", c), F(r, "height", u);
    },
    m(f, _) {
      q(f, r, _), yt(r, e), yt(r, s);
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
      2 && c !== (c = `${/*item*/
      f[16].width}px`) && F(r, "width", c), _ & /*separators*/
      2 && u !== (u = `${/*item*/
      f[16].height}px`) && F(r, "height", u);
    },
    d(f) {
      f && G(r);
    }
  };
}
function Q0(t) {
  let r, e, n, o = rr(
    /*separators*/
    t[1]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = Yc(Kc(t, o, s));
  return {
    c() {
      r = Te("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      g(r, "class", as["container-separator"]);
    },
    m(s, a) {
      q(s, r, a);
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, null);
      t[13](r), e || (n = Qe(
        Z0,
        "resize",
        /*throttledUpdated*/
        t[2]
      ), e = !0);
    },
    p(s, [a]) {
      if (a & /*separators*/
      2) {
        o = rr(
          /*separators*/
          s[1]
        );
        let l;
        for (l = 0; l < o.length; l += 1) {
          const c = Kc(s, o, l);
          i[l] ? i[l].p(c, a) : (i[l] = Yc(c), i[l].c(), i[l].m(r, null));
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
const x0 = 10;
function Il(t, r, e, n, o, i) {
  const s = r.margins.left, a = r.margins.right, l = r.margins.top, c = r.margins.bottom;
  i ? t.push({
    top: e.bottom + l,
    left: o.left + s,
    width: Math.max(0, o.right - o.left - s - a),
    height: n.top - e.bottom - l - c,
    style: r.style
  }) : t.push({
    top: o.top + l,
    left: e.right + s,
    width: n.left - e.right - s - a,
    height: Math.max(0, o.bottom - o.top - l - c),
    style: r.style
  });
}
function Xc(t, r, e, n, o, i) {
  const s = {
    top: Math.min(...e.map((a) => a.top)),
    right: Math.max(...e.map((a) => a.right)),
    bottom: Math.max(...e.map((a) => a.bottom)),
    left: Math.min(...e.map((a) => a.left))
  };
  if (r != null && r.show_at_start) {
    let a, l;
    o === "space-around" || o === "space-evenly" ? (a = i.left - r.style.width, l = i.top - r.style.height) : (a = e[0].left - r.style.width - r.margins.left - r.margins.right, l = e[0].top - r.style.height - r.margins.top - r.margins.bottom), Il(
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
      Il(t, r, e[a], e[a + 1], s, n);
  if (r != null && r.show_at_end) {
    const a = e[e.length - 1];
    let l, c;
    o === "space-around" || o === "space-evenly" ? (l = i.bottom + r.style.height, c = i.right + r.style.width) : (l = a.bottom + r.style.height + r.margins.top + r.margins.bottom, c = a.right + r.style.width + r.margins.left + r.margins.right), Il(
      t,
      r,
      a,
      // only top and left is used
      { top: l, right: 0, bottom: 0, left: c },
      s,
      n
    );
  }
}
function $0(t, r, e) {
  let n, { orientation: o } = r, { separator: i } = r, { lineSeparator: s } = r, { contentHAlign: a } = r, { contentVAlign: l } = r, { direction: c } = r;
  const u = Y0(k, x0);
  let f = [], _, h = !1, m = null, p = null;
  function w(H) {
    H.some((O) => {
      var fe;
      const oe = (fe = O.target) == null ? void 0 : fe.classList;
      return !(oe != null && oe.contains(as["container-separator__shape"])) && !(oe != null && oe.contains(as["container-separator"]));
    }) && u();
  }
  function k() {
    if (!n)
      return;
    const H = n.getBoundingClientRect(), O = window.getComputedStyle(n), oe = {
      top: H.top + parseFloat(O.paddingTop),
      right: H.right - parseFloat(O.paddingRight),
      bottom: H.bottom - parseFloat(O.paddingBottom),
      left: H.left + parseFloat(O.paddingLeft)
    };
    e(1, f = []);
    let fe = [...n.children].filter((ce) => ce !== _ && ce instanceof HTMLElement && !ce.classList.contains(Ks.outer__border) && getComputedStyle(ce).display !== "none"), T = [];
    for (; fe.length; ) {
      const ce = [], C = fe.shift();
      ce.push(C);
      let D = C.getBoundingClientRect(), M = D.left, W = D.right, Q = D.bottom;
      for (; fe.length; ) {
        let me = fe[0], Ae = me.getBoundingClientRect();
        if (o === "vertical") {
          if (Ae.top < Q)
            break;
        } else if (c === "ltr" ? Ae.left < W : Ae.right > M)
          break;
        W = Math.max(W, Ae.right), M = Math.min(M, Ae.left), Q = Math.max(Q, Ae.bottom), ce.push(me), fe.shift();
      }
      T.push(ce);
    }
    const Z = [];
    T.forEach((ce) => {
      const C = ce.map((M) => X0(M));
      c === "rtl" && o === "horizontal" && C.reverse(), i && Xc(
        f,
        i,
        C,
        o === "vertical",
        o === "vertical" ? l : a,
        oe
      );
      const D = {
        top: Math.min(...C.map((M) => M.top)),
        right: Math.max(...C.map((M) => M.right)),
        bottom: Math.max(...C.map((M) => M.bottom)),
        left: Math.min(...C.map((M) => M.left))
      };
      Z.push(D);
    }), c === "rtl" && o === "vertical" && Z.reverse(), s && Xc(
      f,
      s,
      Z,
      o === "horizontal",
      o === "vertical" ? a : l,
      oe
    ), f.forEach((ce) => {
      ce.top -= H.top, ce.left -= H.left;
    });
  }
  xn(() => {
    e(9, h = !0);
  }), sn(() => {
    e(9, h = !1);
  });
  function z(H) {
    Fr[H ? "unshift" : "push"](() => {
      _ = H, e(0, _);
    });
  }
  return t.$$set = (H) => {
    "orientation" in H && e(3, o = H.orientation), "separator" in H && e(4, i = H.separator), "lineSeparator" in H && e(5, s = H.lineSeparator), "contentHAlign" in H && e(6, a = H.contentHAlign), "contentVAlign" in H && e(7, l = H.contentVAlign), "direction" in H && e(8, c = H.direction);
  }, t.$$.update = () => {
    t.$$.dirty & /*node*/
    1 && e(12, n = (_ == null ? void 0 : _.parentElement) || null), t.$$.dirty & /*mounted, parentElement, mutationObserver, resizeObserver*/
    7680 && (h && n || m || p) && (m && (m.disconnect(), e(10, m = null)), p && (p.disconnect(), e(11, p = null)), h && n && (typeof MutationObserver < "u" && (e(10, m = new MutationObserver(w)), m.observe(n, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    })), typeof ResizeObserver < "u" && (e(11, p = new ResizeObserver(u)), p.observe(n)))), t.$$.dirty & /*mounted, parentElement*/
    4608 && h && n && u();
  }, [
    _,
    f,
    u,
    o,
    i,
    s,
    a,
    l,
    c,
    h,
    m,
    p,
    n,
    z
  ];
}
class e1 extends Or {
  constructor(r) {
    super(), Lr(this, r, $0, Q0, Sr, {
      orientation: 3,
      separator: 4,
      lineSeparator: 5,
      contentHAlign: 6,
      contentVAlign: 7,
      direction: 8
    });
  }
}
const { Boolean: t1 } = Po;
function Zc(t, r, e) {
  const n = t.slice();
  return n[63] = r[e], n;
}
function Qc(t) {
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function xc(t) {
  let r, e;
  return r = new e1({
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function r1(t) {
  let r, e, n, o = rr(
    /*items*/
    t[9]
  ), i = [];
  for (let l = 0; l < o.length; l += 1)
    i[l] = Qc(Zc(t, o, l));
  const s = (l) => x(i[l], 1, 1, () => {
    i[l] = null;
  });
  let a = (
    /*separator*/
    (t[5] || /*lineSeparator*/
    t[6]) && xc(t)
  );
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      r = gr(), a && a.c(), e = Kt();
    },
    m(l, c) {
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(l, c);
      q(l, r, c), a && a.m(l, c), q(l, e, c), n = !0;
    },
    p(l, c) {
      if (c[0] & /*items, childLayoutParams*/
      768) {
        o = rr(
          /*items*/
          l[9]
        );
        let u;
        for (u = 0; u < o.length; u += 1) {
          const f = Zc(l, o, u);
          i[u] ? (i[u].p(f, c), L(i[u], 1)) : (i[u] = Qc(f), i[u].c(), L(i[u], 1), i[u].m(r.parentNode, r));
        }
        for (ir(), u = o.length; u < i.length; u += 1)
          s(u);
        sr();
      }
      /*separator*/
      l[5] || /*lineSeparator*/
      l[6] ? a ? (a.p(l, c), c[0] & /*separator, lineSeparator*/
      96 && L(a, 1)) : (a = xc(l), a.c(), L(a, 1), a.m(e.parentNode, e)) : a && (ir(), x(a, 1, 1, () => {
        a = null;
      }), sr());
    },
    i(l) {
      if (!n) {
        for (let c = 0; c < o.length; c += 1)
          L(i[c]);
        L(a), n = !0;
      }
    },
    o(l) {
      i = i.filter(t1);
      for (let c = 0; c < i.length; c += 1)
        x(i[c]);
      x(a), n = !1;
    },
    d(l) {
      l && (G(r), G(e)), on(i, l), a && a.d(l);
    }
  };
}
function n1(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "container",
        Uc,
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
      $$slots: { default: [r1] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = ht(
        "container",
        Uc,
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
      zt(r, n);
    }
  };
}
const o1 = {
  start: "start",
  center: "center",
  end: "end",
  // 'space-*' values doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, i1 = {
  start: "start",
  center: "center",
  end: "end",
  baseline: "baseline",
  // 'space-*' doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, $c = ["rounded_rectangle", "circle"];
function s1(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, z, H, O, oe, fe, T, Z, ce, C, D, M = j, W = () => (M(), M = S(k, (ft) => e(45, D = ft)), k), Q, me = j, Ae = () => (me(), me = S(H, (ft) => e(46, Q = ft)), H), Ce, he = j, Ve = () => (he(), he = S(z, (ft) => e(47, Ce = ft)), z), re, $e = j, Ge = () => ($e(), $e = S(w, (ft) => e(48, re = ft)), w), Je, ke = j, De = () => (ke(), ke = S(p, (ft) => e(49, Je = ft)), p), ue, ae = j, de = () => (ae(), ae = S(m, (ft) => e(50, ue = ft)), m), ee, ge = j, ie = () => (ge(), ge = S(f, (ft) => e(51, ee = ft)), f), Se, He = j, We = () => (He(), He = S(u, (ft) => e(52, Se = ft)), u), te, Oe = j, Pe = () => (Oe(), Oe = S(h, (ft) => e(53, te = ft)), h), nt, st = j, et = () => (st(), st = S(_, (ft) => e(54, nt = ft)), _), wt, rt, Pt = j, ct = () => (Pt(), Pt = S(c, (ft) => e(55, rt = ft)), c), X, _e = j, lt = () => (_e(), _e = S(l, (ft) => e(56, X = ft)), l), Fe, I = j, jt = () => (I(), I = S(xe, (ft) => e(57, Fe = ft)), xe), _t, At = j, Dt = () => (At(), At = S(a, (ft) => e(58, _t = ft)), a), ot, K = j, Mt = () => (K(), K = S(s, (ft) => e(59, ot = ft)), s), Vt, Jt = j, qt = () => (Jt(), Jt = S(i, (ft) => e(60, Vt = ft)), i);
  t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => $e()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => He()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => st()), t.$$.on_destroy.push(() => Pt()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => At()), t.$$.on_destroy.push(() => K()), t.$$.on_destroy.push(() => Jt());
  let { componentContext: be } = r, { layoutParams: Ke = void 0 } = r;
  const pt = Ir(Kr), we = pt.direction;
  yn(t, we, (ft) => e(10, wt = ft));
  let xe, Be = "vertical", nr = "start", Ne = "start", bt = null, Ft = null, It, hr = {}, ze = 0, kt = 0, lr = !1;
  function er() {
    e(2, Be = "vertical"), e(3, nr = "start"), e(4, Ne = "start"), e(7, It = void 0), e(32, ze = 0), e(33, kt = 0), e(34, lr = !1);
  }
  function Xt(ft) {
    e(0, be = e(35, vr = {
      ...be,
      json: {
        ...be.json,
        items: ft.filter(zo)
      }
    }));
  }
  let mr = [], vr, xt = {}, $t, J;
  return sn(() => {
    mr.forEach((ft) => {
      ft.destroy();
    });
  }), t.$$set = (ft) => {
    "componentContext" in ft && e(0, be = ft.componentContext), "layoutParams" in ft && e(1, Ke = ft.layoutParams);
  }, t.$$.update = () => {
    var ft, Gt, Et, br, Er, wr, Dr, zr, tr, at, vt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(44, n = be.origJson), t.$$.dirty[1] & /*origJson*/
    8192 && n && er(), t.$$.dirty[0] & /*componentContext*/
    1 && e(43, o = be.json.items), t.$$.dirty[0] & /*componentContext*/
    1 && qt(e(29, i = typeof ((ft = be.json.item_builder) == null ? void 0 : ft.data) == "string" ? be.getDerivedFromVars((Gt = be.json.item_builder) == null ? void 0 : Gt.data, void 0, !0) : (Et = be.json.item_builder) != null && Et.data ? Go(be.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && Mt(e(28, s = be.getDerivedFromVars(be.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(27, a = be.getDerivedFromVars(be.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && lt(e(26, l = be.getDerivedFromVars(be.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(25, c = be.getDerivedFromVars(be.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && We(e(24, u = be.getDerivedFromVars(be.json.separator))), t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(23, f = be.getDerivedFromVars(be.json.line_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(22, _ = be.getDerivedFromVars(be.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Pe(e(21, h = be.getDerivedFromVars(be.json.line_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(20, m = be.getDerivedFromVars(be.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(19, p = be.getDerivedFromVars(be.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(18, w = be.getDerivedFromVars(be.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && W(e(17, k = be.getDerivedFromVars(be.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && Ve(e(16, z = be.getDerivedFromVars(be.json.max_width))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(15, H = be.getDerivedFromVars(be.json.responsive))), t.$$.dirty[0] & /*componentContext, items*/
    513 | t.$$.dirty[1] & /*$jsonItemBuilderData, jsonItems, prevContext*/
    536875024) {
      let Zt = [];
      if (be.json.item_builder && Array.isArray(Vt) && Array.isArray(be.json.item_builder.prototypes)) {
        const se = be.json.item_builder;
        Zt = yl(Vt, pt, be, se);
      } else
        Zt = (Array.isArray(o) && o || []).map((se, mt) => ({
          div: se,
          key: se.id || { index: mt, data: se }
        }));
      const Yt = new Set(mr), _r = /* @__PURE__ */ new Map();
      let ut = !1;
      vr === be && mr.forEach((se) => {
        se.key && (typeof se.key == "string" && _r.has(se.key) ? ut || (ut = !0, be.logError(Y(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: se.key } }))) : _r.set(
          typeof se.key == "string" ? se.key : se.key.index,
          se
        ));
      }), e(9, mr = Zt.map((se, mt) => {
        let or = !ut && _r.get(se.id), yr = _r.get(mt);
        return !or && !se.id && typeof se.key == "object" && typeof (yr == null ? void 0 : yr.key) == "object" && Ji(yr.key.data, se.key.data) && (or = yr), or ? (Yt.delete(or), or) : be.produceChildContext(se.div, {
          path: mt,
          variables: se.vars,
          id: se.id,
          key: se.key
        });
      }));
      for (const se of Yt)
        se.destroy();
      e(35, vr = be);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    513) {
      let Zt = [];
      mr.forEach((Yt) => {
        Zt.push(be.getDerivedFromVars({
          width: Yt.json.width,
          height: Yt.json.height
        }));
      }), jt(e(11, xe = Gi(Zt, (Yt) => [...Yt])));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonOrientation*/
    268435456 && e(2, Be = H0(ot, Be)), t.$$.dirty[1] & /*$jsonLayoutMode*/
    134217728 && e(38, O = _t === "wrap"), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(42, oe = Be !== "horizontal" && !O), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(41, fe = Be !== "vertical" && !O), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(40, T = Be === "overlap" && !Fe.every(B0)), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(39, Z = Be === "overlap" && !Fe.every(R0)), t.$$.dirty[0] & /*contentVAlign*/
    8 | t.$$.dirty[1] & /*$jsonContentVAlign*/
    33554432 && e(3, nr = J0(X, nr)), t.$$.dirty[0] & /*$direction, contentHAlign*/
    1040 | t.$$.dirty[1] & /*$jsonContentHAlign*/
    16777216 && e(4, Ne = q0(rt, wt, Ne)), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    8388610 && e(32, ze = en(nt, ze)), t.$$.dirty[1] & /*$jsonLineSpacing, lineSpacing*/
    4194308 && e(33, kt = en(te, kt)), t.$$.dirty[0] & /*orientation, separator, componentContext*/
    37 | t.$$.dirty[1] & /*$jsonSeparator, itemSpacing*/
    2097154)
      if (Se != null && Se.style && Be !== "overlap" && qc()) {
        const Zt = co(Se.style, $c, (bt == null ? void 0 : bt.style) || null);
        Zt ? (e(5, bt = {
          show_at_start: !!((br = Se.show_at_start) != null && br),
          show_at_end: !!((Er = Se.show_at_end) != null && Er),
          show_between: !!((wr = Se.show_between) == null || wr),
          style: Zt,
          margins: Gc(Se.margins)
        }), bt.show_between && ze && be.logError(Y(new Error("item_spacing will be ignored due to the 'separator' property."), { level: "warn" }))) : e(5, bt = null);
      } else
        e(5, bt = null);
    if (t.$$.dirty[0] & /*orientation, lineSeparator, componentContext*/
    69 | t.$$.dirty[1] & /*$jsonLineSeparator, lineSpacing*/
    1048580)
      if (ee != null && ee.style && Be !== "overlap" && qc()) {
        const Zt = co(ee.style, $c, (Ft == null ? void 0 : Ft.style) || null);
        Zt ? (e(6, Ft = {
          show_at_start: !!((Dr = ee.show_at_start) != null && Dr),
          show_at_end: !!((zr = ee.show_at_end) != null && zr),
          show_between: !!((tr = ee.show_between) == null || tr),
          style: Zt,
          margins: Gc(ee.margins)
        }), Ft.show_between && kt && be.logError(Y(new Error("line_spacing will be ignored due to the 'line_separator' property."), { level: "warn" }))) : e(6, Ft = null);
      } else
        e(6, Ft = null);
    if (t.$$.dirty[0] & /*separator, lineSeparator, orientation*/
    100 && e(14, ce = bt || Ft ? L0(Be, bt, Ft) : null), t.$$.dirty[1] & /*$jsonAspect*/
    524288) {
      const Zt = ue == null ? void 0 : ue.ratio;
      Zt && zn(Zt) ? e(7, It = Zt) : e(7, It = void 0);
    }
    if (t.$$.dirty[0] & /*orientation, contentHAlign, contentVAlign, layoutParams, aspect, childLayoutParams*/
    414 | t.$$.dirty[1] & /*wrap, $jsonWidth, $jsonHeight, supportWidthWrapContent, supportHeightWrapContent, stretchWidth, stretchHeight*/
    397184) {
      let Zt = {};
      Be === "overlap" && (Zt.overlapParent = !0), Be !== "horizontal" && (Zt.parentHAlign = O ? "start" : o1[Ne]), Be !== "vertical" && (Zt.parentVAlign = O ? "start" : i1[nr]);
      const Yt = (Je == null ? void 0 : Je.type) === "wrap_content" || (Je == null ? void 0 : Je.type) === "match_parent" && (Ke == null ? void 0 : Ke.parentHorizontalWrapContent), _r = !re || re.type === "wrap_content" || re.type === "match_parent" && (Ke == null ? void 0 : Ke.parentVerticalWrapContent);
      !oe && Yt && (Zt.parentHorizontalWrapContent = !0), !It && !fe && _r && (Zt.parentVerticalWrapContent = !0), Yt || (Zt.parentContainerKnownWidth = !0), _r || (Zt.parentContainerKnownHeight = !0), Zt.stretchWidth = T, Zt.stretchHeight = Z, Be === "horizontal" && (Zt.parentContainerOrientation = "horizontal"), Be === "vertical" && (Zt.parentContainerOrientation = "vertical"), O && (Zt.parentContainerWrap = !0), e(8, hr = Qo(Zt, hr));
    }
    if (t.$$.dirty[1] & /*$jsonMaxWidth*/
    65536 && e(34, lr = (Ce == null ? void 0 : Ce.type) === "fixed"), t.$$.dirty[0] & /*orientation, contentVAlign, contentHAlign*/
    28 | t.$$.dirty[1] & /*$jsonResponsive, wrap, $jsonClipToBounds, isFixedContainer, responsiveMobileHeight, responsiveTabletHeight*/
    49384) {
      let Zt, Yt;
      if (e(36, $t = void 0), e(37, J = void 0), Q) {
        const _r = Q == null ? void 0 : Q.mobile, ut = Q == null ? void 0 : Q.tablet;
        if (_r != null && _r.orientation && (Zt = String(_r.orientation)), ut != null && ut.orientation && (Yt = String(ut.orientation)), ((at = _r == null ? void 0 : _r.height) == null ? void 0 : at.type) === "fixed" && _r.height.value !== void 0) {
          const se = en(_r.height.value, 0);
          e(36, $t = se > 0 ? se : void 0);
        }
        if (((vt = ut == null ? void 0 : ut.height) == null ? void 0 : vt.type) === "fixed" && ut.height.value !== void 0) {
          const se = en(ut.height.value, 0);
          e(37, J = se > 0 ? se : void 0);
        }
      }
      e(12, xt = {
        orientation: Be,
        valign: nr,
        halign: Ne,
        wrap: O,
        overflow: D === !1 || D === 0 ? "visible" : void 0,
        "fixed-container": lr,
        "responsive-mobile-vertical": Zt === "vertical",
        "responsive-mobile-horizontal": Zt === "horizontal",
        "responsive-tablet-vertical": Yt === "vertical",
        "responsive-tablet-horizontal": Yt === "horizontal",
        "responsive-mobile-has-height": $t !== void 0,
        "responsive-tablet-has-height": J !== void 0
      });
    }
    t.$$.dirty[0] & /*separator, lineSeparator, orientation, aspect*/
    228 | t.$$.dirty[1] & /*itemSpacing, lineSpacing, responsiveMobileHeight, responsiveTabletHeight*/
    102 && e(13, C = {
      gap: bt || Ft || ze || kt ? O0({
        orientation: Be,
        separator: bt,
        lineSeparator: Ft,
        itemSpacing: ze,
        lineSpacing: kt
      }) : void 0,
      "aspect-ratio": It,
      "--responsive-mobile-height": $t !== void 0 ? pe($t) : void 0,
      "--responsive-tablet-height": J !== void 0 ? pe(J) : void 0
    });
  }, [
    be,
    Ke,
    Be,
    nr,
    Ne,
    bt,
    Ft,
    It,
    hr,
    mr,
    wt,
    xe,
    xt,
    C,
    ce,
    H,
    z,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    we,
    Xt,
    ze,
    kt,
    lr,
    vr,
    $t,
    J,
    O,
    Z,
    T,
    fe,
    oe,
    o,
    n,
    D,
    Q,
    Ce,
    re,
    Je,
    ue,
    ee,
    Se,
    te,
    nt,
    rt,
    X,
    Fe,
    _t,
    ot,
    Vt
  ];
}
class l1 extends Or {
  constructor(r) {
    super(), Lr(this, r, s1, n1, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const a1 = "appkit-separator", c1 = "appkit-separator_orientation_horizontal", u1 = "appkit-separator_orientation_vertical", f1 = "appkit-separator__inner", xl = {
  separator: a1,
  separator_orientation_horizontal: c1,
  separator_orientation_vertical: u1,
  separator__inner: f1
};
function ka(t, r) {
  return t === "vertical" || t === "horizontal" ? t : r;
}
function eu(t) {
  let r, e;
  return {
    c() {
      r = Te("span"), g(r, "class", xl.separator__inner), g(r, "style", e = dr(
        /*style*/
        t[3]
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o & /*style*/
      8 && e !== (e = dr(
        /*style*/
        n[3]
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function d1(t) {
  let r, e = (
    /*hasContent*/
    t[4] && eu(t)
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
      n[4] ? e ? e.p(n, o) : (e = eu(n), e.c(), e.m(r.parentNode, r)) : e && (e.d(1), e = null);
    },
    d(n) {
      n && G(r), e && e.d(n);
    }
  };
}
function _1(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "separator",
        xl,
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
      $$slots: { default: [d1] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, [o]) {
      const i = {};
      o & /*mods*/
      4 && (i.cls = ht(
        "separator",
        xl,
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
      zt(r, n);
    }
  };
}
function p1(t, r, e) {
  let n, o, i, s, a, l, c, u, f = j, _ = () => (f(), f = S(o, (z) => e(11, u = z)), o);
  t.$$.on_destroy.push(() => f());
  let { componentContext: h } = r, { layoutParams: m = void 0 } = r, p = "horizontal", w = "rgba(0,0,0,0.08)";
  function k() {
    e(6, p = "horizontal"), e(7, w = "rgba(0,0,0,0.08)");
  }
  return t.$$set = (z) => {
    "componentContext" in z && e(0, h = z.componentContext), "layoutParams" in z && e(1, m = z.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(10, n = h.origJson), t.$$.dirty & /*origJson*/
    1024 && n && k(), t.$$.dirty & /*componentContext*/
    1 && _(e(5, o = h.getDerivedFromVars(h.json.delimiter_style))), t.$$.dirty & /*$jsonDelimiterStyle, orientation*/
    2112 && e(6, p = ka(u == null ? void 0 : u.orientation, p)), t.$$.dirty & /*$jsonDelimiterStyle*/
    2048 && e(4, i = !(u != null && u.color && (u.color === "transparent" || u.color.length === 9 && u.color.indexOf("#00") === 0))), t.$$.dirty & /*$jsonDelimiterStyle, background*/
    2176 && e(7, w = pr(u == null ? void 0 : u.color, 1, w)), t.$$.dirty & /*orientation*/
    64 && e(9, s = p === "horizontal" ? "100%" : pe(1)), t.$$.dirty & /*orientation*/
    64 && e(8, a = p === "horizontal" ? pe(1) : "100%"), t.$$.dirty & /*background, width, height*/
    896 && e(3, l = { background: w, width: s, height: a }), t.$$.dirty & /*orientation*/
    64 && e(2, c = { orientation: p });
  }, [
    h,
    m,
    c,
    l,
    i,
    o,
    p,
    w,
    a,
    s,
    n,
    u
  ];
}
class g1 extends Or {
  constructor(r) {
    super(), Lr(this, r, p1, _1, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const h1 = "appkit-image", m1 = "appkit-image__image", b1 = "appkit-image_error", y1 = "appkit-image_aspect", w1 = "appkit-image_loaded", $l = {
  image: h1,
  "image_is-width-content": "appkit-image_is-width-content",
  "image_is-height-content": "appkit-image_is-height-content",
  image__image: m1,
  image_error: b1,
  "image_is-rtl-mirror": "appkit-image_is-rtl-mirror",
  image_aspect: y1,
  "image_aspect-content": "appkit-image_aspect-content",
  image_loaded: w1,
  "divkit-image-appearance": "appkit-divkit-image-appearance",
  "image_before-appearance": "appkit-image_before-appearance"
};
function k1(t, r, e) {
  const n = t.content_alignment_horizontal, o = t.content_alignment_vertical;
  return n && n !== "left" && n !== "center" && n !== "right" && n !== "start" && n !== "end" || o && o !== "top" && o !== "center" && o !== "bottom" ? e : Bd({
    content_alignment_horizontal: n,
    content_alignment_vertical: o
  }, r);
}
function Jd(t) {
  return t.startsWith("data:") ? Yl(t) : `data:image/jpg;base64,${Yl(t)}`;
}
function v1(t, r, e) {
  let { componentContext: n } = r;
  const o = Ir(Kr);
  let i = null;
  function s() {
    i && i.update(n);
  }
  return xn(() => {
    n.fakeElement || (i = Rd(null, o, n));
  }), fl(s), sn(() => {
    i && i.destroy();
  }), t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext);
  }, [n];
}
class Mn extends Or {
  constructor(r) {
    super(), Lr(this, r, v1, null, Sr, { componentContext: 0 });
  }
}
function j1(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function C1(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "image",
        $l,
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
          E1,
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
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = ht(
        "image",
        $l,
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
      zt(r, n);
    }
  };
}
function tu(t) {
  let r, e, n, o, i, s, a, l;
  return {
    c() {
      r = Te("img"), g(r, "class", $l.image__image), Qn(r.src, e = /*state*/
      t[2] === rs ? ea : (
        /*imageUrl*/
        t[3]
      )) || g(r, "src", e), g(r, "loading", n = /*$jsonPreloadRequired*/
      t[31] || /*highPrority*/
      t[10] ? "eager" : "lazy"), g(r, "decoding", o = /*highPrority*/
      t[10] ? "sync" : "async"), g(r, "style", i = dr({
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
    m(c, u) {
      q(c, r, u), t[70](r), a || (l = [
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
    p(c, u) {
      u[0] & /*state, imageUrl*/
      12 && !Qn(r.src, e = /*state*/
      c[2] === rs ? ea : (
        /*imageUrl*/
        c[3]
      )) && g(r, "src", e), u[0] & /*highPrority*/
      1024 | u[1] & /*$jsonPreloadRequired*/
      1 && n !== (n = /*$jsonPreloadRequired*/
      c[31] || /*highPrority*/
      c[10] ? "eager" : "lazy") && g(r, "loading", n), u[0] & /*highPrority*/
      1024 && o !== (o = /*highPrority*/
      c[10] ? "sync" : "async") && g(r, "decoding", o), u[0] & /*style, isWidthContent, isHeightContent*/
      2240 | u[2] & /*widthMin, widthMax, heightMin, heightMax*/
      122880 && i !== (i = dr({
        .../*style*/
        c[11],
        "min-width": (
          /*isWidthContent*/
          c[7] ? (
            /*widthMin*/
            c[75]
          ) : void 0
        ),
        "max-width": (
          /*isWidthContent*/
          c[7] ? (
            /*widthMax*/
            c[76]
          ) : void 0
        ),
        "min-height": (
          /*isHeightContent*/
          c[6] ? (
            /*heightMin*/
            c[77]
          ) : void 0
        ),
        "max-height": (
          /*isHeightContent*/
          c[6] ? (
            /*heightMax*/
            c[78]
          ) : void 0
        )
      })) && g(r, "style", i), u[0] & /*alt*/
      8192 && g(
        r,
        "alt",
        /*alt*/
        c[13]
      ), u[0] & /*alt*/
      8192 && s !== (s = /*alt*/
      c[13] ? null : "true") && g(r, "aria-hidden", s);
    },
    d(c) {
      c && G(r), t[70](null), a = !1, Jr(l);
    }
  };
}
function E1(t) {
  let r = (
    /*svgFilterId*/
    t[5]
  ), e, n = tu(t);
  return {
    c() {
      n.c(), e = Kt();
    },
    m(o, i) {
      n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      i[0] & /*svgFilterId*/
      32 && Sr(r, r = /*svgFilterId*/
      o[5]) ? (n.d(1), n = tu(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && G(e), n.d(o);
    }
  };
}
function A1(t) {
  let r, e, n, o;
  const i = [C1, j1], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[9] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (ir(), x(s[u], 1, 1, () => {
        s[u] = null;
      }), sr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
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
const ea = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", S1 = "empty://", V1 = "rgba(0,0,0,0.08)", ai = 0, Dl = 1, rs = 2, ru = /\.gif($|\?)/i, F1 = "data:image/gif", nu = 'A Gif image was used for the "Image" component. The animation will be played on the web platform, but it does not match the behavior of other platforms.';
function I1(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, z, H, O, oe, fe, T, Z, ce, C, D = j, M = () => (D(), D = S(z, (ut) => e(53, C = ut)), z), W, Q, me = j, Ae = () => (me(), me = S(k, (ut) => e(55, Q = ut)), k), Ce, he = j, Ve = () => (he(), he = S(w, (ut) => e(56, Ce = ut)), w), re, $e = j, Ge = () => ($e(), $e = S(p, (ut) => e(57, re = ut)), p), Je, ke = j, De = () => (ke(), ke = S(_, (ut) => e(58, Je = ut)), _), ue, ae = j, de = () => (ae(), ae = S(m, (ut) => e(59, ue = ut)), m), ee, ge = j, ie = () => (ge(), ge = S(h, (ut) => e(60, ee = ut)), h), Se, He = j, We = () => (He(), He = S(f, (ut) => e(61, Se = ut)), f), te, Oe = j, Pe = () => (Oe(), Oe = S(u, (ut) => e(62, te = ut)), u), nt, st = j, et = () => (st(), st = S(c, (ut) => e(63, nt = ut)), c), wt, rt = j, Pt = () => (rt(), rt = S(l, (ut) => e(64, wt = ut)), l), ct, X = j, _e = () => (X(), X = S(a, (ut) => e(65, ct = ut)), a), lt, Fe = j, I = () => (Fe(), Fe = S(s, (ut) => e(66, lt = ut)), s), jt, _t = j, At = () => (_t(), _t = S(O, (ut) => e(67, jt = ut)), O), Dt, ot = j, K = () => (ot(), ot = S(o, (ut) => e(68, Dt = ut)), o), Mt, Vt = j, Jt = () => (Vt(), Vt = S(i, (ut) => e(69, Mt = ut)), i), qt, be = j, Ke = () => (be(), be = S(H, (ut) => e(31, qt = ut)), H);
  t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => $e()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => He()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => st()), t.$$.on_destroy.push(() => rt()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => Fe()), t.$$.on_destroy.push(() => _t()), t.$$.on_destroy.push(() => ot()), t.$$.on_destroy.push(() => Vt()), t.$$.on_destroy.push(() => be());
  let { componentContext: pt } = r, { layoutParams: we = void 0 } = r;
  const xe = Ir(Kr), Be = xe.direction;
  yn(t, Be, (ut) => e(54, W = ut));
  let nr, Ne = ai, bt = !1, Ft = V1, It = !1, hr, ze = "", kt = "none", lr = "50% 50%", er = !1, Xt = "center", mr, vr, xt = "source_in", $t = "", J = "", ft = 0, Gt = 0, Et = 0, br = "", Er = "", wr = !1, Dr = !1, zr = !1;
  function tr() {
    e(4, mr = void 0), e(40, er = !1), e(38, kt = "none"), e(39, lr = "50% 50%"), e(43, xt = "source_in"), e(51, Dr = !1), e(10, zr = !1);
  }
  function at(ut) {
    e(2, Ne = ai);
  }
  function vt(ut) {
    e(39, lr = k1(ut, W, lr));
  }
  function Zt() {
    Ne === ai && e(2, Ne = Dl);
  }
  function Yt() {
    Ne === ai && e(2, Ne = rs);
  }
  sn(() => {
    xe.removeSvgFilter(vr, xt);
  });
  function _r(ut) {
    Fr[ut ? "unshift" : "push"](() => {
      nr = ut, e(8, nr);
    });
  }
  return t.$$set = (ut) => {
    "componentContext" in ut && e(0, pt = ut.componentContext), "layoutParams" in ut && e(1, we = ut.layoutParams);
  }, t.$$.update = () => {
    var ut;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(52, n = pt.origJson), t.$$.dirty[1] & /*origJson*/
    2097152 && n && tr(), t.$$.dirty[0] & /*componentContext*/
    1 && K(e(30, o = pt.getDerivedFromVars(pt.json.image_url))), t.$$.dirty[0] & /*componentContext*/
    1 && Jt(e(29, i = pt.getDerivedFromVars(pt.json.gif_url))), t.$$.dirty[0] & /*componentContext*/
    1 && I(e(28, s = pt.getDerivedFromVars(pt.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(27, a = pt.getDerivedFromVars(pt.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && Pt(e(26, l = pt.getDerivedFromVars(pt.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(25, c = pt.getDerivedFromVars(pt.json.preview_url))), t.$$.dirty[0] & /*componentContext*/
    1 && Pe(e(24, u = pt.getDerivedFromVars(pt.json.placeholder_color))), t.$$.dirty[0] & /*componentContext*/
    1 && We(e(23, f = pt.getDerivedFromVars(pt.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(22, _ = pt.getDerivedFromVars({
      content_alignment_horizontal: pt.json.content_alignment_horizontal,
      content_alignment_vertical: pt.json.content_alignment_vertical
    }))), t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(21, h = pt.getDerivedFromVars(pt.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(20, m = pt.getDerivedFromVars(pt.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(19, p = pt.getDerivedFromVars(pt.json.tint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ve(e(18, w = pt.getDerivedFromVars(pt.json.tint_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(17, k = pt.getDerivedFromVars(pt.json.appearance_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(16, z = pt.getDerivedFromVars(pt.json.filters))), t.$$.dirty[0] & /*componentContext*/
    1 && Ke(e(15, H = pt.getDerivedFromVars(pt.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && At(e(14, O = pt.getDerivedFromVars(pt.json.high_priority_preview_show))), t.$$.dirty[0] & /*componentContext, imageUrl*/
    9 | t.$$.dirty[1] & /*isEmpty*/
    16 | t.$$.dirty[2] & /*$jsonGifUrl, $jsonImageUrl*/
    192) {
      const se = pt.json.type === "gif";
      let mt = se ? Mt : Dt;
      e(35, bt = mt === S1), bt && (mt = ea), e(3, hr = mt), !se && hr && ru.test(hr) && pt.logError(Y(new Error(nu), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*imageUrl*/
    8 && at(), t.$$.dirty[1] & /*highPriorityPreview*/
    1048576 | t.$$.dirty[2] & /*$jsonHighPriorityPreviewShow*/
    32 && e(51, Dr = nn(jt, Dr)), t.$$.dirty[0] & /*imageUrl, componentContext*/
    9 && (hr ? e(9, It = !1) : (e(9, It = !0), pt.logError(Y(new Error(`Missing "${pt.json.type === "gif" ? "gif_url" : "image_url"}" for "${pt.json.type}"`))))), t.$$.dirty[2] & /*$jsonWidth*/
    16 && e(7, oe = (lt == null ? void 0 : lt.type) === "wrap_content"), t.$$.dirty[2] & /*$jsonHeight*/
    8 && e(6, fe = (ct == null ? void 0 : ct.type) === "wrap_content"), t.$$.dirty[0] & /*componentContext, state*/
    5 | t.$$.dirty[1] & /*isEmpty, highPriorityPreview*/
    1048592 | t.$$.dirty[2] & /*$jsonPreview, $jsonPreviewUrl*/
    6) {
      const se = pt.json.type === "gif", mt = wt, or = nt;
      (Ne === ai || Ne === rs || bt) && (mt || or) ? (e(37, ze = `url("${or || Jd(mt || "")}")`), e(10, zr = Dr)) : (e(37, ze = ""), e(10, zr = !1)), !se && (or && ru.test(or) || mt && mt.startsWith(F1)) && pt.logError(Y(new Error(nu), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*state*/
    4 | t.$$.dirty[1] & /*isEmpty, placeholderColor*/
    48 | t.$$.dirty[2] & /*$jsonPlaceholderColor*/
    1 && (Ne === ai || Ne === rs || bt ? e(36, Ft = pr(te, 1, Ft)) : e(36, Ft = "")), t.$$.dirty[1] & /*$jsonScale, scale*/
    1073741952 && e(38, kt = Od(Se) || kt), t.$$.dirty[1] & /*$jsonPosition*/
    134217728 && vt(Je), t.$$.dirty[1] & /*$jsonA11y*/
    536870912 && e(13, T = (ee == null ? void 0 : ee.description) || ""), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAspect, aspectContent, $jsonPosition*/
    402653696) {
      e(41, Xt = "center");
      const se = ue == null ? void 0 : ue.ratio;
      se && zn(se) ? (e(4, mr = se), e(40, er = ((ut = pt.json.width) == null ? void 0 : ut.type) === "wrap_content"), er && (Je.content_alignment_vertical === "top" ? e(41, Xt = "top") : Je.content_alignment_vertical === "bottom" && e(41, Xt = "bottom"))) : e(4, mr = void 0);
    }
    if (t.$$.dirty[1] & /*$jsonTintColor, $jsonTintMode, tintMode, tintColor*/
    100669440) {
      const se = re, mt = se ? pr(se) : void 0, or = Ud(Ce, xt);
      (mt !== vr || or !== xt) && (xe.removeSvgFilter(vr, xt), e(5, $t = mt ? xe.addSvgFilter(mt, or) : ""), e(42, vr = mt), e(43, xt = or));
    }
    if (t.$$.dirty[1] & /*$jsonAppearanceAnimation*/
    16777216 && Q && Q.type === "fade") {
      const se = Q;
      e(44, J = Hd(se.interpolator, "ease_in_out").replace(/_/g, "-")), e(47, Et = en(se.duration, 300)), e(46, Gt = en(se.start_delay, 0)), e(45, ft = en(se.alpha, 0));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonFilters, $direction*/
    12582912) {
      let se = "", mt = "";
      Array.isArray(C) && C.length && (se = Wd(C, pt.logError)), se && (mt = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"), e(48, br = se), e(49, Er = mt), e(50, wr = W === "rtl" && Array.isArray(C) && C.some((or) => or.type === "rtl_mirror"));
    }
    t.$$.dirty[0] & /*aspectRatio, isWidthContent, isHeightContent, state*/
    212 | t.$$.dirty[1] & /*aspectContent, aspectContentVAlign, animationInterpolator, isRTLMirror*/
    534016 && e(12, Z = {
      aspect: mr !== void 0,
      "aspect-content": er,
      "aspect-valign": Xt !== "center" ? Xt : void 0,
      "is-width-content": oe,
      "is-height-content": fe,
      loaded: Ne === Dl,
      "before-appearance": !!J && Ne === ai,
      "is-rtl-mirror": wr
    }), t.$$.dirty[0] & /*aspectRatio, state, svgFilterId*/
    52 | t.$$.dirty[1] & /*backgroundImage, placeholderColor, scale, filterClipPath, position, filter, animationInterpolator, animationFadeStart, animationDelay, animationDuration*/
    516576 && e(11, ce = {
      // Image preview shows, if loading of original image is failed
      "background-image": ze,
      "background-color": ze ? void 0 : Ft,
      "background-size": pm(kt),
      "clip-path": Er || void 0,
      "object-fit": kt,
      "object-position": lr,
      "aspect-ratio": mr,
      filter: [
        Ne === Dl && $t ? `url(#${$t})` : "",
        br
      ].filter(Boolean).join(" "),
      "--divkit-appearance-interpolator": J || void 0,
      "--divkit-appearance-fade-start": J ? ft : void 0,
      "--divkit-appearance-delay": J ? `${Gt}ms` : void 0,
      "--divkit-appearance-duration": J ? `${Et}ms` : void 0
    });
  }, [
    pt,
    we,
    Ne,
    hr,
    mr,
    $t,
    fe,
    oe,
    nr,
    It,
    zr,
    ce,
    Z,
    T,
    O,
    H,
    z,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    qt,
    Be,
    Zt,
    Yt,
    bt,
    Ft,
    ze,
    kt,
    lr,
    er,
    Xt,
    vr,
    xt,
    J,
    ft,
    Gt,
    Et,
    br,
    Er,
    wr,
    Dr,
    n,
    C,
    W,
    Q,
    Ce,
    re,
    Je,
    ue,
    ee,
    Se,
    te,
    nt,
    wt,
    ct,
    lt,
    jt,
    Dt,
    Mt,
    _r
  ];
}
class ou extends Or {
  constructor(r) {
    super(), Lr(this, r, I1, A1, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const D1 = "appkit-grid", T1 = "appkit-grid_halign_start", M1 = "appkit-grid_halign_center", P1 = "appkit-grid_halign_end", N1 = "appkit-grid_valign_start", z1 = "appkit-grid_valign_center", L1 = "appkit-grid_valign_end", iu = {
  grid: D1,
  grid_halign_start: T1,
  grid_halign_center: M1,
  grid_halign_end: P1,
  grid_valign_start: N1,
  grid_valign_center: z1,
  grid_valign_end: L1
};
function su(t) {
  return t > 0 && t < 1;
}
function lu(t) {
  return String(Math.ceil(t * 1e3) / 1e3);
}
function au(t, r, e, n) {
  if (t.some(su)) {
    const l = Math.max(...t.filter(su).map((c) => 1 / c));
    t = t.map((c) => c * l);
  }
  const o = t.every(Boolean);
  let i = 0, s = 0;
  const a = [];
  if (o) {
    s = t.reduce((l, c) => l + c, 0);
    for (let l = 0; l < n; ++l) {
      if (!r[l])
        continue;
      const c = r[l] / t[l] * s;
      c > i && (i = c);
    }
  }
  for (let l = 0; l < n; ++l)
    i && !e[l] ? a[l] = `minmax(${pe(i * t[l] / s)},${lu(t[l])}fr)` : o || !e[l] && t[l] ? a[l] = `${lu(t[l])}fr` : a[l] = "auto";
  return a.join(" ");
}
function cu(t, r, e) {
  const n = t.slice();
  return n[33] = r[e], n;
}
function O1(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function B1(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "grid",
        iu,
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
      $$slots: { default: [R1] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = ht(
        "grid",
        iu,
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
      zt(r, n);
    }
  };
}
function uu(t) {
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function R1(t) {
  let r, e, n = rr(
    /*resultItems*/
    t[5]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = uu(cu(t, n, s));
  const i = (s) => x(o[s], 1, 1, () => {
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
        n = rr(
          /*resultItems*/
          s[5]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const c = cu(s, n, l);
          o[l] ? (o[l].p(c, a), L(o[l], 1)) : (o[l] = uu(c), o[l].c(), L(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (ir(), l = n.length; l < o.length; l += 1)
          i(l);
        sr();
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
function H1(t) {
  let r, e, n, o;
  const i = [B1, O1], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (ir(), x(s[u], 1, 1, () => {
        s[u] = null;
      }), sr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
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
function W1(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _ = j, h = () => (_(), _ = S(a, (de) => e(27, f = de)), a), m, p = j, w = () => (p(), p = S(s, (de) => e(28, m = de)), s), k, z = j, H = () => (z(), z = S(W, (de) => e(29, k = de)), W), O, oe = j, fe = () => (oe(), oe = S(i, (de) => e(30, O = de)), i);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => oe());
  let { componentContext: T } = r, { layoutParams: Z = void 0 } = r;
  const C = Ir(Kr).direction;
  yn(t, C, (de) => e(26, u = de));
  let D = !1, M = 0, W, Q, me = [], Ae = [], Ce = [], he = [], Ve = [], re = [], $e = 0, Ge = "start", Je = "start", ke = [], De;
  function ue() {
    e(3, D = !1), e(13, M = 0), e(21, Ge = "start"), e(22, Je = "start");
  }
  function ae(de) {
    e(0, T = e(23, De = {
      ...T,
      json: {
        ...T.json,
        items: de.filter(zo)
      }
    }));
  }
  return sn(() => {
    ke.forEach((de) => {
      de.destroy();
    });
  }), t.$$set = (de) => {
    "componentContext" in de && e(0, T = de.componentContext), "layoutParams" in de && e(1, Z = de.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(25, n = T.origJson), t.$$.dirty[0] & /*origJson*/
    33554432 && n && ue(), t.$$.dirty[0] & /*componentContext*/
    1 && e(24, o = Array.isArray(T.json.items) && T.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(10, i = T.getDerivedFromVars(T.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && w(e(9, s = T.getDerivedFromVars(T.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && h(e(8, a = T.getDerivedFromVars(T.json.content_alignment_horizontal))), t.$$.dirty[0] & /*$jsonColumnCount, columnCount, componentContext*/
    1073750017 && (e(13, M = Gn(O, M)), M < 1 ? (e(3, D = !0), T.logError(Y(new Error("Incorrect column_count for grid")))) : e(3, D = !1)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonItems*/
    25165829) {
      const de = new Set(ke), ee = /* @__PURE__ */ new Map();
      De === T && ke.forEach((ge) => {
        ee.set(ge.json, ge);
      }), e(2, ke = o.map((ge, ie) => {
        const Se = ee.get(ge);
        return Se ? (de.delete(Se), Se) : T.produceChildContext(ge, { path: ie });
      }));
      for (const ge of de)
        ge.destroy();
      e(23, De = T);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    5) {
      let de = [];
      ke.forEach((ee) => {
        de.push(T.getDerivedFromVars({
          rowSpan: ee.json.row_span,
          columnSpan: ee.json.column_span,
          width: ee.json.width,
          height: ee.json.height
        }));
      }), H(e(4, W = Gi(de, (ee) => [...ee])));
    }
    if (t.$$.dirty[0] & /*items, $childStore, columnCount, columnsWeight, rowsWeight, columnsMinWidth, rowsMinHeight*/
    537124868) {
      const de = {};
      let ee = 0, ge = 0;
      e(14, me = []), e(15, Ae = []), e(16, Ce = []), e(17, he = []), e(18, Ve = []), e(19, re = []);
      let ie = 0;
      e(5, Q = ke.map((Se, He) => {
        var rt, Pt, ct, X;
        const We = k[He], te = Math.min(M, Number(We.columnSpan) || 1), Oe = Number(We.rowSpan) || 1, Pe = ((rt = We.width) == null ? void 0 : rt.type) === "match_parent" ? Number(We.width.weight || 1) / te : 0, nt = ((Pt = We.height) == null ? void 0 : Pt.type) === "match_parent" ? Number(We.height.weight || 1) / Oe : 0, st = ((ct = We.width) == null ? void 0 : ct.type) === "fixed" && We.width.value ? Number(We.width.value) / te : 0, et = ((X = We.height) == null ? void 0 : X.type) === "fixed" && We.height.value ? Number(We.height.value) / Oe : 0;
        for (; ; ) {
          let _e = !0;
          e: for (let lt = ee; lt < ee + te; ++lt)
            for (let Fe = ge; Fe < ge + Oe; ++Fe)
              if (de[lt + "_" + Fe]) {
                _e = !1;
                break e;
              }
          if (_e)
            break;
          ++ee, ee > M - te && (ee = 0, ++ge);
        }
        const wt = { x: ee, y: ge, colSpan: te, rowSpan: Oe };
        for (let _e = ee; _e < ee + te; ++_e)
          for (let lt = ge; lt < ge + Oe; ++lt)
            de[_e + "_" + lt] = !0, (!me[_e] || me[_e] < Pe) && e(14, me[_e] = Pe, me), (!Ae[lt] || Ae[lt] < nt) && e(15, Ae[lt] = nt, Ae), te === 1 && (!Ce[_e] || Ce[_e] < st) && e(16, Ce[_e] = st, Ce), Oe === 1 && (!he[lt] || he[lt] < et) && e(17, he[lt] = et, he), te === 1 && st && e(18, Ve[_e] = st, Ve), Oe === 1 && et && e(19, re[_e] = et, re);
        return ie = Math.max(ie, ge + Oe), {
          componentContext: Se,
          layoutParams: { gridArea: wt }
        };
      })), e(20, $e = Math.max(ge + 1, ie));
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    270532608 && e(21, Ge = bl(m, Ge)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    205520896 && e(22, Je = ml(f, u, Je)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    6291456 && e(7, l = {
      valign: Ge,
      halign: Je
    }), t.$$.dirty[0] & /*columnsWeight, columnsMinWidth, columnsWidth, columnCount, rowsWeight, rowsMinHeight, rowsHeight, rowCount*/
    2088960 && e(6, c = {
      "grid-template-columns": au(me, Ce, Ve, M),
      "grid-template-rows": au(Ae, he, re, $e)
    });
  }, [
    T,
    Z,
    ke,
    D,
    W,
    Q,
    c,
    l,
    a,
    s,
    i,
    C,
    ae,
    M,
    me,
    Ae,
    Ce,
    he,
    Ve,
    re,
    $e,
    Ge,
    Je,
    De,
    o,
    n,
    u,
    f,
    m,
    k,
    O
  ];
}
class U1 extends Or {
  constructor(r) {
    super(), Lr(this, r, W1, H1, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const G1 = "appkit-outer_width_content", J1 = "appkit-outer_height_content", q1 = "appkit-gallery", K1 = "appkit-gallery__scroller", Y1 = "appkit-gallery_scrollbar_none", X1 = "appkit-gallery_orientation_horizontal", Z1 = "appkit-gallery_orientation_vertical", Q1 = "appkit-gallery__items", x1 = "appkit-gallery__arrow", $1 = "appkit-gallery__gap", fo = {
  outer_width_content: G1,
  outer_height_content: J1,
  gallery: q1,
  gallery__scroller: K1,
  gallery_scrollbar_none: Y1,
  gallery_orientation_horizontal: X1,
  gallery_orientation_vertical: Z1,
  "gallery_scroll-snap": "appkit-gallery_scroll-snap",
  "gallery__items-grid": "appkit-gallery__items-grid",
  gallery__items: Q1,
  gallery__arrow: x1,
  "gallery__arrow-icon-path": "appkit-gallery__arrow-icon-path",
  gallery__gap: $1
}, eb = "appkit-arrow", tb = "appkit-arrow__icon", rb = "appkit-arrow_left", nb = "appkit-arrow_right", mo = {
  arrow: eb,
  arrow__icon: tb,
  arrow_left: rb,
  arrow_right: nb
};
function ob(t, r) {
  return t === "start" || t === "center" || t === "end" ? t : r;
}
function ib(t) {
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
const { Boolean: qd, window: sb } = Po;
function fu(t, r, e) {
  const n = t.slice();
  return n[86] = r[e], n[87] = r, n[88] = e, n;
}
function du(t, r, e) {
  const n = t.slice();
  return n[89] = r[e], n;
}
function _u(t) {
  let r;
  return {
    c() {
      r = Te("div"), g(r, "class", fo.gallery__gap), F(
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
      q(e, r, n);
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
function pu(t) {
  let r, e, n, o = (
    /*item*/
    t[89].hasGapBefore && _u(t)
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
      o && o.c(), r = gr(), Lt(e.$$.fragment);
    },
    m(i, s) {
      o && o.m(i, s), q(i, r, s), Nt(e, i, s), n = !0;
    },
    p(i, s) {
      /*item*/
      i[89].hasGapBefore ? o ? o.p(i, s) : (o = _u(i), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
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
      i && G(r), o && o.d(i), zt(e, i);
    }
  };
}
function gu(t) {
  let r, e, n, o, i, s, a = (
    /*rowIndex*/
    t[88]
  ), l, c = rr(
    /*itemsRow*/
    t[86]
  ), u = [];
  for (let m = 0; m < c.length; m += 1)
    u[m] = pu(du(t, c, m));
  const f = (m) => x(u[m], 1, 1, () => {
    u[m] = null;
  }), _ = () => (
    /*div1_binding*/
    t[71](r, a)
  ), h = () => (
    /*div1_binding*/
    t[71](null, a)
  );
  return {
    c() {
      r = Te("div");
      for (let m = 0; m < u.length; m += 1)
        u[m].c();
      e = gr(), n = Te("div"), i = gr(), g(n, "class", fo.gallery__gap), g(n, "style", o = dr(
        /*lastPaddingSize*/
        t[13]
      )), g(r, "class", fo.gallery__items), g(r, "style", s = dr(
        /*columnStyle*/
        t[16]
      ));
    },
    m(m, p) {
      q(m, r, p);
      for (let w = 0; w < u.length; w += 1)
        u[w] && u[w].m(r, null);
      yt(r, e), yt(r, n), yt(r, i), _(), l = !0;
    },
    p(m, p) {
      if (t = m, p[0] & /*itemsGrid, childLayoutParams, orientation, gridGap*/
      266320) {
        c = rr(
          /*itemsRow*/
          t[86]
        );
        let w;
        for (w = 0; w < c.length; w += 1) {
          const k = du(t, c, w);
          u[w] ? (u[w].p(k, p), L(u[w], 1)) : (u[w] = pu(k), u[w].c(), L(u[w], 1), u[w].m(r, e));
        }
        for (ir(), w = c.length; w < u.length; w += 1)
          f(w);
        sr();
      }
      (!l || p[0] & /*lastPaddingSize*/
      8192 && o !== (o = dr(
        /*lastPaddingSize*/
        t[13]
      ))) && g(n, "style", o), (!l || p[0] & /*columnStyle*/
      65536 && s !== (s = dr(
        /*columnStyle*/
        t[16]
      ))) && g(r, "style", s), a !== /*rowIndex*/
      t[88] && (h(), a = /*rowIndex*/
      t[88], _());
    },
    i(m) {
      if (!l) {
        for (let p = 0; p < c.length; p += 1)
          L(u[p]);
        l = !0;
      }
    },
    o(m) {
      u = u.filter(qd);
      for (let p = 0; p < u.length; p += 1)
        x(u[p]);
      l = !1;
    },
    d(m) {
      m && G(r), on(u, m), h();
    }
  };
}
function hu(t) {
  let r, e, n = (
    /*hasScrollLeft*/
    t[10] && /*shouldCheckArrows*/
    t[8] && mu(t)
  ), o = (
    /*hasScrollRight*/
    t[11] && /*shouldCheckArrows*/
    t[8] && bu(t)
  );
  return {
    c() {
      n && n.c(), r = gr(), o && o.c(), e = Kt();
    },
    m(i, s) {
      n && n.m(i, s), q(i, r, s), o && o.m(i, s), q(i, e, s);
    },
    p(i, s) {
      /*hasScrollLeft*/
      i[10] && /*shouldCheckArrows*/
      i[8] ? n ? n.p(i, s) : (n = mu(i), n.c(), n.m(r.parentNode, r)) : n && (n.d(1), n = null), /*hasScrollRight*/
      i[11] && /*shouldCheckArrows*/
      i[8] ? o ? o.p(i, s) : (o = bu(i), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null);
    },
    d(i) {
      i && (G(r), G(e)), n && n.d(i), o && o.d(i);
    }
  };
}
function mu(t) {
  let r, e, n, o = !/*leftClass*/
  t[32] && lb();
  return {
    c() {
      r = Te("div"), o && o.c(), g(
        r,
        "class",
        /*leftClass*/
        t[32] || `${fo.gallery__arrow} ${mo.arrow} ${mo.arrow_left}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = Qe(
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
function lb(t) {
  let r, e;
  return {
    c() {
      r = $r("svg"), e = $r("path"), g(e, "class", fo["gallery__arrow-icon-path"]), g(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", mo.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), yt(r, e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function bu(t) {
  let r, e, n, o = !/*rightClass*/
  t[33] && ab();
  return {
    c() {
      r = Te("div"), o && o.c(), g(
        r,
        "class",
        /*rightClass*/
        t[33] || `${fo.gallery__arrow} ${mo.arrow} ${mo.arrow_right}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = Qe(
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
function ab(t) {
  let r, e;
  return {
    c() {
      r = $r("svg"), e = $r("path"), g(e, "class", fo["gallery__arrow-icon-path"]), g(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", mo.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), yt(r, e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function cb(t) {
  let r, e, n, o, i, s, a, l, c, u, f = rr(
    /*itemsGrid*/
    t[18]
  ), _ = [];
  for (let p = 0; p < f.length; p += 1)
    _[p] = gu(fu(t, f, p));
  const h = (p) => x(_[p], 1, 1, () => {
    _[p] = null;
  });
  let m = (
    /*orientation*/
    t[4] === "horizontal" && hu(t)
  );
  return {
    c() {
      r = Te("div"), e = Te("div");
      for (let p = 0; p < _.length; p += 1)
        _[p].c();
      s = gr(), m && m.c(), a = Kt(), g(e, "class", fo["gallery__items-grid"]), g(e, "style", n = dr(
        /*gridStyle*/
        t[17]
      )), g(r, "class", o = fo.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? Cr["root_restrict-scroll"] : "")), g(r, "style", i = dr(
        /*scrollerStyle*/
        t[5]
      ));
    },
    m(p, w) {
      q(p, r, w), yt(r, e);
      for (let k = 0; k < _.length; k += 1)
        _[k] && _[k].m(e, null);
      t[72](e), t[73](r), q(p, s, w), m && m.m(p, w), q(p, a, w), l = !0, c || (u = Qe(r, "scroll", function() {
        Nr(
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
      }), c = !0);
    },
    p(p, w) {
      if (t = p, w[0] & /*columnStyle, galleryItemsWrappers, lastPaddingSize, itemsGrid, childLayoutParams, orientation, gridGap*/
      340560) {
        f = rr(
          /*itemsGrid*/
          t[18]
        );
        let k;
        for (k = 0; k < f.length; k += 1) {
          const z = fu(t, f, k);
          _[k] ? (_[k].p(z, w), L(_[k], 1)) : (_[k] = gu(z), _[k].c(), L(_[k], 1), _[k].m(e, null));
        }
        for (ir(), k = f.length; k < _.length; k += 1)
          h(k);
        sr();
      }
      (!l || w[0] & /*gridStyle*/
      131072 && n !== (n = dr(
        /*gridStyle*/
        t[17]
      ))) && g(e, "style", n), (!l || w[0] & /*$jsonRestrictParentScroll*/
      1073741824 && o !== (o = fo.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? Cr["root_restrict-scroll"] : ""))) && g(r, "class", o), (!l || w[0] & /*scrollerStyle*/
      32 && i !== (i = dr(
        /*scrollerStyle*/
        t[5]
      ))) && g(r, "style", i), /*orientation*/
      t[4] === "horizontal" ? m ? m.p(t, w) : (m = hu(t), m.c(), m.m(a.parentNode, a)) : m && (m.d(1), m = null);
    },
    i(p) {
      if (!l) {
        for (let w = 0; w < f.length; w += 1)
          L(_[w]);
        l = !0;
      }
    },
    o(p) {
      _ = _.filter(qd);
      for (let w = 0; w < _.length; w += 1)
        x(_[w]);
      l = !1;
    },
    d(p) {
      p && (G(r), G(s), G(a)), on(_, p), t[72](null), t[73](null), m && m.d(p), c = !1, u();
    }
  };
}
function ub(t) {
  let r, e, n, o;
  return r = new hn({
    props: {
      cls: ht(
        "gallery",
        fo,
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
      $$slots: { default: [cb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(i, s) {
      Nt(r, i, s), e = !0, n || (o = Qe(sb, "resize", function() {
        Nr(
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
        fo,
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
      zt(r, i), n = !1, o();
    }
  };
}
function fb(t, r, e) {
  let n = 0, o = [], i = [];
  for (let s = 0; s < t.length; ++s)
    o[n] || (o[n] = []), o[n].push({
      index: s,
      hasGapBefore: i[n] && r[s].visibility !== "gone",
      componentContext: t[s]
    }), !i[n] && r[s].visibility !== "gone" && (i[n] = !0), ++n >= e && (n = 0);
  return o;
}
function db(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, z, H, O, oe, fe, T, Z, ce = j, C = () => (ce(), ce = S(p, (se) => e(59, Z = se)), p), D, M = j, W = () => (M(), M = S(m, (se) => e(60, D = se)), m), Q, me = j, Ae = () => (me(), me = S(_, (se) => e(61, Q = se)), _), Ce, he = j, Ve = () => (he(), he = S(Ft, (se) => e(62, Ce = se)), Ft), re, $e = j, Ge = () => ($e(), $e = S(f, (se) => e(63, re = se)), f), Je, ke = j, De = () => (ke(), ke = S(u, (se) => e(64, Je = se)), u), ue, ae = j, de = () => (ae(), ae = S(c, (se) => e(65, ue = se)), c), ee, ge = j, ie = () => (ge(), ge = S(l, (se) => e(66, ee = se)), l), Se, He = j, We = () => (He(), He = S(a, (se) => e(67, Se = se)), a), te, Oe, Pe = j, nt = () => (Pe(), Pe = S(i, (se) => e(69, Oe = se)), i), st, et = j, wt = () => (et(), et = S(s, (se) => e(70, st = se)), s), rt, Pt = j, ct = () => (Pt(), Pt = S(h, (se) => e(30, rt = se)), h);
  t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => $e()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => He()), t.$$.on_destroy.push(() => Pe()), t.$$.on_destroy.push(() => et()), t.$$.on_destroy.push(() => Pt());
  let { componentContext: X } = r, { layoutParams: _e = void 0 } = r;
  const lt = Ir(Kr), Fe = lt.direction;
  yn(t, Fe, (se) => e(58, T = se));
  let I, jt = [], _t = !1, At = !1, Dt = null, ot, K = !1;
  const Mt = lt.getCustomization("galleryLeftClass"), Vt = lt.getCustomization("galleryRightClass");
  let Jt, qt = 1, be = "horizontal", Ke = "start", pt, we = 8, xe, Be, nr = "", Ne, bt = [], Ft, It = {}, hr = !1, ze = {}, kt = 0;
  function lr() {
    e(42, qt = 1), e(4, be = "horizontal"), e(43, Ke = "start"), e(44, we = 8), e(47, nr = "");
  }
  let er = null, Xt = null;
  function mr() {
    var or, yr;
    const se = Gn(st, qt), mt = X.json.responsive;
    if (!mt || typeof mt != "object") {
      e(42, qt = se);
      return;
    }
    er != null && er.matches && ((or = mt.mobile) != null && or.column_count) ? e(42, qt = mt.mobile.column_count) : Xt != null && Xt.matches && ((yr = mt.tablet) != null && yr.column_count) ? e(42, qt = mt.tablet.column_count) : e(42, qt = se);
  }
  function vr(se) {
    e(0, X = e(53, J = {
      ...X,
      json: {
        ...X.json,
        items: se.filter(zo)
      }
    }));
  }
  const xt = lt.isDesktop;
  yn(t, xt, (se) => e(68, te = se));
  let $t = [], J;
  function ft() {
    if (!I)
      return;
    let se = I.scrollLeft;
    T === "rtl" && (se *= -1);
    const mt = I.scrollWidth, or = I.offsetWidth;
    T === "ltr" ? (e(10, _t = se > 2), e(11, At = se + or < mt - 2)) : (e(11, At = se > 2), e(10, _t = se + or < mt - 2));
  }
  const Gt = wa(ft, 50);
  function Et(se) {
    I.scroll({
      left: I.scrollLeft + I.offsetWidth * 0.75 * (se === "right" ? 1 : -1),
      behavior: "smooth"
    });
  }
  function br() {
    let se = [], mt = jt[0].children.length;
    for (let or = 0; or < mt; or += 2)
      for (let yr = 0; yr < qt; ++yr) {
        const ar = jt[yr].children[or];
        ar && se.push(ar);
      }
    return se;
  }
  function Er(se, mt = !0) {
    const yr = be === "horizontal" ? "left" : "top";
    I.scroll({
      [yr]: se,
      behavior: mt ? "smooth" : "instant"
    });
  }
  function wr(se, mt, { animated: or = !0, extraOffset: yr = 0, overflow: ar = "clamp" } = {}) {
    const v = be === "horizontal", le = v ? "offsetLeft" : "offsetTop";
    mt > se.length - 1 ? mt = ar === "ring" ? Vo(mt, se.length) : se.length - 1 : mt < 0 && (mt = ar === "ring" ? Vo(mt, se.length) : 0);
    const d = se[mt];
    if (d) {
      let B;
      if (T === "ltr" || !v)
        B = d[le] + 0.01 - we / 2;
      else {
        const Me = I.offsetWidth;
        B = d[le] + d.offsetWidth + 0.01 - we / 2 - Me;
      }
      if (yr) {
        B += yr;
        const Me = v ? I.scrollWidth - I.offsetWidth : I.scrollHeight - I.offsetHeight;
        B > Me && (ar === "clamp" ? B = Me : ar === "ring" && (B = Vo(B, Me))), B < 0 && (ar === "clamp" ? B = 0 : ar === "ring" && (B = Vo(B, Me)));
      }
      Er(B, or);
    }
  }
  function Dr(se, { overflow: mt = "clamp", animated: or = !0 } = {}) {
    const yr = be === "horizontal", ar = T === "ltr" || !yr ? 1 : -1, v = yr ? I.scrollLeft : I.scrollTop, le = yr ? I.scrollWidth - I.offsetWidth : I.scrollHeight - I.offsetHeight;
    let d = v * ar + se;
    d > le ? mt === "clamp" ? d = le : mt === "ring" && (d = Vo(d, le)) : d < 0 && (mt === "clamp" ? d = 0 : mt === "ring" && (d = Vo(d, le))), Er(d * ar, or);
  }
  function zr(se, mt) {
    return be === "horizontal" ? mt.right > se.left && se.right > mt.left : mt.bottom > se.top && se.bottom > mt.top;
  }
  function tr(se, mt) {
    return be === "horizontal" ? mt.left >= se.left && mt.right <= se.right : mt.top >= se.top && mt.bottom <= se.bottom;
  }
  function at(se) {
    const mt = br(), or = I.getBoundingClientRect(), yr = mt.findIndex((le) => tr(or, le.getBoundingClientRect()));
    if (yr !== -1)
      return yr;
    const ar = mt.map((le) => zr(or, le.getBoundingClientRect())), v = ar.findIndex(Boolean);
    return v !== -1 ? se === "prev" && ar.filter(Boolean).length === 2 ? v + 1 : v : se === "prev" ? 1 : mt.length - 2;
  }
  xn(() => {
    if (e(40, K = !0), ft(), kt) {
      const se = br();
      wr(se, kt, { animated: !1 });
    }
  }), sn(() => {
    e(40, K = !1), $t.forEach((se) => {
      se.destroy();
    }), Jt && !X.fakeElement && (lt.unregisterInstance(Jt), e(41, Jt = void 0)), er && er.removeEventListener("change", mr), Xt && Xt.removeEventListener("change", mr);
  });
  function vt(se, mt) {
    Fr[se ? "unshift" : "push"](() => {
      jt[mt] = se, e(9, jt);
    });
  }
  function Zt(se) {
    Fr[se ? "unshift" : "push"](() => {
      ot = se, e(3, ot);
    });
  }
  function Yt(se) {
    Fr[se ? "unshift" : "push"](() => {
      I = se, e(2, I);
    });
  }
  const _r = () => Et("left"), ut = () => Et("right");
  return t.$$set = (se) => {
    "componentContext" in se && e(0, X = se.componentContext), "layoutParams" in se && e(1, _e = se.layoutParams);
  }, t.$$.update = () => {
    var se, mt, or, yr, ar, v;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(57, n = X.origJson), t.$$.dirty[1] & /*origJson*/
    67108864 && n && lr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(56, o = Array.isArray(X.json.items) && X.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && nt(e(29, i = typeof ((se = X.json.item_builder) == null ? void 0 : se.data) == "string" ? X.getDerivedFromVars((mt = X.json.item_builder) == null ? void 0 : mt.data, void 0, !0) : (or = X.json.item_builder) != null && or.data ? Go(X.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && wt(e(28, s = X.getDerivedFromVars(X.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && We(e(27, a = X.getDerivedFromVars(X.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*columns, mobileQuery, tabletQuery*/
    3147776 | t.$$.dirty[2] & /*$jsonColumnCount*/
    256) {
      const le = Gn(st, qt), d = X.json.responsive;
      d && typeof d == "object" && typeof window < "u" ? (er || (e(51, er = window.matchMedia("(max-width: 767px)")), e(52, Xt = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), er.addEventListener("change", mr), Xt.addEventListener("change", mr)), mr()) : e(42, qt = le);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(26, l = X.getDerivedFromVars(X.json.cross_content_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(25, c = X.getDerivedFromVars(X.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(24, u = X.getDerivedFromVars(X.json.cross_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(23, f = X.getDerivedFromVars(X.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(22, _ = X.getDerivedFromVars(X.json.scroll_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(21, h = X.getDerivedFromVars(X.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && W(e(20, m = X.getDerivedFromVars(X.json.scrollbar))), t.$$.dirty[0] & /*componentContext*/
    1 && C(e(19, p = X.getDerivedFromVars(X.json.default_item))), t.$$.dirty[0] & /*componentContext, items*/
    129 | t.$$.dirty[1] & /*jsonItems, prevContext*/
    37748736 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    128) {
      let le = [];
      if (X.json.item_builder && Array.isArray(Oe) && Array.isArray(X.json.item_builder.prototypes)) {
        const qe = X.json.item_builder;
        le = yl(Oe, lt, X, qe);
      } else
        le = (Array.isArray(o) && o || []).map((qe, ve) => ({
          div: qe,
          key: qe.id || { index: ve, data: qe }
        }));
      const d = new Set($t), B = /* @__PURE__ */ new Map();
      let Me = !1;
      J === X && $t.forEach((qe) => {
        qe.key && (typeof qe.key == "string" && B.has(qe.key) ? Me || (Me = !0, X.logError(Y(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: qe.key } }))) : B.set(
          typeof qe.key == "string" ? qe.key : qe.key.index,
          qe
        ));
      }), e(7, $t = le.map((qe, ve) => {
        let R = !Me && B.get(qe.id), Tt = B.get(ve);
        return !R && !qe.id && typeof qe.key == "object" && typeof (Tt == null ? void 0 : Tt.key) == "object" && Ji(Tt.key.data, qe.key.data) && (R = Tt), R ? (d.delete(R), R) : X.produceChildContext(qe.div, {
          path: ve,
          variables: qe.vars,
          id: qe.id,
          key: qe.key
        });
      }));
      for (const qe of d)
        qe.destroy();
      e(53, J = X);
    }
    if (t.$$.dirty[1] & /*mounted*/
    512 | t.$$.dirty[2] & /*$isDesktop*/
    64 && e(8, w = te && K), t.$$.dirty[0] & /*shouldCheckArrows, itemsGridElem*/
    264 | t.$$.dirty[1] & /*resizeObserver*/
    256 && (w ? typeof ResizeObserver < "u" && (e(39, Dt = new ResizeObserver(() => {
      Gt();
    })), Dt.observe(ot)) : Dt && (Dt.disconnect(), e(39, Dt = null))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[2] & /*$jsonOrientation*/
    32 && e(4, be = ka(Se, be)), t.$$.dirty[1] & /*align*/
    4096 | t.$$.dirty[2] & /*$jsonCrossContentAlignment*/
    16 && e(43, Ke = ob(ee, Ke)), t.$$.dirty[1] & /*itemSpacing*/
    8192 | t.$$.dirty[2] & /*$jsonItemSpacing*/
    8 && (e(44, we = en(ue, we)), e(12, pt = pe(we))), t.$$.dirty[1] & /*itemSpacing, crossSpacing*/
    40960 | t.$$.dirty[2] & /*$jsonCrossSpacing*/
    4 && (e(46, Be = en(Je, we)), e(45, xe = pe(Be))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*$direction, padding*/
    134283264 | t.$$.dirty[2] & /*$jsonPaddings*/
    2) {
      e(47, nr = ss(re, T, nr));
      const le = be === "horizontal" ? (ar = (yr = re == null ? void 0 : re.end) != null ? yr : re == null ? void 0 : re[T === "ltr" ? "right" : "left"]) != null ? ar : 0 : (v = re == null ? void 0 : re.bottom) != null ? v : 0, d = pe(le);
      e(13, Ne = {
        width: be === "horizontal" ? d : "1px",
        height: be === "horizontal" ? "1px" : d,
        "margin-right": be === "horizontal" && T === "ltr" ? "-" + d : void 0,
        "margin-left": be === "horizontal" && T === "rtl" ? "-" + d : void 0,
        "margin-bottom": be === "vertical" ? "-" + d : void 0
      });
    }
    if (t.$$.dirty[0] & /*items, orientation*/
    144) {
      let le = [];
      $t.forEach((d) => {
        const B = be === "horizontal" ? "width" : "height";
        le.push(d.getDerivedFromVars({
          size: d.json[B],
          visibility: d.json.visibility
        }));
      }), Ve(e(14, Ft = Gi(le, (d) => [...d])));
    }
    if (t.$$.dirty[0] & /*items*/
    128 | t.$$.dirty[1] & /*columns*/
    2048 | t.$$.dirty[2] & /*$childStore*/
    1 && e(18, k = fb($t, Ce, qt)), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*columns, templateSizes*/
    133120 | t.$$.dirty[2] & /*$childStore*/
    1 && (e(48, bt = []), qt > 1 || Ce.forEach((le, d) => {
      var B;
      le.visibility !== "gone" && (!le.size && be === "horizontal" || ((B = le.size) == null ? void 0 : B.type) === "match_parent" ? bt.push("100%") : bt.push("max-content"), d + 1 < Ce.length && bt.push("auto"));
    }), bt.push("auto")), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, z = X.json.fixed_columns === !0), t.$$.dirty[0] & /*orientation, scrollerStyle, childLayoutParams*/
    112 | t.$$.dirty[1] & /*align, $jsonScrollMode, itemSpacing*/
    1073754112) {
      const le = {};
      let d = {};
      if (e(49, hr = !1), d.treatMatchParentAs100 = !0, be === "horizontal" ? (d.parentVAlign = Ke, d.parentContainerOrientation = "horizontal") : (d.parentHAlign = Ke, d.parentContainerOrientation = "vertical"), Q === "paging") {
        e(49, hr = !0), d.scrollSnap = "start";
        const B = be === "horizontal" ? "scroll-padding-left" : "scroll-padding-top";
        le[B] = pe(we / 2);
      }
      e(5, It = Qo(le, It)), e(6, ze = Qo(d, ze));
    }
    t.$$.dirty[0] & /*orientation*/
    16 && e(54, H = be === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*padding, crossGridGap, fixedColumns, columns*/
    16861184 && e(17, O = {
      padding: nr,
      "grid-gap": xe,
      ...z && qt > 1 && be === "vertical" ? {
        display: "grid",
        "grid-template-columns": `repeat(${qt}, 1fr)`
      } : {}
    }), t.$$.dirty[1] & /*gridTemplate, templateSizes*/
    8519680 && e(16, oe = {
      [H]: ib(bt)
    }), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*scrollSnap, $jsonScrollbar*/
    537133056 && e(15, fe = {
      orientation: be,
      "scroll-snap": hr,
      scrollbar: D === "auto" ? "auto" : "none"
    }), t.$$.dirty[1] & /*$jsonDefaultItem, defaultItem*/
    268959744 && e(50, kt = en(Z, kt)), t.$$.dirty[0] & /*componentContext*/
    1 && X.json && Gt(), t.$$.dirty[0] & /*componentContext, orientation, scroller*/
    21 | t.$$.dirty[1] & /*prevId, $direction*/
    134218752 && X.json && (Jt && (lt.unregisterInstance(Jt), e(41, Jt = void 0)), X.id && !X.fakeElement && (e(41, Jt = X.id), lt.registerInstance(Jt, {
      setCurrentItem(le, d) {
        const B = br();
        if (le < 0 || le > B.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        wr(B, le, { animated: d });
      },
      setPreviousItem(le, d, B) {
        const Me = at("prev"), qe = br();
        let ve = Me - le;
        wr(qe, ve, { animated: B, overflow: d });
      },
      setNextItem(le, d, B) {
        const Me = be === "horizontal", qe = T === "ltr" || !Me ? 1 : -1, ve = Me ? I.scrollLeft * qe + I.offsetWidth === I.scrollWidth : I.scrollTop + I.offsetHeight === I.scrollHeight, R = br();
        if (ve && d === "ring") {
          wr(R, 0, { animated: B });
          return;
        }
        let Ot = at("next") + le;
        wr(R, Ot, { animated: B, overflow: d });
      },
      scrollToStart(le) {
        Er(0, le);
      },
      scrollToEnd(le) {
        Er(
          T === "ltr" || be !== "horizontal" ? 1e6 : -1e6,
          le
        );
      },
      scrollToPosition(le, d) {
        Er(
          T === "ltr" || be !== "horizontal" ? le : -le,
          d
        );
      },
      scrollCombined({ step: le, offset: d, overflow: B, animated: Me }) {
        if (le) {
          const ve = at(le > 0 ? "next" : "prev") + le;
          wr(br(), ve, { animated: Me, extraOffset: d, overflow: B });
        } else d && Dr(d, { overflow: B, animated: Me });
      }
    })));
  }, [
    X,
    _e,
    I,
    ot,
    be,
    It,
    ze,
    $t,
    w,
    jt,
    _t,
    At,
    pt,
    Ne,
    Ft,
    fe,
    oe,
    O,
    k,
    p,
    m,
    h,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    rt,
    Fe,
    Mt,
    Vt,
    vr,
    xt,
    ft,
    Gt,
    Et,
    Dt,
    K,
    Jt,
    qt,
    Ke,
    we,
    xe,
    Be,
    nr,
    bt,
    hr,
    kt,
    er,
    Xt,
    J,
    H,
    z,
    o,
    n,
    T,
    Z,
    D,
    Q,
    Ce,
    re,
    Je,
    ue,
    ee,
    Se,
    te,
    Oe,
    st,
    vt,
    Zt,
    Yt,
    _r,
    ut
  ];
}
class _b extends Or {
  constructor(r) {
    super(), Lr(this, r, db, ub, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const pb = "appkit-outer", gb = "appkit-tabs", hb = "appkit-tabs__list", mb = "appkit-tabs__item", bb = "appkit-tabs__item_selected", yb = "appkit-tabs_animation_fade", wb = "appkit-tabs_animation_none", kb = "appkit-tabs__item_actionable", vb = "appkit-tabs__panels", jb = "appkit-tabs__swiper", Cb = "appkit-tabs__swiper_animated", Eb = "appkit-tabs__swiper_inited", Ab = "appkit-tabs__panel", Sb = "appkit-tabs__panel_visible", Vb = "appkit-tabs__separator", Fb = "appkit-tabs__delimitier", vn = {
  outer: pb,
  "root__any-actions": "appkit-root__any-actions",
  tabs: gb,
  tabs__list: hb,
  "tabs__items-bg": "appkit-tabs__items-bg",
  "tabs__items-text": "appkit-tabs__items-text",
  tabs__item: mb,
  tabs__item_selected: bb,
  tabs_animation_fade: yb,
  tabs_animation_none: wb,
  tabs__item_actionable: kb,
  tabs__panels: vb,
  "tabs_own-height": "appkit-tabs_own-height",
  tabs__swiper: jb,
  tabs__swiper_animated: Cb,
  tabs__swiper_inited: Eb,
  tabs__panel: Ab,
  tabs__panel_visible: Sb,
  "tabs_height-parent_yes": "appkit-tabs_height-parent_yes",
  tabs__separator: Vb,
  tabs__delimitier: Fb,
  "tabs__tabs-highlighter": "appkit-tabs__tabs-highlighter"
};
function Ib(t, r) {
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
const Kd = 37, Yd = 39, Xd = 36, Zd = 35;
function Db(t, r, e, n) {
  const o = [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ];
  for (let i = 0; i < o.length; ++i)
    if (o[i] && !Nn(o[i]))
      return n;
  return Ls(t, r, e);
}
function yu(t) {
  const r = t.touches[0], e = r.clientX || r.pageX, n = r.clientY || r.pageY;
  return { x: e, y: n };
}
function Tb(t) {
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Mb(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r, { enabled: i } = r;
  const s = Do(i);
  return fi(ba, { isEnabled: s }), t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams), "enabled" in a && e(2, i = a.enabled);
  }, t.$$.update = () => {
    t.$$.dirty & /*enabled*/
    4 && s.set(i);
  }, [n, o, i];
}
class Pb extends Or {
  constructor(r) {
    super(), Lr(this, r, Mb, Tb, Sr, {
      componentContext: 0,
      layoutParams: 1,
      enabled: 2
    });
  }
}
const { Boolean: wu, window: Nb } = Po;
function ku(t, r, e) {
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
function vu(t, r, e) {
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
function ju(t, r, e) {
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
function zb(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Lb(t) {
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
    $$slots: { default: [Bb] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = jo(o, n[i]);
  return r = new hn({ props: o }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(i, s) {
      Nt(r, i, s), e = !0;
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
        2097152 && Sd(
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
      zt(r, i);
    }
  };
}
function Cu(t) {
  let r;
  return {
    c() {
      r = Te("span"), g(r, "class", vn.tabs__delimitier), F(
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
      q(e, r, n);
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
function Eu(t) {
  let r, e, n = (
    /*item*/
    t[99].title + ""
  ), o, i, s = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && Cu(t)
  );
  return {
    c() {
      s && s.c(), r = gr(), e = Te("span"), o = Jn(n), g(e, "class", i = ht("tabs__item", vn, {
        selected: (
          /*isSelected*/
          t[104]
        ),
        actionable: !!/*item*/
        t[99].title_click_action
      }));
    },
    m(a, l) {
      s && s.m(a, l), q(a, r, l), q(a, e, l), yt(e, o);
    },
    p(a, l) {
      /*delimitierStyle*/
      a[15] && /*index*/
      a[100] > 0 ? s ? s.p(a, l) : (s = Cu(a), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null), l[0] & /*$childStore*/
      262144 && n !== (n = /*item*/
      a[99].title + "") && ro(o, n), l[0] & /*$childStore, selected*/
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
function Au(t) {
  let r, e;
  return {
    c() {
      r = Te("div"), g(r, "class", vn["tabs__tabs-highlighter"]), g(r, "style", e = dr(
        /*selectedTabStyles*/
        t[36]
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o[1] & /*selectedTabStyles*/
      32 && e !== (e = dr(
        /*selectedTabStyles*/
        n[36]
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Su(t) {
  let r, e;
  return {
    c() {
      r = Te("img"), g(r, "class", vn.tabs__delimitier), g(r, "alt", ""), g(r, "loading", "lazy"), g(r, "decoding", "async"), Qn(r.src, e = /*delimitierStyle*/
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
      q(n, r, o);
    },
    p(n, o) {
      o[0] & /*delimitierStyle*/
      32768 && !Qn(r.src, e = /*delimitierStyle*/
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
function Ob(t) {
  let r = (
    /*item*/
    t[99].title + ""
  ), e;
  return {
    c() {
      e = Jn(r);
    },
    m(n, o) {
      q(n, e, o);
    },
    p(n, o) {
      o[0] & /*$childStore*/
      262144 && r !== (r = /*item*/
      n[99].title + "") && ro(e, r);
    },
    d(n) {
      n && G(e);
    }
  };
}
function Vu(t) {
  let r, e, n, o = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && Su(t)
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
  return e = new hl({
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
        ].filter(Ys) : []
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
      $$slots: { default: [Ob] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      o && o.c(), r = gr(), Lt(e.$$.fragment);
    },
    m(s, a) {
      o && o.m(s, a), q(s, r, a), Nt(e, s, a), n = !0;
    },
    p(s, a) {
      t = s, /*delimitierStyle*/
      t[15] && /*index*/
      t[100] > 0 ? o ? o.p(t, a) : (o = Su(t), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
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
      ].filter(Ys) : []), a[0] & /*$childStore, selected, componentContext*/
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
      s && G(r), o && o.d(s), zt(e, s);
    }
  };
}
function Fu(t) {
  let r, e;
  return {
    c() {
      r = Te("div"), g(r, "class", vn.tabs__separator), g(r, "style", e = dr(
        /*separatorStyle*/
        t[38]
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o[1] & /*separatorStyle*/
      128 && e !== (e = dr(
        /*separatorStyle*/
        n[38]
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Iu(t) {
  let r, e;
  return r = new Pb({
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Du(t) {
  let r, e, n, o, i, s, a = (
    /*childComponentContext*/
    t[101] && Iu(t)
  );
  return {
    c() {
      r = Te("div"), a && a.c(), e = gr(), g(r, "class", n = ht("tabs__panel", vn, {
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
    m(l, c) {
      q(l, r, c), a && a.m(r, null), yt(r, e), s = !0;
    },
    p(l, c) {
      /*childComponentContext*/
      l[101] ? a ? (a.p(l, c), c[0] & /*$childStore*/
      262144 | c[1] & /*showedPanels*/
      4 && L(a, 1)) : (a = Iu(l), a.c(), L(a, 1), a.m(r, e)) : a && (ir(), x(a, 1, 1, () => {
        a = null;
      }), sr()), (!s || c[0] & /*$childStore*/
      262144 | c[1] & /*visiblePanels*/
      8 && n !== (n = ht("tabs__panel", vn, {
        visible: (
          /*visiblePanels*/
          l[34][
            /*index*/
            l[100]
          ]
        )
      }))) && g(r, "class", n), (!s || c[0] & /*$childStore*/
      262144 && o !== (o = /*instId*/
      l[50] + "-panel-" + /*index*/
      l[100])) && g(r, "id", o), (!s || c[0] & /*$childStore*/
      262144 && i !== (i = /*instId*/
      l[50] + "-tab-" + /*index*/
      l[100])) && g(r, "aria-labelledby", i), (!s || c[0] & /*$childStore*/
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
function Bb(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, h, m, p, w = rr(
    /*$childStore*/
    t[18]
  ), k = [];
  for (let C = 0; C < w.length; C += 1)
    k[C] = Eu(ju(t, w, C));
  let z = (
    /*animationType*/
    t[16] === "slide" && /*selectedTabStyles*/
    t[36] && Au(t)
  ), H = rr(
    /*$childStore*/
    t[18]
  ), O = [];
  for (let C = 0; C < H.length; C += 1)
    O[C] = Vu(vu(t, H, C));
  const oe = (C) => x(O[C], 1, 1, () => {
    O[C] = null;
  });
  let fe = (
    /*$jsonSeparator*/
    t[20] && Fu(t)
  ), T = rr(
    /*$childStore*/
    t[18]
  ), Z = [];
  for (let C = 0; C < T.length; C += 1)
    Z[C] = Du(ku(t, T, C));
  const ce = (C) => x(Z[C], 1, 1, () => {
    Z[C] = null;
  });
  return {
    c() {
      r = Te("div"), e = Te("div");
      for (let C = 0; C < k.length; C += 1)
        k[C].c();
      n = gr(), z && z.c(), o = gr(), i = Te("div");
      for (let C = 0; C < O.length; C += 1)
        O[C].c();
      a = gr(), fe && fe.c(), l = gr(), c = Te("div"), u = Te("div");
      for (let C = 0; C < Z.length; C += 1)
        Z[C].c();
      g(e, "class", vn["tabs__items-bg"]), g(e, "aria-hidden", "true"), g(i, "class", vn["tabs__items-text"]), g(r, "class", s = vn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Cr["root_restrict-scroll"] : "")), g(r, "role", "tablist"), F(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? ho(
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
        t[13] ? ln(
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
      ), g(u, "class", f = ht("tabs__swiper", vn, {
        inited: (
          /*isSwipeInitialized*/
          t[31]
        ),
        animated: (
          /*isAnimated*/
          t[32]
        )
      })), g(c, "class", _ = vn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Cr["root_restrict-scroll"] : ""));
    },
    m(C, D) {
      q(C, r, D), yt(r, e);
      for (let M = 0; M < k.length; M += 1)
        k[M] && k[M].m(e, null);
      yt(e, n), z && z.m(e, null), yt(r, o), yt(r, i);
      for (let M = 0; M < O.length; M += 1)
        O[M] && O[M].m(i, null);
      t[74](r), q(C, a, D), fe && fe.m(C, D), q(C, l, D), q(C, c, D), yt(c, u);
      for (let M = 0; M < Z.length; M += 1)
        Z[M] && Z[M].m(u, null);
      t[75](u), t[76](c), h = !0, m || (p = [
        Qe(
          r,
          "keydown",
          /*onTabKeydown*/
          t[55]
        ),
        Qe(c, "touchstart", function() {
          Nr(
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
        Qe(c, "touchmove", function() {
          Nr(
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
        Qe(c, "touchend", function() {
          Nr(
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
        Qe(c, "touchcancel", function() {
          Nr(
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
        w = rr(
          /*$childStore*/
          t[18]
        );
        let M;
        for (M = 0; M < w.length; M += 1) {
          const W = ju(t, w, M);
          k[M] ? k[M].p(W, D) : (k[M] = Eu(W), k[M].c(), k[M].m(e, n));
        }
        for (; M < k.length; M += 1)
          k[M].d(1);
        k.length = w.length;
      }
      if (/*animationType*/
      t[16] === "slide" && /*selectedTabStyles*/
      t[36] ? z ? z.p(t, D) : (z = Au(t), z.c(), z.m(e, null)) : z && (z.d(1), z = null), D[0] & /*componentContext, $childStore, selected, delimitierStyle*/
      425985 | D[1] & /*instId, selectItem*/
      8912896) {
        H = rr(
          /*$childStore*/
          t[18]
        );
        let M;
        for (M = 0; M < H.length; M += 1) {
          const W = vu(t, H, M);
          O[M] ? (O[M].p(W, D), L(O[M], 1)) : (O[M] = Vu(W), O[M].c(), L(O[M], 1), O[M].m(i, null));
        }
        for (ir(), M = H.length; M < O.length; M += 1)
          oe(M);
        sr();
      }
      if ((!h || D[1] & /*$jsonRestrictParentScroll*/
      131072 && s !== (s = vn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Cr["root_restrict-scroll"] : ""))) && g(r, "class", s), D[0] & /*titlePadding, $direction*/
      540672 && F(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? ho(
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
        t[13] ? ln(
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
      t[20] ? fe ? fe.p(t, D) : (fe = Fu(t), fe.c(), fe.m(l.parentNode, l)) : fe && (fe.d(1), fe = null), D[0] & /*$childStore, childLayoutParams, selected*/
      393224 | D[1] & /*visiblePanels, instId, showedPanels*/
      524300) {
        T = rr(
          /*$childStore*/
          t[18]
        );
        let M;
        for (M = 0; M < T.length; M += 1) {
          const W = ku(t, T, M);
          Z[M] ? (Z[M].p(W, D), L(Z[M], 1)) : (Z[M] = Du(W), Z[M].c(), L(Z[M], 1), Z[M].m(u, null));
        }
        for (ir(), M = T.length; M < Z.length; M += 1)
          ce(M);
        sr();
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
      }))) && g(u, "class", f), (!h || D[1] & /*$jsonRestrictParentScroll*/
      131072 && _ !== (_ = vn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Cr["root_restrict-scroll"] : ""))) && g(c, "class", _);
    },
    i(C) {
      if (!h) {
        for (let D = 0; D < H.length; D += 1)
          L(O[D]);
        for (let D = 0; D < T.length; D += 1)
          L(Z[D]);
        h = !0;
      }
    },
    o(C) {
      O = O.filter(wu);
      for (let D = 0; D < O.length; D += 1)
        x(O[D]);
      Z = Z.filter(wu);
      for (let D = 0; D < Z.length; D += 1)
        x(Z[D]);
      h = !1;
    },
    d(C) {
      C && (G(r), G(a), G(l), G(c)), on(k, C), z && z.d(), on(O, C), t[74](null), fe && fe.d(C), on(Z, C), t[75](null), t[76](null), m = !1, Jr(p);
    }
  };
}
function Rb(t) {
  let r, e, n, o, i, s;
  const a = [Lb, zb], l = [];
  function c(u, f) {
    return (
      /*hasError*/
      u[2] ? 1 : 0
    );
  }
  return ~(r = c(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(u, f) {
      ~r && l[r].m(u, f), q(u, n, f), o = !0, i || (s = Qe(Nb, "resize", function() {
        Nr(
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
    p(u, f) {
      t = u;
      let _ = r;
      r = c(t), r === _ ? ~r && l[r].p(t, f) : (e && (ir(), x(l[_], 1, 1, () => {
        l[_] = null;
      }), sr()), ~r ? (e = l[r], e ? e.p(t, f) : (e = l[r] = a[r](t), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(u) {
      o || (L(e), o = !0);
    },
    o(u) {
      x(e), o = !1;
    },
    d(u) {
      u && G(n), ~r && l[r].d(u), i = !1, s();
    }
  };
}
function Hb(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, z, H, O, oe = j, fe = () => (oe(), oe = S(a, (v) => e(67, O = v)), a), T, Z = j, ce = () => (Z(), Z = S(m, (v) => e(68, T = v)), m), C, D = j, M = () => (D(), D = S(h, (v) => e(69, C = v)), h), W, Q = j, me = () => (Q(), Q = S(f, (v) => e(70, W = v)), f), Ae, Ce, he = j, Ve = () => (he(), he = S(u, (v) => e(71, Ce = v)), u), re, $e = j, Ge = () => ($e(), $e = S(c, (v) => e(72, re = v)), c), Je, ke = j, De = () => (ke(), ke = S(l, (v) => e(20, Je = v)), l), ue, ae = j, de = () => (ae(), ae = S(_, (v) => e(48, ue = v)), _);
  t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => $e()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => ae());
  let { componentContext: ee } = r, { layoutParams: ge = void 0 } = r;
  const ie = Ir(Kr), Se = ie.direction;
  yn(t, Se, (v) => e(19, Ae = v));
  const He = ie.genId("tabs");
  let We, te = !1, Oe = Do([]);
  yn(t, Oe, (v) => e(18, H = v));
  let Pe = {}, nt, st, et, wt = {}, rt = 12, Pt = "", ct = "", X = "", _e = "", lt, Fe = "", I = "", jt, _t = "", At = "", Dt = "", ot = "", K = "", Mt = "", Vt = 0, Jt = "", qt = "", be = null, Ke = !1, pt = !1, we, xe = [], Be = [], nr = null, Ne = null, bt = null, Ft, It = !1, hr = !1, ze, kt, lr, er = "slide", Xt, mr, vr, xt = {
    devapi: {
      getState() {
        return p;
      },
      setState(v) {
        return Gt(v, !1, !0);
      }
    }
  };
  function $t() {
    e(4, rt = 12), e(5, Pt = ""), e(6, _e = ""), e(7, lt = void 0), e(27, Fe = ""), e(28, I = ""), e(8, jt = void 0), e(29, _t = ""), e(30, At = ""), e(9, Dt = ""), e(10, ot = ""), e(11, K = ""), e(12, Mt = ""), e(13, Vt = 0), e(61, Jt = ""), e(62, qt = ""), e(14, be = null), e(15, lr = void 0), e(16, er = "slide"), e(35, Xt = 300), e(36, mr = void 0), se();
  }
  function J(v) {
    ee.json.items && e(0, ee = vr = {
      ...ee,
      json: {
        ...ee.json,
        items: ee.json.items.map((le, d) => ({ ...le, div: v[d] }))
      }
    });
  }
  function ft(v) {
    if (te)
      return;
    const le = new Set(xe.filter(zo)), d = /* @__PURE__ */ new Map();
    vr === ee && xe.forEach((B) => {
      B && d.set(B.json, B);
    }), e(33, xe = v.map((B, Me) => {
      if ((Me === p || xe[Me]) && (B != null && B.div)) {
        const qe = d.get(B.div);
        return qe ? (le.delete(qe), qe) : ee.produceChildContext(B.div, { path: Me });
      }
    })), e(34, Be = v.map((B, Me) => Me === p));
    for (const B of le)
      B.destroy();
    vr = ee;
  }
  async function Gt(v, le, d) {
    if (we = p, e(17, p = v), vt(), Er(d), se(), le) {
      await Sn();
      const B = nt.querySelector(`.${vn.tabs__item_selected}`);
      B && B.focus();
    }
  }
  function Et(v, le = !1) {
    const d = H == null ? void 0 : H.length;
    if (!d)
      return;
    const B = H.map((R) => R.index);
    let qe = B.indexOf(p) + v;
    qe >= d ? qe = 0 : qe < 0 && (qe = d - 1);
    const ve = B[qe];
    Gt(ve, le, !0);
  }
  function br(v, le) {
    return p !== le ? (Gt(le, !1, !0), !1) : !0;
  }
  function Er(v = !0) {
    e(32, pt = v), wr(-p * 100), Dr(), zr(), tr(), kt = -p * st.clientWidth;
  }
  async function wr(v) {
    await Sn(), e(23, et.style.transform = `translate3d(${v}%,0,0)`, et);
  }
  function Dr(v = !1) {
    const le = v ? Math.max(0, p - 1) : Math.min(p, we != null ? we : p), d = v ? Math.min(o.length - 1, p + 1) : Math.max(p, we != null ? we : p);
    ie.devtoolCreateHierarchy !== "eager" && xe.forEach((B) => {
      B == null || B.destroy();
    }), e(33, xe = xe.map((B, Me) => {
      var ve;
      if (B)
        return B;
      const qe = (ve = o[Me]) == null ? void 0 : ve.div;
      if ((Me >= le && Me <= d || ie.devtoolCreateHierarchy === "eager") && qe)
        return ee.produceChildContext(qe, { path: Me });
    })), e(34, Be = Be.map((B, Me) => Me >= le && Me <= d));
  }
  async function zr() {
    var le;
    if (((le = ee.json.height) == null ? void 0 : le.type) === "match_parent")
      return;
    await Sn();
    const v = document.getElementById(`${He}-panel-${p}`);
    v && e(22, st.style.height = pe(v.offsetHeight), st);
  }
  function tr() {
    nr && clearTimeout(nr), nr = window.setTimeout(
      () => {
        e(34, Be = o.map((v, le) => le === p));
      },
      400
    );
  }
  function at(v) {
    if (!(v.ctrlKey || v.shiftKey || v.altKey || v.metaKey) && o) {
      if (v.which === Kd)
        Et(-1, !0);
      else if (v.which === Yd)
        Et(1, !0);
      else if (v.which === Xd)
        Gt(0, !0, !0);
      else if (v.which === Zd)
        Gt(o.length - 1, !0, !0);
      else
        return;
      v.preventDefault();
    }
  }
  function vt() {
    Ke || (e(31, Ke = !0), e(22, st.style.height = pe(st.clientHeight), st), e(23, et.style.transform = `translate3d(${-(we != null ? we : p) * 100}%,0,0)`, et));
  }
  function Zt(v) {
    var B;
    const le = v.target, d = (B = le == null ? void 0 : le.closest) == null ? void 0 : B.call(le, `.${Cr["root_restrict-scroll"]}`);
    o.length < 2 || v.touches.length > 1 || d && d !== st || (It = !1, hr = !1, Ne = yu(v), bt = null, Ft = Date.now(), ze = kt || -p * st.clientWidth, e(32, pt = !1), nr && clearTimeout(nr));
  }
  function Yt(v) {
    const le = yu(v);
    if (!Ne || bt && bt.x === le.x && bt.y === le.y)
      return;
    bt = le;
    const d = st.clientWidth;
    if (It) {
      kt = le.x - Ne.x + ze;
      const B = d * o.length;
      if (kt > 0)
        kt = kt * d / (kt + d * 3);
      else if (-kt + d > B) {
        let Me = -kt + d - B;
        Me = Me * d / (Me + d * 3), kt = d - B - Me;
      }
      wr(kt * 100 / d);
    } else Math.abs(le.y - Ne.y) > 10 ? hr = !0 : !hr && Math.abs(le.x - Ne.x) > 8 && (vt(), It = !0, Ne = le, wr(-p * 100), Dr(!0));
    It && v.cancelable && v.preventDefault();
  }
  function _r() {
    hr = !1, Ne = null;
    let v = p;
    if (!It)
      return;
    It = !1;
    const le = Math.min(512, st.clientWidth), d = Math.abs(ze - kt), B = Math.min(1, (Date.now() - Ft) / 750);
    d > le / 4 * B && (v += ze > kt ? 1 : -1), v >= o.length ? v = o.length - 1 : v < 0 && (v = 0), v === p ? (e(32, pt = !0), kt = -v * le, wr(-v * 100), tr()) : Gt(v, !1, !0);
  }
  function ut(v, le) {
    return v > o.length - 1 ? le === "ring" ? Vo(v, o.length) : o.length - 1 : v < 0 ? le === "ring" ? Vo(v, o.length) : 0 : v;
  }
  function se() {
    er === "slide" && Sn().then(() => {
      const v = nt == null ? void 0 : nt.querySelector("." + vn.tabs__item_selected);
      v && e(36, mr = {
        left: `${v.offsetLeft}px`,
        width: `${v.offsetWidth}px`,
        height: `${v.offsetHeight}px`
      });
    });
  }
  xn(() => {
    se(), ie.devtoolCreateHierarchy === "eager" && Gt(p, !1, !1);
  }), sn(() => {
    xe.forEach((v) => {
      v == null || v.destroy();
    }), We && (ie.unregisterInstance(We), e(60, We = void 0));
  });
  const mt = (v, le) => br(le, v);
  function or(v) {
    Fr[v ? "unshift" : "push"](() => {
      nt = v, e(21, nt);
    });
  }
  function yr(v) {
    Fr[v ? "unshift" : "push"](() => {
      et = v, e(23, et);
    });
  }
  function ar(v) {
    Fr[v ? "unshift" : "push"](() => {
      st = v, e(22, st);
    });
  }
  return t.$$set = (v) => {
    "componentContext" in v && e(0, ee = v.componentContext), "layoutParams" in v && e(1, ge = v.layoutParams);
  }, t.$$.update = () => {
    var v, le, d, B, Me, qe, ve, R, Tt, Ot;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(66, n = ee.origJson), t.$$.dirty[2] & /*origJson*/
    16 && n && $t(), t.$$.dirty[0] & /*componentContext*/
    1 && e(63, o = Array.isArray(ee.json.items) && ee.json.items || []), t.$$.dirty[2] & /*items*/
    2 && e(47, i = o.map((Xe) => {
      var dt;
      return { json: Xe.div, id: (dt = Xe.div) == null ? void 0 : dt.id };
    })), t.$$.dirty[0] & /*componentContext*/
    1 && e(65, s = ee.getJsonWithVars(ee.json.selected_tab)), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(46, a = ee.getDerivedFromVars(ee.json.tab_title_style, void 0, !0))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(45, l = ee.getDerivedFromVars(ee.json.has_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(44, c = ee.getDerivedFromVars(ee.json.separator_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ve(e(43, u = ee.getDerivedFromVars(ee.json.separator_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(42, f = ee.getDerivedFromVars(ee.json.switch_tabs_by_content_swipe_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(41, _ = ee.getDerivedFromVars(ee.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(40, h = ee.getDerivedFromVars(ee.json.title_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(39, m = ee.getDerivedFromVars(ee.json.tab_title_delimiter))), t.$$.dirty[2] & /*jsonSelectedTab*/
    8 && e(17, p = s && Number(s) || 0), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*items*/
    2)
      if (Array.isArray(o) && o.length) {
        let Xe = [];
        o.forEach((dt, Wt) => {
          const Vr = ee.getJsonWithVars({
            index: Wt,
            title: dt.title,
            title_click_action: dt.title_click_action
          });
          Vr.title && typeof Vr.title == "string" ? Xe.push(Vr) : ee.logError(Y(new Error("Incorrect title for the tab"), { additional: { index: Wt } }));
        }), Oe.set(Xe);
      } else
        Oe.set([]);
    if (t.$$.dirty[0] & /*$childStore, componentContext*/
    262145 && (H != null && H.length ? e(2, te = !1) : (e(2, te = !0), ee.logError(Y(new Error('Incorrect or empty "items" prop for div "tabs"'))))), t.$$.dirty[0] & /*componentContext, childLayoutParams*/
    9) {
      let Xe = { parentContainerOrientation: "horizontal" };
      ((v = ee.json.width) == null ? void 0 : v.type) === "wrap_content" && (Xe.parentHorizontalWrapContent = !0), (!ee.json.height || ee.json.height.type === "wrap_content") && (Xe.parentVerticalWrapContent = !0), e(3, Pe = Qo(Xe, Pe));
    }
    if (t.$$.dirty[0] & /*hasError, selected, componentContext*/
    131077 | t.$$.dirty[2] & /*items*/
    2 && !te && (p < 0 || p >= o.length) && (ee.logError(Y(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: ee.json.selected_tab,
        length: o.length
      }
    })), e(17, p = p < 0 ? 0 : o.length - 1)), t.$$.dirty[0] & /*hasError, $childStore, selected, componentContext*/
    393221 && !te && !H.some((Xe) => p === Xe.index) && (ee.logError(Y(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: ee.json.selected_tab
      }
    })), e(17, p = ((le = H[0]) == null ? void 0 : le.index) || 0)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && e(64, w = O || {}), t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(4, rt = Gn(w.font_size, rt)), t.$$.dirty[0] & /*tabFontSize, $direction, tabPaddings*/
    524336 | t.$$.dirty[2] & /*tabStyle*/
    4 && (w.font_size || w.paddings)) {
      const Xe = w.paddings || { top: 6, right: 8, bottom: 6, left: 8 }, dt = {
        top: (Number(Xe.top) || 0) / rt * 10,
        right: (Number(Ae === "ltr" ? Xe.end : Xe.start) || Number(Xe.right) || 0) / rt * 10,
        bottom: (Number(Xe.bottom) || 0) / rt * 10,
        left: (Number(Ae === "ltr" ? Xe.start : Xe.end) || Number(Xe.left) || 0) / rt * 10
      };
      e(5, Pt = ss(dt, Ae, Pt));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Xe = w.line_height;
      Xe !== void 0 && zn(Xe) && e(25, ct = pe(Xe / rt * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Xe = w.letter_spacing;
      Xe !== void 0 && Nn(Xe) && e(26, X = pe(Xe / rt * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize, tabBorderRadius*/
    80 | t.$$.dirty[2] & /*tabStyle*/
    4 && (w.corner_radius || w.corners_radius || w.font_size)) {
      const Xe = (d = w.corner_radius) != null ? d : 1e3;
      w.corners_radius ? e(6, _e = Db(w.corners_radius, Xe, rt, _e)) : Nn(Xe) && e(6, _e = pe(Xe / rt * 10));
    }
    t.$$.dirty[0] & /*tabActiveFontWeight*/
    128 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(7, lt = mi(w.active_font_weight || w.font_weight, void 0, lt)), w.font_family && typeof w.font_family == "string" ? e(27, Fe = ie.typefaceProvider(w.font_family, { fontWeight: lt || 400 })) : e(27, Fe = ""), e(28, I = Oi(w.active_font_variation_settings))), t.$$.dirty[0] & /*tabInactiveFontWeight*/
    256 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(8, jt = mi(w.inactive_font_weight || w.font_weight, void 0, jt)), w.font_family && typeof w.font_family == "string" ? e(29, _t = ie.typefaceProvider(w.font_family, { fontWeight: jt || 400 })) : e(29, _t = ""), e(30, At = Oi(w.inactive_font_variation_settings))), t.$$.dirty[0] & /*tabActiveTextColor*/
    512 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(9, Dt = pr(w.active_text_color, 1, Dt)), t.$$.dirty[0] & /*tabInactiveTextColor*/
    1024 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(10, ot = pr(w.inactive_text_color, 1, ot)), t.$$.dirty[0] & /*tabActiveBackground*/
    2048 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(11, K = pr(w.active_background_color, 1, K)), t.$$.dirty[0] & /*tabInactiveBackground*/
    4096 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(12, Mt = pr(w.inactive_background_color, 1, Mt)), t.$$.dirty[0] & /*tabItemSpacing*/
    8192 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(13, Vt = en(w.item_spacing, Vt)), t.$$.dirty[0] & /*$jsonSeparator, $direction*/
    1572864 | t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*$jsonSeparatorColor, $jsonSeparatorPaddings, separatorMargins*/
    1537 && Je && (re && e(61, Jt = pr(re, 1, Jt)), Ce && e(62, qt = ss(Ce, Ae, qt))), t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*separatorMargins*/
    1 && e(38, k = {
      background: Jt,
      margin: qt
    }), t.$$.dirty[2] & /*$jsonSwipeEnabled*/
    256 && e(37, z = typeof W > "u" ? !0 : !!W), t.$$.dirty[0] & /*titlePadding*/
    16384 | t.$$.dirty[2] & /*$jsonTitlePaddings*/
    128 && e(14, be = hi(C || void 0, be)), t.$$.dirty[0] & /*delimitierStyle*/
    32768 | t.$$.dirty[2] & /*$jsonDelimiterStyle*/
    64 && e(15, lr = Ib(T, lr)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && ((O == null ? void 0 : O.animation_type) === "fade" || (O == null ? void 0 : O.animation_type) === "none") && e(16, er = O.animation_type), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && Nn(O == null ? void 0 : O.animation_duration) && e(35, Xt = O.animation_duration), t.$$.dirty[2] & /*items*/
    2 && ft(o), t.$$.dirty[0] & /*componentContext, hasError, selected*/
    131077 | t.$$.dirty[1] & /*prevId*/
    536870912 | t.$$.dirty[2] & /*items*/
    2 && ee.json && (We && (ie.unregisterInstance(We), e(60, We = void 0)), ee.id && !te && !ee.fakeElement && (e(60, We = ee.id), ie.registerInstance(We, {
      setCurrentItem(Xe, dt) {
        if (Xe < 0 || Xe > o.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        Gt(Xe, !1, dt);
      },
      setPreviousItem(Xe, dt, Wt) {
        let Vr = ut(p - Xe, dt);
        Gt(Vr, !1, Wt);
      },
      setNextItem(Xe, dt, Wt) {
        let Vr = ut(p + Xe, dt);
        Gt(Vr, !1, Wt);
      },
      scrollToStart(Xe) {
        Gt(0, !1, Xe);
      },
      scrollToEnd(Xe) {
        Gt(o.length - 1, !1, Xe);
      },
      scrollCombined({ step: Xe, overflow: dt, animated: Wt }) {
        Xe && Gt(ut(p + Xe, dt || "clamp"), !1, Wt || !0);
      }
    }))), t.$$.dirty[0] & /*componentContext, selected, animationType*/
    196609 | t.$$.dirty[2] & /*items*/
    2 && e(24, wt = {
      "height-parent": ((B = ee.json.height) == null ? void 0 : B.type) === "match_parent" ? "yes" : "",
      "own-height": (((Me = ee.json.height) == null ? void 0 : Me.type) === "match_parent" || ((qe = ee.json.height) == null ? void 0 : qe.type) === "fixed") && !(((Tt = (R = (ve = o[p]) == null ? void 0 : ve.div) == null ? void 0 : R.height) == null ? void 0 : Tt.type) === "wrap_content" && ((Ot = o[p].div) != null && Ot.height.constrained)),
      animation: er
    });
  }, [
    ee,
    ge,
    te,
    Pe,
    rt,
    Pt,
    _e,
    lt,
    jt,
    Dt,
    ot,
    K,
    Mt,
    Vt,
    be,
    lr,
    er,
    p,
    H,
    Ae,
    Je,
    nt,
    st,
    et,
    wt,
    ct,
    X,
    Fe,
    I,
    _t,
    At,
    Ke,
    pt,
    xe,
    Be,
    Xt,
    mr,
    z,
    k,
    m,
    h,
    _,
    f,
    u,
    c,
    l,
    a,
    i,
    ue,
    Se,
    He,
    Oe,
    xt,
    J,
    br,
    at,
    Zt,
    Yt,
    _r,
    se,
    We,
    Jt,
    qt,
    o,
    w,
    s,
    n,
    O,
    T,
    C,
    W,
    Ce,
    re,
    mt,
    or,
    yr,
    ar
  ];
}
class Wb extends Or {
  constructor(r) {
    super(), Lr(this, r, Hb, Rb, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const Ub = "appkit-state", Gb = "appkit-state_overflow_visible", Jb = "appkit-state__animations", bi = {
  state: Ub,
  state_overflow_visible: Gb,
  state__animations: Jb,
  "state__animation-child": "appkit-state__animation-child",
  "state__animation-child-inner": "appkit-state__animation-child-inner"
};
function wl(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function qb(t) {
  return t * t * t;
}
function Qd(t) {
  const r = t - 1;
  return r * r * r + 1;
}
function xd(t) {
  return (r) => {
    if (r <= 0)
      return 0;
    if (r >= 1)
      return 1;
    const e = r * t.length, n = Math.floor(e), o = t[n], i = t[n + 1], s = e - n;
    return o * s + i * (1 - s);
  };
}
const Kb = [
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
], Yb = xd(Kb), Xb = [
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
], Zb = xd(Xb), ta = {
  linear: il,
  ease: Yb,
  ease_in: qb,
  ease_out: Qd,
  ease_in_out: wl,
  spring: Zb
};
function va(t) {
  return ta[t];
}
const $d = 200, e_ = 0, Qb = 0, xb = 0;
function Tu(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || $d) + (Number(r.start_delay) || e_)
  ));
}
function $b(t, {
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
      const c = l * i, u = r.map((k) => {
        var Z, ce, C;
        const z = Number(k.start_delay) || e_, H = Number(k.duration) || $d, O = Math.max(0, Math.min(1, (c - z) / H)), oe = o === "in" ? 1 - O : O, T = (va(k.interpolator || "ease_in_out") || wl)(oe);
        if (k.type === "fade")
          return T >= 1 ? {
            active: !1,
            opacity: 0
          } : {
            active: T > 0 && T < 1,
            opacity: (1 - T) * a + T * (k.alpha || Qb)
          };
        if (k.type === "slide") {
          const D = k.edge === "top" || k.edge === "left" ? -1 : 1, M = k.edge === "top" || k.edge === "bottom" || !k.edge ? "translateY" : "translateX";
          let W = (Z = k.distance) == null ? void 0 : Z.value;
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
          const D = 1 - T + T * (k.scale || xb), M = (ce = k.pivot_x) != null ? ce : 0.5, W = (C = k.pivot_y) != null ? C : 0.5, Q = (1 - D) * e.width * M, me = (1 - D) * e.height * W;
          return {
            active: T > 0 && T < 1,
            scale: `translate(${Q}px, ${me}px) scale(${D})`
          };
        }
        return {};
      }), f = u.map((k) => k.opacity).filter((k) => k !== void 0).reduce((k, z) => k * z, 1), _ = u.map((k) => k.translate).filter((k) => k !== void 0).join(" "), h = u.map((k) => k.scale).filter((k) => k !== void 0).join(" "), m = u.filter((k) => k.active).map((k) => k.scale).filter((k) => k !== void 0), p = m.length ? m[m.length - 1] : h;
      return `transform:${[_, p].filter(Boolean).join(" ") || "none"};opacity:${f}`;
    }
  };
}
function Wo(t, r, e) {
  return t * (1 - e) + r * e;
}
const ey = 200, ty = 0;
function ry(t, {
  rootBbox: r,
  beforeBbox: e,
  afterBbox: n,
  transition: o
}) {
  var i, s;
  return {
    delay: (i = o.start_delay) != null ? i : ty,
    duration: Li() ? 0 : (s = o.duration) != null ? s : ey,
    easing: o.interpolator && o.interpolator in ta ? ta[o.interpolator] : wl,
    css: (a) => [
      `top:${Wo(e.top, n.top, a) - r.top}px`,
      `left:${Wo(e.left, n.left, a) - r.left}px`,
      `width:${Wo(e.width, n.width, a)}px`,
      `height:${Wo(e.height, n.height, a)}px`
    ].join(";")
  };
}
function t_(t) {
  const r = [];
  return t.type === "set" ? (t.items || []).forEach((e) => {
    r.push(...t_(e));
  }) : r.push(t), r;
}
const { Map: ny } = Po;
function Mu(t, r, e) {
  const n = t.slice();
  return n[37] = r[e], n;
}
function Pu(t, r, e) {
  const n = t.slice();
  return n[40] = r[e], n;
}
function oy(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function iy(t) {
  let r, e;
  const n = [
    {
      cls: ht(
        "state",
        bi,
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
    $$slots: { default: [ay] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = jo(o, n[i]);
  return r = new hn({ props: o }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(i, s) {
      Nt(r, i, s), e = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams, parentOfItems, replaceItems, devapi*/
      6915 ? No(n, [
        s[0] & /*mods*/
        256 && {
          cls: ht(
            "state",
            bi,
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
        2048 && Sd(
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
      zt(r, i);
    }
  };
}
function Nu(t) {
  let r, e, n = rr(
    /*childContexts*/
    t[7]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Lu(Pu(t, n, s));
  const i = (s) => x(o[s], 1, 1, () => {
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
        n = rr(
          /*childContexts*/
          s[7]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const c = Pu(s, n, l);
          o[l] ? (o[l].p(c, a), L(o[l], 1)) : (o[l] = Lu(c), o[l].c(), L(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (ir(), l = n.length; l < o.length; l += 1)
          i(l);
        sr();
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
function zu(t) {
  let r, e, n, o;
  return e = new qn({
    props: { componentContext: (
      /*context*/
      t[40]
    ) }
  }), {
    c() {
      r = Te("div"), Lt(e.$$.fragment), n = gr(), r.hidden = !0, g(r, "data-hidden", "true");
    },
    m(i, s) {
      q(i, r, s), Nt(e, r, null), yt(r, n), o = !0;
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
      i && G(r), zt(e);
    }
  };
}
function Lu(t) {
  let r, e, n = (
    /*context*/
    t[40] && /*context*/
    t[40] !== /*selectedComponentContext*/
    t[6] && zu(t)
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
      192 && L(n, 1)) : (n = zu(o), n.c(), L(n, 1), n.m(r.parentNode, r)) : n && (ir(), x(n, 1, 1, () => {
        n = null;
      }), sr());
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
function Ou(t) {
  let r = (
    /*selectedId*/
    t[5]
  ), e, n, o = Bu(t);
  return {
    c() {
      o.c(), e = Kt();
    },
    m(i, s) {
      o.m(i, s), q(i, e, s), n = !0;
    },
    p(i, s) {
      s[0] & /*selectedId*/
      32 && Sr(r, r = /*selectedId*/
      i[5]) ? (ir(), x(o, 1, 1, j), sr(), o = Bu(i), o.c(), L(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
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
function Bu(t) {
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
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function sy(t) {
  let r, e, n, o, i, s, a, l;
  n = new qn({
    props: {
      componentContext: (
        /*item*/
        t[37].componentContextCopy
      )
    }
  });
  function c() {
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
      r = Te("div"), e = Te("div"), Lt(n.$$.fragment), o = gr(), g(e, "class", bi["state__animation-child-inner"]), g(r, "class", bi["state__animation-child"]);
    },
    m(u, f) {
      q(u, r, f), yt(r, e), Nt(n, e, null), yt(r, o), s = !0, a || (l = Qe(r, "introend", c), a = !0);
    },
    p(u, f) {
      t = u;
      const _ = {};
      f[0] & /*animationList*/
      16 && (_.componentContext = /*item*/
      t[37].componentContextCopy), n.$set(_);
    },
    i(u) {
      s || (L(n.$$.fragment, u), i || go(() => {
        i = dl(
          r,
          ry,
          /*item*/
          t[37]
        ), i.start();
      }), s = !0);
    },
    o(u) {
      x(n.$$.fragment, u), s = !1;
    },
    d(u) {
      u && G(r), zt(n), a = !1, l();
    }
  };
}
function ly(t) {
  let r, e, n, o, i, s = `${/*item*/
  t[37].offsetLeft}px`, a = `${/*item*/
  t[37].offsetTop}px`, l = `${/*item*/
  t[37].width}px`, c = `${/*item*/
  t[37].height}px`, u, f, _;
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
      r = Te("div"), e = Te("div"), Lt(n.$$.fragment), o = gr(), g(e, "class", bi["state__animation-child-inner"]), g(r, "class", bi["state__animation-child"]), F(r, "left", s), F(r, "top", a), F(r, "width", l), F(r, "height", c);
    },
    m(m, p) {
      q(m, r, p), yt(r, e), Nt(n, e, null), yt(r, o), u = !0, f || (_ = Qe(r, "introend", h), f = !0);
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
      16 && c !== (c = `${/*item*/
      t[37].height}px`) && F(r, "height", c);
    },
    i(m) {
      u || (L(n.$$.fragment, m), i || go(() => {
        i = dl(
          r,
          $b,
          /*item*/
          t[37]
        ), i.start();
      }), u = !0);
    },
    o(m) {
      x(n.$$.fragment, m), u = !1;
    },
    d(m) {
      m && G(r), zt(n), f = !1, _();
    }
  };
}
function Ru(t, r) {
  let e, n, o, i, s;
  const a = [ly, sy], l = [];
  function c(u, f) {
    return "direction" in /*item*/
    u[37] ? 0 : 1;
  }
  return n = c(r), o = l[n] = a[n](r), {
    key: t,
    first: null,
    c() {
      e = Kt(), o.c(), i = Kt(), this.first = e;
    },
    m(u, f) {
      q(u, e, f), l[n].m(u, f), q(u, i, f), s = !0;
    },
    p(u, f) {
      r = u;
      let _ = n;
      n = c(r), n === _ ? l[n].p(r, f) : (ir(), x(l[_], 1, 1, () => {
        l[_] = null;
      }), sr(), o = l[n], o ? o.p(r, f) : (o = l[n] = a[n](r), o.c()), L(o, 1), o.m(i.parentNode, i));
    },
    i(u) {
      s || (L(o), s = !0);
    },
    o(u) {
      x(o), s = !1;
    },
    d(u) {
      u && (G(e), G(i)), l[n].d(u);
    }
  };
}
function ay(t) {
  let r, e, n, o = [], i = new ny(), s, a = (
    /*childContexts*/
    t[7] && Nu(t)
  ), l = (
    /*selectedComponentContext*/
    t[6] && Ou(t)
  ), c = rr(
    /*animationList*/
    t[4]
  );
  const u = (f) => (
    /*item*/
    f[37]
  );
  for (let f = 0; f < c.length; f += 1) {
    let _ = Mu(t, c, f), h = u(_);
    i.set(h, o[f] = Ru(h, _));
  }
  return {
    c() {
      a && a.c(), r = gr(), l && l.c(), e = gr(), n = Te("div");
      for (let f = 0; f < o.length; f += 1)
        o[f].c();
      g(n, "class", bi.state__animations), g(n, "aria-hidden", "true");
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
      128 && L(a, 1)) : (a = Nu(f), a.c(), L(a, 1), a.m(r.parentNode, r)) : a && (ir(), x(a, 1, 1, () => {
        a = null;
      }), sr()), /*selectedComponentContext*/
      f[6] ? l ? (l.p(f, _), _[0] & /*selectedComponentContext*/
      64 && L(l, 1)) : (l = Ou(f), l.c(), L(l, 1), l.m(e.parentNode, e)) : l && (ir(), x(l, 1, 1, () => {
        l = null;
      }), sr()), _[0] & /*animationList, onOutro*/
      8208 && (c = rr(
        /*animationList*/
        f[4]
      ), ir(), o = Ad(o, _, u, 1, f, c, i, n, Ed, Ru, null, Mu), sr());
    },
    i(f) {
      if (!s) {
        L(a), L(l);
        for (let _ = 0; _ < c.length; _ += 1)
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
function cy(t) {
  let r, e, n, o;
  const i = [iy, oy], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[2] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (ir(), x(s[u], 1, 1, () => {
        s[u] = null;
      }), sr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
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
function uy(t) {
  return t.some((r) => r.type === "fade");
}
function r_(t) {
  return t.type === "change_bounds" ? t : t.type === "set" ? r_(t.items[0]) : null;
}
function fy(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h = j, m = () => (h(), h = S(i, (ue) => e(20, _ = ue)), i);
  t.$$.on_destroy.push(() => h());
  let { componentContext: p } = r, { layoutParams: w = void 0 } = r;
  const k = Ir(Kr);
  let z = !1, H, O = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Set(), fe = [], T = [], Z = [], ce = [], C, D, M, W, Q = !1, me = {
    devapi: {
      getState() {
        return D;
      },
      setState(ue) {
        return re(ue);
      }
    }
  };
  function Ae() {
    e(15, Q = !1);
  }
  function Ce(ue) {
    W ? e(6, M = W[c.findIndex((ae) => ae.state_id === (ue == null ? void 0 : ue.state_id))]) : (M && M.destroy(), e(6, M = ue != null && ue.div ? p.produceChildContext(ue.div, {
      path: ue.state_id || "<unknown>"
    }) : void 0));
  }
  function he(ue) {
    const ae = p.json.states;
    if (!ae)
      return;
    const de = /* @__PURE__ */ new Set();
    e(16, c = ae.map((ee, ge) => (c[ge].div !== ue[ge] && ee.state_id && de.add(ee.state_id), { ...ee, div: ue[ge] }))), e(0, p.json = { ...p.json, states: c }, p), D && de.has(D) && Ce(c.find((ee) => ee.state_id === D) || null);
  }
  function Ve(ue, ae, de) {
    let { json: ee, parentComponentContext: ge, transitions: ie, node: Se } = ae;
    ee = p.getJsonWithVars(ee), ie = p.getJsonWithVars(ie);
    const He = t_(ie), We = ae.bbox || Se.getBoundingClientRect(), te = {
      ...ee,
      margins: void 0,
      alpha: uy(He) ? void 0 : ee.alpha
    };
    return {
      id: ge.id || "",
      json: te,
      componentContextCopy: ge.produceChildContext(te, { fake: wc }),
      elementBbox: We,
      rootBbox: ue,
      transitions: He,
      alpha: ee.alpha,
      width: We.width,
      height: We.height,
      offsetTop: We.top - ue.top,
      offsetLeft: We.left - ue.left,
      direction: de,
      resolvePromise: ae.resolvePromise,
      node: ae.node
    };
  }
  async function re(ue) {
    if (D === ue)
      return p;
    k.setRunning("stateChange", !0);
    const ae = new Set(oe);
    fe.forEach((te) => {
      te.resolvePromise && te.resolvePromise();
    }), e(4, fe = []);
    let de = [];
    if (H) {
      const te = H.getBoundingClientRect();
      de = Z.map((Oe) => Ve(te, Oe, "out"));
    }
    ce.forEach((te) => {
      te.transitions && O.set(te.id, {
        transitions: te.transitions,
        rect: te.node.getBoundingClientRect()
      });
    }), T = [], Z = [], ce = [];
    const ee = c.find((te) => te.state_id === ue) || null;
    if (ee ? (e(5, D = ue), a == null || a.setValue(D), Ce(ee)) : p.logError(Y(new Error("Cannot find state with id"), { additional: { stateId: ue } })), await Sn(), !H)
      return;
    const ge = H.getBoundingClientRect();
    let ie = T.filter((te) => {
      var Oe;
      return te.parentComponentContext.id && !ae.has(te.parentComponentContext.id) ? !0 : ((Oe = te.resolvePromise) == null || Oe.call(te), !1);
    }).map((te) => Ve(ge, te, "in"));
    de = de.filter((te) => {
      var Oe;
      return te.id && !oe.has(te.id) ? !0 : ((Oe = te.resolvePromise) == null || Oe.call(te), !1);
    });
    const Se = de.concat(ie), He = Se.reduce(
      (te, Oe) => Math.max(te, Tu(Oe.transitions)),
      0
    ), We = ce.filter((te) => O.has(te.id)).map((te) => {
      const Oe = {
        ...te.json,
        margins: void 0,
        width: { type: "match_parent" },
        height: { type: "match_parent" }
      }, Pe = O.get(te.id);
      return {
        id: te.parentComponentContext.id || "",
        json: Oe,
        componentContextCopy: te.parentComponentContext.produceChildContext(Oe, { fake: wc }),
        rootBbox: ge,
        beforeBbox: Pe.rect,
        afterBbox: te.node.getBoundingClientRect(),
        node: te.node,
        transition: p.getJsonWithVars(r_(Pe.transitions)),
        resolvePromise: te.resolvePromise
      };
    });
    return e(4, fe = [
      ...Se.map((te) => ({ ...te, maxDuration: He })),
      ...We
    ]), O.clear(), k.setRunning("stateChange", !1), p;
  }
  fi(ma, {
    // eslint-disable-next-line max-params
    runVisibilityTransition(ue, ae, de, ee, ge, ie) {
      if (!H)
        return Promise.resolve();
      const Se = H.getBoundingClientRect(), He = Ve(
        Se,
        {
          json: ue,
          parentComponentContext: ae,
          transitions: de,
          node: ee,
          bbox: ie
        },
        ge
      ), We = Tu(He.transitions), te = { ...He, maxDuration: We };
      return e(4, fe = [...fe.filter((Oe) => Oe.node !== He.node), te]), new Promise((Oe) => {
        te.resolvePromise = Oe;
      });
    },
    registerChildWithTransitionIn(ue, ae, de, ee) {
      const ge = {
        json: ue,
        parentComponentContext: ae,
        transitions: de,
        node: ee
      };
      return T.push(ge), new Promise((ie) => {
        ge.resolvePromise = ie;
      });
    },
    registerChildWithTransitionOut(ue, ae, de, ee) {
      const ge = {
        json: ue,
        parentComponentContext: ae,
        transitions: de,
        node: ee
      };
      return Z.push(ge), new Promise((ie) => {
        ge.resolvePromise = ie;
      });
    },
    registerChildWithTransitionChange(ue, ae, de, ee) {
      const ge = ae.id;
      if (!ge)
        return Promise.resolve();
      const ie = {
        id: ge,
        json: ue,
        parentComponentContext: ae,
        transitions: de,
        node: ee
      };
      return ce.push(ie), new Promise((Se) => {
        ie.resolvePromise = Se;
      });
    },
    hasTransitionChange(ue) {
      return ue ? O.has(ue) : !1;
    },
    registerChild(ue) {
      oe.add(ue);
    },
    unregisterChild(ue) {
      oe.delete(ue);
    }
  });
  function $e(ue) {
    if (!Q && (e(15, Q = !0), ue.length)) {
      k.devtoolCreateHierarchy === "eager" && e(7, W = ue.map((de) => de != null && de.div ? p.produceChildContext(de.div, { path: de.state_id || "<unknown>" }) : void 0));
      const ae = (a == null ? void 0 : a.getValue()) || o;
      if (ae) {
        e(5, D = ae);
        const de = ue.find((ee) => ee.state_id === D) || null;
        Ce(de), de || p.logError(Y(new Error("Cannot find state for default_state_id"), { additional: { selectedId: D } }));
      } else {
        const de = ue[0];
        e(5, D = de.state_id), Ce(de);
      }
      a && (a.setValue(D), a.subscribe((de) => {
        re(de);
      }));
    }
  }
  function Ge(ue) {
    e(4, fe = fe.filter((ae) => ae !== ue)), ue.resolvePromise && ue.resolvePromise();
  }
  sn(() => {
    W ? W.forEach((ue) => {
      ue == null || ue.destroy();
    }) : M && M.destroy(), C && (C(), e(14, C = void 0));
  });
  const Je = (ue) => Ge(ue), ke = (ue) => Ge(ue);
  function De(ue) {
    Fr[ue ? "unshift" : "push"](() => {
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
    262144 && l && Ae(), t.$$.dirty[0] & /*stateId, componentContext*/
    131073 && (n ? e(2, z = !1) : (e(2, z = !0), p.logError(Y(new Error('Missing "id" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext*/
    1 && p.json && (oe = /* @__PURE__ */ new Set()), t.$$.dirty[0] & /*componentContext*/
    1 && e(16, c = Array.isArray(p.json.states) && p.json.states || []), t.$$.dirty[0] & /*items*/
    65536 && e(9, u = c.map((ue) => {
      var ae;
      return { json: ue.div, id: (ae = ue.div) == null ? void 0 : ae.id };
    })), t.$$.dirty[0] & /*items, componentContext*/
    65537 && (c != null && c.length ? e(2, z = !1) : (e(2, z = !0), p.logError(Y(new Error('Empty "states" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext, stateUnregister, stateId*/
    147457 && p.json && (C && (C(), e(14, C = void 0)), n && !(p != null && p.fakeElement) && e(14, C = p.registerState(n, re))), t.$$.dirty[0] & /*inited, items*/
    98304 && !Q && $e(c), t.$$.dirty[0] & /*$jsonClipToBounds*/
    1048576 && e(8, f = {
      overflow: _ === !1 || _ === 0 ? "visible" : void 0
    });
  }, [
    p,
    w,
    z,
    H,
    fe,
    D,
    M,
    W,
    f,
    u,
    i,
    me,
    he,
    Ge,
    C,
    Q,
    c,
    n,
    l,
    s,
    _,
    Je,
    ke,
    De
  ];
}
class dy extends Or {
  constructor(r) {
    super(), Lr(this, r, fy, cy, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const _y = "appkit-pager", py = "appkit-pager__items", gy = "appkit-pager_animated", hy = "appkit-pager__item", my = "appkit-pager_clip", by = "appkit-pager_orientation_horizontal", yy = "appkit-pager_orientation_vertical", wy = "appkit-pager__item_height_content", ky = "appkit-pager__item_height_fixed", vy = "appkit-pager__item_width_content", jy = "appkit-pager__item_width_fixed", Cy = "appkit-pager__arrow", Mo = {
  pager: _y,
  pager__items: py,
  pager_animated: gy,
  pager__item: hy,
  "pager_scroll-align_start": "appkit-pager_scroll-align_start",
  "pager_scroll-align_center": "appkit-pager_scroll-align_center",
  "pager_scroll-align_end": "appkit-pager_scroll-align_end",
  pager_clip: my,
  pager_orientation_horizontal: by,
  pager_orientation_vertical: yy,
  "pager_cross-align_center": "appkit-pager_cross-align_center",
  "pager_cross-align_end": "appkit-pager_cross-align_end",
  pager__item_height_content: wy,
  pager__item_height_fixed: ky,
  "pager__item_height-constrained": "appkit-pager__item_height-constrained",
  pager__item_width_content: vy,
  pager__item_width_fixed: jy,
  "pager__item_width-constrained": "appkit-pager__item_width-constrained",
  pager__arrow: Cy,
  "pager__arrow-icon-path": "appkit-pager__arrow-icon-path"
}, { window: Ey } = Po;
function Hu(t, r, e) {
  const n = t.slice();
  return n[95] = r[e], n;
}
function Ay(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Sy(t) {
  let r, e;
  return r = new hn({
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
      $$slots: { default: [Iy] },
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Wu(t) {
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
      r = Te("div"), Lt(e.$$.fragment), n = gr(), g(r, "class", o = ht("pager__item", Mo, Ju(
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
    m(l, c) {
      q(l, r, c), Nt(e, r, null), yt(r, n), a = !0;
    },
    p(l, c) {
      const u = {};
      c[0] & /*visibleItems*/
      16 && (u.componentContext = /*item*/
      l[95].componentContext), c[0] & /*childLayoutParams*/
      512 && (u.layoutParams = /*childLayoutParams*/
      l[9]), e.$set(u), (!a || c[0] & /*orientation, visibleItems*/
      20 && o !== (o = ht("pager__item", Mo, Ju(
        /*orientation*/
        l[2],
        /*item*/
        l[95]
      )))) && g(r, "class", o), (!a || c[0] & /*visibleItems*/
      16 && i !== (i = /*instId*/
      l[26] + "-panel-" + /*item*/
      l[95].index)) && g(r, "id", i), (!a || c[0] & /*visibleItems*/
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
      l && G(r), zt(e);
    }
  };
}
function Uu(t) {
  let r, e, n, o = !/*leftClass*/
  t[27] && Vy();
  return {
    c() {
      r = Te("div"), o && o.c(), g(
        r,
        "class",
        /*leftClass*/
        t[27] || `${Mo.pager__arrow} ${mo.arrow} ${mo.arrow_left}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = Qe(
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
function Vy(t) {
  let r, e;
  return {
    c() {
      r = $r("svg"), e = $r("path"), g(e, "class", Mo["pager__arrow-icon-path"]), g(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", mo.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), yt(r, e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Gu(t) {
  let r, e, n, o = !/*rightClass*/
  t[28] && Fy();
  return {
    c() {
      r = Te("div"), o && o.c(), g(
        r,
        "class",
        /*rightClass*/
        t[28] || `${Mo.pager__arrow} ${mo.arrow} ${mo.arrow_right}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = Qe(
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
function Fy(t) {
  let r, e;
  return {
    c() {
      r = $r("svg"), e = $r("path"), g(e, "class", Mo["pager__arrow-icon-path"]), g(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", mo.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), yt(r, e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Iy(t) {
  let r, e, n, o, i, s, a, l, c, u = rr(
    /*visibleItems*/
    t[4]
  ), f = [];
  for (let p = 0; p < u.length; p += 1)
    f[p] = Wu(Hu(t, u, p));
  const _ = (p) => x(f[p], 1, 1, () => {
    f[p] = null;
  });
  let h = (
    /*hasScrollLeft*/
    t[11] && /*shouldCheckArrows*/
    t[12] && Uu(t)
  ), m = (
    /*hasScrollRight*/
    t[10] && /*shouldCheckArrows*/
    t[12] && Gu(t)
  );
  return {
    c() {
      r = Te("div");
      for (let p = 0; p < f.length; p += 1)
        f[p].c();
      o = gr(), h && h.c(), i = gr(), m && m.c(), s = Kt(), g(r, "class", e = Mo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (t[24] ? Cr["root_restrict-scroll"] : "")), g(r, "style", n = dr(
        /*style*/
        t[14]
      ));
    },
    m(p, w) {
      q(p, r, w);
      for (let k = 0; k < f.length; k += 1)
        f[k] && f[k].m(r, null);
      t[69](r), q(p, o, w), h && h.m(p, w), q(p, i, w), m && m.m(p, w), q(p, s, w), a = !0, l || (c = [
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
        u = rr(
          /*visibleItems*/
          p[4]
        );
        let k;
        for (k = 0; k < u.length; k += 1) {
          const z = Hu(p, u, k);
          f[k] ? (f[k].p(z, w), L(f[k], 1)) : (f[k] = Wu(z), f[k].c(), L(f[k], 1), f[k].m(r, null));
        }
        for (ir(), k = u.length; k < f.length; k += 1)
          _(k);
        sr();
      }
      (!a || w[0] & /*$jsonRestrictParentScroll*/
      16777216 && e !== (e = Mo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (p[24] ? Cr["root_restrict-scroll"] : ""))) && g(r, "class", e), (!a || w[0] & /*style*/
      16384 && n !== (n = dr(
        /*style*/
        p[14]
      ))) && g(r, "style", n), /*hasScrollLeft*/
      p[11] && /*shouldCheckArrows*/
      p[12] ? h ? h.p(p, w) : (h = Uu(p), h.c(), h.m(i.parentNode, i)) : h && (h.d(1), h = null), /*hasScrollRight*/
      p[10] && /*shouldCheckArrows*/
      p[12] ? m ? m.p(p, w) : (m = Gu(p), m.c(), m.m(s.parentNode, s)) : m && (m.d(1), m = null);
    },
    i(p) {
      if (!a) {
        for (let w = 0; w < u.length; w += 1)
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
      p && (G(r), G(o), G(i), G(s)), on(f, p), t[69](null), h && h.d(p), m && m.d(p), l = !1, Jr(c);
    }
  };
}
function Dy(t) {
  let r, e, n, o, i, s;
  const a = [Sy, Ay], l = [];
  function c(u, f) {
    return (
      /*hasError*/
      u[5] ? 1 : 0
    );
  }
  return ~(r = c(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(u, f) {
      ~r && l[r].m(u, f), q(u, n, f), o = !0, i || (s = Qe(
        Ey,
        "resize",
        /*resnap*/
        t[38]
      ), i = !0);
    },
    p(u, f) {
      let _ = r;
      r = c(u), r === _ ? ~r && l[r].p(u, f) : (e && (ir(), x(l[_], 1, 1, () => {
        l[_] = null;
      }), sr()), ~r ? (e = l[r], e ? e.p(u, f) : (e = l[r] = a[r](u), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(u) {
      o || (L(e), o = !0);
    },
    o(u) {
      x(e), o = !1;
    },
    d(u) {
      u && G(n), ~r && l[r].d(u), i = !1, s();
    }
  };
}
const bs = {
  wrap_content: "content",
  fixed: "fixed",
  match_parent: "parent"
}, yo = 2, Ty = 400, My = 8;
function Ju(t, r) {
  var n, o, i, s;
  if (t === "horizontal") {
    const a = ((n = r.height) == null ? void 0 : n.type) || "";
    return {
      height: a in bs ? bs[a] : "content",
      "height-constrained": ((o = r.height) == null ? void 0 : o.type) === "wrap_content" ? nn(r.height.constrained, !1) : !1
    };
  }
  const e = ((i = r.width) == null ? void 0 : i.type) || "";
  return {
    width: e in bs ? bs[e] : "parent",
    "width-constrained": ((s = r.width) == null ? void 0 : s.type) === "wrap_content" ? nn(r.width.constrained, !1) : !1
  };
}
function Py(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, z, H, O, oe, fe, T, Z = j, ce = () => (Z(), Z = S(u, (v) => e(60, T = v)), u), C, D = j, M = () => (D(), D = S(i, (v) => e(61, C = v)), i), W, Q = j, me = () => (Q(), Q = S(f, (v) => e(62, W = v)), f), Ae, Ce = j, he = () => (Ce(), Ce = S(l, (v) => e(63, Ae = v)), l), Ve, re = j, $e = () => (re(), re = S(a, (v) => e(64, Ve = v)), a), Ge, Je = j, ke = () => (Je(), Je = S(s, (v) => e(65, Ge = v)), s), De, ue = j, ae = () => (ue(), ue = S(Fe, (v) => e(66, De = v)), Fe), de, ee = j, ge = () => (ee(), ee = S(o, (v) => e(67, de = v)), o), ie, Se = j, He = () => (Se(), Se = S(_, (v) => e(68, ie = v)), _), We, te = j, Oe = () => (te(), te = S(c, (v) => e(24, We = v)), c);
  t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Ce()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => Je()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Se()), t.$$.on_destroy.push(() => te());
  let { componentContext: Pe } = r, { layoutParams: nt = void 0 } = r;
  const st = Ir(Kr), et = st.direction;
  yn(t, et, (v) => e(6, oe = v));
  const wt = st.genId("pager"), rt = st.getCustomization("pagerLeftClass"), Pt = st.getCustomization("pagerRightClass"), ct = st.isDesktop;
  yn(t, ct, (v) => e(59, fe = v));
  let X, _e, lt = !1, Fe, I = 0, jt = 0, _t = !1, At = "horizontal", Dt = "0em", ot = {}, K = "", Mt = "", Vt = "", Jt = {}, qt = "start", be = "center", Ke = [], pt = 0, we = [], xe = {}, Be = {}, nr, Ne, bt = 0, Ft = !1, It = !1, hr = !1, ze = !1, kt = 0, lr = "", er = 0, Xt;
  function mr() {
    e(43, ot = {}), e(9, Jt = {}), e(47, qt = "start"), e(48, be = "center"), e(52, Ft = !1), e(53, It = !1), ze = !1;
  }
  function vr(v) {
    e(0, Pe = e(51, nr = {
      ...Pe,
      json: {
        ...Pe.json,
        items: v.filter(zo)
      }
    }));
  }
  function xt(v, le) {
    Ne && Ne.update({
      instId: wt,
      currentItem: Be[le],
      size: v,
      scrollToPagerItem(d) {
        Gt(xe[d]);
      }
    });
  }
  function $t(v) {
    var d;
    if (v === jt || (jt = v, !Ke[v]))
      return;
    const le = (d = Ke[v].json) == null ? void 0 : d.selected_actions;
    le != null && le.length && Pe.execAnyActions(le);
  }
  function J(v) {
    const le = It ? !1 : v === 0, d = It ? !1 : v === we.length - 1, B = At === "horizontal", Me = _e.children[v + (It ? yo : 0)];
    if (!Me)
      return 0;
    const qe = B ? "offsetLeft" : "offsetTop", ve = B ? "offsetWidth" : "offsetHeight", R = at(), Tt = zr(), Ot = tr(), Xe = vt();
    return R >= Xe + Tt + Ot || le ? 0 : d ? (R - Tt - Ot - Xe) * (oe === "rtl" ? -1 : 1) : be === "start" && oe === "ltr" || be === "end" && oe === "rtl" ? -(Me[qe] - Tt) : be === "end" && oe === "ltr" || be === "start" && oe === "rtl" ? -(Me[qe] + Me[ve] - R + Ot) : _e[ve] / 2 - (Me[qe] + Me[ve] / 2);
  }
  function ft(v, le) {
    if (!_e)
      return;
    const d = J(v);
    e(54, hr = le), Sn().then(() => {
      var B;
      kt = d, e(55, lr = Et(kt)), e(40, I = (B = xe[v]) != null ? B : 0), ze = It && (v < 0 || v >= pt);
    });
  }
  function Gt(v, le = !0) {
    var d;
    ft((d = Be[v]) != null ? d : 0, le);
  }
  function Et(v) {
    return `${At === "horizontal" ? "translateX" : "translateY"}(${ln(v)})`;
  }
  function br(v, le) {
    return It && v >= -yo && v < pt + yo ? v : v > we.length - 1 ? le === "ring" ? Vo(v, we.length) : we.length - 1 : v < 0 ? le === "ring" ? Vo(v, we.length) : 0 : v;
  }
  function Er(v, le, d) {
    const B = br(Be[I] - v, le);
    ft(B, d);
  }
  function wr(v, le, d) {
    const B = br(Be[I] + v, le);
    ft(B, d);
  }
  function Dr() {
    Ne == null || Ne.destroy(), Ne = void 0, X && (st.unregisterInstance(X), X = void 0), Pe.fakeElement || (Ne = Pe.registerPager(Pe.id || void 0)), Pe.id && !Pe.fakeElement && (X = Pe.id, st.registerInstance(
      X,
      {
        setCurrentItem(v, le) {
          if (v < 0 || v > Ke.length - 1)
            throw new Error('Item is out of range in "set-current-item" action');
          Gt(v, le);
        },
        setPreviousItem: Er,
        setNextItem: wr,
        scrollToStart(v) {
          Gt(we[It ? yo : 0].index, v);
        },
        scrollToEnd(v) {
          Gt(we[we.length - 1 - (It ? yo : 0)].index, v);
        },
        scrollCombined({ step: v, overflow: le, animated: d }) {
          v && Gt(br(Be[I] + v, le || "clamp"), d);
        }
      },
      "warn"
    ));
  }
  function zr() {
    var le, d, B;
    return At === "horizontal" ? (d = (le = ot.start) != null ? le : oe === "ltr" ? ot.left : ot.right) != null ? d : 0 : (B = ot.top) != null ? B : 0;
  }
  function tr() {
    var le, d, B;
    return At === "horizontal" ? (d = (le = ot.end) != null ? le : oe === "ltr" ? ot.right : ot.left) != null ? d : 0 : (B = ot.bottom) != null ? B : 0;
  }
  function at() {
    var le, d;
    return _e ? At === "horizontal" ? ((le = _e.parentElement) == null ? void 0 : le.offsetWidth) || 0 : ((d = _e.parentElement) == null ? void 0 : d.offsetHeight) || 0 : 0;
  }
  function vt() {
    const v = At === "horizontal", le = Array.from(_e.children), d = le[0].getBoundingClientRect(), B = le[le.length - 1].getBoundingClientRect();
    return v ? oe === "rtl" ? d.right - B.left : B.right - d.left : B.bottom - d.top;
  }
  function Zt(v) {
    const le = v.target;
    if (!(le instanceof Element) || !_e)
      return;
    let d = le;
    for (; d.parentElement && d.parentElement !== _e; )
      d = d.parentElement;
    if (!d)
      return;
    const B = Array.from(_e.children).indexOf(d);
    if (B < 0)
      return;
    const Me = B - (It ? yo : 0);
    ft(Me, !0);
  }
  function Yt(v) {
    Date.now() - er < 300 && (v.preventDefault(), v.stopImmediatePropagation());
  }
  function _r(v) {
    if (!st.pagerMouseDragEnabled && v.pointerType === "mouse")
      return;
    const le = At === "horizontal", d = le ? v.pageX : v.pageY, B = kt, Me = at() - zr() - tr(), qe = vt(), ve = Date.now(), R = (Ot) => {
      const Xe = le ? Ot.pageX : Ot.pageY;
      let dt = B + Xe - d;
      if (!It) {
        if (oe === "rtl") {
          if (dt < 0)
            dt = dt * Me / (dt + Me * 3);
          else if (dt + Me > qe) {
            let Wt = dt + Me - qe;
            Wt = Wt * Me / (Wt + Me * 3), dt = -Me + qe + Wt;
          }
        } else if (oe === "ltr") {
          if (dt > 0)
            dt = dt * Me / (dt + Me * 3);
          else if (-dt + Me > qe) {
            let Wt = -dt + Me - qe;
            Wt = Wt * Me / (Wt + Me * 3), dt = Me - qe - Wt;
          }
        }
      }
      kt = dt, e(55, lr = Et(kt)), Ot.preventDefault();
    }, Tt = (Ot) => {
      Xt == null || Xt(), Xt = void 0;
      const Xe = Math.min(512, Me), dt = Math.abs(B - kt);
      if (dt < My) {
        ft(Be[I], !0);
        return;
      }
      Ot.preventDefault(), er = Date.now();
      const Wt = Math.min(1, (Date.now() - ve) / 750);
      let Vr = Be[I];
      dt > Xe / 4 * Wt && (Vr += (B > kt ? 1 : -1) * (oe === "rtl" ? -1 : 1)), It || (Vr >= we.length ? Vr = we.length - 1 : Vr < 0 && (Vr = 0)), ft(Vr, !0);
    };
    window.addEventListener("pointermove", R), window.addEventListener("pointerup", Tt), window.addEventListener("pointercancel", Tt), Xt == null || Xt(), Xt = () => {
      window.removeEventListener("pointermove", R), window.removeEventListener("pointerup", Tt), window.removeEventListener("pointercancel", Tt);
    };
  }
  function ut(v) {
    if (!v.deltaX || Math.abs(v.deltaX) < Math.abs(v.deltaY))
      return;
    const le = Date.now();
    if (le - bt < Ty)
      return;
    bt = le, (oe === "rtl" ? -1 : 1) * v.deltaX > 0 ? wr(1, "clamp", !0) : Er(1, "clamp", !0);
  }
  function se() {
    e(54, hr = !1), ze && Sn().then(() => {
      Gt(I, !1);
    });
  }
  function mt() {
    Sn().then(() => {
      Gt(I, !1);
    });
  }
  xn(() => {
    e(39, lt = !0), _e && Gt(I, !1);
  }), sn(() => {
    e(39, lt = !1), Xt == null || Xt(), Ke.forEach((v) => {
      v.destroy();
    }), X && (st.unregisterInstance(X), X = void 0), Ne == null || Ne.destroy(), Ne = void 0;
  });
  function or(v) {
    Fr[v ? "unshift" : "push"](() => {
      _e = v, e(7, _e);
    });
  }
  const yr = () => (oe === "ltr" ? Er : wr)(1, "clamp", !0), ar = () => (oe === "ltr" ? wr : Er)(1, "clamp", !0);
  return t.$$set = (v) => {
    "componentContext" in v && e(0, Pe = v.componentContext), "layoutParams" in v && e(1, nt = v.layoutParams);
  }, t.$$.update = () => {
    var v, le, d, B, Me;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(58, n = Pe.origJson), t.$$.dirty[1] & /*origJson*/
    134217728 && n && mr(), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(23, o = typeof ((v = Pe.json.item_builder) == null ? void 0 : v.data) == "string" ? Pe.getDerivedFromVars((le = Pe.json.item_builder) == null ? void 0 : le.data, void 0, !0) : (d = Pe.json.item_builder) != null && d.data ? Go(Pe.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(22, i = Pe.getDerivedFromVars(Pe.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && ke(e(21, s = Pe.getDerivedFromVars(Pe.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && $e(e(20, a = Pe.getDerivedFromVars(Pe.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(19, l = Pe.getDerivedFromVars(Pe.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(18, c = Pe.getDerivedFromVars(Pe.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(17, u = Pe.getDerivedFromVars(Pe.json.cross_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(16, f = Pe.getDerivedFromVars(Pe.json.scroll_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && He(e(15, _ = Pe.getDerivedFromVars(Pe.json.infinite_scroll))), t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$jsonInfiniteScroll*/
    64 && e(52, Ft = nn(ie, Ft)), t.$$.dirty[0] & /*componentContext, items*/
    9 | t.$$.dirty[1] & /*prevContext*/
    1048576 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    32) {
      let qe = [];
      if (Pe.json.item_builder && Array.isArray(de) && Array.isArray(Pe.json.item_builder.prototypes)) {
        const Ot = Pe.json.item_builder;
        qe = yl(de, st, Pe, Ot);
      } else
        qe = (Array.isArray(Pe.json.items) && Pe.json.items || []).map((Ot, Xe) => ({
          div: Ot,
          key: Ot.id || { index: Xe, data: Ot }
        }));
      const ve = new Set(Ke), R = /* @__PURE__ */ new Map();
      let Tt = !1;
      nr === Pe && Ke.forEach((Ot) => {
        Ot.key && (typeof Ot.key == "string" && R.has(Ot.key) ? Tt || (Tt = !0, Pe.logError(Y(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: Ot.key } }))) : R.set(
          typeof Ot.key == "string" ? Ot.key : Ot.key.index,
          Ot
        ));
      }), e(3, Ke = qe.map((Ot, Xe) => {
        let dt = !Tt && R.get(Ot.id), Wt = R.get(Xe);
        return !dt && !Ot.id && typeof Ot.key == "object" && typeof (Wt == null ? void 0 : Wt.key) == "object" && Ji(Wt.key.data, Ot.key.data) && (dt = Wt), dt ? (ve.delete(dt), dt) : Pe.produceChildContext(Ot.div, {
          path: Xe,
          variables: Ot.vars,
          id: Ot.id,
          key: Ot.key
        });
      }));
      for (const Ot of ve)
        Ot.destroy();
      e(51, nr = Pe);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    9) {
      let qe = [];
      Ke.forEach((ve) => {
        qe.push(Pe.getDerivedFromVars({
          width: ve.json.width,
          height: ve.json.height,
          visibility: ve.json.visibility
        }));
      }), ae(e(8, Fe = Gi(qe, (ve) => [...ve])));
    }
    if (t.$$.dirty[0] & /*items, visibleItems*/
    24 | t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$childStore*/
    16) {
      if (e(50, Be = {}), xe = {}, e(4, we = De.map((qe, ve) => ({
        width: qe.width,
        height: qe.height,
        index: ve,
        componentContext: Ke[ve]
      })).filter((qe, ve) => De[ve].visibility !== "gone")), we.forEach((qe, ve) => {
        xe[ve] = qe.index, e(50, Be[qe.index] = ve, Be);
      }), e(49, pt = we.length), Ft && we.length >= yo) {
        const qe = we.slice(0, yo).map((R) => ({
          ...R,
          componentContext: R.componentContext.dup(ti),
          duplicate: !0
        })), ve = we.slice(we.length - yo).map((R) => ({
          ...R,
          componentContext: R.componentContext.dup(ti),
          duplicate: !0
        }));
        qe.forEach((R, Tt) => {
          xe[we.length + Tt] = Tt;
        }), ve.forEach((R, Tt) => {
          xe[Tt - yo] = we.length - yo + Tt;
        }), e(4, we = [].concat(ve, we, qe)), e(53, It = !0);
      } else
        e(53, It = !1);
      mt();
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonLayoutMode*/
    1073741824 && (C ? C.type !== "percentage" && C.type !== "fixed" && C.type !== "wrap_content" ? (e(41, _t = !0), Pe.logError(Y(new Error('Incorrect value of "layout_mode.type" for div "pager"')))) : e(41, _t = !1) : (e(41, _t = !0), Pe.logError(Y(new Error('Empty "layout_mode" prop for div "pager"'))))), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[2] & /*$jsonOrientation*/
    8 && e(2, At = ka(Ge, At)), t.$$.dirty[2] & /*$jsonItemSpacing*/
    4) {
      const qe = Ve == null ? void 0 : Ve.value;
      qe && Nn(qe) && e(42, Dt = ln(qe || 0));
    }
    if (t.$$.dirty[0] & /*$direction*/
    64 | t.$$.dirty[1] & /*paddingObj*/
    4096 | t.$$.dirty[2] & /*$jsonPaddings*/
    2 && (e(43, ot = hi(Ae, ot)), e(44, K = ho(ot, oe))), t.$$.dirty[0] & /*orientation*/
    4 && e(57, h = At === "horizontal" ? "grid-auto-columns" : "grid-auto-rows"), t.$$.dirty[0] & /*orientation*/
    4 && e(56, m = At === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[2] & /*$jsonScrollAxisAlignment*/
    1 && (W === "start" || W === "center" || W === "end") && (e(48, be = W), mt()), t.$$.dirty[0] & /*orientation, $direction, visibleItems*/
    84 | t.$$.dirty[1] & /*paddingObj, $jsonLayoutMode, scrollAxisAlignment, itemSpacing*/
    1073879040) {
      const qe = ln(At === "horizontal" ? (ot == null ? void 0 : ot.start) || (oe === "ltr" ? ot == null ? void 0 : ot.left : ot == null ? void 0 : ot.right) || 0 : (ot == null ? void 0 : ot.top) || 0), ve = ln(At === "horizontal" ? (ot == null ? void 0 : ot.end) || (oe === "ltr" ? ot == null ? void 0 : ot.right : ot == null ? void 0 : ot.left) || 0 : (ot == null ? void 0 : ot.bottom) || 0);
      if ((C == null ? void 0 : C.type) === "fixed") {
        const R = ((B = C.neighbour_page_width) == null ? void 0 : B.value) || 0;
        be === "center" ? e(45, Mt = `calc(100% + ${qe} + ${ve} - 2 * ${ln(R)} - 2 * ${Dt})`) : be === "start" ? e(45, Mt = `calc(100% + ${ve} - ${ln(R)} - ${Dt})`) : e(45, Mt = `calc(100% + ${qe} - ${ln(R)} - ${Dt})`), e(46, Vt = "");
      } else if ((C == null ? void 0 : C.type) === "percentage") {
        let R = (Me = C.page_width) == null ? void 0 : Me.value;
        (typeof R != "number" || R < 0) && (R = 100), e(45, Mt = `calc(${(R / 100).toFixed(2)} * (100% + ${qe} + ${ve}))`), e(46, Vt = "");
      } else (C == null ? void 0 : C.type) === "wrap_content" && (e(45, Mt = ""), e(46, Vt = we.map((R) => {
        var Xe, dt;
        const Tt = R[At === "horizontal" ? "width" : "height"];
        if ((Tt == null ? void 0 : Tt.type) === "fixed" || (Tt == null ? void 0 : Tt.type) === "wrap_content")
          return "minmax(max-content, auto)";
        let Ot = "100%";
        return (Tt == null ? void 0 : Tt.type) === "match_parent" && (Nn((Xe = Tt.max_size) == null ? void 0 : Xe.value) && (Ot = `min(${Ot}, ${ln(Tt.max_size.value)})`), Nn((dt = Tt.min_size) == null ? void 0 : dt.value) && (Ot = `max(${Ot}, ${ln(Tt.min_size.value)})`)), Ot;
      }).join(" ")));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonCrossAxisAlignment, crossAxisAlignment*/
    536936448 && (T === "start" || T === "center" || T === "end") && (e(47, qt = T), e(9, Jt = {
      [At === "horizontal" ? "parentVAlign" : "parentHAlign"]: qt
    })), t.$$.dirty[1] & /*itemSpacing, padding, gridAutoSizeProp, autoSizeVal, gridTemplateSizeProp, templateSizeVal, transformStr*/
    117499904 && e(14, p = {
      "grid-gap": Dt,
      padding: K,
      [h]: Mt,
      [m]: Vt,
      transform: lr
    }), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*animated, crossAxisAlignment, scrollAxisAlignment*/
    8585216 && e(13, w = {
      animated: hr,
      clip: st.pagerChildrenClipEnabled,
      orientation: At,
      "cross-align": qt,
      "scroll-align": be
    }), t.$$.dirty[1] & /*hasLayoutModeError*/
    1024 && e(5, k = _t), t.$$.dirty[0] & /*hasError*/
    32 | t.$$.dirty[1] & /*$isDesktop, mounted*/
    268435712 && e(12, z = fe && lt && !k), t.$$.dirty[0] & /*componentContext, items*/
    9 && Pe.json) {
      const qe = Pe.getJsonWithVars(Pe.json.default_item);
      typeof qe == "number" && qe >= 0 && qe < Ke.length && (e(40, I = jt = qe), xt(Ke.length, qe)), Dr();
    }
    t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(11, H = It || (oe === "ltr" ? Be[I] > 0 : Be[I] + 1 < we.length)), t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(10, O = It || (oe === "ltr" ? Be[I] + 1 < we.length : Be[I] > 0)), t.$$.dirty[1] & /*visibleItemsWithOutDuplicates, currentItem*/
    262656 && xt(pt, I), t.$$.dirty[1] & /*currentItem*/
    512 && $t(I);
  }, [
    Pe,
    nt,
    At,
    Ke,
    we,
    k,
    oe,
    _e,
    Fe,
    Jt,
    O,
    H,
    z,
    w,
    p,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    We,
    et,
    wt,
    rt,
    Pt,
    ct,
    vr,
    Er,
    wr,
    Zt,
    Yt,
    _r,
    ut,
    se,
    mt,
    lt,
    I,
    _t,
    Dt,
    ot,
    K,
    Mt,
    Vt,
    qt,
    be,
    pt,
    Be,
    nr,
    Ft,
    It,
    hr,
    lr,
    m,
    h,
    n,
    fe,
    T,
    C,
    W,
    Ae,
    Ve,
    Ge,
    De,
    de,
    ie,
    or,
    yr,
    ar
  ];
}
class Ny extends Or {
  constructor(r) {
    super(), Lr(this, r, Py, Dy, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const zy = "appkit-indicator", Ly = "appkit-indicator_visible", Oy = "appkit-indicator__scroller", By = "appkit-indicator__items", Ry = "appkit-indicator__item", Hy = "appkit-indicator_placement_default", Wy = "appkit-indicator__item_active", Uy = "appkit-indicator_direction_ltr", Gy = "appkit-indicator_direction_rtl", Jy = "appkit-indicator_placement_stretch", yi = {
  indicator: zy,
  indicator_visible: Ly,
  indicator__scroller: Oy,
  indicator__items: By,
  indicator__item: Ry,
  indicator_placement_default: Hy,
  indicator__item_active: Wy,
  indicator_direction_ltr: Uy,
  indicator_direction_rtl: Gy,
  indicator_placement_stretch: Jy
};
function qu(t, r, e) {
  const n = t.slice();
  n[43] = r[e], n[46] = e;
  const o = (
    /*index*/
    n[46] === /*pagerData*/
    n[8].currentItem
  );
  return n[44] = o, n;
}
function Ku(t) {
  let r, e = rr(Array(
    /*pagerData*/
    t[8].size
  )), n = [];
  for (let o = 0; o < e.length; o += 1)
    n[o] = Yu(qu(t, e, o));
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
        e = rr(Array(
          /*pagerData*/
          o[8].size
        ));
        let s;
        for (s = 0; s < e.length; s += 1) {
          const a = qu(o, e, s);
          n[s] ? n[s].p(a, i) : (n[s] = Yu(a), n[s].c(), n[s].m(r.parentNode, r));
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
function Yu(t) {
  let r, e, n, o, i, s, a, l;
  function c() {
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
      r = Te("div"), g(r, "class", e = ht("indicator__item", yi, { active: (
        /*isActiveItem*/
        t[44]
      ) }) + " " + Cr.root__clickable), g(r, "role", "tab"), g(r, "id", n = /*pagerData*/
      t[8].instId + "-tab-" + /*index*/
      t[46]), g(r, "aria-controls", o = /*pagerData*/
      t[8].instId + "-panel-" + /*index*/
      t[46]), g(r, "aria-selected", i = /*isActiveItem*/
      t[44] ? "true" : "false"), g(r, "tabindex", s = /*isActiveItem*/
      t[44] ? 0 : -1);
    },
    m(u, f) {
      q(u, r, f), a || (l = [
        Qe(r, "click", c),
        Qe(
          r,
          "keydown",
          /*onIndicatorItemKeydown*/
          t[22]
        )
      ], a = !0);
    },
    p(u, f) {
      t = u, f[0] & /*pagerData*/
      256 && e !== (e = ht("indicator__item", yi, { active: (
        /*isActiveItem*/
        t[44]
      ) }) + " " + Cr.root__clickable) && g(r, "class", e), f[0] & /*pagerData*/
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
    d(u) {
      u && G(r), a = !1, Jr(l);
    }
  };
}
function qy(t) {
  let r, e, n = (
    /*pagerData*/
    t[8] && Ku(t)
  );
  return {
    c() {
      r = Te("div"), e = Te("div"), n && n.c(), g(e, "class", yi.indicator__items), g(e, "role", "tablist"), F(
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
      ), g(r, "class", yi.indicator__scroller);
    },
    m(o, i) {
      q(o, r, i), yt(r, e), n && n.m(e, null), t[35](e), t[36](r);
    },
    p(o, i) {
      /*pagerData*/
      o[8] ? n ? n.p(o, i) : (n = Ku(o), n.c(), n.m(e, null)) : n && (n.d(1), n = null), i[0] & /*placement, activeStyle, inactiveStyle*/
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
function Ky(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "indicator",
        yi,
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
      $$slots: { default: [qy] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = ht(
        "indicator",
        yi,
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
      zt(r, n);
    }
  };
}
const Tl = ["rounded_rectangle", "circle"];
function Yy(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p = j, w = () => (p(), p = S(u, (_e) => e(26, m = _e)), u), k, z = j, H = () => (z(), z = S(f, (_e) => e(27, k = _e)), f), O, oe = j, fe = () => (oe(), oe = S(i, (_e) => e(28, O = _e)), i), T, Z = j, ce = () => (Z(), Z = S(s, (_e) => e(29, T = _e)), s), C, D = j, M = () => (D(), D = S(o, (_e) => e(30, C = _e)), o), W, Q = j, me = () => (Q(), Q = S(a, (_e) => e(31, W = _e)), a), Ae, Ce = j, he = () => (Ce(), Ce = S(c, (_e) => e(32, Ae = _e)), c), Ve, re = j, $e = () => (re(), re = S(l, (_e) => e(33, Ve = _e)), l);
  t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Ce()), t.$$.on_destroy.push(() => re());
  let { componentContext: Ge } = r, { layoutParams: Je = void 0 } = r;
  const De = Ir(Kr).direction;
  yn(t, De, (_e) => e(25, h = _e));
  let ue = {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    background: "#ffdc60"
  }, ae = {
    width: 10,
    height: 10,
    borderRadius: 5,
    background: "#33919cb5"
  }, de = "default", ee = 15, ge = 10, ie = 5, Se, He, We, te, Oe = !1;
  function Pe() {
    e(4, de = "default"), e(5, ee = 15), e(6, ge = 10), e(7, ie = 5), e(2, ue = {
      width: 13,
      height: 13,
      borderRadius: 6.5,
      background: "#ffdc60"
    }), e(3, ae = {
      width: 10,
      height: 10,
      borderRadius: 5,
      background: "#33919cb5"
    });
  }
  async function nt(_e) {
    if (e(8, We = _e), await Sn(), He) {
      const lt = He.children[We.currentItem];
      if (lt) {
        const Fe = lt.offsetLeft;
        Se.scroll({
          left: Fe - Se.clientWidth / 2,
          behavior: "smooth"
        });
      }
    }
  }
  function st(_e) {
    _e !== We.currentItem && We.scrollToPagerItem(_e);
  }
  function et(_e) {
    if (_e.ctrlKey || _e.shiftKey || _e.altKey || _e.metaKey)
      return;
    const { size: lt, currentItem: Fe } = We;
    if (_e.which === Kd) {
      const I = Fe - 1 < 0 ? Fe : Fe - 1;
      wt(I);
    } else if (_e.which === Yd) {
      const I = Fe + 1 >= lt ? Fe : Fe + 1;
      wt(I);
    } else if (_e.which === Xd)
      wt(0);
    else if (_e.which === Zd)
      wt(lt - 1);
    else
      return;
    _e.preventDefault();
  }
  async function wt(_e) {
    We.scrollToPagerItem(_e), await Sn();
    const lt = He.querySelector(`.${yi.indicator__item_active}`);
    lt && lt.focus();
  }
  function rt() {
    te == null || te(), te = void 0;
    const _e = Ge.json.pager_id;
    te = Ge.listenPager(_e, nt);
  }
  xn(() => {
    e(23, Oe = !0);
  }), sn(() => {
    e(23, Oe = !1), te == null || te(), te = void 0;
  });
  const Pt = (_e) => st(_e);
  function ct(_e) {
    Fr[_e ? "unshift" : "push"](() => {
      He = _e, e(10, He);
    });
  }
  function X(_e) {
    Fr[_e ? "unshift" : "push"](() => {
      Se = _e, e(9, Se);
    });
  }
  return t.$$set = (_e) => {
    "componentContext" in _e && e(0, Ge = _e.componentContext), "layoutParams" in _e && e(1, Je = _e.layoutParams);
  }, t.$$.update = () => {
    var _e, lt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(24, n = Ge.origJson), t.$$.dirty[0] & /*origJson*/
    16777216 && n && Pe(), t.$$.dirty[0] & /*origJson, mounted*/
    25165824 && n && Oe && rt(), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(19, o = Ge.getDerivedFromVars(Ge.json.shape))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(18, i = Ge.getDerivedFromVars(Ge.json.active_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(17, s = Ge.getDerivedFromVars(Ge.json.inactive_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(16, a = Ge.getDerivedFromVars(Ge.json.active_item_size))), t.$$.dirty[0] & /*componentContext*/
    1 && $e(e(15, l = Ge.getDerivedFromVars(Ge.json.active_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(14, c = Ge.getDerivedFromVars(Ge.json.inactive_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && w(e(13, u = Ge.getDerivedFromVars(Ge.json.space_between_centers))), t.$$.dirty[0] & /*componentContext*/
    1 && H(e(12, f = Ge.getDerivedFromVars(Ge.json.items_placement))), t.$$.dirty[0] & /*activeStyle, inactiveStyle, $jsonShape, $jsonInactiveItemColor, $jsonActiveItemColor*/
    1879048204 | t.$$.dirty[1] & /*$jsonActiveShape, $jsonInactiveShape, $jsonActiveItemSize*/
    7 && (Ve && e(2, ue = co(
      {
        type: "shape_drawable",
        shape: Ve
      },
      Tl,
      ue
    )), Ae && e(3, ae = co(
      {
        type: "shape_drawable",
        shape: Ae
      },
      Tl,
      ae
    )), !Ve && !Ae && C)) {
      const Fe = Gn(W, 1.3);
      e(3, ae = co(
        {
          type: "shape_drawable",
          shape: C,
          color: ae.background
        },
        Tl,
        ae
      )), e(3, ae.background = pr(T, 1, ae.background), ae), e(2, ue = {
        ...ae,
        width: ae.width * Fe,
        height: ae.height * Fe,
        borderRadius: ae.borderRadius * Fe,
        background: ue.background
      }), e(2, ue.background = pr(O, 1, ue.background), ue);
    }
    if (t.$$.dirty[0] & /*$jsonItemsPlacement, placement, spaceBetweenCenters, maxVisibleItems, itemSpacing, $jsonSpaceBetweenCenters*/
    201326832)
      if (k && (k.type === "default" || k.type === "stretch")) {
        if (e(4, de = k.type), de === "default")
          e(5, ee = en((_e = k.space_between_centers) == null ? void 0 : _e.value, ee));
        else if (de === "stretch") {
          const Fe = k;
          e(6, ge = Gn(Fe.max_visible_items, ge)), e(7, ie = en((lt = Fe.item_spacing) == null ? void 0 : lt.value, ie));
        }
      } else
        e(4, de = "default"), m && e(5, ee = en(m.value, ee));
    t.$$.dirty[0] & /*placement, $direction, pagerData*/
    33554704 && e(11, _ = {
      placement: de,
      direction: h,
      visible: (We == null ? void 0 : We.size) > 1
    });
  }, [
    Ge,
    Je,
    ue,
    ae,
    de,
    ee,
    ge,
    ie,
    We,
    Se,
    He,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    De,
    st,
    et,
    Oe,
    n,
    h,
    m,
    k,
    O,
    T,
    C,
    W,
    Ae,
    Ve,
    Pt,
    ct,
    X
  ];
}
class Xy extends Or {
  constructor(r) {
    super(), Lr(this, r, Yy, Ky, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Zy = "appkit-slider", Qy = "appkit-slider__input", xy = "appkit-slider__input_secondary", $y = "appkit-slider__thumb", ew = "appkit-slider_direction_rtl", tw = "appkit-slider__thumb_secondary", rw = "appkit-slider__track", nw = "appkit-slider__tick", ow = "appkit-slider__tick_active", iw = "appkit-slider__tick_inactive", Ur = {
  slider: Zy,
  slider__input: Qy,
  slider__input_secondary: xy,
  slider__thumb: $y,
  slider_direction_rtl: ew,
  slider__thumb_secondary: tw,
  "slider__tracks-wrapper": "appkit-slider__tracks-wrapper",
  "slider__tracks-inner": "appkit-slider__tracks-inner",
  "slider__tracks-ranges": "appkit-slider__tracks-ranges",
  "slider__tracks-ranges_rtl": "appkit-slider__tracks-ranges_rtl",
  slider__track: rw,
  "slider__thumb-text": "appkit-slider__thumb-text",
  "slider__thumb-text_secondary": "appkit-slider__thumb-text_secondary",
  slider__tick: nw,
  slider__tick_active: ow,
  slider__tick_inactive: iw
};
function Xu(t, r, e) {
  var a, l;
  if (!t || !t.font_size)
    return e;
  const n = t.offset, o = t.text_color && pr(t.text_color) || "#000", i = mi(t.font_weight, t.font_weight_value, void 0), s = Oi(t.font_variation_settings) || void 0;
  if (zn(t.font_size) && o !== "transparent") {
    const c = {
      fontSize: pe(t.font_size),
      fontWeight: i,
      fontVariationSettings: s,
      textColor: o
    };
    return typeof ((a = n == null ? void 0 : n.x) == null ? void 0 : a.value) == "number" && typeof ((l = n == null ? void 0 : n.y) == null ? void 0 : l.value) == "number" && (c.offset = {
      x: n.x.value,
      y: n.y.value
    }), t.font_family && typeof t.font_family == "string" && (c.fontFamily = r(t.font_family, {
      fontWeight: i
    }) || ""), c;
  }
}
function Fo(t, r, e) {
  return Math.max(r, Math.min(e, Number(t)));
}
function Zu(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function Qu(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function xu(t, r, e) {
  const n = t.slice();
  return n[90] = r[e], n;
}
function sw(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function lw(t) {
  let r, e;
  return r = new hn({
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
          aw,
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function $u(t) {
  let r;
  return {
    c() {
      r = Te("div"), g(r, "class", Ur.slider__track), F(
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
      q(e, r, n);
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
function ef(t) {
  let r;
  return {
    c() {
      r = Te("div"), g(r, "class", Ur.slider__tick + " " + Ur.slider__tick_active), F(
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
function tf(t) {
  let r;
  return {
    c() {
      r = Te("div"), g(r, "class", Ur.slider__tick + " " + Ur.slider__tick_inactive), F(
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
function rf(t) {
  let r, e, n;
  return {
    c() {
      var o, i, s, a, l;
      r = Te("div"), e = Te("div"), n = Jn(
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
      q(o, r, i), yt(r, e), yt(e, n);
    },
    p(o, i) {
      var s, a, l, c, u;
      i[0] & /*value*/
      2048 && ro(
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
        ((c = o[7]) == null ? void 0 : c.fontVariationSettings) || ""
      ), i[0] & /*textStyle*/
      128 && F(
        e,
        "color",
        /*textStyle*/
        ((u = o[7]) == null ? void 0 : u.textColor) || "#000"
      );
    },
    d(o) {
      o && G(r);
    }
  };
}
function nf(t) {
  let r, e = (
    /*textSecondaryStyle*/
    t[8] && of(t)
  );
  return {
    c() {
      r = Te("div"), e && e.c(), g(r, "class", Ur.slider__thumb + " " + Ur.slider__thumb_secondary), F(r, "border-radius", pe(
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
      q(n, r, o), e && e.m(r, null);
    },
    p(n, o) {
      /*textSecondaryStyle*/
      n[8] ? e ? e.p(n, o) : (e = of(n), e.c(), e.m(r, null)) : e && (e.d(1), e = null), o[0] & /*thumbSecondaryStyle*/
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
function of(t) {
  let r, e, n;
  return {
    c() {
      var o, i, s, a, l;
      r = Te("div"), e = Te("div"), n = Jn(
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
      q(o, r, i), yt(r, e), yt(e, n);
    },
    p(o, i) {
      var s, a, l, c, u;
      i[0] & /*value2*/
      4096 && ro(
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
        ((c = o[8]) == null ? void 0 : c.fontVariationSettings) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && F(
        e,
        "color",
        /*textSecondaryStyle*/
        ((u = o[8]) == null ? void 0 : u.textColor) || "#000"
      );
    },
    d(o) {
      o && G(r);
    }
  };
}
function sf(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Te("input"), g(r, "type", "range"), g(r, "class", e = /*switchedTracks*/
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
      q(a, r, l), i || (s = [
        Qe(
          r,
          "input",
          /*input_handler_1*/
          t[75]
        ),
        Qe(r, "mousedown", function() {
          Nr(
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
          Nr(
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
          Nr(
            /*focusHandler*/
            t[83]
          ) && t[83].apply(this, arguments);
        }),
        Qe(r, "blur", function() {
          Nr(
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
function aw(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, z = rr(
    /*renderRanges*/
    t[21]
  ), H = [];
  for (let D = 0; D < z.length; D += 1)
    H[D] = $u(xu(t, z, D));
  let O = rr(
    /*markActiveTicks*/
    t[17]
  ), oe = [];
  for (let D = 0; D < O.length; D += 1)
    oe[D] = ef(Qu(t, O, D));
  let fe = rr(
    /*markInactiveTicks*/
    t[18]
  ), T = [];
  for (let D = 0; D < fe.length; D += 1)
    T[D] = tf(Zu(t, fe, D));
  let Z = (
    /*textStyle*/
    t[7] && rf(t)
  ), ce = (
    /*secondVariable*/
    t[13] && nf(t)
  ), C = (
    /*secondVariable*/
    t[13] && sf(t)
  );
  return {
    c() {
      r = Te("div"), e = Te("div"), n = Te("div");
      for (let D = 0; D < H.length; D += 1)
        H[D].c();
      i = gr();
      for (let D = 0; D < oe.length; D += 1)
        oe[D].c();
      s = gr();
      for (let D = 0; D < T.length; D += 1)
        T[D].c();
      a = gr(), l = Te("div"), Z && Z.c(), c = gr(), ce && ce.c(), u = gr(), f = Te("input"), p = gr(), C && C.c(), g(n, "class", o = Ur["slider__tracks-ranges"] + /*$direction*/
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
      q(D, r, M), yt(r, e), yt(e, n);
      for (let W = 0; W < H.length; W += 1)
        H[W] && H[W].m(n, null);
      yt(e, i);
      for (let W = 0; W < oe.length; W += 1)
        oe[W] && oe[W].m(e, null);
      yt(e, s);
      for (let W = 0; W < T.length; W += 1)
        T[W] && T[W].m(e, null);
      yt(e, a), yt(e, l), Z && Z.m(l, null), yt(e, c), ce && ce.m(e, null), yt(e, u), yt(e, f), t[74](f), yt(e, p), C && C.m(e, null), t[76](e), w || (k = [
        Qe(
          f,
          "input",
          /*input_handler*/
          t[73]
        ),
        Qe(f, "focus", function() {
          Nr(
            /*focusHandler*/
            t[83]
          ) && t[83].apply(this, arguments);
        }),
        Qe(f, "blur", function() {
          Nr(
            /*blurHandler*/
            t[84]
          ) && t[84].apply(this, arguments);
        })
      ], w = !0);
    },
    p(D, M) {
      if (t = D, M[0] & /*renderRanges*/
      2097152) {
        z = rr(
          /*renderRanges*/
          t[21]
        );
        let W;
        for (W = 0; W < z.length; W += 1) {
          const Q = xu(t, z, W);
          H[W] ? H[W].p(Q, M) : (H[W] = $u(Q), H[W].c(), H[W].m(n, null));
        }
        for (; W < H.length; W += 1)
          H[W].d(1);
        H.length = z.length;
      }
      if (M[0] & /*$direction*/
      16384 && o !== (o = Ur["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Ur["slider__tracks-ranges_rtl"] : "")) && g(n, "class", o), M[0] & /*markActiveTicks*/
      131072) {
        O = rr(
          /*markActiveTicks*/
          t[17]
        );
        let W;
        for (W = 0; W < O.length; W += 1) {
          const Q = Qu(t, O, W);
          oe[W] ? oe[W].p(Q, M) : (oe[W] = ef(Q), oe[W].c(), oe[W].m(e, s));
        }
        for (; W < oe.length; W += 1)
          oe[W].d(1);
        oe.length = O.length;
      }
      if (M[0] & /*markInactiveTicks*/
      262144) {
        fe = rr(
          /*markInactiveTicks*/
          t[18]
        );
        let W;
        for (W = 0; W < fe.length; W += 1) {
          const Q = Zu(t, fe, W);
          T[W] ? T[W].p(Q, M) : (T[W] = tf(Q), T[W].c(), T[W].m(e, a));
        }
        for (; W < T.length; W += 1)
          T[W].d(1);
        T.length = fe.length;
      }
      /*textStyle*/
      t[7] ? Z ? Z.p(t, M) : (Z = rf(t), Z.c(), Z.m(l, null)) : Z && (Z.d(1), Z = null), M[0] & /*thumbStyle*/
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
      t[13] ? ce ? ce.p(t, M) : (ce = nf(t), ce.c(), ce.m(e, u)) : ce && (ce.d(1), ce = null), M[0] & /*switchedTracks*/
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
      t[13] ? C ? C.p(t, M) : (C = sf(t), C.c(), C.m(e, null)) : C && (C.d(1), C = null);
    },
    d(D) {
      D && G(r), on(H, D), on(oe, D), on(T, D), Z && Z.d(), ce && ce.d(), t[74](null), C && C.d(), t[76](null), w = !1, Jr(k);
    }
  };
}
function cw(t) {
  let r, e, n, o, i, s;
  const a = [lw, sw], l = [];
  function c(u, f) {
    return (
      /*hasError*/
      u[10] ? 1 : 0
    );
  }
  return ~(r = c(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(u, f) {
      ~r && l[r].m(u, f), q(u, n, f), o = !0, i || (s = Qe(
        window,
        "resize",
        /*checkTicksDebounced*/
        t[43]
      ), i = !0);
    },
    p(u, f) {
      let _ = r;
      r = c(u), r === _ ? ~r && l[r].p(u, f) : (e && (ir(), x(l[_], 1, 1, () => {
        l[_] = null;
      }), sr()), ~r ? (e = l[r], e ? e.p(u, f) : (e = l[r] = a[r](u), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(u) {
      o || (L(e), o = !0);
    },
    o(u) {
      x(e), o = !1;
    },
    d(u) {
      u && G(n), ~r && l[r].d(u), i = !1, s();
    }
  };
}
const eo = {
  width: 10,
  height: 10,
  borderRadius: 5,
  background: "#000"
}, ys = ["rounded_rectangle", "circle"], Ml = ["rounded_rectangle"];
function ws(t, r, e, n, o) {
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
function uw(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, z, H, O, oe, fe, T, Z, ce, C, D, M, W, Q, me, Ae = j, Ce = () => (Ae(), Ae = S(oe, (v) => e(57, me = v)), oe), he, Ve = j, re = () => (Ve(), Ve = S(H, (v) => e(58, he = v)), H), $e, Ge = j, Je = () => (Ge(), Ge = S(O, (v) => e(59, $e = v)), O), ke, De = j, ue = () => (De(), De = S(z, (v) => e(60, ke = v)), z), ae, de = j, ee = () => (de(), de = S(k, (v) => e(61, ae = v)), k), ge, ie = j, Se = () => (ie(), ie = S(w, (v) => e(62, ge = v)), w), He, We = j, te = () => (We(), We = S(p, (v) => e(63, He = v)), p), Oe, Pe = j, nt = () => (Pe(), Pe = S(m, (v) => e(64, Oe = v)), m), st, et = j, wt = () => (et(), et = S(h, (v) => e(65, st = v)), h), rt, Pt = j, ct = () => (Pt(), Pt = S(_, (v) => e(66, rt = v)), _), X, _e = j, lt = () => (_e(), _e = S(f, (v) => e(67, X = v)), f), Fe, I = j, jt = () => (I(), I = S(u, (v) => e(68, Fe = v)), u), _t, At = j, Dt = () => (At(), At = S(a, (v) => e(69, _t = v)), a), ot, K = j, Mt = () => (K(), K = S(s, (v) => e(70, ot = v)), s), Vt, Jt = j, qt = () => (Jt(), Jt = S(c, (v) => e(71, Vt = v)), c), be, Ke = j, pt = () => (Ke(), Ke = S(l, (v) => e(72, be = v)), l);
  t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => Ve()), t.$$.on_destroy.push(() => Ge()), t.$$.on_destroy.push(() => De()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => ie()), t.$$.on_destroy.push(() => We()), t.$$.on_destroy.push(() => Pe()), t.$$.on_destroy.push(() => et()), t.$$.on_destroy.push(() => Pt()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => At()), t.$$.on_destroy.push(() => K()), t.$$.on_destroy.push(() => Jt()), t.$$.on_destroy.push(() => Ke());
  let { componentContext: we } = r, { layoutParams: xe = void 0 } = r;
  const Be = Ir(Kr), nr = Ir(To), Ne = Be.direction;
  yn(t, Ne, (v) => e(14, Q = v));
  let bt, Ft, It, hr = !1, ze = 0, kt = 100, lr = eo, er = lr, Xt = eo, mr = eo, vr, xt = null, $t, J = null, ft, Gt = ft, Et = "", br = "", Er = !0, wr = !1, Dr = [];
  function zr() {
    e(5, lr = eo), e(6, er = lr), e(45, Xt = eo), e(46, mr = eo), e(47, xt = null), e(48, J = null), e(7, ft = void 0), e(8, Gt = void 0), e(19, Et = ""), e(9, Er = !0), e(20, br = "");
  }
  let tr = Fo(ot || 0, ze, kt), at = Fo(_t || 0, ze, kt);
  function vt({ direction: v, minValue: le, maxValue: d, trackActiveOffset: B, trackActivePart: Me, trackInactiveStyle: qe, trackActiveStyle: ve, ranges: R = [] }) {
    const Tt = [], Ot = (dt, Wt, Vr) => {
      var Tr, Cn, Ee, Yr;
      const kr = (Xr, mn, Vn, y) => {
        var ne, N, Ze, Ie;
        const E = Math.max(Xr, Wt);
        if (Math.min(mn, Vr) - E > 0) {
          const Qt = y && (N = (ne = y[v === "ltr" ? "start" : "end"]) != null ? ne : y.left) != null ? N : 0, St = y && (Ie = (Ze = y[v === "ltr" ? "end" : "start"]) != null ? Ze : y.right) != null ? Ie : 0;
          Tt.push({
            left: Xr,
            right: mn,
            totalLeft: Wt,
            totalRight: Vr,
            leftMargin: Qt,
            rightMargin: St,
            style: Vn
          });
        }
      };
      if ((!R[0] || ((Tr = R[0].start) != null ? Tr : le) > Wt) && kr(Wt, R[0] ? (Cn = R[0].start) != null ? Cn : le : Vr, dt === "inactive" ? qe : ve), R.forEach((Xr, mn) => {
        var Ie, Qt, St, Ue;
        const Vn = Xr[dt === "inactive" ? "track_inactive_style" : "track_active_style"], E = Vn ? co(Vn, Ml, eo) : dt === "inactive" ? qe : ve, A = R[mn - 1], ne = R[mn + 1], N = (Qt = (Ie = Xr.start) != null ? Ie : A == null ? void 0 : A.end) != null ? Qt : Wt, Ze = (Ue = (St = Xr.end) != null ? St : ne == null ? void 0 : ne.start) != null ? Ue : Vr;
        kr(N, Ze, E, Xr.margins);
      }), R[R.length - 1] && ((Ee = R[R.length - 1].end) != null ? Ee : d) < Vr) {
        const Xr = (Yr = R[R.length - 1].end) != null ? Yr : d;
        kr(Xr, Vr, dt === "inactive" ? qe : ve);
      }
    };
    Ot("inactive", le, d), Ot("active", B, B + Me);
    const Xe = d - le;
    e(21, Dr = Tt.map((dt) => {
      let Wt = `${(dt.left - le) * 100 / Xe}%`;
      dt.leftMargin && (Wt = `calc(${Wt} + ${ln(dt.leftMargin)})`);
      let Vr;
      dt.totalLeft < dt.left ? Vr = Wt : dt.leftMargin ? Vr = `max(${(dt.totalLeft - le) * 100 / Xe}%, ${Wt})` : Vr = `${(Math.max(dt.totalLeft, dt.left) - le) * 100 / Xe}%`;
      let kr = `${(1 - (dt.right - le) / Xe) * 100}%`;
      dt.rightMargin && (kr = `calc(${kr} + ${ln(dt.rightMargin)})`);
      let Tr;
      return dt.totalRight > dt.right ? Tr = kr : dt.rightMargin ? Tr = `max(${(1 - (dt.totalRight - le) / Xe) * 100}%, ${kr})` : Tr = `${(1 - (Math.max(dt.totalRight, dt.right) - le) / Xe) * 100}%`, {
        left: Vr,
        right: Tr,
        height: pe(dt.style.height),
        borderRadius: pe(dt.style.borderRadius),
        background: dt.style.background,
        boxShadow: dt.style.boxShadow || ""
      };
    }));
  }
  function Zt(v) {
    var R, Tt;
    if (!Er)
      return;
    const le = "pageX" in v ? v.pageX : (Tt = (R = v.changedTouches) == null ? void 0 : R[0]) == null ? void 0 : Tt.pageX;
    if (le === void 0)
      return;
    const d = It.getBoundingClientRect();
    let B = (le - d.left) / d.width;
    Q === "rtl" && (B = 1 - B);
    const Me = ze + (kt - ze) * B, qe = Math.round(Fo(Me, ze, kt)), ve = (tr + at) / 2;
    e(16, hr = qe < ve == tr < at);
  }
  function Yt(v, le) {
    const d = Number(v.target.value);
    hr === (le === "first") ? (e(12, at = d), a.setValue(d)) : (e(11, tr = d), s.setValue(d));
  }
  let _r = !1;
  function ut() {
    if (!It)
      return;
    const v = kt - ze, le = (xt == null ? void 0 : xt.width) || 0, d = (J == null ? void 0 : J.width) || 0;
    Math.max(le, d) * v >= (It == null ? void 0 : It.clientWidth) ? _r || (we.logError(Y(new Error("Slider ticks overlap each other"), { level: "warn" })), _r = !0) : _r = !1;
  }
  const se = wa(ut, 50);
  xn(() => {
    ut();
  }), sn(() => {
    bt && (Be.unregisterFocusable(bt), e(44, bt = void 0));
  });
  const mt = (v) => Yt(v, "first");
  function or(v) {
    Fr[v ? "unshift" : "push"](() => {
      Ft = v, e(2, Ft);
    });
  }
  const yr = (v) => Yt(v, "second");
  function ar(v) {
    Fr[v ? "unshift" : "push"](() => {
      It = v, e(15, It);
    });
  }
  return t.$$set = (v) => {
    "componentContext" in v && e(0, we = v.componentContext), "layoutParams" in v && e(1, xe = v.layoutParams);
  }, t.$$.update = () => {
    var v, le, d, B;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(56, n = we.origJson), t.$$.dirty[1] & /*origJson*/
    33554432 && n && zr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, o = we.json.thumb_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(13, i = we.json.thumb_secondary_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*firstVariable*/
    16777216 && Mt(e(22, s = o && (we.getVariable(o, "integer") || Be.awaitGlobalVariable(o, "integer", 0)) || lo("temp", "integer", 0))), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 && Dt(e(23, a = i && (we.getVariable(i, "integer") || Be.awaitGlobalVariable(i, "integer", 0)) || lo("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && pt(e(39, l = we.getDerivedFromVars(we.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && qt(e(38, c = we.getDerivedFromVars(we.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && jt(e(37, u = we.getDerivedFromVars(we.json.thumb_style))), t.$$.dirty[0] & /*componentContext*/
    1 && lt(e(36, f = we.getDerivedFromVars(we.json.thumb_secondary_style))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(35, _ = we.getDerivedFromVars(we.json.track_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && wt(e(34, h = we.getDerivedFromVars(we.json.track_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && nt(e(33, m = we.getDerivedFromVars(we.json.tick_mark_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && te(e(32, p = we.getDerivedFromVars(we.json.tick_mark_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && Se(e(31, w = we.getDerivedFromVars(we.json.thumb_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && ee(e(30, k = we.getDerivedFromVars(we.json.thumb_secondary_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(29, z = we.getDerivedFromVars(we.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && re(e(28, H = we.getDerivedFromVars(we.json.secondary_value_accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Je(e(27, O = we.getDerivedFromVars(we.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Ce(e(26, oe = we.getDerivedFromVars(we.json.ranges))), t.$$.dirty[0] & /*minValue, maxValue*/
    24 | t.$$.dirty[2] & /*$jsonMinValue, $jsonMaxValue*/
    1536 && (e(3, ze = so(be, ze)), e(4, kt = so(Vt, kt)), ut()), t.$$.dirty[0] & /*minValue, maxValue, value*/
    2072 | t.$$.dirty[2] & /*$valueVariable*/
    256) {
      const Me = Fo(ot || 0, ze, kt);
      Me !== tr && e(11, tr = Me);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue, value2*/
    4120 | t.$$.dirty[2] & /*$value2Variable*/
    128) {
      const Me = Fo(_t || 0, ze, kt);
      Me !== at && e(12, at = Me);
    }
    if (t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbStyle*/
    64 && e(5, lr = co(Fe, ys, lr)), t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbSecondaryStyle*/
    32 && e(6, er = co(X, ys, lr)), t.$$.dirty[1] & /*trackInactiveStyle*/
    16384 | t.$$.dirty[2] & /*$jsonTrackInactiveStyle*/
    16 && e(45, Xt = co(rt, Ml, Xt)), t.$$.dirty[1] & /*trackActiveStyle*/
    32768 | t.$$.dirty[2] & /*$jsonTrackActiveStyle*/
    8 && e(46, mr = co(st, Ml, mr)), t.$$.dirty[2] & /*$jsonMarkActiveStyle*/
    4) {
      let Me = co(Oe, ys, eo);
      Me !== eo && e(47, xt = Me);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markActiveStyle*/
    65536 && (xt ? (e(17, vr = i ? ws(Math.min(tr, at), Math.max(tr, at) + 1, ze, kt, !0) : ws(ze, tr, ze, kt, !0)), ut()) : e(17, vr = [])), t.$$.dirty[2] & /*$jsonMarkInactiveStyle*/
    2) {
      let Me = co(He, ys, eo);
      Me !== eo && e(48, J = Me);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markInactiveStyle*/
    131072 && (J ? (e(18, $t = i ? ws(Math.min(tr, at), Math.max(tr, at) + 1, ze, kt, !1) : ws(tr + 1, kt + 1, ze, kt, !0)), ut()) : e(18, $t = [])), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[2] & /*$jsonTextStyle*/
    1 && e(7, ft = Xu(ge, Be.typefaceProvider, ft)), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[1] & /*$jsonSecondaryTextStyle*/
    1073741824 && e(8, Gt = Xu(ae, Be.typefaceProvider, ft)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    536870912 && (ke != null && ke.description ? e(19, Et = ei(ke)) : we.logError(Y(new Error('Missing accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    512 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    268435456 && e(9, Er = nn($e, Er)), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 | t.$$.dirty[1] & /*$jsonSecondaryAccessibility*/
    134217728 && (he != null && he.description ? e(20, br = ei(he)) : i && we.logError(Y(new Error('Missing second accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext, thumbStyle, hasError*/
    1057 | t.$$.dirty[1] & /*trackActiveStyle, trackInactiveStyle*/
    49152) {
      let Me = !1;
      nr.hasAction() ? (we.logError(Y(new Error('Cannot show "slider" inside component with an action or inside accessibility mode=exclude'))), Me = !0) : lr === eo ? (we.logError(Y(new Error('Missing "thumb_style" in slider'))), Me = !0) : mr === eo ? (we.logError(Y(new Error('Missing "track_active_style" in slider'))), Me = !0) : Xt === eo && (we.logError(Y(new Error('Missing "track_inactive_style" in slider'))), Me = !0), Me !== wr && e(10, wr = Me);
    }
    t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(52, fe = pe(Math.max(...[lr.width, er.width, 0].filter(Nn)))), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(51, T = pe(Math.max(...[lr.height, er.height, 0].filter(Nn)))), t.$$.dirty[0] & /*value, minValue, maxValue*/
    2072 && e(50, Z = (tr - ze) / (kt - ze)), t.$$.dirty[0] & /*secondVariable, value2, minValue, maxValue*/
    12312 && e(49, ce = i ? (at - ze) / (kt - ze) : void 0), t.$$.dirty[0] & /*value, value2, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(54, C = ce !== void 0 ? Math.min(tr, at) : ze), t.$$.dirty[0] & /*value2, value, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(53, D = ce !== void 0 ? Math.abs(at - tr) : tr - ze), t.$$.dirty[0] & /*$direction, minValue, maxValue*/
    16408 | t.$$.dirty[1] & /*trackActiveOffset, trackActivePart, trackInactiveStyle, trackActiveStyle, $jsonRanges*/
    79740928 && vt({
      direction: Q,
      minValue: ze,
      maxValue: kt,
      trackActiveOffset: C,
      trackActivePart: D,
      trackInactiveStyle: Xt,
      trackActiveStyle: mr,
      ranges: me
    }), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle, textStyle, textSecondaryStyle*/
    480 | t.$$.dirty[1] & /*markActiveStyle, markInactiveStyle, maxThumbWidth, maxThumbHeight, trackPart, trackSecondaryPart*/
    4128768 && e(25, M = {
      "--divkit-slider-thumb-width": pe(lr.width),
      "--divkit-slider-thumb-height": pe(lr.height),
      "--divkit-slider-thumb-secondary-width": pe(er.width),
      "--divkit-slider-thumb-secondary-height": pe(er.height),
      "--divkit-slider-text-offset-x": (v = ft == null ? void 0 : ft.offset) != null && v.x ? ln(ft.offset.x) : void 0,
      "--divkit-slider-text-offset-y": (le = ft == null ? void 0 : ft.offset) != null && le.y ? ln(ft.offset.y) : void 0,
      "--divkit-slider-text-secondary-offset-x": (d = Gt == null ? void 0 : Gt.offset) != null && d.x ? ln(Gt.offset.x) : void 0,
      "--divkit-slider-text-secondary-offset-y": (B = Gt == null ? void 0 : Gt.offset) != null && B.y ? ln(Gt.offset.y) : void 0,
      "--divkit-slider-tick-active-width": xt ? pe(xt.width) : void 0,
      "--divkit-slider-tick-active-height": xt ? pe(xt.height) : void 0,
      "--divkit-slider-tick-active-border-radius": xt ? pe(xt.borderRadius) : void 0,
      "--divkit-slider-tick-active-background": (xt == null ? void 0 : xt.background) || void 0,
      "--divkit-slider-tick-active-box-shadow": (xt == null ? void 0 : xt.boxShadow) || void 0,
      "--divkit-slider-tick-inactive-width": J ? pe(J.width) : void 0,
      "--divkit-slider-tick-inactive-height": J ? pe(J.height) : void 0,
      "--divkit-slider-tick-inactive-border-radius": J ? pe(J.borderRadius) : void 0,
      "--divkit-slider-tick-inactive-background": (J == null ? void 0 : J.background) || void 0,
      "--divkit-slider-tick-inactive-box-shadow": (J == null ? void 0 : J.boxShadow) || void 0,
      "--divkit-slider-max-thumb-width": fe,
      "--divkit-slider-max-thumb-height": T,
      "--divkit-slider-track-part": Z,
      "--divkit-slider-track-secondary-part": ce
    }), t.$$.dirty[0] & /*$direction*/
    16384 && e(24, W = { direction: Q }), t.$$.dirty[0] & /*componentContext, input*/
    5 | t.$$.dirty[1] & /*prevId*/
    8192 && we.json && Ft && (bt && (Be.unregisterFocusable(bt), e(44, bt = void 0)), we.id && !we.fakeElement && (e(44, bt = we.id), Be.registerFocusable(bt, {
      focus() {
        Ft && Ft.focus();
      }
    })));
  }, [
    we,
    xe,
    Ft,
    ze,
    kt,
    lr,
    er,
    ft,
    Gt,
    Er,
    wr,
    tr,
    at,
    i,
    Q,
    It,
    hr,
    vr,
    $t,
    Et,
    br,
    Dr,
    s,
    a,
    W,
    M,
    oe,
    O,
    H,
    z,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    u,
    c,
    l,
    Ne,
    Zt,
    Yt,
    se,
    bt,
    Xt,
    mr,
    xt,
    J,
    ce,
    Z,
    T,
    fe,
    D,
    C,
    o,
    n,
    me,
    he,
    $e,
    ke,
    ae,
    ge,
    He,
    Oe,
    st,
    rt,
    X,
    Fe,
    _t,
    ot,
    Vt,
    be,
    mt,
    or,
    yr,
    ar
  ];
}
class fw extends Or {
  constructor(r) {
    super(), Lr(this, r, uw, cw, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const dw = "appkit-input", _w = "appkit-input__aligner", pw = "appkit-input__input", gw = "appkit-input__placeholder", hw = "appkit-input__input_singleline", mw = "appkit-input__input_multiline", Bi = {
  input: dw,
  "input_alignment-horizontal_center": "appkit-input_alignment-horizontal_center",
  "input_alignment-horizontal_end": "appkit-input_alignment-horizontal_end",
  input__aligner: _w,
  input__input: pw,
  input__placeholder: gw,
  "input_alignment-vertical_start": "appkit-input_alignment-vertical_start",
  "input_alignment-vertical_end": "appkit-input_alignment-vertical_end",
  "input_alignment-vertical_baseline": "appkit-input_alignment-vertical_baseline",
  "input_highlight-color": "appkit-input_highlight-color",
  input__input_singleline: hw,
  "input__scroll-wrapper": "appkit-input__scroll-wrapper",
  input__input_multiline: mw,
  "input__input_has-custom-focus": "appkit-input__input_has-custom-focus"
};
function cs(t, r) {
  if (t === r)
    return {
      start: t.length,
      added: 0,
      removed: 0
    };
  if (t.length > r.length) {
    const i = cs(r, t);
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
class lf {
  constructor(r) {
    this.char = r;
  }
}
class wo {
  constructor(r, e, n) {
    this.char = r, this.filter = e, this.placeholder = n;
  }
}
class ja {
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
      if (n instanceof lf)
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
      ) : new lf(o);
    }), n !== null && this.overrideRawValue(n);
  }
  overrideRawValue(r) {
    this.clearRange(0, this.destructedValue.length), this.replaceChars(r, 0), this.cursorPos = Math.min(this.cursorPos, this.value.length);
  }
  applyChangeFrom(r, e) {
    const n = cs(this.value, r);
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
class bw extends ja {
  constructor(r, e) {
    super(r), this.logError = e;
  }
  onException(r) {
    this.logError(r);
  }
}
function yw(t, r, e) {
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
    return e ? (e.updateMaskData(n), e) : new bw(n, r);
  }
  return e || null;
}
class ww extends ja {
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
    const o = cs(this.value, e), i = this.value.lastIndexOf(this.decimalSeparator), s = e.lastIndexOf(this.decimalSeparator), a = i !== s || i === -1 && s === -1, l = this.validFormat(e, o);
    this.cleanup(o);
    const c = this.parseFormat(l) || 0;
    a && this.invalidateMaskDataForFormatted(c), this.replaceChars(l, 0), this.value.length > o.start && !this.isDigit(this.value[o.start]) ? this.cursorPos = n != null ? n : this.cursorPosition : this.cursorPos = Math.abs(this.value.length - (e.length - (n != null ? n : this.cursorPosition)));
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
    const c = e.includes(this.decimalSeparator) || s !== -1, u = [];
    i = e.length - 1;
    let f = !1;
    for (; i >= 0; ) {
      const _ = e[i], h = u.length <= a;
      this.isDigit(_) ? this.inDiff(n, i) && !f && c ? l > 0 && (u.push(_), l--) : u.push(_) : h && o === -1 && i === s ? (u.push(this.decimalSeparator), f = !0) : h && _ === this.decimalSeparator && (o === i || o === -1) && (u.push(this.decimalSeparator), f = !0, o = i), i--;
    }
    return u.reverse().join("").replace(this.trimZeroRegExp, "");
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
function kw(t, r, e) {
  return e ? (e.updateCurrencyParams(t.locale), e) : new ww(t.locale, r);
}
const vw = {
  kotlin: {
    public_default_values: !0
  },
  swift: {
    public_default_values: !0
  }
}, jw = {
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
}, Cw = "object", Ew = {
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
}, n_ = {
  codegen: vw,
  constants: jw,
  type: Cw,
  properties: Ew
}, Aw = "000000000000000", af = "*", Sw = "00", cf = [{
  key: "0",
  filter: "\\d",
  placeholder: "_"
}];
class Vw extends ja {
  constructor(e) {
    super({
      pattern: ff(""),
      decoding: cf,
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
    const o = cs(this.value, e);
    n !== void 0 && (o.start = Math.max(0, n - o.added));
    const i = this.rawValue, s = this.replaceBodyTail(o, e), a = this.rawValue, l = this.newMaskPatternFor(a);
    if (l == null) {
      this.calculateCursorPosition(o, s);
      return;
    }
    this.updateMaskDataWith(l), this.replaceChars(a, 0);
    const c = cs(i, a), u = c.start + c.added;
    this.calculateCursorPositionBy(u);
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
    const n = ff(e), o = this.maskData.pattern;
    return n !== o ? n : null;
  }
  updateMaskDataWith(e) {
    return this.updateMaskData({
      pattern: e,
      decoding: cf,
      alwaysVisible: this.maskData.alwaysVisible
    }, !1);
  }
  onException(e) {
    this.logError(e);
  }
}
function uf(t) {
  return "$ref" in t ? n_.constants[t.$ref.split("/").pop()] : t;
}
function ff(t) {
  if (!t)
    return Aw;
  let r = n_.properties.value.default_value, e = 0;
  for (; !("value" in r); ) {
    if (e >= t.length) {
      r = uf(r[af]);
      break;
    }
    const n = t[e++];
    r = uf(r[n in r ? n : af]);
  }
  return r.value + Sw;
}
function Fw(t, r) {
  return r || new Vw(t);
}
function Iw(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Dw(t) {
  let r, e;
  return r = new hn({
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
          Pw,
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Tw(t) {
  let r, e, n, o, i, s, a, l, c;
  return {
    c() {
      r = Te("input"), g(
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
      t[14] || void 0), g(r, "style", o = dr(
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
    m(u, f) {
      q(u, r, f), t[102](r), l || (c = [
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
          Nr(
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
          Nr(
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
          Nr(
            /*focusHandler*/
            t[121]
          ) && t[121].apply(this, arguments);
        }),
        Qe(r, "blur", function() {
          Nr(
            /*blurHandler*/
            t[122]
          ) && t[122].apply(this, arguments);
        })
      ], l = !0);
    },
    p(u, f) {
      t = u, f[0] & /*inputType*/
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
      65536 && o !== (o = dr(
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
    d(u) {
      u && G(r), t[102](null), l = !1, Jr(c);
    }
  };
}
function Mw(t) {
  let r, e, n, o, i, s, a, l, c;
  return {
    c() {
      r = Te("textarea"), g(r, "class", e = ht("input__input", Bi, {
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
      )), g(r, "style", i = dr(
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
    m(u, f) {
      q(u, r, f), t[101](r), l || (c = [
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
          Nr(
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
          Nr(
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
          Nr(
            /*focusHandler*/
            t[121]
          ) && t[121].apply(this, arguments);
        }),
        Qe(r, "blur", function() {
          Nr(
            /*blurHandler*/
            t[122]
          ) && t[122].apply(this, arguments);
        })
      ], l = !0);
    },
    p(u, f) {
      t = u, f[3] & /*hasCustomFocus*/
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
      65536 && i !== (i = dr(
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
    d(u) {
      u && G(r), t[101](null), l = !1, Jr(c);
    }
  };
}
function Pw(t) {
  let r;
  function e(i, s) {
    return (
      /*isMultiline*/
      i[8] ? Mw : Tw
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
      i && G(r), o.d(i);
    }
  };
}
function Nw(t) {
  let r, e, n, o;
  const i = [Dw, Iw], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[4] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (ir(), x(s[u], 1, 1, () => {
        s[u] = null;
      }), sr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
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
const zw = typeof document < "u" && "inputMode" in document.createElement("input"), df = {
  email: "email",
  number: "number",
  phone: "tel",
  single_line_text: "text",
  multi_line_text: "text",
  uri: "url",
  password: "password"
};
function Lw(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, z, H, O, oe, fe, T, Z, ce, C, D, M, W, Q, me, Ae, Ce, he, Ve, re, $e, Ge, Je, ke = j, De = () => (ke(), ke = S(s, (Ye) => e(74, Je = Ye)), s), ue, ae = j, de = () => (ae(), ae = S(a, (Ye) => e(75, ue = Ye)), a), ee, ge = j, ie = () => (ge(), ge = S(Ae, (Ye) => e(108, ee = Ye)), Ae), Se, He = j, We = () => (He(), He = S(Q, (Ye) => e(76, Se = Ye)), Q), te, Oe = j, Pe = () => (Oe(), Oe = S(ce, (Ye) => e(77, te = Ye)), ce), nt, st = j, et = () => (st(), st = S(W, (Ye) => e(78, nt = Ye)), W), wt, rt, Pt = j, ct = () => (Pt(), Pt = S(Z, (Ye) => e(80, rt = Ye)), Z), X, _e = j, lt = () => (_e(), _e = S(T, (Ye) => e(81, X = Ye)), T), Fe, I = j, jt = () => (I(), I = S(Ce, (Ye) => e(82, Fe = Ye)), Ce), _t, At = j, Dt = () => (At(), At = S(fe, (Ye) => e(83, _t = Ye)), fe), ot, K = j, Mt = () => (K(), K = S(oe, (Ye) => e(84, ot = Ye)), oe), Vt, Jt = j, qt = () => (Jt(), Jt = S(M, (Ye) => e(85, Vt = Ye)), M), be, Ke = j, pt = () => (Ke(), Ke = S(D, (Ye) => e(86, be = Ye)), D), we, xe = j, Be = () => (xe(), xe = S(O, (Ye) => e(87, we = Ye)), O), nr, Ne = j, bt = () => (Ne(), Ne = S(H, (Ye) => e(88, nr = Ye)), H), Ft, It = j, hr = () => (It(), It = S(z, (Ye) => e(89, Ft = Ye)), z), ze, kt = j, lr = () => (kt(), kt = S(k, (Ye) => e(90, ze = Ye)), k), er, Xt = j, mr = () => (Xt(), Xt = S(w, (Ye) => e(91, er = Ye)), w), vr, xt = j, $t = () => (xt(), xt = S(p, (Ye) => e(92, vr = Ye)), p), J, ft = j, Gt = () => (ft(), ft = S(m, (Ye) => e(93, J = Ye)), m), Et, br = j, Er = () => (br(), br = S(h, (Ye) => e(94, Et = Ye)), h), wr, Dr = j, zr = () => (Dr(), Dr = S(_, (Ye) => e(95, wr = Ye)), _), tr, at = j, vt = () => (at(), at = S(f, (Ye) => e(96, tr = Ye)), f), Zt, Yt = j, _r = () => (Yt(), Yt = S(u, (Ye) => e(97, Zt = Ye)), u), ut, se = j, mt = () => (se(), se = S(c, (Ye) => e(98, ut = Ye)), c), or, yr = j, ar = () => (yr(), yr = S(l, (Ye) => e(99, or = Ye)), l), v, le = j, d = () => (le(), le = S(me, (Ye) => e(100, v = Ye)), me), B, Me = j, qe = () => (Me(), Me = S(C, (Ye) => e(46, B = Ye)), C);
  t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => He()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => st()), t.$$.on_destroy.push(() => Pt()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => At()), t.$$.on_destroy.push(() => K()), t.$$.on_destroy.push(() => Jt()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Ne()), t.$$.on_destroy.push(() => It()), t.$$.on_destroy.push(() => kt()), t.$$.on_destroy.push(() => Xt()), t.$$.on_destroy.push(() => xt()), t.$$.on_destroy.push(() => ft()), t.$$.on_destroy.push(() => br()), t.$$.on_destroy.push(() => Dr()), t.$$.on_destroy.push(() => at()), t.$$.on_destroy.push(() => Yt()), t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => yr()), t.$$.on_destroy.push(() => le()), t.$$.on_destroy.push(() => Me());
  let { componentContext: ve } = r, { layoutParams: R = void 0 } = r;
  const Tt = Ir(Kr), Ot = Ir(To), Xe = Tt.direction;
  yn(t, Xe, (Ye) => e(79, wt = Ye));
  let dt, Wt, Vr = !1, kr = null, Tr = "", Cn = !1, Ee = "", Yr = 12, Xr, mn = "", Vn = "", y, E = "", A = "#000", ne = "", N = "start", Ze = "center", Ie = "multi_line_text", Qt = "text", St, Ue = "", Ut = null, Ct = "", cr = "", Br = "", pn = !0, Wr = 1 / 0, wn = "off", tn = "default", Fn = "", Rn = !1, $n = !0, Ht = 0, b = 0;
  function V() {
    e(54, Ee = ""), e(55, Yr = 12), e(56, Xr = void 0), e(57, mn = ""), e(58, Vn = ""), e(59, y = void 0), e(61, A = "#000"), e(62, ne = ""), e(63, N = "left"), e(64, Ze = "center"), e(65, Ie = "multi_line_text"), e(9, Qt = "text"), e(10, St = void 0), e(5, pn = !0), e(6, Wr = 1 / 0), e(12, wn = "off"), e(13, tn = "default"), e(14, Fn = ""), Ht = 0, b = 0;
  }
  function $(Ye) {
    (Ye == null ? void 0 : Ye.type) === "fixed_length" ? e(53, kr = yw(Ye, ve.logError, kr)) : (Ye == null ? void 0 : Ye.type) === "currency" ? e(53, kr = kw(Ye, ve.logError, kr)) : (Ye == null ? void 0 : Ye.type) === "phone" && e(53, kr = Fw(ve.logError, kr)), kr && no();
  }
  function P(Ye) {
    if (!Array.isArray(ee))
      return !0;
    for (const jr of ee)
      if (jr) {
        if (jr.type === "regex")
          try {
            if (!new RegExp("^" + (jr.pattern || "") + "$").test(Ye))
              return !1;
          } catch (an) {
            return ve.logError(Y(new Error("Failed to create a regex"), {
              additional: { originalError: String(an) }
            })), !0;
          }
        else if (jr.type === "expression" && !jr.condition)
          return !1;
      }
    return !0;
  }
  function je(Ye) {
    const jr = Ye.target;
    let an = jr.value || "";
    an === `
` && (an = ""), an.length > Wr && (an = Tr, jr instanceof HTMLInputElement && (jr.value = an)), Tr !== an && (P(an) ? (e(3, Tr = an), s.setValue(an), kr && Co(), Kn()) : (e(3, Tr = an), jr instanceof HTMLInputElement && (jr.value = an), Sn().then(() => {
      Rr(Ht, b);
    })));
  }
  function ye(Ye) {
    if (Ht = qr() || 0, b = Mr() || 0, Ye.ctrlKey || Ye.metaKey || Ye.altKey || Ye.shiftKey)
      return;
    const jr = ve.json.enter_key_actions;
    Ye.key === "Enter" && Array.isArray(jr) && jr.length && (Ye.preventDefault(), ve.execAnyActions(jr));
  }
  function Bt() {
    Vr = !1, setTimeout(
      () => {
        Vr = !0;
      },
      250
    );
  }
  function Rt() {
    Vr || Wt.select();
  }
  function qr() {
    const Ye = Wt;
    return Ye.selectionStart === null ? void 0 : Ye.selectionStart;
  }
  function Mr() {
    const Ye = Wt;
    return Ye.selectionEnd === null ? void 0 : Ye.selectionEnd;
  }
  function Rr(Ye, jr) {
    const an = Wt;
    an.selectionStart = Ye, an.selectionEnd = jr;
  }
  async function Co() {
    if (!Wt || !kr)
      return;
    const Ye = qr() || 0, jr = Mr() || 0;
    kr.applyChangeFrom(Tr, jr === Ye ? jr : 0), a.set(kr.rawValue), vl(s, Je = e(3, Tr = kr.value), Je);
    const an = kr.cursorPosition;
    await Sn(), document.activeElement === Wt && Rr(an, an);
  }
  async function no() {
    if (!Wt || !kr)
      return;
    kr.overrideRawValue(ue), a.set(kr.rawValue), vl(s, Je = e(3, Tr = kr.value), Je);
    const Ye = kr.cursorPosition;
    await Sn(), document.activeElement === Wt && Rr(Ye, Ye);
  }
  function Kn() {
    const Ye = $n;
    $n = !1;
    const jr = ve.json.validators;
    if (!Array.isArray(jr) || !jr.length)
      return;
    const Ci = ve.getJsonWithVars(jr).filter((gn) => (gn.type === "regex" || gn.type === "expression") && gn.label_id && gn.variable), Pn = [];
    Ci.forEach((gn) => {
      const Lo = ve.getVariable(gn.variable);
      if (!Lo)
        return;
      if (Lo.getType() !== "boolean") {
        Ye && ve.logError(Y(new Error("Incorrect variable type for the validator"), {
          additional: { variable: gn.variable }
        }));
        return;
      }
      let oo = !1;
      if (Tr === "" && (gn.allow_empty === !0 || gn.allow_empty === 1))
        oo = !0;
      else if (gn.type === "regex") {
        if (!gn.pattern || typeof gn.pattern != "string")
          return;
        try {
          oo = new RegExp("^" + gn.pattern + "$").test(Tr);
        } catch {
          Ye && ve.logError(Y(new Error("Failed to create a regular expression using the validator pattern"), {
            additional: { pattern: gn.pattern }
          }));
          return;
        }
      } else if (gn.type === "expression")
        oo = gn.condition === !0 || gn.condition === 1;
      else
        return;
      if (Lo.setValue(oo), !oo) {
        const Ei = Tt.getComponentId(gn.label_id);
        Ei && Pn.push(Ei);
      }
    }), e(14, Fn = Pn.join(" "));
  }
  xn(() => {
    e(70, Rn = !0), Wt && kr && ue && (kr.overrideRawValue(ue), vl(s, Je = e(3, Tr = kr.value), Je));
  }), sn(() => {
    e(70, Rn = !1), dt && (Tt.unregisterFocusable(dt), e(52, dt = void 0));
  });
  function In(Ye) {
    Fr[Ye ? "unshift" : "push"](() => {
      Wt = Ye, e(2, Wt);
    });
  }
  function Ko(Ye) {
    Fr[Ye ? "unshift" : "push"](() => {
      Wt = Ye, e(2, Wt);
    });
  }
  return t.$$set = (Ye) => {
    "componentContext" in Ye && e(0, ve = Ye.componentContext), "layoutParams" in Ye && e(1, R = Ye.layoutParams);
  }, t.$$.update = () => {
    var Ye;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(73, n = ve.origJson), t.$$.dirty[2] & /*origJson*/
    2048 && n && V(), t.$$.dirty[0] & /*componentContext*/
    1 && e(71, o = ve.json.text_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(72, i = (Ye = ve.json.mask) == null ? void 0 : Ye.raw_text_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*variable*/
    512 && De(e(7, s = o && (ve.getVariable(o, "string") || Tt.awaitGlobalVariable(o, "string", "")) || lo("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*rawVariable*/
    1024 && de(e(15, a = i && (ve.getVariable(i, "string") || Tt.awaitGlobalVariable(i, "string", "")) || lo("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && ar(e(45, l = ve.getDerivedFromVars(ve.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && mt(e(44, c = ve.getDerivedFromVars(ve.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && _r(e(43, u = ve.getDerivedFromVars(ve.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && vt(e(42, f = ve.getDerivedFromVars(ve.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && zr(e(41, _ = ve.getDerivedFromVars(ve.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Er(e(40, h = ve.getDerivedFromVars(ve.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && Gt(e(39, m = ve.getDerivedFromVars(ve.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && $t(e(38, p = ve.getDerivedFromVars(ve.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && mr(e(37, w = ve.getDerivedFromVars(ve.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && lr(e(36, k = ve.getDerivedFromVars(ve.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && hr(e(35, z = ve.getDerivedFromVars(ve.json.highlight_color))), t.$$.dirty[0] & /*componentContext*/
    1 && bt(e(34, H = ve.getDerivedFromVars(ve.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Be(e(33, O = ve.getDerivedFromVars(ve.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Mt(e(32, oe = ve.getDerivedFromVars(ve.json.keyboard_type))), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(31, fe = ve.getDerivedFromVars(ve.json.mask))), t.$$.dirty[0] & /*componentContext*/
    1 && lt(e(30, T = ve.getDerivedFromVars(ve.json.max_visible_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(29, Z = ve.getDerivedFromVars(ve.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Pe(e(28, ce = ve.getDerivedFromVars(ve.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(27, C = ve.getDerivedFromVars(ve.json.select_all_on_focus))), t.$$.dirty[0] & /*componentContext*/
    1 && pt(e(26, D = ve.getDerivedFromVars(ve.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && qt(e(25, M = ve.getDerivedFromVars(ve.json.max_length))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(24, W = ve.getDerivedFromVars(ve.json.autocapitalization))), t.$$.dirty[0] & /*componentContext*/
    1 && We(e(23, Q = ve.getDerivedFromVars(ve.json.enter_key_type))), t.$$.dirty[0] & /*componentContext*/
    1 && d(e(22, me = ve.getDerivedFromVars(ve.json.validators))), t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(21, Ae = ve.getDerivedFromVars(ve.json.filters))), t.$$.dirty[0] & /*componentContext*/
    1 && jt(e(20, Ce = ve.getDerivedFromVars(ve.json.max_input_height))), t.$$.dirty[0] & /*componentContext, hasError*/
    17 | t.$$.dirty[2] & /*variable, $jsonAccessibility*/
    33280) {
      let jr = !1;
      o ? (Ot.hasAction() || (te == null ? void 0 : te.mode) === "exclude") && (jr = !0, ve.logError(Y(new Error('Cannot show "input" inside component with an action or inside accessibility mode=exclude')))) : (e(4, Cn = !0), ve.logError(Y(new Error('Missing "text_variable" in "input"')))), Cn !== jr && e(4, Cn = jr);
    }
    if (t.$$.dirty[2] & /*$jsonMask*/
    2097152 && $(_t), t.$$.dirty[0] & /*maxLength*/
    64 | t.$$.dirty[2] & /*$jsonMaxLength*/
    8388608 && e(6, Wr = Gn(Vt, Wr)), t.$$.dirty[0] & /*value, maxLength, valueVariable*/
    200 | t.$$.dirty[1] & /*inputMask*/
    4194304 | t.$$.dirty[2] & /*$valueVariable*/
    4096 && !kr && Tr !== Je) {
      let jr = Je;
      jr.length > Wr && (jr = jr.slice(0, Wr), s.setValue(jr)), e(3, Tr = jr), Kn();
    }
    if (t.$$.dirty[1] & /*inputMask*/
    4194304 | t.$$.dirty[2] & /*$rawValueVariable*/
    8192 && kr && kr.rawValue !== ue && (no(), Kn()), t.$$.dirty[2] & /*mounted*/
    256 | t.$$.dirty[3] & /*$jsonValidators*/
    128 && v && Rn && Kn(), t.$$.dirty[3] & /*$jsonHintText*/
    64 && e(19, he = or), t.$$.dirty[1] & /*hintColor*/
    8388608 | t.$$.dirty[3] & /*$jsonHintColor*/
    32 && e(54, Ee = pr(ut, 1, Ee)), t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[3] & /*$jsonFontSize*/
    16 && e(55, Yr = Gn(Zt, Yr)), t.$$.dirty[1] & /*fontWeight*/
    33554432 | t.$$.dirty[3] & /*$jsonFontWeight, $jsonFontWeightValue, $jsonFontFamily*/
    14 && (e(56, Xr = mi(tr, wr, Xr)), Et && typeof Et == "string" ? e(57, mn = Tt.typefaceProvider(Et, { fontWeight: Xr || 400 })) : e(57, mn = "")), t.$$.dirty[1] & /*fontVariationSettings*/
    134217728 | t.$$.dirty[3] & /*$jsonFontVariationSettings*/
    1) {
      const jr = Oi(J);
      jr !== Vn && e(58, Vn = jr);
    }
    if (t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[2] & /*$jsonLineHeight*/
    1073741824) {
      const jr = vr;
      zn(jr) && e(59, y = jr / Yr);
    }
    t.$$.dirty[2] & /*$jsonLetterSpacing*/
    536870912 && gl(er) && e(60, E = pe(er)), t.$$.dirty[1] & /*textColor*/
    1073741824 | t.$$.dirty[2] & /*$jsonTextColor*/
    268435456 && e(61, A = pr(ze, 1, A)), t.$$.dirty[2] & /*$jsonHighlightColor, highlightColor*/
    134217729 && e(62, ne = pr(Ft, 1, ne)), t.$$.dirty[2] & /*$jsonAlignmentHorizontal, $direction, alignmentHorizontal*/
    67239938 && e(63, N = ml(nr, wt, N)), t.$$.dirty[2] & /*$jsonAlignmentVertical, alignmentVertical*/
    33554436 && e(64, Ze = bl(we, Ze)), t.$$.dirty[0] & /*isEnabled*/
    32 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    16777216 && e(5, pn = nn(be, pn)), t.$$.dirty[2] & /*$jsonKeyboardType, $jsonMask, keyboardType*/
    6291464 && (ot && ot in df && (e(9, Qt = df[ot]), e(65, Ie = ot)), (_t == null ? void 0 : _t.type) === "currency" ? (e(9, Qt = zw ? "text" : "tel"), e(10, St = "decimal")) : Ie === "number" ? e(10, St = "decimal") : e(10, St = void 0)), t.$$.dirty[2] & /*keyboardType*/
    8 && e(8, Ve = Ie === "multi_line_text"), t.$$.dirty[1] & /*lineHeight, fontSize*/
    285212672 | t.$$.dirty[2] & /*$jsonMaxInputHeight, $jsonVisibleMaxLines, $jsonPaddings, selfPadding, $direction*/
    1966112 && (zn(Fe) ? e(66, Ue = ln(Fe)) : zn(X) ? e(66, Ue = `calc(${X * (y || 1.25) * (Yr / 10) + "em"} + ${ln(en(rt == null ? void 0 : rt.top, 0) + en(rt == null ? void 0 : rt.bottom, 0))})`) : e(66, Ue = ""), e(67, Ut = hi(rt || void 0, Ut)), e(68, Ct = Ut ? ho(
      {
        top: (Number(Ut.top) || 0) / Yr * 10,
        right: (Number(wt === "ltr" ? Ut.end : Ut.start) || Number(Ut.right) || 0) / Yr * 10,
        bottom: (Number(Ut.bottom) || 0) / Yr * 10,
        left: (Number(wt === "ltr" ? Ut.start : Ut.end) || Number(Ut.left) || 0) / Yr * 10
      },
      wt
    ) : ""), e(69, cr = Ut ? ho(
      {
        top: (Number(Ut.top) || 0) / Yr * 10,
        bottom: (Number(Ut.bottom) || 0) / Yr * 10
      },
      wt
    ) : "")), t.$$.dirty[2] & /*$jsonAutocapitalization*/
    65536 && (nt === "all_characters" ? e(12, wn = "characters") : nt === "sentences" ? e(12, wn = "sentences") : nt === "words" ? e(12, wn = "words") : (nt === "none" || nt === "auto") && e(12, wn = "off")), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonAccessibility*/
    32768 && (te != null && te.description ? e(11, Br = ei(te)) : ve.logError(Y(new Error('Missing accessibility "description" for input'), { level: "warn" }))), t.$$.dirty[2] & /*$jsonEnterKeyType*/
    16384 && (Se === "default" || Se === "done" || Se === "go" || Se === "search" || Se === "send") && e(13, tn = Se), t.$$.dirty[0] & /*isMultiline*/
    256 | t.$$.dirty[2] & /*highlightColor, alignmentHorizontal, alignmentVertical*/
    7 && e(18, re = {
      "highlight-color": !!ne,
      multiline: Ve,
      "alignment-horizontal": N,
      "alignment-vertical": Ze
    }), t.$$.dirty[1] & /*hintColor, lineHeight, fontWeight, fontFamily, fontVariationSettings, letterSpacing, textColor*/
    2122317824 | t.$$.dirty[2] & /*highlightColor, maxHeight*/
    17 && e(17, $e = {
      "--divkit-input-hint-color": Ee,
      "--divkit-input-highlight-color": ne,
      "--divkit-input-line-height": y,
      "font-weight": Xr,
      "font-family": mn,
      "font-variation-settings": Vn,
      "letter-spacing": E,
      color: A,
      "max-height": Ue
    }), t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[2] & /*padding*/
    64 && e(16, Ge = { "font-size": pe(Yr), padding: Ct }), t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[2] & /*verticalPadding*/
    128, t.$$.dirty[0] & /*input, componentContext, value*/
    13 | t.$$.dirty[1] & /*prevId*/
    2097152 && Wt && ve.json && (dt && (Tt.unregisterFocusable(dt), e(52, dt = void 0)), ve.id && !ve.fakeElement && (e(52, dt = ve.id), Tt.registerFocusable(dt, {
      focus() {
        Wt && (Wt.focus(), Rr(Tr.length, Tr.length));
      }
    })));
  }, [
    ve,
    R,
    Wt,
    Tr,
    Cn,
    pn,
    Wr,
    s,
    Ve,
    Qt,
    St,
    Br,
    wn,
    tn,
    Fn,
    a,
    Ge,
    $e,
    re,
    he,
    Ce,
    Ae,
    me,
    Q,
    W,
    M,
    D,
    C,
    ce,
    Z,
    T,
    fe,
    oe,
    O,
    H,
    z,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    u,
    c,
    l,
    B,
    Xe,
    je,
    ye,
    Bt,
    Rt,
    dt,
    kr,
    Ee,
    Yr,
    Xr,
    mn,
    Vn,
    y,
    E,
    A,
    ne,
    N,
    Ze,
    Ie,
    Ue,
    Ut,
    Ct,
    cr,
    Rn,
    o,
    i,
    n,
    Je,
    ue,
    Se,
    te,
    nt,
    wt,
    rt,
    X,
    Fe,
    _t,
    ot,
    Vt,
    be,
    we,
    nr,
    Ft,
    ze,
    er,
    vr,
    J,
    Et,
    wr,
    tr,
    Zt,
    ut,
    or,
    v,
    In,
    Ko
  ];
}
class Ow extends Or {
  constructor(r) {
    super(), Lr(this, r, Lw, Nw, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1, -1]);
  }
}
const Bw = "appkit-select", Rw = "appkit-select_hint", Hw = "appkit-select__select", Ww = "appkit-select__option", Pi = {
  select: Bw,
  "select__select-text": "appkit-select__select-text",
  select_hint: Rw,
  select__select: Hw,
  "select__select_has-custom-focused": "appkit-select__select_has-custom-focused",
  "has-custom-focused": "appkit-has-custom-focused",
  select__option: Ww
};
function _f(t, r, e) {
  const n = t.slice();
  return n[62] = r[e], n;
}
function Uw(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Gw(t) {
  let r, e;
  return r = new hn({
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
          Jw,
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function pf(t) {
  let r, e = (
    /*item*/
    (t[62].text || /*item*/
    t[62].value) + ""
  ), n, o;
  return {
    c() {
      r = Te("option"), n = Jn(e), g(r, "class", Pi.select__option), r.__value = o = /*item*/
      t[62].value, uc(r, r.__value);
    },
    m(i, s) {
      q(i, r, s), yt(r, n);
    },
    p(i, s) {
      s[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      (i[62].text || /*item*/
      i[62].value) + "") && ro(n, e), s[0] & /*filteredItems*/
      32 && o !== (o = /*item*/
      i[62].value) && (r.__value = o, uc(r, r.__value));
    },
    d(i) {
      i && G(r);
    }
  };
}
function Jw(t) {
  let r, e = (
    /*selectText*/
    (t[4] || /*$jsonHintText*/
    t[25] || "​") + ""
  ), n, o, i, s, a, l, c, u, f = rr(
    /*filteredItems*/
    t[5]
  ), _ = [];
  for (let h = 0; h < f.length; h += 1)
    _[h] = pf(_f(t, f, h));
  return {
    c() {
      r = Te("span"), n = Jn(e), i = gr(), s = Te("select");
      for (let h = 0; h < _.length; h += 1)
        _[h].c();
      g(r, "class", Pi["select__select-text"]), g(r, "style", o = dr(
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
      ), g(s, "style", l = dr(
        /*selectStl*/
        t[8]
      )), /*$valueVariable*/
      t[6] === void 0 && go(() => (
        /*select_1_change_handler*/
        t[55].call(s)
      ));
    },
    m(h, m) {
      q(h, r, m), yt(r, n), q(h, i, m), q(h, s, m);
      for (let p = 0; p < _.length; p += 1)
        _[p] && _[p].m(s, null);
      t[54](s), fc(
        s,
        /*$valueVariable*/
        t[6],
        !0
      ), c || (u = [
        Qe(
          s,
          "change",
          /*select_1_change_handler*/
          t[55]
        ),
        Qe(s, "focus", function() {
          Nr(
            /*focusHandler*/
            t[60]
          ) && t[60].apply(this, arguments);
        }),
        Qe(s, "blur", function() {
          Nr(
            /*blurHandler*/
            t[61]
          ) && t[61].apply(this, arguments);
        })
      ], c = !0);
    },
    p(h, m) {
      if (t = h, m[0] & /*selectText, $jsonHintText*/
      33554448 && e !== (e = /*selectText*/
      (t[4] || /*$jsonHintText*/
      t[25] || "​") + "") && ro(n, e), m[0] & /*innerStl*/
      512 && o !== (o = dr(
        /*innerStl*/
        t[9]
      )) && g(r, "style", o), m[0] & /*filteredItems*/
      32) {
        f = rr(
          /*filteredItems*/
          t[5]
        );
        let p;
        for (p = 0; p < f.length; p += 1) {
          const w = _f(t, f, p);
          _[p] ? _[p].p(w, m) : (_[p] = pf(w), _[p].c(), _[p].m(s, null));
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
      256 && l !== (l = dr(
        /*selectStl*/
        t[8]
      )) && g(s, "style", l), m[0] & /*$valueVariable, filteredItems*/
      96 && fc(
        s,
        /*$valueVariable*/
        t[6]
      );
    },
    d(h) {
      h && (G(r), G(i), G(s)), on(_, h), t[54](null), c = !1, Jr(u);
    }
  };
}
function qw(t) {
  let r, e, n, o;
  const i = [Gw, Uw], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (ir(), x(s[u], 1, 1, () => {
        s[u] = null;
      }), sr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
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
function Kw(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, z, H, O, oe, fe, T, Z, ce = j, C = () => (ce(), ce = S(H, (ze) => e(42, Z = ze)), H), D, M = j, W = () => (M(), M = S(z, (ze) => e(43, D = ze)), z), Q, me = j, Ae = () => (me(), me = S(k, (ze) => e(44, Q = ze)), k), Ce, he = j, Ve = () => (he(), he = S(w, (ze) => e(45, Ce = ze)), w), re, $e = j, Ge = () => ($e(), $e = S(p, (ze) => e(46, re = ze)), p), Je, ke = j, De = () => (ke(), ke = S(m, (ze) => e(47, Je = ze)), m), ue, ae = j, de = () => (ae(), ae = S(h, (ze) => e(48, ue = ze)), h), ee, ge = j, ie = () => (ge(), ge = S(_, (ze) => e(49, ee = ze)), _), Se, He = j, We = () => (He(), He = S(f, (ze) => e(50, Se = ze)), f), te, Oe = j, Pe = () => (Oe(), Oe = S(u, (ze) => e(51, te = ze)), u), nt, st, et = j, wt = () => (et(), et = S(l, (ze) => e(53, st = ze)), l), rt, Pt = j, ct = () => (Pt(), Pt = S(a, (ze) => e(6, rt = ze)), a), X, _e = j, lt = () => (_e(), _e = S(c, (ze) => e(25, X = ze)), c);
  t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => $e()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => He()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => et()), t.$$.on_destroy.push(() => Pt()), t.$$.on_destroy.push(() => _e());
  let { componentContext: Fe } = r, { layoutParams: I = void 0 } = r;
  const jt = Ir(Kr), _t = Ir(To), At = jt.direction;
  yn(t, At, (ze) => e(52, nt = ze));
  let Dt, ot, K = !1, Mt = "", Vt = null, Jt = "", qt = "rgba(0,0,0,.45)", be = 12, Ke, pt = "", we = "", xe, Be = "", nr = "#000", Ne = "", bt;
  function Ft() {
    e(28, Vt = null), e(30, qt = "rgba(0,0,0,.45)"), e(31, be = 12), e(32, Ke = void 0), e(33, pt = ""), e(34, we = ""), e(35, xe = void 0), e(36, Be = ""), e(37, nr = "#000"), e(7, Ne = "");
  }
  sn(() => {
    Dt && (jt.unregisterFocusable(Dt), e(27, Dt = void 0));
  });
  function It(ze) {
    Fr[ze ? "unshift" : "push"](() => {
      ot = ze, e(2, ot);
    });
  }
  function hr() {
    rt = uh(this), a.set(rt), e(5, s), e(40, i), e(0, Fe);
  }
  return t.$$set = (ze) => {
    "componentContext" in ze && e(0, Fe = ze.componentContext), "layoutParams" in ze && e(1, I = ze.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(41, n = Fe.origJson), t.$$.dirty[1] & /*origJson*/
    1024 && n && Ft(), t.$$.dirty[0] & /*componentContext*/
    1 && e(39, o = Fe.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(40, i = Fe.json.options), t.$$.dirty[1] & /*items*/
    512 && e(5, s = Array.isArray(i) && i.filter((ze) => typeof ze.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    256 && ct(e(24, a = o && (Fe.getVariable(o, "string") || jt.awaitGlobalVariable(o, "string", "")) || lo("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && wt(e(23, l = Fe.getDerivedFromVars(Fe.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && lt(e(22, c = Fe.getDerivedFromVars(Fe.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && Pe(e(21, u = Fe.getDerivedFromVars(Fe.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && We(e(20, f = Fe.getDerivedFromVars(Fe.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(19, _ = Fe.getDerivedFromVars(Fe.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(18, h = Fe.getDerivedFromVars(Fe.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(17, m = Fe.getDerivedFromVars(Fe.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(16, p = Fe.getDerivedFromVars(Fe.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && Ve(e(15, w = Fe.getDerivedFromVars(Fe.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(14, k = Fe.getDerivedFromVars(Fe.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && W(e(13, z = Fe.getDerivedFromVars(Fe.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && C(e(12, H = Fe.getDerivedFromVars(Fe.json.accessibility))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || Fe.logError(Y(new Error('Empty selection "items" in "select"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    2304) {
      let ze = !1;
      o ? (_t.hasAction() || (Z == null ? void 0 : Z.mode) === "exclude") && (ze = !0, Fe.logError(Y(new Error('Cannot show "select" inside component with an action or inside accessibility mode=exclude')))) : (e(3, K = !0), Fe.logError(Y(new Error('Missing "value_variable" in "select"')))), K !== ze && e(3, K = ze);
    }
    if (t.$$.dirty[0] & /*filteredItems, $valueVariable, componentContext*/
    97 | t.$$.dirty[1] & /*prevWarnValue*/
    128) {
      const ze = s.find((kt) => kt.value === rt);
      ze ? e(4, Mt = (typeof ze.text == "string" ? ze.text : ze.value) || "") : (e(4, Mt = ""), rt && bt !== rt && (e(38, bt = rt), Fe.logError(Y(new Error('Value from the variable was not found in the selection items for "select"')))));
    }
    if (t.$$.dirty[1] & /*$jsonFontSize, fontSize*/
    524289 && e(31, be = Gn(Se, be)), t.$$.dirty[0] & /*selfPadding*/
    268435456 | t.$$.dirty[1] & /*$jsonPaddings, fontSize, $direction*/
    6291457 && (e(28, Vt = hi(st || void 0, Vt)), e(29, Jt = Vt ? ho(
      {
        top: (Number(Vt.top) || 0) / be * 10,
        right: (Number(nt === "ltr" ? Vt.end : Vt.start) || Number(Vt.right) || 0) / be * 10,
        bottom: (Number(Vt.bottom) || 0) / be * 10,
        left: (Number(nt === "ltr" ? Vt.start : Vt.end) || Number(Vt.left) || 0) / be * 10
      },
      nt
    ) : "")), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*$jsonHintColor*/
    1048576 && e(30, qt = pr(te, 1, qt)), t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontWeightValue, fontWeight, $jsonFontFamily*/
    458754 && (e(32, Ke = mi(ee, ue, Ke)), Je && typeof Je == "string" ? e(33, pt = jt.typefaceProvider(Je, { fontWeight: Ke || 400 })) : e(33, pt = "")), t.$$.dirty[1] & /*$jsonFontVariationSettings, fontVariationSettings*/
    32776) {
      const ze = Oi(re);
      ze !== we && e(34, we = ze);
    }
    if (t.$$.dirty[1] & /*$jsonLineHeight, fontSize*/
    16385) {
      const ze = Ce;
      zn(ze) && e(35, xe = ze / be);
    }
    t.$$.dirty[1] & /*$jsonLetterSpacing, fontSize*/
    8193 && gl(Q) && e(36, Be = pe(Q / be * 10)), t.$$.dirty[1] & /*$jsonTextColor, textColor*/
    4160 && e(37, nr = pr(D, 1, nr)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    2048 && (Z != null && Z.description ? e(7, Ne = ei(Z)) : Fe.logError(Y(new Error('Missing accessibility "description" for select'), { level: "warn" }))), t.$$.dirty[0] & /*selectText*/
    16 && e(11, O = { hint: !Mt }), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*fontWeight, fontFamily, fontVariationSettings, textColor*/
    78 && e(10, oe = {
      "--divkit-input-hint-color": qt,
      "font-weight": Ke,
      "font-family": pt,
      "font-variation-settings": we,
      color: nr
    }), t.$$.dirty[0] & /*padding*/
    536870912 | t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(9, fe = {
      padding: Jt,
      "font-size": pe(be),
      "line-height": xe,
      "letter-spacing": Be
    }), t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(8, T = {
      "font-size": pe(be),
      "line-height": xe,
      "letter-spacing": Be
    }), t.$$.dirty[0] & /*componentContext, select, prevId*/
    134217733 && Fe.json && ot && (Dt && (jt.unregisterFocusable(Dt), e(27, Dt = void 0)), Fe.id && !Fe.fakeElement && (e(27, Dt = Fe.id), jt.registerFocusable(Dt, {
      focus() {
        ot && ot.focus();
      }
    })));
  }, [
    Fe,
    I,
    ot,
    K,
    Mt,
    s,
    rt,
    Ne,
    T,
    fe,
    oe,
    O,
    H,
    z,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    u,
    c,
    l,
    a,
    X,
    At,
    Dt,
    Vt,
    Jt,
    qt,
    be,
    Ke,
    pt,
    we,
    xe,
    Be,
    nr,
    bt,
    o,
    i,
    n,
    Z,
    D,
    Q,
    Ce,
    re,
    Je,
    ue,
    ee,
    Se,
    te,
    nt,
    st,
    It,
    hr
  ];
}
class Yw extends Or {
  constructor(r) {
    super(), Lr(this, r, Kw, qw, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Xw = "appkit-video__video", Zw = "appkit-video__container", Qw = "appkit-video_absolute", wi = {
  video__video: Xw,
  video__container: Zw,
  "video__aspect-wrapper": "appkit-video__aspect-wrapper",
  video_absolute: Qw
};
function xw(t, r) {
  return Array.isArray(t) && t.length ? t.filter((e) => (e == null ? void 0 : e.type) === "video_source" && typeof e.url == "string" && typeof e.mime_type == "string").map((e) => {
    const n = {
      src: e.url
    };
    return e.mime_type && (n.type = e.mime_type), n;
  }) : r;
}
function $w(t) {
  return t === "fill" ? "cover" : t === "no_scale" ? "none" : "contain";
}
function gf(t, r, e) {
  const n = t.slice();
  return n[60] = r[e], n;
}
function hf(t, r, e) {
  const n = t.slice();
  return n[60] = r[e], n;
}
function ek(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function tk(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "video",
        wi,
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
      $$slots: { default: [lk] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = ht(
        "video",
        wi,
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
      zt(r, n);
    }
  };
}
function rk(t) {
  let r, e, n, o, i, s = rr(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = bf(gf(t, s, l));
  return {
    c() {
      r = Te("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      g(r, "class", wi.video__video), g(r, "style", e = dr(
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
    m(l, c) {
      q(l, r, c);
      for (let u = 0; u < a.length; u += 1)
        a[u] && a[u].m(r, null);
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
    p(l, c) {
      if (c[0] & /*sources*/
      16 | c[1] & /*onError*/
      1) {
        s = rr(
          /*sources*/
          l[4]
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const f = gf(l, s, u);
          a[u] ? a[u].p(f, c) : (a[u] = bf(f), a[u].c(), a[u].m(r, null));
        }
        for (; u < a.length; u += 1)
          a[u].d(1);
        a.length = s.length;
      }
      c[0] & /*style*/
      16384 && e !== (e = dr(
        /*style*/
        l[14]
      )) && g(r, "style", e), c[0] & /*loop*/
      32 && (r.loop = /*loop*/
      l[5]), c[0] & /*autoplay*/
      64 && (r.autoplay = /*autoplay*/
      l[6]), c[0] & /*muted*/
      128 && (r.muted = /*muted*/
      l[7]), c[0] & /*poster*/
      512 && g(
        r,
        "poster",
        /*poster*/
        l[9]
      ), c[0] & /*preload*/
      256 && n !== (n = /*preload*/
      l[8] ? "metadata" : "auto") && g(r, "preload", n);
    },
    d(l) {
      l && G(r), on(a, l), t[52](null), o = !1, Jr(i);
    }
  };
}
function nk(t) {
  let r;
  return {
    c() {
      r = Te("div"), g(r, "class", wi.video__container);
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
      e && G(r), t[51](null);
    }
  };
}
function ok(t) {
  let r, e = `${/*aspectPaddingBottom*/
  t[11]}%`;
  function n(s, a) {
    return (
      /*shouldUseVideoProvider*/
      s[13] ? sk : ik
    );
  }
  let o = n(t), i = o(t);
  return {
    c() {
      r = Te("div"), i.c(), g(r, "class", wi["video__aspect-wrapper"]), F(r, "padding-bottom", e);
    },
    m(s, a) {
      q(s, r, a), i.m(r, null);
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
function mf(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Te("source"), Qn(r.src, e = /*source*/
      t[60].src) || g(r, "src", e), g(r, "type", n = /*source*/
      t[60].type);
    },
    m(s, a) {
      q(s, r, a), o || (i = Qe(
        r,
        "error",
        /*onError*/
        t[31]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*sources*/
      16 && !Qn(r.src, e = /*source*/
      s[60].src) && g(r, "src", e), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && g(r, "type", n);
    },
    d(s) {
      s && G(r), o = !1, i();
    }
  };
}
function bf(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = mf(t);
  return {
    c() {
      n.c(), e = Kt();
    },
    m(o, i) {
      n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Sr(r, r = /*source*/
      o[60]) ? (n.d(1), n = mf(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && G(e), n.d(o);
    }
  };
}
function ik(t) {
  let r, e, n, o, i, s = rr(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = wf(hf(t, s, l));
  return {
    c() {
      r = Te("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      g(r, "class", wi.video__video), g(r, "style", e = dr(
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
    m(l, c) {
      q(l, r, c);
      for (let u = 0; u < a.length; u += 1)
        a[u] && a[u].m(r, null);
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
    p(l, c) {
      if (c[0] & /*sources*/
      16 | c[1] & /*onError*/
      1) {
        s = rr(
          /*sources*/
          l[4]
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const f = hf(l, s, u);
          a[u] ? a[u].p(f, c) : (a[u] = wf(f), a[u].c(), a[u].m(r, null));
        }
        for (; u < a.length; u += 1)
          a[u].d(1);
        a.length = s.length;
      }
      c[0] & /*style*/
      16384 && e !== (e = dr(
        /*style*/
        l[14]
      )) && g(r, "style", e), c[0] & /*loop*/
      32 && (r.loop = /*loop*/
      l[5]), c[0] & /*autoplay*/
      64 && (r.autoplay = /*autoplay*/
      l[6]), c[0] & /*muted*/
      128 && (r.muted = /*muted*/
      l[7]), c[0] & /*poster*/
      512 && g(
        r,
        "poster",
        /*poster*/
        l[9]
      ), c[0] & /*preload*/
      256 && n !== (n = /*preload*/
      l[8] ? "metadata" : "auto") && g(r, "preload", n);
    },
    d(l) {
      l && G(r), on(a, l), t[50](null), o = !1, Jr(i);
    }
  };
}
function sk(t) {
  let r;
  return {
    c() {
      r = Te("div"), g(r, "class", wi.video__container);
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
      e && G(r), t[49](null);
    }
  };
}
function yf(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Te("source"), Qn(r.src, e = /*source*/
      t[60].src) || g(r, "src", e), g(r, "type", n = /*source*/
      t[60].type);
    },
    m(s, a) {
      q(s, r, a), o || (i = Qe(
        r,
        "error",
        /*onError*/
        t[31]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*sources*/
      16 && !Qn(r.src, e = /*source*/
      s[60].src) && g(r, "src", e), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && g(r, "type", n);
    },
    d(s) {
      s && G(r), o = !1, i();
    }
  };
}
function wf(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = yf(t);
  return {
    c() {
      n.c(), e = Kt();
    },
    m(o, i) {
      n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Sr(r, r = /*source*/
      o[60]) ? (n.d(1), n = yf(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && G(e), n.d(o);
    }
  };
}
function lk(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[11] !== "0" ? ok : (
        /*shouldUseVideoProvider*/
        i[13] ? nk : rk
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
      i && G(r), o.d(i);
    }
  };
}
function ak(t) {
  let r, e, n, o;
  const i = [tk, ek], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[2] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (ir(), x(s[u], 1, 1, () => {
        s[u] = null;
      }), sr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
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
function ck(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, z = j, H = () => (z(), z = S(a, (Ne) => e(39, k = Ne)), a), O, oe = j, fe = () => (oe(), oe = S(m, (Ne) => e(40, O = Ne)), m), T, Z = j, ce = () => (Z(), Z = S(h, (Ne) => e(41, T = Ne)), h), C, D = j, M = () => (D(), D = S(_, (Ne) => e(42, C = Ne)), _), W, Q = j, me = () => (Q(), Q = S(f, (Ne) => e(43, W = Ne)), f), Ae, Ce = j, he = () => (Ce(), Ce = S(u, (Ne) => e(44, Ae = Ne)), u), Ve, re = j, $e = () => (re(), re = S(c, (Ne) => e(45, Ve = Ne)), c), Ge, Je = j, ke = () => (Je(), Je = S(l, (Ne) => e(46, Ge = Ne)), l), De, ue = j, ae = () => (ue(), ue = S(s, (Ne) => e(47, De = Ne)), s), de, ee = j, ge = () => (ee(), ee = S(i, (Ne) => e(48, de = Ne)), i);
  t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Ce()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => Je()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => ee());
  let { componentContext: ie } = r, { layoutParams: Se = void 0 } = r;
  const He = Ir(Kr), We = He.videoPlayerProvider;
  let te, Oe = !1, Pe = !1, nt, st, et = [], wt = !1, rt = !1, Pt = !1, ct = !1, X, _e = "fit", lt = "0", Fe = !1, I, jt = "", _t, At = !!We;
  function Dt(Ne) {
    var lr, er;
    const bt = ie.getJsonWithVars({
      sources: Ne.video_sources,
      repeatable: Ne.repeatable,
      autostart: Ne.autostart,
      preloadRequired: Ne.preload_required,
      muted: Ne.muted,
      preview: Ne.preview,
      aspect: Ne.aspect,
      scale: Ne.scale,
      payload: Ne.player_settings_payload
    }), Ft = nn(bt.repeatable, !1), It = nn(bt.autostart, !1), hr = nn(bt.preloadRequired, !1), ze = nn(bt.muted, !1), kt = (lr = bt.aspect) != null && lr.ratio && zn(bt.aspect.ratio) ? bt.aspect.ratio : void 0;
    if ((er = bt.sources) != null && er.length)
      return {
        sources: bt.sources,
        repeatable: Ft,
        autostart: It,
        preloadRequired: hr,
        muted: ze,
        preview: bt.preview,
        aspect: kt,
        scale: bt.scale,
        payload: bt.payload
      };
  }
  function ot(Ne) {
    var bt;
    if (Pe) {
      Pe = !1;
      return;
    }
    _t ? (bt = _t.seek) == null || bt.call(_t, Number(Ne)) : nt && e(3, nt.currentTime = Number(Ne) / 1e3, nt);
  }
  function K() {
    _t ? _t.pause() : nt == null || nt.pause();
  }
  function Mt() {
    if (_t) {
      _t.play();
      return;
    }
    const Ne = nt == null ? void 0 : nt.play();
    Ne && Ne.catch((bt) => {
      ie.logError(Y(new Error("Video playing error"), {
        level: "error",
        additional: { originalText: String(bt) }
      }));
    });
  }
  function Vt() {
    nt && (Pe = !0, o.setValue(Math.floor(nt.currentTime * 1e3)));
  }
  function Jt() {
    ie.execAnyActions(ie.json.end_actions);
  }
  function qt() {
    ie.execAnyActions(ie.json.resume_actions);
  }
  function be() {
    ie.execAnyActions(ie.json.pause_actions);
  }
  function Ke() {
    ie.execAnyActions(ie.json.buffering_actions);
  }
  function pt() {
    ie.execAnyActions(ie.json.fatal_actions);
  }
  xn(() => {
    if (We && st) {
      const Ne = Dt(ie.json);
      if (Ne) {
        const bt = We.instance(st, Ne);
        bt ? e(36, _t = bt) : e(13, At = !1);
      }
    }
  }), sn(() => {
    te && (He.unregisterInstance(te), e(32, te = void 0)), I && (I(), e(35, I = void 0)), _t && (_t.destroy(), e(36, _t = void 0));
  });
  function we(Ne) {
    Fr[Ne ? "unshift" : "push"](() => {
      st = Ne, e(10, st);
    });
  }
  function xe(Ne) {
    Fr[Ne ? "unshift" : "push"](() => {
      nt = Ne, e(3, nt);
    });
  }
  function Be(Ne) {
    Fr[Ne ? "unshift" : "push"](() => {
      st = Ne, e(10, st);
    });
  }
  function nr(Ne) {
    Fr[Ne ? "unshift" : "push"](() => {
      nt = Ne, e(3, nt);
    });
  }
  return t.$$set = (Ne) => {
    "componentContext" in Ne && e(0, ie = Ne.componentContext), "layoutParams" in Ne && e(1, Se = Ne.layoutParams);
  }, t.$$.update = () => {
    var Ne;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && ie.json && (e(5, wt = !1), e(6, rt = !1), e(7, Pt = !1), e(8, ct = !1), e(9, X = void 0), e(33, _e = "fit"), e(34, Fe = !1), e(13, At = !!We)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*customVideoInstance, $jsonSource, $jsonRepeatable, $jsonAutostart, $jsonMuted, $jsonPreload, $jsonPreview, $jsonScale, $jsonAspect*/
    260384 && ie.json && _t && (de || De || k || Ge || Ve || Ae || W || C)) {
      const bt = Dt(ie.json);
      bt && ((Ne = _t.update) == null || Ne.call(_t, bt));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(38, n = ie.json.elapsed_time_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*elapsedVariableName*/
    128 && e(37, o = n && (ie.getVariable(n, "integer") || He.awaitGlobalVariable(n, "integer", 0)) || lo("temp", "integer", 0)), t.$$.dirty[1] & /*elapsedVariable, elapsedVariableUnsubscriber*/
    80 && o && (I && I(), e(35, I = o.subscribe(ot))), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(25, i = ie.getDerivedFromVars(ie.json.video_sources))), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(24, s = ie.getDerivedFromVars(ie.json.repeatable))), t.$$.dirty[0] & /*componentContext*/
    1 && H(e(23, a = ie.getDerivedFromVars(ie.json.autostart))), t.$$.dirty[0] & /*componentContext*/
    1 && ke(e(22, l = ie.getDerivedFromVars(ie.json.muted))), t.$$.dirty[0] & /*componentContext*/
    1 && $e(e(21, c = ie.getDerivedFromVars(ie.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(20, u = ie.getDerivedFromVars(ie.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(19, f = ie.getDerivedFromVars(ie.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(18, _ = ie.getDerivedFromVars(ie.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(17, h = ie.getDerivedFromVars(ie.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(16, m = ie.getDerivedFromVars(ie.json.height))), t.$$.dirty[0] & /*sources, componentContext*/
    17 | t.$$.dirty[1] & /*$jsonSource*/
    131072 && (e(4, et = xw(de, et)), et.length ? e(2, Oe = !1) : (e(2, Oe = !0), ie.logError(Y(new Error('Missing "video_sources" in "video"'))))), t.$$.dirty[0] & /*loop*/
    32 | t.$$.dirty[1] & /*$jsonRepeatable*/
    65536 && e(5, wt = nn(De, wt)), t.$$.dirty[0] & /*autoplay*/
    64 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && e(6, rt = nn(k, rt)), t.$$.dirty[0] & /*muted*/
    128 | t.$$.dirty[1] & /*$jsonMuted*/
    32768 && e(7, Pt = nn(Ge, Pt)), t.$$.dirty[0] & /*preload*/
    256 | t.$$.dirty[1] & /*$jsonPreload*/
    16384 && e(8, ct = nn(Ve, ct)), t.$$.dirty[0] & /*poster*/
    512 | t.$$.dirty[1] & /*$jsonPreview*/
    8192 && e(9, X = typeof Ae == "string" ? Jd(Ae) : X), t.$$.dirty[1] & /*$jsonScale, scale*/
    4100 && e(33, _e = $w(W) || _e), t.$$.dirty[1] & /*$jsonAspect, $jsonWidth, $jsonHeight*/
    3584) {
      const bt = C == null ? void 0 : C.ratio;
      bt && zn(bt) ? (e(11, lt = (100 / Number(bt)).toFixed(2)), e(34, Fe = !0)) : (e(11, lt = "0"), e(34, Fe = (!T || T.type === "match_parent") && (O == null ? void 0 : O.type) === "match_parent"));
    }
    t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*prevId*/
    2 && ie.json && (te && (He.unregisterInstance(te), e(32, te = void 0)), ie.id && !Oe && !ie.fakeElement && (e(32, te = ie.id), He.registerInstance(te, { pause: K, start: Mt }))), t.$$.dirty[0] & /*componentContext, videoElem*/
    9 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && ie.json && k && nt && Mt(), t.$$.dirty[1] & /*isAbsolute*/
    8 && e(15, p = { absolute: Fe }), t.$$.dirty[1] & /*scale*/
    4 && e(14, w = { "object-fit": _e });
  }, [
    ie,
    Se,
    Oe,
    nt,
    et,
    wt,
    rt,
    Pt,
    ct,
    X,
    st,
    lt,
    jt,
    At,
    w,
    p,
    m,
    h,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    Vt,
    Jt,
    qt,
    be,
    Ke,
    pt,
    te,
    _e,
    Fe,
    I,
    _t,
    o,
    n,
    k,
    O,
    T,
    C,
    W,
    Ae,
    Ve,
    Ge,
    De,
    de,
    we,
    xe,
    Be,
    nr
  ];
}
class uk extends Or {
  constructor(r) {
    super(), Lr(this, r, ck, ak, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const fk = "appkit-switch__tumbler", dk = "appkit-switch__tumbler_checked", _k = "appkit-switch_disabled", pk = "appkit-switch__thumb", gk = "appkit-switch_direction_rtl", hk = "appkit-switch__input", ci = {
  switch: "appkit-switch",
  switch__tumbler: fk,
  switch__tumbler_checked: dk,
  switch_disabled: _k,
  switch__thumb: pk,
  switch_direction_rtl: gk,
  switch__input: hk
};
function Ni(t) {
  return t === !0 || t === 1;
}
function mk(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function bk(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "switch",
        ci,
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
          yk,
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
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = ht(
        "switch",
        ci,
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
      zt(r, n);
    }
  };
}
function yk(t) {
  let r, e, n, o, i, s, a, l, c;
  return {
    c() {
      r = Te("div"), e = Te("div"), o = gr(), i = Te("input"), g(e, "class", ci.switch__thumb), g(r, "class", n = ht("switch__tumbler", ci, { checked: (
        /*value*/
        t[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = ht("switch__input", ci, {
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
    m(u, f) {
      q(u, r, f), yt(r, e), q(u, o, f), q(u, i, f), t[25](i), l || (c = [
        Qe(
          i,
          "input",
          /*onInput*/
          t[14]
        ),
        Qe(i, "focus", function() {
          Nr(
            /*focusHandler*/
            t[29]
          ) && t[29].apply(this, arguments);
        }),
        Qe(i, "blur", function() {
          Nr(
            /*blurHandler*/
            t[30]
          ) && t[30].apply(this, arguments);
        })
      ], l = !0);
    },
    p(u, f) {
      t = u, f[0] & /*value*/
      8 && n !== (n = ht("switch__tumbler", ci, { checked: (
        /*value*/
        t[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      1 && s !== (s = ht("switch__input", ci, {
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
    d(u) {
      u && (G(r), G(o), G(i)), t[25](null), l = !1, Jr(c);
    }
  };
}
function wk(t) {
  let r, e, n, o;
  const i = [bk, mk], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[4] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (ir(), x(s[u], 1, 1, () => {
        s[u] = null;
      }), sr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
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
function kk(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h = j, m = () => (h(), h = S(s, (ke) => e(21, _ = ke)), s), p, w = j, k = () => (w(), w = S(l, (ke) => e(22, p = ke)), l), z, H = j, O = () => (H(), H = S(a, (ke) => e(23, z = ke)), a), oe, fe = j, T = () => (fe(), fe = S(i, (ke) => e(24, oe = ke)), i);
  t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => H()), t.$$.on_destroy.push(() => fe());
  let { componentContext: Z } = r, { layoutParams: ce = void 0 } = r;
  const C = Ir(Kr), D = Ir(To), M = C.direction;
  yn(t, M, (ke) => e(20, f = ke));
  let W, Q, me = !1, Ae = !1, Ce = "", he = !0, Ve = "#129386", re = "#1293864c";
  function $e() {
    e(5, he = !0), e(16, Ve = "#129386"), e(17, re = "#1293864c");
  }
  function Ge(ke) {
    e(3, me = ke.target.checked), i.setValue(me);
  }
  sn(() => {
    W && (C.unregisterFocusable(W), e(15, W = void 0));
  });
  function Je(ke) {
    Fr[ke ? "unshift" : "push"](() => {
      Q = ke, e(2, Q);
    });
  }
  return t.$$set = (ke) => {
    "componentContext" in ke && e(0, Z = ke.componentContext), "layoutParams" in ke && e(1, ce = ke.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(19, n = Z.origJson), t.$$.dirty[0] & /*origJson*/
    524288 && n && $e(), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, o = Z.json.is_on_variable), t.$$.dirty[0] & /*variable, componentContext*/
    262145 && T(e(7, i = o && (Z.getVariable(o, "boolean") || C.awaitGlobalVariable(o, "boolean", !1)) || lo("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(12, s = Z.getDerivedFromVars(Z.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && O(e(11, a = Z.getDerivedFromVars(Z.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && k(e(10, l = Z.getDerivedFromVars(Z.json.on_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    2359313) {
      let ke = !1;
      o ? (D.hasAction() || (_ == null ? void 0 : _.mode) === "exclude") && (ke = !0, Z.logError(Y(new Error('Cannot show "switch" inside component with an action or inside accessibility mode=exclude')))) : (ke = !0, Z.logError(Y(new Error('Missing "is_on_variable" in "switch"')))), Ae !== ke && e(4, Ae = ke);
    }
    if (t.$$.dirty[0] & /*value, $valueVariable*/
    16777224 && Ni(me) !== Ni(oe) && e(3, me = Ni(oe)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    8388640 && e(5, he = nn(z, he)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    4259840 && (e(16, Ve = pr(p, 1, Ve)), typeof p == "string")) {
      const ke = _o(p);
      ke && (ke.a *= 0.3, e(17, re = aa(ke)));
    }
    t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    2097153 && (_ != null && _.description ? e(6, Ce = ei(_)) : Z.logError(Y(new Error('Missing accessibility "description" for switch'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled, $direction*/
    1048608 && e(9, c = {
      disabled: !he,
      direction: f
    }), t.$$.dirty[0] & /*onColor, onSubColor*/
    196608 && e(8, u = {
      "--divkit-switch-on-color": Ve,
      "--divkit-switch-on-sub-color": re
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    32773 && Q && Z.json && (W && (C.unregisterFocusable(W), e(15, W = void 0)), Z.id && !Z.fakeElement && (e(15, W = Z.id), C.registerFocusable(W, {
      focus() {
        Q && Q.focus();
      }
    })));
  }, [
    Z,
    ce,
    Q,
    me,
    Ae,
    he,
    Ce,
    i,
    u,
    c,
    l,
    a,
    s,
    M,
    Ge,
    W,
    Ve,
    re,
    o,
    n,
    f,
    _,
    p,
    z,
    oe,
    Je
  ];
}
class vk extends Or {
  constructor(r) {
    super(), Lr(this, r, kk, wk, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const jk = "appkit-checkbox", Ck = "appkit-checkbox__box", Ek = "appkit-checkbox__box_checked", Ak = "appkit-checkbox__checkmark", Sk = "appkit-checkbox_disabled", Vk = "appkit-checkbox__input", ui = {
  checkbox: jk,
  checkbox__box: Ck,
  checkbox__box_checked: Ek,
  checkbox__checkmark: Ak,
  checkbox_disabled: Sk,
  checkbox__input: Vk
};
function Fk(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Ik(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "checkbox",
        ui,
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
          Dk,
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
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = ht(
        "checkbox",
        ui,
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
      zt(r, n);
    }
  };
}
function Dk(t) {
  let r, e, n, o, i, s, a, l, c;
  return {
    c() {
      r = Te("div"), e = Te("div"), o = gr(), i = Te("input"), g(e, "class", ui.checkbox__checkmark), g(r, "class", n = ht("checkbox__box", ui, { checked: (
        /*value*/
        t[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = ht("checkbox__input", ui, {
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
    m(u, f) {
      q(u, r, f), yt(r, e), q(u, o, f), q(u, i, f), t[28](i), l || (c = [
        Qe(
          i,
          "input",
          /*onInput*/
          t[15]
        ),
        Qe(i, "focus", function() {
          Nr(
            /*focusHandler*/
            t[32]
          ) && t[32].apply(this, arguments);
        }),
        Qe(i, "blur", function() {
          Nr(
            /*blurHandler*/
            t[33]
          ) && t[33].apply(this, arguments);
        })
      ], l = !0);
    },
    p(u, f) {
      t = u, f[0] & /*value*/
      8 && n !== (n = ht("checkbox__box", ui, { checked: (
        /*value*/
        t[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      8 && s !== (s = ht("checkbox__input", ui, {
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
    d(u) {
      u && (G(r), G(o), G(i)), t[28](null), l = !1, Jr(c);
    }
  };
}
function Tk(t) {
  let r, e, n, o;
  const i = [Ik, Fk], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[4] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (ir(), x(s[u], 1, 1, () => {
        s[u] = null;
      }), sr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
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
function Mk(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m = j, p = () => (m(), m = S(s, (ie) => e(22, h = ie)), s), w, k = j, z = () => (k(), k = S(u, (ie) => e(23, w = ie)), u), H, O = j, oe = () => (O(), O = S(c, (ie) => e(24, H = ie)), c), fe, T = j, Z = () => (T(), T = S(l, (ie) => e(25, fe = ie)), l), ce, C = j, D = () => (C(), C = S(a, (ie) => e(26, ce = ie)), a), M, W = j, Q = () => (W(), W = S(i, (ie) => e(27, M = ie)), i);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => k()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => C()), t.$$.on_destroy.push(() => W());
  let { componentContext: me } = r, { layoutParams: Ae = void 0 } = r;
  const Ce = Ir(Kr), he = Ir(To);
  let Ve, re, $e = !1, Ge = !1, Je = "", ke = !0, De = "#129386", ue = "rgba(0, 0, 0, .3)", ae = "#fff";
  function de() {
    e(5, ke = !0), e(17, De = "#129386"), e(18, ue = "rgba(0, 0, 0, .3)"), e(19, ae = "#fff");
  }
  function ee(ie) {
    e(3, $e = ie.target.checked), i.setValue($e);
  }
  sn(() => {
    Ve && (Ce.unregisterFocusable(Ve), e(16, Ve = void 0));
  });
  function ge(ie) {
    Fr[ie ? "unshift" : "push"](() => {
      re = ie, e(2, re);
    });
  }
  return t.$$set = (ie) => {
    "componentContext" in ie && e(0, me = ie.componentContext), "layoutParams" in ie && e(1, Ae = ie.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(21, n = me.origJson), t.$$.dirty[0] & /*origJson*/
    2097152 && n && de(), t.$$.dirty[0] & /*componentContext*/
    1 && e(20, o = me.json.is_checked_variable), t.$$.dirty[0] & /*variable, componentContext*/
    1048577 && Q(e(7, i = o && (me.getVariable(o, "boolean") || Ce.awaitGlobalVariable(o, "boolean", !1)) || lo("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && p(e(14, s = me.getDerivedFromVars(me.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && D(e(13, a = me.getDerivedFromVars(me.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Z(e(12, l = me.getDerivedFromVars(me.json.on_color))), t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(11, c = me.getDerivedFromVars(me.json.off_color))), t.$$.dirty[0] & /*componentContext*/
    1 && z(e(10, u = me.getDerivedFromVars(me.json.check_mark_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    5242897) {
      let ie = !1;
      o ? (he.hasAction() || (h == null ? void 0 : h.mode) === "exclude") && (ie = !0, me.logError(Y(new Error('Cannot show "checkbox" inside component with an action or inside accessibility mode=exclude')))) : (ie = !0, me.logError(Y(new Error('Missing "is_checked_variable" in "checkbox"')))), Ge !== ie && e(4, Ge = ie);
    }
    t.$$.dirty[0] & /*value, $valueVariable*/
    134217736 && Ni($e) !== Ni(M) && e(3, $e = Ni(M)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    67108896 && e(5, ke = nn(ce, ke)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    33685504 && e(17, De = pr(fe, 1, De)), t.$$.dirty[0] & /*$jsonOffColor, offColor*/
    17039360 && e(18, ue = pr(H, 1, ue)), t.$$.dirty[0] & /*$jsonCheckMarkColor, checkMarkColor*/
    8912896 && e(19, ae = pr(w, 1, ae)), t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    4194305 && (h != null && h.description ? e(6, Je = ei(h)) : me.logError(Y(new Error('Missing accessibility "description" for checkbox'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    32 && e(9, f = { disabled: !ke }), t.$$.dirty[0] & /*onColor, offColor, checkMarkColor*/
    917504 && e(8, _ = {
      "--divkit-checkbox-on-color": De,
      "--divkit-checkbox-off-color": ue,
      "--divkit-checkbox-check-mark-color": ae
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    65541 && re && me.json && (Ve && (Ce.unregisterFocusable(Ve), e(16, Ve = void 0)), me.id && !me.fakeElement && (e(16, Ve = me.id), Ce.registerFocusable(Ve, {
      focus() {
        re && re.focus();
      }
    })));
  }, [
    me,
    Ae,
    re,
    $e,
    Ge,
    ke,
    Je,
    i,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    ee,
    Ve,
    De,
    ue,
    ae,
    o,
    n,
    h,
    w,
    H,
    fe,
    ce,
    M,
    ge
  ];
}
class Pk extends Or {
  constructor(r) {
    super(), Lr(this, r, Mk, Tk, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Nk = "appkit-radio", zk = "appkit-radio__group", Lk = "appkit-radio__group_vertical", Ok = "appkit-radio__group_horizontal", Bk = "appkit-radio__item", Rk = "appkit-radio_disabled", Hk = "appkit-radio__circle", Wk = "appkit-radio__circle_selected", Uk = "appkit-radio__dot", Gk = "appkit-radio__label", Jk = "appkit-radio__input", ko = {
  radio: Nk,
  radio__group: zk,
  radio__group_vertical: Lk,
  radio__group_horizontal: Ok,
  radio__item: Bk,
  radio_disabled: Rk,
  radio__circle: Hk,
  radio__circle_selected: Wk,
  radio__dot: Uk,
  radio__label: Gk,
  radio__input: Jk
};
function kf(t, r, e) {
  const n = t.slice();
  return n[55] = r[e], n;
}
function qk(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Kk(t) {
  let r, e;
  return r = new hn({
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
          Zk,
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Yk(t) {
  let r, e = (
    /*item*/
    t[55].value + ""
  ), n;
  return {
    c() {
      r = Te("span"), n = Jn(e), g(r, "class", ko.radio__label);
    },
    m(o, i) {
      q(o, r, i), yt(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      o[55].value + "") && ro(n, e);
    },
    d(o) {
      o && G(r);
    }
  };
}
function Xk(t) {
  let r, e = (
    /*item*/
    t[55].text + ""
  ), n;
  return {
    c() {
      r = Te("span"), n = Jn(e), g(r, "class", ko.radio__label);
    },
    m(o, i) {
      q(o, r, i), yt(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      o[55].text + "") && ro(n, e);
    },
    d(o) {
      o && G(r);
    }
  };
}
function vf(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, h;
  function m(z, H) {
    return (
      /*item*/
      z[55].text ? Xk : Yk
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
      r = Te("label"), e = Te("div"), n = Te("div"), i = gr(), w.c(), s = gr(), a = Te("input"), f = gr(), g(n, "class", ko.radio__dot), g(e, "class", o = ht("radio__circle", ko, {
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
      t[55].value, a.checked = c = /*$valueVariable*/
      t[23] === /*item*/
      t[55].value, a.disabled = u = !/*isEnabled*/
      t[4], g(r, "class", ko.radio__item);
    },
    m(z, H) {
      q(z, r, H), yt(r, e), yt(e, n), yt(r, i), w.m(r, null), yt(r, s), yt(r, a), yt(r, f), _ || (h = [
        Qe(a, "change", k),
        Qe(a, "focus", function() {
          Nr(
            /*focusHandler*/
            t[52]
          ) && t[52].apply(this, arguments);
        }),
        Qe(a, "blur", function() {
          Nr(
            /*blurHandler*/
            t[53]
          ) && t[53].apply(this, arguments);
        })
      ], _ = !0);
    },
    p(z, H) {
      t = z, H[0] & /*$valueVariable, filteredItems*/
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
      8388640 && c !== (c = /*$valueVariable*/
      t[23] === /*item*/
      t[55].value) && (a.checked = c), H[0] & /*isEnabled*/
      16 && u !== (u = !/*isEnabled*/
      t[4]) && (a.disabled = u);
    },
    d(z) {
      z && G(r), w.d(), _ = !1, Jr(h);
    }
  };
}
function Zk(t) {
  let r, e, n = rr(
    /*filteredItems*/
    t[5]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = vf(kf(t, n, i));
  return {
    c() {
      r = Te("div");
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
      q(i, r, s);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(r, null);
      t[48](r);
    },
    p(i, s) {
      if (s[0] & /*groupName, filteredItems, $valueVariable, isEnabled, onChange*/
      25169968 | s[1] & /*focusHandler, blurHandler*/
      6291456) {
        n = rr(
          /*filteredItems*/
          i[5]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = kf(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = vf(l), o[a].c(), o[a].m(r, null));
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
function Qk(t) {
  let r, e, n, o;
  const i = [Kk, qk], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (ir(), x(s[u], 1, 1, () => {
        s[u] = null;
      }), sr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
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
function xk(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, z, H, O, oe, fe, T, Z = j, ce = () => (Z(), Z = S(l, (Ke) => e(37, T = Ke)), l), C, D = j, M = () => (D(), D = S(k, (Ke) => e(38, C = Ke)), k), W, Q = j, me = () => (Q(), Q = S(w, (Ke) => e(39, W = Ke)), w), Ae, Ce = j, he = () => (Ce(), Ce = S(p, (Ke) => e(40, Ae = Ke)), p), Ve, re = j, $e = () => (re(), re = S(m, (Ke) => e(41, Ve = Ke)), m), Ge, Je = j, ke = () => (Je(), Je = S(h, (Ke) => e(42, Ge = Ke)), h), De, ue = j, ae = () => (ue(), ue = S(_, (Ke) => e(43, De = Ke)), _), de, ee = j, ge = () => (ee(), ee = S(f, (Ke) => e(44, de = Ke)), f), ie, Se = j, He = () => (Se(), Se = S(u, (Ke) => e(45, ie = Ke)), u), We, te = j, Oe = () => (te(), te = S(c, (Ke) => e(46, We = Ke)), c), Pe, nt = j, st = () => (nt(), nt = S(a, (Ke) => e(23, Pe = Ke)), a);
  t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Ce()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => Je()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Se()), t.$$.on_destroy.push(() => te()), t.$$.on_destroy.push(() => nt());
  let { componentContext: et } = r, { layoutParams: wt = void 0 } = r;
  const rt = Ir(Kr), Pt = Ir(To);
  let ct, X, _e = !1, lt = "", Fe = !0, I = "#129386", jt = "rgba(0, 0, 0, 0.3)", _t = "", At, Dt, ot = "", K = "vertical", Mt = 8;
  function Vt() {
    e(4, Fe = !0), e(26, I = "#129386"), e(27, jt = "rgba(0, 0, 0, 0.3)"), e(28, _t = ""), e(29, At = void 0), e(30, Dt = void 0), e(31, ot = ""), e(32, K = "vertical"), e(33, Mt = 8);
  }
  function Jt(Ke) {
    a.setValue(Ke);
  }
  sn(() => {
    ct && (rt.unregisterFocusable(ct), e(25, ct = void 0));
  });
  const qt = (Ke) => Jt(Ke.value);
  function be(Ke) {
    Fr[Ke ? "unshift" : "push"](() => {
      X = Ke, e(2, X);
    });
  }
  return t.$$set = (Ke) => {
    "componentContext" in Ke && e(0, et = Ke.componentContext), "layoutParams" in Ke && e(1, wt = Ke.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(36, n = et.origJson), t.$$.dirty[1] & /*origJson*/
    32 && n && Vt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(34, o = et.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(35, i = et.json.options), t.$$.dirty[1] & /*items*/
    16 && e(5, s = Array.isArray(i) && i.filter((Ke) => typeof Ke.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8 && st(e(7, a = o && (et.getVariable(o, "string") || rt.awaitGlobalVariable(o, "string", "")) || lo("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(22, l = et.getDerivedFromVars(et.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(21, c = et.getDerivedFromVars(et.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && He(e(20, u = et.getDerivedFromVars(et.json.selected_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(19, f = et.getDerivedFromVars(et.json.default_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(18, _ = et.getDerivedFromVars(et.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ke(e(17, h = et.getDerivedFromVars(et.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && $e(e(16, m = et.getDerivedFromVars(et.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(15, p = et.getDerivedFromVars(et.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(14, w = et.getDerivedFromVars(et.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(13, k = et.getDerivedFromVars(et.json.item_spacing))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || et.logError(Y(new Error('Empty "options" in "radio"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    72) {
      let Ke = !1;
      o ? (Pt.hasAction() || (T == null ? void 0 : T.mode) === "exclude") && (Ke = !0, et.logError(Y(new Error('Cannot show "radio" inside component with an action or inside accessibility mode=exclude')))) : (Ke = !0, et.logError(Y(new Error('Missing "value_variable" in "radio"')))), _e !== Ke && e(3, _e = Ke);
    }
    t.$$.dirty[0] & /*isEnabled*/
    16 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    32768 && e(4, Fe = nn(We, Fe)), t.$$.dirty[0] & /*selectedColor*/
    67108864 | t.$$.dirty[1] & /*$jsonSelectedColor*/
    16384 && e(26, I = pr(ie, 1, I)), t.$$.dirty[0] & /*defaultColor*/
    134217728 | t.$$.dirty[1] & /*$jsonDefaultColor*/
    8192 && e(27, jt = pr(de, 1, jt)), t.$$.dirty[0] & /*textColor*/
    268435456 | t.$$.dirty[1] & /*$jsonTextColor*/
    4096 && e(28, _t = pr(De, 1, _t)), t.$$.dirty[0] & /*fontSize*/
    536870912 | t.$$.dirty[1] & /*$jsonFontSize*/
    2048 && e(29, At = typeof Ge == "number" && Ge > 0 ? Ge : At), t.$$.dirty[0] & /*fontWeight*/
    1073741824 | t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontFamily*/
    1536 && (e(30, Dt = mi(Ve, void 0, Dt)), Ae && typeof Ae == "string" ? e(31, ot = rt.typefaceProvider(Ae, { fontWeight: Dt || 400 })) : e(31, ot = "")), t.$$.dirty[1] & /*$jsonOrientation, orientation*/
    258 && e(32, K = W === "horizontal" || W === "vertical" ? W : K), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    132 && e(33, Mt = typeof C == "number" && C >= 0 ? C : Mt), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    64 && (T != null && T.description ? e(6, lt = ei(T)) : et.logError(Y(new Error('Missing accessibility "description" for radio'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext*/
    1 && e(12, z = et.id || `radio_${Math.random().toString(36).slice(2)}`), t.$$.dirty[0] & /*isEnabled*/
    16 && e(11, H = { disabled: !Fe }), t.$$.dirty[1] & /*orientation*/
    2 && e(10, O = { [K]: !0 }), t.$$.dirty[0] & /*selectedColor, defaultColor, textColor, fontSize, fontWeight*/
    2080374784 | t.$$.dirty[1] & /*fontFamily*/
    1 && e(9, oe = {
      "--divkit-radio-selected-color": I,
      "--divkit-radio-default-color": jt,
      ..._t ? { "--divkit-radio-text-color": _t } : {},
      ...At ? { "font-size": pe(At) } : {},
      ...Dt ? { "font-weight": Dt } : {},
      ...ot ? { "font-family": ot } : {}
    }), t.$$.dirty[1] & /*itemSpacing*/
    4 && e(8, fe = `gap: ${pe(Mt)}`), t.$$.dirty[0] & /*container, componentContext, prevId*/
    33554437 && X && et.json && (ct && (rt.unregisterFocusable(ct), e(25, ct = void 0)), et.id && !et.fakeElement && (e(25, ct = et.id), rt.registerFocusable(ct, {
      focus() {
        if (X) {
          const Ke = X.querySelector("input");
          Ke && Ke.focus();
        }
      }
    })));
  }, [
    et,
    wt,
    X,
    _e,
    Fe,
    s,
    lt,
    a,
    fe,
    oe,
    O,
    H,
    z,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    u,
    c,
    l,
    Pe,
    Jt,
    ct,
    I,
    jt,
    _t,
    At,
    Dt,
    ot,
    K,
    Mt,
    o,
    i,
    n,
    T,
    C,
    W,
    Ae,
    Ve,
    Ge,
    De,
    de,
    ie,
    We,
    qt,
    be
  ];
}
class $k extends Or {
  constructor(r) {
    super(), Lr(this, r, xk, Qk, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const ev = "appkit-progress", tv = "appkit-progress__linear", rv = "appkit-progress__circular", xo = {
  progress: ev,
  progress__linear: tv,
  "progress__linear-fill": "appkit-progress__linear-fill",
  "progress__linear-fill_indeterminate": "appkit-progress__linear-fill_indeterminate",
  "progress-linear-indeterminate": "appkit-progress-linear-indeterminate",
  progress__circular: rv,
  "progress__circular-track": "appkit-progress__circular-track",
  "progress__circular-fill": "appkit-progress__circular-fill",
  "progress__circular-fill_indeterminate": "appkit-progress__circular-fill_indeterminate",
  "progress-circular-indeterminate": "appkit-progress-circular-indeterminate"
};
function nv(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function ov(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht("progress", xo, {}),
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
      $$slots: { default: [lv] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function iv(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = $r("svg"), e = $r("circle"), n = $r("circle"), g(e, "class", xo["progress__circular-track"]), g(e, "cx", Zo / 2), g(e, "cy", Zo / 2), g(e, "r", ra), g(
        e,
        "stroke-width",
        /*trackThickness*/
        t[5]
      ), g(n, "class", o = ht("progress__circular-fill", xo, {
        indeterminate: (
          /*isIndeterminate*/
          t[4]
        )
      })), g(n, "cx", Zo / 2), g(n, "cy", Zo / 2), g(n, "r", ra), g(
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
      )), g(n, "stroke-linecap", "round"), g(r, "class", xo.progress__circular), g(r, "width", Zo), g(r, "height", Zo), g(r, "viewBox", "0 0 " + Zo + " " + Zo), g(r, "role", "progressbar"), g(
        r,
        "aria-valuenow",
        /*ariaValue*/
        t[6]
      ), g(r, "aria-valuemin", 0), g(r, "aria-valuemax", 100);
    },
    m(s, a) {
      q(s, r, a), yt(r, e), yt(r, n);
    },
    p(s, a) {
      a & /*trackThickness*/
      32 && g(
        e,
        "stroke-width",
        /*trackThickness*/
        s[5]
      ), a & /*isIndeterminate*/
      16 && o !== (o = ht("progress__circular-fill", xo, {
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
function sv(t) {
  let r, e, n;
  return {
    c() {
      r = Te("div"), e = Te("div"), g(e, "class", n = ht("progress__linear-fill", xo, {
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
      ), g(r, "class", xo.progress__linear), F(r, "height", pe(
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
      q(o, r, i), yt(r, e);
    },
    p(o, i) {
      i & /*isIndeterminate*/
      16 && n !== (n = ht("progress__linear-fill", xo, {
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
function lv(t) {
  let r;
  function e(i, s) {
    return (
      /*progressStyle*/
      i[3] === "linear" ? sv : iv
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
      i && G(r), o.d(i);
    }
  };
}
function av(t) {
  let r, e, n, o;
  const i = [ov, nv], s = [];
  function a(l, c) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, [c]) {
      e && e.p(l, c);
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
const Zo = 48, ra = 20;
function cv(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m = j, p = () => (m(), m = S(c, (De) => e(19, h = De)), c), w, k = j, z = () => (k(), k = S(l, (De) => e(20, w = De)), l), H, O = j, oe = () => (O(), O = S(a, (De) => e(21, H = De)), a), fe, T = j, Z = () => (T(), T = S(s, (De) => e(22, fe = De)), s), ce, C = j, D = () => (C(), C = S(i, (De) => e(23, ce = De)), i), M, W = j, Q = () => (W(), W = S(o, (De) => e(24, M = De)), o);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => k()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => C()), t.$$.on_destroy.push(() => W());
  let { componentContext: me } = r, { layoutParams: Ae = void 0 } = r;
  Ir(Kr);
  let Ce = 0, he = "linear", Ve = !1, re = "#129386", $e = "rgba(0, 0, 0, .1)", Ge = 4;
  function Je() {
    e(2, Ce = 0), e(3, he = "linear"), e(4, Ve = !1), e(16, re = "#129386"), e(17, $e = "rgba(0, 0, 0, .1)"), e(5, Ge = 4);
  }
  const ke = 2 * Math.PI * ra;
  return t.$$set = (De) => {
    "componentContext" in De && e(0, me = De.componentContext), "layoutParams" in De && e(1, Ae = De.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(18, n = me.origJson), t.$$.dirty & /*origJson*/
    262144 && n && Je(), t.$$.dirty & /*componentContext*/
    1 && Q(e(14, o = me.getDerivedFromVars(me.json.value))), t.$$.dirty & /*componentContext*/
    1 && D(e(13, i = me.getDerivedFromVars(me.json.style))), t.$$.dirty & /*componentContext*/
    1 && Z(e(12, s = me.getDerivedFromVars(me.json.is_indeterminate))), t.$$.dirty & /*componentContext*/
    1 && oe(e(11, a = me.getDerivedFromVars(me.json.active_color))), t.$$.dirty & /*componentContext*/
    1 && z(e(10, l = me.getDerivedFromVars(me.json.inactive_color))), t.$$.dirty & /*componentContext*/
    1 && p(e(9, c = me.getDerivedFromVars(me.json.track_thickness))), t.$$.dirty & /*$jsonValue, progressValue*/
    16777220 && e(2, Ce = typeof M == "number" ? Math.max(0, Math.min(1, M)) : Ce), t.$$.dirty & /*$jsonStyle, progressStyle*/
    8388616 && e(3, he = ce === "linear" || ce === "circular" ? ce : he), t.$$.dirty & /*$jsonIsIndeterminate, isIndeterminate*/
    4194320 && e(4, Ve = nn(fe, Ve)), t.$$.dirty & /*$jsonActiveColor, activeColor*/
    2162688 && e(16, re = pr(H, 1, re)), t.$$.dirty & /*$jsonInactiveColor, inactiveColor*/
    1179648 && e(17, $e = pr(w, 1, $e)), t.$$.dirty & /*$jsonTrackThickness, trackThickness*/
    524320 && e(5, Ge = typeof h == "number" && h >= 0 ? h : Ge), t.$$.dirty & /*progressValue*/
    4 && e(8, u = ke * (1 - Ce)), t.$$.dirty & /*activeColor, inactiveColor*/
    196608 && e(7, f = {
      "--divkit-progress-active-color": re,
      "--divkit-progress-inactive-color": $e
    }), t.$$.dirty & /*isIndeterminate, progressValue*/
    20 && e(6, _ = Ve ? void 0 : Math.round(Ce * 100));
  }, [
    me,
    Ae,
    Ce,
    he,
    Ve,
    Ge,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    ke,
    re,
    $e,
    n,
    h,
    w,
    H,
    fe,
    ce,
    M
  ];
}
class uv extends Or {
  constructor(r) {
    super(), Lr(this, r, cv, av, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const fv = "appkit-table", dv = "appkit-table_halign_start", _v = "appkit-table_halign_center", pv = "appkit-table_halign_end", gv = "appkit-table_valign_start", hv = "appkit-table_valign_center", mv = "appkit-table_valign_end", bv = "appkit-table__cell", yv = "appkit-table__cell_halign_left", wv = "appkit-table__cell_halign_start", kv = "appkit-table__cell_halign_center", vv = "appkit-table__cell_halign_right", jv = "appkit-table__cell_halign_end", Cv = "appkit-table__cell_valign_top", Ev = "appkit-table__cell_valign_center", Av = "appkit-table__cell_valign_bottom", Sv = "appkit-table__cell_valign_baseline", Vv = "appkit-table__separator", Fv = "appkit-table__separator_row", Iv = "appkit-table__separator_col", Uo = {
  table: fv,
  table_halign_start: dv,
  table_halign_center: _v,
  table_halign_end: pv,
  table_valign_start: gv,
  table_valign_center: hv,
  table_valign_end: mv,
  table__cell: bv,
  table__cell_halign_left: yv,
  table__cell_halign_start: wv,
  table__cell_halign_center: kv,
  table__cell_halign_right: vv,
  table__cell_halign_end: jv,
  table__cell_valign_top: Cv,
  table__cell_valign_center: Ev,
  table__cell_valign_bottom: Av,
  table__cell_valign_baseline: Sv,
  table__separator: Vv,
  table__separator_row: Fv,
  table__separator_col: Iv
};
function jf(t, r, e) {
  const n = t.slice();
  return n[35] = r[e], n;
}
function Cf(t, r, e) {
  const n = t.slice();
  return n[38] = r[e], n;
}
function Dv(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Tv(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "table",
        Uo,
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
      $$slots: { default: [Mv] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = ht(
        "table",
        Uo,
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
      zt(r, n);
    }
  };
}
function Ef(t) {
  var a, l, c, u, f, _, h, m;
  let r, e, n, o = `${/*placement*/
  ((l = (a = t[38].layoutParams.gridArea) == null ? void 0 : a.x) != null ? l : 0) + 1} / span ${/*placement*/
  (u = (c = t[38].layoutParams.gridArea) == null ? void 0 : c.colSpan) != null ? u : 1}`, i = `${/*placement*/
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
      r = Te("div"), Lt(e.$$.fragment), g(r, "class", n = ht("table__cell", Uo, {
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
      q(p, r, w), Nt(e, r, null), s = !0;
    },
    p(p, w) {
      var z, H, O, oe, fe, T, Z, ce;
      const k = {};
      w[0] & /*cellPlacements*/
      16 && (k.componentContext = /*placement*/
      p[38].componentContext), w[0] & /*cellPlacements*/
      16 && (k.layoutParams = /*placement*/
      p[38].layoutParams), e.$set(k), (!s || w[0] & /*cellPlacements*/
      16 && n !== (n = ht("table__cell", Uo, {
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
      ((H = (z = p[38].layoutParams.gridArea) == null ? void 0 : z.x) != null ? H : 0) + 1} / span ${/*placement*/
      (oe = (O = p[38].layoutParams.gridArea) == null ? void 0 : O.colSpan) != null ? oe : 1}`) && F(r, "grid-column", o), w[0] & /*cellPlacements*/
      16 && i !== (i = `${/*placement*/
      ((T = (fe = p[38].layoutParams.gridArea) == null ? void 0 : fe.y) != null ? T : 0) + 1} / span ${/*placement*/
      (ce = (Z = p[38].layoutParams.gridArea) == null ? void 0 : Z.rowSpan) != null ? ce : 1}`) && F(r, "grid-row", i), w[0] & /*cellPlacements*/
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
      p && G(r), zt(e);
    }
  };
}
function Af(t) {
  let r, e, n, o;
  return {
    c() {
      r = Te("div"), e = Te("div"), o = gr(), g(e, "class", n = /*sep*/
      t[35].width ? Uo.table__separator_col : Uo.table__separator_row), F(
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
      ), g(r, "class", Uo.table__separator), F(
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
      q(i, r, s), yt(r, e), yt(r, o);
    },
    p(i, s) {
      s[0] & /*separatorElements*/
      32 && n !== (n = /*sep*/
      i[35].width ? Uo.table__separator_col : Uo.table__separator_row) && g(e, "class", n), s[0] & /*separatorElements*/
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
function Mv(t) {
  let r, e, n, o = rr(
    /*cellPlacements*/
    t[4]
  ), i = [];
  for (let c = 0; c < o.length; c += 1)
    i[c] = Ef(Cf(t, o, c));
  const s = (c) => x(i[c], 1, 1, () => {
    i[c] = null;
  });
  let a = rr(
    /*separatorElements*/
    t[5]
  ), l = [];
  for (let c = 0; c < a.length; c += 1)
    l[c] = Af(jf(t, a, c));
  return {
    c() {
      for (let c = 0; c < i.length; c += 1)
        i[c].c();
      r = gr();
      for (let c = 0; c < l.length; c += 1)
        l[c].c();
      e = Kt();
    },
    m(c, u) {
      for (let f = 0; f < i.length; f += 1)
        i[f] && i[f].m(c, u);
      q(c, r, u);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(c, u);
      q(c, e, u), n = !0;
    },
    p(c, u) {
      if (u[0] & /*cellPlacements*/
      16) {
        o = rr(
          /*cellPlacements*/
          c[4]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const _ = Cf(c, o, f);
          i[f] ? (i[f].p(_, u), L(i[f], 1)) : (i[f] = Ef(_), i[f].c(), L(i[f], 1), i[f].m(r.parentNode, r));
        }
        for (ir(), f = o.length; f < i.length; f += 1)
          s(f);
        sr();
      }
      if (u[0] & /*separatorElements*/
      32) {
        a = rr(
          /*separatorElements*/
          c[5]
        );
        let f;
        for (f = 0; f < a.length; f += 1) {
          const _ = jf(c, a, f);
          l[f] ? l[f].p(_, u) : (l[f] = Af(_), l[f].c(), l[f].m(e.parentNode, e));
        }
        for (; f < l.length; f += 1)
          l[f].d(1);
        l.length = a.length;
      }
    },
    i(c) {
      if (!n) {
        for (let u = 0; u < o.length; u += 1)
          L(i[u]);
        n = !0;
      }
    },
    o(c) {
      i = i.filter(Boolean);
      for (let u = 0; u < i.length; u += 1)
        x(i[u]);
      n = !1;
    },
    d(c) {
      c && (G(r), G(e)), on(i, c), on(l, c);
    }
  };
}
function Pv(t) {
  let r, e, n, o;
  const i = [Tv, Dv], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (ir(), x(s[u], 1, 1, () => {
        s[u] = null;
      }), sr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
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
function Nv(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p = j, w = () => (p(), p = S(s, (ge) => e(22, m = ge)), s), k, z = j, H = () => (z(), z = S(i, (ge) => e(23, k = ge)), i), O, oe = j, fe = () => (oe(), oe = S(a, (ge) => e(24, O = ge)), a), T, Z = j, ce = () => (Z(), Z = S(l, (ge) => e(25, T = ge)), l);
  t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Z());
  let { componentContext: C } = r, { layoutParams: D = void 0 } = r;
  const M = Ir(Kr), W = M.direction;
  yn(t, W, (ge) => e(21, h = ge));
  let Q = !1, me = "start", Ae = "start", Ce = [], he, Ve = [], re = [], $e = "";
  function Ge() {
    e(3, Q = !1), e(13, me = "start"), e(14, Ae = "start");
  }
  function Je(ge) {
    var te, Oe;
    if (!ge || !ge.style) return null;
    let ie = "#E0E0E0", Se = 1;
    const He = ge.style;
    if (He.type === "shape_drawable" && He.shape) {
      const Pe = He.shape;
      ie = pr(Pe.background_color || He.color || "#E0E0E0"), Pe.type === "rounded_rectangle" && (Se = Number(((te = Pe.item_height) == null ? void 0 : te.value) || ((Oe = Pe.item_width) == null ? void 0 : Oe.value) || 1));
    } else He.color && (ie = pr(He.color));
    const We = ge.margins || {};
    return {
      color: ie,
      thickness: Se,
      show_at_start: ge.show_at_start === 1 || ge.show_at_start === !0,
      show_between: ge.show_between !== 0 && ge.show_between !== !1,
      show_at_end: ge.show_at_end === 1 || ge.show_at_end === !0,
      marginTop: Number(We.top) || 0,
      marginBottom: Number(We.bottom) || 0,
      marginLeft: Number(We.left) || 0,
      marginRight: Number(We.right) || 0
    };
  }
  function ke(ge, ie) {
    const Se = ge.header_row;
    let He = [];
    return ge.row_builder && Array.isArray(ie) ? He = yl(ie, M, C, ge.row_builder).map((te) => te.div) : Array.isArray(ge.rows) && (He = ge.rows), { rows: He, headerRow: Se };
  }
  let De = [];
  function ue(ge, ie) {
    De = [];
    for (let Se = 0; Se < ge; Se++)
      De[Se] = new Array(ie).fill(!1);
  }
  function ae(ge, ie, Se, He) {
    var We;
    for (let te = ge; te < ge + Se && te < De.length; te++)
      for (let Oe = ie; Oe < ie + He && Oe < (((We = De[0]) == null ? void 0 : We.length) || 0); Oe++)
        De[te][Oe] = !0;
  }
  function de(ge, ie) {
    var He;
    if (ge >= De.length) return ie;
    let Se = ie;
    for (; Se < (((He = De[0]) == null ? void 0 : He.length) || 0) && De[ge][Se]; )
      Se++;
    return Se;
  }
  function ee(ge, ie, Se, He, We, te, Oe, Pe, nt, st) {
    const et = Array.isArray(ge.cells) ? ge.cells : [];
    let wt = 0;
    for (let rt = 0; rt < et.length; rt++) {
      const Pt = et[rt];
      if (!Pt || !Pt.div) continue;
      const ct = Math.max(1, Number(Pt.column_span) || 1), X = Math.max(1, Number(Pt.row_span) || 1);
      wt = de(ie, wt), ae(ie, wt, X, ct);
      const _e = Array.isArray(Se) && Se[wt], lt = Pt.content_alignment_horizontal || _e && _e.content_alignment_horizontal || void 0, Fe = Pt.content_alignment_vertical || _e && _e.content_alignment_vertical || void 0;
      let I;
      const jt = Pt.background || He;
      if (jt && Array.isArray(jt) && jt.length > 0) {
        const Dt = jt[0];
        Dt && Dt.type === "solid" && Dt.color && (I = pr(Dt.color));
      }
      const _t = nt.get(Pt.div);
      let At;
      _t ? (st.delete(_t), At = _t) : At = C.produceChildContext(Pt.div, { path: `${te}_${rt}` }), Oe.push(At), Pe.push({
        componentContext: At,
        layoutParams: {
          gridArea: {
            x: wt,
            y: ie,
            colSpan: ct,
            rowSpan: X
          }
        },
        cellHAlign: lt,
        cellVAlign: Fe,
        backgroundStyle: I
      }), wt += ct;
    }
  }
  return sn(() => {
    Ce.forEach((ge) => {
      ge.destroy();
    });
  }), t.$$set = (ge) => {
    "componentContext" in ge && e(0, C = ge.componentContext), "layoutParams" in ge && e(1, D = ge.layoutParams);
  }, t.$$.update = () => {
    var ge, ie, Se;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(20, n = C.origJson), t.$$.dirty[0] & /*origJson*/
    1048576 && n && Ge(), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, o = C.json.columns), t.$$.dirty[0] & /*componentContext*/
    1 && H(e(11, i = C.getDerivedFromVars(C.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && w(e(10, s = C.getDerivedFromVars(C.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(9, a = C.getDerivedFromVars(C.json.striped))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(8, l = typeof ((ge = C.json.row_builder) == null ? void 0 : ge.data) == "string" ? C.getDerivedFromVars((ie = C.json.row_builder) == null ? void 0 : ie.data, void 0, !0) : (Se = C.json.row_builder) != null && Se.data ? Go(C.json.row_builder.data) : void 0)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && (!Array.isArray(o) || o.length === 0 ? e(3, Q = !0) : e(3, Q = !1)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && e(17, c = Array.isArray(o) ? o.length : 0), t.$$.dirty[0] & /*jsonColumns*/
    524288)
      if (Array.isArray(o)) {
        const He = [];
        for (let We = 0; We < o.length; We++) {
          const te = o[We], Oe = te == null ? void 0 : te.width;
          if ((Oe == null ? void 0 : Oe.type) === "fixed" && Oe.value)
            He.push(pe(Number(Oe.value)));
          else if ((Oe == null ? void 0 : Oe.type) === "match_parent") {
            const Pe = Number(Oe.weight || 1);
            He.push(`${Pe}fr`);
          } else
            He.push("auto");
        }
        e(16, $e = He.join(" "));
      } else
        e(16, $e = "");
    if (t.$$.dirty[0] & /*componentContext, $jsonRowBuilderData*/
    33554433 && e(18, u = ke(C.json, T)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonColumns, allRows, columnCount, $jsonStriped*/
    17727493) {
      const He = new Set(Ce), We = /* @__PURE__ */ new Map();
      he === C && Ce.forEach((I) => {
        We.set(I.json, I);
      });
      const te = [], Oe = [], Pe = [];
      let nt = 0;
      const st = C.json, et = Array.isArray(o) ? o : [], wt = !!(u.headerRow && Array.isArray(u.headerRow.cells)), rt = u.rows.length, Pt = (wt ? 1 : 0) + rt;
      ue(Pt + 10, c + 10);
      const ct = Je(st.row_separator), X = Je(st.column_separator), _e = Je(st.header_separator);
      wt && (ee(u.headerRow, nt, et, u.headerRow.background || st.header_background, void 0, -1, te, Oe, We, He), nt++);
      const lt = u.rows;
      for (let I = 0; I < lt.length; I++) {
        const jt = lt[I];
        if (!jt || !Array.isArray(jt.cells)) continue;
        let _t = jt.background;
        !_t && O && (I % 2 === 0 ? _t = O.even_row_background : _t = O.odd_row_background), ee(jt, nt, et, _t, void 0, I, te, Oe, We, He), nt++;
      }
      const Fe = nt;
      if (_e && wt && rt > 0 && Pe.push({
        gridColumn: `1 / span ${c}`,
        gridRow: "1 / span 1",
        background: _e.color,
        height: pe(_e.thickness),
        marginTop: _e.marginTop ? pe(_e.marginTop) : void 0,
        marginBottom: _e.marginBottom ? pe(_e.marginBottom) : void 0,
        marginLeft: _e.marginLeft ? pe(_e.marginLeft) : void 0,
        marginRight: _e.marginRight ? pe(_e.marginRight) : void 0
      }), ct) {
        const I = wt ? 1 : 0;
        if (ct.show_at_start && rt > 0 && Pe.push({
          gridColumn: `1 / span ${c}`,
          gridRow: `${I + 1} / span 1`,
          background: ct.color,
          height: pe(ct.thickness),
          marginTop: ct.marginTop ? pe(ct.marginTop) : void 0,
          marginBottom: ct.marginBottom ? pe(ct.marginBottom) : void 0,
          marginLeft: ct.marginLeft ? pe(ct.marginLeft) : void 0,
          marginRight: ct.marginRight ? pe(ct.marginRight) : void 0
        }), ct.show_between)
          for (let jt = I; jt < Fe - 1; jt++)
            Pe.push({
              gridColumn: `1 / span ${c}`,
              gridRow: `${jt + 1} / span 1`,
              background: ct.color,
              height: pe(ct.thickness),
              marginTop: ct.marginTop ? pe(ct.marginTop) : void 0,
              marginBottom: ct.marginBottom ? pe(ct.marginBottom) : void 0,
              marginLeft: ct.marginLeft ? pe(ct.marginLeft) : void 0,
              marginRight: ct.marginRight ? pe(ct.marginRight) : void 0
            });
        ct.show_at_end && rt > 0 && Pe.push({
          gridColumn: `1 / span ${c}`,
          gridRow: `${Fe} / span 1`,
          background: ct.color,
          height: pe(ct.thickness),
          marginTop: ct.marginTop ? pe(ct.marginTop) : void 0,
          marginBottom: ct.marginBottom ? pe(ct.marginBottom) : void 0,
          marginLeft: ct.marginLeft ? pe(ct.marginLeft) : void 0,
          marginRight: ct.marginRight ? pe(ct.marginRight) : void 0
        });
      }
      if (X && c > 0) {
        if (X.show_at_start && Pe.push({
          gridColumn: "1 / span 1",
          gridRow: `1 / span ${Fe}`,
          background: X.color,
          width: pe(X.thickness),
          marginTop: X.marginTop ? pe(X.marginTop) : void 0,
          marginBottom: X.marginBottom ? pe(X.marginBottom) : void 0,
          marginLeft: X.marginLeft ? pe(X.marginLeft) : void 0,
          marginRight: X.marginRight ? pe(X.marginRight) : void 0
        }), X.show_between)
          for (let I = 0; I < c - 1; I++)
            Pe.push({
              gridColumn: `${I + 1} / span 1`,
              gridRow: `1 / span ${Fe}`,
              background: X.color,
              width: pe(X.thickness),
              marginTop: X.marginTop ? pe(X.marginTop) : void 0,
              marginBottom: X.marginBottom ? pe(X.marginBottom) : void 0,
              marginLeft: X.marginLeft ? pe(X.marginLeft) : void 0,
              marginRight: X.marginRight ? pe(X.marginRight) : void 0
            });
        X.show_at_end && Pe.push({
          gridColumn: `${c} / span 1`,
          gridRow: `1 / span ${Fe}`,
          background: X.color,
          width: pe(X.thickness),
          marginTop: X.marginTop ? pe(X.marginTop) : void 0,
          marginBottom: X.marginBottom ? pe(X.marginBottom) : void 0,
          marginLeft: X.marginLeft ? pe(X.marginLeft) : void 0,
          marginRight: X.marginRight ? pe(X.marginRight) : void 0
        });
      }
      for (const I of He)
        I.destroy();
      e(2, Ce = te), e(4, Ve = Oe), e(5, re = Pe), e(15, he = C);
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    8396800 && e(13, me = bl(k, me)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    6307840 && e(14, Ae = ml(m, h, Ae)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    24576 && e(7, f = {
      valign: me,
      halign: Ae
    }), t.$$.dirty[0] & /*gridTemplateColumns*/
    65536 && e(6, _ = {
      "grid-template-columns": $e
    });
  }, [
    C,
    D,
    Ce,
    Q,
    Ve,
    re,
    _,
    f,
    l,
    a,
    s,
    i,
    W,
    me,
    Ae,
    he,
    $e,
    c,
    u,
    o,
    n,
    h,
    m,
    k,
    O,
    T
  ];
}
class zv extends Or {
  constructor(r) {
    super(), Lr(this, r, Nv, Pv, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Lv = "appkit-counter", Ov = "appkit-counter__container", Bv = "appkit-counter__button", Rv = "appkit-counter__value", Hv = "appkit-counter_disabled", Di = {
  counter: Lv,
  counter__container: Ov,
  counter__button: Bv,
  counter__value: Rv,
  counter_disabled: Hv
};
function Wv(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Uv(t) {
  let r, e;
  return r = new hn({
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
      $$slots: { default: [Gv] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Gv(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, h, m, p, w;
  return {
    c() {
      r = Te("div"), e = Te("button"), n = $r("svg"), o = $r("line"), s = gr(), a = Te("div"), l = Jn(
        /*value*/
        t[17]
      ), c = gr(), u = Te("button"), f = $r("svg"), _ = $r("line"), h = $r("line"), g(o, "x1", "6"), g(o, "y1", "12"), g(o, "x2", "18"), g(o, "y2", "12"), g(
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
      ), g(h, "stroke-width", "2.5"), g(h, "stroke-linecap", "round"), g(f, "viewBox", "0 0 24 24"), g(f, "fill", "none"), g(f, "xmlns", "http://www.w3.org/2000/svg"), g(u, "class", Di.counter__button), u.disabled = m = !/*isEnabled*/
      t[3] || /*value*/
      t[17] >= /*maxValue*/
      t[12], g(u, "aria-label", "Increase value"), F(
        u,
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
      ), F(u, "width", pe(
        /*buttonSize*/
        t[5]
      )), F(u, "height", pe(
        /*buttonSize*/
        t[5]
      )), g(r, "class", Di.counter__container);
    },
    m(k, z) {
      q(k, r, z), yt(r, e), yt(e, n), yt(n, o), yt(r, s), yt(r, a), yt(a, l), yt(r, c), yt(r, u), yt(u, f), yt(f, _), yt(f, h), p || (w = [
        Qe(
          e,
          "click",
          /*decrement*/
          t[36]
        ),
        Qe(
          u,
          "click",
          /*increment*/
          t[35]
        )
      ], p = !0);
    },
    p(k, z) {
      z[0] & /*iconColor*/
      64 && g(
        o,
        "stroke",
        /*iconColor*/
        k[6]
      ), z[0] & /*isEnabled, value, minValue*/
      133128 && i !== (i = !/*isEnabled*/
      k[3] || /*value*/
      k[17] <= /*minValue*/
      k[11]) && (e.disabled = i), z[0] & /*value, minValue, disabledButtonColor, buttonColor*/
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
      ), z[0] & /*buttonSize*/
      32 && F(e, "width", pe(
        /*buttonSize*/
        k[5]
      )), z[0] & /*buttonSize*/
      32 && F(e, "height", pe(
        /*buttonSize*/
        k[5]
      )), z[0] & /*value*/
      131072 && ro(
        l,
        /*value*/
        k[17]
      ), z[0] & /*valueWidth*/
      1024 && F(a, "width", pe(
        /*valueWidth*/
        k[10]
      )), z[0] & /*textColor*/
      256 && F(
        a,
        "color",
        /*textColor*/
        k[8]
      ), z[0] & /*fontSize*/
      512 && F(a, "font-size", pe(
        /*fontSize*/
        k[9]
      )), z[0] & /*fontWeight*/
      8192 && F(
        a,
        "font-weight",
        /*fontWeight*/
        k[13]
      ), z[0] & /*iconColor*/
      64 && g(
        _,
        "stroke",
        /*iconColor*/
        k[6]
      ), z[0] & /*iconColor*/
      64 && g(
        h,
        "stroke",
        /*iconColor*/
        k[6]
      ), z[0] & /*isEnabled, value, maxValue*/
      135176 && m !== (m = !/*isEnabled*/
      k[3] || /*value*/
      k[17] >= /*maxValue*/
      k[12]) && (u.disabled = m), z[0] & /*value, maxValue, disabledButtonColor, buttonColor*/
      135312 && F(
        u,
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
      ), z[0] & /*buttonSize*/
      32 && F(u, "width", pe(
        /*buttonSize*/
        k[5]
      )), z[0] & /*buttonSize*/
      32 && F(u, "height", pe(
        /*buttonSize*/
        k[5]
      ));
    },
    d(k) {
      k && G(r), p = !1, Jr(w);
    }
  };
}
function Jv(t) {
  let r, e, n, o;
  const i = [Uv, Wv], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[2] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (ir(), x(s[u], 1, 1, () => {
        s[u] = null;
      }), sr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
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
function qv(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, z, H, O, oe, fe, T, Z, ce, C, D = j, M = () => (D(), D = S(i, (at) => e(46, C = at)), i), W, Q = j, me = () => (Q(), Q = S(fe, (at) => e(47, W = at)), fe), Ae, Ce = j, he = () => (Ce(), Ce = S(oe, (at) => e(48, Ae = at)), oe), Ve, re = j, $e = () => (re(), re = S(O, (at) => e(49, Ve = at)), O), Ge, Je = j, ke = () => (Je(), Je = S(H, (at) => e(50, Ge = at)), H), De, ue = j, ae = () => (ue(), ue = S(z, (at) => e(51, De = at)), z), de, ee = j, ge = () => (ee(), ee = S(k, (at) => e(52, de = at)), k), ie, Se = j, He = () => (Se(), Se = S(w, (at) => e(53, ie = at)), w), We, te = j, Oe = () => (te(), te = S(p, (at) => e(54, We = at)), p), Pe, nt = j, st = () => (nt(), nt = S(m, (at) => e(55, Pe = at)), m), et, wt = j, rt = () => (wt(), wt = S(h, (at) => e(56, et = at)), h), Pt, ct = j, X = () => (ct(), ct = S(_, (at) => e(57, Pt = at)), _), _e, lt = j, Fe = () => (lt(), lt = S(f, (at) => e(58, _e = at)), f), I, jt = j, _t = () => (jt(), jt = S(u, (at) => e(59, I = at)), u), At, Dt = j, ot = () => (Dt(), Dt = S(c, (at) => e(60, At = at)), c), K, Mt = j, Vt = () => (Mt(), Mt = S(l, (at) => e(61, K = at)), l), Jt, qt = j, be = () => (qt(), qt = S(a, (at) => e(62, Jt = at)), a), Ke, pt = j, we = () => (pt(), pt = S(s, (at) => e(63, Ke = at)), s);
  t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Ce()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => Je()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Se()), t.$$.on_destroy.push(() => te()), t.$$.on_destroy.push(() => nt()), t.$$.on_destroy.push(() => wt()), t.$$.on_destroy.push(() => ct()), t.$$.on_destroy.push(() => lt()), t.$$.on_destroy.push(() => jt()), t.$$.on_destroy.push(() => Dt()), t.$$.on_destroy.push(() => Mt()), t.$$.on_destroy.push(() => qt()), t.$$.on_destroy.push(() => pt());
  let { componentContext: xe } = r, { layoutParams: Be = void 0 } = r;
  const nr = Ir(Kr), Ne = Ir(To);
  let bt = !1, Ft = !0, It = "#4CAF50", hr = 36, ze = "#ffffff", kt = "#cccccc", lr = "#1B2630", er = 16, Xt = 700, mr = 40, vr = "#F5F5F5", xt = "#E0E0E0", $t = 1, J = 999, ft = 6, Gt = 0, Et = 99, br = 1;
  const Er = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  };
  function wr() {
    e(3, Ft = !0), e(4, It = "#4CAF50"), e(5, hr = 36), e(6, ze = "#ffffff"), e(7, kt = "#cccccc"), e(8, lr = "#1B2630"), e(9, er = 16), e(13, Xt = 700), e(10, mr = 40), e(37, vr = "#F5F5F5"), e(38, xt = "#E0E0E0"), e(39, $t = 1), e(40, J = 999), e(41, ft = 6), e(11, Gt = 0), e(12, Et = 99), e(42, br = 1);
  }
  function Dr() {
    if (!Ft) return;
    const at = Math.min(T + br, Et);
    at !== T && (i.setValue(at), xe.json.on_increment_actions && xe.execAnyActions(xe.json.on_increment_actions), xe.json.on_value_change_actions && xe.execAnyActions(xe.json.on_value_change_actions));
  }
  function zr() {
    if (!Ft) return;
    const at = Math.max(T - br, Gt);
    at !== T && (i.setValue(at), xe.json.on_decrement_actions && xe.execAnyActions(xe.json.on_decrement_actions), xe.json.on_value_change_actions && xe.execAnyActions(xe.json.on_value_change_actions));
  }
  let tr;
  return sn(() => {
    tr && (nr.unregisterFocusable(tr), e(43, tr = void 0));
  }), t.$$set = (at) => {
    "componentContext" in at && e(0, xe = at.componentContext), "layoutParams" in at && e(1, Be = at.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(45, n = xe.origJson), t.$$.dirty[1] & /*origJson*/
    16384 && n && wr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(44, o = xe.json.counter_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8192 && M(e(16, i = o && (xe.getVariable(o, "integer") || nr.awaitGlobalVariable(o, "integer", 0)) || lo("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && we(e(34, s = xe.getDerivedFromVars(xe.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(33, a = xe.getDerivedFromVars(xe.json.button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Vt(e(32, l = xe.getDerivedFromVars(xe.json.button_size))), t.$$.dirty[0] & /*componentContext*/
    1 && ot(e(31, c = xe.getDerivedFromVars(xe.json.icon_color))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(30, u = xe.getDerivedFromVars(xe.json.disabled_button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Fe(e(29, f = xe.getDerivedFromVars(xe.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && X(e(28, _ = xe.getDerivedFromVars(xe.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && rt(e(27, h = xe.getDerivedFromVars(xe.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(26, m = xe.getDerivedFromVars(xe.json.value_width))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(25, p = xe.getDerivedFromVars(xe.json.background_color))), t.$$.dirty[0] & /*componentContext*/
    1 && He(e(24, w = xe.getDerivedFromVars(xe.json.border_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(23, k = xe.getDerivedFromVars(xe.json.border_width))), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(22, z = xe.getDerivedFromVars(xe.json.corner_radius))), t.$$.dirty[0] & /*componentContext*/
    1 && ke(e(21, H = xe.getDerivedFromVars(xe.json.padding))), t.$$.dirty[0] & /*componentContext*/
    1 && $e(e(20, O = xe.getDerivedFromVars(xe.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(19, oe = xe.getDerivedFromVars(xe.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(18, fe = xe.getDerivedFromVars(xe.json.step))), t.$$.dirty[0] & /*isEnabled*/
    8 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    2 && e(3, Ft = nn(Ke, Ft)), t.$$.dirty[0] & /*buttonColor*/
    16 | t.$$.dirty[2] & /*$jsonButtonColor*/
    1 && e(4, It = pr(Jt, 1, It)), t.$$.dirty[0] & /*buttonSize*/
    32 | t.$$.dirty[1] & /*$jsonButtonSize*/
    1073741824 && e(5, hr = so(K, hr)), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*$jsonIconColor*/
    536870912 && e(6, ze = pr(At, 1, ze)), t.$$.dirty[0] & /*disabledButtonColor*/
    128 | t.$$.dirty[1] & /*$jsonDisabledButtonColor*/
    268435456 && e(7, kt = pr(I, 1, kt)), t.$$.dirty[0] & /*textColor*/
    256 | t.$$.dirty[1] & /*$jsonTextColor*/
    134217728 && e(8, lr = pr(_e, 1, lr)), t.$$.dirty[0] & /*fontSize*/
    512 | t.$$.dirty[1] & /*$jsonFontSize*/
    67108864 && e(9, er = so(Pt, er)), t.$$.dirty[1] & /*$jsonFontWeight*/
    33554432) {
      const at = et;
      if (typeof at == "string")
        if (at in Er)
          e(13, Xt = Er[at]);
        else {
          const vt = parseInt(at, 10);
          !Number.isNaN(vt) && vt > 0 && e(13, Xt = vt);
        }
      else typeof at == "number" && at > 0 && e(13, Xt = at);
    }
    if (t.$$.dirty[0] & /*valueWidth*/
    1024 | t.$$.dirty[1] & /*$jsonValueWidth*/
    16777216 && e(10, mr = so(Pe, mr)), t.$$.dirty[1] & /*$jsonBackgroundColor, backgroundColor*/
    8388672 && e(37, vr = pr(We, 1, vr)), t.$$.dirty[1] & /*$jsonBorderColor, borderColor*/
    4194432 && e(38, xt = pr(ie, 1, xt)), t.$$.dirty[1] & /*$jsonBorderWidth, borderWidth*/
    2097408 && e(39, $t = so(de, $t)), t.$$.dirty[1] & /*$jsonCornerRadius, cornerRadius*/
    1049088 && e(40, J = so(De, J)), t.$$.dirty[1] & /*$jsonPadding, padding*/
    525312 && e(41, ft = so(Ge, ft)), t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$jsonMinValue, $jsonMaxValue*/
    393216 && (e(11, Gt = so(Ve, Gt)), e(12, Et = so(Ae, Et))), t.$$.dirty[1] & /*$jsonStep, step*/
    67584) {
      const at = so(W, br);
      at > 0 && e(42, br = at);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$valueVariable*/
    32768 && e(17, T = Fo(C || 0, Gt, Et)), t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*variable*/
    8192) {
      let at = !1;
      o ? Ne.hasAction() && (at = !0, xe.logError(Y(new Error('Cannot show "counter" inside component with an action')))) : (at = !0, xe.logError(Y(new Error('Missing "counter_value_variable" in "counter"')))), bt !== at && e(2, bt = at);
    }
    t.$$.dirty[0] & /*isEnabled*/
    8 && e(15, Z = { disabled: !Ft }), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*backgroundColor, borderColor, borderWidth, cornerRadius, padding*/
    1984 && e(14, ce = {
      "--divkit-counter-bg": vr,
      "--divkit-counter-border-color": xt,
      "--divkit-counter-border-width": pe($t),
      "--divkit-counter-radius": pe(J),
      "--divkit-counter-padding": pe(ft),
      "--divkit-counter-icon-color": ze
    }), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*prevId*/
    4096 && xe.json && (tr && (nr.unregisterFocusable(tr), e(43, tr = void 0)), xe.id && !xe.fakeElement && (e(43, tr = xe.id), nr.registerFocusable(tr, {
      focus() {
      }
    })));
  }, [
    xe,
    Be,
    bt,
    Ft,
    It,
    hr,
    ze,
    kt,
    lr,
    er,
    mr,
    Gt,
    Et,
    Xt,
    ce,
    Z,
    i,
    T,
    fe,
    oe,
    O,
    H,
    z,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    Dr,
    zr,
    vr,
    xt,
    $t,
    J,
    ft,
    br,
    tr,
    o,
    n,
    C,
    W,
    Ae,
    Ve,
    Ge,
    De,
    de,
    ie,
    We,
    Pe,
    et,
    Pt,
    _e,
    I,
    At,
    K,
    Jt,
    Ke
  ];
}
class Kv extends Or {
  constructor(r) {
    super(), Lr(this, r, qv, Jv, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Yv = "appkit-webview__frame", Xs = {
  webview__frame: Yv,
  "webview__aspect-wrapper": "appkit-webview__aspect-wrapper"
};
function Xv(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Zv(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht("webview", Xs, {}),
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
      $$slots: { default: [$v] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Qv(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Te("iframe"), g(r, "class", Xs.webview__frame), Qn(r.src, e = /*url*/
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
      4 && !Qn(r.src, e = /*url*/
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
function xv(t) {
  let r, e, n, o, i, s = `${/*aspectPaddingBottom*/
  t[6]}%`, a, l;
  return {
    c() {
      r = Te("div"), e = Te("iframe"), g(e, "class", Xs.webview__frame), Qn(e.src, n = /*url*/
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
      t[4] ? "auto" : "no"), g(e, "title", "webview"), g(r, "class", Xs["webview__aspect-wrapper"]), F(r, "padding-bottom", s);
    },
    m(c, u) {
      q(c, r, u), yt(r, e), a || (l = [
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
    p(c, u) {
      u & /*url*/
      4 && !Qn(e.src, n = /*url*/
      c[2] || void 0) && g(e, "src", n), u & /*url, html*/
      12 && o !== (o = /*url*/
      c[2] ? void 0 : (
        /*html*/
        c[3]
      )) && g(e, "srcdoc", o), u & /*sandbox*/
      128 && g(
        e,
        "sandbox",
        /*sandbox*/
        c[7]
      ), u & /*allowScrolling*/
      16 && i !== (i = /*allowScrolling*/
      c[4] ? "auto" : "no") && g(e, "scrolling", i), u & /*aspectPaddingBottom*/
      64 && s !== (s = `${/*aspectPaddingBottom*/
      c[6]}%`) && F(r, "padding-bottom", s);
    },
    d(c) {
      c && G(r), a = !1, Jr(l);
    }
  };
}
function $v(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[6] !== "0" ? xv : Qv
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
      i && G(r), o.d(i);
    }
  };
}
function e2(t) {
  let r, e, n, o;
  const i = [Zv, Xv], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[5] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, [c]) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (ir(), x(s[u], 1, 1, () => {
        s[u] = null;
      }), sr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
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
function t2(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _ = j, h = () => (_(), _ = S(c, (de) => e(20, f = de)), c), m, p = j, w = () => (p(), p = S(l, (de) => e(21, m = de)), l), k, z = j, H = () => (z(), z = S(a, (de) => e(22, k = de)), a), O, oe = j, fe = () => (oe(), oe = S(s, (de) => e(23, O = de)), s), T, Z = j, ce = () => (Z(), Z = S(i, (de) => e(24, T = de)), i), C, D = j, M = () => (D(), D = S(o, (de) => e(25, C = de)), o), W, Q = j, me = () => (Q(), Q = S(n, (de) => e(26, W = de)), n);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Q());
  let { componentContext: Ae } = r, { layoutParams: Ce = void 0 } = r;
  Ir(Kr);
  let he = !1, Ve, re, $e = !1, Ge = !0, Je = !1, ke = !1, De = "0";
  function ue() {
    Ae.execAnyActions(Ae.json.on_load_actions);
  }
  function ae() {
    Ae.execAnyActions(Ae.json.on_error_actions);
  }
  return t.$$set = (de) => {
    "componentContext" in de && e(0, Ae = de.componentContext), "layoutParams" in de && e(1, Ce = de.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext*/
    1 && me(e(14, n = Ae.getDerivedFromVars(Ae.json.url))), t.$$.dirty & /*componentContext*/
    1 && M(e(13, o = Ae.getDerivedFromVars(Ae.json.html))), t.$$.dirty & /*componentContext*/
    1 && ce(e(12, i = Ae.getDerivedFromVars(Ae.json.javascript_enabled))), t.$$.dirty & /*componentContext*/
    1 && fe(e(11, s = Ae.getDerivedFromVars(Ae.json.allow_scrolling))), t.$$.dirty & /*componentContext*/
    1 && H(e(10, a = Ae.getDerivedFromVars(Ae.json.allow_navigation))), t.$$.dirty & /*componentContext*/
    1 && w(e(9, l = Ae.getDerivedFromVars(Ae.json.scale_to_fit))), t.$$.dirty & /*componentContext*/
    1 && h(e(8, c = Ae.getDerivedFromVars(Ae.json.aspect))), t.$$.dirty & /*$jsonUrl, $jsonHtml, url, html, componentContext*/
    100663309 && (e(2, Ve = typeof W == "string" ? W : void 0), e(3, re = typeof C == "string" ? C : void 0), !Ve && !re ? (e(5, he = !0), Ae.logError(Y(new Error('Missing "url" or "html" in "webview"')))) : e(5, he = !1)), t.$$.dirty & /*$jsonJsEnabled, javascriptEnabled*/
    16908288 && e(17, $e = nn(T, $e)), t.$$.dirty & /*$jsonAllowScrolling, allowScrolling*/
    8388624 && e(4, Ge = nn(O, Ge)), t.$$.dirty & /*$jsonAllowNavigation, allowNavigation*/
    4456448 && e(18, Je = nn(k, Je)), t.$$.dirty & /*$jsonScaleToFit, scaleToFit*/
    2621440 && e(19, ke = nn(m, ke)), t.$$.dirty & /*$jsonAspect*/
    1048576) {
      const de = f == null ? void 0 : f.ratio;
      de && zn(de) ? e(6, De = (100 / Number(de)).toFixed(2)) : e(6, De = "0");
    }
    t.$$.dirty & /*javascriptEnabled, allowNavigation*/
    393216 && e(7, u = [
      "allow-same-origin",
      ...$e ? ["allow-scripts"] : [],
      ...Je ? ["allow-popups"] : []
    ].join(" "));
  }, [
    Ae,
    Ce,
    Ve,
    re,
    Ge,
    he,
    De,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    n,
    ue,
    ae,
    $e,
    Je,
    ke,
    f,
    m,
    k,
    O,
    T,
    C,
    W
  ];
}
class r2 extends Or {
  constructor(r) {
    super(), Lr(this, r, t2, e2, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const Zs = {
  "google-map__frame": "appkit-google-map__frame",
  "google-map__aspect-wrapper": "appkit-google-map__aspect-wrapper"
};
function n2(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function o2(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht("google-map", Zs, {}),
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
      $$slots: { default: [l2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function i2(t) {
  let r;
  return {
    c() {
      r = Te("iframe"), g(r, "class", Zs["google-map__frame"]), g(
        r,
        "srcdoc",
        /*iframeDoc*/
        t[4]
      ), g(r, "title", "Google Map"), g(r, "sandbox", "allow-scripts allow-same-origin");
    },
    m(e, n) {
      q(e, r, n), t[35](r);
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
function s2(t) {
  let r, e, n = `${/*aspectPaddingBottom*/
  t[3]}%`;
  return {
    c() {
      r = Te("div"), e = Te("iframe"), g(e, "class", Zs["google-map__frame"]), g(
        e,
        "srcdoc",
        /*iframeDoc*/
        t[4]
      ), g(e, "title", "Google Map"), g(e, "sandbox", "allow-scripts allow-same-origin"), g(r, "class", Zs["google-map__aspect-wrapper"]), F(r, "padding-bottom", n);
    },
    m(o, i) {
      q(o, r, i), yt(r, e), t[34](e);
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
function l2(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[3] !== "0" ? s2 : i2
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
      i && G(r), o.d(i);
    }
  };
}
function a2(t) {
  let r, e, n, o;
  const i = [o2, n2], s = [];
  function a(l, c) {
    return !/*hasError*/
    l[2] && /*iframeDoc*/
    l[4] ? 0 : 1;
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (ir(), x(s[u], 1, 1, () => {
        s[u] = null;
      }), sr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
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
function na(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function c2(t) {
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
function u2(t) {
  return t.map((r, e) => {
    const n = Number(r.latitude) || 0, o = Number(r.longitude) || 0, i = r.title ? na(String(r.title)) : "", s = r.color ? String(r.color) : "", a = r.on_click_actions && r.on_click_actions.length > 0;
    let l = "";
    s && (l = `,icon:{path:google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,fillColor:'${na(s)}',fillOpacity:1,strokeColor:'#333',strokeWeight:1,scale:6,anchor:new google.maps.Point(0,0)}`);
    const c = a ? `m.addListener('click',function(){window.parent.postMessage({type:'marker_click',index:${e}},'*');});` : "";
    return `(function(){var m=new google.maps.Marker({position:{lat:${n},lng:${o}},map:map,title:'${i}'${l}});${c}})();`;
  }).join(`
`);
}
function f2(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m = j, p = () => (m(), m = S(_, (X) => e(24, h = X)), _), w, k = j, z = () => (k(), k = S(l, (X) => e(25, w = X)), l), H, O = j, oe = () => (O(), O = S(a, (X) => e(26, H = X)), a), fe, T = j, Z = () => (T(), T = S(f, (X) => e(27, fe = X)), f), ce, C = j, D = () => (C(), C = S(c, (X) => e(28, ce = X)), c), M, W = j, Q = () => (W(), W = S(u, (X) => e(29, M = X)), u), me, Ae = j, Ce = () => (Ae(), Ae = S(s, (X) => e(30, me = X)), s), he, Ve = j, re = () => (Ve(), Ve = S(i, (X) => e(31, he = X)), i), $e, Ge = j, Je = () => (Ge(), Ge = S(o, (X) => e(32, $e = X)), o), ke, De = j, ue = () => (De(), De = S(n, (X) => e(33, ke = X)), n);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => k()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => C()), t.$$.on_destroy.push(() => W()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => Ve()), t.$$.on_destroy.push(() => Ge()), t.$$.on_destroy.push(() => De());
  let { componentContext: ae } = r, { layoutParams: de = void 0 } = r;
  Ir(Kr);
  let ee = !1, ge = "0", ie = 0, Se = 0, He = 10, We = "normal", te = !0, Oe = !0, Pe, nt = [], st = "", et, wt = !1;
  function rt(X) {
    if (!et || X.source !== et.contentWindow) return;
    const _e = X.data;
    if (!(!_e || typeof _e != "object")) {
      if (_e.type === "map_ready" && !wt)
        wt = !0, ae.execAnyActions(ae.json.on_ready_actions);
      else if (_e.type === "map_error")
        ae.execAnyActions(ae.json.on_error_actions);
      else if (_e.type === "marker_click" && typeof _e.index == "number") {
        const lt = nt[_e.index];
        lt != null && lt.on_click_actions && ae.execAnyActions(lt.on_click_actions);
      }
    }
  }
  xn(() => {
    window.addEventListener("message", rt);
  }), sn(() => {
    window.removeEventListener("message", rt);
  });
  function Pt(X) {
    Fr[X ? "unshift" : "push"](() => {
      et = X, e(5, et);
    });
  }
  function ct(X) {
    Fr[X ? "unshift" : "push"](() => {
      et = X, e(5, et);
    });
  }
  return t.$$set = (X) => {
    "componentContext" in X && e(0, ae = X.componentContext), "layoutParams" in X && e(1, de = X.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(15, n = ae.getDerivedFromVars(ae.json.latitude))), t.$$.dirty[0] & /*componentContext*/
    1 && Je(e(14, o = ae.getDerivedFromVars(ae.json.longitude))), t.$$.dirty[0] & /*componentContext*/
    1 && re(e(13, i = ae.getDerivedFromVars(ae.json.zoom))), t.$$.dirty[0] & /*componentContext*/
    1 && Ce(e(12, s = ae.getDerivedFromVars(ae.json.map_type))), t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(11, a = ae.getDerivedFromVars(ae.json.allow_zoom))), t.$$.dirty[0] & /*componentContext*/
    1 && z(e(10, l = ae.getDerivedFromVars(ae.json.allow_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && D(e(9, c = ae.getDerivedFromVars(ae.json.api_key))), t.$$.dirty[0] & /*componentContext*/
    1 && Q(e(8, u = ae.getDerivedFromVars(ae.json.api_key_web))), t.$$.dirty[0] & /*componentContext*/
    1 && Z(e(7, f = ae.getDerivedFromVars(ae.json.markers))), t.$$.dirty[0] & /*componentContext*/
    1 && p(e(6, _ = ae.getDerivedFromVars(ae.json.aspect))), t.$$.dirty[0] & /*$jsonMapType, $jsonApiKeyWeb, $jsonApiKey, $jsonMarkers, resolvedApiKey, componentContext*/
    2017460225 | t.$$.dirty[1] & /*$jsonLatitude, $jsonLongitude, $jsonZoom*/
    7) {
      e(16, ie = typeof ke == "number" ? ke : 0), e(17, Se = typeof $e == "number" ? $e : 0), e(18, He = typeof he == "number" ? he : 10), e(19, We = typeof me == "string" ? me : "normal");
      const X = M, _e = ce;
      e(22, Pe = typeof X == "string" ? X : typeof _e == "string" ? _e : void 0), e(23, nt = Array.isArray(fe) ? fe : []), Pe ? e(2, ee = !1) : (e(2, ee = !0), ae.logError(Y(new Error('Missing "api_key" or "api_key_web" in "google_map"'))));
    }
    if (t.$$.dirty[0] & /*$jsonAllowZoom, allowZoom*/
    68157440 && e(20, te = nn(H, te)), t.$$.dirty[0] & /*$jsonAllowScroll, allowScroll*/
    35651584 && e(21, Oe = nn(w, Oe)), t.$$.dirty[0] & /*$jsonAspect*/
    16777216) {
      const X = h == null ? void 0 : h.ratio;
      X && zn(X) ? e(3, ge = (100 / Number(X)).toFixed(2)) : e(3, ge = "0");
    }
    if (t.$$.dirty[0] & /*resolvedApiKey, resolvedMarkers, mapType, allowScroll, allowZoom, latitude, longitude, zoom*/
    16711680)
      if (Pe) {
        const X = u2(nt), _e = c2(We), lt = Oe || te ? "auto" : "none";
        e(4, st = `<!DOCTYPE html>
<html><head>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>html,body,#map{width:100%;height:100%;margin:0;padding:0;}</style>
</head><body>
<div id="map"></div>
<script>
function initMap(){
var map=new google.maps.Map(document.getElementById('map'),{
center:{lat:${ie},lng:${Se}},
zoom:${Math.round(He)},
mapTypeId:'${_e}',
gestureHandling:'${lt}',
zoomControl:${te},
scrollwheel:${Oe},
draggable:${Oe},
fullscreenControl:false,
streetViewControl:false
});
${X}
google.maps.event.addListenerOnce(map,'idle',function(){
window.parent.postMessage({type:'map_ready'},'*');
});
}
<\/script>
<script src="https://maps.googleapis.com/maps/api/js?key=${na(Pe)}&callback=initMap" async defer
onerror="window.parent.postMessage({type:'map_error'},'*')"><\/script>
</body></html>`);
      } else
        e(4, st = "");
  }, [
    ae,
    de,
    ee,
    ge,
    st,
    et,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    n,
    ie,
    Se,
    He,
    We,
    te,
    Oe,
    Pe,
    nt,
    h,
    w,
    H,
    fe,
    ce,
    M,
    me,
    he,
    $e,
    ke,
    Pt,
    ct
  ];
}
class d2 extends Or {
  constructor(r) {
    super(), Lr(this, r, f2, a2, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
function Sf(t, r, e) {
  const n = t.slice();
  return n[11] = r[e], n;
}
function _2(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function p2(t) {
  let r, e;
  return r = new hn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: { default: [g2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Vf(t) {
  let r, e = [
    /*templateAttrs*/
    t[8]
  ], n = {};
  for (let o = 0; o < e.length; o += 1)
    n = jo(n, e[o]);
  return {
    c() {
      r = Te("template"), Jo(r, n);
    },
    m(o, i) {
      q(o, r, i), r.content.innerHTML = /*templateContent*/
      t[7];
    },
    p(o, i) {
      i & /*templateContent*/
      128 && (r.content.innerHTML = /*templateContent*/
      o[7]), Jo(r, n = No(e, [i & /*templateAttrs*/
      256 && /*templateAttrs*/
      o[8]]));
    },
    d(o) {
      o && G(r);
    }
  };
}
function Ff(t) {
  let r = (
    /*jsonItems*/
    t[5]
  ), e, n, o = Df(t);
  return {
    c() {
      o.c(), e = Kt();
    },
    m(i, s) {
      o.m(i, s), q(i, e, s), n = !0;
    },
    p(i, s) {
      s & /*jsonItems*/
      32 && Sr(r, r = /*jsonItems*/
      i[5]) ? (ir(), x(o, 1, 1, j), sr(), o = Df(i), o.c(), L(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
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
function If(t) {
  let r, e;
  return r = new qn({
    props: { componentContext: (
      /*item*/
      t[11]
    ) }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function Df(t) {
  let r, e, n = rr(
    /*items*/
    t[3]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = If(Sf(t, n, s));
  const i = (s) => x(o[s], 1, 1, () => {
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
        n = rr(
          /*items*/
          s[3]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const c = Sf(s, n, l);
          o[l] ? (o[l].p(c, a), L(o[l], 1)) : (o[l] = If(c), o[l].c(), L(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (ir(), l = n.length; l < o.length; l += 1)
          i(l);
        sr();
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
function Pl(t) {
  let r, e, n, o = (
    /*templateContent*/
    t[7] && Vf(t)
  ), i = !/*hasItemsError*/
  t[4] && /*jsonItems*/
  t[5] && Ff(t), s = [
    /*componentContext*/
    t[0].json.custom_props || {}
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = jo(a, s[l]);
  return {
    c() {
      r = Te(
        /*desc*/
        t[2].element
      ), o && o.c(), e = gr(), i && i.c(), $o(
        /*desc*/
        t[2].element
      )(r, a);
    },
    m(l, c) {
      q(l, r, c), o && o.m(r, null), yt(r, e), i && i.m(r, null), t[9](r), n = !0;
    },
    p(l, c) {
      /*templateContent*/
      l[7] ? o ? o.p(l, c) : (o = Vf(l), o.c(), o.m(r, e)) : o && (o.d(1), o = null), !/*hasItemsError*/
      l[4] && /*jsonItems*/
      l[5] ? i ? (i.p(l, c), c & /*hasItemsError, jsonItems*/
      48 && L(i, 1)) : (i = Ff(l), i.c(), L(i, 1), i.m(r, null)) : i && (ir(), x(i, 1, 1, () => {
        i = null;
      }), sr()), $o(
        /*desc*/
        l[2].element
      )(r, a = No(s, [
        c & /*componentContext*/
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
function g2(t) {
  let r = (
    /*desc*/
    t[2].element
  ), e, n = (
    /*desc*/
    t[2].element && Pl(t)
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
      o[2].element ? r ? Sr(
        r,
        /*desc*/
        o[2].element
      ) ? (n.d(1), n = Pl(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = Pl(o), r = /*desc*/
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
function h2(t) {
  let r, e, n, o;
  const i = [p2, _2], s = [];
  function a(l, c) {
    return (
      /*desc*/
      l[2] ? 0 : 1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, [c]) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (ir(), x(s[u], 1, 1, () => {
        s[u] = null;
      }), sr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
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
function m2(t, r, e) {
  let n, { componentContext: o } = r, { layoutParams: i = void 0 } = r;
  const s = Ir(Kr);
  let a, l = null, c = "", u = {}, f = [], _ = !1;
  xn(() => {
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
    Fr[m ? "unshift" : "push"](() => {
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
          for (const [k, z] of p.variables)
            w.set(k, z.getValue());
          e(7, c = l.template({
            props: o.json.custom_props,
            variables: w
          }));
        } else l.template && typeof l.template == "string" ? e(7, c = l.template) : e(7, c = "");
        e(8, u = {
          shadowrootmode: l.shadowRootMode || "open"
        });
      } else
        e(2, l = null), e(7, c = ";"), o.logError(Y(new Error('Unknown or incorrect "custom_type" prop for div "custom"')));
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
    c,
    u,
    h
  ];
}
class b2 extends Or {
  constructor(r) {
    super(), Lr(this, r, m2, h2, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const y2 = "appkit-breadcrumb", w2 = "appkit-breadcrumb__list", k2 = "appkit-breadcrumb__item", v2 = "appkit-breadcrumb__label", j2 = "appkit-breadcrumb__label_link", C2 = "appkit-breadcrumb__separator", pi = {
  breadcrumb: y2,
  breadcrumb__list: w2,
  breadcrumb__item: k2,
  breadcrumb__label: v2,
  breadcrumb__label_link: j2,
  breadcrumb__separator: C2
};
function Tf(t, r, e) {
  const n = t.slice();
  return n[26] = r[e], n[28] = e, n;
}
function E2(t) {
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function A2(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht("breadcrumb", pi, {}),
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
      $$slots: { default: [F2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Lt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function S2(t) {
  let r, e = (
    /*crumb*/
    t[26].title + ""
  ), n, o, i, s, a, l, c;
  function u(...f) {
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
      r = Te("a"), n = Jn(e), i = gr(), s = Te("span"), a = Jn(
        /*separator*/
        t[2]
      ), g(r, "class", pi.breadcrumb__label + " " + pi.breadcrumb__label_link), g(r, "href", o = Pf(
        /*crumb*/
        t[26]
      )), g(s, "class", pi.breadcrumb__separator), g(s, "aria-hidden", "true");
    },
    m(f, _) {
      q(f, r, _), yt(r, n), q(f, i, _), q(f, s, _), yt(s, a), l || (c = Qe(r, "click", u), l = !0);
    },
    p(f, _) {
      t = f, _ & /*crumbs*/
      16 && e !== (e = /*crumb*/
      t[26].title + "") && ro(n, e), _ & /*crumbs*/
      16 && o !== (o = Pf(
        /*crumb*/
        t[26]
      )) && g(r, "href", o), _ & /*separator*/
      4 && ro(
        a,
        /*separator*/
        t[2]
      );
    },
    d(f) {
      f && (G(r), G(i), G(s)), l = !1, c();
    }
  };
}
function V2(t) {
  let r, e = (
    /*crumb*/
    t[26].title + ""
  ), n;
  return {
    c() {
      r = Te("span"), n = Jn(e), g(r, "class", pi.breadcrumb__label), g(r, "aria-current", "page");
    },
    m(o, i) {
      q(o, r, i), yt(r, n);
    },
    p(o, i) {
      i & /*crumbs*/
      16 && e !== (e = /*crumb*/
      o[26].title + "") && ro(n, e);
    },
    d(o) {
      o && G(r);
    }
  };
}
function Mf(t) {
  let r, e;
  function n(s, a) {
    return (
      /*index*/
      s[28] === /*crumbs*/
      s[4].length - 1 ? V2 : S2
    );
  }
  let o = n(t), i = o(t);
  return {
    c() {
      r = Te("li"), i.c(), e = gr(), g(r, "class", pi.breadcrumb__item);
    },
    m(s, a) {
      q(s, r, a), i.m(r, null), yt(r, e);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, e)));
    },
    d(s) {
      s && G(r), i.d();
    }
  };
}
function F2(t) {
  let r, e, n = rr(
    /*crumbs*/
    t[4]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Mf(Tf(t, n, i));
  return {
    c() {
      r = Te("nav"), e = Te("ol");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(e, "class", pi.breadcrumb__list), g(r, "aria-label", "breadcrumb");
    },
    m(i, s) {
      q(i, r, s), yt(r, e);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(e, null);
    },
    p(i, s) {
      if (s & /*crumbs, separator, getHref, handleCrumbClick*/
      2068) {
        n = rr(
          /*crumbs*/
          i[4]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Tf(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Mf(l), o[a].c(), o[a].m(e, null));
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
function I2(t) {
  let r, e, n, o;
  const i = [A2, E2], s = [];
  function a(l, c) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Kt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, [c]) {
      e && e.p(l, c);
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
function Pf(t) {
  var r;
  return (r = t.action) != null && r.url && !t.action.url.startsWith("div-action://") ? t.action.url : "#";
}
function D2(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h = j, m = () => (h(), h = S(c, (De) => e(16, _ = De)), c), p, w = j, k = () => (w(), w = S(l, (De) => e(17, p = De)), l), z, H = j, O = () => (H(), H = S(a, (De) => e(18, z = De)), a), oe, fe = j, T = () => (fe(), fe = S(s, (De) => e(19, oe = De)), s), Z, ce = j, C = () => (ce(), ce = S(i, (De) => e(20, Z = De)), i), D, M = j, W = () => (M(), M = S(o, (De) => e(21, D = De)), o);
  t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => H()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => M());
  let { componentContext: Q } = r, { layoutParams: me = void 0 } = r;
  const Ae = Ir(Kr);
  let Ce = "/", he = "#0077CC", Ve = "#111111", re = 14;
  function $e() {
    e(2, Ce = "/"), e(12, he = "#0077CC"), e(13, Ve = "#111111"), e(14, re = 14);
  }
  function Ge(De, ue) {
    const ae = Q.json.item_builder;
    if (ae && Array.isArray(ue) && Array.isArray(ae.prototypes)) {
      const de = [];
      return ue.forEach((ee, ge) => {
        if (ee === null || typeof ee != "object")
          return;
        const ie = Ae.preparePrototypeVariables(ae.data_element_name || "it", ee, ge);
        for (let Se = 0; Se < ae.prototypes.length; ++Se) {
          const He = ae.prototypes[Se];
          if (!He.title || He.selector !== void 0 && !Q.getJsonWithVars(He.selector, ie))
            continue;
          const te = { title: Q.getJsonWithVars(He.title, ie) };
          if (He.action) {
            const Oe = Q.getJsonWithVars(He.action, ie);
            Oe && (te.action = Oe);
          }
          de.push(te);
          break;
        }
      }), de;
    }
    return Array.isArray(De) ? De : Q.json.crumbs || [];
  }
  function Je(De, ue) {
    ue.action && (De.preventDefault(), Q.execAnyActions([ue.action]));
  }
  const ke = (De, ue) => Je(ue, De);
  return t.$$set = (De) => {
    "componentContext" in De && e(0, Q = De.componentContext), "layoutParams" in De && e(1, me = De.layoutParams);
  }, t.$$.update = () => {
    var De, ue, ae;
    t.$$.dirty & /*componentContext*/
    1 && e(15, n = Q.origJson), t.$$.dirty & /*origJson*/
    32768 && n && $e(), t.$$.dirty & /*componentContext*/
    1 && W(e(10, o = Q.getDerivedFromVars(Q.json.separator))), t.$$.dirty & /*componentContext*/
    1 && C(e(9, i = Q.getDerivedFromVars(Q.json.item_text_color))), t.$$.dirty & /*componentContext*/
    1 && T(e(8, s = Q.getDerivedFromVars(Q.json.active_text_color))), t.$$.dirty & /*componentContext*/
    1 && O(e(7, a = Q.getDerivedFromVars(Q.json.item_font_size))), t.$$.dirty & /*componentContext*/
    1 && k(e(6, l = Q.getDerivedFromVars(Q.json.crumbs))), t.$$.dirty & /*componentContext*/
    1 && m(e(5, c = typeof ((De = Q.json.item_builder) == null ? void 0 : De.data) == "string" ? Q.getDerivedFromVars((ue = Q.json.item_builder) == null ? void 0 : ue.data, void 0, !0) : (ae = Q.json.item_builder) != null && ae.data ? Go(Q.json.item_builder.data) : void 0)), t.$$.dirty & /*$jsonSeparator, separator*/
    2097156 && e(2, Ce = typeof D == "string" && D.length > 0 ? D : Ce), t.$$.dirty & /*$jsonItemTextColor, itemTextColor*/
    1052672 && e(12, he = pr(Z, 1, he)), t.$$.dirty & /*$jsonActiveTextColor, activeTextColor*/
    532480 && e(13, Ve = pr(oe, 1, Ve)), t.$$.dirty & /*$jsonItemFontSize, itemFontSize*/
    278528 && e(14, re = Gn(z, re)), t.$$.dirty & /*$jsonCrumbs, $jsonItemBuilderData*/
    196608 && e(4, u = Ge(p, _)), t.$$.dirty & /*itemTextColor, activeTextColor, itemFontSize*/
    28672 && e(3, f = {
      "--divkit-breadcrumb-item-color": he,
      "--divkit-breadcrumb-active-color": Ve,
      "--divkit-breadcrumb-font-size": pe(re)
    });
  }, [
    Q,
    me,
    Ce,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    Je,
    he,
    Ve,
    re,
    n,
    _,
    p,
    z,
    oe,
    Z,
    D,
    ke
  ];
}
class T2 extends Or {
  constructor(r) {
    super(), Lr(this, r, D2, I2, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const o_ = {
  text: C0,
  container: l1,
  separator: g1,
  image: ou,
  gif: ou,
  grid: U1,
  gallery: _b,
  tabs: Wb,
  state: dy,
  pager: Ny,
  indicator: Xy,
  slider: fw,
  input: Ow,
  select: Yw,
  video: uk,
  switch: vk,
  checkbox: Pk,
  radio: $k,
  progress: uv,
  table: zv,
  counter: Kv,
  webview: r2,
  google_map: d2,
  custom: b2,
  breadcrumb: T2
};
function Nf(t) {
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
  return o && (r = dc(o, i(t))), {
    c() {
      r && Lt(r.$$.fragment), e = Kt();
    },
    m(s, a) {
      r && Nt(r, s, a), q(s, e, a), n = !0;
    },
    p(s, a) {
      if (a & /*component*/
      4 && o !== (o = /*component*/
      s[2])) {
        if (r) {
          ir();
          const l = r;
          x(l.$$.fragment, 1, 0, () => {
            zt(l, 1);
          }), sr();
        }
        o ? (r = dc(o, i(s)), Lt(r.$$.fragment), L(r.$$.fragment, 1), Nt(r, e.parentNode, e)) : r = null;
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
      s && G(e), r && zt(r, s);
    }
  };
}
function M2(t) {
  let r, e, n = (
    /*component*/
    t[2] && Nf(t)
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
      4 && L(n, 1)) : (n = Nf(o), n.c(), L(n, 1), n.m(r.parentNode, r)) : n && (ir(), x(n, 1, 1, () => {
        n = null;
      }), sr());
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
function P2(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r;
  const i = Ir(Kr);
  let s;
  return t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext, component*/
    5) {
      const a = n.json;
      if (e(2, s = (a == null ? void 0 : a.type) && o_[a.type] || void 0), !s) {
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
class qn extends Or {
  constructor(r) {
    super(), Lr(this, r, P2, M2, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const N2 = {
  "root-svg-filters": "appkit-root-svg-filters"
};
function zf(t, r, e) {
  const n = t.slice();
  n[1] = r[e];
  const o = (
    /*filterKey*/
    n[1].split(":")
  );
  return n[2] = o[0], n[3] = o[1], n;
}
function Lf(t) {
  let r, e, n = rr([...Object.keys(
    /*svgFiltersMap*/
    t[0]
  )]), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Of(zf(t, n, i));
  return {
    c() {
      r = $r("svg"), e = $r("defs");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", N2["root-svg-filters"]), g(r, "aria-hidden", "true");
    },
    m(i, s) {
      q(i, r, s), yt(r, e);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(e, null);
    },
    p(i, s) {
      if (s & /*svgFiltersMap, Object*/
      1) {
        n = rr([...Object.keys(
          /*svgFiltersMap*/
          i[0]
        )]);
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = zf(i, n, a);
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
function z2(t) {
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
      n && G(r);
    }
  };
}
function L2(t) {
  let r;
  return {
    c() {
      r = $r("feComposite"), g(r, "in2", "SourceGraphic"), g(r, "operator", "arithmetic"), g(r, "k1", "1"), g(r, "k2", "0"), g(r, "k3", "0"), g(r, "k4", "0");
    },
    m(e, n) {
      q(e, r, n);
    },
    p: j,
    d(e) {
      e && G(r);
    }
  };
}
function O2(t) {
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
      n && G(r);
    }
  };
}
function Of(t) {
  let r, e, n, o;
  function i(l, c) {
    return (
      /*filterMode*/
      l[3] === "source_in" || /*filterMode*/
      l[3] === "source_atop" ? O2 : (
        /*filterMode*/
        l[3] === "multiply" ? L2 : z2
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
    m(l, c) {
      q(l, r, c), yt(r, e), a.m(r, null);
    },
    p(l, c) {
      c & /*svgFiltersMap*/
      1 && n !== (n = /*filterColor*/
      l[2]) && g(e, "flood-color", n), s === (s = i(l)) && a ? a.p(l, c) : (a.d(1), a = s(l), a && (a.c(), a.m(r, null))), c & /*svgFiltersMap*/
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
function B2(t) {
  let r = Object.keys(
    /*svgFiltersMap*/
    t[0]
  ).length, e, n = r && Lf(t);
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
      ).length), r ? n ? n.p(o, i) : (n = Lf(o), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: j,
    o: j,
    d(o) {
      o && G(e), n && n.d(o);
    }
  };
}
function R2(t, r, e) {
  let { svgFiltersMap: n } = r;
  return t.$$set = (o) => {
    "svgFiltersMap" in o && e(0, n = o.svgFiltersMap);
  }, [n];
}
class H2 extends Or {
  constructor(r) {
    super(), Lr(this, r, R2, B2, Sr, { svgFiltersMap: 0 });
  }
}
function W2(t, r, e, n) {
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
  function a(c, u) {
    const f = Object.keys(u).filter((m) => m !== "__proto__"), _ = f.filter((m) => m.charAt(0) !== "$"), h = f.filter((m) => m.charAt(0) === "$");
    return _.forEach((m) => {
      const p = u[m];
      typeof p == "object" && p !== null ? (c[m] = Array.isArray(p) ? [] : {}, a(c[m], p)) : c[m] = p;
    }), h.forEach((m) => {
      const p = u[m], w = s[p];
      if (w !== void 0) {
        const k = m.substring(1);
        c[k] = w;
      }
    }), c;
  }
  const l = a({}, o);
  for (i in t)
    i === "type" || i === "__proto__" || t.hasOwnProperty(i) && (l[i] = t[i]);
  return {
    json: l,
    templateContext: s
  };
}
const U2 = 128, Ii = /* @__PURE__ */ new Map();
let Bf;
function i_(t) {
  return Ii.get(t);
}
function s_(t, r) {
  t !== Bf && (Ii.delete(t), Ii.size >= U2 && Ii.delete(Ii.keys().next().value), Ii.set(t, r), Bf = t);
}
const Rf = /* @__PURE__ */ new Set([
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
function G2(t) {
  if (!(typeof t.name == "string" && t.name))
    throw new Error("Incorrect function name");
  if (!(typeof t.body == "string" && t.body))
    throw new Error("Incorrect function body");
  if (!(t.return_type && Rf.has(t.return_type)))
    throw new Error("Incorrect function return_type");
  if (!Array.isArray(t.arguments))
    throw new Error("Incorrect function arguments");
  const r = /* @__PURE__ */ new Set();
  t.arguments.forEach((e) => {
    if (!(typeof e.name == "string" && e.name))
      throw new Error("Incorrect argument name");
    if (!(e.type && Rf.has(e.type)))
      throw new Error("Incorrect argument type");
    if (r.has(e.name))
      throw new Error("Duplicate argument name");
    r.add(e.name);
  });
}
function J2(t) {
  let r;
  return {
    name: t.name,
    args: t.arguments.map((e) => ({
      type: e.type
    })),
    cb(e, ...n) {
      r || (r = i_(t.body) || $s(t.body, {
        startRule: "JsonStringContents"
      }), s_(t.body, r));
      const o = /* @__PURE__ */ new Map();
      n.forEach((a, l) => {
        if (a.type === "function")
          throw new Error("Incorrect argument type: function");
        const c = zs(t.arguments[l].name, a.type, a.value);
        o.set(c.getName(), c);
      });
      const i = _l(o, e.customFunctions, e.store, r, {
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
function q2(t, r) {
  if (!t)
    return r || void 0;
  if (!r)
    return t || void 0;
  const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
  for (const [o, i] of r) {
    for (const s of i) {
      const a = Ta(o, s);
      n.add(a);
    }
    e.set(o, i);
  }
  for (const [o, i] of t)
    for (const s of i) {
      const a = Ta(o, s);
      if (!n.has(a)) {
        n.add(a);
        const l = e.get(o) || [];
        l.push(s), e.set(o, l);
      }
    }
  return e;
}
function K2(t) {
  if (!t)
    return Y(new Error("Missing object"));
  const r = t.card, e = t.templates || {};
  if (!r)
    return Y(new Error("Missing card"));
  if (!r.states || !r.states.length)
    return Y(new Error("Missing states"));
  for (const n in e)
    if (e.hasOwnProperty(n) && n in o_)
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
function Y2(t) {
  return [...new Set(t)];
}
class l_ {
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
      a = _l(r, e, o, this.ast, {
        weekStartDay: i
      }), a.warnings.forEach(n);
      const c = a.result;
      if (c.type === "error")
        return n(Y(new Error("Expression execution error"), {
          additional: {
            message: c.value,
            expression: this.expr
          }
        })), {
          result: void 0,
          usedVars: a.usedVars
        };
      const u = c.value;
      if (u instanceof Date)
        return {
          result: sd(u),
          usedVars: a.usedVars
        };
      if (c.type === "boolean")
        return {
          result: !!u,
          usedVars: a.usedVars
        };
      if (c.type === "color") {
        const f = _o(String(u));
        if (f)
          return {
            result: ji(f),
            usedVars: a.usedVars
          };
        n(Y(new Error("Expression execution error")));
      }
      if (c.type === "integer")
        return u > S_ || u < V_ ? (n(Y(new Error("Expression result is out of 32-bit int range"))), {
          result: void 0,
          usedVars: a.usedVars
        }) : {
          result: Number(u),
          usedVars: a.usedVars
        };
      if (c.type === "function")
        return {
          result: `<${((l = c.value[0]) == null ? void 0 : l.name) || "Function"}>`,
          usedVars: a.usedVars
        };
      if (!s && (c.type === "array" || c.type === "dict"))
        try {
          return {
            result: JSON.stringify(u),
            usedVars: a.usedVars
          };
        } catch {
          return n(Y(new Error(`Failed to stringify ${c.type}`))), {
            result: `<${c.type}>`,
            usedVars: a.usedVars
          };
        }
      return {
        result: u,
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
function X2(t) {
  return t.indexOf("@{") > -1 || t.indexOf("\\") > -1;
}
function oa(t, r, e, n) {
  if (t)
    if (typeof t == "string") {
      if (X2(t)) {
        r.hasExpression = !0;
        try {
          const o = i_(t) || $s(t, {
            startRule: "JsonStringContents"
          });
          s_(t, o);
          const i = P_(o);
          return r.vars.push(...i), new l_(o, t);
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
        return t.map((o) => oa(o, r, e, n - 1));
      if (typeof t == "object" && n > 0) {
        const o = {};
        for (const i in t)
          o[i] = oa(t[i], r, e, n - 1);
        return o;
      }
    }
  return t;
}
function ia(t, r) {
  if (t) {
    if (t instanceof l_)
      return t.apply(r);
    if (Array.isArray(t)) {
      let e;
      return {
        result: t.map((o) => {
          const i = ia(o, r);
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
        const i = ia(t[o], r);
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
function Hf(t, r, e, n, o = 1 / 0) {
  const i = {
    vars: [],
    hasExpression: !1
  }, s = oa(t, i, r, o);
  return {
    vars: Y2(i.vars),
    hasExpression: i.hasExpression,
    applyVars(l, c, u) {
      return ia(s, {
        variables: l,
        customFunctions: c,
        logError: r,
        store: e,
        weekStartDay: n,
        keepComplex: u
      });
    }
  };
}
class a_ {
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
function Q3() {
  return new a_();
}
const Z2 = ["start", "stop", "pause", "resume", "cancel", "reset"], Q2 = new Set(Z2);
class x2 {
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
    if (!r || !e || !this.timers.has(r) || !Q2.has(e)) {
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
function $2(t, r, e, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number" && i !== void 0) {
    e(Y(new Error("Incorrect array_insert_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Ca(t, r, e, n, (a) => {
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
      const c = l.slice(), u = rl(s);
      typeof i == "number" ? c.splice(i, 0, u) : c.push(u), a.setValue(c);
    }
  });
}
function e3(t, r, e, n) {
  const { variable_name: o, index: i } = n;
  if (typeof i != "number") {
    e(Y(new Error("Incorrect array_remove_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Ca(t, r, e, n, (s) => {
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
function t3(t, r, e, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number") {
    e(Y(new Error("Incorrect array_set_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Ca(t, r, e, n, (a) => {
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
      const c = l.slice();
      c[i] = rl(s), a.setValue(c);
    }
  });
}
function Ca(t, r, e, n, o) {
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
function r3(t, r, e, n) {
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
    const u = { ...a.getValue() };
    s ? u[i] = rl(s) : delete u[i], a.setValue(u);
  } else
    e(Y(new Error("Trying to set value into the non-dict"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function n3(t, r) {
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
function o3(t) {
  if (t === "normal" || t === "reverse" || t === "alternate" || t === "alternate_reverse")
    return t;
}
function i3(t, r, e, n) {
  var H, O, oe, fe;
  const o = Gn(t.duration, 0);
  if (!o || t.type !== "color_animator" && t.type !== "number_animator")
    return;
  const i = (H = t.start_value_typed ? t.start_value_typed.value : t.start_value) != null ? H : r.getValue(), s = t.end_value_typed ? t.end_value_typed.value : t.end_value;
  if (i === void 0 || s === void 0 || t.type === "color_animator" && (typeof i != "string" && i !== void 0 || typeof s != "string") || t.type === "number_animator" && (typeof i != "number" && i !== void 0 || typeof s != "number"))
    return;
  const a = t.type === "color_animator" && _o(i), l = t.type === "color_animator" && _o(s);
  if (t.type === "color_animator" && (!a || !l))
    return;
  const c = en(t.start_delay, 0), u = va(t.interpolator || "linear"), f = o3(t.direction) || "normal", _ = ((O = t.repeat_count) == null ? void 0 : O.type) === "infinity" ? 1 / 0 : ((oe = t.repeat_count) == null ? void 0 : oe.type) === "fixed" ? en((fe = t.repeat_count) == null ? void 0 : fe.value, 1) : 1;
  let h = 0, m = performance.now();
  const p = _ === 1 / 0 ? 1 / 0 : _ * o + c;
  function w(T) {
    if (t.type === "color_animator") {
      if (!a || !l)
        throw new Error("Missing start/end value");
      return ji({
        a: Fo(Wo(a.a, l.a, T), 0, 255),
        r: Fo(Wo(a.r, l.r, T), 0, 255),
        g: Fo(Wo(a.g, l.g, T), 0, 255),
        b: Fo(Wo(a.b, l.b, T), 0, 255)
      });
    }
    return Wo(i, s, T);
  }
  function k(T) {
    const Z = T - m;
    if (m = T, h += Z, h >= c) {
      let ce = Math.floor((h - c) / o), C = (h - c - ce * o) / o;
      ce >= _ && (ce = _ - 1, C = 1);
      let D;
      f === "normal" || f === "alternate" && ce % 2 === 0 || f === "alternate_reverse" && ce % 2 === 1 ? D = "normal" : D = "reverse", D === "reverse" && (C = 1 - C);
      const M = w(u(C));
      r.setValue(M);
    }
    h < p ? z = requestAnimationFrame(k) : (e(), n(t.end_actions));
  }
  let z = requestAnimationFrame(k);
  return {
    stop() {
      cancelAnimationFrame(z), n(t.cancel_actions), n(t.end_actions);
    }
  };
}
function s3(t) {
  let r = t;
  for (; r && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function l3(t) {
  let r = t;
  for (; r != null && r.parent && r.json.type !== "state" && !r.isRootState && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function Qs(t) {
  return !!(t && typeof t == "string");
}
const a3 = /* @__PURE__ */ new Set([
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "head",
  "options"
]);
function c3(t) {
  return t === void 0 || a3.has(t);
}
function u3(t) {
  return t === void 0 || Array.isArray(t) && t.every((r) => Qs(r.name) && Qs(r.value));
}
function f3(t) {
  var r, e, n;
  return Qs(t.container_id) && Qs((r = t.request) == null ? void 0 : r.url) && c3((e = t.request) == null ? void 0 : e.method) && u3((n = t.request) == null ? void 0 : n.headers);
}
function d3(t, r, e, n) {
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
    const c = a.getValue(), u = i.replace(/\/+/g, "/");
    if (u === "/") {
      e(Y(new Error(`Value '${i}' for key 'path' is not valid`), {
        additional: {
          name: o,
          type: l,
          path: i
        }
      }));
      return;
    }
    const f = u.split("/"), _ = l === "array" ? c.slice() : { ...c };
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
    h[f[f.length - 1]] = rl(s), a.setValue(_);
  } else
    e(Y(new Error("Action requires array or dictionary variable"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function Wf(t, { delay: r = 0, duration: e = 400, easing: n = Qd, x: o = 0, y: i = 0, opacity: s = 0 } = {}) {
  const a = getComputedStyle(t), l = +a.opacity, c = a.transform === "none" ? "" : a.transform, u = l * (1 - s), [f, _] = cc(o), [h, m] = cc(i);
  return {
    delay: r,
    duration: e,
    easing: n,
    css: (p, w) => `
			transform: ${c} translate(${(1 - p) * f}${_}, ${(1 - p) * h}${m});
			opacity: ${l - u * w}`
  };
}
const _3 = "appkit-outer", p3 = "appkit-root__clickable", g3 = "undefined", h3 = "appkit-tooltip", m3 = "appkit-tooltip_visible", b3 = "appkit-tooltip_modal", y3 = "appkit-tooltip__inner", w3 = "appkit-tooltip__overlay", k3 = "appkit-tooltip__substrate", vo = {
  outer: _3,
  root__clickable: p3,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  root__selectable: g3,
  tooltip: h3,
  tooltip_visible: m3,
  tooltip_modal: b3,
  tooltip__inner: y3,
  tooltip__overlay: w3,
  tooltip__substrate: k3
}, c_ = 300, u_ = 0;
function sa(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || c_) + (Number(r.start_delay) || u_)
  ));
}
function xs(t, {
  animations: r,
  direction: e
}) {
  if (!r)
    return {};
  const n = ls(r), o = sa(n);
  return n.some((s) => s.name === "no_animation") ? {} : {
    duration: Li() ? 0 : o,
    css: (s) => {
      const a = s * o, l = n.map((p) => {
        var oe, fe, T, Z, ce, C, D, M, W, Q, me, Ae;
        const w = Number(p.start_delay) || u_, k = Number(p.duration) || c_, z = e === "in" ? Math.max(0, Math.min(1, (a - w) / k)) : Math.max(0, Math.min(1, (a - (o - k) + w) / k)), O = (va(p.interpolator || "ease_in_out") || wl)(z);
        if (p.name === "fade") {
          const Ce = e === "in" ? (oe = p.start_value) != null ? oe : 0 : (fe = p.end_value) != null ? fe : 0, he = e === "in" ? (T = p.end_value) != null ? T : 1 : (Z = p.start_value) != null ? Z : 1;
          return {
            active: O > 0 && O < 1,
            opacity: (1 - O) * Ce + O * he
          };
        } else if (p.name === "translate") {
          const Ce = -(e === "in" ? (ce = p.start_value) != null ? ce : 10 : (C = p.end_value) != null ? C : 10), he = -(e === "in" ? (D = p.end_value) != null ? D : 0 : (M = p.start_value) != null ? M : 0);
          return {
            active: O > 0 && O < 1,
            translate: `translateY(${(1 - O) * Ce + O * he}${e === "in" && p.start_value !== void 0 || e === "out" && p.end_value !== void 0 ? "%" : "px"})`
          };
        } else if (p.name === "scale") {
          const Ce = e === "in" ? (W = p.start_value) != null ? W : 0 : (Q = p.end_value) != null ? Q : 0, he = e === "in" ? (me = p.end_value) != null ? me : 1 : (Ae = p.start_value) != null ? Ae : 1;
          return {
            active: O > 0 && O < 1,
            scale: `scale(${(1 - O) * Ce + O * he})`
          };
        }
        return {};
      }), c = l.map((p) => p.opacity).filter((p) => p !== void 0).reduce((p, w) => p * w, 1), u = l.map((p) => p.translate).filter((p) => p !== void 0).join(" "), f = l.map((p) => p.scale).filter((p) => p !== void 0).join(" "), _ = l.filter((p) => p.active).map((p) => p.scale).filter((p) => p !== void 0), h = _.length ? _[_.length - 1] : f;
      return `transform:${[u, h].filter(Boolean).join(" ") || "none"};opacity:${c}`;
    }
  };
}
const $i = typeof window < "u" && "HTMLDialogElement" in window, { document: v3, window: j3 } = Po;
function C3(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _ = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && Uf(t)
  ), h = (
    /*substrateComponentContext*/
    t[14] && Gf(t)
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
      _ && _.c(), r = gr(), h && h.c(), e = gr(), n = Te("div"), o = Te("div"), Lt(i.$$.fragment), g(o, "class", vo.tooltip__inner), g(n, "class", s = ht(
        "tooltip",
        vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Cr.root_platform_desktop : "")), g(n, "role", "dialog"), g(
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
      _ && _.m(m, p), q(m, r, p), h && h.m(m, p), q(m, e, p), q(m, n, p), yt(n, o), Nt(i, o, null), t[40](o), t[41](n), c = !0, u || (f = [
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
      ], u = !0);
    },
    p(m, p) {
      t = m, /*visible*/
      t[1] && /*modal*/
      t[3] ? _ ? _.p(t, p) : (_ = Uf(t), _.c(), _.m(r.parentNode, r)) : _ && (_.d(1), _ = null), /*substrateComponentContext*/
      t[14] ? h ? (h.p(t, p), p[0] & /*substrateComponentContext*/
      16384 && L(h, 1)) : (h = Gf(t), h.c(), L(h, 1), h.m(e.parentNode, e)) : h && (ir(), x(h, 1, 1, () => {
        h = null;
      }), sr());
      const w = {};
      p[0] & /*componentContext*/
      4 && (w.componentContext = /*componentContext*/
      t[2]), i.$set(w), (!c || p[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = ht(
        "tooltip",
        vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Cr.root_platform_desktop : ""))) && g(n, "class", s), (!c || p[0] & /*modal*/
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
      c || (L(h), L(i.$$.fragment, m), go(() => {
        c && (l && l.end(1), a = dl(n, xs, {
          animations: (
            /*$animationIn*/
            t[5] || Ri
          ),
          direction: "in"
        }), a.start());
      }), c = !0);
    },
    o(m) {
      x(h), x(i.$$.fragment, m), a && a.invalidate(), l = Cd(n, xs, {
        animations: (
          /*$animationOut*/
          t[4] || Ri
        ),
        direction: "out"
      }), c = !1;
    },
    d(m) {
      m && (G(r), G(e), G(n)), _ && _.d(m), h && h.d(m), zt(i), t[40](null), t[41](null), m && l && l.end(), u = !1, Jr(f);
    }
  };
}
function E3(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _ = (
    /*substrateComponentContext*/
    t[14] && Jf(t)
  ), h = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && /*data*/
    t[0].background_accessibility_description && qf(t)
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
      _ && _.c(), r = gr(), e = Te("dialog"), h && h.c(), n = gr(), o = Te("div"), Lt(i.$$.fragment), g(o, "class", vo.tooltip__inner), g(e, "class", s = ht(
        "tooltip",
        vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Cr.root_platform_desktop : "")), F(
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
      _ && _.m(m, p), q(m, r, p), q(m, e, p), h && h.m(e, null), yt(e, n), yt(e, o), Nt(i, o, null), t[36](o), t[37](e), c = !0, u || (f = [
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
      ], u = !0);
    },
    p(m, p) {
      t = m, /*substrateComponentContext*/
      t[14] ? _ ? (_.p(t, p), p[0] & /*substrateComponentContext*/
      16384 && L(_, 1)) : (_ = Jf(t), _.c(), L(_, 1), _.m(r.parentNode, r)) : _ && (ir(), x(_, 1, 1, () => {
        _ = null;
      }), sr()), /*visible*/
      t[1] && /*modal*/
      t[3] && /*data*/
      t[0].background_accessibility_description ? h ? h.p(t, p) : (h = qf(t), h.c(), h.m(e, n)) : h && (h.d(1), h = null);
      const w = {};
      p[0] & /*componentContext*/
      4 && (w.componentContext = /*componentContext*/
      t[2]), i.$set(w), (!c || p[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = ht(
        "tooltip",
        vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Cr.root_platform_desktop : ""))) && g(e, "class", s), p[0] & /*tooltipY*/
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
      c || (L(_), L(i.$$.fragment, m), go(() => {
        c && (l && l.end(1), a = dl(e, xs, {
          animations: (
            /*$animationIn*/
            t[5] || Ri
          ),
          direction: "in"
        }), a.start());
      }), c = !0);
    },
    o(m) {
      x(_), x(i.$$.fragment, m), a && a.invalidate(), l = Cd(e, xs, {
        animations: (
          /*$animationOut*/
          t[4] || Ri
        ),
        direction: "out"
      }), c = !1;
    },
    d(m) {
      m && (G(r), G(e)), _ && _.d(m), h && h.d(), zt(i), t[36](null), t[37](null), m && l && l.end(), u = !1, Jr(f);
    }
  };
}
function Uf(t) {
  let r;
  function e(i, s) {
    return (
      /*data*/
      i[0].background_accessibility_description ? S3 : A3
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
      i && G(r), o.d(i);
    }
  };
}
function A3(t) {
  let r, e, n;
  return {
    c() {
      r = Te("div"), g(r, "class", vo.tooltip__overlay);
    },
    m(o, i) {
      q(o, r, i), e || (n = Qe(
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
function S3(t) {
  let r, e, n, o;
  return {
    c() {
      r = Te("button"), g(r, "class", vo.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", e = /*data*/
      t[0].background_accessibility_description);
    },
    m(i, s) {
      q(i, r, s), n || (o = Qe(
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
function Gf(t) {
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
      r = Te("div"), Lt(e.$$.fragment), n = gr(), o = Te("div"), g(r, "class", vo.tooltip__substrate);
    },
    m(s, a) {
      q(s, r, a), Nt(e, r, null), t[38](r), q(s, n, a), q(s, o, a), t[39](o), i = !0;
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
      s && (G(r), G(n), G(o)), zt(e), t[38](null), t[39](null);
    }
  };
}
function Jf(t) {
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
      r = Te("div"), Lt(e.$$.fragment), n = gr(), o = Te("div"), g(r, "class", vo.tooltip__substrate);
    },
    m(s, a) {
      q(s, r, a), Nt(e, r, null), t[34](r), q(s, n, a), q(s, o, a), t[35](o), i = !0;
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
      s && (G(r), G(n), G(o)), zt(e), t[34](null), t[35](null);
    }
  };
}
function qf(t) {
  let r, e, n, o;
  return {
    c() {
      r = Te("button"), g(r, "class", vo.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", e = /*data*/
      t[0].background_accessibility_description);
    },
    m(i, s) {
      q(i, r, s), n || (o = Qe(
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
function V3(t) {
  let r, e, n, o, i, s, a;
  const l = [E3, C3], c = [];
  function u(f, _) {
    return $i ? 0 : 1;
  }
  return e = u(), n = c[e] = l[e](t), {
    c() {
      r = gr(), n.c(), o = Kt();
    },
    m(f, _) {
      q(f, r, _), c[e].m(f, _), q(f, o, _), i = !0, s || (a = [
        Qe(
          j3,
          "resize",
          /*onWindowResize*/
          t[25]
        ),
        Qe(
          v3.body,
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
      f && (G(r), G(o)), c[e].d(f), s = !1, Jr(a);
    }
  };
}
const Ri = {
  name: "set",
  items: [{ name: "translate" }, { name: "fade" }]
};
let Xn = [];
function F3(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _ = j, h = () => (_(), _ = S(i, (I) => e(46, f = I)), i), m, p = j, w = () => (p(), p = S(o, (I) => e(47, m = I)), o), k, z = j, H = () => (z(), z = S(n, (I) => e(48, k = I)), n), O, oe = j, fe = () => (oe(), oe = S(a, (I) => e(4, O = I)), a), T, Z = j, ce = () => (Z(), Z = S(s, (I) => e(5, T = I)), s), C;
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Z());
  let { ownerNode: D } = r, { data: M } = r, { internalId: W } = r, { parentComponentContext: Q } = r;
  const me = Ir(Kr), Ae = me.isDesktop;
  yn(t, Ae, (I) => e(21, C = I));
  const Ce = Date.now();
  let he, Ve, re, $e, Ge = !1, Je = "", ke = "", De = "", ue = "", ae = null, de, ee, ge = !0, ie = null;
  function Se() {
    var pt, we;
    if (!he || !D)
      return;
    const I = he.parentElement;
    if (!I)
      return;
    const jt = he.style.cssText;
    e(6, he.style.cssText += ";transform: none !important", he);
    const _t = D.getBoundingClientRect(), At = he.getBoundingClientRect(), Dt = I.getBoundingClientRect();
    e(6, he.style.cssText = jt, he);
    let ot = 0, K = 0, Mt = null, Vt = null, Jt = 0, qt = 0;
    const be = (pt = de == null ? void 0 : de.json) == null ? void 0 : pt.width, Ke = (we = de == null ? void 0 : de.json) == null ? void 0 : we.height;
    if (!be || be.type === "match_parent" ? Jt = Mt = window.innerWidth : be.type === "fixed" && be.value ? Jt = Mt = be.value : Jt = At.width, (Ke == null ? void 0 : Ke.type) === "match_parent" ? qt = Vt = window.innerHeight : (Ke == null ? void 0 : Ke.type) === "fixed" && Ke.value ? qt = Vt = Ke.value : qt = At.height, k === "left" || k === "bottom-left" || k === "top-left")
      ot = _t.left - Jt;
    else if (k === "top" || k === "bottom" || k === "center")
      ot = (_t.left + _t.right) / 2 - Jt / 2;
    else if (k === "right" || k === "bottom-right" || k === "top-right")
      ot = _t.right;
    else
      return;
    if (k === "top" || k === "top-left" || k === "top-right")
      K = _t.top - qt;
    else if (k === "left" || k === "right" || k === "center")
      K = (_t.top + _t.bottom) / 2 - qt / 2;
    else if (k === "bottom-left" || k === "bottom" || k === "bottom-right")
      K = _t.bottom;
    else
      return;
    $i && ge || (ot -= Dt.left, K -= Dt.top), ot += m || 0, K += f || 0, e(10, Je = `${ot}px`), e(11, ke = `${K}px`), e(12, De = Mt !== null ? `${Mt}px` : ""), e(13, ue = Vt !== null ? `${Vt}px` : ""), e(1, Ge = !0), Mt === null || Vt === null ? typeof ResizeObserver < "u" && !ae && (ae = new ResizeObserver(() => {
      requestAnimationFrame(Se);
    }), ae.observe(he)) : ae == null || ae.disconnect();
  }
  function He(I) {
    if (Xn.length && Xn[Xn.length - 1] !== he)
      return;
    const jt = I.composedPath();
    Date.now() - Ce < 100 || jt.includes(he) && !($i && jt[0] === he) || We();
  }
  function We(I) {
    I == null || I.stopPropagation(), I == null || I.preventDefault(), de.getJsonWithVars(M.close_by_tap_outside) !== !1 && (Xn = Xn.filter((jt) => jt !== he), me.onTooltipClose(W)), M.tap_outside_actions && de.execAnyActions(M.tap_outside_actions, { processUrls: !0 });
  }
  function te() {
    Se();
  }
  function Oe(I) {
    Xn.length && Xn[Xn.length - 1] !== he || I.key === "Escape" && !I.ctrlKey && !I.shiftKey && !I.altKey && !I.metaKey && (Xn = Xn.filter((jt) => jt !== he), me.onTooltipClose(W));
  }
  function Pe(I) {
    Xn = Xn.filter((jt) => jt !== he), me.onTooltipClose(W), I.preventDefault();
  }
  function nt() {
    re && re.animate({ opacity: [0, 1] }, {
      duration: l,
      easing: "ease-in-out"
    });
  }
  function st() {
    re && he.insertBefore(re, Ve);
  }
  function et() {
    $e != null && $e.parentElement && re && ($e.parentElement.insertBefore(re, $e), re.animate({ opacity: [1, 0] }, {
      duration: c,
      easing: "ease-in-out"
    }));
  }
  xn(() => {
    try {
      ie = document.activeElement;
    } catch {
    }
    if (me.tooltipRoot) {
      const I = window.getComputedStyle(he);
      e(6, he.style.fontSize = I.fontSize, he), e(6, he.style.fontFamily = I.fontFamily, he), e(6, he.style.lineHeight = I.lineHeight, he), me.tooltipRoot.appendChild(he);
    }
    $i && he && he instanceof HTMLDialogElement && he[ge ? "showModal" : "show"](), ge && Xn.push(he);
  }), fl(() => {
    Ge || Se();
  }), sn(() => {
    if (de && de.destroy(), ee && ee.destroy(), ae == null || ae.disconnect(), Xn = Xn.filter((I) => I !== he), ge && ie && ie instanceof HTMLElement) {
      $i && he && he instanceof HTMLDialogElement && he.close();
      try {
        ie.focus({ preventScroll: !0 });
      } catch {
      }
    }
  });
  function wt(I) {
    Fr[I ? "unshift" : "push"](() => {
      re = I, e(8, re);
    });
  }
  function rt(I) {
    Fr[I ? "unshift" : "push"](() => {
      $e = I, e(9, $e);
    });
  }
  function Pt(I) {
    Fr[I ? "unshift" : "push"](() => {
      Ve = I, e(7, Ve);
    });
  }
  function ct(I) {
    Fr[I ? "unshift" : "push"](() => {
      he = I, e(6, he);
    });
  }
  function X(I) {
    Fr[I ? "unshift" : "push"](() => {
      re = I, e(8, re);
    });
  }
  function _e(I) {
    Fr[I ? "unshift" : "push"](() => {
      $e = I, e(9, $e);
    });
  }
  function lt(I) {
    Fr[I ? "unshift" : "push"](() => {
      Ve = I, e(7, Ve);
    });
  }
  function Fe(I) {
    Fr[I ? "unshift" : "push"](() => {
      he = I, e(6, he);
    });
  }
  return t.$$set = (I) => {
    "ownerNode" in I && e(31, D = I.ownerNode), "data" in I && e(0, M = I.data), "internalId" in I && e(32, W = I.internalId), "parentComponentContext" in I && e(33, Q = I.parentComponentContext);
  }, t.$$.update = () => {
    var I, jt, _t, At, Dt;
    t.$$.dirty[0] & /*componentContext, data*/
    5 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && (de && de.destroy(), e(2, de = Q.produceChildContext(M.div || {}, { isTooltipRoot: !0 })), M.substrate_div && e(14, ee = Q.produceChildContext(M.substrate_div, { isTooltipRoot: !0 }))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && H(e(20, n = Q.getDerivedFromVars(M.position))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && w(e(19, o = Q.getDerivedFromVars((jt = (I = M.offset) == null ? void 0 : I.x) == null ? void 0 : jt.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && h(e(18, i = Q.getDerivedFromVars((At = (_t = M.offset) == null ? void 0 : _t.y) == null ? void 0 : At.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && ce(e(17, s = Q.getDerivedFromVars(M.animation_in))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && fe(e(16, a = Q.getDerivedFromVars(M.animation_out))), t.$$.dirty[0] & /*$animationIn*/
    32 && (l = Li() ? 0 : sa(ls(T || Ri))), t.$$.dirty[0] & /*$animationOut*/
    16 && (c = Li() ? 0 : sa(ls(O || Ri))), t.$$.dirty[0] & /*data*/
    1 && (((Dt = M.mode) == null ? void 0 : Dt.type) === "non_modal" ? e(3, ge = !1) : e(3, ge = !0)), t.$$.dirty[0] & /*visible, modal*/
    10 && e(15, u = { visible: Ge, modal: ge });
  }, [
    M,
    Ge,
    de,
    ge,
    O,
    T,
    he,
    Ve,
    re,
    $e,
    Je,
    ke,
    De,
    ue,
    ee,
    u,
    a,
    s,
    i,
    o,
    n,
    C,
    Ae,
    He,
    We,
    te,
    Oe,
    Pe,
    nt,
    st,
    et,
    D,
    W,
    Q,
    wt,
    rt,
    Pt,
    ct,
    X,
    _e,
    lt,
    Fe
  ];
}
class I3 extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      F3,
      V3,
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
const D3 = "appkit-root_platform_desktop", T3 = "appkit-menu", M3 = "appkit-menu_visible", P3 = "appkit-menu__list", N3 = "appkit-menu__item", Os = {
  root_platform_desktop: D3,
  menu: T3,
  menu_visible: M3,
  menu__list: P3,
  menu__item: N3
}, { window: Kf } = Po;
function Yf(t, r, e) {
  const n = t.slice();
  return n[23] = r[e], n;
}
function z3(t) {
  let r = (
    /*item*/
    t[23].text + ""
  ), e;
  return {
    c() {
      e = Jn(r);
    },
    m(n, o) {
      q(n, e, o);
    },
    p(n, o) {
      o & /*items*/
      1 && r !== (r = /*item*/
      n[23].text + "") && ro(e, r);
    },
    d(n) {
      n && G(e);
    }
  };
}
function Xf(t) {
  let r, e, n, o;
  return e = new hl({
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
      cls: Os.menu__item + " " + /*itemMix*/
      t[10],
      customAction: (
        /*onItemAction*/
        t[14]
      ),
      $$slots: { default: [z3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      r = Te("li"), Lt(e.$$.fragment), n = gr();
    },
    m(i, s) {
      q(i, r, s), Nt(e, r, null), yt(r, n), o = !0;
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
      i && G(r), zt(e);
    }
  };
}
function L3(t) {
  let r, e, n, o, i, s, a, l = rr(
    /*items*/
    t[0]
  ), c = [];
  for (let f = 0; f < l.length; f += 1)
    c[f] = Xf(Yf(t, l, f));
  const u = (f) => x(c[f], 1, 1, () => {
    c[f] = null;
  });
  return {
    c() {
      r = Te("div"), e = Te("ul");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      g(e, "class", Os.menu__list), g(r, "class", n = ht(
        "menu",
        Os,
        /*mods*/
        t[7]
      ) + " " + /*$isDesktop*/
      (t[8] ? Cr.root_platform_desktop : "") + " " + /*popupMix*/
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
      q(f, r, _), yt(r, e);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(e, null);
      t[17](r), i = !0, s || (a = [
        Qe(
          Kf,
          "click",
          /*onWindowClick*/
          t[12]
        ),
        Qe(
          Kf,
          "resize",
          /*onWindowResize*/
          t[13]
        )
      ], s = !0);
    },
    p(f, [_]) {
      if (_ & /*parentComponentContext, items, itemMix, onItemAction*/
      17411) {
        l = rr(
          /*items*/
          f[0]
        );
        let h;
        for (h = 0; h < l.length; h += 1) {
          const m = Yf(f, l, h);
          c[h] ? (c[h].p(m, _), L(c[h], 1)) : (c[h] = Xf(m), c[h].c(), L(c[h], 1), c[h].m(e, null));
        }
        for (ir(), h = l.length; h < c.length; h += 1)
          u(h);
        sr();
      }
      (!i || _ & /*mods, $isDesktop*/
      384 && n !== (n = ht(
        "menu",
        Os,
        /*mods*/
        f[7]
      ) + " " + /*$isDesktop*/
      (f[8] ? Cr.root_platform_desktop : "") + " " + /*popupMix*/
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
          L(c[_]);
        f && go(() => {
          i && (o || (o = pc(r, Wf, { y: 20 }, !0)), o.run(1));
        }), i = !0;
      }
    },
    o(f) {
      c = c.filter(Boolean);
      for (let _ = 0; _ < c.length; _ += 1)
        x(c[_]);
      f && (o || (o = pc(r, Wf, { y: 20 }, !1)), o.run(0)), i = !1;
    },
    d(f) {
      f && G(r), on(c, f), t[17](null), f && o && o.end(), s = !1, Jr(a);
    }
  };
}
function O3(t, r, e) {
  let n, o, { ownerNode: i } = r, { items: s } = r, { parentComponentContext: a } = r;
  const l = Ir(Kr), c = l.getCustomization("menuPopupClass") || "", u = l.getCustomization("menuItemClass") || "", f = l.isDesktop;
  yn(t, f, (C) => e(8, o = C));
  const _ = Date.now(), h = ph();
  let m, p = !1, w = "", k = "", z = "", H = "", O = null;
  function oe() {
    if (!m || !i)
      return;
    const C = m.parentElement;
    if (!C)
      return;
    const D = i.getBoundingClientRect(), M = m.getBoundingClientRect(), W = C.getBoundingClientRect(), Q = window.innerWidth, me = window.innerHeight;
    let Ae = 0, Ce = 0, he = M.width, Ve = M.height;
    Ae = D.left - W.left, Ce = D.bottom - W.top, Ae + he > Q && (Ae = Q - he), Ae < 0 && (Ae = 0), Ce + Ve > me && (D.top - W.top - Ve > 0 ? Ce = D.top - W.top - Ve : Ce = me - Ve), Ce < 0 && (Ce = 0), e(3, w = `${Ae}px`), e(4, k = `${Ce}px`), e(5, z = ""), e(6, H = ""), e(16, p = !0), typeof ResizeObserver < "u" && !O && (O = new ResizeObserver(() => {
      requestAnimationFrame(oe);
    }), O.observe(m));
  }
  function fe(C) {
    Date.now() - _ < 100 || C.composedPath().includes(m) || h("close");
  }
  function T() {
    oe();
  }
  function Z() {
    return h("close"), !0;
  }
  xn(() => {
    if (l.tooltipRoot) {
      const C = window.getComputedStyle(m);
      e(2, m.style.fontSize = C.fontSize, m), e(2, m.style.fontFamily = C.fontFamily, m), e(2, m.style.lineHeight = C.lineHeight, m), l.tooltipRoot.appendChild(m);
    }
  }), fl(() => {
    p || oe();
  }), sn(() => {
    O == null || O.disconnect();
  });
  function ce(C) {
    Fr[C ? "unshift" : "push"](() => {
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
    z,
    H,
    n,
    o,
    c,
    u,
    f,
    fe,
    T,
    Z,
    i,
    p,
    ce
  ];
}
class B3 extends Or {
  constructor(r) {
    super(), Lr(this, r, O3, L3, Sr, {
      ownerNode: 15,
      items: 0,
      parentComponentContext: 1
    });
  }
}
const { Map: R3 } = Po;
function Zf(t, r, e) {
  const n = t.slice();
  return n[134] = r[e], n;
}
function Qf(t) {
  let r, e, n, o, i, s, a, l, c, u;
  e = new H2({
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
    t[3] && xf(t)
  ), _ = (
    /*menu*/
    t[4] && ed(t)
  );
  return {
    c() {
      r = Te("div"), Lt(e.$$.fragment), n = gr(), Lt(o.$$.fragment), i = gr(), f && f.c(), s = gr(), _ && _.c(), g(r, "class", a = Cr.root + /*$isDesktop*/
      (t[7] ? ` ${Cr.root_platform_desktop}` : "") + /*mix*/
      (t[0] ? ` ${/*mix*/
      t[0]}` : "")), g(
        r,
        "dir",
        /*$directionStore*/
        t[8]
      );
    },
    m(h, m) {
      q(h, r, m), Nt(e, r, null), yt(r, n), Nt(o, r, null), yt(r, i), f && f.m(r, null), yt(r, s), _ && _.m(r, null), l = !0, c || (u = Qe(r, "touchstart", G3, { passive: !0 }), c = !0);
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
      8 && L(f, 1)) : (f = xf(h), f.c(), L(f, 1), f.m(r, s)) : f && (ir(), x(f, 1, 1, () => {
        f = null;
      }), sr()), /*menu*/
      h[4] ? _ ? (_.p(h, m), m[0] & /*menu*/
      16 && L(_, 1)) : (_ = ed(h), _.c(), L(_, 1), _.m(r, null)) : _ && (ir(), x(_, 1, 1, () => {
        _ = null;
      }), sr()), (!l || m[0] & /*$isDesktop, mix*/
      129 && a !== (a = Cr.root + /*$isDesktop*/
      (h[7] ? ` ${Cr.root_platform_desktop}` : "") + /*mix*/
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
      h && G(r), zt(e), zt(o), f && f.d(), _ && _.d(), c = !1, u();
    }
  };
}
function xf(t) {
  let r = [], e = new R3(), n, o, i = rr(
    /*tooltips*/
    t[3]
  );
  const s = (a) => (
    /*item*/
    a[134].internalId
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = Zf(t, i, a), c = s(l);
    e.set(c, r[a] = $f(c, l));
  }
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      n = Kt();
    },
    m(a, l) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(a, l);
      q(a, n, l), o = !0;
    },
    p(a, l) {
      l[0] & /*tooltips, rootStateComponentContext*/
      72 && (i = rr(
        /*tooltips*/
        a[3]
      ), ir(), r = Ad(r, l, s, 1, a, i, e, n.parentNode, Ed, $f, n, Zf), sr());
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
function $f(t, r) {
  let e, n, o;
  return n = new I3({
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
      e = Kt(), Lt(n.$$.fragment), this.first = e;
    },
    m(i, s) {
      q(i, e, s), Nt(n, i, s), o = !0;
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
      i && G(e), zt(n, i);
    }
  };
}
function ed(t) {
  let r, e;
  return r = new B3({
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
      Nt(r, n, o), e = !0;
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
      zt(r, n);
    }
  };
}
function H3(t) {
  let r, e, n = !/*hasError*/
  t[1] && !/*hasIdError*/
  t[2] && /*rootStateComponentContext*/
  t[6] && Qf(t);
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
      70 && L(n, 1)) : (n = Qf(o), n.c(), L(n, 1), n.m(r.parentNode, r)) : n && (ir(), x(n, 1, 1, () => {
        n = null;
      }), sr());
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
let Ea = Do(!0), ks = 0;
function td() {
  Ea.set(!1);
}
function rd() {
  Ea.set(!0);
}
const W3 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean"]), U3 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean", "array", "dict"]);
function Ho(t, r) {
  if (t && r)
    return new Map([...t, ...r]);
  if (t)
    return t;
  if (r)
    return r;
}
function G3() {
}
function J3(t, r, e) {
  var Xr, mn, Vn;
  let n, o, i, s, { id: a } = r, { json: l = {} } = r, { platform: c = "auto" } = r, { theme: u = "system" } = r, { globalVariablesController: f = void 0 } = r, { mix: _ = "" } = r, { customization: h = {} } = r, { builtinProtocols: m = ["http", "https", "tel", "mailto", "intent"] } = r, { extensions: p = /* @__PURE__ */ new Map() } = r, { onError: w = void 0 } = r, { onStat: k = void 0 } = r, { onSubmit: z = void 0 } = r, { onCustomAction: H = void 0 } = r, { onComponent: O = void 0 } = r, { typefaceProvider: oe = (y) => "" } = r, { fetchInit: fe = {} } = r, { tooltipRoot: T = void 0 } = r, { customComponents: Z = void 0 } = r, { direction: ce = "ltr" } = r, { store: C = void 0 } = r, { pagerChildrenClipEnabled: D = !0 } = r, { pagerMouseDragEnabled: M = !0 } = r, { weekStartDay: W = 0 } = r, { videoPlayerProvider: Q = void 0 } = r, { devtoolCreateHierarchy: me = "lazy" } = r, Ae = !0, Ce = Do(c === "desktop");
  if (yn(t, Ce, (y) => e(7, i = y)), c === "auto" && typeof matchMedia < "u") {
    const y = matchMedia("(any-pointer: coarse)");
    Ce.set(!y.matches), y.addListener(() => {
      Ce.set(!y.matches);
    });
  }
  let he = "light", Ve = null;
  const re = Do(ce === "rtl" ? "rtl" : "ltr");
  yn(t, re, (y) => e(8, s = y));
  function $e() {
    u !== "system" || !Ve || e(41, he = Ve.matches ? "dark" : "light");
  }
  function Ge(y) {
    e(12, u = y);
  }
  function Je() {
    return We;
  }
  function ke() {
    return te;
  }
  function De(y) {
    e(11, l = y);
  }
  function ue(y) {
    return kt(y, I);
  }
  const ae = new Set(m);
  let de = !1, ee = !1;
  a || (ee = !0, I(Y(new Error('"id" prop is required'))));
  const ge = { stateChange: !1 }, ie = f || new a_(), Se = ie.getLastAddedVariableStore(), He = ie.getVariables(), We = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map();
  let nt = null;
  const st = /* @__PURE__ */ new Map();
  let et = 0, wt = [];
  const rt = /* @__PURE__ */ new Set();
  let Pt;
  const ct = [];
  function X(y) {
    return h == null ? void 0 : h[y];
  }
  function _e(y, E, { additionalVars: A, keepComplex: ne = !1, customFunctions: N, emptyVarsError: Ze, maxDepth: Ie } = {}) {
    var Ut;
    if (!E)
      return Go(E);
    const Qt = Ho(te, A), St = Hf(E, y, C, W, Ie);
    if (!St.vars.length)
      if (St.hasExpression) {
        const Ct = St.applyVars(Qt, N);
        if (!((Ut = Ct.usedVars) != null && Ut.size))
          return Ze && Ze(), Go(Ct.result);
      } else
        return Ze && Ze(), Go(E);
    const Ue = St.vars.map((Ct) => Qt.get(Ct) || or(Ct)).filter(zo);
    return Do(void 0, (Ct) => {
      const cr = /* @__PURE__ */ new Map();
      let Br;
      const pn = () => {
        var wn;
        const Wr = St.applyVars(Qt, N, ne);
        for (const [tn, Fn] of cr)
          (wn = Wr.usedVars) != null && wn.has(tn) || (Fn(), cr.delete(tn));
        if (Wr.usedVars) {
          for (const tn of Wr.usedVars)
            if (!cr.has(tn)) {
              let Fn = !0;
              cr.set(tn, tn.subscribe(() => {
                Fn || Ct(pn()), Fn = !1;
              }));
            }
        }
        return Wr.result;
      };
      return Br = Gi(Ue, pn).subscribe((Wr) => {
        Ct(Wr);
      }), () => {
        Br == null || Br();
        for (const [Wr, wn] of cr)
          wn();
      };
    });
  }
  function lt(y, E, A, ne = !1, N = void 0) {
    const Ze = Hf(E, y, C, W);
    if (!Ze.hasExpression)
      return E;
    const Ie = Ho(te, A);
    return Ze.applyVars(Ie, N, ne).result;
  }
  function Fe(y, E, A) {
    const ne = /* @__PURE__ */ new Map(), N = zs(y, "dict", E);
    ne.set(y, N);
    const Ze = zs("index", "integer", A);
    return ne.set("index", Ze), ne;
  }
  function I(y) {
    w ? w({ error: y }) : (y == null ? void 0 : y.level) === "warn" ? console.warn(y) : console.error(y);
  }
  function jt(y, E) {
    k && k({ type: y, action: E });
  }
  function _t(y) {
    return y in n;
  }
  function At(y, E) {
    if (!y)
      return { json: y, templateContext: E };
    const A = /* @__PURE__ */ new Set([y.type]);
    for (; y.type && y.type in n; ) {
      if ({ json: y, templateContext: E } = W2(y, E, n, I), A.has(y.type))
        return { json: y, templateContext: E };
      A.add(y.type);
    }
    return { json: y, templateContext: E };
  }
  function Dt({ type: y, node: E, json: A, origJson: ne, templateContext: N, componentContext: Ze, devapi: Ie }) {
    O && O({
      type: y,
      node: E,
      json: A,
      origJson: ne,
      templateContext: N,
      componentContext: Ze,
      devapi: Ie
    });
  }
  let ot = 0;
  function K(y) {
    return `${a}-${ot++}`;
  }
  function Mt(y) {
    return `divkit-${K()}`;
  }
  let Vt = {}, Jt = {};
  function qt(y, E) {
    const A = `${y}:${E}`;
    if (Jt[A] = Jt[A] || 0, ++Jt[A], Vt[A])
      return Vt[A];
    const ne = `${K()}-svg-filter`;
    return e(5, Vt = { ...Vt, [A]: ne }), ne;
  }
  function be(y, E) {
    if (!y)
      return;
    const A = `${y}:${E}`;
    Jt[A] && --Jt[A] === 0 && e(5, Vt = Object.keys(Vt).reduce(
      (ne, N) => (Jt[N] && (ne[N] = Vt[N]), ne),
      {}
    ));
  }
  const Ke = K() + "-id-", pt = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map();
  function xe(y) {
    return Ke + y;
  }
  function Be(y, E) {
    let A = pt.get(y) || [];
    return pt.has(y) || pt.set(y, A), A.push(E), () => {
      A = A.filter((N) => N !== E), A.length || pt.delete(y);
      const ne = xe(y);
      we.has(ne) && we.delete(ne);
    };
  }
  function nr(y) {
    var A, ne;
    const E = (ne = (A = pt.get(y)) == null ? void 0 : A[0]) == null ? void 0 : ne.node();
    if (E) {
      const N = xe(y), Ze = we.get(N);
      return Ze && Ze !== E && Ze.removeAttribute("id"), E.setAttribute("id", N), we.set(N, E), N;
    }
    return "";
  }
  async function Ne(y, E) {
    var Ie, Qt;
    if (!y)
      throw new Error("Missing state id");
    let A = y.split("/");
    const ne = A.length % 2 === 0 && s3(E);
    let N = ne || Tr;
    const Ze = (E == null ? void 0 : E.logError) || I;
    if (!ne)
      if ((Ie = N.states) != null && Ie.root) {
        const St = N.states.root;
        if (St.length > 1) {
          Ze(Y(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: y } }));
          return;
        }
        if (N = await St[0](A[0]), !N)
          return;
        A = A.slice(1);
      } else
        return;
    for (let St = 0; St < A.length; St += 2) {
      const Ue = A[St], Ut = A[St + 1];
      if ((Qt = N.states) != null && Qt[Ue]) {
        const Ct = N.states[Ue];
        if (Ct.length > 1) {
          Ze(Y(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: y } }));
          return;
        }
        if (N = await Ct[0](Ut), !N)
          return;
      } else
        return;
    }
  }
  async function bt(y, E, A) {
    var cr;
    const ne = (y == null ? void 0 : y.logError) || I;
    if (!f3(E)) {
      ne(Y(new Error("Incorrect submit action"), {
        additional: { containerId: E.container_id }
      }));
      return;
    }
    const N = pt.get(E.container_id);
    if ((N == null ? void 0 : N.length) !== 1) {
      ne(Y(new Error("Error resolving container. Found multiple elements that respond to id"), {
        additional: { containerId: E.container_id }
      }));
      return;
    }
    const Ze = N[0].context(), Ie = {};
    if (Ze.variables)
      for (const [Br, pn] of Ze.variables) {
        const Wr = pn.getValue();
        typeof Wr == "bigint" ? Ie[Br] = Number(Wr) : Ie[Br] = Wr;
      }
    if (z) {
      Promise.resolve().then(() => z(E, Ie)).then(() => {
        $t(A.on_success_actions, { componentContext: y });
      }).catch(() => {
        $t(A.on_fail_actions, { componentContext: y });
      });
      return;
    }
    const Qt = Object.keys(Ie).length > 0, St = (E.request.method || "post").toLowerCase();
    if ((St === "get" || St === "head") && Qt) {
      ne(Y(new Error("Can't send variables using the get/head method."), { additional: { url: E.request.url } }));
      return;
    }
    let Ue = !1;
    const Ut = [];
    (cr = E.request.headers) == null || cr.forEach((Br) => {
      Ut.push([Br.name, Br.value]), Br.name.toLowerCase() === "content-type" && (Ue = !0);
    }), Ue || Ut.push(["Content-Type", "application/json"]);
    let Ct;
    typeof fe == "function" ? Ct = fe(E.request.url) : Ct = fe, fetch(E.request.url, {
      ...Ct,
      method: St,
      headers: Ut,
      body: Qt ? JSON.stringify(Ie) : void 0
    }).then((Br) => {
      if (!Br.ok)
        throw new Error("Response is not ok");
      $t(A.on_success_actions, { componentContext: y });
    }).catch((Br) => {
      ne(Y(new Error("Failed to submit"), {
        additional: {
          url: E.request.url,
          originalError: Br
        }
      })), $t(A.on_fail_actions, { componentContext: y });
    });
  }
  function Ft(y, E) {
    var N, Ze, Ie, Qt, St, Ue, Ut, Ct, cr;
    const A = (y == null ? void 0 : y.logError) || I, ne = E.id && vt(E.id);
    if (!ne) {
      A(Y(new Error('Missing component for "scroll_to" action'), { additional: { id: E.id } }));
      return;
    }
    if (E.animated !== void 0 && typeof E.animated != "boolean") {
      A(Y(new Error('Missing properties for "scroll_to" action'), { additional: { id: E.id } }));
      return;
    }
    switch ((N = E.destination) == null ? void 0 : N.type) {
      case "index": {
        typeof E.destination.value == "number" && ne.setCurrentItem(E.destination.value, (Ze = E.animated) != null ? Ze : !0);
        break;
      }
      case "offset": {
        typeof E.destination.value == "number" && ((Qt = ne.scrollToPosition) == null || Qt.call(ne, E.destination.value, (Ie = E.animated) != null ? Ie : !0));
        break;
      }
      case "start": {
        (Ue = ne.scrollToStart) == null || Ue.call(ne, (St = E.animated) != null ? St : !0);
        break;
      }
      case "end": {
        (Ct = ne.scrollToEnd) == null || Ct.call(ne, (Ut = E.animated) != null ? Ut : !0);
        break;
      }
      default:
        A(Y(new Error('Unknown destination for "scroll_to" action'), {
          additional: {
            id: E.id,
            destination: (cr = E.destination) == null ? void 0 : cr.type
          }
        }));
    }
  }
  function It(y, E) {
    var N;
    const A = (y == null ? void 0 : y.logError) || I, ne = E.id && vt(E.id);
    if (!ne) {
      A(Y(new Error('Missing component for "scroll_by" action'), { additional: { id: E.id } }));
      return;
    }
    if (typeof E.item_count != "number" && E.item_count !== void 0 || typeof E.offset != "number" && E.offset !== void 0 || E.overflow !== void 0 && E.overflow !== "clamp" && E.overflow !== "ring" || E.animated !== void 0 && typeof E.animated != "boolean") {
      A(Y(new Error('Missing properties for "scroll_by" action'), { additional: { id: E.id } }));
      return;
    }
    (N = ne.scrollCombined) == null || N.call(ne, {
      step: E.item_count,
      offset: E.offset,
      overflow: E.overflow,
      animated: E.animated
    });
  }
  function hr(y, E, { item: A, step: ne, overflow: N, animated: Ze }) {
    var Ut, Ct, cr, Br, pn;
    if (!E)
      throw new Error(`Missing id for "${y}" action`);
    const Ie = Number(A);
    if (y === "set_current_item" && Number.isNaN(Ie))
      throw new Error(`Incorrect item for "${y}" action`);
    let Qt = Number(ne);
    if (!ne && (y === "set_previous_item" || y === "set_next_item") && (Qt = 1), !ne && (y === "scroll_backward" || y === "scroll_forward" || y === "scroll_to_position") || Number.isNaN(Qt))
      throw new Error(`Incorrect step value for "${y}" action`);
    if (N && N !== "clamp" && N !== "ring")
      throw new Error(`Incorrect overflow value for "${y}" action`);
    N = N || "clamp";
    const St = Ze === null || Ze !== "0" && Ze !== "false", Ue = vt(E);
    if (Ue)
      switch (y) {
        case "set_current_item":
          Ue.setCurrentItem(Ie, St);
          return;
        case "set_previous_item":
          Ue.setPreviousItem(Qt, N, St);
          return;
        case "set_next_item":
          Ue.setNextItem(Qt, N, St);
          return;
        case "scroll_to_start":
          (Ut = Ue.scrollToStart) == null || Ut.call(Ue, St);
          return;
        case "scroll_to_end":
          (Ct = Ue.scrollToEnd) == null || Ct.call(Ue, St);
          return;
        case "scroll_backward":
          (cr = Ue.scrollCombined) == null || cr.call(Ue, {
            offset: -Qt,
            overflow: N,
            animated: St
          });
          return;
        case "scroll_forward":
          (Br = Ue.scrollCombined) == null || Br.call(Ue, {
            offset: Qt,
            overflow: N,
            animated: St
          });
          return;
        case "scroll_to_position":
          (pn = Ue.scrollToPosition) == null || pn.call(Ue, Qt, St);
          return;
      }
  }
  function ze(y, E, A) {
    const ne = (A == null ? void 0 : A.logError) || I;
    if (y) {
      const N = vt(y);
      N ? E === "start" ? N.start() : E === "pause" ? N.pause() : ne(Y(new Error("Unknown video action"), { additional: { id: y, action: E } })) : ne(Y(new Error("Video component is not found"), { additional: { id: y, action: E } }));
    } else
      ne(Y(new Error("Missing id in video action"), { additional: { action: E } }));
  }
  function kt(y, E, A) {
    var ne, N, Ze;
    if (y.templates)
      for (const Ie in y.templates)
        n.hasOwnProperty(Ie) || (n[Ie] = y.templates[Ie]);
    if (Array.isArray((ne = y.patch) == null ? void 0 : ne.changes)) {
      if (y.patch.mode === "transactional") {
        const Ie = y.patch.changes.find((Qt) => {
          const St = Er.get(Qt.id);
          if (!St)
            return !0;
          const Ue = Array.isArray(Qt.items) ? Qt.items.length : 0;
          return !!(St.isSingleMode && Ue !== 1);
        });
        if (Ie)
          return E(Y(new Error("Skipping transactional, child is not found or broken"), { additional: { url: A, id: Ie.id } })), $t((N = y.patch) == null ? void 0 : N.on_failed_actions), !1;
      }
      return y.patch.changes.forEach((Ie) => {
        const Qt = Er.get(Ie.id);
        Qt && Qt.replaceWith(Ie.id, Ie.items);
      }), $t((Ze = y.patch) == null ? void 0 : Ze.on_applied_actions), !0;
    }
    return !1;
  }
  function lr(y, E, A) {
    const ne = (A == null ? void 0 : A.logError) || I;
    if (y) {
      let N;
      typeof fe == "function" ? N = fe(y) : N = fe, fetch(y, N).then((Ze) => {
        if (!Ze.ok)
          throw new Error("Response is not ok");
        return Ze.json();
      }).then((Ze) => {
        if (!Ze) {
          ne(Y(new Error("Incorrect patch"), { additional: { url: y } })), $t(E == null ? void 0 : E.on_fail_actions, { componentContext: A });
          return;
        }
        kt(Ze, ne, y) ? $t(E == null ? void 0 : E.on_success_actions, { componentContext: A }) : $t(E == null ? void 0 : E.on_fail_actions, { componentContext: A });
      }).catch((Ze) => {
        ne(Y(new Error("Failed to download the patch"), { additional: { url: y, originalError: Ze } })), $t(E == null ? void 0 : E.on_fail_actions, { componentContext: A });
      });
    } else
      ne(Y(new Error("Missing url in download action"), { additional: { url: y } }));
  }
  function er(y, E, A) {
    var Qt;
    const ne = (A == null ? void 0 : A.logError) || I;
    if (!y) {
      ne(Y(new Error("Missing id in show_tooltip action")));
      return;
    }
    const N = Dr.get(y);
    if (!N) {
      ne(Y(new Error("Tooltip with the provided id is not found"), { additional: { id: y } }));
      return;
    }
    if (E !== "true" && E !== !0 && rt.has(y))
      return;
    rt.add(y);
    const Ze = {
      internalId: ++et,
      ownerNode: N.onwerNode,
      desc: N.tooltip,
      timeoutId: 0,
      componentContext: A
    };
    e(3, wt = [...wt, Ze]);
    const Ie = (Qt = N.tooltip.duration) != null ? Qt : 5e3;
    Ie && (Ze.timeoutId = window.setTimeout(
      () => {
        Ze.timeoutId = 0, e(3, wt = wt.filter((St) => St.internalId !== Ze.internalId));
      },
      Ie
    ));
  }
  function Xt(y, E) {
    const A = (E == null ? void 0 : E.logError) || I;
    if (!y) {
      A(Y(new Error("Missing id in hide_tooltip action")));
      return;
    }
    e(3, wt = wt.filter((ne) => {
      const N = ne.desc.id !== y;
      return !N && ne.timeoutId && (clearTimeout(ne.timeoutId), ne.timeoutId = null), N;
    }));
  }
  function mr(y, E, A, ne, N) {
    const Ze = (y == null ? void 0 : y.logError) || I;
    if (!C) {
      Ze(Y(new Error("Store is not configured")));
      return;
    }
    let Ie = A;
    if (!E || !Ie || !ne || !N) {
      Ze(Y(new Error("Missing required params for set_stored_value")));
      return;
    }
    if (!U3.has(ne)) {
      Ze(Y(new Error("Incorrect stored type")));
      return;
    }
    if (ne === "boolean" && (Ie = Ie === "true" || Ie === "1"), C.set)
      C.set(E, ne, Ie, Number(N));
    else if (C.setValue) {
      if (!W3.has(ne)) {
        Ze(Y(new Error("Incorrect stored type")));
        return;
      }
      if (typeof Ie != "string" && typeof Ie != "number" && typeof Ie != "boolean") {
        Ze(Y(new Error("Incorrect stored value")));
        return;
      }
      (ne === "integer" || ne === "number") && (Ie = Number(Ie)), C.setValue(E, ne, Ie, Number(N));
    }
  }
  function vr(y) {
    xt(lt(I, y, void 0, !0), y);
  }
  async function xt(y, E, A) {
    var Qt, St;
    const ne = y.scope_id, N = (A == null ? void 0 : A.logError) || I;
    if (ne) {
      const Ue = zr.get(ne);
      if (Ue && (Ue == null ? void 0 : Ue.size) > 1)
        N(Y(new Error(`Ambiguous scope id. There are ${Ue.size} divs with id '${ne}'`), { additional: { count: Ue.size, scopeId: ne } }));
      else if ((Ue == null ? void 0 : Ue.size) === 1) {
        const Ut = Ue.values().next().value;
        Ut && (A = Ut);
      } else {
        N(Y(new Error("The scope with the specified scope_id is missing"), { additional: { scopeId: ne } }));
        return;
      }
    }
    const Ze = y.url ? String(y.url) : "", Ie = y.typed;
    if (Ys(y)) {
      if (Ie)
        switch (Ie.type) {
          case "set_variable": {
            const { variable_name: Ue, value: Ut } = Ie;
            if (Ue && Ut) {
              const Ct = (A == null ? void 0 : A.getVariable(Ue)) || te.get(Ue);
              Ct ? Ct.getType() === Ut.type ? Ct.setValue(Ut.value) : N(Y(new Error("Trying to set value with invalid type"), { additional: { name: Ue, type: Ut.type } })) : N(Y(new Error("Cannot find variable"), { additional: { name: Ue } }));
            } else
              N(Y(new Error("Incorrect set_variable action"), { additional: { name: Ue } }));
            break;
          }
          case "array_insert_value":
            $2(A, te, N, Ie);
            break;
          case "array_remove_value":
            e3(A, te, N, Ie);
            break;
          case "array_set_value":
            t3(A, te, N, Ie);
            break;
          case "copy_to_clipboard":
            n3(N, Ie);
            break;
          case "focus_element": {
            const Ue = Ie.element_id && wr.get(Ie.element_id);
            Ue ? Ue.focus() : N(Y(new Error("Incorrect focus_element action"), {
              additional: { elementId: Ie.element_id }
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
            r3(A, te, N, Ie);
            break;
          }
          case "animator_start": {
            const Ue = Ie.animator_id && (A == null ? void 0 : A.getAnimator(Ie.animator_id));
            if (!Ue) {
              N(Y(new Error("Missing animator"), {
                additional: { animator_id: Ie.animator_id }
              }));
              return;
            }
            const { duration: Ut, start_delay: Ct, interpolator: cr, direction: Br, repeat_count: pn, start_value: Wr, end_value: wn } = Ie, tn = A ? A.getJsonWithVars(Ue) : lt(I, Ue), Fn = {
              ...tn,
              end_actions: Ue.end_actions,
              cancel_actions: Ue.cancel_actions,
              duration: Ut !== void 0 ? Ut : tn.duration,
              start_delay: Ct !== void 0 ? Ct : tn.start_delay,
              interpolator: cr !== void 0 ? cr : tn.interpolator,
              direction: Br !== void 0 ? Br : tn.direction,
              repeat_count: pn !== void 0 ? pn : tn.repeat_count,
              start_value_typed: Wr,
              end_value_typed: wn
            }, Rn = Ue.variable_name && ((A == null ? void 0 : A.getVariable(Ue.variable_name)) || te.get(Ue.variable_name));
            if (!Rn)
              return;
            const $n = st.get(Ue.id);
            $n && $n.stop();
            const Ht = i3(
              Fn,
              Rn,
              () => {
                st.delete(Ue.id);
              },
              (b, V) => ((A == null ? void 0 : A.execAnyActions) || $t)(b, V)
            );
            Ht && st.set(Ue.id, Ht);
            break;
          }
          case "animator_stop": {
            const Ue = st.get(Ie.animator_id);
            Ue && (Ue.stop(), st.delete(Ie.animator_id));
            break;
          }
          case "show_tooltip": {
            er(Ie.id, Ie.multiple, A);
            break;
          }
          case "hide_tooltip": {
            Xt(Ie.id, A);
            break;
          }
          case "timer": {
            nt ? nt.execTimerAction(Ie.id, Ie.action) : N(Y(new Error("Incorrect timer action"), {
              additional: {
                id: Ie.id,
                action: Ie.action
              }
            }));
            break;
          }
          case "download": {
            lr(Ie.url, E.typed, A);
            break;
          }
          case "video": {
            ze(Ie.id, Ie.action, A);
            break;
          }
          case "set_stored_value": {
            mr(A, Ie.name, (Qt = Ie.value) == null ? void 0 : Qt.value, (St = Ie.value) == null ? void 0 : St.type, Ie.lifetime);
            break;
          }
          case "set_state": {
            await Ne(Ie.state_id, A);
            break;
          }
          case "submit": {
            await bt(A, Ie, E.typed);
            break;
          }
          case "scroll_to": {
            Ft(A, Ie);
            break;
          }
          case "scroll_by": {
            It(A, Ie);
            break;
          }
          case "update_structure": {
            d3(A, te, N, Ie);
            break;
          }
          case "custom": {
            J({
              ...E,
              // todo remove in major release
              url: ""
            });
            break;
          }
          default:
            N(Y(new Error("Unknown type of action"), { additional: { type: Ie.type } }));
        }
      else if (Ze)
        try {
          const Ue = Ze.replace(/div-action:\/\//, ""), Ut = /([^?]+)\?(.+)/.exec(Ue);
          if (!Ut)
            return;
          const Ct = new URLSearchParams(Ut[2]);
          switch (Ut[1]) {
            case "set_state":
              await Ne(Ct.get("state_id"), A);
              break;
            case "set_current_item":
            case "set_previous_item":
            case "set_next_item":
            case "scroll_to_start":
            case "scroll_to_end":
            case "scroll_backward":
            case "scroll_forward":
            case "scroll_to_position":
              hr(Ut[1], Ct.get("id"), {
                item: Ct.get("item"),
                step: Ct.get("step"),
                overflow: Ct.get("overflow"),
                animated: Ct.get("animated")
              });
              break;
            case "set_variable":
              const cr = Ct.get("name"), Br = Ct.get("value");
              if (cr && Br !== null) {
                const wn = (A == null ? void 0 : A.getVariable(cr)) || te.get(cr);
                wn ? wn.set(Br) : N(Y(new Error("Cannot find variable"), { additional: { name: cr } }));
              } else
                N(Y(new Error("Incorrect set_variable_action"), { additional: { url: Ue } }));
              break;
            case "timer":
              const pn = Ct.get("action"), Wr = Ct.get("id");
              nt ? nt.execTimerAction(Wr, pn) : N(Y(new Error("Incorrect timer action"), {
                additional: { id: Wr, action: pn }
              }));
              break;
            case "video":
              ze(Ct.get("id"), Ct.get("action"), A);
              break;
            case "download":
              lr(Ct.get("url"), E.download_callbacks, A);
              break;
            case "show_tooltip":
              er(Ct.get("id"), Ct.get("multiple"), A);
              break;
            case "hide_tooltip":
              Xt(Ct.get("id"), A);
              break;
            case "set_stored_value": {
              mr(A, Ct.get("name"), Ct.get("value"), Ct.get("type"), Ct.get("lifetime"));
              break;
            }
            default:
              N(Y(new Error("Unknown type of action"), { additional: { url: Ze } }));
          }
        } catch (Ue) {
          N(Y(Ue, { additional: { url: Ze } }));
        }
    }
  }
  async function $t(y, E = {}) {
    var N;
    if (!y || !Array.isArray(y))
      return;
    const A = ((N = E.componentContext) == null ? void 0 : N.logError) || I, ne = (Ze) => E.componentContext ? E.componentContext.getJsonWithVars(Ze, E.additionalVars, !0) : lt(A, Ze, E.additionalVars, !0);
    for (let Ze = 0; Ze < y.length; ++Ze) {
      let Ie = ne(y[Ze]);
      const Qt = Ie.is_enabled;
      if (Qt === 0 || Qt === !1)
        continue;
      const St = Ie.url;
      if (Ie.typed)
        await xt(Ie, y[Ze], E.componentContext);
      else if (St) {
        const Ut = Xl(St);
        if (Ut)
          if (Zl(Ut, ae)) {
            if (E.processUrls)
              if (Ie.target === "_blank") {
                const Ct = window.open("", "_blank");
                Ct && (Ct.opener = null, Ct.location = St);
              } else
                location.href = St;
          } else Ut === "div-action" ? (await xt(Ie, y[Ze], E.componentContext), await Sn()) : Ie.log_id && (J(Ie), await Sn());
      } else E.node && Array.isArray(Ie.menu_items) && Ie.menu_items.length && e(4, Pt = {
        items: Ie.menu_items,
        node: E.node,
        componentContext: E.componentContext
      });
    }
    y.forEach((Ze) => {
      Ze.log_id && jt(E.logType || "click", Ze);
    });
  }
  function J(y) {
    H == null || H(y);
  }
  function ft(y, E) {
    const A = (y == null ? void 0 : y.logError) || I;
    if (!Array.isArray(E) || !E.length)
      return;
    const ne = [];
    return E.forEach((N) => {
      let Ze = !1;
      if (typeof N.condition != "string") {
        A(Y(new Error("variable_trigger has a condition that is not a string"), {
          additional: { condition: N.condition }
        }));
        return;
      }
      if (!Array.isArray(N.actions)) {
        A(Y(new Error("variable_trigger has no actions"), {
          additional: { condition: N.condition }
        }));
        return;
      }
      const Ie = N.mode || "on_condition";
      if (Ie !== "on_variable" && Ie !== "on_condition") {
        A(Y(new Error("variable_trigger has an unsupported mode"), { additional: { mode: Ie } }));
        return;
      }
      const St = _e(A, { condition: N.condition }, {
        additionalVars: y == null ? void 0 : y.variables,
        customFunctions: y == null ? void 0 : y.customFunctions,
        emptyVarsError: () => {
          A(Y(new Error("variable_trigger must have variables in the condition"), {
            additional: { condition: N.condition }
          }));
        }
      }).subscribe(async (Ue) => {
        Ue.condition !== void 0 && (// if condition is truthy
        Ue.condition && // and trigger mode matches
        (Ie === "on_variable" || Ie === "on_condition" && Ze === !1) ? (Ze = !!Ue.condition, y ? await y.execAnyActions(N.actions, { logType: "trigger" }) : await $t(N.actions, { logType: "trigger" })) : Ze = !!Ue.condition);
      });
      ne.push(St);
    }), () => {
      ne.forEach((N) => {
        N();
      });
    };
  }
  function Gt(y) {
    return ge[y];
  }
  function Et(y, E) {
    ge[y] = E;
  }
  const br = /* @__PURE__ */ new Map(), Er = /* @__PURE__ */ new Map(), wr = /* @__PURE__ */ new Map(), Dr = /* @__PURE__ */ new Map(), zr = /* @__PURE__ */ new Map();
  function tr(y, E, A = "error") {
    if (br.has(y)) {
      I(Y(new Error("Duplicate instance id"), {
        level: A,
        additional: { id: y }
      }));
      return;
    }
    br.set(y, E);
  }
  function at(y) {
    br.delete(y);
  }
  function vt(y) {
    if (!br.has(y)) {
      I(Y(new Error("Missing instance with id"), { additional: { id: y } }));
      return;
    }
    return br.get(y);
  }
  function Zt(y, E) {
    Er.set(y, E);
  }
  function Yt(y) {
    Er.delete(y);
  }
  function _r(y, E) {
    wr.set(y, E);
  }
  function ut(y) {
    wr.delete(y);
  }
  function se(y, E) {
    const A = E.id;
    A && (Dr.has(A) && I(Y(new Error("Duplicate tooltip id"), { additional: { id: A } })), Dr.set(A, { onwerNode: y, tooltip: E }));
  }
  function mt(y) {
    const E = y.id;
    E && (Dr.delete(E), wt.some((A) => A.desc.id === E) && e(3, wt = wt.filter((A) => A.desc.id !== E)));
  }
  function or(y) {
    const E = Oe.get(y) || Do(void 0);
    return Oe.has(y) || Oe.set(y, E), E;
  }
  function yr(y, E, A) {
    const ne = Pe.get(y);
    if (ne)
      return ne;
    const N = lo(y, E, A);
    return Pe.set(y, N), N;
  }
  function ar() {
    if (!Wt)
      return;
    Wt[he].forEach((E) => {
      const A = te.get(E.name);
      A && A.setValue(E.color);
    });
  }
  function v() {
    return ae;
  }
  function le(y, E) {
    const A = p.get(y);
    if (A)
      return new A(E || {});
  }
  function d(y) {
    return {
      variables: Ho(te, y.variables),
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
      direction: ce
    };
  }
  function B(y, E) {
    const A = /* @__PURE__ */ new Map(), ne = (E == null ? void 0 : E.logError) || I;
    return y.forEach((N) => {
      if (A) {
        try {
          G2(N);
        } catch (Qt) {
          ne(Y(Qt));
          return;
        }
        const Ze = N, Ie = A.get(Ze.name) || [];
        Ie.push(J2(Ze)), A.set(Ze.name, Ie);
      }
    }), A;
  }
  function Me(y) {
    const E = {
      id: "",
      json: {},
      path: [],
      templateContext: {},
      logError(A) {
        A.additional = A.additional || {}, A.additional.path = E.path.join("/");
        {
          A.additional.json = E.json, A.additional.origJson = E.origJson;
          const ne = [];
          let N = E;
          for (; N.parent; )
            ne.push(N), N = N.parent;
          A.additional.fullpath = ne;
        }
        I(A);
      },
      execAnyActions(A, ne = {}) {
        return $t(A, {
          componentContext: E,
          processUrls: ne.processUrls,
          node: ne.node,
          logType: ne.logType,
          additionalVars: ne.additionalVars
        });
      },
      getDerivedFromVars(A, ne, N = !1, Ze = 1 / 0) {
        return _e(E.logError, A, {
          additionalVars: Ho(E.variables, ne),
          keepComplex: N,
          customFunctions: E.customFunctions,
          maxDepth: Ze
        });
      },
      getJsonWithVars(A, ne, N = !1) {
        return lt(E.logError, A, Ho(E.variables, ne), N, E.customFunctions);
      },
      evalExpression(A, ne, N) {
        return _l(Ho(te, E.variables), E.customFunctions, A, ne, N);
      },
      produceChildContext(A, ne = {}) {
        const N = Me(this);
        let Ze = A, Ie = this.templateContext;
        const { templateContext: Qt, json: St } = At(Ze, Ie);
        if (N.json = St, N.templateContext = Qt, N.origJson = A, N.id = ne.id || St.id || "", N.id) {
          let Ct = zr.get(N.id);
          Ct || (Ct = /* @__PURE__ */ new Set(), zr.set(N.id, Ct)), Ct.add(N);
        }
        ne.key && (N.key = ne.key), ne.path !== void 0 && N.path.push(String(ne.path)), A.type && !ne.isRootState && N.path.push(A.type), ne.isTooltipRoot && (N.isTooltipRoot = !0);
        let Ue;
        Array.isArray(St.variables) ? (Ue = Ho(this.variables, Ho(ne.variables, /* @__PURE__ */ new Map())), St.variables.forEach((Ct) => {
          const cr = Ot(Ct, N, Ue);
          cr && Ue && Ue.set(cr.getName(), cr);
        })) : ne.variables ? Ue = Ho(this.variables, ne.variables) : this.variables && (Ue = this.variables), N.variables = Ue, Ue && (N.selfVariables = /* @__PURE__ */ new Set([...Ue.keys()]));
        let Ut;
        return Array.isArray(St.functions) && (Ut = B(St.functions, this)), N.customFunctions = q2(this.customFunctions, Ut), Array.isArray(St.animators) && (N.animators = St.animators.reduce(
          (Ct, cr) => (cr.id && (Ct[cr.id] = cr), Ct),
          {}
        )), ne.fake && (N.fakeElement = ne.fake), ne.isRootState && (N.isRootState = !0), N;
      },
      dup(A) {
        return { ...E, fakeElement: A };
      },
      getVariable(A, ne) {
        var Ze;
        const N = ((Ze = E.variables) == null ? void 0 : Ze.get(A)) || te.get(A);
        if (N) {
          const Ie = N.getType();
          if (ne && Ie !== ne) {
            E.logError(Y(new Error(`Variable should have type "${ne}"`), { additional: { name: A, foundType: Ie } }));
            return;
          }
        }
        return N;
      },
      getAnimator(A) {
        var ne, N;
        return ((ne = E.animators) == null ? void 0 : ne[A]) || ((N = E.parent) == null ? void 0 : N.getAnimator(A)) || void 0;
      },
      registerState(A, ne) {
        const N = l3(E.parent);
        return N && (N.states = N.states || {}, N.states[A] = N.states[A] || [], N.states[A].push(ne)), () => {
          var Ze;
          (Ze = N == null ? void 0 : N.states) != null && Ze[A] && (N.states[A] = N.states[A].filter((Ie) => Ie !== ne), N.states[A].length || delete N.states[A]);
        };
      },
      registerPager(A) {
        const ne = E.parent;
        return ne ? (ne.pagers = ne.pagers || /* @__PURE__ */ new Map(), ne.pagers.has(A) ? {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          update() {
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          destroy() {
          }
        } : (ne.pagers.set(A, null), {
          update(N) {
            var St, Ue;
            ne.pagers && ne.pagers.set(A, N);
            const Ze = A ? (St = ne.pagerListeners) == null ? void 0 : St.get(A) : void 0, Ie = (Ue = ne.pagerListeners) == null ? void 0 : Ue.get(void 0);
            [...Ze || [], ...Ie || []].forEach((Ut) => {
              Ut(N);
            });
          },
          destroy() {
            ne.pagers && ne.pagers.delete(A);
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
      listenPager(A, ne) {
        var St, Ue, Ut;
        let N = E.parent;
        for (; N && !(N.pagers && (A ? N.pagers.get(A) : (St = N.pagers) != null && St.size)); )
          N = N.parent;
        if (!N)
          return () => {
          };
        N.pagerListeners = E.pagerListeners || /* @__PURE__ */ new Map();
        const Ze = N.pagerListeners.get(A) || [];
        N.pagerListeners.has(A) || N.pagerListeners.set(A, Ze), Ze.push(ne);
        const Ie = A || ((Ue = N.pagers) == null ? void 0 : Ue.keys().next().value) || void 0, Qt = (Ut = N.pagers) == null ? void 0 : Ut.get(Ie);
        return Qt && ne(Qt), () => {
          if (!N.pagerListeners)
            return;
          let Ct = N.pagerListeners.get(Ie);
          Ct && (Ct = Ct.filter((cr) => cr !== ne) || [], Ct.length ? N.pagerListeners.set(A, Ct) : N.pagerListeners.delete(A));
        };
      },
      destroy() {
        const A = zr.get(E.id);
        A && (A.delete(E), A.size || zr.delete(E.id));
      }
    };
    return y ? (E.parent = y, E.path = y.path.slice(), y.fakeElement && (E.fakeElement = y.fakeElement)) : (E.json = { type: "root" }, E.isRootState = !0), E;
  }
  function qe(y) {
    Ae ? ct.push(y) : clearTimeout(y);
  }
  fi(Kr, {
    logStat: jt,
    hasTemplate: _t,
    genId: K,
    genClass: Mt,
    execCustomAction: J,
    processVariableTriggers: ft,
    isRunning: Gt,
    setRunning: Et,
    pagerChildrenClipEnabled: D,
    pagerMouseDragEnabled: M,
    registerInstance: tr,
    unregisterInstance: at,
    registerParentOf: Zt,
    unregisterParentOf: Yt,
    registerTooltip: se,
    unregisterTooltip: mt,
    onTooltipClose: Ee,
    tooltipRoot: T,
    registerFocusable: _r,
    unregisterFocusable: ut,
    addSvgFilter: qt,
    removeSvgFilter: be,
    registerId: Be,
    getComponentId: nr,
    preparePrototypeVariables: Fe,
    getCustomization: X,
    getBuiltinProtocols: v,
    getExtension: le,
    getExtensionContext: d,
    registerTimeout: qe,
    typefaceProvider: oe,
    isDesktop: Ce,
    isPointerFocus: Ea,
    customComponents: Z,
    direction: re,
    videoPlayerProvider: Q,
    awaitGlobalVariable: yr,
    componentDevtool: Dt,
    devtoolCreateHierarchy: me
  }), fi(To, {
    hasAction() {
      return !1;
    }
  }), fi(ma, {
    runVisibilityTransition(y, E, A, ne, N) {
      return Promise.resolve();
    },
    registerChildWithTransitionIn(y, E, A, ne) {
      return Promise.resolve();
    },
    registerChildWithTransitionOut(y, E, A, ne) {
      return Promise.resolve();
    },
    registerChildWithTransitionChange(y, E, A, ne) {
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
  }), fi(ba, { isEnabled: Go(!0) });
  function ve(y, E) {
    const A = te.get(y);
    return (A == null ? void 0 : A.getType()) === E;
  }
  function R(y, E) {
    const A = te.get(y);
    A ? A.setValue(E) : I(Y(new Error("Cannot find variable"), { additional: { name: y } }));
  }
  function Tt(y, E, A) {
    const ne = (E == null ? void 0 : E.logError) || I, N = y.name, Ze = y.value_type;
    if (typeof y.get != "string" || !y.get) {
      ne(Y(new Error("Incorrect property getter"), { additional: { name: N } }));
      return;
    }
    if (!N) {
      ne(Y(new Error("Missing property name")));
      return;
    }
    if (!Ze) {
      ne(Y(new Error("Missing property value_type")));
      return;
    }
    const Ie = E ? E.getDerivedFromVars(y.get, void 0, !0) : _e(I, y.get, { keepComplex: !0 });
    if (Jl(Ie) === void 0)
      return;
    const St = (Ue) => {
      const Ut = zs(y.new_value_variable_name || "new_value", y.value_type, Ue), Ct = new Map(A);
      Ct.set(Ut.getName(), Ut), Array.isArray(y.set) && y.set.length ? E ? E.execAnyActions(y.set, { additionalVars: Ct }) : $t(y.set, { additionalVars: Ct }) : ne(Y(new Error("Cannot set property. No setters provided."), { additional: { name: N } }));
    };
    return {
      getName() {
        return N;
      },
      subscribe(Ue) {
        return Ie.subscribe(Ue);
      },
      set(Ue) {
        const Ut = Th(Ue, Ze);
        St(Ut);
      },
      setValue: St,
      getValue() {
        return Jl(Ie);
      },
      getType() {
        return Ze;
      }
    };
  }
  function Ot(y, E, A) {
    if (y.type === "property")
      return Tt(y, E, A);
    if (!y.type || !y.name || !(y.type in Kl) || !("value" in y))
      return;
    const ne = y.value;
    let N = E ? E.getJsonWithVars(ne, A, !0) : lt(I, ne, A, !0);
    if (!(ne && typeof ne == "string" && N === void 0)) {
      y.type === "integer" && typeof N == "number" && (N > Number.MAX_SAFE_INTEGER || N < Number.MIN_SAFE_INTEGER) && I(Y(new Error("The value of the integer variable could lose accuracy"), {
        level: "warn",
        additional: { name: y.name, value: N }
      }));
      try {
        return lo(y.name, y.type, N);
      } catch (Ze) {
        I(Y(Ze, { additional: { name: y.name } }));
      }
    }
  }
  function Xe(y) {
    const E = Ot(y);
    E && (We.set(y.name, E), te.set(y.name, E));
  }
  for (const [y, E] of He)
    te.has(y) || te.set(y, E);
  const dt = (Xr = l == null ? void 0 : l.card) == null ? void 0 : Xr.variables;
  Array.isArray(dt) && dt.forEach((y) => {
    if (y && y.name) {
      if (We.has(y.name)) {
        I(Y(new Error("Duplicate variable"), { additional: { name: y.name } }));
        return;
      }
      Xe(y);
    }
  });
  const Wt = l.palette;
  Wt && Wt[he].forEach((E) => {
    if (We.has(E.name)) {
      I(Y(new Error("Duplicate variable"), { additional: { name: E.name } }));
      return;
    }
    try {
      const A = lo(E.name, "color", E.color);
      We.set(E.name, A), te.set(E.name, A);
    } catch (A) {
      I(Y(A, { additional: { name: E.name } }));
    }
  }), Se.subscribe((y) => {
    if (y && !te.has(y)) {
      const E = He.get(y);
      te.set(y, E);
      const A = Oe.get(y);
      if (A) {
        let N = 0;
        E.subscribe(() => {
          A.set(++N);
        });
      }
      const ne = Pe.get(y);
      ne && ne.getType() === E.getType() && E.subscribe((N) => {
        ne.set(N);
      });
    }
  });
  const Vr = () => {
    var y;
    ft(void 0, (y = l == null ? void 0 : l.card) == null ? void 0 : y.variable_triggers);
  }, kr = (mn = l == null ? void 0 : l.card) == null ? void 0 : mn.timers;
  if (kr && typeof document < "u") {
    const y = nt = new x2({
      logError: I,
      applyVars: (E) => lt(I, E),
      hasVariableWithType: ve,
      setVariableValue: R,
      execAnyActions: $t
    });
    kr.forEach((E) => y.createTimer(E));
  }
  const Tr = Me();
  Array.isArray((Vn = l.card) == null ? void 0 : Vn.functions) && (Tr.customFunctions = B(l.card.functions));
  let Cn;
  function Ee(y) {
    e(3, wt = wt.filter((E) => E.internalId !== y));
  }
  xn(() => {
    ks++, ks === 1 && (window.addEventListener("keydown", td), window.addEventListener("pointerdown", rd)), Sn().then(() => {
      Ae && Vr();
    });
  }), sn(() => {
    Ae = !1, ks--, ks || (window.removeEventListener("keydown", td), window.removeEventListener("pointerdown", rd));
    for (const [y, E] of st)
      E.stop();
    nt && nt.destroy(), wt.forEach((y) => {
      y.timeoutId && (clearTimeout(y.timeoutId), y.timeoutId = null);
    }), ct.forEach((y) => {
      clearTimeout(y);
    });
  });
  const Yr = () => e(4, Pt = void 0);
  return t.$$set = (y) => {
    "id" in y && e(13, a = y.id), "json" in y && e(11, l = y.json), "platform" in y && e(14, c = y.platform), "theme" in y && e(12, u = y.theme), "globalVariablesController" in y && e(15, f = y.globalVariablesController), "mix" in y && e(0, _ = y.mix), "customization" in y && e(16, h = y.customization), "builtinProtocols" in y && e(17, m = y.builtinProtocols), "extensions" in y && e(18, p = y.extensions), "onError" in y && e(19, w = y.onError), "onStat" in y && e(20, k = y.onStat), "onSubmit" in y && e(21, z = y.onSubmit), "onCustomAction" in y && e(22, H = y.onCustomAction), "onComponent" in y && e(23, O = y.onComponent), "typefaceProvider" in y && e(24, oe = y.typefaceProvider), "fetchInit" in y && e(25, fe = y.fetchInit), "tooltipRoot" in y && e(26, T = y.tooltipRoot), "customComponents" in y && e(27, Z = y.customComponents), "direction" in y && e(28, ce = y.direction), "store" in y && e(29, C = y.store), "pagerChildrenClipEnabled" in y && e(30, D = y.pagerChildrenClipEnabled), "pagerMouseDragEnabled" in y && e(31, M = y.pagerMouseDragEnabled), "weekStartDay" in y && e(32, W = y.weekStartDay), "videoPlayerProvider" in y && e(33, Q = y.videoPlayerProvider), "devtoolCreateHierarchy" in y && e(34, me = y.devtoolCreateHierarchy);
  }, t.$$.update = () => {
    var y, E;
    if (t.$$.dirty[0] & /*theme*/
    4096 | t.$$.dirty[1] & /*themeQuery*/
    2048 && (u === "light" || u === "dark" ? e(41, he = u) : u === "system" ? typeof matchMedia < "u" ? (Ve || (e(42, Ve = matchMedia("(prefers-color-scheme: dark)")), Ve.addListener($e)), e(41, he = Ve.matches ? "dark" : "light")) : e(41, he = "light") : I(Y(new Error("Unsupported theme")))), t.$$.dirty[1] & /*currentTheme*/
    1024 && he && ar(), t.$$.dirty[0] & /*json*/
    2048) {
      e(1, de = !1);
      const A = K2(l);
      A && (e(1, de = !0), I(A));
    }
    if (t.$$.dirty[0] & /*json*/
    2048 && (n = l.templates || {}), t.$$.dirty[0] & /*json*/
    2048 && (y = l == null ? void 0 : l.card) != null && y.variables && Array.isArray(l.card.variables) && l.card.variables !== dt && l.card.variables.forEach((A) => {
      A && A.name && !We.has(A.name) && !te.has(A.name) && Xe(A);
    }), t.$$.dirty[0] & /*json*/
    2048 && e(44, o = (E = l == null ? void 0 : l.card) == null ? void 0 : E.states), t.$$.dirty[0] & /*hasError, hasIdError*/
    6 | t.$$.dirty[1] & /*states, rootComponentContext*/
    12288 && o && !de && !ee) {
      const A = {
        type: "state",
        id: "root",
        width: { type: "match_parent" },
        height: { type: "match_parent" },
        states: o.map((ne) => ({
          state_id: ne.state_id.toString(),
          div: ne.div
        }))
      };
      e(6, Cn = Tr.produceChildContext(A, { isRootState: !0 }));
    }
  }, [
    _,
    de,
    ee,
    wt,
    Pt,
    Vt,
    Cn,
    i,
    s,
    Ce,
    re,
    l,
    u,
    a,
    c,
    f,
    h,
    m,
    p,
    w,
    k,
    z,
    H,
    O,
    oe,
    fe,
    T,
    Z,
    ce,
    C,
    D,
    M,
    W,
    Q,
    me,
    Ge,
    Je,
    ke,
    De,
    ue,
    vr,
    he,
    Ve,
    Tr,
    o,
    Yr
  ];
}
class q3 extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      J3,
      H3,
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
const K3 = 8;
class x3 {
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
        if (++o > K3) {
          const i = new Error("Recursive layout in size_provider");
          i.level = "warn", i.additional = {
            widthVariableName: this.widthVariableName,
            heightVariableName: this.heightVariableName
          }, e.logError(i);
          break;
        }
        await Sn();
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
class $3 {
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
function Y3(t) {
  return t instanceof HTMLElement;
}
function t4(t) {
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
      const o = Array.from(e.children).filter(Y3);
      o.forEach((_) => {
        _.style.display = "none";
      }), e.setAttribute("data-lottie", "true");
      const i = this.wrapper = document.createElement("div");
      this.wrapper.style.width = "100%", this.wrapper.style.height = "100%";
      const s = this.getRatio(n), a = this.getScale(n);
      s && (this.wrapper.style.aspectRatio = String(s)), this.setWrapperScale(a), e.appendChild(this.wrapper);
      const l = Number((f = n.processExpressions(this.params.repeat_count)) != null ? f : -1), c = n.processExpressions(this.params.repeat_mode), u = () => {
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
          if (this.setSvgScale(a), this.animItem.addEventListener("data_failed", u), m && (c === "reverse" || l !== -1)) {
            let k = 1, z = 0;
            p.addEventListener("loopComplete", () => {
              ++z, l !== -1 && z === l + 1 ? (p.stop(), p.goToAndStop(p.totalFrames, !0)) : (c === "reverse" && (k *= -1, p.setDirection(k)), p.goToAndPlay(k === 1 ? 0 : p.totalFrames, !0));
            });
          }
        }).catch(u);
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
function n4(t, r = {}) {
  return class {
    constructor() {
      Ar(this, "prevDOM", null);
    }
    recalc(n, o) {
      const i = n.firstElementChild, s = i == null ? void 0 : i.firstElementChild;
      if (!s)
        return;
      this.prevDOM = i.cloneNode(!0);
      const a = o.getComponentProperty("text") || "", l = t(a), c = document.createElement("div");
      c.innerHTML = l, r != null && r.cssClass && c.classList.add(r.cssClass);
      const u = Array.from(i.childNodes);
      for (let f = 0, _ = u.length; f < _; ++f) {
        const h = u[f];
        (h.nodeType !== 1 || h !== s) && i.removeChild(h);
      }
      s.innerHTML = "", s.appendChild(c);
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
function o4(t) {
  const { target: r, hydrate: e, ...n } = t, o = new q3({
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
function i4(t, r) {
  return X3(t, r).result;
}
function X3(t, r) {
  let e;
  try {
    e = $s(t, {
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
  return _l((r == null ? void 0 : r.variables) || /* @__PURE__ */ new Map(), void 0, void 0, e);
}
function s4() {
  return Array.from(es.keys());
}
function l4(t, r) {
  return $s(t, {
    startRule: (r == null ? void 0 : r.type) === "json" ? "JsonStringContents" : "start"
  });
}
export {
  $3 as Gesture,
  x3 as SizeProvider,
  Q3 as createGlobalVariablesController,
  lo as createVariable,
  i4 as evalExpression,
  X3 as evalExpressionWithFullResult,
  s4 as functionNames,
  t4 as lottieExtensionBuilder,
  n4 as markdownExtensionBuilder,
  l4 as parseExpression,
  o4 as render,
  ki as valToString,
  io as walkExpression
};
//# sourceMappingURL=client-devtool.mjs.map

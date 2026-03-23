var k_ = Object.defineProperty;
var v_ = (t, r, e) => r in t ? k_(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var Ar = (t, r, e) => v_(t, typeof r != "symbol" ? r + "" : r, e);
/*!
    DivKit v32.39.0
    https://github.com/divkit/divkit
    @licence Apache-2.0
*/
function ua(t) {
  return BigInt(t);
}
const is = ua("9223372036854775807"), ss = ua("-9223372036854775808");
function gn(t) {
  const r = ua(t);
  if (r > is || r < ss)
    throw new Error("Integer overflow.");
  return r;
}
const bi = gn(0);
function sd(t) {
  let r = t;
  return r < 0 && (r = -r), r;
}
function ld(t) {
  let r = 0;
  return t > 0 ? r = 1 : t < 0 && (r = -1), gn(r);
}
function j_(t, r) {
  return r && r[3] && r[7] ? { type: "ConditionalExpression", test: t, consequent: r[3], alternate: r[7] } : t;
}
function C_(t, r) {
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
function E_(t, r) {
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
function A_(t) {
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
function S_(t) {
  try {
    return gn(t);
  } catch {
    throw new Error(`Value ${t} can't be converted to Integer type.`);
  }
}
function Ma(t) {
  if (t === "'" || t === "\\")
    return t;
  throw new Error("Incorrect string escape");
}
function V_(t, r) {
  function e() {
    this.constructor = t;
  }
  e.prototype = r.prototype, t.prototype = new e();
}
function Ri(t, r, e, n) {
  var o = Error.call(this, t);
  return Object.setPrototypeOf && Object.setPrototypeOf(o, Ri.prototype), o.expected = r, o.found = e, o.location = n, o.name = "SyntaxError", o;
}
V_(Ri, Error);
function vl(t, r, e) {
  return e = e || " ", t.length > r ? t : (r -= t.length, e += e.repeat(r), t + e.slice(0, r));
}
Ri.prototype.format = function(t) {
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
      var a = this.location.end, l = vl("", i.line.toString().length, " "), u = e[o.line - 1], c = o.line === a.line ? a.column : u.length + 1, f = c - o.column || 1;
      r += `
 --> ` + s + `
` + l + ` |
` + i.line + " | " + u + `
` + l + " | " + vl("", o.column - 1, " ") + vl("", f, "^");
    } else
      r += `
 at ` + s;
  }
  return r;
};
Ri.buildMessage = function(t, r) {
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
function el(t, r) {
  r = r !== void 0 ? r : {};
  var e = {}, n = r.grammarSource, o = { start: Xr, JsonStringContents: hn }, i = Xr, s = "@{", a = "}", l = "@{}", u = "\\", c = "?", f = ":", _ = "!:", h = "||", m = "&&", p = "==", k = "!=", w = ">=", O = ">", U = "<=", R = "<", $ = "+", ue = "-", T = "/", X = "*", le = "%", C = "!", M = ".", P = "(", H = ")", se = ",", de = "'", Ee = "e", Ae = "E", pe = /^[^}]/, De = /^[^'}]/, ee = /^[0-9]/, Te = /^[a-zA-Z_]/, We = /^[a-zA-Z_0-9]/, Ke = /^[ \t\r\n]/, ke = Ge("@{", !1), et = Ge("}", !1), fe = Ge("@{}", !1), je = Ge("\\", !1), ce = Ht(), te = Je(["}"], !0, !1), _e = Ge("?", !1), ie = Ge(":", !1), Fe = Ge("!:", !1), xe = Ge("||", !1), Xe = Ge("&&", !1), oe = Ge("==", !1), Ye = Ge("!=", !1), Oe = Ge(">=", !1), st = Ge(">", !1), at = Ge("<=", !1), ut = Ge("<", !1), kt = Ge("+", !1), rt = Ge("-", !1), Nt = Ge("/", !1), ct = Ge("*", !1), ge = Ge("%", !1), he = Ge("!", !1), pt = Ge(".", !1), Ce = Ge("(", !1), I = Ge(")", !1), Ct = Ge(",", !1), dt = en("string"), At = Ge("'", !1), Tt = Je(["'", "}"], !0, !1), nt = en("integer"), Y = Je([["0", "9"]], !1, !1), Mt = en("number"), Vt = Ge("e", !1), Gt = Ge("E", !1), Jt = Je([["a", "z"], ["A", "Z"], "_"], !1, !1), me = Je([["a", "z"], ["A", "Z"], "_", ["0", "9"]], !1, !1), Ue = en("whitespace"), _t = Je([" ", "	", "\r", `
`], !1, !1), ye = function(b) {
    return b;
  }, Qe = function(b) {
    return Ta(b);
  }, ze = function(b) {
    return b;
  }, or = function() {
    return "";
  }, Pe = function() {
    return it();
  }, yt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, Ft = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, It = function(b) {
    return b;
  }, hr = function(b) {
    return Ma(b);
  }, Me = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, vt = function(b, F) {
    return j_(b, F);
  }, sr = function(b, F) {
    return C_(b, F);
  }, $t = function(b, F) {
    return Da(b, F);
  }, Yt = function(b, F) {
    return Da(b, F);
  }, mr = function(b, F) {
    return ds(b, F);
  }, jr = function(b, F) {
    return ds(b, F);
  }, Qt = function(b, F) {
    return ds(b, F);
  }, xt = function(b, F) {
    return ds(b, F);
  }, G = function(b) {
    return b;
  }, ft = function(b) {
    return b;
  }, Wt = function(b, F) {
    return { type: "UnaryExpression", operator: b, argument: F };
  }, St = function() {
    throw new Error("Incorrect unary operator");
  }, br = function(b, F) {
    return E_(b, F);
  }, Er = function(b, F) {
    return { type: "CallExpression", callee: b, arguments: F };
  }, wr = function(b, F) {
    return [b, ...F];
  }, Ir = function(b) {
    return b;
  }, zr = function(b) {
    return b;
  }, tr = function(b) {
    return Ta(b);
  }, ot = function(b) {
    return b;
  }, jt = function() {
    return "";
  }, Kt = function() {
    return it();
  }, qt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, pr = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, lt = function(b) {
    return b;
  }, re = function(b) {
    return Ma(b);
  }, bt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, ir = function() {
    return { type: "IntegerLiteral", value: S_(it()) };
  }, yr = function() {
    return { type: "NumberLiteral", value: parseFloat(it()) };
  }, fr = function() {
    return { type: "NumberLiteral", value: parseFloat(it()) };
  }, v = function() {
    const b = it();
    if (/\.\./.test(b) || /\.$/.test(b))
      throw new Error("Unexpected token: .");
    return A_(b);
  }, ne = function() {
    return { type: "Identifier", name: it() };
  }, d = 0, j = 0, Ie = [{ line: 1, column: 1 }], Re = 0, Pt = [], L = 0, Dt;
  if ("startRule" in r) {
    if (!(r.startRule in o))
      throw new Error(`Can't start parsing from rule "` + r.startRule + '".');
    i = o[r.startRule];
  }
  function it() {
    return t.substring(j, d);
  }
  function Ge(b, F) {
    return { type: "literal", text: b, ignoreCase: F };
  }
  function Je(b, F, Z) {
    return { type: "class", parts: b, inverted: F, ignoreCase: Z };
  }
  function Ht() {
    return { type: "any" };
  }
  function kr() {
    return { type: "end" };
  }
  function en(b) {
    return { type: "other", description: b };
  }
  function rn(b) {
    var F = Ie[b], Z;
    if (F)
      return F;
    for (Z = b - 1; !Ie[Z]; )
      Z--;
    for (F = Ie[Z], F = {
      line: F.line,
      column: F.column
    }; Z < b; )
      t.charCodeAt(Z) === 10 ? (F.line++, F.column = 1) : F.column++, Z++;
    return Ie[b] = F, F;
  }
  function Jr(b, F, Z) {
    var N = rn(b), we = rn(F), be = {
      source: n,
      start: {
        offset: b,
        line: N.line,
        column: N.column
      },
      end: {
        offset: F,
        line: we.line,
        column: we.column
      }
    };
    return be;
  }
  function ve(b) {
    d < Re || (d > Re && (Re = d, Pt = []), Pt.push(b));
  }
  function wn(b, F, Z) {
    return new Ri(
      Ri.buildMessage(b, F),
      b,
      F,
      Z
    );
  }
  function Xr() {
    var b, F;
    return b = d, Ut(), F = y(), F !== e ? (Ut(), j = b, b = ye(F)) : (d = b, b = e), b;
  }
  function hn() {
    var b, F, Z;
    for (b = d, F = [], Z = zn(); Z !== e; )
      F.push(Z), Z = zn();
    return j = b, F = Qe(F), b = F, b;
  }
  function zn() {
    var b, F, Z, N, we;
    if (b = d, t.substr(d, 2) === s ? (F = s, d += 2) : (F = e, L === 0 && ve(ke)), F !== e ? (Z = Ut(), N = y(), N !== e ? (Ut(), t.charCodeAt(d) === 125 ? (we = a, d++) : (we = e, L === 0 && ve(et)), we !== e ? (j = b, b = ze(N)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.substr(d, 3) === l ? (F = l, d += 3) : (F = e, L === 0 && ve(fe)), F !== e && (j = b, F = or()), b = F, b === e && (b = d, F = d, L++, t.charCodeAt(d) === 92 ? (Z = u, d++) : (Z = e, L === 0 && ve(je)), Z === e && (t.substr(d, 2) === s ? (Z = s, d += 2) : (Z = e, L === 0 && ve(ke))), L--, Z === e ? F = void 0 : (d = F, F = e), F !== e ? (t.length > d ? (Z = t.charAt(d), d++) : (Z = e, L === 0 && ve(ce)), Z !== e ? (j = b, b = Pe()) : (d = b, b = e)) : (d = b, b = e), b === e))) {
      if (b = d, t.substr(d, 2) === s ? (F = s, d += 2) : (F = e, L === 0 && ve(ke)), F !== e) {
        if (Z = [], pe.test(t.charAt(d)) ? (N = t.charAt(d), d++) : (N = e, L === 0 && ve(te)), N !== e)
          for (; N !== e; )
            Z.push(N), pe.test(t.charAt(d)) ? (N = t.charAt(d), d++) : (N = e, L === 0 && ve(te));
        else
          Z = e;
        Z !== e ? (t.charCodeAt(d) === 125 ? (N = a, d++) : (N = e, L === 0 && ve(et)), N !== e ? (j = b, b = yt()) : (d = b, b = e)) : (d = b, b = e);
      } else
        d = b, b = e;
      b === e && (b = d, t.substr(d, 2) === s ? (F = s, d += 2) : (F = e, L === 0 && ve(ke)), F !== e && (j = b, F = Ft()), b = F, b === e && (b = d, t.charCodeAt(d) === 92 ? (F = u, d++) : (F = e, L === 0 && ve(je)), F !== e ? (t.substr(d, 2) === s ? (Z = s, d += 2) : (Z = e, L === 0 && ve(ke)), Z !== e ? (j = b, b = It(Z)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (F = u, d++) : (F = e, L === 0 && ve(je)), F !== e ? (t.length > d ? (Z = t.charAt(d), d++) : (Z = e, L === 0 && ve(ce)), Z !== e ? (j = b, b = hr(Z)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (F = u, d++) : (F = e, L === 0 && ve(je)), F !== e && (j = b, F = Me()), b = F))));
    }
    return b;
  }
  function y() {
    var b, F, Z, N, we, be, zt, Ot, Ur, Dr, Gr;
    return b = d, F = A(), F !== e ? (Z = d, N = Ut(), t.charCodeAt(d) === 63 ? (we = c, d++) : (we = e, L === 0 && ve(_e)), we !== e ? (be = Ut(), zt = y(), zt !== e ? (Ot = Ut(), t.charCodeAt(d) === 58 ? (Ur = f, d++) : (Ur = e, L === 0 && ve(ie)), Ur !== e ? (Dr = Ut(), Gr = y(), Gr !== e ? (N = [N, we, be, zt, Ot, Ur, Dr, Gr], Z = N) : (d = Z, Z = e)) : (d = Z, Z = e)) : (d = Z, Z = e)) : (d = Z, Z = e), Z === e && (Z = null), j = b, b = vt(F, Z)) : (d = b, b = e), b;
  }
  function A() {
    var b, F, Z, N, we, be, zt;
    return b = d, F = S(), F !== e ? (Z = d, N = Ut(), t.substr(d, 2) === _ ? (we = _, d += 2) : (we = e, L === 0 && ve(Fe)), we !== e ? (be = Ut(), zt = y(), zt !== e ? (N = [N, we, be, zt], Z = N) : (d = Z, Z = e)) : (d = Z, Z = e), Z === e && (Z = null), j = b, b = sr(F, Z)) : (d = b, b = e), b;
  }
  function S() {
    var b, F, Z, N, we, be, zt, Ot;
    if (b = d, F = x(), F !== e) {
      for (Z = [], N = d, we = Ut(), t.substr(d, 2) === h ? (be = h, d += 2) : (be = e, L === 0 && ve(xe)), be !== e ? (zt = Ut(), Ot = x(), Ot !== e ? (we = [we, be, zt, Ot], N = we) : (d = N, N = e)) : (d = N, N = e); N !== e; )
        Z.push(N), N = d, we = Ut(), t.substr(d, 2) === h ? (be = h, d += 2) : (be = e, L === 0 && ve(xe)), be !== e ? (zt = Ut(), Ot = x(), Ot !== e ? (we = [we, be, zt, Ot], N = we) : (d = N, N = e)) : (d = N, N = e);
      j = b, b = $t(F, Z);
    } else
      d = b, b = e;
    return b;
  }
  function x() {
    var b, F, Z, N, we, be, zt, Ot;
    if (b = d, F = z(), F !== e) {
      for (Z = [], N = d, we = Ut(), t.substr(d, 2) === m ? (be = m, d += 2) : (be = e, L === 0 && ve(Xe)), be !== e ? (zt = Ut(), Ot = z(), Ot !== e ? (we = [we, be, zt, Ot], N = we) : (d = N, N = e)) : (d = N, N = e); N !== e; )
        Z.push(N), N = d, we = Ut(), t.substr(d, 2) === m ? (be = m, d += 2) : (be = e, L === 0 && ve(Xe)), be !== e ? (zt = Ut(), Ot = z(), Ot !== e ? (we = [we, be, zt, Ot], N = we) : (d = N, N = e)) : (d = N, N = e);
      j = b, b = Yt(F, Z);
    } else
      d = b, b = e;
    return b;
  }
  function z() {
    var b, F, Z, N, we, be, zt, Ot;
    if (b = d, F = Ze(), F !== e) {
      for (Z = [], N = d, we = Ut(), t.substr(d, 2) === p ? (be = p, d += 2) : (be = e, L === 0 && ve(oe)), be === e && (t.substr(d, 2) === k ? (be = k, d += 2) : (be = e, L === 0 && ve(Ye))), be !== e ? (zt = Ut(), Ot = Ze(), Ot !== e ? (we = [we, be, zt, Ot], N = we) : (d = N, N = e)) : (d = N, N = e); N !== e; )
        Z.push(N), N = d, we = Ut(), t.substr(d, 2) === p ? (be = p, d += 2) : (be = e, L === 0 && ve(oe)), be === e && (t.substr(d, 2) === k ? (be = k, d += 2) : (be = e, L === 0 && ve(Ye))), be !== e ? (zt = Ut(), Ot = Ze(), Ot !== e ? (we = [we, be, zt, Ot], N = we) : (d = N, N = e)) : (d = N, N = e);
      j = b, b = mr(F, Z);
    } else
      d = b, b = e;
    return b;
  }
  function Ze() {
    var b, F, Z, N, we, be, zt, Ot;
    if (b = d, F = Se(), F !== e) {
      for (Z = [], N = d, we = Ut(), t.substr(d, 2) === w ? (be = w, d += 2) : (be = e, L === 0 && ve(Oe)), be === e && (t.charCodeAt(d) === 62 ? (be = O, d++) : (be = e, L === 0 && ve(st)), be === e && (t.substr(d, 2) === U ? (be = U, d += 2) : (be = e, L === 0 && ve(at)), be === e && (t.charCodeAt(d) === 60 ? (be = R, d++) : (be = e, L === 0 && ve(ut))))), be !== e ? (zt = Ut(), Ot = Se(), Ot !== e ? (we = [we, be, zt, Ot], N = we) : (d = N, N = e)) : (d = N, N = e); N !== e; )
        Z.push(N), N = d, we = Ut(), t.substr(d, 2) === w ? (be = w, d += 2) : (be = e, L === 0 && ve(Oe)), be === e && (t.charCodeAt(d) === 62 ? (be = O, d++) : (be = e, L === 0 && ve(st)), be === e && (t.substr(d, 2) === U ? (be = U, d += 2) : (be = e, L === 0 && ve(at)), be === e && (t.charCodeAt(d) === 60 ? (be = R, d++) : (be = e, L === 0 && ve(ut))))), be !== e ? (zt = Ut(), Ot = Se(), Ot !== e ? (we = [we, be, zt, Ot], N = we) : (d = N, N = e)) : (d = N, N = e);
      j = b, b = jr(F, Z);
    } else
      d = b, b = e;
    return b;
  }
  function Se() {
    var b, F, Z, N, we, be, zt, Ot;
    if (b = d, F = Xt(), F !== e) {
      for (Z = [], N = d, we = Ut(), t.charCodeAt(d) === 43 ? (be = $, d++) : (be = e, L === 0 && ve(kt)), be === e && (t.charCodeAt(d) === 45 ? (be = ue, d++) : (be = e, L === 0 && ve(rt))), be !== e ? (zt = Ut(), Ot = Xt(), Ot !== e ? (we = [we, be, zt, Ot], N = we) : (d = N, N = e)) : (d = N, N = e); N !== e; )
        Z.push(N), N = d, we = Ut(), t.charCodeAt(d) === 43 ? (be = $, d++) : (be = e, L === 0 && ve(kt)), be === e && (t.charCodeAt(d) === 45 ? (be = ue, d++) : (be = e, L === 0 && ve(rt))), be !== e ? (zt = Ut(), Ot = Xt(), Ot !== e ? (we = [we, be, zt, Ot], N = we) : (d = N, N = e)) : (d = N, N = e);
      j = b, b = Qt(F, Z);
    } else
      d = b, b = e;
    return b;
  }
  function Xt() {
    var b, F, Z, N, we, be, zt, Ot;
    if (b = d, F = wt(), F !== e) {
      for (Z = [], N = d, we = Ut(), t.charCodeAt(d) === 47 ? (be = T, d++) : (be = e, L === 0 && ve(Nt)), be === e && (t.charCodeAt(d) === 42 ? (be = X, d++) : (be = e, L === 0 && ve(ct)), be === e && (t.charCodeAt(d) === 37 ? (be = le, d++) : (be = e, L === 0 && ve(ge)))), be !== e ? (zt = Ut(), Ot = wt(), Ot !== e ? (we = [we, be, zt, Ot], N = we) : (d = N, N = e)) : (d = N, N = e); N !== e; )
        Z.push(N), N = d, we = Ut(), t.charCodeAt(d) === 47 ? (be = T, d++) : (be = e, L === 0 && ve(Nt)), be === e && (t.charCodeAt(d) === 42 ? (be = X, d++) : (be = e, L === 0 && ve(ct)), be === e && (t.charCodeAt(d) === 37 ? (be = le, d++) : (be = e, L === 0 && ve(ge)))), be !== e ? (zt = Ut(), Ot = wt(), Ot !== e ? (we = [we, be, zt, Ot], N = we) : (d = N, N = e)) : (d = N, N = e);
      j = b, b = xt(F, Z);
    } else
      d = b, b = e;
    return b;
  }
  function wt() {
    var b, F, Z, N;
    return b = d, F = d, L++, t.charCodeAt(d) === 45 ? (Z = ue, d++) : (Z = e, L === 0 && ve(rt)), L--, Z !== e ? (d = F, F = void 0) : F = e, F !== e ? (Z = Dn(), Z !== e ? (j = b, b = G(Z)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, F = d, L++, t.charCodeAt(d) === 45 ? (Z = ue, d++) : (Z = e, L === 0 && ve(rt)), L--, Z !== e ? (d = F, F = void 0) : F = e, F !== e ? (Z = tn(), Z !== e ? (j = b, b = ft(Z)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 33 ? (F = C, d++) : (F = e, L === 0 && ve(he)), F === e && (t.charCodeAt(d) === 43 ? (F = $, d++) : (F = e, L === 0 && ve(kt)), F === e && (t.charCodeAt(d) === 45 ? (F = ue, d++) : (F = e, L === 0 && ve(rt)))), F !== e ? (Z = Ut(), N = qe(), N === e && (N = rr()), N !== e ? (j = b, b = Wt(F, N)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = rr()))), b;
  }
  function qe() {
    var b, F;
    return b = d, t.charCodeAt(d) === 43 ? (F = $, d++) : (F = e, L === 0 && ve(kt)), F === e && (t.charCodeAt(d) === 45 ? (F = ue, d++) : (F = e, L === 0 && ve(rt))), F !== e && (j = b, F = St()), b = F, b;
  }
  function rr() {
    var b, F, Z, N, we, be, zt, Ot, Ur, Dr, Gr, ho, Yn, so, Vn;
    if (b = d, F = Et(), F !== e) {
      for (Z = [], N = d, we = Ut(), t.charCodeAt(d) === 46 ? (be = M, d++) : (be = e, L === 0 && ve(pt)), be !== e ? (zt = Ut(), Ot = qn(), Ot !== e ? (Ur = Ut(), Dr = d, t.charCodeAt(d) === 40 ? (Gr = P, d++) : (Gr = e, L === 0 && ve(Ce)), Gr !== e ? (ho = Ut(), Yn = lr(), Yn !== e ? (so = Ut(), t.charCodeAt(d) === 41 ? (Vn = H, d++) : (Vn = e, L === 0 && ve(I)), Vn !== e ? (Gr = [Gr, ho, Yn, so, Vn], Dr = Gr) : (d = Dr, Dr = e)) : (d = Dr, Dr = e)) : (d = Dr, Dr = e), Dr === e && (Dr = null), we = [we, be, zt, Ot, Ur, Dr], N = we) : (d = N, N = e)) : (d = N, N = e); N !== e; )
        Z.push(N), N = d, we = Ut(), t.charCodeAt(d) === 46 ? (be = M, d++) : (be = e, L === 0 && ve(pt)), be !== e ? (zt = Ut(), Ot = qn(), Ot !== e ? (Ur = Ut(), Dr = d, t.charCodeAt(d) === 40 ? (Gr = P, d++) : (Gr = e, L === 0 && ve(Ce)), Gr !== e ? (ho = Ut(), Yn = lr(), Yn !== e ? (so = Ut(), t.charCodeAt(d) === 41 ? (Vn = H, d++) : (Vn = e, L === 0 && ve(I)), Vn !== e ? (Gr = [Gr, ho, Yn, so, Vn], Dr = Gr) : (d = Dr, Dr = e)) : (d = Dr, Dr = e)) : (d = Dr, Dr = e), Dr === e && (Dr = null), we = [we, be, zt, Ot, Ur, Dr], N = we) : (d = N, N = e)) : (d = N, N = e);
      j = b, b = br(F, Z);
    } else
      d = b, b = e;
    return b;
  }
  function Et() {
    var b, F, Z, N, we;
    return b = d, F = qn(), F !== e ? (Ut(), t.charCodeAt(d) === 40 ? (Z = P, d++) : (Z = e, L === 0 && ve(Ce)), Z !== e ? (Ut(), N = lr(), N !== e ? (Ut(), t.charCodeAt(d) === 41 ? (we = H, d++) : (we = e, L === 0 && ve(I)), we !== e ? (j = b, b = Er(F, N)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = Vr()), b;
  }
  function lr() {
    var b, F, Z, N, we, be;
    if (b = d, F = y(), F !== e) {
      for (Z = [], N = d, Ut(), t.charCodeAt(d) === 44 ? (we = se, d++) : (we = e, L === 0 && ve(Ct)), we !== e ? (Ut(), be = y(), be !== e ? N = be : (d = N, N = e)) : (d = N, N = e); N !== e; )
        Z.push(N), N = d, Ut(), t.charCodeAt(d) === 44 ? (we = se, d++) : (we = e, L === 0 && ve(Ct)), we !== e ? (Ut(), be = y(), be !== e ? N = be : (d = N, N = e)) : (d = N, N = e);
      j = b, b = wr(F, Z);
    } else
      d = b, b = e;
    return b === e && (b = Ut()), b;
  }
  function Vr() {
    var b, F, Z, N;
    return b = Jn(), b === e && (b = sn(), b === e && (b = Dn(), b === e && (b = tn(), b === e && (b = d, t.charCodeAt(d) === 40 ? (F = P, d++) : (F = e, L === 0 && ve(Ce)), F !== e ? (Ut(), Z = y(), Z !== e ? (Ut(), t.charCodeAt(d) === 41 ? (N = H, d++) : (N = e, L === 0 && ve(I)), N !== e ? (j = b, b = Ir(Z)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e))))), b;
  }
  function sn() {
    var b, F, Z, N;
    return L++, b = d, t.charCodeAt(d) === 39 ? (F = de, d++) : (F = e, L === 0 && ve(At)), F !== e ? (Z = Zr(), t.charCodeAt(d) === 39 ? (N = de, d++) : (N = e, L === 0 && ve(At)), N !== e ? (j = b, b = zr(Z)) : (d = b, b = e)) : (d = b, b = e), L--, b === e && (F = e, L === 0 && ve(dt)), b;
  }
  function Zr() {
    var b, F, Z;
    for (b = d, F = [], Z = Sn(); Z !== e; )
      F.push(Z), Z = Sn();
    return j = b, F = tr(F), b = F, b;
  }
  function Sn() {
    var b, F, Z, N, we;
    if (b = d, t.substr(d, 2) === s ? (F = s, d += 2) : (F = e, L === 0 && ve(ke)), F !== e ? (Z = Ut(), N = y(), N !== e ? (Ut(), t.charCodeAt(d) === 125 ? (we = a, d++) : (we = e, L === 0 && ve(et)), we !== e ? (j = b, b = ot(N)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.substr(d, 3) === l ? (F = l, d += 3) : (F = e, L === 0 && ve(fe)), F !== e && (j = b, F = jt()), b = F, b === e && (b = d, F = d, L++, t.charCodeAt(d) === 92 ? (Z = u, d++) : (Z = e, L === 0 && ve(je)), Z === e && (t.charCodeAt(d) === 39 ? (Z = de, d++) : (Z = e, L === 0 && ve(At)), Z === e && (t.substr(d, 2) === s ? (Z = s, d += 2) : (Z = e, L === 0 && ve(ke)))), L--, Z === e ? F = void 0 : (d = F, F = e), F !== e ? (t.length > d ? (Z = t.charAt(d), d++) : (Z = e, L === 0 && ve(ce)), Z !== e ? (j = b, b = Kt()) : (d = b, b = e)) : (d = b, b = e), b === e))) {
      if (b = d, t.substr(d, 2) === s ? (F = s, d += 2) : (F = e, L === 0 && ve(ke)), F !== e) {
        if (Z = [], De.test(t.charAt(d)) ? (N = t.charAt(d), d++) : (N = e, L === 0 && ve(Tt)), N !== e)
          for (; N !== e; )
            Z.push(N), De.test(t.charAt(d)) ? (N = t.charAt(d), d++) : (N = e, L === 0 && ve(Tt));
        else
          Z = e;
        Z !== e ? (t.charCodeAt(d) === 125 ? (N = a, d++) : (N = e, L === 0 && ve(et)), N !== e ? (j = b, b = qt()) : (d = b, b = e)) : (d = b, b = e);
      } else
        d = b, b = e;
      b === e && (b = d, t.substr(d, 2) === s ? (F = s, d += 2) : (F = e, L === 0 && ve(ke)), F !== e && (j = b, F = pr()), b = F, b === e && (b = d, t.charCodeAt(d) === 92 ? (F = u, d++) : (F = e, L === 0 && ve(je)), F !== e ? (t.substr(d, 2) === s ? (Z = s, d += 2) : (Z = e, L === 0 && ve(ke)), Z !== e ? (j = b, b = lt(Z)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (F = u, d++) : (F = e, L === 0 && ve(je)), F !== e ? (t.length > d ? (Z = t.charAt(d), d++) : (Z = e, L === 0 && ve(ce)), Z !== e ? (j = b, b = re(Z)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (F = u, d++) : (F = e, L === 0 && ve(je)), F !== e && (j = b, F = bt()), b = F))));
    }
    return b;
  }
  function tn() {
    var b, F, Z;
    if (L++, b = d, t.charCodeAt(d) === 45 ? d++ : L === 0 && ve(rt), F = [], ee.test(t.charAt(d)) ? (Z = t.charAt(d), d++) : (Z = e, L === 0 && ve(Y)), Z !== e)
      for (; Z !== e; )
        F.push(Z), ee.test(t.charAt(d)) ? (Z = t.charAt(d), d++) : (Z = e, L === 0 && ve(Y));
    else
      F = e;
    return F !== e ? (j = b, b = ir()) : (d = b, b = e), L--, b === e && L === 0 && ve(nt), b;
  }
  function Dn() {
    var b, F, Z, N, we, be, zt, Ot, Ur;
    for (L++, b = d, t.charCodeAt(d) === 45 ? d++ : L === 0 && ve(rt), F = [], ee.test(t.charAt(d)) ? (Z = t.charAt(d), d++) : (Z = e, L === 0 && ve(Y)); Z !== e; )
      F.push(Z), ee.test(t.charAt(d)) ? (Z = t.charAt(d), d++) : (Z = e, L === 0 && ve(Y));
    if (t.charCodeAt(d) === 46 ? (Z = M, d++) : (Z = e, L === 0 && ve(pt)), Z !== e) {
      if (N = [], ee.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, L === 0 && ve(Y)), we !== e)
        for (; we !== e; )
          N.push(we), ee.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, L === 0 && ve(Y));
      else
        N = e;
      if (N !== e) {
        if (we = d, t.charCodeAt(d) === 101 ? (be = Ee, d++) : (be = e, L === 0 && ve(Vt)), be === e && (t.charCodeAt(d) === 69 ? (be = Ae, d++) : (be = e, L === 0 && ve(Gt))), be !== e) {
          if (t.charCodeAt(d) === 43 ? (zt = $, d++) : (zt = e, L === 0 && ve(kt)), zt === e && (t.charCodeAt(d) === 45 ? (zt = ue, d++) : (zt = e, L === 0 && ve(rt))), zt === e && (zt = null), Ot = [], ee.test(t.charAt(d)) ? (Ur = t.charAt(d), d++) : (Ur = e, L === 0 && ve(Y)), Ur !== e)
            for (; Ur !== e; )
              Ot.push(Ur), ee.test(t.charAt(d)) ? (Ur = t.charAt(d), d++) : (Ur = e, L === 0 && ve(Y));
          else
            Ot = e;
          Ot !== e ? (be = [be, zt, Ot], we = be) : (d = we, we = e);
        } else
          d = we, we = e;
        we === e && (we = null), j = b, b = yr();
      } else
        d = b, b = e;
    } else
      d = b, b = e;
    if (b === e) {
      if (b = d, t.charCodeAt(d) === 45 ? d++ : L === 0 && ve(rt), F = [], ee.test(t.charAt(d)) ? (Z = t.charAt(d), d++) : (Z = e, L === 0 && ve(Y)), Z !== e)
        for (; Z !== e; )
          F.push(Z), ee.test(t.charAt(d)) ? (Z = t.charAt(d), d++) : (Z = e, L === 0 && ve(Y));
      else
        F = e;
      if (F !== e)
        if (t.charCodeAt(d) === 101 ? (Z = Ee, d++) : (Z = e, L === 0 && ve(Vt)), Z === e && (t.charCodeAt(d) === 69 ? (Z = Ae, d++) : (Z = e, L === 0 && ve(Gt))), Z !== e) {
          if (t.charCodeAt(d) === 43 ? (N = $, d++) : (N = e, L === 0 && ve(kt)), N === e && (t.charCodeAt(d) === 45 ? (N = ue, d++) : (N = e, L === 0 && ve(rt))), N === e && (N = null), we = [], ee.test(t.charAt(d)) ? (be = t.charAt(d), d++) : (be = e, L === 0 && ve(Y)), be !== e)
            for (; be !== e; )
              we.push(be), ee.test(t.charAt(d)) ? (be = t.charAt(d), d++) : (be = e, L === 0 && ve(Y));
          else
            we = e;
          we !== e ? (j = b, b = fr()) : (d = b, b = e);
        } else
          d = b, b = e;
      else
        d = b, b = e;
    }
    return L--, b === e && L === 0 && ve(Mt), b;
  }
  function Jn() {
    var b, F, Z, N, we, be, zt, Ot, Ur, Dr, Gr;
    if (b = d, Te.test(t.charAt(d)) ? (F = t.charAt(d), d++) : (F = e, L === 0 && ve(Jt)), F !== e) {
      if (Z = [], N = [], We.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, L === 0 && ve(me)), we !== e)
        for (; we !== e; )
          N.push(we), We.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, L === 0 && ve(me));
      else
        N = e;
      for (N === e && (N = d, t.charCodeAt(d) === 46 ? (we = M, d++) : (we = e, L === 0 && ve(pt)), we !== e ? (be = d, L++, zt = d, Ot = Ut(), Ur = qn(), Ur !== e ? (Dr = Ut(), t.charCodeAt(d) === 40 ? (Gr = P, d++) : (Gr = e, L === 0 && ve(Ce)), Gr !== e ? (Ot = [Ot, Ur, Dr, Gr], zt = Ot) : (d = zt, zt = e)) : (d = zt, zt = e), L--, zt === e ? be = void 0 : (d = be, be = e), be !== e ? (we = [we, be], N = we) : (d = N, N = e)) : (d = N, N = e)); N !== e; ) {
        if (Z.push(N), N = [], We.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, L === 0 && ve(me)), we !== e)
          for (; we !== e; )
            N.push(we), We.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, L === 0 && ve(me));
        else
          N = e;
        N === e && (N = d, t.charCodeAt(d) === 46 ? (we = M, d++) : (we = e, L === 0 && ve(pt)), we !== e ? (be = d, L++, zt = d, Ot = Ut(), Ur = qn(), Ur !== e ? (Dr = Ut(), t.charCodeAt(d) === 40 ? (Gr = P, d++) : (Gr = e, L === 0 && ve(Ce)), Gr !== e ? (Ot = [Ot, Ur, Dr, Gr], zt = Ot) : (d = zt, zt = e)) : (d = zt, zt = e), L--, zt === e ? be = void 0 : (d = be, be = e), be !== e ? (we = [we, be], N = we) : (d = N, N = e)) : (d = N, N = e));
      }
      j = b, b = v();
    } else
      d = b, b = e;
    return b;
  }
  function qn() {
    var b, F, Z, N;
    if (b = d, Te.test(t.charAt(d)) ? (F = t.charAt(d), d++) : (F = e, L === 0 && ve(Jt)), F !== e) {
      for (Z = [], We.test(t.charAt(d)) ? (N = t.charAt(d), d++) : (N = e, L === 0 && ve(me)); N !== e; )
        Z.push(N), We.test(t.charAt(d)) ? (N = t.charAt(d), d++) : (N = e, L === 0 && ve(me));
      j = b, b = ne();
    } else
      d = b, b = e;
    return b;
  }
  function Ut() {
    var b, F;
    for (L++, b = [], Ke.test(t.charAt(d)) ? (F = t.charAt(d), d++) : (F = e, L === 0 && ve(_t)); F !== e; )
      b.push(F), Ke.test(t.charAt(d)) ? (F = t.charAt(d), d++) : (F = e, L === 0 && ve(_t));
    return L--, F = e, L === 0 && ve(Ue), b;
  }
  if (Dt = i(), Dt !== e && d === t.length)
    return Dt;
  throw Dt !== e && d < t.length && ve(kr()), wn(
    Pt,
    Re < t.length ? t.charAt(Re) : null,
    Re < t.length ? Jr(Re, Re + 1) : Jr(Re, Re)
  );
}
const F_ = 2147483647, I_ = -2147483648, D_ = Number.MAX_VALUE, T_ = Number.MIN_VALUE, Le = "string", Ne = "integer", gt = "number", Wr = "boolean", dn = "color", eo = "url", Pr = "datetime", dr = "dict", _r = "array", M_ = "function";
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
function ad(t, r) {
  for (; t.length < r; )
    t = "0" + t;
  return t;
}
function gr(t, r = 1, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = fo(t);
  return n ? (n.a *= r, ca(n)) : e;
}
function P_(t, r, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = fo(t);
  return n ? (n.a = r, ca(n)) : e;
}
function ca(t) {
  return t.a === 255 ? `#${[t.r, t.g, t.b].map((r) => ad(Math.round(r).toString(16), 2)).join("")}` : `rgba(${t.r},${t.g},${t.b},${(t.a / 255).toFixed(2)})`;
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
class fa extends Error {
}
function Hs(t) {
  return t.type === "url" || t.type === "color" ? {
    type: "string",
    value: t.value
  } : t;
}
function ud(t) {
  return t.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, "");
}
function Ci(t, r) {
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
      return ud(t.value);
    if (t.type === "color")
      return Ai(tl(t.value));
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
  let r = Ci(t, !1);
  return t.type === "string" && (r = "'" + r.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'"), r;
}
function Zn(t) {
  return t === "datetime" ? "DateTime" : t.charAt(0).toUpperCase() + t.substring(1);
}
function Ei(t, r) {
  return gn(r);
}
function Mn(t, r) {
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
function N_(t) {
  try {
    return _o(t), !0;
  } catch {
    return !1;
  }
}
function z_(t) {
  const r = /* @__PURE__ */ new Set();
  return no(t, {
    Variable(e) {
      r.add(e.id.name);
    }
  }), [...r];
}
function En(t, r) {
  throw new fa(`Failed to evaluate [${t}]. ${r}`);
}
function O_(t, r) {
  throw new Error(r);
}
function tl(t) {
  const r = fo(t);
  if (r)
    return r;
  throw new Error("Unable to convert value to Color, expected format #AARRGGBB.");
}
function Ai(t) {
  return `#${[t.a, t.r, t.g, t.b].map((r) => {
    if (r < 0 || r > 255)
      throw new Error("Value out of range 0..1.");
    return ad(Math.round(r).toString(16), 2);
  }).join("").toUpperCase()}`;
}
function oi(t) {
  return Ai(tl(t));
}
function zl(t) {
  return {
    type: gt,
    value: Number(t.value)
  };
}
const R_ = {
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
function rl(t, r, e) {
  if (e === "function")
    throw new Error("Cannot convert function");
  const n = R_[e];
  let o = typeof r;
  if (n === "array" && !Array.isArray(r) || n !== "array" && o !== n || o === "object" && r === null)
    throw o === "object" && (Array.isArray(r) ? o = "array" : r === null ? o = "null" : o = "dict"), new Error(`Incorrect value type: expected ${Zn(e)}, got ${Zn(o)}.`);
  if (n === "number" && e === "integer") {
    t && Mn(t, r);
    try {
      r = gn(r);
    } catch {
      throw new Error("Cannot convert value to integer.");
    }
  }
  return n === "string" && e === "color" && (r = oi(r)), n === "string" && e === "url" && _o(r), n === "boolean" && e === Wr && (r = r ? 1 : 0), {
    type: e,
    value: r
  };
}
function L_(t) {
  return t.type === "number" || t.type === "integer" ? Number(t.value) : t.type === "boolean" ? !!t.value : t.value;
}
function nl(t) {
  return L_(
    rl(void 0, t.value, t.type)
  );
}
const rs = /* @__PURE__ */ new Map(), Ol = /* @__PURE__ */ new Map(), Cs = /* @__PURE__ */ new Map(), Rl = /* @__PURE__ */ new Map();
function W(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = rs.get(t) || [];
  rs.has(t) || rs.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  Ol.set(i, n);
}
function Lr(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = Cs.get(t) || [];
  Cs.has(t) || Cs.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  Rl.set(i, n);
}
function B_(t, r, e) {
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
    }), l.type === gt && r[a].type === Ne) {
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
function cd(t, r) {
  if (!t)
    return {
      type: "missing"
    };
  let e = null, n = null;
  for (let o = 0; o < t.length; ++o) {
    const i = B_(t[o], r, t.length > 1);
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
function Ll(t, r, e) {
  return cd(t.get(r), e);
}
function fd(t, r) {
  return r.map((e, n) => {
    let o = n >= t.args.length ? t.args[t.args.length - 1] : t.args[n];
    return typeof o != "object" && (o = {
      type: o
    }), o.type === gt && e.type === Ne ? zl(e) : e;
  });
}
function Pa(t, r) {
  return t + ":" + r.args.map((e) => typeof e == "string" ? e : e.type).join("#");
}
function Bn(t, r) {
  return {
    type: Le,
    value: Ci(r, !0)
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
function H_(t, r) {
  if (r.value > is || r.value < ss)
    throw new Error("Unable to convert value to Integer.");
  const e = r.value - r.value % 1;
  return {
    type: Ne,
    value: gn(e)
  };
}
function W_(t, r) {
  let e;
  try {
    e = gn(r.value);
  } catch {
    throw new Error("Unable to convert value to Integer.");
  }
  return {
    type: Ne,
    value: e
  };
}
function U_(t, r) {
  return {
    type: Ne,
    value: gn(r.value ? 1 : 0)
  };
}
function G_(t, r) {
  const e = Number(r.value);
  if (e !== 1 && e !== 0)
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Wr,
    value: e
  };
}
function J_(t, r) {
  if (r.value !== "true" && r.value !== "false")
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Wr,
    value: r.value === "true" ? 1 : 0
  };
}
function q_(t, r) {
  return {
    type: dn,
    value: oi(r.value)
  };
}
function Y_(t, r) {
  return _o(r.value), {
    type: eo,
    value: r.value
  };
}
function K_(t, r) {
  try {
    return {
      type: Le,
      value: encodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to encodeUri string.");
  }
}
function X_(t, r) {
  try {
    return {
      type: Le,
      value: decodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to decodeUri string.");
  }
}
function da(t, r, e, n) {
  const o = t.variables.get(r.value);
  let i;
  return o && o.getType() === n ? (i = o.getValue(), t.storeUsedVars || (t.storeUsedVars = /* @__PURE__ */ new Set()), t.storeUsedVars.add(o)) : i = e.value, n === "color" ? i = oi(i) : n === "url" && _o(i), {
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
function Oa(t, r, e) {
  return da(t, r, e, "url");
}
function dd(t, r) {
  for (let e = 0; e < r.length; ++e) {
    const n = t.charAt(e), o = r.charAt(e);
    if (n !== o && o)
      return o;
  }
  return "";
}
const Ws = 1234567890;
function Ra(t) {
  const r = new Intl.NumberFormat(t, {
    maximumFractionDigits: 0
  }), e = new Intl.NumberFormat(t, {
    minimumFractionDigits: 1
  }), n = r.format(Ws), o = e.format(Ws);
  return dd(n, o);
}
function Z_(t) {
  const r = new Intl.NumberFormat(t, {
    useGrouping: !1
  }), e = new Intl.NumberFormat(t, {
    useGrouping: !0
  }), n = r.format(Ws), o = e.format(Ws);
  return dd(n, o);
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
      const U = Z_(n == null ? void 0 : n.value), R = Ra(n == null ? void 0 : n.value);
      if (U && R) {
        const $ = O.split(R), ue = $[0];
        let T = "";
        for (let X = ue.length - 1; X >= 0; --X)
          T = ue[X] + T, X > 0 && (ue.length - X) % h === 0 && (T = U + T);
        O = T + ($.length > 1 ? R + $[1] : "");
      }
    }
    if (p === 0 && k === 0 && o.endsWith(".")) {
      const U = Ra(n == null ? void 0 : n.value);
      U && (O += U);
    }
    return {
      type: Le,
      value: O
    };
  } catch (m) {
    throw new Error("Incorrect or unsupported number format." + m + " " + (n == null ? void 0 : n.value) || void 0);
  }
}
function Q_() {
  W("toString", [Ne], Bn), W("toString", [gt], Bn), W("toString", [Wr], Bn), W("toString", [dn], Bn), W("toString", [eo], Bn), W("toString", [Le], Bn), W("toString", [_r], Bn), W("toString", [dr], Bn), W("toNumber", [Ne], Na), W("toNumber", [Le], Na), W("toInteger", [gt], H_), W("toInteger", [Le], W_), W("toInteger", [Wr], U_), W("toBoolean", [Ne], G_), W("toBoolean", [Le], J_), W("toColor", [Le], q_), W("toUrl", [Le], Y_), W("encodeUri", [Le], K_), W("decodeUri", [Le], X_), W("getIntegerValue", [Le, Ne], _s), W("getNumberValue", [Le, gt], _s), W("getBooleanValue", [Le, Wr], _s), W("getStringValue", [Le, Le], _s), W("getColorValue", [Le, dn], za), W("getColorValue", [Le, Le], za), W("getUrlValue", [Le, eo], Oa), W("getUrlValue", [Le, Le], Oa), Lr("toString", [Ne], Bn), Lr("toString", [gt], Bn), Lr("toString", [Wr], Bn), Lr("toString", [dn], Bn), Lr("toString", [eo], Bn), Lr("toString", [Le], Bn), Lr("toString", [_r], Bn), Lr("toString", [dr], Bn), W("decimalFormat", [Ne, Le], Zo), W("decimalFormat", [gt, Le], Zo), W("decimalFormat", [Ne, Le, Le], Zo), W("decimalFormat", [gt, Le, Le], Zo), Lr("decimalFormat", [Ne, Le], Zo), Lr("decimalFormat", [gt, Le], Zo), Lr("decimalFormat", [Ne, Le, Le], Zo), Lr("decimalFormat", [gt, Le, Le], Zo);
}
function Hn(t, r) {
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
    return Hn(r({
      day: "numeric"
    }, "day"), t > 1 ? t : 0);
  },
  D(t, r) {
    return Hn(r({}, "dayofyear"), t > 1 ? t : 0);
  },
  F(t, r) {
    return Hn(r({}, "dayofweekinmonth"), t > 1 ? t : 0);
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
    return Hn(r({
      year: t === 2 ? "2-digit" : "numeric"
    }, "year"), t > 2 ? t : void 0);
  },
  Y(t, r) {
    return Hn(r({
      year: t === 2 ? "2-digit" : "numeric"
    }, "weekyear"), t > 2 ? t : void 0);
  },
  u(t, r) {
    return Hn(r({
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
    return t > 2 ? Bl.E(t, r) : Hn(r({}, "weekdaynumeric"), t > 1 ? t : void 0);
  },
  w(t, r) {
    return Hn(r({}, "week"), t > 1 ? t : void 0);
  },
  W(t, r) {
    return Hn(r({}, "weekofmonth"), t > 1 ? t : void 0);
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
    return Hn(n, t > 1 ? t : void 0);
  },
  h(t, r) {
    return Hn(r({
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
    return Hn(n, t > 1 ? t : void 0);
  },
  k(t, r) {
    return Hn(r({
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
    return Hn(r({
      minute: "numeric"
    }, "minute"), t > 1 ? t : void 0);
  },
  s(t, r) {
    return Hn(r({
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
    return (e >= 0 ? "+" : "-") + Hn(String(o), 4);
  }
}, x_ = /(\w)\1*|''|'(''|[^'])+('|$)|./g, $_ = /^'([^]*?)'?$/, ep = /''/g, tp = /[a-zA-Z]/, _a = 1e3 * 60 * 60 * 24;
function rp(t) {
  const r = t.match($_);
  return r ? r[1].replace(ep, "'") : t;
}
function Hl(t, r, e) {
  const n = t[r ? "getUTCDay" : "getDay"](), o = n < e ? e - n - 7 : e - n;
  return new Date(t.getTime() + _a * o);
}
function La(t, r, e) {
  const n = new Date(t);
  return n[r ? "setUTCDate" : "setDate"](1), n[r ? "setUTCMonth" : "setMonth"](0), Hl(n, r, e);
}
function Ba(t, r) {
  return Math.round((t.getTime() - r.getTime()) / _a);
}
function Ha(t, r, e) {
  let n = 0;
  const o = La(t, r || !1, e), i = new Date(t);
  i[r ? "setUTCFullYear" : "setFullYear"](t[r ? "getUTCFullYear" : "getFullYear"]() + 1);
  const s = La(i, r || !1, e), a = t.getTime() < o.getTime(), l = t.getTime() >= s.getTime();
  let u = t[r ? "getUTCFullYear" : "getFullYear"]();
  if (a) {
    --u, o[r ? "setUTCFullYear" : "setFullYear"](o[r ? "getUTCFullYear" : "getFullYear"]() - 1);
    const c = Ba(Hl(t, r, e), o);
    n = Math.round(c / 7) + 1;
  } else if (l)
    ++u, n = 1;
  else {
    const c = Ba(Hl(t, r, e), o);
    n = Math.round(c / 7) + 1;
  }
  return {
    week: n,
    year: u
  };
}
function np(t, r, {
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
  return (r.match(x_) || []).map((s) => {
    if (s === "''")
      return "'";
    const a = s[0];
    if (a === "'")
      return rp(s);
    if (Bl[a])
      return Bl[a](s.length, i);
    if (a.match(tp))
      throw new Error(
        `Format string contains an unescaped latin alphabet character "${a}"`
      );
    return s;
  }).join("");
}
function op(t) {
  const r = new Date(t);
  return r.setUTCMonth(r.getUTCMonth() + 1), r.setUTCDate(0), r.getUTCDate();
}
function ip(t, r) {
  return {
    type: Pr,
    value: new Date(Number(r.value) * 1e3)
  };
}
function sp(t, r) {
  const e = new Date(Number(r.value) * 1e3), n = e.getTimezoneOffset();
  return e.setMinutes(e.getMinutes() - n), {
    type: Pr,
    value: e
  };
}
function lp() {
  return {
    type: Pr,
    value: /* @__PURE__ */ new Date()
  };
}
function ap(t, r, e) {
  return {
    type: Pr,
    value: new Date(r.value.getTime() + Number(e.value))
  };
}
function up(t, r, e) {
  const n = new Date(r.value);
  return n.setUTCFullYear(Number(e.value)), {
    type: Pr,
    value: n
  };
}
function cp(t, r, e) {
  const n = Number(e.value);
  if (n < 1 || n > 12)
    throw new Error(`Expecting month in [1..12], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMonth(n - 1), {
    type: Pr,
    value: o
  };
}
function fp(t, r, e) {
  const n = new Date(r.value), o = Number(e.value);
  if (o <= 0 && o !== -1 || o > op(n))
    throw new Error(`Unable to set day ${o} for date ${Ci(r, !1)}.`);
  return n.setUTCDate(o === -1 ? 0 : o), {
    type: Pr,
    value: n
  };
}
function dp(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 23)
    throw new Error(`Expecting hours in [0..23], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCHours(n), {
    type: Pr,
    value: o
  };
}
function _p(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting minutes in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMinutes(n), {
    type: Pr,
    value: o
  };
}
function pp(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting seconds in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCSeconds(n), {
    type: Pr,
    value: o
  };
}
function gp(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 999)
    throw new Error(`Expecting millis in [0..999], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMilliseconds(n), {
    type: Pr,
    value: o
  };
}
const ii = (t) => (r, e) => {
  let o = new Date(e.value.getTime())[t]();
  return t === "getUTCMonth" ? ++o : t === "getUTCDay" && o === 0 && (o = 7), {
    type: Ne,
    value: gn(o)
  };
};
function _d(t) {
  return (r, e, n, o) => ({
    type: Le,
    value: np(e.value, n.value, {
      locale: o == null ? void 0 : o.value,
      isUTC: t,
      weekStartDay: r.weekStartDay
    })
  });
}
const hp = ii("getUTCFullYear"), mp = ii("getUTCMonth"), bp = ii("getUTCDate"), yp = ii("getUTCDay"), wp = ii("getUTCHours"), kp = ii("getUTCMinutes"), vp = ii("getUTCSeconds"), jp = ii("getUTCMilliseconds"), Wa = _d(!1), Ua = _d(!0);
function Cp() {
  W("parseUnixTime", [Ne], ip), W("parseUnixTimeAsLocal", [Ne], sp), W("nowLocal", [], lp), W("addMillis", [Pr, Ne], ap), W("setYear", [Pr, Ne], up), W("setMonth", [Pr, Ne], cp), W("setDay", [Pr, Ne], fp), W("setHours", [Pr, Ne], dp), W("setMinutes", [Pr, Ne], _p), W("setSeconds", [Pr, Ne], pp), W("setMillis", [Pr, Ne], gp), W("getYear", [Pr], hp), W("getMonth", [Pr], mp), W("getDay", [Pr], bp), W("getDayOfWeek", [Pr], yp), W("getHours", [Pr], wp), W("getMinutes", [Pr], kp), W("getSeconds", [Pr], vp), W("getMillis", [Pr], jp), W("formatDateAsLocal", [Pr, Le], Wa), W("formatDateAsUTC", [Pr, Le], Ua), W("formatDateAsLocalWithLocale", [Pr, Le, Le], Wa), W("formatDateAsUTCWithLocale", [Pr, Le, Le], Ua);
}
function Ep(t) {
  return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function K(t, r = {}) {
  const e = t;
  return e.level = r.level || "error", r.additional && (e.additional = r.additional), e;
}
function Ap(t, r) {
  return {
    type: Ne,
    value: gn(r.value.length)
  };
}
function Sp(t, r, e) {
  return {
    type: Wr,
    value: r.value.includes(e.value) ? 1 : 0
  };
}
function Vp(t, r, e, n) {
  if (n.value < e.value)
    throw new Error("Indexes should be in ascending order.");
  if (e.value < 0 || e.value > r.value.length || n.value < 0 || n.value > r.value.length)
    throw new Error("Indexes are out of bounds.");
  return {
    type: Le,
    value: r.value.substring(Number(e.value), Number(n.value))
  };
}
function Fp(t, r, e, n) {
  let o;
  return e.value ? o = r.value.replace(new RegExp(Ep(e.value), "g"), n.value) : o = r.value, {
    type: Le,
    value: o
  };
}
function Ip(t, r, e) {
  return {
    type: Ne,
    value: gn(r.value.indexOf(e.value))
  };
}
function Dp(t, r, e) {
  return {
    type: Ne,
    value: gn(r.value.lastIndexOf(e.value))
  };
}
function Tp(t, r) {
  return {
    type: Le,
    value: r.value.trim()
  };
}
function Mp(t, r) {
  return {
    type: Le,
    value: r.value.replace(/^\s+/, "")
  };
}
function Pp(t, r) {
  return {
    type: Le,
    value: r.value.replace(/\s+$/, "")
  };
}
function Np(t, r) {
  return {
    type: Le,
    value: r.value.toUpperCase()
  };
}
function zp(t, r) {
  return {
    type: Le,
    value: r.value.toLowerCase()
  };
}
function pd(t, r, e, n) {
  if (!n.value.length)
    return t.warnings.push(K(new Error("String for padding is empty."), {
      level: "warn"
    })), "";
  let o = "";
  const i = r.type === Le ? r.value : Ci(r, !1);
  for (; o.length + i.length < e.value; )
    o += n.value;
  return o.length > 0 && o.length + i.length > e.value && (o = o.substring(0, Number(e.value) - Number(i.length))), o;
}
function Ga(t, r, e, n) {
  const o = pd(t, r, e, n);
  return {
    type: Le,
    value: o + Ci(r, !1)
  };
}
function Ja(t, r, e, n) {
  const o = pd(t, r, e, n);
  return {
    type: Le,
    value: Ci(r, !1) + o
  };
}
function Op(t, r, e) {
  let n;
  try {
    n = new RegExp(e.value);
  } catch {
    throw new Error("Invalid regular expression.");
  }
  return {
    type: Wr,
    value: n.test(r.value) ? 1 : 0
  };
}
function Rp(t, r) {
  return {
    type: Le,
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping
    value: r.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  };
}
function Lp() {
  W("len", [Le], Ap), W("contains", [Le, Le], Sp), W("substring", [Le, Ne, Ne], Vp), W("replaceAll", [Le, Le, Le], Fp), W("index", [Le, Le], Ip), W("lastIndex", [Le, Le], Dp), W("trim", [Le], Tp), W("trimLeft", [Le], Mp), W("trimRight", [Le], Pp), W("toUpperCase", [Le], Np), W("toLowerCase", [Le], zp), W("padStart", [Le, Ne, Le], Ga), W("padStart", [Ne, Ne, Le], Ga), W("padEnd", [Le, Ne, Le], Ja), W("padEnd", [Ne, Ne, Le], Ja), W("testRegex", [Le, Le], Op), W("encodeRegex", [Le], Rp);
}
function Bp(t, r, e) {
  if (e.value === bi)
    throw new Error("Division by zero is not supported.");
  let n = r.value / e.value;
  return n = Ei(t, n), Mn(t, n), {
    type: Ne,
    value: n
  };
}
function Hp(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value / e.value;
  return {
    type: gt,
    value: n
  };
}
function Wp(t, r, e) {
  if (e.value === bi)
    throw new Error("Division by zero is not supported.");
  let n = r.value % e.value;
  return n = Ei(t, n), Mn(t, n), {
    type: Ne,
    value: n
  };
}
function Up(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value % e.value;
  return {
    type: gt,
    value: n
  };
}
function Gp(t, ...r) {
  let e = r.length ? r[0].value : bi;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value, e = Ei(t, e), Mn(t, e);
  return {
    type: Ne,
    value: e
  };
}
function Jp(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value;
  return {
    type: gt,
    value: e
  };
}
function qp(t, ...r) {
  let e = r.length ? r[0].value : bi;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value, e = Ei(t, e), Mn(t, e);
  return {
    type: Ne,
    value: e
  };
}
function Yp(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value;
  return {
    type: gt,
    value: e
  };
}
function Kp(t, ...r) {
  let e = bi;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value, e = Ei(t, e), Mn(t, e);
  return {
    type: Ne,
    value: e
  };
}
function Xp(t, ...r) {
  let e = 0;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value;
  return {
    type: gt,
    value: e
  };
}
function Zp(t, r) {
  const e = sd(r.value);
  return Mn(t, e), {
    type: r.type,
    value: e
  };
}
function Qp(t, r) {
  const e = Math.abs(r.value);
  return {
    type: gt,
    value: e
  };
}
function xp(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  let e = r[0].value;
  for (let n = 1; n < r.length; ++n)
    r[n].value > e && (e = r[n].value);
  return {
    type: Ne,
    value: e
  };
}
function $p(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: gt,
    value: Math.max(...r.map((e) => e.value))
  };
}
function eg(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  let e = r[0].value;
  for (let n = 1; n < r.length; ++n)
    r[n].value < e && (e = r[n].value);
  return {
    type: Ne,
    value: e
  };
}
function tg(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: gt,
    value: Math.min(...r.map((e) => e.value))
  };
}
function rg() {
  return {
    type: gt,
    value: D_
  };
}
function ng() {
  return {
    type: gt,
    value: T_
  };
}
function og(t) {
  return Mn(t, is), {
    type: Ne,
    value: is
  };
}
function ig(t) {
  return Mn(t, ss), {
    type: Ne,
    value: ss
  };
}
function sg(t, r) {
  const e = Math.sign(r.value);
  return {
    type: gt,
    // js treats Math.round(-0.5) as 0, which is different to other platforms
    value: e * Math.round(Math.abs(r.value))
  };
}
function lg(t, r) {
  return {
    type: gt,
    value: Math.floor(r.value)
  };
}
function ag(t, r) {
  return {
    type: gt,
    value: Math.ceil(r.value)
  };
}
function ug(t, r) {
  return {
    type: Ne,
    value: ld(r.value)
  };
}
function cg(t, r) {
  return {
    type: gt,
    value: Math.sign(r.value)
  };
}
function fg(t, r, e) {
  let n;
  if (e.value === bi)
    n = r.value;
  else if (r.value === bi)
    n = gn(0);
  else {
    const o = ld(e.value);
    n = sd(r.value) * o;
  }
  return Mn(t, n), {
    type: Ne,
    value: n
  };
}
function dg(t, r, e) {
  let n = Math.sign(e.value);
  n === 0 && (n = Object.is(n, 0) ? 1 : -1);
  const o = Math.abs(r.value) * n;
  return {
    type: gt,
    value: o
  };
}
function _g() {
  W("div", [Ne, Ne], Bp), W("div", [gt, gt], Hp), W("mod", [Ne, Ne], Wp), W("mod", [gt, gt], Up), W("mul", [{
    type: Ne,
    isVararg: !0
  }], Gp), W("mul", [{
    type: gt,
    isVararg: !0
  }], Jp), W("sub", [{
    type: Ne,
    isVararg: !0
  }], qp), W("sub", [{
    type: gt,
    isVararg: !0
  }], Yp), W("sum", [{
    type: Ne,
    isVararg: !0
  }], Kp), W("sum", [{
    type: gt,
    isVararg: !0
  }], Xp), W("abs", [Ne], Zp), W("abs", [gt], Qp), W("max", [{
    type: Ne,
    isVararg: !0
  }], xp), W("max", [{
    type: gt,
    isVararg: !0
  }], $p), W("min", [{
    type: Ne,
    isVararg: !0
  }], eg), W("min", [{
    type: gt,
    isVararg: !0
  }], tg), W("maxNumber", [], rg), W("minNumber", [], ng), W("maxInteger", [], og), W("minInteger", [], ig), W("round", [gt], sg), W("floor", [gt], lg), W("ceil", [gt], ag), W("signum", [Ne], ug), W("signum", [gt], cg), W("copySign", [Ne, Ne], fg), W("copySign", [gt, gt], dg);
}
function ol(t) {
  return (r, e) => {
    const n = tl(e.value);
    return {
      type: gt,
      value: n[t] / 255
    };
  };
}
function il(t) {
  return (r, e, n) => {
    const o = tl(e.value);
    return o[t] = n.value * 255, {
      type: dn,
      value: Ai(o)
    };
  };
}
const qa = ol("a"), Ya = ol("r"), Ka = ol("g"), Xa = ol("b"), Za = il("a"), Qa = il("r"), xa = il("g"), $a = il("b");
function pg(t, r, e, n) {
  const o = {
    a: 255,
    r: r.value * 255,
    g: e.value * 255,
    b: n.value * 255
  };
  return {
    type: dn,
    value: Ai(o)
  };
}
function gg(t, r, e, n, o) {
  const i = {
    a: r.value * 255,
    r: e.value * 255,
    g: n.value * 255,
    b: o.value * 255
  };
  return {
    type: dn,
    value: Ai(i)
  };
}
function hg() {
  W("getColorAlpha", [Le], qa), W("getColorAlpha", [dn], qa), W("getColorRed", [Le], Ya), W("getColorRed", [dn], Ya), W("getColorGreen", [Le], Ka), W("getColorGreen", [dn], Ka), W("getColorBlue", [Le], Xa), W("getColorBlue", [dn], Xa), W("setColorAlpha", [Le, gt], Za), W("setColorAlpha", [dn, gt], Za), W("setColorRed", [Le, gt], Qa), W("setColorRed", [dn, gt], Qa), W("setColorGreen", [Le, gt], xa), W("setColorGreen", [dn, gt], xa), W("setColorBlue", [Le, gt], $a), W("setColorBlue", [dn, gt], $a), W("rgb", [gt, gt, gt], pg), W("argb", [gt, gt, gt, gt], gg);
}
function si(t, r, e, n) {
  if (r.value < 0)
    throw new Error("Expecting non-negative number of milliseconds.");
  let o = gn(r.value) / gn(e);
  return Mn(t, o), n && (o = gn(o) % gn(n)), {
    type: Ne,
    value: o
  };
}
const gd = 1e3, mg = 60, hd = 1e3 * 60, bg = 60, md = 1e3 * 60 * 60, yg = 24, wg = 1e3 * 60 * 60 * 24, kg = 1e3 * 60 * 60 * 24 * 7;
function vg(t, r) {
  return si(t, r, gd, mg);
}
function jg(t, r) {
  return si(t, r, gd);
}
function Cg(t, r) {
  return si(t, r, hd, bg);
}
function Eg(t, r) {
  return si(t, r, hd);
}
function Ag(t, r) {
  return si(t, r, md, yg);
}
function Sg(t, r) {
  return si(t, r, md);
}
function Vg(t, r) {
  return si(t, r, wg);
}
function Fg(t, r) {
  return si(t, r, kg);
}
function Ig() {
  W("getIntervalSeconds", [Ne], vg), W("getIntervalTotalSeconds", [Ne], jg), W("getIntervalMinutes", [Ne], Cg), W("getIntervalTotalMinutes", [Ne], Eg), W("getIntervalHours", [Ne], Ag), W("getIntervalTotalHours", [Ne], Sg), W("getIntervalTotalDays", [Ne], Vg), W("getIntervalTotalWeeks", [Ne], Fg);
}
function Dg(t, r) {
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
function li(t) {
  return (r, e, ...n) => {
    if (n.length === 0)
      throw new Error("Non empty argument list is required.");
    const o = Dg(e.value, n.map((i) => i.value));
    return rl(r, o, t);
  };
}
function Wi(t, r) {
  return (e, n, o, ...i) => {
    try {
      return t(e, o, ...i);
    } catch {
      let a = n.value;
      return r === "color" ? a = oi(a) : r === "url" && _o(a), {
        type: r,
        value: a
      };
    }
  };
}
const Es = li(Le), As = li(gt), Ss = li(Ne), Vs = li(Wr), Fs = li(dn), Is = li(eo), Wl = li(_r), Ul = li(dr), eu = Wi(Es, Le), tu = Wi(As, gt), ru = Wi(Ss, Ne), nu = Wi(Vs, Wr), ps = Wi(Fs, dn), gs = Wi(Is, eo);
function Tg(t, r, ...e) {
  try {
    return Wl(t, r, ...e);
  } catch {
    return {
      type: _r,
      value: []
    };
  }
}
function Mg(t, r, ...e) {
  try {
    return Ul(t, r, ...e);
  } catch {
    return {
      type: dr,
      value: {}
    };
  }
}
function Pg(t, r, e) {
  return {
    type: Wr,
    value: e.value in r.value ? 1 : 0
  };
}
function Ng(t, r) {
  return {
    type: Wr,
    value: Object.keys(r.value).length ? 0 : 1
  };
}
function zg(t, r) {
  return {
    type: Ne,
    value: gn(Object.keys(r.value).length)
  };
}
function ou(t, r) {
  return {
    type: _r,
    value: Object.keys(r.value)
  };
}
function iu(t, r) {
  return {
    type: _r,
    value: Object.values(r.value)
  };
}
function Og() {
  const t = {
    type: Le,
    isVararg: !0
  };
  W("getDictString", [dr, t], Es), W("getStringFromDict", [dr, t], Es), W("getDictNumber", [dr, t], As), W("getNumberFromDict", [dr, t], As), W("getDictInteger", [dr, t], Ss), W("getIntegerFromDict", [dr, t], Ss), W("getDictBoolean", [dr, t], Vs), W("getBooleanFromDict", [dr, t], Vs), W("getDictColor", [dr, t], Fs), W("getColorFromDict", [dr, t], Fs), W("getDictUrl", [dr, t], Is), W("getUrlFromDict", [dr, t], Is), W("getDictOptString", [Le, dr, t], eu), W("getOptStringFromDict", [Le, dr, t], eu), W("getDictOptNumber", [gt, dr, t], tu), W("getOptNumberFromDict", [gt, dr, t], tu), W("getDictOptInteger", [Ne, dr, t], ru), W("getOptIntegerFromDict", [Ne, dr, t], ru), W("getDictOptBoolean", [Wr, dr, t], nu), W("getOptBooleanFromDict", [Wr, dr, t], nu), W("getDictOptColor", [dn, dr, t], ps), W("getOptColorFromDict", [dn, dr, t], ps), W("getDictOptColor", [Le, dr, t], ps), W("getOptColorFromDict", [Le, dr, t], ps), W("getDictOptUrl", [Le, dr, t], gs), W("getOptUrlFromDict", [Le, dr, t], gs), W("getDictOptUrl", [eo, dr, t], gs), W("getOptUrlFromDict", [eo, dr, t], gs), W("getDictFromDict", [dr, t], Ul), W("getArrayFromDict", [dr, t], Wl), W("getOptArrayFromDict", [dr, t], Tg), W("getOptDictFromDict", [dr, t], Mg), W("len", [dr], zg), W("getDictKeys", [dr], ou), W("getDictValues", [dr], iu), Lr("getString", [dr, t], Es), Lr("getBoolean", [dr, t], Vs), Lr("getInteger", [dr, t], Ss), Lr("getNumber", [dr, t], As), Lr("getUrl", [dr, t], Is), Lr("getColor", [dr, t], Fs), Lr("getArray", [dr, t], Wl), Lr("getDict", [dr, t], Ul), Lr("containsKey", [dr, Le], Pg), Lr("isEmpty", [dr], Ng), Lr("getKeys", [dr], ou), Lr("getValues", [dr], iu);
}
function ai(t, r) {
  return (e, n, o) => {
    if (o.value < 0 || o.value >= n.value.length)
      throw new Error(`Requested index (${o.value}) out of bounds array size (${n.value.length}).`);
    let i = n.value[Number(o.value)], s = typeof i;
    if (t === "array" && !Array.isArray(i) || t !== "array" && s !== t || s === "object" && i === null)
      throw s === "object" && (Array.isArray(i) ? s = "Array" : i === null ? s = "Null" : s = "Dict"), new Error(`Incorrect value type: expected ${Zn(r)}, got ${Zn(s)}.`);
    if (t === "number" && r === "integer") {
      Mn(e, i);
      try {
        i = gn(i);
      } catch {
        throw new Error("Cannot convert value to integer.");
      }
    }
    return t === "string" && r === "color" && (i = oi(i)), t === "string" && r === "url" && _o(i), {
      type: r,
      value: i
    };
  };
}
function Ui(t, r) {
  return (e, n, o, i) => {
    try {
      return t(e, n, o);
    } catch {
      let a = i.value;
      return r === "color" ? a = oi(a) : r === "url" && _o(a), {
        type: r,
        value: a
      };
    }
  };
}
const Ds = ai("string", "string"), Ts = ai("number", "number"), Ms = ai("number", "integer"), Ps = ai("boolean", "boolean"), Ns = ai("string", "color"), zs = ai("string", "url"), Gl = ai("array", "array"), Jl = ai("object", "dict"), su = Ui(Ds, "string"), lu = Ui(Ts, "number"), au = Ui(Ms, "integer"), uu = Ui(Ps, "boolean"), hs = Ui(Ns, "color"), ms = Ui(zs, "url");
function Rg(t, r, e) {
  try {
    return Gl(t, r, e);
  } catch {
    return {
      type: _r,
      value: []
    };
  }
}
function Lg(t, r, e) {
  try {
    return Jl(t, r, e);
  } catch {
    return {
      type: dr,
      value: {}
    };
  }
}
function Bg(t, r) {
  return {
    type: Ne,
    value: gn(r.value.length)
  };
}
function Hg(t, r) {
  return {
    type: Wr,
    value: r.value.length === 0 ? 1 : 0
  };
}
function Wg(t, r, e) {
  return r.value.length ? {
    type: _r,
    value: r.value.filter((n) => {
      const o = [];
      if (typeof n == "string")
        fo(n) && o.push([{
          type: dn,
          value: n
        }]), N_(n) && o.push([{
          type: eo,
          value: n
        }]), o.push([{
          type: Le,
          value: n
        }]);
      else if (typeof n == "number")
        Math.round(n) === n && (Mn(t, n), o.push([{
          type: Ne,
          value: gn(n)
        }])), o.push([{
          type: gt,
          value: n
        }]);
      else if (typeof n == "bigint")
        Mn(t, n), o.push([{
          type: Ne,
          value: n
        }]);
      else if (Array.isArray(n))
        o.push([{
          type: _r,
          value: n
        }]);
      else if (typeof n == "object") {
        if (n === null)
          throw new Error("Incorrect value type: Null");
        o.push([{
          type: dr,
          value: n
        }]);
      } else if (typeof n == "boolean")
        o.push([{
          type: Wr,
          value: n ? 1 : 0
        }]);
      else
        throw new Error(`Incorrect value type: ${Zn(typeof n)}`);
      let i = {
        type: "missing"
      };
      for (const c of o)
        if (i = cd(e.value, c), "func" in i)
          break;
      let s;
      if ("func" in i)
        s = i.func;
      else {
        const c = e.value[0];
        Ld(c.name || "Function", o[0], i, !0);
      }
      const a = s.args[0], l = rl(
        t,
        n,
        typeof a == "string" ? a : a.type
      ), u = s.cb(t, l);
      if (u.type !== Wr)
        throw new Error("Function must return boolean value.");
      return u.value;
    })
  } : {
    type: _r,
    value: []
  };
}
function Ug() {
  W("getArrayString", [
    _r,
    Ne
  ], Ds), W("getStringFromArray", [
    _r,
    Ne
  ], Ds), W("getArrayNumber", [
    _r,
    Ne
  ], Ts), W("getNumberFromArray", [
    _r,
    Ne
  ], Ts), W("getArrayInteger", [
    _r,
    Ne
  ], Ms), W("getIntegerFromArray", [
    _r,
    Ne
  ], Ms), W("getArrayBoolean", [
    _r,
    Ne
  ], Ps), W("getBooleanFromArray", [
    _r,
    Ne
  ], Ps), W("getArrayColor", [
    _r,
    Ne
  ], Ns), W("getColorFromArray", [
    _r,
    Ne
  ], Ns), W("getArrayUrl", [
    _r,
    Ne
  ], zs), W("getUrlFromArray", [
    _r,
    Ne
  ], zs), W("getArrayFromArray", [
    _r,
    Ne
  ], Gl), W("getDictFromArray", [
    _r,
    Ne
  ], Jl), W("getArrayOptString", [
    _r,
    Ne,
    Le
  ], su), W("getOptStringFromArray", [
    _r,
    Ne,
    Le
  ], su), W("getArrayOptNumber", [
    _r,
    Ne,
    gt
  ], lu), W("getOptNumberFromArray", [
    _r,
    Ne,
    gt
  ], lu), W("getArrayOptInteger", [
    _r,
    Ne,
    Ne
  ], au), W("getOptIntegerFromArray", [
    _r,
    Ne,
    Ne
  ], au), W("getArrayOptBoolean", [
    _r,
    Ne,
    Wr
  ], uu), W("getOptBooleanFromArray", [
    _r,
    Ne,
    Wr
  ], uu), W("getArrayOptColor", [
    _r,
    Ne,
    dn
  ], hs), W("getOptColorFromArray", [
    _r,
    Ne,
    dn
  ], hs), W("getArrayOptColor", [
    _r,
    Ne,
    Le
  ], hs), W("getOptColorFromArray", [
    _r,
    Ne,
    Le
  ], hs), W("getArrayOptUrl", [
    _r,
    Ne,
    eo
  ], ms), W("getOptUrlFromArray", [
    _r,
    Ne,
    eo
  ], ms), W("getArrayOptUrl", [
    _r,
    Ne,
    Le
  ], ms), W("getOptUrlFromArray", [
    _r,
    Ne,
    Le
  ], ms), W("getOptArrayFromArray", [
    _r,
    Ne
  ], Rg), W("getOptDictFromArray", [
    _r,
    Ne
  ], Lg), W("len", [
    _r
  ], Bg), Lr("getString", [_r, Ne], Ds), Lr("getInteger", [_r, Ne], Ms), Lr("getNumber", [_r, Ne], Ts), Lr("getBoolean", [_r, Ne], Ps), Lr("getUrl", [_r, Ne], zs), Lr("getColor", [_r, Ne], Ns), Lr("getArray", [_r, Ne], Gl), Lr("getDict", [_r, Ne], Jl), Lr("isEmpty", [_r], Hg), Lr("filter", [_r, M_], Wg);
}
function Eo(t) {
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
    return rl(r, i, t);
  };
}
function Gg() {
  W("getStoredIntegerValue", [Le, Ne], Eo(Ne)), W("getStoredNumberValue", [Le, gt], Eo(gt)), W("getStoredStringValue", [Le, Le], Eo(Le)), W("getStoredUrlValue", [Le, eo], Eo(eo)), W("getStoredUrlValue", [Le, Le], Eo(eo)), W("getStoredColorValue", [Le, dn], Eo(dn)), W("getStoredColorValue", [Le, Le], Eo(dn)), W("getStoredBooleanValue", [Le, Wr], Eo(Wr)), W("getStoredArrayValue", [Le], Eo(_r)), W("getStoredDictValue", [Le], Eo(dr));
}
function Jg() {
  return {
    type: gt,
    value: Math.PI
  };
}
function qg(t, r) {
  return {
    type: gt,
    value: r.value / 180 * Math.PI
  };
}
function Yg(t, r) {
  return {
    type: gt,
    value: r.value / Math.PI * 180
  };
}
function Kg(t, r) {
  return {
    type: gt,
    value: Math.sin(r.value)
  };
}
function Xg(t, r) {
  return {
    type: gt,
    value: Math.cos(r.value)
  };
}
function Zg(t, r) {
  return {
    type: gt,
    value: Math.tan(r.value)
  };
}
function Qg(t, r) {
  const e = Math.tan(r.value);
  if (Math.abs(e) < 1e-12)
    throw new Error("Cotangent is undefined for the given value.");
  return {
    type: gt,
    value: 1 / e
  };
}
function xg(t, r) {
  return {
    type: gt,
    value: Math.atan(r.value)
  };
}
function $g(t, r, e) {
  return {
    type: gt,
    value: Math.atan2(r.value, e.value)
  };
}
function eh(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arcsine is undefined for the given value.");
  return {
    type: gt,
    value: Math.asin(r.value)
  };
}
function th(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arccosine is undefined for the given value.");
  return {
    type: gt,
    value: Math.acos(r.value)
  };
}
function rh() {
  W("pi", [], Jg), W("toRadians", [gt], qg), W("toDegrees", [gt], Yg), W("sin", [gt], Kg), W("cos", [gt], Xg), W("tan", [gt], Zg), W("cot", [gt], Qg), W("atan", [gt], xg), W("atan2", [gt, gt], $g), W("asin", [gt], eh), W("acos", [gt], th);
}
function nh() {
  Q_(), Cp(), Ig(), Lp(), _g(), hg(), Og(), Ug(), Gg(), rh();
}
function E() {
}
const sl = (t) => t;
function jo(t, r) {
  for (const e in r) t[e] = r[e];
  return (
    /** @type {T & S} */
    t
  );
}
function bd(t) {
  return t();
}
function cu() {
  return /* @__PURE__ */ Object.create(null);
}
function Br(t) {
  t.forEach(bd);
}
function Nr(t) {
  return typeof t == "function";
}
function oh(t, r) {
  return t != t ? r == r : t !== r || t && typeof t == "object" || typeof t == "function";
}
let bs;
function Qn(t, r) {
  return t === r ? !0 : (bs || (bs = document.createElement("a")), bs.href = r, t === bs.href);
}
function Sr(t, r) {
  return t != t ? r == r : t !== r;
}
function ih(t) {
  return Object.keys(t).length === 0;
}
function V(t, ...r) {
  if (t == null) {
    for (const n of r)
      n(void 0);
    return E;
  }
  const e = t.subscribe(...r);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function ql(t) {
  let r;
  return V(t, (e) => r = e)(), r;
}
function bn(t, r, e) {
  t.$$.on_destroy.push(V(r, e));
}
function ll(t, r, e, n) {
  if (t) {
    const o = yd(t, r, e, n);
    return t[0](o);
  }
}
function yd(t, r, e, n) {
  return t[1] && n ? jo(e.ctx.slice(), t[1](n(r))) : e.ctx;
}
function al(t, r, e, n) {
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
function ul(t, r, e, n, o, i) {
  if (o) {
    const s = yd(r, e, n, i);
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
function jl(t, r, e) {
  return t.set(e), r;
}
function fl(t) {
  return t && Nr(t.destroy) ? t.destroy : E;
}
function fu(t) {
  const r = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return r ? [parseFloat(r[1]), r[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const wd = typeof window < "u";
let pa = wd ? () => window.performance.now() : () => Date.now(), ga = wd ? (t) => requestAnimationFrame(t) : E;
const Pi = /* @__PURE__ */ new Set();
function kd(t) {
  Pi.forEach((r) => {
    r.c(t) || (Pi.delete(r), r.f());
  }), Pi.size !== 0 && ga(kd);
}
function ha(t) {
  let r;
  return Pi.size === 0 && ga(kd), {
    promise: new Promise((e) => {
      Pi.add(r = { c: t, f: e });
    }),
    abort() {
      Pi.delete(r);
    }
  };
}
const Po = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function ht(t, r) {
  t.appendChild(r);
}
function vd(t) {
  if (!t) return document;
  const r = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return r && /** @type {ShadowRoot} */
  r.host ? (
    /** @type {ShadowRoot} */
    r
  ) : t.ownerDocument;
}
function sh(t) {
  const r = Ve("style");
  return r.textContent = "/* empty */", lh(vd(t), r), r.sheet;
}
function lh(t, r) {
  return ht(
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
function on(t, r) {
  for (let e = 0; e < t.length; e += 1)
    t[e] && t[e].d(r);
}
function Ve(t) {
  return document.createElement(t);
}
function xr(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Pn(t) {
  return document.createTextNode(t);
}
function cr() {
  return Pn(" ");
}
function Zt() {
  return Pn("");
}
function Be(t, r, e, n) {
  return t.addEventListener(r, e, n), () => t.removeEventListener(r, e, n);
}
function g(t, r, e) {
  e == null ? t.removeAttribute(r) : t.getAttribute(r) !== e && t.setAttribute(r, e);
}
const ah = ["width", "height"];
function Go(t, r) {
  const e = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in r)
    r[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = r[n] : n === "__value" ? t.value = t[n] = r[n] : e[n] && e[n].set && ah.indexOf(n) === -1 ? t[n] = r[n] : g(t, n, r[n]);
}
function uh(t, r) {
  Object.keys(r).forEach((e) => {
    ch(t, e, r[e]);
  });
}
function ch(t, r, e) {
  const n = r.toLowerCase();
  n in t ? t[n] = typeof t[n] == "boolean" && e === "" ? !0 : e : r in t ? t[r] = typeof t[r] == "boolean" && e === "" ? !0 : e : g(t, r, e);
}
function ti(t) {
  return /-/.test(t) ? uh : Go;
}
function fh(t) {
  return Array.from(t.childNodes);
}
function xn(t, r) {
  r = "" + r, t.data !== r && (t.data = /** @type {string} */
  r);
}
function du(t, r) {
  t.value = r == null ? "" : r;
}
function D(t, r, e, n) {
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
function dh(t) {
  const r = t.querySelector(":checked");
  return r && r.__value;
}
function jd(t, r, { bubbles: e = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: r, bubbles: e, cancelable: n });
}
function pu(t, r) {
  return new t(r);
}
const Us = /* @__PURE__ */ new Map();
let Gs = 0;
function _h(t) {
  let r = 5381, e = t.length;
  for (; e--; ) r = (r << 5) - r ^ t.charCodeAt(e);
  return r >>> 0;
}
function ph(t, r) {
  const e = { stylesheet: sh(r), rules: {} };
  return Us.set(t, e), e;
}
function Js(t, r, e, n, o, i, s, a = 0) {
  const l = 16.666 / n;
  let u = `{
`;
  for (let k = 0; k <= 1; k += l) {
    const w = r + (e - r) * i(k);
    u += k * 100 + `%{${s(w, 1 - w)}}
`;
  }
  const c = u + `100% {${s(e, 1 - e)}}
}`, f = `__svelte_${_h(c)}_${a}`, _ = vd(t), { stylesheet: h, rules: m } = Us.get(_) || ph(_, t);
  m[f] || (m[f] = !0, h.insertRule(`@keyframes ${f} ${c}`, h.cssRules.length));
  const p = t.style.animation || "";
  return t.style.animation = `${p ? `${p}, ` : ""}${f} ${n}ms linear ${o}ms 1 both`, Gs += 1, f;
}
function qs(t, r) {
  const e = (t.style.animation || "").split(", "), n = e.filter(
    r ? (i) => i.indexOf(r) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), o = e.length - n.length;
  o && (t.style.animation = n.join(", "), Gs -= o, Gs || gh());
}
function gh() {
  ga(() => {
    Gs || (Us.forEach((t) => {
      const { ownerNode: r } = t.stylesheet;
      r && J(r);
    }), Us.clear());
  });
}
let ls;
function ns(t) {
  ls = t;
}
function Gi() {
  if (!ls) throw new Error("Function called outside component initialization");
  return ls;
}
function ro(t) {
  Gi().$$.on_mount.push(t);
}
function dl(t) {
  Gi().$$.after_update.push(t);
}
function an(t) {
  Gi().$$.on_destroy.push(t);
}
function hh() {
  const t = Gi();
  return (r, e, { cancelable: n = !1 } = {}) => {
    const o = t.$$.callbacks[r];
    if (o) {
      const i = jd(
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
function pi(t, r) {
  return Gi().$$.context.set(t, r), r;
}
function Tr(t) {
  return Gi().$$.context.get(t);
}
function On(t, r) {
  const e = t.$$.callbacks[r.type];
  e && e.slice().forEach((n) => n.call(this, r));
}
const Di = [], Fr = [];
let Ni = [];
const gu = [], Cd = /* @__PURE__ */ Promise.resolve();
let Yl = !1;
function Ed() {
  Yl || (Yl = !0, Cd.then(Ad));
}
function An() {
  return Ed(), Cd;
}
function to(t) {
  Ni.push(t);
}
const Cl = /* @__PURE__ */ new Set();
let Vi = 0;
function Ad() {
  if (Vi !== 0)
    return;
  const t = ls;
  do {
    try {
      for (; Vi < Di.length; ) {
        const r = Di[Vi];
        Vi++, ns(r), mh(r.$$);
      }
    } catch (r) {
      throw Di.length = 0, Vi = 0, r;
    }
    for (ns(null), Di.length = 0, Vi = 0; Fr.length; ) Fr.pop()();
    for (let r = 0; r < Ni.length; r += 1) {
      const e = Ni[r];
      Cl.has(e) || (Cl.add(e), e());
    }
    Ni.length = 0;
  } while (Di.length);
  for (; gu.length; )
    gu.pop()();
  Yl = !1, Cl.clear(), ns(t);
}
function mh(t) {
  if (t.fragment !== null) {
    t.update(), Br(t.before_update);
    const r = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, r), t.after_update.forEach(to);
  }
}
function bh(t) {
  const r = [], e = [];
  Ni.forEach((n) => t.indexOf(n) === -1 ? r.push(n) : e.push(n)), e.forEach((n) => n()), Ni = r;
}
let $i;
function ma() {
  return $i || ($i = Promise.resolve(), $i.then(() => {
    $i = null;
  })), $i;
}
function hi(t, r, e) {
  t.dispatchEvent(jd(`${r ? "intro" : "outro"}${e}`));
}
const Os = /* @__PURE__ */ new Set();
let Fo;
function ar() {
  Fo = {
    r: 0,
    c: [],
    p: Fo
    // parent group
  };
}
function ur() {
  Fo.r || Br(Fo.c), Fo = Fo.p;
}
function B(t, r) {
  t && t.i && (Os.delete(t), t.i(r));
}
function Q(t, r, e, n) {
  if (t && t.o) {
    if (Os.has(t)) return;
    Os.add(t), Fo.c.push(() => {
      Os.delete(t), n && (e && t.d(1), n());
    }), t.o(r);
  } else n && n();
}
const ba = { duration: 0 };
function _l(t, r, e) {
  const n = { direction: "in" };
  let o = r(t, e, n), i = !1, s, a, l = 0;
  function u() {
    s && qs(t, s);
  }
  function c() {
    const {
      delay: _ = 0,
      duration: h = 300,
      easing: m = sl,
      tick: p = E,
      css: k
    } = o || ba;
    k && (s = Js(t, 0, 1, h, _, m, k, l++)), p(0, 1);
    const w = pa() + _, O = w + h;
    a && a.abort(), i = !0, to(() => hi(t, !0, "start")), a = ha((U) => {
      if (i) {
        if (U >= O)
          return p(1, 0), hi(t, !0, "end"), u(), i = !1;
        if (U >= w) {
          const R = m((U - w) / h);
          p(R, 1 - R);
        }
      }
      return i;
    });
  }
  let f = !1;
  return {
    start() {
      f || (f = !0, qs(t), Nr(o) ? (o = o(n), ma().then(c)) : c());
    },
    invalidate() {
      f = !1;
    },
    end() {
      i && (u(), i = !1);
    }
  };
}
function Sd(t, r, e) {
  const n = { direction: "out" };
  let o = r(t, e, n), i = !0, s;
  const a = Fo;
  a.r += 1;
  let l;
  function u() {
    const {
      delay: c = 0,
      duration: f = 300,
      easing: _ = sl,
      tick: h = E,
      css: m
    } = o || ba;
    m && (s = Js(t, 1, 0, f, c, _, m));
    const p = pa() + c, k = p + f;
    to(() => hi(t, !1, "start")), "inert" in t && (l = /** @type {HTMLElement} */
    t.inert, t.inert = !0), ha((w) => {
      if (i) {
        if (w >= k)
          return h(0, 1), hi(t, !1, "end"), --a.r || Br(a.c), !1;
        if (w >= p) {
          const O = _((w - p) / f);
          h(1 - O, O);
        }
      }
      return i;
    });
  }
  return Nr(o) ? ma().then(() => {
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
      easing: w = sl,
      tick: O = E,
      css: U
    } = i || ba, R = {
      start: pa() + p,
      b: m
    };
    m || (R.group = Fo, Fo.r += 1), "inert" in t && (m ? c !== void 0 && (t.inert = c) : (c = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), a || l ? l = R : (U && (f(), u = Js(t, s, m, k, p, w, U)), m && O(0, 1), a = _(R, k), to(() => hi(t, m, "start")), ha(($) => {
      if (l && $ > l.start && (a = _(l, k), l = null, hi(t, a.b, "start"), U && (f(), u = Js(
        t,
        s,
        a.b,
        a.duration,
        0,
        w,
        i.css
      ))), a) {
        if ($ >= a.end)
          O(s = a.b, 1 - s), hi(t, a.b, "end"), l || (a.b ? f() : --a.group.r || Br(a.group.c)), a = null;
        else if ($ >= a.start) {
          const ue = $ - a.start;
          s = a.a + a.d * w(ue / a.duration), O(s, 1 - s);
        }
      }
      return !!(a || l);
    }));
  }
  return {
    run(m) {
      Nr(i) ? ma().then(() => {
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
function Vd(t, r) {
  Q(t, 1, 1, () => {
    r.delete(t.key);
  });
}
function Fd(t, r, e, n, o, i, s, a, l, u, c, f) {
  let _ = t.length, h = i.length, m = _;
  const p = {};
  for (; m--; ) p[t[m].key] = m;
  const k = [], w = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), U = [];
  for (m = h; m--; ) {
    const T = f(o, i, m), X = e(T);
    let le = s.get(X);
    le ? U.push(() => le.p(T, r)) : (le = u(X, T), le.c()), w.set(X, k[m] = le), X in p && O.set(X, Math.abs(m - p[X]));
  }
  const R = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Set();
  function ue(T) {
    B(T, 1), T.m(a, c), s.set(T.key, T), c = T.first, h--;
  }
  for (; _ && h; ) {
    const T = k[h - 1], X = t[_ - 1], le = T.key, C = X.key;
    T === X ? (c = T.first, _--, h--) : w.has(C) ? !s.has(le) || R.has(le) ? ue(T) : $.has(C) ? _-- : O.get(le) > O.get(C) ? ($.add(le), ue(T)) : (R.add(C), _--) : (l(X, s), _--);
  }
  for (; _--; ) {
    const T = t[_];
    w.has(T.key) || l(T, s);
  }
  for (; h; ) ue(k[h - 1]);
  return Br(U), k;
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
function Id(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Bt(t) {
  t && t.c();
}
function Rt(t, r, e) {
  const { fragment: n, after_update: o } = t.$$;
  n && n.m(r, e), to(() => {
    const i = t.$$.on_mount.map(bd).filter(Nr);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : Br(i), t.$$.on_mount = [];
  }), o.forEach(to);
}
function Lt(t, r) {
  const e = t.$$;
  e.fragment !== null && (bh(e.after_update), Br(e.on_destroy), e.fragment && e.fragment.d(r), e.on_destroy = e.fragment = null, e.ctx = []);
}
function yh(t, r) {
  t.$$.dirty[0] === -1 && (Di.push(t), Ed(), t.$$.dirty.fill(0)), t.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function Or(t, r, e, n, o, i, s = null, a = [-1]) {
  const l = ls;
  ns(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: E,
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
    return u.ctx && o(u.ctx[f], u.ctx[f] = m) && (!u.skip_bound && u.bound[f] && u.bound[f](m), c && yh(t, f)), _;
  }) : [], u.update(), c = !0, Br(u.before_update), u.fragment = n ? n(u.ctx) : !1, r.target) {
    if (r.hydrate) {
      const f = fh(r.target);
      u.fragment && u.fragment.l(f), f.forEach(J);
    } else
      u.fragment && u.fragment.c();
    r.intro && B(t.$$.fragment), Rt(t, r.target, r.anchor), Ad();
  }
  ns(l);
}
class Rr {
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
    Lt(this, 1), this.$destroy = E;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(r, e) {
    if (!Nr(e))
      return E;
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
    this.$$set && !ih(r) && (this.$$.skip_bound = !0, this.$$set(r), this.$$.skip_bound = !1);
  }
}
const wh = "4", Fi = [];
function kh(t, r) {
  return {
    subscribe: Io(t, r).subscribe
  };
}
function Io(t, r = E) {
  let e;
  const n = /* @__PURE__ */ new Set();
  function o(a) {
    if (oh(t, a) && (t = a, e)) {
      const l = !Fi.length;
      for (const u of n)
        u[1](), Fi.push(u, t);
      if (l) {
        for (let u = 0; u < Fi.length; u += 2)
          Fi[u][0](Fi[u + 1]);
        Fi.length = 0;
      }
    }
  }
  function i(a) {
    o(a(t));
  }
  function s(a, l = E) {
    const u = [a, l];
    return n.add(u), n.size === 1 && (e = r(o, i) || E), a(t), () => {
      n.delete(u), n.size === 0 && e && (e(), e = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Ji(t, r, e) {
  const n = !Array.isArray(t), o = n ? [t] : t;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = r.length < 2;
  return kh(e, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, f = E;
    const _ = () => {
      if (c)
        return;
      f();
      const m = r(n ? u[0] : u, s, a);
      i ? s(m) : f = Nr(m) ? m : E;
    }, h = o.map(
      (m, p) => V(
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
      Br(h), f(), l = !1;
    };
  });
}
class Jo {
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
    return this.store || (this.store = Io(this.value)), this.store.subscribe(r);
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
class Dd extends Jo {
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
class Td extends Jo {
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
class Md extends Jo {
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
class Pd extends Jo {
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
class Nd extends Jo {
  convertValue(r) {
    if (typeof r != "string" || !fo(r))
      throw new Error("Incorrect variable value");
    return oi(r);
  }
  fromString(r) {
    return this.convertValue(r);
  }
  getType() {
    return "color";
  }
}
class zd extends Jo {
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
class Od extends Jo {
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
class Rd extends Jo {
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
  string: Dd,
  number: Md,
  integer: Td,
  boolean: Pd,
  color: Nd,
  url: zd,
  dict: Od,
  array: Rd
};
function io(t, r, e) {
  if (!(r in Kl))
    throw new Error("Unsupported variable type");
  return new Kl[r](t, e);
}
function vh() {
}
function jh(t) {
  return t(this.value), vh;
}
function mu() {
  throw new Error("Cannot change the value of this type of variable");
}
class Ch extends Dd {
}
class Eh extends Md {
}
class Ah extends Td {
}
class Sh extends Pd {
}
class Vh extends Nd {
}
class Fh extends zd {
}
class Ih extends Od {
}
class Dh extends Rd {
}
class Th extends Jo {
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
const Ys = {
  string: Ch,
  number: Eh,
  integer: Ah,
  boolean: Sh,
  color: Vh,
  url: Fh,
  dict: Ih,
  array: Dh,
  datetime: Th
};
for (const t in Ys) {
  const r = Ys[t];
  r.prototype.subscribe = jh, r.prototype.set = mu, r.prototype.setValue = mu;
}
function Rs(t, r, e) {
  if (!(r in Ys))
    throw new Error("Unsupported variable type");
  return new Ys[r](t, e);
}
function Mh(t) {
  const r = t.getType();
  let e = t.getValue();
  return r === Wr && (e = e ? 1 : 0), {
    type: r,
    value: e
  };
}
function Ph(t, r) {
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
    if (typeof t != "string" || !fo(t))
      throw new Error("Incorrect variable value");
    return oi(t);
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
nh();
function Nh(t, r) {
  return {
    type: Le,
    value: r.value
  };
}
function zh(t, r) {
  return {
    type: gt,
    value: r.value
  };
}
function Oh(t, r) {
  return Mn(t, r.value), {
    type: Ne,
    value: r.value
  };
}
function Rh(t, r) {
  return {
    type: Wr,
    value: r.value ? 1 : 0
  };
}
function Lh(t, r) {
  const e = Hs(Rn(t, r.argument));
  switch (r.operator) {
    case "!":
      if (e.type === Wr)
        return {
          type: Wr,
          value: e.value ? 0 : 1
        };
      En(`${r.operator}${pn(e)}`, "A Boolean is expected after a unary not.");
    case "+":
    case "-":
      const n = r.operator === "+" ? 1 : -1;
      if (e.type === Ne) {
        const o = e.value * gn(n);
        return Mn(t, o), {
          type: Ne,
          value: o
        };
      } else {
        if (e.type === gt)
          return {
            type: gt,
            value: e.value * n
          };
        En(
          `${r.operator}${pn(e)}`,
          `A Number is expected after a unary ${r.operator === "+" ? "plus" : "minus"}.`
        );
      }
  }
}
function Bh(t, r) {
  const e = Hs(Rn(t, r.test));
  if (e.type === Wr)
    return e.value ? Rn(t, r.consequent) : Rn(t, r.alternate);
  En(
    `${pn(e)} ? ${pn(Rn(t, r.consequent))} : ${pn(Rn(t, r.alternate))}`,
    "Ternary must be called with a Boolean value as a condition."
  );
}
function Hh(t, r) {
  try {
    return Rn(t, r.test);
  } catch {
    return Rn(t, r.alternate);
  }
}
function Wh(t, r) {
  let e = "";
  if (r.quasis.length === 2 && r.quasis[0].value === "" && r.quasis[1].value === "")
    return Rn(t, r.expressions[0]);
  for (let n = 0; n < r.expressions.length; ++n)
    e += r.quasis[n].value, e += Ci(Rn(t, r.expressions[n]), !0);
  return e += r.quasis[r.quasis.length - 1].value, {
    type: Le,
    value: e
  };
}
function Uh(t, r) {
  const e = Hs(Rn(t, r.left));
  if (e.type !== Wr && En(
    `${pn(e)} ${r.operator} ...`,
    `'${r.operator}' must be called with boolean operands.`
  ), r.operator === "||" && e.value)
    return e;
  if (r.operator === "&&" && !e.value)
    return {
      type: Wr,
      value: 0
    };
  const n = Hs(Rn(t, r.right));
  return n.type !== Wr && En(
    `${pn(e)} ${r.operator} ${pn(n)}`,
    `Operator '${r.operator}' cannot be applied to different types: Boolean and ${Zn(n.type)}.`
  ), {
    type: Wr,
    value: n.value
  };
}
function Gh(t, r, e) {
  let n;
  return r.type === Pr && e.type === Pr ? n = r.value.getTime() === e.value.getTime() : n = r.value === e.value, t === "!=" && (n = !n), {
    type: Wr,
    value: n ? 1 : 0
  };
}
function Jh(t, r, e) {
  (r.type !== gt && r.type !== Ne && r.type !== Pr || e.type !== gt && e.type !== Ne && e.type !== Pr) && En(
    `${pn(r)} ${t} ${pn(e)}`,
    `Operator '${t}' cannot be applied to ${Zn(r.type)} type.`
  );
  let n;
  const o = r.type === Pr ? r.value.getTime() : r.value, i = e.type === Pr ? e.value.getTime() : e.value;
  return t === ">" ? n = o > i : t === ">=" ? n = o >= i : t === "<" ? n = o < i : n = o <= i, {
    type: Wr,
    value: n ? 1 : 0
  };
}
function qh(t, r, e, n) {
  if (e.type !== Le && e.type !== gt && e.type !== Ne && En(
    `${pn(e)} ${r} ${pn(n)}`,
    `Operator '${r}' cannot be applied to ${Zn(e.type)} type.`
  ), e.type === Le)
    return r === "-" && En(
      `${pn(e)} - ${pn(n)}`,
      `Operator '${r}' cannot be applied to ${Zn(e.type)} type.`
    ), {
      type: Le,
      value: e.value + n.value
    };
  let o = r === "+" ? e.value + n.value : e.value - n.value;
  if (e.type === Ne)
    try {
      o = Ei(t, o), Mn(t, o);
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
function Yh(t, r, e, n) {
  e.type !== Ne && e.type !== gt && En(
    `${pn(e)} ${r} ${pn(n)}`,
    `Operator '${r}' cannot be applied to ${Zn(e.type)} type.`
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
  if (e.type === Ne)
    try {
      o = Ei(t, o), Mn(t, o);
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
function Kh(t, r) {
  const e = r.operator;
  let n = Rn(t, r.left), o = Rn(t, r.right);
  if ((n.type === "number" && o.type === "integer" || n.type === "integer" && o.type === "number") && (n.type === "integer" ? n = zl(n) : o.type === "integer" && (o = zl(o))), n.type !== o.type && En(
    `${pn(n)} ${r.operator} ${pn(o)}`,
    `Operator '${e}' cannot be applied to different types: ${Zn(n.type)} and ${Zn(o.type)}.`
  ), e === "==" || e === "!=")
    return Gh(e, n, o);
  if (e === ">" || e === ">=" || e === "<" || e === "<=")
    return Jh(e, n, o);
  if (e === "+" || e === "-")
    return qh(t, e, n, o);
  if (e === "/" || e === "*" || e === "%")
    return Yh(t, e, n, o);
  throw new Error(`Unsupported operation ${e}`);
}
function Ks(t) {
  return t.map(pn).join(", ");
}
function Xh(t, r) {
  const e = r.callee.name;
  let n, o = r.arguments.map((a) => Rn(t, a));
  const i = e + ":" + o.map((a) => a.type).join("#");
  let s;
  if (t.customFunctions && (s = Ll(t.customFunctions, e, o)), !s || !("func" in s))
    if (Ol.has(i))
      s = {
        func: Ol.get(i),
        conversions: 0
      };
    else {
      const a = Ll(rs, e, o);
      ("func" in a || !s || s.type === "missing") && (s = a);
    }
  if (s && (("expected" in s || "type" in s && s.type === "missing") && Ld(e, o, s), n = s.func, s.conversions && (o = fd(n, o))), !n)
    throw new Error("Function not found");
  try {
    return n.cb(t, ...o);
  } catch (a) {
    if (a && a instanceof fa)
      throw a;
    const l = `${e}(${Ks(o)})`;
    En(l, a.message);
  }
}
function Ld(t, r, e, n = !1) {
  const o = r.map((a) => Zn(a.type)).join(", "), i = `${t}(${Ks(r)})`, s = n ? O_ : En;
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
function Zh(t, r) {
  const e = r.method.name;
  let n, o = [r.object, ...r.arguments].map((s) => Rn(t, s));
  const i = e + ":" + o.map((s) => s.type).join("#");
  if (Rl.has(i))
    n = Rl.get(i);
  else {
    const s = Ll(Cs, e, o);
    if ("expected" in s || "type" in s && s.type === "missing") {
      const a = o.slice(1).map((u) => Zn(u.type)).join(", "), l = `${e}(${Ks(o.slice(1))})`;
      s.type === "few" && o.length === 1 ? En(l, "Method requires non empty argument list.") : s.type === "many" ? En(l, `Method has no matching overload for given argument types: ${a}.`) : s.type === "few" || s.type === "mismatch" ? En(l, `Method has no matching overload for given argument types: ${a}.`) : En(l, `Unknown method name: ${e}.`);
    }
    n = s.func, s.conversions && (o = fd(n, o));
  }
  if (!n)
    throw new Error("Method not found");
  try {
    return n.cb(t, ...o);
  } catch (s) {
    if (s && s instanceof fa)
      throw s;
    const a = `${e}(${Ks(o.slice(1))})`;
    En(a, s.message);
  }
}
function Qh(t, r) {
  var i;
  const e = r.id.name, n = (i = t.customFunctions) == null ? void 0 : i.get(e);
  if (n)
    return {
      type: "function",
      value: n
    };
  const o = t.variables.get(e);
  if (o)
    return Mh(o);
  throw new Error(`Variable '${e}' is missing.`);
}
const bu = {
  StringLiteral: Nh,
  NumberLiteral: zh,
  IntegerLiteral: Oh,
  BooleanLiteral: Rh,
  UnaryExpression: Lh,
  ConditionalExpression: Bh,
  TryExpression: Hh,
  TemplateLiteral: Wh,
  LogicalExpression: Uh,
  BinaryExpression: Kh,
  CallExpression: Xh,
  MethodExpression: Zh,
  Variable: Qh
};
function Rn(t, r) {
  if (r.type in bu)
    return bu[r.type](t, r);
  throw new Error("Unsupported expression");
}
function pl(t, r, e, n, o) {
  try {
    const i = {
      variables: t,
      customFunctions: r,
      warnings: [],
      store: e,
      weekStartDay: (o == null ? void 0 : o.weekStartDay) || 0
    };
    return {
      result: Rn(i, n),
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
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(wh);
const xh = "appkit-root_platform_desktop", $h = "appkit-root__clickable", e0 = "appkit-root", t0 = "appkit-root__selectable", r0 = "appkit-root__unselectable", Cr = {
  root_platform_desktop: xh,
  root__clickable: $h,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  "root__any-actions": "appkit-root__any-actions",
  root: e0,
  root__selectable: t0,
  root__unselectable: r0,
  "root__only-desktop": "appkit-root__only-desktop",
  "root_restrict-scroll": "appkit-root_restrict-scroll",
  "root_disabled-context-menu": "appkit-root_disabled-context-menu"
}, Kr = Symbol("root"), n0 = "appkit-outer", o0 = "appkit-outer_width_content", i0 = "appkit-outer_height_content", s0 = "appkit-root__clickable", l0 = "appkit-outer__border", a0 = "appkit-outer_visibility_invisible", u0 = "appkit-outer_visibility_gone", Xs = {
  outer: n0,
  outer_width_content: o0,
  outer_height_content: i0,
  root__clickable: s0,
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
  outer__border: l0,
  outer_visibility_invisible: a0,
  outer_visibility_gone: u0,
  "outer_has-action-animation": "appkit-outer_has-action-animation",
  "outer_has-custom-focus": "appkit-outer_has-custom-focus"
};
function er(t) {
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
function ae(t) {
  if (typeof t != "number" && typeof t != "string" || !t)
    return "0";
  const r = Number(t);
  return Number.isNaN(r) ? "0" : Math.ceil(r * 1e3) / 1e4 + "em";
}
function fn(t) {
  let r = ae(t);
  return r === "0" && (r += "em"), r;
}
function Xl(t) {
  let r = String(t);
  return r.indexOf("&") > -1 && (r = r.replace(/&/g, "&amp;")), r.indexOf("<") > -1 && (r = r.replace(/</g, "&lt;")), r.indexOf(">") > -1 && (r = r.replace(/>/g, "&gt;")), r.indexOf('"') > -1 && (r = r.replace(/"/g, "&quot;")), r;
}
const zo = Boolean;
function gl(t, r) {
  if (t.length === 1 && t[0].type === "solid")
    return f0({
      bg: t[0]
    });
  const e = t.map((n) => {
    if (n.type === "solid")
      return c0({
        bg: n
      });
    if (n.type === "gradient")
      return d0({
        bg: n
      });
    if (n.type === "image")
      return g0({
        bg: n,
        direction: r
      });
    if (n.type === "radial_gradient")
      return p0({
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
function c0(t) {
  const r = gr(t.bg.color || "transparent");
  return {
    size: void 0,
    pos: void 0,
    image: `linear-gradient(to bottom,${r},${r})`
  };
}
function f0(t) {
  return {
    color: gr(t.bg.color || "transparent"),
    size: "auto",
    position: "50% 50%"
  };
}
function Bd(t) {
  return t.every((n) => n.color && typeof n.position == "number" && n.position >= 0 && n.position <= 1) ? t.sort((n, o) => Math.abs(n.position - o.position) < 1e-6 ? 0 : n.position - o.position).map((n) => `${gr(n.color)} ${(n.position * 100).toFixed(2)}%`).join(",") : void 0;
}
function d0(t) {
  var n, o, i, s;
  if (!Array.isArray((n = t.bg) == null ? void 0 : n.colors) && !Array.isArray((o = t.bg) == null ? void 0 : o.color_map))
    return;
  const r = (i = t.bg.colors) == null ? void 0 : i.filter(zo);
  if (!(r != null && r.length) && !((s = t.bg) != null && s.color_map))
    return;
  let e;
  if (t.bg.color_map) {
    const a = Bd(t.bg.color_map);
    if (!a)
      return;
    e = "linear-gradient(" + (90 - Number(t.bg.angle || 0) + "deg") + "," + a + ")";
  } else {
    if (!r)
      return;
    e = "linear-gradient(" + (90 - Number(t.bg.angle || 0) + "deg") + "," + r.map((a) => gr(a)).join(",") + ")";
  }
  return {
    size: void 0,
    pos: void 0,
    image: e
  };
}
const _0 = {
  nearest_corner: "closest-corner",
  farthest_corner: "farthest-corner",
  nearest_side: "closest-side",
  farthest_side: "farthest-side"
};
function yu(t) {
  if (t && typeof t == "object" && "type" in t && t.value !== void 0) {
    if (t.type === "fixed")
      return fn(t.value);
    if (t.type === "relative")
      return `${Number(t.value) * 100}%`;
  }
  return "50%";
}
function p0(t) {
  var a, l, u, c;
  if (!Array.isArray((a = t.bg) == null ? void 0 : a.colors) && !Array.isArray((l = t.bg) == null ? void 0 : l.color_map))
    return;
  const r = (u = t.bg.colors) == null ? void 0 : u.filter(zo);
  if (!(r != null && r.length) && !((c = t.bg) != null && c.color_map))
    return;
  let e;
  if (t.bg.color_map ? e = Bd(t.bg.color_map) : r && (e = r.map((f) => gr(f)).join(",")), !e)
    return;
  const n = t.bg.radius;
  let o;
  n && typeof n == "object" && "type" in n && n.value !== void 0 && (n.type === "fixed" ? o = fn(n.value) : n.type === "relative" && (o = _0[n.value]));
  const i = yu(t.bg.center_x), s = yu(t.bg.center_y);
  return {
    size: void 0,
    pos: void 0,
    image: `radial-gradient(circle ${o || "farthest-corner"} at ${i} ${s},` + e + ")"
  };
}
function g0(t) {
  var e;
  const r = (e = t.bg) == null ? void 0 : e.image_url;
  if (r)
    return {
      size: Hd(t.bg.scale),
      pos: Wd(t.bg, t.direction),
      image: 'url("' + Xl(r) + '")'
    };
}
function Hd(t) {
  return t === "fit" ? "contain" : t === "stretch" ? "fill" : t === "no_scale" ? "none" : "cover";
}
function h0(t) {
  return t === "none" ? "auto" : t === "fill" ? "100% 100%" : t;
}
function Wd(t, r) {
  let e, n;
  return t.content_alignment_horizontal === "left" || r === "ltr" && t.content_alignment_horizontal === "start" || r === "rtl" && t.content_alignment_horizontal === "end" ? e = "0%" : t.content_alignment_horizontal === "right" || r === "ltr" && t.content_alignment_horizontal === "end" || r === "rtl" && t.content_alignment_horizontal === "start" ? e = "100%" : e = "50%", t.content_alignment_vertical === "top" ? n = "0%" : t.content_alignment_vertical === "bottom" ? n = "100%" : n = "50%", e + " " + n;
}
function $r(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e < 0 ? r : e;
}
function wu(t, r, e) {
  return typeof r == "number" && (t && r > 0 && r <= 100 || !t && r >= 0 && r < 100) ? r : e;
}
function m0(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1 && t.index !== void 0;
}
function b0(t, {
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
  }, u = Ji(s, (h) => h);
  let c;
  const f = (h) => {
    const m = h.type === "visibility";
    o.execAnyActions([h.action], {
      logType: m ? "visible" : "disappear",
      node: t,
      processUrls: !1
    });
  }, _ = u.subscribe((h) => {
    c = h.filter(m0);
    const m = {};
    c.forEach((w) => {
      m[w.index] = w;
    }), l();
    const p = [...new Set(c.map((w) => {
      const O = i[w.index].type === "visibility";
      return wu(
        O,
        w.visibility_percentage,
        O ? 50 : 0
      ) / 100;
    }))];
    if (!p.length)
      return;
    const k = (w) => {
      w.forEach((O) => {
        c.forEach((U) => {
          const R = i[U.index], $ = R.type === "visibility", ue = wu(
            $,
            U.visibility_percentage,
            $ ? 50 : 0
          );
          let T;
          ue === 0 ? T = O.intersectionRatio >= 1e-12 : T = O.intersectionRatio >= ue / 100, ($ ? !R.visible && T : R.visible && !T) ? R.finished || (R.timer = setTimeout(() => {
            ++R.count;
            const C = U.log_limit === 0 ? 1 / 0 : U.log_limit || 1;
            R.count >= C && (R.finished = !0), f(R);
          }, $r(U.visibility_duration, 800))) : ($ ? !T : T) && R.timer && clearTimeout(R.timer), R.visible = T;
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
function ku(t, r) {
  r && t.push(r);
}
function mt(t, r, e) {
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
function y0(t, r, e, n) {
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
const Ud = y0, ya = Symbol("state");
function po(t, r) {
  var s, a;
  const e = t.top || 0, n = ((s = r === "ltr" ? t.end : t.start) != null ? s : t.right) || 0, o = t.bottom || 0, i = ((a = r === "ltr" ? t.start : t.end) != null ? a : t.left) || 0;
  return e === 0 && n === 0 && o === 0 && i === 0 ? "" : ae(e) + " " + ae(n) + " " + ae(o) + " " + ae(i);
}
function hl(t) {
  if (typeof t != "number" && typeof t != "string")
    return !1;
  const r = Number(t);
  return !Number.isNaN(r);
}
function Tn(t) {
  return hl(t) && t >= 0;
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
    if (n[s] && !Tn(n[s]))
      return e;
  return po(t, r);
}
function w0(t, r) {
  return !Tn(t) || t === void 0 || t > 1 ? r : Number(t);
}
const k0 = Object.prototype.hasOwnProperty;
function qi(t, r) {
  if (Object.is(t, r))
    return !0;
  if (typeof t != "object" || t === null || typeof r != "object" || r === null)
    return Object.is(t, r);
  const e = Object.keys(t), n = Object.keys(r);
  if (e.length !== n.length)
    return !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (!k0.call(r, i) || !qi(t[i], r[i]))
      return !1;
  }
  return !0;
}
function xo(t, r) {
  return qi(t, r) ? r : t;
}
function v0(t, r) {
  return t === "visible" || t === "invisible" || t === "gone" ? t : r;
}
function Gd(t, r) {
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
function yi(t, r) {
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
function j0(t, r) {
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
function C0(t, r) {
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
function Ls(t, r = 0, e = 10) {
  return [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ].map((n) => ae((n || r) / e * 10)).join(" ");
}
function E0(t) {
  var r, e, n, o, i, s;
  return ae(((e = (r = t.offset) == null ? void 0 : r.x) == null ? void 0 : e.value) || 0) + " " + ae(((o = (n = t.offset) == null ? void 0 : n.y) == null ? void 0 : o.value) || 0) + " " + ae((i = t.blur) != null ? i : 2) + " " + gr(t.color || "#000000", (s = t.alpha) != null ? s : 0.19);
}
function A0(t, r) {
  var e, n, o, i, s, a;
  return "drop-shadow(" + gr(t.color || "#000000", (e = t.alpha) != null ? e : 0.19) + " " + ae((((o = (n = t.offset) == null ? void 0 : n.x) == null ? void 0 : o.value) || 0) * 10 / r) + " " + ae((((s = (i = t.offset) == null ? void 0 : i.y) == null ? void 0 : s.value) || 0) * 10 / r) + " " + ae(((a = t.blur) != null ? a : 2) * 10 / r) + ")";
}
let El;
function Li() {
  return typeof matchMedia > "u" ? !1 : (El || (El = window.matchMedia("(prefers-reduced-motion)")), El.matches);
}
const S0 = 8, V0 = (t, r, e, n) => {
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
      if (++i > S0) {
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
}, wa = Symbol("enabled");
function _n(t, r) {
  return t === 1 || t === 0 || t === !1 || t === !0 ? !!t : r;
}
function ri(t) {
  return [
    t.state_description,
    t.description,
    t.hint
  ].filter(Boolean).join(", ");
}
const vu = 1, ni = 2;
function ju(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "translation-fixed")
      return ae(t.value * r);
    if (t.type === "translation-percentage")
      return `${t.value * r}%`;
  }
}
function ys(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "pivot-fixed")
      return ae(t.value * r);
    if (t.type === "pivot-percentage")
      return `${t.value * r}%`;
  }
}
function F0(t) {
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
const I0 = "appkit-actionable__button", Cu = {
  actionable__button: I0
};
function D0() {
}
const Do = Symbol("action");
function Zl(t) {
  if (t.startsWith("tel:"))
    return "tel";
  if (t.startsWith("/"))
    return "https";
  const r = /^([^/]+):\/\//.exec(t);
  return r && r[1] || "";
}
function Ql(t, r) {
  return r.has(t);
}
function T0(t) {
  let r = (
    /*containerElement*/
    t[7]
  ), e, n, o = (
    /*containerElement*/
    t[7] && Al(t)
  );
  return {
    c() {
      o && o.c(), e = Zt();
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
      ) ? (o.d(1), o = Al(i), r = /*containerElement*/
      i[7], o.c(), o.m(e.parentNode, e)) : o.p(i, s) : (o = Al(i), r = /*containerElement*/
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
function M0(t) {
  var f;
  let r, e, n, o, i, s;
  const a = (
    /*#slots*/
    t[31].default
  ), l = ll(
    a,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let u = [
    {
      class: e = /*cls*/
      t[2] + " " + Cu.actionable__button + " " + Cr["root__any-actions"] + ` ${/*isNativeActionAnimation*/
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
      t[0].fakeElement === ni ? -1 : null
    },
    /*attrs*/
    t[4]
  ], c = {};
  for (let _ = 0; _ < u.length; _ += 1)
    c = jo(c, u[_]);
  return {
    c() {
      r = Ve("button"), l && l.c(), Go(r, c);
    },
    m(_, h) {
      q(_, r, h), l && l.m(r, null), r.autofocus && r.focus(), t[48](r), o = !0, i || (s = [
        fl(
          /*use*/
          t[5].call(null, r)
        ),
        Be(
          r,
          "click",
          /*click_handler_1*/
          t[37]
        ),
        Be(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        Be(
          r,
          "focus",
          /*focus_handler_1*/
          t[38]
        ),
        Be(
          r,
          "blur",
          /*blur_handler_1*/
          t[39]
        ),
        Be(
          r,
          "pointerdown",
          /*pointerdown_handler_1*/
          t[40]
        ),
        Be(
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
      1073741824) && ul(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? al(
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
      ), Go(r, c = No(u, [
        (!o || h[0] & /*cls, isNativeActionAnimation, longTapActions*/
        70 && e !== (e = /*cls*/
        _[2] + " " + Cu.actionable__button + " " + Cr["root__any-actions"] + ` ${/*isNativeActionAnimation*/
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
        _[0].fakeElement === ni ? -1 : null)) && { tabindex: n },
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
      _ && J(r), l && l.d(_), t[48](null), i = !1, Br(s);
    }
  };
}
function P0(t) {
  var f;
  let r, e, n, o, i, s;
  const a = (
    /*#slots*/
    t[31].default
  ), l = ll(
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
      t[2] + " " + Cr["root__any-actions"] + " " + /*isNativeActionAnimation*/
      (t[6] ? Cr.root__clickable : Cr["root__clickable-no-transition"]) + " " + /*longTapActions*/
      ((f = t[1]) != null && f.length ? Cr["root_disabled-context-menu"] : "")
    },
    {
      tabindex: n = /*componentContext*/
      t[0].fakeElement === ni ? -1 : null
    },
    /*attrs*/
    t[4]
  ], c = {};
  for (let _ = 0; _ < u.length; _ += 1)
    c = jo(c, u[_]);
  return {
    c() {
      r = Ve("a"), l && l.c(), Go(r, c);
    },
    m(_, h) {
      q(_, r, h), l && l.m(r, null), t[47](r), o = !0, i || (s = [
        fl(
          /*use*/
          t[5].call(null, r)
        ),
        Be(
          r,
          "click",
          /*click_handler*/
          t[32]
        ),
        Be(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        Be(
          r,
          "focus",
          /*focus_handler*/
          t[33]
        ),
        Be(
          r,
          "blur",
          /*blur_handler*/
          t[34]
        ),
        Be(
          r,
          "pointerdown",
          /*pointerdown_handler*/
          t[35]
        ),
        Be(
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
      1073741824) && ul(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? al(
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
      ), Go(r, c = No(u, [
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
        _[0].fakeElement === ni ? -1 : null)) && { tabindex: n },
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
      _ && J(r), l && l.d(_), t[47](null), i = !1, Br(s);
    }
  };
}
function Al(t) {
  var f;
  let r, e, n, o, i, s;
  const a = (
    /*#slots*/
    t[31].default
  ), l = ll(
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
  ], c = {};
  for (let _ = 0; _ < u.length; _ += 1)
    c = jo(c, u[_]);
  return {
    c() {
      r = Ve(
        /*containerElement*/
        t[7]
      ), l && l.c(), ti(
        /*containerElement*/
        t[7]
      )(r, c);
    },
    m(_, h) {
      q(_, r, h), l && l.m(r, null), t[49](r), o = !0, i || (s = [
        fl(
          /*use*/
          t[5].call(null, r)
        ),
        Be(
          r,
          "click",
          /*click_handler_2*/
          t[42]
        ),
        Be(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        Be(
          r,
          "focus",
          /*focus_handler_2*/
          t[43]
        ),
        Be(
          r,
          "blur",
          /*blur_handler_2*/
          t[44]
        ),
        Be(
          r,
          "pointerdown",
          /*pointerdown_handler_2*/
          t[45]
        ),
        Be(
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
      1073741824) && ul(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? al(
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
      ), ti(
        /*containerElement*/
        _[7]
      )(r, c = No(u, [
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
      o || (B(l, _), o = !0);
    },
    o(_) {
      Q(l, _), o = !1;
    },
    d(_) {
      _ && J(r), l && l.d(_), t[49](null), i = !1, Br(s);
    }
  };
}
function N0(t) {
  let r, e, n, o;
  const i = [P0, M0, T0], s = [];
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
      e.c(), n = Zt();
    },
    m(l, u) {
      s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? s[r].p(l, u) : (ar(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ur(), e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n));
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
const Eu = 8, Au = 400, Sl = 400, z0 = /* @__PURE__ */ new Set(["button", "image", "checkbox", "radio", "header"]);
function Su(t) {
  t.preventDefault();
}
function O0(t, r, e) {
  let n, o, i = E, s = () => (i(), i = V(n, (Y) => e(29, o = Y)), n);
  t.$$.on_destroy.push(() => i());
  let { $$slots: a = {}, $$scope: l } = r, { componentContext: u } = r, { id: c = "" } = r, { actions: f = void 0 } = r, { doubleTapActions: _ = void 0 } = r, { longTapActions: h = void 0 } = r, { pressStartActions: m = void 0 } = r, { pressEndActions: p = void 0 } = r, { hoverStartActions: k = void 0 } = r, { hoverEndActions: w = void 0 } = r, { cls: O = "" } = r, { style: U = null } = r, { attrs: R = void 0 } = r, { use: $ = D0 } = r, { customAction: ue = null } = r, { isNativeActionAnimation: T = !0 } = r, { hasInnerFocusable: X = !1 } = r, { customAccessibility: le = void 0 } = r, { captureFocusOnAction: C = !0 } = r, { containerElement: M = "span" } = r;
  const P = Tr(Kr), H = Tr(Do);
  pi(Do, {
    hasAction() {
      return !!(H.hasAction() || f != null && f.length || (le == null ? void 0 : le.mode) === "exclude");
    }
  });
  let se, de = "", Ee, Ae = -1, pe = -1, De = null, ee = !1, Te = !1, We = !1, Ke, ke, et, fe, je = !1;
  function ce() {
    return (o == null ? void 0 : o.some((Y) => {
      if (Y != null && Y.typed)
        return !0;
      const Mt = Y == null ? void 0 : Y.url;
      if (!Mt)
        return !1;
      const Vt = Zl(Mt);
      return Vt && !Ql(Vt, P.getBuiltinProtocols());
    })) || !1;
  }
  async function te(Y, Mt) {
    f && (Y && ce() && Y.preventDefault(), u.execAnyActions(f, { node: se, processUrls: Mt }));
  }
  async function _e(Y) {
    if (H.hasAction() || Y.button !== void 0 && Y.button !== 0)
      return;
    const Mt = Date.now();
    if (Ae > 0 && Mt > Ae + Au) {
      Y.preventDefault();
      return;
    }
    if (_ != null && _.length && pe > 0 && Mt - pe < Sl) {
      Y.preventDefault(), u.execAnyActions(_, { processUrls: !0, node: se }), pe = -1;
      return;
    }
    if (pe = Mt, _ != null && _.length && Ae > 0 && Mt < Ae + Sl) {
      Y.preventDefault(), clearTimeout(ke), ke = window.setTimeout(
        () => {
          te(void 0, !0);
        },
        Sl
      );
      return;
    }
    (ue == null ? void 0 : ue(Y)) === !1 ? Y.preventDefault() : te(Y, !1);
  }
  function ie(Y) {
    H.hasAction() || (De = { x: Y.clientX, y: Y.clientY }, ee = !1, Ae = Date.now(), Ke && clearTimeout(Ke), clearTimeout(ke), u.execAnyActions(m, { node: se }));
  }
  function Fe(Y) {
    De && (Math.abs(De.x - Y.clientX) > Eu || Math.abs(De.y - Y.clientY) > Eu) && (ee = !0);
  }
  function xe(Y) {
    H.hasAction() || !De || Ae < 0 || (!ee && Date.now() - Ae >= Au && (Y.stopImmediatePropagation(), u.execAnyActions(h, { processUrls: !0, node: se })), Ke && clearTimeout(Ke), Ke = window.setTimeout(
      () => {
        De = null, Ae = -1;
      },
      100
    ), u.execAnyActions(p, { node: se }));
  }
  function Xe() {
    H.hasAction() || u.execAnyActions(k, { node: se });
  }
  function oe() {
    H.hasAction() || u.execAnyActions(w, { node: se });
  }
  function Ye(Y) {
    const Mt = Y.target;
    Mt instanceof HTMLElement && (Mt.tagName === "INPUT" || Mt.contentEditable === "true") || Y.ctrlKey || Y.metaKey || Y.altKey || Y.shiftKey || Y.key === "Enter" && Array.isArray(f) && f.length && (u.execAnyActions(f), Y.preventDefault());
  }
  ro(() => {
    c && !X && P.registerFocusable(c, {
      focus() {
        se && (de || Te) && se.focus();
      }
    });
  }), an(() => {
    typeof window < "u" && (window.removeEventListener("pointermove", Fe), window.removeEventListener("pointerup", xe), window.removeEventListener("pointercancel", xe)), c && !X && P.unregisterFocusable(c), Ke && clearTimeout(Ke), ke && clearTimeout(ke);
  });
  function Oe(Y) {
    On.call(this, t, Y);
  }
  function st(Y) {
    On.call(this, t, Y);
  }
  function at(Y) {
    On.call(this, t, Y);
  }
  function ut(Y) {
    On.call(this, t, Y);
  }
  function kt(Y) {
    On.call(this, t, Y);
  }
  function rt(Y) {
    On.call(this, t, Y);
  }
  function Nt(Y) {
    On.call(this, t, Y);
  }
  function ct(Y) {
    On.call(this, t, Y);
  }
  function ge(Y) {
    On.call(this, t, Y);
  }
  function he(Y) {
    On.call(this, t, Y);
  }
  function pt(Y) {
    On.call(this, t, Y);
  }
  function Ce(Y) {
    On.call(this, t, Y);
  }
  function I(Y) {
    On.call(this, t, Y);
  }
  function Ct(Y) {
    On.call(this, t, Y);
  }
  function dt(Y) {
    On.call(this, t, Y);
  }
  function At(Y) {
    Fr[Y ? "unshift" : "push"](() => {
      se = Y, e(8, se);
    });
  }
  function Tt(Y) {
    Fr[Y ? "unshift" : "push"](() => {
      se = Y, e(8, se);
    });
  }
  function nt(Y) {
    Fr[Y ? "unshift" : "push"](() => {
      se = Y, e(8, se);
    });
  }
  return t.$$set = (Y) => {
    "componentContext" in Y && e(0, u = Y.componentContext), "id" in Y && e(18, c = Y.id), "actions" in Y && e(19, f = Y.actions), "doubleTapActions" in Y && e(20, _ = Y.doubleTapActions), "longTapActions" in Y && e(1, h = Y.longTapActions), "pressStartActions" in Y && e(21, m = Y.pressStartActions), "pressEndActions" in Y && e(22, p = Y.pressEndActions), "hoverStartActions" in Y && e(23, k = Y.hoverStartActions), "hoverEndActions" in Y && e(24, w = Y.hoverEndActions), "cls" in Y && e(2, O = Y.cls), "style" in Y && e(3, U = Y.style), "attrs" in Y && e(4, R = Y.attrs), "use" in Y && e(5, $ = Y.use), "customAction" in Y && e(25, ue = Y.customAction), "isNativeActionAnimation" in Y && e(6, T = Y.isNativeActionAnimation), "hasInnerFocusable" in Y && e(26, X = Y.hasInnerFocusable), "customAccessibility" in Y && e(27, le = Y.customAccessibility), "captureFocusOnAction" in Y && e(28, C = Y.captureFocusOnAction), "containerElement" in Y && e(7, M = Y.containerElement), "$$scope" in Y && e(30, l = Y.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*customAccessibility*/
    134217728 && e(12, je = (le == null ? void 0 : le.mode) === "exclude"), t.$$.dirty[0] & /*componentContext, actions*/
    524289 && s(e(16, n = u.getDerivedFromVars(f, void 0, !0))), t.$$.dirty[0] & /*$processedActions, customAction, href, ariaHidden, componentContext*/
    570429953) {
      if (Array.isArray(o) && (o != null && o.length))
        for (let Y = 0; Y < o.length; ++Y) {
          const Mt = o[Y].url;
          if (Mt) {
            e(9, de = Mt), e(13, Ee = o[Y].target || void 0);
            break;
          }
        }
      e(10, Te = !!ue), (de || Array.isArray(o) && (o != null && o.length)) && (H.hasAction() || je) ? (e(9, de = ""), u.logError(K(new Error("Actionable element is forbidden inside other actionable element or inside accessibility mode=exlucde"), {
        level: "warn",
        additional: { actions: o }
      }))) : de && !Ql(Zl(de), P.getBuiltinProtocols()) ? (e(9, de = ""), e(10, Te = !0)) : !de && Array.isArray(o) && (o != null && o.length) && (e(10, Te = !0), o.some((Y) => Y.url || Y.typed || Y.menu_items) || u.logError(K(new Error("The component has a list of actions, but does not have a real action"), {
        level: "warn",
        additional: { actions: o }
      })));
    }
    t.$$.dirty[0] & /*customAccessibility, href, hasJSAction, role*/
    134221312 && (le != null && le.type && z0.has(le.type) ? le.type === "header" ? e(11, et = "heading") : e(11, et = le.type) : de ? e(11, et = void 0) : Te && e(11, et = "button"), (et === "checkbox" || et === "radio") && typeof (le == null ? void 0 : le.is_checked) == "boolean" ? e(15, fe = le.is_checked) : e(15, fe = void 0)), t.$$.dirty[0] & /*node, href, hasJSAction, doubleTapActions, longTapActions, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions, captureFocusOnAction*/
    300943106 && se && (de || Te || _ != null && _.length ? se.addEventListener("click", _e) : se.removeEventListener("click", _e), _ != null && _.length || h != null && h.length || m != null && m.length || p != null && p.length ? (se.addEventListener("pointerdown", ie, { passive: !0 }), window.addEventListener("pointermove", Fe, { passive: !0 }), window.addEventListener("pointerup", xe, { passive: !0 }), window.addEventListener("pointercancel", xe, { passive: !0 })) : (se.removeEventListener("pointerdown", ie), window.removeEventListener("pointerup", xe), window.removeEventListener("pointermove", Fe), window.removeEventListener("pointercancel", xe)), k != null && k.length ? se.addEventListener("pointerenter", Xe) : se.removeEventListener("pointerenter", Xe), w != null && w.length ? se.addEventListener("pointerleave", oe) : se.removeEventListener("pointerleave", oe), C === !1 ? se.addEventListener("mousedown", Su) : se.removeEventListener("mousedown", Su), e(14, We = !!(de || Te || _ != null && _.length || h != null && h.length || m != null && m.length || p != null && p.length || k != null && k.length || w != null && w.length)));
  }, [
    u,
    h,
    O,
    U,
    R,
    $,
    T,
    M,
    se,
    de,
    Te,
    et,
    je,
    Ee,
    We,
    fe,
    n,
    Ye,
    c,
    f,
    _,
    m,
    p,
    k,
    w,
    ue,
    X,
    le,
    C,
    o,
    l,
    a,
    Oe,
    st,
    at,
    ut,
    kt,
    rt,
    Nt,
    ct,
    ge,
    he,
    pt,
    Ce,
    I,
    Ct,
    dt,
    At,
    Tt,
    nt
  ];
}
class ml extends Rr {
  constructor(r) {
    super(), Or(
      this,
      r,
      O0,
      N0,
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
const gi = {
  "outer-background": "appkit-outer-background",
  "outer-background_clip": "appkit-outer-background_clip",
  "outer-background__item": "appkit-outer-background__item",
  "outer-background__item_hidden": "appkit-outer-background__item_hidden"
};
function Un(t) {
  return hl(t) && t > 0;
}
function Jd(t, r) {
  return t.map((e) => {
    if (!e) {
      r(K(new Error("Incorrect filter"), {
        level: "warn"
      }));
      return;
    }
    if (e.type === "blur") {
      if (Un(e.radius))
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
function Vu(t, r, e) {
  const n = t.slice();
  return n[6] = r[e], n;
}
function R0(t) {
  let r, e;
  return {
    c() {
      r = Ve("span"), g(r, "class", gi["outer-background__item"]), g(r, "style", e = er(
        /*item*/
        t[6].style
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o & /*styles*/
      2 && e !== (e = er(
        /*item*/
        n[6].style
      )) && g(r, "style", e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function L0(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Ve("img"), Qn(r.src, e = /*item*/
      t[6].image_url) || g(r, "src", e), g(r, "alt", ""), g(r, "aria-hidden", "true"), g(r, "loading", "lazy"), g(r, "decoding", "async"), g(r, "class", gi["outer-background__item"]), g(r, "style", n = er(
        /*item*/
        t[6].style
      ));
    },
    m(s, a) {
      q(s, r, a), o || (i = Be(
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
      2 && n !== (n = er(
        /*item*/
        s[6].style
      )) && g(r, "style", n);
    },
    d(s) {
      s && J(r), o = !1, i();
    }
  };
}
function Fu(t) {
  let r;
  function e(i, s) {
    return (
      /*item*/
      i[6].image_url ? L0 : R0
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Zt();
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
function B0(t) {
  let r, e, n = nr(
    /*styles*/
    t[1]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Fu(Vu(t, n, i));
  return {
    c() {
      r = Ve("span");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", e = gi["outer-background"] + /*radius*/
      (t[0] ? " " + gi["outer-background_clip"] : "")), D(
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
          const l = Vu(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Fu(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s & /*radius*/
      1 && e !== (e = gi["outer-background"] + /*radius*/
      (i[0] ? " " + gi["outer-background_clip"] : "")) && g(r, "class", e), s & /*radius*/
      1 && D(
        r,
        "border-radius",
        /*radius*/
        i[0]
      );
    },
    i: E,
    o: E,
    d(i) {
      i && J(r), on(o, i);
    }
  };
}
function H0(t, r, e) {
  let n, { direction: o } = r, { componentContext: i } = r, { background: s = [] } = r, { radius: a = "" } = r;
  function l(u) {
    u.target && "classList" in u.target && u.target.classList.add(gi["outer-background__item_hidden"]);
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
        const _ = gl([u], o);
        u.type === "solid" && (c["background-color"] = _.color), u.type === "gradient" && (c["background-image"] = _.image), u.type === "image" && (c.opacity = Number(u.alpha), f.image_url = u.image_url, c["object-fit"] = _.size, c["object-position"] = _.position, Array.isArray(u.filters) && u.filters.length && (c.filter = Jd(u.filters, i.logError), o === "rtl" && u.filters.some((h) => h.type === "rtl_mirror") && (c.transform = "scale(-1,1)")));
      }
      return f;
    }));
  }, [a, n, l, o, i, s];
}
class W0 extends Rr {
  constructor(r) {
    super(), Or(this, r, H0, B0, Sr, {
      direction: 3,
      componentContext: 4,
      background: 5,
      radius: 0
    });
  }
}
const U0 = (t) => ({
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
  return r = new ml({
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
        t[1] + " " + mt(
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
      style: er(
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
      t[16].length || Pu(
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
      $$slots: { default: [G0] },
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
      Bt(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
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
      n[1] + " " + mt(
        "outer",
        Xs,
        /*mods*/
        n[31]
      ) + /*customClass*/
      (n[30] ? ` ${/*customClass*/
      n[30]}` : "") + /*hoverClassName*/
      (n[18] ? ` ${/*hoverClassName*/
      n[18]}` : "")), o[0] & /*stl*/
      536870912 && (i.style = er(
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
      n[16].length || Pu(
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
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Lt(r, n);
    }
  };
}
function Tu(t) {
  let r, e;
  return r = new W0({
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function Mu(t) {
  let r, e;
  return {
    c() {
      r = Ve("span"), g(r, "class", Xs.outer__border), g(r, "style", e = er(
        /*borderElemStyle*/
        t[4]
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o[0] & /*borderElemStyle*/
      16 && e !== (e = er(
        /*borderElemStyle*/
        n[4]
      )) && g(r, "style", e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function G0(t) {
  let r, e, n, o = (
    /*hasSeparateBg*/
    t[11] && Tu(t)
  );
  const i = (
    /*#slots*/
    t[146].default
  ), s = ll(
    i,
    t,
    /*$$scope*/
    t[149],
    Iu
  );
  let a = (
    /*hasBorder*/
    t[22] && Mu(t)
  );
  return {
    c() {
      o && o.c(), r = Zt(), s && s.c(), a && a.c(), e = Zt();
    },
    m(l, u) {
      o && o.m(l, u), q(l, r, u), s && s.m(l, u), a && a.m(l, u), q(l, e, u), n = !0;
    },
    p(l, u) {
      /*hasSeparateBg*/
      l[11] ? o ? (o.p(l, u), u[0] & /*hasSeparateBg*/
      2048 && B(o, 1)) : (o = Tu(l), o.c(), B(o, 1), o.m(r.parentNode, r)) : o && (ar(), Q(o, 1, 1, () => {
        o = null;
      }), ur()), s && s.p && (!n || u[0] & /*hasCustomFocus, widthMin, widthMax, heightMin, heightMax*/
      132032 | u[4] & /*$$scope*/
      33554432) && ul(
        s,
        i,
        l,
        /*$$scope*/
        l[149],
        n ? al(
          i,
          /*$$scope*/
          l[149],
          u,
          U0
        ) : cl(
          /*$$scope*/
          l[149]
        ),
        Iu
      ), /*hasBorder*/
      l[22] ? a ? a.p(l, u) : (a = Mu(l), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null);
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
function J0(t) {
  let r, e, n = !/*hasWidthError*/
  t[23] && !/*hasHeightError*/
  t[24] && Du(t);
  return {
    c() {
      n && n.c(), r = Zt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, i) {
      !/*hasWidthError*/
      o[23] && !/*hasHeightError*/
      o[24] ? n ? (n.p(o, i), i[0] & /*hasWidthError, hasHeightError*/
      25165824 && B(n, 1)) : (n = Du(o), n.c(), B(n, 1), n.m(r.parentNode, r)) : n && (ar(), Q(n, 1, 1, () => {
        n = null;
      }), ur());
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
const q0 = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
}, Y0 = {
  left: "end",
  center: "center",
  right: "start",
  start: "start",
  end: "end"
}, K0 = {
  top: "start",
  center: "center",
  bottom: "end",
  baseline: "baseline"
}, Vl = (t) => `The component id with the "${t}" property for state change is missing. Either specify the id, or specify the "transition_trigger" property without "state_change" value.`;
function Pu(t) {
  return t.some((r) => r.name === "native");
}
function X0(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, U, R, $, ue, T, X, le, C, M, P, H, se, de, Ee, Ae, pe, De, ee, Te, We, Ke, ke, et, fe, je, ce, te, _e, ie = E, Fe = () => (ie(), ie = V(w, (tt) => e(130, _e = tt)), w), xe, Xe = E, oe = () => (Xe(), Xe = V(O, (tt) => e(131, xe = tt)), O), Ye, Oe = E, st = () => (Oe(), Oe = V(k, (tt) => e(132, Ye = tt)), k), at, ut = E, kt = () => (ut(), ut = V(U, (tt) => e(133, at = tt)), U), rt, Nt = E, ct = () => (Nt(), Nt = V(p, (tt) => e(134, rt = tt)), p), ge, he = E, pt = () => (he(), he = V(m, (tt) => e(135, ge = tt)), m), Ce, I = E, Ct = () => (I(), I = V(o, (tt) => e(136, Ce = tt)), o), dt, At = E, Tt = () => (At(), At = V(h, (tt) => e(20, dt = tt)), h), nt, Y = E, Mt = () => (Y(), Y = V(_, (tt) => e(137, nt = tt)), _), Vt, Gt = E, Jt = () => (Gt(), Gt = V(f, (tt) => e(138, Vt = tt)), f), me, Ue = E, _t = () => (Ue(), Ue = V(c, (tt) => e(139, me = tt)), c), ye, Qe = E, ze = () => (Qe(), Qe = V(a, (tt) => e(140, ye = tt)), a), or, Pe = E, yt = () => (Pe(), Pe = V(u, (tt) => e(141, or = tt)), u), Ft, It = E, hr = () => (It(), It = V(l, (tt) => e(142, Ft = tt)), l), Me, vt = E, sr = () => (vt(), vt = V(s, (tt) => e(143, Me = tt)), s), $t, Yt = E, mr = () => (Yt(), Yt = V(i, (tt) => e(144, $t = tt)), i), jr;
  t.$$.on_destroy.push(() => ie()), t.$$.on_destroy.push(() => Xe()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => ut()), t.$$.on_destroy.push(() => Nt()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => At()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => Gt()), t.$$.on_destroy.push(() => Ue()), t.$$.on_destroy.push(() => Qe()), t.$$.on_destroy.push(() => Pe()), t.$$.on_destroy.push(() => It()), t.$$.on_destroy.push(() => vt()), t.$$.on_destroy.push(() => Yt());
  let { $$slots: Qt = {}, $$scope: xt } = r, { componentContext: G } = r, { cls: ft = "" } = r, { style: Wt = void 0 } = r, { layoutParams: St = {} } = r, { customDescription: br = !1 } = r, { customPaddings: Er = !1 } = r, { customActions: wr = "" } = r, { additionalPaddings: Ir = null } = r, { heightByAspect: zr = !1 } = r, { parentOf: tr = void 0 } = r, { parentOfSimpleMode: ot = void 0 } = r, { replaceItems: jt = void 0 } = r, { hasInnerFocusable: Kt = !1 } = r, { alwaysCustomFocus: qt = !1 } = r, { containerElement: pr = "span" } = r, { devapi: lt = void 0 } = r;
  const re = Tr(Kr), bt = Tr(ya), { isEnabled: ir } = Tr(wa);
  bn(t, ir, (tt) => e(145, jr = tt));
  const yr = re.direction;
  bn(t, yr, (tt) => e(19, te = tt));
  let fr, v, ne = null, d = [], j = {}, Ie = {}, Re = !1, Pt = 1, L = "transparent", Dt = 0, it = {
    "top-left": 0,
    "top-right": 0,
    "bottom-right": 0,
    "bottom-left": 0
  }, Ge = "", Je = null, Ht = "", kr = {}, en, rn, Jr, ve = 0, wn = 0, Xr = 0, hn = !1, zn = !1, y = {}, A, S, x, z = 0, Ze = 0, Se = 0, Xt = !1, wt = !1, qe = 1, rr, Et, lr, Vr, sn = [], Zr = !1, Sn = !1, tn, Dn, Jn, qn = [], Ut = [], b = [], F = [], Z = [], N = [], we = [], be = [], zt = [], Ot = [], Ur = "", Dr, Gr, ho, Yn, so = !1, Vn = "visible", qo, Oo, Yo = !1, He = !0, vr, Mr, mo, Ko = null, ln;
  function Yi() {
    e(72, Je = null), e(73, Ht = ""), e(86, qe = 1), e(98, so = !1), e(99, Vn = "visible"), e(100, qo = void 0), e(28, He = !0), sn = G.fakeElement ? [] : G.json.transition_triggers || ["state_change", "visibility_change"], e(89, Zr = sn.indexOf("state_change") !== -1), Sn = sn.indexOf("visibility_change") !== -1, fr && Fa(fr), Mr == null || Mr(), jr && e(102, Mr = re.processVariableTriggers(G, G.json.variable_triggers));
  }
  function ui(tt, qr) {
    if (!Array.isArray(tr) || !jt || ot && (Array.isArray(qr) ? qr.length : 0) !== 1)
      return;
    const Cn = tr.findIndex((un) => (un == null ? void 0 : un.id) === tt), Ln = tr.slice();
    Ln.splice(Cn, 1, ...(qr || []).map((un) => ({ json: un, id: un == null ? void 0 : un.id }))), e(53, tr = Ln), jt(Ln.map((un) => un == null ? void 0 : un.json));
  }
  function Si(tt) {
    const qr = oo(tt.start_value, 1), Cn = oo(tt.end_value, 1), Ln = $r(tt.start_delay, 0), un = Li() ? 0 : $r(tt.duration, 300), bo = Gd(tt.interpolator, "ease_in_out").replace(/_/g, "-");
    switch (tt.name) {
      case "fade":
        return e(94, Dr = qr), e(95, Gr = Cn), `opacity ${un}ms ${bo} ${Ln}ms`;
      case "scale":
        return e(96, ho = qr), e(97, Yn = Cn), `transform ${un}ms ${bo} ${Ln}ms`;
      case "native":
      case "no_animation":
        return "";
      default:
        return G.logError(K(new Error("Unknown action_animation name"), {
          additional: { animation: tt.name }
        })), "";
    }
  }
  async function g_(tt) {
    e(99, Vn = tt);
    const qr = tt === "visible" ? "in" : "out", Cn = qr === "in" ? G.json.transition_in : G.json.transition_out;
    if (Sn && Cn) {
      let Ln;
      tt === "gone" && (Ln = fr.getBoundingClientRect()), await An(), qr === "in" && e(91, Dn = !0), bt.runVisibilityTransition(
        {
          ...G.json,
          visibility: "visible"
        },
        G,
        Cn,
        fr,
        qr,
        Ln
      ).then(() => {
        qr === "in" && e(91, Dn = !1);
      }).catch((un) => {
        throw qr === "in" && e(91, Dn = !1), un;
      });
    }
  }
  function Va() {
    if (ne && fr) {
      const tt = re.getExtensionContext(G);
      ne.forEach((qr) => {
        var Cn;
        (Cn = qr.unmountView) == null || Cn.call(qr, fr, tt);
      }), ne = null;
    }
  }
  function h_() {
    if (ne != null && ne.length) {
      const tt = re.getExtensionContext(G);
      ne.forEach((qr) => {
        var Cn;
        (Cn = qr.updateView) == null || Cn.call(qr, fr, tt);
      });
    }
    Ko && Ko.update(G);
  }
  let Co = null, Ro = null, ci = "desktop";
  function Ki() {
    Co != null && Co.matches ? e(105, ci = "mobile") : Ro != null && Ro.matches ? e(105, ci = "tablet") : e(105, ci = "desktop");
  }
  let lo = null, Xi = "";
  function Fa(tt) {
    var Zi, Qi, xi;
    mo == null || mo.destroy(), e(65, fr = tt), Zr && G.json.transition_in && (G.id ? bt.registerChildWithTransitionIn(G.json, G, G.json.transition_in, tt).then(() => {
      e(90, tn = !1);
    }).catch((Xo) => {
      throw e(90, tn = !1), Xo;
    }) : G.logError(K(new Error(Vl("transition_in")), { level: "warn" }))), Zr && G.json.transition_out && (G.id ? bt.registerChildWithTransitionOut(G.json, G, G.json.transition_out, tt) : G.logError(K(new Error(Vl("transition_out")), { level: "warn" }))), G.fakeElement || (G.json.transition_change && !G.id && G.logError(K(new Error(Vl("transition_change")), { level: "warn" })), bt.registerChildWithTransitionChange(G.json, G, G.json.transition_change, tt).then(() => {
      e(92, Jn = !1);
    }).catch((Xo) => {
      throw e(92, Jn = !1), Xo;
    }));
    const qr = !G.fakeElement || G.fakeElement === ni, Cn = qr ? G.json.visibility_actions || G.json.visibility_action && [G.json.visibility_action] : [], Ln = qr ? G.json.disappear_actions : [];
    let un;
    (Array.isArray(Cn) && Cn.length || Array.isArray(Ln) && Ln.length) && (un = b0(tt, {
      visibilityActions: Cn,
      disappearActions: Ln,
      rootCtx: re,
      componentContext: G
    }));
    const bo = G.id;
    return bo && (ln == null || ln(), ln = re.registerId(bo, {
      context: () => G,
      node: () => fr
    }), bt.registerChild(bo)), (Zi = G.json.tooltips) == null || Zi.forEach((Xo) => {
      re.registerTooltip(tt, Xo);
    }), Oo && (Oo.disconnect(), Oo = void 0), Oo = V0(fr, G, (Qi = G.json.layout_provider) == null ? void 0 : Qi.width_variable_name, (xi = G.json.layout_provider) == null ? void 0 : xi.height_variable_name), G.fakeElement || (Ko = Ud(tt, re, G, lt)), mo = {
      destroy() {
        ln && (ln(), ln = void 0), bo && bt.unregisterChild(bo), un && un.destroy(), Ko && Ko.destroy();
      }
    }, mo;
  }
  function m_() {
    G.json.focus && ((qt || !ql(re.isPointerFocus)) && e(17, Yo = !0), G.execAnyActions(F));
  }
  function b_() {
    G.json.focus && (e(17, Yo = !1), G.execAnyActions(Z));
  }
  dl(h_), an(() => {
    var tt;
    d.forEach((qr) => {
      re.unregisterParentOf(qr);
    }), e(66, d = []), Oo && (Oo.disconnect(), Oo = void 0), (tt = G.json.tooltips) == null || tt.forEach((qr) => {
      re.unregisterTooltip(qr);
    }), Mr == null || Mr(), Va(), lo && (lo.remove(), e(106, lo = null)), Co && (Co.removeEventListener("change", Ki), e(103, Co = null)), Ro && (Ro.removeEventListener("change", Ki), e(104, Ro = null));
  });
  function y_(tt) {
    On.call(this, t, tt);
  }
  function w_(tt) {
    On.call(this, t, tt);
  }
  return t.$$set = (tt) => {
    "componentContext" in tt && e(0, G = tt.componentContext), "cls" in tt && e(1, ft = tt.cls), "style" in tt && e(54, Wt = tt.style), "layoutParams" in tt && e(55, St = tt.layoutParams), "customDescription" in tt && e(56, br = tt.customDescription), "customPaddings" in tt && e(57, Er = tt.customPaddings), "customActions" in tt && e(58, wr = tt.customActions), "additionalPaddings" in tt && e(59, Ir = tt.additionalPaddings), "heightByAspect" in tt && e(60, zr = tt.heightByAspect), "parentOf" in tt && e(53, tr = tt.parentOf), "parentOfSimpleMode" in tt && e(61, ot = tt.parentOfSimpleMode), "replaceItems" in tt && e(62, jt = tt.replaceItems), "hasInnerFocusable" in tt && e(2, Kt = tt.hasInnerFocusable), "alwaysCustomFocus" in tt && e(63, qt = tt.alwaysCustomFocus), "containerElement" in tt && e(3, pr = tt.containerElement), "devapi" in tt && e(64, lt = tt.devapi), "$$scope" in tt && e(149, xt = tt.$$scope);
  }, t.$$.update = () => {
    var tt, qr, Cn, Ln, un, bo, Zi, Qi, xi, Xo, Ia;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(129, n = G.origJson), t.$$.dirty[4] & /*origJson*/
    32 && n && Yi(), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[3] & /*prevTriggersUnsubscribe*/
    512 | t.$$.dirty[4] & /*$isEnabled*/
    2097152 && (jr ? (Mr == null || Mr(), e(102, Mr = re.processVariableTriggers(G, G.json.variable_triggers))) : Mr == null || Mr()), t.$$.dirty[0] & /*componentContext*/
    1 && Ct(e(47, o = G.getDerivedFromVars(G.json.focus))), t.$$.dirty[0] & /*componentContext*/
    1 && mr(e(46, i = G.getDerivedFromVars(G.json.border))), t.$$.dirty[0] & /*componentContext*/
    1 && sr(e(45, s = G.getDerivedFromVars(G.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && ze(e(44, a = G.getDerivedFromVars(G.json.margins))), t.$$.dirty[0] & /*componentContext*/
    1 && hr(e(43, l = G.getDerivedFromVars(G.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && yt(e(42, u = G.getDerivedFromVars(G.json.alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(41, c = G.getDerivedFromVars(G.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && Jt(e(40, f = G.getDerivedFromVars(G.json.alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Mt(e(39, _ = G.getDerivedFromVars(G.json.alpha))), t.$$.dirty[0] & /*componentContext*/
    1 && Tt(e(38, h = G.getDerivedFromVars(G.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && pt(e(37, m = G.getDerivedFromVars(G.json.background))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(36, p = G.getDerivedFromVars(G.json.action_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(35, k = G.getDerivedFromVars(G.json.visibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Fe(e(34, w = G.getDerivedFromVars(G.json.transform))), t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(33, O = G.getDerivedFromVars(G.json.transformations))), t.$$.dirty[0] & /*componentContext*/
    1 && kt(e(32, U = G.getDerivedFromVars(G.json.capture_focus_on_action))), t.$$.dirty[1] & /*parentOf, parentOfSimpleMode*/
    1077936128 | t.$$.dirty[2] & /*prevChilds*/
    16 && (d.forEach(($e) => {
      re.unregisterParentOf($e);
    }), e(66, d = []), tr && tr.forEach(($e) => {
      $e != null && $e.id && (d.push($e.id), re.registerParentOf($e.id, {
        replaceWith: ui,
        isSingleMode: !!ot
      }));
    })), t.$$.dirty[0] & /*hasCustomFocus, borderElemStyle*/
    131088 | t.$$.dirty[2] & /*strokeWidth, strokeColor, cornersRadius, cornerRadius, borderStyle*/
    992 | t.$$.dirty[4] & /*$jsonFocus, $jsonBorder*/
    1052672) {
      const $e = Yo && (Ce != null && Ce.border) ? Ce.border : $t;
      let Qr = {}, kn = {}, Fn = !1, nn = "";
      if ($e) {
        if (_n($e.has_shadow, !1)) {
          const cn = $e.shadow;
          cn ? Qr["box-shadow"] = E0(cn) : Qr["box-shadow"] = "0 1px 2px 0 rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.07)";
        }
        if ($e.stroke) {
          Fn = !0, e(68, Pt = $r($e.stroke.width, Pt)), e(69, L = gr($e.stroke.color, 1, L));
          const cn = ((tt = $e.stroke.style) == null ? void 0 : tt.type) === "dashed" ? "dashed" : "solid";
          kn["--divkit-border"] = `${ae(Pt + 1)} ${cn} ${L}`;
        }
        if ($e.corners_radius && typeof $e.corners_radius == "object") {
          e(71, it = C0($e.corners_radius, it)), Qr["border-radius"] = Ls(it);
          const cn = {};
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((Kn) => {
            cn[Kn] = (it[Kn] || 0) + 1;
          }), kn["--divkit-border-radius"] = Ls(cn);
        } else $e.corner_radius && (e(70, Dt = $r($e.corner_radius, Dt)), e(71, it = {
          "top-left": Dt,
          "top-right": Dt,
          "bottom-right": Dt,
          "bottom-left": Dt
        }), Qr["border-radius"] = ae(Dt), kn["--divkit-border-radius"] = ae(Dt + 1));
        if (Fn && Pt && ($e.corners_radius || $e.corner_radius)) {
          let cn = { ...it };
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((Kn) => {
            cn[Kn] = (cn[Kn] || 0) + Pt / 2;
          }), nn = Ls(cn);
        }
      }
      e(67, j = xo(Qr, j)), e(4, Ie = xo(kn, Ie)), e(22, Re = Fn), e(5, Ge = nn);
    }
    if (t.$$.dirty[1] & /*customPaddings*/
    67108864 | t.$$.dirty[2] & /*selfPadding*/
    1024 | t.$$.dirty[4] & /*$jsonPaddings*/
    524288 && e(72, Je = yi(
      Me && !Er ? Me : void 0,
      Je
    )), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[1] & /*additionalPaddings*/
    268435456 | t.$$.dirty[2] & /*selfPadding*/
    1024 && e(119, R = po(j0(Je, Ir), te)), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[2] & /*margin*/
    2048 | t.$$.dirty[4] & /*$jsonMargins*/
    65536 && e(73, Ht = as(ye, te, Ht)), t.$$.dirty[0] & /*componentContext, $direction*/
    524289 | t.$$.dirty[1] & /*layoutParams*/
    16777216 | t.$$.dirty[2] & /*widthNum, widthMods*/
    20480 | t.$$.dirty[4] & /*$jsonWidth, $jsonMargins, $jsonAlignmentHorizontal*/
    458752) {
      let $e, Qr, kn, Fn, nn = {}, cn = 0, Kn = 0, Lo = !1, Bo = !1;
      const mn = (qr = G.json.width) == null ? void 0 : qr.type;
      if (mn === "fixed")
        e(76, ve = $r(Ft == null ? void 0 : Ft.value, ve)), Qr = ae(ve);
      else if (mn === "wrap_content" || (mn === "match_parent" || !mn) && St.parentHorizontalWrapContent)
        $e = "content", (mn === "wrap_content" && (Ft != null && Ft.constrained) || (mn === "match_parent" || !mn) && St.parentHorizontalWrapContent) && (nn["width-constrained"] = !0, St.parentContainerOrientation === "horizontal" && (Kn = 1)), (mn === "match_parent" || !mn) && G.logError(K(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      else if ($e = "parent", St.parentContainerOrientation === "vertical" && St.parentContainerWrap && (Bo = !0, G.logError(K(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), St.parentContainerOrientation === "vertical" && St.parentContainerKnownWidth || St.stretchWidth || St.parentContainerOrientation === "horizontal" && St.treatMatchParentAs100) {
        const Yr = (Ln = (Cn = te === "ltr" ? ye == null ? void 0 : ye.start : ye == null ? void 0 : ye.end) != null ? Cn : ye == null ? void 0 : ye.left) != null ? Ln : 0, In = (bo = (un = te === "ltr" ? ye == null ? void 0 : ye.end : ye == null ? void 0 : ye.start) != null ? un : ye == null ? void 0 : ye.right) != null ? bo : 0, jn = `calc(100% - ${fn(Yr + In)})`;
        St.stretchWidth ? (Qr = "0", kn = jn) : Qr = jn;
      } else St.parentContainerOrientation === "horizontal" && (cn = Ft && "weight" in Ft && Ft.weight || 1, St.parentContainerWrap && (Lo = !0));
      if (mn === "wrap_content" || mn === "match_parent") {
        const Yr = Ft;
        let In, jn;
        Yr.min_size && Tn(Yr.min_size.value) && (In = Yr.min_size.value), Yr.max_size && Tn(Yr.max_size.value) && (jn = Yr.max_size.value), In !== void 0 && jn !== void 0 && In > jn && (G.logError(K(new Error("Element has incorrect width constraints (min size is bigger than max size)."), {
          additional: {
            id: G.json.id,
            minSize: In + "dp",
            maxSize: jn + "dp"
          }
        })), In = jn = void 0), In !== void 0 && (kn = ae(In)), jn !== void 0 && (Fn = ae(jn));
      }
      if ($e === "parent")
        nn["halign-self"] = "stretch";
      else {
        const Yr = or;
        Yr === "left" || Yr === "center" || Yr === "right" || Yr === "start" || Yr === "end" ? nn["halign-self"] = (te === "ltr" ? q0 : Y0)[Yr] : nn["halign-self"] = St.parentHAlign || "start";
      }
      $e && (nn.width = $e), e(75, en = Qr), e(6, rn = kn), e(7, Jr = Fn), e(77, wn = cn), e(78, Xr = Kn), e(74, kr = xo(nn, kr)), e(79, hn = Lo), e(23, zn = Bo);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*heightByAspect, layoutParams*/
    553648128 | t.$$.dirty[2] & /*heightNum, heightMods*/
    1310720 | t.$$.dirty[4] & /*$jsonHeight, $jsonMargins, $jsonAlignmentVertical*/
    114688) {
      let $e, Qr, kn, Fn, nn = {}, cn = 0, Kn = 0, Lo = !1, Bo = !1;
      const mn = (Zi = G.json.height) == null ? void 0 : Zi.type;
      if (!zr) if (mn === "fixed")
        e(82, z = $r(me == null ? void 0 : me.value, z)), Qr = ae(z);
      else if (mn === "match_parent" && !St.parentVerticalWrapContent)
        if ($e = "parent", St.parentContainerOrientation === "horizontal" && St.parentContainerWrap && (Bo = !0, G.logError(K(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), St.parentContainerOrientation === "horizontal" && St.parentContainerKnownHeight || St.stretchHeight || St.parentContainerOrientation === "vertical" && St.treatMatchParentAs100) {
          const Yr = (Qi = ye == null ? void 0 : ye.top) != null ? Qi : 0, In = (xi = ye == null ? void 0 : ye.bottom) != null ? xi : 0, jn = `calc(100% - ${fn(Yr + In)})`;
          St.stretchHeight ? (Qr = "0", kn = jn) : Qr = jn;
        } else St.parentContainerOrientation === "vertical" && (cn = (me == null ? void 0 : me.weight) || 1, St.parentContainerWrap && (Lo = !0));
      else
        $e = "content", (mn === "wrap_content" && (me != null && me.constrained) || mn === "match_parent" && St.parentVerticalWrapContent) && (nn["height-constrained"] = !0, St.parentContainerOrientation === "vertical" && (Kn = 1)), mn === "match_parent" && G.logError(K(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      if (!zr && (mn === "match_parent" || mn === "wrap_content")) {
        const Yr = me;
        let In, jn;
        Yr.min_size && Tn(Yr.min_size.value) && (In = Yr.min_size.value), Yr.max_size && Tn(Yr.max_size.value) && (jn = Yr.max_size.value), In !== void 0 && jn !== void 0 && In > jn && (G.logError(K(new Error("Element has incorrect height constraints (min size is bigger than max size)."), {
          additional: {
            id: G.json.id,
            minSize: In + "dp",
            maxSize: jn + "dp"
          }
        })), In = jn = void 0), In !== void 0 && (kn = ae(In)), jn !== void 0 && (Fn = ae(jn));
      }
      if ($e === "parent")
        nn["valign-self"] = "stretch";
      else {
        const Yr = Vt;
        Yr === "top" || Yr === "center" || Yr === "bottom" || Yr === "baseline" && St.parentContainerOrientation === "horizontal" ? nn["valign-self"] = K0[Yr] : nn["valign-self"] = St.parentVAlign || "start";
      }
      $e && (nn.height = $e), e(81, A = Qr), e(8, S = kn), e(9, x = Fn), e(83, Ze = cn), e(84, Se = Kn), e(80, y = xo(nn, y)), e(85, Xt = Lo), e(24, wt = Bo);
    }
    if (t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(128, $ = St.overlapParent ? !0 : void 0), t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(121, ue = St.gridArea ? `${St.gridArea.y + 1}/${St.gridArea.x + 1}/span ${St.gridArea.rowSpan}/span ${St.gridArea.colSpan}` : void 0), t.$$.dirty[2] & /*alpha*/
    16777216 | t.$$.dirty[4] & /*$jsonAlpha*/
    8192 && (e(86, qe = w0(nt, qe)), e(87, rr = qe === 1 ? void 0 : qe)), t.$$.dirty[0] & /*$jsonAccessibility*/
    1048576 | t.$$.dirty[1] & /*customDescription*/
    33554432 && (e(21, v = void 0), dt && !br)) {
      const $e = ri(dt);
      $e && (e(21, v = {}), e(21, v["aria-label"] = $e, v));
    }
    if (t.$$.dirty[0] & /*hasCustomFocus, background, backgroundRadius, hasSeparateBg, $direction*/
    658464 | t.$$.dirty[4] & /*$jsonFocus, $jsonBackground*/
    6144 && (e(10, Et = Yo && (Ce != null && Ce.background) ? Ce.background : ge), e(88, lr = {}), e(11, Vr = !1), Array.isArray(Et) && (e(11, Vr = Et.some(($e) => $e.type === "image" || $e.type === "nine_patch_image") || !!Ge), !Vr))) {
      const $e = gl(Et, te);
      e(88, lr["background-color"] = $e.color, lr), e(88, lr["background-image"] = $e.image, lr), e(88, lr["background-size"] = $e.size, lr), e(88, lr["background-position"] = $e.position, lr), e(88, lr["background-repeat"] = "no-repeat", lr);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(90, tn = void 0), Zr && G.id && G.json.transition_in && re.isRunning("stateChange") && e(90, tn = !0)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(92, Jn = void 0), Zr && G.id && re.isRunning("stateChange") && bt.hasTransitionChange(G.id) && e(92, Jn = !0)), t.$$.dirty[0] & /*componentContext, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions*/
    61441 | t.$$.dirty[1] & /*customActions*/
    134217728) {
      const $e = G.json;
      let Qr = $e.actions || $e.action && [$e.action] || [], kn = $e.doubletap_actions || [], Fn = $e.longtap_actions || [], nn = ((Xo = $e.focus) == null ? void 0 : Xo.on_focus) || [], cn = ((Ia = $e.focus) == null ? void 0 : Ia.on_blur) || [], Kn = $e.press_start_actions || [], Lo = $e.press_end_actions || [], Bo = $e.hover_start_actions || [], mn = $e.hover_end_actions || [];
      G.fakeElement && G.fakeElement !== ni ? (Qr = [], kn = [], Fn = [], nn = [], cn = []) : (Array.isArray(Qr) || (Qr = [], G.logError(K(new Error("Actions should be array")))), Array.isArray(kn) || (kn = [], G.logError(K(new Error("DoubleTapActions should be array")))), Array.isArray(Fn) || (Fn = [], G.logError(K(new Error("LongTapActions should be array")))), Array.isArray(nn) || (nn = [], G.logError(K(new Error("FocusActions should be array")))), Array.isArray(cn) || (cn = [], G.logError(K(new Error("BlurActions should be array")))), Array.isArray(Kn) || (Kn = [], G.logError(K(new Error("PressStartActions should be array")))), Array.isArray(Lo) || (Lo = [], G.logError(K(new Error("PressEndActions should be array")))), Array.isArray(Bo) || (Bo = [], G.logError(K(new Error("HoverStartActions should be array")))), Array.isArray(mn) || (mn = [], G.logError(K(new Error("HoverEndActions should be array"))))), (Qr.length || kn.length || Fn.length || N.length || we.length || be.length || zt.length) && wr && (Qr = [], kn = [], Fn = [], e(12, N = []), e(13, we = []), e(14, be = []), e(15, zt = []), G.logError(K(new Error(`Cannot use action on component "${wr}"`)))), e(25, qn = Qr), e(26, Ut = kn), e(27, b = Fn), F = nn, Z = cn, e(12, N = Kn), e(13, we = Lo), e(14, be = Bo), e(15, zt = mn);
    }
    if (t.$$.dirty[0] & /*actionAnimationList*/
    65536 | t.$$.dirty[4] & /*$jsonActionAnimation*/
    1024 && rt && (e(16, Ot = us(rt)), e(93, Ur = Ot.map(Si).filter(Boolean).join(", "))), t.$$.dirty[4] & /*$jsonCaptureFocusOnAction*/
    512 && typeof at == "boolean" && e(28, He = at), t.$$.dirty[3] & /*visibility, isVisibilityInited*/
    96 | t.$$.dirty[4] & /*$jsonVisibility*/
    256) {
      const $e = Vn, Qr = v0(Ye, Vn);
      $e !== Qr && (so && (Vn === "visible" || Qr === "visible") ? g_(Qr) : e(99, Vn = Qr)), so || e(98, so = !0);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*currentNode*/
    8 | t.$$.dirty[3] & /*prevExtensionsVal*/
    256 && G.json && fr && !qi(G.json.extensions, vr)) {
      let $e = e(101, vr = G.json.extensions);
      An().then(() => {
        if (!($e !== vr || !fr) && (Va(), Array.isArray(G.json.extensions))) {
          const Qr = re.getExtensionContext(G);
          ne = G.json.extensions.map((kn) => {
            var cn;
            const Fn = kn.id;
            if (!Fn)
              return;
            const nn = re.getExtension(Fn, kn.params);
            return nn && ((cn = nn.mountView) == null || cn.call(nn, fr, Qr)), nn;
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
      ...kr,
      ...y,
      "parent-overlap": $,
      "scroll-snap": St.scrollSnap,
      "hide-on-transition-in": tn || Dn || Jn,
      visibility: Vn,
      "has-action-animation": !!Ur,
      "parent-flex": St.parentContainerOrientation || void 0,
      "parent-grid": !!St.gridArea || void 0,
      "has-custom-focus": !!(Yo && G.json.focus)
    }), t.$$.dirty[4] & /*$jsonTransformations, $jsonTransform*/
    192) {
      let $e;
      Array.isArray(xe) ? $e = xe : _e && _e.rotation !== void 0 && ($e = [
        {
          type: "rotation",
          angle: _e.rotation,
          pivot_x: _e.pivot_x,
          pivot_y: _e.pivot_y
        }
      ]), $e ? e(100, qo = F0($e)) : e(100, qo = void 0);
    }
    if (t.$$.dirty[2] & /*widthFill, heightFill, widthFlexGrow, heightFlexGrow*/
    10649600 && e(115, X = hn || Xt ? "100%" : wn || Ze ? 0 : void 0), t.$$.dirty[0] & /*componentContext*/
    1 && e(30, le = G.json["custom-class"] || ""), t.$$.dirty[0] & /*componentContext*/
    1 && e(113, C = G.json.position), t.$$.dirty[0] & /*componentContext*/
    1 && e(114, M = G.json.sticky_top), t.$$.dirty[0] & /*componentContext*/
    1 && e(112, P = G.json.sticky_bottom), t.$$.dirty[0] & /*componentContext*/
    1 && e(111, H = G.json.z_index), t.$$.dirty[0] & /*componentContext*/
    1 && e(110, se = G.json.cursor), t.$$.dirty[0] & /*componentContext*/
    1 && e(109, de = G.json.backdrop_filter), t.$$.dirty[0] & /*componentContext*/
    1 && e(108, Ee = G.json.overflow), t.$$.dirty[0] & /*componentContext*/
    1 && e(107, Ae = G.json["box-shadow"]), t.$$.dirty[0] & /*componentContext*/
    1 && e(116, pe = G.json.custom_transition), t.$$.dirty[0] & /*componentContext*/
    1 && e(127, De = G.json.responsive), t.$$.dirty[3] & /*responsiveMobileQuery, responsiveTabletQuery*/
    3072 | t.$$.dirty[4] & /*responsiveConfig*/
    8 && (De && typeof De == "object" && typeof window < "u" ? (Co || (e(103, Co = window.matchMedia("(max-width: 767px)")), e(104, Ro = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), Co.addEventListener("change", Ki), Ro.addEventListener("change", Ki)), Ki()) : e(105, ci = "desktop")), t.$$.dirty[3] & /*responsiveBreakpoint*/
    4096 | t.$$.dirty[4] & /*responsiveConfig*/
    8 && e(126, ee = ci !== "desktop" && (De == null ? void 0 : De[ci]) || null), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(120, Te = (() => {
      if (!(ee != null && ee.paddings)) return;
      const $e = ee.paddings;
      return po(yi($e, null), te);
    })()), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(118, We = (() => {
      if (!(ee != null && ee.margins)) return;
      const $e = ee.margins;
      return as($e, te, "");
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(123, Ke = (() => {
      if (ee != null && ee["max-width"] && typeof ee["max-width"] == "string")
        return ee["max-width"];
      if (!(ee != null && ee.max_width)) return;
      const $e = ee.max_width;
      if ($e.type === "fixed" && $e.value) return $e.value + "px";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(124, ke = (() => {
      if (!(ee != null && ee.width)) return;
      const $e = ee.width;
      if ($e.type === "fixed" && $e.value) return ae($e.value);
      if ($e.type === "match_parent") return "100%";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(122, et = (() => {
      if (!(ee != null && ee.height)) return;
      const $e = ee.height;
      if ($e.type === "fixed" && $e.value) return ae($e.value);
      if ($e.type === "match_parent") return "100%";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(117, fe = (ee == null ? void 0 : ee.opacity) !== void 0 ? ee.opacity : void 0), t.$$.dirty[4] & /*activeResponsive*/
    4 && (ee == null || ee.visibility), t.$$.dirty[0] & /*componentContext*/
    1 && e(125, je = G.json.hover), t.$$.dirty[0] & /*hoverClassName*/
    262144 | t.$$.dirty[3] & /*hoverStyleEl*/
    8192 | t.$$.dirty[4] & /*hoverConfig*/
    2)
      if (je && typeof je == "object" && typeof document < "u") {
        Xi || e(18, Xi = "divkit-hover-" + Math.random().toString(36).slice(2, 9));
        let $e = "";
        je.background_color && ($e += `background-color: ${je.background_color} !important;`), je.opacity !== void 0 && ($e += `opacity: ${je.opacity} !important;`), je.scale !== void 0 && ($e += `scale: ${je.scale} !important;`), je.color && ($e += `color: ${je.color} !important;`), je.border_color && ($e += `border-color: ${je.border_color} !important;`), (je["box-shadow"] || je.box_shadow) && ($e += `box-shadow: ${je["box-shadow"] || je.box_shadow} !important;`), $e && (lo || (e(106, lo = document.createElement("style")), document.head.appendChild(lo)), e(106, lo.textContent = `.${Xi}:hover { ${$e} }`, lo));
      } else lo && (lo.remove(), e(106, lo = null), e(18, Xi = ""));
    t.$$.dirty[0] & /*widthMin, widthMax, componentContext, heightMin, heightMax*/
    961 | t.$$.dirty[1] & /*style*/
    8388608 | t.$$.dirty[2] & /*backgroundStyle, borderStyle, width, height, margin, opacity, widthFlexGrow, heightFlexGrow, widthFlexShrink, heightFlexShrink*/
    107587616 | t.$$.dirty[3] & /*responsiveMaxWidth, responsiveHeight, gridArea, responsivePadding, padding, responsiveMargin, responsiveOpacity, customTransition, actionAnimationTransition, transform, flexBasis, customPosition, customStickyTop, customStickyBottom, customZIndex, customCursor, customBackdropFilter, customOverflow, customBoxShadow, animationOpacityStart, animationOpacityEnd, animationScaleStart, animationScaleEnd*/
    2147467423 | t.$$.dirty[4] & /*responsiveWidth*/
    1 && e(29, ce = {
      ...Wt,
      ...lr,
      ...j,
      width: ke || en,
      "min-width": rn,
      "max-width": Ke || Jr || (() => {
        const $e = G.json.max_width;
        if (($e == null ? void 0 : $e.type) === "fixed" && ($e != null && $e.value)) return ae($e.value);
      })(),
      height: et || A,
      "min-height": S,
      // input max-height
      "max-height": x || (Wt == null ? void 0 : Wt["max-height"]) || (() => {
        const $e = G.json.max_height;
        if (($e == null ? void 0 : $e.type) === "fixed" && ($e != null && $e.value)) return ae($e.value);
      })(),
      "grid-area": ue,
      padding: Te || R,
      margin: We || Ht,
      opacity: fe !== void 0 ? fe : rr,
      transition: pe || Ur,
      "transform-origin": qo ? "0 0" : void 0,
      transform: qo,
      "flex-grow": wn || Ze || void 0,
      "flex-shrink": Xr || Se ? 1 : void 0,
      "flex-basis": X,
      position: C,
      top: C === "sticky" && M !== void 0 ? ae(M) : void 0,
      bottom: C === "sticky" && P !== void 0 ? ae(P) : void 0,
      "z-index": H,
      cursor: se,
      "backdrop-filter": de,
      "-webkit-backdrop-filter": de,
      overflow: Ee,
      "box-shadow": Ae,
      "--divkit-animation-opacity-start": Dr,
      "--divkit-animation-opacity-end": Gr,
      "--divkit-animation-scale-start": ho,
      "--divkit-animation-scale-end": Yn
    });
  }, [
    G,
    ft,
    Kt,
    pr,
    Ie,
    Ge,
    rn,
    Jr,
    S,
    x,
    Et,
    Vr,
    N,
    we,
    be,
    zt,
    Ot,
    Yo,
    Xi,
    te,
    dt,
    v,
    Re,
    zn,
    wt,
    qn,
    Ut,
    b,
    He,
    ce,
    le,
    T,
    U,
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
    ir,
    yr,
    Fa,
    m_,
    b_,
    tr,
    Wt,
    St,
    br,
    Er,
    wr,
    Ir,
    zr,
    ot,
    jt,
    qt,
    lt,
    fr,
    d,
    j,
    Pt,
    L,
    Dt,
    it,
    Je,
    Ht,
    kr,
    en,
    ve,
    wn,
    Xr,
    hn,
    y,
    A,
    z,
    Ze,
    Se,
    Xt,
    qe,
    rr,
    lr,
    Zr,
    tn,
    Dn,
    Jn,
    Ur,
    Dr,
    Gr,
    ho,
    Yn,
    so,
    Vn,
    qo,
    vr,
    Mr,
    Co,
    Ro,
    ci,
    lo,
    Ae,
    Ee,
    de,
    se,
    H,
    P,
    C,
    M,
    X,
    pe,
    fe,
    We,
    R,
    Te,
    ue,
    et,
    Ke,
    ke,
    je,
    ee,
    De,
    $,
    n,
    _e,
    xe,
    Ye,
    at,
    rt,
    ge,
    Ce,
    nt,
    Vt,
    me,
    ye,
    or,
    Ft,
    Me,
    $t,
    jr,
    Qt,
    y_,
    w_,
    xt
  ];
}
class yn extends Rr {
  constructor(r) {
    super(), Or(
      this,
      r,
      X0,
      J0,
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
const Z0 = "appkit-text", Q0 = "appkit-text_halign_start", x0 = "appkit-text_halign_center", $0 = "appkit-text_halign_end", em = "appkit-text_valign_start", tm = "appkit-text_valign_center", rm = "appkit-text_valign_end", nm = "appkit-text_valign_baseline", om = "appkit-text__inner", im = "appkit-text_singleline", sm = "appkit-text_multiline", lm = "appkit-text_truncate_none", am = "appkit-text__inner_gradient", um = "appkit-text__image", cm = "appkit-text__image_hidden", uo = {
  "text-range": "appkit-text-range",
  text: Z0,
  text_halign_start: Q0,
  text_halign_center: x0,
  text_halign_end: $0,
  text_valign_start: em,
  text_valign_center: tm,
  text_valign_end: rm,
  text_valign_baseline: nm,
  text__inner: om,
  text_singleline: im,
  text_multiline: sm,
  text_truncate_none: lm,
  "text__inner_has-cloud-bg": "appkit-text__inner_has-cloud-bg",
  "text__inner_cloud-bg": "appkit-text__inner_cloud-bg",
  text__inner_gradient: am,
  "text__image-wrapper": "appkit-text__image-wrapper",
  "text__image-wrapper_crop": "appkit-text__image-wrapper_crop",
  "text__image-wrapper_align_top": "appkit-text__image-wrapper_align_top",
  "text__image-wrapper_align_center": "appkit-text__image-wrapper_align_center",
  "text__image-wrapper_align_bottom": "appkit-text__image-wrapper_align_bottom",
  "text__image-wrapper_align_baseline": "appkit-text__image-wrapper_align_baseline",
  text__image: um,
  text__image_hidden: cm,
  "text_has-focus-color": "appkit-text_has-focus-color"
}, Ao = {
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
function Wn(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e <= 0 ? r : e;
}
function fm(t) {
  if (t === "light" || t === "medium" || t === "bold" || t === "regular" || t === "semi_bold")
    return t === "medium" ? 500 : t === "bold" ? 700 : t === "light" ? 300 : t === "semi_bold" ? 600 : 400;
}
function wi(t, r, e) {
  return typeof r == "number" && r > 0 ? r : fm(t) || e;
}
function xl(t, r) {
  if (!t)
    return {};
  const e = {};
  for (const n of ["left", "top", "right", "bottom", "start", "end"]) {
    const o = t[n];
    o && (e[n] = o * r);
  }
  return e;
}
function Bi(t) {
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
function Nu(t) {
  let r, e, n, o, i, s, a;
  return {
    c() {
      r = xr("svg"), e = xr("defs"), n = xr("filter"), o = xr("feGaussianBlur"), i = xr("feColorMatrix"), a = xr("feBlend"), g(o, "in", "SourceGraphic"), g(o, "result", "blurred"), g(o, "stdDeviation", "3"), g(i, "in", "blurred"), g(i, "result", "withMatrix"), g(i, "type", "matrix"), g(i, "values", s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      t[5] + " -" + /*borderRadius*/
      t[5]), g(a, "in", "SourceGraphic"), g(a, "in2", "withMatrix"), g(
        n,
        "id",
        /*cloudFilterId*/
        t[11]
      ), g(r, "class", Ao["text-range__cloud-svg"]);
    },
    m(l, u) {
      q(l, r, u), ht(r, e), ht(e, n), ht(n, o), ht(n, i), ht(n, a);
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
function zu(t) {
  let r;
  return {
    c() {
      r = Ve("span"), g(r, "class", Ao["text-range__top-offset"]), D(
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
      512 && D(
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
function Ou(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Ve("div"), e = Ve("div"), n = Ve("div"), o = Ve("div"), i = Ve("div"), s = Ve("div"), g(r, "class", Ao["text-range__mask-animation"]), g(e, "class", Ao["text-range__mask-animation"]), g(n, "class", Ao["text-range__mask-animation"]), g(o, "class", Ao["text-range__mask-animation"]), g(i, "class", Ao["text-range__mask-animation"]), g(s, "class", Ao["text-range__mask-animation"]);
    },
    m(a, l) {
      q(a, r, l), q(a, e, l), q(a, n, l), q(a, o, l), q(a, i, l), q(a, s, l);
    },
    d(a) {
      a && (J(r), J(e), J(n), J(o), J(i), J(s));
    }
  };
}
function dm(t) {
  let r = (
    /*text*/
    (t[1] || "​") + ""
  ), e, n = (
    /*maskColor*/
    t[4] && Ou()
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
      o[4] ? n || (n = Ou(), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null), i[0] & /*text*/
      2 && r !== (r = /*text*/
      (o[1] || "​") + "") && xn(e, r);
    },
    d(o) {
      o && J(e), n && n.d(o);
    }
  };
}
function _m(t) {
  let r, e, n, o, i = (
    /*cloudBg*/
    t[3] && /*hasCloudBg*/
    t[6] && Nu(t)
  ), s = (
    /*topOffset*/
    t[9] && zu(t)
  );
  return n = new ml({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      cls: mt(
        "text-range",
        Ao,
        /*mods*/
        t[8]
      ),
      actions: (
        /*actions*/
        t[2]
      ),
      style: er(
        /*style*/
        t[7]
      ),
      $$slots: { default: [dm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      i && i.c(), r = Zt(), s && s.c(), e = Zt(), Bt(n.$$.fragment);
    },
    m(a, l) {
      i && i.m(a, l), q(a, r, l), s && s.m(a, l), q(a, e, l), Rt(n, a, l), o = !0;
    },
    p(a, l) {
      /*cloudBg*/
      a[3] && /*hasCloudBg*/
      a[6] ? i ? i.p(a, l) : (i = Nu(a), i.c(), i.m(r.parentNode, r)) : i && (i.d(1), i = null), /*topOffset*/
      a[9] ? s ? s.p(a, l) : (s = zu(a), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null);
      const u = {};
      l[0] & /*componentContext*/
      1 && (u.componentContext = /*componentContext*/
      a[0]), l[0] & /*mods*/
      256 && (u.cls = mt(
        "text-range",
        Ao,
        /*mods*/
        a[8]
      )), l[0] & /*actions*/
      4 && (u.actions = /*actions*/
      a[2]), l[0] & /*style*/
      128 && (u.style = er(
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
      a && (J(r), J(e)), i && i.d(a), s && s.d(a), Lt(n, a);
    }
  };
}
function pm(t, r, e) {
  let n, o, i, s, a, l, u, c, f, { componentContext: _ } = r, { text: h } = r, { rootFontSize: m } = r, { textStyles: p = {} } = r, { singleline: k = !1 } = r, { actions: w = void 0 } = r, { cloudBg: O = !1 } = r, { cloudBgId: U = "" } = r, { customLineHeight: R = null } = r;
  const $ = Tr(Kr), ue = $.direction;
  bn(t, ue, (ke) => e(35, f = ke));
  const T = O && U || $.genId("text-range") || "";
  let X = "none", le = 12, C = 1.25, M = "", P, H = "", se = "", de = "", Ee, Ae = null, pe, De, ee = !1, Te, We, Ke;
  return t.$$set = (ke) => {
    "componentContext" in ke && e(0, _ = ke.componentContext), "text" in ke && e(1, h = ke.text), "rootFontSize" in ke && e(12, m = ke.rootFontSize), "textStyles" in ke && e(13, p = ke.textStyles), "singleline" in ke && e(14, k = ke.singleline), "actions" in ke && e(2, w = ke.actions), "cloudBg" in ke && e(3, O = ke.cloudBg), "cloudBgId" in ke && e(15, U = ke.cloudBgId), "customLineHeight" in ke && e(16, R = ke.customLineHeight);
  }, t.$$.update = () => {
    var ke, et, fe, je, ce, te, _e, ie;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && _.json && (e(17, X = "none"), e(18, le = 12), e(19, C = 1.25), e(20, M = ""), e(21, P = void 0), e(22, H = ""), e(23, se = ""), e(24, de = ""), e(25, Ee = void 0), e(26, Ae = null), e(27, pe = void 0), e(28, De = void 0), e(29, ee = !1), e(4, Te = void 0), e(30, We = void 0), e(31, Ke = void 0)), t.$$.dirty[0] & /*textStyles*/
    8192) {
      let Fe = "none";
      (p.underline || p.strike) && (p.underline === "single" && p.strike === "single" ? Fe = "both" : p.underline === "single" ? Fe = "underline" : p.strike === "single" && (Fe = "strike")), e(17, X = Fe);
    }
    if (t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(18, le = Wn(p.font_size, le)), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && Un(p.line_height) && e(19, C = Number(p.line_height) / le), t.$$.dirty[0] & /*textStyles*/
    8192 && Tn(p.letter_spacing) && e(20, M = ae(p.letter_spacing)), t.$$.dirty[0] & /*textStyles, fontWeight*/
    2105344 && (e(21, P = wi(p.font_weight, p.font_weight_value, P)), typeof p.font_family == "string" && p.font_family ? e(22, H = $.typefaceProvider(p.font_family, { fontWeight: P || 400 })) : e(22, H = "")), t.$$.dirty[0] & /*textStyles, fontVariationSettings*/
    8396800) {
      const Fe = Bi(p.font_variation_settings);
      Fe !== se && e(23, se = Fe);
    }
    if (t.$$.dirty[0] & /*textStyles, color*/
    16785408 && e(24, de = gr(p.text_color, 1, de)), t.$$.dirty[0] & /*textStyles*/
    8192 && e(9, n = p.top_offset ? ae(p.top_offset) : ""), t.$$.dirty[0] & /*textStyles*/
    8192 && e(6, o = ((ke = p.background) == null ? void 0 : ke.type) === "cloud"), t.$$.dirty[0] & /*textStyles*/
    8192 && e(33, i = ((et = p.background) == null ? void 0 : et.type) === "cloud" ? p.background.paddings : void 0), t.$$.dirty[0] & /*textStyles, cloudBg, hasCloudBg, fontSize*/
    270408 | t.$$.dirty[1] & /*$direction*/
    16) {
      const Fe = p.mask, xe = !!(Fe && (Fe.type === "solid" || Fe.type === "particles") && Fe.is_enabled !== !1 && Fe.color);
      if (O || xe ? e(25, Ee = "transparent") : e(25, Ee = void 0), e(29, ee = !1), e(4, Te = void 0), e(30, We = void 0), e(31, Ke = void 0), O)
        o ? e(28, De = P_(p.background.color, 255, "transparent")) : e(28, De = void 0);
      else if (Fe && xe) {
        if (Fe.type === "solid")
          e(28, De = gr(Fe.color));
        else if (Fe.type === "particles") {
          const Xe = Wn((fe = Fe.particle_size) == null ? void 0 : fe.value, 1), oe = ae(Xe * 10 / le), Ye = Wn(Fe.density, 0.8), Oe = gr(Fe.color);
          e(28, De = void 0), e(4, Te = Oe), e(30, We = oe), e(31, Ke = String(Ye)), e(29, ee = Fe.is_animated === !0);
        }
      } else ((je = p.background) == null ? void 0 : je.type) === "solid" ? e(28, De = gl([p.background], f).color) : e(28, De = void 0);
    }
    t.$$.dirty[0] & /*textStyles*/
    8192 && ((ce = p.border) != null && ce.stroke && p.border.stroke.color && gr(p.border.stroke.color) !== "transparent" && Un(p.border.stroke.width) && ((te = p.background) == null ? void 0 : te.type) !== "cloud" ? e(26, Ae = {
      color: p.border.stroke.color,
      width: p.border.stroke.width,
      corner_radius: p.border.corner_radius
    }) : e(26, Ae = null)), t.$$.dirty[0] & /*cloudBg, hasCloudBg, textStyles, border*/
    67117128 && e(5, s = O ? o && p.background.corner_radius || 0 : Ae ? Wn(Ae.corner_radius, 0) : 0), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(32, a = p.text_shadow ? A0(p.text_shadow, le) : void 0), t.$$.dirty[0] & /*textStyles*/
    8192 && typeof p.baseline_offset == "number" && e(27, pe = p.baseline_offset), t.$$.dirty[0] & /*textStyles*/
    8192 && e(34, l = typeof p.baseline_offset == "number" ? void 0 : p.alignment_vertical), t.$$.dirty[0] & /*singleline, decoration, hasCloudBg, customLineHeight, verticalAlign, maskColor, maskAnimated*/
    671301712 | t.$$.dirty[1] & /*customVerticalAlign*/
    8 && e(8, u = {
      singleline: k,
      decoration: X,
      align: l,
      cloud: o,
      "relative-vertical-align": !!(R && pe),
      "has-particles-mask": !!Te,
      "mask-animated": ee
    }), t.$$.dirty[0] & /*fontSize, rootFontSize, lineHeight, letterSpacing, fontWeight, fontFamily, customLineHeight, verticalAlign, cloudBg, hasCloudBg, cloudBgId, colorOverride, color, background, textStyles, border, borderRadius, fontVariationSettings, maskColor, maskSize*/
    1610461304 | t.$$.dirty[1] & /*customVerticalAlign, cloudPadding, $direction, shadow, maskDensity*/
    31 && e(7, c = {
      "font-size": ae(le * 10 / m),
      "line-height": l ? "normal" : C,
      "letter-spacing": M,
      "font-weight": P,
      "font-family": H,
      "vertical-align": R || pe === void 0 ? void 0 : ae(pe * 10 / le),
      top: R && pe !== void 0 ? ae(-pe * 10 / le) : void 0,
      margin: i ? po(xl(i, -10 / le), f) : void 0,
      padding: i ? po(xl(i, 10 / le), f) : void 0,
      filter: O && o && !U ? `url(#${T})` : a,
      color: Ee || de,
      background: De,
      opacity: O && o && !U ? ((ie = (_e = fo(p.background.color)) == null ? void 0 : _e.a) != null ? ie : 255) / 255 : void 0,
      /**
      * box-shadow instead of border because:
      * 1) Doesn't take space as border does
      * 2) There should not be a border-radius on line breaks, but there should be a border
      */
      "box-shadow": Ae ? `inset 0 0 0 ${ae(Ae.width * 10 / le)} ${Ae.color}` : void 0,
      "border-radius": s ? ae(s * 10 / le) : void 0,
      "font-feature-settings": p.font_feature_settings || void 0,
      "font-variation-settings": se || void 0,
      "--divkit-text-mask-color": Te,
      "--divkit-text-mask-size": We,
      "--divkit-text-mask-density": Ke
    });
  }, [
    _,
    h,
    w,
    O,
    Te,
    s,
    o,
    c,
    u,
    n,
    ue,
    T,
    m,
    p,
    k,
    U,
    R,
    X,
    le,
    C,
    M,
    P,
    H,
    se,
    de,
    Ee,
    Ae,
    pe,
    De,
    ee,
    We,
    Ke,
    a,
    i,
    l,
    f
  ];
}
class ka extends Rr {
  constructor(r) {
    super(), Or(
      this,
      r,
      pm,
      _m,
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
function bl(t, r, e) {
  return t === "left" || t === "center" || t === "right" || t === "start" || t === "end" ? t === "left" ? r === "ltr" ? "start" : "end" : t === "right" ? r === "ltr" ? "end" : "start" : t : e;
}
function yl(t, r) {
  return t === "top" || t === "center" || t === "bottom" || t === "baseline" ? t === "top" ? "start" : t === "bottom" ? "end" : t : r;
}
function gm(t) {
  return String(t != null ? t : "");
}
function qd(t, r) {
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
function hm(t, r) {
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
const { Boolean: Yd } = Po;
function Ru(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function Lu(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function Bu(t) {
  let r = (
    /*htmlTag*/
    t[9]
  ), e, n = (
    /*htmlTag*/
    t[9] && Fl(t)
  );
  return {
    c() {
      n && n.c(), e = Zt();
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
      ) ? (n.d(1), n = Fl(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = Fl(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : r && (n.d(1), n = null, r = /*htmlTag*/
      o[9]);
    },
    i: E,
    o(o) {
      Q(n, o);
    },
    d(o) {
      o && J(e), n && n.d(o);
    }
  };
}
function mm(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Ve("span"), e = Ve("span"), g(e, "class", n = mt("text__image-wrapper", uo, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), g(e, "style", o = er({
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
      })), g(r, "style", i = er(
        /*item*/
        t[71].image.wrapperStyle
      ));
    },
    m(s, a) {
      q(s, r, a), ht(r, e);
    },
    p(s, a) {
      a[0] & /*renderList, customLineHeight*/
      10240 && n !== (n = mt("text__image-wrapper", uo, {
        align: (
          /*item*/
          s[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          s[11] !== null
        )
      })) && g(e, "class", n), a[0] & /*renderList, customLineHeight*/
      10240 && o !== (o = er({
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
      8192 && i !== (i = er(
        /*item*/
        s[71].image.wrapperStyle
      )) && g(r, "style", i);
    },
    i: E,
    o: E,
    d(s) {
      s && J(r);
    }
  };
}
function bm(t) {
  let r, e, n = (
    /*item*/
    t[71].text && Hu(t)
  );
  return {
    c() {
      n && n.c(), r = Zt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && B(n, 1)) : (n = Hu(o), n.c(), B(n, 1), n.m(r.parentNode, r)) : n && (ar(), Q(n, 1, 1, () => {
        n = null;
      }), ur());
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
function Hu(t) {
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
      Bt(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function Wu(t) {
  let r, e, n, o;
  const i = [bm, mm], s = [];
  function a(l, u) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Zt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (ar(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ur()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
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
function Fl(t) {
  let r, e, n, o, i = nr(
    /*renderList*/
    t[13]
  ), s = [];
  for (let c = 0; c < i.length; c += 1)
    s[c] = Wu(Lu(t, i, c));
  const a = (c) => Q(s[c], 1, 1, () => {
    s[c] = null;
  });
  let l = [
    {
      class: e = mt("text__inner", uo, {
        .../*innerMods*/
        t[19],
        "cloud-bg": !0
      })
    },
    {
      style: n = er({
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
      r = Ve(
        /*htmlTag*/
        t[9]
      );
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      ti(
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
          const h = Lu(c, i, _);
          s[_] ? (s[_].p(h, f), B(s[_], 1)) : (s[_] = Wu(h), s[_].c(), B(s[_], 1), s[_].m(r, null));
        }
        for (ar(), _ = i.length; _ < s.length; _ += 1)
          a(_);
        ur();
      }
      ti(
        /*htmlTag*/
        c[9]
      )(r, u = No(l, [
        (!o || f[0] & /*innerMods*/
        524288 && e !== (e = mt("text__inner", uo, {
          .../*innerMods*/
          c[19],
          "cloud-bg": !0
        }))) && { class: e },
        (!o || f[0] & /*style, cloudPadding, wholeTextCloudBgId, wholeTextCloudBgOpacity*/
        442368 && n !== (n = er({
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
      s = s.filter(Yd);
      for (let f = 0; f < s.length; f += 1)
        Q(s[f]);
      o = !1;
    },
    d(c) {
      c && J(r), on(s, c);
    }
  };
}
function ym(t) {
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
      Bt(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function wm(t) {
  let r, e, n = nr(
    /*renderList*/
    t[13]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Gu(Ru(t, n, s));
  const i = (s) => Q(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = Zt();
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
          const u = Ru(s, n, l);
          o[l] ? (o[l].p(u, a), B(o[l], 1)) : (o[l] = Gu(u), o[l].c(), B(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (ar(), l = n.length; l < o.length; l += 1)
          i(l);
        ur();
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
      o = o.filter(Yd);
      for (let a = 0; a < o.length; a += 1)
        Q(o[a]);
      e = !1;
    },
    d(s) {
      s && J(r), on(o, s);
    }
  };
}
function km(t) {
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
      style: l = er({
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
    p = jo(p, m[k]);
  return {
    c() {
      r = Ve("span"), e = Ve("span"), n = Ve("img"), Go(n, p), g(e, "class", u = mt("text__image-wrapper", uo, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), g(e, "style", c = er({
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
      })), g(r, "style", f = er(
        /*item*/
        t[71].image.wrapperStyle
      ));
    },
    m(k, w) {
      q(k, r, w), ht(r, e), ht(e, n), _ || (h = Be(
        n,
        "error",
        /*onImgError*/
        t[39]
      ), _ = !0);
    },
    p(k, w) {
      Go(n, p = No(m, [
        { class: o },
        w[0] & /*renderList*/
        8192 && !Qn(n.src, i = /*item*/
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
        8192 && l !== (l = er({
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
      10240 && u !== (u = mt("text__image-wrapper", uo, {
        align: (
          /*item*/
          k[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          k[11] !== null
        )
      })) && g(e, "class", u), w[0] & /*renderList, customLineHeight*/
      10240 && c !== (c = er({
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
      8192 && f !== (f = er(
        /*item*/
        k[71].image.wrapperStyle
      )) && g(r, "style", f);
    },
    i: E,
    o: E,
    d(k) {
      k && J(r), _ = !1, h();
    }
  };
}
function vm(t) {
  let r, e, n = (
    /*item*/
    t[71].text && Uu(t)
  );
  return {
    c() {
      n && n.c(), r = Zt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && B(n, 1)) : (n = Uu(o), n.c(), B(n, 1), n.m(r.parentNode, r)) : n && (ar(), Q(n, 1, 1, () => {
        n = null;
      }), ur());
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
function Uu(t) {
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
      Bt(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function Gu(t) {
  let r, e, n, o;
  const i = [vm, km], s = [];
  function a(l, u) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Zt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (ar(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ur()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
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
function Il(t) {
  let r, e, n, o, i, s, a, l, u;
  const c = [wm, ym], f = [];
  function _(p, k) {
    return (
      /*renderList*/
      p[13].length ? 0 : 1
    );
  }
  e = _(t), n = f[e] = c[e](t);
  let h = [
    {
      class: o = mt(
        "text__inner",
        uo,
        /*innerMods*/
        t[19]
      )
    },
    {
      style: i = er(
        /*style*/
        t[18]
      )
    }
  ], m = {};
  for (let p = 0; p < h.length; p += 1)
    m = jo(m, h[p]);
  return {
    c() {
      r = Ve(
        /*htmlTag*/
        t[9]
      ), n.c(), ti(
        /*htmlTag*/
        t[9]
      )(r, m);
    },
    m(p, k) {
      q(p, r, k), f[e].m(r, null), a = !0, l || (u = fl(s = hm.call(null, r, {
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
      e = _(p), e === w ? f[e].p(p, k) : (ar(), Q(f[w], 1, 1, () => {
        f[w] = null;
      }), ur(), n = f[e], n ? n.p(p, k) : (n = f[e] = c[e](p), n.c()), B(n, 1), n.m(r, null)), ti(
        /*htmlTag*/
        p[9]
      )(r, m = No(h, [
        (!a || k[0] & /*innerMods*/
        524288 && o !== (o = mt(
          "text__inner",
          uo,
          /*innerMods*/
          p[19]
        ))) && { class: o },
        (!a || k[0] & /*style*/
        262144 && i !== (i = er(
          /*style*/
          p[18]
        ))) && { style: i }
      ])), s && Nr(s.update) && k[0] & /*$jsonAutoEllipsize, lineClamp, maxLines*/
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
function jm(t) {
  let r, e = (
    /*htmlTag*/
    t[9]
  ), n, o, i = (
    /*hasCloudBg*/
    t[6] && Bu(t)
  ), s = (
    /*htmlTag*/
    t[9] && Il(t)
  );
  return {
    c() {
      i && i.c(), r = cr(), s && s.c(), n = Zt();
    },
    m(a, l) {
      i && i.m(a, l), q(a, r, l), s && s.m(a, l), q(a, n, l), o = !0;
    },
    p(a, l) {
      /*hasCloudBg*/
      a[6] ? i ? (i.p(a, l), l[0] & /*hasCloudBg*/
      64 && B(i, 1)) : (i = Bu(a), i.c(), B(i, 1), i.m(r.parentNode, r)) : i && (ar(), Q(i, 1, 1, () => {
        i = null;
      }), ur()), /*htmlTag*/
      a[9] ? e ? Sr(
        e,
        /*htmlTag*/
        a[9]
      ) ? (s.d(1), s = Il(a), e = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : s.p(a, l) : (s = Il(a), e = /*htmlTag*/
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
function Cm(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
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
      $$slots: { default: [jm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods, selectable*/
      1048608 && (i.cls = mt(
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
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Lt(r, n);
    }
  };
}
function Em(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, U, R, $, ue, T, X, le, C, M, P, H, se, de = E, Ee = () => (de(), de = V(O, (jt) => e(52, se = jt)), O), Ae, pe = E, De = () => (pe(), pe = V(i, (jt) => e(53, Ae = jt)), i), ee, Te = E, We = () => (Te(), Te = V(o, (jt) => e(54, ee = jt)), o), Ke, ke = E, et = () => (ke(), ke = V(k, (jt) => e(55, Ke = jt)), k), fe, je = E, ce = () => (je(), je = V(p, (jt) => e(56, fe = jt)), p), te, _e = E, ie = () => (_e(), _e = V(m, (jt) => e(57, te = jt)), m), Fe, xe = E, Xe = () => (xe(), xe = V(h, (jt) => e(58, Fe = jt)), h), oe, Ye = E, Oe = () => (Ye(), Ye = V(_, (jt) => e(59, oe = jt)), _), st, at = E, ut = () => (at(), at = V(u, (jt) => e(60, st = jt)), u), kt, rt = E, Nt = () => (rt(), rt = V(f, (jt) => e(61, kt = jt)), f), ct, ge = E, he = () => (ge(), ge = V(c, (jt) => e(62, ct = jt)), c), pt, Ce = E, I = () => (Ce(), Ce = V(w, (jt) => e(10, pt = jt)), w), Ct, dt = E, At = () => (dt(), dt = V(l, (jt) => e(63, Ct = jt)), l), Tt, nt = E, Y = () => (nt(), nt = V(a, (jt) => e(64, Tt = jt)), a), Mt, Vt = E, Gt = () => (Vt(), Vt = V(s, (jt) => e(65, Mt = jt)), s), Jt, me = E, Ue = () => (me(), me = V(n, (jt) => e(66, Jt = jt)), n), _t, ye = E, Qe = () => (ye(), ye = V(U, (jt) => e(67, _t = jt)), U);
  t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => Te()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => je()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => at()), t.$$.on_destroy.push(() => rt()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => Ce()), t.$$.on_destroy.push(() => dt()), t.$$.on_destroy.push(() => nt()), t.$$.on_destroy.push(() => Vt()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => ye());
  let { componentContext: ze } = r, { layoutParams: or = void 0 } = r;
  const Pe = Tr(Kr), yt = Pe.direction;
  bn(t, yt, (jt) => e(51, H = jt));
  let Ft = "", It = 12, hr = 1.25, Me = null, vt = "", sr, $t = "", Yt = !1, mr = "start", jr = "start", Qt = "", xt = "", G = "", ft = !1, Wt = [], St = !1, br = "", Er, wr = [], Ir = {}, zr = "span";
  function tr(jt, Kt, qt, pr) {
    var ne, d;
    let lt = [];
    if (wr.forEach(([j, Ie]) => {
      Pe.removeSvgFilter(j, Ie);
    }), wr = [], !(Array.isArray(Kt) && Kt.length || Array.isArray(qt) && qt.length && jt)) {
      e(13, Wt = []);
      return;
    }
    const re = jt;
    let bt = Kt || [{ start: 0, end: re.length }], ir = qt || [], yr = 0, fr = [], v = [];
    bt.forEach((j) => {
      const Ie = j.start || 0, Re = j.end || jt.length, Pt = {
        top_offset: 0,
        ...j,
        start: Ie,
        end: Re
      };
      v.push({
        index: Ie,
        range: Pt,
        type: "rangeStart",
        isStart: !0
      }), v.push({
        index: Re,
        range: Pt,
        type: "rangeEnd"
      });
    }), ir.forEach((j, Ie) => {
      j.start !== void 0 && j.url && j.start <= re.length && v.push({
        index: j.indexing_direction === "reversed" ? jt.length - j.start : j.start,
        image: j,
        type: "image",
        arrayIndex: Ie
      });
    }), v.sort((j, Ie) => j.index === Ie.index ? j.type !== Ie.type ? j.type === "image" ? -1 : Ie.type === "image" ? 1 : j.type < Ie.type ? -1 : 1 : j.type === "image" && Ie.type === "image" ? Ie.arrayIndex - j.arrayIndex : j.type === "rangeStart" && Ie.type === "rangeStart" ? j.range.end - Ie.range.end : j.type === "rangeStart" ? 1 : Ie.type === "rangeStart" ? -1 : j.type !== "image" && Ie.type !== "image" ? j.range.start - Ie.range.start : 0 : j.index - Ie.index), v.forEach((j) => {
      var Pt, L, Dt, it;
      let Ie = j.type === "image" ? null : j.range, Re = j.index;
      if (Re > yr) {
        let Ge = Object.assign({ ...pr }, ...fr);
        fr.length && fr[fr.length - 1].start !== yr && (Ge.top_offset = 0), lt.push({
          text: re.substring(yr, Re),
          textStyles: Ge,
          actions: j.type === "rangeEnd" && ((L = (Pt = j.range) == null ? void 0 : Pt.actions) == null ? void 0 : L.filter(Zs)) || void 0
        });
      }
      if (j.type === "rangeStart" && Ie)
        fr.push(Ie);
      else if (j.type === "rangeEnd")
        fr = fr.filter((Ge) => Ge !== j.range);
      else if (j.type === "image") {
        let Ge = Object.assign({ ...pr }, ...fr), Je = ae((j.image.width && j.image.width.value || 20) * 10 / (Ge.font_size || 12)), Ht = ae((j.image.height && j.image.height.value || 20) * 10 / (Ge.font_size || 12));
        const kr = {
          "font-size": ae((Number(Ge.font_size) || 12) * 10 / It)
        };
        let en = "";
        const rn = j.image.tint_color, Jr = qd(j.image.tint_mode, "source_in");
        if (rn) {
          const hn = gr(j.image.tint_color);
          en = Pe.addSvgFilter(hn, Jr), wr.push([hn, Jr]);
        }
        const ve = {}, wn = (Dt = j.image.accessibility) == null ? void 0 : Dt.type, Xr = ((it = j.image.accessibility) == null ? void 0 : it.description) || "";
        (wn === "button" || wn === "image") && Xr ? ve.role = wn : (!Xr || wn === "none") && (ve["aria-hidden"] = "true"), lt.push({
          image: {
            url: j.image.url,
            width: Je,
            height: Ht,
            wrapperStyle: kr,
            svgFilterId: en,
            preloadRequired: !!j.image.preload_required,
            verticalAlign: j.image.alignment_vertical,
            description: Xr,
            a11yAttrs: ve
          }
        });
      }
      yr = Re;
    }), yr < re.length && lt.push({
      text: re.substring(yr),
      textStyles: { ...pr }
    }), e(13, Wt = lt), e(6, St = lt.some((j) => {
      var Ie;
      return "text" in j && ((Ie = j.textStyles.background) == null ? void 0 : Ie.type) === "cloud";
    })), e(14, br = St && lt.length === 1 ? Pe.genId("text-whole-bg") : ""), e(15, Er = br ? ((d = (ne = fo(lt[0].textStyles.background.color)) == null ? void 0 : ne.a) != null ? d : 255) / 255 : void 0);
  }
  function ot(jt) {
    jt.target && "classList" in jt.target && jt.target.classList.add(uo.text__image_hidden);
  }
  return an(() => {
    wr.forEach(([jt, Kt]) => {
      Pe.removeSvgFilter(jt, Kt);
    });
  }), t.$$set = (jt) => {
    "componentContext" in jt && e(0, ze = jt.componentContext), "layoutParams" in jt && e(1, or = jt.layoutParams);
  }, t.$$.update = () => {
    var jt, Kt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && ze.json && (e(3, It = 12), e(40, hr = 1.25), e(11, Me = null), e(41, vt = ""), e(12, sr = void 0), e(4, $t = ""), e(42, Yt = !1), e(43, mr = "start"), e(44, jr = "start"), e(45, Qt = ""), e(47, G = ""), e(5, ft = !1)), t.$$.dirty[0] & /*componentContext*/
    1 && Ue(e(37, n = ze.getDerivedFromVars(ze.json.text))), t.$$.dirty[0] & /*componentContext*/
    1 && We(e(36, o = ze.getDerivedFromVars(ze.json.ranges, void 0, !0, 3))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(35, i = ze.getDerivedFromVars(ze.json.images))), t.$$.dirty[0] & /*componentContext*/
    1 && Gt(e(34, s = ze.getDerivedFromVars(
      {
        font_size: ze.json.font_size,
        letter_spacing: ze.json.letter_spacing,
        font_weight: ze.json.font_weight,
        font_weight_value: ze.json.font_weight_value,
        font_family: ze.json.font_family,
        text_color: ze.json.text_color,
        underline: ze.json.underline,
        strike: ze.json.strike,
        line_height: ze.json.line_height,
        text_shadow: ze.json.text_shadow,
        font_feature_settings: ze.json.font_feature_settings,
        font_variation_settings: ze.json.font_variation_settings
      },
      void 0,
      !0,
      1
    ))), t.$$.dirty[0] & /*componentContext*/
    1 && Y(e(33, a = ze.getDerivedFromVars(ze.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && At(e(32, l = ze.getDerivedFromVars(ze.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(31, u = ze.getDerivedFromVars(ze.json.max_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(30, c = ze.getDerivedFromVars(ze.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Nt(e(29, f = ze.getDerivedFromVars(ze.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(28, _ = ze.getDerivedFromVars(ze.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(27, h = ze.getDerivedFromVars(ze.json.focused_text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(26, m = ze.getDerivedFromVars(ze.json.truncate))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(25, p = ze.getDerivedFromVars(ze.json.text_gradient))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(24, k = ze.getDerivedFromVars(ze.json.selectable))), t.$$.dirty[0] & /*componentContext*/
    1 && I(e(23, w = ze.getDerivedFromVars(ze.json.auto_ellipsize))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(22, O = ze.getDerivedFromVars(ze.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Qe(e(21, U = ze.getDerivedFromVars(ze.json.heading_type))), t.$$.dirty[2] & /*$jsonHeadingType*/
    32 && e(9, R = (() => {
      const qt = _t;
      if (qt && typeof qt == "string") {
        const pr = qt.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(pr))
          return pr;
      }
      return "span";
    })()), t.$$.dirty[0] & /*htmlTag*/
    512 && e(16, zr = R !== "span" ? "div" : "span"), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonText*/
    16 && (typeof ze.json.text == "string" ? e(2, Ft = gm(Jt)) : (e(2, Ft = ""), ze.logError(K(new Error("Incorrect text value type"))))), t.$$.dirty[1] & /*$jsonTextGradient, $direction*/
    34603008) {
      let qt = "";
      if (fe) {
        const pr = gl([fe], H);
        pr.image && (qt = pr.image);
      }
      e(47, G = qt);
    }
    if (t.$$.dirty[1] & /*gradient*/
    65536 | t.$$.dirty[2] & /*$jsonRootTextStyles*/
    8 && e(7, Ir = G ? { ...Mt, text_color: "" } : Mt), t.$$.dirty[0] & /*fontSize, componentContext*/
    9 | t.$$.dirty[2] & /*$jsonTextSize*/
    4) {
      e(3, It = Wn(Tt, It));
      const qt = ze.json.responsive;
      if (qt && typeof qt == "object" && typeof window < "u") {
        const pr = window.matchMedia("(max-width: 767px)").matches, lt = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
        pr && ((jt = qt.mobile) != null && jt.font_size) ? e(3, It = qt.mobile.font_size) : lt && ((Kt = qt.tablet) != null && Kt.font_size) && e(3, It = qt.tablet.font_size);
      }
    }
    if (t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*lineHeight*/
    512 | t.$$.dirty[2] & /*$jsonLineHeight*/
    2) {
      const qt = Ct;
      Un(qt) ? (e(40, hr = Number(qt) / It), e(11, Me = hr)) : e(11, Me = null);
    }
    if (t.$$.dirty[1] & /*$jsonMaxLines*/
    536870912 && e(8, $ = st === 1), t.$$.dirty[0] & /*$jsonAutoEllipsize*/
    1024 | t.$$.dirty[1] & /*$jsonMaxLines, lineHeight*/
    536871424) {
      let qt = "", pr, lt = "", re = !1;
      if (st && st > 1) {
        const bt = Number(st);
        qt = bt * hr + "em", pr = bt, lt = bt, re = !0;
      } else pt && st !== 1 && (re = !0);
      e(41, vt = qt), e(12, sr = pr), e(4, $t = lt), e(42, Yt = re);
    }
    if (t.$$.dirty[1] & /*$direction, halign*/
    1052672 | t.$$.dirty[2] & /*$jsonHAlign*/
    1 && e(43, mr = bl(ct, H, mr)), t.$$.dirty[1] & /*$jsonVAlign, valign*/
    1073750016 && e(44, jr = yl(kt, jr)), t.$$.dirty[0] & /*text*/
    4 | t.$$.dirty[1] & /*$jsonRanges*/
    8388608 && e(50, ue = !ee || Ft && ee.length === 1 && ee[0] && (!ee[0].start || ee[0].start === 0) && (!ee[0].end || typeof ee[0].end == "number" && ee[0].end >= Ft.length)), t.$$.dirty[1] & /*gradient, $jsonTextColor, $jsonRanges*/
    276889600 && e(49, T = !!(!G && oe) != !!(ee && ee[0] && ee[0].text_color)), t.$$.dirty[1] & /*$jsonMaxLines, isAllTextSameColor, isOnlyOneColorDefined, $jsonTextColor, $jsonRanges, rootTextColor*/
    814497792) {
      let qt = "";
      st && ue && T && (qt = gr(oe || ee && ee[0] && ee[0].text_color, 1, Qt)), e(45, Qt = qt);
    }
    t.$$.dirty[1] & /*$jsonFocusTextColor, focusTextColor*/
    134250496 && e(46, xt = gr(Fe, 1, xt)), t.$$.dirty[1] & /*$jsonTruncate*/
    67108864 && e(48, X = te === "none" ? "none" : ""), t.$$.dirty[0] & /*selectable*/
    32 | t.$$.dirty[1] & /*$jsonSelectable*/
    16777216 && e(5, ft = _n(Ke, ft)), t.$$.dirty[0] & /*text, rootTextStyles*/
    132 | t.$$.dirty[1] & /*$jsonRanges, $jsonImages*/
    12582912 && tr(Ft, ee, Ae, Ir), t.$$.dirty[0] & /*singleline*/
    256 | t.$$.dirty[1] & /*multiline, halign, valign, truncate, focusTextColor*/
    178176 && e(20, le = {
      singleline: $,
      multiline: Yt,
      halign: mr,
      valign: jr,
      truncate: X,
      "has-focus-color": !!xt
    }), t.$$.dirty[0] & /*hasCloudBg*/
    64 | t.$$.dirty[1] & /*gradient*/
    65536 && e(19, C = {
      gradient: !!G,
      "has-cloud-bg": St
    }), t.$$.dirty[0] & /*fontSize, lineClamp*/
    24 | t.$$.dirty[1] & /*lineHeight, maxHeight, rootTextColor, gradient, focusTextColor*/
    116224 && e(18, M = {
      "font-size": ae(It),
      "line-height": hr,
      "max-height": vt,
      "-webkit-line-clamp": $t,
      color: Qt,
      "background-image": G,
      "--divkit-text-focus-color": xt
    }), t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*$jsonPaddings, $direction*/
    3145728 && e(17, P = po(xl(yi(se, {}) || {}, 10 / It), H));
  }, [
    ze,
    or,
    Ft,
    It,
    $t,
    ft,
    St,
    Ir,
    $,
    R,
    pt,
    Me,
    sr,
    Wt,
    br,
    Er,
    zr,
    P,
    M,
    C,
    le,
    U,
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
    yt,
    ot,
    hr,
    vt,
    Yt,
    mr,
    jr,
    Qt,
    xt,
    G,
    X,
    T,
    ue,
    H,
    se,
    Ae,
    ee,
    Ke,
    fe,
    te,
    Fe,
    oe,
    st,
    kt,
    ct,
    Ct,
    Tt,
    Mt,
    Jt,
    _t
  ];
}
class Am extends Rr {
  constructor(r) {
    super(), Or(this, r, Em, Cm, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Sm = "appkit-container", Vm = "appkit-container_wrap", Fm = "appkit-container_overflow_visible", Im = "appkit-container_orientation_vertical", Dm = "appkit-container_valign_start", Tm = "appkit-container_valign_center", Mm = "appkit-container_valign_end", Pm = "appkit-container_halign_start", Nm = "appkit-container_halign_center", zm = "appkit-container_halign_end", Om = "appkit-container_orientation_horizontal", Rm = "appkit-container_orientation_overlap", Ju = {
  container: Sm,
  container_wrap: Vm,
  container_overflow_visible: Fm,
  container_orientation_vertical: Im,
  container_valign_start: Dm,
  container_valign_center: Tm,
  container_valign_end: Mm,
  "container_valign_space-between": "appkit-container_valign_space-between",
  "container_valign_space-around": "appkit-container_valign_space-around",
  "container_valign_space-evenly": "appkit-container_valign_space-evenly",
  container_halign_start: Pm,
  container_halign_center: Nm,
  container_halign_end: zm,
  "container_halign_space-between": "appkit-container_halign_space-between",
  "container_halign_space-around": "appkit-container_halign_space-around",
  "container_halign_space-evenly": "appkit-container_halign_space-evenly",
  container_orientation_horizontal: Om,
  container_orientation_overlap: Rm,
  "container_fixed-container": "appkit-container_fixed-container",
  "container_responsive-mobile-vertical": "appkit-container_responsive-mobile-vertical",
  "container_responsive-mobile-horizontal": "appkit-container_responsive-mobile-horizontal",
  "container_responsive-mobile-has-height": "appkit-container_responsive-mobile-has-height",
  "container_responsive-tablet-vertical": "appkit-container_responsive-tablet-vertical",
  "container_responsive-tablet-horizontal": "appkit-container_responsive-tablet-horizontal",
  "container_responsive-tablet-has-height": "appkit-container_responsive-tablet-has-height"
};
function qu(t) {
  return {
    top: Number(t == null ? void 0 : t.top) || 0,
    right: Number(t == null ? void 0 : t.right) || 0,
    bottom: Number(t == null ? void 0 : t.bottom) || 0,
    left: Number(t == null ? void 0 : t.left) || 0
  };
}
function Yu(t, r, e) {
  const n = ((r == null ? void 0 : r.margins.left) || 0) + ((r == null ? void 0 : r.margins.right) || 0), o = ((r == null ? void 0 : r.margins.top) || 0) + ((r == null ? void 0 : r.margins.bottom) || 0);
  r != null && r.show_at_start && (e ? t.top = r.style.height + o : t.left = r.style.width + n), r != null && r.show_at_end && (e ? t.bottom = r.style.height + o : t.right = r.style.width + n);
}
function Lm(t, r, e) {
  const n = {};
  return Yu(n, r, t === "vertical"), Yu(n, e, t === "horizontal"), n;
}
function Bm({
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
  ], i.map(ae).join(" ");
}
function Hm(t) {
  var e;
  const r = (e = t.width) == null ? void 0 : e.type;
  return r !== "wrap_content" && r !== "fixed";
}
function Wm(t) {
  var e;
  return ((e = t.height) == null ? void 0 : e.type) === "match_parent";
}
function Um(t, r) {
  return t === "vertical" || t === "horizontal" || t === "overlap" ? t : r;
}
function Gm(t) {
  var r, e, n;
  return {
    width: $r((r = t.item_width) == null ? void 0 : r.value, 10),
    height: $r((e = t.item_height) == null ? void 0 : e.value, 10),
    radius: $r((n = t.corner_radius) == null ? void 0 : n.value, 5)
  };
}
function Jm(t) {
  var e;
  const r = $r((e = t.radius) == null ? void 0 : e.value, 10) * 2;
  return {
    width: r,
    height: r,
    radius: r
  };
}
function qm(t, r, e) {
  var l;
  const n = {}, o = r.stroke || (e == null ? void 0 : e.stroke), i = o != null && o.color ? gr(o.color) : "", s = o != null && o.width ? Number((l = o.width) != null ? l : 1) : "";
  n.width = t.width, n.height = t.height, n.borderRadius = t.radius;
  const a = r.background_color || (e == null ? void 0 : e.color);
  return n.background = gr(a), i && s && (n.boxShadow = `inset 0 0 0 ${ae(s)} ${i}`), n;
}
function ao(t, r, e) {
  if (!t || !t.shape || !t.shape.type || !r.includes(t.shape.type) || t.type !== "shape_drawable")
    return e;
  let n;
  if (t.shape.type === "rounded_rectangle")
    n = Gm(t.shape);
  else if (t.shape.type === "circle")
    n = Jm(t.shape);
  else
    return e;
  return qm(n, t.shape, {
    color: t.color,
    stroke: t.stroke
  });
}
let es;
function Ku() {
  if (typeof document > "u" && (es = !0), es !== void 0)
    return es;
  const t = document.createElement("div");
  return t.style.position = "absolute", t.style.display = "flex", t.style.flexDirection = "column", t.style.gap = "1px", t.appendChild(document.createElement("div")), t.appendChild(document.createElement("div")), document.body.appendChild(t), es = t.scrollHeight === 1, document.body.removeChild(t), es;
}
function Ym(t, r) {
  return t === "top" || t === "center" || t === "bottom" || t === "baseline" || t === "space-between" || t === "space-around" || t === "space-evenly" ? t === "top" ? "start" : t === "bottom" ? "end" : t : r;
}
function Km(t, r, e) {
  return t === "left" || t === "center" || t === "right" || t === "space-between" || t === "space-around" || t === "space-evenly" || t === "start" || t === "end" ? t === "left" ? r === "ltr" ? "start" : "end" : t === "right" ? r === "ltr" ? "end" : "start" : t : e;
}
function Xm() {
}
function $o(t) {
  return {
    subscribe(r) {
      return r(t), Xm;
    }
  };
}
function wl(t, r, e, n) {
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
function Zm(t, r) {
  let e = 0, n, o = !1;
  return function() {
    const i = Date.now();
    return !e || Math.abs(i - e) > r ? (e = i, n = t.apply(this, arguments)) : (o || (o = !0, setTimeout(() => {
      o = !1, n = t.apply(this, arguments);
    }, r)), n);
  };
}
function Qm(t) {
  const r = t.getBoundingClientRect(), e = getComputedStyle(t);
  return {
    top: r.top - parseFloat(e.marginTop),
    right: r.right + parseFloat(e.marginRight),
    bottom: r.bottom + parseFloat(e.marginBottom),
    left: r.left - parseFloat(e.marginLeft)
  };
}
const { window: xm } = Po;
function Xu(t, r, e) {
  const n = t.slice();
  return n[16] = r[e], n;
}
function Zu(t) {
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
      r = Ve("div"), e = Ve("div"), s = cr(), g(e, "class", cs["container-separator__shape"]), D(e, "width", n), D(e, "height", o), D(e, "border-radius", i), D(
        e,
        "background",
        /*item*/
        t[16].style.background
      ), D(
        e,
        "box-shadow",
        /*item*/
        t[16].style.boxShadow
      ), g(r, "class", cs["container-separator__item"]), D(r, "left", a), D(r, "top", l), D(r, "width", u), D(r, "height", c);
    },
    m(f, _) {
      q(f, r, _), ht(r, e), ht(r, s);
    },
    p(f, _) {
      _ & /*separators*/
      2 && n !== (n = `${/*item*/
      f[16].style.width}px`) && D(e, "width", n), _ & /*separators*/
      2 && o !== (o = `${/*item*/
      f[16].style.height}px`) && D(e, "height", o), _ & /*separators*/
      2 && i !== (i = `${/*item*/
      f[16].style.borderRadius}px`) && D(e, "border-radius", i), _ & /*separators*/
      2 && D(
        e,
        "background",
        /*item*/
        f[16].style.background
      ), _ & /*separators*/
      2 && D(
        e,
        "box-shadow",
        /*item*/
        f[16].style.boxShadow
      ), _ & /*separators*/
      2 && a !== (a = `${/*item*/
      f[16].left}px`) && D(r, "left", a), _ & /*separators*/
      2 && l !== (l = `${/*item*/
      f[16].top}px`) && D(r, "top", l), _ & /*separators*/
      2 && u !== (u = `${/*item*/
      f[16].width}px`) && D(r, "width", u), _ & /*separators*/
      2 && c !== (c = `${/*item*/
      f[16].height}px`) && D(r, "height", c);
    },
    d(f) {
      f && J(r);
    }
  };
}
function $m(t) {
  let r, e, n, o = nr(
    /*separators*/
    t[1]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = Zu(Xu(t, o, s));
  return {
    c() {
      r = Ve("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      g(r, "class", cs["container-separator"]);
    },
    m(s, a) {
      q(s, r, a);
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, null);
      t[13](r), e || (n = Be(
        xm,
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
          const u = Xu(s, o, l);
          i[l] ? i[l].p(u, a) : (i[l] = Zu(u), i[l].c(), i[l].m(r, null));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = o.length;
      }
    },
    i: E,
    o: E,
    d(s) {
      s && J(r), on(i, s), t[13](null), e = !1, n();
    }
  };
}
const e1 = 10;
function Dl(t, r, e, n, o, i) {
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
function Qu(t, r, e, n, o, i) {
  const s = {
    top: Math.min(...e.map((a) => a.top)),
    right: Math.max(...e.map((a) => a.right)),
    bottom: Math.max(...e.map((a) => a.bottom)),
    left: Math.min(...e.map((a) => a.left))
  };
  if (r != null && r.show_at_start) {
    let a, l;
    o === "space-around" || o === "space-evenly" ? (a = i.left - r.style.width, l = i.top - r.style.height) : (a = e[0].left - r.style.width - r.margins.left - r.margins.right, l = e[0].top - r.style.height - r.margins.top - r.margins.bottom), Dl(
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
      Dl(t, r, e[a], e[a + 1], s, n);
  if (r != null && r.show_at_end) {
    const a = e[e.length - 1];
    let l, u;
    o === "space-around" || o === "space-evenly" ? (l = i.bottom + r.style.height, u = i.right + r.style.width) : (l = a.bottom + r.style.height + r.margins.top + r.margins.bottom, u = a.right + r.style.width + r.margins.left + r.margins.right), Dl(
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
function t1(t, r, e) {
  let n, { orientation: o } = r, { separator: i } = r, { lineSeparator: s } = r, { contentHAlign: a } = r, { contentVAlign: l } = r, { direction: u } = r;
  const c = Zm(w, e1);
  let f = [], _, h = !1, m = null, p = null;
  function k(U) {
    U.some((R) => {
      var ue;
      const $ = (ue = R.target) == null ? void 0 : ue.classList;
      return !($ != null && $.contains(cs["container-separator__shape"])) && !($ != null && $.contains(cs["container-separator"]));
    }) && c();
  }
  function w() {
    if (!n)
      return;
    const U = n.getBoundingClientRect(), R = window.getComputedStyle(n), $ = {
      top: U.top + parseFloat(R.paddingTop),
      right: U.right - parseFloat(R.paddingRight),
      bottom: U.bottom - parseFloat(R.paddingBottom),
      left: U.left + parseFloat(R.paddingLeft)
    };
    e(1, f = []);
    let ue = [...n.children].filter((le) => le !== _ && le instanceof HTMLElement && !le.classList.contains(Xs.outer__border) && getComputedStyle(le).display !== "none"), T = [];
    for (; ue.length; ) {
      const le = [], C = ue.shift();
      le.push(C);
      let M = C.getBoundingClientRect(), P = M.left, H = M.right, se = M.bottom;
      for (; ue.length; ) {
        let de = ue[0], Ee = de.getBoundingClientRect();
        if (o === "vertical") {
          if (Ee.top < se)
            break;
        } else if (u === "ltr" ? Ee.left < H : Ee.right > P)
          break;
        H = Math.max(H, Ee.right), P = Math.min(P, Ee.left), se = Math.max(se, Ee.bottom), le.push(de), ue.shift();
      }
      T.push(le);
    }
    const X = [];
    T.forEach((le) => {
      const C = le.map((P) => Qm(P));
      u === "rtl" && o === "horizontal" && C.reverse(), i && Qu(
        f,
        i,
        C,
        o === "vertical",
        o === "vertical" ? l : a,
        $
      );
      const M = {
        top: Math.min(...C.map((P) => P.top)),
        right: Math.max(...C.map((P) => P.right)),
        bottom: Math.max(...C.map((P) => P.bottom)),
        left: Math.min(...C.map((P) => P.left))
      };
      X.push(M);
    }), u === "rtl" && o === "vertical" && X.reverse(), s && Qu(
      f,
      s,
      X,
      o === "horizontal",
      o === "vertical" ? a : l,
      $
    ), f.forEach((le) => {
      le.top -= U.top, le.left -= U.left;
    });
  }
  ro(() => {
    e(9, h = !0);
  }), an(() => {
    e(9, h = !1);
  });
  function O(U) {
    Fr[U ? "unshift" : "push"](() => {
      _ = U, e(0, _);
    });
  }
  return t.$$set = (U) => {
    "orientation" in U && e(3, o = U.orientation), "separator" in U && e(4, i = U.separator), "lineSeparator" in U && e(5, s = U.lineSeparator), "contentHAlign" in U && e(6, a = U.contentHAlign), "contentVAlign" in U && e(7, l = U.contentVAlign), "direction" in U && e(8, u = U.direction);
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
class r1 extends Rr {
  constructor(r) {
    super(), Or(this, r, t1, $m, Sr, {
      orientation: 3,
      separator: 4,
      lineSeparator: 5,
      contentHAlign: 6,
      contentVAlign: 7,
      direction: 8
    });
  }
}
const { Boolean: n1 } = Po;
function xu(t, r, e) {
  const n = t.slice();
  return n[63] = r[e], n;
}
function $u(t) {
  let r, e;
  return r = new Gn({
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function ec(t) {
  let r, e;
  return r = new r1({
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function o1(t) {
  let r, e, n, o = nr(
    /*items*/
    t[9]
  ), i = [];
  for (let l = 0; l < o.length; l += 1)
    i[l] = $u(xu(t, o, l));
  const s = (l) => Q(i[l], 1, 1, () => {
    i[l] = null;
  });
  let a = (
    /*separator*/
    (t[5] || /*lineSeparator*/
    t[6]) && ec(t)
  );
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      r = cr(), a && a.c(), e = Zt();
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
          const f = xu(l, o, c);
          i[c] ? (i[c].p(f, u), B(i[c], 1)) : (i[c] = $u(f), i[c].c(), B(i[c], 1), i[c].m(r.parentNode, r));
        }
        for (ar(), c = o.length; c < i.length; c += 1)
          s(c);
        ur();
      }
      /*separator*/
      l[5] || /*lineSeparator*/
      l[6] ? a ? (a.p(l, u), u[0] & /*separator, lineSeparator*/
      96 && B(a, 1)) : (a = ec(l), a.c(), B(a, 1), a.m(e.parentNode, e)) : a && (ar(), Q(a, 1, 1, () => {
        a = null;
      }), ur());
    },
    i(l) {
      if (!n) {
        for (let u = 0; u < o.length; u += 1)
          B(i[u]);
        B(a), n = !0;
      }
    },
    o(l) {
      i = i.filter(n1);
      for (let u = 0; u < i.length; u += 1)
        Q(i[u]);
      Q(a), n = !1;
    },
    d(l) {
      l && (J(r), J(e)), on(i, l), a && a.d(l);
    }
  };
}
function i1(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
        "container",
        Ju,
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
      $$slots: { default: [o1] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = mt(
        "container",
        Ju,
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
      Lt(r, n);
    }
  };
}
const s1 = {
  start: "start",
  center: "center",
  end: "end",
  // 'space-*' values doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, l1 = {
  start: "start",
  center: "center",
  end: "end",
  baseline: "baseline",
  // 'space-*' doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, tc = ["rounded_rectangle", "circle"];
function a1(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, U, R, $, ue, T, X, le, C, M, P = E, H = () => (P(), P = V(w, (ft) => e(45, M = ft)), w), se, de = E, Ee = () => (de(), de = V(U, (ft) => e(46, se = ft)), U), Ae, pe = E, De = () => (pe(), pe = V(O, (ft) => e(47, Ae = ft)), O), ee, Te = E, We = () => (Te(), Te = V(k, (ft) => e(48, ee = ft)), k), Ke, ke = E, et = () => (ke(), ke = V(p, (ft) => e(49, Ke = ft)), p), fe, je = E, ce = () => (je(), je = V(m, (ft) => e(50, fe = ft)), m), te, _e = E, ie = () => (_e(), _e = V(f, (ft) => e(51, te = ft)), f), Fe, xe = E, Xe = () => (xe(), xe = V(c, (ft) => e(52, Fe = ft)), c), oe, Ye = E, Oe = () => (Ye(), Ye = V(h, (ft) => e(53, oe = ft)), h), st, at = E, ut = () => (at(), at = V(_, (ft) => e(54, st = ft)), _), kt, rt, Nt = E, ct = () => (Nt(), Nt = V(u, (ft) => e(55, rt = ft)), u), ge, he = E, pt = () => (he(), he = V(l, (ft) => e(56, ge = ft)), l), Ce, I = E, Ct = () => (I(), I = V(Qe, (ft) => e(57, Ce = ft)), Qe), dt, At = E, Tt = () => (At(), At = V(a, (ft) => e(58, dt = ft)), a), nt, Y = E, Mt = () => (Y(), Y = V(s, (ft) => e(59, nt = ft)), s), Vt, Gt = E, Jt = () => (Gt(), Gt = V(i, (ft) => e(60, Vt = ft)), i);
  t.$$.on_destroy.push(() => P()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => Te()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => je()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => at()), t.$$.on_destroy.push(() => Nt()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => At()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => Gt());
  let { componentContext: me } = r, { layoutParams: Ue = void 0 } = r;
  const _t = Tr(Kr), ye = _t.direction;
  bn(t, ye, (ft) => e(10, kt = ft));
  let Qe, ze = "vertical", or = "start", Pe = "start", yt = null, Ft = null, It, hr = {}, Me = 0, vt = 0, sr = !1;
  function $t() {
    e(2, ze = "vertical"), e(3, or = "start"), e(4, Pe = "start"), e(7, It = void 0), e(32, Me = 0), e(33, vt = 0), e(34, sr = !1);
  }
  function Yt(ft) {
    e(0, me = e(35, jr = {
      ...me,
      json: {
        ...me.json,
        items: ft.filter(zo)
      }
    }));
  }
  let mr = [], jr, Qt = {}, xt, G;
  return an(() => {
    mr.forEach((ft) => {
      ft.destroy();
    });
  }), t.$$set = (ft) => {
    "componentContext" in ft && e(0, me = ft.componentContext), "layoutParams" in ft && e(1, Ue = ft.layoutParams);
  }, t.$$.update = () => {
    var ft, Wt, St, br, Er, wr, Ir, zr, tr, ot, jt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(44, n = me.origJson), t.$$.dirty[1] & /*origJson*/
    8192 && n && $t(), t.$$.dirty[0] & /*componentContext*/
    1 && e(43, o = me.json.items), t.$$.dirty[0] & /*componentContext*/
    1 && Jt(e(29, i = typeof ((ft = me.json.item_builder) == null ? void 0 : ft.data) == "string" ? me.getDerivedFromVars((Wt = me.json.item_builder) == null ? void 0 : Wt.data, void 0, !0) : (St = me.json.item_builder) != null && St.data ? $o(me.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && Mt(e(28, s = me.getDerivedFromVars(me.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && Tt(e(27, a = me.getDerivedFromVars(me.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && pt(e(26, l = me.getDerivedFromVars(me.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(25, u = me.getDerivedFromVars(me.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(24, c = me.getDerivedFromVars(me.json.separator))), t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(23, f = me.getDerivedFromVars(me.json.line_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(22, _ = me.getDerivedFromVars(me.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(21, h = me.getDerivedFromVars(me.json.line_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(20, m = me.getDerivedFromVars(me.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(19, p = me.getDerivedFromVars(me.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && We(e(18, k = me.getDerivedFromVars(me.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && H(e(17, w = me.getDerivedFromVars(me.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(16, O = me.getDerivedFromVars(me.json.max_width))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(15, U = me.getDerivedFromVars(me.json.responsive))), t.$$.dirty[0] & /*componentContext, items*/
    513 | t.$$.dirty[1] & /*$jsonItemBuilderData, jsonItems, prevContext*/
    536875024) {
      let Kt = [];
      if (me.json.item_builder && Array.isArray(Vt) && Array.isArray(me.json.item_builder.prototypes)) {
        const re = me.json.item_builder;
        Kt = wl(Vt, _t, me, re);
      } else
        Kt = (Array.isArray(o) && o || []).map((re, bt) => ({
          div: re,
          key: re.id || { index: bt, data: re }
        }));
      const qt = new Set(mr), pr = /* @__PURE__ */ new Map();
      let lt = !1;
      jr === me && mr.forEach((re) => {
        re.key && (typeof re.key == "string" && pr.has(re.key) ? lt || (lt = !0, me.logError(K(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: re.key } }))) : pr.set(
          typeof re.key == "string" ? re.key : re.key.index,
          re
        ));
      }), e(9, mr = Kt.map((re, bt) => {
        let ir = !lt && pr.get(re.id), yr = pr.get(bt);
        return !ir && !re.id && typeof re.key == "object" && typeof (yr == null ? void 0 : yr.key) == "object" && qi(yr.key.data, re.key.data) && (ir = yr), ir ? (qt.delete(ir), ir) : me.produceChildContext(re.div, {
          path: bt,
          variables: re.vars,
          id: re.id,
          key: re.key
        });
      }));
      for (const re of qt)
        re.destroy();
      e(35, jr = me);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    513) {
      let Kt = [];
      mr.forEach((qt) => {
        Kt.push(me.getDerivedFromVars({
          width: qt.json.width,
          height: qt.json.height
        }));
      }), Ct(e(11, Qe = Ji(Kt, (qt) => [...qt])));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonOrientation*/
    268435456 && e(2, ze = Um(nt, ze)), t.$$.dirty[1] & /*$jsonLayoutMode*/
    134217728 && e(38, R = dt === "wrap"), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(42, $ = ze !== "horizontal" && !R), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(41, ue = ze !== "vertical" && !R), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(40, T = ze === "overlap" && !Ce.every(Hm)), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(39, X = ze === "overlap" && !Ce.every(Wm)), t.$$.dirty[0] & /*contentVAlign*/
    8 | t.$$.dirty[1] & /*$jsonContentVAlign*/
    33554432 && e(3, or = Ym(ge, or)), t.$$.dirty[0] & /*$direction, contentHAlign*/
    1040 | t.$$.dirty[1] & /*$jsonContentHAlign*/
    16777216 && e(4, Pe = Km(rt, kt, Pe)), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    8388610 && e(32, Me = $r(st, Me)), t.$$.dirty[1] & /*$jsonLineSpacing, lineSpacing*/
    4194308 && e(33, vt = $r(oe, vt)), t.$$.dirty[0] & /*orientation, separator, componentContext*/
    37 | t.$$.dirty[1] & /*$jsonSeparator, itemSpacing*/
    2097154)
      if (Fe != null && Fe.style && ze !== "overlap" && Ku()) {
        const Kt = ao(Fe.style, tc, (yt == null ? void 0 : yt.style) || null);
        Kt ? (e(5, yt = {
          show_at_start: !!((br = Fe.show_at_start) != null && br),
          show_at_end: !!((Er = Fe.show_at_end) != null && Er),
          show_between: !!((wr = Fe.show_between) == null || wr),
          style: Kt,
          margins: qu(Fe.margins)
        }), yt.show_between && Me && me.logError(K(new Error("item_spacing will be ignored due to the 'separator' property."), { level: "warn" }))) : e(5, yt = null);
      } else
        e(5, yt = null);
    if (t.$$.dirty[0] & /*orientation, lineSeparator, componentContext*/
    69 | t.$$.dirty[1] & /*$jsonLineSeparator, lineSpacing*/
    1048580)
      if (te != null && te.style && ze !== "overlap" && Ku()) {
        const Kt = ao(te.style, tc, (Ft == null ? void 0 : Ft.style) || null);
        Kt ? (e(6, Ft = {
          show_at_start: !!((Ir = te.show_at_start) != null && Ir),
          show_at_end: !!((zr = te.show_at_end) != null && zr),
          show_between: !!((tr = te.show_between) == null || tr),
          style: Kt,
          margins: qu(te.margins)
        }), Ft.show_between && vt && me.logError(K(new Error("line_spacing will be ignored due to the 'line_separator' property."), { level: "warn" }))) : e(6, Ft = null);
      } else
        e(6, Ft = null);
    if (t.$$.dirty[0] & /*separator, lineSeparator, orientation*/
    100 && e(14, le = yt || Ft ? Lm(ze, yt, Ft) : null), t.$$.dirty[1] & /*$jsonAspect*/
    524288) {
      const Kt = fe == null ? void 0 : fe.ratio;
      Kt && Un(Kt) ? e(7, It = Kt) : e(7, It = void 0);
    }
    if (t.$$.dirty[0] & /*orientation, contentHAlign, contentVAlign, layoutParams, aspect, childLayoutParams*/
    414 | t.$$.dirty[1] & /*wrap, $jsonWidth, $jsonHeight, supportWidthWrapContent, supportHeightWrapContent, stretchWidth, stretchHeight*/
    397184) {
      let Kt = {};
      ze === "overlap" && (Kt.overlapParent = !0), ze !== "horizontal" && (Kt.parentHAlign = R ? "start" : s1[Pe]), ze !== "vertical" && (Kt.parentVAlign = R ? "start" : l1[or]);
      const qt = (Ke == null ? void 0 : Ke.type) === "wrap_content" || (Ke == null ? void 0 : Ke.type) === "match_parent" && (Ue == null ? void 0 : Ue.parentHorizontalWrapContent), pr = !ee || ee.type === "wrap_content" || ee.type === "match_parent" && (Ue == null ? void 0 : Ue.parentVerticalWrapContent);
      !$ && qt && (Kt.parentHorizontalWrapContent = !0), !It && !ue && pr && (Kt.parentVerticalWrapContent = !0), qt || (Kt.parentContainerKnownWidth = !0), pr || (Kt.parentContainerKnownHeight = !0), Kt.stretchWidth = T, Kt.stretchHeight = X, ze === "horizontal" && (Kt.parentContainerOrientation = "horizontal"), ze === "vertical" && (Kt.parentContainerOrientation = "vertical"), R && (Kt.parentContainerWrap = !0), e(8, hr = xo(Kt, hr));
    }
    if (t.$$.dirty[1] & /*$jsonMaxWidth*/
    65536 && e(34, sr = (Ae == null ? void 0 : Ae.type) === "fixed"), t.$$.dirty[0] & /*orientation, contentVAlign, contentHAlign*/
    28 | t.$$.dirty[1] & /*$jsonResponsive, wrap, $jsonClipToBounds, isFixedContainer, responsiveMobileHeight, responsiveTabletHeight*/
    49384) {
      let Kt, qt;
      if (e(36, xt = void 0), e(37, G = void 0), se) {
        const pr = se == null ? void 0 : se.mobile, lt = se == null ? void 0 : se.tablet;
        if (pr != null && pr.orientation && (Kt = String(pr.orientation)), lt != null && lt.orientation && (qt = String(lt.orientation)), ((ot = pr == null ? void 0 : pr.height) == null ? void 0 : ot.type) === "fixed" && pr.height.value !== void 0) {
          const re = $r(pr.height.value, 0);
          e(36, xt = re > 0 ? re : void 0);
        }
        if (((jt = lt == null ? void 0 : lt.height) == null ? void 0 : jt.type) === "fixed" && lt.height.value !== void 0) {
          const re = $r(lt.height.value, 0);
          e(37, G = re > 0 ? re : void 0);
        }
      }
      e(12, Qt = {
        orientation: ze,
        valign: or,
        halign: Pe,
        wrap: R,
        overflow: M === !1 || M === 0 ? "visible" : void 0,
        "fixed-container": sr,
        "responsive-mobile-vertical": Kt === "vertical",
        "responsive-mobile-horizontal": Kt === "horizontal",
        "responsive-tablet-vertical": qt === "vertical",
        "responsive-tablet-horizontal": qt === "horizontal",
        "responsive-mobile-has-height": xt !== void 0,
        "responsive-tablet-has-height": G !== void 0
      });
    }
    t.$$.dirty[0] & /*separator, lineSeparator, orientation, aspect*/
    228 | t.$$.dirty[1] & /*itemSpacing, lineSpacing, responsiveMobileHeight, responsiveTabletHeight*/
    102 && e(13, C = {
      gap: yt || Ft || Me || vt ? Bm({
        orientation: ze,
        separator: yt,
        lineSeparator: Ft,
        itemSpacing: Me,
        lineSpacing: vt
      }) : void 0,
      "aspect-ratio": It,
      "--responsive-mobile-height": xt !== void 0 ? ae(xt) : void 0,
      "--responsive-tablet-height": G !== void 0 ? ae(G) : void 0
    });
  }, [
    me,
    Ue,
    ze,
    or,
    Pe,
    yt,
    Ft,
    It,
    hr,
    mr,
    kt,
    Qe,
    Qt,
    C,
    le,
    U,
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
    ye,
    Yt,
    Me,
    vt,
    sr,
    jr,
    xt,
    G,
    R,
    X,
    T,
    ue,
    $,
    o,
    n,
    M,
    se,
    Ae,
    ee,
    Ke,
    fe,
    te,
    Fe,
    oe,
    st,
    rt,
    ge,
    Ce,
    dt,
    nt,
    Vt
  ];
}
class u1 extends Rr {
  constructor(r) {
    super(), Or(this, r, a1, i1, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const c1 = "appkit-separator", f1 = "appkit-separator_orientation_horizontal", d1 = "appkit-separator_orientation_vertical", _1 = "appkit-separator__inner", $l = {
  separator: c1,
  separator_orientation_horizontal: f1,
  separator_orientation_vertical: d1,
  separator__inner: _1
};
function ja(t, r) {
  return t === "vertical" || t === "horizontal" ? t : r;
}
function rc(t) {
  let r, e;
  return {
    c() {
      r = Ve("span"), g(r, "class", $l.separator__inner), g(r, "style", e = er(
        /*style*/
        t[3]
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o & /*style*/
      8 && e !== (e = er(
        /*style*/
        n[3]
      )) && g(r, "style", e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function p1(t) {
  let r, e = (
    /*hasContent*/
    t[4] && rc(t)
  );
  return {
    c() {
      e && e.c(), r = Zt();
    },
    m(n, o) {
      e && e.m(n, o), q(n, r, o);
    },
    p(n, o) {
      /*hasContent*/
      n[4] ? e ? e.p(n, o) : (e = rc(n), e.c(), e.m(r.parentNode, r)) : e && (e.d(1), e = null);
    },
    d(n) {
      n && J(r), e && e.d(n);
    }
  };
}
function g1(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
        "separator",
        $l,
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
      $$slots: { default: [p1] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
    },
    p(n, [o]) {
      const i = {};
      o & /*mods*/
      4 && (i.cls = mt(
        "separator",
        $l,
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
      Lt(r, n);
    }
  };
}
function h1(t, r, e) {
  let n, o, i, s, a, l, u, c, f = E, _ = () => (f(), f = V(o, (O) => e(11, c = O)), o);
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
    2112 && e(6, p = ja(c == null ? void 0 : c.orientation, p)), t.$$.dirty & /*$jsonDelimiterStyle*/
    2048 && e(4, i = !(c != null && c.color && (c.color === "transparent" || c.color.length === 9 && c.color.indexOf("#00") === 0))), t.$$.dirty & /*$jsonDelimiterStyle, background*/
    2176 && e(7, k = gr(c == null ? void 0 : c.color, 1, k)), t.$$.dirty & /*orientation*/
    64 && e(9, s = p === "horizontal" ? "100%" : ae(1)), t.$$.dirty & /*orientation*/
    64 && e(8, a = p === "horizontal" ? ae(1) : "100%"), t.$$.dirty & /*background, width, height*/
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
class m1 extends Rr {
  constructor(r) {
    super(), Or(this, r, h1, g1, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const b1 = "appkit-image", y1 = "appkit-image__image", w1 = "appkit-image_error", k1 = "appkit-image_aspect", v1 = "appkit-image_loaded", ea = {
  image: b1,
  "image_is-width-content": "appkit-image_is-width-content",
  "image_is-height-content": "appkit-image_is-height-content",
  image__image: y1,
  image_error: w1,
  "image_is-rtl-mirror": "appkit-image_is-rtl-mirror",
  image_aspect: k1,
  "image_aspect-content": "appkit-image_aspect-content",
  image_loaded: v1,
  "divkit-image-appearance": "appkit-divkit-image-appearance",
  "image_before-appearance": "appkit-image_before-appearance"
};
function j1(t, r, e) {
  const n = t.content_alignment_horizontal, o = t.content_alignment_vertical;
  return n && n !== "left" && n !== "center" && n !== "right" && n !== "start" && n !== "end" || o && o !== "top" && o !== "center" && o !== "bottom" ? e : Wd({
    content_alignment_horizontal: n,
    content_alignment_vertical: o
  }, r);
}
function Kd(t) {
  return t.startsWith("data:") ? Xl(t) : `data:image/jpg;base64,${Xl(t)}`;
}
function C1(t, r, e) {
  let { componentContext: n } = r;
  const o = Tr(Kr);
  let i = null;
  function s() {
    i && i.update(n);
  }
  return ro(() => {
    n.fakeElement || (i = Ud(null, o, n));
  }), dl(s), an(() => {
    i && i.destroy();
  }), t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext);
  }, [n];
}
class Nn extends Rr {
  constructor(r) {
    super(), Or(this, r, C1, null, Sr, { componentContext: 0 });
  }
}
function E1(t) {
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function A1(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
        "image",
        ea,
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
          S1,
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
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = mt(
        "image",
        ea,
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
      Lt(r, n);
    }
  };
}
function nc(t) {
  let r, e, n, o, i, s, a, l;
  return {
    c() {
      r = Ve("img"), g(r, "class", ea.image__image), Qn(r.src, e = /*state*/
      t[2] === os ? ta : (
        /*imageUrl*/
        t[3]
      )) || g(r, "src", e), g(r, "loading", n = /*$jsonPreloadRequired*/
      t[31] || /*highPrority*/
      t[10] ? "eager" : "lazy"), g(r, "decoding", o = /*highPrority*/
      t[10] ? "sync" : "async"), g(r, "style", i = er({
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
        Be(
          r,
          "load",
          /*onLoad*/
          t[33]
        ),
        Be(
          r,
          "error",
          /*onError*/
          t[34]
        )
      ], a = !0);
    },
    p(u, c) {
      c[0] & /*state, imageUrl*/
      12 && !Qn(r.src, e = /*state*/
      u[2] === os ? ta : (
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
      122880 && i !== (i = er({
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
      u && J(r), t[70](null), a = !1, Br(l);
    }
  };
}
function S1(t) {
  let r = (
    /*svgFilterId*/
    t[5]
  ), e, n = nc(t);
  return {
    c() {
      n.c(), e = Zt();
    },
    m(o, i) {
      n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      i[0] & /*svgFilterId*/
      32 && Sr(r, r = /*svgFilterId*/
      o[5]) ? (n.d(1), n = nc(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && J(e), n.d(o);
    }
  };
}
function V1(t) {
  let r, e, n, o;
  const i = [A1, E1], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[9] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Zt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (ar(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ur()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
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
const ta = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", F1 = "empty://", I1 = "rgba(0,0,0,0.08)", fi = 0, Tl = 1, os = 2, oc = /\.gif($|\?)/i, D1 = "data:image/gif", ic = 'A Gif image was used for the "Image" component. The animation will be played on the web platform, but it does not match the behavior of other platforms.';
function T1(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, U, R, $, ue, T, X, le, C, M = E, P = () => (M(), M = V(O, (lt) => e(53, C = lt)), O), H, se, de = E, Ee = () => (de(), de = V(w, (lt) => e(55, se = lt)), w), Ae, pe = E, De = () => (pe(), pe = V(k, (lt) => e(56, Ae = lt)), k), ee, Te = E, We = () => (Te(), Te = V(p, (lt) => e(57, ee = lt)), p), Ke, ke = E, et = () => (ke(), ke = V(_, (lt) => e(58, Ke = lt)), _), fe, je = E, ce = () => (je(), je = V(m, (lt) => e(59, fe = lt)), m), te, _e = E, ie = () => (_e(), _e = V(h, (lt) => e(60, te = lt)), h), Fe, xe = E, Xe = () => (xe(), xe = V(f, (lt) => e(61, Fe = lt)), f), oe, Ye = E, Oe = () => (Ye(), Ye = V(c, (lt) => e(62, oe = lt)), c), st, at = E, ut = () => (at(), at = V(u, (lt) => e(63, st = lt)), u), kt, rt = E, Nt = () => (rt(), rt = V(l, (lt) => e(64, kt = lt)), l), ct, ge = E, he = () => (ge(), ge = V(a, (lt) => e(65, ct = lt)), a), pt, Ce = E, I = () => (Ce(), Ce = V(s, (lt) => e(66, pt = lt)), s), Ct, dt = E, At = () => (dt(), dt = V(R, (lt) => e(67, Ct = lt)), R), Tt, nt = E, Y = () => (nt(), nt = V(o, (lt) => e(68, Tt = lt)), o), Mt, Vt = E, Gt = () => (Vt(), Vt = V(i, (lt) => e(69, Mt = lt)), i), Jt, me = E, Ue = () => (me(), me = V(U, (lt) => e(31, Jt = lt)), U);
  t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => Te()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => je()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => at()), t.$$.on_destroy.push(() => rt()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => Ce()), t.$$.on_destroy.push(() => dt()), t.$$.on_destroy.push(() => nt()), t.$$.on_destroy.push(() => Vt()), t.$$.on_destroy.push(() => me());
  let { componentContext: _t } = r, { layoutParams: ye = void 0 } = r;
  const Qe = Tr(Kr), ze = Qe.direction;
  bn(t, ze, (lt) => e(54, H = lt));
  let or, Pe = fi, yt = !1, Ft = I1, It = !1, hr, Me = "", vt = "none", sr = "50% 50%", $t = !1, Yt = "center", mr, jr, Qt = "source_in", xt = "", G = "", ft = 0, Wt = 0, St = 0, br = "", Er = "", wr = !1, Ir = !1, zr = !1;
  function tr() {
    e(4, mr = void 0), e(40, $t = !1), e(38, vt = "none"), e(39, sr = "50% 50%"), e(43, Qt = "source_in"), e(51, Ir = !1), e(10, zr = !1);
  }
  function ot(lt) {
    e(2, Pe = fi);
  }
  function jt(lt) {
    e(39, sr = j1(lt, H, sr));
  }
  function Kt() {
    Pe === fi && e(2, Pe = Tl);
  }
  function qt() {
    Pe === fi && e(2, Pe = os);
  }
  an(() => {
    Qe.removeSvgFilter(jr, Qt);
  });
  function pr(lt) {
    Fr[lt ? "unshift" : "push"](() => {
      or = lt, e(8, or);
    });
  }
  return t.$$set = (lt) => {
    "componentContext" in lt && e(0, _t = lt.componentContext), "layoutParams" in lt && e(1, ye = lt.layoutParams);
  }, t.$$.update = () => {
    var lt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(52, n = _t.origJson), t.$$.dirty[1] & /*origJson*/
    2097152 && n && tr(), t.$$.dirty[0] & /*componentContext*/
    1 && Y(e(30, o = _t.getDerivedFromVars(_t.json.image_url))), t.$$.dirty[0] & /*componentContext*/
    1 && Gt(e(29, i = _t.getDerivedFromVars(_t.json.gif_url))), t.$$.dirty[0] & /*componentContext*/
    1 && I(e(28, s = _t.getDerivedFromVars(_t.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(27, a = _t.getDerivedFromVars(_t.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && Nt(e(26, l = _t.getDerivedFromVars(_t.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(25, u = _t.getDerivedFromVars(_t.json.preview_url))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(24, c = _t.getDerivedFromVars(_t.json.placeholder_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(23, f = _t.getDerivedFromVars(_t.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(22, _ = _t.getDerivedFromVars({
      content_alignment_horizontal: _t.json.content_alignment_horizontal,
      content_alignment_vertical: _t.json.content_alignment_vertical
    }))), t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(21, h = _t.getDerivedFromVars(_t.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(20, m = _t.getDerivedFromVars(_t.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && We(e(19, p = _t.getDerivedFromVars(_t.json.tint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(18, k = _t.getDerivedFromVars(_t.json.tint_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(17, w = _t.getDerivedFromVars(_t.json.appearance_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && P(e(16, O = _t.getDerivedFromVars(_t.json.filters))), t.$$.dirty[0] & /*componentContext*/
    1 && Ue(e(15, U = _t.getDerivedFromVars(_t.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && At(e(14, R = _t.getDerivedFromVars(_t.json.high_priority_preview_show))), t.$$.dirty[0] & /*componentContext, imageUrl*/
    9 | t.$$.dirty[1] & /*isEmpty*/
    16 | t.$$.dirty[2] & /*$jsonGifUrl, $jsonImageUrl*/
    192) {
      const re = _t.json.type === "gif";
      let bt = re ? Mt : Tt;
      e(35, yt = bt === F1), yt && (bt = ta), e(3, hr = bt), !re && hr && oc.test(hr) && _t.logError(K(new Error(ic), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*imageUrl*/
    8 && ot(), t.$$.dirty[1] & /*highPriorityPreview*/
    1048576 | t.$$.dirty[2] & /*$jsonHighPriorityPreviewShow*/
    32 && e(51, Ir = _n(Ct, Ir)), t.$$.dirty[0] & /*imageUrl, componentContext*/
    9 && (hr ? e(9, It = !1) : (e(9, It = !0), _t.logError(K(new Error(`Missing "${_t.json.type === "gif" ? "gif_url" : "image_url"}" for "${_t.json.type}"`))))), t.$$.dirty[2] & /*$jsonWidth*/
    16 && e(7, $ = (pt == null ? void 0 : pt.type) === "wrap_content"), t.$$.dirty[2] & /*$jsonHeight*/
    8 && e(6, ue = (ct == null ? void 0 : ct.type) === "wrap_content"), t.$$.dirty[0] & /*componentContext, state*/
    5 | t.$$.dirty[1] & /*isEmpty, highPriorityPreview*/
    1048592 | t.$$.dirty[2] & /*$jsonPreview, $jsonPreviewUrl*/
    6) {
      const re = _t.json.type === "gif", bt = kt, ir = st;
      (Pe === fi || Pe === os || yt) && (bt || ir) ? (e(37, Me = `url("${ir || Kd(bt || "")}")`), e(10, zr = Ir)) : (e(37, Me = ""), e(10, zr = !1)), !re && (ir && oc.test(ir) || bt && bt.startsWith(D1)) && _t.logError(K(new Error(ic), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*state*/
    4 | t.$$.dirty[1] & /*isEmpty, placeholderColor*/
    48 | t.$$.dirty[2] & /*$jsonPlaceholderColor*/
    1 && (Pe === fi || Pe === os || yt ? e(36, Ft = gr(oe, 1, Ft)) : e(36, Ft = "")), t.$$.dirty[1] & /*$jsonScale, scale*/
    1073741952 && e(38, vt = Hd(Fe) || vt), t.$$.dirty[1] & /*$jsonPosition*/
    134217728 && jt(Ke), t.$$.dirty[1] & /*$jsonA11y*/
    536870912 && e(13, T = (te == null ? void 0 : te.description) || ""), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAspect, aspectContent, $jsonPosition*/
    402653696) {
      e(41, Yt = "center");
      const re = fe == null ? void 0 : fe.ratio;
      re && Un(re) ? (e(4, mr = re), e(40, $t = ((lt = _t.json.width) == null ? void 0 : lt.type) === "wrap_content"), $t && (Ke.content_alignment_vertical === "top" ? e(41, Yt = "top") : Ke.content_alignment_vertical === "bottom" && e(41, Yt = "bottom"))) : e(4, mr = void 0);
    }
    if (t.$$.dirty[1] & /*$jsonTintColor, $jsonTintMode, tintMode, tintColor*/
    100669440) {
      const re = ee, bt = re ? gr(re) : void 0, ir = qd(Ae, Qt);
      (bt !== jr || ir !== Qt) && (Qe.removeSvgFilter(jr, Qt), e(5, xt = bt ? Qe.addSvgFilter(bt, ir) : ""), e(42, jr = bt), e(43, Qt = ir));
    }
    if (t.$$.dirty[1] & /*$jsonAppearanceAnimation*/
    16777216 && se && se.type === "fade") {
      const re = se;
      e(44, G = Gd(re.interpolator, "ease_in_out").replace(/_/g, "-")), e(47, St = $r(re.duration, 300)), e(46, Wt = $r(re.start_delay, 0)), e(45, ft = $r(re.alpha, 0));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonFilters, $direction*/
    12582912) {
      let re = "", bt = "";
      Array.isArray(C) && C.length && (re = Jd(C, _t.logError)), re && (bt = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"), e(48, br = re), e(49, Er = bt), e(50, wr = H === "rtl" && Array.isArray(C) && C.some((ir) => ir.type === "rtl_mirror"));
    }
    t.$$.dirty[0] & /*aspectRatio, isWidthContent, isHeightContent, state*/
    212 | t.$$.dirty[1] & /*aspectContent, aspectContentVAlign, animationInterpolator, isRTLMirror*/
    534016 && e(12, X = {
      aspect: mr !== void 0,
      "aspect-content": $t,
      "aspect-valign": Yt !== "center" ? Yt : void 0,
      "is-width-content": $,
      "is-height-content": ue,
      loaded: Pe === Tl,
      "before-appearance": !!G && Pe === fi,
      "is-rtl-mirror": wr
    }), t.$$.dirty[0] & /*aspectRatio, state, svgFilterId*/
    52 | t.$$.dirty[1] & /*backgroundImage, placeholderColor, scale, filterClipPath, position, filter, animationInterpolator, animationFadeStart, animationDelay, animationDuration*/
    516576 && e(11, le = {
      // Image preview shows, if loading of original image is failed
      "background-image": Me,
      "background-color": Me ? void 0 : Ft,
      "background-size": h0(vt),
      "clip-path": Er || void 0,
      "object-fit": vt,
      "object-position": sr,
      "aspect-ratio": mr,
      filter: [
        Pe === Tl && xt ? `url(#${xt})` : "",
        br
      ].filter(Boolean).join(" "),
      "--divkit-appearance-interpolator": G || void 0,
      "--divkit-appearance-fade-start": G ? ft : void 0,
      "--divkit-appearance-delay": G ? `${Wt}ms` : void 0,
      "--divkit-appearance-duration": G ? `${St}ms` : void 0
    });
  }, [
    _t,
    ye,
    Pe,
    hr,
    mr,
    xt,
    ue,
    $,
    or,
    It,
    zr,
    le,
    X,
    T,
    R,
    U,
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
    ze,
    Kt,
    qt,
    yt,
    Ft,
    Me,
    vt,
    sr,
    $t,
    Yt,
    jr,
    Qt,
    G,
    ft,
    Wt,
    St,
    br,
    Er,
    wr,
    Ir,
    n,
    C,
    H,
    se,
    Ae,
    ee,
    Ke,
    fe,
    te,
    Fe,
    oe,
    st,
    kt,
    ct,
    pt,
    Ct,
    Tt,
    Mt,
    pr
  ];
}
class sc extends Rr {
  constructor(r) {
    super(), Or(this, r, T1, V1, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const M1 = "appkit-grid", P1 = "appkit-grid_halign_start", N1 = "appkit-grid_halign_center", z1 = "appkit-grid_halign_end", O1 = "appkit-grid_valign_start", R1 = "appkit-grid_valign_center", L1 = "appkit-grid_valign_end", lc = {
  grid: M1,
  grid_halign_start: P1,
  grid_halign_center: N1,
  grid_halign_end: z1,
  grid_valign_start: O1,
  grid_valign_center: R1,
  grid_valign_end: L1
};
function ac(t) {
  return t > 0 && t < 1;
}
function uc(t) {
  return String(Math.ceil(t * 1e3) / 1e3);
}
function cc(t, r, e, n) {
  if (t.some(ac)) {
    const l = Math.max(...t.filter(ac).map((u) => 1 / u));
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
    i && !e[l] ? a[l] = `minmax(${ae(i * t[l] / s)},${uc(t[l])}fr)` : o || !e[l] && t[l] ? a[l] = `${uc(t[l])}fr` : a[l] = "auto";
  return a.join(" ");
}
function fc(t, r, e) {
  const n = t.slice();
  return n[33] = r[e], n;
}
function B1(t) {
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function H1(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
        "grid",
        lc,
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
      $$slots: { default: [W1] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = mt(
        "grid",
        lc,
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
      Lt(r, n);
    }
  };
}
function dc(t) {
  let r, e;
  return r = new Gn({
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function W1(t) {
  let r, e, n = nr(
    /*resultItems*/
    t[5]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = dc(fc(t, n, s));
  const i = (s) => Q(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = Zt();
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
          const u = fc(s, n, l);
          o[l] ? (o[l].p(u, a), B(o[l], 1)) : (o[l] = dc(u), o[l].c(), B(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (ar(), l = n.length; l < o.length; l += 1)
          i(l);
        ur();
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
      s && J(r), on(o, s);
    }
  };
}
function U1(t) {
  let r, e, n, o;
  const i = [H1, B1], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Zt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (ar(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ur()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
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
function G1(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _ = E, h = () => (_(), _ = V(a, (ce) => e(27, f = ce)), a), m, p = E, k = () => (p(), p = V(s, (ce) => e(28, m = ce)), s), w, O = E, U = () => (O(), O = V(H, (ce) => e(29, w = ce)), H), R, $ = E, ue = () => ($(), $ = V(i, (ce) => e(30, R = ce)), i);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => $());
  let { componentContext: T } = r, { layoutParams: X = void 0 } = r;
  const C = Tr(Kr).direction;
  bn(t, C, (ce) => e(26, c = ce));
  let M = !1, P = 0, H, se, de = [], Ee = [], Ae = [], pe = [], De = [], ee = [], Te = 0, We = "start", Ke = "start", ke = [], et;
  function fe() {
    e(3, M = !1), e(13, P = 0), e(21, We = "start"), e(22, Ke = "start");
  }
  function je(ce) {
    e(0, T = e(23, et = {
      ...T,
      json: {
        ...T.json,
        items: ce.filter(zo)
      }
    }));
  }
  return an(() => {
    ke.forEach((ce) => {
      ce.destroy();
    });
  }), t.$$set = (ce) => {
    "componentContext" in ce && e(0, T = ce.componentContext), "layoutParams" in ce && e(1, X = ce.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(25, n = T.origJson), t.$$.dirty[0] & /*origJson*/
    33554432 && n && fe(), t.$$.dirty[0] & /*componentContext*/
    1 && e(24, o = Array.isArray(T.json.items) && T.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(10, i = T.getDerivedFromVars(T.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && k(e(9, s = T.getDerivedFromVars(T.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && h(e(8, a = T.getDerivedFromVars(T.json.content_alignment_horizontal))), t.$$.dirty[0] & /*$jsonColumnCount, columnCount, componentContext*/
    1073750017 && (e(13, P = Wn(R, P)), P < 1 ? (e(3, M = !0), T.logError(K(new Error("Incorrect column_count for grid")))) : e(3, M = !1)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonItems*/
    25165829) {
      const ce = new Set(ke), te = /* @__PURE__ */ new Map();
      et === T && ke.forEach((_e) => {
        te.set(_e.json, _e);
      }), e(2, ke = o.map((_e, ie) => {
        const Fe = te.get(_e);
        return Fe ? (ce.delete(Fe), Fe) : T.produceChildContext(_e, { path: ie });
      }));
      for (const _e of ce)
        _e.destroy();
      e(23, et = T);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    5) {
      let ce = [];
      ke.forEach((te) => {
        ce.push(T.getDerivedFromVars({
          rowSpan: te.json.row_span,
          columnSpan: te.json.column_span,
          width: te.json.width,
          height: te.json.height
        }));
      }), U(e(4, H = Ji(ce, (te) => [...te])));
    }
    if (t.$$.dirty[0] & /*items, $childStore, columnCount, columnsWeight, rowsWeight, columnsMinWidth, rowsMinHeight*/
    537124868) {
      const ce = {};
      let te = 0, _e = 0;
      e(14, de = []), e(15, Ee = []), e(16, Ae = []), e(17, pe = []), e(18, De = []), e(19, ee = []);
      let ie = 0;
      e(5, se = ke.map((Fe, xe) => {
        var rt, Nt, ct, ge;
        const Xe = w[xe], oe = Math.min(P, Number(Xe.columnSpan) || 1), Ye = Number(Xe.rowSpan) || 1, Oe = ((rt = Xe.width) == null ? void 0 : rt.type) === "match_parent" ? Number(Xe.width.weight || 1) / oe : 0, st = ((Nt = Xe.height) == null ? void 0 : Nt.type) === "match_parent" ? Number(Xe.height.weight || 1) / Ye : 0, at = ((ct = Xe.width) == null ? void 0 : ct.type) === "fixed" && Xe.width.value ? Number(Xe.width.value) / oe : 0, ut = ((ge = Xe.height) == null ? void 0 : ge.type) === "fixed" && Xe.height.value ? Number(Xe.height.value) / Ye : 0;
        for (; ; ) {
          let he = !0;
          e: for (let pt = te; pt < te + oe; ++pt)
            for (let Ce = _e; Ce < _e + Ye; ++Ce)
              if (ce[pt + "_" + Ce]) {
                he = !1;
                break e;
              }
          if (he)
            break;
          ++te, te > P - oe && (te = 0, ++_e);
        }
        const kt = { x: te, y: _e, colSpan: oe, rowSpan: Ye };
        for (let he = te; he < te + oe; ++he)
          for (let pt = _e; pt < _e + Ye; ++pt)
            ce[he + "_" + pt] = !0, (!de[he] || de[he] < Oe) && e(14, de[he] = Oe, de), (!Ee[pt] || Ee[pt] < st) && e(15, Ee[pt] = st, Ee), oe === 1 && (!Ae[he] || Ae[he] < at) && e(16, Ae[he] = at, Ae), Ye === 1 && (!pe[pt] || pe[pt] < ut) && e(17, pe[pt] = ut, pe), oe === 1 && at && e(18, De[he] = at, De), Ye === 1 && ut && e(19, ee[he] = ut, ee);
        return ie = Math.max(ie, _e + Ye), {
          componentContext: Fe,
          layoutParams: { gridArea: kt }
        };
      })), e(20, Te = Math.max(_e + 1, ie));
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    270532608 && e(21, We = yl(m, We)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    205520896 && e(22, Ke = bl(f, c, Ke)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    6291456 && e(7, l = {
      valign: We,
      halign: Ke
    }), t.$$.dirty[0] & /*columnsWeight, columnsMinWidth, columnsWidth, columnCount, rowsWeight, rowsMinHeight, rowsHeight, rowCount*/
    2088960 && e(6, u = {
      "grid-template-columns": cc(de, Ae, De, P),
      "grid-template-rows": cc(Ee, pe, ee, Te)
    });
  }, [
    T,
    X,
    ke,
    M,
    H,
    se,
    u,
    l,
    a,
    s,
    i,
    C,
    je,
    P,
    de,
    Ee,
    Ae,
    pe,
    De,
    ee,
    Te,
    We,
    Ke,
    et,
    o,
    n,
    c,
    f,
    m,
    w,
    R
  ];
}
class J1 extends Rr {
  constructor(r) {
    super(), Or(this, r, G1, U1, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const q1 = "appkit-outer_width_content", Y1 = "appkit-outer_height_content", K1 = "appkit-gallery", X1 = "appkit-gallery__scroller", Z1 = "appkit-gallery_scrollbar_none", Q1 = "appkit-gallery_orientation_horizontal", x1 = "appkit-gallery_orientation_vertical", $1 = "appkit-gallery__items", eb = "appkit-gallery__arrow", tb = "appkit-gallery__gap", co = {
  outer_width_content: q1,
  outer_height_content: Y1,
  gallery: K1,
  gallery__scroller: X1,
  gallery_scrollbar_none: Z1,
  gallery_orientation_horizontal: Q1,
  gallery_orientation_vertical: x1,
  "gallery_scroll-snap": "appkit-gallery_scroll-snap",
  "gallery__items-grid": "appkit-gallery__items-grid",
  gallery__items: $1,
  gallery__arrow: eb,
  "gallery__arrow-icon-path": "appkit-gallery__arrow-icon-path",
  gallery__gap: tb
}, rb = "appkit-arrow", nb = "appkit-arrow__icon", ob = "appkit-arrow_left", ib = "appkit-arrow_right", go = {
  arrow: rb,
  arrow__icon: nb,
  arrow_left: ob,
  arrow_right: ib
};
function sb(t, r) {
  return t === "start" || t === "center" || t === "end" ? t : r;
}
function lb(t) {
  const r = [];
  let e = t[0], n = 1;
  for (let o = 1; o <= t.length; o++)
    t[o] !== e ? (r.push(n > 1 ? `repeat(${n}, ${e})` : e), e = t[o], n = 1) : n++;
  return r.join(" ");
}
function So(t, r) {
  let e = t % r;
  return e < 0 && (e += r), e;
}
const { Boolean: Xd, window: ab } = Po;
function _c(t, r, e) {
  const n = t.slice();
  return n[86] = r[e], n[87] = r, n[88] = e, n;
}
function pc(t, r, e) {
  const n = t.slice();
  return n[89] = r[e], n;
}
function gc(t) {
  let r;
  return {
    c() {
      r = Ve("div"), g(r, "class", co.gallery__gap), D(
        r,
        "width",
        /*orientation*/
        t[4] === "horizontal" ? (
          /*gridGap*/
          t[12]
        ) : void 0
      ), D(
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
      4112 && D(
        r,
        "width",
        /*orientation*/
        e[4] === "horizontal" ? (
          /*gridGap*/
          e[12]
        ) : void 0
      ), n[0] & /*orientation, gridGap*/
      4112 && D(
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
function hc(t) {
  let r, e, n, o = (
    /*item*/
    t[89].hasGapBefore && gc(t)
  );
  return e = new Gn({
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
      o && o.c(), r = cr(), Bt(e.$$.fragment);
    },
    m(i, s) {
      o && o.m(i, s), q(i, r, s), Rt(e, i, s), n = !0;
    },
    p(i, s) {
      /*item*/
      i[89].hasGapBefore ? o ? o.p(i, s) : (o = gc(i), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
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
      i && J(r), o && o.d(i), Lt(e, i);
    }
  };
}
function mc(t) {
  let r, e, n, o, i, s, a = (
    /*rowIndex*/
    t[88]
  ), l, u = nr(
    /*itemsRow*/
    t[86]
  ), c = [];
  for (let m = 0; m < u.length; m += 1)
    c[m] = hc(pc(t, u, m));
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
      r = Ve("div");
      for (let m = 0; m < c.length; m += 1)
        c[m].c();
      e = cr(), n = Ve("div"), i = cr(), g(n, "class", co.gallery__gap), g(n, "style", o = er(
        /*lastPaddingSize*/
        t[13]
      )), g(r, "class", co.gallery__items), g(r, "style", s = er(
        /*columnStyle*/
        t[16]
      ));
    },
    m(m, p) {
      q(m, r, p);
      for (let k = 0; k < c.length; k += 1)
        c[k] && c[k].m(r, null);
      ht(r, e), ht(r, n), ht(r, i), _(), l = !0;
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
          const w = pc(t, u, k);
          c[k] ? (c[k].p(w, p), B(c[k], 1)) : (c[k] = hc(w), c[k].c(), B(c[k], 1), c[k].m(r, e));
        }
        for (ar(), k = u.length; k < c.length; k += 1)
          f(k);
        ur();
      }
      (!l || p[0] & /*lastPaddingSize*/
      8192 && o !== (o = er(
        /*lastPaddingSize*/
        t[13]
      ))) && g(n, "style", o), (!l || p[0] & /*columnStyle*/
      65536 && s !== (s = er(
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
      c = c.filter(Xd);
      for (let p = 0; p < c.length; p += 1)
        Q(c[p]);
      l = !1;
    },
    d(m) {
      m && J(r), on(c, m), h();
    }
  };
}
function bc(t) {
  let r, e, n = (
    /*hasScrollLeft*/
    t[10] && /*shouldCheckArrows*/
    t[8] && yc(t)
  ), o = (
    /*hasScrollRight*/
    t[11] && /*shouldCheckArrows*/
    t[8] && wc(t)
  );
  return {
    c() {
      n && n.c(), r = cr(), o && o.c(), e = Zt();
    },
    m(i, s) {
      n && n.m(i, s), q(i, r, s), o && o.m(i, s), q(i, e, s);
    },
    p(i, s) {
      /*hasScrollLeft*/
      i[10] && /*shouldCheckArrows*/
      i[8] ? n ? n.p(i, s) : (n = yc(i), n.c(), n.m(r.parentNode, r)) : n && (n.d(1), n = null), /*hasScrollRight*/
      i[11] && /*shouldCheckArrows*/
      i[8] ? o ? o.p(i, s) : (o = wc(i), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null);
    },
    d(i) {
      i && (J(r), J(e)), n && n.d(i), o && o.d(i);
    }
  };
}
function yc(t) {
  let r, e, n, o = !/*leftClass*/
  t[32] && ub();
  return {
    c() {
      r = Ve("div"), o && o.c(), g(
        r,
        "class",
        /*leftClass*/
        t[32] || `${co.gallery__arrow} ${go.arrow} ${go.arrow_left}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = Be(
        r,
        "click",
        /*click_handler*/
        t[74]
      ), e = !0);
    },
    p: E,
    d(i) {
      i && J(r), o && o.d(), e = !1, n();
    }
  };
}
function ub(t) {
  let r, e;
  return {
    c() {
      r = xr("svg"), e = xr("path"), g(e, "class", co["gallery__arrow-icon-path"]), g(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", go.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), ht(r, e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function wc(t) {
  let r, e, n, o = !/*rightClass*/
  t[33] && cb();
  return {
    c() {
      r = Ve("div"), o && o.c(), g(
        r,
        "class",
        /*rightClass*/
        t[33] || `${co.gallery__arrow} ${go.arrow} ${go.arrow_right}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = Be(
        r,
        "click",
        /*click_handler_1*/
        t[75]
      ), e = !0);
    },
    p: E,
    d(i) {
      i && J(r), o && o.d(), e = !1, n();
    }
  };
}
function cb(t) {
  let r, e;
  return {
    c() {
      r = xr("svg"), e = xr("path"), g(e, "class", co["gallery__arrow-icon-path"]), g(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", go.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), ht(r, e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function fb(t) {
  let r, e, n, o, i, s, a, l, u, c, f = nr(
    /*itemsGrid*/
    t[18]
  ), _ = [];
  for (let p = 0; p < f.length; p += 1)
    _[p] = mc(_c(t, f, p));
  const h = (p) => Q(_[p], 1, 1, () => {
    _[p] = null;
  });
  let m = (
    /*orientation*/
    t[4] === "horizontal" && bc(t)
  );
  return {
    c() {
      r = Ve("div"), e = Ve("div");
      for (let p = 0; p < _.length; p += 1)
        _[p].c();
      s = cr(), m && m.c(), a = Zt(), g(e, "class", co["gallery__items-grid"]), g(e, "style", n = er(
        /*gridStyle*/
        t[17]
      )), g(r, "class", o = co.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? Cr["root_restrict-scroll"] : "")), g(r, "style", i = er(
        /*scrollerStyle*/
        t[5]
      ));
    },
    m(p, k) {
      q(p, r, k), ht(r, e);
      for (let w = 0; w < _.length; w += 1)
        _[w] && _[w].m(e, null);
      t[72](e), t[73](r), q(p, s, k), m && m.m(p, k), q(p, a, k), l = !0, u || (c = Be(r, "scroll", function() {
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
          const O = _c(t, f, w);
          _[w] ? (_[w].p(O, k), B(_[w], 1)) : (_[w] = mc(O), _[w].c(), B(_[w], 1), _[w].m(e, null));
        }
        for (ar(), w = f.length; w < _.length; w += 1)
          h(w);
        ur();
      }
      (!l || k[0] & /*gridStyle*/
      131072 && n !== (n = er(
        /*gridStyle*/
        t[17]
      ))) && g(e, "style", n), (!l || k[0] & /*$jsonRestrictParentScroll*/
      1073741824 && o !== (o = co.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? Cr["root_restrict-scroll"] : ""))) && g(r, "class", o), (!l || k[0] & /*scrollerStyle*/
      32 && i !== (i = er(
        /*scrollerStyle*/
        t[5]
      ))) && g(r, "style", i), /*orientation*/
      t[4] === "horizontal" ? m ? m.p(t, k) : (m = bc(t), m.c(), m.m(a.parentNode, a)) : m && (m.d(1), m = null);
    },
    i(p) {
      if (!l) {
        for (let k = 0; k < f.length; k += 1)
          B(_[k]);
        l = !0;
      }
    },
    o(p) {
      _ = _.filter(Xd);
      for (let k = 0; k < _.length; k += 1)
        Q(_[k]);
      l = !1;
    },
    d(p) {
      p && (J(r), J(s), J(a)), on(_, p), t[72](null), t[73](null), m && m.d(p), u = !1, c();
    }
  };
}
function db(t) {
  let r, e, n, o;
  return r = new yn({
    props: {
      cls: mt(
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
      $$slots: { default: [fb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(i, s) {
      Rt(r, i, s), e = !0, n || (o = Be(ab, "resize", function() {
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
      32768 && (a.cls = mt(
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
      e || (B(r.$$.fragment, i), e = !0);
    },
    o(i) {
      Q(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Lt(r, i), n = !1, o();
    }
  };
}
function _b(t, r, e) {
  let n = 0, o = [], i = [];
  for (let s = 0; s < t.length; ++s)
    o[n] || (o[n] = []), o[n].push({
      index: s,
      hasGapBefore: i[n] && r[s].visibility !== "gone",
      componentContext: t[s]
    }), !i[n] && r[s].visibility !== "gone" && (i[n] = !0), ++n >= e && (n = 0);
  return o;
}
function pb(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, U, R, $, ue, T, X, le = E, C = () => (le(), le = V(p, (re) => e(59, X = re)), p), M, P = E, H = () => (P(), P = V(m, (re) => e(60, M = re)), m), se, de = E, Ee = () => (de(), de = V(_, (re) => e(61, se = re)), _), Ae, pe = E, De = () => (pe(), pe = V(Ft, (re) => e(62, Ae = re)), Ft), ee, Te = E, We = () => (Te(), Te = V(f, (re) => e(63, ee = re)), f), Ke, ke = E, et = () => (ke(), ke = V(c, (re) => e(64, Ke = re)), c), fe, je = E, ce = () => (je(), je = V(u, (re) => e(65, fe = re)), u), te, _e = E, ie = () => (_e(), _e = V(l, (re) => e(66, te = re)), l), Fe, xe = E, Xe = () => (xe(), xe = V(a, (re) => e(67, Fe = re)), a), oe, Ye, Oe = E, st = () => (Oe(), Oe = V(i, (re) => e(69, Ye = re)), i), at, ut = E, kt = () => (ut(), ut = V(s, (re) => e(70, at = re)), s), rt, Nt = E, ct = () => (Nt(), Nt = V(h, (re) => e(30, rt = re)), h);
  t.$$.on_destroy.push(() => le()), t.$$.on_destroy.push(() => P()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => Te()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => je()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => ut()), t.$$.on_destroy.push(() => Nt());
  let { componentContext: ge } = r, { layoutParams: he = void 0 } = r;
  const pt = Tr(Kr), Ce = pt.direction;
  bn(t, Ce, (re) => e(58, T = re));
  let I, Ct = [], dt = !1, At = !1, Tt = null, nt, Y = !1;
  const Mt = pt.getCustomization("galleryLeftClass"), Vt = pt.getCustomization("galleryRightClass");
  let Gt, Jt = 1, me = "horizontal", Ue = "start", _t, ye = 8, Qe, ze, or = "", Pe, yt = [], Ft, It = {}, hr = !1, Me = {}, vt = 0;
  function sr() {
    e(42, Jt = 1), e(4, me = "horizontal"), e(43, Ue = "start"), e(44, ye = 8), e(47, or = "");
  }
  let $t = null, Yt = null;
  function mr() {
    var ir, yr;
    const re = Wn(at, Jt), bt = ge.json.responsive;
    if (!bt || typeof bt != "object") {
      e(42, Jt = re);
      return;
    }
    $t != null && $t.matches && ((ir = bt.mobile) != null && ir.column_count) ? e(42, Jt = bt.mobile.column_count) : Yt != null && Yt.matches && ((yr = bt.tablet) != null && yr.column_count) ? e(42, Jt = bt.tablet.column_count) : e(42, Jt = re);
  }
  function jr(re) {
    e(0, ge = e(53, G = {
      ...ge,
      json: {
        ...ge.json,
        items: re.filter(zo)
      }
    }));
  }
  const Qt = pt.isDesktop;
  bn(t, Qt, (re) => e(68, oe = re));
  let xt = [], G;
  function ft() {
    if (!I)
      return;
    let re = I.scrollLeft;
    T === "rtl" && (re *= -1);
    const bt = I.scrollWidth, ir = I.offsetWidth;
    T === "ltr" ? (e(10, dt = re > 2), e(11, At = re + ir < bt - 2)) : (e(11, At = re > 2), e(10, dt = re + ir < bt - 2));
  }
  const Wt = va(ft, 50);
  function St(re) {
    I.scroll({
      left: I.scrollLeft + I.offsetWidth * 0.75 * (re === "right" ? 1 : -1),
      behavior: "smooth"
    });
  }
  function br() {
    let re = [], bt = Ct[0].children.length;
    for (let ir = 0; ir < bt; ir += 2)
      for (let yr = 0; yr < Jt; ++yr) {
        const fr = Ct[yr].children[ir];
        fr && re.push(fr);
      }
    return re;
  }
  function Er(re, bt = !0) {
    const yr = me === "horizontal" ? "left" : "top";
    I.scroll({
      [yr]: re,
      behavior: bt ? "smooth" : "instant"
    });
  }
  function wr(re, bt, { animated: ir = !0, extraOffset: yr = 0, overflow: fr = "clamp" } = {}) {
    const v = me === "horizontal", ne = v ? "offsetLeft" : "offsetTop";
    bt > re.length - 1 ? bt = fr === "ring" ? So(bt, re.length) : re.length - 1 : bt < 0 && (bt = fr === "ring" ? So(bt, re.length) : 0);
    const d = re[bt];
    if (d) {
      let j;
      if (T === "ltr" || !v)
        j = d[ne] + 0.01 - ye / 2;
      else {
        const Ie = I.offsetWidth;
        j = d[ne] + d.offsetWidth + 0.01 - ye / 2 - Ie;
      }
      if (yr) {
        j += yr;
        const Ie = v ? I.scrollWidth - I.offsetWidth : I.scrollHeight - I.offsetHeight;
        j > Ie && (fr === "clamp" ? j = Ie : fr === "ring" && (j = So(j, Ie))), j < 0 && (fr === "clamp" ? j = 0 : fr === "ring" && (j = So(j, Ie)));
      }
      Er(j, ir);
    }
  }
  function Ir(re, { overflow: bt = "clamp", animated: ir = !0 } = {}) {
    const yr = me === "horizontal", fr = T === "ltr" || !yr ? 1 : -1, v = yr ? I.scrollLeft : I.scrollTop, ne = yr ? I.scrollWidth - I.offsetWidth : I.scrollHeight - I.offsetHeight;
    let d = v * fr + re;
    d > ne ? bt === "clamp" ? d = ne : bt === "ring" && (d = So(d, ne)) : d < 0 && (bt === "clamp" ? d = 0 : bt === "ring" && (d = So(d, ne))), Er(d * fr, ir);
  }
  function zr(re, bt) {
    return me === "horizontal" ? bt.right > re.left && re.right > bt.left : bt.bottom > re.top && re.bottom > bt.top;
  }
  function tr(re, bt) {
    return me === "horizontal" ? bt.left >= re.left && bt.right <= re.right : bt.top >= re.top && bt.bottom <= re.bottom;
  }
  function ot(re) {
    const bt = br(), ir = I.getBoundingClientRect(), yr = bt.findIndex((ne) => tr(ir, ne.getBoundingClientRect()));
    if (yr !== -1)
      return yr;
    const fr = bt.map((ne) => zr(ir, ne.getBoundingClientRect())), v = fr.findIndex(Boolean);
    return v !== -1 ? re === "prev" && fr.filter(Boolean).length === 2 ? v + 1 : v : re === "prev" ? 1 : bt.length - 2;
  }
  ro(() => {
    if (e(40, Y = !0), ft(), vt) {
      const re = br();
      wr(re, vt, { animated: !1 });
    }
  }), an(() => {
    e(40, Y = !1), xt.forEach((re) => {
      re.destroy();
    }), Gt && !ge.fakeElement && (pt.unregisterInstance(Gt), e(41, Gt = void 0)), $t && $t.removeEventListener("change", mr), Yt && Yt.removeEventListener("change", mr);
  });
  function jt(re, bt) {
    Fr[re ? "unshift" : "push"](() => {
      Ct[bt] = re, e(9, Ct);
    });
  }
  function Kt(re) {
    Fr[re ? "unshift" : "push"](() => {
      nt = re, e(3, nt);
    });
  }
  function qt(re) {
    Fr[re ? "unshift" : "push"](() => {
      I = re, e(2, I);
    });
  }
  const pr = () => St("left"), lt = () => St("right");
  return t.$$set = (re) => {
    "componentContext" in re && e(0, ge = re.componentContext), "layoutParams" in re && e(1, he = re.layoutParams);
  }, t.$$.update = () => {
    var re, bt, ir, yr, fr, v;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(57, n = ge.origJson), t.$$.dirty[1] & /*origJson*/
    67108864 && n && sr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(56, o = Array.isArray(ge.json.items) && ge.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(29, i = typeof ((re = ge.json.item_builder) == null ? void 0 : re.data) == "string" ? ge.getDerivedFromVars((bt = ge.json.item_builder) == null ? void 0 : bt.data, void 0, !0) : (ir = ge.json.item_builder) != null && ir.data ? $o(ge.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && kt(e(28, s = ge.getDerivedFromVars(ge.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(27, a = ge.getDerivedFromVars(ge.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*columns, mobileQuery, tabletQuery*/
    3147776 | t.$$.dirty[2] & /*$jsonColumnCount*/
    256) {
      const ne = Wn(at, Jt), d = ge.json.responsive;
      d && typeof d == "object" && typeof window < "u" ? ($t || (e(51, $t = window.matchMedia("(max-width: 767px)")), e(52, Yt = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), $t.addEventListener("change", mr), Yt.addEventListener("change", mr)), mr()) : e(42, Jt = ne);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(26, l = ge.getDerivedFromVars(ge.json.cross_content_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(25, u = ge.getDerivedFromVars(ge.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(24, c = ge.getDerivedFromVars(ge.json.cross_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && We(e(23, f = ge.getDerivedFromVars(ge.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(22, _ = ge.getDerivedFromVars(ge.json.scroll_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(21, h = ge.getDerivedFromVars(ge.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && H(e(20, m = ge.getDerivedFromVars(ge.json.scrollbar))), t.$$.dirty[0] & /*componentContext*/
    1 && C(e(19, p = ge.getDerivedFromVars(ge.json.default_item))), t.$$.dirty[0] & /*componentContext, items*/
    129 | t.$$.dirty[1] & /*jsonItems, prevContext*/
    37748736 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    128) {
      let ne = [];
      if (ge.json.item_builder && Array.isArray(Ye) && Array.isArray(ge.json.item_builder.prototypes)) {
        const Re = ge.json.item_builder;
        ne = wl(Ye, pt, ge, Re);
      } else
        ne = (Array.isArray(o) && o || []).map((Re, Pt) => ({
          div: Re,
          key: Re.id || { index: Pt, data: Re }
        }));
      const d = new Set(xt), j = /* @__PURE__ */ new Map();
      let Ie = !1;
      G === ge && xt.forEach((Re) => {
        Re.key && (typeof Re.key == "string" && j.has(Re.key) ? Ie || (Ie = !0, ge.logError(K(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: Re.key } }))) : j.set(
          typeof Re.key == "string" ? Re.key : Re.key.index,
          Re
        ));
      }), e(7, xt = ne.map((Re, Pt) => {
        let L = !Ie && j.get(Re.id), Dt = j.get(Pt);
        return !L && !Re.id && typeof Re.key == "object" && typeof (Dt == null ? void 0 : Dt.key) == "object" && qi(Dt.key.data, Re.key.data) && (L = Dt), L ? (d.delete(L), L) : ge.produceChildContext(Re.div, {
          path: Pt,
          variables: Re.vars,
          id: Re.id,
          key: Re.key
        });
      }));
      for (const Re of d)
        Re.destroy();
      e(53, G = ge);
    }
    if (t.$$.dirty[1] & /*mounted*/
    512 | t.$$.dirty[2] & /*$isDesktop*/
    64 && e(8, k = oe && Y), t.$$.dirty[0] & /*shouldCheckArrows, itemsGridElem*/
    264 | t.$$.dirty[1] & /*resizeObserver*/
    256 && (k ? typeof ResizeObserver < "u" && (e(39, Tt = new ResizeObserver(() => {
      Wt();
    })), Tt.observe(nt)) : Tt && (Tt.disconnect(), e(39, Tt = null))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[2] & /*$jsonOrientation*/
    32 && e(4, me = ja(Fe, me)), t.$$.dirty[1] & /*align*/
    4096 | t.$$.dirty[2] & /*$jsonCrossContentAlignment*/
    16 && e(43, Ue = sb(te, Ue)), t.$$.dirty[1] & /*itemSpacing*/
    8192 | t.$$.dirty[2] & /*$jsonItemSpacing*/
    8 && (e(44, ye = $r(fe, ye)), e(12, _t = ae(ye))), t.$$.dirty[1] & /*itemSpacing, crossSpacing*/
    40960 | t.$$.dirty[2] & /*$jsonCrossSpacing*/
    4 && (e(46, ze = $r(Ke, ye)), e(45, Qe = ae(ze))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*$direction, padding*/
    134283264 | t.$$.dirty[2] & /*$jsonPaddings*/
    2) {
      e(47, or = as(ee, T, or));
      const ne = me === "horizontal" ? (fr = (yr = ee == null ? void 0 : ee.end) != null ? yr : ee == null ? void 0 : ee[T === "ltr" ? "right" : "left"]) != null ? fr : 0 : (v = ee == null ? void 0 : ee.bottom) != null ? v : 0, d = ae(ne);
      e(13, Pe = {
        width: me === "horizontal" ? d : "1px",
        height: me === "horizontal" ? "1px" : d,
        "margin-right": me === "horizontal" && T === "ltr" ? "-" + d : void 0,
        "margin-left": me === "horizontal" && T === "rtl" ? "-" + d : void 0,
        "margin-bottom": me === "vertical" ? "-" + d : void 0
      });
    }
    if (t.$$.dirty[0] & /*items, orientation*/
    144) {
      let ne = [];
      xt.forEach((d) => {
        const j = me === "horizontal" ? "width" : "height";
        ne.push(d.getDerivedFromVars({
          size: d.json[j],
          visibility: d.json.visibility
        }));
      }), De(e(14, Ft = Ji(ne, (d) => [...d])));
    }
    if (t.$$.dirty[0] & /*items*/
    128 | t.$$.dirty[1] & /*columns*/
    2048 | t.$$.dirty[2] & /*$childStore*/
    1 && e(18, w = _b(xt, Ae, Jt)), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*columns, templateSizes*/
    133120 | t.$$.dirty[2] & /*$childStore*/
    1 && (e(48, yt = []), Jt > 1 || Ae.forEach((ne, d) => {
      var j;
      ne.visibility !== "gone" && (!ne.size && me === "horizontal" || ((j = ne.size) == null ? void 0 : j.type) === "match_parent" ? yt.push("100%") : yt.push("max-content"), d + 1 < Ae.length && yt.push("auto"));
    }), yt.push("auto")), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, O = ge.json.fixed_columns === !0), t.$$.dirty[0] & /*orientation, scrollerStyle, childLayoutParams*/
    112 | t.$$.dirty[1] & /*align, $jsonScrollMode, itemSpacing*/
    1073754112) {
      const ne = {};
      let d = {};
      if (e(49, hr = !1), d.treatMatchParentAs100 = !0, me === "horizontal" ? (d.parentVAlign = Ue, d.parentContainerOrientation = "horizontal") : (d.parentHAlign = Ue, d.parentContainerOrientation = "vertical"), se === "paging") {
        e(49, hr = !0), d.scrollSnap = "start";
        const j = me === "horizontal" ? "scroll-padding-left" : "scroll-padding-top";
        ne[j] = ae(ye / 2);
      }
      e(5, It = xo(ne, It)), e(6, Me = xo(d, Me));
    }
    t.$$.dirty[0] & /*orientation*/
    16 && e(54, U = me === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*padding, crossGridGap, fixedColumns, columns*/
    16861184 && e(17, R = {
      padding: or,
      "grid-gap": Qe,
      ...O && Jt > 1 && me === "vertical" ? {
        display: "grid",
        "grid-template-columns": `repeat(${Jt}, 1fr)`
      } : {}
    }), t.$$.dirty[1] & /*gridTemplate, templateSizes*/
    8519680 && e(16, $ = {
      [U]: lb(yt)
    }), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*scrollSnap, $jsonScrollbar*/
    537133056 && e(15, ue = {
      orientation: me,
      "scroll-snap": hr,
      scrollbar: M === "auto" ? "auto" : "none"
    }), t.$$.dirty[1] & /*$jsonDefaultItem, defaultItem*/
    268959744 && e(50, vt = $r(X, vt)), t.$$.dirty[0] & /*componentContext*/
    1 && ge.json && Wt(), t.$$.dirty[0] & /*componentContext, orientation, scroller*/
    21 | t.$$.dirty[1] & /*prevId, $direction*/
    134218752 && ge.json && (Gt && (pt.unregisterInstance(Gt), e(41, Gt = void 0)), ge.id && !ge.fakeElement && (e(41, Gt = ge.id), pt.registerInstance(Gt, {
      setCurrentItem(ne, d) {
        const j = br();
        if (ne < 0 || ne > j.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        wr(j, ne, { animated: d });
      },
      setPreviousItem(ne, d, j) {
        const Ie = ot("prev"), Re = br();
        let Pt = Ie - ne;
        wr(Re, Pt, { animated: j, overflow: d });
      },
      setNextItem(ne, d, j) {
        const Ie = me === "horizontal", Re = T === "ltr" || !Ie ? 1 : -1, Pt = Ie ? I.scrollLeft * Re + I.offsetWidth === I.scrollWidth : I.scrollTop + I.offsetHeight === I.scrollHeight, L = br();
        if (Pt && d === "ring") {
          wr(L, 0, { animated: j });
          return;
        }
        let it = ot("next") + ne;
        wr(L, it, { animated: j, overflow: d });
      },
      scrollToStart(ne) {
        Er(0, ne);
      },
      scrollToEnd(ne) {
        Er(
          T === "ltr" || me !== "horizontal" ? 1e6 : -1e6,
          ne
        );
      },
      scrollToPosition(ne, d) {
        Er(
          T === "ltr" || me !== "horizontal" ? ne : -ne,
          d
        );
      },
      scrollCombined({ step: ne, offset: d, overflow: j, animated: Ie }) {
        if (ne) {
          const Pt = ot(ne > 0 ? "next" : "prev") + ne;
          wr(br(), Pt, { animated: Ie, extraOffset: d, overflow: j });
        } else d && Ir(d, { overflow: j, animated: Ie });
      }
    })));
  }, [
    ge,
    he,
    I,
    nt,
    me,
    It,
    Me,
    xt,
    k,
    Ct,
    dt,
    At,
    _t,
    Pe,
    Ft,
    ue,
    $,
    R,
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
    rt,
    Ce,
    Mt,
    Vt,
    jr,
    Qt,
    ft,
    Wt,
    St,
    Tt,
    Y,
    Gt,
    Jt,
    Ue,
    ye,
    Qe,
    ze,
    or,
    yt,
    hr,
    vt,
    $t,
    Yt,
    G,
    U,
    O,
    o,
    n,
    T,
    X,
    M,
    se,
    Ae,
    ee,
    Ke,
    fe,
    te,
    Fe,
    oe,
    Ye,
    at,
    jt,
    Kt,
    qt,
    pr,
    lt
  ];
}
class gb extends Rr {
  constructor(r) {
    super(), Or(this, r, pb, db, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const hb = "appkit-outer", mb = "appkit-tabs", bb = "appkit-tabs__list", yb = "appkit-tabs__item", wb = "appkit-tabs__item_selected", kb = "appkit-tabs_animation_fade", vb = "appkit-tabs_animation_none", jb = "appkit-tabs__item_actionable", Cb = "appkit-tabs__panels", Eb = "appkit-tabs__swiper", Ab = "appkit-tabs__swiper_animated", Sb = "appkit-tabs__swiper_inited", Vb = "appkit-tabs__panel", Fb = "appkit-tabs__panel_visible", Ib = "appkit-tabs__separator", Db = "appkit-tabs__delimitier", vn = {
  outer: hb,
  "root__any-actions": "appkit-root__any-actions",
  tabs: mb,
  tabs__list: bb,
  "tabs__items-bg": "appkit-tabs__items-bg",
  "tabs__items-text": "appkit-tabs__items-text",
  tabs__item: yb,
  tabs__item_selected: wb,
  tabs_animation_fade: kb,
  tabs_animation_none: vb,
  tabs__item_actionable: jb,
  tabs__panels: Cb,
  "tabs_own-height": "appkit-tabs_own-height",
  tabs__swiper: Eb,
  tabs__swiper_animated: Ab,
  tabs__swiper_inited: Sb,
  tabs__panel: Vb,
  tabs__panel_visible: Fb,
  "tabs_height-parent_yes": "appkit-tabs_height-parent_yes",
  tabs__separator: Ib,
  tabs__delimitier: Db,
  "tabs__tabs-highlighter": "appkit-tabs__tabs-highlighter"
};
function Tb(t, r) {
  var n, o;
  if (!t || !t.image_url || typeof t.image_url != "string")
    return r;
  const e = {
    url: t.image_url,
    width: 12,
    height: 12
  };
  return ((n = t.width) == null ? void 0 : n.type) === "fixed" && Un(t.width.value) && (e.width = t.width.value), ((o = t.height) == null ? void 0 : o.type) === "fixed" && Un(t.height.value) && (e.height = t.height.value), e;
}
const Zd = 37, Qd = 39, xd = 36, $d = 35;
function Mb(t, r, e, n) {
  const o = [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ];
  for (let i = 0; i < o.length; ++i)
    if (o[i] && !Tn(o[i]))
      return n;
  return Ls(t, r, e);
}
function kc(t) {
  const r = t.touches[0], e = r.clientX || r.pageX, n = r.clientY || r.pageY;
  return { x: e, y: n };
}
function Pb(t) {
  let r, e;
  return r = new Gn({
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function Nb(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r, { enabled: i } = r;
  const s = Io(i);
  return pi(wa, { isEnabled: s }), t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams), "enabled" in a && e(2, i = a.enabled);
  }, t.$$.update = () => {
    t.$$.dirty & /*enabled*/
    4 && s.set(i);
  }, [n, o, i];
}
class zb extends Rr {
  constructor(r) {
    super(), Or(this, r, Nb, Pb, Sr, {
      componentContext: 0,
      layoutParams: 1,
      enabled: 2
    });
  }
}
const { Boolean: vc, window: Ob } = Po;
function jc(t, r, e) {
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
function Cc(t, r, e) {
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
function Ec(t, r, e) {
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
function Rb(t) {
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function Lb(t) {
  let r, e;
  const n = [
    {
      cls: mt(
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
    $$slots: { default: [Hb] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = jo(o, n[i]);
  return r = new yn({ props: o }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(i, s) {
      Rt(r, i, s), e = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams*/
      16777219 | s[1] & /*parentOfItems, replaceItems, devapi*/
      6356992 ? No(n, [
        s[0] & /*mods*/
        16777216 && {
          cls: mt(
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
        2097152 && Id(
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
      Lt(r, i);
    }
  };
}
function Ac(t) {
  let r;
  return {
    c() {
      r = Ve("span"), g(r, "class", vn.tabs__delimitier), D(
        r,
        "width",
        /*delimitierStyle*/
        t[15].width ? ae(
          /*delimitierStyle*/
          t[15].width
        ) : void 0
      ), D(
        r,
        "height",
        /*delimitierStyle*/
        t[15].height ? ae(
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
      32768 && D(
        r,
        "width",
        /*delimitierStyle*/
        e[15].width ? ae(
          /*delimitierStyle*/
          e[15].width
        ) : void 0
      ), n[0] & /*delimitierStyle*/
      32768 && D(
        r,
        "height",
        /*delimitierStyle*/
        e[15].height ? ae(
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
function Sc(t) {
  let r, e, n = (
    /*item*/
    t[99].title + ""
  ), o, i, s = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && Ac(t)
  );
  return {
    c() {
      s && s.c(), r = cr(), e = Ve("span"), o = Pn(n), g(e, "class", i = mt("tabs__item", vn, {
        selected: (
          /*isSelected*/
          t[104]
        ),
        actionable: !!/*item*/
        t[99].title_click_action
      }));
    },
    m(a, l) {
      s && s.m(a, l), q(a, r, l), q(a, e, l), ht(e, o);
    },
    p(a, l) {
      /*delimitierStyle*/
      a[15] && /*index*/
      a[100] > 0 ? s ? s.p(a, l) : (s = Ac(a), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null), l[0] & /*$childStore*/
      262144 && n !== (n = /*item*/
      a[99].title + "") && xn(o, n), l[0] & /*$childStore, selected*/
      393216 && i !== (i = mt("tabs__item", vn, {
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
function Vc(t) {
  let r, e;
  return {
    c() {
      r = Ve("div"), g(r, "class", vn["tabs__tabs-highlighter"]), g(r, "style", e = er(
        /*selectedTabStyles*/
        t[36]
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o[1] & /*selectedTabStyles*/
      32 && e !== (e = er(
        /*selectedTabStyles*/
        n[36]
      )) && g(r, "style", e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function Fc(t) {
  let r, e;
  return {
    c() {
      r = Ve("img"), g(r, "class", vn.tabs__delimitier), g(r, "alt", ""), g(r, "loading", "lazy"), g(r, "decoding", "async"), Qn(r.src, e = /*delimitierStyle*/
      t[15].url) || g(r, "src", e), D(
        r,
        "width",
        /*delimitierStyle*/
        t[15].width ? ae(
          /*delimitierStyle*/
          t[15].width
        ) : void 0
      ), D(
        r,
        "height",
        /*delimitierStyle*/
        t[15].height ? ae(
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
      32768 && D(
        r,
        "width",
        /*delimitierStyle*/
        n[15].width ? ae(
          /*delimitierStyle*/
          n[15].width
        ) : void 0
      ), o[0] & /*delimitierStyle*/
      32768 && D(
        r,
        "height",
        /*delimitierStyle*/
        n[15].height ? ae(
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
function Bb(t) {
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
      n[99].title + "") && xn(e, r);
    },
    d(n) {
      n && J(e);
    }
  };
}
function Ic(t) {
  let r, e, n, o = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && Fc(t)
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
  return e = new ml({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      cls: mt("tabs__item", vn, {
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
      $$slots: { default: [Bb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      o && o.c(), r = cr(), Bt(e.$$.fragment);
    },
    m(s, a) {
      o && o.m(s, a), q(s, r, a), Rt(e, s, a), n = !0;
    },
    p(s, a) {
      t = s, /*delimitierStyle*/
      t[15] && /*index*/
      t[100] > 0 ? o ? o.p(t, a) : (o = Fc(t), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
      const l = {};
      a[0] & /*componentContext*/
      1 && (l.componentContext = /*componentContext*/
      t[0]), a[0] & /*$childStore, selected*/
      393216 && (l.cls = mt("tabs__item", vn, {
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
      n || (B(e.$$.fragment, s), n = !0);
    },
    o(s) {
      Q(e.$$.fragment, s), n = !1;
    },
    d(s) {
      s && J(r), o && o.d(s), Lt(e, s);
    }
  };
}
function Dc(t) {
  let r, e;
  return {
    c() {
      r = Ve("div"), g(r, "class", vn.tabs__separator), g(r, "style", e = er(
        /*separatorStyle*/
        t[38]
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o[1] & /*separatorStyle*/
      128 && e !== (e = er(
        /*separatorStyle*/
        n[38]
      )) && g(r, "style", e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function Tc(t) {
  let r, e;
  return r = new zb({
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function Mc(t) {
  let r, e, n, o, i, s, a = (
    /*childComponentContext*/
    t[101] && Tc(t)
  );
  return {
    c() {
      r = Ve("div"), a && a.c(), e = cr(), g(r, "class", n = mt("tabs__panel", vn, {
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
      t[100]), D(
        r,
        "left",
        /*index*/
        t[100] * 100 + "%"
      );
    },
    m(l, u) {
      q(l, r, u), a && a.m(r, null), ht(r, e), s = !0;
    },
    p(l, u) {
      /*childComponentContext*/
      l[101] ? a ? (a.p(l, u), u[0] & /*$childStore*/
      262144 | u[1] & /*showedPanels*/
      4 && B(a, 1)) : (a = Tc(l), a.c(), B(a, 1), a.m(r, e)) : a && (ar(), Q(a, 1, 1, () => {
        a = null;
      }), ur()), (!s || u[0] & /*$childStore*/
      262144 | u[1] & /*visiblePanels*/
      8 && n !== (n = mt("tabs__panel", vn, {
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
      262144) && D(
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
function Hb(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h, m, p, k = nr(
    /*$childStore*/
    t[18]
  ), w = [];
  for (let C = 0; C < k.length; C += 1)
    w[C] = Sc(Ec(t, k, C));
  let O = (
    /*animationType*/
    t[16] === "slide" && /*selectedTabStyles*/
    t[36] && Vc(t)
  ), U = nr(
    /*$childStore*/
    t[18]
  ), R = [];
  for (let C = 0; C < U.length; C += 1)
    R[C] = Ic(Cc(t, U, C));
  const $ = (C) => Q(R[C], 1, 1, () => {
    R[C] = null;
  });
  let ue = (
    /*$jsonSeparator*/
    t[20] && Dc(t)
  ), T = nr(
    /*$childStore*/
    t[18]
  ), X = [];
  for (let C = 0; C < T.length; C += 1)
    X[C] = Mc(jc(t, T, C));
  const le = (C) => Q(X[C], 1, 1, () => {
    X[C] = null;
  });
  return {
    c() {
      r = Ve("div"), e = Ve("div");
      for (let C = 0; C < w.length; C += 1)
        w[C].c();
      n = cr(), O && O.c(), o = cr(), i = Ve("div");
      for (let C = 0; C < R.length; C += 1)
        R[C].c();
      a = cr(), ue && ue.c(), l = cr(), u = Ve("div"), c = Ve("div");
      for (let C = 0; C < X.length; C += 1)
        X[C].c();
      g(e, "class", vn["tabs__items-bg"]), g(e, "aria-hidden", "true"), g(i, "class", vn["tabs__items-text"]), g(r, "class", s = vn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Cr["root_restrict-scroll"] : "")), g(r, "role", "tablist"), D(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? po(
          /*titlePadding*/
          t[14],
          /*$direction*/
          t[19]
        ) : ""
      ), D(r, "--divkit-tabs-font-size", ae(
        /*tabFontSize*/
        t[4]
      )), D(
        r,
        "--divkit-tabs-paddings",
        /*tabPaddings*/
        t[5]
      ), D(
        r,
        "--divkit-tabs-line-height",
        /*tabLineHeight*/
        t[25]
      ), D(
        r,
        "--divkit-tabs-letter-spacing",
        /*tabLetterSpacing*/
        t[26]
      ), D(
        r,
        "--divkit-tabs-active-font-weight",
        /*tabActiveFontWeight*/
        t[7] || ""
      ), D(
        r,
        "--divkit-tabs-inactive-font-weight",
        /*tabInactiveFontWeight*/
        t[8] || ""
      ), D(
        r,
        "--divkit-tabs-active-font-family",
        /*tabActiveFontFamily*/
        t[27] || ""
      ), D(
        r,
        "--divkit-tabs-inactive-font-family",
        /*tabInactiveFontFamily*/
        t[29] || ""
      ), D(
        r,
        "--divkit-tabs-active-font-variation-settings",
        /*tabActiveFontVariationSettings*/
        t[28] || ""
      ), D(
        r,
        "--divkit-tabs-inactive-font-variation-settings",
        /*tabInactiveFontVariationSettings*/
        t[30] || ""
      ), D(
        r,
        "--divkit-tabs-active-text-color",
        /*tabActiveTextColor*/
        t[9]
      ), D(
        r,
        "--divkit-tabs-inactive-text-color",
        /*tabInactiveTextColor*/
        t[10]
      ), D(
        r,
        "--divkit-tabs-active-background-color",
        /*tabActiveBackground*/
        t[11]
      ), D(
        r,
        "--divkit-tabs-inactive-background-color",
        /*tabInactiveBackground*/
        t[12]
      ), D(
        r,
        "--divkit-tabs-border-radius",
        /*tabBorderRadius*/
        t[6]
      ), D(
        r,
        "--divkit-tabs-items-spacing",
        /*tabItemSpacing*/
        t[13] ? fn(
          /*tabItemSpacing*/
          t[13] * 10 / /*tabFontSize*/
          t[4]
        ) : ""
      ), D(
        r,
        "--divkit-tabs-animation-duration",
        /*animationDuration*/
        t[35] !== void 0 ? `${/*animationDuration*/
        t[35]}ms` : ""
      ), g(c, "class", f = mt("tabs__swiper", vn, {
        inited: (
          /*isSwipeInitialized*/
          t[31]
        ),
        animated: (
          /*isAnimated*/
          t[32]
        )
      })), g(u, "class", _ = vn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Cr["root_restrict-scroll"] : ""));
    },
    m(C, M) {
      q(C, r, M), ht(r, e);
      for (let P = 0; P < w.length; P += 1)
        w[P] && w[P].m(e, null);
      ht(e, n), O && O.m(e, null), ht(r, o), ht(r, i);
      for (let P = 0; P < R.length; P += 1)
        R[P] && R[P].m(i, null);
      t[74](r), q(C, a, M), ue && ue.m(C, M), q(C, l, M), q(C, u, M), ht(u, c);
      for (let P = 0; P < X.length; P += 1)
        X[P] && X[P].m(c, null);
      t[75](c), t[76](u), h = !0, m || (p = [
        Be(
          r,
          "keydown",
          /*onTabKeydown*/
          t[55]
        ),
        Be(u, "touchstart", function() {
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
        Be(u, "touchmove", function() {
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
        Be(u, "touchend", function() {
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
        Be(u, "touchcancel", function() {
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
    p(C, M) {
      if (t = C, M[0] & /*$childStore, selected, delimitierStyle*/
      425984) {
        k = nr(
          /*$childStore*/
          t[18]
        );
        let P;
        for (P = 0; P < k.length; P += 1) {
          const H = Ec(t, k, P);
          w[P] ? w[P].p(H, M) : (w[P] = Sc(H), w[P].c(), w[P].m(e, n));
        }
        for (; P < w.length; P += 1)
          w[P].d(1);
        w.length = k.length;
      }
      if (/*animationType*/
      t[16] === "slide" && /*selectedTabStyles*/
      t[36] ? O ? O.p(t, M) : (O = Vc(t), O.c(), O.m(e, null)) : O && (O.d(1), O = null), M[0] & /*componentContext, $childStore, selected, delimitierStyle*/
      425985 | M[1] & /*instId, selectItem*/
      8912896) {
        U = nr(
          /*$childStore*/
          t[18]
        );
        let P;
        for (P = 0; P < U.length; P += 1) {
          const H = Cc(t, U, P);
          R[P] ? (R[P].p(H, M), B(R[P], 1)) : (R[P] = Ic(H), R[P].c(), B(R[P], 1), R[P].m(i, null));
        }
        for (ar(), P = U.length; P < R.length; P += 1)
          $(P);
        ur();
      }
      if ((!h || M[1] & /*$jsonRestrictParentScroll*/
      131072 && s !== (s = vn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Cr["root_restrict-scroll"] : ""))) && g(r, "class", s), M[0] & /*titlePadding, $direction*/
      540672 && D(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? po(
          /*titlePadding*/
          t[14],
          /*$direction*/
          t[19]
        ) : ""
      ), M[0] & /*tabFontSize*/
      16 && D(r, "--divkit-tabs-font-size", ae(
        /*tabFontSize*/
        t[4]
      )), M[0] & /*tabPaddings*/
      32 && D(
        r,
        "--divkit-tabs-paddings",
        /*tabPaddings*/
        t[5]
      ), M[0] & /*tabLineHeight*/
      33554432 && D(
        r,
        "--divkit-tabs-line-height",
        /*tabLineHeight*/
        t[25]
      ), M[0] & /*tabLetterSpacing*/
      67108864 && D(
        r,
        "--divkit-tabs-letter-spacing",
        /*tabLetterSpacing*/
        t[26]
      ), M[0] & /*tabActiveFontWeight*/
      128 && D(
        r,
        "--divkit-tabs-active-font-weight",
        /*tabActiveFontWeight*/
        t[7] || ""
      ), M[0] & /*tabInactiveFontWeight*/
      256 && D(
        r,
        "--divkit-tabs-inactive-font-weight",
        /*tabInactiveFontWeight*/
        t[8] || ""
      ), M[0] & /*tabActiveFontFamily*/
      134217728 && D(
        r,
        "--divkit-tabs-active-font-family",
        /*tabActiveFontFamily*/
        t[27] || ""
      ), M[0] & /*tabInactiveFontFamily*/
      536870912 && D(
        r,
        "--divkit-tabs-inactive-font-family",
        /*tabInactiveFontFamily*/
        t[29] || ""
      ), M[0] & /*tabActiveFontVariationSettings*/
      268435456 && D(
        r,
        "--divkit-tabs-active-font-variation-settings",
        /*tabActiveFontVariationSettings*/
        t[28] || ""
      ), M[0] & /*tabInactiveFontVariationSettings*/
      1073741824 && D(
        r,
        "--divkit-tabs-inactive-font-variation-settings",
        /*tabInactiveFontVariationSettings*/
        t[30] || ""
      ), M[0] & /*tabActiveTextColor*/
      512 && D(
        r,
        "--divkit-tabs-active-text-color",
        /*tabActiveTextColor*/
        t[9]
      ), M[0] & /*tabInactiveTextColor*/
      1024 && D(
        r,
        "--divkit-tabs-inactive-text-color",
        /*tabInactiveTextColor*/
        t[10]
      ), M[0] & /*tabActiveBackground*/
      2048 && D(
        r,
        "--divkit-tabs-active-background-color",
        /*tabActiveBackground*/
        t[11]
      ), M[0] & /*tabInactiveBackground*/
      4096 && D(
        r,
        "--divkit-tabs-inactive-background-color",
        /*tabInactiveBackground*/
        t[12]
      ), M[0] & /*tabBorderRadius*/
      64 && D(
        r,
        "--divkit-tabs-border-radius",
        /*tabBorderRadius*/
        t[6]
      ), M[0] & /*tabItemSpacing, tabFontSize*/
      8208 && D(
        r,
        "--divkit-tabs-items-spacing",
        /*tabItemSpacing*/
        t[13] ? fn(
          /*tabItemSpacing*/
          t[13] * 10 / /*tabFontSize*/
          t[4]
        ) : ""
      ), M[1] & /*animationDuration*/
      16 && D(
        r,
        "--divkit-tabs-animation-duration",
        /*animationDuration*/
        t[35] !== void 0 ? `${/*animationDuration*/
        t[35]}ms` : ""
      ), /*$jsonSeparator*/
      t[20] ? ue ? ue.p(t, M) : (ue = Dc(t), ue.c(), ue.m(l.parentNode, l)) : ue && (ue.d(1), ue = null), M[0] & /*$childStore, childLayoutParams, selected*/
      393224 | M[1] & /*visiblePanels, instId, showedPanels*/
      524300) {
        T = nr(
          /*$childStore*/
          t[18]
        );
        let P;
        for (P = 0; P < T.length; P += 1) {
          const H = jc(t, T, P);
          X[P] ? (X[P].p(H, M), B(X[P], 1)) : (X[P] = Mc(H), X[P].c(), B(X[P], 1), X[P].m(c, null));
        }
        for (ar(), P = T.length; P < X.length; P += 1)
          le(P);
        ur();
      }
      (!h || M[1] & /*isSwipeInitialized, isAnimated*/
      3 && f !== (f = mt("tabs__swiper", vn, {
        inited: (
          /*isSwipeInitialized*/
          t[31]
        ),
        animated: (
          /*isAnimated*/
          t[32]
        )
      }))) && g(c, "class", f), (!h || M[1] & /*$jsonRestrictParentScroll*/
      131072 && _ !== (_ = vn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Cr["root_restrict-scroll"] : ""))) && g(u, "class", _);
    },
    i(C) {
      if (!h) {
        for (let M = 0; M < U.length; M += 1)
          B(R[M]);
        for (let M = 0; M < T.length; M += 1)
          B(X[M]);
        h = !0;
      }
    },
    o(C) {
      R = R.filter(vc);
      for (let M = 0; M < R.length; M += 1)
        Q(R[M]);
      X = X.filter(vc);
      for (let M = 0; M < X.length; M += 1)
        Q(X[M]);
      h = !1;
    },
    d(C) {
      C && (J(r), J(a), J(l), J(u)), on(w, C), O && O.d(), on(R, C), t[74](null), ue && ue.d(C), on(X, C), t[75](null), t[76](null), m = !1, Br(p);
    }
  };
}
function Wb(t) {
  let r, e, n, o, i, s;
  const a = [Lb, Rb], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[2] ? 1 : 0
    );
  }
  return ~(r = u(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = Zt();
    },
    m(c, f) {
      ~r && l[r].m(c, f), q(c, n, f), o = !0, i || (s = Be(Ob, "resize", function() {
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
    p(c, f) {
      t = c;
      let _ = r;
      r = u(t), r === _ ? ~r && l[r].p(t, f) : (e && (ar(), Q(l[_], 1, 1, () => {
        l[_] = null;
      }), ur()), ~r ? (e = l[r], e ? e.p(t, f) : (e = l[r] = a[r](t), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
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
function Ub(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, U, R, $ = E, ue = () => ($(), $ = V(a, (v) => e(67, R = v)), a), T, X = E, le = () => (X(), X = V(m, (v) => e(68, T = v)), m), C, M = E, P = () => (M(), M = V(h, (v) => e(69, C = v)), h), H, se = E, de = () => (se(), se = V(f, (v) => e(70, H = v)), f), Ee, Ae, pe = E, De = () => (pe(), pe = V(c, (v) => e(71, Ae = v)), c), ee, Te = E, We = () => (Te(), Te = V(u, (v) => e(72, ee = v)), u), Ke, ke = E, et = () => (ke(), ke = V(l, (v) => e(20, Ke = v)), l), fe, je = E, ce = () => (je(), je = V(_, (v) => e(48, fe = v)), _);
  t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => Te()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => je());
  let { componentContext: te } = r, { layoutParams: _e = void 0 } = r;
  const ie = Tr(Kr), Fe = ie.direction;
  bn(t, Fe, (v) => e(19, Ee = v));
  const xe = ie.genId("tabs");
  let Xe, oe = !1, Ye = Io([]);
  bn(t, Ye, (v) => e(18, U = v));
  let Oe = {}, st, at, ut, kt = {}, rt = 12, Nt = "", ct = "", ge = "", he = "", pt, Ce = "", I = "", Ct, dt = "", At = "", Tt = "", nt = "", Y = "", Mt = "", Vt = 0, Gt = "", Jt = "", me = null, Ue = !1, _t = !1, ye, Qe = [], ze = [], or = null, Pe = null, yt = null, Ft, It = !1, hr = !1, Me, vt, sr, $t = "slide", Yt, mr, jr, Qt = {
    devapi: {
      getState() {
        return p;
      },
      setState(v) {
        return Wt(v, !1, !0);
      }
    }
  };
  function xt() {
    e(4, rt = 12), e(5, Nt = ""), e(6, he = ""), e(7, pt = void 0), e(27, Ce = ""), e(28, I = ""), e(8, Ct = void 0), e(29, dt = ""), e(30, At = ""), e(9, Tt = ""), e(10, nt = ""), e(11, Y = ""), e(12, Mt = ""), e(13, Vt = 0), e(61, Gt = ""), e(62, Jt = ""), e(14, me = null), e(15, sr = void 0), e(16, $t = "slide"), e(35, Yt = 300), e(36, mr = void 0), re();
  }
  function G(v) {
    te.json.items && e(0, te = jr = {
      ...te,
      json: {
        ...te.json,
        items: te.json.items.map((ne, d) => ({ ...ne, div: v[d] }))
      }
    });
  }
  function ft(v) {
    if (oe)
      return;
    const ne = new Set(Qe.filter(zo)), d = /* @__PURE__ */ new Map();
    jr === te && Qe.forEach((j) => {
      j && d.set(j.json, j);
    }), e(33, Qe = v.map((j, Ie) => {
      if ((Ie === p || Qe[Ie]) && (j != null && j.div)) {
        const Re = d.get(j.div);
        return Re ? (ne.delete(Re), Re) : te.produceChildContext(j.div, { path: Ie });
      }
    })), e(34, ze = v.map((j, Ie) => Ie === p));
    for (const j of ne)
      j.destroy();
    jr = te;
  }
  async function Wt(v, ne, d) {
    if (ye = p, e(17, p = v), jt(), Er(d), re(), ne) {
      await An();
      const j = st.querySelector(`.${vn.tabs__item_selected}`);
      j && j.focus();
    }
  }
  function St(v, ne = !1) {
    const d = U == null ? void 0 : U.length;
    if (!d)
      return;
    const j = U.map((L) => L.index);
    let Re = j.indexOf(p) + v;
    Re >= d ? Re = 0 : Re < 0 && (Re = d - 1);
    const Pt = j[Re];
    Wt(Pt, ne, !0);
  }
  function br(v, ne) {
    return p !== ne ? (Wt(ne, !1, !0), !1) : !0;
  }
  function Er(v = !0) {
    e(32, _t = v), wr(-p * 100), Ir(), zr(), tr(), vt = -p * at.clientWidth;
  }
  async function wr(v) {
    await An(), e(23, ut.style.transform = `translate3d(${v}%,0,0)`, ut);
  }
  function Ir(v = !1) {
    const ne = v ? Math.max(0, p - 1) : Math.min(p, ye != null ? ye : p), d = v ? Math.min(o.length - 1, p + 1) : Math.max(p, ye != null ? ye : p);
    ie.devtoolCreateHierarchy !== "eager" && Qe.forEach((j) => {
      j == null || j.destroy();
    }), e(33, Qe = Qe.map((j, Ie) => {
      var Pt;
      if (j)
        return j;
      const Re = (Pt = o[Ie]) == null ? void 0 : Pt.div;
      if ((Ie >= ne && Ie <= d || ie.devtoolCreateHierarchy === "eager") && Re)
        return te.produceChildContext(Re, { path: Ie });
    })), e(34, ze = ze.map((j, Ie) => Ie >= ne && Ie <= d));
  }
  async function zr() {
    var ne;
    if (((ne = te.json.height) == null ? void 0 : ne.type) === "match_parent")
      return;
    await An();
    const v = document.getElementById(`${xe}-panel-${p}`);
    v && e(22, at.style.height = ae(v.offsetHeight), at);
  }
  function tr() {
    or && clearTimeout(or), or = window.setTimeout(
      () => {
        e(34, ze = o.map((v, ne) => ne === p));
      },
      400
    );
  }
  function ot(v) {
    if (!(v.ctrlKey || v.shiftKey || v.altKey || v.metaKey) && o) {
      if (v.which === Zd)
        St(-1, !0);
      else if (v.which === Qd)
        St(1, !0);
      else if (v.which === xd)
        Wt(0, !0, !0);
      else if (v.which === $d)
        Wt(o.length - 1, !0, !0);
      else
        return;
      v.preventDefault();
    }
  }
  function jt() {
    Ue || (e(31, Ue = !0), e(22, at.style.height = ae(at.clientHeight), at), e(23, ut.style.transform = `translate3d(${-(ye != null ? ye : p) * 100}%,0,0)`, ut));
  }
  function Kt(v) {
    var j;
    const ne = v.target, d = (j = ne == null ? void 0 : ne.closest) == null ? void 0 : j.call(ne, `.${Cr["root_restrict-scroll"]}`);
    o.length < 2 || v.touches.length > 1 || d && d !== at || (It = !1, hr = !1, Pe = kc(v), yt = null, Ft = Date.now(), Me = vt || -p * at.clientWidth, e(32, _t = !1), or && clearTimeout(or));
  }
  function qt(v) {
    const ne = kc(v);
    if (!Pe || yt && yt.x === ne.x && yt.y === ne.y)
      return;
    yt = ne;
    const d = at.clientWidth;
    if (It) {
      vt = ne.x - Pe.x + Me;
      const j = d * o.length;
      if (vt > 0)
        vt = vt * d / (vt + d * 3);
      else if (-vt + d > j) {
        let Ie = -vt + d - j;
        Ie = Ie * d / (Ie + d * 3), vt = d - j - Ie;
      }
      wr(vt * 100 / d);
    } else Math.abs(ne.y - Pe.y) > 10 ? hr = !0 : !hr && Math.abs(ne.x - Pe.x) > 8 && (jt(), It = !0, Pe = ne, wr(-p * 100), Ir(!0));
    It && v.cancelable && v.preventDefault();
  }
  function pr() {
    hr = !1, Pe = null;
    let v = p;
    if (!It)
      return;
    It = !1;
    const ne = Math.min(512, at.clientWidth), d = Math.abs(Me - vt), j = Math.min(1, (Date.now() - Ft) / 750);
    d > ne / 4 * j && (v += Me > vt ? 1 : -1), v >= o.length ? v = o.length - 1 : v < 0 && (v = 0), v === p ? (e(32, _t = !0), vt = -v * ne, wr(-v * 100), tr()) : Wt(v, !1, !0);
  }
  function lt(v, ne) {
    return v > o.length - 1 ? ne === "ring" ? So(v, o.length) : o.length - 1 : v < 0 ? ne === "ring" ? So(v, o.length) : 0 : v;
  }
  function re() {
    $t === "slide" && An().then(() => {
      const v = st == null ? void 0 : st.querySelector("." + vn.tabs__item_selected);
      v && e(36, mr = {
        left: `${v.offsetLeft}px`,
        width: `${v.offsetWidth}px`,
        height: `${v.offsetHeight}px`
      });
    });
  }
  ro(() => {
    re(), ie.devtoolCreateHierarchy === "eager" && Wt(p, !1, !1);
  }), an(() => {
    Qe.forEach((v) => {
      v == null || v.destroy();
    }), Xe && (ie.unregisterInstance(Xe), e(60, Xe = void 0));
  });
  const bt = (v, ne) => br(ne, v);
  function ir(v) {
    Fr[v ? "unshift" : "push"](() => {
      st = v, e(21, st);
    });
  }
  function yr(v) {
    Fr[v ? "unshift" : "push"](() => {
      ut = v, e(23, ut);
    });
  }
  function fr(v) {
    Fr[v ? "unshift" : "push"](() => {
      at = v, e(22, at);
    });
  }
  return t.$$set = (v) => {
    "componentContext" in v && e(0, te = v.componentContext), "layoutParams" in v && e(1, _e = v.layoutParams);
  }, t.$$.update = () => {
    var v, ne, d, j, Ie, Re, Pt, L, Dt, it;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(66, n = te.origJson), t.$$.dirty[2] & /*origJson*/
    16 && n && xt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(63, o = Array.isArray(te.json.items) && te.json.items || []), t.$$.dirty[2] & /*items*/
    2 && e(47, i = o.map((Ge) => {
      var Je;
      return { json: Ge.div, id: (Je = Ge.div) == null ? void 0 : Je.id };
    })), t.$$.dirty[0] & /*componentContext*/
    1 && e(65, s = te.getJsonWithVars(te.json.selected_tab)), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(46, a = te.getDerivedFromVars(te.json.tab_title_style, void 0, !0))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(45, l = te.getDerivedFromVars(te.json.has_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && We(e(44, u = te.getDerivedFromVars(te.json.separator_color))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(43, c = te.getDerivedFromVars(te.json.separator_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(42, f = te.getDerivedFromVars(te.json.switch_tabs_by_content_swipe_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(41, _ = te.getDerivedFromVars(te.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && P(e(40, h = te.getDerivedFromVars(te.json.title_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(39, m = te.getDerivedFromVars(te.json.tab_title_delimiter))), t.$$.dirty[2] & /*jsonSelectedTab*/
    8 && e(17, p = s && Number(s) || 0), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*items*/
    2)
      if (Array.isArray(o) && o.length) {
        let Ge = [];
        o.forEach((Je, Ht) => {
          const kr = te.getJsonWithVars({
            index: Ht,
            title: Je.title,
            title_click_action: Je.title_click_action
          });
          kr.title && typeof kr.title == "string" ? Ge.push(kr) : te.logError(K(new Error("Incorrect title for the tab"), { additional: { index: Ht } }));
        }), Ye.set(Ge);
      } else
        Ye.set([]);
    if (t.$$.dirty[0] & /*$childStore, componentContext*/
    262145 && (U != null && U.length ? e(2, oe = !1) : (e(2, oe = !0), te.logError(K(new Error('Incorrect or empty "items" prop for div "tabs"'))))), t.$$.dirty[0] & /*componentContext, childLayoutParams*/
    9) {
      let Ge = { parentContainerOrientation: "horizontal" };
      ((v = te.json.width) == null ? void 0 : v.type) === "wrap_content" && (Ge.parentHorizontalWrapContent = !0), (!te.json.height || te.json.height.type === "wrap_content") && (Ge.parentVerticalWrapContent = !0), e(3, Oe = xo(Ge, Oe));
    }
    if (t.$$.dirty[0] & /*hasError, selected, componentContext*/
    131077 | t.$$.dirty[2] & /*items*/
    2 && !oe && (p < 0 || p >= o.length) && (te.logError(K(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: te.json.selected_tab,
        length: o.length
      }
    })), e(17, p = p < 0 ? 0 : o.length - 1)), t.$$.dirty[0] & /*hasError, $childStore, selected, componentContext*/
    393221 && !oe && !U.some((Ge) => p === Ge.index) && (te.logError(K(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: te.json.selected_tab
      }
    })), e(17, p = ((ne = U[0]) == null ? void 0 : ne.index) || 0)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && e(64, k = R || {}), t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(4, rt = Wn(k.font_size, rt)), t.$$.dirty[0] & /*tabFontSize, $direction, tabPaddings*/
    524336 | t.$$.dirty[2] & /*tabStyle*/
    4 && (k.font_size || k.paddings)) {
      const Ge = k.paddings || { top: 6, right: 8, bottom: 6, left: 8 }, Je = {
        top: (Number(Ge.top) || 0) / rt * 10,
        right: (Number(Ee === "ltr" ? Ge.end : Ge.start) || Number(Ge.right) || 0) / rt * 10,
        bottom: (Number(Ge.bottom) || 0) / rt * 10,
        left: (Number(Ee === "ltr" ? Ge.start : Ge.end) || Number(Ge.left) || 0) / rt * 10
      };
      e(5, Nt = as(Je, Ee, Nt));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Ge = k.line_height;
      Ge !== void 0 && Un(Ge) && e(25, ct = ae(Ge / rt * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Ge = k.letter_spacing;
      Ge !== void 0 && Tn(Ge) && e(26, ge = ae(Ge / rt * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize, tabBorderRadius*/
    80 | t.$$.dirty[2] & /*tabStyle*/
    4 && (k.corner_radius || k.corners_radius || k.font_size)) {
      const Ge = (d = k.corner_radius) != null ? d : 1e3;
      k.corners_radius ? e(6, he = Mb(k.corners_radius, Ge, rt, he)) : Tn(Ge) && e(6, he = ae(Ge / rt * 10));
    }
    t.$$.dirty[0] & /*tabActiveFontWeight*/
    128 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(7, pt = wi(k.active_font_weight || k.font_weight, void 0, pt)), k.font_family && typeof k.font_family == "string" ? e(27, Ce = ie.typefaceProvider(k.font_family, { fontWeight: pt || 400 })) : e(27, Ce = ""), e(28, I = Bi(k.active_font_variation_settings))), t.$$.dirty[0] & /*tabInactiveFontWeight*/
    256 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(8, Ct = wi(k.inactive_font_weight || k.font_weight, void 0, Ct)), k.font_family && typeof k.font_family == "string" ? e(29, dt = ie.typefaceProvider(k.font_family, { fontWeight: Ct || 400 })) : e(29, dt = ""), e(30, At = Bi(k.inactive_font_variation_settings))), t.$$.dirty[0] & /*tabActiveTextColor*/
    512 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(9, Tt = gr(k.active_text_color, 1, Tt)), t.$$.dirty[0] & /*tabInactiveTextColor*/
    1024 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(10, nt = gr(k.inactive_text_color, 1, nt)), t.$$.dirty[0] & /*tabActiveBackground*/
    2048 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(11, Y = gr(k.active_background_color, 1, Y)), t.$$.dirty[0] & /*tabInactiveBackground*/
    4096 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(12, Mt = gr(k.inactive_background_color, 1, Mt)), t.$$.dirty[0] & /*tabItemSpacing*/
    8192 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(13, Vt = $r(k.item_spacing, Vt)), t.$$.dirty[0] & /*$jsonSeparator, $direction*/
    1572864 | t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*$jsonSeparatorColor, $jsonSeparatorPaddings, separatorMargins*/
    1537 && Ke && (ee && e(61, Gt = gr(ee, 1, Gt)), Ae && e(62, Jt = as(Ae, Ee, Jt))), t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*separatorMargins*/
    1 && e(38, w = {
      background: Gt,
      margin: Jt
    }), t.$$.dirty[2] & /*$jsonSwipeEnabled*/
    256 && e(37, O = typeof H > "u" ? !0 : !!H), t.$$.dirty[0] & /*titlePadding*/
    16384 | t.$$.dirty[2] & /*$jsonTitlePaddings*/
    128 && e(14, me = yi(C || void 0, me)), t.$$.dirty[0] & /*delimitierStyle*/
    32768 | t.$$.dirty[2] & /*$jsonDelimiterStyle*/
    64 && e(15, sr = Tb(T, sr)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && ((R == null ? void 0 : R.animation_type) === "fade" || (R == null ? void 0 : R.animation_type) === "none") && e(16, $t = R.animation_type), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && Tn(R == null ? void 0 : R.animation_duration) && e(35, Yt = R.animation_duration), t.$$.dirty[2] & /*items*/
    2 && ft(o), t.$$.dirty[0] & /*componentContext, hasError, selected*/
    131077 | t.$$.dirty[1] & /*prevId*/
    536870912 | t.$$.dirty[2] & /*items*/
    2 && te.json && (Xe && (ie.unregisterInstance(Xe), e(60, Xe = void 0)), te.id && !oe && !te.fakeElement && (e(60, Xe = te.id), ie.registerInstance(Xe, {
      setCurrentItem(Ge, Je) {
        if (Ge < 0 || Ge > o.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        Wt(Ge, !1, Je);
      },
      setPreviousItem(Ge, Je, Ht) {
        let kr = lt(p - Ge, Je);
        Wt(kr, !1, Ht);
      },
      setNextItem(Ge, Je, Ht) {
        let kr = lt(p + Ge, Je);
        Wt(kr, !1, Ht);
      },
      scrollToStart(Ge) {
        Wt(0, !1, Ge);
      },
      scrollToEnd(Ge) {
        Wt(o.length - 1, !1, Ge);
      },
      scrollCombined({ step: Ge, overflow: Je, animated: Ht }) {
        Ge && Wt(lt(p + Ge, Je || "clamp"), !1, Ht || !0);
      }
    }))), t.$$.dirty[0] & /*componentContext, selected, animationType*/
    196609 | t.$$.dirty[2] & /*items*/
    2 && e(24, kt = {
      "height-parent": ((j = te.json.height) == null ? void 0 : j.type) === "match_parent" ? "yes" : "",
      "own-height": (((Ie = te.json.height) == null ? void 0 : Ie.type) === "match_parent" || ((Re = te.json.height) == null ? void 0 : Re.type) === "fixed") && !(((Dt = (L = (Pt = o[p]) == null ? void 0 : Pt.div) == null ? void 0 : L.height) == null ? void 0 : Dt.type) === "wrap_content" && ((it = o[p].div) != null && it.height.constrained)),
      animation: $t
    });
  }, [
    te,
    _e,
    oe,
    Oe,
    rt,
    Nt,
    he,
    pt,
    Ct,
    Tt,
    nt,
    Y,
    Mt,
    Vt,
    me,
    sr,
    $t,
    p,
    U,
    Ee,
    Ke,
    st,
    at,
    ut,
    kt,
    ct,
    ge,
    Ce,
    I,
    dt,
    At,
    Ue,
    _t,
    Qe,
    ze,
    Yt,
    mr,
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
    fe,
    Fe,
    xe,
    Ye,
    Qt,
    G,
    br,
    ot,
    Kt,
    qt,
    pr,
    re,
    Xe,
    Gt,
    Jt,
    o,
    k,
    s,
    n,
    R,
    T,
    C,
    H,
    Ae,
    ee,
    bt,
    ir,
    yr,
    fr
  ];
}
class Gb extends Rr {
  constructor(r) {
    super(), Or(this, r, Ub, Wb, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const Jb = "appkit-state", qb = "appkit-state_overflow_visible", Yb = "appkit-state__animations", ki = {
  state: Jb,
  state_overflow_visible: qb,
  state__animations: Yb,
  "state__animation-child": "appkit-state__animation-child",
  "state__animation-child-inner": "appkit-state__animation-child-inner"
};
function kl(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function Kb(t) {
  return t * t * t;
}
function e_(t) {
  const r = t - 1;
  return r * r * r + 1;
}
function t_(t) {
  return (r) => {
    if (r <= 0)
      return 0;
    if (r >= 1)
      return 1;
    const e = r * t.length, n = Math.floor(e), o = t[n], i = t[n + 1], s = e - n;
    return o * s + i * (1 - s);
  };
}
const Xb = [
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
], Zb = t_(Xb), Qb = [
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
], xb = t_(Qb), ra = {
  linear: sl,
  ease: Zb,
  ease_in: Kb,
  ease_out: e_,
  ease_in_out: kl,
  spring: xb
};
function Ca(t) {
  return ra[t];
}
const r_ = 200, n_ = 0, $b = 0, ey = 0;
function Pc(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || r_) + (Number(r.start_delay) || n_)
  ));
}
function ty(t, {
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
      const u = l * i, c = r.map((w) => {
        var X, le, C;
        const O = Number(w.start_delay) || n_, U = Number(w.duration) || r_, R = Math.max(0, Math.min(1, (u - O) / U)), $ = o === "in" ? 1 - R : R, T = (Ca(w.interpolator || "ease_in_out") || kl)($);
        if (w.type === "fade")
          return T >= 1 ? {
            active: !1,
            opacity: 0
          } : {
            active: T > 0 && T < 1,
            opacity: (1 - T) * a + T * (w.alpha || $b)
          };
        if (w.type === "slide") {
          const M = w.edge === "top" || w.edge === "left" ? -1 : 1, P = w.edge === "top" || w.edge === "bottom" || !w.edge ? "translateY" : "translateX";
          let H = (X = w.distance) == null ? void 0 : X.value;
          H === void 0 && (w.edge === "top" || w.edge === "bottom" || !w.edge ? H = Math.abs(
            n[w.edge === "bottom" ? "bottom" : "top"] - e[w.edge === "bottom" ? "top" : "bottom"]
          ) : H = Math.abs(
            n[w.edge === "left" ? "left" : "right"] - e[w.edge === "left" ? "right" : "left"]
          ));
          const se = H * T;
          return {
            active: T > 0 && T < 1,
            translate: `${P}(${se * M}px)`
          };
        } else if (w.type === "scale") {
          const M = 1 - T + T * (w.scale || ey), P = (le = w.pivot_x) != null ? le : 0.5, H = (C = w.pivot_y) != null ? C : 0.5, se = (1 - M) * e.width * P, de = (1 - M) * e.height * H;
          return {
            active: T > 0 && T < 1,
            scale: `translate(${se}px, ${de}px) scale(${M})`
          };
        }
        return {};
      }), f = c.map((w) => w.opacity).filter((w) => w !== void 0).reduce((w, O) => w * O, 1), _ = c.map((w) => w.translate).filter((w) => w !== void 0).join(" "), h = c.map((w) => w.scale).filter((w) => w !== void 0).join(" "), m = c.filter((w) => w.active).map((w) => w.scale).filter((w) => w !== void 0), p = m.length ? m[m.length - 1] : h;
      return `transform:${[_, p].filter(Boolean).join(" ") || "none"};opacity:${f}`;
    }
  };
}
function Wo(t, r, e) {
  return t * (1 - e) + r * e;
}
const ry = 200, ny = 0;
function oy(t, {
  rootBbox: r,
  beforeBbox: e,
  afterBbox: n,
  transition: o
}) {
  var i, s;
  return {
    delay: (i = o.start_delay) != null ? i : ny,
    duration: Li() ? 0 : (s = o.duration) != null ? s : ry,
    easing: o.interpolator && o.interpolator in ra ? ra[o.interpolator] : kl,
    css: (a) => [
      `top:${Wo(e.top, n.top, a) - r.top}px`,
      `left:${Wo(e.left, n.left, a) - r.left}px`,
      `width:${Wo(e.width, n.width, a)}px`,
      `height:${Wo(e.height, n.height, a)}px`
    ].join(";")
  };
}
function o_(t) {
  const r = [];
  return t.type === "set" ? (t.items || []).forEach((e) => {
    r.push(...o_(e));
  }) : r.push(t), r;
}
const { Map: iy } = Po;
function Nc(t, r, e) {
  const n = t.slice();
  return n[37] = r[e], n;
}
function zc(t, r, e) {
  const n = t.slice();
  return n[40] = r[e], n;
}
function sy(t) {
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function ly(t) {
  let r, e;
  const n = [
    {
      cls: mt(
        "state",
        ki,
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
    $$slots: { default: [cy] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = jo(o, n[i]);
  return r = new yn({ props: o }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(i, s) {
      Rt(r, i, s), e = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams, parentOfItems, replaceItems, devapi*/
      6915 ? No(n, [
        s[0] & /*mods*/
        256 && {
          cls: mt(
            "state",
            ki,
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
        2048 && Id(
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
      Lt(r, i);
    }
  };
}
function Oc(t) {
  let r, e, n = nr(
    /*childContexts*/
    t[7]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Lc(zc(t, n, s));
  const i = (s) => Q(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = Zt();
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
          const u = zc(s, n, l);
          o[l] ? (o[l].p(u, a), B(o[l], 1)) : (o[l] = Lc(u), o[l].c(), B(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (ar(), l = n.length; l < o.length; l += 1)
          i(l);
        ur();
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
      s && J(r), on(o, s);
    }
  };
}
function Rc(t) {
  let r, e, n, o;
  return e = new Gn({
    props: { componentContext: (
      /*context*/
      t[40]
    ) }
  }), {
    c() {
      r = Ve("div"), Bt(e.$$.fragment), n = cr(), r.hidden = !0, g(r, "data-hidden", "true");
    },
    m(i, s) {
      q(i, r, s), Rt(e, r, null), ht(r, n), o = !0;
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
      i && J(r), Lt(e);
    }
  };
}
function Lc(t) {
  let r, e, n = (
    /*context*/
    t[40] && /*context*/
    t[40] !== /*selectedComponentContext*/
    t[6] && Rc(t)
  );
  return {
    c() {
      n && n.c(), r = Zt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, i) {
      /*context*/
      o[40] && /*context*/
      o[40] !== /*selectedComponentContext*/
      o[6] ? n ? (n.p(o, i), i[0] & /*childContexts, selectedComponentContext*/
      192 && B(n, 1)) : (n = Rc(o), n.c(), B(n, 1), n.m(r.parentNode, r)) : n && (ar(), Q(n, 1, 1, () => {
        n = null;
      }), ur());
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
function Bc(t) {
  let r = (
    /*selectedId*/
    t[5]
  ), e, n, o = Hc(t);
  return {
    c() {
      o.c(), e = Zt();
    },
    m(i, s) {
      o.m(i, s), q(i, e, s), n = !0;
    },
    p(i, s) {
      s[0] & /*selectedId*/
      32 && Sr(r, r = /*selectedId*/
      i[5]) ? (ar(), Q(o, 1, 1, E), ur(), o = Hc(i), o.c(), B(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
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
function Hc(t) {
  let r, e;
  return r = new Gn({
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function ay(t) {
  let r, e, n, o, i, s, a, l;
  n = new Gn({
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
      r = Ve("div"), e = Ve("div"), Bt(n.$$.fragment), o = cr(), g(e, "class", ki["state__animation-child-inner"]), g(r, "class", ki["state__animation-child"]);
    },
    m(c, f) {
      q(c, r, f), ht(r, e), Rt(n, e, null), ht(r, o), s = !0, a || (l = Be(r, "introend", u), a = !0);
    },
    p(c, f) {
      t = c;
      const _ = {};
      f[0] & /*animationList*/
      16 && (_.componentContext = /*item*/
      t[37].componentContextCopy), n.$set(_);
    },
    i(c) {
      s || (B(n.$$.fragment, c), i || to(() => {
        i = _l(
          r,
          oy,
          /*item*/
          t[37]
        ), i.start();
      }), s = !0);
    },
    o(c) {
      Q(n.$$.fragment, c), s = !1;
    },
    d(c) {
      c && J(r), Lt(n), a = !1, l();
    }
  };
}
function uy(t) {
  let r, e, n, o, i, s = `${/*item*/
  t[37].offsetLeft}px`, a = `${/*item*/
  t[37].offsetTop}px`, l = `${/*item*/
  t[37].width}px`, u = `${/*item*/
  t[37].height}px`, c, f, _;
  n = new Gn({
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
      r = Ve("div"), e = Ve("div"), Bt(n.$$.fragment), o = cr(), g(e, "class", ki["state__animation-child-inner"]), g(r, "class", ki["state__animation-child"]), D(r, "left", s), D(r, "top", a), D(r, "width", l), D(r, "height", u);
    },
    m(m, p) {
      q(m, r, p), ht(r, e), Rt(n, e, null), ht(r, o), c = !0, f || (_ = Be(r, "introend", h), f = !0);
    },
    p(m, p) {
      t = m;
      const k = {};
      p[0] & /*animationList*/
      16 && (k.componentContext = /*item*/
      t[37].componentContextCopy), n.$set(k), p[0] & /*animationList*/
      16 && s !== (s = `${/*item*/
      t[37].offsetLeft}px`) && D(r, "left", s), p[0] & /*animationList*/
      16 && a !== (a = `${/*item*/
      t[37].offsetTop}px`) && D(r, "top", a), p[0] & /*animationList*/
      16 && l !== (l = `${/*item*/
      t[37].width}px`) && D(r, "width", l), p[0] & /*animationList*/
      16 && u !== (u = `${/*item*/
      t[37].height}px`) && D(r, "height", u);
    },
    i(m) {
      c || (B(n.$$.fragment, m), i || to(() => {
        i = _l(
          r,
          ty,
          /*item*/
          t[37]
        ), i.start();
      }), c = !0);
    },
    o(m) {
      Q(n.$$.fragment, m), c = !1;
    },
    d(m) {
      m && J(r), Lt(n), f = !1, _();
    }
  };
}
function Wc(t, r) {
  let e, n, o, i, s;
  const a = [uy, ay], l = [];
  function u(c, f) {
    return "direction" in /*item*/
    c[37] ? 0 : 1;
  }
  return n = u(r), o = l[n] = a[n](r), {
    key: t,
    first: null,
    c() {
      e = Zt(), o.c(), i = Zt(), this.first = e;
    },
    m(c, f) {
      q(c, e, f), l[n].m(c, f), q(c, i, f), s = !0;
    },
    p(c, f) {
      r = c;
      let _ = n;
      n = u(r), n === _ ? l[n].p(r, f) : (ar(), Q(l[_], 1, 1, () => {
        l[_] = null;
      }), ur(), o = l[n], o ? o.p(r, f) : (o = l[n] = a[n](r), o.c()), B(o, 1), o.m(i.parentNode, i));
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
function cy(t) {
  let r, e, n, o = [], i = new iy(), s, a = (
    /*childContexts*/
    t[7] && Oc(t)
  ), l = (
    /*selectedComponentContext*/
    t[6] && Bc(t)
  ), u = nr(
    /*animationList*/
    t[4]
  );
  const c = (f) => (
    /*item*/
    f[37]
  );
  for (let f = 0; f < u.length; f += 1) {
    let _ = Nc(t, u, f), h = c(_);
    i.set(h, o[f] = Wc(h, _));
  }
  return {
    c() {
      a && a.c(), r = cr(), l && l.c(), e = cr(), n = Ve("div");
      for (let f = 0; f < o.length; f += 1)
        o[f].c();
      g(n, "class", ki.state__animations), g(n, "aria-hidden", "true");
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
      128 && B(a, 1)) : (a = Oc(f), a.c(), B(a, 1), a.m(r.parentNode, r)) : a && (ar(), Q(a, 1, 1, () => {
        a = null;
      }), ur()), /*selectedComponentContext*/
      f[6] ? l ? (l.p(f, _), _[0] & /*selectedComponentContext*/
      64 && B(l, 1)) : (l = Bc(f), l.c(), B(l, 1), l.m(e.parentNode, e)) : l && (ar(), Q(l, 1, 1, () => {
        l = null;
      }), ur()), _[0] & /*animationList, onOutro*/
      8208 && (u = nr(
        /*animationList*/
        f[4]
      ), ar(), o = Fd(o, _, c, 1, f, u, i, n, Vd, Wc, null, Nc), ur());
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
function fy(t) {
  let r, e, n, o;
  const i = [ly, sy], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Zt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (ar(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ur()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
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
function dy(t) {
  return t.some((r) => r.type === "fade");
}
function i_(t) {
  return t.type === "change_bounds" ? t : t.type === "set" ? i_(t.items[0]) : null;
}
function _y(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h = E, m = () => (h(), h = V(i, (fe) => e(20, _ = fe)), i);
  t.$$.on_destroy.push(() => h());
  let { componentContext: p } = r, { layoutParams: k = void 0 } = r;
  const w = Tr(Kr);
  let O = !1, U, R = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Set(), ue = [], T = [], X = [], le = [], C, M, P, H, se = !1, de = {
    devapi: {
      getState() {
        return M;
      },
      setState(fe) {
        return ee(fe);
      }
    }
  };
  function Ee() {
    e(15, se = !1);
  }
  function Ae(fe) {
    H ? e(6, P = H[u.findIndex((je) => je.state_id === (fe == null ? void 0 : fe.state_id))]) : (P && P.destroy(), e(6, P = fe != null && fe.div ? p.produceChildContext(fe.div, {
      path: fe.state_id || "<unknown>"
    }) : void 0));
  }
  function pe(fe) {
    const je = p.json.states;
    if (!je)
      return;
    const ce = /* @__PURE__ */ new Set();
    e(16, u = je.map((te, _e) => (u[_e].div !== fe[_e] && te.state_id && ce.add(te.state_id), { ...te, div: fe[_e] }))), e(0, p.json = { ...p.json, states: u }, p), M && ce.has(M) && Ae(u.find((te) => te.state_id === M) || null);
  }
  function De(fe, je, ce) {
    let { json: te, parentComponentContext: _e, transitions: ie, node: Fe } = je;
    te = p.getJsonWithVars(te), ie = p.getJsonWithVars(ie);
    const xe = o_(ie), Xe = je.bbox || Fe.getBoundingClientRect(), oe = {
      ...te,
      margins: void 0,
      alpha: dy(xe) ? void 0 : te.alpha
    };
    return {
      id: _e.id || "",
      json: oe,
      componentContextCopy: _e.produceChildContext(oe, { fake: vu }),
      elementBbox: Xe,
      rootBbox: fe,
      transitions: xe,
      alpha: te.alpha,
      width: Xe.width,
      height: Xe.height,
      offsetTop: Xe.top - fe.top,
      offsetLeft: Xe.left - fe.left,
      direction: ce,
      resolvePromise: je.resolvePromise,
      node: je.node
    };
  }
  async function ee(fe) {
    if (M === fe)
      return p;
    w.setRunning("stateChange", !0);
    const je = new Set($);
    ue.forEach((oe) => {
      oe.resolvePromise && oe.resolvePromise();
    }), e(4, ue = []);
    let ce = [];
    if (U) {
      const oe = U.getBoundingClientRect();
      ce = X.map((Ye) => De(oe, Ye, "out"));
    }
    le.forEach((oe) => {
      oe.transitions && R.set(oe.id, {
        transitions: oe.transitions,
        rect: oe.node.getBoundingClientRect()
      });
    }), T = [], X = [], le = [];
    const te = u.find((oe) => oe.state_id === fe) || null;
    if (te ? (e(5, M = fe), a == null || a.setValue(M), Ae(te)) : p.logError(K(new Error("Cannot find state with id"), { additional: { stateId: fe } })), await An(), !U)
      return;
    const _e = U.getBoundingClientRect();
    let ie = T.filter((oe) => {
      var Ye;
      return oe.parentComponentContext.id && !je.has(oe.parentComponentContext.id) ? !0 : ((Ye = oe.resolvePromise) == null || Ye.call(oe), !1);
    }).map((oe) => De(_e, oe, "in"));
    ce = ce.filter((oe) => {
      var Ye;
      return oe.id && !$.has(oe.id) ? !0 : ((Ye = oe.resolvePromise) == null || Ye.call(oe), !1);
    });
    const Fe = ce.concat(ie), xe = Fe.reduce(
      (oe, Ye) => Math.max(oe, Pc(Ye.transitions)),
      0
    ), Xe = le.filter((oe) => R.has(oe.id)).map((oe) => {
      const Ye = {
        ...oe.json,
        margins: void 0,
        width: { type: "match_parent" },
        height: { type: "match_parent" }
      }, Oe = R.get(oe.id);
      return {
        id: oe.parentComponentContext.id || "",
        json: Ye,
        componentContextCopy: oe.parentComponentContext.produceChildContext(Ye, { fake: vu }),
        rootBbox: _e,
        beforeBbox: Oe.rect,
        afterBbox: oe.node.getBoundingClientRect(),
        node: oe.node,
        transition: p.getJsonWithVars(i_(Oe.transitions)),
        resolvePromise: oe.resolvePromise
      };
    });
    return e(4, ue = [
      ...Fe.map((oe) => ({ ...oe, maxDuration: xe })),
      ...Xe
    ]), R.clear(), w.setRunning("stateChange", !1), p;
  }
  pi(ya, {
    // eslint-disable-next-line max-params
    runVisibilityTransition(fe, je, ce, te, _e, ie) {
      if (!U)
        return Promise.resolve();
      const Fe = U.getBoundingClientRect(), xe = De(
        Fe,
        {
          json: fe,
          parentComponentContext: je,
          transitions: ce,
          node: te,
          bbox: ie
        },
        _e
      ), Xe = Pc(xe.transitions), oe = { ...xe, maxDuration: Xe };
      return e(4, ue = [...ue.filter((Ye) => Ye.node !== xe.node), oe]), new Promise((Ye) => {
        oe.resolvePromise = Ye;
      });
    },
    registerChildWithTransitionIn(fe, je, ce, te) {
      const _e = {
        json: fe,
        parentComponentContext: je,
        transitions: ce,
        node: te
      };
      return T.push(_e), new Promise((ie) => {
        _e.resolvePromise = ie;
      });
    },
    registerChildWithTransitionOut(fe, je, ce, te) {
      const _e = {
        json: fe,
        parentComponentContext: je,
        transitions: ce,
        node: te
      };
      return X.push(_e), new Promise((ie) => {
        _e.resolvePromise = ie;
      });
    },
    registerChildWithTransitionChange(fe, je, ce, te) {
      const _e = je.id;
      if (!_e)
        return Promise.resolve();
      const ie = {
        id: _e,
        json: fe,
        parentComponentContext: je,
        transitions: ce,
        node: te
      };
      return le.push(ie), new Promise((Fe) => {
        ie.resolvePromise = Fe;
      });
    },
    hasTransitionChange(fe) {
      return fe ? R.has(fe) : !1;
    },
    registerChild(fe) {
      $.add(fe);
    },
    unregisterChild(fe) {
      $.delete(fe);
    }
  });
  function Te(fe) {
    if (!se && (e(15, se = !0), fe.length)) {
      w.devtoolCreateHierarchy === "eager" && e(7, H = fe.map((ce) => ce != null && ce.div ? p.produceChildContext(ce.div, { path: ce.state_id || "<unknown>" }) : void 0));
      const je = (a == null ? void 0 : a.getValue()) || o;
      if (je) {
        e(5, M = je);
        const ce = fe.find((te) => te.state_id === M) || null;
        Ae(ce), ce || p.logError(K(new Error("Cannot find state for default_state_id"), { additional: { selectedId: M } }));
      } else {
        const ce = fe[0];
        e(5, M = ce.state_id), Ae(ce);
      }
      a && (a.setValue(M), a.subscribe((ce) => {
        ee(ce);
      }));
    }
  }
  function We(fe) {
    e(4, ue = ue.filter((je) => je !== fe)), fe.resolvePromise && fe.resolvePromise();
  }
  an(() => {
    H ? H.forEach((fe) => {
      fe == null || fe.destroy();
    }) : P && P.destroy(), C && (C(), e(14, C = void 0));
  });
  const Ke = (fe) => We(fe), ke = (fe) => We(fe);
  function et(fe) {
    Fr[fe ? "unshift" : "push"](() => {
      U = fe, e(3, U);
    });
  }
  return t.$$set = (fe) => {
    "componentContext" in fe && e(0, p = fe.componentContext), "layoutParams" in fe && e(1, k = fe.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*componentContext*/
    1 && e(17, n = p.json.div_id || p.id), t.$$.dirty[0] & /*componentContext*/
    1 && (o = p.getJsonWithVars(p.json.default_state_id)), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(10, i = p.getDerivedFromVars(p.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, s = p.json.state_id_variable), t.$$.dirty[0] & /*stateVariableName, componentContext*/
    524289 && (a = s ? p.getVariable(s, "string") || w.awaitGlobalVariable(s, "string", "") : null), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, l = p.origJson), t.$$.dirty[0] & /*origJson*/
    262144 && l && Ee(), t.$$.dirty[0] & /*stateId, componentContext*/
    131073 && (n ? e(2, O = !1) : (e(2, O = !0), p.logError(K(new Error('Missing "id" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext*/
    1 && p.json && ($ = /* @__PURE__ */ new Set()), t.$$.dirty[0] & /*componentContext*/
    1 && e(16, u = Array.isArray(p.json.states) && p.json.states || []), t.$$.dirty[0] & /*items*/
    65536 && e(9, c = u.map((fe) => {
      var je;
      return { json: fe.div, id: (je = fe.div) == null ? void 0 : je.id };
    })), t.$$.dirty[0] & /*items, componentContext*/
    65537 && (u != null && u.length ? e(2, O = !1) : (e(2, O = !0), p.logError(K(new Error('Empty "states" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext, stateUnregister, stateId*/
    147457 && p.json && (C && (C(), e(14, C = void 0)), n && !(p != null && p.fakeElement) && e(14, C = p.registerState(n, ee))), t.$$.dirty[0] & /*inited, items*/
    98304 && !se && Te(u), t.$$.dirty[0] & /*$jsonClipToBounds*/
    1048576 && e(8, f = {
      overflow: _ === !1 || _ === 0 ? "visible" : void 0
    });
  }, [
    p,
    k,
    O,
    U,
    ue,
    M,
    P,
    H,
    f,
    c,
    i,
    de,
    pe,
    We,
    C,
    se,
    u,
    n,
    l,
    s,
    _,
    Ke,
    ke,
    et
  ];
}
class py extends Rr {
  constructor(r) {
    super(), Or(this, r, _y, fy, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const gy = "appkit-pager", hy = "appkit-pager__items", my = "appkit-pager_animated", by = "appkit-pager__item", yy = "appkit-pager_clip", wy = "appkit-pager_orientation_horizontal", ky = "appkit-pager_orientation_vertical", vy = "appkit-pager__item_height_content", jy = "appkit-pager__item_height_fixed", Cy = "appkit-pager__item_width_content", Ey = "appkit-pager__item_width_fixed", Ay = "appkit-pager__arrow", To = {
  pager: gy,
  pager__items: hy,
  pager_animated: my,
  pager__item: by,
  "pager_scroll-align_start": "appkit-pager_scroll-align_start",
  "pager_scroll-align_center": "appkit-pager_scroll-align_center",
  "pager_scroll-align_end": "appkit-pager_scroll-align_end",
  pager_clip: yy,
  pager_orientation_horizontal: wy,
  pager_orientation_vertical: ky,
  "pager_cross-align_center": "appkit-pager_cross-align_center",
  "pager_cross-align_end": "appkit-pager_cross-align_end",
  pager__item_height_content: vy,
  pager__item_height_fixed: jy,
  "pager__item_height-constrained": "appkit-pager__item_height-constrained",
  pager__item_width_content: Cy,
  pager__item_width_fixed: Ey,
  "pager__item_width-constrained": "appkit-pager__item_width-constrained",
  pager__arrow: Ay,
  "pager__arrow-icon-path": "appkit-pager__arrow-icon-path"
}, { window: Sy } = Po;
function Uc(t, r, e) {
  const n = t.slice();
  return n[95] = r[e], n;
}
function Vy(t) {
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function Fy(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
        "pager",
        To,
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
      $$slots: { default: [Ty] },
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
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      8192 && (i.cls = mt(
        "pager",
        To,
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
      Lt(r, n);
    }
  };
}
function Gc(t) {
  let r, e, n, o, i, s, a;
  return e = new Gn({
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
      r = Ve("div"), Bt(e.$$.fragment), n = cr(), g(r, "class", o = mt("pager__item", To, Yc(
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
      q(l, r, u), Rt(e, r, null), ht(r, n), a = !0;
    },
    p(l, u) {
      const c = {};
      u[0] & /*visibleItems*/
      16 && (c.componentContext = /*item*/
      l[95].componentContext), u[0] & /*childLayoutParams*/
      512 && (c.layoutParams = /*childLayoutParams*/
      l[9]), e.$set(c), (!a || u[0] & /*orientation, visibleItems*/
      20 && o !== (o = mt("pager__item", To, Yc(
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
      l && J(r), Lt(e);
    }
  };
}
function Jc(t) {
  let r, e, n, o = !/*leftClass*/
  t[27] && Iy();
  return {
    c() {
      r = Ve("div"), o && o.c(), g(
        r,
        "class",
        /*leftClass*/
        t[27] || `${To.pager__arrow} ${go.arrow} ${go.arrow_left}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = Be(
        r,
        "click",
        /*click_handler*/
        t[70]
      ), e = !0);
    },
    p: E,
    d(i) {
      i && J(r), o && o.d(), e = !1, n();
    }
  };
}
function Iy(t) {
  let r, e;
  return {
    c() {
      r = xr("svg"), e = xr("path"), g(e, "class", To["pager__arrow-icon-path"]), g(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", go.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), ht(r, e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function qc(t) {
  let r, e, n, o = !/*rightClass*/
  t[28] && Dy();
  return {
    c() {
      r = Ve("div"), o && o.c(), g(
        r,
        "class",
        /*rightClass*/
        t[28] || `${To.pager__arrow} ${go.arrow} ${go.arrow_right}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = Be(
        r,
        "click",
        /*click_handler_1*/
        t[71]
      ), e = !0);
    },
    p: E,
    d(i) {
      i && J(r), o && o.d(), e = !1, n();
    }
  };
}
function Dy(t) {
  let r, e;
  return {
    c() {
      r = xr("svg"), e = xr("path"), g(e, "class", To["pager__arrow-icon-path"]), g(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", go.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), ht(r, e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function Ty(t) {
  let r, e, n, o, i, s, a, l, u, c = nr(
    /*visibleItems*/
    t[4]
  ), f = [];
  for (let p = 0; p < c.length; p += 1)
    f[p] = Gc(Uc(t, c, p));
  const _ = (p) => Q(f[p], 1, 1, () => {
    f[p] = null;
  });
  let h = (
    /*hasScrollLeft*/
    t[11] && /*shouldCheckArrows*/
    t[12] && Jc(t)
  ), m = (
    /*hasScrollRight*/
    t[10] && /*shouldCheckArrows*/
    t[12] && qc(t)
  );
  return {
    c() {
      r = Ve("div");
      for (let p = 0; p < f.length; p += 1)
        f[p].c();
      o = cr(), h && h.c(), i = cr(), m && m.c(), s = Zt(), g(r, "class", e = To.pager__items + " " + /*$jsonRestrictParentScroll*/
      (t[24] ? Cr["root_restrict-scroll"] : "")), g(r, "style", n = er(
        /*style*/
        t[14]
      ));
    },
    m(p, k) {
      q(p, r, k);
      for (let w = 0; w < f.length; w += 1)
        f[w] && f[w].m(r, null);
      t[69](r), q(p, o, k), h && h.m(p, k), q(p, i, k), m && m.m(p, k), q(p, s, k), a = !0, l || (u = [
        Be(
          r,
          "transitionend",
          /*onTransitionEnd*/
          t[37]
        ),
        Be(
          r,
          "focus",
          /*onFocus*/
          t[33],
          !0
        ),
        Be(
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
          const O = Uc(p, c, w);
          f[w] ? (f[w].p(O, k), B(f[w], 1)) : (f[w] = Gc(O), f[w].c(), B(f[w], 1), f[w].m(r, null));
        }
        for (ar(), w = c.length; w < f.length; w += 1)
          _(w);
        ur();
      }
      (!a || k[0] & /*$jsonRestrictParentScroll*/
      16777216 && e !== (e = To.pager__items + " " + /*$jsonRestrictParentScroll*/
      (p[24] ? Cr["root_restrict-scroll"] : ""))) && g(r, "class", e), (!a || k[0] & /*style*/
      16384 && n !== (n = er(
        /*style*/
        p[14]
      ))) && g(r, "style", n), /*hasScrollLeft*/
      p[11] && /*shouldCheckArrows*/
      p[12] ? h ? h.p(p, k) : (h = Jc(p), h.c(), h.m(i.parentNode, i)) : h && (h.d(1), h = null), /*hasScrollRight*/
      p[10] && /*shouldCheckArrows*/
      p[12] ? m ? m.p(p, k) : (m = qc(p), m.c(), m.m(s.parentNode, s)) : m && (m.d(1), m = null);
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
      p && (J(r), J(o), J(i), J(s)), on(f, p), t[69](null), h && h.d(p), m && m.d(p), l = !1, Br(u);
    }
  };
}
function My(t) {
  let r, e, n, o, i, s;
  const a = [Fy, Vy], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[5] ? 1 : 0
    );
  }
  return ~(r = u(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = Zt();
    },
    m(c, f) {
      ~r && l[r].m(c, f), q(c, n, f), o = !0, i || (s = Be(
        Sy,
        "resize",
        /*resnap*/
        t[38]
      ), i = !0);
    },
    p(c, f) {
      let _ = r;
      r = u(c), r === _ ? ~r && l[r].p(c, f) : (e && (ar(), Q(l[_], 1, 1, () => {
        l[_] = null;
      }), ur()), ~r ? (e = l[r], e ? e.p(c, f) : (e = l[r] = a[r](c), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
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
const ws = {
  wrap_content: "content",
  fixed: "fixed",
  match_parent: "parent"
}, yo = 2, Py = 400, Ny = 8;
function Yc(t, r) {
  var n, o, i, s;
  if (t === "horizontal") {
    const a = ((n = r.height) == null ? void 0 : n.type) || "";
    return {
      height: a in ws ? ws[a] : "content",
      "height-constrained": ((o = r.height) == null ? void 0 : o.type) === "wrap_content" ? _n(r.height.constrained, !1) : !1
    };
  }
  const e = ((i = r.width) == null ? void 0 : i.type) || "";
  return {
    width: e in ws ? ws[e] : "parent",
    "width-constrained": ((s = r.width) == null ? void 0 : s.type) === "wrap_content" ? _n(r.width.constrained, !1) : !1
  };
}
function zy(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, U, R, $, ue, T, X = E, le = () => (X(), X = V(c, (v) => e(60, T = v)), c), C, M = E, P = () => (M(), M = V(i, (v) => e(61, C = v)), i), H, se = E, de = () => (se(), se = V(f, (v) => e(62, H = v)), f), Ee, Ae = E, pe = () => (Ae(), Ae = V(l, (v) => e(63, Ee = v)), l), De, ee = E, Te = () => (ee(), ee = V(a, (v) => e(64, De = v)), a), We, Ke = E, ke = () => (Ke(), Ke = V(s, (v) => e(65, We = v)), s), et, fe = E, je = () => (fe(), fe = V(Ce, (v) => e(66, et = v)), Ce), ce, te = E, _e = () => (te(), te = V(o, (v) => e(67, ce = v)), o), ie, Fe = E, xe = () => (Fe(), Fe = V(_, (v) => e(68, ie = v)), _), Xe, oe = E, Ye = () => (oe(), oe = V(u, (v) => e(24, Xe = v)), u);
  t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => te()), t.$$.on_destroy.push(() => Fe()), t.$$.on_destroy.push(() => oe());
  let { componentContext: Oe } = r, { layoutParams: st = void 0 } = r;
  const at = Tr(Kr), ut = at.direction;
  bn(t, ut, (v) => e(6, $ = v));
  const kt = at.genId("pager"), rt = at.getCustomization("pagerLeftClass"), Nt = at.getCustomization("pagerRightClass"), ct = at.isDesktop;
  bn(t, ct, (v) => e(59, ue = v));
  let ge, he, pt = !1, Ce, I = 0, Ct = 0, dt = !1, At = "horizontal", Tt = "0em", nt = {}, Y = "", Mt = "", Vt = "", Gt = {}, Jt = "start", me = "center", Ue = [], _t = 0, ye = [], Qe = {}, ze = {}, or, Pe, yt = 0, Ft = !1, It = !1, hr = !1, Me = !1, vt = 0, sr = "", $t = 0, Yt;
  function mr() {
    e(43, nt = {}), e(9, Gt = {}), e(47, Jt = "start"), e(48, me = "center"), e(52, Ft = !1), e(53, It = !1), Me = !1;
  }
  function jr(v) {
    e(0, Oe = e(51, or = {
      ...Oe,
      json: {
        ...Oe.json,
        items: v.filter(zo)
      }
    }));
  }
  function Qt(v, ne) {
    Pe && Pe.update({
      instId: kt,
      currentItem: ze[ne],
      size: v,
      scrollToPagerItem(d) {
        Wt(Qe[d]);
      }
    });
  }
  function xt(v) {
    var d;
    if (v === Ct || (Ct = v, !Ue[v]))
      return;
    const ne = (d = Ue[v].json) == null ? void 0 : d.selected_actions;
    ne != null && ne.length && Oe.execAnyActions(ne);
  }
  function G(v) {
    const ne = It ? !1 : v === 0, d = It ? !1 : v === ye.length - 1, j = At === "horizontal", Ie = he.children[v + (It ? yo : 0)];
    if (!Ie)
      return 0;
    const Re = j ? "offsetLeft" : "offsetTop", Pt = j ? "offsetWidth" : "offsetHeight", L = ot(), Dt = zr(), it = tr(), Ge = jt();
    return L >= Ge + Dt + it || ne ? 0 : d ? (L - Dt - it - Ge) * ($ === "rtl" ? -1 : 1) : me === "start" && $ === "ltr" || me === "end" && $ === "rtl" ? -(Ie[Re] - Dt) : me === "end" && $ === "ltr" || me === "start" && $ === "rtl" ? -(Ie[Re] + Ie[Pt] - L + it) : he[Pt] / 2 - (Ie[Re] + Ie[Pt] / 2);
  }
  function ft(v, ne) {
    if (!he)
      return;
    const d = G(v);
    e(54, hr = ne), An().then(() => {
      var j;
      vt = d, e(55, sr = St(vt)), e(40, I = (j = Qe[v]) != null ? j : 0), Me = It && (v < 0 || v >= _t);
    });
  }
  function Wt(v, ne = !0) {
    var d;
    ft((d = ze[v]) != null ? d : 0, ne);
  }
  function St(v) {
    return `${At === "horizontal" ? "translateX" : "translateY"}(${fn(v)})`;
  }
  function br(v, ne) {
    return It && v >= -yo && v < _t + yo ? v : v > ye.length - 1 ? ne === "ring" ? So(v, ye.length) : ye.length - 1 : v < 0 ? ne === "ring" ? So(v, ye.length) : 0 : v;
  }
  function Er(v, ne, d) {
    const j = br(ze[I] - v, ne);
    ft(j, d);
  }
  function wr(v, ne, d) {
    const j = br(ze[I] + v, ne);
    ft(j, d);
  }
  function Ir() {
    Pe == null || Pe.destroy(), Pe = void 0, ge && (at.unregisterInstance(ge), ge = void 0), Oe.fakeElement || (Pe = Oe.registerPager(Oe.id || void 0)), Oe.id && !Oe.fakeElement && (ge = Oe.id, at.registerInstance(
      ge,
      {
        setCurrentItem(v, ne) {
          if (v < 0 || v > Ue.length - 1)
            throw new Error('Item is out of range in "set-current-item" action');
          Wt(v, ne);
        },
        setPreviousItem: Er,
        setNextItem: wr,
        scrollToStart(v) {
          Wt(ye[It ? yo : 0].index, v);
        },
        scrollToEnd(v) {
          Wt(ye[ye.length - 1 - (It ? yo : 0)].index, v);
        },
        scrollCombined({ step: v, overflow: ne, animated: d }) {
          v && Wt(br(ze[I] + v, ne || "clamp"), d);
        }
      },
      "warn"
    ));
  }
  function zr() {
    var ne, d, j;
    return At === "horizontal" ? (d = (ne = nt.start) != null ? ne : $ === "ltr" ? nt.left : nt.right) != null ? d : 0 : (j = nt.top) != null ? j : 0;
  }
  function tr() {
    var ne, d, j;
    return At === "horizontal" ? (d = (ne = nt.end) != null ? ne : $ === "ltr" ? nt.right : nt.left) != null ? d : 0 : (j = nt.bottom) != null ? j : 0;
  }
  function ot() {
    var ne, d;
    return he ? At === "horizontal" ? ((ne = he.parentElement) == null ? void 0 : ne.offsetWidth) || 0 : ((d = he.parentElement) == null ? void 0 : d.offsetHeight) || 0 : 0;
  }
  function jt() {
    const v = At === "horizontal", ne = Array.from(he.children), d = ne[0].getBoundingClientRect(), j = ne[ne.length - 1].getBoundingClientRect();
    return v ? $ === "rtl" ? d.right - j.left : j.right - d.left : j.bottom - d.top;
  }
  function Kt(v) {
    const ne = v.target;
    if (!(ne instanceof Element) || !he)
      return;
    let d = ne;
    for (; d.parentElement && d.parentElement !== he; )
      d = d.parentElement;
    if (!d)
      return;
    const j = Array.from(he.children).indexOf(d);
    if (j < 0)
      return;
    const Ie = j - (It ? yo : 0);
    ft(Ie, !0);
  }
  function qt(v) {
    Date.now() - $t < 300 && (v.preventDefault(), v.stopImmediatePropagation());
  }
  function pr(v) {
    if (!at.pagerMouseDragEnabled && v.pointerType === "mouse")
      return;
    const ne = At === "horizontal", d = ne ? v.pageX : v.pageY, j = vt, Ie = ot() - zr() - tr(), Re = jt(), Pt = Date.now(), L = (it) => {
      const Ge = ne ? it.pageX : it.pageY;
      let Je = j + Ge - d;
      if (!It) {
        if ($ === "rtl") {
          if (Je < 0)
            Je = Je * Ie / (Je + Ie * 3);
          else if (Je + Ie > Re) {
            let Ht = Je + Ie - Re;
            Ht = Ht * Ie / (Ht + Ie * 3), Je = -Ie + Re + Ht;
          }
        } else if ($ === "ltr") {
          if (Je > 0)
            Je = Je * Ie / (Je + Ie * 3);
          else if (-Je + Ie > Re) {
            let Ht = -Je + Ie - Re;
            Ht = Ht * Ie / (Ht + Ie * 3), Je = Ie - Re - Ht;
          }
        }
      }
      vt = Je, e(55, sr = St(vt)), it.preventDefault();
    }, Dt = (it) => {
      Yt == null || Yt(), Yt = void 0;
      const Ge = Math.min(512, Ie), Je = Math.abs(j - vt);
      if (Je < Ny) {
        ft(ze[I], !0);
        return;
      }
      it.preventDefault(), $t = Date.now();
      const Ht = Math.min(1, (Date.now() - Pt) / 750);
      let kr = ze[I];
      Je > Ge / 4 * Ht && (kr += (j > vt ? 1 : -1) * ($ === "rtl" ? -1 : 1)), It || (kr >= ye.length ? kr = ye.length - 1 : kr < 0 && (kr = 0)), ft(kr, !0);
    };
    window.addEventListener("pointermove", L), window.addEventListener("pointerup", Dt), window.addEventListener("pointercancel", Dt), Yt == null || Yt(), Yt = () => {
      window.removeEventListener("pointermove", L), window.removeEventListener("pointerup", Dt), window.removeEventListener("pointercancel", Dt);
    };
  }
  function lt(v) {
    if (!v.deltaX || Math.abs(v.deltaX) < Math.abs(v.deltaY))
      return;
    const ne = Date.now();
    if (ne - yt < Py)
      return;
    yt = ne, ($ === "rtl" ? -1 : 1) * v.deltaX > 0 ? wr(1, "clamp", !0) : Er(1, "clamp", !0);
  }
  function re() {
    e(54, hr = !1), Me && An().then(() => {
      Wt(I, !1);
    });
  }
  function bt() {
    An().then(() => {
      Wt(I, !1);
    });
  }
  ro(() => {
    e(39, pt = !0), he && Wt(I, !1);
  }), an(() => {
    e(39, pt = !1), Yt == null || Yt(), Ue.forEach((v) => {
      v.destroy();
    }), ge && (at.unregisterInstance(ge), ge = void 0), Pe == null || Pe.destroy(), Pe = void 0;
  });
  function ir(v) {
    Fr[v ? "unshift" : "push"](() => {
      he = v, e(7, he);
    });
  }
  const yr = () => ($ === "ltr" ? Er : wr)(1, "clamp", !0), fr = () => ($ === "ltr" ? wr : Er)(1, "clamp", !0);
  return t.$$set = (v) => {
    "componentContext" in v && e(0, Oe = v.componentContext), "layoutParams" in v && e(1, st = v.layoutParams);
  }, t.$$.update = () => {
    var v, ne, d, j, Ie;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(58, n = Oe.origJson), t.$$.dirty[1] & /*origJson*/
    134217728 && n && mr(), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(23, o = typeof ((v = Oe.json.item_builder) == null ? void 0 : v.data) == "string" ? Oe.getDerivedFromVars((ne = Oe.json.item_builder) == null ? void 0 : ne.data, void 0, !0) : (d = Oe.json.item_builder) != null && d.data ? $o(Oe.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && P(e(22, i = Oe.getDerivedFromVars(Oe.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && ke(e(21, s = Oe.getDerivedFromVars(Oe.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(20, a = Oe.getDerivedFromVars(Oe.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(19, l = Oe.getDerivedFromVars(Oe.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(18, u = Oe.getDerivedFromVars(Oe.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(17, c = Oe.getDerivedFromVars(Oe.json.cross_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(16, f = Oe.getDerivedFromVars(Oe.json.scroll_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(15, _ = Oe.getDerivedFromVars(Oe.json.infinite_scroll))), t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$jsonInfiniteScroll*/
    64 && e(52, Ft = _n(ie, Ft)), t.$$.dirty[0] & /*componentContext, items*/
    9 | t.$$.dirty[1] & /*prevContext*/
    1048576 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    32) {
      let Re = [];
      if (Oe.json.item_builder && Array.isArray(ce) && Array.isArray(Oe.json.item_builder.prototypes)) {
        const it = Oe.json.item_builder;
        Re = wl(ce, at, Oe, it);
      } else
        Re = (Array.isArray(Oe.json.items) && Oe.json.items || []).map((it, Ge) => ({
          div: it,
          key: it.id || { index: Ge, data: it }
        }));
      const Pt = new Set(Ue), L = /* @__PURE__ */ new Map();
      let Dt = !1;
      or === Oe && Ue.forEach((it) => {
        it.key && (typeof it.key == "string" && L.has(it.key) ? Dt || (Dt = !0, Oe.logError(K(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: it.key } }))) : L.set(
          typeof it.key == "string" ? it.key : it.key.index,
          it
        ));
      }), e(3, Ue = Re.map((it, Ge) => {
        let Je = !Dt && L.get(it.id), Ht = L.get(Ge);
        return !Je && !it.id && typeof it.key == "object" && typeof (Ht == null ? void 0 : Ht.key) == "object" && qi(Ht.key.data, it.key.data) && (Je = Ht), Je ? (Pt.delete(Je), Je) : Oe.produceChildContext(it.div, {
          path: Ge,
          variables: it.vars,
          id: it.id,
          key: it.key
        });
      }));
      for (const it of Pt)
        it.destroy();
      e(51, or = Oe);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    9) {
      let Re = [];
      Ue.forEach((Pt) => {
        Re.push(Oe.getDerivedFromVars({
          width: Pt.json.width,
          height: Pt.json.height,
          visibility: Pt.json.visibility
        }));
      }), je(e(8, Ce = Ji(Re, (Pt) => [...Pt])));
    }
    if (t.$$.dirty[0] & /*items, visibleItems*/
    24 | t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$childStore*/
    16) {
      if (e(50, ze = {}), Qe = {}, e(4, ye = et.map((Re, Pt) => ({
        width: Re.width,
        height: Re.height,
        index: Pt,
        componentContext: Ue[Pt]
      })).filter((Re, Pt) => et[Pt].visibility !== "gone")), ye.forEach((Re, Pt) => {
        Qe[Pt] = Re.index, e(50, ze[Re.index] = Pt, ze);
      }), e(49, _t = ye.length), Ft && ye.length >= yo) {
        const Re = ye.slice(0, yo).map((L) => ({
          ...L,
          componentContext: L.componentContext.dup(ni),
          duplicate: !0
        })), Pt = ye.slice(ye.length - yo).map((L) => ({
          ...L,
          componentContext: L.componentContext.dup(ni),
          duplicate: !0
        }));
        Re.forEach((L, Dt) => {
          Qe[ye.length + Dt] = Dt;
        }), Pt.forEach((L, Dt) => {
          Qe[Dt - yo] = ye.length - yo + Dt;
        }), e(4, ye = [].concat(Pt, ye, Re)), e(53, It = !0);
      } else
        e(53, It = !1);
      bt();
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonLayoutMode*/
    1073741824 && (C ? C.type !== "percentage" && C.type !== "fixed" && C.type !== "wrap_content" ? (e(41, dt = !0), Oe.logError(K(new Error('Incorrect value of "layout_mode.type" for div "pager"')))) : e(41, dt = !1) : (e(41, dt = !0), Oe.logError(K(new Error('Empty "layout_mode" prop for div "pager"'))))), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[2] & /*$jsonOrientation*/
    8 && e(2, At = ja(We, At)), t.$$.dirty[2] & /*$jsonItemSpacing*/
    4) {
      const Re = De == null ? void 0 : De.value;
      Re && Tn(Re) && e(42, Tt = fn(Re || 0));
    }
    if (t.$$.dirty[0] & /*$direction*/
    64 | t.$$.dirty[1] & /*paddingObj*/
    4096 | t.$$.dirty[2] & /*$jsonPaddings*/
    2 && (e(43, nt = yi(Ee, nt)), e(44, Y = po(nt, $))), t.$$.dirty[0] & /*orientation*/
    4 && e(57, h = At === "horizontal" ? "grid-auto-columns" : "grid-auto-rows"), t.$$.dirty[0] & /*orientation*/
    4 && e(56, m = At === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[2] & /*$jsonScrollAxisAlignment*/
    1 && (H === "start" || H === "center" || H === "end") && (e(48, me = H), bt()), t.$$.dirty[0] & /*orientation, $direction, visibleItems*/
    84 | t.$$.dirty[1] & /*paddingObj, $jsonLayoutMode, scrollAxisAlignment, itemSpacing*/
    1073879040) {
      const Re = fn(At === "horizontal" ? (nt == null ? void 0 : nt.start) || ($ === "ltr" ? nt == null ? void 0 : nt.left : nt == null ? void 0 : nt.right) || 0 : (nt == null ? void 0 : nt.top) || 0), Pt = fn(At === "horizontal" ? (nt == null ? void 0 : nt.end) || ($ === "ltr" ? nt == null ? void 0 : nt.right : nt == null ? void 0 : nt.left) || 0 : (nt == null ? void 0 : nt.bottom) || 0);
      if ((C == null ? void 0 : C.type) === "fixed") {
        const L = ((j = C.neighbour_page_width) == null ? void 0 : j.value) || 0;
        me === "center" ? e(45, Mt = `calc(100% + ${Re} + ${Pt} - 2 * ${fn(L)} - 2 * ${Tt})`) : me === "start" ? e(45, Mt = `calc(100% + ${Pt} - ${fn(L)} - ${Tt})`) : e(45, Mt = `calc(100% + ${Re} - ${fn(L)} - ${Tt})`), e(46, Vt = "");
      } else if ((C == null ? void 0 : C.type) === "percentage") {
        let L = (Ie = C.page_width) == null ? void 0 : Ie.value;
        (typeof L != "number" || L < 0) && (L = 100), e(45, Mt = `calc(${(L / 100).toFixed(2)} * (100% + ${Re} + ${Pt}))`), e(46, Vt = "");
      } else (C == null ? void 0 : C.type) === "wrap_content" && (e(45, Mt = ""), e(46, Vt = ye.map((L) => {
        var Ge, Je;
        const Dt = L[At === "horizontal" ? "width" : "height"];
        if ((Dt == null ? void 0 : Dt.type) === "fixed" || (Dt == null ? void 0 : Dt.type) === "wrap_content")
          return "minmax(max-content, auto)";
        let it = "100%";
        return (Dt == null ? void 0 : Dt.type) === "match_parent" && (Tn((Ge = Dt.max_size) == null ? void 0 : Ge.value) && (it = `min(${it}, ${fn(Dt.max_size.value)})`), Tn((Je = Dt.min_size) == null ? void 0 : Je.value) && (it = `max(${it}, ${fn(Dt.min_size.value)})`)), it;
      }).join(" ")));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonCrossAxisAlignment, crossAxisAlignment*/
    536936448 && (T === "start" || T === "center" || T === "end") && (e(47, Jt = T), e(9, Gt = {
      [At === "horizontal" ? "parentVAlign" : "parentHAlign"]: Jt
    })), t.$$.dirty[1] & /*itemSpacing, padding, gridAutoSizeProp, autoSizeVal, gridTemplateSizeProp, templateSizeVal, transformStr*/
    117499904 && e(14, p = {
      "grid-gap": Tt,
      padding: Y,
      [h]: Mt,
      [m]: Vt,
      transform: sr
    }), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*animated, crossAxisAlignment, scrollAxisAlignment*/
    8585216 && e(13, k = {
      animated: hr,
      clip: at.pagerChildrenClipEnabled,
      orientation: At,
      "cross-align": Jt,
      "scroll-align": me
    }), t.$$.dirty[1] & /*hasLayoutModeError*/
    1024 && e(5, w = dt), t.$$.dirty[0] & /*hasError*/
    32 | t.$$.dirty[1] & /*$isDesktop, mounted*/
    268435712 && e(12, O = ue && pt && !w), t.$$.dirty[0] & /*componentContext, items*/
    9 && Oe.json) {
      const Re = Oe.getJsonWithVars(Oe.json.default_item);
      typeof Re == "number" && Re >= 0 && Re < Ue.length && (e(40, I = Ct = Re), Qt(Ue.length, Re)), Ir();
    }
    t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(11, U = It || ($ === "ltr" ? ze[I] > 0 : ze[I] + 1 < ye.length)), t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(10, R = It || ($ === "ltr" ? ze[I] + 1 < ye.length : ze[I] > 0)), t.$$.dirty[1] & /*visibleItemsWithOutDuplicates, currentItem*/
    262656 && Qt(_t, I), t.$$.dirty[1] & /*currentItem*/
    512 && xt(I);
  }, [
    Oe,
    st,
    At,
    Ue,
    ye,
    w,
    $,
    he,
    Ce,
    Gt,
    R,
    U,
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
    Xe,
    ut,
    kt,
    rt,
    Nt,
    ct,
    jr,
    Er,
    wr,
    Kt,
    qt,
    pr,
    lt,
    re,
    bt,
    pt,
    I,
    dt,
    Tt,
    nt,
    Y,
    Mt,
    Vt,
    Jt,
    me,
    _t,
    ze,
    or,
    Ft,
    It,
    hr,
    sr,
    m,
    h,
    n,
    ue,
    T,
    C,
    H,
    Ee,
    De,
    We,
    et,
    ce,
    ie,
    ir,
    yr,
    fr
  ];
}
class Oy extends Rr {
  constructor(r) {
    super(), Or(this, r, zy, My, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const Ry = "appkit-indicator", Ly = "appkit-indicator_visible", By = "appkit-indicator__scroller", Hy = "appkit-indicator__items", Wy = "appkit-indicator__item", Uy = "appkit-indicator_placement_default", Gy = "appkit-indicator__item_active", Jy = "appkit-indicator_direction_ltr", qy = "appkit-indicator_direction_rtl", Yy = "appkit-indicator_placement_stretch", vi = {
  indicator: Ry,
  indicator_visible: Ly,
  indicator__scroller: By,
  indicator__items: Hy,
  indicator__item: Wy,
  indicator_placement_default: Uy,
  indicator__item_active: Gy,
  indicator_direction_ltr: Jy,
  indicator_direction_rtl: qy,
  indicator_placement_stretch: Yy
};
function Kc(t, r, e) {
  const n = t.slice();
  n[43] = r[e], n[46] = e;
  const o = (
    /*index*/
    n[46] === /*pagerData*/
    n[8].currentItem
  );
  return n[44] = o, n;
}
function Xc(t) {
  let r, e = nr(Array(
    /*pagerData*/
    t[8].size
  )), n = [];
  for (let o = 0; o < e.length; o += 1)
    n[o] = Zc(Kc(t, e, o));
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      r = Zt();
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
          const a = Kc(o, e, s);
          n[s] ? n[s].p(a, i) : (n[s] = Zc(a), n[s].c(), n[s].m(r.parentNode, r));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = e.length;
      }
    },
    d(o) {
      o && J(r), on(n, o);
    }
  };
}
function Zc(t) {
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
      r = Ve("div"), g(r, "class", e = mt("indicator__item", vi, { active: (
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
    m(c, f) {
      q(c, r, f), a || (l = [
        Be(r, "click", u),
        Be(
          r,
          "keydown",
          /*onIndicatorItemKeydown*/
          t[22]
        )
      ], a = !0);
    },
    p(c, f) {
      t = c, f[0] & /*pagerData*/
      256 && e !== (e = mt("indicator__item", vi, { active: (
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
    d(c) {
      c && J(r), a = !1, Br(l);
    }
  };
}
function Ky(t) {
  let r, e, n = (
    /*pagerData*/
    t[8] && Xc(t)
  );
  return {
    c() {
      r = Ve("div"), e = Ve("div"), n && n.c(), g(e, "class", vi.indicator__items), g(e, "role", "tablist"), D(
        e,
        "margin",
        /*placement*/
        t[4] === "default" ? `0 ${ae(Math.max(
          0,
          /*activeStyle*/
          t[2].width - /*inactiveStyle*/
          t[3].width
        ) / 2)}` : ""
      ), D(e, "--divkit-indicator-inactive-width", ae(
        /*inactiveStyle*/
        t[3].width
      )), D(e, "--divkit-indicator-inactive-height", ae(
        /*inactiveStyle*/
        t[3].height
      )), D(e, "--divkit-indicator-inactive-border-radius", ae(
        /*inactiveStyle*/
        t[3].borderRadius
      )), D(
        e,
        "--divkit-indicator-inactive-background",
        /*inactiveStyle*/
        t[3].background || ""
      ), D(
        e,
        "--divkit-indicator-inactive-box-shadow",
        /*inactiveStyle*/
        t[3].boxShadow || ""
      ), D(e, "--divkit-indicator-active-width", ae(
        /*activeStyle*/
        t[2].width
      )), D(e, "--divkit-indicator-active-height", ae(
        /*activeStyle*/
        t[2].height
      )), D(e, "--divkit-indicator-active-border-radius", ae(
        /*activeStyle*/
        t[2].borderRadius
      )), D(
        e,
        "--divkit-indicator-active-background",
        /*activeStyle*/
        t[2].background || ""
      ), D(
        e,
        "--divkit-indicator-active-box-shadow",
        /*activeStyle*/
        t[2].boxShadow || ""
      ), D(
        e,
        "--divkit-indicator-active-scale",
        /*activeStyle*/
        t[2].width / /*inactiveStyle*/
        t[3].width
      ), D(
        e,
        "--divkit-indicator-default-margin",
        /*placement*/
        t[4] === "default" ? `0 ${ae(
          /*spaceBetweenCenters*/
          (t[5] - /*inactiveStyle*/
          t[3].width) / 2
        )}` : ""
      ), D(
        e,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        t[4] === "stretch" ? ae(
          /*itemSpacing*/
          t[7]
        ) : ""
      ), D(
        e,
        "--divkit-indicator-stretch-max-count",
        /*placement*/
        t[4] === "stretch" ? (
          /*maxVisibleItems*/
          t[6]
        ) : ""
      ), D(
        e,
        "--divkit-indicator-stretch-max-spacer",
        /*placement*/
        t[4] === "stretch" ? ae(
          /*maxVisibleItems*/
          (t[6] - 1) * /*itemSpacing*/
          t[7]
        ) : ""
      ), g(r, "class", vi.indicator__scroller);
    },
    m(o, i) {
      q(o, r, i), ht(r, e), n && n.m(e, null), t[35](e), t[36](r);
    },
    p(o, i) {
      /*pagerData*/
      o[8] ? n ? n.p(o, i) : (n = Xc(o), n.c(), n.m(e, null)) : n && (n.d(1), n = null), i[0] & /*placement, activeStyle, inactiveStyle*/
      28 && D(
        e,
        "margin",
        /*placement*/
        o[4] === "default" ? `0 ${ae(Math.max(
          0,
          /*activeStyle*/
          o[2].width - /*inactiveStyle*/
          o[3].width
        ) / 2)}` : ""
      ), i[0] & /*inactiveStyle*/
      8 && D(e, "--divkit-indicator-inactive-width", ae(
        /*inactiveStyle*/
        o[3].width
      )), i[0] & /*inactiveStyle*/
      8 && D(e, "--divkit-indicator-inactive-height", ae(
        /*inactiveStyle*/
        o[3].height
      )), i[0] & /*inactiveStyle*/
      8 && D(e, "--divkit-indicator-inactive-border-radius", ae(
        /*inactiveStyle*/
        o[3].borderRadius
      )), i[0] & /*inactiveStyle*/
      8 && D(
        e,
        "--divkit-indicator-inactive-background",
        /*inactiveStyle*/
        o[3].background || ""
      ), i[0] & /*inactiveStyle*/
      8 && D(
        e,
        "--divkit-indicator-inactive-box-shadow",
        /*inactiveStyle*/
        o[3].boxShadow || ""
      ), i[0] & /*activeStyle*/
      4 && D(e, "--divkit-indicator-active-width", ae(
        /*activeStyle*/
        o[2].width
      )), i[0] & /*activeStyle*/
      4 && D(e, "--divkit-indicator-active-height", ae(
        /*activeStyle*/
        o[2].height
      )), i[0] & /*activeStyle*/
      4 && D(e, "--divkit-indicator-active-border-radius", ae(
        /*activeStyle*/
        o[2].borderRadius
      )), i[0] & /*activeStyle*/
      4 && D(
        e,
        "--divkit-indicator-active-background",
        /*activeStyle*/
        o[2].background || ""
      ), i[0] & /*activeStyle*/
      4 && D(
        e,
        "--divkit-indicator-active-box-shadow",
        /*activeStyle*/
        o[2].boxShadow || ""
      ), i[0] & /*activeStyle, inactiveStyle*/
      12 && D(
        e,
        "--divkit-indicator-active-scale",
        /*activeStyle*/
        o[2].width / /*inactiveStyle*/
        o[3].width
      ), i[0] & /*placement, spaceBetweenCenters, inactiveStyle*/
      56 && D(
        e,
        "--divkit-indicator-default-margin",
        /*placement*/
        o[4] === "default" ? `0 ${ae(
          /*spaceBetweenCenters*/
          (o[5] - /*inactiveStyle*/
          o[3].width) / 2
        )}` : ""
      ), i[0] & /*placement, itemSpacing*/
      144 && D(
        e,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        o[4] === "stretch" ? ae(
          /*itemSpacing*/
          o[7]
        ) : ""
      ), i[0] & /*placement, maxVisibleItems*/
      80 && D(
        e,
        "--divkit-indicator-stretch-max-count",
        /*placement*/
        o[4] === "stretch" ? (
          /*maxVisibleItems*/
          o[6]
        ) : ""
      ), i[0] & /*placement, maxVisibleItems, itemSpacing*/
      208 && D(
        e,
        "--divkit-indicator-stretch-max-spacer",
        /*placement*/
        o[4] === "stretch" ? ae(
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
function Xy(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
        "indicator",
        vi,
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
      $$slots: { default: [Ky] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = mt(
        "indicator",
        vi,
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
      Lt(r, n);
    }
  };
}
const Ml = ["rounded_rectangle", "circle"];
function Zy(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p = E, k = () => (p(), p = V(c, (he) => e(26, m = he)), c), w, O = E, U = () => (O(), O = V(f, (he) => e(27, w = he)), f), R, $ = E, ue = () => ($(), $ = V(i, (he) => e(28, R = he)), i), T, X = E, le = () => (X(), X = V(s, (he) => e(29, T = he)), s), C, M = E, P = () => (M(), M = V(o, (he) => e(30, C = he)), o), H, se = E, de = () => (se(), se = V(a, (he) => e(31, H = he)), a), Ee, Ae = E, pe = () => (Ae(), Ae = V(u, (he) => e(32, Ee = he)), u), De, ee = E, Te = () => (ee(), ee = V(l, (he) => e(33, De = he)), l);
  t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => ee());
  let { componentContext: We } = r, { layoutParams: Ke = void 0 } = r;
  const et = Tr(Kr).direction;
  bn(t, et, (he) => e(25, h = he));
  let fe = {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    background: "#ffdc60"
  }, je = {
    width: 10,
    height: 10,
    borderRadius: 5,
    background: "#33919cb5"
  }, ce = "default", te = 15, _e = 10, ie = 5, Fe, xe, Xe, oe, Ye = !1;
  function Oe() {
    e(4, ce = "default"), e(5, te = 15), e(6, _e = 10), e(7, ie = 5), e(2, fe = {
      width: 13,
      height: 13,
      borderRadius: 6.5,
      background: "#ffdc60"
    }), e(3, je = {
      width: 10,
      height: 10,
      borderRadius: 5,
      background: "#33919cb5"
    });
  }
  async function st(he) {
    if (e(8, Xe = he), await An(), xe) {
      const pt = xe.children[Xe.currentItem];
      if (pt) {
        const Ce = pt.offsetLeft;
        Fe.scroll({
          left: Ce - Fe.clientWidth / 2,
          behavior: "smooth"
        });
      }
    }
  }
  function at(he) {
    he !== Xe.currentItem && Xe.scrollToPagerItem(he);
  }
  function ut(he) {
    if (he.ctrlKey || he.shiftKey || he.altKey || he.metaKey)
      return;
    const { size: pt, currentItem: Ce } = Xe;
    if (he.which === Zd) {
      const I = Ce - 1 < 0 ? Ce : Ce - 1;
      kt(I);
    } else if (he.which === Qd) {
      const I = Ce + 1 >= pt ? Ce : Ce + 1;
      kt(I);
    } else if (he.which === xd)
      kt(0);
    else if (he.which === $d)
      kt(pt - 1);
    else
      return;
    he.preventDefault();
  }
  async function kt(he) {
    Xe.scrollToPagerItem(he), await An();
    const pt = xe.querySelector(`.${vi.indicator__item_active}`);
    pt && pt.focus();
  }
  function rt() {
    oe == null || oe(), oe = void 0;
    const he = We.json.pager_id;
    oe = We.listenPager(he, st);
  }
  ro(() => {
    e(23, Ye = !0);
  }), an(() => {
    e(23, Ye = !1), oe == null || oe(), oe = void 0;
  });
  const Nt = (he) => at(he);
  function ct(he) {
    Fr[he ? "unshift" : "push"](() => {
      xe = he, e(10, xe);
    });
  }
  function ge(he) {
    Fr[he ? "unshift" : "push"](() => {
      Fe = he, e(9, Fe);
    });
  }
  return t.$$set = (he) => {
    "componentContext" in he && e(0, We = he.componentContext), "layoutParams" in he && e(1, Ke = he.layoutParams);
  }, t.$$.update = () => {
    var he, pt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(24, n = We.origJson), t.$$.dirty[0] & /*origJson*/
    16777216 && n && Oe(), t.$$.dirty[0] & /*origJson, mounted*/
    25165824 && n && Ye && rt(), t.$$.dirty[0] & /*componentContext*/
    1 && P(e(19, o = We.getDerivedFromVars(We.json.shape))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(18, i = We.getDerivedFromVars(We.json.active_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(17, s = We.getDerivedFromVars(We.json.inactive_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(16, a = We.getDerivedFromVars(We.json.active_item_size))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(15, l = We.getDerivedFromVars(We.json.active_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(14, u = We.getDerivedFromVars(We.json.inactive_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && k(e(13, c = We.getDerivedFromVars(We.json.space_between_centers))), t.$$.dirty[0] & /*componentContext*/
    1 && U(e(12, f = We.getDerivedFromVars(We.json.items_placement))), t.$$.dirty[0] & /*activeStyle, inactiveStyle, $jsonShape, $jsonInactiveItemColor, $jsonActiveItemColor*/
    1879048204 | t.$$.dirty[1] & /*$jsonActiveShape, $jsonInactiveShape, $jsonActiveItemSize*/
    7 && (De && e(2, fe = ao(
      {
        type: "shape_drawable",
        shape: De
      },
      Ml,
      fe
    )), Ee && e(3, je = ao(
      {
        type: "shape_drawable",
        shape: Ee
      },
      Ml,
      je
    )), !De && !Ee && C)) {
      const Ce = Wn(H, 1.3);
      e(3, je = ao(
        {
          type: "shape_drawable",
          shape: C,
          color: je.background
        },
        Ml,
        je
      )), e(3, je.background = gr(T, 1, je.background), je), e(2, fe = {
        ...je,
        width: je.width * Ce,
        height: je.height * Ce,
        borderRadius: je.borderRadius * Ce,
        background: fe.background
      }), e(2, fe.background = gr(R, 1, fe.background), fe);
    }
    if (t.$$.dirty[0] & /*$jsonItemsPlacement, placement, spaceBetweenCenters, maxVisibleItems, itemSpacing, $jsonSpaceBetweenCenters*/
    201326832)
      if (w && (w.type === "default" || w.type === "stretch")) {
        if (e(4, ce = w.type), ce === "default")
          e(5, te = $r((he = w.space_between_centers) == null ? void 0 : he.value, te));
        else if (ce === "stretch") {
          const Ce = w;
          e(6, _e = Wn(Ce.max_visible_items, _e)), e(7, ie = $r((pt = Ce.item_spacing) == null ? void 0 : pt.value, ie));
        }
      } else
        e(4, ce = "default"), m && e(5, te = $r(m.value, te));
    t.$$.dirty[0] & /*placement, $direction, pagerData*/
    33554704 && e(11, _ = {
      placement: ce,
      direction: h,
      visible: (Xe == null ? void 0 : Xe.size) > 1
    });
  }, [
    We,
    Ke,
    fe,
    je,
    ce,
    te,
    _e,
    ie,
    Xe,
    Fe,
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
    at,
    ut,
    Ye,
    n,
    h,
    m,
    w,
    R,
    T,
    C,
    H,
    Ee,
    De,
    Nt,
    ct,
    ge
  ];
}
class Qy extends Rr {
  constructor(r) {
    super(), Or(this, r, Zy, Xy, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const xy = "appkit-slider", $y = "appkit-slider__input", ew = "appkit-slider__input_secondary", tw = "appkit-slider__thumb", rw = "appkit-slider_direction_rtl", nw = "appkit-slider__thumb_secondary", ow = "appkit-slider__track", iw = "appkit-slider__tick", sw = "appkit-slider__tick_active", lw = "appkit-slider__tick_inactive", Hr = {
  slider: xy,
  slider__input: $y,
  slider__input_secondary: ew,
  slider__thumb: tw,
  slider_direction_rtl: rw,
  slider__thumb_secondary: nw,
  "slider__tracks-wrapper": "appkit-slider__tracks-wrapper",
  "slider__tracks-inner": "appkit-slider__tracks-inner",
  "slider__tracks-ranges": "appkit-slider__tracks-ranges",
  "slider__tracks-ranges_rtl": "appkit-slider__tracks-ranges_rtl",
  slider__track: ow,
  "slider__thumb-text": "appkit-slider__thumb-text",
  "slider__thumb-text_secondary": "appkit-slider__thumb-text_secondary",
  slider__tick: iw,
  slider__tick_active: sw,
  slider__tick_inactive: lw
};
function Qc(t, r, e) {
  var a, l;
  if (!t || !t.font_size)
    return e;
  const n = t.offset, o = t.text_color && gr(t.text_color) || "#000", i = wi(t.font_weight, t.font_weight_value, void 0), s = Bi(t.font_variation_settings) || void 0;
  if (Un(t.font_size) && o !== "transparent") {
    const u = {
      fontSize: ae(t.font_size),
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
function Vo(t, r, e) {
  return Math.max(r, Math.min(e, Number(t)));
}
function xc(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function $c(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function ef(t, r, e) {
  const n = t.slice();
  return n[90] = r[e], n;
}
function aw(t) {
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function uw(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
        "slider",
        Hr,
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
          cw,
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
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      16777216 && (i.cls = mt(
        "slider",
        Hr,
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
      Lt(r, n);
    }
  };
}
function tf(t) {
  let r;
  return {
    c() {
      r = Ve("div"), g(r, "class", Hr.slider__track), D(
        r,
        "left",
        /*range*/
        t[90].left
      ), D(
        r,
        "right",
        /*range*/
        t[90].right
      ), D(
        r,
        "height",
        /*range*/
        t[90].height
      ), D(
        r,
        "border-radius",
        /*range*/
        t[90].borderRadius
      ), D(
        r,
        "background",
        /*range*/
        t[90].background
      ), D(
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
      2097152 && D(
        r,
        "left",
        /*range*/
        e[90].left
      ), n[0] & /*renderRanges*/
      2097152 && D(
        r,
        "right",
        /*range*/
        e[90].right
      ), n[0] & /*renderRanges*/
      2097152 && D(
        r,
        "height",
        /*range*/
        e[90].height
      ), n[0] & /*renderRanges*/
      2097152 && D(
        r,
        "border-radius",
        /*range*/
        e[90].borderRadius
      ), n[0] & /*renderRanges*/
      2097152 && D(
        r,
        "background",
        /*range*/
        e[90].background
      ), n[0] & /*renderRanges*/
      2097152 && D(
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
function rf(t) {
  let r;
  return {
    c() {
      r = Ve("div"), g(r, "class", Hr.slider__tick + " " + Hr.slider__tick_active), D(
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
      131072 && D(
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
function nf(t) {
  let r;
  return {
    c() {
      r = Ve("div"), g(r, "class", Hr.slider__tick + " " + Hr.slider__tick_inactive), D(
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
      262144 && D(
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
function of(t) {
  let r, e, n;
  return {
    c() {
      var o, i, s, a, l;
      r = Ve("div"), e = Ve("div"), n = Pn(
        /*value*/
        t[11]
      ), g(e, "class", Hr["slider__thumb-text-inner"]), D(
        e,
        "font-size",
        /*textStyle*/
        ((o = t[7]) == null ? void 0 : o.fontSize) || "1em"
      ), D(
        e,
        "font-weight",
        /*textStyle*/
        ((i = t[7]) == null ? void 0 : i.fontWeight) || ""
      ), D(
        e,
        "font-family",
        /*textStyle*/
        ((s = t[7]) == null ? void 0 : s.fontFamily) || ""
      ), D(
        e,
        "font-variation-settings",
        /*textStyle*/
        ((a = t[7]) == null ? void 0 : a.fontVariationSettings) || ""
      ), D(
        e,
        "color",
        /*textStyle*/
        ((l = t[7]) == null ? void 0 : l.textColor) || "#000"
      ), g(r, "class", Hr["slider__thumb-text"]);
    },
    m(o, i) {
      q(o, r, i), ht(r, e), ht(e, n);
    },
    p(o, i) {
      var s, a, l, u, c;
      i[0] & /*value*/
      2048 && xn(
        n,
        /*value*/
        o[11]
      ), i[0] & /*textStyle*/
      128 && D(
        e,
        "font-size",
        /*textStyle*/
        ((s = o[7]) == null ? void 0 : s.fontSize) || "1em"
      ), i[0] & /*textStyle*/
      128 && D(
        e,
        "font-weight",
        /*textStyle*/
        ((a = o[7]) == null ? void 0 : a.fontWeight) || ""
      ), i[0] & /*textStyle*/
      128 && D(
        e,
        "font-family",
        /*textStyle*/
        ((l = o[7]) == null ? void 0 : l.fontFamily) || ""
      ), i[0] & /*textStyle*/
      128 && D(
        e,
        "font-variation-settings",
        /*textStyle*/
        ((u = o[7]) == null ? void 0 : u.fontVariationSettings) || ""
      ), i[0] & /*textStyle*/
      128 && D(
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
function sf(t) {
  let r, e = (
    /*textSecondaryStyle*/
    t[8] && lf(t)
  );
  return {
    c() {
      r = Ve("div"), e && e.c(), g(r, "class", Hr.slider__thumb + " " + Hr.slider__thumb_secondary), D(r, "border-radius", ae(
        /*thumbSecondaryStyle*/
        t[6].borderRadius
      )), D(
        r,
        "background",
        /*thumbSecondaryStyle*/
        t[6].background
      ), D(
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
      n[8] ? e ? e.p(n, o) : (e = lf(n), e.c(), e.m(r, null)) : e && (e.d(1), e = null), o[0] & /*thumbSecondaryStyle*/
      64 && D(r, "border-radius", ae(
        /*thumbSecondaryStyle*/
        n[6].borderRadius
      )), o[0] & /*thumbSecondaryStyle*/
      64 && D(
        r,
        "background",
        /*thumbSecondaryStyle*/
        n[6].background
      ), o[0] & /*thumbSecondaryStyle*/
      64 && D(
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
function lf(t) {
  let r, e, n;
  return {
    c() {
      var o, i, s, a, l;
      r = Ve("div"), e = Ve("div"), n = Pn(
        /*value2*/
        t[12]
      ), g(e, "class", Hr["slider__thumb-text-inner"]), D(
        e,
        "font-size",
        /*textSecondaryStyle*/
        ((o = t[8]) == null ? void 0 : o.fontSize) || "1em"
      ), D(
        e,
        "font-weight",
        /*textSecondaryStyle*/
        ((i = t[8]) == null ? void 0 : i.fontWeight) || ""
      ), D(
        e,
        "font-family",
        /*textSecondaryStyle*/
        ((s = t[8]) == null ? void 0 : s.fontFamily) || ""
      ), D(
        e,
        "font-variation-settings",
        /*textSecondaryStyle*/
        ((a = t[8]) == null ? void 0 : a.fontVariationSettings) || ""
      ), D(
        e,
        "color",
        /*textSecondaryStyle*/
        ((l = t[8]) == null ? void 0 : l.textColor) || "#000"
      ), g(r, "class", Hr["slider__thumb-text"] + " " + Hr["slider__thumb-text_secondary"]);
    },
    m(o, i) {
      q(o, r, i), ht(r, e), ht(e, n);
    },
    p(o, i) {
      var s, a, l, u, c;
      i[0] & /*value2*/
      4096 && xn(
        n,
        /*value2*/
        o[12]
      ), i[0] & /*textSecondaryStyle*/
      256 && D(
        e,
        "font-size",
        /*textSecondaryStyle*/
        ((s = o[8]) == null ? void 0 : s.fontSize) || "1em"
      ), i[0] & /*textSecondaryStyle*/
      256 && D(
        e,
        "font-weight",
        /*textSecondaryStyle*/
        ((a = o[8]) == null ? void 0 : a.fontWeight) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && D(
        e,
        "font-family",
        /*textSecondaryStyle*/
        ((l = o[8]) == null ? void 0 : l.fontFamily) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && D(
        e,
        "font-variation-settings",
        /*textSecondaryStyle*/
        ((u = o[8]) == null ? void 0 : u.fontVariationSettings) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && D(
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
function af(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Ve("input"), g(r, "type", "range"), g(r, "class", e = /*switchedTracks*/
      t[16] ? Hr.slider__input : `${Hr.slider__input} ${Hr.slider__input_secondary}`), g(
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
        Be(
          r,
          "input",
          /*input_handler_1*/
          t[75]
        ),
        Be(r, "mousedown", function() {
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
        Be(r, "touchstart", function() {
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
        Be(r, "focus", function() {
          Nr(
            /*focusHandler*/
            t[83]
          ) && t[83].apply(this, arguments);
        }),
        Be(r, "blur", function() {
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
      t[16] ? Hr.slider__input : `${Hr.slider__input} ${Hr.slider__input_secondary}`) && g(r, "class", e), l[0] & /*minValue*/
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
      a && J(r), i = !1, Br(s);
    }
  };
}
function cw(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O = nr(
    /*renderRanges*/
    t[21]
  ), U = [];
  for (let M = 0; M < O.length; M += 1)
    U[M] = tf(ef(t, O, M));
  let R = nr(
    /*markActiveTicks*/
    t[17]
  ), $ = [];
  for (let M = 0; M < R.length; M += 1)
    $[M] = rf($c(t, R, M));
  let ue = nr(
    /*markInactiveTicks*/
    t[18]
  ), T = [];
  for (let M = 0; M < ue.length; M += 1)
    T[M] = nf(xc(t, ue, M));
  let X = (
    /*textStyle*/
    t[7] && of(t)
  ), le = (
    /*secondVariable*/
    t[13] && sf(t)
  ), C = (
    /*secondVariable*/
    t[13] && af(t)
  );
  return {
    c() {
      r = Ve("div"), e = Ve("div"), n = Ve("div");
      for (let M = 0; M < U.length; M += 1)
        U[M].c();
      i = cr();
      for (let M = 0; M < $.length; M += 1)
        $[M].c();
      s = cr();
      for (let M = 0; M < T.length; M += 1)
        T[M].c();
      a = cr(), l = Ve("div"), X && X.c(), u = cr(), le && le.c(), c = cr(), f = Ve("input"), p = cr(), C && C.c(), g(n, "class", o = Hr["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Hr["slider__tracks-ranges_rtl"] : "")), g(l, "class", Hr.slider__thumb), D(l, "border-radius", ae(
        /*thumbStyle*/
        t[5].borderRadius
      )), D(
        l,
        "background",
        /*thumbStyle*/
        t[5].background
      ), D(
        l,
        "box-shadow",
        /*thumbStyle*/
        t[5].boxShadow || ""
      ), g(f, "type", "range"), g(f, "class", _ = /*switchedTracks*/
      t[16] ? `${Hr.slider__input} ${Hr.slider__input_secondary}` : Hr.slider__input), g(
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
      ), g(e, "class", Hr["slider__tracks-inner"]), g(r, "class", Hr["slider__tracks-wrapper"]);
    },
    m(M, P) {
      q(M, r, P), ht(r, e), ht(e, n);
      for (let H = 0; H < U.length; H += 1)
        U[H] && U[H].m(n, null);
      ht(e, i);
      for (let H = 0; H < $.length; H += 1)
        $[H] && $[H].m(e, null);
      ht(e, s);
      for (let H = 0; H < T.length; H += 1)
        T[H] && T[H].m(e, null);
      ht(e, a), ht(e, l), X && X.m(l, null), ht(e, u), le && le.m(e, null), ht(e, c), ht(e, f), t[74](f), ht(e, p), C && C.m(e, null), t[76](e), k || (w = [
        Be(
          f,
          "input",
          /*input_handler*/
          t[73]
        ),
        Be(f, "focus", function() {
          Nr(
            /*focusHandler*/
            t[83]
          ) && t[83].apply(this, arguments);
        }),
        Be(f, "blur", function() {
          Nr(
            /*blurHandler*/
            t[84]
          ) && t[84].apply(this, arguments);
        })
      ], k = !0);
    },
    p(M, P) {
      if (t = M, P[0] & /*renderRanges*/
      2097152) {
        O = nr(
          /*renderRanges*/
          t[21]
        );
        let H;
        for (H = 0; H < O.length; H += 1) {
          const se = ef(t, O, H);
          U[H] ? U[H].p(se, P) : (U[H] = tf(se), U[H].c(), U[H].m(n, null));
        }
        for (; H < U.length; H += 1)
          U[H].d(1);
        U.length = O.length;
      }
      if (P[0] & /*$direction*/
      16384 && o !== (o = Hr["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Hr["slider__tracks-ranges_rtl"] : "")) && g(n, "class", o), P[0] & /*markActiveTicks*/
      131072) {
        R = nr(
          /*markActiveTicks*/
          t[17]
        );
        let H;
        for (H = 0; H < R.length; H += 1) {
          const se = $c(t, R, H);
          $[H] ? $[H].p(se, P) : ($[H] = rf(se), $[H].c(), $[H].m(e, s));
        }
        for (; H < $.length; H += 1)
          $[H].d(1);
        $.length = R.length;
      }
      if (P[0] & /*markInactiveTicks*/
      262144) {
        ue = nr(
          /*markInactiveTicks*/
          t[18]
        );
        let H;
        for (H = 0; H < ue.length; H += 1) {
          const se = xc(t, ue, H);
          T[H] ? T[H].p(se, P) : (T[H] = nf(se), T[H].c(), T[H].m(e, a));
        }
        for (; H < T.length; H += 1)
          T[H].d(1);
        T.length = ue.length;
      }
      /*textStyle*/
      t[7] ? X ? X.p(t, P) : (X = of(t), X.c(), X.m(l, null)) : X && (X.d(1), X = null), P[0] & /*thumbStyle*/
      32 && D(l, "border-radius", ae(
        /*thumbStyle*/
        t[5].borderRadius
      )), P[0] & /*thumbStyle*/
      32 && D(
        l,
        "background",
        /*thumbStyle*/
        t[5].background
      ), P[0] & /*thumbStyle*/
      32 && D(
        l,
        "box-shadow",
        /*thumbStyle*/
        t[5].boxShadow || ""
      ), /*secondVariable*/
      t[13] ? le ? le.p(t, P) : (le = sf(t), le.c(), le.m(e, c)) : le && (le.d(1), le = null), P[0] & /*switchedTracks*/
      65536 && _ !== (_ = /*switchedTracks*/
      t[16] ? `${Hr.slider__input} ${Hr.slider__input_secondary}` : Hr.slider__input) && g(f, "class", _), P[0] & /*minValue*/
      8 && g(
        f,
        "min",
        /*minValue*/
        t[3]
      ), P[0] & /*maxValue*/
      16 && g(
        f,
        "max",
        /*maxValue*/
        t[4]
      ), P[0] & /*switchedTracks, value2, value*/
      71680 && h !== (h = /*switchedTracks*/
      t[16] ? (
        /*value2*/
        t[12]
      ) : (
        /*value*/
        t[11]
      )) && (f.value = h), P[0] & /*isEnabled*/
      512 && m !== (m = !/*isEnabled*/
      t[9]) && (f.disabled = m), P[0] & /*description*/
      524288 && g(
        f,
        "aria-label",
        /*description*/
        t[19]
      ), /*secondVariable*/
      t[13] ? C ? C.p(t, P) : (C = af(t), C.c(), C.m(e, null)) : C && (C.d(1), C = null);
    },
    d(M) {
      M && J(r), on(U, M), on($, M), on(T, M), X && X.d(), le && le.d(), t[74](null), C && C.d(), t[76](null), k = !1, Br(w);
    }
  };
}
function fw(t) {
  let r, e, n, o, i, s;
  const a = [uw, aw], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[10] ? 1 : 0
    );
  }
  return ~(r = u(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = Zt();
    },
    m(c, f) {
      ~r && l[r].m(c, f), q(c, n, f), o = !0, i || (s = Be(
        window,
        "resize",
        /*checkTicksDebounced*/
        t[43]
      ), i = !0);
    },
    p(c, f) {
      let _ = r;
      r = u(c), r === _ ? ~r && l[r].p(c, f) : (e && (ar(), Q(l[_], 1, 1, () => {
        l[_] = null;
      }), ur()), ~r ? (e = l[r], e ? e.p(c, f) : (e = l[r] = a[r](c), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
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
const $n = {
  width: 10,
  height: 10,
  borderRadius: 5,
  background: "#000"
}, ks = ["rounded_rectangle", "circle"], Pl = ["rounded_rectangle"];
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
function dw(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, U, R, $, ue, T, X, le, C, M, P, H, se, de, Ee = E, Ae = () => (Ee(), Ee = V($, (v) => e(57, de = v)), $), pe, De = E, ee = () => (De(), De = V(U, (v) => e(58, pe = v)), U), Te, We = E, Ke = () => (We(), We = V(R, (v) => e(59, Te = v)), R), ke, et = E, fe = () => (et(), et = V(O, (v) => e(60, ke = v)), O), je, ce = E, te = () => (ce(), ce = V(w, (v) => e(61, je = v)), w), _e, ie = E, Fe = () => (ie(), ie = V(k, (v) => e(62, _e = v)), k), xe, Xe = E, oe = () => (Xe(), Xe = V(p, (v) => e(63, xe = v)), p), Ye, Oe = E, st = () => (Oe(), Oe = V(m, (v) => e(64, Ye = v)), m), at, ut = E, kt = () => (ut(), ut = V(h, (v) => e(65, at = v)), h), rt, Nt = E, ct = () => (Nt(), Nt = V(_, (v) => e(66, rt = v)), _), ge, he = E, pt = () => (he(), he = V(f, (v) => e(67, ge = v)), f), Ce, I = E, Ct = () => (I(), I = V(c, (v) => e(68, Ce = v)), c), dt, At = E, Tt = () => (At(), At = V(a, (v) => e(69, dt = v)), a), nt, Y = E, Mt = () => (Y(), Y = V(s, (v) => e(70, nt = v)), s), Vt, Gt = E, Jt = () => (Gt(), Gt = V(u, (v) => e(71, Vt = v)), u), me, Ue = E, _t = () => (Ue(), Ue = V(l, (v) => e(72, me = v)), l);
  t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => De()), t.$$.on_destroy.push(() => We()), t.$$.on_destroy.push(() => et()), t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => ie()), t.$$.on_destroy.push(() => Xe()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => ut()), t.$$.on_destroy.push(() => Nt()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => At()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => Gt()), t.$$.on_destroy.push(() => Ue());
  let { componentContext: ye } = r, { layoutParams: Qe = void 0 } = r;
  const ze = Tr(Kr), or = Tr(Do), Pe = ze.direction;
  bn(t, Pe, (v) => e(14, se = v));
  let yt, Ft, It, hr = !1, Me = 0, vt = 100, sr = $n, $t = sr, Yt = $n, mr = $n, jr, Qt = null, xt, G = null, ft, Wt = ft, St = "", br = "", Er = !0, wr = !1, Ir = [];
  function zr() {
    e(5, sr = $n), e(6, $t = sr), e(45, Yt = $n), e(46, mr = $n), e(47, Qt = null), e(48, G = null), e(7, ft = void 0), e(8, Wt = void 0), e(19, St = ""), e(9, Er = !0), e(20, br = "");
  }
  let tr = Vo(nt || 0, Me, vt), ot = Vo(dt || 0, Me, vt);
  function jt({ direction: v, minValue: ne, maxValue: d, trackActiveOffset: j, trackActivePart: Ie, trackInactiveStyle: Re, trackActiveStyle: Pt, ranges: L = [] }) {
    const Dt = [], it = (Je, Ht, kr) => {
      var rn, Jr, ve, wn;
      const en = (Xr, hn, zn, y) => {
        var x, z, Ze, Se;
        const A = Math.max(Xr, Ht);
        if (Math.min(hn, kr) - A > 0) {
          const Xt = y && (z = (x = y[v === "ltr" ? "start" : "end"]) != null ? x : y.left) != null ? z : 0, wt = y && (Se = (Ze = y[v === "ltr" ? "end" : "start"]) != null ? Ze : y.right) != null ? Se : 0;
          Dt.push({
            left: Xr,
            right: hn,
            totalLeft: Ht,
            totalRight: kr,
            leftMargin: Xt,
            rightMargin: wt,
            style: zn
          });
        }
      };
      if ((!L[0] || ((rn = L[0].start) != null ? rn : ne) > Ht) && en(Ht, L[0] ? (Jr = L[0].start) != null ? Jr : ne : kr, Je === "inactive" ? Re : Pt), L.forEach((Xr, hn) => {
        var Se, Xt, wt, qe;
        const zn = Xr[Je === "inactive" ? "track_inactive_style" : "track_active_style"], A = zn ? ao(zn, Pl, $n) : Je === "inactive" ? Re : Pt, S = L[hn - 1], x = L[hn + 1], z = (Xt = (Se = Xr.start) != null ? Se : S == null ? void 0 : S.end) != null ? Xt : Ht, Ze = (qe = (wt = Xr.end) != null ? wt : x == null ? void 0 : x.start) != null ? qe : kr;
        en(z, Ze, A, Xr.margins);
      }), L[L.length - 1] && ((ve = L[L.length - 1].end) != null ? ve : d) < kr) {
        const Xr = (wn = L[L.length - 1].end) != null ? wn : d;
        en(Xr, kr, Je === "inactive" ? Re : Pt);
      }
    };
    it("inactive", ne, d), it("active", j, j + Ie);
    const Ge = d - ne;
    e(21, Ir = Dt.map((Je) => {
      let Ht = `${(Je.left - ne) * 100 / Ge}%`;
      Je.leftMargin && (Ht = `calc(${Ht} + ${fn(Je.leftMargin)})`);
      let kr;
      Je.totalLeft < Je.left ? kr = Ht : Je.leftMargin ? kr = `max(${(Je.totalLeft - ne) * 100 / Ge}%, ${Ht})` : kr = `${(Math.max(Je.totalLeft, Je.left) - ne) * 100 / Ge}%`;
      let en = `${(1 - (Je.right - ne) / Ge) * 100}%`;
      Je.rightMargin && (en = `calc(${en} + ${fn(Je.rightMargin)})`);
      let rn;
      return Je.totalRight > Je.right ? rn = en : Je.rightMargin ? rn = `max(${(1 - (Je.totalRight - ne) / Ge) * 100}%, ${en})` : rn = `${(1 - (Math.max(Je.totalRight, Je.right) - ne) / Ge) * 100}%`, {
        left: kr,
        right: rn,
        height: ae(Je.style.height),
        borderRadius: ae(Je.style.borderRadius),
        background: Je.style.background,
        boxShadow: Je.style.boxShadow || ""
      };
    }));
  }
  function Kt(v) {
    var L, Dt;
    if (!Er)
      return;
    const ne = "pageX" in v ? v.pageX : (Dt = (L = v.changedTouches) == null ? void 0 : L[0]) == null ? void 0 : Dt.pageX;
    if (ne === void 0)
      return;
    const d = It.getBoundingClientRect();
    let j = (ne - d.left) / d.width;
    se === "rtl" && (j = 1 - j);
    const Ie = Me + (vt - Me) * j, Re = Math.round(Vo(Ie, Me, vt)), Pt = (tr + ot) / 2;
    e(16, hr = Re < Pt == tr < ot);
  }
  function qt(v, ne) {
    const d = Number(v.target.value);
    hr === (ne === "first") ? (e(12, ot = d), a.setValue(d)) : (e(11, tr = d), s.setValue(d));
  }
  let pr = !1;
  function lt() {
    if (!It)
      return;
    const v = vt - Me, ne = (Qt == null ? void 0 : Qt.width) || 0, d = (G == null ? void 0 : G.width) || 0;
    Math.max(ne, d) * v >= (It == null ? void 0 : It.clientWidth) ? pr || (ye.logError(K(new Error("Slider ticks overlap each other"), { level: "warn" })), pr = !0) : pr = !1;
  }
  const re = va(lt, 50);
  ro(() => {
    lt();
  }), an(() => {
    yt && (ze.unregisterFocusable(yt), e(44, yt = void 0));
  });
  const bt = (v) => qt(v, "first");
  function ir(v) {
    Fr[v ? "unshift" : "push"](() => {
      Ft = v, e(2, Ft);
    });
  }
  const yr = (v) => qt(v, "second");
  function fr(v) {
    Fr[v ? "unshift" : "push"](() => {
      It = v, e(15, It);
    });
  }
  return t.$$set = (v) => {
    "componentContext" in v && e(0, ye = v.componentContext), "layoutParams" in v && e(1, Qe = v.layoutParams);
  }, t.$$.update = () => {
    var v, ne, d, j;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(56, n = ye.origJson), t.$$.dirty[1] & /*origJson*/
    33554432 && n && zr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, o = ye.json.thumb_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(13, i = ye.json.thumb_secondary_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*firstVariable*/
    16777216 && Mt(e(22, s = o && (ye.getVariable(o, "integer") || ze.awaitGlobalVariable(o, "integer", 0)) || io("temp", "integer", 0))), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 && Tt(e(23, a = i && (ye.getVariable(i, "integer") || ze.awaitGlobalVariable(i, "integer", 0)) || io("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(39, l = ye.getDerivedFromVars(ye.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Jt(e(38, u = ye.getDerivedFromVars(ye.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Ct(e(37, c = ye.getDerivedFromVars(ye.json.thumb_style))), t.$$.dirty[0] & /*componentContext*/
    1 && pt(e(36, f = ye.getDerivedFromVars(ye.json.thumb_secondary_style))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(35, _ = ye.getDerivedFromVars(ye.json.track_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && kt(e(34, h = ye.getDerivedFromVars(ye.json.track_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(33, m = ye.getDerivedFromVars(ye.json.tick_mark_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(32, p = ye.getDerivedFromVars(ye.json.tick_mark_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && Fe(e(31, k = ye.getDerivedFromVars(ye.json.thumb_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && te(e(30, w = ye.getDerivedFromVars(ye.json.thumb_secondary_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(29, O = ye.getDerivedFromVars(ye.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && ee(e(28, U = ye.getDerivedFromVars(ye.json.secondary_value_accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Ke(e(27, R = ye.getDerivedFromVars(ye.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(26, $ = ye.getDerivedFromVars(ye.json.ranges))), t.$$.dirty[0] & /*minValue, maxValue*/
    24 | t.$$.dirty[2] & /*$jsonMinValue, $jsonMaxValue*/
    1536 && (e(3, Me = oo(me, Me)), e(4, vt = oo(Vt, vt)), lt()), t.$$.dirty[0] & /*minValue, maxValue, value*/
    2072 | t.$$.dirty[2] & /*$valueVariable*/
    256) {
      const Ie = Vo(nt || 0, Me, vt);
      Ie !== tr && e(11, tr = Ie);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue, value2*/
    4120 | t.$$.dirty[2] & /*$value2Variable*/
    128) {
      const Ie = Vo(dt || 0, Me, vt);
      Ie !== ot && e(12, ot = Ie);
    }
    if (t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbStyle*/
    64 && e(5, sr = ao(Ce, ks, sr)), t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbSecondaryStyle*/
    32 && e(6, $t = ao(ge, ks, sr)), t.$$.dirty[1] & /*trackInactiveStyle*/
    16384 | t.$$.dirty[2] & /*$jsonTrackInactiveStyle*/
    16 && e(45, Yt = ao(rt, Pl, Yt)), t.$$.dirty[1] & /*trackActiveStyle*/
    32768 | t.$$.dirty[2] & /*$jsonTrackActiveStyle*/
    8 && e(46, mr = ao(at, Pl, mr)), t.$$.dirty[2] & /*$jsonMarkActiveStyle*/
    4) {
      let Ie = ao(Ye, ks, $n);
      Ie !== $n && e(47, Qt = Ie);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markActiveStyle*/
    65536 && (Qt ? (e(17, jr = i ? vs(Math.min(tr, ot), Math.max(tr, ot) + 1, Me, vt, !0) : vs(Me, tr, Me, vt, !0)), lt()) : e(17, jr = [])), t.$$.dirty[2] & /*$jsonMarkInactiveStyle*/
    2) {
      let Ie = ao(xe, ks, $n);
      Ie !== $n && e(48, G = Ie);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markInactiveStyle*/
    131072 && (G ? (e(18, xt = i ? vs(Math.min(tr, ot), Math.max(tr, ot) + 1, Me, vt, !1) : vs(tr + 1, vt + 1, Me, vt, !0)), lt()) : e(18, xt = [])), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[2] & /*$jsonTextStyle*/
    1 && e(7, ft = Qc(_e, ze.typefaceProvider, ft)), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[1] & /*$jsonSecondaryTextStyle*/
    1073741824 && e(8, Wt = Qc(je, ze.typefaceProvider, ft)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    536870912 && (ke != null && ke.description ? e(19, St = ri(ke)) : ye.logError(K(new Error('Missing accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    512 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    268435456 && e(9, Er = _n(Te, Er)), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 | t.$$.dirty[1] & /*$jsonSecondaryAccessibility*/
    134217728 && (pe != null && pe.description ? e(20, br = ri(pe)) : i && ye.logError(K(new Error('Missing second accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext, thumbStyle, hasError*/
    1057 | t.$$.dirty[1] & /*trackActiveStyle, trackInactiveStyle*/
    49152) {
      let Ie = !1;
      or.hasAction() ? (ye.logError(K(new Error('Cannot show "slider" inside component with an action or inside accessibility mode=exclude'))), Ie = !0) : sr === $n ? (ye.logError(K(new Error('Missing "thumb_style" in slider'))), Ie = !0) : mr === $n ? (ye.logError(K(new Error('Missing "track_active_style" in slider'))), Ie = !0) : Yt === $n && (ye.logError(K(new Error('Missing "track_inactive_style" in slider'))), Ie = !0), Ie !== wr && e(10, wr = Ie);
    }
    t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(52, ue = ae(Math.max(...[sr.width, $t.width, 0].filter(Tn)))), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(51, T = ae(Math.max(...[sr.height, $t.height, 0].filter(Tn)))), t.$$.dirty[0] & /*value, minValue, maxValue*/
    2072 && e(50, X = (tr - Me) / (vt - Me)), t.$$.dirty[0] & /*secondVariable, value2, minValue, maxValue*/
    12312 && e(49, le = i ? (ot - Me) / (vt - Me) : void 0), t.$$.dirty[0] & /*value, value2, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(54, C = le !== void 0 ? Math.min(tr, ot) : Me), t.$$.dirty[0] & /*value2, value, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(53, M = le !== void 0 ? Math.abs(ot - tr) : tr - Me), t.$$.dirty[0] & /*$direction, minValue, maxValue*/
    16408 | t.$$.dirty[1] & /*trackActiveOffset, trackActivePart, trackInactiveStyle, trackActiveStyle, $jsonRanges*/
    79740928 && jt({
      direction: se,
      minValue: Me,
      maxValue: vt,
      trackActiveOffset: C,
      trackActivePart: M,
      trackInactiveStyle: Yt,
      trackActiveStyle: mr,
      ranges: de
    }), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle, textStyle, textSecondaryStyle*/
    480 | t.$$.dirty[1] & /*markActiveStyle, markInactiveStyle, maxThumbWidth, maxThumbHeight, trackPart, trackSecondaryPart*/
    4128768 && e(25, P = {
      "--divkit-slider-thumb-width": ae(sr.width),
      "--divkit-slider-thumb-height": ae(sr.height),
      "--divkit-slider-thumb-secondary-width": ae($t.width),
      "--divkit-slider-thumb-secondary-height": ae($t.height),
      "--divkit-slider-text-offset-x": (v = ft == null ? void 0 : ft.offset) != null && v.x ? fn(ft.offset.x) : void 0,
      "--divkit-slider-text-offset-y": (ne = ft == null ? void 0 : ft.offset) != null && ne.y ? fn(ft.offset.y) : void 0,
      "--divkit-slider-text-secondary-offset-x": (d = Wt == null ? void 0 : Wt.offset) != null && d.x ? fn(Wt.offset.x) : void 0,
      "--divkit-slider-text-secondary-offset-y": (j = Wt == null ? void 0 : Wt.offset) != null && j.y ? fn(Wt.offset.y) : void 0,
      "--divkit-slider-tick-active-width": Qt ? ae(Qt.width) : void 0,
      "--divkit-slider-tick-active-height": Qt ? ae(Qt.height) : void 0,
      "--divkit-slider-tick-active-border-radius": Qt ? ae(Qt.borderRadius) : void 0,
      "--divkit-slider-tick-active-background": (Qt == null ? void 0 : Qt.background) || void 0,
      "--divkit-slider-tick-active-box-shadow": (Qt == null ? void 0 : Qt.boxShadow) || void 0,
      "--divkit-slider-tick-inactive-width": G ? ae(G.width) : void 0,
      "--divkit-slider-tick-inactive-height": G ? ae(G.height) : void 0,
      "--divkit-slider-tick-inactive-border-radius": G ? ae(G.borderRadius) : void 0,
      "--divkit-slider-tick-inactive-background": (G == null ? void 0 : G.background) || void 0,
      "--divkit-slider-tick-inactive-box-shadow": (G == null ? void 0 : G.boxShadow) || void 0,
      "--divkit-slider-max-thumb-width": ue,
      "--divkit-slider-max-thumb-height": T,
      "--divkit-slider-track-part": X,
      "--divkit-slider-track-secondary-part": le
    }), t.$$.dirty[0] & /*$direction*/
    16384 && e(24, H = { direction: se }), t.$$.dirty[0] & /*componentContext, input*/
    5 | t.$$.dirty[1] & /*prevId*/
    8192 && ye.json && Ft && (yt && (ze.unregisterFocusable(yt), e(44, yt = void 0)), ye.id && !ye.fakeElement && (e(44, yt = ye.id), ze.registerFocusable(yt, {
      focus() {
        Ft && Ft.focus();
      }
    })));
  }, [
    ye,
    Qe,
    Ft,
    Me,
    vt,
    sr,
    $t,
    ft,
    Wt,
    Er,
    wr,
    tr,
    ot,
    i,
    se,
    It,
    hr,
    jr,
    xt,
    St,
    br,
    Ir,
    s,
    a,
    H,
    P,
    $,
    R,
    U,
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
    Pe,
    Kt,
    qt,
    re,
    yt,
    Yt,
    mr,
    Qt,
    G,
    le,
    X,
    T,
    ue,
    M,
    C,
    o,
    n,
    de,
    pe,
    Te,
    ke,
    je,
    _e,
    xe,
    Ye,
    at,
    rt,
    ge,
    Ce,
    dt,
    nt,
    Vt,
    me,
    bt,
    ir,
    yr,
    fr
  ];
}
class _w extends Rr {
  constructor(r) {
    super(), Or(this, r, dw, fw, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const pw = "appkit-input", gw = "appkit-input__aligner", hw = "appkit-input__input", mw = "appkit-input__placeholder", bw = "appkit-input__input_singleline", yw = "appkit-input__input_multiline", Mo = {
  input: pw,
  "input_alignment-horizontal_center": "appkit-input_alignment-horizontal_center",
  "input_alignment-horizontal_end": "appkit-input_alignment-horizontal_end",
  input__aligner: gw,
  input__input: hw,
  input__placeholder: mw,
  "input_alignment-vertical_start": "appkit-input_alignment-vertical_start",
  "input_alignment-vertical_end": "appkit-input_alignment-vertical_end",
  "input_alignment-vertical_baseline": "appkit-input_alignment-vertical_baseline",
  "input_highlight-color": "appkit-input_highlight-color",
  input__input_singleline: bw,
  "input__scroll-wrapper": "appkit-input__scroll-wrapper",
  input__input_multiline: yw,
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
class uf {
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
      if (n instanceof uf)
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
          this.onException(K(i, {
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
      ) : new uf(o);
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
class ww extends Ea {
  constructor(r, e) {
    super(r), this.logError = e;
  }
  onException(r) {
    this.logError(r);
  }
}
function kw(t, r, e) {
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
    return e ? (e.updateMaskData(n), e) : new ww(n, r);
  }
  return e || null;
}
class vw extends Ea {
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
function jw(t, r, e) {
  return e ? (e.updateCurrencyParams(t.locale), e) : new vw(t.locale, r);
}
const s_ = 3;
function na(t) {
  const r = t.textContent;
  let e = 0;
  return typeof r == "string" && (e += r.length, t instanceof HTMLElement && (t.tagName === "DIV" || t.tagName === "BR") && ++e), e;
}
function cf(t, r) {
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
        a += na(s.childNodes[l]);
      n = a;
    }
    for (; s && s !== t; ) {
      const a = s.parentNode;
      if (!a)
        return 0;
      const l = Array.from(a.childNodes).indexOf(s);
      for (let u = 0; u < l; ++u) {
        const c = a.childNodes[u];
        n += na(c);
      }
      s instanceof HTMLElement && (s.tagName === "DIV" && ((e = a.childNodes[l - 1]) == null ? void 0 : e.nodeType) === s_ || s.tagName === "BR") && ++n, s = a;
    }
    return n;
  } catch {
    return 0;
  }
}
function oa(t, r, e, n) {
  if (t.nodeType === s_) {
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
    const s = t.childNodes[o], a = na(s);
    if (n <= a) {
      oa(s, r, e, n);
      return;
    }
    n -= a;
  }
}
const Cw = {
  kotlin: {
    public_default_values: !0
  },
  swift: {
    public_default_values: !0
  }
}, Ew = {
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
}, Aw = "object", Sw = {
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
}, l_ = {
  codegen: Cw,
  constants: Ew,
  type: Aw,
  properties: Sw
}, Vw = "000000000000000", ff = "*", Fw = "00", df = [{
  key: "0",
  filter: "\\d",
  placeholder: "_"
}];
class Iw extends Ea {
  constructor(e) {
    super({
      pattern: pf(""),
      decoding: df,
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
    const n = pf(e), o = this.maskData.pattern;
    return n !== o ? n : null;
  }
  updateMaskDataWith(e) {
    return this.updateMaskData({
      pattern: e,
      decoding: df,
      alwaysVisible: this.maskData.alwaysVisible
    }, !1);
  }
  onException(e) {
    this.logError(e);
  }
}
function _f(t) {
  return "$ref" in t ? l_.constants[t.$ref.split("/").pop()] : t;
}
function pf(t) {
  if (!t)
    return Vw;
  let r = l_.properties.value.default_value, e = 0;
  for (; !("value" in r); ) {
    if (e >= t.length) {
      r = _f(r[ff]);
      break;
    }
    const n = t[e++];
    r = _f(r[n in r ? n : ff]);
  }
  return r.value + Fw;
}
function Dw(t, r) {
  return r || new Iw(t);
}
function Tw(t) {
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function Mw(t) {
  let r, e;
  return r = new yn({
    props: {
      alwaysCustomFocus: !0,
      cls: mt(
        "input",
        Mo,
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
          Rw,
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
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      1048576 && (i.cls = mt(
        "input",
        Mo,
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
      Lt(r, n);
    }
  };
}
function Pw(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Ve("input"), g(
        r,
        "type",
        /*inputType*/
        t[10]
      ), g(
        r,
        "inputmode",
        /*inputMode*/
        t[11]
      ), g(r, "class", e = mt("input__input", Mo, {
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
      t[15] || void 0), g(r, "style", o = er(
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
        Be(
          r,
          "input",
          /*onInput*/
          t[49]
        ),
        Be(
          r,
          "keydown",
          /*onKeyDown*/
          t[51]
        ),
        Be(r, "mousedown", function() {
          Nr(
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
        Be(r, "click", function() {
          Nr(
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
        Be(r, "focus", function() {
          Nr(
            /*focusHandler*/
            t[123]
          ) && t[123].apply(this, arguments);
        }),
        Be(r, "blur", function() {
          Nr(
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
      2 && e !== (e = mt("input__input", Mo, {
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
      262144 && o !== (o = er(
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
      c && J(r), t[106](null), l = !1, Br(u);
    }
  };
}
function Nw(t) {
  let r, e, n, o, i, s, a = !/*contentEditableValue*/
  t[9] && /*placeholder*/
  t[21] && gf(t);
  function l(f, _) {
    return (
      /*isEnabled*/
      f[5] ? Ow : zw
    );
  }
  let u = l(t), c = u(t);
  return {
    c() {
      r = Ve("span"), a && a.c(), e = cr(), n = Ve("span"), o = Pn("​"), s = cr(), c.c(), g(n, "class", Mo.input__aligner), g(n, "aria-hidden", "true"), g(n, "style", i = er(
        /*verticalPaddingStl*/
        t[17]
      )), g(r, "class", Mo["input__scroll-wrapper"]);
    },
    m(f, _) {
      q(f, r, _), a && a.m(r, null), ht(r, e), ht(r, n), ht(n, o), ht(r, s), c.m(r, null);
    },
    p(f, _) {
      !/*contentEditableValue*/
      f[9] && /*placeholder*/
      f[21] ? a ? a.p(f, _) : (a = gf(f), a.c(), a.m(r, e)) : a && (a.d(1), a = null), _[0] & /*verticalPaddingStl*/
      131072 && i !== (i = er(
        /*verticalPaddingStl*/
        f[17]
      )) && g(n, "style", i), u === (u = l(f)) && c ? c.p(f, _) : (c.d(1), c = u(f), c && (c.c(), c.m(r, null)));
    },
    d(f) {
      f && J(r), a && a.d(), c.d();
    }
  };
}
function gf(t) {
  let r, e, n;
  return {
    c() {
      r = Ve("div"), e = Pn(
        /*placeholder*/
        t[21]
      ), g(r, "class", Mo.input__placeholder), g(r, "aria-hidden", "true"), g(r, "style", n = er(
        /*paddingStl*/
        t[18]
      ));
    },
    m(o, i) {
      q(o, r, i), ht(r, e);
    },
    p(o, i) {
      i[0] & /*placeholder*/
      2097152 && xn(
        e,
        /*placeholder*/
        o[21]
      ), i[0] & /*paddingStl*/
      262144 && n !== (n = er(
        /*paddingStl*/
        o[18]
      )) && g(r, "style", n);
    },
    d(o) {
      o && J(r);
    }
  };
}
function zw(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Ve("span"), g(r, "class", mt("input__input", Mo, { multiline: !0 })), g(
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
      t[15] || void 0), g(r, "style", n = er(
        /*paddingStl*/
        t[18]
      )), /*contentEditableValue*/
      t[9] === void 0 && to(() => (
        /*span_input_handler_1*/
        t[105].call(r)
      ));
    },
    m(s, a) {
      q(s, r, a), t[104](r), /*contentEditableValue*/
      t[9] !== void 0 && (r.innerText = /*contentEditableValue*/
      t[9]), o || (i = Be(
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
      262144 && n !== (n = er(
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
function Ow(t) {
  let r, e, n, o, i, s, a;
  return {
    c() {
      r = Ve("span"), g(r, "class", e = mt("input__input", Mo, {
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
      t[15] || void 0), g(r, "style", i = er(
        /*paddingStl*/
        t[18]
      )), /*contentEditableValue*/
      t[9] === void 0 && to(() => (
        /*span_input_handler*/
        t[103].call(r)
      ));
    },
    m(l, u) {
      q(l, r, u), t[102](r), /*contentEditableValue*/
      t[9] !== void 0 && (r.innerText = /*contentEditableValue*/
      t[9]), s || (a = [
        Be(
          r,
          "input",
          /*span_input_handler*/
          t[103]
        ),
        Be(
          r,
          "input",
          /*onInput*/
          t[49]
        ),
        Be(
          r,
          "keydown",
          /*blockOverflow*/
          t[50]
        ),
        Be(
          r,
          "keydown",
          /*onKeyDown*/
          t[51]
        ),
        Be(r, "paste", Ww),
        Be(r, "mousedown", function() {
          Nr(
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
        Be(r, "click", function() {
          Nr(
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
        Be(r, "focus", function() {
          Nr(
            /*focusHandler*/
            t[123]
          ) && t[123].apply(this, arguments);
        }),
        Be(r, "blur", function() {
          Nr(
            /*blurHandler*/
            t[124]
          ) && t[124].apply(this, arguments);
        })
      ], s = !0);
    },
    p(l, u) {
      t = l, u[4] & /*hasCustomFocus*/
      2 && e !== (e = mt("input__input", Mo, {
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
      262144 && i !== (i = er(
        /*paddingStl*/
        t[18]
      )) && g(r, "style", i), u[0] & /*contentEditableValue*/
      512 && /*contentEditableValue*/
      t[9] !== r.innerText && (r.innerText = /*contentEditableValue*/
      t[9]);
    },
    d(l) {
      l && J(r), t[102](null), s = !1, Br(a);
    }
  };
}
function Rw(t) {
  let r;
  function e(i, s) {
    return (
      /*isMultiline*/
      i[8] ? Nw : Pw
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Zt();
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
function Lw(t) {
  let r, e, n, o;
  const i = [Mw, Tw], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Zt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (ar(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ur()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
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
const Bw = typeof document < "u" && "inputMode" in document.createElement("input"), hf = {
  email: "email",
  number: "number",
  phone: "tel",
  single_line_text: "text",
  multi_line_text: "text",
  uri: "url",
  password: "password"
}, Hw = /* @__PURE__ */ new Set([
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
function Ww(t) {
  if (t.preventDefault(), t.clipboardData) {
    let r = t.clipboardData.getData("text/plain");
    r = r.trim(), document.execCommand("inserttext", !1, r);
  }
}
function Uw(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, U, R, $, ue, T, X, le, C, M, P, H, se, de, Ee, Ae, pe, De, ee, Te, We, Ke, ke = E, et = () => (ke(), ke = V(s, (He) => e(76, Ke = He)), s), fe, je = E, ce = () => (je(), je = V(a, (He) => e(77, fe = He)), a), te, _e = E, ie = () => (_e(), _e = V(Ee, (He) => e(111, te = He)), Ee), Fe, xe = E, Xe = () => (xe(), xe = V(se, (He) => e(78, Fe = He)), se), oe, Ye = E, Oe = () => (Ye(), Ye = V(le, (He) => e(79, oe = He)), le), st, at = E, ut = () => (at(), at = V(H, (He) => e(80, st = He)), H), kt, rt, Nt = E, ct = () => (Nt(), Nt = V(X, (He) => e(82, rt = He)), X), ge, he = E, pt = () => (he(), he = V(T, (He) => e(83, ge = He)), T), Ce, I = E, Ct = () => (I(), I = V(ue, (He) => e(84, Ce = He)), ue), dt, At = E, Tt = () => (At(), At = V($, (He) => e(85, dt = He)), $), nt, Y = E, Mt = () => (Y(), Y = V(P, (He) => e(86, nt = He)), P), Vt, Gt = E, Jt = () => (Gt(), Gt = V(M, (He) => e(87, Vt = He)), M), me, Ue = E, _t = () => (Ue(), Ue = V(R, (He) => e(88, me = He)), R), ye, Qe = E, ze = () => (Qe(), Qe = V(U, (He) => e(89, ye = He)), U), or, Pe = E, yt = () => (Pe(), Pe = V(O, (He) => e(90, or = He)), O), Ft, It = E, hr = () => (It(), It = V(w, (He) => e(91, Ft = He)), w), Me, vt = E, sr = () => (vt(), vt = V(k, (He) => e(92, Me = He)), k), $t, Yt = E, mr = () => (Yt(), Yt = V(p, (He) => e(93, $t = He)), p), jr, Qt = E, xt = () => (Qt(), Qt = V(m, (He) => e(94, jr = He)), m), G, ft = E, Wt = () => (ft(), ft = V(h, (He) => e(95, G = He)), h), St, br = E, Er = () => (br(), br = V(_, (He) => e(96, St = He)), _), wr, Ir = E, zr = () => (Ir(), Ir = V(f, (He) => e(97, wr = He)), f), tr, ot = E, jt = () => (ot(), ot = V(c, (He) => e(98, tr = He)), c), Kt, qt = E, pr = () => (qt(), qt = V(u, (He) => e(99, Kt = He)), u), lt, re = E, bt = () => (re(), re = V(l, (He) => e(100, lt = He)), l), ir, yr = E, fr = () => (yr(), yr = V(de, (He) => e(101, ir = He)), de), v, ne = E, d = () => (ne(), ne = V(C, (He) => e(47, v = He)), C);
  t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => je()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => at()), t.$$.on_destroy.push(() => Nt()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => At()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => Gt()), t.$$.on_destroy.push(() => Ue()), t.$$.on_destroy.push(() => Qe()), t.$$.on_destroy.push(() => Pe()), t.$$.on_destroy.push(() => It()), t.$$.on_destroy.push(() => vt()), t.$$.on_destroy.push(() => Yt()), t.$$.on_destroy.push(() => Qt()), t.$$.on_destroy.push(() => ft()), t.$$.on_destroy.push(() => br()), t.$$.on_destroy.push(() => Ir()), t.$$.on_destroy.push(() => ot()), t.$$.on_destroy.push(() => qt()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => yr()), t.$$.on_destroy.push(() => ne());
  let { componentContext: j } = r, { layoutParams: Ie = void 0 } = r;
  const Re = Tr(Kr), Pt = Tr(Do), L = Re.direction;
  bn(t, L, (He) => e(81, kt = He));
  let Dt, it, Ge = !1, Je = null, Ht = "", kr = "", en = !1, rn = "", Jr = 12, ve, wn = "", Xr = "", hn, zn = "", y = "#000", A = "", S = "start", x = "center", z = "multi_line_text", Ze = "text", Se, Xt = "", wt = null, qe = "", rr = "", Et = "", lr = !0, Vr = 1 / 0, sn = "off", Zr = "default", Sn = "", tn = !1, Dn = !0, Jn = 0, qn = 0;
  function Ut() {
    e(56, rn = ""), e(57, Jr = 12), e(58, ve = void 0), e(59, wn = ""), e(60, Xr = ""), e(61, hn = void 0), e(63, y = "#000"), e(64, A = ""), e(65, S = "left"), e(66, x = "center"), e(67, z = "multi_line_text"), e(10, Ze = "text"), e(11, Se = void 0), e(5, lr = !0), e(6, Vr = 1 / 0), e(13, sn = "off"), e(14, Zr = "default"), e(15, Sn = ""), Jn = 0, qn = 0;
  }
  function b(He) {
    (He == null ? void 0 : He.type) === "fixed_length" ? e(55, Je = kw(He, j.logError, Je)) : (He == null ? void 0 : He.type) === "currency" ? e(55, Je = jw(He, j.logError, Je)) : (He == null ? void 0 : He.type) === "phone" && e(55, Je = Dw(j.logError, Je)), Je && ho();
  }
  function F(He) {
    if (!Array.isArray(te))
      return !0;
    for (const vr of te)
      if (vr) {
        if (vr.type === "regex")
          try {
            if (!new RegExp("^" + (vr.pattern || "") + "$").test(He))
              return !1;
          } catch (Mr) {
            return j.logError(K(new Error("Failed to create a regex"), {
              additional: { originalError: String(Mr) }
            })), !0;
          }
        else if (vr.type === "expression" && !vr.condition)
          return !1;
      }
    return !0;
  }
  function Z(He) {
    const vr = He.target;
    let Mr = (pe ? vr.innerText : vr.value) || "";
    Mr === `
` && (Mr = ""), Mr.length > Vr && (Mr = e(9, kr = Ht), vr instanceof HTMLInputElement && (vr.value = Mr)), Ht !== Mr && (F(Mr) ? (e(3, Ht = e(9, kr = Mr)), s.setValue(Mr), Je && Gr(), Yn()) : (e(3, Ht = e(9, kr = Mr)), vr instanceof HTMLInputElement && (vr.value = Mr), An().then(() => {
      Dr(Jn, qn);
    })));
  }
  function N(He) {
    Ht.length >= Vr && !Hw.has(He.key) && !(He.ctrlKey || He.altKey || He.metaKey) && He.preventDefault();
  }
  function we(He) {
    if (Jn = Ot() || 0, qn = Ur() || 0, He.ctrlKey || He.metaKey || He.altKey || He.shiftKey)
      return;
    const vr = j.json.enter_key_actions;
    He.key === "Enter" && Array.isArray(vr) && vr.length && (He.preventDefault(), j.execAnyActions(vr));
  }
  function be() {
    Ge = !1, setTimeout(
      () => {
        Ge = !0;
      },
      250
    );
  }
  function zt() {
    if (!Ge)
      if (it instanceof HTMLInputElement)
        it.select();
      else {
        const He = window.getSelection(), vr = document.createRange();
        vr.selectNodeContents(it), He && (He.removeAllRanges(), He.addRange(vr));
      }
  }
  function Ot() {
    return it instanceof HTMLInputElement ? it.selectionStart === null ? void 0 : it.selectionStart : cf(it, "start");
  }
  function Ur() {
    return it instanceof HTMLInputElement ? it.selectionEnd === null ? void 0 : it.selectionEnd : cf(it, "end");
  }
  function Dr(He, vr) {
    if (it instanceof HTMLInputElement)
      e(2, it.selectionStart = He, it), e(2, it.selectionEnd = vr, it);
    else {
      const Mr = window.getSelection();
      if (Mr) {
        Mr.removeAllRanges();
        const mo = document.createRange();
        oa(it, mo, "start", He), oa(it, mo, "end", vr), Mr.addRange(mo);
      }
    }
  }
  async function Gr() {
    if (!it || !Je)
      return;
    const He = Ot() || 0, vr = Ur() || 0;
    Je.applyChangeFrom(Ht, vr === He ? vr : 0), a.set(Je.rawValue), jl(s, Ke = e(3, Ht = e(9, kr = Je.value)), Ke);
    const Mr = Je.cursorPosition;
    await An(), document.activeElement === it && Dr(Mr, Mr);
  }
  async function ho() {
    if (!it || !Je)
      return;
    Je.overrideRawValue(fe), a.set(Je.rawValue), jl(s, Ke = e(3, Ht = e(9, kr = Je.value)), Ke);
    const He = Je.cursorPosition;
    await An(), document.activeElement === it && Dr(He, He);
  }
  function Yn() {
    const He = Dn;
    Dn = !1;
    const vr = j.json.validators;
    if (!Array.isArray(vr) || !vr.length)
      return;
    const mo = j.getJsonWithVars(vr).filter((ln) => (ln.type === "regex" || ln.type === "expression") && ln.label_id && ln.variable), Ko = [];
    mo.forEach((ln) => {
      const Yi = j.getVariable(ln.variable);
      if (!Yi)
        return;
      if (Yi.getType() !== "boolean") {
        He && j.logError(K(new Error("Incorrect variable type for the validator"), {
          additional: { variable: ln.variable }
        }));
        return;
      }
      let ui = !1;
      if (Ht === "" && (ln.allow_empty === !0 || ln.allow_empty === 1))
        ui = !0;
      else if (ln.type === "regex") {
        if (!ln.pattern || typeof ln.pattern != "string")
          return;
        try {
          ui = new RegExp("^" + ln.pattern + "$").test(Ht);
        } catch {
          He && j.logError(K(new Error("Failed to create a regular expression using the validator pattern"), {
            additional: { pattern: ln.pattern }
          }));
          return;
        }
      } else if (ln.type === "expression")
        ui = ln.condition === !0 || ln.condition === 1;
      else
        return;
      if (Yi.setValue(ui), !ui) {
        const Si = Re.getComponentId(ln.label_id);
        Si && Ko.push(Si);
      }
    }), e(15, Sn = Ko.join(" "));
  }
  ro(() => {
    e(72, tn = !0), it && Je && fe && (Je.overrideRawValue(fe), jl(s, Ke = e(3, Ht = e(9, kr = Je.value)), Ke));
  }), an(() => {
    e(72, tn = !1), Dt && (Re.unregisterFocusable(Dt), e(54, Dt = void 0));
  });
  function so(He) {
    Fr[He ? "unshift" : "push"](() => {
      it = He, e(2, it);
    });
  }
  function Vn() {
    kr = this.innerText, e(9, kr), e(55, Je), e(3, Ht), e(76, Ke), e(6, Vr), e(7, s), e(86, nt), e(73, o), e(0, j);
  }
  function qo(He) {
    Fr[He ? "unshift" : "push"](() => {
      it = He, e(2, it);
    });
  }
  function Oo() {
    kr = this.innerText, e(9, kr), e(55, Je), e(3, Ht), e(76, Ke), e(6, Vr), e(7, s), e(86, nt), e(73, o), e(0, j);
  }
  function Yo(He) {
    Fr[He ? "unshift" : "push"](() => {
      it = He, e(2, it);
    });
  }
  return t.$$set = (He) => {
    "componentContext" in He && e(0, j = He.componentContext), "layoutParams" in He && e(1, Ie = He.layoutParams);
  }, t.$$.update = () => {
    var He;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(75, n = j.origJson), t.$$.dirty[2] & /*origJson*/
    8192 && n && Ut(), t.$$.dirty[0] & /*componentContext*/
    1 && e(73, o = j.json.text_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(74, i = (He = j.json.mask) == null ? void 0 : He.raw_text_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*variable*/
    2048 && et(e(7, s = o && (j.getVariable(o, "string") || Re.awaitGlobalVariable(o, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*rawVariable*/
    4096 && ce(e(16, a = i && (j.getVariable(i, "string") || Re.awaitGlobalVariable(i, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && bt(e(46, l = j.getDerivedFromVars(j.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && pr(e(45, u = j.getDerivedFromVars(j.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && jt(e(44, c = j.getDerivedFromVars(j.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && zr(e(43, f = j.getDerivedFromVars(j.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && Er(e(42, _ = j.getDerivedFromVars(j.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Wt(e(41, h = j.getDerivedFromVars(j.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && xt(e(40, m = j.getDerivedFromVars(j.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && mr(e(39, p = j.getDerivedFromVars(j.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && sr(e(38, k = j.getDerivedFromVars(j.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && hr(e(37, w = j.getDerivedFromVars(j.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && yt(e(36, O = j.getDerivedFromVars(j.json.highlight_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ze(e(35, U = j.getDerivedFromVars(j.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(34, R = j.getDerivedFromVars(j.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Tt(e(33, $ = j.getDerivedFromVars(j.json.keyboard_type))), t.$$.dirty[0] & /*componentContext*/
    1 && Ct(e(32, ue = j.getDerivedFromVars(j.json.mask))), t.$$.dirty[0] & /*componentContext*/
    1 && pt(e(31, T = j.getDerivedFromVars(j.json.max_visible_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(30, X = j.getDerivedFromVars(j.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(29, le = j.getDerivedFromVars(j.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && d(e(28, C = j.getDerivedFromVars(j.json.select_all_on_focus))), t.$$.dirty[0] & /*componentContext*/
    1 && Jt(e(27, M = j.getDerivedFromVars(j.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Mt(e(26, P = j.getDerivedFromVars(j.json.max_length))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(25, H = j.getDerivedFromVars(j.json.autocapitalization))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(24, se = j.getDerivedFromVars(j.json.enter_key_type))), t.$$.dirty[0] & /*componentContext*/
    1 && fr(e(23, de = j.getDerivedFromVars(j.json.validators))), t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(22, Ee = j.getDerivedFromVars(j.json.filters))), t.$$.dirty[0] & /*componentContext, hasError*/
    17 | t.$$.dirty[2] & /*variable, $jsonAccessibility*/
    133120) {
      let vr = !1;
      o ? (Pt.hasAction() || (oe == null ? void 0 : oe.mode) === "exclude") && (vr = !0, j.logError(K(new Error('Cannot show "input" inside component with an action or inside accessibility mode=exclude')))) : (e(4, en = !0), j.logError(K(new Error('Missing "text_variable" in "input"')))), en !== vr && e(4, en = vr);
    }
    if (t.$$.dirty[2] & /*$jsonMask*/
    4194304 && b(Ce), t.$$.dirty[0] & /*maxLength*/
    64 | t.$$.dirty[2] & /*$jsonMaxLength*/
    16777216 && e(6, Vr = Wn(nt, Vr)), t.$$.dirty[0] & /*value, maxLength, valueVariable*/
    200 | t.$$.dirty[1] & /*inputMask*/
    16777216 | t.$$.dirty[2] & /*$valueVariable*/
    16384 && !Je && Ht !== Ke) {
      let vr = Ke;
      vr.length > Vr && (vr = vr.slice(0, Vr), s.setValue(vr)), e(3, Ht = e(9, kr = vr)), Yn();
    }
    if (t.$$.dirty[1] & /*inputMask*/
    16777216 | t.$$.dirty[2] & /*$rawValueVariable*/
    32768 && Je && Je.rawValue !== fe && (ho(), Yn()), t.$$.dirty[2] & /*mounted*/
    1024 | t.$$.dirty[3] & /*$jsonValidators*/
    256 && ir && tn && Yn(), t.$$.dirty[3] & /*$jsonHintText*/
    128 && e(21, Ae = lt), t.$$.dirty[1] & /*hintColor*/
    33554432 | t.$$.dirty[3] & /*$jsonHintColor*/
    64 && e(56, rn = gr(Kt, 1, rn)), t.$$.dirty[1] & /*fontSize*/
    67108864 | t.$$.dirty[3] & /*$jsonFontSize*/
    32 && e(57, Jr = Wn(tr, Jr)), t.$$.dirty[1] & /*fontWeight*/
    134217728 | t.$$.dirty[3] & /*$jsonFontWeight, $jsonFontWeightValue, $jsonFontFamily*/
    28 && (e(58, ve = wi(wr, St, ve)), G && typeof G == "string" ? e(59, wn = Re.typefaceProvider(G, { fontWeight: ve || 400 })) : e(59, wn = "")), t.$$.dirty[1] & /*fontVariationSettings*/
    536870912 | t.$$.dirty[3] & /*$jsonFontVariationSettings*/
    2) {
      const vr = Bi(jr);
      vr !== Xr && e(60, Xr = vr);
    }
    if (t.$$.dirty[1] & /*fontSize*/
    67108864 | t.$$.dirty[3] & /*$jsonLineHeight*/
    1) {
      const vr = $t;
      Un(vr) && e(61, hn = vr / Jr);
    }
    t.$$.dirty[2] & /*$jsonLetterSpacing*/
    1073741824 && hl(Me) && e(62, zn = ae(Me)), t.$$.dirty[2] & /*$jsonTextColor, textColor*/
    536870914 && e(63, y = gr(Ft, 1, y)), t.$$.dirty[2] & /*$jsonHighlightColor, highlightColor*/
    268435460 && e(64, A = gr(or, 1, A)), t.$$.dirty[2] & /*$jsonAlignmentHorizontal, $direction, alignmentHorizontal*/
    134742024 && e(65, S = bl(ye, kt, S)), t.$$.dirty[2] & /*$jsonAlignmentVertical, alignmentVertical*/
    67108880 && e(66, x = yl(me, x)), t.$$.dirty[0] & /*isEnabled*/
    32 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    33554432 && e(5, lr = _n(Vt, lr)), t.$$.dirty[2] & /*$jsonKeyboardType, $jsonMask, keyboardType*/
    12582944 && (dt && dt in hf && (e(10, Ze = hf[dt]), e(67, z = dt)), (Ce == null ? void 0 : Ce.type) === "currency" ? (e(10, Ze = Bw ? "text" : "tel"), e(11, Se = "decimal")) : z === "number" ? e(11, Se = "decimal") : e(11, Se = void 0)), t.$$.dirty[2] & /*keyboardType*/
    32 && e(8, pe = z === "multi_line_text"), t.$$.dirty[1] & /*lineHeight, fontSize*/
    1140850688 | t.$$.dirty[2] & /*$jsonVisibleMaxLines, $jsonPaddings, selfPadding, $direction*/
    3670144 && (Un(ge) ? e(68, Xt = `calc(${ge * (hn || 1.25) * (Jr / 10) + "em"} + ${fn($r(rt == null ? void 0 : rt.top, 0) + $r(rt == null ? void 0 : rt.bottom, 0))})`) : e(68, Xt = ""), e(69, wt = yi(rt || void 0, wt)), e(70, qe = wt ? po(
      {
        top: (Number(wt.top) || 0) / Jr * 10,
        right: (Number(kt === "ltr" ? wt.end : wt.start) || Number(wt.right) || 0) / Jr * 10,
        bottom: (Number(wt.bottom) || 0) / Jr * 10,
        left: (Number(kt === "ltr" ? wt.start : wt.end) || Number(wt.left) || 0) / Jr * 10
      },
      kt
    ) : ""), e(71, rr = wt ? po(
      {
        top: (Number(wt.top) || 0) / Jr * 10,
        bottom: (Number(wt.bottom) || 0) / Jr * 10
      },
      kt
    ) : "")), t.$$.dirty[2] & /*$jsonAutocapitalization*/
    262144 && (st === "all_characters" ? e(13, sn = "characters") : st === "sentences" ? e(13, sn = "sentences") : st === "words" ? e(13, sn = "words") : (st === "none" || st === "auto") && e(13, sn = "off")), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonAccessibility*/
    131072 && (oe != null && oe.description ? e(12, Et = ri(oe)) : j.logError(K(new Error('Missing accessibility "description" for input'), { level: "warn" }))), t.$$.dirty[2] & /*$jsonEnterKeyType*/
    65536 && (Fe === "default" || Fe === "done" || Fe === "go" || Fe === "search" || Fe === "send") && e(14, Zr = Fe), t.$$.dirty[0] & /*isMultiline*/
    256 | t.$$.dirty[2] & /*highlightColor, alignmentHorizontal, alignmentVertical*/
    28 && e(20, De = {
      "highlight-color": !!A,
      multiline: pe,
      "alignment-horizontal": S,
      "alignment-vertical": x
    }), t.$$.dirty[1] & /*hintColor, lineHeight, fontWeight, fontFamily, fontVariationSettings*/
    2046820352 | t.$$.dirty[2] & /*highlightColor, letterSpacing, textColor, maxHeight*/
    71 && e(19, ee = {
      "--divkit-input-hint-color": rn,
      "--divkit-input-highlight-color": A,
      "--divkit-input-line-height": hn,
      "font-weight": ve,
      "font-family": wn,
      "font-variation-settings": Xr,
      "letter-spacing": zn,
      color: y,
      "max-height": Xt
    }), t.$$.dirty[1] & /*fontSize*/
    67108864 | t.$$.dirty[2] & /*padding*/
    256 && e(18, Te = { "font-size": ae(Jr), padding: qe }), t.$$.dirty[1] & /*fontSize*/
    67108864 | t.$$.dirty[2] & /*verticalPadding*/
    512 && e(17, We = {
      "font-size": ae(Jr),
      padding: rr
    }), t.$$.dirty[0] & /*input, componentContext, value*/
    13 | t.$$.dirty[1] & /*prevId*/
    8388608 && it && j.json && (Dt && (Re.unregisterFocusable(Dt), e(54, Dt = void 0)), j.id && !j.fakeElement && (e(54, Dt = j.id), Re.registerFocusable(Dt, {
      focus() {
        it && (it.focus(), Dr(Ht.length, Ht.length));
      }
    })));
  }, [
    j,
    Ie,
    it,
    Ht,
    en,
    lr,
    Vr,
    s,
    pe,
    kr,
    Ze,
    Se,
    Et,
    sn,
    Zr,
    Sn,
    a,
    We,
    Te,
    ee,
    De,
    Ae,
    Ee,
    de,
    se,
    H,
    P,
    M,
    C,
    le,
    X,
    T,
    ue,
    $,
    R,
    U,
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
    L,
    Z,
    N,
    we,
    be,
    zt,
    Dt,
    Je,
    rn,
    Jr,
    ve,
    wn,
    Xr,
    hn,
    zn,
    y,
    A,
    S,
    x,
    z,
    Xt,
    wt,
    qe,
    rr,
    tn,
    o,
    i,
    n,
    Ke,
    fe,
    Fe,
    oe,
    st,
    kt,
    rt,
    ge,
    Ce,
    dt,
    nt,
    Vt,
    me,
    ye,
    or,
    Ft,
    Me,
    $t,
    jr,
    G,
    St,
    wr,
    tr,
    Kt,
    lt,
    ir,
    so,
    Vn,
    qo,
    Oo,
    Yo
  ];
}
class Gw extends Rr {
  constructor(r) {
    super(), Or(this, r, Uw, Lw, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1, -1]);
  }
}
const Jw = "appkit-select", qw = "appkit-select_hint", Yw = "appkit-select__select", Kw = "appkit-select__option", zi = {
  select: Jw,
  "select__select-text": "appkit-select__select-text",
  select_hint: qw,
  select__select: Yw,
  "select__select_has-custom-focused": "appkit-select__select_has-custom-focused",
  "has-custom-focused": "appkit-has-custom-focused",
  select__option: Kw
};
function mf(t, r, e) {
  const n = t.slice();
  return n[62] = r[e], n;
}
function Xw(t) {
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function Zw(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
        "select",
        zi,
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
          Qw,
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
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = mt(
        "select",
        zi,
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
      Lt(r, n);
    }
  };
}
function bf(t) {
  let r, e = (
    /*item*/
    (t[62].text || /*item*/
    t[62].value) + ""
  ), n, o;
  return {
    c() {
      r = Ve("option"), n = Pn(e), g(r, "class", zi.select__option), r.__value = o = /*item*/
      t[62].value, du(r, r.__value);
    },
    m(i, s) {
      q(i, r, s), ht(r, n);
    },
    p(i, s) {
      s[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      (i[62].text || /*item*/
      i[62].value) + "") && xn(n, e), s[0] & /*filteredItems*/
      32 && o !== (o = /*item*/
      i[62].value) && (r.__value = o, du(r, r.__value));
    },
    d(i) {
      i && J(r);
    }
  };
}
function Qw(t) {
  let r, e = (
    /*selectText*/
    (t[4] || /*$jsonHintText*/
    t[25] || "​") + ""
  ), n, o, i, s, a, l, u, c, f = nr(
    /*filteredItems*/
    t[5]
  ), _ = [];
  for (let h = 0; h < f.length; h += 1)
    _[h] = bf(mf(t, f, h));
  return {
    c() {
      r = Ve("span"), n = Pn(e), i = cr(), s = Ve("select");
      for (let h = 0; h < _.length; h += 1)
        _[h].c();
      g(r, "class", zi["select__select-text"]), g(r, "style", o = er(
        /*innerStl*/
        t[9]
      )), g(r, "aria-hidden", "true"), g(s, "class", a = mt("select__select", zi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[59]
        )
      })), g(
        s,
        "aria-label",
        /*description*/
        t[7]
      ), g(s, "style", l = er(
        /*selectStl*/
        t[8]
      )), /*$valueVariable*/
      t[6] === void 0 && to(() => (
        /*select_1_change_handler*/
        t[55].call(s)
      ));
    },
    m(h, m) {
      q(h, r, m), ht(r, n), q(h, i, m), q(h, s, m);
      for (let p = 0; p < _.length; p += 1)
        _[p] && _[p].m(s, null);
      t[54](s), _u(
        s,
        /*$valueVariable*/
        t[6],
        !0
      ), u || (c = [
        Be(
          s,
          "change",
          /*select_1_change_handler*/
          t[55]
        ),
        Be(s, "focus", function() {
          Nr(
            /*focusHandler*/
            t[60]
          ) && t[60].apply(this, arguments);
        }),
        Be(s, "blur", function() {
          Nr(
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
      t[25] || "​") + "") && xn(n, e), m[0] & /*innerStl*/
      512 && o !== (o = er(
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
          const k = mf(t, f, p);
          _[p] ? _[p].p(k, m) : (_[p] = bf(k), _[p].c(), _[p].m(s, null));
        }
        for (; p < _.length; p += 1)
          _[p].d(1);
        _.length = f.length;
      }
      m[1] & /*hasCustomFocus*/
      268435456 && a !== (a = mt("select__select", zi, {
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
      256 && l !== (l = er(
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
      h && (J(r), J(i), J(s)), on(_, h), t[54](null), u = !1, Br(c);
    }
  };
}
function xw(t) {
  let r, e, n, o;
  const i = [Zw, Xw], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Zt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (ar(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ur()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
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
function $w(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, U, R, $, ue, T, X, le = E, C = () => (le(), le = V(U, (Me) => e(42, X = Me)), U), M, P = E, H = () => (P(), P = V(O, (Me) => e(43, M = Me)), O), se, de = E, Ee = () => (de(), de = V(w, (Me) => e(44, se = Me)), w), Ae, pe = E, De = () => (pe(), pe = V(k, (Me) => e(45, Ae = Me)), k), ee, Te = E, We = () => (Te(), Te = V(p, (Me) => e(46, ee = Me)), p), Ke, ke = E, et = () => (ke(), ke = V(m, (Me) => e(47, Ke = Me)), m), fe, je = E, ce = () => (je(), je = V(h, (Me) => e(48, fe = Me)), h), te, _e = E, ie = () => (_e(), _e = V(_, (Me) => e(49, te = Me)), _), Fe, xe = E, Xe = () => (xe(), xe = V(f, (Me) => e(50, Fe = Me)), f), oe, Ye = E, Oe = () => (Ye(), Ye = V(c, (Me) => e(51, oe = Me)), c), st, at, ut = E, kt = () => (ut(), ut = V(l, (Me) => e(53, at = Me)), l), rt, Nt = E, ct = () => (Nt(), Nt = V(a, (Me) => e(6, rt = Me)), a), ge, he = E, pt = () => (he(), he = V(u, (Me) => e(25, ge = Me)), u);
  t.$$.on_destroy.push(() => le()), t.$$.on_destroy.push(() => P()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => Te()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => je()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => ut()), t.$$.on_destroy.push(() => Nt()), t.$$.on_destroy.push(() => he());
  let { componentContext: Ce } = r, { layoutParams: I = void 0 } = r;
  const Ct = Tr(Kr), dt = Tr(Do), At = Ct.direction;
  bn(t, At, (Me) => e(52, st = Me));
  let Tt, nt, Y = !1, Mt = "", Vt = null, Gt = "", Jt = "rgba(0,0,0,.45)", me = 12, Ue, _t = "", ye = "", Qe, ze = "", or = "#000", Pe = "", yt;
  function Ft() {
    e(28, Vt = null), e(30, Jt = "rgba(0,0,0,.45)"), e(31, me = 12), e(32, Ue = void 0), e(33, _t = ""), e(34, ye = ""), e(35, Qe = void 0), e(36, ze = ""), e(37, or = "#000"), e(7, Pe = "");
  }
  an(() => {
    Tt && (Ct.unregisterFocusable(Tt), e(27, Tt = void 0));
  });
  function It(Me) {
    Fr[Me ? "unshift" : "push"](() => {
      nt = Me, e(2, nt);
    });
  }
  function hr() {
    rt = dh(this), a.set(rt), e(5, s), e(40, i), e(0, Ce);
  }
  return t.$$set = (Me) => {
    "componentContext" in Me && e(0, Ce = Me.componentContext), "layoutParams" in Me && e(1, I = Me.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(41, n = Ce.origJson), t.$$.dirty[1] & /*origJson*/
    1024 && n && Ft(), t.$$.dirty[0] & /*componentContext*/
    1 && e(39, o = Ce.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(40, i = Ce.json.options), t.$$.dirty[1] & /*items*/
    512 && e(5, s = Array.isArray(i) && i.filter((Me) => typeof Me.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    256 && ct(e(24, a = o && (Ce.getVariable(o, "string") || Ct.awaitGlobalVariable(o, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && kt(e(23, l = Ce.getDerivedFromVars(Ce.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && pt(e(22, u = Ce.getDerivedFromVars(Ce.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(21, c = Ce.getDerivedFromVars(Ce.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(20, f = Ce.getDerivedFromVars(Ce.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(19, _ = Ce.getDerivedFromVars(Ce.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(18, h = Ce.getDerivedFromVars(Ce.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(17, m = Ce.getDerivedFromVars(Ce.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && We(e(16, p = Ce.getDerivedFromVars(Ce.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(15, k = Ce.getDerivedFromVars(Ce.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(14, w = Ce.getDerivedFromVars(Ce.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && H(e(13, O = Ce.getDerivedFromVars(Ce.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && C(e(12, U = Ce.getDerivedFromVars(Ce.json.accessibility))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || Ce.logError(K(new Error('Empty selection "items" in "select"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    2304) {
      let Me = !1;
      o ? (dt.hasAction() || (X == null ? void 0 : X.mode) === "exclude") && (Me = !0, Ce.logError(K(new Error('Cannot show "select" inside component with an action or inside accessibility mode=exclude')))) : (e(3, Y = !0), Ce.logError(K(new Error('Missing "value_variable" in "select"')))), Y !== Me && e(3, Y = Me);
    }
    if (t.$$.dirty[0] & /*filteredItems, $valueVariable, componentContext*/
    97 | t.$$.dirty[1] & /*prevWarnValue*/
    128) {
      const Me = s.find((vt) => vt.value === rt);
      Me ? e(4, Mt = (typeof Me.text == "string" ? Me.text : Me.value) || "") : (e(4, Mt = ""), rt && yt !== rt && (e(38, yt = rt), Ce.logError(K(new Error('Value from the variable was not found in the selection items for "select"')))));
    }
    if (t.$$.dirty[1] & /*$jsonFontSize, fontSize*/
    524289 && e(31, me = Wn(Fe, me)), t.$$.dirty[0] & /*selfPadding*/
    268435456 | t.$$.dirty[1] & /*$jsonPaddings, fontSize, $direction*/
    6291457 && (e(28, Vt = yi(at || void 0, Vt)), e(29, Gt = Vt ? po(
      {
        top: (Number(Vt.top) || 0) / me * 10,
        right: (Number(st === "ltr" ? Vt.end : Vt.start) || Number(Vt.right) || 0) / me * 10,
        bottom: (Number(Vt.bottom) || 0) / me * 10,
        left: (Number(st === "ltr" ? Vt.start : Vt.end) || Number(Vt.left) || 0) / me * 10
      },
      st
    ) : "")), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*$jsonHintColor*/
    1048576 && e(30, Jt = gr(oe, 1, Jt)), t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontWeightValue, fontWeight, $jsonFontFamily*/
    458754 && (e(32, Ue = wi(te, fe, Ue)), Ke && typeof Ke == "string" ? e(33, _t = Ct.typefaceProvider(Ke, { fontWeight: Ue || 400 })) : e(33, _t = "")), t.$$.dirty[1] & /*$jsonFontVariationSettings, fontVariationSettings*/
    32776) {
      const Me = Bi(ee);
      Me !== ye && e(34, ye = Me);
    }
    if (t.$$.dirty[1] & /*$jsonLineHeight, fontSize*/
    16385) {
      const Me = Ae;
      Un(Me) && e(35, Qe = Me / me);
    }
    t.$$.dirty[1] & /*$jsonLetterSpacing, fontSize*/
    8193 && hl(se) && e(36, ze = ae(se / me * 10)), t.$$.dirty[1] & /*$jsonTextColor, textColor*/
    4160 && e(37, or = gr(M, 1, or)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    2048 && (X != null && X.description ? e(7, Pe = ri(X)) : Ce.logError(K(new Error('Missing accessibility "description" for select'), { level: "warn" }))), t.$$.dirty[0] & /*selectText*/
    16 && e(11, R = { hint: !Mt }), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*fontWeight, fontFamily, fontVariationSettings, textColor*/
    78 && e(10, $ = {
      "--divkit-input-hint-color": Jt,
      "font-weight": Ue,
      "font-family": _t,
      "font-variation-settings": ye,
      color: or
    }), t.$$.dirty[0] & /*padding*/
    536870912 | t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(9, ue = {
      padding: Gt,
      "font-size": ae(me),
      "line-height": Qe,
      "letter-spacing": ze
    }), t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(8, T = {
      "font-size": ae(me),
      "line-height": Qe,
      "letter-spacing": ze
    }), t.$$.dirty[0] & /*componentContext, select, prevId*/
    134217733 && Ce.json && nt && (Tt && (Ct.unregisterFocusable(Tt), e(27, Tt = void 0)), Ce.id && !Ce.fakeElement && (e(27, Tt = Ce.id), Ct.registerFocusable(Tt, {
      focus() {
        nt && nt.focus();
      }
    })));
  }, [
    Ce,
    I,
    nt,
    Y,
    Mt,
    s,
    rt,
    Pe,
    T,
    ue,
    $,
    R,
    U,
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
    ge,
    At,
    Tt,
    Vt,
    Gt,
    Jt,
    me,
    Ue,
    _t,
    ye,
    Qe,
    ze,
    or,
    yt,
    o,
    i,
    n,
    X,
    M,
    se,
    Ae,
    ee,
    Ke,
    fe,
    te,
    Fe,
    oe,
    st,
    at,
    It,
    hr
  ];
}
class ek extends Rr {
  constructor(r) {
    super(), Or(this, r, $w, xw, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const tk = "appkit-video__video", rk = "appkit-video__container", nk = "appkit-video_absolute", ji = {
  video__video: tk,
  video__container: rk,
  "video__aspect-wrapper": "appkit-video__aspect-wrapper",
  video_absolute: nk
};
function ok(t, r) {
  return Array.isArray(t) && t.length ? t.filter((e) => (e == null ? void 0 : e.type) === "video_source" && typeof e.url == "string" && typeof e.mime_type == "string").map((e) => {
    const n = {
      src: e.url
    };
    return e.mime_type && (n.type = e.mime_type), n;
  }) : r;
}
function ik(t) {
  return t === "fill" ? "cover" : t === "no_scale" ? "none" : "contain";
}
function yf(t, r, e) {
  const n = t.slice();
  return n[60] = r[e], n;
}
function wf(t, r, e) {
  const n = t.slice();
  return n[60] = r[e], n;
}
function sk(t) {
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function lk(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
        "video",
        ji,
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
      $$slots: { default: [_k] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = mt(
        "video",
        ji,
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
      Lt(r, n);
    }
  };
}
function ak(t) {
  let r, e, n, o, i, s = nr(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = vf(yf(t, s, l));
  return {
    c() {
      r = Ve("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      g(r, "class", ji.video__video), g(r, "style", e = er(
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
        Be(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          t[26]
        ),
        Be(
          r,
          "ended",
          /*onEnd*/
          t[27]
        ),
        Be(
          r,
          "playing",
          /*onPlaying*/
          t[28]
        ),
        Be(
          r,
          "pause",
          /*onPause*/
          t[29]
        ),
        Be(
          r,
          "waiting",
          /*onWaiting*/
          t[30]
        ),
        Be(
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
          const f = yf(l, s, c);
          a[c] ? a[c].p(f, u) : (a[c] = vf(f), a[c].c(), a[c].m(r, null));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = s.length;
      }
      u[0] & /*style*/
      16384 && e !== (e = er(
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
      l && J(r), on(a, l), t[52](null), o = !1, Br(i);
    }
  };
}
function uk(t) {
  let r;
  return {
    c() {
      r = Ve("div"), g(r, "class", ji.video__container);
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
function ck(t) {
  let r, e = `${/*aspectPaddingBottom*/
  t[11]}%`;
  function n(s, a) {
    return (
      /*shouldUseVideoProvider*/
      s[13] ? dk : fk
    );
  }
  let o = n(t), i = o(t);
  return {
    c() {
      r = Ve("div"), i.c(), g(r, "class", ji["video__aspect-wrapper"]), D(r, "padding-bottom", e);
    },
    m(s, a) {
      q(s, r, a), i.m(r, null);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, null))), a[0] & /*aspectPaddingBottom*/
      2048 && e !== (e = `${/*aspectPaddingBottom*/
      s[11]}%`) && D(r, "padding-bottom", e);
    },
    d(s) {
      s && J(r), i.d();
    }
  };
}
function kf(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Ve("source"), Qn(r.src, e = /*source*/
      t[60].src) || g(r, "src", e), g(r, "type", n = /*source*/
      t[60].type);
    },
    m(s, a) {
      q(s, r, a), o || (i = Be(
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
      s && J(r), o = !1, i();
    }
  };
}
function vf(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = kf(t);
  return {
    c() {
      n.c(), e = Zt();
    },
    m(o, i) {
      n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Sr(r, r = /*source*/
      o[60]) ? (n.d(1), n = kf(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && J(e), n.d(o);
    }
  };
}
function fk(t) {
  let r, e, n, o, i, s = nr(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = Cf(wf(t, s, l));
  return {
    c() {
      r = Ve("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      g(r, "class", ji.video__video), g(r, "style", e = er(
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
        Be(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          t[26]
        ),
        Be(
          r,
          "ended",
          /*onEnd*/
          t[27]
        ),
        Be(
          r,
          "playing",
          /*onPlaying*/
          t[28]
        ),
        Be(
          r,
          "pause",
          /*onPause*/
          t[29]
        ),
        Be(
          r,
          "waiting",
          /*onWaiting*/
          t[30]
        ),
        Be(
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
          const f = wf(l, s, c);
          a[c] ? a[c].p(f, u) : (a[c] = Cf(f), a[c].c(), a[c].m(r, null));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = s.length;
      }
      u[0] & /*style*/
      16384 && e !== (e = er(
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
      l && J(r), on(a, l), t[50](null), o = !1, Br(i);
    }
  };
}
function dk(t) {
  let r;
  return {
    c() {
      r = Ve("div"), g(r, "class", ji.video__container);
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
function jf(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Ve("source"), Qn(r.src, e = /*source*/
      t[60].src) || g(r, "src", e), g(r, "type", n = /*source*/
      t[60].type);
    },
    m(s, a) {
      q(s, r, a), o || (i = Be(
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
      s && J(r), o = !1, i();
    }
  };
}
function Cf(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = jf(t);
  return {
    c() {
      n.c(), e = Zt();
    },
    m(o, i) {
      n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Sr(r, r = /*source*/
      o[60]) ? (n.d(1), n = jf(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && J(e), n.d(o);
    }
  };
}
function _k(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[11] !== "0" ? ck : (
        /*shouldUseVideoProvider*/
        i[13] ? uk : ak
      )
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Zt();
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
function pk(t) {
  let r, e, n, o;
  const i = [lk, sk], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Zt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (ar(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ur()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
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
function gk(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O = E, U = () => (O(), O = V(a, (Pe) => e(39, w = Pe)), a), R, $ = E, ue = () => ($(), $ = V(m, (Pe) => e(40, R = Pe)), m), T, X = E, le = () => (X(), X = V(h, (Pe) => e(41, T = Pe)), h), C, M = E, P = () => (M(), M = V(_, (Pe) => e(42, C = Pe)), _), H, se = E, de = () => (se(), se = V(f, (Pe) => e(43, H = Pe)), f), Ee, Ae = E, pe = () => (Ae(), Ae = V(c, (Pe) => e(44, Ee = Pe)), c), De, ee = E, Te = () => (ee(), ee = V(u, (Pe) => e(45, De = Pe)), u), We, Ke = E, ke = () => (Ke(), Ke = V(l, (Pe) => e(46, We = Pe)), l), et, fe = E, je = () => (fe(), fe = V(s, (Pe) => e(47, et = Pe)), s), ce, te = E, _e = () => (te(), te = V(i, (Pe) => e(48, ce = Pe)), i);
  t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => te());
  let { componentContext: ie } = r, { layoutParams: Fe = void 0 } = r;
  const xe = Tr(Kr), Xe = xe.videoPlayerProvider;
  let oe, Ye = !1, Oe = !1, st, at, ut = [], kt = !1, rt = !1, Nt = !1, ct = !1, ge, he = "fit", pt = "0", Ce = !1, I, Ct = "", dt, At = !!Xe;
  function Tt(Pe) {
    var sr, $t;
    const yt = ie.getJsonWithVars({
      sources: Pe.video_sources,
      repeatable: Pe.repeatable,
      autostart: Pe.autostart,
      preloadRequired: Pe.preload_required,
      muted: Pe.muted,
      preview: Pe.preview,
      aspect: Pe.aspect,
      scale: Pe.scale,
      payload: Pe.player_settings_payload
    }), Ft = _n(yt.repeatable, !1), It = _n(yt.autostart, !1), hr = _n(yt.preloadRequired, !1), Me = _n(yt.muted, !1), vt = (sr = yt.aspect) != null && sr.ratio && Un(yt.aspect.ratio) ? yt.aspect.ratio : void 0;
    if (($t = yt.sources) != null && $t.length)
      return {
        sources: yt.sources,
        repeatable: Ft,
        autostart: It,
        preloadRequired: hr,
        muted: Me,
        preview: yt.preview,
        aspect: vt,
        scale: yt.scale,
        payload: yt.payload
      };
  }
  function nt(Pe) {
    var yt;
    if (Oe) {
      Oe = !1;
      return;
    }
    dt ? (yt = dt.seek) == null || yt.call(dt, Number(Pe)) : st && e(3, st.currentTime = Number(Pe) / 1e3, st);
  }
  function Y() {
    dt ? dt.pause() : st == null || st.pause();
  }
  function Mt() {
    if (dt) {
      dt.play();
      return;
    }
    const Pe = st == null ? void 0 : st.play();
    Pe && Pe.catch((yt) => {
      ie.logError(K(new Error("Video playing error"), {
        level: "error",
        additional: { originalText: String(yt) }
      }));
    });
  }
  function Vt() {
    st && (Oe = !0, o.setValue(Math.floor(st.currentTime * 1e3)));
  }
  function Gt() {
    ie.execAnyActions(ie.json.end_actions);
  }
  function Jt() {
    ie.execAnyActions(ie.json.resume_actions);
  }
  function me() {
    ie.execAnyActions(ie.json.pause_actions);
  }
  function Ue() {
    ie.execAnyActions(ie.json.buffering_actions);
  }
  function _t() {
    ie.execAnyActions(ie.json.fatal_actions);
  }
  ro(() => {
    if (Xe && at) {
      const Pe = Tt(ie.json);
      if (Pe) {
        const yt = Xe.instance(at, Pe);
        yt ? e(36, dt = yt) : e(13, At = !1);
      }
    }
  }), an(() => {
    oe && (xe.unregisterInstance(oe), e(32, oe = void 0)), I && (I(), e(35, I = void 0)), dt && (dt.destroy(), e(36, dt = void 0));
  });
  function ye(Pe) {
    Fr[Pe ? "unshift" : "push"](() => {
      at = Pe, e(10, at);
    });
  }
  function Qe(Pe) {
    Fr[Pe ? "unshift" : "push"](() => {
      st = Pe, e(3, st);
    });
  }
  function ze(Pe) {
    Fr[Pe ? "unshift" : "push"](() => {
      at = Pe, e(10, at);
    });
  }
  function or(Pe) {
    Fr[Pe ? "unshift" : "push"](() => {
      st = Pe, e(3, st);
    });
  }
  return t.$$set = (Pe) => {
    "componentContext" in Pe && e(0, ie = Pe.componentContext), "layoutParams" in Pe && e(1, Fe = Pe.layoutParams);
  }, t.$$.update = () => {
    var Pe;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && ie.json && (e(5, kt = !1), e(6, rt = !1), e(7, Nt = !1), e(8, ct = !1), e(9, ge = void 0), e(33, he = "fit"), e(34, Ce = !1), e(13, At = !!Xe)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*customVideoInstance, $jsonSource, $jsonRepeatable, $jsonAutostart, $jsonMuted, $jsonPreload, $jsonPreview, $jsonScale, $jsonAspect*/
    260384 && ie.json && dt && (ce || et || w || We || De || Ee || H || C)) {
      const yt = Tt(ie.json);
      yt && ((Pe = dt.update) == null || Pe.call(dt, yt));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(38, n = ie.json.elapsed_time_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*elapsedVariableName*/
    128 && e(37, o = n && (ie.getVariable(n, "integer") || xe.awaitGlobalVariable(n, "integer", 0)) || io("temp", "integer", 0)), t.$$.dirty[1] & /*elapsedVariable, elapsedVariableUnsubscriber*/
    80 && o && (I && I(), e(35, I = o.subscribe(nt))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(25, i = ie.getDerivedFromVars(ie.json.video_sources))), t.$$.dirty[0] & /*componentContext*/
    1 && je(e(24, s = ie.getDerivedFromVars(ie.json.repeatable))), t.$$.dirty[0] & /*componentContext*/
    1 && U(e(23, a = ie.getDerivedFromVars(ie.json.autostart))), t.$$.dirty[0] & /*componentContext*/
    1 && ke(e(22, l = ie.getDerivedFromVars(ie.json.muted))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(21, u = ie.getDerivedFromVars(ie.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(20, c = ie.getDerivedFromVars(ie.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(19, f = ie.getDerivedFromVars(ie.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && P(e(18, _ = ie.getDerivedFromVars(ie.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(17, h = ie.getDerivedFromVars(ie.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(16, m = ie.getDerivedFromVars(ie.json.height))), t.$$.dirty[0] & /*sources, componentContext*/
    17 | t.$$.dirty[1] & /*$jsonSource*/
    131072 && (e(4, ut = ok(ce, ut)), ut.length ? e(2, Ye = !1) : (e(2, Ye = !0), ie.logError(K(new Error('Missing "video_sources" in "video"'))))), t.$$.dirty[0] & /*loop*/
    32 | t.$$.dirty[1] & /*$jsonRepeatable*/
    65536 && e(5, kt = _n(et, kt)), t.$$.dirty[0] & /*autoplay*/
    64 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && e(6, rt = _n(w, rt)), t.$$.dirty[0] & /*muted*/
    128 | t.$$.dirty[1] & /*$jsonMuted*/
    32768 && e(7, Nt = _n(We, Nt)), t.$$.dirty[0] & /*preload*/
    256 | t.$$.dirty[1] & /*$jsonPreload*/
    16384 && e(8, ct = _n(De, ct)), t.$$.dirty[0] & /*poster*/
    512 | t.$$.dirty[1] & /*$jsonPreview*/
    8192 && e(9, ge = typeof Ee == "string" ? Kd(Ee) : ge), t.$$.dirty[1] & /*$jsonScale, scale*/
    4100 && e(33, he = ik(H) || he), t.$$.dirty[1] & /*$jsonAspect, $jsonWidth, $jsonHeight*/
    3584) {
      const yt = C == null ? void 0 : C.ratio;
      yt && Un(yt) ? (e(11, pt = (100 / Number(yt)).toFixed(2)), e(34, Ce = !0)) : (e(11, pt = "0"), e(34, Ce = (!T || T.type === "match_parent") && (R == null ? void 0 : R.type) === "match_parent"));
    }
    t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*prevId*/
    2 && ie.json && (oe && (xe.unregisterInstance(oe), e(32, oe = void 0)), ie.id && !Ye && !ie.fakeElement && (e(32, oe = ie.id), xe.registerInstance(oe, { pause: Y, start: Mt }))), t.$$.dirty[0] & /*componentContext, videoElem*/
    9 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && ie.json && w && st && Mt(), t.$$.dirty[1] & /*isAbsolute*/
    8 && e(15, p = { absolute: Ce }), t.$$.dirty[1] & /*scale*/
    4 && e(14, k = { "object-fit": he });
  }, [
    ie,
    Fe,
    Ye,
    st,
    ut,
    kt,
    rt,
    Nt,
    ct,
    ge,
    at,
    pt,
    Ct,
    At,
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
    Vt,
    Gt,
    Jt,
    me,
    Ue,
    _t,
    oe,
    he,
    Ce,
    I,
    dt,
    o,
    n,
    w,
    R,
    T,
    C,
    H,
    Ee,
    De,
    We,
    et,
    ce,
    ye,
    Qe,
    ze,
    or
  ];
}
class hk extends Rr {
  constructor(r) {
    super(), Or(this, r, gk, pk, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const mk = "appkit-switch__tumbler", bk = "appkit-switch__tumbler_checked", yk = "appkit-switch_disabled", wk = "appkit-switch__thumb", kk = "appkit-switch_direction_rtl", vk = "appkit-switch__input", di = {
  switch: "appkit-switch",
  switch__tumbler: mk,
  switch__tumbler_checked: bk,
  switch_disabled: yk,
  switch__thumb: wk,
  switch_direction_rtl: kk,
  switch__input: vk
};
function Oi(t) {
  return t === !0 || t === 1;
}
function jk(t) {
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function Ck(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
        "switch",
        di,
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
          Ek,
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
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = mt(
        "switch",
        di,
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
      Lt(r, n);
    }
  };
}
function Ek(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Ve("div"), e = Ve("div"), o = cr(), i = Ve("input"), g(e, "class", di.switch__thumb), g(r, "class", n = mt("switch__tumbler", di, { checked: (
        /*value*/
        t[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = mt("switch__input", di, {
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
      q(c, r, f), ht(r, e), q(c, o, f), q(c, i, f), t[25](i), l || (u = [
        Be(
          i,
          "input",
          /*onInput*/
          t[14]
        ),
        Be(i, "focus", function() {
          Nr(
            /*focusHandler*/
            t[29]
          ) && t[29].apply(this, arguments);
        }),
        Be(i, "blur", function() {
          Nr(
            /*blurHandler*/
            t[30]
          ) && t[30].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[0] & /*value*/
      8 && n !== (n = mt("switch__tumbler", di, { checked: (
        /*value*/
        t[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      1 && s !== (s = mt("switch__input", di, {
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
      c && (J(r), J(o), J(i)), t[25](null), l = !1, Br(u);
    }
  };
}
function Ak(t) {
  let r, e, n, o;
  const i = [Ck, jk], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Zt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (ar(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ur()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
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
function Sk(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h = E, m = () => (h(), h = V(s, (ke) => e(21, _ = ke)), s), p, k = E, w = () => (k(), k = V(l, (ke) => e(22, p = ke)), l), O, U = E, R = () => (U(), U = V(a, (ke) => e(23, O = ke)), a), $, ue = E, T = () => (ue(), ue = V(i, (ke) => e(24, $ = ke)), i);
  t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => k()), t.$$.on_destroy.push(() => U()), t.$$.on_destroy.push(() => ue());
  let { componentContext: X } = r, { layoutParams: le = void 0 } = r;
  const C = Tr(Kr), M = Tr(Do), P = C.direction;
  bn(t, P, (ke) => e(20, f = ke));
  let H, se, de = !1, Ee = !1, Ae = "", pe = !0, De = "#129386", ee = "#1293864c";
  function Te() {
    e(5, pe = !0), e(16, De = "#129386"), e(17, ee = "#1293864c");
  }
  function We(ke) {
    e(3, de = ke.target.checked), i.setValue(de);
  }
  an(() => {
    H && (C.unregisterFocusable(H), e(15, H = void 0));
  });
  function Ke(ke) {
    Fr[ke ? "unshift" : "push"](() => {
      se = ke, e(2, se);
    });
  }
  return t.$$set = (ke) => {
    "componentContext" in ke && e(0, X = ke.componentContext), "layoutParams" in ke && e(1, le = ke.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(19, n = X.origJson), t.$$.dirty[0] & /*origJson*/
    524288 && n && Te(), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, o = X.json.is_on_variable), t.$$.dirty[0] & /*variable, componentContext*/
    262145 && T(e(7, i = o && (X.getVariable(o, "boolean") || C.awaitGlobalVariable(o, "boolean", !1)) || io("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(12, s = X.getDerivedFromVars(X.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && R(e(11, a = X.getDerivedFromVars(X.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && w(e(10, l = X.getDerivedFromVars(X.json.on_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    2359313) {
      let ke = !1;
      o ? (M.hasAction() || (_ == null ? void 0 : _.mode) === "exclude") && (ke = !0, X.logError(K(new Error('Cannot show "switch" inside component with an action or inside accessibility mode=exclude')))) : (ke = !0, X.logError(K(new Error('Missing "is_on_variable" in "switch"')))), Ee !== ke && e(4, Ee = ke);
    }
    if (t.$$.dirty[0] & /*value, $valueVariable*/
    16777224 && Oi(de) !== Oi($) && e(3, de = Oi($)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    8388640 && e(5, pe = _n(O, pe)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    4259840 && (e(16, De = gr(p, 1, De)), typeof p == "string")) {
      const ke = fo(p);
      ke && (ke.a *= 0.3, e(17, ee = ca(ke)));
    }
    t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    2097153 && (_ != null && _.description ? e(6, Ae = ri(_)) : X.logError(K(new Error('Missing accessibility "description" for switch'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled, $direction*/
    1048608 && e(9, u = {
      disabled: !pe,
      direction: f
    }), t.$$.dirty[0] & /*onColor, onSubColor*/
    196608 && e(8, c = {
      "--divkit-switch-on-color": De,
      "--divkit-switch-on-sub-color": ee
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    32773 && se && X.json && (H && (C.unregisterFocusable(H), e(15, H = void 0)), X.id && !X.fakeElement && (e(15, H = X.id), C.registerFocusable(H, {
      focus() {
        se && se.focus();
      }
    })));
  }, [
    X,
    le,
    se,
    de,
    Ee,
    pe,
    Ae,
    i,
    c,
    u,
    l,
    a,
    s,
    P,
    We,
    H,
    De,
    ee,
    o,
    n,
    f,
    _,
    p,
    O,
    $,
    Ke
  ];
}
class Vk extends Rr {
  constructor(r) {
    super(), Or(this, r, Sk, Ak, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Fk = "appkit-checkbox", Ik = "appkit-checkbox__box", Dk = "appkit-checkbox__box_checked", Tk = "appkit-checkbox__checkmark", Mk = "appkit-checkbox_disabled", Pk = "appkit-checkbox__input", _i = {
  checkbox: Fk,
  checkbox__box: Ik,
  checkbox__box_checked: Dk,
  checkbox__checkmark: Tk,
  checkbox_disabled: Mk,
  checkbox__input: Pk
};
function Nk(t) {
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function zk(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
        "checkbox",
        _i,
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
          Ok,
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
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = mt(
        "checkbox",
        _i,
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
      Lt(r, n);
    }
  };
}
function Ok(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Ve("div"), e = Ve("div"), o = cr(), i = Ve("input"), g(e, "class", _i.checkbox__checkmark), g(r, "class", n = mt("checkbox__box", _i, { checked: (
        /*value*/
        t[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = mt("checkbox__input", _i, {
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
      q(c, r, f), ht(r, e), q(c, o, f), q(c, i, f), t[28](i), l || (u = [
        Be(
          i,
          "input",
          /*onInput*/
          t[15]
        ),
        Be(i, "focus", function() {
          Nr(
            /*focusHandler*/
            t[32]
          ) && t[32].apply(this, arguments);
        }),
        Be(i, "blur", function() {
          Nr(
            /*blurHandler*/
            t[33]
          ) && t[33].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[0] & /*value*/
      8 && n !== (n = mt("checkbox__box", _i, { checked: (
        /*value*/
        t[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      8 && s !== (s = mt("checkbox__input", _i, {
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
      c && (J(r), J(o), J(i)), t[28](null), l = !1, Br(u);
    }
  };
}
function Rk(t) {
  let r, e, n, o;
  const i = [zk, Nk], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Zt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (ar(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ur()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
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
function Lk(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m = E, p = () => (m(), m = V(s, (ie) => e(22, h = ie)), s), k, w = E, O = () => (w(), w = V(c, (ie) => e(23, k = ie)), c), U, R = E, $ = () => (R(), R = V(u, (ie) => e(24, U = ie)), u), ue, T = E, X = () => (T(), T = V(l, (ie) => e(25, ue = ie)), l), le, C = E, M = () => (C(), C = V(a, (ie) => e(26, le = ie)), a), P, H = E, se = () => (H(), H = V(i, (ie) => e(27, P = ie)), i);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => R()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => C()), t.$$.on_destroy.push(() => H());
  let { componentContext: de } = r, { layoutParams: Ee = void 0 } = r;
  const Ae = Tr(Kr), pe = Tr(Do);
  let De, ee, Te = !1, We = !1, Ke = "", ke = !0, et = "#129386", fe = "rgba(0, 0, 0, .3)", je = "#fff";
  function ce() {
    e(5, ke = !0), e(17, et = "#129386"), e(18, fe = "rgba(0, 0, 0, .3)"), e(19, je = "#fff");
  }
  function te(ie) {
    e(3, Te = ie.target.checked), i.setValue(Te);
  }
  an(() => {
    De && (Ae.unregisterFocusable(De), e(16, De = void 0));
  });
  function _e(ie) {
    Fr[ie ? "unshift" : "push"](() => {
      ee = ie, e(2, ee);
    });
  }
  return t.$$set = (ie) => {
    "componentContext" in ie && e(0, de = ie.componentContext), "layoutParams" in ie && e(1, Ee = ie.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(21, n = de.origJson), t.$$.dirty[0] & /*origJson*/
    2097152 && n && ce(), t.$$.dirty[0] & /*componentContext*/
    1 && e(20, o = de.json.is_checked_variable), t.$$.dirty[0] & /*variable, componentContext*/
    1048577 && se(e(7, i = o && (de.getVariable(o, "boolean") || Ae.awaitGlobalVariable(o, "boolean", !1)) || io("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && p(e(14, s = de.getDerivedFromVars(de.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(13, a = de.getDerivedFromVars(de.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && X(e(12, l = de.getDerivedFromVars(de.json.on_color))), t.$$.dirty[0] & /*componentContext*/
    1 && $(e(11, u = de.getDerivedFromVars(de.json.off_color))), t.$$.dirty[0] & /*componentContext*/
    1 && O(e(10, c = de.getDerivedFromVars(de.json.check_mark_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    5242897) {
      let ie = !1;
      o ? (pe.hasAction() || (h == null ? void 0 : h.mode) === "exclude") && (ie = !0, de.logError(K(new Error('Cannot show "checkbox" inside component with an action or inside accessibility mode=exclude')))) : (ie = !0, de.logError(K(new Error('Missing "is_checked_variable" in "checkbox"')))), We !== ie && e(4, We = ie);
    }
    t.$$.dirty[0] & /*value, $valueVariable*/
    134217736 && Oi(Te) !== Oi(P) && e(3, Te = Oi(P)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    67108896 && e(5, ke = _n(le, ke)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    33685504 && e(17, et = gr(ue, 1, et)), t.$$.dirty[0] & /*$jsonOffColor, offColor*/
    17039360 && e(18, fe = gr(U, 1, fe)), t.$$.dirty[0] & /*$jsonCheckMarkColor, checkMarkColor*/
    8912896 && e(19, je = gr(k, 1, je)), t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    4194305 && (h != null && h.description ? e(6, Ke = ri(h)) : de.logError(K(new Error('Missing accessibility "description" for checkbox'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    32 && e(9, f = { disabled: !ke }), t.$$.dirty[0] & /*onColor, offColor, checkMarkColor*/
    917504 && e(8, _ = {
      "--divkit-checkbox-on-color": et,
      "--divkit-checkbox-off-color": fe,
      "--divkit-checkbox-check-mark-color": je
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    65541 && ee && de.json && (De && (Ae.unregisterFocusable(De), e(16, De = void 0)), de.id && !de.fakeElement && (e(16, De = de.id), Ae.registerFocusable(De, {
      focus() {
        ee && ee.focus();
      }
    })));
  }, [
    de,
    Ee,
    ee,
    Te,
    We,
    ke,
    Ke,
    i,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    te,
    De,
    et,
    fe,
    je,
    o,
    n,
    h,
    k,
    U,
    ue,
    le,
    P,
    _e
  ];
}
class Bk extends Rr {
  constructor(r) {
    super(), Or(this, r, Lk, Rk, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Hk = "appkit-radio", Wk = "appkit-radio__group", Uk = "appkit-radio__group_vertical", Gk = "appkit-radio__group_horizontal", Jk = "appkit-radio__item", qk = "appkit-radio_disabled", Yk = "appkit-radio__circle", Kk = "appkit-radio__circle_selected", Xk = "appkit-radio__dot", Zk = "appkit-radio__label", Qk = "appkit-radio__input", ko = {
  radio: Hk,
  radio__group: Wk,
  radio__group_vertical: Uk,
  radio__group_horizontal: Gk,
  radio__item: Jk,
  radio_disabled: qk,
  radio__circle: Yk,
  radio__circle_selected: Kk,
  radio__dot: Xk,
  radio__label: Zk,
  radio__input: Qk
};
function Ef(t, r, e) {
  const n = t.slice();
  return n[55] = r[e], n;
}
function xk(t) {
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function $k(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
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
          rv,
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
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = mt(
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
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Lt(r, n);
    }
  };
}
function ev(t) {
  let r, e = (
    /*item*/
    t[55].value + ""
  ), n;
  return {
    c() {
      r = Ve("span"), n = Pn(e), g(r, "class", ko.radio__label);
    },
    m(o, i) {
      q(o, r, i), ht(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      o[55].value + "") && xn(n, e);
    },
    d(o) {
      o && J(r);
    }
  };
}
function tv(t) {
  let r, e = (
    /*item*/
    t[55].text + ""
  ), n;
  return {
    c() {
      r = Ve("span"), n = Pn(e), g(r, "class", ko.radio__label);
    },
    m(o, i) {
      q(o, r, i), ht(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      o[55].text + "") && xn(n, e);
    },
    d(o) {
      o && J(r);
    }
  };
}
function Af(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h;
  function m(O, U) {
    return (
      /*item*/
      O[55].text ? tv : ev
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
      r = Ve("label"), e = Ve("div"), n = Ve("div"), i = cr(), k.c(), s = cr(), a = Ve("input"), f = cr(), g(n, "class", ko.radio__dot), g(e, "class", o = mt("radio__circle", ko, {
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
    m(O, U) {
      q(O, r, U), ht(r, e), ht(e, n), ht(r, i), k.m(r, null), ht(r, s), ht(r, a), ht(r, f), _ || (h = [
        Be(a, "change", w),
        Be(a, "focus", function() {
          Nr(
            /*focusHandler*/
            t[52]
          ) && t[52].apply(this, arguments);
        }),
        Be(a, "blur", function() {
          Nr(
            /*blurHandler*/
            t[53]
          ) && t[53].apply(this, arguments);
        })
      ], _ = !0);
    },
    p(O, U) {
      t = O, U[0] & /*$valueVariable, filteredItems*/
      8388640 && o !== (o = mt("radio__circle", ko, {
        selected: (
          /*$valueVariable*/
          t[23] === /*item*/
          t[55].value
        )
      })) && g(e, "class", o), p === (p = m(t)) && k ? k.p(t, U) : (k.d(1), k = p(t), k && (k.c(), k.m(r, s))), U[0] & /*groupName*/
      4096 && g(
        a,
        "name",
        /*groupName*/
        t[12]
      ), U[0] & /*filteredItems*/
      32 && l !== (l = /*item*/
      t[55].value) && (a.value = l), U[0] & /*$valueVariable, filteredItems*/
      8388640 && u !== (u = /*$valueVariable*/
      t[23] === /*item*/
      t[55].value) && (a.checked = u), U[0] & /*isEnabled*/
      16 && c !== (c = !/*isEnabled*/
      t[4]) && (a.disabled = c);
    },
    d(O) {
      O && J(r), k.d(), _ = !1, Br(h);
    }
  };
}
function rv(t) {
  let r, e, n = nr(
    /*filteredItems*/
    t[5]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Af(Ef(t, n, i));
  return {
    c() {
      r = Ve("div");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", e = mt(
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
        n = nr(
          /*filteredItems*/
          i[5]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Ef(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Af(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s[0] & /*groupMods*/
      1024 && e !== (e = mt(
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
      i && J(r), on(o, i), t[48](null);
    }
  };
}
function nv(t) {
  let r, e, n, o;
  const i = [$k, xk], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Zt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (ar(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ur()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
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
function ov(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, U, R, $, ue, T, X = E, le = () => (X(), X = V(l, (Ue) => e(37, T = Ue)), l), C, M = E, P = () => (M(), M = V(w, (Ue) => e(38, C = Ue)), w), H, se = E, de = () => (se(), se = V(k, (Ue) => e(39, H = Ue)), k), Ee, Ae = E, pe = () => (Ae(), Ae = V(p, (Ue) => e(40, Ee = Ue)), p), De, ee = E, Te = () => (ee(), ee = V(m, (Ue) => e(41, De = Ue)), m), We, Ke = E, ke = () => (Ke(), Ke = V(h, (Ue) => e(42, We = Ue)), h), et, fe = E, je = () => (fe(), fe = V(_, (Ue) => e(43, et = Ue)), _), ce, te = E, _e = () => (te(), te = V(f, (Ue) => e(44, ce = Ue)), f), ie, Fe = E, xe = () => (Fe(), Fe = V(c, (Ue) => e(45, ie = Ue)), c), Xe, oe = E, Ye = () => (oe(), oe = V(u, (Ue) => e(46, Xe = Ue)), u), Oe, st = E, at = () => (st(), st = V(a, (Ue) => e(23, Oe = Ue)), a);
  t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => te()), t.$$.on_destroy.push(() => Fe()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => st());
  let { componentContext: ut } = r, { layoutParams: kt = void 0 } = r;
  const rt = Tr(Kr), Nt = Tr(Do);
  let ct, ge, he = !1, pt = "", Ce = !0, I = "#129386", Ct = "rgba(0, 0, 0, 0.3)", dt = "", At, Tt, nt = "", Y = "vertical", Mt = 8;
  function Vt() {
    e(4, Ce = !0), e(26, I = "#129386"), e(27, Ct = "rgba(0, 0, 0, 0.3)"), e(28, dt = ""), e(29, At = void 0), e(30, Tt = void 0), e(31, nt = ""), e(32, Y = "vertical"), e(33, Mt = 8);
  }
  function Gt(Ue) {
    a.setValue(Ue);
  }
  an(() => {
    ct && (rt.unregisterFocusable(ct), e(25, ct = void 0));
  });
  const Jt = (Ue) => Gt(Ue.value);
  function me(Ue) {
    Fr[Ue ? "unshift" : "push"](() => {
      ge = Ue, e(2, ge);
    });
  }
  return t.$$set = (Ue) => {
    "componentContext" in Ue && e(0, ut = Ue.componentContext), "layoutParams" in Ue && e(1, kt = Ue.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(36, n = ut.origJson), t.$$.dirty[1] & /*origJson*/
    32 && n && Vt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(34, o = ut.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(35, i = ut.json.options), t.$$.dirty[1] & /*items*/
    16 && e(5, s = Array.isArray(i) && i.filter((Ue) => typeof Ue.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8 && at(e(7, a = o && (ut.getVariable(o, "string") || rt.awaitGlobalVariable(o, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(22, l = ut.getDerivedFromVars(ut.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(21, u = ut.getDerivedFromVars(ut.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(20, c = ut.getDerivedFromVars(ut.json.selected_color))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(19, f = ut.getDerivedFromVars(ut.json.default_color))), t.$$.dirty[0] & /*componentContext*/
    1 && je(e(18, _ = ut.getDerivedFromVars(ut.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ke(e(17, h = ut.getDerivedFromVars(ut.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(16, m = ut.getDerivedFromVars(ut.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(15, p = ut.getDerivedFromVars(ut.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(14, k = ut.getDerivedFromVars(ut.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && P(e(13, w = ut.getDerivedFromVars(ut.json.item_spacing))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || ut.logError(K(new Error('Empty "options" in "radio"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    72) {
      let Ue = !1;
      o ? (Nt.hasAction() || (T == null ? void 0 : T.mode) === "exclude") && (Ue = !0, ut.logError(K(new Error('Cannot show "radio" inside component with an action or inside accessibility mode=exclude')))) : (Ue = !0, ut.logError(K(new Error('Missing "value_variable" in "radio"')))), he !== Ue && e(3, he = Ue);
    }
    t.$$.dirty[0] & /*isEnabled*/
    16 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    32768 && e(4, Ce = _n(Xe, Ce)), t.$$.dirty[0] & /*selectedColor*/
    67108864 | t.$$.dirty[1] & /*$jsonSelectedColor*/
    16384 && e(26, I = gr(ie, 1, I)), t.$$.dirty[0] & /*defaultColor*/
    134217728 | t.$$.dirty[1] & /*$jsonDefaultColor*/
    8192 && e(27, Ct = gr(ce, 1, Ct)), t.$$.dirty[0] & /*textColor*/
    268435456 | t.$$.dirty[1] & /*$jsonTextColor*/
    4096 && e(28, dt = gr(et, 1, dt)), t.$$.dirty[0] & /*fontSize*/
    536870912 | t.$$.dirty[1] & /*$jsonFontSize*/
    2048 && e(29, At = typeof We == "number" && We > 0 ? We : At), t.$$.dirty[0] & /*fontWeight*/
    1073741824 | t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontFamily*/
    1536 && (e(30, Tt = wi(De, void 0, Tt)), Ee && typeof Ee == "string" ? e(31, nt = rt.typefaceProvider(Ee, { fontWeight: Tt || 400 })) : e(31, nt = "")), t.$$.dirty[1] & /*$jsonOrientation, orientation*/
    258 && e(32, Y = H === "horizontal" || H === "vertical" ? H : Y), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    132 && e(33, Mt = typeof C == "number" && C >= 0 ? C : Mt), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    64 && (T != null && T.description ? e(6, pt = ri(T)) : ut.logError(K(new Error('Missing accessibility "description" for radio'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext*/
    1 && e(12, O = ut.id || `radio_${Math.random().toString(36).slice(2)}`), t.$$.dirty[0] & /*isEnabled*/
    16 && e(11, U = { disabled: !Ce }), t.$$.dirty[1] & /*orientation*/
    2 && e(10, R = { [Y]: !0 }), t.$$.dirty[0] & /*selectedColor, defaultColor, textColor, fontSize, fontWeight*/
    2080374784 | t.$$.dirty[1] & /*fontFamily*/
    1 && e(9, $ = {
      "--divkit-radio-selected-color": I,
      "--divkit-radio-default-color": Ct,
      ...dt ? { "--divkit-radio-text-color": dt } : {},
      ...At ? { "font-size": ae(At) } : {},
      ...Tt ? { "font-weight": Tt } : {},
      ...nt ? { "font-family": nt } : {}
    }), t.$$.dirty[1] & /*itemSpacing*/
    4 && e(8, ue = `gap: ${ae(Mt)}`), t.$$.dirty[0] & /*container, componentContext, prevId*/
    33554437 && ge && ut.json && (ct && (rt.unregisterFocusable(ct), e(25, ct = void 0)), ut.id && !ut.fakeElement && (e(25, ct = ut.id), rt.registerFocusable(ct, {
      focus() {
        if (ge) {
          const Ue = ge.querySelector("input");
          Ue && Ue.focus();
        }
      }
    })));
  }, [
    ut,
    kt,
    ge,
    he,
    Ce,
    s,
    pt,
    a,
    ue,
    $,
    R,
    U,
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
    Oe,
    Gt,
    ct,
    I,
    Ct,
    dt,
    At,
    Tt,
    nt,
    Y,
    Mt,
    o,
    i,
    n,
    T,
    C,
    H,
    Ee,
    De,
    We,
    et,
    ce,
    ie,
    Xe,
    Jt,
    me
  ];
}
class iv extends Rr {
  constructor(r) {
    super(), Or(this, r, ov, nv, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const sv = "appkit-progress", lv = "appkit-progress__linear", av = "appkit-progress__circular", ei = {
  progress: sv,
  progress__linear: lv,
  "progress__linear-fill": "appkit-progress__linear-fill",
  "progress__linear-fill_indeterminate": "appkit-progress__linear-fill_indeterminate",
  "progress-linear-indeterminate": "appkit-progress-linear-indeterminate",
  progress__circular: av,
  "progress__circular-track": "appkit-progress__circular-track",
  "progress__circular-fill": "appkit-progress__circular-fill",
  "progress__circular-fill_indeterminate": "appkit-progress__circular-fill_indeterminate",
  "progress-circular-indeterminate": "appkit-progress-circular-indeterminate"
};
function uv(t) {
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function cv(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt("progress", ei, {}),
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
      $$slots: { default: [_v] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function fv(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = xr("svg"), e = xr("circle"), n = xr("circle"), g(e, "class", ei["progress__circular-track"]), g(e, "cx", Qo / 2), g(e, "cy", Qo / 2), g(e, "r", ia), g(
        e,
        "stroke-width",
        /*trackThickness*/
        t[5]
      ), g(n, "class", o = mt("progress__circular-fill", ei, {
        indeterminate: (
          /*isIndeterminate*/
          t[4]
        )
      })), g(n, "cx", Qo / 2), g(n, "cy", Qo / 2), g(n, "r", ia), g(
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
      )), g(n, "stroke-linecap", "round"), g(r, "class", ei.progress__circular), g(r, "width", Qo), g(r, "height", Qo), g(r, "viewBox", "0 0 " + Qo + " " + Qo), g(r, "role", "progressbar"), g(
        r,
        "aria-valuenow",
        /*ariaValue*/
        t[6]
      ), g(r, "aria-valuemin", 0), g(r, "aria-valuemax", 100);
    },
    m(s, a) {
      q(s, r, a), ht(r, e), ht(r, n);
    },
    p(s, a) {
      a & /*trackThickness*/
      32 && g(
        e,
        "stroke-width",
        /*trackThickness*/
        s[5]
      ), a & /*isIndeterminate*/
      16 && o !== (o = mt("progress__circular-fill", ei, {
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
function dv(t) {
  let r, e, n;
  return {
    c() {
      r = Ve("div"), e = Ve("div"), g(e, "class", n = mt("progress__linear-fill", ei, {
        indeterminate: (
          /*isIndeterminate*/
          t[4]
        )
      })), D(
        e,
        "width",
        /*isIndeterminate*/
        t[4] ? "30%" : (
          /*progressValue*/
          t[2] * 100 + "%"
        )
      ), g(r, "class", ei.progress__linear), D(r, "height", ae(
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
      q(o, r, i), ht(r, e);
    },
    p(o, i) {
      i & /*isIndeterminate*/
      16 && n !== (n = mt("progress__linear-fill", ei, {
        indeterminate: (
          /*isIndeterminate*/
          o[4]
        )
      })) && g(e, "class", n), i & /*isIndeterminate, progressValue*/
      20 && D(
        e,
        "width",
        /*isIndeterminate*/
        o[4] ? "30%" : (
          /*progressValue*/
          o[2] * 100 + "%"
        )
      ), i & /*trackThickness*/
      32 && D(r, "height", ae(
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
function _v(t) {
  let r;
  function e(i, s) {
    return (
      /*progressStyle*/
      i[3] === "linear" ? dv : fv
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Zt();
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
function pv(t) {
  let r, e, n, o;
  const i = [cv, uv], s = [];
  function a(l, u) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Zt();
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
const Qo = 48, ia = 20;
function gv(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m = E, p = () => (m(), m = V(u, (et) => e(19, h = et)), u), k, w = E, O = () => (w(), w = V(l, (et) => e(20, k = et)), l), U, R = E, $ = () => (R(), R = V(a, (et) => e(21, U = et)), a), ue, T = E, X = () => (T(), T = V(s, (et) => e(22, ue = et)), s), le, C = E, M = () => (C(), C = V(i, (et) => e(23, le = et)), i), P, H = E, se = () => (H(), H = V(o, (et) => e(24, P = et)), o);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => R()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => C()), t.$$.on_destroy.push(() => H());
  let { componentContext: de } = r, { layoutParams: Ee = void 0 } = r;
  Tr(Kr);
  let Ae = 0, pe = "linear", De = !1, ee = "#129386", Te = "rgba(0, 0, 0, .1)", We = 4;
  function Ke() {
    e(2, Ae = 0), e(3, pe = "linear"), e(4, De = !1), e(16, ee = "#129386"), e(17, Te = "rgba(0, 0, 0, .1)"), e(5, We = 4);
  }
  const ke = 2 * Math.PI * ia;
  return t.$$set = (et) => {
    "componentContext" in et && e(0, de = et.componentContext), "layoutParams" in et && e(1, Ee = et.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(18, n = de.origJson), t.$$.dirty & /*origJson*/
    262144 && n && Ke(), t.$$.dirty & /*componentContext*/
    1 && se(e(14, o = de.getDerivedFromVars(de.json.value))), t.$$.dirty & /*componentContext*/
    1 && M(e(13, i = de.getDerivedFromVars(de.json.style))), t.$$.dirty & /*componentContext*/
    1 && X(e(12, s = de.getDerivedFromVars(de.json.is_indeterminate))), t.$$.dirty & /*componentContext*/
    1 && $(e(11, a = de.getDerivedFromVars(de.json.active_color))), t.$$.dirty & /*componentContext*/
    1 && O(e(10, l = de.getDerivedFromVars(de.json.inactive_color))), t.$$.dirty & /*componentContext*/
    1 && p(e(9, u = de.getDerivedFromVars(de.json.track_thickness))), t.$$.dirty & /*$jsonValue, progressValue*/
    16777220 && e(2, Ae = typeof P == "number" ? Math.max(0, Math.min(1, P)) : Ae), t.$$.dirty & /*$jsonStyle, progressStyle*/
    8388616 && e(3, pe = le === "linear" || le === "circular" ? le : pe), t.$$.dirty & /*$jsonIsIndeterminate, isIndeterminate*/
    4194320 && e(4, De = _n(ue, De)), t.$$.dirty & /*$jsonActiveColor, activeColor*/
    2162688 && e(16, ee = gr(U, 1, ee)), t.$$.dirty & /*$jsonInactiveColor, inactiveColor*/
    1179648 && e(17, Te = gr(k, 1, Te)), t.$$.dirty & /*$jsonTrackThickness, trackThickness*/
    524320 && e(5, We = typeof h == "number" && h >= 0 ? h : We), t.$$.dirty & /*progressValue*/
    4 && e(8, c = ke * (1 - Ae)), t.$$.dirty & /*activeColor, inactiveColor*/
    196608 && e(7, f = {
      "--divkit-progress-active-color": ee,
      "--divkit-progress-inactive-color": Te
    }), t.$$.dirty & /*isIndeterminate, progressValue*/
    20 && e(6, _ = De ? void 0 : Math.round(Ae * 100));
  }, [
    de,
    Ee,
    Ae,
    pe,
    De,
    We,
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
    ee,
    Te,
    n,
    h,
    k,
    U,
    ue,
    le,
    P
  ];
}
class hv extends Rr {
  constructor(r) {
    super(), Or(this, r, gv, pv, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const mv = "appkit-table", bv = "appkit-table_halign_start", yv = "appkit-table_halign_center", wv = "appkit-table_halign_end", kv = "appkit-table_valign_start", vv = "appkit-table_valign_center", jv = "appkit-table_valign_end", Cv = "appkit-table__cell", Ev = "appkit-table__cell_halign_left", Av = "appkit-table__cell_halign_start", Sv = "appkit-table__cell_halign_center", Vv = "appkit-table__cell_halign_right", Fv = "appkit-table__cell_halign_end", Iv = "appkit-table__cell_valign_top", Dv = "appkit-table__cell_valign_center", Tv = "appkit-table__cell_valign_bottom", Mv = "appkit-table__cell_valign_baseline", Pv = "appkit-table__separator", Nv = "appkit-table__separator_row", zv = "appkit-table__separator_col", Uo = {
  table: mv,
  table_halign_start: bv,
  table_halign_center: yv,
  table_halign_end: wv,
  table_valign_start: kv,
  table_valign_center: vv,
  table_valign_end: jv,
  table__cell: Cv,
  table__cell_halign_left: Ev,
  table__cell_halign_start: Av,
  table__cell_halign_center: Sv,
  table__cell_halign_right: Vv,
  table__cell_halign_end: Fv,
  table__cell_valign_top: Iv,
  table__cell_valign_center: Dv,
  table__cell_valign_bottom: Tv,
  table__cell_valign_baseline: Mv,
  table__separator: Pv,
  table__separator_row: Nv,
  table__separator_col: zv
};
function Sf(t, r, e) {
  const n = t.slice();
  return n[35] = r[e], n;
}
function Vf(t, r, e) {
  const n = t.slice();
  return n[38] = r[e], n;
}
function Ov(t) {
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function Rv(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
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
      $$slots: { default: [Lv] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = mt(
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
      e || (B(r.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Lt(r, n);
    }
  };
}
function Ff(t) {
  var a, l, u, c, f, _, h, m;
  let r, e, n, o = `${/*placement*/
  ((l = (a = t[38].layoutParams.gridArea) == null ? void 0 : a.x) != null ? l : 0) + 1} / span ${/*placement*/
  (c = (u = t[38].layoutParams.gridArea) == null ? void 0 : u.colSpan) != null ? c : 1}`, i = `${/*placement*/
  ((_ = (f = t[38].layoutParams.gridArea) == null ? void 0 : f.y) != null ? _ : 0) + 1} / span ${/*placement*/
  (m = (h = t[38].layoutParams.gridArea) == null ? void 0 : h.rowSpan) != null ? m : 1}`, s;
  return e = new Gn({
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
      r = Ve("div"), Bt(e.$$.fragment), g(r, "class", n = mt("table__cell", Uo, {
        halign: (
          /*placement*/
          t[38].cellHAlign
        ),
        valign: (
          /*placement*/
          t[38].cellVAlign
        )
      })), D(r, "grid-column", o), D(r, "grid-row", i), D(
        r,
        "background",
        /*placement*/
        t[38].backgroundStyle || void 0
      );
    },
    m(p, k) {
      q(p, r, k), Rt(e, r, null), s = !0;
    },
    p(p, k) {
      var O, U, R, $, ue, T, X, le;
      const w = {};
      k[0] & /*cellPlacements*/
      16 && (w.componentContext = /*placement*/
      p[38].componentContext), k[0] & /*cellPlacements*/
      16 && (w.layoutParams = /*placement*/
      p[38].layoutParams), e.$set(w), (!s || k[0] & /*cellPlacements*/
      16 && n !== (n = mt("table__cell", Uo, {
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
      ((U = (O = p[38].layoutParams.gridArea) == null ? void 0 : O.x) != null ? U : 0) + 1} / span ${/*placement*/
      ($ = (R = p[38].layoutParams.gridArea) == null ? void 0 : R.colSpan) != null ? $ : 1}`) && D(r, "grid-column", o), k[0] & /*cellPlacements*/
      16 && i !== (i = `${/*placement*/
      ((T = (ue = p[38].layoutParams.gridArea) == null ? void 0 : ue.y) != null ? T : 0) + 1} / span ${/*placement*/
      (le = (X = p[38].layoutParams.gridArea) == null ? void 0 : X.rowSpan) != null ? le : 1}`) && D(r, "grid-row", i), k[0] & /*cellPlacements*/
      16 && D(
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
      p && J(r), Lt(e);
    }
  };
}
function If(t) {
  let r, e, n, o;
  return {
    c() {
      r = Ve("div"), e = Ve("div"), o = cr(), g(e, "class", n = /*sep*/
      t[35].width ? Uo.table__separator_col : Uo.table__separator_row), D(
        e,
        "background",
        /*sep*/
        t[35].background
      ), D(
        e,
        "height",
        /*sep*/
        t[35].height || void 0
      ), D(
        e,
        "width",
        /*sep*/
        t[35].width || void 0
      ), g(r, "class", Uo.table__separator), D(
        r,
        "grid-column",
        /*sep*/
        t[35].gridColumn
      ), D(
        r,
        "grid-row",
        /*sep*/
        t[35].gridRow
      ), D(
        r,
        "margin-top",
        /*sep*/
        t[35].marginTop || void 0
      ), D(
        r,
        "margin-bottom",
        /*sep*/
        t[35].marginBottom || void 0
      ), D(
        r,
        "margin-left",
        /*sep*/
        t[35].marginLeft || void 0
      ), D(
        r,
        "margin-right",
        /*sep*/
        t[35].marginRight || void 0
      );
    },
    m(i, s) {
      q(i, r, s), ht(r, e), ht(r, o);
    },
    p(i, s) {
      s[0] & /*separatorElements*/
      32 && n !== (n = /*sep*/
      i[35].width ? Uo.table__separator_col : Uo.table__separator_row) && g(e, "class", n), s[0] & /*separatorElements*/
      32 && D(
        e,
        "background",
        /*sep*/
        i[35].background
      ), s[0] & /*separatorElements*/
      32 && D(
        e,
        "height",
        /*sep*/
        i[35].height || void 0
      ), s[0] & /*separatorElements*/
      32 && D(
        e,
        "width",
        /*sep*/
        i[35].width || void 0
      ), s[0] & /*separatorElements*/
      32 && D(
        r,
        "grid-column",
        /*sep*/
        i[35].gridColumn
      ), s[0] & /*separatorElements*/
      32 && D(
        r,
        "grid-row",
        /*sep*/
        i[35].gridRow
      ), s[0] & /*separatorElements*/
      32 && D(
        r,
        "margin-top",
        /*sep*/
        i[35].marginTop || void 0
      ), s[0] & /*separatorElements*/
      32 && D(
        r,
        "margin-bottom",
        /*sep*/
        i[35].marginBottom || void 0
      ), s[0] & /*separatorElements*/
      32 && D(
        r,
        "margin-left",
        /*sep*/
        i[35].marginLeft || void 0
      ), s[0] & /*separatorElements*/
      32 && D(
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
function Lv(t) {
  let r, e, n, o = nr(
    /*cellPlacements*/
    t[4]
  ), i = [];
  for (let u = 0; u < o.length; u += 1)
    i[u] = Ff(Vf(t, o, u));
  const s = (u) => Q(i[u], 1, 1, () => {
    i[u] = null;
  });
  let a = nr(
    /*separatorElements*/
    t[5]
  ), l = [];
  for (let u = 0; u < a.length; u += 1)
    l[u] = If(Sf(t, a, u));
  return {
    c() {
      for (let u = 0; u < i.length; u += 1)
        i[u].c();
      r = cr();
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      e = Zt();
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
          const _ = Vf(u, o, f);
          i[f] ? (i[f].p(_, c), B(i[f], 1)) : (i[f] = Ff(_), i[f].c(), B(i[f], 1), i[f].m(r.parentNode, r));
        }
        for (ar(), f = o.length; f < i.length; f += 1)
          s(f);
        ur();
      }
      if (c[0] & /*separatorElements*/
      32) {
        a = nr(
          /*separatorElements*/
          u[5]
        );
        let f;
        for (f = 0; f < a.length; f += 1) {
          const _ = Sf(u, a, f);
          l[f] ? l[f].p(_, c) : (l[f] = If(_), l[f].c(), l[f].m(e.parentNode, e));
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
      u && (J(r), J(e)), on(i, u), on(l, u);
    }
  };
}
function Bv(t) {
  let r, e, n, o;
  const i = [Rv, Ov], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Zt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (ar(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ur()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
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
function Hv(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p = E, k = () => (p(), p = V(s, (_e) => e(22, m = _e)), s), w, O = E, U = () => (O(), O = V(i, (_e) => e(23, w = _e)), i), R, $ = E, ue = () => ($(), $ = V(a, (_e) => e(24, R = _e)), a), T, X = E, le = () => (X(), X = V(l, (_e) => e(25, T = _e)), l);
  t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => X());
  let { componentContext: C } = r, { layoutParams: M = void 0 } = r;
  const P = Tr(Kr), H = P.direction;
  bn(t, H, (_e) => e(21, h = _e));
  let se = !1, de = "start", Ee = "start", Ae = [], pe, De = [], ee = [], Te = "";
  function We() {
    e(3, se = !1), e(13, de = "start"), e(14, Ee = "start");
  }
  function Ke(_e) {
    var oe, Ye;
    if (!_e || !_e.style) return null;
    let ie = "#E0E0E0", Fe = 1;
    const xe = _e.style;
    if (xe.type === "shape_drawable" && xe.shape) {
      const Oe = xe.shape;
      ie = gr(Oe.background_color || xe.color || "#E0E0E0"), Oe.type === "rounded_rectangle" && (Fe = Number(((oe = Oe.item_height) == null ? void 0 : oe.value) || ((Ye = Oe.item_width) == null ? void 0 : Ye.value) || 1));
    } else xe.color && (ie = gr(xe.color));
    const Xe = _e.margins || {};
    return {
      color: ie,
      thickness: Fe,
      show_at_start: _e.show_at_start === 1 || _e.show_at_start === !0,
      show_between: _e.show_between !== 0 && _e.show_between !== !1,
      show_at_end: _e.show_at_end === 1 || _e.show_at_end === !0,
      marginTop: Number(Xe.top) || 0,
      marginBottom: Number(Xe.bottom) || 0,
      marginLeft: Number(Xe.left) || 0,
      marginRight: Number(Xe.right) || 0
    };
  }
  function ke(_e, ie) {
    const Fe = _e.header_row;
    let xe = [];
    return _e.row_builder && Array.isArray(ie) ? xe = wl(ie, P, C, _e.row_builder).map((oe) => oe.div) : Array.isArray(_e.rows) && (xe = _e.rows), { rows: xe, headerRow: Fe };
  }
  let et = [];
  function fe(_e, ie) {
    et = [];
    for (let Fe = 0; Fe < _e; Fe++)
      et[Fe] = new Array(ie).fill(!1);
  }
  function je(_e, ie, Fe, xe) {
    var Xe;
    for (let oe = _e; oe < _e + Fe && oe < et.length; oe++)
      for (let Ye = ie; Ye < ie + xe && Ye < (((Xe = et[0]) == null ? void 0 : Xe.length) || 0); Ye++)
        et[oe][Ye] = !0;
  }
  function ce(_e, ie) {
    var xe;
    if (_e >= et.length) return ie;
    let Fe = ie;
    for (; Fe < (((xe = et[0]) == null ? void 0 : xe.length) || 0) && et[_e][Fe]; )
      Fe++;
    return Fe;
  }
  function te(_e, ie, Fe, xe, Xe, oe, Ye, Oe, st, at) {
    const ut = Array.isArray(_e.cells) ? _e.cells : [];
    let kt = 0;
    for (let rt = 0; rt < ut.length; rt++) {
      const Nt = ut[rt];
      if (!Nt || !Nt.div) continue;
      const ct = Math.max(1, Number(Nt.column_span) || 1), ge = Math.max(1, Number(Nt.row_span) || 1);
      kt = ce(ie, kt), je(ie, kt, ge, ct);
      const he = Array.isArray(Fe) && Fe[kt], pt = Nt.content_alignment_horizontal || he && he.content_alignment_horizontal || void 0, Ce = Nt.content_alignment_vertical || he && he.content_alignment_vertical || void 0;
      let I;
      const Ct = Nt.background || xe;
      if (Ct && Array.isArray(Ct) && Ct.length > 0) {
        const Tt = Ct[0];
        Tt && Tt.type === "solid" && Tt.color && (I = gr(Tt.color));
      }
      const dt = st.get(Nt.div);
      let At;
      dt ? (at.delete(dt), At = dt) : At = C.produceChildContext(Nt.div, { path: `${oe}_${rt}` }), Ye.push(At), Oe.push({
        componentContext: At,
        layoutParams: {
          gridArea: {
            x: kt,
            y: ie,
            colSpan: ct,
            rowSpan: ge
          }
        },
        cellHAlign: pt,
        cellVAlign: Ce,
        backgroundStyle: I
      }), kt += ct;
    }
  }
  return an(() => {
    Ae.forEach((_e) => {
      _e.destroy();
    });
  }), t.$$set = (_e) => {
    "componentContext" in _e && e(0, C = _e.componentContext), "layoutParams" in _e && e(1, M = _e.layoutParams);
  }, t.$$.update = () => {
    var _e, ie, Fe;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(20, n = C.origJson), t.$$.dirty[0] & /*origJson*/
    1048576 && n && We(), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, o = C.json.columns), t.$$.dirty[0] & /*componentContext*/
    1 && U(e(11, i = C.getDerivedFromVars(C.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && k(e(10, s = C.getDerivedFromVars(C.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(9, a = C.getDerivedFromVars(C.json.striped))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(8, l = typeof ((_e = C.json.row_builder) == null ? void 0 : _e.data) == "string" ? C.getDerivedFromVars((ie = C.json.row_builder) == null ? void 0 : ie.data, void 0, !0) : (Fe = C.json.row_builder) != null && Fe.data ? $o(C.json.row_builder.data) : void 0)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && (!Array.isArray(o) || o.length === 0 ? e(3, se = !0) : e(3, se = !1)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && e(17, u = Array.isArray(o) ? o.length : 0), t.$$.dirty[0] & /*jsonColumns*/
    524288)
      if (Array.isArray(o)) {
        const xe = [];
        for (let Xe = 0; Xe < o.length; Xe++) {
          const oe = o[Xe], Ye = oe == null ? void 0 : oe.width;
          if ((Ye == null ? void 0 : Ye.type) === "fixed" && Ye.value)
            xe.push(ae(Number(Ye.value)));
          else if ((Ye == null ? void 0 : Ye.type) === "match_parent") {
            const Oe = Number(Ye.weight || 1);
            xe.push(`${Oe}fr`);
          } else
            xe.push("auto");
        }
        e(16, Te = xe.join(" "));
      } else
        e(16, Te = "");
    if (t.$$.dirty[0] & /*componentContext, $jsonRowBuilderData*/
    33554433 && e(18, c = ke(C.json, T)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonColumns, allRows, columnCount, $jsonStriped*/
    17727493) {
      const xe = new Set(Ae), Xe = /* @__PURE__ */ new Map();
      pe === C && Ae.forEach((I) => {
        Xe.set(I.json, I);
      });
      const oe = [], Ye = [], Oe = [];
      let st = 0;
      const at = C.json, ut = Array.isArray(o) ? o : [], kt = !!(c.headerRow && Array.isArray(c.headerRow.cells)), rt = c.rows.length, Nt = (kt ? 1 : 0) + rt;
      fe(Nt + 10, u + 10);
      const ct = Ke(at.row_separator), ge = Ke(at.column_separator), he = Ke(at.header_separator);
      kt && (te(c.headerRow, st, ut, c.headerRow.background || at.header_background, void 0, -1, oe, Ye, Xe, xe), st++);
      const pt = c.rows;
      for (let I = 0; I < pt.length; I++) {
        const Ct = pt[I];
        if (!Ct || !Array.isArray(Ct.cells)) continue;
        let dt = Ct.background;
        !dt && R && (I % 2 === 0 ? dt = R.even_row_background : dt = R.odd_row_background), te(Ct, st, ut, dt, void 0, I, oe, Ye, Xe, xe), st++;
      }
      const Ce = st;
      if (he && kt && rt > 0 && Oe.push({
        gridColumn: `1 / span ${u}`,
        gridRow: "1 / span 1",
        background: he.color,
        height: ae(he.thickness),
        marginTop: he.marginTop ? ae(he.marginTop) : void 0,
        marginBottom: he.marginBottom ? ae(he.marginBottom) : void 0,
        marginLeft: he.marginLeft ? ae(he.marginLeft) : void 0,
        marginRight: he.marginRight ? ae(he.marginRight) : void 0
      }), ct) {
        const I = kt ? 1 : 0;
        if (ct.show_at_start && rt > 0 && Oe.push({
          gridColumn: `1 / span ${u}`,
          gridRow: `${I + 1} / span 1`,
          background: ct.color,
          height: ae(ct.thickness),
          marginTop: ct.marginTop ? ae(ct.marginTop) : void 0,
          marginBottom: ct.marginBottom ? ae(ct.marginBottom) : void 0,
          marginLeft: ct.marginLeft ? ae(ct.marginLeft) : void 0,
          marginRight: ct.marginRight ? ae(ct.marginRight) : void 0
        }), ct.show_between)
          for (let Ct = I; Ct < Ce - 1; Ct++)
            Oe.push({
              gridColumn: `1 / span ${u}`,
              gridRow: `${Ct + 1} / span 1`,
              background: ct.color,
              height: ae(ct.thickness),
              marginTop: ct.marginTop ? ae(ct.marginTop) : void 0,
              marginBottom: ct.marginBottom ? ae(ct.marginBottom) : void 0,
              marginLeft: ct.marginLeft ? ae(ct.marginLeft) : void 0,
              marginRight: ct.marginRight ? ae(ct.marginRight) : void 0
            });
        ct.show_at_end && rt > 0 && Oe.push({
          gridColumn: `1 / span ${u}`,
          gridRow: `${Ce} / span 1`,
          background: ct.color,
          height: ae(ct.thickness),
          marginTop: ct.marginTop ? ae(ct.marginTop) : void 0,
          marginBottom: ct.marginBottom ? ae(ct.marginBottom) : void 0,
          marginLeft: ct.marginLeft ? ae(ct.marginLeft) : void 0,
          marginRight: ct.marginRight ? ae(ct.marginRight) : void 0
        });
      }
      if (ge && u > 0) {
        if (ge.show_at_start && Oe.push({
          gridColumn: "1 / span 1",
          gridRow: `1 / span ${Ce}`,
          background: ge.color,
          width: ae(ge.thickness),
          marginTop: ge.marginTop ? ae(ge.marginTop) : void 0,
          marginBottom: ge.marginBottom ? ae(ge.marginBottom) : void 0,
          marginLeft: ge.marginLeft ? ae(ge.marginLeft) : void 0,
          marginRight: ge.marginRight ? ae(ge.marginRight) : void 0
        }), ge.show_between)
          for (let I = 0; I < u - 1; I++)
            Oe.push({
              gridColumn: `${I + 1} / span 1`,
              gridRow: `1 / span ${Ce}`,
              background: ge.color,
              width: ae(ge.thickness),
              marginTop: ge.marginTop ? ae(ge.marginTop) : void 0,
              marginBottom: ge.marginBottom ? ae(ge.marginBottom) : void 0,
              marginLeft: ge.marginLeft ? ae(ge.marginLeft) : void 0,
              marginRight: ge.marginRight ? ae(ge.marginRight) : void 0
            });
        ge.show_at_end && Oe.push({
          gridColumn: `${u} / span 1`,
          gridRow: `1 / span ${Ce}`,
          background: ge.color,
          width: ae(ge.thickness),
          marginTop: ge.marginTop ? ae(ge.marginTop) : void 0,
          marginBottom: ge.marginBottom ? ae(ge.marginBottom) : void 0,
          marginLeft: ge.marginLeft ? ae(ge.marginLeft) : void 0,
          marginRight: ge.marginRight ? ae(ge.marginRight) : void 0
        });
      }
      for (const I of xe)
        I.destroy();
      e(2, Ae = oe), e(4, De = Ye), e(5, ee = Oe), e(15, pe = C);
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    8396800 && e(13, de = yl(w, de)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    6307840 && e(14, Ee = bl(m, h, Ee)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    24576 && e(7, f = {
      valign: de,
      halign: Ee
    }), t.$$.dirty[0] & /*gridTemplateColumns*/
    65536 && e(6, _ = {
      "grid-template-columns": Te
    });
  }, [
    C,
    M,
    Ae,
    se,
    De,
    ee,
    _,
    f,
    l,
    a,
    s,
    i,
    H,
    de,
    Ee,
    pe,
    Te,
    u,
    c,
    o,
    n,
    h,
    m,
    w,
    R,
    T
  ];
}
class Wv extends Rr {
  constructor(r) {
    super(), Or(this, r, Hv, Bv, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Uv = "appkit-counter", Gv = "appkit-counter__container", Jv = "appkit-counter__button", qv = "appkit-counter__value", Yv = "appkit-counter_disabled", Mi = {
  counter: Uv,
  counter__container: Gv,
  counter__button: Jv,
  counter__value: qv,
  counter_disabled: Yv
};
function Kv(t) {
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function Xv(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
        "counter",
        Mi,
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
      $$slots: { default: [Zv] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = mt(
        "counter",
        Mi,
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
      Lt(r, n);
    }
  };
}
function Zv(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h, m, p, k;
  return {
    c() {
      r = Ve("div"), e = Ve("button"), n = xr("svg"), o = xr("line"), s = cr(), a = Ve("div"), l = Pn(
        /*value*/
        t[17]
      ), u = cr(), c = Ve("button"), f = xr("svg"), _ = xr("line"), h = xr("line"), g(o, "x1", "6"), g(o, "y1", "12"), g(o, "x2", "18"), g(o, "y2", "12"), g(
        o,
        "stroke",
        /*iconColor*/
        t[6]
      ), g(o, "stroke-width", "2.5"), g(o, "stroke-linecap", "round"), g(n, "viewBox", "0 0 24 24"), g(n, "fill", "none"), g(n, "xmlns", "http://www.w3.org/2000/svg"), g(e, "class", Mi.counter__button), e.disabled = i = !/*isEnabled*/
      t[3] || /*value*/
      t[17] <= /*minValue*/
      t[11], g(e, "aria-label", "Decrease value"), D(
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
      ), D(e, "width", ae(
        /*buttonSize*/
        t[5]
      )), D(e, "height", ae(
        /*buttonSize*/
        t[5]
      )), g(a, "class", Mi.counter__value), D(a, "width", ae(
        /*valueWidth*/
        t[10]
      )), D(
        a,
        "color",
        /*textColor*/
        t[8]
      ), D(a, "font-size", ae(
        /*fontSize*/
        t[9]
      )), D(
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
      ), g(h, "stroke-width", "2.5"), g(h, "stroke-linecap", "round"), g(f, "viewBox", "0 0 24 24"), g(f, "fill", "none"), g(f, "xmlns", "http://www.w3.org/2000/svg"), g(c, "class", Mi.counter__button), c.disabled = m = !/*isEnabled*/
      t[3] || /*value*/
      t[17] >= /*maxValue*/
      t[12], g(c, "aria-label", "Increase value"), D(
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
      ), D(c, "width", ae(
        /*buttonSize*/
        t[5]
      )), D(c, "height", ae(
        /*buttonSize*/
        t[5]
      )), g(r, "class", Mi.counter__container);
    },
    m(w, O) {
      q(w, r, O), ht(r, e), ht(e, n), ht(n, o), ht(r, s), ht(r, a), ht(a, l), ht(r, u), ht(r, c), ht(c, f), ht(f, _), ht(f, h), p || (k = [
        Be(
          e,
          "click",
          /*decrement*/
          t[36]
        ),
        Be(
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
      133264 && D(
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
      32 && D(e, "width", ae(
        /*buttonSize*/
        w[5]
      )), O[0] & /*buttonSize*/
      32 && D(e, "height", ae(
        /*buttonSize*/
        w[5]
      )), O[0] & /*value*/
      131072 && xn(
        l,
        /*value*/
        w[17]
      ), O[0] & /*valueWidth*/
      1024 && D(a, "width", ae(
        /*valueWidth*/
        w[10]
      )), O[0] & /*textColor*/
      256 && D(
        a,
        "color",
        /*textColor*/
        w[8]
      ), O[0] & /*fontSize*/
      512 && D(a, "font-size", ae(
        /*fontSize*/
        w[9]
      )), O[0] & /*fontWeight*/
      8192 && D(
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
      135312 && D(
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
      32 && D(c, "width", ae(
        /*buttonSize*/
        w[5]
      )), O[0] & /*buttonSize*/
      32 && D(c, "height", ae(
        /*buttonSize*/
        w[5]
      ));
    },
    d(w) {
      w && J(r), p = !1, Br(k);
    }
  };
}
function Qv(t) {
  let r, e, n, o;
  const i = [Xv, Kv], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Zt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (ar(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ur()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
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
function xv(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, k, w, O, U, R, $, ue, T, X, le, C, M = E, P = () => (M(), M = V(i, (ot) => e(46, C = ot)), i), H, se = E, de = () => (se(), se = V(ue, (ot) => e(47, H = ot)), ue), Ee, Ae = E, pe = () => (Ae(), Ae = V($, (ot) => e(48, Ee = ot)), $), De, ee = E, Te = () => (ee(), ee = V(R, (ot) => e(49, De = ot)), R), We, Ke = E, ke = () => (Ke(), Ke = V(U, (ot) => e(50, We = ot)), U), et, fe = E, je = () => (fe(), fe = V(O, (ot) => e(51, et = ot)), O), ce, te = E, _e = () => (te(), te = V(w, (ot) => e(52, ce = ot)), w), ie, Fe = E, xe = () => (Fe(), Fe = V(k, (ot) => e(53, ie = ot)), k), Xe, oe = E, Ye = () => (oe(), oe = V(p, (ot) => e(54, Xe = ot)), p), Oe, st = E, at = () => (st(), st = V(m, (ot) => e(55, Oe = ot)), m), ut, kt = E, rt = () => (kt(), kt = V(h, (ot) => e(56, ut = ot)), h), Nt, ct = E, ge = () => (ct(), ct = V(_, (ot) => e(57, Nt = ot)), _), he, pt = E, Ce = () => (pt(), pt = V(f, (ot) => e(58, he = ot)), f), I, Ct = E, dt = () => (Ct(), Ct = V(c, (ot) => e(59, I = ot)), c), At, Tt = E, nt = () => (Tt(), Tt = V(u, (ot) => e(60, At = ot)), u), Y, Mt = E, Vt = () => (Mt(), Mt = V(l, (ot) => e(61, Y = ot)), l), Gt, Jt = E, me = () => (Jt(), Jt = V(a, (ot) => e(62, Gt = ot)), a), Ue, _t = E, ye = () => (_t(), _t = V(s, (ot) => e(63, Ue = ot)), s);
  t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => te()), t.$$.on_destroy.push(() => Fe()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => st()), t.$$.on_destroy.push(() => kt()), t.$$.on_destroy.push(() => ct()), t.$$.on_destroy.push(() => pt()), t.$$.on_destroy.push(() => Ct()), t.$$.on_destroy.push(() => Tt()), t.$$.on_destroy.push(() => Mt()), t.$$.on_destroy.push(() => Jt()), t.$$.on_destroy.push(() => _t());
  let { componentContext: Qe } = r, { layoutParams: ze = void 0 } = r;
  const or = Tr(Kr), Pe = Tr(Do);
  let yt = !1, Ft = !0, It = "#4CAF50", hr = 36, Me = "#ffffff", vt = "#cccccc", sr = "#1B2630", $t = 16, Yt = 700, mr = 40, jr = "#F5F5F5", Qt = "#E0E0E0", xt = 1, G = 999, ft = 6, Wt = 0, St = 99, br = 1;
  const Er = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  };
  function wr() {
    e(3, Ft = !0), e(4, It = "#4CAF50"), e(5, hr = 36), e(6, Me = "#ffffff"), e(7, vt = "#cccccc"), e(8, sr = "#1B2630"), e(9, $t = 16), e(13, Yt = 700), e(10, mr = 40), e(37, jr = "#F5F5F5"), e(38, Qt = "#E0E0E0"), e(39, xt = 1), e(40, G = 999), e(41, ft = 6), e(11, Wt = 0), e(12, St = 99), e(42, br = 1);
  }
  function Ir() {
    if (!Ft) return;
    const ot = Math.min(T + br, St);
    ot !== T && (i.setValue(ot), Qe.json.on_increment_actions && Qe.execAnyActions(Qe.json.on_increment_actions), Qe.json.on_value_change_actions && Qe.execAnyActions(Qe.json.on_value_change_actions));
  }
  function zr() {
    if (!Ft) return;
    const ot = Math.max(T - br, Wt);
    ot !== T && (i.setValue(ot), Qe.json.on_decrement_actions && Qe.execAnyActions(Qe.json.on_decrement_actions), Qe.json.on_value_change_actions && Qe.execAnyActions(Qe.json.on_value_change_actions));
  }
  let tr;
  return an(() => {
    tr && (or.unregisterFocusable(tr), e(43, tr = void 0));
  }), t.$$set = (ot) => {
    "componentContext" in ot && e(0, Qe = ot.componentContext), "layoutParams" in ot && e(1, ze = ot.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(45, n = Qe.origJson), t.$$.dirty[1] & /*origJson*/
    16384 && n && wr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(44, o = Qe.json.counter_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8192 && P(e(16, i = o && (Qe.getVariable(o, "integer") || or.awaitGlobalVariable(o, "integer", 0)) || io("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && ye(e(34, s = Qe.getDerivedFromVars(Qe.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(33, a = Qe.getDerivedFromVars(Qe.json.button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Vt(e(32, l = Qe.getDerivedFromVars(Qe.json.button_size))), t.$$.dirty[0] & /*componentContext*/
    1 && nt(e(31, u = Qe.getDerivedFromVars(Qe.json.icon_color))), t.$$.dirty[0] & /*componentContext*/
    1 && dt(e(30, c = Qe.getDerivedFromVars(Qe.json.disabled_button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ce(e(29, f = Qe.getDerivedFromVars(Qe.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(28, _ = Qe.getDerivedFromVars(Qe.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && rt(e(27, h = Qe.getDerivedFromVars(Qe.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && at(e(26, m = Qe.getDerivedFromVars(Qe.json.value_width))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(25, p = Qe.getDerivedFromVars(Qe.json.background_color))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(24, k = Qe.getDerivedFromVars(Qe.json.border_color))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(23, w = Qe.getDerivedFromVars(Qe.json.border_width))), t.$$.dirty[0] & /*componentContext*/
    1 && je(e(22, O = Qe.getDerivedFromVars(Qe.json.corner_radius))), t.$$.dirty[0] & /*componentContext*/
    1 && ke(e(21, U = Qe.getDerivedFromVars(Qe.json.padding))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(20, R = Qe.getDerivedFromVars(Qe.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(19, $ = Qe.getDerivedFromVars(Qe.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(18, ue = Qe.getDerivedFromVars(Qe.json.step))), t.$$.dirty[0] & /*isEnabled*/
    8 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    2 && e(3, Ft = _n(Ue, Ft)), t.$$.dirty[0] & /*buttonColor*/
    16 | t.$$.dirty[2] & /*$jsonButtonColor*/
    1 && e(4, It = gr(Gt, 1, It)), t.$$.dirty[0] & /*buttonSize*/
    32 | t.$$.dirty[1] & /*$jsonButtonSize*/
    1073741824 && e(5, hr = oo(Y, hr)), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*$jsonIconColor*/
    536870912 && e(6, Me = gr(At, 1, Me)), t.$$.dirty[0] & /*disabledButtonColor*/
    128 | t.$$.dirty[1] & /*$jsonDisabledButtonColor*/
    268435456 && e(7, vt = gr(I, 1, vt)), t.$$.dirty[0] & /*textColor*/
    256 | t.$$.dirty[1] & /*$jsonTextColor*/
    134217728 && e(8, sr = gr(he, 1, sr)), t.$$.dirty[0] & /*fontSize*/
    512 | t.$$.dirty[1] & /*$jsonFontSize*/
    67108864 && e(9, $t = oo(Nt, $t)), t.$$.dirty[1] & /*$jsonFontWeight*/
    33554432) {
      const ot = ut;
      if (typeof ot == "string")
        if (ot in Er)
          e(13, Yt = Er[ot]);
        else {
          const jt = parseInt(ot, 10);
          !Number.isNaN(jt) && jt > 0 && e(13, Yt = jt);
        }
      else typeof ot == "number" && ot > 0 && e(13, Yt = ot);
    }
    if (t.$$.dirty[0] & /*valueWidth*/
    1024 | t.$$.dirty[1] & /*$jsonValueWidth*/
    16777216 && e(10, mr = oo(Oe, mr)), t.$$.dirty[1] & /*$jsonBackgroundColor, backgroundColor*/
    8388672 && e(37, jr = gr(Xe, 1, jr)), t.$$.dirty[1] & /*$jsonBorderColor, borderColor*/
    4194432 && e(38, Qt = gr(ie, 1, Qt)), t.$$.dirty[1] & /*$jsonBorderWidth, borderWidth*/
    2097408 && e(39, xt = oo(ce, xt)), t.$$.dirty[1] & /*$jsonCornerRadius, cornerRadius*/
    1049088 && e(40, G = oo(et, G)), t.$$.dirty[1] & /*$jsonPadding, padding*/
    525312 && e(41, ft = oo(We, ft)), t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$jsonMinValue, $jsonMaxValue*/
    393216 && (e(11, Wt = oo(De, Wt)), e(12, St = oo(Ee, St))), t.$$.dirty[1] & /*$jsonStep, step*/
    67584) {
      const ot = oo(H, br);
      ot > 0 && e(42, br = ot);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$valueVariable*/
    32768 && e(17, T = Vo(C || 0, Wt, St)), t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*variable*/
    8192) {
      let ot = !1;
      o ? Pe.hasAction() && (ot = !0, Qe.logError(K(new Error('Cannot show "counter" inside component with an action')))) : (ot = !0, Qe.logError(K(new Error('Missing "counter_value_variable" in "counter"')))), yt !== ot && e(2, yt = ot);
    }
    t.$$.dirty[0] & /*isEnabled*/
    8 && e(15, X = { disabled: !Ft }), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*backgroundColor, borderColor, borderWidth, cornerRadius, padding*/
    1984 && e(14, le = {
      "--divkit-counter-bg": jr,
      "--divkit-counter-border-color": Qt,
      "--divkit-counter-border-width": ae(xt),
      "--divkit-counter-radius": ae(G),
      "--divkit-counter-padding": ae(ft),
      "--divkit-counter-icon-color": Me
    }), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*prevId*/
    4096 && Qe.json && (tr && (or.unregisterFocusable(tr), e(43, tr = void 0)), Qe.id && !Qe.fakeElement && (e(43, tr = Qe.id), or.registerFocusable(tr, {
      focus() {
      }
    })));
  }, [
    Qe,
    ze,
    yt,
    Ft,
    It,
    hr,
    Me,
    vt,
    sr,
    $t,
    mr,
    Wt,
    St,
    Yt,
    le,
    X,
    i,
    T,
    ue,
    $,
    R,
    U,
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
    Ir,
    zr,
    jr,
    Qt,
    xt,
    G,
    ft,
    br,
    tr,
    o,
    n,
    C,
    H,
    Ee,
    De,
    We,
    et,
    ce,
    ie,
    Xe,
    Oe,
    ut,
    Nt,
    he,
    I,
    At,
    Y,
    Gt,
    Ue
  ];
}
class $v extends Rr {
  constructor(r) {
    super(), Or(this, r, xv, Qv, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const e2 = "appkit-webview__frame", Qs = {
  webview__frame: e2,
  "webview__aspect-wrapper": "appkit-webview__aspect-wrapper"
};
function t2(t) {
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function r2(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt("webview", Qs, {}),
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
      $$slots: { default: [i2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function n2(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Ve("iframe"), g(r, "class", Qs.webview__frame), Qn(r.src, e = /*url*/
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
        Be(
          r,
          "load",
          /*onLoad*/
          t[15]
        ),
        Be(
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
      a && J(r), i = !1, Br(s);
    }
  };
}
function o2(t) {
  let r, e, n, o, i, s = `${/*aspectPaddingBottom*/
  t[6]}%`, a, l;
  return {
    c() {
      r = Ve("div"), e = Ve("iframe"), g(e, "class", Qs.webview__frame), Qn(e.src, n = /*url*/
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
      t[4] ? "auto" : "no"), g(e, "title", "webview"), g(r, "class", Qs["webview__aspect-wrapper"]), D(r, "padding-bottom", s);
    },
    m(u, c) {
      q(u, r, c), ht(r, e), a || (l = [
        Be(
          e,
          "load",
          /*onLoad*/
          t[15]
        ),
        Be(
          e,
          "error",
          /*onError*/
          t[16]
        )
      ], a = !0);
    },
    p(u, c) {
      c & /*url*/
      4 && !Qn(e.src, n = /*url*/
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
      u[6]}%`) && D(r, "padding-bottom", s);
    },
    d(u) {
      u && J(r), a = !1, Br(l);
    }
  };
}
function i2(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[6] !== "0" ? o2 : n2
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Zt();
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
function s2(t) {
  let r, e, n, o;
  const i = [r2, t2], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[5] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Zt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, [u]) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (ar(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ur()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
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
function l2(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _ = E, h = () => (_(), _ = V(u, (ce) => e(20, f = ce)), u), m, p = E, k = () => (p(), p = V(l, (ce) => e(21, m = ce)), l), w, O = E, U = () => (O(), O = V(a, (ce) => e(22, w = ce)), a), R, $ = E, ue = () => ($(), $ = V(s, (ce) => e(23, R = ce)), s), T, X = E, le = () => (X(), X = V(i, (ce) => e(24, T = ce)), i), C, M = E, P = () => (M(), M = V(o, (ce) => e(25, C = ce)), o), H, se = E, de = () => (se(), se = V(n, (ce) => e(26, H = ce)), n);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => se());
  let { componentContext: Ee } = r, { layoutParams: Ae = void 0 } = r;
  Tr(Kr);
  let pe = !1, De, ee, Te = !1, We = !0, Ke = !1, ke = !1, et = "0";
  function fe() {
    Ee.execAnyActions(Ee.json.on_load_actions);
  }
  function je() {
    Ee.execAnyActions(Ee.json.on_error_actions);
  }
  return t.$$set = (ce) => {
    "componentContext" in ce && e(0, Ee = ce.componentContext), "layoutParams" in ce && e(1, Ae = ce.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext*/
    1 && de(e(14, n = Ee.getDerivedFromVars(Ee.json.url))), t.$$.dirty & /*componentContext*/
    1 && P(e(13, o = Ee.getDerivedFromVars(Ee.json.html))), t.$$.dirty & /*componentContext*/
    1 && le(e(12, i = Ee.getDerivedFromVars(Ee.json.javascript_enabled))), t.$$.dirty & /*componentContext*/
    1 && ue(e(11, s = Ee.getDerivedFromVars(Ee.json.allow_scrolling))), t.$$.dirty & /*componentContext*/
    1 && U(e(10, a = Ee.getDerivedFromVars(Ee.json.allow_navigation))), t.$$.dirty & /*componentContext*/
    1 && k(e(9, l = Ee.getDerivedFromVars(Ee.json.scale_to_fit))), t.$$.dirty & /*componentContext*/
    1 && h(e(8, u = Ee.getDerivedFromVars(Ee.json.aspect))), t.$$.dirty & /*$jsonUrl, $jsonHtml, url, html, componentContext*/
    100663309 && (e(2, De = typeof H == "string" ? H : void 0), e(3, ee = typeof C == "string" ? C : void 0), !De && !ee ? (e(5, pe = !0), Ee.logError(K(new Error('Missing "url" or "html" in "webview"')))) : e(5, pe = !1)), t.$$.dirty & /*$jsonJsEnabled, javascriptEnabled*/
    16908288 && e(17, Te = _n(T, Te)), t.$$.dirty & /*$jsonAllowScrolling, allowScrolling*/
    8388624 && e(4, We = _n(R, We)), t.$$.dirty & /*$jsonAllowNavigation, allowNavigation*/
    4456448 && e(18, Ke = _n(w, Ke)), t.$$.dirty & /*$jsonScaleToFit, scaleToFit*/
    2621440 && e(19, ke = _n(m, ke)), t.$$.dirty & /*$jsonAspect*/
    1048576) {
      const ce = f == null ? void 0 : f.ratio;
      ce && Un(ce) ? e(6, et = (100 / Number(ce)).toFixed(2)) : e(6, et = "0");
    }
    t.$$.dirty & /*javascriptEnabled, allowNavigation*/
    393216 && e(7, c = [
      "allow-same-origin",
      ...Te ? ["allow-scripts"] : [],
      ...Ke ? ["allow-popups"] : []
    ].join(" "));
  }, [
    Ee,
    Ae,
    De,
    ee,
    We,
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
    fe,
    je,
    Te,
    Ke,
    ke,
    f,
    m,
    w,
    R,
    T,
    C,
    H
  ];
}
class a2 extends Rr {
  constructor(r) {
    super(), Or(this, r, l2, s2, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
function Df(t, r, e) {
  const n = t.slice();
  return n[11] = r[e], n;
}
function u2(t) {
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function c2(t) {
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
      $$slots: { default: [f2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function Tf(t) {
  let r, e = [
    /*templateAttrs*/
    t[8]
  ], n = {};
  for (let o = 0; o < e.length; o += 1)
    n = jo(n, e[o]);
  return {
    c() {
      r = Ve("template"), Go(r, n);
    },
    m(o, i) {
      q(o, r, i), r.content.innerHTML = /*templateContent*/
      t[7];
    },
    p(o, i) {
      i & /*templateContent*/
      128 && (r.content.innerHTML = /*templateContent*/
      o[7]), Go(r, n = No(e, [i & /*templateAttrs*/
      256 && /*templateAttrs*/
      o[8]]));
    },
    d(o) {
      o && J(r);
    }
  };
}
function Mf(t) {
  let r = (
    /*jsonItems*/
    t[5]
  ), e, n, o = Nf(t);
  return {
    c() {
      o.c(), e = Zt();
    },
    m(i, s) {
      o.m(i, s), q(i, e, s), n = !0;
    },
    p(i, s) {
      s & /*jsonItems*/
      32 && Sr(r, r = /*jsonItems*/
      i[5]) ? (ar(), Q(o, 1, 1, E), ur(), o = Nf(i), o.c(), B(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
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
function Pf(t) {
  let r, e;
  return r = new Gn({
    props: { componentContext: (
      /*item*/
      t[11]
    ) }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function Nf(t) {
  let r, e, n = nr(
    /*items*/
    t[3]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Pf(Df(t, n, s));
  const i = (s) => Q(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = Zt();
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
          const u = Df(s, n, l);
          o[l] ? (o[l].p(u, a), B(o[l], 1)) : (o[l] = Pf(u), o[l].c(), B(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (ar(), l = n.length; l < o.length; l += 1)
          i(l);
        ur();
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
      s && J(r), on(o, s);
    }
  };
}
function Nl(t) {
  let r, e, n, o = (
    /*templateContent*/
    t[7] && Tf(t)
  ), i = !/*hasItemsError*/
  t[4] && /*jsonItems*/
  t[5] && Mf(t), s = [
    /*componentContext*/
    t[0].json.custom_props || {}
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = jo(a, s[l]);
  return {
    c() {
      r = Ve(
        /*desc*/
        t[2].element
      ), o && o.c(), e = cr(), i && i.c(), ti(
        /*desc*/
        t[2].element
      )(r, a);
    },
    m(l, u) {
      q(l, r, u), o && o.m(r, null), ht(r, e), i && i.m(r, null), t[9](r), n = !0;
    },
    p(l, u) {
      /*templateContent*/
      l[7] ? o ? o.p(l, u) : (o = Tf(l), o.c(), o.m(r, e)) : o && (o.d(1), o = null), !/*hasItemsError*/
      l[4] && /*jsonItems*/
      l[5] ? i ? (i.p(l, u), u & /*hasItemsError, jsonItems*/
      48 && B(i, 1)) : (i = Mf(l), i.c(), B(i, 1), i.m(r, null)) : i && (ar(), Q(i, 1, 1, () => {
        i = null;
      }), ur()), ti(
        /*desc*/
        l[2].element
      )(r, a = No(s, [
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
function f2(t) {
  let r = (
    /*desc*/
    t[2].element
  ), e, n = (
    /*desc*/
    t[2].element && Nl(t)
  );
  return {
    c() {
      n && n.c(), e = Zt();
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
      ) ? (n.d(1), n = Nl(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = Nl(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : r && (n.d(1), n = null, r = /*desc*/
      o[2].element);
    },
    i: E,
    o(o) {
      Q(n, o);
    },
    d(o) {
      o && J(e), n && n.d(o);
    }
  };
}
function d2(t) {
  let r, e, n, o;
  const i = [c2, u2], s = [];
  function a(l, u) {
    return (
      /*desc*/
      l[2] ? 0 : 1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Zt();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, [u]) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (ar(), Q(s[c], 1, 1, () => {
        s[c] = null;
      }), ur()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), B(e, 1), e.m(n.parentNode, n)) : e = null);
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
function _2(t, r, e) {
  let n, { componentContext: o } = r, { layoutParams: i = void 0 } = r;
  const s = Tr(Kr);
  let a, l = null, u = "", c = {}, f = [], _ = !1;
  ro(() => {
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
class p2 extends Rr {
  constructor(r) {
    super(), Or(this, r, _2, d2, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const g2 = "appkit-breadcrumb", h2 = "appkit-breadcrumb__list", m2 = "appkit-breadcrumb__item", b2 = "appkit-breadcrumb__label", y2 = "appkit-breadcrumb__label_link", w2 = "appkit-breadcrumb__separator", mi = {
  breadcrumb: g2,
  breadcrumb__list: h2,
  breadcrumb__item: m2,
  breadcrumb__label: b2,
  breadcrumb__label_link: y2,
  breadcrumb__separator: w2
};
function zf(t, r, e) {
  const n = t.slice();
  return n[25] = r[e], n[27] = e, n;
}
function k2(t) {
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function v2(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt("breadcrumb", mi, {}),
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
      $$slots: { default: [E2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function j2(t) {
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
      r = Ve("span"), n = Pn(e), o = cr(), i = Ve("span"), s = Pn(
        /*separator*/
        t[2]
      ), g(r, "class", mi.breadcrumb__label + " " + mi.breadcrumb__label_link), g(r, "role", "link"), g(r, "tabindex", "0"), g(i, "class", mi.breadcrumb__separator), g(i, "aria-hidden", "true");
    },
    m(f, _) {
      q(f, r, _), ht(r, n), q(f, o, _), q(f, i, _), ht(i, s), a || (l = [
        Be(r, "click", u),
        Be(r, "keydown", c)
      ], a = !0);
    },
    p(f, _) {
      t = f, _ & /*crumbs*/
      16 && e !== (e = /*crumb*/
      t[25].title + "") && xn(n, e), _ & /*separator*/
      4 && xn(
        s,
        /*separator*/
        t[2]
      );
    },
    d(f) {
      f && (J(r), J(o), J(i)), a = !1, Br(l);
    }
  };
}
function C2(t) {
  let r, e = (
    /*crumb*/
    t[25].title + ""
  ), n;
  return {
    c() {
      r = Ve("span"), n = Pn(e), g(r, "class", mi.breadcrumb__label), g(r, "aria-current", "page");
    },
    m(o, i) {
      q(o, r, i), ht(r, n);
    },
    p(o, i) {
      i & /*crumbs*/
      16 && e !== (e = /*crumb*/
      o[25].title + "") && xn(n, e);
    },
    d(o) {
      o && J(r);
    }
  };
}
function Of(t) {
  let r, e;
  function n(s, a) {
    return (
      /*index*/
      s[27] === /*crumbs*/
      s[4].length - 1 ? C2 : j2
    );
  }
  let o = n(t), i = o(t);
  return {
    c() {
      r = Ve("li"), i.c(), e = cr(), g(r, "class", mi.breadcrumb__item);
    },
    m(s, a) {
      q(s, r, a), i.m(r, null), ht(r, e);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, e)));
    },
    d(s) {
      s && J(r), i.d();
    }
  };
}
function E2(t) {
  let r, e, n = nr(
    /*crumbs*/
    t[4]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Of(zf(t, n, i));
  return {
    c() {
      r = Ve("nav"), e = Ve("ol");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(e, "class", mi.breadcrumb__list), g(r, "aria-label", "breadcrumb");
    },
    m(i, s) {
      q(i, r, s), ht(r, e);
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
          const l = zf(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Of(l), o[a].c(), o[a].m(e, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && J(r), on(o, i);
    }
  };
}
function A2(t) {
  let r, e, n, o;
  const i = [v2, k2], s = [];
  function a(l, u) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Zt();
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
function S2(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _ = E, h = () => (_(), _ = V(l, (Te) => e(16, f = Te)), l), m, p = E, k = () => (p(), p = V(a, (Te) => e(17, m = Te)), a), w, O = E, U = () => (O(), O = V(s, (Te) => e(18, w = Te)), s), R, $ = E, ue = () => ($(), $ = V(i, (Te) => e(19, R = Te)), i), T, X = E, le = () => (X(), X = V(o, (Te) => e(20, T = Te)), o);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => X());
  let { componentContext: C } = r, { layoutParams: M = void 0 } = r;
  Tr(Kr);
  let P = "/", H = "#0077CC", se = "#111111", de = 14;
  function Ee() {
    e(2, P = "/"), e(12, H = "#0077CC"), e(13, se = "#111111"), e(14, de = 14);
  }
  function Ae(Te) {
    Te.action && C.execAnyActions([Te.action]);
  }
  function pe(Te, We) {
    We.action && (Te.key === "Enter" || Te.key === " ") && (C.execAnyActions([We.action]), Te.preventDefault());
  }
  const De = (Te) => Ae(Te), ee = (Te, We) => pe(We, Te);
  return t.$$set = (Te) => {
    "componentContext" in Te && e(0, C = Te.componentContext), "layoutParams" in Te && e(1, M = Te.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(15, n = C.origJson), t.$$.dirty & /*origJson*/
    32768 && n && Ee(), t.$$.dirty & /*componentContext*/
    1 && le(e(9, o = C.getDerivedFromVars(C.json.separator))), t.$$.dirty & /*componentContext*/
    1 && ue(e(8, i = C.getDerivedFromVars(C.json.item_text_color))), t.$$.dirty & /*componentContext*/
    1 && U(e(7, s = C.getDerivedFromVars(C.json.active_text_color))), t.$$.dirty & /*componentContext*/
    1 && k(e(6, a = C.getDerivedFromVars(C.json.item_font_size))), t.$$.dirty & /*componentContext*/
    1 && h(e(5, l = C.getDerivedFromVars(C.json.crumbs))), t.$$.dirty & /*$jsonSeparator, separator*/
    1048580 && e(2, P = typeof T == "string" && T.length > 0 ? T : P), t.$$.dirty & /*$jsonItemTextColor, itemTextColor*/
    528384 && e(12, H = gr(R, 1, H)), t.$$.dirty & /*$jsonActiveTextColor, activeTextColor*/
    270336 && e(13, se = gr(w, 1, se)), t.$$.dirty & /*$jsonItemFontSize, itemFontSize*/
    147456 && e(14, de = Wn(m, de)), t.$$.dirty & /*$jsonCrumbs, componentContext*/
    65537 && e(4, u = Array.isArray(f) ? f : C.json.crumbs || []), t.$$.dirty & /*itemTextColor, activeTextColor, itemFontSize*/
    28672 && e(3, c = {
      "--divkit-breadcrumb-item-color": H,
      "--divkit-breadcrumb-active-color": se,
      "--divkit-breadcrumb-font-size": ae(de)
    });
  }, [
    C,
    M,
    P,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    Ae,
    pe,
    H,
    se,
    de,
    n,
    f,
    m,
    w,
    R,
    T,
    De,
    ee
  ];
}
class V2 extends Rr {
  constructor(r) {
    super(), Or(this, r, S2, A2, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const a_ = {
  text: Am,
  container: u1,
  separator: m1,
  image: sc,
  gif: sc,
  grid: J1,
  gallery: gb,
  tabs: Gb,
  state: py,
  pager: Oy,
  indicator: Qy,
  slider: _w,
  input: Gw,
  select: ek,
  video: hk,
  switch: Vk,
  checkbox: Bk,
  radio: iv,
  progress: hv,
  table: Wv,
  counter: $v,
  webview: a2,
  custom: p2,
  breadcrumb: V2
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
      r && Bt(r.$$.fragment), e = Zt();
    },
    m(s, a) {
      r && Rt(r, s, a), q(s, e, a), n = !0;
    },
    p(s, a) {
      if (a & /*component*/
      4 && o !== (o = /*component*/
      s[2])) {
        if (r) {
          ar();
          const l = r;
          Q(l.$$.fragment, 1, 0, () => {
            Lt(l, 1);
          }), ur();
        }
        o ? (r = pu(o, i(s)), Bt(r.$$.fragment), B(r.$$.fragment, 1), Rt(r, e.parentNode, e)) : r = null;
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
      s && J(e), r && Lt(r, s);
    }
  };
}
function F2(t) {
  let r, e, n = (
    /*component*/
    t[2] && Rf(t)
  );
  return {
    c() {
      n && n.c(), r = Zt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, [i]) {
      /*component*/
      o[2] ? n ? (n.p(o, i), i & /*component*/
      4 && B(n, 1)) : (n = Rf(o), n.c(), B(n, 1), n.m(r.parentNode, r)) : n && (ar(), Q(n, 1, 1, () => {
        n = null;
      }), ur());
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
function I2(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r;
  const i = Tr(Kr);
  let s;
  return t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext, component*/
    5) {
      const a = n.json;
      if (e(2, s = (a == null ? void 0 : a.type) && a_[a.type] || void 0), !s) {
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
class Gn extends Rr {
  constructor(r) {
    super(), Or(this, r, I2, F2, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const D2 = {
  "root-svg-filters": "appkit-root-svg-filters"
};
function Lf(t, r, e) {
  const n = t.slice();
  n[1] = r[e];
  const o = (
    /*filterKey*/
    n[1].split(":")
  );
  return n[2] = o[0], n[3] = o[1], n;
}
function Bf(t) {
  let r, e, n = nr([...Object.keys(
    /*svgFiltersMap*/
    t[0]
  )]), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Hf(Lf(t, n, i));
  return {
    c() {
      r = xr("svg"), e = xr("defs");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", D2["root-svg-filters"]), g(r, "aria-hidden", "true");
    },
    m(i, s) {
      q(i, r, s), ht(r, e);
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
          const l = Lf(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Hf(l), o[a].c(), o[a].m(e, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && J(r), on(o, i);
    }
  };
}
function T2(t) {
  let r, e;
  return {
    c() {
      r = xr("feBlend"), g(r, "in2", "SourceGraphic"), g(r, "mode", e = /*filterMode*/
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
function M2(t) {
  let r;
  return {
    c() {
      r = xr("feComposite"), g(r, "in2", "SourceGraphic"), g(r, "operator", "arithmetic"), g(r, "k1", "1"), g(r, "k2", "0"), g(r, "k3", "0"), g(r, "k4", "0");
    },
    m(e, n) {
      q(e, r, n);
    },
    p: E,
    d(e) {
      e && J(r);
    }
  };
}
function P2(t) {
  let r, e;
  return {
    c() {
      r = xr("feComposite"), g(r, "in2", "SourceGraphic"), g(r, "operator", e = /*filterMode*/
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
function Hf(t) {
  let r, e, n, o;
  function i(l, u) {
    return (
      /*filterMode*/
      l[3] === "source_in" || /*filterMode*/
      l[3] === "source_atop" ? P2 : (
        /*filterMode*/
        l[3] === "multiply" ? M2 : T2
      )
    );
  }
  let s = i(t), a = s(t);
  return {
    c() {
      r = xr("filter"), e = xr("feFlood"), a.c(), g(e, "flood-color", n = /*filterColor*/
      t[2]), g(r, "id", o = /*svgFiltersMap*/
      t[0][
        /*filterKey*/
        t[1]
      ]);
    },
    m(l, u) {
      q(l, r, u), ht(r, e), a.m(r, null);
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
function N2(t) {
  let r = Object.keys(
    /*svgFiltersMap*/
    t[0]
  ).length, e, n = r && Bf(t);
  return {
    c() {
      n && n.c(), e = Zt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, e, i);
    },
    p(o, [i]) {
      i & /*svgFiltersMap*/
      1 && (r = Object.keys(
        /*svgFiltersMap*/
        o[0]
      ).length), r ? n ? n.p(o, i) : (n = Bf(o), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: E,
    o: E,
    d(o) {
      o && J(e), n && n.d(o);
    }
  };
}
function z2(t, r, e) {
  let { svgFiltersMap: n } = r;
  return t.$$set = (o) => {
    "svgFiltersMap" in o && e(0, n = o.svgFiltersMap);
  }, [n];
}
class O2 extends Rr {
  constructor(r) {
    super(), Or(this, r, z2, N2, Sr, { svgFiltersMap: 0 });
  }
}
function R2(t, r, e, n) {
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
const L2 = 128, Ti = /* @__PURE__ */ new Map();
let Wf;
function u_(t) {
  return Ti.get(t);
}
function c_(t, r) {
  t !== Wf && (Ti.delete(t), Ti.size >= L2 && Ti.delete(Ti.keys().next().value), Ti.set(t, r), Wf = t);
}
const Uf = /* @__PURE__ */ new Set([
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
function B2(t) {
  if (!(typeof t.name == "string" && t.name))
    throw new Error("Incorrect function name");
  if (!(typeof t.body == "string" && t.body))
    throw new Error("Incorrect function body");
  if (!(t.return_type && Uf.has(t.return_type)))
    throw new Error("Incorrect function return_type");
  if (!Array.isArray(t.arguments))
    throw new Error("Incorrect function arguments");
  const r = /* @__PURE__ */ new Set();
  t.arguments.forEach((e) => {
    if (!(typeof e.name == "string" && e.name))
      throw new Error("Incorrect argument name");
    if (!(e.type && Uf.has(e.type)))
      throw new Error("Incorrect argument type");
    if (r.has(e.name))
      throw new Error("Duplicate argument name");
    r.add(e.name);
  });
}
function H2(t) {
  let r;
  return {
    name: t.name,
    args: t.arguments.map((e) => ({
      type: e.type
    })),
    cb(e, ...n) {
      r || (r = u_(t.body) || el(t.body, {
        startRule: "JsonStringContents"
      }), c_(t.body, r));
      const o = /* @__PURE__ */ new Map();
      n.forEach((a, l) => {
        if (a.type === "function")
          throw new Error("Incorrect argument type: function");
        const u = Rs(t.arguments[l].name, a.type, a.value);
        o.set(u.getName(), u);
      });
      const i = pl(o, e.customFunctions, e.store, r, {
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
function W2(t, r) {
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
function U2(t) {
  if (!t)
    return K(new Error("Missing object"));
  const r = t.card, e = t.templates || {};
  if (!r)
    return K(new Error("Missing card"));
  if (!r.states || !r.states.length)
    return K(new Error("Missing states"));
  for (const n in e)
    if (e.hasOwnProperty(n) && n in a_)
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
function G2(t) {
  return [...new Set(t)];
}
class f_ {
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
      a = pl(r, e, o, this.ast, {
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
          result: ud(c),
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
            result: Ai(f),
            usedVars: a.usedVars
          };
        n(K(new Error("Expression execution error")));
      }
      if (u.type === "integer")
        return c > F_ || c < I_ ? (n(K(new Error("Expression result is out of 32-bit int range"))), {
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
function J2(t) {
  return t.indexOf("@{") > -1 || t.indexOf("\\") > -1;
}
function sa(t, r, e, n) {
  if (t)
    if (typeof t == "string") {
      if (J2(t)) {
        r.hasExpression = !0;
        try {
          const o = u_(t) || el(t, {
            startRule: "JsonStringContents"
          });
          c_(t, o);
          const i = z_(o);
          return r.vars.push(...i), new f_(o, t);
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
    if (t instanceof f_)
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
function Gf(t, r, e, n, o = 1 / 0) {
  const i = {
    vars: [],
    hasExpression: !1
  }, s = sa(t, i, r, o);
  return {
    vars: G2(i.vars),
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
class d_ {
  constructor() {
    Ar(this, "_vars", /* @__PURE__ */ new Map());
    Ar(this, "_lastAddedVariable", Io(""));
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
function Y3() {
  return new d_();
}
const q2 = ["start", "stop", "pause", "resume", "cancel", "reset"], Y2 = new Set(q2);
class K2 {
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
    if (!r || !e || !this.timers.has(r) || !Y2.has(e)) {
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
function X2(t, r, e, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number" && i !== void 0) {
    e(K(new Error("Incorrect array_insert_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Aa(t, r, e, n, (a) => {
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
      const u = l.slice(), c = nl(s);
      typeof i == "number" ? u.splice(i, 0, c) : u.push(c), a.setValue(u);
    }
  });
}
function Z2(t, r, e, n) {
  const { variable_name: o, index: i } = n;
  if (typeof i != "number") {
    e(K(new Error("Incorrect array_remove_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Aa(t, r, e, n, (s) => {
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
function Q2(t, r, e, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number") {
    e(K(new Error("Incorrect array_set_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Aa(t, r, e, n, (a) => {
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
      u[i] = nl(s), a.setValue(u);
    }
  });
}
function Aa(t, r, e, n, o) {
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
function x2(t, r, e, n) {
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
    s ? c[i] = nl(s) : delete c[i], a.setValue(c);
  } else
    e(K(new Error("Trying to set value into the non-dict"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function $2(t, r) {
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
function e3(t) {
  if (t === "normal" || t === "reverse" || t === "alternate" || t === "alternate_reverse")
    return t;
}
function t3(t, r, e, n) {
  var U, R, $, ue;
  const o = Wn(t.duration, 0);
  if (!o || t.type !== "color_animator" && t.type !== "number_animator")
    return;
  const i = (U = t.start_value_typed ? t.start_value_typed.value : t.start_value) != null ? U : r.getValue(), s = t.end_value_typed ? t.end_value_typed.value : t.end_value;
  if (i === void 0 || s === void 0 || t.type === "color_animator" && (typeof i != "string" && i !== void 0 || typeof s != "string") || t.type === "number_animator" && (typeof i != "number" && i !== void 0 || typeof s != "number"))
    return;
  const a = t.type === "color_animator" && fo(i), l = t.type === "color_animator" && fo(s);
  if (t.type === "color_animator" && (!a || !l))
    return;
  const u = $r(t.start_delay, 0), c = Ca(t.interpolator || "linear"), f = e3(t.direction) || "normal", _ = ((R = t.repeat_count) == null ? void 0 : R.type) === "infinity" ? 1 / 0 : (($ = t.repeat_count) == null ? void 0 : $.type) === "fixed" ? $r((ue = t.repeat_count) == null ? void 0 : ue.value, 1) : 1;
  let h = 0, m = performance.now();
  const p = _ === 1 / 0 ? 1 / 0 : _ * o + u;
  function k(T) {
    if (t.type === "color_animator") {
      if (!a || !l)
        throw new Error("Missing start/end value");
      return Ai({
        a: Vo(Wo(a.a, l.a, T), 0, 255),
        r: Vo(Wo(a.r, l.r, T), 0, 255),
        g: Vo(Wo(a.g, l.g, T), 0, 255),
        b: Vo(Wo(a.b, l.b, T), 0, 255)
      });
    }
    return Wo(i, s, T);
  }
  function w(T) {
    const X = T - m;
    if (m = T, h += X, h >= u) {
      let le = Math.floor((h - u) / o), C = (h - u - le * o) / o;
      le >= _ && (le = _ - 1, C = 1);
      let M;
      f === "normal" || f === "alternate" && le % 2 === 0 || f === "alternate_reverse" && le % 2 === 1 ? M = "normal" : M = "reverse", M === "reverse" && (C = 1 - C);
      const P = k(c(C));
      r.setValue(P);
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
function r3(t) {
  let r = t;
  for (; r && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function n3(t) {
  let r = t;
  for (; r != null && r.parent && r.json.type !== "state" && !r.isRootState && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function xs(t) {
  return !!(t && typeof t == "string");
}
const o3 = /* @__PURE__ */ new Set([
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "head",
  "options"
]);
function i3(t) {
  return t === void 0 || o3.has(t);
}
function s3(t) {
  return t === void 0 || Array.isArray(t) && t.every((r) => xs(r.name) && xs(r.value));
}
function l3(t) {
  var r, e, n;
  return xs(t.container_id) && xs((r = t.request) == null ? void 0 : r.url) && i3((e = t.request) == null ? void 0 : e.method) && s3((n = t.request) == null ? void 0 : n.headers);
}
function a3(t, r, e, n) {
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
    h[f[f.length - 1]] = nl(s), a.setValue(_);
  } else
    e(K(new Error("Action requires array or dictionary variable"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function Jf(t, { delay: r = 0, duration: e = 400, easing: n = e_, x: o = 0, y: i = 0, opacity: s = 0 } = {}) {
  const a = getComputedStyle(t), l = +a.opacity, u = a.transform === "none" ? "" : a.transform, c = l * (1 - s), [f, _] = fu(o), [h, m] = fu(i);
  return {
    delay: r,
    duration: e,
    easing: n,
    css: (p, k) => `
			transform: ${u} translate(${(1 - p) * f}${_}, ${(1 - p) * h}${m});
			opacity: ${l - c * k}`
  };
}
const u3 = "appkit-outer", c3 = "appkit-root__clickable", f3 = "undefined", d3 = "appkit-tooltip", _3 = "appkit-tooltip_visible", p3 = "appkit-tooltip_modal", g3 = "appkit-tooltip__inner", h3 = "appkit-tooltip__overlay", m3 = "appkit-tooltip__substrate", vo = {
  outer: u3,
  root__clickable: c3,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  root__selectable: f3,
  tooltip: d3,
  tooltip_visible: _3,
  tooltip_modal: p3,
  tooltip__inner: g3,
  tooltip__overlay: h3,
  tooltip__substrate: m3
}, __ = 300, p_ = 0;
function aa(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || __) + (Number(r.start_delay) || p_)
  ));
}
function $s(t, {
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
        var $, ue, T, X, le, C, M, P, H, se, de, Ee;
        const k = Number(p.start_delay) || p_, w = Number(p.duration) || __, O = e === "in" ? Math.max(0, Math.min(1, (a - k) / w)) : Math.max(0, Math.min(1, (a - (o - w) + k) / w)), R = (Ca(p.interpolator || "ease_in_out") || kl)(O);
        if (p.name === "fade") {
          const Ae = e === "in" ? ($ = p.start_value) != null ? $ : 0 : (ue = p.end_value) != null ? ue : 0, pe = e === "in" ? (T = p.end_value) != null ? T : 1 : (X = p.start_value) != null ? X : 1;
          return {
            active: R > 0 && R < 1,
            opacity: (1 - R) * Ae + R * pe
          };
        } else if (p.name === "translate") {
          const Ae = -(e === "in" ? (le = p.start_value) != null ? le : 10 : (C = p.end_value) != null ? C : 10), pe = -(e === "in" ? (M = p.end_value) != null ? M : 0 : (P = p.start_value) != null ? P : 0);
          return {
            active: R > 0 && R < 1,
            translate: `translateY(${(1 - R) * Ae + R * pe}${e === "in" && p.start_value !== void 0 || e === "out" && p.end_value !== void 0 ? "%" : "px"})`
          };
        } else if (p.name === "scale") {
          const Ae = e === "in" ? (H = p.start_value) != null ? H : 0 : (se = p.end_value) != null ? se : 0, pe = e === "in" ? (de = p.end_value) != null ? de : 1 : (Ee = p.start_value) != null ? Ee : 1;
          return {
            active: R > 0 && R < 1,
            scale: `scale(${(1 - R) * Ae + R * pe})`
          };
        }
        return {};
      }), u = l.map((p) => p.opacity).filter((p) => p !== void 0).reduce((p, k) => p * k, 1), c = l.map((p) => p.translate).filter((p) => p !== void 0).join(" "), f = l.map((p) => p.scale).filter((p) => p !== void 0).join(" "), _ = l.filter((p) => p.active).map((p) => p.scale).filter((p) => p !== void 0), h = _.length ? _[_.length - 1] : f;
      return `transform:${[c, h].filter(Boolean).join(" ") || "none"};opacity:${u}`;
    }
  };
}
const ts = typeof window < "u" && "HTMLDialogElement" in window, { document: b3, window: y3 } = Po;
function w3(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _ = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && qf(t)
  ), h = (
    /*substrateComponentContext*/
    t[14] && Yf(t)
  );
  return i = new Gn({
    props: {
      componentContext: (
        /*componentContext*/
        t[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = cr(), h && h.c(), e = cr(), n = Ve("div"), o = Ve("div"), Bt(i.$$.fragment), g(o, "class", vo.tooltip__inner), g(n, "class", s = mt(
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
      ), D(
        n,
        "top",
        /*tooltipY*/
        t[11]
      ), D(
        n,
        "left",
        /*tooltipX*/
        t[10]
      ), D(
        n,
        "width",
        /*tooltipWidth*/
        t[12]
      ), D(
        n,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    m(m, p) {
      _ && _.m(m, p), q(m, r, p), h && h.m(m, p), q(m, e, p), q(m, n, p), ht(n, o), Rt(i, o, null), t[40](o), t[41](n), u = !0, c || (f = [
        Be(
          n,
          "keydown",
          /*onKeyDown*/
          t[26]
        ),
        Be(
          n,
          "introstart",
          /*onIntroStart*/
          t[28]
        ),
        Be(
          n,
          "introend",
          /*onIntroEnd*/
          t[29]
        ),
        Be(
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
      t[3] ? _ ? _.p(t, p) : (_ = qf(t), _.c(), _.m(r.parentNode, r)) : _ && (_.d(1), _ = null), /*substrateComponentContext*/
      t[14] ? h ? (h.p(t, p), p[0] & /*substrateComponentContext*/
      16384 && B(h, 1)) : (h = Yf(t), h.c(), B(h, 1), h.m(e.parentNode, e)) : h && (ar(), Q(h, 1, 1, () => {
        h = null;
      }), ur());
      const k = {};
      p[0] & /*componentContext*/
      4 && (k.componentContext = /*componentContext*/
      t[2]), i.$set(k), (!u || p[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = mt(
        "tooltip",
        vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Cr.root_platform_desktop : ""))) && g(n, "class", s), (!u || p[0] & /*modal*/
      8) && g(
        n,
        "aria-modal",
        /*modal*/
        t[3]
      ), p[0] & /*tooltipY*/
      2048 && D(
        n,
        "top",
        /*tooltipY*/
        t[11]
      ), p[0] & /*tooltipX*/
      1024 && D(
        n,
        "left",
        /*tooltipX*/
        t[10]
      ), p[0] & /*tooltipWidth*/
      4096 && D(
        n,
        "width",
        /*tooltipWidth*/
        t[12]
      ), p[0] & /*tooltipHeight*/
      8192 && D(
        n,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    i(m) {
      u || (B(h), B(i.$$.fragment, m), to(() => {
        u && (l && l.end(1), a = _l(n, $s, {
          animations: (
            /*$animationIn*/
            t[5] || Hi
          ),
          direction: "in"
        }), a.start());
      }), u = !0);
    },
    o(m) {
      Q(h), Q(i.$$.fragment, m), a && a.invalidate(), l = Sd(n, $s, {
        animations: (
          /*$animationOut*/
          t[4] || Hi
        ),
        direction: "out"
      }), u = !1;
    },
    d(m) {
      m && (J(r), J(e), J(n)), _ && _.d(m), h && h.d(m), Lt(i), t[40](null), t[41](null), m && l && l.end(), c = !1, Br(f);
    }
  };
}
function k3(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _ = (
    /*substrateComponentContext*/
    t[14] && Kf(t)
  ), h = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && /*data*/
    t[0].background_accessibility_description && Xf(t)
  );
  return i = new Gn({
    props: {
      componentContext: (
        /*componentContext*/
        t[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = cr(), e = Ve("dialog"), h && h.c(), n = cr(), o = Ve("div"), Bt(i.$$.fragment), g(o, "class", vo.tooltip__inner), g(e, "class", s = mt(
        "tooltip",
        vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Cr.root_platform_desktop : "")), D(
        e,
        "top",
        /*tooltipY*/
        t[11]
      ), D(
        e,
        "left",
        /*tooltipX*/
        t[10]
      ), D(
        e,
        "width",
        /*tooltipWidth*/
        t[12]
      ), D(
        e,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    m(m, p) {
      _ && _.m(m, p), q(m, r, p), q(m, e, p), h && h.m(e, null), ht(e, n), ht(e, o), Rt(i, o, null), t[36](o), t[37](e), u = !0, c || (f = [
        Be(
          e,
          "keydown",
          /*onKeyDown*/
          t[26]
        ),
        Be(
          e,
          "close",
          /*onClose*/
          t[27]
        ),
        Be(
          e,
          "cancel",
          /*onClose*/
          t[27]
        ),
        Be(
          e,
          "click",
          /*onOutClick*/
          t[23]
        ),
        Be(
          e,
          "introstart",
          /*onIntroStart*/
          t[28]
        ),
        Be(
          e,
          "introend",
          /*onIntroEnd*/
          t[29]
        ),
        Be(
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
      16384 && B(_, 1)) : (_ = Kf(t), _.c(), B(_, 1), _.m(r.parentNode, r)) : _ && (ar(), Q(_, 1, 1, () => {
        _ = null;
      }), ur()), /*visible*/
      t[1] && /*modal*/
      t[3] && /*data*/
      t[0].background_accessibility_description ? h ? h.p(t, p) : (h = Xf(t), h.c(), h.m(e, n)) : h && (h.d(1), h = null);
      const k = {};
      p[0] & /*componentContext*/
      4 && (k.componentContext = /*componentContext*/
      t[2]), i.$set(k), (!u || p[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = mt(
        "tooltip",
        vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Cr.root_platform_desktop : ""))) && g(e, "class", s), p[0] & /*tooltipY*/
      2048 && D(
        e,
        "top",
        /*tooltipY*/
        t[11]
      ), p[0] & /*tooltipX*/
      1024 && D(
        e,
        "left",
        /*tooltipX*/
        t[10]
      ), p[0] & /*tooltipWidth*/
      4096 && D(
        e,
        "width",
        /*tooltipWidth*/
        t[12]
      ), p[0] & /*tooltipHeight*/
      8192 && D(
        e,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    i(m) {
      u || (B(_), B(i.$$.fragment, m), to(() => {
        u && (l && l.end(1), a = _l(e, $s, {
          animations: (
            /*$animationIn*/
            t[5] || Hi
          ),
          direction: "in"
        }), a.start());
      }), u = !0);
    },
    o(m) {
      Q(_), Q(i.$$.fragment, m), a && a.invalidate(), l = Sd(e, $s, {
        animations: (
          /*$animationOut*/
          t[4] || Hi
        ),
        direction: "out"
      }), u = !1;
    },
    d(m) {
      m && (J(r), J(e)), _ && _.d(m), h && h.d(), Lt(i), t[36](null), t[37](null), m && l && l.end(), c = !1, Br(f);
    }
  };
}
function qf(t) {
  let r;
  function e(i, s) {
    return (
      /*data*/
      i[0].background_accessibility_description ? j3 : v3
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Zt();
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
function v3(t) {
  let r, e, n;
  return {
    c() {
      r = Ve("div"), g(r, "class", vo.tooltip__overlay);
    },
    m(o, i) {
      q(o, r, i), e || (n = Be(
        r,
        "click",
        /*closeByOutside*/
        t[24]
      ), e = !0);
    },
    p: E,
    d(o) {
      o && J(r), e = !1, n();
    }
  };
}
function j3(t) {
  let r, e, n, o;
  return {
    c() {
      r = Ve("button"), g(r, "class", vo.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", e = /*data*/
      t[0].background_accessibility_description);
    },
    m(i, s) {
      q(i, r, s), n || (o = Be(
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
function Yf(t) {
  let r, e, n, o, i;
  return e = new Gn({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        t[14]
      )
    }
  }), {
    c() {
      r = Ve("div"), Bt(e.$$.fragment), n = cr(), o = Ve("div"), g(r, "class", vo.tooltip__substrate);
    },
    m(s, a) {
      q(s, r, a), Rt(e, r, null), t[38](r), q(s, n, a), q(s, o, a), t[39](o), i = !0;
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
      s && (J(r), J(n), J(o)), Lt(e), t[38](null), t[39](null);
    }
  };
}
function Kf(t) {
  let r, e, n, o, i;
  return e = new Gn({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        t[14]
      )
    }
  }), {
    c() {
      r = Ve("div"), Bt(e.$$.fragment), n = cr(), o = Ve("div"), g(r, "class", vo.tooltip__substrate);
    },
    m(s, a) {
      q(s, r, a), Rt(e, r, null), t[34](r), q(s, n, a), q(s, o, a), t[35](o), i = !0;
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
      s && (J(r), J(n), J(o)), Lt(e), t[34](null), t[35](null);
    }
  };
}
function Xf(t) {
  let r, e, n, o;
  return {
    c() {
      r = Ve("button"), g(r, "class", vo.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", e = /*data*/
      t[0].background_accessibility_description);
    },
    m(i, s) {
      q(i, r, s), n || (o = Be(
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
function C3(t) {
  let r, e, n, o, i, s, a;
  const l = [k3, w3], u = [];
  function c(f, _) {
    return ts ? 0 : 1;
  }
  return e = c(), n = u[e] = l[e](t), {
    c() {
      r = cr(), n.c(), o = Zt();
    },
    m(f, _) {
      q(f, r, _), u[e].m(f, _), q(f, o, _), i = !0, s || (a = [
        Be(
          y3,
          "resize",
          /*onWindowResize*/
          t[25]
        ),
        Be(
          b3.body,
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
      f && (J(r), J(o)), u[e].d(f), s = !1, Br(a);
    }
  };
}
const Hi = {
  name: "set",
  items: [{ name: "translate" }, { name: "fade" }]
};
let Xn = [];
function E3(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _ = E, h = () => (_(), _ = V(i, (I) => e(46, f = I)), i), m, p = E, k = () => (p(), p = V(o, (I) => e(47, m = I)), o), w, O = E, U = () => (O(), O = V(n, (I) => e(48, w = I)), n), R, $ = E, ue = () => ($(), $ = V(a, (I) => e(4, R = I)), a), T, X = E, le = () => (X(), X = V(s, (I) => e(5, T = I)), s), C;
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => X());
  let { ownerNode: M } = r, { data: P } = r, { internalId: H } = r, { parentComponentContext: se } = r;
  const de = Tr(Kr), Ee = de.isDesktop;
  bn(t, Ee, (I) => e(21, C = I));
  const Ae = Date.now();
  let pe, De, ee, Te, We = !1, Ke = "", ke = "", et = "", fe = "", je = null, ce, te, _e = !0, ie = null;
  function Fe() {
    var _t, ye;
    if (!pe || !M)
      return;
    const I = pe.parentElement;
    if (!I)
      return;
    const Ct = pe.style.cssText;
    e(6, pe.style.cssText += ";transform: none !important", pe);
    const dt = M.getBoundingClientRect(), At = pe.getBoundingClientRect(), Tt = I.getBoundingClientRect();
    e(6, pe.style.cssText = Ct, pe);
    let nt = 0, Y = 0, Mt = null, Vt = null, Gt = 0, Jt = 0;
    const me = (_t = ce == null ? void 0 : ce.json) == null ? void 0 : _t.width, Ue = (ye = ce == null ? void 0 : ce.json) == null ? void 0 : ye.height;
    if (!me || me.type === "match_parent" ? Gt = Mt = window.innerWidth : me.type === "fixed" && me.value ? Gt = Mt = me.value : Gt = At.width, (Ue == null ? void 0 : Ue.type) === "match_parent" ? Jt = Vt = window.innerHeight : (Ue == null ? void 0 : Ue.type) === "fixed" && Ue.value ? Jt = Vt = Ue.value : Jt = At.height, w === "left" || w === "bottom-left" || w === "top-left")
      nt = dt.left - Gt;
    else if (w === "top" || w === "bottom" || w === "center")
      nt = (dt.left + dt.right) / 2 - Gt / 2;
    else if (w === "right" || w === "bottom-right" || w === "top-right")
      nt = dt.right;
    else
      return;
    if (w === "top" || w === "top-left" || w === "top-right")
      Y = dt.top - Jt;
    else if (w === "left" || w === "right" || w === "center")
      Y = (dt.top + dt.bottom) / 2 - Jt / 2;
    else if (w === "bottom-left" || w === "bottom" || w === "bottom-right")
      Y = dt.bottom;
    else
      return;
    ts && _e || (nt -= Tt.left, Y -= Tt.top), nt += m || 0, Y += f || 0, e(10, Ke = `${nt}px`), e(11, ke = `${Y}px`), e(12, et = Mt !== null ? `${Mt}px` : ""), e(13, fe = Vt !== null ? `${Vt}px` : ""), e(1, We = !0), Mt === null || Vt === null ? typeof ResizeObserver < "u" && !je && (je = new ResizeObserver(() => {
      requestAnimationFrame(Fe);
    }), je.observe(pe)) : je == null || je.disconnect();
  }
  function xe(I) {
    if (Xn.length && Xn[Xn.length - 1] !== pe)
      return;
    const Ct = I.composedPath();
    Date.now() - Ae < 100 || Ct.includes(pe) && !(ts && Ct[0] === pe) || Xe();
  }
  function Xe(I) {
    I == null || I.stopPropagation(), I == null || I.preventDefault(), ce.getJsonWithVars(P.close_by_tap_outside) !== !1 && (Xn = Xn.filter((Ct) => Ct !== pe), de.onTooltipClose(H)), P.tap_outside_actions && ce.execAnyActions(P.tap_outside_actions, { processUrls: !0 });
  }
  function oe() {
    Fe();
  }
  function Ye(I) {
    Xn.length && Xn[Xn.length - 1] !== pe || I.key === "Escape" && !I.ctrlKey && !I.shiftKey && !I.altKey && !I.metaKey && (Xn = Xn.filter((Ct) => Ct !== pe), de.onTooltipClose(H));
  }
  function Oe(I) {
    Xn = Xn.filter((Ct) => Ct !== pe), de.onTooltipClose(H), I.preventDefault();
  }
  function st() {
    ee && ee.animate({ opacity: [0, 1] }, {
      duration: l,
      easing: "ease-in-out"
    });
  }
  function at() {
    ee && pe.insertBefore(ee, De);
  }
  function ut() {
    Te != null && Te.parentElement && ee && (Te.parentElement.insertBefore(ee, Te), ee.animate({ opacity: [1, 0] }, {
      duration: u,
      easing: "ease-in-out"
    }));
  }
  ro(() => {
    try {
      ie = document.activeElement;
    } catch {
    }
    if (de.tooltipRoot) {
      const I = window.getComputedStyle(pe);
      e(6, pe.style.fontSize = I.fontSize, pe), e(6, pe.style.fontFamily = I.fontFamily, pe), e(6, pe.style.lineHeight = I.lineHeight, pe), de.tooltipRoot.appendChild(pe);
    }
    ts && pe && pe instanceof HTMLDialogElement && pe[_e ? "showModal" : "show"](), _e && Xn.push(pe);
  }), dl(() => {
    We || Fe();
  }), an(() => {
    if (ce && ce.destroy(), te && te.destroy(), je == null || je.disconnect(), Xn = Xn.filter((I) => I !== pe), _e && ie && ie instanceof HTMLElement) {
      ts && pe && pe instanceof HTMLDialogElement && pe.close();
      try {
        ie.focus({ preventScroll: !0 });
      } catch {
      }
    }
  });
  function kt(I) {
    Fr[I ? "unshift" : "push"](() => {
      ee = I, e(8, ee);
    });
  }
  function rt(I) {
    Fr[I ? "unshift" : "push"](() => {
      Te = I, e(9, Te);
    });
  }
  function Nt(I) {
    Fr[I ? "unshift" : "push"](() => {
      De = I, e(7, De);
    });
  }
  function ct(I) {
    Fr[I ? "unshift" : "push"](() => {
      pe = I, e(6, pe);
    });
  }
  function ge(I) {
    Fr[I ? "unshift" : "push"](() => {
      ee = I, e(8, ee);
    });
  }
  function he(I) {
    Fr[I ? "unshift" : "push"](() => {
      Te = I, e(9, Te);
    });
  }
  function pt(I) {
    Fr[I ? "unshift" : "push"](() => {
      De = I, e(7, De);
    });
  }
  function Ce(I) {
    Fr[I ? "unshift" : "push"](() => {
      pe = I, e(6, pe);
    });
  }
  return t.$$set = (I) => {
    "ownerNode" in I && e(31, M = I.ownerNode), "data" in I && e(0, P = I.data), "internalId" in I && e(32, H = I.internalId), "parentComponentContext" in I && e(33, se = I.parentComponentContext);
  }, t.$$.update = () => {
    var I, Ct, dt, At, Tt;
    t.$$.dirty[0] & /*componentContext, data*/
    5 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && (ce && ce.destroy(), e(2, ce = se.produceChildContext(P.div || {}, { isTooltipRoot: !0 })), P.substrate_div && e(14, te = se.produceChildContext(P.substrate_div, { isTooltipRoot: !0 }))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && U(e(20, n = se.getDerivedFromVars(P.position))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && k(e(19, o = se.getDerivedFromVars((Ct = (I = P.offset) == null ? void 0 : I.x) == null ? void 0 : Ct.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && h(e(18, i = se.getDerivedFromVars((At = (dt = P.offset) == null ? void 0 : dt.y) == null ? void 0 : At.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && le(e(17, s = se.getDerivedFromVars(P.animation_in))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && ue(e(16, a = se.getDerivedFromVars(P.animation_out))), t.$$.dirty[0] & /*$animationIn*/
    32 && (l = Li() ? 0 : aa(us(T || Hi))), t.$$.dirty[0] & /*$animationOut*/
    16 && (u = Li() ? 0 : aa(us(R || Hi))), t.$$.dirty[0] & /*data*/
    1 && (((Tt = P.mode) == null ? void 0 : Tt.type) === "non_modal" ? e(3, _e = !1) : e(3, _e = !0)), t.$$.dirty[0] & /*visible, modal*/
    10 && e(15, c = { visible: We, modal: _e });
  }, [
    P,
    We,
    ce,
    _e,
    R,
    T,
    pe,
    De,
    ee,
    Te,
    Ke,
    ke,
    et,
    fe,
    te,
    c,
    a,
    s,
    i,
    o,
    n,
    C,
    Ee,
    xe,
    Xe,
    oe,
    Ye,
    Oe,
    st,
    at,
    ut,
    M,
    H,
    se,
    kt,
    rt,
    Nt,
    ct,
    ge,
    he,
    pt,
    Ce
  ];
}
class A3 extends Rr {
  constructor(r) {
    super(), Or(
      this,
      r,
      E3,
      C3,
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
const S3 = "appkit-root_platform_desktop", V3 = "appkit-menu", F3 = "appkit-menu_visible", I3 = "appkit-menu__list", D3 = "appkit-menu__item", Bs = {
  root_platform_desktop: S3,
  menu: V3,
  menu_visible: F3,
  menu__list: I3,
  menu__item: D3
}, { window: Zf } = Po;
function Qf(t, r, e) {
  const n = t.slice();
  return n[23] = r[e], n;
}
function T3(t) {
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
      n[23].text + "") && xn(e, r);
    },
    d(n) {
      n && J(e);
    }
  };
}
function xf(t) {
  let r, e, n, o;
  return e = new ml({
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
      cls: Bs.menu__item + " " + /*itemMix*/
      t[10],
      customAction: (
        /*onItemAction*/
        t[14]
      ),
      $$slots: { default: [T3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      r = Ve("li"), Bt(e.$$.fragment), n = cr();
    },
    m(i, s) {
      q(i, r, s), Rt(e, r, null), ht(r, n), o = !0;
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
      i && J(r), Lt(e);
    }
  };
}
function M3(t) {
  let r, e, n, o, i, s, a, l = nr(
    /*items*/
    t[0]
  ), u = [];
  for (let f = 0; f < l.length; f += 1)
    u[f] = xf(Qf(t, l, f));
  const c = (f) => Q(u[f], 1, 1, () => {
    u[f] = null;
  });
  return {
    c() {
      r = Ve("div"), e = Ve("ul");
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      g(e, "class", Bs.menu__list), g(r, "class", n = mt(
        "menu",
        Bs,
        /*mods*/
        t[7]
      ) + " " + /*$isDesktop*/
      (t[8] ? Cr.root_platform_desktop : "") + " " + /*popupMix*/
      t[9]), D(
        r,
        "top",
        /*menuY*/
        t[4]
      ), D(
        r,
        "left",
        /*menuX*/
        t[3]
      ), D(
        r,
        "width",
        /*menuWidth*/
        t[5]
      ), D(
        r,
        "height",
        /*menuHeight*/
        t[6]
      );
    },
    m(f, _) {
      q(f, r, _), ht(r, e);
      for (let h = 0; h < u.length; h += 1)
        u[h] && u[h].m(e, null);
      t[17](r), i = !0, s || (a = [
        Be(
          Zf,
          "click",
          /*onWindowClick*/
          t[12]
        ),
        Be(
          Zf,
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
          const m = Qf(f, l, h);
          u[h] ? (u[h].p(m, _), B(u[h], 1)) : (u[h] = xf(m), u[h].c(), B(u[h], 1), u[h].m(e, null));
        }
        for (ar(), h = l.length; h < u.length; h += 1)
          c(h);
        ur();
      }
      (!i || _ & /*mods, $isDesktop*/
      384 && n !== (n = mt(
        "menu",
        Bs,
        /*mods*/
        f[7]
      ) + " " + /*$isDesktop*/
      (f[8] ? Cr.root_platform_desktop : "") + " " + /*popupMix*/
      f[9])) && g(r, "class", n), _ & /*menuY*/
      16 && D(
        r,
        "top",
        /*menuY*/
        f[4]
      ), _ & /*menuX*/
      8 && D(
        r,
        "left",
        /*menuX*/
        f[3]
      ), _ & /*menuWidth*/
      32 && D(
        r,
        "width",
        /*menuWidth*/
        f[5]
      ), _ & /*menuHeight*/
      64 && D(
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
        f && to(() => {
          i && (o || (o = hu(r, Jf, { y: 20 }, !0)), o.run(1));
        }), i = !0;
      }
    },
    o(f) {
      u = u.filter(Boolean);
      for (let _ = 0; _ < u.length; _ += 1)
        Q(u[_]);
      f && (o || (o = hu(r, Jf, { y: 20 }, !1)), o.run(0)), i = !1;
    },
    d(f) {
      f && J(r), on(u, f), t[17](null), f && o && o.end(), s = !1, Br(a);
    }
  };
}
function P3(t, r, e) {
  let n, o, { ownerNode: i } = r, { items: s } = r, { parentComponentContext: a } = r;
  const l = Tr(Kr), u = l.getCustomization("menuPopupClass") || "", c = l.getCustomization("menuItemClass") || "", f = l.isDesktop;
  bn(t, f, (C) => e(8, o = C));
  const _ = Date.now(), h = hh();
  let m, p = !1, k = "", w = "", O = "", U = "", R = null;
  function $() {
    if (!m || !i)
      return;
    const C = m.parentElement;
    if (!C)
      return;
    const M = i.getBoundingClientRect(), P = m.getBoundingClientRect(), H = C.getBoundingClientRect(), se = window.innerWidth, de = window.innerHeight;
    let Ee = 0, Ae = 0, pe = P.width, De = P.height;
    Ee = M.left - H.left, Ae = M.bottom - H.top, Ee + pe > se && (Ee = se - pe), Ee < 0 && (Ee = 0), Ae + De > de && (M.top - H.top - De > 0 ? Ae = M.top - H.top - De : Ae = de - De), Ae < 0 && (Ae = 0), e(3, k = `${Ee}px`), e(4, w = `${Ae}px`), e(5, O = ""), e(6, U = ""), e(16, p = !0), typeof ResizeObserver < "u" && !R && (R = new ResizeObserver(() => {
      requestAnimationFrame($);
    }), R.observe(m));
  }
  function ue(C) {
    Date.now() - _ < 100 || C.composedPath().includes(m) || h("close");
  }
  function T() {
    $();
  }
  function X() {
    return h("close"), !0;
  }
  ro(() => {
    if (l.tooltipRoot) {
      const C = window.getComputedStyle(m);
      e(2, m.style.fontSize = C.fontSize, m), e(2, m.style.fontFamily = C.fontFamily, m), e(2, m.style.lineHeight = C.lineHeight, m), l.tooltipRoot.appendChild(m);
    }
  }), dl(() => {
    p || $();
  }), an(() => {
    R == null || R.disconnect();
  });
  function le(C) {
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
    k,
    w,
    O,
    U,
    n,
    o,
    u,
    c,
    f,
    ue,
    T,
    X,
    i,
    p,
    le
  ];
}
class N3 extends Rr {
  constructor(r) {
    super(), Or(this, r, P3, M3, Sr, {
      ownerNode: 15,
      items: 0,
      parentComponentContext: 1
    });
  }
}
const { Map: z3 } = Po;
function $f(t, r, e) {
  const n = t.slice();
  return n[134] = r[e], n;
}
function ed(t) {
  let r, e, n, o, i, s, a, l, u, c;
  e = new O2({
    props: { svgFiltersMap: (
      /*svgFiltersMap*/
      t[5]
    ) }
  }), o = new Gn({
    props: {
      componentContext: (
        /*rootStateComponentContext*/
        t[6]
      )
    }
  });
  let f = (
    /*tooltips*/
    t[3] && td(t)
  ), _ = (
    /*menu*/
    t[4] && nd(t)
  );
  return {
    c() {
      r = Ve("div"), Bt(e.$$.fragment), n = cr(), Bt(o.$$.fragment), i = cr(), f && f.c(), s = cr(), _ && _.c(), g(r, "class", a = Cr.root + /*$isDesktop*/
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
      q(h, r, m), Rt(e, r, null), ht(r, n), Rt(o, r, null), ht(r, i), f && f.m(r, null), ht(r, s), _ && _.m(r, null), l = !0, u || (c = Be(r, "touchstart", B3, { passive: !0 }), u = !0);
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
      8 && B(f, 1)) : (f = td(h), f.c(), B(f, 1), f.m(r, s)) : f && (ar(), Q(f, 1, 1, () => {
        f = null;
      }), ur()), /*menu*/
      h[4] ? _ ? (_.p(h, m), m[0] & /*menu*/
      16 && B(_, 1)) : (_ = nd(h), _.c(), B(_, 1), _.m(r, null)) : _ && (ar(), Q(_, 1, 1, () => {
        _ = null;
      }), ur()), (!l || m[0] & /*$isDesktop, mix*/
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
      l || (B(e.$$.fragment, h), B(o.$$.fragment, h), B(f), B(_), l = !0);
    },
    o(h) {
      Q(e.$$.fragment, h), Q(o.$$.fragment, h), Q(f), Q(_), l = !1;
    },
    d(h) {
      h && J(r), Lt(e), Lt(o), f && f.d(), _ && _.d(), u = !1, c();
    }
  };
}
function td(t) {
  let r = [], e = new z3(), n, o, i = nr(
    /*tooltips*/
    t[3]
  );
  const s = (a) => (
    /*item*/
    a[134].internalId
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = $f(t, i, a), u = s(l);
    e.set(u, r[a] = rd(u, l));
  }
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      n = Zt();
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
      ), ar(), r = Fd(r, l, s, 1, a, i, e, n.parentNode, Vd, rd, n, $f), ur());
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
function rd(t, r) {
  let e, n, o;
  return n = new A3({
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
      e = Zt(), Bt(n.$$.fragment), this.first = e;
    },
    m(i, s) {
      q(i, e, s), Rt(n, i, s), o = !0;
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
      i && J(e), Lt(n, i);
    }
  };
}
function nd(t) {
  let r, e;
  return r = new N3({
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
      Rt(r, n, o), e = !0;
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
      Lt(r, n);
    }
  };
}
function O3(t) {
  let r, e, n = !/*hasError*/
  t[1] && !/*hasIdError*/
  t[2] && /*rootStateComponentContext*/
  t[6] && ed(t);
  return {
    c() {
      n && n.c(), r = Zt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, i) {
      !/*hasError*/
      o[1] && !/*hasIdError*/
      o[2] && /*rootStateComponentContext*/
      o[6] ? n ? (n.p(o, i), i[0] & /*hasError, hasIdError, rootStateComponentContext*/
      70 && B(n, 1)) : (n = ed(o), n.c(), B(n, 1), n.m(r.parentNode, r)) : n && (ar(), Q(n, 1, 1, () => {
        n = null;
      }), ur());
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
let Sa = Io(!0), js = 0;
function od() {
  Sa.set(!1);
}
function id() {
  Sa.set(!0);
}
const R3 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean"]), L3 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean", "array", "dict"]);
function Ho(t, r) {
  if (t && r)
    return new Map([...t, ...r]);
  if (t)
    return t;
  if (r)
    return r;
}
function B3() {
}
function H3(t, r, e) {
  var Xr, hn, zn;
  let n, o, i, s, { id: a } = r, { json: l = {} } = r, { platform: u = "auto" } = r, { theme: c = "system" } = r, { globalVariablesController: f = void 0 } = r, { mix: _ = "" } = r, { customization: h = {} } = r, { builtinProtocols: m = ["http", "https", "tel", "mailto", "intent"] } = r, { extensions: p = /* @__PURE__ */ new Map() } = r, { onError: k = void 0 } = r, { onStat: w = void 0 } = r, { onSubmit: O = void 0 } = r, { onCustomAction: U = void 0 } = r, { onComponent: R = void 0 } = r, { typefaceProvider: $ = (y) => "" } = r, { fetchInit: ue = {} } = r, { tooltipRoot: T = void 0 } = r, { customComponents: X = void 0 } = r, { direction: le = "ltr" } = r, { store: C = void 0 } = r, { pagerChildrenClipEnabled: M = !0 } = r, { pagerMouseDragEnabled: P = !0 } = r, { weekStartDay: H = 0 } = r, { videoPlayerProvider: se = void 0 } = r, { devtoolCreateHierarchy: de = "lazy" } = r, Ee = !0, Ae = Io(u === "desktop");
  if (bn(t, Ae, (y) => e(7, i = y)), u === "auto" && typeof matchMedia < "u") {
    const y = matchMedia("(any-pointer: coarse)");
    Ae.set(!y.matches), y.addListener(() => {
      Ae.set(!y.matches);
    });
  }
  let pe = "light", De = null;
  const ee = Io(le === "rtl" ? "rtl" : "ltr");
  bn(t, ee, (y) => e(8, s = y));
  function Te() {
    c !== "system" || !De || e(41, pe = De.matches ? "dark" : "light");
  }
  function We(y) {
    e(12, c = y);
  }
  function Ke() {
    return Xe;
  }
  function ke() {
    return oe;
  }
  function et(y) {
    e(11, l = y);
  }
  function fe(y) {
    return vt(y, I);
  }
  const je = new Set(m);
  let ce = !1, te = !1;
  a || (te = !0, I(K(new Error('"id" prop is required'))));
  const _e = { stateChange: !1 }, ie = f || new d_(), Fe = ie.getLastAddedVariableStore(), xe = ie.getVariables(), Xe = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), Ye = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map();
  let st = null;
  const at = /* @__PURE__ */ new Map();
  let ut = 0, kt = [];
  const rt = /* @__PURE__ */ new Set();
  let Nt;
  const ct = [];
  function ge(y) {
    return h == null ? void 0 : h[y];
  }
  function he(y, A, { additionalVars: S, keepComplex: x = !1, customFunctions: z, emptyVarsError: Ze, maxDepth: Se } = {}) {
    var rr;
    if (!A)
      return $o(A);
    const Xt = Ho(oe, S), wt = Gf(A, y, C, H, Se);
    if (!wt.vars.length)
      if (wt.hasExpression) {
        const Et = wt.applyVars(Xt, z);
        if (!((rr = Et.usedVars) != null && rr.size))
          return Ze && Ze(), $o(Et.result);
      } else
        return Ze && Ze(), $o(A);
    const qe = wt.vars.map((Et) => Xt.get(Et) || ir(Et)).filter(zo);
    return Io(void 0, (Et) => {
      const lr = /* @__PURE__ */ new Map();
      let Vr;
      const sn = () => {
        var Sn;
        const Zr = wt.applyVars(Xt, z, x);
        for (const [tn, Dn] of lr)
          (Sn = Zr.usedVars) != null && Sn.has(tn) || (Dn(), lr.delete(tn));
        if (Zr.usedVars) {
          for (const tn of Zr.usedVars)
            if (!lr.has(tn)) {
              let Dn = !0;
              lr.set(tn, tn.subscribe(() => {
                Dn || Et(sn()), Dn = !1;
              }));
            }
        }
        return Zr.result;
      };
      return Vr = Ji(qe, sn).subscribe((Zr) => {
        Et(Zr);
      }), () => {
        Vr == null || Vr();
        for (const [Zr, Sn] of lr)
          Sn();
      };
    });
  }
  function pt(y, A, S, x = !1, z = void 0) {
    const Ze = Gf(A, y, C, H);
    if (!Ze.hasExpression)
      return A;
    const Se = Ho(oe, S);
    return Ze.applyVars(Se, z, x).result;
  }
  function Ce(y, A, S) {
    const x = /* @__PURE__ */ new Map(), z = Rs(y, "dict", A);
    x.set(y, z);
    const Ze = Rs("index", "integer", S);
    return x.set("index", Ze), x;
  }
  function I(y) {
    k ? k({ error: y }) : (y == null ? void 0 : y.level) === "warn" ? console.warn(y) : console.error(y);
  }
  function Ct(y, A) {
    w && w({ type: y, action: A });
  }
  function dt(y) {
    return y in n;
  }
  function At(y, A) {
    if (!y)
      return { json: y, templateContext: A };
    const S = /* @__PURE__ */ new Set([y.type]);
    for (; y.type && y.type in n; ) {
      if ({ json: y, templateContext: A } = R2(y, A, n, I), S.has(y.type))
        return { json: y, templateContext: A };
      S.add(y.type);
    }
    return { json: y, templateContext: A };
  }
  function Tt({ type: y, node: A, json: S, origJson: x, templateContext: z, componentContext: Ze, devapi: Se }) {
    R && R({
      type: y,
      node: A,
      json: S,
      origJson: x,
      templateContext: z,
      componentContext: Ze,
      devapi: Se
    });
  }
  let nt = 0;
  function Y(y) {
    return `${a}-${nt++}`;
  }
  function Mt(y) {
    return `divkit-${Y()}`;
  }
  let Vt = {}, Gt = {};
  function Jt(y, A) {
    const S = `${y}:${A}`;
    if (Gt[S] = Gt[S] || 0, ++Gt[S], Vt[S])
      return Vt[S];
    const x = `${Y()}-svg-filter`;
    return e(5, Vt = { ...Vt, [S]: x }), x;
  }
  function me(y, A) {
    if (!y)
      return;
    const S = `${y}:${A}`;
    Gt[S] && --Gt[S] === 0 && e(5, Vt = Object.keys(Vt).reduce(
      (x, z) => (Gt[z] && (x[z] = Vt[z]), x),
      {}
    ));
  }
  const Ue = Y() + "-id-", _t = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map();
  function Qe(y) {
    return Ue + y;
  }
  function ze(y, A) {
    let S = _t.get(y) || [];
    return _t.has(y) || _t.set(y, S), S.push(A), () => {
      S = S.filter((z) => z !== A), S.length || _t.delete(y);
      const x = Qe(y);
      ye.has(x) && ye.delete(x);
    };
  }
  function or(y) {
    var S, x;
    const A = (x = (S = _t.get(y)) == null ? void 0 : S[0]) == null ? void 0 : x.node();
    if (A) {
      const z = Qe(y), Ze = ye.get(z);
      return Ze && Ze !== A && Ze.removeAttribute("id"), A.setAttribute("id", z), ye.set(z, A), z;
    }
    return "";
  }
  async function Pe(y, A) {
    var Se, Xt;
    if (!y)
      throw new Error("Missing state id");
    let S = y.split("/");
    const x = S.length % 2 === 0 && r3(A);
    let z = x || rn;
    const Ze = (A == null ? void 0 : A.logError) || I;
    if (!x)
      if ((Se = z.states) != null && Se.root) {
        const wt = z.states.root;
        if (wt.length > 1) {
          Ze(K(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: y } }));
          return;
        }
        if (z = await wt[0](S[0]), !z)
          return;
        S = S.slice(1);
      } else
        return;
    for (let wt = 0; wt < S.length; wt += 2) {
      const qe = S[wt], rr = S[wt + 1];
      if ((Xt = z.states) != null && Xt[qe]) {
        const Et = z.states[qe];
        if (Et.length > 1) {
          Ze(K(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: y } }));
          return;
        }
        if (z = await Et[0](rr), !z)
          return;
      } else
        return;
    }
  }
  async function yt(y, A, S) {
    var lr;
    const x = (y == null ? void 0 : y.logError) || I;
    if (!l3(A)) {
      x(K(new Error("Incorrect submit action"), {
        additional: { containerId: A.container_id }
      }));
      return;
    }
    const z = _t.get(A.container_id);
    if ((z == null ? void 0 : z.length) !== 1) {
      x(K(new Error("Error resolving container. Found multiple elements that respond to id"), {
        additional: { containerId: A.container_id }
      }));
      return;
    }
    const Ze = z[0].context(), Se = {};
    if (Ze.variables)
      for (const [Vr, sn] of Ze.variables) {
        const Zr = sn.getValue();
        typeof Zr == "bigint" ? Se[Vr] = Number(Zr) : Se[Vr] = Zr;
      }
    if (O) {
      Promise.resolve().then(() => O(A, Se)).then(() => {
        xt(S.on_success_actions, { componentContext: y });
      }).catch(() => {
        xt(S.on_fail_actions, { componentContext: y });
      });
      return;
    }
    const Xt = Object.keys(Se).length > 0, wt = (A.request.method || "post").toLowerCase();
    if ((wt === "get" || wt === "head") && Xt) {
      x(K(new Error("Can't send variables using the get/head method."), { additional: { url: A.request.url } }));
      return;
    }
    let qe = !1;
    const rr = [];
    (lr = A.request.headers) == null || lr.forEach((Vr) => {
      rr.push([Vr.name, Vr.value]), Vr.name.toLowerCase() === "content-type" && (qe = !0);
    }), qe || rr.push(["Content-Type", "application/json"]);
    let Et;
    typeof ue == "function" ? Et = ue(A.request.url) : Et = ue, fetch(A.request.url, {
      ...Et,
      method: wt,
      headers: rr,
      body: Xt ? JSON.stringify(Se) : void 0
    }).then((Vr) => {
      if (!Vr.ok)
        throw new Error("Response is not ok");
      xt(S.on_success_actions, { componentContext: y });
    }).catch((Vr) => {
      x(K(new Error("Failed to submit"), {
        additional: {
          url: A.request.url,
          originalError: Vr
        }
      })), xt(S.on_fail_actions, { componentContext: y });
    });
  }
  function Ft(y, A) {
    var z, Ze, Se, Xt, wt, qe, rr, Et, lr;
    const S = (y == null ? void 0 : y.logError) || I, x = A.id && jt(A.id);
    if (!x) {
      S(K(new Error('Missing component for "scroll_to" action'), { additional: { id: A.id } }));
      return;
    }
    if (A.animated !== void 0 && typeof A.animated != "boolean") {
      S(K(new Error('Missing properties for "scroll_to" action'), { additional: { id: A.id } }));
      return;
    }
    switch ((z = A.destination) == null ? void 0 : z.type) {
      case "index": {
        typeof A.destination.value == "number" && x.setCurrentItem(A.destination.value, (Ze = A.animated) != null ? Ze : !0);
        break;
      }
      case "offset": {
        typeof A.destination.value == "number" && ((Xt = x.scrollToPosition) == null || Xt.call(x, A.destination.value, (Se = A.animated) != null ? Se : !0));
        break;
      }
      case "start": {
        (qe = x.scrollToStart) == null || qe.call(x, (wt = A.animated) != null ? wt : !0);
        break;
      }
      case "end": {
        (Et = x.scrollToEnd) == null || Et.call(x, (rr = A.animated) != null ? rr : !0);
        break;
      }
      default:
        S(K(new Error('Unknown destination for "scroll_to" action'), {
          additional: {
            id: A.id,
            destination: (lr = A.destination) == null ? void 0 : lr.type
          }
        }));
    }
  }
  function It(y, A) {
    var z;
    const S = (y == null ? void 0 : y.logError) || I, x = A.id && jt(A.id);
    if (!x) {
      S(K(new Error('Missing component for "scroll_by" action'), { additional: { id: A.id } }));
      return;
    }
    if (typeof A.item_count != "number" && A.item_count !== void 0 || typeof A.offset != "number" && A.offset !== void 0 || A.overflow !== void 0 && A.overflow !== "clamp" && A.overflow !== "ring" || A.animated !== void 0 && typeof A.animated != "boolean") {
      S(K(new Error('Missing properties for "scroll_by" action'), { additional: { id: A.id } }));
      return;
    }
    (z = x.scrollCombined) == null || z.call(x, {
      step: A.item_count,
      offset: A.offset,
      overflow: A.overflow,
      animated: A.animated
    });
  }
  function hr(y, A, { item: S, step: x, overflow: z, animated: Ze }) {
    var rr, Et, lr, Vr, sn;
    if (!A)
      throw new Error(`Missing id for "${y}" action`);
    const Se = Number(S);
    if (y === "set_current_item" && Number.isNaN(Se))
      throw new Error(`Incorrect item for "${y}" action`);
    let Xt = Number(x);
    if (!x && (y === "set_previous_item" || y === "set_next_item") && (Xt = 1), !x && (y === "scroll_backward" || y === "scroll_forward" || y === "scroll_to_position") || Number.isNaN(Xt))
      throw new Error(`Incorrect step value for "${y}" action`);
    if (z && z !== "clamp" && z !== "ring")
      throw new Error(`Incorrect overflow value for "${y}" action`);
    z = z || "clamp";
    const wt = Ze === null || Ze !== "0" && Ze !== "false", qe = jt(A);
    if (qe)
      switch (y) {
        case "set_current_item":
          qe.setCurrentItem(Se, wt);
          return;
        case "set_previous_item":
          qe.setPreviousItem(Xt, z, wt);
          return;
        case "set_next_item":
          qe.setNextItem(Xt, z, wt);
          return;
        case "scroll_to_start":
          (rr = qe.scrollToStart) == null || rr.call(qe, wt);
          return;
        case "scroll_to_end":
          (Et = qe.scrollToEnd) == null || Et.call(qe, wt);
          return;
        case "scroll_backward":
          (lr = qe.scrollCombined) == null || lr.call(qe, {
            offset: -Xt,
            overflow: z,
            animated: wt
          });
          return;
        case "scroll_forward":
          (Vr = qe.scrollCombined) == null || Vr.call(qe, {
            offset: Xt,
            overflow: z,
            animated: wt
          });
          return;
        case "scroll_to_position":
          (sn = qe.scrollToPosition) == null || sn.call(qe, Xt, wt);
          return;
      }
  }
  function Me(y, A, S) {
    const x = (S == null ? void 0 : S.logError) || I;
    if (y) {
      const z = jt(y);
      z ? A === "start" ? z.start() : A === "pause" ? z.pause() : x(K(new Error("Unknown video action"), { additional: { id: y, action: A } })) : x(K(new Error("Video component is not found"), { additional: { id: y, action: A } }));
    } else
      x(K(new Error("Missing id in video action"), { additional: { action: A } }));
  }
  function vt(y, A, S) {
    var x, z, Ze;
    if (y.templates)
      for (const Se in y.templates)
        n.hasOwnProperty(Se) || (n[Se] = y.templates[Se]);
    if (Array.isArray((x = y.patch) == null ? void 0 : x.changes)) {
      if (y.patch.mode === "transactional") {
        const Se = y.patch.changes.find((Xt) => {
          const wt = Er.get(Xt.id);
          if (!wt)
            return !0;
          const qe = Array.isArray(Xt.items) ? Xt.items.length : 0;
          return !!(wt.isSingleMode && qe !== 1);
        });
        if (Se)
          return A(K(new Error("Skipping transactional, child is not found or broken"), { additional: { url: S, id: Se.id } })), xt((z = y.patch) == null ? void 0 : z.on_failed_actions), !1;
      }
      return y.patch.changes.forEach((Se) => {
        const Xt = Er.get(Se.id);
        Xt && Xt.replaceWith(Se.id, Se.items);
      }), xt((Ze = y.patch) == null ? void 0 : Ze.on_applied_actions), !0;
    }
    return !1;
  }
  function sr(y, A, S) {
    const x = (S == null ? void 0 : S.logError) || I;
    if (y) {
      let z;
      typeof ue == "function" ? z = ue(y) : z = ue, fetch(y, z).then((Ze) => {
        if (!Ze.ok)
          throw new Error("Response is not ok");
        return Ze.json();
      }).then((Ze) => {
        if (!Ze) {
          x(K(new Error("Incorrect patch"), { additional: { url: y } })), xt(A == null ? void 0 : A.on_fail_actions, { componentContext: S });
          return;
        }
        vt(Ze, x, y) ? xt(A == null ? void 0 : A.on_success_actions, { componentContext: S }) : xt(A == null ? void 0 : A.on_fail_actions, { componentContext: S });
      }).catch((Ze) => {
        x(K(new Error("Failed to download the patch"), { additional: { url: y, originalError: Ze } })), xt(A == null ? void 0 : A.on_fail_actions, { componentContext: S });
      });
    } else
      x(K(new Error("Missing url in download action"), { additional: { url: y } }));
  }
  function $t(y, A, S) {
    var Xt;
    const x = (S == null ? void 0 : S.logError) || I;
    if (!y) {
      x(K(new Error("Missing id in show_tooltip action")));
      return;
    }
    const z = Ir.get(y);
    if (!z) {
      x(K(new Error("Tooltip with the provided id is not found"), { additional: { id: y } }));
      return;
    }
    if (A !== "true" && A !== !0 && rt.has(y))
      return;
    rt.add(y);
    const Ze = {
      internalId: ++ut,
      ownerNode: z.onwerNode,
      desc: z.tooltip,
      timeoutId: 0,
      componentContext: S
    };
    e(3, kt = [...kt, Ze]);
    const Se = (Xt = z.tooltip.duration) != null ? Xt : 5e3;
    Se && (Ze.timeoutId = window.setTimeout(
      () => {
        Ze.timeoutId = 0, e(3, kt = kt.filter((wt) => wt.internalId !== Ze.internalId));
      },
      Se
    ));
  }
  function Yt(y, A) {
    const S = (A == null ? void 0 : A.logError) || I;
    if (!y) {
      S(K(new Error("Missing id in hide_tooltip action")));
      return;
    }
    e(3, kt = kt.filter((x) => {
      const z = x.desc.id !== y;
      return !z && x.timeoutId && (clearTimeout(x.timeoutId), x.timeoutId = null), z;
    }));
  }
  function mr(y, A, S, x, z) {
    const Ze = (y == null ? void 0 : y.logError) || I;
    if (!C) {
      Ze(K(new Error("Store is not configured")));
      return;
    }
    let Se = S;
    if (!A || !Se || !x || !z) {
      Ze(K(new Error("Missing required params for set_stored_value")));
      return;
    }
    if (!L3.has(x)) {
      Ze(K(new Error("Incorrect stored type")));
      return;
    }
    if (x === "boolean" && (Se = Se === "true" || Se === "1"), C.set)
      C.set(A, x, Se, Number(z));
    else if (C.setValue) {
      if (!R3.has(x)) {
        Ze(K(new Error("Incorrect stored type")));
        return;
      }
      if (typeof Se != "string" && typeof Se != "number" && typeof Se != "boolean") {
        Ze(K(new Error("Incorrect stored value")));
        return;
      }
      (x === "integer" || x === "number") && (Se = Number(Se)), C.setValue(A, x, Se, Number(z));
    }
  }
  function jr(y) {
    Qt(pt(I, y, void 0, !0), y);
  }
  async function Qt(y, A, S) {
    var Xt, wt;
    const x = y.scope_id, z = (S == null ? void 0 : S.logError) || I;
    if (x) {
      const qe = zr.get(x);
      if (qe && (qe == null ? void 0 : qe.size) > 1)
        z(K(new Error(`Ambiguous scope id. There are ${qe.size} divs with id '${x}'`), { additional: { count: qe.size, scopeId: x } }));
      else if ((qe == null ? void 0 : qe.size) === 1) {
        const rr = qe.values().next().value;
        rr && (S = rr);
      } else {
        z(K(new Error("The scope with the specified scope_id is missing"), { additional: { scopeId: x } }));
        return;
      }
    }
    const Ze = y.url ? String(y.url) : "", Se = y.typed;
    if (Zs(y)) {
      if (Se)
        switch (Se.type) {
          case "set_variable": {
            const { variable_name: qe, value: rr } = Se;
            if (qe && rr) {
              const Et = (S == null ? void 0 : S.getVariable(qe)) || oe.get(qe);
              Et ? Et.getType() === rr.type ? Et.setValue(rr.value) : z(K(new Error("Trying to set value with invalid type"), { additional: { name: qe, type: rr.type } })) : z(K(new Error("Cannot find variable"), { additional: { name: qe } }));
            } else
              z(K(new Error("Incorrect set_variable action"), { additional: { name: qe } }));
            break;
          }
          case "array_insert_value":
            X2(S, oe, z, Se);
            break;
          case "array_remove_value":
            Z2(S, oe, z, Se);
            break;
          case "array_set_value":
            Q2(S, oe, z, Se);
            break;
          case "copy_to_clipboard":
            $2(z, Se);
            break;
          case "focus_element": {
            const qe = Se.element_id && wr.get(Se.element_id);
            qe ? qe.focus() : z(K(new Error("Incorrect focus_element action"), {
              additional: { elementId: Se.element_id }
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
            x2(S, oe, z, Se);
            break;
          }
          case "animator_start": {
            const qe = Se.animator_id && (S == null ? void 0 : S.getAnimator(Se.animator_id));
            if (!qe) {
              z(K(new Error("Missing animator"), {
                additional: { animator_id: Se.animator_id }
              }));
              return;
            }
            const { duration: rr, start_delay: Et, interpolator: lr, direction: Vr, repeat_count: sn, start_value: Zr, end_value: Sn } = Se, tn = S ? S.getJsonWithVars(qe) : pt(I, qe), Dn = {
              ...tn,
              end_actions: qe.end_actions,
              cancel_actions: qe.cancel_actions,
              duration: rr !== void 0 ? rr : tn.duration,
              start_delay: Et !== void 0 ? Et : tn.start_delay,
              interpolator: lr !== void 0 ? lr : tn.interpolator,
              direction: Vr !== void 0 ? Vr : tn.direction,
              repeat_count: sn !== void 0 ? sn : tn.repeat_count,
              start_value_typed: Zr,
              end_value_typed: Sn
            }, Jn = qe.variable_name && ((S == null ? void 0 : S.getVariable(qe.variable_name)) || oe.get(qe.variable_name));
            if (!Jn)
              return;
            const qn = at.get(qe.id);
            qn && qn.stop();
            const Ut = t3(
              Dn,
              Jn,
              () => {
                at.delete(qe.id);
              },
              (b, F) => ((S == null ? void 0 : S.execAnyActions) || xt)(b, F)
            );
            Ut && at.set(qe.id, Ut);
            break;
          }
          case "animator_stop": {
            const qe = at.get(Se.animator_id);
            qe && (qe.stop(), at.delete(Se.animator_id));
            break;
          }
          case "show_tooltip": {
            $t(Se.id, Se.multiple, S);
            break;
          }
          case "hide_tooltip": {
            Yt(Se.id, S);
            break;
          }
          case "timer": {
            st ? st.execTimerAction(Se.id, Se.action) : z(K(new Error("Incorrect timer action"), {
              additional: {
                id: Se.id,
                action: Se.action
              }
            }));
            break;
          }
          case "download": {
            sr(Se.url, A.typed, S);
            break;
          }
          case "video": {
            Me(Se.id, Se.action, S);
            break;
          }
          case "set_stored_value": {
            mr(S, Se.name, (Xt = Se.value) == null ? void 0 : Xt.value, (wt = Se.value) == null ? void 0 : wt.type, Se.lifetime);
            break;
          }
          case "set_state": {
            await Pe(Se.state_id, S);
            break;
          }
          case "submit": {
            await yt(S, Se, A.typed);
            break;
          }
          case "scroll_to": {
            Ft(S, Se);
            break;
          }
          case "scroll_by": {
            It(S, Se);
            break;
          }
          case "update_structure": {
            a3(S, oe, z, Se);
            break;
          }
          case "custom": {
            G({
              ...A,
              // todo remove in major release
              url: ""
            });
            break;
          }
          default:
            z(K(new Error("Unknown type of action"), { additional: { type: Se.type } }));
        }
      else if (Ze)
        try {
          const qe = Ze.replace(/div-action:\/\//, ""), rr = /([^?]+)\?(.+)/.exec(qe);
          if (!rr)
            return;
          const Et = new URLSearchParams(rr[2]);
          switch (rr[1]) {
            case "set_state":
              await Pe(Et.get("state_id"), S);
              break;
            case "set_current_item":
            case "set_previous_item":
            case "set_next_item":
            case "scroll_to_start":
            case "scroll_to_end":
            case "scroll_backward":
            case "scroll_forward":
            case "scroll_to_position":
              hr(rr[1], Et.get("id"), {
                item: Et.get("item"),
                step: Et.get("step"),
                overflow: Et.get("overflow"),
                animated: Et.get("animated")
              });
              break;
            case "set_variable":
              const lr = Et.get("name"), Vr = Et.get("value");
              if (lr && Vr !== null) {
                const Sn = (S == null ? void 0 : S.getVariable(lr)) || oe.get(lr);
                Sn ? Sn.set(Vr) : z(K(new Error("Cannot find variable"), { additional: { name: lr } }));
              } else
                z(K(new Error("Incorrect set_variable_action"), { additional: { url: qe } }));
              break;
            case "timer":
              const sn = Et.get("action"), Zr = Et.get("id");
              st ? st.execTimerAction(Zr, sn) : z(K(new Error("Incorrect timer action"), {
                additional: { id: Zr, action: sn }
              }));
              break;
            case "video":
              Me(Et.get("id"), Et.get("action"), S);
              break;
            case "download":
              sr(Et.get("url"), A.download_callbacks, S);
              break;
            case "show_tooltip":
              $t(Et.get("id"), Et.get("multiple"), S);
              break;
            case "hide_tooltip":
              Yt(Et.get("id"), S);
              break;
            case "set_stored_value": {
              mr(S, Et.get("name"), Et.get("value"), Et.get("type"), Et.get("lifetime"));
              break;
            }
            default:
              z(K(new Error("Unknown type of action"), { additional: { url: Ze } }));
          }
        } catch (qe) {
          z(K(qe, { additional: { url: Ze } }));
        }
    }
  }
  async function xt(y, A = {}) {
    var z;
    if (!y || !Array.isArray(y))
      return;
    const S = ((z = A.componentContext) == null ? void 0 : z.logError) || I, x = (Ze) => A.componentContext ? A.componentContext.getJsonWithVars(Ze, A.additionalVars, !0) : pt(S, Ze, A.additionalVars, !0);
    for (let Ze = 0; Ze < y.length; ++Ze) {
      let Se = x(y[Ze]);
      const Xt = Se.is_enabled;
      if (Xt === 0 || Xt === !1)
        continue;
      const wt = Se.url;
      if (Se.typed)
        await Qt(Se, y[Ze], A.componentContext);
      else if (wt) {
        const rr = Zl(wt);
        if (rr)
          if (Ql(rr, je)) {
            if (A.processUrls)
              if (Se.target === "_blank") {
                const Et = window.open("", "_blank");
                Et && (Et.opener = null, Et.location = wt);
              } else
                location.href = wt;
          } else rr === "div-action" ? (await Qt(Se, y[Ze], A.componentContext), await An()) : Se.log_id && (G(Se), await An());
      } else A.node && Array.isArray(Se.menu_items) && Se.menu_items.length && e(4, Nt = {
        items: Se.menu_items,
        node: A.node,
        componentContext: A.componentContext
      });
    }
    y.forEach((Ze) => {
      Ze.log_id && Ct(A.logType || "click", Ze);
    });
  }
  function G(y) {
    U == null || U(y);
  }
  function ft(y, A) {
    const S = (y == null ? void 0 : y.logError) || I;
    if (!Array.isArray(A) || !A.length)
      return;
    const x = [];
    return A.forEach((z) => {
      let Ze = !1;
      if (typeof z.condition != "string") {
        S(K(new Error("variable_trigger has a condition that is not a string"), {
          additional: { condition: z.condition }
        }));
        return;
      }
      if (!Array.isArray(z.actions)) {
        S(K(new Error("variable_trigger has no actions"), {
          additional: { condition: z.condition }
        }));
        return;
      }
      const Se = z.mode || "on_condition";
      if (Se !== "on_variable" && Se !== "on_condition") {
        S(K(new Error("variable_trigger has an unsupported mode"), { additional: { mode: Se } }));
        return;
      }
      const wt = he(S, { condition: z.condition }, {
        additionalVars: y == null ? void 0 : y.variables,
        customFunctions: y == null ? void 0 : y.customFunctions,
        emptyVarsError: () => {
          S(K(new Error("variable_trigger must have variables in the condition"), {
            additional: { condition: z.condition }
          }));
        }
      }).subscribe(async (qe) => {
        qe.condition !== void 0 && (// if condition is truthy
        qe.condition && // and trigger mode matches
        (Se === "on_variable" || Se === "on_condition" && Ze === !1) ? (Ze = !!qe.condition, y ? await y.execAnyActions(z.actions, { logType: "trigger" }) : await xt(z.actions, { logType: "trigger" })) : Ze = !!qe.condition);
      });
      x.push(wt);
    }), () => {
      x.forEach((z) => {
        z();
      });
    };
  }
  function Wt(y) {
    return _e[y];
  }
  function St(y, A) {
    _e[y] = A;
  }
  const br = /* @__PURE__ */ new Map(), Er = /* @__PURE__ */ new Map(), wr = /* @__PURE__ */ new Map(), Ir = /* @__PURE__ */ new Map(), zr = /* @__PURE__ */ new Map();
  function tr(y, A, S = "error") {
    if (br.has(y)) {
      I(K(new Error("Duplicate instance id"), {
        level: S,
        additional: { id: y }
      }));
      return;
    }
    br.set(y, A);
  }
  function ot(y) {
    br.delete(y);
  }
  function jt(y) {
    if (!br.has(y)) {
      I(K(new Error("Missing instance with id"), { additional: { id: y } }));
      return;
    }
    return br.get(y);
  }
  function Kt(y, A) {
    Er.set(y, A);
  }
  function qt(y) {
    Er.delete(y);
  }
  function pr(y, A) {
    wr.set(y, A);
  }
  function lt(y) {
    wr.delete(y);
  }
  function re(y, A) {
    const S = A.id;
    S && (Ir.has(S) && I(K(new Error("Duplicate tooltip id"), { additional: { id: S } })), Ir.set(S, { onwerNode: y, tooltip: A }));
  }
  function bt(y) {
    const A = y.id;
    A && (Ir.delete(A), kt.some((S) => S.desc.id === A) && e(3, kt = kt.filter((S) => S.desc.id !== A)));
  }
  function ir(y) {
    const A = Ye.get(y) || Io(void 0);
    return Ye.has(y) || Ye.set(y, A), A;
  }
  function yr(y, A, S) {
    const x = Oe.get(y);
    if (x)
      return x;
    const z = io(y, A, S);
    return Oe.set(y, z), z;
  }
  function fr() {
    if (!Ht)
      return;
    Ht[pe].forEach((A) => {
      const S = oe.get(A.name);
      S && S.setValue(A.color);
    });
  }
  function v() {
    return je;
  }
  function ne(y, A) {
    const S = p.get(y);
    if (S)
      return new S(A || {});
  }
  function d(y) {
    return {
      variables: Ho(oe, y.variables),
      derviedExpression(A) {
        return y.getDerivedFromVars(A);
      },
      processExpressions(A) {
        return y.getJsonWithVars(A);
      },
      execAction: jr,
      logError: I,
      getComponentProperty(A) {
        return y.getJsonWithVars(y.json[A]);
      },
      direction: le
    };
  }
  function j(y, A) {
    const S = /* @__PURE__ */ new Map(), x = (A == null ? void 0 : A.logError) || I;
    return y.forEach((z) => {
      if (S) {
        try {
          B2(z);
        } catch (Xt) {
          x(K(Xt));
          return;
        }
        const Ze = z, Se = S.get(Ze.name) || [];
        Se.push(H2(Ze)), S.set(Ze.name, Se);
      }
    }), S;
  }
  function Ie(y) {
    const A = {
      id: "",
      json: {},
      path: [],
      templateContext: {},
      logError(S) {
        S.additional = S.additional || {}, S.additional.path = A.path.join("/");
        {
          S.additional.json = A.json, S.additional.origJson = A.origJson;
          const x = [];
          let z = A;
          for (; z.parent; )
            x.push(z), z = z.parent;
          S.additional.fullpath = x;
        }
        I(S);
      },
      execAnyActions(S, x = {}) {
        return xt(S, {
          componentContext: A,
          processUrls: x.processUrls,
          node: x.node,
          logType: x.logType,
          additionalVars: x.additionalVars
        });
      },
      getDerivedFromVars(S, x, z = !1, Ze = 1 / 0) {
        return he(A.logError, S, {
          additionalVars: Ho(A.variables, x),
          keepComplex: z,
          customFunctions: A.customFunctions,
          maxDepth: Ze
        });
      },
      getJsonWithVars(S, x, z = !1) {
        return pt(A.logError, S, Ho(A.variables, x), z, A.customFunctions);
      },
      evalExpression(S, x, z) {
        return pl(Ho(oe, A.variables), A.customFunctions, S, x, z);
      },
      produceChildContext(S, x = {}) {
        const z = Ie(this);
        let Ze = S, Se = this.templateContext;
        const { templateContext: Xt, json: wt } = At(Ze, Se);
        if (z.json = wt, z.templateContext = Xt, z.origJson = S, z.id = x.id || wt.id || "", z.id) {
          let Et = zr.get(z.id);
          Et || (Et = /* @__PURE__ */ new Set(), zr.set(z.id, Et)), Et.add(z);
        }
        x.key && (z.key = x.key), x.path !== void 0 && z.path.push(String(x.path)), S.type && !x.isRootState && z.path.push(S.type), x.isTooltipRoot && (z.isTooltipRoot = !0);
        let qe;
        Array.isArray(wt.variables) ? (qe = Ho(this.variables, Ho(x.variables, /* @__PURE__ */ new Map())), wt.variables.forEach((Et) => {
          const lr = it(Et, z, qe);
          lr && qe && qe.set(lr.getName(), lr);
        })) : x.variables ? qe = Ho(this.variables, x.variables) : this.variables && (qe = this.variables), z.variables = qe, qe && (z.selfVariables = /* @__PURE__ */ new Set([...qe.keys()]));
        let rr;
        return Array.isArray(wt.functions) && (rr = j(wt.functions, this)), z.customFunctions = W2(this.customFunctions, rr), Array.isArray(wt.animators) && (z.animators = wt.animators.reduce(
          (Et, lr) => (lr.id && (Et[lr.id] = lr), Et),
          {}
        )), x.fake && (z.fakeElement = x.fake), x.isRootState && (z.isRootState = !0), z;
      },
      dup(S) {
        return { ...A, fakeElement: S };
      },
      getVariable(S, x) {
        var Ze;
        const z = ((Ze = A.variables) == null ? void 0 : Ze.get(S)) || oe.get(S);
        if (z) {
          const Se = z.getType();
          if (x && Se !== x) {
            A.logError(K(new Error(`Variable should have type "${x}"`), { additional: { name: S, foundType: Se } }));
            return;
          }
        }
        return z;
      },
      getAnimator(S) {
        var x, z;
        return ((x = A.animators) == null ? void 0 : x[S]) || ((z = A.parent) == null ? void 0 : z.getAnimator(S)) || void 0;
      },
      registerState(S, x) {
        const z = n3(A.parent);
        return z && (z.states = z.states || {}, z.states[S] = z.states[S] || [], z.states[S].push(x)), () => {
          var Ze;
          (Ze = z == null ? void 0 : z.states) != null && Ze[S] && (z.states[S] = z.states[S].filter((Se) => Se !== x), z.states[S].length || delete z.states[S]);
        };
      },
      registerPager(S) {
        const x = A.parent;
        return x ? (x.pagers = x.pagers || /* @__PURE__ */ new Map(), x.pagers.has(S) ? {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          update() {
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          destroy() {
          }
        } : (x.pagers.set(S, null), {
          update(z) {
            var wt, qe;
            x.pagers && x.pagers.set(S, z);
            const Ze = S ? (wt = x.pagerListeners) == null ? void 0 : wt.get(S) : void 0, Se = (qe = x.pagerListeners) == null ? void 0 : qe.get(void 0);
            [...Ze || [], ...Se || []].forEach((rr) => {
              rr(z);
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
        var wt, qe, rr;
        let z = A.parent;
        for (; z && !(z.pagers && (S ? z.pagers.get(S) : (wt = z.pagers) != null && wt.size)); )
          z = z.parent;
        if (!z)
          return () => {
          };
        z.pagerListeners = A.pagerListeners || /* @__PURE__ */ new Map();
        const Ze = z.pagerListeners.get(S) || [];
        z.pagerListeners.has(S) || z.pagerListeners.set(S, Ze), Ze.push(x);
        const Se = S || ((qe = z.pagers) == null ? void 0 : qe.keys().next().value) || void 0, Xt = (rr = z.pagers) == null ? void 0 : rr.get(Se);
        return Xt && x(Xt), () => {
          if (!z.pagerListeners)
            return;
          let Et = z.pagerListeners.get(Se);
          Et && (Et = Et.filter((lr) => lr !== x) || [], Et.length ? z.pagerListeners.set(S, Et) : z.pagerListeners.delete(S));
        };
      },
      destroy() {
        const S = zr.get(A.id);
        S && (S.delete(A), S.size || zr.delete(A.id));
      }
    };
    return y ? (A.parent = y, A.path = y.path.slice(), y.fakeElement && (A.fakeElement = y.fakeElement)) : (A.json = { type: "root" }, A.isRootState = !0), A;
  }
  function Re(y) {
    Ee ? ct.push(y) : clearTimeout(y);
  }
  pi(Kr, {
    logStat: Ct,
    hasTemplate: dt,
    genId: Y,
    genClass: Mt,
    execCustomAction: G,
    processVariableTriggers: ft,
    isRunning: Wt,
    setRunning: St,
    pagerChildrenClipEnabled: M,
    pagerMouseDragEnabled: P,
    registerInstance: tr,
    unregisterInstance: ot,
    registerParentOf: Kt,
    unregisterParentOf: qt,
    registerTooltip: re,
    unregisterTooltip: bt,
    onTooltipClose: ve,
    tooltipRoot: T,
    registerFocusable: pr,
    unregisterFocusable: lt,
    addSvgFilter: Jt,
    removeSvgFilter: me,
    registerId: ze,
    getComponentId: or,
    preparePrototypeVariables: Ce,
    getCustomization: ge,
    getBuiltinProtocols: v,
    getExtension: ne,
    getExtensionContext: d,
    registerTimeout: Re,
    typefaceProvider: $,
    isDesktop: Ae,
    isPointerFocus: Sa,
    customComponents: X,
    direction: ee,
    videoPlayerProvider: se,
    awaitGlobalVariable: yr,
    componentDevtool: Tt,
    devtoolCreateHierarchy: de
  }), pi(Do, {
    hasAction() {
      return !1;
    }
  }), pi(ya, {
    runVisibilityTransition(y, A, S, x, z) {
      return Promise.resolve();
    },
    registerChildWithTransitionIn(y, A, S, x) {
      return Promise.resolve();
    },
    registerChildWithTransitionOut(y, A, S, x) {
      return Promise.resolve();
    },
    registerChildWithTransitionChange(y, A, S, x) {
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
  }), pi(wa, { isEnabled: $o(!0) });
  function Pt(y, A) {
    const S = oe.get(y);
    return (S == null ? void 0 : S.getType()) === A;
  }
  function L(y, A) {
    const S = oe.get(y);
    S ? S.setValue(A) : I(K(new Error("Cannot find variable"), { additional: { name: y } }));
  }
  function Dt(y, A, S) {
    const x = (A == null ? void 0 : A.logError) || I, z = y.name, Ze = y.value_type;
    if (typeof y.get != "string" || !y.get) {
      x(K(new Error("Incorrect property getter"), { additional: { name: z } }));
      return;
    }
    if (!z) {
      x(K(new Error("Missing property name")));
      return;
    }
    if (!Ze) {
      x(K(new Error("Missing property value_type")));
      return;
    }
    const Se = A ? A.getDerivedFromVars(y.get, void 0, !0) : he(I, y.get, { keepComplex: !0 });
    if (ql(Se) === void 0)
      return;
    const wt = (qe) => {
      const rr = Rs(y.new_value_variable_name || "new_value", y.value_type, qe), Et = new Map(S);
      Et.set(rr.getName(), rr), Array.isArray(y.set) && y.set.length ? A ? A.execAnyActions(y.set, { additionalVars: Et }) : xt(y.set, { additionalVars: Et }) : x(K(new Error("Cannot set property. No setters provided."), { additional: { name: z } }));
    };
    return {
      getName() {
        return z;
      },
      subscribe(qe) {
        return Se.subscribe(qe);
      },
      set(qe) {
        const rr = Ph(qe, Ze);
        wt(rr);
      },
      setValue: wt,
      getValue() {
        return ql(Se);
      },
      getType() {
        return Ze;
      }
    };
  }
  function it(y, A, S) {
    if (y.type === "property")
      return Dt(y, A, S);
    if (!y.type || !y.name || !(y.type in Kl) || !("value" in y))
      return;
    const x = y.value;
    let z = A ? A.getJsonWithVars(x, S, !0) : pt(I, x, S, !0);
    if (!(x && typeof x == "string" && z === void 0)) {
      y.type === "integer" && typeof z == "number" && (z > Number.MAX_SAFE_INTEGER || z < Number.MIN_SAFE_INTEGER) && I(K(new Error("The value of the integer variable could lose accuracy"), {
        level: "warn",
        additional: { name: y.name, value: z }
      }));
      try {
        return io(y.name, y.type, z);
      } catch (Ze) {
        I(K(Ze, { additional: { name: y.name } }));
      }
    }
  }
  function Ge(y) {
    const A = it(y);
    A && (Xe.set(y.name, A), oe.set(y.name, A));
  }
  for (const [y, A] of xe)
    oe.has(y) || oe.set(y, A);
  const Je = (Xr = l == null ? void 0 : l.card) == null ? void 0 : Xr.variables;
  Array.isArray(Je) && Je.forEach((y) => {
    if (y && y.name) {
      if (Xe.has(y.name)) {
        I(K(new Error("Duplicate variable"), { additional: { name: y.name } }));
        return;
      }
      Ge(y);
    }
  });
  const Ht = l.palette;
  Ht && Ht[pe].forEach((A) => {
    if (Xe.has(A.name)) {
      I(K(new Error("Duplicate variable"), { additional: { name: A.name } }));
      return;
    }
    try {
      const S = io(A.name, "color", A.color);
      Xe.set(A.name, S), oe.set(A.name, S);
    } catch (S) {
      I(K(S, { additional: { name: A.name } }));
    }
  }), Fe.subscribe((y) => {
    if (y && !oe.has(y)) {
      const A = xe.get(y);
      oe.set(y, A);
      const S = Ye.get(y);
      if (S) {
        let z = 0;
        A.subscribe(() => {
          S.set(++z);
        });
      }
      const x = Oe.get(y);
      x && x.getType() === A.getType() && A.subscribe((z) => {
        x.set(z);
      });
    }
  });
  const kr = () => {
    var y;
    ft(void 0, (y = l == null ? void 0 : l.card) == null ? void 0 : y.variable_triggers);
  }, en = (hn = l == null ? void 0 : l.card) == null ? void 0 : hn.timers;
  if (en && typeof document < "u") {
    const y = st = new K2({
      logError: I,
      applyVars: (A) => pt(I, A),
      hasVariableWithType: Pt,
      setVariableValue: L,
      execAnyActions: xt
    });
    en.forEach((A) => y.createTimer(A));
  }
  const rn = Ie();
  Array.isArray((zn = l.card) == null ? void 0 : zn.functions) && (rn.customFunctions = j(l.card.functions));
  let Jr;
  function ve(y) {
    e(3, kt = kt.filter((A) => A.internalId !== y));
  }
  ro(() => {
    js++, js === 1 && (window.addEventListener("keydown", od), window.addEventListener("pointerdown", id)), An().then(() => {
      Ee && kr();
    });
  }), an(() => {
    Ee = !1, js--, js || (window.removeEventListener("keydown", od), window.removeEventListener("pointerdown", id));
    for (const [y, A] of at)
      A.stop();
    st && st.destroy(), kt.forEach((y) => {
      y.timeoutId && (clearTimeout(y.timeoutId), y.timeoutId = null);
    }), ct.forEach((y) => {
      clearTimeout(y);
    });
  });
  const wn = () => e(4, Nt = void 0);
  return t.$$set = (y) => {
    "id" in y && e(13, a = y.id), "json" in y && e(11, l = y.json), "platform" in y && e(14, u = y.platform), "theme" in y && e(12, c = y.theme), "globalVariablesController" in y && e(15, f = y.globalVariablesController), "mix" in y && e(0, _ = y.mix), "customization" in y && e(16, h = y.customization), "builtinProtocols" in y && e(17, m = y.builtinProtocols), "extensions" in y && e(18, p = y.extensions), "onError" in y && e(19, k = y.onError), "onStat" in y && e(20, w = y.onStat), "onSubmit" in y && e(21, O = y.onSubmit), "onCustomAction" in y && e(22, U = y.onCustomAction), "onComponent" in y && e(23, R = y.onComponent), "typefaceProvider" in y && e(24, $ = y.typefaceProvider), "fetchInit" in y && e(25, ue = y.fetchInit), "tooltipRoot" in y && e(26, T = y.tooltipRoot), "customComponents" in y && e(27, X = y.customComponents), "direction" in y && e(28, le = y.direction), "store" in y && e(29, C = y.store), "pagerChildrenClipEnabled" in y && e(30, M = y.pagerChildrenClipEnabled), "pagerMouseDragEnabled" in y && e(31, P = y.pagerMouseDragEnabled), "weekStartDay" in y && e(32, H = y.weekStartDay), "videoPlayerProvider" in y && e(33, se = y.videoPlayerProvider), "devtoolCreateHierarchy" in y && e(34, de = y.devtoolCreateHierarchy);
  }, t.$$.update = () => {
    var y, A;
    if (t.$$.dirty[0] & /*theme*/
    4096 | t.$$.dirty[1] & /*themeQuery*/
    2048 && (c === "light" || c === "dark" ? e(41, pe = c) : c === "system" ? typeof matchMedia < "u" ? (De || (e(42, De = matchMedia("(prefers-color-scheme: dark)")), De.addListener(Te)), e(41, pe = De.matches ? "dark" : "light")) : e(41, pe = "light") : I(K(new Error("Unsupported theme")))), t.$$.dirty[1] & /*currentTheme*/
    1024 && pe && fr(), t.$$.dirty[0] & /*json*/
    2048) {
      e(1, ce = !1);
      const S = U2(l);
      S && (e(1, ce = !0), I(S));
    }
    if (t.$$.dirty[0] & /*json*/
    2048 && (n = l.templates || {}), t.$$.dirty[0] & /*json*/
    2048 && (y = l == null ? void 0 : l.card) != null && y.variables && Array.isArray(l.card.variables) && l.card.variables !== Je && l.card.variables.forEach((S) => {
      S && S.name && !Xe.has(S.name) && !oe.has(S.name) && Ge(S);
    }), t.$$.dirty[0] & /*json*/
    2048 && e(44, o = (A = l == null ? void 0 : l.card) == null ? void 0 : A.states), t.$$.dirty[0] & /*hasError, hasIdError*/
    6 | t.$$.dirty[1] & /*states, rootComponentContext*/
    12288 && o && !ce && !te) {
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
      e(6, Jr = rn.produceChildContext(S, { isRootState: !0 }));
    }
  }, [
    _,
    ce,
    te,
    kt,
    Nt,
    Vt,
    Jr,
    i,
    s,
    Ae,
    ee,
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
    U,
    R,
    $,
    ue,
    T,
    X,
    le,
    C,
    M,
    P,
    H,
    se,
    de,
    We,
    Ke,
    ke,
    et,
    fe,
    jr,
    pe,
    De,
    rn,
    o,
    wn
  ];
}
class W3 extends Rr {
  constructor(r) {
    super(), Or(
      this,
      r,
      H3,
      O3,
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
const U3 = 8;
class K3 {
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
        if (++o > U3) {
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
const Ii = 8;
class X3 {
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
    (Math.abs(e) > Ii || Math.abs(n) > Ii) && (Math.abs(e) > Math.abs(n) ? e > Ii ? this.processActions("swipe_right") : e < -Ii && this.processActions("swipe_left") : n > Ii ? this.processActions("swipe_down") : n < -Ii && this.processActions("swipe_up"), this.startCoords = void 0);
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
function G3(t) {
  return t instanceof HTMLElement;
}
function Q3(t) {
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
      const o = Array.from(e.children).filter(G3);
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
function $3(t, r = {}) {
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
function e4(t) {
  const { target: r, hydrate: e, ...n } = t, o = new W3({
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
function t4(t, r) {
  return J3(t, r).result;
}
function J3(t, r) {
  let e;
  try {
    e = el(t, {
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
  return pl((r == null ? void 0 : r.variables) || /* @__PURE__ */ new Map(), void 0, void 0, e);
}
function r4() {
  return Array.from(rs.keys());
}
function n4(t, r) {
  return el(t, {
    startRule: (r == null ? void 0 : r.type) === "json" ? "JsonStringContents" : "start"
  });
}
export {
  X3 as Gesture,
  K3 as SizeProvider,
  Y3 as createGlobalVariablesController,
  io as createVariable,
  t4 as evalExpression,
  J3 as evalExpressionWithFullResult,
  r4 as functionNames,
  Q3 as lottieExtensionBuilder,
  $3 as markdownExtensionBuilder,
  n4 as parseExpression,
  e4 as render,
  Ci as valToString,
  no as walkExpression
};
//# sourceMappingURL=client-devtool.mjs.map

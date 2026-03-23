var f_ = Object.defineProperty;
var d_ = (e, r, t) => r in e ? f_(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var Ar = (e, r, t) => d_(e, typeof r != "symbol" ? r + "" : r, t);
/*!
    DivKit v32.39.0
    https://github.com/divkit/divkit
    @licence Apache-2.0
*/
function C() {
}
const xs = (e) => e;
function jo(e, r) {
  for (const t in r) e[t] = r[t];
  return (
    /** @type {T & S} */
    e
  );
}
function Zf(e) {
  return e();
}
function Aa() {
  return /* @__PURE__ */ Object.create(null);
}
function Ur(e) {
  e.forEach(Zf);
}
function Nr(e) {
  return typeof e == "function";
}
function __(e, r) {
  return e != e ? r == r : e !== r || e && typeof e == "object" || typeof e == "function";
}
let cs;
function Xn(e, r) {
  return e === r ? !0 : (cs || (cs = document.createElement("a")), cs.href = r, e === cs.href);
}
function Vr(e, r) {
  return e != e ? r == r : e !== r;
}
function p_(e) {
  return Object.keys(e).length === 0;
}
function S(e, ...r) {
  if (e == null) {
    for (const n of r)
      n(void 0);
    return C;
  }
  const t = e.subscribe(...r);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function Tl(e) {
  let r;
  return S(e, (t) => r = t)(), r;
}
function yn(e, r, t) {
  e.$$.on_destroy.push(S(r, t));
}
function $s(e, r, t, n) {
  if (e) {
    const o = Qf(e, r, t, n);
    return e[0](o);
  }
}
function Qf(e, r, t, n) {
  return e[1] && n ? jo(t.ctx.slice(), e[1](n(r))) : t.ctx;
}
function el(e, r, t, n) {
  if (e[2] && n) {
    const o = e[2](n(t));
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
function tl(e, r, t, n, o, i) {
  if (o) {
    const s = Qf(r, t, n, i);
    e.p(s, o);
  }
}
function rl(e) {
  if (e.ctx.length > 32) {
    const r = [], t = e.ctx.length / 32;
    for (let n = 0; n < t; n++)
      r[n] = -1;
    return r;
  }
  return -1;
}
function bl(e, r, t) {
  return e.set(t), r;
}
function nl(e) {
  return e && Nr(e.destroy) ? e.destroy : C;
}
function Sa(e) {
  const r = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return r ? [parseFloat(r[1]), r[2] || "px"] : [
    /** @type {number} */
    e,
    "px"
  ];
}
const xf = typeof window < "u";
let na = xf ? () => window.performance.now() : () => Date.now(), oa = xf ? (e) => requestAnimationFrame(e) : C;
const Ti = /* @__PURE__ */ new Set();
function $f(e) {
  Ti.forEach((r) => {
    r.c(e) || (Ti.delete(r), r.f());
  }), Ti.size !== 0 && oa($f);
}
function ia(e) {
  let r;
  return Ti.size === 0 && oa($f), {
    promise: new Promise((t) => {
      Ti.add(r = { c: e, f: t });
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
function wt(e, r) {
  e.appendChild(r);
}
function ed(e) {
  if (!e) return document;
  const r = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return r && /** @type {ShadowRoot} */
  r.host ? (
    /** @type {ShadowRoot} */
    r
  ) : e.ownerDocument;
}
function g_(e) {
  const r = Me("style");
  return r.textContent = "/* empty */", h_(ed(e), r), r.sheet;
}
function h_(e, r) {
  return wt(
    /** @type {Document} */
    e.head || e,
    r
  ), r.sheet;
}
function K(e, r, t) {
  e.insertBefore(r, t || null);
}
function q(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function sn(e, r) {
  for (let t = 0; t < e.length; t += 1)
    e[t] && e[t].d(r);
}
function Me(e) {
  return document.createElement(e);
}
function xr(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function Gn(e) {
  return document.createTextNode(e);
}
function gr() {
  return Gn(" ");
}
function xt() {
  return Gn("");
}
function Ke(e, r, t, n) {
  return e.addEventListener(r, t, n), () => e.removeEventListener(r, t, n);
}
function g(e, r, t) {
  t == null ? e.removeAttribute(r) : e.getAttribute(r) !== t && e.setAttribute(r, t);
}
const m_ = ["width", "height"];
function Go(e, r) {
  const t = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const n in r)
    r[n] == null ? e.removeAttribute(n) : n === "style" ? e.style.cssText = r[n] : n === "__value" ? e.value = e[n] = r[n] : t[n] && t[n].set && m_.indexOf(n) === -1 ? e[n] = r[n] : g(e, n, r[n]);
}
function b_(e, r) {
  Object.keys(r).forEach((t) => {
    y_(e, t, r[t]);
  });
}
function y_(e, r, t) {
  const n = r.toLowerCase();
  n in e ? e[n] = typeof e[n] == "boolean" && t === "" ? !0 : t : r in e ? e[r] = typeof e[r] == "boolean" && t === "" ? !0 : t : g(e, r, t);
}
function xo(e) {
  return /-/.test(e) ? b_ : Go;
}
function w_(e) {
  return Array.from(e.childNodes);
}
function to(e, r) {
  r = "" + r, e.data !== r && (e.data = /** @type {string} */
  r);
}
function Va(e, r) {
  e.value = r == null ? "" : r;
}
function I(e, r, t, n) {
  t == null ? e.style.removeProperty(r) : e.style.setProperty(r, t, "");
}
function Fa(e, r, t) {
  for (let n = 0; n < e.options.length; n += 1) {
    const o = e.options[n];
    if (o.__value === r) {
      o.selected = !0;
      return;
    }
  }
  (!t || r !== void 0) && (e.selectedIndex = -1);
}
function k_(e) {
  const r = e.querySelector(":checked");
  return r && r.__value;
}
function td(e, r, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(e, { detail: r, bubbles: t, cancelable: n });
}
function Ia(e, r) {
  return new e(r);
}
const Ls = /* @__PURE__ */ new Map();
let Rs = 0;
function v_(e) {
  let r = 5381, t = e.length;
  for (; t--; ) r = (r << 5) - r ^ e.charCodeAt(t);
  return r >>> 0;
}
function j_(e, r) {
  const t = { stylesheet: g_(r), rules: {} };
  return Ls.set(e, t), t;
}
function Hs(e, r, t, n, o, i, s, a = 0) {
  const l = 16.666 / n;
  let c = `{
`;
  for (let w = 0; w <= 1; w += l) {
    const k = r + (t - r) * i(w);
    c += w * 100 + `%{${s(k, 1 - k)}}
`;
  }
  const u = c + `100% {${s(t, 1 - t)}}
}`, f = `__svelte_${v_(u)}_${a}`, _ = ed(e), { stylesheet: h, rules: m } = Ls.get(_) || j_(_, e);
  m[f] || (m[f] = !0, h.insertRule(`@keyframes ${f} ${u}`, h.cssRules.length));
  const p = e.style.animation || "";
  return e.style.animation = `${p ? `${p}, ` : ""}${f} ${n}ms linear ${o}ms 1 both`, Rs += 1, f;
}
function Ws(e, r) {
  const t = (e.style.animation || "").split(", "), n = t.filter(
    r ? (i) => i.indexOf(r) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), o = t.length - n.length;
  o && (e.style.animation = n.join(", "), Rs -= o, Rs || C_());
}
function C_() {
  oa(() => {
    Rs || (Ls.forEach((e) => {
      const { ownerNode: r } = e.stylesheet;
      r && q(r);
    }), Ls.clear());
  });
}
let rs;
function es(e) {
  rs = e;
}
function Hi() {
  if (!rs) throw new Error("Function called outside component initialization");
  return rs;
}
function ro(e) {
  Hi().$$.on_mount.push(e);
}
function ol(e) {
  Hi().$$.after_update.push(e);
}
function ln(e) {
  Hi().$$.on_destroy.push(e);
}
function E_() {
  const e = Hi();
  return (r, t, { cancelable: n = !1 } = {}) => {
    const o = e.$$.callbacks[r];
    if (o) {
      const i = td(
        /** @type {string} */
        r,
        t,
        { cancelable: n }
      );
      return o.slice().forEach((s) => {
        s.call(e, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function fi(e, r) {
  return Hi().$$.context.set(e, r), r;
}
function Tr(e) {
  return Hi().$$.context.get(e);
}
function zn(e, r) {
  const t = e.$$.callbacks[r.type];
  t && t.slice().forEach((n) => n.call(this, r));
}
const Fi = [], Dr = [];
let Mi = [];
const Da = [], rd = /* @__PURE__ */ Promise.resolve();
let Ml = !1;
function nd() {
  Ml || (Ml = !0, rd.then(od));
}
function Sn() {
  return nd(), rd;
}
function fo(e) {
  Mi.push(e);
}
const yl = /* @__PURE__ */ new Set();
let Ai = 0;
function od() {
  if (Ai !== 0)
    return;
  const e = rs;
  do {
    try {
      for (; Ai < Fi.length; ) {
        const r = Fi[Ai];
        Ai++, es(r), A_(r.$$);
      }
    } catch (r) {
      throw Fi.length = 0, Ai = 0, r;
    }
    for (es(null), Fi.length = 0, Ai = 0; Dr.length; ) Dr.pop()();
    for (let r = 0; r < Mi.length; r += 1) {
      const t = Mi[r];
      yl.has(t) || (yl.add(t), t());
    }
    Mi.length = 0;
  } while (Fi.length);
  for (; Da.length; )
    Da.pop()();
  Ml = !1, yl.clear(), es(e);
}
function A_(e) {
  if (e.fragment !== null) {
    e.update(), Ur(e.before_update);
    const r = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, r), e.after_update.forEach(fo);
  }
}
function S_(e) {
  const r = [], t = [];
  Mi.forEach((n) => e.indexOf(n) === -1 ? r.push(n) : t.push(n)), t.forEach((n) => n()), Mi = r;
}
let Qi;
function sa() {
  return Qi || (Qi = Promise.resolve(), Qi.then(() => {
    Qi = null;
  })), Qi;
}
function _i(e, r, t) {
  e.dispatchEvent(td(`${r ? "intro" : "outro"}${t}`));
}
const ks = /* @__PURE__ */ new Set();
let Io;
function dr() {
  Io = {
    r: 0,
    c: [],
    p: Io
    // parent group
  };
}
function _r() {
  Io.r || Ur(Io.c), Io = Io.p;
}
function W(e, r) {
  e && e.i && (ks.delete(e), e.i(r));
}
function re(e, r, t, n) {
  if (e && e.o) {
    if (ks.has(e)) return;
    ks.add(e), Io.c.push(() => {
      ks.delete(e), n && (t && e.d(1), n());
    }), e.o(r);
  } else n && n();
}
const la = { duration: 0 };
function il(e, r, t) {
  const n = { direction: "in" };
  let o = r(e, t, n), i = !1, s, a, l = 0;
  function c() {
    s && Ws(e, s);
  }
  function u() {
    const {
      delay: _ = 0,
      duration: h = 300,
      easing: m = xs,
      tick: p = C,
      css: w
    } = o || la;
    w && (s = Hs(e, 0, 1, h, _, m, w, l++)), p(0, 1);
    const k = na() + _, N = k + h;
    a && a.abort(), i = !0, fo(() => _i(e, !0, "start")), a = ia((R) => {
      if (i) {
        if (R >= N)
          return p(1, 0), _i(e, !0, "end"), c(), i = !1;
        if (R >= k) {
          const L = m((R - k) / h);
          p(L, 1 - L);
        }
      }
      return i;
    });
  }
  let f = !1;
  return {
    start() {
      f || (f = !0, Ws(e), Nr(o) ? (o = o(n), sa().then(u)) : u());
    },
    invalidate() {
      f = !1;
    },
    end() {
      i && (c(), i = !1);
    }
  };
}
function id(e, r, t) {
  const n = { direction: "out" };
  let o = r(e, t, n), i = !0, s;
  const a = Io;
  a.r += 1;
  let l;
  function c() {
    const {
      delay: u = 0,
      duration: f = 300,
      easing: _ = xs,
      tick: h = C,
      css: m
    } = o || la;
    m && (s = Hs(e, 1, 0, f, u, _, m));
    const p = na() + u, w = p + f;
    fo(() => _i(e, !1, "start")), "inert" in e && (l = /** @type {HTMLElement} */
    e.inert, e.inert = !0), ia((k) => {
      if (i) {
        if (k >= w)
          return h(0, 1), _i(e, !1, "end"), --a.r || Ur(a.c), !1;
        if (k >= p) {
          const N = _((k - p) / f);
          h(1 - N, N);
        }
      }
      return i;
    });
  }
  return Nr(o) ? sa().then(() => {
    o = o(n), c();
  }) : c(), {
    end(u) {
      u && "inert" in e && (e.inert = l), u && o.tick && o.tick(1, 0), i && (s && Ws(e, s), i = !1);
    }
  };
}
function Ta(e, r, t, n) {
  let i = r(e, t, { direction: "both" }), s = n ? 0 : 1, a = null, l = null, c = null, u;
  function f() {
    c && Ws(e, c);
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
      easing: k = xs,
      tick: N = C,
      css: R
    } = i || la, L = {
      start: na() + p,
      b: m
    };
    m || (L.group = Io, Io.r += 1), "inert" in e && (m ? u !== void 0 && (e.inert = u) : (u = /** @type {HTMLElement} */
    e.inert, e.inert = !0)), a || l ? l = L : (R && (f(), c = Hs(e, s, m, w, p, k, R)), m && N(0, 1), a = _(L, w), fo(() => _i(e, m, "start")), ia((ee) => {
      if (l && ee > l.start && (a = _(l, w), l = null, _i(e, a.b, "start"), R && (f(), c = Hs(
        e,
        s,
        a.b,
        a.duration,
        0,
        k,
        i.css
      ))), a) {
        if (ee >= a.end)
          N(s = a.b, 1 - s), _i(e, a.b, "end"), l || (a.b ? f() : --a.group.r || Ur(a.group.c)), a = null;
        else if (ee >= a.start) {
          const ce = ee - a.start;
          s = a.a + a.d * k(ce / a.duration), N(s, 1 - s);
        }
      }
      return !!(a || l);
    }));
  }
  return {
    run(m) {
      Nr(i) ? sa().then(() => {
        i = i({ direction: m ? "in" : "out" }), h(m);
      }) : h(m);
    },
    end() {
      f(), a = l = null;
    }
  };
}
function or(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function sd(e, r) {
  re(e, 1, 1, () => {
    r.delete(e.key);
  });
}
function ld(e, r, t, n, o, i, s, a, l, c, u, f) {
  let _ = e.length, h = i.length, m = _;
  const p = {};
  for (; m--; ) p[e[m].key] = m;
  const w = [], k = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), R = [];
  for (m = h; m--; ) {
    const T = f(o, i, m), X = t(T);
    let le = s.get(X);
    le ? R.push(() => le.p(T, r)) : (le = c(X, T), le.c()), k.set(X, w[m] = le), X in p && N.set(X, Math.abs(m - p[X]));
  }
  const L = /* @__PURE__ */ new Set(), ee = /* @__PURE__ */ new Set();
  function ce(T) {
    W(T, 1), T.m(a, u), s.set(T.key, T), u = T.first, h--;
  }
  for (; _ && h; ) {
    const T = w[h - 1], X = e[_ - 1], le = T.key, E = X.key;
    T === X ? (u = T.first, _--, h--) : k.has(E) ? !s.has(le) || L.has(le) ? ce(T) : ee.has(E) ? _-- : N.get(le) > N.get(E) ? (ee.add(le), ce(T)) : (L.add(E), _--) : (l(X, s), _--);
  }
  for (; _--; ) {
    const T = e[_];
    k.has(T.key) || l(T, s);
  }
  for (; h; ) ce(w[h - 1]);
  return Ur(R), w;
}
function No(e, r) {
  const t = {}, n = {}, o = { $$scope: 1 };
  let i = e.length;
  for (; i--; ) {
    const s = e[i], a = r[i];
    if (a) {
      for (const l in s)
        l in a || (n[l] = 1);
      for (const l in a)
        o[l] || (t[l] = a[l], o[l] = 1);
      e[i] = a;
    } else
      for (const l in s)
        o[l] = 1;
  }
  for (const s in n)
    s in t || (t[s] = void 0);
  return t;
}
function ad(e) {
  return typeof e == "object" && e !== null ? e : {};
}
function Ht(e) {
  e && e.c();
}
function Lt(e, r, t) {
  const { fragment: n, after_update: o } = e.$$;
  n && n.m(r, t), fo(() => {
    const i = e.$$.on_mount.map(Zf).filter(Nr);
    e.$$.on_destroy ? e.$$.on_destroy.push(...i) : Ur(i), e.$$.on_mount = [];
  }), o.forEach(fo);
}
function Rt(e, r) {
  const t = e.$$;
  t.fragment !== null && (S_(t.after_update), Ur(t.on_destroy), t.fragment && t.fragment.d(r), t.on_destroy = t.fragment = null, t.ctx = []);
}
function V_(e, r) {
  e.$$.dirty[0] === -1 && (Fi.push(e), nd(), e.$$.dirty.fill(0)), e.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function Or(e, r, t, n, o, i, s = null, a = [-1]) {
  const l = rs;
  es(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: C,
    not_equal: o,
    bound: Aa(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(r.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: Aa(),
    dirty: a,
    skip_bound: !1,
    root: r.target || l.$$.root
  };
  s && s(c.root);
  let u = !1;
  if (c.ctx = t ? t(e, r.props || {}, (f, _, ...h) => {
    const m = h.length ? h[0] : _;
    return c.ctx && o(c.ctx[f], c.ctx[f] = m) && (!c.skip_bound && c.bound[f] && c.bound[f](m), u && V_(e, f)), _;
  }) : [], c.update(), u = !0, Ur(c.before_update), c.fragment = n ? n(c.ctx) : !1, r.target) {
    if (r.hydrate) {
      const f = w_(r.target);
      c.fragment && c.fragment.l(f), f.forEach(q);
    } else
      c.fragment && c.fragment.c();
    r.intro && W(e.$$.fragment), Lt(e, r.target, r.anchor), od();
  }
  es(l);
}
class Br {
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
    Rt(this, 1), this.$destroy = C;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(r, t) {
    if (!Nr(t))
      return C;
    const n = this.$$.callbacks[r] || (this.$$.callbacks[r] = []);
    return n.push(t), () => {
      const o = n.indexOf(t);
      o !== -1 && n.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(r) {
    this.$$set && !p_(r) && (this.$$.skip_bound = !0, this.$$set(r), this.$$.skip_bound = !1);
  }
}
const F_ = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(F_);
const Si = [];
function I_(e, r) {
  return {
    subscribe: Do(e, r).subscribe
  };
}
function Do(e, r = C) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function o(a) {
    if (__(e, a) && (e = a, t)) {
      const l = !Si.length;
      for (const c of n)
        c[1](), Si.push(c, e);
      if (l) {
        for (let c = 0; c < Si.length; c += 2)
          Si[c][0](Si[c + 1]);
        Si.length = 0;
      }
    }
  }
  function i(a) {
    o(a(e));
  }
  function s(a, l = C) {
    const c = [a, l];
    return n.add(c), n.size === 1 && (t = r(o, i) || C), a(e), () => {
      n.delete(c), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Wi(e, r, t) {
  const n = !Array.isArray(e), o = n ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = r.length < 2;
  return I_(t, (s, a) => {
    let l = !1;
    const c = [];
    let u = 0, f = C;
    const _ = () => {
      if (u)
        return;
      f();
      const m = r(n ? c[0] : c, s, a);
      i ? s(m) : f = Nr(m) ? m : C;
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
      Ur(h), f(), l = !1;
    };
  });
}
const D_ = "appkit-root_platform_desktop", T_ = "appkit-root__clickable", M_ = "appkit-root", P_ = "appkit-root__selectable", N_ = "appkit-root__unselectable", jr = {
  root_platform_desktop: D_,
  root__clickable: T_,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  "root__any-actions": "appkit-root__any-actions",
  root: M_,
  root__selectable: P_,
  root__unselectable: N_,
  "root__only-desktop": "appkit-root__only-desktop",
  "root_restrict-scroll": "appkit-root_restrict-scroll",
  "root_disabled-context-menu": "appkit-root_disabled-context-menu"
}, Zr = Symbol("root");
function J(e, r = {}) {
  const t = e;
  return t.level = r.level || "error", r.additional && (t.additional = r.additional), t;
}
const z_ = "appkit-outer", O_ = "appkit-outer_width_content", B_ = "appkit-outer_height_content", L_ = "appkit-root__clickable", R_ = "appkit-outer__border", H_ = "appkit-outer_visibility_invisible", W_ = "appkit-outer_visibility_gone", Us = {
  outer: z_,
  outer_width_content: O_,
  outer_height_content: B_,
  root__clickable: L_,
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
  outer__border: R_,
  outer_visibility_invisible: H_,
  outer_visibility_gone: W_,
  "outer_has-action-animation": "appkit-outer_has-action-animation",
  "outer_has-custom-focus": "appkit-outer_has-custom-focus"
};
function ar(e) {
  if (!e)
    return;
  let r = "";
  for (const t in e)
    if (e.hasOwnProperty(t)) {
      if (!e[t] && e[t] !== 0)
        continue;
      r && (r += ";"), r += t + ":" + String(e[t]);
    }
  return r || void 0;
}
function ae(e) {
  if (typeof e != "number" && typeof e != "string" || !e)
    return "0";
  const r = Number(e);
  return Number.isNaN(r) ? "0" : Math.ceil(r * 1e3) / 1e4 + "em";
}
function on(e) {
  let r = ae(e);
  return r === "0" && (r += "em"), r;
}
function cd(e, r) {
  for (; e.length < r; )
    e = "0" + e;
  return e;
}
function fr(e, r = 1, t = "transparent") {
  if (e = (typeof e == "string" && e || "").toLowerCase(), e.charAt(0) !== "#")
    return t;
  const n = _o(e);
  return n ? (n.a *= r, aa(n)) : t;
}
function U_(e, r, t = "transparent") {
  if (e = (typeof e == "string" && e || "").toLowerCase(), e.charAt(0) !== "#")
    return t;
  const n = _o(e);
  return n ? (n.a = r, aa(n)) : t;
}
function aa(e) {
  return e.a === 255 ? `#${[e.r, e.g, e.b].map((r) => cd(Math.round(r).toString(16), 2)).join("")}` : `rgba(${e.r},${e.g},${e.b},${(e.a / 255).toFixed(2)})`;
}
function _o(e) {
  const r = (
    // #AARRGGBB
    e.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #ARGB
    e.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])$/i) || // #RRGGBB
    e.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #RGB
    e.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)
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
    const [t, n, o, i] = r, s = n.length === 2 ? n : n + n, a = o.length === 2 ? o : o + o, l = i.length === 2 ? i : i + i;
    return {
      a: 255,
      r: parseInt(s, 16),
      g: parseInt(a, 16),
      b: parseInt(l, 16)
    };
  }
  return null;
}
function Pl(e) {
  let r = String(e);
  return r.indexOf("&") > -1 && (r = r.replace(/&/g, "&amp;")), r.indexOf("<") > -1 && (r = r.replace(/</g, "&lt;")), r.indexOf(">") > -1 && (r = r.replace(/>/g, "&gt;")), r.indexOf('"') > -1 && (r = r.replace(/"/g, "&quot;")), r;
}
const zo = Boolean;
function sl(e, r) {
  if (e.length === 1 && e[0].type === "solid")
    return J_({
      bg: e[0]
    });
  const t = e.map((n) => {
    if (n.type === "solid")
      return G_({
        bg: n
      });
    if (n.type === "gradient")
      return q_({
        bg: n
      });
    if (n.type === "image")
      return X_({
        bg: n,
        direction: r
      });
    if (n.type === "radial_gradient")
      return K_({
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
    image: t.image.join(","),
    size: t.size.join(","),
    position: t.position.join(",")
  };
}
function G_(e) {
  const r = fr(e.bg.color || "transparent");
  return {
    size: void 0,
    pos: void 0,
    image: `linear-gradient(to bottom,${r},${r})`
  };
}
function J_(e) {
  return {
    color: fr(e.bg.color || "transparent"),
    size: "auto",
    position: "50% 50%"
  };
}
function ud(e) {
  return e.every((n) => n.color && typeof n.position == "number" && n.position >= 0 && n.position <= 1) ? e.sort((n, o) => Math.abs(n.position - o.position) < 1e-6 ? 0 : n.position - o.position).map((n) => `${fr(n.color)} ${(n.position * 100).toFixed(2)}%`).join(",") : void 0;
}
function q_(e) {
  var n, o, i, s;
  if (!Array.isArray((n = e.bg) == null ? void 0 : n.colors) && !Array.isArray((o = e.bg) == null ? void 0 : o.color_map))
    return;
  const r = (i = e.bg.colors) == null ? void 0 : i.filter(zo);
  if (!(r != null && r.length) && !((s = e.bg) != null && s.color_map))
    return;
  let t;
  if (e.bg.color_map) {
    const a = ud(e.bg.color_map);
    if (!a)
      return;
    t = "linear-gradient(" + (90 - Number(e.bg.angle || 0) + "deg") + "," + a + ")";
  } else {
    if (!r)
      return;
    t = "linear-gradient(" + (90 - Number(e.bg.angle || 0) + "deg") + "," + r.map((a) => fr(a)).join(",") + ")";
  }
  return {
    size: void 0,
    pos: void 0,
    image: t
  };
}
const Y_ = {
  nearest_corner: "closest-corner",
  farthest_corner: "farthest-corner",
  nearest_side: "closest-side",
  farthest_side: "farthest-side"
};
function Ma(e) {
  if (e && typeof e == "object" && "type" in e && e.value !== void 0) {
    if (e.type === "fixed")
      return on(e.value);
    if (e.type === "relative")
      return `${Number(e.value) * 100}%`;
  }
  return "50%";
}
function K_(e) {
  var a, l, c, u;
  if (!Array.isArray((a = e.bg) == null ? void 0 : a.colors) && !Array.isArray((l = e.bg) == null ? void 0 : l.color_map))
    return;
  const r = (c = e.bg.colors) == null ? void 0 : c.filter(zo);
  if (!(r != null && r.length) && !((u = e.bg) != null && u.color_map))
    return;
  let t;
  if (e.bg.color_map ? t = ud(e.bg.color_map) : r && (t = r.map((f) => fr(f)).join(",")), !t)
    return;
  const n = e.bg.radius;
  let o;
  n && typeof n == "object" && "type" in n && n.value !== void 0 && (n.type === "fixed" ? o = on(n.value) : n.type === "relative" && (o = Y_[n.value]));
  const i = Ma(e.bg.center_x), s = Ma(e.bg.center_y);
  return {
    size: void 0,
    pos: void 0,
    image: `radial-gradient(circle ${o || "farthest-corner"} at ${i} ${s},` + t + ")"
  };
}
function X_(e) {
  var t;
  const r = (t = e.bg) == null ? void 0 : t.image_url;
  if (r)
    return {
      size: fd(e.bg.scale),
      pos: dd(e.bg, e.direction),
      image: 'url("' + Pl(r) + '")'
    };
}
function fd(e) {
  return e === "fit" ? "contain" : e === "stretch" ? "fill" : e === "no_scale" ? "none" : "cover";
}
function Z_(e) {
  return e === "none" ? "auto" : e === "fill" ? "100% 100%" : e;
}
function dd(e, r) {
  let t, n;
  return e.content_alignment_horizontal === "left" || r === "ltr" && e.content_alignment_horizontal === "start" || r === "rtl" && e.content_alignment_horizontal === "end" ? t = "0%" : e.content_alignment_horizontal === "right" || r === "ltr" && e.content_alignment_horizontal === "end" || r === "rtl" && e.content_alignment_horizontal === "start" ? t = "100%" : t = "50%", e.content_alignment_vertical === "top" ? n = "0%" : e.content_alignment_vertical === "bottom" ? n = "100%" : n = "50%", t + " " + n;
}
function $r(e, r) {
  const t = Number(e);
  return Number.isNaN(t) || t < 0 ? r : t;
}
function Pa(e, r, t) {
  return typeof r == "number" && (e && r > 0 && r <= 100 || !e && r >= 0 && r < 100) ? r : t;
}
function Q_(e) {
  return e.is_enabled !== 0 && e.is_enabled !== !1 && e.index !== void 0;
}
function x_(e, {
  visibilityActions: r,
  disappearActions: t,
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
  }), t && t.forEach((h) => {
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
  }, c = Wi(s, (h) => h);
  let u;
  const f = (h) => {
    const m = h.type === "visibility";
    o.execAnyActions([h.action], {
      logType: m ? "visible" : "disappear",
      node: e,
      processUrls: !1
    });
  }, _ = c.subscribe((h) => {
    u = h.filter(Q_);
    const m = {};
    u.forEach((k) => {
      m[k.index] = k;
    }), l();
    const p = [...new Set(u.map((k) => {
      const N = i[k.index].type === "visibility";
      return Pa(
        N,
        k.visibility_percentage,
        N ? 50 : 0
      ) / 100;
    }))];
    if (!p.length)
      return;
    const w = (k) => {
      k.forEach((N) => {
        u.forEach((R) => {
          const L = i[R.index], ee = L.type === "visibility", ce = Pa(
            ee,
            R.visibility_percentage,
            ee ? 50 : 0
          );
          let T;
          ce === 0 ? T = N.intersectionRatio >= 1e-12 : T = N.intersectionRatio >= ce / 100, (ee ? !L.visible && T : L.visible && !T) ? L.finished || (L.timer = setTimeout(() => {
            ++L.count;
            const E = R.log_limit === 0 ? 1 / 0 : R.log_limit || 1;
            L.count >= E && (L.finished = !0), f(L);
          }, $r(R.visibility_duration, 800))) : (ee ? !T : T) && L.timer && clearTimeout(L.timer), L.visible = T;
        });
      });
    };
    a = new IntersectionObserver(w, {
      threshold: p
    }), a.observe(e);
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
function Na(e, r) {
  r && e.push(r);
}
function bt(e, r, t) {
  const n = [];
  Na(n, r[e]);
  for (const o in t)
    if (t.hasOwnProperty(o)) {
      const i = t[o];
      if (i) {
        const s = `${e}_${o}` + (typeof i == "string" ? `_${i}` : "");
        Na(n, r[s]);
      }
    }
  return n.join(" ");
}
const ca = Symbol("state");
function po(e, r) {
  var s, a;
  const t = e.top || 0, n = ((s = r === "ltr" ? e.end : e.start) != null ? s : e.right) || 0, o = e.bottom || 0, i = ((a = r === "ltr" ? e.start : e.end) != null ? a : e.left) || 0;
  return t === 0 && n === 0 && o === 0 && i === 0 ? "" : ae(t) + " " + ae(n) + " " + ae(o) + " " + ae(i);
}
function ll(e) {
  if (typeof e != "number" && typeof e != "string")
    return !1;
  const r = Number(e);
  return !Number.isNaN(r);
}
function Mn(e) {
  return ll(e) && e >= 0;
}
function ns(e, r, t) {
  var o, i;
  if (!e)
    return t;
  const n = [
    e.top,
    (o = r === "ltr" ? e.end : e.start) != null ? o : e.right,
    e.bottom,
    (i = r === "ltr" ? e.start : e.end) != null ? i : e.left
  ];
  for (let s = 0; s < n.length; ++s)
    if (n[s] && !Mn(n[s]))
      return t;
  return po(e, r);
}
function $_(e, r) {
  return !Mn(e) || e === void 0 || e > 1 ? r : Number(e);
}
const ep = Object.prototype.hasOwnProperty;
function Ui(e, r) {
  if (Object.is(e, r))
    return !0;
  if (typeof e != "object" || e === null || typeof r != "object" || r === null)
    return Object.is(e, r);
  const t = Object.keys(e), n = Object.keys(r);
  if (t.length !== n.length)
    return !1;
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    if (!ep.call(r, i) || !Ui(e[i], r[i]))
      return !1;
  }
  return !0;
}
function Zo(e, r) {
  return Ui(e, r) ? r : e;
}
function tp(e, r) {
  return e === "visible" || e === "invisible" || e === "gone" ? e : r;
}
function _d(e, r) {
  return e === "linear" || e === "ease" || e === "ease_in_out" || e === "ease_in" || e === "ease_out" ? e : r;
}
function io(e, r) {
  const t = Number(e);
  return Number.isNaN(t) ? r : t;
}
function os(e) {
  const r = [];
  return e.name === "set" ? (e.items || []).forEach((t) => {
    r.push(...os(t));
  }) : r.push(e), r;
}
function gi(e, r) {
  if (!e || typeof e != "object")
    return r;
  const t = [
    "top",
    "right",
    "bottom",
    "left"
  ];
  for (let n = 0; n < t.length; ++n)
    if (e[t[n]] && !Mn(e[t[n]]))
      return r;
  return e;
}
function rp(e, r) {
  if (!e && !r)
    return {};
  if (!r)
    return e;
  if (!e)
    return r;
  const t = {};
  return [
    "top",
    "right",
    "bottom",
    "left",
    "start",
    "end"
  ].forEach((n) => {
    const o = e[n];
    o && (t[n] = o);
    const i = r[n];
    i && (t[n] = (t[n] || 0) + i);
  }), t;
}
function np(e, r) {
  const t = [
    e["top-left"],
    e["top-right"],
    e["bottom-right"],
    e["bottom-left"]
  ];
  for (let n = 0; n < t.length; ++n)
    if (t[n] && !Mn(t[n]))
      return r;
  return e;
}
function vs(e, r = 0, t = 10) {
  return [
    e["top-left"],
    e["top-right"],
    e["bottom-right"],
    e["bottom-left"]
  ].map((n) => ae((n || r) / t * 10)).join(" ");
}
function op(e) {
  var r, t, n, o, i, s;
  return ae(((t = (r = e.offset) == null ? void 0 : r.x) == null ? void 0 : t.value) || 0) + " " + ae(((o = (n = e.offset) == null ? void 0 : n.y) == null ? void 0 : o.value) || 0) + " " + ae((i = e.blur) != null ? i : 2) + " " + fr(e.color || "#000000", (s = e.alpha) != null ? s : 0.19);
}
function ip(e, r) {
  var t, n, o, i, s, a;
  return "drop-shadow(" + fr(e.color || "#000000", (t = e.alpha) != null ? t : 0.19) + " " + ae((((o = (n = e.offset) == null ? void 0 : n.x) == null ? void 0 : o.value) || 0) * 10 / r) + " " + ae((((s = (i = e.offset) == null ? void 0 : i.y) == null ? void 0 : s.value) || 0) * 10 / r) + " " + ae(((a = e.blur) != null ? a : 2) * 10 / r) + ")";
}
let wl;
function zi() {
  return typeof matchMedia > "u" ? !1 : (wl || (wl = window.matchMedia("(prefers-reduced-motion)")), wl.matches);
}
const sp = 8, lp = (e, r, t, n) => {
  let o;
  return (t || n) && typeof ResizeObserver < "u" && (o = new ResizeObserver(async () => {
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
      if (!e)
        return !1;
      const c = e.getBoundingClientRect(), u = a(t, c.width), f = a(n, c.height);
      return u || f;
    };
    for (; l(); ) {
      if (++i > sp) {
        const c = new Error("Recursive layout in size_provider");
        c.level = "warn", c.additional = {
          widthVariableName: t,
          heightVariableName: n
        }, r.logError(c);
        break;
      }
      await Sn();
    }
  }), o.observe(e)), o;
}, ua = Symbol("enabled");
function fn(e, r) {
  return e === 1 || e === 0 || e === !1 || e === !0 ? !!e : r;
}
function $o(e) {
  return [
    e.state_description,
    e.description,
    e.hint
  ].filter(Boolean).join(", ");
}
const za = 1, ei = 2;
function Oa(e, r = 1) {
  if (!(!e || typeof e.value != "number")) {
    if (e.type === "translation-fixed")
      return ae(e.value * r);
    if (e.type === "translation-percentage")
      return `${e.value * r}%`;
  }
}
function us(e, r = 1) {
  if (!(!e || typeof e.value != "number")) {
    if (e.type === "pivot-fixed")
      return ae(e.value * r);
    if (e.type === "pivot-percentage")
      return `${e.value * r}%`;
  }
}
function ap(e) {
  return e.map((r) => {
    if (r.type === "rotation") {
      if (typeof r.angle == "number") {
        const t = us(r.pivot_x) || "50%", n = us(r.pivot_y) || "50%", o = us(r.pivot_x, -1) || "-50%", i = us(r.pivot_y, -1) || "-50%";
        return `translate(${t}, ${n}) rotate(${r.angle}deg) translate(${o}, ${i})`;
      }
    } else if (r.type === "translation") {
      const t = Oa(r.x) || 0, n = Oa(r.y) || 0;
      return `translate(${t}, ${n})`;
    }
  }).filter(Boolean).join(" ");
}
const cp = "appkit-actionable__button", Ba = {
  actionable__button: cp
};
function up() {
}
const To = Symbol("action");
function Nl(e) {
  if (e.startsWith("tel:"))
    return "tel";
  if (e.startsWith("/"))
    return "https";
  const r = /^([^/]+):\/\//.exec(e);
  return r && r[1] || "";
}
function zl(e, r) {
  return r.has(e);
}
function fp(e) {
  let r = (
    /*containerElement*/
    e[7]
  ), t, n, o = (
    /*containerElement*/
    e[7] && kl(e)
  );
  return {
    c() {
      o && o.c(), t = xt();
    },
    m(i, s) {
      o && o.m(i, s), K(i, t, s), n = !0;
    },
    p(i, s) {
      /*containerElement*/
      i[7] ? r ? Vr(
        r,
        /*containerElement*/
        i[7]
      ) ? (o.d(1), o = kl(i), r = /*containerElement*/
      i[7], o.c(), o.m(t.parentNode, t)) : o.p(i, s) : (o = kl(i), r = /*containerElement*/
      i[7], o.c(), o.m(t.parentNode, t)) : r && (o.d(1), o = null, r = /*containerElement*/
      i[7]);
    },
    i(i) {
      n || (W(o, i), n = !0);
    },
    o(i) {
      re(o, i), n = !1;
    },
    d(i) {
      i && q(t), o && o.d(i);
    }
  };
}
function dp(e) {
  var f;
  let r, t, n, o, i, s;
  const a = (
    /*#slots*/
    e[31].default
  ), l = $s(
    a,
    e,
    /*$$scope*/
    e[30],
    null
  );
  let c = [
    {
      class: t = /*cls*/
      e[2] + " " + Ba.actionable__button + " " + jr["root__any-actions"] + ` ${/*isNativeActionAnimation*/
      e[6] ? jr.root__clickable : jr["root__clickable-no-transition"]} ${jr.root__unselectable} ` + /*longTapActions*/
      ((f = e[1]) != null && f.length ? jr["root_disabled-context-menu"] : "")
    },
    { style: (
      /*style*/
      e[3]
    ) },
    { role: (
      /*role*/
      e[11]
    ) },
    { "aria-checked": (
      /*isChecked*/
      e[15]
    ) },
    { type: "button" },
    {
      tabindex: n = /*componentContext*/
      e[0].fakeElement === ei ? -1 : null
    },
    /*attrs*/
    e[4]
  ], u = {};
  for (let _ = 0; _ < c.length; _ += 1)
    u = jo(u, c[_]);
  return {
    c() {
      r = Me("button"), l && l.c(), Go(r, u);
    },
    m(_, h) {
      K(_, r, h), l && l.m(r, null), r.autofocus && r.focus(), e[48](r), o = !0, i || (s = [
        nl(
          /*use*/
          e[5].call(null, r)
        ),
        Ke(
          r,
          "click",
          /*click_handler_1*/
          e[37]
        ),
        Ke(
          r,
          "keydown",
          /*onKeydown*/
          e[17]
        ),
        Ke(
          r,
          "focus",
          /*focus_handler_1*/
          e[38]
        ),
        Ke(
          r,
          "blur",
          /*blur_handler_1*/
          e[39]
        ),
        Ke(
          r,
          "pointerdown",
          /*pointerdown_handler_1*/
          e[40]
        ),
        Ke(
          r,
          "wheel",
          /*wheel_handler_1*/
          e[41]
        )
      ], i = !0);
    },
    p(_, h) {
      var m;
      l && l.p && (!o || h[0] & /*$$scope*/
      1073741824) && tl(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? el(
          a,
          /*$$scope*/
          _[30],
          h,
          null
        ) : rl(
          /*$$scope*/
          _[30]
        ),
        null
      ), Go(r, u = No(c, [
        (!o || h[0] & /*cls, isNativeActionAnimation, longTapActions*/
        70 && t !== (t = /*cls*/
        _[2] + " " + Ba.actionable__button + " " + jr["root__any-actions"] + ` ${/*isNativeActionAnimation*/
        _[6] ? jr.root__clickable : jr["root__clickable-no-transition"]} ${jr.root__unselectable} ` + /*longTapActions*/
        ((m = _[1]) != null && m.length ? jr["root_disabled-context-menu"] : ""))) && { class: t },
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
        _[0].fakeElement === ei ? -1 : null)) && { tabindex: n },
        h[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (W(l, _), o = !0);
    },
    o(_) {
      re(l, _), o = !1;
    },
    d(_) {
      _ && q(r), l && l.d(_), e[48](null), i = !1, Ur(s);
    }
  };
}
function _p(e) {
  var f;
  let r, t, n, o, i, s;
  const a = (
    /*#slots*/
    e[31].default
  ), l = $s(
    a,
    e,
    /*$$scope*/
    e[30],
    null
  );
  let c = [
    { href: (
      /*href*/
      e[9]
    ) },
    { target: (
      /*target*/
      e[13]
    ) },
    { style: (
      /*style*/
      e[3]
    ) },
    { role: (
      /*role*/
      e[11]
    ) },
    { "aria-checked": (
      /*isChecked*/
      e[15]
    ) },
    {
      class: t = /*cls*/
      e[2] + " " + jr["root__any-actions"] + " " + /*isNativeActionAnimation*/
      (e[6] ? jr.root__clickable : jr["root__clickable-no-transition"]) + " " + /*longTapActions*/
      ((f = e[1]) != null && f.length ? jr["root_disabled-context-menu"] : "")
    },
    {
      tabindex: n = /*componentContext*/
      e[0].fakeElement === ei ? -1 : null
    },
    /*attrs*/
    e[4]
  ], u = {};
  for (let _ = 0; _ < c.length; _ += 1)
    u = jo(u, c[_]);
  return {
    c() {
      r = Me("a"), l && l.c(), Go(r, u);
    },
    m(_, h) {
      K(_, r, h), l && l.m(r, null), e[47](r), o = !0, i || (s = [
        nl(
          /*use*/
          e[5].call(null, r)
        ),
        Ke(
          r,
          "click",
          /*click_handler*/
          e[32]
        ),
        Ke(
          r,
          "keydown",
          /*onKeydown*/
          e[17]
        ),
        Ke(
          r,
          "focus",
          /*focus_handler*/
          e[33]
        ),
        Ke(
          r,
          "blur",
          /*blur_handler*/
          e[34]
        ),
        Ke(
          r,
          "pointerdown",
          /*pointerdown_handler*/
          e[35]
        ),
        Ke(
          r,
          "wheel",
          /*wheel_handler*/
          e[36]
        )
      ], i = !0);
    },
    p(_, h) {
      var m;
      l && l.p && (!o || h[0] & /*$$scope*/
      1073741824) && tl(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? el(
          a,
          /*$$scope*/
          _[30],
          h,
          null
        ) : rl(
          /*$$scope*/
          _[30]
        ),
        null
      ), Go(r, u = No(c, [
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
        70 && t !== (t = /*cls*/
        _[2] + " " + jr["root__any-actions"] + " " + /*isNativeActionAnimation*/
        (_[6] ? jr.root__clickable : jr["root__clickable-no-transition"]) + " " + /*longTapActions*/
        ((m = _[1]) != null && m.length ? jr["root_disabled-context-menu"] : ""))) && { class: t },
        (!o || h[0] & /*componentContext*/
        1 && n !== (n = /*componentContext*/
        _[0].fakeElement === ei ? -1 : null)) && { tabindex: n },
        h[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (W(l, _), o = !0);
    },
    o(_) {
      re(l, _), o = !1;
    },
    d(_) {
      _ && q(r), l && l.d(_), e[47](null), i = !1, Ur(s);
    }
  };
}
function kl(e) {
  var f;
  let r, t, n, o, i, s;
  const a = (
    /*#slots*/
    e[31].default
  ), l = $s(
    a,
    e,
    /*$$scope*/
    e[30],
    null
  );
  let c = [
    {
      class: t = /*cls*/
      e[2] + " " + /*longTapActions*/
      ((f = e[1]) != null && f.length ? jr["root_disabled-context-menu"] : "") + " " + /*hasAnyActions*/
      (e[14] ? jr["root__any-actions"] : "")
    },
    { style: (
      /*style*/
      e[3]
    ) },
    { role: (
      /*role*/
      e[11]
    ) },
    { "aria-checked": (
      /*isChecked*/
      e[15]
    ) },
    {
      "aria-hidden": n = /*ariaHidden*/
      e[12] || void 0
    },
    /*attrs*/
    e[4]
  ], u = {};
  for (let _ = 0; _ < c.length; _ += 1)
    u = jo(u, c[_]);
  return {
    c() {
      r = Me(
        /*containerElement*/
        e[7]
      ), l && l.c(), xo(
        /*containerElement*/
        e[7]
      )(r, u);
    },
    m(_, h) {
      K(_, r, h), l && l.m(r, null), e[49](r), o = !0, i || (s = [
        nl(
          /*use*/
          e[5].call(null, r)
        ),
        Ke(
          r,
          "click",
          /*click_handler_2*/
          e[42]
        ),
        Ke(
          r,
          "keydown",
          /*onKeydown*/
          e[17]
        ),
        Ke(
          r,
          "focus",
          /*focus_handler_2*/
          e[43]
        ),
        Ke(
          r,
          "blur",
          /*blur_handler_2*/
          e[44]
        ),
        Ke(
          r,
          "pointerdown",
          /*pointerdown_handler_2*/
          e[45]
        ),
        Ke(
          r,
          "wheel",
          /*wheel_handler_2*/
          e[46]
        )
      ], i = !0);
    },
    p(_, h) {
      var m;
      l && l.p && (!o || h[0] & /*$$scope*/
      1073741824) && tl(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? el(
          a,
          /*$$scope*/
          _[30],
          h,
          null
        ) : rl(
          /*$$scope*/
          _[30]
        ),
        null
      ), xo(
        /*containerElement*/
        _[7]
      )(r, u = No(c, [
        (!o || h[0] & /*cls, longTapActions, hasAnyActions*/
        16390 && t !== (t = /*cls*/
        _[2] + " " + /*longTapActions*/
        ((m = _[1]) != null && m.length ? jr["root_disabled-context-menu"] : "") + " " + /*hasAnyActions*/
        (_[14] ? jr["root__any-actions"] : ""))) && { class: t },
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
      o || (W(l, _), o = !0);
    },
    o(_) {
      re(l, _), o = !1;
    },
    d(_) {
      _ && q(r), l && l.d(_), e[49](null), i = !1, Ur(s);
    }
  };
}
function pp(e) {
  let r, t, n, o;
  const i = [_p, dp, fp], s = [];
  function a(l, c) {
    return (
      /*href*/
      l[9] ? 0 : (
        /*hasJSAction*/
        l[10] ? 1 : 2
      )
    );
  }
  return r = a(e), t = s[r] = i[r](e), {
    c() {
      t.c(), n = xt();
    },
    m(l, c) {
      s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? s[r].p(l, c) : (dr(), re(s[u], 1, 1, () => {
        s[u] = null;
      }), _r(), t = s[r], t ? t.p(l, c) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n));
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      re(t), o = !1;
    },
    d(l) {
      l && q(n), s[r].d(l);
    }
  };
}
const La = 8, Ra = 400, vl = 400, gp = /* @__PURE__ */ new Set(["button", "image", "checkbox", "radio", "header"]);
function Ha(e) {
  e.preventDefault();
}
function hp(e, r, t) {
  let n, o, i = C, s = () => (i(), i = S(n, (Y) => t(29, o = Y)), n);
  e.$$.on_destroy.push(() => i());
  let { $$slots: a = {}, $$scope: l } = r, { componentContext: c } = r, { id: u = "" } = r, { actions: f = void 0 } = r, { doubleTapActions: _ = void 0 } = r, { longTapActions: h = void 0 } = r, { pressStartActions: m = void 0 } = r, { pressEndActions: p = void 0 } = r, { hoverStartActions: w = void 0 } = r, { hoverEndActions: k = void 0 } = r, { cls: N = "" } = r, { style: R = null } = r, { attrs: L = void 0 } = r, { use: ee = up } = r, { customAction: ce = null } = r, { isNativeActionAnimation: T = !0 } = r, { hasInnerFocusable: X = !1 } = r, { customAccessibility: le = void 0 } = r, { captureFocusOnAction: E = !0 } = r, { containerElement: D = "span" } = r;
  const P = Tr(Zr), U = Tr(To);
  fi(To, {
    hasAction() {
      return !!(U.hasAction() || f != null && f.length || (le == null ? void 0 : le.mode) === "exclude");
    }
  });
  let Z, be = "", Ae, Ee = -1, _e = -1, Ie = null, $ = !1, tt = !1, Xe = !1, qe, ve, De, ue, ke = !1;
  function de() {
    return (o == null ? void 0 : o.some((Y) => {
      if (Y != null && Y.typed)
        return !0;
      const At = Y == null ? void 0 : Y.url;
      if (!At)
        return !1;
      const Mt = Nl(At);
      return Mt && !zl(Mt, P.getBuiltinProtocols());
    })) || !1;
  }
  async function x(Y, At) {
    f && (Y && de() && Y.preventDefault(), c.execAnyActions(f, { node: Z, processUrls: At }));
  }
  async function fe(Y) {
    if (U.hasAction() || Y.button !== void 0 && Y.button !== 0)
      return;
    const At = Date.now();
    if (Ee > 0 && At > Ee + Ra) {
      Y.preventDefault();
      return;
    }
    if (_ != null && _.length && _e > 0 && At - _e < vl) {
      Y.preventDefault(), c.execAnyActions(_, { processUrls: !0, node: Z }), _e = -1;
      return;
    }
    if (_e = At, _ != null && _.length && Ee > 0 && At < Ee + vl) {
      Y.preventDefault(), clearTimeout(ve), ve = window.setTimeout(
        () => {
          x(void 0, !0);
        },
        vl
      );
      return;
    }
    (ce == null ? void 0 : ce(Y)) === !1 ? Y.preventDefault() : x(Y, !1);
  }
  function ie(Y) {
    U.hasAction() || (Ie = { x: Y.clientX, y: Y.clientY }, $ = !1, Ee = Date.now(), qe && clearTimeout(qe), clearTimeout(ve), c.execAnyActions(m, { node: Z }));
  }
  function Fe(Y) {
    Ie && (Math.abs(Ie.x - Y.clientX) > La || Math.abs(Ie.y - Y.clientY) > La) && ($ = !0);
  }
  function Ye(Y) {
    U.hasAction() || !Ie || Ee < 0 || (!$ && Date.now() - Ee >= Ra && (Y.stopImmediatePropagation(), c.execAnyActions(h, { processUrls: !0, node: Z })), qe && clearTimeout(qe), qe = window.setTimeout(
      () => {
        Ie = null, Ee = -1;
      },
      100
    ), c.execAnyActions(p, { node: Z }));
  }
  function Ze() {
    U.hasAction() || c.execAnyActions(w, { node: Z });
  }
  function te() {
    U.hasAction() || c.execAnyActions(k, { node: Z });
  }
  function He(Y) {
    const At = Y.target;
    At instanceof HTMLElement && (At.tagName === "INPUT" || At.contentEditable === "true") || Y.ctrlKey || Y.metaKey || Y.altKey || Y.shiftKey || Y.key === "Enter" && Array.isArray(f) && f.length && (c.execAnyActions(f), Y.preventDefault());
  }
  ro(() => {
    u && !X && P.registerFocusable(u, {
      focus() {
        Z && (be || tt) && Z.focus();
      }
    });
  }), ln(() => {
    typeof window < "u" && (window.removeEventListener("pointermove", Fe), window.removeEventListener("pointerup", Ye), window.removeEventListener("pointercancel", Ye)), u && !X && P.unregisterFocusable(u), qe && clearTimeout(qe), ve && clearTimeout(ve);
  });
  function Be(Y) {
    zn.call(this, e, Y);
  }
  function it(Y) {
    zn.call(this, e, Y);
  }
  function st(Y) {
    zn.call(this, e, Y);
  }
  function lt(Y) {
    zn.call(this, e, Y);
  }
  function kt(Y) {
    zn.call(this, e, Y);
  }
  function nt(Y) {
    zn.call(this, e, Y);
  }
  function Nt(Y) {
    zn.call(this, e, Y);
  }
  function ut(Y) {
    zn.call(this, e, Y);
  }
  function pe(Y) {
    zn.call(this, e, Y);
  }
  function ge(Y) {
    zn.call(this, e, Y);
  }
  function _t(Y) {
    zn.call(this, e, Y);
  }
  function Se(Y) {
    zn.call(this, e, Y);
  }
  function F(Y) {
    zn.call(this, e, Y);
  }
  function Ct(Y) {
    zn.call(this, e, Y);
  }
  function ft(Y) {
    zn.call(this, e, Y);
  }
  function St(Y) {
    Dr[Y ? "unshift" : "push"](() => {
      Z = Y, t(8, Z);
    });
  }
  function Tt(Y) {
    Dr[Y ? "unshift" : "push"](() => {
      Z = Y, t(8, Z);
    });
  }
  function $e(Y) {
    Dr[Y ? "unshift" : "push"](() => {
      Z = Y, t(8, Z);
    });
  }
  return e.$$set = (Y) => {
    "componentContext" in Y && t(0, c = Y.componentContext), "id" in Y && t(18, u = Y.id), "actions" in Y && t(19, f = Y.actions), "doubleTapActions" in Y && t(20, _ = Y.doubleTapActions), "longTapActions" in Y && t(1, h = Y.longTapActions), "pressStartActions" in Y && t(21, m = Y.pressStartActions), "pressEndActions" in Y && t(22, p = Y.pressEndActions), "hoverStartActions" in Y && t(23, w = Y.hoverStartActions), "hoverEndActions" in Y && t(24, k = Y.hoverEndActions), "cls" in Y && t(2, N = Y.cls), "style" in Y && t(3, R = Y.style), "attrs" in Y && t(4, L = Y.attrs), "use" in Y && t(5, ee = Y.use), "customAction" in Y && t(25, ce = Y.customAction), "isNativeActionAnimation" in Y && t(6, T = Y.isNativeActionAnimation), "hasInnerFocusable" in Y && t(26, X = Y.hasInnerFocusable), "customAccessibility" in Y && t(27, le = Y.customAccessibility), "captureFocusOnAction" in Y && t(28, E = Y.captureFocusOnAction), "containerElement" in Y && t(7, D = Y.containerElement), "$$scope" in Y && t(30, l = Y.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*customAccessibility*/
    134217728 && t(12, ke = (le == null ? void 0 : le.mode) === "exclude"), e.$$.dirty[0] & /*componentContext, actions*/
    524289 && s(t(16, n = c.getDerivedFromVars(f, void 0, !0))), e.$$.dirty[0] & /*$processedActions, customAction, href, ariaHidden, componentContext*/
    570429953) {
      if (Array.isArray(o) && (o != null && o.length))
        for (let Y = 0; Y < o.length; ++Y) {
          const At = o[Y].url;
          if (At) {
            t(9, be = At), t(13, Ae = o[Y].target || void 0);
            break;
          }
        }
      t(10, tt = !!ce), (be || Array.isArray(o) && (o != null && o.length)) && (U.hasAction() || ke) ? (t(9, be = ""), c.logError(J(new Error("Actionable element is forbidden inside other actionable element or inside accessibility mode=exlucde"), {
        level: "warn",
        additional: { actions: o }
      }))) : be && !zl(Nl(be), P.getBuiltinProtocols()) ? (t(9, be = ""), t(10, tt = !0)) : !be && Array.isArray(o) && (o != null && o.length) && (t(10, tt = !0), o.some((Y) => Y.url || Y.typed || Y.menu_items) || c.logError(J(new Error("The component has a list of actions, but does not have a real action"), {
        level: "warn",
        additional: { actions: o }
      })));
    }
    e.$$.dirty[0] & /*customAccessibility, href, hasJSAction, role*/
    134221312 && (le != null && le.type && gp.has(le.type) ? le.type === "header" ? t(11, De = "heading") : t(11, De = le.type) : be ? t(11, De = void 0) : tt && t(11, De = "button"), (De === "checkbox" || De === "radio") && typeof (le == null ? void 0 : le.is_checked) == "boolean" ? t(15, ue = le.is_checked) : t(15, ue = void 0)), e.$$.dirty[0] & /*node, href, hasJSAction, doubleTapActions, longTapActions, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions, captureFocusOnAction*/
    300943106 && Z && (be || tt || _ != null && _.length ? Z.addEventListener("click", fe) : Z.removeEventListener("click", fe), _ != null && _.length || h != null && h.length || m != null && m.length || p != null && p.length ? (Z.addEventListener("pointerdown", ie, { passive: !0 }), window.addEventListener("pointermove", Fe, { passive: !0 }), window.addEventListener("pointerup", Ye, { passive: !0 }), window.addEventListener("pointercancel", Ye, { passive: !0 })) : (Z.removeEventListener("pointerdown", ie), window.removeEventListener("pointerup", Ye), window.removeEventListener("pointermove", Fe), window.removeEventListener("pointercancel", Ye)), w != null && w.length ? Z.addEventListener("pointerenter", Ze) : Z.removeEventListener("pointerenter", Ze), k != null && k.length ? Z.addEventListener("pointerleave", te) : Z.removeEventListener("pointerleave", te), E === !1 ? Z.addEventListener("mousedown", Ha) : Z.removeEventListener("mousedown", Ha), t(14, Xe = !!(be || tt || _ != null && _.length || h != null && h.length || m != null && m.length || p != null && p.length || w != null && w.length || k != null && k.length)));
  }, [
    c,
    h,
    N,
    R,
    L,
    ee,
    T,
    D,
    Z,
    be,
    tt,
    De,
    ke,
    Ae,
    Xe,
    ue,
    n,
    He,
    u,
    f,
    _,
    m,
    p,
    w,
    k,
    ce,
    X,
    le,
    E,
    o,
    l,
    a,
    Be,
    it,
    st,
    lt,
    kt,
    nt,
    Nt,
    ut,
    pe,
    ge,
    _t,
    Se,
    F,
    Ct,
    ft,
    St,
    Tt,
    $e
  ];
}
class al extends Br {
  constructor(r) {
    super(), Or(
      this,
      r,
      hp,
      pp,
      Vr,
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
function Bn(e) {
  return ll(e) && e > 0;
}
function pd(e, r) {
  return e.map((t) => {
    if (!t) {
      r(J(new Error("Incorrect filter"), {
        level: "warn"
      }));
      return;
    }
    if (t.type === "blur") {
      if (Bn(t.radius))
        return `blur(${on(t.radius / 2)})`;
    } else {
      if (t.type === "rtl_mirror")
        return;
      r(J(new Error("Unknown filter"), {
        level: "warn",
        additional: {
          filter: t.type
        }
      }));
    }
  }).filter(Boolean).join(" ");
}
function Wa(e, r, t) {
  const n = e.slice();
  return n[6] = r[t], n;
}
function mp(e) {
  let r, t;
  return {
    c() {
      r = Me("span"), g(r, "class", di["outer-background__item"]), g(r, "style", t = ar(
        /*item*/
        e[6].style
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o & /*styles*/
      2 && t !== (t = ar(
        /*item*/
        n[6].style
      )) && g(r, "style", t);
    },
    d(n) {
      n && q(r);
    }
  };
}
function bp(e) {
  let r, t, n, o, i;
  return {
    c() {
      r = Me("img"), Xn(r.src, t = /*item*/
      e[6].image_url) || g(r, "src", t), g(r, "alt", ""), g(r, "aria-hidden", "true"), g(r, "loading", "lazy"), g(r, "decoding", "async"), g(r, "class", di["outer-background__item"]), g(r, "style", n = ar(
        /*item*/
        e[6].style
      ));
    },
    m(s, a) {
      K(s, r, a), o || (i = Ke(
        r,
        "error",
        /*onImgError*/
        e[2]
      ), o = !0);
    },
    p(s, a) {
      a & /*styles*/
      2 && !Xn(r.src, t = /*item*/
      s[6].image_url) && g(r, "src", t), a & /*styles*/
      2 && n !== (n = ar(
        /*item*/
        s[6].style
      )) && g(r, "style", n);
    },
    d(s) {
      s && q(r), o = !1, i();
    }
  };
}
function Ua(e) {
  let r;
  function t(i, s) {
    return (
      /*item*/
      i[6].image_url ? bp : mp
    );
  }
  let n = t(e), o = n(e);
  return {
    c() {
      o.c(), r = xt();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = t(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && q(r), o.d(i);
    }
  };
}
function yp(e) {
  let r, t, n = or(
    /*styles*/
    e[1]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Ua(Wa(e, n, i));
  return {
    c() {
      r = Me("span");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", t = di["outer-background"] + /*radius*/
      (e[0] ? " " + di["outer-background_clip"] : "")), I(
        r,
        "border-radius",
        /*radius*/
        e[0]
      );
    },
    m(i, s) {
      K(i, r, s);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(r, null);
    },
    p(i, [s]) {
      if (s & /*styles, onImgError*/
      6) {
        n = or(
          /*styles*/
          i[1]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Wa(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Ua(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s & /*radius*/
      1 && t !== (t = di["outer-background"] + /*radius*/
      (i[0] ? " " + di["outer-background_clip"] : "")) && g(r, "class", t), s & /*radius*/
      1 && I(
        r,
        "border-radius",
        /*radius*/
        i[0]
      );
    },
    i: C,
    o: C,
    d(i) {
      i && q(r), sn(o, i);
    }
  };
}
function wp(e, r, t) {
  let n, { direction: o } = r, { componentContext: i } = r, { background: s = [] } = r, { radius: a = "" } = r;
  function l(c) {
    c.target && "classList" in c.target && c.target.classList.add(di["outer-background__item_hidden"]);
  }
  return e.$$set = (c) => {
    "direction" in c && t(3, o = c.direction), "componentContext" in c && t(4, i = c.componentContext), "background" in c && t(5, s = c.background), "radius" in c && t(0, a = c.radius);
  }, e.$$.update = () => {
    e.$$.dirty & /*background, direction, componentContext*/
    56 && t(1, n = s.map((c) => {
      const u = {}, f = { style: u };
      if (c.type === "nine_patch_image" && c.insets)
        u["border-image"] = `url("${c.image_url}") ${c.insets.top || 0} ${c.insets.right || 0} ${c.insets.bottom || 0} ${c.insets.left || 0} fill`, u["border-image-width"] = "auto";
      else {
        const _ = sl([c], o);
        c.type === "solid" && (u["background-color"] = _.color), c.type === "gradient" && (u["background-image"] = _.image), c.type === "image" && (u.opacity = Number(c.alpha), f.image_url = c.image_url, u["object-fit"] = _.size, u["object-position"] = _.position, Array.isArray(c.filters) && c.filters.length && (u.filter = pd(c.filters, i.logError), o === "rtl" && c.filters.some((h) => h.type === "rtl_mirror") && (u.transform = "scale(-1,1)")));
      }
      return f;
    }));
  }, [a, n, l, o, i, s];
}
class kp extends Br {
  constructor(r) {
    super(), Or(this, r, wp, yp, Vr, {
      direction: 3,
      componentContext: 4,
      background: 5,
      radius: 0
    });
  }
}
const vp = (e) => ({
  hasCustomFocus: e[0] & /*hasCustomFocus*/
  131072,
  widthMin: e[0] & /*widthMin*/
  64,
  widthMax: e[0] & /*widthMax*/
  128,
  heightMin: e[0] & /*heightMin*/
  256,
  heightMax: e[0] & /*heightMax*/
  512
}), Ga = (e) => ({
  focusHandler: (
    /*focusHandler*/
    e[51]
  ),
  blurHandler: (
    /*blurHandler*/
    e[52]
  ),
  hasCustomFocus: (
    /*hasCustomFocus*/
    e[17]
  ),
  widthMin: (
    /*widthMin*/
    e[6]
  ),
  widthMax: (
    /*widthMax*/
    e[7]
  ),
  heightMin: (
    /*heightMin*/
    e[8]
  ),
  heightMax: (
    /*heightMax*/
    e[9]
  )
});
function Ja(e) {
  let r, t;
  return r = new al({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      id: (
        /*componentContext*/
        e[0].json.id
      ),
      use: (
        /*useAction*/
        e[50]
      ),
      cls: (
        /*cls*/
        e[1] + " " + bt(
          "outer",
          Us,
          /*mods*/
          e[31]
        ) + /*customClass*/
        (e[30] ? ` ${/*customClass*/
        e[30]}` : "") + /*hoverClassName*/
        (e[18] ? ` ${/*hoverClassName*/
        e[18]}` : "")
      ),
      style: ar(
        /*stl*/
        e[29]
      ),
      actions: (
        /*actions*/
        e[25]
      ),
      doubleTapActions: (
        /*doubleTapActions*/
        e[26]
      ),
      longTapActions: (
        /*longTapActions*/
        e[27]
      ),
      pressStartActions: (
        /*pressStartActions*/
        e[12]
      ),
      pressEndActions: (
        /*pressEndActions*/
        e[13]
      ),
      hoverStartActions: (
        /*hoverStartActions*/
        e[14]
      ),
      hoverEndActions: (
        /*hoverEndActions*/
        e[15]
      ),
      attrs: (
        /*attrs*/
        e[21]
      ),
      hasInnerFocusable: (
        /*hasInnerFocusable*/
        e[2]
      ),
      isNativeActionAnimation: !/*actionAnimationList*/
      e[16].length || Ka(
        /*actionAnimationList*/
        e[16]
      ),
      customAccessibility: (
        /*$jsonAccessibility*/
        e[20]
      ),
      captureFocusOnAction: (
        /*captureFocusOnAction*/
        e[28]
      ),
      containerElement: (
        /*containerElement*/
        e[3]
      ),
      $$slots: { default: [jp] },
      $$scope: { ctx: e }
    }
  }), r.$on(
    "focus",
    /*focusHandler*/
    e[51]
  ), r.$on(
    "blur",
    /*blurHandler*/
    e[52]
  ), r.$on(
    "pointerdown",
    /*pointerdown_handler*/
    e[147]
  ), r.$on(
    "wheel",
    /*wheel_handler*/
    e[148]
  ), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
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
      n[1] + " " + bt(
        "outer",
        Us,
        /*mods*/
        n[31]
      ) + /*customClass*/
      (n[30] ? ` ${/*customClass*/
      n[30]}` : "") + /*hoverClassName*/
      (n[18] ? ` ${/*hoverClassName*/
      n[18]}` : "")), o[0] & /*stl*/
      536870912 && (i.style = ar(
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
      n[16].length || Ka(
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function qa(e) {
  let r, t;
  return r = new kp({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      direction: (
        /*$direction*/
        e[19]
      ),
      background: (
        /*background*/
        e[10]
      ),
      radius: (
        /*backgroundRadius*/
        e[5]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Ya(e) {
  let r, t;
  return {
    c() {
      r = Me("span"), g(r, "class", Us.outer__border), g(r, "style", t = ar(
        /*borderElemStyle*/
        e[4]
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o[0] & /*borderElemStyle*/
      16 && t !== (t = ar(
        /*borderElemStyle*/
        n[4]
      )) && g(r, "style", t);
    },
    d(n) {
      n && q(r);
    }
  };
}
function jp(e) {
  let r, t, n, o = (
    /*hasSeparateBg*/
    e[11] && qa(e)
  );
  const i = (
    /*#slots*/
    e[146].default
  ), s = $s(
    i,
    e,
    /*$$scope*/
    e[149],
    Ga
  );
  let a = (
    /*hasBorder*/
    e[22] && Ya(e)
  );
  return {
    c() {
      o && o.c(), r = xt(), s && s.c(), a && a.c(), t = xt();
    },
    m(l, c) {
      o && o.m(l, c), K(l, r, c), s && s.m(l, c), a && a.m(l, c), K(l, t, c), n = !0;
    },
    p(l, c) {
      /*hasSeparateBg*/
      l[11] ? o ? (o.p(l, c), c[0] & /*hasSeparateBg*/
      2048 && W(o, 1)) : (o = qa(l), o.c(), W(o, 1), o.m(r.parentNode, r)) : o && (dr(), re(o, 1, 1, () => {
        o = null;
      }), _r()), s && s.p && (!n || c[0] & /*hasCustomFocus, widthMin, widthMax, heightMin, heightMax*/
      132032 | c[4] & /*$$scope*/
      33554432) && tl(
        s,
        i,
        l,
        /*$$scope*/
        l[149],
        n ? el(
          i,
          /*$$scope*/
          l[149],
          c,
          vp
        ) : rl(
          /*$$scope*/
          l[149]
        ),
        Ga
      ), /*hasBorder*/
      l[22] ? a ? a.p(l, c) : (a = Ya(l), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), a = null);
    },
    i(l) {
      n || (W(o), W(s, l), n = !0);
    },
    o(l) {
      re(o), re(s, l), n = !1;
    },
    d(l) {
      l && (q(r), q(t)), o && o.d(l), s && s.d(l), a && a.d(l);
    }
  };
}
function Cp(e) {
  let r, t, n = !/*hasWidthError*/
  e[23] && !/*hasHeightError*/
  e[24] && Ja(e);
  return {
    c() {
      n && n.c(), r = xt();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), t = !0;
    },
    p(o, i) {
      !/*hasWidthError*/
      o[23] && !/*hasHeightError*/
      o[24] ? n ? (n.p(o, i), i[0] & /*hasWidthError, hasHeightError*/
      25165824 && W(n, 1)) : (n = Ja(o), n.c(), W(n, 1), n.m(r.parentNode, r)) : n && (dr(), re(n, 1, 1, () => {
        n = null;
      }), _r());
    },
    i(o) {
      t || (W(n), t = !0);
    },
    o(o) {
      re(n), t = !1;
    },
    d(o) {
      o && q(r), n && n.d(o);
    }
  };
}
const Ep = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
}, Ap = {
  left: "end",
  center: "center",
  right: "start",
  start: "start",
  end: "end"
}, Sp = {
  top: "start",
  center: "center",
  bottom: "end",
  baseline: "baseline"
}, jl = (e) => `The component id with the "${e}" property for state change is missing. Either specify the id, or specify the "transition_trigger" property without "state_change" value.`;
function Ka(e) {
  return e.some((r) => r.name === "native");
}
function Vp(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, ee, ce, T, X, le, E, D, P, U, Z, be, Ae, Ee, _e, Ie, $, tt, Xe, qe, ve, De, ue, ke, de, x, fe, ie = C, Fe = () => (ie(), ie = S(k, (ot) => t(130, fe = ot)), k), Ye, Ze = C, te = () => (Ze(), Ze = S(N, (ot) => t(131, Ye = ot)), N), He, Be = C, it = () => (Be(), Be = S(w, (ot) => t(132, He = ot)), w), st, lt = C, kt = () => (lt(), lt = S(R, (ot) => t(133, st = ot)), R), nt, Nt = C, ut = () => (Nt(), Nt = S(p, (ot) => t(134, nt = ot)), p), pe, ge = C, _t = () => (ge(), ge = S(m, (ot) => t(135, pe = ot)), m), Se, F = C, Ct = () => (F(), F = S(o, (ot) => t(136, Se = ot)), o), ft, St = C, Tt = () => (St(), St = S(h, (ot) => t(20, ft = ot)), h), $e, Y = C, At = () => (Y(), Y = S(_, (ot) => t(137, $e = ot)), _), Mt, Qt = C, Jt = () => (Qt(), Qt = S(f, (ot) => t(138, Mt = ot)), f), he, Le = C, pt = () => (Le(), Le = S(u, (ot) => t(139, he = ot)), u), ye, xe = C, Oe = () => (xe(), xe = S(a, (ot) => t(140, ye = ot)), a), er, ze = C, yt = () => (ze(), ze = S(c, (ot) => t(141, er = ot)), c), Ft, It = C, cr = () => (It(), It = S(l, (ot) => t(142, Ft = ot)), l), Pe, vt = C, nr = () => (vt(), vt = S(s, (ot) => t(143, Pe = ot)), s), $t, Xt = C, pr = () => (Xt(), Xt = S(i, (ot) => t(144, $t = ot)), i), kr;
  e.$$.on_destroy.push(() => ie()), e.$$.on_destroy.push(() => Ze()), e.$$.on_destroy.push(() => Be()), e.$$.on_destroy.push(() => lt()), e.$$.on_destroy.push(() => Nt()), e.$$.on_destroy.push(() => ge()), e.$$.on_destroy.push(() => F()), e.$$.on_destroy.push(() => St()), e.$$.on_destroy.push(() => Y()), e.$$.on_destroy.push(() => Qt()), e.$$.on_destroy.push(() => Le()), e.$$.on_destroy.push(() => xe()), e.$$.on_destroy.push(() => ze()), e.$$.on_destroy.push(() => It()), e.$$.on_destroy.push(() => vt()), e.$$.on_destroy.push(() => Xt());
  let { $$slots: Pt = {}, $$scope: yr } = r, { componentContext: G } = r, { cls: dt = "" } = r, { style: Ut = void 0 } = r, { layoutParams: jt = {} } = r, { customDescription: wr = !1 } = r, { customPaddings: Sr = !1 } = r, { customActions: hr = "" } = r, { additionalPaddings: Ir = null } = r, { heightByAspect: Gr = !1 } = r, { parentOf: tr = void 0 } = r, { parentOfSimpleMode: rt = void 0 } = r, { replaceItems: Et = void 0 } = r, { hasInnerFocusable: Zt = !1 } = r, { alwaysCustomFocus: Yt = !1 } = r, { containerElement: ur = "span" } = r, { devapi: at = void 0 } = r;
  const ne = Tr(Zr), mt = Tr(ca), { isEnabled: rr } = Tr(ua);
  yn(e, rr, (ot) => t(145, kr = ot));
  const mr = ne.direction;
  yn(e, mr, (ot) => t(19, x = ot));
  let ir, v, oe = null, d = [], z = {}, Te = {}, We = !1, we = 1, O = "transparent", Dt = 0, zt = {
    "top-left": 0,
    "top-right": 0,
    "bottom-right": 0,
    "bottom-left": 0
  }, Ue = "", ct = null, Gt = "", Fr = {}, br, zr, Vn, Ce = 0, qr = 0, Yr = 0, hn = !1, y = !1, j = {}, A, se, B, Qe = 0, Ve = 0, qt = 0, Vt = !1, Ge = !1, Kt = 1, ht, Cr, Er, mn, en = [], rn = !1, nn = !1, Cn, Jn, Ln, xn = [], Wt = [], b = [], V = [], Q = [], M = [], je = [], me = [], Ot = [], Bt = [], Jr = "", Mr, Lr, Co, no, qn = !1, Fn = "visible", qo, Je, vr = !1, an = !0, Ci, Tn, gn, mo;
  function si() {
    t(72, ct = null), t(73, Gt = ""), t(86, Kt = 1), t(98, qn = !1), t(99, Fn = "visible"), t(100, qo = void 0), t(28, an = !0), en = G.fakeElement ? [] : G.json.transition_triggers || ["state_change", "visibility_change"], t(89, rn = en.indexOf("state_change") !== -1), nn = en.indexOf("visibility_change") !== -1, ir && Ca(ir), Tn == null || Tn(), kr && t(102, Tn = ne.processVariableTriggers(G, G.json.variable_triggers));
  }
  function Ei(ot, Kr) {
    if (!Array.isArray(tr) || !Et || rt && (Array.isArray(Kr) ? Kr.length : 0) !== 1)
      return;
    const En = tr.findIndex((cn) => (cn == null ? void 0 : cn.id) === ot), Rn = tr.slice();
    Rn.splice(En, 1, ...(Kr || []).map((cn) => ({ json: cn, id: cn == null ? void 0 : cn.id }))), t(53, tr = Rn), Et(Rn.map((cn) => cn == null ? void 0 : cn.json));
  }
  function o_(ot) {
    const Kr = io(ot.start_value, 1), En = io(ot.end_value, 1), Rn = $r(ot.start_delay, 0), cn = zi() ? 0 : $r(ot.duration, 300), bo = _d(ot.interpolator, "ease_in_out").replace(/_/g, "-");
    switch (ot.name) {
      case "fade":
        return t(94, Mr = Kr), t(95, Lr = En), `opacity ${cn}ms ${bo} ${Rn}ms`;
      case "scale":
        return t(96, Co = Kr), t(97, no = En), `transform ${cn}ms ${bo} ${Rn}ms`;
      case "native":
      case "no_animation":
        return "";
      default:
        return G.logError(J(new Error("Unknown action_animation name"), {
          additional: { animation: ot.name }
        })), "";
    }
  }
  async function i_(ot) {
    t(99, Fn = ot);
    const Kr = ot === "visible" ? "in" : "out", En = Kr === "in" ? G.json.transition_in : G.json.transition_out;
    if (nn && En) {
      let Rn;
      ot === "gone" && (Rn = ir.getBoundingClientRect()), await Sn(), Kr === "in" && t(91, Jn = !0), mt.runVisibilityTransition(
        {
          ...G.json,
          visibility: "visible"
        },
        G,
        En,
        ir,
        Kr,
        Rn
      ).then(() => {
        Kr === "in" && t(91, Jn = !1);
      }).catch((cn) => {
        throw Kr === "in" && t(91, Jn = !1), cn;
      });
    }
  }
  function ja() {
    if (oe && ir) {
      const ot = ne.getExtensionContext(G);
      oe.forEach((Kr) => {
        var En;
        (En = Kr.unmountView) == null || En.call(Kr, ir, ot);
      }), oe = null;
    }
  }
  function s_() {
    if (oe != null && oe.length) {
      const ot = ne.getExtensionContext(G);
      oe.forEach((Kr) => {
        var En;
        (En = Kr.updateView) == null || En.call(Kr, ir, ot);
      });
    }
  }
  let Eo = null, Oo = null, li = "desktop";
  function qi() {
    Eo != null && Eo.matches ? t(105, li = "mobile") : Oo != null && Oo.matches ? t(105, li = "tablet") : t(105, li = "desktop");
  }
  let lo = null, Yi = "";
  function Ca(ot) {
    var Ki, Xi, Zi;
    gn == null || gn.destroy(), t(65, ir = ot), rn && G.json.transition_in && (G.id ? mt.registerChildWithTransitionIn(G.json, G, G.json.transition_in, ot).then(() => {
      t(90, Cn = !1);
    }).catch((Yo) => {
      throw t(90, Cn = !1), Yo;
    }) : G.logError(J(new Error(jl("transition_in")), { level: "warn" }))), rn && G.json.transition_out && (G.id ? mt.registerChildWithTransitionOut(G.json, G, G.json.transition_out, ot) : G.logError(J(new Error(jl("transition_out")), { level: "warn" }))), G.fakeElement || (G.json.transition_change && !G.id && G.logError(J(new Error(jl("transition_change")), { level: "warn" })), mt.registerChildWithTransitionChange(G.json, G, G.json.transition_change, ot).then(() => {
      t(92, Ln = !1);
    }).catch((Yo) => {
      throw t(92, Ln = !1), Yo;
    }));
    const Kr = !G.fakeElement || G.fakeElement === ei, En = Kr ? G.json.visibility_actions || G.json.visibility_action && [G.json.visibility_action] : [], Rn = Kr ? G.json.disappear_actions : [];
    let cn;
    (Array.isArray(En) && En.length || Array.isArray(Rn) && Rn.length) && (cn = x_(ot, {
      visibilityActions: En,
      disappearActions: Rn,
      rootCtx: ne,
      componentContext: G
    }));
    const bo = G.id;
    return bo && (mo == null || mo(), mo = ne.registerId(bo, {
      context: () => G,
      node: () => ir
    }), mt.registerChild(bo)), (Ki = G.json.tooltips) == null || Ki.forEach((Yo) => {
      ne.registerTooltip(ot, Yo);
    }), Je && (Je.disconnect(), Je = void 0), Je = lp(ir, G, (Xi = G.json.layout_provider) == null ? void 0 : Xi.width_variable_name, (Zi = G.json.layout_provider) == null ? void 0 : Zi.height_variable_name), gn = {
      destroy() {
        mo && (mo(), mo = void 0), bo && mt.unregisterChild(bo), cn && cn.destroy();
      }
    }, gn;
  }
  function l_() {
    G.json.focus && ((Yt || !Tl(ne.isPointerFocus)) && t(17, vr = !0), G.execAnyActions(V));
  }
  function a_() {
    G.json.focus && (t(17, vr = !1), G.execAnyActions(Q));
  }
  ol(s_), ln(() => {
    var ot;
    d.forEach((Kr) => {
      ne.unregisterParentOf(Kr);
    }), t(66, d = []), Je && (Je.disconnect(), Je = void 0), (ot = G.json.tooltips) == null || ot.forEach((Kr) => {
      ne.unregisterTooltip(Kr);
    }), Tn == null || Tn(), ja(), lo && (lo.remove(), t(106, lo = null)), Eo && (Eo.removeEventListener("change", qi), t(103, Eo = null)), Oo && (Oo.removeEventListener("change", qi), t(104, Oo = null));
  });
  function c_(ot) {
    zn.call(this, e, ot);
  }
  function u_(ot) {
    zn.call(this, e, ot);
  }
  return e.$$set = (ot) => {
    "componentContext" in ot && t(0, G = ot.componentContext), "cls" in ot && t(1, dt = ot.cls), "style" in ot && t(54, Ut = ot.style), "layoutParams" in ot && t(55, jt = ot.layoutParams), "customDescription" in ot && t(56, wr = ot.customDescription), "customPaddings" in ot && t(57, Sr = ot.customPaddings), "customActions" in ot && t(58, hr = ot.customActions), "additionalPaddings" in ot && t(59, Ir = ot.additionalPaddings), "heightByAspect" in ot && t(60, Gr = ot.heightByAspect), "parentOf" in ot && t(53, tr = ot.parentOf), "parentOfSimpleMode" in ot && t(61, rt = ot.parentOfSimpleMode), "replaceItems" in ot && t(62, Et = ot.replaceItems), "hasInnerFocusable" in ot && t(2, Zt = ot.hasInnerFocusable), "alwaysCustomFocus" in ot && t(63, Yt = ot.alwaysCustomFocus), "containerElement" in ot && t(3, ur = ot.containerElement), "devapi" in ot && t(64, at = ot.devapi), "$$scope" in ot && t(149, yr = ot.$$scope);
  }, e.$$.update = () => {
    var ot, Kr, En, Rn, cn, bo, Ki, Xi, Zi, Yo, Ea;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(129, n = G.origJson), e.$$.dirty[4] & /*origJson*/
    32 && n && si(), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[3] & /*prevTriggersUnsubscribe*/
    512 | e.$$.dirty[4] & /*$isEnabled*/
    2097152 && (kr ? (Tn == null || Tn(), t(102, Tn = ne.processVariableTriggers(G, G.json.variable_triggers))) : Tn == null || Tn()), e.$$.dirty[0] & /*componentContext*/
    1 && Ct(t(47, o = G.getDerivedFromVars(G.json.focus))), e.$$.dirty[0] & /*componentContext*/
    1 && pr(t(46, i = G.getDerivedFromVars(G.json.border))), e.$$.dirty[0] & /*componentContext*/
    1 && nr(t(45, s = G.getDerivedFromVars(G.json.paddings))), e.$$.dirty[0] & /*componentContext*/
    1 && Oe(t(44, a = G.getDerivedFromVars(G.json.margins))), e.$$.dirty[0] & /*componentContext*/
    1 && cr(t(43, l = G.getDerivedFromVars(G.json.width))), e.$$.dirty[0] & /*componentContext*/
    1 && yt(t(42, c = G.getDerivedFromVars(G.json.alignment_horizontal))), e.$$.dirty[0] & /*componentContext*/
    1 && pt(t(41, u = G.getDerivedFromVars(G.json.height))), e.$$.dirty[0] & /*componentContext*/
    1 && Jt(t(40, f = G.getDerivedFromVars(G.json.alignment_vertical))), e.$$.dirty[0] & /*componentContext*/
    1 && At(t(39, _ = G.getDerivedFromVars(G.json.alpha))), e.$$.dirty[0] & /*componentContext*/
    1 && Tt(t(38, h = G.getDerivedFromVars(G.json.accessibility))), e.$$.dirty[0] & /*componentContext*/
    1 && _t(t(37, m = G.getDerivedFromVars(G.json.background))), e.$$.dirty[0] & /*componentContext*/
    1 && ut(t(36, p = G.getDerivedFromVars(G.json.action_animation))), e.$$.dirty[0] & /*componentContext*/
    1 && it(t(35, w = G.getDerivedFromVars(G.json.visibility))), e.$$.dirty[0] & /*componentContext*/
    1 && Fe(t(34, k = G.getDerivedFromVars(G.json.transform))), e.$$.dirty[0] & /*componentContext*/
    1 && te(t(33, N = G.getDerivedFromVars(G.json.transformations))), e.$$.dirty[0] & /*componentContext*/
    1 && kt(t(32, R = G.getDerivedFromVars(G.json.capture_focus_on_action))), e.$$.dirty[1] & /*parentOf, parentOfSimpleMode*/
    1077936128 | e.$$.dirty[2] & /*prevChilds*/
    16 && (d.forEach((et) => {
      ne.unregisterParentOf(et);
    }), t(66, d = []), tr && tr.forEach((et) => {
      et != null && et.id && (d.push(et.id), ne.registerParentOf(et.id, {
        replaceWith: Ei,
        isSingleMode: !!rt
      }));
    })), e.$$.dirty[0] & /*hasCustomFocus, borderElemStyle*/
    131088 | e.$$.dirty[2] & /*strokeWidth, strokeColor, cornersRadius, cornerRadius, borderStyle*/
    992 | e.$$.dirty[4] & /*$jsonFocus, $jsonBorder*/
    1052672) {
      const et = vr && (Se != null && Se.border) ? Se.border : $t;
      let Qr = {}, kn = {}, In = !1, tn = "";
      if (et) {
        if (fn(et.has_shadow, !1)) {
          const un = et.shadow;
          un ? Qr["box-shadow"] = op(un) : Qr["box-shadow"] = "0 1px 2px 0 rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.07)";
        }
        if (et.stroke) {
          In = !0, t(68, we = $r(et.stroke.width, we)), t(69, O = fr(et.stroke.color, 1, O));
          const un = ((ot = et.stroke.style) == null ? void 0 : ot.type) === "dashed" ? "dashed" : "solid";
          kn["--divkit-border"] = `${ae(we + 1)} ${un} ${O}`;
        }
        if (et.corners_radius && typeof et.corners_radius == "object") {
          t(71, zt = np(et.corners_radius, zt)), Qr["border-radius"] = vs(zt);
          const un = {};
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((Yn) => {
            un[Yn] = (zt[Yn] || 0) + 1;
          }), kn["--divkit-border-radius"] = vs(un);
        } else et.corner_radius && (t(70, Dt = $r(et.corner_radius, Dt)), t(71, zt = {
          "top-left": Dt,
          "top-right": Dt,
          "bottom-right": Dt,
          "bottom-left": Dt
        }), Qr["border-radius"] = ae(Dt), kn["--divkit-border-radius"] = ae(Dt + 1));
        if (In && we && (et.corners_radius || et.corner_radius)) {
          let un = { ...zt };
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((Yn) => {
            un[Yn] = (un[Yn] || 0) + we / 2;
          }), tn = vs(un);
        }
      }
      t(67, z = Zo(Qr, z)), t(4, Te = Zo(kn, Te)), t(22, We = In), t(5, Ue = tn);
    }
    if (e.$$.dirty[1] & /*customPaddings*/
    67108864 | e.$$.dirty[2] & /*selfPadding*/
    1024 | e.$$.dirty[4] & /*$jsonPaddings*/
    524288 && t(72, ct = gi(
      Pe && !Sr ? Pe : void 0,
      ct
    )), e.$$.dirty[0] & /*$direction*/
    524288 | e.$$.dirty[1] & /*additionalPaddings*/
    268435456 | e.$$.dirty[2] & /*selfPadding*/
    1024 && t(119, L = po(rp(ct, Ir), x)), e.$$.dirty[0] & /*$direction*/
    524288 | e.$$.dirty[2] & /*margin*/
    2048 | e.$$.dirty[4] & /*$jsonMargins*/
    65536 && t(73, Gt = ns(ye, x, Gt)), e.$$.dirty[0] & /*componentContext, $direction*/
    524289 | e.$$.dirty[1] & /*layoutParams*/
    16777216 | e.$$.dirty[2] & /*widthNum, widthMods*/
    20480 | e.$$.dirty[4] & /*$jsonWidth, $jsonMargins, $jsonAlignmentHorizontal*/
    458752) {
      let et, Qr, kn, In, tn = {}, un = 0, Yn = 0, Bo = !1, Lo = !1;
      const bn = (Kr = G.json.width) == null ? void 0 : Kr.type;
      if (bn === "fixed")
        t(76, Ce = $r(Ft == null ? void 0 : Ft.value, Ce)), Qr = ae(Ce);
      else if (bn === "wrap_content" || (bn === "match_parent" || !bn) && jt.parentHorizontalWrapContent)
        et = "content", (bn === "wrap_content" && (Ft != null && Ft.constrained) || (bn === "match_parent" || !bn) && jt.parentHorizontalWrapContent) && (tn["width-constrained"] = !0, jt.parentContainerOrientation === "horizontal" && (Yn = 1)), (bn === "match_parent" || !bn) && G.logError(J(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      else if (et = "parent", jt.parentContainerOrientation === "vertical" && jt.parentContainerWrap && (Lo = !0, G.logError(J(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), jt.parentContainerOrientation === "vertical" && jt.parentContainerKnownWidth || jt.stretchWidth || jt.parentContainerOrientation === "horizontal" && jt.treatMatchParentAs100) {
        const Xr = (Rn = (En = x === "ltr" ? ye == null ? void 0 : ye.start : ye == null ? void 0 : ye.end) != null ? En : ye == null ? void 0 : ye.left) != null ? Rn : 0, Dn = (bo = (cn = x === "ltr" ? ye == null ? void 0 : ye.end : ye == null ? void 0 : ye.start) != null ? cn : ye == null ? void 0 : ye.right) != null ? bo : 0, jn = `calc(100% - ${on(Xr + Dn)})`;
        jt.stretchWidth ? (Qr = "0", kn = jn) : Qr = jn;
      } else jt.parentContainerOrientation === "horizontal" && (un = Ft && "weight" in Ft && Ft.weight || 1, jt.parentContainerWrap && (Bo = !0));
      if (bn === "wrap_content" || bn === "match_parent") {
        const Xr = Ft;
        let Dn, jn;
        Xr.min_size && Mn(Xr.min_size.value) && (Dn = Xr.min_size.value), Xr.max_size && Mn(Xr.max_size.value) && (jn = Xr.max_size.value), Dn !== void 0 && jn !== void 0 && Dn > jn && (G.logError(J(new Error("Element has incorrect width constraints (min size is bigger than max size)."), {
          additional: {
            id: G.json.id,
            minSize: Dn + "dp",
            maxSize: jn + "dp"
          }
        })), Dn = jn = void 0), Dn !== void 0 && (kn = ae(Dn)), jn !== void 0 && (In = ae(jn));
      }
      if (et === "parent")
        tn["halign-self"] = "stretch";
      else {
        const Xr = er;
        Xr === "left" || Xr === "center" || Xr === "right" || Xr === "start" || Xr === "end" ? tn["halign-self"] = (x === "ltr" ? Ep : Ap)[Xr] : tn["halign-self"] = jt.parentHAlign || "start";
      }
      et && (tn.width = et), t(75, br = Qr), t(6, zr = kn), t(7, Vn = In), t(77, qr = un), t(78, Yr = Yn), t(74, Fr = Zo(tn, Fr)), t(79, hn = Bo), t(23, y = Lo);
    }
    if (e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*heightByAspect, layoutParams*/
    553648128 | e.$$.dirty[2] & /*heightNum, heightMods*/
    1310720 | e.$$.dirty[4] & /*$jsonHeight, $jsonMargins, $jsonAlignmentVertical*/
    114688) {
      let et, Qr, kn, In, tn = {}, un = 0, Yn = 0, Bo = !1, Lo = !1;
      const bn = (Ki = G.json.height) == null ? void 0 : Ki.type;
      if (!Gr) if (bn === "fixed")
        t(82, Qe = $r(he == null ? void 0 : he.value, Qe)), Qr = ae(Qe);
      else if (bn === "match_parent" && !jt.parentVerticalWrapContent)
        if (et = "parent", jt.parentContainerOrientation === "horizontal" && jt.parentContainerWrap && (Lo = !0, G.logError(J(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), jt.parentContainerOrientation === "horizontal" && jt.parentContainerKnownHeight || jt.stretchHeight || jt.parentContainerOrientation === "vertical" && jt.treatMatchParentAs100) {
          const Xr = (Xi = ye == null ? void 0 : ye.top) != null ? Xi : 0, Dn = (Zi = ye == null ? void 0 : ye.bottom) != null ? Zi : 0, jn = `calc(100% - ${on(Xr + Dn)})`;
          jt.stretchHeight ? (Qr = "0", kn = jn) : Qr = jn;
        } else jt.parentContainerOrientation === "vertical" && (un = (he == null ? void 0 : he.weight) || 1, jt.parentContainerWrap && (Bo = !0));
      else
        et = "content", (bn === "wrap_content" && (he != null && he.constrained) || bn === "match_parent" && jt.parentVerticalWrapContent) && (tn["height-constrained"] = !0, jt.parentContainerOrientation === "vertical" && (Yn = 1)), bn === "match_parent" && G.logError(J(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      if (!Gr && (bn === "match_parent" || bn === "wrap_content")) {
        const Xr = he;
        let Dn, jn;
        Xr.min_size && Mn(Xr.min_size.value) && (Dn = Xr.min_size.value), Xr.max_size && Mn(Xr.max_size.value) && (jn = Xr.max_size.value), Dn !== void 0 && jn !== void 0 && Dn > jn && (G.logError(J(new Error("Element has incorrect height constraints (min size is bigger than max size)."), {
          additional: {
            id: G.json.id,
            minSize: Dn + "dp",
            maxSize: jn + "dp"
          }
        })), Dn = jn = void 0), Dn !== void 0 && (kn = ae(Dn)), jn !== void 0 && (In = ae(jn));
      }
      if (et === "parent")
        tn["valign-self"] = "stretch";
      else {
        const Xr = Mt;
        Xr === "top" || Xr === "center" || Xr === "bottom" || Xr === "baseline" && jt.parentContainerOrientation === "horizontal" ? tn["valign-self"] = Sp[Xr] : tn["valign-self"] = jt.parentVAlign || "start";
      }
      et && (tn.height = et), t(81, A = Qr), t(8, se = kn), t(9, B = In), t(83, Ve = un), t(84, qt = Yn), t(80, j = Zo(tn, j)), t(85, Vt = Bo), t(24, Ge = Lo);
    }
    if (e.$$.dirty[1] & /*layoutParams*/
    16777216 && t(128, ee = jt.overlapParent ? !0 : void 0), e.$$.dirty[1] & /*layoutParams*/
    16777216 && t(121, ce = jt.gridArea ? `${jt.gridArea.y + 1}/${jt.gridArea.x + 1}/span ${jt.gridArea.rowSpan}/span ${jt.gridArea.colSpan}` : void 0), e.$$.dirty[2] & /*alpha*/
    16777216 | e.$$.dirty[4] & /*$jsonAlpha*/
    8192 && (t(86, Kt = $_($e, Kt)), t(87, ht = Kt === 1 ? void 0 : Kt)), e.$$.dirty[0] & /*$jsonAccessibility*/
    1048576 | e.$$.dirty[1] & /*customDescription*/
    33554432 && (t(21, v = void 0), ft && !wr)) {
      const et = $o(ft);
      et && (t(21, v = {}), t(21, v["aria-label"] = et, v));
    }
    if (e.$$.dirty[0] & /*hasCustomFocus, background, backgroundRadius, hasSeparateBg, $direction*/
    658464 | e.$$.dirty[4] & /*$jsonFocus, $jsonBackground*/
    6144 && (t(10, Cr = vr && (Se != null && Se.background) ? Se.background : pe), t(88, Er = {}), t(11, mn = !1), Array.isArray(Cr) && (t(11, mn = Cr.some((et) => et.type === "image" || et.type === "nine_patch_image") || !!Ue), !mn))) {
      const et = sl(Cr, x);
      t(88, Er["background-color"] = et.color, Er), t(88, Er["background-image"] = et.image, Er), t(88, Er["background-size"] = et.size, Er), t(88, Er["background-position"] = et.position, Er), t(88, Er["background-repeat"] = "no-repeat", Er);
    }
    if (e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (t(90, Cn = void 0), rn && G.id && G.json.transition_in && ne.isRunning("stateChange") && t(90, Cn = !0)), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (t(92, Ln = void 0), rn && G.id && ne.isRunning("stateChange") && mt.hasTransitionChange(G.id) && t(92, Ln = !0)), e.$$.dirty[0] & /*componentContext, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions*/
    61441 | e.$$.dirty[1] & /*customActions*/
    134217728) {
      const et = G.json;
      let Qr = et.actions || et.action && [et.action] || [], kn = et.doubletap_actions || [], In = et.longtap_actions || [], tn = ((Yo = et.focus) == null ? void 0 : Yo.on_focus) || [], un = ((Ea = et.focus) == null ? void 0 : Ea.on_blur) || [], Yn = et.press_start_actions || [], Bo = et.press_end_actions || [], Lo = et.hover_start_actions || [], bn = et.hover_end_actions || [];
      G.fakeElement && G.fakeElement !== ei ? (Qr = [], kn = [], In = [], tn = [], un = []) : (Array.isArray(Qr) || (Qr = [], G.logError(J(new Error("Actions should be array")))), Array.isArray(kn) || (kn = [], G.logError(J(new Error("DoubleTapActions should be array")))), Array.isArray(In) || (In = [], G.logError(J(new Error("LongTapActions should be array")))), Array.isArray(tn) || (tn = [], G.logError(J(new Error("FocusActions should be array")))), Array.isArray(un) || (un = [], G.logError(J(new Error("BlurActions should be array")))), Array.isArray(Yn) || (Yn = [], G.logError(J(new Error("PressStartActions should be array")))), Array.isArray(Bo) || (Bo = [], G.logError(J(new Error("PressEndActions should be array")))), Array.isArray(Lo) || (Lo = [], G.logError(J(new Error("HoverStartActions should be array")))), Array.isArray(bn) || (bn = [], G.logError(J(new Error("HoverEndActions should be array"))))), (Qr.length || kn.length || In.length || M.length || je.length || me.length || Ot.length) && hr && (Qr = [], kn = [], In = [], t(12, M = []), t(13, je = []), t(14, me = []), t(15, Ot = []), G.logError(J(new Error(`Cannot use action on component "${hr}"`)))), t(25, xn = Qr), t(26, Wt = kn), t(27, b = In), V = tn, Q = un, t(12, M = Yn), t(13, je = Bo), t(14, me = Lo), t(15, Ot = bn);
    }
    if (e.$$.dirty[0] & /*actionAnimationList*/
    65536 | e.$$.dirty[4] & /*$jsonActionAnimation*/
    1024 && nt && (t(16, Bt = os(nt)), t(93, Jr = Bt.map(o_).filter(Boolean).join(", "))), e.$$.dirty[4] & /*$jsonCaptureFocusOnAction*/
    512 && typeof st == "boolean" && t(28, an = st), e.$$.dirty[3] & /*visibility, isVisibilityInited*/
    96 | e.$$.dirty[4] & /*$jsonVisibility*/
    256) {
      const et = Fn, Qr = tp(He, Fn);
      et !== Qr && (qn && (Fn === "visible" || Qr === "visible") ? i_(Qr) : t(99, Fn = Qr)), qn || t(98, qn = !0);
    }
    if (e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[2] & /*currentNode*/
    8 | e.$$.dirty[3] & /*prevExtensionsVal*/
    256 && G.json && ir && !Ui(G.json.extensions, Ci)) {
      let et = t(101, Ci = G.json.extensions);
      Sn().then(() => {
        if (!(et !== Ci || !ir) && (ja(), Array.isArray(G.json.extensions))) {
          const Qr = ne.getExtensionContext(G);
          oe = G.json.extensions.map((kn) => {
            var un;
            const In = kn.id;
            if (!In)
              return;
            const tn = ne.getExtension(In, kn.params);
            return tn && ((un = tn.mountView) == null || un.call(tn, ir, Qr)), tn;
          }).filter(zo);
        }
      });
    }
    if (e.$$.dirty[0] & /*hasCustomFocus, componentContext*/
    131073 | e.$$.dirty[1] & /*layoutParams*/
    16777216 | e.$$.dirty[2] & /*widthMods, heightMods, stateChangingInProgress, visibilityChangingInProgress, transitionChangeInProgress*/
    1879314432 | e.$$.dirty[3] & /*visibility, actionAnimationTransition*/
    65 | e.$$.dirty[4] & /*parentOverlapMod*/
    16 && t(31, T = {
      ...Fr,
      ...j,
      "parent-overlap": ee,
      "scroll-snap": jt.scrollSnap,
      "hide-on-transition-in": Cn || Jn || Ln,
      visibility: Fn,
      "has-action-animation": !!Jr,
      "parent-flex": jt.parentContainerOrientation || void 0,
      "parent-grid": !!jt.gridArea || void 0,
      "has-custom-focus": !!(vr && G.json.focus)
    }), e.$$.dirty[4] & /*$jsonTransformations, $jsonTransform*/
    192) {
      let et;
      Array.isArray(Ye) ? et = Ye : fe && fe.rotation !== void 0 && (et = [
        {
          type: "rotation",
          angle: fe.rotation,
          pivot_x: fe.pivot_x,
          pivot_y: fe.pivot_y
        }
      ]), et ? t(100, qo = ap(et)) : t(100, qo = void 0);
    }
    if (e.$$.dirty[2] & /*widthFill, heightFill, widthFlexGrow, heightFlexGrow*/
    10649600 && t(115, X = hn || Vt ? "100%" : qr || Ve ? 0 : void 0), e.$$.dirty[0] & /*componentContext*/
    1 && t(30, le = G.json["custom-class"] || ""), e.$$.dirty[0] & /*componentContext*/
    1 && t(113, E = G.json.position), e.$$.dirty[0] & /*componentContext*/
    1 && t(114, D = G.json.sticky_top), e.$$.dirty[0] & /*componentContext*/
    1 && t(112, P = G.json.sticky_bottom), e.$$.dirty[0] & /*componentContext*/
    1 && t(111, U = G.json.z_index), e.$$.dirty[0] & /*componentContext*/
    1 && t(110, Z = G.json.cursor), e.$$.dirty[0] & /*componentContext*/
    1 && t(109, be = G.json.backdrop_filter), e.$$.dirty[0] & /*componentContext*/
    1 && t(108, Ae = G.json.overflow), e.$$.dirty[0] & /*componentContext*/
    1 && t(107, Ee = G.json["box-shadow"]), e.$$.dirty[0] & /*componentContext*/
    1 && t(116, _e = G.json.custom_transition), e.$$.dirty[0] & /*componentContext*/
    1 && t(127, Ie = G.json.responsive), e.$$.dirty[3] & /*responsiveMobileQuery, responsiveTabletQuery*/
    3072 | e.$$.dirty[4] & /*responsiveConfig*/
    8 && (Ie && typeof Ie == "object" && typeof window < "u" ? (Eo || (t(103, Eo = window.matchMedia("(max-width: 767px)")), t(104, Oo = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), Eo.addEventListener("change", qi), Oo.addEventListener("change", qi)), qi()) : t(105, li = "desktop")), e.$$.dirty[3] & /*responsiveBreakpoint*/
    4096 | e.$$.dirty[4] & /*responsiveConfig*/
    8 && t(126, $ = li !== "desktop" && (Ie == null ? void 0 : Ie[li]) || null), e.$$.dirty[0] & /*$direction*/
    524288 | e.$$.dirty[4] & /*activeResponsive*/
    4 && t(120, tt = (() => {
      if (!($ != null && $.paddings)) return;
      const et = $.paddings;
      return po(gi(et, null), x);
    })()), e.$$.dirty[0] & /*$direction*/
    524288 | e.$$.dirty[4] & /*activeResponsive*/
    4 && t(118, Xe = (() => {
      if (!($ != null && $.margins)) return;
      const et = $.margins;
      return ns(et, x, "");
    })()), e.$$.dirty[4] & /*activeResponsive*/
    4 && t(123, qe = (() => {
      if ($ != null && $["max-width"] && typeof $["max-width"] == "string")
        return $["max-width"];
      if (!($ != null && $.max_width)) return;
      const et = $.max_width;
      if (et.type === "fixed" && et.value) return et.value + "px";
    })()), e.$$.dirty[4] & /*activeResponsive*/
    4 && t(124, ve = (() => {
      if (!($ != null && $.width)) return;
      const et = $.width;
      if (et.type === "fixed" && et.value) return ae(et.value);
      if (et.type === "match_parent") return "100%";
    })()), e.$$.dirty[4] & /*activeResponsive*/
    4 && t(122, De = (() => {
      if (!($ != null && $.height)) return;
      const et = $.height;
      if (et.type === "fixed" && et.value) return ae(et.value);
      if (et.type === "match_parent") return "100%";
    })()), e.$$.dirty[4] & /*activeResponsive*/
    4 && t(117, ue = ($ == null ? void 0 : $.opacity) !== void 0 ? $.opacity : void 0), e.$$.dirty[4] & /*activeResponsive*/
    4 && ($ == null || $.visibility), e.$$.dirty[0] & /*componentContext*/
    1 && t(125, ke = G.json.hover), e.$$.dirty[0] & /*hoverClassName*/
    262144 | e.$$.dirty[3] & /*hoverStyleEl*/
    8192 | e.$$.dirty[4] & /*hoverConfig*/
    2)
      if (ke && typeof ke == "object" && typeof document < "u") {
        Yi || t(18, Yi = "divkit-hover-" + Math.random().toString(36).slice(2, 9));
        let et = "";
        ke.background_color && (et += `background-color: ${ke.background_color} !important;`), ke.opacity !== void 0 && (et += `opacity: ${ke.opacity} !important;`), ke.scale !== void 0 && (et += `scale: ${ke.scale} !important;`), ke.color && (et += `color: ${ke.color} !important;`), ke.border_color && (et += `border-color: ${ke.border_color} !important;`), (ke["box-shadow"] || ke.box_shadow) && (et += `box-shadow: ${ke["box-shadow"] || ke.box_shadow} !important;`), et && (lo || (t(106, lo = document.createElement("style")), document.head.appendChild(lo)), t(106, lo.textContent = `.${Yi}:hover { ${et} }`, lo));
      } else lo && (lo.remove(), t(106, lo = null), t(18, Yi = ""));
    e.$$.dirty[0] & /*widthMin, widthMax, componentContext, heightMin, heightMax*/
    961 | e.$$.dirty[1] & /*style*/
    8388608 | e.$$.dirty[2] & /*backgroundStyle, borderStyle, width, height, margin, opacity, widthFlexGrow, heightFlexGrow, widthFlexShrink, heightFlexShrink*/
    107587616 | e.$$.dirty[3] & /*responsiveMaxWidth, responsiveHeight, gridArea, responsivePadding, padding, responsiveMargin, responsiveOpacity, customTransition, actionAnimationTransition, transform, flexBasis, customPosition, customStickyTop, customStickyBottom, customZIndex, customCursor, customBackdropFilter, customOverflow, customBoxShadow, animationOpacityStart, animationOpacityEnd, animationScaleStart, animationScaleEnd*/
    2147467423 | e.$$.dirty[4] & /*responsiveWidth*/
    1 && t(29, de = {
      ...Ut,
      ...Er,
      ...z,
      width: ve || br,
      "min-width": zr,
      "max-width": qe || Vn || (() => {
        const et = G.json.max_width;
        if ((et == null ? void 0 : et.type) === "fixed" && (et != null && et.value)) return ae(et.value);
      })(),
      height: De || A,
      "min-height": se,
      // input max-height
      "max-height": B || (Ut == null ? void 0 : Ut["max-height"]) || (() => {
        const et = G.json.max_height;
        if ((et == null ? void 0 : et.type) === "fixed" && (et != null && et.value)) return ae(et.value);
      })(),
      "grid-area": ce,
      padding: tt || L,
      margin: Xe || Gt,
      opacity: ue !== void 0 ? ue : ht,
      transition: _e || Jr,
      "transform-origin": qo ? "0 0" : void 0,
      transform: qo,
      "flex-grow": qr || Ve || void 0,
      "flex-shrink": Yr || qt ? 1 : void 0,
      "flex-basis": X,
      position: E,
      top: E === "sticky" && D !== void 0 ? ae(D) : void 0,
      bottom: E === "sticky" && P !== void 0 ? ae(P) : void 0,
      "z-index": U,
      cursor: Z,
      "backdrop-filter": be,
      "-webkit-backdrop-filter": be,
      overflow: Ae,
      "box-shadow": Ee,
      "--divkit-animation-opacity-start": Mr,
      "--divkit-animation-opacity-end": Lr,
      "--divkit-animation-scale-start": Co,
      "--divkit-animation-scale-end": no
    });
  }, [
    G,
    dt,
    Zt,
    ur,
    Te,
    Ue,
    zr,
    Vn,
    se,
    B,
    Cr,
    mn,
    M,
    je,
    me,
    Ot,
    Bt,
    vr,
    Yi,
    x,
    ft,
    v,
    We,
    y,
    Ge,
    xn,
    Wt,
    b,
    an,
    de,
    le,
    T,
    R,
    N,
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
    rr,
    mr,
    Ca,
    l_,
    a_,
    tr,
    Ut,
    jt,
    wr,
    Sr,
    hr,
    Ir,
    Gr,
    rt,
    Et,
    Yt,
    at,
    ir,
    d,
    z,
    we,
    O,
    Dt,
    zt,
    ct,
    Gt,
    Fr,
    br,
    Ce,
    qr,
    Yr,
    hn,
    j,
    A,
    Qe,
    Ve,
    qt,
    Vt,
    Kt,
    ht,
    Er,
    rn,
    Cn,
    Jn,
    Ln,
    Jr,
    Mr,
    Lr,
    Co,
    no,
    qn,
    Fn,
    qo,
    Ci,
    Tn,
    Eo,
    Oo,
    li,
    lo,
    Ee,
    Ae,
    be,
    Z,
    U,
    P,
    E,
    D,
    X,
    _e,
    ue,
    Xe,
    L,
    tt,
    ce,
    De,
    qe,
    ve,
    ke,
    $,
    Ie,
    ee,
    n,
    fe,
    Ye,
    He,
    st,
    nt,
    pe,
    Se,
    $e,
    Mt,
    he,
    ye,
    er,
    Ft,
    Pe,
    $t,
    kr,
    Pt,
    c_,
    u_,
    yr
  ];
}
class wn extends Br {
  constructor(r) {
    super(), Or(
      this,
      r,
      Vp,
      Cp,
      Vr,
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
const Fp = "appkit-text", Ip = "appkit-text_halign_start", Dp = "appkit-text_halign_center", Tp = "appkit-text_halign_end", Mp = "appkit-text_valign_start", Pp = "appkit-text_valign_center", Np = "appkit-text_valign_end", zp = "appkit-text_valign_baseline", Op = "appkit-text__inner", Bp = "appkit-text_singleline", Lp = "appkit-text_multiline", Rp = "appkit-text_truncate_none", Hp = "appkit-text__inner_gradient", Wp = "appkit-text__image", Up = "appkit-text__image_hidden", co = {
  "text-range": "appkit-text-range",
  text: Fp,
  text_halign_start: Ip,
  text_halign_center: Dp,
  text_halign_end: Tp,
  text_valign_start: Mp,
  text_valign_center: Pp,
  text_valign_end: Np,
  text_valign_baseline: zp,
  text__inner: Op,
  text_singleline: Bp,
  text_multiline: Lp,
  text_truncate_none: Rp,
  "text__inner_has-cloud-bg": "appkit-text__inner_has-cloud-bg",
  "text__inner_cloud-bg": "appkit-text__inner_cloud-bg",
  text__inner_gradient: Hp,
  "text__image-wrapper": "appkit-text__image-wrapper",
  "text__image-wrapper_crop": "appkit-text__image-wrapper_crop",
  "text__image-wrapper_align_top": "appkit-text__image-wrapper_align_top",
  "text__image-wrapper_align_center": "appkit-text__image-wrapper_align_center",
  "text__image-wrapper_align_bottom": "appkit-text__image-wrapper_align_bottom",
  "text__image-wrapper_align_baseline": "appkit-text__image-wrapper_align_baseline",
  text__image: Wp,
  text__image_hidden: Up,
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
function Un(e, r) {
  const t = Number(e);
  return Number.isNaN(t) || t <= 0 ? r : t;
}
function Gp(e) {
  if (e === "light" || e === "medium" || e === "bold" || e === "regular" || e === "semi_bold")
    return e === "medium" ? 500 : e === "bold" ? 700 : e === "light" ? 300 : e === "semi_bold" ? 600 : 400;
}
function hi(e, r, t) {
  return typeof r == "number" && r > 0 ? r : Gp(e) || t;
}
function Ol(e, r) {
  if (!e)
    return {};
  const t = {};
  for (const n of ["left", "top", "right", "bottom", "start", "end"]) {
    const o = e[n];
    o && (t[n] = o * r);
  }
  return t;
}
function Oi(e) {
  if (e && typeof e == "object") {
    const r = [];
    for (const t in e) {
      const n = e[t];
      r.push(`"${t}" ${n}`);
    }
    return r.join(", ");
  }
  return "";
}
function Xa(e) {
  let r, t, n, o, i, s, a;
  return {
    c() {
      r = xr("svg"), t = xr("defs"), n = xr("filter"), o = xr("feGaussianBlur"), i = xr("feColorMatrix"), a = xr("feBlend"), g(o, "in", "SourceGraphic"), g(o, "result", "blurred"), g(o, "stdDeviation", "3"), g(i, "in", "blurred"), g(i, "result", "withMatrix"), g(i, "type", "matrix"), g(i, "values", s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      e[5] + " -" + /*borderRadius*/
      e[5]), g(a, "in", "SourceGraphic"), g(a, "in2", "withMatrix"), g(
        n,
        "id",
        /*cloudFilterId*/
        e[11]
      ), g(r, "class", So["text-range__cloud-svg"]);
    },
    m(l, c) {
      K(l, r, c), wt(r, t), wt(t, n), wt(n, o), wt(n, i), wt(n, a);
    },
    p(l, c) {
      c[0] & /*borderRadius*/
      32 && s !== (s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      l[5] + " -" + /*borderRadius*/
      l[5]) && g(i, "values", s);
    },
    d(l) {
      l && q(r);
    }
  };
}
function Za(e) {
  let r;
  return {
    c() {
      r = Me("span"), g(r, "class", So["text-range__top-offset"]), I(
        r,
        "margin-top",
        /*topOffset*/
        e[9]
      );
    },
    m(t, n) {
      K(t, r, n);
    },
    p(t, n) {
      n[0] & /*topOffset*/
      512 && I(
        r,
        "margin-top",
        /*topOffset*/
        t[9]
      );
    },
    d(t) {
      t && q(r);
    }
  };
}
function Qa(e) {
  let r, t, n, o, i, s;
  return {
    c() {
      r = Me("div"), t = Me("div"), n = Me("div"), o = Me("div"), i = Me("div"), s = Me("div"), g(r, "class", So["text-range__mask-animation"]), g(t, "class", So["text-range__mask-animation"]), g(n, "class", So["text-range__mask-animation"]), g(o, "class", So["text-range__mask-animation"]), g(i, "class", So["text-range__mask-animation"]), g(s, "class", So["text-range__mask-animation"]);
    },
    m(a, l) {
      K(a, r, l), K(a, t, l), K(a, n, l), K(a, o, l), K(a, i, l), K(a, s, l);
    },
    d(a) {
      a && (q(r), q(t), q(n), q(o), q(i), q(s));
    }
  };
}
function Jp(e) {
  let r = (
    /*text*/
    (e[1] || "​") + ""
  ), t, n = (
    /*maskColor*/
    e[4] && Qa()
  );
  return {
    c() {
      n && n.c(), t = Gn(r);
    },
    m(o, i) {
      n && n.m(o, i), K(o, t, i);
    },
    p(o, i) {
      /*maskColor*/
      o[4] ? n || (n = Qa(), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null), i[0] & /*text*/
      2 && r !== (r = /*text*/
      (o[1] || "​") + "") && to(t, r);
    },
    d(o) {
      o && q(t), n && n.d(o);
    }
  };
}
function qp(e) {
  let r, t, n, o, i = (
    /*cloudBg*/
    e[3] && /*hasCloudBg*/
    e[6] && Xa(e)
  ), s = (
    /*topOffset*/
    e[9] && Za(e)
  );
  return n = new al({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      cls: bt(
        "text-range",
        So,
        /*mods*/
        e[8]
      ),
      actions: (
        /*actions*/
        e[2]
      ),
      style: ar(
        /*style*/
        e[7]
      ),
      $$slots: { default: [Jp] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      i && i.c(), r = xt(), s && s.c(), t = xt(), Ht(n.$$.fragment);
    },
    m(a, l) {
      i && i.m(a, l), K(a, r, l), s && s.m(a, l), K(a, t, l), Lt(n, a, l), o = !0;
    },
    p(a, l) {
      /*cloudBg*/
      a[3] && /*hasCloudBg*/
      a[6] ? i ? i.p(a, l) : (i = Xa(a), i.c(), i.m(r.parentNode, r)) : i && (i.d(1), i = null), /*topOffset*/
      a[9] ? s ? s.p(a, l) : (s = Za(a), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null);
      const c = {};
      l[0] & /*componentContext*/
      1 && (c.componentContext = /*componentContext*/
      a[0]), l[0] & /*mods*/
      256 && (c.cls = bt(
        "text-range",
        So,
        /*mods*/
        a[8]
      )), l[0] & /*actions*/
      4 && (c.actions = /*actions*/
      a[2]), l[0] & /*style*/
      128 && (c.style = ar(
        /*style*/
        a[7]
      )), l[0] & /*text, maskColor*/
      18 | l[1] & /*$$scope*/
      64 && (c.$$scope = { dirty: l, ctx: a }), n.$set(c);
    },
    i(a) {
      o || (W(n.$$.fragment, a), o = !0);
    },
    o(a) {
      re(n.$$.fragment, a), o = !1;
    },
    d(a) {
      a && (q(r), q(t)), i && i.d(a), s && s.d(a), Rt(n, a);
    }
  };
}
function Yp(e, r, t) {
  let n, o, i, s, a, l, c, u, f, { componentContext: _ } = r, { text: h } = r, { rootFontSize: m } = r, { textStyles: p = {} } = r, { singleline: w = !1 } = r, { actions: k = void 0 } = r, { cloudBg: N = !1 } = r, { cloudBgId: R = "" } = r, { customLineHeight: L = null } = r;
  const ee = Tr(Zr), ce = ee.direction;
  yn(e, ce, (ve) => t(35, f = ve));
  const T = N && R || ee.genId("text-range") || "";
  let X = "none", le = 12, E = 1.25, D = "", P, U = "", Z = "", be = "", Ae, Ee = null, _e, Ie, $ = !1, tt, Xe, qe;
  return e.$$set = (ve) => {
    "componentContext" in ve && t(0, _ = ve.componentContext), "text" in ve && t(1, h = ve.text), "rootFontSize" in ve && t(12, m = ve.rootFontSize), "textStyles" in ve && t(13, p = ve.textStyles), "singleline" in ve && t(14, w = ve.singleline), "actions" in ve && t(2, k = ve.actions), "cloudBg" in ve && t(3, N = ve.cloudBg), "cloudBgId" in ve && t(15, R = ve.cloudBgId), "customLineHeight" in ve && t(16, L = ve.customLineHeight);
  }, e.$$.update = () => {
    var ve, De, ue, ke, de, x, fe, ie;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && _.json && (t(17, X = "none"), t(18, le = 12), t(19, E = 1.25), t(20, D = ""), t(21, P = void 0), t(22, U = ""), t(23, Z = ""), t(24, be = ""), t(25, Ae = void 0), t(26, Ee = null), t(27, _e = void 0), t(28, Ie = void 0), t(29, $ = !1), t(4, tt = void 0), t(30, Xe = void 0), t(31, qe = void 0)), e.$$.dirty[0] & /*textStyles*/
    8192) {
      let Fe = "none";
      (p.underline || p.strike) && (p.underline === "single" && p.strike === "single" ? Fe = "both" : p.underline === "single" ? Fe = "underline" : p.strike === "single" && (Fe = "strike")), t(17, X = Fe);
    }
    if (e.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && t(18, le = Un(p.font_size, le)), e.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && Bn(p.line_height) && t(19, E = Number(p.line_height) / le), e.$$.dirty[0] & /*textStyles*/
    8192 && Mn(p.letter_spacing) && t(20, D = ae(p.letter_spacing)), e.$$.dirty[0] & /*textStyles, fontWeight*/
    2105344 && (t(21, P = hi(p.font_weight, p.font_weight_value, P)), typeof p.font_family == "string" && p.font_family ? t(22, U = ee.typefaceProvider(p.font_family, { fontWeight: P || 400 })) : t(22, U = "")), e.$$.dirty[0] & /*textStyles, fontVariationSettings*/
    8396800) {
      const Fe = Oi(p.font_variation_settings);
      Fe !== Z && t(23, Z = Fe);
    }
    if (e.$$.dirty[0] & /*textStyles, color*/
    16785408 && t(24, be = fr(p.text_color, 1, be)), e.$$.dirty[0] & /*textStyles*/
    8192 && t(9, n = p.top_offset ? ae(p.top_offset) : ""), e.$$.dirty[0] & /*textStyles*/
    8192 && t(6, o = ((ve = p.background) == null ? void 0 : ve.type) === "cloud"), e.$$.dirty[0] & /*textStyles*/
    8192 && t(33, i = ((De = p.background) == null ? void 0 : De.type) === "cloud" ? p.background.paddings : void 0), e.$$.dirty[0] & /*textStyles, cloudBg, hasCloudBg, fontSize*/
    270408 | e.$$.dirty[1] & /*$direction*/
    16) {
      const Fe = p.mask, Ye = !!(Fe && (Fe.type === "solid" || Fe.type === "particles") && Fe.is_enabled !== !1 && Fe.color);
      if (N || Ye ? t(25, Ae = "transparent") : t(25, Ae = void 0), t(29, $ = !1), t(4, tt = void 0), t(30, Xe = void 0), t(31, qe = void 0), N)
        o ? t(28, Ie = U_(p.background.color, 255, "transparent")) : t(28, Ie = void 0);
      else if (Fe && Ye) {
        if (Fe.type === "solid")
          t(28, Ie = fr(Fe.color));
        else if (Fe.type === "particles") {
          const Ze = Un((ue = Fe.particle_size) == null ? void 0 : ue.value, 1), te = ae(Ze * 10 / le), He = Un(Fe.density, 0.8), Be = fr(Fe.color);
          t(28, Ie = void 0), t(4, tt = Be), t(30, Xe = te), t(31, qe = String(He)), t(29, $ = Fe.is_animated === !0);
        }
      } else ((ke = p.background) == null ? void 0 : ke.type) === "solid" ? t(28, Ie = sl([p.background], f).color) : t(28, Ie = void 0);
    }
    e.$$.dirty[0] & /*textStyles*/
    8192 && ((de = p.border) != null && de.stroke && p.border.stroke.color && fr(p.border.stroke.color) !== "transparent" && Bn(p.border.stroke.width) && ((x = p.background) == null ? void 0 : x.type) !== "cloud" ? t(26, Ee = {
      color: p.border.stroke.color,
      width: p.border.stroke.width,
      corner_radius: p.border.corner_radius
    }) : t(26, Ee = null)), e.$$.dirty[0] & /*cloudBg, hasCloudBg, textStyles, border*/
    67117128 && t(5, s = N ? o && p.background.corner_radius || 0 : Ee ? Un(Ee.corner_radius, 0) : 0), e.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && t(32, a = p.text_shadow ? ip(p.text_shadow, le) : void 0), e.$$.dirty[0] & /*textStyles*/
    8192 && typeof p.baseline_offset == "number" && t(27, _e = p.baseline_offset), e.$$.dirty[0] & /*textStyles*/
    8192 && t(34, l = typeof p.baseline_offset == "number" ? void 0 : p.alignment_vertical), e.$$.dirty[0] & /*singleline, decoration, hasCloudBg, customLineHeight, verticalAlign, maskColor, maskAnimated*/
    671301712 | e.$$.dirty[1] & /*customVerticalAlign*/
    8 && t(8, c = {
      singleline: w,
      decoration: X,
      align: l,
      cloud: o,
      "relative-vertical-align": !!(L && _e),
      "has-particles-mask": !!tt,
      "mask-animated": $
    }), e.$$.dirty[0] & /*fontSize, rootFontSize, lineHeight, letterSpacing, fontWeight, fontFamily, customLineHeight, verticalAlign, cloudBg, hasCloudBg, cloudBgId, colorOverride, color, background, textStyles, border, borderRadius, fontVariationSettings, maskColor, maskSize*/
    1610461304 | e.$$.dirty[1] & /*customVerticalAlign, cloudPadding, $direction, shadow, maskDensity*/
    31 && t(7, u = {
      "font-size": ae(le * 10 / m),
      "line-height": l ? "normal" : E,
      "letter-spacing": D,
      "font-weight": P,
      "font-family": U,
      "vertical-align": L || _e === void 0 ? void 0 : ae(_e * 10 / le),
      top: L && _e !== void 0 ? ae(-_e * 10 / le) : void 0,
      margin: i ? po(Ol(i, -10 / le), f) : void 0,
      padding: i ? po(Ol(i, 10 / le), f) : void 0,
      filter: N && o && !R ? `url(#${T})` : a,
      color: Ae || be,
      background: Ie,
      opacity: N && o && !R ? ((ie = (fe = _o(p.background.color)) == null ? void 0 : fe.a) != null ? ie : 255) / 255 : void 0,
      /**
      * box-shadow instead of border because:
      * 1) Doesn't take space as border does
      * 2) There should not be a border-radius on line breaks, but there should be a border
      */
      "box-shadow": Ee ? `inset 0 0 0 ${ae(Ee.width * 10 / le)} ${Ee.color}` : void 0,
      "border-radius": s ? ae(s * 10 / le) : void 0,
      "font-feature-settings": p.font_feature_settings || void 0,
      "font-variation-settings": Z || void 0,
      "--divkit-text-mask-color": tt,
      "--divkit-text-mask-size": Xe,
      "--divkit-text-mask-density": qe
    });
  }, [
    _,
    h,
    k,
    N,
    tt,
    s,
    o,
    u,
    c,
    n,
    ce,
    T,
    m,
    p,
    w,
    R,
    L,
    X,
    le,
    E,
    D,
    P,
    U,
    Z,
    be,
    Ae,
    Ee,
    _e,
    Ie,
    $,
    Xe,
    qe,
    a,
    i,
    l,
    f
  ];
}
class fa extends Br {
  constructor(r) {
    super(), Or(
      this,
      r,
      Yp,
      qp,
      Vr,
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
function cl(e, r, t) {
  return e === "left" || e === "center" || e === "right" || e === "start" || e === "end" ? e === "left" ? r === "ltr" ? "start" : "end" : e === "right" ? r === "ltr" ? "end" : "start" : e : t;
}
function ul(e, r) {
  return e === "top" || e === "center" || e === "bottom" || e === "baseline" ? e === "top" ? "start" : e === "bottom" ? "end" : e : r;
}
function Kp(e) {
  return String(e != null ? e : "");
}
function gd(e, r) {
  return e === "source_in" || e === "source_atop" || e === "darken" || e === "lighten" || e === "multiply" || e === "screen" ? e : r;
}
function Gs(e) {
  return e.is_enabled !== 0 && e.is_enabled !== !1;
}
function da(e, r) {
  let t;
  return function(...n) {
    t !== null && clearTimeout(t), t = setTimeout(() => {
      e.apply(this, n), t = null;
    }, r);
  };
}
function Xp(e, r) {
  let t = null;
  const n = () => {
    const a = getComputedStyle(e), l = parseFloat(a.lineHeight);
    e.style.webkitLineClamp = "", e.style.maxHeight = "";
    const c = e.offsetHeight, u = e.scrollHeight;
    let f = Math.max(1, Math.floor(c / l));
    r.maxLines && r.maxLines < f && (f = r.maxLines), u > f * l + 1e-9 && (e.style.webkitLineClamp = String(f), e.style.maxHeight = l * f + "px");
  }, o = da(n, 50), i = () => {
    t && (t.disconnect(), t = null);
  }, s = () => {
    if (i(), r.enabled) {
      if (n(), typeof ResizeObserver < "u") {
        t = new ResizeObserver(o);
        const a = e.parentElement;
        a && t.observe(a);
      }
    } else
      e.style.webkitLineClamp = String(r.lineClamp || "");
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
const { Boolean: hd } = Po;
function xa(e, r, t) {
  const n = e.slice();
  return n[71] = r[t], n;
}
function $a(e, r, t) {
  const n = e.slice();
  return n[71] = r[t], n;
}
function ec(e) {
  let r = (
    /*htmlTag*/
    e[9]
  ), t, n = (
    /*htmlTag*/
    e[9] && Cl(e)
  );
  return {
    c() {
      n && n.c(), t = xt();
    },
    m(o, i) {
      n && n.m(o, i), K(o, t, i);
    },
    p(o, i) {
      /*htmlTag*/
      o[9] ? r ? Vr(
        r,
        /*htmlTag*/
        o[9]
      ) ? (n.d(1), n = Cl(o), r = /*htmlTag*/
      o[9], n.c(), n.m(t.parentNode, t)) : n.p(o, i) : (n = Cl(o), r = /*htmlTag*/
      o[9], n.c(), n.m(t.parentNode, t)) : r && (n.d(1), n = null, r = /*htmlTag*/
      o[9]);
    },
    i: C,
    o(o) {
      re(n, o);
    },
    d(o) {
      o && q(t), n && n.d(o);
    }
  };
}
function Zp(e) {
  let r, t, n, o, i;
  return {
    c() {
      r = Me("span"), t = Me("span"), g(t, "class", n = bt("text__image-wrapper", co, {
        align: (
          /*item*/
          e[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          e[11] !== null
        )
      })), g(t, "style", o = ar({
        width: (
          /*item*/
          e[71].image.width
        ),
        height: (
          /*customLineHeight*/
          e[11] && /*item*/
          e[71].image.verticalAlign !== "baseline" ? (
            /*customLineHeight*/
            e[11] + "em"
          ) : void 0
        )
      })), g(r, "style", i = ar(
        /*item*/
        e[71].image.wrapperStyle
      ));
    },
    m(s, a) {
      K(s, r, a), wt(r, t);
    },
    p(s, a) {
      a[0] & /*renderList, customLineHeight*/
      10240 && n !== (n = bt("text__image-wrapper", co, {
        align: (
          /*item*/
          s[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          s[11] !== null
        )
      })) && g(t, "class", n), a[0] & /*renderList, customLineHeight*/
      10240 && o !== (o = ar({
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
      })) && g(t, "style", o), a[0] & /*renderList*/
      8192 && i !== (i = ar(
        /*item*/
        s[71].image.wrapperStyle
      )) && g(r, "style", i);
    },
    i: C,
    o: C,
    d(s) {
      s && q(r);
    }
  };
}
function Qp(e) {
  let r, t, n = (
    /*item*/
    e[71].text && tc(e)
  );
  return {
    c() {
      n && n.c(), r = xt();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), t = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && W(n, 1)) : (n = tc(o), n.c(), W(n, 1), n.m(r.parentNode, r)) : n && (dr(), re(n, 1, 1, () => {
        n = null;
      }), _r());
    },
    i(o) {
      t || (W(n), t = !0);
    },
    o(o) {
      re(n), t = !1;
    },
    d(o) {
      o && q(r), n && n.d(o);
    }
  };
}
function tc(e) {
  let r, t;
  return r = new fa({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      text: (
        /*item*/
        e[71].text
      ),
      rootFontSize: (
        /*fontSize*/
        e[3]
      ),
      textStyles: (
        /*item*/
        e[71].textStyles
      ),
      singleline: (
        /*singleline*/
        e[8]
      ),
      cloudBg: !0,
      cloudBgId: (
        /*wholeTextCloudBgId*/
        e[14]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function rc(e) {
  let r, t, n, o;
  const i = [Qp, Zp], s = [];
  function a(l, c) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (t && (dr(), re(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (t = s[r], t ? t.p(l, c) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      re(t), o = !1;
    },
    d(l) {
      l && q(n), ~r && s[r].d(l);
    }
  };
}
function Cl(e) {
  let r, t, n, o, i = or(
    /*renderList*/
    e[13]
  ), s = [];
  for (let u = 0; u < i.length; u += 1)
    s[u] = rc($a(e, i, u));
  const a = (u) => re(s[u], 1, 1, () => {
    s[u] = null;
  });
  let l = [
    {
      class: t = bt("text__inner", co, {
        .../*innerMods*/
        e[19],
        "cloud-bg": !0
      })
    },
    {
      style: n = ar({
        .../*style*/
        e[18],
        padding: (
          /*cloudPadding*/
          e[17]
        ),
        filter: (
          /*wholeTextCloudBgId*/
          e[14] ? `url(#${/*wholeTextCloudBgId*/
          e[14]})` : void 0
        ),
        opacity: (
          /*wholeTextCloudBgOpacity*/
          e[15]
        )
      })
    }
  ], c = {};
  for (let u = 0; u < l.length; u += 1)
    c = jo(c, l[u]);
  return {
    c() {
      r = Me(
        /*htmlTag*/
        e[9]
      );
      for (let u = 0; u < s.length; u += 1)
        s[u].c();
      xo(
        /*htmlTag*/
        e[9]
      )(r, c);
    },
    m(u, f) {
      K(u, r, f);
      for (let _ = 0; _ < s.length; _ += 1)
        s[_] && s[_].m(r, null);
      o = !0;
    },
    p(u, f) {
      if (f[0] & /*componentContext, renderList, fontSize, singleline, wholeTextCloudBgId, customLineHeight*/
      26889) {
        i = or(
          /*renderList*/
          u[13]
        );
        let _;
        for (_ = 0; _ < i.length; _ += 1) {
          const h = $a(u, i, _);
          s[_] ? (s[_].p(h, f), W(s[_], 1)) : (s[_] = rc(h), s[_].c(), W(s[_], 1), s[_].m(r, null));
        }
        for (dr(), _ = i.length; _ < s.length; _ += 1)
          a(_);
        _r();
      }
      xo(
        /*htmlTag*/
        u[9]
      )(r, c = No(l, [
        (!o || f[0] & /*innerMods*/
        524288 && t !== (t = bt("text__inner", co, {
          .../*innerMods*/
          u[19],
          "cloud-bg": !0
        }))) && { class: t },
        (!o || f[0] & /*style, cloudPadding, wholeTextCloudBgId, wholeTextCloudBgOpacity*/
        442368 && n !== (n = ar({
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
          W(s[f]);
        o = !0;
      }
    },
    o(u) {
      s = s.filter(hd);
      for (let f = 0; f < s.length; f += 1)
        re(s[f]);
      o = !1;
    },
    d(u) {
      u && q(r), sn(s, u);
    }
  };
}
function xp(e) {
  let r, t;
  return r = new fa({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      text: (
        /*text*/
        e[2]
      ),
      rootFontSize: (
        /*fontSize*/
        e[3]
      ),
      textStyles: (
        /*rootTextStyles*/
        e[7]
      ),
      singleline: (
        /*singleline*/
        e[8]
      ),
      customLineHeight: (
        /*customLineHeight*/
        e[11]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function $p(e) {
  let r, t, n = or(
    /*renderList*/
    e[13]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = oc(xa(e, n, s));
  const i = (s) => re(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = xt();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      K(s, r, a), t = !0;
    },
    p(s, a) {
      if (a[0] & /*componentContext, renderList, fontSize, singleline, customLineHeight*/
      10505 | a[1] & /*onImgError*/
      256) {
        n = or(
          /*renderList*/
          s[13]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const c = xa(s, n, l);
          o[l] ? (o[l].p(c, a), W(o[l], 1)) : (o[l] = oc(c), o[l].c(), W(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (dr(), l = n.length; l < o.length; l += 1)
          i(l);
        _r();
      }
    },
    i(s) {
      if (!t) {
        for (let a = 0; a < n.length; a += 1)
          W(o[a]);
        t = !0;
      }
    },
    o(s) {
      o = o.filter(hd);
      for (let a = 0; a < o.length; a += 1)
        re(o[a]);
      t = !1;
    },
    d(s) {
      s && q(r), sn(o, s);
    }
  };
}
function eg(e) {
  let r, t, n, o, i, s, a, l, c, u, f, _, h, m = [
    { class: o = co.text__image },
    {
      src: i = /*item*/
      e[71].image.url
    },
    {
      loading: s = /*item*/
      e[71].image.preloadRequired ? "eager" : "lazy"
    },
    { decoding: "async" },
    {
      alt: a = /*item*/
      e[71].image.description
    },
    /*item*/
    e[71].image.a11yAttrs,
    {
      style: l = ar({
        height: (
          /*item*/
          e[71].image.height
        ),
        filter: (
          /*item*/
          e[71].image.svgFilterId ? `url(#${/*item*/
          e[71].image.svgFilterId})` : void 0
        )
      })
    }
  ], p = {};
  for (let w = 0; w < m.length; w += 1)
    p = jo(p, m[w]);
  return {
    c() {
      r = Me("span"), t = Me("span"), n = Me("img"), Go(n, p), g(t, "class", c = bt("text__image-wrapper", co, {
        align: (
          /*item*/
          e[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          e[11] !== null
        )
      })), g(t, "style", u = ar({
        width: (
          /*item*/
          e[71].image.width
        ),
        height: (
          /*customLineHeight*/
          e[11] && /*item*/
          e[71].image.verticalAlign !== "baseline" ? (
            /*customLineHeight*/
            e[11] + "em"
          ) : void 0
        )
      })), g(r, "style", f = ar(
        /*item*/
        e[71].image.wrapperStyle
      ));
    },
    m(w, k) {
      K(w, r, k), wt(r, t), wt(t, n), _ || (h = Ke(
        n,
        "error",
        /*onImgError*/
        e[39]
      ), _ = !0);
    },
    p(w, k) {
      Go(n, p = No(m, [
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
        8192 && l !== (l = ar({
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
      10240 && c !== (c = bt("text__image-wrapper", co, {
        align: (
          /*item*/
          w[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          w[11] !== null
        )
      })) && g(t, "class", c), k[0] & /*renderList, customLineHeight*/
      10240 && u !== (u = ar({
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
      })) && g(t, "style", u), k[0] & /*renderList*/
      8192 && f !== (f = ar(
        /*item*/
        w[71].image.wrapperStyle
      )) && g(r, "style", f);
    },
    i: C,
    o: C,
    d(w) {
      w && q(r), _ = !1, h();
    }
  };
}
function tg(e) {
  let r, t, n = (
    /*item*/
    e[71].text && nc(e)
  );
  return {
    c() {
      n && n.c(), r = xt();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), t = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && W(n, 1)) : (n = nc(o), n.c(), W(n, 1), n.m(r.parentNode, r)) : n && (dr(), re(n, 1, 1, () => {
        n = null;
      }), _r());
    },
    i(o) {
      t || (W(n), t = !0);
    },
    o(o) {
      re(n), t = !1;
    },
    d(o) {
      o && q(r), n && n.d(o);
    }
  };
}
function nc(e) {
  let r, t;
  return r = new fa({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      text: (
        /*item*/
        e[71].text
      ),
      rootFontSize: (
        /*fontSize*/
        e[3]
      ),
      textStyles: (
        /*item*/
        e[71].textStyles
      ),
      singleline: (
        /*singleline*/
        e[8]
      ),
      actions: (
        /*item*/
        e[71].actions
      ),
      customLineHeight: (
        /*customLineHeight*/
        e[11]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function oc(e) {
  let r, t, n, o;
  const i = [tg, eg], s = [];
  function a(l, c) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (t && (dr(), re(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (t = s[r], t ? t.p(l, c) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      re(t), o = !1;
    },
    d(l) {
      l && q(n), ~r && s[r].d(l);
    }
  };
}
function El(e) {
  let r, t, n, o, i, s, a, l, c;
  const u = [$p, xp], f = [];
  function _(p, w) {
    return (
      /*renderList*/
      p[13].length ? 0 : 1
    );
  }
  t = _(e), n = f[t] = u[t](e);
  let h = [
    {
      class: o = bt(
        "text__inner",
        co,
        /*innerMods*/
        e[19]
      )
    },
    {
      style: i = ar(
        /*style*/
        e[18]
      )
    }
  ], m = {};
  for (let p = 0; p < h.length; p += 1)
    m = jo(m, h[p]);
  return {
    c() {
      r = Me(
        /*htmlTag*/
        e[9]
      ), n.c(), xo(
        /*htmlTag*/
        e[9]
      )(r, m);
    },
    m(p, w) {
      K(p, r, w), f[t].m(r, null), a = !0, l || (c = nl(s = Xp.call(null, r, {
        enabled: (
          /*$jsonAutoEllipsize*/
          e[10]
        ),
        lineClamp: typeof /*lineClamp*/
        e[4] == "number" ? (
          /*lineClamp*/
          e[4]
        ) : void 0,
        maxLines: (
          /*maxLines*/
          e[12]
        )
      })), l = !0);
    },
    p(p, w) {
      let k = t;
      t = _(p), t === k ? f[t].p(p, w) : (dr(), re(f[k], 1, 1, () => {
        f[k] = null;
      }), _r(), n = f[t], n ? n.p(p, w) : (n = f[t] = u[t](p), n.c()), W(n, 1), n.m(r, null)), xo(
        /*htmlTag*/
        p[9]
      )(r, m = No(h, [
        (!a || w[0] & /*innerMods*/
        524288 && o !== (o = bt(
          "text__inner",
          co,
          /*innerMods*/
          p[19]
        ))) && { class: o },
        (!a || w[0] & /*style*/
        262144 && i !== (i = ar(
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
      a || (W(n), a = !0);
    },
    o(p) {
      re(n), a = !1;
    },
    d(p) {
      p && q(r), f[t].d(), l = !1, c();
    }
  };
}
function rg(e) {
  let r, t = (
    /*htmlTag*/
    e[9]
  ), n, o, i = (
    /*hasCloudBg*/
    e[6] && ec(e)
  ), s = (
    /*htmlTag*/
    e[9] && El(e)
  );
  return {
    c() {
      i && i.c(), r = gr(), s && s.c(), n = xt();
    },
    m(a, l) {
      i && i.m(a, l), K(a, r, l), s && s.m(a, l), K(a, n, l), o = !0;
    },
    p(a, l) {
      /*hasCloudBg*/
      a[6] ? i ? (i.p(a, l), l[0] & /*hasCloudBg*/
      64 && W(i, 1)) : (i = ec(a), i.c(), W(i, 1), i.m(r.parentNode, r)) : i && (dr(), re(i, 1, 1, () => {
        i = null;
      }), _r()), /*htmlTag*/
      a[9] ? t ? Vr(
        t,
        /*htmlTag*/
        a[9]
      ) ? (s.d(1), s = El(a), t = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : s.p(a, l) : (s = El(a), t = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : t && (s.d(1), s = null, t = /*htmlTag*/
      a[9]);
    },
    i(a) {
      o || (W(i), o = !0);
    },
    o(a) {
      re(i), re(s, a), o = !1;
    },
    d(a) {
      a && (q(r), q(n)), i && i.d(a), s && s.d(a);
    }
  };
}
function ng(e) {
  let r, t;
  return r = new wn({
    props: {
      cls: bt(
        "text",
        co,
        /*mods*/
        e[20]
      ) + " " + /*selectable*/
      (e[5] ? jr.root__selectable : jr.root__unselectable),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      containerElement: (
        /*containerElement*/
        e[16]
      ),
      $$slots: { default: [rg] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods, selectable*/
      1048608 && (i.cls = bt(
        "text",
        co,
        /*mods*/
        n[20]
      ) + " " + /*selectable*/
      (n[5] ? jr.root__selectable : jr.root__unselectable)), o[0] & /*componentContext*/
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function og(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, ee, ce, T, X, le, E, D, P, U, Z, be = C, Ae = () => (be(), be = S(N, (Et) => t(52, Z = Et)), N), Ee, _e = C, Ie = () => (_e(), _e = S(i, (Et) => t(53, Ee = Et)), i), $, tt = C, Xe = () => (tt(), tt = S(o, (Et) => t(54, $ = Et)), o), qe, ve = C, De = () => (ve(), ve = S(w, (Et) => t(55, qe = Et)), w), ue, ke = C, de = () => (ke(), ke = S(p, (Et) => t(56, ue = Et)), p), x, fe = C, ie = () => (fe(), fe = S(m, (Et) => t(57, x = Et)), m), Fe, Ye = C, Ze = () => (Ye(), Ye = S(h, (Et) => t(58, Fe = Et)), h), te, He = C, Be = () => (He(), He = S(_, (Et) => t(59, te = Et)), _), it, st = C, lt = () => (st(), st = S(c, (Et) => t(60, it = Et)), c), kt, nt = C, Nt = () => (nt(), nt = S(f, (Et) => t(61, kt = Et)), f), ut, pe = C, ge = () => (pe(), pe = S(u, (Et) => t(62, ut = Et)), u), _t, Se = C, F = () => (Se(), Se = S(k, (Et) => t(10, _t = Et)), k), Ct, ft = C, St = () => (ft(), ft = S(l, (Et) => t(63, Ct = Et)), l), Tt, $e = C, Y = () => ($e(), $e = S(a, (Et) => t(64, Tt = Et)), a), At, Mt = C, Qt = () => (Mt(), Mt = S(s, (Et) => t(65, At = Et)), s), Jt, he = C, Le = () => (he(), he = S(n, (Et) => t(66, Jt = Et)), n), pt, ye = C, xe = () => (ye(), ye = S(R, (Et) => t(67, pt = Et)), R);
  e.$$.on_destroy.push(() => be()), e.$$.on_destroy.push(() => _e()), e.$$.on_destroy.push(() => tt()), e.$$.on_destroy.push(() => ve()), e.$$.on_destroy.push(() => ke()), e.$$.on_destroy.push(() => fe()), e.$$.on_destroy.push(() => Ye()), e.$$.on_destroy.push(() => He()), e.$$.on_destroy.push(() => st()), e.$$.on_destroy.push(() => nt()), e.$$.on_destroy.push(() => pe()), e.$$.on_destroy.push(() => Se()), e.$$.on_destroy.push(() => ft()), e.$$.on_destroy.push(() => $e()), e.$$.on_destroy.push(() => Mt()), e.$$.on_destroy.push(() => he()), e.$$.on_destroy.push(() => ye());
  let { componentContext: Oe } = r, { layoutParams: er = void 0 } = r;
  const ze = Tr(Zr), yt = ze.direction;
  yn(e, yt, (Et) => t(51, U = Et));
  let Ft = "", It = 12, cr = 1.25, Pe = null, vt = "", nr, $t = "", Xt = !1, pr = "start", kr = "start", Pt = "", yr = "", G = "", dt = !1, Ut = [], jt = !1, wr = "", Sr, hr = [], Ir = {}, Gr = "span";
  function tr(Et, Zt, Yt, ur) {
    var oe, d;
    let at = [];
    if (hr.forEach(([z, Te]) => {
      ze.removeSvgFilter(z, Te);
    }), hr = [], !(Array.isArray(Zt) && Zt.length || Array.isArray(Yt) && Yt.length && Et)) {
      t(13, Ut = []);
      return;
    }
    const ne = Et;
    let mt = Zt || [{ start: 0, end: ne.length }], rr = Yt || [], mr = 0, ir = [], v = [];
    mt.forEach((z) => {
      const Te = z.start || 0, We = z.end || Et.length, we = {
        top_offset: 0,
        ...z,
        start: Te,
        end: We
      };
      v.push({
        index: Te,
        range: we,
        type: "rangeStart",
        isStart: !0
      }), v.push({
        index: We,
        range: we,
        type: "rangeEnd"
      });
    }), rr.forEach((z, Te) => {
      z.start !== void 0 && z.url && z.start <= ne.length && v.push({
        index: z.indexing_direction === "reversed" ? Et.length - z.start : z.start,
        image: z,
        type: "image",
        arrayIndex: Te
      });
    }), v.sort((z, Te) => z.index === Te.index ? z.type !== Te.type ? z.type === "image" ? -1 : Te.type === "image" ? 1 : z.type < Te.type ? -1 : 1 : z.type === "image" && Te.type === "image" ? Te.arrayIndex - z.arrayIndex : z.type === "rangeStart" && Te.type === "rangeStart" ? z.range.end - Te.range.end : z.type === "rangeStart" ? 1 : Te.type === "rangeStart" ? -1 : z.type !== "image" && Te.type !== "image" ? z.range.start - Te.range.start : 0 : z.index - Te.index), v.forEach((z) => {
      var we, O, Dt, zt;
      let Te = z.type === "image" ? null : z.range, We = z.index;
      if (We > mr) {
        let Ue = Object.assign({ ...ur }, ...ir);
        ir.length && ir[ir.length - 1].start !== mr && (Ue.top_offset = 0), at.push({
          text: ne.substring(mr, We),
          textStyles: Ue,
          actions: z.type === "rangeEnd" && ((O = (we = z.range) == null ? void 0 : we.actions) == null ? void 0 : O.filter(Gs)) || void 0
        });
      }
      if (z.type === "rangeStart" && Te)
        ir.push(Te);
      else if (z.type === "rangeEnd")
        ir = ir.filter((Ue) => Ue !== z.range);
      else if (z.type === "image") {
        let Ue = Object.assign({ ...ur }, ...ir), ct = ae((z.image.width && z.image.width.value || 20) * 10 / (Ue.font_size || 12)), Gt = ae((z.image.height && z.image.height.value || 20) * 10 / (Ue.font_size || 12));
        const Fr = {
          "font-size": ae((Number(Ue.font_size) || 12) * 10 / It)
        };
        let br = "";
        const zr = z.image.tint_color, Vn = gd(z.image.tint_mode, "source_in");
        if (zr) {
          const hn = fr(z.image.tint_color);
          br = ze.addSvgFilter(hn, Vn), hr.push([hn, Vn]);
        }
        const Ce = {}, qr = (Dt = z.image.accessibility) == null ? void 0 : Dt.type, Yr = ((zt = z.image.accessibility) == null ? void 0 : zt.description) || "";
        (qr === "button" || qr === "image") && Yr ? Ce.role = qr : (!Yr || qr === "none") && (Ce["aria-hidden"] = "true"), at.push({
          image: {
            url: z.image.url,
            width: ct,
            height: Gt,
            wrapperStyle: Fr,
            svgFilterId: br,
            preloadRequired: !!z.image.preload_required,
            verticalAlign: z.image.alignment_vertical,
            description: Yr,
            a11yAttrs: Ce
          }
        });
      }
      mr = We;
    }), mr < ne.length && at.push({
      text: ne.substring(mr),
      textStyles: { ...ur }
    }), t(13, Ut = at), t(6, jt = at.some((z) => {
      var Te;
      return "text" in z && ((Te = z.textStyles.background) == null ? void 0 : Te.type) === "cloud";
    })), t(14, wr = jt && at.length === 1 ? ze.genId("text-whole-bg") : ""), t(15, Sr = wr ? ((d = (oe = _o(at[0].textStyles.background.color)) == null ? void 0 : oe.a) != null ? d : 255) / 255 : void 0);
  }
  function rt(Et) {
    Et.target && "classList" in Et.target && Et.target.classList.add(co.text__image_hidden);
  }
  return ln(() => {
    hr.forEach(([Et, Zt]) => {
      ze.removeSvgFilter(Et, Zt);
    });
  }), e.$$set = (Et) => {
    "componentContext" in Et && t(0, Oe = Et.componentContext), "layoutParams" in Et && t(1, er = Et.layoutParams);
  }, e.$$.update = () => {
    var Et, Zt;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && Oe.json && (t(3, It = 12), t(40, cr = 1.25), t(11, Pe = null), t(41, vt = ""), t(12, nr = void 0), t(4, $t = ""), t(42, Xt = !1), t(43, pr = "start"), t(44, kr = "start"), t(45, Pt = ""), t(47, G = ""), t(5, dt = !1)), e.$$.dirty[0] & /*componentContext*/
    1 && Le(t(37, n = Oe.getDerivedFromVars(Oe.json.text))), e.$$.dirty[0] & /*componentContext*/
    1 && Xe(t(36, o = Oe.getDerivedFromVars(Oe.json.ranges, void 0, !0, 3))), e.$$.dirty[0] & /*componentContext*/
    1 && Ie(t(35, i = Oe.getDerivedFromVars(Oe.json.images))), e.$$.dirty[0] & /*componentContext*/
    1 && Qt(t(34, s = Oe.getDerivedFromVars(
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
    ))), e.$$.dirty[0] & /*componentContext*/
    1 && Y(t(33, a = Oe.getDerivedFromVars(Oe.json.font_size))), e.$$.dirty[0] & /*componentContext*/
    1 && St(t(32, l = Oe.getDerivedFromVars(Oe.json.line_height))), e.$$.dirty[0] & /*componentContext*/
    1 && lt(t(31, c = Oe.getDerivedFromVars(Oe.json.max_lines))), e.$$.dirty[0] & /*componentContext*/
    1 && ge(t(30, u = Oe.getDerivedFromVars(Oe.json.text_alignment_horizontal))), e.$$.dirty[0] & /*componentContext*/
    1 && Nt(t(29, f = Oe.getDerivedFromVars(Oe.json.text_alignment_vertical))), e.$$.dirty[0] & /*componentContext*/
    1 && Be(t(28, _ = Oe.getDerivedFromVars(Oe.json.text_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Ze(t(27, h = Oe.getDerivedFromVars(Oe.json.focused_text_color))), e.$$.dirty[0] & /*componentContext*/
    1 && ie(t(26, m = Oe.getDerivedFromVars(Oe.json.truncate))), e.$$.dirty[0] & /*componentContext*/
    1 && de(t(25, p = Oe.getDerivedFromVars(Oe.json.text_gradient))), e.$$.dirty[0] & /*componentContext*/
    1 && De(t(24, w = Oe.getDerivedFromVars(Oe.json.selectable))), e.$$.dirty[0] & /*componentContext*/
    1 && F(t(23, k = Oe.getDerivedFromVars(Oe.json.auto_ellipsize))), e.$$.dirty[0] & /*componentContext*/
    1 && Ae(t(22, N = Oe.getDerivedFromVars(Oe.json.paddings))), e.$$.dirty[0] & /*componentContext*/
    1 && xe(t(21, R = Oe.getDerivedFromVars(Oe.json.heading_type))), e.$$.dirty[2] & /*$jsonHeadingType*/
    32 && t(9, L = (() => {
      const Yt = pt;
      if (Yt && typeof Yt == "string") {
        const ur = Yt.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(ur))
          return ur;
      }
      return "span";
    })()), e.$$.dirty[0] & /*htmlTag*/
    512 && t(16, Gr = L !== "span" ? "div" : "span"), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[2] & /*$jsonText*/
    16 && (typeof Oe.json.text == "string" ? t(2, Ft = Kp(Jt)) : (t(2, Ft = ""), Oe.logError(J(new Error("Incorrect text value type"))))), e.$$.dirty[1] & /*$jsonTextGradient, $direction*/
    34603008) {
      let Yt = "";
      if (ue) {
        const ur = sl([ue], U);
        ur.image && (Yt = ur.image);
      }
      t(47, G = Yt);
    }
    if (e.$$.dirty[1] & /*gradient*/
    65536 | e.$$.dirty[2] & /*$jsonRootTextStyles*/
    8 && t(7, Ir = G ? { ...At, text_color: "" } : At), e.$$.dirty[0] & /*fontSize, componentContext*/
    9 | e.$$.dirty[2] & /*$jsonTextSize*/
    4) {
      t(3, It = Un(Tt, It));
      const Yt = Oe.json.responsive;
      if (Yt && typeof Yt == "object" && typeof window < "u") {
        const ur = window.matchMedia("(max-width: 767px)").matches, at = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
        ur && ((Et = Yt.mobile) != null && Et.font_size) ? t(3, It = Yt.mobile.font_size) : at && ((Zt = Yt.tablet) != null && Zt.font_size) && t(3, It = Yt.tablet.font_size);
      }
    }
    if (e.$$.dirty[0] & /*fontSize*/
    8 | e.$$.dirty[1] & /*lineHeight*/
    512 | e.$$.dirty[2] & /*$jsonLineHeight*/
    2) {
      const Yt = Ct;
      Bn(Yt) ? (t(40, cr = Number(Yt) / It), t(11, Pe = cr)) : t(11, Pe = null);
    }
    if (e.$$.dirty[1] & /*$jsonMaxLines*/
    536870912 && t(8, ee = it === 1), e.$$.dirty[0] & /*$jsonAutoEllipsize*/
    1024 | e.$$.dirty[1] & /*$jsonMaxLines, lineHeight*/
    536871424) {
      let Yt = "", ur, at = "", ne = !1;
      if (it && it > 1) {
        const mt = Number(it);
        Yt = mt * cr + "em", ur = mt, at = mt, ne = !0;
      } else _t && it !== 1 && (ne = !0);
      t(41, vt = Yt), t(12, nr = ur), t(4, $t = at), t(42, Xt = ne);
    }
    if (e.$$.dirty[1] & /*$direction, halign*/
    1052672 | e.$$.dirty[2] & /*$jsonHAlign*/
    1 && t(43, pr = cl(ut, U, pr)), e.$$.dirty[1] & /*$jsonVAlign, valign*/
    1073750016 && t(44, kr = ul(kt, kr)), e.$$.dirty[0] & /*text*/
    4 | e.$$.dirty[1] & /*$jsonRanges*/
    8388608 && t(50, ce = !$ || Ft && $.length === 1 && $[0] && (!$[0].start || $[0].start === 0) && (!$[0].end || typeof $[0].end == "number" && $[0].end >= Ft.length)), e.$$.dirty[1] & /*gradient, $jsonTextColor, $jsonRanges*/
    276889600 && t(49, T = !!(!G && te) != !!($ && $[0] && $[0].text_color)), e.$$.dirty[1] & /*$jsonMaxLines, isAllTextSameColor, isOnlyOneColorDefined, $jsonTextColor, $jsonRanges, rootTextColor*/
    814497792) {
      let Yt = "";
      it && ce && T && (Yt = fr(te || $ && $[0] && $[0].text_color, 1, Pt)), t(45, Pt = Yt);
    }
    e.$$.dirty[1] & /*$jsonFocusTextColor, focusTextColor*/
    134250496 && t(46, yr = fr(Fe, 1, yr)), e.$$.dirty[1] & /*$jsonTruncate*/
    67108864 && t(48, X = x === "none" ? "none" : ""), e.$$.dirty[0] & /*selectable*/
    32 | e.$$.dirty[1] & /*$jsonSelectable*/
    16777216 && t(5, dt = fn(qe, dt)), e.$$.dirty[0] & /*text, rootTextStyles*/
    132 | e.$$.dirty[1] & /*$jsonRanges, $jsonImages*/
    12582912 && tr(Ft, $, Ee, Ir), e.$$.dirty[0] & /*singleline*/
    256 | e.$$.dirty[1] & /*multiline, halign, valign, truncate, focusTextColor*/
    178176 && t(20, le = {
      singleline: ee,
      multiline: Xt,
      halign: pr,
      valign: kr,
      truncate: X,
      "has-focus-color": !!yr
    }), e.$$.dirty[0] & /*hasCloudBg*/
    64 | e.$$.dirty[1] & /*gradient*/
    65536 && t(19, E = {
      gradient: !!G,
      "has-cloud-bg": jt
    }), e.$$.dirty[0] & /*fontSize, lineClamp*/
    24 | e.$$.dirty[1] & /*lineHeight, maxHeight, rootTextColor, gradient, focusTextColor*/
    116224 && t(18, D = {
      "font-size": ae(It),
      "line-height": cr,
      "max-height": vt,
      "-webkit-line-clamp": $t,
      color: Pt,
      "background-image": G,
      "--divkit-text-focus-color": yr
    }), e.$$.dirty[0] & /*fontSize*/
    8 | e.$$.dirty[1] & /*$jsonPaddings, $direction*/
    3145728 && t(17, P = po(Ol(gi(Z, {}) || {}, 10 / It), U));
  }, [
    Oe,
    er,
    Ft,
    It,
    $t,
    dt,
    jt,
    Ir,
    ee,
    L,
    _t,
    Pe,
    nr,
    Ut,
    wr,
    Sr,
    Gr,
    P,
    D,
    E,
    le,
    R,
    N,
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
    yt,
    rt,
    cr,
    vt,
    Xt,
    pr,
    kr,
    Pt,
    yr,
    G,
    X,
    T,
    ce,
    U,
    Z,
    Ee,
    $,
    qe,
    ue,
    x,
    Fe,
    te,
    it,
    kt,
    ut,
    Ct,
    Tt,
    At,
    Jt,
    pt
  ];
}
class ig extends Br {
  constructor(r) {
    super(), Or(this, r, og, ng, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const sg = "appkit-container", lg = "appkit-container_wrap", ag = "appkit-container_overflow_visible", cg = "appkit-container_orientation_vertical", ug = "appkit-container_valign_start", fg = "appkit-container_valign_center", dg = "appkit-container_valign_end", _g = "appkit-container_halign_start", pg = "appkit-container_halign_center", gg = "appkit-container_halign_end", hg = "appkit-container_orientation_horizontal", mg = "appkit-container_orientation_overlap", ic = {
  container: sg,
  container_wrap: lg,
  container_overflow_visible: ag,
  container_orientation_vertical: cg,
  container_valign_start: ug,
  container_valign_center: fg,
  container_valign_end: dg,
  "container_valign_space-between": "appkit-container_valign_space-between",
  "container_valign_space-around": "appkit-container_valign_space-around",
  "container_valign_space-evenly": "appkit-container_valign_space-evenly",
  container_halign_start: _g,
  container_halign_center: pg,
  container_halign_end: gg,
  "container_halign_space-between": "appkit-container_halign_space-between",
  "container_halign_space-around": "appkit-container_halign_space-around",
  "container_halign_space-evenly": "appkit-container_halign_space-evenly",
  container_orientation_horizontal: hg,
  container_orientation_overlap: mg,
  "container_fixed-container": "appkit-container_fixed-container",
  "container_responsive-mobile-vertical": "appkit-container_responsive-mobile-vertical",
  "container_responsive-mobile-horizontal": "appkit-container_responsive-mobile-horizontal",
  "container_responsive-mobile-has-height": "appkit-container_responsive-mobile-has-height",
  "container_responsive-tablet-vertical": "appkit-container_responsive-tablet-vertical",
  "container_responsive-tablet-horizontal": "appkit-container_responsive-tablet-horizontal",
  "container_responsive-tablet-has-height": "appkit-container_responsive-tablet-has-height"
};
function sc(e) {
  return {
    top: Number(e == null ? void 0 : e.top) || 0,
    right: Number(e == null ? void 0 : e.right) || 0,
    bottom: Number(e == null ? void 0 : e.bottom) || 0,
    left: Number(e == null ? void 0 : e.left) || 0
  };
}
function lc(e, r, t) {
  const n = ((r == null ? void 0 : r.margins.left) || 0) + ((r == null ? void 0 : r.margins.right) || 0), o = ((r == null ? void 0 : r.margins.top) || 0) + ((r == null ? void 0 : r.margins.bottom) || 0);
  r != null && r.show_at_start && (t ? e.top = r.style.height + o : e.left = r.style.width + n), r != null && r.show_at_end && (t ? e.bottom = r.style.height + o : e.right = r.style.width + n);
}
function bg(e, r, t) {
  const n = {};
  return lc(n, r, e === "vertical"), lc(n, t, e === "horizontal"), n;
}
function yg({
  orientation: e,
  separator: r,
  lineSeparator: t,
  itemSpacing: n,
  lineSpacing: o
}) {
  let i;
  const s = ((r == null ? void 0 : r.margins.left) || 0) + ((r == null ? void 0 : r.margins.right) || 0), a = ((r == null ? void 0 : r.margins.top) || 0) + ((r == null ? void 0 : r.margins.bottom) || 0), l = ((t == null ? void 0 : t.margins.left) || 0) + ((t == null ? void 0 : t.margins.right) || 0), c = ((t == null ? void 0 : t.margins.top) || 0) + ((t == null ? void 0 : t.margins.bottom) || 0);
  return e === "horizontal" ? i = [
    t != null && t.show_between ? t.style.height + c : o,
    r != null && r.show_between ? r.style.width + s : n
  ] : i = [
    r != null && r.show_between ? r.style.height + a : n,
    t != null && t.show_between ? t.style.width + l : o
  ], i.map(ae).join(" ");
}
function wg(e) {
  var t;
  const r = (t = e.width) == null ? void 0 : t.type;
  return r !== "wrap_content" && r !== "fixed";
}
function kg(e) {
  var t;
  return ((t = e.height) == null ? void 0 : t.type) === "match_parent";
}
function vg(e, r) {
  return e === "vertical" || e === "horizontal" || e === "overlap" ? e : r;
}
function jg(e) {
  var r, t, n;
  return {
    width: $r((r = e.item_width) == null ? void 0 : r.value, 10),
    height: $r((t = e.item_height) == null ? void 0 : t.value, 10),
    radius: $r((n = e.corner_radius) == null ? void 0 : n.value, 5)
  };
}
function Cg(e) {
  var t;
  const r = $r((t = e.radius) == null ? void 0 : t.value, 10) * 2;
  return {
    width: r,
    height: r,
    radius: r
  };
}
function Eg(e, r, t) {
  var l;
  const n = {}, o = r.stroke || (t == null ? void 0 : t.stroke), i = o != null && o.color ? fr(o.color) : "", s = o != null && o.width ? Number((l = o.width) != null ? l : 1) : "";
  n.width = e.width, n.height = e.height, n.borderRadius = e.radius;
  const a = r.background_color || (t == null ? void 0 : t.color);
  return n.background = fr(a), i && s && (n.boxShadow = `inset 0 0 0 ${ae(s)} ${i}`), n;
}
function ao(e, r, t) {
  if (!e || !e.shape || !e.shape.type || !r.includes(e.shape.type) || e.type !== "shape_drawable")
    return t;
  let n;
  if (e.shape.type === "rounded_rectangle")
    n = jg(e.shape);
  else if (e.shape.type === "circle")
    n = Cg(e.shape);
  else
    return t;
  return Eg(n, e.shape, {
    color: e.color,
    stroke: e.stroke
  });
}
let xi;
function ac() {
  if (typeof document > "u" && (xi = !0), xi !== void 0)
    return xi;
  const e = document.createElement("div");
  return e.style.position = "absolute", e.style.display = "flex", e.style.flexDirection = "column", e.style.gap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e), xi = e.scrollHeight === 1, document.body.removeChild(e), xi;
}
function Ag(e, r) {
  return e === "top" || e === "center" || e === "bottom" || e === "baseline" || e === "space-between" || e === "space-around" || e === "space-evenly" ? e === "top" ? "start" : e === "bottom" ? "end" : e : r;
}
function Sg(e, r, t) {
  return e === "left" || e === "center" || e === "right" || e === "space-between" || e === "space-around" || e === "space-evenly" || e === "start" || e === "end" ? e === "left" ? r === "ltr" ? "start" : "end" : e === "right" ? r === "ltr" ? "end" : "start" : e : t;
}
function Vg() {
}
function Uo(e) {
  return {
    subscribe(r) {
      return r(e), Vg;
    }
  };
}
function fl(e, r, t, n) {
  const o = [], i = n.prototypes;
  return i && e.forEach((s, a) => {
    if (s === null || typeof s != "object")
      return;
    const l = r.preparePrototypeVariables(n.data_element_name || "it", s, a);
    let c, u;
    for (let f = 0; f < i.length; ++f) {
      const _ = i[f];
      if (!_.div)
        continue;
      if (_.selector === void 0) {
        c = _.div, u = t.getJsonWithVars(_.id, l);
        break;
      }
      if (t.getJsonWithVars(_.selector, l)) {
        c = _.div, u = t.getJsonWithVars(_.id, l);
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
const is = {
  "container-separator": "appkit-container-separator",
  "container-separator__item": "appkit-container-separator__item",
  "container-separator__shape": "appkit-container-separator__shape"
};
function Fg(e, r) {
  let t = 0, n, o = !1;
  return function() {
    const i = Date.now();
    return !t || Math.abs(i - t) > r ? (t = i, n = e.apply(this, arguments)) : (o || (o = !0, setTimeout(() => {
      o = !1, n = e.apply(this, arguments);
    }, r)), n);
  };
}
function Ig(e) {
  const r = e.getBoundingClientRect(), t = getComputedStyle(e);
  return {
    top: r.top - parseFloat(t.marginTop),
    right: r.right + parseFloat(t.marginRight),
    bottom: r.bottom + parseFloat(t.marginBottom),
    left: r.left - parseFloat(t.marginLeft)
  };
}
const { window: Dg } = Po;
function cc(e, r, t) {
  const n = e.slice();
  return n[16] = r[t], n;
}
function uc(e) {
  let r, t, n = `${/*item*/
  e[16].style.width}px`, o = `${/*item*/
  e[16].style.height}px`, i = `${/*item*/
  e[16].style.borderRadius}px`, s, a = `${/*item*/
  e[16].left}px`, l = `${/*item*/
  e[16].top}px`, c = `${/*item*/
  e[16].width}px`, u = `${/*item*/
  e[16].height}px`;
  return {
    c() {
      r = Me("div"), t = Me("div"), s = gr(), g(t, "class", is["container-separator__shape"]), I(t, "width", n), I(t, "height", o), I(t, "border-radius", i), I(
        t,
        "background",
        /*item*/
        e[16].style.background
      ), I(
        t,
        "box-shadow",
        /*item*/
        e[16].style.boxShadow
      ), g(r, "class", is["container-separator__item"]), I(r, "left", a), I(r, "top", l), I(r, "width", c), I(r, "height", u);
    },
    m(f, _) {
      K(f, r, _), wt(r, t), wt(r, s);
    },
    p(f, _) {
      _ & /*separators*/
      2 && n !== (n = `${/*item*/
      f[16].style.width}px`) && I(t, "width", n), _ & /*separators*/
      2 && o !== (o = `${/*item*/
      f[16].style.height}px`) && I(t, "height", o), _ & /*separators*/
      2 && i !== (i = `${/*item*/
      f[16].style.borderRadius}px`) && I(t, "border-radius", i), _ & /*separators*/
      2 && I(
        t,
        "background",
        /*item*/
        f[16].style.background
      ), _ & /*separators*/
      2 && I(
        t,
        "box-shadow",
        /*item*/
        f[16].style.boxShadow
      ), _ & /*separators*/
      2 && a !== (a = `${/*item*/
      f[16].left}px`) && I(r, "left", a), _ & /*separators*/
      2 && l !== (l = `${/*item*/
      f[16].top}px`) && I(r, "top", l), _ & /*separators*/
      2 && c !== (c = `${/*item*/
      f[16].width}px`) && I(r, "width", c), _ & /*separators*/
      2 && u !== (u = `${/*item*/
      f[16].height}px`) && I(r, "height", u);
    },
    d(f) {
      f && q(r);
    }
  };
}
function Tg(e) {
  let r, t, n, o = or(
    /*separators*/
    e[1]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = uc(cc(e, o, s));
  return {
    c() {
      r = Me("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      g(r, "class", is["container-separator"]);
    },
    m(s, a) {
      K(s, r, a);
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, null);
      e[13](r), t || (n = Ke(
        Dg,
        "resize",
        /*throttledUpdated*/
        e[2]
      ), t = !0);
    },
    p(s, [a]) {
      if (a & /*separators*/
      2) {
        o = or(
          /*separators*/
          s[1]
        );
        let l;
        for (l = 0; l < o.length; l += 1) {
          const c = cc(s, o, l);
          i[l] ? i[l].p(c, a) : (i[l] = uc(c), i[l].c(), i[l].m(r, null));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = o.length;
      }
    },
    i: C,
    o: C,
    d(s) {
      s && q(r), sn(i, s), e[13](null), t = !1, n();
    }
  };
}
const Mg = 10;
function Al(e, r, t, n, o, i) {
  const s = r.margins.left, a = r.margins.right, l = r.margins.top, c = r.margins.bottom;
  i ? e.push({
    top: t.bottom + l,
    left: o.left + s,
    width: Math.max(0, o.right - o.left - s - a),
    height: n.top - t.bottom - l - c,
    style: r.style
  }) : e.push({
    top: o.top + l,
    left: t.right + s,
    width: n.left - t.right - s - a,
    height: Math.max(0, o.bottom - o.top - l - c),
    style: r.style
  });
}
function fc(e, r, t, n, o, i) {
  const s = {
    top: Math.min(...t.map((a) => a.top)),
    right: Math.max(...t.map((a) => a.right)),
    bottom: Math.max(...t.map((a) => a.bottom)),
    left: Math.min(...t.map((a) => a.left))
  };
  if (r != null && r.show_at_start) {
    let a, l;
    o === "space-around" || o === "space-evenly" ? (a = i.left - r.style.width, l = i.top - r.style.height) : (a = t[0].left - r.style.width - r.margins.left - r.margins.right, l = t[0].top - r.style.height - r.margins.top - r.margins.bottom), Al(
      e,
      r,
      // only right and bottom is used
      { top: 0, right: a, bottom: l, left: 0 },
      t[0],
      s,
      n
    );
  }
  if (r != null && r.show_between)
    for (let a = 0; a < t.length - 1; ++a)
      Al(e, r, t[a], t[a + 1], s, n);
  if (r != null && r.show_at_end) {
    const a = t[t.length - 1];
    let l, c;
    o === "space-around" || o === "space-evenly" ? (l = i.bottom + r.style.height, c = i.right + r.style.width) : (l = a.bottom + r.style.height + r.margins.top + r.margins.bottom, c = a.right + r.style.width + r.margins.left + r.margins.right), Al(
      e,
      r,
      a,
      // only top and left is used
      { top: l, right: 0, bottom: 0, left: c },
      s,
      n
    );
  }
}
function Pg(e, r, t) {
  let n, { orientation: o } = r, { separator: i } = r, { lineSeparator: s } = r, { contentHAlign: a } = r, { contentVAlign: l } = r, { direction: c } = r;
  const u = Fg(k, Mg);
  let f = [], _, h = !1, m = null, p = null;
  function w(R) {
    R.some((L) => {
      var ce;
      const ee = (ce = L.target) == null ? void 0 : ce.classList;
      return !(ee != null && ee.contains(is["container-separator__shape"])) && !(ee != null && ee.contains(is["container-separator"]));
    }) && u();
  }
  function k() {
    if (!n)
      return;
    const R = n.getBoundingClientRect(), L = window.getComputedStyle(n), ee = {
      top: R.top + parseFloat(L.paddingTop),
      right: R.right - parseFloat(L.paddingRight),
      bottom: R.bottom - parseFloat(L.paddingBottom),
      left: R.left + parseFloat(L.paddingLeft)
    };
    t(1, f = []);
    let ce = [...n.children].filter((le) => le !== _ && le instanceof HTMLElement && !le.classList.contains(Us.outer__border) && getComputedStyle(le).display !== "none"), T = [];
    for (; ce.length; ) {
      const le = [], E = ce.shift();
      le.push(E);
      let D = E.getBoundingClientRect(), P = D.left, U = D.right, Z = D.bottom;
      for (; ce.length; ) {
        let be = ce[0], Ae = be.getBoundingClientRect();
        if (o === "vertical") {
          if (Ae.top < Z)
            break;
        } else if (c === "ltr" ? Ae.left < U : Ae.right > P)
          break;
        U = Math.max(U, Ae.right), P = Math.min(P, Ae.left), Z = Math.max(Z, Ae.bottom), le.push(be), ce.shift();
      }
      T.push(le);
    }
    const X = [];
    T.forEach((le) => {
      const E = le.map((P) => Ig(P));
      c === "rtl" && o === "horizontal" && E.reverse(), i && fc(
        f,
        i,
        E,
        o === "vertical",
        o === "vertical" ? l : a,
        ee
      );
      const D = {
        top: Math.min(...E.map((P) => P.top)),
        right: Math.max(...E.map((P) => P.right)),
        bottom: Math.max(...E.map((P) => P.bottom)),
        left: Math.min(...E.map((P) => P.left))
      };
      X.push(D);
    }), c === "rtl" && o === "vertical" && X.reverse(), s && fc(
      f,
      s,
      X,
      o === "horizontal",
      o === "vertical" ? a : l,
      ee
    ), f.forEach((le) => {
      le.top -= R.top, le.left -= R.left;
    });
  }
  ro(() => {
    t(9, h = !0);
  }), ln(() => {
    t(9, h = !1);
  });
  function N(R) {
    Dr[R ? "unshift" : "push"](() => {
      _ = R, t(0, _);
    });
  }
  return e.$$set = (R) => {
    "orientation" in R && t(3, o = R.orientation), "separator" in R && t(4, i = R.separator), "lineSeparator" in R && t(5, s = R.lineSeparator), "contentHAlign" in R && t(6, a = R.contentHAlign), "contentVAlign" in R && t(7, l = R.contentVAlign), "direction" in R && t(8, c = R.direction);
  }, e.$$.update = () => {
    e.$$.dirty & /*node*/
    1 && t(12, n = (_ == null ? void 0 : _.parentElement) || null), e.$$.dirty & /*mounted, parentElement, mutationObserver, resizeObserver*/
    7680 && (h && n || m || p) && (m && (m.disconnect(), t(10, m = null)), p && (p.disconnect(), t(11, p = null)), h && n && (typeof MutationObserver < "u" && (t(10, m = new MutationObserver(w)), m.observe(n, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    })), typeof ResizeObserver < "u" && (t(11, p = new ResizeObserver(u)), p.observe(n)))), e.$$.dirty & /*mounted, parentElement*/
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
    N
  ];
}
class Ng extends Br {
  constructor(r) {
    super(), Or(this, r, Pg, Tg, Vr, {
      orientation: 3,
      separator: 4,
      lineSeparator: 5,
      contentHAlign: 6,
      contentVAlign: 7,
      direction: 8
    });
  }
}
const { Boolean: zg } = Po;
function dc(e, r, t) {
  const n = e.slice();
  return n[63] = r[t], n;
}
function _c(e) {
  let r, t;
  return r = new Qn({
    props: {
      componentContext: (
        /*item*/
        e[63]
      ),
      layoutParams: (
        /*childLayoutParams*/
        e[8]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function pc(e) {
  let r, t;
  return r = new Ng({
    props: {
      direction: (
        /*$direction*/
        e[10]
      ),
      separator: (
        /*separator*/
        e[5]
      ),
      lineSeparator: (
        /*lineSeparator*/
        e[6]
      ),
      orientation: (
        /*orientation*/
        e[2]
      ),
      contentHAlign: (
        /*contentHAlign*/
        e[4]
      ),
      contentVAlign: (
        /*contentVAlign*/
        e[3]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Og(e) {
  let r, t, n, o = or(
    /*items*/
    e[9]
  ), i = [];
  for (let l = 0; l < o.length; l += 1)
    i[l] = _c(dc(e, o, l));
  const s = (l) => re(i[l], 1, 1, () => {
    i[l] = null;
  });
  let a = (
    /*separator*/
    (e[5] || /*lineSeparator*/
    e[6]) && pc(e)
  );
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      r = gr(), a && a.c(), t = xt();
    },
    m(l, c) {
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(l, c);
      K(l, r, c), a && a.m(l, c), K(l, t, c), n = !0;
    },
    p(l, c) {
      if (c[0] & /*items, childLayoutParams*/
      768) {
        o = or(
          /*items*/
          l[9]
        );
        let u;
        for (u = 0; u < o.length; u += 1) {
          const f = dc(l, o, u);
          i[u] ? (i[u].p(f, c), W(i[u], 1)) : (i[u] = _c(f), i[u].c(), W(i[u], 1), i[u].m(r.parentNode, r));
        }
        for (dr(), u = o.length; u < i.length; u += 1)
          s(u);
        _r();
      }
      /*separator*/
      l[5] || /*lineSeparator*/
      l[6] ? a ? (a.p(l, c), c[0] & /*separator, lineSeparator*/
      96 && W(a, 1)) : (a = pc(l), a.c(), W(a, 1), a.m(t.parentNode, t)) : a && (dr(), re(a, 1, 1, () => {
        a = null;
      }), _r());
    },
    i(l) {
      if (!n) {
        for (let c = 0; c < o.length; c += 1)
          W(i[c]);
        W(a), n = !0;
      }
    },
    o(l) {
      i = i.filter(zg);
      for (let c = 0; c < i.length; c += 1)
        re(i[c]);
      re(a), n = !1;
    },
    d(l) {
      l && (q(r), q(t)), sn(i, l), a && a.d(l);
    }
  };
}
function Bg(e) {
  let r, t;
  return r = new wn({
    props: {
      cls: bt(
        "container",
        ic,
        /*mods*/
        e[12]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      style: (
        /*style*/
        e[13]
      ),
      additionalPaddings: (
        /*additionalPaddings*/
        e[14]
      ),
      heightByAspect: !!/*aspect*/
      e[7],
      parentOf: (
        /*items*/
        e[9]
      ),
      replaceItems: (
        /*replaceItems*/
        e[31]
      ),
      $$slots: { default: [Og] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = bt(
        "container",
        ic,
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
const Lg = {
  start: "start",
  center: "center",
  end: "end",
  // 'space-*' values doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, Rg = {
  start: "start",
  center: "center",
  end: "end",
  baseline: "baseline",
  // 'space-*' doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, gc = ["rounded_rectangle", "circle"];
function Hg(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, ee, ce, T, X, le, E, D, P = C, U = () => (P(), P = S(k, (dt) => t(45, D = dt)), k), Z, be = C, Ae = () => (be(), be = S(R, (dt) => t(46, Z = dt)), R), Ee, _e = C, Ie = () => (_e(), _e = S(N, (dt) => t(47, Ee = dt)), N), $, tt = C, Xe = () => (tt(), tt = S(w, (dt) => t(48, $ = dt)), w), qe, ve = C, De = () => (ve(), ve = S(p, (dt) => t(49, qe = dt)), p), ue, ke = C, de = () => (ke(), ke = S(m, (dt) => t(50, ue = dt)), m), x, fe = C, ie = () => (fe(), fe = S(f, (dt) => t(51, x = dt)), f), Fe, Ye = C, Ze = () => (Ye(), Ye = S(u, (dt) => t(52, Fe = dt)), u), te, He = C, Be = () => (He(), He = S(h, (dt) => t(53, te = dt)), h), it, st = C, lt = () => (st(), st = S(_, (dt) => t(54, it = dt)), _), kt, nt, Nt = C, ut = () => (Nt(), Nt = S(c, (dt) => t(55, nt = dt)), c), pe, ge = C, _t = () => (ge(), ge = S(l, (dt) => t(56, pe = dt)), l), Se, F = C, Ct = () => (F(), F = S(xe, (dt) => t(57, Se = dt)), xe), ft, St = C, Tt = () => (St(), St = S(a, (dt) => t(58, ft = dt)), a), $e, Y = C, At = () => (Y(), Y = S(s, (dt) => t(59, $e = dt)), s), Mt, Qt = C, Jt = () => (Qt(), Qt = S(i, (dt) => t(60, Mt = dt)), i);
  e.$$.on_destroy.push(() => P()), e.$$.on_destroy.push(() => be()), e.$$.on_destroy.push(() => _e()), e.$$.on_destroy.push(() => tt()), e.$$.on_destroy.push(() => ve()), e.$$.on_destroy.push(() => ke()), e.$$.on_destroy.push(() => fe()), e.$$.on_destroy.push(() => Ye()), e.$$.on_destroy.push(() => He()), e.$$.on_destroy.push(() => st()), e.$$.on_destroy.push(() => Nt()), e.$$.on_destroy.push(() => ge()), e.$$.on_destroy.push(() => F()), e.$$.on_destroy.push(() => St()), e.$$.on_destroy.push(() => Y()), e.$$.on_destroy.push(() => Qt());
  let { componentContext: he } = r, { layoutParams: Le = void 0 } = r;
  const pt = Tr(Zr), ye = pt.direction;
  yn(e, ye, (dt) => t(10, kt = dt));
  let xe, Oe = "vertical", er = "start", ze = "start", yt = null, Ft = null, It, cr = {}, Pe = 0, vt = 0, nr = !1;
  function $t() {
    t(2, Oe = "vertical"), t(3, er = "start"), t(4, ze = "start"), t(7, It = void 0), t(32, Pe = 0), t(33, vt = 0), t(34, nr = !1);
  }
  function Xt(dt) {
    t(0, he = t(35, kr = {
      ...he,
      json: {
        ...he.json,
        items: dt.filter(zo)
      }
    }));
  }
  let pr = [], kr, Pt = {}, yr, G;
  return ln(() => {
    pr.forEach((dt) => {
      dt.destroy();
    });
  }), e.$$set = (dt) => {
    "componentContext" in dt && t(0, he = dt.componentContext), "layoutParams" in dt && t(1, Le = dt.layoutParams);
  }, e.$$.update = () => {
    var dt, Ut, jt, wr, Sr, hr, Ir, Gr, tr, rt, Et;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(44, n = he.origJson), e.$$.dirty[1] & /*origJson*/
    8192 && n && $t(), e.$$.dirty[0] & /*componentContext*/
    1 && t(43, o = he.json.items), e.$$.dirty[0] & /*componentContext*/
    1 && Jt(t(29, i = typeof ((dt = he.json.item_builder) == null ? void 0 : dt.data) == "string" ? he.getDerivedFromVars((Ut = he.json.item_builder) == null ? void 0 : Ut.data, void 0, !0) : (jt = he.json.item_builder) != null && jt.data ? Uo(he.json.item_builder.data) : void 0)), e.$$.dirty[0] & /*componentContext*/
    1 && At(t(28, s = he.getDerivedFromVars(he.json.orientation))), e.$$.dirty[0] & /*componentContext*/
    1 && Tt(t(27, a = he.getDerivedFromVars(he.json.layout_mode))), e.$$.dirty[0] & /*componentContext*/
    1 && _t(t(26, l = he.getDerivedFromVars(he.json.content_alignment_vertical))), e.$$.dirty[0] & /*componentContext*/
    1 && ut(t(25, c = he.getDerivedFromVars(he.json.content_alignment_horizontal))), e.$$.dirty[0] & /*componentContext*/
    1 && Ze(t(24, u = he.getDerivedFromVars(he.json.separator))), e.$$.dirty[0] & /*componentContext*/
    1 && ie(t(23, f = he.getDerivedFromVars(he.json.line_separator))), e.$$.dirty[0] & /*componentContext*/
    1 && lt(t(22, _ = he.getDerivedFromVars(he.json.item_spacing))), e.$$.dirty[0] & /*componentContext*/
    1 && Be(t(21, h = he.getDerivedFromVars(he.json.line_spacing))), e.$$.dirty[0] & /*componentContext*/
    1 && de(t(20, m = he.getDerivedFromVars(he.json.aspect))), e.$$.dirty[0] & /*componentContext*/
    1 && De(t(19, p = he.getDerivedFromVars(he.json.width))), e.$$.dirty[0] & /*componentContext*/
    1 && Xe(t(18, w = he.getDerivedFromVars(he.json.height))), e.$$.dirty[0] & /*componentContext*/
    1 && U(t(17, k = he.getDerivedFromVars(he.json.clip_to_bounds))), e.$$.dirty[0] & /*componentContext*/
    1 && Ie(t(16, N = he.getDerivedFromVars(he.json.max_width))), e.$$.dirty[0] & /*componentContext*/
    1 && Ae(t(15, R = he.getDerivedFromVars(he.json.responsive))), e.$$.dirty[0] & /*componentContext, items*/
    513 | e.$$.dirty[1] & /*$jsonItemBuilderData, jsonItems, prevContext*/
    536875024) {
      let Zt = [];
      if (he.json.item_builder && Array.isArray(Mt) && Array.isArray(he.json.item_builder.prototypes)) {
        const ne = he.json.item_builder;
        Zt = fl(Mt, pt, he, ne);
      } else
        Zt = (Array.isArray(o) && o || []).map((ne, mt) => ({
          div: ne,
          key: ne.id || { index: mt, data: ne }
        }));
      const Yt = new Set(pr), ur = /* @__PURE__ */ new Map();
      let at = !1;
      kr === he && pr.forEach((ne) => {
        ne.key && (typeof ne.key == "string" && ur.has(ne.key) ? at || (at = !0, he.logError(J(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: ne.key } }))) : ur.set(
          typeof ne.key == "string" ? ne.key : ne.key.index,
          ne
        ));
      }), t(9, pr = Zt.map((ne, mt) => {
        let rr = !at && ur.get(ne.id), mr = ur.get(mt);
        return !rr && !ne.id && typeof ne.key == "object" && typeof (mr == null ? void 0 : mr.key) == "object" && Ui(mr.key.data, ne.key.data) && (rr = mr), rr ? (Yt.delete(rr), rr) : he.produceChildContext(ne.div, {
          path: mt,
          variables: ne.vars,
          id: ne.id,
          key: ne.key
        });
      }));
      for (const ne of Yt)
        ne.destroy();
      t(35, kr = he);
    }
    if (e.$$.dirty[0] & /*items, componentContext*/
    513) {
      let Zt = [];
      pr.forEach((Yt) => {
        Zt.push(he.getDerivedFromVars({
          width: Yt.json.width,
          height: Yt.json.height
        }));
      }), Ct(t(11, xe = Wi(Zt, (Yt) => [...Yt])));
    }
    if (e.$$.dirty[0] & /*orientation*/
    4 | e.$$.dirty[1] & /*$jsonOrientation*/
    268435456 && t(2, Oe = vg($e, Oe)), e.$$.dirty[1] & /*$jsonLayoutMode*/
    134217728 && t(38, L = ft === "wrap"), e.$$.dirty[0] & /*orientation*/
    4 | e.$$.dirty[1] & /*wrap*/
    128 && t(42, ee = Oe !== "horizontal" && !L), e.$$.dirty[0] & /*orientation*/
    4 | e.$$.dirty[1] & /*wrap*/
    128 && t(41, ce = Oe !== "vertical" && !L), e.$$.dirty[0] & /*orientation*/
    4 | e.$$.dirty[1] & /*$childStore*/
    67108864 && t(40, T = Oe === "overlap" && !Se.every(wg)), e.$$.dirty[0] & /*orientation*/
    4 | e.$$.dirty[1] & /*$childStore*/
    67108864 && t(39, X = Oe === "overlap" && !Se.every(kg)), e.$$.dirty[0] & /*contentVAlign*/
    8 | e.$$.dirty[1] & /*$jsonContentVAlign*/
    33554432 && t(3, er = Ag(pe, er)), e.$$.dirty[0] & /*$direction, contentHAlign*/
    1040 | e.$$.dirty[1] & /*$jsonContentHAlign*/
    16777216 && t(4, ze = Sg(nt, kt, ze)), e.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    8388610 && t(32, Pe = $r(it, Pe)), e.$$.dirty[1] & /*$jsonLineSpacing, lineSpacing*/
    4194308 && t(33, vt = $r(te, vt)), e.$$.dirty[0] & /*orientation, separator, componentContext*/
    37 | e.$$.dirty[1] & /*$jsonSeparator, itemSpacing*/
    2097154)
      if (Fe != null && Fe.style && Oe !== "overlap" && ac()) {
        const Zt = ao(Fe.style, gc, (yt == null ? void 0 : yt.style) || null);
        Zt ? (t(5, yt = {
          show_at_start: !!((wr = Fe.show_at_start) != null && wr),
          show_at_end: !!((Sr = Fe.show_at_end) != null && Sr),
          show_between: !!((hr = Fe.show_between) == null || hr),
          style: Zt,
          margins: sc(Fe.margins)
        }), yt.show_between && Pe && he.logError(J(new Error("item_spacing will be ignored due to the 'separator' property."), { level: "warn" }))) : t(5, yt = null);
      } else
        t(5, yt = null);
    if (e.$$.dirty[0] & /*orientation, lineSeparator, componentContext*/
    69 | e.$$.dirty[1] & /*$jsonLineSeparator, lineSpacing*/
    1048580)
      if (x != null && x.style && Oe !== "overlap" && ac()) {
        const Zt = ao(x.style, gc, (Ft == null ? void 0 : Ft.style) || null);
        Zt ? (t(6, Ft = {
          show_at_start: !!((Ir = x.show_at_start) != null && Ir),
          show_at_end: !!((Gr = x.show_at_end) != null && Gr),
          show_between: !!((tr = x.show_between) == null || tr),
          style: Zt,
          margins: sc(x.margins)
        }), Ft.show_between && vt && he.logError(J(new Error("line_spacing will be ignored due to the 'line_separator' property."), { level: "warn" }))) : t(6, Ft = null);
      } else
        t(6, Ft = null);
    if (e.$$.dirty[0] & /*separator, lineSeparator, orientation*/
    100 && t(14, le = yt || Ft ? bg(Oe, yt, Ft) : null), e.$$.dirty[1] & /*$jsonAspect*/
    524288) {
      const Zt = ue == null ? void 0 : ue.ratio;
      Zt && Bn(Zt) ? t(7, It = Zt) : t(7, It = void 0);
    }
    if (e.$$.dirty[0] & /*orientation, contentHAlign, contentVAlign, layoutParams, aspect, childLayoutParams*/
    414 | e.$$.dirty[1] & /*wrap, $jsonWidth, $jsonHeight, supportWidthWrapContent, supportHeightWrapContent, stretchWidth, stretchHeight*/
    397184) {
      let Zt = {};
      Oe === "overlap" && (Zt.overlapParent = !0), Oe !== "horizontal" && (Zt.parentHAlign = L ? "start" : Lg[ze]), Oe !== "vertical" && (Zt.parentVAlign = L ? "start" : Rg[er]);
      const Yt = (qe == null ? void 0 : qe.type) === "wrap_content" || (qe == null ? void 0 : qe.type) === "match_parent" && (Le == null ? void 0 : Le.parentHorizontalWrapContent), ur = !$ || $.type === "wrap_content" || $.type === "match_parent" && (Le == null ? void 0 : Le.parentVerticalWrapContent);
      !ee && Yt && (Zt.parentHorizontalWrapContent = !0), !It && !ce && ur && (Zt.parentVerticalWrapContent = !0), Yt || (Zt.parentContainerKnownWidth = !0), ur || (Zt.parentContainerKnownHeight = !0), Zt.stretchWidth = T, Zt.stretchHeight = X, Oe === "horizontal" && (Zt.parentContainerOrientation = "horizontal"), Oe === "vertical" && (Zt.parentContainerOrientation = "vertical"), L && (Zt.parentContainerWrap = !0), t(8, cr = Zo(Zt, cr));
    }
    if (e.$$.dirty[1] & /*$jsonMaxWidth*/
    65536 && t(34, nr = (Ee == null ? void 0 : Ee.type) === "fixed"), e.$$.dirty[0] & /*orientation, contentVAlign, contentHAlign*/
    28 | e.$$.dirty[1] & /*$jsonResponsive, wrap, $jsonClipToBounds, isFixedContainer, responsiveMobileHeight, responsiveTabletHeight*/
    49384) {
      let Zt, Yt;
      if (t(36, yr = void 0), t(37, G = void 0), Z) {
        const ur = Z == null ? void 0 : Z.mobile, at = Z == null ? void 0 : Z.tablet;
        if (ur != null && ur.orientation && (Zt = String(ur.orientation)), at != null && at.orientation && (Yt = String(at.orientation)), ((rt = ur == null ? void 0 : ur.height) == null ? void 0 : rt.type) === "fixed" && ur.height.value !== void 0) {
          const ne = $r(ur.height.value, 0);
          t(36, yr = ne > 0 ? ne : void 0);
        }
        if (((Et = at == null ? void 0 : at.height) == null ? void 0 : Et.type) === "fixed" && at.height.value !== void 0) {
          const ne = $r(at.height.value, 0);
          t(37, G = ne > 0 ? ne : void 0);
        }
      }
      t(12, Pt = {
        orientation: Oe,
        valign: er,
        halign: ze,
        wrap: L,
        overflow: D === !1 || D === 0 ? "visible" : void 0,
        "fixed-container": nr,
        "responsive-mobile-vertical": Zt === "vertical",
        "responsive-mobile-horizontal": Zt === "horizontal",
        "responsive-tablet-vertical": Yt === "vertical",
        "responsive-tablet-horizontal": Yt === "horizontal",
        "responsive-mobile-has-height": yr !== void 0,
        "responsive-tablet-has-height": G !== void 0
      });
    }
    e.$$.dirty[0] & /*separator, lineSeparator, orientation, aspect*/
    228 | e.$$.dirty[1] & /*itemSpacing, lineSpacing, responsiveMobileHeight, responsiveTabletHeight*/
    102 && t(13, E = {
      gap: yt || Ft || Pe || vt ? yg({
        orientation: Oe,
        separator: yt,
        lineSeparator: Ft,
        itemSpacing: Pe,
        lineSpacing: vt
      }) : void 0,
      "aspect-ratio": It,
      "--responsive-mobile-height": yr !== void 0 ? ae(yr) : void 0,
      "--responsive-tablet-height": G !== void 0 ? ae(G) : void 0
    });
  }, [
    he,
    Le,
    Oe,
    er,
    ze,
    yt,
    Ft,
    It,
    cr,
    pr,
    kt,
    xe,
    Pt,
    E,
    le,
    R,
    N,
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
    ye,
    Xt,
    Pe,
    vt,
    nr,
    kr,
    yr,
    G,
    L,
    X,
    T,
    ce,
    ee,
    o,
    n,
    D,
    Z,
    Ee,
    $,
    qe,
    ue,
    x,
    Fe,
    te,
    it,
    nt,
    pe,
    Se,
    ft,
    $e,
    Mt
  ];
}
class Wg extends Br {
  constructor(r) {
    super(), Or(this, r, Hg, Bg, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Ug = "appkit-separator", Gg = "appkit-separator_orientation_horizontal", Jg = "appkit-separator_orientation_vertical", qg = "appkit-separator__inner", Bl = {
  separator: Ug,
  separator_orientation_horizontal: Gg,
  separator_orientation_vertical: Jg,
  separator__inner: qg
};
function _a(e, r) {
  return e === "vertical" || e === "horizontal" ? e : r;
}
function hc(e) {
  let r, t;
  return {
    c() {
      r = Me("span"), g(r, "class", Bl.separator__inner), g(r, "style", t = ar(
        /*style*/
        e[3]
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o & /*style*/
      8 && t !== (t = ar(
        /*style*/
        n[3]
      )) && g(r, "style", t);
    },
    d(n) {
      n && q(r);
    }
  };
}
function Yg(e) {
  let r, t = (
    /*hasContent*/
    e[4] && hc(e)
  );
  return {
    c() {
      t && t.c(), r = xt();
    },
    m(n, o) {
      t && t.m(n, o), K(n, r, o);
    },
    p(n, o) {
      /*hasContent*/
      n[4] ? t ? t.p(n, o) : (t = hc(n), t.c(), t.m(r.parentNode, r)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && q(r), t && t.d(n);
    }
  };
}
function Kg(e) {
  let r, t;
  return r = new wn({
    props: {
      cls: bt(
        "separator",
        Bl,
        /*mods*/
        e[2]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: { default: [Yg] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, [o]) {
      const i = {};
      o & /*mods*/
      4 && (i.cls = bt(
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Xg(e, r, t) {
  let n, o, i, s, a, l, c, u, f = C, _ = () => (f(), f = S(o, (N) => t(11, u = N)), o);
  e.$$.on_destroy.push(() => f());
  let { componentContext: h } = r, { layoutParams: m = void 0 } = r, p = "horizontal", w = "rgba(0,0,0,0.08)";
  function k() {
    t(6, p = "horizontal"), t(7, w = "rgba(0,0,0,0.08)");
  }
  return e.$$set = (N) => {
    "componentContext" in N && t(0, h = N.componentContext), "layoutParams" in N && t(1, m = N.layoutParams);
  }, e.$$.update = () => {
    e.$$.dirty & /*componentContext*/
    1 && t(10, n = h.origJson), e.$$.dirty & /*origJson*/
    1024 && n && k(), e.$$.dirty & /*componentContext*/
    1 && _(t(5, o = h.getDerivedFromVars(h.json.delimiter_style))), e.$$.dirty & /*$jsonDelimiterStyle, orientation*/
    2112 && t(6, p = _a(u == null ? void 0 : u.orientation, p)), e.$$.dirty & /*$jsonDelimiterStyle*/
    2048 && t(4, i = !(u != null && u.color && (u.color === "transparent" || u.color.length === 9 && u.color.indexOf("#00") === 0))), e.$$.dirty & /*$jsonDelimiterStyle, background*/
    2176 && t(7, w = fr(u == null ? void 0 : u.color, 1, w)), e.$$.dirty & /*orientation*/
    64 && t(9, s = p === "horizontal" ? "100%" : ae(1)), e.$$.dirty & /*orientation*/
    64 && t(8, a = p === "horizontal" ? ae(1) : "100%"), e.$$.dirty & /*background, width, height*/
    896 && t(3, l = { background: w, width: s, height: a }), e.$$.dirty & /*orientation*/
    64 && t(2, c = { orientation: p });
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
class Zg extends Br {
  constructor(r) {
    super(), Or(this, r, Xg, Kg, Vr, { componentContext: 0, layoutParams: 1 });
  }
}
const Qg = "appkit-image", xg = "appkit-image__image", $g = "appkit-image_error", eh = "appkit-image_aspect", th = "appkit-image_loaded", Ll = {
  image: Qg,
  "image_is-width-content": "appkit-image_is-width-content",
  "image_is-height-content": "appkit-image_is-height-content",
  image__image: xg,
  image_error: $g,
  "image_is-rtl-mirror": "appkit-image_is-rtl-mirror",
  image_aspect: eh,
  "image_aspect-content": "appkit-image_aspect-content",
  image_loaded: th,
  "divkit-image-appearance": "appkit-divkit-image-appearance",
  "image_before-appearance": "appkit-image_before-appearance"
};
function rh(e, r, t) {
  const n = e.content_alignment_horizontal, o = e.content_alignment_vertical;
  return n && n !== "left" && n !== "center" && n !== "right" && n !== "start" && n !== "end" || o && o !== "top" && o !== "center" && o !== "bottom" ? t : dd({
    content_alignment_horizontal: n,
    content_alignment_vertical: o
  }, r);
}
function md(e) {
  return e.startsWith("data:") ? Pl(e) : `data:image/jpg;base64,${Pl(e)}`;
}
function nh(e, r, t) {
  let { componentContext: n } = r;
  Tr(Zr);
  function o() {
  }
  return ro(() => {
  }), ol(o), ln(() => {
  }), e.$$set = (i) => {
    "componentContext" in i && t(0, n = i.componentContext);
  }, [n];
}
class Nn extends Br {
  constructor(r) {
    super(), Or(this, r, nh, null, Vr, { componentContext: 0 });
  }
}
function oh(e) {
  let r, t;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function ih(e) {
  let r, t;
  return r = new wn({
    props: {
      cls: bt(
        "image",
        Ll,
        /*mods*/
        e[12]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      customDescription: !0,
      style: { "aspect-ratio": (
        /*aspectRatio*/
        e[4]
      ) },
      heightByAspect: (
        /*aspectRatio*/
        e[4] !== void 0
      ),
      $$slots: {
        default: [
          sh,
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
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = bt(
        "image",
        Ll,
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function mc(e) {
  let r, t, n, o, i, s, a, l;
  return {
    c() {
      r = Me("img"), g(r, "class", Ll.image__image), Xn(r.src, t = /*state*/
      e[2] === ts ? Rl : (
        /*imageUrl*/
        e[3]
      )) || g(r, "src", t), g(r, "loading", n = /*$jsonPreloadRequired*/
      e[31] || /*highPrority*/
      e[10] ? "eager" : "lazy"), g(r, "decoding", o = /*highPrority*/
      e[10] ? "sync" : "async"), g(r, "style", i = ar({
        .../*style*/
        e[11],
        "min-width": (
          /*isWidthContent*/
          e[7] ? (
            /*widthMin*/
            e[75]
          ) : void 0
        ),
        "max-width": (
          /*isWidthContent*/
          e[7] ? (
            /*widthMax*/
            e[76]
          ) : void 0
        ),
        "min-height": (
          /*isHeightContent*/
          e[6] ? (
            /*heightMin*/
            e[77]
          ) : void 0
        ),
        "max-height": (
          /*isHeightContent*/
          e[6] ? (
            /*heightMax*/
            e[78]
          ) : void 0
        )
      })), g(
        r,
        "alt",
        /*alt*/
        e[13]
      ), g(r, "aria-hidden", s = /*alt*/
      e[13] ? null : "true");
    },
    m(c, u) {
      K(c, r, u), e[70](r), a || (l = [
        Ke(
          r,
          "load",
          /*onLoad*/
          e[33]
        ),
        Ke(
          r,
          "error",
          /*onError*/
          e[34]
        )
      ], a = !0);
    },
    p(c, u) {
      u[0] & /*state, imageUrl*/
      12 && !Xn(r.src, t = /*state*/
      c[2] === ts ? Rl : (
        /*imageUrl*/
        c[3]
      )) && g(r, "src", t), u[0] & /*highPrority*/
      1024 | u[1] & /*$jsonPreloadRequired*/
      1 && n !== (n = /*$jsonPreloadRequired*/
      c[31] || /*highPrority*/
      c[10] ? "eager" : "lazy") && g(r, "loading", n), u[0] & /*highPrority*/
      1024 && o !== (o = /*highPrority*/
      c[10] ? "sync" : "async") && g(r, "decoding", o), u[0] & /*style, isWidthContent, isHeightContent*/
      2240 | u[2] & /*widthMin, widthMax, heightMin, heightMax*/
      122880 && i !== (i = ar({
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
      c && q(r), e[70](null), a = !1, Ur(l);
    }
  };
}
function sh(e) {
  let r = (
    /*svgFilterId*/
    e[5]
  ), t, n = mc(e);
  return {
    c() {
      n.c(), t = xt();
    },
    m(o, i) {
      n.m(o, i), K(o, t, i);
    },
    p(o, i) {
      i[0] & /*svgFilterId*/
      32 && Vr(r, r = /*svgFilterId*/
      o[5]) ? (n.d(1), n = mc(o), n.c(), n.m(t.parentNode, t)) : n.p(o, i);
    },
    d(o) {
      o && q(t), n.d(o);
    }
  };
}
function lh(e) {
  let r, t, n, o;
  const i = [ih, oh], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[9] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (t && (dr(), re(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (t = s[r], t ? t.p(l, c) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      re(t), o = !1;
    },
    d(l) {
      l && q(n), ~r && s[r].d(l);
    }
  };
}
const Rl = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", ah = "empty://", ch = "rgba(0,0,0,0.08)", ai = 0, Sl = 1, ts = 2, bc = /\.gif($|\?)/i, uh = "data:image/gif", yc = 'A Gif image was used for the "Image" component. The animation will be played on the web platform, but it does not match the behavior of other platforms.';
function fh(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, ee, ce, T, X, le, E, D = C, P = () => (D(), D = S(N, (at) => t(53, E = at)), N), U, Z, be = C, Ae = () => (be(), be = S(k, (at) => t(55, Z = at)), k), Ee, _e = C, Ie = () => (_e(), _e = S(w, (at) => t(56, Ee = at)), w), $, tt = C, Xe = () => (tt(), tt = S(p, (at) => t(57, $ = at)), p), qe, ve = C, De = () => (ve(), ve = S(_, (at) => t(58, qe = at)), _), ue, ke = C, de = () => (ke(), ke = S(m, (at) => t(59, ue = at)), m), x, fe = C, ie = () => (fe(), fe = S(h, (at) => t(60, x = at)), h), Fe, Ye = C, Ze = () => (Ye(), Ye = S(f, (at) => t(61, Fe = at)), f), te, He = C, Be = () => (He(), He = S(u, (at) => t(62, te = at)), u), it, st = C, lt = () => (st(), st = S(c, (at) => t(63, it = at)), c), kt, nt = C, Nt = () => (nt(), nt = S(l, (at) => t(64, kt = at)), l), ut, pe = C, ge = () => (pe(), pe = S(a, (at) => t(65, ut = at)), a), _t, Se = C, F = () => (Se(), Se = S(s, (at) => t(66, _t = at)), s), Ct, ft = C, St = () => (ft(), ft = S(L, (at) => t(67, Ct = at)), L), Tt, $e = C, Y = () => ($e(), $e = S(o, (at) => t(68, Tt = at)), o), At, Mt = C, Qt = () => (Mt(), Mt = S(i, (at) => t(69, At = at)), i), Jt, he = C, Le = () => (he(), he = S(R, (at) => t(31, Jt = at)), R);
  e.$$.on_destroy.push(() => D()), e.$$.on_destroy.push(() => be()), e.$$.on_destroy.push(() => _e()), e.$$.on_destroy.push(() => tt()), e.$$.on_destroy.push(() => ve()), e.$$.on_destroy.push(() => ke()), e.$$.on_destroy.push(() => fe()), e.$$.on_destroy.push(() => Ye()), e.$$.on_destroy.push(() => He()), e.$$.on_destroy.push(() => st()), e.$$.on_destroy.push(() => nt()), e.$$.on_destroy.push(() => pe()), e.$$.on_destroy.push(() => Se()), e.$$.on_destroy.push(() => ft()), e.$$.on_destroy.push(() => $e()), e.$$.on_destroy.push(() => Mt()), e.$$.on_destroy.push(() => he());
  let { componentContext: pt } = r, { layoutParams: ye = void 0 } = r;
  const xe = Tr(Zr), Oe = xe.direction;
  yn(e, Oe, (at) => t(54, U = at));
  let er, ze = ai, yt = !1, Ft = ch, It = !1, cr, Pe = "", vt = "none", nr = "50% 50%", $t = !1, Xt = "center", pr, kr, Pt = "source_in", yr = "", G = "", dt = 0, Ut = 0, jt = 0, wr = "", Sr = "", hr = !1, Ir = !1, Gr = !1;
  function tr() {
    t(4, pr = void 0), t(40, $t = !1), t(38, vt = "none"), t(39, nr = "50% 50%"), t(43, Pt = "source_in"), t(51, Ir = !1), t(10, Gr = !1);
  }
  function rt(at) {
    t(2, ze = ai);
  }
  function Et(at) {
    t(39, nr = rh(at, U, nr));
  }
  function Zt() {
    ze === ai && t(2, ze = Sl);
  }
  function Yt() {
    ze === ai && t(2, ze = ts);
  }
  ln(() => {
    xe.removeSvgFilter(kr, Pt);
  });
  function ur(at) {
    Dr[at ? "unshift" : "push"](() => {
      er = at, t(8, er);
    });
  }
  return e.$$set = (at) => {
    "componentContext" in at && t(0, pt = at.componentContext), "layoutParams" in at && t(1, ye = at.layoutParams);
  }, e.$$.update = () => {
    var at;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(52, n = pt.origJson), e.$$.dirty[1] & /*origJson*/
    2097152 && n && tr(), e.$$.dirty[0] & /*componentContext*/
    1 && Y(t(30, o = pt.getDerivedFromVars(pt.json.image_url))), e.$$.dirty[0] & /*componentContext*/
    1 && Qt(t(29, i = pt.getDerivedFromVars(pt.json.gif_url))), e.$$.dirty[0] & /*componentContext*/
    1 && F(t(28, s = pt.getDerivedFromVars(pt.json.width))), e.$$.dirty[0] & /*componentContext*/
    1 && ge(t(27, a = pt.getDerivedFromVars(pt.json.height))), e.$$.dirty[0] & /*componentContext*/
    1 && Nt(t(26, l = pt.getDerivedFromVars(pt.json.preview))), e.$$.dirty[0] & /*componentContext*/
    1 && lt(t(25, c = pt.getDerivedFromVars(pt.json.preview_url))), e.$$.dirty[0] & /*componentContext*/
    1 && Be(t(24, u = pt.getDerivedFromVars(pt.json.placeholder_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Ze(t(23, f = pt.getDerivedFromVars(pt.json.scale))), e.$$.dirty[0] & /*componentContext*/
    1 && De(t(22, _ = pt.getDerivedFromVars({
      content_alignment_horizontal: pt.json.content_alignment_horizontal,
      content_alignment_vertical: pt.json.content_alignment_vertical
    }))), e.$$.dirty[0] & /*componentContext*/
    1 && ie(t(21, h = pt.getDerivedFromVars(pt.json.accessibility))), e.$$.dirty[0] & /*componentContext*/
    1 && de(t(20, m = pt.getDerivedFromVars(pt.json.aspect))), e.$$.dirty[0] & /*componentContext*/
    1 && Xe(t(19, p = pt.getDerivedFromVars(pt.json.tint_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Ie(t(18, w = pt.getDerivedFromVars(pt.json.tint_mode))), e.$$.dirty[0] & /*componentContext*/
    1 && Ae(t(17, k = pt.getDerivedFromVars(pt.json.appearance_animation))), e.$$.dirty[0] & /*componentContext*/
    1 && P(t(16, N = pt.getDerivedFromVars(pt.json.filters))), e.$$.dirty[0] & /*componentContext*/
    1 && Le(t(15, R = pt.getDerivedFromVars(pt.json.preload_required))), e.$$.dirty[0] & /*componentContext*/
    1 && St(t(14, L = pt.getDerivedFromVars(pt.json.high_priority_preview_show))), e.$$.dirty[0] & /*componentContext, imageUrl*/
    9 | e.$$.dirty[1] & /*isEmpty*/
    16 | e.$$.dirty[2] & /*$jsonGifUrl, $jsonImageUrl*/
    192) {
      const ne = pt.json.type === "gif";
      let mt = ne ? At : Tt;
      t(35, yt = mt === ah), yt && (mt = Rl), t(3, cr = mt), !ne && cr && bc.test(cr) && pt.logError(J(new Error(yc), { level: "warn" }));
    }
    if (e.$$.dirty[0] & /*imageUrl*/
    8 && rt(), e.$$.dirty[1] & /*highPriorityPreview*/
    1048576 | e.$$.dirty[2] & /*$jsonHighPriorityPreviewShow*/
    32 && t(51, Ir = fn(Ct, Ir)), e.$$.dirty[0] & /*imageUrl, componentContext*/
    9 && (cr ? t(9, It = !1) : (t(9, It = !0), pt.logError(J(new Error(`Missing "${pt.json.type === "gif" ? "gif_url" : "image_url"}" for "${pt.json.type}"`))))), e.$$.dirty[2] & /*$jsonWidth*/
    16 && t(7, ee = (_t == null ? void 0 : _t.type) === "wrap_content"), e.$$.dirty[2] & /*$jsonHeight*/
    8 && t(6, ce = (ut == null ? void 0 : ut.type) === "wrap_content"), e.$$.dirty[0] & /*componentContext, state*/
    5 | e.$$.dirty[1] & /*isEmpty, highPriorityPreview*/
    1048592 | e.$$.dirty[2] & /*$jsonPreview, $jsonPreviewUrl*/
    6) {
      const ne = pt.json.type === "gif", mt = kt, rr = it;
      (ze === ai || ze === ts || yt) && (mt || rr) ? (t(37, Pe = `url("${rr || md(mt || "")}")`), t(10, Gr = Ir)) : (t(37, Pe = ""), t(10, Gr = !1)), !ne && (rr && bc.test(rr) || mt && mt.startsWith(uh)) && pt.logError(J(new Error(yc), { level: "warn" }));
    }
    if (e.$$.dirty[0] & /*state*/
    4 | e.$$.dirty[1] & /*isEmpty, placeholderColor*/
    48 | e.$$.dirty[2] & /*$jsonPlaceholderColor*/
    1 && (ze === ai || ze === ts || yt ? t(36, Ft = fr(te, 1, Ft)) : t(36, Ft = "")), e.$$.dirty[1] & /*$jsonScale, scale*/
    1073741952 && t(38, vt = fd(Fe) || vt), e.$$.dirty[1] & /*$jsonPosition*/
    134217728 && Et(qe), e.$$.dirty[1] & /*$jsonA11y*/
    536870912 && t(13, T = (x == null ? void 0 : x.description) || ""), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*$jsonAspect, aspectContent, $jsonPosition*/
    402653696) {
      t(41, Xt = "center");
      const ne = ue == null ? void 0 : ue.ratio;
      ne && Bn(ne) ? (t(4, pr = ne), t(40, $t = ((at = pt.json.width) == null ? void 0 : at.type) === "wrap_content"), $t && (qe.content_alignment_vertical === "top" ? t(41, Xt = "top") : qe.content_alignment_vertical === "bottom" && t(41, Xt = "bottom"))) : t(4, pr = void 0);
    }
    if (e.$$.dirty[1] & /*$jsonTintColor, $jsonTintMode, tintMode, tintColor*/
    100669440) {
      const ne = $, mt = ne ? fr(ne) : void 0, rr = gd(Ee, Pt);
      (mt !== kr || rr !== Pt) && (xe.removeSvgFilter(kr, Pt), t(5, yr = mt ? xe.addSvgFilter(mt, rr) : ""), t(42, kr = mt), t(43, Pt = rr));
    }
    if (e.$$.dirty[1] & /*$jsonAppearanceAnimation*/
    16777216 && Z && Z.type === "fade") {
      const ne = Z;
      t(44, G = _d(ne.interpolator, "ease_in_out").replace(/_/g, "-")), t(47, jt = $r(ne.duration, 300)), t(46, Ut = $r(ne.start_delay, 0)), t(45, dt = $r(ne.alpha, 0));
    }
    if (e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*$jsonFilters, $direction*/
    12582912) {
      let ne = "", mt = "";
      Array.isArray(E) && E.length && (ne = pd(E, pt.logError)), ne && (mt = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"), t(48, wr = ne), t(49, Sr = mt), t(50, hr = U === "rtl" && Array.isArray(E) && E.some((rr) => rr.type === "rtl_mirror"));
    }
    e.$$.dirty[0] & /*aspectRatio, isWidthContent, isHeightContent, state*/
    212 | e.$$.dirty[1] & /*aspectContent, aspectContentVAlign, animationInterpolator, isRTLMirror*/
    534016 && t(12, X = {
      aspect: pr !== void 0,
      "aspect-content": $t,
      "aspect-valign": Xt !== "center" ? Xt : void 0,
      "is-width-content": ee,
      "is-height-content": ce,
      loaded: ze === Sl,
      "before-appearance": !!G && ze === ai,
      "is-rtl-mirror": hr
    }), e.$$.dirty[0] & /*aspectRatio, state, svgFilterId*/
    52 | e.$$.dirty[1] & /*backgroundImage, placeholderColor, scale, filterClipPath, position, filter, animationInterpolator, animationFadeStart, animationDelay, animationDuration*/
    516576 && t(11, le = {
      // Image preview shows, if loading of original image is failed
      "background-image": Pe,
      "background-color": Pe ? void 0 : Ft,
      "background-size": Z_(vt),
      "clip-path": Sr || void 0,
      "object-fit": vt,
      "object-position": nr,
      "aspect-ratio": pr,
      filter: [
        ze === Sl && yr ? `url(#${yr})` : "",
        wr
      ].filter(Boolean).join(" "),
      "--divkit-appearance-interpolator": G || void 0,
      "--divkit-appearance-fade-start": G ? dt : void 0,
      "--divkit-appearance-delay": G ? `${Ut}ms` : void 0,
      "--divkit-appearance-duration": G ? `${jt}ms` : void 0
    });
  }, [
    pt,
    ye,
    ze,
    cr,
    pr,
    yr,
    ce,
    ee,
    er,
    It,
    Gr,
    le,
    X,
    T,
    L,
    R,
    N,
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
    Jt,
    Oe,
    Zt,
    Yt,
    yt,
    Ft,
    Pe,
    vt,
    nr,
    $t,
    Xt,
    kr,
    Pt,
    G,
    dt,
    Ut,
    jt,
    wr,
    Sr,
    hr,
    Ir,
    n,
    E,
    U,
    Z,
    Ee,
    $,
    qe,
    ue,
    x,
    Fe,
    te,
    it,
    kt,
    ut,
    _t,
    Ct,
    Tt,
    At,
    ur
  ];
}
class wc extends Br {
  constructor(r) {
    super(), Or(this, r, fh, lh, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const dh = "appkit-grid", _h = "appkit-grid_halign_start", ph = "appkit-grid_halign_center", gh = "appkit-grid_halign_end", hh = "appkit-grid_valign_start", mh = "appkit-grid_valign_center", bh = "appkit-grid_valign_end", kc = {
  grid: dh,
  grid_halign_start: _h,
  grid_halign_center: ph,
  grid_halign_end: gh,
  grid_valign_start: hh,
  grid_valign_center: mh,
  grid_valign_end: bh
};
function vc(e) {
  return e > 0 && e < 1;
}
function jc(e) {
  return String(Math.ceil(e * 1e3) / 1e3);
}
function Cc(e, r, t, n) {
  if (e.some(vc)) {
    const l = Math.max(...e.filter(vc).map((c) => 1 / c));
    e = e.map((c) => c * l);
  }
  const o = e.every(Boolean);
  let i = 0, s = 0;
  const a = [];
  if (o) {
    s = e.reduce((l, c) => l + c, 0);
    for (let l = 0; l < n; ++l) {
      if (!r[l])
        continue;
      const c = r[l] / e[l] * s;
      c > i && (i = c);
    }
  }
  for (let l = 0; l < n; ++l)
    i && !t[l] ? a[l] = `minmax(${ae(i * e[l] / s)},${jc(e[l])}fr)` : o || !t[l] && e[l] ? a[l] = `${jc(e[l])}fr` : a[l] = "auto";
  return a.join(" ");
}
function Ec(e, r, t) {
  const n = e.slice();
  return n[33] = r[t], n;
}
function yh(e) {
  let r, t;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function wh(e) {
  let r, t;
  return r = new wn({
    props: {
      cls: bt(
        "grid",
        kc,
        /*mods*/
        e[7]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      style: (
        /*style*/
        e[6]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      parentOf: (
        /*items*/
        e[2]
      ),
      replaceItems: (
        /*replaceItems*/
        e[12]
      ),
      $$slots: { default: [kh] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = bt(
        "grid",
        kc,
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Ac(e) {
  let r, t;
  return r = new Qn({
    props: {
      componentContext: (
        /*item*/
        e[33].componentContext
      ),
      layoutParams: (
        /*item*/
        e[33].layoutParams
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function kh(e) {
  let r, t, n = or(
    /*resultItems*/
    e[5]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Ac(Ec(e, n, s));
  const i = (s) => re(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = xt();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      K(s, r, a), t = !0;
    },
    p(s, a) {
      if (a[0] & /*resultItems*/
      32) {
        n = or(
          /*resultItems*/
          s[5]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const c = Ec(s, n, l);
          o[l] ? (o[l].p(c, a), W(o[l], 1)) : (o[l] = Ac(c), o[l].c(), W(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (dr(), l = n.length; l < o.length; l += 1)
          i(l);
        _r();
      }
    },
    i(s) {
      if (!t) {
        for (let a = 0; a < n.length; a += 1)
          W(o[a]);
        t = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        re(o[a]);
      t = !1;
    },
    d(s) {
      s && q(r), sn(o, s);
    }
  };
}
function vh(e) {
  let r, t, n, o;
  const i = [wh, yh], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (t && (dr(), re(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (t = s[r], t ? t.p(l, c) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      re(t), o = !1;
    },
    d(l) {
      l && q(n), ~r && s[r].d(l);
    }
  };
}
function jh(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _ = C, h = () => (_(), _ = S(a, (de) => t(27, f = de)), a), m, p = C, w = () => (p(), p = S(s, (de) => t(28, m = de)), s), k, N = C, R = () => (N(), N = S(U, (de) => t(29, k = de)), U), L, ee = C, ce = () => (ee(), ee = S(i, (de) => t(30, L = de)), i);
  e.$$.on_destroy.push(() => _()), e.$$.on_destroy.push(() => p()), e.$$.on_destroy.push(() => N()), e.$$.on_destroy.push(() => ee());
  let { componentContext: T } = r, { layoutParams: X = void 0 } = r;
  const E = Tr(Zr).direction;
  yn(e, E, (de) => t(26, u = de));
  let D = !1, P = 0, U, Z, be = [], Ae = [], Ee = [], _e = [], Ie = [], $ = [], tt = 0, Xe = "start", qe = "start", ve = [], De;
  function ue() {
    t(3, D = !1), t(13, P = 0), t(21, Xe = "start"), t(22, qe = "start");
  }
  function ke(de) {
    t(0, T = t(23, De = {
      ...T,
      json: {
        ...T.json,
        items: de.filter(zo)
      }
    }));
  }
  return ln(() => {
    ve.forEach((de) => {
      de.destroy();
    });
  }), e.$$set = (de) => {
    "componentContext" in de && t(0, T = de.componentContext), "layoutParams" in de && t(1, X = de.layoutParams);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(25, n = T.origJson), e.$$.dirty[0] & /*origJson*/
    33554432 && n && ue(), e.$$.dirty[0] & /*componentContext*/
    1 && t(24, o = Array.isArray(T.json.items) && T.json.items || []), e.$$.dirty[0] & /*componentContext*/
    1 && ce(t(10, i = T.getDerivedFromVars(T.json.column_count))), e.$$.dirty[0] & /*componentContext*/
    1 && w(t(9, s = T.getDerivedFromVars(T.json.content_alignment_vertical))), e.$$.dirty[0] & /*componentContext*/
    1 && h(t(8, a = T.getDerivedFromVars(T.json.content_alignment_horizontal))), e.$$.dirty[0] & /*$jsonColumnCount, columnCount, componentContext*/
    1073750017 && (t(13, P = Un(L, P)), P < 1 ? (t(3, D = !0), T.logError(J(new Error("Incorrect column_count for grid")))) : t(3, D = !1)), e.$$.dirty[0] & /*items, prevContext, componentContext, jsonItems*/
    25165829) {
      const de = new Set(ve), x = /* @__PURE__ */ new Map();
      De === T && ve.forEach((fe) => {
        x.set(fe.json, fe);
      }), t(2, ve = o.map((fe, ie) => {
        const Fe = x.get(fe);
        return Fe ? (de.delete(Fe), Fe) : T.produceChildContext(fe, { path: ie });
      }));
      for (const fe of de)
        fe.destroy();
      t(23, De = T);
    }
    if (e.$$.dirty[0] & /*items, componentContext*/
    5) {
      let de = [];
      ve.forEach((x) => {
        de.push(T.getDerivedFromVars({
          rowSpan: x.json.row_span,
          columnSpan: x.json.column_span,
          width: x.json.width,
          height: x.json.height
        }));
      }), R(t(4, U = Wi(de, (x) => [...x])));
    }
    if (e.$$.dirty[0] & /*items, $childStore, columnCount, columnsWeight, rowsWeight, columnsMinWidth, rowsMinHeight*/
    537124868) {
      const de = {};
      let x = 0, fe = 0;
      t(14, be = []), t(15, Ae = []), t(16, Ee = []), t(17, _e = []), t(18, Ie = []), t(19, $ = []);
      let ie = 0;
      t(5, Z = ve.map((Fe, Ye) => {
        var nt, Nt, ut, pe;
        const Ze = k[Ye], te = Math.min(P, Number(Ze.columnSpan) || 1), He = Number(Ze.rowSpan) || 1, Be = ((nt = Ze.width) == null ? void 0 : nt.type) === "match_parent" ? Number(Ze.width.weight || 1) / te : 0, it = ((Nt = Ze.height) == null ? void 0 : Nt.type) === "match_parent" ? Number(Ze.height.weight || 1) / He : 0, st = ((ut = Ze.width) == null ? void 0 : ut.type) === "fixed" && Ze.width.value ? Number(Ze.width.value) / te : 0, lt = ((pe = Ze.height) == null ? void 0 : pe.type) === "fixed" && Ze.height.value ? Number(Ze.height.value) / He : 0;
        for (; ; ) {
          let ge = !0;
          e: for (let _t = x; _t < x + te; ++_t)
            for (let Se = fe; Se < fe + He; ++Se)
              if (de[_t + "_" + Se]) {
                ge = !1;
                break e;
              }
          if (ge)
            break;
          ++x, x > P - te && (x = 0, ++fe);
        }
        const kt = { x, y: fe, colSpan: te, rowSpan: He };
        for (let ge = x; ge < x + te; ++ge)
          for (let _t = fe; _t < fe + He; ++_t)
            de[ge + "_" + _t] = !0, (!be[ge] || be[ge] < Be) && t(14, be[ge] = Be, be), (!Ae[_t] || Ae[_t] < it) && t(15, Ae[_t] = it, Ae), te === 1 && (!Ee[ge] || Ee[ge] < st) && t(16, Ee[ge] = st, Ee), He === 1 && (!_e[_t] || _e[_t] < lt) && t(17, _e[_t] = lt, _e), te === 1 && st && t(18, Ie[ge] = st, Ie), He === 1 && lt && t(19, $[ge] = lt, $);
        return ie = Math.max(ie, fe + He), {
          componentContext: Fe,
          layoutParams: { gridArea: kt }
        };
      })), t(20, tt = Math.max(fe + 1, ie));
    }
    e.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    270532608 && t(21, Xe = ul(m, Xe)), e.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    205520896 && t(22, qe = cl(f, u, qe)), e.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    6291456 && t(7, l = {
      valign: Xe,
      halign: qe
    }), e.$$.dirty[0] & /*columnsWeight, columnsMinWidth, columnsWidth, columnCount, rowsWeight, rowsMinHeight, rowsHeight, rowCount*/
    2088960 && t(6, c = {
      "grid-template-columns": Cc(be, Ee, Ie, P),
      "grid-template-rows": Cc(Ae, _e, $, tt)
    });
  }, [
    T,
    X,
    ve,
    D,
    U,
    Z,
    c,
    l,
    a,
    s,
    i,
    E,
    ke,
    P,
    be,
    Ae,
    Ee,
    _e,
    Ie,
    $,
    tt,
    Xe,
    qe,
    De,
    o,
    n,
    u,
    f,
    m,
    k,
    L
  ];
}
class Ch extends Br {
  constructor(r) {
    super(), Or(this, r, jh, vh, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Eh = "appkit-outer_width_content", Ah = "appkit-outer_height_content", Sh = "appkit-gallery", Vh = "appkit-gallery__scroller", Fh = "appkit-gallery_scrollbar_none", Ih = "appkit-gallery_orientation_horizontal", Dh = "appkit-gallery_orientation_vertical", Th = "appkit-gallery__items", Mh = "appkit-gallery__arrow", Ph = "appkit-gallery__gap", uo = {
  outer_width_content: Eh,
  outer_height_content: Ah,
  gallery: Sh,
  gallery__scroller: Vh,
  gallery_scrollbar_none: Fh,
  gallery_orientation_horizontal: Ih,
  gallery_orientation_vertical: Dh,
  "gallery_scroll-snap": "appkit-gallery_scroll-snap",
  "gallery__items-grid": "appkit-gallery__items-grid",
  gallery__items: Th,
  gallery__arrow: Mh,
  "gallery__arrow-icon-path": "appkit-gallery__arrow-icon-path",
  gallery__gap: Ph
}, Nh = "appkit-arrow", zh = "appkit-arrow__icon", Oh = "appkit-arrow_left", Bh = "appkit-arrow_right", go = {
  arrow: Nh,
  arrow__icon: zh,
  arrow_left: Oh,
  arrow_right: Bh
};
function Lh(e, r) {
  return e === "start" || e === "center" || e === "end" ? e : r;
}
function Rh(e) {
  const r = [];
  let t = e[0], n = 1;
  for (let o = 1; o <= e.length; o++)
    e[o] !== t ? (r.push(n > 1 ? `repeat(${n}, ${t})` : t), t = e[o], n = 1) : n++;
  return r.join(" ");
}
function Vo(e, r) {
  let t = e % r;
  return t < 0 && (t += r), t;
}
const { Boolean: bd, window: Hh } = Po;
function Sc(e, r, t) {
  const n = e.slice();
  return n[86] = r[t], n[87] = r, n[88] = t, n;
}
function Vc(e, r, t) {
  const n = e.slice();
  return n[89] = r[t], n;
}
function Fc(e) {
  let r;
  return {
    c() {
      r = Me("div"), g(r, "class", uo.gallery__gap), I(
        r,
        "width",
        /*orientation*/
        e[4] === "horizontal" ? (
          /*gridGap*/
          e[12]
        ) : void 0
      ), I(
        r,
        "height",
        /*orientation*/
        e[4] !== "horizontal" ? (
          /*gridGap*/
          e[12]
        ) : void 0
      );
    },
    m(t, n) {
      K(t, r, n);
    },
    p(t, n) {
      n[0] & /*orientation, gridGap*/
      4112 && I(
        r,
        "width",
        /*orientation*/
        t[4] === "horizontal" ? (
          /*gridGap*/
          t[12]
        ) : void 0
      ), n[0] & /*orientation, gridGap*/
      4112 && I(
        r,
        "height",
        /*orientation*/
        t[4] !== "horizontal" ? (
          /*gridGap*/
          t[12]
        ) : void 0
      );
    },
    d(t) {
      t && q(r);
    }
  };
}
function Ic(e) {
  let r, t, n, o = (
    /*item*/
    e[89].hasGapBefore && Fc(e)
  );
  return t = new Qn({
    props: {
      componentContext: (
        /*item*/
        e[89].componentContext
      ),
      layoutParams: (
        /*childLayoutParams*/
        e[6]
      )
    }
  }), {
    c() {
      o && o.c(), r = gr(), Ht(t.$$.fragment);
    },
    m(i, s) {
      o && o.m(i, s), K(i, r, s), Lt(t, i, s), n = !0;
    },
    p(i, s) {
      /*item*/
      i[89].hasGapBefore ? o ? o.p(i, s) : (o = Fc(i), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
      const a = {};
      s[0] & /*itemsGrid*/
      262144 && (a.componentContext = /*item*/
      i[89].componentContext), s[0] & /*childLayoutParams*/
      64 && (a.layoutParams = /*childLayoutParams*/
      i[6]), t.$set(a);
    },
    i(i) {
      n || (W(t.$$.fragment, i), n = !0);
    },
    o(i) {
      re(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && q(r), o && o.d(i), Rt(t, i);
    }
  };
}
function Dc(e) {
  let r, t, n, o, i, s, a = (
    /*rowIndex*/
    e[88]
  ), l, c = or(
    /*itemsRow*/
    e[86]
  ), u = [];
  for (let m = 0; m < c.length; m += 1)
    u[m] = Ic(Vc(e, c, m));
  const f = (m) => re(u[m], 1, 1, () => {
    u[m] = null;
  }), _ = () => (
    /*div1_binding*/
    e[71](r, a)
  ), h = () => (
    /*div1_binding*/
    e[71](null, a)
  );
  return {
    c() {
      r = Me("div");
      for (let m = 0; m < u.length; m += 1)
        u[m].c();
      t = gr(), n = Me("div"), i = gr(), g(n, "class", uo.gallery__gap), g(n, "style", o = ar(
        /*lastPaddingSize*/
        e[13]
      )), g(r, "class", uo.gallery__items), g(r, "style", s = ar(
        /*columnStyle*/
        e[16]
      ));
    },
    m(m, p) {
      K(m, r, p);
      for (let w = 0; w < u.length; w += 1)
        u[w] && u[w].m(r, null);
      wt(r, t), wt(r, n), wt(r, i), _(), l = !0;
    },
    p(m, p) {
      if (e = m, p[0] & /*itemsGrid, childLayoutParams, orientation, gridGap*/
      266320) {
        c = or(
          /*itemsRow*/
          e[86]
        );
        let w;
        for (w = 0; w < c.length; w += 1) {
          const k = Vc(e, c, w);
          u[w] ? (u[w].p(k, p), W(u[w], 1)) : (u[w] = Ic(k), u[w].c(), W(u[w], 1), u[w].m(r, t));
        }
        for (dr(), w = c.length; w < u.length; w += 1)
          f(w);
        _r();
      }
      (!l || p[0] & /*lastPaddingSize*/
      8192 && o !== (o = ar(
        /*lastPaddingSize*/
        e[13]
      ))) && g(n, "style", o), (!l || p[0] & /*columnStyle*/
      65536 && s !== (s = ar(
        /*columnStyle*/
        e[16]
      ))) && g(r, "style", s), a !== /*rowIndex*/
      e[88] && (h(), a = /*rowIndex*/
      e[88], _());
    },
    i(m) {
      if (!l) {
        for (let p = 0; p < c.length; p += 1)
          W(u[p]);
        l = !0;
      }
    },
    o(m) {
      u = u.filter(bd);
      for (let p = 0; p < u.length; p += 1)
        re(u[p]);
      l = !1;
    },
    d(m) {
      m && q(r), sn(u, m), h();
    }
  };
}
function Tc(e) {
  let r, t, n = (
    /*hasScrollLeft*/
    e[10] && /*shouldCheckArrows*/
    e[8] && Mc(e)
  ), o = (
    /*hasScrollRight*/
    e[11] && /*shouldCheckArrows*/
    e[8] && Pc(e)
  );
  return {
    c() {
      n && n.c(), r = gr(), o && o.c(), t = xt();
    },
    m(i, s) {
      n && n.m(i, s), K(i, r, s), o && o.m(i, s), K(i, t, s);
    },
    p(i, s) {
      /*hasScrollLeft*/
      i[10] && /*shouldCheckArrows*/
      i[8] ? n ? n.p(i, s) : (n = Mc(i), n.c(), n.m(r.parentNode, r)) : n && (n.d(1), n = null), /*hasScrollRight*/
      i[11] && /*shouldCheckArrows*/
      i[8] ? o ? o.p(i, s) : (o = Pc(i), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null);
    },
    d(i) {
      i && (q(r), q(t)), n && n.d(i), o && o.d(i);
    }
  };
}
function Mc(e) {
  let r, t, n, o = !/*leftClass*/
  e[32] && Wh();
  return {
    c() {
      r = Me("div"), o && o.c(), g(
        r,
        "class",
        /*leftClass*/
        e[32] || `${uo.gallery__arrow} ${go.arrow} ${go.arrow_left}`
      );
    },
    m(i, s) {
      K(i, r, s), o && o.m(r, null), t || (n = Ke(
        r,
        "click",
        /*click_handler*/
        e[74]
      ), t = !0);
    },
    p: C,
    d(i) {
      i && q(r), o && o.d(), t = !1, n();
    }
  };
}
function Wh(e) {
  let r, t;
  return {
    c() {
      r = xr("svg"), t = xr("path"), g(t, "class", uo["gallery__arrow-icon-path"]), g(t, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", go.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      K(n, r, o), wt(r, t);
    },
    d(n) {
      n && q(r);
    }
  };
}
function Pc(e) {
  let r, t, n, o = !/*rightClass*/
  e[33] && Uh();
  return {
    c() {
      r = Me("div"), o && o.c(), g(
        r,
        "class",
        /*rightClass*/
        e[33] || `${uo.gallery__arrow} ${go.arrow} ${go.arrow_right}`
      );
    },
    m(i, s) {
      K(i, r, s), o && o.m(r, null), t || (n = Ke(
        r,
        "click",
        /*click_handler_1*/
        e[75]
      ), t = !0);
    },
    p: C,
    d(i) {
      i && q(r), o && o.d(), t = !1, n();
    }
  };
}
function Uh(e) {
  let r, t;
  return {
    c() {
      r = xr("svg"), t = xr("path"), g(t, "class", uo["gallery__arrow-icon-path"]), g(t, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", go.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      K(n, r, o), wt(r, t);
    },
    d(n) {
      n && q(r);
    }
  };
}
function Gh(e) {
  let r, t, n, o, i, s, a, l, c, u, f = or(
    /*itemsGrid*/
    e[18]
  ), _ = [];
  for (let p = 0; p < f.length; p += 1)
    _[p] = Dc(Sc(e, f, p));
  const h = (p) => re(_[p], 1, 1, () => {
    _[p] = null;
  });
  let m = (
    /*orientation*/
    e[4] === "horizontal" && Tc(e)
  );
  return {
    c() {
      r = Me("div"), t = Me("div");
      for (let p = 0; p < _.length; p += 1)
        _[p].c();
      s = gr(), m && m.c(), a = xt(), g(t, "class", uo["gallery__items-grid"]), g(t, "style", n = ar(
        /*gridStyle*/
        e[17]
      )), g(r, "class", o = uo.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (e[30] ? jr["root_restrict-scroll"] : "")), g(r, "style", i = ar(
        /*scrollerStyle*/
        e[5]
      ));
    },
    m(p, w) {
      K(p, r, w), wt(r, t);
      for (let k = 0; k < _.length; k += 1)
        _[k] && _[k].m(t, null);
      e[72](t), e[73](r), K(p, s, w), m && m.m(p, w), K(p, a, w), l = !0, c || (u = Ke(r, "scroll", function() {
        Nr(
          /*shouldCheckArrows*/
          e[8] ? (
            /*updateArrowsVisibility*/
            e[36]
          ) : null
        ) && /*shouldCheckArrows*/
        (e[8] ? (
          /*updateArrowsVisibility*/
          e[36]
        ) : null).apply(this, arguments);
      }), c = !0);
    },
    p(p, w) {
      if (e = p, w[0] & /*columnStyle, galleryItemsWrappers, lastPaddingSize, itemsGrid, childLayoutParams, orientation, gridGap*/
      340560) {
        f = or(
          /*itemsGrid*/
          e[18]
        );
        let k;
        for (k = 0; k < f.length; k += 1) {
          const N = Sc(e, f, k);
          _[k] ? (_[k].p(N, w), W(_[k], 1)) : (_[k] = Dc(N), _[k].c(), W(_[k], 1), _[k].m(t, null));
        }
        for (dr(), k = f.length; k < _.length; k += 1)
          h(k);
        _r();
      }
      (!l || w[0] & /*gridStyle*/
      131072 && n !== (n = ar(
        /*gridStyle*/
        e[17]
      ))) && g(t, "style", n), (!l || w[0] & /*$jsonRestrictParentScroll*/
      1073741824 && o !== (o = uo.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (e[30] ? jr["root_restrict-scroll"] : ""))) && g(r, "class", o), (!l || w[0] & /*scrollerStyle*/
      32 && i !== (i = ar(
        /*scrollerStyle*/
        e[5]
      ))) && g(r, "style", i), /*orientation*/
      e[4] === "horizontal" ? m ? m.p(e, w) : (m = Tc(e), m.c(), m.m(a.parentNode, a)) : m && (m.d(1), m = null);
    },
    i(p) {
      if (!l) {
        for (let w = 0; w < f.length; w += 1)
          W(_[w]);
        l = !0;
      }
    },
    o(p) {
      _ = _.filter(bd);
      for (let w = 0; w < _.length; w += 1)
        re(_[w]);
      l = !1;
    },
    d(p) {
      p && (q(r), q(s), q(a)), sn(_, p), e[72](null), e[73](null), m && m.d(p), c = !1, u();
    }
  };
}
function Jh(e) {
  let r, t, n, o;
  return r = new wn({
    props: {
      cls: bt(
        "gallery",
        uo,
        /*mods*/
        e[15]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      customPaddings: !0,
      customActions: "gallery",
      parentOf: (
        /*items*/
        e[7]
      ),
      replaceItems: (
        /*replaceItems*/
        e[34]
      ),
      $$slots: { default: [Gh] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(i, s) {
      Lt(r, i, s), t = !0, n || (o = Ke(Hh, "resize", function() {
        Nr(
          /*shouldCheckArrows*/
          e[8] ? (
            /*updateArrowsVisibilityDebounced*/
            e[37]
          ) : null
        ) && /*shouldCheckArrows*/
        (e[8] ? (
          /*updateArrowsVisibilityDebounced*/
          e[37]
        ) : null).apply(this, arguments);
      }), n = !0);
    },
    p(i, s) {
      e = i;
      const a = {};
      s[0] & /*mods*/
      32768 && (a.cls = bt(
        "gallery",
        uo,
        /*mods*/
        e[15]
      )), s[0] & /*componentContext*/
      1 && (a.componentContext = /*componentContext*/
      e[0]), s[0] & /*layoutParams*/
      2 && (a.layoutParams = /*layoutParams*/
      e[1]), s[0] & /*items*/
      128 && (a.parentOf = /*items*/
      e[7]), s[0] & /*hasScrollRight, shouldCheckArrows, hasScrollLeft, orientation, $jsonRestrictParentScroll, scrollerStyle, scroller, gridStyle, itemsGridElem, itemsGrid, columnStyle, galleryItemsWrappers, lastPaddingSize, childLayoutParams, gridGap*/
      1074216828 | s[2] & /*$$scope*/
      1073741824 && (a.$$scope = { dirty: s, ctx: e }), r.$set(a);
    },
    i(i) {
      t || (W(r.$$.fragment, i), t = !0);
    },
    o(i) {
      re(r.$$.fragment, i), t = !1;
    },
    d(i) {
      Rt(r, i), n = !1, o();
    }
  };
}
function qh(e, r, t) {
  let n = 0, o = [], i = [];
  for (let s = 0; s < e.length; ++s)
    o[n] || (o[n] = []), o[n].push({
      index: s,
      hasGapBefore: i[n] && r[s].visibility !== "gone",
      componentContext: e[s]
    }), !i[n] && r[s].visibility !== "gone" && (i[n] = !0), ++n >= t && (n = 0);
  return o;
}
function Yh(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, ee, ce, T, X, le = C, E = () => (le(), le = S(p, (ne) => t(59, X = ne)), p), D, P = C, U = () => (P(), P = S(m, (ne) => t(60, D = ne)), m), Z, be = C, Ae = () => (be(), be = S(_, (ne) => t(61, Z = ne)), _), Ee, _e = C, Ie = () => (_e(), _e = S(Ft, (ne) => t(62, Ee = ne)), Ft), $, tt = C, Xe = () => (tt(), tt = S(f, (ne) => t(63, $ = ne)), f), qe, ve = C, De = () => (ve(), ve = S(u, (ne) => t(64, qe = ne)), u), ue, ke = C, de = () => (ke(), ke = S(c, (ne) => t(65, ue = ne)), c), x, fe = C, ie = () => (fe(), fe = S(l, (ne) => t(66, x = ne)), l), Fe, Ye = C, Ze = () => (Ye(), Ye = S(a, (ne) => t(67, Fe = ne)), a), te, He, Be = C, it = () => (Be(), Be = S(i, (ne) => t(69, He = ne)), i), st, lt = C, kt = () => (lt(), lt = S(s, (ne) => t(70, st = ne)), s), nt, Nt = C, ut = () => (Nt(), Nt = S(h, (ne) => t(30, nt = ne)), h);
  e.$$.on_destroy.push(() => le()), e.$$.on_destroy.push(() => P()), e.$$.on_destroy.push(() => be()), e.$$.on_destroy.push(() => _e()), e.$$.on_destroy.push(() => tt()), e.$$.on_destroy.push(() => ve()), e.$$.on_destroy.push(() => ke()), e.$$.on_destroy.push(() => fe()), e.$$.on_destroy.push(() => Ye()), e.$$.on_destroy.push(() => Be()), e.$$.on_destroy.push(() => lt()), e.$$.on_destroy.push(() => Nt());
  let { componentContext: pe } = r, { layoutParams: ge = void 0 } = r;
  const _t = Tr(Zr), Se = _t.direction;
  yn(e, Se, (ne) => t(58, T = ne));
  let F, Ct = [], ft = !1, St = !1, Tt = null, $e, Y = !1;
  const At = _t.getCustomization("galleryLeftClass"), Mt = _t.getCustomization("galleryRightClass");
  let Qt, Jt = 1, he = "horizontal", Le = "start", pt, ye = 8, xe, Oe, er = "", ze, yt = [], Ft, It = {}, cr = !1, Pe = {}, vt = 0;
  function nr() {
    t(42, Jt = 1), t(4, he = "horizontal"), t(43, Le = "start"), t(44, ye = 8), t(47, er = "");
  }
  let $t = null, Xt = null;
  function pr() {
    var rr, mr;
    const ne = Un(st, Jt), mt = pe.json.responsive;
    if (!mt || typeof mt != "object") {
      t(42, Jt = ne);
      return;
    }
    $t != null && $t.matches && ((rr = mt.mobile) != null && rr.column_count) ? t(42, Jt = mt.mobile.column_count) : Xt != null && Xt.matches && ((mr = mt.tablet) != null && mr.column_count) ? t(42, Jt = mt.tablet.column_count) : t(42, Jt = ne);
  }
  function kr(ne) {
    t(0, pe = t(53, G = {
      ...pe,
      json: {
        ...pe.json,
        items: ne.filter(zo)
      }
    }));
  }
  const Pt = _t.isDesktop;
  yn(e, Pt, (ne) => t(68, te = ne));
  let yr = [], G;
  function dt() {
    if (!F)
      return;
    let ne = F.scrollLeft;
    T === "rtl" && (ne *= -1);
    const mt = F.scrollWidth, rr = F.offsetWidth;
    T === "ltr" ? (t(10, ft = ne > 2), t(11, St = ne + rr < mt - 2)) : (t(11, St = ne > 2), t(10, ft = ne + rr < mt - 2));
  }
  const Ut = da(dt, 50);
  function jt(ne) {
    F.scroll({
      left: F.scrollLeft + F.offsetWidth * 0.75 * (ne === "right" ? 1 : -1),
      behavior: "smooth"
    });
  }
  function wr() {
    let ne = [], mt = Ct[0].children.length;
    for (let rr = 0; rr < mt; rr += 2)
      for (let mr = 0; mr < Jt; ++mr) {
        const ir = Ct[mr].children[rr];
        ir && ne.push(ir);
      }
    return ne;
  }
  function Sr(ne, mt = !0) {
    const mr = he === "horizontal" ? "left" : "top";
    F.scroll({
      [mr]: ne,
      behavior: mt ? "smooth" : "instant"
    });
  }
  function hr(ne, mt, { animated: rr = !0, extraOffset: mr = 0, overflow: ir = "clamp" } = {}) {
    const v = he === "horizontal", oe = v ? "offsetLeft" : "offsetTop";
    mt > ne.length - 1 ? mt = ir === "ring" ? Vo(mt, ne.length) : ne.length - 1 : mt < 0 && (mt = ir === "ring" ? Vo(mt, ne.length) : 0);
    const d = ne[mt];
    if (d) {
      let z;
      if (T === "ltr" || !v)
        z = d[oe] + 0.01 - ye / 2;
      else {
        const Te = F.offsetWidth;
        z = d[oe] + d.offsetWidth + 0.01 - ye / 2 - Te;
      }
      if (mr) {
        z += mr;
        const Te = v ? F.scrollWidth - F.offsetWidth : F.scrollHeight - F.offsetHeight;
        z > Te && (ir === "clamp" ? z = Te : ir === "ring" && (z = Vo(z, Te))), z < 0 && (ir === "clamp" ? z = 0 : ir === "ring" && (z = Vo(z, Te)));
      }
      Sr(z, rr);
    }
  }
  function Ir(ne, { overflow: mt = "clamp", animated: rr = !0 } = {}) {
    const mr = he === "horizontal", ir = T === "ltr" || !mr ? 1 : -1, v = mr ? F.scrollLeft : F.scrollTop, oe = mr ? F.scrollWidth - F.offsetWidth : F.scrollHeight - F.offsetHeight;
    let d = v * ir + ne;
    d > oe ? mt === "clamp" ? d = oe : mt === "ring" && (d = Vo(d, oe)) : d < 0 && (mt === "clamp" ? d = 0 : mt === "ring" && (d = Vo(d, oe))), Sr(d * ir, rr);
  }
  function Gr(ne, mt) {
    return he === "horizontal" ? mt.right > ne.left && ne.right > mt.left : mt.bottom > ne.top && ne.bottom > mt.top;
  }
  function tr(ne, mt) {
    return he === "horizontal" ? mt.left >= ne.left && mt.right <= ne.right : mt.top >= ne.top && mt.bottom <= ne.bottom;
  }
  function rt(ne) {
    const mt = wr(), rr = F.getBoundingClientRect(), mr = mt.findIndex((oe) => tr(rr, oe.getBoundingClientRect()));
    if (mr !== -1)
      return mr;
    const ir = mt.map((oe) => Gr(rr, oe.getBoundingClientRect())), v = ir.findIndex(Boolean);
    return v !== -1 ? ne === "prev" && ir.filter(Boolean).length === 2 ? v + 1 : v : ne === "prev" ? 1 : mt.length - 2;
  }
  ro(() => {
    if (t(40, Y = !0), dt(), vt) {
      const ne = wr();
      hr(ne, vt, { animated: !1 });
    }
  }), ln(() => {
    t(40, Y = !1), yr.forEach((ne) => {
      ne.destroy();
    }), Qt && !pe.fakeElement && (_t.unregisterInstance(Qt), t(41, Qt = void 0)), $t && $t.removeEventListener("change", pr), Xt && Xt.removeEventListener("change", pr);
  });
  function Et(ne, mt) {
    Dr[ne ? "unshift" : "push"](() => {
      Ct[mt] = ne, t(9, Ct);
    });
  }
  function Zt(ne) {
    Dr[ne ? "unshift" : "push"](() => {
      $e = ne, t(3, $e);
    });
  }
  function Yt(ne) {
    Dr[ne ? "unshift" : "push"](() => {
      F = ne, t(2, F);
    });
  }
  const ur = () => jt("left"), at = () => jt("right");
  return e.$$set = (ne) => {
    "componentContext" in ne && t(0, pe = ne.componentContext), "layoutParams" in ne && t(1, ge = ne.layoutParams);
  }, e.$$.update = () => {
    var ne, mt, rr, mr, ir, v;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(57, n = pe.origJson), e.$$.dirty[1] & /*origJson*/
    67108864 && n && nr(), e.$$.dirty[0] & /*componentContext*/
    1 && t(56, o = Array.isArray(pe.json.items) && pe.json.items || []), e.$$.dirty[0] & /*componentContext*/
    1 && it(t(29, i = typeof ((ne = pe.json.item_builder) == null ? void 0 : ne.data) == "string" ? pe.getDerivedFromVars((mt = pe.json.item_builder) == null ? void 0 : mt.data, void 0, !0) : (rr = pe.json.item_builder) != null && rr.data ? Uo(pe.json.item_builder.data) : void 0)), e.$$.dirty[0] & /*componentContext*/
    1 && kt(t(28, s = pe.getDerivedFromVars(pe.json.column_count))), e.$$.dirty[0] & /*componentContext*/
    1 && Ze(t(27, a = pe.getDerivedFromVars(pe.json.orientation))), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*columns, mobileQuery, tabletQuery*/
    3147776 | e.$$.dirty[2] & /*$jsonColumnCount*/
    256) {
      const oe = Un(st, Jt), d = pe.json.responsive;
      d && typeof d == "object" && typeof window < "u" ? ($t || (t(51, $t = window.matchMedia("(max-width: 767px)")), t(52, Xt = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), $t.addEventListener("change", pr), Xt.addEventListener("change", pr)), pr()) : t(42, Jt = oe);
    }
    if (e.$$.dirty[0] & /*componentContext*/
    1 && ie(t(26, l = pe.getDerivedFromVars(pe.json.cross_content_alignment))), e.$$.dirty[0] & /*componentContext*/
    1 && de(t(25, c = pe.getDerivedFromVars(pe.json.item_spacing))), e.$$.dirty[0] & /*componentContext*/
    1 && De(t(24, u = pe.getDerivedFromVars(pe.json.cross_spacing))), e.$$.dirty[0] & /*componentContext*/
    1 && Xe(t(23, f = pe.getDerivedFromVars(pe.json.paddings))), e.$$.dirty[0] & /*componentContext*/
    1 && Ae(t(22, _ = pe.getDerivedFromVars(pe.json.scroll_mode))), e.$$.dirty[0] & /*componentContext*/
    1 && ut(t(21, h = pe.getDerivedFromVars(pe.json.restrict_parent_scroll))), e.$$.dirty[0] & /*componentContext*/
    1 && U(t(20, m = pe.getDerivedFromVars(pe.json.scrollbar))), e.$$.dirty[0] & /*componentContext*/
    1 && E(t(19, p = pe.getDerivedFromVars(pe.json.default_item))), e.$$.dirty[0] & /*componentContext, items*/
    129 | e.$$.dirty[1] & /*jsonItems, prevContext*/
    37748736 | e.$$.dirty[2] & /*$jsonItemBuilderData*/
    128) {
      let oe = [];
      if (pe.json.item_builder && Array.isArray(He) && Array.isArray(pe.json.item_builder.prototypes)) {
        const We = pe.json.item_builder;
        oe = fl(He, _t, pe, We);
      } else
        oe = (Array.isArray(o) && o || []).map((We, we) => ({
          div: We,
          key: We.id || { index: we, data: We }
        }));
      const d = new Set(yr), z = /* @__PURE__ */ new Map();
      let Te = !1;
      G === pe && yr.forEach((We) => {
        We.key && (typeof We.key == "string" && z.has(We.key) ? Te || (Te = !0, pe.logError(J(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: We.key } }))) : z.set(
          typeof We.key == "string" ? We.key : We.key.index,
          We
        ));
      }), t(7, yr = oe.map((We, we) => {
        let O = !Te && z.get(We.id), Dt = z.get(we);
        return !O && !We.id && typeof We.key == "object" && typeof (Dt == null ? void 0 : Dt.key) == "object" && Ui(Dt.key.data, We.key.data) && (O = Dt), O ? (d.delete(O), O) : pe.produceChildContext(We.div, {
          path: we,
          variables: We.vars,
          id: We.id,
          key: We.key
        });
      }));
      for (const We of d)
        We.destroy();
      t(53, G = pe);
    }
    if (e.$$.dirty[1] & /*mounted*/
    512 | e.$$.dirty[2] & /*$isDesktop*/
    64 && t(8, w = te && Y), e.$$.dirty[0] & /*shouldCheckArrows, itemsGridElem*/
    264 | e.$$.dirty[1] & /*resizeObserver*/
    256 && (w ? typeof ResizeObserver < "u" && (t(39, Tt = new ResizeObserver(() => {
      Ut();
    })), Tt.observe($e)) : Tt && (Tt.disconnect(), t(39, Tt = null))), e.$$.dirty[0] & /*orientation*/
    16 | e.$$.dirty[2] & /*$jsonOrientation*/
    32 && t(4, he = _a(Fe, he)), e.$$.dirty[1] & /*align*/
    4096 | e.$$.dirty[2] & /*$jsonCrossContentAlignment*/
    16 && t(43, Le = Lh(x, Le)), e.$$.dirty[1] & /*itemSpacing*/
    8192 | e.$$.dirty[2] & /*$jsonItemSpacing*/
    8 && (t(44, ye = $r(ue, ye)), t(12, pt = ae(ye))), e.$$.dirty[1] & /*itemSpacing, crossSpacing*/
    40960 | e.$$.dirty[2] & /*$jsonCrossSpacing*/
    4 && (t(46, Oe = $r(qe, ye)), t(45, xe = ae(Oe))), e.$$.dirty[0] & /*orientation*/
    16 | e.$$.dirty[1] & /*$direction, padding*/
    134283264 | e.$$.dirty[2] & /*$jsonPaddings*/
    2) {
      t(47, er = ns($, T, er));
      const oe = he === "horizontal" ? (ir = (mr = $ == null ? void 0 : $.end) != null ? mr : $ == null ? void 0 : $[T === "ltr" ? "right" : "left"]) != null ? ir : 0 : (v = $ == null ? void 0 : $.bottom) != null ? v : 0, d = ae(oe);
      t(13, ze = {
        width: he === "horizontal" ? d : "1px",
        height: he === "horizontal" ? "1px" : d,
        "margin-right": he === "horizontal" && T === "ltr" ? "-" + d : void 0,
        "margin-left": he === "horizontal" && T === "rtl" ? "-" + d : void 0,
        "margin-bottom": he === "vertical" ? "-" + d : void 0
      });
    }
    if (e.$$.dirty[0] & /*items, orientation*/
    144) {
      let oe = [];
      yr.forEach((d) => {
        const z = he === "horizontal" ? "width" : "height";
        oe.push(d.getDerivedFromVars({
          size: d.json[z],
          visibility: d.json.visibility
        }));
      }), Ie(t(14, Ft = Wi(oe, (d) => [...d])));
    }
    if (e.$$.dirty[0] & /*items*/
    128 | e.$$.dirty[1] & /*columns*/
    2048 | e.$$.dirty[2] & /*$childStore*/
    1 && t(18, k = qh(yr, Ee, Jt)), e.$$.dirty[0] & /*orientation*/
    16 | e.$$.dirty[1] & /*columns, templateSizes*/
    133120 | e.$$.dirty[2] & /*$childStore*/
    1 && (t(48, yt = []), Jt > 1 || Ee.forEach((oe, d) => {
      var z;
      oe.visibility !== "gone" && (!oe.size && he === "horizontal" || ((z = oe.size) == null ? void 0 : z.type) === "match_parent" ? yt.push("100%") : yt.push("max-content"), d + 1 < Ee.length && yt.push("auto"));
    }), yt.push("auto")), e.$$.dirty[0] & /*componentContext*/
    1 && t(55, N = pe.json.fixed_columns === !0), e.$$.dirty[0] & /*orientation, scrollerStyle, childLayoutParams*/
    112 | e.$$.dirty[1] & /*align, $jsonScrollMode, itemSpacing*/
    1073754112) {
      const oe = {};
      let d = {};
      if (t(49, cr = !1), d.treatMatchParentAs100 = !0, he === "horizontal" ? (d.parentVAlign = Le, d.parentContainerOrientation = "horizontal") : (d.parentHAlign = Le, d.parentContainerOrientation = "vertical"), Z === "paging") {
        t(49, cr = !0), d.scrollSnap = "start";
        const z = he === "horizontal" ? "scroll-padding-left" : "scroll-padding-top";
        oe[z] = ae(ye / 2);
      }
      t(5, It = Zo(oe, It)), t(6, Pe = Zo(d, Pe));
    }
    e.$$.dirty[0] & /*orientation*/
    16 && t(54, R = he === "horizontal" ? "grid-template-columns" : "grid-template-rows"), e.$$.dirty[0] & /*orientation*/
    16 | e.$$.dirty[1] & /*padding, crossGridGap, fixedColumns, columns*/
    16861184 && t(17, L = {
      padding: er,
      "grid-gap": xe,
      ...N && Jt > 1 && he === "vertical" ? {
        display: "grid",
        "grid-template-columns": `repeat(${Jt}, 1fr)`
      } : {}
    }), e.$$.dirty[1] & /*gridTemplate, templateSizes*/
    8519680 && t(16, ee = {
      [R]: Rh(yt)
    }), e.$$.dirty[0] & /*orientation*/
    16 | e.$$.dirty[1] & /*scrollSnap, $jsonScrollbar*/
    537133056 && t(15, ce = {
      orientation: he,
      "scroll-snap": cr,
      scrollbar: D === "auto" ? "auto" : "none"
    }), e.$$.dirty[1] & /*$jsonDefaultItem, defaultItem*/
    268959744 && t(50, vt = $r(X, vt)), e.$$.dirty[0] & /*componentContext*/
    1 && pe.json && Ut(), e.$$.dirty[0] & /*componentContext, orientation, scroller*/
    21 | e.$$.dirty[1] & /*prevId, $direction*/
    134218752 && pe.json && (Qt && (_t.unregisterInstance(Qt), t(41, Qt = void 0)), pe.id && !pe.fakeElement && (t(41, Qt = pe.id), _t.registerInstance(Qt, {
      setCurrentItem(oe, d) {
        const z = wr();
        if (oe < 0 || oe > z.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        hr(z, oe, { animated: d });
      },
      setPreviousItem(oe, d, z) {
        const Te = rt("prev"), We = wr();
        let we = Te - oe;
        hr(We, we, { animated: z, overflow: d });
      },
      setNextItem(oe, d, z) {
        const Te = he === "horizontal", We = T === "ltr" || !Te ? 1 : -1, we = Te ? F.scrollLeft * We + F.offsetWidth === F.scrollWidth : F.scrollTop + F.offsetHeight === F.scrollHeight, O = wr();
        if (we && d === "ring") {
          hr(O, 0, { animated: z });
          return;
        }
        let zt = rt("next") + oe;
        hr(O, zt, { animated: z, overflow: d });
      },
      scrollToStart(oe) {
        Sr(0, oe);
      },
      scrollToEnd(oe) {
        Sr(
          T === "ltr" || he !== "horizontal" ? 1e6 : -1e6,
          oe
        );
      },
      scrollToPosition(oe, d) {
        Sr(
          T === "ltr" || he !== "horizontal" ? oe : -oe,
          d
        );
      },
      scrollCombined({ step: oe, offset: d, overflow: z, animated: Te }) {
        if (oe) {
          const we = rt(oe > 0 ? "next" : "prev") + oe;
          hr(wr(), we, { animated: Te, extraOffset: d, overflow: z });
        } else d && Ir(d, { overflow: z, animated: Te });
      }
    })));
  }, [
    pe,
    ge,
    F,
    $e,
    he,
    It,
    Pe,
    yr,
    w,
    Ct,
    ft,
    St,
    pt,
    ze,
    Ft,
    ce,
    ee,
    L,
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
    nt,
    Se,
    At,
    Mt,
    kr,
    Pt,
    dt,
    Ut,
    jt,
    Tt,
    Y,
    Qt,
    Jt,
    Le,
    ye,
    xe,
    Oe,
    er,
    yt,
    cr,
    vt,
    $t,
    Xt,
    G,
    R,
    N,
    o,
    n,
    T,
    X,
    D,
    Z,
    Ee,
    $,
    qe,
    ue,
    x,
    Fe,
    te,
    He,
    st,
    Et,
    Zt,
    Yt,
    ur,
    at
  ];
}
class Kh extends Br {
  constructor(r) {
    super(), Or(this, r, Yh, Jh, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Xh = "appkit-outer", Zh = "appkit-tabs", Qh = "appkit-tabs__list", xh = "appkit-tabs__item", $h = "appkit-tabs__item_selected", e0 = "appkit-tabs_animation_fade", t0 = "appkit-tabs_animation_none", r0 = "appkit-tabs__item_actionable", n0 = "appkit-tabs__panels", o0 = "appkit-tabs__swiper", i0 = "appkit-tabs__swiper_animated", s0 = "appkit-tabs__swiper_inited", l0 = "appkit-tabs__panel", a0 = "appkit-tabs__panel_visible", c0 = "appkit-tabs__separator", u0 = "appkit-tabs__delimitier", vn = {
  outer: Xh,
  "root__any-actions": "appkit-root__any-actions",
  tabs: Zh,
  tabs__list: Qh,
  "tabs__items-bg": "appkit-tabs__items-bg",
  "tabs__items-text": "appkit-tabs__items-text",
  tabs__item: xh,
  tabs__item_selected: $h,
  tabs_animation_fade: e0,
  tabs_animation_none: t0,
  tabs__item_actionable: r0,
  tabs__panels: n0,
  "tabs_own-height": "appkit-tabs_own-height",
  tabs__swiper: o0,
  tabs__swiper_animated: i0,
  tabs__swiper_inited: s0,
  tabs__panel: l0,
  tabs__panel_visible: a0,
  "tabs_height-parent_yes": "appkit-tabs_height-parent_yes",
  tabs__separator: c0,
  tabs__delimitier: u0,
  "tabs__tabs-highlighter": "appkit-tabs__tabs-highlighter"
};
function f0(e, r) {
  var n, o;
  if (!e || !e.image_url || typeof e.image_url != "string")
    return r;
  const t = {
    url: e.image_url,
    width: 12,
    height: 12
  };
  return ((n = e.width) == null ? void 0 : n.type) === "fixed" && Bn(e.width.value) && (t.width = e.width.value), ((o = e.height) == null ? void 0 : o.type) === "fixed" && Bn(e.height.value) && (t.height = e.height.value), t;
}
const yd = 37, wd = 39, kd = 36, vd = 35;
function d0(e, r, t, n) {
  const o = [
    e["top-left"],
    e["top-right"],
    e["bottom-right"],
    e["bottom-left"]
  ];
  for (let i = 0; i < o.length; ++i)
    if (o[i] && !Mn(o[i]))
      return n;
  return vs(e, r, t);
}
function Nc(e) {
  const r = e.touches[0], t = r.clientX || r.pageX, n = r.clientY || r.pageY;
  return { x: t, y: n };
}
function _0(e) {
  let r, t;
  return r = new Qn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function p0(e, r, t) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r, { enabled: i } = r;
  const s = Do(i);
  return fi(ua, { isEnabled: s }), e.$$set = (a) => {
    "componentContext" in a && t(0, n = a.componentContext), "layoutParams" in a && t(1, o = a.layoutParams), "enabled" in a && t(2, i = a.enabled);
  }, e.$$.update = () => {
    e.$$.dirty & /*enabled*/
    4 && s.set(i);
  }, [n, o, i];
}
class g0 extends Br {
  constructor(r) {
    super(), Or(this, r, p0, _0, Vr, {
      componentContext: 0,
      layoutParams: 1,
      enabled: 2
    });
  }
}
const { Boolean: zc, window: h0 } = Po;
function Oc(e, r, t) {
  const n = e.slice();
  n[99] = r[t];
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
function Bc(e, r, t) {
  const n = e.slice();
  n[99] = r[t];
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
function Lc(e, r, t) {
  const n = e.slice();
  n[99] = r[t];
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
function m0(e) {
  let r, t;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function b0(e) {
  let r, t;
  const n = [
    {
      cls: bt(
        "tabs",
        vn,
        /*mods*/
        e[24]
      )
    },
    {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    },
    { layoutParams: (
      /*layoutParams*/
      e[1]
    ) },
    { customActions: "tabs" },
    { parentOf: (
      /*parentOfItems*/
      e[47]
    ) },
    { parentOfSimpleMode: !0 },
    { replaceItems: (
      /*replaceItems*/
      e[53]
    ) },
    /*devapi*/
    e[52]
  ];
  let o = {
    $$slots: { default: [w0] },
    $$scope: { ctx: e }
  };
  for (let i = 0; i < n.length; i += 1)
    o = jo(o, n[i]);
  return r = new wn({ props: o }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(i, s) {
      Lt(r, i, s), t = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams*/
      16777219 | s[1] & /*parentOfItems, replaceItems, devapi*/
      6356992 ? No(n, [
        s[0] & /*mods*/
        16777216 && {
          cls: bt(
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
        2097152 && ad(
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
      t || (W(r.$$.fragment, i), t = !0);
    },
    o(i) {
      re(r.$$.fragment, i), t = !1;
    },
    d(i) {
      Rt(r, i);
    }
  };
}
function Rc(e) {
  let r;
  return {
    c() {
      r = Me("span"), g(r, "class", vn.tabs__delimitier), I(
        r,
        "width",
        /*delimitierStyle*/
        e[15].width ? ae(
          /*delimitierStyle*/
          e[15].width
        ) : void 0
      ), I(
        r,
        "height",
        /*delimitierStyle*/
        e[15].height ? ae(
          /*delimitierStyle*/
          e[15].height
        ) : void 0
      );
    },
    m(t, n) {
      K(t, r, n);
    },
    p(t, n) {
      n[0] & /*delimitierStyle*/
      32768 && I(
        r,
        "width",
        /*delimitierStyle*/
        t[15].width ? ae(
          /*delimitierStyle*/
          t[15].width
        ) : void 0
      ), n[0] & /*delimitierStyle*/
      32768 && I(
        r,
        "height",
        /*delimitierStyle*/
        t[15].height ? ae(
          /*delimitierStyle*/
          t[15].height
        ) : void 0
      );
    },
    d(t) {
      t && q(r);
    }
  };
}
function Hc(e) {
  let r, t, n = (
    /*item*/
    e[99].title + ""
  ), o, i, s = (
    /*delimitierStyle*/
    e[15] && /*index*/
    e[100] > 0 && Rc(e)
  );
  return {
    c() {
      s && s.c(), r = gr(), t = Me("span"), o = Gn(n), g(t, "class", i = bt("tabs__item", vn, {
        selected: (
          /*isSelected*/
          e[104]
        ),
        actionable: !!/*item*/
        e[99].title_click_action
      }));
    },
    m(a, l) {
      s && s.m(a, l), K(a, r, l), K(a, t, l), wt(t, o);
    },
    p(a, l) {
      /*delimitierStyle*/
      a[15] && /*index*/
      a[100] > 0 ? s ? s.p(a, l) : (s = Rc(a), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null), l[0] & /*$childStore*/
      262144 && n !== (n = /*item*/
      a[99].title + "") && to(o, n), l[0] & /*$childStore, selected*/
      393216 && i !== (i = bt("tabs__item", vn, {
        selected: (
          /*isSelected*/
          a[104]
        ),
        actionable: !!/*item*/
        a[99].title_click_action
      })) && g(t, "class", i);
    },
    d(a) {
      a && (q(r), q(t)), s && s.d(a);
    }
  };
}
function Wc(e) {
  let r, t;
  return {
    c() {
      r = Me("div"), g(r, "class", vn["tabs__tabs-highlighter"]), g(r, "style", t = ar(
        /*selectedTabStyles*/
        e[36]
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o[1] & /*selectedTabStyles*/
      32 && t !== (t = ar(
        /*selectedTabStyles*/
        n[36]
      )) && g(r, "style", t);
    },
    d(n) {
      n && q(r);
    }
  };
}
function Uc(e) {
  let r, t;
  return {
    c() {
      r = Me("img"), g(r, "class", vn.tabs__delimitier), g(r, "alt", ""), g(r, "loading", "lazy"), g(r, "decoding", "async"), Xn(r.src, t = /*delimitierStyle*/
      e[15].url) || g(r, "src", t), I(
        r,
        "width",
        /*delimitierStyle*/
        e[15].width ? ae(
          /*delimitierStyle*/
          e[15].width
        ) : void 0
      ), I(
        r,
        "height",
        /*delimitierStyle*/
        e[15].height ? ae(
          /*delimitierStyle*/
          e[15].height
        ) : void 0
      );
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o[0] & /*delimitierStyle*/
      32768 && !Xn(r.src, t = /*delimitierStyle*/
      n[15].url) && g(r, "src", t), o[0] & /*delimitierStyle*/
      32768 && I(
        r,
        "width",
        /*delimitierStyle*/
        n[15].width ? ae(
          /*delimitierStyle*/
          n[15].width
        ) : void 0
      ), o[0] & /*delimitierStyle*/
      32768 && I(
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
      n && q(r);
    }
  };
}
function y0(e) {
  let r = (
    /*item*/
    e[99].title + ""
  ), t;
  return {
    c() {
      t = Gn(r);
    },
    m(n, o) {
      K(n, t, o);
    },
    p(n, o) {
      o[0] & /*$childStore*/
      262144 && r !== (r = /*item*/
      n[99].title + "") && to(t, r);
    },
    d(n) {
      n && q(t);
    }
  };
}
function Gc(e) {
  let r, t, n, o = (
    /*delimitierStyle*/
    e[15] && /*index*/
    e[100] > 0 && Uc(e)
  );
  function i(...s) {
    return (
      /*func*/
      e[73](
        /*index*/
        e[100],
        ...s
      )
    );
  }
  return t = new al({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      cls: bt("tabs__item", vn, {
        selected: (
          /*isSelected*/
          e[104]
        ),
        actionable: !!/*item*/
        e[99].title_click_action
      }),
      actions: (
        /*item*/
        e[99].title_click_action && !/*componentContext*/
        e[0].fakeElement ? [
          /*item*/
          e[99].title_click_action
        ].filter(Gs) : []
      ),
      attrs: {
        id: `${/*instId*/
        e[50]}-tab-${/*index*/
        e[100]}`,
        "aria-controls": `${/*instId*/
        e[50]}-panel-${/*index*/
        e[100]}`,
        role: "tab",
        // eslint-disable-next-line no-nested-ternary
        tabindex: (
          /*isSelected*/
          e[104] && !/*componentContext*/
          e[0].fakeElement ? (
            /*item*/
            e[99].title_click_action ? void 0 : "0"
          ) : "-1"
        ),
        "aria-selected": (
          /*isSelected*/
          e[104] ? "true" : "false"
        )
      },
      customAction: (
        /*componentContext*/
        e[0].fakeElement ? null : i
      ),
      $$slots: { default: [y0] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      o && o.c(), r = gr(), Ht(t.$$.fragment);
    },
    m(s, a) {
      o && o.m(s, a), K(s, r, a), Lt(t, s, a), n = !0;
    },
    p(s, a) {
      e = s, /*delimitierStyle*/
      e[15] && /*index*/
      e[100] > 0 ? o ? o.p(e, a) : (o = Uc(e), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
      const l = {};
      a[0] & /*componentContext*/
      1 && (l.componentContext = /*componentContext*/
      e[0]), a[0] & /*$childStore, selected*/
      393216 && (l.cls = bt("tabs__item", vn, {
        selected: (
          /*isSelected*/
          e[104]
        ),
        actionable: !!/*item*/
        e[99].title_click_action
      })), a[0] & /*$childStore, componentContext*/
      262145 && (l.actions = /*item*/
      e[99].title_click_action && !/*componentContext*/
      e[0].fakeElement ? [
        /*item*/
        e[99].title_click_action
      ].filter(Gs) : []), a[0] & /*$childStore, selected, componentContext*/
      393217 && (l.attrs = {
        id: `${/*instId*/
        e[50]}-tab-${/*index*/
        e[100]}`,
        "aria-controls": `${/*instId*/
        e[50]}-panel-${/*index*/
        e[100]}`,
        role: "tab",
        // eslint-disable-next-line no-nested-ternary
        tabindex: (
          /*isSelected*/
          e[104] && !/*componentContext*/
          e[0].fakeElement ? (
            /*item*/
            e[99].title_click_action ? void 0 : "0"
          ) : "-1"
        ),
        "aria-selected": (
          /*isSelected*/
          e[104] ? "true" : "false"
        )
      }), a[0] & /*componentContext, $childStore*/
      262145 && (l.customAction = /*componentContext*/
      e[0].fakeElement ? null : i), a[0] & /*$childStore*/
      262144 | a[3] & /*$$scope*/
      65536 && (l.$$scope = { dirty: a, ctx: e }), t.$set(l);
    },
    i(s) {
      n || (W(t.$$.fragment, s), n = !0);
    },
    o(s) {
      re(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && q(r), o && o.d(s), Rt(t, s);
    }
  };
}
function Jc(e) {
  let r, t;
  return {
    c() {
      r = Me("div"), g(r, "class", vn.tabs__separator), g(r, "style", t = ar(
        /*separatorStyle*/
        e[38]
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o[1] & /*separatorStyle*/
      128 && t !== (t = ar(
        /*separatorStyle*/
        n[38]
      )) && g(r, "style", t);
    },
    d(n) {
      n && q(r);
    }
  };
}
function qc(e) {
  let r, t;
  return r = new g0({
    props: {
      componentContext: (
        /*childComponentContext*/
        e[101]
      ),
      layoutParams: (
        /*childLayoutParams*/
        e[3]
      ),
      enabled: (
        /*index*/
        e[100] === /*selected*/
        e[17]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Yc(e) {
  let r, t, n, o, i, s, a = (
    /*childComponentContext*/
    e[101] && qc(e)
  );
  return {
    c() {
      r = Me("div"), a && a.c(), t = gr(), g(r, "class", n = bt("tabs__panel", vn, {
        visible: (
          /*visiblePanels*/
          e[34][
            /*index*/
            e[100]
          ]
        )
      })), g(r, "role", "tabpanel"), g(r, "id", o = /*instId*/
      e[50] + "-panel-" + /*index*/
      e[100]), g(r, "aria-labelledby", i = /*instId*/
      e[50] + "-tab-" + /*index*/
      e[100]), I(
        r,
        "left",
        /*index*/
        e[100] * 100 + "%"
      );
    },
    m(l, c) {
      K(l, r, c), a && a.m(r, null), wt(r, t), s = !0;
    },
    p(l, c) {
      /*childComponentContext*/
      l[101] ? a ? (a.p(l, c), c[0] & /*$childStore*/
      262144 | c[1] & /*showedPanels*/
      4 && W(a, 1)) : (a = qc(l), a.c(), W(a, 1), a.m(r, t)) : a && (dr(), re(a, 1, 1, () => {
        a = null;
      }), _r()), (!s || c[0] & /*$childStore*/
      262144 | c[1] & /*visiblePanels*/
      8 && n !== (n = bt("tabs__panel", vn, {
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
      262144) && I(
        r,
        "left",
        /*index*/
        l[100] * 100 + "%"
      );
    },
    i(l) {
      s || (W(a), s = !0);
    },
    o(l) {
      re(a), s = !1;
    },
    d(l) {
      l && q(r), a && a.d();
    }
  };
}
function w0(e) {
  let r, t, n, o, i, s, a, l, c, u, f, _, h, m, p, w = or(
    /*$childStore*/
    e[18]
  ), k = [];
  for (let E = 0; E < w.length; E += 1)
    k[E] = Hc(Lc(e, w, E));
  let N = (
    /*animationType*/
    e[16] === "slide" && /*selectedTabStyles*/
    e[36] && Wc(e)
  ), R = or(
    /*$childStore*/
    e[18]
  ), L = [];
  for (let E = 0; E < R.length; E += 1)
    L[E] = Gc(Bc(e, R, E));
  const ee = (E) => re(L[E], 1, 1, () => {
    L[E] = null;
  });
  let ce = (
    /*$jsonSeparator*/
    e[20] && Jc(e)
  ), T = or(
    /*$childStore*/
    e[18]
  ), X = [];
  for (let E = 0; E < T.length; E += 1)
    X[E] = Yc(Oc(e, T, E));
  const le = (E) => re(X[E], 1, 1, () => {
    X[E] = null;
  });
  return {
    c() {
      r = Me("div"), t = Me("div");
      for (let E = 0; E < k.length; E += 1)
        k[E].c();
      n = gr(), N && N.c(), o = gr(), i = Me("div");
      for (let E = 0; E < L.length; E += 1)
        L[E].c();
      a = gr(), ce && ce.c(), l = gr(), c = Me("div"), u = Me("div");
      for (let E = 0; E < X.length; E += 1)
        X[E].c();
      g(t, "class", vn["tabs__items-bg"]), g(t, "aria-hidden", "true"), g(i, "class", vn["tabs__items-text"]), g(r, "class", s = vn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (e[48] ? jr["root_restrict-scroll"] : "")), g(r, "role", "tablist"), I(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        e[14] ? po(
          /*titlePadding*/
          e[14],
          /*$direction*/
          e[19]
        ) : ""
      ), I(r, "--divkit-tabs-font-size", ae(
        /*tabFontSize*/
        e[4]
      )), I(
        r,
        "--divkit-tabs-paddings",
        /*tabPaddings*/
        e[5]
      ), I(
        r,
        "--divkit-tabs-line-height",
        /*tabLineHeight*/
        e[25]
      ), I(
        r,
        "--divkit-tabs-letter-spacing",
        /*tabLetterSpacing*/
        e[26]
      ), I(
        r,
        "--divkit-tabs-active-font-weight",
        /*tabActiveFontWeight*/
        e[7] || ""
      ), I(
        r,
        "--divkit-tabs-inactive-font-weight",
        /*tabInactiveFontWeight*/
        e[8] || ""
      ), I(
        r,
        "--divkit-tabs-active-font-family",
        /*tabActiveFontFamily*/
        e[27] || ""
      ), I(
        r,
        "--divkit-tabs-inactive-font-family",
        /*tabInactiveFontFamily*/
        e[29] || ""
      ), I(
        r,
        "--divkit-tabs-active-font-variation-settings",
        /*tabActiveFontVariationSettings*/
        e[28] || ""
      ), I(
        r,
        "--divkit-tabs-inactive-font-variation-settings",
        /*tabInactiveFontVariationSettings*/
        e[30] || ""
      ), I(
        r,
        "--divkit-tabs-active-text-color",
        /*tabActiveTextColor*/
        e[9]
      ), I(
        r,
        "--divkit-tabs-inactive-text-color",
        /*tabInactiveTextColor*/
        e[10]
      ), I(
        r,
        "--divkit-tabs-active-background-color",
        /*tabActiveBackground*/
        e[11]
      ), I(
        r,
        "--divkit-tabs-inactive-background-color",
        /*tabInactiveBackground*/
        e[12]
      ), I(
        r,
        "--divkit-tabs-border-radius",
        /*tabBorderRadius*/
        e[6]
      ), I(
        r,
        "--divkit-tabs-items-spacing",
        /*tabItemSpacing*/
        e[13] ? on(
          /*tabItemSpacing*/
          e[13] * 10 / /*tabFontSize*/
          e[4]
        ) : ""
      ), I(
        r,
        "--divkit-tabs-animation-duration",
        /*animationDuration*/
        e[35] !== void 0 ? `${/*animationDuration*/
        e[35]}ms` : ""
      ), g(u, "class", f = bt("tabs__swiper", vn, {
        inited: (
          /*isSwipeInitialized*/
          e[31]
        ),
        animated: (
          /*isAnimated*/
          e[32]
        )
      })), g(c, "class", _ = vn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (e[48] ? jr["root_restrict-scroll"] : ""));
    },
    m(E, D) {
      K(E, r, D), wt(r, t);
      for (let P = 0; P < k.length; P += 1)
        k[P] && k[P].m(t, null);
      wt(t, n), N && N.m(t, null), wt(r, o), wt(r, i);
      for (let P = 0; P < L.length; P += 1)
        L[P] && L[P].m(i, null);
      e[74](r), K(E, a, D), ce && ce.m(E, D), K(E, l, D), K(E, c, D), wt(c, u);
      for (let P = 0; P < X.length; P += 1)
        X[P] && X[P].m(u, null);
      e[75](u), e[76](c), h = !0, m || (p = [
        Ke(
          r,
          "keydown",
          /*onTabKeydown*/
          e[55]
        ),
        Ke(c, "touchstart", function() {
          Nr(
            /*isSwipeEnabled*/
            e[37] ? (
              /*onTouchStart*/
              e[56]
            ) : void 0
          ) && (e[37] ? (
            /*onTouchStart*/
            e[56]
          ) : void 0).apply(this, arguments);
        }),
        Ke(c, "touchmove", function() {
          Nr(
            /*isSwipeEnabled*/
            e[37] ? (
              /*onTouchMove*/
              e[57]
            ) : void 0
          ) && (e[37] ? (
            /*onTouchMove*/
            e[57]
          ) : void 0).apply(this, arguments);
        }),
        Ke(c, "touchend", function() {
          Nr(
            /*isSwipeEnabled*/
            e[37] ? (
              /*onTouchEnd*/
              e[58]
            ) : void 0
          ) && (e[37] ? (
            /*onTouchEnd*/
            e[58]
          ) : void 0).apply(this, arguments);
        }),
        Ke(c, "touchcancel", function() {
          Nr(
            /*isSwipeEnabled*/
            e[37] ? (
              /*onTouchEnd*/
              e[58]
            ) : void 0
          ) && (e[37] ? (
            /*onTouchEnd*/
            e[58]
          ) : void 0).apply(this, arguments);
        })
      ], m = !0);
    },
    p(E, D) {
      if (e = E, D[0] & /*$childStore, selected, delimitierStyle*/
      425984) {
        w = or(
          /*$childStore*/
          e[18]
        );
        let P;
        for (P = 0; P < w.length; P += 1) {
          const U = Lc(e, w, P);
          k[P] ? k[P].p(U, D) : (k[P] = Hc(U), k[P].c(), k[P].m(t, n));
        }
        for (; P < k.length; P += 1)
          k[P].d(1);
        k.length = w.length;
      }
      if (/*animationType*/
      e[16] === "slide" && /*selectedTabStyles*/
      e[36] ? N ? N.p(e, D) : (N = Wc(e), N.c(), N.m(t, null)) : N && (N.d(1), N = null), D[0] & /*componentContext, $childStore, selected, delimitierStyle*/
      425985 | D[1] & /*instId, selectItem*/
      8912896) {
        R = or(
          /*$childStore*/
          e[18]
        );
        let P;
        for (P = 0; P < R.length; P += 1) {
          const U = Bc(e, R, P);
          L[P] ? (L[P].p(U, D), W(L[P], 1)) : (L[P] = Gc(U), L[P].c(), W(L[P], 1), L[P].m(i, null));
        }
        for (dr(), P = R.length; P < L.length; P += 1)
          ee(P);
        _r();
      }
      if ((!h || D[1] & /*$jsonRestrictParentScroll*/
      131072 && s !== (s = vn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (e[48] ? jr["root_restrict-scroll"] : ""))) && g(r, "class", s), D[0] & /*titlePadding, $direction*/
      540672 && I(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        e[14] ? po(
          /*titlePadding*/
          e[14],
          /*$direction*/
          e[19]
        ) : ""
      ), D[0] & /*tabFontSize*/
      16 && I(r, "--divkit-tabs-font-size", ae(
        /*tabFontSize*/
        e[4]
      )), D[0] & /*tabPaddings*/
      32 && I(
        r,
        "--divkit-tabs-paddings",
        /*tabPaddings*/
        e[5]
      ), D[0] & /*tabLineHeight*/
      33554432 && I(
        r,
        "--divkit-tabs-line-height",
        /*tabLineHeight*/
        e[25]
      ), D[0] & /*tabLetterSpacing*/
      67108864 && I(
        r,
        "--divkit-tabs-letter-spacing",
        /*tabLetterSpacing*/
        e[26]
      ), D[0] & /*tabActiveFontWeight*/
      128 && I(
        r,
        "--divkit-tabs-active-font-weight",
        /*tabActiveFontWeight*/
        e[7] || ""
      ), D[0] & /*tabInactiveFontWeight*/
      256 && I(
        r,
        "--divkit-tabs-inactive-font-weight",
        /*tabInactiveFontWeight*/
        e[8] || ""
      ), D[0] & /*tabActiveFontFamily*/
      134217728 && I(
        r,
        "--divkit-tabs-active-font-family",
        /*tabActiveFontFamily*/
        e[27] || ""
      ), D[0] & /*tabInactiveFontFamily*/
      536870912 && I(
        r,
        "--divkit-tabs-inactive-font-family",
        /*tabInactiveFontFamily*/
        e[29] || ""
      ), D[0] & /*tabActiveFontVariationSettings*/
      268435456 && I(
        r,
        "--divkit-tabs-active-font-variation-settings",
        /*tabActiveFontVariationSettings*/
        e[28] || ""
      ), D[0] & /*tabInactiveFontVariationSettings*/
      1073741824 && I(
        r,
        "--divkit-tabs-inactive-font-variation-settings",
        /*tabInactiveFontVariationSettings*/
        e[30] || ""
      ), D[0] & /*tabActiveTextColor*/
      512 && I(
        r,
        "--divkit-tabs-active-text-color",
        /*tabActiveTextColor*/
        e[9]
      ), D[0] & /*tabInactiveTextColor*/
      1024 && I(
        r,
        "--divkit-tabs-inactive-text-color",
        /*tabInactiveTextColor*/
        e[10]
      ), D[0] & /*tabActiveBackground*/
      2048 && I(
        r,
        "--divkit-tabs-active-background-color",
        /*tabActiveBackground*/
        e[11]
      ), D[0] & /*tabInactiveBackground*/
      4096 && I(
        r,
        "--divkit-tabs-inactive-background-color",
        /*tabInactiveBackground*/
        e[12]
      ), D[0] & /*tabBorderRadius*/
      64 && I(
        r,
        "--divkit-tabs-border-radius",
        /*tabBorderRadius*/
        e[6]
      ), D[0] & /*tabItemSpacing, tabFontSize*/
      8208 && I(
        r,
        "--divkit-tabs-items-spacing",
        /*tabItemSpacing*/
        e[13] ? on(
          /*tabItemSpacing*/
          e[13] * 10 / /*tabFontSize*/
          e[4]
        ) : ""
      ), D[1] & /*animationDuration*/
      16 && I(
        r,
        "--divkit-tabs-animation-duration",
        /*animationDuration*/
        e[35] !== void 0 ? `${/*animationDuration*/
        e[35]}ms` : ""
      ), /*$jsonSeparator*/
      e[20] ? ce ? ce.p(e, D) : (ce = Jc(e), ce.c(), ce.m(l.parentNode, l)) : ce && (ce.d(1), ce = null), D[0] & /*$childStore, childLayoutParams, selected*/
      393224 | D[1] & /*visiblePanels, instId, showedPanels*/
      524300) {
        T = or(
          /*$childStore*/
          e[18]
        );
        let P;
        for (P = 0; P < T.length; P += 1) {
          const U = Oc(e, T, P);
          X[P] ? (X[P].p(U, D), W(X[P], 1)) : (X[P] = Yc(U), X[P].c(), W(X[P], 1), X[P].m(u, null));
        }
        for (dr(), P = T.length; P < X.length; P += 1)
          le(P);
        _r();
      }
      (!h || D[1] & /*isSwipeInitialized, isAnimated*/
      3 && f !== (f = bt("tabs__swiper", vn, {
        inited: (
          /*isSwipeInitialized*/
          e[31]
        ),
        animated: (
          /*isAnimated*/
          e[32]
        )
      }))) && g(u, "class", f), (!h || D[1] & /*$jsonRestrictParentScroll*/
      131072 && _ !== (_ = vn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (e[48] ? jr["root_restrict-scroll"] : ""))) && g(c, "class", _);
    },
    i(E) {
      if (!h) {
        for (let D = 0; D < R.length; D += 1)
          W(L[D]);
        for (let D = 0; D < T.length; D += 1)
          W(X[D]);
        h = !0;
      }
    },
    o(E) {
      L = L.filter(zc);
      for (let D = 0; D < L.length; D += 1)
        re(L[D]);
      X = X.filter(zc);
      for (let D = 0; D < X.length; D += 1)
        re(X[D]);
      h = !1;
    },
    d(E) {
      E && (q(r), q(a), q(l), q(c)), sn(k, E), N && N.d(), sn(L, E), e[74](null), ce && ce.d(E), sn(X, E), e[75](null), e[76](null), m = !1, Ur(p);
    }
  };
}
function k0(e) {
  let r, t, n, o, i, s;
  const a = [b0, m0], l = [];
  function c(u, f) {
    return (
      /*hasError*/
      u[2] ? -1 : 0
    );
  }
  return ~(r = c(e)) && (t = l[r] = a[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(u, f) {
      ~r && l[r].m(u, f), K(u, n, f), o = !0, i || (s = Ke(h0, "resize", function() {
        Nr(
          /*animationType*/
          e[16] === "slide" ? (
            /*updateSlideAnimation*/
            e[59]
          ) : void 0
        ) && (e[16] === "slide" ? (
          /*updateSlideAnimation*/
          e[59]
        ) : void 0).apply(this, arguments);
      }), i = !0);
    },
    p(u, f) {
      e = u;
      let _ = r;
      r = c(e), r === _ ? ~r && l[r].p(e, f) : (t && (dr(), re(l[_], 1, 1, () => {
        l[_] = null;
      }), _r()), ~r ? (t = l[r], t ? t.p(e, f) : (t = l[r] = a[r](e), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(u) {
      o || (W(t), o = !0);
    },
    o(u) {
      re(t), o = !1;
    },
    d(u) {
      u && q(n), ~r && l[r].d(u), i = !1, s();
    }
  };
}
function v0(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, ee = C, ce = () => (ee(), ee = S(a, (v) => t(67, L = v)), a), T, X = C, le = () => (X(), X = S(m, (v) => t(68, T = v)), m), E, D = C, P = () => (D(), D = S(h, (v) => t(69, E = v)), h), U, Z = C, be = () => (Z(), Z = S(f, (v) => t(70, U = v)), f), Ae, Ee, _e = C, Ie = () => (_e(), _e = S(u, (v) => t(71, Ee = v)), u), $, tt = C, Xe = () => (tt(), tt = S(c, (v) => t(72, $ = v)), c), qe, ve = C, De = () => (ve(), ve = S(l, (v) => t(20, qe = v)), l), ue, ke = C, de = () => (ke(), ke = S(_, (v) => t(48, ue = v)), _);
  e.$$.on_destroy.push(() => ee()), e.$$.on_destroy.push(() => X()), e.$$.on_destroy.push(() => D()), e.$$.on_destroy.push(() => Z()), e.$$.on_destroy.push(() => _e()), e.$$.on_destroy.push(() => tt()), e.$$.on_destroy.push(() => ve()), e.$$.on_destroy.push(() => ke());
  let { componentContext: x } = r, { layoutParams: fe = void 0 } = r;
  const ie = Tr(Zr), Fe = ie.direction;
  yn(e, Fe, (v) => t(19, Ae = v));
  const Ye = ie.genId("tabs");
  let Ze, te = !1, He = Do([]);
  yn(e, He, (v) => t(18, R = v));
  let Be = {}, it, st, lt, kt = {}, nt = 12, Nt = "", ut = "", pe = "", ge = "", _t, Se = "", F = "", Ct, ft = "", St = "", Tt = "", $e = "", Y = "", At = "", Mt = 0, Qt = "", Jt = "", he = null, Le = !1, pt = !1, ye, xe = [], Oe = [], er = null, ze = null, yt = null, Ft, It = !1, cr = !1, Pe, vt, nr, $t = "slide", Xt, pr, kr, Pt;
  function yr() {
    t(4, nt = 12), t(5, Nt = ""), t(6, ge = ""), t(7, _t = void 0), t(27, Se = ""), t(28, F = ""), t(8, Ct = void 0), t(29, ft = ""), t(30, St = ""), t(9, Tt = ""), t(10, $e = ""), t(11, Y = ""), t(12, At = ""), t(13, Mt = 0), t(61, Qt = ""), t(62, Jt = ""), t(14, he = null), t(15, nr = void 0), t(16, $t = "slide"), t(35, Xt = 300), t(36, pr = void 0), ne();
  }
  function G(v) {
    x.json.items && t(0, x = kr = {
      ...x,
      json: {
        ...x.json,
        items: x.json.items.map((oe, d) => ({ ...oe, div: v[d] }))
      }
    });
  }
  function dt(v) {
    if (te)
      return;
    const oe = new Set(xe.filter(zo)), d = /* @__PURE__ */ new Map();
    kr === x && xe.forEach((z) => {
      z && d.set(z.json, z);
    }), t(33, xe = v.map((z, Te) => {
      if ((Te === p || xe[Te]) && (z != null && z.div)) {
        const We = d.get(z.div);
        return We ? (oe.delete(We), We) : x.produceChildContext(z.div, { path: Te });
      }
    })), t(34, Oe = v.map((z, Te) => Te === p));
    for (const z of oe)
      z.destroy();
    kr = x;
  }
  async function Ut(v, oe, d) {
    if (ye = p, t(17, p = v), Et(), Sr(d), ne(), oe) {
      await Sn();
      const z = it.querySelector(`.${vn.tabs__item_selected}`);
      z && z.focus();
    }
  }
  function jt(v, oe = !1) {
    const d = R == null ? void 0 : R.length;
    if (!d)
      return;
    const z = R.map((O) => O.index);
    let We = z.indexOf(p) + v;
    We >= d ? We = 0 : We < 0 && (We = d - 1);
    const we = z[We];
    Ut(we, oe, !0);
  }
  function wr(v, oe) {
    return p !== oe ? (Ut(oe, !1, !0), !1) : !0;
  }
  function Sr(v = !0) {
    t(32, pt = v), hr(-p * 100), Ir(), Gr(), tr(), vt = -p * st.clientWidth;
  }
  async function hr(v) {
    await Sn(), t(23, lt.style.transform = `translate3d(${v}%,0,0)`, lt);
  }
  function Ir(v = !1) {
    const oe = v ? Math.max(0, p - 1) : Math.min(p, ye != null ? ye : p), d = v ? Math.min(o.length - 1, p + 1) : Math.max(p, ye != null ? ye : p);
    ie.devtoolCreateHierarchy, xe.forEach((z) => {
      z == null || z.destroy();
    }), t(33, xe = xe.map((z, Te) => {
      var we;
      if (z)
        return z;
      const We = (we = o[Te]) == null ? void 0 : we.div;
      if ((Te >= oe && Te <= d || ie.devtoolCreateHierarchy === "eager" && !1) && We)
        return x.produceChildContext(We, { path: Te });
    })), t(34, Oe = Oe.map((z, Te) => Te >= oe && Te <= d));
  }
  async function Gr() {
    var oe;
    if (((oe = x.json.height) == null ? void 0 : oe.type) === "match_parent")
      return;
    await Sn();
    const v = document.getElementById(`${Ye}-panel-${p}`);
    v && t(22, st.style.height = ae(v.offsetHeight), st);
  }
  function tr() {
    er && clearTimeout(er), er = window.setTimeout(
      () => {
        t(34, Oe = o.map((v, oe) => oe === p));
      },
      400
    );
  }
  function rt(v) {
    if (!(v.ctrlKey || v.shiftKey || v.altKey || v.metaKey) && o) {
      if (v.which === yd)
        jt(-1, !0);
      else if (v.which === wd)
        jt(1, !0);
      else if (v.which === kd)
        Ut(0, !0, !0);
      else if (v.which === vd)
        Ut(o.length - 1, !0, !0);
      else
        return;
      v.preventDefault();
    }
  }
  function Et() {
    Le || (t(31, Le = !0), t(22, st.style.height = ae(st.clientHeight), st), t(23, lt.style.transform = `translate3d(${-(ye != null ? ye : p) * 100}%,0,0)`, lt));
  }
  function Zt(v) {
    var z;
    const oe = v.target, d = (z = oe == null ? void 0 : oe.closest) == null ? void 0 : z.call(oe, `.${jr["root_restrict-scroll"]}`);
    o.length < 2 || v.touches.length > 1 || d && d !== st || (It = !1, cr = !1, ze = Nc(v), yt = null, Ft = Date.now(), Pe = vt || -p * st.clientWidth, t(32, pt = !1), er && clearTimeout(er));
  }
  function Yt(v) {
    const oe = Nc(v);
    if (!ze || yt && yt.x === oe.x && yt.y === oe.y)
      return;
    yt = oe;
    const d = st.clientWidth;
    if (It) {
      vt = oe.x - ze.x + Pe;
      const z = d * o.length;
      if (vt > 0)
        vt = vt * d / (vt + d * 3);
      else if (-vt + d > z) {
        let Te = -vt + d - z;
        Te = Te * d / (Te + d * 3), vt = d - z - Te;
      }
      hr(vt * 100 / d);
    } else Math.abs(oe.y - ze.y) > 10 ? cr = !0 : !cr && Math.abs(oe.x - ze.x) > 8 && (Et(), It = !0, ze = oe, hr(-p * 100), Ir(!0));
    It && v.cancelable && v.preventDefault();
  }
  function ur() {
    cr = !1, ze = null;
    let v = p;
    if (!It)
      return;
    It = !1;
    const oe = Math.min(512, st.clientWidth), d = Math.abs(Pe - vt), z = Math.min(1, (Date.now() - Ft) / 750);
    d > oe / 4 * z && (v += Pe > vt ? 1 : -1), v >= o.length ? v = o.length - 1 : v < 0 && (v = 0), v === p ? (t(32, pt = !0), vt = -v * oe, hr(-v * 100), tr()) : Ut(v, !1, !0);
  }
  function at(v, oe) {
    return v > o.length - 1 ? oe === "ring" ? Vo(v, o.length) : o.length - 1 : v < 0 ? oe === "ring" ? Vo(v, o.length) : 0 : v;
  }
  function ne() {
    $t === "slide" && Sn().then(() => {
      const v = it == null ? void 0 : it.querySelector("." + vn.tabs__item_selected);
      v && t(36, pr = {
        left: `${v.offsetLeft}px`,
        width: `${v.offsetWidth}px`,
        height: `${v.offsetHeight}px`
      });
    });
  }
  ro(() => {
    ne(), ie.devtoolCreateHierarchy;
  }), ln(() => {
    xe.forEach((v) => {
      v == null || v.destroy();
    }), Ze && (ie.unregisterInstance(Ze), t(60, Ze = void 0));
  });
  const mt = (v, oe) => wr(oe, v);
  function rr(v) {
    Dr[v ? "unshift" : "push"](() => {
      it = v, t(21, it);
    });
  }
  function mr(v) {
    Dr[v ? "unshift" : "push"](() => {
      lt = v, t(23, lt);
    });
  }
  function ir(v) {
    Dr[v ? "unshift" : "push"](() => {
      st = v, t(22, st);
    });
  }
  return e.$$set = (v) => {
    "componentContext" in v && t(0, x = v.componentContext), "layoutParams" in v && t(1, fe = v.layoutParams);
  }, e.$$.update = () => {
    var v, oe, d, z, Te, We, we, O, Dt, zt;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(66, n = x.origJson), e.$$.dirty[2] & /*origJson*/
    16 && n && yr(), e.$$.dirty[0] & /*componentContext*/
    1 && t(63, o = Array.isArray(x.json.items) && x.json.items || []), e.$$.dirty[2] & /*items*/
    2 && t(47, i = o.map((Ue) => {
      var ct;
      return { json: Ue.div, id: (ct = Ue.div) == null ? void 0 : ct.id };
    })), e.$$.dirty[0] & /*componentContext*/
    1 && t(65, s = x.getJsonWithVars(x.json.selected_tab)), e.$$.dirty[0] & /*componentContext*/
    1 && ce(t(46, a = x.getDerivedFromVars(x.json.tab_title_style, void 0, !0))), e.$$.dirty[0] & /*componentContext*/
    1 && De(t(45, l = x.getDerivedFromVars(x.json.has_separator))), e.$$.dirty[0] & /*componentContext*/
    1 && Xe(t(44, c = x.getDerivedFromVars(x.json.separator_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Ie(t(43, u = x.getDerivedFromVars(x.json.separator_paddings))), e.$$.dirty[0] & /*componentContext*/
    1 && be(t(42, f = x.getDerivedFromVars(x.json.switch_tabs_by_content_swipe_enabled))), e.$$.dirty[0] & /*componentContext*/
    1 && de(t(41, _ = x.getDerivedFromVars(x.json.restrict_parent_scroll))), e.$$.dirty[0] & /*componentContext*/
    1 && P(t(40, h = x.getDerivedFromVars(x.json.title_paddings))), e.$$.dirty[0] & /*componentContext*/
    1 && le(t(39, m = x.getDerivedFromVars(x.json.tab_title_delimiter))), e.$$.dirty[2] & /*jsonSelectedTab*/
    8 && t(17, p = s && Number(s) || 0), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[2] & /*items*/
    2)
      if (Array.isArray(o) && o.length) {
        let Ue = [];
        o.forEach((ct, Gt) => {
          const Fr = x.getJsonWithVars({
            index: Gt,
            title: ct.title,
            title_click_action: ct.title_click_action
          });
          Fr.title && typeof Fr.title == "string" ? Ue.push(Fr) : x.logError(J(new Error("Incorrect title for the tab"), { additional: { index: Gt } }));
        }), He.set(Ue);
      } else
        He.set([]);
    if (e.$$.dirty[0] & /*$childStore, componentContext*/
    262145 && (R != null && R.length ? t(2, te = !1) : (t(2, te = !0), x.logError(J(new Error('Incorrect or empty "items" prop for div "tabs"'))))), e.$$.dirty[0] & /*componentContext, childLayoutParams*/
    9) {
      let Ue = { parentContainerOrientation: "horizontal" };
      ((v = x.json.width) == null ? void 0 : v.type) === "wrap_content" && (Ue.parentHorizontalWrapContent = !0), (!x.json.height || x.json.height.type === "wrap_content") && (Ue.parentVerticalWrapContent = !0), t(3, Be = Zo(Ue, Be));
    }
    if (e.$$.dirty[0] & /*hasError, selected, componentContext*/
    131077 | e.$$.dirty[2] & /*items*/
    2 && !te && (p < 0 || p >= o.length) && (x.logError(J(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: x.json.selected_tab,
        length: o.length
      }
    })), t(17, p = p < 0 ? 0 : o.length - 1)), e.$$.dirty[0] & /*hasError, $childStore, selected, componentContext*/
    393221 && !te && !R.some((Ue) => p === Ue.index) && (x.logError(J(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: x.json.selected_tab
      }
    })), t(17, p = ((oe = R[0]) == null ? void 0 : oe.index) || 0)), e.$$.dirty[2] & /*$jsonTabStyle*/
    32 && t(64, w = L || {}), e.$$.dirty[0] & /*tabFontSize*/
    16 | e.$$.dirty[2] & /*tabStyle*/
    4 && t(4, nt = Un(w.font_size, nt)), e.$$.dirty[0] & /*tabFontSize, $direction, tabPaddings*/
    524336 | e.$$.dirty[2] & /*tabStyle*/
    4 && (w.font_size || w.paddings)) {
      const Ue = w.paddings || { top: 6, right: 8, bottom: 6, left: 8 }, ct = {
        top: (Number(Ue.top) || 0) / nt * 10,
        right: (Number(Ae === "ltr" ? Ue.end : Ue.start) || Number(Ue.right) || 0) / nt * 10,
        bottom: (Number(Ue.bottom) || 0) / nt * 10,
        left: (Number(Ae === "ltr" ? Ue.start : Ue.end) || Number(Ue.left) || 0) / nt * 10
      };
      t(5, Nt = ns(ct, Ae, Nt));
    }
    if (e.$$.dirty[0] & /*tabFontSize*/
    16 | e.$$.dirty[2] & /*tabStyle*/
    4) {
      const Ue = w.line_height;
      Ue !== void 0 && Bn(Ue) && t(25, ut = ae(Ue / nt * 10));
    }
    if (e.$$.dirty[0] & /*tabFontSize*/
    16 | e.$$.dirty[2] & /*tabStyle*/
    4) {
      const Ue = w.letter_spacing;
      Ue !== void 0 && Mn(Ue) && t(26, pe = ae(Ue / nt * 10));
    }
    if (e.$$.dirty[0] & /*tabFontSize, tabBorderRadius*/
    80 | e.$$.dirty[2] & /*tabStyle*/
    4 && (w.corner_radius || w.corners_radius || w.font_size)) {
      const Ue = (d = w.corner_radius) != null ? d : 1e3;
      w.corners_radius ? t(6, ge = d0(w.corners_radius, Ue, nt, ge)) : Mn(Ue) && t(6, ge = ae(Ue / nt * 10));
    }
    e.$$.dirty[0] & /*tabActiveFontWeight*/
    128 | e.$$.dirty[2] & /*tabStyle*/
    4 && (t(7, _t = hi(w.active_font_weight || w.font_weight, void 0, _t)), w.font_family && typeof w.font_family == "string" ? t(27, Se = ie.typefaceProvider(w.font_family, { fontWeight: _t || 400 })) : t(27, Se = ""), t(28, F = Oi(w.active_font_variation_settings))), e.$$.dirty[0] & /*tabInactiveFontWeight*/
    256 | e.$$.dirty[2] & /*tabStyle*/
    4 && (t(8, Ct = hi(w.inactive_font_weight || w.font_weight, void 0, Ct)), w.font_family && typeof w.font_family == "string" ? t(29, ft = ie.typefaceProvider(w.font_family, { fontWeight: Ct || 400 })) : t(29, ft = ""), t(30, St = Oi(w.inactive_font_variation_settings))), e.$$.dirty[0] & /*tabActiveTextColor*/
    512 | e.$$.dirty[2] & /*tabStyle*/
    4 && t(9, Tt = fr(w.active_text_color, 1, Tt)), e.$$.dirty[0] & /*tabInactiveTextColor*/
    1024 | e.$$.dirty[2] & /*tabStyle*/
    4 && t(10, $e = fr(w.inactive_text_color, 1, $e)), e.$$.dirty[0] & /*tabActiveBackground*/
    2048 | e.$$.dirty[2] & /*tabStyle*/
    4 && t(11, Y = fr(w.active_background_color, 1, Y)), e.$$.dirty[0] & /*tabInactiveBackground*/
    4096 | e.$$.dirty[2] & /*tabStyle*/
    4 && t(12, At = fr(w.inactive_background_color, 1, At)), e.$$.dirty[0] & /*tabItemSpacing*/
    8192 | e.$$.dirty[2] & /*tabStyle*/
    4 && t(13, Mt = $r(w.item_spacing, Mt)), e.$$.dirty[0] & /*$jsonSeparator, $direction*/
    1572864 | e.$$.dirty[1] & /*separatorBackground*/
    1073741824 | e.$$.dirty[2] & /*$jsonSeparatorColor, $jsonSeparatorPaddings, separatorMargins*/
    1537 && qe && ($ && t(61, Qt = fr($, 1, Qt)), Ee && t(62, Jt = ns(Ee, Ae, Jt))), e.$$.dirty[1] & /*separatorBackground*/
    1073741824 | e.$$.dirty[2] & /*separatorMargins*/
    1 && t(38, k = {
      background: Qt,
      margin: Jt
    }), e.$$.dirty[2] & /*$jsonSwipeEnabled*/
    256 && t(37, N = typeof U > "u" ? !0 : !!U), e.$$.dirty[0] & /*titlePadding*/
    16384 | e.$$.dirty[2] & /*$jsonTitlePaddings*/
    128 && t(14, he = gi(E || void 0, he)), e.$$.dirty[0] & /*delimitierStyle*/
    32768 | e.$$.dirty[2] & /*$jsonDelimiterStyle*/
    64 && t(15, nr = f0(T, nr)), e.$$.dirty[2] & /*$jsonTabStyle*/
    32 && ((L == null ? void 0 : L.animation_type) === "fade" || (L == null ? void 0 : L.animation_type) === "none") && t(16, $t = L.animation_type), e.$$.dirty[2] & /*$jsonTabStyle*/
    32 && Mn(L == null ? void 0 : L.animation_duration) && t(35, Xt = L.animation_duration), e.$$.dirty[2] & /*items*/
    2 && dt(o), e.$$.dirty[0] & /*componentContext, hasError, selected*/
    131077 | e.$$.dirty[1] & /*prevId*/
    536870912 | e.$$.dirty[2] & /*items*/
    2 && x.json && (Ze && (ie.unregisterInstance(Ze), t(60, Ze = void 0)), x.id && !te && !x.fakeElement && (t(60, Ze = x.id), ie.registerInstance(Ze, {
      setCurrentItem(Ue, ct) {
        if (Ue < 0 || Ue > o.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        Ut(Ue, !1, ct);
      },
      setPreviousItem(Ue, ct, Gt) {
        let Fr = at(p - Ue, ct);
        Ut(Fr, !1, Gt);
      },
      setNextItem(Ue, ct, Gt) {
        let Fr = at(p + Ue, ct);
        Ut(Fr, !1, Gt);
      },
      scrollToStart(Ue) {
        Ut(0, !1, Ue);
      },
      scrollToEnd(Ue) {
        Ut(o.length - 1, !1, Ue);
      },
      scrollCombined({ step: Ue, overflow: ct, animated: Gt }) {
        Ue && Ut(at(p + Ue, ct || "clamp"), !1, Gt || !0);
      }
    }))), e.$$.dirty[0] & /*componentContext, selected, animationType*/
    196609 | e.$$.dirty[2] & /*items*/
    2 && t(24, kt = {
      "height-parent": ((z = x.json.height) == null ? void 0 : z.type) === "match_parent" ? "yes" : "",
      "own-height": (((Te = x.json.height) == null ? void 0 : Te.type) === "match_parent" || ((We = x.json.height) == null ? void 0 : We.type) === "fixed") && !(((Dt = (O = (we = o[p]) == null ? void 0 : we.div) == null ? void 0 : O.height) == null ? void 0 : Dt.type) === "wrap_content" && ((zt = o[p].div) != null && zt.height.constrained)),
      animation: $t
    });
  }, [
    x,
    fe,
    te,
    Be,
    nt,
    Nt,
    ge,
    _t,
    Ct,
    Tt,
    $e,
    Y,
    At,
    Mt,
    he,
    nr,
    $t,
    p,
    R,
    Ae,
    qe,
    it,
    st,
    lt,
    kt,
    ut,
    pe,
    Se,
    F,
    ft,
    St,
    Le,
    pt,
    xe,
    Oe,
    Xt,
    pr,
    N,
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
    Fe,
    Ye,
    He,
    Pt,
    G,
    wr,
    rt,
    Zt,
    Yt,
    ur,
    ne,
    Ze,
    Qt,
    Jt,
    o,
    w,
    s,
    n,
    L,
    T,
    E,
    U,
    Ee,
    $,
    mt,
    rr,
    mr,
    ir
  ];
}
class j0 extends Br {
  constructor(r) {
    super(), Or(this, r, v0, k0, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const C0 = "appkit-state", E0 = "appkit-state_overflow_visible", A0 = "appkit-state__animations", mi = {
  state: C0,
  state_overflow_visible: E0,
  state__animations: A0,
  "state__animation-child": "appkit-state__animation-child",
  "state__animation-child-inner": "appkit-state__animation-child-inner"
};
function dl(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function S0(e) {
  return e * e * e;
}
function jd(e) {
  const r = e - 1;
  return r * r * r + 1;
}
function Cd(e) {
  return (r) => {
    if (r <= 0)
      return 0;
    if (r >= 1)
      return 1;
    const t = r * e.length, n = Math.floor(t), o = e[n], i = e[n + 1], s = t - n;
    return o * s + i * (1 - s);
  };
}
const V0 = [
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
], F0 = Cd(V0), I0 = [
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
], D0 = Cd(I0), Hl = {
  linear: xs,
  ease: F0,
  ease_in: S0,
  ease_out: jd,
  ease_in_out: dl,
  spring: D0
};
function pa(e) {
  return Hl[e];
}
const Ed = 200, Ad = 0, T0 = 0, M0 = 0;
function Kc(e) {
  return Math.max(...e.map(
    (r) => (Number(r.duration) || Ed) + (Number(r.start_delay) || Ad)
  ));
}
function P0(e, {
  transitions: r,
  elementBbox: t,
  rootBbox: n,
  direction: o,
  maxDuration: i,
  alpha: s
}) {
  const a = s != null ? s : 1;
  return {
    duration: zi() ? 0 : i,
    css: (l) => {
      const c = l * i, u = r.map((k) => {
        var X, le, E;
        const N = Number(k.start_delay) || Ad, R = Number(k.duration) || Ed, L = Math.max(0, Math.min(1, (c - N) / R)), ee = o === "in" ? 1 - L : L, T = (pa(k.interpolator || "ease_in_out") || dl)(ee);
        if (k.type === "fade")
          return T >= 1 ? {
            active: !1,
            opacity: 0
          } : {
            active: T > 0 && T < 1,
            opacity: (1 - T) * a + T * (k.alpha || T0)
          };
        if (k.type === "slide") {
          const D = k.edge === "top" || k.edge === "left" ? -1 : 1, P = k.edge === "top" || k.edge === "bottom" || !k.edge ? "translateY" : "translateX";
          let U = (X = k.distance) == null ? void 0 : X.value;
          U === void 0 && (k.edge === "top" || k.edge === "bottom" || !k.edge ? U = Math.abs(
            n[k.edge === "bottom" ? "bottom" : "top"] - t[k.edge === "bottom" ? "top" : "bottom"]
          ) : U = Math.abs(
            n[k.edge === "left" ? "left" : "right"] - t[k.edge === "left" ? "right" : "left"]
          ));
          const Z = U * T;
          return {
            active: T > 0 && T < 1,
            translate: `${P}(${Z * D}px)`
          };
        } else if (k.type === "scale") {
          const D = 1 - T + T * (k.scale || M0), P = (le = k.pivot_x) != null ? le : 0.5, U = (E = k.pivot_y) != null ? E : 0.5, Z = (1 - D) * t.width * P, be = (1 - D) * t.height * U;
          return {
            active: T > 0 && T < 1,
            scale: `translate(${Z}px, ${be}px) scale(${D})`
          };
        }
        return {};
      }), f = u.map((k) => k.opacity).filter((k) => k !== void 0).reduce((k, N) => k * N, 1), _ = u.map((k) => k.translate).filter((k) => k !== void 0).join(" "), h = u.map((k) => k.scale).filter((k) => k !== void 0).join(" "), m = u.filter((k) => k.active).map((k) => k.scale).filter((k) => k !== void 0), p = m.length ? m[m.length - 1] : h;
      return `transform:${[_, p].filter(Boolean).join(" ") || "none"};opacity:${f}`;
    }
  };
}
function Ho(e, r, t) {
  return e * (1 - t) + r * t;
}
const N0 = 200, z0 = 0;
function O0(e, {
  rootBbox: r,
  beforeBbox: t,
  afterBbox: n,
  transition: o
}) {
  var i, s;
  return {
    delay: (i = o.start_delay) != null ? i : z0,
    duration: zi() ? 0 : (s = o.duration) != null ? s : N0,
    easing: o.interpolator && o.interpolator in Hl ? Hl[o.interpolator] : dl,
    css: (a) => [
      `top:${Ho(t.top, n.top, a) - r.top}px`,
      `left:${Ho(t.left, n.left, a) - r.left}px`,
      `width:${Ho(t.width, n.width, a)}px`,
      `height:${Ho(t.height, n.height, a)}px`
    ].join(";")
  };
}
function Sd(e) {
  const r = [];
  return e.type === "set" ? (e.items || []).forEach((t) => {
    r.push(...Sd(t));
  }) : r.push(e), r;
}
const { Map: B0 } = Po;
function Xc(e, r, t) {
  const n = e.slice();
  return n[37] = r[t], n;
}
function L0(e) {
  let r, t;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function R0(e) {
  let r, t;
  const n = [
    {
      cls: bt(
        "state",
        mi,
        /*mods*/
        e[8]
      )
    },
    {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    },
    { layoutParams: (
      /*layoutParams*/
      e[1]
    ) },
    { parentOf: (
      /*parentOfItems*/
      e[9]
    ) },
    { parentOfSimpleMode: !0 },
    { replaceItems: (
      /*replaceItems*/
      e[12]
    ) },
    /*devapi*/
    e[11]
  ];
  let o = {
    $$slots: { default: [U0] },
    $$scope: { ctx: e }
  };
  for (let i = 0; i < n.length; i += 1)
    o = jo(o, n[i]);
  return r = new wn({ props: o }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(i, s) {
      Lt(r, i, s), t = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams, parentOfItems, replaceItems, devapi*/
      6915 ? No(n, [
        s[0] & /*mods*/
        256 && {
          cls: bt(
            "state",
            mi,
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
        2048 && ad(
          /*devapi*/
          i[11]
        )
      ]) : {};
      s[0] & /*animationRoot, animationList, selectedId, selectedComponentContext, childContexts*/
      248 | s[1] & /*$$scope*/
      4096 && (a.$$scope = { dirty: s, ctx: i }), r.$set(a);
    },
    i(i) {
      t || (W(r.$$.fragment, i), t = !0);
    },
    o(i) {
      re(r.$$.fragment, i), t = !1;
    },
    d(i) {
      Rt(r, i);
    }
  };
}
function Zc(e) {
  let r = (
    /*selectedId*/
    e[5]
  ), t, n, o = Qc(e);
  return {
    c() {
      o.c(), t = xt();
    },
    m(i, s) {
      o.m(i, s), K(i, t, s), n = !0;
    },
    p(i, s) {
      s[0] & /*selectedId*/
      32 && Vr(r, r = /*selectedId*/
      i[5]) ? (dr(), re(o, 1, 1, C), _r(), o = Qc(i), o.c(), W(o, 1), o.m(t.parentNode, t)) : o.p(i, s);
    },
    i(i) {
      n || (W(o), n = !0);
    },
    o(i) {
      re(o), n = !1;
    },
    d(i) {
      i && q(t), o.d(i);
    }
  };
}
function Qc(e) {
  let r, t;
  return r = new Qn({
    props: {
      componentContext: (
        /*selectedComponentContext*/
        e[6]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*selectedComponentContext*/
      64 && (i.componentContext = /*selectedComponentContext*/
      n[6]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function H0(e) {
  let r, t, n, o, i, s, a, l;
  n = new Qn({
    props: {
      componentContext: (
        /*item*/
        e[37].componentContextCopy
      )
    }
  });
  function c() {
    return (
      /*introend_handler_1*/
      e[22](
        /*item*/
        e[37]
      )
    );
  }
  return {
    c() {
      r = Me("div"), t = Me("div"), Ht(n.$$.fragment), o = gr(), g(t, "class", mi["state__animation-child-inner"]), g(r, "class", mi["state__animation-child"]);
    },
    m(u, f) {
      K(u, r, f), wt(r, t), Lt(n, t, null), wt(r, o), s = !0, a || (l = Ke(r, "introend", c), a = !0);
    },
    p(u, f) {
      e = u;
      const _ = {};
      f[0] & /*animationList*/
      16 && (_.componentContext = /*item*/
      e[37].componentContextCopy), n.$set(_);
    },
    i(u) {
      s || (W(n.$$.fragment, u), i || fo(() => {
        i = il(
          r,
          O0,
          /*item*/
          e[37]
        ), i.start();
      }), s = !0);
    },
    o(u) {
      re(n.$$.fragment, u), s = !1;
    },
    d(u) {
      u && q(r), Rt(n), a = !1, l();
    }
  };
}
function W0(e) {
  let r, t, n, o, i, s = `${/*item*/
  e[37].offsetLeft}px`, a = `${/*item*/
  e[37].offsetTop}px`, l = `${/*item*/
  e[37].width}px`, c = `${/*item*/
  e[37].height}px`, u, f, _;
  n = new Qn({
    props: {
      componentContext: (
        /*item*/
        e[37].componentContextCopy
      )
    }
  });
  function h() {
    return (
      /*introend_handler*/
      e[21](
        /*item*/
        e[37]
      )
    );
  }
  return {
    c() {
      r = Me("div"), t = Me("div"), Ht(n.$$.fragment), o = gr(), g(t, "class", mi["state__animation-child-inner"]), g(r, "class", mi["state__animation-child"]), I(r, "left", s), I(r, "top", a), I(r, "width", l), I(r, "height", c);
    },
    m(m, p) {
      K(m, r, p), wt(r, t), Lt(n, t, null), wt(r, o), u = !0, f || (_ = Ke(r, "introend", h), f = !0);
    },
    p(m, p) {
      e = m;
      const w = {};
      p[0] & /*animationList*/
      16 && (w.componentContext = /*item*/
      e[37].componentContextCopy), n.$set(w), p[0] & /*animationList*/
      16 && s !== (s = `${/*item*/
      e[37].offsetLeft}px`) && I(r, "left", s), p[0] & /*animationList*/
      16 && a !== (a = `${/*item*/
      e[37].offsetTop}px`) && I(r, "top", a), p[0] & /*animationList*/
      16 && l !== (l = `${/*item*/
      e[37].width}px`) && I(r, "width", l), p[0] & /*animationList*/
      16 && c !== (c = `${/*item*/
      e[37].height}px`) && I(r, "height", c);
    },
    i(m) {
      u || (W(n.$$.fragment, m), i || fo(() => {
        i = il(
          r,
          P0,
          /*item*/
          e[37]
        ), i.start();
      }), u = !0);
    },
    o(m) {
      re(n.$$.fragment, m), u = !1;
    },
    d(m) {
      m && q(r), Rt(n), f = !1, _();
    }
  };
}
function xc(e, r) {
  let t, n, o, i, s;
  const a = [W0, H0], l = [];
  function c(u, f) {
    return "direction" in /*item*/
    u[37] ? 0 : 1;
  }
  return n = c(r), o = l[n] = a[n](r), {
    key: e,
    first: null,
    c() {
      t = xt(), o.c(), i = xt(), this.first = t;
    },
    m(u, f) {
      K(u, t, f), l[n].m(u, f), K(u, i, f), s = !0;
    },
    p(u, f) {
      r = u;
      let _ = n;
      n = c(r), n === _ ? l[n].p(r, f) : (dr(), re(l[_], 1, 1, () => {
        l[_] = null;
      }), _r(), o = l[n], o ? o.p(r, f) : (o = l[n] = a[n](r), o.c()), W(o, 1), o.m(i.parentNode, i));
    },
    i(u) {
      s || (W(o), s = !0);
    },
    o(u) {
      re(o), s = !1;
    },
    d(u) {
      u && (q(t), q(i)), l[n].d(u);
    }
  };
}
function U0(e) {
  let r, t, n, o = [], i = new B0(), s, a = !1, l = (
    /*selectedComponentContext*/
    e[6] && Zc(e)
  ), c = or(
    /*animationList*/
    e[4]
  );
  const u = (f) => (
    /*item*/
    f[37]
  );
  for (let f = 0; f < c.length; f += 1) {
    let _ = Xc(e, c, f), h = u(_);
    i.set(h, o[f] = xc(h, _));
  }
  return {
    c() {
      r = gr(), l && l.c(), t = gr(), n = Me("div");
      for (let f = 0; f < o.length; f += 1)
        o[f].c();
      g(n, "class", mi.state__animations), g(n, "aria-hidden", "true");
    },
    m(f, _) {
      K(f, r, _), l && l.m(f, _), K(f, t, _), K(f, n, _);
      for (let h = 0; h < o.length; h += 1)
        o[h] && o[h].m(n, null);
      e[23](n), s = !0;
    },
    p(f, _) {
      /*selectedComponentContext*/
      f[6] ? l ? (l.p(f, _), _[0] & /*selectedComponentContext*/
      64 && W(l, 1)) : (l = Zc(f), l.c(), W(l, 1), l.m(t.parentNode, t)) : l && (dr(), re(l, 1, 1, () => {
        l = null;
      }), _r()), _[0] & /*animationList, onOutro*/
      8208 && (c = or(
        /*animationList*/
        f[4]
      ), dr(), o = ld(o, _, u, 1, f, c, i, n, sd, xc, null, Xc), _r());
    },
    i(f) {
      if (!s) {
        W(a), W(l);
        for (let _ = 0; _ < c.length; _ += 1)
          W(o[_]);
        s = !0;
      }
    },
    o(f) {
      re(a), re(l);
      for (let _ = 0; _ < o.length; _ += 1)
        re(o[_]);
      s = !1;
    },
    d(f) {
      f && (q(r), q(t), q(n)), l && l.d(f);
      for (let _ = 0; _ < o.length; _ += 1)
        o[_].d();
      e[23](null);
    }
  };
}
function G0(e) {
  let r, t, n, o;
  const i = [R0, L0], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[2] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (t && (dr(), re(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (t = s[r], t ? t.p(l, c) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      re(t), o = !1;
    },
    d(l) {
      l && q(n), ~r && s[r].d(l);
    }
  };
}
function J0(e) {
  return e.some((r) => r.type === "fade");
}
function Vd(e) {
  return e.type === "change_bounds" ? e : e.type === "set" ? Vd(e.items[0]) : null;
}
function q0(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h = C, m = () => (h(), h = S(i, (ue) => t(20, _ = ue)), i);
  e.$$.on_destroy.push(() => h());
  let { componentContext: p } = r, { layoutParams: w = void 0 } = r;
  const k = Tr(Zr);
  let N = !1, R, L = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Set(), ce = [], T = [], X = [], le = [], E, D, P, U, Z = !1, be;
  function Ae() {
    t(15, Z = !1);
  }
  function Ee(ue) {
    P && P.destroy(), t(6, P = ue != null && ue.div ? p.produceChildContext(ue.div, {
      path: ue.state_id || "<unknown>"
    }) : void 0);
  }
  function _e(ue) {
    const ke = p.json.states;
    if (!ke)
      return;
    const de = /* @__PURE__ */ new Set();
    t(16, c = ke.map((x, fe) => (c[fe].div !== ue[fe] && x.state_id && de.add(x.state_id), { ...x, div: ue[fe] }))), t(0, p.json = { ...p.json, states: c }, p), D && de.has(D) && Ee(c.find((x) => x.state_id === D) || null);
  }
  function Ie(ue, ke, de) {
    let { json: x, parentComponentContext: fe, transitions: ie, node: Fe } = ke;
    x = p.getJsonWithVars(x), ie = p.getJsonWithVars(ie);
    const Ye = Sd(ie), Ze = ke.bbox || Fe.getBoundingClientRect(), te = {
      ...x,
      margins: void 0,
      alpha: J0(Ye) ? void 0 : x.alpha
    };
    return {
      id: fe.id || "",
      json: te,
      componentContextCopy: fe.produceChildContext(te, { fake: za }),
      elementBbox: Ze,
      rootBbox: ue,
      transitions: Ye,
      alpha: x.alpha,
      width: Ze.width,
      height: Ze.height,
      offsetTop: Ze.top - ue.top,
      offsetLeft: Ze.left - ue.left,
      direction: de,
      resolvePromise: ke.resolvePromise,
      node: ke.node
    };
  }
  async function $(ue) {
    if (D === ue)
      return p;
    k.setRunning("stateChange", !0);
    const ke = new Set(ee);
    ce.forEach((te) => {
      te.resolvePromise && te.resolvePromise();
    }), t(4, ce = []);
    let de = [];
    if (R) {
      const te = R.getBoundingClientRect();
      de = X.map((He) => Ie(te, He, "out"));
    }
    le.forEach((te) => {
      te.transitions && L.set(te.id, {
        transitions: te.transitions,
        rect: te.node.getBoundingClientRect()
      });
    }), T = [], X = [], le = [];
    const x = c.find((te) => te.state_id === ue) || null;
    if (x ? (t(5, D = ue), a == null || a.setValue(D), Ee(x)) : p.logError(J(new Error("Cannot find state with id"), { additional: { stateId: ue } })), await Sn(), !R)
      return;
    const fe = R.getBoundingClientRect();
    let ie = T.filter((te) => {
      var He;
      return te.parentComponentContext.id && !ke.has(te.parentComponentContext.id) ? !0 : ((He = te.resolvePromise) == null || He.call(te), !1);
    }).map((te) => Ie(fe, te, "in"));
    de = de.filter((te) => {
      var He;
      return te.id && !ee.has(te.id) ? !0 : ((He = te.resolvePromise) == null || He.call(te), !1);
    });
    const Fe = de.concat(ie), Ye = Fe.reduce(
      (te, He) => Math.max(te, Kc(He.transitions)),
      0
    ), Ze = le.filter((te) => L.has(te.id)).map((te) => {
      const He = {
        ...te.json,
        margins: void 0,
        width: { type: "match_parent" },
        height: { type: "match_parent" }
      }, Be = L.get(te.id);
      return {
        id: te.parentComponentContext.id || "",
        json: He,
        componentContextCopy: te.parentComponentContext.produceChildContext(He, { fake: za }),
        rootBbox: fe,
        beforeBbox: Be.rect,
        afterBbox: te.node.getBoundingClientRect(),
        node: te.node,
        transition: p.getJsonWithVars(Vd(Be.transitions)),
        resolvePromise: te.resolvePromise
      };
    });
    return t(4, ce = [
      ...Fe.map((te) => ({ ...te, maxDuration: Ye })),
      ...Ze
    ]), L.clear(), k.setRunning("stateChange", !1), p;
  }
  fi(ca, {
    // eslint-disable-next-line max-params
    runVisibilityTransition(ue, ke, de, x, fe, ie) {
      if (!R)
        return Promise.resolve();
      const Fe = R.getBoundingClientRect(), Ye = Ie(
        Fe,
        {
          json: ue,
          parentComponentContext: ke,
          transitions: de,
          node: x,
          bbox: ie
        },
        fe
      ), Ze = Kc(Ye.transitions), te = { ...Ye, maxDuration: Ze };
      return t(4, ce = [...ce.filter((He) => He.node !== Ye.node), te]), new Promise((He) => {
        te.resolvePromise = He;
      });
    },
    registerChildWithTransitionIn(ue, ke, de, x) {
      const fe = {
        json: ue,
        parentComponentContext: ke,
        transitions: de,
        node: x
      };
      return T.push(fe), new Promise((ie) => {
        fe.resolvePromise = ie;
      });
    },
    registerChildWithTransitionOut(ue, ke, de, x) {
      const fe = {
        json: ue,
        parentComponentContext: ke,
        transitions: de,
        node: x
      };
      return X.push(fe), new Promise((ie) => {
        fe.resolvePromise = ie;
      });
    },
    registerChildWithTransitionChange(ue, ke, de, x) {
      const fe = ke.id;
      if (!fe)
        return Promise.resolve();
      const ie = {
        id: fe,
        json: ue,
        parentComponentContext: ke,
        transitions: de,
        node: x
      };
      return le.push(ie), new Promise((Fe) => {
        ie.resolvePromise = Fe;
      });
    },
    hasTransitionChange(ue) {
      return ue ? L.has(ue) : !1;
    },
    registerChild(ue) {
      ee.add(ue);
    },
    unregisterChild(ue) {
      ee.delete(ue);
    }
  });
  function tt(ue) {
    if (!Z && (t(15, Z = !0), ue.length)) {
      const ke = (a == null ? void 0 : a.getValue()) || o;
      if (ke) {
        t(5, D = ke);
        const de = ue.find((x) => x.state_id === D) || null;
        Ee(de), de || p.logError(J(new Error("Cannot find state for default_state_id"), { additional: { selectedId: D } }));
      } else {
        const de = ue[0];
        t(5, D = de.state_id), Ee(de);
      }
      a && (a.setValue(D), a.subscribe((de) => {
        $(de);
      }));
    }
  }
  function Xe(ue) {
    t(4, ce = ce.filter((ke) => ke !== ue)), ue.resolvePromise && ue.resolvePromise();
  }
  ln(() => {
    P && P.destroy(), E && (E(), t(14, E = void 0));
  });
  const qe = (ue) => Xe(ue), ve = (ue) => Xe(ue);
  function De(ue) {
    Dr[ue ? "unshift" : "push"](() => {
      R = ue, t(3, R);
    });
  }
  return e.$$set = (ue) => {
    "componentContext" in ue && t(0, p = ue.componentContext), "layoutParams" in ue && t(1, w = ue.layoutParams);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*componentContext*/
    1 && t(17, n = p.json.div_id || p.id), e.$$.dirty[0] & /*componentContext*/
    1 && (o = p.getJsonWithVars(p.json.default_state_id)), e.$$.dirty[0] & /*componentContext*/
    1 && m(t(10, i = p.getDerivedFromVars(p.json.clip_to_bounds))), e.$$.dirty[0] & /*componentContext*/
    1 && t(19, s = p.json.state_id_variable), e.$$.dirty[0] & /*stateVariableName, componentContext*/
    524289 && (a = s ? p.getVariable(s, "string") || k.awaitGlobalVariable(s, "string", "") : null), e.$$.dirty[0] & /*componentContext*/
    1 && t(18, l = p.origJson), e.$$.dirty[0] & /*origJson*/
    262144 && l && Ae(), e.$$.dirty[0] & /*stateId, componentContext*/
    131073 && (n ? t(2, N = !1) : (t(2, N = !0), p.logError(J(new Error('Missing "id" prop for div "state"'))))), e.$$.dirty[0] & /*componentContext*/
    1 && p.json && (ee = /* @__PURE__ */ new Set()), e.$$.dirty[0] & /*componentContext*/
    1 && t(16, c = Array.isArray(p.json.states) && p.json.states || []), e.$$.dirty[0] & /*items*/
    65536 && t(9, u = c.map((ue) => {
      var ke;
      return { json: ue.div, id: (ke = ue.div) == null ? void 0 : ke.id };
    })), e.$$.dirty[0] & /*items, componentContext*/
    65537 && (c != null && c.length ? t(2, N = !1) : (t(2, N = !0), p.logError(J(new Error('Empty "states" prop for div "state"'))))), e.$$.dirty[0] & /*componentContext, stateUnregister, stateId*/
    147457 && p.json && (E && (E(), t(14, E = void 0)), n && !(p != null && p.fakeElement) && t(14, E = p.registerState(n, $))), e.$$.dirty[0] & /*inited, items*/
    98304 && !Z && tt(c), e.$$.dirty[0] & /*$jsonClipToBounds*/
    1048576 && t(8, f = {
      overflow: _ === !1 || _ === 0 ? "visible" : void 0
    });
  }, [
    p,
    w,
    N,
    R,
    ce,
    D,
    P,
    U,
    f,
    u,
    i,
    be,
    _e,
    Xe,
    E,
    Z,
    c,
    n,
    l,
    s,
    _,
    qe,
    ve,
    De
  ];
}
class Y0 extends Br {
  constructor(r) {
    super(), Or(this, r, q0, G0, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const K0 = "appkit-pager", X0 = "appkit-pager__items", Z0 = "appkit-pager_animated", Q0 = "appkit-pager__item", x0 = "appkit-pager_clip", $0 = "appkit-pager_orientation_horizontal", em = "appkit-pager_orientation_vertical", tm = "appkit-pager__item_height_content", rm = "appkit-pager__item_height_fixed", nm = "appkit-pager__item_width_content", om = "appkit-pager__item_width_fixed", im = "appkit-pager__arrow", Mo = {
  pager: K0,
  pager__items: X0,
  pager_animated: Z0,
  pager__item: Q0,
  "pager_scroll-align_start": "appkit-pager_scroll-align_start",
  "pager_scroll-align_center": "appkit-pager_scroll-align_center",
  "pager_scroll-align_end": "appkit-pager_scroll-align_end",
  pager_clip: x0,
  pager_orientation_horizontal: $0,
  pager_orientation_vertical: em,
  "pager_cross-align_center": "appkit-pager_cross-align_center",
  "pager_cross-align_end": "appkit-pager_cross-align_end",
  pager__item_height_content: tm,
  pager__item_height_fixed: rm,
  "pager__item_height-constrained": "appkit-pager__item_height-constrained",
  pager__item_width_content: nm,
  pager__item_width_fixed: om,
  "pager__item_width-constrained": "appkit-pager__item_width-constrained",
  pager__arrow: im,
  "pager__arrow-icon-path": "appkit-pager__arrow-icon-path"
}, { window: sm } = Po;
function $c(e, r, t) {
  const n = e.slice();
  return n[95] = r[t], n;
}
function lm(e) {
  let r, t;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function am(e) {
  let r, t;
  return r = new wn({
    props: {
      cls: bt(
        "pager",
        Mo,
        /*mods*/
        e[13]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      customPaddings: !0,
      parentOf: (
        /*items*/
        e[3]
      ),
      replaceItems: (
        /*replaceItems*/
        e[30]
      ),
      $$slots: { default: [fm] },
      $$scope: { ctx: e }
    }
  }), r.$on(
    "pointerdown",
    /*onPointerDown*/
    e[35]
  ), r.$on(
    "wheel",
    /*onWheel*/
    e[36]
  ), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      8192 && (i.cls = bt(
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function eu(e) {
  let r, t, n, o, i, s, a;
  return t = new Qn({
    props: {
      componentContext: (
        /*item*/
        e[95].componentContext
      ),
      layoutParams: (
        /*childLayoutParams*/
        e[9]
      )
    }
  }), {
    c() {
      r = Me("div"), Ht(t.$$.fragment), n = gr(), g(r, "class", o = bt("pager__item", Mo, nu(
        /*orientation*/
        e[2],
        /*item*/
        e[95]
      ))), g(r, "role", "tabpanel"), g(r, "id", i = /*instId*/
      e[26] + "-panel-" + /*item*/
      e[95].index), g(r, "aria-labelledby", s = /*instId*/
      e[26] + "-tab-" + /*item*/
      e[95].index);
    },
    m(l, c) {
      K(l, r, c), Lt(t, r, null), wt(r, n), a = !0;
    },
    p(l, c) {
      const u = {};
      c[0] & /*visibleItems*/
      16 && (u.componentContext = /*item*/
      l[95].componentContext), c[0] & /*childLayoutParams*/
      512 && (u.layoutParams = /*childLayoutParams*/
      l[9]), t.$set(u), (!a || c[0] & /*orientation, visibleItems*/
      20 && o !== (o = bt("pager__item", Mo, nu(
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
      a || (W(t.$$.fragment, l), a = !0);
    },
    o(l) {
      re(t.$$.fragment, l), a = !1;
    },
    d(l) {
      l && q(r), Rt(t);
    }
  };
}
function tu(e) {
  let r, t, n, o = !/*leftClass*/
  e[27] && cm();
  return {
    c() {
      r = Me("div"), o && o.c(), g(
        r,
        "class",
        /*leftClass*/
        e[27] || `${Mo.pager__arrow} ${go.arrow} ${go.arrow_left}`
      );
    },
    m(i, s) {
      K(i, r, s), o && o.m(r, null), t || (n = Ke(
        r,
        "click",
        /*click_handler*/
        e[70]
      ), t = !0);
    },
    p: C,
    d(i) {
      i && q(r), o && o.d(), t = !1, n();
    }
  };
}
function cm(e) {
  let r, t;
  return {
    c() {
      r = xr("svg"), t = xr("path"), g(t, "class", Mo["pager__arrow-icon-path"]), g(t, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", go.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      K(n, r, o), wt(r, t);
    },
    d(n) {
      n && q(r);
    }
  };
}
function ru(e) {
  let r, t, n, o = !/*rightClass*/
  e[28] && um();
  return {
    c() {
      r = Me("div"), o && o.c(), g(
        r,
        "class",
        /*rightClass*/
        e[28] || `${Mo.pager__arrow} ${go.arrow} ${go.arrow_right}`
      );
    },
    m(i, s) {
      K(i, r, s), o && o.m(r, null), t || (n = Ke(
        r,
        "click",
        /*click_handler_1*/
        e[71]
      ), t = !0);
    },
    p: C,
    d(i) {
      i && q(r), o && o.d(), t = !1, n();
    }
  };
}
function um(e) {
  let r, t;
  return {
    c() {
      r = xr("svg"), t = xr("path"), g(t, "class", Mo["pager__arrow-icon-path"]), g(t, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", go.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      K(n, r, o), wt(r, t);
    },
    d(n) {
      n && q(r);
    }
  };
}
function fm(e) {
  let r, t, n, o, i, s, a, l, c, u = or(
    /*visibleItems*/
    e[4]
  ), f = [];
  for (let p = 0; p < u.length; p += 1)
    f[p] = eu($c(e, u, p));
  const _ = (p) => re(f[p], 1, 1, () => {
    f[p] = null;
  });
  let h = (
    /*hasScrollLeft*/
    e[11] && /*shouldCheckArrows*/
    e[12] && tu(e)
  ), m = (
    /*hasScrollRight*/
    e[10] && /*shouldCheckArrows*/
    e[12] && ru(e)
  );
  return {
    c() {
      r = Me("div");
      for (let p = 0; p < f.length; p += 1)
        f[p].c();
      o = gr(), h && h.c(), i = gr(), m && m.c(), s = xt(), g(r, "class", t = Mo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (e[24] ? jr["root_restrict-scroll"] : "")), g(r, "style", n = ar(
        /*style*/
        e[14]
      ));
    },
    m(p, w) {
      K(p, r, w);
      for (let k = 0; k < f.length; k += 1)
        f[k] && f[k].m(r, null);
      e[69](r), K(p, o, w), h && h.m(p, w), K(p, i, w), m && m.m(p, w), K(p, s, w), a = !0, l || (c = [
        Ke(
          r,
          "transitionend",
          /*onTransitionEnd*/
          e[37]
        ),
        Ke(
          r,
          "focus",
          /*onFocus*/
          e[33],
          !0
        ),
        Ke(
          r,
          "click",
          /*onItemsClick*/
          e[34],
          !0
        )
      ], l = !0);
    },
    p(p, w) {
      if (w[0] & /*orientation, visibleItems, instId, childLayoutParams*/
      67109396) {
        u = or(
          /*visibleItems*/
          p[4]
        );
        let k;
        for (k = 0; k < u.length; k += 1) {
          const N = $c(p, u, k);
          f[k] ? (f[k].p(N, w), W(f[k], 1)) : (f[k] = eu(N), f[k].c(), W(f[k], 1), f[k].m(r, null));
        }
        for (dr(), k = u.length; k < f.length; k += 1)
          _(k);
        _r();
      }
      (!a || w[0] & /*$jsonRestrictParentScroll*/
      16777216 && t !== (t = Mo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (p[24] ? jr["root_restrict-scroll"] : ""))) && g(r, "class", t), (!a || w[0] & /*style*/
      16384 && n !== (n = ar(
        /*style*/
        p[14]
      ))) && g(r, "style", n), /*hasScrollLeft*/
      p[11] && /*shouldCheckArrows*/
      p[12] ? h ? h.p(p, w) : (h = tu(p), h.c(), h.m(i.parentNode, i)) : h && (h.d(1), h = null), /*hasScrollRight*/
      p[10] && /*shouldCheckArrows*/
      p[12] ? m ? m.p(p, w) : (m = ru(p), m.c(), m.m(s.parentNode, s)) : m && (m.d(1), m = null);
    },
    i(p) {
      if (!a) {
        for (let w = 0; w < u.length; w += 1)
          W(f[w]);
        a = !0;
      }
    },
    o(p) {
      f = f.filter(Boolean);
      for (let w = 0; w < f.length; w += 1)
        re(f[w]);
      a = !1;
    },
    d(p) {
      p && (q(r), q(o), q(i), q(s)), sn(f, p), e[69](null), h && h.d(p), m && m.d(p), l = !1, Ur(c);
    }
  };
}
function dm(e) {
  let r, t, n, o, i, s;
  const a = [am, lm], l = [];
  function c(u, f) {
    return (
      /*hasError*/
      u[5] ? -1 : 0
    );
  }
  return ~(r = c(e)) && (t = l[r] = a[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(u, f) {
      ~r && l[r].m(u, f), K(u, n, f), o = !0, i || (s = Ke(
        sm,
        "resize",
        /*resnap*/
        e[38]
      ), i = !0);
    },
    p(u, f) {
      let _ = r;
      r = c(u), r === _ ? ~r && l[r].p(u, f) : (t && (dr(), re(l[_], 1, 1, () => {
        l[_] = null;
      }), _r()), ~r ? (t = l[r], t ? t.p(u, f) : (t = l[r] = a[r](u), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(u) {
      o || (W(t), o = !0);
    },
    o(u) {
      re(t), o = !1;
    },
    d(u) {
      u && q(n), ~r && l[r].d(u), i = !1, s();
    }
  };
}
const fs = {
  wrap_content: "content",
  fixed: "fixed",
  match_parent: "parent"
}, yo = 2, _m = 400, pm = 8;
function nu(e, r) {
  var n, o, i, s;
  if (e === "horizontal") {
    const a = ((n = r.height) == null ? void 0 : n.type) || "";
    return {
      height: a in fs ? fs[a] : "content",
      "height-constrained": ((o = r.height) == null ? void 0 : o.type) === "wrap_content" ? fn(r.height.constrained, !1) : !1
    };
  }
  const t = ((i = r.width) == null ? void 0 : i.type) || "";
  return {
    width: t in fs ? fs[t] : "parent",
    "width-constrained": ((s = r.width) == null ? void 0 : s.type) === "wrap_content" ? fn(r.width.constrained, !1) : !1
  };
}
function gm(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, ee, ce, T, X = C, le = () => (X(), X = S(u, (v) => t(60, T = v)), u), E, D = C, P = () => (D(), D = S(i, (v) => t(61, E = v)), i), U, Z = C, be = () => (Z(), Z = S(f, (v) => t(62, U = v)), f), Ae, Ee = C, _e = () => (Ee(), Ee = S(l, (v) => t(63, Ae = v)), l), Ie, $ = C, tt = () => ($(), $ = S(a, (v) => t(64, Ie = v)), a), Xe, qe = C, ve = () => (qe(), qe = S(s, (v) => t(65, Xe = v)), s), De, ue = C, ke = () => (ue(), ue = S(Se, (v) => t(66, De = v)), Se), de, x = C, fe = () => (x(), x = S(o, (v) => t(67, de = v)), o), ie, Fe = C, Ye = () => (Fe(), Fe = S(_, (v) => t(68, ie = v)), _), Ze, te = C, He = () => (te(), te = S(c, (v) => t(24, Ze = v)), c);
  e.$$.on_destroy.push(() => X()), e.$$.on_destroy.push(() => D()), e.$$.on_destroy.push(() => Z()), e.$$.on_destroy.push(() => Ee()), e.$$.on_destroy.push(() => $()), e.$$.on_destroy.push(() => qe()), e.$$.on_destroy.push(() => ue()), e.$$.on_destroy.push(() => x()), e.$$.on_destroy.push(() => Fe()), e.$$.on_destroy.push(() => te());
  let { componentContext: Be } = r, { layoutParams: it = void 0 } = r;
  const st = Tr(Zr), lt = st.direction;
  yn(e, lt, (v) => t(6, ee = v));
  const kt = st.genId("pager"), nt = st.getCustomization("pagerLeftClass"), Nt = st.getCustomization("pagerRightClass"), ut = st.isDesktop;
  yn(e, ut, (v) => t(59, ce = v));
  let pe, ge, _t = !1, Se, F = 0, Ct = 0, ft = !1, St = "horizontal", Tt = "0em", $e = {}, Y = "", At = "", Mt = "", Qt = {}, Jt = "start", he = "center", Le = [], pt = 0, ye = [], xe = {}, Oe = {}, er, ze, yt = 0, Ft = !1, It = !1, cr = !1, Pe = !1, vt = 0, nr = "", $t = 0, Xt;
  function pr() {
    t(43, $e = {}), t(9, Qt = {}), t(47, Jt = "start"), t(48, he = "center"), t(52, Ft = !1), t(53, It = !1), Pe = !1;
  }
  function kr(v) {
    t(0, Be = t(51, er = {
      ...Be,
      json: {
        ...Be.json,
        items: v.filter(zo)
      }
    }));
  }
  function Pt(v, oe) {
    ze && ze.update({
      instId: kt,
      currentItem: Oe[oe],
      size: v,
      scrollToPagerItem(d) {
        Ut(xe[d]);
      }
    });
  }
  function yr(v) {
    var d;
    if (v === Ct || (Ct = v, !Le[v]))
      return;
    const oe = (d = Le[v].json) == null ? void 0 : d.selected_actions;
    oe != null && oe.length && Be.execAnyActions(oe);
  }
  function G(v) {
    const oe = It ? !1 : v === 0, d = It ? !1 : v === ye.length - 1, z = St === "horizontal", Te = ge.children[v + (It ? yo : 0)];
    if (!Te)
      return 0;
    const We = z ? "offsetLeft" : "offsetTop", we = z ? "offsetWidth" : "offsetHeight", O = rt(), Dt = Gr(), zt = tr(), Ue = Et();
    return O >= Ue + Dt + zt || oe ? 0 : d ? (O - Dt - zt - Ue) * (ee === "rtl" ? -1 : 1) : he === "start" && ee === "ltr" || he === "end" && ee === "rtl" ? -(Te[We] - Dt) : he === "end" && ee === "ltr" || he === "start" && ee === "rtl" ? -(Te[We] + Te[we] - O + zt) : ge[we] / 2 - (Te[We] + Te[we] / 2);
  }
  function dt(v, oe) {
    if (!ge)
      return;
    const d = G(v);
    t(54, cr = oe), Sn().then(() => {
      var z;
      vt = d, t(55, nr = jt(vt)), t(40, F = (z = xe[v]) != null ? z : 0), Pe = It && (v < 0 || v >= pt);
    });
  }
  function Ut(v, oe = !0) {
    var d;
    dt((d = Oe[v]) != null ? d : 0, oe);
  }
  function jt(v) {
    return `${St === "horizontal" ? "translateX" : "translateY"}(${on(v)})`;
  }
  function wr(v, oe) {
    return It && v >= -yo && v < pt + yo ? v : v > ye.length - 1 ? oe === "ring" ? Vo(v, ye.length) : ye.length - 1 : v < 0 ? oe === "ring" ? Vo(v, ye.length) : 0 : v;
  }
  function Sr(v, oe, d) {
    const z = wr(Oe[F] - v, oe);
    dt(z, d);
  }
  function hr(v, oe, d) {
    const z = wr(Oe[F] + v, oe);
    dt(z, d);
  }
  function Ir() {
    ze == null || ze.destroy(), ze = void 0, pe && (st.unregisterInstance(pe), pe = void 0), Be.fakeElement || (ze = Be.registerPager(Be.id || void 0)), Be.id && !Be.fakeElement && (pe = Be.id, st.registerInstance(
      pe,
      {
        setCurrentItem(v, oe) {
          if (v < 0 || v > Le.length - 1)
            throw new Error('Item is out of range in "set-current-item" action');
          Ut(v, oe);
        },
        setPreviousItem: Sr,
        setNextItem: hr,
        scrollToStart(v) {
          Ut(ye[It ? yo : 0].index, v);
        },
        scrollToEnd(v) {
          Ut(ye[ye.length - 1 - (It ? yo : 0)].index, v);
        },
        scrollCombined({ step: v, overflow: oe, animated: d }) {
          v && Ut(wr(Oe[F] + v, oe || "clamp"), d);
        }
      },
      "warn"
    ));
  }
  function Gr() {
    var oe, d, z;
    return St === "horizontal" ? (d = (oe = $e.start) != null ? oe : ee === "ltr" ? $e.left : $e.right) != null ? d : 0 : (z = $e.top) != null ? z : 0;
  }
  function tr() {
    var oe, d, z;
    return St === "horizontal" ? (d = (oe = $e.end) != null ? oe : ee === "ltr" ? $e.right : $e.left) != null ? d : 0 : (z = $e.bottom) != null ? z : 0;
  }
  function rt() {
    var oe, d;
    return ge ? St === "horizontal" ? ((oe = ge.parentElement) == null ? void 0 : oe.offsetWidth) || 0 : ((d = ge.parentElement) == null ? void 0 : d.offsetHeight) || 0 : 0;
  }
  function Et() {
    const v = St === "horizontal", oe = Array.from(ge.children), d = oe[0].getBoundingClientRect(), z = oe[oe.length - 1].getBoundingClientRect();
    return v ? ee === "rtl" ? d.right - z.left : z.right - d.left : z.bottom - d.top;
  }
  function Zt(v) {
    const oe = v.target;
    if (!(oe instanceof Element) || !ge)
      return;
    let d = oe;
    for (; d.parentElement && d.parentElement !== ge; )
      d = d.parentElement;
    if (!d)
      return;
    const z = Array.from(ge.children).indexOf(d);
    if (z < 0)
      return;
    const Te = z - (It ? yo : 0);
    dt(Te, !0);
  }
  function Yt(v) {
    Date.now() - $t < 300 && (v.preventDefault(), v.stopImmediatePropagation());
  }
  function ur(v) {
    if (!st.pagerMouseDragEnabled && v.pointerType === "mouse")
      return;
    const oe = St === "horizontal", d = oe ? v.pageX : v.pageY, z = vt, Te = rt() - Gr() - tr(), We = Et(), we = Date.now(), O = (zt) => {
      const Ue = oe ? zt.pageX : zt.pageY;
      let ct = z + Ue - d;
      if (!It) {
        if (ee === "rtl") {
          if (ct < 0)
            ct = ct * Te / (ct + Te * 3);
          else if (ct + Te > We) {
            let Gt = ct + Te - We;
            Gt = Gt * Te / (Gt + Te * 3), ct = -Te + We + Gt;
          }
        } else if (ee === "ltr") {
          if (ct > 0)
            ct = ct * Te / (ct + Te * 3);
          else if (-ct + Te > We) {
            let Gt = -ct + Te - We;
            Gt = Gt * Te / (Gt + Te * 3), ct = Te - We - Gt;
          }
        }
      }
      vt = ct, t(55, nr = jt(vt)), zt.preventDefault();
    }, Dt = (zt) => {
      Xt == null || Xt(), Xt = void 0;
      const Ue = Math.min(512, Te), ct = Math.abs(z - vt);
      if (ct < pm) {
        dt(Oe[F], !0);
        return;
      }
      zt.preventDefault(), $t = Date.now();
      const Gt = Math.min(1, (Date.now() - we) / 750);
      let Fr = Oe[F];
      ct > Ue / 4 * Gt && (Fr += (z > vt ? 1 : -1) * (ee === "rtl" ? -1 : 1)), It || (Fr >= ye.length ? Fr = ye.length - 1 : Fr < 0 && (Fr = 0)), dt(Fr, !0);
    };
    window.addEventListener("pointermove", O), window.addEventListener("pointerup", Dt), window.addEventListener("pointercancel", Dt), Xt == null || Xt(), Xt = () => {
      window.removeEventListener("pointermove", O), window.removeEventListener("pointerup", Dt), window.removeEventListener("pointercancel", Dt);
    };
  }
  function at(v) {
    if (!v.deltaX || Math.abs(v.deltaX) < Math.abs(v.deltaY))
      return;
    const oe = Date.now();
    if (oe - yt < _m)
      return;
    yt = oe, (ee === "rtl" ? -1 : 1) * v.deltaX > 0 ? hr(1, "clamp", !0) : Sr(1, "clamp", !0);
  }
  function ne() {
    t(54, cr = !1), Pe && Sn().then(() => {
      Ut(F, !1);
    });
  }
  function mt() {
    Sn().then(() => {
      Ut(F, !1);
    });
  }
  ro(() => {
    t(39, _t = !0), ge && Ut(F, !1);
  }), ln(() => {
    t(39, _t = !1), Xt == null || Xt(), Le.forEach((v) => {
      v.destroy();
    }), pe && (st.unregisterInstance(pe), pe = void 0), ze == null || ze.destroy(), ze = void 0;
  });
  function rr(v) {
    Dr[v ? "unshift" : "push"](() => {
      ge = v, t(7, ge);
    });
  }
  const mr = () => (ee === "ltr" ? Sr : hr)(1, "clamp", !0), ir = () => (ee === "ltr" ? hr : Sr)(1, "clamp", !0);
  return e.$$set = (v) => {
    "componentContext" in v && t(0, Be = v.componentContext), "layoutParams" in v && t(1, it = v.layoutParams);
  }, e.$$.update = () => {
    var v, oe, d, z, Te;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(58, n = Be.origJson), e.$$.dirty[1] & /*origJson*/
    134217728 && n && pr(), e.$$.dirty[0] & /*componentContext*/
    1 && fe(t(23, o = typeof ((v = Be.json.item_builder) == null ? void 0 : v.data) == "string" ? Be.getDerivedFromVars((oe = Be.json.item_builder) == null ? void 0 : oe.data, void 0, !0) : (d = Be.json.item_builder) != null && d.data ? Uo(Be.json.item_builder.data) : void 0)), e.$$.dirty[0] & /*componentContext*/
    1 && P(t(22, i = Be.getDerivedFromVars(Be.json.layout_mode))), e.$$.dirty[0] & /*componentContext*/
    1 && ve(t(21, s = Be.getDerivedFromVars(Be.json.orientation))), e.$$.dirty[0] & /*componentContext*/
    1 && tt(t(20, a = Be.getDerivedFromVars(Be.json.item_spacing))), e.$$.dirty[0] & /*componentContext*/
    1 && _e(t(19, l = Be.getDerivedFromVars(Be.json.paddings))), e.$$.dirty[0] & /*componentContext*/
    1 && He(t(18, c = Be.getDerivedFromVars(Be.json.restrict_parent_scroll))), e.$$.dirty[0] & /*componentContext*/
    1 && le(t(17, u = Be.getDerivedFromVars(Be.json.cross_axis_alignment))), e.$$.dirty[0] & /*componentContext*/
    1 && be(t(16, f = Be.getDerivedFromVars(Be.json.scroll_axis_alignment))), e.$$.dirty[0] & /*componentContext*/
    1 && Ye(t(15, _ = Be.getDerivedFromVars(Be.json.infinite_scroll))), e.$$.dirty[1] & /*infinite*/
    2097152 | e.$$.dirty[2] & /*$jsonInfiniteScroll*/
    64 && t(52, Ft = fn(ie, Ft)), e.$$.dirty[0] & /*componentContext, items*/
    9 | e.$$.dirty[1] & /*prevContext*/
    1048576 | e.$$.dirty[2] & /*$jsonItemBuilderData*/
    32) {
      let We = [];
      if (Be.json.item_builder && Array.isArray(de) && Array.isArray(Be.json.item_builder.prototypes)) {
        const zt = Be.json.item_builder;
        We = fl(de, st, Be, zt);
      } else
        We = (Array.isArray(Be.json.items) && Be.json.items || []).map((zt, Ue) => ({
          div: zt,
          key: zt.id || { index: Ue, data: zt }
        }));
      const we = new Set(Le), O = /* @__PURE__ */ new Map();
      let Dt = !1;
      er === Be && Le.forEach((zt) => {
        zt.key && (typeof zt.key == "string" && O.has(zt.key) ? Dt || (Dt = !0, Be.logError(J(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: zt.key } }))) : O.set(
          typeof zt.key == "string" ? zt.key : zt.key.index,
          zt
        ));
      }), t(3, Le = We.map((zt, Ue) => {
        let ct = !Dt && O.get(zt.id), Gt = O.get(Ue);
        return !ct && !zt.id && typeof zt.key == "object" && typeof (Gt == null ? void 0 : Gt.key) == "object" && Ui(Gt.key.data, zt.key.data) && (ct = Gt), ct ? (we.delete(ct), ct) : Be.produceChildContext(zt.div, {
          path: Ue,
          variables: zt.vars,
          id: zt.id,
          key: zt.key
        });
      }));
      for (const zt of we)
        zt.destroy();
      t(51, er = Be);
    }
    if (e.$$.dirty[0] & /*items, componentContext*/
    9) {
      let We = [];
      Le.forEach((we) => {
        We.push(Be.getDerivedFromVars({
          width: we.json.width,
          height: we.json.height,
          visibility: we.json.visibility
        }));
      }), ke(t(8, Se = Wi(We, (we) => [...we])));
    }
    if (e.$$.dirty[0] & /*items, visibleItems*/
    24 | e.$$.dirty[1] & /*infinite*/
    2097152 | e.$$.dirty[2] & /*$childStore*/
    16) {
      if (t(50, Oe = {}), xe = {}, t(4, ye = De.map((We, we) => ({
        width: We.width,
        height: We.height,
        index: we,
        componentContext: Le[we]
      })).filter((We, we) => De[we].visibility !== "gone")), ye.forEach((We, we) => {
        xe[we] = We.index, t(50, Oe[We.index] = we, Oe);
      }), t(49, pt = ye.length), Ft && ye.length >= yo) {
        const We = ye.slice(0, yo).map((O) => ({
          ...O,
          componentContext: O.componentContext.dup(ei),
          duplicate: !0
        })), we = ye.slice(ye.length - yo).map((O) => ({
          ...O,
          componentContext: O.componentContext.dup(ei),
          duplicate: !0
        }));
        We.forEach((O, Dt) => {
          xe[ye.length + Dt] = Dt;
        }), we.forEach((O, Dt) => {
          xe[Dt - yo] = ye.length - yo + Dt;
        }), t(4, ye = [].concat(we, ye, We)), t(53, It = !0);
      } else
        t(53, It = !1);
      mt();
    }
    if (e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*$jsonLayoutMode*/
    1073741824 && (E ? E.type !== "percentage" && E.type !== "fixed" && E.type !== "wrap_content" ? (t(41, ft = !0), Be.logError(J(new Error('Incorrect value of "layout_mode.type" for div "pager"')))) : t(41, ft = !1) : (t(41, ft = !0), Be.logError(J(new Error('Empty "layout_mode" prop for div "pager"'))))), e.$$.dirty[0] & /*orientation*/
    4 | e.$$.dirty[2] & /*$jsonOrientation*/
    8 && t(2, St = _a(Xe, St)), e.$$.dirty[2] & /*$jsonItemSpacing*/
    4) {
      const We = Ie == null ? void 0 : Ie.value;
      We && Mn(We) && t(42, Tt = on(We || 0));
    }
    if (e.$$.dirty[0] & /*$direction*/
    64 | e.$$.dirty[1] & /*paddingObj*/
    4096 | e.$$.dirty[2] & /*$jsonPaddings*/
    2 && (t(43, $e = gi(Ae, $e)), t(44, Y = po($e, ee))), e.$$.dirty[0] & /*orientation*/
    4 && t(57, h = St === "horizontal" ? "grid-auto-columns" : "grid-auto-rows"), e.$$.dirty[0] & /*orientation*/
    4 && t(56, m = St === "horizontal" ? "grid-template-columns" : "grid-template-rows"), e.$$.dirty[2] & /*$jsonScrollAxisAlignment*/
    1 && (U === "start" || U === "center" || U === "end") && (t(48, he = U), mt()), e.$$.dirty[0] & /*orientation, $direction, visibleItems*/
    84 | e.$$.dirty[1] & /*paddingObj, $jsonLayoutMode, scrollAxisAlignment, itemSpacing*/
    1073879040) {
      const We = on(St === "horizontal" ? ($e == null ? void 0 : $e.start) || (ee === "ltr" ? $e == null ? void 0 : $e.left : $e == null ? void 0 : $e.right) || 0 : ($e == null ? void 0 : $e.top) || 0), we = on(St === "horizontal" ? ($e == null ? void 0 : $e.end) || (ee === "ltr" ? $e == null ? void 0 : $e.right : $e == null ? void 0 : $e.left) || 0 : ($e == null ? void 0 : $e.bottom) || 0);
      if ((E == null ? void 0 : E.type) === "fixed") {
        const O = ((z = E.neighbour_page_width) == null ? void 0 : z.value) || 0;
        he === "center" ? t(45, At = `calc(100% + ${We} + ${we} - 2 * ${on(O)} - 2 * ${Tt})`) : he === "start" ? t(45, At = `calc(100% + ${we} - ${on(O)} - ${Tt})`) : t(45, At = `calc(100% + ${We} - ${on(O)} - ${Tt})`), t(46, Mt = "");
      } else if ((E == null ? void 0 : E.type) === "percentage") {
        let O = (Te = E.page_width) == null ? void 0 : Te.value;
        (typeof O != "number" || O < 0) && (O = 100), t(45, At = `calc(${(O / 100).toFixed(2)} * (100% + ${We} + ${we}))`), t(46, Mt = "");
      } else (E == null ? void 0 : E.type) === "wrap_content" && (t(45, At = ""), t(46, Mt = ye.map((O) => {
        var Ue, ct;
        const Dt = O[St === "horizontal" ? "width" : "height"];
        if ((Dt == null ? void 0 : Dt.type) === "fixed" || (Dt == null ? void 0 : Dt.type) === "wrap_content")
          return "minmax(max-content, auto)";
        let zt = "100%";
        return (Dt == null ? void 0 : Dt.type) === "match_parent" && (Mn((Ue = Dt.max_size) == null ? void 0 : Ue.value) && (zt = `min(${zt}, ${on(Dt.max_size.value)})`), Mn((ct = Dt.min_size) == null ? void 0 : ct.value) && (zt = `max(${zt}, ${on(Dt.min_size.value)})`)), zt;
      }).join(" ")));
    }
    if (e.$$.dirty[0] & /*orientation*/
    4 | e.$$.dirty[1] & /*$jsonCrossAxisAlignment, crossAxisAlignment*/
    536936448 && (T === "start" || T === "center" || T === "end") && (t(47, Jt = T), t(9, Qt = {
      [St === "horizontal" ? "parentVAlign" : "parentHAlign"]: Jt
    })), e.$$.dirty[1] & /*itemSpacing, padding, gridAutoSizeProp, autoSizeVal, gridTemplateSizeProp, templateSizeVal, transformStr*/
    117499904 && t(14, p = {
      "grid-gap": Tt,
      padding: Y,
      [h]: At,
      [m]: Mt,
      transform: nr
    }), e.$$.dirty[0] & /*orientation*/
    4 | e.$$.dirty[1] & /*animated, crossAxisAlignment, scrollAxisAlignment*/
    8585216 && t(13, w = {
      animated: cr,
      clip: st.pagerChildrenClipEnabled,
      orientation: St,
      "cross-align": Jt,
      "scroll-align": he
    }), e.$$.dirty[1] & /*hasLayoutModeError*/
    1024 && t(5, k = ft), e.$$.dirty[0] & /*hasError*/
    32 | e.$$.dirty[1] & /*$isDesktop, mounted*/
    268435712 && t(12, N = ce && _t && !k), e.$$.dirty[0] & /*componentContext, items*/
    9 && Be.json) {
      const We = Be.getJsonWithVars(Be.json.default_item);
      typeof We == "number" && We >= 0 && We < Le.length && (t(40, F = Ct = We), Pt(Le.length, We)), Ir();
    }
    e.$$.dirty[0] & /*$direction, visibleItems*/
    80 | e.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && t(11, R = It || (ee === "ltr" ? Oe[F] > 0 : Oe[F] + 1 < ye.length)), e.$$.dirty[0] & /*$direction, visibleItems*/
    80 | e.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && t(10, L = It || (ee === "ltr" ? Oe[F] + 1 < ye.length : Oe[F] > 0)), e.$$.dirty[1] & /*visibleItemsWithOutDuplicates, currentItem*/
    262656 && Pt(pt, F), e.$$.dirty[1] & /*currentItem*/
    512 && yr(F);
  }, [
    Be,
    it,
    St,
    Le,
    ye,
    k,
    ee,
    ge,
    Se,
    Qt,
    L,
    R,
    N,
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
    Ze,
    lt,
    kt,
    nt,
    Nt,
    ut,
    kr,
    Sr,
    hr,
    Zt,
    Yt,
    ur,
    at,
    ne,
    mt,
    _t,
    F,
    ft,
    Tt,
    $e,
    Y,
    At,
    Mt,
    Jt,
    he,
    pt,
    Oe,
    er,
    Ft,
    It,
    cr,
    nr,
    m,
    h,
    n,
    ce,
    T,
    E,
    U,
    Ae,
    Ie,
    Xe,
    De,
    de,
    ie,
    rr,
    mr,
    ir
  ];
}
class hm extends Br {
  constructor(r) {
    super(), Or(this, r, gm, dm, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const mm = "appkit-indicator", bm = "appkit-indicator_visible", ym = "appkit-indicator__scroller", wm = "appkit-indicator__items", km = "appkit-indicator__item", vm = "appkit-indicator_placement_default", jm = "appkit-indicator__item_active", Cm = "appkit-indicator_direction_ltr", Em = "appkit-indicator_direction_rtl", Am = "appkit-indicator_placement_stretch", bi = {
  indicator: mm,
  indicator_visible: bm,
  indicator__scroller: ym,
  indicator__items: wm,
  indicator__item: km,
  indicator_placement_default: vm,
  indicator__item_active: jm,
  indicator_direction_ltr: Cm,
  indicator_direction_rtl: Em,
  indicator_placement_stretch: Am
};
function ou(e, r, t) {
  const n = e.slice();
  n[43] = r[t], n[46] = t;
  const o = (
    /*index*/
    n[46] === /*pagerData*/
    n[8].currentItem
  );
  return n[44] = o, n;
}
function iu(e) {
  let r, t = or(Array(
    /*pagerData*/
    e[8].size
  )), n = [];
  for (let o = 0; o < t.length; o += 1)
    n[o] = su(ou(e, t, o));
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      r = xt();
    },
    m(o, i) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(o, i);
      K(o, r, i);
    },
    p(o, i) {
      if (i[0] & /*pagerData, onIndicatorItemClick, onIndicatorItemKeydown*/
      6291712) {
        t = or(Array(
          /*pagerData*/
          o[8].size
        ));
        let s;
        for (s = 0; s < t.length; s += 1) {
          const a = ou(o, t, s);
          n[s] ? n[s].p(a, i) : (n[s] = su(a), n[s].c(), n[s].m(r.parentNode, r));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(o) {
      o && q(r), sn(n, o);
    }
  };
}
function su(e) {
  let r, t, n, o, i, s, a, l;
  function c() {
    return (
      /*click_handler*/
      e[34](
        /*index*/
        e[46]
      )
    );
  }
  return {
    c() {
      r = Me("div"), g(r, "class", t = bt("indicator__item", bi, { active: (
        /*isActiveItem*/
        e[44]
      ) }) + " " + jr.root__clickable), g(r, "role", "tab"), g(r, "id", n = /*pagerData*/
      e[8].instId + "-tab-" + /*index*/
      e[46]), g(r, "aria-controls", o = /*pagerData*/
      e[8].instId + "-panel-" + /*index*/
      e[46]), g(r, "aria-selected", i = /*isActiveItem*/
      e[44] ? "true" : "false"), g(r, "tabindex", s = /*isActiveItem*/
      e[44] ? 0 : -1);
    },
    m(u, f) {
      K(u, r, f), a || (l = [
        Ke(r, "click", c),
        Ke(
          r,
          "keydown",
          /*onIndicatorItemKeydown*/
          e[22]
        )
      ], a = !0);
    },
    p(u, f) {
      e = u, f[0] & /*pagerData*/
      256 && t !== (t = bt("indicator__item", bi, { active: (
        /*isActiveItem*/
        e[44]
      ) }) + " " + jr.root__clickable) && g(r, "class", t), f[0] & /*pagerData*/
      256 && n !== (n = /*pagerData*/
      e[8].instId + "-tab-" + /*index*/
      e[46]) && g(r, "id", n), f[0] & /*pagerData*/
      256 && o !== (o = /*pagerData*/
      e[8].instId + "-panel-" + /*index*/
      e[46]) && g(r, "aria-controls", o), f[0] & /*pagerData*/
      256 && i !== (i = /*isActiveItem*/
      e[44] ? "true" : "false") && g(r, "aria-selected", i), f[0] & /*pagerData*/
      256 && s !== (s = /*isActiveItem*/
      e[44] ? 0 : -1) && g(r, "tabindex", s);
    },
    d(u) {
      u && q(r), a = !1, Ur(l);
    }
  };
}
function Sm(e) {
  let r, t, n = (
    /*pagerData*/
    e[8] && iu(e)
  );
  return {
    c() {
      r = Me("div"), t = Me("div"), n && n.c(), g(t, "class", bi.indicator__items), g(t, "role", "tablist"), I(
        t,
        "margin",
        /*placement*/
        e[4] === "default" ? `0 ${ae(Math.max(
          0,
          /*activeStyle*/
          e[2].width - /*inactiveStyle*/
          e[3].width
        ) / 2)}` : ""
      ), I(t, "--divkit-indicator-inactive-width", ae(
        /*inactiveStyle*/
        e[3].width
      )), I(t, "--divkit-indicator-inactive-height", ae(
        /*inactiveStyle*/
        e[3].height
      )), I(t, "--divkit-indicator-inactive-border-radius", ae(
        /*inactiveStyle*/
        e[3].borderRadius
      )), I(
        t,
        "--divkit-indicator-inactive-background",
        /*inactiveStyle*/
        e[3].background || ""
      ), I(
        t,
        "--divkit-indicator-inactive-box-shadow",
        /*inactiveStyle*/
        e[3].boxShadow || ""
      ), I(t, "--divkit-indicator-active-width", ae(
        /*activeStyle*/
        e[2].width
      )), I(t, "--divkit-indicator-active-height", ae(
        /*activeStyle*/
        e[2].height
      )), I(t, "--divkit-indicator-active-border-radius", ae(
        /*activeStyle*/
        e[2].borderRadius
      )), I(
        t,
        "--divkit-indicator-active-background",
        /*activeStyle*/
        e[2].background || ""
      ), I(
        t,
        "--divkit-indicator-active-box-shadow",
        /*activeStyle*/
        e[2].boxShadow || ""
      ), I(
        t,
        "--divkit-indicator-active-scale",
        /*activeStyle*/
        e[2].width / /*inactiveStyle*/
        e[3].width
      ), I(
        t,
        "--divkit-indicator-default-margin",
        /*placement*/
        e[4] === "default" ? `0 ${ae(
          /*spaceBetweenCenters*/
          (e[5] - /*inactiveStyle*/
          e[3].width) / 2
        )}` : ""
      ), I(
        t,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        e[4] === "stretch" ? ae(
          /*itemSpacing*/
          e[7]
        ) : ""
      ), I(
        t,
        "--divkit-indicator-stretch-max-count",
        /*placement*/
        e[4] === "stretch" ? (
          /*maxVisibleItems*/
          e[6]
        ) : ""
      ), I(
        t,
        "--divkit-indicator-stretch-max-spacer",
        /*placement*/
        e[4] === "stretch" ? ae(
          /*maxVisibleItems*/
          (e[6] - 1) * /*itemSpacing*/
          e[7]
        ) : ""
      ), g(r, "class", bi.indicator__scroller);
    },
    m(o, i) {
      K(o, r, i), wt(r, t), n && n.m(t, null), e[35](t), e[36](r);
    },
    p(o, i) {
      /*pagerData*/
      o[8] ? n ? n.p(o, i) : (n = iu(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null), i[0] & /*placement, activeStyle, inactiveStyle*/
      28 && I(
        t,
        "margin",
        /*placement*/
        o[4] === "default" ? `0 ${ae(Math.max(
          0,
          /*activeStyle*/
          o[2].width - /*inactiveStyle*/
          o[3].width
        ) / 2)}` : ""
      ), i[0] & /*inactiveStyle*/
      8 && I(t, "--divkit-indicator-inactive-width", ae(
        /*inactiveStyle*/
        o[3].width
      )), i[0] & /*inactiveStyle*/
      8 && I(t, "--divkit-indicator-inactive-height", ae(
        /*inactiveStyle*/
        o[3].height
      )), i[0] & /*inactiveStyle*/
      8 && I(t, "--divkit-indicator-inactive-border-radius", ae(
        /*inactiveStyle*/
        o[3].borderRadius
      )), i[0] & /*inactiveStyle*/
      8 && I(
        t,
        "--divkit-indicator-inactive-background",
        /*inactiveStyle*/
        o[3].background || ""
      ), i[0] & /*inactiveStyle*/
      8 && I(
        t,
        "--divkit-indicator-inactive-box-shadow",
        /*inactiveStyle*/
        o[3].boxShadow || ""
      ), i[0] & /*activeStyle*/
      4 && I(t, "--divkit-indicator-active-width", ae(
        /*activeStyle*/
        o[2].width
      )), i[0] & /*activeStyle*/
      4 && I(t, "--divkit-indicator-active-height", ae(
        /*activeStyle*/
        o[2].height
      )), i[0] & /*activeStyle*/
      4 && I(t, "--divkit-indicator-active-border-radius", ae(
        /*activeStyle*/
        o[2].borderRadius
      )), i[0] & /*activeStyle*/
      4 && I(
        t,
        "--divkit-indicator-active-background",
        /*activeStyle*/
        o[2].background || ""
      ), i[0] & /*activeStyle*/
      4 && I(
        t,
        "--divkit-indicator-active-box-shadow",
        /*activeStyle*/
        o[2].boxShadow || ""
      ), i[0] & /*activeStyle, inactiveStyle*/
      12 && I(
        t,
        "--divkit-indicator-active-scale",
        /*activeStyle*/
        o[2].width / /*inactiveStyle*/
        o[3].width
      ), i[0] & /*placement, spaceBetweenCenters, inactiveStyle*/
      56 && I(
        t,
        "--divkit-indicator-default-margin",
        /*placement*/
        o[4] === "default" ? `0 ${ae(
          /*spaceBetweenCenters*/
          (o[5] - /*inactiveStyle*/
          o[3].width) / 2
        )}` : ""
      ), i[0] & /*placement, itemSpacing*/
      144 && I(
        t,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        o[4] === "stretch" ? ae(
          /*itemSpacing*/
          o[7]
        ) : ""
      ), i[0] & /*placement, maxVisibleItems*/
      80 && I(
        t,
        "--divkit-indicator-stretch-max-count",
        /*placement*/
        o[4] === "stretch" ? (
          /*maxVisibleItems*/
          o[6]
        ) : ""
      ), i[0] & /*placement, maxVisibleItems, itemSpacing*/
      208 && I(
        t,
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
      o && q(r), n && n.d(), e[35](null), e[36](null);
    }
  };
}
function Vm(e) {
  let r, t;
  return r = new wn({
    props: {
      cls: bt(
        "indicator",
        bi,
        /*mods*/
        e[11]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: { default: [Sm] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = bt(
        "indicator",
        bi,
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
const Vl = ["rounded_rectangle", "circle"];
function Fm(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p = C, w = () => (p(), p = S(u, (ge) => t(26, m = ge)), u), k, N = C, R = () => (N(), N = S(f, (ge) => t(27, k = ge)), f), L, ee = C, ce = () => (ee(), ee = S(i, (ge) => t(28, L = ge)), i), T, X = C, le = () => (X(), X = S(s, (ge) => t(29, T = ge)), s), E, D = C, P = () => (D(), D = S(o, (ge) => t(30, E = ge)), o), U, Z = C, be = () => (Z(), Z = S(a, (ge) => t(31, U = ge)), a), Ae, Ee = C, _e = () => (Ee(), Ee = S(c, (ge) => t(32, Ae = ge)), c), Ie, $ = C, tt = () => ($(), $ = S(l, (ge) => t(33, Ie = ge)), l);
  e.$$.on_destroy.push(() => p()), e.$$.on_destroy.push(() => N()), e.$$.on_destroy.push(() => ee()), e.$$.on_destroy.push(() => X()), e.$$.on_destroy.push(() => D()), e.$$.on_destroy.push(() => Z()), e.$$.on_destroy.push(() => Ee()), e.$$.on_destroy.push(() => $());
  let { componentContext: Xe } = r, { layoutParams: qe = void 0 } = r;
  const De = Tr(Zr).direction;
  yn(e, De, (ge) => t(25, h = ge));
  let ue = {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    background: "#ffdc60"
  }, ke = {
    width: 10,
    height: 10,
    borderRadius: 5,
    background: "#33919cb5"
  }, de = "default", x = 15, fe = 10, ie = 5, Fe, Ye, Ze, te, He = !1;
  function Be() {
    t(4, de = "default"), t(5, x = 15), t(6, fe = 10), t(7, ie = 5), t(2, ue = {
      width: 13,
      height: 13,
      borderRadius: 6.5,
      background: "#ffdc60"
    }), t(3, ke = {
      width: 10,
      height: 10,
      borderRadius: 5,
      background: "#33919cb5"
    });
  }
  async function it(ge) {
    if (t(8, Ze = ge), await Sn(), Ye) {
      const _t = Ye.children[Ze.currentItem];
      if (_t) {
        const Se = _t.offsetLeft;
        Fe.scroll({
          left: Se - Fe.clientWidth / 2,
          behavior: "smooth"
        });
      }
    }
  }
  function st(ge) {
    ge !== Ze.currentItem && Ze.scrollToPagerItem(ge);
  }
  function lt(ge) {
    if (ge.ctrlKey || ge.shiftKey || ge.altKey || ge.metaKey)
      return;
    const { size: _t, currentItem: Se } = Ze;
    if (ge.which === yd) {
      const F = Se - 1 < 0 ? Se : Se - 1;
      kt(F);
    } else if (ge.which === wd) {
      const F = Se + 1 >= _t ? Se : Se + 1;
      kt(F);
    } else if (ge.which === kd)
      kt(0);
    else if (ge.which === vd)
      kt(_t - 1);
    else
      return;
    ge.preventDefault();
  }
  async function kt(ge) {
    Ze.scrollToPagerItem(ge), await Sn();
    const _t = Ye.querySelector(`.${bi.indicator__item_active}`);
    _t && _t.focus();
  }
  function nt() {
    te == null || te(), te = void 0;
    const ge = Xe.json.pager_id;
    te = Xe.listenPager(ge, it);
  }
  ro(() => {
    t(23, He = !0);
  }), ln(() => {
    t(23, He = !1), te == null || te(), te = void 0;
  });
  const Nt = (ge) => st(ge);
  function ut(ge) {
    Dr[ge ? "unshift" : "push"](() => {
      Ye = ge, t(10, Ye);
    });
  }
  function pe(ge) {
    Dr[ge ? "unshift" : "push"](() => {
      Fe = ge, t(9, Fe);
    });
  }
  return e.$$set = (ge) => {
    "componentContext" in ge && t(0, Xe = ge.componentContext), "layoutParams" in ge && t(1, qe = ge.layoutParams);
  }, e.$$.update = () => {
    var ge, _t;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(24, n = Xe.origJson), e.$$.dirty[0] & /*origJson*/
    16777216 && n && Be(), e.$$.dirty[0] & /*origJson, mounted*/
    25165824 && n && He && nt(), e.$$.dirty[0] & /*componentContext*/
    1 && P(t(19, o = Xe.getDerivedFromVars(Xe.json.shape))), e.$$.dirty[0] & /*componentContext*/
    1 && ce(t(18, i = Xe.getDerivedFromVars(Xe.json.active_item_color))), e.$$.dirty[0] & /*componentContext*/
    1 && le(t(17, s = Xe.getDerivedFromVars(Xe.json.inactive_item_color))), e.$$.dirty[0] & /*componentContext*/
    1 && be(t(16, a = Xe.getDerivedFromVars(Xe.json.active_item_size))), e.$$.dirty[0] & /*componentContext*/
    1 && tt(t(15, l = Xe.getDerivedFromVars(Xe.json.active_shape))), e.$$.dirty[0] & /*componentContext*/
    1 && _e(t(14, c = Xe.getDerivedFromVars(Xe.json.inactive_shape))), e.$$.dirty[0] & /*componentContext*/
    1 && w(t(13, u = Xe.getDerivedFromVars(Xe.json.space_between_centers))), e.$$.dirty[0] & /*componentContext*/
    1 && R(t(12, f = Xe.getDerivedFromVars(Xe.json.items_placement))), e.$$.dirty[0] & /*activeStyle, inactiveStyle, $jsonShape, $jsonInactiveItemColor, $jsonActiveItemColor*/
    1879048204 | e.$$.dirty[1] & /*$jsonActiveShape, $jsonInactiveShape, $jsonActiveItemSize*/
    7 && (Ie && t(2, ue = ao(
      {
        type: "shape_drawable",
        shape: Ie
      },
      Vl,
      ue
    )), Ae && t(3, ke = ao(
      {
        type: "shape_drawable",
        shape: Ae
      },
      Vl,
      ke
    )), !Ie && !Ae && E)) {
      const Se = Un(U, 1.3);
      t(3, ke = ao(
        {
          type: "shape_drawable",
          shape: E,
          color: ke.background
        },
        Vl,
        ke
      )), t(3, ke.background = fr(T, 1, ke.background), ke), t(2, ue = {
        ...ke,
        width: ke.width * Se,
        height: ke.height * Se,
        borderRadius: ke.borderRadius * Se,
        background: ue.background
      }), t(2, ue.background = fr(L, 1, ue.background), ue);
    }
    if (e.$$.dirty[0] & /*$jsonItemsPlacement, placement, spaceBetweenCenters, maxVisibleItems, itemSpacing, $jsonSpaceBetweenCenters*/
    201326832)
      if (k && (k.type === "default" || k.type === "stretch")) {
        if (t(4, de = k.type), de === "default")
          t(5, x = $r((ge = k.space_between_centers) == null ? void 0 : ge.value, x));
        else if (de === "stretch") {
          const Se = k;
          t(6, fe = Un(Se.max_visible_items, fe)), t(7, ie = $r((_t = Se.item_spacing) == null ? void 0 : _t.value, ie));
        }
      } else
        t(4, de = "default"), m && t(5, x = $r(m.value, x));
    e.$$.dirty[0] & /*placement, $direction, pagerData*/
    33554704 && t(11, _ = {
      placement: de,
      direction: h,
      visible: (Ze == null ? void 0 : Ze.size) > 1
    });
  }, [
    Xe,
    qe,
    ue,
    ke,
    de,
    x,
    fe,
    ie,
    Ze,
    Fe,
    Ye,
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
    lt,
    He,
    n,
    h,
    m,
    k,
    L,
    T,
    E,
    U,
    Ae,
    Ie,
    Nt,
    ut,
    pe
  ];
}
class Im extends Br {
  constructor(r) {
    super(), Or(this, r, Fm, Vm, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Dm = "appkit-slider", Tm = "appkit-slider__input", Mm = "appkit-slider__input_secondary", Pm = "appkit-slider__thumb", Nm = "appkit-slider_direction_rtl", zm = "appkit-slider__thumb_secondary", Om = "appkit-slider__track", Bm = "appkit-slider__tick", Lm = "appkit-slider__tick_active", Rm = "appkit-slider__tick_inactive", Hr = {
  slider: Dm,
  slider__input: Tm,
  slider__input_secondary: Mm,
  slider__thumb: Pm,
  slider_direction_rtl: Nm,
  slider__thumb_secondary: zm,
  "slider__tracks-wrapper": "appkit-slider__tracks-wrapper",
  "slider__tracks-inner": "appkit-slider__tracks-inner",
  "slider__tracks-ranges": "appkit-slider__tracks-ranges",
  "slider__tracks-ranges_rtl": "appkit-slider__tracks-ranges_rtl",
  slider__track: Om,
  "slider__thumb-text": "appkit-slider__thumb-text",
  "slider__thumb-text_secondary": "appkit-slider__thumb-text_secondary",
  slider__tick: Bm,
  slider__tick_active: Lm,
  slider__tick_inactive: Rm
};
function lu(e, r, t) {
  var a, l;
  if (!e || !e.font_size)
    return t;
  const n = e.offset, o = e.text_color && fr(e.text_color) || "#000", i = hi(e.font_weight, e.font_weight_value, void 0), s = Oi(e.font_variation_settings) || void 0;
  if (Bn(e.font_size) && o !== "transparent") {
    const c = {
      fontSize: ae(e.font_size),
      fontWeight: i,
      fontVariationSettings: s,
      textColor: o
    };
    return typeof ((a = n == null ? void 0 : n.x) == null ? void 0 : a.value) == "number" && typeof ((l = n == null ? void 0 : n.y) == null ? void 0 : l.value) == "number" && (c.offset = {
      x: n.x.value,
      y: n.y.value
    }), e.font_family && typeof e.font_family == "string" && (c.fontFamily = r(e.font_family, {
      fontWeight: i
    }) || ""), c;
  }
}
function Fo(e, r, t) {
  return Math.max(r, Math.min(t, Number(e)));
}
function ga(e) {
  return BigInt(e);
}
const ss = ga("9223372036854775807"), ls = ga("-9223372036854775808");
function pn(e) {
  const r = ga(e);
  if (r > ss || r < ls)
    throw new Error("Integer overflow.");
  return r;
}
const yi = pn(0);
function Fd(e) {
  let r = e;
  return r < 0 && (r = -r), r;
}
function Id(e) {
  let r = 0;
  return e > 0 ? r = 1 : e < 0 && (r = -1), pn(r);
}
function oo(e, r) {
  var t;
  switch ((t = r[e.type]) == null || t.call(r, e), e.type) {
    case "TemplateLiteral":
      e.expressions.forEach((n) => {
        oo(n, r);
      });
      break;
    case "BinaryExpression":
    case "LogicalExpression":
      oo(e.left, r), oo(e.right, r);
      break;
    case "UnaryExpression":
      oo(e.argument, r);
      break;
    case "ConditionalExpression":
      oo(e.test, r), oo(e.consequent, r), oo(e.alternate, r);
      break;
    case "TryExpression":
      oo(e.test, r), oo(e.alternate, r);
      break;
    case "CallExpression":
      e.arguments.forEach((n) => {
        oo(n, r);
      });
      break;
    case "MethodExpression":
      oo(e.object, r), e.arguments.forEach((n) => {
        oo(n, r);
      });
      break;
  }
}
const Hm = 2147483647, Wm = -2147483648, Um = Number.MAX_VALUE, Gm = Number.MIN_VALUE, Re = "string", Ne = "integer", gt = "number", Wr = "boolean", dn = "color", eo = "url", Pr = "datetime", sr = "dict", lr = "array", Jm = "function";
class ha extends Error {
}
function Js(e) {
  return e.type === "url" || e.type === "color" ? {
    type: "string",
    value: e.value
  } : e;
}
function Dd(e) {
  return e.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, "");
}
function ki(e, r) {
  if (e.type === "string")
    return e.value;
  if (e.type === "integer")
    return String(e.value);
  if (e.type === "number") {
    let t = String(e.value);
    return t.includes(".") || (t.includes("e") ? t = t.replace("e", ".0e") : t += ".0"), t = t.replace(/e\+?/i, "E"), t;
  } else {
    if (e.type === "boolean")
      return e.value ? "true" : "false";
    if (e.type === "datetime")
      return Dd(e.value);
    if (e.type === "color")
      return ji(_l(e.value));
    if (e.type === "url")
      return e.value;
    if ((e.type === "dict" || e.type === "array") && r)
      return JSON.stringify(e.value);
    if (e.type === "dict")
      return "<dict>";
    if (e.type === "array")
      return "<array>";
    if (e.type === "function")
      return e.value[0].name || "Function";
  }
  throw new Error(`Unexpected type ${e.type}`);
}
function _n(e) {
  let r = ki(e, !1);
  return e.type === "string" && (r = "'" + r.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'"), r;
}
function Zn(e) {
  return e === "datetime" ? "DateTime" : e.charAt(0).toUpperCase() + e.substring(1);
}
function vi(e, r) {
  return pn(r);
}
function Pn(e, r) {
  if (r < ls || r > ss)
    throw new Error("Integer overflow.");
}
function ho(e) {
  if (typeof e != "string")
    throw new Error("Incorrect url value.");
  try {
    new URL(e);
  } catch {
    throw new Error("Incorrect url value.");
  }
}
function qm(e) {
  try {
    return ho(e), !0;
  } catch {
    return !1;
  }
}
function Ym(e) {
  const r = /* @__PURE__ */ new Set();
  return oo(e, {
    Variable(t) {
      r.add(t.id.name);
    }
  }), [...r];
}
function An(e, r) {
  throw new ha(`Failed to evaluate [${e}]. ${r}`);
}
function Km(e, r) {
  throw new Error(r);
}
function _l(e) {
  const r = _o(e);
  if (r)
    return r;
  throw new Error("Unable to convert value to Color, expected format #AARRGGBB.");
}
function ji(e) {
  return `#${[e.a, e.r, e.g, e.b].map((r) => {
    if (r < 0 || r > 255)
      throw new Error("Value out of range 0..1.");
    return cd(Math.round(r).toString(16), 2);
  }).join("").toUpperCase()}`;
}
function ti(e) {
  return ji(_l(e));
}
function Wl(e) {
  return {
    type: gt,
    value: Number(e.value)
  };
}
const Xm = {
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
function pl(e, r, t) {
  if (t === "function")
    throw new Error("Cannot convert function");
  const n = Xm[t];
  let o = typeof r;
  if (n === "array" && !Array.isArray(r) || n !== "array" && o !== n || o === "object" && r === null)
    throw o === "object" && (Array.isArray(r) ? o = "array" : r === null ? o = "null" : o = "dict"), new Error(`Incorrect value type: expected ${Zn(t)}, got ${Zn(o)}.`);
  if (n === "number" && t === "integer") {
    e && Pn(e, r);
    try {
      r = pn(r);
    } catch {
      throw new Error("Cannot convert value to integer.");
    }
  }
  return n === "string" && t === "color" && (r = ti(r)), n === "string" && t === "url" && ho(r), n === "boolean" && t === Wr && (r = r ? 1 : 0), {
    type: t,
    value: r
  };
}
function Zm(e) {
  return e.type === "number" || e.type === "integer" ? Number(e.value) : e.type === "boolean" ? !!e.value : e.value;
}
function gl(e) {
  return Zm(
    pl(void 0, e.value, e.type)
  );
}
class Jo {
  constructor(r, t) {
    Ar(this, "name");
    Ar(this, "value");
    Ar(this, "store");
    const n = this.convertValue(t);
    this.name = r, this.value = n;
  }
  getName() {
    return this.name;
  }
  subscribe(r) {
    return this.store || (this.store = Do(this.value)), this.store.subscribe(r);
  }
  set(r) {
    const t = this.fromString(r);
    this.setValue(t);
  }
  setValue(r) {
    const t = this.convertValue(r);
    this.value = t, this.store && this.store.set(t);
  }
  getValue() {
    return this.value;
  }
}
class Td extends Jo {
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
class Md extends Jo {
  convertValue(r) {
    if (typeof r != "bigint" && typeof r != "number")
      throw new Error("Incorrect variable value");
    try {
      return pn(r);
    } catch {
      throw new Error("Incorrect variable value");
    }
  }
  fromString(r) {
    try {
      return pn(r);
    } catch {
      throw new Error("Incorrect variable value");
    }
  }
  getType() {
    return "integer";
  }
}
class Pd extends Jo {
  convertValue(r) {
    if (typeof r != "number" || Number.isNaN(r) || !isFinite(r))
      throw new Error("Incorrect variable value");
    return r;
  }
  fromString(r) {
    const t = Number(r);
    return this.convertValue(t);
  }
  getType() {
    return "number";
  }
}
class Nd extends Jo {
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
class zd extends Jo {
  convertValue(r) {
    if (typeof r != "string" || !_o(r))
      throw new Error("Incorrect variable value");
    return ti(r);
  }
  fromString(r) {
    return this.convertValue(r);
  }
  getType() {
    return "color";
  }
}
class Od extends Jo {
  convertValue(r) {
    if (typeof r != "string")
      throw new Error("Incorrect variable value");
    return ho(r), r;
  }
  fromString(r) {
    return ho(r), r;
  }
  getType() {
    return "url";
  }
}
class Bd extends Jo {
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
class Ld extends Jo {
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
const Ul = {
  string: Td,
  number: Pd,
  integer: Md,
  boolean: Nd,
  color: zd,
  url: Od,
  dict: Bd,
  array: Ld
};
function so(e, r, t) {
  if (!(r in Ul))
    throw new Error("Unsupported variable type");
  return new Ul[r](e, t);
}
function Qm() {
}
function xm(e) {
  return e(this.value), Qm;
}
function au() {
  throw new Error("Cannot change the value of this type of variable");
}
class $m extends Td {
}
class e1 extends Pd {
}
class t1 extends Md {
}
class r1 extends Nd {
}
class n1 extends zd {
}
class o1 extends Od {
}
class i1 extends Bd {
}
class s1 extends Ld {
}
class l1 extends Jo {
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
const qs = {
  string: $m,
  number: e1,
  integer: t1,
  boolean: r1,
  color: n1,
  url: o1,
  dict: i1,
  array: s1,
  datetime: l1
};
for (const e in qs) {
  const r = qs[e];
  r.prototype.subscribe = xm, r.prototype.set = au, r.prototype.setValue = au;
}
function js(e, r, t) {
  if (!(r in qs))
    throw new Error("Unsupported variable type");
  return new qs[r](e, t);
}
function a1(e) {
  const r = e.getType();
  let t = e.getValue();
  return r === Wr && (t = t ? 1 : 0), {
    type: r,
    value: t
  };
}
function c1(e, r) {
  if (r === "string")
    return e;
  if (r === "integer")
    try {
      return pn(e);
    } catch {
      throw new Error("Incorrect variable value");
    }
  else if (r === "number") {
    const t = Number(e);
    if (Number.isNaN(t) || !isFinite(t))
      throw new Error("Incorrect variable value");
    return t;
  } else if (r === "boolean") {
    if (e === "1" || e === "true")
      return !0;
    if (e === "0" || e === "false")
      return !1;
    throw new Error("Incorrect variable value");
  } else if (r === "color") {
    if (typeof e != "string" || !_o(e))
      throw new Error("Incorrect variable value");
    return ti(e);
  } else if (r === "url") {
    if (typeof e != "string")
      throw new Error("Incorrect variable value");
    return ho(e), e;
  } else if (r === "dict" || r === "array")
    try {
      return JSON.parse(e);
    } catch {
      throw new Error("Incorrect dict value");
    }
  throw new Error(`Unexpected type ${r}`);
}
function cu(e, r, t) {
  const n = e.slice();
  return n[85] = r[t], n;
}
function uu(e, r, t) {
  const n = e.slice();
  return n[85] = r[t], n;
}
function fu(e, r, t) {
  const n = e.slice();
  return n[90] = r[t], n;
}
function u1(e) {
  let r, t;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function f1(e) {
  let r, t;
  return r = new wn({
    props: {
      cls: bt(
        "slider",
        Hr,
        /*mods*/
        e[24]
      ),
      style: (
        /*stl*/
        e[25]
      ),
      customDescription: !0,
      customActions: "slider",
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: {
        default: [
          d1,
          ({ focusHandler: n, blurHandler: o }) => ({ 83: n, 84: o }),
          ({ focusHandler: n, blurHandler: o }) => [0, 0, (n ? 2097152 : 0) | (o ? 4194304 : 0)]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      16777216 && (i.cls = bt(
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function du(e) {
  let r;
  return {
    c() {
      r = Me("div"), g(r, "class", Hr.slider__track), I(
        r,
        "left",
        /*range*/
        e[90].left
      ), I(
        r,
        "right",
        /*range*/
        e[90].right
      ), I(
        r,
        "height",
        /*range*/
        e[90].height
      ), I(
        r,
        "border-radius",
        /*range*/
        e[90].borderRadius
      ), I(
        r,
        "background",
        /*range*/
        e[90].background
      ), I(
        r,
        "box-shadow",
        /*range*/
        e[90].boxShadow
      );
    },
    m(t, n) {
      K(t, r, n);
    },
    p(t, n) {
      n[0] & /*renderRanges*/
      2097152 && I(
        r,
        "left",
        /*range*/
        t[90].left
      ), n[0] & /*renderRanges*/
      2097152 && I(
        r,
        "right",
        /*range*/
        t[90].right
      ), n[0] & /*renderRanges*/
      2097152 && I(
        r,
        "height",
        /*range*/
        t[90].height
      ), n[0] & /*renderRanges*/
      2097152 && I(
        r,
        "border-radius",
        /*range*/
        t[90].borderRadius
      ), n[0] & /*renderRanges*/
      2097152 && I(
        r,
        "background",
        /*range*/
        t[90].background
      ), n[0] & /*renderRanges*/
      2097152 && I(
        r,
        "box-shadow",
        /*range*/
        t[90].boxShadow
      );
    },
    d(t) {
      t && q(r);
    }
  };
}
function _u(e) {
  let r;
  return {
    c() {
      r = Me("div"), g(r, "class", Hr.slider__tick + " " + Hr.slider__tick_active), I(
        r,
        "--divkit-slider-tick",
        /*val*/
        e[85]
      );
    },
    m(t, n) {
      K(t, r, n);
    },
    p(t, n) {
      n[0] & /*markActiveTicks*/
      131072 && I(
        r,
        "--divkit-slider-tick",
        /*val*/
        t[85]
      );
    },
    d(t) {
      t && q(r);
    }
  };
}
function pu(e) {
  let r;
  return {
    c() {
      r = Me("div"), g(r, "class", Hr.slider__tick + " " + Hr.slider__tick_inactive), I(
        r,
        "--divkit-slider-tick",
        /*val*/
        e[85]
      );
    },
    m(t, n) {
      K(t, r, n);
    },
    p(t, n) {
      n[0] & /*markInactiveTicks*/
      262144 && I(
        r,
        "--divkit-slider-tick",
        /*val*/
        t[85]
      );
    },
    d(t) {
      t && q(r);
    }
  };
}
function gu(e) {
  let r, t, n;
  return {
    c() {
      var o, i, s, a, l;
      r = Me("div"), t = Me("div"), n = Gn(
        /*value*/
        e[11]
      ), g(t, "class", Hr["slider__thumb-text-inner"]), I(
        t,
        "font-size",
        /*textStyle*/
        ((o = e[7]) == null ? void 0 : o.fontSize) || "1em"
      ), I(
        t,
        "font-weight",
        /*textStyle*/
        ((i = e[7]) == null ? void 0 : i.fontWeight) || ""
      ), I(
        t,
        "font-family",
        /*textStyle*/
        ((s = e[7]) == null ? void 0 : s.fontFamily) || ""
      ), I(
        t,
        "font-variation-settings",
        /*textStyle*/
        ((a = e[7]) == null ? void 0 : a.fontVariationSettings) || ""
      ), I(
        t,
        "color",
        /*textStyle*/
        ((l = e[7]) == null ? void 0 : l.textColor) || "#000"
      ), g(r, "class", Hr["slider__thumb-text"]);
    },
    m(o, i) {
      K(o, r, i), wt(r, t), wt(t, n);
    },
    p(o, i) {
      var s, a, l, c, u;
      i[0] & /*value*/
      2048 && to(
        n,
        /*value*/
        o[11]
      ), i[0] & /*textStyle*/
      128 && I(
        t,
        "font-size",
        /*textStyle*/
        ((s = o[7]) == null ? void 0 : s.fontSize) || "1em"
      ), i[0] & /*textStyle*/
      128 && I(
        t,
        "font-weight",
        /*textStyle*/
        ((a = o[7]) == null ? void 0 : a.fontWeight) || ""
      ), i[0] & /*textStyle*/
      128 && I(
        t,
        "font-family",
        /*textStyle*/
        ((l = o[7]) == null ? void 0 : l.fontFamily) || ""
      ), i[0] & /*textStyle*/
      128 && I(
        t,
        "font-variation-settings",
        /*textStyle*/
        ((c = o[7]) == null ? void 0 : c.fontVariationSettings) || ""
      ), i[0] & /*textStyle*/
      128 && I(
        t,
        "color",
        /*textStyle*/
        ((u = o[7]) == null ? void 0 : u.textColor) || "#000"
      );
    },
    d(o) {
      o && q(r);
    }
  };
}
function hu(e) {
  let r, t = (
    /*textSecondaryStyle*/
    e[8] && mu(e)
  );
  return {
    c() {
      r = Me("div"), t && t.c(), g(r, "class", Hr.slider__thumb + " " + Hr.slider__thumb_secondary), I(r, "border-radius", ae(
        /*thumbSecondaryStyle*/
        e[6].borderRadius
      )), I(
        r,
        "background",
        /*thumbSecondaryStyle*/
        e[6].background
      ), I(
        r,
        "box-shadow",
        /*thumbSecondaryStyle*/
        e[6].boxShadow || ""
      );
    },
    m(n, o) {
      K(n, r, o), t && t.m(r, null);
    },
    p(n, o) {
      /*textSecondaryStyle*/
      n[8] ? t ? t.p(n, o) : (t = mu(n), t.c(), t.m(r, null)) : t && (t.d(1), t = null), o[0] & /*thumbSecondaryStyle*/
      64 && I(r, "border-radius", ae(
        /*thumbSecondaryStyle*/
        n[6].borderRadius
      )), o[0] & /*thumbSecondaryStyle*/
      64 && I(
        r,
        "background",
        /*thumbSecondaryStyle*/
        n[6].background
      ), o[0] & /*thumbSecondaryStyle*/
      64 && I(
        r,
        "box-shadow",
        /*thumbSecondaryStyle*/
        n[6].boxShadow || ""
      );
    },
    d(n) {
      n && q(r), t && t.d();
    }
  };
}
function mu(e) {
  let r, t, n;
  return {
    c() {
      var o, i, s, a, l;
      r = Me("div"), t = Me("div"), n = Gn(
        /*value2*/
        e[12]
      ), g(t, "class", Hr["slider__thumb-text-inner"]), I(
        t,
        "font-size",
        /*textSecondaryStyle*/
        ((o = e[8]) == null ? void 0 : o.fontSize) || "1em"
      ), I(
        t,
        "font-weight",
        /*textSecondaryStyle*/
        ((i = e[8]) == null ? void 0 : i.fontWeight) || ""
      ), I(
        t,
        "font-family",
        /*textSecondaryStyle*/
        ((s = e[8]) == null ? void 0 : s.fontFamily) || ""
      ), I(
        t,
        "font-variation-settings",
        /*textSecondaryStyle*/
        ((a = e[8]) == null ? void 0 : a.fontVariationSettings) || ""
      ), I(
        t,
        "color",
        /*textSecondaryStyle*/
        ((l = e[8]) == null ? void 0 : l.textColor) || "#000"
      ), g(r, "class", Hr["slider__thumb-text"] + " " + Hr["slider__thumb-text_secondary"]);
    },
    m(o, i) {
      K(o, r, i), wt(r, t), wt(t, n);
    },
    p(o, i) {
      var s, a, l, c, u;
      i[0] & /*value2*/
      4096 && to(
        n,
        /*value2*/
        o[12]
      ), i[0] & /*textSecondaryStyle*/
      256 && I(
        t,
        "font-size",
        /*textSecondaryStyle*/
        ((s = o[8]) == null ? void 0 : s.fontSize) || "1em"
      ), i[0] & /*textSecondaryStyle*/
      256 && I(
        t,
        "font-weight",
        /*textSecondaryStyle*/
        ((a = o[8]) == null ? void 0 : a.fontWeight) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && I(
        t,
        "font-family",
        /*textSecondaryStyle*/
        ((l = o[8]) == null ? void 0 : l.fontFamily) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && I(
        t,
        "font-variation-settings",
        /*textSecondaryStyle*/
        ((c = o[8]) == null ? void 0 : c.fontVariationSettings) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && I(
        t,
        "color",
        /*textSecondaryStyle*/
        ((u = o[8]) == null ? void 0 : u.textColor) || "#000"
      );
    },
    d(o) {
      o && q(r);
    }
  };
}
function bu(e) {
  let r, t, n, o, i, s;
  return {
    c() {
      r = Me("input"), g(r, "type", "range"), g(r, "class", t = /*switchedTracks*/
      e[16] ? Hr.slider__input : `${Hr.slider__input} ${Hr.slider__input_secondary}`), g(
        r,
        "min",
        /*minValue*/
        e[3]
      ), g(
        r,
        "max",
        /*maxValue*/
        e[4]
      ), g(r, "step", "1"), r.value = n = /*switchedTracks*/
      e[16] ? (
        /*value*/
        e[11]
      ) : (
        /*value2*/
        e[12]
      ), r.disabled = o = !/*isEnabled*/
      e[9], g(
        r,
        "aria-label",
        /*secondaryDescription*/
        e[20]
      );
    },
    m(a, l) {
      K(a, r, l), i || (s = [
        Ke(
          r,
          "input",
          /*input_handler_1*/
          e[75]
        ),
        Ke(r, "mousedown", function() {
          Nr(
            /*secondVariable*/
            e[13] ? (
              /*onSecondMousedown*/
              e[41]
            ) : null
          ) && (e[13] ? (
            /*onSecondMousedown*/
            e[41]
          ) : null).apply(this, arguments);
        }),
        Ke(r, "touchstart", function() {
          Nr(
            /*secondVariable*/
            e[13] ? (
              /*onSecondMousedown*/
              e[41]
            ) : null
          ) && (e[13] ? (
            /*onSecondMousedown*/
            e[41]
          ) : null).apply(this, arguments);
        }),
        Ke(r, "focus", function() {
          Nr(
            /*focusHandler*/
            e[83]
          ) && e[83].apply(this, arguments);
        }),
        Ke(r, "blur", function() {
          Nr(
            /*blurHandler*/
            e[84]
          ) && e[84].apply(this, arguments);
        })
      ], i = !0);
    },
    p(a, l) {
      e = a, l[0] & /*switchedTracks*/
      65536 && t !== (t = /*switchedTracks*/
      e[16] ? Hr.slider__input : `${Hr.slider__input} ${Hr.slider__input_secondary}`) && g(r, "class", t), l[0] & /*minValue*/
      8 && g(
        r,
        "min",
        /*minValue*/
        e[3]
      ), l[0] & /*maxValue*/
      16 && g(
        r,
        "max",
        /*maxValue*/
        e[4]
      ), l[0] & /*switchedTracks, value, value2*/
      71680 && n !== (n = /*switchedTracks*/
      e[16] ? (
        /*value*/
        e[11]
      ) : (
        /*value2*/
        e[12]
      )) && (r.value = n), l[0] & /*isEnabled*/
      512 && o !== (o = !/*isEnabled*/
      e[9]) && (r.disabled = o), l[0] & /*secondaryDescription*/
      1048576 && g(
        r,
        "aria-label",
        /*secondaryDescription*/
        e[20]
      );
    },
    d(a) {
      a && q(r), i = !1, Ur(s);
    }
  };
}
function d1(e) {
  let r, t, n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N = or(
    /*renderRanges*/
    e[21]
  ), R = [];
  for (let D = 0; D < N.length; D += 1)
    R[D] = du(fu(e, N, D));
  let L = or(
    /*markActiveTicks*/
    e[17]
  ), ee = [];
  for (let D = 0; D < L.length; D += 1)
    ee[D] = _u(uu(e, L, D));
  let ce = or(
    /*markInactiveTicks*/
    e[18]
  ), T = [];
  for (let D = 0; D < ce.length; D += 1)
    T[D] = pu(cu(e, ce, D));
  let X = (
    /*textStyle*/
    e[7] && gu(e)
  ), le = (
    /*secondVariable*/
    e[13] && hu(e)
  ), E = (
    /*secondVariable*/
    e[13] && bu(e)
  );
  return {
    c() {
      r = Me("div"), t = Me("div"), n = Me("div");
      for (let D = 0; D < R.length; D += 1)
        R[D].c();
      i = gr();
      for (let D = 0; D < ee.length; D += 1)
        ee[D].c();
      s = gr();
      for (let D = 0; D < T.length; D += 1)
        T[D].c();
      a = gr(), l = Me("div"), X && X.c(), c = gr(), le && le.c(), u = gr(), f = Me("input"), p = gr(), E && E.c(), g(n, "class", o = Hr["slider__tracks-ranges"] + /*$direction*/
      (e[14] === "rtl" ? " " + Hr["slider__tracks-ranges_rtl"] : "")), g(l, "class", Hr.slider__thumb), I(l, "border-radius", ae(
        /*thumbStyle*/
        e[5].borderRadius
      )), I(
        l,
        "background",
        /*thumbStyle*/
        e[5].background
      ), I(
        l,
        "box-shadow",
        /*thumbStyle*/
        e[5].boxShadow || ""
      ), g(f, "type", "range"), g(f, "class", _ = /*switchedTracks*/
      e[16] ? `${Hr.slider__input} ${Hr.slider__input_secondary}` : Hr.slider__input), g(
        f,
        "min",
        /*minValue*/
        e[3]
      ), g(
        f,
        "max",
        /*maxValue*/
        e[4]
      ), g(f, "step", "1"), f.value = h = /*switchedTracks*/
      e[16] ? (
        /*value2*/
        e[12]
      ) : (
        /*value*/
        e[11]
      ), f.disabled = m = !/*isEnabled*/
      e[9], g(
        f,
        "aria-label",
        /*description*/
        e[19]
      ), g(t, "class", Hr["slider__tracks-inner"]), g(r, "class", Hr["slider__tracks-wrapper"]);
    },
    m(D, P) {
      K(D, r, P), wt(r, t), wt(t, n);
      for (let U = 0; U < R.length; U += 1)
        R[U] && R[U].m(n, null);
      wt(t, i);
      for (let U = 0; U < ee.length; U += 1)
        ee[U] && ee[U].m(t, null);
      wt(t, s);
      for (let U = 0; U < T.length; U += 1)
        T[U] && T[U].m(t, null);
      wt(t, a), wt(t, l), X && X.m(l, null), wt(t, c), le && le.m(t, null), wt(t, u), wt(t, f), e[74](f), wt(t, p), E && E.m(t, null), e[76](t), w || (k = [
        Ke(
          f,
          "input",
          /*input_handler*/
          e[73]
        ),
        Ke(f, "focus", function() {
          Nr(
            /*focusHandler*/
            e[83]
          ) && e[83].apply(this, arguments);
        }),
        Ke(f, "blur", function() {
          Nr(
            /*blurHandler*/
            e[84]
          ) && e[84].apply(this, arguments);
        })
      ], w = !0);
    },
    p(D, P) {
      if (e = D, P[0] & /*renderRanges*/
      2097152) {
        N = or(
          /*renderRanges*/
          e[21]
        );
        let U;
        for (U = 0; U < N.length; U += 1) {
          const Z = fu(e, N, U);
          R[U] ? R[U].p(Z, P) : (R[U] = du(Z), R[U].c(), R[U].m(n, null));
        }
        for (; U < R.length; U += 1)
          R[U].d(1);
        R.length = N.length;
      }
      if (P[0] & /*$direction*/
      16384 && o !== (o = Hr["slider__tracks-ranges"] + /*$direction*/
      (e[14] === "rtl" ? " " + Hr["slider__tracks-ranges_rtl"] : "")) && g(n, "class", o), P[0] & /*markActiveTicks*/
      131072) {
        L = or(
          /*markActiveTicks*/
          e[17]
        );
        let U;
        for (U = 0; U < L.length; U += 1) {
          const Z = uu(e, L, U);
          ee[U] ? ee[U].p(Z, P) : (ee[U] = _u(Z), ee[U].c(), ee[U].m(t, s));
        }
        for (; U < ee.length; U += 1)
          ee[U].d(1);
        ee.length = L.length;
      }
      if (P[0] & /*markInactiveTicks*/
      262144) {
        ce = or(
          /*markInactiveTicks*/
          e[18]
        );
        let U;
        for (U = 0; U < ce.length; U += 1) {
          const Z = cu(e, ce, U);
          T[U] ? T[U].p(Z, P) : (T[U] = pu(Z), T[U].c(), T[U].m(t, a));
        }
        for (; U < T.length; U += 1)
          T[U].d(1);
        T.length = ce.length;
      }
      /*textStyle*/
      e[7] ? X ? X.p(e, P) : (X = gu(e), X.c(), X.m(l, null)) : X && (X.d(1), X = null), P[0] & /*thumbStyle*/
      32 && I(l, "border-radius", ae(
        /*thumbStyle*/
        e[5].borderRadius
      )), P[0] & /*thumbStyle*/
      32 && I(
        l,
        "background",
        /*thumbStyle*/
        e[5].background
      ), P[0] & /*thumbStyle*/
      32 && I(
        l,
        "box-shadow",
        /*thumbStyle*/
        e[5].boxShadow || ""
      ), /*secondVariable*/
      e[13] ? le ? le.p(e, P) : (le = hu(e), le.c(), le.m(t, u)) : le && (le.d(1), le = null), P[0] & /*switchedTracks*/
      65536 && _ !== (_ = /*switchedTracks*/
      e[16] ? `${Hr.slider__input} ${Hr.slider__input_secondary}` : Hr.slider__input) && g(f, "class", _), P[0] & /*minValue*/
      8 && g(
        f,
        "min",
        /*minValue*/
        e[3]
      ), P[0] & /*maxValue*/
      16 && g(
        f,
        "max",
        /*maxValue*/
        e[4]
      ), P[0] & /*switchedTracks, value2, value*/
      71680 && h !== (h = /*switchedTracks*/
      e[16] ? (
        /*value2*/
        e[12]
      ) : (
        /*value*/
        e[11]
      )) && (f.value = h), P[0] & /*isEnabled*/
      512 && m !== (m = !/*isEnabled*/
      e[9]) && (f.disabled = m), P[0] & /*description*/
      524288 && g(
        f,
        "aria-label",
        /*description*/
        e[19]
      ), /*secondVariable*/
      e[13] ? E ? E.p(e, P) : (E = bu(e), E.c(), E.m(t, null)) : E && (E.d(1), E = null);
    },
    d(D) {
      D && q(r), sn(R, D), sn(ee, D), sn(T, D), X && X.d(), le && le.d(), e[74](null), E && E.d(), e[76](null), w = !1, Ur(k);
    }
  };
}
function _1(e) {
  let r, t, n, o, i, s;
  const a = [f1, u1], l = [];
  function c(u, f) {
    return (
      /*hasError*/
      u[10] ? -1 : 0
    );
  }
  return ~(r = c(e)) && (t = l[r] = a[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(u, f) {
      ~r && l[r].m(u, f), K(u, n, f), o = !0, i || (s = Ke(
        window,
        "resize",
        /*checkTicksDebounced*/
        e[43]
      ), i = !0);
    },
    p(u, f) {
      let _ = r;
      r = c(u), r === _ ? ~r && l[r].p(u, f) : (t && (dr(), re(l[_], 1, 1, () => {
        l[_] = null;
      }), _r()), ~r ? (t = l[r], t ? t.p(u, f) : (t = l[r] = a[r](u), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(u) {
      o || (W(t), o = !0);
    },
    o(u) {
      re(t), o = !1;
    },
    d(u) {
      u && q(n), ~r && l[r].d(u), i = !1, s();
    }
  };
}
const $n = {
  width: 10,
  height: 10,
  borderRadius: 5,
  background: "#000"
}, ds = ["rounded_rectangle", "circle"], Fl = ["rounded_rectangle"];
function _s(e, r, t, n, o) {
  let i = [];
  if (o)
    for (let s = e; s < r; ++s)
      i.push((s - t) / (n - t));
  else {
    for (let s = t; s < e; ++s)
      i.push((s - t) / (n - t));
    for (let s = r; s < n + 1; ++s)
      i.push((s - t) / (n - t));
  }
  return i;
}
function p1(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, ee, ce, T, X, le, E, D, P, U, Z, be, Ae = C, Ee = () => (Ae(), Ae = S(ee, (v) => t(57, be = v)), ee), _e, Ie = C, $ = () => (Ie(), Ie = S(R, (v) => t(58, _e = v)), R), tt, Xe = C, qe = () => (Xe(), Xe = S(L, (v) => t(59, tt = v)), L), ve, De = C, ue = () => (De(), De = S(N, (v) => t(60, ve = v)), N), ke, de = C, x = () => (de(), de = S(k, (v) => t(61, ke = v)), k), fe, ie = C, Fe = () => (ie(), ie = S(w, (v) => t(62, fe = v)), w), Ye, Ze = C, te = () => (Ze(), Ze = S(p, (v) => t(63, Ye = v)), p), He, Be = C, it = () => (Be(), Be = S(m, (v) => t(64, He = v)), m), st, lt = C, kt = () => (lt(), lt = S(h, (v) => t(65, st = v)), h), nt, Nt = C, ut = () => (Nt(), Nt = S(_, (v) => t(66, nt = v)), _), pe, ge = C, _t = () => (ge(), ge = S(f, (v) => t(67, pe = v)), f), Se, F = C, Ct = () => (F(), F = S(u, (v) => t(68, Se = v)), u), ft, St = C, Tt = () => (St(), St = S(a, (v) => t(69, ft = v)), a), $e, Y = C, At = () => (Y(), Y = S(s, (v) => t(70, $e = v)), s), Mt, Qt = C, Jt = () => (Qt(), Qt = S(c, (v) => t(71, Mt = v)), c), he, Le = C, pt = () => (Le(), Le = S(l, (v) => t(72, he = v)), l);
  e.$$.on_destroy.push(() => Ae()), e.$$.on_destroy.push(() => Ie()), e.$$.on_destroy.push(() => Xe()), e.$$.on_destroy.push(() => De()), e.$$.on_destroy.push(() => de()), e.$$.on_destroy.push(() => ie()), e.$$.on_destroy.push(() => Ze()), e.$$.on_destroy.push(() => Be()), e.$$.on_destroy.push(() => lt()), e.$$.on_destroy.push(() => Nt()), e.$$.on_destroy.push(() => ge()), e.$$.on_destroy.push(() => F()), e.$$.on_destroy.push(() => St()), e.$$.on_destroy.push(() => Y()), e.$$.on_destroy.push(() => Qt()), e.$$.on_destroy.push(() => Le());
  let { componentContext: ye } = r, { layoutParams: xe = void 0 } = r;
  const Oe = Tr(Zr), er = Tr(To), ze = Oe.direction;
  yn(e, ze, (v) => t(14, Z = v));
  let yt, Ft, It, cr = !1, Pe = 0, vt = 100, nr = $n, $t = nr, Xt = $n, pr = $n, kr, Pt = null, yr, G = null, dt, Ut = dt, jt = "", wr = "", Sr = !0, hr = !1, Ir = [];
  function Gr() {
    t(5, nr = $n), t(6, $t = nr), t(45, Xt = $n), t(46, pr = $n), t(47, Pt = null), t(48, G = null), t(7, dt = void 0), t(8, Ut = void 0), t(19, jt = ""), t(9, Sr = !0), t(20, wr = "");
  }
  let tr = Fo($e || 0, Pe, vt), rt = Fo(ft || 0, Pe, vt);
  function Et({ direction: v, minValue: oe, maxValue: d, trackActiveOffset: z, trackActivePart: Te, trackInactiveStyle: We, trackActiveStyle: we, ranges: O = [] }) {
    const Dt = [], zt = (ct, Gt, Fr) => {
      var zr, Vn, Ce, qr;
      const br = (Yr, hn, y, j) => {
        var B, Qe, Ve, qt;
        const A = Math.max(Yr, Gt);
        if (Math.min(hn, Fr) - A > 0) {
          const Vt = j && (Qe = (B = j[v === "ltr" ? "start" : "end"]) != null ? B : j.left) != null ? Qe : 0, Ge = j && (qt = (Ve = j[v === "ltr" ? "end" : "start"]) != null ? Ve : j.right) != null ? qt : 0;
          Dt.push({
            left: Yr,
            right: hn,
            totalLeft: Gt,
            totalRight: Fr,
            leftMargin: Vt,
            rightMargin: Ge,
            style: y
          });
        }
      };
      if ((!O[0] || ((zr = O[0].start) != null ? zr : oe) > Gt) && br(Gt, O[0] ? (Vn = O[0].start) != null ? Vn : oe : Fr, ct === "inactive" ? We : we), O.forEach((Yr, hn) => {
        var qt, Vt, Ge, Kt;
        const y = Yr[ct === "inactive" ? "track_inactive_style" : "track_active_style"], A = y ? ao(y, Fl, $n) : ct === "inactive" ? We : we, se = O[hn - 1], B = O[hn + 1], Qe = (Vt = (qt = Yr.start) != null ? qt : se == null ? void 0 : se.end) != null ? Vt : Gt, Ve = (Kt = (Ge = Yr.end) != null ? Ge : B == null ? void 0 : B.start) != null ? Kt : Fr;
        br(Qe, Ve, A, Yr.margins);
      }), O[O.length - 1] && ((Ce = O[O.length - 1].end) != null ? Ce : d) < Fr) {
        const Yr = (qr = O[O.length - 1].end) != null ? qr : d;
        br(Yr, Fr, ct === "inactive" ? We : we);
      }
    };
    zt("inactive", oe, d), zt("active", z, z + Te);
    const Ue = d - oe;
    t(21, Ir = Dt.map((ct) => {
      let Gt = `${(ct.left - oe) * 100 / Ue}%`;
      ct.leftMargin && (Gt = `calc(${Gt} + ${on(ct.leftMargin)})`);
      let Fr;
      ct.totalLeft < ct.left ? Fr = Gt : ct.leftMargin ? Fr = `max(${(ct.totalLeft - oe) * 100 / Ue}%, ${Gt})` : Fr = `${(Math.max(ct.totalLeft, ct.left) - oe) * 100 / Ue}%`;
      let br = `${(1 - (ct.right - oe) / Ue) * 100}%`;
      ct.rightMargin && (br = `calc(${br} + ${on(ct.rightMargin)})`);
      let zr;
      return ct.totalRight > ct.right ? zr = br : ct.rightMargin ? zr = `max(${(1 - (ct.totalRight - oe) / Ue) * 100}%, ${br})` : zr = `${(1 - (Math.max(ct.totalRight, ct.right) - oe) / Ue) * 100}%`, {
        left: Fr,
        right: zr,
        height: ae(ct.style.height),
        borderRadius: ae(ct.style.borderRadius),
        background: ct.style.background,
        boxShadow: ct.style.boxShadow || ""
      };
    }));
  }
  function Zt(v) {
    var O, Dt;
    if (!Sr)
      return;
    const oe = "pageX" in v ? v.pageX : (Dt = (O = v.changedTouches) == null ? void 0 : O[0]) == null ? void 0 : Dt.pageX;
    if (oe === void 0)
      return;
    const d = It.getBoundingClientRect();
    let z = (oe - d.left) / d.width;
    Z === "rtl" && (z = 1 - z);
    const Te = Pe + (vt - Pe) * z, We = Math.round(Fo(Te, Pe, vt)), we = (tr + rt) / 2;
    t(16, cr = We < we == tr < rt);
  }
  function Yt(v, oe) {
    const d = Number(v.target.value);
    cr === (oe === "first") ? (t(12, rt = d), a.setValue(d)) : (t(11, tr = d), s.setValue(d));
  }
  let ur = !1;
  function at() {
    if (!It)
      return;
    const v = vt - Pe, oe = (Pt == null ? void 0 : Pt.width) || 0, d = (G == null ? void 0 : G.width) || 0;
    Math.max(oe, d) * v >= (It == null ? void 0 : It.clientWidth) ? ur || (ye.logError(J(new Error("Slider ticks overlap each other"), { level: "warn" })), ur = !0) : ur = !1;
  }
  const ne = da(at, 50);
  ro(() => {
    at();
  }), ln(() => {
    yt && (Oe.unregisterFocusable(yt), t(44, yt = void 0));
  });
  const mt = (v) => Yt(v, "first");
  function rr(v) {
    Dr[v ? "unshift" : "push"](() => {
      Ft = v, t(2, Ft);
    });
  }
  const mr = (v) => Yt(v, "second");
  function ir(v) {
    Dr[v ? "unshift" : "push"](() => {
      It = v, t(15, It);
    });
  }
  return e.$$set = (v) => {
    "componentContext" in v && t(0, ye = v.componentContext), "layoutParams" in v && t(1, xe = v.layoutParams);
  }, e.$$.update = () => {
    var v, oe, d, z;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(56, n = ye.origJson), e.$$.dirty[1] & /*origJson*/
    33554432 && n && Gr(), e.$$.dirty[0] & /*componentContext*/
    1 && t(55, o = ye.json.thumb_value_variable), e.$$.dirty[0] & /*componentContext*/
    1 && t(13, i = ye.json.thumb_secondary_value_variable), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*firstVariable*/
    16777216 && At(t(22, s = o && (ye.getVariable(o, "integer") || Oe.awaitGlobalVariable(o, "integer", 0)) || so("temp", "integer", 0))), e.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 && Tt(t(23, a = i && (ye.getVariable(i, "integer") || Oe.awaitGlobalVariable(i, "integer", 0)) || so("temp", "integer", 0))), e.$$.dirty[0] & /*componentContext*/
    1 && pt(t(39, l = ye.getDerivedFromVars(ye.json.min_value))), e.$$.dirty[0] & /*componentContext*/
    1 && Jt(t(38, c = ye.getDerivedFromVars(ye.json.max_value))), e.$$.dirty[0] & /*componentContext*/
    1 && Ct(t(37, u = ye.getDerivedFromVars(ye.json.thumb_style))), e.$$.dirty[0] & /*componentContext*/
    1 && _t(t(36, f = ye.getDerivedFromVars(ye.json.thumb_secondary_style))), e.$$.dirty[0] & /*componentContext*/
    1 && ut(t(35, _ = ye.getDerivedFromVars(ye.json.track_inactive_style))), e.$$.dirty[0] & /*componentContext*/
    1 && kt(t(34, h = ye.getDerivedFromVars(ye.json.track_active_style))), e.$$.dirty[0] & /*componentContext*/
    1 && it(t(33, m = ye.getDerivedFromVars(ye.json.tick_mark_active_style))), e.$$.dirty[0] & /*componentContext*/
    1 && te(t(32, p = ye.getDerivedFromVars(ye.json.tick_mark_inactive_style))), e.$$.dirty[0] & /*componentContext*/
    1 && Fe(t(31, w = ye.getDerivedFromVars(ye.json.thumb_text_style, void 0, !0, 1))), e.$$.dirty[0] & /*componentContext*/
    1 && x(t(30, k = ye.getDerivedFromVars(ye.json.thumb_secondary_text_style, void 0, !0, 1))), e.$$.dirty[0] & /*componentContext*/
    1 && ue(t(29, N = ye.getDerivedFromVars(ye.json.accessibility))), e.$$.dirty[0] & /*componentContext*/
    1 && $(t(28, R = ye.getDerivedFromVars(ye.json.secondary_value_accessibility))), e.$$.dirty[0] & /*componentContext*/
    1 && qe(t(27, L = ye.getDerivedFromVars(ye.json.is_enabled))), e.$$.dirty[0] & /*componentContext*/
    1 && Ee(t(26, ee = ye.getDerivedFromVars(ye.json.ranges))), e.$$.dirty[0] & /*minValue, maxValue*/
    24 | e.$$.dirty[2] & /*$jsonMinValue, $jsonMaxValue*/
    1536 && (t(3, Pe = io(he, Pe)), t(4, vt = io(Mt, vt)), at()), e.$$.dirty[0] & /*minValue, maxValue, value*/
    2072 | e.$$.dirty[2] & /*$valueVariable*/
    256) {
      const Te = Fo($e || 0, Pe, vt);
      Te !== tr && t(11, tr = Te);
    }
    if (e.$$.dirty[0] & /*minValue, maxValue, value2*/
    4120 | e.$$.dirty[2] & /*$value2Variable*/
    128) {
      const Te = Fo(ft || 0, Pe, vt);
      Te !== rt && t(12, rt = Te);
    }
    if (e.$$.dirty[0] & /*thumbStyle*/
    32 | e.$$.dirty[2] & /*$jsonThumbStyle*/
    64 && t(5, nr = ao(Se, ds, nr)), e.$$.dirty[0] & /*thumbStyle*/
    32 | e.$$.dirty[2] & /*$jsonThumbSecondaryStyle*/
    32 && t(6, $t = ao(pe, ds, nr)), e.$$.dirty[1] & /*trackInactiveStyle*/
    16384 | e.$$.dirty[2] & /*$jsonTrackInactiveStyle*/
    16 && t(45, Xt = ao(nt, Fl, Xt)), e.$$.dirty[1] & /*trackActiveStyle*/
    32768 | e.$$.dirty[2] & /*$jsonTrackActiveStyle*/
    8 && t(46, pr = ao(st, Fl, pr)), e.$$.dirty[2] & /*$jsonMarkActiveStyle*/
    4) {
      let Te = ao(He, ds, $n);
      Te !== $n && t(47, Pt = Te);
    }
    if (e.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | e.$$.dirty[1] & /*markActiveStyle*/
    65536 && (Pt ? (t(17, kr = i ? _s(Math.min(tr, rt), Math.max(tr, rt) + 1, Pe, vt, !0) : _s(Pe, tr, Pe, vt, !0)), at()) : t(17, kr = [])), e.$$.dirty[2] & /*$jsonMarkInactiveStyle*/
    2) {
      let Te = ao(Ye, ds, $n);
      Te !== $n && t(48, G = Te);
    }
    if (e.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | e.$$.dirty[1] & /*markInactiveStyle*/
    131072 && (G ? (t(18, yr = i ? _s(Math.min(tr, rt), Math.max(tr, rt) + 1, Pe, vt, !1) : _s(tr + 1, vt + 1, Pe, vt, !0)), at()) : t(18, yr = [])), e.$$.dirty[0] & /*textStyle*/
    128 | e.$$.dirty[2] & /*$jsonTextStyle*/
    1 && t(7, dt = lu(fe, Oe.typefaceProvider, dt)), e.$$.dirty[0] & /*textStyle*/
    128 | e.$$.dirty[1] & /*$jsonSecondaryTextStyle*/
    1073741824 && t(8, Ut = lu(ke, Oe.typefaceProvider, dt)), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*$jsonAccessibility*/
    536870912 && (ve != null && ve.description ? t(19, jt = $o(ve)) : ye.logError(J(new Error('Missing accessibility "description" for slider'), { level: "warn" }))), e.$$.dirty[0] & /*isEnabled*/
    512 | e.$$.dirty[1] & /*$jsonIsEnabled*/
    268435456 && t(9, Sr = fn(tt, Sr)), e.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 | e.$$.dirty[1] & /*$jsonSecondaryAccessibility*/
    134217728 && (_e != null && _e.description ? t(20, wr = $o(_e)) : i && ye.logError(J(new Error('Missing second accessibility "description" for slider'), { level: "warn" }))), e.$$.dirty[0] & /*componentContext, thumbStyle, hasError*/
    1057 | e.$$.dirty[1] & /*trackActiveStyle, trackInactiveStyle*/
    49152) {
      let Te = !1;
      er.hasAction() ? (ye.logError(J(new Error('Cannot show "slider" inside component with an action or inside accessibility mode=exclude'))), Te = !0) : nr === $n ? (ye.logError(J(new Error('Missing "thumb_style" in slider'))), Te = !0) : pr === $n ? (ye.logError(J(new Error('Missing "track_active_style" in slider'))), Te = !0) : Xt === $n && (ye.logError(J(new Error('Missing "track_inactive_style" in slider'))), Te = !0), Te !== hr && t(10, hr = Te);
    }
    e.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && t(52, ce = ae(Math.max(...[nr.width, $t.width, 0].filter(Mn)))), e.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && t(51, T = ae(Math.max(...[nr.height, $t.height, 0].filter(Mn)))), e.$$.dirty[0] & /*value, minValue, maxValue*/
    2072 && t(50, X = (tr - Pe) / (vt - Pe)), e.$$.dirty[0] & /*secondVariable, value2, minValue, maxValue*/
    12312 && t(49, le = i ? (rt - Pe) / (vt - Pe) : void 0), e.$$.dirty[0] & /*value, value2, minValue*/
    6152 | e.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && t(54, E = le !== void 0 ? Math.min(tr, rt) : Pe), e.$$.dirty[0] & /*value2, value, minValue*/
    6152 | e.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && t(53, D = le !== void 0 ? Math.abs(rt - tr) : tr - Pe), e.$$.dirty[0] & /*$direction, minValue, maxValue*/
    16408 | e.$$.dirty[1] & /*trackActiveOffset, trackActivePart, trackInactiveStyle, trackActiveStyle, $jsonRanges*/
    79740928 && Et({
      direction: Z,
      minValue: Pe,
      maxValue: vt,
      trackActiveOffset: E,
      trackActivePart: D,
      trackInactiveStyle: Xt,
      trackActiveStyle: pr,
      ranges: be
    }), e.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle, textStyle, textSecondaryStyle*/
    480 | e.$$.dirty[1] & /*markActiveStyle, markInactiveStyle, maxThumbWidth, maxThumbHeight, trackPart, trackSecondaryPart*/
    4128768 && t(25, P = {
      "--divkit-slider-thumb-width": ae(nr.width),
      "--divkit-slider-thumb-height": ae(nr.height),
      "--divkit-slider-thumb-secondary-width": ae($t.width),
      "--divkit-slider-thumb-secondary-height": ae($t.height),
      "--divkit-slider-text-offset-x": (v = dt == null ? void 0 : dt.offset) != null && v.x ? on(dt.offset.x) : void 0,
      "--divkit-slider-text-offset-y": (oe = dt == null ? void 0 : dt.offset) != null && oe.y ? on(dt.offset.y) : void 0,
      "--divkit-slider-text-secondary-offset-x": (d = Ut == null ? void 0 : Ut.offset) != null && d.x ? on(Ut.offset.x) : void 0,
      "--divkit-slider-text-secondary-offset-y": (z = Ut == null ? void 0 : Ut.offset) != null && z.y ? on(Ut.offset.y) : void 0,
      "--divkit-slider-tick-active-width": Pt ? ae(Pt.width) : void 0,
      "--divkit-slider-tick-active-height": Pt ? ae(Pt.height) : void 0,
      "--divkit-slider-tick-active-border-radius": Pt ? ae(Pt.borderRadius) : void 0,
      "--divkit-slider-tick-active-background": (Pt == null ? void 0 : Pt.background) || void 0,
      "--divkit-slider-tick-active-box-shadow": (Pt == null ? void 0 : Pt.boxShadow) || void 0,
      "--divkit-slider-tick-inactive-width": G ? ae(G.width) : void 0,
      "--divkit-slider-tick-inactive-height": G ? ae(G.height) : void 0,
      "--divkit-slider-tick-inactive-border-radius": G ? ae(G.borderRadius) : void 0,
      "--divkit-slider-tick-inactive-background": (G == null ? void 0 : G.background) || void 0,
      "--divkit-slider-tick-inactive-box-shadow": (G == null ? void 0 : G.boxShadow) || void 0,
      "--divkit-slider-max-thumb-width": ce,
      "--divkit-slider-max-thumb-height": T,
      "--divkit-slider-track-part": X,
      "--divkit-slider-track-secondary-part": le
    }), e.$$.dirty[0] & /*$direction*/
    16384 && t(24, U = { direction: Z }), e.$$.dirty[0] & /*componentContext, input*/
    5 | e.$$.dirty[1] & /*prevId*/
    8192 && ye.json && Ft && (yt && (Oe.unregisterFocusable(yt), t(44, yt = void 0)), ye.id && !ye.fakeElement && (t(44, yt = ye.id), Oe.registerFocusable(yt, {
      focus() {
        Ft && Ft.focus();
      }
    })));
  }, [
    ye,
    xe,
    Ft,
    Pe,
    vt,
    nr,
    $t,
    dt,
    Ut,
    Sr,
    hr,
    tr,
    rt,
    i,
    Z,
    It,
    cr,
    kr,
    yr,
    jt,
    wr,
    Ir,
    s,
    a,
    U,
    P,
    ee,
    L,
    R,
    N,
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
    ze,
    Zt,
    Yt,
    ne,
    yt,
    Xt,
    pr,
    Pt,
    G,
    le,
    X,
    T,
    ce,
    D,
    E,
    o,
    n,
    be,
    _e,
    tt,
    ve,
    ke,
    fe,
    Ye,
    He,
    st,
    nt,
    pe,
    Se,
    ft,
    $e,
    Mt,
    he,
    mt,
    rr,
    mr,
    ir
  ];
}
class g1 extends Br {
  constructor(r) {
    super(), Or(this, r, p1, _1, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const h1 = "appkit-input", m1 = "appkit-input__aligner", b1 = "appkit-input__input", y1 = "appkit-input__placeholder", w1 = "appkit-input__input_singleline", k1 = "appkit-input__input_multiline", Bi = {
  input: h1,
  "input_alignment-horizontal_center": "appkit-input_alignment-horizontal_center",
  "input_alignment-horizontal_end": "appkit-input_alignment-horizontal_end",
  input__aligner: m1,
  input__input: b1,
  input__placeholder: y1,
  "input_alignment-vertical_start": "appkit-input_alignment-vertical_start",
  "input_alignment-vertical_end": "appkit-input_alignment-vertical_end",
  "input_alignment-vertical_baseline": "appkit-input_alignment-vertical_baseline",
  "input_highlight-color": "appkit-input_highlight-color",
  input__input_singleline: w1,
  "input__scroll-wrapper": "appkit-input__scroll-wrapper",
  input__input_multiline: k1,
  "input__input_has-custom-focus": "appkit-input__input_has-custom-focus"
};
function as(e, r) {
  if (e === r)
    return {
      start: e.length,
      added: 0,
      removed: 0
    };
  if (e.length > r.length) {
    const i = as(r, e);
    return {
      start: i.start,
      added: i.removed,
      removed: i.added
    };
  }
  let t = 0, n = r.length - 1;
  const o = r.length - e.length;
  for (; t < n && t < e.length && e[t] === r[t]; )
    ++t;
  for (; n - o >= t && e[n - o] === r[n]; )
    --n;
  return ++n, {
    start: t,
    added: n - t,
    removed: n - t - o
  };
}
class yu {
  constructor(r) {
    this.char = r;
  }
}
class wo {
  constructor(r, t, n) {
    this.char = r, this.filter = t, this.placeholder = n;
  }
}
class ma {
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
    for (let t = 0; t < this.destructedValue.length; ++t) {
      const n = this.destructedValue[t];
      if (n instanceof yu)
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
    const r = this.destructedValue.findIndex((t) => t instanceof wo && !t.char);
    return r !== -1 ? r : this.destructedValue.length;
  }
  updateMaskData(r, t = !0) {
    const n = this.maskData !== r && t ? this.rawValue : null;
    this.filters = /* @__PURE__ */ new Map(), this.maskData = r, this.maskData.decoding.forEach((o) => {
      if (o.filter)
        try {
          const i = new RegExp(o.filter);
          this.filters.set(o.key, i);
        } catch (i) {
          this.onException(J(i, {
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
      ) : new yu(o);
    }), n !== null && this.overrideRawValue(n);
  }
  overrideRawValue(r) {
    this.clearRange(0, this.destructedValue.length), this.replaceChars(r, 0), this.cursorPos = Math.min(this.cursorPos, this.value.length);
  }
  applyChangeFrom(r, t) {
    const n = as(this.value, r);
    t !== void 0 && (n.start = Math.max(0, t - n.added));
    const o = this.replaceBodyTail(n, r);
    this.calculateCursorPosition(n, o);
  }
  replaceBodyTail(r, t) {
    const n = this.buildBodySubstring(r, t), o = this.buildTailSubstring(r);
    this.cleanup(r);
    const i = this.firstEmptyHolderIndex(), s = o ? this.calculateMaxShift(o, i) : void 0;
    this.replaceChars(n, i, s);
    const a = this.firstEmptyHolderIndex();
    return this.replaceChars(o, a), a;
  }
  buildBodySubstring(r, t) {
    return t.substring(r.start, r.start + r.added);
  }
  buildTailSubstring(r) {
    return this.collectValueRange(
      r.start + r.removed,
      this.destructedValue.length - 1
    );
  }
  calculateMaxShift(r, t) {
    if (this.filters.size <= 1) {
      let i = 0, s = t;
      for (; s < this.destructedValue.length; )
        this.destructedValue[s] instanceof wo && ++i, ++s;
      return Math.max(0, i - r.length);
    }
    const n = this.calculateInsertableSubstring(r, t);
    let o = 0;
    for (; o < this.destructedValue.length && n === this.calculateInsertableSubstring(r, t + o); )
      ++o;
    return Math.max(0, o - 1);
  }
  cleanup(r) {
    if (r.added === 0 && r.removed === 1) {
      let t = r.start;
      for (; t >= 0; ) {
        const n = this.destructedValue[t];
        if (n instanceof wo && n.char !== null) {
          n.char = null;
          break;
        } else
          --t;
      }
    }
    this.clearRange(r.start, this.destructedValue.length);
  }
  clearRange(r, t) {
    let n = r;
    for (; n < t && n < this.destructedValue.length; ) {
      const o = this.destructedValue[n];
      o instanceof wo && (o.char = null), ++n;
    }
  }
  calculateCursorPosition(r, t) {
    const n = this.firstEmptyHolderIndex();
    let o;
    r.start < n ? o = Math.min(this.firstHolderAfter(t), this.value.length) : o = n, this.cursorPos = o;
  }
  calculateInsertableSubstring(r, t) {
    let n = "", o = t;
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
  collectValueRange(r, t) {
    let n = "", o = r;
    for (; o <= t; ) {
      const i = this.destructedValue[o];
      i instanceof wo && i.char !== null && (n += i.char), ++o;
    }
    return n;
  }
  replaceChars(r, t, n) {
    let o = this.calculateInsertableSubstring(r, t);
    n !== void 0 && (o = o.substring(0, n));
    let i = t, s = 0;
    for (; i < this.destructedValue.length && s < o.length; ) {
      const a = this.destructedValue[i], l = o[s];
      a instanceof wo && (a.char = l, ++s), ++i;
    }
  }
  firstHolderAfter(r) {
    let t = r;
    for (; t < this.destructedValue.length && !(this.destructedValue[t] instanceof wo); )
      ++t;
    return t;
  }
}
class v1 extends ma {
  constructor(r, t) {
    super(r), this.logError = t;
  }
  onException(r) {
    this.logError(r);
  }
}
function j1(e, r, t) {
  if (typeof e.pattern == "string" && Array.isArray(e.pattern_elements) && e.pattern_elements.every((n) => n.key && typeof n.key == "string")) {
    const n = {
      pattern: e.pattern,
      alwaysVisible: !!e.always_visible,
      decoding: e.pattern_elements.map((o) => ({
        key: o.key,
        filter: o.regex && typeof o.regex == "string" ? o.regex : void 0,
        placeholder: o.placeholder && typeof o.placeholder == "string" ? o.placeholder : "_"
      }))
    };
    return t ? (t.updateMaskData(n), t) : new v1(n, r);
  }
  return t || null;
}
class C1 extends ma {
  constructor(t = void 0, n) {
    super({
      pattern: "",
      decoding: [],
      alwaysVisible: !1
    });
    Ar(this, "currencyFormatter", new Intl.NumberFormat());
    Ar(this, "decimalSeparator", ".");
    Ar(this, "localeDigits", {});
    Ar(this, "trimZeroRegExp", new RegExp(""));
    this.logError = n, this.initFormatter(t);
  }
  updateCurrencyParams(t) {
    const n = this.parseFormat(this.rawValue) || 0;
    this.initFormatter(t);
    const o = n.toString().replace(".", this.decimalSeparator);
    this.applyChangeFrom(o);
  }
  initFormatter(t) {
    try {
      this.currencyFormatter = new Intl.NumberFormat(t, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }), this.decimalSeparator = this.currencyFormatter.format(0)[1], this.localeDigits = new Array(10).fill("").reduce((i, s, a) => (i[a] = this.currencyFormatter.format(a)[0], i), {});
      const o = Object.keys(this.localeDigits).filter((i) => i !== "0").map((i) => this.localeDigits[i]).join("|");
      this.trimZeroRegExp = new RegExp(`^${this.localeDigits[0]}+(?=${o})`);
    } catch (n) {
      this.onException(J(n, {
        level: "error",
        additional: {
          locale: t
        }
      }));
    }
  }
  invalidateMaskDataForFormatted(t) {
    const n = this.currencyFormatter.format(t), o = this.formatPattern(n), i = [{
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
  overrideRawValue(t) {
    const n = this.parseFormat(t) || 0;
    this.invalidateMaskDataForFormatted(n), super.overrideRawValue(t);
  }
  applyChangeFrom(t, n) {
    const o = as(this.value, t), i = this.value.lastIndexOf(this.decimalSeparator), s = t.lastIndexOf(this.decimalSeparator), a = i !== s || i === -1 && s === -1, l = this.validFormat(t, o);
    this.cleanup(o);
    const c = this.parseFormat(l) || 0;
    a && this.invalidateMaskDataForFormatted(c), this.replaceChars(l, 0), this.value.length > o.start && !this.isDigit(this.value[o.start]) ? this.cursorPos = n != null ? n : this.cursorPosition : this.cursorPos = Math.abs(this.value.length - (t.length - (n != null ? n : this.cursorPosition)));
  }
  parseFormat(t) {
    return parseFloat(
      t.replace(/./g, (n) => {
        const o = this.localeDigits[n];
        return o || (n === this.decimalSeparator ? "." : "");
      })
    );
  }
  formatPattern(t) {
    let n = "";
    for (const o of t)
      n += this.isDigit(o) ? "#" : o;
    return n;
  }
  validFormat(t, n) {
    if (!t)
      return "";
    let o = -1, i = 0;
    for (; i < t.length; ) {
      if (t[i] === this.decimalSeparator && !this.inDiff(n, i)) {
        o = i;
        break;
      }
      i++;
    }
    let s = -1;
    n.added === 1 && n.removed === 0 && [",", "."].includes(t[n.start]) && (s = n.start);
    const a = this.currencyFormatter.resolvedOptions().maximumFractionDigits || 0;
    let l = a;
    if (o !== -1)
      for (i = o; i < t.length; )
        this.isDigit(t[i]) && !this.inDiff(n, i) && l--, i++;
    else {
      let _ = !1;
      for (let h = 0; h < t.length; h++) {
        const m = t[h];
        m === this.decimalSeparator ? _ = !0 : !this.inDiff(n, h) && _ && this.isDigit(m) && l--;
      }
    }
    const c = t.includes(this.decimalSeparator) || s !== -1, u = [];
    i = t.length - 1;
    let f = !1;
    for (; i >= 0; ) {
      const _ = t[i], h = u.length <= a;
      this.isDigit(_) ? this.inDiff(n, i) && !f && c ? l > 0 && (u.push(_), l--) : u.push(_) : h && o === -1 && i === s ? (u.push(this.decimalSeparator), f = !0) : h && _ === this.decimalSeparator && (o === i || o === -1) && (u.push(this.decimalSeparator), f = !0, o = i), i--;
    }
    return u.reverse().join("").replace(this.trimZeroRegExp, "");
  }
  inDiff(t, n) {
    return t.start <= n && n < t.start + t.added;
  }
  isDigit(t) {
    return !!this.localeDigits[t];
  }
  onException(t) {
    this.logError(t);
  }
}
function E1(e, r, t) {
  return t ? (t.updateCurrencyParams(e.locale), t) : new C1(e.locale, r);
}
const A1 = {
  kotlin: {
    public_default_values: !0
  },
  swift: {
    public_default_values: !0
  }
}, S1 = {
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
}, V1 = "object", F1 = {
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
}, Rd = {
  codegen: A1,
  constants: S1,
  type: V1,
  properties: F1
}, I1 = "000000000000000", wu = "*", D1 = "00", ku = [{
  key: "0",
  filter: "\\d",
  placeholder: "_"
}];
class T1 extends ma {
  constructor(t) {
    super({
      pattern: ju(""),
      decoding: ku,
      alwaysVisible: !1
    });
    Ar(this, "decimalSeparator", ".");
    Ar(this, "localeDigits", {});
    Ar(this, "trimZeroRegExp", new RegExp(""));
    this.logError = t;
  }
  overrideRawValue(t) {
    this.tryInvalidateMaskDataWith(t), super.overrideRawValue(t);
  }
  applyChangeFrom(t, n) {
    const o = as(this.value, t);
    n !== void 0 && (o.start = Math.max(0, n - o.added));
    const i = this.rawValue, s = this.replaceBodyTail(o, t), a = this.rawValue, l = this.newMaskPatternFor(a);
    if (l == null) {
      this.calculateCursorPosition(o, s);
      return;
    }
    this.updateMaskDataWith(l), this.replaceChars(a, 0);
    const c = as(i, a), u = c.start + c.added;
    this.calculateCursorPositionBy(u);
  }
  calculateCursorPositionBy(t) {
    let n = 0, o = 0;
    for (; n < this.destructedValue.length && o < t; )
      this.destructedValue[n++] instanceof wo && o++;
    this.cursorPos = this.firstHolderAfter(n);
  }
  tryInvalidateMaskDataWith(t) {
    const n = this.newMaskPatternFor(t);
    n && this.updateMaskDataWith(n);
  }
  newMaskPatternFor(t) {
    const n = ju(t), o = this.maskData.pattern;
    return n !== o ? n : null;
  }
  updateMaskDataWith(t) {
    return this.updateMaskData({
      pattern: t,
      decoding: ku,
      alwaysVisible: this.maskData.alwaysVisible
    }, !1);
  }
  onException(t) {
    this.logError(t);
  }
}
function vu(e) {
  return "$ref" in e ? Rd.constants[e.$ref.split("/").pop()] : e;
}
function ju(e) {
  if (!e)
    return I1;
  let r = Rd.properties.value.default_value, t = 0;
  for (; !("value" in r); ) {
    if (t >= e.length) {
      r = vu(r[wu]);
      break;
    }
    const n = e[t++];
    r = vu(r[n in r ? n : wu]);
  }
  return r.value + D1;
}
function M1(e, r) {
  return r || new T1(e);
}
function P1(e) {
  let r, t;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function N1(e) {
  let r, t;
  return r = new wn({
    props: {
      alwaysCustomFocus: !0,
      cls: bt(
        "input",
        Bi,
        /*mods*/
        e[18]
      ),
      style: (
        /*stl*/
        e[17]
      ),
      customDescription: !0,
      customActions: "input",
      customPaddings: !0,
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: {
        default: [
          B1,
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
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      262144 && (i.cls = bt(
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function z1(e) {
  let r, t, n, o, i, s, a, l, c;
  return {
    c() {
      r = Me("input"), g(
        r,
        "type",
        /*inputType*/
        e[9]
      ), g(
        r,
        "inputmode",
        /*inputMode*/
        e[10]
      ), g(r, "class", t = bt("input__input", Bi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[123]
        ),
        singleline: !0
      })), g(r, "autocomplete", "off"), g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        e[12]
      ), g(
        r,
        "aria-label",
        /*description*/
        e[11]
      ), g(r, "aria-describedby", n = /*describedBy*/
      e[14] || void 0), g(r, "style", o = ar(
        /*paddingStl*/
        e[16]
      )), r.disabled = i = !/*isEnabled*/
      e[5], g(r, "maxlength", s = /*maxLength*/
      e[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        e[6]
      )), g(
        r,
        "placeholder",
        /*placeholder*/
        e[19]
      ), r.value = /*value*/
      e[3], g(r, "enterkeyhint", a = /*enterKeyType*/
      e[13] === "default" ? void 0 : (
        /*enterKeyType*/
        e[13]
      ));
    },
    m(u, f) {
      K(u, r, f), e[102](r), l || (c = [
        Ke(
          r,
          "input",
          /*onInput*/
          e[48]
        ),
        Ke(
          r,
          "keydown",
          /*onKeyDown*/
          e[49]
        ),
        Ke(r, "mousedown", function() {
          Nr(
            /*$jsonSelectAll*/
            e[46] ? (
              /*onMousedown*/
              e[50]
            ) : void 0
          ) && (e[46] ? (
            /*onMousedown*/
            e[50]
          ) : void 0).apply(this, arguments);
        }),
        Ke(r, "click", function() {
          Nr(
            /*$jsonSelectAll*/
            e[46] ? (
              /*onClick*/
              e[51]
            ) : void 0
          ) && (e[46] ? (
            /*onClick*/
            e[51]
          ) : void 0).apply(this, arguments);
        }),
        Ke(r, "focus", function() {
          Nr(
            /*focusHandler*/
            e[121]
          ) && e[121].apply(this, arguments);
        }),
        Ke(r, "blur", function() {
          Nr(
            /*blurHandler*/
            e[122]
          ) && e[122].apply(this, arguments);
        })
      ], l = !0);
    },
    p(u, f) {
      e = u, f[0] & /*inputType*/
      512 && g(
        r,
        "type",
        /*inputType*/
        e[9]
      ), f[0] & /*inputMode*/
      1024 && g(
        r,
        "inputmode",
        /*inputMode*/
        e[10]
      ), f[3] & /*hasCustomFocus*/
      1073741824 && t !== (t = bt("input__input", Bi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[123]
        ),
        singleline: !0
      })) && g(r, "class", t), f[0] & /*autocapitalization*/
      4096 && g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        e[12]
      ), f[0] & /*description*/
      2048 && g(
        r,
        "aria-label",
        /*description*/
        e[11]
      ), f[0] & /*describedBy*/
      16384 && n !== (n = /*describedBy*/
      e[14] || void 0) && g(r, "aria-describedby", n), f[0] & /*paddingStl*/
      65536 && o !== (o = ar(
        /*paddingStl*/
        e[16]
      )) && g(r, "style", o), f[0] & /*isEnabled*/
      32 && i !== (i = !/*isEnabled*/
      e[5]) && (r.disabled = i), f[0] & /*maxLength*/
      64 && s !== (s = /*maxLength*/
      e[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        e[6]
      )) && g(r, "maxlength", s), f[0] & /*placeholder*/
      524288 && g(
        r,
        "placeholder",
        /*placeholder*/
        e[19]
      ), f[0] & /*value*/
      8 && r.value !== /*value*/
      e[3] && (r.value = /*value*/
      e[3]), f[0] & /*enterKeyType*/
      8192 && a !== (a = /*enterKeyType*/
      e[13] === "default" ? void 0 : (
        /*enterKeyType*/
        e[13]
      )) && g(r, "enterkeyhint", a);
    },
    d(u) {
      u && q(r), e[102](null), l = !1, Ur(c);
    }
  };
}
function O1(e) {
  let r, t, n, o, i, s, a, l, c;
  return {
    c() {
      r = Me("textarea"), g(r, "class", t = bt("input__input", Bi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[123]
        ),
        multiline: !0
      })), g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        e[12]
      ), g(
        r,
        "aria-label",
        /*description*/
        e[11]
      ), g(r, "aria-describedby", n = /*describedBy*/
      e[14] || void 0), g(r, "enterkeyhint", o = /*enterKeyType*/
      e[13] === "default" ? void 0 : (
        /*enterKeyType*/
        e[13]
      )), g(r, "style", i = ar(
        /*paddingStl*/
        e[16]
      )), r.disabled = s = !/*isEnabled*/
      e[5], g(r, "maxlength", a = /*maxLength*/
      e[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        e[6]
      )), g(
        r,
        "placeholder",
        /*placeholder*/
        e[19]
      ), r.value = /*value*/
      e[3];
    },
    m(u, f) {
      K(u, r, f), e[101](r), l || (c = [
        Ke(
          r,
          "input",
          /*onInput*/
          e[48]
        ),
        Ke(
          r,
          "keydown",
          /*onKeyDown*/
          e[49]
        ),
        Ke(r, "mousedown", function() {
          Nr(
            /*$jsonSelectAll*/
            e[46] ? (
              /*onMousedown*/
              e[50]
            ) : void 0
          ) && (e[46] ? (
            /*onMousedown*/
            e[50]
          ) : void 0).apply(this, arguments);
        }),
        Ke(r, "click", function() {
          Nr(
            /*$jsonSelectAll*/
            e[46] ? (
              /*onClick*/
              e[51]
            ) : void 0
          ) && (e[46] ? (
            /*onClick*/
            e[51]
          ) : void 0).apply(this, arguments);
        }),
        Ke(r, "focus", function() {
          Nr(
            /*focusHandler*/
            e[121]
          ) && e[121].apply(this, arguments);
        }),
        Ke(r, "blur", function() {
          Nr(
            /*blurHandler*/
            e[122]
          ) && e[122].apply(this, arguments);
        })
      ], l = !0);
    },
    p(u, f) {
      e = u, f[3] & /*hasCustomFocus*/
      1073741824 && t !== (t = bt("input__input", Bi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[123]
        ),
        multiline: !0
      })) && g(r, "class", t), f[0] & /*autocapitalization*/
      4096 && g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        e[12]
      ), f[0] & /*description*/
      2048 && g(
        r,
        "aria-label",
        /*description*/
        e[11]
      ), f[0] & /*describedBy*/
      16384 && n !== (n = /*describedBy*/
      e[14] || void 0) && g(r, "aria-describedby", n), f[0] & /*enterKeyType*/
      8192 && o !== (o = /*enterKeyType*/
      e[13] === "default" ? void 0 : (
        /*enterKeyType*/
        e[13]
      )) && g(r, "enterkeyhint", o), f[0] & /*paddingStl*/
      65536 && i !== (i = ar(
        /*paddingStl*/
        e[16]
      )) && g(r, "style", i), f[0] & /*isEnabled*/
      32 && s !== (s = !/*isEnabled*/
      e[5]) && (r.disabled = s), f[0] & /*maxLength*/
      64 && a !== (a = /*maxLength*/
      e[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        e[6]
      )) && g(r, "maxlength", a), f[0] & /*placeholder*/
      524288 && g(
        r,
        "placeholder",
        /*placeholder*/
        e[19]
      ), f[0] & /*value*/
      8 && (r.value = /*value*/
      e[3]);
    },
    d(u) {
      u && q(r), e[101](null), l = !1, Ur(c);
    }
  };
}
function B1(e) {
  let r;
  function t(i, s) {
    return (
      /*isMultiline*/
      i[8] ? O1 : z1
    );
  }
  let n = t(e), o = n(e);
  return {
    c() {
      o.c(), r = xt();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = t(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && q(r), o.d(i);
    }
  };
}
function L1(e) {
  let r, t, n, o;
  const i = [N1, P1], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[4] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (t && (dr(), re(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (t = s[r], t ? t.p(l, c) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      re(t), o = !1;
    },
    d(l) {
      l && q(n), ~r && s[r].d(l);
    }
  };
}
const R1 = typeof document < "u" && "inputMode" in document.createElement("input"), Cu = {
  email: "email",
  number: "number",
  phone: "tel",
  single_line_text: "text",
  multi_line_text: "text",
  uri: "url",
  password: "password"
};
function H1(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, ee, ce, T, X, le, E, D, P, U, Z, be, Ae, Ee, _e, Ie, $, tt, Xe, qe, ve = C, De = () => (ve(), ve = S(s, (Je) => t(74, qe = Je)), s), ue, ke = C, de = () => (ke(), ke = S(a, (Je) => t(75, ue = Je)), a), x, fe = C, ie = () => (fe(), fe = S(Ae, (Je) => t(108, x = Je)), Ae), Fe, Ye = C, Ze = () => (Ye(), Ye = S(Z, (Je) => t(76, Fe = Je)), Z), te, He = C, Be = () => (He(), He = S(le, (Je) => t(77, te = Je)), le), it, st = C, lt = () => (st(), st = S(U, (Je) => t(78, it = Je)), U), kt, nt, Nt = C, ut = () => (Nt(), Nt = S(X, (Je) => t(80, nt = Je)), X), pe, ge = C, _t = () => (ge(), ge = S(T, (Je) => t(81, pe = Je)), T), Se, F = C, Ct = () => (F(), F = S(Ee, (Je) => t(82, Se = Je)), Ee), ft, St = C, Tt = () => (St(), St = S(ce, (Je) => t(83, ft = Je)), ce), $e, Y = C, At = () => (Y(), Y = S(ee, (Je) => t(84, $e = Je)), ee), Mt, Qt = C, Jt = () => (Qt(), Qt = S(P, (Je) => t(85, Mt = Je)), P), he, Le = C, pt = () => (Le(), Le = S(D, (Je) => t(86, he = Je)), D), ye, xe = C, Oe = () => (xe(), xe = S(L, (Je) => t(87, ye = Je)), L), er, ze = C, yt = () => (ze(), ze = S(R, (Je) => t(88, er = Je)), R), Ft, It = C, cr = () => (It(), It = S(N, (Je) => t(89, Ft = Je)), N), Pe, vt = C, nr = () => (vt(), vt = S(k, (Je) => t(90, Pe = Je)), k), $t, Xt = C, pr = () => (Xt(), Xt = S(w, (Je) => t(91, $t = Je)), w), kr, Pt = C, yr = () => (Pt(), Pt = S(p, (Je) => t(92, kr = Je)), p), G, dt = C, Ut = () => (dt(), dt = S(m, (Je) => t(93, G = Je)), m), jt, wr = C, Sr = () => (wr(), wr = S(h, (Je) => t(94, jt = Je)), h), hr, Ir = C, Gr = () => (Ir(), Ir = S(_, (Je) => t(95, hr = Je)), _), tr, rt = C, Et = () => (rt(), rt = S(f, (Je) => t(96, tr = Je)), f), Zt, Yt = C, ur = () => (Yt(), Yt = S(u, (Je) => t(97, Zt = Je)), u), at, ne = C, mt = () => (ne(), ne = S(c, (Je) => t(98, at = Je)), c), rr, mr = C, ir = () => (mr(), mr = S(l, (Je) => t(99, rr = Je)), l), v, oe = C, d = () => (oe(), oe = S(be, (Je) => t(100, v = Je)), be), z, Te = C, We = () => (Te(), Te = S(E, (Je) => t(46, z = Je)), E);
  e.$$.on_destroy.push(() => ve()), e.$$.on_destroy.push(() => ke()), e.$$.on_destroy.push(() => fe()), e.$$.on_destroy.push(() => Ye()), e.$$.on_destroy.push(() => He()), e.$$.on_destroy.push(() => st()), e.$$.on_destroy.push(() => Nt()), e.$$.on_destroy.push(() => ge()), e.$$.on_destroy.push(() => F()), e.$$.on_destroy.push(() => St()), e.$$.on_destroy.push(() => Y()), e.$$.on_destroy.push(() => Qt()), e.$$.on_destroy.push(() => Le()), e.$$.on_destroy.push(() => xe()), e.$$.on_destroy.push(() => ze()), e.$$.on_destroy.push(() => It()), e.$$.on_destroy.push(() => vt()), e.$$.on_destroy.push(() => Xt()), e.$$.on_destroy.push(() => Pt()), e.$$.on_destroy.push(() => dt()), e.$$.on_destroy.push(() => wr()), e.$$.on_destroy.push(() => Ir()), e.$$.on_destroy.push(() => rt()), e.$$.on_destroy.push(() => Yt()), e.$$.on_destroy.push(() => ne()), e.$$.on_destroy.push(() => mr()), e.$$.on_destroy.push(() => oe()), e.$$.on_destroy.push(() => Te());
  let { componentContext: we } = r, { layoutParams: O = void 0 } = r;
  const Dt = Tr(Zr), zt = Tr(To), Ue = Dt.direction;
  yn(e, Ue, (Je) => t(79, kt = Je));
  let ct, Gt, Fr = !1, br = null, zr = "", Vn = !1, Ce = "", qr = 12, Yr, hn = "", y = "", j, A = "", se = "#000", B = "", Qe = "start", Ve = "center", qt = "multi_line_text", Vt = "text", Ge, Kt = "", ht = null, Cr = "", Er = "", mn = "", en = !0, rn = 1 / 0, nn = "off", Cn = "default", Jn = "", Ln = !1, xn = !0, Wt = 0, b = 0;
  function V() {
    t(54, Ce = ""), t(55, qr = 12), t(56, Yr = void 0), t(57, hn = ""), t(58, y = ""), t(59, j = void 0), t(61, se = "#000"), t(62, B = ""), t(63, Qe = "left"), t(64, Ve = "center"), t(65, qt = "multi_line_text"), t(9, Vt = "text"), t(10, Ge = void 0), t(5, en = !0), t(6, rn = 1 / 0), t(12, nn = "off"), t(13, Cn = "default"), t(14, Jn = ""), Wt = 0, b = 0;
  }
  function Q(Je) {
    (Je == null ? void 0 : Je.type) === "fixed_length" ? t(53, br = j1(Je, we.logError, br)) : (Je == null ? void 0 : Je.type) === "currency" ? t(53, br = E1(Je, we.logError, br)) : (Je == null ? void 0 : Je.type) === "phone" && t(53, br = M1(we.logError, br)), br && no();
  }
  function M(Je) {
    if (!Array.isArray(x))
      return !0;
    for (const vr of x)
      if (vr) {
        if (vr.type === "regex")
          try {
            if (!new RegExp("^" + (vr.pattern || "") + "$").test(Je))
              return !1;
          } catch (an) {
            return we.logError(J(new Error("Failed to create a regex"), {
              additional: { originalError: String(an) }
            })), !0;
          }
        else if (vr.type === "expression" && !vr.condition)
          return !1;
      }
    return !0;
  }
  function je(Je) {
    const vr = Je.target;
    let an = vr.value || "";
    an === `
` && (an = ""), an.length > rn && (an = zr, vr instanceof HTMLInputElement && (vr.value = an)), zr !== an && (M(an) ? (t(3, zr = an), s.setValue(an), br && Co(), qn()) : (t(3, zr = an), vr instanceof HTMLInputElement && (vr.value = an), Sn().then(() => {
      Lr(Wt, b);
    })));
  }
  function me(Je) {
    if (Wt = Jr() || 0, b = Mr() || 0, Je.ctrlKey || Je.metaKey || Je.altKey || Je.shiftKey)
      return;
    const vr = we.json.enter_key_actions;
    Je.key === "Enter" && Array.isArray(vr) && vr.length && (Je.preventDefault(), we.execAnyActions(vr));
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
    Fr || Gt.select();
  }
  function Jr() {
    const Je = Gt;
    return Je.selectionStart === null ? void 0 : Je.selectionStart;
  }
  function Mr() {
    const Je = Gt;
    return Je.selectionEnd === null ? void 0 : Je.selectionEnd;
  }
  function Lr(Je, vr) {
    const an = Gt;
    an.selectionStart = Je, an.selectionEnd = vr;
  }
  async function Co() {
    if (!Gt || !br)
      return;
    const Je = Jr() || 0, vr = Mr() || 0;
    br.applyChangeFrom(zr, vr === Je ? vr : 0), a.set(br.rawValue), bl(s, qe = t(3, zr = br.value), qe);
    const an = br.cursorPosition;
    await Sn(), document.activeElement === Gt && Lr(an, an);
  }
  async function no() {
    if (!Gt || !br)
      return;
    br.overrideRawValue(ue), a.set(br.rawValue), bl(s, qe = t(3, zr = br.value), qe);
    const Je = br.cursorPosition;
    await Sn(), document.activeElement === Gt && Lr(Je, Je);
  }
  function qn() {
    const Je = xn;
    xn = !1;
    const vr = we.json.validators;
    if (!Array.isArray(vr) || !vr.length)
      return;
    const Ci = we.getJsonWithVars(vr).filter((gn) => (gn.type === "regex" || gn.type === "expression") && gn.label_id && gn.variable), Tn = [];
    Ci.forEach((gn) => {
      const mo = we.getVariable(gn.variable);
      if (!mo)
        return;
      if (mo.getType() !== "boolean") {
        Je && we.logError(J(new Error("Incorrect variable type for the validator"), {
          additional: { variable: gn.variable }
        }));
        return;
      }
      let si = !1;
      if (zr === "" && (gn.allow_empty === !0 || gn.allow_empty === 1))
        si = !0;
      else if (gn.type === "regex") {
        if (!gn.pattern || typeof gn.pattern != "string")
          return;
        try {
          si = new RegExp("^" + gn.pattern + "$").test(zr);
        } catch {
          Je && we.logError(J(new Error("Failed to create a regular expression using the validator pattern"), {
            additional: { pattern: gn.pattern }
          }));
          return;
        }
      } else if (gn.type === "expression")
        si = gn.condition === !0 || gn.condition === 1;
      else
        return;
      if (mo.setValue(si), !si) {
        const Ei = Dt.getComponentId(gn.label_id);
        Ei && Tn.push(Ei);
      }
    }), t(14, Jn = Tn.join(" "));
  }
  ro(() => {
    t(70, Ln = !0), Gt && br && ue && (br.overrideRawValue(ue), bl(s, qe = t(3, zr = br.value), qe));
  }), ln(() => {
    t(70, Ln = !1), ct && (Dt.unregisterFocusable(ct), t(52, ct = void 0));
  });
  function Fn(Je) {
    Dr[Je ? "unshift" : "push"](() => {
      Gt = Je, t(2, Gt);
    });
  }
  function qo(Je) {
    Dr[Je ? "unshift" : "push"](() => {
      Gt = Je, t(2, Gt);
    });
  }
  return e.$$set = (Je) => {
    "componentContext" in Je && t(0, we = Je.componentContext), "layoutParams" in Je && t(1, O = Je.layoutParams);
  }, e.$$.update = () => {
    var Je;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(73, n = we.origJson), e.$$.dirty[2] & /*origJson*/
    2048 && n && V(), e.$$.dirty[0] & /*componentContext*/
    1 && t(71, o = we.json.text_variable), e.$$.dirty[0] & /*componentContext*/
    1 && t(72, i = (Je = we.json.mask) == null ? void 0 : Je.raw_text_variable), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[2] & /*variable*/
    512 && De(t(7, s = o && (we.getVariable(o, "string") || Dt.awaitGlobalVariable(o, "string", "")) || so("temp", "string", ""))), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[2] & /*rawVariable*/
    1024 && de(t(15, a = i && (we.getVariable(i, "string") || Dt.awaitGlobalVariable(i, "string", "")) || so("temp", "string", ""))), e.$$.dirty[0] & /*componentContext*/
    1 && ir(t(45, l = we.getDerivedFromVars(we.json.hint_text))), e.$$.dirty[0] & /*componentContext*/
    1 && mt(t(44, c = we.getDerivedFromVars(we.json.hint_color))), e.$$.dirty[0] & /*componentContext*/
    1 && ur(t(43, u = we.getDerivedFromVars(we.json.font_size))), e.$$.dirty[0] & /*componentContext*/
    1 && Et(t(42, f = we.getDerivedFromVars(we.json.font_weight))), e.$$.dirty[0] & /*componentContext*/
    1 && Gr(t(41, _ = we.getDerivedFromVars(we.json.font_weight_value))), e.$$.dirty[0] & /*componentContext*/
    1 && Sr(t(40, h = we.getDerivedFromVars(we.json.font_family))), e.$$.dirty[0] & /*componentContext*/
    1 && Ut(t(39, m = we.getDerivedFromVars(we.json.font_variation_settings, void 0, !0, 0))), e.$$.dirty[0] & /*componentContext*/
    1 && yr(t(38, p = we.getDerivedFromVars(we.json.line_height))), e.$$.dirty[0] & /*componentContext*/
    1 && pr(t(37, w = we.getDerivedFromVars(we.json.letter_spacing))), e.$$.dirty[0] & /*componentContext*/
    1 && nr(t(36, k = we.getDerivedFromVars(we.json.text_color))), e.$$.dirty[0] & /*componentContext*/
    1 && cr(t(35, N = we.getDerivedFromVars(we.json.highlight_color))), e.$$.dirty[0] & /*componentContext*/
    1 && yt(t(34, R = we.getDerivedFromVars(we.json.text_alignment_horizontal))), e.$$.dirty[0] & /*componentContext*/
    1 && Oe(t(33, L = we.getDerivedFromVars(we.json.text_alignment_vertical))), e.$$.dirty[0] & /*componentContext*/
    1 && At(t(32, ee = we.getDerivedFromVars(we.json.keyboard_type))), e.$$.dirty[0] & /*componentContext*/
    1 && Tt(t(31, ce = we.getDerivedFromVars(we.json.mask))), e.$$.dirty[0] & /*componentContext*/
    1 && _t(t(30, T = we.getDerivedFromVars(we.json.max_visible_lines))), e.$$.dirty[0] & /*componentContext*/
    1 && ut(t(29, X = we.getDerivedFromVars(we.json.paddings))), e.$$.dirty[0] & /*componentContext*/
    1 && Be(t(28, le = we.getDerivedFromVars(we.json.accessibility))), e.$$.dirty[0] & /*componentContext*/
    1 && We(t(27, E = we.getDerivedFromVars(we.json.select_all_on_focus))), e.$$.dirty[0] & /*componentContext*/
    1 && pt(t(26, D = we.getDerivedFromVars(we.json.is_enabled))), e.$$.dirty[0] & /*componentContext*/
    1 && Jt(t(25, P = we.getDerivedFromVars(we.json.max_length))), e.$$.dirty[0] & /*componentContext*/
    1 && lt(t(24, U = we.getDerivedFromVars(we.json.autocapitalization))), e.$$.dirty[0] & /*componentContext*/
    1 && Ze(t(23, Z = we.getDerivedFromVars(we.json.enter_key_type))), e.$$.dirty[0] & /*componentContext*/
    1 && d(t(22, be = we.getDerivedFromVars(we.json.validators))), e.$$.dirty[0] & /*componentContext*/
    1 && ie(t(21, Ae = we.getDerivedFromVars(we.json.filters))), e.$$.dirty[0] & /*componentContext*/
    1 && Ct(t(20, Ee = we.getDerivedFromVars(we.json.max_input_height))), e.$$.dirty[0] & /*componentContext, hasError*/
    17 | e.$$.dirty[2] & /*variable, $jsonAccessibility*/
    33280) {
      let vr = !1;
      o ? (zt.hasAction() || (te == null ? void 0 : te.mode) === "exclude") && (vr = !0, we.logError(J(new Error('Cannot show "input" inside component with an action or inside accessibility mode=exclude')))) : (t(4, Vn = !0), we.logError(J(new Error('Missing "text_variable" in "input"')))), Vn !== vr && t(4, Vn = vr);
    }
    if (e.$$.dirty[2] & /*$jsonMask*/
    2097152 && Q(ft), e.$$.dirty[0] & /*maxLength*/
    64 | e.$$.dirty[2] & /*$jsonMaxLength*/
    8388608 && t(6, rn = Un(Mt, rn)), e.$$.dirty[0] & /*value, maxLength, valueVariable*/
    200 | e.$$.dirty[1] & /*inputMask*/
    4194304 | e.$$.dirty[2] & /*$valueVariable*/
    4096 && !br && zr !== qe) {
      let vr = qe;
      vr.length > rn && (vr = vr.slice(0, rn), s.setValue(vr)), t(3, zr = vr), qn();
    }
    if (e.$$.dirty[1] & /*inputMask*/
    4194304 | e.$$.dirty[2] & /*$rawValueVariable*/
    8192 && br && br.rawValue !== ue && (no(), qn()), e.$$.dirty[2] & /*mounted*/
    256 | e.$$.dirty[3] & /*$jsonValidators*/
    128 && v && Ln && qn(), e.$$.dirty[3] & /*$jsonHintText*/
    64 && t(19, _e = rr), e.$$.dirty[1] & /*hintColor*/
    8388608 | e.$$.dirty[3] & /*$jsonHintColor*/
    32 && t(54, Ce = fr(at, 1, Ce)), e.$$.dirty[1] & /*fontSize*/
    16777216 | e.$$.dirty[3] & /*$jsonFontSize*/
    16 && t(55, qr = Un(Zt, qr)), e.$$.dirty[1] & /*fontWeight*/
    33554432 | e.$$.dirty[3] & /*$jsonFontWeight, $jsonFontWeightValue, $jsonFontFamily*/
    14 && (t(56, Yr = hi(tr, hr, Yr)), jt && typeof jt == "string" ? t(57, hn = Dt.typefaceProvider(jt, { fontWeight: Yr || 400 })) : t(57, hn = "")), e.$$.dirty[1] & /*fontVariationSettings*/
    134217728 | e.$$.dirty[3] & /*$jsonFontVariationSettings*/
    1) {
      const vr = Oi(G);
      vr !== y && t(58, y = vr);
    }
    if (e.$$.dirty[1] & /*fontSize*/
    16777216 | e.$$.dirty[2] & /*$jsonLineHeight*/
    1073741824) {
      const vr = kr;
      Bn(vr) && t(59, j = vr / qr);
    }
    e.$$.dirty[2] & /*$jsonLetterSpacing*/
    536870912 && ll($t) && t(60, A = ae($t)), e.$$.dirty[1] & /*textColor*/
    1073741824 | e.$$.dirty[2] & /*$jsonTextColor*/
    268435456 && t(61, se = fr(Pe, 1, se)), e.$$.dirty[2] & /*$jsonHighlightColor, highlightColor*/
    134217729 && t(62, B = fr(Ft, 1, B)), e.$$.dirty[2] & /*$jsonAlignmentHorizontal, $direction, alignmentHorizontal*/
    67239938 && t(63, Qe = cl(er, kt, Qe)), e.$$.dirty[2] & /*$jsonAlignmentVertical, alignmentVertical*/
    33554436 && t(64, Ve = ul(ye, Ve)), e.$$.dirty[0] & /*isEnabled*/
    32 | e.$$.dirty[2] & /*$jsonIsEnabled*/
    16777216 && t(5, en = fn(he, en)), e.$$.dirty[2] & /*$jsonKeyboardType, $jsonMask, keyboardType*/
    6291464 && ($e && $e in Cu && (t(9, Vt = Cu[$e]), t(65, qt = $e)), (ft == null ? void 0 : ft.type) === "currency" ? (t(9, Vt = R1 ? "text" : "tel"), t(10, Ge = "decimal")) : qt === "number" ? t(10, Ge = "decimal") : t(10, Ge = void 0)), e.$$.dirty[2] & /*keyboardType*/
    8 && t(8, Ie = qt === "multi_line_text"), e.$$.dirty[1] & /*lineHeight, fontSize*/
    285212672 | e.$$.dirty[2] & /*$jsonMaxInputHeight, $jsonVisibleMaxLines, $jsonPaddings, selfPadding, $direction*/
    1966112 && (Bn(Se) ? t(66, Kt = on(Se)) : Bn(pe) ? t(66, Kt = `calc(${pe * (j || 1.25) * (qr / 10) + "em"} + ${on($r(nt == null ? void 0 : nt.top, 0) + $r(nt == null ? void 0 : nt.bottom, 0))})`) : t(66, Kt = ""), t(67, ht = gi(nt || void 0, ht)), t(68, Cr = ht ? po(
      {
        top: (Number(ht.top) || 0) / qr * 10,
        right: (Number(kt === "ltr" ? ht.end : ht.start) || Number(ht.right) || 0) / qr * 10,
        bottom: (Number(ht.bottom) || 0) / qr * 10,
        left: (Number(kt === "ltr" ? ht.start : ht.end) || Number(ht.left) || 0) / qr * 10
      },
      kt
    ) : ""), t(69, Er = ht ? po(
      {
        top: (Number(ht.top) || 0) / qr * 10,
        bottom: (Number(ht.bottom) || 0) / qr * 10
      },
      kt
    ) : "")), e.$$.dirty[2] & /*$jsonAutocapitalization*/
    65536 && (it === "all_characters" ? t(12, nn = "characters") : it === "sentences" ? t(12, nn = "sentences") : it === "words" ? t(12, nn = "words") : (it === "none" || it === "auto") && t(12, nn = "off")), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[2] & /*$jsonAccessibility*/
    32768 && (te != null && te.description ? t(11, mn = $o(te)) : we.logError(J(new Error('Missing accessibility "description" for input'), { level: "warn" }))), e.$$.dirty[2] & /*$jsonEnterKeyType*/
    16384 && (Fe === "default" || Fe === "done" || Fe === "go" || Fe === "search" || Fe === "send") && t(13, Cn = Fe), e.$$.dirty[0] & /*isMultiline*/
    256 | e.$$.dirty[2] & /*highlightColor, alignmentHorizontal, alignmentVertical*/
    7 && t(18, $ = {
      "highlight-color": !!B,
      multiline: Ie,
      "alignment-horizontal": Qe,
      "alignment-vertical": Ve
    }), e.$$.dirty[1] & /*hintColor, lineHeight, fontWeight, fontFamily, fontVariationSettings, letterSpacing, textColor*/
    2122317824 | e.$$.dirty[2] & /*highlightColor, maxHeight*/
    17 && t(17, tt = {
      "--divkit-input-hint-color": Ce,
      "--divkit-input-highlight-color": B,
      "--divkit-input-line-height": j,
      "font-weight": Yr,
      "font-family": hn,
      "font-variation-settings": y,
      "letter-spacing": A,
      color: se,
      "max-height": Kt
    }), e.$$.dirty[1] & /*fontSize*/
    16777216 | e.$$.dirty[2] & /*padding*/
    64 && t(16, Xe = { "font-size": ae(qr), padding: Cr }), e.$$.dirty[1] & /*fontSize*/
    16777216 | e.$$.dirty[2] & /*verticalPadding*/
    128, e.$$.dirty[0] & /*input, componentContext, value*/
    13 | e.$$.dirty[1] & /*prevId*/
    2097152 && Gt && we.json && (ct && (Dt.unregisterFocusable(ct), t(52, ct = void 0)), we.id && !we.fakeElement && (t(52, ct = we.id), Dt.registerFocusable(ct, {
      focus() {
        Gt && (Gt.focus(), Lr(zr.length, zr.length));
      }
    })));
  }, [
    we,
    O,
    Gt,
    zr,
    Vn,
    en,
    rn,
    s,
    Ie,
    Vt,
    Ge,
    mn,
    nn,
    Cn,
    Jn,
    a,
    Xe,
    tt,
    $,
    _e,
    Ee,
    Ae,
    be,
    Z,
    U,
    P,
    D,
    E,
    le,
    X,
    T,
    ce,
    ee,
    L,
    R,
    N,
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
    z,
    Ue,
    je,
    me,
    Ot,
    Bt,
    ct,
    br,
    Ce,
    qr,
    Yr,
    hn,
    y,
    j,
    A,
    se,
    B,
    Qe,
    Ve,
    qt,
    Kt,
    ht,
    Cr,
    Er,
    Ln,
    o,
    i,
    n,
    qe,
    ue,
    Fe,
    te,
    it,
    kt,
    nt,
    pe,
    Se,
    ft,
    $e,
    Mt,
    he,
    ye,
    er,
    Ft,
    Pe,
    $t,
    kr,
    G,
    jt,
    hr,
    tr,
    Zt,
    at,
    rr,
    v,
    Fn,
    qo
  ];
}
class W1 extends Br {
  constructor(r) {
    super(), Or(this, r, H1, L1, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1, -1]);
  }
}
const U1 = "appkit-select", G1 = "appkit-select_hint", J1 = "appkit-select__select", q1 = "appkit-select__option", Pi = {
  select: U1,
  "select__select-text": "appkit-select__select-text",
  select_hint: G1,
  select__select: J1,
  "select__select_has-custom-focused": "appkit-select__select_has-custom-focused",
  "has-custom-focused": "appkit-has-custom-focused",
  select__option: q1
};
function Eu(e, r, t) {
  const n = e.slice();
  return n[62] = r[t], n;
}
function Y1(e) {
  let r, t;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function K1(e) {
  let r, t;
  return r = new wn({
    props: {
      cls: bt(
        "select",
        Pi,
        /*mods*/
        e[11]
      ),
      style: (
        /*stl*/
        e[10]
      ),
      customDescription: !0,
      customActions: "select",
      customPaddings: !0,
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: {
        default: [
          X1,
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
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = bt(
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Au(e) {
  let r, t = (
    /*item*/
    (e[62].text || /*item*/
    e[62].value) + ""
  ), n, o;
  return {
    c() {
      r = Me("option"), n = Gn(t), g(r, "class", Pi.select__option), r.__value = o = /*item*/
      e[62].value, Va(r, r.__value);
    },
    m(i, s) {
      K(i, r, s), wt(r, n);
    },
    p(i, s) {
      s[0] & /*filteredItems*/
      32 && t !== (t = /*item*/
      (i[62].text || /*item*/
      i[62].value) + "") && to(n, t), s[0] & /*filteredItems*/
      32 && o !== (o = /*item*/
      i[62].value) && (r.__value = o, Va(r, r.__value));
    },
    d(i) {
      i && q(r);
    }
  };
}
function X1(e) {
  let r, t = (
    /*selectText*/
    (e[4] || /*$jsonHintText*/
    e[25] || "​") + ""
  ), n, o, i, s, a, l, c, u, f = or(
    /*filteredItems*/
    e[5]
  ), _ = [];
  for (let h = 0; h < f.length; h += 1)
    _[h] = Au(Eu(e, f, h));
  return {
    c() {
      r = Me("span"), n = Gn(t), i = gr(), s = Me("select");
      for (let h = 0; h < _.length; h += 1)
        _[h].c();
      g(r, "class", Pi["select__select-text"]), g(r, "style", o = ar(
        /*innerStl*/
        e[9]
      )), g(r, "aria-hidden", "true"), g(s, "class", a = bt("select__select", Pi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[59]
        )
      })), g(
        s,
        "aria-label",
        /*description*/
        e[7]
      ), g(s, "style", l = ar(
        /*selectStl*/
        e[8]
      )), /*$valueVariable*/
      e[6] === void 0 && fo(() => (
        /*select_1_change_handler*/
        e[55].call(s)
      ));
    },
    m(h, m) {
      K(h, r, m), wt(r, n), K(h, i, m), K(h, s, m);
      for (let p = 0; p < _.length; p += 1)
        _[p] && _[p].m(s, null);
      e[54](s), Fa(
        s,
        /*$valueVariable*/
        e[6],
        !0
      ), c || (u = [
        Ke(
          s,
          "change",
          /*select_1_change_handler*/
          e[55]
        ),
        Ke(s, "focus", function() {
          Nr(
            /*focusHandler*/
            e[60]
          ) && e[60].apply(this, arguments);
        }),
        Ke(s, "blur", function() {
          Nr(
            /*blurHandler*/
            e[61]
          ) && e[61].apply(this, arguments);
        })
      ], c = !0);
    },
    p(h, m) {
      if (e = h, m[0] & /*selectText, $jsonHintText*/
      33554448 && t !== (t = /*selectText*/
      (e[4] || /*$jsonHintText*/
      e[25] || "​") + "") && to(n, t), m[0] & /*innerStl*/
      512 && o !== (o = ar(
        /*innerStl*/
        e[9]
      )) && g(r, "style", o), m[0] & /*filteredItems*/
      32) {
        f = or(
          /*filteredItems*/
          e[5]
        );
        let p;
        for (p = 0; p < f.length; p += 1) {
          const w = Eu(e, f, p);
          _[p] ? _[p].p(w, m) : (_[p] = Au(w), _[p].c(), _[p].m(s, null));
        }
        for (; p < _.length; p += 1)
          _[p].d(1);
        _.length = f.length;
      }
      m[1] & /*hasCustomFocus*/
      268435456 && a !== (a = bt("select__select", Pi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[59]
        )
      })) && g(s, "class", a), m[0] & /*description*/
      128 && g(
        s,
        "aria-label",
        /*description*/
        e[7]
      ), m[0] & /*selectStl*/
      256 && l !== (l = ar(
        /*selectStl*/
        e[8]
      )) && g(s, "style", l), m[0] & /*$valueVariable, filteredItems*/
      96 && Fa(
        s,
        /*$valueVariable*/
        e[6]
      );
    },
    d(h) {
      h && (q(r), q(i), q(s)), sn(_, h), e[54](null), c = !1, Ur(u);
    }
  };
}
function Z1(e) {
  let r, t, n, o;
  const i = [K1, Y1], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (t && (dr(), re(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (t = s[r], t ? t.p(l, c) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      re(t), o = !1;
    },
    d(l) {
      l && q(n), ~r && s[r].d(l);
    }
  };
}
function Q1(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, ee, ce, T, X, le = C, E = () => (le(), le = S(R, (Pe) => t(42, X = Pe)), R), D, P = C, U = () => (P(), P = S(N, (Pe) => t(43, D = Pe)), N), Z, be = C, Ae = () => (be(), be = S(k, (Pe) => t(44, Z = Pe)), k), Ee, _e = C, Ie = () => (_e(), _e = S(w, (Pe) => t(45, Ee = Pe)), w), $, tt = C, Xe = () => (tt(), tt = S(p, (Pe) => t(46, $ = Pe)), p), qe, ve = C, De = () => (ve(), ve = S(m, (Pe) => t(47, qe = Pe)), m), ue, ke = C, de = () => (ke(), ke = S(h, (Pe) => t(48, ue = Pe)), h), x, fe = C, ie = () => (fe(), fe = S(_, (Pe) => t(49, x = Pe)), _), Fe, Ye = C, Ze = () => (Ye(), Ye = S(f, (Pe) => t(50, Fe = Pe)), f), te, He = C, Be = () => (He(), He = S(u, (Pe) => t(51, te = Pe)), u), it, st, lt = C, kt = () => (lt(), lt = S(l, (Pe) => t(53, st = Pe)), l), nt, Nt = C, ut = () => (Nt(), Nt = S(a, (Pe) => t(6, nt = Pe)), a), pe, ge = C, _t = () => (ge(), ge = S(c, (Pe) => t(25, pe = Pe)), c);
  e.$$.on_destroy.push(() => le()), e.$$.on_destroy.push(() => P()), e.$$.on_destroy.push(() => be()), e.$$.on_destroy.push(() => _e()), e.$$.on_destroy.push(() => tt()), e.$$.on_destroy.push(() => ve()), e.$$.on_destroy.push(() => ke()), e.$$.on_destroy.push(() => fe()), e.$$.on_destroy.push(() => Ye()), e.$$.on_destroy.push(() => He()), e.$$.on_destroy.push(() => lt()), e.$$.on_destroy.push(() => Nt()), e.$$.on_destroy.push(() => ge());
  let { componentContext: Se } = r, { layoutParams: F = void 0 } = r;
  const Ct = Tr(Zr), ft = Tr(To), St = Ct.direction;
  yn(e, St, (Pe) => t(52, it = Pe));
  let Tt, $e, Y = !1, At = "", Mt = null, Qt = "", Jt = "rgba(0,0,0,.45)", he = 12, Le, pt = "", ye = "", xe, Oe = "", er = "#000", ze = "", yt;
  function Ft() {
    t(28, Mt = null), t(30, Jt = "rgba(0,0,0,.45)"), t(31, he = 12), t(32, Le = void 0), t(33, pt = ""), t(34, ye = ""), t(35, xe = void 0), t(36, Oe = ""), t(37, er = "#000"), t(7, ze = "");
  }
  ln(() => {
    Tt && (Ct.unregisterFocusable(Tt), t(27, Tt = void 0));
  });
  function It(Pe) {
    Dr[Pe ? "unshift" : "push"](() => {
      $e = Pe, t(2, $e);
    });
  }
  function cr() {
    nt = k_(this), a.set(nt), t(5, s), t(40, i), t(0, Se);
  }
  return e.$$set = (Pe) => {
    "componentContext" in Pe && t(0, Se = Pe.componentContext), "layoutParams" in Pe && t(1, F = Pe.layoutParams);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(41, n = Se.origJson), e.$$.dirty[1] & /*origJson*/
    1024 && n && Ft(), e.$$.dirty[0] & /*componentContext*/
    1 && t(39, o = Se.json.value_variable), e.$$.dirty[0] & /*componentContext*/
    1 && t(40, i = Se.json.options), e.$$.dirty[1] & /*items*/
    512 && t(5, s = Array.isArray(i) && i.filter((Pe) => typeof Pe.value == "string") || []), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*variable*/
    256 && ut(t(24, a = o && (Se.getVariable(o, "string") || Ct.awaitGlobalVariable(o, "string", "")) || so("temp", "string", ""))), e.$$.dirty[0] & /*componentContext*/
    1 && kt(t(23, l = Se.getDerivedFromVars(Se.json.paddings))), e.$$.dirty[0] & /*componentContext*/
    1 && _t(t(22, c = Se.getDerivedFromVars(Se.json.hint_text))), e.$$.dirty[0] & /*componentContext*/
    1 && Be(t(21, u = Se.getDerivedFromVars(Se.json.hint_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Ze(t(20, f = Se.getDerivedFromVars(Se.json.font_size))), e.$$.dirty[0] & /*componentContext*/
    1 && ie(t(19, _ = Se.getDerivedFromVars(Se.json.font_weight))), e.$$.dirty[0] & /*componentContext*/
    1 && de(t(18, h = Se.getDerivedFromVars(Se.json.font_weight_value))), e.$$.dirty[0] & /*componentContext*/
    1 && De(t(17, m = Se.getDerivedFromVars(Se.json.font_family))), e.$$.dirty[0] & /*componentContext*/
    1 && Xe(t(16, p = Se.getDerivedFromVars(Se.json.font_variation_settings, void 0, !0, 0))), e.$$.dirty[0] & /*componentContext*/
    1 && Ie(t(15, w = Se.getDerivedFromVars(Se.json.line_height))), e.$$.dirty[0] & /*componentContext*/
    1 && Ae(t(14, k = Se.getDerivedFromVars(Se.json.letter_spacing))), e.$$.dirty[0] & /*componentContext*/
    1 && U(t(13, N = Se.getDerivedFromVars(Se.json.text_color))), e.$$.dirty[0] & /*componentContext*/
    1 && E(t(12, R = Se.getDerivedFromVars(Se.json.accessibility))), e.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || Se.logError(J(new Error('Empty selection "items" in "select"')))), e.$$.dirty[0] & /*componentContext, hasError*/
    9 | e.$$.dirty[1] & /*variable, $jsonAccessibility*/
    2304) {
      let Pe = !1;
      o ? (ft.hasAction() || (X == null ? void 0 : X.mode) === "exclude") && (Pe = !0, Se.logError(J(new Error('Cannot show "select" inside component with an action or inside accessibility mode=exclude')))) : (t(3, Y = !0), Se.logError(J(new Error('Missing "value_variable" in "select"')))), Y !== Pe && t(3, Y = Pe);
    }
    if (e.$$.dirty[0] & /*filteredItems, $valueVariable, componentContext*/
    97 | e.$$.dirty[1] & /*prevWarnValue*/
    128) {
      const Pe = s.find((vt) => vt.value === nt);
      Pe ? t(4, At = (typeof Pe.text == "string" ? Pe.text : Pe.value) || "") : (t(4, At = ""), nt && yt !== nt && (t(38, yt = nt), Se.logError(J(new Error('Value from the variable was not found in the selection items for "select"')))));
    }
    if (e.$$.dirty[1] & /*$jsonFontSize, fontSize*/
    524289 && t(31, he = Un(Fe, he)), e.$$.dirty[0] & /*selfPadding*/
    268435456 | e.$$.dirty[1] & /*$jsonPaddings, fontSize, $direction*/
    6291457 && (t(28, Mt = gi(st || void 0, Mt)), t(29, Qt = Mt ? po(
      {
        top: (Number(Mt.top) || 0) / he * 10,
        right: (Number(it === "ltr" ? Mt.end : Mt.start) || Number(Mt.right) || 0) / he * 10,
        bottom: (Number(Mt.bottom) || 0) / he * 10,
        left: (Number(it === "ltr" ? Mt.start : Mt.end) || Number(Mt.left) || 0) / he * 10
      },
      it
    ) : "")), e.$$.dirty[0] & /*hintColor*/
    1073741824 | e.$$.dirty[1] & /*$jsonHintColor*/
    1048576 && t(30, Jt = fr(te, 1, Jt)), e.$$.dirty[1] & /*$jsonFontWeight, $jsonFontWeightValue, fontWeight, $jsonFontFamily*/
    458754 && (t(32, Le = hi(x, ue, Le)), qe && typeof qe == "string" ? t(33, pt = Ct.typefaceProvider(qe, { fontWeight: Le || 400 })) : t(33, pt = "")), e.$$.dirty[1] & /*$jsonFontVariationSettings, fontVariationSettings*/
    32776) {
      const Pe = Oi($);
      Pe !== ye && t(34, ye = Pe);
    }
    if (e.$$.dirty[1] & /*$jsonLineHeight, fontSize*/
    16385) {
      const Pe = Ee;
      Bn(Pe) && t(35, xe = Pe / he);
    }
    e.$$.dirty[1] & /*$jsonLetterSpacing, fontSize*/
    8193 && ll(Z) && t(36, Oe = ae(Z / he * 10)), e.$$.dirty[1] & /*$jsonTextColor, textColor*/
    4160 && t(37, er = fr(D, 1, er)), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*$jsonAccessibility*/
    2048 && (X != null && X.description ? t(7, ze = $o(X)) : Se.logError(J(new Error('Missing accessibility "description" for select'), { level: "warn" }))), e.$$.dirty[0] & /*selectText*/
    16 && t(11, L = { hint: !At }), e.$$.dirty[0] & /*hintColor*/
    1073741824 | e.$$.dirty[1] & /*fontWeight, fontFamily, fontVariationSettings, textColor*/
    78 && t(10, ee = {
      "--divkit-input-hint-color": Jt,
      "font-weight": Le,
      "font-family": pt,
      "font-variation-settings": ye,
      color: er
    }), e.$$.dirty[0] & /*padding*/
    536870912 | e.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && t(9, ce = {
      padding: Qt,
      "font-size": ae(he),
      "line-height": xe,
      "letter-spacing": Oe
    }), e.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && t(8, T = {
      "font-size": ae(he),
      "line-height": xe,
      "letter-spacing": Oe
    }), e.$$.dirty[0] & /*componentContext, select, prevId*/
    134217733 && Se.json && $e && (Tt && (Ct.unregisterFocusable(Tt), t(27, Tt = void 0)), Se.id && !Se.fakeElement && (t(27, Tt = Se.id), Ct.registerFocusable(Tt, {
      focus() {
        $e && $e.focus();
      }
    })));
  }, [
    Se,
    F,
    $e,
    Y,
    At,
    s,
    nt,
    ze,
    T,
    ce,
    ee,
    L,
    R,
    N,
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
    pe,
    St,
    Tt,
    Mt,
    Qt,
    Jt,
    he,
    Le,
    pt,
    ye,
    xe,
    Oe,
    er,
    yt,
    o,
    i,
    n,
    X,
    D,
    Z,
    Ee,
    $,
    qe,
    ue,
    x,
    Fe,
    te,
    it,
    st,
    It,
    cr
  ];
}
class x1 extends Br {
  constructor(r) {
    super(), Or(this, r, Q1, Z1, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const $1 = "appkit-video__video", eb = "appkit-video__container", tb = "appkit-video_absolute", wi = {
  video__video: $1,
  video__container: eb,
  "video__aspect-wrapper": "appkit-video__aspect-wrapper",
  video_absolute: tb
};
function rb(e, r) {
  return Array.isArray(e) && e.length ? e.filter((t) => (t == null ? void 0 : t.type) === "video_source" && typeof t.url == "string" && typeof t.mime_type == "string").map((t) => {
    const n = {
      src: t.url
    };
    return t.mime_type && (n.type = t.mime_type), n;
  }) : r;
}
function nb(e) {
  return e === "fill" ? "cover" : e === "no_scale" ? "none" : "contain";
}
function Su(e, r, t) {
  const n = e.slice();
  return n[60] = r[t], n;
}
function Vu(e, r, t) {
  const n = e.slice();
  return n[60] = r[t], n;
}
function ob(e) {
  let r, t;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function ib(e) {
  let r, t;
  return r = new wn({
    props: {
      cls: bt(
        "video",
        wi,
        /*mods*/
        e[15]
      ),
      customActions: "video",
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      heightByAspect: (
        /*aspectPaddingBottom*/
        e[11] !== "0"
      ),
      $$slots: { default: [fb] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = bt(
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function sb(e) {
  let r, t, n, o, i, s = or(
    /*sources*/
    e[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = Iu(Su(e, s, l));
  return {
    c() {
      r = Me("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      g(r, "class", wi.video__video), g(r, "style", t = ar(
        /*style*/
        e[14]
      )), r.playsInline = !0, r.loop = /*loop*/
      e[5], r.autoplay = /*autoplay*/
      e[6], r.muted = /*muted*/
      e[7], g(
        r,
        "poster",
        /*poster*/
        e[9]
      ), g(r, "preload", n = /*preload*/
      e[8] ? "metadata" : "auto");
    },
    m(l, c) {
      K(l, r, c);
      for (let u = 0; u < a.length; u += 1)
        a[u] && a[u].m(r, null);
      e[52](r), o || (i = [
        Ke(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          e[26]
        ),
        Ke(
          r,
          "ended",
          /*onEnd*/
          e[27]
        ),
        Ke(
          r,
          "playing",
          /*onPlaying*/
          e[28]
        ),
        Ke(
          r,
          "pause",
          /*onPause*/
          e[29]
        ),
        Ke(
          r,
          "waiting",
          /*onWaiting*/
          e[30]
        ),
        Ke(
          r,
          "error",
          /*onError*/
          e[31]
        )
      ], o = !0);
    },
    p(l, c) {
      if (c[0] & /*sources*/
      16 | c[1] & /*onError*/
      1) {
        s = or(
          /*sources*/
          l[4]
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const f = Su(l, s, u);
          a[u] ? a[u].p(f, c) : (a[u] = Iu(f), a[u].c(), a[u].m(r, null));
        }
        for (; u < a.length; u += 1)
          a[u].d(1);
        a.length = s.length;
      }
      c[0] & /*style*/
      16384 && t !== (t = ar(
        /*style*/
        l[14]
      )) && g(r, "style", t), c[0] & /*loop*/
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
      l && q(r), sn(a, l), e[52](null), o = !1, Ur(i);
    }
  };
}
function lb(e) {
  let r;
  return {
    c() {
      r = Me("div"), g(r, "class", wi.video__container);
    },
    m(t, n) {
      K(t, r, n), r.innerHTML = /*providedVideoTemplate*/
      e[12], e[51](r);
    },
    p(t, n) {
      n[0] & /*providedVideoTemplate*/
      4096 && (r.innerHTML = /*providedVideoTemplate*/
      t[12]);
    },
    d(t) {
      t && q(r), e[51](null);
    }
  };
}
function ab(e) {
  let r, t = `${/*aspectPaddingBottom*/
  e[11]}%`;
  function n(s, a) {
    return (
      /*shouldUseVideoProvider*/
      s[13] ? ub : cb
    );
  }
  let o = n(e), i = o(e);
  return {
    c() {
      r = Me("div"), i.c(), g(r, "class", wi["video__aspect-wrapper"]), I(r, "padding-bottom", t);
    },
    m(s, a) {
      K(s, r, a), i.m(r, null);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, null))), a[0] & /*aspectPaddingBottom*/
      2048 && t !== (t = `${/*aspectPaddingBottom*/
      s[11]}%`) && I(r, "padding-bottom", t);
    },
    d(s) {
      s && q(r), i.d();
    }
  };
}
function Fu(e) {
  let r, t, n, o, i;
  return {
    c() {
      r = Me("source"), Xn(r.src, t = /*source*/
      e[60].src) || g(r, "src", t), g(r, "type", n = /*source*/
      e[60].type);
    },
    m(s, a) {
      K(s, r, a), o || (i = Ke(
        r,
        "error",
        /*onError*/
        e[31]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*sources*/
      16 && !Xn(r.src, t = /*source*/
      s[60].src) && g(r, "src", t), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && g(r, "type", n);
    },
    d(s) {
      s && q(r), o = !1, i();
    }
  };
}
function Iu(e) {
  let r = (
    /*source*/
    e[60]
  ), t, n = Fu(e);
  return {
    c() {
      n.c(), t = xt();
    },
    m(o, i) {
      n.m(o, i), K(o, t, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Vr(r, r = /*source*/
      o[60]) ? (n.d(1), n = Fu(o), n.c(), n.m(t.parentNode, t)) : n.p(o, i);
    },
    d(o) {
      o && q(t), n.d(o);
    }
  };
}
function cb(e) {
  let r, t, n, o, i, s = or(
    /*sources*/
    e[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = Tu(Vu(e, s, l));
  return {
    c() {
      r = Me("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      g(r, "class", wi.video__video), g(r, "style", t = ar(
        /*style*/
        e[14]
      )), r.playsInline = !0, r.loop = /*loop*/
      e[5], r.autoplay = /*autoplay*/
      e[6], r.muted = /*muted*/
      e[7], g(
        r,
        "poster",
        /*poster*/
        e[9]
      ), g(r, "preload", n = /*preload*/
      e[8] ? "metadata" : "auto");
    },
    m(l, c) {
      K(l, r, c);
      for (let u = 0; u < a.length; u += 1)
        a[u] && a[u].m(r, null);
      e[50](r), o || (i = [
        Ke(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          e[26]
        ),
        Ke(
          r,
          "ended",
          /*onEnd*/
          e[27]
        ),
        Ke(
          r,
          "playing",
          /*onPlaying*/
          e[28]
        ),
        Ke(
          r,
          "pause",
          /*onPause*/
          e[29]
        ),
        Ke(
          r,
          "waiting",
          /*onWaiting*/
          e[30]
        ),
        Ke(
          r,
          "error",
          /*onError*/
          e[31]
        )
      ], o = !0);
    },
    p(l, c) {
      if (c[0] & /*sources*/
      16 | c[1] & /*onError*/
      1) {
        s = or(
          /*sources*/
          l[4]
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const f = Vu(l, s, u);
          a[u] ? a[u].p(f, c) : (a[u] = Tu(f), a[u].c(), a[u].m(r, null));
        }
        for (; u < a.length; u += 1)
          a[u].d(1);
        a.length = s.length;
      }
      c[0] & /*style*/
      16384 && t !== (t = ar(
        /*style*/
        l[14]
      )) && g(r, "style", t), c[0] & /*loop*/
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
      l && q(r), sn(a, l), e[50](null), o = !1, Ur(i);
    }
  };
}
function ub(e) {
  let r;
  return {
    c() {
      r = Me("div"), g(r, "class", wi.video__container);
    },
    m(t, n) {
      K(t, r, n), r.innerHTML = /*providedVideoTemplate*/
      e[12], e[49](r);
    },
    p(t, n) {
      n[0] & /*providedVideoTemplate*/
      4096 && (r.innerHTML = /*providedVideoTemplate*/
      t[12]);
    },
    d(t) {
      t && q(r), e[49](null);
    }
  };
}
function Du(e) {
  let r, t, n, o, i;
  return {
    c() {
      r = Me("source"), Xn(r.src, t = /*source*/
      e[60].src) || g(r, "src", t), g(r, "type", n = /*source*/
      e[60].type);
    },
    m(s, a) {
      K(s, r, a), o || (i = Ke(
        r,
        "error",
        /*onError*/
        e[31]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*sources*/
      16 && !Xn(r.src, t = /*source*/
      s[60].src) && g(r, "src", t), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && g(r, "type", n);
    },
    d(s) {
      s && q(r), o = !1, i();
    }
  };
}
function Tu(e) {
  let r = (
    /*source*/
    e[60]
  ), t, n = Du(e);
  return {
    c() {
      n.c(), t = xt();
    },
    m(o, i) {
      n.m(o, i), K(o, t, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Vr(r, r = /*source*/
      o[60]) ? (n.d(1), n = Du(o), n.c(), n.m(t.parentNode, t)) : n.p(o, i);
    },
    d(o) {
      o && q(t), n.d(o);
    }
  };
}
function fb(e) {
  let r;
  function t(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[11] !== "0" ? ab : (
        /*shouldUseVideoProvider*/
        i[13] ? lb : sb
      )
    );
  }
  let n = t(e), o = n(e);
  return {
    c() {
      o.c(), r = xt();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = t(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && q(r), o.d(i);
    }
  };
}
function db(e) {
  let r, t, n, o;
  const i = [ib, ob], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[2] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (t && (dr(), re(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (t = s[r], t ? t.p(l, c) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      re(t), o = !1;
    },
    d(l) {
      l && q(n), ~r && s[r].d(l);
    }
  };
}
function _b(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N = C, R = () => (N(), N = S(a, (ze) => t(39, k = ze)), a), L, ee = C, ce = () => (ee(), ee = S(m, (ze) => t(40, L = ze)), m), T, X = C, le = () => (X(), X = S(h, (ze) => t(41, T = ze)), h), E, D = C, P = () => (D(), D = S(_, (ze) => t(42, E = ze)), _), U, Z = C, be = () => (Z(), Z = S(f, (ze) => t(43, U = ze)), f), Ae, Ee = C, _e = () => (Ee(), Ee = S(u, (ze) => t(44, Ae = ze)), u), Ie, $ = C, tt = () => ($(), $ = S(c, (ze) => t(45, Ie = ze)), c), Xe, qe = C, ve = () => (qe(), qe = S(l, (ze) => t(46, Xe = ze)), l), De, ue = C, ke = () => (ue(), ue = S(s, (ze) => t(47, De = ze)), s), de, x = C, fe = () => (x(), x = S(i, (ze) => t(48, de = ze)), i);
  e.$$.on_destroy.push(() => N()), e.$$.on_destroy.push(() => ee()), e.$$.on_destroy.push(() => X()), e.$$.on_destroy.push(() => D()), e.$$.on_destroy.push(() => Z()), e.$$.on_destroy.push(() => Ee()), e.$$.on_destroy.push(() => $()), e.$$.on_destroy.push(() => qe()), e.$$.on_destroy.push(() => ue()), e.$$.on_destroy.push(() => x());
  let { componentContext: ie } = r, { layoutParams: Fe = void 0 } = r;
  const Ye = Tr(Zr), Ze = Ye.videoPlayerProvider;
  let te, He = !1, Be = !1, it, st, lt = [], kt = !1, nt = !1, Nt = !1, ut = !1, pe, ge = "fit", _t = "0", Se = !1, F, Ct = "", ft, St = !!Ze;
  function Tt(ze) {
    var nr, $t;
    const yt = ie.getJsonWithVars({
      sources: ze.video_sources,
      repeatable: ze.repeatable,
      autostart: ze.autostart,
      preloadRequired: ze.preload_required,
      muted: ze.muted,
      preview: ze.preview,
      aspect: ze.aspect,
      scale: ze.scale,
      payload: ze.player_settings_payload
    }), Ft = fn(yt.repeatable, !1), It = fn(yt.autostart, !1), cr = fn(yt.preloadRequired, !1), Pe = fn(yt.muted, !1), vt = (nr = yt.aspect) != null && nr.ratio && Bn(yt.aspect.ratio) ? yt.aspect.ratio : void 0;
    if (($t = yt.sources) != null && $t.length)
      return {
        sources: yt.sources,
        repeatable: Ft,
        autostart: It,
        preloadRequired: cr,
        muted: Pe,
        preview: yt.preview,
        aspect: vt,
        scale: yt.scale,
        payload: yt.payload
      };
  }
  function $e(ze) {
    var yt;
    if (Be) {
      Be = !1;
      return;
    }
    ft ? (yt = ft.seek) == null || yt.call(ft, Number(ze)) : it && t(3, it.currentTime = Number(ze) / 1e3, it);
  }
  function Y() {
    ft ? ft.pause() : it == null || it.pause();
  }
  function At() {
    if (ft) {
      ft.play();
      return;
    }
    const ze = it == null ? void 0 : it.play();
    ze && ze.catch((yt) => {
      ie.logError(J(new Error("Video playing error"), {
        level: "error",
        additional: { originalText: String(yt) }
      }));
    });
  }
  function Mt() {
    it && (Be = !0, o.setValue(Math.floor(it.currentTime * 1e3)));
  }
  function Qt() {
    ie.execAnyActions(ie.json.end_actions);
  }
  function Jt() {
    ie.execAnyActions(ie.json.resume_actions);
  }
  function he() {
    ie.execAnyActions(ie.json.pause_actions);
  }
  function Le() {
    ie.execAnyActions(ie.json.buffering_actions);
  }
  function pt() {
    ie.execAnyActions(ie.json.fatal_actions);
  }
  ro(() => {
    if (Ze && st) {
      const ze = Tt(ie.json);
      if (ze) {
        const yt = Ze.instance(st, ze);
        yt ? t(36, ft = yt) : t(13, St = !1);
      }
    }
  }), ln(() => {
    te && (Ye.unregisterInstance(te), t(32, te = void 0)), F && (F(), t(35, F = void 0)), ft && (ft.destroy(), t(36, ft = void 0));
  });
  function ye(ze) {
    Dr[ze ? "unshift" : "push"](() => {
      st = ze, t(10, st);
    });
  }
  function xe(ze) {
    Dr[ze ? "unshift" : "push"](() => {
      it = ze, t(3, it);
    });
  }
  function Oe(ze) {
    Dr[ze ? "unshift" : "push"](() => {
      st = ze, t(10, st);
    });
  }
  function er(ze) {
    Dr[ze ? "unshift" : "push"](() => {
      it = ze, t(3, it);
    });
  }
  return e.$$set = (ze) => {
    "componentContext" in ze && t(0, ie = ze.componentContext), "layoutParams" in ze && t(1, Fe = ze.layoutParams);
  }, e.$$.update = () => {
    var ze;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && ie.json && (t(5, kt = !1), t(6, nt = !1), t(7, Nt = !1), t(8, ut = !1), t(9, pe = void 0), t(33, ge = "fit"), t(34, Se = !1), t(13, St = !!Ze)), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*customVideoInstance, $jsonSource, $jsonRepeatable, $jsonAutostart, $jsonMuted, $jsonPreload, $jsonPreview, $jsonScale, $jsonAspect*/
    260384 && ie.json && ft && (de || De || k || Xe || Ie || Ae || U || E)) {
      const yt = Tt(ie.json);
      yt && ((ze = ft.update) == null || ze.call(ft, yt));
    }
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(38, n = ie.json.elapsed_time_variable), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*elapsedVariableName*/
    128 && t(37, o = n && (ie.getVariable(n, "integer") || Ye.awaitGlobalVariable(n, "integer", 0)) || so("temp", "integer", 0)), e.$$.dirty[1] & /*elapsedVariable, elapsedVariableUnsubscriber*/
    80 && o && (F && F(), t(35, F = o.subscribe($e))), e.$$.dirty[0] & /*componentContext*/
    1 && fe(t(25, i = ie.getDerivedFromVars(ie.json.video_sources))), e.$$.dirty[0] & /*componentContext*/
    1 && ke(t(24, s = ie.getDerivedFromVars(ie.json.repeatable))), e.$$.dirty[0] & /*componentContext*/
    1 && R(t(23, a = ie.getDerivedFromVars(ie.json.autostart))), e.$$.dirty[0] & /*componentContext*/
    1 && ve(t(22, l = ie.getDerivedFromVars(ie.json.muted))), e.$$.dirty[0] & /*componentContext*/
    1 && tt(t(21, c = ie.getDerivedFromVars(ie.json.preload_required))), e.$$.dirty[0] & /*componentContext*/
    1 && _e(t(20, u = ie.getDerivedFromVars(ie.json.preview))), e.$$.dirty[0] & /*componentContext*/
    1 && be(t(19, f = ie.getDerivedFromVars(ie.json.scale))), e.$$.dirty[0] & /*componentContext*/
    1 && P(t(18, _ = ie.getDerivedFromVars(ie.json.aspect))), e.$$.dirty[0] & /*componentContext*/
    1 && le(t(17, h = ie.getDerivedFromVars(ie.json.width))), e.$$.dirty[0] & /*componentContext*/
    1 && ce(t(16, m = ie.getDerivedFromVars(ie.json.height))), e.$$.dirty[0] & /*sources, componentContext*/
    17 | e.$$.dirty[1] & /*$jsonSource*/
    131072 && (t(4, lt = rb(de, lt)), lt.length ? t(2, He = !1) : (t(2, He = !0), ie.logError(J(new Error('Missing "video_sources" in "video"'))))), e.$$.dirty[0] & /*loop*/
    32 | e.$$.dirty[1] & /*$jsonRepeatable*/
    65536 && t(5, kt = fn(De, kt)), e.$$.dirty[0] & /*autoplay*/
    64 | e.$$.dirty[1] & /*$jsonAutostart*/
    256 && t(6, nt = fn(k, nt)), e.$$.dirty[0] & /*muted*/
    128 | e.$$.dirty[1] & /*$jsonMuted*/
    32768 && t(7, Nt = fn(Xe, Nt)), e.$$.dirty[0] & /*preload*/
    256 | e.$$.dirty[1] & /*$jsonPreload*/
    16384 && t(8, ut = fn(Ie, ut)), e.$$.dirty[0] & /*poster*/
    512 | e.$$.dirty[1] & /*$jsonPreview*/
    8192 && t(9, pe = typeof Ae == "string" ? md(Ae) : pe), e.$$.dirty[1] & /*$jsonScale, scale*/
    4100 && t(33, ge = nb(U) || ge), e.$$.dirty[1] & /*$jsonAspect, $jsonWidth, $jsonHeight*/
    3584) {
      const yt = E == null ? void 0 : E.ratio;
      yt && Bn(yt) ? (t(11, _t = (100 / Number(yt)).toFixed(2)), t(34, Se = !0)) : (t(11, _t = "0"), t(34, Se = (!T || T.type === "match_parent") && (L == null ? void 0 : L.type) === "match_parent"));
    }
    e.$$.dirty[0] & /*componentContext, hasError*/
    5 | e.$$.dirty[1] & /*prevId*/
    2 && ie.json && (te && (Ye.unregisterInstance(te), t(32, te = void 0)), ie.id && !He && !ie.fakeElement && (t(32, te = ie.id), Ye.registerInstance(te, { pause: Y, start: At }))), e.$$.dirty[0] & /*componentContext, videoElem*/
    9 | e.$$.dirty[1] & /*$jsonAutostart*/
    256 && ie.json && k && it && At(), e.$$.dirty[1] & /*isAbsolute*/
    8 && t(15, p = { absolute: Se }), e.$$.dirty[1] & /*scale*/
    4 && t(14, w = { "object-fit": ge });
  }, [
    ie,
    Fe,
    He,
    it,
    lt,
    kt,
    nt,
    Nt,
    ut,
    pe,
    st,
    _t,
    Ct,
    St,
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
    Mt,
    Qt,
    Jt,
    he,
    Le,
    pt,
    te,
    ge,
    Se,
    F,
    ft,
    o,
    n,
    k,
    L,
    T,
    E,
    U,
    Ae,
    Ie,
    Xe,
    De,
    de,
    ye,
    xe,
    Oe,
    er
  ];
}
class pb extends Br {
  constructor(r) {
    super(), Or(this, r, _b, db, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const gb = "appkit-switch__tumbler", hb = "appkit-switch__tumbler_checked", mb = "appkit-switch_disabled", bb = "appkit-switch__thumb", yb = "appkit-switch_direction_rtl", wb = "appkit-switch__input", ci = {
  switch: "appkit-switch",
  switch__tumbler: gb,
  switch__tumbler_checked: hb,
  switch_disabled: mb,
  switch__thumb: bb,
  switch_direction_rtl: yb,
  switch__input: wb
};
function Ni(e) {
  return e === !0 || e === 1;
}
function kb(e) {
  let r, t;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function vb(e) {
  let r, t;
  return r = new wn({
    props: {
      cls: bt(
        "switch",
        ci,
        /*mods*/
        e[9]
      ),
      style: (
        /*stl*/
        e[8]
      ),
      customDescription: !0,
      customActions: "switch",
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: {
        default: [
          jb,
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
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = bt(
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function jb(e) {
  let r, t, n, o, i, s, a, l, c;
  return {
    c() {
      r = Me("div"), t = Me("div"), o = gr(), i = Me("input"), g(t, "class", ci.switch__thumb), g(r, "class", n = bt("switch__tumbler", ci, { checked: (
        /*value*/
        e[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = bt("switch__input", ci, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[31]
        )
      })), g(i, "autocomplete", "off"), g(
        i,
        "aria-label",
        /*description*/
        e[6]
      ), i.disabled = a = !/*isEnabled*/
      e[5], i.checked = /*value*/
      e[3];
    },
    m(u, f) {
      K(u, r, f), wt(r, t), K(u, o, f), K(u, i, f), e[25](i), l || (c = [
        Ke(
          i,
          "input",
          /*onInput*/
          e[14]
        ),
        Ke(i, "focus", function() {
          Nr(
            /*focusHandler*/
            e[29]
          ) && e[29].apply(this, arguments);
        }),
        Ke(i, "blur", function() {
          Nr(
            /*blurHandler*/
            e[30]
          ) && e[30].apply(this, arguments);
        })
      ], l = !0);
    },
    p(u, f) {
      e = u, f[0] & /*value*/
      8 && n !== (n = bt("switch__tumbler", ci, { checked: (
        /*value*/
        e[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      1 && s !== (s = bt("switch__input", ci, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[31]
        )
      })) && g(i, "class", s), f[0] & /*description*/
      64 && g(
        i,
        "aria-label",
        /*description*/
        e[6]
      ), f[0] & /*isEnabled*/
      32 && a !== (a = !/*isEnabled*/
      e[5]) && (i.disabled = a), f[0] & /*value*/
      8 && (i.checked = /*value*/
      e[3]);
    },
    d(u) {
      u && (q(r), q(o), q(i)), e[25](null), l = !1, Ur(c);
    }
  };
}
function Cb(e) {
  let r, t, n, o;
  const i = [vb, kb], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[4] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (t && (dr(), re(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (t = s[r], t ? t.p(l, c) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      re(t), o = !1;
    },
    d(l) {
      l && q(n), ~r && s[r].d(l);
    }
  };
}
function Eb(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h = C, m = () => (h(), h = S(s, (ve) => t(21, _ = ve)), s), p, w = C, k = () => (w(), w = S(l, (ve) => t(22, p = ve)), l), N, R = C, L = () => (R(), R = S(a, (ve) => t(23, N = ve)), a), ee, ce = C, T = () => (ce(), ce = S(i, (ve) => t(24, ee = ve)), i);
  e.$$.on_destroy.push(() => h()), e.$$.on_destroy.push(() => w()), e.$$.on_destroy.push(() => R()), e.$$.on_destroy.push(() => ce());
  let { componentContext: X } = r, { layoutParams: le = void 0 } = r;
  const E = Tr(Zr), D = Tr(To), P = E.direction;
  yn(e, P, (ve) => t(20, f = ve));
  let U, Z, be = !1, Ae = !1, Ee = "", _e = !0, Ie = "#129386", $ = "#1293864c";
  function tt() {
    t(5, _e = !0), t(16, Ie = "#129386"), t(17, $ = "#1293864c");
  }
  function Xe(ve) {
    t(3, be = ve.target.checked), i.setValue(be);
  }
  ln(() => {
    U && (E.unregisterFocusable(U), t(15, U = void 0));
  });
  function qe(ve) {
    Dr[ve ? "unshift" : "push"](() => {
      Z = ve, t(2, Z);
    });
  }
  return e.$$set = (ve) => {
    "componentContext" in ve && t(0, X = ve.componentContext), "layoutParams" in ve && t(1, le = ve.layoutParams);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(19, n = X.origJson), e.$$.dirty[0] & /*origJson*/
    524288 && n && tt(), e.$$.dirty[0] & /*componentContext*/
    1 && t(18, o = X.json.is_on_variable), e.$$.dirty[0] & /*variable, componentContext*/
    262145 && T(t(7, i = o && (X.getVariable(o, "boolean") || E.awaitGlobalVariable(o, "boolean", !1)) || so("temp", "boolean", !1))), e.$$.dirty[0] & /*componentContext*/
    1 && m(t(12, s = X.getDerivedFromVars(X.json.accessibility))), e.$$.dirty[0] & /*componentContext*/
    1 && L(t(11, a = X.getDerivedFromVars(X.json.is_enabled))), e.$$.dirty[0] & /*componentContext*/
    1 && k(t(10, l = X.getDerivedFromVars(X.json.on_color))), e.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    2359313) {
      let ve = !1;
      o ? (D.hasAction() || (_ == null ? void 0 : _.mode) === "exclude") && (ve = !0, X.logError(J(new Error('Cannot show "switch" inside component with an action or inside accessibility mode=exclude')))) : (ve = !0, X.logError(J(new Error('Missing "is_on_variable" in "switch"')))), Ae !== ve && t(4, Ae = ve);
    }
    if (e.$$.dirty[0] & /*value, $valueVariable*/
    16777224 && Ni(be) !== Ni(ee) && t(3, be = Ni(ee)), e.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    8388640 && t(5, _e = fn(N, _e)), e.$$.dirty[0] & /*$jsonOnColor, onColor*/
    4259840 && (t(16, Ie = fr(p, 1, Ie)), typeof p == "string")) {
      const ve = _o(p);
      ve && (ve.a *= 0.3, t(17, $ = aa(ve)));
    }
    e.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    2097153 && (_ != null && _.description ? t(6, Ee = $o(_)) : X.logError(J(new Error('Missing accessibility "description" for switch'), { level: "warn" }))), e.$$.dirty[0] & /*isEnabled, $direction*/
    1048608 && t(9, c = {
      disabled: !_e,
      direction: f
    }), e.$$.dirty[0] & /*onColor, onSubColor*/
    196608 && t(8, u = {
      "--divkit-switch-on-color": Ie,
      "--divkit-switch-on-sub-color": $
    }), e.$$.dirty[0] & /*input, componentContext, prevId*/
    32773 && Z && X.json && (U && (E.unregisterFocusable(U), t(15, U = void 0)), X.id && !X.fakeElement && (t(15, U = X.id), E.registerFocusable(U, {
      focus() {
        Z && Z.focus();
      }
    })));
  }, [
    X,
    le,
    Z,
    be,
    Ae,
    _e,
    Ee,
    i,
    u,
    c,
    l,
    a,
    s,
    P,
    Xe,
    U,
    Ie,
    $,
    o,
    n,
    f,
    _,
    p,
    N,
    ee,
    qe
  ];
}
class Ab extends Br {
  constructor(r) {
    super(), Or(this, r, Eb, Cb, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Sb = "appkit-checkbox", Vb = "appkit-checkbox__box", Fb = "appkit-checkbox__box_checked", Ib = "appkit-checkbox__checkmark", Db = "appkit-checkbox_disabled", Tb = "appkit-checkbox__input", ui = {
  checkbox: Sb,
  checkbox__box: Vb,
  checkbox__box_checked: Fb,
  checkbox__checkmark: Ib,
  checkbox_disabled: Db,
  checkbox__input: Tb
};
function Mb(e) {
  let r, t;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Pb(e) {
  let r, t;
  return r = new wn({
    props: {
      cls: bt(
        "checkbox",
        ui,
        /*mods*/
        e[9]
      ),
      style: (
        /*stl*/
        e[8]
      ),
      customDescription: !0,
      customActions: "checkbox",
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: {
        default: [
          Nb,
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
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = bt(
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Nb(e) {
  let r, t, n, o, i, s, a, l, c;
  return {
    c() {
      r = Me("div"), t = Me("div"), o = gr(), i = Me("input"), g(t, "class", ui.checkbox__checkmark), g(r, "class", n = bt("checkbox__box", ui, { checked: (
        /*value*/
        e[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = bt("checkbox__input", ui, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[34]
        )
      })), g(i, "autocomplete", "off"), g(i, "role", "checkbox"), g(
        i,
        "aria-checked",
        /*value*/
        e[3]
      ), g(
        i,
        "aria-label",
        /*description*/
        e[6]
      ), i.disabled = a = !/*isEnabled*/
      e[5], i.checked = /*value*/
      e[3];
    },
    m(u, f) {
      K(u, r, f), wt(r, t), K(u, o, f), K(u, i, f), e[28](i), l || (c = [
        Ke(
          i,
          "input",
          /*onInput*/
          e[15]
        ),
        Ke(i, "focus", function() {
          Nr(
            /*focusHandler*/
            e[32]
          ) && e[32].apply(this, arguments);
        }),
        Ke(i, "blur", function() {
          Nr(
            /*blurHandler*/
            e[33]
          ) && e[33].apply(this, arguments);
        })
      ], l = !0);
    },
    p(u, f) {
      e = u, f[0] & /*value*/
      8 && n !== (n = bt("checkbox__box", ui, { checked: (
        /*value*/
        e[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      8 && s !== (s = bt("checkbox__input", ui, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[34]
        )
      })) && g(i, "class", s), f[0] & /*value*/
      8 && g(
        i,
        "aria-checked",
        /*value*/
        e[3]
      ), f[0] & /*description*/
      64 && g(
        i,
        "aria-label",
        /*description*/
        e[6]
      ), f[0] & /*isEnabled*/
      32 && a !== (a = !/*isEnabled*/
      e[5]) && (i.disabled = a), f[0] & /*value*/
      8 && (i.checked = /*value*/
      e[3]);
    },
    d(u) {
      u && (q(r), q(o), q(i)), e[28](null), l = !1, Ur(c);
    }
  };
}
function zb(e) {
  let r, t, n, o;
  const i = [Pb, Mb], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[4] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (t && (dr(), re(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (t = s[r], t ? t.p(l, c) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      re(t), o = !1;
    },
    d(l) {
      l && q(n), ~r && s[r].d(l);
    }
  };
}
function Ob(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h, m = C, p = () => (m(), m = S(s, (ie) => t(22, h = ie)), s), w, k = C, N = () => (k(), k = S(u, (ie) => t(23, w = ie)), u), R, L = C, ee = () => (L(), L = S(c, (ie) => t(24, R = ie)), c), ce, T = C, X = () => (T(), T = S(l, (ie) => t(25, ce = ie)), l), le, E = C, D = () => (E(), E = S(a, (ie) => t(26, le = ie)), a), P, U = C, Z = () => (U(), U = S(i, (ie) => t(27, P = ie)), i);
  e.$$.on_destroy.push(() => m()), e.$$.on_destroy.push(() => k()), e.$$.on_destroy.push(() => L()), e.$$.on_destroy.push(() => T()), e.$$.on_destroy.push(() => E()), e.$$.on_destroy.push(() => U());
  let { componentContext: be } = r, { layoutParams: Ae = void 0 } = r;
  const Ee = Tr(Zr), _e = Tr(To);
  let Ie, $, tt = !1, Xe = !1, qe = "", ve = !0, De = "#129386", ue = "rgba(0, 0, 0, .3)", ke = "#fff";
  function de() {
    t(5, ve = !0), t(17, De = "#129386"), t(18, ue = "rgba(0, 0, 0, .3)"), t(19, ke = "#fff");
  }
  function x(ie) {
    t(3, tt = ie.target.checked), i.setValue(tt);
  }
  ln(() => {
    Ie && (Ee.unregisterFocusable(Ie), t(16, Ie = void 0));
  });
  function fe(ie) {
    Dr[ie ? "unshift" : "push"](() => {
      $ = ie, t(2, $);
    });
  }
  return e.$$set = (ie) => {
    "componentContext" in ie && t(0, be = ie.componentContext), "layoutParams" in ie && t(1, Ae = ie.layoutParams);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(21, n = be.origJson), e.$$.dirty[0] & /*origJson*/
    2097152 && n && de(), e.$$.dirty[0] & /*componentContext*/
    1 && t(20, o = be.json.is_checked_variable), e.$$.dirty[0] & /*variable, componentContext*/
    1048577 && Z(t(7, i = o && (be.getVariable(o, "boolean") || Ee.awaitGlobalVariable(o, "boolean", !1)) || so("temp", "boolean", !1))), e.$$.dirty[0] & /*componentContext*/
    1 && p(t(14, s = be.getDerivedFromVars(be.json.accessibility))), e.$$.dirty[0] & /*componentContext*/
    1 && D(t(13, a = be.getDerivedFromVars(be.json.is_enabled))), e.$$.dirty[0] & /*componentContext*/
    1 && X(t(12, l = be.getDerivedFromVars(be.json.on_color))), e.$$.dirty[0] & /*componentContext*/
    1 && ee(t(11, c = be.getDerivedFromVars(be.json.off_color))), e.$$.dirty[0] & /*componentContext*/
    1 && N(t(10, u = be.getDerivedFromVars(be.json.check_mark_color))), e.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    5242897) {
      let ie = !1;
      o ? (_e.hasAction() || (h == null ? void 0 : h.mode) === "exclude") && (ie = !0, be.logError(J(new Error('Cannot show "checkbox" inside component with an action or inside accessibility mode=exclude')))) : (ie = !0, be.logError(J(new Error('Missing "is_checked_variable" in "checkbox"')))), Xe !== ie && t(4, Xe = ie);
    }
    e.$$.dirty[0] & /*value, $valueVariable*/
    134217736 && Ni(tt) !== Ni(P) && t(3, tt = Ni(P)), e.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    67108896 && t(5, ve = fn(le, ve)), e.$$.dirty[0] & /*$jsonOnColor, onColor*/
    33685504 && t(17, De = fr(ce, 1, De)), e.$$.dirty[0] & /*$jsonOffColor, offColor*/
    17039360 && t(18, ue = fr(R, 1, ue)), e.$$.dirty[0] & /*$jsonCheckMarkColor, checkMarkColor*/
    8912896 && t(19, ke = fr(w, 1, ke)), e.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    4194305 && (h != null && h.description ? t(6, qe = $o(h)) : be.logError(J(new Error('Missing accessibility "description" for checkbox'), { level: "warn" }))), e.$$.dirty[0] & /*isEnabled*/
    32 && t(9, f = { disabled: !ve }), e.$$.dirty[0] & /*onColor, offColor, checkMarkColor*/
    917504 && t(8, _ = {
      "--divkit-checkbox-on-color": De,
      "--divkit-checkbox-off-color": ue,
      "--divkit-checkbox-check-mark-color": ke
    }), e.$$.dirty[0] & /*input, componentContext, prevId*/
    65541 && $ && be.json && (Ie && (Ee.unregisterFocusable(Ie), t(16, Ie = void 0)), be.id && !be.fakeElement && (t(16, Ie = be.id), Ee.registerFocusable(Ie, {
      focus() {
        $ && $.focus();
      }
    })));
  }, [
    be,
    Ae,
    $,
    tt,
    Xe,
    ve,
    qe,
    i,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    x,
    Ie,
    De,
    ue,
    ke,
    o,
    n,
    h,
    w,
    R,
    ce,
    le,
    P,
    fe
  ];
}
class Bb extends Br {
  constructor(r) {
    super(), Or(this, r, Ob, zb, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Lb = "appkit-radio", Rb = "appkit-radio__group", Hb = "appkit-radio__group_vertical", Wb = "appkit-radio__group_horizontal", Ub = "appkit-radio__item", Gb = "appkit-radio_disabled", Jb = "appkit-radio__circle", qb = "appkit-radio__circle_selected", Yb = "appkit-radio__dot", Kb = "appkit-radio__label", Xb = "appkit-radio__input", ko = {
  radio: Lb,
  radio__group: Rb,
  radio__group_vertical: Hb,
  radio__group_horizontal: Wb,
  radio__item: Ub,
  radio_disabled: Gb,
  radio__circle: Jb,
  radio__circle_selected: qb,
  radio__dot: Yb,
  radio__label: Kb,
  radio__input: Xb
};
function Mu(e, r, t) {
  const n = e.slice();
  return n[55] = r[t], n;
}
function Zb(e) {
  let r, t;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Qb(e) {
  let r, t;
  return r = new wn({
    props: {
      cls: bt(
        "radio",
        ko,
        /*mods*/
        e[11]
      ),
      style: (
        /*stl*/
        e[9]
      ),
      customDescription: !0,
      customActions: "radio",
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: {
        default: [
          ey,
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
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = bt(
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function xb(e) {
  let r, t = (
    /*item*/
    e[55].value + ""
  ), n;
  return {
    c() {
      r = Me("span"), n = Gn(t), g(r, "class", ko.radio__label);
    },
    m(o, i) {
      K(o, r, i), wt(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && t !== (t = /*item*/
      o[55].value + "") && to(n, t);
    },
    d(o) {
      o && q(r);
    }
  };
}
function $b(e) {
  let r, t = (
    /*item*/
    e[55].text + ""
  ), n;
  return {
    c() {
      r = Me("span"), n = Gn(t), g(r, "class", ko.radio__label);
    },
    m(o, i) {
      K(o, r, i), wt(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && t !== (t = /*item*/
      o[55].text + "") && to(n, t);
    },
    d(o) {
      o && q(r);
    }
  };
}
function Pu(e) {
  let r, t, n, o, i, s, a, l, c, u, f, _, h;
  function m(N, R) {
    return (
      /*item*/
      N[55].text ? $b : xb
    );
  }
  let p = m(e), w = p(e);
  function k() {
    return (
      /*change_handler*/
      e[47](
        /*item*/
        e[55]
      )
    );
  }
  return {
    c() {
      r = Me("label"), t = Me("div"), n = Me("div"), i = gr(), w.c(), s = gr(), a = Me("input"), f = gr(), g(n, "class", ko.radio__dot), g(t, "class", o = bt("radio__circle", ko, {
        selected: (
          /*$valueVariable*/
          e[23] === /*item*/
          e[55].value
        )
      })), g(a, "type", "radio"), g(a, "class", ko.radio__input), g(
        a,
        "name",
        /*groupName*/
        e[12]
      ), a.value = l = /*item*/
      e[55].value, a.checked = c = /*$valueVariable*/
      e[23] === /*item*/
      e[55].value, a.disabled = u = !/*isEnabled*/
      e[4], g(r, "class", ko.radio__item);
    },
    m(N, R) {
      K(N, r, R), wt(r, t), wt(t, n), wt(r, i), w.m(r, null), wt(r, s), wt(r, a), wt(r, f), _ || (h = [
        Ke(a, "change", k),
        Ke(a, "focus", function() {
          Nr(
            /*focusHandler*/
            e[52]
          ) && e[52].apply(this, arguments);
        }),
        Ke(a, "blur", function() {
          Nr(
            /*blurHandler*/
            e[53]
          ) && e[53].apply(this, arguments);
        })
      ], _ = !0);
    },
    p(N, R) {
      e = N, R[0] & /*$valueVariable, filteredItems*/
      8388640 && o !== (o = bt("radio__circle", ko, {
        selected: (
          /*$valueVariable*/
          e[23] === /*item*/
          e[55].value
        )
      })) && g(t, "class", o), p === (p = m(e)) && w ? w.p(e, R) : (w.d(1), w = p(e), w && (w.c(), w.m(r, s))), R[0] & /*groupName*/
      4096 && g(
        a,
        "name",
        /*groupName*/
        e[12]
      ), R[0] & /*filteredItems*/
      32 && l !== (l = /*item*/
      e[55].value) && (a.value = l), R[0] & /*$valueVariable, filteredItems*/
      8388640 && c !== (c = /*$valueVariable*/
      e[23] === /*item*/
      e[55].value) && (a.checked = c), R[0] & /*isEnabled*/
      16 && u !== (u = !/*isEnabled*/
      e[4]) && (a.disabled = u);
    },
    d(N) {
      N && q(r), w.d(), _ = !1, Ur(h);
    }
  };
}
function ey(e) {
  let r, t, n = or(
    /*filteredItems*/
    e[5]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Pu(Mu(e, n, i));
  return {
    c() {
      r = Me("div");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", t = bt(
        "radio__group",
        ko,
        /*groupMods*/
        e[10]
      )), g(
        r,
        "style",
        /*groupStl*/
        e[8]
      ), g(r, "role", "radiogroup"), g(
        r,
        "aria-label",
        /*description*/
        e[6]
      );
    },
    m(i, s) {
      K(i, r, s);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(r, null);
      e[48](r);
    },
    p(i, s) {
      if (s[0] & /*groupName, filteredItems, $valueVariable, isEnabled, onChange*/
      25169968 | s[1] & /*focusHandler, blurHandler*/
      6291456) {
        n = or(
          /*filteredItems*/
          i[5]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Mu(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Pu(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s[0] & /*groupMods*/
      1024 && t !== (t = bt(
        "radio__group",
        ko,
        /*groupMods*/
        i[10]
      )) && g(r, "class", t), s[0] & /*groupStl*/
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
      i && q(r), sn(o, i), e[48](null);
    }
  };
}
function ty(e) {
  let r, t, n, o;
  const i = [Qb, Zb], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (t && (dr(), re(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (t = s[r], t ? t.p(l, c) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      re(t), o = !1;
    },
    d(l) {
      l && q(n), ~r && s[r].d(l);
    }
  };
}
function ry(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, ee, ce, T, X = C, le = () => (X(), X = S(l, (Le) => t(37, T = Le)), l), E, D = C, P = () => (D(), D = S(k, (Le) => t(38, E = Le)), k), U, Z = C, be = () => (Z(), Z = S(w, (Le) => t(39, U = Le)), w), Ae, Ee = C, _e = () => (Ee(), Ee = S(p, (Le) => t(40, Ae = Le)), p), Ie, $ = C, tt = () => ($(), $ = S(m, (Le) => t(41, Ie = Le)), m), Xe, qe = C, ve = () => (qe(), qe = S(h, (Le) => t(42, Xe = Le)), h), De, ue = C, ke = () => (ue(), ue = S(_, (Le) => t(43, De = Le)), _), de, x = C, fe = () => (x(), x = S(f, (Le) => t(44, de = Le)), f), ie, Fe = C, Ye = () => (Fe(), Fe = S(u, (Le) => t(45, ie = Le)), u), Ze, te = C, He = () => (te(), te = S(c, (Le) => t(46, Ze = Le)), c), Be, it = C, st = () => (it(), it = S(a, (Le) => t(23, Be = Le)), a);
  e.$$.on_destroy.push(() => X()), e.$$.on_destroy.push(() => D()), e.$$.on_destroy.push(() => Z()), e.$$.on_destroy.push(() => Ee()), e.$$.on_destroy.push(() => $()), e.$$.on_destroy.push(() => qe()), e.$$.on_destroy.push(() => ue()), e.$$.on_destroy.push(() => x()), e.$$.on_destroy.push(() => Fe()), e.$$.on_destroy.push(() => te()), e.$$.on_destroy.push(() => it());
  let { componentContext: lt } = r, { layoutParams: kt = void 0 } = r;
  const nt = Tr(Zr), Nt = Tr(To);
  let ut, pe, ge = !1, _t = "", Se = !0, F = "#129386", Ct = "rgba(0, 0, 0, 0.3)", ft = "", St, Tt, $e = "", Y = "vertical", At = 8;
  function Mt() {
    t(4, Se = !0), t(26, F = "#129386"), t(27, Ct = "rgba(0, 0, 0, 0.3)"), t(28, ft = ""), t(29, St = void 0), t(30, Tt = void 0), t(31, $e = ""), t(32, Y = "vertical"), t(33, At = 8);
  }
  function Qt(Le) {
    a.setValue(Le);
  }
  ln(() => {
    ut && (nt.unregisterFocusable(ut), t(25, ut = void 0));
  });
  const Jt = (Le) => Qt(Le.value);
  function he(Le) {
    Dr[Le ? "unshift" : "push"](() => {
      pe = Le, t(2, pe);
    });
  }
  return e.$$set = (Le) => {
    "componentContext" in Le && t(0, lt = Le.componentContext), "layoutParams" in Le && t(1, kt = Le.layoutParams);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(36, n = lt.origJson), e.$$.dirty[1] & /*origJson*/
    32 && n && Mt(), e.$$.dirty[0] & /*componentContext*/
    1 && t(34, o = lt.json.value_variable), e.$$.dirty[0] & /*componentContext*/
    1 && t(35, i = lt.json.options), e.$$.dirty[1] & /*items*/
    16 && t(5, s = Array.isArray(i) && i.filter((Le) => typeof Le.value == "string") || []), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*variable*/
    8 && st(t(7, a = o && (lt.getVariable(o, "string") || nt.awaitGlobalVariable(o, "string", "")) || so("temp", "string", ""))), e.$$.dirty[0] & /*componentContext*/
    1 && le(t(22, l = lt.getDerivedFromVars(lt.json.accessibility))), e.$$.dirty[0] & /*componentContext*/
    1 && He(t(21, c = lt.getDerivedFromVars(lt.json.is_enabled))), e.$$.dirty[0] & /*componentContext*/
    1 && Ye(t(20, u = lt.getDerivedFromVars(lt.json.selected_color))), e.$$.dirty[0] & /*componentContext*/
    1 && fe(t(19, f = lt.getDerivedFromVars(lt.json.default_color))), e.$$.dirty[0] & /*componentContext*/
    1 && ke(t(18, _ = lt.getDerivedFromVars(lt.json.text_color))), e.$$.dirty[0] & /*componentContext*/
    1 && ve(t(17, h = lt.getDerivedFromVars(lt.json.font_size))), e.$$.dirty[0] & /*componentContext*/
    1 && tt(t(16, m = lt.getDerivedFromVars(lt.json.font_weight))), e.$$.dirty[0] & /*componentContext*/
    1 && _e(t(15, p = lt.getDerivedFromVars(lt.json.font_family))), e.$$.dirty[0] & /*componentContext*/
    1 && be(t(14, w = lt.getDerivedFromVars(lt.json.orientation))), e.$$.dirty[0] & /*componentContext*/
    1 && P(t(13, k = lt.getDerivedFromVars(lt.json.item_spacing))), e.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || lt.logError(J(new Error('Empty "options" in "radio"')))), e.$$.dirty[0] & /*componentContext, hasError*/
    9 | e.$$.dirty[1] & /*variable, $jsonAccessibility*/
    72) {
      let Le = !1;
      o ? (Nt.hasAction() || (T == null ? void 0 : T.mode) === "exclude") && (Le = !0, lt.logError(J(new Error('Cannot show "radio" inside component with an action or inside accessibility mode=exclude')))) : (Le = !0, lt.logError(J(new Error('Missing "value_variable" in "radio"')))), ge !== Le && t(3, ge = Le);
    }
    e.$$.dirty[0] & /*isEnabled*/
    16 | e.$$.dirty[1] & /*$jsonIsEnabled*/
    32768 && t(4, Se = fn(Ze, Se)), e.$$.dirty[0] & /*selectedColor*/
    67108864 | e.$$.dirty[1] & /*$jsonSelectedColor*/
    16384 && t(26, F = fr(ie, 1, F)), e.$$.dirty[0] & /*defaultColor*/
    134217728 | e.$$.dirty[1] & /*$jsonDefaultColor*/
    8192 && t(27, Ct = fr(de, 1, Ct)), e.$$.dirty[0] & /*textColor*/
    268435456 | e.$$.dirty[1] & /*$jsonTextColor*/
    4096 && t(28, ft = fr(De, 1, ft)), e.$$.dirty[0] & /*fontSize*/
    536870912 | e.$$.dirty[1] & /*$jsonFontSize*/
    2048 && t(29, St = typeof Xe == "number" && Xe > 0 ? Xe : St), e.$$.dirty[0] & /*fontWeight*/
    1073741824 | e.$$.dirty[1] & /*$jsonFontWeight, $jsonFontFamily*/
    1536 && (t(30, Tt = hi(Ie, void 0, Tt)), Ae && typeof Ae == "string" ? t(31, $e = nt.typefaceProvider(Ae, { fontWeight: Tt || 400 })) : t(31, $e = "")), e.$$.dirty[1] & /*$jsonOrientation, orientation*/
    258 && t(32, Y = U === "horizontal" || U === "vertical" ? U : Y), e.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    132 && t(33, At = typeof E == "number" && E >= 0 ? E : At), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*$jsonAccessibility*/
    64 && (T != null && T.description ? t(6, _t = $o(T)) : lt.logError(J(new Error('Missing accessibility "description" for radio'), { level: "warn" }))), e.$$.dirty[0] & /*componentContext*/
    1 && t(12, N = lt.id || `radio_${Math.random().toString(36).slice(2)}`), e.$$.dirty[0] & /*isEnabled*/
    16 && t(11, R = { disabled: !Se }), e.$$.dirty[1] & /*orientation*/
    2 && t(10, L = { [Y]: !0 }), e.$$.dirty[0] & /*selectedColor, defaultColor, textColor, fontSize, fontWeight*/
    2080374784 | e.$$.dirty[1] & /*fontFamily*/
    1 && t(9, ee = {
      "--divkit-radio-selected-color": F,
      "--divkit-radio-default-color": Ct,
      ...ft ? { "--divkit-radio-text-color": ft } : {},
      ...St ? { "font-size": ae(St) } : {},
      ...Tt ? { "font-weight": Tt } : {},
      ...$e ? { "font-family": $e } : {}
    }), e.$$.dirty[1] & /*itemSpacing*/
    4 && t(8, ce = `gap: ${ae(At)}`), e.$$.dirty[0] & /*container, componentContext, prevId*/
    33554437 && pe && lt.json && (ut && (nt.unregisterFocusable(ut), t(25, ut = void 0)), lt.id && !lt.fakeElement && (t(25, ut = lt.id), nt.registerFocusable(ut, {
      focus() {
        if (pe) {
          const Le = pe.querySelector("input");
          Le && Le.focus();
        }
      }
    })));
  }, [
    lt,
    kt,
    pe,
    ge,
    Se,
    s,
    _t,
    a,
    ce,
    ee,
    L,
    R,
    N,
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
    Be,
    Qt,
    ut,
    F,
    Ct,
    ft,
    St,
    Tt,
    $e,
    Y,
    At,
    o,
    i,
    n,
    T,
    E,
    U,
    Ae,
    Ie,
    Xe,
    De,
    de,
    ie,
    Ze,
    Jt,
    he
  ];
}
class ny extends Br {
  constructor(r) {
    super(), Or(this, r, ry, ty, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const oy = "appkit-progress", iy = "appkit-progress__linear", sy = "appkit-progress__circular", Qo = {
  progress: oy,
  progress__linear: iy,
  "progress__linear-fill": "appkit-progress__linear-fill",
  "progress__linear-fill_indeterminate": "appkit-progress__linear-fill_indeterminate",
  "progress-linear-indeterminate": "appkit-progress-linear-indeterminate",
  progress__circular: sy,
  "progress__circular-track": "appkit-progress__circular-track",
  "progress__circular-fill": "appkit-progress__circular-fill",
  "progress__circular-fill_indeterminate": "appkit-progress__circular-fill_indeterminate",
  "progress-circular-indeterminate": "appkit-progress-circular-indeterminate"
};
function ly(e) {
  let r, t;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function ay(e) {
  let r, t;
  return r = new wn({
    props: {
      cls: bt("progress", Qo, {}),
      style: (
        /*stl*/
        e[7]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: { default: [fy] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function cy(e) {
  let r, t, n, o, i;
  return {
    c() {
      r = xr("svg"), t = xr("circle"), n = xr("circle"), g(t, "class", Qo["progress__circular-track"]), g(t, "cx", Ko / 2), g(t, "cy", Ko / 2), g(t, "r", Gl), g(
        t,
        "stroke-width",
        /*trackThickness*/
        e[5]
      ), g(n, "class", o = bt("progress__circular-fill", Qo, {
        indeterminate: (
          /*isIndeterminate*/
          e[4]
        )
      })), g(n, "cx", Ko / 2), g(n, "cy", Ko / 2), g(n, "r", Gl), g(
        n,
        "stroke-width",
        /*trackThickness*/
        e[5]
      ), g(
        n,
        "stroke-dasharray",
        /*circularCircumference*/
        e[15]
      ), g(n, "stroke-dashoffset", i = /*isIndeterminate*/
      e[4] ? (
        /*circularCircumference*/
        e[15] * 0.75
      ) : (
        /*circularOffset*/
        e[8]
      )), g(n, "stroke-linecap", "round"), g(r, "class", Qo.progress__circular), g(r, "width", Ko), g(r, "height", Ko), g(r, "viewBox", "0 0 " + Ko + " " + Ko), g(r, "role", "progressbar"), g(
        r,
        "aria-valuenow",
        /*ariaValue*/
        e[6]
      ), g(r, "aria-valuemin", 0), g(r, "aria-valuemax", 100);
    },
    m(s, a) {
      K(s, r, a), wt(r, t), wt(r, n);
    },
    p(s, a) {
      a & /*trackThickness*/
      32 && g(
        t,
        "stroke-width",
        /*trackThickness*/
        s[5]
      ), a & /*isIndeterminate*/
      16 && o !== (o = bt("progress__circular-fill", Qo, {
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
      s && q(r);
    }
  };
}
function uy(e) {
  let r, t, n;
  return {
    c() {
      r = Me("div"), t = Me("div"), g(t, "class", n = bt("progress__linear-fill", Qo, {
        indeterminate: (
          /*isIndeterminate*/
          e[4]
        )
      })), I(
        t,
        "width",
        /*isIndeterminate*/
        e[4] ? "30%" : (
          /*progressValue*/
          e[2] * 100 + "%"
        )
      ), g(r, "class", Qo.progress__linear), I(r, "height", ae(
        /*trackThickness*/
        e[5]
      )), g(r, "role", "progressbar"), g(
        r,
        "aria-valuenow",
        /*ariaValue*/
        e[6]
      ), g(r, "aria-valuemin", 0), g(r, "aria-valuemax", 100);
    },
    m(o, i) {
      K(o, r, i), wt(r, t);
    },
    p(o, i) {
      i & /*isIndeterminate*/
      16 && n !== (n = bt("progress__linear-fill", Qo, {
        indeterminate: (
          /*isIndeterminate*/
          o[4]
        )
      })) && g(t, "class", n), i & /*isIndeterminate, progressValue*/
      20 && I(
        t,
        "width",
        /*isIndeterminate*/
        o[4] ? "30%" : (
          /*progressValue*/
          o[2] * 100 + "%"
        )
      ), i & /*trackThickness*/
      32 && I(r, "height", ae(
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
      o && q(r);
    }
  };
}
function fy(e) {
  let r;
  function t(i, s) {
    return (
      /*progressStyle*/
      i[3] === "linear" ? uy : cy
    );
  }
  let n = t(e), o = n(e);
  return {
    c() {
      o.c(), r = xt();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = t(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && q(r), o.d(i);
    }
  };
}
function dy(e) {
  let r, t, n, o;
  const i = [ay, ly], s = [];
  function a(l, c) {
    return 0;
  }
  return ~(r = a()) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, [c]) {
      t && t.p(l, c);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      re(t), o = !1;
    },
    d(l) {
      l && q(n), ~r && s[r].d(l);
    }
  };
}
const Ko = 48, Gl = 20;
function _y(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h, m = C, p = () => (m(), m = S(c, (De) => t(19, h = De)), c), w, k = C, N = () => (k(), k = S(l, (De) => t(20, w = De)), l), R, L = C, ee = () => (L(), L = S(a, (De) => t(21, R = De)), a), ce, T = C, X = () => (T(), T = S(s, (De) => t(22, ce = De)), s), le, E = C, D = () => (E(), E = S(i, (De) => t(23, le = De)), i), P, U = C, Z = () => (U(), U = S(o, (De) => t(24, P = De)), o);
  e.$$.on_destroy.push(() => m()), e.$$.on_destroy.push(() => k()), e.$$.on_destroy.push(() => L()), e.$$.on_destroy.push(() => T()), e.$$.on_destroy.push(() => E()), e.$$.on_destroy.push(() => U());
  let { componentContext: be } = r, { layoutParams: Ae = void 0 } = r;
  Tr(Zr);
  let Ee = 0, _e = "linear", Ie = !1, $ = "#129386", tt = "rgba(0, 0, 0, .1)", Xe = 4;
  function qe() {
    t(2, Ee = 0), t(3, _e = "linear"), t(4, Ie = !1), t(16, $ = "#129386"), t(17, tt = "rgba(0, 0, 0, .1)"), t(5, Xe = 4);
  }
  const ve = 2 * Math.PI * Gl;
  return e.$$set = (De) => {
    "componentContext" in De && t(0, be = De.componentContext), "layoutParams" in De && t(1, Ae = De.layoutParams);
  }, e.$$.update = () => {
    e.$$.dirty & /*componentContext*/
    1 && t(18, n = be.origJson), e.$$.dirty & /*origJson*/
    262144 && n && qe(), e.$$.dirty & /*componentContext*/
    1 && Z(t(14, o = be.getDerivedFromVars(be.json.value))), e.$$.dirty & /*componentContext*/
    1 && D(t(13, i = be.getDerivedFromVars(be.json.style))), e.$$.dirty & /*componentContext*/
    1 && X(t(12, s = be.getDerivedFromVars(be.json.is_indeterminate))), e.$$.dirty & /*componentContext*/
    1 && ee(t(11, a = be.getDerivedFromVars(be.json.active_color))), e.$$.dirty & /*componentContext*/
    1 && N(t(10, l = be.getDerivedFromVars(be.json.inactive_color))), e.$$.dirty & /*componentContext*/
    1 && p(t(9, c = be.getDerivedFromVars(be.json.track_thickness))), e.$$.dirty & /*$jsonValue, progressValue*/
    16777220 && t(2, Ee = typeof P == "number" ? Math.max(0, Math.min(1, P)) : Ee), e.$$.dirty & /*$jsonStyle, progressStyle*/
    8388616 && t(3, _e = le === "linear" || le === "circular" ? le : _e), e.$$.dirty & /*$jsonIsIndeterminate, isIndeterminate*/
    4194320 && t(4, Ie = fn(ce, Ie)), e.$$.dirty & /*$jsonActiveColor, activeColor*/
    2162688 && t(16, $ = fr(R, 1, $)), e.$$.dirty & /*$jsonInactiveColor, inactiveColor*/
    1179648 && t(17, tt = fr(w, 1, tt)), e.$$.dirty & /*$jsonTrackThickness, trackThickness*/
    524320 && t(5, Xe = typeof h == "number" && h >= 0 ? h : Xe), e.$$.dirty & /*progressValue*/
    4 && t(8, u = ve * (1 - Ee)), e.$$.dirty & /*activeColor, inactiveColor*/
    196608 && t(7, f = {
      "--divkit-progress-active-color": $,
      "--divkit-progress-inactive-color": tt
    }), e.$$.dirty & /*isIndeterminate, progressValue*/
    20 && t(6, _ = Ie ? void 0 : Math.round(Ee * 100));
  }, [
    be,
    Ae,
    Ee,
    _e,
    Ie,
    Xe,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    ve,
    $,
    tt,
    n,
    h,
    w,
    R,
    ce,
    le,
    P
  ];
}
class py extends Br {
  constructor(r) {
    super(), Or(this, r, _y, dy, Vr, { componentContext: 0, layoutParams: 1 });
  }
}
const gy = "appkit-table", hy = "appkit-table_halign_start", my = "appkit-table_halign_center", by = "appkit-table_halign_end", yy = "appkit-table_valign_start", wy = "appkit-table_valign_center", ky = "appkit-table_valign_end", vy = "appkit-table__cell", jy = "appkit-table__cell_halign_left", Cy = "appkit-table__cell_halign_start", Ey = "appkit-table__cell_halign_center", Ay = "appkit-table__cell_halign_right", Sy = "appkit-table__cell_halign_end", Vy = "appkit-table__cell_valign_top", Fy = "appkit-table__cell_valign_center", Iy = "appkit-table__cell_valign_bottom", Dy = "appkit-table__cell_valign_baseline", Ty = "appkit-table__separator", My = "appkit-table__separator_row", Py = "appkit-table__separator_col", Wo = {
  table: gy,
  table_halign_start: hy,
  table_halign_center: my,
  table_halign_end: by,
  table_valign_start: yy,
  table_valign_center: wy,
  table_valign_end: ky,
  table__cell: vy,
  table__cell_halign_left: jy,
  table__cell_halign_start: Cy,
  table__cell_halign_center: Ey,
  table__cell_halign_right: Ay,
  table__cell_halign_end: Sy,
  table__cell_valign_top: Vy,
  table__cell_valign_center: Fy,
  table__cell_valign_bottom: Iy,
  table__cell_valign_baseline: Dy,
  table__separator: Ty,
  table__separator_row: My,
  table__separator_col: Py
};
function Nu(e, r, t) {
  const n = e.slice();
  return n[35] = r[t], n;
}
function zu(e, r, t) {
  const n = e.slice();
  return n[38] = r[t], n;
}
function Ny(e) {
  let r, t;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function zy(e) {
  let r, t;
  return r = new wn({
    props: {
      cls: bt(
        "table",
        Wo,
        /*mods*/
        e[7]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      style: (
        /*style*/
        e[6]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      parentOf: (
        /*items*/
        e[2]
      ),
      $$slots: { default: [Oy] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = bt(
        "table",
        Wo,
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Ou(e) {
  var a, l, c, u, f, _, h, m;
  let r, t, n, o = `${/*placement*/
  ((l = (a = e[38].layoutParams.gridArea) == null ? void 0 : a.x) != null ? l : 0) + 1} / span ${/*placement*/
  (u = (c = e[38].layoutParams.gridArea) == null ? void 0 : c.colSpan) != null ? u : 1}`, i = `${/*placement*/
  ((_ = (f = e[38].layoutParams.gridArea) == null ? void 0 : f.y) != null ? _ : 0) + 1} / span ${/*placement*/
  (m = (h = e[38].layoutParams.gridArea) == null ? void 0 : h.rowSpan) != null ? m : 1}`, s;
  return t = new Qn({
    props: {
      componentContext: (
        /*placement*/
        e[38].componentContext
      ),
      layoutParams: (
        /*placement*/
        e[38].layoutParams
      )
    }
  }), {
    c() {
      r = Me("div"), Ht(t.$$.fragment), g(r, "class", n = bt("table__cell", Wo, {
        halign: (
          /*placement*/
          e[38].cellHAlign
        ),
        valign: (
          /*placement*/
          e[38].cellVAlign
        )
      })), I(r, "grid-column", o), I(r, "grid-row", i), I(
        r,
        "background",
        /*placement*/
        e[38].backgroundStyle || void 0
      );
    },
    m(p, w) {
      K(p, r, w), Lt(t, r, null), s = !0;
    },
    p(p, w) {
      var N, R, L, ee, ce, T, X, le;
      const k = {};
      w[0] & /*cellPlacements*/
      16 && (k.componentContext = /*placement*/
      p[38].componentContext), w[0] & /*cellPlacements*/
      16 && (k.layoutParams = /*placement*/
      p[38].layoutParams), t.$set(k), (!s || w[0] & /*cellPlacements*/
      16 && n !== (n = bt("table__cell", Wo, {
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
      ((R = (N = p[38].layoutParams.gridArea) == null ? void 0 : N.x) != null ? R : 0) + 1} / span ${/*placement*/
      (ee = (L = p[38].layoutParams.gridArea) == null ? void 0 : L.colSpan) != null ? ee : 1}`) && I(r, "grid-column", o), w[0] & /*cellPlacements*/
      16 && i !== (i = `${/*placement*/
      ((T = (ce = p[38].layoutParams.gridArea) == null ? void 0 : ce.y) != null ? T : 0) + 1} / span ${/*placement*/
      (le = (X = p[38].layoutParams.gridArea) == null ? void 0 : X.rowSpan) != null ? le : 1}`) && I(r, "grid-row", i), w[0] & /*cellPlacements*/
      16 && I(
        r,
        "background",
        /*placement*/
        p[38].backgroundStyle || void 0
      );
    },
    i(p) {
      s || (W(t.$$.fragment, p), s = !0);
    },
    o(p) {
      re(t.$$.fragment, p), s = !1;
    },
    d(p) {
      p && q(r), Rt(t);
    }
  };
}
function Bu(e) {
  let r, t, n, o;
  return {
    c() {
      r = Me("div"), t = Me("div"), o = gr(), g(t, "class", n = /*sep*/
      e[35].width ? Wo.table__separator_col : Wo.table__separator_row), I(
        t,
        "background",
        /*sep*/
        e[35].background
      ), I(
        t,
        "height",
        /*sep*/
        e[35].height || void 0
      ), I(
        t,
        "width",
        /*sep*/
        e[35].width || void 0
      ), g(r, "class", Wo.table__separator), I(
        r,
        "grid-column",
        /*sep*/
        e[35].gridColumn
      ), I(
        r,
        "grid-row",
        /*sep*/
        e[35].gridRow
      ), I(
        r,
        "margin-top",
        /*sep*/
        e[35].marginTop || void 0
      ), I(
        r,
        "margin-bottom",
        /*sep*/
        e[35].marginBottom || void 0
      ), I(
        r,
        "margin-left",
        /*sep*/
        e[35].marginLeft || void 0
      ), I(
        r,
        "margin-right",
        /*sep*/
        e[35].marginRight || void 0
      );
    },
    m(i, s) {
      K(i, r, s), wt(r, t), wt(r, o);
    },
    p(i, s) {
      s[0] & /*separatorElements*/
      32 && n !== (n = /*sep*/
      i[35].width ? Wo.table__separator_col : Wo.table__separator_row) && g(t, "class", n), s[0] & /*separatorElements*/
      32 && I(
        t,
        "background",
        /*sep*/
        i[35].background
      ), s[0] & /*separatorElements*/
      32 && I(
        t,
        "height",
        /*sep*/
        i[35].height || void 0
      ), s[0] & /*separatorElements*/
      32 && I(
        t,
        "width",
        /*sep*/
        i[35].width || void 0
      ), s[0] & /*separatorElements*/
      32 && I(
        r,
        "grid-column",
        /*sep*/
        i[35].gridColumn
      ), s[0] & /*separatorElements*/
      32 && I(
        r,
        "grid-row",
        /*sep*/
        i[35].gridRow
      ), s[0] & /*separatorElements*/
      32 && I(
        r,
        "margin-top",
        /*sep*/
        i[35].marginTop || void 0
      ), s[0] & /*separatorElements*/
      32 && I(
        r,
        "margin-bottom",
        /*sep*/
        i[35].marginBottom || void 0
      ), s[0] & /*separatorElements*/
      32 && I(
        r,
        "margin-left",
        /*sep*/
        i[35].marginLeft || void 0
      ), s[0] & /*separatorElements*/
      32 && I(
        r,
        "margin-right",
        /*sep*/
        i[35].marginRight || void 0
      );
    },
    d(i) {
      i && q(r);
    }
  };
}
function Oy(e) {
  let r, t, n, o = or(
    /*cellPlacements*/
    e[4]
  ), i = [];
  for (let c = 0; c < o.length; c += 1)
    i[c] = Ou(zu(e, o, c));
  const s = (c) => re(i[c], 1, 1, () => {
    i[c] = null;
  });
  let a = or(
    /*separatorElements*/
    e[5]
  ), l = [];
  for (let c = 0; c < a.length; c += 1)
    l[c] = Bu(Nu(e, a, c));
  return {
    c() {
      for (let c = 0; c < i.length; c += 1)
        i[c].c();
      r = gr();
      for (let c = 0; c < l.length; c += 1)
        l[c].c();
      t = xt();
    },
    m(c, u) {
      for (let f = 0; f < i.length; f += 1)
        i[f] && i[f].m(c, u);
      K(c, r, u);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(c, u);
      K(c, t, u), n = !0;
    },
    p(c, u) {
      if (u[0] & /*cellPlacements*/
      16) {
        o = or(
          /*cellPlacements*/
          c[4]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const _ = zu(c, o, f);
          i[f] ? (i[f].p(_, u), W(i[f], 1)) : (i[f] = Ou(_), i[f].c(), W(i[f], 1), i[f].m(r.parentNode, r));
        }
        for (dr(), f = o.length; f < i.length; f += 1)
          s(f);
        _r();
      }
      if (u[0] & /*separatorElements*/
      32) {
        a = or(
          /*separatorElements*/
          c[5]
        );
        let f;
        for (f = 0; f < a.length; f += 1) {
          const _ = Nu(c, a, f);
          l[f] ? l[f].p(_, u) : (l[f] = Bu(_), l[f].c(), l[f].m(t.parentNode, t));
        }
        for (; f < l.length; f += 1)
          l[f].d(1);
        l.length = a.length;
      }
    },
    i(c) {
      if (!n) {
        for (let u = 0; u < o.length; u += 1)
          W(i[u]);
        n = !0;
      }
    },
    o(c) {
      i = i.filter(Boolean);
      for (let u = 0; u < i.length; u += 1)
        re(i[u]);
      n = !1;
    },
    d(c) {
      c && (q(r), q(t)), sn(i, c), sn(l, c);
    }
  };
}
function By(e) {
  let r, t, n, o;
  const i = [zy, Ny], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (t && (dr(), re(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (t = s[r], t ? t.p(l, c) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      re(t), o = !1;
    },
    d(l) {
      l && q(n), ~r && s[r].d(l);
    }
  };
}
function Ly(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p = C, w = () => (p(), p = S(s, (fe) => t(22, m = fe)), s), k, N = C, R = () => (N(), N = S(i, (fe) => t(23, k = fe)), i), L, ee = C, ce = () => (ee(), ee = S(a, (fe) => t(24, L = fe)), a), T, X = C, le = () => (X(), X = S(l, (fe) => t(25, T = fe)), l);
  e.$$.on_destroy.push(() => p()), e.$$.on_destroy.push(() => N()), e.$$.on_destroy.push(() => ee()), e.$$.on_destroy.push(() => X());
  let { componentContext: E } = r, { layoutParams: D = void 0 } = r;
  const P = Tr(Zr), U = P.direction;
  yn(e, U, (fe) => t(21, h = fe));
  let Z = !1, be = "start", Ae = "start", Ee = [], _e, Ie = [], $ = [], tt = "";
  function Xe() {
    t(3, Z = !1), t(13, be = "start"), t(14, Ae = "start");
  }
  function qe(fe) {
    var te, He;
    if (!fe || !fe.style) return null;
    let ie = "#E0E0E0", Fe = 1;
    const Ye = fe.style;
    if (Ye.type === "shape_drawable" && Ye.shape) {
      const Be = Ye.shape;
      ie = fr(Be.background_color || Ye.color || "#E0E0E0"), Be.type === "rounded_rectangle" && (Fe = Number(((te = Be.item_height) == null ? void 0 : te.value) || ((He = Be.item_width) == null ? void 0 : He.value) || 1));
    } else Ye.color && (ie = fr(Ye.color));
    const Ze = fe.margins || {};
    return {
      color: ie,
      thickness: Fe,
      show_at_start: fe.show_at_start === 1 || fe.show_at_start === !0,
      show_between: fe.show_between !== 0 && fe.show_between !== !1,
      show_at_end: fe.show_at_end === 1 || fe.show_at_end === !0,
      marginTop: Number(Ze.top) || 0,
      marginBottom: Number(Ze.bottom) || 0,
      marginLeft: Number(Ze.left) || 0,
      marginRight: Number(Ze.right) || 0
    };
  }
  function ve(fe, ie) {
    const Fe = fe.header_row;
    let Ye = [];
    return fe.row_builder && Array.isArray(ie) ? Ye = fl(ie, P, E, fe.row_builder).map((te) => te.div) : Array.isArray(fe.rows) && (Ye = fe.rows), { rows: Ye, headerRow: Fe };
  }
  let De = [];
  function ue(fe, ie) {
    De = [];
    for (let Fe = 0; Fe < fe; Fe++)
      De[Fe] = new Array(ie).fill(!1);
  }
  function ke(fe, ie, Fe, Ye) {
    var Ze;
    for (let te = fe; te < fe + Fe && te < De.length; te++)
      for (let He = ie; He < ie + Ye && He < (((Ze = De[0]) == null ? void 0 : Ze.length) || 0); He++)
        De[te][He] = !0;
  }
  function de(fe, ie) {
    var Ye;
    if (fe >= De.length) return ie;
    let Fe = ie;
    for (; Fe < (((Ye = De[0]) == null ? void 0 : Ye.length) || 0) && De[fe][Fe]; )
      Fe++;
    return Fe;
  }
  function x(fe, ie, Fe, Ye, Ze, te, He, Be, it, st) {
    const lt = Array.isArray(fe.cells) ? fe.cells : [];
    let kt = 0;
    for (let nt = 0; nt < lt.length; nt++) {
      const Nt = lt[nt];
      if (!Nt || !Nt.div) continue;
      const ut = Math.max(1, Number(Nt.column_span) || 1), pe = Math.max(1, Number(Nt.row_span) || 1);
      kt = de(ie, kt), ke(ie, kt, pe, ut);
      const ge = Array.isArray(Fe) && Fe[kt], _t = Nt.content_alignment_horizontal || ge && ge.content_alignment_horizontal || void 0, Se = Nt.content_alignment_vertical || ge && ge.content_alignment_vertical || void 0;
      let F;
      const Ct = Nt.background || Ye;
      if (Ct && Array.isArray(Ct) && Ct.length > 0) {
        const Tt = Ct[0];
        Tt && Tt.type === "solid" && Tt.color && (F = fr(Tt.color));
      }
      const ft = it.get(Nt.div);
      let St;
      ft ? (st.delete(ft), St = ft) : St = E.produceChildContext(Nt.div, { path: `${te}_${nt}` }), He.push(St), Be.push({
        componentContext: St,
        layoutParams: {
          gridArea: {
            x: kt,
            y: ie,
            colSpan: ut,
            rowSpan: pe
          }
        },
        cellHAlign: _t,
        cellVAlign: Se,
        backgroundStyle: F
      }), kt += ut;
    }
  }
  return ln(() => {
    Ee.forEach((fe) => {
      fe.destroy();
    });
  }), e.$$set = (fe) => {
    "componentContext" in fe && t(0, E = fe.componentContext), "layoutParams" in fe && t(1, D = fe.layoutParams);
  }, e.$$.update = () => {
    var fe, ie, Fe;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(20, n = E.origJson), e.$$.dirty[0] & /*origJson*/
    1048576 && n && Xe(), e.$$.dirty[0] & /*componentContext*/
    1 && t(19, o = E.json.columns), e.$$.dirty[0] & /*componentContext*/
    1 && R(t(11, i = E.getDerivedFromVars(E.json.content_alignment_vertical))), e.$$.dirty[0] & /*componentContext*/
    1 && w(t(10, s = E.getDerivedFromVars(E.json.content_alignment_horizontal))), e.$$.dirty[0] & /*componentContext*/
    1 && ce(t(9, a = E.getDerivedFromVars(E.json.striped))), e.$$.dirty[0] & /*componentContext*/
    1 && le(t(8, l = typeof ((fe = E.json.row_builder) == null ? void 0 : fe.data) == "string" ? E.getDerivedFromVars((ie = E.json.row_builder) == null ? void 0 : ie.data, void 0, !0) : (Fe = E.json.row_builder) != null && Fe.data ? Uo(E.json.row_builder.data) : void 0)), e.$$.dirty[0] & /*jsonColumns*/
    524288 && (!Array.isArray(o) || o.length === 0 ? t(3, Z = !0) : t(3, Z = !1)), e.$$.dirty[0] & /*jsonColumns*/
    524288 && t(17, c = Array.isArray(o) ? o.length : 0), e.$$.dirty[0] & /*jsonColumns*/
    524288)
      if (Array.isArray(o)) {
        const Ye = [];
        for (let Ze = 0; Ze < o.length; Ze++) {
          const te = o[Ze], He = te == null ? void 0 : te.width;
          if ((He == null ? void 0 : He.type) === "fixed" && He.value)
            Ye.push(ae(Number(He.value)));
          else if ((He == null ? void 0 : He.type) === "match_parent") {
            const Be = Number(He.weight || 1);
            Ye.push(`${Be}fr`);
          } else
            Ye.push("auto");
        }
        t(16, tt = Ye.join(" "));
      } else
        t(16, tt = "");
    if (e.$$.dirty[0] & /*componentContext, $jsonRowBuilderData*/
    33554433 && t(18, u = ve(E.json, T)), e.$$.dirty[0] & /*items, prevContext, componentContext, jsonColumns, allRows, columnCount, $jsonStriped*/
    17727493) {
      const Ye = new Set(Ee), Ze = /* @__PURE__ */ new Map();
      _e === E && Ee.forEach((F) => {
        Ze.set(F.json, F);
      });
      const te = [], He = [], Be = [];
      let it = 0;
      const st = E.json, lt = Array.isArray(o) ? o : [], kt = !!(u.headerRow && Array.isArray(u.headerRow.cells)), nt = u.rows.length, Nt = (kt ? 1 : 0) + nt;
      ue(Nt + 10, c + 10);
      const ut = qe(st.row_separator), pe = qe(st.column_separator), ge = qe(st.header_separator);
      kt && (x(u.headerRow, it, lt, u.headerRow.background || st.header_background, void 0, -1, te, He, Ze, Ye), it++);
      const _t = u.rows;
      for (let F = 0; F < _t.length; F++) {
        const Ct = _t[F];
        if (!Ct || !Array.isArray(Ct.cells)) continue;
        let ft = Ct.background;
        !ft && L && (F % 2 === 0 ? ft = L.even_row_background : ft = L.odd_row_background), x(Ct, it, lt, ft, void 0, F, te, He, Ze, Ye), it++;
      }
      const Se = it;
      if (ge && kt && nt > 0 && Be.push({
        gridColumn: `1 / span ${c}`,
        gridRow: "1 / span 1",
        background: ge.color,
        height: ae(ge.thickness),
        marginTop: ge.marginTop ? ae(ge.marginTop) : void 0,
        marginBottom: ge.marginBottom ? ae(ge.marginBottom) : void 0,
        marginLeft: ge.marginLeft ? ae(ge.marginLeft) : void 0,
        marginRight: ge.marginRight ? ae(ge.marginRight) : void 0
      }), ut) {
        const F = kt ? 1 : 0;
        if (ut.show_at_start && nt > 0 && Be.push({
          gridColumn: `1 / span ${c}`,
          gridRow: `${F + 1} / span 1`,
          background: ut.color,
          height: ae(ut.thickness),
          marginTop: ut.marginTop ? ae(ut.marginTop) : void 0,
          marginBottom: ut.marginBottom ? ae(ut.marginBottom) : void 0,
          marginLeft: ut.marginLeft ? ae(ut.marginLeft) : void 0,
          marginRight: ut.marginRight ? ae(ut.marginRight) : void 0
        }), ut.show_between)
          for (let Ct = F; Ct < Se - 1; Ct++)
            Be.push({
              gridColumn: `1 / span ${c}`,
              gridRow: `${Ct + 1} / span 1`,
              background: ut.color,
              height: ae(ut.thickness),
              marginTop: ut.marginTop ? ae(ut.marginTop) : void 0,
              marginBottom: ut.marginBottom ? ae(ut.marginBottom) : void 0,
              marginLeft: ut.marginLeft ? ae(ut.marginLeft) : void 0,
              marginRight: ut.marginRight ? ae(ut.marginRight) : void 0
            });
        ut.show_at_end && nt > 0 && Be.push({
          gridColumn: `1 / span ${c}`,
          gridRow: `${Se} / span 1`,
          background: ut.color,
          height: ae(ut.thickness),
          marginTop: ut.marginTop ? ae(ut.marginTop) : void 0,
          marginBottom: ut.marginBottom ? ae(ut.marginBottom) : void 0,
          marginLeft: ut.marginLeft ? ae(ut.marginLeft) : void 0,
          marginRight: ut.marginRight ? ae(ut.marginRight) : void 0
        });
      }
      if (pe && c > 0) {
        if (pe.show_at_start && Be.push({
          gridColumn: "1 / span 1",
          gridRow: `1 / span ${Se}`,
          background: pe.color,
          width: ae(pe.thickness),
          marginTop: pe.marginTop ? ae(pe.marginTop) : void 0,
          marginBottom: pe.marginBottom ? ae(pe.marginBottom) : void 0,
          marginLeft: pe.marginLeft ? ae(pe.marginLeft) : void 0,
          marginRight: pe.marginRight ? ae(pe.marginRight) : void 0
        }), pe.show_between)
          for (let F = 0; F < c - 1; F++)
            Be.push({
              gridColumn: `${F + 1} / span 1`,
              gridRow: `1 / span ${Se}`,
              background: pe.color,
              width: ae(pe.thickness),
              marginTop: pe.marginTop ? ae(pe.marginTop) : void 0,
              marginBottom: pe.marginBottom ? ae(pe.marginBottom) : void 0,
              marginLeft: pe.marginLeft ? ae(pe.marginLeft) : void 0,
              marginRight: pe.marginRight ? ae(pe.marginRight) : void 0
            });
        pe.show_at_end && Be.push({
          gridColumn: `${c} / span 1`,
          gridRow: `1 / span ${Se}`,
          background: pe.color,
          width: ae(pe.thickness),
          marginTop: pe.marginTop ? ae(pe.marginTop) : void 0,
          marginBottom: pe.marginBottom ? ae(pe.marginBottom) : void 0,
          marginLeft: pe.marginLeft ? ae(pe.marginLeft) : void 0,
          marginRight: pe.marginRight ? ae(pe.marginRight) : void 0
        });
      }
      for (const F of Ye)
        F.destroy();
      t(2, Ee = te), t(4, Ie = He), t(5, $ = Be), t(15, _e = E);
    }
    e.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    8396800 && t(13, be = ul(k, be)), e.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    6307840 && t(14, Ae = cl(m, h, Ae)), e.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    24576 && t(7, f = {
      valign: be,
      halign: Ae
    }), e.$$.dirty[0] & /*gridTemplateColumns*/
    65536 && t(6, _ = {
      "grid-template-columns": tt
    });
  }, [
    E,
    D,
    Ee,
    Z,
    Ie,
    $,
    _,
    f,
    l,
    a,
    s,
    i,
    U,
    be,
    Ae,
    _e,
    tt,
    c,
    u,
    o,
    n,
    h,
    m,
    k,
    L,
    T
  ];
}
class Ry extends Br {
  constructor(r) {
    super(), Or(this, r, Ly, By, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Hy = "appkit-counter", Wy = "appkit-counter__container", Uy = "appkit-counter__button", Gy = "appkit-counter__value", Jy = "appkit-counter_disabled", Di = {
  counter: Hy,
  counter__container: Wy,
  counter__button: Uy,
  counter__value: Gy,
  counter_disabled: Jy
};
function qy(e) {
  let r, t;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Yy(e) {
  let r, t;
  return r = new wn({
    props: {
      cls: bt(
        "counter",
        Di,
        /*mods*/
        e[15]
      ),
      style: (
        /*stl*/
        e[14]
      ),
      customDescription: !0,
      customActions: "counter",
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: { default: [Ky] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = bt(
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Ky(e) {
  let r, t, n, o, i, s, a, l, c, u, f, _, h, m, p, w;
  return {
    c() {
      r = Me("div"), t = Me("button"), n = xr("svg"), o = xr("line"), s = gr(), a = Me("div"), l = Gn(
        /*value*/
        e[17]
      ), c = gr(), u = Me("button"), f = xr("svg"), _ = xr("line"), h = xr("line"), g(o, "x1", "6"), g(o, "y1", "12"), g(o, "x2", "18"), g(o, "y2", "12"), g(
        o,
        "stroke",
        /*iconColor*/
        e[6]
      ), g(o, "stroke-width", "2.5"), g(o, "stroke-linecap", "round"), g(n, "viewBox", "0 0 24 24"), g(n, "fill", "none"), g(n, "xmlns", "http://www.w3.org/2000/svg"), g(t, "class", Di.counter__button), t.disabled = i = !/*isEnabled*/
      e[3] || /*value*/
      e[17] <= /*minValue*/
      e[11], g(t, "aria-label", "Decrease value"), I(
        t,
        "background",
        /*value*/
        e[17] <= /*minValue*/
        e[11] ? (
          /*disabledButtonColor*/
          e[7]
        ) : (
          /*buttonColor*/
          e[4]
        )
      ), I(t, "width", ae(
        /*buttonSize*/
        e[5]
      )), I(t, "height", ae(
        /*buttonSize*/
        e[5]
      )), g(a, "class", Di.counter__value), I(a, "width", ae(
        /*valueWidth*/
        e[10]
      )), I(
        a,
        "color",
        /*textColor*/
        e[8]
      ), I(a, "font-size", ae(
        /*fontSize*/
        e[9]
      )), I(
        a,
        "font-weight",
        /*fontWeight*/
        e[13]
      ), g(_, "x1", "12"), g(_, "y1", "6"), g(_, "x2", "12"), g(_, "y2", "18"), g(
        _,
        "stroke",
        /*iconColor*/
        e[6]
      ), g(_, "stroke-width", "2.5"), g(_, "stroke-linecap", "round"), g(h, "x1", "6"), g(h, "y1", "12"), g(h, "x2", "18"), g(h, "y2", "12"), g(
        h,
        "stroke",
        /*iconColor*/
        e[6]
      ), g(h, "stroke-width", "2.5"), g(h, "stroke-linecap", "round"), g(f, "viewBox", "0 0 24 24"), g(f, "fill", "none"), g(f, "xmlns", "http://www.w3.org/2000/svg"), g(u, "class", Di.counter__button), u.disabled = m = !/*isEnabled*/
      e[3] || /*value*/
      e[17] >= /*maxValue*/
      e[12], g(u, "aria-label", "Increase value"), I(
        u,
        "background",
        /*value*/
        e[17] >= /*maxValue*/
        e[12] ? (
          /*disabledButtonColor*/
          e[7]
        ) : (
          /*buttonColor*/
          e[4]
        )
      ), I(u, "width", ae(
        /*buttonSize*/
        e[5]
      )), I(u, "height", ae(
        /*buttonSize*/
        e[5]
      )), g(r, "class", Di.counter__container);
    },
    m(k, N) {
      K(k, r, N), wt(r, t), wt(t, n), wt(n, o), wt(r, s), wt(r, a), wt(a, l), wt(r, c), wt(r, u), wt(u, f), wt(f, _), wt(f, h), p || (w = [
        Ke(
          t,
          "click",
          /*decrement*/
          e[36]
        ),
        Ke(
          u,
          "click",
          /*increment*/
          e[35]
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
      k[11]) && (t.disabled = i), N[0] & /*value, minValue, disabledButtonColor, buttonColor*/
      133264 && I(
        t,
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
      32 && I(t, "width", ae(
        /*buttonSize*/
        k[5]
      )), N[0] & /*buttonSize*/
      32 && I(t, "height", ae(
        /*buttonSize*/
        k[5]
      )), N[0] & /*value*/
      131072 && to(
        l,
        /*value*/
        k[17]
      ), N[0] & /*valueWidth*/
      1024 && I(a, "width", ae(
        /*valueWidth*/
        k[10]
      )), N[0] & /*textColor*/
      256 && I(
        a,
        "color",
        /*textColor*/
        k[8]
      ), N[0] & /*fontSize*/
      512 && I(a, "font-size", ae(
        /*fontSize*/
        k[9]
      )), N[0] & /*fontWeight*/
      8192 && I(
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
      k[12]) && (u.disabled = m), N[0] & /*value, maxValue, disabledButtonColor, buttonColor*/
      135312 && I(
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
      ), N[0] & /*buttonSize*/
      32 && I(u, "width", ae(
        /*buttonSize*/
        k[5]
      )), N[0] & /*buttonSize*/
      32 && I(u, "height", ae(
        /*buttonSize*/
        k[5]
      ));
    },
    d(k) {
      k && q(r), p = !1, Ur(w);
    }
  };
}
function Xy(e) {
  let r, t, n, o;
  const i = [Yy, qy], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[2] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (t && (dr(), re(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (t = s[r], t ? t.p(l, c) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      re(t), o = !1;
    },
    d(l) {
      l && q(n), ~r && s[r].d(l);
    }
  };
}
function Zy(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, ee, ce, T, X, le, E, D = C, P = () => (D(), D = S(i, (rt) => t(46, E = rt)), i), U, Z = C, be = () => (Z(), Z = S(ce, (rt) => t(47, U = rt)), ce), Ae, Ee = C, _e = () => (Ee(), Ee = S(ee, (rt) => t(48, Ae = rt)), ee), Ie, $ = C, tt = () => ($(), $ = S(L, (rt) => t(49, Ie = rt)), L), Xe, qe = C, ve = () => (qe(), qe = S(R, (rt) => t(50, Xe = rt)), R), De, ue = C, ke = () => (ue(), ue = S(N, (rt) => t(51, De = rt)), N), de, x = C, fe = () => (x(), x = S(k, (rt) => t(52, de = rt)), k), ie, Fe = C, Ye = () => (Fe(), Fe = S(w, (rt) => t(53, ie = rt)), w), Ze, te = C, He = () => (te(), te = S(p, (rt) => t(54, Ze = rt)), p), Be, it = C, st = () => (it(), it = S(m, (rt) => t(55, Be = rt)), m), lt, kt = C, nt = () => (kt(), kt = S(h, (rt) => t(56, lt = rt)), h), Nt, ut = C, pe = () => (ut(), ut = S(_, (rt) => t(57, Nt = rt)), _), ge, _t = C, Se = () => (_t(), _t = S(f, (rt) => t(58, ge = rt)), f), F, Ct = C, ft = () => (Ct(), Ct = S(u, (rt) => t(59, F = rt)), u), St, Tt = C, $e = () => (Tt(), Tt = S(c, (rt) => t(60, St = rt)), c), Y, At = C, Mt = () => (At(), At = S(l, (rt) => t(61, Y = rt)), l), Qt, Jt = C, he = () => (Jt(), Jt = S(a, (rt) => t(62, Qt = rt)), a), Le, pt = C, ye = () => (pt(), pt = S(s, (rt) => t(63, Le = rt)), s);
  e.$$.on_destroy.push(() => D()), e.$$.on_destroy.push(() => Z()), e.$$.on_destroy.push(() => Ee()), e.$$.on_destroy.push(() => $()), e.$$.on_destroy.push(() => qe()), e.$$.on_destroy.push(() => ue()), e.$$.on_destroy.push(() => x()), e.$$.on_destroy.push(() => Fe()), e.$$.on_destroy.push(() => te()), e.$$.on_destroy.push(() => it()), e.$$.on_destroy.push(() => kt()), e.$$.on_destroy.push(() => ut()), e.$$.on_destroy.push(() => _t()), e.$$.on_destroy.push(() => Ct()), e.$$.on_destroy.push(() => Tt()), e.$$.on_destroy.push(() => At()), e.$$.on_destroy.push(() => Jt()), e.$$.on_destroy.push(() => pt());
  let { componentContext: xe } = r, { layoutParams: Oe = void 0 } = r;
  const er = Tr(Zr), ze = Tr(To);
  let yt = !1, Ft = !0, It = "#4CAF50", cr = 36, Pe = "#ffffff", vt = "#cccccc", nr = "#1B2630", $t = 16, Xt = 700, pr = 40, kr = "#F5F5F5", Pt = "#E0E0E0", yr = 1, G = 999, dt = 6, Ut = 0, jt = 99, wr = 1;
  const Sr = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  };
  function hr() {
    t(3, Ft = !0), t(4, It = "#4CAF50"), t(5, cr = 36), t(6, Pe = "#ffffff"), t(7, vt = "#cccccc"), t(8, nr = "#1B2630"), t(9, $t = 16), t(13, Xt = 700), t(10, pr = 40), t(37, kr = "#F5F5F5"), t(38, Pt = "#E0E0E0"), t(39, yr = 1), t(40, G = 999), t(41, dt = 6), t(11, Ut = 0), t(12, jt = 99), t(42, wr = 1);
  }
  function Ir() {
    if (!Ft) return;
    const rt = Math.min(T + wr, jt);
    rt !== T && (i.setValue(rt), xe.json.on_increment_actions && xe.execAnyActions(xe.json.on_increment_actions), xe.json.on_value_change_actions && xe.execAnyActions(xe.json.on_value_change_actions));
  }
  function Gr() {
    if (!Ft) return;
    const rt = Math.max(T - wr, Ut);
    rt !== T && (i.setValue(rt), xe.json.on_decrement_actions && xe.execAnyActions(xe.json.on_decrement_actions), xe.json.on_value_change_actions && xe.execAnyActions(xe.json.on_value_change_actions));
  }
  let tr;
  return ln(() => {
    tr && (er.unregisterFocusable(tr), t(43, tr = void 0));
  }), e.$$set = (rt) => {
    "componentContext" in rt && t(0, xe = rt.componentContext), "layoutParams" in rt && t(1, Oe = rt.layoutParams);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(45, n = xe.origJson), e.$$.dirty[1] & /*origJson*/
    16384 && n && hr(), e.$$.dirty[0] & /*componentContext*/
    1 && t(44, o = xe.json.counter_value_variable), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*variable*/
    8192 && P(t(16, i = o && (xe.getVariable(o, "integer") || er.awaitGlobalVariable(o, "integer", 0)) || so("temp", "integer", 0))), e.$$.dirty[0] & /*componentContext*/
    1 && ye(t(34, s = xe.getDerivedFromVars(xe.json.is_enabled))), e.$$.dirty[0] & /*componentContext*/
    1 && he(t(33, a = xe.getDerivedFromVars(xe.json.button_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Mt(t(32, l = xe.getDerivedFromVars(xe.json.button_size))), e.$$.dirty[0] & /*componentContext*/
    1 && $e(t(31, c = xe.getDerivedFromVars(xe.json.icon_color))), e.$$.dirty[0] & /*componentContext*/
    1 && ft(t(30, u = xe.getDerivedFromVars(xe.json.disabled_button_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Se(t(29, f = xe.getDerivedFromVars(xe.json.text_color))), e.$$.dirty[0] & /*componentContext*/
    1 && pe(t(28, _ = xe.getDerivedFromVars(xe.json.font_size))), e.$$.dirty[0] & /*componentContext*/
    1 && nt(t(27, h = xe.getDerivedFromVars(xe.json.font_weight))), e.$$.dirty[0] & /*componentContext*/
    1 && st(t(26, m = xe.getDerivedFromVars(xe.json.value_width))), e.$$.dirty[0] & /*componentContext*/
    1 && He(t(25, p = xe.getDerivedFromVars(xe.json.background_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Ye(t(24, w = xe.getDerivedFromVars(xe.json.border_color))), e.$$.dirty[0] & /*componentContext*/
    1 && fe(t(23, k = xe.getDerivedFromVars(xe.json.border_width))), e.$$.dirty[0] & /*componentContext*/
    1 && ke(t(22, N = xe.getDerivedFromVars(xe.json.corner_radius))), e.$$.dirty[0] & /*componentContext*/
    1 && ve(t(21, R = xe.getDerivedFromVars(xe.json.padding))), e.$$.dirty[0] & /*componentContext*/
    1 && tt(t(20, L = xe.getDerivedFromVars(xe.json.min_value))), e.$$.dirty[0] & /*componentContext*/
    1 && _e(t(19, ee = xe.getDerivedFromVars(xe.json.max_value))), e.$$.dirty[0] & /*componentContext*/
    1 && be(t(18, ce = xe.getDerivedFromVars(xe.json.step))), e.$$.dirty[0] & /*isEnabled*/
    8 | e.$$.dirty[2] & /*$jsonIsEnabled*/
    2 && t(3, Ft = fn(Le, Ft)), e.$$.dirty[0] & /*buttonColor*/
    16 | e.$$.dirty[2] & /*$jsonButtonColor*/
    1 && t(4, It = fr(Qt, 1, It)), e.$$.dirty[0] & /*buttonSize*/
    32 | e.$$.dirty[1] & /*$jsonButtonSize*/
    1073741824 && t(5, cr = io(Y, cr)), e.$$.dirty[0] & /*iconColor*/
    64 | e.$$.dirty[1] & /*$jsonIconColor*/
    536870912 && t(6, Pe = fr(St, 1, Pe)), e.$$.dirty[0] & /*disabledButtonColor*/
    128 | e.$$.dirty[1] & /*$jsonDisabledButtonColor*/
    268435456 && t(7, vt = fr(F, 1, vt)), e.$$.dirty[0] & /*textColor*/
    256 | e.$$.dirty[1] & /*$jsonTextColor*/
    134217728 && t(8, nr = fr(ge, 1, nr)), e.$$.dirty[0] & /*fontSize*/
    512 | e.$$.dirty[1] & /*$jsonFontSize*/
    67108864 && t(9, $t = io(Nt, $t)), e.$$.dirty[1] & /*$jsonFontWeight*/
    33554432) {
      const rt = lt;
      if (typeof rt == "string")
        if (rt in Sr)
          t(13, Xt = Sr[rt]);
        else {
          const Et = parseInt(rt, 10);
          !Number.isNaN(Et) && Et > 0 && t(13, Xt = Et);
        }
      else typeof rt == "number" && rt > 0 && t(13, Xt = rt);
    }
    if (e.$$.dirty[0] & /*valueWidth*/
    1024 | e.$$.dirty[1] & /*$jsonValueWidth*/
    16777216 && t(10, pr = io(Be, pr)), e.$$.dirty[1] & /*$jsonBackgroundColor, backgroundColor*/
    8388672 && t(37, kr = fr(Ze, 1, kr)), e.$$.dirty[1] & /*$jsonBorderColor, borderColor*/
    4194432 && t(38, Pt = fr(ie, 1, Pt)), e.$$.dirty[1] & /*$jsonBorderWidth, borderWidth*/
    2097408 && t(39, yr = io(de, yr)), e.$$.dirty[1] & /*$jsonCornerRadius, cornerRadius*/
    1049088 && t(40, G = io(De, G)), e.$$.dirty[1] & /*$jsonPadding, padding*/
    525312 && t(41, dt = io(Xe, dt)), e.$$.dirty[0] & /*minValue, maxValue*/
    6144 | e.$$.dirty[1] & /*$jsonMinValue, $jsonMaxValue*/
    393216 && (t(11, Ut = io(Ie, Ut)), t(12, jt = io(Ae, jt))), e.$$.dirty[1] & /*$jsonStep, step*/
    67584) {
      const rt = io(U, wr);
      rt > 0 && t(42, wr = rt);
    }
    if (e.$$.dirty[0] & /*minValue, maxValue*/
    6144 | e.$$.dirty[1] & /*$valueVariable*/
    32768 && t(17, T = Fo(E || 0, Ut, jt)), e.$$.dirty[0] & /*componentContext, hasError*/
    5 | e.$$.dirty[1] & /*variable*/
    8192) {
      let rt = !1;
      o ? ze.hasAction() && (rt = !0, xe.logError(J(new Error('Cannot show "counter" inside component with an action')))) : (rt = !0, xe.logError(J(new Error('Missing "counter_value_variable" in "counter"')))), yt !== rt && t(2, yt = rt);
    }
    e.$$.dirty[0] & /*isEnabled*/
    8 && t(15, X = { disabled: !Ft }), e.$$.dirty[0] & /*iconColor*/
    64 | e.$$.dirty[1] & /*backgroundColor, borderColor, borderWidth, cornerRadius, padding*/
    1984 && t(14, le = {
      "--divkit-counter-bg": kr,
      "--divkit-counter-border-color": Pt,
      "--divkit-counter-border-width": ae(yr),
      "--divkit-counter-radius": ae(G),
      "--divkit-counter-padding": ae(dt),
      "--divkit-counter-icon-color": Pe
    }), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*prevId*/
    4096 && xe.json && (tr && (er.unregisterFocusable(tr), t(43, tr = void 0)), xe.id && !xe.fakeElement && (t(43, tr = xe.id), er.registerFocusable(tr, {
      focus() {
      }
    })));
  }, [
    xe,
    Oe,
    yt,
    Ft,
    It,
    cr,
    Pe,
    vt,
    nr,
    $t,
    pr,
    Ut,
    jt,
    Xt,
    le,
    X,
    i,
    T,
    ce,
    ee,
    L,
    R,
    N,
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
    Ir,
    Gr,
    kr,
    Pt,
    yr,
    G,
    dt,
    wr,
    tr,
    o,
    n,
    E,
    U,
    Ae,
    Ie,
    Xe,
    De,
    de,
    ie,
    Ze,
    Be,
    lt,
    Nt,
    ge,
    F,
    St,
    Y,
    Qt,
    Le
  ];
}
class Qy extends Br {
  constructor(r) {
    super(), Or(this, r, Zy, Xy, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const xy = "appkit-webview__frame", Ys = {
  webview__frame: xy,
  "webview__aspect-wrapper": "appkit-webview__aspect-wrapper"
};
function $y(e) {
  let r, t;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function ew(e) {
  let r, t;
  return r = new wn({
    props: {
      cls: bt("webview", Ys, {}),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      heightByAspect: (
        /*aspectPaddingBottom*/
        e[6] !== "0"
      ),
      $$slots: { default: [nw] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function tw(e) {
  let r, t, n, o, i, s;
  return {
    c() {
      r = Me("iframe"), g(r, "class", Ys.webview__frame), Xn(r.src, t = /*url*/
      e[2] || void 0) || g(r, "src", t), g(r, "srcdoc", n = /*url*/
      e[2] ? void 0 : (
        /*html*/
        e[3]
      )), g(
        r,
        "sandbox",
        /*sandbox*/
        e[7]
      ), g(r, "scrolling", o = /*allowScrolling*/
      e[4] ? "auto" : "no"), g(r, "title", "webview");
    },
    m(a, l) {
      K(a, r, l), i || (s = [
        Ke(
          r,
          "load",
          /*onLoad*/
          e[15]
        ),
        Ke(
          r,
          "error",
          /*onError*/
          e[16]
        )
      ], i = !0);
    },
    p(a, l) {
      l & /*url*/
      4 && !Xn(r.src, t = /*url*/
      a[2] || void 0) && g(r, "src", t), l & /*url, html*/
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
      a && q(r), i = !1, Ur(s);
    }
  };
}
function rw(e) {
  let r, t, n, o, i, s = `${/*aspectPaddingBottom*/
  e[6]}%`, a, l;
  return {
    c() {
      r = Me("div"), t = Me("iframe"), g(t, "class", Ys.webview__frame), Xn(t.src, n = /*url*/
      e[2] || void 0) || g(t, "src", n), g(t, "srcdoc", o = /*url*/
      e[2] ? void 0 : (
        /*html*/
        e[3]
      )), g(
        t,
        "sandbox",
        /*sandbox*/
        e[7]
      ), g(t, "scrolling", i = /*allowScrolling*/
      e[4] ? "auto" : "no"), g(t, "title", "webview"), g(r, "class", Ys["webview__aspect-wrapper"]), I(r, "padding-bottom", s);
    },
    m(c, u) {
      K(c, r, u), wt(r, t), a || (l = [
        Ke(
          t,
          "load",
          /*onLoad*/
          e[15]
        ),
        Ke(
          t,
          "error",
          /*onError*/
          e[16]
        )
      ], a = !0);
    },
    p(c, u) {
      u & /*url*/
      4 && !Xn(t.src, n = /*url*/
      c[2] || void 0) && g(t, "src", n), u & /*url, html*/
      12 && o !== (o = /*url*/
      c[2] ? void 0 : (
        /*html*/
        c[3]
      )) && g(t, "srcdoc", o), u & /*sandbox*/
      128 && g(
        t,
        "sandbox",
        /*sandbox*/
        c[7]
      ), u & /*allowScrolling*/
      16 && i !== (i = /*allowScrolling*/
      c[4] ? "auto" : "no") && g(t, "scrolling", i), u & /*aspectPaddingBottom*/
      64 && s !== (s = `${/*aspectPaddingBottom*/
      c[6]}%`) && I(r, "padding-bottom", s);
    },
    d(c) {
      c && q(r), a = !1, Ur(l);
    }
  };
}
function nw(e) {
  let r;
  function t(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[6] !== "0" ? rw : tw
    );
  }
  let n = t(e), o = n(e);
  return {
    c() {
      o.c(), r = xt();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = t(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && q(r), o.d(i);
    }
  };
}
function ow(e) {
  let r, t, n, o;
  const i = [ew, $y], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[5] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, [c]) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (t && (dr(), re(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (t = s[r], t ? t.p(l, c) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      re(t), o = !1;
    },
    d(l) {
      l && q(n), ~r && s[r].d(l);
    }
  };
}
function iw(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _ = C, h = () => (_(), _ = S(c, (de) => t(20, f = de)), c), m, p = C, w = () => (p(), p = S(l, (de) => t(21, m = de)), l), k, N = C, R = () => (N(), N = S(a, (de) => t(22, k = de)), a), L, ee = C, ce = () => (ee(), ee = S(s, (de) => t(23, L = de)), s), T, X = C, le = () => (X(), X = S(i, (de) => t(24, T = de)), i), E, D = C, P = () => (D(), D = S(o, (de) => t(25, E = de)), o), U, Z = C, be = () => (Z(), Z = S(n, (de) => t(26, U = de)), n);
  e.$$.on_destroy.push(() => _()), e.$$.on_destroy.push(() => p()), e.$$.on_destroy.push(() => N()), e.$$.on_destroy.push(() => ee()), e.$$.on_destroy.push(() => X()), e.$$.on_destroy.push(() => D()), e.$$.on_destroy.push(() => Z());
  let { componentContext: Ae } = r, { layoutParams: Ee = void 0 } = r;
  Tr(Zr);
  let _e = !1, Ie, $, tt = !1, Xe = !0, qe = !1, ve = !1, De = "0";
  function ue() {
    Ae.execAnyActions(Ae.json.on_load_actions);
  }
  function ke() {
    Ae.execAnyActions(Ae.json.on_error_actions);
  }
  return e.$$set = (de) => {
    "componentContext" in de && t(0, Ae = de.componentContext), "layoutParams" in de && t(1, Ee = de.layoutParams);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*componentContext*/
    1 && be(t(14, n = Ae.getDerivedFromVars(Ae.json.url))), e.$$.dirty & /*componentContext*/
    1 && P(t(13, o = Ae.getDerivedFromVars(Ae.json.html))), e.$$.dirty & /*componentContext*/
    1 && le(t(12, i = Ae.getDerivedFromVars(Ae.json.javascript_enabled))), e.$$.dirty & /*componentContext*/
    1 && ce(t(11, s = Ae.getDerivedFromVars(Ae.json.allow_scrolling))), e.$$.dirty & /*componentContext*/
    1 && R(t(10, a = Ae.getDerivedFromVars(Ae.json.allow_navigation))), e.$$.dirty & /*componentContext*/
    1 && w(t(9, l = Ae.getDerivedFromVars(Ae.json.scale_to_fit))), e.$$.dirty & /*componentContext*/
    1 && h(t(8, c = Ae.getDerivedFromVars(Ae.json.aspect))), e.$$.dirty & /*$jsonUrl, $jsonHtml, url, html, componentContext*/
    100663309 && (t(2, Ie = typeof U == "string" ? U : void 0), t(3, $ = typeof E == "string" ? E : void 0), !Ie && !$ ? (t(5, _e = !0), Ae.logError(J(new Error('Missing "url" or "html" in "webview"')))) : t(5, _e = !1)), e.$$.dirty & /*$jsonJsEnabled, javascriptEnabled*/
    16908288 && t(17, tt = fn(T, tt)), e.$$.dirty & /*$jsonAllowScrolling, allowScrolling*/
    8388624 && t(4, Xe = fn(L, Xe)), e.$$.dirty & /*$jsonAllowNavigation, allowNavigation*/
    4456448 && t(18, qe = fn(k, qe)), e.$$.dirty & /*$jsonScaleToFit, scaleToFit*/
    2621440 && t(19, ve = fn(m, ve)), e.$$.dirty & /*$jsonAspect*/
    1048576) {
      const de = f == null ? void 0 : f.ratio;
      de && Bn(de) ? t(6, De = (100 / Number(de)).toFixed(2)) : t(6, De = "0");
    }
    e.$$.dirty & /*javascriptEnabled, allowNavigation*/
    393216 && t(7, u = [
      "allow-same-origin",
      ...tt ? ["allow-scripts"] : [],
      ...qe ? ["allow-popups"] : []
    ].join(" "));
  }, [
    Ae,
    Ee,
    Ie,
    $,
    Xe,
    _e,
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
    ke,
    tt,
    qe,
    ve,
    f,
    m,
    k,
    L,
    T,
    E,
    U
  ];
}
class sw extends Br {
  constructor(r) {
    super(), Or(this, r, iw, ow, Vr, { componentContext: 0, layoutParams: 1 });
  }
}
function Lu(e, r, t) {
  const n = e.slice();
  return n[11] = r[t], n;
}
function lw(e) {
  let r, t;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function aw(e) {
  let r, t;
  return r = new wn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: { default: [cw] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Ru(e) {
  let r, t = [
    /*templateAttrs*/
    e[8]
  ], n = {};
  for (let o = 0; o < t.length; o += 1)
    n = jo(n, t[o]);
  return {
    c() {
      r = Me("template"), Go(r, n);
    },
    m(o, i) {
      K(o, r, i), r.content.innerHTML = /*templateContent*/
      e[7];
    },
    p(o, i) {
      i & /*templateContent*/
      128 && (r.content.innerHTML = /*templateContent*/
      o[7]), Go(r, n = No(t, [i & /*templateAttrs*/
      256 && /*templateAttrs*/
      o[8]]));
    },
    d(o) {
      o && q(r);
    }
  };
}
function Hu(e) {
  let r = (
    /*jsonItems*/
    e[5]
  ), t, n, o = Uu(e);
  return {
    c() {
      o.c(), t = xt();
    },
    m(i, s) {
      o.m(i, s), K(i, t, s), n = !0;
    },
    p(i, s) {
      s & /*jsonItems*/
      32 && Vr(r, r = /*jsonItems*/
      i[5]) ? (dr(), re(o, 1, 1, C), _r(), o = Uu(i), o.c(), W(o, 1), o.m(t.parentNode, t)) : o.p(i, s);
    },
    i(i) {
      n || (W(o), n = !0);
    },
    o(i) {
      re(o), n = !1;
    },
    d(i) {
      i && q(t), o.d(i);
    }
  };
}
function Wu(e) {
  let r, t;
  return r = new Qn({
    props: { componentContext: (
      /*item*/
      e[11]
    ) }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o & /*items*/
      8 && (i.componentContext = /*item*/
      n[11]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Uu(e) {
  let r, t, n = or(
    /*items*/
    e[3]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Wu(Lu(e, n, s));
  const i = (s) => re(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = xt();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      K(s, r, a), t = !0;
    },
    p(s, a) {
      if (a & /*items*/
      8) {
        n = or(
          /*items*/
          s[3]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const c = Lu(s, n, l);
          o[l] ? (o[l].p(c, a), W(o[l], 1)) : (o[l] = Wu(c), o[l].c(), W(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (dr(), l = n.length; l < o.length; l += 1)
          i(l);
        _r();
      }
    },
    i(s) {
      if (!t) {
        for (let a = 0; a < n.length; a += 1)
          W(o[a]);
        t = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        re(o[a]);
      t = !1;
    },
    d(s) {
      s && q(r), sn(o, s);
    }
  };
}
function Il(e) {
  let r, t, n, o = (
    /*templateContent*/
    e[7] && Ru(e)
  ), i = !/*hasItemsError*/
  e[4] && /*jsonItems*/
  e[5] && Hu(e), s = [
    /*componentContext*/
    e[0].json.custom_props || {}
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = jo(a, s[l]);
  return {
    c() {
      r = Me(
        /*desc*/
        e[2].element
      ), o && o.c(), t = gr(), i && i.c(), xo(
        /*desc*/
        e[2].element
      )(r, a);
    },
    m(l, c) {
      K(l, r, c), o && o.m(r, null), wt(r, t), i && i.m(r, null), e[9](r), n = !0;
    },
    p(l, c) {
      /*templateContent*/
      l[7] ? o ? o.p(l, c) : (o = Ru(l), o.c(), o.m(r, t)) : o && (o.d(1), o = null), !/*hasItemsError*/
      l[4] && /*jsonItems*/
      l[5] ? i ? (i.p(l, c), c & /*hasItemsError, jsonItems*/
      48 && W(i, 1)) : (i = Hu(l), i.c(), W(i, 1), i.m(r, null)) : i && (dr(), re(i, 1, 1, () => {
        i = null;
      }), _r()), xo(
        /*desc*/
        l[2].element
      )(r, a = No(s, [
        c & /*componentContext*/
        1 && /*componentContext*/
        (l[0].json.custom_props || {})
      ]));
    },
    i(l) {
      n || (W(i), n = !0);
    },
    o(l) {
      re(i), n = !1;
    },
    d(l) {
      l && q(r), o && o.d(), i && i.d(), e[9](null);
    }
  };
}
function cw(e) {
  let r = (
    /*desc*/
    e[2].element
  ), t, n = (
    /*desc*/
    e[2].element && Il(e)
  );
  return {
    c() {
      n && n.c(), t = xt();
    },
    m(o, i) {
      n && n.m(o, i), K(o, t, i);
    },
    p(o, i) {
      /*desc*/
      o[2].element ? r ? Vr(
        r,
        /*desc*/
        o[2].element
      ) ? (n.d(1), n = Il(o), r = /*desc*/
      o[2].element, n.c(), n.m(t.parentNode, t)) : n.p(o, i) : (n = Il(o), r = /*desc*/
      o[2].element, n.c(), n.m(t.parentNode, t)) : r && (n.d(1), n = null, r = /*desc*/
      o[2].element);
    },
    i: C,
    o(o) {
      re(n, o);
    },
    d(o) {
      o && q(t), n && n.d(o);
    }
  };
}
function uw(e) {
  let r, t, n, o;
  const i = [aw, lw], s = [];
  function a(l, c) {
    return (
      /*desc*/
      l[2] ? 0 : -1
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, [c]) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (t && (dr(), re(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (t = s[r], t ? t.p(l, c) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      re(t), o = !1;
    },
    d(l) {
      l && q(n), ~r && s[r].d(l);
    }
  };
}
function fw(e, r, t) {
  let n, { componentContext: o } = r, { layoutParams: i = void 0 } = r;
  const s = Tr(Zr);
  let a, l = null, c = "", u = {}, f = [], _ = !1;
  ro(() => {
    if (a && "divKitApiCallback" in a && typeof a.divKitApiCallback == "function") {
      const m = s.getExtensionContext(o);
      a.divKitApiCallback(m);
    }
  }), ln(() => {
    f.forEach((m) => {
      m.destroy();
    });
  });
  function h(m) {
    Dr[m ? "unshift" : "push"](() => {
      a = m, t(6, a);
    });
  }
  return e.$$set = (m) => {
    "componentContext" in m && t(0, o = m.componentContext), "layoutParams" in m && t(1, i = m.layoutParams);
  }, e.$$.update = () => {
    var m;
    if (e.$$.dirty & /*componentContext, desc*/
    5)
      if (typeof o.json.custom_type == "string" && o.json.custom_type && ((m = s.customComponents) != null && m.has(o.json.custom_type))) {
        if (t(2, l = s.customComponents.get(o.json.custom_type)), typeof l.template == "function") {
          const p = s.getExtensionContext(o), w = /* @__PURE__ */ new Map();
          for (const [k, N] of p.variables)
            w.set(k, N.getValue());
          t(7, c = l.template({
            props: o.json.custom_props,
            variables: w
          }));
        } else l.template && typeof l.template == "string" ? t(7, c = l.template) : t(7, c = "");
        t(8, u = {
          shadowrootmode: l.shadowRootMode || "open"
        });
      } else
        t(2, l = null), t(7, c = ";"), o.logError(J(new Error('Unknown or incorrect "custom_type" prop for div "custom"')));
    e.$$.dirty & /*componentContext*/
    1 && t(5, n = o.json.items), e.$$.dirty & /*jsonItems, componentContext*/
    33 && (n !== void 0 && !Array.isArray(n) ? (t(4, _ = !0), o.logError(J(new Error('Incorrect "items" prop for div "custom"')))) : t(4, _ = !1)), e.$$.dirty & /*items, hasItemsError, jsonItems, componentContext*/
    57 && (f.forEach((p) => {
      p.destroy();
    }), t(3, f = (!_ && n || []).map((p, w) => o.produceChildContext(p, { path: w }))));
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
class dw extends Br {
  constructor(r) {
    super(), Or(this, r, fw, uw, Vr, { componentContext: 0, layoutParams: 1 });
  }
}
const _w = "appkit-breadcrumb", pw = "appkit-breadcrumb__list", gw = "appkit-breadcrumb__item", hw = "appkit-breadcrumb__label", mw = "appkit-breadcrumb__label_link", bw = "appkit-breadcrumb__separator", pi = {
  breadcrumb: _w,
  breadcrumb__list: pw,
  breadcrumb__item: gw,
  breadcrumb__label: hw,
  breadcrumb__label_link: mw,
  breadcrumb__separator: bw
};
function Gu(e, r, t) {
  const n = e.slice();
  return n[26] = r[t], n[28] = t, n;
}
function yw(e) {
  let r, t;
  return r = new Nn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function ww(e) {
  let r, t;
  return r = new wn({
    props: {
      cls: bt("breadcrumb", pi, {}),
      style: (
        /*stl*/
        e[3]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: { default: [jw] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function kw(e) {
  let r, t = (
    /*crumb*/
    e[26].title + ""
  ), n, o, i, s, a, l, c;
  function u(...f) {
    return (
      /*click_handler*/
      e[22](
        /*crumb*/
        e[26],
        ...f
      )
    );
  }
  return {
    c() {
      r = Me("a"), n = Gn(t), i = gr(), s = Me("span"), a = Gn(
        /*separator*/
        e[2]
      ), g(r, "class", pi.breadcrumb__label + " " + pi.breadcrumb__label_link), g(r, "href", o = qu(
        /*crumb*/
        e[26]
      )), g(s, "class", pi.breadcrumb__separator), g(s, "aria-hidden", "true");
    },
    m(f, _) {
      K(f, r, _), wt(r, n), K(f, i, _), K(f, s, _), wt(s, a), l || (c = Ke(r, "click", u), l = !0);
    },
    p(f, _) {
      e = f, _ & /*crumbs*/
      16 && t !== (t = /*crumb*/
      e[26].title + "") && to(n, t), _ & /*crumbs*/
      16 && o !== (o = qu(
        /*crumb*/
        e[26]
      )) && g(r, "href", o), _ & /*separator*/
      4 && to(
        a,
        /*separator*/
        e[2]
      );
    },
    d(f) {
      f && (q(r), q(i), q(s)), l = !1, c();
    }
  };
}
function vw(e) {
  let r, t = (
    /*crumb*/
    e[26].title + ""
  ), n;
  return {
    c() {
      r = Me("span"), n = Gn(t), g(r, "class", pi.breadcrumb__label), g(r, "aria-current", "page");
    },
    m(o, i) {
      K(o, r, i), wt(r, n);
    },
    p(o, i) {
      i & /*crumbs*/
      16 && t !== (t = /*crumb*/
      o[26].title + "") && to(n, t);
    },
    d(o) {
      o && q(r);
    }
  };
}
function Ju(e) {
  let r, t;
  function n(s, a) {
    return (
      /*index*/
      s[28] === /*crumbs*/
      s[4].length - 1 ? vw : kw
    );
  }
  let o = n(e), i = o(e);
  return {
    c() {
      r = Me("li"), i.c(), t = gr(), g(r, "class", pi.breadcrumb__item);
    },
    m(s, a) {
      K(s, r, a), i.m(r, null), wt(r, t);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, t)));
    },
    d(s) {
      s && q(r), i.d();
    }
  };
}
function jw(e) {
  let r, t, n = or(
    /*crumbs*/
    e[4]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Ju(Gu(e, n, i));
  return {
    c() {
      r = Me("nav"), t = Me("ol");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(t, "class", pi.breadcrumb__list), g(r, "aria-label", "breadcrumb");
    },
    m(i, s) {
      K(i, r, s), wt(r, t);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(t, null);
    },
    p(i, s) {
      if (s & /*crumbs, separator, getHref, handleCrumbClick*/
      2068) {
        n = or(
          /*crumbs*/
          i[4]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Gu(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Ju(l), o[a].c(), o[a].m(t, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && q(r), sn(o, i);
    }
  };
}
function Cw(e) {
  let r, t, n, o;
  const i = [ww, yw], s = [];
  function a(l, c) {
    return 0;
  }
  return ~(r = a()) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, [c]) {
      t && t.p(l, c);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      re(t), o = !1;
    },
    d(l) {
      l && q(n), ~r && s[r].d(l);
    }
  };
}
function qu(e) {
  var r;
  return (r = e.action) != null && r.url && !e.action.url.startsWith("div-action://") ? e.action.url : "#";
}
function Ew(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _, h = C, m = () => (h(), h = S(c, (De) => t(16, _ = De)), c), p, w = C, k = () => (w(), w = S(l, (De) => t(17, p = De)), l), N, R = C, L = () => (R(), R = S(a, (De) => t(18, N = De)), a), ee, ce = C, T = () => (ce(), ce = S(s, (De) => t(19, ee = De)), s), X, le = C, E = () => (le(), le = S(i, (De) => t(20, X = De)), i), D, P = C, U = () => (P(), P = S(o, (De) => t(21, D = De)), o);
  e.$$.on_destroy.push(() => h()), e.$$.on_destroy.push(() => w()), e.$$.on_destroy.push(() => R()), e.$$.on_destroy.push(() => ce()), e.$$.on_destroy.push(() => le()), e.$$.on_destroy.push(() => P());
  let { componentContext: Z } = r, { layoutParams: be = void 0 } = r;
  const Ae = Tr(Zr);
  let Ee = "/", _e = "#0077CC", Ie = "#111111", $ = 14;
  function tt() {
    t(2, Ee = "/"), t(12, _e = "#0077CC"), t(13, Ie = "#111111"), t(14, $ = 14);
  }
  function Xe(De, ue) {
    const ke = Z.json.item_builder;
    if (ke && Array.isArray(ue) && Array.isArray(ke.prototypes)) {
      const de = [];
      return ue.forEach((x, fe) => {
        if (x === null || typeof x != "object")
          return;
        const ie = Ae.preparePrototypeVariables(ke.data_element_name || "it", x, fe);
        for (let Fe = 0; Fe < ke.prototypes.length; ++Fe) {
          const Ye = ke.prototypes[Fe];
          if (!Ye.title || Ye.selector !== void 0 && !Z.getJsonWithVars(Ye.selector, ie))
            continue;
          const te = { title: Z.getJsonWithVars(Ye.title, ie) };
          if (Ye.action) {
            const He = Z.getJsonWithVars(Ye.action, ie);
            He && (te.action = He);
          }
          de.push(te);
          break;
        }
      }), de;
    }
    return Array.isArray(De) ? De : Z.json.crumbs || [];
  }
  function qe(De, ue) {
    ue.action && (De.preventDefault(), Z.execAnyActions([ue.action]));
  }
  const ve = (De, ue) => qe(ue, De);
  return e.$$set = (De) => {
    "componentContext" in De && t(0, Z = De.componentContext), "layoutParams" in De && t(1, be = De.layoutParams);
  }, e.$$.update = () => {
    var De, ue, ke;
    e.$$.dirty & /*componentContext*/
    1 && t(15, n = Z.origJson), e.$$.dirty & /*origJson*/
    32768 && n && tt(), e.$$.dirty & /*componentContext*/
    1 && U(t(10, o = Z.getDerivedFromVars(Z.json.separator))), e.$$.dirty & /*componentContext*/
    1 && E(t(9, i = Z.getDerivedFromVars(Z.json.item_text_color))), e.$$.dirty & /*componentContext*/
    1 && T(t(8, s = Z.getDerivedFromVars(Z.json.active_text_color))), e.$$.dirty & /*componentContext*/
    1 && L(t(7, a = Z.getDerivedFromVars(Z.json.item_font_size))), e.$$.dirty & /*componentContext*/
    1 && k(t(6, l = Z.getDerivedFromVars(Z.json.crumbs))), e.$$.dirty & /*componentContext*/
    1 && m(t(5, c = typeof ((De = Z.json.item_builder) == null ? void 0 : De.data) == "string" ? Z.getDerivedFromVars((ue = Z.json.item_builder) == null ? void 0 : ue.data, void 0, !0) : (ke = Z.json.item_builder) != null && ke.data ? Uo(Z.json.item_builder.data) : void 0)), e.$$.dirty & /*$jsonSeparator, separator*/
    2097156 && t(2, Ee = typeof D == "string" && D.length > 0 ? D : Ee), e.$$.dirty & /*$jsonItemTextColor, itemTextColor*/
    1052672 && t(12, _e = fr(X, 1, _e)), e.$$.dirty & /*$jsonActiveTextColor, activeTextColor*/
    532480 && t(13, Ie = fr(ee, 1, Ie)), e.$$.dirty & /*$jsonItemFontSize, itemFontSize*/
    278528 && t(14, $ = Un(N, $)), e.$$.dirty & /*$jsonCrumbs, $jsonItemBuilderData*/
    196608 && t(4, u = Xe(p, _)), e.$$.dirty & /*itemTextColor, activeTextColor, itemFontSize*/
    28672 && t(3, f = {
      "--divkit-breadcrumb-item-color": _e,
      "--divkit-breadcrumb-active-color": Ie,
      "--divkit-breadcrumb-font-size": ae($)
    });
  }, [
    Z,
    be,
    Ee,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    qe,
    _e,
    Ie,
    $,
    n,
    _,
    p,
    N,
    ee,
    X,
    D,
    ve
  ];
}
class Aw extends Br {
  constructor(r) {
    super(), Or(this, r, Ew, Cw, Vr, { componentContext: 0, layoutParams: 1 });
  }
}
const Hd = {
  text: ig,
  container: Wg,
  separator: Zg,
  image: wc,
  gif: wc,
  grid: Ch,
  gallery: Kh,
  tabs: j0,
  state: Y0,
  pager: hm,
  indicator: Im,
  slider: g1,
  input: W1,
  select: x1,
  video: pb,
  switch: Ab,
  checkbox: Bb,
  radio: ny,
  progress: py,
  table: Ry,
  counter: Qy,
  webview: sw,
  custom: dw,
  breadcrumb: Aw
};
function Yu(e) {
  let r, t, n;
  var o = (
    /*component*/
    e[2]
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
  return o && (r = Ia(o, i(e))), {
    c() {
      r && Ht(r.$$.fragment), t = xt();
    },
    m(s, a) {
      r && Lt(r, s, a), K(s, t, a), n = !0;
    },
    p(s, a) {
      if (a & /*component*/
      4 && o !== (o = /*component*/
      s[2])) {
        if (r) {
          dr();
          const l = r;
          re(l.$$.fragment, 1, 0, () => {
            Rt(l, 1);
          }), _r();
        }
        o ? (r = Ia(o, i(s)), Ht(r.$$.fragment), W(r.$$.fragment, 1), Lt(r, t.parentNode, t)) : r = null;
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
      n || (r && W(r.$$.fragment, s), n = !0);
    },
    o(s) {
      r && re(r.$$.fragment, s), n = !1;
    },
    d(s) {
      s && q(t), r && Rt(r, s);
    }
  };
}
function Sw(e) {
  let r, t, n = (
    /*component*/
    e[2] && Yu(e)
  );
  return {
    c() {
      n && n.c(), r = xt();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), t = !0;
    },
    p(o, [i]) {
      /*component*/
      o[2] ? n ? (n.p(o, i), i & /*component*/
      4 && W(n, 1)) : (n = Yu(o), n.c(), W(n, 1), n.m(r.parentNode, r)) : n && (dr(), re(n, 1, 1, () => {
        n = null;
      }), _r());
    },
    i(o) {
      t || (W(n), t = !0);
    },
    o(o) {
      re(n), t = !1;
    },
    d(o) {
      o && q(r), n && n.d(o);
    }
  };
}
function Vw(e, r, t) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r;
  const i = Tr(Zr);
  let s;
  return e.$$set = (a) => {
    "componentContext" in a && t(0, n = a.componentContext), "layoutParams" in a && t(1, o = a.layoutParams);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*componentContext, component*/
    5) {
      const a = n.json;
      if (t(2, s = (a == null ? void 0 : a.type) && Hd[a.type] || void 0), !s) {
        let l;
        a != null && a.type && i.hasTemplate(a.type) ? l = "Recursive template" : l = "Unknown component", n.logError(J(new Error(l), {
          additional: {
            component: (a == null ? void 0 : a.type) || "<missing>"
          }
        }));
      }
    }
  }, [n, o, s];
}
class Qn extends Br {
  constructor(r) {
    super(), Or(this, r, Vw, Sw, Vr, { componentContext: 0, layoutParams: 1 });
  }
}
const Fw = {
  "root-svg-filters": "appkit-root-svg-filters"
};
function Ku(e, r, t) {
  const n = e.slice();
  n[1] = r[t];
  const o = (
    /*filterKey*/
    n[1].split(":")
  );
  return n[2] = o[0], n[3] = o[1], n;
}
function Xu(e) {
  let r, t, n = or([...Object.keys(
    /*svgFiltersMap*/
    e[0]
  )]), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Zu(Ku(e, n, i));
  return {
    c() {
      r = xr("svg"), t = xr("defs");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", Fw["root-svg-filters"]), g(r, "aria-hidden", "true");
    },
    m(i, s) {
      K(i, r, s), wt(r, t);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(t, null);
    },
    p(i, s) {
      if (s & /*svgFiltersMap, Object*/
      1) {
        n = or([...Object.keys(
          /*svgFiltersMap*/
          i[0]
        )]);
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Ku(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Zu(l), o[a].c(), o[a].m(t, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && q(r), sn(o, i);
    }
  };
}
function Iw(e) {
  let r, t;
  return {
    c() {
      r = xr("feBlend"), g(r, "in2", "SourceGraphic"), g(r, "mode", t = /*filterMode*/
      e[3]);
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o & /*svgFiltersMap*/
      1 && t !== (t = /*filterMode*/
      n[3]) && g(r, "mode", t);
    },
    d(n) {
      n && q(r);
    }
  };
}
function Dw(e) {
  let r;
  return {
    c() {
      r = xr("feComposite"), g(r, "in2", "SourceGraphic"), g(r, "operator", "arithmetic"), g(r, "k1", "1"), g(r, "k2", "0"), g(r, "k3", "0"), g(r, "k4", "0");
    },
    m(t, n) {
      K(t, r, n);
    },
    p: C,
    d(t) {
      t && q(r);
    }
  };
}
function Tw(e) {
  let r, t;
  return {
    c() {
      r = xr("feComposite"), g(r, "in2", "SourceGraphic"), g(r, "operator", t = /*filterMode*/
      e[3].split("_")[1]);
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o & /*svgFiltersMap*/
      1 && t !== (t = /*filterMode*/
      n[3].split("_")[1]) && g(r, "operator", t);
    },
    d(n) {
      n && q(r);
    }
  };
}
function Zu(e) {
  let r, t, n, o;
  function i(l, c) {
    return (
      /*filterMode*/
      l[3] === "source_in" || /*filterMode*/
      l[3] === "source_atop" ? Tw : (
        /*filterMode*/
        l[3] === "multiply" ? Dw : Iw
      )
    );
  }
  let s = i(e), a = s(e);
  return {
    c() {
      r = xr("filter"), t = xr("feFlood"), a.c(), g(t, "flood-color", n = /*filterColor*/
      e[2]), g(r, "id", o = /*svgFiltersMap*/
      e[0][
        /*filterKey*/
        e[1]
      ]);
    },
    m(l, c) {
      K(l, r, c), wt(r, t), a.m(r, null);
    },
    p(l, c) {
      c & /*svgFiltersMap*/
      1 && n !== (n = /*filterColor*/
      l[2]) && g(t, "flood-color", n), s === (s = i(l)) && a ? a.p(l, c) : (a.d(1), a = s(l), a && (a.c(), a.m(r, null))), c & /*svgFiltersMap*/
      1 && o !== (o = /*svgFiltersMap*/
      l[0][
        /*filterKey*/
        l[1]
      ]) && g(r, "id", o);
    },
    d(l) {
      l && q(r), a.d();
    }
  };
}
function Mw(e) {
  let r = Object.keys(
    /*svgFiltersMap*/
    e[0]
  ).length, t, n = r && Xu(e);
  return {
    c() {
      n && n.c(), t = xt();
    },
    m(o, i) {
      n && n.m(o, i), K(o, t, i);
    },
    p(o, [i]) {
      i & /*svgFiltersMap*/
      1 && (r = Object.keys(
        /*svgFiltersMap*/
        o[0]
      ).length), r ? n ? n.p(o, i) : (n = Xu(o), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: C,
    o: C,
    d(o) {
      o && q(t), n && n.d(o);
    }
  };
}
function Pw(e, r, t) {
  let { svgFiltersMap: n } = r;
  return e.$$set = (o) => {
    "svgFiltersMap" in o && t(0, n = o.svgFiltersMap);
  }, [n];
}
class Nw extends Br {
  constructor(r) {
    super(), Or(this, r, Pw, Mw, Vr, { svgFiltersMap: 0 });
  }
}
function zw(e, r, t, n) {
  const o = t[e.type];
  if (!o)
    return n(J(new Error("No such template"), {
      additional: {
        template: e.type
      }
    })), {
      json: e,
      templateContext: r
    };
  let i;
  const s = {};
  for (i in r)
    r.hasOwnProperty(i) && (s[i] = r[i]);
  for (i in e)
    i === "type" || i === "__proto__" || e.hasOwnProperty(i) && (s[i] = e[i]);
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
  for (i in e)
    i === "type" || i === "__proto__" || e.hasOwnProperty(i) && (l[i] = e[i]);
  return {
    json: l,
    templateContext: s
  };
}
const Cs = /* @__PURE__ */ new Map(), Jl = /* @__PURE__ */ new Map(), Es = /* @__PURE__ */ new Map(), ql = /* @__PURE__ */ new Map();
function H(e, r, t) {
  const n = {
    args: r,
    cb: t
  }, o = Cs.get(e) || [];
  Cs.has(e) || Cs.set(e, o), o.push(n);
  const i = e + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  Jl.set(i, n);
}
function Rr(e, r, t) {
  const n = {
    args: r,
    cb: t
  }, o = Es.get(e) || [];
  Es.has(e) || Es.set(e, o), o.push(n);
  const i = e + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  ql.set(i, n);
}
function Ow(e, r, t) {
  const n = e.args.length;
  let o = e.args.length, i = 0;
  const s = e.args[e.args.length - 1];
  if (typeof s == "object" && s.isVararg && (o = 1 / 0), r.length < n)
    return {
      type: "few",
      expected: n,
      found: r.length,
      def: e,
      hasOverloads: t
    };
  if (r.length > o)
    return {
      type: "many",
      expected: o,
      found: r.length,
      def: e,
      hasOverloads: t
    };
  for (let a = 0; a < r.length; ++a) {
    let l = a >= e.args.length ? e.args[e.args.length - 1] : e.args[a];
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
        def: e,
        hasOverloads: t
      };
  }
  return {
    type: "match",
    conversions: i
  };
}
function Wd(e, r) {
  if (!e)
    return {
      type: "missing"
    };
  let t = null, n = null;
  for (let o = 0; o < e.length; ++o) {
    const i = Ow(e[o], r, e.length > 1);
    if (i.type === "match") {
      (!n || n.conversions > i.conversions) && (n = {
        func: e[o],
        conversions: i.conversions
      });
      continue;
    }
    t || (t = i);
  }
  if (!n) {
    if (t)
      return t;
    throw new Error("Missing function");
  }
  return n;
}
function Yl(e, r, t) {
  return Wd(e.get(r), t);
}
function Ud(e, r) {
  return r.map((t, n) => {
    let o = n >= e.args.length ? e.args[e.args.length - 1] : e.args[n];
    return typeof o != "object" && (o = {
      type: o
    }), o.type === gt && t.type === Ne ? Wl(t) : t;
  });
}
function Qu(e, r) {
  return e + ":" + r.args.map((t) => typeof t == "string" ? t : t.type).join("#");
}
function Hn(e, r) {
  return {
    type: Re,
    value: ki(r, !0)
  };
}
function xu(e, r) {
  const t = Number(r.value);
  if (Number.isNaN(t) || !Number.isFinite(t))
    throw new Error("Unable to convert value to Number.");
  if (r.value === "")
    throw new Error("Unable to convert value to Number.");
  return {
    type: gt,
    value: t
  };
}
function Bw(e, r) {
  if (r.value > ss || r.value < ls)
    throw new Error("Unable to convert value to Integer.");
  const t = r.value - r.value % 1;
  return {
    type: Ne,
    value: pn(t)
  };
}
function Lw(e, r) {
  let t;
  try {
    t = pn(r.value);
  } catch {
    throw new Error("Unable to convert value to Integer.");
  }
  return {
    type: Ne,
    value: t
  };
}
function Rw(e, r) {
  return {
    type: Ne,
    value: pn(r.value ? 1 : 0)
  };
}
function Hw(e, r) {
  const t = Number(r.value);
  if (t !== 1 && t !== 0)
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Wr,
    value: t
  };
}
function Ww(e, r) {
  if (r.value !== "true" && r.value !== "false")
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Wr,
    value: r.value === "true" ? 1 : 0
  };
}
function Uw(e, r) {
  return {
    type: dn,
    value: ti(r.value)
  };
}
function Gw(e, r) {
  return ho(r.value), {
    type: eo,
    value: r.value
  };
}
function Jw(e, r) {
  try {
    return {
      type: Re,
      value: encodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to encodeUri string.");
  }
}
function qw(e, r) {
  try {
    return {
      type: Re,
      value: decodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to decodeUri string.");
  }
}
function ba(e, r, t, n) {
  const o = e.variables.get(r.value);
  let i;
  return o && o.getType() === n ? (i = o.getValue(), e.storeUsedVars || (e.storeUsedVars = /* @__PURE__ */ new Set()), e.storeUsedVars.add(o)) : i = t.value, n === "color" ? i = ti(i) : n === "url" && ho(i), {
    type: n,
    // value is synced with type by params
    value: i
  };
}
function ps(e, r, t) {
  return ba(e, r, t, t.type);
}
function $u(e, r, t) {
  return ba(e, r, t, "color");
}
function ef(e, r, t) {
  return ba(e, r, t, "url");
}
function Gd(e, r) {
  for (let t = 0; t < r.length; ++t) {
    const n = e.charAt(t), o = r.charAt(t);
    if (n !== o && o)
      return o;
  }
  return "";
}
const Ks = 1234567890;
function tf(e) {
  const r = new Intl.NumberFormat(e, {
    maximumFractionDigits: 0
  }), t = new Intl.NumberFormat(e, {
    minimumFractionDigits: 1
  }), n = r.format(Ks), o = t.format(Ks);
  return Gd(n, o);
}
function Yw(e) {
  const r = new Intl.NumberFormat(e, {
    useGrouping: !1
  }), t = new Intl.NumberFormat(e, {
    useGrouping: !0
  }), n = r.format(Ks), o = t.format(Ks);
  return Gd(n, o);
}
function Xo(e, r, t, n) {
  const o = t.value, i = o.replace(/,/g, "");
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
    let N = new Intl.NumberFormat((n == null ? void 0 : n.value) || void 0, {
      useGrouping: !1,
      minimumIntegerDigits: Math.min(Math.max(m, 1), 21),
      minimumFractionDigits: Math.min(Math.max(p, 0), 100),
      maximumFractionDigits: Math.min(Math.max(w, p, 0), 100),
      roundingMode: "halfEven"
    }).format(r.value);
    if (_ > -1 && h > 0) {
      const R = Yw(n == null ? void 0 : n.value), L = tf(n == null ? void 0 : n.value);
      if (R && L) {
        const ee = N.split(L), ce = ee[0];
        let T = "";
        for (let X = ce.length - 1; X >= 0; --X)
          T = ce[X] + T, X > 0 && (ce.length - X) % h === 0 && (T = R + T);
        N = T + (ee.length > 1 ? L + ee[1] : "");
      }
    }
    if (p === 0 && w === 0 && o.endsWith(".")) {
      const R = tf(n == null ? void 0 : n.value);
      R && (N += R);
    }
    return {
      type: Re,
      value: N
    };
  } catch (m) {
    throw new Error("Incorrect or unsupported number format." + m + " " + (n == null ? void 0 : n.value) || void 0);
  }
}
function Kw() {
  H("toString", [Ne], Hn), H("toString", [gt], Hn), H("toString", [Wr], Hn), H("toString", [dn], Hn), H("toString", [eo], Hn), H("toString", [Re], Hn), H("toString", [lr], Hn), H("toString", [sr], Hn), H("toNumber", [Ne], xu), H("toNumber", [Re], xu), H("toInteger", [gt], Bw), H("toInteger", [Re], Lw), H("toInteger", [Wr], Rw), H("toBoolean", [Ne], Hw), H("toBoolean", [Re], Ww), H("toColor", [Re], Uw), H("toUrl", [Re], Gw), H("encodeUri", [Re], Jw), H("decodeUri", [Re], qw), H("getIntegerValue", [Re, Ne], ps), H("getNumberValue", [Re, gt], ps), H("getBooleanValue", [Re, Wr], ps), H("getStringValue", [Re, Re], ps), H("getColorValue", [Re, dn], $u), H("getColorValue", [Re, Re], $u), H("getUrlValue", [Re, eo], ef), H("getUrlValue", [Re, Re], ef), Rr("toString", [Ne], Hn), Rr("toString", [gt], Hn), Rr("toString", [Wr], Hn), Rr("toString", [dn], Hn), Rr("toString", [eo], Hn), Rr("toString", [Re], Hn), Rr("toString", [lr], Hn), Rr("toString", [sr], Hn), H("decimalFormat", [Ne, Re], Xo), H("decimalFormat", [gt, Re], Xo), H("decimalFormat", [Ne, Re, Re], Xo), H("decimalFormat", [gt, Re, Re], Xo), Rr("decimalFormat", [Ne, Re], Xo), Rr("decimalFormat", [gt, Re], Xo), Rr("decimalFormat", [Ne, Re, Re], Xo), Rr("decimalFormat", [gt, Re, Re], Xo);
}
function Wn(e, r) {
  return !e || !r ? e : e.padStart(r, "0");
}
const Kl = {
  G(e, r) {
    let t;
    return e < 4 ? t = "short" : e === 5 ? t = "narrow" : t = "long", r({
      era: t
    }, "era");
  },
  d(e, r) {
    return Wn(r({
      day: "numeric"
    }, "day"), e > 1 ? e : 0);
  },
  D(e, r) {
    return Wn(r({}, "dayofyear"), e > 1 ? e : 0);
  },
  F(e, r) {
    return Wn(r({}, "dayofweekinmonth"), e > 1 ? e : 0);
  },
  M(e, r) {
    let t;
    return e === 1 ? t = "numeric" : e === 2 ? t = "2-digit" : e === 3 ? t = "short" : e === 5 ? t = "narrow" : t = "long", r({
      month: t,
      // to get a genitive case of month
      day: "numeric"
    }, "month");
  },
  y(e, r) {
    return Wn(r({
      year: e === 2 ? "2-digit" : "numeric"
    }, "year"), e > 2 ? e : void 0);
  },
  Y(e, r) {
    return Wn(r({
      year: e === 2 ? "2-digit" : "numeric"
    }, "weekyear"), e > 2 ? e : void 0);
  },
  u(e, r) {
    return Wn(r({
      year: "numeric"
    }, "extendedyear"), e > 1 ? e : void 0);
  },
  E(e, r) {
    let t;
    return e <= 3 ? t = "short" : e === 5 ? t = "narrow" : t = "long", r({
      weekday: t
    }, "weekday");
  },
  e(e, r) {
    return e > 2 ? Kl.E(e, r) : Wn(r({}, "weekdaynumeric"), e > 1 ? e : void 0);
  },
  w(e, r) {
    return Wn(r({}, "week"), e > 1 ? e : void 0);
  },
  W(e, r) {
    return Wn(r({}, "weekofmonth"), e > 1 ? e : void 0);
  },
  H(e, r) {
    const t = r({
      hour: "numeric",
      hour12: !1,
      hourCycle: "h23"
    }, "hour");
    if (!t)
      return;
    const n = String(Number(t) % 24);
    return Wn(n, e > 1 ? e : void 0);
  },
  h(e, r) {
    return Wn(r({
      hour: "numeric",
      hour12: !0,
      hourCycle: "h12"
    }, "hour"), e > 1 ? e : void 0);
  },
  K(e, r) {
    const t = r({
      hour: "numeric",
      hour12: !0,
      hourCycle: "h11"
    }, "hour");
    if (!t)
      return;
    const n = String(Number(t) % 12);
    return Wn(n, e > 1 ? e : void 0);
  },
  k(e, r) {
    return Wn(r({
      hour: "numeric",
      hour12: !1,
      hourCycle: "h24"
    }, "hour"), e > 2 ? e : void 0);
  },
  a(e, r) {
    return r({
      hour: "numeric",
      hour12: !0,
      hourCycle: "h11",
      dayPeriod: void 0
    }, "dayPeriod");
  },
  m(e, r) {
    return Wn(r({
      minute: "numeric"
    }, "minute"), e > 1 ? e : void 0);
  },
  s(e, r) {
    return Wn(r({
      second: "numeric"
    }, "second"), e > 1 ? e : void 0);
  },
  S(e, r) {
    const t = r({
      fractionalSecondDigits: Math.min(3, e)
    }, "fractionalSecond");
    return t && e > 3 ? t.padEnd(e, "0") : t;
  },
  z(e, r) {
    return r({
      timeZoneName: e === 4 ? "long" : "short"
    }, "timeZoneName");
  },
  Z(e, r) {
    const t = -Number(r({}, "timezoneoffset")), n = Math.abs(t / 60), o = Math.floor(n) * 100 + (n - Math.floor(n)) * 60;
    return (t >= 0 ? "+" : "-") + Wn(String(o), 4);
  }
}, Xw = /(\w)\1*|''|'(''|[^'])+('|$)|./g, Zw = /^'([^]*?)'?$/, Qw = /''/g, xw = /[a-zA-Z]/, ya = 1e3 * 60 * 60 * 24;
function $w(e) {
  const r = e.match(Zw);
  return r ? r[1].replace(Qw, "'") : e;
}
function Xl(e, r, t) {
  const n = e[r ? "getUTCDay" : "getDay"](), o = n < t ? t - n - 7 : t - n;
  return new Date(e.getTime() + ya * o);
}
function rf(e, r, t) {
  const n = new Date(e);
  return n[r ? "setUTCDate" : "setDate"](1), n[r ? "setUTCMonth" : "setMonth"](0), Xl(n, r, t);
}
function nf(e, r) {
  return Math.round((e.getTime() - r.getTime()) / ya);
}
function of(e, r, t) {
  let n = 0;
  const o = rf(e, r || !1, t), i = new Date(e);
  i[r ? "setUTCFullYear" : "setFullYear"](e[r ? "getUTCFullYear" : "getFullYear"]() + 1);
  const s = rf(i, r || !1, t), a = e.getTime() < o.getTime(), l = e.getTime() >= s.getTime();
  let c = e[r ? "getUTCFullYear" : "getFullYear"]();
  if (a) {
    --c, o[r ? "setUTCFullYear" : "setFullYear"](o[r ? "getUTCFullYear" : "getFullYear"]() - 1);
    const u = nf(Xl(e, r, t), o);
    n = Math.round(u / 7) + 1;
  } else if (l)
    ++c, n = 1;
  else {
    const u = nf(Xl(e, r, t), o);
    n = Math.round(u / 7) + 1;
  }
  return {
    week: n,
    year: c
  };
}
function ek(e, r, {
  locale: t,
  isUTC: n,
  weekStartDay: o = 0
} = {}) {
  const i = (s, a) => {
    if (a === "week") {
      const { week: u } = of(e, n || !1, o);
      return String(u);
    }
    if (a === "weekofmonth") {
      const u = e[n ? "getUTCDay" : "getDay"](), f = new Date(e);
      f[n ? "setUTCDate" : "setDate"](1);
      const _ = f[n ? "getUTCDay" : "getDay"](), h = e[n ? "getUTCDate" : "getDate"]();
      return String(Math.ceil(h / 7) + (u < _ ? 1 : 0));
    }
    if (a === "dayofweekinmonth") {
      const u = e[n ? "getUTCDate" : "getDate"]();
      return String(Math.ceil(u / 7));
    }
    if (a === "weekdaynumeric") {
      let u = e[n ? "getUTCDay" : "getDay"]();
      return u < o && (u += 7), String(u - o + 1);
    }
    if (a === "dayofyear") {
      const u = new Date(e);
      u[n ? "setUTCMonth" : "setMonth"](0), u[n ? "setUTCDate" : "setDate"](1), u[n ? "setUTCHours" : "setHours"](1), u[n ? "setUTCMinutes" : "setMinutes"](1), u[n ? "setUTCSeconds" : "setSeconds"](1);
      const f = Math.ceil((e.getTime() - u.getTime()) / ya);
      return String(f);
    }
    if (a === "weekyear") {
      let { year: u } = of(e, n || !1, o);
      return u < 1 && (u = 1 - u), s.year === "2-digit" ? String(u % 100) : String(u);
    }
    if (a === "extendedyear") {
      const u = e[n ? "getUTCFullYear" : "getFullYear"]();
      return s.year === "2-digit" ? String(u % 100) : String(u);
    }
    if (a === "timezoneoffset")
      return n ? "0" : String(e.getTimezoneOffset());
    n && (s.timeZone = "UTC");
    const c = new Intl.DateTimeFormat(t, s).formatToParts(e);
    for (let u = 0; u < c.length; ++u)
      if (c[u].type === a)
        return c[u].value;
  };
  return (r.match(Xw) || []).map((s) => {
    if (s === "''")
      return "'";
    const a = s[0];
    if (a === "'")
      return $w(s);
    if (Kl[a])
      return Kl[a](s.length, i);
    if (a.match(xw))
      throw new Error(
        `Format string contains an unescaped latin alphabet character "${a}"`
      );
    return s;
  }).join("");
}
function tk(e) {
  const r = new Date(e);
  return r.setUTCMonth(r.getUTCMonth() + 1), r.setUTCDate(0), r.getUTCDate();
}
function rk(e, r) {
  return {
    type: Pr,
    value: new Date(Number(r.value) * 1e3)
  };
}
function nk(e, r) {
  const t = new Date(Number(r.value) * 1e3), n = t.getTimezoneOffset();
  return t.setMinutes(t.getMinutes() - n), {
    type: Pr,
    value: t
  };
}
function ok() {
  return {
    type: Pr,
    value: /* @__PURE__ */ new Date()
  };
}
function ik(e, r, t) {
  return {
    type: Pr,
    value: new Date(r.value.getTime() + Number(t.value))
  };
}
function sk(e, r, t) {
  const n = new Date(r.value);
  return n.setUTCFullYear(Number(t.value)), {
    type: Pr,
    value: n
  };
}
function lk(e, r, t) {
  const n = Number(t.value);
  if (n < 1 || n > 12)
    throw new Error(`Expecting month in [1..12], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMonth(n - 1), {
    type: Pr,
    value: o
  };
}
function ak(e, r, t) {
  const n = new Date(r.value), o = Number(t.value);
  if (o <= 0 && o !== -1 || o > tk(n))
    throw new Error(`Unable to set day ${o} for date ${ki(r, !1)}.`);
  return n.setUTCDate(o === -1 ? 0 : o), {
    type: Pr,
    value: n
  };
}
function ck(e, r, t) {
  const n = Number(t.value);
  if (n < 0 || n > 23)
    throw new Error(`Expecting hours in [0..23], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCHours(n), {
    type: Pr,
    value: o
  };
}
function uk(e, r, t) {
  const n = Number(t.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting minutes in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMinutes(n), {
    type: Pr,
    value: o
  };
}
function fk(e, r, t) {
  const n = Number(t.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting seconds in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCSeconds(n), {
    type: Pr,
    value: o
  };
}
function dk(e, r, t) {
  const n = Number(t.value);
  if (n < 0 || n > 999)
    throw new Error(`Expecting millis in [0..999], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMilliseconds(n), {
    type: Pr,
    value: o
  };
}
const ri = (e) => (r, t) => {
  let o = new Date(t.value.getTime())[e]();
  return e === "getUTCMonth" ? ++o : e === "getUTCDay" && o === 0 && (o = 7), {
    type: Ne,
    value: pn(o)
  };
};
function Jd(e) {
  return (r, t, n, o) => ({
    type: Re,
    value: ek(t.value, n.value, {
      locale: o == null ? void 0 : o.value,
      isUTC: e,
      weekStartDay: r.weekStartDay
    })
  });
}
const _k = ri("getUTCFullYear"), pk = ri("getUTCMonth"), gk = ri("getUTCDate"), hk = ri("getUTCDay"), mk = ri("getUTCHours"), bk = ri("getUTCMinutes"), yk = ri("getUTCSeconds"), wk = ri("getUTCMilliseconds"), sf = Jd(!1), lf = Jd(!0);
function kk() {
  H("parseUnixTime", [Ne], rk), H("parseUnixTimeAsLocal", [Ne], nk), H("nowLocal", [], ok), H("addMillis", [Pr, Ne], ik), H("setYear", [Pr, Ne], sk), H("setMonth", [Pr, Ne], lk), H("setDay", [Pr, Ne], ak), H("setHours", [Pr, Ne], ck), H("setMinutes", [Pr, Ne], uk), H("setSeconds", [Pr, Ne], fk), H("setMillis", [Pr, Ne], dk), H("getYear", [Pr], _k), H("getMonth", [Pr], pk), H("getDay", [Pr], gk), H("getDayOfWeek", [Pr], hk), H("getHours", [Pr], mk), H("getMinutes", [Pr], bk), H("getSeconds", [Pr], yk), H("getMillis", [Pr], wk), H("formatDateAsLocal", [Pr, Re], sf), H("formatDateAsUTC", [Pr, Re], lf), H("formatDateAsLocalWithLocale", [Pr, Re, Re], sf), H("formatDateAsUTCWithLocale", [Pr, Re, Re], lf);
}
function vk(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function jk(e, r) {
  return {
    type: Ne,
    value: pn(r.value.length)
  };
}
function Ck(e, r, t) {
  return {
    type: Wr,
    value: r.value.includes(t.value) ? 1 : 0
  };
}
function Ek(e, r, t, n) {
  if (n.value < t.value)
    throw new Error("Indexes should be in ascending order.");
  if (t.value < 0 || t.value > r.value.length || n.value < 0 || n.value > r.value.length)
    throw new Error("Indexes are out of bounds.");
  return {
    type: Re,
    value: r.value.substring(Number(t.value), Number(n.value))
  };
}
function Ak(e, r, t, n) {
  let o;
  return t.value ? o = r.value.replace(new RegExp(vk(t.value), "g"), n.value) : o = r.value, {
    type: Re,
    value: o
  };
}
function Sk(e, r, t) {
  return {
    type: Ne,
    value: pn(r.value.indexOf(t.value))
  };
}
function Vk(e, r, t) {
  return {
    type: Ne,
    value: pn(r.value.lastIndexOf(t.value))
  };
}
function Fk(e, r) {
  return {
    type: Re,
    value: r.value.trim()
  };
}
function Ik(e, r) {
  return {
    type: Re,
    value: r.value.replace(/^\s+/, "")
  };
}
function Dk(e, r) {
  return {
    type: Re,
    value: r.value.replace(/\s+$/, "")
  };
}
function Tk(e, r) {
  return {
    type: Re,
    value: r.value.toUpperCase()
  };
}
function Mk(e, r) {
  return {
    type: Re,
    value: r.value.toLowerCase()
  };
}
function qd(e, r, t, n) {
  if (!n.value.length)
    return e.warnings.push(J(new Error("String for padding is empty."), {
      level: "warn"
    })), "";
  let o = "";
  const i = r.type === Re ? r.value : ki(r, !1);
  for (; o.length + i.length < t.value; )
    o += n.value;
  return o.length > 0 && o.length + i.length > t.value && (o = o.substring(0, Number(t.value) - Number(i.length))), o;
}
function af(e, r, t, n) {
  const o = qd(e, r, t, n);
  return {
    type: Re,
    value: o + ki(r, !1)
  };
}
function cf(e, r, t, n) {
  const o = qd(e, r, t, n);
  return {
    type: Re,
    value: ki(r, !1) + o
  };
}
function Pk(e, r, t) {
  let n;
  try {
    n = new RegExp(t.value);
  } catch {
    throw new Error("Invalid regular expression.");
  }
  return {
    type: Wr,
    value: n.test(r.value) ? 1 : 0
  };
}
function Nk(e, r) {
  return {
    type: Re,
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping
    value: r.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  };
}
function zk() {
  H("len", [Re], jk), H("contains", [Re, Re], Ck), H("substring", [Re, Ne, Ne], Ek), H("replaceAll", [Re, Re, Re], Ak), H("index", [Re, Re], Sk), H("lastIndex", [Re, Re], Vk), H("trim", [Re], Fk), H("trimLeft", [Re], Ik), H("trimRight", [Re], Dk), H("toUpperCase", [Re], Tk), H("toLowerCase", [Re], Mk), H("padStart", [Re, Ne, Re], af), H("padStart", [Ne, Ne, Re], af), H("padEnd", [Re, Ne, Re], cf), H("padEnd", [Ne, Ne, Re], cf), H("testRegex", [Re, Re], Pk), H("encodeRegex", [Re], Nk);
}
function Ok(e, r, t) {
  if (t.value === yi)
    throw new Error("Division by zero is not supported.");
  let n = r.value / t.value;
  return n = vi(e, n), Pn(e, n), {
    type: Ne,
    value: n
  };
}
function Bk(e, r, t) {
  if (t.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value / t.value;
  return {
    type: gt,
    value: n
  };
}
function Lk(e, r, t) {
  if (t.value === yi)
    throw new Error("Division by zero is not supported.");
  let n = r.value % t.value;
  return n = vi(e, n), Pn(e, n), {
    type: Ne,
    value: n
  };
}
function Rk(e, r, t) {
  if (t.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value % t.value;
  return {
    type: gt,
    value: n
  };
}
function Hk(e, ...r) {
  let t = r.length ? r[0].value : yi;
  for (let n = 1; n < r.length; ++n)
    t *= r[n].value, t = vi(e, t), Pn(e, t);
  return {
    type: Ne,
    value: t
  };
}
function Wk(e, ...r) {
  let t = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    t *= r[n].value;
  return {
    type: gt,
    value: t
  };
}
function Uk(e, ...r) {
  let t = r.length ? r[0].value : yi;
  for (let n = 1; n < r.length; ++n)
    t -= r[n].value, t = vi(e, t), Pn(e, t);
  return {
    type: Ne,
    value: t
  };
}
function Gk(e, ...r) {
  let t = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    t -= r[n].value;
  return {
    type: gt,
    value: t
  };
}
function Jk(e, ...r) {
  let t = yi;
  for (let n = 0; n < r.length; ++n)
    t += r[n].value, t = vi(e, t), Pn(e, t);
  return {
    type: Ne,
    value: t
  };
}
function qk(e, ...r) {
  let t = 0;
  for (let n = 0; n < r.length; ++n)
    t += r[n].value;
  return {
    type: gt,
    value: t
  };
}
function Yk(e, r) {
  const t = Fd(r.value);
  return Pn(e, t), {
    type: r.type,
    value: t
  };
}
function Kk(e, r) {
  const t = Math.abs(r.value);
  return {
    type: gt,
    value: t
  };
}
function Xk(e, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  let t = r[0].value;
  for (let n = 1; n < r.length; ++n)
    r[n].value > t && (t = r[n].value);
  return {
    type: Ne,
    value: t
  };
}
function Zk(e, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: gt,
    value: Math.max(...r.map((t) => t.value))
  };
}
function Qk(e, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  let t = r[0].value;
  for (let n = 1; n < r.length; ++n)
    r[n].value < t && (t = r[n].value);
  return {
    type: Ne,
    value: t
  };
}
function xk(e, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: gt,
    value: Math.min(...r.map((t) => t.value))
  };
}
function $k() {
  return {
    type: gt,
    value: Um
  };
}
function ev() {
  return {
    type: gt,
    value: Gm
  };
}
function tv(e) {
  return Pn(e, ss), {
    type: Ne,
    value: ss
  };
}
function rv(e) {
  return Pn(e, ls), {
    type: Ne,
    value: ls
  };
}
function nv(e, r) {
  const t = Math.sign(r.value);
  return {
    type: gt,
    // js treats Math.round(-0.5) as 0, which is different to other platforms
    value: t * Math.round(Math.abs(r.value))
  };
}
function ov(e, r) {
  return {
    type: gt,
    value: Math.floor(r.value)
  };
}
function iv(e, r) {
  return {
    type: gt,
    value: Math.ceil(r.value)
  };
}
function sv(e, r) {
  return {
    type: Ne,
    value: Id(r.value)
  };
}
function lv(e, r) {
  return {
    type: gt,
    value: Math.sign(r.value)
  };
}
function av(e, r, t) {
  let n;
  if (t.value === yi)
    n = r.value;
  else if (r.value === yi)
    n = pn(0);
  else {
    const o = Id(t.value);
    n = Fd(r.value) * o;
  }
  return Pn(e, n), {
    type: Ne,
    value: n
  };
}
function cv(e, r, t) {
  let n = Math.sign(t.value);
  n === 0 && (n = Object.is(n, 0) ? 1 : -1);
  const o = Math.abs(r.value) * n;
  return {
    type: gt,
    value: o
  };
}
function uv() {
  H("div", [Ne, Ne], Ok), H("div", [gt, gt], Bk), H("mod", [Ne, Ne], Lk), H("mod", [gt, gt], Rk), H("mul", [{
    type: Ne,
    isVararg: !0
  }], Hk), H("mul", [{
    type: gt,
    isVararg: !0
  }], Wk), H("sub", [{
    type: Ne,
    isVararg: !0
  }], Uk), H("sub", [{
    type: gt,
    isVararg: !0
  }], Gk), H("sum", [{
    type: Ne,
    isVararg: !0
  }], Jk), H("sum", [{
    type: gt,
    isVararg: !0
  }], qk), H("abs", [Ne], Yk), H("abs", [gt], Kk), H("max", [{
    type: Ne,
    isVararg: !0
  }], Xk), H("max", [{
    type: gt,
    isVararg: !0
  }], Zk), H("min", [{
    type: Ne,
    isVararg: !0
  }], Qk), H("min", [{
    type: gt,
    isVararg: !0
  }], xk), H("maxNumber", [], $k), H("minNumber", [], ev), H("maxInteger", [], tv), H("minInteger", [], rv), H("round", [gt], nv), H("floor", [gt], ov), H("ceil", [gt], iv), H("signum", [Ne], sv), H("signum", [gt], lv), H("copySign", [Ne, Ne], av), H("copySign", [gt, gt], cv);
}
function hl(e) {
  return (r, t) => {
    const n = _l(t.value);
    return {
      type: gt,
      value: n[e] / 255
    };
  };
}
function ml(e) {
  return (r, t, n) => {
    const o = _l(t.value);
    return o[e] = n.value * 255, {
      type: dn,
      value: ji(o)
    };
  };
}
const uf = hl("a"), ff = hl("r"), df = hl("g"), _f = hl("b"), pf = ml("a"), gf = ml("r"), hf = ml("g"), mf = ml("b");
function fv(e, r, t, n) {
  const o = {
    a: 255,
    r: r.value * 255,
    g: t.value * 255,
    b: n.value * 255
  };
  return {
    type: dn,
    value: ji(o)
  };
}
function dv(e, r, t, n, o) {
  const i = {
    a: r.value * 255,
    r: t.value * 255,
    g: n.value * 255,
    b: o.value * 255
  };
  return {
    type: dn,
    value: ji(i)
  };
}
function _v() {
  H("getColorAlpha", [Re], uf), H("getColorAlpha", [dn], uf), H("getColorRed", [Re], ff), H("getColorRed", [dn], ff), H("getColorGreen", [Re], df), H("getColorGreen", [dn], df), H("getColorBlue", [Re], _f), H("getColorBlue", [dn], _f), H("setColorAlpha", [Re, gt], pf), H("setColorAlpha", [dn, gt], pf), H("setColorRed", [Re, gt], gf), H("setColorRed", [dn, gt], gf), H("setColorGreen", [Re, gt], hf), H("setColorGreen", [dn, gt], hf), H("setColorBlue", [Re, gt], mf), H("setColorBlue", [dn, gt], mf), H("rgb", [gt, gt, gt], fv), H("argb", [gt, gt, gt, gt], dv);
}
function ni(e, r, t, n) {
  if (r.value < 0)
    throw new Error("Expecting non-negative number of milliseconds.");
  let o = pn(r.value) / pn(t);
  return Pn(e, o), n && (o = pn(o) % pn(n)), {
    type: Ne,
    value: o
  };
}
const Yd = 1e3, pv = 60, Kd = 1e3 * 60, gv = 60, Xd = 1e3 * 60 * 60, hv = 24, mv = 1e3 * 60 * 60 * 24, bv = 1e3 * 60 * 60 * 24 * 7;
function yv(e, r) {
  return ni(e, r, Yd, pv);
}
function wv(e, r) {
  return ni(e, r, Yd);
}
function kv(e, r) {
  return ni(e, r, Kd, gv);
}
function vv(e, r) {
  return ni(e, r, Kd);
}
function jv(e, r) {
  return ni(e, r, Xd, hv);
}
function Cv(e, r) {
  return ni(e, r, Xd);
}
function Ev(e, r) {
  return ni(e, r, mv);
}
function Av(e, r) {
  return ni(e, r, bv);
}
function Sv() {
  H("getIntervalSeconds", [Ne], yv), H("getIntervalTotalSeconds", [Ne], wv), H("getIntervalMinutes", [Ne], kv), H("getIntervalTotalMinutes", [Ne], vv), H("getIntervalHours", [Ne], jv), H("getIntervalTotalHours", [Ne], Cv), H("getIntervalTotalDays", [Ne], Ev), H("getIntervalTotalWeeks", [Ne], Av);
}
function Vv(e, r) {
  let t = e;
  for (let n = 0; n < r.length; ++n) {
    if (!t)
      throw new Error(`Missing property "${r[n]}" in the dict.`);
    const o = t[r[n]];
    if (o === void 0)
      throw new Error(`Missing property "${r[n]}" in the dict.`);
    t = o;
  }
  return t;
}
function oi(e) {
  return (r, t, ...n) => {
    if (n.length === 0)
      throw new Error("Non empty argument list is required.");
    const o = Vv(t.value, n.map((i) => i.value));
    return pl(r, o, e);
  };
}
function Gi(e, r) {
  return (t, n, o, ...i) => {
    try {
      return e(t, o, ...i);
    } catch {
      let a = n.value;
      return r === "color" ? a = ti(a) : r === "url" && ho(a), {
        type: r,
        value: a
      };
    }
  };
}
const As = oi(Re), Ss = oi(gt), Vs = oi(Ne), Fs = oi(Wr), Is = oi(dn), Ds = oi(eo), Zl = oi(lr), Ql = oi(sr), bf = Gi(As, Re), yf = Gi(Ss, gt), wf = Gi(Vs, Ne), kf = Gi(Fs, Wr), gs = Gi(Is, dn), hs = Gi(Ds, eo);
function Fv(e, r, ...t) {
  try {
    return Zl(e, r, ...t);
  } catch {
    return {
      type: lr,
      value: []
    };
  }
}
function Iv(e, r, ...t) {
  try {
    return Ql(e, r, ...t);
  } catch {
    return {
      type: sr,
      value: {}
    };
  }
}
function Dv(e, r, t) {
  return {
    type: Wr,
    value: t.value in r.value ? 1 : 0
  };
}
function Tv(e, r) {
  return {
    type: Wr,
    value: Object.keys(r.value).length ? 0 : 1
  };
}
function Mv(e, r) {
  return {
    type: Ne,
    value: pn(Object.keys(r.value).length)
  };
}
function vf(e, r) {
  return {
    type: lr,
    value: Object.keys(r.value)
  };
}
function jf(e, r) {
  return {
    type: lr,
    value: Object.values(r.value)
  };
}
function Pv() {
  const e = {
    type: Re,
    isVararg: !0
  };
  H("getDictString", [sr, e], As), H("getStringFromDict", [sr, e], As), H("getDictNumber", [sr, e], Ss), H("getNumberFromDict", [sr, e], Ss), H("getDictInteger", [sr, e], Vs), H("getIntegerFromDict", [sr, e], Vs), H("getDictBoolean", [sr, e], Fs), H("getBooleanFromDict", [sr, e], Fs), H("getDictColor", [sr, e], Is), H("getColorFromDict", [sr, e], Is), H("getDictUrl", [sr, e], Ds), H("getUrlFromDict", [sr, e], Ds), H("getDictOptString", [Re, sr, e], bf), H("getOptStringFromDict", [Re, sr, e], bf), H("getDictOptNumber", [gt, sr, e], yf), H("getOptNumberFromDict", [gt, sr, e], yf), H("getDictOptInteger", [Ne, sr, e], wf), H("getOptIntegerFromDict", [Ne, sr, e], wf), H("getDictOptBoolean", [Wr, sr, e], kf), H("getOptBooleanFromDict", [Wr, sr, e], kf), H("getDictOptColor", [dn, sr, e], gs), H("getOptColorFromDict", [dn, sr, e], gs), H("getDictOptColor", [Re, sr, e], gs), H("getOptColorFromDict", [Re, sr, e], gs), H("getDictOptUrl", [Re, sr, e], hs), H("getOptUrlFromDict", [Re, sr, e], hs), H("getDictOptUrl", [eo, sr, e], hs), H("getOptUrlFromDict", [eo, sr, e], hs), H("getDictFromDict", [sr, e], Ql), H("getArrayFromDict", [sr, e], Zl), H("getOptArrayFromDict", [sr, e], Fv), H("getOptDictFromDict", [sr, e], Iv), H("len", [sr], Mv), H("getDictKeys", [sr], vf), H("getDictValues", [sr], jf), Rr("getString", [sr, e], As), Rr("getBoolean", [sr, e], Fs), Rr("getInteger", [sr, e], Vs), Rr("getNumber", [sr, e], Ss), Rr("getUrl", [sr, e], Ds), Rr("getColor", [sr, e], Is), Rr("getArray", [sr, e], Zl), Rr("getDict", [sr, e], Ql), Rr("containsKey", [sr, Re], Dv), Rr("isEmpty", [sr], Tv), Rr("getKeys", [sr], vf), Rr("getValues", [sr], jf);
}
function ii(e, r) {
  return (t, n, o) => {
    if (o.value < 0 || o.value >= n.value.length)
      throw new Error(`Requested index (${o.value}) out of bounds array size (${n.value.length}).`);
    let i = n.value[Number(o.value)], s = typeof i;
    if (e === "array" && !Array.isArray(i) || e !== "array" && s !== e || s === "object" && i === null)
      throw s === "object" && (Array.isArray(i) ? s = "Array" : i === null ? s = "Null" : s = "Dict"), new Error(`Incorrect value type: expected ${Zn(r)}, got ${Zn(s)}.`);
    if (e === "number" && r === "integer") {
      Pn(t, i);
      try {
        i = pn(i);
      } catch {
        throw new Error("Cannot convert value to integer.");
      }
    }
    return e === "string" && r === "color" && (i = ti(i)), e === "string" && r === "url" && ho(i), {
      type: r,
      value: i
    };
  };
}
function Ji(e, r) {
  return (t, n, o, i) => {
    try {
      return e(t, n, o);
    } catch {
      let a = i.value;
      return r === "color" ? a = ti(a) : r === "url" && ho(a), {
        type: r,
        value: a
      };
    }
  };
}
const Ts = ii("string", "string"), Ms = ii("number", "number"), Ps = ii("number", "integer"), Ns = ii("boolean", "boolean"), zs = ii("string", "color"), Os = ii("string", "url"), xl = ii("array", "array"), $l = ii("object", "dict"), Cf = Ji(Ts, "string"), Ef = Ji(Ms, "number"), Af = Ji(Ps, "integer"), Sf = Ji(Ns, "boolean"), ms = Ji(zs, "color"), bs = Ji(Os, "url");
function Nv(e, r, t) {
  try {
    return xl(e, r, t);
  } catch {
    return {
      type: lr,
      value: []
    };
  }
}
function zv(e, r, t) {
  try {
    return $l(e, r, t);
  } catch {
    return {
      type: sr,
      value: {}
    };
  }
}
function Ov(e, r) {
  return {
    type: Ne,
    value: pn(r.value.length)
  };
}
function Bv(e, r) {
  return {
    type: Wr,
    value: r.value.length === 0 ? 1 : 0
  };
}
function Lv(e, r, t) {
  return r.value.length ? {
    type: lr,
    value: r.value.filter((n) => {
      const o = [];
      if (typeof n == "string")
        _o(n) && o.push([{
          type: dn,
          value: n
        }]), qm(n) && o.push([{
          type: eo,
          value: n
        }]), o.push([{
          type: Re,
          value: n
        }]);
      else if (typeof n == "number")
        Math.round(n) === n && (Pn(e, n), o.push([{
          type: Ne,
          value: pn(n)
        }])), o.push([{
          type: gt,
          value: n
        }]);
      else if (typeof n == "bigint")
        Pn(e, n), o.push([{
          type: Ne,
          value: n
        }]);
      else if (Array.isArray(n))
        o.push([{
          type: lr,
          value: n
        }]);
      else if (typeof n == "object") {
        if (n === null)
          throw new Error("Incorrect value type: Null");
        o.push([{
          type: sr,
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
      for (const u of o)
        if (i = Wd(t.value, u), "func" in i)
          break;
      let s;
      if ("func" in i)
        s = i.func;
      else {
        const u = t.value[0];
        Zd(u.name || "Function", o[0], i, !0);
      }
      const a = s.args[0], l = pl(
        e,
        n,
        typeof a == "string" ? a : a.type
      ), c = s.cb(e, l);
      if (c.type !== Wr)
        throw new Error("Function must return boolean value.");
      return c.value;
    })
  } : {
    type: lr,
    value: []
  };
}
function Rv() {
  H("getArrayString", [
    lr,
    Ne
  ], Ts), H("getStringFromArray", [
    lr,
    Ne
  ], Ts), H("getArrayNumber", [
    lr,
    Ne
  ], Ms), H("getNumberFromArray", [
    lr,
    Ne
  ], Ms), H("getArrayInteger", [
    lr,
    Ne
  ], Ps), H("getIntegerFromArray", [
    lr,
    Ne
  ], Ps), H("getArrayBoolean", [
    lr,
    Ne
  ], Ns), H("getBooleanFromArray", [
    lr,
    Ne
  ], Ns), H("getArrayColor", [
    lr,
    Ne
  ], zs), H("getColorFromArray", [
    lr,
    Ne
  ], zs), H("getArrayUrl", [
    lr,
    Ne
  ], Os), H("getUrlFromArray", [
    lr,
    Ne
  ], Os), H("getArrayFromArray", [
    lr,
    Ne
  ], xl), H("getDictFromArray", [
    lr,
    Ne
  ], $l), H("getArrayOptString", [
    lr,
    Ne,
    Re
  ], Cf), H("getOptStringFromArray", [
    lr,
    Ne,
    Re
  ], Cf), H("getArrayOptNumber", [
    lr,
    Ne,
    gt
  ], Ef), H("getOptNumberFromArray", [
    lr,
    Ne,
    gt
  ], Ef), H("getArrayOptInteger", [
    lr,
    Ne,
    Ne
  ], Af), H("getOptIntegerFromArray", [
    lr,
    Ne,
    Ne
  ], Af), H("getArrayOptBoolean", [
    lr,
    Ne,
    Wr
  ], Sf), H("getOptBooleanFromArray", [
    lr,
    Ne,
    Wr
  ], Sf), H("getArrayOptColor", [
    lr,
    Ne,
    dn
  ], ms), H("getOptColorFromArray", [
    lr,
    Ne,
    dn
  ], ms), H("getArrayOptColor", [
    lr,
    Ne,
    Re
  ], ms), H("getOptColorFromArray", [
    lr,
    Ne,
    Re
  ], ms), H("getArrayOptUrl", [
    lr,
    Ne,
    eo
  ], bs), H("getOptUrlFromArray", [
    lr,
    Ne,
    eo
  ], bs), H("getArrayOptUrl", [
    lr,
    Ne,
    Re
  ], bs), H("getOptUrlFromArray", [
    lr,
    Ne,
    Re
  ], bs), H("getOptArrayFromArray", [
    lr,
    Ne
  ], Nv), H("getOptDictFromArray", [
    lr,
    Ne
  ], zv), H("len", [
    lr
  ], Ov), Rr("getString", [lr, Ne], Ts), Rr("getInteger", [lr, Ne], Ps), Rr("getNumber", [lr, Ne], Ms), Rr("getBoolean", [lr, Ne], Ns), Rr("getUrl", [lr, Ne], Os), Rr("getColor", [lr, Ne], zs), Rr("getArray", [lr, Ne], xl), Rr("getDict", [lr, Ne], $l), Rr("isEmpty", [lr], Bv), Rr("filter", [lr, Jm], Lv);
}
function Ao(e) {
  return (r, t, n) => {
    if (!r.store) {
      if (!n)
        throw new Error("Missing value.");
      return {
        type: e,
        value: n.value
      };
    }
    let o;
    e === "boolean" ? o = "boolean" : e === "number" || e === "integer" ? o = "number" : o = "string";
    let i;
    if (r.store.get ? i = r.store.get(t.value, e) : r.store.getValue && (i = r.store.getValue(t.value, o)), i === void 0) {
      if (!n)
        throw new Error("Missing value.");
      return e === "url" && ho(n.value), {
        type: e,
        value: n.value
      };
    } else e === "url" && ho(i);
    return pl(r, i, e);
  };
}
function Hv() {
  H("getStoredIntegerValue", [Re, Ne], Ao(Ne)), H("getStoredNumberValue", [Re, gt], Ao(gt)), H("getStoredStringValue", [Re, Re], Ao(Re)), H("getStoredUrlValue", [Re, eo], Ao(eo)), H("getStoredUrlValue", [Re, Re], Ao(eo)), H("getStoredColorValue", [Re, dn], Ao(dn)), H("getStoredColorValue", [Re, Re], Ao(dn)), H("getStoredBooleanValue", [Re, Wr], Ao(Wr)), H("getStoredArrayValue", [Re], Ao(lr)), H("getStoredDictValue", [Re], Ao(sr));
}
function Wv() {
  return {
    type: gt,
    value: Math.PI
  };
}
function Uv(e, r) {
  return {
    type: gt,
    value: r.value / 180 * Math.PI
  };
}
function Gv(e, r) {
  return {
    type: gt,
    value: r.value / Math.PI * 180
  };
}
function Jv(e, r) {
  return {
    type: gt,
    value: Math.sin(r.value)
  };
}
function qv(e, r) {
  return {
    type: gt,
    value: Math.cos(r.value)
  };
}
function Yv(e, r) {
  return {
    type: gt,
    value: Math.tan(r.value)
  };
}
function Kv(e, r) {
  const t = Math.tan(r.value);
  if (Math.abs(t) < 1e-12)
    throw new Error("Cotangent is undefined for the given value.");
  return {
    type: gt,
    value: 1 / t
  };
}
function Xv(e, r) {
  return {
    type: gt,
    value: Math.atan(r.value)
  };
}
function Zv(e, r, t) {
  return {
    type: gt,
    value: Math.atan2(r.value, t.value)
  };
}
function Qv(e, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arcsine is undefined for the given value.");
  return {
    type: gt,
    value: Math.asin(r.value)
  };
}
function xv(e, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arccosine is undefined for the given value.");
  return {
    type: gt,
    value: Math.acos(r.value)
  };
}
function $v() {
  H("pi", [], Wv), H("toRadians", [gt], Uv), H("toDegrees", [gt], Gv), H("sin", [gt], Jv), H("cos", [gt], qv), H("tan", [gt], Yv), H("cot", [gt], Kv), H("atan", [gt], Xv), H("atan2", [gt, gt], Zv), H("asin", [gt], Qv), H("acos", [gt], xv);
}
function e2() {
  Kw(), kk(), Sv(), zk(), uv(), _v(), Pv(), Rv(), Hv(), $v();
}
e2();
function t2(e, r) {
  return {
    type: Re,
    value: r.value
  };
}
function r2(e, r) {
  return {
    type: gt,
    value: r.value
  };
}
function n2(e, r) {
  return Pn(e, r.value), {
    type: Ne,
    value: r.value
  };
}
function o2(e, r) {
  return {
    type: Wr,
    value: r.value ? 1 : 0
  };
}
function i2(e, r) {
  const t = Js(On(e, r.argument));
  switch (r.operator) {
    case "!":
      if (t.type === Wr)
        return {
          type: Wr,
          value: t.value ? 0 : 1
        };
      An(`${r.operator}${_n(t)}`, "A Boolean is expected after a unary not.");
    case "+":
    case "-":
      const n = r.operator === "+" ? 1 : -1;
      if (t.type === Ne) {
        const o = t.value * pn(n);
        return Pn(e, o), {
          type: Ne,
          value: o
        };
      } else {
        if (t.type === gt)
          return {
            type: gt,
            value: t.value * n
          };
        An(
          `${r.operator}${_n(t)}`,
          `A Number is expected after a unary ${r.operator === "+" ? "plus" : "minus"}.`
        );
      }
  }
}
function s2(e, r) {
  const t = Js(On(e, r.test));
  if (t.type === Wr)
    return t.value ? On(e, r.consequent) : On(e, r.alternate);
  An(
    `${_n(t)} ? ${_n(On(e, r.consequent))} : ${_n(On(e, r.alternate))}`,
    "Ternary must be called with a Boolean value as a condition."
  );
}
function l2(e, r) {
  try {
    return On(e, r.test);
  } catch {
    return On(e, r.alternate);
  }
}
function a2(e, r) {
  let t = "";
  if (r.quasis.length === 2 && r.quasis[0].value === "" && r.quasis[1].value === "")
    return On(e, r.expressions[0]);
  for (let n = 0; n < r.expressions.length; ++n)
    t += r.quasis[n].value, t += ki(On(e, r.expressions[n]), !0);
  return t += r.quasis[r.quasis.length - 1].value, {
    type: Re,
    value: t
  };
}
function c2(e, r) {
  const t = Js(On(e, r.left));
  if (t.type !== Wr && An(
    `${_n(t)} ${r.operator} ...`,
    `'${r.operator}' must be called with boolean operands.`
  ), r.operator === "||" && t.value)
    return t;
  if (r.operator === "&&" && !t.value)
    return {
      type: Wr,
      value: 0
    };
  const n = Js(On(e, r.right));
  return n.type !== Wr && An(
    `${_n(t)} ${r.operator} ${_n(n)}`,
    `Operator '${r.operator}' cannot be applied to different types: Boolean and ${Zn(n.type)}.`
  ), {
    type: Wr,
    value: n.value
  };
}
function u2(e, r, t) {
  let n;
  return r.type === Pr && t.type === Pr ? n = r.value.getTime() === t.value.getTime() : n = r.value === t.value, e === "!=" && (n = !n), {
    type: Wr,
    value: n ? 1 : 0
  };
}
function f2(e, r, t) {
  (r.type !== gt && r.type !== Ne && r.type !== Pr || t.type !== gt && t.type !== Ne && t.type !== Pr) && An(
    `${_n(r)} ${e} ${_n(t)}`,
    `Operator '${e}' cannot be applied to ${Zn(r.type)} type.`
  );
  let n;
  const o = r.type === Pr ? r.value.getTime() : r.value, i = t.type === Pr ? t.value.getTime() : t.value;
  return e === ">" ? n = o > i : e === ">=" ? n = o >= i : e === "<" ? n = o < i : n = o <= i, {
    type: Wr,
    value: n ? 1 : 0
  };
}
function d2(e, r, t, n) {
  if (t.type !== Re && t.type !== gt && t.type !== Ne && An(
    `${_n(t)} ${r} ${_n(n)}`,
    `Operator '${r}' cannot be applied to ${Zn(t.type)} type.`
  ), t.type === Re)
    return r === "-" && An(
      `${_n(t)} - ${_n(n)}`,
      `Operator '${r}' cannot be applied to ${Zn(t.type)} type.`
    ), {
      type: Re,
      value: t.value + n.value
    };
  let o = r === "+" ? t.value + n.value : t.value - n.value;
  if (t.type === Ne)
    try {
      o = vi(e, o), Pn(e, o);
    } catch (i) {
      An(
        `${_n(t)} ${r} ${_n(n)}`,
        i.message
      );
    }
  return {
    type: t.type,
    value: o
  };
}
function _2(e, r, t, n) {
  t.type !== Ne && t.type !== gt && An(
    `${_n(t)} ${r} ${_n(n)}`,
    `Operator '${r}' cannot be applied to ${Zn(t.type)} type.`
  );
  let o;
  if (r === "*")
    o = t.value * n.value;
  else if (r === "/" || r === "%")
    Number(n.value) === 0 && An(
      `${_n(t)} ${r} ${_n(n)}`,
      "Division by zero is not supported."
    ), r === "/" ? o = t.value / n.value : o = t.value % n.value;
  else
    throw new Error(`Unsupported operation ${r}`);
  if (t.type === Ne)
    try {
      o = vi(e, o), Pn(e, o);
    } catch (i) {
      An(
        `${_n(t)} ${r} ${_n(n)}`,
        i.message
      );
    }
  return {
    type: t.type,
    value: o
  };
}
function p2(e, r) {
  const t = r.operator;
  let n = On(e, r.left), o = On(e, r.right);
  if ((n.type === "number" && o.type === "integer" || n.type === "integer" && o.type === "number") && (n.type === "integer" ? n = Wl(n) : o.type === "integer" && (o = Wl(o))), n.type !== o.type && An(
    `${_n(n)} ${r.operator} ${_n(o)}`,
    `Operator '${t}' cannot be applied to different types: ${Zn(n.type)} and ${Zn(o.type)}.`
  ), t === "==" || t === "!=")
    return u2(t, n, o);
  if (t === ">" || t === ">=" || t === "<" || t === "<=")
    return f2(t, n, o);
  if (t === "+" || t === "-")
    return d2(e, t, n, o);
  if (t === "/" || t === "*" || t === "%")
    return _2(e, t, n, o);
  throw new Error(`Unsupported operation ${t}`);
}
function Xs(e) {
  return e.map(_n).join(", ");
}
function g2(e, r) {
  const t = r.callee.name;
  let n, o = r.arguments.map((a) => On(e, a));
  const i = t + ":" + o.map((a) => a.type).join("#");
  let s;
  if (e.customFunctions && (s = Yl(e.customFunctions, t, o)), !s || !("func" in s))
    if (Jl.has(i))
      s = {
        func: Jl.get(i),
        conversions: 0
      };
    else {
      const a = Yl(Cs, t, o);
      ("func" in a || !s || s.type === "missing") && (s = a);
    }
  if (s && (("expected" in s || "type" in s && s.type === "missing") && Zd(t, o, s), n = s.func, s.conversions && (o = Ud(n, o))), !n)
    throw new Error("Function not found");
  try {
    return n.cb(e, ...o);
  } catch (a) {
    if (a && a instanceof ha)
      throw a;
    const l = `${t}(${Xs(o)})`;
    An(l, a.message);
  }
}
function Zd(e, r, t, n = !1) {
  const o = r.map((a) => Zn(a.type)).join(", "), i = `${e}(${Xs(r)})`, s = n ? Km : An;
  if (t.type === "few" && r.length === 0 && t.hasOverloads)
    s(i, "Function requires non empty argument list.");
  else if (t.type === "many" || t.type === "few" || t.type === "mismatch")
    if (t.hasOverloads)
      s(i, `Function has no matching overload for given argument types: ${o}.`);
    else if (t.type === "many" || t.type === "few")
      t.def.args.some((a) => typeof a == "object" && a.isVararg) ? s(i, `At least ${t.def.args.length} argument(s) expected.`) : s(i, `Exactly ${t.def.args.length} argument(s) expected.`);
    else {
      const a = t.def.args.map((l) => Zn(typeof l == "string" ? l : l.type)).join(", ");
      s(i, `Invalid argument type: expected ${a}, got ${o}.`);
    }
  else
    s(i, `Unknown function name: ${e}.`);
}
function h2(e, r) {
  const t = r.method.name;
  let n, o = [r.object, ...r.arguments].map((s) => On(e, s));
  const i = t + ":" + o.map((s) => s.type).join("#");
  if (ql.has(i))
    n = ql.get(i);
  else {
    const s = Yl(Es, t, o);
    if ("expected" in s || "type" in s && s.type === "missing") {
      const a = o.slice(1).map((c) => Zn(c.type)).join(", "), l = `${t}(${Xs(o.slice(1))})`;
      s.type === "few" && o.length === 1 ? An(l, "Method requires non empty argument list.") : s.type === "many" ? An(l, `Method has no matching overload for given argument types: ${a}.`) : s.type === "few" || s.type === "mismatch" ? An(l, `Method has no matching overload for given argument types: ${a}.`) : An(l, `Unknown method name: ${t}.`);
    }
    n = s.func, s.conversions && (o = Ud(n, o));
  }
  if (!n)
    throw new Error("Method not found");
  try {
    return n.cb(e, ...o);
  } catch (s) {
    if (s && s instanceof ha)
      throw s;
    const a = `${t}(${Xs(o.slice(1))})`;
    An(a, s.message);
  }
}
function m2(e, r) {
  var i;
  const t = r.id.name, n = (i = e.customFunctions) == null ? void 0 : i.get(t);
  if (n)
    return {
      type: "function",
      value: n
    };
  const o = e.variables.get(t);
  if (o)
    return a1(o);
  throw new Error(`Variable '${t}' is missing.`);
}
const Vf = {
  StringLiteral: t2,
  NumberLiteral: r2,
  IntegerLiteral: n2,
  BooleanLiteral: o2,
  UnaryExpression: i2,
  ConditionalExpression: s2,
  TryExpression: l2,
  TemplateLiteral: a2,
  LogicalExpression: c2,
  BinaryExpression: p2,
  CallExpression: g2,
  MethodExpression: h2,
  Variable: m2
};
function On(e, r) {
  if (r.type in Vf)
    return Vf[r.type](e, r);
  throw new Error("Unsupported expression");
}
function wa(e, r, t, n, o) {
  try {
    const i = {
      variables: e,
      customFunctions: r,
      warnings: [],
      store: t,
      weekStartDay: (o == null ? void 0 : o.weekStartDay) || 0
    };
    return {
      result: On(i, n),
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
function b2(e, r) {
  return r && r[3] && r[7] ? { type: "ConditionalExpression", test: e, consequent: r[3], alternate: r[7] } : e;
}
function y2(e, r) {
  return r && r[3] ? { type: "TryExpression", test: e, alternate: r[3] } : e;
}
function ys(e, r) {
  return r.length ? r.reduce((t, n) => ({
    type: "BinaryExpression",
    operator: n[1],
    left: t,
    right: n[3]
  }), e) : e;
}
function Ff(e, r) {
  return r.length ? r.reduce((t, n) => ({
    type: "LogicalExpression",
    operator: n[1],
    left: t,
    right: n[3]
  }), e) : e;
}
function w2(e, r) {
  return r.length ? r.reduce((t, n) => {
    if (!n[5])
      throw new Error("Method expected after .");
    return {
      type: "MethodExpression",
      object: t,
      method: n[3],
      arguments: n[5][2]
    };
  }, e) : e;
}
function k2(e) {
  return e === "true" || e === "false" ? { type: "BooleanLiteral", value: e === "true" } : { type: "Variable", id: { type: "Identifier", name: e } };
}
function If(e) {
  if (e.every((t) => typeof t == "string"))
    return { type: "StringLiteral", value: e.join("") };
  let r = e.reduce((t, n) => (typeof n == "string" && typeof t[t.length - 1] == "string" ? t[t.length - 1] += n : t.push(n), t), []).reduce((t, n) => (typeof n == "string" ? t.quasis.push({ type: "StringLiteral", value: n }) : (t.quasis.length === t.expressions.length && t.quasis.push({ type: "StringLiteral", value: "" }), t.expressions.push(n)), t), {
    type: "TemplateLiteral",
    quasis: [],
    expressions: []
  });
  return r.quasis.length === r.expressions.length && r.quasis.push({ type: "StringLiteral", value: "" }), r;
}
function v2(e) {
  try {
    return pn(e);
  } catch {
    throw new Error(`Value ${e} can't be converted to Integer type.`);
  }
}
function Df(e) {
  if (e === "'" || e === "\\")
    return e;
  throw new Error("Incorrect string escape");
}
function j2(e, r) {
  function t() {
    this.constructor = e;
  }
  t.prototype = r.prototype, e.prototype = new t();
}
function Li(e, r, t, n) {
  var o = Error.call(this, e);
  return Object.setPrototypeOf && Object.setPrototypeOf(o, Li.prototype), o.expected = r, o.found = t, o.location = n, o.name = "SyntaxError", o;
}
j2(Li, Error);
function Dl(e, r, t) {
  return t = t || " ", e.length > r ? e : (r -= e.length, t += t.repeat(r), e + t.slice(0, r));
}
Li.prototype.format = function(e) {
  var r = "Error: " + this.message;
  if (this.location) {
    var t = null, n;
    for (n = 0; n < e.length; n++)
      if (e[n].source === this.location.source) {
        t = e[n].text.split(/\r\n|\n|\r/g);
        break;
      }
    var o = this.location.start, i = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(o) : o, s = this.location.source + ":" + i.line + ":" + i.column;
    if (t) {
      var a = this.location.end, l = Dl("", i.line.toString().length, " "), c = t[o.line - 1], u = o.line === a.line ? a.column : c.length + 1, f = u - o.column || 1;
      r += `
 --> ` + s + `
` + l + ` |
` + i.line + " | " + c + `
` + l + " | " + Dl("", o.column - 1, " ") + Dl("", f, "^");
    } else
      r += `
 at ` + s;
  }
  return r;
};
Li.buildMessage = function(e, r) {
  var t = {
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
    return t[c.type](c);
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
  return "Expected " + a(e) + " but " + l(r) + " found.";
};
function Qd(e, r) {
  r = r !== void 0 ? r : {};
  var t = {}, n = r.grammarSource, o = { start: Yr, JsonStringContents: hn }, i = Yr, s = "@{", a = "}", l = "@{}", c = "\\", u = "?", f = ":", _ = "!:", h = "||", m = "&&", p = "==", w = "!=", k = ">=", N = ">", R = "<=", L = "<", ee = "+", ce = "-", T = "/", X = "*", le = "%", E = "!", D = ".", P = "(", U = ")", Z = ",", be = "'", Ae = "e", Ee = "E", _e = /^[^}]/, Ie = /^[^'}]/, $ = /^[0-9]/, tt = /^[a-zA-Z_]/, Xe = /^[a-zA-Z_0-9]/, qe = /^[ \t\r\n]/, ve = Ue("@{", !1), De = Ue("}", !1), ue = Ue("@{}", !1), ke = Ue("\\", !1), de = Gt(), x = ct(["}"], !0, !1), fe = Ue("?", !1), ie = Ue(":", !1), Fe = Ue("!:", !1), Ye = Ue("||", !1), Ze = Ue("&&", !1), te = Ue("==", !1), He = Ue("!=", !1), Be = Ue(">=", !1), it = Ue(">", !1), st = Ue("<=", !1), lt = Ue("<", !1), kt = Ue("+", !1), nt = Ue("-", !1), Nt = Ue("/", !1), ut = Ue("*", !1), pe = Ue("%", !1), ge = Ue("!", !1), _t = Ue(".", !1), Se = Ue("(", !1), F = Ue(")", !1), Ct = Ue(",", !1), ft = br("string"), St = Ue("'", !1), Tt = ct(["'", "}"], !0, !1), $e = br("integer"), Y = ct([["0", "9"]], !1, !1), At = br("number"), Mt = Ue("e", !1), Qt = Ue("E", !1), Jt = ct([["a", "z"], ["A", "Z"], "_"], !1, !1), he = ct([["a", "z"], ["A", "Z"], "_", ["0", "9"]], !1, !1), Le = br("whitespace"), pt = ct([" ", "	", "\r", `
`], !1, !1), ye = function(b) {
    return b;
  }, xe = function(b) {
    return If(b);
  }, Oe = function(b) {
    return b;
  }, er = function() {
    return "";
  }, ze = function() {
    return zt();
  }, yt = function() {
    throw new Error("Error tokenizing '" + e + "'.");
  }, Ft = function() {
    throw new Error("Error tokenizing '" + e + "'.");
  }, It = function(b) {
    return b;
  }, cr = function(b) {
    return Df(b);
  }, Pe = function() {
    throw new Error("Error tokenizing '" + e + "'.");
  }, vt = function(b, V) {
    return b2(b, V);
  }, nr = function(b, V) {
    return y2(b, V);
  }, $t = function(b, V) {
    return Ff(b, V);
  }, Xt = function(b, V) {
    return Ff(b, V);
  }, pr = function(b, V) {
    return ys(b, V);
  }, kr = function(b, V) {
    return ys(b, V);
  }, Pt = function(b, V) {
    return ys(b, V);
  }, yr = function(b, V) {
    return ys(b, V);
  }, G = function(b) {
    return b;
  }, dt = function(b) {
    return b;
  }, Ut = function(b, V) {
    return { type: "UnaryExpression", operator: b, argument: V };
  }, jt = function() {
    throw new Error("Incorrect unary operator");
  }, wr = function(b, V) {
    return w2(b, V);
  }, Sr = function(b, V) {
    return { type: "CallExpression", callee: b, arguments: V };
  }, hr = function(b, V) {
    return [b, ...V];
  }, Ir = function(b) {
    return b;
  }, Gr = function(b) {
    return b;
  }, tr = function(b) {
    return If(b);
  }, rt = function(b) {
    return b;
  }, Et = function() {
    return "";
  }, Zt = function() {
    return zt();
  }, Yt = function() {
    throw new Error("Error tokenizing '" + e + "'.");
  }, ur = function() {
    throw new Error("Error tokenizing '" + e + "'.");
  }, at = function(b) {
    return b;
  }, ne = function(b) {
    return Df(b);
  }, mt = function() {
    throw new Error("Error tokenizing '" + e + "'.");
  }, rr = function() {
    return { type: "IntegerLiteral", value: v2(zt()) };
  }, mr = function() {
    return { type: "NumberLiteral", value: parseFloat(zt()) };
  }, ir = function() {
    return { type: "NumberLiteral", value: parseFloat(zt()) };
  }, v = function() {
    const b = zt();
    if (/\.\./.test(b) || /\.$/.test(b))
      throw new Error("Unexpected token: .");
    return k2(b);
  }, oe = function() {
    return { type: "Identifier", name: zt() };
  }, d = 0, z = 0, Te = [{ line: 1, column: 1 }], We = 0, we = [], O = 0, Dt;
  if ("startRule" in r) {
    if (!(r.startRule in o))
      throw new Error(`Can't start parsing from rule "` + r.startRule + '".');
    i = o[r.startRule];
  }
  function zt() {
    return e.substring(z, d);
  }
  function Ue(b, V) {
    return { type: "literal", text: b, ignoreCase: V };
  }
  function ct(b, V, Q) {
    return { type: "class", parts: b, inverted: V, ignoreCase: Q };
  }
  function Gt() {
    return { type: "any" };
  }
  function Fr() {
    return { type: "end" };
  }
  function br(b) {
    return { type: "other", description: b };
  }
  function zr(b) {
    var V = Te[b], Q;
    if (V)
      return V;
    for (Q = b - 1; !Te[Q]; )
      Q--;
    for (V = Te[Q], V = {
      line: V.line,
      column: V.column
    }; Q < b; )
      e.charCodeAt(Q) === 10 ? (V.line++, V.column = 1) : V.column++, Q++;
    return Te[b] = V, V;
  }
  function Vn(b, V, Q) {
    var M = zr(b), je = zr(V), me = {
      source: n,
      start: {
        offset: b,
        line: M.line,
        column: M.column
      },
      end: {
        offset: V,
        line: je.line,
        column: je.column
      }
    };
    return me;
  }
  function Ce(b) {
    d < We || (d > We && (We = d, we = []), we.push(b));
  }
  function qr(b, V, Q) {
    return new Li(
      Li.buildMessage(b, V),
      b,
      V,
      Q
    );
  }
  function Yr() {
    var b, V;
    return b = d, Wt(), V = j(), V !== t ? (Wt(), z = b, b = ye(V)) : (d = b, b = t), b;
  }
  function hn() {
    var b, V, Q;
    for (b = d, V = [], Q = y(); Q !== t; )
      V.push(Q), Q = y();
    return z = b, V = xe(V), b = V, b;
  }
  function y() {
    var b, V, Q, M, je;
    if (b = d, e.substr(d, 2) === s ? (V = s, d += 2) : (V = t, O === 0 && Ce(ve)), V !== t ? (Q = Wt(), M = j(), M !== t ? (Wt(), e.charCodeAt(d) === 125 ? (je = a, d++) : (je = t, O === 0 && Ce(De)), je !== t ? (z = b, b = Oe(M)) : (d = b, b = t)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = d, e.substr(d, 3) === l ? (V = l, d += 3) : (V = t, O === 0 && Ce(ue)), V !== t && (z = b, V = er()), b = V, b === t && (b = d, V = d, O++, e.charCodeAt(d) === 92 ? (Q = c, d++) : (Q = t, O === 0 && Ce(ke)), Q === t && (e.substr(d, 2) === s ? (Q = s, d += 2) : (Q = t, O === 0 && Ce(ve))), O--, Q === t ? V = void 0 : (d = V, V = t), V !== t ? (e.length > d ? (Q = e.charAt(d), d++) : (Q = t, O === 0 && Ce(de)), Q !== t ? (z = b, b = ze()) : (d = b, b = t)) : (d = b, b = t), b === t))) {
      if (b = d, e.substr(d, 2) === s ? (V = s, d += 2) : (V = t, O === 0 && Ce(ve)), V !== t) {
        if (Q = [], _e.test(e.charAt(d)) ? (M = e.charAt(d), d++) : (M = t, O === 0 && Ce(x)), M !== t)
          for (; M !== t; )
            Q.push(M), _e.test(e.charAt(d)) ? (M = e.charAt(d), d++) : (M = t, O === 0 && Ce(x));
        else
          Q = t;
        Q !== t ? (e.charCodeAt(d) === 125 ? (M = a, d++) : (M = t, O === 0 && Ce(De)), M !== t ? (z = b, b = yt()) : (d = b, b = t)) : (d = b, b = t);
      } else
        d = b, b = t;
      b === t && (b = d, e.substr(d, 2) === s ? (V = s, d += 2) : (V = t, O === 0 && Ce(ve)), V !== t && (z = b, V = Ft()), b = V, b === t && (b = d, e.charCodeAt(d) === 92 ? (V = c, d++) : (V = t, O === 0 && Ce(ke)), V !== t ? (e.substr(d, 2) === s ? (Q = s, d += 2) : (Q = t, O === 0 && Ce(ve)), Q !== t ? (z = b, b = It(Q)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = d, e.charCodeAt(d) === 92 ? (V = c, d++) : (V = t, O === 0 && Ce(ke)), V !== t ? (e.length > d ? (Q = e.charAt(d), d++) : (Q = t, O === 0 && Ce(de)), Q !== t ? (z = b, b = cr(Q)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = d, e.charCodeAt(d) === 92 ? (V = c, d++) : (V = t, O === 0 && Ce(ke)), V !== t && (z = b, V = Pe()), b = V))));
    }
    return b;
  }
  function j() {
    var b, V, Q, M, je, me, Ot, Bt, Jr, Mr, Lr;
    return b = d, V = A(), V !== t ? (Q = d, M = Wt(), e.charCodeAt(d) === 63 ? (je = u, d++) : (je = t, O === 0 && Ce(fe)), je !== t ? (me = Wt(), Ot = j(), Ot !== t ? (Bt = Wt(), e.charCodeAt(d) === 58 ? (Jr = f, d++) : (Jr = t, O === 0 && Ce(ie)), Jr !== t ? (Mr = Wt(), Lr = j(), Lr !== t ? (M = [M, je, me, Ot, Bt, Jr, Mr, Lr], Q = M) : (d = Q, Q = t)) : (d = Q, Q = t)) : (d = Q, Q = t)) : (d = Q, Q = t), Q === t && (Q = null), z = b, b = vt(V, Q)) : (d = b, b = t), b;
  }
  function A() {
    var b, V, Q, M, je, me, Ot;
    return b = d, V = se(), V !== t ? (Q = d, M = Wt(), e.substr(d, 2) === _ ? (je = _, d += 2) : (je = t, O === 0 && Ce(Fe)), je !== t ? (me = Wt(), Ot = j(), Ot !== t ? (M = [M, je, me, Ot], Q = M) : (d = Q, Q = t)) : (d = Q, Q = t), Q === t && (Q = null), z = b, b = nr(V, Q)) : (d = b, b = t), b;
  }
  function se() {
    var b, V, Q, M, je, me, Ot, Bt;
    if (b = d, V = B(), V !== t) {
      for (Q = [], M = d, je = Wt(), e.substr(d, 2) === h ? (me = h, d += 2) : (me = t, O === 0 && Ce(Ye)), me !== t ? (Ot = Wt(), Bt = B(), Bt !== t ? (je = [je, me, Ot, Bt], M = je) : (d = M, M = t)) : (d = M, M = t); M !== t; )
        Q.push(M), M = d, je = Wt(), e.substr(d, 2) === h ? (me = h, d += 2) : (me = t, O === 0 && Ce(Ye)), me !== t ? (Ot = Wt(), Bt = B(), Bt !== t ? (je = [je, me, Ot, Bt], M = je) : (d = M, M = t)) : (d = M, M = t);
      z = b, b = $t(V, Q);
    } else
      d = b, b = t;
    return b;
  }
  function B() {
    var b, V, Q, M, je, me, Ot, Bt;
    if (b = d, V = Qe(), V !== t) {
      for (Q = [], M = d, je = Wt(), e.substr(d, 2) === m ? (me = m, d += 2) : (me = t, O === 0 && Ce(Ze)), me !== t ? (Ot = Wt(), Bt = Qe(), Bt !== t ? (je = [je, me, Ot, Bt], M = je) : (d = M, M = t)) : (d = M, M = t); M !== t; )
        Q.push(M), M = d, je = Wt(), e.substr(d, 2) === m ? (me = m, d += 2) : (me = t, O === 0 && Ce(Ze)), me !== t ? (Ot = Wt(), Bt = Qe(), Bt !== t ? (je = [je, me, Ot, Bt], M = je) : (d = M, M = t)) : (d = M, M = t);
      z = b, b = Xt(V, Q);
    } else
      d = b, b = t;
    return b;
  }
  function Qe() {
    var b, V, Q, M, je, me, Ot, Bt;
    if (b = d, V = Ve(), V !== t) {
      for (Q = [], M = d, je = Wt(), e.substr(d, 2) === p ? (me = p, d += 2) : (me = t, O === 0 && Ce(te)), me === t && (e.substr(d, 2) === w ? (me = w, d += 2) : (me = t, O === 0 && Ce(He))), me !== t ? (Ot = Wt(), Bt = Ve(), Bt !== t ? (je = [je, me, Ot, Bt], M = je) : (d = M, M = t)) : (d = M, M = t); M !== t; )
        Q.push(M), M = d, je = Wt(), e.substr(d, 2) === p ? (me = p, d += 2) : (me = t, O === 0 && Ce(te)), me === t && (e.substr(d, 2) === w ? (me = w, d += 2) : (me = t, O === 0 && Ce(He))), me !== t ? (Ot = Wt(), Bt = Ve(), Bt !== t ? (je = [je, me, Ot, Bt], M = je) : (d = M, M = t)) : (d = M, M = t);
      z = b, b = pr(V, Q);
    } else
      d = b, b = t;
    return b;
  }
  function Ve() {
    var b, V, Q, M, je, me, Ot, Bt;
    if (b = d, V = qt(), V !== t) {
      for (Q = [], M = d, je = Wt(), e.substr(d, 2) === k ? (me = k, d += 2) : (me = t, O === 0 && Ce(Be)), me === t && (e.charCodeAt(d) === 62 ? (me = N, d++) : (me = t, O === 0 && Ce(it)), me === t && (e.substr(d, 2) === R ? (me = R, d += 2) : (me = t, O === 0 && Ce(st)), me === t && (e.charCodeAt(d) === 60 ? (me = L, d++) : (me = t, O === 0 && Ce(lt))))), me !== t ? (Ot = Wt(), Bt = qt(), Bt !== t ? (je = [je, me, Ot, Bt], M = je) : (d = M, M = t)) : (d = M, M = t); M !== t; )
        Q.push(M), M = d, je = Wt(), e.substr(d, 2) === k ? (me = k, d += 2) : (me = t, O === 0 && Ce(Be)), me === t && (e.charCodeAt(d) === 62 ? (me = N, d++) : (me = t, O === 0 && Ce(it)), me === t && (e.substr(d, 2) === R ? (me = R, d += 2) : (me = t, O === 0 && Ce(st)), me === t && (e.charCodeAt(d) === 60 ? (me = L, d++) : (me = t, O === 0 && Ce(lt))))), me !== t ? (Ot = Wt(), Bt = qt(), Bt !== t ? (je = [je, me, Ot, Bt], M = je) : (d = M, M = t)) : (d = M, M = t);
      z = b, b = kr(V, Q);
    } else
      d = b, b = t;
    return b;
  }
  function qt() {
    var b, V, Q, M, je, me, Ot, Bt;
    if (b = d, V = Vt(), V !== t) {
      for (Q = [], M = d, je = Wt(), e.charCodeAt(d) === 43 ? (me = ee, d++) : (me = t, O === 0 && Ce(kt)), me === t && (e.charCodeAt(d) === 45 ? (me = ce, d++) : (me = t, O === 0 && Ce(nt))), me !== t ? (Ot = Wt(), Bt = Vt(), Bt !== t ? (je = [je, me, Ot, Bt], M = je) : (d = M, M = t)) : (d = M, M = t); M !== t; )
        Q.push(M), M = d, je = Wt(), e.charCodeAt(d) === 43 ? (me = ee, d++) : (me = t, O === 0 && Ce(kt)), me === t && (e.charCodeAt(d) === 45 ? (me = ce, d++) : (me = t, O === 0 && Ce(nt))), me !== t ? (Ot = Wt(), Bt = Vt(), Bt !== t ? (je = [je, me, Ot, Bt], M = je) : (d = M, M = t)) : (d = M, M = t);
      z = b, b = Pt(V, Q);
    } else
      d = b, b = t;
    return b;
  }
  function Vt() {
    var b, V, Q, M, je, me, Ot, Bt;
    if (b = d, V = Ge(), V !== t) {
      for (Q = [], M = d, je = Wt(), e.charCodeAt(d) === 47 ? (me = T, d++) : (me = t, O === 0 && Ce(Nt)), me === t && (e.charCodeAt(d) === 42 ? (me = X, d++) : (me = t, O === 0 && Ce(ut)), me === t && (e.charCodeAt(d) === 37 ? (me = le, d++) : (me = t, O === 0 && Ce(pe)))), me !== t ? (Ot = Wt(), Bt = Ge(), Bt !== t ? (je = [je, me, Ot, Bt], M = je) : (d = M, M = t)) : (d = M, M = t); M !== t; )
        Q.push(M), M = d, je = Wt(), e.charCodeAt(d) === 47 ? (me = T, d++) : (me = t, O === 0 && Ce(Nt)), me === t && (e.charCodeAt(d) === 42 ? (me = X, d++) : (me = t, O === 0 && Ce(ut)), me === t && (e.charCodeAt(d) === 37 ? (me = le, d++) : (me = t, O === 0 && Ce(pe)))), me !== t ? (Ot = Wt(), Bt = Ge(), Bt !== t ? (je = [je, me, Ot, Bt], M = je) : (d = M, M = t)) : (d = M, M = t);
      z = b, b = yr(V, Q);
    } else
      d = b, b = t;
    return b;
  }
  function Ge() {
    var b, V, Q, M;
    return b = d, V = d, O++, e.charCodeAt(d) === 45 ? (Q = ce, d++) : (Q = t, O === 0 && Ce(nt)), O--, Q !== t ? (d = V, V = void 0) : V = t, V !== t ? (Q = Jn(), Q !== t ? (z = b, b = G(Q)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = d, V = d, O++, e.charCodeAt(d) === 45 ? (Q = ce, d++) : (Q = t, O === 0 && Ce(nt)), O--, Q !== t ? (d = V, V = void 0) : V = t, V !== t ? (Q = Cn(), Q !== t ? (z = b, b = dt(Q)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = d, e.charCodeAt(d) === 33 ? (V = E, d++) : (V = t, O === 0 && Ce(ge)), V === t && (e.charCodeAt(d) === 43 ? (V = ee, d++) : (V = t, O === 0 && Ce(kt)), V === t && (e.charCodeAt(d) === 45 ? (V = ce, d++) : (V = t, O === 0 && Ce(nt)))), V !== t ? (Q = Wt(), M = Kt(), M === t && (M = ht()), M !== t ? (z = b, b = Ut(V, M)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = ht()))), b;
  }
  function Kt() {
    var b, V;
    return b = d, e.charCodeAt(d) === 43 ? (V = ee, d++) : (V = t, O === 0 && Ce(kt)), V === t && (e.charCodeAt(d) === 45 ? (V = ce, d++) : (V = t, O === 0 && Ce(nt))), V !== t && (z = b, V = jt()), b = V, b;
  }
  function ht() {
    var b, V, Q, M, je, me, Ot, Bt, Jr, Mr, Lr, Co, no, qn, Fn;
    if (b = d, V = Cr(), V !== t) {
      for (Q = [], M = d, je = Wt(), e.charCodeAt(d) === 46 ? (me = D, d++) : (me = t, O === 0 && Ce(_t)), me !== t ? (Ot = Wt(), Bt = xn(), Bt !== t ? (Jr = Wt(), Mr = d, e.charCodeAt(d) === 40 ? (Lr = P, d++) : (Lr = t, O === 0 && Ce(Se)), Lr !== t ? (Co = Wt(), no = Er(), no !== t ? (qn = Wt(), e.charCodeAt(d) === 41 ? (Fn = U, d++) : (Fn = t, O === 0 && Ce(F)), Fn !== t ? (Lr = [Lr, Co, no, qn, Fn], Mr = Lr) : (d = Mr, Mr = t)) : (d = Mr, Mr = t)) : (d = Mr, Mr = t), Mr === t && (Mr = null), je = [je, me, Ot, Bt, Jr, Mr], M = je) : (d = M, M = t)) : (d = M, M = t); M !== t; )
        Q.push(M), M = d, je = Wt(), e.charCodeAt(d) === 46 ? (me = D, d++) : (me = t, O === 0 && Ce(_t)), me !== t ? (Ot = Wt(), Bt = xn(), Bt !== t ? (Jr = Wt(), Mr = d, e.charCodeAt(d) === 40 ? (Lr = P, d++) : (Lr = t, O === 0 && Ce(Se)), Lr !== t ? (Co = Wt(), no = Er(), no !== t ? (qn = Wt(), e.charCodeAt(d) === 41 ? (Fn = U, d++) : (Fn = t, O === 0 && Ce(F)), Fn !== t ? (Lr = [Lr, Co, no, qn, Fn], Mr = Lr) : (d = Mr, Mr = t)) : (d = Mr, Mr = t)) : (d = Mr, Mr = t), Mr === t && (Mr = null), je = [je, me, Ot, Bt, Jr, Mr], M = je) : (d = M, M = t)) : (d = M, M = t);
      z = b, b = wr(V, Q);
    } else
      d = b, b = t;
    return b;
  }
  function Cr() {
    var b, V, Q, M, je;
    return b = d, V = xn(), V !== t ? (Wt(), e.charCodeAt(d) === 40 ? (Q = P, d++) : (Q = t, O === 0 && Ce(Se)), Q !== t ? (Wt(), M = Er(), M !== t ? (Wt(), e.charCodeAt(d) === 41 ? (je = U, d++) : (je = t, O === 0 && Ce(F)), je !== t ? (z = b, b = Sr(V, M)) : (d = b, b = t)) : (d = b, b = t)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = mn()), b;
  }
  function Er() {
    var b, V, Q, M, je, me;
    if (b = d, V = j(), V !== t) {
      for (Q = [], M = d, Wt(), e.charCodeAt(d) === 44 ? (je = Z, d++) : (je = t, O === 0 && Ce(Ct)), je !== t ? (Wt(), me = j(), me !== t ? M = me : (d = M, M = t)) : (d = M, M = t); M !== t; )
        Q.push(M), M = d, Wt(), e.charCodeAt(d) === 44 ? (je = Z, d++) : (je = t, O === 0 && Ce(Ct)), je !== t ? (Wt(), me = j(), me !== t ? M = me : (d = M, M = t)) : (d = M, M = t);
      z = b, b = hr(V, Q);
    } else
      d = b, b = t;
    return b === t && (b = Wt()), b;
  }
  function mn() {
    var b, V, Q, M;
    return b = Ln(), b === t && (b = en(), b === t && (b = Jn(), b === t && (b = Cn(), b === t && (b = d, e.charCodeAt(d) === 40 ? (V = P, d++) : (V = t, O === 0 && Ce(Se)), V !== t ? (Wt(), Q = j(), Q !== t ? (Wt(), e.charCodeAt(d) === 41 ? (M = U, d++) : (M = t, O === 0 && Ce(F)), M !== t ? (z = b, b = Ir(Q)) : (d = b, b = t)) : (d = b, b = t)) : (d = b, b = t))))), b;
  }
  function en() {
    var b, V, Q, M;
    return O++, b = d, e.charCodeAt(d) === 39 ? (V = be, d++) : (V = t, O === 0 && Ce(St)), V !== t ? (Q = rn(), e.charCodeAt(d) === 39 ? (M = be, d++) : (M = t, O === 0 && Ce(St)), M !== t ? (z = b, b = Gr(Q)) : (d = b, b = t)) : (d = b, b = t), O--, b === t && (V = t, O === 0 && Ce(ft)), b;
  }
  function rn() {
    var b, V, Q;
    for (b = d, V = [], Q = nn(); Q !== t; )
      V.push(Q), Q = nn();
    return z = b, V = tr(V), b = V, b;
  }
  function nn() {
    var b, V, Q, M, je;
    if (b = d, e.substr(d, 2) === s ? (V = s, d += 2) : (V = t, O === 0 && Ce(ve)), V !== t ? (Q = Wt(), M = j(), M !== t ? (Wt(), e.charCodeAt(d) === 125 ? (je = a, d++) : (je = t, O === 0 && Ce(De)), je !== t ? (z = b, b = rt(M)) : (d = b, b = t)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = d, e.substr(d, 3) === l ? (V = l, d += 3) : (V = t, O === 0 && Ce(ue)), V !== t && (z = b, V = Et()), b = V, b === t && (b = d, V = d, O++, e.charCodeAt(d) === 92 ? (Q = c, d++) : (Q = t, O === 0 && Ce(ke)), Q === t && (e.charCodeAt(d) === 39 ? (Q = be, d++) : (Q = t, O === 0 && Ce(St)), Q === t && (e.substr(d, 2) === s ? (Q = s, d += 2) : (Q = t, O === 0 && Ce(ve)))), O--, Q === t ? V = void 0 : (d = V, V = t), V !== t ? (e.length > d ? (Q = e.charAt(d), d++) : (Q = t, O === 0 && Ce(de)), Q !== t ? (z = b, b = Zt()) : (d = b, b = t)) : (d = b, b = t), b === t))) {
      if (b = d, e.substr(d, 2) === s ? (V = s, d += 2) : (V = t, O === 0 && Ce(ve)), V !== t) {
        if (Q = [], Ie.test(e.charAt(d)) ? (M = e.charAt(d), d++) : (M = t, O === 0 && Ce(Tt)), M !== t)
          for (; M !== t; )
            Q.push(M), Ie.test(e.charAt(d)) ? (M = e.charAt(d), d++) : (M = t, O === 0 && Ce(Tt));
        else
          Q = t;
        Q !== t ? (e.charCodeAt(d) === 125 ? (M = a, d++) : (M = t, O === 0 && Ce(De)), M !== t ? (z = b, b = Yt()) : (d = b, b = t)) : (d = b, b = t);
      } else
        d = b, b = t;
      b === t && (b = d, e.substr(d, 2) === s ? (V = s, d += 2) : (V = t, O === 0 && Ce(ve)), V !== t && (z = b, V = ur()), b = V, b === t && (b = d, e.charCodeAt(d) === 92 ? (V = c, d++) : (V = t, O === 0 && Ce(ke)), V !== t ? (e.substr(d, 2) === s ? (Q = s, d += 2) : (Q = t, O === 0 && Ce(ve)), Q !== t ? (z = b, b = at(Q)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = d, e.charCodeAt(d) === 92 ? (V = c, d++) : (V = t, O === 0 && Ce(ke)), V !== t ? (e.length > d ? (Q = e.charAt(d), d++) : (Q = t, O === 0 && Ce(de)), Q !== t ? (z = b, b = ne(Q)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = d, e.charCodeAt(d) === 92 ? (V = c, d++) : (V = t, O === 0 && Ce(ke)), V !== t && (z = b, V = mt()), b = V))));
    }
    return b;
  }
  function Cn() {
    var b, V, Q;
    if (O++, b = d, e.charCodeAt(d) === 45 ? d++ : O === 0 && Ce(nt), V = [], $.test(e.charAt(d)) ? (Q = e.charAt(d), d++) : (Q = t, O === 0 && Ce(Y)), Q !== t)
      for (; Q !== t; )
        V.push(Q), $.test(e.charAt(d)) ? (Q = e.charAt(d), d++) : (Q = t, O === 0 && Ce(Y));
    else
      V = t;
    return V !== t ? (z = b, b = rr()) : (d = b, b = t), O--, b === t && O === 0 && Ce($e), b;
  }
  function Jn() {
    var b, V, Q, M, je, me, Ot, Bt, Jr;
    for (O++, b = d, e.charCodeAt(d) === 45 ? d++ : O === 0 && Ce(nt), V = [], $.test(e.charAt(d)) ? (Q = e.charAt(d), d++) : (Q = t, O === 0 && Ce(Y)); Q !== t; )
      V.push(Q), $.test(e.charAt(d)) ? (Q = e.charAt(d), d++) : (Q = t, O === 0 && Ce(Y));
    if (e.charCodeAt(d) === 46 ? (Q = D, d++) : (Q = t, O === 0 && Ce(_t)), Q !== t) {
      if (M = [], $.test(e.charAt(d)) ? (je = e.charAt(d), d++) : (je = t, O === 0 && Ce(Y)), je !== t)
        for (; je !== t; )
          M.push(je), $.test(e.charAt(d)) ? (je = e.charAt(d), d++) : (je = t, O === 0 && Ce(Y));
      else
        M = t;
      if (M !== t) {
        if (je = d, e.charCodeAt(d) === 101 ? (me = Ae, d++) : (me = t, O === 0 && Ce(Mt)), me === t && (e.charCodeAt(d) === 69 ? (me = Ee, d++) : (me = t, O === 0 && Ce(Qt))), me !== t) {
          if (e.charCodeAt(d) === 43 ? (Ot = ee, d++) : (Ot = t, O === 0 && Ce(kt)), Ot === t && (e.charCodeAt(d) === 45 ? (Ot = ce, d++) : (Ot = t, O === 0 && Ce(nt))), Ot === t && (Ot = null), Bt = [], $.test(e.charAt(d)) ? (Jr = e.charAt(d), d++) : (Jr = t, O === 0 && Ce(Y)), Jr !== t)
            for (; Jr !== t; )
              Bt.push(Jr), $.test(e.charAt(d)) ? (Jr = e.charAt(d), d++) : (Jr = t, O === 0 && Ce(Y));
          else
            Bt = t;
          Bt !== t ? (me = [me, Ot, Bt], je = me) : (d = je, je = t);
        } else
          d = je, je = t;
        je === t && (je = null), z = b, b = mr();
      } else
        d = b, b = t;
    } else
      d = b, b = t;
    if (b === t) {
      if (b = d, e.charCodeAt(d) === 45 ? d++ : O === 0 && Ce(nt), V = [], $.test(e.charAt(d)) ? (Q = e.charAt(d), d++) : (Q = t, O === 0 && Ce(Y)), Q !== t)
        for (; Q !== t; )
          V.push(Q), $.test(e.charAt(d)) ? (Q = e.charAt(d), d++) : (Q = t, O === 0 && Ce(Y));
      else
        V = t;
      if (V !== t)
        if (e.charCodeAt(d) === 101 ? (Q = Ae, d++) : (Q = t, O === 0 && Ce(Mt)), Q === t && (e.charCodeAt(d) === 69 ? (Q = Ee, d++) : (Q = t, O === 0 && Ce(Qt))), Q !== t) {
          if (e.charCodeAt(d) === 43 ? (M = ee, d++) : (M = t, O === 0 && Ce(kt)), M === t && (e.charCodeAt(d) === 45 ? (M = ce, d++) : (M = t, O === 0 && Ce(nt))), M === t && (M = null), je = [], $.test(e.charAt(d)) ? (me = e.charAt(d), d++) : (me = t, O === 0 && Ce(Y)), me !== t)
            for (; me !== t; )
              je.push(me), $.test(e.charAt(d)) ? (me = e.charAt(d), d++) : (me = t, O === 0 && Ce(Y));
          else
            je = t;
          je !== t ? (z = b, b = ir()) : (d = b, b = t);
        } else
          d = b, b = t;
      else
        d = b, b = t;
    }
    return O--, b === t && O === 0 && Ce(At), b;
  }
  function Ln() {
    var b, V, Q, M, je, me, Ot, Bt, Jr, Mr, Lr;
    if (b = d, tt.test(e.charAt(d)) ? (V = e.charAt(d), d++) : (V = t, O === 0 && Ce(Jt)), V !== t) {
      if (Q = [], M = [], Xe.test(e.charAt(d)) ? (je = e.charAt(d), d++) : (je = t, O === 0 && Ce(he)), je !== t)
        for (; je !== t; )
          M.push(je), Xe.test(e.charAt(d)) ? (je = e.charAt(d), d++) : (je = t, O === 0 && Ce(he));
      else
        M = t;
      for (M === t && (M = d, e.charCodeAt(d) === 46 ? (je = D, d++) : (je = t, O === 0 && Ce(_t)), je !== t ? (me = d, O++, Ot = d, Bt = Wt(), Jr = xn(), Jr !== t ? (Mr = Wt(), e.charCodeAt(d) === 40 ? (Lr = P, d++) : (Lr = t, O === 0 && Ce(Se)), Lr !== t ? (Bt = [Bt, Jr, Mr, Lr], Ot = Bt) : (d = Ot, Ot = t)) : (d = Ot, Ot = t), O--, Ot === t ? me = void 0 : (d = me, me = t), me !== t ? (je = [je, me], M = je) : (d = M, M = t)) : (d = M, M = t)); M !== t; ) {
        if (Q.push(M), M = [], Xe.test(e.charAt(d)) ? (je = e.charAt(d), d++) : (je = t, O === 0 && Ce(he)), je !== t)
          for (; je !== t; )
            M.push(je), Xe.test(e.charAt(d)) ? (je = e.charAt(d), d++) : (je = t, O === 0 && Ce(he));
        else
          M = t;
        M === t && (M = d, e.charCodeAt(d) === 46 ? (je = D, d++) : (je = t, O === 0 && Ce(_t)), je !== t ? (me = d, O++, Ot = d, Bt = Wt(), Jr = xn(), Jr !== t ? (Mr = Wt(), e.charCodeAt(d) === 40 ? (Lr = P, d++) : (Lr = t, O === 0 && Ce(Se)), Lr !== t ? (Bt = [Bt, Jr, Mr, Lr], Ot = Bt) : (d = Ot, Ot = t)) : (d = Ot, Ot = t), O--, Ot === t ? me = void 0 : (d = me, me = t), me !== t ? (je = [je, me], M = je) : (d = M, M = t)) : (d = M, M = t));
      }
      z = b, b = v();
    } else
      d = b, b = t;
    return b;
  }
  function xn() {
    var b, V, Q, M;
    if (b = d, tt.test(e.charAt(d)) ? (V = e.charAt(d), d++) : (V = t, O === 0 && Ce(Jt)), V !== t) {
      for (Q = [], Xe.test(e.charAt(d)) ? (M = e.charAt(d), d++) : (M = t, O === 0 && Ce(he)); M !== t; )
        Q.push(M), Xe.test(e.charAt(d)) ? (M = e.charAt(d), d++) : (M = t, O === 0 && Ce(he));
      z = b, b = oe();
    } else
      d = b, b = t;
    return b;
  }
  function Wt() {
    var b, V;
    for (O++, b = [], qe.test(e.charAt(d)) ? (V = e.charAt(d), d++) : (V = t, O === 0 && Ce(pt)); V !== t; )
      b.push(V), qe.test(e.charAt(d)) ? (V = e.charAt(d), d++) : (V = t, O === 0 && Ce(pt));
    return O--, V = t, O === 0 && Ce(Le), b;
  }
  if (Dt = i(), Dt !== t && d === e.length)
    return Dt;
  throw Dt !== t && d < e.length && Ce(Fr()), qr(
    we,
    We < e.length ? e.charAt(We) : null,
    We < e.length ? Vn(We, We + 1) : Vn(We, We)
  );
}
const C2 = 128, Ii = /* @__PURE__ */ new Map();
let Tf;
function xd(e) {
  return Ii.get(e);
}
function $d(e, r) {
  e !== Tf && (Ii.delete(e), Ii.size >= C2 && Ii.delete(Ii.keys().next().value), Ii.set(e, r), Tf = e);
}
const Mf = /* @__PURE__ */ new Set([
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
function E2(e) {
  if (!(typeof e.name == "string" && e.name))
    throw new Error("Incorrect function name");
  if (!(typeof e.body == "string" && e.body))
    throw new Error("Incorrect function body");
  if (!(e.return_type && Mf.has(e.return_type)))
    throw new Error("Incorrect function return_type");
  if (!Array.isArray(e.arguments))
    throw new Error("Incorrect function arguments");
  const r = /* @__PURE__ */ new Set();
  e.arguments.forEach((t) => {
    if (!(typeof t.name == "string" && t.name))
      throw new Error("Incorrect argument name");
    if (!(t.type && Mf.has(t.type)))
      throw new Error("Incorrect argument type");
    if (r.has(t.name))
      throw new Error("Duplicate argument name");
    r.add(t.name);
  });
}
function A2(e) {
  let r;
  return {
    name: e.name,
    args: e.arguments.map((t) => ({
      type: t.type
    })),
    cb(t, ...n) {
      r || (r = xd(e.body) || Qd(e.body, {
        startRule: "JsonStringContents"
      }), $d(e.body, r));
      const o = /* @__PURE__ */ new Map();
      n.forEach((a, l) => {
        if (a.type === "function")
          throw new Error("Incorrect argument type: function");
        const c = js(e.arguments[l].name, a.type, a.value);
        o.set(c.getName(), c);
      });
      const i = wa(o, t.customFunctions, t.store, r, {
        weekStartDay: t.weekStartDay
      });
      i.warnings.forEach((a) => {
        t.warnings.push(a);
      });
      const s = i.result;
      if (s.type === "error")
        throw new Error(s.value);
      if (s.type !== e.return_type)
        throw new Error("Incorrect function return_type");
      return s;
    }
  };
}
function S2(e, r) {
  if (!e)
    return r || void 0;
  if (!r)
    return e || void 0;
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
  for (const [o, i] of r) {
    for (const s of i) {
      const a = Qu(o, s);
      n.add(a);
    }
    t.set(o, i);
  }
  for (const [o, i] of e)
    for (const s of i) {
      const a = Qu(o, s);
      if (!n.has(a)) {
        n.add(a);
        const l = t.get(o) || [];
        l.push(s), t.set(o, l);
      }
    }
  return t;
}
function V2(e) {
  if (!e)
    return J(new Error("Missing object"));
  const r = e.card, t = e.templates || {};
  if (!r)
    return J(new Error("Missing card"));
  if (!r.states || !r.states.length)
    return J(new Error("Missing states"));
  for (const n in t)
    if (t.hasOwnProperty(n) && n in Hd)
      return J(new Error("Template name collision"), {
        additional: {
          templateName: n
        }
      });
  for (let n = 0; n < r.states.length; ++n) {
    if (!r.states[n].div)
      return J(new Error("Missing state div"), {
        additional: {
          stateId: r.states[n].state_id
        }
      });
    if (typeof r.states[n].state_id != "number")
      return J(new Error("Missing state_id"), {
        additional: {
          index: n
        }
      });
  }
  return null;
}
function F2(e) {
  return [...new Set(e)];
}
class e_ {
  constructor(r, t) {
    Ar(this, "ast");
    Ar(this, "expr");
    this.ast = r, this.expr = t;
  }
  /**
   * Applies variables into ast
   * @param variables
   * @param logError
   */
  apply({
    variables: r,
    customFunctions: t,
    logError: n,
    store: o,
    weekStartDay: i,
    keepComplex: s
  }) {
    var l;
    let a;
    try {
      a = wa(r, t, o, this.ast, {
        weekStartDay: i
      }), a.warnings.forEach(n);
      const c = a.result;
      if (c.type === "error")
        return n(J(new Error("Expression execution error"), {
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
          result: Dd(u),
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
        n(J(new Error("Expression execution error")));
      }
      if (c.type === "integer")
        return u > Hm || u < Wm ? (n(J(new Error("Expression result is out of 32-bit int range"))), {
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
          return n(J(new Error(`Failed to stringify ${c.type}`))), {
            result: `<${c.type}>`,
            usedVars: a.usedVars
          };
        }
      return {
        result: u,
        usedVars: a.usedVars
      };
    } catch {
      return n(J(new Error("Expression execution error"), {
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
function I2(e) {
  return e.indexOf("@{") > -1 || e.indexOf("\\") > -1;
}
function ea(e, r, t, n) {
  if (e)
    if (typeof e == "string") {
      if (I2(e)) {
        r.hasExpression = !0;
        try {
          const o = xd(e) || Qd(e, {
            startRule: "JsonStringContents"
          });
          $d(e, o);
          const i = Ym(o);
          return r.vars.push(...i), new e_(o, e);
        } catch {
          t(J(new Error("Unable to parse expression"), {
            additional: {
              expression: e
            }
          }));
          return;
        }
      }
    } else {
      if (Array.isArray(e) && n > 0)
        return e.map((o) => ea(o, r, t, n - 1));
      if (typeof e == "object" && n > 0) {
        const o = {};
        for (const i in e)
          o[i] = ea(e[i], r, t, n - 1);
        return o;
      }
    }
  return e;
}
function ta(e, r) {
  if (e) {
    if (e instanceof e_)
      return e.apply(r);
    if (Array.isArray(e)) {
      let t;
      return {
        result: e.map((o) => {
          const i = ta(o, r);
          if (i.usedVars) {
            t || (t = /* @__PURE__ */ new Set());
            for (const s of i.usedVars)
              t.add(s);
          }
          return i.result;
        }),
        usedVars: t
      };
    } else if (typeof e == "object") {
      const t = {};
      let n;
      for (const o in e) {
        const i = ta(e[o], r);
        if (t[o] = i.result, i.usedVars) {
          n || (n = /* @__PURE__ */ new Set());
          for (const s of i.usedVars)
            n.add(s);
        }
      }
      return {
        result: t,
        usedVars: n
      };
    }
  }
  return {
    result: e
  };
}
function Pf(e, r, t, n, o = 1 / 0) {
  const i = {
    vars: [],
    hasExpression: !1
  }, s = ea(e, i, r, o);
  return {
    vars: F2(i.vars),
    hasExpression: i.hasExpression,
    applyVars(l, c, u) {
      return ta(s, {
        variables: l,
        customFunctions: c,
        logError: r,
        store: t,
        weekStartDay: n,
        keepComplex: u
      });
    }
  };
}
class t_ {
  constructor() {
    Ar(this, "_vars", /* @__PURE__ */ new Map());
    Ar(this, "_lastAddedVariable", Do(""));
  }
  setVariable(r) {
    const t = r.getName();
    if (this._vars.has(t))
      throw new Error("Variable with the same name already exist");
    this._vars.set(t, r), this._lastAddedVariable.set(t);
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
function D3() {
  return new t_();
}
const D2 = ["start", "stop", "pause", "resume", "cancel", "reset"], T2 = new Set(D2);
class M2 {
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
      document.visibilityState === "visible" ? (this.awaitActions.forEach(({ id: t, action: n }) => {
        this.execTimerAction(t, n);
      }), this.awaitActions = [], this.unholdAll()) : this.holdAll();
    }, document.addEventListener("visibilitychange", this.visibilityHandler);
  }
  destroy() {
    document.removeEventListener("visibilitychange", this.visibilityHandler);
    for (const [r, t] of this.timers)
      this.stopTimerTimeouts(t);
  }
  createTimer(r) {
    if (!(r != null && r.id)) {
      this.logError(J(new Error("Missing timer id")));
      return;
    }
    if (!(r.duration || r.tick_interval && (r.value_variable || r.tick_actions))) {
      this.logError(J(new Error("Misconfigured timer"), {
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
  execTimerAction(r, t) {
    if (!r || !t || !this.timers.has(r) || !T2.has(t)) {
      this.logError(J(new Error("Incorrect timer action"), {
        additional: {
          id: r,
          action: t
        }
      }));
      return;
    }
    const n = t;
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
    const t = performance.now(), n = (r.durationPassed || 0) + t - (r.durationStarted || 0);
    r.duration && n > r.duration || (this.updateVariable(r, n), await this.callActions(r, "tick"), r.tickCount !== void 0 && ++r.tickCount);
  }
  startOrResume(r) {
    r.state = "running", r.hold = !1, r.durationStarted = performance.now();
    const t = r.duration;
    t && (r.durationTimeout = window.setTimeout(async () => {
      this.updateVariable(r, t), r.tickCountPredict && r.tickCount !== void 0 && r.tickCount < r.tickCountPredict && await this.callActions(r, "tick"), this.stop(r);
    }, Math.max(0, t - (r.durationPassed || 0))));
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
    let t = this.applyVars(r);
    if (typeof t == "string") {
      if (t === r)
        return;
      t = Number(t);
    }
    if (!(t === void 0 || Number.isNaN(t) || Math.round(t) !== t))
      return t;
  }
  start(r) {
    if (r.state === "running") {
      this.logError(J(new Error("The timer is already running")));
      return;
    } else if (r.state === "paused") {
      this.logError(J(new Error("The timer is paused")));
      return;
    }
    const t = r.definition.value_variable;
    if (t && !this.hasVariableWithType(t, "integer")) {
      this.logError(J(new Error("Cannot find variable"), {
        additional: {
          name: t
        }
      }));
      return;
    }
    if (t && this.setVariableValue(t, 0), r.definition.duration !== void 0 && (r.duration = this.applyVarsInt(r.definition.duration), r.duration === void 0 || r.duration < 0)) {
      this.logError(J(new Error("Incorrect timer properties"), {
        additional: {
          id: r.definition.id
        }
      }));
      return;
    }
    if (r.definition.tick_interval !== void 0 && (r.tick = this.applyVarsInt(r.definition.tick_interval), r.tick === void 0 || r.tick <= 0)) {
      this.logError(J(new Error("Incorrect timer properties"), {
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
      this.logError(J(new Error("The timer has already been stopped")));
      return;
    }
    r.state = "stopped", r.durationPassed = 0, r.tickPassed = 0, this.stopTimerTimeouts(r), this.callActions(r, "end");
  }
  pause(r) {
    if (r.state === "stopped") {
      this.logError(J(new Error("The timer has already been stopped")));
      return;
    } else if (r.state === "paused") {
      this.logError(J(new Error("The timer has already been paused")));
      return;
    }
    r.state = "paused", this.stopTimerTimeouts(r);
    const t = performance.now();
    r.durationStarted && (r.durationPassed = (r.durationPassed || 0) + t - r.durationStarted), r.tickStarted && (r.tickPassed = (r.tickPassed || 0) + t - r.tickStarted);
    const n = r.definition.value_variable;
    n && r.durationPassed && this.setVariableValue(n, Math.round(r.durationPassed));
  }
  resume(r) {
    if (r.state === "stopped") {
      this.logError(J(new Error("The timer has already been stopped")));
      return;
    } else if (r.state === "running") {
      this.logError(J(new Error("The timer is already running")));
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
  updateVariable(r, t) {
    const n = r.definition.value_variable;
    n && this.setVariableValue(n, Math.round(t));
  }
  async callActions(r, t) {
    const n = r.definition[t === "end" ? "end_actions" : "tick_actions"];
    if (n)
      return this.execAnyActions(n, {
        processUrls: !1
      });
  }
  holdAll() {
    for (const [r, t] of this.timers)
      t.state === "running" && (t.hold = !0, this.stopTimerTimeouts(t));
  }
  async unholdAll() {
    for (const [r, t] of this.timers)
      if (t.state === "running" && t.hold) {
        const n = performance.now();
        t.durationStarted && (t.durationPassed = (t.durationPassed || 0) + n - t.durationStarted), t.tickStarted && (t.tickPassed = (t.tickPassed || 0) + n - t.tickStarted), t.tick && await this.tickOrUnholdAction(t), this.startOrResume(t);
      }
  }
}
function P2(e, r, t, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number" && i !== void 0) {
    t(J(new Error("Incorrect array_insert_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  ka(e, r, t, n, (a) => {
    const l = a.getValue();
    if (typeof i == "number" && (i < 0 || i > l.length))
      t(J(new Error(`Index out of bound for mutation ${n.type}`), {
        additional: {
          name: o,
          index: i,
          length: l.length
        }
      }));
    else if (!s.type)
      t(J(new Error("Incorrect value type"), {
        additional: {
          name: o
        }
      }));
    else {
      const c = l.slice(), u = gl(s);
      typeof i == "number" ? c.splice(i, 0, u) : c.push(u), a.setValue(c);
    }
  });
}
function N2(e, r, t, n) {
  const { variable_name: o, index: i } = n;
  if (typeof i != "number") {
    t(J(new Error("Incorrect array_remove_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  ka(e, r, t, n, (s) => {
    const a = s.getValue();
    if (typeof i == "number" && (i < 0 || i >= a.length))
      t(J(new Error(`Index out of bound for mutation ${n.type}`), {
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
function z2(e, r, t, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number") {
    t(J(new Error("Incorrect array_set_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  ka(e, r, t, n, (a) => {
    const l = a.getValue();
    if (typeof i == "number" && (i < 0 || i >= l.length))
      t(J(new Error(`Index out of bound for mutation ${n.type}`), {
        additional: {
          name: o,
          index: i,
          length: l.length
        }
      }));
    else if (!s.type)
      t(J(new Error("Incorrect value type"), {
        additional: {
          name: o
        }
      }));
    else {
      const c = l.slice();
      c[i] = gl(s), a.setValue(c);
    }
  });
}
function ka(e, r, t, n, o) {
  const { variable_name: i } = n;
  if (!i) {
    t(J(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: i
      }
    }));
    return;
  }
  const s = (e == null ? void 0 : e.getVariable(i)) || r.get(i);
  if (!s) {
    t(J(new Error("Cannot find variable"), {
      additional: {
        name: i
      }
    }));
    return;
  }
  const a = s.getType();
  a === "array" ? o(s) : t(J(new Error("Trying to insert value into the non-array"), {
    additional: {
      name: i,
      type: a
    }
  }));
}
function O2(e, r, t, n) {
  const { variable_name: o, key: i, value: s } = n;
  if (typeof i != "string") {
    t(J(new Error("Incorrect dict_set_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  if (!o) {
    t(J(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  s && !s.type && t(J(new Error("Incorrect value type"), {
    additional: {
      name: o
    }
  }));
  const a = (e == null ? void 0 : e.getVariable(o)) || r.get(o);
  if (!a) {
    t(J(new Error("Cannot find variable"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  const l = a.getType();
  if (l === "dict") {
    const u = { ...a.getValue() };
    s ? u[i] = gl(s) : delete u[i], a.setValue(u);
  } else
    t(J(new Error("Trying to set value into the non-dict"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function B2(e, r) {
  if (!(r.content && (r.content.type === "text" || r.content.type === "url") && typeof r.content.value == "string")) {
    e(J(new Error("Incorrect action"), {
      additional: {
        action: r
      }
    }));
    return;
  }
  if (!(typeof navigator < "u" && "clipboard" in navigator && navigator.clipboard && "writeText" in navigator.clipboard && typeof navigator.clipboard.writeText == "function")) {
    e(J(new Error("Clipboard is unavailable"), {
      additional: {
        action: r
      }
    }));
    return;
  }
  navigator.clipboard.writeText(r.content.value).catch((t) => {
    e(J(new Error("Failed to copy to the clipboard"), {
      additional: {
        originalError: String(t)
      }
    }));
  });
}
function L2(e) {
  if (e === "normal" || e === "reverse" || e === "alternate" || e === "alternate_reverse")
    return e;
}
function R2(e, r, t, n) {
  var R, L, ee, ce;
  const o = Un(e.duration, 0);
  if (!o || e.type !== "color_animator" && e.type !== "number_animator")
    return;
  const i = (R = e.start_value_typed ? e.start_value_typed.value : e.start_value) != null ? R : r.getValue(), s = e.end_value_typed ? e.end_value_typed.value : e.end_value;
  if (i === void 0 || s === void 0 || e.type === "color_animator" && (typeof i != "string" && i !== void 0 || typeof s != "string") || e.type === "number_animator" && (typeof i != "number" && i !== void 0 || typeof s != "number"))
    return;
  const a = e.type === "color_animator" && _o(i), l = e.type === "color_animator" && _o(s);
  if (e.type === "color_animator" && (!a || !l))
    return;
  const c = $r(e.start_delay, 0), u = pa(e.interpolator || "linear"), f = L2(e.direction) || "normal", _ = ((L = e.repeat_count) == null ? void 0 : L.type) === "infinity" ? 1 / 0 : ((ee = e.repeat_count) == null ? void 0 : ee.type) === "fixed" ? $r((ce = e.repeat_count) == null ? void 0 : ce.value, 1) : 1;
  let h = 0, m = performance.now();
  const p = _ === 1 / 0 ? 1 / 0 : _ * o + c;
  function w(T) {
    if (e.type === "color_animator") {
      if (!a || !l)
        throw new Error("Missing start/end value");
      return ji({
        a: Fo(Ho(a.a, l.a, T), 0, 255),
        r: Fo(Ho(a.r, l.r, T), 0, 255),
        g: Fo(Ho(a.g, l.g, T), 0, 255),
        b: Fo(Ho(a.b, l.b, T), 0, 255)
      });
    }
    return Ho(i, s, T);
  }
  function k(T) {
    const X = T - m;
    if (m = T, h += X, h >= c) {
      let le = Math.floor((h - c) / o), E = (h - c - le * o) / o;
      le >= _ && (le = _ - 1, E = 1);
      let D;
      f === "normal" || f === "alternate" && le % 2 === 0 || f === "alternate_reverse" && le % 2 === 1 ? D = "normal" : D = "reverse", D === "reverse" && (E = 1 - E);
      const P = w(u(E));
      r.setValue(P);
    }
    h < p ? N = requestAnimationFrame(k) : (t(), n(e.end_actions));
  }
  let N = requestAnimationFrame(k);
  return {
    stop() {
      cancelAnimationFrame(N), n(e.cancel_actions), n(e.end_actions);
    }
  };
}
function H2(e) {
  let r = e;
  for (; r && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function W2(e) {
  let r = e;
  for (; r != null && r.parent && r.json.type !== "state" && !r.isRootState && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function Zs(e) {
  return !!(e && typeof e == "string");
}
const U2 = /* @__PURE__ */ new Set([
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "head",
  "options"
]);
function G2(e) {
  return e === void 0 || U2.has(e);
}
function J2(e) {
  return e === void 0 || Array.isArray(e) && e.every((r) => Zs(r.name) && Zs(r.value));
}
function q2(e) {
  var r, t, n;
  return Zs(e.container_id) && Zs((r = e.request) == null ? void 0 : r.url) && G2((t = e.request) == null ? void 0 : t.method) && J2((n = e.request) == null ? void 0 : n.headers);
}
function Y2(e, r, t, n) {
  const { variable_name: o, path: i, value: s } = n;
  if (!(s != null && s.value)) {
    t(J(new Error("Missing value for an action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  if (typeof i != "string" || !i || i.charAt(0) === "/" || i.charAt(i.length - 1) === "/") {
    t(J(new Error(`Value '${i}' for key 'path' is not valid`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  if (!o) {
    t(J(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  const a = (e == null ? void 0 : e.getVariable(o)) || r.get(o);
  if (!a) {
    t(J(new Error("Cannot find variable"), {
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
      t(J(new Error(`Value '${i}' for key 'path' is not valid`), {
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
        t(J(new Error("Path is empty"), {
          additional: {
            name: o,
            type: l,
            path: i
          }
        }));
        return;
      }
      if (!h || typeof h != "object") {
        t(J(new Error(`Element with path '${f.slice(0, m).join("/")}' is not ${h === void 0 ? "found" : "a structure"}`), {
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
          t(J(new Error(`Unable to use '${p}' as array index`), {
            additional: {
              name: o,
              type: l,
              path: i
            }
          }));
          return;
        }
        if (m + 1 === f.length && (w < 0 || w > h.length)) {
          t(J(new Error(`Position '${w}' is out of array bounds`), {
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
    h[f[f.length - 1]] = gl(s), a.setValue(_);
  } else
    t(J(new Error("Action requires array or dictionary variable"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function Nf(e, { delay: r = 0, duration: t = 400, easing: n = jd, x: o = 0, y: i = 0, opacity: s = 0 } = {}) {
  const a = getComputedStyle(e), l = +a.opacity, c = a.transform === "none" ? "" : a.transform, u = l * (1 - s), [f, _] = Sa(o), [h, m] = Sa(i);
  return {
    delay: r,
    duration: t,
    easing: n,
    css: (p, w) => `
			transform: ${c} translate(${(1 - p) * f}${_}, ${(1 - p) * h}${m});
			opacity: ${l - u * w}`
  };
}
const K2 = "appkit-outer", X2 = "appkit-root__clickable", Z2 = "undefined", Q2 = "appkit-tooltip", x2 = "appkit-tooltip_visible", $2 = "appkit-tooltip_modal", e3 = "appkit-tooltip__inner", t3 = "appkit-tooltip__overlay", r3 = "appkit-tooltip__substrate", vo = {
  outer: K2,
  root__clickable: X2,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  root__selectable: Z2,
  tooltip: Q2,
  tooltip_visible: x2,
  tooltip_modal: $2,
  tooltip__inner: e3,
  tooltip__overlay: t3,
  tooltip__substrate: r3
}, r_ = 300, n_ = 0;
function ra(e) {
  return Math.max(...e.map(
    (r) => (Number(r.duration) || r_) + (Number(r.start_delay) || n_)
  ));
}
function Qs(e, {
  animations: r,
  direction: t
}) {
  if (!r)
    return {};
  const n = os(r), o = ra(n);
  return n.some((s) => s.name === "no_animation") ? {} : {
    duration: zi() ? 0 : o,
    css: (s) => {
      const a = s * o, l = n.map((p) => {
        var ee, ce, T, X, le, E, D, P, U, Z, be, Ae;
        const w = Number(p.start_delay) || n_, k = Number(p.duration) || r_, N = t === "in" ? Math.max(0, Math.min(1, (a - w) / k)) : Math.max(0, Math.min(1, (a - (o - k) + w) / k)), L = (pa(p.interpolator || "ease_in_out") || dl)(N);
        if (p.name === "fade") {
          const Ee = t === "in" ? (ee = p.start_value) != null ? ee : 0 : (ce = p.end_value) != null ? ce : 0, _e = t === "in" ? (T = p.end_value) != null ? T : 1 : (X = p.start_value) != null ? X : 1;
          return {
            active: L > 0 && L < 1,
            opacity: (1 - L) * Ee + L * _e
          };
        } else if (p.name === "translate") {
          const Ee = -(t === "in" ? (le = p.start_value) != null ? le : 10 : (E = p.end_value) != null ? E : 10), _e = -(t === "in" ? (D = p.end_value) != null ? D : 0 : (P = p.start_value) != null ? P : 0);
          return {
            active: L > 0 && L < 1,
            translate: `translateY(${(1 - L) * Ee + L * _e}${t === "in" && p.start_value !== void 0 || t === "out" && p.end_value !== void 0 ? "%" : "px"})`
          };
        } else if (p.name === "scale") {
          const Ee = t === "in" ? (U = p.start_value) != null ? U : 0 : (Z = p.end_value) != null ? Z : 0, _e = t === "in" ? (be = p.end_value) != null ? be : 1 : (Ae = p.start_value) != null ? Ae : 1;
          return {
            active: L > 0 && L < 1,
            scale: `scale(${(1 - L) * Ee + L * _e})`
          };
        }
        return {};
      }), c = l.map((p) => p.opacity).filter((p) => p !== void 0).reduce((p, w) => p * w, 1), u = l.map((p) => p.translate).filter((p) => p !== void 0).join(" "), f = l.map((p) => p.scale).filter((p) => p !== void 0).join(" "), _ = l.filter((p) => p.active).map((p) => p.scale).filter((p) => p !== void 0), h = _.length ? _[_.length - 1] : f;
      return `transform:${[u, h].filter(Boolean).join(" ") || "none"};opacity:${c}`;
    }
  };
}
const $i = typeof window < "u" && "HTMLDialogElement" in window, { document: n3, window: o3 } = Po;
function i3(e) {
  let r, t, n, o, i, s, a, l, c, u, f, _ = (
    /*visible*/
    e[1] && /*modal*/
    e[3] && zf(e)
  ), h = (
    /*substrateComponentContext*/
    e[14] && Of(e)
  );
  return i = new Qn({
    props: {
      componentContext: (
        /*componentContext*/
        e[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = gr(), h && h.c(), t = gr(), n = Me("div"), o = Me("div"), Ht(i.$$.fragment), g(o, "class", vo.tooltip__inner), g(n, "class", s = bt(
        "tooltip",
        vo,
        /*mods*/
        e[15]
      ) + " " + /*$isDesktop*/
      (e[21] ? jr.root_platform_desktop : "")), g(n, "role", "dialog"), g(
        n,
        "aria-modal",
        /*modal*/
        e[3]
      ), I(
        n,
        "top",
        /*tooltipY*/
        e[11]
      ), I(
        n,
        "left",
        /*tooltipX*/
        e[10]
      ), I(
        n,
        "width",
        /*tooltipWidth*/
        e[12]
      ), I(
        n,
        "height",
        /*tooltipHeight*/
        e[13]
      );
    },
    m(m, p) {
      _ && _.m(m, p), K(m, r, p), h && h.m(m, p), K(m, t, p), K(m, n, p), wt(n, o), Lt(i, o, null), e[40](o), e[41](n), c = !0, u || (f = [
        Ke(
          n,
          "keydown",
          /*onKeyDown*/
          e[26]
        ),
        Ke(
          n,
          "introstart",
          /*onIntroStart*/
          e[28]
        ),
        Ke(
          n,
          "introend",
          /*onIntroEnd*/
          e[29]
        ),
        Ke(
          n,
          "outrostart",
          /*onOutroStart*/
          e[30]
        )
      ], u = !0);
    },
    p(m, p) {
      e = m, /*visible*/
      e[1] && /*modal*/
      e[3] ? _ ? _.p(e, p) : (_ = zf(e), _.c(), _.m(r.parentNode, r)) : _ && (_.d(1), _ = null), /*substrateComponentContext*/
      e[14] ? h ? (h.p(e, p), p[0] & /*substrateComponentContext*/
      16384 && W(h, 1)) : (h = Of(e), h.c(), W(h, 1), h.m(t.parentNode, t)) : h && (dr(), re(h, 1, 1, () => {
        h = null;
      }), _r());
      const w = {};
      p[0] & /*componentContext*/
      4 && (w.componentContext = /*componentContext*/
      e[2]), i.$set(w), (!c || p[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = bt(
        "tooltip",
        vo,
        /*mods*/
        e[15]
      ) + " " + /*$isDesktop*/
      (e[21] ? jr.root_platform_desktop : ""))) && g(n, "class", s), (!c || p[0] & /*modal*/
      8) && g(
        n,
        "aria-modal",
        /*modal*/
        e[3]
      ), p[0] & /*tooltipY*/
      2048 && I(
        n,
        "top",
        /*tooltipY*/
        e[11]
      ), p[0] & /*tooltipX*/
      1024 && I(
        n,
        "left",
        /*tooltipX*/
        e[10]
      ), p[0] & /*tooltipWidth*/
      4096 && I(
        n,
        "width",
        /*tooltipWidth*/
        e[12]
      ), p[0] & /*tooltipHeight*/
      8192 && I(
        n,
        "height",
        /*tooltipHeight*/
        e[13]
      );
    },
    i(m) {
      c || (W(h), W(i.$$.fragment, m), fo(() => {
        c && (l && l.end(1), a = il(n, Qs, {
          animations: (
            /*$animationIn*/
            e[5] || Ri
          ),
          direction: "in"
        }), a.start());
      }), c = !0);
    },
    o(m) {
      re(h), re(i.$$.fragment, m), a && a.invalidate(), l = id(n, Qs, {
        animations: (
          /*$animationOut*/
          e[4] || Ri
        ),
        direction: "out"
      }), c = !1;
    },
    d(m) {
      m && (q(r), q(t), q(n)), _ && _.d(m), h && h.d(m), Rt(i), e[40](null), e[41](null), m && l && l.end(), u = !1, Ur(f);
    }
  };
}
function s3(e) {
  let r, t, n, o, i, s, a, l, c, u, f, _ = (
    /*substrateComponentContext*/
    e[14] && Bf(e)
  ), h = (
    /*visible*/
    e[1] && /*modal*/
    e[3] && /*data*/
    e[0].background_accessibility_description && Lf(e)
  );
  return i = new Qn({
    props: {
      componentContext: (
        /*componentContext*/
        e[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = gr(), t = Me("dialog"), h && h.c(), n = gr(), o = Me("div"), Ht(i.$$.fragment), g(o, "class", vo.tooltip__inner), g(t, "class", s = bt(
        "tooltip",
        vo,
        /*mods*/
        e[15]
      ) + " " + /*$isDesktop*/
      (e[21] ? jr.root_platform_desktop : "")), I(
        t,
        "top",
        /*tooltipY*/
        e[11]
      ), I(
        t,
        "left",
        /*tooltipX*/
        e[10]
      ), I(
        t,
        "width",
        /*tooltipWidth*/
        e[12]
      ), I(
        t,
        "height",
        /*tooltipHeight*/
        e[13]
      );
    },
    m(m, p) {
      _ && _.m(m, p), K(m, r, p), K(m, t, p), h && h.m(t, null), wt(t, n), wt(t, o), Lt(i, o, null), e[36](o), e[37](t), c = !0, u || (f = [
        Ke(
          t,
          "keydown",
          /*onKeyDown*/
          e[26]
        ),
        Ke(
          t,
          "close",
          /*onClose*/
          e[27]
        ),
        Ke(
          t,
          "cancel",
          /*onClose*/
          e[27]
        ),
        Ke(
          t,
          "click",
          /*onOutClick*/
          e[23]
        ),
        Ke(
          t,
          "introstart",
          /*onIntroStart*/
          e[28]
        ),
        Ke(
          t,
          "introend",
          /*onIntroEnd*/
          e[29]
        ),
        Ke(
          t,
          "outrostart",
          /*onOutroStart*/
          e[30]
        )
      ], u = !0);
    },
    p(m, p) {
      e = m, /*substrateComponentContext*/
      e[14] ? _ ? (_.p(e, p), p[0] & /*substrateComponentContext*/
      16384 && W(_, 1)) : (_ = Bf(e), _.c(), W(_, 1), _.m(r.parentNode, r)) : _ && (dr(), re(_, 1, 1, () => {
        _ = null;
      }), _r()), /*visible*/
      e[1] && /*modal*/
      e[3] && /*data*/
      e[0].background_accessibility_description ? h ? h.p(e, p) : (h = Lf(e), h.c(), h.m(t, n)) : h && (h.d(1), h = null);
      const w = {};
      p[0] & /*componentContext*/
      4 && (w.componentContext = /*componentContext*/
      e[2]), i.$set(w), (!c || p[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = bt(
        "tooltip",
        vo,
        /*mods*/
        e[15]
      ) + " " + /*$isDesktop*/
      (e[21] ? jr.root_platform_desktop : ""))) && g(t, "class", s), p[0] & /*tooltipY*/
      2048 && I(
        t,
        "top",
        /*tooltipY*/
        e[11]
      ), p[0] & /*tooltipX*/
      1024 && I(
        t,
        "left",
        /*tooltipX*/
        e[10]
      ), p[0] & /*tooltipWidth*/
      4096 && I(
        t,
        "width",
        /*tooltipWidth*/
        e[12]
      ), p[0] & /*tooltipHeight*/
      8192 && I(
        t,
        "height",
        /*tooltipHeight*/
        e[13]
      );
    },
    i(m) {
      c || (W(_), W(i.$$.fragment, m), fo(() => {
        c && (l && l.end(1), a = il(t, Qs, {
          animations: (
            /*$animationIn*/
            e[5] || Ri
          ),
          direction: "in"
        }), a.start());
      }), c = !0);
    },
    o(m) {
      re(_), re(i.$$.fragment, m), a && a.invalidate(), l = id(t, Qs, {
        animations: (
          /*$animationOut*/
          e[4] || Ri
        ),
        direction: "out"
      }), c = !1;
    },
    d(m) {
      m && (q(r), q(t)), _ && _.d(m), h && h.d(), Rt(i), e[36](null), e[37](null), m && l && l.end(), u = !1, Ur(f);
    }
  };
}
function zf(e) {
  let r;
  function t(i, s) {
    return (
      /*data*/
      i[0].background_accessibility_description ? a3 : l3
    );
  }
  let n = t(e), o = n(e);
  return {
    c() {
      o.c(), r = xt();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = t(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && q(r), o.d(i);
    }
  };
}
function l3(e) {
  let r, t, n;
  return {
    c() {
      r = Me("div"), g(r, "class", vo.tooltip__overlay);
    },
    m(o, i) {
      K(o, r, i), t || (n = Ke(
        r,
        "click",
        /*closeByOutside*/
        e[24]
      ), t = !0);
    },
    p: C,
    d(o) {
      o && q(r), t = !1, n();
    }
  };
}
function a3(e) {
  let r, t, n, o;
  return {
    c() {
      r = Me("button"), g(r, "class", vo.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", t = /*data*/
      e[0].background_accessibility_description);
    },
    m(i, s) {
      K(i, r, s), n || (o = Ke(
        r,
        "click",
        /*closeByOutside*/
        e[24]
      ), n = !0);
    },
    p(i, s) {
      s[0] & /*data*/
      1 && t !== (t = /*data*/
      i[0].background_accessibility_description) && g(r, "aria-label", t);
    },
    d(i) {
      i && q(r), n = !1, o();
    }
  };
}
function Of(e) {
  let r, t, n, o, i;
  return t = new Qn({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        e[14]
      )
    }
  }), {
    c() {
      r = Me("div"), Ht(t.$$.fragment), n = gr(), o = Me("div"), g(r, "class", vo.tooltip__substrate);
    },
    m(s, a) {
      K(s, r, a), Lt(t, r, null), e[38](r), K(s, n, a), K(s, o, a), e[39](o), i = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*substrateComponentContext*/
      16384 && (l.componentContext = /*substrateComponentContext*/
      s[14]), t.$set(l);
    },
    i(s) {
      i || (W(t.$$.fragment, s), i = !0);
    },
    o(s) {
      re(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (q(r), q(n), q(o)), Rt(t), e[38](null), e[39](null);
    }
  };
}
function Bf(e) {
  let r, t, n, o, i;
  return t = new Qn({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        e[14]
      )
    }
  }), {
    c() {
      r = Me("div"), Ht(t.$$.fragment), n = gr(), o = Me("div"), g(r, "class", vo.tooltip__substrate);
    },
    m(s, a) {
      K(s, r, a), Lt(t, r, null), e[34](r), K(s, n, a), K(s, o, a), e[35](o), i = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*substrateComponentContext*/
      16384 && (l.componentContext = /*substrateComponentContext*/
      s[14]), t.$set(l);
    },
    i(s) {
      i || (W(t.$$.fragment, s), i = !0);
    },
    o(s) {
      re(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (q(r), q(n), q(o)), Rt(t), e[34](null), e[35](null);
    }
  };
}
function Lf(e) {
  let r, t, n, o;
  return {
    c() {
      r = Me("button"), g(r, "class", vo.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", t = /*data*/
      e[0].background_accessibility_description);
    },
    m(i, s) {
      K(i, r, s), n || (o = Ke(
        r,
        "click",
        /*closeByOutside*/
        e[24]
      ), n = !0);
    },
    p(i, s) {
      s[0] & /*data*/
      1 && t !== (t = /*data*/
      i[0].background_accessibility_description) && g(r, "aria-label", t);
    },
    d(i) {
      i && q(r), n = !1, o();
    }
  };
}
function c3(e) {
  let r, t, n, o, i, s, a;
  const l = [s3, i3], c = [];
  function u(f, _) {
    return $i ? 0 : 1;
  }
  return t = u(), n = c[t] = l[t](e), {
    c() {
      r = gr(), n.c(), o = xt();
    },
    m(f, _) {
      K(f, r, _), c[t].m(f, _), K(f, o, _), i = !0, s || (a = [
        Ke(
          o3,
          "resize",
          /*onWindowResize*/
          e[25]
        ),
        Ke(
          n3.body,
          "click",
          /*onOutClick*/
          e[23],
          !0
        )
      ], s = !0);
    },
    p(f, _) {
      n.p(f, _);
    },
    i(f) {
      i || (W(n), i = !0);
    },
    o(f) {
      re(n), i = !1;
    },
    d(f) {
      f && (q(r), q(o)), c[t].d(f), s = !1, Ur(a);
    }
  };
}
const Ri = {
  name: "set",
  items: [{ name: "translate" }, { name: "fade" }]
};
let Kn = [];
function u3(e, r, t) {
  let n, o, i, s, a, l, c, u, f, _ = C, h = () => (_(), _ = S(i, (F) => t(46, f = F)), i), m, p = C, w = () => (p(), p = S(o, (F) => t(47, m = F)), o), k, N = C, R = () => (N(), N = S(n, (F) => t(48, k = F)), n), L, ee = C, ce = () => (ee(), ee = S(a, (F) => t(4, L = F)), a), T, X = C, le = () => (X(), X = S(s, (F) => t(5, T = F)), s), E;
  e.$$.on_destroy.push(() => _()), e.$$.on_destroy.push(() => p()), e.$$.on_destroy.push(() => N()), e.$$.on_destroy.push(() => ee()), e.$$.on_destroy.push(() => X());
  let { ownerNode: D } = r, { data: P } = r, { internalId: U } = r, { parentComponentContext: Z } = r;
  const be = Tr(Zr), Ae = be.isDesktop;
  yn(e, Ae, (F) => t(21, E = F));
  const Ee = Date.now();
  let _e, Ie, $, tt, Xe = !1, qe = "", ve = "", De = "", ue = "", ke = null, de, x, fe = !0, ie = null;
  function Fe() {
    var pt, ye;
    if (!_e || !D)
      return;
    const F = _e.parentElement;
    if (!F)
      return;
    const Ct = _e.style.cssText;
    t(6, _e.style.cssText += ";transform: none !important", _e);
    const ft = D.getBoundingClientRect(), St = _e.getBoundingClientRect(), Tt = F.getBoundingClientRect();
    t(6, _e.style.cssText = Ct, _e);
    let $e = 0, Y = 0, At = null, Mt = null, Qt = 0, Jt = 0;
    const he = (pt = de == null ? void 0 : de.json) == null ? void 0 : pt.width, Le = (ye = de == null ? void 0 : de.json) == null ? void 0 : ye.height;
    if (!he || he.type === "match_parent" ? Qt = At = window.innerWidth : he.type === "fixed" && he.value ? Qt = At = he.value : Qt = St.width, (Le == null ? void 0 : Le.type) === "match_parent" ? Jt = Mt = window.innerHeight : (Le == null ? void 0 : Le.type) === "fixed" && Le.value ? Jt = Mt = Le.value : Jt = St.height, k === "left" || k === "bottom-left" || k === "top-left")
      $e = ft.left - Qt;
    else if (k === "top" || k === "bottom" || k === "center")
      $e = (ft.left + ft.right) / 2 - Qt / 2;
    else if (k === "right" || k === "bottom-right" || k === "top-right")
      $e = ft.right;
    else
      return;
    if (k === "top" || k === "top-left" || k === "top-right")
      Y = ft.top - Jt;
    else if (k === "left" || k === "right" || k === "center")
      Y = (ft.top + ft.bottom) / 2 - Jt / 2;
    else if (k === "bottom-left" || k === "bottom" || k === "bottom-right")
      Y = ft.bottom;
    else
      return;
    $i && fe || ($e -= Tt.left, Y -= Tt.top), $e += m || 0, Y += f || 0, t(10, qe = `${$e}px`), t(11, ve = `${Y}px`), t(12, De = At !== null ? `${At}px` : ""), t(13, ue = Mt !== null ? `${Mt}px` : ""), t(1, Xe = !0), At === null || Mt === null ? typeof ResizeObserver < "u" && !ke && (ke = new ResizeObserver(() => {
      requestAnimationFrame(Fe);
    }), ke.observe(_e)) : ke == null || ke.disconnect();
  }
  function Ye(F) {
    if (Kn.length && Kn[Kn.length - 1] !== _e)
      return;
    const Ct = F.composedPath();
    Date.now() - Ee < 100 || Ct.includes(_e) && !($i && Ct[0] === _e) || Ze();
  }
  function Ze(F) {
    F == null || F.stopPropagation(), F == null || F.preventDefault(), de.getJsonWithVars(P.close_by_tap_outside) !== !1 && (Kn = Kn.filter((Ct) => Ct !== _e), be.onTooltipClose(U)), P.tap_outside_actions && de.execAnyActions(P.tap_outside_actions, { processUrls: !0 });
  }
  function te() {
    Fe();
  }
  function He(F) {
    Kn.length && Kn[Kn.length - 1] !== _e || F.key === "Escape" && !F.ctrlKey && !F.shiftKey && !F.altKey && !F.metaKey && (Kn = Kn.filter((Ct) => Ct !== _e), be.onTooltipClose(U));
  }
  function Be(F) {
    Kn = Kn.filter((Ct) => Ct !== _e), be.onTooltipClose(U), F.preventDefault();
  }
  function it() {
    $ && $.animate({ opacity: [0, 1] }, {
      duration: l,
      easing: "ease-in-out"
    });
  }
  function st() {
    $ && _e.insertBefore($, Ie);
  }
  function lt() {
    tt != null && tt.parentElement && $ && (tt.parentElement.insertBefore($, tt), $.animate({ opacity: [1, 0] }, {
      duration: c,
      easing: "ease-in-out"
    }));
  }
  ro(() => {
    try {
      ie = document.activeElement;
    } catch {
    }
    if (be.tooltipRoot) {
      const F = window.getComputedStyle(_e);
      t(6, _e.style.fontSize = F.fontSize, _e), t(6, _e.style.fontFamily = F.fontFamily, _e), t(6, _e.style.lineHeight = F.lineHeight, _e), be.tooltipRoot.appendChild(_e);
    }
    $i && _e && _e instanceof HTMLDialogElement && _e[fe ? "showModal" : "show"](), fe && Kn.push(_e);
  }), ol(() => {
    Xe || Fe();
  }), ln(() => {
    if (de && de.destroy(), x && x.destroy(), ke == null || ke.disconnect(), Kn = Kn.filter((F) => F !== _e), fe && ie && ie instanceof HTMLElement) {
      $i && _e && _e instanceof HTMLDialogElement && _e.close();
      try {
        ie.focus({ preventScroll: !0 });
      } catch {
      }
    }
  });
  function kt(F) {
    Dr[F ? "unshift" : "push"](() => {
      $ = F, t(8, $);
    });
  }
  function nt(F) {
    Dr[F ? "unshift" : "push"](() => {
      tt = F, t(9, tt);
    });
  }
  function Nt(F) {
    Dr[F ? "unshift" : "push"](() => {
      Ie = F, t(7, Ie);
    });
  }
  function ut(F) {
    Dr[F ? "unshift" : "push"](() => {
      _e = F, t(6, _e);
    });
  }
  function pe(F) {
    Dr[F ? "unshift" : "push"](() => {
      $ = F, t(8, $);
    });
  }
  function ge(F) {
    Dr[F ? "unshift" : "push"](() => {
      tt = F, t(9, tt);
    });
  }
  function _t(F) {
    Dr[F ? "unshift" : "push"](() => {
      Ie = F, t(7, Ie);
    });
  }
  function Se(F) {
    Dr[F ? "unshift" : "push"](() => {
      _e = F, t(6, _e);
    });
  }
  return e.$$set = (F) => {
    "ownerNode" in F && t(31, D = F.ownerNode), "data" in F && t(0, P = F.data), "internalId" in F && t(32, U = F.internalId), "parentComponentContext" in F && t(33, Z = F.parentComponentContext);
  }, e.$$.update = () => {
    var F, Ct, ft, St, Tt;
    e.$$.dirty[0] & /*componentContext, data*/
    5 | e.$$.dirty[1] & /*parentComponentContext*/
    4 && (de && de.destroy(), t(2, de = Z.produceChildContext(P.div || {}, { isTooltipRoot: !0 })), P.substrate_div && t(14, x = Z.produceChildContext(P.substrate_div, { isTooltipRoot: !0 }))), e.$$.dirty[0] & /*data*/
    1 | e.$$.dirty[1] & /*parentComponentContext*/
    4 && R(t(20, n = Z.getDerivedFromVars(P.position))), e.$$.dirty[0] & /*data*/
    1 | e.$$.dirty[1] & /*parentComponentContext*/
    4 && w(t(19, o = Z.getDerivedFromVars((Ct = (F = P.offset) == null ? void 0 : F.x) == null ? void 0 : Ct.value))), e.$$.dirty[0] & /*data*/
    1 | e.$$.dirty[1] & /*parentComponentContext*/
    4 && h(t(18, i = Z.getDerivedFromVars((St = (ft = P.offset) == null ? void 0 : ft.y) == null ? void 0 : St.value))), e.$$.dirty[0] & /*data*/
    1 | e.$$.dirty[1] & /*parentComponentContext*/
    4 && le(t(17, s = Z.getDerivedFromVars(P.animation_in))), e.$$.dirty[0] & /*data*/
    1 | e.$$.dirty[1] & /*parentComponentContext*/
    4 && ce(t(16, a = Z.getDerivedFromVars(P.animation_out))), e.$$.dirty[0] & /*$animationIn*/
    32 && (l = zi() ? 0 : ra(os(T || Ri))), e.$$.dirty[0] & /*$animationOut*/
    16 && (c = zi() ? 0 : ra(os(L || Ri))), e.$$.dirty[0] & /*data*/
    1 && (((Tt = P.mode) == null ? void 0 : Tt.type) === "non_modal" ? t(3, fe = !1) : t(3, fe = !0)), e.$$.dirty[0] & /*visible, modal*/
    10 && t(15, u = { visible: Xe, modal: fe });
  }, [
    P,
    Xe,
    de,
    fe,
    L,
    T,
    _e,
    Ie,
    $,
    tt,
    qe,
    ve,
    De,
    ue,
    x,
    u,
    a,
    s,
    i,
    o,
    n,
    E,
    Ae,
    Ye,
    Ze,
    te,
    He,
    Be,
    it,
    st,
    lt,
    D,
    U,
    Z,
    kt,
    nt,
    Nt,
    ut,
    pe,
    ge,
    _t,
    Se
  ];
}
class f3 extends Br {
  constructor(r) {
    super(), Or(
      this,
      r,
      u3,
      c3,
      Vr,
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
const d3 = "appkit-root_platform_desktop", _3 = "appkit-menu", p3 = "appkit-menu_visible", g3 = "appkit-menu__list", h3 = "appkit-menu__item", Bs = {
  root_platform_desktop: d3,
  menu: _3,
  menu_visible: p3,
  menu__list: g3,
  menu__item: h3
}, { window: Rf } = Po;
function Hf(e, r, t) {
  const n = e.slice();
  return n[23] = r[t], n;
}
function m3(e) {
  let r = (
    /*item*/
    e[23].text + ""
  ), t;
  return {
    c() {
      t = Gn(r);
    },
    m(n, o) {
      K(n, t, o);
    },
    p(n, o) {
      o & /*items*/
      1 && r !== (r = /*item*/
      n[23].text + "") && to(t, r);
    },
    d(n) {
      n && q(t);
    }
  };
}
function Wf(e) {
  let r, t, n, o;
  return t = new al({
    props: {
      componentContext: (
        /*parentComponentContext*/
        e[1]
      ),
      actions: (
        /*item*/
        e[23].actions || /*item*/
        e[23].action && [
          /*item*/
          e[23].action
        ]
      ),
      cls: Bs.menu__item + " " + /*itemMix*/
      e[10],
      customAction: (
        /*onItemAction*/
        e[14]
      ),
      $$slots: { default: [m3] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      r = Me("li"), Ht(t.$$.fragment), n = gr();
    },
    m(i, s) {
      K(i, r, s), Lt(t, r, null), wt(r, n), o = !0;
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
      67108865 && (a.$$scope = { dirty: s, ctx: i }), t.$set(a);
    },
    i(i) {
      o || (W(t.$$.fragment, i), o = !0);
    },
    o(i) {
      re(t.$$.fragment, i), o = !1;
    },
    d(i) {
      i && q(r), Rt(t);
    }
  };
}
function b3(e) {
  let r, t, n, o, i, s, a, l = or(
    /*items*/
    e[0]
  ), c = [];
  for (let f = 0; f < l.length; f += 1)
    c[f] = Wf(Hf(e, l, f));
  const u = (f) => re(c[f], 1, 1, () => {
    c[f] = null;
  });
  return {
    c() {
      r = Me("div"), t = Me("ul");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      g(t, "class", Bs.menu__list), g(r, "class", n = bt(
        "menu",
        Bs,
        /*mods*/
        e[7]
      ) + " " + /*$isDesktop*/
      (e[8] ? jr.root_platform_desktop : "") + " " + /*popupMix*/
      e[9]), I(
        r,
        "top",
        /*menuY*/
        e[4]
      ), I(
        r,
        "left",
        /*menuX*/
        e[3]
      ), I(
        r,
        "width",
        /*menuWidth*/
        e[5]
      ), I(
        r,
        "height",
        /*menuHeight*/
        e[6]
      );
    },
    m(f, _) {
      K(f, r, _), wt(r, t);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(t, null);
      e[17](r), i = !0, s || (a = [
        Ke(
          Rf,
          "click",
          /*onWindowClick*/
          e[12]
        ),
        Ke(
          Rf,
          "resize",
          /*onWindowResize*/
          e[13]
        )
      ], s = !0);
    },
    p(f, [_]) {
      if (_ & /*parentComponentContext, items, itemMix, onItemAction*/
      17411) {
        l = or(
          /*items*/
          f[0]
        );
        let h;
        for (h = 0; h < l.length; h += 1) {
          const m = Hf(f, l, h);
          c[h] ? (c[h].p(m, _), W(c[h], 1)) : (c[h] = Wf(m), c[h].c(), W(c[h], 1), c[h].m(t, null));
        }
        for (dr(), h = l.length; h < c.length; h += 1)
          u(h);
        _r();
      }
      (!i || _ & /*mods, $isDesktop*/
      384 && n !== (n = bt(
        "menu",
        Bs,
        /*mods*/
        f[7]
      ) + " " + /*$isDesktop*/
      (f[8] ? jr.root_platform_desktop : "") + " " + /*popupMix*/
      f[9])) && g(r, "class", n), _ & /*menuY*/
      16 && I(
        r,
        "top",
        /*menuY*/
        f[4]
      ), _ & /*menuX*/
      8 && I(
        r,
        "left",
        /*menuX*/
        f[3]
      ), _ & /*menuWidth*/
      32 && I(
        r,
        "width",
        /*menuWidth*/
        f[5]
      ), _ & /*menuHeight*/
      64 && I(
        r,
        "height",
        /*menuHeight*/
        f[6]
      );
    },
    i(f) {
      if (!i) {
        for (let _ = 0; _ < l.length; _ += 1)
          W(c[_]);
        f && fo(() => {
          i && (o || (o = Ta(r, Nf, { y: 20 }, !0)), o.run(1));
        }), i = !0;
      }
    },
    o(f) {
      c = c.filter(Boolean);
      for (let _ = 0; _ < c.length; _ += 1)
        re(c[_]);
      f && (o || (o = Ta(r, Nf, { y: 20 }, !1)), o.run(0)), i = !1;
    },
    d(f) {
      f && q(r), sn(c, f), e[17](null), f && o && o.end(), s = !1, Ur(a);
    }
  };
}
function y3(e, r, t) {
  let n, o, { ownerNode: i } = r, { items: s } = r, { parentComponentContext: a } = r;
  const l = Tr(Zr), c = l.getCustomization("menuPopupClass") || "", u = l.getCustomization("menuItemClass") || "", f = l.isDesktop;
  yn(e, f, (E) => t(8, o = E));
  const _ = Date.now(), h = E_();
  let m, p = !1, w = "", k = "", N = "", R = "", L = null;
  function ee() {
    if (!m || !i)
      return;
    const E = m.parentElement;
    if (!E)
      return;
    const D = i.getBoundingClientRect(), P = m.getBoundingClientRect(), U = E.getBoundingClientRect(), Z = window.innerWidth, be = window.innerHeight;
    let Ae = 0, Ee = 0, _e = P.width, Ie = P.height;
    Ae = D.left - U.left, Ee = D.bottom - U.top, Ae + _e > Z && (Ae = Z - _e), Ae < 0 && (Ae = 0), Ee + Ie > be && (D.top - U.top - Ie > 0 ? Ee = D.top - U.top - Ie : Ee = be - Ie), Ee < 0 && (Ee = 0), t(3, w = `${Ae}px`), t(4, k = `${Ee}px`), t(5, N = ""), t(6, R = ""), t(16, p = !0), typeof ResizeObserver < "u" && !L && (L = new ResizeObserver(() => {
      requestAnimationFrame(ee);
    }), L.observe(m));
  }
  function ce(E) {
    Date.now() - _ < 100 || E.composedPath().includes(m) || h("close");
  }
  function T() {
    ee();
  }
  function X() {
    return h("close"), !0;
  }
  ro(() => {
    if (l.tooltipRoot) {
      const E = window.getComputedStyle(m);
      t(2, m.style.fontSize = E.fontSize, m), t(2, m.style.fontFamily = E.fontFamily, m), t(2, m.style.lineHeight = E.lineHeight, m), l.tooltipRoot.appendChild(m);
    }
  }), ol(() => {
    p || ee();
  }), ln(() => {
    L == null || L.disconnect();
  });
  function le(E) {
    Dr[E ? "unshift" : "push"](() => {
      m = E, t(2, m);
    });
  }
  return e.$$set = (E) => {
    "ownerNode" in E && t(15, i = E.ownerNode), "items" in E && t(0, s = E.items), "parentComponentContext" in E && t(1, a = E.parentComponentContext);
  }, e.$$.update = () => {
    e.$$.dirty & /*visible*/
    65536 && t(7, n = { visible: p });
  }, [
    s,
    a,
    m,
    w,
    k,
    N,
    R,
    n,
    o,
    c,
    u,
    f,
    ce,
    T,
    X,
    i,
    p,
    le
  ];
}
class w3 extends Br {
  constructor(r) {
    super(), Or(this, r, y3, b3, Vr, {
      ownerNode: 15,
      items: 0,
      parentComponentContext: 1
    });
  }
}
const { Map: k3 } = Po;
function Uf(e, r, t) {
  const n = e.slice();
  return n[134] = r[t], n;
}
function Gf(e) {
  let r, t, n, o, i, s, a, l, c, u;
  t = new Nw({
    props: { svgFiltersMap: (
      /*svgFiltersMap*/
      e[5]
    ) }
  }), o = new Qn({
    props: {
      componentContext: (
        /*rootStateComponentContext*/
        e[6]
      )
    }
  });
  let f = (
    /*tooltips*/
    e[3] && Jf(e)
  ), _ = (
    /*menu*/
    e[4] && Yf(e)
  );
  return {
    c() {
      r = Me("div"), Ht(t.$$.fragment), n = gr(), Ht(o.$$.fragment), i = gr(), f && f.c(), s = gr(), _ && _.c(), g(r, "class", a = jr.root + /*$isDesktop*/
      (e[7] ? ` ${jr.root_platform_desktop}` : "") + /*mix*/
      (e[0] ? ` ${/*mix*/
      e[0]}` : "")), g(
        r,
        "dir",
        /*$directionStore*/
        e[8]
      );
    },
    m(h, m) {
      K(h, r, m), Lt(t, r, null), wt(r, n), Lt(o, r, null), wt(r, i), f && f.m(r, null), wt(r, s), _ && _.m(r, null), l = !0, c || (u = Ke(r, "touchstart", E3, { passive: !0 }), c = !0);
    },
    p(h, m) {
      const p = {};
      m[0] & /*svgFiltersMap*/
      32 && (p.svgFiltersMap = /*svgFiltersMap*/
      h[5]), t.$set(p);
      const w = {};
      m[0] & /*rootStateComponentContext*/
      64 && (w.componentContext = /*rootStateComponentContext*/
      h[6]), o.$set(w), /*tooltips*/
      h[3] ? f ? (f.p(h, m), m[0] & /*tooltips*/
      8 && W(f, 1)) : (f = Jf(h), f.c(), W(f, 1), f.m(r, s)) : f && (dr(), re(f, 1, 1, () => {
        f = null;
      }), _r()), /*menu*/
      h[4] ? _ ? (_.p(h, m), m[0] & /*menu*/
      16 && W(_, 1)) : (_ = Yf(h), _.c(), W(_, 1), _.m(r, null)) : _ && (dr(), re(_, 1, 1, () => {
        _ = null;
      }), _r()), (!l || m[0] & /*$isDesktop, mix*/
      129 && a !== (a = jr.root + /*$isDesktop*/
      (h[7] ? ` ${jr.root_platform_desktop}` : "") + /*mix*/
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
      l || (W(t.$$.fragment, h), W(o.$$.fragment, h), W(f), W(_), l = !0);
    },
    o(h) {
      re(t.$$.fragment, h), re(o.$$.fragment, h), re(f), re(_), l = !1;
    },
    d(h) {
      h && q(r), Rt(t), Rt(o), f && f.d(), _ && _.d(), c = !1, u();
    }
  };
}
function Jf(e) {
  let r = [], t = new k3(), n, o, i = or(
    /*tooltips*/
    e[3]
  );
  const s = (a) => (
    /*item*/
    a[134].internalId
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = Uf(e, i, a), c = s(l);
    t.set(c, r[a] = qf(c, l));
  }
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      n = xt();
    },
    m(a, l) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(a, l);
      K(a, n, l), o = !0;
    },
    p(a, l) {
      l[0] & /*tooltips, rootStateComponentContext*/
      72 && (i = or(
        /*tooltips*/
        a[3]
      ), dr(), r = ld(r, l, s, 1, a, i, t, n.parentNode, sd, qf, n, Uf), _r());
    },
    i(a) {
      if (!o) {
        for (let l = 0; l < i.length; l += 1)
          W(r[l]);
        o = !0;
      }
    },
    o(a) {
      for (let l = 0; l < r.length; l += 1)
        re(r[l]);
      o = !1;
    },
    d(a) {
      a && q(n);
      for (let l = 0; l < r.length; l += 1)
        r[l].d(a);
    }
  };
}
function qf(e, r) {
  let t, n, o;
  return n = new f3({
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
    key: e,
    first: null,
    c() {
      t = xt(), Ht(n.$$.fragment), this.first = t;
    },
    m(i, s) {
      K(i, t, s), Lt(n, i, s), o = !0;
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
      o || (W(n.$$.fragment, i), o = !0);
    },
    o(i) {
      re(n.$$.fragment, i), o = !1;
    },
    d(i) {
      i && q(t), Rt(n, i);
    }
  };
}
function Yf(e) {
  let r, t;
  return r = new w3({
    props: {
      ownerNode: (
        /*menu*/
        e[4].node
      ),
      items: (
        /*menu*/
        e[4].items
      ),
      parentComponentContext: (
        /*menu*/
        e[4].componentContext || /*rootStateComponentContext*/
        e[6]
      )
    }
  }), r.$on(
    "close",
    /*close_handler*/
    e[45]
  ), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Lt(r, n, o), t = !0;
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
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      re(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function v3(e) {
  let r, t, n = !/*hasError*/
  e[1] && !/*hasIdError*/
  e[2] && /*rootStateComponentContext*/
  e[6] && Gf(e);
  return {
    c() {
      n && n.c(), r = xt();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), t = !0;
    },
    p(o, i) {
      !/*hasError*/
      o[1] && !/*hasIdError*/
      o[2] && /*rootStateComponentContext*/
      o[6] ? n ? (n.p(o, i), i[0] & /*hasError, hasIdError, rootStateComponentContext*/
      70 && W(n, 1)) : (n = Gf(o), n.c(), W(n, 1), n.m(r.parentNode, r)) : n && (dr(), re(n, 1, 1, () => {
        n = null;
      }), _r());
    },
    i(o) {
      t || (W(n), t = !0);
    },
    o(o) {
      re(n), t = !1;
    },
    d(o) {
      o && q(r), n && n.d(o);
    }
  };
}
let va = Do(!0), ws = 0;
function Kf() {
  va.set(!1);
}
function Xf() {
  va.set(!0);
}
const j3 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean"]), C3 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean", "array", "dict"]);
function Ro(e, r) {
  if (e && r)
    return new Map([...e, ...r]);
  if (e)
    return e;
  if (r)
    return r;
}
function E3() {
}
function A3(e, r, t) {
  var qr, Yr, hn;
  let n, o, i, s, { id: a } = r, { json: l = {} } = r, { platform: c = "auto" } = r, { theme: u = "system" } = r, { globalVariablesController: f = void 0 } = r, { mix: _ = "" } = r, { customization: h = {} } = r, { builtinProtocols: m = ["http", "https", "tel", "mailto", "intent"] } = r, { extensions: p = /* @__PURE__ */ new Map() } = r, { onError: w = void 0 } = r, { onStat: k = void 0 } = r, { onSubmit: N = void 0 } = r, { onCustomAction: R = void 0 } = r, { onComponent: L = void 0 } = r, { typefaceProvider: ee = (y) => "" } = r, { fetchInit: ce = {} } = r, { tooltipRoot: T = void 0 } = r, { customComponents: X = void 0 } = r, { direction: le = "ltr" } = r, { store: E = void 0 } = r, { pagerChildrenClipEnabled: D = !0 } = r, { pagerMouseDragEnabled: P = !0 } = r, { weekStartDay: U = 0 } = r, { videoPlayerProvider: Z = void 0 } = r, { devtoolCreateHierarchy: be = "lazy" } = r, Ae = !0, Ee = Do(c === "desktop");
  if (yn(e, Ee, (y) => t(7, i = y)), c === "auto" && typeof matchMedia < "u") {
    const y = matchMedia("(any-pointer: coarse)");
    Ee.set(!y.matches), y.addListener(() => {
      Ee.set(!y.matches);
    });
  }
  let _e = "light", Ie = null;
  const $ = Do(le === "rtl" ? "rtl" : "ltr");
  yn(e, $, (y) => t(8, s = y));
  function tt() {
    u !== "system" || !Ie || t(41, _e = Ie.matches ? "dark" : "light");
  }
  function Xe(y) {
    t(12, u = y);
  }
  function qe() {
    return /* @__PURE__ */ new Map();
  }
  function ve() {
    return /* @__PURE__ */ new Map();
  }
  function De(y) {
    t(11, l = y);
  }
  function ue(y) {
    return Pe(y, F);
  }
  const ke = new Set(m);
  let de = !1, x = !1;
  a || (x = !0, F(J(new Error('"id" prop is required'))));
  const fe = { stateChange: !1 }, ie = f || new t_(), Fe = ie.getLastAddedVariableStore(), Ye = ie.getVariables(), Ze = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), He = /* @__PURE__ */ new Map(), Be = /* @__PURE__ */ new Map();
  let it = null;
  const st = /* @__PURE__ */ new Map();
  let lt = 0, kt = [];
  const nt = /* @__PURE__ */ new Set();
  let Nt;
  const ut = [];
  function pe(y) {
    return h == null ? void 0 : h[y];
  }
  function ge(y, j, { additionalVars: A, keepComplex: se = !1, customFunctions: B, emptyVarsError: Qe, maxDepth: Ve } = {}) {
    var Kt;
    if (!j)
      return Uo(j);
    const qt = Ro(te, A), Vt = Pf(j, y, E, U, Ve);
    if (!Vt.vars.length)
      if (Vt.hasExpression) {
        const ht = Vt.applyVars(qt, B);
        if (!((Kt = ht.usedVars) != null && Kt.size))
          return Qe && Qe(), Uo(ht.result);
      } else
        return Qe && Qe(), Uo(j);
    const Ge = Vt.vars.map((ht) => qt.get(ht) || mt(ht)).filter(zo);
    return Do(void 0, (ht) => {
      const Cr = /* @__PURE__ */ new Map();
      let Er;
      const mn = () => {
        var rn;
        const en = Vt.applyVars(qt, B, se);
        for (const [nn, Cn] of Cr)
          (rn = en.usedVars) != null && rn.has(nn) || (Cn(), Cr.delete(nn));
        if (en.usedVars) {
          for (const nn of en.usedVars)
            if (!Cr.has(nn)) {
              let Cn = !0;
              Cr.set(nn, nn.subscribe(() => {
                Cn || ht(mn()), Cn = !1;
              }));
            }
        }
        return en.result;
      };
      return Er = Wi(Ge, mn).subscribe((en) => {
        ht(en);
      }), () => {
        Er == null || Er();
        for (const [en, rn] of Cr)
          rn();
      };
    });
  }
  function _t(y, j, A, se = !1, B = void 0) {
    const Qe = Pf(j, y, E, U);
    if (!Qe.hasExpression)
      return j;
    const Ve = Ro(te, A);
    return Qe.applyVars(Ve, B, se).result;
  }
  function Se(y, j, A) {
    const se = /* @__PURE__ */ new Map(), B = js(y, "dict", j);
    se.set(y, B);
    const Qe = js("index", "integer", A);
    return se.set("index", Qe), se;
  }
  function F(y) {
    w ? w({ error: y }) : (y == null ? void 0 : y.level) === "warn" ? console.warn(y) : console.error(y);
  }
  function Ct(y, j) {
    k && k({ type: y, action: j });
  }
  function ft(y) {
    return y in n;
  }
  function St(y, j) {
    if (!y)
      return { json: y, templateContext: j };
    const A = /* @__PURE__ */ new Set([y.type]);
    for (; y.type && y.type in n; ) {
      if ({ json: y, templateContext: j } = zw(y, j, n, F), A.has(y.type))
        return { json: y, templateContext: j };
      A.add(y.type);
    }
    return { json: y, templateContext: j };
  }
  let Tt = 0;
  function $e(y) {
    return `${a}-${Tt++}`;
  }
  function Y(y) {
    return `divkit-${$e()}`;
  }
  let At = {}, Mt = {};
  function Qt(y, j) {
    const A = `${y}:${j}`;
    if (Mt[A] = Mt[A] || 0, ++Mt[A], At[A])
      return At[A];
    const se = `${$e()}-svg-filter`;
    return t(5, At = { ...At, [A]: se }), se;
  }
  function Jt(y, j) {
    if (!y)
      return;
    const A = `${y}:${j}`;
    Mt[A] && --Mt[A] === 0 && t(5, At = Object.keys(At).reduce(
      (se, B) => (Mt[B] && (se[B] = At[B]), se),
      {}
    ));
  }
  const he = $e() + "-id-", Le = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map();
  function ye(y) {
    return he + y;
  }
  function xe(y, j) {
    let A = Le.get(y) || [];
    return Le.has(y) || Le.set(y, A), A.push(j), () => {
      A = A.filter((B) => B !== j), A.length || Le.delete(y);
      const se = ye(y);
      pt.has(se) && pt.delete(se);
    };
  }
  function Oe(y) {
    var A, se;
    const j = (se = (A = Le.get(y)) == null ? void 0 : A[0]) == null ? void 0 : se.node();
    if (j) {
      const B = ye(y), Qe = pt.get(B);
      return Qe && Qe !== j && Qe.removeAttribute("id"), j.setAttribute("id", B), pt.set(B, j), B;
    }
    return "";
  }
  async function er(y, j) {
    var Ve, qt;
    if (!y)
      throw new Error("Missing state id");
    let A = y.split("/");
    const se = A.length % 2 === 0 && H2(j);
    let B = se || br;
    const Qe = (j == null ? void 0 : j.logError) || F;
    if (!se)
      if ((Ve = B.states) != null && Ve.root) {
        const Vt = B.states.root;
        if (Vt.length > 1) {
          Qe(J(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: y } }));
          return;
        }
        if (B = await Vt[0](A[0]), !B)
          return;
        A = A.slice(1);
      } else
        return;
    for (let Vt = 0; Vt < A.length; Vt += 2) {
      const Ge = A[Vt], Kt = A[Vt + 1];
      if ((qt = B.states) != null && qt[Ge]) {
        const ht = B.states[Ge];
        if (ht.length > 1) {
          Qe(J(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: y } }));
          return;
        }
        if (B = await ht[0](Kt), !B)
          return;
      } else
        return;
    }
  }
  async function ze(y, j, A) {
    var Cr;
    const se = (y == null ? void 0 : y.logError) || F;
    if (!q2(j)) {
      se(J(new Error("Incorrect submit action"), {
        additional: { containerId: j.container_id }
      }));
      return;
    }
    const B = Le.get(j.container_id);
    if ((B == null ? void 0 : B.length) !== 1) {
      se(J(new Error("Error resolving container. Found multiple elements that respond to id"), {
        additional: { containerId: j.container_id }
      }));
      return;
    }
    const Qe = B[0].context(), Ve = {};
    if (Qe.variables)
      for (const [Er, mn] of Qe.variables) {
        const en = mn.getValue();
        typeof en == "bigint" ? Ve[Er] = Number(en) : Ve[Er] = en;
      }
    if (N) {
      Promise.resolve().then(() => N(j, Ve)).then(() => {
        Pt(A.on_success_actions, { componentContext: y });
      }).catch(() => {
        Pt(A.on_fail_actions, { componentContext: y });
      });
      return;
    }
    const qt = Object.keys(Ve).length > 0, Vt = (j.request.method || "post").toLowerCase();
    if ((Vt === "get" || Vt === "head") && qt) {
      se(J(new Error("Can't send variables using the get/head method."), { additional: { url: j.request.url } }));
      return;
    }
    let Ge = !1;
    const Kt = [];
    (Cr = j.request.headers) == null || Cr.forEach((Er) => {
      Kt.push([Er.name, Er.value]), Er.name.toLowerCase() === "content-type" && (Ge = !0);
    }), Ge || Kt.push(["Content-Type", "application/json"]);
    let ht;
    typeof ce == "function" ? ht = ce(j.request.url) : ht = ce, fetch(j.request.url, {
      ...ht,
      method: Vt,
      headers: Kt,
      body: qt ? JSON.stringify(Ve) : void 0
    }).then((Er) => {
      if (!Er.ok)
        throw new Error("Response is not ok");
      Pt(A.on_success_actions, { componentContext: y });
    }).catch((Er) => {
      se(J(new Error("Failed to submit"), {
        additional: {
          url: j.request.url,
          originalError: Er
        }
      })), Pt(A.on_fail_actions, { componentContext: y });
    });
  }
  function yt(y, j) {
    var B, Qe, Ve, qt, Vt, Ge, Kt, ht, Cr;
    const A = (y == null ? void 0 : y.logError) || F, se = j.id && rt(j.id);
    if (!se) {
      A(J(new Error('Missing component for "scroll_to" action'), { additional: { id: j.id } }));
      return;
    }
    if (j.animated !== void 0 && typeof j.animated != "boolean") {
      A(J(new Error('Missing properties for "scroll_to" action'), { additional: { id: j.id } }));
      return;
    }
    switch ((B = j.destination) == null ? void 0 : B.type) {
      case "index": {
        typeof j.destination.value == "number" && se.setCurrentItem(j.destination.value, (Qe = j.animated) != null ? Qe : !0);
        break;
      }
      case "offset": {
        typeof j.destination.value == "number" && ((qt = se.scrollToPosition) == null || qt.call(se, j.destination.value, (Ve = j.animated) != null ? Ve : !0));
        break;
      }
      case "start": {
        (Ge = se.scrollToStart) == null || Ge.call(se, (Vt = j.animated) != null ? Vt : !0);
        break;
      }
      case "end": {
        (ht = se.scrollToEnd) == null || ht.call(se, (Kt = j.animated) != null ? Kt : !0);
        break;
      }
      default:
        A(J(new Error('Unknown destination for "scroll_to" action'), {
          additional: {
            id: j.id,
            destination: (Cr = j.destination) == null ? void 0 : Cr.type
          }
        }));
    }
  }
  function Ft(y, j) {
    var B;
    const A = (y == null ? void 0 : y.logError) || F, se = j.id && rt(j.id);
    if (!se) {
      A(J(new Error('Missing component for "scroll_by" action'), { additional: { id: j.id } }));
      return;
    }
    if (typeof j.item_count != "number" && j.item_count !== void 0 || typeof j.offset != "number" && j.offset !== void 0 || j.overflow !== void 0 && j.overflow !== "clamp" && j.overflow !== "ring" || j.animated !== void 0 && typeof j.animated != "boolean") {
      A(J(new Error('Missing properties for "scroll_by" action'), { additional: { id: j.id } }));
      return;
    }
    (B = se.scrollCombined) == null || B.call(se, {
      step: j.item_count,
      offset: j.offset,
      overflow: j.overflow,
      animated: j.animated
    });
  }
  function It(y, j, { item: A, step: se, overflow: B, animated: Qe }) {
    var Kt, ht, Cr, Er, mn;
    if (!j)
      throw new Error(`Missing id for "${y}" action`);
    const Ve = Number(A);
    if (y === "set_current_item" && Number.isNaN(Ve))
      throw new Error(`Incorrect item for "${y}" action`);
    let qt = Number(se);
    if (!se && (y === "set_previous_item" || y === "set_next_item") && (qt = 1), !se && (y === "scroll_backward" || y === "scroll_forward" || y === "scroll_to_position") || Number.isNaN(qt))
      throw new Error(`Incorrect step value for "${y}" action`);
    if (B && B !== "clamp" && B !== "ring")
      throw new Error(`Incorrect overflow value for "${y}" action`);
    B = B || "clamp";
    const Vt = Qe === null || Qe !== "0" && Qe !== "false", Ge = rt(j);
    if (Ge)
      switch (y) {
        case "set_current_item":
          Ge.setCurrentItem(Ve, Vt);
          return;
        case "set_previous_item":
          Ge.setPreviousItem(qt, B, Vt);
          return;
        case "set_next_item":
          Ge.setNextItem(qt, B, Vt);
          return;
        case "scroll_to_start":
          (Kt = Ge.scrollToStart) == null || Kt.call(Ge, Vt);
          return;
        case "scroll_to_end":
          (ht = Ge.scrollToEnd) == null || ht.call(Ge, Vt);
          return;
        case "scroll_backward":
          (Cr = Ge.scrollCombined) == null || Cr.call(Ge, {
            offset: -qt,
            overflow: B,
            animated: Vt
          });
          return;
        case "scroll_forward":
          (Er = Ge.scrollCombined) == null || Er.call(Ge, {
            offset: qt,
            overflow: B,
            animated: Vt
          });
          return;
        case "scroll_to_position":
          (mn = Ge.scrollToPosition) == null || mn.call(Ge, qt, Vt);
          return;
      }
  }
  function cr(y, j, A) {
    const se = (A == null ? void 0 : A.logError) || F;
    if (y) {
      const B = rt(y);
      B ? j === "start" ? B.start() : j === "pause" ? B.pause() : se(J(new Error("Unknown video action"), { additional: { id: y, action: j } })) : se(J(new Error("Video component is not found"), { additional: { id: y, action: j } }));
    } else
      se(J(new Error("Missing id in video action"), { additional: { action: j } }));
  }
  function Pe(y, j, A) {
    var se, B, Qe;
    if (y.templates)
      for (const Ve in y.templates)
        n.hasOwnProperty(Ve) || (n[Ve] = y.templates[Ve]);
    if (Array.isArray((se = y.patch) == null ? void 0 : se.changes)) {
      if (y.patch.mode === "transactional") {
        const Ve = y.patch.changes.find((qt) => {
          const Vt = wr.get(qt.id);
          if (!Vt)
            return !0;
          const Ge = Array.isArray(qt.items) ? qt.items.length : 0;
          return !!(Vt.isSingleMode && Ge !== 1);
        });
        if (Ve)
          return j(J(new Error("Skipping transactional, child is not found or broken"), { additional: { url: A, id: Ve.id } })), Pt((B = y.patch) == null ? void 0 : B.on_failed_actions), !1;
      }
      return y.patch.changes.forEach((Ve) => {
        const qt = wr.get(Ve.id);
        qt && qt.replaceWith(Ve.id, Ve.items);
      }), Pt((Qe = y.patch) == null ? void 0 : Qe.on_applied_actions), !0;
    }
    return !1;
  }
  function vt(y, j, A) {
    const se = (A == null ? void 0 : A.logError) || F;
    if (y) {
      let B;
      typeof ce == "function" ? B = ce(y) : B = ce, fetch(y, B).then((Qe) => {
        if (!Qe.ok)
          throw new Error("Response is not ok");
        return Qe.json();
      }).then((Qe) => {
        if (!Qe) {
          se(J(new Error("Incorrect patch"), { additional: { url: y } })), Pt(j == null ? void 0 : j.on_fail_actions, { componentContext: A });
          return;
        }
        Pe(Qe, se, y) ? Pt(j == null ? void 0 : j.on_success_actions, { componentContext: A }) : Pt(j == null ? void 0 : j.on_fail_actions, { componentContext: A });
      }).catch((Qe) => {
        se(J(new Error("Failed to download the patch"), { additional: { url: y, originalError: Qe } })), Pt(j == null ? void 0 : j.on_fail_actions, { componentContext: A });
      });
    } else
      se(J(new Error("Missing url in download action"), { additional: { url: y } }));
  }
  function nr(y, j, A) {
    var qt;
    const se = (A == null ? void 0 : A.logError) || F;
    if (!y) {
      se(J(new Error("Missing id in show_tooltip action")));
      return;
    }
    const B = hr.get(y);
    if (!B) {
      se(J(new Error("Tooltip with the provided id is not found"), { additional: { id: y } }));
      return;
    }
    if (j !== "true" && j !== !0 && nt.has(y))
      return;
    nt.add(y);
    const Qe = {
      internalId: ++lt,
      ownerNode: B.onwerNode,
      desc: B.tooltip,
      timeoutId: 0,
      componentContext: A
    };
    t(3, kt = [...kt, Qe]);
    const Ve = (qt = B.tooltip.duration) != null ? qt : 5e3;
    Ve && (Qe.timeoutId = window.setTimeout(
      () => {
        Qe.timeoutId = 0, t(3, kt = kt.filter((Vt) => Vt.internalId !== Qe.internalId));
      },
      Ve
    ));
  }
  function $t(y, j) {
    const A = (j == null ? void 0 : j.logError) || F;
    if (!y) {
      A(J(new Error("Missing id in hide_tooltip action")));
      return;
    }
    t(3, kt = kt.filter((se) => {
      const B = se.desc.id !== y;
      return !B && se.timeoutId && (clearTimeout(se.timeoutId), se.timeoutId = null), B;
    }));
  }
  function Xt(y, j, A, se, B) {
    const Qe = (y == null ? void 0 : y.logError) || F;
    if (!E) {
      Qe(J(new Error("Store is not configured")));
      return;
    }
    let Ve = A;
    if (!j || !Ve || !se || !B) {
      Qe(J(new Error("Missing required params for set_stored_value")));
      return;
    }
    if (!C3.has(se)) {
      Qe(J(new Error("Incorrect stored type")));
      return;
    }
    if (se === "boolean" && (Ve = Ve === "true" || Ve === "1"), E.set)
      E.set(j, se, Ve, Number(B));
    else if (E.setValue) {
      if (!j3.has(se)) {
        Qe(J(new Error("Incorrect stored type")));
        return;
      }
      if (typeof Ve != "string" && typeof Ve != "number" && typeof Ve != "boolean") {
        Qe(J(new Error("Incorrect stored value")));
        return;
      }
      (se === "integer" || se === "number") && (Ve = Number(Ve)), E.setValue(j, se, Ve, Number(B));
    }
  }
  function pr(y) {
    kr(_t(F, y, void 0, !0), y);
  }
  async function kr(y, j, A) {
    var qt, Vt;
    const se = y.scope_id, B = (A == null ? void 0 : A.logError) || F;
    if (se) {
      const Ge = Ir.get(se);
      if (Ge && (Ge == null ? void 0 : Ge.size) > 1)
        B(J(new Error(`Ambiguous scope id. There are ${Ge.size} divs with id '${se}'`), { additional: { count: Ge.size, scopeId: se } }));
      else if ((Ge == null ? void 0 : Ge.size) === 1) {
        const Kt = Ge.values().next().value;
        Kt && (A = Kt);
      } else {
        B(J(new Error("The scope with the specified scope_id is missing"), { additional: { scopeId: se } }));
        return;
      }
    }
    const Qe = y.url ? String(y.url) : "", Ve = y.typed;
    if (Gs(y)) {
      if (Ve)
        switch (Ve.type) {
          case "set_variable": {
            const { variable_name: Ge, value: Kt } = Ve;
            if (Ge && Kt) {
              const ht = (A == null ? void 0 : A.getVariable(Ge)) || te.get(Ge);
              ht ? ht.getType() === Kt.type ? ht.setValue(Kt.value) : B(J(new Error("Trying to set value with invalid type"), { additional: { name: Ge, type: Kt.type } })) : B(J(new Error("Cannot find variable"), { additional: { name: Ge } }));
            } else
              B(J(new Error("Incorrect set_variable action"), { additional: { name: Ge } }));
            break;
          }
          case "array_insert_value":
            P2(A, te, B, Ve);
            break;
          case "array_remove_value":
            N2(A, te, B, Ve);
            break;
          case "array_set_value":
            z2(A, te, B, Ve);
            break;
          case "copy_to_clipboard":
            B2(B, Ve);
            break;
          case "focus_element": {
            const Ge = Ve.element_id && Sr.get(Ve.element_id);
            Ge ? Ge.focus() : B(J(new Error("Incorrect focus_element action"), {
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
            O2(A, te, B, Ve);
            break;
          }
          case "animator_start": {
            const Ge = Ve.animator_id && (A == null ? void 0 : A.getAnimator(Ve.animator_id));
            if (!Ge) {
              B(J(new Error("Missing animator"), {
                additional: { animator_id: Ve.animator_id }
              }));
              return;
            }
            const { duration: Kt, start_delay: ht, interpolator: Cr, direction: Er, repeat_count: mn, start_value: en, end_value: rn } = Ve, nn = A ? A.getJsonWithVars(Ge) : _t(F, Ge), Cn = {
              ...nn,
              end_actions: Ge.end_actions,
              cancel_actions: Ge.cancel_actions,
              duration: Kt !== void 0 ? Kt : nn.duration,
              start_delay: ht !== void 0 ? ht : nn.start_delay,
              interpolator: Cr !== void 0 ? Cr : nn.interpolator,
              direction: Er !== void 0 ? Er : nn.direction,
              repeat_count: mn !== void 0 ? mn : nn.repeat_count,
              start_value_typed: en,
              end_value_typed: rn
            }, Jn = Ge.variable_name && ((A == null ? void 0 : A.getVariable(Ge.variable_name)) || te.get(Ge.variable_name));
            if (!Jn)
              return;
            const Ln = st.get(Ge.id);
            Ln && Ln.stop();
            const xn = R2(
              Cn,
              Jn,
              () => {
                st.delete(Ge.id);
              },
              (Wt, b) => ((A == null ? void 0 : A.execAnyActions) || Pt)(Wt, b)
            );
            xn && st.set(Ge.id, xn);
            break;
          }
          case "animator_stop": {
            const Ge = st.get(Ve.animator_id);
            Ge && (Ge.stop(), st.delete(Ve.animator_id));
            break;
          }
          case "show_tooltip": {
            nr(Ve.id, Ve.multiple, A);
            break;
          }
          case "hide_tooltip": {
            $t(Ve.id, A);
            break;
          }
          case "timer": {
            it ? it.execTimerAction(Ve.id, Ve.action) : B(J(new Error("Incorrect timer action"), {
              additional: {
                id: Ve.id,
                action: Ve.action
              }
            }));
            break;
          }
          case "download": {
            vt(Ve.url, j.typed, A);
            break;
          }
          case "video": {
            cr(Ve.id, Ve.action, A);
            break;
          }
          case "set_stored_value": {
            Xt(A, Ve.name, (qt = Ve.value) == null ? void 0 : qt.value, (Vt = Ve.value) == null ? void 0 : Vt.type, Ve.lifetime);
            break;
          }
          case "set_state": {
            await er(Ve.state_id, A);
            break;
          }
          case "submit": {
            await ze(A, Ve, j.typed);
            break;
          }
          case "scroll_to": {
            yt(A, Ve);
            break;
          }
          case "scroll_by": {
            Ft(A, Ve);
            break;
          }
          case "update_structure": {
            Y2(A, te, B, Ve);
            break;
          }
          case "custom": {
            yr({
              ...j,
              // todo remove in major release
              url: ""
            });
            break;
          }
          default:
            B(J(new Error("Unknown type of action"), { additional: { type: Ve.type } }));
        }
      else if (Qe)
        try {
          const Ge = Qe.replace(/div-action:\/\//, ""), Kt = /([^?]+)\?(.+)/.exec(Ge);
          if (!Kt)
            return;
          const ht = new URLSearchParams(Kt[2]);
          switch (Kt[1]) {
            case "set_state":
              await er(ht.get("state_id"), A);
              break;
            case "set_current_item":
            case "set_previous_item":
            case "set_next_item":
            case "scroll_to_start":
            case "scroll_to_end":
            case "scroll_backward":
            case "scroll_forward":
            case "scroll_to_position":
              It(Kt[1], ht.get("id"), {
                item: ht.get("item"),
                step: ht.get("step"),
                overflow: ht.get("overflow"),
                animated: ht.get("animated")
              });
              break;
            case "set_variable":
              const Cr = ht.get("name"), Er = ht.get("value");
              if (Cr && Er !== null) {
                const rn = (A == null ? void 0 : A.getVariable(Cr)) || te.get(Cr);
                rn ? rn.set(Er) : B(J(new Error("Cannot find variable"), { additional: { name: Cr } }));
              } else
                B(J(new Error("Incorrect set_variable_action"), { additional: { url: Ge } }));
              break;
            case "timer":
              const mn = ht.get("action"), en = ht.get("id");
              it ? it.execTimerAction(en, mn) : B(J(new Error("Incorrect timer action"), {
                additional: { id: en, action: mn }
              }));
              break;
            case "video":
              cr(ht.get("id"), ht.get("action"), A);
              break;
            case "download":
              vt(ht.get("url"), j.download_callbacks, A);
              break;
            case "show_tooltip":
              nr(ht.get("id"), ht.get("multiple"), A);
              break;
            case "hide_tooltip":
              $t(ht.get("id"), A);
              break;
            case "set_stored_value": {
              Xt(A, ht.get("name"), ht.get("value"), ht.get("type"), ht.get("lifetime"));
              break;
            }
            default:
              B(J(new Error("Unknown type of action"), { additional: { url: Qe } }));
          }
        } catch (Ge) {
          B(J(Ge, { additional: { url: Qe } }));
        }
    }
  }
  async function Pt(y, j = {}) {
    var B;
    if (!y || !Array.isArray(y))
      return;
    const A = ((B = j.componentContext) == null ? void 0 : B.logError) || F, se = (Qe) => j.componentContext ? j.componentContext.getJsonWithVars(Qe, j.additionalVars, !0) : _t(A, Qe, j.additionalVars, !0);
    for (let Qe = 0; Qe < y.length; ++Qe) {
      let Ve = se(y[Qe]);
      const qt = Ve.is_enabled;
      if (qt === 0 || qt === !1)
        continue;
      const Vt = Ve.url;
      if (Ve.typed)
        await kr(Ve, y[Qe], j.componentContext);
      else if (Vt) {
        const Kt = Nl(Vt);
        if (Kt)
          if (zl(Kt, ke)) {
            if (j.processUrls)
              if (Ve.target === "_blank") {
                const ht = window.open("", "_blank");
                ht && (ht.opener = null, ht.location = Vt);
              } else
                location.href = Vt;
          } else Kt === "div-action" ? (await kr(Ve, y[Qe], j.componentContext), await Sn()) : Ve.log_id && (yr(Ve), await Sn());
      } else j.node && Array.isArray(Ve.menu_items) && Ve.menu_items.length && t(4, Nt = {
        items: Ve.menu_items,
        node: j.node,
        componentContext: j.componentContext
      });
    }
    y.forEach((Qe) => {
      Qe.log_id && Ct(j.logType || "click", Qe);
    });
  }
  function yr(y) {
    R == null || R(y);
  }
  function G(y, j) {
    const A = (y == null ? void 0 : y.logError) || F;
    if (!Array.isArray(j) || !j.length)
      return;
    const se = [];
    return j.forEach((B) => {
      let Qe = !1;
      if (typeof B.condition != "string") {
        A(J(new Error("variable_trigger has a condition that is not a string"), {
          additional: { condition: B.condition }
        }));
        return;
      }
      if (!Array.isArray(B.actions)) {
        A(J(new Error("variable_trigger has no actions"), {
          additional: { condition: B.condition }
        }));
        return;
      }
      const Ve = B.mode || "on_condition";
      if (Ve !== "on_variable" && Ve !== "on_condition") {
        A(J(new Error("variable_trigger has an unsupported mode"), { additional: { mode: Ve } }));
        return;
      }
      const Vt = ge(A, { condition: B.condition }, {
        additionalVars: y == null ? void 0 : y.variables,
        customFunctions: y == null ? void 0 : y.customFunctions,
        emptyVarsError: () => {
          A(J(new Error("variable_trigger must have variables in the condition"), {
            additional: { condition: B.condition }
          }));
        }
      }).subscribe(async (Ge) => {
        Ge.condition !== void 0 && (// if condition is truthy
        Ge.condition && // and trigger mode matches
        (Ve === "on_variable" || Ve === "on_condition" && Qe === !1) ? (Qe = !!Ge.condition, y ? await y.execAnyActions(B.actions, { logType: "trigger" }) : await Pt(B.actions, { logType: "trigger" })) : Qe = !!Ge.condition);
      });
      se.push(Vt);
    }), () => {
      se.forEach((B) => {
        B();
      });
    };
  }
  function dt(y) {
    return fe[y];
  }
  function Ut(y, j) {
    fe[y] = j;
  }
  const jt = /* @__PURE__ */ new Map(), wr = /* @__PURE__ */ new Map(), Sr = /* @__PURE__ */ new Map(), hr = /* @__PURE__ */ new Map(), Ir = /* @__PURE__ */ new Map();
  function Gr(y, j, A = "error") {
    if (jt.has(y)) {
      F(J(new Error("Duplicate instance id"), {
        level: A,
        additional: { id: y }
      }));
      return;
    }
    jt.set(y, j);
  }
  function tr(y) {
    jt.delete(y);
  }
  function rt(y) {
    if (!jt.has(y)) {
      F(J(new Error("Missing instance with id"), { additional: { id: y } }));
      return;
    }
    return jt.get(y);
  }
  function Et(y, j) {
    wr.set(y, j);
  }
  function Zt(y) {
    wr.delete(y);
  }
  function Yt(y, j) {
    Sr.set(y, j);
  }
  function ur(y) {
    Sr.delete(y);
  }
  function at(y, j) {
    const A = j.id;
    A && (hr.has(A) && F(J(new Error("Duplicate tooltip id"), { additional: { id: A } })), hr.set(A, { onwerNode: y, tooltip: j }));
  }
  function ne(y) {
    const j = y.id;
    j && (hr.delete(j), kt.some((A) => A.desc.id === j) && t(3, kt = kt.filter((A) => A.desc.id !== j)));
  }
  function mt(y) {
    const j = He.get(y) || Do(void 0);
    return He.has(y) || He.set(y, j), j;
  }
  function rr(y, j, A) {
    const se = Be.get(y);
    if (se)
      return se;
    const B = so(y, j, A);
    return Be.set(y, B), B;
  }
  function mr() {
    if (!ct)
      return;
    ct[_e].forEach((j) => {
      const A = te.get(j.name);
      A && A.setValue(j.color);
    });
  }
  function ir() {
    return ke;
  }
  function v(y, j) {
    const A = p.get(y);
    if (A)
      return new A(j || {});
  }
  function oe(y) {
    return {
      variables: Ro(te, y.variables),
      derviedExpression(j) {
        return y.getDerivedFromVars(j);
      },
      processExpressions(j) {
        return y.getJsonWithVars(j);
      },
      execAction: pr,
      logError: F,
      getComponentProperty(j) {
        return y.getJsonWithVars(y.json[j]);
      },
      direction: le
    };
  }
  function d(y, j) {
    const A = /* @__PURE__ */ new Map(), se = (j == null ? void 0 : j.logError) || F;
    return y.forEach((B) => {
      if (A) {
        try {
          E2(B);
        } catch (qt) {
          se(J(qt));
          return;
        }
        const Qe = B, Ve = A.get(Qe.name) || [];
        Ve.push(A2(Qe)), A.set(Qe.name, Ve);
      }
    }), A;
  }
  function z(y) {
    const j = {
      id: "",
      json: {},
      path: [],
      templateContext: {},
      logError(A) {
        A.additional = A.additional || {}, A.additional.path = j.path.join("/"), F(A);
      },
      execAnyActions(A, se = {}) {
        return Pt(A, {
          componentContext: j,
          processUrls: se.processUrls,
          node: se.node,
          logType: se.logType,
          additionalVars: se.additionalVars
        });
      },
      getDerivedFromVars(A, se, B = !1, Qe = 1 / 0) {
        return ge(j.logError, A, {
          additionalVars: Ro(j.variables, se),
          keepComplex: B,
          customFunctions: j.customFunctions,
          maxDepth: Qe
        });
      },
      getJsonWithVars(A, se, B = !1) {
        return _t(j.logError, A, Ro(j.variables, se), B, j.customFunctions);
      },
      evalExpression(A, se, B) {
        return wa(Ro(te, j.variables), j.customFunctions, A, se, B);
      },
      produceChildContext(A, se = {}) {
        const B = z(this);
        let Qe = A, Ve = this.templateContext;
        const { templateContext: qt, json: Vt } = St(Qe, Ve);
        if (B.json = Vt, B.templateContext = qt, B.origJson = A, B.id = se.id || Vt.id || "", B.id) {
          let ht = Ir.get(B.id);
          ht || (ht = /* @__PURE__ */ new Set(), Ir.set(B.id, ht)), ht.add(B);
        }
        se.key && (B.key = se.key), se.path !== void 0 && B.path.push(String(se.path)), A.type && !se.isRootState && B.path.push(A.type), se.isTooltipRoot && (B.isTooltipRoot = !0);
        let Ge;
        Array.isArray(Vt.variables) ? (Ge = Ro(this.variables, Ro(se.variables, /* @__PURE__ */ new Map())), Vt.variables.forEach((ht) => {
          const Cr = Dt(ht, B, Ge);
          Cr && Ge && Ge.set(Cr.getName(), Cr);
        })) : se.variables ? Ge = Ro(this.variables, se.variables) : this.variables && (Ge = this.variables), B.variables = Ge;
        let Kt;
        return Array.isArray(Vt.functions) && (Kt = d(Vt.functions, this)), B.customFunctions = S2(this.customFunctions, Kt), Array.isArray(Vt.animators) && (B.animators = Vt.animators.reduce(
          (ht, Cr) => (Cr.id && (ht[Cr.id] = Cr), ht),
          {}
        )), se.fake && (B.fakeElement = se.fake), se.isRootState && (B.isRootState = !0), B;
      },
      dup(A) {
        return { ...j, fakeElement: A };
      },
      getVariable(A, se) {
        var Qe;
        const B = ((Qe = j.variables) == null ? void 0 : Qe.get(A)) || te.get(A);
        if (B) {
          const Ve = B.getType();
          if (se && Ve !== se) {
            j.logError(J(new Error(`Variable should have type "${se}"`), { additional: { name: A, foundType: Ve } }));
            return;
          }
        }
        return B;
      },
      getAnimator(A) {
        var se, B;
        return ((se = j.animators) == null ? void 0 : se[A]) || ((B = j.parent) == null ? void 0 : B.getAnimator(A)) || void 0;
      },
      registerState(A, se) {
        const B = W2(j.parent);
        return B && (B.states = B.states || {}, B.states[A] = B.states[A] || [], B.states[A].push(se)), () => {
          var Qe;
          (Qe = B == null ? void 0 : B.states) != null && Qe[A] && (B.states[A] = B.states[A].filter((Ve) => Ve !== se), B.states[A].length || delete B.states[A]);
        };
      },
      registerPager(A) {
        const se = j.parent;
        return se ? (se.pagers = se.pagers || /* @__PURE__ */ new Map(), se.pagers.has(A) ? {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          update() {
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          destroy() {
          }
        } : (se.pagers.set(A, null), {
          update(B) {
            var Vt, Ge;
            se.pagers && se.pagers.set(A, B);
            const Qe = A ? (Vt = se.pagerListeners) == null ? void 0 : Vt.get(A) : void 0, Ve = (Ge = se.pagerListeners) == null ? void 0 : Ge.get(void 0);
            [...Qe || [], ...Ve || []].forEach((Kt) => {
              Kt(B);
            });
          },
          destroy() {
            se.pagers && se.pagers.delete(A);
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
      listenPager(A, se) {
        var Vt, Ge, Kt;
        let B = j.parent;
        for (; B && !(B.pagers && (A ? B.pagers.get(A) : (Vt = B.pagers) != null && Vt.size)); )
          B = B.parent;
        if (!B)
          return () => {
          };
        B.pagerListeners = j.pagerListeners || /* @__PURE__ */ new Map();
        const Qe = B.pagerListeners.get(A) || [];
        B.pagerListeners.has(A) || B.pagerListeners.set(A, Qe), Qe.push(se);
        const Ve = A || ((Ge = B.pagers) == null ? void 0 : Ge.keys().next().value) || void 0, qt = (Kt = B.pagers) == null ? void 0 : Kt.get(Ve);
        return qt && se(qt), () => {
          if (!B.pagerListeners)
            return;
          let ht = B.pagerListeners.get(Ve);
          ht && (ht = ht.filter((Cr) => Cr !== se) || [], ht.length ? B.pagerListeners.set(A, ht) : B.pagerListeners.delete(A));
        };
      },
      destroy() {
        const A = Ir.get(j.id);
        A && (A.delete(j), A.size || Ir.delete(j.id));
      }
    };
    return y ? (j.parent = y, j.path = y.path.slice(), y.fakeElement && (j.fakeElement = y.fakeElement)) : (j.json = { type: "root" }, j.isRootState = !0), j;
  }
  function Te(y) {
    Ae ? ut.push(y) : clearTimeout(y);
  }
  fi(Zr, {
    logStat: Ct,
    hasTemplate: ft,
    genId: $e,
    genClass: Y,
    execCustomAction: yr,
    processVariableTriggers: G,
    isRunning: dt,
    setRunning: Ut,
    pagerChildrenClipEnabled: D,
    pagerMouseDragEnabled: P,
    registerInstance: Gr,
    unregisterInstance: tr,
    registerParentOf: Et,
    unregisterParentOf: Zt,
    registerTooltip: at,
    unregisterTooltip: ne,
    onTooltipClose: Vn,
    tooltipRoot: T,
    registerFocusable: Yt,
    unregisterFocusable: ur,
    addSvgFilter: Qt,
    removeSvgFilter: Jt,
    registerId: xe,
    getComponentId: Oe,
    preparePrototypeVariables: Se,
    getCustomization: pe,
    getBuiltinProtocols: ir,
    getExtension: v,
    getExtensionContext: oe,
    registerTimeout: Te,
    typefaceProvider: ee,
    isDesktop: Ee,
    isPointerFocus: va,
    customComponents: X,
    direction: $,
    videoPlayerProvider: Z,
    awaitGlobalVariable: rr,
    componentDevtool: void 0,
    devtoolCreateHierarchy: "lazy"
  }), fi(To, {
    hasAction() {
      return !1;
    }
  }), fi(ca, {
    runVisibilityTransition(y, j, A, se, B) {
      return Promise.resolve();
    },
    registerChildWithTransitionIn(y, j, A, se) {
      return Promise.resolve();
    },
    registerChildWithTransitionOut(y, j, A, se) {
      return Promise.resolve();
    },
    registerChildWithTransitionChange(y, j, A, se) {
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
  }), fi(ua, { isEnabled: Uo(!0) });
  function We(y, j) {
    const A = te.get(y);
    return (A == null ? void 0 : A.getType()) === j;
  }
  function we(y, j) {
    const A = te.get(y);
    A ? A.setValue(j) : F(J(new Error("Cannot find variable"), { additional: { name: y } }));
  }
  function O(y, j, A) {
    const se = (j == null ? void 0 : j.logError) || F, B = y.name, Qe = y.value_type;
    if (typeof y.get != "string" || !y.get) {
      se(J(new Error("Incorrect property getter"), { additional: { name: B } }));
      return;
    }
    if (!B) {
      se(J(new Error("Missing property name")));
      return;
    }
    if (!Qe) {
      se(J(new Error("Missing property value_type")));
      return;
    }
    const Ve = j ? j.getDerivedFromVars(y.get, void 0, !0) : ge(F, y.get, { keepComplex: !0 });
    if (Tl(Ve) === void 0)
      return;
    const Vt = (Ge) => {
      const Kt = js(y.new_value_variable_name || "new_value", y.value_type, Ge), ht = new Map(A);
      ht.set(Kt.getName(), Kt), Array.isArray(y.set) && y.set.length ? j ? j.execAnyActions(y.set, { additionalVars: ht }) : Pt(y.set, { additionalVars: ht }) : se(J(new Error("Cannot set property. No setters provided."), { additional: { name: B } }));
    };
    return {
      getName() {
        return B;
      },
      subscribe(Ge) {
        return Ve.subscribe(Ge);
      },
      set(Ge) {
        const Kt = c1(Ge, Qe);
        Vt(Kt);
      },
      setValue: Vt,
      getValue() {
        return Tl(Ve);
      },
      getType() {
        return Qe;
      }
    };
  }
  function Dt(y, j, A) {
    if (y.type === "property")
      return O(y, j, A);
    if (!y.type || !y.name || !(y.type in Ul) || !("value" in y))
      return;
    const se = y.value;
    let B = j ? j.getJsonWithVars(se, A, !0) : _t(F, se, A, !0);
    if (!(se && typeof se == "string" && B === void 0)) {
      y.type === "integer" && typeof B == "number" && (B > Number.MAX_SAFE_INTEGER || B < Number.MIN_SAFE_INTEGER) && F(J(new Error("The value of the integer variable could lose accuracy"), {
        level: "warn",
        additional: { name: y.name, value: B }
      }));
      try {
        return so(y.name, y.type, B);
      } catch (Qe) {
        F(J(Qe, { additional: { name: y.name } }));
      }
    }
  }
  function zt(y) {
    const j = Dt(y);
    j && (Ze.set(y.name, j), te.set(y.name, j));
  }
  for (const [y, j] of Ye)
    te.has(y) || te.set(y, j);
  const Ue = (qr = l == null ? void 0 : l.card) == null ? void 0 : qr.variables;
  Array.isArray(Ue) && Ue.forEach((y) => {
    if (y && y.name) {
      if (Ze.has(y.name)) {
        F(J(new Error("Duplicate variable"), { additional: { name: y.name } }));
        return;
      }
      zt(y);
    }
  });
  const ct = l.palette;
  ct && ct[_e].forEach((j) => {
    if (Ze.has(j.name)) {
      F(J(new Error("Duplicate variable"), { additional: { name: j.name } }));
      return;
    }
    try {
      const A = so(j.name, "color", j.color);
      Ze.set(j.name, A), te.set(j.name, A);
    } catch (A) {
      F(J(A, { additional: { name: j.name } }));
    }
  }), Fe.subscribe((y) => {
    if (y && !te.has(y)) {
      const j = Ye.get(y);
      te.set(y, j);
      const A = He.get(y);
      if (A) {
        let B = 0;
        j.subscribe(() => {
          A.set(++B);
        });
      }
      const se = Be.get(y);
      se && se.getType() === j.getType() && j.subscribe((B) => {
        se.set(B);
      });
    }
  });
  const Gt = () => {
    var y;
    G(void 0, (y = l == null ? void 0 : l.card) == null ? void 0 : y.variable_triggers);
  }, Fr = (Yr = l == null ? void 0 : l.card) == null ? void 0 : Yr.timers;
  if (Fr && typeof document < "u") {
    const y = it = new M2({
      logError: F,
      applyVars: (j) => _t(F, j),
      hasVariableWithType: We,
      setVariableValue: we,
      execAnyActions: Pt
    });
    Fr.forEach((j) => y.createTimer(j));
  }
  const br = z();
  Array.isArray((hn = l.card) == null ? void 0 : hn.functions) && (br.customFunctions = d(l.card.functions));
  let zr;
  function Vn(y) {
    t(3, kt = kt.filter((j) => j.internalId !== y));
  }
  ro(() => {
    ws++, ws === 1 && (window.addEventListener("keydown", Kf), window.addEventListener("pointerdown", Xf)), Sn().then(() => {
      Ae && Gt();
    });
  }), ln(() => {
    Ae = !1, ws--, ws || (window.removeEventListener("keydown", Kf), window.removeEventListener("pointerdown", Xf));
    for (const [y, j] of st)
      j.stop();
    it && it.destroy(), kt.forEach((y) => {
      y.timeoutId && (clearTimeout(y.timeoutId), y.timeoutId = null);
    }), ut.forEach((y) => {
      clearTimeout(y);
    });
  });
  const Ce = () => t(4, Nt = void 0);
  return e.$$set = (y) => {
    "id" in y && t(13, a = y.id), "json" in y && t(11, l = y.json), "platform" in y && t(14, c = y.platform), "theme" in y && t(12, u = y.theme), "globalVariablesController" in y && t(15, f = y.globalVariablesController), "mix" in y && t(0, _ = y.mix), "customization" in y && t(16, h = y.customization), "builtinProtocols" in y && t(17, m = y.builtinProtocols), "extensions" in y && t(18, p = y.extensions), "onError" in y && t(19, w = y.onError), "onStat" in y && t(20, k = y.onStat), "onSubmit" in y && t(21, N = y.onSubmit), "onCustomAction" in y && t(22, R = y.onCustomAction), "onComponent" in y && t(23, L = y.onComponent), "typefaceProvider" in y && t(24, ee = y.typefaceProvider), "fetchInit" in y && t(25, ce = y.fetchInit), "tooltipRoot" in y && t(26, T = y.tooltipRoot), "customComponents" in y && t(27, X = y.customComponents), "direction" in y && t(28, le = y.direction), "store" in y && t(29, E = y.store), "pagerChildrenClipEnabled" in y && t(30, D = y.pagerChildrenClipEnabled), "pagerMouseDragEnabled" in y && t(31, P = y.pagerMouseDragEnabled), "weekStartDay" in y && t(32, U = y.weekStartDay), "videoPlayerProvider" in y && t(33, Z = y.videoPlayerProvider), "devtoolCreateHierarchy" in y && t(34, be = y.devtoolCreateHierarchy);
  }, e.$$.update = () => {
    var y, j;
    if (e.$$.dirty[0] & /*theme*/
    4096 | e.$$.dirty[1] & /*themeQuery*/
    2048 && (u === "light" || u === "dark" ? t(41, _e = u) : u === "system" ? typeof matchMedia < "u" ? (Ie || (t(42, Ie = matchMedia("(prefers-color-scheme: dark)")), Ie.addListener(tt)), t(41, _e = Ie.matches ? "dark" : "light")) : t(41, _e = "light") : F(J(new Error("Unsupported theme")))), e.$$.dirty[1] & /*currentTheme*/
    1024 && _e && mr(), e.$$.dirty[0] & /*json*/
    2048) {
      t(1, de = !1);
      const A = V2(l);
      A && (t(1, de = !0), F(A));
    }
    if (e.$$.dirty[0] & /*json*/
    2048 && (n = l.templates || {}), e.$$.dirty[0] & /*json*/
    2048 && (y = l == null ? void 0 : l.card) != null && y.variables && Array.isArray(l.card.variables) && l.card.variables !== Ue && l.card.variables.forEach((A) => {
      A && A.name && !Ze.has(A.name) && !te.has(A.name) && zt(A);
    }), e.$$.dirty[0] & /*json*/
    2048 && t(44, o = (j = l == null ? void 0 : l.card) == null ? void 0 : j.states), e.$$.dirty[0] & /*hasError, hasIdError*/
    6 | e.$$.dirty[1] & /*states, rootComponentContext*/
    12288 && o && !de && !x) {
      const A = {
        type: "state",
        id: "root",
        width: { type: "match_parent" },
        height: { type: "match_parent" },
        states: o.map((se) => ({
          state_id: se.state_id.toString(),
          div: se.div
        }))
      };
      t(6, zr = br.produceChildContext(A, { isRootState: !0 }));
    }
  }, [
    _,
    de,
    x,
    kt,
    Nt,
    At,
    zr,
    i,
    s,
    Ee,
    $,
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
    N,
    R,
    L,
    ee,
    ce,
    T,
    X,
    le,
    E,
    D,
    P,
    U,
    Z,
    be,
    Xe,
    qe,
    ve,
    De,
    ue,
    pr,
    _e,
    Ie,
    br,
    o,
    Ce
  ];
}
class S3 extends Br {
  constructor(r) {
    super(), Or(
      this,
      r,
      A3,
      v3,
      Vr,
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
const V3 = 8;
class T3 {
  constructor(r) {
    Ar(this, "widthVariableName");
    Ar(this, "heightVariableName");
    Ar(this, "resizeObserver");
    Ar(this, "context");
    Ar(this, "node");
    Ar(this, "sizeHistory", {});
    this.widthVariableName = r.width_variable_name, this.heightVariableName = r.height_variable_name;
  }
  setVariable(r, t) {
    if (!this.context)
      return !1;
    if (r) {
      const n = this.context.variables.get(r);
      if (n && n.getType() === "integer") {
        if (t = Math.round(t), this.sizeHistory[r] || (this.sizeHistory[r] = /* @__PURE__ */ new Set()), !this.sizeHistory[r].has(t))
          return n.setValue(t), this.sizeHistory[r].add(t), !0;
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
    const r = this.node.getBoundingClientRect(), t = this.setVariable(this.widthVariableName, r.width), n = this.setVariable(this.heightVariableName, r.height);
    return t || n;
  }
  mountView(r, t) {
    var n;
    this.node = r, this.context = t, !this.resizeObserver && typeof ResizeObserver < "u" && (this.resizeObserver = new ResizeObserver(async () => {
      let o = 0;
      for (; this.recalcProps(); ) {
        if (++o > V3) {
          const i = new Error("Recursive layout in size_provider");
          i.level = "warn", i.additional = {
            widthVariableName: this.widthVariableName,
            heightVariableName: this.heightVariableName
          }, t.logError(i);
          break;
        }
        await Sn();
      }
      this.sizeHistory = {};
    })), (n = this.resizeObserver) == null || n.observe(r), this.recalcProps();
  }
  unmountView(r, t) {
    var n;
    (n = this.resizeObserver) == null || n.disconnect(), this.resizeObserver = void 0;
  }
}
const Vi = 8;
class M3 {
  constructor(r) {
    Ar(this, "context");
    Ar(this, "params");
    Ar(this, "startCoords");
    this.params = r, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this);
  }
  processActions(r) {
    const t = this.params[r];
    Array.isArray(t) && t.length && this.context && this.context.processExpressions(t).forEach((o) => {
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
    const t = r.pageX - this.startCoords.pageX, n = r.pageY - this.startCoords.pageY;
    (Math.abs(t) > Vi || Math.abs(n) > Vi) && (Math.abs(t) > Math.abs(n) ? t > Vi ? this.processActions("swipe_right") : t < -Vi && this.processActions("swipe_left") : n > Vi ? this.processActions("swipe_down") : n < -Vi && this.processActions("swipe_up"), this.startCoords = void 0);
  }
  onPointerUp() {
    this.startCoords = void 0;
  }
  mountView(r, t) {
    this.context = t, r.addEventListener("pointerdown", this.onPointerDown), r.addEventListener("pointermove", this.onPointerMove), r.addEventListener("pointerup", this.onPointerUp), r.addEventListener("pointercancel", this.onPointerUp), r.style.pointerEvents = "auto";
  }
  updateView(r) {
    r.style.pointerEvents = "auto";
  }
  unmountView(r, t) {
    r.removeEventListener("pointerdown", this.onPointerDown), r.removeEventListener("pointermove", this.onPointerMove), r.removeEventListener("pointerup", this.onPointerUp), r.removeEventListener("pointercancel", this.onPointerUp), r.style.pointerEvents = "";
  }
}
function F3(e) {
  return e instanceof HTMLElement;
}
function N3(e) {
  return class {
    constructor(t) {
      Ar(this, "params");
      Ar(this, "animItem");
      Ar(this, "wrapper");
      Ar(this, "isPlayingUnsubscriber");
      Ar(this, "isPlaying", !0);
      Ar(this, "unsubscribe");
      this.params = t;
    }
    loadData(t) {
      return this.params.lottie_json ? Promise.resolve(this.params.lottie_json) : t ? fetch(t).then((n) => {
        if (!n.ok)
          throw new Error("Response is not ok");
        return n.json();
      }) : Promise.reject("Missing data");
    }
    getRatio(t) {
      var o;
      const n = (o = t.getComponentProperty("aspect")) == null ? void 0 : o.ratio;
      if (typeof n == "number" && n > 0)
        return n;
    }
    getScale(t) {
      const n = t.getComponentProperty("scale");
      if (n === "stretch")
        return {
          attribute: "none",
          noScale: !1,
          hAlign: "center",
          vAlign: "center"
        };
      let o = t.getComponentProperty("content_alignment_horizontal"), i = t.getComponentProperty("content_alignment_vertical"), s = "Mid", a = "Mid";
      return o === "start" ? o = t.direction === "ltr" ? "start" : "end" : o === "end" ? o = t.direction === "ltr" ? "end" : "start" : o === "left" ? o = "start" : o === "right" ? o = "end" : o = "center", i === "top" ? i = "start" : i === "bottom" ? i = "end" : i = "center", n === "no_scale" ? {
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
      const t = (n = this.wrapper) == null ? void 0 : n.firstElementChild;
      if (t instanceof SVGElement)
        return t;
    }
    setWrapperScale(t) {
      this.wrapper && (t.noScale ? (this.wrapper.style.display = "flex", this.wrapper.style.alignItems = t.vAlign, this.wrapper.style.justifyContent = t.hAlign) : (this.wrapper.style.display = "", this.wrapper.style.alignItems = "", this.wrapper.style.justifyContent = ""));
    }
    setSvgScale(t) {
      const n = this.getSvg();
      n && (t.noScale ? (n.style.flex = "0 0 auto", n.style.width = "", n.style.height = "") : (n.style.flex = "", n.style.width = "100%", n.style.height = "100%"));
    }
    mountView(t, n) {
      var f;
      if (!this.params.lottie_url && !this.params.lottie_json)
        return;
      const o = Array.from(t.children).filter(F3);
      o.forEach((_) => {
        _.style.display = "none";
      }), t.setAttribute("data-lottie", "true");
      const i = this.wrapper = document.createElement("div");
      this.wrapper.style.width = "100%", this.wrapper.style.height = "100%";
      const s = this.getRatio(n), a = this.getScale(n);
      s && (this.wrapper.style.aspectRatio = String(s)), this.setWrapperScale(a), t.appendChild(this.wrapper);
      const l = Number((f = n.processExpressions(this.params.repeat_count)) != null ? f : -1), c = n.processExpressions(this.params.repeat_mode), u = () => {
        var h, m;
        (h = this.animItem) == null || h.destroy(), o.forEach((p) => {
          p.style.display = "";
        }), t.removeAttribute("data-lottie"), this.wrapper && ((m = this.wrapper.parentNode) == null || m.removeChild(this.wrapper), this.wrapper = void 0);
        const _ = new Error("Failed to load lottie animation");
        _.level = "error", _.additional = {
          url: this.params.lottie_url
        }, n.logError(_);
      };
      this.unsubscribe = n.derviedExpression(this.params.lottie_url).subscribe((_) => {
        this.loadData(_).then((h) => {
          var w;
          (w = this.animItem) == null || w.destroy();
          const m = l !== 0, p = this.animItem = e({
            container: i,
            animationData: h,
            renderer: "svg",
            loop: m,
            rendererSettings: {
              preserveAspectRatio: a.attribute
            }
          });
          if (this.setSvgScale(a), this.animItem.addEventListener("data_failed", u), m && (c === "reverse" || l !== -1)) {
            let k = 1, N = 0;
            p.addEventListener("loopComplete", () => {
              ++N, l !== -1 && N === l + 1 ? (p.stop(), p.goToAndStop(p.totalFrames, !0)) : (c === "reverse" && (k *= -1, p.setDirection(k)), p.goToAndPlay(k === 1 ? 0 : p.totalFrames, !0));
            });
          }
        }).catch(u);
      }), this.isPlayingUnsubscriber = n.derviedExpression(this.params.is_playing).subscribe((_) => {
        this.isPlaying = _ !== !1, this.animItem && this.animItem[this.isPlaying ? "play" : "pause"]();
      });
    }
    updateView(t, n) {
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
    unmountView(t, n) {
      var o, i, s, a;
      (o = this.animItem) == null || o.destroy(), this.wrapper && ((i = this.wrapper.parentNode) == null || i.removeChild(this.wrapper), this.wrapper = void 0), t.removeAttribute("data-lottie"), (s = this.unsubscribe) == null || s.call(this), (a = this.isPlayingUnsubscriber) == null || a.call(this);
    }
  };
}
function O3(e, r = {}) {
  return class {
    constructor() {
      Ar(this, "prevDOM", null);
    }
    recalc(n, o) {
      const i = n.firstElementChild, s = i == null ? void 0 : i.firstElementChild;
      if (!s)
        return;
      this.prevDOM = i.cloneNode(!0);
      const a = o.getComponentProperty("text") || "", l = e(a), c = document.createElement("div");
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
function B3(e) {
  const { target: r, hydrate: t, ...n } = e, o = new S3({
    target: r,
    props: n,
    hydrate: t
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
    }
  };
}
export {
  M3 as Gesture,
  T3 as SizeProvider,
  D3 as createGlobalVariablesController,
  so as createVariable,
  N3 as lottieExtensionBuilder,
  O3 as markdownExtensionBuilder,
  B3 as render
};
//# sourceMappingURL=client.mjs.map

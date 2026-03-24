var y_ = Object.defineProperty;
var w_ = (t, r, e) => r in t ? y_(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var Ar = (t, r, e) => w_(t, typeof r != "symbol" ? r + "" : r, e);
/*!
    DivKit v32.39.0
    https://github.com/divkit/divkit
    @licence Apache-2.0
*/
function j() {
}
const el = (t) => t;
function jo(t, r) {
  for (const e in r) t[e] = r[e];
  return (
    /** @type {T & S} */
    t
  );
}
function rd(t) {
  return t();
}
function Fa() {
  return /* @__PURE__ */ Object.create(null);
}
function Gr(t) {
  t.forEach(rd);
}
function zr(t) {
  return typeof t == "function";
}
function k_(t, r) {
  return t != t ? r == r : t !== r || t && typeof t == "object" || typeof t == "function";
}
let us;
function Kn(t, r) {
  return t === r ? !0 : (us || (us = document.createElement("a")), us.href = r, t === us.href);
}
function Er(t, r) {
  return t != t ? r == r : t !== r;
}
function v_(t) {
  return Object.keys(t).length === 0;
}
function E(t, ...r) {
  if (t == null) {
    for (const n of r)
      n(void 0);
    return j;
  }
  const e = t.subscribe(...r);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function Pl(t) {
  let r;
  return E(t, (e) => r = e)(), r;
}
function bn(t, r, e) {
  t.$$.on_destroy.push(E(r, e));
}
function tl(t, r, e, n) {
  if (t) {
    const o = nd(t, r, e, n);
    return t[0](o);
  }
}
function nd(t, r, e, n) {
  return t[1] && n ? jo(e.ctx.slice(), t[1](n(r))) : e.ctx;
}
function rl(t, r, e, n) {
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
function nl(t, r, e, n, o, i) {
  if (o) {
    const s = nd(r, e, n, i);
    t.p(s, o);
  }
}
function ol(t) {
  if (t.ctx.length > 32) {
    const r = [], e = t.ctx.length / 32;
    for (let n = 0; n < e; n++)
      r[n] = -1;
    return r;
  }
  return -1;
}
function wl(t, r, e) {
  return t.set(e), r;
}
function il(t) {
  return t && zr(t.destroy) ? t.destroy : j;
}
function Ia(t) {
  const r = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return r ? [parseFloat(r[1]), r[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const od = typeof window < "u";
let sa = od ? () => window.performance.now() : () => Date.now(), la = od ? (t) => requestAnimationFrame(t) : j;
const Ti = /* @__PURE__ */ new Set();
function id(t) {
  Ti.forEach((r) => {
    r.c(t) || (Ti.delete(r), r.f());
  }), Ti.size !== 0 && la(id);
}
function aa(t) {
  let r;
  return Ti.size === 0 && la(id), {
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
function wt(t, r) {
  t.appendChild(r);
}
function sd(t) {
  if (!t) return document;
  const r = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return r && /** @type {ShadowRoot} */
  r.host ? (
    /** @type {ShadowRoot} */
    r
  ) : t.ownerDocument;
}
function j_(t) {
  const r = Pe("style");
  return r.textContent = "/* empty */", C_(sd(t), r), r.sheet;
}
function C_(t, r) {
  return wt(
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
function cn(t, r) {
  for (let e = 0; e < t.length; e += 1)
    t[e] && t[e].d(r);
}
function Pe(t) {
  return document.createElement(t);
}
function tn(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Gn(t) {
  return document.createTextNode(t);
}
function mr() {
  return Gn(" ");
}
function xt() {
  return Gn("");
}
function Qe(t, r, e, n) {
  return t.addEventListener(r, e, n), () => t.removeEventListener(r, e, n);
}
function g(t, r, e) {
  e == null ? t.removeAttribute(r) : t.getAttribute(r) !== e && t.setAttribute(r, e);
}
const A_ = ["width", "height"];
function qo(t, r) {
  const e = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in r)
    r[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = r[n] : n === "__value" ? t.value = t[n] = r[n] : e[n] && e[n].set && A_.indexOf(n) === -1 ? t[n] = r[n] : g(t, n, r[n]);
}
function E_(t, r) {
  Object.keys(r).forEach((e) => {
    S_(t, e, r[e]);
  });
}
function S_(t, r, e) {
  const n = r.toLowerCase();
  n in t ? t[n] = typeof t[n] == "boolean" && e === "" ? !0 : e : r in t ? t[r] = typeof t[r] == "boolean" && e === "" ? !0 : e : g(t, r, e);
}
function ei(t) {
  return /-/.test(t) ? E_ : qo;
}
function V_(t) {
  return Array.from(t.childNodes);
}
function eo(t, r) {
  r = "" + r, t.data !== r && (t.data = /** @type {string} */
  r);
}
function Da(t, r) {
  t.value = r == null ? "" : r;
}
function F(t, r, e, n) {
  e == null ? t.style.removeProperty(r) : t.style.setProperty(r, e, "");
}
function Ta(t, r, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const o = t.options[n];
    if (o.__value === r) {
      o.selected = !0;
      return;
    }
  }
  (!e || r !== void 0) && (t.selectedIndex = -1);
}
function F_(t) {
  const r = t.querySelector(":checked");
  return r && r.__value;
}
function ld(t, r, { bubbles: e = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: r, bubbles: e, cancelable: n });
}
function Ma(t, r) {
  return new t(r);
}
const Rs = /* @__PURE__ */ new Map();
let Hs = 0;
function I_(t) {
  let r = 5381, e = t.length;
  for (; e--; ) r = (r << 5) - r ^ t.charCodeAt(e);
  return r >>> 0;
}
function D_(t, r) {
  const e = { stylesheet: j_(r), rules: {} };
  return Rs.set(t, e), e;
}
function Ws(t, r, e, n, o, i, s, a = 0) {
  const l = 16.666 / n;
  let c = `{
`;
  for (let w = 0; w <= 1; w += l) {
    const k = r + (e - r) * i(w);
    c += w * 100 + `%{${s(k, 1 - k)}}
`;
  }
  const u = c + `100% {${s(e, 1 - e)}}
}`, f = `__svelte_${I_(u)}_${a}`, _ = sd(t), { stylesheet: h, rules: m } = Rs.get(_) || D_(_, t);
  m[f] || (m[f] = !0, h.insertRule(`@keyframes ${f} ${u}`, h.cssRules.length));
  const p = t.style.animation || "";
  return t.style.animation = `${p ? `${p}, ` : ""}${f} ${n}ms linear ${o}ms 1 both`, Hs += 1, f;
}
function Us(t, r) {
  const e = (t.style.animation || "").split(", "), n = e.filter(
    r ? (i) => i.indexOf(r) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), o = e.length - n.length;
  o && (t.style.animation = n.join(", "), Hs -= o, Hs || T_());
}
function T_() {
  la(() => {
    Hs || (Rs.forEach((t) => {
      const { ownerNode: r } = t.stylesheet;
      r && G(r);
    }), Rs.clear());
  });
}
let ns;
function ts(t) {
  ns = t;
}
function Hi() {
  if (!ns) throw new Error("Function called outside component initialization");
  return ns;
}
function Xn(t) {
  Hi().$$.on_mount.push(t);
}
function sl(t) {
  Hi().$$.after_update.push(t);
}
function ln(t) {
  Hi().$$.on_destroy.push(t);
}
function M_() {
  const t = Hi();
  return (r, e, { cancelable: n = !1 } = {}) => {
    const o = t.$$.callbacks[r];
    if (o) {
      const i = ld(
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
  return Hi().$$.context.set(t, r), r;
}
function Dr(t) {
  return Hi().$$.context.get(t);
}
function Ln(t, r) {
  const e = t.$$.callbacks[r.type];
  e && e.slice().forEach((n) => n.call(this, r));
}
const Fi = [], Fr = [];
let Mi = [];
const Pa = [], ad = /* @__PURE__ */ Promise.resolve();
let Nl = !1;
function cd() {
  Nl || (Nl = !0, ad.then(ud));
}
function Vn() {
  return cd(), ad;
}
function fo(t) {
  Mi.push(t);
}
const kl = /* @__PURE__ */ new Set();
let Ei = 0;
function ud() {
  if (Ei !== 0)
    return;
  const t = ns;
  do {
    try {
      for (; Ei < Fi.length; ) {
        const r = Fi[Ei];
        Ei++, ts(r), P_(r.$$);
      }
    } catch (r) {
      throw Fi.length = 0, Ei = 0, r;
    }
    for (ts(null), Fi.length = 0, Ei = 0; Fr.length; ) Fr.pop()();
    for (let r = 0; r < Mi.length; r += 1) {
      const e = Mi[r];
      kl.has(e) || (kl.add(e), e());
    }
    Mi.length = 0;
  } while (Fi.length);
  for (; Pa.length; )
    Pa.pop()();
  Nl = !1, kl.clear(), ts(t);
}
function P_(t) {
  if (t.fragment !== null) {
    t.update(), Gr(t.before_update);
    const r = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, r), t.after_update.forEach(fo);
  }
}
function N_(t) {
  const r = [], e = [];
  Mi.forEach((n) => t.indexOf(n) === -1 ? r.push(n) : e.push(n)), e.forEach((n) => n()), Mi = r;
}
let xi;
function ca() {
  return xi || (xi = Promise.resolve(), xi.then(() => {
    xi = null;
  })), xi;
}
function gi(t, r, e) {
  t.dispatchEvent(ld(`${r ? "intro" : "outro"}${e}`));
}
const vs = /* @__PURE__ */ new Set();
let Io;
function fr() {
  Io = {
    r: 0,
    c: [],
    p: Io
    // parent group
  };
}
function dr() {
  Io.r || Gr(Io.c), Io = Io.p;
}
function H(t, r) {
  t && t.i && (vs.delete(t), t.i(r));
}
function te(t, r, e, n) {
  if (t && t.o) {
    if (vs.has(t)) return;
    vs.add(t), Io.c.push(() => {
      vs.delete(t), n && (e && t.d(1), n());
    }), t.o(r);
  } else n && n();
}
const ua = { duration: 0 };
function ll(t, r, e) {
  const n = { direction: "in" };
  let o = r(t, e, n), i = !1, s, a, l = 0;
  function c() {
    s && Us(t, s);
  }
  function u() {
    const {
      delay: _ = 0,
      duration: h = 300,
      easing: m = el,
      tick: p = j,
      css: w
    } = o || ua;
    w && (s = Ws(t, 0, 1, h, _, m, w, l++)), p(0, 1);
    const k = sa() + _, N = k + h;
    a && a.abort(), i = !0, fo(() => gi(t, !0, "start")), a = aa((R) => {
      if (i) {
        if (R >= N)
          return p(1, 0), gi(t, !0, "end"), c(), i = !1;
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
      f || (f = !0, Us(t), zr(o) ? (o = o(n), ca().then(u)) : u());
    },
    invalidate() {
      f = !1;
    },
    end() {
      i && (c(), i = !1);
    }
  };
}
function fd(t, r, e) {
  const n = { direction: "out" };
  let o = r(t, e, n), i = !0, s;
  const a = Io;
  a.r += 1;
  let l;
  function c() {
    const {
      delay: u = 0,
      duration: f = 300,
      easing: _ = el,
      tick: h = j,
      css: m
    } = o || ua;
    m && (s = Ws(t, 1, 0, f, u, _, m));
    const p = sa() + u, w = p + f;
    fo(() => gi(t, !1, "start")), "inert" in t && (l = /** @type {HTMLElement} */
    t.inert, t.inert = !0), aa((k) => {
      if (i) {
        if (k >= w)
          return h(0, 1), gi(t, !1, "end"), --a.r || Gr(a.c), !1;
        if (k >= p) {
          const N = _((k - p) / f);
          h(1 - N, N);
        }
      }
      return i;
    });
  }
  return zr(o) ? ca().then(() => {
    o = o(n), c();
  }) : c(), {
    end(u) {
      u && "inert" in t && (t.inert = l), u && o.tick && o.tick(1, 0), i && (s && Us(t, s), i = !1);
    }
  };
}
function Na(t, r, e, n) {
  let i = r(t, e, { direction: "both" }), s = n ? 0 : 1, a = null, l = null, c = null, u;
  function f() {
    c && Us(t, c);
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
      easing: k = el,
      tick: N = j,
      css: R
    } = i || ua, L = {
      start: sa() + p,
      b: m
    };
    m || (L.group = Io, Io.r += 1), "inert" in t && (m ? u !== void 0 && (t.inert = u) : (u = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), a || l ? l = L : (R && (f(), c = Ws(t, s, m, w, p, k, R)), m && N(0, 1), a = _(L, w), fo(() => gi(t, m, "start")), aa((re) => {
      if (l && re > l.start && (a = _(l, w), l = null, gi(t, a.b, "start"), R && (f(), c = Ws(
        t,
        s,
        a.b,
        a.duration,
        0,
        k,
        i.css
      ))), a) {
        if (re >= a.end)
          N(s = a.b, 1 - s), gi(t, a.b, "end"), l || (a.b ? f() : --a.group.r || Gr(a.group.c)), a = null;
        else if (re >= a.start) {
          const ue = re - a.start;
          s = a.a + a.d * k(ue / a.duration), N(s, 1 - s);
        }
      }
      return !!(a || l);
    }));
  }
  return {
    run(m) {
      zr(i) ? ca().then(() => {
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
function dd(t, r) {
  te(t, 1, 1, () => {
    r.delete(t.key);
  });
}
function _d(t, r, e, n, o, i, s, a, l, c, u, f) {
  let _ = t.length, h = i.length, m = _;
  const p = {};
  for (; m--; ) p[t[m].key] = m;
  const w = [], k = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), R = [];
  for (m = h; m--; ) {
    const T = f(o, i, m), Y = e(T);
    let le = s.get(Y);
    le ? R.push(() => le.p(T, r)) : (le = c(Y, T), le.c()), k.set(Y, w[m] = le), Y in p && N.set(Y, Math.abs(m - p[Y]));
  }
  const L = /* @__PURE__ */ new Set(), re = /* @__PURE__ */ new Set();
  function ue(T) {
    H(T, 1), T.m(a, u), s.set(T.key, T), u = T.first, h--;
  }
  for (; _ && h; ) {
    const T = w[h - 1], Y = t[_ - 1], le = T.key, A = Y.key;
    T === Y ? (u = T.first, _--, h--) : k.has(A) ? !s.has(le) || L.has(le) ? ue(T) : re.has(A) ? _-- : N.get(le) > N.get(A) ? (re.add(le), ue(T)) : (L.add(A), _--) : (l(Y, s), _--);
  }
  for (; _--; ) {
    const T = t[_];
    k.has(T.key) || l(T, s);
  }
  for (; h; ) ue(w[h - 1]);
  return Gr(R), w;
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
function pd(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Rt(t) {
  t && t.c();
}
function Nt(t, r, e) {
  const { fragment: n, after_update: o } = t.$$;
  n && n.m(r, e), fo(() => {
    const i = t.$$.on_mount.map(rd).filter(zr);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : Gr(i), t.$$.on_mount = [];
  }), o.forEach(fo);
}
function zt(t, r) {
  const e = t.$$;
  e.fragment !== null && (N_(e.after_update), Gr(e.on_destroy), e.fragment && e.fragment.d(r), e.on_destroy = e.fragment = null, e.ctx = []);
}
function z_(t, r) {
  t.$$.dirty[0] === -1 && (Fi.push(t), cd(), t.$$.dirty.fill(0)), t.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function Lr(t, r, e, n, o, i, s = null, a = [-1]) {
  const l = ns;
  ts(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: j,
    not_equal: o,
    bound: Fa(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(r.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: Fa(),
    dirty: a,
    skip_bound: !1,
    root: r.target || l.$$.root
  };
  s && s(c.root);
  let u = !1;
  if (c.ctx = e ? e(t, r.props || {}, (f, _, ...h) => {
    const m = h.length ? h[0] : _;
    return c.ctx && o(c.ctx[f], c.ctx[f] = m) && (!c.skip_bound && c.bound[f] && c.bound[f](m), u && z_(t, f)), _;
  }) : [], c.update(), u = !0, Gr(c.before_update), c.fragment = n ? n(c.ctx) : !1, r.target) {
    if (r.hydrate) {
      const f = V_(r.target);
      c.fragment && c.fragment.l(f), f.forEach(G);
    } else
      c.fragment && c.fragment.c();
    r.intro && H(t.$$.fragment), Nt(t, r.target, r.anchor), ud();
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
    this.$$set && !v_(r) && (this.$$.skip_bound = !0, this.$$set(r), this.$$.skip_bound = !1);
  }
}
const L_ = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(L_);
const Si = [];
function O_(t, r) {
  return {
    subscribe: Do(t, r).subscribe
  };
}
function Do(t, r = j) {
  let e;
  const n = /* @__PURE__ */ new Set();
  function o(a) {
    if (k_(t, a) && (t = a, e)) {
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
function Wi(t, r, e) {
  const n = !Array.isArray(t), o = n ? [t] : t;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = r.length < 2;
  return O_(e, (s, a) => {
    let l = !1;
    const c = [];
    let u = 0, f = j;
    const _ = () => {
      if (u)
        return;
      f();
      const m = r(n ? c[0] : c, s, a);
      i ? s(m) : f = zr(m) ? m : j;
    }, h = o.map(
      (m, p) => E(
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
      Gr(h), f(), l = !1;
    };
  });
}
const B_ = "appkit-root_platform_desktop", R_ = "appkit-root__clickable", H_ = "appkit-root", W_ = "appkit-root__selectable", U_ = "appkit-root__unselectable", Cr = {
  root_platform_desktop: B_,
  root__clickable: R_,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  "root__any-actions": "appkit-root__any-actions",
  root: H_,
  root__selectable: W_,
  root__unselectable: U_,
  "root__only-desktop": "appkit-root__only-desktop",
  "root_restrict-scroll": "appkit-root_restrict-scroll",
  "root_disabled-context-menu": "appkit-root_disabled-context-menu"
}, Kr = Symbol("root");
function K(t, r = {}) {
  const e = t;
  return e.level = r.level || "error", r.additional && (e.additional = r.additional), e;
}
const G_ = "appkit-outer", J_ = "appkit-outer_width_content", q_ = "appkit-outer_height_content", K_ = "appkit-root__clickable", Y_ = "appkit-outer__border", X_ = "appkit-outer_visibility_invisible", Z_ = "appkit-outer_visibility_gone", Gs = {
  outer: G_,
  outer_width_content: J_,
  outer_height_content: q_,
  root__clickable: K_,
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
  outer__border: Y_,
  outer_visibility_invisible: X_,
  outer_visibility_gone: Z_,
  "outer_has-action-animation": "appkit-outer_has-action-animation",
  "outer_has-custom-focus": "appkit-outer_has-custom-focus"
};
function ur(t) {
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
function _e(t) {
  if (typeof t != "number" && typeof t != "string" || !t)
    return "0";
  const r = Number(t);
  return Number.isNaN(r) ? "0" : Math.ceil(r * 1e3) / 1e4 + "em";
}
function an(t) {
  let r = _e(t);
  return r === "0" && (r += "em"), r;
}
function gd(t, r) {
  for (; t.length < r; )
    t = "0" + t;
  return t;
}
function gr(t, r = 1, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = _o(t);
  return n ? (n.a *= r, fa(n)) : e;
}
function Q_(t, r, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = _o(t);
  return n ? (n.a = r, fa(n)) : e;
}
function fa(t) {
  return t.a === 255 ? `#${[t.r, t.g, t.b].map((r) => gd(Math.round(r).toString(16), 2)).join("")}` : `rgba(${t.r},${t.g},${t.b},${(t.a / 255).toFixed(2)})`;
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
function zl(t) {
  let r = String(t);
  return r.indexOf("&") > -1 && (r = r.replace(/&/g, "&amp;")), r.indexOf("<") > -1 && (r = r.replace(/</g, "&lt;")), r.indexOf(">") > -1 && (r = r.replace(/>/g, "&gt;")), r.indexOf('"') > -1 && (r = r.replace(/"/g, "&quot;")), r;
}
const zo = Boolean;
function al(t, r) {
  if (t.length === 1 && t[0].type === "solid")
    return $_({
      bg: t[0]
    });
  const e = t.map((n) => {
    if (n.type === "solid")
      return x_({
        bg: n
      });
    if (n.type === "gradient")
      return ep({
        bg: n
      });
    if (n.type === "image")
      return np({
        bg: n,
        direction: r
      });
    if (n.type === "radial_gradient")
      return rp({
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
function x_(t) {
  const r = gr(t.bg.color || "transparent");
  return {
    size: void 0,
    pos: void 0,
    image: `linear-gradient(to bottom,${r},${r})`
  };
}
function $_(t) {
  return {
    color: gr(t.bg.color || "transparent"),
    size: "auto",
    position: "50% 50%"
  };
}
function hd(t) {
  return t.every((n) => n.color && typeof n.position == "number" && n.position >= 0 && n.position <= 1) ? t.sort((n, o) => Math.abs(n.position - o.position) < 1e-6 ? 0 : n.position - o.position).map((n) => `${gr(n.color)} ${(n.position * 100).toFixed(2)}%`).join(",") : void 0;
}
function ep(t) {
  var n, o, i, s;
  if (!Array.isArray((n = t.bg) == null ? void 0 : n.colors) && !Array.isArray((o = t.bg) == null ? void 0 : o.color_map))
    return;
  const r = (i = t.bg.colors) == null ? void 0 : i.filter(zo);
  if (!(r != null && r.length) && !((s = t.bg) != null && s.color_map))
    return;
  let e;
  if (t.bg.color_map) {
    const a = hd(t.bg.color_map);
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
const tp = {
  nearest_corner: "closest-corner",
  farthest_corner: "farthest-corner",
  nearest_side: "closest-side",
  farthest_side: "farthest-side"
};
function za(t) {
  if (t && typeof t == "object" && "type" in t && t.value !== void 0) {
    if (t.type === "fixed")
      return an(t.value);
    if (t.type === "relative")
      return `${Number(t.value) * 100}%`;
  }
  return "50%";
}
function rp(t) {
  var a, l, c, u;
  if (!Array.isArray((a = t.bg) == null ? void 0 : a.colors) && !Array.isArray((l = t.bg) == null ? void 0 : l.color_map))
    return;
  const r = (c = t.bg.colors) == null ? void 0 : c.filter(zo);
  if (!(r != null && r.length) && !((u = t.bg) != null && u.color_map))
    return;
  let e;
  if (t.bg.color_map ? e = hd(t.bg.color_map) : r && (e = r.map((f) => gr(f)).join(",")), !e)
    return;
  const n = t.bg.radius;
  let o;
  n && typeof n == "object" && "type" in n && n.value !== void 0 && (n.type === "fixed" ? o = an(n.value) : n.type === "relative" && (o = tp[n.value]));
  const i = za(t.bg.center_x), s = za(t.bg.center_y);
  return {
    size: void 0,
    pos: void 0,
    image: `radial-gradient(circle ${o || "farthest-corner"} at ${i} ${s},` + e + ")"
  };
}
function np(t) {
  var e;
  const r = (e = t.bg) == null ? void 0 : e.image_url;
  if (r)
    return {
      size: md(t.bg.scale),
      pos: bd(t.bg, t.direction),
      image: 'url("' + zl(r) + '")'
    };
}
function md(t) {
  return t === "fit" ? "contain" : t === "stretch" ? "fill" : t === "no_scale" ? "none" : "cover";
}
function op(t) {
  return t === "none" ? "auto" : t === "fill" ? "100% 100%" : t;
}
function bd(t, r) {
  let e, n;
  return t.content_alignment_horizontal === "left" || r === "ltr" && t.content_alignment_horizontal === "start" || r === "rtl" && t.content_alignment_horizontal === "end" ? e = "0%" : t.content_alignment_horizontal === "right" || r === "ltr" && t.content_alignment_horizontal === "end" || r === "rtl" && t.content_alignment_horizontal === "start" ? e = "100%" : e = "50%", t.content_alignment_vertical === "top" ? n = "0%" : t.content_alignment_vertical === "bottom" ? n = "100%" : n = "50%", e + " " + n;
}
function rn(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e < 0 ? r : e;
}
function La(t, r, e) {
  return typeof r == "number" && (t && r > 0 && r <= 100 || !t && r >= 0 && r < 100) ? r : e;
}
function ip(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1 && t.index !== void 0;
}
function sp(t, {
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
  }, c = Wi(s, (h) => h);
  let u;
  const f = (h) => {
    const m = h.type === "visibility";
    o.execAnyActions([h.action], {
      logType: m ? "visible" : "disappear",
      node: t,
      processUrls: !1
    });
  }, _ = c.subscribe((h) => {
    u = h.filter(ip);
    const m = {};
    u.forEach((k) => {
      m[k.index] = k;
    }), l();
    const p = [...new Set(u.map((k) => {
      const N = i[k.index].type === "visibility";
      return La(
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
          const L = i[R.index], re = L.type === "visibility", ue = La(
            re,
            R.visibility_percentage,
            re ? 50 : 0
          );
          let T;
          ue === 0 ? T = N.intersectionRatio >= 1e-12 : T = N.intersectionRatio >= ue / 100, (re ? !L.visible && T : L.visible && !T) ? L.finished || (L.timer = setTimeout(() => {
            ++L.count;
            const A = R.log_limit === 0 ? 1 / 0 : R.log_limit || 1;
            L.count >= A && (L.finished = !0), f(L);
          }, rn(R.visibility_duration, 800))) : (re ? !T : T) && L.timer && clearTimeout(L.timer), L.visible = T;
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
function Oa(t, r) {
  r && t.push(r);
}
function mt(t, r, e) {
  const n = [];
  Oa(n, r[t]);
  for (const o in e)
    if (e.hasOwnProperty(o)) {
      const i = e[o];
      if (i) {
        const s = `${t}_${o}` + (typeof i == "string" ? `_${i}` : "");
        Oa(n, r[s]);
      }
    }
  return n.join(" ");
}
const da = Symbol("state");
function po(t, r) {
  var s, a;
  const e = t.top || 0, n = ((s = r === "ltr" ? t.end : t.start) != null ? s : t.right) || 0, o = t.bottom || 0, i = ((a = r === "ltr" ? t.start : t.end) != null ? a : t.left) || 0;
  return e === 0 && n === 0 && o === 0 && i === 0 ? "" : _e(e) + " " + _e(n) + " " + _e(o) + " " + _e(i);
}
function cl(t) {
  if (typeof t != "number" && typeof t != "string")
    return !1;
  const r = Number(t);
  return !Number.isNaN(r);
}
function Mn(t) {
  return cl(t) && t >= 0;
}
function os(t, r, e) {
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
    if (n[s] && !Mn(n[s]))
      return e;
  return po(t, r);
}
function lp(t, r) {
  return !Mn(t) || t === void 0 || t > 1 ? r : Number(t);
}
const ap = Object.prototype.hasOwnProperty;
function Ui(t, r) {
  if (Object.is(t, r))
    return !0;
  if (typeof t != "object" || t === null || typeof r != "object" || r === null)
    return Object.is(t, r);
  const e = Object.keys(t), n = Object.keys(r);
  if (e.length !== n.length)
    return !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (!ap.call(r, i) || !Ui(t[i], r[i]))
      return !1;
  }
  return !0;
}
function xo(t, r) {
  return Ui(t, r) ? r : t;
}
function cp(t, r) {
  return t === "visible" || t === "invisible" || t === "gone" ? t : r;
}
function yd(t, r) {
  return t === "linear" || t === "ease" || t === "ease_in_out" || t === "ease_in" || t === "ease_out" ? t : r;
}
function oo(t, r) {
  const e = Number(t);
  return Number.isNaN(e) ? r : e;
}
function is(t) {
  const r = [];
  return t.name === "set" ? (t.items || []).forEach((e) => {
    r.push(...is(e));
  }) : r.push(t), r;
}
function mi(t, r) {
  if (!t || typeof t != "object")
    return r;
  const e = [
    "top",
    "right",
    "bottom",
    "left"
  ];
  for (let n = 0; n < e.length; ++n)
    if (t[e[n]] && !Mn(t[e[n]]))
      return r;
  return t;
}
function up(t, r) {
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
function fp(t, r) {
  const e = [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ];
  for (let n = 0; n < e.length; ++n)
    if (e[n] && !Mn(e[n]))
      return r;
  return t;
}
function js(t, r = 0, e = 10) {
  return [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ].map((n) => _e((n || r) / e * 10)).join(" ");
}
function dp(t) {
  var r, e, n, o, i, s;
  return _e(((e = (r = t.offset) == null ? void 0 : r.x) == null ? void 0 : e.value) || 0) + " " + _e(((o = (n = t.offset) == null ? void 0 : n.y) == null ? void 0 : o.value) || 0) + " " + _e((i = t.blur) != null ? i : 2) + " " + gr(t.color || "#000000", (s = t.alpha) != null ? s : 0.19);
}
function _p(t, r) {
  var e, n, o, i, s, a;
  return "drop-shadow(" + gr(t.color || "#000000", (e = t.alpha) != null ? e : 0.19) + " " + _e((((o = (n = t.offset) == null ? void 0 : n.x) == null ? void 0 : o.value) || 0) * 10 / r) + " " + _e((((s = (i = t.offset) == null ? void 0 : i.y) == null ? void 0 : s.value) || 0) * 10 / r) + " " + _e(((a = t.blur) != null ? a : 2) * 10 / r) + ")";
}
let vl;
function zi() {
  return typeof matchMedia > "u" ? !1 : (vl || (vl = window.matchMedia("(prefers-reduced-motion)")), vl.matches);
}
const pp = 8, gp = (t, r, e, n) => {
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
      if (++i > pp) {
        const c = new Error("Recursive layout in size_provider");
        c.level = "warn", c.additional = {
          widthVariableName: e,
          heightVariableName: n
        }, r.logError(c);
        break;
      }
      await Vn();
    }
  }), o.observe(t)), o;
}, _a = Symbol("enabled");
function sn(t, r) {
  return t === 1 || t === 0 || t === !1 || t === !0 ? !!t : r;
}
function ti(t) {
  return [
    t.state_description,
    t.description,
    t.hint
  ].filter(Boolean).join(", ");
}
const Ba = 1, ri = 2;
function Ra(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "translation-fixed")
      return _e(t.value * r);
    if (t.type === "translation-percentage")
      return `${t.value * r}%`;
  }
}
function fs(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "pivot-fixed")
      return _e(t.value * r);
    if (t.type === "pivot-percentage")
      return `${t.value * r}%`;
  }
}
function hp(t) {
  return t.map((r) => {
    if (r.type === "rotation") {
      if (typeof r.angle == "number") {
        const e = fs(r.pivot_x) || "50%", n = fs(r.pivot_y) || "50%", o = fs(r.pivot_x, -1) || "-50%", i = fs(r.pivot_y, -1) || "-50%";
        return `translate(${e}, ${n}) rotate(${r.angle}deg) translate(${o}, ${i})`;
      }
    } else if (r.type === "translation") {
      const e = Ra(r.x) || 0, n = Ra(r.y) || 0;
      return `translate(${e}, ${n})`;
    }
  }).filter(Boolean).join(" ");
}
const mp = "appkit-actionable__button", Ha = {
  actionable__button: mp
};
function bp() {
}
const To = Symbol("action");
function Ll(t) {
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
function yp(t) {
  let r = (
    /*containerElement*/
    t[7]
  ), e, n, o = (
    /*containerElement*/
    t[7] && jl(t)
  );
  return {
    c() {
      o && o.c(), e = xt();
    },
    m(i, s) {
      o && o.m(i, s), J(i, e, s), n = !0;
    },
    p(i, s) {
      /*containerElement*/
      i[7] ? r ? Er(
        r,
        /*containerElement*/
        i[7]
      ) ? (o.d(1), o = jl(i), r = /*containerElement*/
      i[7], o.c(), o.m(e.parentNode, e)) : o.p(i, s) : (o = jl(i), r = /*containerElement*/
      i[7], o.c(), o.m(e.parentNode, e)) : r && (o.d(1), o = null, r = /*containerElement*/
      i[7]);
    },
    i(i) {
      n || (H(o, i), n = !0);
    },
    o(i) {
      te(o, i), n = !1;
    },
    d(i) {
      i && G(e), o && o.d(i);
    }
  };
}
function wp(t) {
  var f;
  let r, e, n, o, i, s;
  const a = (
    /*#slots*/
    t[31].default
  ), l = tl(
    a,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let c = [
    {
      class: e = /*cls*/
      t[2] + " " + Ha.actionable__button + " " + Cr["root__any-actions"] + ` ${/*isNativeActionAnimation*/
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
      t[0].fakeElement === ri ? -1 : null
    },
    /*attrs*/
    t[4]
  ], u = {};
  for (let _ = 0; _ < c.length; _ += 1)
    u = jo(u, c[_]);
  return {
    c() {
      r = Pe("button"), l && l.c(), qo(r, u);
    },
    m(_, h) {
      J(_, r, h), l && l.m(r, null), r.autofocus && r.focus(), t[48](r), o = !0, i || (s = [
        il(
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
      1073741824) && nl(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? rl(
          a,
          /*$$scope*/
          _[30],
          h,
          null
        ) : ol(
          /*$$scope*/
          _[30]
        ),
        null
      ), qo(r, u = No(c, [
        (!o || h[0] & /*cls, isNativeActionAnimation, longTapActions*/
        70 && e !== (e = /*cls*/
        _[2] + " " + Ha.actionable__button + " " + Cr["root__any-actions"] + ` ${/*isNativeActionAnimation*/
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
        _[0].fakeElement === ri ? -1 : null)) && { tabindex: n },
        h[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (H(l, _), o = !0);
    },
    o(_) {
      te(l, _), o = !1;
    },
    d(_) {
      _ && G(r), l && l.d(_), t[48](null), i = !1, Gr(s);
    }
  };
}
function kp(t) {
  var f;
  let r, e, n, o, i, s;
  const a = (
    /*#slots*/
    t[31].default
  ), l = tl(
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
      t[0].fakeElement === ri ? -1 : null
    },
    /*attrs*/
    t[4]
  ], u = {};
  for (let _ = 0; _ < c.length; _ += 1)
    u = jo(u, c[_]);
  return {
    c() {
      r = Pe("a"), l && l.c(), qo(r, u);
    },
    m(_, h) {
      J(_, r, h), l && l.m(r, null), t[47](r), o = !0, i || (s = [
        il(
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
      1073741824) && nl(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? rl(
          a,
          /*$$scope*/
          _[30],
          h,
          null
        ) : ol(
          /*$$scope*/
          _[30]
        ),
        null
      ), qo(r, u = No(c, [
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
        _[0].fakeElement === ri ? -1 : null)) && { tabindex: n },
        h[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (H(l, _), o = !0);
    },
    o(_) {
      te(l, _), o = !1;
    },
    d(_) {
      _ && G(r), l && l.d(_), t[47](null), i = !1, Gr(s);
    }
  };
}
function jl(t) {
  var f;
  let r, e, n, o, i, s;
  const a = (
    /*#slots*/
    t[31].default
  ), l = tl(
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
      r = Pe(
        /*containerElement*/
        t[7]
      ), l && l.c(), ei(
        /*containerElement*/
        t[7]
      )(r, u);
    },
    m(_, h) {
      J(_, r, h), l && l.m(r, null), t[49](r), o = !0, i || (s = [
        il(
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
      1073741824) && nl(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? rl(
          a,
          /*$$scope*/
          _[30],
          h,
          null
        ) : ol(
          /*$$scope*/
          _[30]
        ),
        null
      ), ei(
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
      o || (H(l, _), o = !0);
    },
    o(_) {
      te(l, _), o = !1;
    },
    d(_) {
      _ && G(r), l && l.d(_), t[49](null), i = !1, Gr(s);
    }
  };
}
function vp(t) {
  let r, e, n, o;
  const i = [kp, wp, yp], s = [];
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
      e.c(), n = xt();
    },
    m(l, c) {
      s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? s[r].p(l, c) : (fr(), te(s[u], 1, 1, () => {
        s[u] = null;
      }), dr(), e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), H(e, 1), e.m(n.parentNode, n));
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), s[r].d(l);
    }
  };
}
const Wa = 8, Ua = 400, Cl = 400, jp = /* @__PURE__ */ new Set(["button", "image", "checkbox", "radio", "header"]);
function Ga(t) {
  t.preventDefault();
}
function Cp(t, r, e) {
  let n, o, i = j, s = () => (i(), i = E(n, (X) => e(29, o = X)), n);
  t.$$.on_destroy.push(() => i());
  let { $$slots: a = {}, $$scope: l } = r, { componentContext: c } = r, { id: u = "" } = r, { actions: f = void 0 } = r, { doubleTapActions: _ = void 0 } = r, { longTapActions: h = void 0 } = r, { pressStartActions: m = void 0 } = r, { pressEndActions: p = void 0 } = r, { hoverStartActions: w = void 0 } = r, { hoverEndActions: k = void 0 } = r, { cls: N = "" } = r, { style: R = null } = r, { attrs: L = void 0 } = r, { use: re = bp } = r, { customAction: ue = null } = r, { isNativeActionAnimation: T = !0 } = r, { hasInnerFocusable: Y = !1 } = r, { customAccessibility: le = void 0 } = r, { captureFocusOnAction: A = !0 } = r, { containerElement: D = "span" } = r;
  const M = Dr(Kr), U = Dr(To);
  _i(To, {
    hasAction() {
      return !!(U.hasAction() || f != null && f.length || (le == null ? void 0 : le.mode) === "exclude");
    }
  });
  let Z, me = "", Ae, ve = -1, he = -1, Se = null, Q = !1, xe = !1, qe = !1, Ke, be, Te, pe, ge = !1;
  function de() {
    return (o == null ? void 0 : o.some((X) => {
      if (X != null && X.typed)
        return !0;
      const Et = X == null ? void 0 : X.url;
      if (!Et)
        return !1;
      const Tt = Ll(Et);
      return Tt && !Ol(Tt, M.getBuiltinProtocols());
    })) || !1;
  }
  async function ee(X, Et) {
    f && (X && de() && X.preventDefault(), c.execAnyActions(f, { node: Z, processUrls: Et }));
  }
  async function ae(X) {
    if (U.hasAction() || X.button !== void 0 && X.button !== 0)
      return;
    const Et = Date.now();
    if (ve > 0 && Et > ve + Ua) {
      X.preventDefault();
      return;
    }
    if (_ != null && _.length && he > 0 && Et - he < Cl) {
      X.preventDefault(), c.execAnyActions(_, { processUrls: !0, node: Z }), he = -1;
      return;
    }
    if (he = Et, _ != null && _.length && ve > 0 && Et < ve + Cl) {
      X.preventDefault(), clearTimeout(be), be = window.setTimeout(
        () => {
          ee(void 0, !0);
        },
        Cl
      );
      return;
    }
    (ue == null ? void 0 : ue(X)) === !1 ? X.preventDefault() : ee(X, !1);
  }
  function ne(X) {
    U.hasAction() || (Se = { x: X.clientX, y: X.clientY }, Q = !1, ve = Date.now(), Ke && clearTimeout(Ke), clearTimeout(be), c.execAnyActions(m, { node: Z }));
  }
  function we(X) {
    Se && (Math.abs(Se.x - X.clientX) > Wa || Math.abs(Se.y - X.clientY) > Wa) && (Q = !0);
  }
  function Re(X) {
    U.hasAction() || !Se || ve < 0 || (!Q && Date.now() - ve >= Ua && (X.stopImmediatePropagation(), c.execAnyActions(h, { processUrls: !0, node: Z })), Ke && clearTimeout(Ke), Ke = window.setTimeout(
      () => {
        Se = null, ve = -1;
      },
      100
    ), c.execAnyActions(p, { node: Z }));
  }
  function Ye() {
    U.hasAction() || c.execAnyActions(w, { node: Z });
  }
  function $() {
    U.hasAction() || c.execAnyActions(k, { node: Z });
  }
  function Le(X) {
    const Et = X.target;
    Et instanceof HTMLElement && (Et.tagName === "INPUT" || Et.contentEditable === "true") || X.ctrlKey || X.metaKey || X.altKey || X.shiftKey || X.key === "Enter" && Array.isArray(f) && f.length && (c.execAnyActions(f), X.preventDefault());
  }
  Xn(() => {
    u && !Y && M.registerFocusable(u, {
      focus() {
        Z && (me || xe) && Z.focus();
      }
    });
  }), ln(() => {
    typeof window < "u" && (window.removeEventListener("pointermove", we), window.removeEventListener("pointerup", Re), window.removeEventListener("pointercancel", Re)), u && !Y && M.unregisterFocusable(u), Ke && clearTimeout(Ke), be && clearTimeout(be);
  });
  function Ne(X) {
    Ln.call(this, t, X);
  }
  function ot(X) {
    Ln.call(this, t, X);
  }
  function ut(X) {
    Ln.call(this, t, X);
  }
  function rt(X) {
    Ln.call(this, t, X);
  }
  function yt(X) {
    Ln.call(this, t, X);
  }
  function nt(X) {
    Ln.call(this, t, X);
  }
  function Pt(X) {
    Ln.call(this, t, X);
  }
  function ft(X) {
    Ln.call(this, t, X);
  }
  function q(X) {
    Ln.call(this, t, X);
  }
  function fe(X) {
    Ln.call(this, t, X);
  }
  function st(X) {
    Ln.call(this, t, X);
  }
  function Me(X) {
    Ln.call(this, t, X);
  }
  function I(X) {
    Ln.call(this, t, X);
  }
  function Ct(X) {
    Ln.call(this, t, X);
  }
  function lt(X) {
    Ln.call(this, t, X);
  }
  function St(X) {
    Fr[X ? "unshift" : "push"](() => {
      Z = X, e(8, Z);
    });
  }
  function Dt(X) {
    Fr[X ? "unshift" : "push"](() => {
      Z = X, e(8, Z);
    });
  }
  function tt(X) {
    Fr[X ? "unshift" : "push"](() => {
      Z = X, e(8, Z);
    });
  }
  return t.$$set = (X) => {
    "componentContext" in X && e(0, c = X.componentContext), "id" in X && e(18, u = X.id), "actions" in X && e(19, f = X.actions), "doubleTapActions" in X && e(20, _ = X.doubleTapActions), "longTapActions" in X && e(1, h = X.longTapActions), "pressStartActions" in X && e(21, m = X.pressStartActions), "pressEndActions" in X && e(22, p = X.pressEndActions), "hoverStartActions" in X && e(23, w = X.hoverStartActions), "hoverEndActions" in X && e(24, k = X.hoverEndActions), "cls" in X && e(2, N = X.cls), "style" in X && e(3, R = X.style), "attrs" in X && e(4, L = X.attrs), "use" in X && e(5, re = X.use), "customAction" in X && e(25, ue = X.customAction), "isNativeActionAnimation" in X && e(6, T = X.isNativeActionAnimation), "hasInnerFocusable" in X && e(26, Y = X.hasInnerFocusable), "customAccessibility" in X && e(27, le = X.customAccessibility), "captureFocusOnAction" in X && e(28, A = X.captureFocusOnAction), "containerElement" in X && e(7, D = X.containerElement), "$$scope" in X && e(30, l = X.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*customAccessibility*/
    134217728 && e(12, ge = (le == null ? void 0 : le.mode) === "exclude"), t.$$.dirty[0] & /*componentContext, actions*/
    524289 && s(e(16, n = c.getDerivedFromVars(f, void 0, !0))), t.$$.dirty[0] & /*$processedActions, customAction, href, ariaHidden, componentContext*/
    570429953) {
      if (Array.isArray(o) && (o != null && o.length))
        for (let X = 0; X < o.length; ++X) {
          const Et = o[X].url;
          if (Et) {
            e(9, me = Et), e(13, Ae = o[X].target || void 0);
            break;
          }
        }
      e(10, xe = !!ue), (me || Array.isArray(o) && (o != null && o.length)) && (U.hasAction() || ge) ? (e(9, me = ""), c.logError(K(new Error("Actionable element is forbidden inside other actionable element or inside accessibility mode=exlucde"), {
        level: "warn",
        additional: { actions: o }
      }))) : me && !Ol(Ll(me), M.getBuiltinProtocols()) ? (e(9, me = ""), e(10, xe = !0)) : !me && Array.isArray(o) && (o != null && o.length) && (e(10, xe = !0), o.some((X) => X.url || X.typed || X.menu_items) || c.logError(K(new Error("The component has a list of actions, but does not have a real action"), {
        level: "warn",
        additional: { actions: o }
      })));
    }
    t.$$.dirty[0] & /*customAccessibility, href, hasJSAction, role*/
    134221312 && (le != null && le.type && jp.has(le.type) ? le.type === "header" ? e(11, Te = "heading") : e(11, Te = le.type) : me ? e(11, Te = void 0) : xe && e(11, Te = "button"), (Te === "checkbox" || Te === "radio") && typeof (le == null ? void 0 : le.is_checked) == "boolean" ? e(15, pe = le.is_checked) : e(15, pe = void 0)), t.$$.dirty[0] & /*node, href, hasJSAction, doubleTapActions, longTapActions, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions, captureFocusOnAction*/
    300943106 && Z && (me || xe || _ != null && _.length ? Z.addEventListener("click", ae) : Z.removeEventListener("click", ae), _ != null && _.length || h != null && h.length || m != null && m.length || p != null && p.length ? (Z.addEventListener("pointerdown", ne, { passive: !0 }), window.addEventListener("pointermove", we, { passive: !0 }), window.addEventListener("pointerup", Re, { passive: !0 }), window.addEventListener("pointercancel", Re, { passive: !0 })) : (Z.removeEventListener("pointerdown", ne), window.removeEventListener("pointerup", Re), window.removeEventListener("pointermove", we), window.removeEventListener("pointercancel", Re)), w != null && w.length ? Z.addEventListener("pointerenter", Ye) : Z.removeEventListener("pointerenter", Ye), k != null && k.length ? Z.addEventListener("pointerleave", $) : Z.removeEventListener("pointerleave", $), A === !1 ? Z.addEventListener("mousedown", Ga) : Z.removeEventListener("mousedown", Ga), e(14, qe = !!(me || xe || _ != null && _.length || h != null && h.length || m != null && m.length || p != null && p.length || w != null && w.length || k != null && k.length)));
  }, [
    c,
    h,
    N,
    R,
    L,
    re,
    T,
    D,
    Z,
    me,
    xe,
    Te,
    ge,
    Ae,
    qe,
    pe,
    n,
    Le,
    u,
    f,
    _,
    m,
    p,
    w,
    k,
    ue,
    Y,
    le,
    A,
    o,
    l,
    a,
    Ne,
    ot,
    ut,
    rt,
    yt,
    nt,
    Pt,
    ft,
    q,
    fe,
    st,
    Me,
    I,
    Ct,
    lt,
    St,
    Dt,
    tt
  ];
}
class ul extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      Cp,
      vp,
      Er,
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
function Pn(t) {
  return cl(t) && t > 0;
}
function wd(t, r) {
  return t.map((e) => {
    if (!e) {
      r(K(new Error("Incorrect filter"), {
        level: "warn"
      }));
      return;
    }
    if (e.type === "blur") {
      if (Pn(e.radius))
        return `blur(${an(e.radius / 2)})`;
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
function Ja(t, r, e) {
  const n = t.slice();
  return n[6] = r[e], n;
}
function Ap(t) {
  let r, e;
  return {
    c() {
      r = Pe("span"), g(r, "class", pi["outer-background__item"]), g(r, "style", e = ur(
        /*item*/
        t[6].style
      ));
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o & /*styles*/
      2 && e !== (e = ur(
        /*item*/
        n[6].style
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Ep(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Pe("img"), Kn(r.src, e = /*item*/
      t[6].image_url) || g(r, "src", e), g(r, "alt", ""), g(r, "aria-hidden", "true"), g(r, "loading", "lazy"), g(r, "decoding", "async"), g(r, "class", pi["outer-background__item"]), g(r, "style", n = ur(
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
      2 && !Kn(r.src, e = /*item*/
      s[6].image_url) && g(r, "src", e), a & /*styles*/
      2 && n !== (n = ur(
        /*item*/
        s[6].style
      )) && g(r, "style", n);
    },
    d(s) {
      s && G(r), o = !1, i();
    }
  };
}
function qa(t) {
  let r;
  function e(i, s) {
    return (
      /*item*/
      i[6].image_url ? Ep : Ap
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = xt();
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
function Sp(t) {
  let r, e, n = ir(
    /*styles*/
    t[1]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = qa(Ja(t, n, i));
  return {
    c() {
      r = Pe("span");
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
          const l = Ja(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = qa(l), o[a].c(), o[a].m(r, null));
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
      i && G(r), cn(o, i);
    }
  };
}
function Vp(t, r, e) {
  let n, { direction: o } = r, { componentContext: i } = r, { background: s = [] } = r, { radius: a = "" } = r;
  function l(c) {
    c.target && "classList" in c.target && c.target.classList.add(pi["outer-background__item_hidden"]);
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
        const _ = al([c], o);
        c.type === "solid" && (u["background-color"] = _.color), c.type === "gradient" && (u["background-image"] = _.image), c.type === "image" && (u.opacity = Number(c.alpha), f.image_url = c.image_url, u["object-fit"] = _.size, u["object-position"] = _.position, Array.isArray(c.filters) && c.filters.length && (u.filter = wd(c.filters, i.logError), o === "rtl" && c.filters.some((h) => h.type === "rtl_mirror") && (u.transform = "scale(-1,1)")));
      }
      return f;
    }));
  }, [a, n, l, o, i, s];
}
class Fp extends Or {
  constructor(r) {
    super(), Lr(this, r, Vp, Sp, Er, {
      direction: 3,
      componentContext: 4,
      background: 5,
      radius: 0
    });
  }
}
const Ip = (t) => ({
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
}), Ka = (t) => ({
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
function Ya(t) {
  let r, e;
  return r = new ul({
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
          Gs,
          /*mods*/
          t[31]
        ) + /*customClass*/
        (t[30] ? ` ${/*customClass*/
        t[30]}` : "") + /*hoverClassName*/
        (t[18] ? ` ${/*hoverClassName*/
        t[18]}` : "")
      ),
      style: ur(
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
      t[16].length || ec(
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
      $$slots: { default: [Dp] },
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
      Rt(r.$$.fragment);
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
      n[1] + " " + mt(
        "outer",
        Gs,
        /*mods*/
        n[31]
      ) + /*customClass*/
      (n[30] ? ` ${/*customClass*/
      n[30]}` : "") + /*hoverClassName*/
      (n[18] ? ` ${/*hoverClassName*/
      n[18]}` : "")), o[0] & /*stl*/
      536870912 && (i.style = ur(
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
      n[16].length || ec(
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function Xa(t) {
  let r, e;
  return r = new Fp({
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
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function Za(t) {
  let r, e;
  return {
    c() {
      r = Pe("span"), g(r, "class", Gs.outer__border), g(r, "style", e = ur(
        /*borderElemStyle*/
        t[4]
      ));
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o[0] & /*borderElemStyle*/
      16 && e !== (e = ur(
        /*borderElemStyle*/
        n[4]
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Dp(t) {
  let r, e, n, o = (
    /*hasSeparateBg*/
    t[11] && Xa(t)
  );
  const i = (
    /*#slots*/
    t[149].default
  ), s = tl(
    i,
    t,
    /*$$scope*/
    t[152],
    Ka
  );
  let a = (
    /*hasBorder*/
    t[22] && Za(t)
  );
  return {
    c() {
      o && o.c(), r = xt(), s && s.c(), a && a.c(), e = xt();
    },
    m(l, c) {
      o && o.m(l, c), J(l, r, c), s && s.m(l, c), a && a.m(l, c), J(l, e, c), n = !0;
    },
    p(l, c) {
      /*hasSeparateBg*/
      l[11] ? o ? (o.p(l, c), c[0] & /*hasSeparateBg*/
      2048 && H(o, 1)) : (o = Xa(l), o.c(), H(o, 1), o.m(r.parentNode, r)) : o && (fr(), te(o, 1, 1, () => {
        o = null;
      }), dr()), s && s.p && (!n || c[0] & /*hasCustomFocus, widthMin, widthMax, heightMin, heightMax*/
      132032 | c[4] & /*$$scope*/
      268435456) && nl(
        s,
        i,
        l,
        /*$$scope*/
        l[152],
        n ? rl(
          i,
          /*$$scope*/
          l[152],
          c,
          Ip
        ) : ol(
          /*$$scope*/
          l[152]
        ),
        Ka
      ), /*hasBorder*/
      l[22] ? a ? a.p(l, c) : (a = Za(l), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null);
    },
    i(l) {
      n || (H(o), H(s, l), n = !0);
    },
    o(l) {
      te(o), te(s, l), n = !1;
    },
    d(l) {
      l && (G(r), G(e)), o && o.d(l), s && s.d(l), a && a.d(l);
    }
  };
}
function Tp(t) {
  let r, e, n = !/*hasWidthError*/
  t[23] && !/*hasHeightError*/
  t[24] && Ya(t);
  return {
    c() {
      n && n.c(), r = xt();
    },
    m(o, i) {
      n && n.m(o, i), J(o, r, i), e = !0;
    },
    p(o, i) {
      !/*hasWidthError*/
      o[23] && !/*hasHeightError*/
      o[24] ? n ? (n.p(o, i), i[0] & /*hasWidthError, hasHeightError*/
      25165824 && H(n, 1)) : (n = Ya(o), n.c(), H(n, 1), n.m(r.parentNode, r)) : n && (fr(), te(n, 1, 1, () => {
        n = null;
      }), dr());
    },
    i(o) {
      e || (H(n), e = !0);
    },
    o(o) {
      te(n), e = !1;
    },
    d(o) {
      o && G(r), n && n.d(o);
    }
  };
}
const Qa = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
}, xa = {
  left: "end",
  center: "center",
  right: "start",
  start: "start",
  end: "end"
}, $a = {
  top: "start",
  center: "center",
  bottom: "end",
  baseline: "baseline"
}, Al = (t) => `The component id with the "${t}" property for state change is missing. Either specify the id, or specify the "transition_trigger" property without "state_change" value.`;
function ec(t) {
  return t.some((r) => r.name === "native");
}
function Mp(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, re, ue, T, Y, le, A, D, M, U, Z, me, Ae, ve, he, Se, Q, xe, qe, Ke, be, Te, pe, ge, de, ee, ae, ne, we, Re, Ye = j, $ = () => (Ye(), Ye = E(k, (ct) => e(133, Re = ct)), k), Le, Ne = j, ot = () => (Ne(), Ne = E(N, (ct) => e(134, Le = ct)), N), ut, rt = j, yt = () => (rt(), rt = E(w, (ct) => e(135, ut = ct)), w), nt, Pt = j, ft = () => (Pt(), Pt = E(R, (ct) => e(136, nt = ct)), R), q, fe = j, st = () => (fe(), fe = E(p, (ct) => e(137, q = ct)), p), Me, I = j, Ct = () => (I(), I = E(m, (ct) => e(138, Me = ct)), m), lt, St = j, Dt = () => (St(), St = E(o, (ct) => e(139, lt = ct)), o), tt, X = j, Et = () => (X(), X = E(h, (ct) => e(20, tt = ct)), h), Tt, $t = j, Kt = () => ($t(), $t = E(_, (ct) => e(140, Tt = ct)), _), je, He = j, pt = () => (He(), He = E(f, (ct) => e(141, je = ct)), f), Ve, $e = j, Be = () => ($e(), $e = E(u, (ct) => e(142, Ve = ct)), u), Vt, Oe = j, bt = () => (Oe(), Oe = E(a, (ct) => e(143, Vt = ct)), a), Gt, It = j, _r = () => (It(), It = E(c, (ct) => e(144, Gt = ct)), c), Fe, vt = j, or = () => (vt(), vt = E(l, (ct) => e(145, Fe = ct)), l), tr, Qt = j, hr = () => (Qt(), Qt = E(s, (ct) => e(146, tr = ct)), s), kr, Mt = j, br = () => (Mt(), Mt = E(i, (ct) => e(147, kr = ct)), i), Wt;
  t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => Ne()), t.$$.on_destroy.push(() => rt()), t.$$.on_destroy.push(() => Pt()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => St()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => $t()), t.$$.on_destroy.push(() => He()), t.$$.on_destroy.push(() => $e()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => It()), t.$$.on_destroy.push(() => vt()), t.$$.on_destroy.push(() => Qt()), t.$$.on_destroy.push(() => Mt());
  let { $$slots: _t = {}, $$scope: er } = r, { componentContext: ie } = r, { cls: yr = "" } = r, { style: vr = void 0 } = r, { layoutParams: jt = {} } = r, { customDescription: Ir = !1 } = r, { customPaddings: qr = !1 } = r, { customActions: lr = "" } = r, { additionalPaddings: it = null } = r, { heightByAspect: At = !1 } = r, { parentOf: Jt = void 0 } = r, { parentOfSimpleMode: Yt = void 0 } = r, { replaceItems: sr = void 0 } = r, { hasInnerFocusable: dt = !1 } = r, { alwaysCustomFocus: ce = !1 } = r, { containerElement: kt = "span" } = r, { devapi: nr = void 0 } = r;
  const Xt = Dr(Kr), jr = Dr(da), { isEnabled: v } = Dr(_a);
  bn(t, v, (ct) => e(148, Wt = ct));
  const se = Xt.direction;
  bn(t, se, (ct) => e(19, we = ct));
  let d, z, Ie = null, We = [], ke = {}, B = {}, Ut = !1, Ht = 1, Xe = "transparent", at = 0, qt = {
    "top-left": 0,
    "top-right": 0,
    "bottom-right": 0,
    "bottom-left": 0
  }, Vr = "", pr = null, Pr = "", An = {}, Ee, Yr, Xr, gn = 0, y = 0, C = 0, S = !1, oe = !1, O = {}, et, De, Zt, Ft = 0, Je = 0, rr = 0, ht = !1, Sr = !1, Tr = 1, yn, xr, Hr, nn, zn = [], Bn = !1, so = !1, Tn, Lt, b, V = [], x = [], P = [], Ce = [], ye = [], Ot = [], Bt = [], Jr = [], Mr = [], Br = [], mo = "", to, ro, Qn, qi, Ze = !1, wr = "visible", on, Lo, Oo = !1, wn = !0, Yo, jn, Co, ai;
  function u_() {
    e(72, pr = null), e(73, Pr = ""), e(86, Tr = 1), e(98, Ze = !1), e(99, wr = "visible"), e(100, on = void 0), e(28, wn = !0), zn = ie.fakeElement ? [] : ie.json.transition_triggers || ["state_change", "visibility_change"], e(89, Bn = zn.indexOf("state_change") !== -1), so = zn.indexOf("visibility_change") !== -1, d && Sa(d), jn == null || jn(), Wt && e(102, jn = Xt.processVariableTriggers(ie, ie.json.variable_triggers));
  }
  function f_(ct, Zr) {
    if (!Array.isArray(Jt) || !sr || Yt && (Array.isArray(Zr) ? Zr.length : 0) !== 1)
      return;
    const En = Jt.findIndex((un) => (un == null ? void 0 : un.id) === ct), Rn = Jt.slice();
    Rn.splice(En, 1, ...(Zr || []).map((un) => ({ json: un, id: un == null ? void 0 : un.id }))), e(53, Jt = Rn), sr(Rn.map((un) => un == null ? void 0 : un.json));
  }
  function d_(ct) {
    const Zr = oo(ct.start_value, 1), En = oo(ct.end_value, 1), Rn = rn(ct.start_delay, 0), un = zi() ? 0 : rn(ct.duration, 300), bo = yd(ct.interpolator, "ease_in_out").replace(/_/g, "-");
    switch (ct.name) {
      case "fade":
        return e(94, to = Zr), e(95, ro = En), `opacity ${un}ms ${bo} ${Rn}ms`;
      case "scale":
        return e(96, Qn = Zr), e(97, qi = En), `transform ${un}ms ${bo} ${Rn}ms`;
      case "native":
      case "no_animation":
        return "";
      default:
        return ie.logError(K(new Error("Unknown action_animation name"), {
          additional: { animation: ct.name }
        })), "";
    }
  }
  async function __(ct) {
    e(99, wr = ct);
    const Zr = ct === "visible" ? "in" : "out", En = Zr === "in" ? ie.json.transition_in : ie.json.transition_out;
    if (so && En) {
      let Rn;
      ct === "gone" && (Rn = d.getBoundingClientRect()), await Vn(), Zr === "in" && e(91, Lt = !0), jr.runVisibilityTransition(
        {
          ...ie.json,
          visibility: "visible"
        },
        ie,
        En,
        d,
        Zr,
        Rn
      ).then(() => {
        Zr === "in" && e(91, Lt = !1);
      }).catch((un) => {
        throw Zr === "in" && e(91, Lt = !1), un;
      });
    }
  }
  function Ea() {
    if (Ie && d) {
      const ct = Xt.getExtensionContext(ie);
      Ie.forEach((Zr) => {
        var En;
        (En = Zr.unmountView) == null || En.call(Zr, d, ct);
      }), Ie = null;
    }
  }
  function p_() {
    if (Ie != null && Ie.length) {
      const ct = Xt.getExtensionContext(ie);
      Ie.forEach((Zr) => {
        var En;
        (En = Zr.updateView) == null || En.call(Zr, d, ct);
      });
    }
  }
  let Ao = null, Bo = null, ci = "desktop";
  function Ki() {
    Ao != null && Ao.matches ? e(105, ci = "mobile") : Bo != null && Bo.matches ? e(105, ci = "tablet") : e(105, ci = "desktop");
  }
  let lo = null, Yi = "";
  function Sa(ct) {
    var Xi, Zi, Qi;
    Co == null || Co.destroy(), e(65, d = ct), Bn && ie.json.transition_in && (ie.id ? jr.registerChildWithTransitionIn(ie.json, ie, ie.json.transition_in, ct).then(() => {
      e(90, Tn = !1);
    }).catch((Xo) => {
      throw e(90, Tn = !1), Xo;
    }) : ie.logError(K(new Error(Al("transition_in")), { level: "warn" }))), Bn && ie.json.transition_out && (ie.id ? jr.registerChildWithTransitionOut(ie.json, ie, ie.json.transition_out, ct) : ie.logError(K(new Error(Al("transition_out")), { level: "warn" }))), ie.fakeElement || (ie.json.transition_change && !ie.id && ie.logError(K(new Error(Al("transition_change")), { level: "warn" })), jr.registerChildWithTransitionChange(ie.json, ie, ie.json.transition_change, ct).then(() => {
      e(92, b = !1);
    }).catch((Xo) => {
      throw e(92, b = !1), Xo;
    }));
    const Zr = !ie.fakeElement || ie.fakeElement === ri, En = Zr ? ie.json.visibility_actions || ie.json.visibility_action && [ie.json.visibility_action] : [], Rn = Zr ? ie.json.disappear_actions : [];
    let un;
    (Array.isArray(En) && En.length || Array.isArray(Rn) && Rn.length) && (un = sp(ct, {
      visibilityActions: En,
      disappearActions: Rn,
      rootCtx: Xt,
      componentContext: ie
    }));
    const bo = ie.id;
    return bo && (ai == null || ai(), ai = Xt.registerId(bo, {
      context: () => ie,
      node: () => d
    }), jr.registerChild(bo)), (Xi = ie.json.tooltips) == null || Xi.forEach((Xo) => {
      Xt.registerTooltip(ct, Xo);
    }), Lo && (Lo.disconnect(), Lo = void 0), Lo = gp(d, ie, (Zi = ie.json.layout_provider) == null ? void 0 : Zi.width_variable_name, (Qi = ie.json.layout_provider) == null ? void 0 : Qi.height_variable_name), Co = {
      destroy() {
        ai && (ai(), ai = void 0), bo && jr.unregisterChild(bo), un && un.destroy();
      }
    }, Co;
  }
  function g_() {
    ie.json.focus && ((ce || !Pl(Xt.isPointerFocus)) && e(17, Oo = !0), ie.execAnyActions(Ce));
  }
  function h_() {
    ie.json.focus && (e(17, Oo = !1), ie.execAnyActions(ye));
  }
  sl(p_), ln(() => {
    var ct;
    We.forEach((Zr) => {
      Xt.unregisterParentOf(Zr);
    }), e(66, We = []), Lo && (Lo.disconnect(), Lo = void 0), (ct = ie.json.tooltips) == null || ct.forEach((Zr) => {
      Xt.unregisterTooltip(Zr);
    }), jn == null || jn(), Ea(), lo && (lo.remove(), e(106, lo = null)), Ao && (Ao.removeEventListener("change", Ki), e(103, Ao = null)), Bo && (Bo.removeEventListener("change", Ki), e(104, Bo = null));
  });
  function m_(ct) {
    Ln.call(this, t, ct);
  }
  function b_(ct) {
    Ln.call(this, t, ct);
  }
  return t.$$set = (ct) => {
    "componentContext" in ct && e(0, ie = ct.componentContext), "cls" in ct && e(1, yr = ct.cls), "style" in ct && e(54, vr = ct.style), "layoutParams" in ct && e(55, jt = ct.layoutParams), "customDescription" in ct && e(56, Ir = ct.customDescription), "customPaddings" in ct && e(57, qr = ct.customPaddings), "customActions" in ct && e(58, lr = ct.customActions), "additionalPaddings" in ct && e(59, it = ct.additionalPaddings), "heightByAspect" in ct && e(60, At = ct.heightByAspect), "parentOf" in ct && e(53, Jt = ct.parentOf), "parentOfSimpleMode" in ct && e(61, Yt = ct.parentOfSimpleMode), "replaceItems" in ct && e(62, sr = ct.replaceItems), "hasInnerFocusable" in ct && e(2, dt = ct.hasInnerFocusable), "alwaysCustomFocus" in ct && e(63, ce = ct.alwaysCustomFocus), "containerElement" in ct && e(3, kt = ct.containerElement), "devapi" in ct && e(64, nr = ct.devapi), "$$scope" in ct && e(152, er = ct.$$scope);
  }, t.$$.update = () => {
    var ct, Zr, En, Rn, un, bo, Xi, Zi, Qi, Xo, Va;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(132, n = ie.origJson), t.$$.dirty[4] & /*origJson*/
    256 && n && u_(), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[3] & /*prevTriggersUnsubscribe*/
    512 | t.$$.dirty[4] & /*$isEnabled*/
    16777216 && (Wt ? (jn == null || jn(), e(102, jn = Xt.processVariableTriggers(ie, ie.json.variable_triggers))) : jn == null || jn()), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(47, o = ie.getDerivedFromVars(ie.json.focus))), t.$$.dirty[0] & /*componentContext*/
    1 && br(e(46, i = ie.getDerivedFromVars(ie.json.border))), t.$$.dirty[0] & /*componentContext*/
    1 && hr(e(45, s = ie.getDerivedFromVars(ie.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && bt(e(44, a = ie.getDerivedFromVars(ie.json.margins))), t.$$.dirty[0] & /*componentContext*/
    1 && or(e(43, l = ie.getDerivedFromVars(ie.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && _r(e(42, c = ie.getDerivedFromVars(ie.json.alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Be(e(41, u = ie.getDerivedFromVars(ie.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && pt(e(40, f = ie.getDerivedFromVars(ie.json.alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Kt(e(39, _ = ie.getDerivedFromVars(ie.json.alpha))), t.$$.dirty[0] & /*componentContext*/
    1 && Et(e(38, h = ie.getDerivedFromVars(ie.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Ct(e(37, m = ie.getDerivedFromVars(ie.json.background))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(36, p = ie.getDerivedFromVars(ie.json.action_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && yt(e(35, w = ie.getDerivedFromVars(ie.json.visibility))), t.$$.dirty[0] & /*componentContext*/
    1 && $(e(34, k = ie.getDerivedFromVars(ie.json.transform))), t.$$.dirty[0] & /*componentContext*/
    1 && ot(e(33, N = ie.getDerivedFromVars(ie.json.transformations))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(32, R = ie.getDerivedFromVars(ie.json.capture_focus_on_action))), t.$$.dirty[1] & /*parentOf, parentOfSimpleMode*/
    1077936128 | t.$$.dirty[2] & /*prevChilds*/
    16 && (We.forEach((Ge) => {
      Xt.unregisterParentOf(Ge);
    }), e(66, We = []), Jt && Jt.forEach((Ge) => {
      Ge != null && Ge.id && (We.push(Ge.id), Xt.registerParentOf(Ge.id, {
        replaceWith: f_,
        isSingleMode: !!Yt
      }));
    })), t.$$.dirty[0] & /*hasCustomFocus, borderElemStyle*/
    131088 | t.$$.dirty[2] & /*strokeWidth, strokeColor, cornersRadius, cornerRadius, borderStyle*/
    992 | t.$$.dirty[4] & /*$jsonFocus, $jsonBorder*/
    8421376) {
      const Ge = Oo && (lt != null && lt.border) ? lt.border : kr;
      let $r = {}, kn = {}, Fn = !1, en = "";
      if (Ge) {
        if (sn(Ge.has_shadow, !1)) {
          const fn = Ge.shadow;
          fn ? $r["box-shadow"] = dp(fn) : $r["box-shadow"] = "0 1px 2px 0 rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.07)";
        }
        if (Ge.stroke) {
          Fn = !0, e(68, Ht = rn(Ge.stroke.width, Ht)), e(69, Xe = gr(Ge.stroke.color, 1, Xe));
          const fn = ((ct = Ge.stroke.style) == null ? void 0 : ct.type) === "dashed" ? "dashed" : "solid";
          kn["--divkit-border"] = `${_e(Ht + 1)} ${fn} ${Xe}`;
        }
        if (Ge.corners_radius && typeof Ge.corners_radius == "object") {
          e(71, qt = fp(Ge.corners_radius, qt)), $r["border-radius"] = js(qt);
          const fn = {};
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((Jn) => {
            fn[Jn] = (qt[Jn] || 0) + 1;
          }), kn["--divkit-border-radius"] = js(fn);
        } else Ge.corner_radius && (e(70, at = rn(Ge.corner_radius, at)), e(71, qt = {
          "top-left": at,
          "top-right": at,
          "bottom-right": at,
          "bottom-left": at
        }), $r["border-radius"] = _e(at), kn["--divkit-border-radius"] = _e(at + 1));
        if (Fn && Ht && (Ge.corners_radius || Ge.corner_radius)) {
          let fn = { ...qt };
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((Jn) => {
            fn[Jn] = (fn[Jn] || 0) + Ht / 2;
          }), en = js(fn);
        }
      }
      e(67, ke = xo($r, ke)), e(4, B = xo(kn, B)), e(22, Ut = Fn), e(5, Vr = en);
    }
    if (t.$$.dirty[1] & /*customPaddings*/
    67108864 | t.$$.dirty[2] & /*selfPadding*/
    1024 | t.$$.dirty[4] & /*$jsonPaddings*/
    4194304 && e(72, pr = mi(
      tr && !qr ? tr : void 0,
      pr
    )), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[1] & /*additionalPaddings*/
    268435456 | t.$$.dirty[2] & /*selfPadding*/
    1024 && e(119, L = po(up(pr, it), we)), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[2] & /*margin*/
    2048 | t.$$.dirty[4] & /*$jsonMargins*/
    524288 && e(73, Pr = os(Vt, we, Pr)), t.$$.dirty[0] & /*componentContext*/
    1 && e(130, Se = ie.json.responsive), t.$$.dirty[3] & /*responsiveMobileQuery, responsiveTabletQuery*/
    3072 | t.$$.dirty[4] & /*responsiveConfig*/
    64 && (Se && typeof Se == "object" && typeof window < "u" ? (Ao || (e(103, Ao = window.matchMedia("(max-width: 767px)")), e(104, Bo = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), Ao.addEventListener("change", Ki), Bo.addEventListener("change", Ki)), Ki()) : e(105, ci = "desktop")), t.$$.dirty[3] & /*responsiveBreakpoint*/
    4096 | t.$$.dirty[4] & /*responsiveConfig*/
    64 && e(126, Q = ci !== "desktop" && (Se == null ? void 0 : Se[ci]) || null), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(128, de = (() => {
      const Ge = Q == null ? void 0 : Q.alignment_horizontal;
      if (Ge === "left" || Ge === "center" || Ge === "right" || Ge === "start" || Ge === "end")
        return (we === "ltr" ? Qa : xa)[Ge];
    })()), t.$$.dirty[0] & /*componentContext, $direction*/
    524289 | t.$$.dirty[1] & /*layoutParams*/
    16777216 | t.$$.dirty[2] & /*widthNum, widthMods*/
    20480 | t.$$.dirty[4] & /*$jsonWidth, $jsonMargins, responsiveAlignmentHorizontal, $jsonAlignmentHorizontal*/
    3670032) {
      let Ge, $r, kn, Fn, en = {}, fn = 0, Jn = 0, Ro = !1, Ho = !1;
      const mn = (Zr = ie.json.width) == null ? void 0 : Zr.type;
      if (mn === "fixed")
        e(76, gn = rn(Fe == null ? void 0 : Fe.value, gn)), $r = _e(gn);
      else if (mn === "wrap_content" || (mn === "match_parent" || !mn) && jt.parentHorizontalWrapContent)
        Ge = "content", (mn === "wrap_content" && (Fe != null && Fe.constrained) || (mn === "match_parent" || !mn) && jt.parentHorizontalWrapContent) && (en["width-constrained"] = !0, jt.parentContainerOrientation === "horizontal" && (Jn = 1)), (mn === "match_parent" || !mn) && ie.logError(K(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      else if (Ge = "parent", jt.parentContainerOrientation === "vertical" && jt.parentContainerWrap && (Ho = !0, ie.logError(K(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), jt.parentContainerOrientation === "vertical" && jt.parentContainerKnownWidth || jt.stretchWidth || jt.parentContainerOrientation === "horizontal" && jt.treatMatchParentAs100) {
        const Qr = (Rn = (En = we === "ltr" ? Vt == null ? void 0 : Vt.start : Vt == null ? void 0 : Vt.end) != null ? En : Vt == null ? void 0 : Vt.left) != null ? Rn : 0, In = (bo = (un = we === "ltr" ? Vt == null ? void 0 : Vt.end : Vt == null ? void 0 : Vt.start) != null ? un : Vt == null ? void 0 : Vt.right) != null ? bo : 0, Cn = `calc(100% - ${an(Qr + In)})`;
        jt.stretchWidth ? ($r = "0", kn = Cn) : $r = Cn;
      } else jt.parentContainerOrientation === "horizontal" && (fn = Fe && "weight" in Fe && Fe.weight || 1, jt.parentContainerWrap && (Ro = !0));
      if (mn === "wrap_content" || mn === "match_parent") {
        const Qr = Fe;
        let In, Cn;
        Qr.min_size && Mn(Qr.min_size.value) && (In = Qr.min_size.value), Qr.max_size && Mn(Qr.max_size.value) && (Cn = Qr.max_size.value), In !== void 0 && Cn !== void 0 && In > Cn && (ie.logError(K(new Error("Element has incorrect width constraints (min size is bigger than max size)."), {
          additional: {
            id: ie.json.id,
            minSize: In + "dp",
            maxSize: Cn + "dp"
          }
        })), In = Cn = void 0), In !== void 0 && (kn = _e(In)), Cn !== void 0 && (Fn = _e(Cn));
      }
      if (de)
        en["halign-self"] = de;
      else if (Ge === "parent")
        en["halign-self"] = "stretch";
      else {
        const Qr = Gt;
        Qr === "left" || Qr === "center" || Qr === "right" || Qr === "start" || Qr === "end" ? en["halign-self"] = (we === "ltr" ? Qa : xa)[Qr] : en["halign-self"] = jt.parentHAlign || "start";
      }
      Ge && (en.width = Ge), e(75, Ee = $r), e(6, Yr = kn), e(7, Xr = Fn), e(77, y = fn), e(78, C = Jn), e(74, An = xo(en, An)), e(79, S = Ro), e(23, oe = Ho);
    }
    if (t.$$.dirty[4] & /*activeResponsive*/
    4 && e(127, ee = (() => {
      const Ge = Q == null ? void 0 : Q.alignment_vertical;
      if (Ge === "top" || Ge === "center" || Ge === "bottom" || Ge === "baseline")
        return $a[Ge];
    })()), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*heightByAspect, layoutParams*/
    553648128 | t.$$.dirty[2] & /*heightNum, heightMods*/
    1310720 | t.$$.dirty[4] & /*$jsonHeight, $jsonMargins, responsiveAlignmentVertical, $jsonAlignmentVertical*/
    917512) {
      let Ge, $r, kn, Fn, en = {}, fn = 0, Jn = 0, Ro = !1, Ho = !1;
      const mn = (Xi = ie.json.height) == null ? void 0 : Xi.type;
      if (!At) if (mn === "fixed")
        e(82, Ft = rn(Ve == null ? void 0 : Ve.value, Ft)), $r = _e(Ft);
      else if (mn === "match_parent" && !jt.parentVerticalWrapContent)
        if (Ge = "parent", jt.parentContainerOrientation === "horizontal" && jt.parentContainerWrap && (Ho = !0, ie.logError(K(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), jt.parentContainerOrientation === "horizontal" && jt.parentContainerKnownHeight || jt.stretchHeight || jt.parentContainerOrientation === "vertical" && jt.treatMatchParentAs100) {
          const Qr = (Zi = Vt == null ? void 0 : Vt.top) != null ? Zi : 0, In = (Qi = Vt == null ? void 0 : Vt.bottom) != null ? Qi : 0, Cn = `calc(100% - ${an(Qr + In)})`;
          jt.stretchHeight ? ($r = "0", kn = Cn) : $r = Cn;
        } else jt.parentContainerOrientation === "vertical" && (fn = (Ve == null ? void 0 : Ve.weight) || 1, jt.parentContainerWrap && (Ro = !0));
      else
        Ge = "content", (mn === "wrap_content" && (Ve != null && Ve.constrained) || mn === "match_parent" && jt.parentVerticalWrapContent) && (en["height-constrained"] = !0, jt.parentContainerOrientation === "vertical" && (Jn = 1)), mn === "match_parent" && ie.logError(K(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      if (!At && (mn === "match_parent" || mn === "wrap_content")) {
        const Qr = Ve;
        let In, Cn;
        Qr.min_size && Mn(Qr.min_size.value) && (In = Qr.min_size.value), Qr.max_size && Mn(Qr.max_size.value) && (Cn = Qr.max_size.value), In !== void 0 && Cn !== void 0 && In > Cn && (ie.logError(K(new Error("Element has incorrect height constraints (min size is bigger than max size)."), {
          additional: {
            id: ie.json.id,
            minSize: In + "dp",
            maxSize: Cn + "dp"
          }
        })), In = Cn = void 0), In !== void 0 && (kn = _e(In)), Cn !== void 0 && (Fn = _e(Cn));
      }
      if (ee)
        en["valign-self"] = ee;
      else if (Ge === "parent")
        en["valign-self"] = "stretch";
      else {
        const Qr = je;
        Qr === "top" || Qr === "center" || Qr === "bottom" || Qr === "baseline" && jt.parentContainerOrientation === "horizontal" ? en["valign-self"] = $a[Qr] : en["valign-self"] = jt.parentVAlign || "start";
      }
      Ge && (en.height = Ge), e(81, et = $r), e(8, De = kn), e(9, Zt = Fn), e(83, Je = fn), e(84, rr = Jn), e(80, O = xo(en, O)), e(85, ht = Ro), e(24, Sr = Ho);
    }
    if (t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(131, re = jt.overlapParent ? !0 : void 0), t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(121, ue = jt.gridArea ? `${jt.gridArea.y + 1}/${jt.gridArea.x + 1}/span ${jt.gridArea.rowSpan}/span ${jt.gridArea.colSpan}` : void 0), t.$$.dirty[2] & /*alpha*/
    16777216 | t.$$.dirty[4] & /*$jsonAlpha*/
    65536 && (e(86, Tr = lp(Tt, Tr)), e(87, yn = Tr === 1 ? void 0 : Tr)), t.$$.dirty[0] & /*$jsonAccessibility*/
    1048576 | t.$$.dirty[1] & /*customDescription*/
    33554432 && (e(21, z = void 0), tt && !Ir)) {
      const Ge = ti(tt);
      Ge && (e(21, z = {}), e(21, z["aria-label"] = Ge, z));
    }
    if (t.$$.dirty[0] & /*hasCustomFocus, background, backgroundRadius, hasSeparateBg, $direction*/
    658464 | t.$$.dirty[4] & /*$jsonFocus, $jsonBackground*/
    49152 && (e(10, xr = Oo && (lt != null && lt.background) ? lt.background : Me), e(88, Hr = {}), e(11, nn = !1), Array.isArray(xr) && (e(11, nn = xr.some((Ge) => Ge.type === "image" || Ge.type === "nine_patch_image") || !!Vr), !nn))) {
      const Ge = al(xr, we);
      e(88, Hr["background-color"] = Ge.color, Hr), e(88, Hr["background-image"] = Ge.image, Hr), e(88, Hr["background-size"] = Ge.size, Hr), e(88, Hr["background-position"] = Ge.position, Hr), e(88, Hr["background-repeat"] = "no-repeat", Hr);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(90, Tn = void 0), Bn && ie.id && ie.json.transition_in && Xt.isRunning("stateChange") && e(90, Tn = !0)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(92, b = void 0), Bn && ie.id && Xt.isRunning("stateChange") && jr.hasTransitionChange(ie.id) && e(92, b = !0)), t.$$.dirty[0] & /*componentContext, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions*/
    61441 | t.$$.dirty[1] & /*customActions*/
    134217728) {
      const Ge = ie.json;
      let $r = Ge.actions || Ge.action && [Ge.action] || [], kn = Ge.doubletap_actions || [], Fn = Ge.longtap_actions || [], en = ((Xo = Ge.focus) == null ? void 0 : Xo.on_focus) || [], fn = ((Va = Ge.focus) == null ? void 0 : Va.on_blur) || [], Jn = Ge.press_start_actions || [], Ro = Ge.press_end_actions || [], Ho = Ge.hover_start_actions || [], mn = Ge.hover_end_actions || [];
      ie.fakeElement && ie.fakeElement !== ri ? ($r = [], kn = [], Fn = [], en = [], fn = []) : (Array.isArray($r) || ($r = [], ie.logError(K(new Error("Actions should be array")))), Array.isArray(kn) || (kn = [], ie.logError(K(new Error("DoubleTapActions should be array")))), Array.isArray(Fn) || (Fn = [], ie.logError(K(new Error("LongTapActions should be array")))), Array.isArray(en) || (en = [], ie.logError(K(new Error("FocusActions should be array")))), Array.isArray(fn) || (fn = [], ie.logError(K(new Error("BlurActions should be array")))), Array.isArray(Jn) || (Jn = [], ie.logError(K(new Error("PressStartActions should be array")))), Array.isArray(Ro) || (Ro = [], ie.logError(K(new Error("PressEndActions should be array")))), Array.isArray(Ho) || (Ho = [], ie.logError(K(new Error("HoverStartActions should be array")))), Array.isArray(mn) || (mn = [], ie.logError(K(new Error("HoverEndActions should be array"))))), ($r.length || kn.length || Fn.length || Ot.length || Bt.length || Jr.length || Mr.length) && lr && ($r = [], kn = [], Fn = [], e(12, Ot = []), e(13, Bt = []), e(14, Jr = []), e(15, Mr = []), ie.logError(K(new Error(`Cannot use action on component "${lr}"`)))), e(25, V = $r), e(26, x = kn), e(27, P = Fn), Ce = en, ye = fn, e(12, Ot = Jn), e(13, Bt = Ro), e(14, Jr = Ho), e(15, Mr = mn);
    }
    if (t.$$.dirty[0] & /*actionAnimationList*/
    65536 | t.$$.dirty[4] & /*$jsonActionAnimation*/
    8192 && q && (e(16, Br = is(q)), e(93, mo = Br.map(d_).filter(Boolean).join(", "))), t.$$.dirty[4] & /*$jsonCaptureFocusOnAction*/
    4096 && typeof nt == "boolean" && e(28, wn = nt), t.$$.dirty[3] & /*visibility, isVisibilityInited*/
    96 | t.$$.dirty[4] & /*$jsonVisibility*/
    2048) {
      const Ge = wr, $r = cp(ut, wr);
      Ge !== $r && (Ze && (wr === "visible" || $r === "visible") ? __($r) : e(99, wr = $r)), Ze || e(98, Ze = !0);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*currentNode*/
    8 | t.$$.dirty[3] & /*prevExtensionsVal*/
    256 && ie.json && d && !Ui(ie.json.extensions, Yo)) {
      let Ge = e(101, Yo = ie.json.extensions);
      Vn().then(() => {
        if (!(Ge !== Yo || !d) && (Ea(), Array.isArray(ie.json.extensions))) {
          const $r = Xt.getExtensionContext(ie);
          Ie = ie.json.extensions.map((kn) => {
            var fn;
            const Fn = kn.id;
            if (!Fn)
              return;
            const en = Xt.getExtension(Fn, kn.params);
            return en && ((fn = en.mountView) == null || fn.call(en, d, $r)), en;
          }).filter(zo);
        }
      });
    }
    if (t.$$.dirty[4] & /*activeResponsive*/
    4 && e(129, ge = Q == null ? void 0 : Q.visibility), t.$$.dirty[0] & /*hasCustomFocus, componentContext*/
    131073 | t.$$.dirty[1] & /*layoutParams*/
    16777216 | t.$$.dirty[2] & /*widthMods, heightMods, stateChangingInProgress, visibilityChangingInProgress, transitionChangeInProgress*/
    1879314432 | t.$$.dirty[3] & /*visibility, actionAnimationTransition*/
    65 | t.$$.dirty[4] & /*responsiveAlignmentHorizontal, responsiveAlignmentVertical, parentOverlapMod, responsiveVisibility*/
    184 && e(31, T = {
      ...An,
      ...O,
      ...de ? {
        "halign-self": de
      } : {},
      ...ee ? {
        "valign-self": ee
      } : {},
      "parent-overlap": re,
      "scroll-snap": jt.scrollSnap,
      "hide-on-transition-in": Tn || Lt || b,
      visibility: ge || wr,
      "has-action-animation": !!mo,
      "parent-flex": jt.parentContainerOrientation || void 0,
      "parent-grid": !!jt.gridArea || void 0,
      "has-custom-focus": !!(Oo && ie.json.focus)
    }), t.$$.dirty[4] & /*$jsonTransformations, $jsonTransform*/
    1536) {
      let Ge;
      Array.isArray(Le) ? Ge = Le : Re && Re.rotation !== void 0 && (Ge = [
        {
          type: "rotation",
          angle: Re.rotation,
          pivot_x: Re.pivot_x,
          pivot_y: Re.pivot_y
        }
      ]), Ge ? e(100, on = hp(Ge)) : e(100, on = void 0);
    }
    if (t.$$.dirty[2] & /*widthFill, heightFill, widthFlexGrow, heightFlexGrow*/
    10649600 && e(115, Y = S || ht ? "100%" : y || Je ? 0 : void 0), t.$$.dirty[0] & /*componentContext*/
    1 && e(30, le = ie.json["custom-class"] || ""), t.$$.dirty[0] & /*componentContext*/
    1 && e(113, A = ie.json.position), t.$$.dirty[0] & /*componentContext*/
    1 && e(114, D = ie.json.sticky_top), t.$$.dirty[0] & /*componentContext*/
    1 && e(112, M = ie.json.sticky_bottom), t.$$.dirty[0] & /*componentContext*/
    1 && e(111, U = ie.json.z_index), t.$$.dirty[0] & /*componentContext*/
    1 && e(110, Z = ie.json.cursor), t.$$.dirty[0] & /*componentContext*/
    1 && e(109, me = ie.json.backdrop_filter), t.$$.dirty[0] & /*componentContext*/
    1 && e(108, Ae = ie.json.overflow), t.$$.dirty[0] & /*componentContext*/
    1 && e(107, ve = ie.json["box-shadow"]), t.$$.dirty[0] & /*componentContext*/
    1 && e(116, he = ie.json.custom_transition), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(120, xe = (() => {
      if (!(Q != null && Q.paddings)) return;
      const Ge = Q.paddings;
      return po(mi(Ge, null), we);
    })()), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(118, qe = (() => {
      if (!(Q != null && Q.margins)) return;
      const Ge = Q.margins;
      return os(Ge, we, "");
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(123, Ke = (() => {
      if (Q != null && Q["max-width"] && typeof Q["max-width"] == "string")
        return Q["max-width"];
      if (!(Q != null && Q.max_width)) return;
      const Ge = Q.max_width;
      if (Ge.type === "fixed" && Ge.value) return Ge.value + "px";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(124, be = (() => {
      if (!(Q != null && Q.width)) return;
      const Ge = Q.width;
      if (Ge.type === "fixed" && Ge.value) return _e(Ge.value);
      if (Ge.type === "match_parent") return "100%";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(122, Te = (() => {
      if (!(Q != null && Q.height)) return;
      const Ge = Q.height;
      if (Ge.type === "fixed" && Ge.value) return _e(Ge.value);
      if (Ge.type === "match_parent") return "100%";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(117, pe = (Q == null ? void 0 : Q.opacity) !== void 0 ? Q.opacity : void 0), t.$$.dirty[0] & /*componentContext*/
    1 && e(125, ae = ie.json.hover), t.$$.dirty[0] & /*hoverClassName*/
    262144 | t.$$.dirty[3] & /*hoverStyleEl*/
    8192 | t.$$.dirty[4] & /*hoverConfig*/
    2)
      if (ae && typeof ae == "object" && typeof document < "u") {
        Yi || e(18, Yi = "divkit-hover-" + Math.random().toString(36).slice(2, 9));
        let Ge = "";
        ae.background_color && (Ge += `background-color: ${ae.background_color} !important;`), ae.opacity !== void 0 && (Ge += `opacity: ${ae.opacity} !important;`), ae.scale !== void 0 && (Ge += `scale: ${ae.scale} !important;`), ae.color && (Ge += `color: ${ae.color} !important;`), ae.border_color && (Ge += `border-color: ${ae.border_color} !important;`), (ae["box-shadow"] || ae.box_shadow) && (Ge += `box-shadow: ${ae["box-shadow"] || ae.box_shadow} !important;`), Ge && (lo || (e(106, lo = document.createElement("style")), document.head.appendChild(lo)), e(106, lo.textContent = `.${Yi}:hover { ${Ge} }`, lo));
      } else lo && (lo.remove(), e(106, lo = null), e(18, Yi = ""));
    t.$$.dirty[0] & /*widthMin, widthMax, componentContext, heightMin, heightMax*/
    961 | t.$$.dirty[1] & /*style*/
    8388608 | t.$$.dirty[2] & /*backgroundStyle, borderStyle, width, height, margin, opacity, widthFlexGrow, heightFlexGrow, widthFlexShrink, heightFlexShrink*/
    107587616 | t.$$.dirty[3] & /*responsiveMaxWidth, responsiveHeight, gridArea, responsivePadding, padding, responsiveMargin, responsiveOpacity, customTransition, actionAnimationTransition, transform, flexBasis, customPosition, customStickyTop, customStickyBottom, customZIndex, customCursor, customBackdropFilter, customOverflow, customBoxShadow, animationOpacityStart, animationOpacityEnd, animationScaleStart, animationScaleEnd*/
    2147467423 | t.$$.dirty[4] & /*responsiveWidth*/
    1 && e(29, ne = {
      ...vr,
      ...Hr,
      ...ke,
      width: be || Ee,
      "min-width": Yr,
      "max-width": Ke || Xr || (() => {
        const Ge = ie.json.max_width;
        if ((Ge == null ? void 0 : Ge.type) === "fixed" && (Ge != null && Ge.value)) return _e(Ge.value);
      })(),
      height: Te || et,
      "min-height": De,
      // input max-height
      "max-height": Zt || (vr == null ? void 0 : vr["max-height"]) || (() => {
        const Ge = ie.json.max_height;
        if ((Ge == null ? void 0 : Ge.type) === "fixed" && (Ge != null && Ge.value)) return _e(Ge.value);
      })(),
      "grid-area": ue,
      padding: xe || L,
      margin: qe || Pr,
      opacity: pe !== void 0 ? pe : yn,
      transition: he || mo,
      "transform-origin": on ? "0 0" : void 0,
      transform: on,
      "flex-grow": y || Je || void 0,
      "flex-shrink": C || rr ? 1 : void 0,
      "flex-basis": Y,
      position: A,
      top: A === "sticky" && D !== void 0 ? _e(D) : void 0,
      bottom: A === "sticky" && M !== void 0 ? _e(M) : void 0,
      "z-index": U,
      cursor: Z,
      "backdrop-filter": me,
      "-webkit-backdrop-filter": me,
      overflow: Ae,
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
    kt,
    B,
    Vr,
    Yr,
    Xr,
    De,
    Zt,
    xr,
    nn,
    Ot,
    Bt,
    Jr,
    Mr,
    Br,
    Oo,
    Yi,
    we,
    tt,
    z,
    Ut,
    oe,
    Sr,
    V,
    x,
    P,
    wn,
    ne,
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
    v,
    se,
    Sa,
    g_,
    h_,
    Jt,
    vr,
    jt,
    Ir,
    qr,
    lr,
    it,
    At,
    Yt,
    sr,
    ce,
    nr,
    d,
    We,
    ke,
    Ht,
    Xe,
    at,
    qt,
    pr,
    Pr,
    An,
    Ee,
    gn,
    y,
    C,
    S,
    O,
    et,
    Ft,
    Je,
    rr,
    ht,
    Tr,
    yn,
    Hr,
    Bn,
    Tn,
    Lt,
    b,
    mo,
    to,
    ro,
    Qn,
    qi,
    Ze,
    wr,
    on,
    Yo,
    jn,
    Ao,
    Bo,
    ci,
    lo,
    ve,
    Ae,
    me,
    Z,
    U,
    M,
    A,
    D,
    Y,
    he,
    pe,
    qe,
    L,
    xe,
    ue,
    Te,
    Ke,
    be,
    ae,
    Q,
    ee,
    de,
    ge,
    Se,
    re,
    n,
    Re,
    Le,
    ut,
    nt,
    q,
    Me,
    lt,
    Tt,
    je,
    Ve,
    Vt,
    Gt,
    Fe,
    tr,
    kr,
    Wt,
    _t,
    m_,
    b_,
    er
  ];
}
class hn extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      Mp,
      Tp,
      Er,
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
const Pp = "appkit-text", Np = "appkit-text_halign_start", zp = "appkit-text_halign_center", Lp = "appkit-text_halign_end", Op = "appkit-text_valign_start", Bp = "appkit-text_valign_center", Rp = "appkit-text_valign_end", Hp = "appkit-text_valign_baseline", Wp = "appkit-text__inner", Up = "appkit-text_singleline", Gp = "appkit-text_multiline", Jp = "appkit-text_truncate_none", qp = "appkit-text__inner_gradient", Kp = "appkit-text__image", Yp = "appkit-text__image_hidden", co = {
  "text-range": "appkit-text-range",
  text: Pp,
  text_halign_start: Np,
  text_halign_center: zp,
  text_halign_end: Lp,
  text_valign_start: Op,
  text_valign_center: Bp,
  text_valign_end: Rp,
  text_valign_baseline: Hp,
  text__inner: Wp,
  text_singleline: Up,
  text_multiline: Gp,
  text_truncate_none: Jp,
  "text__inner_has-cloud-bg": "appkit-text__inner_has-cloud-bg",
  "text__inner_cloud-bg": "appkit-text__inner_cloud-bg",
  text__inner_gradient: qp,
  "text__image-wrapper": "appkit-text__image-wrapper",
  "text__image-wrapper_crop": "appkit-text__image-wrapper_crop",
  "text__image-wrapper_align_top": "appkit-text__image-wrapper_align_top",
  "text__image-wrapper_align_center": "appkit-text__image-wrapper_align_center",
  "text__image-wrapper_align_bottom": "appkit-text__image-wrapper_align_bottom",
  "text__image-wrapper_align_baseline": "appkit-text__image-wrapper_align_baseline",
  text__image: Kp,
  text__image_hidden: Yp,
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
function Xp(t) {
  if (t === "light" || t === "medium" || t === "bold" || t === "regular" || t === "semi_bold")
    return t === "medium" ? 500 : t === "bold" ? 700 : t === "light" ? 300 : t === "semi_bold" ? 600 : 400;
}
function bi(t, r, e) {
  return typeof r == "number" && r > 0 ? r : Xp(t) || e;
}
function Bl(t, r) {
  if (!t)
    return {};
  const e = {};
  for (const n of ["left", "top", "right", "bottom", "start", "end"]) {
    const o = t[n];
    o && (e[n] = o * r);
  }
  return e;
}
function Li(t) {
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
function tc(t) {
  let r, e, n, o, i, s, a;
  return {
    c() {
      r = tn("svg"), e = tn("defs"), n = tn("filter"), o = tn("feGaussianBlur"), i = tn("feColorMatrix"), a = tn("feBlend"), g(o, "in", "SourceGraphic"), g(o, "result", "blurred"), g(o, "stdDeviation", "3"), g(i, "in", "blurred"), g(i, "result", "withMatrix"), g(i, "type", "matrix"), g(i, "values", s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      t[5] + " -" + /*borderRadius*/
      t[5]), g(a, "in", "SourceGraphic"), g(a, "in2", "withMatrix"), g(
        n,
        "id",
        /*cloudFilterId*/
        t[11]
      ), g(r, "class", So["text-range__cloud-svg"]);
    },
    m(l, c) {
      J(l, r, c), wt(r, e), wt(e, n), wt(n, o), wt(n, i), wt(n, a);
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
function rc(t) {
  let r;
  return {
    c() {
      r = Pe("span"), g(r, "class", So["text-range__top-offset"]), F(
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
function nc(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Pe("div"), e = Pe("div"), n = Pe("div"), o = Pe("div"), i = Pe("div"), s = Pe("div"), g(r, "class", So["text-range__mask-animation"]), g(e, "class", So["text-range__mask-animation"]), g(n, "class", So["text-range__mask-animation"]), g(o, "class", So["text-range__mask-animation"]), g(i, "class", So["text-range__mask-animation"]), g(s, "class", So["text-range__mask-animation"]);
    },
    m(a, l) {
      J(a, r, l), J(a, e, l), J(a, n, l), J(a, o, l), J(a, i, l), J(a, s, l);
    },
    d(a) {
      a && (G(r), G(e), G(n), G(o), G(i), G(s));
    }
  };
}
function Zp(t) {
  let r = (
    /*text*/
    (t[1] || "​") + ""
  ), e, n = (
    /*maskColor*/
    t[4] && nc()
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
      o[4] ? n || (n = nc(), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null), i[0] & /*text*/
      2 && r !== (r = /*text*/
      (o[1] || "​") + "") && eo(e, r);
    },
    d(o) {
      o && G(e), n && n.d(o);
    }
  };
}
function Qp(t) {
  let r, e, n, o, i = (
    /*cloudBg*/
    t[3] && /*hasCloudBg*/
    t[6] && tc(t)
  ), s = (
    /*topOffset*/
    t[9] && rc(t)
  );
  return n = new ul({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      cls: mt(
        "text-range",
        So,
        /*mods*/
        t[8]
      ),
      actions: (
        /*actions*/
        t[2]
      ),
      style: ur(
        /*style*/
        t[7]
      ),
      $$slots: { default: [Zp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      i && i.c(), r = xt(), s && s.c(), e = xt(), Rt(n.$$.fragment);
    },
    m(a, l) {
      i && i.m(a, l), J(a, r, l), s && s.m(a, l), J(a, e, l), Nt(n, a, l), o = !0;
    },
    p(a, l) {
      /*cloudBg*/
      a[3] && /*hasCloudBg*/
      a[6] ? i ? i.p(a, l) : (i = tc(a), i.c(), i.m(r.parentNode, r)) : i && (i.d(1), i = null), /*topOffset*/
      a[9] ? s ? s.p(a, l) : (s = rc(a), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null);
      const c = {};
      l[0] & /*componentContext*/
      1 && (c.componentContext = /*componentContext*/
      a[0]), l[0] & /*mods*/
      256 && (c.cls = mt(
        "text-range",
        So,
        /*mods*/
        a[8]
      )), l[0] & /*actions*/
      4 && (c.actions = /*actions*/
      a[2]), l[0] & /*style*/
      128 && (c.style = ur(
        /*style*/
        a[7]
      )), l[0] & /*text, maskColor*/
      18 | l[1] & /*$$scope*/
      64 && (c.$$scope = { dirty: l, ctx: a }), n.$set(c);
    },
    i(a) {
      o || (H(n.$$.fragment, a), o = !0);
    },
    o(a) {
      te(n.$$.fragment, a), o = !1;
    },
    d(a) {
      a && (G(r), G(e)), i && i.d(a), s && s.d(a), zt(n, a);
    }
  };
}
function xp(t, r, e) {
  let n, o, i, s, a, l, c, u, f, { componentContext: _ } = r, { text: h } = r, { rootFontSize: m } = r, { textStyles: p = {} } = r, { singleline: w = !1 } = r, { actions: k = void 0 } = r, { cloudBg: N = !1 } = r, { cloudBgId: R = "" } = r, { customLineHeight: L = null } = r;
  const re = Dr(Kr), ue = re.direction;
  bn(t, ue, (be) => e(35, f = be));
  const T = N && R || re.genId("text-range") || "";
  let Y = "none", le = 12, A = 1.25, D = "", M, U = "", Z = "", me = "", Ae, ve = null, he, Se, Q = !1, xe, qe, Ke;
  return t.$$set = (be) => {
    "componentContext" in be && e(0, _ = be.componentContext), "text" in be && e(1, h = be.text), "rootFontSize" in be && e(12, m = be.rootFontSize), "textStyles" in be && e(13, p = be.textStyles), "singleline" in be && e(14, w = be.singleline), "actions" in be && e(2, k = be.actions), "cloudBg" in be && e(3, N = be.cloudBg), "cloudBgId" in be && e(15, R = be.cloudBgId), "customLineHeight" in be && e(16, L = be.customLineHeight);
  }, t.$$.update = () => {
    var be, Te, pe, ge, de, ee, ae, ne;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && _.json && (e(17, Y = "none"), e(18, le = 12), e(19, A = 1.25), e(20, D = ""), e(21, M = void 0), e(22, U = ""), e(23, Z = ""), e(24, me = ""), e(25, Ae = void 0), e(26, ve = null), e(27, he = void 0), e(28, Se = void 0), e(29, Q = !1), e(4, xe = void 0), e(30, qe = void 0), e(31, Ke = void 0)), t.$$.dirty[0] & /*textStyles*/
    8192) {
      let we = "none";
      (p.underline || p.strike) && (p.underline === "single" && p.strike === "single" ? we = "both" : p.underline === "single" ? we = "underline" : p.strike === "single" && (we = "strike")), e(17, Y = we);
    }
    if (t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(18, le = Un(p.font_size, le)), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && Pn(p.line_height) && e(19, A = Number(p.line_height) / le), t.$$.dirty[0] & /*textStyles*/
    8192 && Mn(p.letter_spacing) && e(20, D = _e(p.letter_spacing)), t.$$.dirty[0] & /*textStyles, fontWeight*/
    2105344 && (e(21, M = bi(p.font_weight, p.font_weight_value, M)), typeof p.font_family == "string" && p.font_family ? e(22, U = re.typefaceProvider(p.font_family, { fontWeight: M || 400 })) : e(22, U = "")), t.$$.dirty[0] & /*textStyles, fontVariationSettings*/
    8396800) {
      const we = Li(p.font_variation_settings);
      we !== Z && e(23, Z = we);
    }
    if (t.$$.dirty[0] & /*textStyles, color*/
    16785408 && e(24, me = gr(p.text_color, 1, me)), t.$$.dirty[0] & /*textStyles*/
    8192 && e(9, n = p.top_offset ? _e(p.top_offset) : ""), t.$$.dirty[0] & /*textStyles*/
    8192 && e(6, o = ((be = p.background) == null ? void 0 : be.type) === "cloud"), t.$$.dirty[0] & /*textStyles*/
    8192 && e(33, i = ((Te = p.background) == null ? void 0 : Te.type) === "cloud" ? p.background.paddings : void 0), t.$$.dirty[0] & /*textStyles, cloudBg, hasCloudBg, fontSize*/
    270408 | t.$$.dirty[1] & /*$direction*/
    16) {
      const we = p.mask, Re = !!(we && (we.type === "solid" || we.type === "particles") && we.is_enabled !== !1 && we.color);
      if (N || Re ? e(25, Ae = "transparent") : e(25, Ae = void 0), e(29, Q = !1), e(4, xe = void 0), e(30, qe = void 0), e(31, Ke = void 0), N)
        o ? e(28, Se = Q_(p.background.color, 255, "transparent")) : e(28, Se = void 0);
      else if (we && Re) {
        if (we.type === "solid")
          e(28, Se = gr(we.color));
        else if (we.type === "particles") {
          const Ye = Un((pe = we.particle_size) == null ? void 0 : pe.value, 1), $ = _e(Ye * 10 / le), Le = Un(we.density, 0.8), Ne = gr(we.color);
          e(28, Se = void 0), e(4, xe = Ne), e(30, qe = $), e(31, Ke = String(Le)), e(29, Q = we.is_animated === !0);
        }
      } else ((ge = p.background) == null ? void 0 : ge.type) === "solid" ? e(28, Se = al([p.background], f).color) : e(28, Se = void 0);
    }
    t.$$.dirty[0] & /*textStyles*/
    8192 && ((de = p.border) != null && de.stroke && p.border.stroke.color && gr(p.border.stroke.color) !== "transparent" && Pn(p.border.stroke.width) && ((ee = p.background) == null ? void 0 : ee.type) !== "cloud" ? e(26, ve = {
      color: p.border.stroke.color,
      width: p.border.stroke.width,
      corner_radius: p.border.corner_radius
    }) : e(26, ve = null)), t.$$.dirty[0] & /*cloudBg, hasCloudBg, textStyles, border*/
    67117128 && e(5, s = N ? o && p.background.corner_radius || 0 : ve ? Un(ve.corner_radius, 0) : 0), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(32, a = p.text_shadow ? _p(p.text_shadow, le) : void 0), t.$$.dirty[0] & /*textStyles*/
    8192 && typeof p.baseline_offset == "number" && e(27, he = p.baseline_offset), t.$$.dirty[0] & /*textStyles*/
    8192 && e(34, l = typeof p.baseline_offset == "number" ? void 0 : p.alignment_vertical), t.$$.dirty[0] & /*singleline, decoration, hasCloudBg, customLineHeight, verticalAlign, maskColor, maskAnimated*/
    671301712 | t.$$.dirty[1] & /*customVerticalAlign*/
    8 && e(8, c = {
      singleline: w,
      decoration: Y,
      align: l,
      cloud: o,
      "relative-vertical-align": !!(L && he),
      "has-particles-mask": !!xe,
      "mask-animated": Q
    }), t.$$.dirty[0] & /*fontSize, rootFontSize, lineHeight, letterSpacing, fontWeight, fontFamily, customLineHeight, verticalAlign, cloudBg, hasCloudBg, cloudBgId, colorOverride, color, background, textStyles, border, borderRadius, fontVariationSettings, maskColor, maskSize*/
    1610461304 | t.$$.dirty[1] & /*customVerticalAlign, cloudPadding, $direction, shadow, maskDensity*/
    31 && e(7, u = {
      "font-size": _e(le * 10 / m),
      "line-height": l ? "normal" : A,
      "letter-spacing": D,
      "font-weight": M,
      "font-family": U,
      "vertical-align": L || he === void 0 ? void 0 : _e(he * 10 / le),
      top: L && he !== void 0 ? _e(-he * 10 / le) : void 0,
      margin: i ? po(Bl(i, -10 / le), f) : void 0,
      padding: i ? po(Bl(i, 10 / le), f) : void 0,
      filter: N && o && !R ? `url(#${T})` : a,
      color: Ae || me,
      background: Se,
      opacity: N && o && !R ? ((ne = (ae = _o(p.background.color)) == null ? void 0 : ae.a) != null ? ne : 255) / 255 : void 0,
      /**
      * box-shadow instead of border because:
      * 1) Doesn't take space as border does
      * 2) There should not be a border-radius on line breaks, but there should be a border
      */
      "box-shadow": ve ? `inset 0 0 0 ${_e(ve.width * 10 / le)} ${ve.color}` : void 0,
      "border-radius": s ? _e(s * 10 / le) : void 0,
      "font-feature-settings": p.font_feature_settings || void 0,
      "font-variation-settings": Z || void 0,
      "--divkit-text-mask-color": xe,
      "--divkit-text-mask-size": qe,
      "--divkit-text-mask-density": Ke
    });
  }, [
    _,
    h,
    k,
    N,
    xe,
    s,
    o,
    u,
    c,
    n,
    ue,
    T,
    m,
    p,
    w,
    R,
    L,
    Y,
    le,
    A,
    D,
    M,
    U,
    Z,
    me,
    Ae,
    ve,
    he,
    Se,
    Q,
    qe,
    Ke,
    a,
    i,
    l,
    f
  ];
}
class pa extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      xp,
      Qp,
      Er,
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
function fl(t, r, e) {
  return t === "left" || t === "center" || t === "right" || t === "start" || t === "end" ? t === "left" ? r === "ltr" ? "start" : "end" : t === "right" ? r === "ltr" ? "end" : "start" : t : e;
}
function dl(t, r) {
  return t === "top" || t === "center" || t === "bottom" || t === "baseline" ? t === "top" ? "start" : t === "bottom" ? "end" : t : r;
}
function $p(t) {
  return String(t != null ? t : "");
}
function kd(t, r) {
  return t === "source_in" || t === "source_atop" || t === "darken" || t === "lighten" || t === "multiply" || t === "screen" ? t : r;
}
function Js(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1;
}
function ga(t, r) {
  let e;
  return function(...n) {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      t.apply(this, n), e = null;
    }, r);
  };
}
function eg(t, r) {
  let e = null;
  const n = () => {
    const a = getComputedStyle(t), l = parseFloat(a.lineHeight);
    t.style.webkitLineClamp = "", t.style.maxHeight = "";
    const c = t.offsetHeight, u = t.scrollHeight;
    let f = Math.max(1, Math.floor(c / l));
    r.maxLines && r.maxLines < f && (f = r.maxLines), u > f * l + 1e-9 && (t.style.webkitLineClamp = String(f), t.style.maxHeight = l * f + "px");
  }, o = ga(n, 50), i = () => {
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
const { Boolean: vd } = Po;
function oc(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function ic(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function sc(t) {
  let r = (
    /*htmlTag*/
    t[9]
  ), e, n = (
    /*htmlTag*/
    t[9] && El(t)
  );
  return {
    c() {
      n && n.c(), e = xt();
    },
    m(o, i) {
      n && n.m(o, i), J(o, e, i);
    },
    p(o, i) {
      /*htmlTag*/
      o[9] ? r ? Er(
        r,
        /*htmlTag*/
        o[9]
      ) ? (n.d(1), n = El(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = El(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : r && (n.d(1), n = null, r = /*htmlTag*/
      o[9]);
    },
    i: j,
    o(o) {
      te(n, o);
    },
    d(o) {
      o && G(e), n && n.d(o);
    }
  };
}
function tg(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Pe("span"), e = Pe("span"), g(e, "class", n = mt("text__image-wrapper", co, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), g(e, "style", o = ur({
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
      })), g(r, "style", i = ur(
        /*item*/
        t[71].image.wrapperStyle
      ));
    },
    m(s, a) {
      J(s, r, a), wt(r, e);
    },
    p(s, a) {
      a[0] & /*renderList, customLineHeight*/
      10240 && n !== (n = mt("text__image-wrapper", co, {
        align: (
          /*item*/
          s[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          s[11] !== null
        )
      })) && g(e, "class", n), a[0] & /*renderList, customLineHeight*/
      10240 && o !== (o = ur({
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
      8192 && i !== (i = ur(
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
function rg(t) {
  let r, e, n = (
    /*item*/
    t[71].text && lc(t)
  );
  return {
    c() {
      n && n.c(), r = xt();
    },
    m(o, i) {
      n && n.m(o, i), J(o, r, i), e = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && H(n, 1)) : (n = lc(o), n.c(), H(n, 1), n.m(r.parentNode, r)) : n && (fr(), te(n, 1, 1, () => {
        n = null;
      }), dr());
    },
    i(o) {
      e || (H(n), e = !0);
    },
    o(o) {
      te(n), e = !1;
    },
    d(o) {
      o && G(r), n && n.d(o);
    }
  };
}
function lc(t) {
  let r, e;
  return r = new pa({
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
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function ac(t) {
  let r, e, n, o;
  const i = [rg, tg], s = [];
  function a(l, c) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (fr(), te(s[u], 1, 1, () => {
        s[u] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function El(t) {
  let r, e, n, o, i = ir(
    /*renderList*/
    t[13]
  ), s = [];
  for (let u = 0; u < i.length; u += 1)
    s[u] = ac(ic(t, i, u));
  const a = (u) => te(s[u], 1, 1, () => {
    s[u] = null;
  });
  let l = [
    {
      class: e = mt("text__inner", co, {
        .../*innerMods*/
        t[19],
        "cloud-bg": !0
      })
    },
    {
      style: n = ur({
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
      r = Pe(
        /*htmlTag*/
        t[9]
      );
      for (let u = 0; u < s.length; u += 1)
        s[u].c();
      ei(
        /*htmlTag*/
        t[9]
      )(r, c);
    },
    m(u, f) {
      J(u, r, f);
      for (let _ = 0; _ < s.length; _ += 1)
        s[_] && s[_].m(r, null);
      o = !0;
    },
    p(u, f) {
      if (f[0] & /*componentContext, renderList, fontSize, singleline, wholeTextCloudBgId, customLineHeight*/
      26889) {
        i = ir(
          /*renderList*/
          u[13]
        );
        let _;
        for (_ = 0; _ < i.length; _ += 1) {
          const h = ic(u, i, _);
          s[_] ? (s[_].p(h, f), H(s[_], 1)) : (s[_] = ac(h), s[_].c(), H(s[_], 1), s[_].m(r, null));
        }
        for (fr(), _ = i.length; _ < s.length; _ += 1)
          a(_);
        dr();
      }
      ei(
        /*htmlTag*/
        u[9]
      )(r, c = No(l, [
        (!o || f[0] & /*innerMods*/
        524288 && e !== (e = mt("text__inner", co, {
          .../*innerMods*/
          u[19],
          "cloud-bg": !0
        }))) && { class: e },
        (!o || f[0] & /*style, cloudPadding, wholeTextCloudBgId, wholeTextCloudBgOpacity*/
        442368 && n !== (n = ur({
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
          H(s[f]);
        o = !0;
      }
    },
    o(u) {
      s = s.filter(vd);
      for (let f = 0; f < s.length; f += 1)
        te(s[f]);
      o = !1;
    },
    d(u) {
      u && G(r), cn(s, u);
    }
  };
}
function ng(t) {
  let r, e;
  return r = new pa({
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
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function og(t) {
  let r, e, n = ir(
    /*renderList*/
    t[13]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = uc(oc(t, n, s));
  const i = (s) => te(o[s], 1, 1, () => {
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
          const c = oc(s, n, l);
          o[l] ? (o[l].p(c, a), H(o[l], 1)) : (o[l] = uc(c), o[l].c(), H(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (fr(), l = n.length; l < o.length; l += 1)
          i(l);
        dr();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          H(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(vd);
      for (let a = 0; a < o.length; a += 1)
        te(o[a]);
      e = !1;
    },
    d(s) {
      s && G(r), cn(o, s);
    }
  };
}
function ig(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, h, m = [
    { class: o = co.text__image },
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
      style: l = ur({
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
      r = Pe("span"), e = Pe("span"), n = Pe("img"), qo(n, p), g(e, "class", c = mt("text__image-wrapper", co, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), g(e, "style", u = ur({
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
      })), g(r, "style", f = ur(
        /*item*/
        t[71].image.wrapperStyle
      ));
    },
    m(w, k) {
      J(w, r, k), wt(r, e), wt(e, n), _ || (h = Qe(
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
        8192 && !Kn(n.src, i = /*item*/
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
        8192 && l !== (l = ur({
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
      10240 && c !== (c = mt("text__image-wrapper", co, {
        align: (
          /*item*/
          w[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          w[11] !== null
        )
      })) && g(e, "class", c), k[0] & /*renderList, customLineHeight*/
      10240 && u !== (u = ur({
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
      8192 && f !== (f = ur(
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
function sg(t) {
  let r, e, n = (
    /*item*/
    t[71].text && cc(t)
  );
  return {
    c() {
      n && n.c(), r = xt();
    },
    m(o, i) {
      n && n.m(o, i), J(o, r, i), e = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && H(n, 1)) : (n = cc(o), n.c(), H(n, 1), n.m(r.parentNode, r)) : n && (fr(), te(n, 1, 1, () => {
        n = null;
      }), dr());
    },
    i(o) {
      e || (H(n), e = !0);
    },
    o(o) {
      te(n), e = !1;
    },
    d(o) {
      o && G(r), n && n.d(o);
    }
  };
}
function cc(t) {
  let r, e;
  return r = new pa({
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
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function uc(t) {
  let r, e, n, o;
  const i = [sg, ig], s = [];
  function a(l, c) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (fr(), te(s[u], 1, 1, () => {
        s[u] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Sl(t) {
  let r, e, n, o, i, s, a, l, c;
  const u = [og, ng], f = [];
  function _(p, w) {
    return (
      /*renderList*/
      p[13].length ? 0 : 1
    );
  }
  e = _(t), n = f[e] = u[e](t);
  let h = [
    {
      class: o = mt(
        "text__inner",
        co,
        /*innerMods*/
        t[19]
      )
    },
    {
      style: i = ur(
        /*style*/
        t[18]
      )
    }
  ], m = {};
  for (let p = 0; p < h.length; p += 1)
    m = jo(m, h[p]);
  return {
    c() {
      r = Pe(
        /*htmlTag*/
        t[9]
      ), n.c(), ei(
        /*htmlTag*/
        t[9]
      )(r, m);
    },
    m(p, w) {
      J(p, r, w), f[e].m(r, null), a = !0, l || (c = il(s = eg.call(null, r, {
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
      e = _(p), e === k ? f[e].p(p, w) : (fr(), te(f[k], 1, 1, () => {
        f[k] = null;
      }), dr(), n = f[e], n ? n.p(p, w) : (n = f[e] = u[e](p), n.c()), H(n, 1), n.m(r, null)), ei(
        /*htmlTag*/
        p[9]
      )(r, m = No(h, [
        (!a || w[0] & /*innerMods*/
        524288 && o !== (o = mt(
          "text__inner",
          co,
          /*innerMods*/
          p[19]
        ))) && { class: o },
        (!a || w[0] & /*style*/
        262144 && i !== (i = ur(
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
      a || (H(n), a = !0);
    },
    o(p) {
      te(n), a = !1;
    },
    d(p) {
      p && G(r), f[e].d(), l = !1, c();
    }
  };
}
function lg(t) {
  let r, e = (
    /*htmlTag*/
    t[9]
  ), n, o, i = (
    /*hasCloudBg*/
    t[6] && sc(t)
  ), s = (
    /*htmlTag*/
    t[9] && Sl(t)
  );
  return {
    c() {
      i && i.c(), r = mr(), s && s.c(), n = xt();
    },
    m(a, l) {
      i && i.m(a, l), J(a, r, l), s && s.m(a, l), J(a, n, l), o = !0;
    },
    p(a, l) {
      /*hasCloudBg*/
      a[6] ? i ? (i.p(a, l), l[0] & /*hasCloudBg*/
      64 && H(i, 1)) : (i = sc(a), i.c(), H(i, 1), i.m(r.parentNode, r)) : i && (fr(), te(i, 1, 1, () => {
        i = null;
      }), dr()), /*htmlTag*/
      a[9] ? e ? Er(
        e,
        /*htmlTag*/
        a[9]
      ) ? (s.d(1), s = Sl(a), e = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : s.p(a, l) : (s = Sl(a), e = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : e && (s.d(1), s = null, e = /*htmlTag*/
      a[9]);
    },
    i(a) {
      o || (H(i), o = !0);
    },
    o(a) {
      te(i), te(s, a), o = !1;
    },
    d(a) {
      a && (G(r), G(n)), i && i.d(a), s && s.d(a);
    }
  };
}
function ag(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: mt(
        "text",
        co,
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
      $$slots: { default: [lg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Rt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods, selectable*/
      1048608 && (i.cls = mt(
        "text",
        co,
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function cg(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, re, ue, T, Y, le, A, D, M, U, Z, me = j, Ae = () => (me(), me = E(N, (At) => e(52, Z = At)), N), ve, he = j, Se = () => (he(), he = E(i, (At) => e(53, ve = At)), i), Q, xe = j, qe = () => (xe(), xe = E(o, (At) => e(54, Q = At)), o), Ke, be = j, Te = () => (be(), be = E(w, (At) => e(55, Ke = At)), w), pe, ge = j, de = () => (ge(), ge = E(p, (At) => e(56, pe = At)), p), ee, ae = j, ne = () => (ae(), ae = E(m, (At) => e(57, ee = At)), m), we, Re = j, Ye = () => (Re(), Re = E(h, (At) => e(58, we = At)), h), $, Le = j, Ne = () => (Le(), Le = E(_, (At) => e(59, $ = At)), _), ot, ut = j, rt = () => (ut(), ut = E(c, (At) => e(60, ot = At)), c), yt, nt = j, Pt = () => (nt(), nt = E(f, (At) => e(61, yt = At)), f), ft, q = j, fe = () => (q(), q = E(u, (At) => e(62, ft = At)), u), st, Me = j, I = () => (Me(), Me = E(k, (At) => e(10, st = At)), k), Ct, lt = j, St = () => (lt(), lt = E(l, (At) => e(63, Ct = At)), l), Dt, tt = j, X = () => (tt(), tt = E(a, (At) => e(64, Dt = At)), a), Et, Tt = j, $t = () => (Tt(), Tt = E(s, (At) => e(65, Et = At)), s), Kt, je = j, He = () => (je(), je = E(n, (At) => e(66, Kt = At)), n), pt, Ve = j, $e = () => (Ve(), Ve = E(R, (At) => e(67, pt = At)), R);
  t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => Le()), t.$$.on_destroy.push(() => ut()), t.$$.on_destroy.push(() => nt()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => Me()), t.$$.on_destroy.push(() => lt()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => Tt()), t.$$.on_destroy.push(() => je()), t.$$.on_destroy.push(() => Ve());
  let { componentContext: Be } = r, { layoutParams: Vt = void 0 } = r;
  const Oe = Dr(Kr), bt = Oe.direction;
  bn(t, bt, (At) => e(51, U = At));
  let Gt = "", It = 12, _r = 1.25, Fe = null, vt = "", or, tr = "", Qt = !1, hr = "start", kr = "start", Mt = "", br = "", Wt = "", _t = !1, er = [], ie = !1, yr = "", vr, jt = [], Ir = {}, qr = "span";
  function lr(At, Jt, Yt, sr) {
    var se, d;
    let dt = [];
    if (jt.forEach(([z, Ie]) => {
      Oe.removeSvgFilter(z, Ie);
    }), jt = [], !(Array.isArray(Jt) && Jt.length || Array.isArray(Yt) && Yt.length && At)) {
      e(13, er = []);
      return;
    }
    const ce = At;
    let kt = Jt || [{ start: 0, end: ce.length }], nr = Yt || [], Xt = 0, jr = [], v = [];
    kt.forEach((z) => {
      const Ie = z.start || 0, We = z.end || At.length, ke = {
        top_offset: 0,
        ...z,
        start: Ie,
        end: We
      };
      v.push({
        index: Ie,
        range: ke,
        type: "rangeStart",
        isStart: !0
      }), v.push({
        index: We,
        range: ke,
        type: "rangeEnd"
      });
    }), nr.forEach((z, Ie) => {
      z.start !== void 0 && z.url && z.start <= ce.length && v.push({
        index: z.indexing_direction === "reversed" ? At.length - z.start : z.start,
        image: z,
        type: "image",
        arrayIndex: Ie
      });
    }), v.sort((z, Ie) => z.index === Ie.index ? z.type !== Ie.type ? z.type === "image" ? -1 : Ie.type === "image" ? 1 : z.type < Ie.type ? -1 : 1 : z.type === "image" && Ie.type === "image" ? Ie.arrayIndex - z.arrayIndex : z.type === "rangeStart" && Ie.type === "rangeStart" ? z.range.end - Ie.range.end : z.type === "rangeStart" ? 1 : Ie.type === "rangeStart" ? -1 : z.type !== "image" && Ie.type !== "image" ? z.range.start - Ie.range.start : 0 : z.index - Ie.index), v.forEach((z) => {
      var ke, B, Ut, Ht;
      let Ie = z.type === "image" ? null : z.range, We = z.index;
      if (We > Xt) {
        let Xe = Object.assign({ ...sr }, ...jr);
        jr.length && jr[jr.length - 1].start !== Xt && (Xe.top_offset = 0), dt.push({
          text: ce.substring(Xt, We),
          textStyles: Xe,
          actions: z.type === "rangeEnd" && ((B = (ke = z.range) == null ? void 0 : ke.actions) == null ? void 0 : B.filter(Js)) || void 0
        });
      }
      if (z.type === "rangeStart" && Ie)
        jr.push(Ie);
      else if (z.type === "rangeEnd")
        jr = jr.filter((Xe) => Xe !== z.range);
      else if (z.type === "image") {
        let Xe = Object.assign({ ...sr }, ...jr), at = _e((z.image.width && z.image.width.value || 20) * 10 / (Xe.font_size || 12)), qt = _e((z.image.height && z.image.height.value || 20) * 10 / (Xe.font_size || 12));
        const Vr = {
          "font-size": _e((Number(Xe.font_size) || 12) * 10 / It)
        };
        let pr = "";
        const Pr = z.image.tint_color, An = kd(z.image.tint_mode, "source_in");
        if (Pr) {
          const gn = gr(z.image.tint_color);
          pr = Oe.addSvgFilter(gn, An), jt.push([gn, An]);
        }
        const Ee = {}, Yr = (Ut = z.image.accessibility) == null ? void 0 : Ut.type, Xr = ((Ht = z.image.accessibility) == null ? void 0 : Ht.description) || "";
        (Yr === "button" || Yr === "image") && Xr ? Ee.role = Yr : (!Xr || Yr === "none") && (Ee["aria-hidden"] = "true"), dt.push({
          image: {
            url: z.image.url,
            width: at,
            height: qt,
            wrapperStyle: Vr,
            svgFilterId: pr,
            preloadRequired: !!z.image.preload_required,
            verticalAlign: z.image.alignment_vertical,
            description: Xr,
            a11yAttrs: Ee
          }
        });
      }
      Xt = We;
    }), Xt < ce.length && dt.push({
      text: ce.substring(Xt),
      textStyles: { ...sr }
    }), e(13, er = dt), e(6, ie = dt.some((z) => {
      var Ie;
      return "text" in z && ((Ie = z.textStyles.background) == null ? void 0 : Ie.type) === "cloud";
    })), e(14, yr = ie && dt.length === 1 ? Oe.genId("text-whole-bg") : ""), e(15, vr = yr ? ((d = (se = _o(dt[0].textStyles.background.color)) == null ? void 0 : se.a) != null ? d : 255) / 255 : void 0);
  }
  function it(At) {
    At.target && "classList" in At.target && At.target.classList.add(co.text__image_hidden);
  }
  return ln(() => {
    jt.forEach(([At, Jt]) => {
      Oe.removeSvgFilter(At, Jt);
    });
  }), t.$$set = (At) => {
    "componentContext" in At && e(0, Be = At.componentContext), "layoutParams" in At && e(1, Vt = At.layoutParams);
  }, t.$$.update = () => {
    var At, Jt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && Be.json && (e(3, It = 12), e(40, _r = 1.25), e(11, Fe = null), e(41, vt = ""), e(12, or = void 0), e(4, tr = ""), e(42, Qt = !1), e(43, hr = "start"), e(44, kr = "start"), e(45, Mt = ""), e(47, Wt = ""), e(5, _t = !1)), t.$$.dirty[0] & /*componentContext*/
    1 && He(e(37, n = Be.getDerivedFromVars(Be.json.text))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(36, o = Be.getDerivedFromVars(Be.json.ranges, void 0, !0, 3))), t.$$.dirty[0] & /*componentContext*/
    1 && Se(e(35, i = Be.getDerivedFromVars(Be.json.images))), t.$$.dirty[0] & /*componentContext*/
    1 && $t(e(34, s = Be.getDerivedFromVars(
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
    1 && X(e(33, a = Be.getDerivedFromVars(Be.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && St(e(32, l = Be.getDerivedFromVars(Be.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && rt(e(31, c = Be.getDerivedFromVars(Be.json.max_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(30, u = Be.getDerivedFromVars(Be.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Pt(e(29, f = Be.getDerivedFromVars(Be.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Ne(e(28, _ = Be.getDerivedFromVars(Be.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(27, h = Be.getDerivedFromVars(Be.json.focused_text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(26, m = Be.getDerivedFromVars(Be.json.truncate))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(25, p = Be.getDerivedFromVars(Be.json.text_gradient))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(24, w = Be.getDerivedFromVars(Be.json.selectable))), t.$$.dirty[0] & /*componentContext*/
    1 && I(e(23, k = Be.getDerivedFromVars(Be.json.auto_ellipsize))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(22, N = Be.getDerivedFromVars(Be.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && $e(e(21, R = Be.getDerivedFromVars(Be.json.heading_type))), t.$$.dirty[2] & /*$jsonHeadingType*/
    32 && e(9, L = (() => {
      const Yt = pt;
      if (Yt && typeof Yt == "string") {
        const sr = Yt.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(sr))
          return sr;
      }
      return "span";
    })()), t.$$.dirty[0] & /*htmlTag*/
    512 && e(16, qr = L !== "span" ? "div" : "span"), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonText*/
    16 && (typeof Be.json.text == "string" ? e(2, Gt = $p(Kt)) : (e(2, Gt = ""), Be.logError(K(new Error("Incorrect text value type"))))), t.$$.dirty[1] & /*$jsonTextGradient, $direction*/
    34603008) {
      let Yt = "";
      if (pe) {
        const sr = al([pe], U);
        sr.image && (Yt = sr.image);
      }
      e(47, Wt = Yt);
    }
    if (t.$$.dirty[1] & /*gradient*/
    65536 | t.$$.dirty[2] & /*$jsonRootTextStyles*/
    8 && e(7, Ir = Wt ? { ...Et, text_color: "" } : Et), t.$$.dirty[0] & /*fontSize, componentContext*/
    9 | t.$$.dirty[2] & /*$jsonTextSize*/
    4) {
      e(3, It = Un(Dt, It));
      const Yt = Be.json.responsive;
      if (Yt && typeof Yt == "object" && typeof window < "u") {
        const sr = window.matchMedia("(max-width: 767px)").matches, dt = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
        sr && ((At = Yt.mobile) != null && At.font_size) ? e(3, It = Yt.mobile.font_size) : dt && ((Jt = Yt.tablet) != null && Jt.font_size) && e(3, It = Yt.tablet.font_size);
      }
    }
    if (t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*lineHeight*/
    512 | t.$$.dirty[2] & /*$jsonLineHeight*/
    2) {
      const Yt = Ct;
      Pn(Yt) ? (e(40, _r = Number(Yt) / It), e(11, Fe = _r)) : e(11, Fe = null);
    }
    if (t.$$.dirty[1] & /*$jsonMaxLines*/
    536870912 && e(8, re = ot === 1), t.$$.dirty[0] & /*$jsonAutoEllipsize*/
    1024 | t.$$.dirty[1] & /*$jsonMaxLines, lineHeight*/
    536871424) {
      let Yt = "", sr, dt = "", ce = !1;
      if (ot && ot > 1) {
        const kt = Number(ot);
        Yt = kt * _r + "em", sr = kt, dt = kt, ce = !0;
      } else st && ot !== 1 && (ce = !0);
      e(41, vt = Yt), e(12, or = sr), e(4, tr = dt), e(42, Qt = ce);
    }
    if (t.$$.dirty[1] & /*$direction, halign*/
    1052672 | t.$$.dirty[2] & /*$jsonHAlign*/
    1 && e(43, hr = fl(ft, U, hr)), t.$$.dirty[1] & /*$jsonVAlign, valign*/
    1073750016 && e(44, kr = dl(yt, kr)), t.$$.dirty[0] & /*text*/
    4 | t.$$.dirty[1] & /*$jsonRanges*/
    8388608 && e(50, ue = !Q || Gt && Q.length === 1 && Q[0] && (!Q[0].start || Q[0].start === 0) && (!Q[0].end || typeof Q[0].end == "number" && Q[0].end >= Gt.length)), t.$$.dirty[1] & /*gradient, $jsonTextColor, $jsonRanges*/
    276889600 && e(49, T = !!(!Wt && $) != !!(Q && Q[0] && Q[0].text_color)), t.$$.dirty[1] & /*$jsonMaxLines, isAllTextSameColor, isOnlyOneColorDefined, $jsonTextColor, $jsonRanges, rootTextColor*/
    814497792) {
      let Yt = "";
      ot && ue && T && (Yt = gr($ || Q && Q[0] && Q[0].text_color, 1, Mt)), e(45, Mt = Yt);
    }
    t.$$.dirty[1] & /*$jsonFocusTextColor, focusTextColor*/
    134250496 && e(46, br = gr(we, 1, br)), t.$$.dirty[1] & /*$jsonTruncate*/
    67108864 && e(48, Y = ee === "none" ? "none" : ""), t.$$.dirty[0] & /*selectable*/
    32 | t.$$.dirty[1] & /*$jsonSelectable*/
    16777216 && e(5, _t = sn(Ke, _t)), t.$$.dirty[0] & /*text, rootTextStyles*/
    132 | t.$$.dirty[1] & /*$jsonRanges, $jsonImages*/
    12582912 && lr(Gt, Q, ve, Ir), t.$$.dirty[0] & /*singleline*/
    256 | t.$$.dirty[1] & /*multiline, halign, valign, truncate, focusTextColor*/
    178176 && e(20, le = {
      singleline: re,
      multiline: Qt,
      halign: hr,
      valign: kr,
      truncate: Y,
      "has-focus-color": !!br
    }), t.$$.dirty[0] & /*hasCloudBg*/
    64 | t.$$.dirty[1] & /*gradient*/
    65536 && e(19, A = {
      gradient: !!Wt,
      "has-cloud-bg": ie
    }), t.$$.dirty[0] & /*fontSize, lineClamp*/
    24 | t.$$.dirty[1] & /*lineHeight, maxHeight, rootTextColor, gradient, focusTextColor*/
    116224 && e(18, D = {
      "font-size": _e(It),
      "line-height": _r,
      "max-height": vt,
      "-webkit-line-clamp": tr,
      color: Mt,
      "background-image": Wt,
      "--divkit-text-focus-color": br
    }), t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*$jsonPaddings, $direction*/
    3145728 && e(17, M = po(Bl(mi(Z, {}) || {}, 10 / It), U));
  }, [
    Be,
    Vt,
    Gt,
    It,
    tr,
    _t,
    ie,
    Ir,
    re,
    L,
    st,
    Fe,
    or,
    er,
    yr,
    vr,
    qr,
    M,
    D,
    A,
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
    bt,
    it,
    _r,
    vt,
    Qt,
    hr,
    kr,
    Mt,
    br,
    Wt,
    Y,
    T,
    ue,
    U,
    Z,
    ve,
    Q,
    Ke,
    pe,
    ee,
    we,
    $,
    ot,
    yt,
    ft,
    Ct,
    Dt,
    Et,
    Kt,
    pt
  ];
}
class ug extends Or {
  constructor(r) {
    super(), Lr(this, r, cg, ag, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const fg = "appkit-container", dg = "appkit-container_wrap", _g = "appkit-container_overflow_visible", pg = "appkit-container_orientation_vertical", gg = "appkit-container_valign_start", hg = "appkit-container_valign_center", mg = "appkit-container_valign_end", bg = "appkit-container_halign_start", yg = "appkit-container_halign_center", wg = "appkit-container_halign_end", kg = "appkit-container_orientation_horizontal", vg = "appkit-container_orientation_overlap", fc = {
  container: fg,
  container_wrap: dg,
  container_overflow_visible: _g,
  container_orientation_vertical: pg,
  container_valign_start: gg,
  container_valign_center: hg,
  container_valign_end: mg,
  "container_valign_space-between": "appkit-container_valign_space-between",
  "container_valign_space-around": "appkit-container_valign_space-around",
  "container_valign_space-evenly": "appkit-container_valign_space-evenly",
  container_halign_start: bg,
  container_halign_center: yg,
  container_halign_end: wg,
  "container_halign_space-between": "appkit-container_halign_space-between",
  "container_halign_space-around": "appkit-container_halign_space-around",
  "container_halign_space-evenly": "appkit-container_halign_space-evenly",
  container_orientation_horizontal: kg,
  container_orientation_overlap: vg,
  "container_fixed-container": "appkit-container_fixed-container",
  "container_responsive-mobile-vertical": "appkit-container_responsive-mobile-vertical",
  "container_responsive-mobile-horizontal": "appkit-container_responsive-mobile-horizontal",
  "container_responsive-mobile-has-height": "appkit-container_responsive-mobile-has-height",
  "container_responsive-tablet-vertical": "appkit-container_responsive-tablet-vertical",
  "container_responsive-tablet-horizontal": "appkit-container_responsive-tablet-horizontal",
  "container_responsive-tablet-has-height": "appkit-container_responsive-tablet-has-height"
};
function dc(t) {
  return {
    top: Number(t == null ? void 0 : t.top) || 0,
    right: Number(t == null ? void 0 : t.right) || 0,
    bottom: Number(t == null ? void 0 : t.bottom) || 0,
    left: Number(t == null ? void 0 : t.left) || 0
  };
}
function _c(t, r, e) {
  const n = ((r == null ? void 0 : r.margins.left) || 0) + ((r == null ? void 0 : r.margins.right) || 0), o = ((r == null ? void 0 : r.margins.top) || 0) + ((r == null ? void 0 : r.margins.bottom) || 0);
  r != null && r.show_at_start && (e ? t.top = r.style.height + o : t.left = r.style.width + n), r != null && r.show_at_end && (e ? t.bottom = r.style.height + o : t.right = r.style.width + n);
}
function jg(t, r, e) {
  const n = {};
  return _c(n, r, t === "vertical"), _c(n, e, t === "horizontal"), n;
}
function Cg({
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
  ], i.map(_e).join(" ");
}
function Ag(t) {
  var e;
  const r = (e = t.width) == null ? void 0 : e.type;
  return r !== "wrap_content" && r !== "fixed";
}
function Eg(t) {
  var e;
  return ((e = t.height) == null ? void 0 : e.type) === "match_parent";
}
function Sg(t, r) {
  return t === "vertical" || t === "horizontal" || t === "overlap" ? t : r;
}
function Vg(t) {
  var r, e, n;
  return {
    width: rn((r = t.item_width) == null ? void 0 : r.value, 10),
    height: rn((e = t.item_height) == null ? void 0 : e.value, 10),
    radius: rn((n = t.corner_radius) == null ? void 0 : n.value, 5)
  };
}
function Fg(t) {
  var e;
  const r = rn((e = t.radius) == null ? void 0 : e.value, 10) * 2;
  return {
    width: r,
    height: r,
    radius: r
  };
}
function Ig(t, r, e) {
  var l;
  const n = {}, o = r.stroke || (e == null ? void 0 : e.stroke), i = o != null && o.color ? gr(o.color) : "", s = o != null && o.width ? Number((l = o.width) != null ? l : 1) : "";
  n.width = t.width, n.height = t.height, n.borderRadius = t.radius;
  const a = r.background_color || (e == null ? void 0 : e.color);
  return n.background = gr(a), i && s && (n.boxShadow = `inset 0 0 0 ${_e(s)} ${i}`), n;
}
function ao(t, r, e) {
  if (!t || !t.shape || !t.shape.type || !r.includes(t.shape.type) || t.type !== "shape_drawable")
    return e;
  let n;
  if (t.shape.type === "rounded_rectangle")
    n = Vg(t.shape);
  else if (t.shape.type === "circle")
    n = Fg(t.shape);
  else
    return e;
  return Ig(n, t.shape, {
    color: t.color,
    stroke: t.stroke
  });
}
let $i;
function pc() {
  if (typeof document > "u" && ($i = !0), $i !== void 0)
    return $i;
  const t = document.createElement("div");
  return t.style.position = "absolute", t.style.display = "flex", t.style.flexDirection = "column", t.style.gap = "1px", t.appendChild(document.createElement("div")), t.appendChild(document.createElement("div")), document.body.appendChild(t), $i = t.scrollHeight === 1, document.body.removeChild(t), $i;
}
function Dg(t, r) {
  return t === "top" || t === "center" || t === "bottom" || t === "baseline" || t === "space-between" || t === "space-around" || t === "space-evenly" ? t === "top" ? "start" : t === "bottom" ? "end" : t : r;
}
function Tg(t, r, e) {
  return t === "left" || t === "center" || t === "right" || t === "space-between" || t === "space-around" || t === "space-evenly" || t === "start" || t === "end" ? t === "left" ? r === "ltr" ? "start" : "end" : t === "right" ? r === "ltr" ? "end" : "start" : t : e;
}
function Mg() {
}
function Jo(t) {
  return {
    subscribe(r) {
      return r(t), Mg;
    }
  };
}
function _l(t, r, e, n) {
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
const ss = {
  "container-separator": "appkit-container-separator",
  "container-separator__item": "appkit-container-separator__item",
  "container-separator__shape": "appkit-container-separator__shape"
};
function Pg(t, r) {
  let e = 0, n, o = !1;
  return function() {
    const i = Date.now();
    return !e || Math.abs(i - e) > r ? (e = i, n = t.apply(this, arguments)) : (o || (o = !0, setTimeout(() => {
      o = !1, n = t.apply(this, arguments);
    }, r)), n);
  };
}
function Ng(t) {
  const r = t.getBoundingClientRect(), e = getComputedStyle(t);
  return {
    top: r.top - parseFloat(e.marginTop),
    right: r.right + parseFloat(e.marginRight),
    bottom: r.bottom + parseFloat(e.marginBottom),
    left: r.left - parseFloat(e.marginLeft)
  };
}
const { window: zg } = Po;
function gc(t, r, e) {
  const n = t.slice();
  return n[16] = r[e], n;
}
function hc(t) {
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
      r = Pe("div"), e = Pe("div"), s = mr(), g(e, "class", ss["container-separator__shape"]), F(e, "width", n), F(e, "height", o), F(e, "border-radius", i), F(
        e,
        "background",
        /*item*/
        t[16].style.background
      ), F(
        e,
        "box-shadow",
        /*item*/
        t[16].style.boxShadow
      ), g(r, "class", ss["container-separator__item"]), F(r, "left", a), F(r, "top", l), F(r, "width", c), F(r, "height", u);
    },
    m(f, _) {
      J(f, r, _), wt(r, e), wt(r, s);
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
function Lg(t) {
  let r, e, n, o = ir(
    /*separators*/
    t[1]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = hc(gc(t, o, s));
  return {
    c() {
      r = Pe("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      g(r, "class", ss["container-separator"]);
    },
    m(s, a) {
      J(s, r, a);
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, null);
      t[13](r), e || (n = Qe(
        zg,
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
          const c = gc(s, o, l);
          i[l] ? i[l].p(c, a) : (i[l] = hc(c), i[l].c(), i[l].m(r, null));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = o.length;
      }
    },
    i: j,
    o: j,
    d(s) {
      s && G(r), cn(i, s), t[13](null), e = !1, n();
    }
  };
}
const Og = 10;
function Vl(t, r, e, n, o, i) {
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
function mc(t, r, e, n, o, i) {
  const s = {
    top: Math.min(...e.map((a) => a.top)),
    right: Math.max(...e.map((a) => a.right)),
    bottom: Math.max(...e.map((a) => a.bottom)),
    left: Math.min(...e.map((a) => a.left))
  };
  if (r != null && r.show_at_start) {
    let a, l;
    o === "space-around" || o === "space-evenly" ? (a = i.left - r.style.width, l = i.top - r.style.height) : (a = e[0].left - r.style.width - r.margins.left - r.margins.right, l = e[0].top - r.style.height - r.margins.top - r.margins.bottom), Vl(
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
      Vl(t, r, e[a], e[a + 1], s, n);
  if (r != null && r.show_at_end) {
    const a = e[e.length - 1];
    let l, c;
    o === "space-around" || o === "space-evenly" ? (l = i.bottom + r.style.height, c = i.right + r.style.width) : (l = a.bottom + r.style.height + r.margins.top + r.margins.bottom, c = a.right + r.style.width + r.margins.left + r.margins.right), Vl(
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
function Bg(t, r, e) {
  let n, { orientation: o } = r, { separator: i } = r, { lineSeparator: s } = r, { contentHAlign: a } = r, { contentVAlign: l } = r, { direction: c } = r;
  const u = Pg(k, Og);
  let f = [], _, h = !1, m = null, p = null;
  function w(R) {
    R.some((L) => {
      var ue;
      const re = (ue = L.target) == null ? void 0 : ue.classList;
      return !(re != null && re.contains(ss["container-separator__shape"])) && !(re != null && re.contains(ss["container-separator"]));
    }) && u();
  }
  function k() {
    if (!n)
      return;
    const R = n.getBoundingClientRect(), L = window.getComputedStyle(n), re = {
      top: R.top + parseFloat(L.paddingTop),
      right: R.right - parseFloat(L.paddingRight),
      bottom: R.bottom - parseFloat(L.paddingBottom),
      left: R.left + parseFloat(L.paddingLeft)
    };
    e(1, f = []);
    let ue = [...n.children].filter((le) => le !== _ && le instanceof HTMLElement && !le.classList.contains(Gs.outer__border) && getComputedStyle(le).display !== "none"), T = [];
    for (; ue.length; ) {
      const le = [], A = ue.shift();
      le.push(A);
      let D = A.getBoundingClientRect(), M = D.left, U = D.right, Z = D.bottom;
      for (; ue.length; ) {
        let me = ue[0], Ae = me.getBoundingClientRect();
        if (o === "vertical") {
          if (Ae.top < Z)
            break;
        } else if (c === "ltr" ? Ae.left < U : Ae.right > M)
          break;
        U = Math.max(U, Ae.right), M = Math.min(M, Ae.left), Z = Math.max(Z, Ae.bottom), le.push(me), ue.shift();
      }
      T.push(le);
    }
    const Y = [];
    T.forEach((le) => {
      const A = le.map((M) => Ng(M));
      c === "rtl" && o === "horizontal" && A.reverse(), i && mc(
        f,
        i,
        A,
        o === "vertical",
        o === "vertical" ? l : a,
        re
      );
      const D = {
        top: Math.min(...A.map((M) => M.top)),
        right: Math.max(...A.map((M) => M.right)),
        bottom: Math.max(...A.map((M) => M.bottom)),
        left: Math.min(...A.map((M) => M.left))
      };
      Y.push(D);
    }), c === "rtl" && o === "vertical" && Y.reverse(), s && mc(
      f,
      s,
      Y,
      o === "horizontal",
      o === "vertical" ? a : l,
      re
    ), f.forEach((le) => {
      le.top -= R.top, le.left -= R.left;
    });
  }
  Xn(() => {
    e(9, h = !0);
  }), ln(() => {
    e(9, h = !1);
  });
  function N(R) {
    Fr[R ? "unshift" : "push"](() => {
      _ = R, e(0, _);
    });
  }
  return t.$$set = (R) => {
    "orientation" in R && e(3, o = R.orientation), "separator" in R && e(4, i = R.separator), "lineSeparator" in R && e(5, s = R.lineSeparator), "contentHAlign" in R && e(6, a = R.contentHAlign), "contentVAlign" in R && e(7, l = R.contentVAlign), "direction" in R && e(8, c = R.direction);
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
    N
  ];
}
class Rg extends Or {
  constructor(r) {
    super(), Lr(this, r, Bg, Lg, Er, {
      orientation: 3,
      separator: 4,
      lineSeparator: 5,
      contentHAlign: 6,
      contentVAlign: 7,
      direction: 8
    });
  }
}
const { Boolean: Hg } = Po;
function bc(t, r, e) {
  const n = t.slice();
  return n[63] = r[e], n;
}
function yc(t) {
  let r, e;
  return r = new Zn({
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
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function wc(t) {
  let r, e;
  return r = new Rg({
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
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function Wg(t) {
  let r, e, n, o = ir(
    /*items*/
    t[9]
  ), i = [];
  for (let l = 0; l < o.length; l += 1)
    i[l] = yc(bc(t, o, l));
  const s = (l) => te(i[l], 1, 1, () => {
    i[l] = null;
  });
  let a = (
    /*separator*/
    (t[5] || /*lineSeparator*/
    t[6]) && wc(t)
  );
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      r = mr(), a && a.c(), e = xt();
    },
    m(l, c) {
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(l, c);
      J(l, r, c), a && a.m(l, c), J(l, e, c), n = !0;
    },
    p(l, c) {
      if (c[0] & /*items, childLayoutParams*/
      768) {
        o = ir(
          /*items*/
          l[9]
        );
        let u;
        for (u = 0; u < o.length; u += 1) {
          const f = bc(l, o, u);
          i[u] ? (i[u].p(f, c), H(i[u], 1)) : (i[u] = yc(f), i[u].c(), H(i[u], 1), i[u].m(r.parentNode, r));
        }
        for (fr(), u = o.length; u < i.length; u += 1)
          s(u);
        dr();
      }
      /*separator*/
      l[5] || /*lineSeparator*/
      l[6] ? a ? (a.p(l, c), c[0] & /*separator, lineSeparator*/
      96 && H(a, 1)) : (a = wc(l), a.c(), H(a, 1), a.m(e.parentNode, e)) : a && (fr(), te(a, 1, 1, () => {
        a = null;
      }), dr());
    },
    i(l) {
      if (!n) {
        for (let c = 0; c < o.length; c += 1)
          H(i[c]);
        H(a), n = !0;
      }
    },
    o(l) {
      i = i.filter(Hg);
      for (let c = 0; c < i.length; c += 1)
        te(i[c]);
      te(a), n = !1;
    },
    d(l) {
      l && (G(r), G(e)), cn(i, l), a && a.d(l);
    }
  };
}
function Ug(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: mt(
        "container",
        fc,
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
      $$slots: { default: [Wg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Rt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = mt(
        "container",
        fc,
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
const Gg = {
  start: "start",
  center: "center",
  end: "end",
  // 'space-*' values doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, Jg = {
  start: "start",
  center: "center",
  end: "end",
  baseline: "baseline",
  // 'space-*' doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, kc = ["rounded_rectangle", "circle"];
function qg(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, re, ue, T, Y, le, A, D, M = j, U = () => (M(), M = E(k, (_t) => e(45, D = _t)), k), Z, me = j, Ae = () => (me(), me = E(R, (_t) => e(46, Z = _t)), R), ve, he = j, Se = () => (he(), he = E(N, (_t) => e(47, ve = _t)), N), Q, xe = j, qe = () => (xe(), xe = E(w, (_t) => e(48, Q = _t)), w), Ke, be = j, Te = () => (be(), be = E(p, (_t) => e(49, Ke = _t)), p), pe, ge = j, de = () => (ge(), ge = E(m, (_t) => e(50, pe = _t)), m), ee, ae = j, ne = () => (ae(), ae = E(f, (_t) => e(51, ee = _t)), f), we, Re = j, Ye = () => (Re(), Re = E(u, (_t) => e(52, we = _t)), u), $, Le = j, Ne = () => (Le(), Le = E(h, (_t) => e(53, $ = _t)), h), ot, ut = j, rt = () => (ut(), ut = E(_, (_t) => e(54, ot = _t)), _), yt, nt, Pt = j, ft = () => (Pt(), Pt = E(c, (_t) => e(55, nt = _t)), c), q, fe = j, st = () => (fe(), fe = E(l, (_t) => e(56, q = _t)), l), Me, I = j, Ct = () => (I(), I = E($e, (_t) => e(57, Me = _t)), $e), lt, St = j, Dt = () => (St(), St = E(a, (_t) => e(58, lt = _t)), a), tt, X = j, Et = () => (X(), X = E(s, (_t) => e(59, tt = _t)), s), Tt, $t = j, Kt = () => ($t(), $t = E(i, (_t) => e(60, Tt = _t)), i);
  t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => Le()), t.$$.on_destroy.push(() => ut()), t.$$.on_destroy.push(() => Pt()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => St()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => $t());
  let { componentContext: je } = r, { layoutParams: He = void 0 } = r;
  const pt = Dr(Kr), Ve = pt.direction;
  bn(t, Ve, (_t) => e(10, yt = _t));
  let $e, Be = "vertical", Vt = "start", Oe = "start", bt = null, Gt = null, It, _r = {}, Fe = 0, vt = 0, or = !1;
  function tr() {
    e(2, Be = "vertical"), e(3, Vt = "start"), e(4, Oe = "start"), e(7, It = void 0), e(32, Fe = 0), e(33, vt = 0), e(34, or = !1);
  }
  function Qt(_t) {
    e(0, je = e(35, kr = {
      ...je,
      json: {
        ...je.json,
        items: _t.filter(zo)
      }
    }));
  }
  let hr = [], kr, Mt = {}, br, Wt;
  return ln(() => {
    hr.forEach((_t) => {
      _t.destroy();
    });
  }), t.$$set = (_t) => {
    "componentContext" in _t && e(0, je = _t.componentContext), "layoutParams" in _t && e(1, He = _t.layoutParams);
  }, t.$$.update = () => {
    var _t, er, ie, yr, vr, jt, Ir, qr, lr, it, At;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(44, n = je.origJson), t.$$.dirty[1] & /*origJson*/
    8192 && n && tr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(43, o = je.json.items), t.$$.dirty[0] & /*componentContext*/
    1 && Kt(e(29, i = typeof ((_t = je.json.item_builder) == null ? void 0 : _t.data) == "string" ? je.getDerivedFromVars((er = je.json.item_builder) == null ? void 0 : er.data, void 0, !0) : (ie = je.json.item_builder) != null && ie.data ? Jo(je.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && Et(e(28, s = je.getDerivedFromVars(je.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(27, a = je.getDerivedFromVars(je.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(26, l = je.getDerivedFromVars(je.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(25, c = je.getDerivedFromVars(je.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(24, u = je.getDerivedFromVars(je.json.separator))), t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(23, f = je.getDerivedFromVars(je.json.line_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && rt(e(22, _ = je.getDerivedFromVars(je.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Ne(e(21, h = je.getDerivedFromVars(je.json.line_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(20, m = je.getDerivedFromVars(je.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(19, p = je.getDerivedFromVars(je.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(18, w = je.getDerivedFromVars(je.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && U(e(17, k = je.getDerivedFromVars(je.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && Se(e(16, N = je.getDerivedFromVars(je.json.max_width))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(15, R = je.getDerivedFromVars(je.json.responsive))), t.$$.dirty[0] & /*componentContext, items*/
    513 | t.$$.dirty[1] & /*$jsonItemBuilderData, jsonItems, prevContext*/
    536875024) {
      let Jt = [];
      if (je.json.item_builder && Array.isArray(Tt) && Array.isArray(je.json.item_builder.prototypes)) {
        const ce = je.json.item_builder;
        Jt = _l(Tt, pt, je, ce);
      } else
        Jt = (Array.isArray(o) && o || []).map((ce, kt) => ({
          div: ce,
          key: ce.id || { index: kt, data: ce }
        }));
      const Yt = new Set(hr), sr = /* @__PURE__ */ new Map();
      let dt = !1;
      kr === je && hr.forEach((ce) => {
        ce.key && (typeof ce.key == "string" && sr.has(ce.key) ? dt || (dt = !0, je.logError(K(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: ce.key } }))) : sr.set(
          typeof ce.key == "string" ? ce.key : ce.key.index,
          ce
        ));
      }), e(9, hr = Jt.map((ce, kt) => {
        let nr = !dt && sr.get(ce.id), Xt = sr.get(kt);
        return !nr && !ce.id && typeof ce.key == "object" && typeof (Xt == null ? void 0 : Xt.key) == "object" && Ui(Xt.key.data, ce.key.data) && (nr = Xt), nr ? (Yt.delete(nr), nr) : je.produceChildContext(ce.div, {
          path: kt,
          variables: ce.vars,
          id: ce.id,
          key: ce.key
        });
      }));
      for (const ce of Yt)
        ce.destroy();
      e(35, kr = je);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    513) {
      let Jt = [];
      hr.forEach((Yt) => {
        Jt.push(je.getDerivedFromVars({
          width: Yt.json.width,
          height: Yt.json.height
        }));
      }), Ct(e(11, $e = Wi(Jt, (Yt) => [...Yt])));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonOrientation*/
    268435456 && e(2, Be = Sg(tt, Be)), t.$$.dirty[1] & /*$jsonLayoutMode*/
    134217728 && e(38, L = lt === "wrap"), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(42, re = Be !== "horizontal" && !L), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(41, ue = Be !== "vertical" && !L), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(40, T = Be === "overlap" && !Me.every(Ag)), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(39, Y = Be === "overlap" && !Me.every(Eg)), t.$$.dirty[0] & /*contentVAlign*/
    8 | t.$$.dirty[1] & /*$jsonContentVAlign*/
    33554432 && e(3, Vt = Dg(q, Vt)), t.$$.dirty[0] & /*$direction, contentHAlign*/
    1040 | t.$$.dirty[1] & /*$jsonContentHAlign*/
    16777216 && e(4, Oe = Tg(nt, yt, Oe)), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    8388610 && e(32, Fe = rn(ot, Fe)), t.$$.dirty[1] & /*$jsonLineSpacing, lineSpacing*/
    4194308 && e(33, vt = rn($, vt)), t.$$.dirty[0] & /*orientation, separator, componentContext*/
    37 | t.$$.dirty[1] & /*$jsonSeparator, itemSpacing*/
    2097154)
      if (we != null && we.style && Be !== "overlap" && pc()) {
        const Jt = ao(we.style, kc, (bt == null ? void 0 : bt.style) || null);
        Jt ? (e(5, bt = {
          show_at_start: !!((yr = we.show_at_start) != null && yr),
          show_at_end: !!((vr = we.show_at_end) != null && vr),
          show_between: !!((jt = we.show_between) == null || jt),
          style: Jt,
          margins: dc(we.margins)
        }), bt.show_between && Fe && je.logError(K(new Error("item_spacing will be ignored due to the 'separator' property."), { level: "warn" }))) : e(5, bt = null);
      } else
        e(5, bt = null);
    if (t.$$.dirty[0] & /*orientation, lineSeparator, componentContext*/
    69 | t.$$.dirty[1] & /*$jsonLineSeparator, lineSpacing*/
    1048580)
      if (ee != null && ee.style && Be !== "overlap" && pc()) {
        const Jt = ao(ee.style, kc, (Gt == null ? void 0 : Gt.style) || null);
        Jt ? (e(6, Gt = {
          show_at_start: !!((Ir = ee.show_at_start) != null && Ir),
          show_at_end: !!((qr = ee.show_at_end) != null && qr),
          show_between: !!((lr = ee.show_between) == null || lr),
          style: Jt,
          margins: dc(ee.margins)
        }), Gt.show_between && vt && je.logError(K(new Error("line_spacing will be ignored due to the 'line_separator' property."), { level: "warn" }))) : e(6, Gt = null);
      } else
        e(6, Gt = null);
    if (t.$$.dirty[0] & /*separator, lineSeparator, orientation*/
    100 && e(14, le = bt || Gt ? jg(Be, bt, Gt) : null), t.$$.dirty[1] & /*$jsonAspect*/
    524288) {
      const Jt = pe == null ? void 0 : pe.ratio;
      Jt && Pn(Jt) ? e(7, It = Jt) : e(7, It = void 0);
    }
    if (t.$$.dirty[0] & /*orientation, contentHAlign, contentVAlign, layoutParams, aspect, childLayoutParams*/
    414 | t.$$.dirty[1] & /*wrap, $jsonWidth, $jsonHeight, supportWidthWrapContent, supportHeightWrapContent, stretchWidth, stretchHeight*/
    397184) {
      let Jt = {};
      Be === "overlap" && (Jt.overlapParent = !0), Be !== "horizontal" && (Jt.parentHAlign = L ? "start" : Gg[Oe]), Be !== "vertical" && (Jt.parentVAlign = L ? "start" : Jg[Vt]);
      const Yt = (Ke == null ? void 0 : Ke.type) === "wrap_content" || (Ke == null ? void 0 : Ke.type) === "match_parent" && (He == null ? void 0 : He.parentHorizontalWrapContent), sr = !Q || Q.type === "wrap_content" || Q.type === "match_parent" && (He == null ? void 0 : He.parentVerticalWrapContent);
      !re && Yt && (Jt.parentHorizontalWrapContent = !0), !It && !ue && sr && (Jt.parentVerticalWrapContent = !0), Yt || (Jt.parentContainerKnownWidth = !0), sr || (Jt.parentContainerKnownHeight = !0), Jt.stretchWidth = T, Jt.stretchHeight = Y, Be === "horizontal" && (Jt.parentContainerOrientation = "horizontal"), Be === "vertical" && (Jt.parentContainerOrientation = "vertical"), L && (Jt.parentContainerWrap = !0), e(8, _r = xo(Jt, _r));
    }
    if (t.$$.dirty[1] & /*$jsonMaxWidth*/
    65536 && e(34, or = (ve == null ? void 0 : ve.type) === "fixed"), t.$$.dirty[0] & /*orientation, contentVAlign, contentHAlign*/
    28 | t.$$.dirty[1] & /*$jsonResponsive, wrap, $jsonClipToBounds, isFixedContainer, responsiveMobileHeight, responsiveTabletHeight*/
    49384) {
      let Jt, Yt;
      if (e(36, br = void 0), e(37, Wt = void 0), Z) {
        const sr = Z == null ? void 0 : Z.mobile, dt = Z == null ? void 0 : Z.tablet;
        if (sr != null && sr.orientation && (Jt = String(sr.orientation)), dt != null && dt.orientation && (Yt = String(dt.orientation)), ((it = sr == null ? void 0 : sr.height) == null ? void 0 : it.type) === "fixed" && sr.height.value !== void 0) {
          const ce = rn(sr.height.value, 0);
          e(36, br = ce > 0 ? ce : void 0);
        }
        if (((At = dt == null ? void 0 : dt.height) == null ? void 0 : At.type) === "fixed" && dt.height.value !== void 0) {
          const ce = rn(dt.height.value, 0);
          e(37, Wt = ce > 0 ? ce : void 0);
        }
      }
      e(12, Mt = {
        orientation: Be,
        valign: Vt,
        halign: Oe,
        wrap: L,
        overflow: D === !1 || D === 0 ? "visible" : void 0,
        "fixed-container": or,
        "responsive-mobile-vertical": Jt === "vertical",
        "responsive-mobile-horizontal": Jt === "horizontal",
        "responsive-tablet-vertical": Yt === "vertical",
        "responsive-tablet-horizontal": Yt === "horizontal",
        "responsive-mobile-has-height": br !== void 0,
        "responsive-tablet-has-height": Wt !== void 0
      });
    }
    t.$$.dirty[0] & /*separator, lineSeparator, orientation, aspect*/
    228 | t.$$.dirty[1] & /*itemSpacing, lineSpacing, responsiveMobileHeight, responsiveTabletHeight*/
    102 && e(13, A = {
      gap: bt || Gt || Fe || vt ? Cg({
        orientation: Be,
        separator: bt,
        lineSeparator: Gt,
        itemSpacing: Fe,
        lineSpacing: vt
      }) : void 0,
      "aspect-ratio": It,
      "--responsive-mobile-height": br !== void 0 ? _e(br) : void 0,
      "--responsive-tablet-height": Wt !== void 0 ? _e(Wt) : void 0
    });
  }, [
    je,
    He,
    Be,
    Vt,
    Oe,
    bt,
    Gt,
    It,
    _r,
    hr,
    yt,
    $e,
    Mt,
    A,
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
    Ve,
    Qt,
    Fe,
    vt,
    or,
    kr,
    br,
    Wt,
    L,
    Y,
    T,
    ue,
    re,
    o,
    n,
    D,
    Z,
    ve,
    Q,
    Ke,
    pe,
    ee,
    we,
    $,
    ot,
    nt,
    q,
    Me,
    lt,
    tt,
    Tt
  ];
}
class Kg extends Or {
  constructor(r) {
    super(), Lr(this, r, qg, Ug, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Yg = "appkit-separator", Xg = "appkit-separator_orientation_horizontal", Zg = "appkit-separator_orientation_vertical", Qg = "appkit-separator__inner", Rl = {
  separator: Yg,
  separator_orientation_horizontal: Xg,
  separator_orientation_vertical: Zg,
  separator__inner: Qg
};
function ha(t, r) {
  return t === "vertical" || t === "horizontal" ? t : r;
}
function vc(t) {
  let r, e;
  return {
    c() {
      r = Pe("span"), g(r, "class", Rl.separator__inner), g(r, "style", e = ur(
        /*style*/
        t[3]
      ));
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o & /*style*/
      8 && e !== (e = ur(
        /*style*/
        n[3]
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function xg(t) {
  let r, e = (
    /*hasContent*/
    t[4] && vc(t)
  );
  return {
    c() {
      e && e.c(), r = xt();
    },
    m(n, o) {
      e && e.m(n, o), J(n, r, o);
    },
    p(n, o) {
      /*hasContent*/
      n[4] ? e ? e.p(n, o) : (e = vc(n), e.c(), e.m(r.parentNode, r)) : e && (e.d(1), e = null);
    },
    d(n) {
      n && G(r), e && e.d(n);
    }
  };
}
function $g(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: mt(
        "separator",
        Rl,
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
      $$slots: { default: [xg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Rt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, [o]) {
      const i = {};
      o & /*mods*/
      4 && (i.cls = mt(
        "separator",
        Rl,
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function eh(t, r, e) {
  let n, o, i, s, a, l, c, u, f = j, _ = () => (f(), f = E(o, (N) => e(11, u = N)), o);
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
    2112 && e(6, p = ha(u == null ? void 0 : u.orientation, p)), t.$$.dirty & /*$jsonDelimiterStyle*/
    2048 && e(4, i = !(u != null && u.color && (u.color === "transparent" || u.color.length === 9 && u.color.indexOf("#00") === 0))), t.$$.dirty & /*$jsonDelimiterStyle, background*/
    2176 && e(7, w = gr(u == null ? void 0 : u.color, 1, w)), t.$$.dirty & /*orientation*/
    64 && e(9, s = p === "horizontal" ? "100%" : _e(1)), t.$$.dirty & /*orientation*/
    64 && e(8, a = p === "horizontal" ? _e(1) : "100%"), t.$$.dirty & /*background, width, height*/
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
class th extends Or {
  constructor(r) {
    super(), Lr(this, r, eh, $g, Er, { componentContext: 0, layoutParams: 1 });
  }
}
const rh = "appkit-image", nh = "appkit-image__image", oh = "appkit-image_error", ih = "appkit-image_aspect", sh = "appkit-image_loaded", Hl = {
  image: rh,
  "image_is-width-content": "appkit-image_is-width-content",
  "image_is-height-content": "appkit-image_is-height-content",
  image__image: nh,
  image_error: oh,
  "image_is-rtl-mirror": "appkit-image_is-rtl-mirror",
  image_aspect: ih,
  "image_aspect-content": "appkit-image_aspect-content",
  image_loaded: sh,
  "divkit-image-appearance": "appkit-divkit-image-appearance",
  "image_before-appearance": "appkit-image_before-appearance"
};
function lh(t, r, e) {
  const n = t.content_alignment_horizontal, o = t.content_alignment_vertical;
  return n && n !== "left" && n !== "center" && n !== "right" && n !== "start" && n !== "end" || o && o !== "top" && o !== "center" && o !== "bottom" ? e : bd({
    content_alignment_horizontal: n,
    content_alignment_vertical: o
  }, r);
}
function jd(t) {
  return t.startsWith("data:") ? zl(t) : `data:image/jpg;base64,${zl(t)}`;
}
function ah(t, r, e) {
  let { componentContext: n } = r;
  Dr(Kr);
  function o() {
  }
  return Xn(() => {
  }), sl(o), ln(() => {
  }), t.$$set = (i) => {
    "componentContext" in i && e(0, n = i.componentContext);
  }, [n];
}
class Dn extends Or {
  constructor(r) {
    super(), Lr(this, r, ah, null, Er, { componentContext: 0 });
  }
}
function ch(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function uh(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: mt(
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
          fh,
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
      Rt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = mt(
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function jc(t) {
  let r, e, n, o, i, s, a, l;
  return {
    c() {
      r = Pe("img"), g(r, "class", Hl.image__image), Kn(r.src, e = /*state*/
      t[2] === rs ? Wl : (
        /*imageUrl*/
        t[3]
      )) || g(r, "src", e), g(r, "loading", n = /*$jsonPreloadRequired*/
      t[31] || /*highPrority*/
      t[10] ? "eager" : "lazy"), g(r, "decoding", o = /*highPrority*/
      t[10] ? "sync" : "async"), g(r, "style", i = ur({
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
      J(c, r, u), t[70](r), a || (l = [
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
      12 && !Kn(r.src, e = /*state*/
      c[2] === rs ? Wl : (
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
      122880 && i !== (i = ur({
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
      c && G(r), t[70](null), a = !1, Gr(l);
    }
  };
}
function fh(t) {
  let r = (
    /*svgFilterId*/
    t[5]
  ), e, n = jc(t);
  return {
    c() {
      n.c(), e = xt();
    },
    m(o, i) {
      n.m(o, i), J(o, e, i);
    },
    p(o, i) {
      i[0] & /*svgFilterId*/
      32 && Er(r, r = /*svgFilterId*/
      o[5]) ? (n.d(1), n = jc(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && G(e), n.d(o);
    }
  };
}
function dh(t) {
  let r, e, n, o;
  const i = [uh, ch], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[9] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (fr(), te(s[u], 1, 1, () => {
        s[u] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
const Wl = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", _h = "empty://", ph = "rgba(0,0,0,0.08)", ui = 0, Fl = 1, rs = 2, Cc = /\.gif($|\?)/i, gh = "data:image/gif", Ac = 'A Gif image was used for the "Image" component. The animation will be played on the web platform, but it does not match the behavior of other platforms.';
function hh(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, re, ue, T, Y, le, A, D = j, M = () => (D(), D = E(N, (dt) => e(53, A = dt)), N), U, Z, me = j, Ae = () => (me(), me = E(k, (dt) => e(55, Z = dt)), k), ve, he = j, Se = () => (he(), he = E(w, (dt) => e(56, ve = dt)), w), Q, xe = j, qe = () => (xe(), xe = E(p, (dt) => e(57, Q = dt)), p), Ke, be = j, Te = () => (be(), be = E(_, (dt) => e(58, Ke = dt)), _), pe, ge = j, de = () => (ge(), ge = E(m, (dt) => e(59, pe = dt)), m), ee, ae = j, ne = () => (ae(), ae = E(h, (dt) => e(60, ee = dt)), h), we, Re = j, Ye = () => (Re(), Re = E(f, (dt) => e(61, we = dt)), f), $, Le = j, Ne = () => (Le(), Le = E(u, (dt) => e(62, $ = dt)), u), ot, ut = j, rt = () => (ut(), ut = E(c, (dt) => e(63, ot = dt)), c), yt, nt = j, Pt = () => (nt(), nt = E(l, (dt) => e(64, yt = dt)), l), ft, q = j, fe = () => (q(), q = E(a, (dt) => e(65, ft = dt)), a), st, Me = j, I = () => (Me(), Me = E(s, (dt) => e(66, st = dt)), s), Ct, lt = j, St = () => (lt(), lt = E(L, (dt) => e(67, Ct = dt)), L), Dt, tt = j, X = () => (tt(), tt = E(o, (dt) => e(68, Dt = dt)), o), Et, Tt = j, $t = () => (Tt(), Tt = E(i, (dt) => e(69, Et = dt)), i), Kt, je = j, He = () => (je(), je = E(R, (dt) => e(31, Kt = dt)), R);
  t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => Le()), t.$$.on_destroy.push(() => ut()), t.$$.on_destroy.push(() => nt()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => Me()), t.$$.on_destroy.push(() => lt()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => Tt()), t.$$.on_destroy.push(() => je());
  let { componentContext: pt } = r, { layoutParams: Ve = void 0 } = r;
  const $e = Dr(Kr), Be = $e.direction;
  bn(t, Be, (dt) => e(54, U = dt));
  let Vt, Oe = ui, bt = !1, Gt = ph, It = !1, _r, Fe = "", vt = "none", or = "50% 50%", tr = !1, Qt = "center", hr, kr, Mt = "source_in", br = "", Wt = "", _t = 0, er = 0, ie = 0, yr = "", vr = "", jt = !1, Ir = !1, qr = !1;
  function lr() {
    e(4, hr = void 0), e(40, tr = !1), e(38, vt = "none"), e(39, or = "50% 50%"), e(43, Mt = "source_in"), e(51, Ir = !1), e(10, qr = !1);
  }
  function it(dt) {
    e(2, Oe = ui);
  }
  function At(dt) {
    e(39, or = lh(dt, U, or));
  }
  function Jt() {
    Oe === ui && e(2, Oe = Fl);
  }
  function Yt() {
    Oe === ui && e(2, Oe = rs);
  }
  ln(() => {
    $e.removeSvgFilter(kr, Mt);
  });
  function sr(dt) {
    Fr[dt ? "unshift" : "push"](() => {
      Vt = dt, e(8, Vt);
    });
  }
  return t.$$set = (dt) => {
    "componentContext" in dt && e(0, pt = dt.componentContext), "layoutParams" in dt && e(1, Ve = dt.layoutParams);
  }, t.$$.update = () => {
    var dt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(52, n = pt.origJson), t.$$.dirty[1] & /*origJson*/
    2097152 && n && lr(), t.$$.dirty[0] & /*componentContext*/
    1 && X(e(30, o = pt.getDerivedFromVars(pt.json.image_url))), t.$$.dirty[0] & /*componentContext*/
    1 && $t(e(29, i = pt.getDerivedFromVars(pt.json.gif_url))), t.$$.dirty[0] & /*componentContext*/
    1 && I(e(28, s = pt.getDerivedFromVars(pt.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(27, a = pt.getDerivedFromVars(pt.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && Pt(e(26, l = pt.getDerivedFromVars(pt.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && rt(e(25, c = pt.getDerivedFromVars(pt.json.preview_url))), t.$$.dirty[0] & /*componentContext*/
    1 && Ne(e(24, u = pt.getDerivedFromVars(pt.json.placeholder_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(23, f = pt.getDerivedFromVars(pt.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(22, _ = pt.getDerivedFromVars({
      content_alignment_horizontal: pt.json.content_alignment_horizontal,
      content_alignment_vertical: pt.json.content_alignment_vertical
    }))), t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(21, h = pt.getDerivedFromVars(pt.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(20, m = pt.getDerivedFromVars(pt.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(19, p = pt.getDerivedFromVars(pt.json.tint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Se(e(18, w = pt.getDerivedFromVars(pt.json.tint_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(17, k = pt.getDerivedFromVars(pt.json.appearance_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(16, N = pt.getDerivedFromVars(pt.json.filters))), t.$$.dirty[0] & /*componentContext*/
    1 && He(e(15, R = pt.getDerivedFromVars(pt.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && St(e(14, L = pt.getDerivedFromVars(pt.json.high_priority_preview_show))), t.$$.dirty[0] & /*componentContext, imageUrl*/
    9 | t.$$.dirty[1] & /*isEmpty*/
    16 | t.$$.dirty[2] & /*$jsonGifUrl, $jsonImageUrl*/
    192) {
      const ce = pt.json.type === "gif";
      let kt = ce ? Et : Dt;
      e(35, bt = kt === _h), bt && (kt = Wl), e(3, _r = kt), !ce && _r && Cc.test(_r) && pt.logError(K(new Error(Ac), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*imageUrl*/
    8 && it(), t.$$.dirty[1] & /*highPriorityPreview*/
    1048576 | t.$$.dirty[2] & /*$jsonHighPriorityPreviewShow*/
    32 && e(51, Ir = sn(Ct, Ir)), t.$$.dirty[0] & /*imageUrl, componentContext*/
    9 && (_r ? e(9, It = !1) : (e(9, It = !0), pt.logError(K(new Error(`Missing "${pt.json.type === "gif" ? "gif_url" : "image_url"}" for "${pt.json.type}"`))))), t.$$.dirty[2] & /*$jsonWidth*/
    16 && e(7, re = (st == null ? void 0 : st.type) === "wrap_content"), t.$$.dirty[2] & /*$jsonHeight*/
    8 && e(6, ue = (ft == null ? void 0 : ft.type) === "wrap_content"), t.$$.dirty[0] & /*componentContext, state*/
    5 | t.$$.dirty[1] & /*isEmpty, highPriorityPreview*/
    1048592 | t.$$.dirty[2] & /*$jsonPreview, $jsonPreviewUrl*/
    6) {
      const ce = pt.json.type === "gif", kt = yt, nr = ot;
      (Oe === ui || Oe === rs || bt) && (kt || nr) ? (e(37, Fe = `url("${nr || jd(kt || "")}")`), e(10, qr = Ir)) : (e(37, Fe = ""), e(10, qr = !1)), !ce && (nr && Cc.test(nr) || kt && kt.startsWith(gh)) && pt.logError(K(new Error(Ac), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*state*/
    4 | t.$$.dirty[1] & /*isEmpty, placeholderColor*/
    48 | t.$$.dirty[2] & /*$jsonPlaceholderColor*/
    1 && (Oe === ui || Oe === rs || bt ? e(36, Gt = gr($, 1, Gt)) : e(36, Gt = "")), t.$$.dirty[1] & /*$jsonScale, scale*/
    1073741952 && e(38, vt = md(we) || vt), t.$$.dirty[1] & /*$jsonPosition*/
    134217728 && At(Ke), t.$$.dirty[1] & /*$jsonA11y*/
    536870912 && e(13, T = (ee == null ? void 0 : ee.description) || ""), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAspect, aspectContent, $jsonPosition*/
    402653696) {
      e(41, Qt = "center");
      const ce = pe == null ? void 0 : pe.ratio;
      ce && Pn(ce) ? (e(4, hr = ce), e(40, tr = ((dt = pt.json.width) == null ? void 0 : dt.type) === "wrap_content"), tr && (Ke.content_alignment_vertical === "top" ? e(41, Qt = "top") : Ke.content_alignment_vertical === "bottom" && e(41, Qt = "bottom"))) : e(4, hr = void 0);
    }
    if (t.$$.dirty[1] & /*$jsonTintColor, $jsonTintMode, tintMode, tintColor*/
    100669440) {
      const ce = Q, kt = ce ? gr(ce) : void 0, nr = kd(ve, Mt);
      (kt !== kr || nr !== Mt) && ($e.removeSvgFilter(kr, Mt), e(5, br = kt ? $e.addSvgFilter(kt, nr) : ""), e(42, kr = kt), e(43, Mt = nr));
    }
    if (t.$$.dirty[1] & /*$jsonAppearanceAnimation*/
    16777216 && Z && Z.type === "fade") {
      const ce = Z;
      e(44, Wt = yd(ce.interpolator, "ease_in_out").replace(/_/g, "-")), e(47, ie = rn(ce.duration, 300)), e(46, er = rn(ce.start_delay, 0)), e(45, _t = rn(ce.alpha, 0));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonFilters, $direction*/
    12582912) {
      let ce = "", kt = "";
      Array.isArray(A) && A.length && (ce = wd(A, pt.logError)), ce && (kt = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"), e(48, yr = ce), e(49, vr = kt), e(50, jt = U === "rtl" && Array.isArray(A) && A.some((nr) => nr.type === "rtl_mirror"));
    }
    t.$$.dirty[0] & /*aspectRatio, isWidthContent, isHeightContent, state*/
    212 | t.$$.dirty[1] & /*aspectContent, aspectContentVAlign, animationInterpolator, isRTLMirror*/
    534016 && e(12, Y = {
      aspect: hr !== void 0,
      "aspect-content": tr,
      "aspect-valign": Qt !== "center" ? Qt : void 0,
      "is-width-content": re,
      "is-height-content": ue,
      loaded: Oe === Fl,
      "before-appearance": !!Wt && Oe === ui,
      "is-rtl-mirror": jt
    }), t.$$.dirty[0] & /*aspectRatio, state, svgFilterId*/
    52 | t.$$.dirty[1] & /*backgroundImage, placeholderColor, scale, filterClipPath, position, filter, animationInterpolator, animationFadeStart, animationDelay, animationDuration*/
    516576 && e(11, le = {
      // Image preview shows, if loading of original image is failed
      "background-image": Fe,
      "background-color": Fe ? void 0 : Gt,
      "background-size": op(vt),
      "clip-path": vr || void 0,
      "object-fit": vt,
      "object-position": or,
      "aspect-ratio": hr,
      filter: [
        Oe === Fl && br ? `url(#${br})` : "",
        yr
      ].filter(Boolean).join(" "),
      "--divkit-appearance-interpolator": Wt || void 0,
      "--divkit-appearance-fade-start": Wt ? _t : void 0,
      "--divkit-appearance-delay": Wt ? `${er}ms` : void 0,
      "--divkit-appearance-duration": Wt ? `${ie}ms` : void 0
    });
  }, [
    pt,
    Ve,
    Oe,
    _r,
    hr,
    br,
    ue,
    re,
    Vt,
    It,
    qr,
    le,
    Y,
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
    Kt,
    Be,
    Jt,
    Yt,
    bt,
    Gt,
    Fe,
    vt,
    or,
    tr,
    Qt,
    kr,
    Mt,
    Wt,
    _t,
    er,
    ie,
    yr,
    vr,
    jt,
    Ir,
    n,
    A,
    U,
    Z,
    ve,
    Q,
    Ke,
    pe,
    ee,
    we,
    $,
    ot,
    yt,
    ft,
    st,
    Ct,
    Dt,
    Et,
    sr
  ];
}
class Ec extends Or {
  constructor(r) {
    super(), Lr(this, r, hh, dh, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const mh = "appkit-grid", bh = "appkit-grid_halign_start", yh = "appkit-grid_halign_center", wh = "appkit-grid_halign_end", kh = "appkit-grid_valign_start", vh = "appkit-grid_valign_center", jh = "appkit-grid_valign_end", Sc = {
  grid: mh,
  grid_halign_start: bh,
  grid_halign_center: yh,
  grid_halign_end: wh,
  grid_valign_start: kh,
  grid_valign_center: vh,
  grid_valign_end: jh
};
function Vc(t) {
  return t > 0 && t < 1;
}
function Fc(t) {
  return String(Math.ceil(t * 1e3) / 1e3);
}
function Ic(t, r, e, n) {
  if (t.some(Vc)) {
    const l = Math.max(...t.filter(Vc).map((c) => 1 / c));
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
    i && !e[l] ? a[l] = `minmax(${_e(i * t[l] / s)},${Fc(t[l])}fr)` : o || !e[l] && t[l] ? a[l] = `${Fc(t[l])}fr` : a[l] = "auto";
  return a.join(" ");
}
function Dc(t, r, e) {
  const n = t.slice();
  return n[33] = r[e], n;
}
function Ch(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function Ah(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: mt(
        "grid",
        Sc,
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
      $$slots: { default: [Eh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Rt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = mt(
        "grid",
        Sc,
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function Tc(t) {
  let r, e;
  return r = new Zn({
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
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function Eh(t) {
  let r, e, n = ir(
    /*resultItems*/
    t[5]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Tc(Dc(t, n, s));
  const i = (s) => te(o[s], 1, 1, () => {
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
          const c = Dc(s, n, l);
          o[l] ? (o[l].p(c, a), H(o[l], 1)) : (o[l] = Tc(c), o[l].c(), H(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (fr(), l = n.length; l < o.length; l += 1)
          i(l);
        dr();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          H(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        te(o[a]);
      e = !1;
    },
    d(s) {
      s && G(r), cn(o, s);
    }
  };
}
function Sh(t) {
  let r, e, n, o;
  const i = [Ah, Ch], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (fr(), te(s[u], 1, 1, () => {
        s[u] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Vh(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _ = j, h = () => (_(), _ = E(a, (de) => e(27, f = de)), a), m, p = j, w = () => (p(), p = E(s, (de) => e(28, m = de)), s), k, N = j, R = () => (N(), N = E(U, (de) => e(29, k = de)), U), L, re = j, ue = () => (re(), re = E(i, (de) => e(30, L = de)), i);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => re());
  let { componentContext: T } = r, { layoutParams: Y = void 0 } = r;
  const A = Dr(Kr).direction;
  bn(t, A, (de) => e(26, u = de));
  let D = !1, M = 0, U, Z, me = [], Ae = [], ve = [], he = [], Se = [], Q = [], xe = 0, qe = "start", Ke = "start", be = [], Te;
  function pe() {
    e(3, D = !1), e(13, M = 0), e(21, qe = "start"), e(22, Ke = "start");
  }
  function ge(de) {
    e(0, T = e(23, Te = {
      ...T,
      json: {
        ...T.json,
        items: de.filter(zo)
      }
    }));
  }
  return ln(() => {
    be.forEach((de) => {
      de.destroy();
    });
  }), t.$$set = (de) => {
    "componentContext" in de && e(0, T = de.componentContext), "layoutParams" in de && e(1, Y = de.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(25, n = T.origJson), t.$$.dirty[0] & /*origJson*/
    33554432 && n && pe(), t.$$.dirty[0] & /*componentContext*/
    1 && e(24, o = Array.isArray(T.json.items) && T.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(10, i = T.getDerivedFromVars(T.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && w(e(9, s = T.getDerivedFromVars(T.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && h(e(8, a = T.getDerivedFromVars(T.json.content_alignment_horizontal))), t.$$.dirty[0] & /*$jsonColumnCount, columnCount, componentContext*/
    1073750017 && (e(13, M = Un(L, M)), M < 1 ? (e(3, D = !0), T.logError(K(new Error("Incorrect column_count for grid")))) : e(3, D = !1)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonItems*/
    25165829) {
      const de = new Set(be), ee = /* @__PURE__ */ new Map();
      Te === T && be.forEach((ae) => {
        ee.set(ae.json, ae);
      }), e(2, be = o.map((ae, ne) => {
        const we = ee.get(ae);
        return we ? (de.delete(we), we) : T.produceChildContext(ae, { path: ne });
      }));
      for (const ae of de)
        ae.destroy();
      e(23, Te = T);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    5) {
      let de = [];
      be.forEach((ee) => {
        de.push(T.getDerivedFromVars({
          rowSpan: ee.json.row_span,
          columnSpan: ee.json.column_span,
          width: ee.json.width,
          height: ee.json.height
        }));
      }), R(e(4, U = Wi(de, (ee) => [...ee])));
    }
    if (t.$$.dirty[0] & /*items, $childStore, columnCount, columnsWeight, rowsWeight, columnsMinWidth, rowsMinHeight*/
    537124868) {
      const de = {};
      let ee = 0, ae = 0;
      e(14, me = []), e(15, Ae = []), e(16, ve = []), e(17, he = []), e(18, Se = []), e(19, Q = []);
      let ne = 0;
      e(5, Z = be.map((we, Re) => {
        var nt, Pt, ft, q;
        const Ye = k[Re], $ = Math.min(M, Number(Ye.columnSpan) || 1), Le = Number(Ye.rowSpan) || 1, Ne = ((nt = Ye.width) == null ? void 0 : nt.type) === "match_parent" ? Number(Ye.width.weight || 1) / $ : 0, ot = ((Pt = Ye.height) == null ? void 0 : Pt.type) === "match_parent" ? Number(Ye.height.weight || 1) / Le : 0, ut = ((ft = Ye.width) == null ? void 0 : ft.type) === "fixed" && Ye.width.value ? Number(Ye.width.value) / $ : 0, rt = ((q = Ye.height) == null ? void 0 : q.type) === "fixed" && Ye.height.value ? Number(Ye.height.value) / Le : 0;
        for (; ; ) {
          let fe = !0;
          e: for (let st = ee; st < ee + $; ++st)
            for (let Me = ae; Me < ae + Le; ++Me)
              if (de[st + "_" + Me]) {
                fe = !1;
                break e;
              }
          if (fe)
            break;
          ++ee, ee > M - $ && (ee = 0, ++ae);
        }
        const yt = { x: ee, y: ae, colSpan: $, rowSpan: Le };
        for (let fe = ee; fe < ee + $; ++fe)
          for (let st = ae; st < ae + Le; ++st)
            de[fe + "_" + st] = !0, (!me[fe] || me[fe] < Ne) && e(14, me[fe] = Ne, me), (!Ae[st] || Ae[st] < ot) && e(15, Ae[st] = ot, Ae), $ === 1 && (!ve[fe] || ve[fe] < ut) && e(16, ve[fe] = ut, ve), Le === 1 && (!he[st] || he[st] < rt) && e(17, he[st] = rt, he), $ === 1 && ut && e(18, Se[fe] = ut, Se), Le === 1 && rt && e(19, Q[fe] = rt, Q);
        return ne = Math.max(ne, ae + Le), {
          componentContext: we,
          layoutParams: { gridArea: yt }
        };
      })), e(20, xe = Math.max(ae + 1, ne));
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    270532608 && e(21, qe = dl(m, qe)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    205520896 && e(22, Ke = fl(f, u, Ke)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    6291456 && e(7, l = {
      valign: qe,
      halign: Ke
    }), t.$$.dirty[0] & /*columnsWeight, columnsMinWidth, columnsWidth, columnCount, rowsWeight, rowsMinHeight, rowsHeight, rowCount*/
    2088960 && e(6, c = {
      "grid-template-columns": Ic(me, ve, Se, M),
      "grid-template-rows": Ic(Ae, he, Q, xe)
    });
  }, [
    T,
    Y,
    be,
    D,
    U,
    Z,
    c,
    l,
    a,
    s,
    i,
    A,
    ge,
    M,
    me,
    Ae,
    ve,
    he,
    Se,
    Q,
    xe,
    qe,
    Ke,
    Te,
    o,
    n,
    u,
    f,
    m,
    k,
    L
  ];
}
class Fh extends Or {
  constructor(r) {
    super(), Lr(this, r, Vh, Sh, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Ih = "appkit-outer_width_content", Dh = "appkit-outer_height_content", Th = "appkit-gallery", Mh = "appkit-gallery__scroller", Ph = "appkit-gallery_scrollbar_none", Nh = "appkit-gallery_orientation_horizontal", zh = "appkit-gallery_orientation_vertical", Lh = "appkit-gallery__items", Oh = "appkit-gallery__arrow", Bh = "appkit-gallery__gap", uo = {
  outer_width_content: Ih,
  outer_height_content: Dh,
  gallery: Th,
  gallery__scroller: Mh,
  gallery_scrollbar_none: Ph,
  gallery_orientation_horizontal: Nh,
  gallery_orientation_vertical: zh,
  "gallery_scroll-snap": "appkit-gallery_scroll-snap",
  "gallery__items-grid": "appkit-gallery__items-grid",
  gallery__items: Lh,
  gallery__arrow: Oh,
  "gallery__arrow-icon-path": "appkit-gallery__arrow-icon-path",
  gallery__gap: Bh
}, Rh = "appkit-arrow", Hh = "appkit-arrow__icon", Wh = "appkit-arrow_left", Uh = "appkit-arrow_right", go = {
  arrow: Rh,
  arrow__icon: Hh,
  arrow_left: Wh,
  arrow_right: Uh
};
function Gh(t, r) {
  return t === "start" || t === "center" || t === "end" ? t : r;
}
function Jh(t) {
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
const { Boolean: Cd, window: qh } = Po;
function Mc(t, r, e) {
  const n = t.slice();
  return n[86] = r[e], n[87] = r, n[88] = e, n;
}
function Pc(t, r, e) {
  const n = t.slice();
  return n[89] = r[e], n;
}
function Nc(t) {
  let r;
  return {
    c() {
      r = Pe("div"), g(r, "class", uo.gallery__gap), F(
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
function zc(t) {
  let r, e, n, o = (
    /*item*/
    t[89].hasGapBefore && Nc(t)
  );
  return e = new Zn({
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
      o && o.c(), r = mr(), Rt(e.$$.fragment);
    },
    m(i, s) {
      o && o.m(i, s), J(i, r, s), Nt(e, i, s), n = !0;
    },
    p(i, s) {
      /*item*/
      i[89].hasGapBefore ? o ? o.p(i, s) : (o = Nc(i), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
      const a = {};
      s[0] & /*itemsGrid*/
      262144 && (a.componentContext = /*item*/
      i[89].componentContext), s[0] & /*childLayoutParams*/
      64 && (a.layoutParams = /*childLayoutParams*/
      i[6]), e.$set(a);
    },
    i(i) {
      n || (H(e.$$.fragment, i), n = !0);
    },
    o(i) {
      te(e.$$.fragment, i), n = !1;
    },
    d(i) {
      i && G(r), o && o.d(i), zt(e, i);
    }
  };
}
function Lc(t) {
  let r, e, n, o, i, s, a = (
    /*rowIndex*/
    t[88]
  ), l, c = ir(
    /*itemsRow*/
    t[86]
  ), u = [];
  for (let m = 0; m < c.length; m += 1)
    u[m] = zc(Pc(t, c, m));
  const f = (m) => te(u[m], 1, 1, () => {
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
      r = Pe("div");
      for (let m = 0; m < u.length; m += 1)
        u[m].c();
      e = mr(), n = Pe("div"), i = mr(), g(n, "class", uo.gallery__gap), g(n, "style", o = ur(
        /*lastPaddingSize*/
        t[13]
      )), g(r, "class", uo.gallery__items), g(r, "style", s = ur(
        /*columnStyle*/
        t[16]
      ));
    },
    m(m, p) {
      J(m, r, p);
      for (let w = 0; w < u.length; w += 1)
        u[w] && u[w].m(r, null);
      wt(r, e), wt(r, n), wt(r, i), _(), l = !0;
    },
    p(m, p) {
      if (t = m, p[0] & /*itemsGrid, childLayoutParams, orientation, gridGap*/
      266320) {
        c = ir(
          /*itemsRow*/
          t[86]
        );
        let w;
        for (w = 0; w < c.length; w += 1) {
          const k = Pc(t, c, w);
          u[w] ? (u[w].p(k, p), H(u[w], 1)) : (u[w] = zc(k), u[w].c(), H(u[w], 1), u[w].m(r, e));
        }
        for (fr(), w = c.length; w < u.length; w += 1)
          f(w);
        dr();
      }
      (!l || p[0] & /*lastPaddingSize*/
      8192 && o !== (o = ur(
        /*lastPaddingSize*/
        t[13]
      ))) && g(n, "style", o), (!l || p[0] & /*columnStyle*/
      65536 && s !== (s = ur(
        /*columnStyle*/
        t[16]
      ))) && g(r, "style", s), a !== /*rowIndex*/
      t[88] && (h(), a = /*rowIndex*/
      t[88], _());
    },
    i(m) {
      if (!l) {
        for (let p = 0; p < c.length; p += 1)
          H(u[p]);
        l = !0;
      }
    },
    o(m) {
      u = u.filter(Cd);
      for (let p = 0; p < u.length; p += 1)
        te(u[p]);
      l = !1;
    },
    d(m) {
      m && G(r), cn(u, m), h();
    }
  };
}
function Oc(t) {
  let r, e, n = (
    /*hasScrollLeft*/
    t[10] && /*shouldCheckArrows*/
    t[8] && Bc(t)
  ), o = (
    /*hasScrollRight*/
    t[11] && /*shouldCheckArrows*/
    t[8] && Rc(t)
  );
  return {
    c() {
      n && n.c(), r = mr(), o && o.c(), e = xt();
    },
    m(i, s) {
      n && n.m(i, s), J(i, r, s), o && o.m(i, s), J(i, e, s);
    },
    p(i, s) {
      /*hasScrollLeft*/
      i[10] && /*shouldCheckArrows*/
      i[8] ? n ? n.p(i, s) : (n = Bc(i), n.c(), n.m(r.parentNode, r)) : n && (n.d(1), n = null), /*hasScrollRight*/
      i[11] && /*shouldCheckArrows*/
      i[8] ? o ? o.p(i, s) : (o = Rc(i), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null);
    },
    d(i) {
      i && (G(r), G(e)), n && n.d(i), o && o.d(i);
    }
  };
}
function Bc(t) {
  let r, e, n, o = !/*leftClass*/
  t[32] && Kh();
  return {
    c() {
      r = Pe("div"), o && o.c(), g(
        r,
        "class",
        /*leftClass*/
        t[32] || `${uo.gallery__arrow} ${go.arrow} ${go.arrow_left}`
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
function Kh(t) {
  let r, e;
  return {
    c() {
      r = tn("svg"), e = tn("path"), g(e, "class", uo["gallery__arrow-icon-path"]), g(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", go.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      J(n, r, o), wt(r, e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Rc(t) {
  let r, e, n, o = !/*rightClass*/
  t[33] && Yh();
  return {
    c() {
      r = Pe("div"), o && o.c(), g(
        r,
        "class",
        /*rightClass*/
        t[33] || `${uo.gallery__arrow} ${go.arrow} ${go.arrow_right}`
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
function Yh(t) {
  let r, e;
  return {
    c() {
      r = tn("svg"), e = tn("path"), g(e, "class", uo["gallery__arrow-icon-path"]), g(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", go.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      J(n, r, o), wt(r, e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Xh(t) {
  let r, e, n, o, i, s, a, l, c, u, f = ir(
    /*itemsGrid*/
    t[18]
  ), _ = [];
  for (let p = 0; p < f.length; p += 1)
    _[p] = Lc(Mc(t, f, p));
  const h = (p) => te(_[p], 1, 1, () => {
    _[p] = null;
  });
  let m = (
    /*orientation*/
    t[4] === "horizontal" && Oc(t)
  );
  return {
    c() {
      r = Pe("div"), e = Pe("div");
      for (let p = 0; p < _.length; p += 1)
        _[p].c();
      s = mr(), m && m.c(), a = xt(), g(e, "class", uo["gallery__items-grid"]), g(e, "style", n = ur(
        /*gridStyle*/
        t[17]
      )), g(r, "class", o = uo.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? Cr["root_restrict-scroll"] : "")), g(r, "style", i = ur(
        /*scrollerStyle*/
        t[5]
      ));
    },
    m(p, w) {
      J(p, r, w), wt(r, e);
      for (let k = 0; k < _.length; k += 1)
        _[k] && _[k].m(e, null);
      t[72](e), t[73](r), J(p, s, w), m && m.m(p, w), J(p, a, w), l = !0, c || (u = Qe(r, "scroll", function() {
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
      }), c = !0);
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
          const N = Mc(t, f, k);
          _[k] ? (_[k].p(N, w), H(_[k], 1)) : (_[k] = Lc(N), _[k].c(), H(_[k], 1), _[k].m(e, null));
        }
        for (fr(), k = f.length; k < _.length; k += 1)
          h(k);
        dr();
      }
      (!l || w[0] & /*gridStyle*/
      131072 && n !== (n = ur(
        /*gridStyle*/
        t[17]
      ))) && g(e, "style", n), (!l || w[0] & /*$jsonRestrictParentScroll*/
      1073741824 && o !== (o = uo.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? Cr["root_restrict-scroll"] : ""))) && g(r, "class", o), (!l || w[0] & /*scrollerStyle*/
      32 && i !== (i = ur(
        /*scrollerStyle*/
        t[5]
      ))) && g(r, "style", i), /*orientation*/
      t[4] === "horizontal" ? m ? m.p(t, w) : (m = Oc(t), m.c(), m.m(a.parentNode, a)) : m && (m.d(1), m = null);
    },
    i(p) {
      if (!l) {
        for (let w = 0; w < f.length; w += 1)
          H(_[w]);
        l = !0;
      }
    },
    o(p) {
      _ = _.filter(Cd);
      for (let w = 0; w < _.length; w += 1)
        te(_[w]);
      l = !1;
    },
    d(p) {
      p && (G(r), G(s), G(a)), cn(_, p), t[72](null), t[73](null), m && m.d(p), c = !1, u();
    }
  };
}
function Zh(t) {
  let r, e, n, o;
  return r = new hn({
    props: {
      cls: mt(
        "gallery",
        uo,
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
      $$slots: { default: [Xh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Rt(r.$$.fragment);
    },
    m(i, s) {
      Nt(r, i, s), e = !0, n || (o = Qe(qh, "resize", function() {
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
      32768 && (a.cls = mt(
        "gallery",
        uo,
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
      e || (H(r.$$.fragment, i), e = !0);
    },
    o(i) {
      te(r.$$.fragment, i), e = !1;
    },
    d(i) {
      zt(r, i), n = !1, o();
    }
  };
}
function Qh(t, r, e) {
  let n = 0, o = [], i = [];
  for (let s = 0; s < t.length; ++s)
    o[n] || (o[n] = []), o[n].push({
      index: s,
      hasGapBefore: i[n] && r[s].visibility !== "gone",
      componentContext: t[s]
    }), !i[n] && r[s].visibility !== "gone" && (i[n] = !0), ++n >= e && (n = 0);
  return o;
}
function xh(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, re, ue, T, Y, le = j, A = () => (le(), le = E(p, (ce) => e(59, Y = ce)), p), D, M = j, U = () => (M(), M = E(m, (ce) => e(60, D = ce)), m), Z, me = j, Ae = () => (me(), me = E(_, (ce) => e(61, Z = ce)), _), ve, he = j, Se = () => (he(), he = E(Gt, (ce) => e(62, ve = ce)), Gt), Q, xe = j, qe = () => (xe(), xe = E(f, (ce) => e(63, Q = ce)), f), Ke, be = j, Te = () => (be(), be = E(u, (ce) => e(64, Ke = ce)), u), pe, ge = j, de = () => (ge(), ge = E(c, (ce) => e(65, pe = ce)), c), ee, ae = j, ne = () => (ae(), ae = E(l, (ce) => e(66, ee = ce)), l), we, Re = j, Ye = () => (Re(), Re = E(a, (ce) => e(67, we = ce)), a), $, Le, Ne = j, ot = () => (Ne(), Ne = E(i, (ce) => e(69, Le = ce)), i), ut, rt = j, yt = () => (rt(), rt = E(s, (ce) => e(70, ut = ce)), s), nt, Pt = j, ft = () => (Pt(), Pt = E(h, (ce) => e(30, nt = ce)), h);
  t.$$.on_destroy.push(() => le()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => Ne()), t.$$.on_destroy.push(() => rt()), t.$$.on_destroy.push(() => Pt());
  let { componentContext: q } = r, { layoutParams: fe = void 0 } = r;
  const st = Dr(Kr), Me = st.direction;
  bn(t, Me, (ce) => e(58, T = ce));
  let I, Ct = [], lt = !1, St = !1, Dt = null, tt, X = !1;
  const Et = st.getCustomization("galleryLeftClass"), Tt = st.getCustomization("galleryRightClass");
  let $t, Kt = 1, je = "horizontal", He = "start", pt, Ve = 8, $e, Be, Vt = "", Oe, bt = [], Gt, It = {}, _r = !1, Fe = {}, vt = 0;
  function or() {
    e(42, Kt = 1), e(4, je = "horizontal"), e(43, He = "start"), e(44, Ve = 8), e(47, Vt = "");
  }
  let tr = null, Qt = null;
  function hr() {
    var nr, Xt;
    const ce = Un(ut, Kt), kt = q.json.responsive;
    if (!kt || typeof kt != "object") {
      e(42, Kt = ce);
      return;
    }
    tr != null && tr.matches && ((nr = kt.mobile) != null && nr.column_count) ? e(42, Kt = kt.mobile.column_count) : Qt != null && Qt.matches && ((Xt = kt.tablet) != null && Xt.column_count) ? e(42, Kt = kt.tablet.column_count) : e(42, Kt = ce);
  }
  function kr(ce) {
    e(0, q = e(53, Wt = {
      ...q,
      json: {
        ...q.json,
        items: ce.filter(zo)
      }
    }));
  }
  const Mt = st.isDesktop;
  bn(t, Mt, (ce) => e(68, $ = ce));
  let br = [], Wt;
  function _t() {
    if (!I)
      return;
    let ce = I.scrollLeft;
    T === "rtl" && (ce *= -1);
    const kt = I.scrollWidth, nr = I.offsetWidth;
    T === "ltr" ? (e(10, lt = ce > 2), e(11, St = ce + nr < kt - 2)) : (e(11, St = ce > 2), e(10, lt = ce + nr < kt - 2));
  }
  const er = ga(_t, 50);
  function ie(ce) {
    I.scroll({
      left: I.scrollLeft + I.offsetWidth * 0.75 * (ce === "right" ? 1 : -1),
      behavior: "smooth"
    });
  }
  function yr() {
    let ce = [], kt = Ct[0].children.length;
    for (let nr = 0; nr < kt; nr += 2)
      for (let Xt = 0; Xt < Kt; ++Xt) {
        const jr = Ct[Xt].children[nr];
        jr && ce.push(jr);
      }
    return ce;
  }
  function vr(ce, kt = !0) {
    const Xt = je === "horizontal" ? "left" : "top";
    I.scroll({
      [Xt]: ce,
      behavior: kt ? "smooth" : "instant"
    });
  }
  function jt(ce, kt, { animated: nr = !0, extraOffset: Xt = 0, overflow: jr = "clamp" } = {}) {
    const v = je === "horizontal", se = v ? "offsetLeft" : "offsetTop";
    kt > ce.length - 1 ? kt = jr === "ring" ? Vo(kt, ce.length) : ce.length - 1 : kt < 0 && (kt = jr === "ring" ? Vo(kt, ce.length) : 0);
    const d = ce[kt];
    if (d) {
      let z;
      if (T === "ltr" || !v)
        z = d[se] + 0.01 - Ve / 2;
      else {
        const Ie = I.offsetWidth;
        z = d[se] + d.offsetWidth + 0.01 - Ve / 2 - Ie;
      }
      if (Xt) {
        z += Xt;
        const Ie = v ? I.scrollWidth - I.offsetWidth : I.scrollHeight - I.offsetHeight;
        z > Ie && (jr === "clamp" ? z = Ie : jr === "ring" && (z = Vo(z, Ie))), z < 0 && (jr === "clamp" ? z = 0 : jr === "ring" && (z = Vo(z, Ie)));
      }
      vr(z, nr);
    }
  }
  function Ir(ce, { overflow: kt = "clamp", animated: nr = !0 } = {}) {
    const Xt = je === "horizontal", jr = T === "ltr" || !Xt ? 1 : -1, v = Xt ? I.scrollLeft : I.scrollTop, se = Xt ? I.scrollWidth - I.offsetWidth : I.scrollHeight - I.offsetHeight;
    let d = v * jr + ce;
    d > se ? kt === "clamp" ? d = se : kt === "ring" && (d = Vo(d, se)) : d < 0 && (kt === "clamp" ? d = 0 : kt === "ring" && (d = Vo(d, se))), vr(d * jr, nr);
  }
  function qr(ce, kt) {
    return je === "horizontal" ? kt.right > ce.left && ce.right > kt.left : kt.bottom > ce.top && ce.bottom > kt.top;
  }
  function lr(ce, kt) {
    return je === "horizontal" ? kt.left >= ce.left && kt.right <= ce.right : kt.top >= ce.top && kt.bottom <= ce.bottom;
  }
  function it(ce) {
    const kt = yr(), nr = I.getBoundingClientRect(), Xt = kt.findIndex((se) => lr(nr, se.getBoundingClientRect()));
    if (Xt !== -1)
      return Xt;
    const jr = kt.map((se) => qr(nr, se.getBoundingClientRect())), v = jr.findIndex(Boolean);
    return v !== -1 ? ce === "prev" && jr.filter(Boolean).length === 2 ? v + 1 : v : ce === "prev" ? 1 : kt.length - 2;
  }
  Xn(() => {
    if (e(40, X = !0), _t(), vt) {
      const ce = yr();
      jt(ce, vt, { animated: !1 });
    }
  }), ln(() => {
    e(40, X = !1), br.forEach((ce) => {
      ce.destroy();
    }), $t && !q.fakeElement && (st.unregisterInstance($t), e(41, $t = void 0)), tr && tr.removeEventListener("change", hr), Qt && Qt.removeEventListener("change", hr);
  });
  function At(ce, kt) {
    Fr[ce ? "unshift" : "push"](() => {
      Ct[kt] = ce, e(9, Ct);
    });
  }
  function Jt(ce) {
    Fr[ce ? "unshift" : "push"](() => {
      tt = ce, e(3, tt);
    });
  }
  function Yt(ce) {
    Fr[ce ? "unshift" : "push"](() => {
      I = ce, e(2, I);
    });
  }
  const sr = () => ie("left"), dt = () => ie("right");
  return t.$$set = (ce) => {
    "componentContext" in ce && e(0, q = ce.componentContext), "layoutParams" in ce && e(1, fe = ce.layoutParams);
  }, t.$$.update = () => {
    var ce, kt, nr, Xt, jr, v;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(57, n = q.origJson), t.$$.dirty[1] & /*origJson*/
    67108864 && n && or(), t.$$.dirty[0] & /*componentContext*/
    1 && e(56, o = Array.isArray(q.json.items) && q.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && ot(e(29, i = typeof ((ce = q.json.item_builder) == null ? void 0 : ce.data) == "string" ? q.getDerivedFromVars((kt = q.json.item_builder) == null ? void 0 : kt.data, void 0, !0) : (nr = q.json.item_builder) != null && nr.data ? Jo(q.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && yt(e(28, s = q.getDerivedFromVars(q.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(27, a = q.getDerivedFromVars(q.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*columns, mobileQuery, tabletQuery*/
    3147776 | t.$$.dirty[2] & /*$jsonColumnCount*/
    256) {
      const se = Un(ut, Kt), d = q.json.responsive;
      d && typeof d == "object" && typeof window < "u" ? (tr || (e(51, tr = window.matchMedia("(max-width: 767px)")), e(52, Qt = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), tr.addEventListener("change", hr), Qt.addEventListener("change", hr)), hr()) : e(42, Kt = se);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(26, l = q.getDerivedFromVars(q.json.cross_content_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(25, c = q.getDerivedFromVars(q.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(24, u = q.getDerivedFromVars(q.json.cross_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(23, f = q.getDerivedFromVars(q.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(22, _ = q.getDerivedFromVars(q.json.scroll_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(21, h = q.getDerivedFromVars(q.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && U(e(20, m = q.getDerivedFromVars(q.json.scrollbar))), t.$$.dirty[0] & /*componentContext*/
    1 && A(e(19, p = q.getDerivedFromVars(q.json.default_item))), t.$$.dirty[0] & /*componentContext, items*/
    129 | t.$$.dirty[1] & /*jsonItems, prevContext*/
    37748736 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    128) {
      let se = [];
      if (q.json.item_builder && Array.isArray(Le) && Array.isArray(q.json.item_builder.prototypes)) {
        const We = q.json.item_builder;
        se = _l(Le, st, q, We);
      } else
        se = (Array.isArray(o) && o || []).map((We, ke) => ({
          div: We,
          key: We.id || { index: ke, data: We }
        }));
      const d = new Set(br), z = /* @__PURE__ */ new Map();
      let Ie = !1;
      Wt === q && br.forEach((We) => {
        We.key && (typeof We.key == "string" && z.has(We.key) ? Ie || (Ie = !0, q.logError(K(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: We.key } }))) : z.set(
          typeof We.key == "string" ? We.key : We.key.index,
          We
        ));
      }), e(7, br = se.map((We, ke) => {
        let B = !Ie && z.get(We.id), Ut = z.get(ke);
        return !B && !We.id && typeof We.key == "object" && typeof (Ut == null ? void 0 : Ut.key) == "object" && Ui(Ut.key.data, We.key.data) && (B = Ut), B ? (d.delete(B), B) : q.produceChildContext(We.div, {
          path: ke,
          variables: We.vars,
          id: We.id,
          key: We.key
        });
      }));
      for (const We of d)
        We.destroy();
      e(53, Wt = q);
    }
    if (t.$$.dirty[1] & /*mounted*/
    512 | t.$$.dirty[2] & /*$isDesktop*/
    64 && e(8, w = $ && X), t.$$.dirty[0] & /*shouldCheckArrows, itemsGridElem*/
    264 | t.$$.dirty[1] & /*resizeObserver*/
    256 && (w ? typeof ResizeObserver < "u" && (e(39, Dt = new ResizeObserver(() => {
      er();
    })), Dt.observe(tt)) : Dt && (Dt.disconnect(), e(39, Dt = null))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[2] & /*$jsonOrientation*/
    32 && e(4, je = ha(we, je)), t.$$.dirty[1] & /*align*/
    4096 | t.$$.dirty[2] & /*$jsonCrossContentAlignment*/
    16 && e(43, He = Gh(ee, He)), t.$$.dirty[1] & /*itemSpacing*/
    8192 | t.$$.dirty[2] & /*$jsonItemSpacing*/
    8 && (e(44, Ve = rn(pe, Ve)), e(12, pt = _e(Ve))), t.$$.dirty[1] & /*itemSpacing, crossSpacing*/
    40960 | t.$$.dirty[2] & /*$jsonCrossSpacing*/
    4 && (e(46, Be = rn(Ke, Ve)), e(45, $e = _e(Be))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*$direction, padding*/
    134283264 | t.$$.dirty[2] & /*$jsonPaddings*/
    2) {
      e(47, Vt = os(Q, T, Vt));
      const se = je === "horizontal" ? (jr = (Xt = Q == null ? void 0 : Q.end) != null ? Xt : Q == null ? void 0 : Q[T === "ltr" ? "right" : "left"]) != null ? jr : 0 : (v = Q == null ? void 0 : Q.bottom) != null ? v : 0, d = _e(se);
      e(13, Oe = {
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
      br.forEach((d) => {
        const z = je === "horizontal" ? "width" : "height";
        se.push(d.getDerivedFromVars({
          size: d.json[z],
          visibility: d.json.visibility
        }));
      }), Se(e(14, Gt = Wi(se, (d) => [...d])));
    }
    if (t.$$.dirty[0] & /*items*/
    128 | t.$$.dirty[1] & /*columns*/
    2048 | t.$$.dirty[2] & /*$childStore*/
    1 && e(18, k = Qh(br, ve, Kt)), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*columns, templateSizes*/
    133120 | t.$$.dirty[2] & /*$childStore*/
    1 && (e(48, bt = []), Kt > 1 || ve.forEach((se, d) => {
      var z;
      se.visibility !== "gone" && (!se.size && je === "horizontal" || ((z = se.size) == null ? void 0 : z.type) === "match_parent" ? bt.push("100%") : bt.push("max-content"), d + 1 < ve.length && bt.push("auto"));
    }), bt.push("auto")), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, N = q.json.fixed_columns === !0), t.$$.dirty[0] & /*orientation, scrollerStyle, childLayoutParams*/
    112 | t.$$.dirty[1] & /*align, $jsonScrollMode, itemSpacing*/
    1073754112) {
      const se = {};
      let d = {};
      if (e(49, _r = !1), d.treatMatchParentAs100 = !0, je === "horizontal" ? (d.parentVAlign = He, d.parentContainerOrientation = "horizontal") : (d.parentHAlign = He, d.parentContainerOrientation = "vertical"), Z === "paging") {
        e(49, _r = !0), d.scrollSnap = "start";
        const z = je === "horizontal" ? "scroll-padding-left" : "scroll-padding-top";
        se[z] = _e(Ve / 2);
      }
      e(5, It = xo(se, It)), e(6, Fe = xo(d, Fe));
    }
    t.$$.dirty[0] & /*orientation*/
    16 && e(54, R = je === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*padding, crossGridGap, fixedColumns, columns*/
    16861184 && e(17, L = {
      padding: Vt,
      "grid-gap": $e,
      ...N && Kt > 1 && je === "vertical" ? {
        display: "grid",
        "grid-template-columns": `repeat(${Kt}, 1fr)`
      } : {}
    }), t.$$.dirty[1] & /*gridTemplate, templateSizes*/
    8519680 && e(16, re = {
      [R]: Jh(bt)
    }), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*scrollSnap, $jsonScrollbar*/
    537133056 && e(15, ue = {
      orientation: je,
      "scroll-snap": _r,
      scrollbar: D === "auto" ? "auto" : "none"
    }), t.$$.dirty[1] & /*$jsonDefaultItem, defaultItem*/
    268959744 && e(50, vt = rn(Y, vt)), t.$$.dirty[0] & /*componentContext*/
    1 && q.json && er(), t.$$.dirty[0] & /*componentContext, orientation, scroller*/
    21 | t.$$.dirty[1] & /*prevId, $direction*/
    134218752 && q.json && ($t && (st.unregisterInstance($t), e(41, $t = void 0)), q.id && !q.fakeElement && (e(41, $t = q.id), st.registerInstance($t, {
      setCurrentItem(se, d) {
        const z = yr();
        if (se < 0 || se > z.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        jt(z, se, { animated: d });
      },
      setPreviousItem(se, d, z) {
        const Ie = it("prev"), We = yr();
        let ke = Ie - se;
        jt(We, ke, { animated: z, overflow: d });
      },
      setNextItem(se, d, z) {
        const Ie = je === "horizontal", We = T === "ltr" || !Ie ? 1 : -1, ke = Ie ? I.scrollLeft * We + I.offsetWidth === I.scrollWidth : I.scrollTop + I.offsetHeight === I.scrollHeight, B = yr();
        if (ke && d === "ring") {
          jt(B, 0, { animated: z });
          return;
        }
        let Ht = it("next") + se;
        jt(B, Ht, { animated: z, overflow: d });
      },
      scrollToStart(se) {
        vr(0, se);
      },
      scrollToEnd(se) {
        vr(
          T === "ltr" || je !== "horizontal" ? 1e6 : -1e6,
          se
        );
      },
      scrollToPosition(se, d) {
        vr(
          T === "ltr" || je !== "horizontal" ? se : -se,
          d
        );
      },
      scrollCombined({ step: se, offset: d, overflow: z, animated: Ie }) {
        if (se) {
          const ke = it(se > 0 ? "next" : "prev") + se;
          jt(yr(), ke, { animated: Ie, extraOffset: d, overflow: z });
        } else d && Ir(d, { overflow: z, animated: Ie });
      }
    })));
  }, [
    q,
    fe,
    I,
    tt,
    je,
    It,
    Fe,
    br,
    w,
    Ct,
    lt,
    St,
    pt,
    Oe,
    Gt,
    ue,
    re,
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
    Me,
    Et,
    Tt,
    kr,
    Mt,
    _t,
    er,
    ie,
    Dt,
    X,
    $t,
    Kt,
    He,
    Ve,
    $e,
    Be,
    Vt,
    bt,
    _r,
    vt,
    tr,
    Qt,
    Wt,
    R,
    N,
    o,
    n,
    T,
    Y,
    D,
    Z,
    ve,
    Q,
    Ke,
    pe,
    ee,
    we,
    $,
    Le,
    ut,
    At,
    Jt,
    Yt,
    sr,
    dt
  ];
}
class $h extends Or {
  constructor(r) {
    super(), Lr(this, r, xh, Zh, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const em = "appkit-outer", tm = "appkit-tabs", rm = "appkit-tabs__list", nm = "appkit-tabs__item", om = "appkit-tabs__item_selected", im = "appkit-tabs_animation_fade", sm = "appkit-tabs_animation_none", lm = "appkit-tabs__item_actionable", am = "appkit-tabs__panels", cm = "appkit-tabs__swiper", um = "appkit-tabs__swiper_animated", fm = "appkit-tabs__swiper_inited", dm = "appkit-tabs__panel", _m = "appkit-tabs__panel_visible", pm = "appkit-tabs__separator", gm = "appkit-tabs__delimitier", vn = {
  outer: em,
  "root__any-actions": "appkit-root__any-actions",
  tabs: tm,
  tabs__list: rm,
  "tabs__items-bg": "appkit-tabs__items-bg",
  "tabs__items-text": "appkit-tabs__items-text",
  tabs__item: nm,
  tabs__item_selected: om,
  tabs_animation_fade: im,
  tabs_animation_none: sm,
  tabs__item_actionable: lm,
  tabs__panels: am,
  "tabs_own-height": "appkit-tabs_own-height",
  tabs__swiper: cm,
  tabs__swiper_animated: um,
  tabs__swiper_inited: fm,
  tabs__panel: dm,
  tabs__panel_visible: _m,
  "tabs_height-parent_yes": "appkit-tabs_height-parent_yes",
  tabs__separator: pm,
  tabs__delimitier: gm,
  "tabs__tabs-highlighter": "appkit-tabs__tabs-highlighter"
};
function hm(t, r) {
  var n, o;
  if (!t || !t.image_url || typeof t.image_url != "string")
    return r;
  const e = {
    url: t.image_url,
    width: 12,
    height: 12
  };
  return ((n = t.width) == null ? void 0 : n.type) === "fixed" && Pn(t.width.value) && (e.width = t.width.value), ((o = t.height) == null ? void 0 : o.type) === "fixed" && Pn(t.height.value) && (e.height = t.height.value), e;
}
const Ad = 37, Ed = 39, Sd = 36, Vd = 35;
function mm(t, r, e, n) {
  const o = [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ];
  for (let i = 0; i < o.length; ++i)
    if (o[i] && !Mn(o[i]))
      return n;
  return js(t, r, e);
}
function Hc(t) {
  const r = t.touches[0], e = r.clientX || r.pageX, n = r.clientY || r.pageY;
  return { x: e, y: n };
}
function bm(t) {
  let r, e;
  return r = new Zn({
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
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function ym(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r, { enabled: i } = r;
  const s = Do(i);
  return _i(_a, { isEnabled: s }), t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams), "enabled" in a && e(2, i = a.enabled);
  }, t.$$.update = () => {
    t.$$.dirty & /*enabled*/
    4 && s.set(i);
  }, [n, o, i];
}
class wm extends Or {
  constructor(r) {
    super(), Lr(this, r, ym, bm, Er, {
      componentContext: 0,
      layoutParams: 1,
      enabled: 2
    });
  }
}
const { Boolean: Wc, window: km } = Po;
function Uc(t, r, e) {
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
function Gc(t, r, e) {
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
function Jc(t, r, e) {
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
function vm(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function jm(t) {
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
    $$slots: { default: [Am] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = jo(o, n[i]);
  return r = new hn({ props: o }), {
    c() {
      Rt(r.$$.fragment);
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
        2097152 && pd(
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
      e || (H(r.$$.fragment, i), e = !0);
    },
    o(i) {
      te(r.$$.fragment, i), e = !1;
    },
    d(i) {
      zt(r, i);
    }
  };
}
function qc(t) {
  let r;
  return {
    c() {
      r = Pe("span"), g(r, "class", vn.tabs__delimitier), F(
        r,
        "width",
        /*delimitierStyle*/
        t[15].width ? _e(
          /*delimitierStyle*/
          t[15].width
        ) : void 0
      ), F(
        r,
        "height",
        /*delimitierStyle*/
        t[15].height ? _e(
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
        e[15].width ? _e(
          /*delimitierStyle*/
          e[15].width
        ) : void 0
      ), n[0] & /*delimitierStyle*/
      32768 && F(
        r,
        "height",
        /*delimitierStyle*/
        e[15].height ? _e(
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
function Kc(t) {
  let r, e, n = (
    /*item*/
    t[99].title + ""
  ), o, i, s = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && qc(t)
  );
  return {
    c() {
      s && s.c(), r = mr(), e = Pe("span"), o = Gn(n), g(e, "class", i = mt("tabs__item", vn, {
        selected: (
          /*isSelected*/
          t[104]
        ),
        actionable: !!/*item*/
        t[99].title_click_action
      }));
    },
    m(a, l) {
      s && s.m(a, l), J(a, r, l), J(a, e, l), wt(e, o);
    },
    p(a, l) {
      /*delimitierStyle*/
      a[15] && /*index*/
      a[100] > 0 ? s ? s.p(a, l) : (s = qc(a), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null), l[0] & /*$childStore*/
      262144 && n !== (n = /*item*/
      a[99].title + "") && eo(o, n), l[0] & /*$childStore, selected*/
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
      a && (G(r), G(e)), s && s.d(a);
    }
  };
}
function Yc(t) {
  let r, e;
  return {
    c() {
      r = Pe("div"), g(r, "class", vn["tabs__tabs-highlighter"]), g(r, "style", e = ur(
        /*selectedTabStyles*/
        t[36]
      ));
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o[1] & /*selectedTabStyles*/
      32 && e !== (e = ur(
        /*selectedTabStyles*/
        n[36]
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Xc(t) {
  let r, e;
  return {
    c() {
      r = Pe("img"), g(r, "class", vn.tabs__delimitier), g(r, "alt", ""), g(r, "loading", "lazy"), g(r, "decoding", "async"), Kn(r.src, e = /*delimitierStyle*/
      t[15].url) || g(r, "src", e), F(
        r,
        "width",
        /*delimitierStyle*/
        t[15].width ? _e(
          /*delimitierStyle*/
          t[15].width
        ) : void 0
      ), F(
        r,
        "height",
        /*delimitierStyle*/
        t[15].height ? _e(
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
      32768 && !Kn(r.src, e = /*delimitierStyle*/
      n[15].url) && g(r, "src", e), o[0] & /*delimitierStyle*/
      32768 && F(
        r,
        "width",
        /*delimitierStyle*/
        n[15].width ? _e(
          /*delimitierStyle*/
          n[15].width
        ) : void 0
      ), o[0] & /*delimitierStyle*/
      32768 && F(
        r,
        "height",
        /*delimitierStyle*/
        n[15].height ? _e(
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
function Cm(t) {
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
function Zc(t) {
  let r, e, n, o = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && Xc(t)
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
  return e = new ul({
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
        ].filter(Js) : []
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
      $$slots: { default: [Cm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      o && o.c(), r = mr(), Rt(e.$$.fragment);
    },
    m(s, a) {
      o && o.m(s, a), J(s, r, a), Nt(e, s, a), n = !0;
    },
    p(s, a) {
      t = s, /*delimitierStyle*/
      t[15] && /*index*/
      t[100] > 0 ? o ? o.p(t, a) : (o = Xc(t), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
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
      ].filter(Js) : []), a[0] & /*$childStore, selected, componentContext*/
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
      n || (H(e.$$.fragment, s), n = !0);
    },
    o(s) {
      te(e.$$.fragment, s), n = !1;
    },
    d(s) {
      s && G(r), o && o.d(s), zt(e, s);
    }
  };
}
function Qc(t) {
  let r, e;
  return {
    c() {
      r = Pe("div"), g(r, "class", vn.tabs__separator), g(r, "style", e = ur(
        /*separatorStyle*/
        t[38]
      ));
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o[1] & /*separatorStyle*/
      128 && e !== (e = ur(
        /*separatorStyle*/
        n[38]
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function xc(t) {
  let r, e;
  return r = new wm({
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
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function $c(t) {
  let r, e, n, o, i, s, a = (
    /*childComponentContext*/
    t[101] && xc(t)
  );
  return {
    c() {
      r = Pe("div"), a && a.c(), e = mr(), g(r, "class", n = mt("tabs__panel", vn, {
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
      J(l, r, c), a && a.m(r, null), wt(r, e), s = !0;
    },
    p(l, c) {
      /*childComponentContext*/
      l[101] ? a ? (a.p(l, c), c[0] & /*$childStore*/
      262144 | c[1] & /*showedPanels*/
      4 && H(a, 1)) : (a = xc(l), a.c(), H(a, 1), a.m(r, e)) : a && (fr(), te(a, 1, 1, () => {
        a = null;
      }), dr()), (!s || c[0] & /*$childStore*/
      262144 | c[1] & /*visiblePanels*/
      8 && n !== (n = mt("tabs__panel", vn, {
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
      s || (H(a), s = !0);
    },
    o(l) {
      te(a), s = !1;
    },
    d(l) {
      l && G(r), a && a.d();
    }
  };
}
function Am(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, h, m, p, w = ir(
    /*$childStore*/
    t[18]
  ), k = [];
  for (let A = 0; A < w.length; A += 1)
    k[A] = Kc(Jc(t, w, A));
  let N = (
    /*animationType*/
    t[16] === "slide" && /*selectedTabStyles*/
    t[36] && Yc(t)
  ), R = ir(
    /*$childStore*/
    t[18]
  ), L = [];
  for (let A = 0; A < R.length; A += 1)
    L[A] = Zc(Gc(t, R, A));
  const re = (A) => te(L[A], 1, 1, () => {
    L[A] = null;
  });
  let ue = (
    /*$jsonSeparator*/
    t[20] && Qc(t)
  ), T = ir(
    /*$childStore*/
    t[18]
  ), Y = [];
  for (let A = 0; A < T.length; A += 1)
    Y[A] = $c(Uc(t, T, A));
  const le = (A) => te(Y[A], 1, 1, () => {
    Y[A] = null;
  });
  return {
    c() {
      r = Pe("div"), e = Pe("div");
      for (let A = 0; A < k.length; A += 1)
        k[A].c();
      n = mr(), N && N.c(), o = mr(), i = Pe("div");
      for (let A = 0; A < L.length; A += 1)
        L[A].c();
      a = mr(), ue && ue.c(), l = mr(), c = Pe("div"), u = Pe("div");
      for (let A = 0; A < Y.length; A += 1)
        Y[A].c();
      g(e, "class", vn["tabs__items-bg"]), g(e, "aria-hidden", "true"), g(i, "class", vn["tabs__items-text"]), g(r, "class", s = vn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Cr["root_restrict-scroll"] : "")), g(r, "role", "tablist"), F(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? po(
          /*titlePadding*/
          t[14],
          /*$direction*/
          t[19]
        ) : ""
      ), F(r, "--divkit-tabs-font-size", _e(
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
      ), g(u, "class", f = mt("tabs__swiper", vn, {
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
    m(A, D) {
      J(A, r, D), wt(r, e);
      for (let M = 0; M < k.length; M += 1)
        k[M] && k[M].m(e, null);
      wt(e, n), N && N.m(e, null), wt(r, o), wt(r, i);
      for (let M = 0; M < L.length; M += 1)
        L[M] && L[M].m(i, null);
      t[74](r), J(A, a, D), ue && ue.m(A, D), J(A, l, D), J(A, c, D), wt(c, u);
      for (let M = 0; M < Y.length; M += 1)
        Y[M] && Y[M].m(u, null);
      t[75](u), t[76](c), h = !0, m || (p = [
        Qe(
          r,
          "keydown",
          /*onTabKeydown*/
          t[55]
        ),
        Qe(c, "touchstart", function() {
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
        Qe(c, "touchmove", function() {
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
        Qe(c, "touchend", function() {
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
        Qe(c, "touchcancel", function() {
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
    p(A, D) {
      if (t = A, D[0] & /*$childStore, selected, delimitierStyle*/
      425984) {
        w = ir(
          /*$childStore*/
          t[18]
        );
        let M;
        for (M = 0; M < w.length; M += 1) {
          const U = Jc(t, w, M);
          k[M] ? k[M].p(U, D) : (k[M] = Kc(U), k[M].c(), k[M].m(e, n));
        }
        for (; M < k.length; M += 1)
          k[M].d(1);
        k.length = w.length;
      }
      if (/*animationType*/
      t[16] === "slide" && /*selectedTabStyles*/
      t[36] ? N ? N.p(t, D) : (N = Yc(t), N.c(), N.m(e, null)) : N && (N.d(1), N = null), D[0] & /*componentContext, $childStore, selected, delimitierStyle*/
      425985 | D[1] & /*instId, selectItem*/
      8912896) {
        R = ir(
          /*$childStore*/
          t[18]
        );
        let M;
        for (M = 0; M < R.length; M += 1) {
          const U = Gc(t, R, M);
          L[M] ? (L[M].p(U, D), H(L[M], 1)) : (L[M] = Zc(U), L[M].c(), H(L[M], 1), L[M].m(i, null));
        }
        for (fr(), M = R.length; M < L.length; M += 1)
          re(M);
        dr();
      }
      if ((!h || D[1] & /*$jsonRestrictParentScroll*/
      131072 && s !== (s = vn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Cr["root_restrict-scroll"] : ""))) && g(r, "class", s), D[0] & /*titlePadding, $direction*/
      540672 && F(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? po(
          /*titlePadding*/
          t[14],
          /*$direction*/
          t[19]
        ) : ""
      ), D[0] & /*tabFontSize*/
      16 && F(r, "--divkit-tabs-font-size", _e(
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
      t[20] ? ue ? ue.p(t, D) : (ue = Qc(t), ue.c(), ue.m(l.parentNode, l)) : ue && (ue.d(1), ue = null), D[0] & /*$childStore, childLayoutParams, selected*/
      393224 | D[1] & /*visiblePanels, instId, showedPanels*/
      524300) {
        T = ir(
          /*$childStore*/
          t[18]
        );
        let M;
        for (M = 0; M < T.length; M += 1) {
          const U = Uc(t, T, M);
          Y[M] ? (Y[M].p(U, D), H(Y[M], 1)) : (Y[M] = $c(U), Y[M].c(), H(Y[M], 1), Y[M].m(u, null));
        }
        for (fr(), M = T.length; M < Y.length; M += 1)
          le(M);
        dr();
      }
      (!h || D[1] & /*isSwipeInitialized, isAnimated*/
      3 && f !== (f = mt("tabs__swiper", vn, {
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
    i(A) {
      if (!h) {
        for (let D = 0; D < R.length; D += 1)
          H(L[D]);
        for (let D = 0; D < T.length; D += 1)
          H(Y[D]);
        h = !0;
      }
    },
    o(A) {
      L = L.filter(Wc);
      for (let D = 0; D < L.length; D += 1)
        te(L[D]);
      Y = Y.filter(Wc);
      for (let D = 0; D < Y.length; D += 1)
        te(Y[D]);
      h = !1;
    },
    d(A) {
      A && (G(r), G(a), G(l), G(c)), cn(k, A), N && N.d(), cn(L, A), t[74](null), ue && ue.d(A), cn(Y, A), t[75](null), t[76](null), m = !1, Gr(p);
    }
  };
}
function Em(t) {
  let r, e, n, o, i, s;
  const a = [jm, vm], l = [];
  function c(u, f) {
    return (
      /*hasError*/
      u[2] ? -1 : 0
    );
  }
  return ~(r = c(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(u, f) {
      ~r && l[r].m(u, f), J(u, n, f), o = !0, i || (s = Qe(km, "resize", function() {
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
    p(u, f) {
      t = u;
      let _ = r;
      r = c(t), r === _ ? ~r && l[r].p(t, f) : (e && (fr(), te(l[_], 1, 1, () => {
        l[_] = null;
      }), dr()), ~r ? (e = l[r], e ? e.p(t, f) : (e = l[r] = a[r](t), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(u) {
      o || (H(e), o = !0);
    },
    o(u) {
      te(e), o = !1;
    },
    d(u) {
      u && G(n), ~r && l[r].d(u), i = !1, s();
    }
  };
}
function Sm(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, re = j, ue = () => (re(), re = E(a, (v) => e(67, L = v)), a), T, Y = j, le = () => (Y(), Y = E(m, (v) => e(68, T = v)), m), A, D = j, M = () => (D(), D = E(h, (v) => e(69, A = v)), h), U, Z = j, me = () => (Z(), Z = E(f, (v) => e(70, U = v)), f), Ae, ve, he = j, Se = () => (he(), he = E(u, (v) => e(71, ve = v)), u), Q, xe = j, qe = () => (xe(), xe = E(c, (v) => e(72, Q = v)), c), Ke, be = j, Te = () => (be(), be = E(l, (v) => e(20, Ke = v)), l), pe, ge = j, de = () => (ge(), ge = E(_, (v) => e(48, pe = v)), _);
  t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => ge());
  let { componentContext: ee } = r, { layoutParams: ae = void 0 } = r;
  const ne = Dr(Kr), we = ne.direction;
  bn(t, we, (v) => e(19, Ae = v));
  const Re = ne.genId("tabs");
  let Ye, $ = !1, Le = Do([]);
  bn(t, Le, (v) => e(18, R = v));
  let Ne = {}, ot, ut, rt, yt = {}, nt = 12, Pt = "", ft = "", q = "", fe = "", st, Me = "", I = "", Ct, lt = "", St = "", Dt = "", tt = "", X = "", Et = "", Tt = 0, $t = "", Kt = "", je = null, He = !1, pt = !1, Ve, $e = [], Be = [], Vt = null, Oe = null, bt = null, Gt, It = !1, _r = !1, Fe, vt, or, tr = "slide", Qt, hr, kr, Mt;
  function br() {
    e(4, nt = 12), e(5, Pt = ""), e(6, fe = ""), e(7, st = void 0), e(27, Me = ""), e(28, I = ""), e(8, Ct = void 0), e(29, lt = ""), e(30, St = ""), e(9, Dt = ""), e(10, tt = ""), e(11, X = ""), e(12, Et = ""), e(13, Tt = 0), e(61, $t = ""), e(62, Kt = ""), e(14, je = null), e(15, or = void 0), e(16, tr = "slide"), e(35, Qt = 300), e(36, hr = void 0), ce();
  }
  function Wt(v) {
    ee.json.items && e(0, ee = kr = {
      ...ee,
      json: {
        ...ee.json,
        items: ee.json.items.map((se, d) => ({ ...se, div: v[d] }))
      }
    });
  }
  function _t(v) {
    if ($)
      return;
    const se = new Set($e.filter(zo)), d = /* @__PURE__ */ new Map();
    kr === ee && $e.forEach((z) => {
      z && d.set(z.json, z);
    }), e(33, $e = v.map((z, Ie) => {
      if ((Ie === p || $e[Ie]) && (z != null && z.div)) {
        const We = d.get(z.div);
        return We ? (se.delete(We), We) : ee.produceChildContext(z.div, { path: Ie });
      }
    })), e(34, Be = v.map((z, Ie) => Ie === p));
    for (const z of se)
      z.destroy();
    kr = ee;
  }
  async function er(v, se, d) {
    if (Ve = p, e(17, p = v), At(), vr(d), ce(), se) {
      await Vn();
      const z = ot.querySelector(`.${vn.tabs__item_selected}`);
      z && z.focus();
    }
  }
  function ie(v, se = !1) {
    const d = R == null ? void 0 : R.length;
    if (!d)
      return;
    const z = R.map((B) => B.index);
    let We = z.indexOf(p) + v;
    We >= d ? We = 0 : We < 0 && (We = d - 1);
    const ke = z[We];
    er(ke, se, !0);
  }
  function yr(v, se) {
    return p !== se ? (er(se, !1, !0), !1) : !0;
  }
  function vr(v = !0) {
    e(32, pt = v), jt(-p * 100), Ir(), qr(), lr(), vt = -p * ut.clientWidth;
  }
  async function jt(v) {
    await Vn(), e(23, rt.style.transform = `translate3d(${v}%,0,0)`, rt);
  }
  function Ir(v = !1) {
    const se = v ? Math.max(0, p - 1) : Math.min(p, Ve != null ? Ve : p), d = v ? Math.min(o.length - 1, p + 1) : Math.max(p, Ve != null ? Ve : p);
    ne.devtoolCreateHierarchy, $e.forEach((z) => {
      z == null || z.destroy();
    }), e(33, $e = $e.map((z, Ie) => {
      var ke;
      if (z)
        return z;
      const We = (ke = o[Ie]) == null ? void 0 : ke.div;
      if ((Ie >= se && Ie <= d || ne.devtoolCreateHierarchy === "eager" && !1) && We)
        return ee.produceChildContext(We, { path: Ie });
    })), e(34, Be = Be.map((z, Ie) => Ie >= se && Ie <= d));
  }
  async function qr() {
    var se;
    if (((se = ee.json.height) == null ? void 0 : se.type) === "match_parent")
      return;
    await Vn();
    const v = document.getElementById(`${Re}-panel-${p}`);
    v && e(22, ut.style.height = _e(v.offsetHeight), ut);
  }
  function lr() {
    Vt && clearTimeout(Vt), Vt = window.setTimeout(
      () => {
        e(34, Be = o.map((v, se) => se === p));
      },
      400
    );
  }
  function it(v) {
    if (!(v.ctrlKey || v.shiftKey || v.altKey || v.metaKey) && o) {
      if (v.which === Ad)
        ie(-1, !0);
      else if (v.which === Ed)
        ie(1, !0);
      else if (v.which === Sd)
        er(0, !0, !0);
      else if (v.which === Vd)
        er(o.length - 1, !0, !0);
      else
        return;
      v.preventDefault();
    }
  }
  function At() {
    He || (e(31, He = !0), e(22, ut.style.height = _e(ut.clientHeight), ut), e(23, rt.style.transform = `translate3d(${-(Ve != null ? Ve : p) * 100}%,0,0)`, rt));
  }
  function Jt(v) {
    var z;
    const se = v.target, d = (z = se == null ? void 0 : se.closest) == null ? void 0 : z.call(se, `.${Cr["root_restrict-scroll"]}`);
    o.length < 2 || v.touches.length > 1 || d && d !== ut || (It = !1, _r = !1, Oe = Hc(v), bt = null, Gt = Date.now(), Fe = vt || -p * ut.clientWidth, e(32, pt = !1), Vt && clearTimeout(Vt));
  }
  function Yt(v) {
    const se = Hc(v);
    if (!Oe || bt && bt.x === se.x && bt.y === se.y)
      return;
    bt = se;
    const d = ut.clientWidth;
    if (It) {
      vt = se.x - Oe.x + Fe;
      const z = d * o.length;
      if (vt > 0)
        vt = vt * d / (vt + d * 3);
      else if (-vt + d > z) {
        let Ie = -vt + d - z;
        Ie = Ie * d / (Ie + d * 3), vt = d - z - Ie;
      }
      jt(vt * 100 / d);
    } else Math.abs(se.y - Oe.y) > 10 ? _r = !0 : !_r && Math.abs(se.x - Oe.x) > 8 && (At(), It = !0, Oe = se, jt(-p * 100), Ir(!0));
    It && v.cancelable && v.preventDefault();
  }
  function sr() {
    _r = !1, Oe = null;
    let v = p;
    if (!It)
      return;
    It = !1;
    const se = Math.min(512, ut.clientWidth), d = Math.abs(Fe - vt), z = Math.min(1, (Date.now() - Gt) / 750);
    d > se / 4 * z && (v += Fe > vt ? 1 : -1), v >= o.length ? v = o.length - 1 : v < 0 && (v = 0), v === p ? (e(32, pt = !0), vt = -v * se, jt(-v * 100), lr()) : er(v, !1, !0);
  }
  function dt(v, se) {
    return v > o.length - 1 ? se === "ring" ? Vo(v, o.length) : o.length - 1 : v < 0 ? se === "ring" ? Vo(v, o.length) : 0 : v;
  }
  function ce() {
    tr === "slide" && Vn().then(() => {
      const v = ot == null ? void 0 : ot.querySelector("." + vn.tabs__item_selected);
      v && e(36, hr = {
        left: `${v.offsetLeft}px`,
        width: `${v.offsetWidth}px`,
        height: `${v.offsetHeight}px`
      });
    });
  }
  Xn(() => {
    ce(), ne.devtoolCreateHierarchy;
  }), ln(() => {
    $e.forEach((v) => {
      v == null || v.destroy();
    }), Ye && (ne.unregisterInstance(Ye), e(60, Ye = void 0));
  });
  const kt = (v, se) => yr(se, v);
  function nr(v) {
    Fr[v ? "unshift" : "push"](() => {
      ot = v, e(21, ot);
    });
  }
  function Xt(v) {
    Fr[v ? "unshift" : "push"](() => {
      rt = v, e(23, rt);
    });
  }
  function jr(v) {
    Fr[v ? "unshift" : "push"](() => {
      ut = v, e(22, ut);
    });
  }
  return t.$$set = (v) => {
    "componentContext" in v && e(0, ee = v.componentContext), "layoutParams" in v && e(1, ae = v.layoutParams);
  }, t.$$.update = () => {
    var v, se, d, z, Ie, We, ke, B, Ut, Ht;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(66, n = ee.origJson), t.$$.dirty[2] & /*origJson*/
    16 && n && br(), t.$$.dirty[0] & /*componentContext*/
    1 && e(63, o = Array.isArray(ee.json.items) && ee.json.items || []), t.$$.dirty[2] & /*items*/
    2 && e(47, i = o.map((Xe) => {
      var at;
      return { json: Xe.div, id: (at = Xe.div) == null ? void 0 : at.id };
    })), t.$$.dirty[0] & /*componentContext*/
    1 && e(65, s = ee.getJsonWithVars(ee.json.selected_tab)), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(46, a = ee.getDerivedFromVars(ee.json.tab_title_style, void 0, !0))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(45, l = ee.getDerivedFromVars(ee.json.has_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(44, c = ee.getDerivedFromVars(ee.json.separator_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Se(e(43, u = ee.getDerivedFromVars(ee.json.separator_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(42, f = ee.getDerivedFromVars(ee.json.switch_tabs_by_content_swipe_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(41, _ = ee.getDerivedFromVars(ee.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(40, h = ee.getDerivedFromVars(ee.json.title_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(39, m = ee.getDerivedFromVars(ee.json.tab_title_delimiter))), t.$$.dirty[2] & /*jsonSelectedTab*/
    8 && e(17, p = s && Number(s) || 0), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*items*/
    2)
      if (Array.isArray(o) && o.length) {
        let Xe = [];
        o.forEach((at, qt) => {
          const Vr = ee.getJsonWithVars({
            index: qt,
            title: at.title,
            title_click_action: at.title_click_action
          });
          Vr.title && typeof Vr.title == "string" ? Xe.push(Vr) : ee.logError(K(new Error("Incorrect title for the tab"), { additional: { index: qt } }));
        }), Le.set(Xe);
      } else
        Le.set([]);
    if (t.$$.dirty[0] & /*$childStore, componentContext*/
    262145 && (R != null && R.length ? e(2, $ = !1) : (e(2, $ = !0), ee.logError(K(new Error('Incorrect or empty "items" prop for div "tabs"'))))), t.$$.dirty[0] & /*componentContext, childLayoutParams*/
    9) {
      let Xe = { parentContainerOrientation: "horizontal" };
      ((v = ee.json.width) == null ? void 0 : v.type) === "wrap_content" && (Xe.parentHorizontalWrapContent = !0), (!ee.json.height || ee.json.height.type === "wrap_content") && (Xe.parentVerticalWrapContent = !0), e(3, Ne = xo(Xe, Ne));
    }
    if (t.$$.dirty[0] & /*hasError, selected, componentContext*/
    131077 | t.$$.dirty[2] & /*items*/
    2 && !$ && (p < 0 || p >= o.length) && (ee.logError(K(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: ee.json.selected_tab,
        length: o.length
      }
    })), e(17, p = p < 0 ? 0 : o.length - 1)), t.$$.dirty[0] & /*hasError, $childStore, selected, componentContext*/
    393221 && !$ && !R.some((Xe) => p === Xe.index) && (ee.logError(K(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: ee.json.selected_tab
      }
    })), e(17, p = ((se = R[0]) == null ? void 0 : se.index) || 0)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && e(64, w = L || {}), t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(4, nt = Un(w.font_size, nt)), t.$$.dirty[0] & /*tabFontSize, $direction, tabPaddings*/
    524336 | t.$$.dirty[2] & /*tabStyle*/
    4 && (w.font_size || w.paddings)) {
      const Xe = w.paddings || { top: 6, right: 8, bottom: 6, left: 8 }, at = {
        top: (Number(Xe.top) || 0) / nt * 10,
        right: (Number(Ae === "ltr" ? Xe.end : Xe.start) || Number(Xe.right) || 0) / nt * 10,
        bottom: (Number(Xe.bottom) || 0) / nt * 10,
        left: (Number(Ae === "ltr" ? Xe.start : Xe.end) || Number(Xe.left) || 0) / nt * 10
      };
      e(5, Pt = os(at, Ae, Pt));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Xe = w.line_height;
      Xe !== void 0 && Pn(Xe) && e(25, ft = _e(Xe / nt * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Xe = w.letter_spacing;
      Xe !== void 0 && Mn(Xe) && e(26, q = _e(Xe / nt * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize, tabBorderRadius*/
    80 | t.$$.dirty[2] & /*tabStyle*/
    4 && (w.corner_radius || w.corners_radius || w.font_size)) {
      const Xe = (d = w.corner_radius) != null ? d : 1e3;
      w.corners_radius ? e(6, fe = mm(w.corners_radius, Xe, nt, fe)) : Mn(Xe) && e(6, fe = _e(Xe / nt * 10));
    }
    t.$$.dirty[0] & /*tabActiveFontWeight*/
    128 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(7, st = bi(w.active_font_weight || w.font_weight, void 0, st)), w.font_family && typeof w.font_family == "string" ? e(27, Me = ne.typefaceProvider(w.font_family, { fontWeight: st || 400 })) : e(27, Me = ""), e(28, I = Li(w.active_font_variation_settings))), t.$$.dirty[0] & /*tabInactiveFontWeight*/
    256 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(8, Ct = bi(w.inactive_font_weight || w.font_weight, void 0, Ct)), w.font_family && typeof w.font_family == "string" ? e(29, lt = ne.typefaceProvider(w.font_family, { fontWeight: Ct || 400 })) : e(29, lt = ""), e(30, St = Li(w.inactive_font_variation_settings))), t.$$.dirty[0] & /*tabActiveTextColor*/
    512 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(9, Dt = gr(w.active_text_color, 1, Dt)), t.$$.dirty[0] & /*tabInactiveTextColor*/
    1024 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(10, tt = gr(w.inactive_text_color, 1, tt)), t.$$.dirty[0] & /*tabActiveBackground*/
    2048 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(11, X = gr(w.active_background_color, 1, X)), t.$$.dirty[0] & /*tabInactiveBackground*/
    4096 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(12, Et = gr(w.inactive_background_color, 1, Et)), t.$$.dirty[0] & /*tabItemSpacing*/
    8192 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(13, Tt = rn(w.item_spacing, Tt)), t.$$.dirty[0] & /*$jsonSeparator, $direction*/
    1572864 | t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*$jsonSeparatorColor, $jsonSeparatorPaddings, separatorMargins*/
    1537 && Ke && (Q && e(61, $t = gr(Q, 1, $t)), ve && e(62, Kt = os(ve, Ae, Kt))), t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*separatorMargins*/
    1 && e(38, k = {
      background: $t,
      margin: Kt
    }), t.$$.dirty[2] & /*$jsonSwipeEnabled*/
    256 && e(37, N = typeof U > "u" ? !0 : !!U), t.$$.dirty[0] & /*titlePadding*/
    16384 | t.$$.dirty[2] & /*$jsonTitlePaddings*/
    128 && e(14, je = mi(A || void 0, je)), t.$$.dirty[0] & /*delimitierStyle*/
    32768 | t.$$.dirty[2] & /*$jsonDelimiterStyle*/
    64 && e(15, or = hm(T, or)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && ((L == null ? void 0 : L.animation_type) === "fade" || (L == null ? void 0 : L.animation_type) === "none") && e(16, tr = L.animation_type), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && Mn(L == null ? void 0 : L.animation_duration) && e(35, Qt = L.animation_duration), t.$$.dirty[2] & /*items*/
    2 && _t(o), t.$$.dirty[0] & /*componentContext, hasError, selected*/
    131077 | t.$$.dirty[1] & /*prevId*/
    536870912 | t.$$.dirty[2] & /*items*/
    2 && ee.json && (Ye && (ne.unregisterInstance(Ye), e(60, Ye = void 0)), ee.id && !$ && !ee.fakeElement && (e(60, Ye = ee.id), ne.registerInstance(Ye, {
      setCurrentItem(Xe, at) {
        if (Xe < 0 || Xe > o.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        er(Xe, !1, at);
      },
      setPreviousItem(Xe, at, qt) {
        let Vr = dt(p - Xe, at);
        er(Vr, !1, qt);
      },
      setNextItem(Xe, at, qt) {
        let Vr = dt(p + Xe, at);
        er(Vr, !1, qt);
      },
      scrollToStart(Xe) {
        er(0, !1, Xe);
      },
      scrollToEnd(Xe) {
        er(o.length - 1, !1, Xe);
      },
      scrollCombined({ step: Xe, overflow: at, animated: qt }) {
        Xe && er(dt(p + Xe, at || "clamp"), !1, qt || !0);
      }
    }))), t.$$.dirty[0] & /*componentContext, selected, animationType*/
    196609 | t.$$.dirty[2] & /*items*/
    2 && e(24, yt = {
      "height-parent": ((z = ee.json.height) == null ? void 0 : z.type) === "match_parent" ? "yes" : "",
      "own-height": (((Ie = ee.json.height) == null ? void 0 : Ie.type) === "match_parent" || ((We = ee.json.height) == null ? void 0 : We.type) === "fixed") && !(((Ut = (B = (ke = o[p]) == null ? void 0 : ke.div) == null ? void 0 : B.height) == null ? void 0 : Ut.type) === "wrap_content" && ((Ht = o[p].div) != null && Ht.height.constrained)),
      animation: tr
    });
  }, [
    ee,
    ae,
    $,
    Ne,
    nt,
    Pt,
    fe,
    st,
    Ct,
    Dt,
    tt,
    X,
    Et,
    Tt,
    je,
    or,
    tr,
    p,
    R,
    Ae,
    Ke,
    ot,
    ut,
    rt,
    yt,
    ft,
    q,
    Me,
    I,
    lt,
    St,
    He,
    pt,
    $e,
    Be,
    Qt,
    hr,
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
    pe,
    we,
    Re,
    Le,
    Mt,
    Wt,
    yr,
    it,
    Jt,
    Yt,
    sr,
    ce,
    Ye,
    $t,
    Kt,
    o,
    w,
    s,
    n,
    L,
    T,
    A,
    U,
    ve,
    Q,
    kt,
    nr,
    Xt,
    jr
  ];
}
class Vm extends Or {
  constructor(r) {
    super(), Lr(this, r, Sm, Em, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const Fm = "appkit-state", Im = "appkit-state_overflow_visible", Dm = "appkit-state__animations", yi = {
  state: Fm,
  state_overflow_visible: Im,
  state__animations: Dm,
  "state__animation-child": "appkit-state__animation-child",
  "state__animation-child-inner": "appkit-state__animation-child-inner"
};
function pl(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function Tm(t) {
  return t * t * t;
}
function Fd(t) {
  const r = t - 1;
  return r * r * r + 1;
}
function Id(t) {
  return (r) => {
    if (r <= 0)
      return 0;
    if (r >= 1)
      return 1;
    const e = r * t.length, n = Math.floor(e), o = t[n], i = t[n + 1], s = e - n;
    return o * s + i * (1 - s);
  };
}
const Mm = [
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
], Pm = Id(Mm), Nm = [
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
], zm = Id(Nm), Ul = {
  linear: el,
  ease: Pm,
  ease_in: Tm,
  ease_out: Fd,
  ease_in_out: pl,
  spring: zm
};
function ma(t) {
  return Ul[t];
}
const Dd = 200, Td = 0, Lm = 0, Om = 0;
function eu(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || Dd) + (Number(r.start_delay) || Td)
  ));
}
function Bm(t, {
  transitions: r,
  elementBbox: e,
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
        var Y, le, A;
        const N = Number(k.start_delay) || Td, R = Number(k.duration) || Dd, L = Math.max(0, Math.min(1, (c - N) / R)), re = o === "in" ? 1 - L : L, T = (ma(k.interpolator || "ease_in_out") || pl)(re);
        if (k.type === "fade")
          return T >= 1 ? {
            active: !1,
            opacity: 0
          } : {
            active: T > 0 && T < 1,
            opacity: (1 - T) * a + T * (k.alpha || Lm)
          };
        if (k.type === "slide") {
          const D = k.edge === "top" || k.edge === "left" ? -1 : 1, M = k.edge === "top" || k.edge === "bottom" || !k.edge ? "translateY" : "translateX";
          let U = (Y = k.distance) == null ? void 0 : Y.value;
          U === void 0 && (k.edge === "top" || k.edge === "bottom" || !k.edge ? U = Math.abs(
            n[k.edge === "bottom" ? "bottom" : "top"] - e[k.edge === "bottom" ? "top" : "bottom"]
          ) : U = Math.abs(
            n[k.edge === "left" ? "left" : "right"] - e[k.edge === "left" ? "right" : "left"]
          ));
          const Z = U * T;
          return {
            active: T > 0 && T < 1,
            translate: `${M}(${Z * D}px)`
          };
        } else if (k.type === "scale") {
          const D = 1 - T + T * (k.scale || Om), M = (le = k.pivot_x) != null ? le : 0.5, U = (A = k.pivot_y) != null ? A : 0.5, Z = (1 - D) * e.width * M, me = (1 - D) * e.height * U;
          return {
            active: T > 0 && T < 1,
            scale: `translate(${Z}px, ${me}px) scale(${D})`
          };
        }
        return {};
      }), f = u.map((k) => k.opacity).filter((k) => k !== void 0).reduce((k, N) => k * N, 1), _ = u.map((k) => k.translate).filter((k) => k !== void 0).join(" "), h = u.map((k) => k.scale).filter((k) => k !== void 0).join(" "), m = u.filter((k) => k.active).map((k) => k.scale).filter((k) => k !== void 0), p = m.length ? m[m.length - 1] : h;
      return `transform:${[_, p].filter(Boolean).join(" ") || "none"};opacity:${f}`;
    }
  };
}
function Uo(t, r, e) {
  return t * (1 - e) + r * e;
}
const Rm = 200, Hm = 0;
function Wm(t, {
  rootBbox: r,
  beforeBbox: e,
  afterBbox: n,
  transition: o
}) {
  var i, s;
  return {
    delay: (i = o.start_delay) != null ? i : Hm,
    duration: zi() ? 0 : (s = o.duration) != null ? s : Rm,
    easing: o.interpolator && o.interpolator in Ul ? Ul[o.interpolator] : pl,
    css: (a) => [
      `top:${Uo(e.top, n.top, a) - r.top}px`,
      `left:${Uo(e.left, n.left, a) - r.left}px`,
      `width:${Uo(e.width, n.width, a)}px`,
      `height:${Uo(e.height, n.height, a)}px`
    ].join(";")
  };
}
function Md(t) {
  const r = [];
  return t.type === "set" ? (t.items || []).forEach((e) => {
    r.push(...Md(e));
  }) : r.push(t), r;
}
const { Map: Um } = Po;
function tu(t, r, e) {
  const n = t.slice();
  return n[37] = r[e], n;
}
function Gm(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function Jm(t) {
  let r, e;
  const n = [
    {
      cls: mt(
        "state",
        yi,
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
    $$slots: { default: [Ym] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = jo(o, n[i]);
  return r = new hn({ props: o }), {
    c() {
      Rt(r.$$.fragment);
    },
    m(i, s) {
      Nt(r, i, s), e = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams, parentOfItems, replaceItems, devapi*/
      6915 ? No(n, [
        s[0] & /*mods*/
        256 && {
          cls: mt(
            "state",
            yi,
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
        2048 && pd(
          /*devapi*/
          i[11]
        )
      ]) : {};
      s[0] & /*animationRoot, animationList, selectedId, selectedComponentContext, childContexts*/
      248 | s[1] & /*$$scope*/
      4096 && (a.$$scope = { dirty: s, ctx: i }), r.$set(a);
    },
    i(i) {
      e || (H(r.$$.fragment, i), e = !0);
    },
    o(i) {
      te(r.$$.fragment, i), e = !1;
    },
    d(i) {
      zt(r, i);
    }
  };
}
function ru(t) {
  let r = (
    /*selectedId*/
    t[5]
  ), e, n, o = nu(t);
  return {
    c() {
      o.c(), e = xt();
    },
    m(i, s) {
      o.m(i, s), J(i, e, s), n = !0;
    },
    p(i, s) {
      s[0] & /*selectedId*/
      32 && Er(r, r = /*selectedId*/
      i[5]) ? (fr(), te(o, 1, 1, j), dr(), o = nu(i), o.c(), H(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
    },
    i(i) {
      n || (H(o), n = !0);
    },
    o(i) {
      te(o), n = !1;
    },
    d(i) {
      i && G(e), o.d(i);
    }
  };
}
function nu(t) {
  let r, e;
  return r = new Zn({
    props: {
      componentContext: (
        /*selectedComponentContext*/
        t[6]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function qm(t) {
  let r, e, n, o, i, s, a, l;
  n = new Zn({
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
      r = Pe("div"), e = Pe("div"), Rt(n.$$.fragment), o = mr(), g(e, "class", yi["state__animation-child-inner"]), g(r, "class", yi["state__animation-child"]);
    },
    m(u, f) {
      J(u, r, f), wt(r, e), Nt(n, e, null), wt(r, o), s = !0, a || (l = Qe(r, "introend", c), a = !0);
    },
    p(u, f) {
      t = u;
      const _ = {};
      f[0] & /*animationList*/
      16 && (_.componentContext = /*item*/
      t[37].componentContextCopy), n.$set(_);
    },
    i(u) {
      s || (H(n.$$.fragment, u), i || fo(() => {
        i = ll(
          r,
          Wm,
          /*item*/
          t[37]
        ), i.start();
      }), s = !0);
    },
    o(u) {
      te(n.$$.fragment, u), s = !1;
    },
    d(u) {
      u && G(r), zt(n), a = !1, l();
    }
  };
}
function Km(t) {
  let r, e, n, o, i, s = `${/*item*/
  t[37].offsetLeft}px`, a = `${/*item*/
  t[37].offsetTop}px`, l = `${/*item*/
  t[37].width}px`, c = `${/*item*/
  t[37].height}px`, u, f, _;
  n = new Zn({
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
      r = Pe("div"), e = Pe("div"), Rt(n.$$.fragment), o = mr(), g(e, "class", yi["state__animation-child-inner"]), g(r, "class", yi["state__animation-child"]), F(r, "left", s), F(r, "top", a), F(r, "width", l), F(r, "height", c);
    },
    m(m, p) {
      J(m, r, p), wt(r, e), Nt(n, e, null), wt(r, o), u = !0, f || (_ = Qe(r, "introend", h), f = !0);
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
      u || (H(n.$$.fragment, m), i || fo(() => {
        i = ll(
          r,
          Bm,
          /*item*/
          t[37]
        ), i.start();
      }), u = !0);
    },
    o(m) {
      te(n.$$.fragment, m), u = !1;
    },
    d(m) {
      m && G(r), zt(n), f = !1, _();
    }
  };
}
function ou(t, r) {
  let e, n, o, i, s;
  const a = [Km, qm], l = [];
  function c(u, f) {
    return "direction" in /*item*/
    u[37] ? 0 : 1;
  }
  return n = c(r), o = l[n] = a[n](r), {
    key: t,
    first: null,
    c() {
      e = xt(), o.c(), i = xt(), this.first = e;
    },
    m(u, f) {
      J(u, e, f), l[n].m(u, f), J(u, i, f), s = !0;
    },
    p(u, f) {
      r = u;
      let _ = n;
      n = c(r), n === _ ? l[n].p(r, f) : (fr(), te(l[_], 1, 1, () => {
        l[_] = null;
      }), dr(), o = l[n], o ? o.p(r, f) : (o = l[n] = a[n](r), o.c()), H(o, 1), o.m(i.parentNode, i));
    },
    i(u) {
      s || (H(o), s = !0);
    },
    o(u) {
      te(o), s = !1;
    },
    d(u) {
      u && (G(e), G(i)), l[n].d(u);
    }
  };
}
function Ym(t) {
  let r, e, n, o = [], i = new Um(), s, a = !1, l = (
    /*selectedComponentContext*/
    t[6] && ru(t)
  ), c = ir(
    /*animationList*/
    t[4]
  );
  const u = (f) => (
    /*item*/
    f[37]
  );
  for (let f = 0; f < c.length; f += 1) {
    let _ = tu(t, c, f), h = u(_);
    i.set(h, o[f] = ou(h, _));
  }
  return {
    c() {
      r = mr(), l && l.c(), e = mr(), n = Pe("div");
      for (let f = 0; f < o.length; f += 1)
        o[f].c();
      g(n, "class", yi.state__animations), g(n, "aria-hidden", "true");
    },
    m(f, _) {
      J(f, r, _), l && l.m(f, _), J(f, e, _), J(f, n, _);
      for (let h = 0; h < o.length; h += 1)
        o[h] && o[h].m(n, null);
      t[23](n), s = !0;
    },
    p(f, _) {
      /*selectedComponentContext*/
      f[6] ? l ? (l.p(f, _), _[0] & /*selectedComponentContext*/
      64 && H(l, 1)) : (l = ru(f), l.c(), H(l, 1), l.m(e.parentNode, e)) : l && (fr(), te(l, 1, 1, () => {
        l = null;
      }), dr()), _[0] & /*animationList, onOutro*/
      8208 && (c = ir(
        /*animationList*/
        f[4]
      ), fr(), o = _d(o, _, u, 1, f, c, i, n, dd, ou, null, tu), dr());
    },
    i(f) {
      if (!s) {
        H(a), H(l);
        for (let _ = 0; _ < c.length; _ += 1)
          H(o[_]);
        s = !0;
      }
    },
    o(f) {
      te(a), te(l);
      for (let _ = 0; _ < o.length; _ += 1)
        te(o[_]);
      s = !1;
    },
    d(f) {
      f && (G(r), G(e), G(n)), l && l.d(f);
      for (let _ = 0; _ < o.length; _ += 1)
        o[_].d();
      t[23](null);
    }
  };
}
function Xm(t) {
  let r, e, n, o;
  const i = [Jm, Gm], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[2] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (fr(), te(s[u], 1, 1, () => {
        s[u] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Zm(t) {
  return t.some((r) => r.type === "fade");
}
function Pd(t) {
  return t.type === "change_bounds" ? t : t.type === "set" ? Pd(t.items[0]) : null;
}
function Qm(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h = j, m = () => (h(), h = E(i, (pe) => e(20, _ = pe)), i);
  t.$$.on_destroy.push(() => h());
  let { componentContext: p } = r, { layoutParams: w = void 0 } = r;
  const k = Dr(Kr);
  let N = !1, R, L = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Set(), ue = [], T = [], Y = [], le = [], A, D, M, U, Z = !1, me;
  function Ae() {
    e(15, Z = !1);
  }
  function ve(pe) {
    M && M.destroy(), e(6, M = pe != null && pe.div ? p.produceChildContext(pe.div, {
      path: pe.state_id || "<unknown>"
    }) : void 0);
  }
  function he(pe) {
    const ge = p.json.states;
    if (!ge)
      return;
    const de = /* @__PURE__ */ new Set();
    e(16, c = ge.map((ee, ae) => (c[ae].div !== pe[ae] && ee.state_id && de.add(ee.state_id), { ...ee, div: pe[ae] }))), e(0, p.json = { ...p.json, states: c }, p), D && de.has(D) && ve(c.find((ee) => ee.state_id === D) || null);
  }
  function Se(pe, ge, de) {
    let { json: ee, parentComponentContext: ae, transitions: ne, node: we } = ge;
    ee = p.getJsonWithVars(ee), ne = p.getJsonWithVars(ne);
    const Re = Md(ne), Ye = ge.bbox || we.getBoundingClientRect(), $ = {
      ...ee,
      margins: void 0,
      alpha: Zm(Re) ? void 0 : ee.alpha
    };
    return {
      id: ae.id || "",
      json: $,
      componentContextCopy: ae.produceChildContext($, { fake: Ba }),
      elementBbox: Ye,
      rootBbox: pe,
      transitions: Re,
      alpha: ee.alpha,
      width: Ye.width,
      height: Ye.height,
      offsetTop: Ye.top - pe.top,
      offsetLeft: Ye.left - pe.left,
      direction: de,
      resolvePromise: ge.resolvePromise,
      node: ge.node
    };
  }
  async function Q(pe) {
    if (D === pe)
      return p;
    k.setRunning("stateChange", !0);
    const ge = new Set(re);
    ue.forEach(($) => {
      $.resolvePromise && $.resolvePromise();
    }), e(4, ue = []);
    let de = [];
    if (R) {
      const $ = R.getBoundingClientRect();
      de = Y.map((Le) => Se($, Le, "out"));
    }
    le.forEach(($) => {
      $.transitions && L.set($.id, {
        transitions: $.transitions,
        rect: $.node.getBoundingClientRect()
      });
    }), T = [], Y = [], le = [];
    const ee = c.find(($) => $.state_id === pe) || null;
    if (ee ? (e(5, D = pe), a == null || a.setValue(D), ve(ee)) : p.logError(K(new Error("Cannot find state with id"), { additional: { stateId: pe } })), await Vn(), !R)
      return;
    const ae = R.getBoundingClientRect();
    let ne = T.filter(($) => {
      var Le;
      return $.parentComponentContext.id && !ge.has($.parentComponentContext.id) ? !0 : ((Le = $.resolvePromise) == null || Le.call($), !1);
    }).map(($) => Se(ae, $, "in"));
    de = de.filter(($) => {
      var Le;
      return $.id && !re.has($.id) ? !0 : ((Le = $.resolvePromise) == null || Le.call($), !1);
    });
    const we = de.concat(ne), Re = we.reduce(
      ($, Le) => Math.max($, eu(Le.transitions)),
      0
    ), Ye = le.filter(($) => L.has($.id)).map(($) => {
      const Le = {
        ...$.json,
        margins: void 0,
        width: { type: "match_parent" },
        height: { type: "match_parent" }
      }, Ne = L.get($.id);
      return {
        id: $.parentComponentContext.id || "",
        json: Le,
        componentContextCopy: $.parentComponentContext.produceChildContext(Le, { fake: Ba }),
        rootBbox: ae,
        beforeBbox: Ne.rect,
        afterBbox: $.node.getBoundingClientRect(),
        node: $.node,
        transition: p.getJsonWithVars(Pd(Ne.transitions)),
        resolvePromise: $.resolvePromise
      };
    });
    return e(4, ue = [
      ...we.map(($) => ({ ...$, maxDuration: Re })),
      ...Ye
    ]), L.clear(), k.setRunning("stateChange", !1), p;
  }
  _i(da, {
    // eslint-disable-next-line max-params
    runVisibilityTransition(pe, ge, de, ee, ae, ne) {
      if (!R)
        return Promise.resolve();
      const we = R.getBoundingClientRect(), Re = Se(
        we,
        {
          json: pe,
          parentComponentContext: ge,
          transitions: de,
          node: ee,
          bbox: ne
        },
        ae
      ), Ye = eu(Re.transitions), $ = { ...Re, maxDuration: Ye };
      return e(4, ue = [...ue.filter((Le) => Le.node !== Re.node), $]), new Promise((Le) => {
        $.resolvePromise = Le;
      });
    },
    registerChildWithTransitionIn(pe, ge, de, ee) {
      const ae = {
        json: pe,
        parentComponentContext: ge,
        transitions: de,
        node: ee
      };
      return T.push(ae), new Promise((ne) => {
        ae.resolvePromise = ne;
      });
    },
    registerChildWithTransitionOut(pe, ge, de, ee) {
      const ae = {
        json: pe,
        parentComponentContext: ge,
        transitions: de,
        node: ee
      };
      return Y.push(ae), new Promise((ne) => {
        ae.resolvePromise = ne;
      });
    },
    registerChildWithTransitionChange(pe, ge, de, ee) {
      const ae = ge.id;
      if (!ae)
        return Promise.resolve();
      const ne = {
        id: ae,
        json: pe,
        parentComponentContext: ge,
        transitions: de,
        node: ee
      };
      return le.push(ne), new Promise((we) => {
        ne.resolvePromise = we;
      });
    },
    hasTransitionChange(pe) {
      return pe ? L.has(pe) : !1;
    },
    registerChild(pe) {
      re.add(pe);
    },
    unregisterChild(pe) {
      re.delete(pe);
    }
  });
  function xe(pe) {
    if (!Z && (e(15, Z = !0), pe.length)) {
      const ge = (a == null ? void 0 : a.getValue()) || o;
      if (ge) {
        e(5, D = ge);
        const de = pe.find((ee) => ee.state_id === D) || null;
        ve(de), de || p.logError(K(new Error("Cannot find state for default_state_id"), { additional: { selectedId: D } }));
      } else {
        const de = pe[0];
        e(5, D = de.state_id), ve(de);
      }
      a && (a.setValue(D), a.subscribe((de) => {
        Q(de);
      }));
    }
  }
  function qe(pe) {
    e(4, ue = ue.filter((ge) => ge !== pe)), pe.resolvePromise && pe.resolvePromise();
  }
  ln(() => {
    M && M.destroy(), A && (A(), e(14, A = void 0));
  });
  const Ke = (pe) => qe(pe), be = (pe) => qe(pe);
  function Te(pe) {
    Fr[pe ? "unshift" : "push"](() => {
      R = pe, e(3, R);
    });
  }
  return t.$$set = (pe) => {
    "componentContext" in pe && e(0, p = pe.componentContext), "layoutParams" in pe && e(1, w = pe.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*componentContext*/
    1 && e(17, n = p.json.div_id || p.id), t.$$.dirty[0] & /*componentContext*/
    1 && (o = p.getJsonWithVars(p.json.default_state_id)), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(10, i = p.getDerivedFromVars(p.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, s = p.json.state_id_variable), t.$$.dirty[0] & /*stateVariableName, componentContext*/
    524289 && (a = s ? p.getVariable(s, "string") || k.awaitGlobalVariable(s, "string", "") : null), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, l = p.origJson), t.$$.dirty[0] & /*origJson*/
    262144 && l && Ae(), t.$$.dirty[0] & /*stateId, componentContext*/
    131073 && (n ? e(2, N = !1) : (e(2, N = !0), p.logError(K(new Error('Missing "id" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext*/
    1 && p.json && (re = /* @__PURE__ */ new Set()), t.$$.dirty[0] & /*componentContext*/
    1 && e(16, c = Array.isArray(p.json.states) && p.json.states || []), t.$$.dirty[0] & /*items*/
    65536 && e(9, u = c.map((pe) => {
      var ge;
      return { json: pe.div, id: (ge = pe.div) == null ? void 0 : ge.id };
    })), t.$$.dirty[0] & /*items, componentContext*/
    65537 && (c != null && c.length ? e(2, N = !1) : (e(2, N = !0), p.logError(K(new Error('Empty "states" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext, stateUnregister, stateId*/
    147457 && p.json && (A && (A(), e(14, A = void 0)), n && !(p != null && p.fakeElement) && e(14, A = p.registerState(n, Q))), t.$$.dirty[0] & /*inited, items*/
    98304 && !Z && xe(c), t.$$.dirty[0] & /*$jsonClipToBounds*/
    1048576 && e(8, f = {
      overflow: _ === !1 || _ === 0 ? "visible" : void 0
    });
  }, [
    p,
    w,
    N,
    R,
    ue,
    D,
    M,
    U,
    f,
    u,
    i,
    me,
    he,
    qe,
    A,
    Z,
    c,
    n,
    l,
    s,
    _,
    Ke,
    be,
    Te
  ];
}
class xm extends Or {
  constructor(r) {
    super(), Lr(this, r, Qm, Xm, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const $m = "appkit-pager", e0 = "appkit-pager__items", t0 = "appkit-pager_animated", r0 = "appkit-pager__item", n0 = "appkit-pager_clip", o0 = "appkit-pager_orientation_horizontal", i0 = "appkit-pager_orientation_vertical", s0 = "appkit-pager__item_height_content", l0 = "appkit-pager__item_height_fixed", a0 = "appkit-pager__item_width_content", c0 = "appkit-pager__item_width_fixed", u0 = "appkit-pager__arrow", Mo = {
  pager: $m,
  pager__items: e0,
  pager_animated: t0,
  pager__item: r0,
  "pager_scroll-align_start": "appkit-pager_scroll-align_start",
  "pager_scroll-align_center": "appkit-pager_scroll-align_center",
  "pager_scroll-align_end": "appkit-pager_scroll-align_end",
  pager_clip: n0,
  pager_orientation_horizontal: o0,
  pager_orientation_vertical: i0,
  "pager_cross-align_center": "appkit-pager_cross-align_center",
  "pager_cross-align_end": "appkit-pager_cross-align_end",
  pager__item_height_content: s0,
  pager__item_height_fixed: l0,
  "pager__item_height-constrained": "appkit-pager__item_height-constrained",
  pager__item_width_content: a0,
  pager__item_width_fixed: c0,
  "pager__item_width-constrained": "appkit-pager__item_width-constrained",
  pager__arrow: u0,
  "pager__arrow-icon-path": "appkit-pager__arrow-icon-path"
}, { window: f0 } = Po;
function iu(t, r, e) {
  const n = t.slice();
  return n[95] = r[e], n;
}
function d0(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function _0(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: mt(
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
      $$slots: { default: [h0] },
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
      Rt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      8192 && (i.cls = mt(
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function su(t) {
  let r, e, n, o, i, s, a;
  return e = new Zn({
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
      r = Pe("div"), Rt(e.$$.fragment), n = mr(), g(r, "class", o = mt("pager__item", Mo, cu(
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
      J(l, r, c), Nt(e, r, null), wt(r, n), a = !0;
    },
    p(l, c) {
      const u = {};
      c[0] & /*visibleItems*/
      16 && (u.componentContext = /*item*/
      l[95].componentContext), c[0] & /*childLayoutParams*/
      512 && (u.layoutParams = /*childLayoutParams*/
      l[9]), e.$set(u), (!a || c[0] & /*orientation, visibleItems*/
      20 && o !== (o = mt("pager__item", Mo, cu(
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
      a || (H(e.$$.fragment, l), a = !0);
    },
    o(l) {
      te(e.$$.fragment, l), a = !1;
    },
    d(l) {
      l && G(r), zt(e);
    }
  };
}
function lu(t) {
  let r, e, n, o = !/*leftClass*/
  t[27] && p0();
  return {
    c() {
      r = Pe("div"), o && o.c(), g(
        r,
        "class",
        /*leftClass*/
        t[27] || `${Mo.pager__arrow} ${go.arrow} ${go.arrow_left}`
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
function p0(t) {
  let r, e;
  return {
    c() {
      r = tn("svg"), e = tn("path"), g(e, "class", Mo["pager__arrow-icon-path"]), g(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", go.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      J(n, r, o), wt(r, e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function au(t) {
  let r, e, n, o = !/*rightClass*/
  t[28] && g0();
  return {
    c() {
      r = Pe("div"), o && o.c(), g(
        r,
        "class",
        /*rightClass*/
        t[28] || `${Mo.pager__arrow} ${go.arrow} ${go.arrow_right}`
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
function g0(t) {
  let r, e;
  return {
    c() {
      r = tn("svg"), e = tn("path"), g(e, "class", Mo["pager__arrow-icon-path"]), g(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", go.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      J(n, r, o), wt(r, e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function h0(t) {
  let r, e, n, o, i, s, a, l, c, u = ir(
    /*visibleItems*/
    t[4]
  ), f = [];
  for (let p = 0; p < u.length; p += 1)
    f[p] = su(iu(t, u, p));
  const _ = (p) => te(f[p], 1, 1, () => {
    f[p] = null;
  });
  let h = (
    /*hasScrollLeft*/
    t[11] && /*shouldCheckArrows*/
    t[12] && lu(t)
  ), m = (
    /*hasScrollRight*/
    t[10] && /*shouldCheckArrows*/
    t[12] && au(t)
  );
  return {
    c() {
      r = Pe("div");
      for (let p = 0; p < f.length; p += 1)
        f[p].c();
      o = mr(), h && h.c(), i = mr(), m && m.c(), s = xt(), g(r, "class", e = Mo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (t[24] ? Cr["root_restrict-scroll"] : "")), g(r, "style", n = ur(
        /*style*/
        t[14]
      ));
    },
    m(p, w) {
      J(p, r, w);
      for (let k = 0; k < f.length; k += 1)
        f[k] && f[k].m(r, null);
      t[69](r), J(p, o, w), h && h.m(p, w), J(p, i, w), m && m.m(p, w), J(p, s, w), a = !0, l || (c = [
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
        u = ir(
          /*visibleItems*/
          p[4]
        );
        let k;
        for (k = 0; k < u.length; k += 1) {
          const N = iu(p, u, k);
          f[k] ? (f[k].p(N, w), H(f[k], 1)) : (f[k] = su(N), f[k].c(), H(f[k], 1), f[k].m(r, null));
        }
        for (fr(), k = u.length; k < f.length; k += 1)
          _(k);
        dr();
      }
      (!a || w[0] & /*$jsonRestrictParentScroll*/
      16777216 && e !== (e = Mo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (p[24] ? Cr["root_restrict-scroll"] : ""))) && g(r, "class", e), (!a || w[0] & /*style*/
      16384 && n !== (n = ur(
        /*style*/
        p[14]
      ))) && g(r, "style", n), /*hasScrollLeft*/
      p[11] && /*shouldCheckArrows*/
      p[12] ? h ? h.p(p, w) : (h = lu(p), h.c(), h.m(i.parentNode, i)) : h && (h.d(1), h = null), /*hasScrollRight*/
      p[10] && /*shouldCheckArrows*/
      p[12] ? m ? m.p(p, w) : (m = au(p), m.c(), m.m(s.parentNode, s)) : m && (m.d(1), m = null);
    },
    i(p) {
      if (!a) {
        for (let w = 0; w < u.length; w += 1)
          H(f[w]);
        a = !0;
      }
    },
    o(p) {
      f = f.filter(Boolean);
      for (let w = 0; w < f.length; w += 1)
        te(f[w]);
      a = !1;
    },
    d(p) {
      p && (G(r), G(o), G(i), G(s)), cn(f, p), t[69](null), h && h.d(p), m && m.d(p), l = !1, Gr(c);
    }
  };
}
function m0(t) {
  let r, e, n, o, i, s;
  const a = [_0, d0], l = [];
  function c(u, f) {
    return (
      /*hasError*/
      u[5] ? -1 : 0
    );
  }
  return ~(r = c(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(u, f) {
      ~r && l[r].m(u, f), J(u, n, f), o = !0, i || (s = Qe(
        f0,
        "resize",
        /*resnap*/
        t[38]
      ), i = !0);
    },
    p(u, f) {
      let _ = r;
      r = c(u), r === _ ? ~r && l[r].p(u, f) : (e && (fr(), te(l[_], 1, 1, () => {
        l[_] = null;
      }), dr()), ~r ? (e = l[r], e ? e.p(u, f) : (e = l[r] = a[r](u), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(u) {
      o || (H(e), o = !0);
    },
    o(u) {
      te(e), o = !1;
    },
    d(u) {
      u && G(n), ~r && l[r].d(u), i = !1, s();
    }
  };
}
const ds = {
  wrap_content: "content",
  fixed: "fixed",
  match_parent: "parent"
}, yo = 2, b0 = 400, y0 = 8;
function cu(t, r) {
  var n, o, i, s;
  if (t === "horizontal") {
    const a = ((n = r.height) == null ? void 0 : n.type) || "";
    return {
      height: a in ds ? ds[a] : "content",
      "height-constrained": ((o = r.height) == null ? void 0 : o.type) === "wrap_content" ? sn(r.height.constrained, !1) : !1
    };
  }
  const e = ((i = r.width) == null ? void 0 : i.type) || "";
  return {
    width: e in ds ? ds[e] : "parent",
    "width-constrained": ((s = r.width) == null ? void 0 : s.type) === "wrap_content" ? sn(r.width.constrained, !1) : !1
  };
}
function w0(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, re, ue, T, Y = j, le = () => (Y(), Y = E(u, (v) => e(60, T = v)), u), A, D = j, M = () => (D(), D = E(i, (v) => e(61, A = v)), i), U, Z = j, me = () => (Z(), Z = E(f, (v) => e(62, U = v)), f), Ae, ve = j, he = () => (ve(), ve = E(l, (v) => e(63, Ae = v)), l), Se, Q = j, xe = () => (Q(), Q = E(a, (v) => e(64, Se = v)), a), qe, Ke = j, be = () => (Ke(), Ke = E(s, (v) => e(65, qe = v)), s), Te, pe = j, ge = () => (pe(), pe = E(Me, (v) => e(66, Te = v)), Me), de, ee = j, ae = () => (ee(), ee = E(o, (v) => e(67, de = v)), o), ne, we = j, Re = () => (we(), we = E(_, (v) => e(68, ne = v)), _), Ye, $ = j, Le = () => ($(), $ = E(c, (v) => e(24, Ye = v)), c);
  t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => $());
  let { componentContext: Ne } = r, { layoutParams: ot = void 0 } = r;
  const ut = Dr(Kr), rt = ut.direction;
  bn(t, rt, (v) => e(6, re = v));
  const yt = ut.genId("pager"), nt = ut.getCustomization("pagerLeftClass"), Pt = ut.getCustomization("pagerRightClass"), ft = ut.isDesktop;
  bn(t, ft, (v) => e(59, ue = v));
  let q, fe, st = !1, Me, I = 0, Ct = 0, lt = !1, St = "horizontal", Dt = "0em", tt = {}, X = "", Et = "", Tt = "", $t = {}, Kt = "start", je = "center", He = [], pt = 0, Ve = [], $e = {}, Be = {}, Vt, Oe, bt = 0, Gt = !1, It = !1, _r = !1, Fe = !1, vt = 0, or = "", tr = 0, Qt;
  function hr() {
    e(43, tt = {}), e(9, $t = {}), e(47, Kt = "start"), e(48, je = "center"), e(52, Gt = !1), e(53, It = !1), Fe = !1;
  }
  function kr(v) {
    e(0, Ne = e(51, Vt = {
      ...Ne,
      json: {
        ...Ne.json,
        items: v.filter(zo)
      }
    }));
  }
  function Mt(v, se) {
    Oe && Oe.update({
      instId: yt,
      currentItem: Be[se],
      size: v,
      scrollToPagerItem(d) {
        er($e[d]);
      }
    });
  }
  function br(v) {
    var d;
    if (v === Ct || (Ct = v, !He[v]))
      return;
    const se = (d = He[v].json) == null ? void 0 : d.selected_actions;
    se != null && se.length && Ne.execAnyActions(se);
  }
  function Wt(v) {
    const se = It ? !1 : v === 0, d = It ? !1 : v === Ve.length - 1, z = St === "horizontal", Ie = fe.children[v + (It ? yo : 0)];
    if (!Ie)
      return 0;
    const We = z ? "offsetLeft" : "offsetTop", ke = z ? "offsetWidth" : "offsetHeight", B = it(), Ut = qr(), Ht = lr(), Xe = At();
    return B >= Xe + Ut + Ht || se ? 0 : d ? (B - Ut - Ht - Xe) * (re === "rtl" ? -1 : 1) : je === "start" && re === "ltr" || je === "end" && re === "rtl" ? -(Ie[We] - Ut) : je === "end" && re === "ltr" || je === "start" && re === "rtl" ? -(Ie[We] + Ie[ke] - B + Ht) : fe[ke] / 2 - (Ie[We] + Ie[ke] / 2);
  }
  function _t(v, se) {
    if (!fe)
      return;
    const d = Wt(v);
    e(54, _r = se), Vn().then(() => {
      var z;
      vt = d, e(55, or = ie(vt)), e(40, I = (z = $e[v]) != null ? z : 0), Fe = It && (v < 0 || v >= pt);
    });
  }
  function er(v, se = !0) {
    var d;
    _t((d = Be[v]) != null ? d : 0, se);
  }
  function ie(v) {
    return `${St === "horizontal" ? "translateX" : "translateY"}(${an(v)})`;
  }
  function yr(v, se) {
    return It && v >= -yo && v < pt + yo ? v : v > Ve.length - 1 ? se === "ring" ? Vo(v, Ve.length) : Ve.length - 1 : v < 0 ? se === "ring" ? Vo(v, Ve.length) : 0 : v;
  }
  function vr(v, se, d) {
    const z = yr(Be[I] - v, se);
    _t(z, d);
  }
  function jt(v, se, d) {
    const z = yr(Be[I] + v, se);
    _t(z, d);
  }
  function Ir() {
    Oe == null || Oe.destroy(), Oe = void 0, q && (ut.unregisterInstance(q), q = void 0), Ne.fakeElement || (Oe = Ne.registerPager(Ne.id || void 0)), Ne.id && !Ne.fakeElement && (q = Ne.id, ut.registerInstance(
      q,
      {
        setCurrentItem(v, se) {
          if (v < 0 || v > He.length - 1)
            throw new Error('Item is out of range in "set-current-item" action');
          er(v, se);
        },
        setPreviousItem: vr,
        setNextItem: jt,
        scrollToStart(v) {
          er(Ve[It ? yo : 0].index, v);
        },
        scrollToEnd(v) {
          er(Ve[Ve.length - 1 - (It ? yo : 0)].index, v);
        },
        scrollCombined({ step: v, overflow: se, animated: d }) {
          v && er(yr(Be[I] + v, se || "clamp"), d);
        }
      },
      "warn"
    ));
  }
  function qr() {
    var se, d, z;
    return St === "horizontal" ? (d = (se = tt.start) != null ? se : re === "ltr" ? tt.left : tt.right) != null ? d : 0 : (z = tt.top) != null ? z : 0;
  }
  function lr() {
    var se, d, z;
    return St === "horizontal" ? (d = (se = tt.end) != null ? se : re === "ltr" ? tt.right : tt.left) != null ? d : 0 : (z = tt.bottom) != null ? z : 0;
  }
  function it() {
    var se, d;
    return fe ? St === "horizontal" ? ((se = fe.parentElement) == null ? void 0 : se.offsetWidth) || 0 : ((d = fe.parentElement) == null ? void 0 : d.offsetHeight) || 0 : 0;
  }
  function At() {
    const v = St === "horizontal", se = Array.from(fe.children), d = se[0].getBoundingClientRect(), z = se[se.length - 1].getBoundingClientRect();
    return v ? re === "rtl" ? d.right - z.left : z.right - d.left : z.bottom - d.top;
  }
  function Jt(v) {
    const se = v.target;
    if (!(se instanceof Element) || !fe)
      return;
    let d = se;
    for (; d.parentElement && d.parentElement !== fe; )
      d = d.parentElement;
    if (!d)
      return;
    const z = Array.from(fe.children).indexOf(d);
    if (z < 0)
      return;
    const Ie = z - (It ? yo : 0);
    _t(Ie, !0);
  }
  function Yt(v) {
    Date.now() - tr < 300 && (v.preventDefault(), v.stopImmediatePropagation());
  }
  function sr(v) {
    if (!ut.pagerMouseDragEnabled && v.pointerType === "mouse")
      return;
    const se = St === "horizontal", d = se ? v.pageX : v.pageY, z = vt, Ie = it() - qr() - lr(), We = At(), ke = Date.now(), B = (Ht) => {
      const Xe = se ? Ht.pageX : Ht.pageY;
      let at = z + Xe - d;
      if (!It) {
        if (re === "rtl") {
          if (at < 0)
            at = at * Ie / (at + Ie * 3);
          else if (at + Ie > We) {
            let qt = at + Ie - We;
            qt = qt * Ie / (qt + Ie * 3), at = -Ie + We + qt;
          }
        } else if (re === "ltr") {
          if (at > 0)
            at = at * Ie / (at + Ie * 3);
          else if (-at + Ie > We) {
            let qt = -at + Ie - We;
            qt = qt * Ie / (qt + Ie * 3), at = Ie - We - qt;
          }
        }
      }
      vt = at, e(55, or = ie(vt)), Ht.preventDefault();
    }, Ut = (Ht) => {
      Qt == null || Qt(), Qt = void 0;
      const Xe = Math.min(512, Ie), at = Math.abs(z - vt);
      if (at < y0) {
        _t(Be[I], !0);
        return;
      }
      Ht.preventDefault(), tr = Date.now();
      const qt = Math.min(1, (Date.now() - ke) / 750);
      let Vr = Be[I];
      at > Xe / 4 * qt && (Vr += (z > vt ? 1 : -1) * (re === "rtl" ? -1 : 1)), It || (Vr >= Ve.length ? Vr = Ve.length - 1 : Vr < 0 && (Vr = 0)), _t(Vr, !0);
    };
    window.addEventListener("pointermove", B), window.addEventListener("pointerup", Ut), window.addEventListener("pointercancel", Ut), Qt == null || Qt(), Qt = () => {
      window.removeEventListener("pointermove", B), window.removeEventListener("pointerup", Ut), window.removeEventListener("pointercancel", Ut);
    };
  }
  function dt(v) {
    if (!v.deltaX || Math.abs(v.deltaX) < Math.abs(v.deltaY))
      return;
    const se = Date.now();
    if (se - bt < b0)
      return;
    bt = se, (re === "rtl" ? -1 : 1) * v.deltaX > 0 ? jt(1, "clamp", !0) : vr(1, "clamp", !0);
  }
  function ce() {
    e(54, _r = !1), Fe && Vn().then(() => {
      er(I, !1);
    });
  }
  function kt() {
    Vn().then(() => {
      er(I, !1);
    });
  }
  Xn(() => {
    e(39, st = !0), fe && er(I, !1);
  }), ln(() => {
    e(39, st = !1), Qt == null || Qt(), He.forEach((v) => {
      v.destroy();
    }), q && (ut.unregisterInstance(q), q = void 0), Oe == null || Oe.destroy(), Oe = void 0;
  });
  function nr(v) {
    Fr[v ? "unshift" : "push"](() => {
      fe = v, e(7, fe);
    });
  }
  const Xt = () => (re === "ltr" ? vr : jt)(1, "clamp", !0), jr = () => (re === "ltr" ? jt : vr)(1, "clamp", !0);
  return t.$$set = (v) => {
    "componentContext" in v && e(0, Ne = v.componentContext), "layoutParams" in v && e(1, ot = v.layoutParams);
  }, t.$$.update = () => {
    var v, se, d, z, Ie;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(58, n = Ne.origJson), t.$$.dirty[1] & /*origJson*/
    134217728 && n && hr(), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(23, o = typeof ((v = Ne.json.item_builder) == null ? void 0 : v.data) == "string" ? Ne.getDerivedFromVars((se = Ne.json.item_builder) == null ? void 0 : se.data, void 0, !0) : (d = Ne.json.item_builder) != null && d.data ? Jo(Ne.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(22, i = Ne.getDerivedFromVars(Ne.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(21, s = Ne.getDerivedFromVars(Ne.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(20, a = Ne.getDerivedFromVars(Ne.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(19, l = Ne.getDerivedFromVars(Ne.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(18, c = Ne.getDerivedFromVars(Ne.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(17, u = Ne.getDerivedFromVars(Ne.json.cross_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(16, f = Ne.getDerivedFromVars(Ne.json.scroll_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && Re(e(15, _ = Ne.getDerivedFromVars(Ne.json.infinite_scroll))), t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$jsonInfiniteScroll*/
    64 && e(52, Gt = sn(ne, Gt)), t.$$.dirty[0] & /*componentContext, items*/
    9 | t.$$.dirty[1] & /*prevContext*/
    1048576 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    32) {
      let We = [];
      if (Ne.json.item_builder && Array.isArray(de) && Array.isArray(Ne.json.item_builder.prototypes)) {
        const Ht = Ne.json.item_builder;
        We = _l(de, ut, Ne, Ht);
      } else
        We = (Array.isArray(Ne.json.items) && Ne.json.items || []).map((Ht, Xe) => ({
          div: Ht,
          key: Ht.id || { index: Xe, data: Ht }
        }));
      const ke = new Set(He), B = /* @__PURE__ */ new Map();
      let Ut = !1;
      Vt === Ne && He.forEach((Ht) => {
        Ht.key && (typeof Ht.key == "string" && B.has(Ht.key) ? Ut || (Ut = !0, Ne.logError(K(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: Ht.key } }))) : B.set(
          typeof Ht.key == "string" ? Ht.key : Ht.key.index,
          Ht
        ));
      }), e(3, He = We.map((Ht, Xe) => {
        let at = !Ut && B.get(Ht.id), qt = B.get(Xe);
        return !at && !Ht.id && typeof Ht.key == "object" && typeof (qt == null ? void 0 : qt.key) == "object" && Ui(qt.key.data, Ht.key.data) && (at = qt), at ? (ke.delete(at), at) : Ne.produceChildContext(Ht.div, {
          path: Xe,
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
      let We = [];
      He.forEach((ke) => {
        We.push(Ne.getDerivedFromVars({
          width: ke.json.width,
          height: ke.json.height,
          visibility: ke.json.visibility
        }));
      }), ge(e(8, Me = Wi(We, (ke) => [...ke])));
    }
    if (t.$$.dirty[0] & /*items, visibleItems*/
    24 | t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$childStore*/
    16) {
      if (e(50, Be = {}), $e = {}, e(4, Ve = Te.map((We, ke) => ({
        width: We.width,
        height: We.height,
        index: ke,
        componentContext: He[ke]
      })).filter((We, ke) => Te[ke].visibility !== "gone")), Ve.forEach((We, ke) => {
        $e[ke] = We.index, e(50, Be[We.index] = ke, Be);
      }), e(49, pt = Ve.length), Gt && Ve.length >= yo) {
        const We = Ve.slice(0, yo).map((B) => ({
          ...B,
          componentContext: B.componentContext.dup(ri),
          duplicate: !0
        })), ke = Ve.slice(Ve.length - yo).map((B) => ({
          ...B,
          componentContext: B.componentContext.dup(ri),
          duplicate: !0
        }));
        We.forEach((B, Ut) => {
          $e[Ve.length + Ut] = Ut;
        }), ke.forEach((B, Ut) => {
          $e[Ut - yo] = Ve.length - yo + Ut;
        }), e(4, Ve = [].concat(ke, Ve, We)), e(53, It = !0);
      } else
        e(53, It = !1);
      kt();
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonLayoutMode*/
    1073741824 && (A ? A.type !== "percentage" && A.type !== "fixed" && A.type !== "wrap_content" ? (e(41, lt = !0), Ne.logError(K(new Error('Incorrect value of "layout_mode.type" for div "pager"')))) : e(41, lt = !1) : (e(41, lt = !0), Ne.logError(K(new Error('Empty "layout_mode" prop for div "pager"'))))), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[2] & /*$jsonOrientation*/
    8 && e(2, St = ha(qe, St)), t.$$.dirty[2] & /*$jsonItemSpacing*/
    4) {
      const We = Se == null ? void 0 : Se.value;
      We && Mn(We) && e(42, Dt = an(We || 0));
    }
    if (t.$$.dirty[0] & /*$direction*/
    64 | t.$$.dirty[1] & /*paddingObj*/
    4096 | t.$$.dirty[2] & /*$jsonPaddings*/
    2 && (e(43, tt = mi(Ae, tt)), e(44, X = po(tt, re))), t.$$.dirty[0] & /*orientation*/
    4 && e(57, h = St === "horizontal" ? "grid-auto-columns" : "grid-auto-rows"), t.$$.dirty[0] & /*orientation*/
    4 && e(56, m = St === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[2] & /*$jsonScrollAxisAlignment*/
    1 && (U === "start" || U === "center" || U === "end") && (e(48, je = U), kt()), t.$$.dirty[0] & /*orientation, $direction, visibleItems*/
    84 | t.$$.dirty[1] & /*paddingObj, $jsonLayoutMode, scrollAxisAlignment, itemSpacing*/
    1073879040) {
      const We = an(St === "horizontal" ? (tt == null ? void 0 : tt.start) || (re === "ltr" ? tt == null ? void 0 : tt.left : tt == null ? void 0 : tt.right) || 0 : (tt == null ? void 0 : tt.top) || 0), ke = an(St === "horizontal" ? (tt == null ? void 0 : tt.end) || (re === "ltr" ? tt == null ? void 0 : tt.right : tt == null ? void 0 : tt.left) || 0 : (tt == null ? void 0 : tt.bottom) || 0);
      if ((A == null ? void 0 : A.type) === "fixed") {
        const B = ((z = A.neighbour_page_width) == null ? void 0 : z.value) || 0;
        je === "center" ? e(45, Et = `calc(100% + ${We} + ${ke} - 2 * ${an(B)} - 2 * ${Dt})`) : je === "start" ? e(45, Et = `calc(100% + ${ke} - ${an(B)} - ${Dt})`) : e(45, Et = `calc(100% + ${We} - ${an(B)} - ${Dt})`), e(46, Tt = "");
      } else if ((A == null ? void 0 : A.type) === "percentage") {
        let B = (Ie = A.page_width) == null ? void 0 : Ie.value;
        (typeof B != "number" || B < 0) && (B = 100), e(45, Et = `calc(${(B / 100).toFixed(2)} * (100% + ${We} + ${ke}))`), e(46, Tt = "");
      } else (A == null ? void 0 : A.type) === "wrap_content" && (e(45, Et = ""), e(46, Tt = Ve.map((B) => {
        var Xe, at;
        const Ut = B[St === "horizontal" ? "width" : "height"];
        if ((Ut == null ? void 0 : Ut.type) === "fixed" || (Ut == null ? void 0 : Ut.type) === "wrap_content")
          return "minmax(max-content, auto)";
        let Ht = "100%";
        return (Ut == null ? void 0 : Ut.type) === "match_parent" && (Mn((Xe = Ut.max_size) == null ? void 0 : Xe.value) && (Ht = `min(${Ht}, ${an(Ut.max_size.value)})`), Mn((at = Ut.min_size) == null ? void 0 : at.value) && (Ht = `max(${Ht}, ${an(Ut.min_size.value)})`)), Ht;
      }).join(" ")));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonCrossAxisAlignment, crossAxisAlignment*/
    536936448 && (T === "start" || T === "center" || T === "end") && (e(47, Kt = T), e(9, $t = {
      [St === "horizontal" ? "parentVAlign" : "parentHAlign"]: Kt
    })), t.$$.dirty[1] & /*itemSpacing, padding, gridAutoSizeProp, autoSizeVal, gridTemplateSizeProp, templateSizeVal, transformStr*/
    117499904 && e(14, p = {
      "grid-gap": Dt,
      padding: X,
      [h]: Et,
      [m]: Tt,
      transform: or
    }), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*animated, crossAxisAlignment, scrollAxisAlignment*/
    8585216 && e(13, w = {
      animated: _r,
      clip: ut.pagerChildrenClipEnabled,
      orientation: St,
      "cross-align": Kt,
      "scroll-align": je
    }), t.$$.dirty[1] & /*hasLayoutModeError*/
    1024 && e(5, k = lt), t.$$.dirty[0] & /*hasError*/
    32 | t.$$.dirty[1] & /*$isDesktop, mounted*/
    268435712 && e(12, N = ue && st && !k), t.$$.dirty[0] & /*componentContext, items*/
    9 && Ne.json) {
      const We = Ne.getJsonWithVars(Ne.json.default_item);
      typeof We == "number" && We >= 0 && We < He.length && (e(40, I = Ct = We), Mt(He.length, We)), Ir();
    }
    t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(11, R = It || (re === "ltr" ? Be[I] > 0 : Be[I] + 1 < Ve.length)), t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(10, L = It || (re === "ltr" ? Be[I] + 1 < Ve.length : Be[I] > 0)), t.$$.dirty[1] & /*visibleItemsWithOutDuplicates, currentItem*/
    262656 && Mt(pt, I), t.$$.dirty[1] & /*currentItem*/
    512 && br(I);
  }, [
    Ne,
    ot,
    St,
    He,
    Ve,
    k,
    re,
    fe,
    Me,
    $t,
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
    Ye,
    rt,
    yt,
    nt,
    Pt,
    ft,
    kr,
    vr,
    jt,
    Jt,
    Yt,
    sr,
    dt,
    ce,
    kt,
    st,
    I,
    lt,
    Dt,
    tt,
    X,
    Et,
    Tt,
    Kt,
    je,
    pt,
    Be,
    Vt,
    Gt,
    It,
    _r,
    or,
    m,
    h,
    n,
    ue,
    T,
    A,
    U,
    Ae,
    Se,
    qe,
    Te,
    de,
    ne,
    nr,
    Xt,
    jr
  ];
}
class k0 extends Or {
  constructor(r) {
    super(), Lr(this, r, w0, m0, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const v0 = "appkit-indicator", j0 = "appkit-indicator_visible", C0 = "appkit-indicator__scroller", A0 = "appkit-indicator__items", E0 = "appkit-indicator__item", S0 = "appkit-indicator_placement_default", V0 = "appkit-indicator__item_active", F0 = "appkit-indicator_direction_ltr", I0 = "appkit-indicator_direction_rtl", D0 = "appkit-indicator_placement_stretch", wi = {
  indicator: v0,
  indicator_visible: j0,
  indicator__scroller: C0,
  indicator__items: A0,
  indicator__item: E0,
  indicator_placement_default: S0,
  indicator__item_active: V0,
  indicator_direction_ltr: F0,
  indicator_direction_rtl: I0,
  indicator_placement_stretch: D0
};
function uu(t, r, e) {
  const n = t.slice();
  n[43] = r[e], n[46] = e;
  const o = (
    /*index*/
    n[46] === /*pagerData*/
    n[8].currentItem
  );
  return n[44] = o, n;
}
function fu(t) {
  let r, e = ir(Array(
    /*pagerData*/
    t[8].size
  )), n = [];
  for (let o = 0; o < e.length; o += 1)
    n[o] = du(uu(t, e, o));
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      r = xt();
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
          const a = uu(o, e, s);
          n[s] ? n[s].p(a, i) : (n[s] = du(a), n[s].c(), n[s].m(r.parentNode, r));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = e.length;
      }
    },
    d(o) {
      o && G(r), cn(n, o);
    }
  };
}
function du(t) {
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
      r = Pe("div"), g(r, "class", e = mt("indicator__item", wi, { active: (
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
      J(u, r, f), a || (l = [
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
      256 && e !== (e = mt("indicator__item", wi, { active: (
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
      u && G(r), a = !1, Gr(l);
    }
  };
}
function T0(t) {
  let r, e, n = (
    /*pagerData*/
    t[8] && fu(t)
  );
  return {
    c() {
      r = Pe("div"), e = Pe("div"), n && n.c(), g(e, "class", wi.indicator__items), g(e, "role", "tablist"), F(
        e,
        "margin",
        /*placement*/
        t[4] === "default" ? `0 ${_e(Math.max(
          0,
          /*activeStyle*/
          t[2].width - /*inactiveStyle*/
          t[3].width
        ) / 2)}` : ""
      ), F(e, "--divkit-indicator-inactive-width", _e(
        /*inactiveStyle*/
        t[3].width
      )), F(e, "--divkit-indicator-inactive-height", _e(
        /*inactiveStyle*/
        t[3].height
      )), F(e, "--divkit-indicator-inactive-border-radius", _e(
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
      ), F(e, "--divkit-indicator-active-width", _e(
        /*activeStyle*/
        t[2].width
      )), F(e, "--divkit-indicator-active-height", _e(
        /*activeStyle*/
        t[2].height
      )), F(e, "--divkit-indicator-active-border-radius", _e(
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
        t[4] === "default" ? `0 ${_e(
          /*spaceBetweenCenters*/
          (t[5] - /*inactiveStyle*/
          t[3].width) / 2
        )}` : ""
      ), F(
        e,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        t[4] === "stretch" ? _e(
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
        t[4] === "stretch" ? _e(
          /*maxVisibleItems*/
          (t[6] - 1) * /*itemSpacing*/
          t[7]
        ) : ""
      ), g(r, "class", wi.indicator__scroller);
    },
    m(o, i) {
      J(o, r, i), wt(r, e), n && n.m(e, null), t[35](e), t[36](r);
    },
    p(o, i) {
      /*pagerData*/
      o[8] ? n ? n.p(o, i) : (n = fu(o), n.c(), n.m(e, null)) : n && (n.d(1), n = null), i[0] & /*placement, activeStyle, inactiveStyle*/
      28 && F(
        e,
        "margin",
        /*placement*/
        o[4] === "default" ? `0 ${_e(Math.max(
          0,
          /*activeStyle*/
          o[2].width - /*inactiveStyle*/
          o[3].width
        ) / 2)}` : ""
      ), i[0] & /*inactiveStyle*/
      8 && F(e, "--divkit-indicator-inactive-width", _e(
        /*inactiveStyle*/
        o[3].width
      )), i[0] & /*inactiveStyle*/
      8 && F(e, "--divkit-indicator-inactive-height", _e(
        /*inactiveStyle*/
        o[3].height
      )), i[0] & /*inactiveStyle*/
      8 && F(e, "--divkit-indicator-inactive-border-radius", _e(
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
      4 && F(e, "--divkit-indicator-active-width", _e(
        /*activeStyle*/
        o[2].width
      )), i[0] & /*activeStyle*/
      4 && F(e, "--divkit-indicator-active-height", _e(
        /*activeStyle*/
        o[2].height
      )), i[0] & /*activeStyle*/
      4 && F(e, "--divkit-indicator-active-border-radius", _e(
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
        o[4] === "default" ? `0 ${_e(
          /*spaceBetweenCenters*/
          (o[5] - /*inactiveStyle*/
          o[3].width) / 2
        )}` : ""
      ), i[0] & /*placement, itemSpacing*/
      144 && F(
        e,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        o[4] === "stretch" ? _e(
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
        o[4] === "stretch" ? _e(
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
function M0(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: mt(
        "indicator",
        wi,
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
      $$slots: { default: [T0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Rt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = mt(
        "indicator",
        wi,
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
const Il = ["rounded_rectangle", "circle"];
function P0(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p = j, w = () => (p(), p = E(u, (fe) => e(26, m = fe)), u), k, N = j, R = () => (N(), N = E(f, (fe) => e(27, k = fe)), f), L, re = j, ue = () => (re(), re = E(i, (fe) => e(28, L = fe)), i), T, Y = j, le = () => (Y(), Y = E(s, (fe) => e(29, T = fe)), s), A, D = j, M = () => (D(), D = E(o, (fe) => e(30, A = fe)), o), U, Z = j, me = () => (Z(), Z = E(a, (fe) => e(31, U = fe)), a), Ae, ve = j, he = () => (ve(), ve = E(c, (fe) => e(32, Ae = fe)), c), Se, Q = j, xe = () => (Q(), Q = E(l, (fe) => e(33, Se = fe)), l);
  t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => Q());
  let { componentContext: qe } = r, { layoutParams: Ke = void 0 } = r;
  const Te = Dr(Kr).direction;
  bn(t, Te, (fe) => e(25, h = fe));
  let pe = {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    background: "#ffdc60"
  }, ge = {
    width: 10,
    height: 10,
    borderRadius: 5,
    background: "#33919cb5"
  }, de = "default", ee = 15, ae = 10, ne = 5, we, Re, Ye, $, Le = !1;
  function Ne() {
    e(4, de = "default"), e(5, ee = 15), e(6, ae = 10), e(7, ne = 5), e(2, pe = {
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
  async function ot(fe) {
    if (e(8, Ye = fe), await Vn(), Re) {
      const st = Re.children[Ye.currentItem];
      if (st) {
        const Me = st.offsetLeft;
        we.scroll({
          left: Me - we.clientWidth / 2,
          behavior: "smooth"
        });
      }
    }
  }
  function ut(fe) {
    fe !== Ye.currentItem && Ye.scrollToPagerItem(fe);
  }
  function rt(fe) {
    if (fe.ctrlKey || fe.shiftKey || fe.altKey || fe.metaKey)
      return;
    const { size: st, currentItem: Me } = Ye;
    if (fe.which === Ad) {
      const I = Me - 1 < 0 ? Me : Me - 1;
      yt(I);
    } else if (fe.which === Ed) {
      const I = Me + 1 >= st ? Me : Me + 1;
      yt(I);
    } else if (fe.which === Sd)
      yt(0);
    else if (fe.which === Vd)
      yt(st - 1);
    else
      return;
    fe.preventDefault();
  }
  async function yt(fe) {
    Ye.scrollToPagerItem(fe), await Vn();
    const st = Re.querySelector(`.${wi.indicator__item_active}`);
    st && st.focus();
  }
  function nt() {
    $ == null || $(), $ = void 0;
    const fe = qe.json.pager_id;
    $ = qe.listenPager(fe, ot);
  }
  Xn(() => {
    e(23, Le = !0);
  }), ln(() => {
    e(23, Le = !1), $ == null || $(), $ = void 0;
  });
  const Pt = (fe) => ut(fe);
  function ft(fe) {
    Fr[fe ? "unshift" : "push"](() => {
      Re = fe, e(10, Re);
    });
  }
  function q(fe) {
    Fr[fe ? "unshift" : "push"](() => {
      we = fe, e(9, we);
    });
  }
  return t.$$set = (fe) => {
    "componentContext" in fe && e(0, qe = fe.componentContext), "layoutParams" in fe && e(1, Ke = fe.layoutParams);
  }, t.$$.update = () => {
    var fe, st;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(24, n = qe.origJson), t.$$.dirty[0] & /*origJson*/
    16777216 && n && Ne(), t.$$.dirty[0] & /*origJson, mounted*/
    25165824 && n && Le && nt(), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(19, o = qe.getDerivedFromVars(qe.json.shape))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(18, i = qe.getDerivedFromVars(qe.json.active_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(17, s = qe.getDerivedFromVars(qe.json.inactive_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(16, a = qe.getDerivedFromVars(qe.json.active_item_size))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(15, l = qe.getDerivedFromVars(qe.json.active_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(14, c = qe.getDerivedFromVars(qe.json.inactive_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && w(e(13, u = qe.getDerivedFromVars(qe.json.space_between_centers))), t.$$.dirty[0] & /*componentContext*/
    1 && R(e(12, f = qe.getDerivedFromVars(qe.json.items_placement))), t.$$.dirty[0] & /*activeStyle, inactiveStyle, $jsonShape, $jsonInactiveItemColor, $jsonActiveItemColor*/
    1879048204 | t.$$.dirty[1] & /*$jsonActiveShape, $jsonInactiveShape, $jsonActiveItemSize*/
    7 && (Se && e(2, pe = ao(
      {
        type: "shape_drawable",
        shape: Se
      },
      Il,
      pe
    )), Ae && e(3, ge = ao(
      {
        type: "shape_drawable",
        shape: Ae
      },
      Il,
      ge
    )), !Se && !Ae && A)) {
      const Me = Un(U, 1.3);
      e(3, ge = ao(
        {
          type: "shape_drawable",
          shape: A,
          color: ge.background
        },
        Il,
        ge
      )), e(3, ge.background = gr(T, 1, ge.background), ge), e(2, pe = {
        ...ge,
        width: ge.width * Me,
        height: ge.height * Me,
        borderRadius: ge.borderRadius * Me,
        background: pe.background
      }), e(2, pe.background = gr(L, 1, pe.background), pe);
    }
    if (t.$$.dirty[0] & /*$jsonItemsPlacement, placement, spaceBetweenCenters, maxVisibleItems, itemSpacing, $jsonSpaceBetweenCenters*/
    201326832)
      if (k && (k.type === "default" || k.type === "stretch")) {
        if (e(4, de = k.type), de === "default")
          e(5, ee = rn((fe = k.space_between_centers) == null ? void 0 : fe.value, ee));
        else if (de === "stretch") {
          const Me = k;
          e(6, ae = Un(Me.max_visible_items, ae)), e(7, ne = rn((st = Me.item_spacing) == null ? void 0 : st.value, ne));
        }
      } else
        e(4, de = "default"), m && e(5, ee = rn(m.value, ee));
    t.$$.dirty[0] & /*placement, $direction, pagerData*/
    33554704 && e(11, _ = {
      placement: de,
      direction: h,
      visible: (Ye == null ? void 0 : Ye.size) > 1
    });
  }, [
    qe,
    Ke,
    pe,
    ge,
    de,
    ee,
    ae,
    ne,
    Ye,
    we,
    Re,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    Te,
    ut,
    rt,
    Le,
    n,
    h,
    m,
    k,
    L,
    T,
    A,
    U,
    Ae,
    Se,
    Pt,
    ft,
    q
  ];
}
class N0 extends Or {
  constructor(r) {
    super(), Lr(this, r, P0, M0, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const z0 = "appkit-slider", L0 = "appkit-slider__input", O0 = "appkit-slider__input_secondary", B0 = "appkit-slider__thumb", R0 = "appkit-slider_direction_rtl", H0 = "appkit-slider__thumb_secondary", W0 = "appkit-slider__track", U0 = "appkit-slider__tick", G0 = "appkit-slider__tick_active", J0 = "appkit-slider__tick_inactive", Wr = {
  slider: z0,
  slider__input: L0,
  slider__input_secondary: O0,
  slider__thumb: B0,
  slider_direction_rtl: R0,
  slider__thumb_secondary: H0,
  "slider__tracks-wrapper": "appkit-slider__tracks-wrapper",
  "slider__tracks-inner": "appkit-slider__tracks-inner",
  "slider__tracks-ranges": "appkit-slider__tracks-ranges",
  "slider__tracks-ranges_rtl": "appkit-slider__tracks-ranges_rtl",
  slider__track: W0,
  "slider__thumb-text": "appkit-slider__thumb-text",
  "slider__thumb-text_secondary": "appkit-slider__thumb-text_secondary",
  slider__tick: U0,
  slider__tick_active: G0,
  slider__tick_inactive: J0
};
function _u(t, r, e) {
  var a, l;
  if (!t || !t.font_size)
    return e;
  const n = t.offset, o = t.text_color && gr(t.text_color) || "#000", i = bi(t.font_weight, t.font_weight_value, void 0), s = Li(t.font_variation_settings) || void 0;
  if (Pn(t.font_size) && o !== "transparent") {
    const c = {
      fontSize: _e(t.font_size),
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
function ba(t) {
  return BigInt(t);
}
const ls = ba("9223372036854775807"), as = ba("-9223372036854775808");
function pn(t) {
  const r = ba(t);
  if (r > ls || r < as)
    throw new Error("Integer overflow.");
  return r;
}
const ki = pn(0);
function Nd(t) {
  let r = t;
  return r < 0 && (r = -r), r;
}
function zd(t) {
  let r = 0;
  return t > 0 ? r = 1 : t < 0 && (r = -1), pn(r);
}
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
const q0 = 2147483647, K0 = -2147483648, Y0 = Number.MAX_VALUE, X0 = Number.MIN_VALUE, Ue = "string", ze = "integer", gt = "number", Ur = "boolean", dn = "color", $n = "url", Nr = "datetime", ar = "dict", cr = "array", Z0 = "function";
class ya extends Error {
}
function qs(t) {
  return t.type === "url" || t.type === "color" ? {
    type: "string",
    value: t.value
  } : t;
}
function Ld(t) {
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
      return Ld(t.value);
    if (t.type === "color")
      return Ai(gl(t.value));
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
function _n(t) {
  let r = ji(t, !1);
  return t.type === "string" && (r = "'" + r.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'"), r;
}
function Yn(t) {
  return t === "datetime" ? "DateTime" : t.charAt(0).toUpperCase() + t.substring(1);
}
function Ci(t, r) {
  return pn(r);
}
function Nn(t, r) {
  if (r < as || r > ls)
    throw new Error("Integer overflow.");
}
function ho(t) {
  if (typeof t != "string")
    throw new Error("Incorrect url value.");
  try {
    new URL(t);
  } catch {
    throw new Error("Incorrect url value.");
  }
}
function Q0(t) {
  try {
    return ho(t), !0;
  } catch {
    return !1;
  }
}
function x0(t) {
  const r = /* @__PURE__ */ new Set();
  return no(t, {
    Variable(e) {
      r.add(e.id.name);
    }
  }), [...r];
}
function Sn(t, r) {
  throw new ya(`Failed to evaluate [${t}]. ${r}`);
}
function $0(t, r) {
  throw new Error(r);
}
function gl(t) {
  const r = _o(t);
  if (r)
    return r;
  throw new Error("Unable to convert value to Color, expected format #AARRGGBB.");
}
function Ai(t) {
  return `#${[t.a, t.r, t.g, t.b].map((r) => {
    if (r < 0 || r > 255)
      throw new Error("Value out of range 0..1.");
    return gd(Math.round(r).toString(16), 2);
  }).join("").toUpperCase()}`;
}
function ni(t) {
  return Ai(gl(t));
}
function Gl(t) {
  return {
    type: gt,
    value: Number(t.value)
  };
}
const e1 = {
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
function hl(t, r, e) {
  if (e === "function")
    throw new Error("Cannot convert function");
  const n = e1[e];
  let o = typeof r;
  if (n === "array" && !Array.isArray(r) || n !== "array" && o !== n || o === "object" && r === null)
    throw o === "object" && (Array.isArray(r) ? o = "array" : r === null ? o = "null" : o = "dict"), new Error(`Incorrect value type: expected ${Yn(e)}, got ${Yn(o)}.`);
  if (n === "number" && e === "integer") {
    t && Nn(t, r);
    try {
      r = pn(r);
    } catch {
      throw new Error("Cannot convert value to integer.");
    }
  }
  return n === "string" && e === "color" && (r = ni(r)), n === "string" && e === "url" && ho(r), n === "boolean" && e === Ur && (r = r ? 1 : 0), {
    type: e,
    value: r
  };
}
function t1(t) {
  return t.type === "number" || t.type === "integer" ? Number(t.value) : t.type === "boolean" ? !!t.value : t.value;
}
function ml(t) {
  return t1(
    hl(void 0, t.value, t.type)
  );
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
class Od extends Ko {
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
class Bd extends Ko {
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
class Rd extends Ko {
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
class Hd extends Ko {
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
class Wd extends Ko {
  convertValue(r) {
    if (typeof r != "string" || !_o(r))
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
class Ud extends Ko {
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
class Gd extends Ko {
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
class Jd extends Ko {
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
const Jl = {
  string: Od,
  number: Rd,
  integer: Bd,
  boolean: Hd,
  color: Wd,
  url: Ud,
  dict: Gd,
  array: Jd
};
function io(t, r, e) {
  if (!(r in Jl))
    throw new Error("Unsupported variable type");
  return new Jl[r](t, e);
}
function r1() {
}
function n1(t) {
  return t(this.value), r1;
}
function pu() {
  throw new Error("Cannot change the value of this type of variable");
}
class o1 extends Od {
}
class i1 extends Rd {
}
class s1 extends Bd {
}
class l1 extends Hd {
}
class a1 extends Wd {
}
class c1 extends Ud {
}
class u1 extends Gd {
}
class f1 extends Jd {
}
class d1 extends Ko {
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
  string: o1,
  number: i1,
  integer: s1,
  boolean: l1,
  color: a1,
  url: c1,
  dict: u1,
  array: f1,
  datetime: d1
};
for (const t in Ks) {
  const r = Ks[t];
  r.prototype.subscribe = n1, r.prototype.set = pu, r.prototype.setValue = pu;
}
function Cs(t, r, e) {
  if (!(r in Ks))
    throw new Error("Unsupported variable type");
  return new Ks[r](t, e);
}
function _1(t) {
  const r = t.getType();
  let e = t.getValue();
  return r === Ur && (e = e ? 1 : 0), {
    type: r,
    value: e
  };
}
function p1(t, r) {
  if (r === "string")
    return t;
  if (r === "integer")
    try {
      return pn(t);
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
    return ni(t);
  } else if (r === "url") {
    if (typeof t != "string")
      throw new Error("Incorrect variable value");
    return ho(t), t;
  } else if (r === "dict" || r === "array")
    try {
      return JSON.parse(t);
    } catch {
      throw new Error("Incorrect dict value");
    }
  throw new Error(`Unexpected type ${r}`);
}
function gu(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function hu(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function mu(t, r, e) {
  const n = t.slice();
  return n[90] = r[e], n;
}
function g1(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function h1(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: mt(
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
          m1,
          ({ focusHandler: n, blurHandler: o }) => ({ 83: n, 84: o }),
          ({ focusHandler: n, blurHandler: o }) => [0, 0, (n ? 2097152 : 0) | (o ? 4194304 : 0)]
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Rt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      16777216 && (i.cls = mt(
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function bu(t) {
  let r;
  return {
    c() {
      r = Pe("div"), g(r, "class", Wr.slider__track), F(
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
function yu(t) {
  let r;
  return {
    c() {
      r = Pe("div"), g(r, "class", Wr.slider__tick + " " + Wr.slider__tick_active), F(
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
function wu(t) {
  let r;
  return {
    c() {
      r = Pe("div"), g(r, "class", Wr.slider__tick + " " + Wr.slider__tick_inactive), F(
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
function ku(t) {
  let r, e, n;
  return {
    c() {
      var o, i, s, a, l;
      r = Pe("div"), e = Pe("div"), n = Gn(
        /*value*/
        t[11]
      ), g(e, "class", Wr["slider__thumb-text-inner"]), F(
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
      ), g(r, "class", Wr["slider__thumb-text"]);
    },
    m(o, i) {
      J(o, r, i), wt(r, e), wt(e, n);
    },
    p(o, i) {
      var s, a, l, c, u;
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
function vu(t) {
  let r, e = (
    /*textSecondaryStyle*/
    t[8] && ju(t)
  );
  return {
    c() {
      r = Pe("div"), e && e.c(), g(r, "class", Wr.slider__thumb + " " + Wr.slider__thumb_secondary), F(r, "border-radius", _e(
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
      n[8] ? e ? e.p(n, o) : (e = ju(n), e.c(), e.m(r, null)) : e && (e.d(1), e = null), o[0] & /*thumbSecondaryStyle*/
      64 && F(r, "border-radius", _e(
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
function ju(t) {
  let r, e, n;
  return {
    c() {
      var o, i, s, a, l;
      r = Pe("div"), e = Pe("div"), n = Gn(
        /*value2*/
        t[12]
      ), g(e, "class", Wr["slider__thumb-text-inner"]), F(
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
      ), g(r, "class", Wr["slider__thumb-text"] + " " + Wr["slider__thumb-text_secondary"]);
    },
    m(o, i) {
      J(o, r, i), wt(r, e), wt(e, n);
    },
    p(o, i) {
      var s, a, l, c, u;
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
function Cu(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Pe("input"), g(r, "type", "range"), g(r, "class", e = /*switchedTracks*/
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
      a && G(r), i = !1, Gr(s);
    }
  };
}
function m1(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N = ir(
    /*renderRanges*/
    t[21]
  ), R = [];
  for (let D = 0; D < N.length; D += 1)
    R[D] = bu(mu(t, N, D));
  let L = ir(
    /*markActiveTicks*/
    t[17]
  ), re = [];
  for (let D = 0; D < L.length; D += 1)
    re[D] = yu(hu(t, L, D));
  let ue = ir(
    /*markInactiveTicks*/
    t[18]
  ), T = [];
  for (let D = 0; D < ue.length; D += 1)
    T[D] = wu(gu(t, ue, D));
  let Y = (
    /*textStyle*/
    t[7] && ku(t)
  ), le = (
    /*secondVariable*/
    t[13] && vu(t)
  ), A = (
    /*secondVariable*/
    t[13] && Cu(t)
  );
  return {
    c() {
      r = Pe("div"), e = Pe("div"), n = Pe("div");
      for (let D = 0; D < R.length; D += 1)
        R[D].c();
      i = mr();
      for (let D = 0; D < re.length; D += 1)
        re[D].c();
      s = mr();
      for (let D = 0; D < T.length; D += 1)
        T[D].c();
      a = mr(), l = Pe("div"), Y && Y.c(), c = mr(), le && le.c(), u = mr(), f = Pe("input"), p = mr(), A && A.c(), g(n, "class", o = Wr["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Wr["slider__tracks-ranges_rtl"] : "")), g(l, "class", Wr.slider__thumb), F(l, "border-radius", _e(
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
    m(D, M) {
      J(D, r, M), wt(r, e), wt(e, n);
      for (let U = 0; U < R.length; U += 1)
        R[U] && R[U].m(n, null);
      wt(e, i);
      for (let U = 0; U < re.length; U += 1)
        re[U] && re[U].m(e, null);
      wt(e, s);
      for (let U = 0; U < T.length; U += 1)
        T[U] && T[U].m(e, null);
      wt(e, a), wt(e, l), Y && Y.m(l, null), wt(e, c), le && le.m(e, null), wt(e, u), wt(e, f), t[74](f), wt(e, p), A && A.m(e, null), t[76](e), w || (k = [
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
        let U;
        for (U = 0; U < N.length; U += 1) {
          const Z = mu(t, N, U);
          R[U] ? R[U].p(Z, M) : (R[U] = bu(Z), R[U].c(), R[U].m(n, null));
        }
        for (; U < R.length; U += 1)
          R[U].d(1);
        R.length = N.length;
      }
      if (M[0] & /*$direction*/
      16384 && o !== (o = Wr["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Wr["slider__tracks-ranges_rtl"] : "")) && g(n, "class", o), M[0] & /*markActiveTicks*/
      131072) {
        L = ir(
          /*markActiveTicks*/
          t[17]
        );
        let U;
        for (U = 0; U < L.length; U += 1) {
          const Z = hu(t, L, U);
          re[U] ? re[U].p(Z, M) : (re[U] = yu(Z), re[U].c(), re[U].m(e, s));
        }
        for (; U < re.length; U += 1)
          re[U].d(1);
        re.length = L.length;
      }
      if (M[0] & /*markInactiveTicks*/
      262144) {
        ue = ir(
          /*markInactiveTicks*/
          t[18]
        );
        let U;
        for (U = 0; U < ue.length; U += 1) {
          const Z = gu(t, ue, U);
          T[U] ? T[U].p(Z, M) : (T[U] = wu(Z), T[U].c(), T[U].m(e, a));
        }
        for (; U < T.length; U += 1)
          T[U].d(1);
        T.length = ue.length;
      }
      /*textStyle*/
      t[7] ? Y ? Y.p(t, M) : (Y = ku(t), Y.c(), Y.m(l, null)) : Y && (Y.d(1), Y = null), M[0] & /*thumbStyle*/
      32 && F(l, "border-radius", _e(
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
      t[13] ? le ? le.p(t, M) : (le = vu(t), le.c(), le.m(e, u)) : le && (le.d(1), le = null), M[0] & /*switchedTracks*/
      65536 && _ !== (_ = /*switchedTracks*/
      t[16] ? `${Wr.slider__input} ${Wr.slider__input_secondary}` : Wr.slider__input) && g(f, "class", _), M[0] & /*minValue*/
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
      t[13] ? A ? A.p(t, M) : (A = Cu(t), A.c(), A.m(e, null)) : A && (A.d(1), A = null);
    },
    d(D) {
      D && G(r), cn(R, D), cn(re, D), cn(T, D), Y && Y.d(), le && le.d(), t[74](null), A && A.d(), t[76](null), w = !1, Gr(k);
    }
  };
}
function b1(t) {
  let r, e, n, o, i, s;
  const a = [h1, g1], l = [];
  function c(u, f) {
    return (
      /*hasError*/
      u[10] ? -1 : 0
    );
  }
  return ~(r = c(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(u, f) {
      ~r && l[r].m(u, f), J(u, n, f), o = !0, i || (s = Qe(
        window,
        "resize",
        /*checkTicksDebounced*/
        t[43]
      ), i = !0);
    },
    p(u, f) {
      let _ = r;
      r = c(u), r === _ ? ~r && l[r].p(u, f) : (e && (fr(), te(l[_], 1, 1, () => {
        l[_] = null;
      }), dr()), ~r ? (e = l[r], e ? e.p(u, f) : (e = l[r] = a[r](u), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(u) {
      o || (H(e), o = !0);
    },
    o(u) {
      te(e), o = !1;
    },
    d(u) {
      u && G(n), ~r && l[r].d(u), i = !1, s();
    }
  };
}
const xn = {
  width: 10,
  height: 10,
  borderRadius: 5,
  background: "#000"
}, _s = ["rounded_rectangle", "circle"], Dl = ["rounded_rectangle"];
function ps(t, r, e, n, o) {
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
function y1(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, re, ue, T, Y, le, A, D, M, U, Z, me, Ae = j, ve = () => (Ae(), Ae = E(re, (v) => e(57, me = v)), re), he, Se = j, Q = () => (Se(), Se = E(R, (v) => e(58, he = v)), R), xe, qe = j, Ke = () => (qe(), qe = E(L, (v) => e(59, xe = v)), L), be, Te = j, pe = () => (Te(), Te = E(N, (v) => e(60, be = v)), N), ge, de = j, ee = () => (de(), de = E(k, (v) => e(61, ge = v)), k), ae, ne = j, we = () => (ne(), ne = E(w, (v) => e(62, ae = v)), w), Re, Ye = j, $ = () => (Ye(), Ye = E(p, (v) => e(63, Re = v)), p), Le, Ne = j, ot = () => (Ne(), Ne = E(m, (v) => e(64, Le = v)), m), ut, rt = j, yt = () => (rt(), rt = E(h, (v) => e(65, ut = v)), h), nt, Pt = j, ft = () => (Pt(), Pt = E(_, (v) => e(66, nt = v)), _), q, fe = j, st = () => (fe(), fe = E(f, (v) => e(67, q = v)), f), Me, I = j, Ct = () => (I(), I = E(u, (v) => e(68, Me = v)), u), lt, St = j, Dt = () => (St(), St = E(a, (v) => e(69, lt = v)), a), tt, X = j, Et = () => (X(), X = E(s, (v) => e(70, tt = v)), s), Tt, $t = j, Kt = () => ($t(), $t = E(c, (v) => e(71, Tt = v)), c), je, He = j, pt = () => (He(), He = E(l, (v) => e(72, je = v)), l);
  t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => Se()), t.$$.on_destroy.push(() => qe()), t.$$.on_destroy.push(() => Te()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => ne()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => Ne()), t.$$.on_destroy.push(() => rt()), t.$$.on_destroy.push(() => Pt()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => St()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => $t()), t.$$.on_destroy.push(() => He());
  let { componentContext: Ve } = r, { layoutParams: $e = void 0 } = r;
  const Be = Dr(Kr), Vt = Dr(To), Oe = Be.direction;
  bn(t, Oe, (v) => e(14, Z = v));
  let bt, Gt, It, _r = !1, Fe = 0, vt = 100, or = xn, tr = or, Qt = xn, hr = xn, kr, Mt = null, br, Wt = null, _t, er = _t, ie = "", yr = "", vr = !0, jt = !1, Ir = [];
  function qr() {
    e(5, or = xn), e(6, tr = or), e(45, Qt = xn), e(46, hr = xn), e(47, Mt = null), e(48, Wt = null), e(7, _t = void 0), e(8, er = void 0), e(19, ie = ""), e(9, vr = !0), e(20, yr = "");
  }
  let lr = Fo(tt || 0, Fe, vt), it = Fo(lt || 0, Fe, vt);
  function At({ direction: v, minValue: se, maxValue: d, trackActiveOffset: z, trackActivePart: Ie, trackInactiveStyle: We, trackActiveStyle: ke, ranges: B = [] }) {
    const Ut = [], Ht = (at, qt, Vr) => {
      var Pr, An, Ee, Yr;
      const pr = (Xr, gn, y, C) => {
        var O, et, De, Zt;
        const S = Math.max(Xr, qt);
        if (Math.min(gn, Vr) - S > 0) {
          const Ft = C && (et = (O = C[v === "ltr" ? "start" : "end"]) != null ? O : C.left) != null ? et : 0, Je = C && (Zt = (De = C[v === "ltr" ? "end" : "start"]) != null ? De : C.right) != null ? Zt : 0;
          Ut.push({
            left: Xr,
            right: gn,
            totalLeft: qt,
            totalRight: Vr,
            leftMargin: Ft,
            rightMargin: Je,
            style: y
          });
        }
      };
      if ((!B[0] || ((Pr = B[0].start) != null ? Pr : se) > qt) && pr(qt, B[0] ? (An = B[0].start) != null ? An : se : Vr, at === "inactive" ? We : ke), B.forEach((Xr, gn) => {
        var Zt, Ft, Je, rr;
        const y = Xr[at === "inactive" ? "track_inactive_style" : "track_active_style"], S = y ? ao(y, Dl, xn) : at === "inactive" ? We : ke, oe = B[gn - 1], O = B[gn + 1], et = (Ft = (Zt = Xr.start) != null ? Zt : oe == null ? void 0 : oe.end) != null ? Ft : qt, De = (rr = (Je = Xr.end) != null ? Je : O == null ? void 0 : O.start) != null ? rr : Vr;
        pr(et, De, S, Xr.margins);
      }), B[B.length - 1] && ((Ee = B[B.length - 1].end) != null ? Ee : d) < Vr) {
        const Xr = (Yr = B[B.length - 1].end) != null ? Yr : d;
        pr(Xr, Vr, at === "inactive" ? We : ke);
      }
    };
    Ht("inactive", se, d), Ht("active", z, z + Ie);
    const Xe = d - se;
    e(21, Ir = Ut.map((at) => {
      let qt = `${(at.left - se) * 100 / Xe}%`;
      at.leftMargin && (qt = `calc(${qt} + ${an(at.leftMargin)})`);
      let Vr;
      at.totalLeft < at.left ? Vr = qt : at.leftMargin ? Vr = `max(${(at.totalLeft - se) * 100 / Xe}%, ${qt})` : Vr = `${(Math.max(at.totalLeft, at.left) - se) * 100 / Xe}%`;
      let pr = `${(1 - (at.right - se) / Xe) * 100}%`;
      at.rightMargin && (pr = `calc(${pr} + ${an(at.rightMargin)})`);
      let Pr;
      return at.totalRight > at.right ? Pr = pr : at.rightMargin ? Pr = `max(${(1 - (at.totalRight - se) / Xe) * 100}%, ${pr})` : Pr = `${(1 - (Math.max(at.totalRight, at.right) - se) / Xe) * 100}%`, {
        left: Vr,
        right: Pr,
        height: _e(at.style.height),
        borderRadius: _e(at.style.borderRadius),
        background: at.style.background,
        boxShadow: at.style.boxShadow || ""
      };
    }));
  }
  function Jt(v) {
    var B, Ut;
    if (!vr)
      return;
    const se = "pageX" in v ? v.pageX : (Ut = (B = v.changedTouches) == null ? void 0 : B[0]) == null ? void 0 : Ut.pageX;
    if (se === void 0)
      return;
    const d = It.getBoundingClientRect();
    let z = (se - d.left) / d.width;
    Z === "rtl" && (z = 1 - z);
    const Ie = Fe + (vt - Fe) * z, We = Math.round(Fo(Ie, Fe, vt)), ke = (lr + it) / 2;
    e(16, _r = We < ke == lr < it);
  }
  function Yt(v, se) {
    const d = Number(v.target.value);
    _r === (se === "first") ? (e(12, it = d), a.setValue(d)) : (e(11, lr = d), s.setValue(d));
  }
  let sr = !1;
  function dt() {
    if (!It)
      return;
    const v = vt - Fe, se = (Mt == null ? void 0 : Mt.width) || 0, d = (Wt == null ? void 0 : Wt.width) || 0;
    Math.max(se, d) * v >= (It == null ? void 0 : It.clientWidth) ? sr || (Ve.logError(K(new Error("Slider ticks overlap each other"), { level: "warn" })), sr = !0) : sr = !1;
  }
  const ce = ga(dt, 50);
  Xn(() => {
    dt();
  }), ln(() => {
    bt && (Be.unregisterFocusable(bt), e(44, bt = void 0));
  });
  const kt = (v) => Yt(v, "first");
  function nr(v) {
    Fr[v ? "unshift" : "push"](() => {
      Gt = v, e(2, Gt);
    });
  }
  const Xt = (v) => Yt(v, "second");
  function jr(v) {
    Fr[v ? "unshift" : "push"](() => {
      It = v, e(15, It);
    });
  }
  return t.$$set = (v) => {
    "componentContext" in v && e(0, Ve = v.componentContext), "layoutParams" in v && e(1, $e = v.layoutParams);
  }, t.$$.update = () => {
    var v, se, d, z;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(56, n = Ve.origJson), t.$$.dirty[1] & /*origJson*/
    33554432 && n && qr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, o = Ve.json.thumb_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(13, i = Ve.json.thumb_secondary_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*firstVariable*/
    16777216 && Et(e(22, s = o && (Ve.getVariable(o, "integer") || Be.awaitGlobalVariable(o, "integer", 0)) || io("temp", "integer", 0))), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 && Dt(e(23, a = i && (Ve.getVariable(i, "integer") || Be.awaitGlobalVariable(i, "integer", 0)) || io("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && pt(e(39, l = Ve.getDerivedFromVars(Ve.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Kt(e(38, c = Ve.getDerivedFromVars(Ve.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Ct(e(37, u = Ve.getDerivedFromVars(Ve.json.thumb_style))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(36, f = Ve.getDerivedFromVars(Ve.json.thumb_secondary_style))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(35, _ = Ve.getDerivedFromVars(Ve.json.track_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && yt(e(34, h = Ve.getDerivedFromVars(Ve.json.track_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && ot(e(33, m = Ve.getDerivedFromVars(Ve.json.tick_mark_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && $(e(32, p = Ve.getDerivedFromVars(Ve.json.tick_mark_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && we(e(31, w = Ve.getDerivedFromVars(Ve.json.thumb_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && ee(e(30, k = Ve.getDerivedFromVars(Ve.json.thumb_secondary_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(29, N = Ve.getDerivedFromVars(Ve.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Q(e(28, R = Ve.getDerivedFromVars(Ve.json.secondary_value_accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Ke(e(27, L = Ve.getDerivedFromVars(Ve.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && ve(e(26, re = Ve.getDerivedFromVars(Ve.json.ranges))), t.$$.dirty[0] & /*minValue, maxValue*/
    24 | t.$$.dirty[2] & /*$jsonMinValue, $jsonMaxValue*/
    1536 && (e(3, Fe = oo(je, Fe)), e(4, vt = oo(Tt, vt)), dt()), t.$$.dirty[0] & /*minValue, maxValue, value*/
    2072 | t.$$.dirty[2] & /*$valueVariable*/
    256) {
      const Ie = Fo(tt || 0, Fe, vt);
      Ie !== lr && e(11, lr = Ie);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue, value2*/
    4120 | t.$$.dirty[2] & /*$value2Variable*/
    128) {
      const Ie = Fo(lt || 0, Fe, vt);
      Ie !== it && e(12, it = Ie);
    }
    if (t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbStyle*/
    64 && e(5, or = ao(Me, _s, or)), t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbSecondaryStyle*/
    32 && e(6, tr = ao(q, _s, or)), t.$$.dirty[1] & /*trackInactiveStyle*/
    16384 | t.$$.dirty[2] & /*$jsonTrackInactiveStyle*/
    16 && e(45, Qt = ao(nt, Dl, Qt)), t.$$.dirty[1] & /*trackActiveStyle*/
    32768 | t.$$.dirty[2] & /*$jsonTrackActiveStyle*/
    8 && e(46, hr = ao(ut, Dl, hr)), t.$$.dirty[2] & /*$jsonMarkActiveStyle*/
    4) {
      let Ie = ao(Le, _s, xn);
      Ie !== xn && e(47, Mt = Ie);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markActiveStyle*/
    65536 && (Mt ? (e(17, kr = i ? ps(Math.min(lr, it), Math.max(lr, it) + 1, Fe, vt, !0) : ps(Fe, lr, Fe, vt, !0)), dt()) : e(17, kr = [])), t.$$.dirty[2] & /*$jsonMarkInactiveStyle*/
    2) {
      let Ie = ao(Re, _s, xn);
      Ie !== xn && e(48, Wt = Ie);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markInactiveStyle*/
    131072 && (Wt ? (e(18, br = i ? ps(Math.min(lr, it), Math.max(lr, it) + 1, Fe, vt, !1) : ps(lr + 1, vt + 1, Fe, vt, !0)), dt()) : e(18, br = [])), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[2] & /*$jsonTextStyle*/
    1 && e(7, _t = _u(ae, Be.typefaceProvider, _t)), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[1] & /*$jsonSecondaryTextStyle*/
    1073741824 && e(8, er = _u(ge, Be.typefaceProvider, _t)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    536870912 && (be != null && be.description ? e(19, ie = ti(be)) : Ve.logError(K(new Error('Missing accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    512 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    268435456 && e(9, vr = sn(xe, vr)), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 | t.$$.dirty[1] & /*$jsonSecondaryAccessibility*/
    134217728 && (he != null && he.description ? e(20, yr = ti(he)) : i && Ve.logError(K(new Error('Missing second accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext, thumbStyle, hasError*/
    1057 | t.$$.dirty[1] & /*trackActiveStyle, trackInactiveStyle*/
    49152) {
      let Ie = !1;
      Vt.hasAction() ? (Ve.logError(K(new Error('Cannot show "slider" inside component with an action or inside accessibility mode=exclude'))), Ie = !0) : or === xn ? (Ve.logError(K(new Error('Missing "thumb_style" in slider'))), Ie = !0) : hr === xn ? (Ve.logError(K(new Error('Missing "track_active_style" in slider'))), Ie = !0) : Qt === xn && (Ve.logError(K(new Error('Missing "track_inactive_style" in slider'))), Ie = !0), Ie !== jt && e(10, jt = Ie);
    }
    t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(52, ue = _e(Math.max(...[or.width, tr.width, 0].filter(Mn)))), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(51, T = _e(Math.max(...[or.height, tr.height, 0].filter(Mn)))), t.$$.dirty[0] & /*value, minValue, maxValue*/
    2072 && e(50, Y = (lr - Fe) / (vt - Fe)), t.$$.dirty[0] & /*secondVariable, value2, minValue, maxValue*/
    12312 && e(49, le = i ? (it - Fe) / (vt - Fe) : void 0), t.$$.dirty[0] & /*value, value2, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(54, A = le !== void 0 ? Math.min(lr, it) : Fe), t.$$.dirty[0] & /*value2, value, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(53, D = le !== void 0 ? Math.abs(it - lr) : lr - Fe), t.$$.dirty[0] & /*$direction, minValue, maxValue*/
    16408 | t.$$.dirty[1] & /*trackActiveOffset, trackActivePart, trackInactiveStyle, trackActiveStyle, $jsonRanges*/
    79740928 && At({
      direction: Z,
      minValue: Fe,
      maxValue: vt,
      trackActiveOffset: A,
      trackActivePart: D,
      trackInactiveStyle: Qt,
      trackActiveStyle: hr,
      ranges: me
    }), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle, textStyle, textSecondaryStyle*/
    480 | t.$$.dirty[1] & /*markActiveStyle, markInactiveStyle, maxThumbWidth, maxThumbHeight, trackPart, trackSecondaryPart*/
    4128768 && e(25, M = {
      "--divkit-slider-thumb-width": _e(or.width),
      "--divkit-slider-thumb-height": _e(or.height),
      "--divkit-slider-thumb-secondary-width": _e(tr.width),
      "--divkit-slider-thumb-secondary-height": _e(tr.height),
      "--divkit-slider-text-offset-x": (v = _t == null ? void 0 : _t.offset) != null && v.x ? an(_t.offset.x) : void 0,
      "--divkit-slider-text-offset-y": (se = _t == null ? void 0 : _t.offset) != null && se.y ? an(_t.offset.y) : void 0,
      "--divkit-slider-text-secondary-offset-x": (d = er == null ? void 0 : er.offset) != null && d.x ? an(er.offset.x) : void 0,
      "--divkit-slider-text-secondary-offset-y": (z = er == null ? void 0 : er.offset) != null && z.y ? an(er.offset.y) : void 0,
      "--divkit-slider-tick-active-width": Mt ? _e(Mt.width) : void 0,
      "--divkit-slider-tick-active-height": Mt ? _e(Mt.height) : void 0,
      "--divkit-slider-tick-active-border-radius": Mt ? _e(Mt.borderRadius) : void 0,
      "--divkit-slider-tick-active-background": (Mt == null ? void 0 : Mt.background) || void 0,
      "--divkit-slider-tick-active-box-shadow": (Mt == null ? void 0 : Mt.boxShadow) || void 0,
      "--divkit-slider-tick-inactive-width": Wt ? _e(Wt.width) : void 0,
      "--divkit-slider-tick-inactive-height": Wt ? _e(Wt.height) : void 0,
      "--divkit-slider-tick-inactive-border-radius": Wt ? _e(Wt.borderRadius) : void 0,
      "--divkit-slider-tick-inactive-background": (Wt == null ? void 0 : Wt.background) || void 0,
      "--divkit-slider-tick-inactive-box-shadow": (Wt == null ? void 0 : Wt.boxShadow) || void 0,
      "--divkit-slider-max-thumb-width": ue,
      "--divkit-slider-max-thumb-height": T,
      "--divkit-slider-track-part": Y,
      "--divkit-slider-track-secondary-part": le
    }), t.$$.dirty[0] & /*$direction*/
    16384 && e(24, U = { direction: Z }), t.$$.dirty[0] & /*componentContext, input*/
    5 | t.$$.dirty[1] & /*prevId*/
    8192 && Ve.json && Gt && (bt && (Be.unregisterFocusable(bt), e(44, bt = void 0)), Ve.id && !Ve.fakeElement && (e(44, bt = Ve.id), Be.registerFocusable(bt, {
      focus() {
        Gt && Gt.focus();
      }
    })));
  }, [
    Ve,
    $e,
    Gt,
    Fe,
    vt,
    or,
    tr,
    _t,
    er,
    vr,
    jt,
    lr,
    it,
    i,
    Z,
    It,
    _r,
    kr,
    br,
    ie,
    yr,
    Ir,
    s,
    a,
    U,
    M,
    re,
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
    Oe,
    Jt,
    Yt,
    ce,
    bt,
    Qt,
    hr,
    Mt,
    Wt,
    le,
    Y,
    T,
    ue,
    D,
    A,
    o,
    n,
    me,
    he,
    xe,
    be,
    ge,
    ae,
    Re,
    Le,
    ut,
    nt,
    q,
    Me,
    lt,
    tt,
    Tt,
    je,
    kt,
    nr,
    Xt,
    jr
  ];
}
class w1 extends Or {
  constructor(r) {
    super(), Lr(this, r, y1, b1, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const k1 = "appkit-input", v1 = "appkit-input__aligner", j1 = "appkit-input__input", C1 = "appkit-input__placeholder", A1 = "appkit-input__input_singleline", E1 = "appkit-input__input_multiline", Oi = {
  input: k1,
  "input_alignment-horizontal_center": "appkit-input_alignment-horizontal_center",
  "input_alignment-horizontal_end": "appkit-input_alignment-horizontal_end",
  input__aligner: v1,
  input__input: j1,
  input__placeholder: C1,
  "input_alignment-vertical_start": "appkit-input_alignment-vertical_start",
  "input_alignment-vertical_end": "appkit-input_alignment-vertical_end",
  "input_alignment-vertical_baseline": "appkit-input_alignment-vertical_baseline",
  "input_highlight-color": "appkit-input_highlight-color",
  input__input_singleline: A1,
  "input__scroll-wrapper": "appkit-input__scroll-wrapper",
  input__input_multiline: E1,
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
class Au {
  constructor(r) {
    this.char = r;
  }
}
class wo {
  constructor(r, e, n) {
    this.char = r, this.filter = e, this.placeholder = n;
  }
}
class wa {
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
      if (n instanceof Au)
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
      ) : new Au(o);
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
class S1 extends wa {
  constructor(r, e) {
    super(r), this.logError = e;
  }
  onException(r) {
    this.logError(r);
  }
}
function V1(t, r, e) {
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
    return e ? (e.updateMaskData(n), e) : new S1(n, r);
  }
  return e || null;
}
class F1 extends wa {
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
function I1(t, r, e) {
  return e ? (e.updateCurrencyParams(t.locale), e) : new F1(t.locale, r);
}
const D1 = {
  kotlin: {
    public_default_values: !0
  },
  swift: {
    public_default_values: !0
  }
}, T1 = {
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
}, M1 = "object", P1 = {
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
  codegen: D1,
  constants: T1,
  type: M1,
  properties: P1
}, N1 = "000000000000000", Eu = "*", z1 = "00", Su = [{
  key: "0",
  filter: "\\d",
  placeholder: "_"
}];
class L1 extends wa {
  constructor(e) {
    super({
      pattern: Fu(""),
      decoding: Su,
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
    const n = Fu(e), o = this.maskData.pattern;
    return n !== o ? n : null;
  }
  updateMaskDataWith(e) {
    return this.updateMaskData({
      pattern: e,
      decoding: Su,
      alwaysVisible: this.maskData.alwaysVisible
    }, !1);
  }
  onException(e) {
    this.logError(e);
  }
}
function Vu(t) {
  return "$ref" in t ? qd.constants[t.$ref.split("/").pop()] : t;
}
function Fu(t) {
  if (!t)
    return N1;
  let r = qd.properties.value.default_value, e = 0;
  for (; !("value" in r); ) {
    if (e >= t.length) {
      r = Vu(r[Eu]);
      break;
    }
    const n = t[e++];
    r = Vu(r[n in r ? n : Eu]);
  }
  return r.value + z1;
}
function O1(t, r) {
  return r || new L1(t);
}
function B1(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function R1(t) {
  let r, e;
  return r = new hn({
    props: {
      alwaysCustomFocus: !0,
      cls: mt(
        "input",
        Oi,
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
          U1,
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
      Rt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      262144 && (i.cls = mt(
        "input",
        Oi,
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function H1(t) {
  let r, e, n, o, i, s, a, l, c;
  return {
    c() {
      r = Pe("input"), g(
        r,
        "type",
        /*inputType*/
        t[9]
      ), g(
        r,
        "inputmode",
        /*inputMode*/
        t[10]
      ), g(r, "class", e = mt("input__input", Oi, {
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
      t[14] || void 0), g(r, "style", o = ur(
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
      J(u, r, f), t[102](r), l || (c = [
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
      1073741824 && e !== (e = mt("input__input", Oi, {
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
      65536 && o !== (o = ur(
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
      u && G(r), t[102](null), l = !1, Gr(c);
    }
  };
}
function W1(t) {
  let r, e, n, o, i, s, a, l, c;
  return {
    c() {
      r = Pe("textarea"), g(r, "class", e = mt("input__input", Oi, {
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
      )), g(r, "style", i = ur(
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
      J(u, r, f), t[101](r), l || (c = [
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
    p(u, f) {
      t = u, f[3] & /*hasCustomFocus*/
      1073741824 && e !== (e = mt("input__input", Oi, {
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
      65536 && i !== (i = ur(
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
      u && G(r), t[101](null), l = !1, Gr(c);
    }
  };
}
function U1(t) {
  let r;
  function e(i, s) {
    return (
      /*isMultiline*/
      i[8] ? W1 : H1
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = xt();
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
function G1(t) {
  let r, e, n, o;
  const i = [R1, B1], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[4] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (fr(), te(s[u], 1, 1, () => {
        s[u] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
const J1 = typeof document < "u" && "inputMode" in document.createElement("input"), Iu = {
  email: "email",
  number: "number",
  phone: "tel",
  single_line_text: "text",
  multi_line_text: "text",
  uri: "url",
  password: "password"
};
function q1(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, re, ue, T, Y, le, A, D, M, U, Z, me, Ae, ve, he, Se, Q, xe, qe, Ke, be = j, Te = () => (be(), be = E(s, (Ze) => e(74, Ke = Ze)), s), pe, ge = j, de = () => (ge(), ge = E(a, (Ze) => e(75, pe = Ze)), a), ee, ae = j, ne = () => (ae(), ae = E(Ae, (Ze) => e(108, ee = Ze)), Ae), we, Re = j, Ye = () => (Re(), Re = E(Z, (Ze) => e(76, we = Ze)), Z), $, Le = j, Ne = () => (Le(), Le = E(le, (Ze) => e(77, $ = Ze)), le), ot, ut = j, rt = () => (ut(), ut = E(U, (Ze) => e(78, ot = Ze)), U), yt, nt, Pt = j, ft = () => (Pt(), Pt = E(Y, (Ze) => e(80, nt = Ze)), Y), q, fe = j, st = () => (fe(), fe = E(T, (Ze) => e(81, q = Ze)), T), Me, I = j, Ct = () => (I(), I = E(ve, (Ze) => e(82, Me = Ze)), ve), lt, St = j, Dt = () => (St(), St = E(ue, (Ze) => e(83, lt = Ze)), ue), tt, X = j, Et = () => (X(), X = E(re, (Ze) => e(84, tt = Ze)), re), Tt, $t = j, Kt = () => ($t(), $t = E(M, (Ze) => e(85, Tt = Ze)), M), je, He = j, pt = () => (He(), He = E(D, (Ze) => e(86, je = Ze)), D), Ve, $e = j, Be = () => ($e(), $e = E(L, (Ze) => e(87, Ve = Ze)), L), Vt, Oe = j, bt = () => (Oe(), Oe = E(R, (Ze) => e(88, Vt = Ze)), R), Gt, It = j, _r = () => (It(), It = E(N, (Ze) => e(89, Gt = Ze)), N), Fe, vt = j, or = () => (vt(), vt = E(k, (Ze) => e(90, Fe = Ze)), k), tr, Qt = j, hr = () => (Qt(), Qt = E(w, (Ze) => e(91, tr = Ze)), w), kr, Mt = j, br = () => (Mt(), Mt = E(p, (Ze) => e(92, kr = Ze)), p), Wt, _t = j, er = () => (_t(), _t = E(m, (Ze) => e(93, Wt = Ze)), m), ie, yr = j, vr = () => (yr(), yr = E(h, (Ze) => e(94, ie = Ze)), h), jt, Ir = j, qr = () => (Ir(), Ir = E(_, (Ze) => e(95, jt = Ze)), _), lr, it = j, At = () => (it(), it = E(f, (Ze) => e(96, lr = Ze)), f), Jt, Yt = j, sr = () => (Yt(), Yt = E(u, (Ze) => e(97, Jt = Ze)), u), dt, ce = j, kt = () => (ce(), ce = E(c, (Ze) => e(98, dt = Ze)), c), nr, Xt = j, jr = () => (Xt(), Xt = E(l, (Ze) => e(99, nr = Ze)), l), v, se = j, d = () => (se(), se = E(me, (Ze) => e(100, v = Ze)), me), z, Ie = j, We = () => (Ie(), Ie = E(A, (Ze) => e(46, z = Ze)), A);
  t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => Le()), t.$$.on_destroy.push(() => ut()), t.$$.on_destroy.push(() => Pt()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => St()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => $t()), t.$$.on_destroy.push(() => He()), t.$$.on_destroy.push(() => $e()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => It()), t.$$.on_destroy.push(() => vt()), t.$$.on_destroy.push(() => Qt()), t.$$.on_destroy.push(() => Mt()), t.$$.on_destroy.push(() => _t()), t.$$.on_destroy.push(() => yr()), t.$$.on_destroy.push(() => Ir()), t.$$.on_destroy.push(() => it()), t.$$.on_destroy.push(() => Yt()), t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => Xt()), t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => Ie());
  let { componentContext: ke } = r, { layoutParams: B = void 0 } = r;
  const Ut = Dr(Kr), Ht = Dr(To), Xe = Ut.direction;
  bn(t, Xe, (Ze) => e(79, yt = Ze));
  let at, qt, Vr = !1, pr = null, Pr = "", An = !1, Ee = "", Yr = 12, Xr, gn = "", y = "", C, S = "", oe = "#000", O = "", et = "start", De = "center", Zt = "multi_line_text", Ft = "text", Je, rr = "", ht = null, Sr = "", Tr = "", yn = "", xr = !0, Hr = 1 / 0, nn = "off", zn = "default", Bn = "", so = !1, Tn = !0, Lt = 0, b = 0;
  function V() {
    e(54, Ee = ""), e(55, Yr = 12), e(56, Xr = void 0), e(57, gn = ""), e(58, y = ""), e(59, C = void 0), e(61, oe = "#000"), e(62, O = ""), e(63, et = "left"), e(64, De = "center"), e(65, Zt = "multi_line_text"), e(9, Ft = "text"), e(10, Je = void 0), e(5, xr = !0), e(6, Hr = 1 / 0), e(12, nn = "off"), e(13, zn = "default"), e(14, Bn = ""), Lt = 0, b = 0;
  }
  function x(Ze) {
    (Ze == null ? void 0 : Ze.type) === "fixed_length" ? e(53, pr = V1(Ze, ke.logError, pr)) : (Ze == null ? void 0 : Ze.type) === "currency" ? e(53, pr = I1(Ze, ke.logError, pr)) : (Ze == null ? void 0 : Ze.type) === "phone" && e(53, pr = O1(ke.logError, pr)), pr && to();
  }
  function P(Ze) {
    if (!Array.isArray(ee))
      return !0;
    for (const wr of ee)
      if (wr) {
        if (wr.type === "regex")
          try {
            if (!new RegExp("^" + (wr.pattern || "") + "$").test(Ze))
              return !1;
          } catch (on) {
            return ke.logError(K(new Error("Failed to create a regex"), {
              additional: { originalError: String(on) }
            })), !0;
          }
        else if (wr.type === "expression" && !wr.condition)
          return !1;
      }
    return !0;
  }
  function Ce(Ze) {
    const wr = Ze.target;
    let on = wr.value || "";
    on === `
` && (on = ""), on.length > Hr && (on = Pr, wr instanceof HTMLInputElement && (wr.value = on)), Pr !== on && (P(on) ? (e(3, Pr = on), s.setValue(on), pr && mo(), ro()) : (e(3, Pr = on), wr instanceof HTMLInputElement && (wr.value = on), Vn().then(() => {
      Br(Lt, b);
    })));
  }
  function ye(Ze) {
    if (Lt = Jr() || 0, b = Mr() || 0, Ze.ctrlKey || Ze.metaKey || Ze.altKey || Ze.shiftKey)
      return;
    const wr = ke.json.enter_key_actions;
    Ze.key === "Enter" && Array.isArray(wr) && wr.length && (Ze.preventDefault(), ke.execAnyActions(wr));
  }
  function Ot() {
    Vr = !1, setTimeout(
      () => {
        Vr = !0;
      },
      250
    );
  }
  function Bt() {
    Vr || qt.select();
  }
  function Jr() {
    const Ze = qt;
    return Ze.selectionStart === null ? void 0 : Ze.selectionStart;
  }
  function Mr() {
    const Ze = qt;
    return Ze.selectionEnd === null ? void 0 : Ze.selectionEnd;
  }
  function Br(Ze, wr) {
    const on = qt;
    on.selectionStart = Ze, on.selectionEnd = wr;
  }
  async function mo() {
    if (!qt || !pr)
      return;
    const Ze = Jr() || 0, wr = Mr() || 0;
    pr.applyChangeFrom(Pr, wr === Ze ? wr : 0), a.set(pr.rawValue), wl(s, Ke = e(3, Pr = pr.value), Ke);
    const on = pr.cursorPosition;
    await Vn(), document.activeElement === qt && Br(on, on);
  }
  async function to() {
    if (!qt || !pr)
      return;
    pr.overrideRawValue(pe), a.set(pr.rawValue), wl(s, Ke = e(3, Pr = pr.value), Ke);
    const Ze = pr.cursorPosition;
    await Vn(), document.activeElement === qt && Br(Ze, Ze);
  }
  function ro() {
    const Ze = Tn;
    Tn = !1;
    const wr = ke.json.validators;
    if (!Array.isArray(wr) || !wr.length)
      return;
    const Lo = ke.getJsonWithVars(wr).filter((wn) => (wn.type === "regex" || wn.type === "expression") && wn.label_id && wn.variable), Oo = [];
    Lo.forEach((wn) => {
      const Yo = ke.getVariable(wn.variable);
      if (!Yo)
        return;
      if (Yo.getType() !== "boolean") {
        Ze && ke.logError(K(new Error("Incorrect variable type for the validator"), {
          additional: { variable: wn.variable }
        }));
        return;
      }
      let jn = !1;
      if (Pr === "" && (wn.allow_empty === !0 || wn.allow_empty === 1))
        jn = !0;
      else if (wn.type === "regex") {
        if (!wn.pattern || typeof wn.pattern != "string")
          return;
        try {
          jn = new RegExp("^" + wn.pattern + "$").test(Pr);
        } catch {
          Ze && ke.logError(K(new Error("Failed to create a regular expression using the validator pattern"), {
            additional: { pattern: wn.pattern }
          }));
          return;
        }
      } else if (wn.type === "expression")
        jn = wn.condition === !0 || wn.condition === 1;
      else
        return;
      if (Yo.setValue(jn), !jn) {
        const Co = Ut.getComponentId(wn.label_id);
        Co && Oo.push(Co);
      }
    }), e(14, Bn = Oo.join(" "));
  }
  Xn(() => {
    e(70, so = !0), qt && pr && pe && (pr.overrideRawValue(pe), wl(s, Ke = e(3, Pr = pr.value), Ke));
  }), ln(() => {
    e(70, so = !1), at && (Ut.unregisterFocusable(at), e(52, at = void 0));
  });
  function Qn(Ze) {
    Fr[Ze ? "unshift" : "push"](() => {
      qt = Ze, e(2, qt);
    });
  }
  function qi(Ze) {
    Fr[Ze ? "unshift" : "push"](() => {
      qt = Ze, e(2, qt);
    });
  }
  return t.$$set = (Ze) => {
    "componentContext" in Ze && e(0, ke = Ze.componentContext), "layoutParams" in Ze && e(1, B = Ze.layoutParams);
  }, t.$$.update = () => {
    var Ze;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(73, n = ke.origJson), t.$$.dirty[2] & /*origJson*/
    2048 && n && V(), t.$$.dirty[0] & /*componentContext*/
    1 && e(71, o = ke.json.text_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(72, i = (Ze = ke.json.mask) == null ? void 0 : Ze.raw_text_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*variable*/
    512 && Te(e(7, s = o && (ke.getVariable(o, "string") || Ut.awaitGlobalVariable(o, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*rawVariable*/
    1024 && de(e(15, a = i && (ke.getVariable(i, "string") || Ut.awaitGlobalVariable(i, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && jr(e(45, l = ke.getDerivedFromVars(ke.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && kt(e(44, c = ke.getDerivedFromVars(ke.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && sr(e(43, u = ke.getDerivedFromVars(ke.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && At(e(42, f = ke.getDerivedFromVars(ke.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && qr(e(41, _ = ke.getDerivedFromVars(ke.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && vr(e(40, h = ke.getDerivedFromVars(ke.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && er(e(39, m = ke.getDerivedFromVars(ke.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && br(e(38, p = ke.getDerivedFromVars(ke.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && hr(e(37, w = ke.getDerivedFromVars(ke.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && or(e(36, k = ke.getDerivedFromVars(ke.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && _r(e(35, N = ke.getDerivedFromVars(ke.json.highlight_color))), t.$$.dirty[0] & /*componentContext*/
    1 && bt(e(34, R = ke.getDerivedFromVars(ke.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Be(e(33, L = ke.getDerivedFromVars(ke.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Et(e(32, re = ke.getDerivedFromVars(ke.json.keyboard_type))), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(31, ue = ke.getDerivedFromVars(ke.json.mask))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(30, T = ke.getDerivedFromVars(ke.json.max_visible_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(29, Y = ke.getDerivedFromVars(ke.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Ne(e(28, le = ke.getDerivedFromVars(ke.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && We(e(27, A = ke.getDerivedFromVars(ke.json.select_all_on_focus))), t.$$.dirty[0] & /*componentContext*/
    1 && pt(e(26, D = ke.getDerivedFromVars(ke.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Kt(e(25, M = ke.getDerivedFromVars(ke.json.max_length))), t.$$.dirty[0] & /*componentContext*/
    1 && rt(e(24, U = ke.getDerivedFromVars(ke.json.autocapitalization))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(23, Z = ke.getDerivedFromVars(ke.json.enter_key_type))), t.$$.dirty[0] & /*componentContext*/
    1 && d(e(22, me = ke.getDerivedFromVars(ke.json.validators))), t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(21, Ae = ke.getDerivedFromVars(ke.json.filters))), t.$$.dirty[0] & /*componentContext*/
    1 && Ct(e(20, ve = ke.getDerivedFromVars(ke.json.max_input_height))), t.$$.dirty[0] & /*componentContext, hasError*/
    17 | t.$$.dirty[2] & /*variable, $jsonAccessibility*/
    33280) {
      let wr = !1;
      o ? (Ht.hasAction() || ($ == null ? void 0 : $.mode) === "exclude") && (wr = !0, ke.logError(K(new Error('Cannot show "input" inside component with an action or inside accessibility mode=exclude')))) : (e(4, An = !0), ke.logError(K(new Error('Missing "text_variable" in "input"')))), An !== wr && e(4, An = wr);
    }
    if (t.$$.dirty[2] & /*$jsonMask*/
    2097152 && x(lt), t.$$.dirty[0] & /*maxLength*/
    64 | t.$$.dirty[2] & /*$jsonMaxLength*/
    8388608 && e(6, Hr = Un(Tt, Hr)), t.$$.dirty[0] & /*value, maxLength, valueVariable*/
    200 | t.$$.dirty[1] & /*inputMask*/
    4194304 | t.$$.dirty[2] & /*$valueVariable*/
    4096 && !pr && Pr !== Ke) {
      let wr = Ke;
      wr.length > Hr && (wr = wr.slice(0, Hr), s.setValue(wr)), e(3, Pr = wr), ro();
    }
    if (t.$$.dirty[1] & /*inputMask*/
    4194304 | t.$$.dirty[2] & /*$rawValueVariable*/
    8192 && pr && pr.rawValue !== pe && (to(), ro()), t.$$.dirty[2] & /*mounted*/
    256 | t.$$.dirty[3] & /*$jsonValidators*/
    128 && v && so && ro(), t.$$.dirty[3] & /*$jsonHintText*/
    64 && e(19, he = nr), t.$$.dirty[1] & /*hintColor*/
    8388608 | t.$$.dirty[3] & /*$jsonHintColor*/
    32 && e(54, Ee = gr(dt, 1, Ee)), t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[3] & /*$jsonFontSize*/
    16 && e(55, Yr = Un(Jt, Yr)), t.$$.dirty[1] & /*fontWeight*/
    33554432 | t.$$.dirty[3] & /*$jsonFontWeight, $jsonFontWeightValue, $jsonFontFamily*/
    14 && (e(56, Xr = bi(lr, jt, Xr)), ie && typeof ie == "string" ? e(57, gn = Ut.typefaceProvider(ie, { fontWeight: Xr || 400 })) : e(57, gn = "")), t.$$.dirty[1] & /*fontVariationSettings*/
    134217728 | t.$$.dirty[3] & /*$jsonFontVariationSettings*/
    1) {
      const wr = Li(Wt);
      wr !== y && e(58, y = wr);
    }
    if (t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[2] & /*$jsonLineHeight*/
    1073741824) {
      const wr = kr;
      Pn(wr) && e(59, C = wr / Yr);
    }
    t.$$.dirty[2] & /*$jsonLetterSpacing*/
    536870912 && cl(tr) && e(60, S = _e(tr)), t.$$.dirty[1] & /*textColor*/
    1073741824 | t.$$.dirty[2] & /*$jsonTextColor*/
    268435456 && e(61, oe = gr(Fe, 1, oe)), t.$$.dirty[2] & /*$jsonHighlightColor, highlightColor*/
    134217729 && e(62, O = gr(Gt, 1, O)), t.$$.dirty[2] & /*$jsonAlignmentHorizontal, $direction, alignmentHorizontal*/
    67239938 && e(63, et = fl(Vt, yt, et)), t.$$.dirty[2] & /*$jsonAlignmentVertical, alignmentVertical*/
    33554436 && e(64, De = dl(Ve, De)), t.$$.dirty[0] & /*isEnabled*/
    32 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    16777216 && e(5, xr = sn(je, xr)), t.$$.dirty[2] & /*$jsonKeyboardType, $jsonMask, keyboardType*/
    6291464 && (tt && tt in Iu && (e(9, Ft = Iu[tt]), e(65, Zt = tt)), (lt == null ? void 0 : lt.type) === "currency" ? (e(9, Ft = J1 ? "text" : "tel"), e(10, Je = "decimal")) : Zt === "number" ? e(10, Je = "decimal") : e(10, Je = void 0)), t.$$.dirty[2] & /*keyboardType*/
    8 && e(8, Se = Zt === "multi_line_text"), t.$$.dirty[1] & /*lineHeight, fontSize*/
    285212672 | t.$$.dirty[2] & /*$jsonMaxInputHeight, $jsonVisibleMaxLines, $jsonPaddings, selfPadding, $direction*/
    1966112 && (Pn(Me) ? e(66, rr = an(Me)) : Pn(q) ? e(66, rr = `calc(${q * (C || 1.25) * (Yr / 10) + "em"} + ${an(rn(nt == null ? void 0 : nt.top, 0) + rn(nt == null ? void 0 : nt.bottom, 0))})`) : e(66, rr = ""), e(67, ht = mi(nt || void 0, ht)), e(68, Sr = ht ? po(
      {
        top: (Number(ht.top) || 0) / Yr * 10,
        right: (Number(yt === "ltr" ? ht.end : ht.start) || Number(ht.right) || 0) / Yr * 10,
        bottom: (Number(ht.bottom) || 0) / Yr * 10,
        left: (Number(yt === "ltr" ? ht.start : ht.end) || Number(ht.left) || 0) / Yr * 10
      },
      yt
    ) : ""), e(69, Tr = ht ? po(
      {
        top: (Number(ht.top) || 0) / Yr * 10,
        bottom: (Number(ht.bottom) || 0) / Yr * 10
      },
      yt
    ) : "")), t.$$.dirty[2] & /*$jsonAutocapitalization*/
    65536 && (ot === "all_characters" ? e(12, nn = "characters") : ot === "sentences" ? e(12, nn = "sentences") : ot === "words" ? e(12, nn = "words") : (ot === "none" || ot === "auto") && e(12, nn = "off")), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonAccessibility*/
    32768 && ($ != null && $.description ? e(11, yn = ti($)) : ke.logError(K(new Error('Missing accessibility "description" for input'), { level: "warn" }))), t.$$.dirty[2] & /*$jsonEnterKeyType*/
    16384 && (we === "default" || we === "done" || we === "go" || we === "search" || we === "send") && e(13, zn = we), t.$$.dirty[0] & /*isMultiline*/
    256 | t.$$.dirty[2] & /*highlightColor, alignmentHorizontal, alignmentVertical*/
    7 && e(18, Q = {
      "highlight-color": !!O,
      multiline: Se,
      "alignment-horizontal": et,
      "alignment-vertical": De
    }), t.$$.dirty[1] & /*hintColor, lineHeight, fontWeight, fontFamily, fontVariationSettings, letterSpacing, textColor*/
    2122317824 | t.$$.dirty[2] & /*highlightColor, maxHeight*/
    17 && e(17, xe = {
      "--divkit-input-hint-color": Ee,
      "--divkit-input-highlight-color": O,
      "--divkit-input-line-height": C,
      "font-weight": Xr,
      "font-family": gn,
      "font-variation-settings": y,
      "letter-spacing": S,
      color: oe,
      "max-height": rr
    }), t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[2] & /*padding*/
    64 && e(16, qe = { "font-size": _e(Yr), padding: Sr }), t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[2] & /*verticalPadding*/
    128, t.$$.dirty[0] & /*input, componentContext, value*/
    13 | t.$$.dirty[1] & /*prevId*/
    2097152 && qt && ke.json && (at && (Ut.unregisterFocusable(at), e(52, at = void 0)), ke.id && !ke.fakeElement && (e(52, at = ke.id), Ut.registerFocusable(at, {
      focus() {
        qt && (qt.focus(), Br(Pr.length, Pr.length));
      }
    })));
  }, [
    ke,
    B,
    qt,
    Pr,
    An,
    xr,
    Hr,
    s,
    Se,
    Ft,
    Je,
    yn,
    nn,
    zn,
    Bn,
    a,
    qe,
    xe,
    Q,
    he,
    ve,
    Ae,
    me,
    Z,
    U,
    M,
    D,
    A,
    le,
    Y,
    T,
    ue,
    re,
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
    Xe,
    Ce,
    ye,
    Ot,
    Bt,
    at,
    pr,
    Ee,
    Yr,
    Xr,
    gn,
    y,
    C,
    S,
    oe,
    O,
    et,
    De,
    Zt,
    rr,
    ht,
    Sr,
    Tr,
    so,
    o,
    i,
    n,
    Ke,
    pe,
    we,
    $,
    ot,
    yt,
    nt,
    q,
    Me,
    lt,
    tt,
    Tt,
    je,
    Ve,
    Vt,
    Gt,
    Fe,
    tr,
    kr,
    Wt,
    ie,
    jt,
    lr,
    Jt,
    dt,
    nr,
    v,
    Qn,
    qi
  ];
}
class K1 extends Or {
  constructor(r) {
    super(), Lr(this, r, q1, G1, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1, -1]);
  }
}
const Y1 = "appkit-select", X1 = "appkit-select_hint", Z1 = "appkit-select__select", Q1 = "appkit-select__option", Pi = {
  select: Y1,
  "select__select-text": "appkit-select__select-text",
  select_hint: X1,
  select__select: Z1,
  "select__select_has-custom-focused": "appkit-select__select_has-custom-focused",
  "has-custom-focused": "appkit-has-custom-focused",
  select__option: Q1
};
function Du(t, r, e) {
  const n = t.slice();
  return n[62] = r[e], n;
}
function x1(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function $1(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: mt(
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
          eb,
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
      Rt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = mt(
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function Tu(t) {
  let r, e = (
    /*item*/
    (t[62].text || /*item*/
    t[62].value) + ""
  ), n, o;
  return {
    c() {
      r = Pe("option"), n = Gn(e), g(r, "class", Pi.select__option), r.__value = o = /*item*/
      t[62].value, Da(r, r.__value);
    },
    m(i, s) {
      J(i, r, s), wt(r, n);
    },
    p(i, s) {
      s[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      (i[62].text || /*item*/
      i[62].value) + "") && eo(n, e), s[0] & /*filteredItems*/
      32 && o !== (o = /*item*/
      i[62].value) && (r.__value = o, Da(r, r.__value));
    },
    d(i) {
      i && G(r);
    }
  };
}
function eb(t) {
  let r, e = (
    /*selectText*/
    (t[4] || /*$jsonHintText*/
    t[25] || "​") + ""
  ), n, o, i, s, a, l, c, u, f = ir(
    /*filteredItems*/
    t[5]
  ), _ = [];
  for (let h = 0; h < f.length; h += 1)
    _[h] = Tu(Du(t, f, h));
  return {
    c() {
      r = Pe("span"), n = Gn(e), i = mr(), s = Pe("select");
      for (let h = 0; h < _.length; h += 1)
        _[h].c();
      g(r, "class", Pi["select__select-text"]), g(r, "style", o = ur(
        /*innerStl*/
        t[9]
      )), g(r, "aria-hidden", "true"), g(s, "class", a = mt("select__select", Pi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[59]
        )
      })), g(
        s,
        "aria-label",
        /*description*/
        t[7]
      ), g(s, "style", l = ur(
        /*selectStl*/
        t[8]
      )), /*$valueVariable*/
      t[6] === void 0 && fo(() => (
        /*select_1_change_handler*/
        t[55].call(s)
      ));
    },
    m(h, m) {
      J(h, r, m), wt(r, n), J(h, i, m), J(h, s, m);
      for (let p = 0; p < _.length; p += 1)
        _[p] && _[p].m(s, null);
      t[54](s), Ta(
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
      ], c = !0);
    },
    p(h, m) {
      if (t = h, m[0] & /*selectText, $jsonHintText*/
      33554448 && e !== (e = /*selectText*/
      (t[4] || /*$jsonHintText*/
      t[25] || "​") + "") && eo(n, e), m[0] & /*innerStl*/
      512 && o !== (o = ur(
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
          const w = Du(t, f, p);
          _[p] ? _[p].p(w, m) : (_[p] = Tu(w), _[p].c(), _[p].m(s, null));
        }
        for (; p < _.length; p += 1)
          _[p].d(1);
        _.length = f.length;
      }
      m[1] & /*hasCustomFocus*/
      268435456 && a !== (a = mt("select__select", Pi, {
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
      256 && l !== (l = ur(
        /*selectStl*/
        t[8]
      )) && g(s, "style", l), m[0] & /*$valueVariable, filteredItems*/
      96 && Ta(
        s,
        /*$valueVariable*/
        t[6]
      );
    },
    d(h) {
      h && (G(r), G(i), G(s)), cn(_, h), t[54](null), c = !1, Gr(u);
    }
  };
}
function tb(t) {
  let r, e, n, o;
  const i = [$1, x1], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (fr(), te(s[u], 1, 1, () => {
        s[u] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function rb(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, re, ue, T, Y, le = j, A = () => (le(), le = E(R, (Fe) => e(42, Y = Fe)), R), D, M = j, U = () => (M(), M = E(N, (Fe) => e(43, D = Fe)), N), Z, me = j, Ae = () => (me(), me = E(k, (Fe) => e(44, Z = Fe)), k), ve, he = j, Se = () => (he(), he = E(w, (Fe) => e(45, ve = Fe)), w), Q, xe = j, qe = () => (xe(), xe = E(p, (Fe) => e(46, Q = Fe)), p), Ke, be = j, Te = () => (be(), be = E(m, (Fe) => e(47, Ke = Fe)), m), pe, ge = j, de = () => (ge(), ge = E(h, (Fe) => e(48, pe = Fe)), h), ee, ae = j, ne = () => (ae(), ae = E(_, (Fe) => e(49, ee = Fe)), _), we, Re = j, Ye = () => (Re(), Re = E(f, (Fe) => e(50, we = Fe)), f), $, Le = j, Ne = () => (Le(), Le = E(u, (Fe) => e(51, $ = Fe)), u), ot, ut, rt = j, yt = () => (rt(), rt = E(l, (Fe) => e(53, ut = Fe)), l), nt, Pt = j, ft = () => (Pt(), Pt = E(a, (Fe) => e(6, nt = Fe)), a), q, fe = j, st = () => (fe(), fe = E(c, (Fe) => e(25, q = Fe)), c);
  t.$$.on_destroy.push(() => le()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => Le()), t.$$.on_destroy.push(() => rt()), t.$$.on_destroy.push(() => Pt()), t.$$.on_destroy.push(() => fe());
  let { componentContext: Me } = r, { layoutParams: I = void 0 } = r;
  const Ct = Dr(Kr), lt = Dr(To), St = Ct.direction;
  bn(t, St, (Fe) => e(52, ot = Fe));
  let Dt, tt, X = !1, Et = "", Tt = null, $t = "", Kt = "rgba(0,0,0,.45)", je = 12, He, pt = "", Ve = "", $e, Be = "", Vt = "#000", Oe = "", bt;
  function Gt() {
    e(28, Tt = null), e(30, Kt = "rgba(0,0,0,.45)"), e(31, je = 12), e(32, He = void 0), e(33, pt = ""), e(34, Ve = ""), e(35, $e = void 0), e(36, Be = ""), e(37, Vt = "#000"), e(7, Oe = "");
  }
  ln(() => {
    Dt && (Ct.unregisterFocusable(Dt), e(27, Dt = void 0));
  });
  function It(Fe) {
    Fr[Fe ? "unshift" : "push"](() => {
      tt = Fe, e(2, tt);
    });
  }
  function _r() {
    nt = F_(this), a.set(nt), e(5, s), e(40, i), e(0, Me);
  }
  return t.$$set = (Fe) => {
    "componentContext" in Fe && e(0, Me = Fe.componentContext), "layoutParams" in Fe && e(1, I = Fe.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(41, n = Me.origJson), t.$$.dirty[1] & /*origJson*/
    1024 && n && Gt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(39, o = Me.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(40, i = Me.json.options), t.$$.dirty[1] & /*items*/
    512 && e(5, s = Array.isArray(i) && i.filter((Fe) => typeof Fe.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    256 && ft(e(24, a = o && (Me.getVariable(o, "string") || Ct.awaitGlobalVariable(o, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && yt(e(23, l = Me.getDerivedFromVars(Me.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(22, c = Me.getDerivedFromVars(Me.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && Ne(e(21, u = Me.getDerivedFromVars(Me.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(20, f = Me.getDerivedFromVars(Me.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(19, _ = Me.getDerivedFromVars(Me.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(18, h = Me.getDerivedFromVars(Me.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(17, m = Me.getDerivedFromVars(Me.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(16, p = Me.getDerivedFromVars(Me.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && Se(e(15, w = Me.getDerivedFromVars(Me.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(14, k = Me.getDerivedFromVars(Me.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && U(e(13, N = Me.getDerivedFromVars(Me.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && A(e(12, R = Me.getDerivedFromVars(Me.json.accessibility))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || Me.logError(K(new Error('Empty selection "items" in "select"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    2304) {
      let Fe = !1;
      o ? (lt.hasAction() || (Y == null ? void 0 : Y.mode) === "exclude") && (Fe = !0, Me.logError(K(new Error('Cannot show "select" inside component with an action or inside accessibility mode=exclude')))) : (e(3, X = !0), Me.logError(K(new Error('Missing "value_variable" in "select"')))), X !== Fe && e(3, X = Fe);
    }
    if (t.$$.dirty[0] & /*filteredItems, $valueVariable, componentContext*/
    97 | t.$$.dirty[1] & /*prevWarnValue*/
    128) {
      const Fe = s.find((vt) => vt.value === nt);
      Fe ? e(4, Et = (typeof Fe.text == "string" ? Fe.text : Fe.value) || "") : (e(4, Et = ""), nt && bt !== nt && (e(38, bt = nt), Me.logError(K(new Error('Value from the variable was not found in the selection items for "select"')))));
    }
    if (t.$$.dirty[1] & /*$jsonFontSize, fontSize*/
    524289 && e(31, je = Un(we, je)), t.$$.dirty[0] & /*selfPadding*/
    268435456 | t.$$.dirty[1] & /*$jsonPaddings, fontSize, $direction*/
    6291457 && (e(28, Tt = mi(ut || void 0, Tt)), e(29, $t = Tt ? po(
      {
        top: (Number(Tt.top) || 0) / je * 10,
        right: (Number(ot === "ltr" ? Tt.end : Tt.start) || Number(Tt.right) || 0) / je * 10,
        bottom: (Number(Tt.bottom) || 0) / je * 10,
        left: (Number(ot === "ltr" ? Tt.start : Tt.end) || Number(Tt.left) || 0) / je * 10
      },
      ot
    ) : "")), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*$jsonHintColor*/
    1048576 && e(30, Kt = gr($, 1, Kt)), t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontWeightValue, fontWeight, $jsonFontFamily*/
    458754 && (e(32, He = bi(ee, pe, He)), Ke && typeof Ke == "string" ? e(33, pt = Ct.typefaceProvider(Ke, { fontWeight: He || 400 })) : e(33, pt = "")), t.$$.dirty[1] & /*$jsonFontVariationSettings, fontVariationSettings*/
    32776) {
      const Fe = Li(Q);
      Fe !== Ve && e(34, Ve = Fe);
    }
    if (t.$$.dirty[1] & /*$jsonLineHeight, fontSize*/
    16385) {
      const Fe = ve;
      Pn(Fe) && e(35, $e = Fe / je);
    }
    t.$$.dirty[1] & /*$jsonLetterSpacing, fontSize*/
    8193 && cl(Z) && e(36, Be = _e(Z / je * 10)), t.$$.dirty[1] & /*$jsonTextColor, textColor*/
    4160 && e(37, Vt = gr(D, 1, Vt)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    2048 && (Y != null && Y.description ? e(7, Oe = ti(Y)) : Me.logError(K(new Error('Missing accessibility "description" for select'), { level: "warn" }))), t.$$.dirty[0] & /*selectText*/
    16 && e(11, L = { hint: !Et }), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*fontWeight, fontFamily, fontVariationSettings, textColor*/
    78 && e(10, re = {
      "--divkit-input-hint-color": Kt,
      "font-weight": He,
      "font-family": pt,
      "font-variation-settings": Ve,
      color: Vt
    }), t.$$.dirty[0] & /*padding*/
    536870912 | t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(9, ue = {
      padding: $t,
      "font-size": _e(je),
      "line-height": $e,
      "letter-spacing": Be
    }), t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(8, T = {
      "font-size": _e(je),
      "line-height": $e,
      "letter-spacing": Be
    }), t.$$.dirty[0] & /*componentContext, select, prevId*/
    134217733 && Me.json && tt && (Dt && (Ct.unregisterFocusable(Dt), e(27, Dt = void 0)), Me.id && !Me.fakeElement && (e(27, Dt = Me.id), Ct.registerFocusable(Dt, {
      focus() {
        tt && tt.focus();
      }
    })));
  }, [
    Me,
    I,
    tt,
    X,
    Et,
    s,
    nt,
    Oe,
    T,
    ue,
    re,
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
    q,
    St,
    Dt,
    Tt,
    $t,
    Kt,
    je,
    He,
    pt,
    Ve,
    $e,
    Be,
    Vt,
    bt,
    o,
    i,
    n,
    Y,
    D,
    Z,
    ve,
    Q,
    Ke,
    pe,
    ee,
    we,
    $,
    ot,
    ut,
    It,
    _r
  ];
}
class nb extends Or {
  constructor(r) {
    super(), Lr(this, r, rb, tb, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const ob = "appkit-video__video", ib = "appkit-video__container", sb = "appkit-video_absolute", vi = {
  video__video: ob,
  video__container: ib,
  "video__aspect-wrapper": "appkit-video__aspect-wrapper",
  video_absolute: sb
};
function lb(t, r) {
  return Array.isArray(t) && t.length ? t.filter((e) => (e == null ? void 0 : e.type) === "video_source" && typeof e.url == "string" && typeof e.mime_type == "string").map((e) => {
    const n = {
      src: e.url
    };
    return e.mime_type && (n.type = e.mime_type), n;
  }) : r;
}
function ab(t) {
  return t === "fill" ? "cover" : t === "no_scale" ? "none" : "contain";
}
function Mu(t, r, e) {
  const n = t.slice();
  return n[60] = r[e], n;
}
function Pu(t, r, e) {
  const n = t.slice();
  return n[60] = r[e], n;
}
function cb(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function ub(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: mt(
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
      $$slots: { default: [hb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Rt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = mt(
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function fb(t) {
  let r, e, n, o, i, s = ir(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = zu(Mu(t, s, l));
  return {
    c() {
      r = Pe("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      g(r, "class", vi.video__video), g(r, "style", e = ur(
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
      J(l, r, c);
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
        s = ir(
          /*sources*/
          l[4]
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const f = Mu(l, s, u);
          a[u] ? a[u].p(f, c) : (a[u] = zu(f), a[u].c(), a[u].m(r, null));
        }
        for (; u < a.length; u += 1)
          a[u].d(1);
        a.length = s.length;
      }
      c[0] & /*style*/
      16384 && e !== (e = ur(
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
      l && G(r), cn(a, l), t[52](null), o = !1, Gr(i);
    }
  };
}
function db(t) {
  let r;
  return {
    c() {
      r = Pe("div"), g(r, "class", vi.video__container);
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
function _b(t) {
  let r, e = `${/*aspectPaddingBottom*/
  t[11]}%`;
  function n(s, a) {
    return (
      /*shouldUseVideoProvider*/
      s[13] ? gb : pb
    );
  }
  let o = n(t), i = o(t);
  return {
    c() {
      r = Pe("div"), i.c(), g(r, "class", vi["video__aspect-wrapper"]), F(r, "padding-bottom", e);
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
function Nu(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Pe("source"), Kn(r.src, e = /*source*/
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
      16 && !Kn(r.src, e = /*source*/
      s[60].src) && g(r, "src", e), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && g(r, "type", n);
    },
    d(s) {
      s && G(r), o = !1, i();
    }
  };
}
function zu(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = Nu(t);
  return {
    c() {
      n.c(), e = xt();
    },
    m(o, i) {
      n.m(o, i), J(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Er(r, r = /*source*/
      o[60]) ? (n.d(1), n = Nu(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && G(e), n.d(o);
    }
  };
}
function pb(t) {
  let r, e, n, o, i, s = ir(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = Ou(Pu(t, s, l));
  return {
    c() {
      r = Pe("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      g(r, "class", vi.video__video), g(r, "style", e = ur(
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
      J(l, r, c);
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
        s = ir(
          /*sources*/
          l[4]
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const f = Pu(l, s, u);
          a[u] ? a[u].p(f, c) : (a[u] = Ou(f), a[u].c(), a[u].m(r, null));
        }
        for (; u < a.length; u += 1)
          a[u].d(1);
        a.length = s.length;
      }
      c[0] & /*style*/
      16384 && e !== (e = ur(
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
      l && G(r), cn(a, l), t[50](null), o = !1, Gr(i);
    }
  };
}
function gb(t) {
  let r;
  return {
    c() {
      r = Pe("div"), g(r, "class", vi.video__container);
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
function Lu(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Pe("source"), Kn(r.src, e = /*source*/
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
      16 && !Kn(r.src, e = /*source*/
      s[60].src) && g(r, "src", e), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && g(r, "type", n);
    },
    d(s) {
      s && G(r), o = !1, i();
    }
  };
}
function Ou(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = Lu(t);
  return {
    c() {
      n.c(), e = xt();
    },
    m(o, i) {
      n.m(o, i), J(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Er(r, r = /*source*/
      o[60]) ? (n.d(1), n = Lu(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && G(e), n.d(o);
    }
  };
}
function hb(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[11] !== "0" ? _b : (
        /*shouldUseVideoProvider*/
        i[13] ? db : fb
      )
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = xt();
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
function mb(t) {
  let r, e, n, o;
  const i = [ub, cb], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[2] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (fr(), te(s[u], 1, 1, () => {
        s[u] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function bb(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N = j, R = () => (N(), N = E(a, (Oe) => e(39, k = Oe)), a), L, re = j, ue = () => (re(), re = E(m, (Oe) => e(40, L = Oe)), m), T, Y = j, le = () => (Y(), Y = E(h, (Oe) => e(41, T = Oe)), h), A, D = j, M = () => (D(), D = E(_, (Oe) => e(42, A = Oe)), _), U, Z = j, me = () => (Z(), Z = E(f, (Oe) => e(43, U = Oe)), f), Ae, ve = j, he = () => (ve(), ve = E(u, (Oe) => e(44, Ae = Oe)), u), Se, Q = j, xe = () => (Q(), Q = E(c, (Oe) => e(45, Se = Oe)), c), qe, Ke = j, be = () => (Ke(), Ke = E(l, (Oe) => e(46, qe = Oe)), l), Te, pe = j, ge = () => (pe(), pe = E(s, (Oe) => e(47, Te = Oe)), s), de, ee = j, ae = () => (ee(), ee = E(i, (Oe) => e(48, de = Oe)), i);
  t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => ee());
  let { componentContext: ne } = r, { layoutParams: we = void 0 } = r;
  const Re = Dr(Kr), Ye = Re.videoPlayerProvider;
  let $, Le = !1, Ne = !1, ot, ut, rt = [], yt = !1, nt = !1, Pt = !1, ft = !1, q, fe = "fit", st = "0", Me = !1, I, Ct = "", lt, St = !!Ye;
  function Dt(Oe) {
    var or, tr;
    const bt = ne.getJsonWithVars({
      sources: Oe.video_sources,
      repeatable: Oe.repeatable,
      autostart: Oe.autostart,
      preloadRequired: Oe.preload_required,
      muted: Oe.muted,
      preview: Oe.preview,
      aspect: Oe.aspect,
      scale: Oe.scale,
      payload: Oe.player_settings_payload
    }), Gt = sn(bt.repeatable, !1), It = sn(bt.autostart, !1), _r = sn(bt.preloadRequired, !1), Fe = sn(bt.muted, !1), vt = (or = bt.aspect) != null && or.ratio && Pn(bt.aspect.ratio) ? bt.aspect.ratio : void 0;
    if ((tr = bt.sources) != null && tr.length)
      return {
        sources: bt.sources,
        repeatable: Gt,
        autostart: It,
        preloadRequired: _r,
        muted: Fe,
        preview: bt.preview,
        aspect: vt,
        scale: bt.scale,
        payload: bt.payload
      };
  }
  function tt(Oe) {
    var bt;
    if (Ne) {
      Ne = !1;
      return;
    }
    lt ? (bt = lt.seek) == null || bt.call(lt, Number(Oe)) : ot && e(3, ot.currentTime = Number(Oe) / 1e3, ot);
  }
  function X() {
    lt ? lt.pause() : ot == null || ot.pause();
  }
  function Et() {
    if (lt) {
      lt.play();
      return;
    }
    const Oe = ot == null ? void 0 : ot.play();
    Oe && Oe.catch((bt) => {
      ne.logError(K(new Error("Video playing error"), {
        level: "error",
        additional: { originalText: String(bt) }
      }));
    });
  }
  function Tt() {
    ot && (Ne = !0, o.setValue(Math.floor(ot.currentTime * 1e3)));
  }
  function $t() {
    ne.execAnyActions(ne.json.end_actions);
  }
  function Kt() {
    ne.execAnyActions(ne.json.resume_actions);
  }
  function je() {
    ne.execAnyActions(ne.json.pause_actions);
  }
  function He() {
    ne.execAnyActions(ne.json.buffering_actions);
  }
  function pt() {
    ne.execAnyActions(ne.json.fatal_actions);
  }
  Xn(() => {
    if (Ye && ut) {
      const Oe = Dt(ne.json);
      if (Oe) {
        const bt = Ye.instance(ut, Oe);
        bt ? e(36, lt = bt) : e(13, St = !1);
      }
    }
  }), ln(() => {
    $ && (Re.unregisterInstance($), e(32, $ = void 0)), I && (I(), e(35, I = void 0)), lt && (lt.destroy(), e(36, lt = void 0));
  });
  function Ve(Oe) {
    Fr[Oe ? "unshift" : "push"](() => {
      ut = Oe, e(10, ut);
    });
  }
  function $e(Oe) {
    Fr[Oe ? "unshift" : "push"](() => {
      ot = Oe, e(3, ot);
    });
  }
  function Be(Oe) {
    Fr[Oe ? "unshift" : "push"](() => {
      ut = Oe, e(10, ut);
    });
  }
  function Vt(Oe) {
    Fr[Oe ? "unshift" : "push"](() => {
      ot = Oe, e(3, ot);
    });
  }
  return t.$$set = (Oe) => {
    "componentContext" in Oe && e(0, ne = Oe.componentContext), "layoutParams" in Oe && e(1, we = Oe.layoutParams);
  }, t.$$.update = () => {
    var Oe;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && ne.json && (e(5, yt = !1), e(6, nt = !1), e(7, Pt = !1), e(8, ft = !1), e(9, q = void 0), e(33, fe = "fit"), e(34, Me = !1), e(13, St = !!Ye)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*customVideoInstance, $jsonSource, $jsonRepeatable, $jsonAutostart, $jsonMuted, $jsonPreload, $jsonPreview, $jsonScale, $jsonAspect*/
    260384 && ne.json && lt && (de || Te || k || qe || Se || Ae || U || A)) {
      const bt = Dt(ne.json);
      bt && ((Oe = lt.update) == null || Oe.call(lt, bt));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(38, n = ne.json.elapsed_time_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*elapsedVariableName*/
    128 && e(37, o = n && (ne.getVariable(n, "integer") || Re.awaitGlobalVariable(n, "integer", 0)) || io("temp", "integer", 0)), t.$$.dirty[1] & /*elapsedVariable, elapsedVariableUnsubscriber*/
    80 && o && (I && I(), e(35, I = o.subscribe(tt))), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(25, i = ne.getDerivedFromVars(ne.json.video_sources))), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(24, s = ne.getDerivedFromVars(ne.json.repeatable))), t.$$.dirty[0] & /*componentContext*/
    1 && R(e(23, a = ne.getDerivedFromVars(ne.json.autostart))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(22, l = ne.getDerivedFromVars(ne.json.muted))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(21, c = ne.getDerivedFromVars(ne.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(20, u = ne.getDerivedFromVars(ne.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(19, f = ne.getDerivedFromVars(ne.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(18, _ = ne.getDerivedFromVars(ne.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(17, h = ne.getDerivedFromVars(ne.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(16, m = ne.getDerivedFromVars(ne.json.height))), t.$$.dirty[0] & /*sources, componentContext*/
    17 | t.$$.dirty[1] & /*$jsonSource*/
    131072 && (e(4, rt = lb(de, rt)), rt.length ? e(2, Le = !1) : (e(2, Le = !0), ne.logError(K(new Error('Missing "video_sources" in "video"'))))), t.$$.dirty[0] & /*loop*/
    32 | t.$$.dirty[1] & /*$jsonRepeatable*/
    65536 && e(5, yt = sn(Te, yt)), t.$$.dirty[0] & /*autoplay*/
    64 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && e(6, nt = sn(k, nt)), t.$$.dirty[0] & /*muted*/
    128 | t.$$.dirty[1] & /*$jsonMuted*/
    32768 && e(7, Pt = sn(qe, Pt)), t.$$.dirty[0] & /*preload*/
    256 | t.$$.dirty[1] & /*$jsonPreload*/
    16384 && e(8, ft = sn(Se, ft)), t.$$.dirty[0] & /*poster*/
    512 | t.$$.dirty[1] & /*$jsonPreview*/
    8192 && e(9, q = typeof Ae == "string" ? jd(Ae) : q), t.$$.dirty[1] & /*$jsonScale, scale*/
    4100 && e(33, fe = ab(U) || fe), t.$$.dirty[1] & /*$jsonAspect, $jsonWidth, $jsonHeight*/
    3584) {
      const bt = A == null ? void 0 : A.ratio;
      bt && Pn(bt) ? (e(11, st = (100 / Number(bt)).toFixed(2)), e(34, Me = !0)) : (e(11, st = "0"), e(34, Me = (!T || T.type === "match_parent") && (L == null ? void 0 : L.type) === "match_parent"));
    }
    t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*prevId*/
    2 && ne.json && ($ && (Re.unregisterInstance($), e(32, $ = void 0)), ne.id && !Le && !ne.fakeElement && (e(32, $ = ne.id), Re.registerInstance($, { pause: X, start: Et }))), t.$$.dirty[0] & /*componentContext, videoElem*/
    9 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && ne.json && k && ot && Et(), t.$$.dirty[1] & /*isAbsolute*/
    8 && e(15, p = { absolute: Me }), t.$$.dirty[1] & /*scale*/
    4 && e(14, w = { "object-fit": fe });
  }, [
    ne,
    we,
    Le,
    ot,
    rt,
    yt,
    nt,
    Pt,
    ft,
    q,
    ut,
    st,
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
    Tt,
    $t,
    Kt,
    je,
    He,
    pt,
    $,
    fe,
    Me,
    I,
    lt,
    o,
    n,
    k,
    L,
    T,
    A,
    U,
    Ae,
    Se,
    qe,
    Te,
    de,
    Ve,
    $e,
    Be,
    Vt
  ];
}
class yb extends Or {
  constructor(r) {
    super(), Lr(this, r, bb, mb, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const wb = "appkit-switch__tumbler", kb = "appkit-switch__tumbler_checked", vb = "appkit-switch_disabled", jb = "appkit-switch__thumb", Cb = "appkit-switch_direction_rtl", Ab = "appkit-switch__input", fi = {
  switch: "appkit-switch",
  switch__tumbler: wb,
  switch__tumbler_checked: kb,
  switch_disabled: vb,
  switch__thumb: jb,
  switch_direction_rtl: Cb,
  switch__input: Ab
};
function Ni(t) {
  return t === !0 || t === 1;
}
function Eb(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function Sb(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: mt(
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
          Vb,
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
      Rt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = mt(
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function Vb(t) {
  let r, e, n, o, i, s, a, l, c;
  return {
    c() {
      r = Pe("div"), e = Pe("div"), o = mr(), i = Pe("input"), g(e, "class", fi.switch__thumb), g(r, "class", n = mt("switch__tumbler", fi, { checked: (
        /*value*/
        t[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = mt("switch__input", fi, {
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
      J(u, r, f), wt(r, e), J(u, o, f), J(u, i, f), t[25](i), l || (c = [
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
    p(u, f) {
      t = u, f[0] & /*value*/
      8 && n !== (n = mt("switch__tumbler", fi, { checked: (
        /*value*/
        t[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      1 && s !== (s = mt("switch__input", fi, {
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
      u && (G(r), G(o), G(i)), t[25](null), l = !1, Gr(c);
    }
  };
}
function Fb(t) {
  let r, e, n, o;
  const i = [Sb, Eb], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[4] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (fr(), te(s[u], 1, 1, () => {
        s[u] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Ib(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h = j, m = () => (h(), h = E(s, (be) => e(21, _ = be)), s), p, w = j, k = () => (w(), w = E(l, (be) => e(22, p = be)), l), N, R = j, L = () => (R(), R = E(a, (be) => e(23, N = be)), a), re, ue = j, T = () => (ue(), ue = E(i, (be) => e(24, re = be)), i);
  t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => R()), t.$$.on_destroy.push(() => ue());
  let { componentContext: Y } = r, { layoutParams: le = void 0 } = r;
  const A = Dr(Kr), D = Dr(To), M = A.direction;
  bn(t, M, (be) => e(20, f = be));
  let U, Z, me = !1, Ae = !1, ve = "", he = !0, Se = "#129386", Q = "#1293864c";
  function xe() {
    e(5, he = !0), e(16, Se = "#129386"), e(17, Q = "#1293864c");
  }
  function qe(be) {
    e(3, me = be.target.checked), i.setValue(me);
  }
  ln(() => {
    U && (A.unregisterFocusable(U), e(15, U = void 0));
  });
  function Ke(be) {
    Fr[be ? "unshift" : "push"](() => {
      Z = be, e(2, Z);
    });
  }
  return t.$$set = (be) => {
    "componentContext" in be && e(0, Y = be.componentContext), "layoutParams" in be && e(1, le = be.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(19, n = Y.origJson), t.$$.dirty[0] & /*origJson*/
    524288 && n && xe(), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, o = Y.json.is_on_variable), t.$$.dirty[0] & /*variable, componentContext*/
    262145 && T(e(7, i = o && (Y.getVariable(o, "boolean") || A.awaitGlobalVariable(o, "boolean", !1)) || io("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(12, s = Y.getDerivedFromVars(Y.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && L(e(11, a = Y.getDerivedFromVars(Y.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && k(e(10, l = Y.getDerivedFromVars(Y.json.on_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    2359313) {
      let be = !1;
      o ? (D.hasAction() || (_ == null ? void 0 : _.mode) === "exclude") && (be = !0, Y.logError(K(new Error('Cannot show "switch" inside component with an action or inside accessibility mode=exclude')))) : (be = !0, Y.logError(K(new Error('Missing "is_on_variable" in "switch"')))), Ae !== be && e(4, Ae = be);
    }
    if (t.$$.dirty[0] & /*value, $valueVariable*/
    16777224 && Ni(me) !== Ni(re) && e(3, me = Ni(re)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    8388640 && e(5, he = sn(N, he)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    4259840 && (e(16, Se = gr(p, 1, Se)), typeof p == "string")) {
      const be = _o(p);
      be && (be.a *= 0.3, e(17, Q = fa(be)));
    }
    t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    2097153 && (_ != null && _.description ? e(6, ve = ti(_)) : Y.logError(K(new Error('Missing accessibility "description" for switch'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled, $direction*/
    1048608 && e(9, c = {
      disabled: !he,
      direction: f
    }), t.$$.dirty[0] & /*onColor, onSubColor*/
    196608 && e(8, u = {
      "--divkit-switch-on-color": Se,
      "--divkit-switch-on-sub-color": Q
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    32773 && Z && Y.json && (U && (A.unregisterFocusable(U), e(15, U = void 0)), Y.id && !Y.fakeElement && (e(15, U = Y.id), A.registerFocusable(U, {
      focus() {
        Z && Z.focus();
      }
    })));
  }, [
    Y,
    le,
    Z,
    me,
    Ae,
    he,
    ve,
    i,
    u,
    c,
    l,
    a,
    s,
    M,
    qe,
    U,
    Se,
    Q,
    o,
    n,
    f,
    _,
    p,
    N,
    re,
    Ke
  ];
}
class Db extends Or {
  constructor(r) {
    super(), Lr(this, r, Ib, Fb, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Tb = "appkit-checkbox", Mb = "appkit-checkbox__box", Pb = "appkit-checkbox__box_checked", Nb = "appkit-checkbox__checkmark", zb = "appkit-checkbox_disabled", Lb = "appkit-checkbox__input", di = {
  checkbox: Tb,
  checkbox__box: Mb,
  checkbox__box_checked: Pb,
  checkbox__checkmark: Nb,
  checkbox_disabled: zb,
  checkbox__input: Lb
};
function Ob(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function Bb(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: mt(
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
          Rb,
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
      Rt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = mt(
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function Rb(t) {
  let r, e, n, o, i, s, a, l, c;
  return {
    c() {
      r = Pe("div"), e = Pe("div"), o = mr(), i = Pe("input"), g(e, "class", di.checkbox__checkmark), g(r, "class", n = mt("checkbox__box", di, { checked: (
        /*value*/
        t[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = mt("checkbox__input", di, {
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
      J(u, r, f), wt(r, e), J(u, o, f), J(u, i, f), t[28](i), l || (c = [
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
    p(u, f) {
      t = u, f[0] & /*value*/
      8 && n !== (n = mt("checkbox__box", di, { checked: (
        /*value*/
        t[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      8 && s !== (s = mt("checkbox__input", di, {
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
      u && (G(r), G(o), G(i)), t[28](null), l = !1, Gr(c);
    }
  };
}
function Hb(t) {
  let r, e, n, o;
  const i = [Bb, Ob], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[4] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (fr(), te(s[u], 1, 1, () => {
        s[u] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Wb(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m = j, p = () => (m(), m = E(s, (ne) => e(22, h = ne)), s), w, k = j, N = () => (k(), k = E(u, (ne) => e(23, w = ne)), u), R, L = j, re = () => (L(), L = E(c, (ne) => e(24, R = ne)), c), ue, T = j, Y = () => (T(), T = E(l, (ne) => e(25, ue = ne)), l), le, A = j, D = () => (A(), A = E(a, (ne) => e(26, le = ne)), a), M, U = j, Z = () => (U(), U = E(i, (ne) => e(27, M = ne)), i);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => k()), t.$$.on_destroy.push(() => L()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => A()), t.$$.on_destroy.push(() => U());
  let { componentContext: me } = r, { layoutParams: Ae = void 0 } = r;
  const ve = Dr(Kr), he = Dr(To);
  let Se, Q, xe = !1, qe = !1, Ke = "", be = !0, Te = "#129386", pe = "rgba(0, 0, 0, .3)", ge = "#fff";
  function de() {
    e(5, be = !0), e(17, Te = "#129386"), e(18, pe = "rgba(0, 0, 0, .3)"), e(19, ge = "#fff");
  }
  function ee(ne) {
    e(3, xe = ne.target.checked), i.setValue(xe);
  }
  ln(() => {
    Se && (ve.unregisterFocusable(Se), e(16, Se = void 0));
  });
  function ae(ne) {
    Fr[ne ? "unshift" : "push"](() => {
      Q = ne, e(2, Q);
    });
  }
  return t.$$set = (ne) => {
    "componentContext" in ne && e(0, me = ne.componentContext), "layoutParams" in ne && e(1, Ae = ne.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(21, n = me.origJson), t.$$.dirty[0] & /*origJson*/
    2097152 && n && de(), t.$$.dirty[0] & /*componentContext*/
    1 && e(20, o = me.json.is_checked_variable), t.$$.dirty[0] & /*variable, componentContext*/
    1048577 && Z(e(7, i = o && (me.getVariable(o, "boolean") || ve.awaitGlobalVariable(o, "boolean", !1)) || io("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && p(e(14, s = me.getDerivedFromVars(me.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && D(e(13, a = me.getDerivedFromVars(me.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Y(e(12, l = me.getDerivedFromVars(me.json.on_color))), t.$$.dirty[0] & /*componentContext*/
    1 && re(e(11, c = me.getDerivedFromVars(me.json.off_color))), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(10, u = me.getDerivedFromVars(me.json.check_mark_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    5242897) {
      let ne = !1;
      o ? (he.hasAction() || (h == null ? void 0 : h.mode) === "exclude") && (ne = !0, me.logError(K(new Error('Cannot show "checkbox" inside component with an action or inside accessibility mode=exclude')))) : (ne = !0, me.logError(K(new Error('Missing "is_checked_variable" in "checkbox"')))), qe !== ne && e(4, qe = ne);
    }
    t.$$.dirty[0] & /*value, $valueVariable*/
    134217736 && Ni(xe) !== Ni(M) && e(3, xe = Ni(M)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    67108896 && e(5, be = sn(le, be)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    33685504 && e(17, Te = gr(ue, 1, Te)), t.$$.dirty[0] & /*$jsonOffColor, offColor*/
    17039360 && e(18, pe = gr(R, 1, pe)), t.$$.dirty[0] & /*$jsonCheckMarkColor, checkMarkColor*/
    8912896 && e(19, ge = gr(w, 1, ge)), t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    4194305 && (h != null && h.description ? e(6, Ke = ti(h)) : me.logError(K(new Error('Missing accessibility "description" for checkbox'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    32 && e(9, f = { disabled: !be }), t.$$.dirty[0] & /*onColor, offColor, checkMarkColor*/
    917504 && e(8, _ = {
      "--divkit-checkbox-on-color": Te,
      "--divkit-checkbox-off-color": pe,
      "--divkit-checkbox-check-mark-color": ge
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    65541 && Q && me.json && (Se && (ve.unregisterFocusable(Se), e(16, Se = void 0)), me.id && !me.fakeElement && (e(16, Se = me.id), ve.registerFocusable(Se, {
      focus() {
        Q && Q.focus();
      }
    })));
  }, [
    me,
    Ae,
    Q,
    xe,
    qe,
    be,
    Ke,
    i,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    ee,
    Se,
    Te,
    pe,
    ge,
    o,
    n,
    h,
    w,
    R,
    ue,
    le,
    M,
    ae
  ];
}
class Ub extends Or {
  constructor(r) {
    super(), Lr(this, r, Wb, Hb, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Gb = "appkit-radio", Jb = "appkit-radio__group", qb = "appkit-radio__group_vertical", Kb = "appkit-radio__group_horizontal", Yb = "appkit-radio__item", Xb = "appkit-radio_disabled", Zb = "appkit-radio__circle", Qb = "appkit-radio__circle_selected", xb = "appkit-radio__dot", $b = "appkit-radio__label", ey = "appkit-radio__input", ko = {
  radio: Gb,
  radio__group: Jb,
  radio__group_vertical: qb,
  radio__group_horizontal: Kb,
  radio__item: Yb,
  radio_disabled: Xb,
  radio__circle: Zb,
  radio__circle_selected: Qb,
  radio__dot: xb,
  radio__label: $b,
  radio__input: ey
};
function Bu(t, r, e) {
  const n = t.slice();
  return n[55] = r[e], n;
}
function ty(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function ry(t) {
  let r, e;
  return r = new hn({
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
          iy,
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
      Rt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function ny(t) {
  let r, e = (
    /*item*/
    t[55].value + ""
  ), n;
  return {
    c() {
      r = Pe("span"), n = Gn(e), g(r, "class", ko.radio__label);
    },
    m(o, i) {
      J(o, r, i), wt(r, n);
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
function oy(t) {
  let r, e = (
    /*item*/
    t[55].text + ""
  ), n;
  return {
    c() {
      r = Pe("span"), n = Gn(e), g(r, "class", ko.radio__label);
    },
    m(o, i) {
      J(o, r, i), wt(r, n);
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
function Ru(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, h;
  function m(N, R) {
    return (
      /*item*/
      N[55].text ? oy : ny
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
      r = Pe("label"), e = Pe("div"), n = Pe("div"), i = mr(), w.c(), s = mr(), a = Pe("input"), f = mr(), g(n, "class", ko.radio__dot), g(e, "class", o = mt("radio__circle", ko, {
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
    m(N, R) {
      J(N, r, R), wt(r, e), wt(e, n), wt(r, i), w.m(r, null), wt(r, s), wt(r, a), wt(r, f), _ || (h = [
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
    p(N, R) {
      t = N, R[0] & /*$valueVariable, filteredItems*/
      8388640 && o !== (o = mt("radio__circle", ko, {
        selected: (
          /*$valueVariable*/
          t[23] === /*item*/
          t[55].value
        )
      })) && g(e, "class", o), p === (p = m(t)) && w ? w.p(t, R) : (w.d(1), w = p(t), w && (w.c(), w.m(r, s))), R[0] & /*groupName*/
      4096 && g(
        a,
        "name",
        /*groupName*/
        t[12]
      ), R[0] & /*filteredItems*/
      32 && l !== (l = /*item*/
      t[55].value) && (a.value = l), R[0] & /*$valueVariable, filteredItems*/
      8388640 && c !== (c = /*$valueVariable*/
      t[23] === /*item*/
      t[55].value) && (a.checked = c), R[0] & /*isEnabled*/
      16 && u !== (u = !/*isEnabled*/
      t[4]) && (a.disabled = u);
    },
    d(N) {
      N && G(r), w.d(), _ = !1, Gr(h);
    }
  };
}
function iy(t) {
  let r, e, n = ir(
    /*filteredItems*/
    t[5]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Ru(Bu(t, n, i));
  return {
    c() {
      r = Pe("div");
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
          const l = Bu(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Ru(l), o[a].c(), o[a].m(r, null));
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
      i && G(r), cn(o, i), t[48](null);
    }
  };
}
function sy(t) {
  let r, e, n, o;
  const i = [ry, ty], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (fr(), te(s[u], 1, 1, () => {
        s[u] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function ly(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, re, ue, T, Y = j, le = () => (Y(), Y = E(l, (He) => e(37, T = He)), l), A, D = j, M = () => (D(), D = E(k, (He) => e(38, A = He)), k), U, Z = j, me = () => (Z(), Z = E(w, (He) => e(39, U = He)), w), Ae, ve = j, he = () => (ve(), ve = E(p, (He) => e(40, Ae = He)), p), Se, Q = j, xe = () => (Q(), Q = E(m, (He) => e(41, Se = He)), m), qe, Ke = j, be = () => (Ke(), Ke = E(h, (He) => e(42, qe = He)), h), Te, pe = j, ge = () => (pe(), pe = E(_, (He) => e(43, Te = He)), _), de, ee = j, ae = () => (ee(), ee = E(f, (He) => e(44, de = He)), f), ne, we = j, Re = () => (we(), we = E(u, (He) => e(45, ne = He)), u), Ye, $ = j, Le = () => ($(), $ = E(c, (He) => e(46, Ye = He)), c), Ne, ot = j, ut = () => (ot(), ot = E(a, (He) => e(23, Ne = He)), a);
  t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => ot());
  let { componentContext: rt } = r, { layoutParams: yt = void 0 } = r;
  const nt = Dr(Kr), Pt = Dr(To);
  let ft, q, fe = !1, st = "", Me = !0, I = "#129386", Ct = "rgba(0, 0, 0, 0.3)", lt = "", St, Dt, tt = "", X = "vertical", Et = 8;
  function Tt() {
    e(4, Me = !0), e(26, I = "#129386"), e(27, Ct = "rgba(0, 0, 0, 0.3)"), e(28, lt = ""), e(29, St = void 0), e(30, Dt = void 0), e(31, tt = ""), e(32, X = "vertical"), e(33, Et = 8);
  }
  function $t(He) {
    a.setValue(He);
  }
  ln(() => {
    ft && (nt.unregisterFocusable(ft), e(25, ft = void 0));
  });
  const Kt = (He) => $t(He.value);
  function je(He) {
    Fr[He ? "unshift" : "push"](() => {
      q = He, e(2, q);
    });
  }
  return t.$$set = (He) => {
    "componentContext" in He && e(0, rt = He.componentContext), "layoutParams" in He && e(1, yt = He.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(36, n = rt.origJson), t.$$.dirty[1] & /*origJson*/
    32 && n && Tt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(34, o = rt.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(35, i = rt.json.options), t.$$.dirty[1] & /*items*/
    16 && e(5, s = Array.isArray(i) && i.filter((He) => typeof He.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8 && ut(e(7, a = o && (rt.getVariable(o, "string") || nt.awaitGlobalVariable(o, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(22, l = rt.getDerivedFromVars(rt.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(21, c = rt.getDerivedFromVars(rt.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Re(e(20, u = rt.getDerivedFromVars(rt.json.selected_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(19, f = rt.getDerivedFromVars(rt.json.default_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(18, _ = rt.getDerivedFromVars(rt.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(17, h = rt.getDerivedFromVars(rt.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(16, m = rt.getDerivedFromVars(rt.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(15, p = rt.getDerivedFromVars(rt.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(14, w = rt.getDerivedFromVars(rt.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(13, k = rt.getDerivedFromVars(rt.json.item_spacing))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || rt.logError(K(new Error('Empty "options" in "radio"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    72) {
      let He = !1;
      o ? (Pt.hasAction() || (T == null ? void 0 : T.mode) === "exclude") && (He = !0, rt.logError(K(new Error('Cannot show "radio" inside component with an action or inside accessibility mode=exclude')))) : (He = !0, rt.logError(K(new Error('Missing "value_variable" in "radio"')))), fe !== He && e(3, fe = He);
    }
    t.$$.dirty[0] & /*isEnabled*/
    16 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    32768 && e(4, Me = sn(Ye, Me)), t.$$.dirty[0] & /*selectedColor*/
    67108864 | t.$$.dirty[1] & /*$jsonSelectedColor*/
    16384 && e(26, I = gr(ne, 1, I)), t.$$.dirty[0] & /*defaultColor*/
    134217728 | t.$$.dirty[1] & /*$jsonDefaultColor*/
    8192 && e(27, Ct = gr(de, 1, Ct)), t.$$.dirty[0] & /*textColor*/
    268435456 | t.$$.dirty[1] & /*$jsonTextColor*/
    4096 && e(28, lt = gr(Te, 1, lt)), t.$$.dirty[0] & /*fontSize*/
    536870912 | t.$$.dirty[1] & /*$jsonFontSize*/
    2048 && e(29, St = typeof qe == "number" && qe > 0 ? qe : St), t.$$.dirty[0] & /*fontWeight*/
    1073741824 | t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontFamily*/
    1536 && (e(30, Dt = bi(Se, void 0, Dt)), Ae && typeof Ae == "string" ? e(31, tt = nt.typefaceProvider(Ae, { fontWeight: Dt || 400 })) : e(31, tt = "")), t.$$.dirty[1] & /*$jsonOrientation, orientation*/
    258 && e(32, X = U === "horizontal" || U === "vertical" ? U : X), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    132 && e(33, Et = typeof A == "number" && A >= 0 ? A : Et), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    64 && (T != null && T.description ? e(6, st = ti(T)) : rt.logError(K(new Error('Missing accessibility "description" for radio'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext*/
    1 && e(12, N = rt.id || `radio_${Math.random().toString(36).slice(2)}`), t.$$.dirty[0] & /*isEnabled*/
    16 && e(11, R = { disabled: !Me }), t.$$.dirty[1] & /*orientation*/
    2 && e(10, L = { [X]: !0 }), t.$$.dirty[0] & /*selectedColor, defaultColor, textColor, fontSize, fontWeight*/
    2080374784 | t.$$.dirty[1] & /*fontFamily*/
    1 && e(9, re = {
      "--divkit-radio-selected-color": I,
      "--divkit-radio-default-color": Ct,
      ...lt ? { "--divkit-radio-text-color": lt } : {},
      ...St ? { "font-size": _e(St) } : {},
      ...Dt ? { "font-weight": Dt } : {},
      ...tt ? { "font-family": tt } : {}
    }), t.$$.dirty[1] & /*itemSpacing*/
    4 && e(8, ue = `gap: ${_e(Et)}`), t.$$.dirty[0] & /*container, componentContext, prevId*/
    33554437 && q && rt.json && (ft && (nt.unregisterFocusable(ft), e(25, ft = void 0)), rt.id && !rt.fakeElement && (e(25, ft = rt.id), nt.registerFocusable(ft, {
      focus() {
        if (q) {
          const He = q.querySelector("input");
          He && He.focus();
        }
      }
    })));
  }, [
    rt,
    yt,
    q,
    fe,
    Me,
    s,
    st,
    a,
    ue,
    re,
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
    Ne,
    $t,
    ft,
    I,
    Ct,
    lt,
    St,
    Dt,
    tt,
    X,
    Et,
    o,
    i,
    n,
    T,
    A,
    U,
    Ae,
    Se,
    qe,
    Te,
    de,
    ne,
    Ye,
    Kt,
    je
  ];
}
class ay extends Or {
  constructor(r) {
    super(), Lr(this, r, ly, sy, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const cy = "appkit-progress", uy = "appkit-progress__linear", fy = "appkit-progress__circular", $o = {
  progress: cy,
  progress__linear: uy,
  "progress__linear-fill": "appkit-progress__linear-fill",
  "progress__linear-fill_indeterminate": "appkit-progress__linear-fill_indeterminate",
  "progress-linear-indeterminate": "appkit-progress-linear-indeterminate",
  progress__circular: fy,
  "progress__circular-track": "appkit-progress__circular-track",
  "progress__circular-fill": "appkit-progress__circular-fill",
  "progress__circular-fill_indeterminate": "appkit-progress__circular-fill_indeterminate",
  "progress-circular-indeterminate": "appkit-progress-circular-indeterminate"
};
function dy(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function _y(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: mt("progress", $o, {}),
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
      $$slots: { default: [hy] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function py(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = tn("svg"), e = tn("circle"), n = tn("circle"), g(e, "class", $o["progress__circular-track"]), g(e, "cx", Zo / 2), g(e, "cy", Zo / 2), g(e, "r", ql), g(
        e,
        "stroke-width",
        /*trackThickness*/
        t[5]
      ), g(n, "class", o = mt("progress__circular-fill", $o, {
        indeterminate: (
          /*isIndeterminate*/
          t[4]
        )
      })), g(n, "cx", Zo / 2), g(n, "cy", Zo / 2), g(n, "r", ql), g(
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
      )), g(n, "stroke-linecap", "round"), g(r, "class", $o.progress__circular), g(r, "width", Zo), g(r, "height", Zo), g(r, "viewBox", "0 0 " + Zo + " " + Zo), g(r, "role", "progressbar"), g(
        r,
        "aria-valuenow",
        /*ariaValue*/
        t[6]
      ), g(r, "aria-valuemin", 0), g(r, "aria-valuemax", 100);
    },
    m(s, a) {
      J(s, r, a), wt(r, e), wt(r, n);
    },
    p(s, a) {
      a & /*trackThickness*/
      32 && g(
        e,
        "stroke-width",
        /*trackThickness*/
        s[5]
      ), a & /*isIndeterminate*/
      16 && o !== (o = mt("progress__circular-fill", $o, {
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
function gy(t) {
  let r, e, n;
  return {
    c() {
      r = Pe("div"), e = Pe("div"), g(e, "class", n = mt("progress__linear-fill", $o, {
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
      ), g(r, "class", $o.progress__linear), F(r, "height", _e(
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
      J(o, r, i), wt(r, e);
    },
    p(o, i) {
      i & /*isIndeterminate*/
      16 && n !== (n = mt("progress__linear-fill", $o, {
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
      32 && F(r, "height", _e(
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
function hy(t) {
  let r;
  function e(i, s) {
    return (
      /*progressStyle*/
      i[3] === "linear" ? gy : py
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = xt();
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
function my(t) {
  let r, e, n, o;
  const i = [_y, dy], s = [];
  function a(l, c) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, [c]) {
      e && e.p(l, c);
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
const Zo = 48, ql = 20;
function by(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m = j, p = () => (m(), m = E(c, (Te) => e(19, h = Te)), c), w, k = j, N = () => (k(), k = E(l, (Te) => e(20, w = Te)), l), R, L = j, re = () => (L(), L = E(a, (Te) => e(21, R = Te)), a), ue, T = j, Y = () => (T(), T = E(s, (Te) => e(22, ue = Te)), s), le, A = j, D = () => (A(), A = E(i, (Te) => e(23, le = Te)), i), M, U = j, Z = () => (U(), U = E(o, (Te) => e(24, M = Te)), o);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => k()), t.$$.on_destroy.push(() => L()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => A()), t.$$.on_destroy.push(() => U());
  let { componentContext: me } = r, { layoutParams: Ae = void 0 } = r;
  Dr(Kr);
  let ve = 0, he = "linear", Se = !1, Q = "#129386", xe = "rgba(0, 0, 0, .1)", qe = 4;
  function Ke() {
    e(2, ve = 0), e(3, he = "linear"), e(4, Se = !1), e(16, Q = "#129386"), e(17, xe = "rgba(0, 0, 0, .1)"), e(5, qe = 4);
  }
  const be = 2 * Math.PI * ql;
  return t.$$set = (Te) => {
    "componentContext" in Te && e(0, me = Te.componentContext), "layoutParams" in Te && e(1, Ae = Te.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(18, n = me.origJson), t.$$.dirty & /*origJson*/
    262144 && n && Ke(), t.$$.dirty & /*componentContext*/
    1 && Z(e(14, o = me.getDerivedFromVars(me.json.value))), t.$$.dirty & /*componentContext*/
    1 && D(e(13, i = me.getDerivedFromVars(me.json.style))), t.$$.dirty & /*componentContext*/
    1 && Y(e(12, s = me.getDerivedFromVars(me.json.is_indeterminate))), t.$$.dirty & /*componentContext*/
    1 && re(e(11, a = me.getDerivedFromVars(me.json.active_color))), t.$$.dirty & /*componentContext*/
    1 && N(e(10, l = me.getDerivedFromVars(me.json.inactive_color))), t.$$.dirty & /*componentContext*/
    1 && p(e(9, c = me.getDerivedFromVars(me.json.track_thickness))), t.$$.dirty & /*$jsonValue, progressValue*/
    16777220 && e(2, ve = typeof M == "number" ? Math.max(0, Math.min(1, M)) : ve), t.$$.dirty & /*$jsonStyle, progressStyle*/
    8388616 && e(3, he = le === "linear" || le === "circular" ? le : he), t.$$.dirty & /*$jsonIsIndeterminate, isIndeterminate*/
    4194320 && e(4, Se = sn(ue, Se)), t.$$.dirty & /*$jsonActiveColor, activeColor*/
    2162688 && e(16, Q = gr(R, 1, Q)), t.$$.dirty & /*$jsonInactiveColor, inactiveColor*/
    1179648 && e(17, xe = gr(w, 1, xe)), t.$$.dirty & /*$jsonTrackThickness, trackThickness*/
    524320 && e(5, qe = typeof h == "number" && h >= 0 ? h : qe), t.$$.dirty & /*progressValue*/
    4 && e(8, u = be * (1 - ve)), t.$$.dirty & /*activeColor, inactiveColor*/
    196608 && e(7, f = {
      "--divkit-progress-active-color": Q,
      "--divkit-progress-inactive-color": xe
    }), t.$$.dirty & /*isIndeterminate, progressValue*/
    20 && e(6, _ = Se ? void 0 : Math.round(ve * 100));
  }, [
    me,
    Ae,
    ve,
    he,
    Se,
    qe,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    be,
    Q,
    xe,
    n,
    h,
    w,
    R,
    ue,
    le,
    M
  ];
}
class yy extends Or {
  constructor(r) {
    super(), Lr(this, r, by, my, Er, { componentContext: 0, layoutParams: 1 });
  }
}
const wy = "appkit-table", ky = "appkit-table_halign_start", vy = "appkit-table_halign_center", jy = "appkit-table_halign_end", Cy = "appkit-table_valign_start", Ay = "appkit-table_valign_center", Ey = "appkit-table_valign_end", Sy = "appkit-table__cell", Vy = "appkit-table__cell_halign_left", Fy = "appkit-table__cell_halign_start", Iy = "appkit-table__cell_halign_center", Dy = "appkit-table__cell_halign_right", Ty = "appkit-table__cell_halign_end", My = "appkit-table__cell_valign_top", Py = "appkit-table__cell_valign_center", Ny = "appkit-table__cell_valign_bottom", zy = "appkit-table__cell_valign_baseline", Ly = "appkit-table__separator", Oy = "appkit-table__separator_row", By = "appkit-table__separator_col", Go = {
  table: wy,
  table_halign_start: ky,
  table_halign_center: vy,
  table_halign_end: jy,
  table_valign_start: Cy,
  table_valign_center: Ay,
  table_valign_end: Ey,
  table__cell: Sy,
  table__cell_halign_left: Vy,
  table__cell_halign_start: Fy,
  table__cell_halign_center: Iy,
  table__cell_halign_right: Dy,
  table__cell_halign_end: Ty,
  table__cell_valign_top: My,
  table__cell_valign_center: Py,
  table__cell_valign_bottom: Ny,
  table__cell_valign_baseline: zy,
  table__separator: Ly,
  table__separator_row: Oy,
  table__separator_col: By
};
function Hu(t, r, e) {
  const n = t.slice();
  return n[35] = r[e], n;
}
function Wu(t, r, e) {
  const n = t.slice();
  return n[38] = r[e], n;
}
function Ry(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function Hy(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: mt(
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
      $$slots: { default: [Wy] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Rt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = mt(
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function Uu(t) {
  var a, l, c, u, f, _, h, m;
  let r, e, n, o = `${/*placement*/
  ((l = (a = t[38].layoutParams.gridArea) == null ? void 0 : a.x) != null ? l : 0) + 1} / span ${/*placement*/
  (u = (c = t[38].layoutParams.gridArea) == null ? void 0 : c.colSpan) != null ? u : 1}`, i = `${/*placement*/
  ((_ = (f = t[38].layoutParams.gridArea) == null ? void 0 : f.y) != null ? _ : 0) + 1} / span ${/*placement*/
  (m = (h = t[38].layoutParams.gridArea) == null ? void 0 : h.rowSpan) != null ? m : 1}`, s;
  return e = new Zn({
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
      r = Pe("div"), Rt(e.$$.fragment), g(r, "class", n = mt("table__cell", Go, {
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
      J(p, r, w), Nt(e, r, null), s = !0;
    },
    p(p, w) {
      var N, R, L, re, ue, T, Y, le;
      const k = {};
      w[0] & /*cellPlacements*/
      16 && (k.componentContext = /*placement*/
      p[38].componentContext), w[0] & /*cellPlacements*/
      16 && (k.layoutParams = /*placement*/
      p[38].layoutParams), e.$set(k), (!s || w[0] & /*cellPlacements*/
      16 && n !== (n = mt("table__cell", Go, {
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
      (re = (L = p[38].layoutParams.gridArea) == null ? void 0 : L.colSpan) != null ? re : 1}`) && F(r, "grid-column", o), w[0] & /*cellPlacements*/
      16 && i !== (i = `${/*placement*/
      ((T = (ue = p[38].layoutParams.gridArea) == null ? void 0 : ue.y) != null ? T : 0) + 1} / span ${/*placement*/
      (le = (Y = p[38].layoutParams.gridArea) == null ? void 0 : Y.rowSpan) != null ? le : 1}`) && F(r, "grid-row", i), w[0] & /*cellPlacements*/
      16 && F(
        r,
        "background",
        /*placement*/
        p[38].backgroundStyle || void 0
      );
    },
    i(p) {
      s || (H(e.$$.fragment, p), s = !0);
    },
    o(p) {
      te(e.$$.fragment, p), s = !1;
    },
    d(p) {
      p && G(r), zt(e);
    }
  };
}
function Gu(t) {
  let r, e, n, o;
  return {
    c() {
      r = Pe("div"), e = Pe("div"), o = mr(), g(e, "class", n = /*sep*/
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
      J(i, r, s), wt(r, e), wt(r, o);
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
function Wy(t) {
  let r, e, n, o = ir(
    /*cellPlacements*/
    t[4]
  ), i = [];
  for (let c = 0; c < o.length; c += 1)
    i[c] = Uu(Wu(t, o, c));
  const s = (c) => te(i[c], 1, 1, () => {
    i[c] = null;
  });
  let a = ir(
    /*separatorElements*/
    t[5]
  ), l = [];
  for (let c = 0; c < a.length; c += 1)
    l[c] = Gu(Hu(t, a, c));
  return {
    c() {
      for (let c = 0; c < i.length; c += 1)
        i[c].c();
      r = mr();
      for (let c = 0; c < l.length; c += 1)
        l[c].c();
      e = xt();
    },
    m(c, u) {
      for (let f = 0; f < i.length; f += 1)
        i[f] && i[f].m(c, u);
      J(c, r, u);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(c, u);
      J(c, e, u), n = !0;
    },
    p(c, u) {
      if (u[0] & /*cellPlacements*/
      16) {
        o = ir(
          /*cellPlacements*/
          c[4]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const _ = Wu(c, o, f);
          i[f] ? (i[f].p(_, u), H(i[f], 1)) : (i[f] = Uu(_), i[f].c(), H(i[f], 1), i[f].m(r.parentNode, r));
        }
        for (fr(), f = o.length; f < i.length; f += 1)
          s(f);
        dr();
      }
      if (u[0] & /*separatorElements*/
      32) {
        a = ir(
          /*separatorElements*/
          c[5]
        );
        let f;
        for (f = 0; f < a.length; f += 1) {
          const _ = Hu(c, a, f);
          l[f] ? l[f].p(_, u) : (l[f] = Gu(_), l[f].c(), l[f].m(e.parentNode, e));
        }
        for (; f < l.length; f += 1)
          l[f].d(1);
        l.length = a.length;
      }
    },
    i(c) {
      if (!n) {
        for (let u = 0; u < o.length; u += 1)
          H(i[u]);
        n = !0;
      }
    },
    o(c) {
      i = i.filter(Boolean);
      for (let u = 0; u < i.length; u += 1)
        te(i[u]);
      n = !1;
    },
    d(c) {
      c && (G(r), G(e)), cn(i, c), cn(l, c);
    }
  };
}
function Uy(t) {
  let r, e, n, o;
  const i = [Hy, Ry], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (fr(), te(s[u], 1, 1, () => {
        s[u] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Gy(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p = j, w = () => (p(), p = E(s, (ae) => e(22, m = ae)), s), k, N = j, R = () => (N(), N = E(i, (ae) => e(23, k = ae)), i), L, re = j, ue = () => (re(), re = E(a, (ae) => e(24, L = ae)), a), T, Y = j, le = () => (Y(), Y = E(l, (ae) => e(25, T = ae)), l);
  t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => Y());
  let { componentContext: A } = r, { layoutParams: D = void 0 } = r;
  const M = Dr(Kr), U = M.direction;
  bn(t, U, (ae) => e(21, h = ae));
  let Z = !1, me = "start", Ae = "start", ve = [], he, Se = [], Q = [], xe = "";
  function qe() {
    e(3, Z = !1), e(13, me = "start"), e(14, Ae = "start");
  }
  function Ke(ae) {
    var $, Le;
    if (!ae || !ae.style) return null;
    let ne = "#E0E0E0", we = 1;
    const Re = ae.style;
    if (Re.type === "shape_drawable" && Re.shape) {
      const Ne = Re.shape;
      ne = gr(Ne.background_color || Re.color || "#E0E0E0"), Ne.type === "rounded_rectangle" && (we = Number((($ = Ne.item_height) == null ? void 0 : $.value) || ((Le = Ne.item_width) == null ? void 0 : Le.value) || 1));
    } else Re.color && (ne = gr(Re.color));
    const Ye = ae.margins || {};
    return {
      color: ne,
      thickness: we,
      show_at_start: ae.show_at_start === 1 || ae.show_at_start === !0,
      show_between: ae.show_between !== 0 && ae.show_between !== !1,
      show_at_end: ae.show_at_end === 1 || ae.show_at_end === !0,
      marginTop: Number(Ye.top) || 0,
      marginBottom: Number(Ye.bottom) || 0,
      marginLeft: Number(Ye.left) || 0,
      marginRight: Number(Ye.right) || 0
    };
  }
  function be(ae, ne) {
    const we = ae.header_row;
    let Re = [];
    return ae.row_builder && Array.isArray(ne) ? Re = _l(ne, M, A, ae.row_builder).map(($) => $.div) : Array.isArray(ae.rows) && (Re = ae.rows), { rows: Re, headerRow: we };
  }
  let Te = [];
  function pe(ae, ne) {
    Te = [];
    for (let we = 0; we < ae; we++)
      Te[we] = new Array(ne).fill(!1);
  }
  function ge(ae, ne, we, Re) {
    var Ye;
    for (let $ = ae; $ < ae + we && $ < Te.length; $++)
      for (let Le = ne; Le < ne + Re && Le < (((Ye = Te[0]) == null ? void 0 : Ye.length) || 0); Le++)
        Te[$][Le] = !0;
  }
  function de(ae, ne) {
    var Re;
    if (ae >= Te.length) return ne;
    let we = ne;
    for (; we < (((Re = Te[0]) == null ? void 0 : Re.length) || 0) && Te[ae][we]; )
      we++;
    return we;
  }
  function ee(ae, ne, we, Re, Ye, $, Le, Ne, ot, ut) {
    const rt = Array.isArray(ae.cells) ? ae.cells : [];
    let yt = 0;
    for (let nt = 0; nt < rt.length; nt++) {
      const Pt = rt[nt];
      if (!Pt || !Pt.div) continue;
      const ft = Math.max(1, Number(Pt.column_span) || 1), q = Math.max(1, Number(Pt.row_span) || 1);
      yt = de(ne, yt), ge(ne, yt, q, ft);
      const fe = Array.isArray(we) && we[yt], st = Pt.content_alignment_horizontal || fe && fe.content_alignment_horizontal || void 0, Me = Pt.content_alignment_vertical || fe && fe.content_alignment_vertical || void 0;
      let I;
      const Ct = Pt.background || Re;
      if (Ct && Array.isArray(Ct) && Ct.length > 0) {
        const Dt = Ct[0];
        Dt && Dt.type === "solid" && Dt.color && (I = gr(Dt.color));
      }
      const lt = ot.get(Pt.div);
      let St;
      lt ? (ut.delete(lt), St = lt) : St = A.produceChildContext(Pt.div, { path: `${$}_${nt}` }), Le.push(St), Ne.push({
        componentContext: St,
        layoutParams: {
          gridArea: {
            x: yt,
            y: ne,
            colSpan: ft,
            rowSpan: q
          }
        },
        cellHAlign: st,
        cellVAlign: Me,
        backgroundStyle: I
      }), yt += ft;
    }
  }
  return ln(() => {
    ve.forEach((ae) => {
      ae.destroy();
    });
  }), t.$$set = (ae) => {
    "componentContext" in ae && e(0, A = ae.componentContext), "layoutParams" in ae && e(1, D = ae.layoutParams);
  }, t.$$.update = () => {
    var ae, ne, we;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(20, n = A.origJson), t.$$.dirty[0] & /*origJson*/
    1048576 && n && qe(), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, o = A.json.columns), t.$$.dirty[0] & /*componentContext*/
    1 && R(e(11, i = A.getDerivedFromVars(A.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && w(e(10, s = A.getDerivedFromVars(A.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(9, a = A.getDerivedFromVars(A.json.striped))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(8, l = typeof ((ae = A.json.row_builder) == null ? void 0 : ae.data) == "string" ? A.getDerivedFromVars((ne = A.json.row_builder) == null ? void 0 : ne.data, void 0, !0) : (we = A.json.row_builder) != null && we.data ? Jo(A.json.row_builder.data) : void 0)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && (!Array.isArray(o) || o.length === 0 ? e(3, Z = !0) : e(3, Z = !1)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && e(17, c = Array.isArray(o) ? o.length : 0), t.$$.dirty[0] & /*jsonColumns*/
    524288)
      if (Array.isArray(o)) {
        const Re = [];
        for (let Ye = 0; Ye < o.length; Ye++) {
          const $ = o[Ye], Le = $ == null ? void 0 : $.width;
          if ((Le == null ? void 0 : Le.type) === "fixed" && Le.value)
            Re.push(_e(Number(Le.value)));
          else if ((Le == null ? void 0 : Le.type) === "match_parent") {
            const Ne = Number(Le.weight || 1);
            Re.push(`${Ne}fr`);
          } else
            Re.push("auto");
        }
        e(16, xe = Re.join(" "));
      } else
        e(16, xe = "");
    if (t.$$.dirty[0] & /*componentContext, $jsonRowBuilderData*/
    33554433 && e(18, u = be(A.json, T)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonColumns, allRows, columnCount, $jsonStriped*/
    17727493) {
      const Re = new Set(ve), Ye = /* @__PURE__ */ new Map();
      he === A && ve.forEach((I) => {
        Ye.set(I.json, I);
      });
      const $ = [], Le = [], Ne = [];
      let ot = 0;
      const ut = A.json, rt = Array.isArray(o) ? o : [], yt = !!(u.headerRow && Array.isArray(u.headerRow.cells)), nt = u.rows.length, Pt = (yt ? 1 : 0) + nt;
      pe(Pt + 10, c + 10);
      const ft = Ke(ut.row_separator), q = Ke(ut.column_separator), fe = Ke(ut.header_separator);
      yt && (ee(u.headerRow, ot, rt, u.headerRow.background || ut.header_background, void 0, -1, $, Le, Ye, Re), ot++);
      const st = u.rows;
      for (let I = 0; I < st.length; I++) {
        const Ct = st[I];
        if (!Ct || !Array.isArray(Ct.cells)) continue;
        let lt = Ct.background;
        !lt && L && (I % 2 === 0 ? lt = L.even_row_background : lt = L.odd_row_background), ee(Ct, ot, rt, lt, void 0, I, $, Le, Ye, Re), ot++;
      }
      const Me = ot;
      if (fe && yt && nt > 0 && Ne.push({
        gridColumn: `1 / span ${c}`,
        gridRow: "1 / span 1",
        background: fe.color,
        height: _e(fe.thickness),
        marginTop: fe.marginTop ? _e(fe.marginTop) : void 0,
        marginBottom: fe.marginBottom ? _e(fe.marginBottom) : void 0,
        marginLeft: fe.marginLeft ? _e(fe.marginLeft) : void 0,
        marginRight: fe.marginRight ? _e(fe.marginRight) : void 0
      }), ft) {
        const I = yt ? 1 : 0;
        if (ft.show_at_start && nt > 0 && Ne.push({
          gridColumn: `1 / span ${c}`,
          gridRow: `${I + 1} / span 1`,
          background: ft.color,
          height: _e(ft.thickness),
          marginTop: ft.marginTop ? _e(ft.marginTop) : void 0,
          marginBottom: ft.marginBottom ? _e(ft.marginBottom) : void 0,
          marginLeft: ft.marginLeft ? _e(ft.marginLeft) : void 0,
          marginRight: ft.marginRight ? _e(ft.marginRight) : void 0
        }), ft.show_between)
          for (let Ct = I; Ct < Me - 1; Ct++)
            Ne.push({
              gridColumn: `1 / span ${c}`,
              gridRow: `${Ct + 1} / span 1`,
              background: ft.color,
              height: _e(ft.thickness),
              marginTop: ft.marginTop ? _e(ft.marginTop) : void 0,
              marginBottom: ft.marginBottom ? _e(ft.marginBottom) : void 0,
              marginLeft: ft.marginLeft ? _e(ft.marginLeft) : void 0,
              marginRight: ft.marginRight ? _e(ft.marginRight) : void 0
            });
        ft.show_at_end && nt > 0 && Ne.push({
          gridColumn: `1 / span ${c}`,
          gridRow: `${Me} / span 1`,
          background: ft.color,
          height: _e(ft.thickness),
          marginTop: ft.marginTop ? _e(ft.marginTop) : void 0,
          marginBottom: ft.marginBottom ? _e(ft.marginBottom) : void 0,
          marginLeft: ft.marginLeft ? _e(ft.marginLeft) : void 0,
          marginRight: ft.marginRight ? _e(ft.marginRight) : void 0
        });
      }
      if (q && c > 0) {
        if (q.show_at_start && Ne.push({
          gridColumn: "1 / span 1",
          gridRow: `1 / span ${Me}`,
          background: q.color,
          width: _e(q.thickness),
          marginTop: q.marginTop ? _e(q.marginTop) : void 0,
          marginBottom: q.marginBottom ? _e(q.marginBottom) : void 0,
          marginLeft: q.marginLeft ? _e(q.marginLeft) : void 0,
          marginRight: q.marginRight ? _e(q.marginRight) : void 0
        }), q.show_between)
          for (let I = 0; I < c - 1; I++)
            Ne.push({
              gridColumn: `${I + 1} / span 1`,
              gridRow: `1 / span ${Me}`,
              background: q.color,
              width: _e(q.thickness),
              marginTop: q.marginTop ? _e(q.marginTop) : void 0,
              marginBottom: q.marginBottom ? _e(q.marginBottom) : void 0,
              marginLeft: q.marginLeft ? _e(q.marginLeft) : void 0,
              marginRight: q.marginRight ? _e(q.marginRight) : void 0
            });
        q.show_at_end && Ne.push({
          gridColumn: `${c} / span 1`,
          gridRow: `1 / span ${Me}`,
          background: q.color,
          width: _e(q.thickness),
          marginTop: q.marginTop ? _e(q.marginTop) : void 0,
          marginBottom: q.marginBottom ? _e(q.marginBottom) : void 0,
          marginLeft: q.marginLeft ? _e(q.marginLeft) : void 0,
          marginRight: q.marginRight ? _e(q.marginRight) : void 0
        });
      }
      for (const I of Re)
        I.destroy();
      e(2, ve = $), e(4, Se = Le), e(5, Q = Ne), e(15, he = A);
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    8396800 && e(13, me = dl(k, me)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    6307840 && e(14, Ae = fl(m, h, Ae)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    24576 && e(7, f = {
      valign: me,
      halign: Ae
    }), t.$$.dirty[0] & /*gridTemplateColumns*/
    65536 && e(6, _ = {
      "grid-template-columns": xe
    });
  }, [
    A,
    D,
    ve,
    Z,
    Se,
    Q,
    _,
    f,
    l,
    a,
    s,
    i,
    U,
    me,
    Ae,
    he,
    xe,
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
class Jy extends Or {
  constructor(r) {
    super(), Lr(this, r, Gy, Uy, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const qy = "appkit-counter", Ky = "appkit-counter__container", Yy = "appkit-counter__button", Xy = "appkit-counter__value", Zy = "appkit-counter_disabled", Di = {
  counter: qy,
  counter__container: Ky,
  counter__button: Yy,
  counter__value: Xy,
  counter_disabled: Zy
};
function Qy(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function xy(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: mt(
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
      $$slots: { default: [$y] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Rt(r.$$.fragment);
    },
    m(n, o) {
      Nt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = mt(
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function $y(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, h, m, p, w;
  return {
    c() {
      r = Pe("div"), e = Pe("button"), n = tn("svg"), o = tn("line"), s = mr(), a = Pe("div"), l = Gn(
        /*value*/
        t[17]
      ), c = mr(), u = Pe("button"), f = tn("svg"), _ = tn("line"), h = tn("line"), g(o, "x1", "6"), g(o, "y1", "12"), g(o, "x2", "18"), g(o, "y2", "12"), g(
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
      ), F(e, "width", _e(
        /*buttonSize*/
        t[5]
      )), F(e, "height", _e(
        /*buttonSize*/
        t[5]
      )), g(a, "class", Di.counter__value), F(a, "width", _e(
        /*valueWidth*/
        t[10]
      )), F(
        a,
        "color",
        /*textColor*/
        t[8]
      ), F(a, "font-size", _e(
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
      ), F(u, "width", _e(
        /*buttonSize*/
        t[5]
      )), F(u, "height", _e(
        /*buttonSize*/
        t[5]
      )), g(r, "class", Di.counter__container);
    },
    m(k, N) {
      J(k, r, N), wt(r, e), wt(e, n), wt(n, o), wt(r, s), wt(r, a), wt(a, l), wt(r, c), wt(r, u), wt(u, f), wt(f, _), wt(f, h), p || (w = [
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
      32 && F(e, "width", _e(
        /*buttonSize*/
        k[5]
      )), N[0] & /*buttonSize*/
      32 && F(e, "height", _e(
        /*buttonSize*/
        k[5]
      )), N[0] & /*value*/
      131072 && eo(
        l,
        /*value*/
        k[17]
      ), N[0] & /*valueWidth*/
      1024 && F(a, "width", _e(
        /*valueWidth*/
        k[10]
      )), N[0] & /*textColor*/
      256 && F(
        a,
        "color",
        /*textColor*/
        k[8]
      ), N[0] & /*fontSize*/
      512 && F(a, "font-size", _e(
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
      k[12]) && (u.disabled = m), N[0] & /*value, maxValue, disabledButtonColor, buttonColor*/
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
      ), N[0] & /*buttonSize*/
      32 && F(u, "width", _e(
        /*buttonSize*/
        k[5]
      )), N[0] & /*buttonSize*/
      32 && F(u, "height", _e(
        /*buttonSize*/
        k[5]
      ));
    },
    d(k) {
      k && G(r), p = !1, Gr(w);
    }
  };
}
function ew(t) {
  let r, e, n, o;
  const i = [xy, Qy], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[2] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (fr(), te(s[u], 1, 1, () => {
        s[u] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function tw(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, w, k, N, R, L, re, ue, T, Y, le, A, D = j, M = () => (D(), D = E(i, (it) => e(46, A = it)), i), U, Z = j, me = () => (Z(), Z = E(ue, (it) => e(47, U = it)), ue), Ae, ve = j, he = () => (ve(), ve = E(re, (it) => e(48, Ae = it)), re), Se, Q = j, xe = () => (Q(), Q = E(L, (it) => e(49, Se = it)), L), qe, Ke = j, be = () => (Ke(), Ke = E(R, (it) => e(50, qe = it)), R), Te, pe = j, ge = () => (pe(), pe = E(N, (it) => e(51, Te = it)), N), de, ee = j, ae = () => (ee(), ee = E(k, (it) => e(52, de = it)), k), ne, we = j, Re = () => (we(), we = E(w, (it) => e(53, ne = it)), w), Ye, $ = j, Le = () => ($(), $ = E(p, (it) => e(54, Ye = it)), p), Ne, ot = j, ut = () => (ot(), ot = E(m, (it) => e(55, Ne = it)), m), rt, yt = j, nt = () => (yt(), yt = E(h, (it) => e(56, rt = it)), h), Pt, ft = j, q = () => (ft(), ft = E(_, (it) => e(57, Pt = it)), _), fe, st = j, Me = () => (st(), st = E(f, (it) => e(58, fe = it)), f), I, Ct = j, lt = () => (Ct(), Ct = E(u, (it) => e(59, I = it)), u), St, Dt = j, tt = () => (Dt(), Dt = E(c, (it) => e(60, St = it)), c), X, Et = j, Tt = () => (Et(), Et = E(l, (it) => e(61, X = it)), l), $t, Kt = j, je = () => (Kt(), Kt = E(a, (it) => e(62, $t = it)), a), He, pt = j, Ve = () => (pt(), pt = E(s, (it) => e(63, He = it)), s);
  t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => ot()), t.$$.on_destroy.push(() => yt()), t.$$.on_destroy.push(() => ft()), t.$$.on_destroy.push(() => st()), t.$$.on_destroy.push(() => Ct()), t.$$.on_destroy.push(() => Dt()), t.$$.on_destroy.push(() => Et()), t.$$.on_destroy.push(() => Kt()), t.$$.on_destroy.push(() => pt());
  let { componentContext: $e } = r, { layoutParams: Be = void 0 } = r;
  const Vt = Dr(Kr), Oe = Dr(To);
  let bt = !1, Gt = !0, It = "#4CAF50", _r = 36, Fe = "#ffffff", vt = "#cccccc", or = "#1B2630", tr = 16, Qt = 700, hr = 40, kr = "#F5F5F5", Mt = "#E0E0E0", br = 1, Wt = 999, _t = 6, er = 0, ie = 99, yr = 1;
  const vr = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  };
  function jt() {
    e(3, Gt = !0), e(4, It = "#4CAF50"), e(5, _r = 36), e(6, Fe = "#ffffff"), e(7, vt = "#cccccc"), e(8, or = "#1B2630"), e(9, tr = 16), e(13, Qt = 700), e(10, hr = 40), e(37, kr = "#F5F5F5"), e(38, Mt = "#E0E0E0"), e(39, br = 1), e(40, Wt = 999), e(41, _t = 6), e(11, er = 0), e(12, ie = 99), e(42, yr = 1);
  }
  function Ir() {
    if (!Gt) return;
    const it = Math.min(T + yr, ie);
    it !== T && (i.setValue(it), $e.json.on_increment_actions && $e.execAnyActions($e.json.on_increment_actions), $e.json.on_value_change_actions && $e.execAnyActions($e.json.on_value_change_actions));
  }
  function qr() {
    if (!Gt) return;
    const it = Math.max(T - yr, er);
    it !== T && (i.setValue(it), $e.json.on_decrement_actions && $e.execAnyActions($e.json.on_decrement_actions), $e.json.on_value_change_actions && $e.execAnyActions($e.json.on_value_change_actions));
  }
  let lr;
  return ln(() => {
    lr && (Vt.unregisterFocusable(lr), e(43, lr = void 0));
  }), t.$$set = (it) => {
    "componentContext" in it && e(0, $e = it.componentContext), "layoutParams" in it && e(1, Be = it.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(45, n = $e.origJson), t.$$.dirty[1] & /*origJson*/
    16384 && n && jt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(44, o = $e.json.counter_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8192 && M(e(16, i = o && ($e.getVariable(o, "integer") || Vt.awaitGlobalVariable(o, "integer", 0)) || io("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && Ve(e(34, s = $e.getDerivedFromVars($e.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && je(e(33, a = $e.getDerivedFromVars($e.json.button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Tt(e(32, l = $e.getDerivedFromVars($e.json.button_size))), t.$$.dirty[0] & /*componentContext*/
    1 && tt(e(31, c = $e.getDerivedFromVars($e.json.icon_color))), t.$$.dirty[0] & /*componentContext*/
    1 && lt(e(30, u = $e.getDerivedFromVars($e.json.disabled_button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Me(e(29, f = $e.getDerivedFromVars($e.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && q(e(28, _ = $e.getDerivedFromVars($e.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && nt(e(27, h = $e.getDerivedFromVars($e.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(26, m = $e.getDerivedFromVars($e.json.value_width))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(25, p = $e.getDerivedFromVars($e.json.background_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Re(e(24, w = $e.getDerivedFromVars($e.json.border_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(23, k = $e.getDerivedFromVars($e.json.border_width))), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(22, N = $e.getDerivedFromVars($e.json.corner_radius))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(21, R = $e.getDerivedFromVars($e.json.padding))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(20, L = $e.getDerivedFromVars($e.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(19, re = $e.getDerivedFromVars($e.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(18, ue = $e.getDerivedFromVars($e.json.step))), t.$$.dirty[0] & /*isEnabled*/
    8 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    2 && e(3, Gt = sn(He, Gt)), t.$$.dirty[0] & /*buttonColor*/
    16 | t.$$.dirty[2] & /*$jsonButtonColor*/
    1 && e(4, It = gr($t, 1, It)), t.$$.dirty[0] & /*buttonSize*/
    32 | t.$$.dirty[1] & /*$jsonButtonSize*/
    1073741824 && e(5, _r = oo(X, _r)), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*$jsonIconColor*/
    536870912 && e(6, Fe = gr(St, 1, Fe)), t.$$.dirty[0] & /*disabledButtonColor*/
    128 | t.$$.dirty[1] & /*$jsonDisabledButtonColor*/
    268435456 && e(7, vt = gr(I, 1, vt)), t.$$.dirty[0] & /*textColor*/
    256 | t.$$.dirty[1] & /*$jsonTextColor*/
    134217728 && e(8, or = gr(fe, 1, or)), t.$$.dirty[0] & /*fontSize*/
    512 | t.$$.dirty[1] & /*$jsonFontSize*/
    67108864 && e(9, tr = oo(Pt, tr)), t.$$.dirty[1] & /*$jsonFontWeight*/
    33554432) {
      const it = rt;
      if (typeof it == "string")
        if (it in vr)
          e(13, Qt = vr[it]);
        else {
          const At = parseInt(it, 10);
          !Number.isNaN(At) && At > 0 && e(13, Qt = At);
        }
      else typeof it == "number" && it > 0 && e(13, Qt = it);
    }
    if (t.$$.dirty[0] & /*valueWidth*/
    1024 | t.$$.dirty[1] & /*$jsonValueWidth*/
    16777216 && e(10, hr = oo(Ne, hr)), t.$$.dirty[1] & /*$jsonBackgroundColor, backgroundColor*/
    8388672 && e(37, kr = gr(Ye, 1, kr)), t.$$.dirty[1] & /*$jsonBorderColor, borderColor*/
    4194432 && e(38, Mt = gr(ne, 1, Mt)), t.$$.dirty[1] & /*$jsonBorderWidth, borderWidth*/
    2097408 && e(39, br = oo(de, br)), t.$$.dirty[1] & /*$jsonCornerRadius, cornerRadius*/
    1049088 && e(40, Wt = oo(Te, Wt)), t.$$.dirty[1] & /*$jsonPadding, padding*/
    525312 && e(41, _t = oo(qe, _t)), t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$jsonMinValue, $jsonMaxValue*/
    393216 && (e(11, er = oo(Se, er)), e(12, ie = oo(Ae, ie))), t.$$.dirty[1] & /*$jsonStep, step*/
    67584) {
      const it = oo(U, yr);
      it > 0 && e(42, yr = it);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$valueVariable*/
    32768 && e(17, T = Fo(A || 0, er, ie)), t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*variable*/
    8192) {
      let it = !1;
      o ? Oe.hasAction() && (it = !0, $e.logError(K(new Error('Cannot show "counter" inside component with an action')))) : (it = !0, $e.logError(K(new Error('Missing "counter_value_variable" in "counter"')))), bt !== it && e(2, bt = it);
    }
    t.$$.dirty[0] & /*isEnabled*/
    8 && e(15, Y = { disabled: !Gt }), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*backgroundColor, borderColor, borderWidth, cornerRadius, padding*/
    1984 && e(14, le = {
      "--divkit-counter-bg": kr,
      "--divkit-counter-border-color": Mt,
      "--divkit-counter-border-width": _e(br),
      "--divkit-counter-radius": _e(Wt),
      "--divkit-counter-padding": _e(_t),
      "--divkit-counter-icon-color": Fe
    }), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*prevId*/
    4096 && $e.json && (lr && (Vt.unregisterFocusable(lr), e(43, lr = void 0)), $e.id && !$e.fakeElement && (e(43, lr = $e.id), Vt.registerFocusable(lr, {
      focus() {
      }
    })));
  }, [
    $e,
    Be,
    bt,
    Gt,
    It,
    _r,
    Fe,
    vt,
    or,
    tr,
    hr,
    er,
    ie,
    Qt,
    le,
    Y,
    i,
    T,
    ue,
    re,
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
    qr,
    kr,
    Mt,
    br,
    Wt,
    _t,
    yr,
    lr,
    o,
    n,
    A,
    U,
    Ae,
    Se,
    qe,
    Te,
    de,
    ne,
    Ye,
    Ne,
    rt,
    Pt,
    fe,
    I,
    St,
    X,
    $t,
    He
  ];
}
class rw extends Or {
  constructor(r) {
    super(), Lr(this, r, tw, ew, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const nw = "appkit-webview__frame", Ys = {
  webview__frame: nw,
  "webview__aspect-wrapper": "appkit-webview__aspect-wrapper"
};
function ow(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function iw(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: mt("webview", Ys, {}),
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
      $$slots: { default: [aw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function sw(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Pe("iframe"), g(r, "class", Ys.webview__frame), Kn(r.src, e = /*url*/
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
      4 && !Kn(r.src, e = /*url*/
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
      a && G(r), i = !1, Gr(s);
    }
  };
}
function lw(t) {
  let r, e, n, o, i, s = `${/*aspectPaddingBottom*/
  t[6]}%`, a, l;
  return {
    c() {
      r = Pe("div"), e = Pe("iframe"), g(e, "class", Ys.webview__frame), Kn(e.src, n = /*url*/
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
      t[4] ? "auto" : "no"), g(e, "title", "webview"), g(r, "class", Ys["webview__aspect-wrapper"]), F(r, "padding-bottom", s);
    },
    m(c, u) {
      J(c, r, u), wt(r, e), a || (l = [
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
      4 && !Kn(e.src, n = /*url*/
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
      c && G(r), a = !1, Gr(l);
    }
  };
}
function aw(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[6] !== "0" ? lw : sw
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = xt();
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
function cw(t) {
  let r, e, n, o;
  const i = [iw, ow], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[5] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, [c]) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (fr(), te(s[u], 1, 1, () => {
        s[u] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function uw(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _ = j, h = () => (_(), _ = E(c, (de) => e(20, f = de)), c), m, p = j, w = () => (p(), p = E(l, (de) => e(21, m = de)), l), k, N = j, R = () => (N(), N = E(a, (de) => e(22, k = de)), a), L, re = j, ue = () => (re(), re = E(s, (de) => e(23, L = de)), s), T, Y = j, le = () => (Y(), Y = E(i, (de) => e(24, T = de)), i), A, D = j, M = () => (D(), D = E(o, (de) => e(25, A = de)), o), U, Z = j, me = () => (Z(), Z = E(n, (de) => e(26, U = de)), n);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => Z());
  let { componentContext: Ae } = r, { layoutParams: ve = void 0 } = r;
  Dr(Kr);
  let he = !1, Se, Q, xe = !1, qe = !0, Ke = !1, be = !1, Te = "0";
  function pe() {
    Ae.execAnyActions(Ae.json.on_load_actions);
  }
  function ge() {
    Ae.execAnyActions(Ae.json.on_error_actions);
  }
  return t.$$set = (de) => {
    "componentContext" in de && e(0, Ae = de.componentContext), "layoutParams" in de && e(1, ve = de.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext*/
    1 && me(e(14, n = Ae.getDerivedFromVars(Ae.json.url))), t.$$.dirty & /*componentContext*/
    1 && M(e(13, o = Ae.getDerivedFromVars(Ae.json.html))), t.$$.dirty & /*componentContext*/
    1 && le(e(12, i = Ae.getDerivedFromVars(Ae.json.javascript_enabled))), t.$$.dirty & /*componentContext*/
    1 && ue(e(11, s = Ae.getDerivedFromVars(Ae.json.allow_scrolling))), t.$$.dirty & /*componentContext*/
    1 && R(e(10, a = Ae.getDerivedFromVars(Ae.json.allow_navigation))), t.$$.dirty & /*componentContext*/
    1 && w(e(9, l = Ae.getDerivedFromVars(Ae.json.scale_to_fit))), t.$$.dirty & /*componentContext*/
    1 && h(e(8, c = Ae.getDerivedFromVars(Ae.json.aspect))), t.$$.dirty & /*$jsonUrl, $jsonHtml, url, html, componentContext*/
    100663309 && (e(2, Se = typeof U == "string" ? U : void 0), e(3, Q = typeof A == "string" ? A : void 0), !Se && !Q ? (e(5, he = !0), Ae.logError(K(new Error('Missing "url" or "html" in "webview"')))) : e(5, he = !1)), t.$$.dirty & /*$jsonJsEnabled, javascriptEnabled*/
    16908288 && e(17, xe = sn(T, xe)), t.$$.dirty & /*$jsonAllowScrolling, allowScrolling*/
    8388624 && e(4, qe = sn(L, qe)), t.$$.dirty & /*$jsonAllowNavigation, allowNavigation*/
    4456448 && e(18, Ke = sn(k, Ke)), t.$$.dirty & /*$jsonScaleToFit, scaleToFit*/
    2621440 && e(19, be = sn(m, be)), t.$$.dirty & /*$jsonAspect*/
    1048576) {
      const de = f == null ? void 0 : f.ratio;
      de && Pn(de) ? e(6, Te = (100 / Number(de)).toFixed(2)) : e(6, Te = "0");
    }
    t.$$.dirty & /*javascriptEnabled, allowNavigation*/
    393216 && e(7, u = [
      "allow-same-origin",
      ...xe ? ["allow-scripts"] : [],
      ...Ke ? ["allow-popups"] : []
    ].join(" "));
  }, [
    Ae,
    ve,
    Se,
    Q,
    qe,
    he,
    Te,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    n,
    pe,
    ge,
    xe,
    Ke,
    be,
    f,
    m,
    k,
    L,
    T,
    A,
    U
  ];
}
class fw extends Or {
  constructor(r) {
    super(), Lr(this, r, uw, cw, Er, { componentContext: 0, layoutParams: 1 });
  }
}
const Xs = {
  "google-map__frame": "appkit-google-map__frame",
  "google-map__aspect-wrapper": "appkit-google-map__aspect-wrapper"
};
function dw(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function _w(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: mt("google-map", Xs, {}),
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
      $$slots: { default: [hw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function pw(t) {
  let r;
  return {
    c() {
      r = Pe("iframe"), g(r, "class", Xs["google-map__frame"]), g(
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
function gw(t) {
  let r, e, n = `${/*aspectPaddingBottom*/
  t[3]}%`;
  return {
    c() {
      r = Pe("div"), e = Pe("iframe"), g(e, "class", Xs["google-map__frame"]), g(
        e,
        "srcdoc",
        /*iframeDoc*/
        t[4]
      ), g(e, "title", "Google Map"), g(e, "sandbox", "allow-scripts allow-same-origin"), g(r, "class", Xs["google-map__aspect-wrapper"]), F(r, "padding-bottom", n);
    },
    m(o, i) {
      J(o, r, i), wt(r, e), t[34](e);
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
function hw(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[3] !== "0" ? gw : pw
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = xt();
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
function mw(t) {
  let r, e, n, o;
  const i = [_w, dw], s = [];
  function a(l, c) {
    return !/*hasError*/
    l[2] && /*iframeDoc*/
    l[4] ? 0 : -1;
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (fr(), te(s[u], 1, 1, () => {
        s[u] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Kl(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function bw(t) {
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
function yw(t) {
  return t.map((r, e) => {
    const n = Number(r.latitude) || 0, o = Number(r.longitude) || 0, i = r.title ? Kl(String(r.title)) : "", s = r.color ? String(r.color) : "", a = r.on_click_actions && r.on_click_actions.length > 0;
    let l = "";
    s && (l = `,icon:{path:google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,fillColor:'${Kl(s)}',fillOpacity:1,strokeColor:'#333',strokeWeight:1,scale:6,anchor:new google.maps.Point(0,0)}`);
    const c = a ? `m.addListener('click',function(){window.parent.postMessage({type:'marker_click',index:${e}},'*');});` : "";
    return `(function(){var m=new google.maps.Marker({position:{lat:${n},lng:${o}},map:map,title:'${i}'${l}});${c}})();`;
  }).join(`
`);
}
function ww(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m = j, p = () => (m(), m = E(_, (q) => e(24, h = q)), _), w, k = j, N = () => (k(), k = E(l, (q) => e(25, w = q)), l), R, L = j, re = () => (L(), L = E(a, (q) => e(26, R = q)), a), ue, T = j, Y = () => (T(), T = E(f, (q) => e(27, ue = q)), f), le, A = j, D = () => (A(), A = E(c, (q) => e(28, le = q)), c), M, U = j, Z = () => (U(), U = E(u, (q) => e(29, M = q)), u), me, Ae = j, ve = () => (Ae(), Ae = E(s, (q) => e(30, me = q)), s), he, Se = j, Q = () => (Se(), Se = E(i, (q) => e(31, he = q)), i), xe, qe = j, Ke = () => (qe(), qe = E(o, (q) => e(32, xe = q)), o), be, Te = j, pe = () => (Te(), Te = E(n, (q) => e(33, be = q)), n);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => k()), t.$$.on_destroy.push(() => L()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => A()), t.$$.on_destroy.push(() => U()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => Se()), t.$$.on_destroy.push(() => qe()), t.$$.on_destroy.push(() => Te());
  let { componentContext: ge } = r, { layoutParams: de = void 0 } = r;
  Dr(Kr);
  let ee = !1, ae = "0", ne = 0, we = 0, Re = 10, Ye = "normal", $ = !0, Le = !0, Ne, ot = [], ut = "", rt, yt = !1;
  function nt(q) {
    if (!rt || q.source !== rt.contentWindow) return;
    const fe = q.data;
    if (!(!fe || typeof fe != "object")) {
      if (fe.type === "map_ready" && !yt)
        yt = !0, ge.execAnyActions(ge.json.on_ready_actions);
      else if (fe.type === "map_error")
        ge.execAnyActions(ge.json.on_error_actions);
      else if (fe.type === "marker_click" && typeof fe.index == "number") {
        const st = ot[fe.index];
        st != null && st.on_click_actions && ge.execAnyActions(st.on_click_actions);
      }
    }
  }
  Xn(() => {
    window.addEventListener("message", nt);
  }), ln(() => {
    window.removeEventListener("message", nt);
  });
  function Pt(q) {
    Fr[q ? "unshift" : "push"](() => {
      rt = q, e(5, rt);
    });
  }
  function ft(q) {
    Fr[q ? "unshift" : "push"](() => {
      rt = q, e(5, rt);
    });
  }
  return t.$$set = (q) => {
    "componentContext" in q && e(0, ge = q.componentContext), "layoutParams" in q && e(1, de = q.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(15, n = ge.getDerivedFromVars(ge.json.latitude))), t.$$.dirty[0] & /*componentContext*/
    1 && Ke(e(14, o = ge.getDerivedFromVars(ge.json.longitude))), t.$$.dirty[0] & /*componentContext*/
    1 && Q(e(13, i = ge.getDerivedFromVars(ge.json.zoom))), t.$$.dirty[0] & /*componentContext*/
    1 && ve(e(12, s = ge.getDerivedFromVars(ge.json.map_type))), t.$$.dirty[0] & /*componentContext*/
    1 && re(e(11, a = ge.getDerivedFromVars(ge.json.allow_zoom))), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(10, l = ge.getDerivedFromVars(ge.json.allow_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && D(e(9, c = ge.getDerivedFromVars(ge.json.api_key))), t.$$.dirty[0] & /*componentContext*/
    1 && Z(e(8, u = ge.getDerivedFromVars(ge.json.api_key_web))), t.$$.dirty[0] & /*componentContext*/
    1 && Y(e(7, f = ge.getDerivedFromVars(ge.json.markers))), t.$$.dirty[0] & /*componentContext*/
    1 && p(e(6, _ = ge.getDerivedFromVars(ge.json.aspect))), t.$$.dirty[0] & /*$jsonMapType, $jsonApiKeyWeb, $jsonApiKey, $jsonMarkers, resolvedApiKey, componentContext*/
    2017460225 | t.$$.dirty[1] & /*$jsonLatitude, $jsonLongitude, $jsonZoom*/
    7) {
      e(16, ne = typeof be == "number" ? be : 0), e(17, we = typeof xe == "number" ? xe : 0), e(18, Re = typeof he == "number" ? he : 10), e(19, Ye = typeof me == "string" ? me : "normal");
      const q = M, fe = le;
      e(22, Ne = typeof q == "string" ? q : typeof fe == "string" ? fe : void 0), e(23, ot = Array.isArray(ue) ? ue : []), Ne ? e(2, ee = !1) : (e(2, ee = !0), ge.logError(K(new Error('Missing "api_key" or "api_key_web" in "google_map"'))));
    }
    if (t.$$.dirty[0] & /*$jsonAllowZoom, allowZoom*/
    68157440 && e(20, $ = sn(R, $)), t.$$.dirty[0] & /*$jsonAllowScroll, allowScroll*/
    35651584 && e(21, Le = sn(w, Le)), t.$$.dirty[0] & /*$jsonAspect*/
    16777216) {
      const q = h == null ? void 0 : h.ratio;
      q && Pn(q) ? e(3, ae = (100 / Number(q)).toFixed(2)) : e(3, ae = "0");
    }
    if (t.$$.dirty[0] & /*resolvedApiKey, resolvedMarkers, mapType, allowScroll, allowZoom, latitude, longitude, zoom*/
    16711680)
      if (Ne) {
        const q = yw(ot), fe = bw(Ye), st = Le || $ ? "auto" : "none";
        e(4, ut = `<!DOCTYPE html>
<html><head>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>html,body,#map{width:100%;height:100%;margin:0;padding:0;}</style>
</head><body>
<div id="map"></div>
<script>
function initMap(){
var map=new google.maps.Map(document.getElementById('map'),{
center:{lat:${ne},lng:${we}},
zoom:${Math.round(Re)},
mapTypeId:'${fe}',
gestureHandling:'${st}',
zoomControl:${$},
scrollwheel:${Le},
draggable:${Le},
fullscreenControl:false,
streetViewControl:false
});
${q}
google.maps.event.addListenerOnce(map,'idle',function(){
window.parent.postMessage({type:'map_ready'},'*');
});
}
<\/script>
<script src="https://maps.googleapis.com/maps/api/js?key=${Kl(Ne)}&callback=initMap" async defer
onerror="window.parent.postMessage({type:'map_error'},'*')"><\/script>
</body></html>`);
      } else
        e(4, ut = "");
  }, [
    ge,
    de,
    ee,
    ae,
    ut,
    rt,
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
    ne,
    we,
    Re,
    Ye,
    $,
    Le,
    Ne,
    ot,
    h,
    w,
    R,
    ue,
    le,
    M,
    me,
    he,
    xe,
    be,
    Pt,
    ft
  ];
}
class kw extends Or {
  constructor(r) {
    super(), Lr(this, r, ww, mw, Er, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
function Ju(t, r, e) {
  const n = t.slice();
  return n[11] = r[e], n;
}
function vw(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function jw(t) {
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
      $$slots: { default: [Cw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function qu(t) {
  let r, e = [
    /*templateAttrs*/
    t[8]
  ], n = {};
  for (let o = 0; o < e.length; o += 1)
    n = jo(n, e[o]);
  return {
    c() {
      r = Pe("template"), qo(r, n);
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
function Ku(t) {
  let r = (
    /*jsonItems*/
    t[5]
  ), e, n, o = Xu(t);
  return {
    c() {
      o.c(), e = xt();
    },
    m(i, s) {
      o.m(i, s), J(i, e, s), n = !0;
    },
    p(i, s) {
      s & /*jsonItems*/
      32 && Er(r, r = /*jsonItems*/
      i[5]) ? (fr(), te(o, 1, 1, j), dr(), o = Xu(i), o.c(), H(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
    },
    i(i) {
      n || (H(o), n = !0);
    },
    o(i) {
      te(o), n = !1;
    },
    d(i) {
      i && G(e), o.d(i);
    }
  };
}
function Yu(t) {
  let r, e;
  return r = new Zn({
    props: { componentContext: (
      /*item*/
      t[11]
    ) }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function Xu(t) {
  let r, e, n = ir(
    /*items*/
    t[3]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Yu(Ju(t, n, s));
  const i = (s) => te(o[s], 1, 1, () => {
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
          const c = Ju(s, n, l);
          o[l] ? (o[l].p(c, a), H(o[l], 1)) : (o[l] = Yu(c), o[l].c(), H(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (fr(), l = n.length; l < o.length; l += 1)
          i(l);
        dr();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          H(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        te(o[a]);
      e = !1;
    },
    d(s) {
      s && G(r), cn(o, s);
    }
  };
}
function Tl(t) {
  let r, e, n, o = (
    /*templateContent*/
    t[7] && qu(t)
  ), i = !/*hasItemsError*/
  t[4] && /*jsonItems*/
  t[5] && Ku(t), s = [
    /*componentContext*/
    t[0].json.custom_props || {}
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = jo(a, s[l]);
  return {
    c() {
      r = Pe(
        /*desc*/
        t[2].element
      ), o && o.c(), e = mr(), i && i.c(), ei(
        /*desc*/
        t[2].element
      )(r, a);
    },
    m(l, c) {
      J(l, r, c), o && o.m(r, null), wt(r, e), i && i.m(r, null), t[9](r), n = !0;
    },
    p(l, c) {
      /*templateContent*/
      l[7] ? o ? o.p(l, c) : (o = qu(l), o.c(), o.m(r, e)) : o && (o.d(1), o = null), !/*hasItemsError*/
      l[4] && /*jsonItems*/
      l[5] ? i ? (i.p(l, c), c & /*hasItemsError, jsonItems*/
      48 && H(i, 1)) : (i = Ku(l), i.c(), H(i, 1), i.m(r, null)) : i && (fr(), te(i, 1, 1, () => {
        i = null;
      }), dr()), ei(
        /*desc*/
        l[2].element
      )(r, a = No(s, [
        c & /*componentContext*/
        1 && /*componentContext*/
        (l[0].json.custom_props || {})
      ]));
    },
    i(l) {
      n || (H(i), n = !0);
    },
    o(l) {
      te(i), n = !1;
    },
    d(l) {
      l && G(r), o && o.d(), i && i.d(), t[9](null);
    }
  };
}
function Cw(t) {
  let r = (
    /*desc*/
    t[2].element
  ), e, n = (
    /*desc*/
    t[2].element && Tl(t)
  );
  return {
    c() {
      n && n.c(), e = xt();
    },
    m(o, i) {
      n && n.m(o, i), J(o, e, i);
    },
    p(o, i) {
      /*desc*/
      o[2].element ? r ? Er(
        r,
        /*desc*/
        o[2].element
      ) ? (n.d(1), n = Tl(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = Tl(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : r && (n.d(1), n = null, r = /*desc*/
      o[2].element);
    },
    i: j,
    o(o) {
      te(n, o);
    },
    d(o) {
      o && G(e), n && n.d(o);
    }
  };
}
function Aw(t) {
  let r, e, n, o;
  const i = [jw, vw], s = [];
  function a(l, c) {
    return (
      /*desc*/
      l[2] ? 0 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, [c]) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (fr(), te(s[u], 1, 1, () => {
        s[u] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), H(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Ew(t, r, e) {
  let n, { componentContext: o } = r, { layoutParams: i = void 0 } = r;
  const s = Dr(Kr);
  let a, l = null, c = "", u = {}, f = [], _ = !1;
  Xn(() => {
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
          for (const [k, N] of p.variables)
            w.set(k, N.getValue());
          e(7, c = l.template({
            props: o.json.custom_props,
            variables: w
          }));
        } else l.template && typeof l.template == "string" ? e(7, c = l.template) : e(7, c = "");
        e(8, u = {
          shadowrootmode: l.shadowRootMode || "open"
        });
      } else
        e(2, l = null), e(7, c = ";"), o.logError(K(new Error('Unknown or incorrect "custom_type" prop for div "custom"')));
    t.$$.dirty & /*componentContext*/
    1 && e(5, n = o.json.items), t.$$.dirty & /*jsonItems, componentContext*/
    33 && (n !== void 0 && !Array.isArray(n) ? (e(4, _ = !0), o.logError(K(new Error('Incorrect "items" prop for div "custom"')))) : e(4, _ = !1)), t.$$.dirty & /*items, hasItemsError, jsonItems, componentContext*/
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
class Sw extends Or {
  constructor(r) {
    super(), Lr(this, r, Ew, Aw, Er, { componentContext: 0, layoutParams: 1 });
  }
}
const Vw = "appkit-breadcrumb", Fw = "appkit-breadcrumb__list", Iw = "appkit-breadcrumb__item", Dw = "appkit-breadcrumb__label", Tw = "appkit-breadcrumb__label_link", Mw = "appkit-breadcrumb__separator", hi = {
  breadcrumb: Vw,
  breadcrumb__list: Fw,
  breadcrumb__item: Iw,
  breadcrumb__label: Dw,
  breadcrumb__label_link: Tw,
  breadcrumb__separator: Mw
};
function Zu(t, r, e) {
  const n = t.slice();
  return n[26] = r[e], n[28] = e, n;
}
function Pw(t) {
  let r, e;
  return r = new Dn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function Nw(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: mt("breadcrumb", hi, {}),
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
      $$slots: { default: [Ow] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function zw(t) {
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
      r = Pe("a"), n = Gn(e), i = mr(), s = Pe("span"), a = Gn(
        /*separator*/
        t[2]
      ), g(r, "class", hi.breadcrumb__label + " " + hi.breadcrumb__label_link), g(r, "href", o = xu(
        /*crumb*/
        t[26]
      )), g(s, "class", hi.breadcrumb__separator), g(s, "aria-hidden", "true");
    },
    m(f, _) {
      J(f, r, _), wt(r, n), J(f, i, _), J(f, s, _), wt(s, a), l || (c = Qe(r, "click", u), l = !0);
    },
    p(f, _) {
      t = f, _ & /*crumbs*/
      16 && e !== (e = /*crumb*/
      t[26].title + "") && eo(n, e), _ & /*crumbs*/
      16 && o !== (o = xu(
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
      f && (G(r), G(i), G(s)), l = !1, c();
    }
  };
}
function Lw(t) {
  let r, e = (
    /*crumb*/
    t[26].title + ""
  ), n;
  return {
    c() {
      r = Pe("span"), n = Gn(e), g(r, "class", hi.breadcrumb__label), g(r, "aria-current", "page");
    },
    m(o, i) {
      J(o, r, i), wt(r, n);
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
function Qu(t) {
  let r, e;
  function n(s, a) {
    return (
      /*index*/
      s[28] === /*crumbs*/
      s[4].length - 1 ? Lw : zw
    );
  }
  let o = n(t), i = o(t);
  return {
    c() {
      r = Pe("li"), i.c(), e = mr(), g(r, "class", hi.breadcrumb__item);
    },
    m(s, a) {
      J(s, r, a), i.m(r, null), wt(r, e);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, e)));
    },
    d(s) {
      s && G(r), i.d();
    }
  };
}
function Ow(t) {
  let r, e, n = ir(
    /*crumbs*/
    t[4]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Qu(Zu(t, n, i));
  return {
    c() {
      r = Pe("nav"), e = Pe("ol");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(e, "class", hi.breadcrumb__list), g(r, "aria-label", "breadcrumb");
    },
    m(i, s) {
      J(i, r, s), wt(r, e);
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
          const l = Zu(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Qu(l), o[a].c(), o[a].m(e, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && G(r), cn(o, i);
    }
  };
}
function Bw(t) {
  let r, e, n, o;
  const i = [Nw, Pw], s = [];
  function a(l, c) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), J(l, n, c), o = !0;
    },
    p(l, [c]) {
      e && e.p(l, c);
    },
    i(l) {
      o || (H(e), o = !0);
    },
    o(l) {
      te(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function xu(t) {
  var r;
  return (r = t.action) != null && r.url && !t.action.url.startsWith("div-action://") ? t.action.url : "#";
}
function Rw(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h = j, m = () => (h(), h = E(c, (Te) => e(16, _ = Te)), c), p, w = j, k = () => (w(), w = E(l, (Te) => e(17, p = Te)), l), N, R = j, L = () => (R(), R = E(a, (Te) => e(18, N = Te)), a), re, ue = j, T = () => (ue(), ue = E(s, (Te) => e(19, re = Te)), s), Y, le = j, A = () => (le(), le = E(i, (Te) => e(20, Y = Te)), i), D, M = j, U = () => (M(), M = E(o, (Te) => e(21, D = Te)), o);
  t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => R()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => le()), t.$$.on_destroy.push(() => M());
  let { componentContext: Z } = r, { layoutParams: me = void 0 } = r;
  const Ae = Dr(Kr);
  let ve = "/", he = "#0077CC", Se = "#111111", Q = 14;
  function xe() {
    e(2, ve = "/"), e(12, he = "#0077CC"), e(13, Se = "#111111"), e(14, Q = 14);
  }
  function qe(Te, pe) {
    const ge = Z.json.item_builder;
    if (ge && Array.isArray(pe) && Array.isArray(ge.prototypes)) {
      const de = [];
      return pe.forEach((ee, ae) => {
        if (ee === null || typeof ee != "object")
          return;
        const ne = Ae.preparePrototypeVariables(ge.data_element_name || "it", ee, ae);
        for (let we = 0; we < ge.prototypes.length; ++we) {
          const Re = ge.prototypes[we];
          if (!Re.title || Re.selector !== void 0 && !Z.getJsonWithVars(Re.selector, ne))
            continue;
          const $ = { title: Z.getJsonWithVars(Re.title, ne) };
          if (Re.action) {
            const Le = Z.getJsonWithVars(Re.action, ne);
            Le && ($.action = Le);
          }
          de.push($);
          break;
        }
      }), de;
    }
    return Array.isArray(Te) ? Te : Z.json.crumbs || [];
  }
  function Ke(Te, pe) {
    pe.action && (Te.preventDefault(), Z.execAnyActions([pe.action]));
  }
  const be = (Te, pe) => Ke(pe, Te);
  return t.$$set = (Te) => {
    "componentContext" in Te && e(0, Z = Te.componentContext), "layoutParams" in Te && e(1, me = Te.layoutParams);
  }, t.$$.update = () => {
    var Te, pe, ge;
    t.$$.dirty & /*componentContext*/
    1 && e(15, n = Z.origJson), t.$$.dirty & /*origJson*/
    32768 && n && xe(), t.$$.dirty & /*componentContext*/
    1 && U(e(10, o = Z.getDerivedFromVars(Z.json.separator))), t.$$.dirty & /*componentContext*/
    1 && A(e(9, i = Z.getDerivedFromVars(Z.json.item_text_color))), t.$$.dirty & /*componentContext*/
    1 && T(e(8, s = Z.getDerivedFromVars(Z.json.active_text_color))), t.$$.dirty & /*componentContext*/
    1 && L(e(7, a = Z.getDerivedFromVars(Z.json.item_font_size))), t.$$.dirty & /*componentContext*/
    1 && k(e(6, l = Z.getDerivedFromVars(Z.json.crumbs))), t.$$.dirty & /*componentContext*/
    1 && m(e(5, c = typeof ((Te = Z.json.item_builder) == null ? void 0 : Te.data) == "string" ? Z.getDerivedFromVars((pe = Z.json.item_builder) == null ? void 0 : pe.data, void 0, !0) : (ge = Z.json.item_builder) != null && ge.data ? Jo(Z.json.item_builder.data) : void 0)), t.$$.dirty & /*$jsonSeparator, separator*/
    2097156 && e(2, ve = typeof D == "string" && D.length > 0 ? D : ve), t.$$.dirty & /*$jsonItemTextColor, itemTextColor*/
    1052672 && e(12, he = gr(Y, 1, he)), t.$$.dirty & /*$jsonActiveTextColor, activeTextColor*/
    532480 && e(13, Se = gr(re, 1, Se)), t.$$.dirty & /*$jsonItemFontSize, itemFontSize*/
    278528 && e(14, Q = Un(N, Q)), t.$$.dirty & /*$jsonCrumbs, $jsonItemBuilderData*/
    196608 && e(4, u = qe(p, _)), t.$$.dirty & /*itemTextColor, activeTextColor, itemFontSize*/
    28672 && e(3, f = {
      "--divkit-breadcrumb-item-color": he,
      "--divkit-breadcrumb-active-color": Se,
      "--divkit-breadcrumb-font-size": _e(Q)
    });
  }, [
    Z,
    me,
    ve,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    Ke,
    he,
    Se,
    Q,
    n,
    _,
    p,
    N,
    re,
    Y,
    D,
    be
  ];
}
class Hw extends Or {
  constructor(r) {
    super(), Lr(this, r, Rw, Bw, Er, { componentContext: 0, layoutParams: 1 });
  }
}
const Kd = {
  text: ug,
  container: Kg,
  separator: th,
  image: Ec,
  gif: Ec,
  grid: Fh,
  gallery: $h,
  tabs: Vm,
  state: xm,
  pager: k0,
  indicator: N0,
  slider: w1,
  input: K1,
  select: nb,
  video: yb,
  switch: Db,
  checkbox: Ub,
  radio: ay,
  progress: yy,
  table: Jy,
  counter: rw,
  webview: fw,
  google_map: kw,
  custom: Sw,
  breadcrumb: Hw
};
function $u(t) {
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
  return o && (r = Ma(o, i(t))), {
    c() {
      r && Rt(r.$$.fragment), e = xt();
    },
    m(s, a) {
      r && Nt(r, s, a), J(s, e, a), n = !0;
    },
    p(s, a) {
      if (a & /*component*/
      4 && o !== (o = /*component*/
      s[2])) {
        if (r) {
          fr();
          const l = r;
          te(l.$$.fragment, 1, 0, () => {
            zt(l, 1);
          }), dr();
        }
        o ? (r = Ma(o, i(s)), Rt(r.$$.fragment), H(r.$$.fragment, 1), Nt(r, e.parentNode, e)) : r = null;
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
      n || (r && H(r.$$.fragment, s), n = !0);
    },
    o(s) {
      r && te(r.$$.fragment, s), n = !1;
    },
    d(s) {
      s && G(e), r && zt(r, s);
    }
  };
}
function Ww(t) {
  let r, e, n = (
    /*component*/
    t[2] && $u(t)
  );
  return {
    c() {
      n && n.c(), r = xt();
    },
    m(o, i) {
      n && n.m(o, i), J(o, r, i), e = !0;
    },
    p(o, [i]) {
      /*component*/
      o[2] ? n ? (n.p(o, i), i & /*component*/
      4 && H(n, 1)) : (n = $u(o), n.c(), H(n, 1), n.m(r.parentNode, r)) : n && (fr(), te(n, 1, 1, () => {
        n = null;
      }), dr());
    },
    i(o) {
      e || (H(n), e = !0);
    },
    o(o) {
      te(n), e = !1;
    },
    d(o) {
      o && G(r), n && n.d(o);
    }
  };
}
function Uw(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r;
  const i = Dr(Kr);
  let s;
  return t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext, component*/
    5) {
      const a = n.json;
      if (e(2, s = (a == null ? void 0 : a.type) && Kd[a.type] || void 0), !s) {
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
class Zn extends Or {
  constructor(r) {
    super(), Lr(this, r, Uw, Ww, Er, { componentContext: 0, layoutParams: 1 });
  }
}
const Gw = {
  "root-svg-filters": "appkit-root-svg-filters"
};
function ef(t, r, e) {
  const n = t.slice();
  n[1] = r[e];
  const o = (
    /*filterKey*/
    n[1].split(":")
  );
  return n[2] = o[0], n[3] = o[1], n;
}
function tf(t) {
  let r, e, n = ir([...Object.keys(
    /*svgFiltersMap*/
    t[0]
  )]), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = rf(ef(t, n, i));
  return {
    c() {
      r = tn("svg"), e = tn("defs");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", Gw["root-svg-filters"]), g(r, "aria-hidden", "true");
    },
    m(i, s) {
      J(i, r, s), wt(r, e);
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
          const l = ef(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = rf(l), o[a].c(), o[a].m(e, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && G(r), cn(o, i);
    }
  };
}
function Jw(t) {
  let r, e;
  return {
    c() {
      r = tn("feBlend"), g(r, "in2", "SourceGraphic"), g(r, "mode", e = /*filterMode*/
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
function qw(t) {
  let r;
  return {
    c() {
      r = tn("feComposite"), g(r, "in2", "SourceGraphic"), g(r, "operator", "arithmetic"), g(r, "k1", "1"), g(r, "k2", "0"), g(r, "k3", "0"), g(r, "k4", "0");
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
function Kw(t) {
  let r, e;
  return {
    c() {
      r = tn("feComposite"), g(r, "in2", "SourceGraphic"), g(r, "operator", e = /*filterMode*/
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
function rf(t) {
  let r, e, n, o;
  function i(l, c) {
    return (
      /*filterMode*/
      l[3] === "source_in" || /*filterMode*/
      l[3] === "source_atop" ? Kw : (
        /*filterMode*/
        l[3] === "multiply" ? qw : Jw
      )
    );
  }
  let s = i(t), a = s(t);
  return {
    c() {
      r = tn("filter"), e = tn("feFlood"), a.c(), g(e, "flood-color", n = /*filterColor*/
      t[2]), g(r, "id", o = /*svgFiltersMap*/
      t[0][
        /*filterKey*/
        t[1]
      ]);
    },
    m(l, c) {
      J(l, r, c), wt(r, e), a.m(r, null);
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
function Yw(t) {
  let r = Object.keys(
    /*svgFiltersMap*/
    t[0]
  ).length, e, n = r && tf(t);
  return {
    c() {
      n && n.c(), e = xt();
    },
    m(o, i) {
      n && n.m(o, i), J(o, e, i);
    },
    p(o, [i]) {
      i & /*svgFiltersMap*/
      1 && (r = Object.keys(
        /*svgFiltersMap*/
        o[0]
      ).length), r ? n ? n.p(o, i) : (n = tf(o), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: j,
    o: j,
    d(o) {
      o && G(e), n && n.d(o);
    }
  };
}
function Xw(t, r, e) {
  let { svgFiltersMap: n } = r;
  return t.$$set = (o) => {
    "svgFiltersMap" in o && e(0, n = o.svgFiltersMap);
  }, [n];
}
class Zw extends Or {
  constructor(r) {
    super(), Lr(this, r, Xw, Yw, Er, { svgFiltersMap: 0 });
  }
}
function Qw(t, r, e, n) {
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
const As = /* @__PURE__ */ new Map(), Yl = /* @__PURE__ */ new Map(), Es = /* @__PURE__ */ new Map(), Xl = /* @__PURE__ */ new Map();
function W(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = As.get(t) || [];
  As.has(t) || As.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  Yl.set(i, n);
}
function Rr(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = Es.get(t) || [];
  Es.has(t) || Es.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  Xl.set(i, n);
}
function xw(t, r, e) {
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
    }), l.type === gt && r[a].type === ze) {
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
function Yd(t, r) {
  if (!t)
    return {
      type: "missing"
    };
  let e = null, n = null;
  for (let o = 0; o < t.length; ++o) {
    const i = xw(t[o], r, t.length > 1);
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
function Zl(t, r, e) {
  return Yd(t.get(r), e);
}
function Xd(t, r) {
  return r.map((e, n) => {
    let o = n >= t.args.length ? t.args[t.args.length - 1] : t.args[n];
    return typeof o != "object" && (o = {
      type: o
    }), o.type === gt && e.type === ze ? Gl(e) : e;
  });
}
function nf(t, r) {
  return t + ":" + r.args.map((e) => typeof e == "string" ? e : e.type).join("#");
}
function Hn(t, r) {
  return {
    type: Ue,
    value: ji(r, !0)
  };
}
function of(t, r) {
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
function $w(t, r) {
  if (r.value > ls || r.value < as)
    throw new Error("Unable to convert value to Integer.");
  const e = r.value - r.value % 1;
  return {
    type: ze,
    value: pn(e)
  };
}
function ek(t, r) {
  let e;
  try {
    e = pn(r.value);
  } catch {
    throw new Error("Unable to convert value to Integer.");
  }
  return {
    type: ze,
    value: e
  };
}
function tk(t, r) {
  return {
    type: ze,
    value: pn(r.value ? 1 : 0)
  };
}
function rk(t, r) {
  const e = Number(r.value);
  if (e !== 1 && e !== 0)
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Ur,
    value: e
  };
}
function nk(t, r) {
  if (r.value !== "true" && r.value !== "false")
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Ur,
    value: r.value === "true" ? 1 : 0
  };
}
function ok(t, r) {
  return {
    type: dn,
    value: ni(r.value)
  };
}
function ik(t, r) {
  return ho(r.value), {
    type: $n,
    value: r.value
  };
}
function sk(t, r) {
  try {
    return {
      type: Ue,
      value: encodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to encodeUri string.");
  }
}
function lk(t, r) {
  try {
    return {
      type: Ue,
      value: decodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to decodeUri string.");
  }
}
function ka(t, r, e, n) {
  const o = t.variables.get(r.value);
  let i;
  return o && o.getType() === n ? (i = o.getValue(), t.storeUsedVars || (t.storeUsedVars = /* @__PURE__ */ new Set()), t.storeUsedVars.add(o)) : i = e.value, n === "color" ? i = ni(i) : n === "url" && ho(i), {
    type: n,
    // value is synced with type by params
    value: i
  };
}
function gs(t, r, e) {
  return ka(t, r, e, e.type);
}
function sf(t, r, e) {
  return ka(t, r, e, "color");
}
function lf(t, r, e) {
  return ka(t, r, e, "url");
}
function Zd(t, r) {
  for (let e = 0; e < r.length; ++e) {
    const n = t.charAt(e), o = r.charAt(e);
    if (n !== o && o)
      return o;
  }
  return "";
}
const Zs = 1234567890;
function af(t) {
  const r = new Intl.NumberFormat(t, {
    maximumFractionDigits: 0
  }), e = new Intl.NumberFormat(t, {
    minimumFractionDigits: 1
  }), n = r.format(Zs), o = e.format(Zs);
  return Zd(n, o);
}
function ak(t) {
  const r = new Intl.NumberFormat(t, {
    useGrouping: !1
  }), e = new Intl.NumberFormat(t, {
    useGrouping: !0
  }), n = r.format(Zs), o = e.format(Zs);
  return Zd(n, o);
}
function Qo(t, r, e, n) {
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
    let N = new Intl.NumberFormat((n == null ? void 0 : n.value) || void 0, {
      useGrouping: !1,
      minimumIntegerDigits: Math.min(Math.max(m, 1), 21),
      minimumFractionDigits: Math.min(Math.max(p, 0), 100),
      maximumFractionDigits: Math.min(Math.max(w, p, 0), 100),
      roundingMode: "halfEven"
    }).format(r.value);
    if (_ > -1 && h > 0) {
      const R = ak(n == null ? void 0 : n.value), L = af(n == null ? void 0 : n.value);
      if (R && L) {
        const re = N.split(L), ue = re[0];
        let T = "";
        for (let Y = ue.length - 1; Y >= 0; --Y)
          T = ue[Y] + T, Y > 0 && (ue.length - Y) % h === 0 && (T = R + T);
        N = T + (re.length > 1 ? L + re[1] : "");
      }
    }
    if (p === 0 && w === 0 && o.endsWith(".")) {
      const R = af(n == null ? void 0 : n.value);
      R && (N += R);
    }
    return {
      type: Ue,
      value: N
    };
  } catch (m) {
    throw new Error("Incorrect or unsupported number format." + m + " " + (n == null ? void 0 : n.value) || void 0);
  }
}
function ck() {
  W("toString", [ze], Hn), W("toString", [gt], Hn), W("toString", [Ur], Hn), W("toString", [dn], Hn), W("toString", [$n], Hn), W("toString", [Ue], Hn), W("toString", [cr], Hn), W("toString", [ar], Hn), W("toNumber", [ze], of), W("toNumber", [Ue], of), W("toInteger", [gt], $w), W("toInteger", [Ue], ek), W("toInteger", [Ur], tk), W("toBoolean", [ze], rk), W("toBoolean", [Ue], nk), W("toColor", [Ue], ok), W("toUrl", [Ue], ik), W("encodeUri", [Ue], sk), W("decodeUri", [Ue], lk), W("getIntegerValue", [Ue, ze], gs), W("getNumberValue", [Ue, gt], gs), W("getBooleanValue", [Ue, Ur], gs), W("getStringValue", [Ue, Ue], gs), W("getColorValue", [Ue, dn], sf), W("getColorValue", [Ue, Ue], sf), W("getUrlValue", [Ue, $n], lf), W("getUrlValue", [Ue, Ue], lf), Rr("toString", [ze], Hn), Rr("toString", [gt], Hn), Rr("toString", [Ur], Hn), Rr("toString", [dn], Hn), Rr("toString", [$n], Hn), Rr("toString", [Ue], Hn), Rr("toString", [cr], Hn), Rr("toString", [ar], Hn), W("decimalFormat", [ze, Ue], Qo), W("decimalFormat", [gt, Ue], Qo), W("decimalFormat", [ze, Ue, Ue], Qo), W("decimalFormat", [gt, Ue, Ue], Qo), Rr("decimalFormat", [ze, Ue], Qo), Rr("decimalFormat", [gt, Ue], Qo), Rr("decimalFormat", [ze, Ue, Ue], Qo), Rr("decimalFormat", [gt, Ue, Ue], Qo);
}
function Wn(t, r) {
  return !t || !r ? t : t.padStart(r, "0");
}
const Ql = {
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
    return t > 2 ? Ql.E(t, r) : Wn(r({}, "weekdaynumeric"), t > 1 ? t : void 0);
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
}, uk = /(\w)\1*|''|'(''|[^'])+('|$)|./g, fk = /^'([^]*?)'?$/, dk = /''/g, _k = /[a-zA-Z]/, va = 1e3 * 60 * 60 * 24;
function pk(t) {
  const r = t.match(fk);
  return r ? r[1].replace(dk, "'") : t;
}
function xl(t, r, e) {
  const n = t[r ? "getUTCDay" : "getDay"](), o = n < e ? e - n - 7 : e - n;
  return new Date(t.getTime() + va * o);
}
function cf(t, r, e) {
  const n = new Date(t);
  return n[r ? "setUTCDate" : "setDate"](1), n[r ? "setUTCMonth" : "setMonth"](0), xl(n, r, e);
}
function uf(t, r) {
  return Math.round((t.getTime() - r.getTime()) / va);
}
function ff(t, r, e) {
  let n = 0;
  const o = cf(t, r || !1, e), i = new Date(t);
  i[r ? "setUTCFullYear" : "setFullYear"](t[r ? "getUTCFullYear" : "getFullYear"]() + 1);
  const s = cf(i, r || !1, e), a = t.getTime() < o.getTime(), l = t.getTime() >= s.getTime();
  let c = t[r ? "getUTCFullYear" : "getFullYear"]();
  if (a) {
    --c, o[r ? "setUTCFullYear" : "setFullYear"](o[r ? "getUTCFullYear" : "getFullYear"]() - 1);
    const u = uf(xl(t, r, e), o);
    n = Math.round(u / 7) + 1;
  } else if (l)
    ++c, n = 1;
  else {
    const u = uf(xl(t, r, e), o);
    n = Math.round(u / 7) + 1;
  }
  return {
    week: n,
    year: c
  };
}
function gk(t, r, {
  locale: e,
  isUTC: n,
  weekStartDay: o = 0
} = {}) {
  const i = (s, a) => {
    if (a === "week") {
      const { week: u } = ff(t, n || !1, o);
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
      const f = Math.ceil((t.getTime() - u.getTime()) / va);
      return String(f);
    }
    if (a === "weekyear") {
      let { year: u } = ff(t, n || !1, o);
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
  return (r.match(uk) || []).map((s) => {
    if (s === "''")
      return "'";
    const a = s[0];
    if (a === "'")
      return pk(s);
    if (Ql[a])
      return Ql[a](s.length, i);
    if (a.match(_k))
      throw new Error(
        `Format string contains an unescaped latin alphabet character "${a}"`
      );
    return s;
  }).join("");
}
function hk(t) {
  const r = new Date(t);
  return r.setUTCMonth(r.getUTCMonth() + 1), r.setUTCDate(0), r.getUTCDate();
}
function mk(t, r) {
  return {
    type: Nr,
    value: new Date(Number(r.value) * 1e3)
  };
}
function bk(t, r) {
  const e = new Date(Number(r.value) * 1e3), n = e.getTimezoneOffset();
  return e.setMinutes(e.getMinutes() - n), {
    type: Nr,
    value: e
  };
}
function yk() {
  return {
    type: Nr,
    value: /* @__PURE__ */ new Date()
  };
}
function wk(t, r, e) {
  return {
    type: Nr,
    value: new Date(r.value.getTime() + Number(e.value))
  };
}
function kk(t, r, e) {
  const n = new Date(r.value);
  return n.setUTCFullYear(Number(e.value)), {
    type: Nr,
    value: n
  };
}
function vk(t, r, e) {
  const n = Number(e.value);
  if (n < 1 || n > 12)
    throw new Error(`Expecting month in [1..12], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMonth(n - 1), {
    type: Nr,
    value: o
  };
}
function jk(t, r, e) {
  const n = new Date(r.value), o = Number(e.value);
  if (o <= 0 && o !== -1 || o > hk(n))
    throw new Error(`Unable to set day ${o} for date ${ji(r, !1)}.`);
  return n.setUTCDate(o === -1 ? 0 : o), {
    type: Nr,
    value: n
  };
}
function Ck(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 23)
    throw new Error(`Expecting hours in [0..23], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCHours(n), {
    type: Nr,
    value: o
  };
}
function Ak(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting minutes in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMinutes(n), {
    type: Nr,
    value: o
  };
}
function Ek(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting seconds in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCSeconds(n), {
    type: Nr,
    value: o
  };
}
function Sk(t, r, e) {
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
    type: ze,
    value: pn(o)
  };
};
function Qd(t) {
  return (r, e, n, o) => ({
    type: Ue,
    value: gk(e.value, n.value, {
      locale: o == null ? void 0 : o.value,
      isUTC: t,
      weekStartDay: r.weekStartDay
    })
  });
}
const Vk = oi("getUTCFullYear"), Fk = oi("getUTCMonth"), Ik = oi("getUTCDate"), Dk = oi("getUTCDay"), Tk = oi("getUTCHours"), Mk = oi("getUTCMinutes"), Pk = oi("getUTCSeconds"), Nk = oi("getUTCMilliseconds"), df = Qd(!1), _f = Qd(!0);
function zk() {
  W("parseUnixTime", [ze], mk), W("parseUnixTimeAsLocal", [ze], bk), W("nowLocal", [], yk), W("addMillis", [Nr, ze], wk), W("setYear", [Nr, ze], kk), W("setMonth", [Nr, ze], vk), W("setDay", [Nr, ze], jk), W("setHours", [Nr, ze], Ck), W("setMinutes", [Nr, ze], Ak), W("setSeconds", [Nr, ze], Ek), W("setMillis", [Nr, ze], Sk), W("getYear", [Nr], Vk), W("getMonth", [Nr], Fk), W("getDay", [Nr], Ik), W("getDayOfWeek", [Nr], Dk), W("getHours", [Nr], Tk), W("getMinutes", [Nr], Mk), W("getSeconds", [Nr], Pk), W("getMillis", [Nr], Nk), W("formatDateAsLocal", [Nr, Ue], df), W("formatDateAsUTC", [Nr, Ue], _f), W("formatDateAsLocalWithLocale", [Nr, Ue, Ue], df), W("formatDateAsUTCWithLocale", [Nr, Ue, Ue], _f);
}
function Lk(t) {
  return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Ok(t, r) {
  return {
    type: ze,
    value: pn(r.value.length)
  };
}
function Bk(t, r, e) {
  return {
    type: Ur,
    value: r.value.includes(e.value) ? 1 : 0
  };
}
function Rk(t, r, e, n) {
  if (n.value < e.value)
    throw new Error("Indexes should be in ascending order.");
  if (e.value < 0 || e.value > r.value.length || n.value < 0 || n.value > r.value.length)
    throw new Error("Indexes are out of bounds.");
  return {
    type: Ue,
    value: r.value.substring(Number(e.value), Number(n.value))
  };
}
function Hk(t, r, e, n) {
  let o;
  return e.value ? o = r.value.replace(new RegExp(Lk(e.value), "g"), n.value) : o = r.value, {
    type: Ue,
    value: o
  };
}
function Wk(t, r, e) {
  return {
    type: ze,
    value: pn(r.value.indexOf(e.value))
  };
}
function Uk(t, r, e) {
  return {
    type: ze,
    value: pn(r.value.lastIndexOf(e.value))
  };
}
function Gk(t, r) {
  return {
    type: Ue,
    value: r.value.trim()
  };
}
function Jk(t, r) {
  return {
    type: Ue,
    value: r.value.replace(/^\s+/, "")
  };
}
function qk(t, r) {
  return {
    type: Ue,
    value: r.value.replace(/\s+$/, "")
  };
}
function Kk(t, r) {
  return {
    type: Ue,
    value: r.value.toUpperCase()
  };
}
function Yk(t, r) {
  return {
    type: Ue,
    value: r.value.toLowerCase()
  };
}
function xd(t, r, e, n) {
  if (!n.value.length)
    return t.warnings.push(K(new Error("String for padding is empty."), {
      level: "warn"
    })), "";
  let o = "";
  const i = r.type === Ue ? r.value : ji(r, !1);
  for (; o.length + i.length < e.value; )
    o += n.value;
  return o.length > 0 && o.length + i.length > e.value && (o = o.substring(0, Number(e.value) - Number(i.length))), o;
}
function pf(t, r, e, n) {
  const o = xd(t, r, e, n);
  return {
    type: Ue,
    value: o + ji(r, !1)
  };
}
function gf(t, r, e, n) {
  const o = xd(t, r, e, n);
  return {
    type: Ue,
    value: ji(r, !1) + o
  };
}
function Xk(t, r, e) {
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
function Zk(t, r) {
  return {
    type: Ue,
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping
    value: r.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  };
}
function Qk() {
  W("len", [Ue], Ok), W("contains", [Ue, Ue], Bk), W("substring", [Ue, ze, ze], Rk), W("replaceAll", [Ue, Ue, Ue], Hk), W("index", [Ue, Ue], Wk), W("lastIndex", [Ue, Ue], Uk), W("trim", [Ue], Gk), W("trimLeft", [Ue], Jk), W("trimRight", [Ue], qk), W("toUpperCase", [Ue], Kk), W("toLowerCase", [Ue], Yk), W("padStart", [Ue, ze, Ue], pf), W("padStart", [ze, ze, Ue], pf), W("padEnd", [Ue, ze, Ue], gf), W("padEnd", [ze, ze, Ue], gf), W("testRegex", [Ue, Ue], Xk), W("encodeRegex", [Ue], Zk);
}
function xk(t, r, e) {
  if (e.value === ki)
    throw new Error("Division by zero is not supported.");
  let n = r.value / e.value;
  return n = Ci(t, n), Nn(t, n), {
    type: ze,
    value: n
  };
}
function $k(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value / e.value;
  return {
    type: gt,
    value: n
  };
}
function ev(t, r, e) {
  if (e.value === ki)
    throw new Error("Division by zero is not supported.");
  let n = r.value % e.value;
  return n = Ci(t, n), Nn(t, n), {
    type: ze,
    value: n
  };
}
function tv(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value % e.value;
  return {
    type: gt,
    value: n
  };
}
function rv(t, ...r) {
  let e = r.length ? r[0].value : ki;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value, e = Ci(t, e), Nn(t, e);
  return {
    type: ze,
    value: e
  };
}
function nv(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value;
  return {
    type: gt,
    value: e
  };
}
function ov(t, ...r) {
  let e = r.length ? r[0].value : ki;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value, e = Ci(t, e), Nn(t, e);
  return {
    type: ze,
    value: e
  };
}
function iv(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value;
  return {
    type: gt,
    value: e
  };
}
function sv(t, ...r) {
  let e = ki;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value, e = Ci(t, e), Nn(t, e);
  return {
    type: ze,
    value: e
  };
}
function lv(t, ...r) {
  let e = 0;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value;
  return {
    type: gt,
    value: e
  };
}
function av(t, r) {
  const e = Nd(r.value);
  return Nn(t, e), {
    type: r.type,
    value: e
  };
}
function cv(t, r) {
  const e = Math.abs(r.value);
  return {
    type: gt,
    value: e
  };
}
function uv(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  let e = r[0].value;
  for (let n = 1; n < r.length; ++n)
    r[n].value > e && (e = r[n].value);
  return {
    type: ze,
    value: e
  };
}
function fv(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: gt,
    value: Math.max(...r.map((e) => e.value))
  };
}
function dv(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  let e = r[0].value;
  for (let n = 1; n < r.length; ++n)
    r[n].value < e && (e = r[n].value);
  return {
    type: ze,
    value: e
  };
}
function _v(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: gt,
    value: Math.min(...r.map((e) => e.value))
  };
}
function pv() {
  return {
    type: gt,
    value: Y0
  };
}
function gv() {
  return {
    type: gt,
    value: X0
  };
}
function hv(t) {
  return Nn(t, ls), {
    type: ze,
    value: ls
  };
}
function mv(t) {
  return Nn(t, as), {
    type: ze,
    value: as
  };
}
function bv(t, r) {
  const e = Math.sign(r.value);
  return {
    type: gt,
    // js treats Math.round(-0.5) as 0, which is different to other platforms
    value: e * Math.round(Math.abs(r.value))
  };
}
function yv(t, r) {
  return {
    type: gt,
    value: Math.floor(r.value)
  };
}
function wv(t, r) {
  return {
    type: gt,
    value: Math.ceil(r.value)
  };
}
function kv(t, r) {
  return {
    type: ze,
    value: zd(r.value)
  };
}
function vv(t, r) {
  return {
    type: gt,
    value: Math.sign(r.value)
  };
}
function jv(t, r, e) {
  let n;
  if (e.value === ki)
    n = r.value;
  else if (r.value === ki)
    n = pn(0);
  else {
    const o = zd(e.value);
    n = Nd(r.value) * o;
  }
  return Nn(t, n), {
    type: ze,
    value: n
  };
}
function Cv(t, r, e) {
  let n = Math.sign(e.value);
  n === 0 && (n = Object.is(n, 0) ? 1 : -1);
  const o = Math.abs(r.value) * n;
  return {
    type: gt,
    value: o
  };
}
function Av() {
  W("div", [ze, ze], xk), W("div", [gt, gt], $k), W("mod", [ze, ze], ev), W("mod", [gt, gt], tv), W("mul", [{
    type: ze,
    isVararg: !0
  }], rv), W("mul", [{
    type: gt,
    isVararg: !0
  }], nv), W("sub", [{
    type: ze,
    isVararg: !0
  }], ov), W("sub", [{
    type: gt,
    isVararg: !0
  }], iv), W("sum", [{
    type: ze,
    isVararg: !0
  }], sv), W("sum", [{
    type: gt,
    isVararg: !0
  }], lv), W("abs", [ze], av), W("abs", [gt], cv), W("max", [{
    type: ze,
    isVararg: !0
  }], uv), W("max", [{
    type: gt,
    isVararg: !0
  }], fv), W("min", [{
    type: ze,
    isVararg: !0
  }], dv), W("min", [{
    type: gt,
    isVararg: !0
  }], _v), W("maxNumber", [], pv), W("minNumber", [], gv), W("maxInteger", [], hv), W("minInteger", [], mv), W("round", [gt], bv), W("floor", [gt], yv), W("ceil", [gt], wv), W("signum", [ze], kv), W("signum", [gt], vv), W("copySign", [ze, ze], jv), W("copySign", [gt, gt], Cv);
}
function bl(t) {
  return (r, e) => {
    const n = gl(e.value);
    return {
      type: gt,
      value: n[t] / 255
    };
  };
}
function yl(t) {
  return (r, e, n) => {
    const o = gl(e.value);
    return o[t] = n.value * 255, {
      type: dn,
      value: Ai(o)
    };
  };
}
const hf = bl("a"), mf = bl("r"), bf = bl("g"), yf = bl("b"), wf = yl("a"), kf = yl("r"), vf = yl("g"), jf = yl("b");
function Ev(t, r, e, n) {
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
function Sv(t, r, e, n, o) {
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
function Vv() {
  W("getColorAlpha", [Ue], hf), W("getColorAlpha", [dn], hf), W("getColorRed", [Ue], mf), W("getColorRed", [dn], mf), W("getColorGreen", [Ue], bf), W("getColorGreen", [dn], bf), W("getColorBlue", [Ue], yf), W("getColorBlue", [dn], yf), W("setColorAlpha", [Ue, gt], wf), W("setColorAlpha", [dn, gt], wf), W("setColorRed", [Ue, gt], kf), W("setColorRed", [dn, gt], kf), W("setColorGreen", [Ue, gt], vf), W("setColorGreen", [dn, gt], vf), W("setColorBlue", [Ue, gt], jf), W("setColorBlue", [dn, gt], jf), W("rgb", [gt, gt, gt], Ev), W("argb", [gt, gt, gt, gt], Sv);
}
function ii(t, r, e, n) {
  if (r.value < 0)
    throw new Error("Expecting non-negative number of milliseconds.");
  let o = pn(r.value) / pn(e);
  return Nn(t, o), n && (o = pn(o) % pn(n)), {
    type: ze,
    value: o
  };
}
const $d = 1e3, Fv = 60, e_ = 1e3 * 60, Iv = 60, t_ = 1e3 * 60 * 60, Dv = 24, Tv = 1e3 * 60 * 60 * 24, Mv = 1e3 * 60 * 60 * 24 * 7;
function Pv(t, r) {
  return ii(t, r, $d, Fv);
}
function Nv(t, r) {
  return ii(t, r, $d);
}
function zv(t, r) {
  return ii(t, r, e_, Iv);
}
function Lv(t, r) {
  return ii(t, r, e_);
}
function Ov(t, r) {
  return ii(t, r, t_, Dv);
}
function Bv(t, r) {
  return ii(t, r, t_);
}
function Rv(t, r) {
  return ii(t, r, Tv);
}
function Hv(t, r) {
  return ii(t, r, Mv);
}
function Wv() {
  W("getIntervalSeconds", [ze], Pv), W("getIntervalTotalSeconds", [ze], Nv), W("getIntervalMinutes", [ze], zv), W("getIntervalTotalMinutes", [ze], Lv), W("getIntervalHours", [ze], Ov), W("getIntervalTotalHours", [ze], Bv), W("getIntervalTotalDays", [ze], Rv), W("getIntervalTotalWeeks", [ze], Hv);
}
function Uv(t, r) {
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
    const o = Uv(e.value, n.map((i) => i.value));
    return hl(r, o, t);
  };
}
function Gi(t, r) {
  return (e, n, o, ...i) => {
    try {
      return t(e, o, ...i);
    } catch {
      let a = n.value;
      return r === "color" ? a = ni(a) : r === "url" && ho(a), {
        type: r,
        value: a
      };
    }
  };
}
const Ss = si(Ue), Vs = si(gt), Fs = si(ze), Is = si(Ur), Ds = si(dn), Ts = si($n), $l = si(cr), ea = si(ar), Cf = Gi(Ss, Ue), Af = Gi(Vs, gt), Ef = Gi(Fs, ze), Sf = Gi(Is, Ur), hs = Gi(Ds, dn), ms = Gi(Ts, $n);
function Gv(t, r, ...e) {
  try {
    return $l(t, r, ...e);
  } catch {
    return {
      type: cr,
      value: []
    };
  }
}
function Jv(t, r, ...e) {
  try {
    return ea(t, r, ...e);
  } catch {
    return {
      type: ar,
      value: {}
    };
  }
}
function qv(t, r, e) {
  return {
    type: Ur,
    value: e.value in r.value ? 1 : 0
  };
}
function Kv(t, r) {
  return {
    type: Ur,
    value: Object.keys(r.value).length ? 0 : 1
  };
}
function Yv(t, r) {
  return {
    type: ze,
    value: pn(Object.keys(r.value).length)
  };
}
function Vf(t, r) {
  return {
    type: cr,
    value: Object.keys(r.value)
  };
}
function Ff(t, r) {
  return {
    type: cr,
    value: Object.values(r.value)
  };
}
function Xv() {
  const t = {
    type: Ue,
    isVararg: !0
  };
  W("getDictString", [ar, t], Ss), W("getStringFromDict", [ar, t], Ss), W("getDictNumber", [ar, t], Vs), W("getNumberFromDict", [ar, t], Vs), W("getDictInteger", [ar, t], Fs), W("getIntegerFromDict", [ar, t], Fs), W("getDictBoolean", [ar, t], Is), W("getBooleanFromDict", [ar, t], Is), W("getDictColor", [ar, t], Ds), W("getColorFromDict", [ar, t], Ds), W("getDictUrl", [ar, t], Ts), W("getUrlFromDict", [ar, t], Ts), W("getDictOptString", [Ue, ar, t], Cf), W("getOptStringFromDict", [Ue, ar, t], Cf), W("getDictOptNumber", [gt, ar, t], Af), W("getOptNumberFromDict", [gt, ar, t], Af), W("getDictOptInteger", [ze, ar, t], Ef), W("getOptIntegerFromDict", [ze, ar, t], Ef), W("getDictOptBoolean", [Ur, ar, t], Sf), W("getOptBooleanFromDict", [Ur, ar, t], Sf), W("getDictOptColor", [dn, ar, t], hs), W("getOptColorFromDict", [dn, ar, t], hs), W("getDictOptColor", [Ue, ar, t], hs), W("getOptColorFromDict", [Ue, ar, t], hs), W("getDictOptUrl", [Ue, ar, t], ms), W("getOptUrlFromDict", [Ue, ar, t], ms), W("getDictOptUrl", [$n, ar, t], ms), W("getOptUrlFromDict", [$n, ar, t], ms), W("getDictFromDict", [ar, t], ea), W("getArrayFromDict", [ar, t], $l), W("getOptArrayFromDict", [ar, t], Gv), W("getOptDictFromDict", [ar, t], Jv), W("len", [ar], Yv), W("getDictKeys", [ar], Vf), W("getDictValues", [ar], Ff), Rr("getString", [ar, t], Ss), Rr("getBoolean", [ar, t], Is), Rr("getInteger", [ar, t], Fs), Rr("getNumber", [ar, t], Vs), Rr("getUrl", [ar, t], Ts), Rr("getColor", [ar, t], Ds), Rr("getArray", [ar, t], $l), Rr("getDict", [ar, t], ea), Rr("containsKey", [ar, Ue], qv), Rr("isEmpty", [ar], Kv), Rr("getKeys", [ar], Vf), Rr("getValues", [ar], Ff);
}
function li(t, r) {
  return (e, n, o) => {
    if (o.value < 0 || o.value >= n.value.length)
      throw new Error(`Requested index (${o.value}) out of bounds array size (${n.value.length}).`);
    let i = n.value[Number(o.value)], s = typeof i;
    if (t === "array" && !Array.isArray(i) || t !== "array" && s !== t || s === "object" && i === null)
      throw s === "object" && (Array.isArray(i) ? s = "Array" : i === null ? s = "Null" : s = "Dict"), new Error(`Incorrect value type: expected ${Yn(r)}, got ${Yn(s)}.`);
    if (t === "number" && r === "integer") {
      Nn(e, i);
      try {
        i = pn(i);
      } catch {
        throw new Error("Cannot convert value to integer.");
      }
    }
    return t === "string" && r === "color" && (i = ni(i)), t === "string" && r === "url" && ho(i), {
      type: r,
      value: i
    };
  };
}
function Ji(t, r) {
  return (e, n, o, i) => {
    try {
      return t(e, n, o);
    } catch {
      let a = i.value;
      return r === "color" ? a = ni(a) : r === "url" && ho(a), {
        type: r,
        value: a
      };
    }
  };
}
const Ms = li("string", "string"), Ps = li("number", "number"), Ns = li("number", "integer"), zs = li("boolean", "boolean"), Ls = li("string", "color"), Os = li("string", "url"), ta = li("array", "array"), ra = li("object", "dict"), If = Ji(Ms, "string"), Df = Ji(Ps, "number"), Tf = Ji(Ns, "integer"), Mf = Ji(zs, "boolean"), bs = Ji(Ls, "color"), ys = Ji(Os, "url");
function Zv(t, r, e) {
  try {
    return ta(t, r, e);
  } catch {
    return {
      type: cr,
      value: []
    };
  }
}
function Qv(t, r, e) {
  try {
    return ra(t, r, e);
  } catch {
    return {
      type: ar,
      value: {}
    };
  }
}
function xv(t, r) {
  return {
    type: ze,
    value: pn(r.value.length)
  };
}
function $v(t, r) {
  return {
    type: Ur,
    value: r.value.length === 0 ? 1 : 0
  };
}
function e2(t, r, e) {
  return r.value.length ? {
    type: cr,
    value: r.value.filter((n) => {
      const o = [];
      if (typeof n == "string")
        _o(n) && o.push([{
          type: dn,
          value: n
        }]), Q0(n) && o.push([{
          type: $n,
          value: n
        }]), o.push([{
          type: Ue,
          value: n
        }]);
      else if (typeof n == "number")
        Math.round(n) === n && (Nn(t, n), o.push([{
          type: ze,
          value: pn(n)
        }])), o.push([{
          type: gt,
          value: n
        }]);
      else if (typeof n == "bigint")
        Nn(t, n), o.push([{
          type: ze,
          value: n
        }]);
      else if (Array.isArray(n))
        o.push([{
          type: cr,
          value: n
        }]);
      else if (typeof n == "object") {
        if (n === null)
          throw new Error("Incorrect value type: Null");
        o.push([{
          type: ar,
          value: n
        }]);
      } else if (typeof n == "boolean")
        o.push([{
          type: Ur,
          value: n ? 1 : 0
        }]);
      else
        throw new Error(`Incorrect value type: ${Yn(typeof n)}`);
      let i = {
        type: "missing"
      };
      for (const u of o)
        if (i = Yd(e.value, u), "func" in i)
          break;
      let s;
      if ("func" in i)
        s = i.func;
      else {
        const u = e.value[0];
        r_(u.name || "Function", o[0], i, !0);
      }
      const a = s.args[0], l = hl(
        t,
        n,
        typeof a == "string" ? a : a.type
      ), c = s.cb(t, l);
      if (c.type !== Ur)
        throw new Error("Function must return boolean value.");
      return c.value;
    })
  } : {
    type: cr,
    value: []
  };
}
function t2() {
  W("getArrayString", [
    cr,
    ze
  ], Ms), W("getStringFromArray", [
    cr,
    ze
  ], Ms), W("getArrayNumber", [
    cr,
    ze
  ], Ps), W("getNumberFromArray", [
    cr,
    ze
  ], Ps), W("getArrayInteger", [
    cr,
    ze
  ], Ns), W("getIntegerFromArray", [
    cr,
    ze
  ], Ns), W("getArrayBoolean", [
    cr,
    ze
  ], zs), W("getBooleanFromArray", [
    cr,
    ze
  ], zs), W("getArrayColor", [
    cr,
    ze
  ], Ls), W("getColorFromArray", [
    cr,
    ze
  ], Ls), W("getArrayUrl", [
    cr,
    ze
  ], Os), W("getUrlFromArray", [
    cr,
    ze
  ], Os), W("getArrayFromArray", [
    cr,
    ze
  ], ta), W("getDictFromArray", [
    cr,
    ze
  ], ra), W("getArrayOptString", [
    cr,
    ze,
    Ue
  ], If), W("getOptStringFromArray", [
    cr,
    ze,
    Ue
  ], If), W("getArrayOptNumber", [
    cr,
    ze,
    gt
  ], Df), W("getOptNumberFromArray", [
    cr,
    ze,
    gt
  ], Df), W("getArrayOptInteger", [
    cr,
    ze,
    ze
  ], Tf), W("getOptIntegerFromArray", [
    cr,
    ze,
    ze
  ], Tf), W("getArrayOptBoolean", [
    cr,
    ze,
    Ur
  ], Mf), W("getOptBooleanFromArray", [
    cr,
    ze,
    Ur
  ], Mf), W("getArrayOptColor", [
    cr,
    ze,
    dn
  ], bs), W("getOptColorFromArray", [
    cr,
    ze,
    dn
  ], bs), W("getArrayOptColor", [
    cr,
    ze,
    Ue
  ], bs), W("getOptColorFromArray", [
    cr,
    ze,
    Ue
  ], bs), W("getArrayOptUrl", [
    cr,
    ze,
    $n
  ], ys), W("getOptUrlFromArray", [
    cr,
    ze,
    $n
  ], ys), W("getArrayOptUrl", [
    cr,
    ze,
    Ue
  ], ys), W("getOptUrlFromArray", [
    cr,
    ze,
    Ue
  ], ys), W("getOptArrayFromArray", [
    cr,
    ze
  ], Zv), W("getOptDictFromArray", [
    cr,
    ze
  ], Qv), W("len", [
    cr
  ], xv), Rr("getString", [cr, ze], Ms), Rr("getInteger", [cr, ze], Ns), Rr("getNumber", [cr, ze], Ps), Rr("getBoolean", [cr, ze], zs), Rr("getUrl", [cr, ze], Os), Rr("getColor", [cr, ze], Ls), Rr("getArray", [cr, ze], ta), Rr("getDict", [cr, ze], ra), Rr("isEmpty", [cr], $v), Rr("filter", [cr, Z0], e2);
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
      return t === "url" && ho(n.value), {
        type: t,
        value: n.value
      };
    } else t === "url" && ho(i);
    return hl(r, i, t);
  };
}
function r2() {
  W("getStoredIntegerValue", [Ue, ze], Eo(ze)), W("getStoredNumberValue", [Ue, gt], Eo(gt)), W("getStoredStringValue", [Ue, Ue], Eo(Ue)), W("getStoredUrlValue", [Ue, $n], Eo($n)), W("getStoredUrlValue", [Ue, Ue], Eo($n)), W("getStoredColorValue", [Ue, dn], Eo(dn)), W("getStoredColorValue", [Ue, Ue], Eo(dn)), W("getStoredBooleanValue", [Ue, Ur], Eo(Ur)), W("getStoredArrayValue", [Ue], Eo(cr)), W("getStoredDictValue", [Ue], Eo(ar));
}
function n2() {
  return {
    type: gt,
    value: Math.PI
  };
}
function o2(t, r) {
  return {
    type: gt,
    value: r.value / 180 * Math.PI
  };
}
function i2(t, r) {
  return {
    type: gt,
    value: r.value / Math.PI * 180
  };
}
function s2(t, r) {
  return {
    type: gt,
    value: Math.sin(r.value)
  };
}
function l2(t, r) {
  return {
    type: gt,
    value: Math.cos(r.value)
  };
}
function a2(t, r) {
  return {
    type: gt,
    value: Math.tan(r.value)
  };
}
function c2(t, r) {
  const e = Math.tan(r.value);
  if (Math.abs(e) < 1e-12)
    throw new Error("Cotangent is undefined for the given value.");
  return {
    type: gt,
    value: 1 / e
  };
}
function u2(t, r) {
  return {
    type: gt,
    value: Math.atan(r.value)
  };
}
function f2(t, r, e) {
  return {
    type: gt,
    value: Math.atan2(r.value, e.value)
  };
}
function d2(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arcsine is undefined for the given value.");
  return {
    type: gt,
    value: Math.asin(r.value)
  };
}
function _2(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arccosine is undefined for the given value.");
  return {
    type: gt,
    value: Math.acos(r.value)
  };
}
function p2() {
  W("pi", [], n2), W("toRadians", [gt], o2), W("toDegrees", [gt], i2), W("sin", [gt], s2), W("cos", [gt], l2), W("tan", [gt], a2), W("cot", [gt], c2), W("atan", [gt], u2), W("atan2", [gt, gt], f2), W("asin", [gt], d2), W("acos", [gt], _2);
}
function g2() {
  ck(), zk(), Wv(), Qk(), Av(), Vv(), Xv(), t2(), r2(), p2();
}
g2();
function h2(t, r) {
  return {
    type: Ue,
    value: r.value
  };
}
function m2(t, r) {
  return {
    type: gt,
    value: r.value
  };
}
function b2(t, r) {
  return Nn(t, r.value), {
    type: ze,
    value: r.value
  };
}
function y2(t, r) {
  return {
    type: Ur,
    value: r.value ? 1 : 0
  };
}
function w2(t, r) {
  const e = qs(On(t, r.argument));
  switch (r.operator) {
    case "!":
      if (e.type === Ur)
        return {
          type: Ur,
          value: e.value ? 0 : 1
        };
      Sn(`${r.operator}${_n(e)}`, "A Boolean is expected after a unary not.");
    case "+":
    case "-":
      const n = r.operator === "+" ? 1 : -1;
      if (e.type === ze) {
        const o = e.value * pn(n);
        return Nn(t, o), {
          type: ze,
          value: o
        };
      } else {
        if (e.type === gt)
          return {
            type: gt,
            value: e.value * n
          };
        Sn(
          `${r.operator}${_n(e)}`,
          `A Number is expected after a unary ${r.operator === "+" ? "plus" : "minus"}.`
        );
      }
  }
}
function k2(t, r) {
  const e = qs(On(t, r.test));
  if (e.type === Ur)
    return e.value ? On(t, r.consequent) : On(t, r.alternate);
  Sn(
    `${_n(e)} ? ${_n(On(t, r.consequent))} : ${_n(On(t, r.alternate))}`,
    "Ternary must be called with a Boolean value as a condition."
  );
}
function v2(t, r) {
  try {
    return On(t, r.test);
  } catch {
    return On(t, r.alternate);
  }
}
function j2(t, r) {
  let e = "";
  if (r.quasis.length === 2 && r.quasis[0].value === "" && r.quasis[1].value === "")
    return On(t, r.expressions[0]);
  for (let n = 0; n < r.expressions.length; ++n)
    e += r.quasis[n].value, e += ji(On(t, r.expressions[n]), !0);
  return e += r.quasis[r.quasis.length - 1].value, {
    type: Ue,
    value: e
  };
}
function C2(t, r) {
  const e = qs(On(t, r.left));
  if (e.type !== Ur && Sn(
    `${_n(e)} ${r.operator} ...`,
    `'${r.operator}' must be called with boolean operands.`
  ), r.operator === "||" && e.value)
    return e;
  if (r.operator === "&&" && !e.value)
    return {
      type: Ur,
      value: 0
    };
  const n = qs(On(t, r.right));
  return n.type !== Ur && Sn(
    `${_n(e)} ${r.operator} ${_n(n)}`,
    `Operator '${r.operator}' cannot be applied to different types: Boolean and ${Yn(n.type)}.`
  ), {
    type: Ur,
    value: n.value
  };
}
function A2(t, r, e) {
  let n;
  return r.type === Nr && e.type === Nr ? n = r.value.getTime() === e.value.getTime() : n = r.value === e.value, t === "!=" && (n = !n), {
    type: Ur,
    value: n ? 1 : 0
  };
}
function E2(t, r, e) {
  (r.type !== gt && r.type !== ze && r.type !== Nr || e.type !== gt && e.type !== ze && e.type !== Nr) && Sn(
    `${_n(r)} ${t} ${_n(e)}`,
    `Operator '${t}' cannot be applied to ${Yn(r.type)} type.`
  );
  let n;
  const o = r.type === Nr ? r.value.getTime() : r.value, i = e.type === Nr ? e.value.getTime() : e.value;
  return t === ">" ? n = o > i : t === ">=" ? n = o >= i : t === "<" ? n = o < i : n = o <= i, {
    type: Ur,
    value: n ? 1 : 0
  };
}
function S2(t, r, e, n) {
  if (e.type !== Ue && e.type !== gt && e.type !== ze && Sn(
    `${_n(e)} ${r} ${_n(n)}`,
    `Operator '${r}' cannot be applied to ${Yn(e.type)} type.`
  ), e.type === Ue)
    return r === "-" && Sn(
      `${_n(e)} - ${_n(n)}`,
      `Operator '${r}' cannot be applied to ${Yn(e.type)} type.`
    ), {
      type: Ue,
      value: e.value + n.value
    };
  let o = r === "+" ? e.value + n.value : e.value - n.value;
  if (e.type === ze)
    try {
      o = Ci(t, o), Nn(t, o);
    } catch (i) {
      Sn(
        `${_n(e)} ${r} ${_n(n)}`,
        i.message
      );
    }
  return {
    type: e.type,
    value: o
  };
}
function V2(t, r, e, n) {
  e.type !== ze && e.type !== gt && Sn(
    `${_n(e)} ${r} ${_n(n)}`,
    `Operator '${r}' cannot be applied to ${Yn(e.type)} type.`
  );
  let o;
  if (r === "*")
    o = e.value * n.value;
  else if (r === "/" || r === "%")
    Number(n.value) === 0 && Sn(
      `${_n(e)} ${r} ${_n(n)}`,
      "Division by zero is not supported."
    ), r === "/" ? o = e.value / n.value : o = e.value % n.value;
  else
    throw new Error(`Unsupported operation ${r}`);
  if (e.type === ze)
    try {
      o = Ci(t, o), Nn(t, o);
    } catch (i) {
      Sn(
        `${_n(e)} ${r} ${_n(n)}`,
        i.message
      );
    }
  return {
    type: e.type,
    value: o
  };
}
function F2(t, r) {
  const e = r.operator;
  let n = On(t, r.left), o = On(t, r.right);
  if ((n.type === "number" && o.type === "integer" || n.type === "integer" && o.type === "number") && (n.type === "integer" ? n = Gl(n) : o.type === "integer" && (o = Gl(o))), n.type !== o.type && Sn(
    `${_n(n)} ${r.operator} ${_n(o)}`,
    `Operator '${e}' cannot be applied to different types: ${Yn(n.type)} and ${Yn(o.type)}.`
  ), e === "==" || e === "!=")
    return A2(e, n, o);
  if (e === ">" || e === ">=" || e === "<" || e === "<=")
    return E2(e, n, o);
  if (e === "+" || e === "-")
    return S2(t, e, n, o);
  if (e === "/" || e === "*" || e === "%")
    return V2(t, e, n, o);
  throw new Error(`Unsupported operation ${e}`);
}
function Qs(t) {
  return t.map(_n).join(", ");
}
function I2(t, r) {
  const e = r.callee.name;
  let n, o = r.arguments.map((a) => On(t, a));
  const i = e + ":" + o.map((a) => a.type).join("#");
  let s;
  if (t.customFunctions && (s = Zl(t.customFunctions, e, o)), !s || !("func" in s))
    if (Yl.has(i))
      s = {
        func: Yl.get(i),
        conversions: 0
      };
    else {
      const a = Zl(As, e, o);
      ("func" in a || !s || s.type === "missing") && (s = a);
    }
  if (s && (("expected" in s || "type" in s && s.type === "missing") && r_(e, o, s), n = s.func, s.conversions && (o = Xd(n, o))), !n)
    throw new Error("Function not found");
  try {
    return n.cb(t, ...o);
  } catch (a) {
    if (a && a instanceof ya)
      throw a;
    const l = `${e}(${Qs(o)})`;
    Sn(l, a.message);
  }
}
function r_(t, r, e, n = !1) {
  const o = r.map((a) => Yn(a.type)).join(", "), i = `${t}(${Qs(r)})`, s = n ? $0 : Sn;
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
function D2(t, r) {
  const e = r.method.name;
  let n, o = [r.object, ...r.arguments].map((s) => On(t, s));
  const i = e + ":" + o.map((s) => s.type).join("#");
  if (Xl.has(i))
    n = Xl.get(i);
  else {
    const s = Zl(Es, e, o);
    if ("expected" in s || "type" in s && s.type === "missing") {
      const a = o.slice(1).map((c) => Yn(c.type)).join(", "), l = `${e}(${Qs(o.slice(1))})`;
      s.type === "few" && o.length === 1 ? Sn(l, "Method requires non empty argument list.") : s.type === "many" ? Sn(l, `Method has no matching overload for given argument types: ${a}.`) : s.type === "few" || s.type === "mismatch" ? Sn(l, `Method has no matching overload for given argument types: ${a}.`) : Sn(l, `Unknown method name: ${e}.`);
    }
    n = s.func, s.conversions && (o = Xd(n, o));
  }
  if (!n)
    throw new Error("Method not found");
  try {
    return n.cb(t, ...o);
  } catch (s) {
    if (s && s instanceof ya)
      throw s;
    const a = `${e}(${Qs(o.slice(1))})`;
    Sn(a, s.message);
  }
}
function T2(t, r) {
  var i;
  const e = r.id.name, n = (i = t.customFunctions) == null ? void 0 : i.get(e);
  if (n)
    return {
      type: "function",
      value: n
    };
  const o = t.variables.get(e);
  if (o)
    return _1(o);
  throw new Error(`Variable '${e}' is missing.`);
}
const Pf = {
  StringLiteral: h2,
  NumberLiteral: m2,
  IntegerLiteral: b2,
  BooleanLiteral: y2,
  UnaryExpression: w2,
  ConditionalExpression: k2,
  TryExpression: v2,
  TemplateLiteral: j2,
  LogicalExpression: C2,
  BinaryExpression: F2,
  CallExpression: I2,
  MethodExpression: D2,
  Variable: T2
};
function On(t, r) {
  if (r.type in Pf)
    return Pf[r.type](t, r);
  throw new Error("Unsupported expression");
}
function ja(t, r, e, n, o) {
  try {
    const i = {
      variables: t,
      customFunctions: r,
      warnings: [],
      store: e,
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
function M2(t, r) {
  return r && r[3] && r[7] ? { type: "ConditionalExpression", test: t, consequent: r[3], alternate: r[7] } : t;
}
function P2(t, r) {
  return r && r[3] ? { type: "TryExpression", test: t, alternate: r[3] } : t;
}
function ws(t, r) {
  return r.length ? r.reduce((e, n) => ({
    type: "BinaryExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), t) : t;
}
function Nf(t, r) {
  return r.length ? r.reduce((e, n) => ({
    type: "LogicalExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), t) : t;
}
function N2(t, r) {
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
function z2(t) {
  return t === "true" || t === "false" ? { type: "BooleanLiteral", value: t === "true" } : { type: "Variable", id: { type: "Identifier", name: t } };
}
function zf(t) {
  if (t.every((e) => typeof e == "string"))
    return { type: "StringLiteral", value: t.join("") };
  let r = t.reduce((e, n) => (typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e), []).reduce((e, n) => (typeof n == "string" ? e.quasis.push({ type: "StringLiteral", value: n }) : (e.quasis.length === e.expressions.length && e.quasis.push({ type: "StringLiteral", value: "" }), e.expressions.push(n)), e), {
    type: "TemplateLiteral",
    quasis: [],
    expressions: []
  });
  return r.quasis.length === r.expressions.length && r.quasis.push({ type: "StringLiteral", value: "" }), r;
}
function L2(t) {
  try {
    return pn(t);
  } catch {
    throw new Error(`Value ${t} can't be converted to Integer type.`);
  }
}
function Lf(t) {
  if (t === "'" || t === "\\")
    return t;
  throw new Error("Incorrect string escape");
}
function O2(t, r) {
  function e() {
    this.constructor = t;
  }
  e.prototype = r.prototype, t.prototype = new e();
}
function Bi(t, r, e, n) {
  var o = Error.call(this, t);
  return Object.setPrototypeOf && Object.setPrototypeOf(o, Bi.prototype), o.expected = r, o.found = e, o.location = n, o.name = "SyntaxError", o;
}
O2(Bi, Error);
function Ml(t, r, e) {
  return e = e || " ", t.length > r ? t : (r -= t.length, e += e.repeat(r), t + e.slice(0, r));
}
Bi.prototype.format = function(t) {
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
      var a = this.location.end, l = Ml("", i.line.toString().length, " "), c = e[o.line - 1], u = o.line === a.line ? a.column : c.length + 1, f = u - o.column || 1;
      r += `
 --> ` + s + `
` + l + ` |
` + i.line + " | " + c + `
` + l + " | " + Ml("", o.column - 1, " ") + Ml("", f, "^");
    } else
      r += `
 at ` + s;
  }
  return r;
};
Bi.buildMessage = function(t, r) {
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
function n_(t, r) {
  r = r !== void 0 ? r : {};
  var e = {}, n = r.grammarSource, o = { start: Xr, JsonStringContents: gn }, i = Xr, s = "@{", a = "}", l = "@{}", c = "\\", u = "?", f = ":", _ = "!:", h = "||", m = "&&", p = "==", w = "!=", k = ">=", N = ">", R = "<=", L = "<", re = "+", ue = "-", T = "/", Y = "*", le = "%", A = "!", D = ".", M = "(", U = ")", Z = ",", me = "'", Ae = "e", ve = "E", he = /^[^}]/, Se = /^[^'}]/, Q = /^[0-9]/, xe = /^[a-zA-Z_]/, qe = /^[a-zA-Z_0-9]/, Ke = /^[ \t\r\n]/, be = Xe("@{", !1), Te = Xe("}", !1), pe = Xe("@{}", !1), ge = Xe("\\", !1), de = qt(), ee = at(["}"], !0, !1), ae = Xe("?", !1), ne = Xe(":", !1), we = Xe("!:", !1), Re = Xe("||", !1), Ye = Xe("&&", !1), $ = Xe("==", !1), Le = Xe("!=", !1), Ne = Xe(">=", !1), ot = Xe(">", !1), ut = Xe("<=", !1), rt = Xe("<", !1), yt = Xe("+", !1), nt = Xe("-", !1), Pt = Xe("/", !1), ft = Xe("*", !1), q = Xe("%", !1), fe = Xe("!", !1), st = Xe(".", !1), Me = Xe("(", !1), I = Xe(")", !1), Ct = Xe(",", !1), lt = pr("string"), St = Xe("'", !1), Dt = at(["'", "}"], !0, !1), tt = pr("integer"), X = at([["0", "9"]], !1, !1), Et = pr("number"), Tt = Xe("e", !1), $t = Xe("E", !1), Kt = at([["a", "z"], ["A", "Z"], "_"], !1, !1), je = at([["a", "z"], ["A", "Z"], "_", ["0", "9"]], !1, !1), He = pr("whitespace"), pt = at([" ", "	", "\r", `
`], !1, !1), Ve = function(b) {
    return b;
  }, $e = function(b) {
    return zf(b);
  }, Be = function(b) {
    return b;
  }, Vt = function() {
    return "";
  }, Oe = function() {
    return Ht();
  }, bt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, Gt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, It = function(b) {
    return b;
  }, _r = function(b) {
    return Lf(b);
  }, Fe = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, vt = function(b, V) {
    return M2(b, V);
  }, or = function(b, V) {
    return P2(b, V);
  }, tr = function(b, V) {
    return Nf(b, V);
  }, Qt = function(b, V) {
    return Nf(b, V);
  }, hr = function(b, V) {
    return ws(b, V);
  }, kr = function(b, V) {
    return ws(b, V);
  }, Mt = function(b, V) {
    return ws(b, V);
  }, br = function(b, V) {
    return ws(b, V);
  }, Wt = function(b) {
    return b;
  }, _t = function(b) {
    return b;
  }, er = function(b, V) {
    return { type: "UnaryExpression", operator: b, argument: V };
  }, ie = function() {
    throw new Error("Incorrect unary operator");
  }, yr = function(b, V) {
    return N2(b, V);
  }, vr = function(b, V) {
    return { type: "CallExpression", callee: b, arguments: V };
  }, jt = function(b, V) {
    return [b, ...V];
  }, Ir = function(b) {
    return b;
  }, qr = function(b) {
    return b;
  }, lr = function(b) {
    return zf(b);
  }, it = function(b) {
    return b;
  }, At = function() {
    return "";
  }, Jt = function() {
    return Ht();
  }, Yt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, sr = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, dt = function(b) {
    return b;
  }, ce = function(b) {
    return Lf(b);
  }, kt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, nr = function() {
    return { type: "IntegerLiteral", value: L2(Ht()) };
  }, Xt = function() {
    return { type: "NumberLiteral", value: parseFloat(Ht()) };
  }, jr = function() {
    return { type: "NumberLiteral", value: parseFloat(Ht()) };
  }, v = function() {
    const b = Ht();
    if (/\.\./.test(b) || /\.$/.test(b))
      throw new Error("Unexpected token: .");
    return z2(b);
  }, se = function() {
    return { type: "Identifier", name: Ht() };
  }, d = 0, z = 0, Ie = [{ line: 1, column: 1 }], We = 0, ke = [], B = 0, Ut;
  if ("startRule" in r) {
    if (!(r.startRule in o))
      throw new Error(`Can't start parsing from rule "` + r.startRule + '".');
    i = o[r.startRule];
  }
  function Ht() {
    return t.substring(z, d);
  }
  function Xe(b, V) {
    return { type: "literal", text: b, ignoreCase: V };
  }
  function at(b, V, x) {
    return { type: "class", parts: b, inverted: V, ignoreCase: x };
  }
  function qt() {
    return { type: "any" };
  }
  function Vr() {
    return { type: "end" };
  }
  function pr(b) {
    return { type: "other", description: b };
  }
  function Pr(b) {
    var V = Ie[b], x;
    if (V)
      return V;
    for (x = b - 1; !Ie[x]; )
      x--;
    for (V = Ie[x], V = {
      line: V.line,
      column: V.column
    }; x < b; )
      t.charCodeAt(x) === 10 ? (V.line++, V.column = 1) : V.column++, x++;
    return Ie[b] = V, V;
  }
  function An(b, V, x) {
    var P = Pr(b), Ce = Pr(V), ye = {
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
  function Ee(b) {
    d < We || (d > We && (We = d, ke = []), ke.push(b));
  }
  function Yr(b, V, x) {
    return new Bi(
      Bi.buildMessage(b, V),
      b,
      V,
      x
    );
  }
  function Xr() {
    var b, V;
    return b = d, Lt(), V = C(), V !== e ? (Lt(), z = b, b = Ve(V)) : (d = b, b = e), b;
  }
  function gn() {
    var b, V, x;
    for (b = d, V = [], x = y(); x !== e; )
      V.push(x), x = y();
    return z = b, V = $e(V), b = V, b;
  }
  function y() {
    var b, V, x, P, Ce;
    if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, B === 0 && Ee(be)), V !== e ? (x = Lt(), P = C(), P !== e ? (Lt(), t.charCodeAt(d) === 125 ? (Ce = a, d++) : (Ce = e, B === 0 && Ee(Te)), Ce !== e ? (z = b, b = Be(P)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.substr(d, 3) === l ? (V = l, d += 3) : (V = e, B === 0 && Ee(pe)), V !== e && (z = b, V = Vt()), b = V, b === e && (b = d, V = d, B++, t.charCodeAt(d) === 92 ? (x = c, d++) : (x = e, B === 0 && Ee(ge)), x === e && (t.substr(d, 2) === s ? (x = s, d += 2) : (x = e, B === 0 && Ee(be))), B--, x === e ? V = void 0 : (d = V, V = e), V !== e ? (t.length > d ? (x = t.charAt(d), d++) : (x = e, B === 0 && Ee(de)), x !== e ? (z = b, b = Oe()) : (d = b, b = e)) : (d = b, b = e), b === e))) {
      if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, B === 0 && Ee(be)), V !== e) {
        if (x = [], he.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, B === 0 && Ee(ee)), P !== e)
          for (; P !== e; )
            x.push(P), he.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, B === 0 && Ee(ee));
        else
          x = e;
        x !== e ? (t.charCodeAt(d) === 125 ? (P = a, d++) : (P = e, B === 0 && Ee(Te)), P !== e ? (z = b, b = bt()) : (d = b, b = e)) : (d = b, b = e);
      } else
        d = b, b = e;
      b === e && (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, B === 0 && Ee(be)), V !== e && (z = b, V = Gt()), b = V, b === e && (b = d, t.charCodeAt(d) === 92 ? (V = c, d++) : (V = e, B === 0 && Ee(ge)), V !== e ? (t.substr(d, 2) === s ? (x = s, d += 2) : (x = e, B === 0 && Ee(be)), x !== e ? (z = b, b = It(x)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = c, d++) : (V = e, B === 0 && Ee(ge)), V !== e ? (t.length > d ? (x = t.charAt(d), d++) : (x = e, B === 0 && Ee(de)), x !== e ? (z = b, b = _r(x)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = c, d++) : (V = e, B === 0 && Ee(ge)), V !== e && (z = b, V = Fe()), b = V))));
    }
    return b;
  }
  function C() {
    var b, V, x, P, Ce, ye, Ot, Bt, Jr, Mr, Br;
    return b = d, V = S(), V !== e ? (x = d, P = Lt(), t.charCodeAt(d) === 63 ? (Ce = u, d++) : (Ce = e, B === 0 && Ee(ae)), Ce !== e ? (ye = Lt(), Ot = C(), Ot !== e ? (Bt = Lt(), t.charCodeAt(d) === 58 ? (Jr = f, d++) : (Jr = e, B === 0 && Ee(ne)), Jr !== e ? (Mr = Lt(), Br = C(), Br !== e ? (P = [P, Ce, ye, Ot, Bt, Jr, Mr, Br], x = P) : (d = x, x = e)) : (d = x, x = e)) : (d = x, x = e)) : (d = x, x = e), x === e && (x = null), z = b, b = vt(V, x)) : (d = b, b = e), b;
  }
  function S() {
    var b, V, x, P, Ce, ye, Ot;
    return b = d, V = oe(), V !== e ? (x = d, P = Lt(), t.substr(d, 2) === _ ? (Ce = _, d += 2) : (Ce = e, B === 0 && Ee(we)), Ce !== e ? (ye = Lt(), Ot = C(), Ot !== e ? (P = [P, Ce, ye, Ot], x = P) : (d = x, x = e)) : (d = x, x = e), x === e && (x = null), z = b, b = or(V, x)) : (d = b, b = e), b;
  }
  function oe() {
    var b, V, x, P, Ce, ye, Ot, Bt;
    if (b = d, V = O(), V !== e) {
      for (x = [], P = d, Ce = Lt(), t.substr(d, 2) === h ? (ye = h, d += 2) : (ye = e, B === 0 && Ee(Re)), ye !== e ? (Ot = Lt(), Bt = O(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        x.push(P), P = d, Ce = Lt(), t.substr(d, 2) === h ? (ye = h, d += 2) : (ye = e, B === 0 && Ee(Re)), ye !== e ? (Ot = Lt(), Bt = O(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e);
      z = b, b = tr(V, x);
    } else
      d = b, b = e;
    return b;
  }
  function O() {
    var b, V, x, P, Ce, ye, Ot, Bt;
    if (b = d, V = et(), V !== e) {
      for (x = [], P = d, Ce = Lt(), t.substr(d, 2) === m ? (ye = m, d += 2) : (ye = e, B === 0 && Ee(Ye)), ye !== e ? (Ot = Lt(), Bt = et(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        x.push(P), P = d, Ce = Lt(), t.substr(d, 2) === m ? (ye = m, d += 2) : (ye = e, B === 0 && Ee(Ye)), ye !== e ? (Ot = Lt(), Bt = et(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e);
      z = b, b = Qt(V, x);
    } else
      d = b, b = e;
    return b;
  }
  function et() {
    var b, V, x, P, Ce, ye, Ot, Bt;
    if (b = d, V = De(), V !== e) {
      for (x = [], P = d, Ce = Lt(), t.substr(d, 2) === p ? (ye = p, d += 2) : (ye = e, B === 0 && Ee($)), ye === e && (t.substr(d, 2) === w ? (ye = w, d += 2) : (ye = e, B === 0 && Ee(Le))), ye !== e ? (Ot = Lt(), Bt = De(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        x.push(P), P = d, Ce = Lt(), t.substr(d, 2) === p ? (ye = p, d += 2) : (ye = e, B === 0 && Ee($)), ye === e && (t.substr(d, 2) === w ? (ye = w, d += 2) : (ye = e, B === 0 && Ee(Le))), ye !== e ? (Ot = Lt(), Bt = De(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e);
      z = b, b = hr(V, x);
    } else
      d = b, b = e;
    return b;
  }
  function De() {
    var b, V, x, P, Ce, ye, Ot, Bt;
    if (b = d, V = Zt(), V !== e) {
      for (x = [], P = d, Ce = Lt(), t.substr(d, 2) === k ? (ye = k, d += 2) : (ye = e, B === 0 && Ee(Ne)), ye === e && (t.charCodeAt(d) === 62 ? (ye = N, d++) : (ye = e, B === 0 && Ee(ot)), ye === e && (t.substr(d, 2) === R ? (ye = R, d += 2) : (ye = e, B === 0 && Ee(ut)), ye === e && (t.charCodeAt(d) === 60 ? (ye = L, d++) : (ye = e, B === 0 && Ee(rt))))), ye !== e ? (Ot = Lt(), Bt = Zt(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        x.push(P), P = d, Ce = Lt(), t.substr(d, 2) === k ? (ye = k, d += 2) : (ye = e, B === 0 && Ee(Ne)), ye === e && (t.charCodeAt(d) === 62 ? (ye = N, d++) : (ye = e, B === 0 && Ee(ot)), ye === e && (t.substr(d, 2) === R ? (ye = R, d += 2) : (ye = e, B === 0 && Ee(ut)), ye === e && (t.charCodeAt(d) === 60 ? (ye = L, d++) : (ye = e, B === 0 && Ee(rt))))), ye !== e ? (Ot = Lt(), Bt = Zt(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e);
      z = b, b = kr(V, x);
    } else
      d = b, b = e;
    return b;
  }
  function Zt() {
    var b, V, x, P, Ce, ye, Ot, Bt;
    if (b = d, V = Ft(), V !== e) {
      for (x = [], P = d, Ce = Lt(), t.charCodeAt(d) === 43 ? (ye = re, d++) : (ye = e, B === 0 && Ee(yt)), ye === e && (t.charCodeAt(d) === 45 ? (ye = ue, d++) : (ye = e, B === 0 && Ee(nt))), ye !== e ? (Ot = Lt(), Bt = Ft(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        x.push(P), P = d, Ce = Lt(), t.charCodeAt(d) === 43 ? (ye = re, d++) : (ye = e, B === 0 && Ee(yt)), ye === e && (t.charCodeAt(d) === 45 ? (ye = ue, d++) : (ye = e, B === 0 && Ee(nt))), ye !== e ? (Ot = Lt(), Bt = Ft(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e);
      z = b, b = Mt(V, x);
    } else
      d = b, b = e;
    return b;
  }
  function Ft() {
    var b, V, x, P, Ce, ye, Ot, Bt;
    if (b = d, V = Je(), V !== e) {
      for (x = [], P = d, Ce = Lt(), t.charCodeAt(d) === 47 ? (ye = T, d++) : (ye = e, B === 0 && Ee(Pt)), ye === e && (t.charCodeAt(d) === 42 ? (ye = Y, d++) : (ye = e, B === 0 && Ee(ft)), ye === e && (t.charCodeAt(d) === 37 ? (ye = le, d++) : (ye = e, B === 0 && Ee(q)))), ye !== e ? (Ot = Lt(), Bt = Je(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        x.push(P), P = d, Ce = Lt(), t.charCodeAt(d) === 47 ? (ye = T, d++) : (ye = e, B === 0 && Ee(Pt)), ye === e && (t.charCodeAt(d) === 42 ? (ye = Y, d++) : (ye = e, B === 0 && Ee(ft)), ye === e && (t.charCodeAt(d) === 37 ? (ye = le, d++) : (ye = e, B === 0 && Ee(q)))), ye !== e ? (Ot = Lt(), Bt = Je(), Bt !== e ? (Ce = [Ce, ye, Ot, Bt], P = Ce) : (d = P, P = e)) : (d = P, P = e);
      z = b, b = br(V, x);
    } else
      d = b, b = e;
    return b;
  }
  function Je() {
    var b, V, x, P;
    return b = d, V = d, B++, t.charCodeAt(d) === 45 ? (x = ue, d++) : (x = e, B === 0 && Ee(nt)), B--, x !== e ? (d = V, V = void 0) : V = e, V !== e ? (x = Bn(), x !== e ? (z = b, b = Wt(x)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, V = d, B++, t.charCodeAt(d) === 45 ? (x = ue, d++) : (x = e, B === 0 && Ee(nt)), B--, x !== e ? (d = V, V = void 0) : V = e, V !== e ? (x = zn(), x !== e ? (z = b, b = _t(x)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 33 ? (V = A, d++) : (V = e, B === 0 && Ee(fe)), V === e && (t.charCodeAt(d) === 43 ? (V = re, d++) : (V = e, B === 0 && Ee(yt)), V === e && (t.charCodeAt(d) === 45 ? (V = ue, d++) : (V = e, B === 0 && Ee(nt)))), V !== e ? (x = Lt(), P = rr(), P === e && (P = ht()), P !== e ? (z = b, b = er(V, P)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = ht()))), b;
  }
  function rr() {
    var b, V;
    return b = d, t.charCodeAt(d) === 43 ? (V = re, d++) : (V = e, B === 0 && Ee(yt)), V === e && (t.charCodeAt(d) === 45 ? (V = ue, d++) : (V = e, B === 0 && Ee(nt))), V !== e && (z = b, V = ie()), b = V, b;
  }
  function ht() {
    var b, V, x, P, Ce, ye, Ot, Bt, Jr, Mr, Br, mo, to, ro, Qn;
    if (b = d, V = Sr(), V !== e) {
      for (x = [], P = d, Ce = Lt(), t.charCodeAt(d) === 46 ? (ye = D, d++) : (ye = e, B === 0 && Ee(st)), ye !== e ? (Ot = Lt(), Bt = Tn(), Bt !== e ? (Jr = Lt(), Mr = d, t.charCodeAt(d) === 40 ? (Br = M, d++) : (Br = e, B === 0 && Ee(Me)), Br !== e ? (mo = Lt(), to = Tr(), to !== e ? (ro = Lt(), t.charCodeAt(d) === 41 ? (Qn = U, d++) : (Qn = e, B === 0 && Ee(I)), Qn !== e ? (Br = [Br, mo, to, ro, Qn], Mr = Br) : (d = Mr, Mr = e)) : (d = Mr, Mr = e)) : (d = Mr, Mr = e), Mr === e && (Mr = null), Ce = [Ce, ye, Ot, Bt, Jr, Mr], P = Ce) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        x.push(P), P = d, Ce = Lt(), t.charCodeAt(d) === 46 ? (ye = D, d++) : (ye = e, B === 0 && Ee(st)), ye !== e ? (Ot = Lt(), Bt = Tn(), Bt !== e ? (Jr = Lt(), Mr = d, t.charCodeAt(d) === 40 ? (Br = M, d++) : (Br = e, B === 0 && Ee(Me)), Br !== e ? (mo = Lt(), to = Tr(), to !== e ? (ro = Lt(), t.charCodeAt(d) === 41 ? (Qn = U, d++) : (Qn = e, B === 0 && Ee(I)), Qn !== e ? (Br = [Br, mo, to, ro, Qn], Mr = Br) : (d = Mr, Mr = e)) : (d = Mr, Mr = e)) : (d = Mr, Mr = e), Mr === e && (Mr = null), Ce = [Ce, ye, Ot, Bt, Jr, Mr], P = Ce) : (d = P, P = e)) : (d = P, P = e);
      z = b, b = yr(V, x);
    } else
      d = b, b = e;
    return b;
  }
  function Sr() {
    var b, V, x, P, Ce;
    return b = d, V = Tn(), V !== e ? (Lt(), t.charCodeAt(d) === 40 ? (x = M, d++) : (x = e, B === 0 && Ee(Me)), x !== e ? (Lt(), P = Tr(), P !== e ? (Lt(), t.charCodeAt(d) === 41 ? (Ce = U, d++) : (Ce = e, B === 0 && Ee(I)), Ce !== e ? (z = b, b = vr(V, P)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = yn()), b;
  }
  function Tr() {
    var b, V, x, P, Ce, ye;
    if (b = d, V = C(), V !== e) {
      for (x = [], P = d, Lt(), t.charCodeAt(d) === 44 ? (Ce = Z, d++) : (Ce = e, B === 0 && Ee(Ct)), Ce !== e ? (Lt(), ye = C(), ye !== e ? P = ye : (d = P, P = e)) : (d = P, P = e); P !== e; )
        x.push(P), P = d, Lt(), t.charCodeAt(d) === 44 ? (Ce = Z, d++) : (Ce = e, B === 0 && Ee(Ct)), Ce !== e ? (Lt(), ye = C(), ye !== e ? P = ye : (d = P, P = e)) : (d = P, P = e);
      z = b, b = jt(V, x);
    } else
      d = b, b = e;
    return b === e && (b = Lt()), b;
  }
  function yn() {
    var b, V, x, P;
    return b = so(), b === e && (b = xr(), b === e && (b = Bn(), b === e && (b = zn(), b === e && (b = d, t.charCodeAt(d) === 40 ? (V = M, d++) : (V = e, B === 0 && Ee(Me)), V !== e ? (Lt(), x = C(), x !== e ? (Lt(), t.charCodeAt(d) === 41 ? (P = U, d++) : (P = e, B === 0 && Ee(I)), P !== e ? (z = b, b = Ir(x)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e))))), b;
  }
  function xr() {
    var b, V, x, P;
    return B++, b = d, t.charCodeAt(d) === 39 ? (V = me, d++) : (V = e, B === 0 && Ee(St)), V !== e ? (x = Hr(), t.charCodeAt(d) === 39 ? (P = me, d++) : (P = e, B === 0 && Ee(St)), P !== e ? (z = b, b = qr(x)) : (d = b, b = e)) : (d = b, b = e), B--, b === e && (V = e, B === 0 && Ee(lt)), b;
  }
  function Hr() {
    var b, V, x;
    for (b = d, V = [], x = nn(); x !== e; )
      V.push(x), x = nn();
    return z = b, V = lr(V), b = V, b;
  }
  function nn() {
    var b, V, x, P, Ce;
    if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, B === 0 && Ee(be)), V !== e ? (x = Lt(), P = C(), P !== e ? (Lt(), t.charCodeAt(d) === 125 ? (Ce = a, d++) : (Ce = e, B === 0 && Ee(Te)), Ce !== e ? (z = b, b = it(P)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.substr(d, 3) === l ? (V = l, d += 3) : (V = e, B === 0 && Ee(pe)), V !== e && (z = b, V = At()), b = V, b === e && (b = d, V = d, B++, t.charCodeAt(d) === 92 ? (x = c, d++) : (x = e, B === 0 && Ee(ge)), x === e && (t.charCodeAt(d) === 39 ? (x = me, d++) : (x = e, B === 0 && Ee(St)), x === e && (t.substr(d, 2) === s ? (x = s, d += 2) : (x = e, B === 0 && Ee(be)))), B--, x === e ? V = void 0 : (d = V, V = e), V !== e ? (t.length > d ? (x = t.charAt(d), d++) : (x = e, B === 0 && Ee(de)), x !== e ? (z = b, b = Jt()) : (d = b, b = e)) : (d = b, b = e), b === e))) {
      if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, B === 0 && Ee(be)), V !== e) {
        if (x = [], Se.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, B === 0 && Ee(Dt)), P !== e)
          for (; P !== e; )
            x.push(P), Se.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, B === 0 && Ee(Dt));
        else
          x = e;
        x !== e ? (t.charCodeAt(d) === 125 ? (P = a, d++) : (P = e, B === 0 && Ee(Te)), P !== e ? (z = b, b = Yt()) : (d = b, b = e)) : (d = b, b = e);
      } else
        d = b, b = e;
      b === e && (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, B === 0 && Ee(be)), V !== e && (z = b, V = sr()), b = V, b === e && (b = d, t.charCodeAt(d) === 92 ? (V = c, d++) : (V = e, B === 0 && Ee(ge)), V !== e ? (t.substr(d, 2) === s ? (x = s, d += 2) : (x = e, B === 0 && Ee(be)), x !== e ? (z = b, b = dt(x)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = c, d++) : (V = e, B === 0 && Ee(ge)), V !== e ? (t.length > d ? (x = t.charAt(d), d++) : (x = e, B === 0 && Ee(de)), x !== e ? (z = b, b = ce(x)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = c, d++) : (V = e, B === 0 && Ee(ge)), V !== e && (z = b, V = kt()), b = V))));
    }
    return b;
  }
  function zn() {
    var b, V, x;
    if (B++, b = d, t.charCodeAt(d) === 45 ? d++ : B === 0 && Ee(nt), V = [], Q.test(t.charAt(d)) ? (x = t.charAt(d), d++) : (x = e, B === 0 && Ee(X)), x !== e)
      for (; x !== e; )
        V.push(x), Q.test(t.charAt(d)) ? (x = t.charAt(d), d++) : (x = e, B === 0 && Ee(X));
    else
      V = e;
    return V !== e ? (z = b, b = nr()) : (d = b, b = e), B--, b === e && B === 0 && Ee(tt), b;
  }
  function Bn() {
    var b, V, x, P, Ce, ye, Ot, Bt, Jr;
    for (B++, b = d, t.charCodeAt(d) === 45 ? d++ : B === 0 && Ee(nt), V = [], Q.test(t.charAt(d)) ? (x = t.charAt(d), d++) : (x = e, B === 0 && Ee(X)); x !== e; )
      V.push(x), Q.test(t.charAt(d)) ? (x = t.charAt(d), d++) : (x = e, B === 0 && Ee(X));
    if (t.charCodeAt(d) === 46 ? (x = D, d++) : (x = e, B === 0 && Ee(st)), x !== e) {
      if (P = [], Q.test(t.charAt(d)) ? (Ce = t.charAt(d), d++) : (Ce = e, B === 0 && Ee(X)), Ce !== e)
        for (; Ce !== e; )
          P.push(Ce), Q.test(t.charAt(d)) ? (Ce = t.charAt(d), d++) : (Ce = e, B === 0 && Ee(X));
      else
        P = e;
      if (P !== e) {
        if (Ce = d, t.charCodeAt(d) === 101 ? (ye = Ae, d++) : (ye = e, B === 0 && Ee(Tt)), ye === e && (t.charCodeAt(d) === 69 ? (ye = ve, d++) : (ye = e, B === 0 && Ee($t))), ye !== e) {
          if (t.charCodeAt(d) === 43 ? (Ot = re, d++) : (Ot = e, B === 0 && Ee(yt)), Ot === e && (t.charCodeAt(d) === 45 ? (Ot = ue, d++) : (Ot = e, B === 0 && Ee(nt))), Ot === e && (Ot = null), Bt = [], Q.test(t.charAt(d)) ? (Jr = t.charAt(d), d++) : (Jr = e, B === 0 && Ee(X)), Jr !== e)
            for (; Jr !== e; )
              Bt.push(Jr), Q.test(t.charAt(d)) ? (Jr = t.charAt(d), d++) : (Jr = e, B === 0 && Ee(X));
          else
            Bt = e;
          Bt !== e ? (ye = [ye, Ot, Bt], Ce = ye) : (d = Ce, Ce = e);
        } else
          d = Ce, Ce = e;
        Ce === e && (Ce = null), z = b, b = Xt();
      } else
        d = b, b = e;
    } else
      d = b, b = e;
    if (b === e) {
      if (b = d, t.charCodeAt(d) === 45 ? d++ : B === 0 && Ee(nt), V = [], Q.test(t.charAt(d)) ? (x = t.charAt(d), d++) : (x = e, B === 0 && Ee(X)), x !== e)
        for (; x !== e; )
          V.push(x), Q.test(t.charAt(d)) ? (x = t.charAt(d), d++) : (x = e, B === 0 && Ee(X));
      else
        V = e;
      if (V !== e)
        if (t.charCodeAt(d) === 101 ? (x = Ae, d++) : (x = e, B === 0 && Ee(Tt)), x === e && (t.charCodeAt(d) === 69 ? (x = ve, d++) : (x = e, B === 0 && Ee($t))), x !== e) {
          if (t.charCodeAt(d) === 43 ? (P = re, d++) : (P = e, B === 0 && Ee(yt)), P === e && (t.charCodeAt(d) === 45 ? (P = ue, d++) : (P = e, B === 0 && Ee(nt))), P === e && (P = null), Ce = [], Q.test(t.charAt(d)) ? (ye = t.charAt(d), d++) : (ye = e, B === 0 && Ee(X)), ye !== e)
            for (; ye !== e; )
              Ce.push(ye), Q.test(t.charAt(d)) ? (ye = t.charAt(d), d++) : (ye = e, B === 0 && Ee(X));
          else
            Ce = e;
          Ce !== e ? (z = b, b = jr()) : (d = b, b = e);
        } else
          d = b, b = e;
      else
        d = b, b = e;
    }
    return B--, b === e && B === 0 && Ee(Et), b;
  }
  function so() {
    var b, V, x, P, Ce, ye, Ot, Bt, Jr, Mr, Br;
    if (b = d, xe.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, B === 0 && Ee(Kt)), V !== e) {
      if (x = [], P = [], qe.test(t.charAt(d)) ? (Ce = t.charAt(d), d++) : (Ce = e, B === 0 && Ee(je)), Ce !== e)
        for (; Ce !== e; )
          P.push(Ce), qe.test(t.charAt(d)) ? (Ce = t.charAt(d), d++) : (Ce = e, B === 0 && Ee(je));
      else
        P = e;
      for (P === e && (P = d, t.charCodeAt(d) === 46 ? (Ce = D, d++) : (Ce = e, B === 0 && Ee(st)), Ce !== e ? (ye = d, B++, Ot = d, Bt = Lt(), Jr = Tn(), Jr !== e ? (Mr = Lt(), t.charCodeAt(d) === 40 ? (Br = M, d++) : (Br = e, B === 0 && Ee(Me)), Br !== e ? (Bt = [Bt, Jr, Mr, Br], Ot = Bt) : (d = Ot, Ot = e)) : (d = Ot, Ot = e), B--, Ot === e ? ye = void 0 : (d = ye, ye = e), ye !== e ? (Ce = [Ce, ye], P = Ce) : (d = P, P = e)) : (d = P, P = e)); P !== e; ) {
        if (x.push(P), P = [], qe.test(t.charAt(d)) ? (Ce = t.charAt(d), d++) : (Ce = e, B === 0 && Ee(je)), Ce !== e)
          for (; Ce !== e; )
            P.push(Ce), qe.test(t.charAt(d)) ? (Ce = t.charAt(d), d++) : (Ce = e, B === 0 && Ee(je));
        else
          P = e;
        P === e && (P = d, t.charCodeAt(d) === 46 ? (Ce = D, d++) : (Ce = e, B === 0 && Ee(st)), Ce !== e ? (ye = d, B++, Ot = d, Bt = Lt(), Jr = Tn(), Jr !== e ? (Mr = Lt(), t.charCodeAt(d) === 40 ? (Br = M, d++) : (Br = e, B === 0 && Ee(Me)), Br !== e ? (Bt = [Bt, Jr, Mr, Br], Ot = Bt) : (d = Ot, Ot = e)) : (d = Ot, Ot = e), B--, Ot === e ? ye = void 0 : (d = ye, ye = e), ye !== e ? (Ce = [Ce, ye], P = Ce) : (d = P, P = e)) : (d = P, P = e));
      }
      z = b, b = v();
    } else
      d = b, b = e;
    return b;
  }
  function Tn() {
    var b, V, x, P;
    if (b = d, xe.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, B === 0 && Ee(Kt)), V !== e) {
      for (x = [], qe.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, B === 0 && Ee(je)); P !== e; )
        x.push(P), qe.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, B === 0 && Ee(je));
      z = b, b = se();
    } else
      d = b, b = e;
    return b;
  }
  function Lt() {
    var b, V;
    for (B++, b = [], Ke.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, B === 0 && Ee(pt)); V !== e; )
      b.push(V), Ke.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, B === 0 && Ee(pt));
    return B--, V = e, B === 0 && Ee(He), b;
  }
  if (Ut = i(), Ut !== e && d === t.length)
    return Ut;
  throw Ut !== e && d < t.length && Ee(Vr()), Yr(
    ke,
    We < t.length ? t.charAt(We) : null,
    We < t.length ? An(We, We + 1) : An(We, We)
  );
}
const B2 = 128, Ii = /* @__PURE__ */ new Map();
let Of;
function o_(t) {
  return Ii.get(t);
}
function i_(t, r) {
  t !== Of && (Ii.delete(t), Ii.size >= B2 && Ii.delete(Ii.keys().next().value), Ii.set(t, r), Of = t);
}
const Bf = /* @__PURE__ */ new Set([
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
function R2(t) {
  if (!(typeof t.name == "string" && t.name))
    throw new Error("Incorrect function name");
  if (!(typeof t.body == "string" && t.body))
    throw new Error("Incorrect function body");
  if (!(t.return_type && Bf.has(t.return_type)))
    throw new Error("Incorrect function return_type");
  if (!Array.isArray(t.arguments))
    throw new Error("Incorrect function arguments");
  const r = /* @__PURE__ */ new Set();
  t.arguments.forEach((e) => {
    if (!(typeof e.name == "string" && e.name))
      throw new Error("Incorrect argument name");
    if (!(e.type && Bf.has(e.type)))
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
      r || (r = o_(t.body) || n_(t.body, {
        startRule: "JsonStringContents"
      }), i_(t.body, r));
      const o = /* @__PURE__ */ new Map();
      n.forEach((a, l) => {
        if (a.type === "function")
          throw new Error("Incorrect argument type: function");
        const c = Cs(t.arguments[l].name, a.type, a.value);
        o.set(c.getName(), c);
      });
      const i = ja(o, e.customFunctions, e.store, r, {
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
      const a = nf(o, s);
      n.add(a);
    }
    e.set(o, i);
  }
  for (const [o, i] of t)
    for (const s of i) {
      const a = nf(o, s);
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
    if (e.hasOwnProperty(n) && n in Kd)
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
class s_ {
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
      a = ja(r, e, o, this.ast, {
        weekStartDay: i
      }), a.warnings.forEach(n);
      const c = a.result;
      if (c.type === "error")
        return n(K(new Error("Expression execution error"), {
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
          result: Ld(u),
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
            result: Ai(f),
            usedVars: a.usedVars
          };
        n(K(new Error("Expression execution error")));
      }
      if (c.type === "integer")
        return u > q0 || u < K0 ? (n(K(new Error("Expression result is out of 32-bit int range"))), {
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
          return n(K(new Error(`Failed to stringify ${c.type}`))), {
            result: `<${c.type}>`,
            usedVars: a.usedVars
          };
        }
      return {
        result: u,
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
function na(t, r, e, n) {
  if (t)
    if (typeof t == "string") {
      if (J2(t)) {
        r.hasExpression = !0;
        try {
          const o = o_(t) || n_(t, {
            startRule: "JsonStringContents"
          });
          i_(t, o);
          const i = x0(o);
          return r.vars.push(...i), new s_(o, t);
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
        return t.map((o) => na(o, r, e, n - 1));
      if (typeof t == "object" && n > 0) {
        const o = {};
        for (const i in t)
          o[i] = na(t[i], r, e, n - 1);
        return o;
      }
    }
  return t;
}
function oa(t, r) {
  if (t) {
    if (t instanceof s_)
      return t.apply(r);
    if (Array.isArray(t)) {
      let e;
      return {
        result: t.map((o) => {
          const i = oa(o, r);
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
        const i = oa(t[o], r);
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
function Rf(t, r, e, n, o = 1 / 0) {
  const i = {
    vars: [],
    hasExpression: !1
  }, s = na(t, i, r, o);
  return {
    vars: G2(i.vars),
    hasExpression: i.hasExpression,
    applyVars(l, c, u) {
      return oa(s, {
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
class l_ {
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
function q3() {
  return new l_();
}
const q2 = ["start", "stop", "pause", "resume", "cancel", "reset"], K2 = new Set(q2);
class Y2 {
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
    if (!r || !e || !this.timers.has(r) || !K2.has(e)) {
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
  Ca(t, r, e, n, (a) => {
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
      const c = l.slice(), u = ml(s);
      typeof i == "number" ? c.splice(i, 0, u) : c.push(u), a.setValue(c);
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
  Ca(t, r, e, n, (s) => {
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
  Ca(t, r, e, n, (a) => {
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
      const c = l.slice();
      c[i] = ml(s), a.setValue(c);
    }
  });
}
function Ca(t, r, e, n, o) {
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
    const u = { ...a.getValue() };
    s ? u[i] = ml(s) : delete u[i], a.setValue(u);
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
  var R, L, re, ue;
  const o = Un(t.duration, 0);
  if (!o || t.type !== "color_animator" && t.type !== "number_animator")
    return;
  const i = (R = t.start_value_typed ? t.start_value_typed.value : t.start_value) != null ? R : r.getValue(), s = t.end_value_typed ? t.end_value_typed.value : t.end_value;
  if (i === void 0 || s === void 0 || t.type === "color_animator" && (typeof i != "string" && i !== void 0 || typeof s != "string") || t.type === "number_animator" && (typeof i != "number" && i !== void 0 || typeof s != "number"))
    return;
  const a = t.type === "color_animator" && _o(i), l = t.type === "color_animator" && _o(s);
  if (t.type === "color_animator" && (!a || !l))
    return;
  const c = rn(t.start_delay, 0), u = ma(t.interpolator || "linear"), f = e3(t.direction) || "normal", _ = ((L = t.repeat_count) == null ? void 0 : L.type) === "infinity" ? 1 / 0 : ((re = t.repeat_count) == null ? void 0 : re.type) === "fixed" ? rn((ue = t.repeat_count) == null ? void 0 : ue.value, 1) : 1;
  let h = 0, m = performance.now();
  const p = _ === 1 / 0 ? 1 / 0 : _ * o + c;
  function w(T) {
    if (t.type === "color_animator") {
      if (!a || !l)
        throw new Error("Missing start/end value");
      return Ai({
        a: Fo(Uo(a.a, l.a, T), 0, 255),
        r: Fo(Uo(a.r, l.r, T), 0, 255),
        g: Fo(Uo(a.g, l.g, T), 0, 255),
        b: Fo(Uo(a.b, l.b, T), 0, 255)
      });
    }
    return Uo(i, s, T);
  }
  function k(T) {
    const Y = T - m;
    if (m = T, h += Y, h >= c) {
      let le = Math.floor((h - c) / o), A = (h - c - le * o) / o;
      le >= _ && (le = _ - 1, A = 1);
      let D;
      f === "normal" || f === "alternate" && le % 2 === 0 || f === "alternate_reverse" && le % 2 === 1 ? D = "normal" : D = "reverse", D === "reverse" && (A = 1 - A);
      const M = w(u(A));
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
    const c = a.getValue(), u = i.replace(/\/+/g, "/");
    if (u === "/") {
      e(K(new Error(`Value '${i}' for key 'path' is not valid`), {
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
        const w = Number(p);
        if (Number.isNaN(w)) {
          e(K(new Error(`Unable to use '${p}' as array index`), {
            additional: {
              name: o,
              type: l,
              path: i
            }
          }));
          return;
        }
        if (m + 1 === f.length && (w < 0 || w > h.length)) {
          e(K(new Error(`Position '${w}' is out of array bounds`), {
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
    h[f[f.length - 1]] = ml(s), a.setValue(_);
  } else
    e(K(new Error("Action requires array or dictionary variable"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function Hf(t, { delay: r = 0, duration: e = 400, easing: n = Fd, x: o = 0, y: i = 0, opacity: s = 0 } = {}) {
  const a = getComputedStyle(t), l = +a.opacity, c = a.transform === "none" ? "" : a.transform, u = l * (1 - s), [f, _] = Ia(o), [h, m] = Ia(i);
  return {
    delay: r,
    duration: e,
    easing: n,
    css: (p, w) => `
			transform: ${c} translate(${(1 - p) * f}${_}, ${(1 - p) * h}${m});
			opacity: ${l - u * w}`
  };
}
const c3 = "appkit-outer", u3 = "appkit-root__clickable", f3 = "undefined", d3 = "appkit-tooltip", _3 = "appkit-tooltip_visible", p3 = "appkit-tooltip_modal", g3 = "appkit-tooltip__inner", h3 = "appkit-tooltip__overlay", m3 = "appkit-tooltip__substrate", vo = {
  outer: c3,
  root__clickable: u3,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  root__selectable: f3,
  tooltip: d3,
  tooltip_visible: _3,
  tooltip_modal: p3,
  tooltip__inner: g3,
  tooltip__overlay: h3,
  tooltip__substrate: m3
}, a_ = 300, c_ = 0;
function ia(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || a_) + (Number(r.start_delay) || c_)
  ));
}
function $s(t, {
  animations: r,
  direction: e
}) {
  if (!r)
    return {};
  const n = is(r), o = ia(n);
  return n.some((s) => s.name === "no_animation") ? {} : {
    duration: zi() ? 0 : o,
    css: (s) => {
      const a = s * o, l = n.map((p) => {
        var re, ue, T, Y, le, A, D, M, U, Z, me, Ae;
        const w = Number(p.start_delay) || c_, k = Number(p.duration) || a_, N = e === "in" ? Math.max(0, Math.min(1, (a - w) / k)) : Math.max(0, Math.min(1, (a - (o - k) + w) / k)), L = (ma(p.interpolator || "ease_in_out") || pl)(N);
        if (p.name === "fade") {
          const ve = e === "in" ? (re = p.start_value) != null ? re : 0 : (ue = p.end_value) != null ? ue : 0, he = e === "in" ? (T = p.end_value) != null ? T : 1 : (Y = p.start_value) != null ? Y : 1;
          return {
            active: L > 0 && L < 1,
            opacity: (1 - L) * ve + L * he
          };
        } else if (p.name === "translate") {
          const ve = -(e === "in" ? (le = p.start_value) != null ? le : 10 : (A = p.end_value) != null ? A : 10), he = -(e === "in" ? (D = p.end_value) != null ? D : 0 : (M = p.start_value) != null ? M : 0);
          return {
            active: L > 0 && L < 1,
            translate: `translateY(${(1 - L) * ve + L * he}${e === "in" && p.start_value !== void 0 || e === "out" && p.end_value !== void 0 ? "%" : "px"})`
          };
        } else if (p.name === "scale") {
          const ve = e === "in" ? (U = p.start_value) != null ? U : 0 : (Z = p.end_value) != null ? Z : 0, he = e === "in" ? (me = p.end_value) != null ? me : 1 : (Ae = p.start_value) != null ? Ae : 1;
          return {
            active: L > 0 && L < 1,
            scale: `scale(${(1 - L) * ve + L * he})`
          };
        }
        return {};
      }), c = l.map((p) => p.opacity).filter((p) => p !== void 0).reduce((p, w) => p * w, 1), u = l.map((p) => p.translate).filter((p) => p !== void 0).join(" "), f = l.map((p) => p.scale).filter((p) => p !== void 0).join(" "), _ = l.filter((p) => p.active).map((p) => p.scale).filter((p) => p !== void 0), h = _.length ? _[_.length - 1] : f;
      return `transform:${[u, h].filter(Boolean).join(" ") || "none"};opacity:${c}`;
    }
  };
}
const es = typeof window < "u" && "HTMLDialogElement" in window, { document: b3, window: y3 } = Po;
function w3(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _ = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && Wf(t)
  ), h = (
    /*substrateComponentContext*/
    t[14] && Uf(t)
  );
  return i = new Zn({
    props: {
      componentContext: (
        /*componentContext*/
        t[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = mr(), h && h.c(), e = mr(), n = Pe("div"), o = Pe("div"), Rt(i.$$.fragment), g(o, "class", vo.tooltip__inner), g(n, "class", s = mt(
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
      _ && _.m(m, p), J(m, r, p), h && h.m(m, p), J(m, e, p), J(m, n, p), wt(n, o), Nt(i, o, null), t[40](o), t[41](n), c = !0, u || (f = [
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
      t[3] ? _ ? _.p(t, p) : (_ = Wf(t), _.c(), _.m(r.parentNode, r)) : _ && (_.d(1), _ = null), /*substrateComponentContext*/
      t[14] ? h ? (h.p(t, p), p[0] & /*substrateComponentContext*/
      16384 && H(h, 1)) : (h = Uf(t), h.c(), H(h, 1), h.m(e.parentNode, e)) : h && (fr(), te(h, 1, 1, () => {
        h = null;
      }), dr());
      const w = {};
      p[0] & /*componentContext*/
      4 && (w.componentContext = /*componentContext*/
      t[2]), i.$set(w), (!c || p[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = mt(
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
      c || (H(h), H(i.$$.fragment, m), fo(() => {
        c && (l && l.end(1), a = ll(n, $s, {
          animations: (
            /*$animationIn*/
            t[5] || Ri
          ),
          direction: "in"
        }), a.start());
      }), c = !0);
    },
    o(m) {
      te(h), te(i.$$.fragment, m), a && a.invalidate(), l = fd(n, $s, {
        animations: (
          /*$animationOut*/
          t[4] || Ri
        ),
        direction: "out"
      }), c = !1;
    },
    d(m) {
      m && (G(r), G(e), G(n)), _ && _.d(m), h && h.d(m), zt(i), t[40](null), t[41](null), m && l && l.end(), u = !1, Gr(f);
    }
  };
}
function k3(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _ = (
    /*substrateComponentContext*/
    t[14] && Gf(t)
  ), h = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && /*data*/
    t[0].background_accessibility_description && Jf(t)
  );
  return i = new Zn({
    props: {
      componentContext: (
        /*componentContext*/
        t[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = mr(), e = Pe("dialog"), h && h.c(), n = mr(), o = Pe("div"), Rt(i.$$.fragment), g(o, "class", vo.tooltip__inner), g(e, "class", s = mt(
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
      _ && _.m(m, p), J(m, r, p), J(m, e, p), h && h.m(e, null), wt(e, n), wt(e, o), Nt(i, o, null), t[36](o), t[37](e), c = !0, u || (f = [
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
      16384 && H(_, 1)) : (_ = Gf(t), _.c(), H(_, 1), _.m(r.parentNode, r)) : _ && (fr(), te(_, 1, 1, () => {
        _ = null;
      }), dr()), /*visible*/
      t[1] && /*modal*/
      t[3] && /*data*/
      t[0].background_accessibility_description ? h ? h.p(t, p) : (h = Jf(t), h.c(), h.m(e, n)) : h && (h.d(1), h = null);
      const w = {};
      p[0] & /*componentContext*/
      4 && (w.componentContext = /*componentContext*/
      t[2]), i.$set(w), (!c || p[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = mt(
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
      c || (H(_), H(i.$$.fragment, m), fo(() => {
        c && (l && l.end(1), a = ll(e, $s, {
          animations: (
            /*$animationIn*/
            t[5] || Ri
          ),
          direction: "in"
        }), a.start());
      }), c = !0);
    },
    o(m) {
      te(_), te(i.$$.fragment, m), a && a.invalidate(), l = fd(e, $s, {
        animations: (
          /*$animationOut*/
          t[4] || Ri
        ),
        direction: "out"
      }), c = !1;
    },
    d(m) {
      m && (G(r), G(e)), _ && _.d(m), h && h.d(), zt(i), t[36](null), t[37](null), m && l && l.end(), u = !1, Gr(f);
    }
  };
}
function Wf(t) {
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
      o.c(), r = xt();
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
function v3(t) {
  let r, e, n;
  return {
    c() {
      r = Pe("div"), g(r, "class", vo.tooltip__overlay);
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
function j3(t) {
  let r, e, n, o;
  return {
    c() {
      r = Pe("button"), g(r, "class", vo.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", e = /*data*/
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
function Uf(t) {
  let r, e, n, o, i;
  return e = new Zn({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        t[14]
      )
    }
  }), {
    c() {
      r = Pe("div"), Rt(e.$$.fragment), n = mr(), o = Pe("div"), g(r, "class", vo.tooltip__substrate);
    },
    m(s, a) {
      J(s, r, a), Nt(e, r, null), t[38](r), J(s, n, a), J(s, o, a), t[39](o), i = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*substrateComponentContext*/
      16384 && (l.componentContext = /*substrateComponentContext*/
      s[14]), e.$set(l);
    },
    i(s) {
      i || (H(e.$$.fragment, s), i = !0);
    },
    o(s) {
      te(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (G(r), G(n), G(o)), zt(e), t[38](null), t[39](null);
    }
  };
}
function Gf(t) {
  let r, e, n, o, i;
  return e = new Zn({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        t[14]
      )
    }
  }), {
    c() {
      r = Pe("div"), Rt(e.$$.fragment), n = mr(), o = Pe("div"), g(r, "class", vo.tooltip__substrate);
    },
    m(s, a) {
      J(s, r, a), Nt(e, r, null), t[34](r), J(s, n, a), J(s, o, a), t[35](o), i = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*substrateComponentContext*/
      16384 && (l.componentContext = /*substrateComponentContext*/
      s[14]), e.$set(l);
    },
    i(s) {
      i || (H(e.$$.fragment, s), i = !0);
    },
    o(s) {
      te(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (G(r), G(n), G(o)), zt(e), t[34](null), t[35](null);
    }
  };
}
function Jf(t) {
  let r, e, n, o;
  return {
    c() {
      r = Pe("button"), g(r, "class", vo.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", e = /*data*/
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
function C3(t) {
  let r, e, n, o, i, s, a;
  const l = [k3, w3], c = [];
  function u(f, _) {
    return es ? 0 : 1;
  }
  return e = u(), n = c[e] = l[e](t), {
    c() {
      r = mr(), n.c(), o = xt();
    },
    m(f, _) {
      J(f, r, _), c[e].m(f, _), J(f, o, _), i = !0, s || (a = [
        Qe(
          y3,
          "resize",
          /*onWindowResize*/
          t[25]
        ),
        Qe(
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
      i || (H(n), i = !0);
    },
    o(f) {
      te(n), i = !1;
    },
    d(f) {
      f && (G(r), G(o)), c[e].d(f), s = !1, Gr(a);
    }
  };
}
const Ri = {
  name: "set",
  items: [{ name: "translate" }, { name: "fade" }]
};
let qn = [];
function A3(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _ = j, h = () => (_(), _ = E(i, (I) => e(46, f = I)), i), m, p = j, w = () => (p(), p = E(o, (I) => e(47, m = I)), o), k, N = j, R = () => (N(), N = E(n, (I) => e(48, k = I)), n), L, re = j, ue = () => (re(), re = E(a, (I) => e(4, L = I)), a), T, Y = j, le = () => (Y(), Y = E(s, (I) => e(5, T = I)), s), A;
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => Y());
  let { ownerNode: D } = r, { data: M } = r, { internalId: U } = r, { parentComponentContext: Z } = r;
  const me = Dr(Kr), Ae = me.isDesktop;
  bn(t, Ae, (I) => e(21, A = I));
  const ve = Date.now();
  let he, Se, Q, xe, qe = !1, Ke = "", be = "", Te = "", pe = "", ge = null, de, ee, ae = !0, ne = null;
  function we() {
    var pt, Ve;
    if (!he || !D)
      return;
    const I = he.parentElement;
    if (!I)
      return;
    const Ct = he.style.cssText;
    e(6, he.style.cssText += ";transform: none !important", he);
    const lt = D.getBoundingClientRect(), St = he.getBoundingClientRect(), Dt = I.getBoundingClientRect();
    e(6, he.style.cssText = Ct, he);
    let tt = 0, X = 0, Et = null, Tt = null, $t = 0, Kt = 0;
    const je = (pt = de == null ? void 0 : de.json) == null ? void 0 : pt.width, He = (Ve = de == null ? void 0 : de.json) == null ? void 0 : Ve.height;
    if (!je || je.type === "match_parent" ? $t = Et = window.innerWidth : je.type === "fixed" && je.value ? $t = Et = je.value : $t = St.width, (He == null ? void 0 : He.type) === "match_parent" ? Kt = Tt = window.innerHeight : (He == null ? void 0 : He.type) === "fixed" && He.value ? Kt = Tt = He.value : Kt = St.height, k === "left" || k === "bottom-left" || k === "top-left")
      tt = lt.left - $t;
    else if (k === "top" || k === "bottom" || k === "center")
      tt = (lt.left + lt.right) / 2 - $t / 2;
    else if (k === "right" || k === "bottom-right" || k === "top-right")
      tt = lt.right;
    else
      return;
    if (k === "top" || k === "top-left" || k === "top-right")
      X = lt.top - Kt;
    else if (k === "left" || k === "right" || k === "center")
      X = (lt.top + lt.bottom) / 2 - Kt / 2;
    else if (k === "bottom-left" || k === "bottom" || k === "bottom-right")
      X = lt.bottom;
    else
      return;
    es && ae || (tt -= Dt.left, X -= Dt.top), tt += m || 0, X += f || 0, e(10, Ke = `${tt}px`), e(11, be = `${X}px`), e(12, Te = Et !== null ? `${Et}px` : ""), e(13, pe = Tt !== null ? `${Tt}px` : ""), e(1, qe = !0), Et === null || Tt === null ? typeof ResizeObserver < "u" && !ge && (ge = new ResizeObserver(() => {
      requestAnimationFrame(we);
    }), ge.observe(he)) : ge == null || ge.disconnect();
  }
  function Re(I) {
    if (qn.length && qn[qn.length - 1] !== he)
      return;
    const Ct = I.composedPath();
    Date.now() - ve < 100 || Ct.includes(he) && !(es && Ct[0] === he) || Ye();
  }
  function Ye(I) {
    I == null || I.stopPropagation(), I == null || I.preventDefault(), de.getJsonWithVars(M.close_by_tap_outside) !== !1 && (qn = qn.filter((Ct) => Ct !== he), me.onTooltipClose(U)), M.tap_outside_actions && de.execAnyActions(M.tap_outside_actions, { processUrls: !0 });
  }
  function $() {
    we();
  }
  function Le(I) {
    qn.length && qn[qn.length - 1] !== he || I.key === "Escape" && !I.ctrlKey && !I.shiftKey && !I.altKey && !I.metaKey && (qn = qn.filter((Ct) => Ct !== he), me.onTooltipClose(U));
  }
  function Ne(I) {
    qn = qn.filter((Ct) => Ct !== he), me.onTooltipClose(U), I.preventDefault();
  }
  function ot() {
    Q && Q.animate({ opacity: [0, 1] }, {
      duration: l,
      easing: "ease-in-out"
    });
  }
  function ut() {
    Q && he.insertBefore(Q, Se);
  }
  function rt() {
    xe != null && xe.parentElement && Q && (xe.parentElement.insertBefore(Q, xe), Q.animate({ opacity: [1, 0] }, {
      duration: c,
      easing: "ease-in-out"
    }));
  }
  Xn(() => {
    try {
      ne = document.activeElement;
    } catch {
    }
    if (me.tooltipRoot) {
      const I = window.getComputedStyle(he);
      e(6, he.style.fontSize = I.fontSize, he), e(6, he.style.fontFamily = I.fontFamily, he), e(6, he.style.lineHeight = I.lineHeight, he), me.tooltipRoot.appendChild(he);
    }
    es && he && he instanceof HTMLDialogElement && he[ae ? "showModal" : "show"](), ae && qn.push(he);
  }), sl(() => {
    qe || we();
  }), ln(() => {
    if (de && de.destroy(), ee && ee.destroy(), ge == null || ge.disconnect(), qn = qn.filter((I) => I !== he), ae && ne && ne instanceof HTMLElement) {
      es && he && he instanceof HTMLDialogElement && he.close();
      try {
        ne.focus({ preventScroll: !0 });
      } catch {
      }
    }
  });
  function yt(I) {
    Fr[I ? "unshift" : "push"](() => {
      Q = I, e(8, Q);
    });
  }
  function nt(I) {
    Fr[I ? "unshift" : "push"](() => {
      xe = I, e(9, xe);
    });
  }
  function Pt(I) {
    Fr[I ? "unshift" : "push"](() => {
      Se = I, e(7, Se);
    });
  }
  function ft(I) {
    Fr[I ? "unshift" : "push"](() => {
      he = I, e(6, he);
    });
  }
  function q(I) {
    Fr[I ? "unshift" : "push"](() => {
      Q = I, e(8, Q);
    });
  }
  function fe(I) {
    Fr[I ? "unshift" : "push"](() => {
      xe = I, e(9, xe);
    });
  }
  function st(I) {
    Fr[I ? "unshift" : "push"](() => {
      Se = I, e(7, Se);
    });
  }
  function Me(I) {
    Fr[I ? "unshift" : "push"](() => {
      he = I, e(6, he);
    });
  }
  return t.$$set = (I) => {
    "ownerNode" in I && e(31, D = I.ownerNode), "data" in I && e(0, M = I.data), "internalId" in I && e(32, U = I.internalId), "parentComponentContext" in I && e(33, Z = I.parentComponentContext);
  }, t.$$.update = () => {
    var I, Ct, lt, St, Dt;
    t.$$.dirty[0] & /*componentContext, data*/
    5 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && (de && de.destroy(), e(2, de = Z.produceChildContext(M.div || {}, { isTooltipRoot: !0 })), M.substrate_div && e(14, ee = Z.produceChildContext(M.substrate_div, { isTooltipRoot: !0 }))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && R(e(20, n = Z.getDerivedFromVars(M.position))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && w(e(19, o = Z.getDerivedFromVars((Ct = (I = M.offset) == null ? void 0 : I.x) == null ? void 0 : Ct.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && h(e(18, i = Z.getDerivedFromVars((St = (lt = M.offset) == null ? void 0 : lt.y) == null ? void 0 : St.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && le(e(17, s = Z.getDerivedFromVars(M.animation_in))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && ue(e(16, a = Z.getDerivedFromVars(M.animation_out))), t.$$.dirty[0] & /*$animationIn*/
    32 && (l = zi() ? 0 : ia(is(T || Ri))), t.$$.dirty[0] & /*$animationOut*/
    16 && (c = zi() ? 0 : ia(is(L || Ri))), t.$$.dirty[0] & /*data*/
    1 && (((Dt = M.mode) == null ? void 0 : Dt.type) === "non_modal" ? e(3, ae = !1) : e(3, ae = !0)), t.$$.dirty[0] & /*visible, modal*/
    10 && e(15, u = { visible: qe, modal: ae });
  }, [
    M,
    qe,
    de,
    ae,
    L,
    T,
    he,
    Se,
    Q,
    xe,
    Ke,
    be,
    Te,
    pe,
    ee,
    u,
    a,
    s,
    i,
    o,
    n,
    A,
    Ae,
    Re,
    Ye,
    $,
    Le,
    Ne,
    ot,
    ut,
    rt,
    D,
    U,
    Z,
    yt,
    nt,
    Pt,
    ft,
    q,
    fe,
    st,
    Me
  ];
}
class E3 extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      A3,
      C3,
      Er,
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
}, { window: qf } = Po;
function Kf(t, r, e) {
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
function Yf(t) {
  let r, e, n, o;
  return e = new ul({
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
      r = Pe("li"), Rt(e.$$.fragment), n = mr();
    },
    m(i, s) {
      J(i, r, s), Nt(e, r, null), wt(r, n), o = !0;
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
      o || (H(e.$$.fragment, i), o = !0);
    },
    o(i) {
      te(e.$$.fragment, i), o = !1;
    },
    d(i) {
      i && G(r), zt(e);
    }
  };
}
function M3(t) {
  let r, e, n, o, i, s, a, l = ir(
    /*items*/
    t[0]
  ), c = [];
  for (let f = 0; f < l.length; f += 1)
    c[f] = Yf(Kf(t, l, f));
  const u = (f) => te(c[f], 1, 1, () => {
    c[f] = null;
  });
  return {
    c() {
      r = Pe("div"), e = Pe("ul");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      g(e, "class", Bs.menu__list), g(r, "class", n = mt(
        "menu",
        Bs,
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
      J(f, r, _), wt(r, e);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(e, null);
      t[17](r), i = !0, s || (a = [
        Qe(
          qf,
          "click",
          /*onWindowClick*/
          t[12]
        ),
        Qe(
          qf,
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
          const m = Kf(f, l, h);
          c[h] ? (c[h].p(m, _), H(c[h], 1)) : (c[h] = Yf(m), c[h].c(), H(c[h], 1), c[h].m(e, null));
        }
        for (fr(), h = l.length; h < c.length; h += 1)
          u(h);
        dr();
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
          H(c[_]);
        f && fo(() => {
          i && (o || (o = Na(r, Hf, { y: 20 }, !0)), o.run(1));
        }), i = !0;
      }
    },
    o(f) {
      c = c.filter(Boolean);
      for (let _ = 0; _ < c.length; _ += 1)
        te(c[_]);
      f && (o || (o = Na(r, Hf, { y: 20 }, !1)), o.run(0)), i = !1;
    },
    d(f) {
      f && G(r), cn(c, f), t[17](null), f && o && o.end(), s = !1, Gr(a);
    }
  };
}
function P3(t, r, e) {
  let n, o, { ownerNode: i } = r, { items: s } = r, { parentComponentContext: a } = r;
  const l = Dr(Kr), c = l.getCustomization("menuPopupClass") || "", u = l.getCustomization("menuItemClass") || "", f = l.isDesktop;
  bn(t, f, (A) => e(8, o = A));
  const _ = Date.now(), h = M_();
  let m, p = !1, w = "", k = "", N = "", R = "", L = null;
  function re() {
    if (!m || !i)
      return;
    const A = m.parentElement;
    if (!A)
      return;
    const D = i.getBoundingClientRect(), M = m.getBoundingClientRect(), U = A.getBoundingClientRect(), Z = window.innerWidth, me = window.innerHeight;
    let Ae = 0, ve = 0, he = M.width, Se = M.height;
    Ae = D.left - U.left, ve = D.bottom - U.top, Ae + he > Z && (Ae = Z - he), Ae < 0 && (Ae = 0), ve + Se > me && (D.top - U.top - Se > 0 ? ve = D.top - U.top - Se : ve = me - Se), ve < 0 && (ve = 0), e(3, w = `${Ae}px`), e(4, k = `${ve}px`), e(5, N = ""), e(6, R = ""), e(16, p = !0), typeof ResizeObserver < "u" && !L && (L = new ResizeObserver(() => {
      requestAnimationFrame(re);
    }), L.observe(m));
  }
  function ue(A) {
    Date.now() - _ < 100 || A.composedPath().includes(m) || h("close");
  }
  function T() {
    re();
  }
  function Y() {
    return h("close"), !0;
  }
  Xn(() => {
    if (l.tooltipRoot) {
      const A = window.getComputedStyle(m);
      e(2, m.style.fontSize = A.fontSize, m), e(2, m.style.fontFamily = A.fontFamily, m), e(2, m.style.lineHeight = A.lineHeight, m), l.tooltipRoot.appendChild(m);
    }
  }), sl(() => {
    p || re();
  }), ln(() => {
    L == null || L.disconnect();
  });
  function le(A) {
    Fr[A ? "unshift" : "push"](() => {
      m = A, e(2, m);
    });
  }
  return t.$$set = (A) => {
    "ownerNode" in A && e(15, i = A.ownerNode), "items" in A && e(0, s = A.items), "parentComponentContext" in A && e(1, a = A.parentComponentContext);
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
    R,
    n,
    o,
    c,
    u,
    f,
    ue,
    T,
    Y,
    i,
    p,
    le
  ];
}
class N3 extends Or {
  constructor(r) {
    super(), Lr(this, r, P3, M3, Er, {
      ownerNode: 15,
      items: 0,
      parentComponentContext: 1
    });
  }
}
const { Map: z3 } = Po;
function Xf(t, r, e) {
  const n = t.slice();
  return n[134] = r[e], n;
}
function Zf(t) {
  let r, e, n, o, i, s, a, l, c, u;
  e = new Zw({
    props: { svgFiltersMap: (
      /*svgFiltersMap*/
      t[5]
    ) }
  }), o = new Zn({
    props: {
      componentContext: (
        /*rootStateComponentContext*/
        t[6]
      )
    }
  });
  let f = (
    /*tooltips*/
    t[3] && Qf(t)
  ), _ = (
    /*menu*/
    t[4] && $f(t)
  );
  return {
    c() {
      r = Pe("div"), Rt(e.$$.fragment), n = mr(), Rt(o.$$.fragment), i = mr(), f && f.c(), s = mr(), _ && _.c(), g(r, "class", a = Cr.root + /*$isDesktop*/
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
      J(h, r, m), Nt(e, r, null), wt(r, n), Nt(o, r, null), wt(r, i), f && f.m(r, null), wt(r, s), _ && _.m(r, null), l = !0, c || (u = Qe(r, "touchstart", R3, { passive: !0 }), c = !0);
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
      8 && H(f, 1)) : (f = Qf(h), f.c(), H(f, 1), f.m(r, s)) : f && (fr(), te(f, 1, 1, () => {
        f = null;
      }), dr()), /*menu*/
      h[4] ? _ ? (_.p(h, m), m[0] & /*menu*/
      16 && H(_, 1)) : (_ = $f(h), _.c(), H(_, 1), _.m(r, null)) : _ && (fr(), te(_, 1, 1, () => {
        _ = null;
      }), dr()), (!l || m[0] & /*$isDesktop, mix*/
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
      l || (H(e.$$.fragment, h), H(o.$$.fragment, h), H(f), H(_), l = !0);
    },
    o(h) {
      te(e.$$.fragment, h), te(o.$$.fragment, h), te(f), te(_), l = !1;
    },
    d(h) {
      h && G(r), zt(e), zt(o), f && f.d(), _ && _.d(), c = !1, u();
    }
  };
}
function Qf(t) {
  let r = [], e = new z3(), n, o, i = ir(
    /*tooltips*/
    t[3]
  );
  const s = (a) => (
    /*item*/
    a[134].internalId
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = Xf(t, i, a), c = s(l);
    e.set(c, r[a] = xf(c, l));
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
      J(a, n, l), o = !0;
    },
    p(a, l) {
      l[0] & /*tooltips, rootStateComponentContext*/
      72 && (i = ir(
        /*tooltips*/
        a[3]
      ), fr(), r = _d(r, l, s, 1, a, i, e, n.parentNode, dd, xf, n, Xf), dr());
    },
    i(a) {
      if (!o) {
        for (let l = 0; l < i.length; l += 1)
          H(r[l]);
        o = !0;
      }
    },
    o(a) {
      for (let l = 0; l < r.length; l += 1)
        te(r[l]);
      o = !1;
    },
    d(a) {
      a && G(n);
      for (let l = 0; l < r.length; l += 1)
        r[l].d(a);
    }
  };
}
function xf(t, r) {
  let e, n, o;
  return n = new E3({
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
      e = xt(), Rt(n.$$.fragment), this.first = e;
    },
    m(i, s) {
      J(i, e, s), Nt(n, i, s), o = !0;
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
      o || (H(n.$$.fragment, i), o = !0);
    },
    o(i) {
      te(n.$$.fragment, i), o = !1;
    },
    d(i) {
      i && G(e), zt(n, i);
    }
  };
}
function $f(t) {
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
      Rt(r.$$.fragment);
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
      e || (H(r.$$.fragment, n), e = !0);
    },
    o(n) {
      te(r.$$.fragment, n), e = !1;
    },
    d(n) {
      zt(r, n);
    }
  };
}
function L3(t) {
  let r, e, n = !/*hasError*/
  t[1] && !/*hasIdError*/
  t[2] && /*rootStateComponentContext*/
  t[6] && Zf(t);
  return {
    c() {
      n && n.c(), r = xt();
    },
    m(o, i) {
      n && n.m(o, i), J(o, r, i), e = !0;
    },
    p(o, i) {
      !/*hasError*/
      o[1] && !/*hasIdError*/
      o[2] && /*rootStateComponentContext*/
      o[6] ? n ? (n.p(o, i), i[0] & /*hasError, hasIdError, rootStateComponentContext*/
      70 && H(n, 1)) : (n = Zf(o), n.c(), H(n, 1), n.m(r.parentNode, r)) : n && (fr(), te(n, 1, 1, () => {
        n = null;
      }), dr());
    },
    i(o) {
      e || (H(n), e = !0);
    },
    o(o) {
      te(n), e = !1;
    },
    d(o) {
      o && G(r), n && n.d(o);
    }
  };
}
let Aa = Do(!0), ks = 0;
function ed() {
  Aa.set(!1);
}
function td() {
  Aa.set(!0);
}
const O3 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean"]), B3 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean", "array", "dict"]);
function Wo(t, r) {
  if (t && r)
    return new Map([...t, ...r]);
  if (t)
    return t;
  if (r)
    return r;
}
function R3() {
}
function H3(t, r, e) {
  var Yr, Xr, gn;
  let n, o, i, s, { id: a } = r, { json: l = {} } = r, { platform: c = "auto" } = r, { theme: u = "system" } = r, { globalVariablesController: f = void 0 } = r, { mix: _ = "" } = r, { customization: h = {} } = r, { builtinProtocols: m = ["http", "https", "tel", "mailto", "intent"] } = r, { extensions: p = /* @__PURE__ */ new Map() } = r, { onError: w = void 0 } = r, { onStat: k = void 0 } = r, { onSubmit: N = void 0 } = r, { onCustomAction: R = void 0 } = r, { onComponent: L = void 0 } = r, { typefaceProvider: re = (y) => "" } = r, { fetchInit: ue = {} } = r, { tooltipRoot: T = void 0 } = r, { customComponents: Y = void 0 } = r, { direction: le = "ltr" } = r, { store: A = void 0 } = r, { pagerChildrenClipEnabled: D = !0 } = r, { pagerMouseDragEnabled: M = !0 } = r, { weekStartDay: U = 0 } = r, { videoPlayerProvider: Z = void 0 } = r, { devtoolCreateHierarchy: me = "lazy" } = r, Ae = !0, ve = Do(c === "desktop");
  if (bn(t, ve, (y) => e(7, i = y)), c === "auto" && typeof matchMedia < "u") {
    const y = matchMedia("(any-pointer: coarse)");
    ve.set(!y.matches), y.addListener(() => {
      ve.set(!y.matches);
    });
  }
  let he = "light", Se = null;
  const Q = Do(le === "rtl" ? "rtl" : "ltr");
  bn(t, Q, (y) => e(8, s = y));
  function xe() {
    u !== "system" || !Se || e(41, he = Se.matches ? "dark" : "light");
  }
  function qe(y) {
    e(12, u = y);
  }
  function Ke() {
    return /* @__PURE__ */ new Map();
  }
  function be() {
    return /* @__PURE__ */ new Map();
  }
  function Te(y) {
    e(11, l = y);
  }
  function pe(y) {
    return Fe(y, I);
  }
  const ge = new Set(m);
  let de = !1, ee = !1;
  a || (ee = !0, I(K(new Error('"id" prop is required'))));
  const ae = { stateChange: !1 }, ne = f || new l_(), we = ne.getLastAddedVariableStore(), Re = ne.getVariables(), Ye = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map();
  let ot = null;
  const ut = /* @__PURE__ */ new Map();
  let rt = 0, yt = [];
  const nt = /* @__PURE__ */ new Set();
  let Pt;
  const ft = [];
  function q(y) {
    return h == null ? void 0 : h[y];
  }
  function fe(y, C, { additionalVars: S, keepComplex: oe = !1, customFunctions: O, emptyVarsError: et, maxDepth: De } = {}) {
    var rr;
    if (!C)
      return Jo(C);
    const Zt = Wo($, S), Ft = Rf(C, y, A, U, De);
    if (!Ft.vars.length)
      if (Ft.hasExpression) {
        const ht = Ft.applyVars(Zt, O);
        if (!((rr = ht.usedVars) != null && rr.size))
          return et && et(), Jo(ht.result);
      } else
        return et && et(), Jo(C);
    const Je = Ft.vars.map((ht) => Zt.get(ht) || kt(ht)).filter(zo);
    return Do(void 0, (ht) => {
      const Sr = /* @__PURE__ */ new Map();
      let Tr;
      const yn = () => {
        var Hr;
        const xr = Ft.applyVars(Zt, O, oe);
        for (const [nn, zn] of Sr)
          (Hr = xr.usedVars) != null && Hr.has(nn) || (zn(), Sr.delete(nn));
        if (xr.usedVars) {
          for (const nn of xr.usedVars)
            if (!Sr.has(nn)) {
              let zn = !0;
              Sr.set(nn, nn.subscribe(() => {
                zn || ht(yn()), zn = !1;
              }));
            }
        }
        return xr.result;
      };
      return Tr = Wi(Je, yn).subscribe((xr) => {
        ht(xr);
      }), () => {
        Tr == null || Tr();
        for (const [xr, Hr] of Sr)
          Hr();
      };
    });
  }
  function st(y, C, S, oe = !1, O = void 0) {
    const et = Rf(C, y, A, U);
    if (!et.hasExpression)
      return C;
    const De = Wo($, S);
    return et.applyVars(De, O, oe).result;
  }
  function Me(y, C, S) {
    const oe = /* @__PURE__ */ new Map(), O = Cs(y, "dict", C);
    oe.set(y, O);
    const et = Cs("index", "integer", S);
    return oe.set("index", et), oe;
  }
  function I(y) {
    w ? w({ error: y }) : (y == null ? void 0 : y.level) === "warn" ? console.warn(y) : console.error(y);
  }
  function Ct(y, C) {
    k && k({ type: y, action: C });
  }
  function lt(y) {
    return y in n;
  }
  function St(y, C) {
    if (!y)
      return { json: y, templateContext: C };
    const S = /* @__PURE__ */ new Set([y.type]);
    for (; y.type && y.type in n; ) {
      if ({ json: y, templateContext: C } = Qw(y, C, n, I), S.has(y.type))
        return { json: y, templateContext: C };
      S.add(y.type);
    }
    return { json: y, templateContext: C };
  }
  let Dt = 0;
  function tt(y) {
    return `${a}-${Dt++}`;
  }
  function X(y) {
    return `divkit-${tt()}`;
  }
  let Et = {}, Tt = {};
  function $t(y, C) {
    const S = `${y}:${C}`;
    if (Tt[S] = Tt[S] || 0, ++Tt[S], Et[S])
      return Et[S];
    const oe = `${tt()}-svg-filter`;
    return e(5, Et = { ...Et, [S]: oe }), oe;
  }
  function Kt(y, C) {
    if (!y)
      return;
    const S = `${y}:${C}`;
    Tt[S] && --Tt[S] === 0 && e(5, Et = Object.keys(Et).reduce(
      (oe, O) => (Tt[O] && (oe[O] = Et[O]), oe),
      {}
    ));
  }
  const je = tt() + "-id-", He = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map();
  function Ve(y) {
    return je + y;
  }
  function $e(y, C) {
    let S = He.get(y) || [];
    return He.has(y) || He.set(y, S), S.push(C), () => {
      S = S.filter((O) => O !== C), S.length || He.delete(y);
      const oe = Ve(y);
      pt.has(oe) && pt.delete(oe);
    };
  }
  function Be(y) {
    var S, oe;
    const C = (oe = (S = He.get(y)) == null ? void 0 : S[0]) == null ? void 0 : oe.node();
    if (C) {
      const O = Ve(y), et = pt.get(O);
      return et && et !== C && et.removeAttribute("id"), C.setAttribute("id", O), pt.set(O, C), O;
    }
    return "";
  }
  async function Vt(y, C) {
    var De, Zt;
    if (!y)
      throw new Error("Missing state id");
    let S = y.split("/");
    const oe = S.length % 2 === 0 && r3(C);
    let O = oe || pr;
    const et = (C == null ? void 0 : C.logError) || I;
    if (!oe)
      if ((De = O.states) != null && De.root) {
        const Ft = O.states.root;
        if (Ft.length > 1) {
          et(K(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: y } }));
          return;
        }
        if (O = await Ft[0](S[0]), !O)
          return;
        S = S.slice(1);
      } else
        return;
    for (let Ft = 0; Ft < S.length; Ft += 2) {
      const Je = S[Ft], rr = S[Ft + 1];
      if ((Zt = O.states) != null && Zt[Je]) {
        const ht = O.states[Je];
        if (ht.length > 1) {
          et(K(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: y } }));
          return;
        }
        if (O = await ht[0](rr), !O)
          return;
      } else
        return;
    }
  }
  async function Oe(y, C, S) {
    var Sr;
    const oe = (y == null ? void 0 : y.logError) || I;
    if (!l3(C)) {
      oe(K(new Error("Incorrect submit action"), {
        additional: { containerId: C.container_id }
      }));
      return;
    }
    const O = He.get(C.container_id);
    if ((O == null ? void 0 : O.length) !== 1) {
      oe(K(new Error("Error resolving container. Found multiple elements that respond to id"), {
        additional: { containerId: C.container_id }
      }));
      return;
    }
    const et = O[0].context(), De = {};
    if (et.variables)
      for (const [Tr, yn] of et.variables) {
        const xr = yn.getValue();
        typeof xr == "bigint" ? De[Tr] = Number(xr) : De[Tr] = xr;
      }
    if (N) {
      Promise.resolve().then(() => N(C, De)).then(() => {
        Mt(S.on_success_actions, { componentContext: y });
      }).catch(() => {
        Mt(S.on_fail_actions, { componentContext: y });
      });
      return;
    }
    const Zt = Object.keys(De).length > 0, Ft = (C.request.method || "post").toLowerCase();
    if ((Ft === "get" || Ft === "head") && Zt) {
      oe(K(new Error("Can't send variables using the get/head method."), { additional: { url: C.request.url } }));
      return;
    }
    let Je = !1;
    const rr = [];
    (Sr = C.request.headers) == null || Sr.forEach((Tr) => {
      rr.push([Tr.name, Tr.value]), Tr.name.toLowerCase() === "content-type" && (Je = !0);
    }), Je || rr.push(["Content-Type", "application/json"]);
    let ht;
    typeof ue == "function" ? ht = ue(C.request.url) : ht = ue, fetch(C.request.url, {
      ...ht,
      method: Ft,
      headers: rr,
      body: Zt ? JSON.stringify(De) : void 0
    }).then((Tr) => {
      if (!Tr.ok)
        throw new Error("Response is not ok");
      Mt(S.on_success_actions, { componentContext: y });
    }).catch((Tr) => {
      oe(K(new Error("Failed to submit"), {
        additional: {
          url: C.request.url,
          originalError: Tr
        }
      })), Mt(S.on_fail_actions, { componentContext: y });
    });
  }
  function bt(y, C) {
    var O, et, De, Zt, Ft, Je, rr, ht, Sr;
    const S = (y == null ? void 0 : y.logError) || I, oe = C.id && it(C.id);
    if (!oe) {
      S(K(new Error('Missing component for "scroll_to" action'), { additional: { id: C.id } }));
      return;
    }
    if (C.animated !== void 0 && typeof C.animated != "boolean") {
      S(K(new Error('Missing properties for "scroll_to" action'), { additional: { id: C.id } }));
      return;
    }
    switch ((O = C.destination) == null ? void 0 : O.type) {
      case "index": {
        typeof C.destination.value == "number" && oe.setCurrentItem(C.destination.value, (et = C.animated) != null ? et : !0);
        break;
      }
      case "offset": {
        typeof C.destination.value == "number" && ((Zt = oe.scrollToPosition) == null || Zt.call(oe, C.destination.value, (De = C.animated) != null ? De : !0));
        break;
      }
      case "start": {
        (Je = oe.scrollToStart) == null || Je.call(oe, (Ft = C.animated) != null ? Ft : !0);
        break;
      }
      case "end": {
        (ht = oe.scrollToEnd) == null || ht.call(oe, (rr = C.animated) != null ? rr : !0);
        break;
      }
      default:
        S(K(new Error('Unknown destination for "scroll_to" action'), {
          additional: {
            id: C.id,
            destination: (Sr = C.destination) == null ? void 0 : Sr.type
          }
        }));
    }
  }
  function Gt(y, C) {
    var O;
    const S = (y == null ? void 0 : y.logError) || I, oe = C.id && it(C.id);
    if (!oe) {
      S(K(new Error('Missing component for "scroll_by" action'), { additional: { id: C.id } }));
      return;
    }
    if (typeof C.item_count != "number" && C.item_count !== void 0 || typeof C.offset != "number" && C.offset !== void 0 || C.overflow !== void 0 && C.overflow !== "clamp" && C.overflow !== "ring" || C.animated !== void 0 && typeof C.animated != "boolean") {
      S(K(new Error('Missing properties for "scroll_by" action'), { additional: { id: C.id } }));
      return;
    }
    (O = oe.scrollCombined) == null || O.call(oe, {
      step: C.item_count,
      offset: C.offset,
      overflow: C.overflow,
      animated: C.animated
    });
  }
  function It(y, C, { item: S, step: oe, overflow: O, animated: et }) {
    var rr, ht, Sr, Tr, yn;
    if (!C)
      throw new Error(`Missing id for "${y}" action`);
    const De = Number(S);
    if (y === "set_current_item" && Number.isNaN(De))
      throw new Error(`Incorrect item for "${y}" action`);
    let Zt = Number(oe);
    if (!oe && (y === "set_previous_item" || y === "set_next_item") && (Zt = 1), !oe && (y === "scroll_backward" || y === "scroll_forward" || y === "scroll_to_position") || Number.isNaN(Zt))
      throw new Error(`Incorrect step value for "${y}" action`);
    if (O && O !== "clamp" && O !== "ring")
      throw new Error(`Incorrect overflow value for "${y}" action`);
    O = O || "clamp";
    const Ft = et === null || et !== "0" && et !== "false", Je = it(C);
    if (Je)
      switch (y) {
        case "set_current_item":
          Je.setCurrentItem(De, Ft);
          return;
        case "set_previous_item":
          Je.setPreviousItem(Zt, O, Ft);
          return;
        case "set_next_item":
          Je.setNextItem(Zt, O, Ft);
          return;
        case "scroll_to_start":
          (rr = Je.scrollToStart) == null || rr.call(Je, Ft);
          return;
        case "scroll_to_end":
          (ht = Je.scrollToEnd) == null || ht.call(Je, Ft);
          return;
        case "scroll_backward":
          (Sr = Je.scrollCombined) == null || Sr.call(Je, {
            offset: -Zt,
            overflow: O,
            animated: Ft
          });
          return;
        case "scroll_forward":
          (Tr = Je.scrollCombined) == null || Tr.call(Je, {
            offset: Zt,
            overflow: O,
            animated: Ft
          });
          return;
        case "scroll_to_position":
          (yn = Je.scrollToPosition) == null || yn.call(Je, Zt, Ft);
          return;
      }
  }
  function _r(y, C, S) {
    const oe = (S == null ? void 0 : S.logError) || I;
    if (y) {
      const O = it(y);
      O ? C === "start" ? O.start() : C === "pause" ? O.pause() : oe(K(new Error("Unknown video action"), { additional: { id: y, action: C } })) : oe(K(new Error("Video component is not found"), { additional: { id: y, action: C } }));
    } else
      oe(K(new Error("Missing id in video action"), { additional: { action: C } }));
  }
  function Fe(y, C, S) {
    var oe, O, et;
    if (y.templates)
      for (const De in y.templates)
        n.hasOwnProperty(De) || (n[De] = y.templates[De]);
    if (Array.isArray((oe = y.patch) == null ? void 0 : oe.changes)) {
      if (y.patch.mode === "transactional") {
        const De = y.patch.changes.find((Zt) => {
          const Ft = yr.get(Zt.id);
          if (!Ft)
            return !0;
          const Je = Array.isArray(Zt.items) ? Zt.items.length : 0;
          return !!(Ft.isSingleMode && Je !== 1);
        });
        if (De)
          return C(K(new Error("Skipping transactional, child is not found or broken"), { additional: { url: S, id: De.id } })), Mt((O = y.patch) == null ? void 0 : O.on_failed_actions), !1;
      }
      return y.patch.changes.forEach((De) => {
        const Zt = yr.get(De.id);
        Zt && Zt.replaceWith(De.id, De.items);
      }), Mt((et = y.patch) == null ? void 0 : et.on_applied_actions), !0;
    }
    return !1;
  }
  function vt(y, C, S) {
    const oe = (S == null ? void 0 : S.logError) || I;
    if (y) {
      let O;
      typeof ue == "function" ? O = ue(y) : O = ue, fetch(y, O).then((et) => {
        if (!et.ok)
          throw new Error("Response is not ok");
        return et.json();
      }).then((et) => {
        if (!et) {
          oe(K(new Error("Incorrect patch"), { additional: { url: y } })), Mt(C == null ? void 0 : C.on_fail_actions, { componentContext: S });
          return;
        }
        Fe(et, oe, y) ? Mt(C == null ? void 0 : C.on_success_actions, { componentContext: S }) : Mt(C == null ? void 0 : C.on_fail_actions, { componentContext: S });
      }).catch((et) => {
        oe(K(new Error("Failed to download the patch"), { additional: { url: y, originalError: et } })), Mt(C == null ? void 0 : C.on_fail_actions, { componentContext: S });
      });
    } else
      oe(K(new Error("Missing url in download action"), { additional: { url: y } }));
  }
  function or(y, C, S) {
    var Zt;
    const oe = (S == null ? void 0 : S.logError) || I;
    if (!y) {
      oe(K(new Error("Missing id in show_tooltip action")));
      return;
    }
    const O = jt.get(y);
    if (!O) {
      oe(K(new Error("Tooltip with the provided id is not found"), { additional: { id: y } }));
      return;
    }
    if (C !== "true" && C !== !0 && nt.has(y))
      return;
    nt.add(y);
    const et = {
      internalId: ++rt,
      ownerNode: O.onwerNode,
      desc: O.tooltip,
      timeoutId: 0,
      componentContext: S
    };
    e(3, yt = [...yt, et]);
    const De = (Zt = O.tooltip.duration) != null ? Zt : 5e3;
    De && (et.timeoutId = window.setTimeout(
      () => {
        et.timeoutId = 0, e(3, yt = yt.filter((Ft) => Ft.internalId !== et.internalId));
      },
      De
    ));
  }
  function tr(y, C) {
    const S = (C == null ? void 0 : C.logError) || I;
    if (!y) {
      S(K(new Error("Missing id in hide_tooltip action")));
      return;
    }
    e(3, yt = yt.filter((oe) => {
      const O = oe.desc.id !== y;
      return !O && oe.timeoutId && (clearTimeout(oe.timeoutId), oe.timeoutId = null), O;
    }));
  }
  function Qt(y, C, S, oe, O) {
    const et = (y == null ? void 0 : y.logError) || I;
    if (!A) {
      et(K(new Error("Store is not configured")));
      return;
    }
    let De = S;
    if (!C || !De || !oe || !O) {
      et(K(new Error("Missing required params for set_stored_value")));
      return;
    }
    if (!B3.has(oe)) {
      et(K(new Error("Incorrect stored type")));
      return;
    }
    if (oe === "boolean" && (De = De === "true" || De === "1"), A.set)
      A.set(C, oe, De, Number(O));
    else if (A.setValue) {
      if (!O3.has(oe)) {
        et(K(new Error("Incorrect stored type")));
        return;
      }
      if (typeof De != "string" && typeof De != "number" && typeof De != "boolean") {
        et(K(new Error("Incorrect stored value")));
        return;
      }
      (oe === "integer" || oe === "number") && (De = Number(De)), A.setValue(C, oe, De, Number(O));
    }
  }
  function hr(y) {
    kr(st(I, y, void 0, !0), y);
  }
  async function kr(y, C, S) {
    var Zt, Ft;
    const oe = y.scope_id, O = (S == null ? void 0 : S.logError) || I;
    if (oe) {
      const Je = Ir.get(oe);
      if (Je && (Je == null ? void 0 : Je.size) > 1)
        O(K(new Error(`Ambiguous scope id. There are ${Je.size} divs with id '${oe}'`), { additional: { count: Je.size, scopeId: oe } }));
      else if ((Je == null ? void 0 : Je.size) === 1) {
        const rr = Je.values().next().value;
        rr && (S = rr);
      } else {
        O(K(new Error("The scope with the specified scope_id is missing"), { additional: { scopeId: oe } }));
        return;
      }
    }
    const et = y.url ? String(y.url) : "", De = y.typed;
    if (Js(y)) {
      if (De)
        switch (De.type) {
          case "set_variable": {
            const { variable_name: Je, value: rr } = De;
            if (Je && rr) {
              const ht = (S == null ? void 0 : S.getVariable(Je)) || $.get(Je);
              ht ? ht.getType() === rr.type ? ht.setValue(rr.value) : O(K(new Error("Trying to set value with invalid type"), { additional: { name: Je, type: rr.type } })) : O(K(new Error("Cannot find variable"), { additional: { name: Je } }));
            } else
              O(K(new Error("Incorrect set_variable action"), { additional: { name: Je } }));
            break;
          }
          case "array_insert_value":
            X2(S, $, O, De);
            break;
          case "array_remove_value":
            Z2(S, $, O, De);
            break;
          case "array_set_value":
            Q2(S, $, O, De);
            break;
          case "copy_to_clipboard":
            $2(O, De);
            break;
          case "focus_element": {
            const Je = De.element_id && vr.get(De.element_id);
            Je ? Je.focus() : O(K(new Error("Incorrect focus_element action"), {
              additional: { elementId: De.element_id }
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
            x2(S, $, O, De);
            break;
          }
          case "animator_start": {
            const Je = De.animator_id && (S == null ? void 0 : S.getAnimator(De.animator_id));
            if (!Je) {
              O(K(new Error("Missing animator"), {
                additional: { animator_id: De.animator_id }
              }));
              return;
            }
            const { duration: rr, start_delay: ht, interpolator: Sr, direction: Tr, repeat_count: yn, start_value: xr, end_value: Hr } = De, nn = S ? S.getJsonWithVars(Je) : st(I, Je), zn = {
              ...nn,
              end_actions: Je.end_actions,
              cancel_actions: Je.cancel_actions,
              duration: rr !== void 0 ? rr : nn.duration,
              start_delay: ht !== void 0 ? ht : nn.start_delay,
              interpolator: Sr !== void 0 ? Sr : nn.interpolator,
              direction: Tr !== void 0 ? Tr : nn.direction,
              repeat_count: yn !== void 0 ? yn : nn.repeat_count,
              start_value_typed: xr,
              end_value_typed: Hr
            }, Bn = Je.variable_name && ((S == null ? void 0 : S.getVariable(Je.variable_name)) || $.get(Je.variable_name));
            if (!Bn)
              return;
            const so = ut.get(Je.id);
            so && so.stop();
            const Tn = t3(
              zn,
              Bn,
              () => {
                ut.delete(Je.id);
              },
              (Lt, b) => ((S == null ? void 0 : S.execAnyActions) || Mt)(Lt, b)
            );
            Tn && ut.set(Je.id, Tn);
            break;
          }
          case "animator_stop": {
            const Je = ut.get(De.animator_id);
            Je && (Je.stop(), ut.delete(De.animator_id));
            break;
          }
          case "show_tooltip": {
            or(De.id, De.multiple, S);
            break;
          }
          case "hide_tooltip": {
            tr(De.id, S);
            break;
          }
          case "timer": {
            ot ? ot.execTimerAction(De.id, De.action) : O(K(new Error("Incorrect timer action"), {
              additional: {
                id: De.id,
                action: De.action
              }
            }));
            break;
          }
          case "download": {
            vt(De.url, C.typed, S);
            break;
          }
          case "video": {
            _r(De.id, De.action, S);
            break;
          }
          case "set_stored_value": {
            Qt(S, De.name, (Zt = De.value) == null ? void 0 : Zt.value, (Ft = De.value) == null ? void 0 : Ft.type, De.lifetime);
            break;
          }
          case "set_state": {
            await Vt(De.state_id, S);
            break;
          }
          case "submit": {
            await Oe(S, De, C.typed);
            break;
          }
          case "scroll_to": {
            bt(S, De);
            break;
          }
          case "scroll_by": {
            Gt(S, De);
            break;
          }
          case "update_structure": {
            a3(S, $, O, De);
            break;
          }
          case "custom": {
            br({
              ...C,
              // todo remove in major release
              url: ""
            });
            break;
          }
          default:
            O(K(new Error("Unknown type of action"), { additional: { type: De.type } }));
        }
      else if (et)
        try {
          const Je = et.replace(/div-action:\/\//, ""), rr = /([^?]+)\?(.+)/.exec(Je);
          if (!rr)
            return;
          const ht = new URLSearchParams(rr[2]);
          switch (rr[1]) {
            case "set_state":
              await Vt(ht.get("state_id"), S);
              break;
            case "set_current_item":
            case "set_previous_item":
            case "set_next_item":
            case "scroll_to_start":
            case "scroll_to_end":
            case "scroll_backward":
            case "scroll_forward":
            case "scroll_to_position":
              It(rr[1], ht.get("id"), {
                item: ht.get("item"),
                step: ht.get("step"),
                overflow: ht.get("overflow"),
                animated: ht.get("animated")
              });
              break;
            case "set_variable":
              const Sr = ht.get("name"), Tr = ht.get("value");
              if (Sr && Tr !== null) {
                const Hr = (S == null ? void 0 : S.getVariable(Sr)) || $.get(Sr);
                Hr ? Hr.set(Tr) : O(K(new Error("Cannot find variable"), { additional: { name: Sr } }));
              } else
                O(K(new Error("Incorrect set_variable_action"), { additional: { url: Je } }));
              break;
            case "timer":
              const yn = ht.get("action"), xr = ht.get("id");
              ot ? ot.execTimerAction(xr, yn) : O(K(new Error("Incorrect timer action"), {
                additional: { id: xr, action: yn }
              }));
              break;
            case "video":
              _r(ht.get("id"), ht.get("action"), S);
              break;
            case "download":
              vt(ht.get("url"), C.download_callbacks, S);
              break;
            case "show_tooltip":
              or(ht.get("id"), ht.get("multiple"), S);
              break;
            case "hide_tooltip":
              tr(ht.get("id"), S);
              break;
            case "set_stored_value": {
              Qt(S, ht.get("name"), ht.get("value"), ht.get("type"), ht.get("lifetime"));
              break;
            }
            default:
              O(K(new Error("Unknown type of action"), { additional: { url: et } }));
          }
        } catch (Je) {
          O(K(Je, { additional: { url: et } }));
        }
    }
  }
  async function Mt(y, C = {}) {
    var O;
    if (!y || !Array.isArray(y))
      return;
    const S = ((O = C.componentContext) == null ? void 0 : O.logError) || I, oe = (et) => C.componentContext ? C.componentContext.getJsonWithVars(et, C.additionalVars, !0) : st(S, et, C.additionalVars, !0);
    for (let et = 0; et < y.length; ++et) {
      let De = oe(y[et]);
      const Zt = De.is_enabled;
      if (Zt === 0 || Zt === !1)
        continue;
      const Ft = De.url;
      if (De.typed)
        await kr(De, y[et], C.componentContext);
      else if (Ft) {
        const rr = Ll(Ft);
        if (rr)
          if (Ol(rr, ge)) {
            if (C.processUrls)
              if (De.target === "_blank") {
                const ht = window.open("", "_blank");
                ht && (ht.opener = null, ht.location = Ft);
              } else
                location.href = Ft;
          } else rr === "div-action" ? (await kr(De, y[et], C.componentContext), await Vn()) : De.log_id && (br(De), await Vn());
      } else C.node && Array.isArray(De.menu_items) && De.menu_items.length && e(4, Pt = {
        items: De.menu_items,
        node: C.node,
        componentContext: C.componentContext
      });
    }
    y.forEach((et) => {
      et.log_id && Ct(C.logType || "click", et);
    });
  }
  function br(y) {
    R == null || R(y);
  }
  function Wt(y, C) {
    const S = (y == null ? void 0 : y.logError) || I;
    if (!Array.isArray(C) || !C.length)
      return;
    const oe = [];
    return C.forEach((O) => {
      let et = !1;
      if (typeof O.condition != "string") {
        S(K(new Error("variable_trigger has a condition that is not a string"), {
          additional: { condition: O.condition }
        }));
        return;
      }
      if (!Array.isArray(O.actions)) {
        S(K(new Error("variable_trigger has no actions"), {
          additional: { condition: O.condition }
        }));
        return;
      }
      const De = O.mode || "on_condition";
      if (De !== "on_variable" && De !== "on_condition") {
        S(K(new Error("variable_trigger has an unsupported mode"), { additional: { mode: De } }));
        return;
      }
      const Ft = fe(S, { condition: O.condition }, {
        additionalVars: y == null ? void 0 : y.variables,
        customFunctions: y == null ? void 0 : y.customFunctions,
        emptyVarsError: () => {
          S(K(new Error("variable_trigger must have variables in the condition"), {
            additional: { condition: O.condition }
          }));
        }
      }).subscribe(async (Je) => {
        Je.condition !== void 0 && (// if condition is truthy
        Je.condition && // and trigger mode matches
        (De === "on_variable" || De === "on_condition" && et === !1) ? (et = !!Je.condition, y ? await y.execAnyActions(O.actions, { logType: "trigger" }) : await Mt(O.actions, { logType: "trigger" })) : et = !!Je.condition);
      });
      oe.push(Ft);
    }), () => {
      oe.forEach((O) => {
        O();
      });
    };
  }
  function _t(y) {
    return ae[y];
  }
  function er(y, C) {
    ae[y] = C;
  }
  const ie = /* @__PURE__ */ new Map(), yr = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Map(), jt = /* @__PURE__ */ new Map(), Ir = /* @__PURE__ */ new Map();
  function qr(y, C, S = "error") {
    if (ie.has(y)) {
      I(K(new Error("Duplicate instance id"), {
        level: S,
        additional: { id: y }
      }));
      return;
    }
    ie.set(y, C);
  }
  function lr(y) {
    ie.delete(y);
  }
  function it(y) {
    if (!ie.has(y)) {
      I(K(new Error("Missing instance with id"), { additional: { id: y } }));
      return;
    }
    return ie.get(y);
  }
  function At(y, C) {
    yr.set(y, C);
  }
  function Jt(y) {
    yr.delete(y);
  }
  function Yt(y, C) {
    vr.set(y, C);
  }
  function sr(y) {
    vr.delete(y);
  }
  function dt(y, C) {
    const S = C.id;
    S && (jt.has(S) && I(K(new Error("Duplicate tooltip id"), { additional: { id: S } })), jt.set(S, { onwerNode: y, tooltip: C }));
  }
  function ce(y) {
    const C = y.id;
    C && (jt.delete(C), yt.some((S) => S.desc.id === C) && e(3, yt = yt.filter((S) => S.desc.id !== C)));
  }
  function kt(y) {
    const C = Le.get(y) || Do(void 0);
    return Le.has(y) || Le.set(y, C), C;
  }
  function nr(y, C, S) {
    const oe = Ne.get(y);
    if (oe)
      return oe;
    const O = io(y, C, S);
    return Ne.set(y, O), O;
  }
  function Xt() {
    if (!at)
      return;
    at[he].forEach((C) => {
      const S = $.get(C.name);
      S && S.setValue(C.color);
    });
  }
  function jr() {
    return ge;
  }
  function v(y, C) {
    const S = p.get(y);
    if (S)
      return new S(C || {});
  }
  function se(y) {
    return {
      variables: Wo($, y.variables),
      derviedExpression(C) {
        return y.getDerivedFromVars(C);
      },
      processExpressions(C) {
        return y.getJsonWithVars(C);
      },
      execAction: hr,
      logError: I,
      getComponentProperty(C) {
        return y.getJsonWithVars(y.json[C]);
      },
      direction: le
    };
  }
  function d(y, C) {
    const S = /* @__PURE__ */ new Map(), oe = (C == null ? void 0 : C.logError) || I;
    return y.forEach((O) => {
      if (S) {
        try {
          R2(O);
        } catch (Zt) {
          oe(K(Zt));
          return;
        }
        const et = O, De = S.get(et.name) || [];
        De.push(H2(et)), S.set(et.name, De);
      }
    }), S;
  }
  function z(y) {
    const C = {
      id: "",
      json: {},
      path: [],
      templateContext: {},
      logError(S) {
        S.additional = S.additional || {}, S.additional.path = C.path.join("/"), I(S);
      },
      execAnyActions(S, oe = {}) {
        return Mt(S, {
          componentContext: C,
          processUrls: oe.processUrls,
          node: oe.node,
          logType: oe.logType,
          additionalVars: oe.additionalVars
        });
      },
      getDerivedFromVars(S, oe, O = !1, et = 1 / 0) {
        return fe(C.logError, S, {
          additionalVars: Wo(C.variables, oe),
          keepComplex: O,
          customFunctions: C.customFunctions,
          maxDepth: et
        });
      },
      getJsonWithVars(S, oe, O = !1) {
        return st(C.logError, S, Wo(C.variables, oe), O, C.customFunctions);
      },
      evalExpression(S, oe, O) {
        return ja(Wo($, C.variables), C.customFunctions, S, oe, O);
      },
      produceChildContext(S, oe = {}) {
        const O = z(this);
        let et = S, De = this.templateContext;
        const { templateContext: Zt, json: Ft } = St(et, De);
        if (O.json = Ft, O.templateContext = Zt, O.origJson = S, O.id = oe.id || Ft.id || "", O.id) {
          let ht = Ir.get(O.id);
          ht || (ht = /* @__PURE__ */ new Set(), Ir.set(O.id, ht)), ht.add(O);
        }
        oe.key && (O.key = oe.key), oe.path !== void 0 && O.path.push(String(oe.path)), S.type && !oe.isRootState && O.path.push(S.type), oe.isTooltipRoot && (O.isTooltipRoot = !0);
        let Je;
        Array.isArray(Ft.variables) ? (Je = Wo(this.variables, Wo(oe.variables, /* @__PURE__ */ new Map())), Ft.variables.forEach((ht) => {
          const Sr = Ut(ht, O, Je);
          Sr && Je && Je.set(Sr.getName(), Sr);
        })) : oe.variables ? Je = Wo(this.variables, oe.variables) : this.variables && (Je = this.variables), O.variables = Je;
        let rr;
        return Array.isArray(Ft.functions) && (rr = d(Ft.functions, this)), O.customFunctions = W2(this.customFunctions, rr), Array.isArray(Ft.animators) && (O.animators = Ft.animators.reduce(
          (ht, Sr) => (Sr.id && (ht[Sr.id] = Sr), ht),
          {}
        )), oe.fake && (O.fakeElement = oe.fake), oe.isRootState && (O.isRootState = !0), O;
      },
      dup(S) {
        return { ...C, fakeElement: S };
      },
      getVariable(S, oe) {
        var et;
        const O = ((et = C.variables) == null ? void 0 : et.get(S)) || $.get(S);
        if (O) {
          const De = O.getType();
          if (oe && De !== oe) {
            C.logError(K(new Error(`Variable should have type "${oe}"`), { additional: { name: S, foundType: De } }));
            return;
          }
        }
        return O;
      },
      getAnimator(S) {
        var oe, O;
        return ((oe = C.animators) == null ? void 0 : oe[S]) || ((O = C.parent) == null ? void 0 : O.getAnimator(S)) || void 0;
      },
      registerState(S, oe) {
        const O = n3(C.parent);
        return O && (O.states = O.states || {}, O.states[S] = O.states[S] || [], O.states[S].push(oe)), () => {
          var et;
          (et = O == null ? void 0 : O.states) != null && et[S] && (O.states[S] = O.states[S].filter((De) => De !== oe), O.states[S].length || delete O.states[S]);
        };
      },
      registerPager(S) {
        const oe = C.parent;
        return oe ? (oe.pagers = oe.pagers || /* @__PURE__ */ new Map(), oe.pagers.has(S) ? {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          update() {
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          destroy() {
          }
        } : (oe.pagers.set(S, null), {
          update(O) {
            var Ft, Je;
            oe.pagers && oe.pagers.set(S, O);
            const et = S ? (Ft = oe.pagerListeners) == null ? void 0 : Ft.get(S) : void 0, De = (Je = oe.pagerListeners) == null ? void 0 : Je.get(void 0);
            [...et || [], ...De || []].forEach((rr) => {
              rr(O);
            });
          },
          destroy() {
            oe.pagers && oe.pagers.delete(S);
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
      listenPager(S, oe) {
        var Ft, Je, rr;
        let O = C.parent;
        for (; O && !(O.pagers && (S ? O.pagers.get(S) : (Ft = O.pagers) != null && Ft.size)); )
          O = O.parent;
        if (!O)
          return () => {
          };
        O.pagerListeners = C.pagerListeners || /* @__PURE__ */ new Map();
        const et = O.pagerListeners.get(S) || [];
        O.pagerListeners.has(S) || O.pagerListeners.set(S, et), et.push(oe);
        const De = S || ((Je = O.pagers) == null ? void 0 : Je.keys().next().value) || void 0, Zt = (rr = O.pagers) == null ? void 0 : rr.get(De);
        return Zt && oe(Zt), () => {
          if (!O.pagerListeners)
            return;
          let ht = O.pagerListeners.get(De);
          ht && (ht = ht.filter((Sr) => Sr !== oe) || [], ht.length ? O.pagerListeners.set(S, ht) : O.pagerListeners.delete(S));
        };
      },
      destroy() {
        const S = Ir.get(C.id);
        S && (S.delete(C), S.size || Ir.delete(C.id));
      }
    };
    return y ? (C.parent = y, C.path = y.path.slice(), y.fakeElement && (C.fakeElement = y.fakeElement)) : (C.json = { type: "root" }, C.isRootState = !0), C;
  }
  function Ie(y) {
    Ae ? ft.push(y) : clearTimeout(y);
  }
  _i(Kr, {
    logStat: Ct,
    hasTemplate: lt,
    genId: tt,
    genClass: X,
    execCustomAction: br,
    processVariableTriggers: Wt,
    isRunning: _t,
    setRunning: er,
    pagerChildrenClipEnabled: D,
    pagerMouseDragEnabled: M,
    registerInstance: qr,
    unregisterInstance: lr,
    registerParentOf: At,
    unregisterParentOf: Jt,
    registerTooltip: dt,
    unregisterTooltip: ce,
    onTooltipClose: An,
    tooltipRoot: T,
    registerFocusable: Yt,
    unregisterFocusable: sr,
    addSvgFilter: $t,
    removeSvgFilter: Kt,
    registerId: $e,
    getComponentId: Be,
    preparePrototypeVariables: Me,
    getCustomization: q,
    getBuiltinProtocols: jr,
    getExtension: v,
    getExtensionContext: se,
    registerTimeout: Ie,
    typefaceProvider: re,
    isDesktop: ve,
    isPointerFocus: Aa,
    customComponents: Y,
    direction: Q,
    videoPlayerProvider: Z,
    awaitGlobalVariable: nr,
    componentDevtool: void 0,
    devtoolCreateHierarchy: "lazy"
  }), _i(To, {
    hasAction() {
      return !1;
    }
  }), _i(da, {
    runVisibilityTransition(y, C, S, oe, O) {
      return Promise.resolve();
    },
    registerChildWithTransitionIn(y, C, S, oe) {
      return Promise.resolve();
    },
    registerChildWithTransitionOut(y, C, S, oe) {
      return Promise.resolve();
    },
    registerChildWithTransitionChange(y, C, S, oe) {
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
  }), _i(_a, { isEnabled: Jo(!0) });
  function We(y, C) {
    const S = $.get(y);
    return (S == null ? void 0 : S.getType()) === C;
  }
  function ke(y, C) {
    const S = $.get(y);
    S ? S.setValue(C) : I(K(new Error("Cannot find variable"), { additional: { name: y } }));
  }
  function B(y, C, S) {
    const oe = (C == null ? void 0 : C.logError) || I, O = y.name, et = y.value_type;
    if (typeof y.get != "string" || !y.get) {
      oe(K(new Error("Incorrect property getter"), { additional: { name: O } }));
      return;
    }
    if (!O) {
      oe(K(new Error("Missing property name")));
      return;
    }
    if (!et) {
      oe(K(new Error("Missing property value_type")));
      return;
    }
    const De = C ? C.getDerivedFromVars(y.get, void 0, !0) : fe(I, y.get, { keepComplex: !0 });
    if (Pl(De) === void 0)
      return;
    const Ft = (Je) => {
      const rr = Cs(y.new_value_variable_name || "new_value", y.value_type, Je), ht = new Map(S);
      ht.set(rr.getName(), rr), Array.isArray(y.set) && y.set.length ? C ? C.execAnyActions(y.set, { additionalVars: ht }) : Mt(y.set, { additionalVars: ht }) : oe(K(new Error("Cannot set property. No setters provided."), { additional: { name: O } }));
    };
    return {
      getName() {
        return O;
      },
      subscribe(Je) {
        return De.subscribe(Je);
      },
      set(Je) {
        const rr = p1(Je, et);
        Ft(rr);
      },
      setValue: Ft,
      getValue() {
        return Pl(De);
      },
      getType() {
        return et;
      }
    };
  }
  function Ut(y, C, S) {
    if (y.type === "property")
      return B(y, C, S);
    if (!y.type || !y.name || !(y.type in Jl) || !("value" in y))
      return;
    const oe = y.value;
    let O = C ? C.getJsonWithVars(oe, S, !0) : st(I, oe, S, !0);
    if (!(oe && typeof oe == "string" && O === void 0)) {
      y.type === "integer" && typeof O == "number" && (O > Number.MAX_SAFE_INTEGER || O < Number.MIN_SAFE_INTEGER) && I(K(new Error("The value of the integer variable could lose accuracy"), {
        level: "warn",
        additional: { name: y.name, value: O }
      }));
      try {
        return io(y.name, y.type, O);
      } catch (et) {
        I(K(et, { additional: { name: y.name } }));
      }
    }
  }
  function Ht(y) {
    const C = Ut(y);
    C && (Ye.set(y.name, C), $.set(y.name, C));
  }
  for (const [y, C] of Re)
    $.has(y) || $.set(y, C);
  const Xe = (Yr = l == null ? void 0 : l.card) == null ? void 0 : Yr.variables;
  Array.isArray(Xe) && Xe.forEach((y) => {
    if (y && y.name) {
      if (Ye.has(y.name)) {
        I(K(new Error("Duplicate variable"), { additional: { name: y.name } }));
        return;
      }
      Ht(y);
    }
  });
  const at = l.palette;
  at && at[he].forEach((C) => {
    if (Ye.has(C.name)) {
      I(K(new Error("Duplicate variable"), { additional: { name: C.name } }));
      return;
    }
    try {
      const S = io(C.name, "color", C.color);
      Ye.set(C.name, S), $.set(C.name, S);
    } catch (S) {
      I(K(S, { additional: { name: C.name } }));
    }
  }), we.subscribe((y) => {
    if (y && !$.has(y)) {
      const C = Re.get(y);
      $.set(y, C);
      const S = Le.get(y);
      if (S) {
        let O = 0;
        C.subscribe(() => {
          S.set(++O);
        });
      }
      const oe = Ne.get(y);
      oe && oe.getType() === C.getType() && C.subscribe((O) => {
        oe.set(O);
      });
    }
  });
  const qt = () => {
    var y;
    Wt(void 0, (y = l == null ? void 0 : l.card) == null ? void 0 : y.variable_triggers);
  }, Vr = (Xr = l == null ? void 0 : l.card) == null ? void 0 : Xr.timers;
  if (Vr && typeof document < "u") {
    const y = ot = new Y2({
      logError: I,
      applyVars: (C) => st(I, C),
      hasVariableWithType: We,
      setVariableValue: ke,
      execAnyActions: Mt
    });
    Vr.forEach((C) => y.createTimer(C));
  }
  const pr = z();
  Array.isArray((gn = l.card) == null ? void 0 : gn.functions) && (pr.customFunctions = d(l.card.functions));
  let Pr;
  function An(y) {
    e(3, yt = yt.filter((C) => C.internalId !== y));
  }
  Xn(() => {
    ks++, ks === 1 && (window.addEventListener("keydown", ed), window.addEventListener("pointerdown", td)), Vn().then(() => {
      Ae && qt();
    });
  }), ln(() => {
    Ae = !1, ks--, ks || (window.removeEventListener("keydown", ed), window.removeEventListener("pointerdown", td));
    for (const [y, C] of ut)
      C.stop();
    ot && ot.destroy(), yt.forEach((y) => {
      y.timeoutId && (clearTimeout(y.timeoutId), y.timeoutId = null);
    }), ft.forEach((y) => {
      clearTimeout(y);
    });
  });
  const Ee = () => e(4, Pt = void 0);
  return t.$$set = (y) => {
    "id" in y && e(13, a = y.id), "json" in y && e(11, l = y.json), "platform" in y && e(14, c = y.platform), "theme" in y && e(12, u = y.theme), "globalVariablesController" in y && e(15, f = y.globalVariablesController), "mix" in y && e(0, _ = y.mix), "customization" in y && e(16, h = y.customization), "builtinProtocols" in y && e(17, m = y.builtinProtocols), "extensions" in y && e(18, p = y.extensions), "onError" in y && e(19, w = y.onError), "onStat" in y && e(20, k = y.onStat), "onSubmit" in y && e(21, N = y.onSubmit), "onCustomAction" in y && e(22, R = y.onCustomAction), "onComponent" in y && e(23, L = y.onComponent), "typefaceProvider" in y && e(24, re = y.typefaceProvider), "fetchInit" in y && e(25, ue = y.fetchInit), "tooltipRoot" in y && e(26, T = y.tooltipRoot), "customComponents" in y && e(27, Y = y.customComponents), "direction" in y && e(28, le = y.direction), "store" in y && e(29, A = y.store), "pagerChildrenClipEnabled" in y && e(30, D = y.pagerChildrenClipEnabled), "pagerMouseDragEnabled" in y && e(31, M = y.pagerMouseDragEnabled), "weekStartDay" in y && e(32, U = y.weekStartDay), "videoPlayerProvider" in y && e(33, Z = y.videoPlayerProvider), "devtoolCreateHierarchy" in y && e(34, me = y.devtoolCreateHierarchy);
  }, t.$$.update = () => {
    var y, C;
    if (t.$$.dirty[0] & /*theme*/
    4096 | t.$$.dirty[1] & /*themeQuery*/
    2048 && (u === "light" || u === "dark" ? e(41, he = u) : u === "system" ? typeof matchMedia < "u" ? (Se || (e(42, Se = matchMedia("(prefers-color-scheme: dark)")), Se.addListener(xe)), e(41, he = Se.matches ? "dark" : "light")) : e(41, he = "light") : I(K(new Error("Unsupported theme")))), t.$$.dirty[1] & /*currentTheme*/
    1024 && he && Xt(), t.$$.dirty[0] & /*json*/
    2048) {
      e(1, de = !1);
      const S = U2(l);
      S && (e(1, de = !0), I(S));
    }
    if (t.$$.dirty[0] & /*json*/
    2048 && (n = l.templates || {}), t.$$.dirty[0] & /*json*/
    2048 && (y = l == null ? void 0 : l.card) != null && y.variables && Array.isArray(l.card.variables) && l.card.variables !== Xe && l.card.variables.forEach((S) => {
      S && S.name && !Ye.has(S.name) && !$.has(S.name) && Ht(S);
    }), t.$$.dirty[0] & /*json*/
    2048 && e(44, o = (C = l == null ? void 0 : l.card) == null ? void 0 : C.states), t.$$.dirty[0] & /*hasError, hasIdError*/
    6 | t.$$.dirty[1] & /*states, rootComponentContext*/
    12288 && o && !de && !ee) {
      const S = {
        type: "state",
        id: "root",
        width: { type: "match_parent" },
        height: { type: "match_parent" },
        states: o.map((oe) => ({
          state_id: oe.state_id.toString(),
          div: oe.div
        }))
      };
      e(6, Pr = pr.produceChildContext(S, { isRootState: !0 }));
    }
  }, [
    _,
    de,
    ee,
    yt,
    Pt,
    Et,
    Pr,
    i,
    s,
    ve,
    Q,
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
    re,
    ue,
    T,
    Y,
    le,
    A,
    D,
    M,
    U,
    Z,
    me,
    qe,
    Ke,
    be,
    Te,
    pe,
    hr,
    he,
    Se,
    pr,
    o,
    Ee
  ];
}
class W3 extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      H3,
      L3,
      Er,
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
        await Vn();
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
class Y3 {
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
function G3(t) {
  return t instanceof HTMLElement;
}
function Z3(t) {
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
function x3(t, r = {}) {
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
function $3(t) {
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
    }
  };
}
export {
  Y3 as Gesture,
  K3 as SizeProvider,
  q3 as createGlobalVariablesController,
  io as createVariable,
  Z3 as lottieExtensionBuilder,
  x3 as markdownExtensionBuilder,
  $3 as render
};
//# sourceMappingURL=client.mjs.map

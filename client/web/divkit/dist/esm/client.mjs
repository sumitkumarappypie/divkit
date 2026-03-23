var g_ = Object.defineProperty;
var h_ = (t, r, e) => r in t ? g_(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var Er = (t, r, e) => h_(t, typeof r != "symbol" ? r + "" : r, e);
/*!
    DivKit v32.39.0
    https://github.com/divkit/divkit
    @licence Apache-2.0
*/
function A() {
}
const el = (t) => t;
function jo(t, r) {
  for (const e in r) t[e] = r[e];
  return (
    /** @type {T & S} */
    t
  );
}
function td(t) {
  return t();
}
function Ia() {
  return /* @__PURE__ */ Object.create(null);
}
function Rr(t) {
  t.forEach(td);
}
function Nr(t) {
  return typeof t == "function";
}
function m_(t, r) {
  return t != t ? r == r : t !== r || t && typeof t == "object" || typeof t == "function";
}
let fs;
function Kn(t, r) {
  return t === r ? !0 : (fs || (fs = document.createElement("a")), fs.href = r, t === fs.href);
}
function Vr(t, r) {
  return t != t ? r == r : t !== r;
}
function b_(t) {
  return Object.keys(t).length === 0;
}
function V(t, ...r) {
  if (t == null) {
    for (const n of r)
      n(void 0);
    return A;
  }
  const e = t.subscribe(...r);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function Pl(t) {
  let r;
  return V(t, (e) => r = e)(), r;
}
function bn(t, r, e) {
  t.$$.on_destroy.push(V(r, e));
}
function tl(t, r, e, n) {
  if (t) {
    const o = rd(t, r, e, n);
    return t[0](o);
  }
}
function rd(t, r, e, n) {
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
    const s = rd(r, e, n, i);
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
  return t && Nr(t.destroy) ? t.destroy : A;
}
function Da(t) {
  const r = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return r ? [parseFloat(r[1]), r[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const nd = typeof window < "u";
let la = nd ? () => window.performance.now() : () => Date.now(), aa = nd ? (t) => requestAnimationFrame(t) : A;
const Pi = /* @__PURE__ */ new Set();
function od(t) {
  Pi.forEach((r) => {
    r.c(t) || (Pi.delete(r), r.f());
  }), Pi.size !== 0 && aa(od);
}
function ca(t) {
  let r;
  return Pi.size === 0 && aa(od), {
    promise: new Promise((e) => {
      Pi.add(r = { c: t, f: e });
    }),
    abort() {
      Pi.delete(r);
    }
  };
}
const No = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function ht(t, r) {
  t.appendChild(r);
}
function id(t) {
  if (!t) return document;
  const r = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return r && /** @type {ShadowRoot} */
  r.host ? (
    /** @type {ShadowRoot} */
    r
  ) : t.ownerDocument;
}
function y_(t) {
  const r = Ve("style");
  return r.textContent = "/* empty */", w_(id(t), r), r.sheet;
}
function w_(t, r) {
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
function nn(t, r) {
  for (let e = 0; e < t.length; e += 1)
    t[e] && t[e].d(r);
}
function Ve(t) {
  return document.createElement(t);
}
function en(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Mn(t) {
  return document.createTextNode(t);
}
function cr() {
  return Mn(" ");
}
function xt() {
  return Mn("");
}
function We(t, r, e, n) {
  return t.addEventListener(r, e, n), () => t.removeEventListener(r, e, n);
}
function g(t, r, e) {
  e == null ? t.removeAttribute(r) : t.getAttribute(r) !== e && t.setAttribute(r, e);
}
const k_ = ["width", "height"];
function Jo(t, r) {
  const e = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in r)
    r[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = r[n] : n === "__value" ? t.value = t[n] = r[n] : e[n] && e[n].set && k_.indexOf(n) === -1 ? t[n] = r[n] : g(t, n, r[n]);
}
function v_(t, r) {
  Object.keys(r).forEach((e) => {
    j_(t, e, r[e]);
  });
}
function j_(t, r, e) {
  const n = r.toLowerCase();
  n in t ? t[n] = typeof t[n] == "boolean" && e === "" ? !0 : e : r in t ? t[r] = typeof t[r] == "boolean" && e === "" ? !0 : e : g(t, r, e);
}
function ti(t) {
  return /-/.test(t) ? v_ : Jo;
}
function C_(t) {
  return Array.from(t.childNodes);
}
function Xn(t, r) {
  r = "" + r, t.data !== r && (t.data = /** @type {string} */
  r);
}
function Ta(t, r) {
  t.value = r == null ? "" : r;
}
function D(t, r, e, n) {
  e == null ? t.style.removeProperty(r) : t.style.setProperty(r, e, "");
}
function Ma(t, r, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const o = t.options[n];
    if (o.__value === r) {
      o.selected = !0;
      return;
    }
  }
  (!e || r !== void 0) && (t.selectedIndex = -1);
}
function E_(t) {
  const r = t.querySelector(":checked");
  return r && r.__value;
}
function sd(t, r, { bubbles: e = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: r, bubbles: e, cancelable: n });
}
function Pa(t, r) {
  return new t(r);
}
const Hs = /* @__PURE__ */ new Map();
let Ws = 0;
function A_(t) {
  let r = 5381, e = t.length;
  for (; e--; ) r = (r << 5) - r ^ t.charCodeAt(e);
  return r >>> 0;
}
function S_(t, r) {
  const e = { stylesheet: y_(r), rules: {} };
  return Hs.set(t, e), e;
}
function Us(t, r, e, n, o, i, s, a = 0) {
  const l = 16.666 / n;
  let c = `{
`;
  for (let k = 0; k <= 1; k += l) {
    const w = r + (e - r) * i(k);
    c += k * 100 + `%{${s(w, 1 - w)}}
`;
  }
  const u = c + `100% {${s(e, 1 - e)}}
}`, f = `__svelte_${A_(u)}_${a}`, _ = id(t), { stylesheet: h, rules: m } = Hs.get(_) || S_(_, t);
  m[f] || (m[f] = !0, h.insertRule(`@keyframes ${f} ${u}`, h.cssRules.length));
  const p = t.style.animation || "";
  return t.style.animation = `${p ? `${p}, ` : ""}${f} ${n}ms linear ${o}ms 1 both`, Ws += 1, f;
}
function Gs(t, r) {
  const e = (t.style.animation || "").split(", "), n = e.filter(
    r ? (i) => i.indexOf(r) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), o = e.length - n.length;
  o && (t.style.animation = n.join(", "), Ws -= o, Ws || V_());
}
function V_() {
  aa(() => {
    Ws || (Hs.forEach((t) => {
      const { ownerNode: r } = t.stylesheet;
      r && J(r);
    }), Hs.clear());
  });
}
let os;
function rs(t) {
  os = t;
}
function Wi() {
  if (!os) throw new Error("Function called outside component initialization");
  return os;
}
function ro(t) {
  Wi().$$.on_mount.push(t);
}
function sl(t) {
  Wi().$$.after_update.push(t);
}
function on(t) {
  Wi().$$.on_destroy.push(t);
}
function F_() {
  const t = Wi();
  return (r, e, { cancelable: n = !1 } = {}) => {
    const o = t.$$.callbacks[r];
    if (o) {
      const i = sd(
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
  return Wi().$$.context.set(t, r), r;
}
function Tr(t) {
  return Wi().$$.context.get(t);
}
function zn(t, r) {
  const e = t.$$.callbacks[r.type];
  e && e.slice().forEach((n) => n.call(this, r));
}
const Di = [], Ir = [];
let Ni = [];
const Na = [], ld = /* @__PURE__ */ Promise.resolve();
let Nl = !1;
function ad() {
  Nl || (Nl = !0, ld.then(cd));
}
function Vn() {
  return ad(), ld;
}
function to(t) {
  Ni.push(t);
}
const kl = /* @__PURE__ */ new Set();
let Vi = 0;
function cd() {
  if (Vi !== 0)
    return;
  const t = os;
  do {
    try {
      for (; Vi < Di.length; ) {
        const r = Di[Vi];
        Vi++, rs(r), I_(r.$$);
      }
    } catch (r) {
      throw Di.length = 0, Vi = 0, r;
    }
    for (rs(null), Di.length = 0, Vi = 0; Ir.length; ) Ir.pop()();
    for (let r = 0; r < Ni.length; r += 1) {
      const e = Ni[r];
      kl.has(e) || (kl.add(e), e());
    }
    Ni.length = 0;
  } while (Di.length);
  for (; Na.length; )
    Na.pop()();
  Nl = !1, kl.clear(), rs(t);
}
function I_(t) {
  if (t.fragment !== null) {
    t.update(), Rr(t.before_update);
    const r = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, r), t.after_update.forEach(to);
  }
}
function D_(t) {
  const r = [], e = [];
  Ni.forEach((n) => t.indexOf(n) === -1 ? r.push(n) : e.push(n)), e.forEach((n) => n()), Ni = r;
}
let $i;
function ua() {
  return $i || ($i = Promise.resolve(), $i.then(() => {
    $i = null;
  })), $i;
}
function hi(t, r, e) {
  t.dispatchEvent(sd(`${r ? "intro" : "outro"}${e}`));
}
const js = /* @__PURE__ */ new Set();
let Io;
function _r() {
  Io = {
    r: 0,
    c: [],
    p: Io
    // parent group
  };
}
function pr() {
  Io.r || Rr(Io.c), Io = Io.p;
}
function W(t, r) {
  t && t.i && (js.delete(t), t.i(r));
}
function $(t, r, e, n) {
  if (t && t.o) {
    if (js.has(t)) return;
    js.add(t), Io.c.push(() => {
      js.delete(t), n && (e && t.d(1), n());
    }), t.o(r);
  } else n && n();
}
const fa = { duration: 0 };
function ll(t, r, e) {
  const n = { direction: "in" };
  let o = r(t, e, n), i = !1, s, a, l = 0;
  function c() {
    s && Gs(t, s);
  }
  function u() {
    const {
      delay: _ = 0,
      duration: h = 300,
      easing: m = el,
      tick: p = A,
      css: k
    } = o || fa;
    k && (s = Us(t, 0, 1, h, _, m, k, l++)), p(0, 1);
    const w = la() + _, z = w + h;
    a && a.abort(), i = !0, to(() => hi(t, !0, "start")), a = ca((H) => {
      if (i) {
        if (H >= z)
          return p(1, 0), hi(t, !0, "end"), c(), i = !1;
        if (H >= w) {
          const L = m((H - w) / h);
          p(L, 1 - L);
        }
      }
      return i;
    });
  }
  let f = !1;
  return {
    start() {
      f || (f = !0, Gs(t), Nr(o) ? (o = o(n), ua().then(u)) : u());
    },
    invalidate() {
      f = !1;
    },
    end() {
      i && (c(), i = !1);
    }
  };
}
function ud(t, r, e) {
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
      tick: h = A,
      css: m
    } = o || fa;
    m && (s = Us(t, 1, 0, f, u, _, m));
    const p = la() + u, k = p + f;
    to(() => hi(t, !1, "start")), "inert" in t && (l = /** @type {HTMLElement} */
    t.inert, t.inert = !0), ca((w) => {
      if (i) {
        if (w >= k)
          return h(0, 1), hi(t, !1, "end"), --a.r || Rr(a.c), !1;
        if (w >= p) {
          const z = _((w - p) / f);
          h(1 - z, z);
        }
      }
      return i;
    });
  }
  return Nr(o) ? ua().then(() => {
    o = o(n), c();
  }) : c(), {
    end(u) {
      u && "inert" in t && (t.inert = l), u && o.tick && o.tick(1, 0), i && (s && Gs(t, s), i = !1);
    }
  };
}
function za(t, r, e, n) {
  let i = r(t, e, { direction: "both" }), s = n ? 0 : 1, a = null, l = null, c = null, u;
  function f() {
    c && Gs(t, c);
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
      easing: w = el,
      tick: z = A,
      css: H
    } = i || fa, L = {
      start: la() + p,
      b: m
    };
    m || (L.group = Io, Io.r += 1), "inert" in t && (m ? u !== void 0 && (t.inert = u) : (u = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), a || l ? l = L : (H && (f(), c = Us(t, s, m, k, p, w, H)), m && z(0, 1), a = _(L, k), to(() => hi(t, m, "start")), ca((Q) => {
      if (l && Q > l.start && (a = _(l, k), l = null, hi(t, a.b, "start"), H && (f(), c = Us(
        t,
        s,
        a.b,
        a.duration,
        0,
        w,
        i.css
      ))), a) {
        if (Q >= a.end)
          z(s = a.b, 1 - s), hi(t, a.b, "end"), l || (a.b ? f() : --a.group.r || Rr(a.group.c)), a = null;
        else if (Q >= a.start) {
          const ce = Q - a.start;
          s = a.a + a.d * w(ce / a.duration), z(s, 1 - s);
        }
      }
      return !!(a || l);
    }));
  }
  return {
    run(m) {
      Nr(i) ? ua().then(() => {
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
function fd(t, r) {
  $(t, 1, 1, () => {
    r.delete(t.key);
  });
}
function dd(t, r, e, n, o, i, s, a, l, c, u, f) {
  let _ = t.length, h = i.length, m = _;
  const p = {};
  for (; m--; ) p[t[m].key] = m;
  const k = [], w = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), H = [];
  for (m = h; m--; ) {
    const T = f(o, i, m), X = e(T);
    let le = s.get(X);
    le ? H.push(() => le.p(T, r)) : (le = c(X, T), le.c()), w.set(X, k[m] = le), X in p && z.set(X, Math.abs(m - p[X]));
  }
  const L = /* @__PURE__ */ new Set(), Q = /* @__PURE__ */ new Set();
  function ce(T) {
    W(T, 1), T.m(a, u), s.set(T.key, T), u = T.first, h--;
  }
  for (; _ && h; ) {
    const T = k[h - 1], X = t[_ - 1], le = T.key, C = X.key;
    T === X ? (u = T.first, _--, h--) : w.has(C) ? !s.has(le) || L.has(le) ? ce(T) : Q.has(C) ? _-- : z.get(le) > z.get(C) ? (Q.add(le), ce(T)) : (L.add(C), _--) : (l(X, s), _--);
  }
  for (; _--; ) {
    const T = t[_];
    w.has(T.key) || l(T, s);
  }
  for (; h; ) ce(k[h - 1]);
  return Rr(H), k;
}
function zo(t, r) {
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
function _d(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Ht(t) {
  t && t.c();
}
function Rt(t, r, e) {
  const { fragment: n, after_update: o } = t.$$;
  n && n.m(r, e), to(() => {
    const i = t.$$.on_mount.map(td).filter(Nr);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : Rr(i), t.$$.on_mount = [];
  }), o.forEach(to);
}
function Bt(t, r) {
  const e = t.$$;
  e.fragment !== null && (D_(e.after_update), Rr(e.on_destroy), e.fragment && e.fragment.d(r), e.on_destroy = e.fragment = null, e.ctx = []);
}
function T_(t, r) {
  t.$$.dirty[0] === -1 && (Di.push(t), ad(), t.$$.dirty.fill(0)), t.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function zr(t, r, e, n, o, i, s = null, a = [-1]) {
  const l = os;
  rs(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: A,
    not_equal: o,
    bound: Ia(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(r.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: Ia(),
    dirty: a,
    skip_bound: !1,
    root: r.target || l.$$.root
  };
  s && s(c.root);
  let u = !1;
  if (c.ctx = e ? e(t, r.props || {}, (f, _, ...h) => {
    const m = h.length ? h[0] : _;
    return c.ctx && o(c.ctx[f], c.ctx[f] = m) && (!c.skip_bound && c.bound[f] && c.bound[f](m), u && T_(t, f)), _;
  }) : [], c.update(), u = !0, Rr(c.before_update), c.fragment = n ? n(c.ctx) : !1, r.target) {
    if (r.hydrate) {
      const f = C_(r.target);
      c.fragment && c.fragment.l(f), f.forEach(J);
    } else
      c.fragment && c.fragment.c();
    r.intro && W(t.$$.fragment), Rt(t, r.target, r.anchor), cd();
  }
  rs(l);
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
    Bt(this, 1), this.$destroy = A;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(r, e) {
    if (!Nr(e))
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
    this.$$set && !b_(r) && (this.$$.skip_bound = !0, this.$$set(r), this.$$.skip_bound = !1);
  }
}
const M_ = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(M_);
const Fi = [];
function P_(t, r) {
  return {
    subscribe: Do(t, r).subscribe
  };
}
function Do(t, r = A) {
  let e;
  const n = /* @__PURE__ */ new Set();
  function o(a) {
    if (m_(t, a) && (t = a, e)) {
      const l = !Fi.length;
      for (const c of n)
        c[1](), Fi.push(c, t);
      if (l) {
        for (let c = 0; c < Fi.length; c += 2)
          Fi[c][0](Fi[c + 1]);
        Fi.length = 0;
      }
    }
  }
  function i(a) {
    o(a(t));
  }
  function s(a, l = A) {
    const c = [a, l];
    return n.add(c), n.size === 1 && (e = r(o, i) || A), a(t), () => {
      n.delete(c), n.size === 0 && e && (e(), e = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Ui(t, r, e) {
  const n = !Array.isArray(t), o = n ? [t] : t;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = r.length < 2;
  return P_(e, (s, a) => {
    let l = !1;
    const c = [];
    let u = 0, f = A;
    const _ = () => {
      if (u)
        return;
      f();
      const m = r(n ? c[0] : c, s, a);
      i ? s(m) : f = Nr(m) ? m : A;
    }, h = o.map(
      (m, p) => V(
        m,
        (k) => {
          c[p] = k, u &= ~(1 << p), l && _();
        },
        () => {
          u |= 1 << p;
        }
      )
    );
    return l = !0, _(), function() {
      Rr(h), f(), l = !1;
    };
  });
}
const N_ = "appkit-root_platform_desktop", z_ = "appkit-root__clickable", O_ = "appkit-root", L_ = "appkit-root__selectable", R_ = "appkit-root__unselectable", Cr = {
  root_platform_desktop: N_,
  root__clickable: z_,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  "root__any-actions": "appkit-root__any-actions",
  root: O_,
  root__selectable: L_,
  root__unselectable: R_,
  "root__only-desktop": "appkit-root__only-desktop",
  "root_restrict-scroll": "appkit-root_restrict-scroll",
  "root_disabled-context-menu": "appkit-root_disabled-context-menu"
}, Xr = Symbol("root");
function Y(t, r = {}) {
  const e = t;
  return e.level = r.level || "error", r.additional && (e.additional = r.additional), e;
}
const B_ = "appkit-outer", H_ = "appkit-outer_width_content", W_ = "appkit-outer_height_content", U_ = "appkit-root__clickable", G_ = "appkit-outer__border", J_ = "appkit-outer_visibility_invisible", q_ = "appkit-outer_visibility_gone", Js = {
  outer: B_,
  outer_width_content: H_,
  outer_height_content: W_,
  root__clickable: U_,
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
  outer__border: G_,
  outer_visibility_invisible: J_,
  outer_visibility_gone: q_,
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
function cn(t) {
  let r = ae(t);
  return r === "0" && (r += "em"), r;
}
function pd(t, r) {
  for (; t.length < r; )
    t = "0" + t;
  return t;
}
function dr(t, r = 1, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = fo(t);
  return n ? (n.a *= r, da(n)) : e;
}
function Y_(t, r, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = fo(t);
  return n ? (n.a = r, da(n)) : e;
}
function da(t) {
  return t.a === 255 ? `#${[t.r, t.g, t.b].map((r) => pd(Math.round(r).toString(16), 2)).join("")}` : `rgba(${t.r},${t.g},${t.b},${(t.a / 255).toFixed(2)})`;
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
      const [c, u, f, _, h] = r, m = f.length === 2 ? f : f + f, p = _.length === 2 ? _ : _ + _, k = h.length === 2 ? h : h + h, w = u.length === 2 ? u : u + u;
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
function zl(t) {
  let r = String(t);
  return r.indexOf("&") > -1 && (r = r.replace(/&/g, "&amp;")), r.indexOf("<") > -1 && (r = r.replace(/</g, "&lt;")), r.indexOf(">") > -1 && (r = r.replace(/>/g, "&gt;")), r.indexOf('"') > -1 && (r = r.replace(/"/g, "&quot;")), r;
}
const Oo = Boolean;
function al(t, r) {
  if (t.length === 1 && t[0].type === "solid")
    return X_({
      bg: t[0]
    });
  const e = t.map((n) => {
    if (n.type === "solid")
      return K_({
        bg: n
      });
    if (n.type === "gradient")
      return Z_({
        bg: n
      });
    if (n.type === "image")
      return $_({
        bg: n,
        direction: r
      });
    if (n.type === "radial_gradient")
      return x_({
        bg: n
      });
  }).filter(Oo).reverse().reduce(function(n, o) {
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
function K_(t) {
  const r = dr(t.bg.color || "transparent");
  return {
    size: void 0,
    pos: void 0,
    image: `linear-gradient(to bottom,${r},${r})`
  };
}
function X_(t) {
  return {
    color: dr(t.bg.color || "transparent"),
    size: "auto",
    position: "50% 50%"
  };
}
function gd(t) {
  return t.every((n) => n.color && typeof n.position == "number" && n.position >= 0 && n.position <= 1) ? t.sort((n, o) => Math.abs(n.position - o.position) < 1e-6 ? 0 : n.position - o.position).map((n) => `${dr(n.color)} ${(n.position * 100).toFixed(2)}%`).join(",") : void 0;
}
function Z_(t) {
  var n, o, i, s;
  if (!Array.isArray((n = t.bg) == null ? void 0 : n.colors) && !Array.isArray((o = t.bg) == null ? void 0 : o.color_map))
    return;
  const r = (i = t.bg.colors) == null ? void 0 : i.filter(Oo);
  if (!(r != null && r.length) && !((s = t.bg) != null && s.color_map))
    return;
  let e;
  if (t.bg.color_map) {
    const a = gd(t.bg.color_map);
    if (!a)
      return;
    e = "linear-gradient(" + (90 - Number(t.bg.angle || 0) + "deg") + "," + a + ")";
  } else {
    if (!r)
      return;
    e = "linear-gradient(" + (90 - Number(t.bg.angle || 0) + "deg") + "," + r.map((a) => dr(a)).join(",") + ")";
  }
  return {
    size: void 0,
    pos: void 0,
    image: e
  };
}
const Q_ = {
  nearest_corner: "closest-corner",
  farthest_corner: "farthest-corner",
  nearest_side: "closest-side",
  farthest_side: "farthest-side"
};
function Oa(t) {
  if (t && typeof t == "object" && "type" in t && t.value !== void 0) {
    if (t.type === "fixed")
      return cn(t.value);
    if (t.type === "relative")
      return `${Number(t.value) * 100}%`;
  }
  return "50%";
}
function x_(t) {
  var a, l, c, u;
  if (!Array.isArray((a = t.bg) == null ? void 0 : a.colors) && !Array.isArray((l = t.bg) == null ? void 0 : l.color_map))
    return;
  const r = (c = t.bg.colors) == null ? void 0 : c.filter(Oo);
  if (!(r != null && r.length) && !((u = t.bg) != null && u.color_map))
    return;
  let e;
  if (t.bg.color_map ? e = gd(t.bg.color_map) : r && (e = r.map((f) => dr(f)).join(",")), !e)
    return;
  const n = t.bg.radius;
  let o;
  n && typeof n == "object" && "type" in n && n.value !== void 0 && (n.type === "fixed" ? o = cn(n.value) : n.type === "relative" && (o = Q_[n.value]));
  const i = Oa(t.bg.center_x), s = Oa(t.bg.center_y);
  return {
    size: void 0,
    pos: void 0,
    image: `radial-gradient(circle ${o || "farthest-corner"} at ${i} ${s},` + e + ")"
  };
}
function $_(t) {
  var e;
  const r = (e = t.bg) == null ? void 0 : e.image_url;
  if (r)
    return {
      size: hd(t.bg.scale),
      pos: md(t.bg, t.direction),
      image: 'url("' + zl(r) + '")'
    };
}
function hd(t) {
  return t === "fit" ? "contain" : t === "stretch" ? "fill" : t === "no_scale" ? "none" : "cover";
}
function ep(t) {
  return t === "none" ? "auto" : t === "fill" ? "100% 100%" : t;
}
function md(t, r) {
  let e, n;
  return t.content_alignment_horizontal === "left" || r === "ltr" && t.content_alignment_horizontal === "start" || r === "rtl" && t.content_alignment_horizontal === "end" ? e = "0%" : t.content_alignment_horizontal === "right" || r === "ltr" && t.content_alignment_horizontal === "end" || r === "rtl" && t.content_alignment_horizontal === "start" ? e = "100%" : e = "50%", t.content_alignment_vertical === "top" ? n = "0%" : t.content_alignment_vertical === "bottom" ? n = "100%" : n = "50%", e + " " + n;
}
function tn(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e < 0 ? r : e;
}
function La(t, r, e) {
  return typeof r == "number" && (t && r > 0 && r <= 100 || !t && r >= 0 && r < 100) ? r : e;
}
function tp(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1 && t.index !== void 0;
}
function rp(t, {
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
  }, c = Ui(s, (h) => h);
  let u;
  const f = (h) => {
    const m = h.type === "visibility";
    o.execAnyActions([h.action], {
      logType: m ? "visible" : "disappear",
      node: t,
      processUrls: !1
    });
  }, _ = c.subscribe((h) => {
    u = h.filter(tp);
    const m = {};
    u.forEach((w) => {
      m[w.index] = w;
    }), l();
    const p = [...new Set(u.map((w) => {
      const z = i[w.index].type === "visibility";
      return La(
        z,
        w.visibility_percentage,
        z ? 50 : 0
      ) / 100;
    }))];
    if (!p.length)
      return;
    const k = (w) => {
      w.forEach((z) => {
        u.forEach((H) => {
          const L = i[H.index], Q = L.type === "visibility", ce = La(
            Q,
            H.visibility_percentage,
            Q ? 50 : 0
          );
          let T;
          ce === 0 ? T = z.intersectionRatio >= 1e-12 : T = z.intersectionRatio >= ce / 100, (Q ? !L.visible && T : L.visible && !T) ? L.finished || (L.timer = setTimeout(() => {
            ++L.count;
            const C = H.log_limit === 0 ? 1 / 0 : H.log_limit || 1;
            L.count >= C && (L.finished = !0), f(L);
          }, tn(H.visibility_duration, 800))) : (Q ? !T : T) && L.timer && clearTimeout(L.timer), L.visible = T;
        });
      });
    };
    a = new IntersectionObserver(k, {
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
function Ra(t, r) {
  r && t.push(r);
}
function mt(t, r, e) {
  const n = [];
  Ra(n, r[t]);
  for (const o in e)
    if (e.hasOwnProperty(o)) {
      const i = e[o];
      if (i) {
        const s = `${t}_${o}` + (typeof i == "string" ? `_${i}` : "");
        Ra(n, r[s]);
      }
    }
  return n.join(" ");
}
const _a = Symbol("state");
function _o(t, r) {
  var s, a;
  const e = t.top || 0, n = ((s = r === "ltr" ? t.end : t.start) != null ? s : t.right) || 0, o = t.bottom || 0, i = ((a = r === "ltr" ? t.start : t.end) != null ? a : t.left) || 0;
  return e === 0 && n === 0 && o === 0 && i === 0 ? "" : ae(e) + " " + ae(n) + " " + ae(o) + " " + ae(i);
}
function cl(t) {
  if (typeof t != "number" && typeof t != "string")
    return !1;
  const r = Number(t);
  return !Number.isNaN(r);
}
function Tn(t) {
  return cl(t) && t >= 0;
}
function is(t, r, e) {
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
  return _o(t, r);
}
function np(t, r) {
  return !Tn(t) || t === void 0 || t > 1 ? r : Number(t);
}
const op = Object.prototype.hasOwnProperty;
function Gi(t, r) {
  if (Object.is(t, r))
    return !0;
  if (typeof t != "object" || t === null || typeof r != "object" || r === null)
    return Object.is(t, r);
  const e = Object.keys(t), n = Object.keys(r);
  if (e.length !== n.length)
    return !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (!op.call(r, i) || !Gi(t[i], r[i]))
      return !1;
  }
  return !0;
}
function xo(t, r) {
  return Gi(t, r) ? r : t;
}
function ip(t, r) {
  return t === "visible" || t === "invisible" || t === "gone" ? t : r;
}
function bd(t, r) {
  return t === "linear" || t === "ease" || t === "ease_in_out" || t === "ease_in" || t === "ease_out" ? t : r;
}
function oo(t, r) {
  const e = Number(t);
  return Number.isNaN(e) ? r : e;
}
function ss(t) {
  const r = [];
  return t.name === "set" ? (t.items || []).forEach((e) => {
    r.push(...ss(e));
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
    if (t[e[n]] && !Tn(t[e[n]]))
      return r;
  return t;
}
function sp(t, r) {
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
function lp(t, r) {
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
function Cs(t, r = 0, e = 10) {
  return [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ].map((n) => ae((n || r) / e * 10)).join(" ");
}
function ap(t) {
  var r, e, n, o, i, s;
  return ae(((e = (r = t.offset) == null ? void 0 : r.x) == null ? void 0 : e.value) || 0) + " " + ae(((o = (n = t.offset) == null ? void 0 : n.y) == null ? void 0 : o.value) || 0) + " " + ae((i = t.blur) != null ? i : 2) + " " + dr(t.color || "#000000", (s = t.alpha) != null ? s : 0.19);
}
function cp(t, r) {
  var e, n, o, i, s, a;
  return "drop-shadow(" + dr(t.color || "#000000", (e = t.alpha) != null ? e : 0.19) + " " + ae((((o = (n = t.offset) == null ? void 0 : n.x) == null ? void 0 : o.value) || 0) * 10 / r) + " " + ae((((s = (i = t.offset) == null ? void 0 : i.y) == null ? void 0 : s.value) || 0) * 10 / r) + " " + ae(((a = t.blur) != null ? a : 2) * 10 / r) + ")";
}
let vl;
function Li() {
  return typeof matchMedia > "u" ? !1 : (vl || (vl = window.matchMedia("(prefers-reduced-motion)")), vl.matches);
}
const up = 8, fp = (t, r, e, n) => {
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
      if (++i > up) {
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
}, pa = Symbol("enabled");
function un(t, r) {
  return t === 1 || t === 0 || t === !1 || t === !0 ? !!t : r;
}
function ri(t) {
  return [
    t.state_description,
    t.description,
    t.hint
  ].filter(Boolean).join(", ");
}
const Ba = 1, ni = 2;
function Ha(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "translation-fixed")
      return ae(t.value * r);
    if (t.type === "translation-percentage")
      return `${t.value * r}%`;
  }
}
function ds(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "pivot-fixed")
      return ae(t.value * r);
    if (t.type === "pivot-percentage")
      return `${t.value * r}%`;
  }
}
function dp(t) {
  return t.map((r) => {
    if (r.type === "rotation") {
      if (typeof r.angle == "number") {
        const e = ds(r.pivot_x) || "50%", n = ds(r.pivot_y) || "50%", o = ds(r.pivot_x, -1) || "-50%", i = ds(r.pivot_y, -1) || "-50%";
        return `translate(${e}, ${n}) rotate(${r.angle}deg) translate(${o}, ${i})`;
      }
    } else if (r.type === "translation") {
      const e = Ha(r.x) || 0, n = Ha(r.y) || 0;
      return `translate(${e}, ${n})`;
    }
  }).filter(Boolean).join(" ");
}
const _p = "appkit-actionable__button", Wa = {
  actionable__button: _p
};
function pp() {
}
const To = Symbol("action");
function Ol(t) {
  if (t.startsWith("tel:"))
    return "tel";
  if (t.startsWith("/"))
    return "https";
  const r = /^([^/]+):\/\//.exec(t);
  return r && r[1] || "";
}
function Ll(t, r) {
  return r.has(t);
}
function gp(t) {
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
      o && o.m(i, s), q(i, e, s), n = !0;
    },
    p(i, s) {
      /*containerElement*/
      i[7] ? r ? Vr(
        r,
        /*containerElement*/
        i[7]
      ) ? (o.d(1), o = jl(i), r = /*containerElement*/
      i[7], o.c(), o.m(e.parentNode, e)) : o.p(i, s) : (o = jl(i), r = /*containerElement*/
      i[7], o.c(), o.m(e.parentNode, e)) : r && (o.d(1), o = null, r = /*containerElement*/
      i[7]);
    },
    i(i) {
      n || (W(o, i), n = !0);
    },
    o(i) {
      $(o, i), n = !1;
    },
    d(i) {
      i && J(e), o && o.d(i);
    }
  };
}
function hp(t) {
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
      t[2] + " " + Wa.actionable__button + " " + Cr["root__any-actions"] + ` ${/*isNativeActionAnimation*/
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
  ], u = {};
  for (let _ = 0; _ < c.length; _ += 1)
    u = jo(u, c[_]);
  return {
    c() {
      r = Ve("button"), l && l.c(), Jo(r, u);
    },
    m(_, h) {
      q(_, r, h), l && l.m(r, null), r.autofocus && r.focus(), t[48](r), o = !0, i || (s = [
        il(
          /*use*/
          t[5].call(null, r)
        ),
        We(
          r,
          "click",
          /*click_handler_1*/
          t[37]
        ),
        We(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        We(
          r,
          "focus",
          /*focus_handler_1*/
          t[38]
        ),
        We(
          r,
          "blur",
          /*blur_handler_1*/
          t[39]
        ),
        We(
          r,
          "pointerdown",
          /*pointerdown_handler_1*/
          t[40]
        ),
        We(
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
      ), Jo(r, u = zo(c, [
        (!o || h[0] & /*cls, isNativeActionAnimation, longTapActions*/
        70 && e !== (e = /*cls*/
        _[2] + " " + Wa.actionable__button + " " + Cr["root__any-actions"] + ` ${/*isNativeActionAnimation*/
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
      o || (W(l, _), o = !0);
    },
    o(_) {
      $(l, _), o = !1;
    },
    d(_) {
      _ && J(r), l && l.d(_), t[48](null), i = !1, Rr(s);
    }
  };
}
function mp(t) {
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
      t[0].fakeElement === ni ? -1 : null
    },
    /*attrs*/
    t[4]
  ], u = {};
  for (let _ = 0; _ < c.length; _ += 1)
    u = jo(u, c[_]);
  return {
    c() {
      r = Ve("a"), l && l.c(), Jo(r, u);
    },
    m(_, h) {
      q(_, r, h), l && l.m(r, null), t[47](r), o = !0, i || (s = [
        il(
          /*use*/
          t[5].call(null, r)
        ),
        We(
          r,
          "click",
          /*click_handler*/
          t[32]
        ),
        We(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        We(
          r,
          "focus",
          /*focus_handler*/
          t[33]
        ),
        We(
          r,
          "blur",
          /*blur_handler*/
          t[34]
        ),
        We(
          r,
          "pointerdown",
          /*pointerdown_handler*/
          t[35]
        ),
        We(
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
      ), Jo(r, u = zo(c, [
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
      o || (W(l, _), o = !0);
    },
    o(_) {
      $(l, _), o = !1;
    },
    d(_) {
      _ && J(r), l && l.d(_), t[47](null), i = !1, Rr(s);
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
      r = Ve(
        /*containerElement*/
        t[7]
      ), l && l.c(), ti(
        /*containerElement*/
        t[7]
      )(r, u);
    },
    m(_, h) {
      q(_, r, h), l && l.m(r, null), t[49](r), o = !0, i || (s = [
        il(
          /*use*/
          t[5].call(null, r)
        ),
        We(
          r,
          "click",
          /*click_handler_2*/
          t[42]
        ),
        We(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        We(
          r,
          "focus",
          /*focus_handler_2*/
          t[43]
        ),
        We(
          r,
          "blur",
          /*blur_handler_2*/
          t[44]
        ),
        We(
          r,
          "pointerdown",
          /*pointerdown_handler_2*/
          t[45]
        ),
        We(
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
      ), ti(
        /*containerElement*/
        _[7]
      )(r, u = zo(c, [
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
      o || (W(l, _), o = !0);
    },
    o(_) {
      $(l, _), o = !1;
    },
    d(_) {
      _ && J(r), l && l.d(_), t[49](null), i = !1, Rr(s);
    }
  };
}
function bp(t) {
  let r, e, n, o;
  const i = [mp, hp, gp], s = [];
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
      s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? s[r].p(l, c) : (_r(), $(s[u], 1, 1, () => {
        s[u] = null;
      }), pr(), e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), W(e, 1), e.m(n.parentNode, n));
    },
    i(l) {
      o || (W(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && J(n), s[r].d(l);
    }
  };
}
const Ua = 8, Ga = 400, Cl = 400, yp = /* @__PURE__ */ new Set(["button", "image", "checkbox", "radio", "header"]);
function Ja(t) {
  t.preventDefault();
}
function wp(t, r, e) {
  let n, o, i = A, s = () => (i(), i = V(n, (K) => e(29, o = K)), n);
  t.$$.on_destroy.push(() => i());
  let { $$slots: a = {}, $$scope: l } = r, { componentContext: c } = r, { id: u = "" } = r, { actions: f = void 0 } = r, { doubleTapActions: _ = void 0 } = r, { longTapActions: h = void 0 } = r, { pressStartActions: m = void 0 } = r, { pressEndActions: p = void 0 } = r, { hoverStartActions: k = void 0 } = r, { hoverEndActions: w = void 0 } = r, { cls: z = "" } = r, { style: H = null } = r, { attrs: L = void 0 } = r, { use: Q = pp } = r, { customAction: ce = null } = r, { isNativeActionAnimation: T = !0 } = r, { hasInnerFocusable: X = !1 } = r, { customAccessibility: le = void 0 } = r, { captureFocusOnAction: C = !0 } = r, { containerElement: M = "span" } = r;
  const N = Tr(Xr), U = Tr(To);
  pi(To, {
    hasAction() {
      return !!(U.hasAction() || f != null && f.length || (le == null ? void 0 : le.mode) === "exclude");
    }
  });
  let se, fe = "", Ce, Ee = -1, de = -1, Ie = null, ee = !1, De = !1, qe = !1, Ke, ke, rt, ye, Ae = !1;
  function _e() {
    return (o == null ? void 0 : o.some((K) => {
      if (K != null && K.typed)
        return !0;
      const At = K == null ? void 0 : K.url;
      if (!At)
        return !1;
      const Mt = Ol(At);
      return Mt && !Ll(Mt, N.getBuiltinProtocols());
    })) || !1;
  }
  async function x(K, At) {
    f && (K && _e() && K.preventDefault(), c.execAnyActions(f, { node: se, processUrls: At }));
  }
  async function ue(K) {
    if (U.hasAction() || K.button !== void 0 && K.button !== 0)
      return;
    const At = Date.now();
    if (Ee > 0 && At > Ee + Ga) {
      K.preventDefault();
      return;
    }
    if (_ != null && _.length && de > 0 && At - de < Cl) {
      K.preventDefault(), c.execAnyActions(_, { processUrls: !0, node: se }), de = -1;
      return;
    }
    if (de = At, _ != null && _.length && Ee > 0 && At < Ee + Cl) {
      K.preventDefault(), clearTimeout(ke), ke = window.setTimeout(
        () => {
          x(void 0, !0);
        },
        Cl
      );
      return;
    }
    (ce == null ? void 0 : ce(K)) === !1 ? K.preventDefault() : x(K, !1);
  }
  function ie(K) {
    U.hasAction() || (Ie = { x: K.clientX, y: K.clientY }, ee = !1, Ee = Date.now(), Ke && clearTimeout(Ke), clearTimeout(ke), c.execAnyActions(m, { node: se }));
  }
  function Fe(K) {
    Ie && (Math.abs(Ie.x - K.clientX) > Ua || Math.abs(Ie.y - K.clientY) > Ua) && (ee = !0);
  }
  function xe(K) {
    U.hasAction() || !Ie || Ee < 0 || (!ee && Date.now() - Ee >= Ga && (K.stopImmediatePropagation(), c.execAnyActions(h, { processUrls: !0, node: se })), Ke && clearTimeout(Ke), Ke = window.setTimeout(
      () => {
        Ie = null, Ee = -1;
      },
      100
    ), c.execAnyActions(p, { node: se }));
  }
  function Xe() {
    U.hasAction() || c.execAnyActions(k, { node: se });
  }
  function ne() {
    U.hasAction() || c.execAnyActions(w, { node: se });
  }
  function Ye(K) {
    const At = K.target;
    At instanceof HTMLElement && (At.tagName === "INPUT" || At.contentEditable === "true") || K.ctrlKey || K.metaKey || K.altKey || K.shiftKey || K.key === "Enter" && Array.isArray(f) && f.length && (c.execAnyActions(f), K.preventDefault());
  }
  ro(() => {
    u && !X && N.registerFocusable(u, {
      focus() {
        se && (fe || De) && se.focus();
      }
    });
  }), on(() => {
    typeof window < "u" && (window.removeEventListener("pointermove", Fe), window.removeEventListener("pointerup", xe), window.removeEventListener("pointercancel", xe)), u && !X && N.unregisterFocusable(u), Ke && clearTimeout(Ke), ke && clearTimeout(ke);
  });
  function Le(K) {
    zn.call(this, t, K);
  }
  function st(K) {
    zn.call(this, t, K);
  }
  function lt(K) {
    zn.call(this, t, K);
  }
  function at(K) {
    zn.call(this, t, K);
  }
  function wt(K) {
    zn.call(this, t, K);
  }
  function nt(K) {
    zn.call(this, t, K);
  }
  function zt(K) {
    zn.call(this, t, K);
  }
  function ut(K) {
    zn.call(this, t, K);
  }
  function pe(K) {
    zn.call(this, t, K);
  }
  function ge(K) {
    zn.call(this, t, K);
  }
  function _t(K) {
    zn.call(this, t, K);
  }
  function je(K) {
    zn.call(this, t, K);
  }
  function I(K) {
    zn.call(this, t, K);
  }
  function vt(K) {
    zn.call(this, t, K);
  }
  function ft(K) {
    zn.call(this, t, K);
  }
  function St(K) {
    Ir[K ? "unshift" : "push"](() => {
      se = K, e(8, se);
    });
  }
  function Tt(K) {
    Ir[K ? "unshift" : "push"](() => {
      se = K, e(8, se);
    });
  }
  function et(K) {
    Ir[K ? "unshift" : "push"](() => {
      se = K, e(8, se);
    });
  }
  return t.$$set = (K) => {
    "componentContext" in K && e(0, c = K.componentContext), "id" in K && e(18, u = K.id), "actions" in K && e(19, f = K.actions), "doubleTapActions" in K && e(20, _ = K.doubleTapActions), "longTapActions" in K && e(1, h = K.longTapActions), "pressStartActions" in K && e(21, m = K.pressStartActions), "pressEndActions" in K && e(22, p = K.pressEndActions), "hoverStartActions" in K && e(23, k = K.hoverStartActions), "hoverEndActions" in K && e(24, w = K.hoverEndActions), "cls" in K && e(2, z = K.cls), "style" in K && e(3, H = K.style), "attrs" in K && e(4, L = K.attrs), "use" in K && e(5, Q = K.use), "customAction" in K && e(25, ce = K.customAction), "isNativeActionAnimation" in K && e(6, T = K.isNativeActionAnimation), "hasInnerFocusable" in K && e(26, X = K.hasInnerFocusable), "customAccessibility" in K && e(27, le = K.customAccessibility), "captureFocusOnAction" in K && e(28, C = K.captureFocusOnAction), "containerElement" in K && e(7, M = K.containerElement), "$$scope" in K && e(30, l = K.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*customAccessibility*/
    134217728 && e(12, Ae = (le == null ? void 0 : le.mode) === "exclude"), t.$$.dirty[0] & /*componentContext, actions*/
    524289 && s(e(16, n = c.getDerivedFromVars(f, void 0, !0))), t.$$.dirty[0] & /*$processedActions, customAction, href, ariaHidden, componentContext*/
    570429953) {
      if (Array.isArray(o) && (o != null && o.length))
        for (let K = 0; K < o.length; ++K) {
          const At = o[K].url;
          if (At) {
            e(9, fe = At), e(13, Ce = o[K].target || void 0);
            break;
          }
        }
      e(10, De = !!ce), (fe || Array.isArray(o) && (o != null && o.length)) && (U.hasAction() || Ae) ? (e(9, fe = ""), c.logError(Y(new Error("Actionable element is forbidden inside other actionable element or inside accessibility mode=exlucde"), {
        level: "warn",
        additional: { actions: o }
      }))) : fe && !Ll(Ol(fe), N.getBuiltinProtocols()) ? (e(9, fe = ""), e(10, De = !0)) : !fe && Array.isArray(o) && (o != null && o.length) && (e(10, De = !0), o.some((K) => K.url || K.typed || K.menu_items) || c.logError(Y(new Error("The component has a list of actions, but does not have a real action"), {
        level: "warn",
        additional: { actions: o }
      })));
    }
    t.$$.dirty[0] & /*customAccessibility, href, hasJSAction, role*/
    134221312 && (le != null && le.type && yp.has(le.type) ? le.type === "header" ? e(11, rt = "heading") : e(11, rt = le.type) : fe ? e(11, rt = void 0) : De && e(11, rt = "button"), (rt === "checkbox" || rt === "radio") && typeof (le == null ? void 0 : le.is_checked) == "boolean" ? e(15, ye = le.is_checked) : e(15, ye = void 0)), t.$$.dirty[0] & /*node, href, hasJSAction, doubleTapActions, longTapActions, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions, captureFocusOnAction*/
    300943106 && se && (fe || De || _ != null && _.length ? se.addEventListener("click", ue) : se.removeEventListener("click", ue), _ != null && _.length || h != null && h.length || m != null && m.length || p != null && p.length ? (se.addEventListener("pointerdown", ie, { passive: !0 }), window.addEventListener("pointermove", Fe, { passive: !0 }), window.addEventListener("pointerup", xe, { passive: !0 }), window.addEventListener("pointercancel", xe, { passive: !0 })) : (se.removeEventListener("pointerdown", ie), window.removeEventListener("pointerup", xe), window.removeEventListener("pointermove", Fe), window.removeEventListener("pointercancel", xe)), k != null && k.length ? se.addEventListener("pointerenter", Xe) : se.removeEventListener("pointerenter", Xe), w != null && w.length ? se.addEventListener("pointerleave", ne) : se.removeEventListener("pointerleave", ne), C === !1 ? se.addEventListener("mousedown", Ja) : se.removeEventListener("mousedown", Ja), e(14, qe = !!(fe || De || _ != null && _.length || h != null && h.length || m != null && m.length || p != null && p.length || k != null && k.length || w != null && w.length)));
  }, [
    c,
    h,
    z,
    H,
    L,
    Q,
    T,
    M,
    se,
    fe,
    De,
    rt,
    Ae,
    Ce,
    qe,
    ye,
    n,
    Ye,
    u,
    f,
    _,
    m,
    p,
    k,
    w,
    ce,
    X,
    le,
    C,
    o,
    l,
    a,
    Le,
    st,
    lt,
    at,
    wt,
    nt,
    zt,
    ut,
    pe,
    ge,
    _t,
    je,
    I,
    vt,
    ft,
    St,
    Tt,
    et
  ];
}
class ul extends Or {
  constructor(r) {
    super(), zr(
      this,
      r,
      wp,
      bp,
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
const gi = {
  "outer-background": "appkit-outer-background",
  "outer-background_clip": "appkit-outer-background_clip",
  "outer-background__item": "appkit-outer-background__item",
  "outer-background__item_hidden": "appkit-outer-background__item_hidden"
};
function Wn(t) {
  return cl(t) && t > 0;
}
function yd(t, r) {
  return t.map((e) => {
    if (!e) {
      r(Y(new Error("Incorrect filter"), {
        level: "warn"
      }));
      return;
    }
    if (e.type === "blur") {
      if (Wn(e.radius))
        return `blur(${cn(e.radius / 2)})`;
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
function qa(t, r, e) {
  const n = t.slice();
  return n[6] = r[e], n;
}
function kp(t) {
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
function vp(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Ve("img"), Kn(r.src, e = /*item*/
      t[6].image_url) || g(r, "src", e), g(r, "alt", ""), g(r, "aria-hidden", "true"), g(r, "loading", "lazy"), g(r, "decoding", "async"), g(r, "class", gi["outer-background__item"]), g(r, "style", n = er(
        /*item*/
        t[6].style
      ));
    },
    m(s, a) {
      q(s, r, a), o || (i = We(
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
function Ya(t) {
  let r;
  function e(i, s) {
    return (
      /*item*/
      i[6].image_url ? vp : kp
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = xt();
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
function jp(t) {
  let r, e, n = ir(
    /*styles*/
    t[1]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Ya(qa(t, n, i));
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
        n = ir(
          /*styles*/
          i[1]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = qa(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Ya(l), o[a].c(), o[a].m(r, null));
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
    i: A,
    o: A,
    d(i) {
      i && J(r), nn(o, i);
    }
  };
}
function Cp(t, r, e) {
  let n, { direction: o } = r, { componentContext: i } = r, { background: s = [] } = r, { radius: a = "" } = r;
  function l(c) {
    c.target && "classList" in c.target && c.target.classList.add(gi["outer-background__item_hidden"]);
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
        c.type === "solid" && (u["background-color"] = _.color), c.type === "gradient" && (u["background-image"] = _.image), c.type === "image" && (u.opacity = Number(c.alpha), f.image_url = c.image_url, u["object-fit"] = _.size, u["object-position"] = _.position, Array.isArray(c.filters) && c.filters.length && (u.filter = yd(c.filters, i.logError), o === "rtl" && c.filters.some((h) => h.type === "rtl_mirror") && (u.transform = "scale(-1,1)")));
      }
      return f;
    }));
  }, [a, n, l, o, i, s];
}
class Ep extends Or {
  constructor(r) {
    super(), zr(this, r, Cp, jp, Vr, {
      direction: 3,
      componentContext: 4,
      background: 5,
      radius: 0
    });
  }
}
const Ap = (t) => ({
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
function Xa(t) {
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
          Js,
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
      t[16].length || xa(
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
      $$slots: { default: [Sp] },
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
      Ht(r.$$.fragment);
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
        Js,
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
      n[16].length || xa(
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Za(t) {
  let r, e;
  return r = new Ep({
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Qa(t) {
  let r, e;
  return {
    c() {
      r = Ve("span"), g(r, "class", Js.outer__border), g(r, "style", e = er(
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
function Sp(t) {
  let r, e, n, o = (
    /*hasSeparateBg*/
    t[11] && Za(t)
  );
  const i = (
    /*#slots*/
    t[146].default
  ), s = tl(
    i,
    t,
    /*$$scope*/
    t[149],
    Ka
  );
  let a = (
    /*hasBorder*/
    t[22] && Qa(t)
  );
  return {
    c() {
      o && o.c(), r = xt(), s && s.c(), a && a.c(), e = xt();
    },
    m(l, c) {
      o && o.m(l, c), q(l, r, c), s && s.m(l, c), a && a.m(l, c), q(l, e, c), n = !0;
    },
    p(l, c) {
      /*hasSeparateBg*/
      l[11] ? o ? (o.p(l, c), c[0] & /*hasSeparateBg*/
      2048 && W(o, 1)) : (o = Za(l), o.c(), W(o, 1), o.m(r.parentNode, r)) : o && (_r(), $(o, 1, 1, () => {
        o = null;
      }), pr()), s && s.p && (!n || c[0] & /*hasCustomFocus, widthMin, widthMax, heightMin, heightMax*/
      132032 | c[4] & /*$$scope*/
      33554432) && nl(
        s,
        i,
        l,
        /*$$scope*/
        l[149],
        n ? rl(
          i,
          /*$$scope*/
          l[149],
          c,
          Ap
        ) : ol(
          /*$$scope*/
          l[149]
        ),
        Ka
      ), /*hasBorder*/
      l[22] ? a ? a.p(l, c) : (a = Qa(l), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null);
    },
    i(l) {
      n || (W(o), W(s, l), n = !0);
    },
    o(l) {
      $(o), $(s, l), n = !1;
    },
    d(l) {
      l && (J(r), J(e)), o && o.d(l), s && s.d(l), a && a.d(l);
    }
  };
}
function Vp(t) {
  let r, e, n = !/*hasWidthError*/
  t[23] && !/*hasHeightError*/
  t[24] && Xa(t);
  return {
    c() {
      n && n.c(), r = xt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, i) {
      !/*hasWidthError*/
      o[23] && !/*hasHeightError*/
      o[24] ? n ? (n.p(o, i), i[0] & /*hasWidthError, hasHeightError*/
      25165824 && W(n, 1)) : (n = Xa(o), n.c(), W(n, 1), n.m(r.parentNode, r)) : n && (_r(), $(n, 1, 1, () => {
        n = null;
      }), pr());
    },
    i(o) {
      e || (W(n), e = !0);
    },
    o(o) {
      $(n), e = !1;
    },
    d(o) {
      o && J(r), n && n.d(o);
    }
  };
}
const Fp = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
}, Ip = {
  left: "end",
  center: "center",
  right: "start",
  start: "start",
  end: "end"
}, Dp = {
  top: "start",
  center: "center",
  bottom: "end",
  baseline: "baseline"
}, El = (t) => `The component id with the "${t}" property for state change is missing. Either specify the id, or specify the "transition_trigger" property without "state_change" value.`;
function xa(t) {
  return t.some((r) => r.name === "native");
}
function Tp(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, k, w, z, H, L, Q, ce, T, X, le, C, M, N, U, se, fe, Ce, Ee, de, Ie, ee, De, qe, Ke, ke, rt, ye, Ae, _e, x, ue, ie = A, Fe = () => (ie(), ie = V(w, (it) => e(130, ue = it)), w), xe, Xe = A, ne = () => (Xe(), Xe = V(z, (it) => e(131, xe = it)), z), Ye, Le = A, st = () => (Le(), Le = V(k, (it) => e(132, Ye = it)), k), lt, at = A, wt = () => (at(), at = V(H, (it) => e(133, lt = it)), H), nt, zt = A, ut = () => (zt(), zt = V(p, (it) => e(134, nt = it)), p), pe, ge = A, _t = () => (ge(), ge = V(m, (it) => e(135, pe = it)), m), je, I = A, vt = () => (I(), I = V(o, (it) => e(136, je = it)), o), ft, St = A, Tt = () => (St(), St = V(h, (it) => e(20, ft = it)), h), et, K = A, At = () => (K(), K = V(_, (it) => e(137, et = it)), _), Mt, Zt = A, Jt = () => (Zt(), Zt = V(f, (it) => e(138, Mt = it)), f), he, Be = A, pt = () => (Be(), Be = V(u, (it) => e(139, he = it)), u), be, Qe = A, Oe = () => (Qe(), Qe = V(a, (it) => e(140, be = it)), a), tr, Ne = A, yt = () => (Ne(), Ne = V(c, (it) => e(141, tr = it)), c), Ft, It = A, ur = () => (It(), It = V(l, (it) => e(142, Ft = it)), l), Me, kt = A, or = () => (kt(), kt = V(s, (it) => e(143, Me = it)), s), $t, Kt = A, gr = () => (Kt(), Kt = V(i, (it) => e(144, $t = it)), i), vr;
  t.$$.on_destroy.push(() => ie()), t.$$.on_destroy.push(() => Xe()), t.$$.on_destroy.push(() => Le()), t.$$.on_destroy.push(() => at()), t.$$.on_destroy.push(() => zt()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => St()), t.$$.on_destroy.push(() => K()), t.$$.on_destroy.push(() => Zt()), t.$$.on_destroy.push(() => Be()), t.$$.on_destroy.push(() => Qe()), t.$$.on_destroy.push(() => Ne()), t.$$.on_destroy.push(() => It()), t.$$.on_destroy.push(() => kt()), t.$$.on_destroy.push(() => Kt());
  let { $$slots: Nt = {}, $$scope: yr } = r, { componentContext: G } = r, { cls: dt = "" } = r, { style: Gt = void 0 } = r, { layoutParams: jt = {} } = r, { customDescription: wr = !1 } = r, { customPaddings: Ar = !1 } = r, { customActions: hr = "" } = r, { additionalPaddings: Fr = null } = r, { heightByAspect: Wr = !1 } = r, { parentOf: rr = void 0 } = r, { parentOfSimpleMode: tt = void 0 } = r, { replaceItems: Ct = void 0 } = r, { hasInnerFocusable: Xt = !1 } = r, { alwaysCustomFocus: Yt = !1 } = r, { containerElement: fr = "span" } = r, { devapi: ct = void 0 } = r;
  const te = Tr(Xr), bt = Tr(_a), { isEnabled: nr } = Tr(pa);
  bn(t, nr, (it) => e(145, vr = it));
  const mr = te.direction;
  bn(t, mr, (it) => e(19, x = it));
  let sr, v, re = null, d = [], j = {}, Te = {}, Re = !1, Pt = 1, O = "transparent", Dt = 0, ot = {
    "top-left": 0,
    "top-right": 0,
    "bottom-right": 0,
    "bottom-left": 0
  }, Ge = "", Je = null, Wt = "", br = {}, qr, sn, Zr, ve = 0, pn = 0, Qr = 0, gn = !1, y = !1, E = {}, S, oe, R, Ze = 0, Se = 0, qt = 0, Vt = !1, ze = !1, Qt = 1, Et, Sr, jr, Gr, xr = [], wn = !1, hn = !1, jn, xn, Un, Gn = [], Ut = [], b = [], F = [], Z = [], P = [], we = [], me = [], Ot = [], Lt = [], Ur = "", Dr, Jr, ho, Jn, so = !1, Fn = "visible", Yo, Lo, Ko = !1, Ue = !0, kr, Mr, mo, Co;
  function En() {
    e(72, Je = null), e(73, Wt = ""), e(86, Qt = 1), e(98, so = !1), e(99, Fn = "visible"), e(100, Yo = void 0), e(28, Ue = !0), xr = G.fakeElement ? [] : G.json.transition_triggers || ["state_change", "visibility_change"], e(89, wn = xr.indexOf("state_change") !== -1), hn = xr.indexOf("visibility_change") !== -1, sr && Va(sr), Mr == null || Mr(), vr && e(102, Mr = te.processVariableTriggers(G, G.json.variable_triggers));
  }
  function Yi(it, Yr) {
    if (!Array.isArray(rr) || !Ct || tt && (Array.isArray(Yr) ? Yr.length : 0) !== 1)
      return;
    const An = rr.findIndex((ln) => (ln == null ? void 0 : ln.id) === it), Ln = rr.slice();
    Ln.splice(An, 1, ...(Yr || []).map((ln) => ({ json: ln, id: ln == null ? void 0 : ln.id }))), e(53, rr = Ln), Ct(Ln.map((ln) => ln == null ? void 0 : ln.json));
  }
  function ci(it) {
    const Yr = oo(it.start_value, 1), An = oo(it.end_value, 1), Ln = tn(it.start_delay, 0), ln = Li() ? 0 : tn(it.duration, 300), bo = bd(it.interpolator, "ease_in_out").replace(/_/g, "-");
    switch (it.name) {
      case "fade":
        return e(94, Dr = Yr), e(95, Jr = An), `opacity ${ln}ms ${bo} ${Ln}ms`;
      case "scale":
        return e(96, ho = Yr), e(97, Jn = An), `transform ${ln}ms ${bo} ${Ln}ms`;
      case "native":
      case "no_animation":
        return "";
      default:
        return G.logError(Y(new Error("Unknown action_animation name"), {
          additional: { animation: it.name }
        })), "";
    }
  }
  async function Si(it) {
    e(99, Fn = it);
    const Yr = it === "visible" ? "in" : "out", An = Yr === "in" ? G.json.transition_in : G.json.transition_out;
    if (hn && An) {
      let Ln;
      it === "gone" && (Ln = sr.getBoundingClientRect()), await Vn(), Yr === "in" && e(91, xn = !0), bt.runVisibilityTransition(
        {
          ...G.json,
          visibility: "visible"
        },
        G,
        An,
        sr,
        Yr,
        Ln
      ).then(() => {
        Yr === "in" && e(91, xn = !1);
      }).catch((ln) => {
        throw Yr === "in" && e(91, xn = !1), ln;
      });
    }
  }
  function Sa() {
    if (re && sr) {
      const it = te.getExtensionContext(G);
      re.forEach((Yr) => {
        var An;
        (An = Yr.unmountView) == null || An.call(Yr, sr, it);
      }), re = null;
    }
  }
  function u_() {
    if (re != null && re.length) {
      const it = te.getExtensionContext(G);
      re.forEach((Yr) => {
        var An;
        (An = Yr.updateView) == null || An.call(Yr, sr, it);
      });
    }
  }
  let Eo = null, Ro = null, ui = "desktop";
  function Ki() {
    Eo != null && Eo.matches ? e(105, ui = "mobile") : Ro != null && Ro.matches ? e(105, ui = "tablet") : e(105, ui = "desktop");
  }
  let lo = null, Xi = "";
  function Va(it) {
    var Zi, Qi, xi;
    mo == null || mo.destroy(), e(65, sr = it), wn && G.json.transition_in && (G.id ? bt.registerChildWithTransitionIn(G.json, G, G.json.transition_in, it).then(() => {
      e(90, jn = !1);
    }).catch((Xo) => {
      throw e(90, jn = !1), Xo;
    }) : G.logError(Y(new Error(El("transition_in")), { level: "warn" }))), wn && G.json.transition_out && (G.id ? bt.registerChildWithTransitionOut(G.json, G, G.json.transition_out, it) : G.logError(Y(new Error(El("transition_out")), { level: "warn" }))), G.fakeElement || (G.json.transition_change && !G.id && G.logError(Y(new Error(El("transition_change")), { level: "warn" })), bt.registerChildWithTransitionChange(G.json, G, G.json.transition_change, it).then(() => {
      e(92, Un = !1);
    }).catch((Xo) => {
      throw e(92, Un = !1), Xo;
    }));
    const Yr = !G.fakeElement || G.fakeElement === ni, An = Yr ? G.json.visibility_actions || G.json.visibility_action && [G.json.visibility_action] : [], Ln = Yr ? G.json.disappear_actions : [];
    let ln;
    (Array.isArray(An) && An.length || Array.isArray(Ln) && Ln.length) && (ln = rp(it, {
      visibilityActions: An,
      disappearActions: Ln,
      rootCtx: te,
      componentContext: G
    }));
    const bo = G.id;
    return bo && (Co == null || Co(), Co = te.registerId(bo, {
      context: () => G,
      node: () => sr
    }), bt.registerChild(bo)), (Zi = G.json.tooltips) == null || Zi.forEach((Xo) => {
      te.registerTooltip(it, Xo);
    }), Lo && (Lo.disconnect(), Lo = void 0), Lo = fp(sr, G, (Qi = G.json.layout_provider) == null ? void 0 : Qi.width_variable_name, (xi = G.json.layout_provider) == null ? void 0 : xi.height_variable_name), mo = {
      destroy() {
        Co && (Co(), Co = void 0), bo && bt.unregisterChild(bo), ln && ln.destroy();
      }
    }, mo;
  }
  function f_() {
    G.json.focus && ((Yt || !Pl(te.isPointerFocus)) && e(17, Ko = !0), G.execAnyActions(F));
  }
  function d_() {
    G.json.focus && (e(17, Ko = !1), G.execAnyActions(Z));
  }
  sl(u_), on(() => {
    var it;
    d.forEach((Yr) => {
      te.unregisterParentOf(Yr);
    }), e(66, d = []), Lo && (Lo.disconnect(), Lo = void 0), (it = G.json.tooltips) == null || it.forEach((Yr) => {
      te.unregisterTooltip(Yr);
    }), Mr == null || Mr(), Sa(), lo && (lo.remove(), e(106, lo = null)), Eo && (Eo.removeEventListener("change", Ki), e(103, Eo = null)), Ro && (Ro.removeEventListener("change", Ki), e(104, Ro = null));
  });
  function __(it) {
    zn.call(this, t, it);
  }
  function p_(it) {
    zn.call(this, t, it);
  }
  return t.$$set = (it) => {
    "componentContext" in it && e(0, G = it.componentContext), "cls" in it && e(1, dt = it.cls), "style" in it && e(54, Gt = it.style), "layoutParams" in it && e(55, jt = it.layoutParams), "customDescription" in it && e(56, wr = it.customDescription), "customPaddings" in it && e(57, Ar = it.customPaddings), "customActions" in it && e(58, hr = it.customActions), "additionalPaddings" in it && e(59, Fr = it.additionalPaddings), "heightByAspect" in it && e(60, Wr = it.heightByAspect), "parentOf" in it && e(53, rr = it.parentOf), "parentOfSimpleMode" in it && e(61, tt = it.parentOfSimpleMode), "replaceItems" in it && e(62, Ct = it.replaceItems), "hasInnerFocusable" in it && e(2, Xt = it.hasInnerFocusable), "alwaysCustomFocus" in it && e(63, Yt = it.alwaysCustomFocus), "containerElement" in it && e(3, fr = it.containerElement), "devapi" in it && e(64, ct = it.devapi), "$$scope" in it && e(149, yr = it.$$scope);
  }, t.$$.update = () => {
    var it, Yr, An, Ln, ln, bo, Zi, Qi, xi, Xo, Fa;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(129, n = G.origJson), t.$$.dirty[4] & /*origJson*/
    32 && n && En(), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[3] & /*prevTriggersUnsubscribe*/
    512 | t.$$.dirty[4] & /*$isEnabled*/
    2097152 && (vr ? (Mr == null || Mr(), e(102, Mr = te.processVariableTriggers(G, G.json.variable_triggers))) : Mr == null || Mr()), t.$$.dirty[0] & /*componentContext*/
    1 && vt(e(47, o = G.getDerivedFromVars(G.json.focus))), t.$$.dirty[0] & /*componentContext*/
    1 && gr(e(46, i = G.getDerivedFromVars(G.json.border))), t.$$.dirty[0] & /*componentContext*/
    1 && or(e(45, s = G.getDerivedFromVars(G.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(44, a = G.getDerivedFromVars(G.json.margins))), t.$$.dirty[0] & /*componentContext*/
    1 && ur(e(43, l = G.getDerivedFromVars(G.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && yt(e(42, c = G.getDerivedFromVars(G.json.alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && pt(e(41, u = G.getDerivedFromVars(G.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && Jt(e(40, f = G.getDerivedFromVars(G.json.alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && At(e(39, _ = G.getDerivedFromVars(G.json.alpha))), t.$$.dirty[0] & /*componentContext*/
    1 && Tt(e(38, h = G.getDerivedFromVars(G.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(37, m = G.getDerivedFromVars(G.json.background))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(36, p = G.getDerivedFromVars(G.json.action_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(35, k = G.getDerivedFromVars(G.json.visibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Fe(e(34, w = G.getDerivedFromVars(G.json.transform))), t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(33, z = G.getDerivedFromVars(G.json.transformations))), t.$$.dirty[0] & /*componentContext*/
    1 && wt(e(32, H = G.getDerivedFromVars(G.json.capture_focus_on_action))), t.$$.dirty[1] & /*parentOf, parentOfSimpleMode*/
    1077936128 | t.$$.dirty[2] & /*prevChilds*/
    16 && (d.forEach(($e) => {
      te.unregisterParentOf($e);
    }), e(66, d = []), rr && rr.forEach(($e) => {
      $e != null && $e.id && (d.push($e.id), te.registerParentOf($e.id, {
        replaceWith: Yi,
        isSingleMode: !!tt
      }));
    })), t.$$.dirty[0] & /*hasCustomFocus, borderElemStyle*/
    131088 | t.$$.dirty[2] & /*strokeWidth, strokeColor, cornersRadius, cornerRadius, borderStyle*/
    992 | t.$$.dirty[4] & /*$jsonFocus, $jsonBorder*/
    1052672) {
      const $e = Ko && (je != null && je.border) ? je.border : $t;
      let $r = {}, kn = {}, In = !1, rn = "";
      if ($e) {
        if (un($e.has_shadow, !1)) {
          const an = $e.shadow;
          an ? $r["box-shadow"] = ap(an) : $r["box-shadow"] = "0 1px 2px 0 rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.07)";
        }
        if ($e.stroke) {
          In = !0, e(68, Pt = tn($e.stroke.width, Pt)), e(69, O = dr($e.stroke.color, 1, O));
          const an = ((it = $e.stroke.style) == null ? void 0 : it.type) === "dashed" ? "dashed" : "solid";
          kn["--divkit-border"] = `${ae(Pt + 1)} ${an} ${O}`;
        }
        if ($e.corners_radius && typeof $e.corners_radius == "object") {
          e(71, ot = lp($e.corners_radius, ot)), $r["border-radius"] = Cs(ot);
          const an = {};
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((qn) => {
            an[qn] = (ot[qn] || 0) + 1;
          }), kn["--divkit-border-radius"] = Cs(an);
        } else $e.corner_radius && (e(70, Dt = tn($e.corner_radius, Dt)), e(71, ot = {
          "top-left": Dt,
          "top-right": Dt,
          "bottom-right": Dt,
          "bottom-left": Dt
        }), $r["border-radius"] = ae(Dt), kn["--divkit-border-radius"] = ae(Dt + 1));
        if (In && Pt && ($e.corners_radius || $e.corner_radius)) {
          let an = { ...ot };
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((qn) => {
            an[qn] = (an[qn] || 0) + Pt / 2;
          }), rn = Cs(an);
        }
      }
      e(67, j = xo($r, j)), e(4, Te = xo(kn, Te)), e(22, Re = In), e(5, Ge = rn);
    }
    if (t.$$.dirty[1] & /*customPaddings*/
    67108864 | t.$$.dirty[2] & /*selfPadding*/
    1024 | t.$$.dirty[4] & /*$jsonPaddings*/
    524288 && e(72, Je = bi(
      Me && !Ar ? Me : void 0,
      Je
    )), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[1] & /*additionalPaddings*/
    268435456 | t.$$.dirty[2] & /*selfPadding*/
    1024 && e(119, L = _o(sp(Je, Fr), x)), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[2] & /*margin*/
    2048 | t.$$.dirty[4] & /*$jsonMargins*/
    65536 && e(73, Wt = is(be, x, Wt)), t.$$.dirty[0] & /*componentContext, $direction*/
    524289 | t.$$.dirty[1] & /*layoutParams*/
    16777216 | t.$$.dirty[2] & /*widthNum, widthMods*/
    20480 | t.$$.dirty[4] & /*$jsonWidth, $jsonMargins, $jsonAlignmentHorizontal*/
    458752) {
      let $e, $r, kn, In, rn = {}, an = 0, qn = 0, Bo = !1, Ho = !1;
      const mn = (Yr = G.json.width) == null ? void 0 : Yr.type;
      if (mn === "fixed")
        e(76, ve = tn(Ft == null ? void 0 : Ft.value, ve)), $r = ae(ve);
      else if (mn === "wrap_content" || (mn === "match_parent" || !mn) && jt.parentHorizontalWrapContent)
        $e = "content", (mn === "wrap_content" && (Ft != null && Ft.constrained) || (mn === "match_parent" || !mn) && jt.parentHorizontalWrapContent) && (rn["width-constrained"] = !0, jt.parentContainerOrientation === "horizontal" && (qn = 1)), (mn === "match_parent" || !mn) && G.logError(Y(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      else if ($e = "parent", jt.parentContainerOrientation === "vertical" && jt.parentContainerWrap && (Ho = !0, G.logError(Y(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), jt.parentContainerOrientation === "vertical" && jt.parentContainerKnownWidth || jt.stretchWidth || jt.parentContainerOrientation === "horizontal" && jt.treatMatchParentAs100) {
        const Kr = (Ln = (An = x === "ltr" ? be == null ? void 0 : be.start : be == null ? void 0 : be.end) != null ? An : be == null ? void 0 : be.left) != null ? Ln : 0, Dn = (bo = (ln = x === "ltr" ? be == null ? void 0 : be.end : be == null ? void 0 : be.start) != null ? ln : be == null ? void 0 : be.right) != null ? bo : 0, Cn = `calc(100% - ${cn(Kr + Dn)})`;
        jt.stretchWidth ? ($r = "0", kn = Cn) : $r = Cn;
      } else jt.parentContainerOrientation === "horizontal" && (an = Ft && "weight" in Ft && Ft.weight || 1, jt.parentContainerWrap && (Bo = !0));
      if (mn === "wrap_content" || mn === "match_parent") {
        const Kr = Ft;
        let Dn, Cn;
        Kr.min_size && Tn(Kr.min_size.value) && (Dn = Kr.min_size.value), Kr.max_size && Tn(Kr.max_size.value) && (Cn = Kr.max_size.value), Dn !== void 0 && Cn !== void 0 && Dn > Cn && (G.logError(Y(new Error("Element has incorrect width constraints (min size is bigger than max size)."), {
          additional: {
            id: G.json.id,
            minSize: Dn + "dp",
            maxSize: Cn + "dp"
          }
        })), Dn = Cn = void 0), Dn !== void 0 && (kn = ae(Dn)), Cn !== void 0 && (In = ae(Cn));
      }
      if ($e === "parent")
        rn["halign-self"] = "stretch";
      else {
        const Kr = tr;
        Kr === "left" || Kr === "center" || Kr === "right" || Kr === "start" || Kr === "end" ? rn["halign-self"] = (x === "ltr" ? Fp : Ip)[Kr] : rn["halign-self"] = jt.parentHAlign || "start";
      }
      $e && (rn.width = $e), e(75, qr = $r), e(6, sn = kn), e(7, Zr = In), e(77, pn = an), e(78, Qr = qn), e(74, br = xo(rn, br)), e(79, gn = Bo), e(23, y = Ho);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*heightByAspect, layoutParams*/
    553648128 | t.$$.dirty[2] & /*heightNum, heightMods*/
    1310720 | t.$$.dirty[4] & /*$jsonHeight, $jsonMargins, $jsonAlignmentVertical*/
    114688) {
      let $e, $r, kn, In, rn = {}, an = 0, qn = 0, Bo = !1, Ho = !1;
      const mn = (Zi = G.json.height) == null ? void 0 : Zi.type;
      if (!Wr) if (mn === "fixed")
        e(82, Ze = tn(he == null ? void 0 : he.value, Ze)), $r = ae(Ze);
      else if (mn === "match_parent" && !jt.parentVerticalWrapContent)
        if ($e = "parent", jt.parentContainerOrientation === "horizontal" && jt.parentContainerWrap && (Ho = !0, G.logError(Y(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), jt.parentContainerOrientation === "horizontal" && jt.parentContainerKnownHeight || jt.stretchHeight || jt.parentContainerOrientation === "vertical" && jt.treatMatchParentAs100) {
          const Kr = (Qi = be == null ? void 0 : be.top) != null ? Qi : 0, Dn = (xi = be == null ? void 0 : be.bottom) != null ? xi : 0, Cn = `calc(100% - ${cn(Kr + Dn)})`;
          jt.stretchHeight ? ($r = "0", kn = Cn) : $r = Cn;
        } else jt.parentContainerOrientation === "vertical" && (an = (he == null ? void 0 : he.weight) || 1, jt.parentContainerWrap && (Bo = !0));
      else
        $e = "content", (mn === "wrap_content" && (he != null && he.constrained) || mn === "match_parent" && jt.parentVerticalWrapContent) && (rn["height-constrained"] = !0, jt.parentContainerOrientation === "vertical" && (qn = 1)), mn === "match_parent" && G.logError(Y(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      if (!Wr && (mn === "match_parent" || mn === "wrap_content")) {
        const Kr = he;
        let Dn, Cn;
        Kr.min_size && Tn(Kr.min_size.value) && (Dn = Kr.min_size.value), Kr.max_size && Tn(Kr.max_size.value) && (Cn = Kr.max_size.value), Dn !== void 0 && Cn !== void 0 && Dn > Cn && (G.logError(Y(new Error("Element has incorrect height constraints (min size is bigger than max size)."), {
          additional: {
            id: G.json.id,
            minSize: Dn + "dp",
            maxSize: Cn + "dp"
          }
        })), Dn = Cn = void 0), Dn !== void 0 && (kn = ae(Dn)), Cn !== void 0 && (In = ae(Cn));
      }
      if ($e === "parent")
        rn["valign-self"] = "stretch";
      else {
        const Kr = Mt;
        Kr === "top" || Kr === "center" || Kr === "bottom" || Kr === "baseline" && jt.parentContainerOrientation === "horizontal" ? rn["valign-self"] = Dp[Kr] : rn["valign-self"] = jt.parentVAlign || "start";
      }
      $e && (rn.height = $e), e(81, S = $r), e(8, oe = kn), e(9, R = In), e(83, Se = an), e(84, qt = qn), e(80, E = xo(rn, E)), e(85, Vt = Bo), e(24, ze = Ho);
    }
    if (t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(128, Q = jt.overlapParent ? !0 : void 0), t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(121, ce = jt.gridArea ? `${jt.gridArea.y + 1}/${jt.gridArea.x + 1}/span ${jt.gridArea.rowSpan}/span ${jt.gridArea.colSpan}` : void 0), t.$$.dirty[2] & /*alpha*/
    16777216 | t.$$.dirty[4] & /*$jsonAlpha*/
    8192 && (e(86, Qt = np(et, Qt)), e(87, Et = Qt === 1 ? void 0 : Qt)), t.$$.dirty[0] & /*$jsonAccessibility*/
    1048576 | t.$$.dirty[1] & /*customDescription*/
    33554432 && (e(21, v = void 0), ft && !wr)) {
      const $e = ri(ft);
      $e && (e(21, v = {}), e(21, v["aria-label"] = $e, v));
    }
    if (t.$$.dirty[0] & /*hasCustomFocus, background, backgroundRadius, hasSeparateBg, $direction*/
    658464 | t.$$.dirty[4] & /*$jsonFocus, $jsonBackground*/
    6144 && (e(10, Sr = Ko && (je != null && je.background) ? je.background : pe), e(88, jr = {}), e(11, Gr = !1), Array.isArray(Sr) && (e(11, Gr = Sr.some(($e) => $e.type === "image" || $e.type === "nine_patch_image") || !!Ge), !Gr))) {
      const $e = al(Sr, x);
      e(88, jr["background-color"] = $e.color, jr), e(88, jr["background-image"] = $e.image, jr), e(88, jr["background-size"] = $e.size, jr), e(88, jr["background-position"] = $e.position, jr), e(88, jr["background-repeat"] = "no-repeat", jr);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(90, jn = void 0), wn && G.id && G.json.transition_in && te.isRunning("stateChange") && e(90, jn = !0)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(92, Un = void 0), wn && G.id && te.isRunning("stateChange") && bt.hasTransitionChange(G.id) && e(92, Un = !0)), t.$$.dirty[0] & /*componentContext, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions*/
    61441 | t.$$.dirty[1] & /*customActions*/
    134217728) {
      const $e = G.json;
      let $r = $e.actions || $e.action && [$e.action] || [], kn = $e.doubletap_actions || [], In = $e.longtap_actions || [], rn = ((Xo = $e.focus) == null ? void 0 : Xo.on_focus) || [], an = ((Fa = $e.focus) == null ? void 0 : Fa.on_blur) || [], qn = $e.press_start_actions || [], Bo = $e.press_end_actions || [], Ho = $e.hover_start_actions || [], mn = $e.hover_end_actions || [];
      G.fakeElement && G.fakeElement !== ni ? ($r = [], kn = [], In = [], rn = [], an = []) : (Array.isArray($r) || ($r = [], G.logError(Y(new Error("Actions should be array")))), Array.isArray(kn) || (kn = [], G.logError(Y(new Error("DoubleTapActions should be array")))), Array.isArray(In) || (In = [], G.logError(Y(new Error("LongTapActions should be array")))), Array.isArray(rn) || (rn = [], G.logError(Y(new Error("FocusActions should be array")))), Array.isArray(an) || (an = [], G.logError(Y(new Error("BlurActions should be array")))), Array.isArray(qn) || (qn = [], G.logError(Y(new Error("PressStartActions should be array")))), Array.isArray(Bo) || (Bo = [], G.logError(Y(new Error("PressEndActions should be array")))), Array.isArray(Ho) || (Ho = [], G.logError(Y(new Error("HoverStartActions should be array")))), Array.isArray(mn) || (mn = [], G.logError(Y(new Error("HoverEndActions should be array"))))), ($r.length || kn.length || In.length || P.length || we.length || me.length || Ot.length) && hr && ($r = [], kn = [], In = [], e(12, P = []), e(13, we = []), e(14, me = []), e(15, Ot = []), G.logError(Y(new Error(`Cannot use action on component "${hr}"`)))), e(25, Gn = $r), e(26, Ut = kn), e(27, b = In), F = rn, Z = an, e(12, P = qn), e(13, we = Bo), e(14, me = Ho), e(15, Ot = mn);
    }
    if (t.$$.dirty[0] & /*actionAnimationList*/
    65536 | t.$$.dirty[4] & /*$jsonActionAnimation*/
    1024 && nt && (e(16, Lt = ss(nt)), e(93, Ur = Lt.map(ci).filter(Boolean).join(", "))), t.$$.dirty[4] & /*$jsonCaptureFocusOnAction*/
    512 && typeof lt == "boolean" && e(28, Ue = lt), t.$$.dirty[3] & /*visibility, isVisibilityInited*/
    96 | t.$$.dirty[4] & /*$jsonVisibility*/
    256) {
      const $e = Fn, $r = ip(Ye, Fn);
      $e !== $r && (so && (Fn === "visible" || $r === "visible") ? Si($r) : e(99, Fn = $r)), so || e(98, so = !0);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*currentNode*/
    8 | t.$$.dirty[3] & /*prevExtensionsVal*/
    256 && G.json && sr && !Gi(G.json.extensions, kr)) {
      let $e = e(101, kr = G.json.extensions);
      Vn().then(() => {
        if (!($e !== kr || !sr) && (Sa(), Array.isArray(G.json.extensions))) {
          const $r = te.getExtensionContext(G);
          re = G.json.extensions.map((kn) => {
            var an;
            const In = kn.id;
            if (!In)
              return;
            const rn = te.getExtension(In, kn.params);
            return rn && ((an = rn.mountView) == null || an.call(rn, sr, $r)), rn;
          }).filter(Oo);
        }
      });
    }
    if (t.$$.dirty[0] & /*hasCustomFocus, componentContext*/
    131073 | t.$$.dirty[1] & /*layoutParams*/
    16777216 | t.$$.dirty[2] & /*widthMods, heightMods, stateChangingInProgress, visibilityChangingInProgress, transitionChangeInProgress*/
    1879314432 | t.$$.dirty[3] & /*visibility, actionAnimationTransition*/
    65 | t.$$.dirty[4] & /*parentOverlapMod*/
    16 && e(31, T = {
      ...br,
      ...E,
      "parent-overlap": Q,
      "scroll-snap": jt.scrollSnap,
      "hide-on-transition-in": jn || xn || Un,
      visibility: Fn,
      "has-action-animation": !!Ur,
      "parent-flex": jt.parentContainerOrientation || void 0,
      "parent-grid": !!jt.gridArea || void 0,
      "has-custom-focus": !!(Ko && G.json.focus)
    }), t.$$.dirty[4] & /*$jsonTransformations, $jsonTransform*/
    192) {
      let $e;
      Array.isArray(xe) ? $e = xe : ue && ue.rotation !== void 0 && ($e = [
        {
          type: "rotation",
          angle: ue.rotation,
          pivot_x: ue.pivot_x,
          pivot_y: ue.pivot_y
        }
      ]), $e ? e(100, Yo = dp($e)) : e(100, Yo = void 0);
    }
    if (t.$$.dirty[2] & /*widthFill, heightFill, widthFlexGrow, heightFlexGrow*/
    10649600 && e(115, X = gn || Vt ? "100%" : pn || Se ? 0 : void 0), t.$$.dirty[0] & /*componentContext*/
    1 && e(30, le = G.json["custom-class"] || ""), t.$$.dirty[0] & /*componentContext*/
    1 && e(113, C = G.json.position), t.$$.dirty[0] & /*componentContext*/
    1 && e(114, M = G.json.sticky_top), t.$$.dirty[0] & /*componentContext*/
    1 && e(112, N = G.json.sticky_bottom), t.$$.dirty[0] & /*componentContext*/
    1 && e(111, U = G.json.z_index), t.$$.dirty[0] & /*componentContext*/
    1 && e(110, se = G.json.cursor), t.$$.dirty[0] & /*componentContext*/
    1 && e(109, fe = G.json.backdrop_filter), t.$$.dirty[0] & /*componentContext*/
    1 && e(108, Ce = G.json.overflow), t.$$.dirty[0] & /*componentContext*/
    1 && e(107, Ee = G.json["box-shadow"]), t.$$.dirty[0] & /*componentContext*/
    1 && e(116, de = G.json.custom_transition), t.$$.dirty[0] & /*componentContext*/
    1 && e(127, Ie = G.json.responsive), t.$$.dirty[3] & /*responsiveMobileQuery, responsiveTabletQuery*/
    3072 | t.$$.dirty[4] & /*responsiveConfig*/
    8 && (Ie && typeof Ie == "object" && typeof window < "u" ? (Eo || (e(103, Eo = window.matchMedia("(max-width: 767px)")), e(104, Ro = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), Eo.addEventListener("change", Ki), Ro.addEventListener("change", Ki)), Ki()) : e(105, ui = "desktop")), t.$$.dirty[3] & /*responsiveBreakpoint*/
    4096 | t.$$.dirty[4] & /*responsiveConfig*/
    8 && e(126, ee = ui !== "desktop" && (Ie == null ? void 0 : Ie[ui]) || null), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(120, De = (() => {
      if (!(ee != null && ee.paddings)) return;
      const $e = ee.paddings;
      return _o(bi($e, null), x);
    })()), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(118, qe = (() => {
      if (!(ee != null && ee.margins)) return;
      const $e = ee.margins;
      return is($e, x, "");
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
    4 && e(122, rt = (() => {
      if (!(ee != null && ee.height)) return;
      const $e = ee.height;
      if ($e.type === "fixed" && $e.value) return ae($e.value);
      if ($e.type === "match_parent") return "100%";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(117, ye = (ee == null ? void 0 : ee.opacity) !== void 0 ? ee.opacity : void 0), t.$$.dirty[4] & /*activeResponsive*/
    4 && (ee == null || ee.visibility), t.$$.dirty[0] & /*componentContext*/
    1 && e(125, Ae = G.json.hover), t.$$.dirty[0] & /*hoverClassName*/
    262144 | t.$$.dirty[3] & /*hoverStyleEl*/
    8192 | t.$$.dirty[4] & /*hoverConfig*/
    2)
      if (Ae && typeof Ae == "object" && typeof document < "u") {
        Xi || e(18, Xi = "divkit-hover-" + Math.random().toString(36).slice(2, 9));
        let $e = "";
        Ae.background_color && ($e += `background-color: ${Ae.background_color} !important;`), Ae.opacity !== void 0 && ($e += `opacity: ${Ae.opacity} !important;`), Ae.scale !== void 0 && ($e += `scale: ${Ae.scale} !important;`), Ae.color && ($e += `color: ${Ae.color} !important;`), Ae.border_color && ($e += `border-color: ${Ae.border_color} !important;`), (Ae["box-shadow"] || Ae.box_shadow) && ($e += `box-shadow: ${Ae["box-shadow"] || Ae.box_shadow} !important;`), $e && (lo || (e(106, lo = document.createElement("style")), document.head.appendChild(lo)), e(106, lo.textContent = `.${Xi}:hover { ${$e} }`, lo));
      } else lo && (lo.remove(), e(106, lo = null), e(18, Xi = ""));
    t.$$.dirty[0] & /*widthMin, widthMax, componentContext, heightMin, heightMax*/
    961 | t.$$.dirty[1] & /*style*/
    8388608 | t.$$.dirty[2] & /*backgroundStyle, borderStyle, width, height, margin, opacity, widthFlexGrow, heightFlexGrow, widthFlexShrink, heightFlexShrink*/
    107587616 | t.$$.dirty[3] & /*responsiveMaxWidth, responsiveHeight, gridArea, responsivePadding, padding, responsiveMargin, responsiveOpacity, customTransition, actionAnimationTransition, transform, flexBasis, customPosition, customStickyTop, customStickyBottom, customZIndex, customCursor, customBackdropFilter, customOverflow, customBoxShadow, animationOpacityStart, animationOpacityEnd, animationScaleStart, animationScaleEnd*/
    2147467423 | t.$$.dirty[4] & /*responsiveWidth*/
    1 && e(29, _e = {
      ...Gt,
      ...jr,
      ...j,
      width: ke || qr,
      "min-width": sn,
      "max-width": Ke || Zr || (() => {
        const $e = G.json.max_width;
        if (($e == null ? void 0 : $e.type) === "fixed" && ($e != null && $e.value)) return ae($e.value);
      })(),
      height: rt || S,
      "min-height": oe,
      // input max-height
      "max-height": R || (Gt == null ? void 0 : Gt["max-height"]) || (() => {
        const $e = G.json.max_height;
        if (($e == null ? void 0 : $e.type) === "fixed" && ($e != null && $e.value)) return ae($e.value);
      })(),
      "grid-area": ce,
      padding: De || L,
      margin: qe || Wt,
      opacity: ye !== void 0 ? ye : Et,
      transition: de || Ur,
      "transform-origin": Yo ? "0 0" : void 0,
      transform: Yo,
      "flex-grow": pn || Se || void 0,
      "flex-shrink": Qr || qt ? 1 : void 0,
      "flex-basis": X,
      position: C,
      top: C === "sticky" && M !== void 0 ? ae(M) : void 0,
      bottom: C === "sticky" && N !== void 0 ? ae(N) : void 0,
      "z-index": U,
      cursor: se,
      "backdrop-filter": fe,
      "-webkit-backdrop-filter": fe,
      overflow: Ce,
      "box-shadow": Ee,
      "--divkit-animation-opacity-start": Dr,
      "--divkit-animation-opacity-end": Jr,
      "--divkit-animation-scale-start": ho,
      "--divkit-animation-scale-end": Jn
    });
  }, [
    G,
    dt,
    Xt,
    fr,
    Te,
    Ge,
    sn,
    Zr,
    oe,
    R,
    Sr,
    Gr,
    P,
    we,
    me,
    Ot,
    Lt,
    Ko,
    Xi,
    x,
    ft,
    v,
    Re,
    y,
    ze,
    Gn,
    Ut,
    b,
    Ue,
    _e,
    le,
    T,
    H,
    z,
    w,
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
    o,
    nr,
    mr,
    Va,
    f_,
    d_,
    rr,
    Gt,
    jt,
    wr,
    Ar,
    hr,
    Fr,
    Wr,
    tt,
    Ct,
    Yt,
    ct,
    sr,
    d,
    j,
    Pt,
    O,
    Dt,
    ot,
    Je,
    Wt,
    br,
    qr,
    ve,
    pn,
    Qr,
    gn,
    E,
    S,
    Ze,
    Se,
    qt,
    Vt,
    Qt,
    Et,
    jr,
    wn,
    jn,
    xn,
    Un,
    Ur,
    Dr,
    Jr,
    ho,
    Jn,
    so,
    Fn,
    Yo,
    kr,
    Mr,
    Eo,
    Ro,
    ui,
    lo,
    Ee,
    Ce,
    fe,
    se,
    U,
    N,
    C,
    M,
    X,
    de,
    ye,
    qe,
    L,
    De,
    ce,
    rt,
    Ke,
    ke,
    Ae,
    ee,
    Ie,
    Q,
    n,
    ue,
    xe,
    Ye,
    lt,
    nt,
    pe,
    je,
    et,
    Mt,
    he,
    be,
    tr,
    Ft,
    Me,
    $t,
    vr,
    Nt,
    __,
    p_,
    yr
  ];
}
class yn extends Or {
  constructor(r) {
    super(), zr(
      this,
      r,
      Tp,
      Vp,
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
const Mp = "appkit-text", Pp = "appkit-text_halign_start", Np = "appkit-text_halign_center", zp = "appkit-text_halign_end", Op = "appkit-text_valign_start", Lp = "appkit-text_valign_center", Rp = "appkit-text_valign_end", Bp = "appkit-text_valign_baseline", Hp = "appkit-text__inner", Wp = "appkit-text_singleline", Up = "appkit-text_multiline", Gp = "appkit-text_truncate_none", Jp = "appkit-text__inner_gradient", qp = "appkit-text__image", Yp = "appkit-text__image_hidden", co = {
  "text-range": "appkit-text-range",
  text: Mp,
  text_halign_start: Pp,
  text_halign_center: Np,
  text_halign_end: zp,
  text_valign_start: Op,
  text_valign_center: Lp,
  text_valign_end: Rp,
  text_valign_baseline: Bp,
  text__inner: Hp,
  text_singleline: Wp,
  text_multiline: Up,
  text_truncate_none: Gp,
  "text__inner_has-cloud-bg": "appkit-text__inner_has-cloud-bg",
  "text__inner_cloud-bg": "appkit-text__inner_cloud-bg",
  text__inner_gradient: Jp,
  "text__image-wrapper": "appkit-text__image-wrapper",
  "text__image-wrapper_crop": "appkit-text__image-wrapper_crop",
  "text__image-wrapper_align_top": "appkit-text__image-wrapper_align_top",
  "text__image-wrapper_align_center": "appkit-text__image-wrapper_align_center",
  "text__image-wrapper_align_bottom": "appkit-text__image-wrapper_align_bottom",
  "text__image-wrapper_align_baseline": "appkit-text__image-wrapper_align_baseline",
  text__image: qp,
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
function Hn(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e <= 0 ? r : e;
}
function Kp(t) {
  if (t === "light" || t === "medium" || t === "bold" || t === "regular" || t === "semi_bold")
    return t === "medium" ? 500 : t === "bold" ? 700 : t === "light" ? 300 : t === "semi_bold" ? 600 : 400;
}
function yi(t, r, e) {
  return typeof r == "number" && r > 0 ? r : Kp(t) || e;
}
function Rl(t, r) {
  if (!t)
    return {};
  const e = {};
  for (const n of ["left", "top", "right", "bottom", "start", "end"]) {
    const o = t[n];
    o && (e[n] = o * r);
  }
  return e;
}
function Ri(t) {
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
function $a(t) {
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
    m(l, c) {
      q(l, r, c), ht(r, e), ht(e, n), ht(n, o), ht(n, i), ht(n, a);
    },
    p(l, c) {
      c[0] & /*borderRadius*/
      32 && s !== (s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      l[5] + " -" + /*borderRadius*/
      l[5]) && g(i, "values", s);
    },
    d(l) {
      l && J(r);
    }
  };
}
function ec(t) {
  let r;
  return {
    c() {
      r = Ve("span"), g(r, "class", So["text-range__top-offset"]), D(
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
function tc(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Ve("div"), e = Ve("div"), n = Ve("div"), o = Ve("div"), i = Ve("div"), s = Ve("div"), g(r, "class", So["text-range__mask-animation"]), g(e, "class", So["text-range__mask-animation"]), g(n, "class", So["text-range__mask-animation"]), g(o, "class", So["text-range__mask-animation"]), g(i, "class", So["text-range__mask-animation"]), g(s, "class", So["text-range__mask-animation"]);
    },
    m(a, l) {
      q(a, r, l), q(a, e, l), q(a, n, l), q(a, o, l), q(a, i, l), q(a, s, l);
    },
    d(a) {
      a && (J(r), J(e), J(n), J(o), J(i), J(s));
    }
  };
}
function Xp(t) {
  let r = (
    /*text*/
    (t[1] || "​") + ""
  ), e, n = (
    /*maskColor*/
    t[4] && tc()
  );
  return {
    c() {
      n && n.c(), e = Mn(r);
    },
    m(o, i) {
      n && n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      /*maskColor*/
      o[4] ? n || (n = tc(), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null), i[0] & /*text*/
      2 && r !== (r = /*text*/
      (o[1] || "​") + "") && Xn(e, r);
    },
    d(o) {
      o && J(e), n && n.d(o);
    }
  };
}
function Zp(t) {
  let r, e, n, o, i = (
    /*cloudBg*/
    t[3] && /*hasCloudBg*/
    t[6] && $a(t)
  ), s = (
    /*topOffset*/
    t[9] && ec(t)
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
      style: er(
        /*style*/
        t[7]
      ),
      $$slots: { default: [Xp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      i && i.c(), r = xt(), s && s.c(), e = xt(), Ht(n.$$.fragment);
    },
    m(a, l) {
      i && i.m(a, l), q(a, r, l), s && s.m(a, l), q(a, e, l), Rt(n, a, l), o = !0;
    },
    p(a, l) {
      /*cloudBg*/
      a[3] && /*hasCloudBg*/
      a[6] ? i ? i.p(a, l) : (i = $a(a), i.c(), i.m(r.parentNode, r)) : i && (i.d(1), i = null), /*topOffset*/
      a[9] ? s ? s.p(a, l) : (s = ec(a), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null);
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
      128 && (c.style = er(
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
      $(n.$$.fragment, a), o = !1;
    },
    d(a) {
      a && (J(r), J(e)), i && i.d(a), s && s.d(a), Bt(n, a);
    }
  };
}
function Qp(t, r, e) {
  let n, o, i, s, a, l, c, u, f, { componentContext: _ } = r, { text: h } = r, { rootFontSize: m } = r, { textStyles: p = {} } = r, { singleline: k = !1 } = r, { actions: w = void 0 } = r, { cloudBg: z = !1 } = r, { cloudBgId: H = "" } = r, { customLineHeight: L = null } = r;
  const Q = Tr(Xr), ce = Q.direction;
  bn(t, ce, (ke) => e(35, f = ke));
  const T = z && H || Q.genId("text-range") || "";
  let X = "none", le = 12, C = 1.25, M = "", N, U = "", se = "", fe = "", Ce, Ee = null, de, Ie, ee = !1, De, qe, Ke;
  return t.$$set = (ke) => {
    "componentContext" in ke && e(0, _ = ke.componentContext), "text" in ke && e(1, h = ke.text), "rootFontSize" in ke && e(12, m = ke.rootFontSize), "textStyles" in ke && e(13, p = ke.textStyles), "singleline" in ke && e(14, k = ke.singleline), "actions" in ke && e(2, w = ke.actions), "cloudBg" in ke && e(3, z = ke.cloudBg), "cloudBgId" in ke && e(15, H = ke.cloudBgId), "customLineHeight" in ke && e(16, L = ke.customLineHeight);
  }, t.$$.update = () => {
    var ke, rt, ye, Ae, _e, x, ue, ie;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && _.json && (e(17, X = "none"), e(18, le = 12), e(19, C = 1.25), e(20, M = ""), e(21, N = void 0), e(22, U = ""), e(23, se = ""), e(24, fe = ""), e(25, Ce = void 0), e(26, Ee = null), e(27, de = void 0), e(28, Ie = void 0), e(29, ee = !1), e(4, De = void 0), e(30, qe = void 0), e(31, Ke = void 0)), t.$$.dirty[0] & /*textStyles*/
    8192) {
      let Fe = "none";
      (p.underline || p.strike) && (p.underline === "single" && p.strike === "single" ? Fe = "both" : p.underline === "single" ? Fe = "underline" : p.strike === "single" && (Fe = "strike")), e(17, X = Fe);
    }
    if (t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(18, le = Hn(p.font_size, le)), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && Wn(p.line_height) && e(19, C = Number(p.line_height) / le), t.$$.dirty[0] & /*textStyles*/
    8192 && Tn(p.letter_spacing) && e(20, M = ae(p.letter_spacing)), t.$$.dirty[0] & /*textStyles, fontWeight*/
    2105344 && (e(21, N = yi(p.font_weight, p.font_weight_value, N)), typeof p.font_family == "string" && p.font_family ? e(22, U = Q.typefaceProvider(p.font_family, { fontWeight: N || 400 })) : e(22, U = "")), t.$$.dirty[0] & /*textStyles, fontVariationSettings*/
    8396800) {
      const Fe = Ri(p.font_variation_settings);
      Fe !== se && e(23, se = Fe);
    }
    if (t.$$.dirty[0] & /*textStyles, color*/
    16785408 && e(24, fe = dr(p.text_color, 1, fe)), t.$$.dirty[0] & /*textStyles*/
    8192 && e(9, n = p.top_offset ? ae(p.top_offset) : ""), t.$$.dirty[0] & /*textStyles*/
    8192 && e(6, o = ((ke = p.background) == null ? void 0 : ke.type) === "cloud"), t.$$.dirty[0] & /*textStyles*/
    8192 && e(33, i = ((rt = p.background) == null ? void 0 : rt.type) === "cloud" ? p.background.paddings : void 0), t.$$.dirty[0] & /*textStyles, cloudBg, hasCloudBg, fontSize*/
    270408 | t.$$.dirty[1] & /*$direction*/
    16) {
      const Fe = p.mask, xe = !!(Fe && (Fe.type === "solid" || Fe.type === "particles") && Fe.is_enabled !== !1 && Fe.color);
      if (z || xe ? e(25, Ce = "transparent") : e(25, Ce = void 0), e(29, ee = !1), e(4, De = void 0), e(30, qe = void 0), e(31, Ke = void 0), z)
        o ? e(28, Ie = Y_(p.background.color, 255, "transparent")) : e(28, Ie = void 0);
      else if (Fe && xe) {
        if (Fe.type === "solid")
          e(28, Ie = dr(Fe.color));
        else if (Fe.type === "particles") {
          const Xe = Hn((ye = Fe.particle_size) == null ? void 0 : ye.value, 1), ne = ae(Xe * 10 / le), Ye = Hn(Fe.density, 0.8), Le = dr(Fe.color);
          e(28, Ie = void 0), e(4, De = Le), e(30, qe = ne), e(31, Ke = String(Ye)), e(29, ee = Fe.is_animated === !0);
        }
      } else ((Ae = p.background) == null ? void 0 : Ae.type) === "solid" ? e(28, Ie = al([p.background], f).color) : e(28, Ie = void 0);
    }
    t.$$.dirty[0] & /*textStyles*/
    8192 && ((_e = p.border) != null && _e.stroke && p.border.stroke.color && dr(p.border.stroke.color) !== "transparent" && Wn(p.border.stroke.width) && ((x = p.background) == null ? void 0 : x.type) !== "cloud" ? e(26, Ee = {
      color: p.border.stroke.color,
      width: p.border.stroke.width,
      corner_radius: p.border.corner_radius
    }) : e(26, Ee = null)), t.$$.dirty[0] & /*cloudBg, hasCloudBg, textStyles, border*/
    67117128 && e(5, s = z ? o && p.background.corner_radius || 0 : Ee ? Hn(Ee.corner_radius, 0) : 0), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(32, a = p.text_shadow ? cp(p.text_shadow, le) : void 0), t.$$.dirty[0] & /*textStyles*/
    8192 && typeof p.baseline_offset == "number" && e(27, de = p.baseline_offset), t.$$.dirty[0] & /*textStyles*/
    8192 && e(34, l = typeof p.baseline_offset == "number" ? void 0 : p.alignment_vertical), t.$$.dirty[0] & /*singleline, decoration, hasCloudBg, customLineHeight, verticalAlign, maskColor, maskAnimated*/
    671301712 | t.$$.dirty[1] & /*customVerticalAlign*/
    8 && e(8, c = {
      singleline: k,
      decoration: X,
      align: l,
      cloud: o,
      "relative-vertical-align": !!(L && de),
      "has-particles-mask": !!De,
      "mask-animated": ee
    }), t.$$.dirty[0] & /*fontSize, rootFontSize, lineHeight, letterSpacing, fontWeight, fontFamily, customLineHeight, verticalAlign, cloudBg, hasCloudBg, cloudBgId, colorOverride, color, background, textStyles, border, borderRadius, fontVariationSettings, maskColor, maskSize*/
    1610461304 | t.$$.dirty[1] & /*customVerticalAlign, cloudPadding, $direction, shadow, maskDensity*/
    31 && e(7, u = {
      "font-size": ae(le * 10 / m),
      "line-height": l ? "normal" : C,
      "letter-spacing": M,
      "font-weight": N,
      "font-family": U,
      "vertical-align": L || de === void 0 ? void 0 : ae(de * 10 / le),
      top: L && de !== void 0 ? ae(-de * 10 / le) : void 0,
      margin: i ? _o(Rl(i, -10 / le), f) : void 0,
      padding: i ? _o(Rl(i, 10 / le), f) : void 0,
      filter: z && o && !H ? `url(#${T})` : a,
      color: Ce || fe,
      background: Ie,
      opacity: z && o && !H ? ((ie = (ue = fo(p.background.color)) == null ? void 0 : ue.a) != null ? ie : 255) / 255 : void 0,
      /**
      * box-shadow instead of border because:
      * 1) Doesn't take space as border does
      * 2) There should not be a border-radius on line breaks, but there should be a border
      */
      "box-shadow": Ee ? `inset 0 0 0 ${ae(Ee.width * 10 / le)} ${Ee.color}` : void 0,
      "border-radius": s ? ae(s * 10 / le) : void 0,
      "font-feature-settings": p.font_feature_settings || void 0,
      "font-variation-settings": se || void 0,
      "--divkit-text-mask-color": De,
      "--divkit-text-mask-size": qe,
      "--divkit-text-mask-density": Ke
    });
  }, [
    _,
    h,
    w,
    z,
    De,
    s,
    o,
    u,
    c,
    n,
    ce,
    T,
    m,
    p,
    k,
    H,
    L,
    X,
    le,
    C,
    M,
    N,
    U,
    se,
    fe,
    Ce,
    Ee,
    de,
    Ie,
    ee,
    qe,
    Ke,
    a,
    i,
    l,
    f
  ];
}
class ga extends Or {
  constructor(r) {
    super(), zr(
      this,
      r,
      Qp,
      Zp,
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
function fl(t, r, e) {
  return t === "left" || t === "center" || t === "right" || t === "start" || t === "end" ? t === "left" ? r === "ltr" ? "start" : "end" : t === "right" ? r === "ltr" ? "end" : "start" : t : e;
}
function dl(t, r) {
  return t === "top" || t === "center" || t === "bottom" || t === "baseline" ? t === "top" ? "start" : t === "bottom" ? "end" : t : r;
}
function xp(t) {
  return String(t != null ? t : "");
}
function wd(t, r) {
  return t === "source_in" || t === "source_atop" || t === "darken" || t === "lighten" || t === "multiply" || t === "screen" ? t : r;
}
function qs(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1;
}
function ha(t, r) {
  let e;
  return function(...n) {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      t.apply(this, n), e = null;
    }, r);
  };
}
function $p(t, r) {
  let e = null;
  const n = () => {
    const a = getComputedStyle(t), l = parseFloat(a.lineHeight);
    t.style.webkitLineClamp = "", t.style.maxHeight = "";
    const c = t.offsetHeight, u = t.scrollHeight;
    let f = Math.max(1, Math.floor(c / l));
    r.maxLines && r.maxLines < f && (f = r.maxLines), u > f * l + 1e-9 && (t.style.webkitLineClamp = String(f), t.style.maxHeight = l * f + "px");
  }, o = ha(n, 50), i = () => {
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
const { Boolean: kd } = No;
function rc(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function nc(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function oc(t) {
  let r = (
    /*htmlTag*/
    t[9]
  ), e, n = (
    /*htmlTag*/
    t[9] && Al(t)
  );
  return {
    c() {
      n && n.c(), e = xt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      /*htmlTag*/
      o[9] ? r ? Vr(
        r,
        /*htmlTag*/
        o[9]
      ) ? (n.d(1), n = Al(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = Al(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : r && (n.d(1), n = null, r = /*htmlTag*/
      o[9]);
    },
    i: A,
    o(o) {
      $(n, o);
    },
    d(o) {
      o && J(e), n && n.d(o);
    }
  };
}
function eg(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Ve("span"), e = Ve("span"), g(e, "class", n = mt("text__image-wrapper", co, {
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
    i: A,
    o: A,
    d(s) {
      s && J(r);
    }
  };
}
function tg(t) {
  let r, e, n = (
    /*item*/
    t[71].text && ic(t)
  );
  return {
    c() {
      n && n.c(), r = xt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && W(n, 1)) : (n = ic(o), n.c(), W(n, 1), n.m(r.parentNode, r)) : n && (_r(), $(n, 1, 1, () => {
        n = null;
      }), pr());
    },
    i(o) {
      e || (W(n), e = !0);
    },
    o(o) {
      $(n), e = !1;
    },
    d(o) {
      o && J(r), n && n.d(o);
    }
  };
}
function ic(t) {
  let r, e;
  return r = new ga({
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function sc(t) {
  let r, e, n, o;
  const i = [tg, eg], s = [];
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
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (_r(), $(s[u], 1, 1, () => {
        s[u] = null;
      }), pr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), W(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (W(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Al(t) {
  let r, e, n, o, i = ir(
    /*renderList*/
    t[13]
  ), s = [];
  for (let u = 0; u < i.length; u += 1)
    s[u] = sc(nc(t, i, u));
  const a = (u) => $(s[u], 1, 1, () => {
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
  ], c = {};
  for (let u = 0; u < l.length; u += 1)
    c = jo(c, l[u]);
  return {
    c() {
      r = Ve(
        /*htmlTag*/
        t[9]
      );
      for (let u = 0; u < s.length; u += 1)
        s[u].c();
      ti(
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
        i = ir(
          /*renderList*/
          u[13]
        );
        let _;
        for (_ = 0; _ < i.length; _ += 1) {
          const h = nc(u, i, _);
          s[_] ? (s[_].p(h, f), W(s[_], 1)) : (s[_] = sc(h), s[_].c(), W(s[_], 1), s[_].m(r, null));
        }
        for (_r(), _ = i.length; _ < s.length; _ += 1)
          a(_);
        pr();
      }
      ti(
        /*htmlTag*/
        u[9]
      )(r, c = zo(l, [
        (!o || f[0] & /*innerMods*/
        524288 && e !== (e = mt("text__inner", co, {
          .../*innerMods*/
          u[19],
          "cloud-bg": !0
        }))) && { class: e },
        (!o || f[0] & /*style, cloudPadding, wholeTextCloudBgId, wholeTextCloudBgOpacity*/
        442368 && n !== (n = er({
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
      s = s.filter(kd);
      for (let f = 0; f < s.length; f += 1)
        $(s[f]);
      o = !1;
    },
    d(u) {
      u && J(r), nn(s, u);
    }
  };
}
function rg(t) {
  let r, e;
  return r = new ga({
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function ng(t) {
  let r, e, n = ir(
    /*renderList*/
    t[13]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = ac(rc(t, n, s));
  const i = (s) => $(o[s], 1, 1, () => {
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
      q(s, r, a), e = !0;
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
          const c = rc(s, n, l);
          o[l] ? (o[l].p(c, a), W(o[l], 1)) : (o[l] = ac(c), o[l].c(), W(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (_r(), l = n.length; l < o.length; l += 1)
          i(l);
        pr();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          W(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(kd);
      for (let a = 0; a < o.length; a += 1)
        $(o[a]);
      e = !1;
    },
    d(s) {
      s && J(r), nn(o, s);
    }
  };
}
function og(t) {
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
      r = Ve("span"), e = Ve("span"), n = Ve("img"), Jo(n, p), g(e, "class", c = mt("text__image-wrapper", co, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), g(e, "style", u = er({
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
      q(k, r, w), ht(r, e), ht(e, n), _ || (h = We(
        n,
        "error",
        /*onImgError*/
        t[39]
      ), _ = !0);
    },
    p(k, w) {
      Jo(n, p = zo(m, [
        { class: o },
        w[0] & /*renderList*/
        8192 && !Kn(n.src, i = /*item*/
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
      10240 && c !== (c = mt("text__image-wrapper", co, {
        align: (
          /*item*/
          k[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          k[11] !== null
        )
      })) && g(e, "class", c), w[0] & /*renderList, customLineHeight*/
      10240 && u !== (u = er({
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
      })) && g(e, "style", u), w[0] & /*renderList*/
      8192 && f !== (f = er(
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
function ig(t) {
  let r, e, n = (
    /*item*/
    t[71].text && lc(t)
  );
  return {
    c() {
      n && n.c(), r = xt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && W(n, 1)) : (n = lc(o), n.c(), W(n, 1), n.m(r.parentNode, r)) : n && (_r(), $(n, 1, 1, () => {
        n = null;
      }), pr());
    },
    i(o) {
      e || (W(n), e = !0);
    },
    o(o) {
      $(n), e = !1;
    },
    d(o) {
      o && J(r), n && n.d(o);
    }
  };
}
function lc(t) {
  let r, e;
  return r = new ga({
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function ac(t) {
  let r, e, n, o;
  const i = [ig, og], s = [];
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
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (_r(), $(s[u], 1, 1, () => {
        s[u] = null;
      }), pr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), W(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (W(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Sl(t) {
  let r, e, n, o, i, s, a, l, c;
  const u = [ng, rg], f = [];
  function _(p, k) {
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
      q(p, r, k), f[e].m(r, null), a = !0, l || (c = il(s = $p.call(null, r, {
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
      e = _(p), e === w ? f[e].p(p, k) : (_r(), $(f[w], 1, 1, () => {
        f[w] = null;
      }), pr(), n = f[e], n ? n.p(p, k) : (n = f[e] = u[e](p), n.c()), W(n, 1), n.m(r, null)), ti(
        /*htmlTag*/
        p[9]
      )(r, m = zo(h, [
        (!a || k[0] & /*innerMods*/
        524288 && o !== (o = mt(
          "text__inner",
          co,
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
      a || (W(n), a = !0);
    },
    o(p) {
      $(n), a = !1;
    },
    d(p) {
      p && J(r), f[e].d(), l = !1, c();
    }
  };
}
function sg(t) {
  let r, e = (
    /*htmlTag*/
    t[9]
  ), n, o, i = (
    /*hasCloudBg*/
    t[6] && oc(t)
  ), s = (
    /*htmlTag*/
    t[9] && Sl(t)
  );
  return {
    c() {
      i && i.c(), r = cr(), s && s.c(), n = xt();
    },
    m(a, l) {
      i && i.m(a, l), q(a, r, l), s && s.m(a, l), q(a, n, l), o = !0;
    },
    p(a, l) {
      /*hasCloudBg*/
      a[6] ? i ? (i.p(a, l), l[0] & /*hasCloudBg*/
      64 && W(i, 1)) : (i = oc(a), i.c(), W(i, 1), i.m(r.parentNode, r)) : i && (_r(), $(i, 1, 1, () => {
        i = null;
      }), pr()), /*htmlTag*/
      a[9] ? e ? Vr(
        e,
        /*htmlTag*/
        a[9]
      ) ? (s.d(1), s = Sl(a), e = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : s.p(a, l) : (s = Sl(a), e = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : e && (s.d(1), s = null, e = /*htmlTag*/
      a[9]);
    },
    i(a) {
      o || (W(i), o = !0);
    },
    o(a) {
      $(i), $(s, a), o = !1;
    },
    d(a) {
      a && (J(r), J(n)), i && i.d(a), s && s.d(a);
    }
  };
}
function lg(t) {
  let r, e;
  return r = new yn({
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
      $$slots: { default: [sg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function ag(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, k, w, z, H, L, Q, ce, T, X, le, C, M, N, U, se, fe = A, Ce = () => (fe(), fe = V(z, (Ct) => e(52, se = Ct)), z), Ee, de = A, Ie = () => (de(), de = V(i, (Ct) => e(53, Ee = Ct)), i), ee, De = A, qe = () => (De(), De = V(o, (Ct) => e(54, ee = Ct)), o), Ke, ke = A, rt = () => (ke(), ke = V(k, (Ct) => e(55, Ke = Ct)), k), ye, Ae = A, _e = () => (Ae(), Ae = V(p, (Ct) => e(56, ye = Ct)), p), x, ue = A, ie = () => (ue(), ue = V(m, (Ct) => e(57, x = Ct)), m), Fe, xe = A, Xe = () => (xe(), xe = V(h, (Ct) => e(58, Fe = Ct)), h), ne, Ye = A, Le = () => (Ye(), Ye = V(_, (Ct) => e(59, ne = Ct)), _), st, lt = A, at = () => (lt(), lt = V(c, (Ct) => e(60, st = Ct)), c), wt, nt = A, zt = () => (nt(), nt = V(f, (Ct) => e(61, wt = Ct)), f), ut, pe = A, ge = () => (pe(), pe = V(u, (Ct) => e(62, ut = Ct)), u), _t, je = A, I = () => (je(), je = V(w, (Ct) => e(10, _t = Ct)), w), vt, ft = A, St = () => (ft(), ft = V(l, (Ct) => e(63, vt = Ct)), l), Tt, et = A, K = () => (et(), et = V(a, (Ct) => e(64, Tt = Ct)), a), At, Mt = A, Zt = () => (Mt(), Mt = V(s, (Ct) => e(65, At = Ct)), s), Jt, he = A, Be = () => (he(), he = V(n, (Ct) => e(66, Jt = Ct)), n), pt, be = A, Qe = () => (be(), be = V(H, (Ct) => e(67, pt = Ct)), H);
  t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => De()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => lt()), t.$$.on_destroy.push(() => nt()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => je()), t.$$.on_destroy.push(() => ft()), t.$$.on_destroy.push(() => et()), t.$$.on_destroy.push(() => Mt()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => be());
  let { componentContext: Oe } = r, { layoutParams: tr = void 0 } = r;
  const Ne = Tr(Xr), yt = Ne.direction;
  bn(t, yt, (Ct) => e(51, U = Ct));
  let Ft = "", It = 12, ur = 1.25, Me = null, kt = "", or, $t = "", Kt = !1, gr = "start", vr = "start", Nt = "", yr = "", G = "", dt = !1, Gt = [], jt = !1, wr = "", Ar, hr = [], Fr = {}, Wr = "span";
  function rr(Ct, Xt, Yt, fr) {
    var re, d;
    let ct = [];
    if (hr.forEach(([j, Te]) => {
      Ne.removeSvgFilter(j, Te);
    }), hr = [], !(Array.isArray(Xt) && Xt.length || Array.isArray(Yt) && Yt.length && Ct)) {
      e(13, Gt = []);
      return;
    }
    const te = Ct;
    let bt = Xt || [{ start: 0, end: te.length }], nr = Yt || [], mr = 0, sr = [], v = [];
    bt.forEach((j) => {
      const Te = j.start || 0, Re = j.end || Ct.length, Pt = {
        top_offset: 0,
        ...j,
        start: Te,
        end: Re
      };
      v.push({
        index: Te,
        range: Pt,
        type: "rangeStart",
        isStart: !0
      }), v.push({
        index: Re,
        range: Pt,
        type: "rangeEnd"
      });
    }), nr.forEach((j, Te) => {
      j.start !== void 0 && j.url && j.start <= te.length && v.push({
        index: j.indexing_direction === "reversed" ? Ct.length - j.start : j.start,
        image: j,
        type: "image",
        arrayIndex: Te
      });
    }), v.sort((j, Te) => j.index === Te.index ? j.type !== Te.type ? j.type === "image" ? -1 : Te.type === "image" ? 1 : j.type < Te.type ? -1 : 1 : j.type === "image" && Te.type === "image" ? Te.arrayIndex - j.arrayIndex : j.type === "rangeStart" && Te.type === "rangeStart" ? j.range.end - Te.range.end : j.type === "rangeStart" ? 1 : Te.type === "rangeStart" ? -1 : j.type !== "image" && Te.type !== "image" ? j.range.start - Te.range.start : 0 : j.index - Te.index), v.forEach((j) => {
      var Pt, O, Dt, ot;
      let Te = j.type === "image" ? null : j.range, Re = j.index;
      if (Re > mr) {
        let Ge = Object.assign({ ...fr }, ...sr);
        sr.length && sr[sr.length - 1].start !== mr && (Ge.top_offset = 0), ct.push({
          text: te.substring(mr, Re),
          textStyles: Ge,
          actions: j.type === "rangeEnd" && ((O = (Pt = j.range) == null ? void 0 : Pt.actions) == null ? void 0 : O.filter(qs)) || void 0
        });
      }
      if (j.type === "rangeStart" && Te)
        sr.push(Te);
      else if (j.type === "rangeEnd")
        sr = sr.filter((Ge) => Ge !== j.range);
      else if (j.type === "image") {
        let Ge = Object.assign({ ...fr }, ...sr), Je = ae((j.image.width && j.image.width.value || 20) * 10 / (Ge.font_size || 12)), Wt = ae((j.image.height && j.image.height.value || 20) * 10 / (Ge.font_size || 12));
        const br = {
          "font-size": ae((Number(Ge.font_size) || 12) * 10 / It)
        };
        let qr = "";
        const sn = j.image.tint_color, Zr = wd(j.image.tint_mode, "source_in");
        if (sn) {
          const gn = dr(j.image.tint_color);
          qr = Ne.addSvgFilter(gn, Zr), hr.push([gn, Zr]);
        }
        const ve = {}, pn = (Dt = j.image.accessibility) == null ? void 0 : Dt.type, Qr = ((ot = j.image.accessibility) == null ? void 0 : ot.description) || "";
        (pn === "button" || pn === "image") && Qr ? ve.role = pn : (!Qr || pn === "none") && (ve["aria-hidden"] = "true"), ct.push({
          image: {
            url: j.image.url,
            width: Je,
            height: Wt,
            wrapperStyle: br,
            svgFilterId: qr,
            preloadRequired: !!j.image.preload_required,
            verticalAlign: j.image.alignment_vertical,
            description: Qr,
            a11yAttrs: ve
          }
        });
      }
      mr = Re;
    }), mr < te.length && ct.push({
      text: te.substring(mr),
      textStyles: { ...fr }
    }), e(13, Gt = ct), e(6, jt = ct.some((j) => {
      var Te;
      return "text" in j && ((Te = j.textStyles.background) == null ? void 0 : Te.type) === "cloud";
    })), e(14, wr = jt && ct.length === 1 ? Ne.genId("text-whole-bg") : ""), e(15, Ar = wr ? ((d = (re = fo(ct[0].textStyles.background.color)) == null ? void 0 : re.a) != null ? d : 255) / 255 : void 0);
  }
  function tt(Ct) {
    Ct.target && "classList" in Ct.target && Ct.target.classList.add(co.text__image_hidden);
  }
  return on(() => {
    hr.forEach(([Ct, Xt]) => {
      Ne.removeSvgFilter(Ct, Xt);
    });
  }), t.$$set = (Ct) => {
    "componentContext" in Ct && e(0, Oe = Ct.componentContext), "layoutParams" in Ct && e(1, tr = Ct.layoutParams);
  }, t.$$.update = () => {
    var Ct, Xt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && Oe.json && (e(3, It = 12), e(40, ur = 1.25), e(11, Me = null), e(41, kt = ""), e(12, or = void 0), e(4, $t = ""), e(42, Kt = !1), e(43, gr = "start"), e(44, vr = "start"), e(45, Nt = ""), e(47, G = ""), e(5, dt = !1)), t.$$.dirty[0] & /*componentContext*/
    1 && Be(e(37, n = Oe.getDerivedFromVars(Oe.json.text))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(36, o = Oe.getDerivedFromVars(Oe.json.ranges, void 0, !0, 3))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(35, i = Oe.getDerivedFromVars(Oe.json.images))), t.$$.dirty[0] & /*componentContext*/
    1 && Zt(e(34, s = Oe.getDerivedFromVars(
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
    1 && K(e(33, a = Oe.getDerivedFromVars(Oe.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && St(e(32, l = Oe.getDerivedFromVars(Oe.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && at(e(31, c = Oe.getDerivedFromVars(Oe.json.max_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(30, u = Oe.getDerivedFromVars(Oe.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && zt(e(29, f = Oe.getDerivedFromVars(Oe.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(28, _ = Oe.getDerivedFromVars(Oe.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(27, h = Oe.getDerivedFromVars(Oe.json.focused_text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(26, m = Oe.getDerivedFromVars(Oe.json.truncate))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(25, p = Oe.getDerivedFromVars(Oe.json.text_gradient))), t.$$.dirty[0] & /*componentContext*/
    1 && rt(e(24, k = Oe.getDerivedFromVars(Oe.json.selectable))), t.$$.dirty[0] & /*componentContext*/
    1 && I(e(23, w = Oe.getDerivedFromVars(Oe.json.auto_ellipsize))), t.$$.dirty[0] & /*componentContext*/
    1 && Ce(e(22, z = Oe.getDerivedFromVars(Oe.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Qe(e(21, H = Oe.getDerivedFromVars(Oe.json.heading_type))), t.$$.dirty[2] & /*$jsonHeadingType*/
    32 && e(9, L = (() => {
      const Yt = pt;
      if (Yt && typeof Yt == "string") {
        const fr = Yt.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(fr))
          return fr;
      }
      return "span";
    })()), t.$$.dirty[0] & /*htmlTag*/
    512 && e(16, Wr = L !== "span" ? "div" : "span"), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonText*/
    16 && (typeof Oe.json.text == "string" ? e(2, Ft = xp(Jt)) : (e(2, Ft = ""), Oe.logError(Y(new Error("Incorrect text value type"))))), t.$$.dirty[1] & /*$jsonTextGradient, $direction*/
    34603008) {
      let Yt = "";
      if (ye) {
        const fr = al([ye], U);
        fr.image && (Yt = fr.image);
      }
      e(47, G = Yt);
    }
    if (t.$$.dirty[1] & /*gradient*/
    65536 | t.$$.dirty[2] & /*$jsonRootTextStyles*/
    8 && e(7, Fr = G ? { ...At, text_color: "" } : At), t.$$.dirty[0] & /*fontSize, componentContext*/
    9 | t.$$.dirty[2] & /*$jsonTextSize*/
    4) {
      e(3, It = Hn(Tt, It));
      const Yt = Oe.json.responsive;
      if (Yt && typeof Yt == "object" && typeof window < "u") {
        const fr = window.matchMedia("(max-width: 767px)").matches, ct = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
        fr && ((Ct = Yt.mobile) != null && Ct.font_size) ? e(3, It = Yt.mobile.font_size) : ct && ((Xt = Yt.tablet) != null && Xt.font_size) && e(3, It = Yt.tablet.font_size);
      }
    }
    if (t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*lineHeight*/
    512 | t.$$.dirty[2] & /*$jsonLineHeight*/
    2) {
      const Yt = vt;
      Wn(Yt) ? (e(40, ur = Number(Yt) / It), e(11, Me = ur)) : e(11, Me = null);
    }
    if (t.$$.dirty[1] & /*$jsonMaxLines*/
    536870912 && e(8, Q = st === 1), t.$$.dirty[0] & /*$jsonAutoEllipsize*/
    1024 | t.$$.dirty[1] & /*$jsonMaxLines, lineHeight*/
    536871424) {
      let Yt = "", fr, ct = "", te = !1;
      if (st && st > 1) {
        const bt = Number(st);
        Yt = bt * ur + "em", fr = bt, ct = bt, te = !0;
      } else _t && st !== 1 && (te = !0);
      e(41, kt = Yt), e(12, or = fr), e(4, $t = ct), e(42, Kt = te);
    }
    if (t.$$.dirty[1] & /*$direction, halign*/
    1052672 | t.$$.dirty[2] & /*$jsonHAlign*/
    1 && e(43, gr = fl(ut, U, gr)), t.$$.dirty[1] & /*$jsonVAlign, valign*/
    1073750016 && e(44, vr = dl(wt, vr)), t.$$.dirty[0] & /*text*/
    4 | t.$$.dirty[1] & /*$jsonRanges*/
    8388608 && e(50, ce = !ee || Ft && ee.length === 1 && ee[0] && (!ee[0].start || ee[0].start === 0) && (!ee[0].end || typeof ee[0].end == "number" && ee[0].end >= Ft.length)), t.$$.dirty[1] & /*gradient, $jsonTextColor, $jsonRanges*/
    276889600 && e(49, T = !!(!G && ne) != !!(ee && ee[0] && ee[0].text_color)), t.$$.dirty[1] & /*$jsonMaxLines, isAllTextSameColor, isOnlyOneColorDefined, $jsonTextColor, $jsonRanges, rootTextColor*/
    814497792) {
      let Yt = "";
      st && ce && T && (Yt = dr(ne || ee && ee[0] && ee[0].text_color, 1, Nt)), e(45, Nt = Yt);
    }
    t.$$.dirty[1] & /*$jsonFocusTextColor, focusTextColor*/
    134250496 && e(46, yr = dr(Fe, 1, yr)), t.$$.dirty[1] & /*$jsonTruncate*/
    67108864 && e(48, X = x === "none" ? "none" : ""), t.$$.dirty[0] & /*selectable*/
    32 | t.$$.dirty[1] & /*$jsonSelectable*/
    16777216 && e(5, dt = un(Ke, dt)), t.$$.dirty[0] & /*text, rootTextStyles*/
    132 | t.$$.dirty[1] & /*$jsonRanges, $jsonImages*/
    12582912 && rr(Ft, ee, Ee, Fr), t.$$.dirty[0] & /*singleline*/
    256 | t.$$.dirty[1] & /*multiline, halign, valign, truncate, focusTextColor*/
    178176 && e(20, le = {
      singleline: Q,
      multiline: Kt,
      halign: gr,
      valign: vr,
      truncate: X,
      "has-focus-color": !!yr
    }), t.$$.dirty[0] & /*hasCloudBg*/
    64 | t.$$.dirty[1] & /*gradient*/
    65536 && e(19, C = {
      gradient: !!G,
      "has-cloud-bg": jt
    }), t.$$.dirty[0] & /*fontSize, lineClamp*/
    24 | t.$$.dirty[1] & /*lineHeight, maxHeight, rootTextColor, gradient, focusTextColor*/
    116224 && e(18, M = {
      "font-size": ae(It),
      "line-height": ur,
      "max-height": kt,
      "-webkit-line-clamp": $t,
      color: Nt,
      "background-image": G,
      "--divkit-text-focus-color": yr
    }), t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*$jsonPaddings, $direction*/
    3145728 && e(17, N = _o(Rl(bi(se, {}) || {}, 10 / It), U));
  }, [
    Oe,
    tr,
    Ft,
    It,
    $t,
    dt,
    jt,
    Fr,
    Q,
    L,
    _t,
    Me,
    or,
    Gt,
    wr,
    Ar,
    Wr,
    N,
    M,
    C,
    le,
    H,
    z,
    w,
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
    o,
    n,
    yt,
    tt,
    ur,
    kt,
    Kt,
    gr,
    vr,
    Nt,
    yr,
    G,
    X,
    T,
    ce,
    U,
    se,
    Ee,
    ee,
    Ke,
    ye,
    x,
    Fe,
    ne,
    st,
    wt,
    ut,
    vt,
    Tt,
    At,
    Jt,
    pt
  ];
}
class cg extends Or {
  constructor(r) {
    super(), zr(this, r, ag, lg, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const ug = "appkit-container", fg = "appkit-container_wrap", dg = "appkit-container_overflow_visible", _g = "appkit-container_orientation_vertical", pg = "appkit-container_valign_start", gg = "appkit-container_valign_center", hg = "appkit-container_valign_end", mg = "appkit-container_halign_start", bg = "appkit-container_halign_center", yg = "appkit-container_halign_end", wg = "appkit-container_orientation_horizontal", kg = "appkit-container_orientation_overlap", cc = {
  container: ug,
  container_wrap: fg,
  container_overflow_visible: dg,
  container_orientation_vertical: _g,
  container_valign_start: pg,
  container_valign_center: gg,
  container_valign_end: hg,
  "container_valign_space-between": "appkit-container_valign_space-between",
  "container_valign_space-around": "appkit-container_valign_space-around",
  "container_valign_space-evenly": "appkit-container_valign_space-evenly",
  container_halign_start: mg,
  container_halign_center: bg,
  container_halign_end: yg,
  "container_halign_space-between": "appkit-container_halign_space-between",
  "container_halign_space-around": "appkit-container_halign_space-around",
  "container_halign_space-evenly": "appkit-container_halign_space-evenly",
  container_orientation_horizontal: wg,
  container_orientation_overlap: kg,
  "container_fixed-container": "appkit-container_fixed-container",
  "container_responsive-mobile-vertical": "appkit-container_responsive-mobile-vertical",
  "container_responsive-mobile-horizontal": "appkit-container_responsive-mobile-horizontal",
  "container_responsive-mobile-has-height": "appkit-container_responsive-mobile-has-height",
  "container_responsive-tablet-vertical": "appkit-container_responsive-tablet-vertical",
  "container_responsive-tablet-horizontal": "appkit-container_responsive-tablet-horizontal",
  "container_responsive-tablet-has-height": "appkit-container_responsive-tablet-has-height"
};
function uc(t) {
  return {
    top: Number(t == null ? void 0 : t.top) || 0,
    right: Number(t == null ? void 0 : t.right) || 0,
    bottom: Number(t == null ? void 0 : t.bottom) || 0,
    left: Number(t == null ? void 0 : t.left) || 0
  };
}
function fc(t, r, e) {
  const n = ((r == null ? void 0 : r.margins.left) || 0) + ((r == null ? void 0 : r.margins.right) || 0), o = ((r == null ? void 0 : r.margins.top) || 0) + ((r == null ? void 0 : r.margins.bottom) || 0);
  r != null && r.show_at_start && (e ? t.top = r.style.height + o : t.left = r.style.width + n), r != null && r.show_at_end && (e ? t.bottom = r.style.height + o : t.right = r.style.width + n);
}
function vg(t, r, e) {
  const n = {};
  return fc(n, r, t === "vertical"), fc(n, e, t === "horizontal"), n;
}
function jg({
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
  ], i.map(ae).join(" ");
}
function Cg(t) {
  var e;
  const r = (e = t.width) == null ? void 0 : e.type;
  return r !== "wrap_content" && r !== "fixed";
}
function Eg(t) {
  var e;
  return ((e = t.height) == null ? void 0 : e.type) === "match_parent";
}
function Ag(t, r) {
  return t === "vertical" || t === "horizontal" || t === "overlap" ? t : r;
}
function Sg(t) {
  var r, e, n;
  return {
    width: tn((r = t.item_width) == null ? void 0 : r.value, 10),
    height: tn((e = t.item_height) == null ? void 0 : e.value, 10),
    radius: tn((n = t.corner_radius) == null ? void 0 : n.value, 5)
  };
}
function Vg(t) {
  var e;
  const r = tn((e = t.radius) == null ? void 0 : e.value, 10) * 2;
  return {
    width: r,
    height: r,
    radius: r
  };
}
function Fg(t, r, e) {
  var l;
  const n = {}, o = r.stroke || (e == null ? void 0 : e.stroke), i = o != null && o.color ? dr(o.color) : "", s = o != null && o.width ? Number((l = o.width) != null ? l : 1) : "";
  n.width = t.width, n.height = t.height, n.borderRadius = t.radius;
  const a = r.background_color || (e == null ? void 0 : e.color);
  return n.background = dr(a), i && s && (n.boxShadow = `inset 0 0 0 ${ae(s)} ${i}`), n;
}
function ao(t, r, e) {
  if (!t || !t.shape || !t.shape.type || !r.includes(t.shape.type) || t.type !== "shape_drawable")
    return e;
  let n;
  if (t.shape.type === "rounded_rectangle")
    n = Sg(t.shape);
  else if (t.shape.type === "circle")
    n = Vg(t.shape);
  else
    return e;
  return Fg(n, t.shape, {
    color: t.color,
    stroke: t.stroke
  });
}
let es;
function dc() {
  if (typeof document > "u" && (es = !0), es !== void 0)
    return es;
  const t = document.createElement("div");
  return t.style.position = "absolute", t.style.display = "flex", t.style.flexDirection = "column", t.style.gap = "1px", t.appendChild(document.createElement("div")), t.appendChild(document.createElement("div")), document.body.appendChild(t), es = t.scrollHeight === 1, document.body.removeChild(t), es;
}
function Ig(t, r) {
  return t === "top" || t === "center" || t === "bottom" || t === "baseline" || t === "space-between" || t === "space-around" || t === "space-evenly" ? t === "top" ? "start" : t === "bottom" ? "end" : t : r;
}
function Dg(t, r, e) {
  return t === "left" || t === "center" || t === "right" || t === "space-between" || t === "space-around" || t === "space-evenly" || t === "start" || t === "end" ? t === "left" ? r === "ltr" ? "start" : "end" : t === "right" ? r === "ltr" ? "end" : "start" : t : e;
}
function Tg() {
}
function $o(t) {
  return {
    subscribe(r) {
      return r(t), Tg;
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
const ls = {
  "container-separator": "appkit-container-separator",
  "container-separator__item": "appkit-container-separator__item",
  "container-separator__shape": "appkit-container-separator__shape"
};
function Mg(t, r) {
  let e = 0, n, o = !1;
  return function() {
    const i = Date.now();
    return !e || Math.abs(i - e) > r ? (e = i, n = t.apply(this, arguments)) : (o || (o = !0, setTimeout(() => {
      o = !1, n = t.apply(this, arguments);
    }, r)), n);
  };
}
function Pg(t) {
  const r = t.getBoundingClientRect(), e = getComputedStyle(t);
  return {
    top: r.top - parseFloat(e.marginTop),
    right: r.right + parseFloat(e.marginRight),
    bottom: r.bottom + parseFloat(e.marginBottom),
    left: r.left - parseFloat(e.marginLeft)
  };
}
const { window: Ng } = No;
function _c(t, r, e) {
  const n = t.slice();
  return n[16] = r[e], n;
}
function pc(t) {
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
      r = Ve("div"), e = Ve("div"), s = cr(), g(e, "class", ls["container-separator__shape"]), D(e, "width", n), D(e, "height", o), D(e, "border-radius", i), D(
        e,
        "background",
        /*item*/
        t[16].style.background
      ), D(
        e,
        "box-shadow",
        /*item*/
        t[16].style.boxShadow
      ), g(r, "class", ls["container-separator__item"]), D(r, "left", a), D(r, "top", l), D(r, "width", c), D(r, "height", u);
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
      2 && c !== (c = `${/*item*/
      f[16].width}px`) && D(r, "width", c), _ & /*separators*/
      2 && u !== (u = `${/*item*/
      f[16].height}px`) && D(r, "height", u);
    },
    d(f) {
      f && J(r);
    }
  };
}
function zg(t) {
  let r, e, n, o = ir(
    /*separators*/
    t[1]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = pc(_c(t, o, s));
  return {
    c() {
      r = Ve("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      g(r, "class", ls["container-separator"]);
    },
    m(s, a) {
      q(s, r, a);
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, null);
      t[13](r), e || (n = We(
        Ng,
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
          const c = _c(s, o, l);
          i[l] ? i[l].p(c, a) : (i[l] = pc(c), i[l].c(), i[l].m(r, null));
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
function gc(t, r, e, n, o, i) {
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
function Lg(t, r, e) {
  let n, { orientation: o } = r, { separator: i } = r, { lineSeparator: s } = r, { contentHAlign: a } = r, { contentVAlign: l } = r, { direction: c } = r;
  const u = Mg(w, Og);
  let f = [], _, h = !1, m = null, p = null;
  function k(H) {
    H.some((L) => {
      var ce;
      const Q = (ce = L.target) == null ? void 0 : ce.classList;
      return !(Q != null && Q.contains(ls["container-separator__shape"])) && !(Q != null && Q.contains(ls["container-separator"]));
    }) && u();
  }
  function w() {
    if (!n)
      return;
    const H = n.getBoundingClientRect(), L = window.getComputedStyle(n), Q = {
      top: H.top + parseFloat(L.paddingTop),
      right: H.right - parseFloat(L.paddingRight),
      bottom: H.bottom - parseFloat(L.paddingBottom),
      left: H.left + parseFloat(L.paddingLeft)
    };
    e(1, f = []);
    let ce = [...n.children].filter((le) => le !== _ && le instanceof HTMLElement && !le.classList.contains(Js.outer__border) && getComputedStyle(le).display !== "none"), T = [];
    for (; ce.length; ) {
      const le = [], C = ce.shift();
      le.push(C);
      let M = C.getBoundingClientRect(), N = M.left, U = M.right, se = M.bottom;
      for (; ce.length; ) {
        let fe = ce[0], Ce = fe.getBoundingClientRect();
        if (o === "vertical") {
          if (Ce.top < se)
            break;
        } else if (c === "ltr" ? Ce.left < U : Ce.right > N)
          break;
        U = Math.max(U, Ce.right), N = Math.min(N, Ce.left), se = Math.max(se, Ce.bottom), le.push(fe), ce.shift();
      }
      T.push(le);
    }
    const X = [];
    T.forEach((le) => {
      const C = le.map((N) => Pg(N));
      c === "rtl" && o === "horizontal" && C.reverse(), i && gc(
        f,
        i,
        C,
        o === "vertical",
        o === "vertical" ? l : a,
        Q
      );
      const M = {
        top: Math.min(...C.map((N) => N.top)),
        right: Math.max(...C.map((N) => N.right)),
        bottom: Math.max(...C.map((N) => N.bottom)),
        left: Math.min(...C.map((N) => N.left))
      };
      X.push(M);
    }), c === "rtl" && o === "vertical" && X.reverse(), s && gc(
      f,
      s,
      X,
      o === "horizontal",
      o === "vertical" ? a : l,
      Q
    ), f.forEach((le) => {
      le.top -= H.top, le.left -= H.left;
    });
  }
  ro(() => {
    e(9, h = !0);
  }), on(() => {
    e(9, h = !1);
  });
  function z(H) {
    Ir[H ? "unshift" : "push"](() => {
      _ = H, e(0, _);
    });
  }
  return t.$$set = (H) => {
    "orientation" in H && e(3, o = H.orientation), "separator" in H && e(4, i = H.separator), "lineSeparator" in H && e(5, s = H.lineSeparator), "contentHAlign" in H && e(6, a = H.contentHAlign), "contentVAlign" in H && e(7, l = H.contentVAlign), "direction" in H && e(8, c = H.direction);
  }, t.$$.update = () => {
    t.$$.dirty & /*node*/
    1 && e(12, n = (_ == null ? void 0 : _.parentElement) || null), t.$$.dirty & /*mounted, parentElement, mutationObserver, resizeObserver*/
    7680 && (h && n || m || p) && (m && (m.disconnect(), e(10, m = null)), p && (p.disconnect(), e(11, p = null)), h && n && (typeof MutationObserver < "u" && (e(10, m = new MutationObserver(k)), m.observe(n, {
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
class Rg extends Or {
  constructor(r) {
    super(), zr(this, r, Lg, zg, Vr, {
      orientation: 3,
      separator: 4,
      lineSeparator: 5,
      contentHAlign: 6,
      contentVAlign: 7,
      direction: 8
    });
  }
}
const { Boolean: Bg } = No;
function hc(t, r, e) {
  const n = t.slice();
  return n[63] = r[e], n;
}
function mc(t) {
  let r, e;
  return r = new Qn({
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function bc(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Hg(t) {
  let r, e, n, o = ir(
    /*items*/
    t[9]
  ), i = [];
  for (let l = 0; l < o.length; l += 1)
    i[l] = mc(hc(t, o, l));
  const s = (l) => $(i[l], 1, 1, () => {
    i[l] = null;
  });
  let a = (
    /*separator*/
    (t[5] || /*lineSeparator*/
    t[6]) && bc(t)
  );
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      r = cr(), a && a.c(), e = xt();
    },
    m(l, c) {
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(l, c);
      q(l, r, c), a && a.m(l, c), q(l, e, c), n = !0;
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
          const f = hc(l, o, u);
          i[u] ? (i[u].p(f, c), W(i[u], 1)) : (i[u] = mc(f), i[u].c(), W(i[u], 1), i[u].m(r.parentNode, r));
        }
        for (_r(), u = o.length; u < i.length; u += 1)
          s(u);
        pr();
      }
      /*separator*/
      l[5] || /*lineSeparator*/
      l[6] ? a ? (a.p(l, c), c[0] & /*separator, lineSeparator*/
      96 && W(a, 1)) : (a = bc(l), a.c(), W(a, 1), a.m(e.parentNode, e)) : a && (_r(), $(a, 1, 1, () => {
        a = null;
      }), pr());
    },
    i(l) {
      if (!n) {
        for (let c = 0; c < o.length; c += 1)
          W(i[c]);
        W(a), n = !0;
      }
    },
    o(l) {
      i = i.filter(Bg);
      for (let c = 0; c < i.length; c += 1)
        $(i[c]);
      $(a), n = !1;
    },
    d(l) {
      l && (J(r), J(e)), nn(i, l), a && a.d(l);
    }
  };
}
function Wg(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
        "container",
        cc,
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
      $$slots: { default: [Hg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = mt(
        "container",
        cc,
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
const Ug = {
  start: "start",
  center: "center",
  end: "end",
  // 'space-*' values doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, Gg = {
  start: "start",
  center: "center",
  end: "end",
  baseline: "baseline",
  // 'space-*' doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, yc = ["rounded_rectangle", "circle"];
function Jg(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, k, w, z, H, L, Q, ce, T, X, le, C, M, N = A, U = () => (N(), N = V(w, (dt) => e(45, M = dt)), w), se, fe = A, Ce = () => (fe(), fe = V(H, (dt) => e(46, se = dt)), H), Ee, de = A, Ie = () => (de(), de = V(z, (dt) => e(47, Ee = dt)), z), ee, De = A, qe = () => (De(), De = V(k, (dt) => e(48, ee = dt)), k), Ke, ke = A, rt = () => (ke(), ke = V(p, (dt) => e(49, Ke = dt)), p), ye, Ae = A, _e = () => (Ae(), Ae = V(m, (dt) => e(50, ye = dt)), m), x, ue = A, ie = () => (ue(), ue = V(f, (dt) => e(51, x = dt)), f), Fe, xe = A, Xe = () => (xe(), xe = V(u, (dt) => e(52, Fe = dt)), u), ne, Ye = A, Le = () => (Ye(), Ye = V(h, (dt) => e(53, ne = dt)), h), st, lt = A, at = () => (lt(), lt = V(_, (dt) => e(54, st = dt)), _), wt, nt, zt = A, ut = () => (zt(), zt = V(c, (dt) => e(55, nt = dt)), c), pe, ge = A, _t = () => (ge(), ge = V(l, (dt) => e(56, pe = dt)), l), je, I = A, vt = () => (I(), I = V(Qe, (dt) => e(57, je = dt)), Qe), ft, St = A, Tt = () => (St(), St = V(a, (dt) => e(58, ft = dt)), a), et, K = A, At = () => (K(), K = V(s, (dt) => e(59, et = dt)), s), Mt, Zt = A, Jt = () => (Zt(), Zt = V(i, (dt) => e(60, Mt = dt)), i);
  t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => De()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => lt()), t.$$.on_destroy.push(() => zt()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => St()), t.$$.on_destroy.push(() => K()), t.$$.on_destroy.push(() => Zt());
  let { componentContext: he } = r, { layoutParams: Be = void 0 } = r;
  const pt = Tr(Xr), be = pt.direction;
  bn(t, be, (dt) => e(10, wt = dt));
  let Qe, Oe = "vertical", tr = "start", Ne = "start", yt = null, Ft = null, It, ur = {}, Me = 0, kt = 0, or = !1;
  function $t() {
    e(2, Oe = "vertical"), e(3, tr = "start"), e(4, Ne = "start"), e(7, It = void 0), e(32, Me = 0), e(33, kt = 0), e(34, or = !1);
  }
  function Kt(dt) {
    e(0, he = e(35, vr = {
      ...he,
      json: {
        ...he.json,
        items: dt.filter(Oo)
      }
    }));
  }
  let gr = [], vr, Nt = {}, yr, G;
  return on(() => {
    gr.forEach((dt) => {
      dt.destroy();
    });
  }), t.$$set = (dt) => {
    "componentContext" in dt && e(0, he = dt.componentContext), "layoutParams" in dt && e(1, Be = dt.layoutParams);
  }, t.$$.update = () => {
    var dt, Gt, jt, wr, Ar, hr, Fr, Wr, rr, tt, Ct;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(44, n = he.origJson), t.$$.dirty[1] & /*origJson*/
    8192 && n && $t(), t.$$.dirty[0] & /*componentContext*/
    1 && e(43, o = he.json.items), t.$$.dirty[0] & /*componentContext*/
    1 && Jt(e(29, i = typeof ((dt = he.json.item_builder) == null ? void 0 : dt.data) == "string" ? he.getDerivedFromVars((Gt = he.json.item_builder) == null ? void 0 : Gt.data, void 0, !0) : (jt = he.json.item_builder) != null && jt.data ? $o(he.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && At(e(28, s = he.getDerivedFromVars(he.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && Tt(e(27, a = he.getDerivedFromVars(he.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(26, l = he.getDerivedFromVars(he.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(25, c = he.getDerivedFromVars(he.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(24, u = he.getDerivedFromVars(he.json.separator))), t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(23, f = he.getDerivedFromVars(he.json.line_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && at(e(22, _ = he.getDerivedFromVars(he.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(21, h = he.getDerivedFromVars(he.json.line_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(20, m = he.getDerivedFromVars(he.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && rt(e(19, p = he.getDerivedFromVars(he.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(18, k = he.getDerivedFromVars(he.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && U(e(17, w = he.getDerivedFromVars(he.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(16, z = he.getDerivedFromVars(he.json.max_width))), t.$$.dirty[0] & /*componentContext*/
    1 && Ce(e(15, H = he.getDerivedFromVars(he.json.responsive))), t.$$.dirty[0] & /*componentContext, items*/
    513 | t.$$.dirty[1] & /*$jsonItemBuilderData, jsonItems, prevContext*/
    536875024) {
      let Xt = [];
      if (he.json.item_builder && Array.isArray(Mt) && Array.isArray(he.json.item_builder.prototypes)) {
        const te = he.json.item_builder;
        Xt = _l(Mt, pt, he, te);
      } else
        Xt = (Array.isArray(o) && o || []).map((te, bt) => ({
          div: te,
          key: te.id || { index: bt, data: te }
        }));
      const Yt = new Set(gr), fr = /* @__PURE__ */ new Map();
      let ct = !1;
      vr === he && gr.forEach((te) => {
        te.key && (typeof te.key == "string" && fr.has(te.key) ? ct || (ct = !0, he.logError(Y(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: te.key } }))) : fr.set(
          typeof te.key == "string" ? te.key : te.key.index,
          te
        ));
      }), e(9, gr = Xt.map((te, bt) => {
        let nr = !ct && fr.get(te.id), mr = fr.get(bt);
        return !nr && !te.id && typeof te.key == "object" && typeof (mr == null ? void 0 : mr.key) == "object" && Gi(mr.key.data, te.key.data) && (nr = mr), nr ? (Yt.delete(nr), nr) : he.produceChildContext(te.div, {
          path: bt,
          variables: te.vars,
          id: te.id,
          key: te.key
        });
      }));
      for (const te of Yt)
        te.destroy();
      e(35, vr = he);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    513) {
      let Xt = [];
      gr.forEach((Yt) => {
        Xt.push(he.getDerivedFromVars({
          width: Yt.json.width,
          height: Yt.json.height
        }));
      }), vt(e(11, Qe = Ui(Xt, (Yt) => [...Yt])));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonOrientation*/
    268435456 && e(2, Oe = Ag(et, Oe)), t.$$.dirty[1] & /*$jsonLayoutMode*/
    134217728 && e(38, L = ft === "wrap"), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(42, Q = Oe !== "horizontal" && !L), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(41, ce = Oe !== "vertical" && !L), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(40, T = Oe === "overlap" && !je.every(Cg)), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(39, X = Oe === "overlap" && !je.every(Eg)), t.$$.dirty[0] & /*contentVAlign*/
    8 | t.$$.dirty[1] & /*$jsonContentVAlign*/
    33554432 && e(3, tr = Ig(pe, tr)), t.$$.dirty[0] & /*$direction, contentHAlign*/
    1040 | t.$$.dirty[1] & /*$jsonContentHAlign*/
    16777216 && e(4, Ne = Dg(nt, wt, Ne)), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    8388610 && e(32, Me = tn(st, Me)), t.$$.dirty[1] & /*$jsonLineSpacing, lineSpacing*/
    4194308 && e(33, kt = tn(ne, kt)), t.$$.dirty[0] & /*orientation, separator, componentContext*/
    37 | t.$$.dirty[1] & /*$jsonSeparator, itemSpacing*/
    2097154)
      if (Fe != null && Fe.style && Oe !== "overlap" && dc()) {
        const Xt = ao(Fe.style, yc, (yt == null ? void 0 : yt.style) || null);
        Xt ? (e(5, yt = {
          show_at_start: !!((wr = Fe.show_at_start) != null && wr),
          show_at_end: !!((Ar = Fe.show_at_end) != null && Ar),
          show_between: !!((hr = Fe.show_between) == null || hr),
          style: Xt,
          margins: uc(Fe.margins)
        }), yt.show_between && Me && he.logError(Y(new Error("item_spacing will be ignored due to the 'separator' property."), { level: "warn" }))) : e(5, yt = null);
      } else
        e(5, yt = null);
    if (t.$$.dirty[0] & /*orientation, lineSeparator, componentContext*/
    69 | t.$$.dirty[1] & /*$jsonLineSeparator, lineSpacing*/
    1048580)
      if (x != null && x.style && Oe !== "overlap" && dc()) {
        const Xt = ao(x.style, yc, (Ft == null ? void 0 : Ft.style) || null);
        Xt ? (e(6, Ft = {
          show_at_start: !!((Fr = x.show_at_start) != null && Fr),
          show_at_end: !!((Wr = x.show_at_end) != null && Wr),
          show_between: !!((rr = x.show_between) == null || rr),
          style: Xt,
          margins: uc(x.margins)
        }), Ft.show_between && kt && he.logError(Y(new Error("line_spacing will be ignored due to the 'line_separator' property."), { level: "warn" }))) : e(6, Ft = null);
      } else
        e(6, Ft = null);
    if (t.$$.dirty[0] & /*separator, lineSeparator, orientation*/
    100 && e(14, le = yt || Ft ? vg(Oe, yt, Ft) : null), t.$$.dirty[1] & /*$jsonAspect*/
    524288) {
      const Xt = ye == null ? void 0 : ye.ratio;
      Xt && Wn(Xt) ? e(7, It = Xt) : e(7, It = void 0);
    }
    if (t.$$.dirty[0] & /*orientation, contentHAlign, contentVAlign, layoutParams, aspect, childLayoutParams*/
    414 | t.$$.dirty[1] & /*wrap, $jsonWidth, $jsonHeight, supportWidthWrapContent, supportHeightWrapContent, stretchWidth, stretchHeight*/
    397184) {
      let Xt = {};
      Oe === "overlap" && (Xt.overlapParent = !0), Oe !== "horizontal" && (Xt.parentHAlign = L ? "start" : Ug[Ne]), Oe !== "vertical" && (Xt.parentVAlign = L ? "start" : Gg[tr]);
      const Yt = (Ke == null ? void 0 : Ke.type) === "wrap_content" || (Ke == null ? void 0 : Ke.type) === "match_parent" && (Be == null ? void 0 : Be.parentHorizontalWrapContent), fr = !ee || ee.type === "wrap_content" || ee.type === "match_parent" && (Be == null ? void 0 : Be.parentVerticalWrapContent);
      !Q && Yt && (Xt.parentHorizontalWrapContent = !0), !It && !ce && fr && (Xt.parentVerticalWrapContent = !0), Yt || (Xt.parentContainerKnownWidth = !0), fr || (Xt.parentContainerKnownHeight = !0), Xt.stretchWidth = T, Xt.stretchHeight = X, Oe === "horizontal" && (Xt.parentContainerOrientation = "horizontal"), Oe === "vertical" && (Xt.parentContainerOrientation = "vertical"), L && (Xt.parentContainerWrap = !0), e(8, ur = xo(Xt, ur));
    }
    if (t.$$.dirty[1] & /*$jsonMaxWidth*/
    65536 && e(34, or = (Ee == null ? void 0 : Ee.type) === "fixed"), t.$$.dirty[0] & /*orientation, contentVAlign, contentHAlign*/
    28 | t.$$.dirty[1] & /*$jsonResponsive, wrap, $jsonClipToBounds, isFixedContainer, responsiveMobileHeight, responsiveTabletHeight*/
    49384) {
      let Xt, Yt;
      if (e(36, yr = void 0), e(37, G = void 0), se) {
        const fr = se == null ? void 0 : se.mobile, ct = se == null ? void 0 : se.tablet;
        if (fr != null && fr.orientation && (Xt = String(fr.orientation)), ct != null && ct.orientation && (Yt = String(ct.orientation)), ((tt = fr == null ? void 0 : fr.height) == null ? void 0 : tt.type) === "fixed" && fr.height.value !== void 0) {
          const te = tn(fr.height.value, 0);
          e(36, yr = te > 0 ? te : void 0);
        }
        if (((Ct = ct == null ? void 0 : ct.height) == null ? void 0 : Ct.type) === "fixed" && ct.height.value !== void 0) {
          const te = tn(ct.height.value, 0);
          e(37, G = te > 0 ? te : void 0);
        }
      }
      e(12, Nt = {
        orientation: Oe,
        valign: tr,
        halign: Ne,
        wrap: L,
        overflow: M === !1 || M === 0 ? "visible" : void 0,
        "fixed-container": or,
        "responsive-mobile-vertical": Xt === "vertical",
        "responsive-mobile-horizontal": Xt === "horizontal",
        "responsive-tablet-vertical": Yt === "vertical",
        "responsive-tablet-horizontal": Yt === "horizontal",
        "responsive-mobile-has-height": yr !== void 0,
        "responsive-tablet-has-height": G !== void 0
      });
    }
    t.$$.dirty[0] & /*separator, lineSeparator, orientation, aspect*/
    228 | t.$$.dirty[1] & /*itemSpacing, lineSpacing, responsiveMobileHeight, responsiveTabletHeight*/
    102 && e(13, C = {
      gap: yt || Ft || Me || kt ? jg({
        orientation: Oe,
        separator: yt,
        lineSeparator: Ft,
        itemSpacing: Me,
        lineSpacing: kt
      }) : void 0,
      "aspect-ratio": It,
      "--responsive-mobile-height": yr !== void 0 ? ae(yr) : void 0,
      "--responsive-tablet-height": G !== void 0 ? ae(G) : void 0
    });
  }, [
    he,
    Be,
    Oe,
    tr,
    Ne,
    yt,
    Ft,
    It,
    ur,
    gr,
    wt,
    Qe,
    Nt,
    C,
    le,
    H,
    z,
    w,
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
    be,
    Kt,
    Me,
    kt,
    or,
    vr,
    yr,
    G,
    L,
    X,
    T,
    ce,
    Q,
    o,
    n,
    M,
    se,
    Ee,
    ee,
    Ke,
    ye,
    x,
    Fe,
    ne,
    st,
    nt,
    pe,
    je,
    ft,
    et,
    Mt
  ];
}
class qg extends Or {
  constructor(r) {
    super(), zr(this, r, Jg, Wg, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Yg = "appkit-separator", Kg = "appkit-separator_orientation_horizontal", Xg = "appkit-separator_orientation_vertical", Zg = "appkit-separator__inner", Bl = {
  separator: Yg,
  separator_orientation_horizontal: Kg,
  separator_orientation_vertical: Xg,
  separator__inner: Zg
};
function ma(t, r) {
  return t === "vertical" || t === "horizontal" ? t : r;
}
function wc(t) {
  let r, e;
  return {
    c() {
      r = Ve("span"), g(r, "class", Bl.separator__inner), g(r, "style", e = er(
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
function Qg(t) {
  let r, e = (
    /*hasContent*/
    t[4] && wc(t)
  );
  return {
    c() {
      e && e.c(), r = xt();
    },
    m(n, o) {
      e && e.m(n, o), q(n, r, o);
    },
    p(n, o) {
      /*hasContent*/
      n[4] ? e ? e.p(n, o) : (e = wc(n), e.c(), e.m(r.parentNode, r)) : e && (e.d(1), e = null);
    },
    d(n) {
      n && J(r), e && e.d(n);
    }
  };
}
function xg(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
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
      $$slots: { default: [Qg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
    },
    p(n, [o]) {
      const i = {};
      o & /*mods*/
      4 && (i.cls = mt(
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function $g(t, r, e) {
  let n, o, i, s, a, l, c, u, f = A, _ = () => (f(), f = V(o, (z) => e(11, u = z)), o);
  t.$$.on_destroy.push(() => f());
  let { componentContext: h } = r, { layoutParams: m = void 0 } = r, p = "horizontal", k = "rgba(0,0,0,0.08)";
  function w() {
    e(6, p = "horizontal"), e(7, k = "rgba(0,0,0,0.08)");
  }
  return t.$$set = (z) => {
    "componentContext" in z && e(0, h = z.componentContext), "layoutParams" in z && e(1, m = z.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(10, n = h.origJson), t.$$.dirty & /*origJson*/
    1024 && n && w(), t.$$.dirty & /*componentContext*/
    1 && _(e(5, o = h.getDerivedFromVars(h.json.delimiter_style))), t.$$.dirty & /*$jsonDelimiterStyle, orientation*/
    2112 && e(6, p = ma(u == null ? void 0 : u.orientation, p)), t.$$.dirty & /*$jsonDelimiterStyle*/
    2048 && e(4, i = !(u != null && u.color && (u.color === "transparent" || u.color.length === 9 && u.color.indexOf("#00") === 0))), t.$$.dirty & /*$jsonDelimiterStyle, background*/
    2176 && e(7, k = dr(u == null ? void 0 : u.color, 1, k)), t.$$.dirty & /*orientation*/
    64 && e(9, s = p === "horizontal" ? "100%" : ae(1)), t.$$.dirty & /*orientation*/
    64 && e(8, a = p === "horizontal" ? ae(1) : "100%"), t.$$.dirty & /*background, width, height*/
    896 && e(3, l = { background: k, width: s, height: a }), t.$$.dirty & /*orientation*/
    64 && e(2, c = { orientation: p });
  }, [
    h,
    m,
    c,
    l,
    i,
    o,
    p,
    k,
    a,
    s,
    n,
    u
  ];
}
class eh extends Or {
  constructor(r) {
    super(), zr(this, r, $g, xg, Vr, { componentContext: 0, layoutParams: 1 });
  }
}
const th = "appkit-image", rh = "appkit-image__image", nh = "appkit-image_error", oh = "appkit-image_aspect", ih = "appkit-image_loaded", Hl = {
  image: th,
  "image_is-width-content": "appkit-image_is-width-content",
  "image_is-height-content": "appkit-image_is-height-content",
  image__image: rh,
  image_error: nh,
  "image_is-rtl-mirror": "appkit-image_is-rtl-mirror",
  image_aspect: oh,
  "image_aspect-content": "appkit-image_aspect-content",
  image_loaded: ih,
  "divkit-image-appearance": "appkit-divkit-image-appearance",
  "image_before-appearance": "appkit-image_before-appearance"
};
function sh(t, r, e) {
  const n = t.content_alignment_horizontal, o = t.content_alignment_vertical;
  return n && n !== "left" && n !== "center" && n !== "right" && n !== "start" && n !== "end" || o && o !== "top" && o !== "center" && o !== "bottom" ? e : md({
    content_alignment_horizontal: n,
    content_alignment_vertical: o
  }, r);
}
function vd(t) {
  return t.startsWith("data:") ? zl(t) : `data:image/jpg;base64,${zl(t)}`;
}
function lh(t, r, e) {
  let { componentContext: n } = r;
  Tr(Xr);
  function o() {
  }
  return ro(() => {
  }), sl(o), on(() => {
  }), t.$$set = (i) => {
    "componentContext" in i && e(0, n = i.componentContext);
  }, [n];
}
class Nn extends Or {
  constructor(r) {
    super(), zr(this, r, lh, null, Vr, { componentContext: 0 });
  }
}
function ah(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function ch(t) {
  let r, e;
  return r = new yn({
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
          uh,
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
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function kc(t) {
  let r, e, n, o, i, s, a, l;
  return {
    c() {
      r = Ve("img"), g(r, "class", Hl.image__image), Kn(r.src, e = /*state*/
      t[2] === ns ? Wl : (
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
    m(c, u) {
      q(c, r, u), t[70](r), a || (l = [
        We(
          r,
          "load",
          /*onLoad*/
          t[33]
        ),
        We(
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
      c[2] === ns ? Wl : (
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
      122880 && i !== (i = er({
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
      c && J(r), t[70](null), a = !1, Rr(l);
    }
  };
}
function uh(t) {
  let r = (
    /*svgFilterId*/
    t[5]
  ), e, n = kc(t);
  return {
    c() {
      n.c(), e = xt();
    },
    m(o, i) {
      n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      i[0] & /*svgFilterId*/
      32 && Vr(r, r = /*svgFilterId*/
      o[5]) ? (n.d(1), n = kc(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && J(e), n.d(o);
    }
  };
}
function fh(t) {
  let r, e, n, o;
  const i = [ch, ah], s = [];
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
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (_r(), $(s[u], 1, 1, () => {
        s[u] = null;
      }), pr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), W(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (W(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
const Wl = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", dh = "empty://", _h = "rgba(0,0,0,0.08)", fi = 0, Fl = 1, ns = 2, vc = /\.gif($|\?)/i, ph = "data:image/gif", jc = 'A Gif image was used for the "Image" component. The animation will be played on the web platform, but it does not match the behavior of other platforms.';
function gh(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, k, w, z, H, L, Q, ce, T, X, le, C, M = A, N = () => (M(), M = V(z, (ct) => e(53, C = ct)), z), U, se, fe = A, Ce = () => (fe(), fe = V(w, (ct) => e(55, se = ct)), w), Ee, de = A, Ie = () => (de(), de = V(k, (ct) => e(56, Ee = ct)), k), ee, De = A, qe = () => (De(), De = V(p, (ct) => e(57, ee = ct)), p), Ke, ke = A, rt = () => (ke(), ke = V(_, (ct) => e(58, Ke = ct)), _), ye, Ae = A, _e = () => (Ae(), Ae = V(m, (ct) => e(59, ye = ct)), m), x, ue = A, ie = () => (ue(), ue = V(h, (ct) => e(60, x = ct)), h), Fe, xe = A, Xe = () => (xe(), xe = V(f, (ct) => e(61, Fe = ct)), f), ne, Ye = A, Le = () => (Ye(), Ye = V(u, (ct) => e(62, ne = ct)), u), st, lt = A, at = () => (lt(), lt = V(c, (ct) => e(63, st = ct)), c), wt, nt = A, zt = () => (nt(), nt = V(l, (ct) => e(64, wt = ct)), l), ut, pe = A, ge = () => (pe(), pe = V(a, (ct) => e(65, ut = ct)), a), _t, je = A, I = () => (je(), je = V(s, (ct) => e(66, _t = ct)), s), vt, ft = A, St = () => (ft(), ft = V(L, (ct) => e(67, vt = ct)), L), Tt, et = A, K = () => (et(), et = V(o, (ct) => e(68, Tt = ct)), o), At, Mt = A, Zt = () => (Mt(), Mt = V(i, (ct) => e(69, At = ct)), i), Jt, he = A, Be = () => (he(), he = V(H, (ct) => e(31, Jt = ct)), H);
  t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => De()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => lt()), t.$$.on_destroy.push(() => nt()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => je()), t.$$.on_destroy.push(() => ft()), t.$$.on_destroy.push(() => et()), t.$$.on_destroy.push(() => Mt()), t.$$.on_destroy.push(() => he());
  let { componentContext: pt } = r, { layoutParams: be = void 0 } = r;
  const Qe = Tr(Xr), Oe = Qe.direction;
  bn(t, Oe, (ct) => e(54, U = ct));
  let tr, Ne = fi, yt = !1, Ft = _h, It = !1, ur, Me = "", kt = "none", or = "50% 50%", $t = !1, Kt = "center", gr, vr, Nt = "source_in", yr = "", G = "", dt = 0, Gt = 0, jt = 0, wr = "", Ar = "", hr = !1, Fr = !1, Wr = !1;
  function rr() {
    e(4, gr = void 0), e(40, $t = !1), e(38, kt = "none"), e(39, or = "50% 50%"), e(43, Nt = "source_in"), e(51, Fr = !1), e(10, Wr = !1);
  }
  function tt(ct) {
    e(2, Ne = fi);
  }
  function Ct(ct) {
    e(39, or = sh(ct, U, or));
  }
  function Xt() {
    Ne === fi && e(2, Ne = Fl);
  }
  function Yt() {
    Ne === fi && e(2, Ne = ns);
  }
  on(() => {
    Qe.removeSvgFilter(vr, Nt);
  });
  function fr(ct) {
    Ir[ct ? "unshift" : "push"](() => {
      tr = ct, e(8, tr);
    });
  }
  return t.$$set = (ct) => {
    "componentContext" in ct && e(0, pt = ct.componentContext), "layoutParams" in ct && e(1, be = ct.layoutParams);
  }, t.$$.update = () => {
    var ct;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(52, n = pt.origJson), t.$$.dirty[1] & /*origJson*/
    2097152 && n && rr(), t.$$.dirty[0] & /*componentContext*/
    1 && K(e(30, o = pt.getDerivedFromVars(pt.json.image_url))), t.$$.dirty[0] & /*componentContext*/
    1 && Zt(e(29, i = pt.getDerivedFromVars(pt.json.gif_url))), t.$$.dirty[0] & /*componentContext*/
    1 && I(e(28, s = pt.getDerivedFromVars(pt.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(27, a = pt.getDerivedFromVars(pt.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && zt(e(26, l = pt.getDerivedFromVars(pt.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && at(e(25, c = pt.getDerivedFromVars(pt.json.preview_url))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(24, u = pt.getDerivedFromVars(pt.json.placeholder_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(23, f = pt.getDerivedFromVars(pt.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && rt(e(22, _ = pt.getDerivedFromVars({
      content_alignment_horizontal: pt.json.content_alignment_horizontal,
      content_alignment_vertical: pt.json.content_alignment_vertical
    }))), t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(21, h = pt.getDerivedFromVars(pt.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(20, m = pt.getDerivedFromVars(pt.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(19, p = pt.getDerivedFromVars(pt.json.tint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(18, k = pt.getDerivedFromVars(pt.json.tint_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && Ce(e(17, w = pt.getDerivedFromVars(pt.json.appearance_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(16, z = pt.getDerivedFromVars(pt.json.filters))), t.$$.dirty[0] & /*componentContext*/
    1 && Be(e(15, H = pt.getDerivedFromVars(pt.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && St(e(14, L = pt.getDerivedFromVars(pt.json.high_priority_preview_show))), t.$$.dirty[0] & /*componentContext, imageUrl*/
    9 | t.$$.dirty[1] & /*isEmpty*/
    16 | t.$$.dirty[2] & /*$jsonGifUrl, $jsonImageUrl*/
    192) {
      const te = pt.json.type === "gif";
      let bt = te ? At : Tt;
      e(35, yt = bt === dh), yt && (bt = Wl), e(3, ur = bt), !te && ur && vc.test(ur) && pt.logError(Y(new Error(jc), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*imageUrl*/
    8 && tt(), t.$$.dirty[1] & /*highPriorityPreview*/
    1048576 | t.$$.dirty[2] & /*$jsonHighPriorityPreviewShow*/
    32 && e(51, Fr = un(vt, Fr)), t.$$.dirty[0] & /*imageUrl, componentContext*/
    9 && (ur ? e(9, It = !1) : (e(9, It = !0), pt.logError(Y(new Error(`Missing "${pt.json.type === "gif" ? "gif_url" : "image_url"}" for "${pt.json.type}"`))))), t.$$.dirty[2] & /*$jsonWidth*/
    16 && e(7, Q = (_t == null ? void 0 : _t.type) === "wrap_content"), t.$$.dirty[2] & /*$jsonHeight*/
    8 && e(6, ce = (ut == null ? void 0 : ut.type) === "wrap_content"), t.$$.dirty[0] & /*componentContext, state*/
    5 | t.$$.dirty[1] & /*isEmpty, highPriorityPreview*/
    1048592 | t.$$.dirty[2] & /*$jsonPreview, $jsonPreviewUrl*/
    6) {
      const te = pt.json.type === "gif", bt = wt, nr = st;
      (Ne === fi || Ne === ns || yt) && (bt || nr) ? (e(37, Me = `url("${nr || vd(bt || "")}")`), e(10, Wr = Fr)) : (e(37, Me = ""), e(10, Wr = !1)), !te && (nr && vc.test(nr) || bt && bt.startsWith(ph)) && pt.logError(Y(new Error(jc), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*state*/
    4 | t.$$.dirty[1] & /*isEmpty, placeholderColor*/
    48 | t.$$.dirty[2] & /*$jsonPlaceholderColor*/
    1 && (Ne === fi || Ne === ns || yt ? e(36, Ft = dr(ne, 1, Ft)) : e(36, Ft = "")), t.$$.dirty[1] & /*$jsonScale, scale*/
    1073741952 && e(38, kt = hd(Fe) || kt), t.$$.dirty[1] & /*$jsonPosition*/
    134217728 && Ct(Ke), t.$$.dirty[1] & /*$jsonA11y*/
    536870912 && e(13, T = (x == null ? void 0 : x.description) || ""), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAspect, aspectContent, $jsonPosition*/
    402653696) {
      e(41, Kt = "center");
      const te = ye == null ? void 0 : ye.ratio;
      te && Wn(te) ? (e(4, gr = te), e(40, $t = ((ct = pt.json.width) == null ? void 0 : ct.type) === "wrap_content"), $t && (Ke.content_alignment_vertical === "top" ? e(41, Kt = "top") : Ke.content_alignment_vertical === "bottom" && e(41, Kt = "bottom"))) : e(4, gr = void 0);
    }
    if (t.$$.dirty[1] & /*$jsonTintColor, $jsonTintMode, tintMode, tintColor*/
    100669440) {
      const te = ee, bt = te ? dr(te) : void 0, nr = wd(Ee, Nt);
      (bt !== vr || nr !== Nt) && (Qe.removeSvgFilter(vr, Nt), e(5, yr = bt ? Qe.addSvgFilter(bt, nr) : ""), e(42, vr = bt), e(43, Nt = nr));
    }
    if (t.$$.dirty[1] & /*$jsonAppearanceAnimation*/
    16777216 && se && se.type === "fade") {
      const te = se;
      e(44, G = bd(te.interpolator, "ease_in_out").replace(/_/g, "-")), e(47, jt = tn(te.duration, 300)), e(46, Gt = tn(te.start_delay, 0)), e(45, dt = tn(te.alpha, 0));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonFilters, $direction*/
    12582912) {
      let te = "", bt = "";
      Array.isArray(C) && C.length && (te = yd(C, pt.logError)), te && (bt = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"), e(48, wr = te), e(49, Ar = bt), e(50, hr = U === "rtl" && Array.isArray(C) && C.some((nr) => nr.type === "rtl_mirror"));
    }
    t.$$.dirty[0] & /*aspectRatio, isWidthContent, isHeightContent, state*/
    212 | t.$$.dirty[1] & /*aspectContent, aspectContentVAlign, animationInterpolator, isRTLMirror*/
    534016 && e(12, X = {
      aspect: gr !== void 0,
      "aspect-content": $t,
      "aspect-valign": Kt !== "center" ? Kt : void 0,
      "is-width-content": Q,
      "is-height-content": ce,
      loaded: Ne === Fl,
      "before-appearance": !!G && Ne === fi,
      "is-rtl-mirror": hr
    }), t.$$.dirty[0] & /*aspectRatio, state, svgFilterId*/
    52 | t.$$.dirty[1] & /*backgroundImage, placeholderColor, scale, filterClipPath, position, filter, animationInterpolator, animationFadeStart, animationDelay, animationDuration*/
    516576 && e(11, le = {
      // Image preview shows, if loading of original image is failed
      "background-image": Me,
      "background-color": Me ? void 0 : Ft,
      "background-size": ep(kt),
      "clip-path": Ar || void 0,
      "object-fit": kt,
      "object-position": or,
      "aspect-ratio": gr,
      filter: [
        Ne === Fl && yr ? `url(#${yr})` : "",
        wr
      ].filter(Boolean).join(" "),
      "--divkit-appearance-interpolator": G || void 0,
      "--divkit-appearance-fade-start": G ? dt : void 0,
      "--divkit-appearance-delay": G ? `${Gt}ms` : void 0,
      "--divkit-appearance-duration": G ? `${jt}ms` : void 0
    });
  }, [
    pt,
    be,
    Ne,
    ur,
    gr,
    yr,
    ce,
    Q,
    tr,
    It,
    Wr,
    le,
    X,
    T,
    L,
    H,
    z,
    w,
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
    o,
    Jt,
    Oe,
    Xt,
    Yt,
    yt,
    Ft,
    Me,
    kt,
    or,
    $t,
    Kt,
    vr,
    Nt,
    G,
    dt,
    Gt,
    jt,
    wr,
    Ar,
    hr,
    Fr,
    n,
    C,
    U,
    se,
    Ee,
    ee,
    Ke,
    ye,
    x,
    Fe,
    ne,
    st,
    wt,
    ut,
    _t,
    vt,
    Tt,
    At,
    fr
  ];
}
class Cc extends Or {
  constructor(r) {
    super(), zr(this, r, gh, fh, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const hh = "appkit-grid", mh = "appkit-grid_halign_start", bh = "appkit-grid_halign_center", yh = "appkit-grid_halign_end", wh = "appkit-grid_valign_start", kh = "appkit-grid_valign_center", vh = "appkit-grid_valign_end", Ec = {
  grid: hh,
  grid_halign_start: mh,
  grid_halign_center: bh,
  grid_halign_end: yh,
  grid_valign_start: wh,
  grid_valign_center: kh,
  grid_valign_end: vh
};
function Ac(t) {
  return t > 0 && t < 1;
}
function Sc(t) {
  return String(Math.ceil(t * 1e3) / 1e3);
}
function Vc(t, r, e, n) {
  if (t.some(Ac)) {
    const l = Math.max(...t.filter(Ac).map((c) => 1 / c));
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
    i && !e[l] ? a[l] = `minmax(${ae(i * t[l] / s)},${Sc(t[l])}fr)` : o || !e[l] && t[l] ? a[l] = `${Sc(t[l])}fr` : a[l] = "auto";
  return a.join(" ");
}
function Fc(t, r, e) {
  const n = t.slice();
  return n[33] = r[e], n;
}
function jh(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Ch(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
        "grid",
        Ec,
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
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = mt(
        "grid",
        Ec,
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Ic(t) {
  let r, e;
  return r = new Qn({
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Eh(t) {
  let r, e, n = ir(
    /*resultItems*/
    t[5]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Ic(Fc(t, n, s));
  const i = (s) => $(o[s], 1, 1, () => {
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
      q(s, r, a), e = !0;
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
          const c = Fc(s, n, l);
          o[l] ? (o[l].p(c, a), W(o[l], 1)) : (o[l] = Ic(c), o[l].c(), W(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (_r(), l = n.length; l < o.length; l += 1)
          i(l);
        pr();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          W(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        $(o[a]);
      e = !1;
    },
    d(s) {
      s && J(r), nn(o, s);
    }
  };
}
function Ah(t) {
  let r, e, n, o;
  const i = [Ch, jh], s = [];
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
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (_r(), $(s[u], 1, 1, () => {
        s[u] = null;
      }), pr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), W(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (W(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Sh(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _ = A, h = () => (_(), _ = V(a, (_e) => e(27, f = _e)), a), m, p = A, k = () => (p(), p = V(s, (_e) => e(28, m = _e)), s), w, z = A, H = () => (z(), z = V(U, (_e) => e(29, w = _e)), U), L, Q = A, ce = () => (Q(), Q = V(i, (_e) => e(30, L = _e)), i);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => Q());
  let { componentContext: T } = r, { layoutParams: X = void 0 } = r;
  const C = Tr(Xr).direction;
  bn(t, C, (_e) => e(26, u = _e));
  let M = !1, N = 0, U, se, fe = [], Ce = [], Ee = [], de = [], Ie = [], ee = [], De = 0, qe = "start", Ke = "start", ke = [], rt;
  function ye() {
    e(3, M = !1), e(13, N = 0), e(21, qe = "start"), e(22, Ke = "start");
  }
  function Ae(_e) {
    e(0, T = e(23, rt = {
      ...T,
      json: {
        ...T.json,
        items: _e.filter(Oo)
      }
    }));
  }
  return on(() => {
    ke.forEach((_e) => {
      _e.destroy();
    });
  }), t.$$set = (_e) => {
    "componentContext" in _e && e(0, T = _e.componentContext), "layoutParams" in _e && e(1, X = _e.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(25, n = T.origJson), t.$$.dirty[0] & /*origJson*/
    33554432 && n && ye(), t.$$.dirty[0] & /*componentContext*/
    1 && e(24, o = Array.isArray(T.json.items) && T.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(10, i = T.getDerivedFromVars(T.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && k(e(9, s = T.getDerivedFromVars(T.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && h(e(8, a = T.getDerivedFromVars(T.json.content_alignment_horizontal))), t.$$.dirty[0] & /*$jsonColumnCount, columnCount, componentContext*/
    1073750017 && (e(13, N = Hn(L, N)), N < 1 ? (e(3, M = !0), T.logError(Y(new Error("Incorrect column_count for grid")))) : e(3, M = !1)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonItems*/
    25165829) {
      const _e = new Set(ke), x = /* @__PURE__ */ new Map();
      rt === T && ke.forEach((ue) => {
        x.set(ue.json, ue);
      }), e(2, ke = o.map((ue, ie) => {
        const Fe = x.get(ue);
        return Fe ? (_e.delete(Fe), Fe) : T.produceChildContext(ue, { path: ie });
      }));
      for (const ue of _e)
        ue.destroy();
      e(23, rt = T);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    5) {
      let _e = [];
      ke.forEach((x) => {
        _e.push(T.getDerivedFromVars({
          rowSpan: x.json.row_span,
          columnSpan: x.json.column_span,
          width: x.json.width,
          height: x.json.height
        }));
      }), H(e(4, U = Ui(_e, (x) => [...x])));
    }
    if (t.$$.dirty[0] & /*items, $childStore, columnCount, columnsWeight, rowsWeight, columnsMinWidth, rowsMinHeight*/
    537124868) {
      const _e = {};
      let x = 0, ue = 0;
      e(14, fe = []), e(15, Ce = []), e(16, Ee = []), e(17, de = []), e(18, Ie = []), e(19, ee = []);
      let ie = 0;
      e(5, se = ke.map((Fe, xe) => {
        var nt, zt, ut, pe;
        const Xe = w[xe], ne = Math.min(N, Number(Xe.columnSpan) || 1), Ye = Number(Xe.rowSpan) || 1, Le = ((nt = Xe.width) == null ? void 0 : nt.type) === "match_parent" ? Number(Xe.width.weight || 1) / ne : 0, st = ((zt = Xe.height) == null ? void 0 : zt.type) === "match_parent" ? Number(Xe.height.weight || 1) / Ye : 0, lt = ((ut = Xe.width) == null ? void 0 : ut.type) === "fixed" && Xe.width.value ? Number(Xe.width.value) / ne : 0, at = ((pe = Xe.height) == null ? void 0 : pe.type) === "fixed" && Xe.height.value ? Number(Xe.height.value) / Ye : 0;
        for (; ; ) {
          let ge = !0;
          e: for (let _t = x; _t < x + ne; ++_t)
            for (let je = ue; je < ue + Ye; ++je)
              if (_e[_t + "_" + je]) {
                ge = !1;
                break e;
              }
          if (ge)
            break;
          ++x, x > N - ne && (x = 0, ++ue);
        }
        const wt = { x, y: ue, colSpan: ne, rowSpan: Ye };
        for (let ge = x; ge < x + ne; ++ge)
          for (let _t = ue; _t < ue + Ye; ++_t)
            _e[ge + "_" + _t] = !0, (!fe[ge] || fe[ge] < Le) && e(14, fe[ge] = Le, fe), (!Ce[_t] || Ce[_t] < st) && e(15, Ce[_t] = st, Ce), ne === 1 && (!Ee[ge] || Ee[ge] < lt) && e(16, Ee[ge] = lt, Ee), Ye === 1 && (!de[_t] || de[_t] < at) && e(17, de[_t] = at, de), ne === 1 && lt && e(18, Ie[ge] = lt, Ie), Ye === 1 && at && e(19, ee[ge] = at, ee);
        return ie = Math.max(ie, ue + Ye), {
          componentContext: Fe,
          layoutParams: { gridArea: wt }
        };
      })), e(20, De = Math.max(ue + 1, ie));
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    270532608 && e(21, qe = dl(m, qe)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    205520896 && e(22, Ke = fl(f, u, Ke)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    6291456 && e(7, l = {
      valign: qe,
      halign: Ke
    }), t.$$.dirty[0] & /*columnsWeight, columnsMinWidth, columnsWidth, columnCount, rowsWeight, rowsMinHeight, rowsHeight, rowCount*/
    2088960 && e(6, c = {
      "grid-template-columns": Vc(fe, Ee, Ie, N),
      "grid-template-rows": Vc(Ce, de, ee, De)
    });
  }, [
    T,
    X,
    ke,
    M,
    U,
    se,
    c,
    l,
    a,
    s,
    i,
    C,
    Ae,
    N,
    fe,
    Ce,
    Ee,
    de,
    Ie,
    ee,
    De,
    qe,
    Ke,
    rt,
    o,
    n,
    u,
    f,
    m,
    w,
    L
  ];
}
class Vh extends Or {
  constructor(r) {
    super(), zr(this, r, Sh, Ah, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Fh = "appkit-outer_width_content", Ih = "appkit-outer_height_content", Dh = "appkit-gallery", Th = "appkit-gallery__scroller", Mh = "appkit-gallery_scrollbar_none", Ph = "appkit-gallery_orientation_horizontal", Nh = "appkit-gallery_orientation_vertical", zh = "appkit-gallery__items", Oh = "appkit-gallery__arrow", Lh = "appkit-gallery__gap", uo = {
  outer_width_content: Fh,
  outer_height_content: Ih,
  gallery: Dh,
  gallery__scroller: Th,
  gallery_scrollbar_none: Mh,
  gallery_orientation_horizontal: Ph,
  gallery_orientation_vertical: Nh,
  "gallery_scroll-snap": "appkit-gallery_scroll-snap",
  "gallery__items-grid": "appkit-gallery__items-grid",
  gallery__items: zh,
  gallery__arrow: Oh,
  "gallery__arrow-icon-path": "appkit-gallery__arrow-icon-path",
  gallery__gap: Lh
}, Rh = "appkit-arrow", Bh = "appkit-arrow__icon", Hh = "appkit-arrow_left", Wh = "appkit-arrow_right", po = {
  arrow: Rh,
  arrow__icon: Bh,
  arrow_left: Hh,
  arrow_right: Wh
};
function Uh(t, r) {
  return t === "start" || t === "center" || t === "end" ? t : r;
}
function Gh(t) {
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
const { Boolean: jd, window: Jh } = No;
function Dc(t, r, e) {
  const n = t.slice();
  return n[86] = r[e], n[87] = r, n[88] = e, n;
}
function Tc(t, r, e) {
  const n = t.slice();
  return n[89] = r[e], n;
}
function Mc(t) {
  let r;
  return {
    c() {
      r = Ve("div"), g(r, "class", uo.gallery__gap), D(
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
function Pc(t) {
  let r, e, n, o = (
    /*item*/
    t[89].hasGapBefore && Mc(t)
  );
  return e = new Qn({
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
      o && o.c(), r = cr(), Ht(e.$$.fragment);
    },
    m(i, s) {
      o && o.m(i, s), q(i, r, s), Rt(e, i, s), n = !0;
    },
    p(i, s) {
      /*item*/
      i[89].hasGapBefore ? o ? o.p(i, s) : (o = Mc(i), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
      const a = {};
      s[0] & /*itemsGrid*/
      262144 && (a.componentContext = /*item*/
      i[89].componentContext), s[0] & /*childLayoutParams*/
      64 && (a.layoutParams = /*childLayoutParams*/
      i[6]), e.$set(a);
    },
    i(i) {
      n || (W(e.$$.fragment, i), n = !0);
    },
    o(i) {
      $(e.$$.fragment, i), n = !1;
    },
    d(i) {
      i && J(r), o && o.d(i), Bt(e, i);
    }
  };
}
function Nc(t) {
  let r, e, n, o, i, s, a = (
    /*rowIndex*/
    t[88]
  ), l, c = ir(
    /*itemsRow*/
    t[86]
  ), u = [];
  for (let m = 0; m < c.length; m += 1)
    u[m] = Pc(Tc(t, c, m));
  const f = (m) => $(u[m], 1, 1, () => {
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
      r = Ve("div");
      for (let m = 0; m < u.length; m += 1)
        u[m].c();
      e = cr(), n = Ve("div"), i = cr(), g(n, "class", uo.gallery__gap), g(n, "style", o = er(
        /*lastPaddingSize*/
        t[13]
      )), g(r, "class", uo.gallery__items), g(r, "style", s = er(
        /*columnStyle*/
        t[16]
      ));
    },
    m(m, p) {
      q(m, r, p);
      for (let k = 0; k < u.length; k += 1)
        u[k] && u[k].m(r, null);
      ht(r, e), ht(r, n), ht(r, i), _(), l = !0;
    },
    p(m, p) {
      if (t = m, p[0] & /*itemsGrid, childLayoutParams, orientation, gridGap*/
      266320) {
        c = ir(
          /*itemsRow*/
          t[86]
        );
        let k;
        for (k = 0; k < c.length; k += 1) {
          const w = Tc(t, c, k);
          u[k] ? (u[k].p(w, p), W(u[k], 1)) : (u[k] = Pc(w), u[k].c(), W(u[k], 1), u[k].m(r, e));
        }
        for (_r(), k = c.length; k < u.length; k += 1)
          f(k);
        pr();
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
        for (let p = 0; p < c.length; p += 1)
          W(u[p]);
        l = !0;
      }
    },
    o(m) {
      u = u.filter(jd);
      for (let p = 0; p < u.length; p += 1)
        $(u[p]);
      l = !1;
    },
    d(m) {
      m && J(r), nn(u, m), h();
    }
  };
}
function zc(t) {
  let r, e, n = (
    /*hasScrollLeft*/
    t[10] && /*shouldCheckArrows*/
    t[8] && Oc(t)
  ), o = (
    /*hasScrollRight*/
    t[11] && /*shouldCheckArrows*/
    t[8] && Lc(t)
  );
  return {
    c() {
      n && n.c(), r = cr(), o && o.c(), e = xt();
    },
    m(i, s) {
      n && n.m(i, s), q(i, r, s), o && o.m(i, s), q(i, e, s);
    },
    p(i, s) {
      /*hasScrollLeft*/
      i[10] && /*shouldCheckArrows*/
      i[8] ? n ? n.p(i, s) : (n = Oc(i), n.c(), n.m(r.parentNode, r)) : n && (n.d(1), n = null), /*hasScrollRight*/
      i[11] && /*shouldCheckArrows*/
      i[8] ? o ? o.p(i, s) : (o = Lc(i), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null);
    },
    d(i) {
      i && (J(r), J(e)), n && n.d(i), o && o.d(i);
    }
  };
}
function Oc(t) {
  let r, e, n, o = !/*leftClass*/
  t[32] && qh();
  return {
    c() {
      r = Ve("div"), o && o.c(), g(
        r,
        "class",
        /*leftClass*/
        t[32] || `${uo.gallery__arrow} ${po.arrow} ${po.arrow_left}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = We(
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
function qh(t) {
  let r, e;
  return {
    c() {
      r = en("svg"), e = en("path"), g(e, "class", uo["gallery__arrow-icon-path"]), g(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", po.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), ht(r, e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function Lc(t) {
  let r, e, n, o = !/*rightClass*/
  t[33] && Yh();
  return {
    c() {
      r = Ve("div"), o && o.c(), g(
        r,
        "class",
        /*rightClass*/
        t[33] || `${uo.gallery__arrow} ${po.arrow} ${po.arrow_right}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = We(
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
function Yh(t) {
  let r, e;
  return {
    c() {
      r = en("svg"), e = en("path"), g(e, "class", uo["gallery__arrow-icon-path"]), g(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", po.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), ht(r, e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function Kh(t) {
  let r, e, n, o, i, s, a, l, c, u, f = ir(
    /*itemsGrid*/
    t[18]
  ), _ = [];
  for (let p = 0; p < f.length; p += 1)
    _[p] = Nc(Dc(t, f, p));
  const h = (p) => $(_[p], 1, 1, () => {
    _[p] = null;
  });
  let m = (
    /*orientation*/
    t[4] === "horizontal" && zc(t)
  );
  return {
    c() {
      r = Ve("div"), e = Ve("div");
      for (let p = 0; p < _.length; p += 1)
        _[p].c();
      s = cr(), m && m.c(), a = xt(), g(e, "class", uo["gallery__items-grid"]), g(e, "style", n = er(
        /*gridStyle*/
        t[17]
      )), g(r, "class", o = uo.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? Cr["root_restrict-scroll"] : "")), g(r, "style", i = er(
        /*scrollerStyle*/
        t[5]
      ));
    },
    m(p, k) {
      q(p, r, k), ht(r, e);
      for (let w = 0; w < _.length; w += 1)
        _[w] && _[w].m(e, null);
      t[72](e), t[73](r), q(p, s, k), m && m.m(p, k), q(p, a, k), l = !0, c || (u = We(r, "scroll", function() {
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
    p(p, k) {
      if (t = p, k[0] & /*columnStyle, galleryItemsWrappers, lastPaddingSize, itemsGrid, childLayoutParams, orientation, gridGap*/
      340560) {
        f = ir(
          /*itemsGrid*/
          t[18]
        );
        let w;
        for (w = 0; w < f.length; w += 1) {
          const z = Dc(t, f, w);
          _[w] ? (_[w].p(z, k), W(_[w], 1)) : (_[w] = Nc(z), _[w].c(), W(_[w], 1), _[w].m(e, null));
        }
        for (_r(), w = f.length; w < _.length; w += 1)
          h(w);
        pr();
      }
      (!l || k[0] & /*gridStyle*/
      131072 && n !== (n = er(
        /*gridStyle*/
        t[17]
      ))) && g(e, "style", n), (!l || k[0] & /*$jsonRestrictParentScroll*/
      1073741824 && o !== (o = uo.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? Cr["root_restrict-scroll"] : ""))) && g(r, "class", o), (!l || k[0] & /*scrollerStyle*/
      32 && i !== (i = er(
        /*scrollerStyle*/
        t[5]
      ))) && g(r, "style", i), /*orientation*/
      t[4] === "horizontal" ? m ? m.p(t, k) : (m = zc(t), m.c(), m.m(a.parentNode, a)) : m && (m.d(1), m = null);
    },
    i(p) {
      if (!l) {
        for (let k = 0; k < f.length; k += 1)
          W(_[k]);
        l = !0;
      }
    },
    o(p) {
      _ = _.filter(jd);
      for (let k = 0; k < _.length; k += 1)
        $(_[k]);
      l = !1;
    },
    d(p) {
      p && (J(r), J(s), J(a)), nn(_, p), t[72](null), t[73](null), m && m.d(p), c = !1, u();
    }
  };
}
function Xh(t) {
  let r, e, n, o;
  return r = new yn({
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
      $$slots: { default: [Kh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(i, s) {
      Rt(r, i, s), e = !0, n || (o = We(Jh, "resize", function() {
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
      e || (W(r.$$.fragment, i), e = !0);
    },
    o(i) {
      $(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Bt(r, i), n = !1, o();
    }
  };
}
function Zh(t, r, e) {
  let n = 0, o = [], i = [];
  for (let s = 0; s < t.length; ++s)
    o[n] || (o[n] = []), o[n].push({
      index: s,
      hasGapBefore: i[n] && r[s].visibility !== "gone",
      componentContext: t[s]
    }), !i[n] && r[s].visibility !== "gone" && (i[n] = !0), ++n >= e && (n = 0);
  return o;
}
function Qh(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, k, w, z, H, L, Q, ce, T, X, le = A, C = () => (le(), le = V(p, (te) => e(59, X = te)), p), M, N = A, U = () => (N(), N = V(m, (te) => e(60, M = te)), m), se, fe = A, Ce = () => (fe(), fe = V(_, (te) => e(61, se = te)), _), Ee, de = A, Ie = () => (de(), de = V(Ft, (te) => e(62, Ee = te)), Ft), ee, De = A, qe = () => (De(), De = V(f, (te) => e(63, ee = te)), f), Ke, ke = A, rt = () => (ke(), ke = V(u, (te) => e(64, Ke = te)), u), ye, Ae = A, _e = () => (Ae(), Ae = V(c, (te) => e(65, ye = te)), c), x, ue = A, ie = () => (ue(), ue = V(l, (te) => e(66, x = te)), l), Fe, xe = A, Xe = () => (xe(), xe = V(a, (te) => e(67, Fe = te)), a), ne, Ye, Le = A, st = () => (Le(), Le = V(i, (te) => e(69, Ye = te)), i), lt, at = A, wt = () => (at(), at = V(s, (te) => e(70, lt = te)), s), nt, zt = A, ut = () => (zt(), zt = V(h, (te) => e(30, nt = te)), h);
  t.$$.on_destroy.push(() => le()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => De()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Le()), t.$$.on_destroy.push(() => at()), t.$$.on_destroy.push(() => zt());
  let { componentContext: pe } = r, { layoutParams: ge = void 0 } = r;
  const _t = Tr(Xr), je = _t.direction;
  bn(t, je, (te) => e(58, T = te));
  let I, vt = [], ft = !1, St = !1, Tt = null, et, K = !1;
  const At = _t.getCustomization("galleryLeftClass"), Mt = _t.getCustomization("galleryRightClass");
  let Zt, Jt = 1, he = "horizontal", Be = "start", pt, be = 8, Qe, Oe, tr = "", Ne, yt = [], Ft, It = {}, ur = !1, Me = {}, kt = 0;
  function or() {
    e(42, Jt = 1), e(4, he = "horizontal"), e(43, Be = "start"), e(44, be = 8), e(47, tr = "");
  }
  let $t = null, Kt = null;
  function gr() {
    var nr, mr;
    const te = Hn(lt, Jt), bt = pe.json.responsive;
    if (!bt || typeof bt != "object") {
      e(42, Jt = te);
      return;
    }
    $t != null && $t.matches && ((nr = bt.mobile) != null && nr.column_count) ? e(42, Jt = bt.mobile.column_count) : Kt != null && Kt.matches && ((mr = bt.tablet) != null && mr.column_count) ? e(42, Jt = bt.tablet.column_count) : e(42, Jt = te);
  }
  function vr(te) {
    e(0, pe = e(53, G = {
      ...pe,
      json: {
        ...pe.json,
        items: te.filter(Oo)
      }
    }));
  }
  const Nt = _t.isDesktop;
  bn(t, Nt, (te) => e(68, ne = te));
  let yr = [], G;
  function dt() {
    if (!I)
      return;
    let te = I.scrollLeft;
    T === "rtl" && (te *= -1);
    const bt = I.scrollWidth, nr = I.offsetWidth;
    T === "ltr" ? (e(10, ft = te > 2), e(11, St = te + nr < bt - 2)) : (e(11, St = te > 2), e(10, ft = te + nr < bt - 2));
  }
  const Gt = ha(dt, 50);
  function jt(te) {
    I.scroll({
      left: I.scrollLeft + I.offsetWidth * 0.75 * (te === "right" ? 1 : -1),
      behavior: "smooth"
    });
  }
  function wr() {
    let te = [], bt = vt[0].children.length;
    for (let nr = 0; nr < bt; nr += 2)
      for (let mr = 0; mr < Jt; ++mr) {
        const sr = vt[mr].children[nr];
        sr && te.push(sr);
      }
    return te;
  }
  function Ar(te, bt = !0) {
    const mr = he === "horizontal" ? "left" : "top";
    I.scroll({
      [mr]: te,
      behavior: bt ? "smooth" : "instant"
    });
  }
  function hr(te, bt, { animated: nr = !0, extraOffset: mr = 0, overflow: sr = "clamp" } = {}) {
    const v = he === "horizontal", re = v ? "offsetLeft" : "offsetTop";
    bt > te.length - 1 ? bt = sr === "ring" ? Vo(bt, te.length) : te.length - 1 : bt < 0 && (bt = sr === "ring" ? Vo(bt, te.length) : 0);
    const d = te[bt];
    if (d) {
      let j;
      if (T === "ltr" || !v)
        j = d[re] + 0.01 - be / 2;
      else {
        const Te = I.offsetWidth;
        j = d[re] + d.offsetWidth + 0.01 - be / 2 - Te;
      }
      if (mr) {
        j += mr;
        const Te = v ? I.scrollWidth - I.offsetWidth : I.scrollHeight - I.offsetHeight;
        j > Te && (sr === "clamp" ? j = Te : sr === "ring" && (j = Vo(j, Te))), j < 0 && (sr === "clamp" ? j = 0 : sr === "ring" && (j = Vo(j, Te)));
      }
      Ar(j, nr);
    }
  }
  function Fr(te, { overflow: bt = "clamp", animated: nr = !0 } = {}) {
    const mr = he === "horizontal", sr = T === "ltr" || !mr ? 1 : -1, v = mr ? I.scrollLeft : I.scrollTop, re = mr ? I.scrollWidth - I.offsetWidth : I.scrollHeight - I.offsetHeight;
    let d = v * sr + te;
    d > re ? bt === "clamp" ? d = re : bt === "ring" && (d = Vo(d, re)) : d < 0 && (bt === "clamp" ? d = 0 : bt === "ring" && (d = Vo(d, re))), Ar(d * sr, nr);
  }
  function Wr(te, bt) {
    return he === "horizontal" ? bt.right > te.left && te.right > bt.left : bt.bottom > te.top && te.bottom > bt.top;
  }
  function rr(te, bt) {
    return he === "horizontal" ? bt.left >= te.left && bt.right <= te.right : bt.top >= te.top && bt.bottom <= te.bottom;
  }
  function tt(te) {
    const bt = wr(), nr = I.getBoundingClientRect(), mr = bt.findIndex((re) => rr(nr, re.getBoundingClientRect()));
    if (mr !== -1)
      return mr;
    const sr = bt.map((re) => Wr(nr, re.getBoundingClientRect())), v = sr.findIndex(Boolean);
    return v !== -1 ? te === "prev" && sr.filter(Boolean).length === 2 ? v + 1 : v : te === "prev" ? 1 : bt.length - 2;
  }
  ro(() => {
    if (e(40, K = !0), dt(), kt) {
      const te = wr();
      hr(te, kt, { animated: !1 });
    }
  }), on(() => {
    e(40, K = !1), yr.forEach((te) => {
      te.destroy();
    }), Zt && !pe.fakeElement && (_t.unregisterInstance(Zt), e(41, Zt = void 0)), $t && $t.removeEventListener("change", gr), Kt && Kt.removeEventListener("change", gr);
  });
  function Ct(te, bt) {
    Ir[te ? "unshift" : "push"](() => {
      vt[bt] = te, e(9, vt);
    });
  }
  function Xt(te) {
    Ir[te ? "unshift" : "push"](() => {
      et = te, e(3, et);
    });
  }
  function Yt(te) {
    Ir[te ? "unshift" : "push"](() => {
      I = te, e(2, I);
    });
  }
  const fr = () => jt("left"), ct = () => jt("right");
  return t.$$set = (te) => {
    "componentContext" in te && e(0, pe = te.componentContext), "layoutParams" in te && e(1, ge = te.layoutParams);
  }, t.$$.update = () => {
    var te, bt, nr, mr, sr, v;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(57, n = pe.origJson), t.$$.dirty[1] & /*origJson*/
    67108864 && n && or(), t.$$.dirty[0] & /*componentContext*/
    1 && e(56, o = Array.isArray(pe.json.items) && pe.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(29, i = typeof ((te = pe.json.item_builder) == null ? void 0 : te.data) == "string" ? pe.getDerivedFromVars((bt = pe.json.item_builder) == null ? void 0 : bt.data, void 0, !0) : (nr = pe.json.item_builder) != null && nr.data ? $o(pe.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && wt(e(28, s = pe.getDerivedFromVars(pe.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(27, a = pe.getDerivedFromVars(pe.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*columns, mobileQuery, tabletQuery*/
    3147776 | t.$$.dirty[2] & /*$jsonColumnCount*/
    256) {
      const re = Hn(lt, Jt), d = pe.json.responsive;
      d && typeof d == "object" && typeof window < "u" ? ($t || (e(51, $t = window.matchMedia("(max-width: 767px)")), e(52, Kt = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), $t.addEventListener("change", gr), Kt.addEventListener("change", gr)), gr()) : e(42, Jt = re);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(26, l = pe.getDerivedFromVars(pe.json.cross_content_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(25, c = pe.getDerivedFromVars(pe.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && rt(e(24, u = pe.getDerivedFromVars(pe.json.cross_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(23, f = pe.getDerivedFromVars(pe.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Ce(e(22, _ = pe.getDerivedFromVars(pe.json.scroll_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(21, h = pe.getDerivedFromVars(pe.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && U(e(20, m = pe.getDerivedFromVars(pe.json.scrollbar))), t.$$.dirty[0] & /*componentContext*/
    1 && C(e(19, p = pe.getDerivedFromVars(pe.json.default_item))), t.$$.dirty[0] & /*componentContext, items*/
    129 | t.$$.dirty[1] & /*jsonItems, prevContext*/
    37748736 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    128) {
      let re = [];
      if (pe.json.item_builder && Array.isArray(Ye) && Array.isArray(pe.json.item_builder.prototypes)) {
        const Re = pe.json.item_builder;
        re = _l(Ye, _t, pe, Re);
      } else
        re = (Array.isArray(o) && o || []).map((Re, Pt) => ({
          div: Re,
          key: Re.id || { index: Pt, data: Re }
        }));
      const d = new Set(yr), j = /* @__PURE__ */ new Map();
      let Te = !1;
      G === pe && yr.forEach((Re) => {
        Re.key && (typeof Re.key == "string" && j.has(Re.key) ? Te || (Te = !0, pe.logError(Y(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: Re.key } }))) : j.set(
          typeof Re.key == "string" ? Re.key : Re.key.index,
          Re
        ));
      }), e(7, yr = re.map((Re, Pt) => {
        let O = !Te && j.get(Re.id), Dt = j.get(Pt);
        return !O && !Re.id && typeof Re.key == "object" && typeof (Dt == null ? void 0 : Dt.key) == "object" && Gi(Dt.key.data, Re.key.data) && (O = Dt), O ? (d.delete(O), O) : pe.produceChildContext(Re.div, {
          path: Pt,
          variables: Re.vars,
          id: Re.id,
          key: Re.key
        });
      }));
      for (const Re of d)
        Re.destroy();
      e(53, G = pe);
    }
    if (t.$$.dirty[1] & /*mounted*/
    512 | t.$$.dirty[2] & /*$isDesktop*/
    64 && e(8, k = ne && K), t.$$.dirty[0] & /*shouldCheckArrows, itemsGridElem*/
    264 | t.$$.dirty[1] & /*resizeObserver*/
    256 && (k ? typeof ResizeObserver < "u" && (e(39, Tt = new ResizeObserver(() => {
      Gt();
    })), Tt.observe(et)) : Tt && (Tt.disconnect(), e(39, Tt = null))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[2] & /*$jsonOrientation*/
    32 && e(4, he = ma(Fe, he)), t.$$.dirty[1] & /*align*/
    4096 | t.$$.dirty[2] & /*$jsonCrossContentAlignment*/
    16 && e(43, Be = Uh(x, Be)), t.$$.dirty[1] & /*itemSpacing*/
    8192 | t.$$.dirty[2] & /*$jsonItemSpacing*/
    8 && (e(44, be = tn(ye, be)), e(12, pt = ae(be))), t.$$.dirty[1] & /*itemSpacing, crossSpacing*/
    40960 | t.$$.dirty[2] & /*$jsonCrossSpacing*/
    4 && (e(46, Oe = tn(Ke, be)), e(45, Qe = ae(Oe))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*$direction, padding*/
    134283264 | t.$$.dirty[2] & /*$jsonPaddings*/
    2) {
      e(47, tr = is(ee, T, tr));
      const re = he === "horizontal" ? (sr = (mr = ee == null ? void 0 : ee.end) != null ? mr : ee == null ? void 0 : ee[T === "ltr" ? "right" : "left"]) != null ? sr : 0 : (v = ee == null ? void 0 : ee.bottom) != null ? v : 0, d = ae(re);
      e(13, Ne = {
        width: he === "horizontal" ? d : "1px",
        height: he === "horizontal" ? "1px" : d,
        "margin-right": he === "horizontal" && T === "ltr" ? "-" + d : void 0,
        "margin-left": he === "horizontal" && T === "rtl" ? "-" + d : void 0,
        "margin-bottom": he === "vertical" ? "-" + d : void 0
      });
    }
    if (t.$$.dirty[0] & /*items, orientation*/
    144) {
      let re = [];
      yr.forEach((d) => {
        const j = he === "horizontal" ? "width" : "height";
        re.push(d.getDerivedFromVars({
          size: d.json[j],
          visibility: d.json.visibility
        }));
      }), Ie(e(14, Ft = Ui(re, (d) => [...d])));
    }
    if (t.$$.dirty[0] & /*items*/
    128 | t.$$.dirty[1] & /*columns*/
    2048 | t.$$.dirty[2] & /*$childStore*/
    1 && e(18, w = Zh(yr, Ee, Jt)), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*columns, templateSizes*/
    133120 | t.$$.dirty[2] & /*$childStore*/
    1 && (e(48, yt = []), Jt > 1 || Ee.forEach((re, d) => {
      var j;
      re.visibility !== "gone" && (!re.size && he === "horizontal" || ((j = re.size) == null ? void 0 : j.type) === "match_parent" ? yt.push("100%") : yt.push("max-content"), d + 1 < Ee.length && yt.push("auto"));
    }), yt.push("auto")), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, z = pe.json.fixed_columns === !0), t.$$.dirty[0] & /*orientation, scrollerStyle, childLayoutParams*/
    112 | t.$$.dirty[1] & /*align, $jsonScrollMode, itemSpacing*/
    1073754112) {
      const re = {};
      let d = {};
      if (e(49, ur = !1), d.treatMatchParentAs100 = !0, he === "horizontal" ? (d.parentVAlign = Be, d.parentContainerOrientation = "horizontal") : (d.parentHAlign = Be, d.parentContainerOrientation = "vertical"), se === "paging") {
        e(49, ur = !0), d.scrollSnap = "start";
        const j = he === "horizontal" ? "scroll-padding-left" : "scroll-padding-top";
        re[j] = ae(be / 2);
      }
      e(5, It = xo(re, It)), e(6, Me = xo(d, Me));
    }
    t.$$.dirty[0] & /*orientation*/
    16 && e(54, H = he === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*padding, crossGridGap, fixedColumns, columns*/
    16861184 && e(17, L = {
      padding: tr,
      "grid-gap": Qe,
      ...z && Jt > 1 && he === "vertical" ? {
        display: "grid",
        "grid-template-columns": `repeat(${Jt}, 1fr)`
      } : {}
    }), t.$$.dirty[1] & /*gridTemplate, templateSizes*/
    8519680 && e(16, Q = {
      [H]: Gh(yt)
    }), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*scrollSnap, $jsonScrollbar*/
    537133056 && e(15, ce = {
      orientation: he,
      "scroll-snap": ur,
      scrollbar: M === "auto" ? "auto" : "none"
    }), t.$$.dirty[1] & /*$jsonDefaultItem, defaultItem*/
    268959744 && e(50, kt = tn(X, kt)), t.$$.dirty[0] & /*componentContext*/
    1 && pe.json && Gt(), t.$$.dirty[0] & /*componentContext, orientation, scroller*/
    21 | t.$$.dirty[1] & /*prevId, $direction*/
    134218752 && pe.json && (Zt && (_t.unregisterInstance(Zt), e(41, Zt = void 0)), pe.id && !pe.fakeElement && (e(41, Zt = pe.id), _t.registerInstance(Zt, {
      setCurrentItem(re, d) {
        const j = wr();
        if (re < 0 || re > j.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        hr(j, re, { animated: d });
      },
      setPreviousItem(re, d, j) {
        const Te = tt("prev"), Re = wr();
        let Pt = Te - re;
        hr(Re, Pt, { animated: j, overflow: d });
      },
      setNextItem(re, d, j) {
        const Te = he === "horizontal", Re = T === "ltr" || !Te ? 1 : -1, Pt = Te ? I.scrollLeft * Re + I.offsetWidth === I.scrollWidth : I.scrollTop + I.offsetHeight === I.scrollHeight, O = wr();
        if (Pt && d === "ring") {
          hr(O, 0, { animated: j });
          return;
        }
        let ot = tt("next") + re;
        hr(O, ot, { animated: j, overflow: d });
      },
      scrollToStart(re) {
        Ar(0, re);
      },
      scrollToEnd(re) {
        Ar(
          T === "ltr" || he !== "horizontal" ? 1e6 : -1e6,
          re
        );
      },
      scrollToPosition(re, d) {
        Ar(
          T === "ltr" || he !== "horizontal" ? re : -re,
          d
        );
      },
      scrollCombined({ step: re, offset: d, overflow: j, animated: Te }) {
        if (re) {
          const Pt = tt(re > 0 ? "next" : "prev") + re;
          hr(wr(), Pt, { animated: Te, extraOffset: d, overflow: j });
        } else d && Fr(d, { overflow: j, animated: Te });
      }
    })));
  }, [
    pe,
    ge,
    I,
    et,
    he,
    It,
    Me,
    yr,
    k,
    vt,
    ft,
    St,
    pt,
    Ne,
    Ft,
    ce,
    Q,
    L,
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
    nt,
    je,
    At,
    Mt,
    vr,
    Nt,
    dt,
    Gt,
    jt,
    Tt,
    K,
    Zt,
    Jt,
    Be,
    be,
    Qe,
    Oe,
    tr,
    yt,
    ur,
    kt,
    $t,
    Kt,
    G,
    H,
    z,
    o,
    n,
    T,
    X,
    M,
    se,
    Ee,
    ee,
    Ke,
    ye,
    x,
    Fe,
    ne,
    Ye,
    lt,
    Ct,
    Xt,
    Yt,
    fr,
    ct
  ];
}
class xh extends Or {
  constructor(r) {
    super(), zr(this, r, Qh, Xh, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const $h = "appkit-outer", e0 = "appkit-tabs", t0 = "appkit-tabs__list", r0 = "appkit-tabs__item", n0 = "appkit-tabs__item_selected", o0 = "appkit-tabs_animation_fade", i0 = "appkit-tabs_animation_none", s0 = "appkit-tabs__item_actionable", l0 = "appkit-tabs__panels", a0 = "appkit-tabs__swiper", c0 = "appkit-tabs__swiper_animated", u0 = "appkit-tabs__swiper_inited", f0 = "appkit-tabs__panel", d0 = "appkit-tabs__panel_visible", _0 = "appkit-tabs__separator", p0 = "appkit-tabs__delimitier", vn = {
  outer: $h,
  "root__any-actions": "appkit-root__any-actions",
  tabs: e0,
  tabs__list: t0,
  "tabs__items-bg": "appkit-tabs__items-bg",
  "tabs__items-text": "appkit-tabs__items-text",
  tabs__item: r0,
  tabs__item_selected: n0,
  tabs_animation_fade: o0,
  tabs_animation_none: i0,
  tabs__item_actionable: s0,
  tabs__panels: l0,
  "tabs_own-height": "appkit-tabs_own-height",
  tabs__swiper: a0,
  tabs__swiper_animated: c0,
  tabs__swiper_inited: u0,
  tabs__panel: f0,
  tabs__panel_visible: d0,
  "tabs_height-parent_yes": "appkit-tabs_height-parent_yes",
  tabs__separator: _0,
  tabs__delimitier: p0,
  "tabs__tabs-highlighter": "appkit-tabs__tabs-highlighter"
};
function g0(t, r) {
  var n, o;
  if (!t || !t.image_url || typeof t.image_url != "string")
    return r;
  const e = {
    url: t.image_url,
    width: 12,
    height: 12
  };
  return ((n = t.width) == null ? void 0 : n.type) === "fixed" && Wn(t.width.value) && (e.width = t.width.value), ((o = t.height) == null ? void 0 : o.type) === "fixed" && Wn(t.height.value) && (e.height = t.height.value), e;
}
const Cd = 37, Ed = 39, Ad = 36, Sd = 35;
function h0(t, r, e, n) {
  const o = [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ];
  for (let i = 0; i < o.length; ++i)
    if (o[i] && !Tn(o[i]))
      return n;
  return Cs(t, r, e);
}
function Rc(t) {
  const r = t.touches[0], e = r.clientX || r.pageX, n = r.clientY || r.pageY;
  return { x: e, y: n };
}
function m0(t) {
  let r, e;
  return r = new Qn({
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function b0(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r, { enabled: i } = r;
  const s = Do(i);
  return pi(pa, { isEnabled: s }), t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams), "enabled" in a && e(2, i = a.enabled);
  }, t.$$.update = () => {
    t.$$.dirty & /*enabled*/
    4 && s.set(i);
  }, [n, o, i];
}
class y0 extends Or {
  constructor(r) {
    super(), zr(this, r, b0, m0, Vr, {
      componentContext: 0,
      layoutParams: 1,
      enabled: 2
    });
  }
}
const { Boolean: Bc, window: w0 } = No;
function Hc(t, r, e) {
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
function Wc(t, r, e) {
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
function Uc(t, r, e) {
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
function k0(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function v0(t) {
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
    $$slots: { default: [C0] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = jo(o, n[i]);
  return r = new yn({ props: o }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(i, s) {
      Rt(r, i, s), e = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams*/
      16777219 | s[1] & /*parentOfItems, replaceItems, devapi*/
      6356992 ? zo(n, [
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
        2097152 && _d(
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
      e || (W(r.$$.fragment, i), e = !0);
    },
    o(i) {
      $(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Bt(r, i);
    }
  };
}
function Gc(t) {
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
function Jc(t) {
  let r, e, n = (
    /*item*/
    t[99].title + ""
  ), o, i, s = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && Gc(t)
  );
  return {
    c() {
      s && s.c(), r = cr(), e = Ve("span"), o = Mn(n), g(e, "class", i = mt("tabs__item", vn, {
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
      a[100] > 0 ? s ? s.p(a, l) : (s = Gc(a), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null), l[0] & /*$childStore*/
      262144 && n !== (n = /*item*/
      a[99].title + "") && Xn(o, n), l[0] & /*$childStore, selected*/
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
function qc(t) {
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
function Yc(t) {
  let r, e;
  return {
    c() {
      r = Ve("img"), g(r, "class", vn.tabs__delimitier), g(r, "alt", ""), g(r, "loading", "lazy"), g(r, "decoding", "async"), Kn(r.src, e = /*delimitierStyle*/
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
      32768 && !Kn(r.src, e = /*delimitierStyle*/
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
function j0(t) {
  let r = (
    /*item*/
    t[99].title + ""
  ), e;
  return {
    c() {
      e = Mn(r);
    },
    m(n, o) {
      q(n, e, o);
    },
    p(n, o) {
      o[0] & /*$childStore*/
      262144 && r !== (r = /*item*/
      n[99].title + "") && Xn(e, r);
    },
    d(n) {
      n && J(e);
    }
  };
}
function Kc(t) {
  let r, e, n, o = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && Yc(t)
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
        ].filter(qs) : []
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
      $$slots: { default: [j0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      o && o.c(), r = cr(), Ht(e.$$.fragment);
    },
    m(s, a) {
      o && o.m(s, a), q(s, r, a), Rt(e, s, a), n = !0;
    },
    p(s, a) {
      t = s, /*delimitierStyle*/
      t[15] && /*index*/
      t[100] > 0 ? o ? o.p(t, a) : (o = Yc(t), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
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
      ].filter(qs) : []), a[0] & /*$childStore, selected, componentContext*/
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
      n || (W(e.$$.fragment, s), n = !0);
    },
    o(s) {
      $(e.$$.fragment, s), n = !1;
    },
    d(s) {
      s && J(r), o && o.d(s), Bt(e, s);
    }
  };
}
function Xc(t) {
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
function Zc(t) {
  let r, e;
  return r = new y0({
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Qc(t) {
  let r, e, n, o, i, s, a = (
    /*childComponentContext*/
    t[101] && Zc(t)
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
    m(l, c) {
      q(l, r, c), a && a.m(r, null), ht(r, e), s = !0;
    },
    p(l, c) {
      /*childComponentContext*/
      l[101] ? a ? (a.p(l, c), c[0] & /*$childStore*/
      262144 | c[1] & /*showedPanels*/
      4 && W(a, 1)) : (a = Zc(l), a.c(), W(a, 1), a.m(r, e)) : a && (_r(), $(a, 1, 1, () => {
        a = null;
      }), pr()), (!s || c[0] & /*$childStore*/
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
      262144) && D(
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
      $(a), s = !1;
    },
    d(l) {
      l && J(r), a && a.d();
    }
  };
}
function C0(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, h, m, p, k = ir(
    /*$childStore*/
    t[18]
  ), w = [];
  for (let C = 0; C < k.length; C += 1)
    w[C] = Jc(Uc(t, k, C));
  let z = (
    /*animationType*/
    t[16] === "slide" && /*selectedTabStyles*/
    t[36] && qc(t)
  ), H = ir(
    /*$childStore*/
    t[18]
  ), L = [];
  for (let C = 0; C < H.length; C += 1)
    L[C] = Kc(Wc(t, H, C));
  const Q = (C) => $(L[C], 1, 1, () => {
    L[C] = null;
  });
  let ce = (
    /*$jsonSeparator*/
    t[20] && Xc(t)
  ), T = ir(
    /*$childStore*/
    t[18]
  ), X = [];
  for (let C = 0; C < T.length; C += 1)
    X[C] = Qc(Hc(t, T, C));
  const le = (C) => $(X[C], 1, 1, () => {
    X[C] = null;
  });
  return {
    c() {
      r = Ve("div"), e = Ve("div");
      for (let C = 0; C < w.length; C += 1)
        w[C].c();
      n = cr(), z && z.c(), o = cr(), i = Ve("div");
      for (let C = 0; C < L.length; C += 1)
        L[C].c();
      a = cr(), ce && ce.c(), l = cr(), c = Ve("div"), u = Ve("div");
      for (let C = 0; C < X.length; C += 1)
        X[C].c();
      g(e, "class", vn["tabs__items-bg"]), g(e, "aria-hidden", "true"), g(i, "class", vn["tabs__items-text"]), g(r, "class", s = vn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Cr["root_restrict-scroll"] : "")), g(r, "role", "tablist"), D(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? _o(
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
        t[13] ? cn(
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
    m(C, M) {
      q(C, r, M), ht(r, e);
      for (let N = 0; N < w.length; N += 1)
        w[N] && w[N].m(e, null);
      ht(e, n), z && z.m(e, null), ht(r, o), ht(r, i);
      for (let N = 0; N < L.length; N += 1)
        L[N] && L[N].m(i, null);
      t[74](r), q(C, a, M), ce && ce.m(C, M), q(C, l, M), q(C, c, M), ht(c, u);
      for (let N = 0; N < X.length; N += 1)
        X[N] && X[N].m(u, null);
      t[75](u), t[76](c), h = !0, m || (p = [
        We(
          r,
          "keydown",
          /*onTabKeydown*/
          t[55]
        ),
        We(c, "touchstart", function() {
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
        We(c, "touchmove", function() {
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
        We(c, "touchend", function() {
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
        We(c, "touchcancel", function() {
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
        k = ir(
          /*$childStore*/
          t[18]
        );
        let N;
        for (N = 0; N < k.length; N += 1) {
          const U = Uc(t, k, N);
          w[N] ? w[N].p(U, M) : (w[N] = Jc(U), w[N].c(), w[N].m(e, n));
        }
        for (; N < w.length; N += 1)
          w[N].d(1);
        w.length = k.length;
      }
      if (/*animationType*/
      t[16] === "slide" && /*selectedTabStyles*/
      t[36] ? z ? z.p(t, M) : (z = qc(t), z.c(), z.m(e, null)) : z && (z.d(1), z = null), M[0] & /*componentContext, $childStore, selected, delimitierStyle*/
      425985 | M[1] & /*instId, selectItem*/
      8912896) {
        H = ir(
          /*$childStore*/
          t[18]
        );
        let N;
        for (N = 0; N < H.length; N += 1) {
          const U = Wc(t, H, N);
          L[N] ? (L[N].p(U, M), W(L[N], 1)) : (L[N] = Kc(U), L[N].c(), W(L[N], 1), L[N].m(i, null));
        }
        for (_r(), N = H.length; N < L.length; N += 1)
          Q(N);
        pr();
      }
      if ((!h || M[1] & /*$jsonRestrictParentScroll*/
      131072 && s !== (s = vn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Cr["root_restrict-scroll"] : ""))) && g(r, "class", s), M[0] & /*titlePadding, $direction*/
      540672 && D(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? _o(
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
        t[13] ? cn(
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
      t[20] ? ce ? ce.p(t, M) : (ce = Xc(t), ce.c(), ce.m(l.parentNode, l)) : ce && (ce.d(1), ce = null), M[0] & /*$childStore, childLayoutParams, selected*/
      393224 | M[1] & /*visiblePanels, instId, showedPanels*/
      524300) {
        T = ir(
          /*$childStore*/
          t[18]
        );
        let N;
        for (N = 0; N < T.length; N += 1) {
          const U = Hc(t, T, N);
          X[N] ? (X[N].p(U, M), W(X[N], 1)) : (X[N] = Qc(U), X[N].c(), W(X[N], 1), X[N].m(u, null));
        }
        for (_r(), N = T.length; N < X.length; N += 1)
          le(N);
        pr();
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
      }))) && g(u, "class", f), (!h || M[1] & /*$jsonRestrictParentScroll*/
      131072 && _ !== (_ = vn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Cr["root_restrict-scroll"] : ""))) && g(c, "class", _);
    },
    i(C) {
      if (!h) {
        for (let M = 0; M < H.length; M += 1)
          W(L[M]);
        for (let M = 0; M < T.length; M += 1)
          W(X[M]);
        h = !0;
      }
    },
    o(C) {
      L = L.filter(Bc);
      for (let M = 0; M < L.length; M += 1)
        $(L[M]);
      X = X.filter(Bc);
      for (let M = 0; M < X.length; M += 1)
        $(X[M]);
      h = !1;
    },
    d(C) {
      C && (J(r), J(a), J(l), J(c)), nn(w, C), z && z.d(), nn(L, C), t[74](null), ce && ce.d(C), nn(X, C), t[75](null), t[76](null), m = !1, Rr(p);
    }
  };
}
function E0(t) {
  let r, e, n, o, i, s;
  const a = [v0, k0], l = [];
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
      ~r && l[r].m(u, f), q(u, n, f), o = !0, i || (s = We(w0, "resize", function() {
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
      r = c(t), r === _ ? ~r && l[r].p(t, f) : (e && (_r(), $(l[_], 1, 1, () => {
        l[_] = null;
      }), pr()), ~r ? (e = l[r], e ? e.p(t, f) : (e = l[r] = a[r](t), e.c()), W(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(u) {
      o || (W(e), o = !0);
    },
    o(u) {
      $(e), o = !1;
    },
    d(u) {
      u && J(n), ~r && l[r].d(u), i = !1, s();
    }
  };
}
function A0(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, k, w, z, H, L, Q = A, ce = () => (Q(), Q = V(a, (v) => e(67, L = v)), a), T, X = A, le = () => (X(), X = V(m, (v) => e(68, T = v)), m), C, M = A, N = () => (M(), M = V(h, (v) => e(69, C = v)), h), U, se = A, fe = () => (se(), se = V(f, (v) => e(70, U = v)), f), Ce, Ee, de = A, Ie = () => (de(), de = V(u, (v) => e(71, Ee = v)), u), ee, De = A, qe = () => (De(), De = V(c, (v) => e(72, ee = v)), c), Ke, ke = A, rt = () => (ke(), ke = V(l, (v) => e(20, Ke = v)), l), ye, Ae = A, _e = () => (Ae(), Ae = V(_, (v) => e(48, ye = v)), _);
  t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => De()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => Ae());
  let { componentContext: x } = r, { layoutParams: ue = void 0 } = r;
  const ie = Tr(Xr), Fe = ie.direction;
  bn(t, Fe, (v) => e(19, Ce = v));
  const xe = ie.genId("tabs");
  let Xe, ne = !1, Ye = Do([]);
  bn(t, Ye, (v) => e(18, H = v));
  let Le = {}, st, lt, at, wt = {}, nt = 12, zt = "", ut = "", pe = "", ge = "", _t, je = "", I = "", vt, ft = "", St = "", Tt = "", et = "", K = "", At = "", Mt = 0, Zt = "", Jt = "", he = null, Be = !1, pt = !1, be, Qe = [], Oe = [], tr = null, Ne = null, yt = null, Ft, It = !1, ur = !1, Me, kt, or, $t = "slide", Kt, gr, vr, Nt;
  function yr() {
    e(4, nt = 12), e(5, zt = ""), e(6, ge = ""), e(7, _t = void 0), e(27, je = ""), e(28, I = ""), e(8, vt = void 0), e(29, ft = ""), e(30, St = ""), e(9, Tt = ""), e(10, et = ""), e(11, K = ""), e(12, At = ""), e(13, Mt = 0), e(61, Zt = ""), e(62, Jt = ""), e(14, he = null), e(15, or = void 0), e(16, $t = "slide"), e(35, Kt = 300), e(36, gr = void 0), te();
  }
  function G(v) {
    x.json.items && e(0, x = vr = {
      ...x,
      json: {
        ...x.json,
        items: x.json.items.map((re, d) => ({ ...re, div: v[d] }))
      }
    });
  }
  function dt(v) {
    if (ne)
      return;
    const re = new Set(Qe.filter(Oo)), d = /* @__PURE__ */ new Map();
    vr === x && Qe.forEach((j) => {
      j && d.set(j.json, j);
    }), e(33, Qe = v.map((j, Te) => {
      if ((Te === p || Qe[Te]) && (j != null && j.div)) {
        const Re = d.get(j.div);
        return Re ? (re.delete(Re), Re) : x.produceChildContext(j.div, { path: Te });
      }
    })), e(34, Oe = v.map((j, Te) => Te === p));
    for (const j of re)
      j.destroy();
    vr = x;
  }
  async function Gt(v, re, d) {
    if (be = p, e(17, p = v), Ct(), Ar(d), te(), re) {
      await Vn();
      const j = st.querySelector(`.${vn.tabs__item_selected}`);
      j && j.focus();
    }
  }
  function jt(v, re = !1) {
    const d = H == null ? void 0 : H.length;
    if (!d)
      return;
    const j = H.map((O) => O.index);
    let Re = j.indexOf(p) + v;
    Re >= d ? Re = 0 : Re < 0 && (Re = d - 1);
    const Pt = j[Re];
    Gt(Pt, re, !0);
  }
  function wr(v, re) {
    return p !== re ? (Gt(re, !1, !0), !1) : !0;
  }
  function Ar(v = !0) {
    e(32, pt = v), hr(-p * 100), Fr(), Wr(), rr(), kt = -p * lt.clientWidth;
  }
  async function hr(v) {
    await Vn(), e(23, at.style.transform = `translate3d(${v}%,0,0)`, at);
  }
  function Fr(v = !1) {
    const re = v ? Math.max(0, p - 1) : Math.min(p, be != null ? be : p), d = v ? Math.min(o.length - 1, p + 1) : Math.max(p, be != null ? be : p);
    ie.devtoolCreateHierarchy, Qe.forEach((j) => {
      j == null || j.destroy();
    }), e(33, Qe = Qe.map((j, Te) => {
      var Pt;
      if (j)
        return j;
      const Re = (Pt = o[Te]) == null ? void 0 : Pt.div;
      if ((Te >= re && Te <= d || ie.devtoolCreateHierarchy === "eager" && !1) && Re)
        return x.produceChildContext(Re, { path: Te });
    })), e(34, Oe = Oe.map((j, Te) => Te >= re && Te <= d));
  }
  async function Wr() {
    var re;
    if (((re = x.json.height) == null ? void 0 : re.type) === "match_parent")
      return;
    await Vn();
    const v = document.getElementById(`${xe}-panel-${p}`);
    v && e(22, lt.style.height = ae(v.offsetHeight), lt);
  }
  function rr() {
    tr && clearTimeout(tr), tr = window.setTimeout(
      () => {
        e(34, Oe = o.map((v, re) => re === p));
      },
      400
    );
  }
  function tt(v) {
    if (!(v.ctrlKey || v.shiftKey || v.altKey || v.metaKey) && o) {
      if (v.which === Cd)
        jt(-1, !0);
      else if (v.which === Ed)
        jt(1, !0);
      else if (v.which === Ad)
        Gt(0, !0, !0);
      else if (v.which === Sd)
        Gt(o.length - 1, !0, !0);
      else
        return;
      v.preventDefault();
    }
  }
  function Ct() {
    Be || (e(31, Be = !0), e(22, lt.style.height = ae(lt.clientHeight), lt), e(23, at.style.transform = `translate3d(${-(be != null ? be : p) * 100}%,0,0)`, at));
  }
  function Xt(v) {
    var j;
    const re = v.target, d = (j = re == null ? void 0 : re.closest) == null ? void 0 : j.call(re, `.${Cr["root_restrict-scroll"]}`);
    o.length < 2 || v.touches.length > 1 || d && d !== lt || (It = !1, ur = !1, Ne = Rc(v), yt = null, Ft = Date.now(), Me = kt || -p * lt.clientWidth, e(32, pt = !1), tr && clearTimeout(tr));
  }
  function Yt(v) {
    const re = Rc(v);
    if (!Ne || yt && yt.x === re.x && yt.y === re.y)
      return;
    yt = re;
    const d = lt.clientWidth;
    if (It) {
      kt = re.x - Ne.x + Me;
      const j = d * o.length;
      if (kt > 0)
        kt = kt * d / (kt + d * 3);
      else if (-kt + d > j) {
        let Te = -kt + d - j;
        Te = Te * d / (Te + d * 3), kt = d - j - Te;
      }
      hr(kt * 100 / d);
    } else Math.abs(re.y - Ne.y) > 10 ? ur = !0 : !ur && Math.abs(re.x - Ne.x) > 8 && (Ct(), It = !0, Ne = re, hr(-p * 100), Fr(!0));
    It && v.cancelable && v.preventDefault();
  }
  function fr() {
    ur = !1, Ne = null;
    let v = p;
    if (!It)
      return;
    It = !1;
    const re = Math.min(512, lt.clientWidth), d = Math.abs(Me - kt), j = Math.min(1, (Date.now() - Ft) / 750);
    d > re / 4 * j && (v += Me > kt ? 1 : -1), v >= o.length ? v = o.length - 1 : v < 0 && (v = 0), v === p ? (e(32, pt = !0), kt = -v * re, hr(-v * 100), rr()) : Gt(v, !1, !0);
  }
  function ct(v, re) {
    return v > o.length - 1 ? re === "ring" ? Vo(v, o.length) : o.length - 1 : v < 0 ? re === "ring" ? Vo(v, o.length) : 0 : v;
  }
  function te() {
    $t === "slide" && Vn().then(() => {
      const v = st == null ? void 0 : st.querySelector("." + vn.tabs__item_selected);
      v && e(36, gr = {
        left: `${v.offsetLeft}px`,
        width: `${v.offsetWidth}px`,
        height: `${v.offsetHeight}px`
      });
    });
  }
  ro(() => {
    te(), ie.devtoolCreateHierarchy;
  }), on(() => {
    Qe.forEach((v) => {
      v == null || v.destroy();
    }), Xe && (ie.unregisterInstance(Xe), e(60, Xe = void 0));
  });
  const bt = (v, re) => wr(re, v);
  function nr(v) {
    Ir[v ? "unshift" : "push"](() => {
      st = v, e(21, st);
    });
  }
  function mr(v) {
    Ir[v ? "unshift" : "push"](() => {
      at = v, e(23, at);
    });
  }
  function sr(v) {
    Ir[v ? "unshift" : "push"](() => {
      lt = v, e(22, lt);
    });
  }
  return t.$$set = (v) => {
    "componentContext" in v && e(0, x = v.componentContext), "layoutParams" in v && e(1, ue = v.layoutParams);
  }, t.$$.update = () => {
    var v, re, d, j, Te, Re, Pt, O, Dt, ot;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(66, n = x.origJson), t.$$.dirty[2] & /*origJson*/
    16 && n && yr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(63, o = Array.isArray(x.json.items) && x.json.items || []), t.$$.dirty[2] & /*items*/
    2 && e(47, i = o.map((Ge) => {
      var Je;
      return { json: Ge.div, id: (Je = Ge.div) == null ? void 0 : Je.id };
    })), t.$$.dirty[0] & /*componentContext*/
    1 && e(65, s = x.getJsonWithVars(x.json.selected_tab)), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(46, a = x.getDerivedFromVars(x.json.tab_title_style, void 0, !0))), t.$$.dirty[0] & /*componentContext*/
    1 && rt(e(45, l = x.getDerivedFromVars(x.json.has_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(44, c = x.getDerivedFromVars(x.json.separator_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(43, u = x.getDerivedFromVars(x.json.separator_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(42, f = x.getDerivedFromVars(x.json.switch_tabs_by_content_swipe_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(41, _ = x.getDerivedFromVars(x.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(40, h = x.getDerivedFromVars(x.json.title_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(39, m = x.getDerivedFromVars(x.json.tab_title_delimiter))), t.$$.dirty[2] & /*jsonSelectedTab*/
    8 && e(17, p = s && Number(s) || 0), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*items*/
    2)
      if (Array.isArray(o) && o.length) {
        let Ge = [];
        o.forEach((Je, Wt) => {
          const br = x.getJsonWithVars({
            index: Wt,
            title: Je.title,
            title_click_action: Je.title_click_action
          });
          br.title && typeof br.title == "string" ? Ge.push(br) : x.logError(Y(new Error("Incorrect title for the tab"), { additional: { index: Wt } }));
        }), Ye.set(Ge);
      } else
        Ye.set([]);
    if (t.$$.dirty[0] & /*$childStore, componentContext*/
    262145 && (H != null && H.length ? e(2, ne = !1) : (e(2, ne = !0), x.logError(Y(new Error('Incorrect or empty "items" prop for div "tabs"'))))), t.$$.dirty[0] & /*componentContext, childLayoutParams*/
    9) {
      let Ge = { parentContainerOrientation: "horizontal" };
      ((v = x.json.width) == null ? void 0 : v.type) === "wrap_content" && (Ge.parentHorizontalWrapContent = !0), (!x.json.height || x.json.height.type === "wrap_content") && (Ge.parentVerticalWrapContent = !0), e(3, Le = xo(Ge, Le));
    }
    if (t.$$.dirty[0] & /*hasError, selected, componentContext*/
    131077 | t.$$.dirty[2] & /*items*/
    2 && !ne && (p < 0 || p >= o.length) && (x.logError(Y(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: x.json.selected_tab,
        length: o.length
      }
    })), e(17, p = p < 0 ? 0 : o.length - 1)), t.$$.dirty[0] & /*hasError, $childStore, selected, componentContext*/
    393221 && !ne && !H.some((Ge) => p === Ge.index) && (x.logError(Y(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: x.json.selected_tab
      }
    })), e(17, p = ((re = H[0]) == null ? void 0 : re.index) || 0)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && e(64, k = L || {}), t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(4, nt = Hn(k.font_size, nt)), t.$$.dirty[0] & /*tabFontSize, $direction, tabPaddings*/
    524336 | t.$$.dirty[2] & /*tabStyle*/
    4 && (k.font_size || k.paddings)) {
      const Ge = k.paddings || { top: 6, right: 8, bottom: 6, left: 8 }, Je = {
        top: (Number(Ge.top) || 0) / nt * 10,
        right: (Number(Ce === "ltr" ? Ge.end : Ge.start) || Number(Ge.right) || 0) / nt * 10,
        bottom: (Number(Ge.bottom) || 0) / nt * 10,
        left: (Number(Ce === "ltr" ? Ge.start : Ge.end) || Number(Ge.left) || 0) / nt * 10
      };
      e(5, zt = is(Je, Ce, zt));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Ge = k.line_height;
      Ge !== void 0 && Wn(Ge) && e(25, ut = ae(Ge / nt * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Ge = k.letter_spacing;
      Ge !== void 0 && Tn(Ge) && e(26, pe = ae(Ge / nt * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize, tabBorderRadius*/
    80 | t.$$.dirty[2] & /*tabStyle*/
    4 && (k.corner_radius || k.corners_radius || k.font_size)) {
      const Ge = (d = k.corner_radius) != null ? d : 1e3;
      k.corners_radius ? e(6, ge = h0(k.corners_radius, Ge, nt, ge)) : Tn(Ge) && e(6, ge = ae(Ge / nt * 10));
    }
    t.$$.dirty[0] & /*tabActiveFontWeight*/
    128 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(7, _t = yi(k.active_font_weight || k.font_weight, void 0, _t)), k.font_family && typeof k.font_family == "string" ? e(27, je = ie.typefaceProvider(k.font_family, { fontWeight: _t || 400 })) : e(27, je = ""), e(28, I = Ri(k.active_font_variation_settings))), t.$$.dirty[0] & /*tabInactiveFontWeight*/
    256 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(8, vt = yi(k.inactive_font_weight || k.font_weight, void 0, vt)), k.font_family && typeof k.font_family == "string" ? e(29, ft = ie.typefaceProvider(k.font_family, { fontWeight: vt || 400 })) : e(29, ft = ""), e(30, St = Ri(k.inactive_font_variation_settings))), t.$$.dirty[0] & /*tabActiveTextColor*/
    512 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(9, Tt = dr(k.active_text_color, 1, Tt)), t.$$.dirty[0] & /*tabInactiveTextColor*/
    1024 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(10, et = dr(k.inactive_text_color, 1, et)), t.$$.dirty[0] & /*tabActiveBackground*/
    2048 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(11, K = dr(k.active_background_color, 1, K)), t.$$.dirty[0] & /*tabInactiveBackground*/
    4096 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(12, At = dr(k.inactive_background_color, 1, At)), t.$$.dirty[0] & /*tabItemSpacing*/
    8192 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(13, Mt = tn(k.item_spacing, Mt)), t.$$.dirty[0] & /*$jsonSeparator, $direction*/
    1572864 | t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*$jsonSeparatorColor, $jsonSeparatorPaddings, separatorMargins*/
    1537 && Ke && (ee && e(61, Zt = dr(ee, 1, Zt)), Ee && e(62, Jt = is(Ee, Ce, Jt))), t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*separatorMargins*/
    1 && e(38, w = {
      background: Zt,
      margin: Jt
    }), t.$$.dirty[2] & /*$jsonSwipeEnabled*/
    256 && e(37, z = typeof U > "u" ? !0 : !!U), t.$$.dirty[0] & /*titlePadding*/
    16384 | t.$$.dirty[2] & /*$jsonTitlePaddings*/
    128 && e(14, he = bi(C || void 0, he)), t.$$.dirty[0] & /*delimitierStyle*/
    32768 | t.$$.dirty[2] & /*$jsonDelimiterStyle*/
    64 && e(15, or = g0(T, or)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && ((L == null ? void 0 : L.animation_type) === "fade" || (L == null ? void 0 : L.animation_type) === "none") && e(16, $t = L.animation_type), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && Tn(L == null ? void 0 : L.animation_duration) && e(35, Kt = L.animation_duration), t.$$.dirty[2] & /*items*/
    2 && dt(o), t.$$.dirty[0] & /*componentContext, hasError, selected*/
    131077 | t.$$.dirty[1] & /*prevId*/
    536870912 | t.$$.dirty[2] & /*items*/
    2 && x.json && (Xe && (ie.unregisterInstance(Xe), e(60, Xe = void 0)), x.id && !ne && !x.fakeElement && (e(60, Xe = x.id), ie.registerInstance(Xe, {
      setCurrentItem(Ge, Je) {
        if (Ge < 0 || Ge > o.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        Gt(Ge, !1, Je);
      },
      setPreviousItem(Ge, Je, Wt) {
        let br = ct(p - Ge, Je);
        Gt(br, !1, Wt);
      },
      setNextItem(Ge, Je, Wt) {
        let br = ct(p + Ge, Je);
        Gt(br, !1, Wt);
      },
      scrollToStart(Ge) {
        Gt(0, !1, Ge);
      },
      scrollToEnd(Ge) {
        Gt(o.length - 1, !1, Ge);
      },
      scrollCombined({ step: Ge, overflow: Je, animated: Wt }) {
        Ge && Gt(ct(p + Ge, Je || "clamp"), !1, Wt || !0);
      }
    }))), t.$$.dirty[0] & /*componentContext, selected, animationType*/
    196609 | t.$$.dirty[2] & /*items*/
    2 && e(24, wt = {
      "height-parent": ((j = x.json.height) == null ? void 0 : j.type) === "match_parent" ? "yes" : "",
      "own-height": (((Te = x.json.height) == null ? void 0 : Te.type) === "match_parent" || ((Re = x.json.height) == null ? void 0 : Re.type) === "fixed") && !(((Dt = (O = (Pt = o[p]) == null ? void 0 : Pt.div) == null ? void 0 : O.height) == null ? void 0 : Dt.type) === "wrap_content" && ((ot = o[p].div) != null && ot.height.constrained)),
      animation: $t
    });
  }, [
    x,
    ue,
    ne,
    Le,
    nt,
    zt,
    ge,
    _t,
    vt,
    Tt,
    et,
    K,
    At,
    Mt,
    he,
    or,
    $t,
    p,
    H,
    Ce,
    Ke,
    st,
    lt,
    at,
    wt,
    ut,
    pe,
    je,
    I,
    ft,
    St,
    Be,
    pt,
    Qe,
    Oe,
    Kt,
    gr,
    z,
    w,
    m,
    h,
    _,
    f,
    u,
    c,
    l,
    a,
    i,
    ye,
    Fe,
    xe,
    Ye,
    Nt,
    G,
    wr,
    tt,
    Xt,
    Yt,
    fr,
    te,
    Xe,
    Zt,
    Jt,
    o,
    k,
    s,
    n,
    L,
    T,
    C,
    U,
    Ee,
    ee,
    bt,
    nr,
    mr,
    sr
  ];
}
class S0 extends Or {
  constructor(r) {
    super(), zr(this, r, A0, E0, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const V0 = "appkit-state", F0 = "appkit-state_overflow_visible", I0 = "appkit-state__animations", wi = {
  state: V0,
  state_overflow_visible: F0,
  state__animations: I0,
  "state__animation-child": "appkit-state__animation-child",
  "state__animation-child-inner": "appkit-state__animation-child-inner"
};
function pl(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function D0(t) {
  return t * t * t;
}
function Vd(t) {
  const r = t - 1;
  return r * r * r + 1;
}
function Fd(t) {
  return (r) => {
    if (r <= 0)
      return 0;
    if (r >= 1)
      return 1;
    const e = r * t.length, n = Math.floor(e), o = t[n], i = t[n + 1], s = e - n;
    return o * s + i * (1 - s);
  };
}
const T0 = [
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
], M0 = Fd(T0), P0 = [
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
], N0 = Fd(P0), Ul = {
  linear: el,
  ease: M0,
  ease_in: D0,
  ease_out: Vd,
  ease_in_out: pl,
  spring: N0
};
function ba(t) {
  return Ul[t];
}
const Id = 200, Dd = 0, z0 = 0, O0 = 0;
function xc(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || Id) + (Number(r.start_delay) || Dd)
  ));
}
function L0(t, {
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
      const c = l * i, u = r.map((w) => {
        var X, le, C;
        const z = Number(w.start_delay) || Dd, H = Number(w.duration) || Id, L = Math.max(0, Math.min(1, (c - z) / H)), Q = o === "in" ? 1 - L : L, T = (ba(w.interpolator || "ease_in_out") || pl)(Q);
        if (w.type === "fade")
          return T >= 1 ? {
            active: !1,
            opacity: 0
          } : {
            active: T > 0 && T < 1,
            opacity: (1 - T) * a + T * (w.alpha || z0)
          };
        if (w.type === "slide") {
          const M = w.edge === "top" || w.edge === "left" ? -1 : 1, N = w.edge === "top" || w.edge === "bottom" || !w.edge ? "translateY" : "translateX";
          let U = (X = w.distance) == null ? void 0 : X.value;
          U === void 0 && (w.edge === "top" || w.edge === "bottom" || !w.edge ? U = Math.abs(
            n[w.edge === "bottom" ? "bottom" : "top"] - e[w.edge === "bottom" ? "top" : "bottom"]
          ) : U = Math.abs(
            n[w.edge === "left" ? "left" : "right"] - e[w.edge === "left" ? "right" : "left"]
          ));
          const se = U * T;
          return {
            active: T > 0 && T < 1,
            translate: `${N}(${se * M}px)`
          };
        } else if (w.type === "scale") {
          const M = 1 - T + T * (w.scale || O0), N = (le = w.pivot_x) != null ? le : 0.5, U = (C = w.pivot_y) != null ? C : 0.5, se = (1 - M) * e.width * N, fe = (1 - M) * e.height * U;
          return {
            active: T > 0 && T < 1,
            scale: `translate(${se}px, ${fe}px) scale(${M})`
          };
        }
        return {};
      }), f = u.map((w) => w.opacity).filter((w) => w !== void 0).reduce((w, z) => w * z, 1), _ = u.map((w) => w.translate).filter((w) => w !== void 0).join(" "), h = u.map((w) => w.scale).filter((w) => w !== void 0).join(" "), m = u.filter((w) => w.active).map((w) => w.scale).filter((w) => w !== void 0), p = m.length ? m[m.length - 1] : h;
      return `transform:${[_, p].filter(Boolean).join(" ") || "none"};opacity:${f}`;
    }
  };
}
function Uo(t, r, e) {
  return t * (1 - e) + r * e;
}
const R0 = 200, B0 = 0;
function H0(t, {
  rootBbox: r,
  beforeBbox: e,
  afterBbox: n,
  transition: o
}) {
  var i, s;
  return {
    delay: (i = o.start_delay) != null ? i : B0,
    duration: Li() ? 0 : (s = o.duration) != null ? s : R0,
    easing: o.interpolator && o.interpolator in Ul ? Ul[o.interpolator] : pl,
    css: (a) => [
      `top:${Uo(e.top, n.top, a) - r.top}px`,
      `left:${Uo(e.left, n.left, a) - r.left}px`,
      `width:${Uo(e.width, n.width, a)}px`,
      `height:${Uo(e.height, n.height, a)}px`
    ].join(";")
  };
}
function Td(t) {
  const r = [];
  return t.type === "set" ? (t.items || []).forEach((e) => {
    r.push(...Td(e));
  }) : r.push(t), r;
}
const { Map: W0 } = No;
function $c(t, r, e) {
  const n = t.slice();
  return n[37] = r[e], n;
}
function U0(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function G0(t) {
  let r, e;
  const n = [
    {
      cls: mt(
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
    $$slots: { default: [Y0] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = jo(o, n[i]);
  return r = new yn({ props: o }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(i, s) {
      Rt(r, i, s), e = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams, parentOfItems, replaceItems, devapi*/
      6915 ? zo(n, [
        s[0] & /*mods*/
        256 && {
          cls: mt(
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
        2048 && _d(
          /*devapi*/
          i[11]
        )
      ]) : {};
      s[0] & /*animationRoot, animationList, selectedId, selectedComponentContext, childContexts*/
      248 | s[1] & /*$$scope*/
      4096 && (a.$$scope = { dirty: s, ctx: i }), r.$set(a);
    },
    i(i) {
      e || (W(r.$$.fragment, i), e = !0);
    },
    o(i) {
      $(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Bt(r, i);
    }
  };
}
function eu(t) {
  let r = (
    /*selectedId*/
    t[5]
  ), e, n, o = tu(t);
  return {
    c() {
      o.c(), e = xt();
    },
    m(i, s) {
      o.m(i, s), q(i, e, s), n = !0;
    },
    p(i, s) {
      s[0] & /*selectedId*/
      32 && Vr(r, r = /*selectedId*/
      i[5]) ? (_r(), $(o, 1, 1, A), pr(), o = tu(i), o.c(), W(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
    },
    i(i) {
      n || (W(o), n = !0);
    },
    o(i) {
      $(o), n = !1;
    },
    d(i) {
      i && J(e), o.d(i);
    }
  };
}
function tu(t) {
  let r, e;
  return r = new Qn({
    props: {
      componentContext: (
        /*selectedComponentContext*/
        t[6]
      )
    }
  }), {
    c() {
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function J0(t) {
  let r, e, n, o, i, s, a, l;
  n = new Qn({
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
      r = Ve("div"), e = Ve("div"), Ht(n.$$.fragment), o = cr(), g(e, "class", wi["state__animation-child-inner"]), g(r, "class", wi["state__animation-child"]);
    },
    m(u, f) {
      q(u, r, f), ht(r, e), Rt(n, e, null), ht(r, o), s = !0, a || (l = We(r, "introend", c), a = !0);
    },
    p(u, f) {
      t = u;
      const _ = {};
      f[0] & /*animationList*/
      16 && (_.componentContext = /*item*/
      t[37].componentContextCopy), n.$set(_);
    },
    i(u) {
      s || (W(n.$$.fragment, u), i || to(() => {
        i = ll(
          r,
          H0,
          /*item*/
          t[37]
        ), i.start();
      }), s = !0);
    },
    o(u) {
      $(n.$$.fragment, u), s = !1;
    },
    d(u) {
      u && J(r), Bt(n), a = !1, l();
    }
  };
}
function q0(t) {
  let r, e, n, o, i, s = `${/*item*/
  t[37].offsetLeft}px`, a = `${/*item*/
  t[37].offsetTop}px`, l = `${/*item*/
  t[37].width}px`, c = `${/*item*/
  t[37].height}px`, u, f, _;
  n = new Qn({
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
      r = Ve("div"), e = Ve("div"), Ht(n.$$.fragment), o = cr(), g(e, "class", wi["state__animation-child-inner"]), g(r, "class", wi["state__animation-child"]), D(r, "left", s), D(r, "top", a), D(r, "width", l), D(r, "height", c);
    },
    m(m, p) {
      q(m, r, p), ht(r, e), Rt(n, e, null), ht(r, o), u = !0, f || (_ = We(r, "introend", h), f = !0);
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
      16 && c !== (c = `${/*item*/
      t[37].height}px`) && D(r, "height", c);
    },
    i(m) {
      u || (W(n.$$.fragment, m), i || to(() => {
        i = ll(
          r,
          L0,
          /*item*/
          t[37]
        ), i.start();
      }), u = !0);
    },
    o(m) {
      $(n.$$.fragment, m), u = !1;
    },
    d(m) {
      m && J(r), Bt(n), f = !1, _();
    }
  };
}
function ru(t, r) {
  let e, n, o, i, s;
  const a = [q0, J0], l = [];
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
      q(u, e, f), l[n].m(u, f), q(u, i, f), s = !0;
    },
    p(u, f) {
      r = u;
      let _ = n;
      n = c(r), n === _ ? l[n].p(r, f) : (_r(), $(l[_], 1, 1, () => {
        l[_] = null;
      }), pr(), o = l[n], o ? o.p(r, f) : (o = l[n] = a[n](r), o.c()), W(o, 1), o.m(i.parentNode, i));
    },
    i(u) {
      s || (W(o), s = !0);
    },
    o(u) {
      $(o), s = !1;
    },
    d(u) {
      u && (J(e), J(i)), l[n].d(u);
    }
  };
}
function Y0(t) {
  let r, e, n, o = [], i = new W0(), s, a = !1, l = (
    /*selectedComponentContext*/
    t[6] && eu(t)
  ), c = ir(
    /*animationList*/
    t[4]
  );
  const u = (f) => (
    /*item*/
    f[37]
  );
  for (let f = 0; f < c.length; f += 1) {
    let _ = $c(t, c, f), h = u(_);
    i.set(h, o[f] = ru(h, _));
  }
  return {
    c() {
      r = cr(), l && l.c(), e = cr(), n = Ve("div");
      for (let f = 0; f < o.length; f += 1)
        o[f].c();
      g(n, "class", wi.state__animations), g(n, "aria-hidden", "true");
    },
    m(f, _) {
      q(f, r, _), l && l.m(f, _), q(f, e, _), q(f, n, _);
      for (let h = 0; h < o.length; h += 1)
        o[h] && o[h].m(n, null);
      t[23](n), s = !0;
    },
    p(f, _) {
      /*selectedComponentContext*/
      f[6] ? l ? (l.p(f, _), _[0] & /*selectedComponentContext*/
      64 && W(l, 1)) : (l = eu(f), l.c(), W(l, 1), l.m(e.parentNode, e)) : l && (_r(), $(l, 1, 1, () => {
        l = null;
      }), pr()), _[0] & /*animationList, onOutro*/
      8208 && (c = ir(
        /*animationList*/
        f[4]
      ), _r(), o = dd(o, _, u, 1, f, c, i, n, fd, ru, null, $c), pr());
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
      $(a), $(l);
      for (let _ = 0; _ < o.length; _ += 1)
        $(o[_]);
      s = !1;
    },
    d(f) {
      f && (J(r), J(e), J(n)), l && l.d(f);
      for (let _ = 0; _ < o.length; _ += 1)
        o[_].d();
      t[23](null);
    }
  };
}
function K0(t) {
  let r, e, n, o;
  const i = [G0, U0], s = [];
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
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (_r(), $(s[u], 1, 1, () => {
        s[u] = null;
      }), pr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), W(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (W(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function X0(t) {
  return t.some((r) => r.type === "fade");
}
function Md(t) {
  return t.type === "change_bounds" ? t : t.type === "set" ? Md(t.items[0]) : null;
}
function Z0(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h = A, m = () => (h(), h = V(i, (ye) => e(20, _ = ye)), i);
  t.$$.on_destroy.push(() => h());
  let { componentContext: p } = r, { layoutParams: k = void 0 } = r;
  const w = Tr(Xr);
  let z = !1, H, L = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Set(), ce = [], T = [], X = [], le = [], C, M, N, U, se = !1, fe;
  function Ce() {
    e(15, se = !1);
  }
  function Ee(ye) {
    N && N.destroy(), e(6, N = ye != null && ye.div ? p.produceChildContext(ye.div, {
      path: ye.state_id || "<unknown>"
    }) : void 0);
  }
  function de(ye) {
    const Ae = p.json.states;
    if (!Ae)
      return;
    const _e = /* @__PURE__ */ new Set();
    e(16, c = Ae.map((x, ue) => (c[ue].div !== ye[ue] && x.state_id && _e.add(x.state_id), { ...x, div: ye[ue] }))), e(0, p.json = { ...p.json, states: c }, p), M && _e.has(M) && Ee(c.find((x) => x.state_id === M) || null);
  }
  function Ie(ye, Ae, _e) {
    let { json: x, parentComponentContext: ue, transitions: ie, node: Fe } = Ae;
    x = p.getJsonWithVars(x), ie = p.getJsonWithVars(ie);
    const xe = Td(ie), Xe = Ae.bbox || Fe.getBoundingClientRect(), ne = {
      ...x,
      margins: void 0,
      alpha: X0(xe) ? void 0 : x.alpha
    };
    return {
      id: ue.id || "",
      json: ne,
      componentContextCopy: ue.produceChildContext(ne, { fake: Ba }),
      elementBbox: Xe,
      rootBbox: ye,
      transitions: xe,
      alpha: x.alpha,
      width: Xe.width,
      height: Xe.height,
      offsetTop: Xe.top - ye.top,
      offsetLeft: Xe.left - ye.left,
      direction: _e,
      resolvePromise: Ae.resolvePromise,
      node: Ae.node
    };
  }
  async function ee(ye) {
    if (M === ye)
      return p;
    w.setRunning("stateChange", !0);
    const Ae = new Set(Q);
    ce.forEach((ne) => {
      ne.resolvePromise && ne.resolvePromise();
    }), e(4, ce = []);
    let _e = [];
    if (H) {
      const ne = H.getBoundingClientRect();
      _e = X.map((Ye) => Ie(ne, Ye, "out"));
    }
    le.forEach((ne) => {
      ne.transitions && L.set(ne.id, {
        transitions: ne.transitions,
        rect: ne.node.getBoundingClientRect()
      });
    }), T = [], X = [], le = [];
    const x = c.find((ne) => ne.state_id === ye) || null;
    if (x ? (e(5, M = ye), a == null || a.setValue(M), Ee(x)) : p.logError(Y(new Error("Cannot find state with id"), { additional: { stateId: ye } })), await Vn(), !H)
      return;
    const ue = H.getBoundingClientRect();
    let ie = T.filter((ne) => {
      var Ye;
      return ne.parentComponentContext.id && !Ae.has(ne.parentComponentContext.id) ? !0 : ((Ye = ne.resolvePromise) == null || Ye.call(ne), !1);
    }).map((ne) => Ie(ue, ne, "in"));
    _e = _e.filter((ne) => {
      var Ye;
      return ne.id && !Q.has(ne.id) ? !0 : ((Ye = ne.resolvePromise) == null || Ye.call(ne), !1);
    });
    const Fe = _e.concat(ie), xe = Fe.reduce(
      (ne, Ye) => Math.max(ne, xc(Ye.transitions)),
      0
    ), Xe = le.filter((ne) => L.has(ne.id)).map((ne) => {
      const Ye = {
        ...ne.json,
        margins: void 0,
        width: { type: "match_parent" },
        height: { type: "match_parent" }
      }, Le = L.get(ne.id);
      return {
        id: ne.parentComponentContext.id || "",
        json: Ye,
        componentContextCopy: ne.parentComponentContext.produceChildContext(Ye, { fake: Ba }),
        rootBbox: ue,
        beforeBbox: Le.rect,
        afterBbox: ne.node.getBoundingClientRect(),
        node: ne.node,
        transition: p.getJsonWithVars(Md(Le.transitions)),
        resolvePromise: ne.resolvePromise
      };
    });
    return e(4, ce = [
      ...Fe.map((ne) => ({ ...ne, maxDuration: xe })),
      ...Xe
    ]), L.clear(), w.setRunning("stateChange", !1), p;
  }
  pi(_a, {
    // eslint-disable-next-line max-params
    runVisibilityTransition(ye, Ae, _e, x, ue, ie) {
      if (!H)
        return Promise.resolve();
      const Fe = H.getBoundingClientRect(), xe = Ie(
        Fe,
        {
          json: ye,
          parentComponentContext: Ae,
          transitions: _e,
          node: x,
          bbox: ie
        },
        ue
      ), Xe = xc(xe.transitions), ne = { ...xe, maxDuration: Xe };
      return e(4, ce = [...ce.filter((Ye) => Ye.node !== xe.node), ne]), new Promise((Ye) => {
        ne.resolvePromise = Ye;
      });
    },
    registerChildWithTransitionIn(ye, Ae, _e, x) {
      const ue = {
        json: ye,
        parentComponentContext: Ae,
        transitions: _e,
        node: x
      };
      return T.push(ue), new Promise((ie) => {
        ue.resolvePromise = ie;
      });
    },
    registerChildWithTransitionOut(ye, Ae, _e, x) {
      const ue = {
        json: ye,
        parentComponentContext: Ae,
        transitions: _e,
        node: x
      };
      return X.push(ue), new Promise((ie) => {
        ue.resolvePromise = ie;
      });
    },
    registerChildWithTransitionChange(ye, Ae, _e, x) {
      const ue = Ae.id;
      if (!ue)
        return Promise.resolve();
      const ie = {
        id: ue,
        json: ye,
        parentComponentContext: Ae,
        transitions: _e,
        node: x
      };
      return le.push(ie), new Promise((Fe) => {
        ie.resolvePromise = Fe;
      });
    },
    hasTransitionChange(ye) {
      return ye ? L.has(ye) : !1;
    },
    registerChild(ye) {
      Q.add(ye);
    },
    unregisterChild(ye) {
      Q.delete(ye);
    }
  });
  function De(ye) {
    if (!se && (e(15, se = !0), ye.length)) {
      const Ae = (a == null ? void 0 : a.getValue()) || o;
      if (Ae) {
        e(5, M = Ae);
        const _e = ye.find((x) => x.state_id === M) || null;
        Ee(_e), _e || p.logError(Y(new Error("Cannot find state for default_state_id"), { additional: { selectedId: M } }));
      } else {
        const _e = ye[0];
        e(5, M = _e.state_id), Ee(_e);
      }
      a && (a.setValue(M), a.subscribe((_e) => {
        ee(_e);
      }));
    }
  }
  function qe(ye) {
    e(4, ce = ce.filter((Ae) => Ae !== ye)), ye.resolvePromise && ye.resolvePromise();
  }
  on(() => {
    N && N.destroy(), C && (C(), e(14, C = void 0));
  });
  const Ke = (ye) => qe(ye), ke = (ye) => qe(ye);
  function rt(ye) {
    Ir[ye ? "unshift" : "push"](() => {
      H = ye, e(3, H);
    });
  }
  return t.$$set = (ye) => {
    "componentContext" in ye && e(0, p = ye.componentContext), "layoutParams" in ye && e(1, k = ye.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*componentContext*/
    1 && e(17, n = p.json.div_id || p.id), t.$$.dirty[0] & /*componentContext*/
    1 && (o = p.getJsonWithVars(p.json.default_state_id)), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(10, i = p.getDerivedFromVars(p.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, s = p.json.state_id_variable), t.$$.dirty[0] & /*stateVariableName, componentContext*/
    524289 && (a = s ? p.getVariable(s, "string") || w.awaitGlobalVariable(s, "string", "") : null), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, l = p.origJson), t.$$.dirty[0] & /*origJson*/
    262144 && l && Ce(), t.$$.dirty[0] & /*stateId, componentContext*/
    131073 && (n ? e(2, z = !1) : (e(2, z = !0), p.logError(Y(new Error('Missing "id" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext*/
    1 && p.json && (Q = /* @__PURE__ */ new Set()), t.$$.dirty[0] & /*componentContext*/
    1 && e(16, c = Array.isArray(p.json.states) && p.json.states || []), t.$$.dirty[0] & /*items*/
    65536 && e(9, u = c.map((ye) => {
      var Ae;
      return { json: ye.div, id: (Ae = ye.div) == null ? void 0 : Ae.id };
    })), t.$$.dirty[0] & /*items, componentContext*/
    65537 && (c != null && c.length ? e(2, z = !1) : (e(2, z = !0), p.logError(Y(new Error('Empty "states" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext, stateUnregister, stateId*/
    147457 && p.json && (C && (C(), e(14, C = void 0)), n && !(p != null && p.fakeElement) && e(14, C = p.registerState(n, ee))), t.$$.dirty[0] & /*inited, items*/
    98304 && !se && De(c), t.$$.dirty[0] & /*$jsonClipToBounds*/
    1048576 && e(8, f = {
      overflow: _ === !1 || _ === 0 ? "visible" : void 0
    });
  }, [
    p,
    k,
    z,
    H,
    ce,
    M,
    N,
    U,
    f,
    u,
    i,
    fe,
    de,
    qe,
    C,
    se,
    c,
    n,
    l,
    s,
    _,
    Ke,
    ke,
    rt
  ];
}
class Q0 extends Or {
  constructor(r) {
    super(), zr(this, r, Z0, K0, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const x0 = "appkit-pager", $0 = "appkit-pager__items", em = "appkit-pager_animated", tm = "appkit-pager__item", rm = "appkit-pager_clip", nm = "appkit-pager_orientation_horizontal", om = "appkit-pager_orientation_vertical", im = "appkit-pager__item_height_content", sm = "appkit-pager__item_height_fixed", lm = "appkit-pager__item_width_content", am = "appkit-pager__item_width_fixed", cm = "appkit-pager__arrow", Mo = {
  pager: x0,
  pager__items: $0,
  pager_animated: em,
  pager__item: tm,
  "pager_scroll-align_start": "appkit-pager_scroll-align_start",
  "pager_scroll-align_center": "appkit-pager_scroll-align_center",
  "pager_scroll-align_end": "appkit-pager_scroll-align_end",
  pager_clip: rm,
  pager_orientation_horizontal: nm,
  pager_orientation_vertical: om,
  "pager_cross-align_center": "appkit-pager_cross-align_center",
  "pager_cross-align_end": "appkit-pager_cross-align_end",
  pager__item_height_content: im,
  pager__item_height_fixed: sm,
  "pager__item_height-constrained": "appkit-pager__item_height-constrained",
  pager__item_width_content: lm,
  pager__item_width_fixed: am,
  "pager__item_width-constrained": "appkit-pager__item_width-constrained",
  pager__arrow: cm,
  "pager__arrow-icon-path": "appkit-pager__arrow-icon-path"
}, { window: um } = No;
function nu(t, r, e) {
  const n = t.slice();
  return n[95] = r[e], n;
}
function fm(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function dm(t) {
  let r, e;
  return r = new yn({
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
      $$slots: { default: [gm] },
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
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function ou(t) {
  let r, e, n, o, i, s, a;
  return e = new Qn({
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
      r = Ve("div"), Ht(e.$$.fragment), n = cr(), g(r, "class", o = mt("pager__item", Mo, lu(
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
      q(l, r, c), Rt(e, r, null), ht(r, n), a = !0;
    },
    p(l, c) {
      const u = {};
      c[0] & /*visibleItems*/
      16 && (u.componentContext = /*item*/
      l[95].componentContext), c[0] & /*childLayoutParams*/
      512 && (u.layoutParams = /*childLayoutParams*/
      l[9]), e.$set(u), (!a || c[0] & /*orientation, visibleItems*/
      20 && o !== (o = mt("pager__item", Mo, lu(
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
      a || (W(e.$$.fragment, l), a = !0);
    },
    o(l) {
      $(e.$$.fragment, l), a = !1;
    },
    d(l) {
      l && J(r), Bt(e);
    }
  };
}
function iu(t) {
  let r, e, n, o = !/*leftClass*/
  t[27] && _m();
  return {
    c() {
      r = Ve("div"), o && o.c(), g(
        r,
        "class",
        /*leftClass*/
        t[27] || `${Mo.pager__arrow} ${po.arrow} ${po.arrow_left}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = We(
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
function _m(t) {
  let r, e;
  return {
    c() {
      r = en("svg"), e = en("path"), g(e, "class", Mo["pager__arrow-icon-path"]), g(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", po.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), ht(r, e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function su(t) {
  let r, e, n, o = !/*rightClass*/
  t[28] && pm();
  return {
    c() {
      r = Ve("div"), o && o.c(), g(
        r,
        "class",
        /*rightClass*/
        t[28] || `${Mo.pager__arrow} ${po.arrow} ${po.arrow_right}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = We(
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
function pm(t) {
  let r, e;
  return {
    c() {
      r = en("svg"), e = en("path"), g(e, "class", Mo["pager__arrow-icon-path"]), g(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", po.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), ht(r, e);
    },
    d(n) {
      n && J(r);
    }
  };
}
function gm(t) {
  let r, e, n, o, i, s, a, l, c, u = ir(
    /*visibleItems*/
    t[4]
  ), f = [];
  for (let p = 0; p < u.length; p += 1)
    f[p] = ou(nu(t, u, p));
  const _ = (p) => $(f[p], 1, 1, () => {
    f[p] = null;
  });
  let h = (
    /*hasScrollLeft*/
    t[11] && /*shouldCheckArrows*/
    t[12] && iu(t)
  ), m = (
    /*hasScrollRight*/
    t[10] && /*shouldCheckArrows*/
    t[12] && su(t)
  );
  return {
    c() {
      r = Ve("div");
      for (let p = 0; p < f.length; p += 1)
        f[p].c();
      o = cr(), h && h.c(), i = cr(), m && m.c(), s = xt(), g(r, "class", e = Mo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (t[24] ? Cr["root_restrict-scroll"] : "")), g(r, "style", n = er(
        /*style*/
        t[14]
      ));
    },
    m(p, k) {
      q(p, r, k);
      for (let w = 0; w < f.length; w += 1)
        f[w] && f[w].m(r, null);
      t[69](r), q(p, o, k), h && h.m(p, k), q(p, i, k), m && m.m(p, k), q(p, s, k), a = !0, l || (c = [
        We(
          r,
          "transitionend",
          /*onTransitionEnd*/
          t[37]
        ),
        We(
          r,
          "focus",
          /*onFocus*/
          t[33],
          !0
        ),
        We(
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
        u = ir(
          /*visibleItems*/
          p[4]
        );
        let w;
        for (w = 0; w < u.length; w += 1) {
          const z = nu(p, u, w);
          f[w] ? (f[w].p(z, k), W(f[w], 1)) : (f[w] = ou(z), f[w].c(), W(f[w], 1), f[w].m(r, null));
        }
        for (_r(), w = u.length; w < f.length; w += 1)
          _(w);
        pr();
      }
      (!a || k[0] & /*$jsonRestrictParentScroll*/
      16777216 && e !== (e = Mo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (p[24] ? Cr["root_restrict-scroll"] : ""))) && g(r, "class", e), (!a || k[0] & /*style*/
      16384 && n !== (n = er(
        /*style*/
        p[14]
      ))) && g(r, "style", n), /*hasScrollLeft*/
      p[11] && /*shouldCheckArrows*/
      p[12] ? h ? h.p(p, k) : (h = iu(p), h.c(), h.m(i.parentNode, i)) : h && (h.d(1), h = null), /*hasScrollRight*/
      p[10] && /*shouldCheckArrows*/
      p[12] ? m ? m.p(p, k) : (m = su(p), m.c(), m.m(s.parentNode, s)) : m && (m.d(1), m = null);
    },
    i(p) {
      if (!a) {
        for (let k = 0; k < u.length; k += 1)
          W(f[k]);
        a = !0;
      }
    },
    o(p) {
      f = f.filter(Boolean);
      for (let k = 0; k < f.length; k += 1)
        $(f[k]);
      a = !1;
    },
    d(p) {
      p && (J(r), J(o), J(i), J(s)), nn(f, p), t[69](null), h && h.d(p), m && m.d(p), l = !1, Rr(c);
    }
  };
}
function hm(t) {
  let r, e, n, o, i, s;
  const a = [dm, fm], l = [];
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
      ~r && l[r].m(u, f), q(u, n, f), o = !0, i || (s = We(
        um,
        "resize",
        /*resnap*/
        t[38]
      ), i = !0);
    },
    p(u, f) {
      let _ = r;
      r = c(u), r === _ ? ~r && l[r].p(u, f) : (e && (_r(), $(l[_], 1, 1, () => {
        l[_] = null;
      }), pr()), ~r ? (e = l[r], e ? e.p(u, f) : (e = l[r] = a[r](u), e.c()), W(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(u) {
      o || (W(e), o = !0);
    },
    o(u) {
      $(e), o = !1;
    },
    d(u) {
      u && J(n), ~r && l[r].d(u), i = !1, s();
    }
  };
}
const _s = {
  wrap_content: "content",
  fixed: "fixed",
  match_parent: "parent"
}, yo = 2, mm = 400, bm = 8;
function lu(t, r) {
  var n, o, i, s;
  if (t === "horizontal") {
    const a = ((n = r.height) == null ? void 0 : n.type) || "";
    return {
      height: a in _s ? _s[a] : "content",
      "height-constrained": ((o = r.height) == null ? void 0 : o.type) === "wrap_content" ? un(r.height.constrained, !1) : !1
    };
  }
  const e = ((i = r.width) == null ? void 0 : i.type) || "";
  return {
    width: e in _s ? _s[e] : "parent",
    "width-constrained": ((s = r.width) == null ? void 0 : s.type) === "wrap_content" ? un(r.width.constrained, !1) : !1
  };
}
function ym(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, k, w, z, H, L, Q, ce, T, X = A, le = () => (X(), X = V(u, (v) => e(60, T = v)), u), C, M = A, N = () => (M(), M = V(i, (v) => e(61, C = v)), i), U, se = A, fe = () => (se(), se = V(f, (v) => e(62, U = v)), f), Ce, Ee = A, de = () => (Ee(), Ee = V(l, (v) => e(63, Ce = v)), l), Ie, ee = A, De = () => (ee(), ee = V(a, (v) => e(64, Ie = v)), a), qe, Ke = A, ke = () => (Ke(), Ke = V(s, (v) => e(65, qe = v)), s), rt, ye = A, Ae = () => (ye(), ye = V(je, (v) => e(66, rt = v)), je), _e, x = A, ue = () => (x(), x = V(o, (v) => e(67, _e = v)), o), ie, Fe = A, xe = () => (Fe(), Fe = V(_, (v) => e(68, ie = v)), _), Xe, ne = A, Ye = () => (ne(), ne = V(c, (v) => e(24, Xe = v)), c);
  t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => x()), t.$$.on_destroy.push(() => Fe()), t.$$.on_destroy.push(() => ne());
  let { componentContext: Le } = r, { layoutParams: st = void 0 } = r;
  const lt = Tr(Xr), at = lt.direction;
  bn(t, at, (v) => e(6, Q = v));
  const wt = lt.genId("pager"), nt = lt.getCustomization("pagerLeftClass"), zt = lt.getCustomization("pagerRightClass"), ut = lt.isDesktop;
  bn(t, ut, (v) => e(59, ce = v));
  let pe, ge, _t = !1, je, I = 0, vt = 0, ft = !1, St = "horizontal", Tt = "0em", et = {}, K = "", At = "", Mt = "", Zt = {}, Jt = "start", he = "center", Be = [], pt = 0, be = [], Qe = {}, Oe = {}, tr, Ne, yt = 0, Ft = !1, It = !1, ur = !1, Me = !1, kt = 0, or = "", $t = 0, Kt;
  function gr() {
    e(43, et = {}), e(9, Zt = {}), e(47, Jt = "start"), e(48, he = "center"), e(52, Ft = !1), e(53, It = !1), Me = !1;
  }
  function vr(v) {
    e(0, Le = e(51, tr = {
      ...Le,
      json: {
        ...Le.json,
        items: v.filter(Oo)
      }
    }));
  }
  function Nt(v, re) {
    Ne && Ne.update({
      instId: wt,
      currentItem: Oe[re],
      size: v,
      scrollToPagerItem(d) {
        Gt(Qe[d]);
      }
    });
  }
  function yr(v) {
    var d;
    if (v === vt || (vt = v, !Be[v]))
      return;
    const re = (d = Be[v].json) == null ? void 0 : d.selected_actions;
    re != null && re.length && Le.execAnyActions(re);
  }
  function G(v) {
    const re = It ? !1 : v === 0, d = It ? !1 : v === be.length - 1, j = St === "horizontal", Te = ge.children[v + (It ? yo : 0)];
    if (!Te)
      return 0;
    const Re = j ? "offsetLeft" : "offsetTop", Pt = j ? "offsetWidth" : "offsetHeight", O = tt(), Dt = Wr(), ot = rr(), Ge = Ct();
    return O >= Ge + Dt + ot || re ? 0 : d ? (O - Dt - ot - Ge) * (Q === "rtl" ? -1 : 1) : he === "start" && Q === "ltr" || he === "end" && Q === "rtl" ? -(Te[Re] - Dt) : he === "end" && Q === "ltr" || he === "start" && Q === "rtl" ? -(Te[Re] + Te[Pt] - O + ot) : ge[Pt] / 2 - (Te[Re] + Te[Pt] / 2);
  }
  function dt(v, re) {
    if (!ge)
      return;
    const d = G(v);
    e(54, ur = re), Vn().then(() => {
      var j;
      kt = d, e(55, or = jt(kt)), e(40, I = (j = Qe[v]) != null ? j : 0), Me = It && (v < 0 || v >= pt);
    });
  }
  function Gt(v, re = !0) {
    var d;
    dt((d = Oe[v]) != null ? d : 0, re);
  }
  function jt(v) {
    return `${St === "horizontal" ? "translateX" : "translateY"}(${cn(v)})`;
  }
  function wr(v, re) {
    return It && v >= -yo && v < pt + yo ? v : v > be.length - 1 ? re === "ring" ? Vo(v, be.length) : be.length - 1 : v < 0 ? re === "ring" ? Vo(v, be.length) : 0 : v;
  }
  function Ar(v, re, d) {
    const j = wr(Oe[I] - v, re);
    dt(j, d);
  }
  function hr(v, re, d) {
    const j = wr(Oe[I] + v, re);
    dt(j, d);
  }
  function Fr() {
    Ne == null || Ne.destroy(), Ne = void 0, pe && (lt.unregisterInstance(pe), pe = void 0), Le.fakeElement || (Ne = Le.registerPager(Le.id || void 0)), Le.id && !Le.fakeElement && (pe = Le.id, lt.registerInstance(
      pe,
      {
        setCurrentItem(v, re) {
          if (v < 0 || v > Be.length - 1)
            throw new Error('Item is out of range in "set-current-item" action');
          Gt(v, re);
        },
        setPreviousItem: Ar,
        setNextItem: hr,
        scrollToStart(v) {
          Gt(be[It ? yo : 0].index, v);
        },
        scrollToEnd(v) {
          Gt(be[be.length - 1 - (It ? yo : 0)].index, v);
        },
        scrollCombined({ step: v, overflow: re, animated: d }) {
          v && Gt(wr(Oe[I] + v, re || "clamp"), d);
        }
      },
      "warn"
    ));
  }
  function Wr() {
    var re, d, j;
    return St === "horizontal" ? (d = (re = et.start) != null ? re : Q === "ltr" ? et.left : et.right) != null ? d : 0 : (j = et.top) != null ? j : 0;
  }
  function rr() {
    var re, d, j;
    return St === "horizontal" ? (d = (re = et.end) != null ? re : Q === "ltr" ? et.right : et.left) != null ? d : 0 : (j = et.bottom) != null ? j : 0;
  }
  function tt() {
    var re, d;
    return ge ? St === "horizontal" ? ((re = ge.parentElement) == null ? void 0 : re.offsetWidth) || 0 : ((d = ge.parentElement) == null ? void 0 : d.offsetHeight) || 0 : 0;
  }
  function Ct() {
    const v = St === "horizontal", re = Array.from(ge.children), d = re[0].getBoundingClientRect(), j = re[re.length - 1].getBoundingClientRect();
    return v ? Q === "rtl" ? d.right - j.left : j.right - d.left : j.bottom - d.top;
  }
  function Xt(v) {
    const re = v.target;
    if (!(re instanceof Element) || !ge)
      return;
    let d = re;
    for (; d.parentElement && d.parentElement !== ge; )
      d = d.parentElement;
    if (!d)
      return;
    const j = Array.from(ge.children).indexOf(d);
    if (j < 0)
      return;
    const Te = j - (It ? yo : 0);
    dt(Te, !0);
  }
  function Yt(v) {
    Date.now() - $t < 300 && (v.preventDefault(), v.stopImmediatePropagation());
  }
  function fr(v) {
    if (!lt.pagerMouseDragEnabled && v.pointerType === "mouse")
      return;
    const re = St === "horizontal", d = re ? v.pageX : v.pageY, j = kt, Te = tt() - Wr() - rr(), Re = Ct(), Pt = Date.now(), O = (ot) => {
      const Ge = re ? ot.pageX : ot.pageY;
      let Je = j + Ge - d;
      if (!It) {
        if (Q === "rtl") {
          if (Je < 0)
            Je = Je * Te / (Je + Te * 3);
          else if (Je + Te > Re) {
            let Wt = Je + Te - Re;
            Wt = Wt * Te / (Wt + Te * 3), Je = -Te + Re + Wt;
          }
        } else if (Q === "ltr") {
          if (Je > 0)
            Je = Je * Te / (Je + Te * 3);
          else if (-Je + Te > Re) {
            let Wt = -Je + Te - Re;
            Wt = Wt * Te / (Wt + Te * 3), Je = Te - Re - Wt;
          }
        }
      }
      kt = Je, e(55, or = jt(kt)), ot.preventDefault();
    }, Dt = (ot) => {
      Kt == null || Kt(), Kt = void 0;
      const Ge = Math.min(512, Te), Je = Math.abs(j - kt);
      if (Je < bm) {
        dt(Oe[I], !0);
        return;
      }
      ot.preventDefault(), $t = Date.now();
      const Wt = Math.min(1, (Date.now() - Pt) / 750);
      let br = Oe[I];
      Je > Ge / 4 * Wt && (br += (j > kt ? 1 : -1) * (Q === "rtl" ? -1 : 1)), It || (br >= be.length ? br = be.length - 1 : br < 0 && (br = 0)), dt(br, !0);
    };
    window.addEventListener("pointermove", O), window.addEventListener("pointerup", Dt), window.addEventListener("pointercancel", Dt), Kt == null || Kt(), Kt = () => {
      window.removeEventListener("pointermove", O), window.removeEventListener("pointerup", Dt), window.removeEventListener("pointercancel", Dt);
    };
  }
  function ct(v) {
    if (!v.deltaX || Math.abs(v.deltaX) < Math.abs(v.deltaY))
      return;
    const re = Date.now();
    if (re - yt < mm)
      return;
    yt = re, (Q === "rtl" ? -1 : 1) * v.deltaX > 0 ? hr(1, "clamp", !0) : Ar(1, "clamp", !0);
  }
  function te() {
    e(54, ur = !1), Me && Vn().then(() => {
      Gt(I, !1);
    });
  }
  function bt() {
    Vn().then(() => {
      Gt(I, !1);
    });
  }
  ro(() => {
    e(39, _t = !0), ge && Gt(I, !1);
  }), on(() => {
    e(39, _t = !1), Kt == null || Kt(), Be.forEach((v) => {
      v.destroy();
    }), pe && (lt.unregisterInstance(pe), pe = void 0), Ne == null || Ne.destroy(), Ne = void 0;
  });
  function nr(v) {
    Ir[v ? "unshift" : "push"](() => {
      ge = v, e(7, ge);
    });
  }
  const mr = () => (Q === "ltr" ? Ar : hr)(1, "clamp", !0), sr = () => (Q === "ltr" ? hr : Ar)(1, "clamp", !0);
  return t.$$set = (v) => {
    "componentContext" in v && e(0, Le = v.componentContext), "layoutParams" in v && e(1, st = v.layoutParams);
  }, t.$$.update = () => {
    var v, re, d, j, Te;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(58, n = Le.origJson), t.$$.dirty[1] & /*origJson*/
    134217728 && n && gr(), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(23, o = typeof ((v = Le.json.item_builder) == null ? void 0 : v.data) == "string" ? Le.getDerivedFromVars((re = Le.json.item_builder) == null ? void 0 : re.data, void 0, !0) : (d = Le.json.item_builder) != null && d.data ? $o(Le.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(22, i = Le.getDerivedFromVars(Le.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && ke(e(21, s = Le.getDerivedFromVars(Le.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(20, a = Le.getDerivedFromVars(Le.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(19, l = Le.getDerivedFromVars(Le.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(18, c = Le.getDerivedFromVars(Le.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(17, u = Le.getDerivedFromVars(Le.json.cross_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(16, f = Le.getDerivedFromVars(Le.json.scroll_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(15, _ = Le.getDerivedFromVars(Le.json.infinite_scroll))), t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$jsonInfiniteScroll*/
    64 && e(52, Ft = un(ie, Ft)), t.$$.dirty[0] & /*componentContext, items*/
    9 | t.$$.dirty[1] & /*prevContext*/
    1048576 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    32) {
      let Re = [];
      if (Le.json.item_builder && Array.isArray(_e) && Array.isArray(Le.json.item_builder.prototypes)) {
        const ot = Le.json.item_builder;
        Re = _l(_e, lt, Le, ot);
      } else
        Re = (Array.isArray(Le.json.items) && Le.json.items || []).map((ot, Ge) => ({
          div: ot,
          key: ot.id || { index: Ge, data: ot }
        }));
      const Pt = new Set(Be), O = /* @__PURE__ */ new Map();
      let Dt = !1;
      tr === Le && Be.forEach((ot) => {
        ot.key && (typeof ot.key == "string" && O.has(ot.key) ? Dt || (Dt = !0, Le.logError(Y(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: ot.key } }))) : O.set(
          typeof ot.key == "string" ? ot.key : ot.key.index,
          ot
        ));
      }), e(3, Be = Re.map((ot, Ge) => {
        let Je = !Dt && O.get(ot.id), Wt = O.get(Ge);
        return !Je && !ot.id && typeof ot.key == "object" && typeof (Wt == null ? void 0 : Wt.key) == "object" && Gi(Wt.key.data, ot.key.data) && (Je = Wt), Je ? (Pt.delete(Je), Je) : Le.produceChildContext(ot.div, {
          path: Ge,
          variables: ot.vars,
          id: ot.id,
          key: ot.key
        });
      }));
      for (const ot of Pt)
        ot.destroy();
      e(51, tr = Le);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    9) {
      let Re = [];
      Be.forEach((Pt) => {
        Re.push(Le.getDerivedFromVars({
          width: Pt.json.width,
          height: Pt.json.height,
          visibility: Pt.json.visibility
        }));
      }), Ae(e(8, je = Ui(Re, (Pt) => [...Pt])));
    }
    if (t.$$.dirty[0] & /*items, visibleItems*/
    24 | t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$childStore*/
    16) {
      if (e(50, Oe = {}), Qe = {}, e(4, be = rt.map((Re, Pt) => ({
        width: Re.width,
        height: Re.height,
        index: Pt,
        componentContext: Be[Pt]
      })).filter((Re, Pt) => rt[Pt].visibility !== "gone")), be.forEach((Re, Pt) => {
        Qe[Pt] = Re.index, e(50, Oe[Re.index] = Pt, Oe);
      }), e(49, pt = be.length), Ft && be.length >= yo) {
        const Re = be.slice(0, yo).map((O) => ({
          ...O,
          componentContext: O.componentContext.dup(ni),
          duplicate: !0
        })), Pt = be.slice(be.length - yo).map((O) => ({
          ...O,
          componentContext: O.componentContext.dup(ni),
          duplicate: !0
        }));
        Re.forEach((O, Dt) => {
          Qe[be.length + Dt] = Dt;
        }), Pt.forEach((O, Dt) => {
          Qe[Dt - yo] = be.length - yo + Dt;
        }), e(4, be = [].concat(Pt, be, Re)), e(53, It = !0);
      } else
        e(53, It = !1);
      bt();
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonLayoutMode*/
    1073741824 && (C ? C.type !== "percentage" && C.type !== "fixed" && C.type !== "wrap_content" ? (e(41, ft = !0), Le.logError(Y(new Error('Incorrect value of "layout_mode.type" for div "pager"')))) : e(41, ft = !1) : (e(41, ft = !0), Le.logError(Y(new Error('Empty "layout_mode" prop for div "pager"'))))), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[2] & /*$jsonOrientation*/
    8 && e(2, St = ma(qe, St)), t.$$.dirty[2] & /*$jsonItemSpacing*/
    4) {
      const Re = Ie == null ? void 0 : Ie.value;
      Re && Tn(Re) && e(42, Tt = cn(Re || 0));
    }
    if (t.$$.dirty[0] & /*$direction*/
    64 | t.$$.dirty[1] & /*paddingObj*/
    4096 | t.$$.dirty[2] & /*$jsonPaddings*/
    2 && (e(43, et = bi(Ce, et)), e(44, K = _o(et, Q))), t.$$.dirty[0] & /*orientation*/
    4 && e(57, h = St === "horizontal" ? "grid-auto-columns" : "grid-auto-rows"), t.$$.dirty[0] & /*orientation*/
    4 && e(56, m = St === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[2] & /*$jsonScrollAxisAlignment*/
    1 && (U === "start" || U === "center" || U === "end") && (e(48, he = U), bt()), t.$$.dirty[0] & /*orientation, $direction, visibleItems*/
    84 | t.$$.dirty[1] & /*paddingObj, $jsonLayoutMode, scrollAxisAlignment, itemSpacing*/
    1073879040) {
      const Re = cn(St === "horizontal" ? (et == null ? void 0 : et.start) || (Q === "ltr" ? et == null ? void 0 : et.left : et == null ? void 0 : et.right) || 0 : (et == null ? void 0 : et.top) || 0), Pt = cn(St === "horizontal" ? (et == null ? void 0 : et.end) || (Q === "ltr" ? et == null ? void 0 : et.right : et == null ? void 0 : et.left) || 0 : (et == null ? void 0 : et.bottom) || 0);
      if ((C == null ? void 0 : C.type) === "fixed") {
        const O = ((j = C.neighbour_page_width) == null ? void 0 : j.value) || 0;
        he === "center" ? e(45, At = `calc(100% + ${Re} + ${Pt} - 2 * ${cn(O)} - 2 * ${Tt})`) : he === "start" ? e(45, At = `calc(100% + ${Pt} - ${cn(O)} - ${Tt})`) : e(45, At = `calc(100% + ${Re} - ${cn(O)} - ${Tt})`), e(46, Mt = "");
      } else if ((C == null ? void 0 : C.type) === "percentage") {
        let O = (Te = C.page_width) == null ? void 0 : Te.value;
        (typeof O != "number" || O < 0) && (O = 100), e(45, At = `calc(${(O / 100).toFixed(2)} * (100% + ${Re} + ${Pt}))`), e(46, Mt = "");
      } else (C == null ? void 0 : C.type) === "wrap_content" && (e(45, At = ""), e(46, Mt = be.map((O) => {
        var Ge, Je;
        const Dt = O[St === "horizontal" ? "width" : "height"];
        if ((Dt == null ? void 0 : Dt.type) === "fixed" || (Dt == null ? void 0 : Dt.type) === "wrap_content")
          return "minmax(max-content, auto)";
        let ot = "100%";
        return (Dt == null ? void 0 : Dt.type) === "match_parent" && (Tn((Ge = Dt.max_size) == null ? void 0 : Ge.value) && (ot = `min(${ot}, ${cn(Dt.max_size.value)})`), Tn((Je = Dt.min_size) == null ? void 0 : Je.value) && (ot = `max(${ot}, ${cn(Dt.min_size.value)})`)), ot;
      }).join(" ")));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonCrossAxisAlignment, crossAxisAlignment*/
    536936448 && (T === "start" || T === "center" || T === "end") && (e(47, Jt = T), e(9, Zt = {
      [St === "horizontal" ? "parentVAlign" : "parentHAlign"]: Jt
    })), t.$$.dirty[1] & /*itemSpacing, padding, gridAutoSizeProp, autoSizeVal, gridTemplateSizeProp, templateSizeVal, transformStr*/
    117499904 && e(14, p = {
      "grid-gap": Tt,
      padding: K,
      [h]: At,
      [m]: Mt,
      transform: or
    }), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*animated, crossAxisAlignment, scrollAxisAlignment*/
    8585216 && e(13, k = {
      animated: ur,
      clip: lt.pagerChildrenClipEnabled,
      orientation: St,
      "cross-align": Jt,
      "scroll-align": he
    }), t.$$.dirty[1] & /*hasLayoutModeError*/
    1024 && e(5, w = ft), t.$$.dirty[0] & /*hasError*/
    32 | t.$$.dirty[1] & /*$isDesktop, mounted*/
    268435712 && e(12, z = ce && _t && !w), t.$$.dirty[0] & /*componentContext, items*/
    9 && Le.json) {
      const Re = Le.getJsonWithVars(Le.json.default_item);
      typeof Re == "number" && Re >= 0 && Re < Be.length && (e(40, I = vt = Re), Nt(Be.length, Re)), Fr();
    }
    t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(11, H = It || (Q === "ltr" ? Oe[I] > 0 : Oe[I] + 1 < be.length)), t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(10, L = It || (Q === "ltr" ? Oe[I] + 1 < be.length : Oe[I] > 0)), t.$$.dirty[1] & /*visibleItemsWithOutDuplicates, currentItem*/
    262656 && Nt(pt, I), t.$$.dirty[1] & /*currentItem*/
    512 && yr(I);
  }, [
    Le,
    st,
    St,
    Be,
    be,
    w,
    Q,
    ge,
    je,
    Zt,
    L,
    H,
    z,
    k,
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
    Xe,
    at,
    wt,
    nt,
    zt,
    ut,
    vr,
    Ar,
    hr,
    Xt,
    Yt,
    fr,
    ct,
    te,
    bt,
    _t,
    I,
    ft,
    Tt,
    et,
    K,
    At,
    Mt,
    Jt,
    he,
    pt,
    Oe,
    tr,
    Ft,
    It,
    ur,
    or,
    m,
    h,
    n,
    ce,
    T,
    C,
    U,
    Ce,
    Ie,
    qe,
    rt,
    _e,
    ie,
    nr,
    mr,
    sr
  ];
}
class wm extends Or {
  constructor(r) {
    super(), zr(this, r, ym, hm, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const km = "appkit-indicator", vm = "appkit-indicator_visible", jm = "appkit-indicator__scroller", Cm = "appkit-indicator__items", Em = "appkit-indicator__item", Am = "appkit-indicator_placement_default", Sm = "appkit-indicator__item_active", Vm = "appkit-indicator_direction_ltr", Fm = "appkit-indicator_direction_rtl", Im = "appkit-indicator_placement_stretch", ki = {
  indicator: km,
  indicator_visible: vm,
  indicator__scroller: jm,
  indicator__items: Cm,
  indicator__item: Em,
  indicator_placement_default: Am,
  indicator__item_active: Sm,
  indicator_direction_ltr: Vm,
  indicator_direction_rtl: Fm,
  indicator_placement_stretch: Im
};
function au(t, r, e) {
  const n = t.slice();
  n[43] = r[e], n[46] = e;
  const o = (
    /*index*/
    n[46] === /*pagerData*/
    n[8].currentItem
  );
  return n[44] = o, n;
}
function cu(t) {
  let r, e = ir(Array(
    /*pagerData*/
    t[8].size
  )), n = [];
  for (let o = 0; o < e.length; o += 1)
    n[o] = uu(au(t, e, o));
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      r = xt();
    },
    m(o, i) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(o, i);
      q(o, r, i);
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
          const a = au(o, e, s);
          n[s] ? n[s].p(a, i) : (n[s] = uu(a), n[s].c(), n[s].m(r.parentNode, r));
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
function uu(t) {
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
      r = Ve("div"), g(r, "class", e = mt("indicator__item", ki, { active: (
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
        We(r, "click", c),
        We(
          r,
          "keydown",
          /*onIndicatorItemKeydown*/
          t[22]
        )
      ], a = !0);
    },
    p(u, f) {
      t = u, f[0] & /*pagerData*/
      256 && e !== (e = mt("indicator__item", ki, { active: (
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
      u && J(r), a = !1, Rr(l);
    }
  };
}
function Dm(t) {
  let r, e, n = (
    /*pagerData*/
    t[8] && cu(t)
  );
  return {
    c() {
      r = Ve("div"), e = Ve("div"), n && n.c(), g(e, "class", ki.indicator__items), g(e, "role", "tablist"), D(
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
      ), g(r, "class", ki.indicator__scroller);
    },
    m(o, i) {
      q(o, r, i), ht(r, e), n && n.m(e, null), t[35](e), t[36](r);
    },
    p(o, i) {
      /*pagerData*/
      o[8] ? n ? n.p(o, i) : (n = cu(o), n.c(), n.m(e, null)) : n && (n.d(1), n = null), i[0] & /*placement, activeStyle, inactiveStyle*/
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
function Tm(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
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
      $$slots: { default: [Dm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = mt(
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
const Il = ["rounded_rectangle", "circle"];
function Mm(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p = A, k = () => (p(), p = V(u, (ge) => e(26, m = ge)), u), w, z = A, H = () => (z(), z = V(f, (ge) => e(27, w = ge)), f), L, Q = A, ce = () => (Q(), Q = V(i, (ge) => e(28, L = ge)), i), T, X = A, le = () => (X(), X = V(s, (ge) => e(29, T = ge)), s), C, M = A, N = () => (M(), M = V(o, (ge) => e(30, C = ge)), o), U, se = A, fe = () => (se(), se = V(a, (ge) => e(31, U = ge)), a), Ce, Ee = A, de = () => (Ee(), Ee = V(c, (ge) => e(32, Ce = ge)), c), Ie, ee = A, De = () => (ee(), ee = V(l, (ge) => e(33, Ie = ge)), l);
  t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => ee());
  let { componentContext: qe } = r, { layoutParams: Ke = void 0 } = r;
  const rt = Tr(Xr).direction;
  bn(t, rt, (ge) => e(25, h = ge));
  let ye = {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    background: "#ffdc60"
  }, Ae = {
    width: 10,
    height: 10,
    borderRadius: 5,
    background: "#33919cb5"
  }, _e = "default", x = 15, ue = 10, ie = 5, Fe, xe, Xe, ne, Ye = !1;
  function Le() {
    e(4, _e = "default"), e(5, x = 15), e(6, ue = 10), e(7, ie = 5), e(2, ye = {
      width: 13,
      height: 13,
      borderRadius: 6.5,
      background: "#ffdc60"
    }), e(3, Ae = {
      width: 10,
      height: 10,
      borderRadius: 5,
      background: "#33919cb5"
    });
  }
  async function st(ge) {
    if (e(8, Xe = ge), await Vn(), xe) {
      const _t = xe.children[Xe.currentItem];
      if (_t) {
        const je = _t.offsetLeft;
        Fe.scroll({
          left: je - Fe.clientWidth / 2,
          behavior: "smooth"
        });
      }
    }
  }
  function lt(ge) {
    ge !== Xe.currentItem && Xe.scrollToPagerItem(ge);
  }
  function at(ge) {
    if (ge.ctrlKey || ge.shiftKey || ge.altKey || ge.metaKey)
      return;
    const { size: _t, currentItem: je } = Xe;
    if (ge.which === Cd) {
      const I = je - 1 < 0 ? je : je - 1;
      wt(I);
    } else if (ge.which === Ed) {
      const I = je + 1 >= _t ? je : je + 1;
      wt(I);
    } else if (ge.which === Ad)
      wt(0);
    else if (ge.which === Sd)
      wt(_t - 1);
    else
      return;
    ge.preventDefault();
  }
  async function wt(ge) {
    Xe.scrollToPagerItem(ge), await Vn();
    const _t = xe.querySelector(`.${ki.indicator__item_active}`);
    _t && _t.focus();
  }
  function nt() {
    ne == null || ne(), ne = void 0;
    const ge = qe.json.pager_id;
    ne = qe.listenPager(ge, st);
  }
  ro(() => {
    e(23, Ye = !0);
  }), on(() => {
    e(23, Ye = !1), ne == null || ne(), ne = void 0;
  });
  const zt = (ge) => lt(ge);
  function ut(ge) {
    Ir[ge ? "unshift" : "push"](() => {
      xe = ge, e(10, xe);
    });
  }
  function pe(ge) {
    Ir[ge ? "unshift" : "push"](() => {
      Fe = ge, e(9, Fe);
    });
  }
  return t.$$set = (ge) => {
    "componentContext" in ge && e(0, qe = ge.componentContext), "layoutParams" in ge && e(1, Ke = ge.layoutParams);
  }, t.$$.update = () => {
    var ge, _t;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(24, n = qe.origJson), t.$$.dirty[0] & /*origJson*/
    16777216 && n && Le(), t.$$.dirty[0] & /*origJson, mounted*/
    25165824 && n && Ye && nt(), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(19, o = qe.getDerivedFromVars(qe.json.shape))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(18, i = qe.getDerivedFromVars(qe.json.active_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(17, s = qe.getDerivedFromVars(qe.json.inactive_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(16, a = qe.getDerivedFromVars(qe.json.active_item_size))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(15, l = qe.getDerivedFromVars(qe.json.active_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(14, c = qe.getDerivedFromVars(qe.json.inactive_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && k(e(13, u = qe.getDerivedFromVars(qe.json.space_between_centers))), t.$$.dirty[0] & /*componentContext*/
    1 && H(e(12, f = qe.getDerivedFromVars(qe.json.items_placement))), t.$$.dirty[0] & /*activeStyle, inactiveStyle, $jsonShape, $jsonInactiveItemColor, $jsonActiveItemColor*/
    1879048204 | t.$$.dirty[1] & /*$jsonActiveShape, $jsonInactiveShape, $jsonActiveItemSize*/
    7 && (Ie && e(2, ye = ao(
      {
        type: "shape_drawable",
        shape: Ie
      },
      Il,
      ye
    )), Ce && e(3, Ae = ao(
      {
        type: "shape_drawable",
        shape: Ce
      },
      Il,
      Ae
    )), !Ie && !Ce && C)) {
      const je = Hn(U, 1.3);
      e(3, Ae = ao(
        {
          type: "shape_drawable",
          shape: C,
          color: Ae.background
        },
        Il,
        Ae
      )), e(3, Ae.background = dr(T, 1, Ae.background), Ae), e(2, ye = {
        ...Ae,
        width: Ae.width * je,
        height: Ae.height * je,
        borderRadius: Ae.borderRadius * je,
        background: ye.background
      }), e(2, ye.background = dr(L, 1, ye.background), ye);
    }
    if (t.$$.dirty[0] & /*$jsonItemsPlacement, placement, spaceBetweenCenters, maxVisibleItems, itemSpacing, $jsonSpaceBetweenCenters*/
    201326832)
      if (w && (w.type === "default" || w.type === "stretch")) {
        if (e(4, _e = w.type), _e === "default")
          e(5, x = tn((ge = w.space_between_centers) == null ? void 0 : ge.value, x));
        else if (_e === "stretch") {
          const je = w;
          e(6, ue = Hn(je.max_visible_items, ue)), e(7, ie = tn((_t = je.item_spacing) == null ? void 0 : _t.value, ie));
        }
      } else
        e(4, _e = "default"), m && e(5, x = tn(m.value, x));
    t.$$.dirty[0] & /*placement, $direction, pagerData*/
    33554704 && e(11, _ = {
      placement: _e,
      direction: h,
      visible: (Xe == null ? void 0 : Xe.size) > 1
    });
  }, [
    qe,
    Ke,
    ye,
    Ae,
    _e,
    x,
    ue,
    ie,
    Xe,
    Fe,
    xe,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    rt,
    lt,
    at,
    Ye,
    n,
    h,
    m,
    w,
    L,
    T,
    C,
    U,
    Ce,
    Ie,
    zt,
    ut,
    pe
  ];
}
class Pm extends Or {
  constructor(r) {
    super(), zr(this, r, Mm, Tm, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Nm = "appkit-slider", zm = "appkit-slider__input", Om = "appkit-slider__input_secondary", Lm = "appkit-slider__thumb", Rm = "appkit-slider_direction_rtl", Bm = "appkit-slider__thumb_secondary", Hm = "appkit-slider__track", Wm = "appkit-slider__tick", Um = "appkit-slider__tick_active", Gm = "appkit-slider__tick_inactive", Br = {
  slider: Nm,
  slider__input: zm,
  slider__input_secondary: Om,
  slider__thumb: Lm,
  slider_direction_rtl: Rm,
  slider__thumb_secondary: Bm,
  "slider__tracks-wrapper": "appkit-slider__tracks-wrapper",
  "slider__tracks-inner": "appkit-slider__tracks-inner",
  "slider__tracks-ranges": "appkit-slider__tracks-ranges",
  "slider__tracks-ranges_rtl": "appkit-slider__tracks-ranges_rtl",
  slider__track: Hm,
  "slider__thumb-text": "appkit-slider__thumb-text",
  "slider__thumb-text_secondary": "appkit-slider__thumb-text_secondary",
  slider__tick: Wm,
  slider__tick_active: Um,
  slider__tick_inactive: Gm
};
function fu(t, r, e) {
  var a, l;
  if (!t || !t.font_size)
    return e;
  const n = t.offset, o = t.text_color && dr(t.text_color) || "#000", i = yi(t.font_weight, t.font_weight_value, void 0), s = Ri(t.font_variation_settings) || void 0;
  if (Wn(t.font_size) && o !== "transparent") {
    const c = {
      fontSize: ae(t.font_size),
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
function ya(t) {
  return BigInt(t);
}
const as = ya("9223372036854775807"), cs = ya("-9223372036854775808");
function _n(t) {
  const r = ya(t);
  if (r > as || r < cs)
    throw new Error("Integer overflow.");
  return r;
}
const vi = _n(0);
function Pd(t) {
  let r = t;
  return r < 0 && (r = -r), r;
}
function Nd(t) {
  let r = 0;
  return t > 0 ? r = 1 : t < 0 && (r = -1), _n(r);
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
const Jm = 2147483647, qm = -2147483648, Ym = Number.MAX_VALUE, Km = Number.MIN_VALUE, He = "string", Pe = "integer", gt = "number", Hr = "boolean", fn = "color", eo = "url", Pr = "datetime", lr = "dict", ar = "array", Xm = "function";
class wa extends Error {
}
function Ys(t) {
  return t.type === "url" || t.type === "color" ? {
    type: "string",
    value: t.value
  } : t;
}
function zd(t) {
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
      return zd(t.value);
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
function dn(t) {
  let r = Ci(t, !1);
  return t.type === "string" && (r = "'" + r.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'"), r;
}
function Zn(t) {
  return t === "datetime" ? "DateTime" : t.charAt(0).toUpperCase() + t.substring(1);
}
function Ei(t, r) {
  return _n(r);
}
function Pn(t, r) {
  if (r < cs || r > as)
    throw new Error("Integer overflow.");
}
function go(t) {
  if (typeof t != "string")
    throw new Error("Incorrect url value.");
  try {
    new URL(t);
  } catch {
    throw new Error("Incorrect url value.");
  }
}
function Zm(t) {
  try {
    return go(t), !0;
  } catch {
    return !1;
  }
}
function Qm(t) {
  const r = /* @__PURE__ */ new Set();
  return no(t, {
    Variable(e) {
      r.add(e.id.name);
    }
  }), [...r];
}
function Sn(t, r) {
  throw new wa(`Failed to evaluate [${t}]. ${r}`);
}
function xm(t, r) {
  throw new Error(r);
}
function gl(t) {
  const r = fo(t);
  if (r)
    return r;
  throw new Error("Unable to convert value to Color, expected format #AARRGGBB.");
}
function Ai(t) {
  return `#${[t.a, t.r, t.g, t.b].map((r) => {
    if (r < 0 || r > 255)
      throw new Error("Value out of range 0..1.");
    return pd(Math.round(r).toString(16), 2);
  }).join("").toUpperCase()}`;
}
function oi(t) {
  return Ai(gl(t));
}
function Gl(t) {
  return {
    type: gt,
    value: Number(t.value)
  };
}
const $m = {
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
  const n = $m[e];
  let o = typeof r;
  if (n === "array" && !Array.isArray(r) || n !== "array" && o !== n || o === "object" && r === null)
    throw o === "object" && (Array.isArray(r) ? o = "array" : r === null ? o = "null" : o = "dict"), new Error(`Incorrect value type: expected ${Zn(e)}, got ${Zn(o)}.`);
  if (n === "number" && e === "integer") {
    t && Pn(t, r);
    try {
      r = _n(r);
    } catch {
      throw new Error("Cannot convert value to integer.");
    }
  }
  return n === "string" && e === "color" && (r = oi(r)), n === "string" && e === "url" && go(r), n === "boolean" && e === Hr && (r = r ? 1 : 0), {
    type: e,
    value: r
  };
}
function e1(t) {
  return t.type === "number" || t.type === "integer" ? Number(t.value) : t.type === "boolean" ? !!t.value : t.value;
}
function ml(t) {
  return e1(
    hl(void 0, t.value, t.type)
  );
}
class qo {
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
class Od extends qo {
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
class Ld extends qo {
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
class Rd extends qo {
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
class Bd extends qo {
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
class Hd extends qo {
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
class Wd extends qo {
  convertValue(r) {
    if (typeof r != "string")
      throw new Error("Incorrect variable value");
    return go(r), r;
  }
  fromString(r) {
    return go(r), r;
  }
  getType() {
    return "url";
  }
}
class Ud extends qo {
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
class Gd extends qo {
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
  integer: Ld,
  boolean: Bd,
  color: Hd,
  url: Wd,
  dict: Ud,
  array: Gd
};
function io(t, r, e) {
  if (!(r in Jl))
    throw new Error("Unsupported variable type");
  return new Jl[r](t, e);
}
function t1() {
}
function r1(t) {
  return t(this.value), t1;
}
function du() {
  throw new Error("Cannot change the value of this type of variable");
}
class n1 extends Od {
}
class o1 extends Rd {
}
class i1 extends Ld {
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
class f1 extends qo {
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
  string: n1,
  number: o1,
  integer: i1,
  boolean: s1,
  color: l1,
  url: a1,
  dict: c1,
  array: u1,
  datetime: f1
};
for (const t in Ks) {
  const r = Ks[t];
  r.prototype.subscribe = r1, r.prototype.set = du, r.prototype.setValue = du;
}
function Es(t, r, e) {
  if (!(r in Ks))
    throw new Error("Unsupported variable type");
  return new Ks[r](t, e);
}
function d1(t) {
  const r = t.getType();
  let e = t.getValue();
  return r === Hr && (e = e ? 1 : 0), {
    type: r,
    value: e
  };
}
function _1(t, r) {
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
    return oi(t);
  } else if (r === "url") {
    if (typeof t != "string")
      throw new Error("Incorrect variable value");
    return go(t), t;
  } else if (r === "dict" || r === "array")
    try {
      return JSON.parse(t);
    } catch {
      throw new Error("Incorrect dict value");
    }
  throw new Error(`Unexpected type ${r}`);
}
function _u(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function pu(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function gu(t, r, e) {
  const n = t.slice();
  return n[90] = r[e], n;
}
function p1(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function g1(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt(
        "slider",
        Br,
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
          h1,
          ({ focusHandler: n, blurHandler: o }) => ({ 83: n, 84: o }),
          ({ focusHandler: n, blurHandler: o }) => [0, 0, (n ? 2097152 : 0) | (o ? 4194304 : 0)]
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      16777216 && (i.cls = mt(
        "slider",
        Br,
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function hu(t) {
  let r;
  return {
    c() {
      r = Ve("div"), g(r, "class", Br.slider__track), D(
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
function mu(t) {
  let r;
  return {
    c() {
      r = Ve("div"), g(r, "class", Br.slider__tick + " " + Br.slider__tick_active), D(
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
function bu(t) {
  let r;
  return {
    c() {
      r = Ve("div"), g(r, "class", Br.slider__tick + " " + Br.slider__tick_inactive), D(
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
function yu(t) {
  let r, e, n;
  return {
    c() {
      var o, i, s, a, l;
      r = Ve("div"), e = Ve("div"), n = Mn(
        /*value*/
        t[11]
      ), g(e, "class", Br["slider__thumb-text-inner"]), D(
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
      ), g(r, "class", Br["slider__thumb-text"]);
    },
    m(o, i) {
      q(o, r, i), ht(r, e), ht(e, n);
    },
    p(o, i) {
      var s, a, l, c, u;
      i[0] & /*value*/
      2048 && Xn(
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
        ((c = o[7]) == null ? void 0 : c.fontVariationSettings) || ""
      ), i[0] & /*textStyle*/
      128 && D(
        e,
        "color",
        /*textStyle*/
        ((u = o[7]) == null ? void 0 : u.textColor) || "#000"
      );
    },
    d(o) {
      o && J(r);
    }
  };
}
function wu(t) {
  let r, e = (
    /*textSecondaryStyle*/
    t[8] && ku(t)
  );
  return {
    c() {
      r = Ve("div"), e && e.c(), g(r, "class", Br.slider__thumb + " " + Br.slider__thumb_secondary), D(r, "border-radius", ae(
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
      n[8] ? e ? e.p(n, o) : (e = ku(n), e.c(), e.m(r, null)) : e && (e.d(1), e = null), o[0] & /*thumbSecondaryStyle*/
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
function ku(t) {
  let r, e, n;
  return {
    c() {
      var o, i, s, a, l;
      r = Ve("div"), e = Ve("div"), n = Mn(
        /*value2*/
        t[12]
      ), g(e, "class", Br["slider__thumb-text-inner"]), D(
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
      ), g(r, "class", Br["slider__thumb-text"] + " " + Br["slider__thumb-text_secondary"]);
    },
    m(o, i) {
      q(o, r, i), ht(r, e), ht(e, n);
    },
    p(o, i) {
      var s, a, l, c, u;
      i[0] & /*value2*/
      4096 && Xn(
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
        ((c = o[8]) == null ? void 0 : c.fontVariationSettings) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && D(
        e,
        "color",
        /*textSecondaryStyle*/
        ((u = o[8]) == null ? void 0 : u.textColor) || "#000"
      );
    },
    d(o) {
      o && J(r);
    }
  };
}
function vu(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Ve("input"), g(r, "type", "range"), g(r, "class", e = /*switchedTracks*/
      t[16] ? Br.slider__input : `${Br.slider__input} ${Br.slider__input_secondary}`), g(
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
        We(
          r,
          "input",
          /*input_handler_1*/
          t[75]
        ),
        We(r, "mousedown", function() {
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
        We(r, "touchstart", function() {
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
        We(r, "focus", function() {
          Nr(
            /*focusHandler*/
            t[83]
          ) && t[83].apply(this, arguments);
        }),
        We(r, "blur", function() {
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
      t[16] ? Br.slider__input : `${Br.slider__input} ${Br.slider__input_secondary}`) && g(r, "class", e), l[0] & /*minValue*/
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
      a && J(r), i = !1, Rr(s);
    }
  };
}
function h1(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, h, m, p, k, w, z = ir(
    /*renderRanges*/
    t[21]
  ), H = [];
  for (let M = 0; M < z.length; M += 1)
    H[M] = hu(gu(t, z, M));
  let L = ir(
    /*markActiveTicks*/
    t[17]
  ), Q = [];
  for (let M = 0; M < L.length; M += 1)
    Q[M] = mu(pu(t, L, M));
  let ce = ir(
    /*markInactiveTicks*/
    t[18]
  ), T = [];
  for (let M = 0; M < ce.length; M += 1)
    T[M] = bu(_u(t, ce, M));
  let X = (
    /*textStyle*/
    t[7] && yu(t)
  ), le = (
    /*secondVariable*/
    t[13] && wu(t)
  ), C = (
    /*secondVariable*/
    t[13] && vu(t)
  );
  return {
    c() {
      r = Ve("div"), e = Ve("div"), n = Ve("div");
      for (let M = 0; M < H.length; M += 1)
        H[M].c();
      i = cr();
      for (let M = 0; M < Q.length; M += 1)
        Q[M].c();
      s = cr();
      for (let M = 0; M < T.length; M += 1)
        T[M].c();
      a = cr(), l = Ve("div"), X && X.c(), c = cr(), le && le.c(), u = cr(), f = Ve("input"), p = cr(), C && C.c(), g(n, "class", o = Br["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Br["slider__tracks-ranges_rtl"] : "")), g(l, "class", Br.slider__thumb), D(l, "border-radius", ae(
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
      t[16] ? `${Br.slider__input} ${Br.slider__input_secondary}` : Br.slider__input), g(
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
      ), g(e, "class", Br["slider__tracks-inner"]), g(r, "class", Br["slider__tracks-wrapper"]);
    },
    m(M, N) {
      q(M, r, N), ht(r, e), ht(e, n);
      for (let U = 0; U < H.length; U += 1)
        H[U] && H[U].m(n, null);
      ht(e, i);
      for (let U = 0; U < Q.length; U += 1)
        Q[U] && Q[U].m(e, null);
      ht(e, s);
      for (let U = 0; U < T.length; U += 1)
        T[U] && T[U].m(e, null);
      ht(e, a), ht(e, l), X && X.m(l, null), ht(e, c), le && le.m(e, null), ht(e, u), ht(e, f), t[74](f), ht(e, p), C && C.m(e, null), t[76](e), k || (w = [
        We(
          f,
          "input",
          /*input_handler*/
          t[73]
        ),
        We(f, "focus", function() {
          Nr(
            /*focusHandler*/
            t[83]
          ) && t[83].apply(this, arguments);
        }),
        We(f, "blur", function() {
          Nr(
            /*blurHandler*/
            t[84]
          ) && t[84].apply(this, arguments);
        })
      ], k = !0);
    },
    p(M, N) {
      if (t = M, N[0] & /*renderRanges*/
      2097152) {
        z = ir(
          /*renderRanges*/
          t[21]
        );
        let U;
        for (U = 0; U < z.length; U += 1) {
          const se = gu(t, z, U);
          H[U] ? H[U].p(se, N) : (H[U] = hu(se), H[U].c(), H[U].m(n, null));
        }
        for (; U < H.length; U += 1)
          H[U].d(1);
        H.length = z.length;
      }
      if (N[0] & /*$direction*/
      16384 && o !== (o = Br["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Br["slider__tracks-ranges_rtl"] : "")) && g(n, "class", o), N[0] & /*markActiveTicks*/
      131072) {
        L = ir(
          /*markActiveTicks*/
          t[17]
        );
        let U;
        for (U = 0; U < L.length; U += 1) {
          const se = pu(t, L, U);
          Q[U] ? Q[U].p(se, N) : (Q[U] = mu(se), Q[U].c(), Q[U].m(e, s));
        }
        for (; U < Q.length; U += 1)
          Q[U].d(1);
        Q.length = L.length;
      }
      if (N[0] & /*markInactiveTicks*/
      262144) {
        ce = ir(
          /*markInactiveTicks*/
          t[18]
        );
        let U;
        for (U = 0; U < ce.length; U += 1) {
          const se = _u(t, ce, U);
          T[U] ? T[U].p(se, N) : (T[U] = bu(se), T[U].c(), T[U].m(e, a));
        }
        for (; U < T.length; U += 1)
          T[U].d(1);
        T.length = ce.length;
      }
      /*textStyle*/
      t[7] ? X ? X.p(t, N) : (X = yu(t), X.c(), X.m(l, null)) : X && (X.d(1), X = null), N[0] & /*thumbStyle*/
      32 && D(l, "border-radius", ae(
        /*thumbStyle*/
        t[5].borderRadius
      )), N[0] & /*thumbStyle*/
      32 && D(
        l,
        "background",
        /*thumbStyle*/
        t[5].background
      ), N[0] & /*thumbStyle*/
      32 && D(
        l,
        "box-shadow",
        /*thumbStyle*/
        t[5].boxShadow || ""
      ), /*secondVariable*/
      t[13] ? le ? le.p(t, N) : (le = wu(t), le.c(), le.m(e, u)) : le && (le.d(1), le = null), N[0] & /*switchedTracks*/
      65536 && _ !== (_ = /*switchedTracks*/
      t[16] ? `${Br.slider__input} ${Br.slider__input_secondary}` : Br.slider__input) && g(f, "class", _), N[0] & /*minValue*/
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
      t[13] ? C ? C.p(t, N) : (C = vu(t), C.c(), C.m(e, null)) : C && (C.d(1), C = null);
    },
    d(M) {
      M && J(r), nn(H, M), nn(Q, M), nn(T, M), X && X.d(), le && le.d(), t[74](null), C && C.d(), t[76](null), k = !1, Rr(w);
    }
  };
}
function m1(t) {
  let r, e, n, o, i, s;
  const a = [g1, p1], l = [];
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
      ~r && l[r].m(u, f), q(u, n, f), o = !0, i || (s = We(
        window,
        "resize",
        /*checkTicksDebounced*/
        t[43]
      ), i = !0);
    },
    p(u, f) {
      let _ = r;
      r = c(u), r === _ ? ~r && l[r].p(u, f) : (e && (_r(), $(l[_], 1, 1, () => {
        l[_] = null;
      }), pr()), ~r ? (e = l[r], e ? e.p(u, f) : (e = l[r] = a[r](u), e.c()), W(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(u) {
      o || (W(e), o = !0);
    },
    o(u) {
      $(e), o = !1;
    },
    d(u) {
      u && J(n), ~r && l[r].d(u), i = !1, s();
    }
  };
}
const $n = {
  width: 10,
  height: 10,
  borderRadius: 5,
  background: "#000"
}, ps = ["rounded_rectangle", "circle"], Dl = ["rounded_rectangle"];
function gs(t, r, e, n, o) {
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
function b1(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, k, w, z, H, L, Q, ce, T, X, le, C, M, N, U, se, fe, Ce = A, Ee = () => (Ce(), Ce = V(Q, (v) => e(57, fe = v)), Q), de, Ie = A, ee = () => (Ie(), Ie = V(H, (v) => e(58, de = v)), H), De, qe = A, Ke = () => (qe(), qe = V(L, (v) => e(59, De = v)), L), ke, rt = A, ye = () => (rt(), rt = V(z, (v) => e(60, ke = v)), z), Ae, _e = A, x = () => (_e(), _e = V(w, (v) => e(61, Ae = v)), w), ue, ie = A, Fe = () => (ie(), ie = V(k, (v) => e(62, ue = v)), k), xe, Xe = A, ne = () => (Xe(), Xe = V(p, (v) => e(63, xe = v)), p), Ye, Le = A, st = () => (Le(), Le = V(m, (v) => e(64, Ye = v)), m), lt, at = A, wt = () => (at(), at = V(h, (v) => e(65, lt = v)), h), nt, zt = A, ut = () => (zt(), zt = V(_, (v) => e(66, nt = v)), _), pe, ge = A, _t = () => (ge(), ge = V(f, (v) => e(67, pe = v)), f), je, I = A, vt = () => (I(), I = V(u, (v) => e(68, je = v)), u), ft, St = A, Tt = () => (St(), St = V(a, (v) => e(69, ft = v)), a), et, K = A, At = () => (K(), K = V(s, (v) => e(70, et = v)), s), Mt, Zt = A, Jt = () => (Zt(), Zt = V(c, (v) => e(71, Mt = v)), c), he, Be = A, pt = () => (Be(), Be = V(l, (v) => e(72, he = v)), l);
  t.$$.on_destroy.push(() => Ce()), t.$$.on_destroy.push(() => Ie()), t.$$.on_destroy.push(() => qe()), t.$$.on_destroy.push(() => rt()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => ie()), t.$$.on_destroy.push(() => Xe()), t.$$.on_destroy.push(() => Le()), t.$$.on_destroy.push(() => at()), t.$$.on_destroy.push(() => zt()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => St()), t.$$.on_destroy.push(() => K()), t.$$.on_destroy.push(() => Zt()), t.$$.on_destroy.push(() => Be());
  let { componentContext: be } = r, { layoutParams: Qe = void 0 } = r;
  const Oe = Tr(Xr), tr = Tr(To), Ne = Oe.direction;
  bn(t, Ne, (v) => e(14, se = v));
  let yt, Ft, It, ur = !1, Me = 0, kt = 100, or = $n, $t = or, Kt = $n, gr = $n, vr, Nt = null, yr, G = null, dt, Gt = dt, jt = "", wr = "", Ar = !0, hr = !1, Fr = [];
  function Wr() {
    e(5, or = $n), e(6, $t = or), e(45, Kt = $n), e(46, gr = $n), e(47, Nt = null), e(48, G = null), e(7, dt = void 0), e(8, Gt = void 0), e(19, jt = ""), e(9, Ar = !0), e(20, wr = "");
  }
  let rr = Fo(et || 0, Me, kt), tt = Fo(ft || 0, Me, kt);
  function Ct({ direction: v, minValue: re, maxValue: d, trackActiveOffset: j, trackActivePart: Te, trackInactiveStyle: Re, trackActiveStyle: Pt, ranges: O = [] }) {
    const Dt = [], ot = (Je, Wt, br) => {
      var sn, Zr, ve, pn;
      const qr = (Qr, gn, y, E) => {
        var R, Ze, Se, qt;
        const S = Math.max(Qr, Wt);
        if (Math.min(gn, br) - S > 0) {
          const Vt = E && (Ze = (R = E[v === "ltr" ? "start" : "end"]) != null ? R : E.left) != null ? Ze : 0, ze = E && (qt = (Se = E[v === "ltr" ? "end" : "start"]) != null ? Se : E.right) != null ? qt : 0;
          Dt.push({
            left: Qr,
            right: gn,
            totalLeft: Wt,
            totalRight: br,
            leftMargin: Vt,
            rightMargin: ze,
            style: y
          });
        }
      };
      if ((!O[0] || ((sn = O[0].start) != null ? sn : re) > Wt) && qr(Wt, O[0] ? (Zr = O[0].start) != null ? Zr : re : br, Je === "inactive" ? Re : Pt), O.forEach((Qr, gn) => {
        var qt, Vt, ze, Qt;
        const y = Qr[Je === "inactive" ? "track_inactive_style" : "track_active_style"], S = y ? ao(y, Dl, $n) : Je === "inactive" ? Re : Pt, oe = O[gn - 1], R = O[gn + 1], Ze = (Vt = (qt = Qr.start) != null ? qt : oe == null ? void 0 : oe.end) != null ? Vt : Wt, Se = (Qt = (ze = Qr.end) != null ? ze : R == null ? void 0 : R.start) != null ? Qt : br;
        qr(Ze, Se, S, Qr.margins);
      }), O[O.length - 1] && ((ve = O[O.length - 1].end) != null ? ve : d) < br) {
        const Qr = (pn = O[O.length - 1].end) != null ? pn : d;
        qr(Qr, br, Je === "inactive" ? Re : Pt);
      }
    };
    ot("inactive", re, d), ot("active", j, j + Te);
    const Ge = d - re;
    e(21, Fr = Dt.map((Je) => {
      let Wt = `${(Je.left - re) * 100 / Ge}%`;
      Je.leftMargin && (Wt = `calc(${Wt} + ${cn(Je.leftMargin)})`);
      let br;
      Je.totalLeft < Je.left ? br = Wt : Je.leftMargin ? br = `max(${(Je.totalLeft - re) * 100 / Ge}%, ${Wt})` : br = `${(Math.max(Je.totalLeft, Je.left) - re) * 100 / Ge}%`;
      let qr = `${(1 - (Je.right - re) / Ge) * 100}%`;
      Je.rightMargin && (qr = `calc(${qr} + ${cn(Je.rightMargin)})`);
      let sn;
      return Je.totalRight > Je.right ? sn = qr : Je.rightMargin ? sn = `max(${(1 - (Je.totalRight - re) / Ge) * 100}%, ${qr})` : sn = `${(1 - (Math.max(Je.totalRight, Je.right) - re) / Ge) * 100}%`, {
        left: br,
        right: sn,
        height: ae(Je.style.height),
        borderRadius: ae(Je.style.borderRadius),
        background: Je.style.background,
        boxShadow: Je.style.boxShadow || ""
      };
    }));
  }
  function Xt(v) {
    var O, Dt;
    if (!Ar)
      return;
    const re = "pageX" in v ? v.pageX : (Dt = (O = v.changedTouches) == null ? void 0 : O[0]) == null ? void 0 : Dt.pageX;
    if (re === void 0)
      return;
    const d = It.getBoundingClientRect();
    let j = (re - d.left) / d.width;
    se === "rtl" && (j = 1 - j);
    const Te = Me + (kt - Me) * j, Re = Math.round(Fo(Te, Me, kt)), Pt = (rr + tt) / 2;
    e(16, ur = Re < Pt == rr < tt);
  }
  function Yt(v, re) {
    const d = Number(v.target.value);
    ur === (re === "first") ? (e(12, tt = d), a.setValue(d)) : (e(11, rr = d), s.setValue(d));
  }
  let fr = !1;
  function ct() {
    if (!It)
      return;
    const v = kt - Me, re = (Nt == null ? void 0 : Nt.width) || 0, d = (G == null ? void 0 : G.width) || 0;
    Math.max(re, d) * v >= (It == null ? void 0 : It.clientWidth) ? fr || (be.logError(Y(new Error("Slider ticks overlap each other"), { level: "warn" })), fr = !0) : fr = !1;
  }
  const te = ha(ct, 50);
  ro(() => {
    ct();
  }), on(() => {
    yt && (Oe.unregisterFocusable(yt), e(44, yt = void 0));
  });
  const bt = (v) => Yt(v, "first");
  function nr(v) {
    Ir[v ? "unshift" : "push"](() => {
      Ft = v, e(2, Ft);
    });
  }
  const mr = (v) => Yt(v, "second");
  function sr(v) {
    Ir[v ? "unshift" : "push"](() => {
      It = v, e(15, It);
    });
  }
  return t.$$set = (v) => {
    "componentContext" in v && e(0, be = v.componentContext), "layoutParams" in v && e(1, Qe = v.layoutParams);
  }, t.$$.update = () => {
    var v, re, d, j;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(56, n = be.origJson), t.$$.dirty[1] & /*origJson*/
    33554432 && n && Wr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, o = be.json.thumb_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(13, i = be.json.thumb_secondary_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*firstVariable*/
    16777216 && At(e(22, s = o && (be.getVariable(o, "integer") || Oe.awaitGlobalVariable(o, "integer", 0)) || io("temp", "integer", 0))), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 && Tt(e(23, a = i && (be.getVariable(i, "integer") || Oe.awaitGlobalVariable(i, "integer", 0)) || io("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && pt(e(39, l = be.getDerivedFromVars(be.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Jt(e(38, c = be.getDerivedFromVars(be.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && vt(e(37, u = be.getDerivedFromVars(be.json.thumb_style))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(36, f = be.getDerivedFromVars(be.json.thumb_secondary_style))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(35, _ = be.getDerivedFromVars(be.json.track_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && wt(e(34, h = be.getDerivedFromVars(be.json.track_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(33, m = be.getDerivedFromVars(be.json.tick_mark_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(32, p = be.getDerivedFromVars(be.json.tick_mark_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && Fe(e(31, k = be.getDerivedFromVars(be.json.thumb_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && x(e(30, w = be.getDerivedFromVars(be.json.thumb_secondary_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && ye(e(29, z = be.getDerivedFromVars(be.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && ee(e(28, H = be.getDerivedFromVars(be.json.secondary_value_accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Ke(e(27, L = be.getDerivedFromVars(be.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(26, Q = be.getDerivedFromVars(be.json.ranges))), t.$$.dirty[0] & /*minValue, maxValue*/
    24 | t.$$.dirty[2] & /*$jsonMinValue, $jsonMaxValue*/
    1536 && (e(3, Me = oo(he, Me)), e(4, kt = oo(Mt, kt)), ct()), t.$$.dirty[0] & /*minValue, maxValue, value*/
    2072 | t.$$.dirty[2] & /*$valueVariable*/
    256) {
      const Te = Fo(et || 0, Me, kt);
      Te !== rr && e(11, rr = Te);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue, value2*/
    4120 | t.$$.dirty[2] & /*$value2Variable*/
    128) {
      const Te = Fo(ft || 0, Me, kt);
      Te !== tt && e(12, tt = Te);
    }
    if (t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbStyle*/
    64 && e(5, or = ao(je, ps, or)), t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbSecondaryStyle*/
    32 && e(6, $t = ao(pe, ps, or)), t.$$.dirty[1] & /*trackInactiveStyle*/
    16384 | t.$$.dirty[2] & /*$jsonTrackInactiveStyle*/
    16 && e(45, Kt = ao(nt, Dl, Kt)), t.$$.dirty[1] & /*trackActiveStyle*/
    32768 | t.$$.dirty[2] & /*$jsonTrackActiveStyle*/
    8 && e(46, gr = ao(lt, Dl, gr)), t.$$.dirty[2] & /*$jsonMarkActiveStyle*/
    4) {
      let Te = ao(Ye, ps, $n);
      Te !== $n && e(47, Nt = Te);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markActiveStyle*/
    65536 && (Nt ? (e(17, vr = i ? gs(Math.min(rr, tt), Math.max(rr, tt) + 1, Me, kt, !0) : gs(Me, rr, Me, kt, !0)), ct()) : e(17, vr = [])), t.$$.dirty[2] & /*$jsonMarkInactiveStyle*/
    2) {
      let Te = ao(xe, ps, $n);
      Te !== $n && e(48, G = Te);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markInactiveStyle*/
    131072 && (G ? (e(18, yr = i ? gs(Math.min(rr, tt), Math.max(rr, tt) + 1, Me, kt, !1) : gs(rr + 1, kt + 1, Me, kt, !0)), ct()) : e(18, yr = [])), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[2] & /*$jsonTextStyle*/
    1 && e(7, dt = fu(ue, Oe.typefaceProvider, dt)), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[1] & /*$jsonSecondaryTextStyle*/
    1073741824 && e(8, Gt = fu(Ae, Oe.typefaceProvider, dt)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    536870912 && (ke != null && ke.description ? e(19, jt = ri(ke)) : be.logError(Y(new Error('Missing accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    512 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    268435456 && e(9, Ar = un(De, Ar)), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 | t.$$.dirty[1] & /*$jsonSecondaryAccessibility*/
    134217728 && (de != null && de.description ? e(20, wr = ri(de)) : i && be.logError(Y(new Error('Missing second accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext, thumbStyle, hasError*/
    1057 | t.$$.dirty[1] & /*trackActiveStyle, trackInactiveStyle*/
    49152) {
      let Te = !1;
      tr.hasAction() ? (be.logError(Y(new Error('Cannot show "slider" inside component with an action or inside accessibility mode=exclude'))), Te = !0) : or === $n ? (be.logError(Y(new Error('Missing "thumb_style" in slider'))), Te = !0) : gr === $n ? (be.logError(Y(new Error('Missing "track_active_style" in slider'))), Te = !0) : Kt === $n && (be.logError(Y(new Error('Missing "track_inactive_style" in slider'))), Te = !0), Te !== hr && e(10, hr = Te);
    }
    t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(52, ce = ae(Math.max(...[or.width, $t.width, 0].filter(Tn)))), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(51, T = ae(Math.max(...[or.height, $t.height, 0].filter(Tn)))), t.$$.dirty[0] & /*value, minValue, maxValue*/
    2072 && e(50, X = (rr - Me) / (kt - Me)), t.$$.dirty[0] & /*secondVariable, value2, minValue, maxValue*/
    12312 && e(49, le = i ? (tt - Me) / (kt - Me) : void 0), t.$$.dirty[0] & /*value, value2, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(54, C = le !== void 0 ? Math.min(rr, tt) : Me), t.$$.dirty[0] & /*value2, value, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(53, M = le !== void 0 ? Math.abs(tt - rr) : rr - Me), t.$$.dirty[0] & /*$direction, minValue, maxValue*/
    16408 | t.$$.dirty[1] & /*trackActiveOffset, trackActivePart, trackInactiveStyle, trackActiveStyle, $jsonRanges*/
    79740928 && Ct({
      direction: se,
      minValue: Me,
      maxValue: kt,
      trackActiveOffset: C,
      trackActivePart: M,
      trackInactiveStyle: Kt,
      trackActiveStyle: gr,
      ranges: fe
    }), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle, textStyle, textSecondaryStyle*/
    480 | t.$$.dirty[1] & /*markActiveStyle, markInactiveStyle, maxThumbWidth, maxThumbHeight, trackPart, trackSecondaryPart*/
    4128768 && e(25, N = {
      "--divkit-slider-thumb-width": ae(or.width),
      "--divkit-slider-thumb-height": ae(or.height),
      "--divkit-slider-thumb-secondary-width": ae($t.width),
      "--divkit-slider-thumb-secondary-height": ae($t.height),
      "--divkit-slider-text-offset-x": (v = dt == null ? void 0 : dt.offset) != null && v.x ? cn(dt.offset.x) : void 0,
      "--divkit-slider-text-offset-y": (re = dt == null ? void 0 : dt.offset) != null && re.y ? cn(dt.offset.y) : void 0,
      "--divkit-slider-text-secondary-offset-x": (d = Gt == null ? void 0 : Gt.offset) != null && d.x ? cn(Gt.offset.x) : void 0,
      "--divkit-slider-text-secondary-offset-y": (j = Gt == null ? void 0 : Gt.offset) != null && j.y ? cn(Gt.offset.y) : void 0,
      "--divkit-slider-tick-active-width": Nt ? ae(Nt.width) : void 0,
      "--divkit-slider-tick-active-height": Nt ? ae(Nt.height) : void 0,
      "--divkit-slider-tick-active-border-radius": Nt ? ae(Nt.borderRadius) : void 0,
      "--divkit-slider-tick-active-background": (Nt == null ? void 0 : Nt.background) || void 0,
      "--divkit-slider-tick-active-box-shadow": (Nt == null ? void 0 : Nt.boxShadow) || void 0,
      "--divkit-slider-tick-inactive-width": G ? ae(G.width) : void 0,
      "--divkit-slider-tick-inactive-height": G ? ae(G.height) : void 0,
      "--divkit-slider-tick-inactive-border-radius": G ? ae(G.borderRadius) : void 0,
      "--divkit-slider-tick-inactive-background": (G == null ? void 0 : G.background) || void 0,
      "--divkit-slider-tick-inactive-box-shadow": (G == null ? void 0 : G.boxShadow) || void 0,
      "--divkit-slider-max-thumb-width": ce,
      "--divkit-slider-max-thumb-height": T,
      "--divkit-slider-track-part": X,
      "--divkit-slider-track-secondary-part": le
    }), t.$$.dirty[0] & /*$direction*/
    16384 && e(24, U = { direction: se }), t.$$.dirty[0] & /*componentContext, input*/
    5 | t.$$.dirty[1] & /*prevId*/
    8192 && be.json && Ft && (yt && (Oe.unregisterFocusable(yt), e(44, yt = void 0)), be.id && !be.fakeElement && (e(44, yt = be.id), Oe.registerFocusable(yt, {
      focus() {
        Ft && Ft.focus();
      }
    })));
  }, [
    be,
    Qe,
    Ft,
    Me,
    kt,
    or,
    $t,
    dt,
    Gt,
    Ar,
    hr,
    rr,
    tt,
    i,
    se,
    It,
    ur,
    vr,
    yr,
    jt,
    wr,
    Fr,
    s,
    a,
    U,
    N,
    Q,
    L,
    H,
    z,
    w,
    k,
    p,
    m,
    h,
    _,
    f,
    u,
    c,
    l,
    Ne,
    Xt,
    Yt,
    te,
    yt,
    Kt,
    gr,
    Nt,
    G,
    le,
    X,
    T,
    ce,
    M,
    C,
    o,
    n,
    fe,
    de,
    De,
    ke,
    Ae,
    ue,
    xe,
    Ye,
    lt,
    nt,
    pe,
    je,
    ft,
    et,
    Mt,
    he,
    bt,
    nr,
    mr,
    sr
  ];
}
class y1 extends Or {
  constructor(r) {
    super(), zr(this, r, b1, m1, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const w1 = "appkit-input", k1 = "appkit-input__aligner", v1 = "appkit-input__input", j1 = "appkit-input__placeholder", C1 = "appkit-input__input_singleline", E1 = "appkit-input__input_multiline", Po = {
  input: w1,
  "input_alignment-horizontal_center": "appkit-input_alignment-horizontal_center",
  "input_alignment-horizontal_end": "appkit-input_alignment-horizontal_end",
  input__aligner: k1,
  input__input: v1,
  input__placeholder: j1,
  "input_alignment-vertical_start": "appkit-input_alignment-vertical_start",
  "input_alignment-vertical_end": "appkit-input_alignment-vertical_end",
  "input_alignment-vertical_baseline": "appkit-input_alignment-vertical_baseline",
  "input_highlight-color": "appkit-input_highlight-color",
  input__input_singleline: C1,
  "input__scroll-wrapper": "appkit-input__scroll-wrapper",
  input__input_multiline: E1,
  "input__input_has-custom-focus": "appkit-input__input_has-custom-focus"
};
function us(t, r) {
  if (t === r)
    return {
      start: t.length,
      added: 0,
      removed: 0
    };
  if (t.length > r.length) {
    const i = us(r, t);
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
class ju {
  constructor(r) {
    this.char = r;
  }
}
class wo {
  constructor(r, e, n) {
    this.char = r, this.filter = e, this.placeholder = n;
  }
}
class ka {
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
      if (n instanceof ju)
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
      ) : new ju(o);
    }), n !== null && this.overrideRawValue(n);
  }
  overrideRawValue(r) {
    this.clearRange(0, this.destructedValue.length), this.replaceChars(r, 0), this.cursorPos = Math.min(this.cursorPos, this.value.length);
  }
  applyChangeFrom(r, e) {
    const n = us(this.value, r);
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
class A1 extends ka {
  constructor(r, e) {
    super(r), this.logError = e;
  }
  onException(r) {
    this.logError(r);
  }
}
function S1(t, r, e) {
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
    return e ? (e.updateMaskData(n), e) : new A1(n, r);
  }
  return e || null;
}
class V1 extends ka {
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
    const o = us(this.value, e), i = this.value.lastIndexOf(this.decimalSeparator), s = e.lastIndexOf(this.decimalSeparator), a = i !== s || i === -1 && s === -1, l = this.validFormat(e, o);
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
function F1(t, r, e) {
  return e ? (e.updateCurrencyParams(t.locale), e) : new V1(t.locale, r);
}
const Jd = 3;
function ql(t) {
  const r = t.textContent;
  let e = 0;
  return typeof r == "string" && (e += r.length, t instanceof HTMLElement && (t.tagName === "DIV" || t.tagName === "BR") && ++e), e;
}
function Cu(t, r) {
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
      for (let l = 0, c = Math.min(n, s.childNodes.length); l < c; ++l)
        a += ql(s.childNodes[l]);
      n = a;
    }
    for (; s && s !== t; ) {
      const a = s.parentNode;
      if (!a)
        return 0;
      const l = Array.from(a.childNodes).indexOf(s);
      for (let c = 0; c < l; ++c) {
        const u = a.childNodes[c];
        n += ql(u);
      }
      s instanceof HTMLElement && (s.tagName === "DIV" && ((e = a.childNodes[l - 1]) == null ? void 0 : e.nodeType) === Jd || s.tagName === "BR") && ++n, s = a;
    }
    return n;
  } catch {
    return 0;
  }
}
function Yl(t, r, e, n) {
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
    const s = t.childNodes[o], a = ql(s);
    if (n <= a) {
      Yl(s, r, e, n);
      return;
    }
    n -= a;
  }
}
const I1 = {
  kotlin: {
    public_default_values: !0
  },
  swift: {
    public_default_values: !0
  }
}, D1 = {
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
}, T1 = "object", M1 = {
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
  codegen: I1,
  constants: D1,
  type: T1,
  properties: M1
}, P1 = "000000000000000", Eu = "*", N1 = "00", Au = [{
  key: "0",
  filter: "\\d",
  placeholder: "_"
}];
class z1 extends ka {
  constructor(e) {
    super({
      pattern: Vu(""),
      decoding: Au,
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
    const o = us(this.value, e);
    n !== void 0 && (o.start = Math.max(0, n - o.added));
    const i = this.rawValue, s = this.replaceBodyTail(o, e), a = this.rawValue, l = this.newMaskPatternFor(a);
    if (l == null) {
      this.calculateCursorPosition(o, s);
      return;
    }
    this.updateMaskDataWith(l), this.replaceChars(a, 0);
    const c = us(i, a), u = c.start + c.added;
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
    const n = Vu(e), o = this.maskData.pattern;
    return n !== o ? n : null;
  }
  updateMaskDataWith(e) {
    return this.updateMaskData({
      pattern: e,
      decoding: Au,
      alwaysVisible: this.maskData.alwaysVisible
    }, !1);
  }
  onException(e) {
    this.logError(e);
  }
}
function Su(t) {
  return "$ref" in t ? qd.constants[t.$ref.split("/").pop()] : t;
}
function Vu(t) {
  if (!t)
    return P1;
  let r = qd.properties.value.default_value, e = 0;
  for (; !("value" in r); ) {
    if (e >= t.length) {
      r = Su(r[Eu]);
      break;
    }
    const n = t[e++];
    r = Su(r[n in r ? n : Eu]);
  }
  return r.value + N1;
}
function O1(t, r) {
  return r || new z1(t);
}
function L1(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function R1(t) {
  let r, e;
  return r = new yn({
    props: {
      alwaysCustomFocus: !0,
      cls: mt(
        "input",
        Po,
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
          G1,
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
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      1048576 && (i.cls = mt(
        "input",
        Po,
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function B1(t) {
  let r, e, n, o, i, s, a, l, c;
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
      ), g(r, "class", e = mt("input__input", Po, {
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
    m(u, f) {
      q(u, r, f), t[106](r), l || (c = [
        We(
          r,
          "input",
          /*onInput*/
          t[49]
        ),
        We(
          r,
          "keydown",
          /*onKeyDown*/
          t[51]
        ),
        We(r, "mousedown", function() {
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
        We(r, "click", function() {
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
        We(r, "focus", function() {
          Nr(
            /*focusHandler*/
            t[123]
          ) && t[123].apply(this, arguments);
        }),
        We(r, "blur", function() {
          Nr(
            /*blurHandler*/
            t[124]
          ) && t[124].apply(this, arguments);
        })
      ], l = !0);
    },
    p(u, f) {
      t = u, f[0] & /*inputType*/
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
      2 && e !== (e = mt("input__input", Po, {
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
    d(u) {
      u && J(r), t[106](null), l = !1, Rr(c);
    }
  };
}
function H1(t) {
  let r, e, n, o, i, s, a = !/*contentEditableValue*/
  t[9] && /*placeholder*/
  t[21] && Fu(t);
  function l(f, _) {
    return (
      /*isEnabled*/
      f[5] ? U1 : W1
    );
  }
  let c = l(t), u = c(t);
  return {
    c() {
      r = Ve("span"), a && a.c(), e = cr(), n = Ve("span"), o = Mn("​"), s = cr(), u.c(), g(n, "class", Po.input__aligner), g(n, "aria-hidden", "true"), g(n, "style", i = er(
        /*verticalPaddingStl*/
        t[17]
      )), g(r, "class", Po["input__scroll-wrapper"]);
    },
    m(f, _) {
      q(f, r, _), a && a.m(r, null), ht(r, e), ht(r, n), ht(n, o), ht(r, s), u.m(r, null);
    },
    p(f, _) {
      !/*contentEditableValue*/
      f[9] && /*placeholder*/
      f[21] ? a ? a.p(f, _) : (a = Fu(f), a.c(), a.m(r, e)) : a && (a.d(1), a = null), _[0] & /*verticalPaddingStl*/
      131072 && i !== (i = er(
        /*verticalPaddingStl*/
        f[17]
      )) && g(n, "style", i), c === (c = l(f)) && u ? u.p(f, _) : (u.d(1), u = c(f), u && (u.c(), u.m(r, null)));
    },
    d(f) {
      f && J(r), a && a.d(), u.d();
    }
  };
}
function Fu(t) {
  let r, e, n;
  return {
    c() {
      r = Ve("div"), e = Mn(
        /*placeholder*/
        t[21]
      ), g(r, "class", Po.input__placeholder), g(r, "aria-hidden", "true"), g(r, "style", n = er(
        /*paddingStl*/
        t[18]
      ));
    },
    m(o, i) {
      q(o, r, i), ht(r, e);
    },
    p(o, i) {
      i[0] & /*placeholder*/
      2097152 && Xn(
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
function W1(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Ve("span"), g(r, "class", mt("input__input", Po, { multiline: !0 })), g(
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
      t[9]), o || (i = We(
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
function U1(t) {
  let r, e, n, o, i, s, a;
  return {
    c() {
      r = Ve("span"), g(r, "class", e = mt("input__input", Po, {
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
    m(l, c) {
      q(l, r, c), t[102](r), /*contentEditableValue*/
      t[9] !== void 0 && (r.innerText = /*contentEditableValue*/
      t[9]), s || (a = [
        We(
          r,
          "input",
          /*span_input_handler*/
          t[103]
        ),
        We(
          r,
          "input",
          /*onInput*/
          t[49]
        ),
        We(
          r,
          "keydown",
          /*blockOverflow*/
          t[50]
        ),
        We(
          r,
          "keydown",
          /*onKeyDown*/
          t[51]
        ),
        We(r, "paste", K1),
        We(r, "mousedown", function() {
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
        We(r, "click", function() {
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
        We(r, "focus", function() {
          Nr(
            /*focusHandler*/
            t[123]
          ) && t[123].apply(this, arguments);
        }),
        We(r, "blur", function() {
          Nr(
            /*blurHandler*/
            t[124]
          ) && t[124].apply(this, arguments);
        })
      ], s = !0);
    },
    p(l, c) {
      t = l, c[4] & /*hasCustomFocus*/
      2 && e !== (e = mt("input__input", Po, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[125]
        ),
        multiline: !0
      })) && g(r, "class", e), c[0] & /*autocapitalization*/
      8192 && g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[13]
      ), c[0] & /*description*/
      4096 && g(
        r,
        "aria-label",
        /*description*/
        t[12]
      ), c[0] & /*enterKeyType*/
      16384 && n !== (n = /*enterKeyType*/
      t[14] === "default" ? void 0 : (
        /*enterKeyType*/
        t[14]
      )) && g(r, "enterkeyhint", n), c[0] & /*describedBy*/
      32768 && o !== (o = /*describedBy*/
      t[15] || void 0) && g(r, "aria-describedby", o), c[0] & /*paddingStl*/
      262144 && i !== (i = er(
        /*paddingStl*/
        t[18]
      )) && g(r, "style", i), c[0] & /*contentEditableValue*/
      512 && /*contentEditableValue*/
      t[9] !== r.innerText && (r.innerText = /*contentEditableValue*/
      t[9]);
    },
    d(l) {
      l && J(r), t[102](null), s = !1, Rr(a);
    }
  };
}
function G1(t) {
  let r;
  function e(i, s) {
    return (
      /*isMultiline*/
      i[8] ? H1 : B1
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = xt();
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
function J1(t) {
  let r, e, n, o;
  const i = [R1, L1], s = [];
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
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (_r(), $(s[u], 1, 1, () => {
        s[u] = null;
      }), pr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), W(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (W(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
const q1 = typeof document < "u" && "inputMode" in document.createElement("input"), Iu = {
  email: "email",
  number: "number",
  phone: "tel",
  single_line_text: "text",
  multi_line_text: "text",
  uri: "url",
  password: "password"
}, Y1 = /* @__PURE__ */ new Set([
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
function K1(t) {
  if (t.preventDefault(), t.clipboardData) {
    let r = t.clipboardData.getData("text/plain");
    r = r.trim(), document.execCommand("inserttext", !1, r);
  }
}
function X1(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, k, w, z, H, L, Q, ce, T, X, le, C, M, N, U, se, fe, Ce, Ee, de, Ie, ee, De, qe, Ke, ke = A, rt = () => (ke(), ke = V(s, (Ue) => e(76, Ke = Ue)), s), ye, Ae = A, _e = () => (Ae(), Ae = V(a, (Ue) => e(77, ye = Ue)), a), x, ue = A, ie = () => (ue(), ue = V(Ce, (Ue) => e(111, x = Ue)), Ce), Fe, xe = A, Xe = () => (xe(), xe = V(se, (Ue) => e(78, Fe = Ue)), se), ne, Ye = A, Le = () => (Ye(), Ye = V(le, (Ue) => e(79, ne = Ue)), le), st, lt = A, at = () => (lt(), lt = V(U, (Ue) => e(80, st = Ue)), U), wt, nt, zt = A, ut = () => (zt(), zt = V(X, (Ue) => e(82, nt = Ue)), X), pe, ge = A, _t = () => (ge(), ge = V(T, (Ue) => e(83, pe = Ue)), T), je, I = A, vt = () => (I(), I = V(ce, (Ue) => e(84, je = Ue)), ce), ft, St = A, Tt = () => (St(), St = V(Q, (Ue) => e(85, ft = Ue)), Q), et, K = A, At = () => (K(), K = V(N, (Ue) => e(86, et = Ue)), N), Mt, Zt = A, Jt = () => (Zt(), Zt = V(M, (Ue) => e(87, Mt = Ue)), M), he, Be = A, pt = () => (Be(), Be = V(L, (Ue) => e(88, he = Ue)), L), be, Qe = A, Oe = () => (Qe(), Qe = V(H, (Ue) => e(89, be = Ue)), H), tr, Ne = A, yt = () => (Ne(), Ne = V(z, (Ue) => e(90, tr = Ue)), z), Ft, It = A, ur = () => (It(), It = V(w, (Ue) => e(91, Ft = Ue)), w), Me, kt = A, or = () => (kt(), kt = V(k, (Ue) => e(92, Me = Ue)), k), $t, Kt = A, gr = () => (Kt(), Kt = V(p, (Ue) => e(93, $t = Ue)), p), vr, Nt = A, yr = () => (Nt(), Nt = V(m, (Ue) => e(94, vr = Ue)), m), G, dt = A, Gt = () => (dt(), dt = V(h, (Ue) => e(95, G = Ue)), h), jt, wr = A, Ar = () => (wr(), wr = V(_, (Ue) => e(96, jt = Ue)), _), hr, Fr = A, Wr = () => (Fr(), Fr = V(f, (Ue) => e(97, hr = Ue)), f), rr, tt = A, Ct = () => (tt(), tt = V(u, (Ue) => e(98, rr = Ue)), u), Xt, Yt = A, fr = () => (Yt(), Yt = V(c, (Ue) => e(99, Xt = Ue)), c), ct, te = A, bt = () => (te(), te = V(l, (Ue) => e(100, ct = Ue)), l), nr, mr = A, sr = () => (mr(), mr = V(fe, (Ue) => e(101, nr = Ue)), fe), v, re = A, d = () => (re(), re = V(C, (Ue) => e(47, v = Ue)), C);
  t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => lt()), t.$$.on_destroy.push(() => zt()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => St()), t.$$.on_destroy.push(() => K()), t.$$.on_destroy.push(() => Zt()), t.$$.on_destroy.push(() => Be()), t.$$.on_destroy.push(() => Qe()), t.$$.on_destroy.push(() => Ne()), t.$$.on_destroy.push(() => It()), t.$$.on_destroy.push(() => kt()), t.$$.on_destroy.push(() => Kt()), t.$$.on_destroy.push(() => Nt()), t.$$.on_destroy.push(() => dt()), t.$$.on_destroy.push(() => wr()), t.$$.on_destroy.push(() => Fr()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => Yt()), t.$$.on_destroy.push(() => te()), t.$$.on_destroy.push(() => mr()), t.$$.on_destroy.push(() => re());
  let { componentContext: j } = r, { layoutParams: Te = void 0 } = r;
  const Re = Tr(Xr), Pt = Tr(To), O = Re.direction;
  bn(t, O, (Ue) => e(81, wt = Ue));
  let Dt, ot, Ge = !1, Je = null, Wt = "", br = "", qr = !1, sn = "", Zr = 12, ve, pn = "", Qr = "", gn, y = "", E = "#000", S = "", oe = "start", R = "center", Ze = "multi_line_text", Se = "text", qt, Vt = "", ze = null, Qt = "", Et = "", Sr = "", jr = !0, Gr = 1 / 0, xr = "off", wn = "default", hn = "", jn = !1, xn = !0, Un = 0, Gn = 0;
  function Ut() {
    e(56, sn = ""), e(57, Zr = 12), e(58, ve = void 0), e(59, pn = ""), e(60, Qr = ""), e(61, gn = void 0), e(63, E = "#000"), e(64, S = ""), e(65, oe = "left"), e(66, R = "center"), e(67, Ze = "multi_line_text"), e(10, Se = "text"), e(11, qt = void 0), e(5, jr = !0), e(6, Gr = 1 / 0), e(13, xr = "off"), e(14, wn = "default"), e(15, hn = ""), Un = 0, Gn = 0;
  }
  function b(Ue) {
    (Ue == null ? void 0 : Ue.type) === "fixed_length" ? e(55, Je = S1(Ue, j.logError, Je)) : (Ue == null ? void 0 : Ue.type) === "currency" ? e(55, Je = F1(Ue, j.logError, Je)) : (Ue == null ? void 0 : Ue.type) === "phone" && e(55, Je = O1(j.logError, Je)), Je && ho();
  }
  function F(Ue) {
    if (!Array.isArray(x))
      return !0;
    for (const kr of x)
      if (kr) {
        if (kr.type === "regex")
          try {
            if (!new RegExp("^" + (kr.pattern || "") + "$").test(Ue))
              return !1;
          } catch (Mr) {
            return j.logError(Y(new Error("Failed to create a regex"), {
              additional: { originalError: String(Mr) }
            })), !0;
          }
        else if (kr.type === "expression" && !kr.condition)
          return !1;
      }
    return !0;
  }
  function Z(Ue) {
    const kr = Ue.target;
    let Mr = (de ? kr.innerText : kr.value) || "";
    Mr === `
` && (Mr = ""), Mr.length > Gr && (Mr = e(9, br = Wt), kr instanceof HTMLInputElement && (kr.value = Mr)), Wt !== Mr && (F(Mr) ? (e(3, Wt = e(9, br = Mr)), s.setValue(Mr), Je && Jr(), Jn()) : (e(3, Wt = e(9, br = Mr)), kr instanceof HTMLInputElement && (kr.value = Mr), Vn().then(() => {
      Dr(Un, Gn);
    })));
  }
  function P(Ue) {
    Wt.length >= Gr && !Y1.has(Ue.key) && !(Ue.ctrlKey || Ue.altKey || Ue.metaKey) && Ue.preventDefault();
  }
  function we(Ue) {
    if (Un = Lt() || 0, Gn = Ur() || 0, Ue.ctrlKey || Ue.metaKey || Ue.altKey || Ue.shiftKey)
      return;
    const kr = j.json.enter_key_actions;
    Ue.key === "Enter" && Array.isArray(kr) && kr.length && (Ue.preventDefault(), j.execAnyActions(kr));
  }
  function me() {
    Ge = !1, setTimeout(
      () => {
        Ge = !0;
      },
      250
    );
  }
  function Ot() {
    if (!Ge)
      if (ot instanceof HTMLInputElement)
        ot.select();
      else {
        const Ue = window.getSelection(), kr = document.createRange();
        kr.selectNodeContents(ot), Ue && (Ue.removeAllRanges(), Ue.addRange(kr));
      }
  }
  function Lt() {
    return ot instanceof HTMLInputElement ? ot.selectionStart === null ? void 0 : ot.selectionStart : Cu(ot, "start");
  }
  function Ur() {
    return ot instanceof HTMLInputElement ? ot.selectionEnd === null ? void 0 : ot.selectionEnd : Cu(ot, "end");
  }
  function Dr(Ue, kr) {
    if (ot instanceof HTMLInputElement)
      e(2, ot.selectionStart = Ue, ot), e(2, ot.selectionEnd = kr, ot);
    else {
      const Mr = window.getSelection();
      if (Mr) {
        Mr.removeAllRanges();
        const mo = document.createRange();
        Yl(ot, mo, "start", Ue), Yl(ot, mo, "end", kr), Mr.addRange(mo);
      }
    }
  }
  async function Jr() {
    if (!ot || !Je)
      return;
    const Ue = Lt() || 0, kr = Ur() || 0;
    Je.applyChangeFrom(Wt, kr === Ue ? kr : 0), a.set(Je.rawValue), wl(s, Ke = e(3, Wt = e(9, br = Je.value)), Ke);
    const Mr = Je.cursorPosition;
    await Vn(), document.activeElement === ot && Dr(Mr, Mr);
  }
  async function ho() {
    if (!ot || !Je)
      return;
    Je.overrideRawValue(ye), a.set(Je.rawValue), wl(s, Ke = e(3, Wt = e(9, br = Je.value)), Ke);
    const Ue = Je.cursorPosition;
    await Vn(), document.activeElement === ot && Dr(Ue, Ue);
  }
  function Jn() {
    const Ue = xn;
    xn = !1;
    const kr = j.json.validators;
    if (!Array.isArray(kr) || !kr.length)
      return;
    const mo = j.getJsonWithVars(kr).filter((En) => (En.type === "regex" || En.type === "expression") && En.label_id && En.variable), Co = [];
    mo.forEach((En) => {
      const Yi = j.getVariable(En.variable);
      if (!Yi)
        return;
      if (Yi.getType() !== "boolean") {
        Ue && j.logError(Y(new Error("Incorrect variable type for the validator"), {
          additional: { variable: En.variable }
        }));
        return;
      }
      let ci = !1;
      if (Wt === "" && (En.allow_empty === !0 || En.allow_empty === 1))
        ci = !0;
      else if (En.type === "regex") {
        if (!En.pattern || typeof En.pattern != "string")
          return;
        try {
          ci = new RegExp("^" + En.pattern + "$").test(Wt);
        } catch {
          Ue && j.logError(Y(new Error("Failed to create a regular expression using the validator pattern"), {
            additional: { pattern: En.pattern }
          }));
          return;
        }
      } else if (En.type === "expression")
        ci = En.condition === !0 || En.condition === 1;
      else
        return;
      if (Yi.setValue(ci), !ci) {
        const Si = Re.getComponentId(En.label_id);
        Si && Co.push(Si);
      }
    }), e(15, hn = Co.join(" "));
  }
  ro(() => {
    e(72, jn = !0), ot && Je && ye && (Je.overrideRawValue(ye), wl(s, Ke = e(3, Wt = e(9, br = Je.value)), Ke));
  }), on(() => {
    e(72, jn = !1), Dt && (Re.unregisterFocusable(Dt), e(54, Dt = void 0));
  });
  function so(Ue) {
    Ir[Ue ? "unshift" : "push"](() => {
      ot = Ue, e(2, ot);
    });
  }
  function Fn() {
    br = this.innerText, e(9, br), e(55, Je), e(3, Wt), e(76, Ke), e(6, Gr), e(7, s), e(86, et), e(73, o), e(0, j);
  }
  function Yo(Ue) {
    Ir[Ue ? "unshift" : "push"](() => {
      ot = Ue, e(2, ot);
    });
  }
  function Lo() {
    br = this.innerText, e(9, br), e(55, Je), e(3, Wt), e(76, Ke), e(6, Gr), e(7, s), e(86, et), e(73, o), e(0, j);
  }
  function Ko(Ue) {
    Ir[Ue ? "unshift" : "push"](() => {
      ot = Ue, e(2, ot);
    });
  }
  return t.$$set = (Ue) => {
    "componentContext" in Ue && e(0, j = Ue.componentContext), "layoutParams" in Ue && e(1, Te = Ue.layoutParams);
  }, t.$$.update = () => {
    var Ue;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(75, n = j.origJson), t.$$.dirty[2] & /*origJson*/
    8192 && n && Ut(), t.$$.dirty[0] & /*componentContext*/
    1 && e(73, o = j.json.text_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(74, i = (Ue = j.json.mask) == null ? void 0 : Ue.raw_text_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*variable*/
    2048 && rt(e(7, s = o && (j.getVariable(o, "string") || Re.awaitGlobalVariable(o, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*rawVariable*/
    4096 && _e(e(16, a = i && (j.getVariable(i, "string") || Re.awaitGlobalVariable(i, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && bt(e(46, l = j.getDerivedFromVars(j.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && fr(e(45, c = j.getDerivedFromVars(j.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ct(e(44, u = j.getDerivedFromVars(j.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && Wr(e(43, f = j.getDerivedFromVars(j.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && Ar(e(42, _ = j.getDerivedFromVars(j.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Gt(e(41, h = j.getDerivedFromVars(j.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && yr(e(40, m = j.getDerivedFromVars(j.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && gr(e(39, p = j.getDerivedFromVars(j.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && or(e(38, k = j.getDerivedFromVars(j.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && ur(e(37, w = j.getDerivedFromVars(j.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && yt(e(36, z = j.getDerivedFromVars(j.json.highlight_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(35, H = j.getDerivedFromVars(j.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && pt(e(34, L = j.getDerivedFromVars(j.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Tt(e(33, Q = j.getDerivedFromVars(j.json.keyboard_type))), t.$$.dirty[0] & /*componentContext*/
    1 && vt(e(32, ce = j.getDerivedFromVars(j.json.mask))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(31, T = j.getDerivedFromVars(j.json.max_visible_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(30, X = j.getDerivedFromVars(j.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(29, le = j.getDerivedFromVars(j.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && d(e(28, C = j.getDerivedFromVars(j.json.select_all_on_focus))), t.$$.dirty[0] & /*componentContext*/
    1 && Jt(e(27, M = j.getDerivedFromVars(j.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && At(e(26, N = j.getDerivedFromVars(j.json.max_length))), t.$$.dirty[0] & /*componentContext*/
    1 && at(e(25, U = j.getDerivedFromVars(j.json.autocapitalization))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(24, se = j.getDerivedFromVars(j.json.enter_key_type))), t.$$.dirty[0] & /*componentContext*/
    1 && sr(e(23, fe = j.getDerivedFromVars(j.json.validators))), t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(22, Ce = j.getDerivedFromVars(j.json.filters))), t.$$.dirty[0] & /*componentContext, hasError*/
    17 | t.$$.dirty[2] & /*variable, $jsonAccessibility*/
    133120) {
      let kr = !1;
      o ? (Pt.hasAction() || (ne == null ? void 0 : ne.mode) === "exclude") && (kr = !0, j.logError(Y(new Error('Cannot show "input" inside component with an action or inside accessibility mode=exclude')))) : (e(4, qr = !0), j.logError(Y(new Error('Missing "text_variable" in "input"')))), qr !== kr && e(4, qr = kr);
    }
    if (t.$$.dirty[2] & /*$jsonMask*/
    4194304 && b(je), t.$$.dirty[0] & /*maxLength*/
    64 | t.$$.dirty[2] & /*$jsonMaxLength*/
    16777216 && e(6, Gr = Hn(et, Gr)), t.$$.dirty[0] & /*value, maxLength, valueVariable*/
    200 | t.$$.dirty[1] & /*inputMask*/
    16777216 | t.$$.dirty[2] & /*$valueVariable*/
    16384 && !Je && Wt !== Ke) {
      let kr = Ke;
      kr.length > Gr && (kr = kr.slice(0, Gr), s.setValue(kr)), e(3, Wt = e(9, br = kr)), Jn();
    }
    if (t.$$.dirty[1] & /*inputMask*/
    16777216 | t.$$.dirty[2] & /*$rawValueVariable*/
    32768 && Je && Je.rawValue !== ye && (ho(), Jn()), t.$$.dirty[2] & /*mounted*/
    1024 | t.$$.dirty[3] & /*$jsonValidators*/
    256 && nr && jn && Jn(), t.$$.dirty[3] & /*$jsonHintText*/
    128 && e(21, Ee = ct), t.$$.dirty[1] & /*hintColor*/
    33554432 | t.$$.dirty[3] & /*$jsonHintColor*/
    64 && e(56, sn = dr(Xt, 1, sn)), t.$$.dirty[1] & /*fontSize*/
    67108864 | t.$$.dirty[3] & /*$jsonFontSize*/
    32 && e(57, Zr = Hn(rr, Zr)), t.$$.dirty[1] & /*fontWeight*/
    134217728 | t.$$.dirty[3] & /*$jsonFontWeight, $jsonFontWeightValue, $jsonFontFamily*/
    28 && (e(58, ve = yi(hr, jt, ve)), G && typeof G == "string" ? e(59, pn = Re.typefaceProvider(G, { fontWeight: ve || 400 })) : e(59, pn = "")), t.$$.dirty[1] & /*fontVariationSettings*/
    536870912 | t.$$.dirty[3] & /*$jsonFontVariationSettings*/
    2) {
      const kr = Ri(vr);
      kr !== Qr && e(60, Qr = kr);
    }
    if (t.$$.dirty[1] & /*fontSize*/
    67108864 | t.$$.dirty[3] & /*$jsonLineHeight*/
    1) {
      const kr = $t;
      Wn(kr) && e(61, gn = kr / Zr);
    }
    t.$$.dirty[2] & /*$jsonLetterSpacing*/
    1073741824 && cl(Me) && e(62, y = ae(Me)), t.$$.dirty[2] & /*$jsonTextColor, textColor*/
    536870914 && e(63, E = dr(Ft, 1, E)), t.$$.dirty[2] & /*$jsonHighlightColor, highlightColor*/
    268435460 && e(64, S = dr(tr, 1, S)), t.$$.dirty[2] & /*$jsonAlignmentHorizontal, $direction, alignmentHorizontal*/
    134742024 && e(65, oe = fl(be, wt, oe)), t.$$.dirty[2] & /*$jsonAlignmentVertical, alignmentVertical*/
    67108880 && e(66, R = dl(he, R)), t.$$.dirty[0] & /*isEnabled*/
    32 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    33554432 && e(5, jr = un(Mt, jr)), t.$$.dirty[2] & /*$jsonKeyboardType, $jsonMask, keyboardType*/
    12582944 && (ft && ft in Iu && (e(10, Se = Iu[ft]), e(67, Ze = ft)), (je == null ? void 0 : je.type) === "currency" ? (e(10, Se = q1 ? "text" : "tel"), e(11, qt = "decimal")) : Ze === "number" ? e(11, qt = "decimal") : e(11, qt = void 0)), t.$$.dirty[2] & /*keyboardType*/
    32 && e(8, de = Ze === "multi_line_text"), t.$$.dirty[1] & /*lineHeight, fontSize*/
    1140850688 | t.$$.dirty[2] & /*$jsonVisibleMaxLines, $jsonPaddings, selfPadding, $direction*/
    3670144 && (Wn(pe) ? e(68, Vt = `calc(${pe * (gn || 1.25) * (Zr / 10) + "em"} + ${cn(tn(nt == null ? void 0 : nt.top, 0) + tn(nt == null ? void 0 : nt.bottom, 0))})`) : e(68, Vt = ""), e(69, ze = bi(nt || void 0, ze)), e(70, Qt = ze ? _o(
      {
        top: (Number(ze.top) || 0) / Zr * 10,
        right: (Number(wt === "ltr" ? ze.end : ze.start) || Number(ze.right) || 0) / Zr * 10,
        bottom: (Number(ze.bottom) || 0) / Zr * 10,
        left: (Number(wt === "ltr" ? ze.start : ze.end) || Number(ze.left) || 0) / Zr * 10
      },
      wt
    ) : ""), e(71, Et = ze ? _o(
      {
        top: (Number(ze.top) || 0) / Zr * 10,
        bottom: (Number(ze.bottom) || 0) / Zr * 10
      },
      wt
    ) : "")), t.$$.dirty[2] & /*$jsonAutocapitalization*/
    262144 && (st === "all_characters" ? e(13, xr = "characters") : st === "sentences" ? e(13, xr = "sentences") : st === "words" ? e(13, xr = "words") : (st === "none" || st === "auto") && e(13, xr = "off")), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonAccessibility*/
    131072 && (ne != null && ne.description ? e(12, Sr = ri(ne)) : j.logError(Y(new Error('Missing accessibility "description" for input'), { level: "warn" }))), t.$$.dirty[2] & /*$jsonEnterKeyType*/
    65536 && (Fe === "default" || Fe === "done" || Fe === "go" || Fe === "search" || Fe === "send") && e(14, wn = Fe), t.$$.dirty[0] & /*isMultiline*/
    256 | t.$$.dirty[2] & /*highlightColor, alignmentHorizontal, alignmentVertical*/
    28 && e(20, Ie = {
      "highlight-color": !!S,
      multiline: de,
      "alignment-horizontal": oe,
      "alignment-vertical": R
    }), t.$$.dirty[1] & /*hintColor, lineHeight, fontWeight, fontFamily, fontVariationSettings*/
    2046820352 | t.$$.dirty[2] & /*highlightColor, letterSpacing, textColor, maxHeight*/
    71 && e(19, ee = {
      "--divkit-input-hint-color": sn,
      "--divkit-input-highlight-color": S,
      "--divkit-input-line-height": gn,
      "font-weight": ve,
      "font-family": pn,
      "font-variation-settings": Qr,
      "letter-spacing": y,
      color: E,
      "max-height": Vt
    }), t.$$.dirty[1] & /*fontSize*/
    67108864 | t.$$.dirty[2] & /*padding*/
    256 && e(18, De = { "font-size": ae(Zr), padding: Qt }), t.$$.dirty[1] & /*fontSize*/
    67108864 | t.$$.dirty[2] & /*verticalPadding*/
    512 && e(17, qe = {
      "font-size": ae(Zr),
      padding: Et
    }), t.$$.dirty[0] & /*input, componentContext, value*/
    13 | t.$$.dirty[1] & /*prevId*/
    8388608 && ot && j.json && (Dt && (Re.unregisterFocusable(Dt), e(54, Dt = void 0)), j.id && !j.fakeElement && (e(54, Dt = j.id), Re.registerFocusable(Dt, {
      focus() {
        ot && (ot.focus(), Dr(Wt.length, Wt.length));
      }
    })));
  }, [
    j,
    Te,
    ot,
    Wt,
    qr,
    jr,
    Gr,
    s,
    de,
    br,
    Se,
    qt,
    Sr,
    xr,
    wn,
    hn,
    a,
    qe,
    De,
    ee,
    Ie,
    Ee,
    Ce,
    fe,
    se,
    U,
    N,
    M,
    C,
    le,
    X,
    T,
    ce,
    Q,
    L,
    H,
    z,
    w,
    k,
    p,
    m,
    h,
    _,
    f,
    u,
    c,
    l,
    v,
    O,
    Z,
    P,
    we,
    me,
    Ot,
    Dt,
    Je,
    sn,
    Zr,
    ve,
    pn,
    Qr,
    gn,
    y,
    E,
    S,
    oe,
    R,
    Ze,
    Vt,
    ze,
    Qt,
    Et,
    jn,
    o,
    i,
    n,
    Ke,
    ye,
    Fe,
    ne,
    st,
    wt,
    nt,
    pe,
    je,
    ft,
    et,
    Mt,
    he,
    be,
    tr,
    Ft,
    Me,
    $t,
    vr,
    G,
    jt,
    hr,
    rr,
    Xt,
    ct,
    nr,
    so,
    Fn,
    Yo,
    Lo,
    Ko
  ];
}
class Z1 extends Or {
  constructor(r) {
    super(), zr(this, r, X1, J1, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1, -1]);
  }
}
const Q1 = "appkit-select", x1 = "appkit-select_hint", $1 = "appkit-select__select", eb = "appkit-select__option", zi = {
  select: Q1,
  "select__select-text": "appkit-select__select-text",
  select_hint: x1,
  select__select: $1,
  "select__select_has-custom-focused": "appkit-select__select_has-custom-focused",
  "has-custom-focused": "appkit-has-custom-focused",
  select__option: eb
};
function Du(t, r, e) {
  const n = t.slice();
  return n[62] = r[e], n;
}
function tb(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function rb(t) {
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
          nb,
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
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
      r = Ve("option"), n = Mn(e), g(r, "class", zi.select__option), r.__value = o = /*item*/
      t[62].value, Ta(r, r.__value);
    },
    m(i, s) {
      q(i, r, s), ht(r, n);
    },
    p(i, s) {
      s[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      (i[62].text || /*item*/
      i[62].value) + "") && Xn(n, e), s[0] & /*filteredItems*/
      32 && o !== (o = /*item*/
      i[62].value) && (r.__value = o, Ta(r, r.__value));
    },
    d(i) {
      i && J(r);
    }
  };
}
function nb(t) {
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
      r = Ve("span"), n = Mn(e), i = cr(), s = Ve("select");
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
      t[54](s), Ma(
        s,
        /*$valueVariable*/
        t[6],
        !0
      ), c || (u = [
        We(
          s,
          "change",
          /*select_1_change_handler*/
          t[55]
        ),
        We(s, "focus", function() {
          Nr(
            /*focusHandler*/
            t[60]
          ) && t[60].apply(this, arguments);
        }),
        We(s, "blur", function() {
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
      t[25] || "​") + "") && Xn(n, e), m[0] & /*innerStl*/
      512 && o !== (o = er(
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
          const k = Du(t, f, p);
          _[p] ? _[p].p(k, m) : (_[p] = Tu(k), _[p].c(), _[p].m(s, null));
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
      96 && Ma(
        s,
        /*$valueVariable*/
        t[6]
      );
    },
    d(h) {
      h && (J(r), J(i), J(s)), nn(_, h), t[54](null), c = !1, Rr(u);
    }
  };
}
function ob(t) {
  let r, e, n, o;
  const i = [rb, tb], s = [];
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
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (_r(), $(s[u], 1, 1, () => {
        s[u] = null;
      }), pr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), W(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (W(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function ib(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, k, w, z, H, L, Q, ce, T, X, le = A, C = () => (le(), le = V(H, (Me) => e(42, X = Me)), H), M, N = A, U = () => (N(), N = V(z, (Me) => e(43, M = Me)), z), se, fe = A, Ce = () => (fe(), fe = V(w, (Me) => e(44, se = Me)), w), Ee, de = A, Ie = () => (de(), de = V(k, (Me) => e(45, Ee = Me)), k), ee, De = A, qe = () => (De(), De = V(p, (Me) => e(46, ee = Me)), p), Ke, ke = A, rt = () => (ke(), ke = V(m, (Me) => e(47, Ke = Me)), m), ye, Ae = A, _e = () => (Ae(), Ae = V(h, (Me) => e(48, ye = Me)), h), x, ue = A, ie = () => (ue(), ue = V(_, (Me) => e(49, x = Me)), _), Fe, xe = A, Xe = () => (xe(), xe = V(f, (Me) => e(50, Fe = Me)), f), ne, Ye = A, Le = () => (Ye(), Ye = V(u, (Me) => e(51, ne = Me)), u), st, lt, at = A, wt = () => (at(), at = V(l, (Me) => e(53, lt = Me)), l), nt, zt = A, ut = () => (zt(), zt = V(a, (Me) => e(6, nt = Me)), a), pe, ge = A, _t = () => (ge(), ge = V(c, (Me) => e(25, pe = Me)), c);
  t.$$.on_destroy.push(() => le()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => De()), t.$$.on_destroy.push(() => ke()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => at()), t.$$.on_destroy.push(() => zt()), t.$$.on_destroy.push(() => ge());
  let { componentContext: je } = r, { layoutParams: I = void 0 } = r;
  const vt = Tr(Xr), ft = Tr(To), St = vt.direction;
  bn(t, St, (Me) => e(52, st = Me));
  let Tt, et, K = !1, At = "", Mt = null, Zt = "", Jt = "rgba(0,0,0,.45)", he = 12, Be, pt = "", be = "", Qe, Oe = "", tr = "#000", Ne = "", yt;
  function Ft() {
    e(28, Mt = null), e(30, Jt = "rgba(0,0,0,.45)"), e(31, he = 12), e(32, Be = void 0), e(33, pt = ""), e(34, be = ""), e(35, Qe = void 0), e(36, Oe = ""), e(37, tr = "#000"), e(7, Ne = "");
  }
  on(() => {
    Tt && (vt.unregisterFocusable(Tt), e(27, Tt = void 0));
  });
  function It(Me) {
    Ir[Me ? "unshift" : "push"](() => {
      et = Me, e(2, et);
    });
  }
  function ur() {
    nt = E_(this), a.set(nt), e(5, s), e(40, i), e(0, je);
  }
  return t.$$set = (Me) => {
    "componentContext" in Me && e(0, je = Me.componentContext), "layoutParams" in Me && e(1, I = Me.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(41, n = je.origJson), t.$$.dirty[1] & /*origJson*/
    1024 && n && Ft(), t.$$.dirty[0] & /*componentContext*/
    1 && e(39, o = je.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(40, i = je.json.options), t.$$.dirty[1] & /*items*/
    512 && e(5, s = Array.isArray(i) && i.filter((Me) => typeof Me.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    256 && ut(e(24, a = o && (je.getVariable(o, "string") || vt.awaitGlobalVariable(o, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && wt(e(23, l = je.getDerivedFromVars(je.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(22, c = je.getDerivedFromVars(je.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(21, u = je.getDerivedFromVars(je.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(20, f = je.getDerivedFromVars(je.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && ie(e(19, _ = je.getDerivedFromVars(je.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(18, h = je.getDerivedFromVars(je.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && rt(e(17, m = je.getDerivedFromVars(je.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(16, p = je.getDerivedFromVars(je.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(15, k = je.getDerivedFromVars(je.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && Ce(e(14, w = je.getDerivedFromVars(je.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && U(e(13, z = je.getDerivedFromVars(je.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && C(e(12, H = je.getDerivedFromVars(je.json.accessibility))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || je.logError(Y(new Error('Empty selection "items" in "select"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    2304) {
      let Me = !1;
      o ? (ft.hasAction() || (X == null ? void 0 : X.mode) === "exclude") && (Me = !0, je.logError(Y(new Error('Cannot show "select" inside component with an action or inside accessibility mode=exclude')))) : (e(3, K = !0), je.logError(Y(new Error('Missing "value_variable" in "select"')))), K !== Me && e(3, K = Me);
    }
    if (t.$$.dirty[0] & /*filteredItems, $valueVariable, componentContext*/
    97 | t.$$.dirty[1] & /*prevWarnValue*/
    128) {
      const Me = s.find((kt) => kt.value === nt);
      Me ? e(4, At = (typeof Me.text == "string" ? Me.text : Me.value) || "") : (e(4, At = ""), nt && yt !== nt && (e(38, yt = nt), je.logError(Y(new Error('Value from the variable was not found in the selection items for "select"')))));
    }
    if (t.$$.dirty[1] & /*$jsonFontSize, fontSize*/
    524289 && e(31, he = Hn(Fe, he)), t.$$.dirty[0] & /*selfPadding*/
    268435456 | t.$$.dirty[1] & /*$jsonPaddings, fontSize, $direction*/
    6291457 && (e(28, Mt = bi(lt || void 0, Mt)), e(29, Zt = Mt ? _o(
      {
        top: (Number(Mt.top) || 0) / he * 10,
        right: (Number(st === "ltr" ? Mt.end : Mt.start) || Number(Mt.right) || 0) / he * 10,
        bottom: (Number(Mt.bottom) || 0) / he * 10,
        left: (Number(st === "ltr" ? Mt.start : Mt.end) || Number(Mt.left) || 0) / he * 10
      },
      st
    ) : "")), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*$jsonHintColor*/
    1048576 && e(30, Jt = dr(ne, 1, Jt)), t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontWeightValue, fontWeight, $jsonFontFamily*/
    458754 && (e(32, Be = yi(x, ye, Be)), Ke && typeof Ke == "string" ? e(33, pt = vt.typefaceProvider(Ke, { fontWeight: Be || 400 })) : e(33, pt = "")), t.$$.dirty[1] & /*$jsonFontVariationSettings, fontVariationSettings*/
    32776) {
      const Me = Ri(ee);
      Me !== be && e(34, be = Me);
    }
    if (t.$$.dirty[1] & /*$jsonLineHeight, fontSize*/
    16385) {
      const Me = Ee;
      Wn(Me) && e(35, Qe = Me / he);
    }
    t.$$.dirty[1] & /*$jsonLetterSpacing, fontSize*/
    8193 && cl(se) && e(36, Oe = ae(se / he * 10)), t.$$.dirty[1] & /*$jsonTextColor, textColor*/
    4160 && e(37, tr = dr(M, 1, tr)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    2048 && (X != null && X.description ? e(7, Ne = ri(X)) : je.logError(Y(new Error('Missing accessibility "description" for select'), { level: "warn" }))), t.$$.dirty[0] & /*selectText*/
    16 && e(11, L = { hint: !At }), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*fontWeight, fontFamily, fontVariationSettings, textColor*/
    78 && e(10, Q = {
      "--divkit-input-hint-color": Jt,
      "font-weight": Be,
      "font-family": pt,
      "font-variation-settings": be,
      color: tr
    }), t.$$.dirty[0] & /*padding*/
    536870912 | t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(9, ce = {
      padding: Zt,
      "font-size": ae(he),
      "line-height": Qe,
      "letter-spacing": Oe
    }), t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(8, T = {
      "font-size": ae(he),
      "line-height": Qe,
      "letter-spacing": Oe
    }), t.$$.dirty[0] & /*componentContext, select, prevId*/
    134217733 && je.json && et && (Tt && (vt.unregisterFocusable(Tt), e(27, Tt = void 0)), je.id && !je.fakeElement && (e(27, Tt = je.id), vt.registerFocusable(Tt, {
      focus() {
        et && et.focus();
      }
    })));
  }, [
    je,
    I,
    et,
    K,
    At,
    s,
    nt,
    Ne,
    T,
    ce,
    Q,
    L,
    H,
    z,
    w,
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
    pe,
    St,
    Tt,
    Mt,
    Zt,
    Jt,
    he,
    Be,
    pt,
    be,
    Qe,
    Oe,
    tr,
    yt,
    o,
    i,
    n,
    X,
    M,
    se,
    Ee,
    ee,
    Ke,
    ye,
    x,
    Fe,
    ne,
    st,
    lt,
    It,
    ur
  ];
}
class sb extends Or {
  constructor(r) {
    super(), zr(this, r, ib, ob, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const lb = "appkit-video__video", ab = "appkit-video__container", cb = "appkit-video_absolute", ji = {
  video__video: lb,
  video__container: ab,
  "video__aspect-wrapper": "appkit-video__aspect-wrapper",
  video_absolute: cb
};
function ub(t, r) {
  return Array.isArray(t) && t.length ? t.filter((e) => (e == null ? void 0 : e.type) === "video_source" && typeof e.url == "string" && typeof e.mime_type == "string").map((e) => {
    const n = {
      src: e.url
    };
    return e.mime_type && (n.type = e.mime_type), n;
  }) : r;
}
function fb(t) {
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
function db(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function _b(t) {
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
      $$slots: { default: [yb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function pb(t) {
  let r, e, n, o, i, s = ir(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = zu(Mu(t, s, l));
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
    m(l, c) {
      q(l, r, c);
      for (let u = 0; u < a.length; u += 1)
        a[u] && a[u].m(r, null);
      t[52](r), o || (i = [
        We(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          t[26]
        ),
        We(
          r,
          "ended",
          /*onEnd*/
          t[27]
        ),
        We(
          r,
          "playing",
          /*onPlaying*/
          t[28]
        ),
        We(
          r,
          "pause",
          /*onPause*/
          t[29]
        ),
        We(
          r,
          "waiting",
          /*onWaiting*/
          t[30]
        ),
        We(
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
      16384 && e !== (e = er(
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
      l && J(r), nn(a, l), t[52](null), o = !1, Rr(i);
    }
  };
}
function gb(t) {
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
function hb(t) {
  let r, e = `${/*aspectPaddingBottom*/
  t[11]}%`;
  function n(s, a) {
    return (
      /*shouldUseVideoProvider*/
      s[13] ? bb : mb
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
function Nu(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Ve("source"), Kn(r.src, e = /*source*/
      t[60].src) || g(r, "src", e), g(r, "type", n = /*source*/
      t[60].type);
    },
    m(s, a) {
      q(s, r, a), o || (i = We(
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
      s && J(r), o = !1, i();
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
      n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Vr(r, r = /*source*/
      o[60]) ? (n.d(1), n = Nu(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && J(e), n.d(o);
    }
  };
}
function mb(t) {
  let r, e, n, o, i, s = ir(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = Lu(Pu(t, s, l));
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
    m(l, c) {
      q(l, r, c);
      for (let u = 0; u < a.length; u += 1)
        a[u] && a[u].m(r, null);
      t[50](r), o || (i = [
        We(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          t[26]
        ),
        We(
          r,
          "ended",
          /*onEnd*/
          t[27]
        ),
        We(
          r,
          "playing",
          /*onPlaying*/
          t[28]
        ),
        We(
          r,
          "pause",
          /*onPause*/
          t[29]
        ),
        We(
          r,
          "waiting",
          /*onWaiting*/
          t[30]
        ),
        We(
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
          a[u] ? a[u].p(f, c) : (a[u] = Lu(f), a[u].c(), a[u].m(r, null));
        }
        for (; u < a.length; u += 1)
          a[u].d(1);
        a.length = s.length;
      }
      c[0] & /*style*/
      16384 && e !== (e = er(
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
      l && J(r), nn(a, l), t[50](null), o = !1, Rr(i);
    }
  };
}
function bb(t) {
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
function Ou(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Ve("source"), Kn(r.src, e = /*source*/
      t[60].src) || g(r, "src", e), g(r, "type", n = /*source*/
      t[60].type);
    },
    m(s, a) {
      q(s, r, a), o || (i = We(
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
      s && J(r), o = !1, i();
    }
  };
}
function Lu(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = Ou(t);
  return {
    c() {
      n.c(), e = xt();
    },
    m(o, i) {
      n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Vr(r, r = /*source*/
      o[60]) ? (n.d(1), n = Ou(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && J(e), n.d(o);
    }
  };
}
function yb(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[11] !== "0" ? hb : (
        /*shouldUseVideoProvider*/
        i[13] ? gb : pb
      )
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = xt();
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
function wb(t) {
  let r, e, n, o;
  const i = [_b, db], s = [];
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
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (_r(), $(s[u], 1, 1, () => {
        s[u] = null;
      }), pr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), W(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (W(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function kb(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, k, w, z = A, H = () => (z(), z = V(a, (Ne) => e(39, w = Ne)), a), L, Q = A, ce = () => (Q(), Q = V(m, (Ne) => e(40, L = Ne)), m), T, X = A, le = () => (X(), X = V(h, (Ne) => e(41, T = Ne)), h), C, M = A, N = () => (M(), M = V(_, (Ne) => e(42, C = Ne)), _), U, se = A, fe = () => (se(), se = V(f, (Ne) => e(43, U = Ne)), f), Ce, Ee = A, de = () => (Ee(), Ee = V(u, (Ne) => e(44, Ce = Ne)), u), Ie, ee = A, De = () => (ee(), ee = V(c, (Ne) => e(45, Ie = Ne)), c), qe, Ke = A, ke = () => (Ke(), Ke = V(l, (Ne) => e(46, qe = Ne)), l), rt, ye = A, Ae = () => (ye(), ye = V(s, (Ne) => e(47, rt = Ne)), s), _e, x = A, ue = () => (x(), x = V(i, (Ne) => e(48, _e = Ne)), i);
  t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => x());
  let { componentContext: ie } = r, { layoutParams: Fe = void 0 } = r;
  const xe = Tr(Xr), Xe = xe.videoPlayerProvider;
  let ne, Ye = !1, Le = !1, st, lt, at = [], wt = !1, nt = !1, zt = !1, ut = !1, pe, ge = "fit", _t = "0", je = !1, I, vt = "", ft, St = !!Xe;
  function Tt(Ne) {
    var or, $t;
    const yt = ie.getJsonWithVars({
      sources: Ne.video_sources,
      repeatable: Ne.repeatable,
      autostart: Ne.autostart,
      preloadRequired: Ne.preload_required,
      muted: Ne.muted,
      preview: Ne.preview,
      aspect: Ne.aspect,
      scale: Ne.scale,
      payload: Ne.player_settings_payload
    }), Ft = un(yt.repeatable, !1), It = un(yt.autostart, !1), ur = un(yt.preloadRequired, !1), Me = un(yt.muted, !1), kt = (or = yt.aspect) != null && or.ratio && Wn(yt.aspect.ratio) ? yt.aspect.ratio : void 0;
    if (($t = yt.sources) != null && $t.length)
      return {
        sources: yt.sources,
        repeatable: Ft,
        autostart: It,
        preloadRequired: ur,
        muted: Me,
        preview: yt.preview,
        aspect: kt,
        scale: yt.scale,
        payload: yt.payload
      };
  }
  function et(Ne) {
    var yt;
    if (Le) {
      Le = !1;
      return;
    }
    ft ? (yt = ft.seek) == null || yt.call(ft, Number(Ne)) : st && e(3, st.currentTime = Number(Ne) / 1e3, st);
  }
  function K() {
    ft ? ft.pause() : st == null || st.pause();
  }
  function At() {
    if (ft) {
      ft.play();
      return;
    }
    const Ne = st == null ? void 0 : st.play();
    Ne && Ne.catch((yt) => {
      ie.logError(Y(new Error("Video playing error"), {
        level: "error",
        additional: { originalText: String(yt) }
      }));
    });
  }
  function Mt() {
    st && (Le = !0, o.setValue(Math.floor(st.currentTime * 1e3)));
  }
  function Zt() {
    ie.execAnyActions(ie.json.end_actions);
  }
  function Jt() {
    ie.execAnyActions(ie.json.resume_actions);
  }
  function he() {
    ie.execAnyActions(ie.json.pause_actions);
  }
  function Be() {
    ie.execAnyActions(ie.json.buffering_actions);
  }
  function pt() {
    ie.execAnyActions(ie.json.fatal_actions);
  }
  ro(() => {
    if (Xe && lt) {
      const Ne = Tt(ie.json);
      if (Ne) {
        const yt = Xe.instance(lt, Ne);
        yt ? e(36, ft = yt) : e(13, St = !1);
      }
    }
  }), on(() => {
    ne && (xe.unregisterInstance(ne), e(32, ne = void 0)), I && (I(), e(35, I = void 0)), ft && (ft.destroy(), e(36, ft = void 0));
  });
  function be(Ne) {
    Ir[Ne ? "unshift" : "push"](() => {
      lt = Ne, e(10, lt);
    });
  }
  function Qe(Ne) {
    Ir[Ne ? "unshift" : "push"](() => {
      st = Ne, e(3, st);
    });
  }
  function Oe(Ne) {
    Ir[Ne ? "unshift" : "push"](() => {
      lt = Ne, e(10, lt);
    });
  }
  function tr(Ne) {
    Ir[Ne ? "unshift" : "push"](() => {
      st = Ne, e(3, st);
    });
  }
  return t.$$set = (Ne) => {
    "componentContext" in Ne && e(0, ie = Ne.componentContext), "layoutParams" in Ne && e(1, Fe = Ne.layoutParams);
  }, t.$$.update = () => {
    var Ne;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && ie.json && (e(5, wt = !1), e(6, nt = !1), e(7, zt = !1), e(8, ut = !1), e(9, pe = void 0), e(33, ge = "fit"), e(34, je = !1), e(13, St = !!Xe)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*customVideoInstance, $jsonSource, $jsonRepeatable, $jsonAutostart, $jsonMuted, $jsonPreload, $jsonPreview, $jsonScale, $jsonAspect*/
    260384 && ie.json && ft && (_e || rt || w || qe || Ie || Ce || U || C)) {
      const yt = Tt(ie.json);
      yt && ((Ne = ft.update) == null || Ne.call(ft, yt));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(38, n = ie.json.elapsed_time_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*elapsedVariableName*/
    128 && e(37, o = n && (ie.getVariable(n, "integer") || xe.awaitGlobalVariable(n, "integer", 0)) || io("temp", "integer", 0)), t.$$.dirty[1] & /*elapsedVariable, elapsedVariableUnsubscriber*/
    80 && o && (I && I(), e(35, I = o.subscribe(et))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(25, i = ie.getDerivedFromVars(ie.json.video_sources))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(24, s = ie.getDerivedFromVars(ie.json.repeatable))), t.$$.dirty[0] & /*componentContext*/
    1 && H(e(23, a = ie.getDerivedFromVars(ie.json.autostart))), t.$$.dirty[0] & /*componentContext*/
    1 && ke(e(22, l = ie.getDerivedFromVars(ie.json.muted))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(21, c = ie.getDerivedFromVars(ie.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(20, u = ie.getDerivedFromVars(ie.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(19, f = ie.getDerivedFromVars(ie.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(18, _ = ie.getDerivedFromVars(ie.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(17, h = ie.getDerivedFromVars(ie.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(16, m = ie.getDerivedFromVars(ie.json.height))), t.$$.dirty[0] & /*sources, componentContext*/
    17 | t.$$.dirty[1] & /*$jsonSource*/
    131072 && (e(4, at = ub(_e, at)), at.length ? e(2, Ye = !1) : (e(2, Ye = !0), ie.logError(Y(new Error('Missing "video_sources" in "video"'))))), t.$$.dirty[0] & /*loop*/
    32 | t.$$.dirty[1] & /*$jsonRepeatable*/
    65536 && e(5, wt = un(rt, wt)), t.$$.dirty[0] & /*autoplay*/
    64 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && e(6, nt = un(w, nt)), t.$$.dirty[0] & /*muted*/
    128 | t.$$.dirty[1] & /*$jsonMuted*/
    32768 && e(7, zt = un(qe, zt)), t.$$.dirty[0] & /*preload*/
    256 | t.$$.dirty[1] & /*$jsonPreload*/
    16384 && e(8, ut = un(Ie, ut)), t.$$.dirty[0] & /*poster*/
    512 | t.$$.dirty[1] & /*$jsonPreview*/
    8192 && e(9, pe = typeof Ce == "string" ? vd(Ce) : pe), t.$$.dirty[1] & /*$jsonScale, scale*/
    4100 && e(33, ge = fb(U) || ge), t.$$.dirty[1] & /*$jsonAspect, $jsonWidth, $jsonHeight*/
    3584) {
      const yt = C == null ? void 0 : C.ratio;
      yt && Wn(yt) ? (e(11, _t = (100 / Number(yt)).toFixed(2)), e(34, je = !0)) : (e(11, _t = "0"), e(34, je = (!T || T.type === "match_parent") && (L == null ? void 0 : L.type) === "match_parent"));
    }
    t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*prevId*/
    2 && ie.json && (ne && (xe.unregisterInstance(ne), e(32, ne = void 0)), ie.id && !Ye && !ie.fakeElement && (e(32, ne = ie.id), xe.registerInstance(ne, { pause: K, start: At }))), t.$$.dirty[0] & /*componentContext, videoElem*/
    9 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && ie.json && w && st && At(), t.$$.dirty[1] & /*isAbsolute*/
    8 && e(15, p = { absolute: je }), t.$$.dirty[1] & /*scale*/
    4 && e(14, k = { "object-fit": ge });
  }, [
    ie,
    Fe,
    Ye,
    st,
    at,
    wt,
    nt,
    zt,
    ut,
    pe,
    lt,
    _t,
    vt,
    St,
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
    Mt,
    Zt,
    Jt,
    he,
    Be,
    pt,
    ne,
    ge,
    je,
    I,
    ft,
    o,
    n,
    w,
    L,
    T,
    C,
    U,
    Ce,
    Ie,
    qe,
    rt,
    _e,
    be,
    Qe,
    Oe,
    tr
  ];
}
class vb extends Or {
  constructor(r) {
    super(), zr(this, r, kb, wb, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const jb = "appkit-switch__tumbler", Cb = "appkit-switch__tumbler_checked", Eb = "appkit-switch_disabled", Ab = "appkit-switch__thumb", Sb = "appkit-switch_direction_rtl", Vb = "appkit-switch__input", di = {
  switch: "appkit-switch",
  switch__tumbler: jb,
  switch__tumbler_checked: Cb,
  switch_disabled: Eb,
  switch__thumb: Ab,
  switch_direction_rtl: Sb,
  switch__input: Vb
};
function Oi(t) {
  return t === !0 || t === 1;
}
function Fb(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Ib(t) {
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
          Db,
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Db(t) {
  let r, e, n, o, i, s, a, l, c;
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
    m(u, f) {
      q(u, r, f), ht(r, e), q(u, o, f), q(u, i, f), t[25](i), l || (c = [
        We(
          i,
          "input",
          /*onInput*/
          t[14]
        ),
        We(i, "focus", function() {
          Nr(
            /*focusHandler*/
            t[29]
          ) && t[29].apply(this, arguments);
        }),
        We(i, "blur", function() {
          Nr(
            /*blurHandler*/
            t[30]
          ) && t[30].apply(this, arguments);
        })
      ], l = !0);
    },
    p(u, f) {
      t = u, f[0] & /*value*/
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
    d(u) {
      u && (J(r), J(o), J(i)), t[25](null), l = !1, Rr(c);
    }
  };
}
function Tb(t) {
  let r, e, n, o;
  const i = [Ib, Fb], s = [];
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
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (_r(), $(s[u], 1, 1, () => {
        s[u] = null;
      }), pr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), W(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (W(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Mb(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h = A, m = () => (h(), h = V(s, (ke) => e(21, _ = ke)), s), p, k = A, w = () => (k(), k = V(l, (ke) => e(22, p = ke)), l), z, H = A, L = () => (H(), H = V(a, (ke) => e(23, z = ke)), a), Q, ce = A, T = () => (ce(), ce = V(i, (ke) => e(24, Q = ke)), i);
  t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => k()), t.$$.on_destroy.push(() => H()), t.$$.on_destroy.push(() => ce());
  let { componentContext: X } = r, { layoutParams: le = void 0 } = r;
  const C = Tr(Xr), M = Tr(To), N = C.direction;
  bn(t, N, (ke) => e(20, f = ke));
  let U, se, fe = !1, Ce = !1, Ee = "", de = !0, Ie = "#129386", ee = "#1293864c";
  function De() {
    e(5, de = !0), e(16, Ie = "#129386"), e(17, ee = "#1293864c");
  }
  function qe(ke) {
    e(3, fe = ke.target.checked), i.setValue(fe);
  }
  on(() => {
    U && (C.unregisterFocusable(U), e(15, U = void 0));
  });
  function Ke(ke) {
    Ir[ke ? "unshift" : "push"](() => {
      se = ke, e(2, se);
    });
  }
  return t.$$set = (ke) => {
    "componentContext" in ke && e(0, X = ke.componentContext), "layoutParams" in ke && e(1, le = ke.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(19, n = X.origJson), t.$$.dirty[0] & /*origJson*/
    524288 && n && De(), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, o = X.json.is_on_variable), t.$$.dirty[0] & /*variable, componentContext*/
    262145 && T(e(7, i = o && (X.getVariable(o, "boolean") || C.awaitGlobalVariable(o, "boolean", !1)) || io("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(12, s = X.getDerivedFromVars(X.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && L(e(11, a = X.getDerivedFromVars(X.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && w(e(10, l = X.getDerivedFromVars(X.json.on_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    2359313) {
      let ke = !1;
      o ? (M.hasAction() || (_ == null ? void 0 : _.mode) === "exclude") && (ke = !0, X.logError(Y(new Error('Cannot show "switch" inside component with an action or inside accessibility mode=exclude')))) : (ke = !0, X.logError(Y(new Error('Missing "is_on_variable" in "switch"')))), Ce !== ke && e(4, Ce = ke);
    }
    if (t.$$.dirty[0] & /*value, $valueVariable*/
    16777224 && Oi(fe) !== Oi(Q) && e(3, fe = Oi(Q)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    8388640 && e(5, de = un(z, de)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    4259840 && (e(16, Ie = dr(p, 1, Ie)), typeof p == "string")) {
      const ke = fo(p);
      ke && (ke.a *= 0.3, e(17, ee = da(ke)));
    }
    t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    2097153 && (_ != null && _.description ? e(6, Ee = ri(_)) : X.logError(Y(new Error('Missing accessibility "description" for switch'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled, $direction*/
    1048608 && e(9, c = {
      disabled: !de,
      direction: f
    }), t.$$.dirty[0] & /*onColor, onSubColor*/
    196608 && e(8, u = {
      "--divkit-switch-on-color": Ie,
      "--divkit-switch-on-sub-color": ee
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    32773 && se && X.json && (U && (C.unregisterFocusable(U), e(15, U = void 0)), X.id && !X.fakeElement && (e(15, U = X.id), C.registerFocusable(U, {
      focus() {
        se && se.focus();
      }
    })));
  }, [
    X,
    le,
    se,
    fe,
    Ce,
    de,
    Ee,
    i,
    u,
    c,
    l,
    a,
    s,
    N,
    qe,
    U,
    Ie,
    ee,
    o,
    n,
    f,
    _,
    p,
    z,
    Q,
    Ke
  ];
}
class Pb extends Or {
  constructor(r) {
    super(), zr(this, r, Mb, Tb, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Nb = "appkit-checkbox", zb = "appkit-checkbox__box", Ob = "appkit-checkbox__box_checked", Lb = "appkit-checkbox__checkmark", Rb = "appkit-checkbox_disabled", Bb = "appkit-checkbox__input", _i = {
  checkbox: Nb,
  checkbox__box: zb,
  checkbox__box_checked: Ob,
  checkbox__checkmark: Lb,
  checkbox_disabled: Rb,
  checkbox__input: Bb
};
function Hb(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Wb(t) {
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
          Ub,
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Ub(t) {
  let r, e, n, o, i, s, a, l, c;
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
    m(u, f) {
      q(u, r, f), ht(r, e), q(u, o, f), q(u, i, f), t[28](i), l || (c = [
        We(
          i,
          "input",
          /*onInput*/
          t[15]
        ),
        We(i, "focus", function() {
          Nr(
            /*focusHandler*/
            t[32]
          ) && t[32].apply(this, arguments);
        }),
        We(i, "blur", function() {
          Nr(
            /*blurHandler*/
            t[33]
          ) && t[33].apply(this, arguments);
        })
      ], l = !0);
    },
    p(u, f) {
      t = u, f[0] & /*value*/
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
    d(u) {
      u && (J(r), J(o), J(i)), t[28](null), l = !1, Rr(c);
    }
  };
}
function Gb(t) {
  let r, e, n, o;
  const i = [Wb, Hb], s = [];
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
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (_r(), $(s[u], 1, 1, () => {
        s[u] = null;
      }), pr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), W(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (W(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Jb(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m = A, p = () => (m(), m = V(s, (ie) => e(22, h = ie)), s), k, w = A, z = () => (w(), w = V(u, (ie) => e(23, k = ie)), u), H, L = A, Q = () => (L(), L = V(c, (ie) => e(24, H = ie)), c), ce, T = A, X = () => (T(), T = V(l, (ie) => e(25, ce = ie)), l), le, C = A, M = () => (C(), C = V(a, (ie) => e(26, le = ie)), a), N, U = A, se = () => (U(), U = V(i, (ie) => e(27, N = ie)), i);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => L()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => C()), t.$$.on_destroy.push(() => U());
  let { componentContext: fe } = r, { layoutParams: Ce = void 0 } = r;
  const Ee = Tr(Xr), de = Tr(To);
  let Ie, ee, De = !1, qe = !1, Ke = "", ke = !0, rt = "#129386", ye = "rgba(0, 0, 0, .3)", Ae = "#fff";
  function _e() {
    e(5, ke = !0), e(17, rt = "#129386"), e(18, ye = "rgba(0, 0, 0, .3)"), e(19, Ae = "#fff");
  }
  function x(ie) {
    e(3, De = ie.target.checked), i.setValue(De);
  }
  on(() => {
    Ie && (Ee.unregisterFocusable(Ie), e(16, Ie = void 0));
  });
  function ue(ie) {
    Ir[ie ? "unshift" : "push"](() => {
      ee = ie, e(2, ee);
    });
  }
  return t.$$set = (ie) => {
    "componentContext" in ie && e(0, fe = ie.componentContext), "layoutParams" in ie && e(1, Ce = ie.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(21, n = fe.origJson), t.$$.dirty[0] & /*origJson*/
    2097152 && n && _e(), t.$$.dirty[0] & /*componentContext*/
    1 && e(20, o = fe.json.is_checked_variable), t.$$.dirty[0] & /*variable, componentContext*/
    1048577 && se(e(7, i = o && (fe.getVariable(o, "boolean") || Ee.awaitGlobalVariable(o, "boolean", !1)) || io("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && p(e(14, s = fe.getDerivedFromVars(fe.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(13, a = fe.getDerivedFromVars(fe.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && X(e(12, l = fe.getDerivedFromVars(fe.json.on_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Q(e(11, c = fe.getDerivedFromVars(fe.json.off_color))), t.$$.dirty[0] & /*componentContext*/
    1 && z(e(10, u = fe.getDerivedFromVars(fe.json.check_mark_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    5242897) {
      let ie = !1;
      o ? (de.hasAction() || (h == null ? void 0 : h.mode) === "exclude") && (ie = !0, fe.logError(Y(new Error('Cannot show "checkbox" inside component with an action or inside accessibility mode=exclude')))) : (ie = !0, fe.logError(Y(new Error('Missing "is_checked_variable" in "checkbox"')))), qe !== ie && e(4, qe = ie);
    }
    t.$$.dirty[0] & /*value, $valueVariable*/
    134217736 && Oi(De) !== Oi(N) && e(3, De = Oi(N)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    67108896 && e(5, ke = un(le, ke)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    33685504 && e(17, rt = dr(ce, 1, rt)), t.$$.dirty[0] & /*$jsonOffColor, offColor*/
    17039360 && e(18, ye = dr(H, 1, ye)), t.$$.dirty[0] & /*$jsonCheckMarkColor, checkMarkColor*/
    8912896 && e(19, Ae = dr(k, 1, Ae)), t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    4194305 && (h != null && h.description ? e(6, Ke = ri(h)) : fe.logError(Y(new Error('Missing accessibility "description" for checkbox'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    32 && e(9, f = { disabled: !ke }), t.$$.dirty[0] & /*onColor, offColor, checkMarkColor*/
    917504 && e(8, _ = {
      "--divkit-checkbox-on-color": rt,
      "--divkit-checkbox-off-color": ye,
      "--divkit-checkbox-check-mark-color": Ae
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    65541 && ee && fe.json && (Ie && (Ee.unregisterFocusable(Ie), e(16, Ie = void 0)), fe.id && !fe.fakeElement && (e(16, Ie = fe.id), Ee.registerFocusable(Ie, {
      focus() {
        ee && ee.focus();
      }
    })));
  }, [
    fe,
    Ce,
    ee,
    De,
    qe,
    ke,
    Ke,
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
    rt,
    ye,
    Ae,
    o,
    n,
    h,
    k,
    H,
    ce,
    le,
    N,
    ue
  ];
}
class qb extends Or {
  constructor(r) {
    super(), zr(this, r, Jb, Gb, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Yb = "appkit-radio", Kb = "appkit-radio__group", Xb = "appkit-radio__group_vertical", Zb = "appkit-radio__group_horizontal", Qb = "appkit-radio__item", xb = "appkit-radio_disabled", $b = "appkit-radio__circle", ey = "appkit-radio__circle_selected", ty = "appkit-radio__dot", ry = "appkit-radio__label", ny = "appkit-radio__input", ko = {
  radio: Yb,
  radio__group: Kb,
  radio__group_vertical: Xb,
  radio__group_horizontal: Zb,
  radio__item: Qb,
  radio_disabled: xb,
  radio__circle: $b,
  radio__circle_selected: ey,
  radio__dot: ty,
  radio__label: ry,
  radio__input: ny
};
function Ru(t, r, e) {
  const n = t.slice();
  return n[55] = r[e], n;
}
function oy(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function iy(t) {
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
          ay,
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function sy(t) {
  let r, e = (
    /*item*/
    t[55].value + ""
  ), n;
  return {
    c() {
      r = Ve("span"), n = Mn(e), g(r, "class", ko.radio__label);
    },
    m(o, i) {
      q(o, r, i), ht(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      o[55].value + "") && Xn(n, e);
    },
    d(o) {
      o && J(r);
    }
  };
}
function ly(t) {
  let r, e = (
    /*item*/
    t[55].text + ""
  ), n;
  return {
    c() {
      r = Ve("span"), n = Mn(e), g(r, "class", ko.radio__label);
    },
    m(o, i) {
      q(o, r, i), ht(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      o[55].text + "") && Xn(n, e);
    },
    d(o) {
      o && J(r);
    }
  };
}
function Bu(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, h;
  function m(z, H) {
    return (
      /*item*/
      z[55].text ? ly : sy
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
      t[55].value, a.checked = c = /*$valueVariable*/
      t[23] === /*item*/
      t[55].value, a.disabled = u = !/*isEnabled*/
      t[4], g(r, "class", ko.radio__item);
    },
    m(z, H) {
      q(z, r, H), ht(r, e), ht(e, n), ht(r, i), k.m(r, null), ht(r, s), ht(r, a), ht(r, f), _ || (h = [
        We(a, "change", w),
        We(a, "focus", function() {
          Nr(
            /*focusHandler*/
            t[52]
          ) && t[52].apply(this, arguments);
        }),
        We(a, "blur", function() {
          Nr(
            /*blurHandler*/
            t[53]
          ) && t[53].apply(this, arguments);
        })
      ], _ = !0);
    },
    p(z, H) {
      t = z, H[0] & /*$valueVariable, filteredItems*/
      8388640 && o !== (o = mt("radio__circle", ko, {
        selected: (
          /*$valueVariable*/
          t[23] === /*item*/
          t[55].value
        )
      })) && g(e, "class", o), p === (p = m(t)) && k ? k.p(t, H) : (k.d(1), k = p(t), k && (k.c(), k.m(r, s))), H[0] & /*groupName*/
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
      z && J(r), k.d(), _ = !1, Rr(h);
    }
  };
}
function ay(t) {
  let r, e, n = ir(
    /*filteredItems*/
    t[5]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Bu(Ru(t, n, i));
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
        n = ir(
          /*filteredItems*/
          i[5]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Ru(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Bu(l), o[a].c(), o[a].m(r, null));
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
      i && J(r), nn(o, i), t[48](null);
    }
  };
}
function cy(t) {
  let r, e, n, o;
  const i = [iy, oy], s = [];
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
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (_r(), $(s[u], 1, 1, () => {
        s[u] = null;
      }), pr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), W(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (W(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function uy(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, k, w, z, H, L, Q, ce, T, X = A, le = () => (X(), X = V(l, (Be) => e(37, T = Be)), l), C, M = A, N = () => (M(), M = V(w, (Be) => e(38, C = Be)), w), U, se = A, fe = () => (se(), se = V(k, (Be) => e(39, U = Be)), k), Ce, Ee = A, de = () => (Ee(), Ee = V(p, (Be) => e(40, Ce = Be)), p), Ie, ee = A, De = () => (ee(), ee = V(m, (Be) => e(41, Ie = Be)), m), qe, Ke = A, ke = () => (Ke(), Ke = V(h, (Be) => e(42, qe = Be)), h), rt, ye = A, Ae = () => (ye(), ye = V(_, (Be) => e(43, rt = Be)), _), _e, x = A, ue = () => (x(), x = V(f, (Be) => e(44, _e = Be)), f), ie, Fe = A, xe = () => (Fe(), Fe = V(u, (Be) => e(45, ie = Be)), u), Xe, ne = A, Ye = () => (ne(), ne = V(c, (Be) => e(46, Xe = Be)), c), Le, st = A, lt = () => (st(), st = V(a, (Be) => e(23, Le = Be)), a);
  t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => x()), t.$$.on_destroy.push(() => Fe()), t.$$.on_destroy.push(() => ne()), t.$$.on_destroy.push(() => st());
  let { componentContext: at } = r, { layoutParams: wt = void 0 } = r;
  const nt = Tr(Xr), zt = Tr(To);
  let ut, pe, ge = !1, _t = "", je = !0, I = "#129386", vt = "rgba(0, 0, 0, 0.3)", ft = "", St, Tt, et = "", K = "vertical", At = 8;
  function Mt() {
    e(4, je = !0), e(26, I = "#129386"), e(27, vt = "rgba(0, 0, 0, 0.3)"), e(28, ft = ""), e(29, St = void 0), e(30, Tt = void 0), e(31, et = ""), e(32, K = "vertical"), e(33, At = 8);
  }
  function Zt(Be) {
    a.setValue(Be);
  }
  on(() => {
    ut && (nt.unregisterFocusable(ut), e(25, ut = void 0));
  });
  const Jt = (Be) => Zt(Be.value);
  function he(Be) {
    Ir[Be ? "unshift" : "push"](() => {
      pe = Be, e(2, pe);
    });
  }
  return t.$$set = (Be) => {
    "componentContext" in Be && e(0, at = Be.componentContext), "layoutParams" in Be && e(1, wt = Be.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(36, n = at.origJson), t.$$.dirty[1] & /*origJson*/
    32 && n && Mt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(34, o = at.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(35, i = at.json.options), t.$$.dirty[1] & /*items*/
    16 && e(5, s = Array.isArray(i) && i.filter((Be) => typeof Be.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8 && lt(e(7, a = o && (at.getVariable(o, "string") || nt.awaitGlobalVariable(o, "string", "")) || io("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(22, l = at.getDerivedFromVars(at.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(21, c = at.getDerivedFromVars(at.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(20, u = at.getDerivedFromVars(at.json.selected_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(19, f = at.getDerivedFromVars(at.json.default_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(18, _ = at.getDerivedFromVars(at.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ke(e(17, h = at.getDerivedFromVars(at.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(16, m = at.getDerivedFromVars(at.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(15, p = at.getDerivedFromVars(at.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(14, k = at.getDerivedFromVars(at.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(13, w = at.getDerivedFromVars(at.json.item_spacing))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || at.logError(Y(new Error('Empty "options" in "radio"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    72) {
      let Be = !1;
      o ? (zt.hasAction() || (T == null ? void 0 : T.mode) === "exclude") && (Be = !0, at.logError(Y(new Error('Cannot show "radio" inside component with an action or inside accessibility mode=exclude')))) : (Be = !0, at.logError(Y(new Error('Missing "value_variable" in "radio"')))), ge !== Be && e(3, ge = Be);
    }
    t.$$.dirty[0] & /*isEnabled*/
    16 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    32768 && e(4, je = un(Xe, je)), t.$$.dirty[0] & /*selectedColor*/
    67108864 | t.$$.dirty[1] & /*$jsonSelectedColor*/
    16384 && e(26, I = dr(ie, 1, I)), t.$$.dirty[0] & /*defaultColor*/
    134217728 | t.$$.dirty[1] & /*$jsonDefaultColor*/
    8192 && e(27, vt = dr(_e, 1, vt)), t.$$.dirty[0] & /*textColor*/
    268435456 | t.$$.dirty[1] & /*$jsonTextColor*/
    4096 && e(28, ft = dr(rt, 1, ft)), t.$$.dirty[0] & /*fontSize*/
    536870912 | t.$$.dirty[1] & /*$jsonFontSize*/
    2048 && e(29, St = typeof qe == "number" && qe > 0 ? qe : St), t.$$.dirty[0] & /*fontWeight*/
    1073741824 | t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontFamily*/
    1536 && (e(30, Tt = yi(Ie, void 0, Tt)), Ce && typeof Ce == "string" ? e(31, et = nt.typefaceProvider(Ce, { fontWeight: Tt || 400 })) : e(31, et = "")), t.$$.dirty[1] & /*$jsonOrientation, orientation*/
    258 && e(32, K = U === "horizontal" || U === "vertical" ? U : K), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    132 && e(33, At = typeof C == "number" && C >= 0 ? C : At), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    64 && (T != null && T.description ? e(6, _t = ri(T)) : at.logError(Y(new Error('Missing accessibility "description" for radio'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext*/
    1 && e(12, z = at.id || `radio_${Math.random().toString(36).slice(2)}`), t.$$.dirty[0] & /*isEnabled*/
    16 && e(11, H = { disabled: !je }), t.$$.dirty[1] & /*orientation*/
    2 && e(10, L = { [K]: !0 }), t.$$.dirty[0] & /*selectedColor, defaultColor, textColor, fontSize, fontWeight*/
    2080374784 | t.$$.dirty[1] & /*fontFamily*/
    1 && e(9, Q = {
      "--divkit-radio-selected-color": I,
      "--divkit-radio-default-color": vt,
      ...ft ? { "--divkit-radio-text-color": ft } : {},
      ...St ? { "font-size": ae(St) } : {},
      ...Tt ? { "font-weight": Tt } : {},
      ...et ? { "font-family": et } : {}
    }), t.$$.dirty[1] & /*itemSpacing*/
    4 && e(8, ce = `gap: ${ae(At)}`), t.$$.dirty[0] & /*container, componentContext, prevId*/
    33554437 && pe && at.json && (ut && (nt.unregisterFocusable(ut), e(25, ut = void 0)), at.id && !at.fakeElement && (e(25, ut = at.id), nt.registerFocusable(ut, {
      focus() {
        if (pe) {
          const Be = pe.querySelector("input");
          Be && Be.focus();
        }
      }
    })));
  }, [
    at,
    wt,
    pe,
    ge,
    je,
    s,
    _t,
    a,
    ce,
    Q,
    L,
    H,
    z,
    w,
    k,
    p,
    m,
    h,
    _,
    f,
    u,
    c,
    l,
    Le,
    Zt,
    ut,
    I,
    vt,
    ft,
    St,
    Tt,
    et,
    K,
    At,
    o,
    i,
    n,
    T,
    C,
    U,
    Ce,
    Ie,
    qe,
    rt,
    _e,
    ie,
    Xe,
    Jt,
    he
  ];
}
class fy extends Or {
  constructor(r) {
    super(), zr(this, r, uy, cy, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const dy = "appkit-progress", _y = "appkit-progress__linear", py = "appkit-progress__circular", ei = {
  progress: dy,
  progress__linear: _y,
  "progress__linear-fill": "appkit-progress__linear-fill",
  "progress__linear-fill_indeterminate": "appkit-progress__linear-fill_indeterminate",
  "progress-linear-indeterminate": "appkit-progress-linear-indeterminate",
  progress__circular: py,
  "progress__circular-track": "appkit-progress__circular-track",
  "progress__circular-fill": "appkit-progress__circular-fill",
  "progress__circular-fill_indeterminate": "appkit-progress__circular-fill_indeterminate",
  "progress-circular-indeterminate": "appkit-progress-circular-indeterminate"
};
function gy(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function hy(t) {
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
      $$slots: { default: [yy] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function my(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = en("svg"), e = en("circle"), n = en("circle"), g(e, "class", ei["progress__circular-track"]), g(e, "cx", Zo / 2), g(e, "cy", Zo / 2), g(e, "r", Kl), g(
        e,
        "stroke-width",
        /*trackThickness*/
        t[5]
      ), g(n, "class", o = mt("progress__circular-fill", ei, {
        indeterminate: (
          /*isIndeterminate*/
          t[4]
        )
      })), g(n, "cx", Zo / 2), g(n, "cy", Zo / 2), g(n, "r", Kl), g(
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
      )), g(n, "stroke-linecap", "round"), g(r, "class", ei.progress__circular), g(r, "width", Zo), g(r, "height", Zo), g(r, "viewBox", "0 0 " + Zo + " " + Zo), g(r, "role", "progressbar"), g(
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
function by(t) {
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
function yy(t) {
  let r;
  function e(i, s) {
    return (
      /*progressStyle*/
      i[3] === "linear" ? by : my
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = xt();
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
function wy(t) {
  let r, e, n, o;
  const i = [hy, gy], s = [];
  function a(l, c) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, [c]) {
      e && e.p(l, c);
    },
    i(l) {
      o || (W(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
const Zo = 48, Kl = 20;
function ky(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m = A, p = () => (m(), m = V(c, (rt) => e(19, h = rt)), c), k, w = A, z = () => (w(), w = V(l, (rt) => e(20, k = rt)), l), H, L = A, Q = () => (L(), L = V(a, (rt) => e(21, H = rt)), a), ce, T = A, X = () => (T(), T = V(s, (rt) => e(22, ce = rt)), s), le, C = A, M = () => (C(), C = V(i, (rt) => e(23, le = rt)), i), N, U = A, se = () => (U(), U = V(o, (rt) => e(24, N = rt)), o);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => L()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => C()), t.$$.on_destroy.push(() => U());
  let { componentContext: fe } = r, { layoutParams: Ce = void 0 } = r;
  Tr(Xr);
  let Ee = 0, de = "linear", Ie = !1, ee = "#129386", De = "rgba(0, 0, 0, .1)", qe = 4;
  function Ke() {
    e(2, Ee = 0), e(3, de = "linear"), e(4, Ie = !1), e(16, ee = "#129386"), e(17, De = "rgba(0, 0, 0, .1)"), e(5, qe = 4);
  }
  const ke = 2 * Math.PI * Kl;
  return t.$$set = (rt) => {
    "componentContext" in rt && e(0, fe = rt.componentContext), "layoutParams" in rt && e(1, Ce = rt.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(18, n = fe.origJson), t.$$.dirty & /*origJson*/
    262144 && n && Ke(), t.$$.dirty & /*componentContext*/
    1 && se(e(14, o = fe.getDerivedFromVars(fe.json.value))), t.$$.dirty & /*componentContext*/
    1 && M(e(13, i = fe.getDerivedFromVars(fe.json.style))), t.$$.dirty & /*componentContext*/
    1 && X(e(12, s = fe.getDerivedFromVars(fe.json.is_indeterminate))), t.$$.dirty & /*componentContext*/
    1 && Q(e(11, a = fe.getDerivedFromVars(fe.json.active_color))), t.$$.dirty & /*componentContext*/
    1 && z(e(10, l = fe.getDerivedFromVars(fe.json.inactive_color))), t.$$.dirty & /*componentContext*/
    1 && p(e(9, c = fe.getDerivedFromVars(fe.json.track_thickness))), t.$$.dirty & /*$jsonValue, progressValue*/
    16777220 && e(2, Ee = typeof N == "number" ? Math.max(0, Math.min(1, N)) : Ee), t.$$.dirty & /*$jsonStyle, progressStyle*/
    8388616 && e(3, de = le === "linear" || le === "circular" ? le : de), t.$$.dirty & /*$jsonIsIndeterminate, isIndeterminate*/
    4194320 && e(4, Ie = un(ce, Ie)), t.$$.dirty & /*$jsonActiveColor, activeColor*/
    2162688 && e(16, ee = dr(H, 1, ee)), t.$$.dirty & /*$jsonInactiveColor, inactiveColor*/
    1179648 && e(17, De = dr(k, 1, De)), t.$$.dirty & /*$jsonTrackThickness, trackThickness*/
    524320 && e(5, qe = typeof h == "number" && h >= 0 ? h : qe), t.$$.dirty & /*progressValue*/
    4 && e(8, u = ke * (1 - Ee)), t.$$.dirty & /*activeColor, inactiveColor*/
    196608 && e(7, f = {
      "--divkit-progress-active-color": ee,
      "--divkit-progress-inactive-color": De
    }), t.$$.dirty & /*isIndeterminate, progressValue*/
    20 && e(6, _ = Ie ? void 0 : Math.round(Ee * 100));
  }, [
    fe,
    Ce,
    Ee,
    de,
    Ie,
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
    ke,
    ee,
    De,
    n,
    h,
    k,
    H,
    ce,
    le,
    N
  ];
}
class vy extends Or {
  constructor(r) {
    super(), zr(this, r, ky, wy, Vr, { componentContext: 0, layoutParams: 1 });
  }
}
const jy = "appkit-table", Cy = "appkit-table_halign_start", Ey = "appkit-table_halign_center", Ay = "appkit-table_halign_end", Sy = "appkit-table_valign_start", Vy = "appkit-table_valign_center", Fy = "appkit-table_valign_end", Iy = "appkit-table__cell", Dy = "appkit-table__cell_halign_left", Ty = "appkit-table__cell_halign_start", My = "appkit-table__cell_halign_center", Py = "appkit-table__cell_halign_right", Ny = "appkit-table__cell_halign_end", zy = "appkit-table__cell_valign_top", Oy = "appkit-table__cell_valign_center", Ly = "appkit-table__cell_valign_bottom", Ry = "appkit-table__cell_valign_baseline", By = "appkit-table__separator", Hy = "appkit-table__separator_row", Wy = "appkit-table__separator_col", Go = {
  table: jy,
  table_halign_start: Cy,
  table_halign_center: Ey,
  table_halign_end: Ay,
  table_valign_start: Sy,
  table_valign_center: Vy,
  table_valign_end: Fy,
  table__cell: Iy,
  table__cell_halign_left: Dy,
  table__cell_halign_start: Ty,
  table__cell_halign_center: My,
  table__cell_halign_right: Py,
  table__cell_halign_end: Ny,
  table__cell_valign_top: zy,
  table__cell_valign_center: Oy,
  table__cell_valign_bottom: Ly,
  table__cell_valign_baseline: Ry,
  table__separator: By,
  table__separator_row: Hy,
  table__separator_col: Wy
};
function Hu(t, r, e) {
  const n = t.slice();
  return n[35] = r[e], n;
}
function Wu(t, r, e) {
  const n = t.slice();
  return n[38] = r[e], n;
}
function Uy(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Gy(t) {
  let r, e;
  return r = new yn({
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
      $$slots: { default: [Jy] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
    },
    m(n, o) {
      Rt(r, n, o), e = !0;
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
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
  return e = new Qn({
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
      r = Ve("div"), Ht(e.$$.fragment), g(r, "class", n = mt("table__cell", Go, {
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
      var z, H, L, Q, ce, T, X, le;
      const w = {};
      k[0] & /*cellPlacements*/
      16 && (w.componentContext = /*placement*/
      p[38].componentContext), k[0] & /*cellPlacements*/
      16 && (w.layoutParams = /*placement*/
      p[38].layoutParams), e.$set(w), (!s || k[0] & /*cellPlacements*/
      16 && n !== (n = mt("table__cell", Go, {
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
      ((H = (z = p[38].layoutParams.gridArea) == null ? void 0 : z.x) != null ? H : 0) + 1} / span ${/*placement*/
      (Q = (L = p[38].layoutParams.gridArea) == null ? void 0 : L.colSpan) != null ? Q : 1}`) && D(r, "grid-column", o), k[0] & /*cellPlacements*/
      16 && i !== (i = `${/*placement*/
      ((T = (ce = p[38].layoutParams.gridArea) == null ? void 0 : ce.y) != null ? T : 0) + 1} / span ${/*placement*/
      (le = (X = p[38].layoutParams.gridArea) == null ? void 0 : X.rowSpan) != null ? le : 1}`) && D(r, "grid-row", i), k[0] & /*cellPlacements*/
      16 && D(
        r,
        "background",
        /*placement*/
        p[38].backgroundStyle || void 0
      );
    },
    i(p) {
      s || (W(e.$$.fragment, p), s = !0);
    },
    o(p) {
      $(e.$$.fragment, p), s = !1;
    },
    d(p) {
      p && J(r), Bt(e);
    }
  };
}
function Gu(t) {
  let r, e, n, o;
  return {
    c() {
      r = Ve("div"), e = Ve("div"), o = cr(), g(e, "class", n = /*sep*/
      t[35].width ? Go.table__separator_col : Go.table__separator_row), D(
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
      ), g(r, "class", Go.table__separator), D(
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
      i[35].width ? Go.table__separator_col : Go.table__separator_row) && g(e, "class", n), s[0] & /*separatorElements*/
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
function Jy(t) {
  let r, e, n, o = ir(
    /*cellPlacements*/
    t[4]
  ), i = [];
  for (let c = 0; c < o.length; c += 1)
    i[c] = Uu(Wu(t, o, c));
  const s = (c) => $(i[c], 1, 1, () => {
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
      r = cr();
      for (let c = 0; c < l.length; c += 1)
        l[c].c();
      e = xt();
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
        o = ir(
          /*cellPlacements*/
          c[4]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const _ = Wu(c, o, f);
          i[f] ? (i[f].p(_, u), W(i[f], 1)) : (i[f] = Uu(_), i[f].c(), W(i[f], 1), i[f].m(r.parentNode, r));
        }
        for (_r(), f = o.length; f < i.length; f += 1)
          s(f);
        pr();
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
          W(i[u]);
        n = !0;
      }
    },
    o(c) {
      i = i.filter(Boolean);
      for (let u = 0; u < i.length; u += 1)
        $(i[u]);
      n = !1;
    },
    d(c) {
      c && (J(r), J(e)), nn(i, c), nn(l, c);
    }
  };
}
function qy(t) {
  let r, e, n, o;
  const i = [Gy, Uy], s = [];
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
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (_r(), $(s[u], 1, 1, () => {
        s[u] = null;
      }), pr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), W(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (W(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Yy(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p = A, k = () => (p(), p = V(s, (ue) => e(22, m = ue)), s), w, z = A, H = () => (z(), z = V(i, (ue) => e(23, w = ue)), i), L, Q = A, ce = () => (Q(), Q = V(a, (ue) => e(24, L = ue)), a), T, X = A, le = () => (X(), X = V(l, (ue) => e(25, T = ue)), l);
  t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => X());
  let { componentContext: C } = r, { layoutParams: M = void 0 } = r;
  const N = Tr(Xr), U = N.direction;
  bn(t, U, (ue) => e(21, h = ue));
  let se = !1, fe = "start", Ce = "start", Ee = [], de, Ie = [], ee = [], De = "";
  function qe() {
    e(3, se = !1), e(13, fe = "start"), e(14, Ce = "start");
  }
  function Ke(ue) {
    var ne, Ye;
    if (!ue || !ue.style) return null;
    let ie = "#E0E0E0", Fe = 1;
    const xe = ue.style;
    if (xe.type === "shape_drawable" && xe.shape) {
      const Le = xe.shape;
      ie = dr(Le.background_color || xe.color || "#E0E0E0"), Le.type === "rounded_rectangle" && (Fe = Number(((ne = Le.item_height) == null ? void 0 : ne.value) || ((Ye = Le.item_width) == null ? void 0 : Ye.value) || 1));
    } else xe.color && (ie = dr(xe.color));
    const Xe = ue.margins || {};
    return {
      color: ie,
      thickness: Fe,
      show_at_start: ue.show_at_start === 1 || ue.show_at_start === !0,
      show_between: ue.show_between !== 0 && ue.show_between !== !1,
      show_at_end: ue.show_at_end === 1 || ue.show_at_end === !0,
      marginTop: Number(Xe.top) || 0,
      marginBottom: Number(Xe.bottom) || 0,
      marginLeft: Number(Xe.left) || 0,
      marginRight: Number(Xe.right) || 0
    };
  }
  function ke(ue, ie) {
    const Fe = ue.header_row;
    let xe = [];
    return ue.row_builder && Array.isArray(ie) ? xe = _l(ie, N, C, ue.row_builder).map((ne) => ne.div) : Array.isArray(ue.rows) && (xe = ue.rows), { rows: xe, headerRow: Fe };
  }
  let rt = [];
  function ye(ue, ie) {
    rt = [];
    for (let Fe = 0; Fe < ue; Fe++)
      rt[Fe] = new Array(ie).fill(!1);
  }
  function Ae(ue, ie, Fe, xe) {
    var Xe;
    for (let ne = ue; ne < ue + Fe && ne < rt.length; ne++)
      for (let Ye = ie; Ye < ie + xe && Ye < (((Xe = rt[0]) == null ? void 0 : Xe.length) || 0); Ye++)
        rt[ne][Ye] = !0;
  }
  function _e(ue, ie) {
    var xe;
    if (ue >= rt.length) return ie;
    let Fe = ie;
    for (; Fe < (((xe = rt[0]) == null ? void 0 : xe.length) || 0) && rt[ue][Fe]; )
      Fe++;
    return Fe;
  }
  function x(ue, ie, Fe, xe, Xe, ne, Ye, Le, st, lt) {
    const at = Array.isArray(ue.cells) ? ue.cells : [];
    let wt = 0;
    for (let nt = 0; nt < at.length; nt++) {
      const zt = at[nt];
      if (!zt || !zt.div) continue;
      const ut = Math.max(1, Number(zt.column_span) || 1), pe = Math.max(1, Number(zt.row_span) || 1);
      wt = _e(ie, wt), Ae(ie, wt, pe, ut);
      const ge = Array.isArray(Fe) && Fe[wt], _t = zt.content_alignment_horizontal || ge && ge.content_alignment_horizontal || void 0, je = zt.content_alignment_vertical || ge && ge.content_alignment_vertical || void 0;
      let I;
      const vt = zt.background || xe;
      if (vt && Array.isArray(vt) && vt.length > 0) {
        const Tt = vt[0];
        Tt && Tt.type === "solid" && Tt.color && (I = dr(Tt.color));
      }
      const ft = st.get(zt.div);
      let St;
      ft ? (lt.delete(ft), St = ft) : St = C.produceChildContext(zt.div, { path: `${ne}_${nt}` }), Ye.push(St), Le.push({
        componentContext: St,
        layoutParams: {
          gridArea: {
            x: wt,
            y: ie,
            colSpan: ut,
            rowSpan: pe
          }
        },
        cellHAlign: _t,
        cellVAlign: je,
        backgroundStyle: I
      }), wt += ut;
    }
  }
  return on(() => {
    Ee.forEach((ue) => {
      ue.destroy();
    });
  }), t.$$set = (ue) => {
    "componentContext" in ue && e(0, C = ue.componentContext), "layoutParams" in ue && e(1, M = ue.layoutParams);
  }, t.$$.update = () => {
    var ue, ie, Fe;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(20, n = C.origJson), t.$$.dirty[0] & /*origJson*/
    1048576 && n && qe(), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, o = C.json.columns), t.$$.dirty[0] & /*componentContext*/
    1 && H(e(11, i = C.getDerivedFromVars(C.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && k(e(10, s = C.getDerivedFromVars(C.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(9, a = C.getDerivedFromVars(C.json.striped))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(8, l = typeof ((ue = C.json.row_builder) == null ? void 0 : ue.data) == "string" ? C.getDerivedFromVars((ie = C.json.row_builder) == null ? void 0 : ie.data, void 0, !0) : (Fe = C.json.row_builder) != null && Fe.data ? $o(C.json.row_builder.data) : void 0)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && (!Array.isArray(o) || o.length === 0 ? e(3, se = !0) : e(3, se = !1)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && e(17, c = Array.isArray(o) ? o.length : 0), t.$$.dirty[0] & /*jsonColumns*/
    524288)
      if (Array.isArray(o)) {
        const xe = [];
        for (let Xe = 0; Xe < o.length; Xe++) {
          const ne = o[Xe], Ye = ne == null ? void 0 : ne.width;
          if ((Ye == null ? void 0 : Ye.type) === "fixed" && Ye.value)
            xe.push(ae(Number(Ye.value)));
          else if ((Ye == null ? void 0 : Ye.type) === "match_parent") {
            const Le = Number(Ye.weight || 1);
            xe.push(`${Le}fr`);
          } else
            xe.push("auto");
        }
        e(16, De = xe.join(" "));
      } else
        e(16, De = "");
    if (t.$$.dirty[0] & /*componentContext, $jsonRowBuilderData*/
    33554433 && e(18, u = ke(C.json, T)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonColumns, allRows, columnCount, $jsonStriped*/
    17727493) {
      const xe = new Set(Ee), Xe = /* @__PURE__ */ new Map();
      de === C && Ee.forEach((I) => {
        Xe.set(I.json, I);
      });
      const ne = [], Ye = [], Le = [];
      let st = 0;
      const lt = C.json, at = Array.isArray(o) ? o : [], wt = !!(u.headerRow && Array.isArray(u.headerRow.cells)), nt = u.rows.length, zt = (wt ? 1 : 0) + nt;
      ye(zt + 10, c + 10);
      const ut = Ke(lt.row_separator), pe = Ke(lt.column_separator), ge = Ke(lt.header_separator);
      wt && (x(u.headerRow, st, at, u.headerRow.background || lt.header_background, void 0, -1, ne, Ye, Xe, xe), st++);
      const _t = u.rows;
      for (let I = 0; I < _t.length; I++) {
        const vt = _t[I];
        if (!vt || !Array.isArray(vt.cells)) continue;
        let ft = vt.background;
        !ft && L && (I % 2 === 0 ? ft = L.even_row_background : ft = L.odd_row_background), x(vt, st, at, ft, void 0, I, ne, Ye, Xe, xe), st++;
      }
      const je = st;
      if (ge && wt && nt > 0 && Le.push({
        gridColumn: `1 / span ${c}`,
        gridRow: "1 / span 1",
        background: ge.color,
        height: ae(ge.thickness),
        marginTop: ge.marginTop ? ae(ge.marginTop) : void 0,
        marginBottom: ge.marginBottom ? ae(ge.marginBottom) : void 0,
        marginLeft: ge.marginLeft ? ae(ge.marginLeft) : void 0,
        marginRight: ge.marginRight ? ae(ge.marginRight) : void 0
      }), ut) {
        const I = wt ? 1 : 0;
        if (ut.show_at_start && nt > 0 && Le.push({
          gridColumn: `1 / span ${c}`,
          gridRow: `${I + 1} / span 1`,
          background: ut.color,
          height: ae(ut.thickness),
          marginTop: ut.marginTop ? ae(ut.marginTop) : void 0,
          marginBottom: ut.marginBottom ? ae(ut.marginBottom) : void 0,
          marginLeft: ut.marginLeft ? ae(ut.marginLeft) : void 0,
          marginRight: ut.marginRight ? ae(ut.marginRight) : void 0
        }), ut.show_between)
          for (let vt = I; vt < je - 1; vt++)
            Le.push({
              gridColumn: `1 / span ${c}`,
              gridRow: `${vt + 1} / span 1`,
              background: ut.color,
              height: ae(ut.thickness),
              marginTop: ut.marginTop ? ae(ut.marginTop) : void 0,
              marginBottom: ut.marginBottom ? ae(ut.marginBottom) : void 0,
              marginLeft: ut.marginLeft ? ae(ut.marginLeft) : void 0,
              marginRight: ut.marginRight ? ae(ut.marginRight) : void 0
            });
        ut.show_at_end && nt > 0 && Le.push({
          gridColumn: `1 / span ${c}`,
          gridRow: `${je} / span 1`,
          background: ut.color,
          height: ae(ut.thickness),
          marginTop: ut.marginTop ? ae(ut.marginTop) : void 0,
          marginBottom: ut.marginBottom ? ae(ut.marginBottom) : void 0,
          marginLeft: ut.marginLeft ? ae(ut.marginLeft) : void 0,
          marginRight: ut.marginRight ? ae(ut.marginRight) : void 0
        });
      }
      if (pe && c > 0) {
        if (pe.show_at_start && Le.push({
          gridColumn: "1 / span 1",
          gridRow: `1 / span ${je}`,
          background: pe.color,
          width: ae(pe.thickness),
          marginTop: pe.marginTop ? ae(pe.marginTop) : void 0,
          marginBottom: pe.marginBottom ? ae(pe.marginBottom) : void 0,
          marginLeft: pe.marginLeft ? ae(pe.marginLeft) : void 0,
          marginRight: pe.marginRight ? ae(pe.marginRight) : void 0
        }), pe.show_between)
          for (let I = 0; I < c - 1; I++)
            Le.push({
              gridColumn: `${I + 1} / span 1`,
              gridRow: `1 / span ${je}`,
              background: pe.color,
              width: ae(pe.thickness),
              marginTop: pe.marginTop ? ae(pe.marginTop) : void 0,
              marginBottom: pe.marginBottom ? ae(pe.marginBottom) : void 0,
              marginLeft: pe.marginLeft ? ae(pe.marginLeft) : void 0,
              marginRight: pe.marginRight ? ae(pe.marginRight) : void 0
            });
        pe.show_at_end && Le.push({
          gridColumn: `${c} / span 1`,
          gridRow: `1 / span ${je}`,
          background: pe.color,
          width: ae(pe.thickness),
          marginTop: pe.marginTop ? ae(pe.marginTop) : void 0,
          marginBottom: pe.marginBottom ? ae(pe.marginBottom) : void 0,
          marginLeft: pe.marginLeft ? ae(pe.marginLeft) : void 0,
          marginRight: pe.marginRight ? ae(pe.marginRight) : void 0
        });
      }
      for (const I of xe)
        I.destroy();
      e(2, Ee = ne), e(4, Ie = Ye), e(5, ee = Le), e(15, de = C);
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    8396800 && e(13, fe = dl(w, fe)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    6307840 && e(14, Ce = fl(m, h, Ce)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    24576 && e(7, f = {
      valign: fe,
      halign: Ce
    }), t.$$.dirty[0] & /*gridTemplateColumns*/
    65536 && e(6, _ = {
      "grid-template-columns": De
    });
  }, [
    C,
    M,
    Ee,
    se,
    Ie,
    ee,
    _,
    f,
    l,
    a,
    s,
    i,
    U,
    fe,
    Ce,
    de,
    De,
    c,
    u,
    o,
    n,
    h,
    m,
    w,
    L,
    T
  ];
}
class Ky extends Or {
  constructor(r) {
    super(), zr(this, r, Yy, qy, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Xy = "appkit-counter", Zy = "appkit-counter__container", Qy = "appkit-counter__button", xy = "appkit-counter__value", $y = "appkit-counter_disabled", Mi = {
  counter: Xy,
  counter__container: Zy,
  counter__button: Qy,
  counter__value: xy,
  counter_disabled: $y
};
function ew(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function tw(t) {
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
      $$slots: { default: [rw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function rw(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, h, m, p, k;
  return {
    c() {
      r = Ve("div"), e = Ve("button"), n = en("svg"), o = en("line"), s = cr(), a = Ve("div"), l = Mn(
        /*value*/
        t[17]
      ), c = cr(), u = Ve("button"), f = en("svg"), _ = en("line"), h = en("line"), g(o, "x1", "6"), g(o, "y1", "12"), g(o, "x2", "18"), g(o, "y2", "12"), g(
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
      ), g(h, "stroke-width", "2.5"), g(h, "stroke-linecap", "round"), g(f, "viewBox", "0 0 24 24"), g(f, "fill", "none"), g(f, "xmlns", "http://www.w3.org/2000/svg"), g(u, "class", Mi.counter__button), u.disabled = m = !/*isEnabled*/
      t[3] || /*value*/
      t[17] >= /*maxValue*/
      t[12], g(u, "aria-label", "Increase value"), D(
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
      ), D(u, "width", ae(
        /*buttonSize*/
        t[5]
      )), D(u, "height", ae(
        /*buttonSize*/
        t[5]
      )), g(r, "class", Mi.counter__container);
    },
    m(w, z) {
      q(w, r, z), ht(r, e), ht(e, n), ht(n, o), ht(r, s), ht(r, a), ht(a, l), ht(r, c), ht(r, u), ht(u, f), ht(f, _), ht(f, h), p || (k = [
        We(
          e,
          "click",
          /*decrement*/
          t[36]
        ),
        We(
          u,
          "click",
          /*increment*/
          t[35]
        )
      ], p = !0);
    },
    p(w, z) {
      z[0] & /*iconColor*/
      64 && g(
        o,
        "stroke",
        /*iconColor*/
        w[6]
      ), z[0] & /*isEnabled, value, minValue*/
      133128 && i !== (i = !/*isEnabled*/
      w[3] || /*value*/
      w[17] <= /*minValue*/
      w[11]) && (e.disabled = i), z[0] & /*value, minValue, disabledButtonColor, buttonColor*/
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
      ), z[0] & /*buttonSize*/
      32 && D(e, "width", ae(
        /*buttonSize*/
        w[5]
      )), z[0] & /*buttonSize*/
      32 && D(e, "height", ae(
        /*buttonSize*/
        w[5]
      )), z[0] & /*value*/
      131072 && Xn(
        l,
        /*value*/
        w[17]
      ), z[0] & /*valueWidth*/
      1024 && D(a, "width", ae(
        /*valueWidth*/
        w[10]
      )), z[0] & /*textColor*/
      256 && D(
        a,
        "color",
        /*textColor*/
        w[8]
      ), z[0] & /*fontSize*/
      512 && D(a, "font-size", ae(
        /*fontSize*/
        w[9]
      )), z[0] & /*fontWeight*/
      8192 && D(
        a,
        "font-weight",
        /*fontWeight*/
        w[13]
      ), z[0] & /*iconColor*/
      64 && g(
        _,
        "stroke",
        /*iconColor*/
        w[6]
      ), z[0] & /*iconColor*/
      64 && g(
        h,
        "stroke",
        /*iconColor*/
        w[6]
      ), z[0] & /*isEnabled, value, maxValue*/
      135176 && m !== (m = !/*isEnabled*/
      w[3] || /*value*/
      w[17] >= /*maxValue*/
      w[12]) && (u.disabled = m), z[0] & /*value, maxValue, disabledButtonColor, buttonColor*/
      135312 && D(
        u,
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
      ), z[0] & /*buttonSize*/
      32 && D(u, "width", ae(
        /*buttonSize*/
        w[5]
      )), z[0] & /*buttonSize*/
      32 && D(u, "height", ae(
        /*buttonSize*/
        w[5]
      ));
    },
    d(w) {
      w && J(r), p = !1, Rr(k);
    }
  };
}
function nw(t) {
  let r, e, n, o;
  const i = [tw, ew], s = [];
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
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (_r(), $(s[u], 1, 1, () => {
        s[u] = null;
      }), pr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), W(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (W(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function ow(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, h, m, p, k, w, z, H, L, Q, ce, T, X, le, C, M = A, N = () => (M(), M = V(i, (tt) => e(46, C = tt)), i), U, se = A, fe = () => (se(), se = V(ce, (tt) => e(47, U = tt)), ce), Ce, Ee = A, de = () => (Ee(), Ee = V(Q, (tt) => e(48, Ce = tt)), Q), Ie, ee = A, De = () => (ee(), ee = V(L, (tt) => e(49, Ie = tt)), L), qe, Ke = A, ke = () => (Ke(), Ke = V(H, (tt) => e(50, qe = tt)), H), rt, ye = A, Ae = () => (ye(), ye = V(z, (tt) => e(51, rt = tt)), z), _e, x = A, ue = () => (x(), x = V(w, (tt) => e(52, _e = tt)), w), ie, Fe = A, xe = () => (Fe(), Fe = V(k, (tt) => e(53, ie = tt)), k), Xe, ne = A, Ye = () => (ne(), ne = V(p, (tt) => e(54, Xe = tt)), p), Le, st = A, lt = () => (st(), st = V(m, (tt) => e(55, Le = tt)), m), at, wt = A, nt = () => (wt(), wt = V(h, (tt) => e(56, at = tt)), h), zt, ut = A, pe = () => (ut(), ut = V(_, (tt) => e(57, zt = tt)), _), ge, _t = A, je = () => (_t(), _t = V(f, (tt) => e(58, ge = tt)), f), I, vt = A, ft = () => (vt(), vt = V(u, (tt) => e(59, I = tt)), u), St, Tt = A, et = () => (Tt(), Tt = V(c, (tt) => e(60, St = tt)), c), K, At = A, Mt = () => (At(), At = V(l, (tt) => e(61, K = tt)), l), Zt, Jt = A, he = () => (Jt(), Jt = V(a, (tt) => e(62, Zt = tt)), a), Be, pt = A, be = () => (pt(), pt = V(s, (tt) => e(63, Be = tt)), s);
  t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => x()), t.$$.on_destroy.push(() => Fe()), t.$$.on_destroy.push(() => ne()), t.$$.on_destroy.push(() => st()), t.$$.on_destroy.push(() => wt()), t.$$.on_destroy.push(() => ut()), t.$$.on_destroy.push(() => _t()), t.$$.on_destroy.push(() => vt()), t.$$.on_destroy.push(() => Tt()), t.$$.on_destroy.push(() => At()), t.$$.on_destroy.push(() => Jt()), t.$$.on_destroy.push(() => pt());
  let { componentContext: Qe } = r, { layoutParams: Oe = void 0 } = r;
  const tr = Tr(Xr), Ne = Tr(To);
  let yt = !1, Ft = !0, It = "#4CAF50", ur = 36, Me = "#ffffff", kt = "#cccccc", or = "#1B2630", $t = 16, Kt = 700, gr = 40, vr = "#F5F5F5", Nt = "#E0E0E0", yr = 1, G = 999, dt = 6, Gt = 0, jt = 99, wr = 1;
  const Ar = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  };
  function hr() {
    e(3, Ft = !0), e(4, It = "#4CAF50"), e(5, ur = 36), e(6, Me = "#ffffff"), e(7, kt = "#cccccc"), e(8, or = "#1B2630"), e(9, $t = 16), e(13, Kt = 700), e(10, gr = 40), e(37, vr = "#F5F5F5"), e(38, Nt = "#E0E0E0"), e(39, yr = 1), e(40, G = 999), e(41, dt = 6), e(11, Gt = 0), e(12, jt = 99), e(42, wr = 1);
  }
  function Fr() {
    if (!Ft) return;
    const tt = Math.min(T + wr, jt);
    tt !== T && (i.setValue(tt), Qe.json.on_increment_actions && Qe.execAnyActions(Qe.json.on_increment_actions), Qe.json.on_value_change_actions && Qe.execAnyActions(Qe.json.on_value_change_actions));
  }
  function Wr() {
    if (!Ft) return;
    const tt = Math.max(T - wr, Gt);
    tt !== T && (i.setValue(tt), Qe.json.on_decrement_actions && Qe.execAnyActions(Qe.json.on_decrement_actions), Qe.json.on_value_change_actions && Qe.execAnyActions(Qe.json.on_value_change_actions));
  }
  let rr;
  return on(() => {
    rr && (tr.unregisterFocusable(rr), e(43, rr = void 0));
  }), t.$$set = (tt) => {
    "componentContext" in tt && e(0, Qe = tt.componentContext), "layoutParams" in tt && e(1, Oe = tt.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(45, n = Qe.origJson), t.$$.dirty[1] & /*origJson*/
    16384 && n && hr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(44, o = Qe.json.counter_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8192 && N(e(16, i = o && (Qe.getVariable(o, "integer") || tr.awaitGlobalVariable(o, "integer", 0)) || io("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(34, s = Qe.getDerivedFromVars(Qe.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(33, a = Qe.getDerivedFromVars(Qe.json.button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Mt(e(32, l = Qe.getDerivedFromVars(Qe.json.button_size))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(31, c = Qe.getDerivedFromVars(Qe.json.icon_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(30, u = Qe.getDerivedFromVars(Qe.json.disabled_button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && je(e(29, f = Qe.getDerivedFromVars(Qe.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(28, _ = Qe.getDerivedFromVars(Qe.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && nt(e(27, h = Qe.getDerivedFromVars(Qe.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && lt(e(26, m = Qe.getDerivedFromVars(Qe.json.value_width))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(25, p = Qe.getDerivedFromVars(Qe.json.background_color))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(24, k = Qe.getDerivedFromVars(Qe.json.border_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(23, w = Qe.getDerivedFromVars(Qe.json.border_width))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(22, z = Qe.getDerivedFromVars(Qe.json.corner_radius))), t.$$.dirty[0] & /*componentContext*/
    1 && ke(e(21, H = Qe.getDerivedFromVars(Qe.json.padding))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(20, L = Qe.getDerivedFromVars(Qe.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(19, Q = Qe.getDerivedFromVars(Qe.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(18, ce = Qe.getDerivedFromVars(Qe.json.step))), t.$$.dirty[0] & /*isEnabled*/
    8 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    2 && e(3, Ft = un(Be, Ft)), t.$$.dirty[0] & /*buttonColor*/
    16 | t.$$.dirty[2] & /*$jsonButtonColor*/
    1 && e(4, It = dr(Zt, 1, It)), t.$$.dirty[0] & /*buttonSize*/
    32 | t.$$.dirty[1] & /*$jsonButtonSize*/
    1073741824 && e(5, ur = oo(K, ur)), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*$jsonIconColor*/
    536870912 && e(6, Me = dr(St, 1, Me)), t.$$.dirty[0] & /*disabledButtonColor*/
    128 | t.$$.dirty[1] & /*$jsonDisabledButtonColor*/
    268435456 && e(7, kt = dr(I, 1, kt)), t.$$.dirty[0] & /*textColor*/
    256 | t.$$.dirty[1] & /*$jsonTextColor*/
    134217728 && e(8, or = dr(ge, 1, or)), t.$$.dirty[0] & /*fontSize*/
    512 | t.$$.dirty[1] & /*$jsonFontSize*/
    67108864 && e(9, $t = oo(zt, $t)), t.$$.dirty[1] & /*$jsonFontWeight*/
    33554432) {
      const tt = at;
      if (typeof tt == "string")
        if (tt in Ar)
          e(13, Kt = Ar[tt]);
        else {
          const Ct = parseInt(tt, 10);
          !Number.isNaN(Ct) && Ct > 0 && e(13, Kt = Ct);
        }
      else typeof tt == "number" && tt > 0 && e(13, Kt = tt);
    }
    if (t.$$.dirty[0] & /*valueWidth*/
    1024 | t.$$.dirty[1] & /*$jsonValueWidth*/
    16777216 && e(10, gr = oo(Le, gr)), t.$$.dirty[1] & /*$jsonBackgroundColor, backgroundColor*/
    8388672 && e(37, vr = dr(Xe, 1, vr)), t.$$.dirty[1] & /*$jsonBorderColor, borderColor*/
    4194432 && e(38, Nt = dr(ie, 1, Nt)), t.$$.dirty[1] & /*$jsonBorderWidth, borderWidth*/
    2097408 && e(39, yr = oo(_e, yr)), t.$$.dirty[1] & /*$jsonCornerRadius, cornerRadius*/
    1049088 && e(40, G = oo(rt, G)), t.$$.dirty[1] & /*$jsonPadding, padding*/
    525312 && e(41, dt = oo(qe, dt)), t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$jsonMinValue, $jsonMaxValue*/
    393216 && (e(11, Gt = oo(Ie, Gt)), e(12, jt = oo(Ce, jt))), t.$$.dirty[1] & /*$jsonStep, step*/
    67584) {
      const tt = oo(U, wr);
      tt > 0 && e(42, wr = tt);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$valueVariable*/
    32768 && e(17, T = Fo(C || 0, Gt, jt)), t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*variable*/
    8192) {
      let tt = !1;
      o ? Ne.hasAction() && (tt = !0, Qe.logError(Y(new Error('Cannot show "counter" inside component with an action')))) : (tt = !0, Qe.logError(Y(new Error('Missing "counter_value_variable" in "counter"')))), yt !== tt && e(2, yt = tt);
    }
    t.$$.dirty[0] & /*isEnabled*/
    8 && e(15, X = { disabled: !Ft }), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*backgroundColor, borderColor, borderWidth, cornerRadius, padding*/
    1984 && e(14, le = {
      "--divkit-counter-bg": vr,
      "--divkit-counter-border-color": Nt,
      "--divkit-counter-border-width": ae(yr),
      "--divkit-counter-radius": ae(G),
      "--divkit-counter-padding": ae(dt),
      "--divkit-counter-icon-color": Me
    }), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*prevId*/
    4096 && Qe.json && (rr && (tr.unregisterFocusable(rr), e(43, rr = void 0)), Qe.id && !Qe.fakeElement && (e(43, rr = Qe.id), tr.registerFocusable(rr, {
      focus() {
      }
    })));
  }, [
    Qe,
    Oe,
    yt,
    Ft,
    It,
    ur,
    Me,
    kt,
    or,
    $t,
    gr,
    Gt,
    jt,
    Kt,
    le,
    X,
    i,
    T,
    ce,
    Q,
    L,
    H,
    z,
    w,
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
    Fr,
    Wr,
    vr,
    Nt,
    yr,
    G,
    dt,
    wr,
    rr,
    o,
    n,
    C,
    U,
    Ce,
    Ie,
    qe,
    rt,
    _e,
    ie,
    Xe,
    Le,
    at,
    zt,
    ge,
    I,
    St,
    K,
    Zt,
    Be
  ];
}
class iw extends Or {
  constructor(r) {
    super(), zr(this, r, ow, nw, Vr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const sw = "appkit-webview__frame", Xs = {
  webview__frame: sw,
  "webview__aspect-wrapper": "appkit-webview__aspect-wrapper"
};
function lw(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function aw(t) {
  let r, e;
  return r = new yn({
    props: {
      cls: mt("webview", Xs, {}),
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
      $$slots: { default: [fw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function cw(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Ve("iframe"), g(r, "class", Xs.webview__frame), Kn(r.src, e = /*url*/
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
        We(
          r,
          "load",
          /*onLoad*/
          t[15]
        ),
        We(
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
      a && J(r), i = !1, Rr(s);
    }
  };
}
function uw(t) {
  let r, e, n, o, i, s = `${/*aspectPaddingBottom*/
  t[6]}%`, a, l;
  return {
    c() {
      r = Ve("div"), e = Ve("iframe"), g(e, "class", Xs.webview__frame), Kn(e.src, n = /*url*/
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
      t[4] ? "auto" : "no"), g(e, "title", "webview"), g(r, "class", Xs["webview__aspect-wrapper"]), D(r, "padding-bottom", s);
    },
    m(c, u) {
      q(c, r, u), ht(r, e), a || (l = [
        We(
          e,
          "load",
          /*onLoad*/
          t[15]
        ),
        We(
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
      c[6]}%`) && D(r, "padding-bottom", s);
    },
    d(c) {
      c && J(r), a = !1, Rr(l);
    }
  };
}
function fw(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[6] !== "0" ? uw : cw
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = xt();
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
function dw(t) {
  let r, e, n, o;
  const i = [aw, lw], s = [];
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
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, [c]) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (_r(), $(s[u], 1, 1, () => {
        s[u] = null;
      }), pr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), W(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (W(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function _w(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _ = A, h = () => (_(), _ = V(c, (_e) => e(20, f = _e)), c), m, p = A, k = () => (p(), p = V(l, (_e) => e(21, m = _e)), l), w, z = A, H = () => (z(), z = V(a, (_e) => e(22, w = _e)), a), L, Q = A, ce = () => (Q(), Q = V(s, (_e) => e(23, L = _e)), s), T, X = A, le = () => (X(), X = V(i, (_e) => e(24, T = _e)), i), C, M = A, N = () => (M(), M = V(o, (_e) => e(25, C = _e)), o), U, se = A, fe = () => (se(), se = V(n, (_e) => e(26, U = _e)), n);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => se());
  let { componentContext: Ce } = r, { layoutParams: Ee = void 0 } = r;
  Tr(Xr);
  let de = !1, Ie, ee, De = !1, qe = !0, Ke = !1, ke = !1, rt = "0";
  function ye() {
    Ce.execAnyActions(Ce.json.on_load_actions);
  }
  function Ae() {
    Ce.execAnyActions(Ce.json.on_error_actions);
  }
  return t.$$set = (_e) => {
    "componentContext" in _e && e(0, Ce = _e.componentContext), "layoutParams" in _e && e(1, Ee = _e.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext*/
    1 && fe(e(14, n = Ce.getDerivedFromVars(Ce.json.url))), t.$$.dirty & /*componentContext*/
    1 && N(e(13, o = Ce.getDerivedFromVars(Ce.json.html))), t.$$.dirty & /*componentContext*/
    1 && le(e(12, i = Ce.getDerivedFromVars(Ce.json.javascript_enabled))), t.$$.dirty & /*componentContext*/
    1 && ce(e(11, s = Ce.getDerivedFromVars(Ce.json.allow_scrolling))), t.$$.dirty & /*componentContext*/
    1 && H(e(10, a = Ce.getDerivedFromVars(Ce.json.allow_navigation))), t.$$.dirty & /*componentContext*/
    1 && k(e(9, l = Ce.getDerivedFromVars(Ce.json.scale_to_fit))), t.$$.dirty & /*componentContext*/
    1 && h(e(8, c = Ce.getDerivedFromVars(Ce.json.aspect))), t.$$.dirty & /*$jsonUrl, $jsonHtml, url, html, componentContext*/
    100663309 && (e(2, Ie = typeof U == "string" ? U : void 0), e(3, ee = typeof C == "string" ? C : void 0), !Ie && !ee ? (e(5, de = !0), Ce.logError(Y(new Error('Missing "url" or "html" in "webview"')))) : e(5, de = !1)), t.$$.dirty & /*$jsonJsEnabled, javascriptEnabled*/
    16908288 && e(17, De = un(T, De)), t.$$.dirty & /*$jsonAllowScrolling, allowScrolling*/
    8388624 && e(4, qe = un(L, qe)), t.$$.dirty & /*$jsonAllowNavigation, allowNavigation*/
    4456448 && e(18, Ke = un(w, Ke)), t.$$.dirty & /*$jsonScaleToFit, scaleToFit*/
    2621440 && e(19, ke = un(m, ke)), t.$$.dirty & /*$jsonAspect*/
    1048576) {
      const _e = f == null ? void 0 : f.ratio;
      _e && Wn(_e) ? e(6, rt = (100 / Number(_e)).toFixed(2)) : e(6, rt = "0");
    }
    t.$$.dirty & /*javascriptEnabled, allowNavigation*/
    393216 && e(7, u = [
      "allow-same-origin",
      ...De ? ["allow-scripts"] : [],
      ...Ke ? ["allow-popups"] : []
    ].join(" "));
  }, [
    Ce,
    Ee,
    Ie,
    ee,
    qe,
    de,
    rt,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    n,
    ye,
    Ae,
    De,
    Ke,
    ke,
    f,
    m,
    w,
    L,
    T,
    C,
    U
  ];
}
class pw extends Or {
  constructor(r) {
    super(), zr(this, r, _w, dw, Vr, { componentContext: 0, layoutParams: 1 });
  }
}
function Ju(t, r, e) {
  const n = t.slice();
  return n[11] = r[e], n;
}
function gw(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function hw(t) {
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
      $$slots: { default: [mw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
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
      r = Ve("template"), Jo(r, n);
    },
    m(o, i) {
      q(o, r, i), r.content.innerHTML = /*templateContent*/
      t[7];
    },
    p(o, i) {
      i & /*templateContent*/
      128 && (r.content.innerHTML = /*templateContent*/
      o[7]), Jo(r, n = zo(e, [i & /*templateAttrs*/
      256 && /*templateAttrs*/
      o[8]]));
    },
    d(o) {
      o && J(r);
    }
  };
}
function Yu(t) {
  let r = (
    /*jsonItems*/
    t[5]
  ), e, n, o = Xu(t);
  return {
    c() {
      o.c(), e = xt();
    },
    m(i, s) {
      o.m(i, s), q(i, e, s), n = !0;
    },
    p(i, s) {
      s & /*jsonItems*/
      32 && Vr(r, r = /*jsonItems*/
      i[5]) ? (_r(), $(o, 1, 1, A), pr(), o = Xu(i), o.c(), W(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
    },
    i(i) {
      n || (W(o), n = !0);
    },
    o(i) {
      $(o), n = !1;
    },
    d(i) {
      i && J(e), o.d(i);
    }
  };
}
function Ku(t) {
  let r, e;
  return r = new Qn({
    props: { componentContext: (
      /*item*/
      t[11]
    ) }
  }), {
    c() {
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Xu(t) {
  let r, e, n = ir(
    /*items*/
    t[3]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Ku(Ju(t, n, s));
  const i = (s) => $(o[s], 1, 1, () => {
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
      q(s, r, a), e = !0;
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
          o[l] ? (o[l].p(c, a), W(o[l], 1)) : (o[l] = Ku(c), o[l].c(), W(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (_r(), l = n.length; l < o.length; l += 1)
          i(l);
        pr();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          W(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        $(o[a]);
      e = !1;
    },
    d(s) {
      s && J(r), nn(o, s);
    }
  };
}
function Tl(t) {
  let r, e, n, o = (
    /*templateContent*/
    t[7] && qu(t)
  ), i = !/*hasItemsError*/
  t[4] && /*jsonItems*/
  t[5] && Yu(t), s = [
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
    m(l, c) {
      q(l, r, c), o && o.m(r, null), ht(r, e), i && i.m(r, null), t[9](r), n = !0;
    },
    p(l, c) {
      /*templateContent*/
      l[7] ? o ? o.p(l, c) : (o = qu(l), o.c(), o.m(r, e)) : o && (o.d(1), o = null), !/*hasItemsError*/
      l[4] && /*jsonItems*/
      l[5] ? i ? (i.p(l, c), c & /*hasItemsError, jsonItems*/
      48 && W(i, 1)) : (i = Yu(l), i.c(), W(i, 1), i.m(r, null)) : i && (_r(), $(i, 1, 1, () => {
        i = null;
      }), pr()), ti(
        /*desc*/
        l[2].element
      )(r, a = zo(s, [
        c & /*componentContext*/
        1 && /*componentContext*/
        (l[0].json.custom_props || {})
      ]));
    },
    i(l) {
      n || (W(i), n = !0);
    },
    o(l) {
      $(i), n = !1;
    },
    d(l) {
      l && J(r), o && o.d(), i && i.d(), t[9](null);
    }
  };
}
function mw(t) {
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
      n && n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      /*desc*/
      o[2].element ? r ? Vr(
        r,
        /*desc*/
        o[2].element
      ) ? (n.d(1), n = Tl(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = Tl(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : r && (n.d(1), n = null, r = /*desc*/
      o[2].element);
    },
    i: A,
    o(o) {
      $(n, o);
    },
    d(o) {
      o && J(e), n && n.d(o);
    }
  };
}
function bw(t) {
  let r, e, n, o;
  const i = [hw, gw], s = [];
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
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, [c]) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (_r(), $(s[u], 1, 1, () => {
        s[u] = null;
      }), pr()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), W(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (W(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function yw(t, r, e) {
  let n, { componentContext: o } = r, { layoutParams: i = void 0 } = r;
  const s = Tr(Xr);
  let a, l = null, c = "", u = {}, f = [], _ = !1;
  ro(() => {
    if (a && "divKitApiCallback" in a && typeof a.divKitApiCallback == "function") {
      const m = s.getExtensionContext(o);
      a.divKitApiCallback(m);
    }
  }), on(() => {
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
          for (const [w, z] of p.variables)
            k.set(w, z.getValue());
          e(7, c = l.template({
            props: o.json.custom_props,
            variables: k
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
    }), e(3, f = (!_ && n || []).map((p, k) => o.produceChildContext(p, { path: k }))));
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
class ww extends Or {
  constructor(r) {
    super(), zr(this, r, yw, bw, Vr, { componentContext: 0, layoutParams: 1 });
  }
}
const kw = "appkit-breadcrumb", vw = "appkit-breadcrumb__list", jw = "appkit-breadcrumb__item", Cw = "appkit-breadcrumb__label", Ew = "appkit-breadcrumb__label_link", Aw = "appkit-breadcrumb__separator", mi = {
  breadcrumb: kw,
  breadcrumb__list: vw,
  breadcrumb__item: jw,
  breadcrumb__label: Cw,
  breadcrumb__label_link: Ew,
  breadcrumb__separator: Aw
};
function Zu(t, r, e) {
  const n = t.slice();
  return n[25] = r[e], n[27] = e, n;
}
function Sw(t) {
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Vw(t) {
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
      $$slots: { default: [Dw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Fw(t) {
  let r, e = (
    /*crumb*/
    t[25].title + ""
  ), n, o, i, s, a, l;
  function c() {
    return (
      /*click_handler*/
      t[21](
        /*crumb*/
        t[25]
      )
    );
  }
  function u(...f) {
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
      r = Ve("span"), n = Mn(e), o = cr(), i = Ve("span"), s = Mn(
        /*separator*/
        t[2]
      ), g(r, "class", mi.breadcrumb__label + " " + mi.breadcrumb__label_link), g(r, "role", "link"), g(r, "tabindex", "0"), g(i, "class", mi.breadcrumb__separator), g(i, "aria-hidden", "true");
    },
    m(f, _) {
      q(f, r, _), ht(r, n), q(f, o, _), q(f, i, _), ht(i, s), a || (l = [
        We(r, "click", c),
        We(r, "keydown", u)
      ], a = !0);
    },
    p(f, _) {
      t = f, _ & /*crumbs*/
      16 && e !== (e = /*crumb*/
      t[25].title + "") && Xn(n, e), _ & /*separator*/
      4 && Xn(
        s,
        /*separator*/
        t[2]
      );
    },
    d(f) {
      f && (J(r), J(o), J(i)), a = !1, Rr(l);
    }
  };
}
function Iw(t) {
  let r, e = (
    /*crumb*/
    t[25].title + ""
  ), n;
  return {
    c() {
      r = Ve("span"), n = Mn(e), g(r, "class", mi.breadcrumb__label), g(r, "aria-current", "page");
    },
    m(o, i) {
      q(o, r, i), ht(r, n);
    },
    p(o, i) {
      i & /*crumbs*/
      16 && e !== (e = /*crumb*/
      o[25].title + "") && Xn(n, e);
    },
    d(o) {
      o && J(r);
    }
  };
}
function Qu(t) {
  let r, e;
  function n(s, a) {
    return (
      /*index*/
      s[27] === /*crumbs*/
      s[4].length - 1 ? Iw : Fw
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
function Dw(t) {
  let r, e, n = ir(
    /*crumbs*/
    t[4]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Qu(Zu(t, n, i));
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
      i && J(r), nn(o, i);
    }
  };
}
function Tw(t) {
  let r, e, n, o;
  const i = [Vw, Sw], s = [];
  function a(l, c) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = xt();
    },
    m(l, c) {
      ~r && s[r].m(l, c), q(l, n, c), o = !0;
    },
    p(l, [c]) {
      e && e.p(l, c);
    },
    i(l) {
      o || (W(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Mw(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _ = A, h = () => (_(), _ = V(l, (De) => e(16, f = De)), l), m, p = A, k = () => (p(), p = V(a, (De) => e(17, m = De)), a), w, z = A, H = () => (z(), z = V(s, (De) => e(18, w = De)), s), L, Q = A, ce = () => (Q(), Q = V(i, (De) => e(19, L = De)), i), T, X = A, le = () => (X(), X = V(o, (De) => e(20, T = De)), o);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => X());
  let { componentContext: C } = r, { layoutParams: M = void 0 } = r;
  Tr(Xr);
  let N = "/", U = "#0077CC", se = "#111111", fe = 14;
  function Ce() {
    e(2, N = "/"), e(12, U = "#0077CC"), e(13, se = "#111111"), e(14, fe = 14);
  }
  function Ee(De) {
    De.action && C.execAnyActions([De.action]);
  }
  function de(De, qe) {
    qe.action && (De.key === "Enter" || De.key === " ") && (C.execAnyActions([qe.action]), De.preventDefault());
  }
  const Ie = (De) => Ee(De), ee = (De, qe) => de(qe, De);
  return t.$$set = (De) => {
    "componentContext" in De && e(0, C = De.componentContext), "layoutParams" in De && e(1, M = De.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(15, n = C.origJson), t.$$.dirty & /*origJson*/
    32768 && n && Ce(), t.$$.dirty & /*componentContext*/
    1 && le(e(9, o = C.getDerivedFromVars(C.json.separator))), t.$$.dirty & /*componentContext*/
    1 && ce(e(8, i = C.getDerivedFromVars(C.json.item_text_color))), t.$$.dirty & /*componentContext*/
    1 && H(e(7, s = C.getDerivedFromVars(C.json.active_text_color))), t.$$.dirty & /*componentContext*/
    1 && k(e(6, a = C.getDerivedFromVars(C.json.item_font_size))), t.$$.dirty & /*componentContext*/
    1 && h(e(5, l = C.getDerivedFromVars(C.json.crumbs))), t.$$.dirty & /*$jsonSeparator, separator*/
    1048580 && e(2, N = typeof T == "string" && T.length > 0 ? T : N), t.$$.dirty & /*$jsonItemTextColor, itemTextColor*/
    528384 && e(12, U = dr(L, 1, U)), t.$$.dirty & /*$jsonActiveTextColor, activeTextColor*/
    270336 && e(13, se = dr(w, 1, se)), t.$$.dirty & /*$jsonItemFontSize, itemFontSize*/
    147456 && e(14, fe = Hn(m, fe)), t.$$.dirty & /*$jsonCrumbs, componentContext*/
    65537 && e(4, c = Array.isArray(f) ? f : C.json.crumbs || []), t.$$.dirty & /*itemTextColor, activeTextColor, itemFontSize*/
    28672 && e(3, u = {
      "--divkit-breadcrumb-item-color": U,
      "--divkit-breadcrumb-active-color": se,
      "--divkit-breadcrumb-font-size": ae(fe)
    });
  }, [
    C,
    M,
    N,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    Ee,
    de,
    U,
    se,
    fe,
    n,
    f,
    m,
    w,
    L,
    T,
    Ie,
    ee
  ];
}
class Pw extends Or {
  constructor(r) {
    super(), zr(this, r, Mw, Tw, Vr, { componentContext: 0, layoutParams: 1 });
  }
}
const Yd = {
  text: cg,
  container: qg,
  separator: eh,
  image: Cc,
  gif: Cc,
  grid: Vh,
  gallery: xh,
  tabs: S0,
  state: Q0,
  pager: wm,
  indicator: Pm,
  slider: y1,
  input: Z1,
  select: sb,
  video: vb,
  switch: Pb,
  checkbox: qb,
  radio: fy,
  progress: vy,
  table: Ky,
  counter: iw,
  webview: pw,
  custom: ww,
  breadcrumb: Pw
};
function xu(t) {
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
  return o && (r = Pa(o, i(t))), {
    c() {
      r && Ht(r.$$.fragment), e = xt();
    },
    m(s, a) {
      r && Rt(r, s, a), q(s, e, a), n = !0;
    },
    p(s, a) {
      if (a & /*component*/
      4 && o !== (o = /*component*/
      s[2])) {
        if (r) {
          _r();
          const l = r;
          $(l.$$.fragment, 1, 0, () => {
            Bt(l, 1);
          }), pr();
        }
        o ? (r = Pa(o, i(s)), Ht(r.$$.fragment), W(r.$$.fragment, 1), Rt(r, e.parentNode, e)) : r = null;
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
      r && $(r.$$.fragment, s), n = !1;
    },
    d(s) {
      s && J(e), r && Bt(r, s);
    }
  };
}
function Nw(t) {
  let r, e, n = (
    /*component*/
    t[2] && xu(t)
  );
  return {
    c() {
      n && n.c(), r = xt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, [i]) {
      /*component*/
      o[2] ? n ? (n.p(o, i), i & /*component*/
      4 && W(n, 1)) : (n = xu(o), n.c(), W(n, 1), n.m(r.parentNode, r)) : n && (_r(), $(n, 1, 1, () => {
        n = null;
      }), pr());
    },
    i(o) {
      e || (W(n), e = !0);
    },
    o(o) {
      $(n), e = !1;
    },
    d(o) {
      o && J(r), n && n.d(o);
    }
  };
}
function zw(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r;
  const i = Tr(Xr);
  let s;
  return t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext, component*/
    5) {
      const a = n.json;
      if (e(2, s = (a == null ? void 0 : a.type) && Yd[a.type] || void 0), !s) {
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
class Qn extends Or {
  constructor(r) {
    super(), zr(this, r, zw, Nw, Vr, { componentContext: 0, layoutParams: 1 });
  }
}
const Ow = {
  "root-svg-filters": "appkit-root-svg-filters"
};
function $u(t, r, e) {
  const n = t.slice();
  n[1] = r[e];
  const o = (
    /*filterKey*/
    n[1].split(":")
  );
  return n[2] = o[0], n[3] = o[1], n;
}
function ef(t) {
  let r, e, n = ir([...Object.keys(
    /*svgFiltersMap*/
    t[0]
  )]), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = tf($u(t, n, i));
  return {
    c() {
      r = en("svg"), e = en("defs");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", Ow["root-svg-filters"]), g(r, "aria-hidden", "true");
    },
    m(i, s) {
      q(i, r, s), ht(r, e);
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
          const l = $u(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = tf(l), o[a].c(), o[a].m(e, null));
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
function Lw(t) {
  let r, e;
  return {
    c() {
      r = en("feBlend"), g(r, "in2", "SourceGraphic"), g(r, "mode", e = /*filterMode*/
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
function Rw(t) {
  let r;
  return {
    c() {
      r = en("feComposite"), g(r, "in2", "SourceGraphic"), g(r, "operator", "arithmetic"), g(r, "k1", "1"), g(r, "k2", "0"), g(r, "k3", "0"), g(r, "k4", "0");
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
function Bw(t) {
  let r, e;
  return {
    c() {
      r = en("feComposite"), g(r, "in2", "SourceGraphic"), g(r, "operator", e = /*filterMode*/
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
function tf(t) {
  let r, e, n, o;
  function i(l, c) {
    return (
      /*filterMode*/
      l[3] === "source_in" || /*filterMode*/
      l[3] === "source_atop" ? Bw : (
        /*filterMode*/
        l[3] === "multiply" ? Rw : Lw
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
    m(l, c) {
      q(l, r, c), ht(r, e), a.m(r, null);
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
      l && J(r), a.d();
    }
  };
}
function Hw(t) {
  let r = Object.keys(
    /*svgFiltersMap*/
    t[0]
  ).length, e, n = r && ef(t);
  return {
    c() {
      n && n.c(), e = xt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, e, i);
    },
    p(o, [i]) {
      i & /*svgFiltersMap*/
      1 && (r = Object.keys(
        /*svgFiltersMap*/
        o[0]
      ).length), r ? n ? n.p(o, i) : (n = ef(o), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: A,
    o: A,
    d(o) {
      o && J(e), n && n.d(o);
    }
  };
}
function Ww(t, r, e) {
  let { svgFiltersMap: n } = r;
  return t.$$set = (o) => {
    "svgFiltersMap" in o && e(0, n = o.svgFiltersMap);
  }, [n];
}
class Uw extends Or {
  constructor(r) {
    super(), zr(this, r, Ww, Hw, Vr, { svgFiltersMap: 0 });
  }
}
function Gw(t, r, e, n) {
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
      const p = u[m], k = s[p];
      if (k !== void 0) {
        const w = m.substring(1);
        c[w] = k;
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
const As = /* @__PURE__ */ new Map(), Xl = /* @__PURE__ */ new Map(), Ss = /* @__PURE__ */ new Map(), Zl = /* @__PURE__ */ new Map();
function B(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = As.get(t) || [];
  As.has(t) || As.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  Xl.set(i, n);
}
function Lr(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = Ss.get(t) || [];
  Ss.has(t) || Ss.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  Zl.set(i, n);
}
function Jw(t, r, e) {
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
    }), l.type === gt && r[a].type === Pe) {
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
function Kd(t, r) {
  if (!t)
    return {
      type: "missing"
    };
  let e = null, n = null;
  for (let o = 0; o < t.length; ++o) {
    const i = Jw(t[o], r, t.length > 1);
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
function Ql(t, r, e) {
  return Kd(t.get(r), e);
}
function Xd(t, r) {
  return r.map((e, n) => {
    let o = n >= t.args.length ? t.args[t.args.length - 1] : t.args[n];
    return typeof o != "object" && (o = {
      type: o
    }), o.type === gt && e.type === Pe ? Gl(e) : e;
  });
}
function rf(t, r) {
  return t + ":" + r.args.map((e) => typeof e == "string" ? e : e.type).join("#");
}
function Rn(t, r) {
  return {
    type: He,
    value: Ci(r, !0)
  };
}
function nf(t, r) {
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
function qw(t, r) {
  if (r.value > as || r.value < cs)
    throw new Error("Unable to convert value to Integer.");
  const e = r.value - r.value % 1;
  return {
    type: Pe,
    value: _n(e)
  };
}
function Yw(t, r) {
  let e;
  try {
    e = _n(r.value);
  } catch {
    throw new Error("Unable to convert value to Integer.");
  }
  return {
    type: Pe,
    value: e
  };
}
function Kw(t, r) {
  return {
    type: Pe,
    value: _n(r.value ? 1 : 0)
  };
}
function Xw(t, r) {
  const e = Number(r.value);
  if (e !== 1 && e !== 0)
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Hr,
    value: e
  };
}
function Zw(t, r) {
  if (r.value !== "true" && r.value !== "false")
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Hr,
    value: r.value === "true" ? 1 : 0
  };
}
function Qw(t, r) {
  return {
    type: fn,
    value: oi(r.value)
  };
}
function xw(t, r) {
  return go(r.value), {
    type: eo,
    value: r.value
  };
}
function $w(t, r) {
  try {
    return {
      type: He,
      value: encodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to encodeUri string.");
  }
}
function ek(t, r) {
  try {
    return {
      type: He,
      value: decodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to decodeUri string.");
  }
}
function va(t, r, e, n) {
  const o = t.variables.get(r.value);
  let i;
  return o && o.getType() === n ? (i = o.getValue(), t.storeUsedVars || (t.storeUsedVars = /* @__PURE__ */ new Set()), t.storeUsedVars.add(o)) : i = e.value, n === "color" ? i = oi(i) : n === "url" && go(i), {
    type: n,
    // value is synced with type by params
    value: i
  };
}
function hs(t, r, e) {
  return va(t, r, e, e.type);
}
function of(t, r, e) {
  return va(t, r, e, "color");
}
function sf(t, r, e) {
  return va(t, r, e, "url");
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
function lf(t) {
  const r = new Intl.NumberFormat(t, {
    maximumFractionDigits: 0
  }), e = new Intl.NumberFormat(t, {
    minimumFractionDigits: 1
  }), n = r.format(Zs), o = e.format(Zs);
  return Zd(n, o);
}
function tk(t) {
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
    let k = p;
    for (; f[k] === "#"; )
      ++k;
    let z = new Intl.NumberFormat((n == null ? void 0 : n.value) || void 0, {
      useGrouping: !1,
      minimumIntegerDigits: Math.min(Math.max(m, 1), 21),
      minimumFractionDigits: Math.min(Math.max(p, 0), 100),
      maximumFractionDigits: Math.min(Math.max(k, p, 0), 100),
      roundingMode: "halfEven"
    }).format(r.value);
    if (_ > -1 && h > 0) {
      const H = tk(n == null ? void 0 : n.value), L = lf(n == null ? void 0 : n.value);
      if (H && L) {
        const Q = z.split(L), ce = Q[0];
        let T = "";
        for (let X = ce.length - 1; X >= 0; --X)
          T = ce[X] + T, X > 0 && (ce.length - X) % h === 0 && (T = H + T);
        z = T + (Q.length > 1 ? L + Q[1] : "");
      }
    }
    if (p === 0 && k === 0 && o.endsWith(".")) {
      const H = lf(n == null ? void 0 : n.value);
      H && (z += H);
    }
    return {
      type: He,
      value: z
    };
  } catch (m) {
    throw new Error("Incorrect or unsupported number format." + m + " " + (n == null ? void 0 : n.value) || void 0);
  }
}
function rk() {
  B("toString", [Pe], Rn), B("toString", [gt], Rn), B("toString", [Hr], Rn), B("toString", [fn], Rn), B("toString", [eo], Rn), B("toString", [He], Rn), B("toString", [ar], Rn), B("toString", [lr], Rn), B("toNumber", [Pe], nf), B("toNumber", [He], nf), B("toInteger", [gt], qw), B("toInteger", [He], Yw), B("toInteger", [Hr], Kw), B("toBoolean", [Pe], Xw), B("toBoolean", [He], Zw), B("toColor", [He], Qw), B("toUrl", [He], xw), B("encodeUri", [He], $w), B("decodeUri", [He], ek), B("getIntegerValue", [He, Pe], hs), B("getNumberValue", [He, gt], hs), B("getBooleanValue", [He, Hr], hs), B("getStringValue", [He, He], hs), B("getColorValue", [He, fn], of), B("getColorValue", [He, He], of), B("getUrlValue", [He, eo], sf), B("getUrlValue", [He, He], sf), Lr("toString", [Pe], Rn), Lr("toString", [gt], Rn), Lr("toString", [Hr], Rn), Lr("toString", [fn], Rn), Lr("toString", [eo], Rn), Lr("toString", [He], Rn), Lr("toString", [ar], Rn), Lr("toString", [lr], Rn), B("decimalFormat", [Pe, He], Qo), B("decimalFormat", [gt, He], Qo), B("decimalFormat", [Pe, He, He], Qo), B("decimalFormat", [gt, He, He], Qo), Lr("decimalFormat", [Pe, He], Qo), Lr("decimalFormat", [gt, He], Qo), Lr("decimalFormat", [Pe, He, He], Qo), Lr("decimalFormat", [gt, He, He], Qo);
}
function Bn(t, r) {
  return !t || !r ? t : t.padStart(r, "0");
}
const xl = {
  G(t, r) {
    let e;
    return t < 4 ? e = "short" : t === 5 ? e = "narrow" : e = "long", r({
      era: e
    }, "era");
  },
  d(t, r) {
    return Bn(r({
      day: "numeric"
    }, "day"), t > 1 ? t : 0);
  },
  D(t, r) {
    return Bn(r({}, "dayofyear"), t > 1 ? t : 0);
  },
  F(t, r) {
    return Bn(r({}, "dayofweekinmonth"), t > 1 ? t : 0);
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
    return Bn(r({
      year: t === 2 ? "2-digit" : "numeric"
    }, "year"), t > 2 ? t : void 0);
  },
  Y(t, r) {
    return Bn(r({
      year: t === 2 ? "2-digit" : "numeric"
    }, "weekyear"), t > 2 ? t : void 0);
  },
  u(t, r) {
    return Bn(r({
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
    return t > 2 ? xl.E(t, r) : Bn(r({}, "weekdaynumeric"), t > 1 ? t : void 0);
  },
  w(t, r) {
    return Bn(r({}, "week"), t > 1 ? t : void 0);
  },
  W(t, r) {
    return Bn(r({}, "weekofmonth"), t > 1 ? t : void 0);
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
    return Bn(n, t > 1 ? t : void 0);
  },
  h(t, r) {
    return Bn(r({
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
    return Bn(n, t > 1 ? t : void 0);
  },
  k(t, r) {
    return Bn(r({
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
    return Bn(r({
      minute: "numeric"
    }, "minute"), t > 1 ? t : void 0);
  },
  s(t, r) {
    return Bn(r({
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
    return (e >= 0 ? "+" : "-") + Bn(String(o), 4);
  }
}, nk = /(\w)\1*|''|'(''|[^'])+('|$)|./g, ok = /^'([^]*?)'?$/, ik = /''/g, sk = /[a-zA-Z]/, ja = 1e3 * 60 * 60 * 24;
function lk(t) {
  const r = t.match(ok);
  return r ? r[1].replace(ik, "'") : t;
}
function $l(t, r, e) {
  const n = t[r ? "getUTCDay" : "getDay"](), o = n < e ? e - n - 7 : e - n;
  return new Date(t.getTime() + ja * o);
}
function af(t, r, e) {
  const n = new Date(t);
  return n[r ? "setUTCDate" : "setDate"](1), n[r ? "setUTCMonth" : "setMonth"](0), $l(n, r, e);
}
function cf(t, r) {
  return Math.round((t.getTime() - r.getTime()) / ja);
}
function uf(t, r, e) {
  let n = 0;
  const o = af(t, r || !1, e), i = new Date(t);
  i[r ? "setUTCFullYear" : "setFullYear"](t[r ? "getUTCFullYear" : "getFullYear"]() + 1);
  const s = af(i, r || !1, e), a = t.getTime() < o.getTime(), l = t.getTime() >= s.getTime();
  let c = t[r ? "getUTCFullYear" : "getFullYear"]();
  if (a) {
    --c, o[r ? "setUTCFullYear" : "setFullYear"](o[r ? "getUTCFullYear" : "getFullYear"]() - 1);
    const u = cf($l(t, r, e), o);
    n = Math.round(u / 7) + 1;
  } else if (l)
    ++c, n = 1;
  else {
    const u = cf($l(t, r, e), o);
    n = Math.round(u / 7) + 1;
  }
  return {
    week: n,
    year: c
  };
}
function ak(t, r, {
  locale: e,
  isUTC: n,
  weekStartDay: o = 0
} = {}) {
  const i = (s, a) => {
    if (a === "week") {
      const { week: u } = uf(t, n || !1, o);
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
      const f = Math.ceil((t.getTime() - u.getTime()) / ja);
      return String(f);
    }
    if (a === "weekyear") {
      let { year: u } = uf(t, n || !1, o);
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
  return (r.match(nk) || []).map((s) => {
    if (s === "''")
      return "'";
    const a = s[0];
    if (a === "'")
      return lk(s);
    if (xl[a])
      return xl[a](s.length, i);
    if (a.match(sk))
      throw new Error(
        `Format string contains an unescaped latin alphabet character "${a}"`
      );
    return s;
  }).join("");
}
function ck(t) {
  const r = new Date(t);
  return r.setUTCMonth(r.getUTCMonth() + 1), r.setUTCDate(0), r.getUTCDate();
}
function uk(t, r) {
  return {
    type: Pr,
    value: new Date(Number(r.value) * 1e3)
  };
}
function fk(t, r) {
  const e = new Date(Number(r.value) * 1e3), n = e.getTimezoneOffset();
  return e.setMinutes(e.getMinutes() - n), {
    type: Pr,
    value: e
  };
}
function dk() {
  return {
    type: Pr,
    value: /* @__PURE__ */ new Date()
  };
}
function _k(t, r, e) {
  return {
    type: Pr,
    value: new Date(r.value.getTime() + Number(e.value))
  };
}
function pk(t, r, e) {
  const n = new Date(r.value);
  return n.setUTCFullYear(Number(e.value)), {
    type: Pr,
    value: n
  };
}
function gk(t, r, e) {
  const n = Number(e.value);
  if (n < 1 || n > 12)
    throw new Error(`Expecting month in [1..12], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMonth(n - 1), {
    type: Pr,
    value: o
  };
}
function hk(t, r, e) {
  const n = new Date(r.value), o = Number(e.value);
  if (o <= 0 && o !== -1 || o > ck(n))
    throw new Error(`Unable to set day ${o} for date ${Ci(r, !1)}.`);
  return n.setUTCDate(o === -1 ? 0 : o), {
    type: Pr,
    value: n
  };
}
function mk(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 23)
    throw new Error(`Expecting hours in [0..23], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCHours(n), {
    type: Pr,
    value: o
  };
}
function bk(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting minutes in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMinutes(n), {
    type: Pr,
    value: o
  };
}
function yk(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting seconds in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCSeconds(n), {
    type: Pr,
    value: o
  };
}
function wk(t, r, e) {
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
    type: Pe,
    value: _n(o)
  };
};
function Qd(t) {
  return (r, e, n, o) => ({
    type: He,
    value: ak(e.value, n.value, {
      locale: o == null ? void 0 : o.value,
      isUTC: t,
      weekStartDay: r.weekStartDay
    })
  });
}
const kk = ii("getUTCFullYear"), vk = ii("getUTCMonth"), jk = ii("getUTCDate"), Ck = ii("getUTCDay"), Ek = ii("getUTCHours"), Ak = ii("getUTCMinutes"), Sk = ii("getUTCSeconds"), Vk = ii("getUTCMilliseconds"), ff = Qd(!1), df = Qd(!0);
function Fk() {
  B("parseUnixTime", [Pe], uk), B("parseUnixTimeAsLocal", [Pe], fk), B("nowLocal", [], dk), B("addMillis", [Pr, Pe], _k), B("setYear", [Pr, Pe], pk), B("setMonth", [Pr, Pe], gk), B("setDay", [Pr, Pe], hk), B("setHours", [Pr, Pe], mk), B("setMinutes", [Pr, Pe], bk), B("setSeconds", [Pr, Pe], yk), B("setMillis", [Pr, Pe], wk), B("getYear", [Pr], kk), B("getMonth", [Pr], vk), B("getDay", [Pr], jk), B("getDayOfWeek", [Pr], Ck), B("getHours", [Pr], Ek), B("getMinutes", [Pr], Ak), B("getSeconds", [Pr], Sk), B("getMillis", [Pr], Vk), B("formatDateAsLocal", [Pr, He], ff), B("formatDateAsUTC", [Pr, He], df), B("formatDateAsLocalWithLocale", [Pr, He, He], ff), B("formatDateAsUTCWithLocale", [Pr, He, He], df);
}
function Ik(t) {
  return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Dk(t, r) {
  return {
    type: Pe,
    value: _n(r.value.length)
  };
}
function Tk(t, r, e) {
  return {
    type: Hr,
    value: r.value.includes(e.value) ? 1 : 0
  };
}
function Mk(t, r, e, n) {
  if (n.value < e.value)
    throw new Error("Indexes should be in ascending order.");
  if (e.value < 0 || e.value > r.value.length || n.value < 0 || n.value > r.value.length)
    throw new Error("Indexes are out of bounds.");
  return {
    type: He,
    value: r.value.substring(Number(e.value), Number(n.value))
  };
}
function Pk(t, r, e, n) {
  let o;
  return e.value ? o = r.value.replace(new RegExp(Ik(e.value), "g"), n.value) : o = r.value, {
    type: He,
    value: o
  };
}
function Nk(t, r, e) {
  return {
    type: Pe,
    value: _n(r.value.indexOf(e.value))
  };
}
function zk(t, r, e) {
  return {
    type: Pe,
    value: _n(r.value.lastIndexOf(e.value))
  };
}
function Ok(t, r) {
  return {
    type: He,
    value: r.value.trim()
  };
}
function Lk(t, r) {
  return {
    type: He,
    value: r.value.replace(/^\s+/, "")
  };
}
function Rk(t, r) {
  return {
    type: He,
    value: r.value.replace(/\s+$/, "")
  };
}
function Bk(t, r) {
  return {
    type: He,
    value: r.value.toUpperCase()
  };
}
function Hk(t, r) {
  return {
    type: He,
    value: r.value.toLowerCase()
  };
}
function xd(t, r, e, n) {
  if (!n.value.length)
    return t.warnings.push(Y(new Error("String for padding is empty."), {
      level: "warn"
    })), "";
  let o = "";
  const i = r.type === He ? r.value : Ci(r, !1);
  for (; o.length + i.length < e.value; )
    o += n.value;
  return o.length > 0 && o.length + i.length > e.value && (o = o.substring(0, Number(e.value) - Number(i.length))), o;
}
function _f(t, r, e, n) {
  const o = xd(t, r, e, n);
  return {
    type: He,
    value: o + Ci(r, !1)
  };
}
function pf(t, r, e, n) {
  const o = xd(t, r, e, n);
  return {
    type: He,
    value: Ci(r, !1) + o
  };
}
function Wk(t, r, e) {
  let n;
  try {
    n = new RegExp(e.value);
  } catch {
    throw new Error("Invalid regular expression.");
  }
  return {
    type: Hr,
    value: n.test(r.value) ? 1 : 0
  };
}
function Uk(t, r) {
  return {
    type: He,
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping
    value: r.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  };
}
function Gk() {
  B("len", [He], Dk), B("contains", [He, He], Tk), B("substring", [He, Pe, Pe], Mk), B("replaceAll", [He, He, He], Pk), B("index", [He, He], Nk), B("lastIndex", [He, He], zk), B("trim", [He], Ok), B("trimLeft", [He], Lk), B("trimRight", [He], Rk), B("toUpperCase", [He], Bk), B("toLowerCase", [He], Hk), B("padStart", [He, Pe, He], _f), B("padStart", [Pe, Pe, He], _f), B("padEnd", [He, Pe, He], pf), B("padEnd", [Pe, Pe, He], pf), B("testRegex", [He, He], Wk), B("encodeRegex", [He], Uk);
}
function Jk(t, r, e) {
  if (e.value === vi)
    throw new Error("Division by zero is not supported.");
  let n = r.value / e.value;
  return n = Ei(t, n), Pn(t, n), {
    type: Pe,
    value: n
  };
}
function qk(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value / e.value;
  return {
    type: gt,
    value: n
  };
}
function Yk(t, r, e) {
  if (e.value === vi)
    throw new Error("Division by zero is not supported.");
  let n = r.value % e.value;
  return n = Ei(t, n), Pn(t, n), {
    type: Pe,
    value: n
  };
}
function Kk(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value % e.value;
  return {
    type: gt,
    value: n
  };
}
function Xk(t, ...r) {
  let e = r.length ? r[0].value : vi;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value, e = Ei(t, e), Pn(t, e);
  return {
    type: Pe,
    value: e
  };
}
function Zk(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value;
  return {
    type: gt,
    value: e
  };
}
function Qk(t, ...r) {
  let e = r.length ? r[0].value : vi;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value, e = Ei(t, e), Pn(t, e);
  return {
    type: Pe,
    value: e
  };
}
function xk(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value;
  return {
    type: gt,
    value: e
  };
}
function $k(t, ...r) {
  let e = vi;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value, e = Ei(t, e), Pn(t, e);
  return {
    type: Pe,
    value: e
  };
}
function ev(t, ...r) {
  let e = 0;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value;
  return {
    type: gt,
    value: e
  };
}
function tv(t, r) {
  const e = Pd(r.value);
  return Pn(t, e), {
    type: r.type,
    value: e
  };
}
function rv(t, r) {
  const e = Math.abs(r.value);
  return {
    type: gt,
    value: e
  };
}
function nv(t, ...r) {
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
function ov(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: gt,
    value: Math.max(...r.map((e) => e.value))
  };
}
function iv(t, ...r) {
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
function sv(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: gt,
    value: Math.min(...r.map((e) => e.value))
  };
}
function lv() {
  return {
    type: gt,
    value: Ym
  };
}
function av() {
  return {
    type: gt,
    value: Km
  };
}
function cv(t) {
  return Pn(t, as), {
    type: Pe,
    value: as
  };
}
function uv(t) {
  return Pn(t, cs), {
    type: Pe,
    value: cs
  };
}
function fv(t, r) {
  const e = Math.sign(r.value);
  return {
    type: gt,
    // js treats Math.round(-0.5) as 0, which is different to other platforms
    value: e * Math.round(Math.abs(r.value))
  };
}
function dv(t, r) {
  return {
    type: gt,
    value: Math.floor(r.value)
  };
}
function _v(t, r) {
  return {
    type: gt,
    value: Math.ceil(r.value)
  };
}
function pv(t, r) {
  return {
    type: Pe,
    value: Nd(r.value)
  };
}
function gv(t, r) {
  return {
    type: gt,
    value: Math.sign(r.value)
  };
}
function hv(t, r, e) {
  let n;
  if (e.value === vi)
    n = r.value;
  else if (r.value === vi)
    n = _n(0);
  else {
    const o = Nd(e.value);
    n = Pd(r.value) * o;
  }
  return Pn(t, n), {
    type: Pe,
    value: n
  };
}
function mv(t, r, e) {
  let n = Math.sign(e.value);
  n === 0 && (n = Object.is(n, 0) ? 1 : -1);
  const o = Math.abs(r.value) * n;
  return {
    type: gt,
    value: o
  };
}
function bv() {
  B("div", [Pe, Pe], Jk), B("div", [gt, gt], qk), B("mod", [Pe, Pe], Yk), B("mod", [gt, gt], Kk), B("mul", [{
    type: Pe,
    isVararg: !0
  }], Xk), B("mul", [{
    type: gt,
    isVararg: !0
  }], Zk), B("sub", [{
    type: Pe,
    isVararg: !0
  }], Qk), B("sub", [{
    type: gt,
    isVararg: !0
  }], xk), B("sum", [{
    type: Pe,
    isVararg: !0
  }], $k), B("sum", [{
    type: gt,
    isVararg: !0
  }], ev), B("abs", [Pe], tv), B("abs", [gt], rv), B("max", [{
    type: Pe,
    isVararg: !0
  }], nv), B("max", [{
    type: gt,
    isVararg: !0
  }], ov), B("min", [{
    type: Pe,
    isVararg: !0
  }], iv), B("min", [{
    type: gt,
    isVararg: !0
  }], sv), B("maxNumber", [], lv), B("minNumber", [], av), B("maxInteger", [], cv), B("minInteger", [], uv), B("round", [gt], fv), B("floor", [gt], dv), B("ceil", [gt], _v), B("signum", [Pe], pv), B("signum", [gt], gv), B("copySign", [Pe, Pe], hv), B("copySign", [gt, gt], mv);
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
      type: fn,
      value: Ai(o)
    };
  };
}
const gf = bl("a"), hf = bl("r"), mf = bl("g"), bf = bl("b"), yf = yl("a"), wf = yl("r"), kf = yl("g"), vf = yl("b");
function yv(t, r, e, n) {
  const o = {
    a: 255,
    r: r.value * 255,
    g: e.value * 255,
    b: n.value * 255
  };
  return {
    type: fn,
    value: Ai(o)
  };
}
function wv(t, r, e, n, o) {
  const i = {
    a: r.value * 255,
    r: e.value * 255,
    g: n.value * 255,
    b: o.value * 255
  };
  return {
    type: fn,
    value: Ai(i)
  };
}
function kv() {
  B("getColorAlpha", [He], gf), B("getColorAlpha", [fn], gf), B("getColorRed", [He], hf), B("getColorRed", [fn], hf), B("getColorGreen", [He], mf), B("getColorGreen", [fn], mf), B("getColorBlue", [He], bf), B("getColorBlue", [fn], bf), B("setColorAlpha", [He, gt], yf), B("setColorAlpha", [fn, gt], yf), B("setColorRed", [He, gt], wf), B("setColorRed", [fn, gt], wf), B("setColorGreen", [He, gt], kf), B("setColorGreen", [fn, gt], kf), B("setColorBlue", [He, gt], vf), B("setColorBlue", [fn, gt], vf), B("rgb", [gt, gt, gt], yv), B("argb", [gt, gt, gt, gt], wv);
}
function si(t, r, e, n) {
  if (r.value < 0)
    throw new Error("Expecting non-negative number of milliseconds.");
  let o = _n(r.value) / _n(e);
  return Pn(t, o), n && (o = _n(o) % _n(n)), {
    type: Pe,
    value: o
  };
}
const $d = 1e3, vv = 60, e_ = 1e3 * 60, jv = 60, t_ = 1e3 * 60 * 60, Cv = 24, Ev = 1e3 * 60 * 60 * 24, Av = 1e3 * 60 * 60 * 24 * 7;
function Sv(t, r) {
  return si(t, r, $d, vv);
}
function Vv(t, r) {
  return si(t, r, $d);
}
function Fv(t, r) {
  return si(t, r, e_, jv);
}
function Iv(t, r) {
  return si(t, r, e_);
}
function Dv(t, r) {
  return si(t, r, t_, Cv);
}
function Tv(t, r) {
  return si(t, r, t_);
}
function Mv(t, r) {
  return si(t, r, Ev);
}
function Pv(t, r) {
  return si(t, r, Av);
}
function Nv() {
  B("getIntervalSeconds", [Pe], Sv), B("getIntervalTotalSeconds", [Pe], Vv), B("getIntervalMinutes", [Pe], Fv), B("getIntervalTotalMinutes", [Pe], Iv), B("getIntervalHours", [Pe], Dv), B("getIntervalTotalHours", [Pe], Tv), B("getIntervalTotalDays", [Pe], Mv), B("getIntervalTotalWeeks", [Pe], Pv);
}
function zv(t, r) {
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
    const o = zv(e.value, n.map((i) => i.value));
    return hl(r, o, t);
  };
}
function Ji(t, r) {
  return (e, n, o, ...i) => {
    try {
      return t(e, o, ...i);
    } catch {
      let a = n.value;
      return r === "color" ? a = oi(a) : r === "url" && go(a), {
        type: r,
        value: a
      };
    }
  };
}
const Vs = li(He), Fs = li(gt), Is = li(Pe), Ds = li(Hr), Ts = li(fn), Ms = li(eo), ea = li(ar), ta = li(lr), jf = Ji(Vs, He), Cf = Ji(Fs, gt), Ef = Ji(Is, Pe), Af = Ji(Ds, Hr), ms = Ji(Ts, fn), bs = Ji(Ms, eo);
function Ov(t, r, ...e) {
  try {
    return ea(t, r, ...e);
  } catch {
    return {
      type: ar,
      value: []
    };
  }
}
function Lv(t, r, ...e) {
  try {
    return ta(t, r, ...e);
  } catch {
    return {
      type: lr,
      value: {}
    };
  }
}
function Rv(t, r, e) {
  return {
    type: Hr,
    value: e.value in r.value ? 1 : 0
  };
}
function Bv(t, r) {
  return {
    type: Hr,
    value: Object.keys(r.value).length ? 0 : 1
  };
}
function Hv(t, r) {
  return {
    type: Pe,
    value: _n(Object.keys(r.value).length)
  };
}
function Sf(t, r) {
  return {
    type: ar,
    value: Object.keys(r.value)
  };
}
function Vf(t, r) {
  return {
    type: ar,
    value: Object.values(r.value)
  };
}
function Wv() {
  const t = {
    type: He,
    isVararg: !0
  };
  B("getDictString", [lr, t], Vs), B("getStringFromDict", [lr, t], Vs), B("getDictNumber", [lr, t], Fs), B("getNumberFromDict", [lr, t], Fs), B("getDictInteger", [lr, t], Is), B("getIntegerFromDict", [lr, t], Is), B("getDictBoolean", [lr, t], Ds), B("getBooleanFromDict", [lr, t], Ds), B("getDictColor", [lr, t], Ts), B("getColorFromDict", [lr, t], Ts), B("getDictUrl", [lr, t], Ms), B("getUrlFromDict", [lr, t], Ms), B("getDictOptString", [He, lr, t], jf), B("getOptStringFromDict", [He, lr, t], jf), B("getDictOptNumber", [gt, lr, t], Cf), B("getOptNumberFromDict", [gt, lr, t], Cf), B("getDictOptInteger", [Pe, lr, t], Ef), B("getOptIntegerFromDict", [Pe, lr, t], Ef), B("getDictOptBoolean", [Hr, lr, t], Af), B("getOptBooleanFromDict", [Hr, lr, t], Af), B("getDictOptColor", [fn, lr, t], ms), B("getOptColorFromDict", [fn, lr, t], ms), B("getDictOptColor", [He, lr, t], ms), B("getOptColorFromDict", [He, lr, t], ms), B("getDictOptUrl", [He, lr, t], bs), B("getOptUrlFromDict", [He, lr, t], bs), B("getDictOptUrl", [eo, lr, t], bs), B("getOptUrlFromDict", [eo, lr, t], bs), B("getDictFromDict", [lr, t], ta), B("getArrayFromDict", [lr, t], ea), B("getOptArrayFromDict", [lr, t], Ov), B("getOptDictFromDict", [lr, t], Lv), B("len", [lr], Hv), B("getDictKeys", [lr], Sf), B("getDictValues", [lr], Vf), Lr("getString", [lr, t], Vs), Lr("getBoolean", [lr, t], Ds), Lr("getInteger", [lr, t], Is), Lr("getNumber", [lr, t], Fs), Lr("getUrl", [lr, t], Ms), Lr("getColor", [lr, t], Ts), Lr("getArray", [lr, t], ea), Lr("getDict", [lr, t], ta), Lr("containsKey", [lr, He], Rv), Lr("isEmpty", [lr], Bv), Lr("getKeys", [lr], Sf), Lr("getValues", [lr], Vf);
}
function ai(t, r) {
  return (e, n, o) => {
    if (o.value < 0 || o.value >= n.value.length)
      throw new Error(`Requested index (${o.value}) out of bounds array size (${n.value.length}).`);
    let i = n.value[Number(o.value)], s = typeof i;
    if (t === "array" && !Array.isArray(i) || t !== "array" && s !== t || s === "object" && i === null)
      throw s === "object" && (Array.isArray(i) ? s = "Array" : i === null ? s = "Null" : s = "Dict"), new Error(`Incorrect value type: expected ${Zn(r)}, got ${Zn(s)}.`);
    if (t === "number" && r === "integer") {
      Pn(e, i);
      try {
        i = _n(i);
      } catch {
        throw new Error("Cannot convert value to integer.");
      }
    }
    return t === "string" && r === "color" && (i = oi(i)), t === "string" && r === "url" && go(i), {
      type: r,
      value: i
    };
  };
}
function qi(t, r) {
  return (e, n, o, i) => {
    try {
      return t(e, n, o);
    } catch {
      let a = i.value;
      return r === "color" ? a = oi(a) : r === "url" && go(a), {
        type: r,
        value: a
      };
    }
  };
}
const Ps = ai("string", "string"), Ns = ai("number", "number"), zs = ai("number", "integer"), Os = ai("boolean", "boolean"), Ls = ai("string", "color"), Rs = ai("string", "url"), ra = ai("array", "array"), na = ai("object", "dict"), Ff = qi(Ps, "string"), If = qi(Ns, "number"), Df = qi(zs, "integer"), Tf = qi(Os, "boolean"), ys = qi(Ls, "color"), ws = qi(Rs, "url");
function Uv(t, r, e) {
  try {
    return ra(t, r, e);
  } catch {
    return {
      type: ar,
      value: []
    };
  }
}
function Gv(t, r, e) {
  try {
    return na(t, r, e);
  } catch {
    return {
      type: lr,
      value: {}
    };
  }
}
function Jv(t, r) {
  return {
    type: Pe,
    value: _n(r.value.length)
  };
}
function qv(t, r) {
  return {
    type: Hr,
    value: r.value.length === 0 ? 1 : 0
  };
}
function Yv(t, r, e) {
  return r.value.length ? {
    type: ar,
    value: r.value.filter((n) => {
      const o = [];
      if (typeof n == "string")
        fo(n) && o.push([{
          type: fn,
          value: n
        }]), Zm(n) && o.push([{
          type: eo,
          value: n
        }]), o.push([{
          type: He,
          value: n
        }]);
      else if (typeof n == "number")
        Math.round(n) === n && (Pn(t, n), o.push([{
          type: Pe,
          value: _n(n)
        }])), o.push([{
          type: gt,
          value: n
        }]);
      else if (typeof n == "bigint")
        Pn(t, n), o.push([{
          type: Pe,
          value: n
        }]);
      else if (Array.isArray(n))
        o.push([{
          type: ar,
          value: n
        }]);
      else if (typeof n == "object") {
        if (n === null)
          throw new Error("Incorrect value type: Null");
        o.push([{
          type: lr,
          value: n
        }]);
      } else if (typeof n == "boolean")
        o.push([{
          type: Hr,
          value: n ? 1 : 0
        }]);
      else
        throw new Error(`Incorrect value type: ${Zn(typeof n)}`);
      let i = {
        type: "missing"
      };
      for (const u of o)
        if (i = Kd(e.value, u), "func" in i)
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
      if (c.type !== Hr)
        throw new Error("Function must return boolean value.");
      return c.value;
    })
  } : {
    type: ar,
    value: []
  };
}
function Kv() {
  B("getArrayString", [
    ar,
    Pe
  ], Ps), B("getStringFromArray", [
    ar,
    Pe
  ], Ps), B("getArrayNumber", [
    ar,
    Pe
  ], Ns), B("getNumberFromArray", [
    ar,
    Pe
  ], Ns), B("getArrayInteger", [
    ar,
    Pe
  ], zs), B("getIntegerFromArray", [
    ar,
    Pe
  ], zs), B("getArrayBoolean", [
    ar,
    Pe
  ], Os), B("getBooleanFromArray", [
    ar,
    Pe
  ], Os), B("getArrayColor", [
    ar,
    Pe
  ], Ls), B("getColorFromArray", [
    ar,
    Pe
  ], Ls), B("getArrayUrl", [
    ar,
    Pe
  ], Rs), B("getUrlFromArray", [
    ar,
    Pe
  ], Rs), B("getArrayFromArray", [
    ar,
    Pe
  ], ra), B("getDictFromArray", [
    ar,
    Pe
  ], na), B("getArrayOptString", [
    ar,
    Pe,
    He
  ], Ff), B("getOptStringFromArray", [
    ar,
    Pe,
    He
  ], Ff), B("getArrayOptNumber", [
    ar,
    Pe,
    gt
  ], If), B("getOptNumberFromArray", [
    ar,
    Pe,
    gt
  ], If), B("getArrayOptInteger", [
    ar,
    Pe,
    Pe
  ], Df), B("getOptIntegerFromArray", [
    ar,
    Pe,
    Pe
  ], Df), B("getArrayOptBoolean", [
    ar,
    Pe,
    Hr
  ], Tf), B("getOptBooleanFromArray", [
    ar,
    Pe,
    Hr
  ], Tf), B("getArrayOptColor", [
    ar,
    Pe,
    fn
  ], ys), B("getOptColorFromArray", [
    ar,
    Pe,
    fn
  ], ys), B("getArrayOptColor", [
    ar,
    Pe,
    He
  ], ys), B("getOptColorFromArray", [
    ar,
    Pe,
    He
  ], ys), B("getArrayOptUrl", [
    ar,
    Pe,
    eo
  ], ws), B("getOptUrlFromArray", [
    ar,
    Pe,
    eo
  ], ws), B("getArrayOptUrl", [
    ar,
    Pe,
    He
  ], ws), B("getOptUrlFromArray", [
    ar,
    Pe,
    He
  ], ws), B("getOptArrayFromArray", [
    ar,
    Pe
  ], Uv), B("getOptDictFromArray", [
    ar,
    Pe
  ], Gv), B("len", [
    ar
  ], Jv), Lr("getString", [ar, Pe], Ps), Lr("getInteger", [ar, Pe], zs), Lr("getNumber", [ar, Pe], Ns), Lr("getBoolean", [ar, Pe], Os), Lr("getUrl", [ar, Pe], Rs), Lr("getColor", [ar, Pe], Ls), Lr("getArray", [ar, Pe], ra), Lr("getDict", [ar, Pe], na), Lr("isEmpty", [ar], qv), Lr("filter", [ar, Xm], Yv);
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
      return t === "url" && go(n.value), {
        type: t,
        value: n.value
      };
    } else t === "url" && go(i);
    return hl(r, i, t);
  };
}
function Xv() {
  B("getStoredIntegerValue", [He, Pe], Ao(Pe)), B("getStoredNumberValue", [He, gt], Ao(gt)), B("getStoredStringValue", [He, He], Ao(He)), B("getStoredUrlValue", [He, eo], Ao(eo)), B("getStoredUrlValue", [He, He], Ao(eo)), B("getStoredColorValue", [He, fn], Ao(fn)), B("getStoredColorValue", [He, He], Ao(fn)), B("getStoredBooleanValue", [He, Hr], Ao(Hr)), B("getStoredArrayValue", [He], Ao(ar)), B("getStoredDictValue", [He], Ao(lr));
}
function Zv() {
  return {
    type: gt,
    value: Math.PI
  };
}
function Qv(t, r) {
  return {
    type: gt,
    value: r.value / 180 * Math.PI
  };
}
function xv(t, r) {
  return {
    type: gt,
    value: r.value / Math.PI * 180
  };
}
function $v(t, r) {
  return {
    type: gt,
    value: Math.sin(r.value)
  };
}
function e2(t, r) {
  return {
    type: gt,
    value: Math.cos(r.value)
  };
}
function t2(t, r) {
  return {
    type: gt,
    value: Math.tan(r.value)
  };
}
function r2(t, r) {
  const e = Math.tan(r.value);
  if (Math.abs(e) < 1e-12)
    throw new Error("Cotangent is undefined for the given value.");
  return {
    type: gt,
    value: 1 / e
  };
}
function n2(t, r) {
  return {
    type: gt,
    value: Math.atan(r.value)
  };
}
function o2(t, r, e) {
  return {
    type: gt,
    value: Math.atan2(r.value, e.value)
  };
}
function i2(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arcsine is undefined for the given value.");
  return {
    type: gt,
    value: Math.asin(r.value)
  };
}
function s2(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arccosine is undefined for the given value.");
  return {
    type: gt,
    value: Math.acos(r.value)
  };
}
function l2() {
  B("pi", [], Zv), B("toRadians", [gt], Qv), B("toDegrees", [gt], xv), B("sin", [gt], $v), B("cos", [gt], e2), B("tan", [gt], t2), B("cot", [gt], r2), B("atan", [gt], n2), B("atan2", [gt, gt], o2), B("asin", [gt], i2), B("acos", [gt], s2);
}
function a2() {
  rk(), Fk(), Nv(), Gk(), bv(), kv(), Wv(), Kv(), Xv(), l2();
}
a2();
function c2(t, r) {
  return {
    type: He,
    value: r.value
  };
}
function u2(t, r) {
  return {
    type: gt,
    value: r.value
  };
}
function f2(t, r) {
  return Pn(t, r.value), {
    type: Pe,
    value: r.value
  };
}
function d2(t, r) {
  return {
    type: Hr,
    value: r.value ? 1 : 0
  };
}
function _2(t, r) {
  const e = Ys(On(t, r.argument));
  switch (r.operator) {
    case "!":
      if (e.type === Hr)
        return {
          type: Hr,
          value: e.value ? 0 : 1
        };
      Sn(`${r.operator}${dn(e)}`, "A Boolean is expected after a unary not.");
    case "+":
    case "-":
      const n = r.operator === "+" ? 1 : -1;
      if (e.type === Pe) {
        const o = e.value * _n(n);
        return Pn(t, o), {
          type: Pe,
          value: o
        };
      } else {
        if (e.type === gt)
          return {
            type: gt,
            value: e.value * n
          };
        Sn(
          `${r.operator}${dn(e)}`,
          `A Number is expected after a unary ${r.operator === "+" ? "plus" : "minus"}.`
        );
      }
  }
}
function p2(t, r) {
  const e = Ys(On(t, r.test));
  if (e.type === Hr)
    return e.value ? On(t, r.consequent) : On(t, r.alternate);
  Sn(
    `${dn(e)} ? ${dn(On(t, r.consequent))} : ${dn(On(t, r.alternate))}`,
    "Ternary must be called with a Boolean value as a condition."
  );
}
function g2(t, r) {
  try {
    return On(t, r.test);
  } catch {
    return On(t, r.alternate);
  }
}
function h2(t, r) {
  let e = "";
  if (r.quasis.length === 2 && r.quasis[0].value === "" && r.quasis[1].value === "")
    return On(t, r.expressions[0]);
  for (let n = 0; n < r.expressions.length; ++n)
    e += r.quasis[n].value, e += Ci(On(t, r.expressions[n]), !0);
  return e += r.quasis[r.quasis.length - 1].value, {
    type: He,
    value: e
  };
}
function m2(t, r) {
  const e = Ys(On(t, r.left));
  if (e.type !== Hr && Sn(
    `${dn(e)} ${r.operator} ...`,
    `'${r.operator}' must be called with boolean operands.`
  ), r.operator === "||" && e.value)
    return e;
  if (r.operator === "&&" && !e.value)
    return {
      type: Hr,
      value: 0
    };
  const n = Ys(On(t, r.right));
  return n.type !== Hr && Sn(
    `${dn(e)} ${r.operator} ${dn(n)}`,
    `Operator '${r.operator}' cannot be applied to different types: Boolean and ${Zn(n.type)}.`
  ), {
    type: Hr,
    value: n.value
  };
}
function b2(t, r, e) {
  let n;
  return r.type === Pr && e.type === Pr ? n = r.value.getTime() === e.value.getTime() : n = r.value === e.value, t === "!=" && (n = !n), {
    type: Hr,
    value: n ? 1 : 0
  };
}
function y2(t, r, e) {
  (r.type !== gt && r.type !== Pe && r.type !== Pr || e.type !== gt && e.type !== Pe && e.type !== Pr) && Sn(
    `${dn(r)} ${t} ${dn(e)}`,
    `Operator '${t}' cannot be applied to ${Zn(r.type)} type.`
  );
  let n;
  const o = r.type === Pr ? r.value.getTime() : r.value, i = e.type === Pr ? e.value.getTime() : e.value;
  return t === ">" ? n = o > i : t === ">=" ? n = o >= i : t === "<" ? n = o < i : n = o <= i, {
    type: Hr,
    value: n ? 1 : 0
  };
}
function w2(t, r, e, n) {
  if (e.type !== He && e.type !== gt && e.type !== Pe && Sn(
    `${dn(e)} ${r} ${dn(n)}`,
    `Operator '${r}' cannot be applied to ${Zn(e.type)} type.`
  ), e.type === He)
    return r === "-" && Sn(
      `${dn(e)} - ${dn(n)}`,
      `Operator '${r}' cannot be applied to ${Zn(e.type)} type.`
    ), {
      type: He,
      value: e.value + n.value
    };
  let o = r === "+" ? e.value + n.value : e.value - n.value;
  if (e.type === Pe)
    try {
      o = Ei(t, o), Pn(t, o);
    } catch (i) {
      Sn(
        `${dn(e)} ${r} ${dn(n)}`,
        i.message
      );
    }
  return {
    type: e.type,
    value: o
  };
}
function k2(t, r, e, n) {
  e.type !== Pe && e.type !== gt && Sn(
    `${dn(e)} ${r} ${dn(n)}`,
    `Operator '${r}' cannot be applied to ${Zn(e.type)} type.`
  );
  let o;
  if (r === "*")
    o = e.value * n.value;
  else if (r === "/" || r === "%")
    Number(n.value) === 0 && Sn(
      `${dn(e)} ${r} ${dn(n)}`,
      "Division by zero is not supported."
    ), r === "/" ? o = e.value / n.value : o = e.value % n.value;
  else
    throw new Error(`Unsupported operation ${r}`);
  if (e.type === Pe)
    try {
      o = Ei(t, o), Pn(t, o);
    } catch (i) {
      Sn(
        `${dn(e)} ${r} ${dn(n)}`,
        i.message
      );
    }
  return {
    type: e.type,
    value: o
  };
}
function v2(t, r) {
  const e = r.operator;
  let n = On(t, r.left), o = On(t, r.right);
  if ((n.type === "number" && o.type === "integer" || n.type === "integer" && o.type === "number") && (n.type === "integer" ? n = Gl(n) : o.type === "integer" && (o = Gl(o))), n.type !== o.type && Sn(
    `${dn(n)} ${r.operator} ${dn(o)}`,
    `Operator '${e}' cannot be applied to different types: ${Zn(n.type)} and ${Zn(o.type)}.`
  ), e === "==" || e === "!=")
    return b2(e, n, o);
  if (e === ">" || e === ">=" || e === "<" || e === "<=")
    return y2(e, n, o);
  if (e === "+" || e === "-")
    return w2(t, e, n, o);
  if (e === "/" || e === "*" || e === "%")
    return k2(t, e, n, o);
  throw new Error(`Unsupported operation ${e}`);
}
function Qs(t) {
  return t.map(dn).join(", ");
}
function j2(t, r) {
  const e = r.callee.name;
  let n, o = r.arguments.map((a) => On(t, a));
  const i = e + ":" + o.map((a) => a.type).join("#");
  let s;
  if (t.customFunctions && (s = Ql(t.customFunctions, e, o)), !s || !("func" in s))
    if (Xl.has(i))
      s = {
        func: Xl.get(i),
        conversions: 0
      };
    else {
      const a = Ql(As, e, o);
      ("func" in a || !s || s.type === "missing") && (s = a);
    }
  if (s && (("expected" in s || "type" in s && s.type === "missing") && r_(e, o, s), n = s.func, s.conversions && (o = Xd(n, o))), !n)
    throw new Error("Function not found");
  try {
    return n.cb(t, ...o);
  } catch (a) {
    if (a && a instanceof wa)
      throw a;
    const l = `${e}(${Qs(o)})`;
    Sn(l, a.message);
  }
}
function r_(t, r, e, n = !1) {
  const o = r.map((a) => Zn(a.type)).join(", "), i = `${t}(${Qs(r)})`, s = n ? xm : Sn;
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
function C2(t, r) {
  const e = r.method.name;
  let n, o = [r.object, ...r.arguments].map((s) => On(t, s));
  const i = e + ":" + o.map((s) => s.type).join("#");
  if (Zl.has(i))
    n = Zl.get(i);
  else {
    const s = Ql(Ss, e, o);
    if ("expected" in s || "type" in s && s.type === "missing") {
      const a = o.slice(1).map((c) => Zn(c.type)).join(", "), l = `${e}(${Qs(o.slice(1))})`;
      s.type === "few" && o.length === 1 ? Sn(l, "Method requires non empty argument list.") : s.type === "many" ? Sn(l, `Method has no matching overload for given argument types: ${a}.`) : s.type === "few" || s.type === "mismatch" ? Sn(l, `Method has no matching overload for given argument types: ${a}.`) : Sn(l, `Unknown method name: ${e}.`);
    }
    n = s.func, s.conversions && (o = Xd(n, o));
  }
  if (!n)
    throw new Error("Method not found");
  try {
    return n.cb(t, ...o);
  } catch (s) {
    if (s && s instanceof wa)
      throw s;
    const a = `${e}(${Qs(o.slice(1))})`;
    Sn(a, s.message);
  }
}
function E2(t, r) {
  var i;
  const e = r.id.name, n = (i = t.customFunctions) == null ? void 0 : i.get(e);
  if (n)
    return {
      type: "function",
      value: n
    };
  const o = t.variables.get(e);
  if (o)
    return d1(o);
  throw new Error(`Variable '${e}' is missing.`);
}
const Mf = {
  StringLiteral: c2,
  NumberLiteral: u2,
  IntegerLiteral: f2,
  BooleanLiteral: d2,
  UnaryExpression: _2,
  ConditionalExpression: p2,
  TryExpression: g2,
  TemplateLiteral: h2,
  LogicalExpression: m2,
  BinaryExpression: v2,
  CallExpression: j2,
  MethodExpression: C2,
  Variable: E2
};
function On(t, r) {
  if (r.type in Mf)
    return Mf[r.type](t, r);
  throw new Error("Unsupported expression");
}
function Ca(t, r, e, n, o) {
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
function A2(t, r) {
  return r && r[3] && r[7] ? { type: "ConditionalExpression", test: t, consequent: r[3], alternate: r[7] } : t;
}
function S2(t, r) {
  return r && r[3] ? { type: "TryExpression", test: t, alternate: r[3] } : t;
}
function ks(t, r) {
  return r.length ? r.reduce((e, n) => ({
    type: "BinaryExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), t) : t;
}
function Pf(t, r) {
  return r.length ? r.reduce((e, n) => ({
    type: "LogicalExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), t) : t;
}
function V2(t, r) {
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
function F2(t) {
  return t === "true" || t === "false" ? { type: "BooleanLiteral", value: t === "true" } : { type: "Variable", id: { type: "Identifier", name: t } };
}
function Nf(t) {
  if (t.every((e) => typeof e == "string"))
    return { type: "StringLiteral", value: t.join("") };
  let r = t.reduce((e, n) => (typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e), []).reduce((e, n) => (typeof n == "string" ? e.quasis.push({ type: "StringLiteral", value: n }) : (e.quasis.length === e.expressions.length && e.quasis.push({ type: "StringLiteral", value: "" }), e.expressions.push(n)), e), {
    type: "TemplateLiteral",
    quasis: [],
    expressions: []
  });
  return r.quasis.length === r.expressions.length && r.quasis.push({ type: "StringLiteral", value: "" }), r;
}
function I2(t) {
  try {
    return _n(t);
  } catch {
    throw new Error(`Value ${t} can't be converted to Integer type.`);
  }
}
function zf(t) {
  if (t === "'" || t === "\\")
    return t;
  throw new Error("Incorrect string escape");
}
function D2(t, r) {
  function e() {
    this.constructor = t;
  }
  e.prototype = r.prototype, t.prototype = new e();
}
function Bi(t, r, e, n) {
  var o = Error.call(this, t);
  return Object.setPrototypeOf && Object.setPrototypeOf(o, Bi.prototype), o.expected = r, o.found = e, o.location = n, o.name = "SyntaxError", o;
}
D2(Bi, Error);
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
  var e = {}, n = r.grammarSource, o = { start: Qr, JsonStringContents: gn }, i = Qr, s = "@{", a = "}", l = "@{}", c = "\\", u = "?", f = ":", _ = "!:", h = "||", m = "&&", p = "==", k = "!=", w = ">=", z = ">", H = "<=", L = "<", Q = "+", ce = "-", T = "/", X = "*", le = "%", C = "!", M = ".", N = "(", U = ")", se = ",", fe = "'", Ce = "e", Ee = "E", de = /^[^}]/, Ie = /^[^'}]/, ee = /^[0-9]/, De = /^[a-zA-Z_]/, qe = /^[a-zA-Z_0-9]/, Ke = /^[ \t\r\n]/, ke = Ge("@{", !1), rt = Ge("}", !1), ye = Ge("@{}", !1), Ae = Ge("\\", !1), _e = Wt(), x = Je(["}"], !0, !1), ue = Ge("?", !1), ie = Ge(":", !1), Fe = Ge("!:", !1), xe = Ge("||", !1), Xe = Ge("&&", !1), ne = Ge("==", !1), Ye = Ge("!=", !1), Le = Ge(">=", !1), st = Ge(">", !1), lt = Ge("<=", !1), at = Ge("<", !1), wt = Ge("+", !1), nt = Ge("-", !1), zt = Ge("/", !1), ut = Ge("*", !1), pe = Ge("%", !1), ge = Ge("!", !1), _t = Ge(".", !1), je = Ge("(", !1), I = Ge(")", !1), vt = Ge(",", !1), ft = qr("string"), St = Ge("'", !1), Tt = Je(["'", "}"], !0, !1), et = qr("integer"), K = Je([["0", "9"]], !1, !1), At = qr("number"), Mt = Ge("e", !1), Zt = Ge("E", !1), Jt = Je([["a", "z"], ["A", "Z"], "_"], !1, !1), he = Je([["a", "z"], ["A", "Z"], "_", ["0", "9"]], !1, !1), Be = qr("whitespace"), pt = Je([" ", "	", "\r", `
`], !1, !1), be = function(b) {
    return b;
  }, Qe = function(b) {
    return Nf(b);
  }, Oe = function(b) {
    return b;
  }, tr = function() {
    return "";
  }, Ne = function() {
    return ot();
  }, yt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, Ft = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, It = function(b) {
    return b;
  }, ur = function(b) {
    return zf(b);
  }, Me = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, kt = function(b, F) {
    return A2(b, F);
  }, or = function(b, F) {
    return S2(b, F);
  }, $t = function(b, F) {
    return Pf(b, F);
  }, Kt = function(b, F) {
    return Pf(b, F);
  }, gr = function(b, F) {
    return ks(b, F);
  }, vr = function(b, F) {
    return ks(b, F);
  }, Nt = function(b, F) {
    return ks(b, F);
  }, yr = function(b, F) {
    return ks(b, F);
  }, G = function(b) {
    return b;
  }, dt = function(b) {
    return b;
  }, Gt = function(b, F) {
    return { type: "UnaryExpression", operator: b, argument: F };
  }, jt = function() {
    throw new Error("Incorrect unary operator");
  }, wr = function(b, F) {
    return V2(b, F);
  }, Ar = function(b, F) {
    return { type: "CallExpression", callee: b, arguments: F };
  }, hr = function(b, F) {
    return [b, ...F];
  }, Fr = function(b) {
    return b;
  }, Wr = function(b) {
    return b;
  }, rr = function(b) {
    return Nf(b);
  }, tt = function(b) {
    return b;
  }, Ct = function() {
    return "";
  }, Xt = function() {
    return ot();
  }, Yt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, fr = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, ct = function(b) {
    return b;
  }, te = function(b) {
    return zf(b);
  }, bt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, nr = function() {
    return { type: "IntegerLiteral", value: I2(ot()) };
  }, mr = function() {
    return { type: "NumberLiteral", value: parseFloat(ot()) };
  }, sr = function() {
    return { type: "NumberLiteral", value: parseFloat(ot()) };
  }, v = function() {
    const b = ot();
    if (/\.\./.test(b) || /\.$/.test(b))
      throw new Error("Unexpected token: .");
    return F2(b);
  }, re = function() {
    return { type: "Identifier", name: ot() };
  }, d = 0, j = 0, Te = [{ line: 1, column: 1 }], Re = 0, Pt = [], O = 0, Dt;
  if ("startRule" in r) {
    if (!(r.startRule in o))
      throw new Error(`Can't start parsing from rule "` + r.startRule + '".');
    i = o[r.startRule];
  }
  function ot() {
    return t.substring(j, d);
  }
  function Ge(b, F) {
    return { type: "literal", text: b, ignoreCase: F };
  }
  function Je(b, F, Z) {
    return { type: "class", parts: b, inverted: F, ignoreCase: Z };
  }
  function Wt() {
    return { type: "any" };
  }
  function br() {
    return { type: "end" };
  }
  function qr(b) {
    return { type: "other", description: b };
  }
  function sn(b) {
    var F = Te[b], Z;
    if (F)
      return F;
    for (Z = b - 1; !Te[Z]; )
      Z--;
    for (F = Te[Z], F = {
      line: F.line,
      column: F.column
    }; Z < b; )
      t.charCodeAt(Z) === 10 ? (F.line++, F.column = 1) : F.column++, Z++;
    return Te[b] = F, F;
  }
  function Zr(b, F, Z) {
    var P = sn(b), we = sn(F), me = {
      source: n,
      start: {
        offset: b,
        line: P.line,
        column: P.column
      },
      end: {
        offset: F,
        line: we.line,
        column: we.column
      }
    };
    return me;
  }
  function ve(b) {
    d < Re || (d > Re && (Re = d, Pt = []), Pt.push(b));
  }
  function pn(b, F, Z) {
    return new Bi(
      Bi.buildMessage(b, F),
      b,
      F,
      Z
    );
  }
  function Qr() {
    var b, F;
    return b = d, Ut(), F = E(), F !== e ? (Ut(), j = b, b = be(F)) : (d = b, b = e), b;
  }
  function gn() {
    var b, F, Z;
    for (b = d, F = [], Z = y(); Z !== e; )
      F.push(Z), Z = y();
    return j = b, F = Qe(F), b = F, b;
  }
  function y() {
    var b, F, Z, P, we;
    if (b = d, t.substr(d, 2) === s ? (F = s, d += 2) : (F = e, O === 0 && ve(ke)), F !== e ? (Z = Ut(), P = E(), P !== e ? (Ut(), t.charCodeAt(d) === 125 ? (we = a, d++) : (we = e, O === 0 && ve(rt)), we !== e ? (j = b, b = Oe(P)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.substr(d, 3) === l ? (F = l, d += 3) : (F = e, O === 0 && ve(ye)), F !== e && (j = b, F = tr()), b = F, b === e && (b = d, F = d, O++, t.charCodeAt(d) === 92 ? (Z = c, d++) : (Z = e, O === 0 && ve(Ae)), Z === e && (t.substr(d, 2) === s ? (Z = s, d += 2) : (Z = e, O === 0 && ve(ke))), O--, Z === e ? F = void 0 : (d = F, F = e), F !== e ? (t.length > d ? (Z = t.charAt(d), d++) : (Z = e, O === 0 && ve(_e)), Z !== e ? (j = b, b = Ne()) : (d = b, b = e)) : (d = b, b = e), b === e))) {
      if (b = d, t.substr(d, 2) === s ? (F = s, d += 2) : (F = e, O === 0 && ve(ke)), F !== e) {
        if (Z = [], de.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, O === 0 && ve(x)), P !== e)
          for (; P !== e; )
            Z.push(P), de.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, O === 0 && ve(x));
        else
          Z = e;
        Z !== e ? (t.charCodeAt(d) === 125 ? (P = a, d++) : (P = e, O === 0 && ve(rt)), P !== e ? (j = b, b = yt()) : (d = b, b = e)) : (d = b, b = e);
      } else
        d = b, b = e;
      b === e && (b = d, t.substr(d, 2) === s ? (F = s, d += 2) : (F = e, O === 0 && ve(ke)), F !== e && (j = b, F = Ft()), b = F, b === e && (b = d, t.charCodeAt(d) === 92 ? (F = c, d++) : (F = e, O === 0 && ve(Ae)), F !== e ? (t.substr(d, 2) === s ? (Z = s, d += 2) : (Z = e, O === 0 && ve(ke)), Z !== e ? (j = b, b = It(Z)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (F = c, d++) : (F = e, O === 0 && ve(Ae)), F !== e ? (t.length > d ? (Z = t.charAt(d), d++) : (Z = e, O === 0 && ve(_e)), Z !== e ? (j = b, b = ur(Z)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (F = c, d++) : (F = e, O === 0 && ve(Ae)), F !== e && (j = b, F = Me()), b = F))));
    }
    return b;
  }
  function E() {
    var b, F, Z, P, we, me, Ot, Lt, Ur, Dr, Jr;
    return b = d, F = S(), F !== e ? (Z = d, P = Ut(), t.charCodeAt(d) === 63 ? (we = u, d++) : (we = e, O === 0 && ve(ue)), we !== e ? (me = Ut(), Ot = E(), Ot !== e ? (Lt = Ut(), t.charCodeAt(d) === 58 ? (Ur = f, d++) : (Ur = e, O === 0 && ve(ie)), Ur !== e ? (Dr = Ut(), Jr = E(), Jr !== e ? (P = [P, we, me, Ot, Lt, Ur, Dr, Jr], Z = P) : (d = Z, Z = e)) : (d = Z, Z = e)) : (d = Z, Z = e)) : (d = Z, Z = e), Z === e && (Z = null), j = b, b = kt(F, Z)) : (d = b, b = e), b;
  }
  function S() {
    var b, F, Z, P, we, me, Ot;
    return b = d, F = oe(), F !== e ? (Z = d, P = Ut(), t.substr(d, 2) === _ ? (we = _, d += 2) : (we = e, O === 0 && ve(Fe)), we !== e ? (me = Ut(), Ot = E(), Ot !== e ? (P = [P, we, me, Ot], Z = P) : (d = Z, Z = e)) : (d = Z, Z = e), Z === e && (Z = null), j = b, b = or(F, Z)) : (d = b, b = e), b;
  }
  function oe() {
    var b, F, Z, P, we, me, Ot, Lt;
    if (b = d, F = R(), F !== e) {
      for (Z = [], P = d, we = Ut(), t.substr(d, 2) === h ? (me = h, d += 2) : (me = e, O === 0 && ve(xe)), me !== e ? (Ot = Ut(), Lt = R(), Lt !== e ? (we = [we, me, Ot, Lt], P = we) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        Z.push(P), P = d, we = Ut(), t.substr(d, 2) === h ? (me = h, d += 2) : (me = e, O === 0 && ve(xe)), me !== e ? (Ot = Ut(), Lt = R(), Lt !== e ? (we = [we, me, Ot, Lt], P = we) : (d = P, P = e)) : (d = P, P = e);
      j = b, b = $t(F, Z);
    } else
      d = b, b = e;
    return b;
  }
  function R() {
    var b, F, Z, P, we, me, Ot, Lt;
    if (b = d, F = Ze(), F !== e) {
      for (Z = [], P = d, we = Ut(), t.substr(d, 2) === m ? (me = m, d += 2) : (me = e, O === 0 && ve(Xe)), me !== e ? (Ot = Ut(), Lt = Ze(), Lt !== e ? (we = [we, me, Ot, Lt], P = we) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        Z.push(P), P = d, we = Ut(), t.substr(d, 2) === m ? (me = m, d += 2) : (me = e, O === 0 && ve(Xe)), me !== e ? (Ot = Ut(), Lt = Ze(), Lt !== e ? (we = [we, me, Ot, Lt], P = we) : (d = P, P = e)) : (d = P, P = e);
      j = b, b = Kt(F, Z);
    } else
      d = b, b = e;
    return b;
  }
  function Ze() {
    var b, F, Z, P, we, me, Ot, Lt;
    if (b = d, F = Se(), F !== e) {
      for (Z = [], P = d, we = Ut(), t.substr(d, 2) === p ? (me = p, d += 2) : (me = e, O === 0 && ve(ne)), me === e && (t.substr(d, 2) === k ? (me = k, d += 2) : (me = e, O === 0 && ve(Ye))), me !== e ? (Ot = Ut(), Lt = Se(), Lt !== e ? (we = [we, me, Ot, Lt], P = we) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        Z.push(P), P = d, we = Ut(), t.substr(d, 2) === p ? (me = p, d += 2) : (me = e, O === 0 && ve(ne)), me === e && (t.substr(d, 2) === k ? (me = k, d += 2) : (me = e, O === 0 && ve(Ye))), me !== e ? (Ot = Ut(), Lt = Se(), Lt !== e ? (we = [we, me, Ot, Lt], P = we) : (d = P, P = e)) : (d = P, P = e);
      j = b, b = gr(F, Z);
    } else
      d = b, b = e;
    return b;
  }
  function Se() {
    var b, F, Z, P, we, me, Ot, Lt;
    if (b = d, F = qt(), F !== e) {
      for (Z = [], P = d, we = Ut(), t.substr(d, 2) === w ? (me = w, d += 2) : (me = e, O === 0 && ve(Le)), me === e && (t.charCodeAt(d) === 62 ? (me = z, d++) : (me = e, O === 0 && ve(st)), me === e && (t.substr(d, 2) === H ? (me = H, d += 2) : (me = e, O === 0 && ve(lt)), me === e && (t.charCodeAt(d) === 60 ? (me = L, d++) : (me = e, O === 0 && ve(at))))), me !== e ? (Ot = Ut(), Lt = qt(), Lt !== e ? (we = [we, me, Ot, Lt], P = we) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        Z.push(P), P = d, we = Ut(), t.substr(d, 2) === w ? (me = w, d += 2) : (me = e, O === 0 && ve(Le)), me === e && (t.charCodeAt(d) === 62 ? (me = z, d++) : (me = e, O === 0 && ve(st)), me === e && (t.substr(d, 2) === H ? (me = H, d += 2) : (me = e, O === 0 && ve(lt)), me === e && (t.charCodeAt(d) === 60 ? (me = L, d++) : (me = e, O === 0 && ve(at))))), me !== e ? (Ot = Ut(), Lt = qt(), Lt !== e ? (we = [we, me, Ot, Lt], P = we) : (d = P, P = e)) : (d = P, P = e);
      j = b, b = vr(F, Z);
    } else
      d = b, b = e;
    return b;
  }
  function qt() {
    var b, F, Z, P, we, me, Ot, Lt;
    if (b = d, F = Vt(), F !== e) {
      for (Z = [], P = d, we = Ut(), t.charCodeAt(d) === 43 ? (me = Q, d++) : (me = e, O === 0 && ve(wt)), me === e && (t.charCodeAt(d) === 45 ? (me = ce, d++) : (me = e, O === 0 && ve(nt))), me !== e ? (Ot = Ut(), Lt = Vt(), Lt !== e ? (we = [we, me, Ot, Lt], P = we) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        Z.push(P), P = d, we = Ut(), t.charCodeAt(d) === 43 ? (me = Q, d++) : (me = e, O === 0 && ve(wt)), me === e && (t.charCodeAt(d) === 45 ? (me = ce, d++) : (me = e, O === 0 && ve(nt))), me !== e ? (Ot = Ut(), Lt = Vt(), Lt !== e ? (we = [we, me, Ot, Lt], P = we) : (d = P, P = e)) : (d = P, P = e);
      j = b, b = Nt(F, Z);
    } else
      d = b, b = e;
    return b;
  }
  function Vt() {
    var b, F, Z, P, we, me, Ot, Lt;
    if (b = d, F = ze(), F !== e) {
      for (Z = [], P = d, we = Ut(), t.charCodeAt(d) === 47 ? (me = T, d++) : (me = e, O === 0 && ve(zt)), me === e && (t.charCodeAt(d) === 42 ? (me = X, d++) : (me = e, O === 0 && ve(ut)), me === e && (t.charCodeAt(d) === 37 ? (me = le, d++) : (me = e, O === 0 && ve(pe)))), me !== e ? (Ot = Ut(), Lt = ze(), Lt !== e ? (we = [we, me, Ot, Lt], P = we) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        Z.push(P), P = d, we = Ut(), t.charCodeAt(d) === 47 ? (me = T, d++) : (me = e, O === 0 && ve(zt)), me === e && (t.charCodeAt(d) === 42 ? (me = X, d++) : (me = e, O === 0 && ve(ut)), me === e && (t.charCodeAt(d) === 37 ? (me = le, d++) : (me = e, O === 0 && ve(pe)))), me !== e ? (Ot = Ut(), Lt = ze(), Lt !== e ? (we = [we, me, Ot, Lt], P = we) : (d = P, P = e)) : (d = P, P = e);
      j = b, b = yr(F, Z);
    } else
      d = b, b = e;
    return b;
  }
  function ze() {
    var b, F, Z, P;
    return b = d, F = d, O++, t.charCodeAt(d) === 45 ? (Z = ce, d++) : (Z = e, O === 0 && ve(nt)), O--, Z !== e ? (d = F, F = void 0) : F = e, F !== e ? (Z = xn(), Z !== e ? (j = b, b = G(Z)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, F = d, O++, t.charCodeAt(d) === 45 ? (Z = ce, d++) : (Z = e, O === 0 && ve(nt)), O--, Z !== e ? (d = F, F = void 0) : F = e, F !== e ? (Z = jn(), Z !== e ? (j = b, b = dt(Z)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 33 ? (F = C, d++) : (F = e, O === 0 && ve(ge)), F === e && (t.charCodeAt(d) === 43 ? (F = Q, d++) : (F = e, O === 0 && ve(wt)), F === e && (t.charCodeAt(d) === 45 ? (F = ce, d++) : (F = e, O === 0 && ve(nt)))), F !== e ? (Z = Ut(), P = Qt(), P === e && (P = Et()), P !== e ? (j = b, b = Gt(F, P)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = Et()))), b;
  }
  function Qt() {
    var b, F;
    return b = d, t.charCodeAt(d) === 43 ? (F = Q, d++) : (F = e, O === 0 && ve(wt)), F === e && (t.charCodeAt(d) === 45 ? (F = ce, d++) : (F = e, O === 0 && ve(nt))), F !== e && (j = b, F = jt()), b = F, b;
  }
  function Et() {
    var b, F, Z, P, we, me, Ot, Lt, Ur, Dr, Jr, ho, Jn, so, Fn;
    if (b = d, F = Sr(), F !== e) {
      for (Z = [], P = d, we = Ut(), t.charCodeAt(d) === 46 ? (me = M, d++) : (me = e, O === 0 && ve(_t)), me !== e ? (Ot = Ut(), Lt = Gn(), Lt !== e ? (Ur = Ut(), Dr = d, t.charCodeAt(d) === 40 ? (Jr = N, d++) : (Jr = e, O === 0 && ve(je)), Jr !== e ? (ho = Ut(), Jn = jr(), Jn !== e ? (so = Ut(), t.charCodeAt(d) === 41 ? (Fn = U, d++) : (Fn = e, O === 0 && ve(I)), Fn !== e ? (Jr = [Jr, ho, Jn, so, Fn], Dr = Jr) : (d = Dr, Dr = e)) : (d = Dr, Dr = e)) : (d = Dr, Dr = e), Dr === e && (Dr = null), we = [we, me, Ot, Lt, Ur, Dr], P = we) : (d = P, P = e)) : (d = P, P = e); P !== e; )
        Z.push(P), P = d, we = Ut(), t.charCodeAt(d) === 46 ? (me = M, d++) : (me = e, O === 0 && ve(_t)), me !== e ? (Ot = Ut(), Lt = Gn(), Lt !== e ? (Ur = Ut(), Dr = d, t.charCodeAt(d) === 40 ? (Jr = N, d++) : (Jr = e, O === 0 && ve(je)), Jr !== e ? (ho = Ut(), Jn = jr(), Jn !== e ? (so = Ut(), t.charCodeAt(d) === 41 ? (Fn = U, d++) : (Fn = e, O === 0 && ve(I)), Fn !== e ? (Jr = [Jr, ho, Jn, so, Fn], Dr = Jr) : (d = Dr, Dr = e)) : (d = Dr, Dr = e)) : (d = Dr, Dr = e), Dr === e && (Dr = null), we = [we, me, Ot, Lt, Ur, Dr], P = we) : (d = P, P = e)) : (d = P, P = e);
      j = b, b = wr(F, Z);
    } else
      d = b, b = e;
    return b;
  }
  function Sr() {
    var b, F, Z, P, we;
    return b = d, F = Gn(), F !== e ? (Ut(), t.charCodeAt(d) === 40 ? (Z = N, d++) : (Z = e, O === 0 && ve(je)), Z !== e ? (Ut(), P = jr(), P !== e ? (Ut(), t.charCodeAt(d) === 41 ? (we = U, d++) : (we = e, O === 0 && ve(I)), we !== e ? (j = b, b = Ar(F, P)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = Gr()), b;
  }
  function jr() {
    var b, F, Z, P, we, me;
    if (b = d, F = E(), F !== e) {
      for (Z = [], P = d, Ut(), t.charCodeAt(d) === 44 ? (we = se, d++) : (we = e, O === 0 && ve(vt)), we !== e ? (Ut(), me = E(), me !== e ? P = me : (d = P, P = e)) : (d = P, P = e); P !== e; )
        Z.push(P), P = d, Ut(), t.charCodeAt(d) === 44 ? (we = se, d++) : (we = e, O === 0 && ve(vt)), we !== e ? (Ut(), me = E(), me !== e ? P = me : (d = P, P = e)) : (d = P, P = e);
      j = b, b = hr(F, Z);
    } else
      d = b, b = e;
    return b === e && (b = Ut()), b;
  }
  function Gr() {
    var b, F, Z, P;
    return b = Un(), b === e && (b = xr(), b === e && (b = xn(), b === e && (b = jn(), b === e && (b = d, t.charCodeAt(d) === 40 ? (F = N, d++) : (F = e, O === 0 && ve(je)), F !== e ? (Ut(), Z = E(), Z !== e ? (Ut(), t.charCodeAt(d) === 41 ? (P = U, d++) : (P = e, O === 0 && ve(I)), P !== e ? (j = b, b = Fr(Z)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e))))), b;
  }
  function xr() {
    var b, F, Z, P;
    return O++, b = d, t.charCodeAt(d) === 39 ? (F = fe, d++) : (F = e, O === 0 && ve(St)), F !== e ? (Z = wn(), t.charCodeAt(d) === 39 ? (P = fe, d++) : (P = e, O === 0 && ve(St)), P !== e ? (j = b, b = Wr(Z)) : (d = b, b = e)) : (d = b, b = e), O--, b === e && (F = e, O === 0 && ve(ft)), b;
  }
  function wn() {
    var b, F, Z;
    for (b = d, F = [], Z = hn(); Z !== e; )
      F.push(Z), Z = hn();
    return j = b, F = rr(F), b = F, b;
  }
  function hn() {
    var b, F, Z, P, we;
    if (b = d, t.substr(d, 2) === s ? (F = s, d += 2) : (F = e, O === 0 && ve(ke)), F !== e ? (Z = Ut(), P = E(), P !== e ? (Ut(), t.charCodeAt(d) === 125 ? (we = a, d++) : (we = e, O === 0 && ve(rt)), we !== e ? (j = b, b = tt(P)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.substr(d, 3) === l ? (F = l, d += 3) : (F = e, O === 0 && ve(ye)), F !== e && (j = b, F = Ct()), b = F, b === e && (b = d, F = d, O++, t.charCodeAt(d) === 92 ? (Z = c, d++) : (Z = e, O === 0 && ve(Ae)), Z === e && (t.charCodeAt(d) === 39 ? (Z = fe, d++) : (Z = e, O === 0 && ve(St)), Z === e && (t.substr(d, 2) === s ? (Z = s, d += 2) : (Z = e, O === 0 && ve(ke)))), O--, Z === e ? F = void 0 : (d = F, F = e), F !== e ? (t.length > d ? (Z = t.charAt(d), d++) : (Z = e, O === 0 && ve(_e)), Z !== e ? (j = b, b = Xt()) : (d = b, b = e)) : (d = b, b = e), b === e))) {
      if (b = d, t.substr(d, 2) === s ? (F = s, d += 2) : (F = e, O === 0 && ve(ke)), F !== e) {
        if (Z = [], Ie.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, O === 0 && ve(Tt)), P !== e)
          for (; P !== e; )
            Z.push(P), Ie.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, O === 0 && ve(Tt));
        else
          Z = e;
        Z !== e ? (t.charCodeAt(d) === 125 ? (P = a, d++) : (P = e, O === 0 && ve(rt)), P !== e ? (j = b, b = Yt()) : (d = b, b = e)) : (d = b, b = e);
      } else
        d = b, b = e;
      b === e && (b = d, t.substr(d, 2) === s ? (F = s, d += 2) : (F = e, O === 0 && ve(ke)), F !== e && (j = b, F = fr()), b = F, b === e && (b = d, t.charCodeAt(d) === 92 ? (F = c, d++) : (F = e, O === 0 && ve(Ae)), F !== e ? (t.substr(d, 2) === s ? (Z = s, d += 2) : (Z = e, O === 0 && ve(ke)), Z !== e ? (j = b, b = ct(Z)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (F = c, d++) : (F = e, O === 0 && ve(Ae)), F !== e ? (t.length > d ? (Z = t.charAt(d), d++) : (Z = e, O === 0 && ve(_e)), Z !== e ? (j = b, b = te(Z)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (F = c, d++) : (F = e, O === 0 && ve(Ae)), F !== e && (j = b, F = bt()), b = F))));
    }
    return b;
  }
  function jn() {
    var b, F, Z;
    if (O++, b = d, t.charCodeAt(d) === 45 ? d++ : O === 0 && ve(nt), F = [], ee.test(t.charAt(d)) ? (Z = t.charAt(d), d++) : (Z = e, O === 0 && ve(K)), Z !== e)
      for (; Z !== e; )
        F.push(Z), ee.test(t.charAt(d)) ? (Z = t.charAt(d), d++) : (Z = e, O === 0 && ve(K));
    else
      F = e;
    return F !== e ? (j = b, b = nr()) : (d = b, b = e), O--, b === e && O === 0 && ve(et), b;
  }
  function xn() {
    var b, F, Z, P, we, me, Ot, Lt, Ur;
    for (O++, b = d, t.charCodeAt(d) === 45 ? d++ : O === 0 && ve(nt), F = [], ee.test(t.charAt(d)) ? (Z = t.charAt(d), d++) : (Z = e, O === 0 && ve(K)); Z !== e; )
      F.push(Z), ee.test(t.charAt(d)) ? (Z = t.charAt(d), d++) : (Z = e, O === 0 && ve(K));
    if (t.charCodeAt(d) === 46 ? (Z = M, d++) : (Z = e, O === 0 && ve(_t)), Z !== e) {
      if (P = [], ee.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, O === 0 && ve(K)), we !== e)
        for (; we !== e; )
          P.push(we), ee.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, O === 0 && ve(K));
      else
        P = e;
      if (P !== e) {
        if (we = d, t.charCodeAt(d) === 101 ? (me = Ce, d++) : (me = e, O === 0 && ve(Mt)), me === e && (t.charCodeAt(d) === 69 ? (me = Ee, d++) : (me = e, O === 0 && ve(Zt))), me !== e) {
          if (t.charCodeAt(d) === 43 ? (Ot = Q, d++) : (Ot = e, O === 0 && ve(wt)), Ot === e && (t.charCodeAt(d) === 45 ? (Ot = ce, d++) : (Ot = e, O === 0 && ve(nt))), Ot === e && (Ot = null), Lt = [], ee.test(t.charAt(d)) ? (Ur = t.charAt(d), d++) : (Ur = e, O === 0 && ve(K)), Ur !== e)
            for (; Ur !== e; )
              Lt.push(Ur), ee.test(t.charAt(d)) ? (Ur = t.charAt(d), d++) : (Ur = e, O === 0 && ve(K));
          else
            Lt = e;
          Lt !== e ? (me = [me, Ot, Lt], we = me) : (d = we, we = e);
        } else
          d = we, we = e;
        we === e && (we = null), j = b, b = mr();
      } else
        d = b, b = e;
    } else
      d = b, b = e;
    if (b === e) {
      if (b = d, t.charCodeAt(d) === 45 ? d++ : O === 0 && ve(nt), F = [], ee.test(t.charAt(d)) ? (Z = t.charAt(d), d++) : (Z = e, O === 0 && ve(K)), Z !== e)
        for (; Z !== e; )
          F.push(Z), ee.test(t.charAt(d)) ? (Z = t.charAt(d), d++) : (Z = e, O === 0 && ve(K));
      else
        F = e;
      if (F !== e)
        if (t.charCodeAt(d) === 101 ? (Z = Ce, d++) : (Z = e, O === 0 && ve(Mt)), Z === e && (t.charCodeAt(d) === 69 ? (Z = Ee, d++) : (Z = e, O === 0 && ve(Zt))), Z !== e) {
          if (t.charCodeAt(d) === 43 ? (P = Q, d++) : (P = e, O === 0 && ve(wt)), P === e && (t.charCodeAt(d) === 45 ? (P = ce, d++) : (P = e, O === 0 && ve(nt))), P === e && (P = null), we = [], ee.test(t.charAt(d)) ? (me = t.charAt(d), d++) : (me = e, O === 0 && ve(K)), me !== e)
            for (; me !== e; )
              we.push(me), ee.test(t.charAt(d)) ? (me = t.charAt(d), d++) : (me = e, O === 0 && ve(K));
          else
            we = e;
          we !== e ? (j = b, b = sr()) : (d = b, b = e);
        } else
          d = b, b = e;
      else
        d = b, b = e;
    }
    return O--, b === e && O === 0 && ve(At), b;
  }
  function Un() {
    var b, F, Z, P, we, me, Ot, Lt, Ur, Dr, Jr;
    if (b = d, De.test(t.charAt(d)) ? (F = t.charAt(d), d++) : (F = e, O === 0 && ve(Jt)), F !== e) {
      if (Z = [], P = [], qe.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, O === 0 && ve(he)), we !== e)
        for (; we !== e; )
          P.push(we), qe.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, O === 0 && ve(he));
      else
        P = e;
      for (P === e && (P = d, t.charCodeAt(d) === 46 ? (we = M, d++) : (we = e, O === 0 && ve(_t)), we !== e ? (me = d, O++, Ot = d, Lt = Ut(), Ur = Gn(), Ur !== e ? (Dr = Ut(), t.charCodeAt(d) === 40 ? (Jr = N, d++) : (Jr = e, O === 0 && ve(je)), Jr !== e ? (Lt = [Lt, Ur, Dr, Jr], Ot = Lt) : (d = Ot, Ot = e)) : (d = Ot, Ot = e), O--, Ot === e ? me = void 0 : (d = me, me = e), me !== e ? (we = [we, me], P = we) : (d = P, P = e)) : (d = P, P = e)); P !== e; ) {
        if (Z.push(P), P = [], qe.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, O === 0 && ve(he)), we !== e)
          for (; we !== e; )
            P.push(we), qe.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, O === 0 && ve(he));
        else
          P = e;
        P === e && (P = d, t.charCodeAt(d) === 46 ? (we = M, d++) : (we = e, O === 0 && ve(_t)), we !== e ? (me = d, O++, Ot = d, Lt = Ut(), Ur = Gn(), Ur !== e ? (Dr = Ut(), t.charCodeAt(d) === 40 ? (Jr = N, d++) : (Jr = e, O === 0 && ve(je)), Jr !== e ? (Lt = [Lt, Ur, Dr, Jr], Ot = Lt) : (d = Ot, Ot = e)) : (d = Ot, Ot = e), O--, Ot === e ? me = void 0 : (d = me, me = e), me !== e ? (we = [we, me], P = we) : (d = P, P = e)) : (d = P, P = e));
      }
      j = b, b = v();
    } else
      d = b, b = e;
    return b;
  }
  function Gn() {
    var b, F, Z, P;
    if (b = d, De.test(t.charAt(d)) ? (F = t.charAt(d), d++) : (F = e, O === 0 && ve(Jt)), F !== e) {
      for (Z = [], qe.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, O === 0 && ve(he)); P !== e; )
        Z.push(P), qe.test(t.charAt(d)) ? (P = t.charAt(d), d++) : (P = e, O === 0 && ve(he));
      j = b, b = re();
    } else
      d = b, b = e;
    return b;
  }
  function Ut() {
    var b, F;
    for (O++, b = [], Ke.test(t.charAt(d)) ? (F = t.charAt(d), d++) : (F = e, O === 0 && ve(pt)); F !== e; )
      b.push(F), Ke.test(t.charAt(d)) ? (F = t.charAt(d), d++) : (F = e, O === 0 && ve(pt));
    return O--, F = e, O === 0 && ve(Be), b;
  }
  if (Dt = i(), Dt !== e && d === t.length)
    return Dt;
  throw Dt !== e && d < t.length && ve(br()), pn(
    Pt,
    Re < t.length ? t.charAt(Re) : null,
    Re < t.length ? Zr(Re, Re + 1) : Zr(Re, Re)
  );
}
const T2 = 128, Ti = /* @__PURE__ */ new Map();
let Of;
function o_(t) {
  return Ti.get(t);
}
function i_(t, r) {
  t !== Of && (Ti.delete(t), Ti.size >= T2 && Ti.delete(Ti.keys().next().value), Ti.set(t, r), Of = t);
}
const Lf = /* @__PURE__ */ new Set([
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
function M2(t) {
  if (!(typeof t.name == "string" && t.name))
    throw new Error("Incorrect function name");
  if (!(typeof t.body == "string" && t.body))
    throw new Error("Incorrect function body");
  if (!(t.return_type && Lf.has(t.return_type)))
    throw new Error("Incorrect function return_type");
  if (!Array.isArray(t.arguments))
    throw new Error("Incorrect function arguments");
  const r = /* @__PURE__ */ new Set();
  t.arguments.forEach((e) => {
    if (!(typeof e.name == "string" && e.name))
      throw new Error("Incorrect argument name");
    if (!(e.type && Lf.has(e.type)))
      throw new Error("Incorrect argument type");
    if (r.has(e.name))
      throw new Error("Duplicate argument name");
    r.add(e.name);
  });
}
function P2(t) {
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
        const c = Es(t.arguments[l].name, a.type, a.value);
        o.set(c.getName(), c);
      });
      const i = Ca(o, e.customFunctions, e.store, r, {
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
function N2(t, r) {
  if (!t)
    return r || void 0;
  if (!r)
    return t || void 0;
  const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
  for (const [o, i] of r) {
    for (const s of i) {
      const a = rf(o, s);
      n.add(a);
    }
    e.set(o, i);
  }
  for (const [o, i] of t)
    for (const s of i) {
      const a = rf(o, s);
      if (!n.has(a)) {
        n.add(a);
        const l = e.get(o) || [];
        l.push(s), e.set(o, l);
      }
    }
  return e;
}
function z2(t) {
  if (!t)
    return Y(new Error("Missing object"));
  const r = t.card, e = t.templates || {};
  if (!r)
    return Y(new Error("Missing card"));
  if (!r.states || !r.states.length)
    return Y(new Error("Missing states"));
  for (const n in e)
    if (e.hasOwnProperty(n) && n in Yd)
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
function O2(t) {
  return [...new Set(t)];
}
class s_ {
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
      a = Ca(r, e, o, this.ast, {
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
          result: zd(u),
          usedVars: a.usedVars
        };
      if (c.type === "boolean")
        return {
          result: !!u,
          usedVars: a.usedVars
        };
      if (c.type === "color") {
        const f = fo(String(u));
        if (f)
          return {
            result: Ai(f),
            usedVars: a.usedVars
          };
        n(Y(new Error("Expression execution error")));
      }
      if (c.type === "integer")
        return u > Jm || u < qm ? (n(Y(new Error("Expression result is out of 32-bit int range"))), {
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
function L2(t) {
  return t.indexOf("@{") > -1 || t.indexOf("\\") > -1;
}
function oa(t, r, e, n) {
  if (t)
    if (typeof t == "string") {
      if (L2(t)) {
        r.hasExpression = !0;
        try {
          const o = o_(t) || n_(t, {
            startRule: "JsonStringContents"
          });
          i_(t, o);
          const i = Qm(o);
          return r.vars.push(...i), new s_(o, t);
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
    if (t instanceof s_)
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
function Rf(t, r, e, n, o = 1 / 0) {
  const i = {
    vars: [],
    hasExpression: !1
  }, s = oa(t, i, r, o);
  return {
    vars: O2(i.vars),
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
class l_ {
  constructor() {
    Er(this, "_vars", /* @__PURE__ */ new Map());
    Er(this, "_lastAddedVariable", Do(""));
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
function R3() {
  return new l_();
}
const R2 = ["start", "stop", "pause", "resume", "cancel", "reset"], B2 = new Set(R2);
class H2 {
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
    if (!r || !e || !this.timers.has(r) || !B2.has(e)) {
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
function W2(t, r, e, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number" && i !== void 0) {
    e(Y(new Error("Incorrect array_insert_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Ea(t, r, e, n, (a) => {
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
      const c = l.slice(), u = ml(s);
      typeof i == "number" ? c.splice(i, 0, u) : c.push(u), a.setValue(c);
    }
  });
}
function U2(t, r, e, n) {
  const { variable_name: o, index: i } = n;
  if (typeof i != "number") {
    e(Y(new Error("Incorrect array_remove_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Ea(t, r, e, n, (s) => {
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
function G2(t, r, e, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number") {
    e(Y(new Error("Incorrect array_set_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Ea(t, r, e, n, (a) => {
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
      c[i] = ml(s), a.setValue(c);
    }
  });
}
function Ea(t, r, e, n, o) {
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
function J2(t, r, e, n) {
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
    s ? u[i] = ml(s) : delete u[i], a.setValue(u);
  } else
    e(Y(new Error("Trying to set value into the non-dict"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function q2(t, r) {
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
function Y2(t) {
  if (t === "normal" || t === "reverse" || t === "alternate" || t === "alternate_reverse")
    return t;
}
function K2(t, r, e, n) {
  var H, L, Q, ce;
  const o = Hn(t.duration, 0);
  if (!o || t.type !== "color_animator" && t.type !== "number_animator")
    return;
  const i = (H = t.start_value_typed ? t.start_value_typed.value : t.start_value) != null ? H : r.getValue(), s = t.end_value_typed ? t.end_value_typed.value : t.end_value;
  if (i === void 0 || s === void 0 || t.type === "color_animator" && (typeof i != "string" && i !== void 0 || typeof s != "string") || t.type === "number_animator" && (typeof i != "number" && i !== void 0 || typeof s != "number"))
    return;
  const a = t.type === "color_animator" && fo(i), l = t.type === "color_animator" && fo(s);
  if (t.type === "color_animator" && (!a || !l))
    return;
  const c = tn(t.start_delay, 0), u = ba(t.interpolator || "linear"), f = Y2(t.direction) || "normal", _ = ((L = t.repeat_count) == null ? void 0 : L.type) === "infinity" ? 1 / 0 : ((Q = t.repeat_count) == null ? void 0 : Q.type) === "fixed" ? tn((ce = t.repeat_count) == null ? void 0 : ce.value, 1) : 1;
  let h = 0, m = performance.now();
  const p = _ === 1 / 0 ? 1 / 0 : _ * o + c;
  function k(T) {
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
  function w(T) {
    const X = T - m;
    if (m = T, h += X, h >= c) {
      let le = Math.floor((h - c) / o), C = (h - c - le * o) / o;
      le >= _ && (le = _ - 1, C = 1);
      let M;
      f === "normal" || f === "alternate" && le % 2 === 0 || f === "alternate_reverse" && le % 2 === 1 ? M = "normal" : M = "reverse", M === "reverse" && (C = 1 - C);
      const N = k(u(C));
      r.setValue(N);
    }
    h < p ? z = requestAnimationFrame(w) : (e(), n(t.end_actions));
  }
  let z = requestAnimationFrame(w);
  return {
    stop() {
      cancelAnimationFrame(z), n(t.cancel_actions), n(t.end_actions);
    }
  };
}
function X2(t) {
  let r = t;
  for (; r && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function Z2(t) {
  let r = t;
  for (; r != null && r.parent && r.json.type !== "state" && !r.isRootState && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function xs(t) {
  return !!(t && typeof t == "string");
}
const Q2 = /* @__PURE__ */ new Set([
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "head",
  "options"
]);
function x2(t) {
  return t === void 0 || Q2.has(t);
}
function $2(t) {
  return t === void 0 || Array.isArray(t) && t.every((r) => xs(r.name) && xs(r.value));
}
function e3(t) {
  var r, e, n;
  return xs(t.container_id) && xs((r = t.request) == null ? void 0 : r.url) && x2((e = t.request) == null ? void 0 : e.method) && $2((n = t.request) == null ? void 0 : n.headers);
}
function t3(t, r, e, n) {
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
        const k = Number(p);
        if (Number.isNaN(k)) {
          e(Y(new Error(`Unable to use '${p}' as array index`), {
            additional: {
              name: o,
              type: l,
              path: i
            }
          }));
          return;
        }
        if (m + 1 === f.length && (k < 0 || k > h.length)) {
          e(Y(new Error(`Position '${k}' is out of array bounds`), {
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
    e(Y(new Error("Action requires array or dictionary variable"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function Bf(t, { delay: r = 0, duration: e = 400, easing: n = Vd, x: o = 0, y: i = 0, opacity: s = 0 } = {}) {
  const a = getComputedStyle(t), l = +a.opacity, c = a.transform === "none" ? "" : a.transform, u = l * (1 - s), [f, _] = Da(o), [h, m] = Da(i);
  return {
    delay: r,
    duration: e,
    easing: n,
    css: (p, k) => `
			transform: ${c} translate(${(1 - p) * f}${_}, ${(1 - p) * h}${m});
			opacity: ${l - u * k}`
  };
}
const r3 = "appkit-outer", n3 = "appkit-root__clickable", o3 = "undefined", i3 = "appkit-tooltip", s3 = "appkit-tooltip_visible", l3 = "appkit-tooltip_modal", a3 = "appkit-tooltip__inner", c3 = "appkit-tooltip__overlay", u3 = "appkit-tooltip__substrate", vo = {
  outer: r3,
  root__clickable: n3,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  root__selectable: o3,
  tooltip: i3,
  tooltip_visible: s3,
  tooltip_modal: l3,
  tooltip__inner: a3,
  tooltip__overlay: c3,
  tooltip__substrate: u3
}, a_ = 300, c_ = 0;
function sa(t) {
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
  const n = ss(r), o = sa(n);
  return n.some((s) => s.name === "no_animation") ? {} : {
    duration: Li() ? 0 : o,
    css: (s) => {
      const a = s * o, l = n.map((p) => {
        var Q, ce, T, X, le, C, M, N, U, se, fe, Ce;
        const k = Number(p.start_delay) || c_, w = Number(p.duration) || a_, z = e === "in" ? Math.max(0, Math.min(1, (a - k) / w)) : Math.max(0, Math.min(1, (a - (o - w) + k) / w)), L = (ba(p.interpolator || "ease_in_out") || pl)(z);
        if (p.name === "fade") {
          const Ee = e === "in" ? (Q = p.start_value) != null ? Q : 0 : (ce = p.end_value) != null ? ce : 0, de = e === "in" ? (T = p.end_value) != null ? T : 1 : (X = p.start_value) != null ? X : 1;
          return {
            active: L > 0 && L < 1,
            opacity: (1 - L) * Ee + L * de
          };
        } else if (p.name === "translate") {
          const Ee = -(e === "in" ? (le = p.start_value) != null ? le : 10 : (C = p.end_value) != null ? C : 10), de = -(e === "in" ? (M = p.end_value) != null ? M : 0 : (N = p.start_value) != null ? N : 0);
          return {
            active: L > 0 && L < 1,
            translate: `translateY(${(1 - L) * Ee + L * de}${e === "in" && p.start_value !== void 0 || e === "out" && p.end_value !== void 0 ? "%" : "px"})`
          };
        } else if (p.name === "scale") {
          const Ee = e === "in" ? (U = p.start_value) != null ? U : 0 : (se = p.end_value) != null ? se : 0, de = e === "in" ? (fe = p.end_value) != null ? fe : 1 : (Ce = p.start_value) != null ? Ce : 1;
          return {
            active: L > 0 && L < 1,
            scale: `scale(${(1 - L) * Ee + L * de})`
          };
        }
        return {};
      }), c = l.map((p) => p.opacity).filter((p) => p !== void 0).reduce((p, k) => p * k, 1), u = l.map((p) => p.translate).filter((p) => p !== void 0).join(" "), f = l.map((p) => p.scale).filter((p) => p !== void 0).join(" "), _ = l.filter((p) => p.active).map((p) => p.scale).filter((p) => p !== void 0), h = _.length ? _[_.length - 1] : f;
      return `transform:${[u, h].filter(Boolean).join(" ") || "none"};opacity:${c}`;
    }
  };
}
const ts = typeof window < "u" && "HTMLDialogElement" in window, { document: f3, window: d3 } = No;
function _3(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _ = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && Hf(t)
  ), h = (
    /*substrateComponentContext*/
    t[14] && Wf(t)
  );
  return i = new Qn({
    props: {
      componentContext: (
        /*componentContext*/
        t[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = cr(), h && h.c(), e = cr(), n = Ve("div"), o = Ve("div"), Ht(i.$$.fragment), g(o, "class", vo.tooltip__inner), g(n, "class", s = mt(
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
      _ && _.m(m, p), q(m, r, p), h && h.m(m, p), q(m, e, p), q(m, n, p), ht(n, o), Rt(i, o, null), t[40](o), t[41](n), c = !0, u || (f = [
        We(
          n,
          "keydown",
          /*onKeyDown*/
          t[26]
        ),
        We(
          n,
          "introstart",
          /*onIntroStart*/
          t[28]
        ),
        We(
          n,
          "introend",
          /*onIntroEnd*/
          t[29]
        ),
        We(
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
      t[3] ? _ ? _.p(t, p) : (_ = Hf(t), _.c(), _.m(r.parentNode, r)) : _ && (_.d(1), _ = null), /*substrateComponentContext*/
      t[14] ? h ? (h.p(t, p), p[0] & /*substrateComponentContext*/
      16384 && W(h, 1)) : (h = Wf(t), h.c(), W(h, 1), h.m(e.parentNode, e)) : h && (_r(), $(h, 1, 1, () => {
        h = null;
      }), pr());
      const k = {};
      p[0] & /*componentContext*/
      4 && (k.componentContext = /*componentContext*/
      t[2]), i.$set(k), (!c || p[0] & /*mods, $isDesktop*/
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
      c || (W(h), W(i.$$.fragment, m), to(() => {
        c && (l && l.end(1), a = ll(n, $s, {
          animations: (
            /*$animationIn*/
            t[5] || Hi
          ),
          direction: "in"
        }), a.start());
      }), c = !0);
    },
    o(m) {
      $(h), $(i.$$.fragment, m), a && a.invalidate(), l = ud(n, $s, {
        animations: (
          /*$animationOut*/
          t[4] || Hi
        ),
        direction: "out"
      }), c = !1;
    },
    d(m) {
      m && (J(r), J(e), J(n)), _ && _.d(m), h && h.d(m), Bt(i), t[40](null), t[41](null), m && l && l.end(), u = !1, Rr(f);
    }
  };
}
function p3(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _ = (
    /*substrateComponentContext*/
    t[14] && Uf(t)
  ), h = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && /*data*/
    t[0].background_accessibility_description && Gf(t)
  );
  return i = new Qn({
    props: {
      componentContext: (
        /*componentContext*/
        t[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = cr(), e = Ve("dialog"), h && h.c(), n = cr(), o = Ve("div"), Ht(i.$$.fragment), g(o, "class", vo.tooltip__inner), g(e, "class", s = mt(
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
      _ && _.m(m, p), q(m, r, p), q(m, e, p), h && h.m(e, null), ht(e, n), ht(e, o), Rt(i, o, null), t[36](o), t[37](e), c = !0, u || (f = [
        We(
          e,
          "keydown",
          /*onKeyDown*/
          t[26]
        ),
        We(
          e,
          "close",
          /*onClose*/
          t[27]
        ),
        We(
          e,
          "cancel",
          /*onClose*/
          t[27]
        ),
        We(
          e,
          "click",
          /*onOutClick*/
          t[23]
        ),
        We(
          e,
          "introstart",
          /*onIntroStart*/
          t[28]
        ),
        We(
          e,
          "introend",
          /*onIntroEnd*/
          t[29]
        ),
        We(
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
      16384 && W(_, 1)) : (_ = Uf(t), _.c(), W(_, 1), _.m(r.parentNode, r)) : _ && (_r(), $(_, 1, 1, () => {
        _ = null;
      }), pr()), /*visible*/
      t[1] && /*modal*/
      t[3] && /*data*/
      t[0].background_accessibility_description ? h ? h.p(t, p) : (h = Gf(t), h.c(), h.m(e, n)) : h && (h.d(1), h = null);
      const k = {};
      p[0] & /*componentContext*/
      4 && (k.componentContext = /*componentContext*/
      t[2]), i.$set(k), (!c || p[0] & /*mods, $isDesktop*/
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
      c || (W(_), W(i.$$.fragment, m), to(() => {
        c && (l && l.end(1), a = ll(e, $s, {
          animations: (
            /*$animationIn*/
            t[5] || Hi
          ),
          direction: "in"
        }), a.start());
      }), c = !0);
    },
    o(m) {
      $(_), $(i.$$.fragment, m), a && a.invalidate(), l = ud(e, $s, {
        animations: (
          /*$animationOut*/
          t[4] || Hi
        ),
        direction: "out"
      }), c = !1;
    },
    d(m) {
      m && (J(r), J(e)), _ && _.d(m), h && h.d(), Bt(i), t[36](null), t[37](null), m && l && l.end(), u = !1, Rr(f);
    }
  };
}
function Hf(t) {
  let r;
  function e(i, s) {
    return (
      /*data*/
      i[0].background_accessibility_description ? h3 : g3
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = xt();
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
function g3(t) {
  let r, e, n;
  return {
    c() {
      r = Ve("div"), g(r, "class", vo.tooltip__overlay);
    },
    m(o, i) {
      q(o, r, i), e || (n = We(
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
function h3(t) {
  let r, e, n, o;
  return {
    c() {
      r = Ve("button"), g(r, "class", vo.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", e = /*data*/
      t[0].background_accessibility_description);
    },
    m(i, s) {
      q(i, r, s), n || (o = We(
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
function Wf(t) {
  let r, e, n, o, i;
  return e = new Qn({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        t[14]
      )
    }
  }), {
    c() {
      r = Ve("div"), Ht(e.$$.fragment), n = cr(), o = Ve("div"), g(r, "class", vo.tooltip__substrate);
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
      i || (W(e.$$.fragment, s), i = !0);
    },
    o(s) {
      $(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (J(r), J(n), J(o)), Bt(e), t[38](null), t[39](null);
    }
  };
}
function Uf(t) {
  let r, e, n, o, i;
  return e = new Qn({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        t[14]
      )
    }
  }), {
    c() {
      r = Ve("div"), Ht(e.$$.fragment), n = cr(), o = Ve("div"), g(r, "class", vo.tooltip__substrate);
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
      i || (W(e.$$.fragment, s), i = !0);
    },
    o(s) {
      $(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (J(r), J(n), J(o)), Bt(e), t[34](null), t[35](null);
    }
  };
}
function Gf(t) {
  let r, e, n, o;
  return {
    c() {
      r = Ve("button"), g(r, "class", vo.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", e = /*data*/
      t[0].background_accessibility_description);
    },
    m(i, s) {
      q(i, r, s), n || (o = We(
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
function m3(t) {
  let r, e, n, o, i, s, a;
  const l = [p3, _3], c = [];
  function u(f, _) {
    return ts ? 0 : 1;
  }
  return e = u(), n = c[e] = l[e](t), {
    c() {
      r = cr(), n.c(), o = xt();
    },
    m(f, _) {
      q(f, r, _), c[e].m(f, _), q(f, o, _), i = !0, s || (a = [
        We(
          d3,
          "resize",
          /*onWindowResize*/
          t[25]
        ),
        We(
          f3.body,
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
      i || (W(n), i = !0);
    },
    o(f) {
      $(n), i = !1;
    },
    d(f) {
      f && (J(r), J(o)), c[e].d(f), s = !1, Rr(a);
    }
  };
}
const Hi = {
  name: "set",
  items: [{ name: "translate" }, { name: "fade" }]
};
let Yn = [];
function b3(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _ = A, h = () => (_(), _ = V(i, (I) => e(46, f = I)), i), m, p = A, k = () => (p(), p = V(o, (I) => e(47, m = I)), o), w, z = A, H = () => (z(), z = V(n, (I) => e(48, w = I)), n), L, Q = A, ce = () => (Q(), Q = V(a, (I) => e(4, L = I)), a), T, X = A, le = () => (X(), X = V(s, (I) => e(5, T = I)), s), C;
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => X());
  let { ownerNode: M } = r, { data: N } = r, { internalId: U } = r, { parentComponentContext: se } = r;
  const fe = Tr(Xr), Ce = fe.isDesktop;
  bn(t, Ce, (I) => e(21, C = I));
  const Ee = Date.now();
  let de, Ie, ee, De, qe = !1, Ke = "", ke = "", rt = "", ye = "", Ae = null, _e, x, ue = !0, ie = null;
  function Fe() {
    var pt, be;
    if (!de || !M)
      return;
    const I = de.parentElement;
    if (!I)
      return;
    const vt = de.style.cssText;
    e(6, de.style.cssText += ";transform: none !important", de);
    const ft = M.getBoundingClientRect(), St = de.getBoundingClientRect(), Tt = I.getBoundingClientRect();
    e(6, de.style.cssText = vt, de);
    let et = 0, K = 0, At = null, Mt = null, Zt = 0, Jt = 0;
    const he = (pt = _e == null ? void 0 : _e.json) == null ? void 0 : pt.width, Be = (be = _e == null ? void 0 : _e.json) == null ? void 0 : be.height;
    if (!he || he.type === "match_parent" ? Zt = At = window.innerWidth : he.type === "fixed" && he.value ? Zt = At = he.value : Zt = St.width, (Be == null ? void 0 : Be.type) === "match_parent" ? Jt = Mt = window.innerHeight : (Be == null ? void 0 : Be.type) === "fixed" && Be.value ? Jt = Mt = Be.value : Jt = St.height, w === "left" || w === "bottom-left" || w === "top-left")
      et = ft.left - Zt;
    else if (w === "top" || w === "bottom" || w === "center")
      et = (ft.left + ft.right) / 2 - Zt / 2;
    else if (w === "right" || w === "bottom-right" || w === "top-right")
      et = ft.right;
    else
      return;
    if (w === "top" || w === "top-left" || w === "top-right")
      K = ft.top - Jt;
    else if (w === "left" || w === "right" || w === "center")
      K = (ft.top + ft.bottom) / 2 - Jt / 2;
    else if (w === "bottom-left" || w === "bottom" || w === "bottom-right")
      K = ft.bottom;
    else
      return;
    ts && ue || (et -= Tt.left, K -= Tt.top), et += m || 0, K += f || 0, e(10, Ke = `${et}px`), e(11, ke = `${K}px`), e(12, rt = At !== null ? `${At}px` : ""), e(13, ye = Mt !== null ? `${Mt}px` : ""), e(1, qe = !0), At === null || Mt === null ? typeof ResizeObserver < "u" && !Ae && (Ae = new ResizeObserver(() => {
      requestAnimationFrame(Fe);
    }), Ae.observe(de)) : Ae == null || Ae.disconnect();
  }
  function xe(I) {
    if (Yn.length && Yn[Yn.length - 1] !== de)
      return;
    const vt = I.composedPath();
    Date.now() - Ee < 100 || vt.includes(de) && !(ts && vt[0] === de) || Xe();
  }
  function Xe(I) {
    I == null || I.stopPropagation(), I == null || I.preventDefault(), _e.getJsonWithVars(N.close_by_tap_outside) !== !1 && (Yn = Yn.filter((vt) => vt !== de), fe.onTooltipClose(U)), N.tap_outside_actions && _e.execAnyActions(N.tap_outside_actions, { processUrls: !0 });
  }
  function ne() {
    Fe();
  }
  function Ye(I) {
    Yn.length && Yn[Yn.length - 1] !== de || I.key === "Escape" && !I.ctrlKey && !I.shiftKey && !I.altKey && !I.metaKey && (Yn = Yn.filter((vt) => vt !== de), fe.onTooltipClose(U));
  }
  function Le(I) {
    Yn = Yn.filter((vt) => vt !== de), fe.onTooltipClose(U), I.preventDefault();
  }
  function st() {
    ee && ee.animate({ opacity: [0, 1] }, {
      duration: l,
      easing: "ease-in-out"
    });
  }
  function lt() {
    ee && de.insertBefore(ee, Ie);
  }
  function at() {
    De != null && De.parentElement && ee && (De.parentElement.insertBefore(ee, De), ee.animate({ opacity: [1, 0] }, {
      duration: c,
      easing: "ease-in-out"
    }));
  }
  ro(() => {
    try {
      ie = document.activeElement;
    } catch {
    }
    if (fe.tooltipRoot) {
      const I = window.getComputedStyle(de);
      e(6, de.style.fontSize = I.fontSize, de), e(6, de.style.fontFamily = I.fontFamily, de), e(6, de.style.lineHeight = I.lineHeight, de), fe.tooltipRoot.appendChild(de);
    }
    ts && de && de instanceof HTMLDialogElement && de[ue ? "showModal" : "show"](), ue && Yn.push(de);
  }), sl(() => {
    qe || Fe();
  }), on(() => {
    if (_e && _e.destroy(), x && x.destroy(), Ae == null || Ae.disconnect(), Yn = Yn.filter((I) => I !== de), ue && ie && ie instanceof HTMLElement) {
      ts && de && de instanceof HTMLDialogElement && de.close();
      try {
        ie.focus({ preventScroll: !0 });
      } catch {
      }
    }
  });
  function wt(I) {
    Ir[I ? "unshift" : "push"](() => {
      ee = I, e(8, ee);
    });
  }
  function nt(I) {
    Ir[I ? "unshift" : "push"](() => {
      De = I, e(9, De);
    });
  }
  function zt(I) {
    Ir[I ? "unshift" : "push"](() => {
      Ie = I, e(7, Ie);
    });
  }
  function ut(I) {
    Ir[I ? "unshift" : "push"](() => {
      de = I, e(6, de);
    });
  }
  function pe(I) {
    Ir[I ? "unshift" : "push"](() => {
      ee = I, e(8, ee);
    });
  }
  function ge(I) {
    Ir[I ? "unshift" : "push"](() => {
      De = I, e(9, De);
    });
  }
  function _t(I) {
    Ir[I ? "unshift" : "push"](() => {
      Ie = I, e(7, Ie);
    });
  }
  function je(I) {
    Ir[I ? "unshift" : "push"](() => {
      de = I, e(6, de);
    });
  }
  return t.$$set = (I) => {
    "ownerNode" in I && e(31, M = I.ownerNode), "data" in I && e(0, N = I.data), "internalId" in I && e(32, U = I.internalId), "parentComponentContext" in I && e(33, se = I.parentComponentContext);
  }, t.$$.update = () => {
    var I, vt, ft, St, Tt;
    t.$$.dirty[0] & /*componentContext, data*/
    5 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && (_e && _e.destroy(), e(2, _e = se.produceChildContext(N.div || {}, { isTooltipRoot: !0 })), N.substrate_div && e(14, x = se.produceChildContext(N.substrate_div, { isTooltipRoot: !0 }))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && H(e(20, n = se.getDerivedFromVars(N.position))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && k(e(19, o = se.getDerivedFromVars((vt = (I = N.offset) == null ? void 0 : I.x) == null ? void 0 : vt.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && h(e(18, i = se.getDerivedFromVars((St = (ft = N.offset) == null ? void 0 : ft.y) == null ? void 0 : St.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && le(e(17, s = se.getDerivedFromVars(N.animation_in))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && ce(e(16, a = se.getDerivedFromVars(N.animation_out))), t.$$.dirty[0] & /*$animationIn*/
    32 && (l = Li() ? 0 : sa(ss(T || Hi))), t.$$.dirty[0] & /*$animationOut*/
    16 && (c = Li() ? 0 : sa(ss(L || Hi))), t.$$.dirty[0] & /*data*/
    1 && (((Tt = N.mode) == null ? void 0 : Tt.type) === "non_modal" ? e(3, ue = !1) : e(3, ue = !0)), t.$$.dirty[0] & /*visible, modal*/
    10 && e(15, u = { visible: qe, modal: ue });
  }, [
    N,
    qe,
    _e,
    ue,
    L,
    T,
    de,
    Ie,
    ee,
    De,
    Ke,
    ke,
    rt,
    ye,
    x,
    u,
    a,
    s,
    i,
    o,
    n,
    C,
    Ce,
    xe,
    Xe,
    ne,
    Ye,
    Le,
    st,
    lt,
    at,
    M,
    U,
    se,
    wt,
    nt,
    zt,
    ut,
    pe,
    ge,
    _t,
    je
  ];
}
class y3 extends Or {
  constructor(r) {
    super(), zr(
      this,
      r,
      b3,
      m3,
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
const w3 = "appkit-root_platform_desktop", k3 = "appkit-menu", v3 = "appkit-menu_visible", j3 = "appkit-menu__list", C3 = "appkit-menu__item", Bs = {
  root_platform_desktop: w3,
  menu: k3,
  menu_visible: v3,
  menu__list: j3,
  menu__item: C3
}, { window: Jf } = No;
function qf(t, r, e) {
  const n = t.slice();
  return n[23] = r[e], n;
}
function E3(t) {
  let r = (
    /*item*/
    t[23].text + ""
  ), e;
  return {
    c() {
      e = Mn(r);
    },
    m(n, o) {
      q(n, e, o);
    },
    p(n, o) {
      o & /*items*/
      1 && r !== (r = /*item*/
      n[23].text + "") && Xn(e, r);
    },
    d(n) {
      n && J(e);
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
      $$slots: { default: [E3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      r = Ve("li"), Ht(e.$$.fragment), n = cr();
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
      o || (W(e.$$.fragment, i), o = !0);
    },
    o(i) {
      $(e.$$.fragment, i), o = !1;
    },
    d(i) {
      i && J(r), Bt(e);
    }
  };
}
function A3(t) {
  let r, e, n, o, i, s, a, l = ir(
    /*items*/
    t[0]
  ), c = [];
  for (let f = 0; f < l.length; f += 1)
    c[f] = Yf(qf(t, l, f));
  const u = (f) => $(c[f], 1, 1, () => {
    c[f] = null;
  });
  return {
    c() {
      r = Ve("div"), e = Ve("ul");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
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
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(e, null);
      t[17](r), i = !0, s || (a = [
        We(
          Jf,
          "click",
          /*onWindowClick*/
          t[12]
        ),
        We(
          Jf,
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
          const m = qf(f, l, h);
          c[h] ? (c[h].p(m, _), W(c[h], 1)) : (c[h] = Yf(m), c[h].c(), W(c[h], 1), c[h].m(e, null));
        }
        for (_r(), h = l.length; h < c.length; h += 1)
          u(h);
        pr();
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
          W(c[_]);
        f && to(() => {
          i && (o || (o = za(r, Bf, { y: 20 }, !0)), o.run(1));
        }), i = !0;
      }
    },
    o(f) {
      c = c.filter(Boolean);
      for (let _ = 0; _ < c.length; _ += 1)
        $(c[_]);
      f && (o || (o = za(r, Bf, { y: 20 }, !1)), o.run(0)), i = !1;
    },
    d(f) {
      f && J(r), nn(c, f), t[17](null), f && o && o.end(), s = !1, Rr(a);
    }
  };
}
function S3(t, r, e) {
  let n, o, { ownerNode: i } = r, { items: s } = r, { parentComponentContext: a } = r;
  const l = Tr(Xr), c = l.getCustomization("menuPopupClass") || "", u = l.getCustomization("menuItemClass") || "", f = l.isDesktop;
  bn(t, f, (C) => e(8, o = C));
  const _ = Date.now(), h = F_();
  let m, p = !1, k = "", w = "", z = "", H = "", L = null;
  function Q() {
    if (!m || !i)
      return;
    const C = m.parentElement;
    if (!C)
      return;
    const M = i.getBoundingClientRect(), N = m.getBoundingClientRect(), U = C.getBoundingClientRect(), se = window.innerWidth, fe = window.innerHeight;
    let Ce = 0, Ee = 0, de = N.width, Ie = N.height;
    Ce = M.left - U.left, Ee = M.bottom - U.top, Ce + de > se && (Ce = se - de), Ce < 0 && (Ce = 0), Ee + Ie > fe && (M.top - U.top - Ie > 0 ? Ee = M.top - U.top - Ie : Ee = fe - Ie), Ee < 0 && (Ee = 0), e(3, k = `${Ce}px`), e(4, w = `${Ee}px`), e(5, z = ""), e(6, H = ""), e(16, p = !0), typeof ResizeObserver < "u" && !L && (L = new ResizeObserver(() => {
      requestAnimationFrame(Q);
    }), L.observe(m));
  }
  function ce(C) {
    Date.now() - _ < 100 || C.composedPath().includes(m) || h("close");
  }
  function T() {
    Q();
  }
  function X() {
    return h("close"), !0;
  }
  ro(() => {
    if (l.tooltipRoot) {
      const C = window.getComputedStyle(m);
      e(2, m.style.fontSize = C.fontSize, m), e(2, m.style.fontFamily = C.fontFamily, m), e(2, m.style.lineHeight = C.lineHeight, m), l.tooltipRoot.appendChild(m);
    }
  }), sl(() => {
    p || Q();
  }), on(() => {
    L == null || L.disconnect();
  });
  function le(C) {
    Ir[C ? "unshift" : "push"](() => {
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
    z,
    H,
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
class V3 extends Or {
  constructor(r) {
    super(), zr(this, r, S3, A3, Vr, {
      ownerNode: 15,
      items: 0,
      parentComponentContext: 1
    });
  }
}
const { Map: F3 } = No;
function Kf(t, r, e) {
  const n = t.slice();
  return n[134] = r[e], n;
}
function Xf(t) {
  let r, e, n, o, i, s, a, l, c, u;
  e = new Uw({
    props: { svgFiltersMap: (
      /*svgFiltersMap*/
      t[5]
    ) }
  }), o = new Qn({
    props: {
      componentContext: (
        /*rootStateComponentContext*/
        t[6]
      )
    }
  });
  let f = (
    /*tooltips*/
    t[3] && Zf(t)
  ), _ = (
    /*menu*/
    t[4] && xf(t)
  );
  return {
    c() {
      r = Ve("div"), Ht(e.$$.fragment), n = cr(), Ht(o.$$.fragment), i = cr(), f && f.c(), s = cr(), _ && _.c(), g(r, "class", a = Cr.root + /*$isDesktop*/
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
      q(h, r, m), Rt(e, r, null), ht(r, n), Rt(o, r, null), ht(r, i), f && f.m(r, null), ht(r, s), _ && _.m(r, null), l = !0, c || (u = We(r, "touchstart", M3, { passive: !0 }), c = !0);
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
      8 && W(f, 1)) : (f = Zf(h), f.c(), W(f, 1), f.m(r, s)) : f && (_r(), $(f, 1, 1, () => {
        f = null;
      }), pr()), /*menu*/
      h[4] ? _ ? (_.p(h, m), m[0] & /*menu*/
      16 && W(_, 1)) : (_ = xf(h), _.c(), W(_, 1), _.m(r, null)) : _ && (_r(), $(_, 1, 1, () => {
        _ = null;
      }), pr()), (!l || m[0] & /*$isDesktop, mix*/
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
      l || (W(e.$$.fragment, h), W(o.$$.fragment, h), W(f), W(_), l = !0);
    },
    o(h) {
      $(e.$$.fragment, h), $(o.$$.fragment, h), $(f), $(_), l = !1;
    },
    d(h) {
      h && J(r), Bt(e), Bt(o), f && f.d(), _ && _.d(), c = !1, u();
    }
  };
}
function Zf(t) {
  let r = [], e = new F3(), n, o, i = ir(
    /*tooltips*/
    t[3]
  );
  const s = (a) => (
    /*item*/
    a[134].internalId
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = Kf(t, i, a), c = s(l);
    e.set(c, r[a] = Qf(c, l));
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
      q(a, n, l), o = !0;
    },
    p(a, l) {
      l[0] & /*tooltips, rootStateComponentContext*/
      72 && (i = ir(
        /*tooltips*/
        a[3]
      ), _r(), r = dd(r, l, s, 1, a, i, e, n.parentNode, fd, Qf, n, Kf), pr());
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
        $(r[l]);
      o = !1;
    },
    d(a) {
      a && J(n);
      for (let l = 0; l < r.length; l += 1)
        r[l].d(a);
    }
  };
}
function Qf(t, r) {
  let e, n, o;
  return n = new y3({
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
      e = xt(), Ht(n.$$.fragment), this.first = e;
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
      o || (W(n.$$.fragment, i), o = !0);
    },
    o(i) {
      $(n.$$.fragment, i), o = !1;
    },
    d(i) {
      i && J(e), Bt(n, i);
    }
  };
}
function xf(t) {
  let r, e;
  return r = new V3({
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
      Ht(r.$$.fragment);
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
      e || (W(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function I3(t) {
  let r, e, n = !/*hasError*/
  t[1] && !/*hasIdError*/
  t[2] && /*rootStateComponentContext*/
  t[6] && Xf(t);
  return {
    c() {
      n && n.c(), r = xt();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, i) {
      !/*hasError*/
      o[1] && !/*hasIdError*/
      o[2] && /*rootStateComponentContext*/
      o[6] ? n ? (n.p(o, i), i[0] & /*hasError, hasIdError, rootStateComponentContext*/
      70 && W(n, 1)) : (n = Xf(o), n.c(), W(n, 1), n.m(r.parentNode, r)) : n && (_r(), $(n, 1, 1, () => {
        n = null;
      }), pr());
    },
    i(o) {
      e || (W(n), e = !0);
    },
    o(o) {
      $(n), e = !1;
    },
    d(o) {
      o && J(r), n && n.d(o);
    }
  };
}
let Aa = Do(!0), vs = 0;
function $f() {
  Aa.set(!1);
}
function ed() {
  Aa.set(!0);
}
const D3 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean"]), T3 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean", "array", "dict"]);
function Wo(t, r) {
  if (t && r)
    return new Map([...t, ...r]);
  if (t)
    return t;
  if (r)
    return r;
}
function M3() {
}
function P3(t, r, e) {
  var pn, Qr, gn;
  let n, o, i, s, { id: a } = r, { json: l = {} } = r, { platform: c = "auto" } = r, { theme: u = "system" } = r, { globalVariablesController: f = void 0 } = r, { mix: _ = "" } = r, { customization: h = {} } = r, { builtinProtocols: m = ["http", "https", "tel", "mailto", "intent"] } = r, { extensions: p = /* @__PURE__ */ new Map() } = r, { onError: k = void 0 } = r, { onStat: w = void 0 } = r, { onSubmit: z = void 0 } = r, { onCustomAction: H = void 0 } = r, { onComponent: L = void 0 } = r, { typefaceProvider: Q = (y) => "" } = r, { fetchInit: ce = {} } = r, { tooltipRoot: T = void 0 } = r, { customComponents: X = void 0 } = r, { direction: le = "ltr" } = r, { store: C = void 0 } = r, { pagerChildrenClipEnabled: M = !0 } = r, { pagerMouseDragEnabled: N = !0 } = r, { weekStartDay: U = 0 } = r, { videoPlayerProvider: se = void 0 } = r, { devtoolCreateHierarchy: fe = "lazy" } = r, Ce = !0, Ee = Do(c === "desktop");
  if (bn(t, Ee, (y) => e(7, i = y)), c === "auto" && typeof matchMedia < "u") {
    const y = matchMedia("(any-pointer: coarse)");
    Ee.set(!y.matches), y.addListener(() => {
      Ee.set(!y.matches);
    });
  }
  let de = "light", Ie = null;
  const ee = Do(le === "rtl" ? "rtl" : "ltr");
  bn(t, ee, (y) => e(8, s = y));
  function De() {
    u !== "system" || !Ie || e(41, de = Ie.matches ? "dark" : "light");
  }
  function qe(y) {
    e(12, u = y);
  }
  function Ke() {
    return /* @__PURE__ */ new Map();
  }
  function ke() {
    return /* @__PURE__ */ new Map();
  }
  function rt(y) {
    e(11, l = y);
  }
  function ye(y) {
    return Me(y, I);
  }
  const Ae = new Set(m);
  let _e = !1, x = !1;
  a || (x = !0, I(Y(new Error('"id" prop is required'))));
  const ue = { stateChange: !1 }, ie = f || new l_(), Fe = ie.getLastAddedVariableStore(), xe = ie.getVariables(), Xe = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), Ye = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map();
  let st = null;
  const lt = /* @__PURE__ */ new Map();
  let at = 0, wt = [];
  const nt = /* @__PURE__ */ new Set();
  let zt;
  const ut = [];
  function pe(y) {
    return h == null ? void 0 : h[y];
  }
  function ge(y, E, { additionalVars: S, keepComplex: oe = !1, customFunctions: R, emptyVarsError: Ze, maxDepth: Se } = {}) {
    var Qt;
    if (!E)
      return $o(E);
    const qt = Wo(ne, S), Vt = Rf(E, y, C, U, Se);
    if (!Vt.vars.length)
      if (Vt.hasExpression) {
        const Et = Vt.applyVars(qt, R);
        if (!((Qt = Et.usedVars) != null && Qt.size))
          return Ze && Ze(), $o(Et.result);
      } else
        return Ze && Ze(), $o(E);
    const ze = Vt.vars.map((Et) => qt.get(Et) || bt(Et)).filter(Oo);
    return Do(void 0, (Et) => {
      const Sr = /* @__PURE__ */ new Map();
      let jr;
      const Gr = () => {
        var wn;
        const xr = Vt.applyVars(qt, R, oe);
        for (const [hn, jn] of Sr)
          (wn = xr.usedVars) != null && wn.has(hn) || (jn(), Sr.delete(hn));
        if (xr.usedVars) {
          for (const hn of xr.usedVars)
            if (!Sr.has(hn)) {
              let jn = !0;
              Sr.set(hn, hn.subscribe(() => {
                jn || Et(Gr()), jn = !1;
              }));
            }
        }
        return xr.result;
      };
      return jr = Ui(ze, Gr).subscribe((xr) => {
        Et(xr);
      }), () => {
        jr == null || jr();
        for (const [xr, wn] of Sr)
          wn();
      };
    });
  }
  function _t(y, E, S, oe = !1, R = void 0) {
    const Ze = Rf(E, y, C, U);
    if (!Ze.hasExpression)
      return E;
    const Se = Wo(ne, S);
    return Ze.applyVars(Se, R, oe).result;
  }
  function je(y, E, S) {
    const oe = /* @__PURE__ */ new Map(), R = Es(y, "dict", E);
    oe.set(y, R);
    const Ze = Es("index", "integer", S);
    return oe.set("index", Ze), oe;
  }
  function I(y) {
    k ? k({ error: y }) : (y == null ? void 0 : y.level) === "warn" ? console.warn(y) : console.error(y);
  }
  function vt(y, E) {
    w && w({ type: y, action: E });
  }
  function ft(y) {
    return y in n;
  }
  function St(y, E) {
    if (!y)
      return { json: y, templateContext: E };
    const S = /* @__PURE__ */ new Set([y.type]);
    for (; y.type && y.type in n; ) {
      if ({ json: y, templateContext: E } = Gw(y, E, n, I), S.has(y.type))
        return { json: y, templateContext: E };
      S.add(y.type);
    }
    return { json: y, templateContext: E };
  }
  let Tt = 0;
  function et(y) {
    return `${a}-${Tt++}`;
  }
  function K(y) {
    return `divkit-${et()}`;
  }
  let At = {}, Mt = {};
  function Zt(y, E) {
    const S = `${y}:${E}`;
    if (Mt[S] = Mt[S] || 0, ++Mt[S], At[S])
      return At[S];
    const oe = `${et()}-svg-filter`;
    return e(5, At = { ...At, [S]: oe }), oe;
  }
  function Jt(y, E) {
    if (!y)
      return;
    const S = `${y}:${E}`;
    Mt[S] && --Mt[S] === 0 && e(5, At = Object.keys(At).reduce(
      (oe, R) => (Mt[R] && (oe[R] = At[R]), oe),
      {}
    ));
  }
  const he = et() + "-id-", Be = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map();
  function be(y) {
    return he + y;
  }
  function Qe(y, E) {
    let S = Be.get(y) || [];
    return Be.has(y) || Be.set(y, S), S.push(E), () => {
      S = S.filter((R) => R !== E), S.length || Be.delete(y);
      const oe = be(y);
      pt.has(oe) && pt.delete(oe);
    };
  }
  function Oe(y) {
    var S, oe;
    const E = (oe = (S = Be.get(y)) == null ? void 0 : S[0]) == null ? void 0 : oe.node();
    if (E) {
      const R = be(y), Ze = pt.get(R);
      return Ze && Ze !== E && Ze.removeAttribute("id"), E.setAttribute("id", R), pt.set(R, E), R;
    }
    return "";
  }
  async function tr(y, E) {
    var Se, qt;
    if (!y)
      throw new Error("Missing state id");
    let S = y.split("/");
    const oe = S.length % 2 === 0 && X2(E);
    let R = oe || qr;
    const Ze = (E == null ? void 0 : E.logError) || I;
    if (!oe)
      if ((Se = R.states) != null && Se.root) {
        const Vt = R.states.root;
        if (Vt.length > 1) {
          Ze(Y(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: y } }));
          return;
        }
        if (R = await Vt[0](S[0]), !R)
          return;
        S = S.slice(1);
      } else
        return;
    for (let Vt = 0; Vt < S.length; Vt += 2) {
      const ze = S[Vt], Qt = S[Vt + 1];
      if ((qt = R.states) != null && qt[ze]) {
        const Et = R.states[ze];
        if (Et.length > 1) {
          Ze(Y(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: y } }));
          return;
        }
        if (R = await Et[0](Qt), !R)
          return;
      } else
        return;
    }
  }
  async function Ne(y, E, S) {
    var Sr;
    const oe = (y == null ? void 0 : y.logError) || I;
    if (!e3(E)) {
      oe(Y(new Error("Incorrect submit action"), {
        additional: { containerId: E.container_id }
      }));
      return;
    }
    const R = Be.get(E.container_id);
    if ((R == null ? void 0 : R.length) !== 1) {
      oe(Y(new Error("Error resolving container. Found multiple elements that respond to id"), {
        additional: { containerId: E.container_id }
      }));
      return;
    }
    const Ze = R[0].context(), Se = {};
    if (Ze.variables)
      for (const [jr, Gr] of Ze.variables) {
        const xr = Gr.getValue();
        typeof xr == "bigint" ? Se[jr] = Number(xr) : Se[jr] = xr;
      }
    if (z) {
      Promise.resolve().then(() => z(E, Se)).then(() => {
        Nt(S.on_success_actions, { componentContext: y });
      }).catch(() => {
        Nt(S.on_fail_actions, { componentContext: y });
      });
      return;
    }
    const qt = Object.keys(Se).length > 0, Vt = (E.request.method || "post").toLowerCase();
    if ((Vt === "get" || Vt === "head") && qt) {
      oe(Y(new Error("Can't send variables using the get/head method."), { additional: { url: E.request.url } }));
      return;
    }
    let ze = !1;
    const Qt = [];
    (Sr = E.request.headers) == null || Sr.forEach((jr) => {
      Qt.push([jr.name, jr.value]), jr.name.toLowerCase() === "content-type" && (ze = !0);
    }), ze || Qt.push(["Content-Type", "application/json"]);
    let Et;
    typeof ce == "function" ? Et = ce(E.request.url) : Et = ce, fetch(E.request.url, {
      ...Et,
      method: Vt,
      headers: Qt,
      body: qt ? JSON.stringify(Se) : void 0
    }).then((jr) => {
      if (!jr.ok)
        throw new Error("Response is not ok");
      Nt(S.on_success_actions, { componentContext: y });
    }).catch((jr) => {
      oe(Y(new Error("Failed to submit"), {
        additional: {
          url: E.request.url,
          originalError: jr
        }
      })), Nt(S.on_fail_actions, { componentContext: y });
    });
  }
  function yt(y, E) {
    var R, Ze, Se, qt, Vt, ze, Qt, Et, Sr;
    const S = (y == null ? void 0 : y.logError) || I, oe = E.id && tt(E.id);
    if (!oe) {
      S(Y(new Error('Missing component for "scroll_to" action'), { additional: { id: E.id } }));
      return;
    }
    if (E.animated !== void 0 && typeof E.animated != "boolean") {
      S(Y(new Error('Missing properties for "scroll_to" action'), { additional: { id: E.id } }));
      return;
    }
    switch ((R = E.destination) == null ? void 0 : R.type) {
      case "index": {
        typeof E.destination.value == "number" && oe.setCurrentItem(E.destination.value, (Ze = E.animated) != null ? Ze : !0);
        break;
      }
      case "offset": {
        typeof E.destination.value == "number" && ((qt = oe.scrollToPosition) == null || qt.call(oe, E.destination.value, (Se = E.animated) != null ? Se : !0));
        break;
      }
      case "start": {
        (ze = oe.scrollToStart) == null || ze.call(oe, (Vt = E.animated) != null ? Vt : !0);
        break;
      }
      case "end": {
        (Et = oe.scrollToEnd) == null || Et.call(oe, (Qt = E.animated) != null ? Qt : !0);
        break;
      }
      default:
        S(Y(new Error('Unknown destination for "scroll_to" action'), {
          additional: {
            id: E.id,
            destination: (Sr = E.destination) == null ? void 0 : Sr.type
          }
        }));
    }
  }
  function Ft(y, E) {
    var R;
    const S = (y == null ? void 0 : y.logError) || I, oe = E.id && tt(E.id);
    if (!oe) {
      S(Y(new Error('Missing component for "scroll_by" action'), { additional: { id: E.id } }));
      return;
    }
    if (typeof E.item_count != "number" && E.item_count !== void 0 || typeof E.offset != "number" && E.offset !== void 0 || E.overflow !== void 0 && E.overflow !== "clamp" && E.overflow !== "ring" || E.animated !== void 0 && typeof E.animated != "boolean") {
      S(Y(new Error('Missing properties for "scroll_by" action'), { additional: { id: E.id } }));
      return;
    }
    (R = oe.scrollCombined) == null || R.call(oe, {
      step: E.item_count,
      offset: E.offset,
      overflow: E.overflow,
      animated: E.animated
    });
  }
  function It(y, E, { item: S, step: oe, overflow: R, animated: Ze }) {
    var Qt, Et, Sr, jr, Gr;
    if (!E)
      throw new Error(`Missing id for "${y}" action`);
    const Se = Number(S);
    if (y === "set_current_item" && Number.isNaN(Se))
      throw new Error(`Incorrect item for "${y}" action`);
    let qt = Number(oe);
    if (!oe && (y === "set_previous_item" || y === "set_next_item") && (qt = 1), !oe && (y === "scroll_backward" || y === "scroll_forward" || y === "scroll_to_position") || Number.isNaN(qt))
      throw new Error(`Incorrect step value for "${y}" action`);
    if (R && R !== "clamp" && R !== "ring")
      throw new Error(`Incorrect overflow value for "${y}" action`);
    R = R || "clamp";
    const Vt = Ze === null || Ze !== "0" && Ze !== "false", ze = tt(E);
    if (ze)
      switch (y) {
        case "set_current_item":
          ze.setCurrentItem(Se, Vt);
          return;
        case "set_previous_item":
          ze.setPreviousItem(qt, R, Vt);
          return;
        case "set_next_item":
          ze.setNextItem(qt, R, Vt);
          return;
        case "scroll_to_start":
          (Qt = ze.scrollToStart) == null || Qt.call(ze, Vt);
          return;
        case "scroll_to_end":
          (Et = ze.scrollToEnd) == null || Et.call(ze, Vt);
          return;
        case "scroll_backward":
          (Sr = ze.scrollCombined) == null || Sr.call(ze, {
            offset: -qt,
            overflow: R,
            animated: Vt
          });
          return;
        case "scroll_forward":
          (jr = ze.scrollCombined) == null || jr.call(ze, {
            offset: qt,
            overflow: R,
            animated: Vt
          });
          return;
        case "scroll_to_position":
          (Gr = ze.scrollToPosition) == null || Gr.call(ze, qt, Vt);
          return;
      }
  }
  function ur(y, E, S) {
    const oe = (S == null ? void 0 : S.logError) || I;
    if (y) {
      const R = tt(y);
      R ? E === "start" ? R.start() : E === "pause" ? R.pause() : oe(Y(new Error("Unknown video action"), { additional: { id: y, action: E } })) : oe(Y(new Error("Video component is not found"), { additional: { id: y, action: E } }));
    } else
      oe(Y(new Error("Missing id in video action"), { additional: { action: E } }));
  }
  function Me(y, E, S) {
    var oe, R, Ze;
    if (y.templates)
      for (const Se in y.templates)
        n.hasOwnProperty(Se) || (n[Se] = y.templates[Se]);
    if (Array.isArray((oe = y.patch) == null ? void 0 : oe.changes)) {
      if (y.patch.mode === "transactional") {
        const Se = y.patch.changes.find((qt) => {
          const Vt = wr.get(qt.id);
          if (!Vt)
            return !0;
          const ze = Array.isArray(qt.items) ? qt.items.length : 0;
          return !!(Vt.isSingleMode && ze !== 1);
        });
        if (Se)
          return E(Y(new Error("Skipping transactional, child is not found or broken"), { additional: { url: S, id: Se.id } })), Nt((R = y.patch) == null ? void 0 : R.on_failed_actions), !1;
      }
      return y.patch.changes.forEach((Se) => {
        const qt = wr.get(Se.id);
        qt && qt.replaceWith(Se.id, Se.items);
      }), Nt((Ze = y.patch) == null ? void 0 : Ze.on_applied_actions), !0;
    }
    return !1;
  }
  function kt(y, E, S) {
    const oe = (S == null ? void 0 : S.logError) || I;
    if (y) {
      let R;
      typeof ce == "function" ? R = ce(y) : R = ce, fetch(y, R).then((Ze) => {
        if (!Ze.ok)
          throw new Error("Response is not ok");
        return Ze.json();
      }).then((Ze) => {
        if (!Ze) {
          oe(Y(new Error("Incorrect patch"), { additional: { url: y } })), Nt(E == null ? void 0 : E.on_fail_actions, { componentContext: S });
          return;
        }
        Me(Ze, oe, y) ? Nt(E == null ? void 0 : E.on_success_actions, { componentContext: S }) : Nt(E == null ? void 0 : E.on_fail_actions, { componentContext: S });
      }).catch((Ze) => {
        oe(Y(new Error("Failed to download the patch"), { additional: { url: y, originalError: Ze } })), Nt(E == null ? void 0 : E.on_fail_actions, { componentContext: S });
      });
    } else
      oe(Y(new Error("Missing url in download action"), { additional: { url: y } }));
  }
  function or(y, E, S) {
    var qt;
    const oe = (S == null ? void 0 : S.logError) || I;
    if (!y) {
      oe(Y(new Error("Missing id in show_tooltip action")));
      return;
    }
    const R = hr.get(y);
    if (!R) {
      oe(Y(new Error("Tooltip with the provided id is not found"), { additional: { id: y } }));
      return;
    }
    if (E !== "true" && E !== !0 && nt.has(y))
      return;
    nt.add(y);
    const Ze = {
      internalId: ++at,
      ownerNode: R.onwerNode,
      desc: R.tooltip,
      timeoutId: 0,
      componentContext: S
    };
    e(3, wt = [...wt, Ze]);
    const Se = (qt = R.tooltip.duration) != null ? qt : 5e3;
    Se && (Ze.timeoutId = window.setTimeout(
      () => {
        Ze.timeoutId = 0, e(3, wt = wt.filter((Vt) => Vt.internalId !== Ze.internalId));
      },
      Se
    ));
  }
  function $t(y, E) {
    const S = (E == null ? void 0 : E.logError) || I;
    if (!y) {
      S(Y(new Error("Missing id in hide_tooltip action")));
      return;
    }
    e(3, wt = wt.filter((oe) => {
      const R = oe.desc.id !== y;
      return !R && oe.timeoutId && (clearTimeout(oe.timeoutId), oe.timeoutId = null), R;
    }));
  }
  function Kt(y, E, S, oe, R) {
    const Ze = (y == null ? void 0 : y.logError) || I;
    if (!C) {
      Ze(Y(new Error("Store is not configured")));
      return;
    }
    let Se = S;
    if (!E || !Se || !oe || !R) {
      Ze(Y(new Error("Missing required params for set_stored_value")));
      return;
    }
    if (!T3.has(oe)) {
      Ze(Y(new Error("Incorrect stored type")));
      return;
    }
    if (oe === "boolean" && (Se = Se === "true" || Se === "1"), C.set)
      C.set(E, oe, Se, Number(R));
    else if (C.setValue) {
      if (!D3.has(oe)) {
        Ze(Y(new Error("Incorrect stored type")));
        return;
      }
      if (typeof Se != "string" && typeof Se != "number" && typeof Se != "boolean") {
        Ze(Y(new Error("Incorrect stored value")));
        return;
      }
      (oe === "integer" || oe === "number") && (Se = Number(Se)), C.setValue(E, oe, Se, Number(R));
    }
  }
  function gr(y) {
    vr(_t(I, y, void 0, !0), y);
  }
  async function vr(y, E, S) {
    var qt, Vt;
    const oe = y.scope_id, R = (S == null ? void 0 : S.logError) || I;
    if (oe) {
      const ze = Fr.get(oe);
      if (ze && (ze == null ? void 0 : ze.size) > 1)
        R(Y(new Error(`Ambiguous scope id. There are ${ze.size} divs with id '${oe}'`), { additional: { count: ze.size, scopeId: oe } }));
      else if ((ze == null ? void 0 : ze.size) === 1) {
        const Qt = ze.values().next().value;
        Qt && (S = Qt);
      } else {
        R(Y(new Error("The scope with the specified scope_id is missing"), { additional: { scopeId: oe } }));
        return;
      }
    }
    const Ze = y.url ? String(y.url) : "", Se = y.typed;
    if (qs(y)) {
      if (Se)
        switch (Se.type) {
          case "set_variable": {
            const { variable_name: ze, value: Qt } = Se;
            if (ze && Qt) {
              const Et = (S == null ? void 0 : S.getVariable(ze)) || ne.get(ze);
              Et ? Et.getType() === Qt.type ? Et.setValue(Qt.value) : R(Y(new Error("Trying to set value with invalid type"), { additional: { name: ze, type: Qt.type } })) : R(Y(new Error("Cannot find variable"), { additional: { name: ze } }));
            } else
              R(Y(new Error("Incorrect set_variable action"), { additional: { name: ze } }));
            break;
          }
          case "array_insert_value":
            W2(S, ne, R, Se);
            break;
          case "array_remove_value":
            U2(S, ne, R, Se);
            break;
          case "array_set_value":
            G2(S, ne, R, Se);
            break;
          case "copy_to_clipboard":
            q2(R, Se);
            break;
          case "focus_element": {
            const ze = Se.element_id && Ar.get(Se.element_id);
            ze ? ze.focus() : R(Y(new Error("Incorrect focus_element action"), {
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
            J2(S, ne, R, Se);
            break;
          }
          case "animator_start": {
            const ze = Se.animator_id && (S == null ? void 0 : S.getAnimator(Se.animator_id));
            if (!ze) {
              R(Y(new Error("Missing animator"), {
                additional: { animator_id: Se.animator_id }
              }));
              return;
            }
            const { duration: Qt, start_delay: Et, interpolator: Sr, direction: jr, repeat_count: Gr, start_value: xr, end_value: wn } = Se, hn = S ? S.getJsonWithVars(ze) : _t(I, ze), jn = {
              ...hn,
              end_actions: ze.end_actions,
              cancel_actions: ze.cancel_actions,
              duration: Qt !== void 0 ? Qt : hn.duration,
              start_delay: Et !== void 0 ? Et : hn.start_delay,
              interpolator: Sr !== void 0 ? Sr : hn.interpolator,
              direction: jr !== void 0 ? jr : hn.direction,
              repeat_count: Gr !== void 0 ? Gr : hn.repeat_count,
              start_value_typed: xr,
              end_value_typed: wn
            }, xn = ze.variable_name && ((S == null ? void 0 : S.getVariable(ze.variable_name)) || ne.get(ze.variable_name));
            if (!xn)
              return;
            const Un = lt.get(ze.id);
            Un && Un.stop();
            const Gn = K2(
              jn,
              xn,
              () => {
                lt.delete(ze.id);
              },
              (Ut, b) => ((S == null ? void 0 : S.execAnyActions) || Nt)(Ut, b)
            );
            Gn && lt.set(ze.id, Gn);
            break;
          }
          case "animator_stop": {
            const ze = lt.get(Se.animator_id);
            ze && (ze.stop(), lt.delete(Se.animator_id));
            break;
          }
          case "show_tooltip": {
            or(Se.id, Se.multiple, S);
            break;
          }
          case "hide_tooltip": {
            $t(Se.id, S);
            break;
          }
          case "timer": {
            st ? st.execTimerAction(Se.id, Se.action) : R(Y(new Error("Incorrect timer action"), {
              additional: {
                id: Se.id,
                action: Se.action
              }
            }));
            break;
          }
          case "download": {
            kt(Se.url, E.typed, S);
            break;
          }
          case "video": {
            ur(Se.id, Se.action, S);
            break;
          }
          case "set_stored_value": {
            Kt(S, Se.name, (qt = Se.value) == null ? void 0 : qt.value, (Vt = Se.value) == null ? void 0 : Vt.type, Se.lifetime);
            break;
          }
          case "set_state": {
            await tr(Se.state_id, S);
            break;
          }
          case "submit": {
            await Ne(S, Se, E.typed);
            break;
          }
          case "scroll_to": {
            yt(S, Se);
            break;
          }
          case "scroll_by": {
            Ft(S, Se);
            break;
          }
          case "update_structure": {
            t3(S, ne, R, Se);
            break;
          }
          case "custom": {
            yr({
              ...E,
              // todo remove in major release
              url: ""
            });
            break;
          }
          default:
            R(Y(new Error("Unknown type of action"), { additional: { type: Se.type } }));
        }
      else if (Ze)
        try {
          const ze = Ze.replace(/div-action:\/\//, ""), Qt = /([^?]+)\?(.+)/.exec(ze);
          if (!Qt)
            return;
          const Et = new URLSearchParams(Qt[2]);
          switch (Qt[1]) {
            case "set_state":
              await tr(Et.get("state_id"), S);
              break;
            case "set_current_item":
            case "set_previous_item":
            case "set_next_item":
            case "scroll_to_start":
            case "scroll_to_end":
            case "scroll_backward":
            case "scroll_forward":
            case "scroll_to_position":
              It(Qt[1], Et.get("id"), {
                item: Et.get("item"),
                step: Et.get("step"),
                overflow: Et.get("overflow"),
                animated: Et.get("animated")
              });
              break;
            case "set_variable":
              const Sr = Et.get("name"), jr = Et.get("value");
              if (Sr && jr !== null) {
                const wn = (S == null ? void 0 : S.getVariable(Sr)) || ne.get(Sr);
                wn ? wn.set(jr) : R(Y(new Error("Cannot find variable"), { additional: { name: Sr } }));
              } else
                R(Y(new Error("Incorrect set_variable_action"), { additional: { url: ze } }));
              break;
            case "timer":
              const Gr = Et.get("action"), xr = Et.get("id");
              st ? st.execTimerAction(xr, Gr) : R(Y(new Error("Incorrect timer action"), {
                additional: { id: xr, action: Gr }
              }));
              break;
            case "video":
              ur(Et.get("id"), Et.get("action"), S);
              break;
            case "download":
              kt(Et.get("url"), E.download_callbacks, S);
              break;
            case "show_tooltip":
              or(Et.get("id"), Et.get("multiple"), S);
              break;
            case "hide_tooltip":
              $t(Et.get("id"), S);
              break;
            case "set_stored_value": {
              Kt(S, Et.get("name"), Et.get("value"), Et.get("type"), Et.get("lifetime"));
              break;
            }
            default:
              R(Y(new Error("Unknown type of action"), { additional: { url: Ze } }));
          }
        } catch (ze) {
          R(Y(ze, { additional: { url: Ze } }));
        }
    }
  }
  async function Nt(y, E = {}) {
    var R;
    if (!y || !Array.isArray(y))
      return;
    const S = ((R = E.componentContext) == null ? void 0 : R.logError) || I, oe = (Ze) => E.componentContext ? E.componentContext.getJsonWithVars(Ze, E.additionalVars, !0) : _t(S, Ze, E.additionalVars, !0);
    for (let Ze = 0; Ze < y.length; ++Ze) {
      let Se = oe(y[Ze]);
      const qt = Se.is_enabled;
      if (qt === 0 || qt === !1)
        continue;
      const Vt = Se.url;
      if (Se.typed)
        await vr(Se, y[Ze], E.componentContext);
      else if (Vt) {
        const Qt = Ol(Vt);
        if (Qt)
          if (Ll(Qt, Ae)) {
            if (E.processUrls)
              if (Se.target === "_blank") {
                const Et = window.open("", "_blank");
                Et && (Et.opener = null, Et.location = Vt);
              } else
                location.href = Vt;
          } else Qt === "div-action" ? (await vr(Se, y[Ze], E.componentContext), await Vn()) : Se.log_id && (yr(Se), await Vn());
      } else E.node && Array.isArray(Se.menu_items) && Se.menu_items.length && e(4, zt = {
        items: Se.menu_items,
        node: E.node,
        componentContext: E.componentContext
      });
    }
    y.forEach((Ze) => {
      Ze.log_id && vt(E.logType || "click", Ze);
    });
  }
  function yr(y) {
    H == null || H(y);
  }
  function G(y, E) {
    const S = (y == null ? void 0 : y.logError) || I;
    if (!Array.isArray(E) || !E.length)
      return;
    const oe = [];
    return E.forEach((R) => {
      let Ze = !1;
      if (typeof R.condition != "string") {
        S(Y(new Error("variable_trigger has a condition that is not a string"), {
          additional: { condition: R.condition }
        }));
        return;
      }
      if (!Array.isArray(R.actions)) {
        S(Y(new Error("variable_trigger has no actions"), {
          additional: { condition: R.condition }
        }));
        return;
      }
      const Se = R.mode || "on_condition";
      if (Se !== "on_variable" && Se !== "on_condition") {
        S(Y(new Error("variable_trigger has an unsupported mode"), { additional: { mode: Se } }));
        return;
      }
      const Vt = ge(S, { condition: R.condition }, {
        additionalVars: y == null ? void 0 : y.variables,
        customFunctions: y == null ? void 0 : y.customFunctions,
        emptyVarsError: () => {
          S(Y(new Error("variable_trigger must have variables in the condition"), {
            additional: { condition: R.condition }
          }));
        }
      }).subscribe(async (ze) => {
        ze.condition !== void 0 && (// if condition is truthy
        ze.condition && // and trigger mode matches
        (Se === "on_variable" || Se === "on_condition" && Ze === !1) ? (Ze = !!ze.condition, y ? await y.execAnyActions(R.actions, { logType: "trigger" }) : await Nt(R.actions, { logType: "trigger" })) : Ze = !!ze.condition);
      });
      oe.push(Vt);
    }), () => {
      oe.forEach((R) => {
        R();
      });
    };
  }
  function dt(y) {
    return ue[y];
  }
  function Gt(y, E) {
    ue[y] = E;
  }
  const jt = /* @__PURE__ */ new Map(), wr = /* @__PURE__ */ new Map(), Ar = /* @__PURE__ */ new Map(), hr = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Map();
  function Wr(y, E, S = "error") {
    if (jt.has(y)) {
      I(Y(new Error("Duplicate instance id"), {
        level: S,
        additional: { id: y }
      }));
      return;
    }
    jt.set(y, E);
  }
  function rr(y) {
    jt.delete(y);
  }
  function tt(y) {
    if (!jt.has(y)) {
      I(Y(new Error("Missing instance with id"), { additional: { id: y } }));
      return;
    }
    return jt.get(y);
  }
  function Ct(y, E) {
    wr.set(y, E);
  }
  function Xt(y) {
    wr.delete(y);
  }
  function Yt(y, E) {
    Ar.set(y, E);
  }
  function fr(y) {
    Ar.delete(y);
  }
  function ct(y, E) {
    const S = E.id;
    S && (hr.has(S) && I(Y(new Error("Duplicate tooltip id"), { additional: { id: S } })), hr.set(S, { onwerNode: y, tooltip: E }));
  }
  function te(y) {
    const E = y.id;
    E && (hr.delete(E), wt.some((S) => S.desc.id === E) && e(3, wt = wt.filter((S) => S.desc.id !== E)));
  }
  function bt(y) {
    const E = Ye.get(y) || Do(void 0);
    return Ye.has(y) || Ye.set(y, E), E;
  }
  function nr(y, E, S) {
    const oe = Le.get(y);
    if (oe)
      return oe;
    const R = io(y, E, S);
    return Le.set(y, R), R;
  }
  function mr() {
    if (!Je)
      return;
    Je[de].forEach((E) => {
      const S = ne.get(E.name);
      S && S.setValue(E.color);
    });
  }
  function sr() {
    return Ae;
  }
  function v(y, E) {
    const S = p.get(y);
    if (S)
      return new S(E || {});
  }
  function re(y) {
    return {
      variables: Wo(ne, y.variables),
      derviedExpression(E) {
        return y.getDerivedFromVars(E);
      },
      processExpressions(E) {
        return y.getJsonWithVars(E);
      },
      execAction: gr,
      logError: I,
      getComponentProperty(E) {
        return y.getJsonWithVars(y.json[E]);
      },
      direction: le
    };
  }
  function d(y, E) {
    const S = /* @__PURE__ */ new Map(), oe = (E == null ? void 0 : E.logError) || I;
    return y.forEach((R) => {
      if (S) {
        try {
          M2(R);
        } catch (qt) {
          oe(Y(qt));
          return;
        }
        const Ze = R, Se = S.get(Ze.name) || [];
        Se.push(P2(Ze)), S.set(Ze.name, Se);
      }
    }), S;
  }
  function j(y) {
    const E = {
      id: "",
      json: {},
      path: [],
      templateContext: {},
      logError(S) {
        S.additional = S.additional || {}, S.additional.path = E.path.join("/"), I(S);
      },
      execAnyActions(S, oe = {}) {
        return Nt(S, {
          componentContext: E,
          processUrls: oe.processUrls,
          node: oe.node,
          logType: oe.logType,
          additionalVars: oe.additionalVars
        });
      },
      getDerivedFromVars(S, oe, R = !1, Ze = 1 / 0) {
        return ge(E.logError, S, {
          additionalVars: Wo(E.variables, oe),
          keepComplex: R,
          customFunctions: E.customFunctions,
          maxDepth: Ze
        });
      },
      getJsonWithVars(S, oe, R = !1) {
        return _t(E.logError, S, Wo(E.variables, oe), R, E.customFunctions);
      },
      evalExpression(S, oe, R) {
        return Ca(Wo(ne, E.variables), E.customFunctions, S, oe, R);
      },
      produceChildContext(S, oe = {}) {
        const R = j(this);
        let Ze = S, Se = this.templateContext;
        const { templateContext: qt, json: Vt } = St(Ze, Se);
        if (R.json = Vt, R.templateContext = qt, R.origJson = S, R.id = oe.id || Vt.id || "", R.id) {
          let Et = Fr.get(R.id);
          Et || (Et = /* @__PURE__ */ new Set(), Fr.set(R.id, Et)), Et.add(R);
        }
        oe.key && (R.key = oe.key), oe.path !== void 0 && R.path.push(String(oe.path)), S.type && !oe.isRootState && R.path.push(S.type), oe.isTooltipRoot && (R.isTooltipRoot = !0);
        let ze;
        Array.isArray(Vt.variables) ? (ze = Wo(this.variables, Wo(oe.variables, /* @__PURE__ */ new Map())), Vt.variables.forEach((Et) => {
          const Sr = Dt(Et, R, ze);
          Sr && ze && ze.set(Sr.getName(), Sr);
        })) : oe.variables ? ze = Wo(this.variables, oe.variables) : this.variables && (ze = this.variables), R.variables = ze;
        let Qt;
        return Array.isArray(Vt.functions) && (Qt = d(Vt.functions, this)), R.customFunctions = N2(this.customFunctions, Qt), Array.isArray(Vt.animators) && (R.animators = Vt.animators.reduce(
          (Et, Sr) => (Sr.id && (Et[Sr.id] = Sr), Et),
          {}
        )), oe.fake && (R.fakeElement = oe.fake), oe.isRootState && (R.isRootState = !0), R;
      },
      dup(S) {
        return { ...E, fakeElement: S };
      },
      getVariable(S, oe) {
        var Ze;
        const R = ((Ze = E.variables) == null ? void 0 : Ze.get(S)) || ne.get(S);
        if (R) {
          const Se = R.getType();
          if (oe && Se !== oe) {
            E.logError(Y(new Error(`Variable should have type "${oe}"`), { additional: { name: S, foundType: Se } }));
            return;
          }
        }
        return R;
      },
      getAnimator(S) {
        var oe, R;
        return ((oe = E.animators) == null ? void 0 : oe[S]) || ((R = E.parent) == null ? void 0 : R.getAnimator(S)) || void 0;
      },
      registerState(S, oe) {
        const R = Z2(E.parent);
        return R && (R.states = R.states || {}, R.states[S] = R.states[S] || [], R.states[S].push(oe)), () => {
          var Ze;
          (Ze = R == null ? void 0 : R.states) != null && Ze[S] && (R.states[S] = R.states[S].filter((Se) => Se !== oe), R.states[S].length || delete R.states[S]);
        };
      },
      registerPager(S) {
        const oe = E.parent;
        return oe ? (oe.pagers = oe.pagers || /* @__PURE__ */ new Map(), oe.pagers.has(S) ? {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          update() {
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          destroy() {
          }
        } : (oe.pagers.set(S, null), {
          update(R) {
            var Vt, ze;
            oe.pagers && oe.pagers.set(S, R);
            const Ze = S ? (Vt = oe.pagerListeners) == null ? void 0 : Vt.get(S) : void 0, Se = (ze = oe.pagerListeners) == null ? void 0 : ze.get(void 0);
            [...Ze || [], ...Se || []].forEach((Qt) => {
              Qt(R);
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
        var Vt, ze, Qt;
        let R = E.parent;
        for (; R && !(R.pagers && (S ? R.pagers.get(S) : (Vt = R.pagers) != null && Vt.size)); )
          R = R.parent;
        if (!R)
          return () => {
          };
        R.pagerListeners = E.pagerListeners || /* @__PURE__ */ new Map();
        const Ze = R.pagerListeners.get(S) || [];
        R.pagerListeners.has(S) || R.pagerListeners.set(S, Ze), Ze.push(oe);
        const Se = S || ((ze = R.pagers) == null ? void 0 : ze.keys().next().value) || void 0, qt = (Qt = R.pagers) == null ? void 0 : Qt.get(Se);
        return qt && oe(qt), () => {
          if (!R.pagerListeners)
            return;
          let Et = R.pagerListeners.get(Se);
          Et && (Et = Et.filter((Sr) => Sr !== oe) || [], Et.length ? R.pagerListeners.set(S, Et) : R.pagerListeners.delete(S));
        };
      },
      destroy() {
        const S = Fr.get(E.id);
        S && (S.delete(E), S.size || Fr.delete(E.id));
      }
    };
    return y ? (E.parent = y, E.path = y.path.slice(), y.fakeElement && (E.fakeElement = y.fakeElement)) : (E.json = { type: "root" }, E.isRootState = !0), E;
  }
  function Te(y) {
    Ce ? ut.push(y) : clearTimeout(y);
  }
  pi(Xr, {
    logStat: vt,
    hasTemplate: ft,
    genId: et,
    genClass: K,
    execCustomAction: yr,
    processVariableTriggers: G,
    isRunning: dt,
    setRunning: Gt,
    pagerChildrenClipEnabled: M,
    pagerMouseDragEnabled: N,
    registerInstance: Wr,
    unregisterInstance: rr,
    registerParentOf: Ct,
    unregisterParentOf: Xt,
    registerTooltip: ct,
    unregisterTooltip: te,
    onTooltipClose: Zr,
    tooltipRoot: T,
    registerFocusable: Yt,
    unregisterFocusable: fr,
    addSvgFilter: Zt,
    removeSvgFilter: Jt,
    registerId: Qe,
    getComponentId: Oe,
    preparePrototypeVariables: je,
    getCustomization: pe,
    getBuiltinProtocols: sr,
    getExtension: v,
    getExtensionContext: re,
    registerTimeout: Te,
    typefaceProvider: Q,
    isDesktop: Ee,
    isPointerFocus: Aa,
    customComponents: X,
    direction: ee,
    videoPlayerProvider: se,
    awaitGlobalVariable: nr,
    componentDevtool: void 0,
    devtoolCreateHierarchy: "lazy"
  }), pi(To, {
    hasAction() {
      return !1;
    }
  }), pi(_a, {
    runVisibilityTransition(y, E, S, oe, R) {
      return Promise.resolve();
    },
    registerChildWithTransitionIn(y, E, S, oe) {
      return Promise.resolve();
    },
    registerChildWithTransitionOut(y, E, S, oe) {
      return Promise.resolve();
    },
    registerChildWithTransitionChange(y, E, S, oe) {
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
  }), pi(pa, { isEnabled: $o(!0) });
  function Re(y, E) {
    const S = ne.get(y);
    return (S == null ? void 0 : S.getType()) === E;
  }
  function Pt(y, E) {
    const S = ne.get(y);
    S ? S.setValue(E) : I(Y(new Error("Cannot find variable"), { additional: { name: y } }));
  }
  function O(y, E, S) {
    const oe = (E == null ? void 0 : E.logError) || I, R = y.name, Ze = y.value_type;
    if (typeof y.get != "string" || !y.get) {
      oe(Y(new Error("Incorrect property getter"), { additional: { name: R } }));
      return;
    }
    if (!R) {
      oe(Y(new Error("Missing property name")));
      return;
    }
    if (!Ze) {
      oe(Y(new Error("Missing property value_type")));
      return;
    }
    const Se = E ? E.getDerivedFromVars(y.get, void 0, !0) : ge(I, y.get, { keepComplex: !0 });
    if (Pl(Se) === void 0)
      return;
    const Vt = (ze) => {
      const Qt = Es(y.new_value_variable_name || "new_value", y.value_type, ze), Et = new Map(S);
      Et.set(Qt.getName(), Qt), Array.isArray(y.set) && y.set.length ? E ? E.execAnyActions(y.set, { additionalVars: Et }) : Nt(y.set, { additionalVars: Et }) : oe(Y(new Error("Cannot set property. No setters provided."), { additional: { name: R } }));
    };
    return {
      getName() {
        return R;
      },
      subscribe(ze) {
        return Se.subscribe(ze);
      },
      set(ze) {
        const Qt = _1(ze, Ze);
        Vt(Qt);
      },
      setValue: Vt,
      getValue() {
        return Pl(Se);
      },
      getType() {
        return Ze;
      }
    };
  }
  function Dt(y, E, S) {
    if (y.type === "property")
      return O(y, E, S);
    if (!y.type || !y.name || !(y.type in Jl) || !("value" in y))
      return;
    const oe = y.value;
    let R = E ? E.getJsonWithVars(oe, S, !0) : _t(I, oe, S, !0);
    if (!(oe && typeof oe == "string" && R === void 0)) {
      y.type === "integer" && typeof R == "number" && (R > Number.MAX_SAFE_INTEGER || R < Number.MIN_SAFE_INTEGER) && I(Y(new Error("The value of the integer variable could lose accuracy"), {
        level: "warn",
        additional: { name: y.name, value: R }
      }));
      try {
        return io(y.name, y.type, R);
      } catch (Ze) {
        I(Y(Ze, { additional: { name: y.name } }));
      }
    }
  }
  function ot(y) {
    const E = Dt(y);
    E && (Xe.set(y.name, E), ne.set(y.name, E));
  }
  for (const [y, E] of xe)
    ne.has(y) || ne.set(y, E);
  const Ge = (pn = l == null ? void 0 : l.card) == null ? void 0 : pn.variables;
  Array.isArray(Ge) && Ge.forEach((y) => {
    if (y && y.name) {
      if (Xe.has(y.name)) {
        I(Y(new Error("Duplicate variable"), { additional: { name: y.name } }));
        return;
      }
      ot(y);
    }
  });
  const Je = l.palette;
  Je && Je[de].forEach((E) => {
    if (Xe.has(E.name)) {
      I(Y(new Error("Duplicate variable"), { additional: { name: E.name } }));
      return;
    }
    try {
      const S = io(E.name, "color", E.color);
      Xe.set(E.name, S), ne.set(E.name, S);
    } catch (S) {
      I(Y(S, { additional: { name: E.name } }));
    }
  }), Fe.subscribe((y) => {
    if (y && !ne.has(y)) {
      const E = xe.get(y);
      ne.set(y, E);
      const S = Ye.get(y);
      if (S) {
        let R = 0;
        E.subscribe(() => {
          S.set(++R);
        });
      }
      const oe = Le.get(y);
      oe && oe.getType() === E.getType() && E.subscribe((R) => {
        oe.set(R);
      });
    }
  });
  const Wt = () => {
    var y;
    G(void 0, (y = l == null ? void 0 : l.card) == null ? void 0 : y.variable_triggers);
  }, br = (Qr = l == null ? void 0 : l.card) == null ? void 0 : Qr.timers;
  if (br && typeof document < "u") {
    const y = st = new H2({
      logError: I,
      applyVars: (E) => _t(I, E),
      hasVariableWithType: Re,
      setVariableValue: Pt,
      execAnyActions: Nt
    });
    br.forEach((E) => y.createTimer(E));
  }
  const qr = j();
  Array.isArray((gn = l.card) == null ? void 0 : gn.functions) && (qr.customFunctions = d(l.card.functions));
  let sn;
  function Zr(y) {
    e(3, wt = wt.filter((E) => E.internalId !== y));
  }
  ro(() => {
    vs++, vs === 1 && (window.addEventListener("keydown", $f), window.addEventListener("pointerdown", ed)), Vn().then(() => {
      Ce && Wt();
    });
  }), on(() => {
    Ce = !1, vs--, vs || (window.removeEventListener("keydown", $f), window.removeEventListener("pointerdown", ed));
    for (const [y, E] of lt)
      E.stop();
    st && st.destroy(), wt.forEach((y) => {
      y.timeoutId && (clearTimeout(y.timeoutId), y.timeoutId = null);
    }), ut.forEach((y) => {
      clearTimeout(y);
    });
  });
  const ve = () => e(4, zt = void 0);
  return t.$$set = (y) => {
    "id" in y && e(13, a = y.id), "json" in y && e(11, l = y.json), "platform" in y && e(14, c = y.platform), "theme" in y && e(12, u = y.theme), "globalVariablesController" in y && e(15, f = y.globalVariablesController), "mix" in y && e(0, _ = y.mix), "customization" in y && e(16, h = y.customization), "builtinProtocols" in y && e(17, m = y.builtinProtocols), "extensions" in y && e(18, p = y.extensions), "onError" in y && e(19, k = y.onError), "onStat" in y && e(20, w = y.onStat), "onSubmit" in y && e(21, z = y.onSubmit), "onCustomAction" in y && e(22, H = y.onCustomAction), "onComponent" in y && e(23, L = y.onComponent), "typefaceProvider" in y && e(24, Q = y.typefaceProvider), "fetchInit" in y && e(25, ce = y.fetchInit), "tooltipRoot" in y && e(26, T = y.tooltipRoot), "customComponents" in y && e(27, X = y.customComponents), "direction" in y && e(28, le = y.direction), "store" in y && e(29, C = y.store), "pagerChildrenClipEnabled" in y && e(30, M = y.pagerChildrenClipEnabled), "pagerMouseDragEnabled" in y && e(31, N = y.pagerMouseDragEnabled), "weekStartDay" in y && e(32, U = y.weekStartDay), "videoPlayerProvider" in y && e(33, se = y.videoPlayerProvider), "devtoolCreateHierarchy" in y && e(34, fe = y.devtoolCreateHierarchy);
  }, t.$$.update = () => {
    var y, E;
    if (t.$$.dirty[0] & /*theme*/
    4096 | t.$$.dirty[1] & /*themeQuery*/
    2048 && (u === "light" || u === "dark" ? e(41, de = u) : u === "system" ? typeof matchMedia < "u" ? (Ie || (e(42, Ie = matchMedia("(prefers-color-scheme: dark)")), Ie.addListener(De)), e(41, de = Ie.matches ? "dark" : "light")) : e(41, de = "light") : I(Y(new Error("Unsupported theme")))), t.$$.dirty[1] & /*currentTheme*/
    1024 && de && mr(), t.$$.dirty[0] & /*json*/
    2048) {
      e(1, _e = !1);
      const S = z2(l);
      S && (e(1, _e = !0), I(S));
    }
    if (t.$$.dirty[0] & /*json*/
    2048 && (n = l.templates || {}), t.$$.dirty[0] & /*json*/
    2048 && (y = l == null ? void 0 : l.card) != null && y.variables && Array.isArray(l.card.variables) && l.card.variables !== Ge && l.card.variables.forEach((S) => {
      S && S.name && !Xe.has(S.name) && !ne.has(S.name) && ot(S);
    }), t.$$.dirty[0] & /*json*/
    2048 && e(44, o = (E = l == null ? void 0 : l.card) == null ? void 0 : E.states), t.$$.dirty[0] & /*hasError, hasIdError*/
    6 | t.$$.dirty[1] & /*states, rootComponentContext*/
    12288 && o && !_e && !x) {
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
      e(6, sn = qr.produceChildContext(S, { isRootState: !0 }));
    }
  }, [
    _,
    _e,
    x,
    wt,
    zt,
    At,
    sn,
    i,
    s,
    Ee,
    ee,
    l,
    u,
    a,
    c,
    f,
    h,
    m,
    p,
    k,
    w,
    z,
    H,
    L,
    Q,
    ce,
    T,
    X,
    le,
    C,
    M,
    N,
    U,
    se,
    fe,
    qe,
    Ke,
    ke,
    rt,
    ye,
    gr,
    de,
    Ie,
    qr,
    o,
    ve
  ];
}
class N3 extends Or {
  constructor(r) {
    super(), zr(
      this,
      r,
      P3,
      I3,
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
const z3 = 8;
class B3 {
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
        if (++o > z3) {
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
const Ii = 8;
class H3 {
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
function O3(t) {
  return t instanceof HTMLElement;
}
function U3(t) {
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
      const o = Array.from(e.children).filter(O3);
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
          if (this.setSvgScale(a), this.animItem.addEventListener("data_failed", u), m && (c === "reverse" || l !== -1)) {
            let w = 1, z = 0;
            p.addEventListener("loopComplete", () => {
              ++z, l !== -1 && z === l + 1 ? (p.stop(), p.goToAndStop(p.totalFrames, !0)) : (c === "reverse" && (w *= -1, p.setDirection(w)), p.goToAndPlay(w === 1 ? 0 : p.totalFrames, !0));
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
function J3(t, r = {}) {
  return class {
    constructor() {
      Er(this, "prevDOM", null);
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
function q3(t) {
  const { target: r, hydrate: e, ...n } = t, o = new N3({
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
  H3 as Gesture,
  B3 as SizeProvider,
  R3 as createGlobalVariablesController,
  io as createVariable,
  U3 as lottieExtensionBuilder,
  J3 as markdownExtensionBuilder,
  q3 as render
};
//# sourceMappingURL=client.mjs.map

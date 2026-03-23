var A_ = Object.defineProperty;
var V_ = (t, r, e) => r in t ? A_(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var jr = (t, r, e) => V_(t, typeof r != "symbol" ? r + "" : r, e);
/*!
    DivKit v32.39.0
    https://github.com/divkit/divkit
    @licence Apache-2.0
*/
function E() {
}
const sl = (t) => t;
function Io(t, r) {
  for (const e in r) t[e] = r[e];
  return (
    /** @type {T & S} */
    t
  );
}
function ad(t) {
  return t();
}
function Ba() {
  return /* @__PURE__ */ Object.create(null);
}
function Kr(t) {
  t.forEach(ad);
}
function Lr(t) {
  return typeof t == "function";
}
function S_(t, r) {
  return t != t ? r == r : t !== r || t && typeof t == "object" || typeof t == "function";
}
let gs;
function eo(t, r) {
  return t === r ? !0 : (gs || (gs = document.createElement("a")), gs.href = r, t === gs.href);
}
function Fr(t, r) {
  return t != t ? r == r : t !== r;
}
function I_(t) {
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
function Hl(t) {
  let r;
  return V(t, (e) => r = e)(), r;
}
function Cn(t, r, e) {
  t.$$.on_destroy.push(V(r, e));
}
function ll(t, r, e, n) {
  if (t) {
    const o = cd(t, r, e, n);
    return t[0](o);
  }
}
function cd(t, r, e, n) {
  return t[1] && n ? Io(e.ctx.slice(), t[1](n(r))) : e.ctx;
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
function cl(t, r, e, n, o, i) {
  if (o) {
    const s = cd(r, e, n, i);
    t.p(s, o);
  }
}
function ul(t) {
  if (t.ctx.length > 32) {
    const r = [], e = t.ctx.length / 32;
    for (let n = 0; n < e; n++)
      r[n] = -1;
    return r;
  }
  return -1;
}
function Vl(t, r, e) {
  return t.set(e), r;
}
function fl(t) {
  return t && Lr(t.destroy) ? t.destroy : E;
}
function Oa(t) {
  const r = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return r ? [parseFloat(r[1]), r[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const ud = typeof window < "u";
let _a = ud ? () => window.performance.now() : () => Date.now(), ha = ud ? (t) => requestAnimationFrame(t) : E;
const Oi = /* @__PURE__ */ new Set();
function fd(t) {
  Oi.forEach((r) => {
    r.c(t) || (Oi.delete(r), r.f());
  }), Oi.size !== 0 && ha(fd);
}
function pa(t) {
  let r;
  return Oi.size === 0 && ha(fd), {
    promise: new Promise((e) => {
      Oi.add(r = { c: t, f: e });
    }),
    abort() {
      Oi.delete(r);
    }
  };
}
const Ro = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
let dl = !1;
function D_() {
  dl = !0;
}
function F_() {
  dl = !1;
}
function T_(t, r, e, n) {
  for (; t < r; ) {
    const o = t + (r - t >> 1);
    e(o) <= n ? t = o + 1 : r = o;
  }
  return t;
}
function M_(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let r = (
    /** @type {ArrayLike<NodeEx2>} */
    t.childNodes
  );
  if (t.nodeName === "HEAD") {
    const l = [];
    for (let c = 0; c < r.length; c++) {
      const u = r[c];
      u.claim_order !== void 0 && l.push(u);
    }
    r = l;
  }
  const e = new Int32Array(r.length + 1), n = new Int32Array(r.length);
  e[0] = -1;
  let o = 0;
  for (let l = 0; l < r.length; l++) {
    const c = r[l].claim_order, u = (o > 0 && r[e[o]].claim_order <= c ? o + 1 : T_(1, o, (_) => r[e[_]].claim_order, c)) - 1;
    n[l] = e[u] + 1;
    const f = u + 1;
    e[f] = l, o = Math.max(f, o);
  }
  const i = [], s = [];
  let a = r.length - 1;
  for (let l = e[o] + 1; l != 0; l = n[l - 1]) {
    for (i.push(r[l - 1]); a >= l; a--)
      s.push(r[a]);
    a--;
  }
  for (; a >= 0; a--)
    s.push(r[a]);
  i.reverse(), s.sort((l, c) => l.claim_order - c.claim_order);
  for (let l = 0, c = 0; l < s.length; l++) {
    for (; c < i.length && s[l].claim_order >= i[c].claim_order; )
      c++;
    const u = c < i.length ? i[c] : null;
    t.insertBefore(s[l], u);
  }
}
function P_(t, r) {
  t.appendChild(r);
}
function dd(t) {
  if (!t) return document;
  const r = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return r && /** @type {ShadowRoot} */
  r.host ? (
    /** @type {ShadowRoot} */
    r
  ) : t.ownerDocument;
}
function N_(t) {
  const r = Me("style");
  return r.textContent = "/* empty */", z_(dd(t), r), r.sheet;
}
function z_(t, r) {
  return P_(
    /** @type {Document} */
    t.head || t,
    r
  ), r.sheet;
}
function Et(t, r) {
  if (dl) {
    for (M_(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    r !== t.actual_end_child ? (r.claim_order !== void 0 || r.parentNode !== t) && t.insertBefore(r, t.actual_end_child) : t.actual_end_child = r.nextSibling;
  } else (r.parentNode !== t || r.nextSibling !== null) && t.appendChild(r);
}
function B_(t, r, e) {
  t.insertBefore(r, e || null);
}
function K(t, r, e) {
  dl && !e ? Et(t, r) : (r.parentNode !== t || r.nextSibling != e) && t.insertBefore(r, e || null);
}
function k(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function _n(t, r) {
  for (let e = 0; e < t.length; e += 1)
    t[e] && t[e].d(r);
}
function Me(t) {
  return document.createElement(t);
}
function Qr(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Gn(t) {
  return document.createTextNode(t);
}
function br() {
  return Gn(" ");
}
function He() {
  return Gn("");
}
function $e(t, r, e, n) {
  return t.addEventListener(r, e, n), () => t.removeEventListener(r, e, n);
}
function g(t, r, e) {
  e == null ? t.removeAttribute(r) : t.getAttribute(r) !== e && t.setAttribute(r, e);
}
const O_ = ["width", "height"];
function Zo(t, r) {
  const e = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in r)
    r[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = r[n] : n === "__value" ? t.value = t[n] = r[n] : e[n] && e[n].set && O_.indexOf(n) === -1 ? t[n] = r[n] : g(t, n, r[n]);
}
function L_(t, r) {
  Object.keys(r).forEach((e) => {
    R_(t, e, r[e]);
  });
}
function R_(t, r, e) {
  const n = r.toLowerCase();
  n in t ? t[n] = typeof t[n] == "boolean" && e === "" ? !0 : e : r in t ? t[r] = typeof t[r] == "boolean" && e === "" ? !0 : e : g(t, r, e);
}
function oi(t) {
  return /-/.test(t) ? L_ : Zo;
}
function Ee(t) {
  return Array.from(t.childNodes);
}
function _d(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function hd(t, r, e, n, o = !1) {
  _d(t);
  const i = (() => {
    for (let s = t.claim_info.last_index; s < t.length; s++) {
      const a = t[s];
      if (r(a)) {
        const l = e(a);
        return l === void 0 ? t.splice(s, 1) : t[s] = l, o || (t.claim_info.last_index = s), a;
      }
    }
    for (let s = t.claim_info.last_index - 1; s >= 0; s--) {
      const a = t[s];
      if (r(a)) {
        const l = e(a);
        return l === void 0 ? t.splice(s, 1) : t[s] = l, o ? l === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = s, a;
      }
    }
    return n();
  })();
  return i.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, i;
}
function pd(t, r, e, n) {
  return hd(
    t,
    /** @returns {node is Element | SVGElement} */
    (o) => o.nodeName === r,
    /** @param {Element} node */
    (o) => {
      const i = [];
      for (let s = 0; s < o.attributes.length; s++) {
        const a = o.attributes[s];
        e[a.name] || i.push(a.name);
      }
      i.forEach((s) => o.removeAttribute(s));
    },
    () => n(r)
  );
}
function Ne(t, r, e) {
  return pd(t, r, e, Me);
}
function nn(t, r, e) {
  return pd(t, r, e, Qr);
}
function to(t, r) {
  return hd(
    t,
    /** @returns {node is Text} */
    (e) => e.nodeType === 3,
    /** @param {Text} node */
    (e) => {
      const n = "" + r;
      if (e.data.startsWith(n)) {
        if (e.data.length !== n.length)
          return e.splitText(n.length);
      } else
        e.data = n;
    },
    () => Gn(r),
    !0
    // Text nodes should not update last index since it is likely not worth it to eliminate an increasing subsequence of actual elements
  );
}
function yr(t) {
  return to(t, " ");
}
function La(t, r, e) {
  for (let n = e; n < t.length; n += 1) {
    const o = t[n];
    if (o.nodeType === 8 && o.textContent.trim() === r)
      return n;
  }
  return -1;
}
function ga(t, r) {
  const e = La(t, "HTML_TAG_START", 0), n = La(t, "HTML_TAG_END", e + 1);
  if (e === -1 || n === -1)
    return new Li(r);
  _d(t);
  const o = t.splice(e, n - e + 1);
  k(o[0]), k(o[o.length - 1]);
  const i = o.slice(1, o.length - 1);
  if (i.length === 0)
    return new Li(r);
  for (const s of i)
    s.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1;
  return new Li(r, i);
}
function ao(t, r) {
  r = "" + r, t.data !== r && (t.data = /** @type {string} */
  r);
}
function Ra(t, r) {
  t.value = r == null ? "" : r;
}
function T(t, r, e, n) {
  e == null ? t.style.removeProperty(r) : t.style.setProperty(r, e, "");
}
function Ha(t, r, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const o = t.options[n];
    if (o.__value === r) {
      o.selected = !0;
      return;
    }
  }
  (!e || r !== void 0) && (t.selectedIndex = -1);
}
function H_(t) {
  const r = t.querySelector(":checked");
  return r && r.__value;
}
function gd(t, r, { bubbles: e = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: r, bubbles: e, cancelable: n });
}
class W_ {
  constructor(r = !1) {
    /**
     * @private
     * @default false
     */
    jr(this, "is_svg", !1);
    /** parent for creating node */
    jr(this, "e");
    /** html tag nodes */
    jr(this, "n");
    /** target */
    jr(this, "t");
    /** anchor */
    jr(this, "a");
    this.is_svg = r, this.e = this.n = null;
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  c(r) {
    this.h(r);
  }
  /**
   * @param {string} html
   * @param {HTMLElement | SVGElement} target
   * @param {HTMLElement | SVGElement} anchor
   * @returns {void}
   */
  m(r, e, n = null) {
    this.e || (this.is_svg ? this.e = Qr(
      /** @type {keyof SVGElementTagNameMap} */
      e.nodeName
    ) : this.e = Me(
      /** @type {keyof HTMLElementTagNameMap} */
      e.nodeType === 11 ? "TEMPLATE" : e.nodeName
    ), this.t = e.tagName !== "TEMPLATE" ? e : (
      /** @type {HTMLTemplateElement} */
      e.content
    ), this.c(r)), this.i(n);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  h(r) {
    this.e.innerHTML = r, this.n = Array.from(
      this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes
    );
  }
  /**
   * @returns {void} */
  i(r) {
    for (let e = 0; e < this.n.length; e += 1)
      B_(this.t, this.n[e], r);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  p(r) {
    this.d(), this.h(r), this.i(this.a);
  }
  /**
   * @returns {void} */
  d() {
    this.n.forEach(k);
  }
}
class Li extends W_ {
  constructor(e = !1, n) {
    super(e);
    /** @type {Element[]} hydration claimed nodes */
    jr(this, "l");
    this.e = this.n = null, this.l = n;
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  c(e) {
    this.l ? this.n = this.l : super.c(e);
  }
  /**
   * @returns {void} */
  i(e) {
    for (let n = 0; n < this.n.length; n += 1)
      K(this.t, this.n[n], e);
  }
}
function Wa(t, r) {
  return new t(r);
}
const qs = /* @__PURE__ */ new Map();
let Ks = 0;
function U_(t) {
  let r = 5381, e = t.length;
  for (; e--; ) r = (r << 5) - r ^ t.charCodeAt(e);
  return r >>> 0;
}
function G_(t, r) {
  const e = { stylesheet: N_(r), rules: {} };
  return qs.set(t, e), e;
}
function Ys(t, r, e, n, o, i, s, a = 0) {
  const l = 16.666 / n;
  let c = `{
`;
  for (let y = 0; y <= 1; y += l) {
    const w = r + (e - r) * i(y);
    c += y * 100 + `%{${s(w, 1 - w)}}
`;
  }
  const u = c + `100% {${s(e, 1 - e)}}
}`, f = `__svelte_${U_(u)}_${a}`, _ = dd(t), { stylesheet: p, rules: m } = qs.get(_) || G_(_, t);
  m[f] || (m[f] = !0, p.insertRule(`@keyframes ${f} ${u}`, p.cssRules.length));
  const h = t.style.animation || "";
  return t.style.animation = `${h ? `${h}, ` : ""}${f} ${n}ms linear ${o}ms 1 both`, Ks += 1, f;
}
function Xs(t, r) {
  const e = (t.style.animation || "").split(", "), n = e.filter(
    r ? (i) => i.indexOf(r) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), o = e.length - n.length;
  o && (t.style.animation = n.join(", "), Ks -= o, Ks || J_());
}
function J_() {
  ha(() => {
    Ks || (qs.forEach((t) => {
      const { ownerNode: r } = t.stylesheet;
      r && k(r);
    }), qs.clear());
  });
}
let cs;
function ls(t) {
  cs = t;
}
function Yi() {
  if (!cs) throw new Error("Function called outside component initialization");
  return cs;
}
function no(t) {
  Yi().$$.on_mount.push(t);
}
function _l(t) {
  Yi().$$.after_update.push(t);
}
function cn(t) {
  Yi().$$.on_destroy.push(t);
}
function q_() {
  const t = Yi();
  return (r, e, { cancelable: n = !1 } = {}) => {
    const o = t.$$.callbacks[r];
    if (o) {
      const i = gd(
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
function mi(t, r) {
  return Yi().$$.context.set(t, r), r;
}
function zr(t) {
  return Yi().$$.context.get(t);
}
function Wn(t, r) {
  const e = t.$$.callbacks[r.type];
  e && e.slice().forEach((n) => n.call(this, r));
}
const Ni = [], Pr = [];
let Ri = [];
const Ua = [], md = /* @__PURE__ */ Promise.resolve();
let Wl = !1;
function bd() {
  Wl || (Wl = !0, md.then(yd));
}
function Tn() {
  return bd(), md;
}
function bo(t) {
  Ri.push(t);
}
const Sl = /* @__PURE__ */ new Set();
let Ti = 0;
function yd() {
  if (Ti !== 0)
    return;
  const t = cs;
  do {
    try {
      for (; Ti < Ni.length; ) {
        const r = Ni[Ti];
        Ti++, ls(r), K_(r.$$);
      }
    } catch (r) {
      throw Ni.length = 0, Ti = 0, r;
    }
    for (ls(null), Ni.length = 0, Ti = 0; Pr.length; ) Pr.pop()();
    for (let r = 0; r < Ri.length; r += 1) {
      const e = Ri[r];
      Sl.has(e) || (Sl.add(e), e());
    }
    Ri.length = 0;
  } while (Ni.length);
  for (; Ua.length; )
    Ua.pop()();
  Wl = !1, Sl.clear(), ls(t);
}
function K_(t) {
  if (t.fragment !== null) {
    t.update(), Kr(t.before_update);
    const r = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, r), t.after_update.forEach(bo);
  }
}
function Y_(t) {
  const r = [], e = [];
  Ri.forEach((n) => t.indexOf(n) === -1 ? r.push(n) : e.push(n)), e.forEach((n) => n()), Ri = r;
}
let os;
function ma() {
  return os || (os = Promise.resolve(), os.then(() => {
    os = null;
  })), os;
}
function yi(t, r, e) {
  t.dispatchEvent(gd(`${r ? "intro" : "outro"}${e}`));
}
const Ss = /* @__PURE__ */ new Set();
let zo;
function dr() {
  zo = {
    r: 0,
    c: [],
    p: zo
    // parent group
  };
}
function _r() {
  zo.r || Kr(zo.c), zo = zo.p;
}
function U(t, r) {
  t && t.i && (Ss.delete(t), t.i(r));
}
function ne(t, r, e, n) {
  if (t && t.o) {
    if (Ss.has(t)) return;
    Ss.add(t), zo.c.push(() => {
      Ss.delete(t), n && (e && t.d(1), n());
    }), t.o(r);
  } else n && n();
}
const ba = { duration: 0 };
function hl(t, r, e) {
  const n = { direction: "in" };
  let o = r(t, e, n), i = !1, s, a, l = 0;
  function c() {
    s && Xs(t, s);
  }
  function u() {
    const {
      delay: _ = 0,
      duration: p = 300,
      easing: m = sl,
      tick: h = E,
      css: y
    } = o || ba;
    y && (s = Ys(t, 0, 1, p, _, m, y, l++)), h(0, 1);
    const w = _a() + _, D = w + p;
    a && a.abort(), i = !0, bo(() => yi(t, !0, "start")), a = pa((z) => {
      if (i) {
        if (z >= D)
          return h(1, 0), yi(t, !0, "end"), c(), i = !1;
        if (z >= w) {
          const B = m((z - w) / p);
          h(B, 1 - B);
        }
      }
      return i;
    });
  }
  let f = !1;
  return {
    start() {
      f || (f = !0, Xs(t), Lr(o) ? (o = o(n), ma().then(u)) : u());
    },
    invalidate() {
      f = !1;
    },
    end() {
      i && (c(), i = !1);
    }
  };
}
function wd(t, r, e) {
  const n = { direction: "out" };
  let o = r(t, e, n), i = !0, s;
  const a = zo;
  a.r += 1;
  let l;
  function c() {
    const {
      delay: u = 0,
      duration: f = 300,
      easing: _ = sl,
      tick: p = E,
      css: m
    } = o || ba;
    m && (s = Ys(t, 1, 0, f, u, _, m));
    const h = _a() + u, y = h + f;
    bo(() => yi(t, !1, "start")), "inert" in t && (l = /** @type {HTMLElement} */
    t.inert, t.inert = !0), pa((w) => {
      if (i) {
        if (w >= y)
          return p(0, 1), yi(t, !1, "end"), --a.r || Kr(a.c), !1;
        if (w >= h) {
          const D = _((w - h) / f);
          p(1 - D, D);
        }
      }
      return i;
    });
  }
  return Lr(o) ? ma().then(() => {
    o = o(n), c();
  }) : c(), {
    end(u) {
      u && "inert" in t && (t.inert = l), u && o.tick && o.tick(1, 0), i && (s && Xs(t, s), i = !1);
    }
  };
}
function Ga(t, r, e, n) {
  let i = r(t, e, { direction: "both" }), s = n ? 0 : 1, a = null, l = null, c = null, u;
  function f() {
    c && Xs(t, c);
  }
  function _(m, h) {
    const y = (
      /** @type {Program['d']} */
      m.b - s
    );
    return h *= Math.abs(y), {
      a: s,
      b: m.b,
      d: y,
      duration: h,
      start: m.start,
      end: m.start + h,
      group: m.group
    };
  }
  function p(m) {
    const {
      delay: h = 0,
      duration: y = 300,
      easing: w = sl,
      tick: D = E,
      css: z
    } = i || ba, B = {
      start: _a() + h,
      b: m
    };
    m || (B.group = zo, zo.r += 1), "inert" in t && (m ? u !== void 0 && (t.inert = u) : (u = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), a || l ? l = B : (z && (f(), c = Ys(t, s, m, y, h, w, z)), m && D(0, 1), a = _(B, y), bo(() => yi(t, m, "start")), pa((ee) => {
      if (l && ee > l.start && (a = _(l, y), l = null, yi(t, a.b, "start"), z && (f(), c = Ys(
        t,
        s,
        a.b,
        a.duration,
        0,
        w,
        i.css
      ))), a) {
        if (ee >= a.end)
          D(s = a.b, 1 - s), yi(t, a.b, "end"), l || (a.b ? f() : --a.group.r || Kr(a.group.c)), a = null;
        else if (ee >= a.start) {
          const ue = ee - a.start;
          s = a.a + a.d * w(ue / a.duration), D(s, 1 - s);
        }
      }
      return !!(a || l);
    }));
  }
  return {
    run(m) {
      Lr(i) ? ma().then(() => {
        i = i({ direction: m ? "in" : "out" }), p(m);
      }) : p(m);
    },
    end() {
      f(), a = l = null;
    }
  };
}
function lr(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function vd(t, r) {
  ne(t, 1, 1, () => {
    r.delete(t.key);
  });
}
function kd(t, r, e, n, o, i, s, a, l, c, u, f) {
  let _ = t.length, p = i.length, m = _;
  const h = {};
  for (; m--; ) h[t[m].key] = m;
  const y = [], w = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), z = [];
  for (m = p; m--; ) {
    const M = f(o, i, m), q = e(M);
    let ae = s.get(q);
    ae ? z.push(() => ae.p(M, r)) : (ae = c(q, M), ae.c()), w.set(q, y[m] = ae), q in h && D.set(q, Math.abs(m - h[q]));
  }
  const B = /* @__PURE__ */ new Set(), ee = /* @__PURE__ */ new Set();
  function ue(M) {
    U(M, 1), M.m(a, u), s.set(M.key, M), u = M.first, p--;
  }
  for (; _ && p; ) {
    const M = y[p - 1], q = t[_ - 1], ae = M.key, A = q.key;
    M === q ? (u = M.first, _--, p--) : w.has(A) ? !s.has(ae) || B.has(ae) ? ue(M) : ee.has(A) ? _-- : D.get(ae) > D.get(A) ? (ee.add(ae), ue(M)) : (B.add(A), _--) : (l(q, s), _--);
  }
  for (; _--; ) {
    const M = t[_];
    w.has(M.key) || l(M, s);
  }
  for (; p; ) ue(y[p - 1]);
  return Kr(z), y;
}
function Ho(t, r) {
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
function jd(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Ut(t) {
  t && t.c();
}
function Jt(t, r) {
  t && t.l(r);
}
function Lt(t, r, e) {
  const { fragment: n, after_update: o } = t.$$;
  n && n.m(r, e), bo(() => {
    const i = t.$$.on_mount.map(ad).filter(Lr);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : Kr(i), t.$$.on_mount = [];
  }), o.forEach(bo);
}
function Rt(t, r) {
  const e = t.$$;
  e.fragment !== null && (Y_(e.after_update), Kr(e.on_destroy), e.fragment && e.fragment.d(r), e.on_destroy = e.fragment = null, e.ctx = []);
}
function X_(t, r) {
  t.$$.dirty[0] === -1 && (Ni.push(t), bd(), t.$$.dirty.fill(0)), t.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function Rr(t, r, e, n, o, i, s = null, a = [-1]) {
  const l = cs;
  ls(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: E,
    not_equal: o,
    bound: Ba(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(r.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: Ba(),
    dirty: a,
    skip_bound: !1,
    root: r.target || l.$$.root
  };
  s && s(c.root);
  let u = !1;
  if (c.ctx = e ? e(t, r.props || {}, (f, _, ...p) => {
    const m = p.length ? p[0] : _;
    return c.ctx && o(c.ctx[f], c.ctx[f] = m) && (!c.skip_bound && c.bound[f] && c.bound[f](m), u && X_(t, f)), _;
  }) : [], c.update(), u = !0, Kr(c.before_update), c.fragment = n ? n(c.ctx) : !1, r.target) {
    if (r.hydrate) {
      D_();
      const f = Ee(r.target);
      c.fragment && c.fragment.l(f), f.forEach(k);
    } else
      c.fragment && c.fragment.c();
    r.intro && U(t.$$.fragment), Lt(t, r.target, r.anchor), F_(), yd();
  }
  ls(l);
}
class Hr {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    jr(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    jr(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Rt(this, 1), this.$destroy = E;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(r, e) {
    if (!Lr(e))
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
    this.$$set && !I_(r) && (this.$$.skip_bound = !0, this.$$set(r), this.$$.skip_bound = !1);
  }
}
const Z_ = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Z_);
const Mi = [];
function Q_(t, r) {
  return {
    subscribe: Bo(t, r).subscribe
  };
}
function Bo(t, r = E) {
  let e;
  const n = /* @__PURE__ */ new Set();
  function o(a) {
    if (S_(t, a) && (t = a, e)) {
      const l = !Mi.length;
      for (const c of n)
        c[1](), Mi.push(c, t);
      if (l) {
        for (let c = 0; c < Mi.length; c += 2)
          Mi[c][0](Mi[c + 1]);
        Mi.length = 0;
      }
    }
  }
  function i(a) {
    o(a(t));
  }
  function s(a, l = E) {
    const c = [a, l];
    return n.add(c), n.size === 1 && (e = r(o, i) || E), a(t), () => {
      n.delete(c), n.size === 0 && e && (e(), e = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Xi(t, r, e) {
  const n = !Array.isArray(t), o = n ? [t] : t;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = r.length < 2;
  return Q_(e, (s, a) => {
    let l = !1;
    const c = [];
    let u = 0, f = E;
    const _ = () => {
      if (u)
        return;
      f();
      const m = r(n ? c[0] : c, s, a);
      i ? s(m) : f = Lr(m) ? m : E;
    }, p = o.map(
      (m, h) => V(
        m,
        (y) => {
          c[h] = y, u &= ~(1 << h), l && _();
        },
        () => {
          u |= 1 << h;
        }
      )
    );
    return l = !0, _(), function() {
      Kr(p), f(), l = !1;
    };
  });
}
const x_ = "appkit-root_platform_desktop", $_ = "appkit-root__clickable", eh = "appkit-root", th = "appkit-root__selectable", rh = "appkit-root__unselectable", Sr = {
  root_platform_desktop: x_,
  root__clickable: $_,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  "root__any-actions": "appkit-root__any-actions",
  root: eh,
  root__selectable: th,
  root__unselectable: rh,
  "root__only-desktop": "appkit-root__only-desktop",
  "root_restrict-scroll": "appkit-root_restrict-scroll",
  "root_disabled-context-menu": "appkit-root_disabled-context-menu"
}, xr = Symbol("root");
function X(t, r = {}) {
  const e = t;
  return e.level = r.level || "error", r.additional && (e.additional = r.additional), e;
}
const nh = "appkit-outer", oh = "appkit-outer_width_content", ih = "appkit-outer_height_content", sh = "appkit-root__clickable", lh = "appkit-outer__border", ah = "appkit-outer_visibility_invisible", ch = "appkit-outer_visibility_gone", Zs = {
  outer: nh,
  outer_width_content: oh,
  outer_height_content: ih,
  root__clickable: sh,
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
  outer__border: lh,
  outer_visibility_invisible: ah,
  outer_visibility_gone: ch,
  "outer_has-action-animation": "appkit-outer_has-action-animation",
  "outer_has-custom-focus": "appkit-outer_has-custom-focus"
};
function fr(t) {
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
function dn(t) {
  let r = _e(t);
  return r === "0" && (r += "em"), r;
}
function Ed(t, r) {
  for (; t.length < r; )
    t = "0" + t;
  return t;
}
function gr(t, r = 1, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = yo(t);
  return n ? (n.a *= r, ya(n)) : e;
}
function uh(t, r, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = yo(t);
  return n ? (n.a = r, ya(n)) : e;
}
function ya(t) {
  return t.a === 255 ? `#${[t.r, t.g, t.b].map((r) => Ed(Math.round(r).toString(16), 2)).join("")}` : `rgba(${t.r},${t.g},${t.b},${(t.a / 255).toFixed(2)})`;
}
function yo(t) {
  const r = (
    // #AARRGGBB
    t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #ARGB
    t.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])$/i) || // #RRGGBB
    t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #RGB
    t.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)
  );
  if (r) {
    if (r.length === 5) {
      const [c, u, f, _, p] = r, m = f.length === 2 ? f : f + f, h = _.length === 2 ? _ : _ + _, y = p.length === 2 ? p : p + p, w = u.length === 2 ? u : u + u;
      return {
        a: parseInt(w, 16),
        r: parseInt(m, 16),
        g: parseInt(h, 16),
        b: parseInt(y, 16)
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
function Ul(t) {
  let r = String(t);
  return r.indexOf("&") > -1 && (r = r.replace(/&/g, "&amp;")), r.indexOf("<") > -1 && (r = r.replace(/</g, "&lt;")), r.indexOf(">") > -1 && (r = r.replace(/>/g, "&gt;")), r.indexOf('"') > -1 && (r = r.replace(/"/g, "&quot;")), r;
}
const Wo = Boolean;
function pl(t, r) {
  if (t.length === 1 && t[0].type === "solid")
    return dh({
      bg: t[0]
    });
  const e = t.map((n) => {
    if (n.type === "solid")
      return fh({
        bg: n
      });
    if (n.type === "gradient")
      return _h({
        bg: n
      });
    if (n.type === "image")
      return gh({
        bg: n,
        direction: r
      });
    if (n.type === "radial_gradient")
      return ph({
        bg: n
      });
  }).filter(Wo).reverse().reduce(function(n, o) {
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
function fh(t) {
  const r = gr(t.bg.color || "transparent");
  return {
    size: void 0,
    pos: void 0,
    image: `linear-gradient(to bottom,${r},${r})`
  };
}
function dh(t) {
  return {
    color: gr(t.bg.color || "transparent"),
    size: "auto",
    position: "50% 50%"
  };
}
function Cd(t) {
  return t.every((n) => n.color && typeof n.position == "number" && n.position >= 0 && n.position <= 1) ? t.sort((n, o) => Math.abs(n.position - o.position) < 1e-6 ? 0 : n.position - o.position).map((n) => `${gr(n.color)} ${(n.position * 100).toFixed(2)}%`).join(",") : void 0;
}
function _h(t) {
  var n, o, i, s;
  if (!Array.isArray((n = t.bg) == null ? void 0 : n.colors) && !Array.isArray((o = t.bg) == null ? void 0 : o.color_map))
    return;
  const r = (i = t.bg.colors) == null ? void 0 : i.filter(Wo);
  if (!(r != null && r.length) && !((s = t.bg) != null && s.color_map))
    return;
  let e;
  if (t.bg.color_map) {
    const a = Cd(t.bg.color_map);
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
const hh = {
  nearest_corner: "closest-corner",
  farthest_corner: "farthest-corner",
  nearest_side: "closest-side",
  farthest_side: "farthest-side"
};
function Ja(t) {
  if (t && typeof t == "object" && "type" in t && t.value !== void 0) {
    if (t.type === "fixed")
      return dn(t.value);
    if (t.type === "relative")
      return `${Number(t.value) * 100}%`;
  }
  return "50%";
}
function ph(t) {
  var a, l, c, u;
  if (!Array.isArray((a = t.bg) == null ? void 0 : a.colors) && !Array.isArray((l = t.bg) == null ? void 0 : l.color_map))
    return;
  const r = (c = t.bg.colors) == null ? void 0 : c.filter(Wo);
  if (!(r != null && r.length) && !((u = t.bg) != null && u.color_map))
    return;
  let e;
  if (t.bg.color_map ? e = Cd(t.bg.color_map) : r && (e = r.map((f) => gr(f)).join(",")), !e)
    return;
  const n = t.bg.radius;
  let o;
  n && typeof n == "object" && "type" in n && n.value !== void 0 && (n.type === "fixed" ? o = dn(n.value) : n.type === "relative" && (o = hh[n.value]));
  const i = Ja(t.bg.center_x), s = Ja(t.bg.center_y);
  return {
    size: void 0,
    pos: void 0,
    image: `radial-gradient(circle ${o || "farthest-corner"} at ${i} ${s},` + e + ")"
  };
}
function gh(t) {
  var e;
  const r = (e = t.bg) == null ? void 0 : e.image_url;
  if (r)
    return {
      size: Ad(t.bg.scale),
      pos: Vd(t.bg, t.direction),
      image: 'url("' + Ul(r) + '")'
    };
}
function Ad(t) {
  return t === "fit" ? "contain" : t === "stretch" ? "fill" : t === "no_scale" ? "none" : "cover";
}
function mh(t) {
  return t === "none" ? "auto" : t === "fill" ? "100% 100%" : t;
}
function Vd(t, r) {
  let e, n;
  return t.content_alignment_horizontal === "left" || r === "ltr" && t.content_alignment_horizontal === "start" || r === "rtl" && t.content_alignment_horizontal === "end" ? e = "0%" : t.content_alignment_horizontal === "right" || r === "ltr" && t.content_alignment_horizontal === "end" || r === "rtl" && t.content_alignment_horizontal === "start" ? e = "100%" : e = "50%", t.content_alignment_vertical === "top" ? n = "0%" : t.content_alignment_vertical === "bottom" ? n = "100%" : n = "50%", e + " " + n;
}
function on(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e < 0 ? r : e;
}
function qa(t, r, e) {
  return typeof r == "number" && (t && r > 0 && r <= 100 || !t && r >= 0 && r < 100) ? r : e;
}
function bh(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1 && t.index !== void 0;
}
function yh(t, {
  visibilityActions: r,
  disappearActions: e,
  rootCtx: n,
  componentContext: o
}) {
  const i = [];
  r && r.forEach((p) => {
    i.push({
      type: "visibility",
      index: i.length,
      action: p,
      visible: !1,
      count: 0,
      finished: !1
    });
  }), e && e.forEach((p) => {
    i.push({
      type: "disappear",
      index: i.length,
      action: p,
      // false, so disappear only works after the element becomes visible
      visible: !1,
      count: 0,
      finished: !1
    });
  });
  const s = i.map((p, m) => {
    const h = p.type === "visibility";
    return o.getDerivedFromVars({
      index: m,
      visibility_percentage: p.action.visibility_percentage,
      visibility_duration: h ? p.action.visibility_duration : p.action.disappear_duration,
      log_limit: p.action.log_limit,
      is_enabled: p.action.is_enabled
    }, void 0, !0);
  });
  let a;
  const l = () => {
    a && a.disconnect(), i.forEach((p) => {
      p.timer && clearTimeout(p.timer);
    });
  }, c = Xi(s, (p) => p);
  let u;
  const f = (p) => {
    const m = p.type === "visibility";
    o.execAnyActions([p.action], {
      logType: m ? "visible" : "disappear",
      node: t,
      processUrls: !1
    });
  }, _ = c.subscribe((p) => {
    u = p.filter(bh);
    const m = {};
    u.forEach((w) => {
      m[w.index] = w;
    }), l();
    const h = [...new Set(u.map((w) => {
      const D = i[w.index].type === "visibility";
      return qa(
        D,
        w.visibility_percentage,
        D ? 50 : 0
      ) / 100;
    }))];
    if (!h.length)
      return;
    const y = (w) => {
      w.forEach((D) => {
        u.forEach((z) => {
          const B = i[z.index], ee = B.type === "visibility", ue = qa(
            ee,
            z.visibility_percentage,
            ee ? 50 : 0
          );
          let M;
          ue === 0 ? M = D.intersectionRatio >= 1e-12 : M = D.intersectionRatio >= ue / 100, (ee ? !B.visible && M : B.visible && !M) ? B.finished || (B.timer = setTimeout(() => {
            ++B.count;
            const A = z.log_limit === 0 ? 1 / 0 : z.log_limit || 1;
            B.count >= A && (B.finished = !0), f(B);
          }, on(z.visibility_duration, 800))) : (ee ? !M : M) && B.timer && clearTimeout(B.timer), B.visible = M;
        });
      });
    };
    a = new IntersectionObserver(y, {
      threshold: h
    }), a.observe(t);
  });
  return {
    destroy() {
      u == null || u.forEach((p) => {
        const m = i[p.index];
        !m || m.type !== "disappear" || !m.visible || m.finished || n.registerTimeout(window.setTimeout(() => {
          f(m);
        }, p.visibility_duration));
      }), l(), _();
    }
  };
}
function Ka(t, r) {
  r && t.push(r);
}
function wt(t, r, e) {
  const n = [];
  Ka(n, r[t]);
  for (const o in e)
    if (e.hasOwnProperty(o)) {
      const i = e[o];
      if (i) {
        const s = `${t}_${o}` + (typeof i == "string" ? `_${i}` : "");
        Ka(n, r[s]);
      }
    }
  return n.join(" ");
}
const wa = Symbol("state");
function wo(t, r) {
  var s, a;
  const e = t.top || 0, n = ((s = r === "ltr" ? t.end : t.start) != null ? s : t.right) || 0, o = t.bottom || 0, i = ((a = r === "ltr" ? t.start : t.end) != null ? a : t.left) || 0;
  return e === 0 && n === 0 && o === 0 && i === 0 ? "" : _e(e) + " " + _e(n) + " " + _e(o) + " " + _e(i);
}
function gl(t) {
  if (typeof t != "number" && typeof t != "string")
    return !1;
  const r = Number(t);
  return !Number.isNaN(r);
}
function Ln(t) {
  return gl(t) && t >= 0;
}
function us(t, r, e) {
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
    if (n[s] && !Ln(n[s]))
      return e;
  return wo(t, r);
}
function wh(t, r) {
  return !Ln(t) || t === void 0 || t > 1 ? r : Number(t);
}
const vh = Object.prototype.hasOwnProperty;
function Zi(t, r) {
  if (Object.is(t, r))
    return !0;
  if (typeof t != "object" || t === null || typeof r != "object" || r === null)
    return Object.is(t, r);
  const e = Object.keys(t), n = Object.keys(r);
  if (e.length !== n.length)
    return !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (!vh.call(r, i) || !Zi(t[i], r[i]))
      return !1;
  }
  return !0;
}
function ri(t, r) {
  return Zi(t, r) ? r : t;
}
function kh(t, r) {
  return t === "visible" || t === "invisible" || t === "gone" ? t : r;
}
function Sd(t, r) {
  return t === "linear" || t === "ease" || t === "ease_in_out" || t === "ease_in" || t === "ease_out" ? t : r;
}
function fo(t, r) {
  const e = Number(t);
  return Number.isNaN(e) ? r : e;
}
function fs(t) {
  const r = [];
  return t.name === "set" ? (t.items || []).forEach((e) => {
    r.push(...fs(e));
  }) : r.push(t), r;
}
function vi(t, r) {
  if (!t || typeof t != "object")
    return r;
  const e = [
    "top",
    "right",
    "bottom",
    "left"
  ];
  for (let n = 0; n < e.length; ++n)
    if (t[e[n]] && !Ln(t[e[n]]))
      return r;
  return t;
}
function jh(t, r) {
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
function Eh(t, r) {
  const e = [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ];
  for (let n = 0; n < e.length; ++n)
    if (e[n] && !Ln(e[n]))
      return r;
  return t;
}
function Is(t, r = 0, e = 10) {
  return [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ].map((n) => _e((n || r) / e * 10)).join(" ");
}
function Ch(t) {
  var r, e, n, o, i, s;
  return _e(((e = (r = t.offset) == null ? void 0 : r.x) == null ? void 0 : e.value) || 0) + " " + _e(((o = (n = t.offset) == null ? void 0 : n.y) == null ? void 0 : o.value) || 0) + " " + _e((i = t.blur) != null ? i : 2) + " " + gr(t.color || "#000000", (s = t.alpha) != null ? s : 0.19);
}
function Ah(t, r) {
  var e, n, o, i, s, a;
  return "drop-shadow(" + gr(t.color || "#000000", (e = t.alpha) != null ? e : 0.19) + " " + _e((((o = (n = t.offset) == null ? void 0 : n.x) == null ? void 0 : o.value) || 0) * 10 / r) + " " + _e((((s = (i = t.offset) == null ? void 0 : i.y) == null ? void 0 : s.value) || 0) * 10 / r) + " " + _e(((a = t.blur) != null ? a : 2) * 10 / r) + ")";
}
let Il;
function Ui() {
  return typeof matchMedia > "u" ? !1 : (Il || (Il = window.matchMedia("(prefers-reduced-motion)")), Il.matches);
}
const Vh = 8, Sh = (t, r, e, n) => {
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
      if (++i > Vh) {
        const c = new Error("Recursive layout in size_provider");
        c.level = "warn", c.additional = {
          widthVariableName: e,
          heightVariableName: n
        }, r.logError(c);
        break;
      }
      await Tn();
    }
  }), o.observe(t)), o;
}, va = Symbol("enabled");
function an(t, r) {
  return t === 1 || t === 0 || t === !1 || t === !0 ? !!t : r;
}
function ii(t) {
  return [
    t.state_description,
    t.description,
    t.hint
  ].filter(Boolean).join(", ");
}
const Ya = 1, si = 2;
function Xa(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "translation-fixed")
      return _e(t.value * r);
    if (t.type === "translation-percentage")
      return `${t.value * r}%`;
  }
}
function ms(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "pivot-fixed")
      return _e(t.value * r);
    if (t.type === "pivot-percentage")
      return `${t.value * r}%`;
  }
}
function Ih(t) {
  return t.map((r) => {
    if (r.type === "rotation") {
      if (typeof r.angle == "number") {
        const e = ms(r.pivot_x) || "50%", n = ms(r.pivot_y) || "50%", o = ms(r.pivot_x, -1) || "-50%", i = ms(r.pivot_y, -1) || "-50%";
        return `translate(${e}, ${n}) rotate(${r.angle}deg) translate(${o}, ${i})`;
      }
    } else if (r.type === "translation") {
      const e = Xa(r.x) || 0, n = Xa(r.y) || 0;
      return `translate(${e}, ${n})`;
    }
  }).filter(Boolean).join(" ");
}
const Dh = "appkit-actionable__button", Za = {
  actionable__button: Dh
};
function Fh() {
}
const Oo = Symbol("action");
function Gl(t) {
  if (t.startsWith("tel:"))
    return "tel";
  if (t.startsWith("/"))
    return "https";
  const r = /^([^/]+):\/\//.exec(t);
  return r && r[1] || "";
}
function Jl(t, r) {
  return r.has(t);
}
function Th(t) {
  let r = (
    /*containerElement*/
    t[7]
  ), e, n, o = (
    /*containerElement*/
    t[7] && Dl(t)
  );
  return {
    c() {
      o && o.c(), e = He();
    },
    l(i) {
      o && o.l(i), e = He();
    },
    m(i, s) {
      o && o.m(i, s), K(i, e, s), n = !0;
    },
    p(i, s) {
      /*containerElement*/
      i[7] ? r ? Fr(
        r,
        /*containerElement*/
        i[7]
      ) ? (o.d(1), o = Dl(i), r = /*containerElement*/
      i[7], o.c(), o.m(e.parentNode, e)) : o.p(i, s) : (o = Dl(i), r = /*containerElement*/
      i[7], o.c(), o.m(e.parentNode, e)) : r && (o.d(1), o = null, r = /*containerElement*/
      i[7]);
    },
    i(i) {
      n || (U(o, i), n = !0);
    },
    o(i) {
      ne(o, i), n = !1;
    },
    d(i) {
      i && k(e), o && o.d(i);
    }
  };
}
function Mh(t) {
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
  let c = [
    {
      class: e = /*cls*/
      t[2] + " " + Za.actionable__button + " " + Sr["root__any-actions"] + ` ${/*isNativeActionAnimation*/
      t[6] ? Sr.root__clickable : Sr["root__clickable-no-transition"]} ${Sr.root__unselectable} ` + /*longTapActions*/
      ((f = t[1]) != null && f.length ? Sr["root_disabled-context-menu"] : "")
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
      t[0].fakeElement === si ? -1 : null
    },
    /*attrs*/
    t[4]
  ], u = {};
  for (let _ = 0; _ < c.length; _ += 1)
    u = Io(u, c[_]);
  return {
    c() {
      r = Me("button"), l && l.c(), this.h();
    },
    l(_) {
      r = Ne(_, "BUTTON", {
        class: !0,
        style: !0,
        role: !0,
        "aria-checked": !0,
        type: !0,
        tabindex: !0
      });
      var p = Ee(r);
      l && l.l(p), p.forEach(k), this.h();
    },
    h() {
      Zo(r, u);
    },
    m(_, p) {
      K(_, r, p), l && l.m(r, null), r.autofocus && r.focus(), t[48](r), o = !0, i || (s = [
        fl(
          /*use*/
          t[5].call(null, r)
        ),
        $e(
          r,
          "click",
          /*click_handler_1*/
          t[37]
        ),
        $e(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        $e(
          r,
          "focus",
          /*focus_handler_1*/
          t[38]
        ),
        $e(
          r,
          "blur",
          /*blur_handler_1*/
          t[39]
        ),
        $e(
          r,
          "pointerdown",
          /*pointerdown_handler_1*/
          t[40]
        ),
        $e(
          r,
          "wheel",
          /*wheel_handler_1*/
          t[41]
        )
      ], i = !0);
    },
    p(_, p) {
      var m;
      l && l.p && (!o || p[0] & /*$$scope*/
      1073741824) && cl(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? al(
          a,
          /*$$scope*/
          _[30],
          p,
          null
        ) : ul(
          /*$$scope*/
          _[30]
        ),
        null
      ), Zo(r, u = Ho(c, [
        (!o || p[0] & /*cls, isNativeActionAnimation, longTapActions*/
        70 && e !== (e = /*cls*/
        _[2] + " " + Za.actionable__button + " " + Sr["root__any-actions"] + ` ${/*isNativeActionAnimation*/
        _[6] ? Sr.root__clickable : Sr["root__clickable-no-transition"]} ${Sr.root__unselectable} ` + /*longTapActions*/
        ((m = _[1]) != null && m.length ? Sr["root_disabled-context-menu"] : ""))) && { class: e },
        (!o || p[0] & /*style*/
        8) && { style: (
          /*style*/
          _[3]
        ) },
        (!o || p[0] & /*role*/
        2048) && { role: (
          /*role*/
          _[11]
        ) },
        (!o || p[0] & /*isChecked*/
        32768) && { "aria-checked": (
          /*isChecked*/
          _[15]
        ) },
        { type: "button" },
        (!o || p[0] & /*componentContext*/
        1 && n !== (n = /*componentContext*/
        _[0].fakeElement === si ? -1 : null)) && { tabindex: n },
        p[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (U(l, _), o = !0);
    },
    o(_) {
      ne(l, _), o = !1;
    },
    d(_) {
      _ && k(r), l && l.d(_), t[48](null), i = !1, Kr(s);
    }
  };
}
function Ph(t) {
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
      t[2] + " " + Sr["root__any-actions"] + " " + /*isNativeActionAnimation*/
      (t[6] ? Sr.root__clickable : Sr["root__clickable-no-transition"]) + " " + /*longTapActions*/
      ((f = t[1]) != null && f.length ? Sr["root_disabled-context-menu"] : "")
    },
    {
      tabindex: n = /*componentContext*/
      t[0].fakeElement === si ? -1 : null
    },
    /*attrs*/
    t[4]
  ], u = {};
  for (let _ = 0; _ < c.length; _ += 1)
    u = Io(u, c[_]);
  return {
    c() {
      r = Me("a"), l && l.c(), this.h();
    },
    l(_) {
      r = Ne(_, "A", {
        href: !0,
        target: !0,
        style: !0,
        role: !0,
        "aria-checked": !0,
        class: !0,
        tabindex: !0
      });
      var p = Ee(r);
      l && l.l(p), p.forEach(k), this.h();
    },
    h() {
      Zo(r, u);
    },
    m(_, p) {
      K(_, r, p), l && l.m(r, null), t[47](r), o = !0, i || (s = [
        fl(
          /*use*/
          t[5].call(null, r)
        ),
        $e(
          r,
          "click",
          /*click_handler*/
          t[32]
        ),
        $e(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        $e(
          r,
          "focus",
          /*focus_handler*/
          t[33]
        ),
        $e(
          r,
          "blur",
          /*blur_handler*/
          t[34]
        ),
        $e(
          r,
          "pointerdown",
          /*pointerdown_handler*/
          t[35]
        ),
        $e(
          r,
          "wheel",
          /*wheel_handler*/
          t[36]
        )
      ], i = !0);
    },
    p(_, p) {
      var m;
      l && l.p && (!o || p[0] & /*$$scope*/
      1073741824) && cl(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? al(
          a,
          /*$$scope*/
          _[30],
          p,
          null
        ) : ul(
          /*$$scope*/
          _[30]
        ),
        null
      ), Zo(r, u = Ho(c, [
        (!o || p[0] & /*href*/
        512) && { href: (
          /*href*/
          _[9]
        ) },
        (!o || p[0] & /*target*/
        8192) && { target: (
          /*target*/
          _[13]
        ) },
        (!o || p[0] & /*style*/
        8) && { style: (
          /*style*/
          _[3]
        ) },
        (!o || p[0] & /*role*/
        2048) && { role: (
          /*role*/
          _[11]
        ) },
        (!o || p[0] & /*isChecked*/
        32768) && { "aria-checked": (
          /*isChecked*/
          _[15]
        ) },
        (!o || p[0] & /*cls, isNativeActionAnimation, longTapActions*/
        70 && e !== (e = /*cls*/
        _[2] + " " + Sr["root__any-actions"] + " " + /*isNativeActionAnimation*/
        (_[6] ? Sr.root__clickable : Sr["root__clickable-no-transition"]) + " " + /*longTapActions*/
        ((m = _[1]) != null && m.length ? Sr["root_disabled-context-menu"] : ""))) && { class: e },
        (!o || p[0] & /*componentContext*/
        1 && n !== (n = /*componentContext*/
        _[0].fakeElement === si ? -1 : null)) && { tabindex: n },
        p[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (U(l, _), o = !0);
    },
    o(_) {
      ne(l, _), o = !1;
    },
    d(_) {
      _ && k(r), l && l.d(_), t[47](null), i = !1, Kr(s);
    }
  };
}
function Dl(t) {
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
  let c = [
    {
      class: e = /*cls*/
      t[2] + " " + /*longTapActions*/
      ((f = t[1]) != null && f.length ? Sr["root_disabled-context-menu"] : "") + " " + /*hasAnyActions*/
      (t[14] ? Sr["root__any-actions"] : "")
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
    u = Io(u, c[_]);
  return {
    c() {
      r = Me(
        /*containerElement*/
        t[7]
      ), l && l.c(), this.h();
    },
    l(_) {
      r = Ne(
        _,
        /*containerElement*/
        (t[7] || "null").toUpperCase(),
        {
          class: !0,
          style: !0,
          role: !0,
          "aria-checked": !0,
          "aria-hidden": !0
        }
      );
      var p = Ee(r);
      l && l.l(p), p.forEach(k), this.h();
    },
    h() {
      oi(
        /*containerElement*/
        t[7]
      )(r, u);
    },
    m(_, p) {
      K(_, r, p), l && l.m(r, null), t[49](r), o = !0, i || (s = [
        fl(
          /*use*/
          t[5].call(null, r)
        ),
        $e(
          r,
          "click",
          /*click_handler_2*/
          t[42]
        ),
        $e(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        $e(
          r,
          "focus",
          /*focus_handler_2*/
          t[43]
        ),
        $e(
          r,
          "blur",
          /*blur_handler_2*/
          t[44]
        ),
        $e(
          r,
          "pointerdown",
          /*pointerdown_handler_2*/
          t[45]
        ),
        $e(
          r,
          "wheel",
          /*wheel_handler_2*/
          t[46]
        )
      ], i = !0);
    },
    p(_, p) {
      var m;
      l && l.p && (!o || p[0] & /*$$scope*/
      1073741824) && cl(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? al(
          a,
          /*$$scope*/
          _[30],
          p,
          null
        ) : ul(
          /*$$scope*/
          _[30]
        ),
        null
      ), oi(
        /*containerElement*/
        _[7]
      )(r, u = Ho(c, [
        (!o || p[0] & /*cls, longTapActions, hasAnyActions*/
        16390 && e !== (e = /*cls*/
        _[2] + " " + /*longTapActions*/
        ((m = _[1]) != null && m.length ? Sr["root_disabled-context-menu"] : "") + " " + /*hasAnyActions*/
        (_[14] ? Sr["root__any-actions"] : ""))) && { class: e },
        (!o || p[0] & /*style*/
        8) && { style: (
          /*style*/
          _[3]
        ) },
        (!o || p[0] & /*role*/
        2048) && { role: (
          /*role*/
          _[11]
        ) },
        (!o || p[0] & /*isChecked*/
        32768) && { "aria-checked": (
          /*isChecked*/
          _[15]
        ) },
        (!o || p[0] & /*ariaHidden*/
        4096 && n !== (n = /*ariaHidden*/
        _[12] || void 0)) && {
          "aria-hidden": n
        },
        p[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (U(l, _), o = !0);
    },
    o(_) {
      ne(l, _), o = !1;
    },
    d(_) {
      _ && k(r), l && l.d(_), t[49](null), i = !1, Kr(s);
    }
  };
}
function Nh(t) {
  let r, e, n, o;
  const i = [Ph, Mh, Th], s = [];
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
      e.c(), n = He();
    },
    l(l) {
      e.l(l), n = He();
    },
    m(l, c) {
      s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? s[r].p(l, c) : (dr(), ne(s[u], 1, 1, () => {
        s[u] = null;
      }), _r(), e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), U(e, 1), e.m(n.parentNode, n));
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), s[r].d(l);
    }
  };
}
const Qa = 8, xa = 400, Fl = 400, zh = /* @__PURE__ */ new Set(["button", "image", "checkbox", "radio", "header"]);
function $a(t) {
  t.preventDefault();
}
function Bh(t, r, e) {
  let n, o, i = E, s = () => (i(), i = V(n, (Q) => e(29, o = Q)), n);
  t.$$.on_destroy.push(() => i());
  let { $$slots: a = {}, $$scope: l } = r, { componentContext: c } = r, { id: u = "" } = r, { actions: f = void 0 } = r, { doubleTapActions: _ = void 0 } = r, { longTapActions: p = void 0 } = r, { pressStartActions: m = void 0 } = r, { pressEndActions: h = void 0 } = r, { hoverStartActions: y = void 0 } = r, { hoverEndActions: w = void 0 } = r, { cls: D = "" } = r, { style: z = null } = r, { attrs: B = void 0 } = r, { use: ee = Fh } = r, { customAction: ue = null } = r, { isNativeActionAnimation: M = !0 } = r, { hasInnerFocusable: q = !1 } = r, { customAccessibility: ae = void 0 } = r, { captureFocusOnAction: A = !0 } = r, { containerElement: F = "span" } = r;
  const P = zr(xr), O = zr(Oo);
  mi(Oo, {
    hasAction() {
      return !!(O.hasAction() || f != null && f.length || (ae == null ? void 0 : ae.mode) === "exclude");
    }
  });
  let J, he = "", fe, Ae = -1, me = -1, Ie = null, re = !1, tt = !1, qe = !1, Ke, ve, Te, pe, ce = !1;
  function be() {
    return (o == null ? void 0 : o.some((Q) => {
      if (Q != null && Q.typed)
        return !0;
      const It = Q == null ? void 0 : Q.url;
      if (!It)
        return !1;
      const zt = Gl(It);
      return zt && !Jl(zt, P.getBuiltinProtocols());
    })) || !1;
  }
  async function x(Q, It) {
    f && (Q && be() && Q.preventDefault(), c.execAnyActions(f, { node: J, processUrls: It }));
  }
  async function ge(Q) {
    if (O.hasAction() || Q.button !== void 0 && Q.button !== 0)
      return;
    const It = Date.now();
    if (Ae > 0 && It > Ae + xa) {
      Q.preventDefault();
      return;
    }
    if (_ != null && _.length && me > 0 && It - me < Fl) {
      Q.preventDefault(), c.execAnyActions(_, { processUrls: !0, node: J }), me = -1;
      return;
    }
    if (me = It, _ != null && _.length && Ae > 0 && It < Ae + Fl) {
      Q.preventDefault(), clearTimeout(ve), ve = window.setTimeout(
        () => {
          x(void 0, !0);
        },
        Fl
      );
      return;
    }
    (ue == null ? void 0 : ue(Q)) === !1 ? Q.preventDefault() : x(Q, !1);
  }
  function oe(Q) {
    O.hasAction() || (Ie = { x: Q.clientX, y: Q.clientY }, re = !1, Ae = Date.now(), Ke && clearTimeout(Ke), clearTimeout(ve), c.execAnyActions(m, { node: J }));
  }
  function Se(Q) {
    Ie && (Math.abs(Ie.x - Q.clientX) > Qa || Math.abs(Ie.y - Q.clientY) > Qa) && (re = !0);
  }
  function Je(Q) {
    O.hasAction() || !Ie || Ae < 0 || (!re && Date.now() - Ae >= xa && (Q.stopImmediatePropagation(), c.execAnyActions(p, { processUrls: !0, node: J })), Ke && clearTimeout(Ke), Ke = window.setTimeout(
      () => {
        Ie = null, Ae = -1;
      },
      100
    ), c.execAnyActions(h, { node: J }));
  }
  function Ye() {
    O.hasAction() || c.execAnyActions(y, { node: J });
  }
  function te() {
    O.hasAction() || c.execAnyActions(w, { node: J });
  }
  function Re(Q) {
    const It = Q.target;
    It instanceof HTMLElement && (It.tagName === "INPUT" || It.contentEditable === "true") || Q.ctrlKey || Q.metaKey || Q.altKey || Q.shiftKey || Q.key === "Enter" && Array.isArray(f) && f.length && (c.execAnyActions(f), Q.preventDefault());
  }
  no(() => {
    u && !q && P.registerFocusable(u, {
      focus() {
        J && (he || tt) && J.focus();
      }
    });
  }), cn(() => {
    typeof window < "u" && (window.removeEventListener("pointermove", Se), window.removeEventListener("pointerup", Je), window.removeEventListener("pointercancel", Je)), u && !q && P.unregisterFocusable(u), Ke && clearTimeout(Ke), ve && clearTimeout(ve);
  });
  function ze(Q) {
    Wn.call(this, t, Q);
  }
  function at(Q) {
    Wn.call(this, t, Q);
  }
  function ct(Q) {
    Wn.call(this, t, Q);
  }
  function nt(Q) {
    Wn.call(this, t, Q);
  }
  function jt(Q) {
    Wn.call(this, t, Q);
  }
  function st(Q) {
    Wn.call(this, t, Q);
  }
  function Bt(Q) {
    Wn.call(this, t, Q);
  }
  function dt(Q) {
    Wn.call(this, t, Q);
  }
  function Z(Q) {
    Wn.call(this, t, Q);
  }
  function de(Q) {
    Wn.call(this, t, Q);
  }
  function ut(Q) {
    Wn.call(this, t, Q);
  }
  function De(Q) {
    Wn.call(this, t, Q);
  }
  function N(Q) {
    Wn.call(this, t, Q);
  }
  function Vt(Q) {
    Wn.call(this, t, Q);
  }
  function pt(Q) {
    Wn.call(this, t, Q);
  }
  function Dt(Q) {
    Pr[Q ? "unshift" : "push"](() => {
      J = Q, e(8, J);
    });
  }
  function Nt(Q) {
    Pr[Q ? "unshift" : "push"](() => {
      J = Q, e(8, J);
    });
  }
  function ot(Q) {
    Pr[Q ? "unshift" : "push"](() => {
      J = Q, e(8, J);
    });
  }
  return t.$$set = (Q) => {
    "componentContext" in Q && e(0, c = Q.componentContext), "id" in Q && e(18, u = Q.id), "actions" in Q && e(19, f = Q.actions), "doubleTapActions" in Q && e(20, _ = Q.doubleTapActions), "longTapActions" in Q && e(1, p = Q.longTapActions), "pressStartActions" in Q && e(21, m = Q.pressStartActions), "pressEndActions" in Q && e(22, h = Q.pressEndActions), "hoverStartActions" in Q && e(23, y = Q.hoverStartActions), "hoverEndActions" in Q && e(24, w = Q.hoverEndActions), "cls" in Q && e(2, D = Q.cls), "style" in Q && e(3, z = Q.style), "attrs" in Q && e(4, B = Q.attrs), "use" in Q && e(5, ee = Q.use), "customAction" in Q && e(25, ue = Q.customAction), "isNativeActionAnimation" in Q && e(6, M = Q.isNativeActionAnimation), "hasInnerFocusable" in Q && e(26, q = Q.hasInnerFocusable), "customAccessibility" in Q && e(27, ae = Q.customAccessibility), "captureFocusOnAction" in Q && e(28, A = Q.captureFocusOnAction), "containerElement" in Q && e(7, F = Q.containerElement), "$$scope" in Q && e(30, l = Q.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*customAccessibility*/
    134217728 && e(12, ce = (ae == null ? void 0 : ae.mode) === "exclude"), t.$$.dirty[0] & /*componentContext, actions*/
    524289 && s(e(16, n = c.getDerivedFromVars(f, void 0, !0))), t.$$.dirty[0] & /*$processedActions, customAction, href, ariaHidden, componentContext*/
    570429953) {
      if (Array.isArray(o) && (o != null && o.length))
        for (let Q = 0; Q < o.length; ++Q) {
          const It = o[Q].url;
          if (It) {
            e(9, he = It), e(13, fe = o[Q].target || void 0);
            break;
          }
        }
      e(10, tt = !!ue), (he || Array.isArray(o) && (o != null && o.length)) && (O.hasAction() || ce) ? (e(9, he = ""), c.logError(X(new Error("Actionable element is forbidden inside other actionable element or inside accessibility mode=exlucde"), {
        level: "warn",
        additional: { actions: o }
      }))) : he && !Jl(Gl(he), P.getBuiltinProtocols()) ? (e(9, he = ""), e(10, tt = !0)) : !he && Array.isArray(o) && (o != null && o.length) && (e(10, tt = !0), o.some((Q) => Q.url || Q.typed || Q.menu_items) || c.logError(X(new Error("The component has a list of actions, but does not have a real action"), {
        level: "warn",
        additional: { actions: o }
      })));
    }
    t.$$.dirty[0] & /*customAccessibility, href, hasJSAction, role*/
    134221312 && (ae != null && ae.type && zh.has(ae.type) ? ae.type === "header" ? e(11, Te = "heading") : e(11, Te = ae.type) : he ? e(11, Te = void 0) : tt && e(11, Te = "button"), (Te === "checkbox" || Te === "radio") && typeof (ae == null ? void 0 : ae.is_checked) == "boolean" ? e(15, pe = ae.is_checked) : e(15, pe = void 0)), t.$$.dirty[0] & /*node, href, hasJSAction, doubleTapActions, longTapActions, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions, captureFocusOnAction*/
    300943106 && J && (he || tt || _ != null && _.length ? J.addEventListener("click", ge) : J.removeEventListener("click", ge), _ != null && _.length || p != null && p.length || m != null && m.length || h != null && h.length ? (J.addEventListener("pointerdown", oe, { passive: !0 }), window.addEventListener("pointermove", Se, { passive: !0 }), window.addEventListener("pointerup", Je, { passive: !0 }), window.addEventListener("pointercancel", Je, { passive: !0 })) : (J.removeEventListener("pointerdown", oe), window.removeEventListener("pointerup", Je), window.removeEventListener("pointermove", Se), window.removeEventListener("pointercancel", Je)), y != null && y.length ? J.addEventListener("pointerenter", Ye) : J.removeEventListener("pointerenter", Ye), w != null && w.length ? J.addEventListener("pointerleave", te) : J.removeEventListener("pointerleave", te), A === !1 ? J.addEventListener("mousedown", $a) : J.removeEventListener("mousedown", $a), e(14, qe = !!(he || tt || _ != null && _.length || p != null && p.length || m != null && m.length || h != null && h.length || y != null && y.length || w != null && w.length)));
  }, [
    c,
    p,
    D,
    z,
    B,
    ee,
    M,
    F,
    J,
    he,
    tt,
    Te,
    ce,
    fe,
    qe,
    pe,
    n,
    Re,
    u,
    f,
    _,
    m,
    h,
    y,
    w,
    ue,
    q,
    ae,
    A,
    o,
    l,
    a,
    ze,
    at,
    ct,
    nt,
    jt,
    st,
    Bt,
    dt,
    Z,
    de,
    ut,
    De,
    N,
    Vt,
    pt,
    Dt,
    Nt,
    ot
  ];
}
class ml extends Hr {
  constructor(r) {
    super(), Rr(
      this,
      r,
      Bh,
      Nh,
      Fr,
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
const bi = {
  "outer-background": "appkit-outer-background",
  "outer-background_clip": "appkit-outer-background_clip",
  "outer-background__item": "appkit-outer-background__item",
  "outer-background__item_hidden": "appkit-outer-background__item_hidden"
};
function Rn(t) {
  return gl(t) && t > 0;
}
function Id(t, r) {
  return t.map((e) => {
    if (!e) {
      r(X(new Error("Incorrect filter"), {
        level: "warn"
      }));
      return;
    }
    if (e.type === "blur") {
      if (Rn(e.radius))
        return `blur(${dn(e.radius / 2)})`;
    } else {
      if (e.type === "rtl_mirror")
        return;
      r(X(new Error("Unknown filter"), {
        level: "warn",
        additional: {
          filter: e.type
        }
      }));
    }
  }).filter(Boolean).join(" ");
}
function ec(t, r, e) {
  const n = t.slice();
  return n[6] = r[e], n;
}
function Oh(t) {
  let r, e;
  return {
    c() {
      r = Me("span"), this.h();
    },
    l(n) {
      r = Ne(n, "SPAN", { class: !0, style: !0 }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", bi["outer-background__item"]), g(r, "style", e = fr(
        /*item*/
        t[6].style
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o & /*styles*/
      2 && e !== (e = fr(
        /*item*/
        n[6].style
      )) && g(r, "style", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function Lh(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Me("img"), this.h();
    },
    l(s) {
      r = Ne(s, "IMG", {
        src: !0,
        alt: !0,
        "aria-hidden": !0,
        loading: !0,
        decoding: !0,
        class: !0,
        style: !0
      }), this.h();
    },
    h() {
      eo(r.src, e = /*item*/
      t[6].image_url) || g(r, "src", e), g(r, "alt", ""), g(r, "aria-hidden", "true"), g(r, "loading", "lazy"), g(r, "decoding", "async"), g(r, "class", bi["outer-background__item"]), g(r, "style", n = fr(
        /*item*/
        t[6].style
      ));
    },
    m(s, a) {
      K(s, r, a), o || (i = $e(
        r,
        "error",
        /*onImgError*/
        t[2]
      ), o = !0);
    },
    p(s, a) {
      a & /*styles*/
      2 && !eo(r.src, e = /*item*/
      s[6].image_url) && g(r, "src", e), a & /*styles*/
      2 && n !== (n = fr(
        /*item*/
        s[6].style
      )) && g(r, "style", n);
    },
    d(s) {
      s && k(r), o = !1, i();
    }
  };
}
function tc(t) {
  let r;
  function e(i, s) {
    return (
      /*item*/
      i[6].image_url ? Lh : Oh
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = He();
    },
    l(i) {
      o.l(i), r = He();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function Rh(t) {
  let r, e, n = lr(
    /*styles*/
    t[1]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = tc(ec(t, n, i));
  return {
    c() {
      r = Me("span");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      this.h();
    },
    l(i) {
      r = Ne(i, "SPAN", { class: !0 });
      var s = Ee(r);
      for (let a = 0; a < o.length; a += 1)
        o[a].l(s);
      s.forEach(k), this.h();
    },
    h() {
      g(r, "class", e = bi["outer-background"] + /*radius*/
      (t[0] ? " " + bi["outer-background_clip"] : "")), T(
        r,
        "border-radius",
        /*radius*/
        t[0]
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
        n = lr(
          /*styles*/
          i[1]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = ec(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = tc(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s & /*radius*/
      1 && e !== (e = bi["outer-background"] + /*radius*/
      (i[0] ? " " + bi["outer-background_clip"] : "")) && g(r, "class", e), s & /*radius*/
      1 && T(
        r,
        "border-radius",
        /*radius*/
        i[0]
      );
    },
    i: E,
    o: E,
    d(i) {
      i && k(r), _n(o, i);
    }
  };
}
function Hh(t, r, e) {
  let n, { direction: o } = r, { componentContext: i } = r, { background: s = [] } = r, { radius: a = "" } = r;
  function l(c) {
    c.target && "classList" in c.target && c.target.classList.add(bi["outer-background__item_hidden"]);
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
        c.type === "solid" && (u["background-color"] = _.color), c.type === "gradient" && (u["background-image"] = _.image), c.type === "image" && (u.opacity = Number(c.alpha), f.image_url = c.image_url, u["object-fit"] = _.size, u["object-position"] = _.position, Array.isArray(c.filters) && c.filters.length && (u.filter = Id(c.filters, i.logError), o === "rtl" && c.filters.some((p) => p.type === "rtl_mirror") && (u.transform = "scale(-1,1)")));
      }
      return f;
    }));
  }, [a, n, l, o, i, s];
}
class Wh extends Hr {
  constructor(r) {
    super(), Rr(this, r, Hh, Rh, Fr, {
      direction: 3,
      componentContext: 4,
      background: 5,
      radius: 0
    });
  }
}
const Uh = (t) => ({
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
}), rc = (t) => ({
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
function nc(t) {
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
        t[1] + " " + wt(
          "outer",
          Zs,
          /*mods*/
          t[31]
        ) + /*customClass*/
        (t[30] ? ` ${/*customClass*/
        t[30]}` : "") + /*hoverClassName*/
        (t[18] ? ` ${/*hoverClassName*/
        t[18]}` : "")
      ),
      style: fr(
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
      t[16].length || sc(
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
      $$slots: { default: [Gh] },
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
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
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
      n[1] + " " + wt(
        "outer",
        Zs,
        /*mods*/
        n[31]
      ) + /*customClass*/
      (n[30] ? ` ${/*customClass*/
      n[30]}` : "") + /*hoverClassName*/
      (n[18] ? ` ${/*hoverClassName*/
      n[18]}` : "")), o[0] & /*stl*/
      536870912 && (i.style = fr(
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
      n[16].length || sc(
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function oc(t) {
  let r, e;
  return r = new Wh({
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
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function ic(t) {
  let r, e;
  return {
    c() {
      r = Me("span"), this.h();
    },
    l(n) {
      r = Ne(n, "SPAN", { class: !0, style: !0 }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", Zs.outer__border), g(r, "style", e = fr(
        /*borderElemStyle*/
        t[4]
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o[0] & /*borderElemStyle*/
      16 && e !== (e = fr(
        /*borderElemStyle*/
        n[4]
      )) && g(r, "style", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function Gh(t) {
  let r, e, n, o = (
    /*hasSeparateBg*/
    t[11] && oc(t)
  );
  const i = (
    /*#slots*/
    t[146].default
  ), s = ll(
    i,
    t,
    /*$$scope*/
    t[149],
    rc
  );
  let a = (
    /*hasBorder*/
    t[22] && ic(t)
  );
  return {
    c() {
      o && o.c(), r = He(), s && s.c(), a && a.c(), e = He();
    },
    l(l) {
      o && o.l(l), r = He(), s && s.l(l), a && a.l(l), e = He();
    },
    m(l, c) {
      o && o.m(l, c), K(l, r, c), s && s.m(l, c), a && a.m(l, c), K(l, e, c), n = !0;
    },
    p(l, c) {
      /*hasSeparateBg*/
      l[11] ? o ? (o.p(l, c), c[0] & /*hasSeparateBg*/
      2048 && U(o, 1)) : (o = oc(l), o.c(), U(o, 1), o.m(r.parentNode, r)) : o && (dr(), ne(o, 1, 1, () => {
        o = null;
      }), _r()), s && s.p && (!n || c[0] & /*hasCustomFocus, widthMin, widthMax, heightMin, heightMax*/
      132032 | c[4] & /*$$scope*/
      33554432) && cl(
        s,
        i,
        l,
        /*$$scope*/
        l[149],
        n ? al(
          i,
          /*$$scope*/
          l[149],
          c,
          Uh
        ) : ul(
          /*$$scope*/
          l[149]
        ),
        rc
      ), /*hasBorder*/
      l[22] ? a ? a.p(l, c) : (a = ic(l), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null);
    },
    i(l) {
      n || (U(o), U(s, l), n = !0);
    },
    o(l) {
      ne(o), ne(s, l), n = !1;
    },
    d(l) {
      l && (k(r), k(e)), o && o.d(l), s && s.d(l), a && a.d(l);
    }
  };
}
function Jh(t) {
  let r, e, n = !/*hasWidthError*/
  t[23] && !/*hasHeightError*/
  t[24] && nc(t);
  return {
    c() {
      n && n.c(), r = He();
    },
    l(o) {
      n && n.l(o), r = He();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), e = !0;
    },
    p(o, i) {
      !/*hasWidthError*/
      o[23] && !/*hasHeightError*/
      o[24] ? n ? (n.p(o, i), i[0] & /*hasWidthError, hasHeightError*/
      25165824 && U(n, 1)) : (n = nc(o), n.c(), U(n, 1), n.m(r.parentNode, r)) : n && (dr(), ne(n, 1, 1, () => {
        n = null;
      }), _r());
    },
    i(o) {
      e || (U(n), e = !0);
    },
    o(o) {
      ne(n), e = !1;
    },
    d(o) {
      o && k(r), n && n.d(o);
    }
  };
}
const qh = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
}, Kh = {
  left: "end",
  center: "center",
  right: "start",
  start: "start",
  end: "end"
}, Yh = {
  top: "start",
  center: "center",
  bottom: "end",
  baseline: "baseline"
}, Tl = (t) => `The component id with the "${t}" property for state change is missing. Either specify the id, or specify the "transition_trigger" property without "state_change" value.`;
function sc(t) {
  return t.some((r) => r.name === "native");
}
function Xh(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p, m, h, y, w, D, z, B, ee, ue, M, q, ae, A, F, P, O, J, he, fe, Ae, me, Ie, re, tt, qe, Ke, ve, Te, pe, ce, be, x, ge, oe = E, Se = () => (oe(), oe = V(w, (ft) => e(130, ge = ft)), w), Je, Ye = E, te = () => (Ye(), Ye = V(D, (ft) => e(131, Je = ft)), D), Re, ze = E, at = () => (ze(), ze = V(y, (ft) => e(132, Re = ft)), y), ct, nt = E, jt = () => (nt(), nt = V(z, (ft) => e(133, ct = ft)), z), st, Bt = E, dt = () => (Bt(), Bt = V(h, (ft) => e(134, st = ft)), h), Z, de = E, ut = () => (de(), de = V(m, (ft) => e(135, Z = ft)), m), De, N = E, Vt = () => (N(), N = V(o, (ft) => e(136, De = ft)), o), pt, Dt = E, Nt = () => (Dt(), Dt = V(p, (ft) => e(20, pt = ft)), p), ot, Q = E, It = () => (Q(), Q = V(_, (ft) => e(137, ot = ft)), _), zt, tr = E, Xt = () => (tr(), tr = V(f, (ft) => e(138, zt = ft)), f), ye, Ue = E, mt = () => (Ue(), Ue = V(u, (ft) => e(139, ye = ft)), u), ke, rt = E, We = () => (rt(), rt = V(a, (ft) => e(140, ke = ft)), a), nr, Le = E, kt = () => (Le(), Le = V(c, (ft) => e(141, nr = ft)), c), Tt, Mt = E, hr = () => (Mt(), Mt = V(l, (ft) => e(142, Tt = ft)), l), Be, Ct = E, sr = () => (Ct(), Ct = V(s, (ft) => e(143, Be = ft)), s), rr, $t = E, mr = () => ($t(), $t = V(i, (ft) => e(144, rr = ft)), i), Ar;
  t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => ze()), t.$$.on_destroy.push(() => nt()), t.$$.on_destroy.push(() => Bt()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => Dt()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => tr()), t.$$.on_destroy.push(() => Ue()), t.$$.on_destroy.push(() => rt()), t.$$.on_destroy.push(() => Le()), t.$$.on_destroy.push(() => Mt()), t.$$.on_destroy.push(() => Ct()), t.$$.on_destroy.push(() => $t());
  let { $$slots: Ot = {}, $$scope: Er } = r, { componentContext: Y } = r, { cls: gt = "" } = r, { style: Kt = void 0 } = r, { layoutParams: At = {} } = r, { customDescription: Cr = !1 } = r, { customPaddings: Tr = !1 } = r, { customActions: wr = "" } = r, { additionalPaddings: Nr = null } = r, { heightByAspect: Yr = !1 } = r, { parentOf: or = void 0 } = r, { parentOfSimpleMode: lt = void 0 } = r, { replaceItems: St = void 0 } = r, { hasInnerFocusable: er = !1 } = r, { alwaysCustomFocus: Qt = !1 } = r, { containerElement: pr = "span" } = r, { devapi: _t = void 0 } = r;
  const ie = zr(xr), vt = zr(wa), { isEnabled: ir } = zr(va);
  Cn(t, ir, (ft) => e(145, Ar = ft));
  const vr = ie.direction;
  Cn(t, vr, (ft) => e(19, x = ft));
  let ar, j, se = null, d = [], R = {}, Pe = {}, Xe = !1, je = 1, H = "transparent", Pt = 0, Ht = {
    "top-left": 0,
    "top-right": 0,
    "bottom-right": 0,
    "bottom-left": 0
  }, Ze = "", ht = null, Yt = "", Mr = {}, kr, Wr, Mn, Ve = 0, Zr = 0, $r = 0, kn = !1, v = !1, C = {}, S, le, W, et = 0, Fe = 0, Zt = 0, Ft = !1, Qe = !1, xt = 1, yt, Ir, Dr, jn, sn = [], un = !1, fn = !1, In, Zn, Jn, io = [], qt = [], b = [], I = [], $ = [], L = [], Ce = [], we = [], Wt = [], Gt = [], Xr = "", Br, Ur, Do, co, Qn = !1, Pn = "visible", xo, xe, Vr = !1, hn = !0, Di, On, wn, jo;
  function di() {
    e(72, ht = null), e(73, Yt = ""), e(86, xt = 1), e(98, Qn = !1), e(99, Pn = "visible"), e(100, xo = void 0), e(28, hn = !0), sn = Y.fakeElement ? [] : Y.json.transition_triggers || ["state_change", "visibility_change"], e(89, un = sn.indexOf("state_change") !== -1), fn = sn.indexOf("visibility_change") !== -1, ar && Na(ar), On == null || On(), Ar && e(102, On = ie.processVariableTriggers(Y, Y.json.variable_triggers));
  }
  function Fi(ft, en) {
    if (!Array.isArray(or) || !St || lt && (Array.isArray(en) ? en.length : 0) !== 1)
      return;
    const Dn = or.findIndex((pn) => (pn == null ? void 0 : pn.id) === ft), qn = or.slice();
    qn.splice(Dn, 1, ...(en || []).map((pn) => ({ json: pn, id: pn == null ? void 0 : pn.id }))), e(53, or = qn), St(qn.map((pn) => pn == null ? void 0 : pn.json));
  }
  function y_(ft) {
    const en = fo(ft.start_value, 1), Dn = fo(ft.end_value, 1), qn = on(ft.start_delay, 0), pn = Ui() ? 0 : on(ft.duration, 300), Eo = Sd(ft.interpolator, "ease_in_out").replace(/_/g, "-");
    switch (ft.name) {
      case "fade":
        return e(94, Br = en), e(95, Ur = Dn), `opacity ${pn}ms ${Eo} ${qn}ms`;
      case "scale":
        return e(96, Do = en), e(97, co = Dn), `transform ${pn}ms ${Eo} ${qn}ms`;
      case "native":
      case "no_animation":
        return "";
      default:
        return Y.logError(X(new Error("Unknown action_animation name"), {
          additional: { animation: ft.name }
        })), "";
    }
  }
  async function w_(ft) {
    e(99, Pn = ft);
    const en = ft === "visible" ? "in" : "out", Dn = en === "in" ? Y.json.transition_in : Y.json.transition_out;
    if (fn && Dn) {
      let qn;
      ft === "gone" && (qn = ar.getBoundingClientRect()), await Tn(), en === "in" && e(91, Zn = !0), vt.runVisibilityTransition(
        {
          ...Y.json,
          visibility: "visible"
        },
        Y,
        Dn,
        ar,
        en,
        qn
      ).then(() => {
        en === "in" && e(91, Zn = !1);
      }).catch((pn) => {
        throw en === "in" && e(91, Zn = !1), pn;
      });
    }
  }
  function Pa() {
    if (se && ar) {
      const ft = ie.getExtensionContext(Y);
      se.forEach((en) => {
        var Dn;
        (Dn = en.unmountView) == null || Dn.call(en, ar, ft);
      }), se = null;
    }
  }
  function v_() {
    if (se != null && se.length) {
      const ft = ie.getExtensionContext(Y);
      se.forEach((en) => {
        var Dn;
        (Dn = en.updateView) == null || Dn.call(en, ar, ft);
      });
    }
  }
  let Fo = null, Uo = null, _i = "desktop";
  function $i() {
    Fo != null && Fo.matches ? e(105, _i = "mobile") : Uo != null && Uo.matches ? e(105, _i = "tablet") : e(105, _i = "desktop");
  }
  let ho = null, es = "";
  function Na(ft) {
    var ts, rs, ns;
    wn == null || wn.destroy(), e(65, ar = ft), un && Y.json.transition_in && (Y.id ? vt.registerChildWithTransitionIn(Y.json, Y, Y.json.transition_in, ft).then(() => {
      e(90, In = !1);
    }).catch(($o) => {
      throw e(90, In = !1), $o;
    }) : Y.logError(X(new Error(Tl("transition_in")), { level: "warn" }))), un && Y.json.transition_out && (Y.id ? vt.registerChildWithTransitionOut(Y.json, Y, Y.json.transition_out, ft) : Y.logError(X(new Error(Tl("transition_out")), { level: "warn" }))), Y.fakeElement || (Y.json.transition_change && !Y.id && Y.logError(X(new Error(Tl("transition_change")), { level: "warn" })), vt.registerChildWithTransitionChange(Y.json, Y, Y.json.transition_change, ft).then(() => {
      e(92, Jn = !1);
    }).catch(($o) => {
      throw e(92, Jn = !1), $o;
    }));
    const en = !Y.fakeElement || Y.fakeElement === si, Dn = en ? Y.json.visibility_actions || Y.json.visibility_action && [Y.json.visibility_action] : [], qn = en ? Y.json.disappear_actions : [];
    let pn;
    (Array.isArray(Dn) && Dn.length || Array.isArray(qn) && qn.length) && (pn = yh(ft, {
      visibilityActions: Dn,
      disappearActions: qn,
      rootCtx: ie,
      componentContext: Y
    }));
    const Eo = Y.id;
    return Eo && (jo == null || jo(), jo = ie.registerId(Eo, {
      context: () => Y,
      node: () => ar
    }), vt.registerChild(Eo)), (ts = Y.json.tooltips) == null || ts.forEach(($o) => {
      ie.registerTooltip(ft, $o);
    }), xe && (xe.disconnect(), xe = void 0), xe = Sh(ar, Y, (rs = Y.json.layout_provider) == null ? void 0 : rs.width_variable_name, (ns = Y.json.layout_provider) == null ? void 0 : ns.height_variable_name), wn = {
      destroy() {
        jo && (jo(), jo = void 0), Eo && vt.unregisterChild(Eo), pn && pn.destroy();
      }
    }, wn;
  }
  function k_() {
    Y.json.focus && ((Qt || !Hl(ie.isPointerFocus)) && e(17, Vr = !0), Y.execAnyActions(I));
  }
  function j_() {
    Y.json.focus && (e(17, Vr = !1), Y.execAnyActions($));
  }
  _l(v_), cn(() => {
    var ft;
    d.forEach((en) => {
      ie.unregisterParentOf(en);
    }), e(66, d = []), xe && (xe.disconnect(), xe = void 0), (ft = Y.json.tooltips) == null || ft.forEach((en) => {
      ie.unregisterTooltip(en);
    }), On == null || On(), Pa(), ho && (ho.remove(), e(106, ho = null)), Fo && (Fo.removeEventListener("change", $i), e(103, Fo = null)), Uo && (Uo.removeEventListener("change", $i), e(104, Uo = null));
  });
  function E_(ft) {
    Wn.call(this, t, ft);
  }
  function C_(ft) {
    Wn.call(this, t, ft);
  }
  return t.$$set = (ft) => {
    "componentContext" in ft && e(0, Y = ft.componentContext), "cls" in ft && e(1, gt = ft.cls), "style" in ft && e(54, Kt = ft.style), "layoutParams" in ft && e(55, At = ft.layoutParams), "customDescription" in ft && e(56, Cr = ft.customDescription), "customPaddings" in ft && e(57, Tr = ft.customPaddings), "customActions" in ft && e(58, wr = ft.customActions), "additionalPaddings" in ft && e(59, Nr = ft.additionalPaddings), "heightByAspect" in ft && e(60, Yr = ft.heightByAspect), "parentOf" in ft && e(53, or = ft.parentOf), "parentOfSimpleMode" in ft && e(61, lt = ft.parentOfSimpleMode), "replaceItems" in ft && e(62, St = ft.replaceItems), "hasInnerFocusable" in ft && e(2, er = ft.hasInnerFocusable), "alwaysCustomFocus" in ft && e(63, Qt = ft.alwaysCustomFocus), "containerElement" in ft && e(3, pr = ft.containerElement), "devapi" in ft && e(64, _t = ft.devapi), "$$scope" in ft && e(149, Er = ft.$$scope);
  }, t.$$.update = () => {
    var ft, en, Dn, qn, pn, Eo, ts, rs, ns, $o, za;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(129, n = Y.origJson), t.$$.dirty[4] & /*origJson*/
    32 && n && di(), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[3] & /*prevTriggersUnsubscribe*/
    512 | t.$$.dirty[4] & /*$isEnabled*/
    2097152 && (Ar ? (On == null || On(), e(102, On = ie.processVariableTriggers(Y, Y.json.variable_triggers))) : On == null || On()), t.$$.dirty[0] & /*componentContext*/
    1 && Vt(e(47, o = Y.getDerivedFromVars(Y.json.focus))), t.$$.dirty[0] & /*componentContext*/
    1 && mr(e(46, i = Y.getDerivedFromVars(Y.json.border))), t.$$.dirty[0] & /*componentContext*/
    1 && sr(e(45, s = Y.getDerivedFromVars(Y.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && We(e(44, a = Y.getDerivedFromVars(Y.json.margins))), t.$$.dirty[0] & /*componentContext*/
    1 && hr(e(43, l = Y.getDerivedFromVars(Y.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && kt(e(42, c = Y.getDerivedFromVars(Y.json.alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && mt(e(41, u = Y.getDerivedFromVars(Y.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && Xt(e(40, f = Y.getDerivedFromVars(Y.json.alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && It(e(39, _ = Y.getDerivedFromVars(Y.json.alpha))), t.$$.dirty[0] & /*componentContext*/
    1 && Nt(e(38, p = Y.getDerivedFromVars(Y.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(37, m = Y.getDerivedFromVars(Y.json.background))), t.$$.dirty[0] & /*componentContext*/
    1 && dt(e(36, h = Y.getDerivedFromVars(Y.json.action_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && at(e(35, y = Y.getDerivedFromVars(Y.json.visibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Se(e(34, w = Y.getDerivedFromVars(Y.json.transform))), t.$$.dirty[0] & /*componentContext*/
    1 && te(e(33, D = Y.getDerivedFromVars(Y.json.transformations))), t.$$.dirty[0] & /*componentContext*/
    1 && jt(e(32, z = Y.getDerivedFromVars(Y.json.capture_focus_on_action))), t.$$.dirty[1] & /*parentOf, parentOfSimpleMode*/
    1077936128 | t.$$.dirty[2] & /*prevChilds*/
    16 && (d.forEach((it) => {
      ie.unregisterParentOf(it);
    }), e(66, d = []), or && or.forEach((it) => {
      it != null && it.id && (d.push(it.id), ie.registerParentOf(it.id, {
        replaceWith: Fi,
        isSingleMode: !!lt
      }));
    })), t.$$.dirty[0] & /*hasCustomFocus, borderElemStyle*/
    131088 | t.$$.dirty[2] & /*strokeWidth, strokeColor, cornersRadius, cornerRadius, borderStyle*/
    992 | t.$$.dirty[4] & /*$jsonFocus, $jsonBorder*/
    1052672) {
      const it = Vr && (De != null && De.border) ? De.border : rr;
      let rn = {}, An = {}, Nn = !1, ln = "";
      if (it) {
        if (an(it.has_shadow, !1)) {
          const gn = it.shadow;
          gn ? rn["box-shadow"] = Ch(gn) : rn["box-shadow"] = "0 1px 2px 0 rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.07)";
        }
        if (it.stroke) {
          Nn = !0, e(68, je = on(it.stroke.width, je)), e(69, H = gr(it.stroke.color, 1, H));
          const gn = ((ft = it.stroke.style) == null ? void 0 : ft.type) === "dashed" ? "dashed" : "solid";
          An["--divkit-border"] = `${_e(je + 1)} ${gn} ${H}`;
        }
        if (it.corners_radius && typeof it.corners_radius == "object") {
          e(71, Ht = Eh(it.corners_radius, Ht)), rn["border-radius"] = Is(Ht);
          const gn = {};
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((xn) => {
            gn[xn] = (Ht[xn] || 0) + 1;
          }), An["--divkit-border-radius"] = Is(gn);
        } else it.corner_radius && (e(70, Pt = on(it.corner_radius, Pt)), e(71, Ht = {
          "top-left": Pt,
          "top-right": Pt,
          "bottom-right": Pt,
          "bottom-left": Pt
        }), rn["border-radius"] = _e(Pt), An["--divkit-border-radius"] = _e(Pt + 1));
        if (Nn && je && (it.corners_radius || it.corner_radius)) {
          let gn = { ...Ht };
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((xn) => {
            gn[xn] = (gn[xn] || 0) + je / 2;
          }), ln = Is(gn);
        }
      }
      e(67, R = ri(rn, R)), e(4, Pe = ri(An, Pe)), e(22, Xe = Nn), e(5, Ze = ln);
    }
    if (t.$$.dirty[1] & /*customPaddings*/
    67108864 | t.$$.dirty[2] & /*selfPadding*/
    1024 | t.$$.dirty[4] & /*$jsonPaddings*/
    524288 && e(72, ht = vi(
      Be && !Tr ? Be : void 0,
      ht
    )), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[1] & /*additionalPaddings*/
    268435456 | t.$$.dirty[2] & /*selfPadding*/
    1024 && e(119, B = wo(jh(ht, Nr), x)), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[2] & /*margin*/
    2048 | t.$$.dirty[4] & /*$jsonMargins*/
    65536 && e(73, Yt = us(ke, x, Yt)), t.$$.dirty[0] & /*componentContext, $direction*/
    524289 | t.$$.dirty[1] & /*layoutParams*/
    16777216 | t.$$.dirty[2] & /*widthNum, widthMods*/
    20480 | t.$$.dirty[4] & /*$jsonWidth, $jsonMargins, $jsonAlignmentHorizontal*/
    458752) {
      let it, rn, An, Nn, ln = {}, gn = 0, xn = 0, Go = !1, Jo = !1;
      const En = (en = Y.json.width) == null ? void 0 : en.type;
      if (En === "fixed")
        e(76, Ve = on(Tt == null ? void 0 : Tt.value, Ve)), rn = _e(Ve);
      else if (En === "wrap_content" || (En === "match_parent" || !En) && At.parentHorizontalWrapContent)
        it = "content", (En === "wrap_content" && (Tt != null && Tt.constrained) || (En === "match_parent" || !En) && At.parentHorizontalWrapContent) && (ln["width-constrained"] = !0, At.parentContainerOrientation === "horizontal" && (xn = 1)), (En === "match_parent" || !En) && Y.logError(X(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      else if (it = "parent", At.parentContainerOrientation === "vertical" && At.parentContainerWrap && (Jo = !0, Y.logError(X(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), At.parentContainerOrientation === "vertical" && At.parentContainerKnownWidth || At.stretchWidth || At.parentContainerOrientation === "horizontal" && At.treatMatchParentAs100) {
        const tn = (qn = (Dn = x === "ltr" ? ke == null ? void 0 : ke.start : ke == null ? void 0 : ke.end) != null ? Dn : ke == null ? void 0 : ke.left) != null ? qn : 0, zn = (Eo = (pn = x === "ltr" ? ke == null ? void 0 : ke.end : ke == null ? void 0 : ke.start) != null ? pn : ke == null ? void 0 : ke.right) != null ? Eo : 0, Sn = `calc(100% - ${dn(tn + zn)})`;
        At.stretchWidth ? (rn = "0", An = Sn) : rn = Sn;
      } else At.parentContainerOrientation === "horizontal" && (gn = Tt && "weight" in Tt && Tt.weight || 1, At.parentContainerWrap && (Go = !0));
      if (En === "wrap_content" || En === "match_parent") {
        const tn = Tt;
        let zn, Sn;
        tn.min_size && Ln(tn.min_size.value) && (zn = tn.min_size.value), tn.max_size && Ln(tn.max_size.value) && (Sn = tn.max_size.value), zn !== void 0 && Sn !== void 0 && zn > Sn && (Y.logError(X(new Error("Element has incorrect width constraints (min size is bigger than max size)."), {
          additional: {
            id: Y.json.id,
            minSize: zn + "dp",
            maxSize: Sn + "dp"
          }
        })), zn = Sn = void 0), zn !== void 0 && (An = _e(zn)), Sn !== void 0 && (Nn = _e(Sn));
      }
      if (it === "parent")
        ln["halign-self"] = "stretch";
      else {
        const tn = nr;
        tn === "left" || tn === "center" || tn === "right" || tn === "start" || tn === "end" ? ln["halign-self"] = (x === "ltr" ? qh : Kh)[tn] : ln["halign-self"] = At.parentHAlign || "start";
      }
      it && (ln.width = it), e(75, kr = rn), e(6, Wr = An), e(7, Mn = Nn), e(77, Zr = gn), e(78, $r = xn), e(74, Mr = ri(ln, Mr)), e(79, kn = Go), e(23, v = Jo);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*heightByAspect, layoutParams*/
    553648128 | t.$$.dirty[2] & /*heightNum, heightMods*/
    1310720 | t.$$.dirty[4] & /*$jsonHeight, $jsonMargins, $jsonAlignmentVertical*/
    114688) {
      let it, rn, An, Nn, ln = {}, gn = 0, xn = 0, Go = !1, Jo = !1;
      const En = (ts = Y.json.height) == null ? void 0 : ts.type;
      if (!Yr) if (En === "fixed")
        e(82, et = on(ye == null ? void 0 : ye.value, et)), rn = _e(et);
      else if (En === "match_parent" && !At.parentVerticalWrapContent)
        if (it = "parent", At.parentContainerOrientation === "horizontal" && At.parentContainerWrap && (Jo = !0, Y.logError(X(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), At.parentContainerOrientation === "horizontal" && At.parentContainerKnownHeight || At.stretchHeight || At.parentContainerOrientation === "vertical" && At.treatMatchParentAs100) {
          const tn = (rs = ke == null ? void 0 : ke.top) != null ? rs : 0, zn = (ns = ke == null ? void 0 : ke.bottom) != null ? ns : 0, Sn = `calc(100% - ${dn(tn + zn)})`;
          At.stretchHeight ? (rn = "0", An = Sn) : rn = Sn;
        } else At.parentContainerOrientation === "vertical" && (gn = (ye == null ? void 0 : ye.weight) || 1, At.parentContainerWrap && (Go = !0));
      else
        it = "content", (En === "wrap_content" && (ye != null && ye.constrained) || En === "match_parent" && At.parentVerticalWrapContent) && (ln["height-constrained"] = !0, At.parentContainerOrientation === "vertical" && (xn = 1)), En === "match_parent" && Y.logError(X(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      if (!Yr && (En === "match_parent" || En === "wrap_content")) {
        const tn = ye;
        let zn, Sn;
        tn.min_size && Ln(tn.min_size.value) && (zn = tn.min_size.value), tn.max_size && Ln(tn.max_size.value) && (Sn = tn.max_size.value), zn !== void 0 && Sn !== void 0 && zn > Sn && (Y.logError(X(new Error("Element has incorrect height constraints (min size is bigger than max size)."), {
          additional: {
            id: Y.json.id,
            minSize: zn + "dp",
            maxSize: Sn + "dp"
          }
        })), zn = Sn = void 0), zn !== void 0 && (An = _e(zn)), Sn !== void 0 && (Nn = _e(Sn));
      }
      if (it === "parent")
        ln["valign-self"] = "stretch";
      else {
        const tn = zt;
        tn === "top" || tn === "center" || tn === "bottom" || tn === "baseline" && At.parentContainerOrientation === "horizontal" ? ln["valign-self"] = Yh[tn] : ln["valign-self"] = At.parentVAlign || "start";
      }
      it && (ln.height = it), e(81, S = rn), e(8, le = An), e(9, W = Nn), e(83, Fe = gn), e(84, Zt = xn), e(80, C = ri(ln, C)), e(85, Ft = Go), e(24, Qe = Jo);
    }
    if (t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(128, ee = At.overlapParent ? !0 : void 0), t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(121, ue = At.gridArea ? `${At.gridArea.y + 1}/${At.gridArea.x + 1}/span ${At.gridArea.rowSpan}/span ${At.gridArea.colSpan}` : void 0), t.$$.dirty[2] & /*alpha*/
    16777216 | t.$$.dirty[4] & /*$jsonAlpha*/
    8192 && (e(86, xt = wh(ot, xt)), e(87, yt = xt === 1 ? void 0 : xt)), t.$$.dirty[0] & /*$jsonAccessibility*/
    1048576 | t.$$.dirty[1] & /*customDescription*/
    33554432 && (e(21, j = void 0), pt && !Cr)) {
      const it = ii(pt);
      it && (e(21, j = {}), e(21, j["aria-label"] = it, j));
    }
    if (t.$$.dirty[0] & /*hasCustomFocus, background, backgroundRadius, hasSeparateBg, $direction*/
    658464 | t.$$.dirty[4] & /*$jsonFocus, $jsonBackground*/
    6144 && (e(10, Ir = Vr && (De != null && De.background) ? De.background : Z), e(88, Dr = {}), e(11, jn = !1), Array.isArray(Ir) && (e(11, jn = Ir.some((it) => it.type === "image" || it.type === "nine_patch_image") || !!Ze), !jn))) {
      const it = pl(Ir, x);
      e(88, Dr["background-color"] = it.color, Dr), e(88, Dr["background-image"] = it.image, Dr), e(88, Dr["background-size"] = it.size, Dr), e(88, Dr["background-position"] = it.position, Dr), e(88, Dr["background-repeat"] = "no-repeat", Dr);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(90, In = void 0), un && Y.id && Y.json.transition_in && ie.isRunning("stateChange") && e(90, In = !0)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(92, Jn = void 0), un && Y.id && ie.isRunning("stateChange") && vt.hasTransitionChange(Y.id) && e(92, Jn = !0)), t.$$.dirty[0] & /*componentContext, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions*/
    61441 | t.$$.dirty[1] & /*customActions*/
    134217728) {
      const it = Y.json;
      let rn = it.actions || it.action && [it.action] || [], An = it.doubletap_actions || [], Nn = it.longtap_actions || [], ln = (($o = it.focus) == null ? void 0 : $o.on_focus) || [], gn = ((za = it.focus) == null ? void 0 : za.on_blur) || [], xn = it.press_start_actions || [], Go = it.press_end_actions || [], Jo = it.hover_start_actions || [], En = it.hover_end_actions || [];
      Y.fakeElement && Y.fakeElement !== si ? (rn = [], An = [], Nn = [], ln = [], gn = []) : (Array.isArray(rn) || (rn = [], Y.logError(X(new Error("Actions should be array")))), Array.isArray(An) || (An = [], Y.logError(X(new Error("DoubleTapActions should be array")))), Array.isArray(Nn) || (Nn = [], Y.logError(X(new Error("LongTapActions should be array")))), Array.isArray(ln) || (ln = [], Y.logError(X(new Error("FocusActions should be array")))), Array.isArray(gn) || (gn = [], Y.logError(X(new Error("BlurActions should be array")))), Array.isArray(xn) || (xn = [], Y.logError(X(new Error("PressStartActions should be array")))), Array.isArray(Go) || (Go = [], Y.logError(X(new Error("PressEndActions should be array")))), Array.isArray(Jo) || (Jo = [], Y.logError(X(new Error("HoverStartActions should be array")))), Array.isArray(En) || (En = [], Y.logError(X(new Error("HoverEndActions should be array"))))), (rn.length || An.length || Nn.length || L.length || Ce.length || we.length || Wt.length) && wr && (rn = [], An = [], Nn = [], e(12, L = []), e(13, Ce = []), e(14, we = []), e(15, Wt = []), Y.logError(X(new Error(`Cannot use action on component "${wr}"`)))), e(25, io = rn), e(26, qt = An), e(27, b = Nn), I = ln, $ = gn, e(12, L = xn), e(13, Ce = Go), e(14, we = Jo), e(15, Wt = En);
    }
    if (t.$$.dirty[0] & /*actionAnimationList*/
    65536 | t.$$.dirty[4] & /*$jsonActionAnimation*/
    1024 && st && (e(16, Gt = fs(st)), e(93, Xr = Gt.map(y_).filter(Boolean).join(", "))), t.$$.dirty[4] & /*$jsonCaptureFocusOnAction*/
    512 && typeof ct == "boolean" && e(28, hn = ct), t.$$.dirty[3] & /*visibility, isVisibilityInited*/
    96 | t.$$.dirty[4] & /*$jsonVisibility*/
    256) {
      const it = Pn, rn = kh(Re, Pn);
      it !== rn && (Qn && (Pn === "visible" || rn === "visible") ? w_(rn) : e(99, Pn = rn)), Qn || e(98, Qn = !0);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*currentNode*/
    8 | t.$$.dirty[3] & /*prevExtensionsVal*/
    256 && Y.json && ar && !Zi(Y.json.extensions, Di)) {
      let it = e(101, Di = Y.json.extensions);
      Tn().then(() => {
        if (!(it !== Di || !ar) && (Pa(), Array.isArray(Y.json.extensions))) {
          const rn = ie.getExtensionContext(Y);
          se = Y.json.extensions.map((An) => {
            var gn;
            const Nn = An.id;
            if (!Nn)
              return;
            const ln = ie.getExtension(Nn, An.params);
            return ln && ((gn = ln.mountView) == null || gn.call(ln, ar, rn)), ln;
          }).filter(Wo);
        }
      });
    }
    if (t.$$.dirty[0] & /*hasCustomFocus, componentContext*/
    131073 | t.$$.dirty[1] & /*layoutParams*/
    16777216 | t.$$.dirty[2] & /*widthMods, heightMods, stateChangingInProgress, visibilityChangingInProgress, transitionChangeInProgress*/
    1879314432 | t.$$.dirty[3] & /*visibility, actionAnimationTransition*/
    65 | t.$$.dirty[4] & /*parentOverlapMod*/
    16 && e(31, M = {
      ...Mr,
      ...C,
      "parent-overlap": ee,
      "scroll-snap": At.scrollSnap,
      "hide-on-transition-in": In || Zn || Jn,
      visibility: Pn,
      "has-action-animation": !!Xr,
      "parent-flex": At.parentContainerOrientation || void 0,
      "parent-grid": !!At.gridArea || void 0,
      "has-custom-focus": !!(Vr && Y.json.focus)
    }), t.$$.dirty[4] & /*$jsonTransformations, $jsonTransform*/
    192) {
      let it;
      Array.isArray(Je) ? it = Je : ge && ge.rotation !== void 0 && (it = [
        {
          type: "rotation",
          angle: ge.rotation,
          pivot_x: ge.pivot_x,
          pivot_y: ge.pivot_y
        }
      ]), it ? e(100, xo = Ih(it)) : e(100, xo = void 0);
    }
    if (t.$$.dirty[2] & /*widthFill, heightFill, widthFlexGrow, heightFlexGrow*/
    10649600 && e(115, q = kn || Ft ? "100%" : Zr || Fe ? 0 : void 0), t.$$.dirty[0] & /*componentContext*/
    1 && e(30, ae = Y.json["custom-class"] || ""), t.$$.dirty[0] & /*componentContext*/
    1 && e(113, A = Y.json.position), t.$$.dirty[0] & /*componentContext*/
    1 && e(114, F = Y.json.sticky_top), t.$$.dirty[0] & /*componentContext*/
    1 && e(112, P = Y.json.sticky_bottom), t.$$.dirty[0] & /*componentContext*/
    1 && e(111, O = Y.json.z_index), t.$$.dirty[0] & /*componentContext*/
    1 && e(110, J = Y.json.cursor), t.$$.dirty[0] & /*componentContext*/
    1 && e(109, he = Y.json.backdrop_filter), t.$$.dirty[0] & /*componentContext*/
    1 && e(108, fe = Y.json.overflow), t.$$.dirty[0] & /*componentContext*/
    1 && e(107, Ae = Y.json["box-shadow"]), t.$$.dirty[0] & /*componentContext*/
    1 && e(116, me = Y.json.custom_transition), t.$$.dirty[0] & /*componentContext*/
    1 && e(127, Ie = Y.json.responsive), t.$$.dirty[3] & /*responsiveMobileQuery, responsiveTabletQuery*/
    3072 | t.$$.dirty[4] & /*responsiveConfig*/
    8 && (Ie && typeof Ie == "object" && typeof window < "u" ? (Fo || (e(103, Fo = window.matchMedia("(max-width: 767px)")), e(104, Uo = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), Fo.addEventListener("change", $i), Uo.addEventListener("change", $i)), $i()) : e(105, _i = "desktop")), t.$$.dirty[3] & /*responsiveBreakpoint*/
    4096 | t.$$.dirty[4] & /*responsiveConfig*/
    8 && e(126, re = _i !== "desktop" && (Ie == null ? void 0 : Ie[_i]) || null), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(120, tt = (() => {
      if (!(re != null && re.paddings)) return;
      const it = re.paddings;
      return wo(vi(it, null), x);
    })()), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(118, qe = (() => {
      if (!(re != null && re.margins)) return;
      const it = re.margins;
      return us(it, x, "");
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(123, Ke = (() => {
      if (re != null && re["max-width"] && typeof re["max-width"] == "string")
        return re["max-width"];
      if (!(re != null && re.max_width)) return;
      const it = re.max_width;
      if (it.type === "fixed" && it.value) return it.value + "px";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(124, ve = (() => {
      if (!(re != null && re.width)) return;
      const it = re.width;
      if (it.type === "fixed" && it.value) return _e(it.value);
      if (it.type === "match_parent") return "100%";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(122, Te = (() => {
      if (!(re != null && re.height)) return;
      const it = re.height;
      if (it.type === "fixed" && it.value) return _e(it.value);
      if (it.type === "match_parent") return "100%";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(117, pe = (re == null ? void 0 : re.opacity) !== void 0 ? re.opacity : void 0), t.$$.dirty[4] & /*activeResponsive*/
    4 && (re == null || re.visibility), t.$$.dirty[0] & /*componentContext*/
    1 && e(125, ce = Y.json.hover), t.$$.dirty[0] & /*hoverClassName*/
    262144 | t.$$.dirty[3] & /*hoverStyleEl*/
    8192 | t.$$.dirty[4] & /*hoverConfig*/
    2)
      if (ce && typeof ce == "object" && typeof document < "u") {
        es || e(18, es = "divkit-hover-" + Math.random().toString(36).slice(2, 9));
        let it = "";
        ce.background_color && (it += `background-color: ${ce.background_color} !important;`), ce.opacity !== void 0 && (it += `opacity: ${ce.opacity} !important;`), ce.scale !== void 0 && (it += `scale: ${ce.scale} !important;`), ce.color && (it += `color: ${ce.color} !important;`), ce.border_color && (it += `border-color: ${ce.border_color} !important;`), (ce["box-shadow"] || ce.box_shadow) && (it += `box-shadow: ${ce["box-shadow"] || ce.box_shadow} !important;`), it && (ho || (e(106, ho = document.createElement("style")), document.head.appendChild(ho)), e(106, ho.textContent = `.${es}:hover { ${it} }`, ho));
      } else ho && (ho.remove(), e(106, ho = null), e(18, es = ""));
    t.$$.dirty[0] & /*widthMin, widthMax, componentContext, heightMin, heightMax*/
    961 | t.$$.dirty[1] & /*style*/
    8388608 | t.$$.dirty[2] & /*backgroundStyle, borderStyle, width, height, margin, opacity, widthFlexGrow, heightFlexGrow, widthFlexShrink, heightFlexShrink*/
    107587616 | t.$$.dirty[3] & /*responsiveMaxWidth, responsiveHeight, gridArea, responsivePadding, padding, responsiveMargin, responsiveOpacity, customTransition, actionAnimationTransition, transform, flexBasis, customPosition, customStickyTop, customStickyBottom, customZIndex, customCursor, customBackdropFilter, customOverflow, customBoxShadow, animationOpacityStart, animationOpacityEnd, animationScaleStart, animationScaleEnd*/
    2147467423 | t.$$.dirty[4] & /*responsiveWidth*/
    1 && e(29, be = {
      ...Kt,
      ...Dr,
      ...R,
      width: ve || kr,
      "min-width": Wr,
      "max-width": Ke || Mn || (() => {
        const it = Y.json.max_width;
        if ((it == null ? void 0 : it.type) === "fixed" && (it != null && it.value)) return _e(it.value);
      })(),
      height: Te || S,
      "min-height": le,
      // input max-height
      "max-height": W || (Kt == null ? void 0 : Kt["max-height"]) || (() => {
        const it = Y.json.max_height;
        if ((it == null ? void 0 : it.type) === "fixed" && (it != null && it.value)) return _e(it.value);
      })(),
      "grid-area": ue,
      padding: tt || B,
      margin: qe || Yt,
      opacity: pe !== void 0 ? pe : yt,
      transition: me || Xr,
      "transform-origin": xo ? "0 0" : void 0,
      transform: xo,
      "flex-grow": Zr || Fe || void 0,
      "flex-shrink": $r || Zt ? 1 : void 0,
      "flex-basis": q,
      position: A,
      top: A === "sticky" && F !== void 0 ? _e(F) : void 0,
      bottom: A === "sticky" && P !== void 0 ? _e(P) : void 0,
      "z-index": O,
      cursor: J,
      "backdrop-filter": he,
      "-webkit-backdrop-filter": he,
      overflow: fe,
      "box-shadow": Ae,
      "--divkit-animation-opacity-start": Br,
      "--divkit-animation-opacity-end": Ur,
      "--divkit-animation-scale-start": Do,
      "--divkit-animation-scale-end": co
    });
  }, [
    Y,
    gt,
    er,
    pr,
    Pe,
    Ze,
    Wr,
    Mn,
    le,
    W,
    Ir,
    jn,
    L,
    Ce,
    we,
    Wt,
    Gt,
    Vr,
    es,
    x,
    pt,
    j,
    Xe,
    v,
    Qe,
    io,
    qt,
    b,
    hn,
    be,
    ae,
    M,
    z,
    D,
    w,
    y,
    h,
    m,
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
    ir,
    vr,
    Na,
    k_,
    j_,
    or,
    Kt,
    At,
    Cr,
    Tr,
    wr,
    Nr,
    Yr,
    lt,
    St,
    Qt,
    _t,
    ar,
    d,
    R,
    je,
    H,
    Pt,
    Ht,
    ht,
    Yt,
    Mr,
    kr,
    Ve,
    Zr,
    $r,
    kn,
    C,
    S,
    et,
    Fe,
    Zt,
    Ft,
    xt,
    yt,
    Dr,
    un,
    In,
    Zn,
    Jn,
    Xr,
    Br,
    Ur,
    Do,
    co,
    Qn,
    Pn,
    xo,
    Di,
    On,
    Fo,
    Uo,
    _i,
    ho,
    Ae,
    fe,
    he,
    J,
    O,
    P,
    A,
    F,
    q,
    me,
    pe,
    qe,
    B,
    tt,
    ue,
    Te,
    Ke,
    ve,
    ce,
    re,
    Ie,
    ee,
    n,
    ge,
    Je,
    Re,
    ct,
    st,
    Z,
    De,
    ot,
    zt,
    ye,
    ke,
    nr,
    Tt,
    Be,
    rr,
    Ar,
    Ot,
    E_,
    C_,
    Er
  ];
}
class vn extends Hr {
  constructor(r) {
    super(), Rr(
      this,
      r,
      Xh,
      Jh,
      Fr,
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
const Zh = "appkit-text", Qh = "appkit-text_halign_start", xh = "appkit-text_halign_center", $h = "appkit-text_halign_end", ep = "appkit-text_valign_start", tp = "appkit-text_valign_center", rp = "appkit-text_valign_end", np = "appkit-text_valign_baseline", op = "appkit-text__inner", ip = "appkit-text_singleline", sp = "appkit-text_multiline", lp = "appkit-text_truncate_none", ap = "appkit-text__inner_gradient", cp = "appkit-text__image", up = "appkit-text__image_hidden", go = {
  "text-range": "appkit-text-range",
  text: Zh,
  text_halign_start: Qh,
  text_halign_center: xh,
  text_halign_end: $h,
  text_valign_start: ep,
  text_valign_center: tp,
  text_valign_end: rp,
  text_valign_baseline: np,
  text__inner: op,
  text_singleline: ip,
  text_multiline: sp,
  text_truncate_none: lp,
  "text__inner_has-cloud-bg": "appkit-text__inner_has-cloud-bg",
  "text__inner_cloud-bg": "appkit-text__inner_cloud-bg",
  text__inner_gradient: ap,
  "text__image-wrapper": "appkit-text__image-wrapper",
  "text__image-wrapper_crop": "appkit-text__image-wrapper_crop",
  "text__image-wrapper_align_top": "appkit-text__image-wrapper_align_top",
  "text__image-wrapper_align_center": "appkit-text__image-wrapper_align_center",
  "text__image-wrapper_align_bottom": "appkit-text__image-wrapper_align_bottom",
  "text__image-wrapper_align_baseline": "appkit-text__image-wrapper_align_baseline",
  text__image: cp,
  text__image_hidden: up,
  "text_has-focus-color": "appkit-text_has-focus-color"
}, Mo = {
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
function Xn(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e <= 0 ? r : e;
}
function fp(t) {
  if (t === "light" || t === "medium" || t === "bold" || t === "regular" || t === "semi_bold")
    return t === "medium" ? 500 : t === "bold" ? 700 : t === "light" ? 300 : t === "semi_bold" ? 600 : 400;
}
function ki(t, r, e) {
  return typeof r == "number" && r > 0 ? r : fp(t) || e;
}
function ql(t, r) {
  if (!t)
    return {};
  const e = {};
  for (const n of ["left", "top", "right", "bottom", "start", "end"]) {
    const o = t[n];
    o && (e[n] = o * r);
  }
  return e;
}
function Gi(t) {
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
function lc(t) {
  let r, e, n, o, i, s, a;
  return {
    c() {
      r = Qr("svg"), e = Qr("defs"), n = Qr("filter"), o = Qr("feGaussianBlur"), i = Qr("feColorMatrix"), a = Qr("feBlend"), this.h();
    },
    l(l) {
      r = nn(l, "svg", { class: !0 });
      var c = Ee(r);
      e = nn(c, "defs", {});
      var u = Ee(e);
      n = nn(u, "filter", { id: !0 });
      var f = Ee(n);
      o = nn(f, "feGaussianBlur", {
        in: !0,
        result: !0,
        stdDeviation: !0
      }), Ee(o).forEach(k), i = nn(f, "feColorMatrix", {
        in: !0,
        result: !0,
        type: !0,
        values: !0
      }), Ee(i).forEach(k), a = nn(f, "feBlend", { in: !0, in2: !0 }), Ee(a).forEach(k), f.forEach(k), u.forEach(k), c.forEach(k), this.h();
    },
    h() {
      g(o, "in", "SourceGraphic"), g(o, "result", "blurred"), g(o, "stdDeviation", "3"), g(i, "in", "blurred"), g(i, "result", "withMatrix"), g(i, "type", "matrix"), g(i, "values", s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      t[5] + " -" + /*borderRadius*/
      t[5]), g(a, "in", "SourceGraphic"), g(a, "in2", "withMatrix"), g(
        n,
        "id",
        /*cloudFilterId*/
        t[11]
      ), g(r, "class", Mo["text-range__cloud-svg"]);
    },
    m(l, c) {
      K(l, r, c), Et(r, e), Et(e, n), Et(n, o), Et(n, i), Et(n, a);
    },
    p(l, c) {
      c[0] & /*borderRadius*/
      32 && s !== (s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      l[5] + " -" + /*borderRadius*/
      l[5]) && g(i, "values", s);
    },
    d(l) {
      l && k(r);
    }
  };
}
function ac(t) {
  let r;
  return {
    c() {
      r = Me("span"), this.h();
    },
    l(e) {
      r = Ne(e, "SPAN", { class: !0 }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", Mo["text-range__top-offset"]), T(
        r,
        "margin-top",
        /*topOffset*/
        t[9]
      );
    },
    m(e, n) {
      K(e, r, n);
    },
    p(e, n) {
      n[0] & /*topOffset*/
      512 && T(
        r,
        "margin-top",
        /*topOffset*/
        e[9]
      );
    },
    d(e) {
      e && k(r);
    }
  };
}
function cc(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Me("div"), e = Me("div"), n = Me("div"), o = Me("div"), i = Me("div"), s = Me("div"), this.h();
    },
    l(a) {
      r = Ne(a, "DIV", { class: !0 }), Ee(r).forEach(k), e = Ne(a, "DIV", { class: !0 }), Ee(e).forEach(k), n = Ne(a, "DIV", { class: !0 }), Ee(n).forEach(k), o = Ne(a, "DIV", { class: !0 }), Ee(o).forEach(k), i = Ne(a, "DIV", { class: !0 }), Ee(i).forEach(k), s = Ne(a, "DIV", { class: !0 }), Ee(s).forEach(k), this.h();
    },
    h() {
      g(r, "class", Mo["text-range__mask-animation"]), g(e, "class", Mo["text-range__mask-animation"]), g(n, "class", Mo["text-range__mask-animation"]), g(o, "class", Mo["text-range__mask-animation"]), g(i, "class", Mo["text-range__mask-animation"]), g(s, "class", Mo["text-range__mask-animation"]);
    },
    m(a, l) {
      K(a, r, l), K(a, e, l), K(a, n, l), K(a, o, l), K(a, i, l), K(a, s, l);
    },
    d(a) {
      a && (k(r), k(e), k(n), k(o), k(i), k(s));
    }
  };
}
function dp(t) {
  let r = (
    /*text*/
    (t[1] || "​") + ""
  ), e, n = (
    /*maskColor*/
    t[4] && cc()
  );
  return {
    c() {
      n && n.c(), e = Gn(r);
    },
    l(o) {
      n && n.l(o), e = to(o, r);
    },
    m(o, i) {
      n && n.m(o, i), K(o, e, i);
    },
    p(o, i) {
      /*maskColor*/
      o[4] ? n || (n = cc(), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null), i[0] & /*text*/
      2 && r !== (r = /*text*/
      (o[1] || "​") + "") && ao(e, r);
    },
    d(o) {
      o && k(e), n && n.d(o);
    }
  };
}
function _p(t) {
  let r, e, n, o, i = (
    /*cloudBg*/
    t[3] && /*hasCloudBg*/
    t[6] && lc(t)
  ), s = (
    /*topOffset*/
    t[9] && ac(t)
  );
  return n = new ml({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      cls: wt(
        "text-range",
        Mo,
        /*mods*/
        t[8]
      ),
      actions: (
        /*actions*/
        t[2]
      ),
      style: fr(
        /*style*/
        t[7]
      ),
      $$slots: { default: [dp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      i && i.c(), r = He(), s && s.c(), e = He(), Ut(n.$$.fragment);
    },
    l(a) {
      i && i.l(a), r = He(), s && s.l(a), e = He(), Jt(n.$$.fragment, a);
    },
    m(a, l) {
      i && i.m(a, l), K(a, r, l), s && s.m(a, l), K(a, e, l), Lt(n, a, l), o = !0;
    },
    p(a, l) {
      /*cloudBg*/
      a[3] && /*hasCloudBg*/
      a[6] ? i ? i.p(a, l) : (i = lc(a), i.c(), i.m(r.parentNode, r)) : i && (i.d(1), i = null), /*topOffset*/
      a[9] ? s ? s.p(a, l) : (s = ac(a), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null);
      const c = {};
      l[0] & /*componentContext*/
      1 && (c.componentContext = /*componentContext*/
      a[0]), l[0] & /*mods*/
      256 && (c.cls = wt(
        "text-range",
        Mo,
        /*mods*/
        a[8]
      )), l[0] & /*actions*/
      4 && (c.actions = /*actions*/
      a[2]), l[0] & /*style*/
      128 && (c.style = fr(
        /*style*/
        a[7]
      )), l[0] & /*text, maskColor*/
      18 | l[1] & /*$$scope*/
      64 && (c.$$scope = { dirty: l, ctx: a }), n.$set(c);
    },
    i(a) {
      o || (U(n.$$.fragment, a), o = !0);
    },
    o(a) {
      ne(n.$$.fragment, a), o = !1;
    },
    d(a) {
      a && (k(r), k(e)), i && i.d(a), s && s.d(a), Rt(n, a);
    }
  };
}
function hp(t, r, e) {
  let n, o, i, s, a, l, c, u, f, { componentContext: _ } = r, { text: p } = r, { rootFontSize: m } = r, { textStyles: h = {} } = r, { singleline: y = !1 } = r, { actions: w = void 0 } = r, { cloudBg: D = !1 } = r, { cloudBgId: z = "" } = r, { customLineHeight: B = null } = r;
  const ee = zr(xr), ue = ee.direction;
  Cn(t, ue, (ve) => e(35, f = ve));
  const M = D && z || ee.genId("text-range") || "";
  let q = "none", ae = 12, A = 1.25, F = "", P, O = "", J = "", he = "", fe, Ae = null, me, Ie, re = !1, tt, qe, Ke;
  return t.$$set = (ve) => {
    "componentContext" in ve && e(0, _ = ve.componentContext), "text" in ve && e(1, p = ve.text), "rootFontSize" in ve && e(12, m = ve.rootFontSize), "textStyles" in ve && e(13, h = ve.textStyles), "singleline" in ve && e(14, y = ve.singleline), "actions" in ve && e(2, w = ve.actions), "cloudBg" in ve && e(3, D = ve.cloudBg), "cloudBgId" in ve && e(15, z = ve.cloudBgId), "customLineHeight" in ve && e(16, B = ve.customLineHeight);
  }, t.$$.update = () => {
    var ve, Te, pe, ce, be, x, ge, oe;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && _.json && (e(17, q = "none"), e(18, ae = 12), e(19, A = 1.25), e(20, F = ""), e(21, P = void 0), e(22, O = ""), e(23, J = ""), e(24, he = ""), e(25, fe = void 0), e(26, Ae = null), e(27, me = void 0), e(28, Ie = void 0), e(29, re = !1), e(4, tt = void 0), e(30, qe = void 0), e(31, Ke = void 0)), t.$$.dirty[0] & /*textStyles*/
    8192) {
      let Se = "none";
      (h.underline || h.strike) && (h.underline === "single" && h.strike === "single" ? Se = "both" : h.underline === "single" ? Se = "underline" : h.strike === "single" && (Se = "strike")), e(17, q = Se);
    }
    if (t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(18, ae = Xn(h.font_size, ae)), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && Rn(h.line_height) && e(19, A = Number(h.line_height) / ae), t.$$.dirty[0] & /*textStyles*/
    8192 && Ln(h.letter_spacing) && e(20, F = _e(h.letter_spacing)), t.$$.dirty[0] & /*textStyles, fontWeight*/
    2105344 && (e(21, P = ki(h.font_weight, h.font_weight_value, P)), typeof h.font_family == "string" && h.font_family ? e(22, O = ee.typefaceProvider(h.font_family, { fontWeight: P || 400 })) : e(22, O = "")), t.$$.dirty[0] & /*textStyles, fontVariationSettings*/
    8396800) {
      const Se = Gi(h.font_variation_settings);
      Se !== J && e(23, J = Se);
    }
    if (t.$$.dirty[0] & /*textStyles, color*/
    16785408 && e(24, he = gr(h.text_color, 1, he)), t.$$.dirty[0] & /*textStyles*/
    8192 && e(9, n = h.top_offset ? _e(h.top_offset) : ""), t.$$.dirty[0] & /*textStyles*/
    8192 && e(6, o = ((ve = h.background) == null ? void 0 : ve.type) === "cloud"), t.$$.dirty[0] & /*textStyles*/
    8192 && e(33, i = ((Te = h.background) == null ? void 0 : Te.type) === "cloud" ? h.background.paddings : void 0), t.$$.dirty[0] & /*textStyles, cloudBg, hasCloudBg, fontSize*/
    270408 | t.$$.dirty[1] & /*$direction*/
    16) {
      const Se = h.mask, Je = !!(Se && (Se.type === "solid" || Se.type === "particles") && Se.is_enabled !== !1 && Se.color);
      if (D || Je ? e(25, fe = "transparent") : e(25, fe = void 0), e(29, re = !1), e(4, tt = void 0), e(30, qe = void 0), e(31, Ke = void 0), D)
        o ? e(28, Ie = uh(h.background.color, 255, "transparent")) : e(28, Ie = void 0);
      else if (Se && Je) {
        if (Se.type === "solid")
          e(28, Ie = gr(Se.color));
        else if (Se.type === "particles") {
          const Ye = Xn((pe = Se.particle_size) == null ? void 0 : pe.value, 1), te = _e(Ye * 10 / ae), Re = Xn(Se.density, 0.8), ze = gr(Se.color);
          e(28, Ie = void 0), e(4, tt = ze), e(30, qe = te), e(31, Ke = String(Re)), e(29, re = Se.is_animated === !0);
        }
      } else ((ce = h.background) == null ? void 0 : ce.type) === "solid" ? e(28, Ie = pl([h.background], f).color) : e(28, Ie = void 0);
    }
    t.$$.dirty[0] & /*textStyles*/
    8192 && ((be = h.border) != null && be.stroke && h.border.stroke.color && gr(h.border.stroke.color) !== "transparent" && Rn(h.border.stroke.width) && ((x = h.background) == null ? void 0 : x.type) !== "cloud" ? e(26, Ae = {
      color: h.border.stroke.color,
      width: h.border.stroke.width,
      corner_radius: h.border.corner_radius
    }) : e(26, Ae = null)), t.$$.dirty[0] & /*cloudBg, hasCloudBg, textStyles, border*/
    67117128 && e(5, s = D ? o && h.background.corner_radius || 0 : Ae ? Xn(Ae.corner_radius, 0) : 0), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(32, a = h.text_shadow ? Ah(h.text_shadow, ae) : void 0), t.$$.dirty[0] & /*textStyles*/
    8192 && typeof h.baseline_offset == "number" && e(27, me = h.baseline_offset), t.$$.dirty[0] & /*textStyles*/
    8192 && e(34, l = typeof h.baseline_offset == "number" ? void 0 : h.alignment_vertical), t.$$.dirty[0] & /*singleline, decoration, hasCloudBg, customLineHeight, verticalAlign, maskColor, maskAnimated*/
    671301712 | t.$$.dirty[1] & /*customVerticalAlign*/
    8 && e(8, c = {
      singleline: y,
      decoration: q,
      align: l,
      cloud: o,
      "relative-vertical-align": !!(B && me),
      "has-particles-mask": !!tt,
      "mask-animated": re
    }), t.$$.dirty[0] & /*fontSize, rootFontSize, lineHeight, letterSpacing, fontWeight, fontFamily, customLineHeight, verticalAlign, cloudBg, hasCloudBg, cloudBgId, colorOverride, color, background, textStyles, border, borderRadius, fontVariationSettings, maskColor, maskSize*/
    1610461304 | t.$$.dirty[1] & /*customVerticalAlign, cloudPadding, $direction, shadow, maskDensity*/
    31 && e(7, u = {
      "font-size": _e(ae * 10 / m),
      "line-height": l ? "normal" : A,
      "letter-spacing": F,
      "font-weight": P,
      "font-family": O,
      "vertical-align": B || me === void 0 ? void 0 : _e(me * 10 / ae),
      top: B && me !== void 0 ? _e(-me * 10 / ae) : void 0,
      margin: i ? wo(ql(i, -10 / ae), f) : void 0,
      padding: i ? wo(ql(i, 10 / ae), f) : void 0,
      filter: D && o && !z ? `url(#${M})` : a,
      color: fe || he,
      background: Ie,
      opacity: D && o && !z ? ((oe = (ge = yo(h.background.color)) == null ? void 0 : ge.a) != null ? oe : 255) / 255 : void 0,
      /**
      * box-shadow instead of border because:
      * 1) Doesn't take space as border does
      * 2) There should not be a border-radius on line breaks, but there should be a border
      */
      "box-shadow": Ae ? `inset 0 0 0 ${_e(Ae.width * 10 / ae)} ${Ae.color}` : void 0,
      "border-radius": s ? _e(s * 10 / ae) : void 0,
      "font-feature-settings": h.font_feature_settings || void 0,
      "font-variation-settings": J || void 0,
      "--divkit-text-mask-color": tt,
      "--divkit-text-mask-size": qe,
      "--divkit-text-mask-density": Ke
    });
  }, [
    _,
    p,
    w,
    D,
    tt,
    s,
    o,
    u,
    c,
    n,
    ue,
    M,
    m,
    h,
    y,
    z,
    B,
    q,
    ae,
    A,
    F,
    P,
    O,
    J,
    he,
    fe,
    Ae,
    me,
    Ie,
    re,
    qe,
    Ke,
    a,
    i,
    l,
    f
  ];
}
class ka extends Hr {
  constructor(r) {
    super(), Rr(
      this,
      r,
      hp,
      _p,
      Fr,
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
function pp(t) {
  return String(t != null ? t : "");
}
function Dd(t, r) {
  return t === "source_in" || t === "source_atop" || t === "darken" || t === "lighten" || t === "multiply" || t === "screen" ? t : r;
}
function Qs(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1;
}
function ja(t, r) {
  let e;
  return function(...n) {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      t.apply(this, n), e = null;
    }, r);
  };
}
function gp(t, r) {
  let e = null;
  const n = () => {
    const a = getComputedStyle(t), l = parseFloat(a.lineHeight);
    t.style.webkitLineClamp = "", t.style.maxHeight = "";
    const c = t.offsetHeight, u = t.scrollHeight;
    let f = Math.max(1, Math.floor(c / l));
    r.maxLines && r.maxLines < f && (f = r.maxLines), u > f * l + 1e-9 && (t.style.webkitLineClamp = String(f), t.style.maxHeight = l * f + "px");
  }, o = ja(n, 50), i = () => {
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
const { Boolean: Fd } = Ro;
function uc(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function fc(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function dc(t) {
  let r = (
    /*htmlTag*/
    t[9]
  ), e, n = (
    /*htmlTag*/
    t[9] && Ml(t)
  );
  return {
    c() {
      n && n.c(), e = He();
    },
    l(o) {
      n && n.l(o), e = He();
    },
    m(o, i) {
      n && n.m(o, i), K(o, e, i);
    },
    p(o, i) {
      /*htmlTag*/
      o[9] ? r ? Fr(
        r,
        /*htmlTag*/
        o[9]
      ) ? (n.d(1), n = Ml(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = Ml(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : r && (n.d(1), n = null, r = /*htmlTag*/
      o[9]);
    },
    i: E,
    o(o) {
      ne(n, o);
    },
    d(o) {
      o && k(e), n && n.d(o);
    }
  };
}
function mp(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Me("span"), e = Me("span"), this.h();
    },
    l(s) {
      r = Ne(s, "SPAN", { style: !0 });
      var a = Ee(r);
      e = Ne(a, "SPAN", { class: !0, style: !0 }), Ee(e).forEach(k), a.forEach(k), this.h();
    },
    h() {
      g(e, "class", n = wt("text__image-wrapper", go, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), g(e, "style", o = fr({
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
      })), g(r, "style", i = fr(
        /*item*/
        t[71].image.wrapperStyle
      ));
    },
    m(s, a) {
      K(s, r, a), Et(r, e);
    },
    p(s, a) {
      a[0] & /*renderList, customLineHeight*/
      10240 && n !== (n = wt("text__image-wrapper", go, {
        align: (
          /*item*/
          s[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          s[11] !== null
        )
      })) && g(e, "class", n), a[0] & /*renderList, customLineHeight*/
      10240 && o !== (o = fr({
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
      8192 && i !== (i = fr(
        /*item*/
        s[71].image.wrapperStyle
      )) && g(r, "style", i);
    },
    i: E,
    o: E,
    d(s) {
      s && k(r);
    }
  };
}
function bp(t) {
  let r, e, n = (
    /*item*/
    t[71].text && _c(t)
  );
  return {
    c() {
      n && n.c(), r = He();
    },
    l(o) {
      n && n.l(o), r = He();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), e = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && U(n, 1)) : (n = _c(o), n.c(), U(n, 1), n.m(r.parentNode, r)) : n && (dr(), ne(n, 1, 1, () => {
        n = null;
      }), _r());
    },
    i(o) {
      e || (U(n), e = !0);
    },
    o(o) {
      ne(n), e = !1;
    },
    d(o) {
      o && k(r), n && n.d(o);
    }
  };
}
function _c(t) {
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
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function hc(t) {
  let r, e, n, o;
  const i = [bp, mp], s = [];
  function a(l, c) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(l) {
      e && e.l(l), n = He();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (dr(), ne(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Ml(t) {
  let r, e, n, o, i = lr(
    /*renderList*/
    t[13]
  ), s = [];
  for (let u = 0; u < i.length; u += 1)
    s[u] = hc(fc(t, i, u));
  const a = (u) => ne(s[u], 1, 1, () => {
    s[u] = null;
  });
  let l = [
    {
      class: e = wt("text__inner", go, {
        .../*innerMods*/
        t[19],
        "cloud-bg": !0
      })
    },
    {
      style: n = fr({
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
    c = Io(c, l[u]);
  return {
    c() {
      r = Me(
        /*htmlTag*/
        t[9]
      );
      for (let u = 0; u < s.length; u += 1)
        s[u].c();
      this.h();
    },
    l(u) {
      r = Ne(
        u,
        /*htmlTag*/
        (t[9] || "null").toUpperCase(),
        { class: !0, style: !0 }
      );
      var f = Ee(r);
      for (let _ = 0; _ < s.length; _ += 1)
        s[_].l(f);
      f.forEach(k), this.h();
    },
    h() {
      oi(
        /*htmlTag*/
        t[9]
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
        i = lr(
          /*renderList*/
          u[13]
        );
        let _;
        for (_ = 0; _ < i.length; _ += 1) {
          const p = fc(u, i, _);
          s[_] ? (s[_].p(p, f), U(s[_], 1)) : (s[_] = hc(p), s[_].c(), U(s[_], 1), s[_].m(r, null));
        }
        for (dr(), _ = i.length; _ < s.length; _ += 1)
          a(_);
        _r();
      }
      oi(
        /*htmlTag*/
        u[9]
      )(r, c = Ho(l, [
        (!o || f[0] & /*innerMods*/
        524288 && e !== (e = wt("text__inner", go, {
          .../*innerMods*/
          u[19],
          "cloud-bg": !0
        }))) && { class: e },
        (!o || f[0] & /*style, cloudPadding, wholeTextCloudBgId, wholeTextCloudBgOpacity*/
        442368 && n !== (n = fr({
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
          U(s[f]);
        o = !0;
      }
    },
    o(u) {
      s = s.filter(Fd);
      for (let f = 0; f < s.length; f += 1)
        ne(s[f]);
      o = !1;
    },
    d(u) {
      u && k(r), _n(s, u);
    }
  };
}
function yp(t) {
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
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function wp(t) {
  let r, e, n = lr(
    /*renderList*/
    t[13]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = gc(uc(t, n, s));
  const i = (s) => ne(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = He();
    },
    l(s) {
      for (let a = 0; a < o.length; a += 1)
        o[a].l(s);
      r = He();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      K(s, r, a), e = !0;
    },
    p(s, a) {
      if (a[0] & /*componentContext, renderList, fontSize, singleline, customLineHeight*/
      10505 | a[1] & /*onImgError*/
      256) {
        n = lr(
          /*renderList*/
          s[13]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const c = uc(s, n, l);
          o[l] ? (o[l].p(c, a), U(o[l], 1)) : (o[l] = gc(c), o[l].c(), U(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (dr(), l = n.length; l < o.length; l += 1)
          i(l);
        _r();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          U(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Fd);
      for (let a = 0; a < o.length; a += 1)
        ne(o[a]);
      e = !1;
    },
    d(s) {
      s && k(r), _n(o, s);
    }
  };
}
function vp(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, p, m = [
    { class: o = go.text__image },
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
      style: l = fr({
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
  ], h = {};
  for (let y = 0; y < m.length; y += 1)
    h = Io(h, m[y]);
  return {
    c() {
      r = Me("span"), e = Me("span"), n = Me("img"), this.h();
    },
    l(y) {
      r = Ne(y, "SPAN", { style: !0 });
      var w = Ee(r);
      e = Ne(w, "SPAN", { class: !0, style: !0 });
      var D = Ee(e);
      n = Ne(D, "IMG", {
        class: !0,
        src: !0,
        loading: !0,
        decoding: !0,
        alt: !0,
        style: !0
      }), D.forEach(k), w.forEach(k), this.h();
    },
    h() {
      Zo(n, h), g(e, "class", c = wt("text__image-wrapper", go, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), g(e, "style", u = fr({
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
      })), g(r, "style", f = fr(
        /*item*/
        t[71].image.wrapperStyle
      ));
    },
    m(y, w) {
      K(y, r, w), Et(r, e), Et(e, n), _ || (p = $e(
        n,
        "error",
        /*onImgError*/
        t[39]
      ), _ = !0);
    },
    p(y, w) {
      Zo(n, h = Ho(m, [
        { class: o },
        w[0] & /*renderList*/
        8192 && !eo(n.src, i = /*item*/
        y[71].image.url) && { src: i },
        w[0] & /*renderList*/
        8192 && s !== (s = /*item*/
        y[71].image.preloadRequired ? "eager" : "lazy") && { loading: s },
        { decoding: "async" },
        w[0] & /*renderList*/
        8192 && a !== (a = /*item*/
        y[71].image.description) && { alt: a },
        w[0] & /*renderList*/
        8192 && /*item*/
        y[71].image.a11yAttrs,
        w[0] & /*renderList*/
        8192 && l !== (l = fr({
          height: (
            /*item*/
            y[71].image.height
          ),
          filter: (
            /*item*/
            y[71].image.svgFilterId ? `url(#${/*item*/
            y[71].image.svgFilterId})` : void 0
          )
        })) && { style: l }
      ])), w[0] & /*renderList, customLineHeight*/
      10240 && c !== (c = wt("text__image-wrapper", go, {
        align: (
          /*item*/
          y[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          y[11] !== null
        )
      })) && g(e, "class", c), w[0] & /*renderList, customLineHeight*/
      10240 && u !== (u = fr({
        width: (
          /*item*/
          y[71].image.width
        ),
        height: (
          /*customLineHeight*/
          y[11] && /*item*/
          y[71].image.verticalAlign !== "baseline" ? (
            /*customLineHeight*/
            y[11] + "em"
          ) : void 0
        )
      })) && g(e, "style", u), w[0] & /*renderList*/
      8192 && f !== (f = fr(
        /*item*/
        y[71].image.wrapperStyle
      )) && g(r, "style", f);
    },
    i: E,
    o: E,
    d(y) {
      y && k(r), _ = !1, p();
    }
  };
}
function kp(t) {
  let r, e, n = (
    /*item*/
    t[71].text && pc(t)
  );
  return {
    c() {
      n && n.c(), r = He();
    },
    l(o) {
      n && n.l(o), r = He();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), e = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && U(n, 1)) : (n = pc(o), n.c(), U(n, 1), n.m(r.parentNode, r)) : n && (dr(), ne(n, 1, 1, () => {
        n = null;
      }), _r());
    },
    i(o) {
      e || (U(n), e = !0);
    },
    o(o) {
      ne(n), e = !1;
    },
    d(o) {
      o && k(r), n && n.d(o);
    }
  };
}
function pc(t) {
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
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function gc(t) {
  let r, e, n, o;
  const i = [kp, vp], s = [];
  function a(l, c) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(l) {
      e && e.l(l), n = He();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (dr(), ne(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Pl(t) {
  let r, e, n, o, i, s, a, l, c;
  const u = [wp, yp], f = [];
  function _(h, y) {
    return (
      /*renderList*/
      h[13].length ? 0 : 1
    );
  }
  e = _(t), n = f[e] = u[e](t);
  let p = [
    {
      class: o = wt(
        "text__inner",
        go,
        /*innerMods*/
        t[19]
      )
    },
    {
      style: i = fr(
        /*style*/
        t[18]
      )
    }
  ], m = {};
  for (let h = 0; h < p.length; h += 1)
    m = Io(m, p[h]);
  return {
    c() {
      r = Me(
        /*htmlTag*/
        t[9]
      ), n.c(), this.h();
    },
    l(h) {
      r = Ne(
        h,
        /*htmlTag*/
        (t[9] || "null").toUpperCase(),
        { class: !0, style: !0 }
      );
      var y = Ee(r);
      n.l(y), y.forEach(k), this.h();
    },
    h() {
      oi(
        /*htmlTag*/
        t[9]
      )(r, m);
    },
    m(h, y) {
      K(h, r, y), f[e].m(r, null), a = !0, l || (c = fl(s = gp.call(null, r, {
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
    p(h, y) {
      let w = e;
      e = _(h), e === w ? f[e].p(h, y) : (dr(), ne(f[w], 1, 1, () => {
        f[w] = null;
      }), _r(), n = f[e], n ? n.p(h, y) : (n = f[e] = u[e](h), n.c()), U(n, 1), n.m(r, null)), oi(
        /*htmlTag*/
        h[9]
      )(r, m = Ho(p, [
        (!a || y[0] & /*innerMods*/
        524288 && o !== (o = wt(
          "text__inner",
          go,
          /*innerMods*/
          h[19]
        ))) && { class: o },
        (!a || y[0] & /*style*/
        262144 && i !== (i = fr(
          /*style*/
          h[18]
        ))) && { style: i }
      ])), s && Lr(s.update) && y[0] & /*$jsonAutoEllipsize, lineClamp, maxLines*/
      5136 && s.update.call(null, {
        enabled: (
          /*$jsonAutoEllipsize*/
          h[10]
        ),
        lineClamp: typeof /*lineClamp*/
        h[4] == "number" ? (
          /*lineClamp*/
          h[4]
        ) : void 0,
        maxLines: (
          /*maxLines*/
          h[12]
        )
      });
    },
    i(h) {
      a || (U(n), a = !0);
    },
    o(h) {
      ne(n), a = !1;
    },
    d(h) {
      h && k(r), f[e].d(), l = !1, c();
    }
  };
}
function jp(t) {
  let r, e = (
    /*htmlTag*/
    t[9]
  ), n, o, i = (
    /*hasCloudBg*/
    t[6] && dc(t)
  ), s = (
    /*htmlTag*/
    t[9] && Pl(t)
  );
  return {
    c() {
      i && i.c(), r = br(), s && s.c(), n = He();
    },
    l(a) {
      i && i.l(a), r = yr(a), s && s.l(a), n = He();
    },
    m(a, l) {
      i && i.m(a, l), K(a, r, l), s && s.m(a, l), K(a, n, l), o = !0;
    },
    p(a, l) {
      /*hasCloudBg*/
      a[6] ? i ? (i.p(a, l), l[0] & /*hasCloudBg*/
      64 && U(i, 1)) : (i = dc(a), i.c(), U(i, 1), i.m(r.parentNode, r)) : i && (dr(), ne(i, 1, 1, () => {
        i = null;
      }), _r()), /*htmlTag*/
      a[9] ? e ? Fr(
        e,
        /*htmlTag*/
        a[9]
      ) ? (s.d(1), s = Pl(a), e = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : s.p(a, l) : (s = Pl(a), e = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : e && (s.d(1), s = null, e = /*htmlTag*/
      a[9]);
    },
    i(a) {
      o || (U(i), o = !0);
    },
    o(a) {
      ne(i), ne(s, a), o = !1;
    },
    d(a) {
      a && (k(r), k(n)), i && i.d(a), s && s.d(a);
    }
  };
}
function Ep(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt(
        "text",
        go,
        /*mods*/
        t[20]
      ) + " " + /*selectable*/
      (t[5] ? Sr.root__selectable : Sr.root__unselectable),
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
      $$slots: { default: [jp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods, selectable*/
      1048608 && (i.cls = wt(
        "text",
        go,
        /*mods*/
        n[20]
      ) + " " + /*selectable*/
      (n[5] ? Sr.root__selectable : Sr.root__unselectable)), o[0] & /*componentContext*/
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Cp(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p, m, h, y, w, D, z, B, ee, ue, M, q, ae, A, F, P, O, J, he = E, fe = () => (he(), he = V(D, (St) => e(52, J = St)), D), Ae, me = E, Ie = () => (me(), me = V(i, (St) => e(53, Ae = St)), i), re, tt = E, qe = () => (tt(), tt = V(o, (St) => e(54, re = St)), o), Ke, ve = E, Te = () => (ve(), ve = V(y, (St) => e(55, Ke = St)), y), pe, ce = E, be = () => (ce(), ce = V(h, (St) => e(56, pe = St)), h), x, ge = E, oe = () => (ge(), ge = V(m, (St) => e(57, x = St)), m), Se, Je = E, Ye = () => (Je(), Je = V(p, (St) => e(58, Se = St)), p), te, Re = E, ze = () => (Re(), Re = V(_, (St) => e(59, te = St)), _), at, ct = E, nt = () => (ct(), ct = V(c, (St) => e(60, at = St)), c), jt, st = E, Bt = () => (st(), st = V(f, (St) => e(61, jt = St)), f), dt, Z = E, de = () => (Z(), Z = V(u, (St) => e(62, dt = St)), u), ut, De = E, N = () => (De(), De = V(w, (St) => e(10, ut = St)), w), Vt, pt = E, Dt = () => (pt(), pt = V(l, (St) => e(63, Vt = St)), l), Nt, ot = E, Q = () => (ot(), ot = V(a, (St) => e(64, Nt = St)), a), It, zt = E, tr = () => (zt(), zt = V(s, (St) => e(65, It = St)), s), Xt, ye = E, Ue = () => (ye(), ye = V(n, (St) => e(66, Xt = St)), n), mt, ke = E, rt = () => (ke(), ke = V(z, (St) => e(67, mt = St)), z);
  t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => Je()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => ct()), t.$$.on_destroy.push(() => st()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => De()), t.$$.on_destroy.push(() => pt()), t.$$.on_destroy.push(() => ot()), t.$$.on_destroy.push(() => zt()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => ke());
  let { componentContext: We } = r, { layoutParams: nr = void 0 } = r;
  const Le = zr(xr), kt = Le.direction;
  Cn(t, kt, (St) => e(51, O = St));
  let Tt = "", Mt = 12, hr = 1.25, Be = null, Ct = "", sr, rr = "", $t = !1, mr = "start", Ar = "start", Ot = "", Er = "", Y = "", gt = !1, Kt = [], At = !1, Cr = "", Tr, wr = [], Nr = {}, Yr = "span";
  function or(St, er, Qt, pr) {
    var se, d;
    let _t = [];
    if (wr.forEach(([R, Pe]) => {
      Le.removeSvgFilter(R, Pe);
    }), wr = [], !(Array.isArray(er) && er.length || Array.isArray(Qt) && Qt.length && St)) {
      e(13, Kt = []);
      return;
    }
    const ie = St;
    let vt = er || [{ start: 0, end: ie.length }], ir = Qt || [], vr = 0, ar = [], j = [];
    vt.forEach((R) => {
      const Pe = R.start || 0, Xe = R.end || St.length, je = {
        top_offset: 0,
        ...R,
        start: Pe,
        end: Xe
      };
      j.push({
        index: Pe,
        range: je,
        type: "rangeStart",
        isStart: !0
      }), j.push({
        index: Xe,
        range: je,
        type: "rangeEnd"
      });
    }), ir.forEach((R, Pe) => {
      R.start !== void 0 && R.url && R.start <= ie.length && j.push({
        index: R.indexing_direction === "reversed" ? St.length - R.start : R.start,
        image: R,
        type: "image",
        arrayIndex: Pe
      });
    }), j.sort((R, Pe) => R.index === Pe.index ? R.type !== Pe.type ? R.type === "image" ? -1 : Pe.type === "image" ? 1 : R.type < Pe.type ? -1 : 1 : R.type === "image" && Pe.type === "image" ? Pe.arrayIndex - R.arrayIndex : R.type === "rangeStart" && Pe.type === "rangeStart" ? R.range.end - Pe.range.end : R.type === "rangeStart" ? 1 : Pe.type === "rangeStart" ? -1 : R.type !== "image" && Pe.type !== "image" ? R.range.start - Pe.range.start : 0 : R.index - Pe.index), j.forEach((R) => {
      var je, H, Pt, Ht;
      let Pe = R.type === "image" ? null : R.range, Xe = R.index;
      if (Xe > vr) {
        let Ze = Object.assign({ ...pr }, ...ar);
        ar.length && ar[ar.length - 1].start !== vr && (Ze.top_offset = 0), _t.push({
          text: ie.substring(vr, Xe),
          textStyles: Ze,
          actions: R.type === "rangeEnd" && ((H = (je = R.range) == null ? void 0 : je.actions) == null ? void 0 : H.filter(Qs)) || void 0
        });
      }
      if (R.type === "rangeStart" && Pe)
        ar.push(Pe);
      else if (R.type === "rangeEnd")
        ar = ar.filter((Ze) => Ze !== R.range);
      else if (R.type === "image") {
        let Ze = Object.assign({ ...pr }, ...ar), ht = _e((R.image.width && R.image.width.value || 20) * 10 / (Ze.font_size || 12)), Yt = _e((R.image.height && R.image.height.value || 20) * 10 / (Ze.font_size || 12));
        const Mr = {
          "font-size": _e((Number(Ze.font_size) || 12) * 10 / Mt)
        };
        let kr = "";
        const Wr = R.image.tint_color, Mn = Dd(R.image.tint_mode, "source_in");
        if (Wr) {
          const kn = gr(R.image.tint_color);
          kr = Le.addSvgFilter(kn, Mn), wr.push([kn, Mn]);
        }
        const Ve = {}, Zr = (Pt = R.image.accessibility) == null ? void 0 : Pt.type, $r = ((Ht = R.image.accessibility) == null ? void 0 : Ht.description) || "";
        (Zr === "button" || Zr === "image") && $r ? Ve.role = Zr : (!$r || Zr === "none") && (Ve["aria-hidden"] = "true"), _t.push({
          image: {
            url: R.image.url,
            width: ht,
            height: Yt,
            wrapperStyle: Mr,
            svgFilterId: kr,
            preloadRequired: !!R.image.preload_required,
            verticalAlign: R.image.alignment_vertical,
            description: $r,
            a11yAttrs: Ve
          }
        });
      }
      vr = Xe;
    }), vr < ie.length && _t.push({
      text: ie.substring(vr),
      textStyles: { ...pr }
    }), e(13, Kt = _t), e(6, At = _t.some((R) => {
      var Pe;
      return "text" in R && ((Pe = R.textStyles.background) == null ? void 0 : Pe.type) === "cloud";
    })), e(14, Cr = At && _t.length === 1 ? Le.genId("text-whole-bg") : ""), e(15, Tr = Cr ? ((d = (se = yo(_t[0].textStyles.background.color)) == null ? void 0 : se.a) != null ? d : 255) / 255 : void 0);
  }
  function lt(St) {
    St.target && "classList" in St.target && St.target.classList.add(go.text__image_hidden);
  }
  return cn(() => {
    wr.forEach(([St, er]) => {
      Le.removeSvgFilter(St, er);
    });
  }), t.$$set = (St) => {
    "componentContext" in St && e(0, We = St.componentContext), "layoutParams" in St && e(1, nr = St.layoutParams);
  }, t.$$.update = () => {
    var St, er;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && We.json && (e(3, Mt = 12), e(40, hr = 1.25), e(11, Be = null), e(41, Ct = ""), e(12, sr = void 0), e(4, rr = ""), e(42, $t = !1), e(43, mr = "start"), e(44, Ar = "start"), e(45, Ot = ""), e(47, Y = ""), e(5, gt = !1)), t.$$.dirty[0] & /*componentContext*/
    1 && Ue(e(37, n = We.getDerivedFromVars(We.json.text))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(36, o = We.getDerivedFromVars(We.json.ranges, void 0, !0, 3))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(35, i = We.getDerivedFromVars(We.json.images))), t.$$.dirty[0] & /*componentContext*/
    1 && tr(e(34, s = We.getDerivedFromVars(
      {
        font_size: We.json.font_size,
        letter_spacing: We.json.letter_spacing,
        font_weight: We.json.font_weight,
        font_weight_value: We.json.font_weight_value,
        font_family: We.json.font_family,
        text_color: We.json.text_color,
        underline: We.json.underline,
        strike: We.json.strike,
        line_height: We.json.line_height,
        text_shadow: We.json.text_shadow,
        font_feature_settings: We.json.font_feature_settings,
        font_variation_settings: We.json.font_variation_settings
      },
      void 0,
      !0,
      1
    ))), t.$$.dirty[0] & /*componentContext*/
    1 && Q(e(33, a = We.getDerivedFromVars(We.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(32, l = We.getDerivedFromVars(We.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && nt(e(31, c = We.getDerivedFromVars(We.json.max_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(30, u = We.getDerivedFromVars(We.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Bt(e(29, f = We.getDerivedFromVars(We.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && ze(e(28, _ = We.getDerivedFromVars(We.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(27, p = We.getDerivedFromVars(We.json.focused_text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(26, m = We.getDerivedFromVars(We.json.truncate))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(25, h = We.getDerivedFromVars(We.json.text_gradient))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(24, y = We.getDerivedFromVars(We.json.selectable))), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(23, w = We.getDerivedFromVars(We.json.auto_ellipsize))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(22, D = We.getDerivedFromVars(We.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && rt(e(21, z = We.getDerivedFromVars(We.json.heading_type))), t.$$.dirty[2] & /*$jsonHeadingType*/
    32 && e(9, B = (() => {
      const Qt = mt;
      if (Qt && typeof Qt == "string") {
        const pr = Qt.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(pr))
          return pr;
      }
      return "span";
    })()), t.$$.dirty[0] & /*htmlTag*/
    512 && e(16, Yr = B !== "span" ? "div" : "span"), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonText*/
    16 && (typeof We.json.text == "string" ? e(2, Tt = pp(Xt)) : (e(2, Tt = ""), We.logError(X(new Error("Incorrect text value type"))))), t.$$.dirty[1] & /*$jsonTextGradient, $direction*/
    34603008) {
      let Qt = "";
      if (pe) {
        const pr = pl([pe], O);
        pr.image && (Qt = pr.image);
      }
      e(47, Y = Qt);
    }
    if (t.$$.dirty[1] & /*gradient*/
    65536 | t.$$.dirty[2] & /*$jsonRootTextStyles*/
    8 && e(7, Nr = Y ? { ...It, text_color: "" } : It), t.$$.dirty[0] & /*fontSize, componentContext*/
    9 | t.$$.dirty[2] & /*$jsonTextSize*/
    4) {
      e(3, Mt = Xn(Nt, Mt));
      const Qt = We.json.responsive;
      if (Qt && typeof Qt == "object" && typeof window < "u") {
        const pr = window.matchMedia("(max-width: 767px)").matches, _t = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
        pr && ((St = Qt.mobile) != null && St.font_size) ? e(3, Mt = Qt.mobile.font_size) : _t && ((er = Qt.tablet) != null && er.font_size) && e(3, Mt = Qt.tablet.font_size);
      }
    }
    if (t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*lineHeight*/
    512 | t.$$.dirty[2] & /*$jsonLineHeight*/
    2) {
      const Qt = Vt;
      Rn(Qt) ? (e(40, hr = Number(Qt) / Mt), e(11, Be = hr)) : e(11, Be = null);
    }
    if (t.$$.dirty[1] & /*$jsonMaxLines*/
    536870912 && e(8, ee = at === 1), t.$$.dirty[0] & /*$jsonAutoEllipsize*/
    1024 | t.$$.dirty[1] & /*$jsonMaxLines, lineHeight*/
    536871424) {
      let Qt = "", pr, _t = "", ie = !1;
      if (at && at > 1) {
        const vt = Number(at);
        Qt = vt * hr + "em", pr = vt, _t = vt, ie = !0;
      } else ut && at !== 1 && (ie = !0);
      e(41, Ct = Qt), e(12, sr = pr), e(4, rr = _t), e(42, $t = ie);
    }
    if (t.$$.dirty[1] & /*$direction, halign*/
    1052672 | t.$$.dirty[2] & /*$jsonHAlign*/
    1 && e(43, mr = bl(dt, O, mr)), t.$$.dirty[1] & /*$jsonVAlign, valign*/
    1073750016 && e(44, Ar = yl(jt, Ar)), t.$$.dirty[0] & /*text*/
    4 | t.$$.dirty[1] & /*$jsonRanges*/
    8388608 && e(50, ue = !re || Tt && re.length === 1 && re[0] && (!re[0].start || re[0].start === 0) && (!re[0].end || typeof re[0].end == "number" && re[0].end >= Tt.length)), t.$$.dirty[1] & /*gradient, $jsonTextColor, $jsonRanges*/
    276889600 && e(49, M = !!(!Y && te) != !!(re && re[0] && re[0].text_color)), t.$$.dirty[1] & /*$jsonMaxLines, isAllTextSameColor, isOnlyOneColorDefined, $jsonTextColor, $jsonRanges, rootTextColor*/
    814497792) {
      let Qt = "";
      at && ue && M && (Qt = gr(te || re && re[0] && re[0].text_color, 1, Ot)), e(45, Ot = Qt);
    }
    t.$$.dirty[1] & /*$jsonFocusTextColor, focusTextColor*/
    134250496 && e(46, Er = gr(Se, 1, Er)), t.$$.dirty[1] & /*$jsonTruncate*/
    67108864 && e(48, q = x === "none" ? "none" : ""), t.$$.dirty[0] & /*selectable*/
    32 | t.$$.dirty[1] & /*$jsonSelectable*/
    16777216 && e(5, gt = an(Ke, gt)), t.$$.dirty[0] & /*text, rootTextStyles*/
    132 | t.$$.dirty[1] & /*$jsonRanges, $jsonImages*/
    12582912 && or(Tt, re, Ae, Nr), t.$$.dirty[0] & /*singleline*/
    256 | t.$$.dirty[1] & /*multiline, halign, valign, truncate, focusTextColor*/
    178176 && e(20, ae = {
      singleline: ee,
      multiline: $t,
      halign: mr,
      valign: Ar,
      truncate: q,
      "has-focus-color": !!Er
    }), t.$$.dirty[0] & /*hasCloudBg*/
    64 | t.$$.dirty[1] & /*gradient*/
    65536 && e(19, A = {
      gradient: !!Y,
      "has-cloud-bg": At
    }), t.$$.dirty[0] & /*fontSize, lineClamp*/
    24 | t.$$.dirty[1] & /*lineHeight, maxHeight, rootTextColor, gradient, focusTextColor*/
    116224 && e(18, F = {
      "font-size": _e(Mt),
      "line-height": hr,
      "max-height": Ct,
      "-webkit-line-clamp": rr,
      color: Ot,
      "background-image": Y,
      "--divkit-text-focus-color": Er
    }), t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*$jsonPaddings, $direction*/
    3145728 && e(17, P = wo(ql(vi(J, {}) || {}, 10 / Mt), O));
  }, [
    We,
    nr,
    Tt,
    Mt,
    rr,
    gt,
    At,
    Nr,
    ee,
    B,
    ut,
    Be,
    sr,
    Kt,
    Cr,
    Tr,
    Yr,
    P,
    F,
    A,
    ae,
    z,
    D,
    w,
    y,
    h,
    m,
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
    n,
    kt,
    lt,
    hr,
    Ct,
    $t,
    mr,
    Ar,
    Ot,
    Er,
    Y,
    q,
    M,
    ue,
    O,
    J,
    Ae,
    re,
    Ke,
    pe,
    x,
    Se,
    te,
    at,
    jt,
    dt,
    Vt,
    Nt,
    It,
    Xt,
    mt
  ];
}
class Ap extends Hr {
  constructor(r) {
    super(), Rr(this, r, Cp, Ep, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Vp = "appkit-container", Sp = "appkit-container_wrap", Ip = "appkit-container_overflow_visible", Dp = "appkit-container_orientation_vertical", Fp = "appkit-container_valign_start", Tp = "appkit-container_valign_center", Mp = "appkit-container_valign_end", Pp = "appkit-container_halign_start", Np = "appkit-container_halign_center", zp = "appkit-container_halign_end", Bp = "appkit-container_orientation_horizontal", Op = "appkit-container_orientation_overlap", mc = {
  container: Vp,
  container_wrap: Sp,
  container_overflow_visible: Ip,
  container_orientation_vertical: Dp,
  container_valign_start: Fp,
  container_valign_center: Tp,
  container_valign_end: Mp,
  "container_valign_space-between": "appkit-container_valign_space-between",
  "container_valign_space-around": "appkit-container_valign_space-around",
  "container_valign_space-evenly": "appkit-container_valign_space-evenly",
  container_halign_start: Pp,
  container_halign_center: Np,
  container_halign_end: zp,
  "container_halign_space-between": "appkit-container_halign_space-between",
  "container_halign_space-around": "appkit-container_halign_space-around",
  "container_halign_space-evenly": "appkit-container_halign_space-evenly",
  container_orientation_horizontal: Bp,
  container_orientation_overlap: Op,
  "container_fixed-container": "appkit-container_fixed-container",
  "container_responsive-mobile-vertical": "appkit-container_responsive-mobile-vertical",
  "container_responsive-mobile-horizontal": "appkit-container_responsive-mobile-horizontal",
  "container_responsive-mobile-has-height": "appkit-container_responsive-mobile-has-height",
  "container_responsive-tablet-vertical": "appkit-container_responsive-tablet-vertical",
  "container_responsive-tablet-horizontal": "appkit-container_responsive-tablet-horizontal",
  "container_responsive-tablet-has-height": "appkit-container_responsive-tablet-has-height"
};
function bc(t) {
  return {
    top: Number(t == null ? void 0 : t.top) || 0,
    right: Number(t == null ? void 0 : t.right) || 0,
    bottom: Number(t == null ? void 0 : t.bottom) || 0,
    left: Number(t == null ? void 0 : t.left) || 0
  };
}
function yc(t, r, e) {
  const n = ((r == null ? void 0 : r.margins.left) || 0) + ((r == null ? void 0 : r.margins.right) || 0), o = ((r == null ? void 0 : r.margins.top) || 0) + ((r == null ? void 0 : r.margins.bottom) || 0);
  r != null && r.show_at_start && (e ? t.top = r.style.height + o : t.left = r.style.width + n), r != null && r.show_at_end && (e ? t.bottom = r.style.height + o : t.right = r.style.width + n);
}
function Lp(t, r, e) {
  const n = {};
  return yc(n, r, t === "vertical"), yc(n, e, t === "horizontal"), n;
}
function Rp({
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
function Hp(t) {
  var e;
  const r = (e = t.width) == null ? void 0 : e.type;
  return r !== "wrap_content" && r !== "fixed";
}
function Wp(t) {
  var e;
  return ((e = t.height) == null ? void 0 : e.type) === "match_parent";
}
function Up(t, r) {
  return t === "vertical" || t === "horizontal" || t === "overlap" ? t : r;
}
function Gp(t) {
  var r, e, n;
  return {
    width: on((r = t.item_width) == null ? void 0 : r.value, 10),
    height: on((e = t.item_height) == null ? void 0 : e.value, 10),
    radius: on((n = t.corner_radius) == null ? void 0 : n.value, 5)
  };
}
function Jp(t) {
  var e;
  const r = on((e = t.radius) == null ? void 0 : e.value, 10) * 2;
  return {
    width: r,
    height: r,
    radius: r
  };
}
function qp(t, r, e) {
  var l;
  const n = {}, o = r.stroke || (e == null ? void 0 : e.stroke), i = o != null && o.color ? gr(o.color) : "", s = o != null && o.width ? Number((l = o.width) != null ? l : 1) : "";
  n.width = t.width, n.height = t.height, n.borderRadius = t.radius;
  const a = r.background_color || (e == null ? void 0 : e.color);
  return n.background = gr(a), i && s && (n.boxShadow = `inset 0 0 0 ${_e(s)} ${i}`), n;
}
function po(t, r, e) {
  if (!t || !t.shape || !t.shape.type || !r.includes(t.shape.type) || t.type !== "shape_drawable")
    return e;
  let n;
  if (t.shape.type === "rounded_rectangle")
    n = Gp(t.shape);
  else if (t.shape.type === "circle")
    n = Jp(t.shape);
  else
    return e;
  return qp(n, t.shape, {
    color: t.color,
    stroke: t.stroke
  });
}
let is;
function wc() {
  if (typeof document > "u" && (is = !0), is !== void 0)
    return is;
  const t = document.createElement("div");
  return t.style.position = "absolute", t.style.display = "flex", t.style.flexDirection = "column", t.style.gap = "1px", t.appendChild(document.createElement("div")), t.appendChild(document.createElement("div")), document.body.appendChild(t), is = t.scrollHeight === 1, document.body.removeChild(t), is;
}
function Kp(t, r) {
  return t === "top" || t === "center" || t === "bottom" || t === "baseline" || t === "space-between" || t === "space-around" || t === "space-evenly" ? t === "top" ? "start" : t === "bottom" ? "end" : t : r;
}
function Yp(t, r, e) {
  return t === "left" || t === "center" || t === "right" || t === "space-between" || t === "space-around" || t === "space-evenly" || t === "start" || t === "end" ? t === "left" ? r === "ltr" ? "start" : "end" : t === "right" ? r === "ltr" ? "end" : "start" : t : e;
}
function Xp() {
}
function Xo(t) {
  return {
    subscribe(r) {
      return r(t), Xp;
    }
  };
}
function wl(t, r, e, n) {
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
const ds = {
  "container-separator": "appkit-container-separator",
  "container-separator__item": "appkit-container-separator__item",
  "container-separator__shape": "appkit-container-separator__shape"
};
function Zp(t, r) {
  let e = 0, n, o = !1;
  return function() {
    const i = Date.now();
    return !e || Math.abs(i - e) > r ? (e = i, n = t.apply(this, arguments)) : (o || (o = !0, setTimeout(() => {
      o = !1, n = t.apply(this, arguments);
    }, r)), n);
  };
}
function Qp(t) {
  const r = t.getBoundingClientRect(), e = getComputedStyle(t);
  return {
    top: r.top - parseFloat(e.marginTop),
    right: r.right + parseFloat(e.marginRight),
    bottom: r.bottom + parseFloat(e.marginBottom),
    left: r.left - parseFloat(e.marginLeft)
  };
}
const { window: xp } = Ro;
function vc(t, r, e) {
  const n = t.slice();
  return n[16] = r[e], n;
}
function kc(t) {
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
      r = Me("div"), e = Me("div"), s = br(), this.h();
    },
    l(f) {
      r = Ne(f, "DIV", { class: !0 });
      var _ = Ee(r);
      e = Ne(_, "DIV", { class: !0 }), Ee(e).forEach(k), s = yr(_), _.forEach(k), this.h();
    },
    h() {
      g(e, "class", ds["container-separator__shape"]), T(e, "width", n), T(e, "height", o), T(e, "border-radius", i), T(
        e,
        "background",
        /*item*/
        t[16].style.background
      ), T(
        e,
        "box-shadow",
        /*item*/
        t[16].style.boxShadow
      ), g(r, "class", ds["container-separator__item"]), T(r, "left", a), T(r, "top", l), T(r, "width", c), T(r, "height", u);
    },
    m(f, _) {
      K(f, r, _), Et(r, e), Et(r, s);
    },
    p(f, _) {
      _ & /*separators*/
      2 && n !== (n = `${/*item*/
      f[16].style.width}px`) && T(e, "width", n), _ & /*separators*/
      2 && o !== (o = `${/*item*/
      f[16].style.height}px`) && T(e, "height", o), _ & /*separators*/
      2 && i !== (i = `${/*item*/
      f[16].style.borderRadius}px`) && T(e, "border-radius", i), _ & /*separators*/
      2 && T(
        e,
        "background",
        /*item*/
        f[16].style.background
      ), _ & /*separators*/
      2 && T(
        e,
        "box-shadow",
        /*item*/
        f[16].style.boxShadow
      ), _ & /*separators*/
      2 && a !== (a = `${/*item*/
      f[16].left}px`) && T(r, "left", a), _ & /*separators*/
      2 && l !== (l = `${/*item*/
      f[16].top}px`) && T(r, "top", l), _ & /*separators*/
      2 && c !== (c = `${/*item*/
      f[16].width}px`) && T(r, "width", c), _ & /*separators*/
      2 && u !== (u = `${/*item*/
      f[16].height}px`) && T(r, "height", u);
    },
    d(f) {
      f && k(r);
    }
  };
}
function $p(t) {
  let r, e, n, o = lr(
    /*separators*/
    t[1]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = kc(vc(t, o, s));
  return {
    c() {
      r = Me("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      this.h();
    },
    l(s) {
      r = Ne(s, "DIV", { class: !0 });
      var a = Ee(r);
      for (let l = 0; l < i.length; l += 1)
        i[l].l(a);
      a.forEach(k), this.h();
    },
    h() {
      g(r, "class", ds["container-separator"]);
    },
    m(s, a) {
      K(s, r, a);
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, null);
      t[13](r), e || (n = $e(
        xp,
        "resize",
        /*throttledUpdated*/
        t[2]
      ), e = !0);
    },
    p(s, [a]) {
      if (a & /*separators*/
      2) {
        o = lr(
          /*separators*/
          s[1]
        );
        let l;
        for (l = 0; l < o.length; l += 1) {
          const c = vc(s, o, l);
          i[l] ? i[l].p(c, a) : (i[l] = kc(c), i[l].c(), i[l].m(r, null));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = o.length;
      }
    },
    i: E,
    o: E,
    d(s) {
      s && k(r), _n(i, s), t[13](null), e = !1, n();
    }
  };
}
const eg = 10;
function Nl(t, r, e, n, o, i) {
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
function jc(t, r, e, n, o, i) {
  const s = {
    top: Math.min(...e.map((a) => a.top)),
    right: Math.max(...e.map((a) => a.right)),
    bottom: Math.max(...e.map((a) => a.bottom)),
    left: Math.min(...e.map((a) => a.left))
  };
  if (r != null && r.show_at_start) {
    let a, l;
    o === "space-around" || o === "space-evenly" ? (a = i.left - r.style.width, l = i.top - r.style.height) : (a = e[0].left - r.style.width - r.margins.left - r.margins.right, l = e[0].top - r.style.height - r.margins.top - r.margins.bottom), Nl(
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
      Nl(t, r, e[a], e[a + 1], s, n);
  if (r != null && r.show_at_end) {
    const a = e[e.length - 1];
    let l, c;
    o === "space-around" || o === "space-evenly" ? (l = i.bottom + r.style.height, c = i.right + r.style.width) : (l = a.bottom + r.style.height + r.margins.top + r.margins.bottom, c = a.right + r.style.width + r.margins.left + r.margins.right), Nl(
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
function tg(t, r, e) {
  let n, { orientation: o } = r, { separator: i } = r, { lineSeparator: s } = r, { contentHAlign: a } = r, { contentVAlign: l } = r, { direction: c } = r;
  const u = Zp(w, eg);
  let f = [], _, p = !1, m = null, h = null;
  function y(z) {
    z.some((B) => {
      var ue;
      const ee = (ue = B.target) == null ? void 0 : ue.classList;
      return !(ee != null && ee.contains(ds["container-separator__shape"])) && !(ee != null && ee.contains(ds["container-separator"]));
    }) && u();
  }
  function w() {
    if (!n)
      return;
    const z = n.getBoundingClientRect(), B = window.getComputedStyle(n), ee = {
      top: z.top + parseFloat(B.paddingTop),
      right: z.right - parseFloat(B.paddingRight),
      bottom: z.bottom - parseFloat(B.paddingBottom),
      left: z.left + parseFloat(B.paddingLeft)
    };
    e(1, f = []);
    let ue = [...n.children].filter((ae) => ae !== _ && ae instanceof HTMLElement && !ae.classList.contains(Zs.outer__border) && getComputedStyle(ae).display !== "none"), M = [];
    for (; ue.length; ) {
      const ae = [], A = ue.shift();
      ae.push(A);
      let F = A.getBoundingClientRect(), P = F.left, O = F.right, J = F.bottom;
      for (; ue.length; ) {
        let he = ue[0], fe = he.getBoundingClientRect();
        if (o === "vertical") {
          if (fe.top < J)
            break;
        } else if (c === "ltr" ? fe.left < O : fe.right > P)
          break;
        O = Math.max(O, fe.right), P = Math.min(P, fe.left), J = Math.max(J, fe.bottom), ae.push(he), ue.shift();
      }
      M.push(ae);
    }
    const q = [];
    M.forEach((ae) => {
      const A = ae.map((P) => Qp(P));
      c === "rtl" && o === "horizontal" && A.reverse(), i && jc(
        f,
        i,
        A,
        o === "vertical",
        o === "vertical" ? l : a,
        ee
      );
      const F = {
        top: Math.min(...A.map((P) => P.top)),
        right: Math.max(...A.map((P) => P.right)),
        bottom: Math.max(...A.map((P) => P.bottom)),
        left: Math.min(...A.map((P) => P.left))
      };
      q.push(F);
    }), c === "rtl" && o === "vertical" && q.reverse(), s && jc(
      f,
      s,
      q,
      o === "horizontal",
      o === "vertical" ? a : l,
      ee
    ), f.forEach((ae) => {
      ae.top -= z.top, ae.left -= z.left;
    });
  }
  no(() => {
    e(9, p = !0);
  }), cn(() => {
    e(9, p = !1);
  });
  function D(z) {
    Pr[z ? "unshift" : "push"](() => {
      _ = z, e(0, _);
    });
  }
  return t.$$set = (z) => {
    "orientation" in z && e(3, o = z.orientation), "separator" in z && e(4, i = z.separator), "lineSeparator" in z && e(5, s = z.lineSeparator), "contentHAlign" in z && e(6, a = z.contentHAlign), "contentVAlign" in z && e(7, l = z.contentVAlign), "direction" in z && e(8, c = z.direction);
  }, t.$$.update = () => {
    t.$$.dirty & /*node*/
    1 && e(12, n = (_ == null ? void 0 : _.parentElement) || null), t.$$.dirty & /*mounted, parentElement, mutationObserver, resizeObserver*/
    7680 && (p && n || m || h) && (m && (m.disconnect(), e(10, m = null)), h && (h.disconnect(), e(11, h = null)), p && n && (typeof MutationObserver < "u" && (e(10, m = new MutationObserver(y)), m.observe(n, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    })), typeof ResizeObserver < "u" && (e(11, h = new ResizeObserver(u)), h.observe(n)))), t.$$.dirty & /*mounted, parentElement*/
    4608 && p && n && u();
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
    p,
    m,
    h,
    n,
    D
  ];
}
class rg extends Hr {
  constructor(r) {
    super(), Rr(this, r, tg, $p, Fr, {
      orientation: 3,
      separator: 4,
      lineSeparator: 5,
      contentHAlign: 6,
      contentVAlign: 7,
      direction: 8
    });
  }
}
const { Boolean: ng } = Ro;
function Ec(t, r, e) {
  const n = t.slice();
  return n[63] = r[e], n;
}
function Cc(t) {
  let r, e;
  return r = new oo({
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
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Ac(t) {
  let r, e;
  return r = new rg({
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
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function og(t) {
  let r, e, n, o = lr(
    /*items*/
    t[9]
  ), i = [];
  for (let l = 0; l < o.length; l += 1)
    i[l] = Cc(Ec(t, o, l));
  const s = (l) => ne(i[l], 1, 1, () => {
    i[l] = null;
  });
  let a = (
    /*separator*/
    (t[5] || /*lineSeparator*/
    t[6]) && Ac(t)
  );
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      r = br(), a && a.c(), e = He();
    },
    l(l) {
      for (let c = 0; c < i.length; c += 1)
        i[c].l(l);
      r = yr(l), a && a.l(l), e = He();
    },
    m(l, c) {
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(l, c);
      K(l, r, c), a && a.m(l, c), K(l, e, c), n = !0;
    },
    p(l, c) {
      if (c[0] & /*items, childLayoutParams*/
      768) {
        o = lr(
          /*items*/
          l[9]
        );
        let u;
        for (u = 0; u < o.length; u += 1) {
          const f = Ec(l, o, u);
          i[u] ? (i[u].p(f, c), U(i[u], 1)) : (i[u] = Cc(f), i[u].c(), U(i[u], 1), i[u].m(r.parentNode, r));
        }
        for (dr(), u = o.length; u < i.length; u += 1)
          s(u);
        _r();
      }
      /*separator*/
      l[5] || /*lineSeparator*/
      l[6] ? a ? (a.p(l, c), c[0] & /*separator, lineSeparator*/
      96 && U(a, 1)) : (a = Ac(l), a.c(), U(a, 1), a.m(e.parentNode, e)) : a && (dr(), ne(a, 1, 1, () => {
        a = null;
      }), _r());
    },
    i(l) {
      if (!n) {
        for (let c = 0; c < o.length; c += 1)
          U(i[c]);
        U(a), n = !0;
      }
    },
    o(l) {
      i = i.filter(ng);
      for (let c = 0; c < i.length; c += 1)
        ne(i[c]);
      ne(a), n = !1;
    },
    d(l) {
      l && (k(r), k(e)), _n(i, l), a && a.d(l);
    }
  };
}
function ig(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt(
        "container",
        mc,
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
      $$slots: { default: [og] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = wt(
        "container",
        mc,
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
const sg = {
  start: "start",
  center: "center",
  end: "end",
  // 'space-*' values doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, lg = {
  start: "start",
  center: "center",
  end: "end",
  baseline: "baseline",
  // 'space-*' doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, Vc = ["rounded_rectangle", "circle"];
function ag(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p, m, h, y, w, D, z, B, ee, ue, M, q, ae, A, F, P = E, O = () => (P(), P = V(w, (gt) => e(45, F = gt)), w), J, he = E, fe = () => (he(), he = V(z, (gt) => e(46, J = gt)), z), Ae, me = E, Ie = () => (me(), me = V(D, (gt) => e(47, Ae = gt)), D), re, tt = E, qe = () => (tt(), tt = V(y, (gt) => e(48, re = gt)), y), Ke, ve = E, Te = () => (ve(), ve = V(h, (gt) => e(49, Ke = gt)), h), pe, ce = E, be = () => (ce(), ce = V(m, (gt) => e(50, pe = gt)), m), x, ge = E, oe = () => (ge(), ge = V(f, (gt) => e(51, x = gt)), f), Se, Je = E, Ye = () => (Je(), Je = V(u, (gt) => e(52, Se = gt)), u), te, Re = E, ze = () => (Re(), Re = V(p, (gt) => e(53, te = gt)), p), at, ct = E, nt = () => (ct(), ct = V(_, (gt) => e(54, at = gt)), _), jt, st, Bt = E, dt = () => (Bt(), Bt = V(c, (gt) => e(55, st = gt)), c), Z, de = E, ut = () => (de(), de = V(l, (gt) => e(56, Z = gt)), l), De, N = E, Vt = () => (N(), N = V(rt, (gt) => e(57, De = gt)), rt), pt, Dt = E, Nt = () => (Dt(), Dt = V(a, (gt) => e(58, pt = gt)), a), ot, Q = E, It = () => (Q(), Q = V(s, (gt) => e(59, ot = gt)), s), zt, tr = E, Xt = () => (tr(), tr = V(i, (gt) => e(60, zt = gt)), i);
  t.$$.on_destroy.push(() => P()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => Je()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => ct()), t.$$.on_destroy.push(() => Bt()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => Dt()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => tr());
  let { componentContext: ye } = r, { layoutParams: Ue = void 0 } = r;
  const mt = zr(xr), ke = mt.direction;
  Cn(t, ke, (gt) => e(10, jt = gt));
  let rt, We = "vertical", nr = "start", Le = "start", kt = null, Tt = null, Mt, hr = {}, Be = 0, Ct = 0, sr = !1;
  function rr() {
    e(2, We = "vertical"), e(3, nr = "start"), e(4, Le = "start"), e(7, Mt = void 0), e(32, Be = 0), e(33, Ct = 0), e(34, sr = !1);
  }
  function $t(gt) {
    e(0, ye = e(35, Ar = {
      ...ye,
      json: {
        ...ye.json,
        items: gt.filter(Wo)
      }
    }));
  }
  let mr = [], Ar, Ot = {}, Er, Y;
  return cn(() => {
    mr.forEach((gt) => {
      gt.destroy();
    });
  }), t.$$set = (gt) => {
    "componentContext" in gt && e(0, ye = gt.componentContext), "layoutParams" in gt && e(1, Ue = gt.layoutParams);
  }, t.$$.update = () => {
    var gt, Kt, At, Cr, Tr, wr, Nr, Yr, or, lt, St;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(44, n = ye.origJson), t.$$.dirty[1] & /*origJson*/
    8192 && n && rr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(43, o = ye.json.items), t.$$.dirty[0] & /*componentContext*/
    1 && Xt(e(29, i = typeof ((gt = ye.json.item_builder) == null ? void 0 : gt.data) == "string" ? ye.getDerivedFromVars((Kt = ye.json.item_builder) == null ? void 0 : Kt.data, void 0, !0) : (At = ye.json.item_builder) != null && At.data ? Xo(ye.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && It(e(28, s = ye.getDerivedFromVars(ye.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && Nt(e(27, a = ye.getDerivedFromVars(ye.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(26, l = ye.getDerivedFromVars(ye.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && dt(e(25, c = ye.getDerivedFromVars(ye.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(24, u = ye.getDerivedFromVars(ye.json.separator))), t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(23, f = ye.getDerivedFromVars(ye.json.line_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && nt(e(22, _ = ye.getDerivedFromVars(ye.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && ze(e(21, p = ye.getDerivedFromVars(ye.json.line_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(20, m = ye.getDerivedFromVars(ye.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(19, h = ye.getDerivedFromVars(ye.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(18, y = ye.getDerivedFromVars(ye.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && O(e(17, w = ye.getDerivedFromVars(ye.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(16, D = ye.getDerivedFromVars(ye.json.max_width))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(15, z = ye.getDerivedFromVars(ye.json.responsive))), t.$$.dirty[0] & /*componentContext, items*/
    513 | t.$$.dirty[1] & /*$jsonItemBuilderData, jsonItems, prevContext*/
    536875024) {
      let er = [];
      if (ye.json.item_builder && Array.isArray(zt) && Array.isArray(ye.json.item_builder.prototypes)) {
        const ie = ye.json.item_builder;
        er = wl(zt, mt, ye, ie);
      } else
        er = (Array.isArray(o) && o || []).map((ie, vt) => ({
          div: ie,
          key: ie.id || { index: vt, data: ie }
        }));
      const Qt = new Set(mr), pr = /* @__PURE__ */ new Map();
      let _t = !1;
      Ar === ye && mr.forEach((ie) => {
        ie.key && (typeof ie.key == "string" && pr.has(ie.key) ? _t || (_t = !0, ye.logError(X(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: ie.key } }))) : pr.set(
          typeof ie.key == "string" ? ie.key : ie.key.index,
          ie
        ));
      }), e(9, mr = er.map((ie, vt) => {
        let ir = !_t && pr.get(ie.id), vr = pr.get(vt);
        return !ir && !ie.id && typeof ie.key == "object" && typeof (vr == null ? void 0 : vr.key) == "object" && Zi(vr.key.data, ie.key.data) && (ir = vr), ir ? (Qt.delete(ir), ir) : ye.produceChildContext(ie.div, {
          path: vt,
          variables: ie.vars,
          id: ie.id,
          key: ie.key
        });
      }));
      for (const ie of Qt)
        ie.destroy();
      e(35, Ar = ye);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    513) {
      let er = [];
      mr.forEach((Qt) => {
        er.push(ye.getDerivedFromVars({
          width: Qt.json.width,
          height: Qt.json.height
        }));
      }), Vt(e(11, rt = Xi(er, (Qt) => [...Qt])));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonOrientation*/
    268435456 && e(2, We = Up(ot, We)), t.$$.dirty[1] & /*$jsonLayoutMode*/
    134217728 && e(38, B = pt === "wrap"), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(42, ee = We !== "horizontal" && !B), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(41, ue = We !== "vertical" && !B), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(40, M = We === "overlap" && !De.every(Hp)), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(39, q = We === "overlap" && !De.every(Wp)), t.$$.dirty[0] & /*contentVAlign*/
    8 | t.$$.dirty[1] & /*$jsonContentVAlign*/
    33554432 && e(3, nr = Kp(Z, nr)), t.$$.dirty[0] & /*$direction, contentHAlign*/
    1040 | t.$$.dirty[1] & /*$jsonContentHAlign*/
    16777216 && e(4, Le = Yp(st, jt, Le)), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    8388610 && e(32, Be = on(at, Be)), t.$$.dirty[1] & /*$jsonLineSpacing, lineSpacing*/
    4194308 && e(33, Ct = on(te, Ct)), t.$$.dirty[0] & /*orientation, separator, componentContext*/
    37 | t.$$.dirty[1] & /*$jsonSeparator, itemSpacing*/
    2097154)
      if (Se != null && Se.style && We !== "overlap" && wc()) {
        const er = po(Se.style, Vc, (kt == null ? void 0 : kt.style) || null);
        er ? (e(5, kt = {
          show_at_start: !!((Cr = Se.show_at_start) != null && Cr),
          show_at_end: !!((Tr = Se.show_at_end) != null && Tr),
          show_between: !!((wr = Se.show_between) == null || wr),
          style: er,
          margins: bc(Se.margins)
        }), kt.show_between && Be && ye.logError(X(new Error("item_spacing will be ignored due to the 'separator' property."), { level: "warn" }))) : e(5, kt = null);
      } else
        e(5, kt = null);
    if (t.$$.dirty[0] & /*orientation, lineSeparator, componentContext*/
    69 | t.$$.dirty[1] & /*$jsonLineSeparator, lineSpacing*/
    1048580)
      if (x != null && x.style && We !== "overlap" && wc()) {
        const er = po(x.style, Vc, (Tt == null ? void 0 : Tt.style) || null);
        er ? (e(6, Tt = {
          show_at_start: !!((Nr = x.show_at_start) != null && Nr),
          show_at_end: !!((Yr = x.show_at_end) != null && Yr),
          show_between: !!((or = x.show_between) == null || or),
          style: er,
          margins: bc(x.margins)
        }), Tt.show_between && Ct && ye.logError(X(new Error("line_spacing will be ignored due to the 'line_separator' property."), { level: "warn" }))) : e(6, Tt = null);
      } else
        e(6, Tt = null);
    if (t.$$.dirty[0] & /*separator, lineSeparator, orientation*/
    100 && e(14, ae = kt || Tt ? Lp(We, kt, Tt) : null), t.$$.dirty[1] & /*$jsonAspect*/
    524288) {
      const er = pe == null ? void 0 : pe.ratio;
      er && Rn(er) ? e(7, Mt = er) : e(7, Mt = void 0);
    }
    if (t.$$.dirty[0] & /*orientation, contentHAlign, contentVAlign, layoutParams, aspect, childLayoutParams*/
    414 | t.$$.dirty[1] & /*wrap, $jsonWidth, $jsonHeight, supportWidthWrapContent, supportHeightWrapContent, stretchWidth, stretchHeight*/
    397184) {
      let er = {};
      We === "overlap" && (er.overlapParent = !0), We !== "horizontal" && (er.parentHAlign = B ? "start" : sg[Le]), We !== "vertical" && (er.parentVAlign = B ? "start" : lg[nr]);
      const Qt = (Ke == null ? void 0 : Ke.type) === "wrap_content" || (Ke == null ? void 0 : Ke.type) === "match_parent" && (Ue == null ? void 0 : Ue.parentHorizontalWrapContent), pr = !re || re.type === "wrap_content" || re.type === "match_parent" && (Ue == null ? void 0 : Ue.parentVerticalWrapContent);
      !ee && Qt && (er.parentHorizontalWrapContent = !0), !Mt && !ue && pr && (er.parentVerticalWrapContent = !0), Qt || (er.parentContainerKnownWidth = !0), pr || (er.parentContainerKnownHeight = !0), er.stretchWidth = M, er.stretchHeight = q, We === "horizontal" && (er.parentContainerOrientation = "horizontal"), We === "vertical" && (er.parentContainerOrientation = "vertical"), B && (er.parentContainerWrap = !0), e(8, hr = ri(er, hr));
    }
    if (t.$$.dirty[1] & /*$jsonMaxWidth*/
    65536 && e(34, sr = (Ae == null ? void 0 : Ae.type) === "fixed"), t.$$.dirty[0] & /*orientation, contentVAlign, contentHAlign*/
    28 | t.$$.dirty[1] & /*$jsonResponsive, wrap, $jsonClipToBounds, isFixedContainer, responsiveMobileHeight, responsiveTabletHeight*/
    49384) {
      let er, Qt;
      if (e(36, Er = void 0), e(37, Y = void 0), J) {
        const pr = J == null ? void 0 : J.mobile, _t = J == null ? void 0 : J.tablet;
        if (pr != null && pr.orientation && (er = String(pr.orientation)), _t != null && _t.orientation && (Qt = String(_t.orientation)), ((lt = pr == null ? void 0 : pr.height) == null ? void 0 : lt.type) === "fixed" && pr.height.value !== void 0) {
          const ie = on(pr.height.value, 0);
          e(36, Er = ie > 0 ? ie : void 0);
        }
        if (((St = _t == null ? void 0 : _t.height) == null ? void 0 : St.type) === "fixed" && _t.height.value !== void 0) {
          const ie = on(_t.height.value, 0);
          e(37, Y = ie > 0 ? ie : void 0);
        }
      }
      e(12, Ot = {
        orientation: We,
        valign: nr,
        halign: Le,
        wrap: B,
        overflow: F === !1 || F === 0 ? "visible" : void 0,
        "fixed-container": sr,
        "responsive-mobile-vertical": er === "vertical",
        "responsive-mobile-horizontal": er === "horizontal",
        "responsive-tablet-vertical": Qt === "vertical",
        "responsive-tablet-horizontal": Qt === "horizontal",
        "responsive-mobile-has-height": Er !== void 0,
        "responsive-tablet-has-height": Y !== void 0
      });
    }
    t.$$.dirty[0] & /*separator, lineSeparator, orientation, aspect*/
    228 | t.$$.dirty[1] & /*itemSpacing, lineSpacing, responsiveMobileHeight, responsiveTabletHeight*/
    102 && e(13, A = {
      gap: kt || Tt || Be || Ct ? Rp({
        orientation: We,
        separator: kt,
        lineSeparator: Tt,
        itemSpacing: Be,
        lineSpacing: Ct
      }) : void 0,
      "aspect-ratio": Mt,
      "--responsive-mobile-height": Er !== void 0 ? _e(Er) : void 0,
      "--responsive-tablet-height": Y !== void 0 ? _e(Y) : void 0
    });
  }, [
    ye,
    Ue,
    We,
    nr,
    Le,
    kt,
    Tt,
    Mt,
    hr,
    mr,
    jt,
    rt,
    Ot,
    A,
    ae,
    z,
    D,
    w,
    y,
    h,
    m,
    p,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    ke,
    $t,
    Be,
    Ct,
    sr,
    Ar,
    Er,
    Y,
    B,
    q,
    M,
    ue,
    ee,
    o,
    n,
    F,
    J,
    Ae,
    re,
    Ke,
    pe,
    x,
    Se,
    te,
    at,
    st,
    Z,
    De,
    pt,
    ot,
    zt
  ];
}
class cg extends Hr {
  constructor(r) {
    super(), Rr(this, r, ag, ig, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const ug = "appkit-separator", fg = "appkit-separator_orientation_horizontal", dg = "appkit-separator_orientation_vertical", _g = "appkit-separator__inner", Kl = {
  separator: ug,
  separator_orientation_horizontal: fg,
  separator_orientation_vertical: dg,
  separator__inner: _g
};
function Ea(t, r) {
  return t === "vertical" || t === "horizontal" ? t : r;
}
function Sc(t) {
  let r, e;
  return {
    c() {
      r = Me("span"), this.h();
    },
    l(n) {
      r = Ne(n, "SPAN", { class: !0, style: !0 }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", Kl.separator__inner), g(r, "style", e = fr(
        /*style*/
        t[3]
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o & /*style*/
      8 && e !== (e = fr(
        /*style*/
        n[3]
      )) && g(r, "style", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function hg(t) {
  let r, e = (
    /*hasContent*/
    t[4] && Sc(t)
  );
  return {
    c() {
      e && e.c(), r = He();
    },
    l(n) {
      e && e.l(n), r = He();
    },
    m(n, o) {
      e && e.m(n, o), K(n, r, o);
    },
    p(n, o) {
      /*hasContent*/
      n[4] ? e ? e.p(n, o) : (e = Sc(n), e.c(), e.m(r.parentNode, r)) : e && (e.d(1), e = null);
    },
    d(n) {
      n && k(r), e && e.d(n);
    }
  };
}
function pg(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt(
        "separator",
        Kl,
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
      $$slots: { default: [hg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, [o]) {
      const i = {};
      o & /*mods*/
      4 && (i.cls = wt(
        "separator",
        Kl,
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function gg(t, r, e) {
  let n, o, i, s, a, l, c, u, f = E, _ = () => (f(), f = V(o, (D) => e(11, u = D)), o);
  t.$$.on_destroy.push(() => f());
  let { componentContext: p } = r, { layoutParams: m = void 0 } = r, h = "horizontal", y = "rgba(0,0,0,0.08)";
  function w() {
    e(6, h = "horizontal"), e(7, y = "rgba(0,0,0,0.08)");
  }
  return t.$$set = (D) => {
    "componentContext" in D && e(0, p = D.componentContext), "layoutParams" in D && e(1, m = D.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(10, n = p.origJson), t.$$.dirty & /*origJson*/
    1024 && n && w(), t.$$.dirty & /*componentContext*/
    1 && _(e(5, o = p.getDerivedFromVars(p.json.delimiter_style))), t.$$.dirty & /*$jsonDelimiterStyle, orientation*/
    2112 && e(6, h = Ea(u == null ? void 0 : u.orientation, h)), t.$$.dirty & /*$jsonDelimiterStyle*/
    2048 && e(4, i = !(u != null && u.color && (u.color === "transparent" || u.color.length === 9 && u.color.indexOf("#00") === 0))), t.$$.dirty & /*$jsonDelimiterStyle, background*/
    2176 && e(7, y = gr(u == null ? void 0 : u.color, 1, y)), t.$$.dirty & /*orientation*/
    64 && e(9, s = h === "horizontal" ? "100%" : _e(1)), t.$$.dirty & /*orientation*/
    64 && e(8, a = h === "horizontal" ? _e(1) : "100%"), t.$$.dirty & /*background, width, height*/
    896 && e(3, l = { background: y, width: s, height: a }), t.$$.dirty & /*orientation*/
    64 && e(2, c = { orientation: h });
  }, [
    p,
    m,
    c,
    l,
    i,
    o,
    h,
    y,
    a,
    s,
    n,
    u
  ];
}
class mg extends Hr {
  constructor(r) {
    super(), Rr(this, r, gg, pg, Fr, { componentContext: 0, layoutParams: 1 });
  }
}
const bg = "appkit-image", yg = "appkit-image__image", wg = "appkit-image_error", vg = "appkit-image_aspect", kg = "appkit-image_loaded", Yl = {
  image: bg,
  "image_is-width-content": "appkit-image_is-width-content",
  "image_is-height-content": "appkit-image_is-height-content",
  image__image: yg,
  image_error: wg,
  "image_is-rtl-mirror": "appkit-image_is-rtl-mirror",
  image_aspect: vg,
  "image_aspect-content": "appkit-image_aspect-content",
  image_loaded: kg,
  "divkit-image-appearance": "appkit-divkit-image-appearance",
  "image_before-appearance": "appkit-image_before-appearance"
};
function jg(t, r, e) {
  const n = t.content_alignment_horizontal, o = t.content_alignment_vertical;
  return n && n !== "left" && n !== "center" && n !== "right" && n !== "start" && n !== "end" || o && o !== "top" && o !== "center" && o !== "bottom" ? e : Vd({
    content_alignment_horizontal: n,
    content_alignment_vertical: o
  }, r);
}
function Td(t) {
  return t.startsWith("data:") ? Ul(t) : `data:image/jpg;base64,${Ul(t)}`;
}
function Eg(t, r, e) {
  let { componentContext: n } = r;
  zr(xr);
  function o() {
  }
  return no(() => {
  }), _l(o), cn(() => {
  }), t.$$set = (i) => {
    "componentContext" in i && e(0, n = i.componentContext);
  }, [n];
}
class Bn extends Hr {
  constructor(r) {
    super(), Rr(this, r, Eg, null, Fr, { componentContext: 0 });
  }
}
function Cg(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Ag(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt(
        "image",
        Yl,
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
          Vg,
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
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = wt(
        "image",
        Yl,
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Ic(t) {
  let r, e, n, o, i, s, a, l;
  return {
    c() {
      r = Me("img"), this.h();
    },
    l(c) {
      r = Ne(c, "IMG", {
        class: !0,
        src: !0,
        loading: !0,
        decoding: !0,
        style: !0,
        alt: !0,
        "aria-hidden": !0
      }), this.h();
    },
    h() {
      g(r, "class", Yl.image__image), eo(r.src, e = /*state*/
      t[2] === as ? Xl : (
        /*imageUrl*/
        t[3]
      )) || g(r, "src", e), g(r, "loading", n = /*$jsonPreloadRequired*/
      t[31] || /*highPrority*/
      t[10] ? "eager" : "lazy"), g(r, "decoding", o = /*highPrority*/
      t[10] ? "sync" : "async"), g(r, "style", i = fr({
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
      K(c, r, u), t[70](r), a || (l = [
        $e(
          r,
          "load",
          /*onLoad*/
          t[33]
        ),
        $e(
          r,
          "error",
          /*onError*/
          t[34]
        )
      ], a = !0);
    },
    p(c, u) {
      u[0] & /*state, imageUrl*/
      12 && !eo(r.src, e = /*state*/
      c[2] === as ? Xl : (
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
      122880 && i !== (i = fr({
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
      c && k(r), t[70](null), a = !1, Kr(l);
    }
  };
}
function Vg(t) {
  let r = (
    /*svgFilterId*/
    t[5]
  ), e, n = Ic(t);
  return {
    c() {
      n.c(), e = He();
    },
    l(o) {
      n.l(o), e = He();
    },
    m(o, i) {
      n.m(o, i), K(o, e, i);
    },
    p(o, i) {
      i[0] & /*svgFilterId*/
      32 && Fr(r, r = /*svgFilterId*/
      o[5]) ? (n.d(1), n = Ic(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && k(e), n.d(o);
    }
  };
}
function Sg(t) {
  let r, e, n, o;
  const i = [Ag, Cg], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[9] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(l) {
      e && e.l(l), n = He();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (dr(), ne(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
const Xl = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Ig = "empty://", Dg = "rgba(0,0,0,0.08)", hi = 0, zl = 1, as = 2, Dc = /\.gif($|\?)/i, Fg = "data:image/gif", Fc = 'A Gif image was used for the "Image" component. The animation will be played on the web platform, but it does not match the behavior of other platforms.';
function Tg(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p, m, h, y, w, D, z, B, ee, ue, M, q, ae, A, F = E, P = () => (F(), F = V(D, (_t) => e(53, A = _t)), D), O, J, he = E, fe = () => (he(), he = V(w, (_t) => e(55, J = _t)), w), Ae, me = E, Ie = () => (me(), me = V(y, (_t) => e(56, Ae = _t)), y), re, tt = E, qe = () => (tt(), tt = V(h, (_t) => e(57, re = _t)), h), Ke, ve = E, Te = () => (ve(), ve = V(_, (_t) => e(58, Ke = _t)), _), pe, ce = E, be = () => (ce(), ce = V(m, (_t) => e(59, pe = _t)), m), x, ge = E, oe = () => (ge(), ge = V(p, (_t) => e(60, x = _t)), p), Se, Je = E, Ye = () => (Je(), Je = V(f, (_t) => e(61, Se = _t)), f), te, Re = E, ze = () => (Re(), Re = V(u, (_t) => e(62, te = _t)), u), at, ct = E, nt = () => (ct(), ct = V(c, (_t) => e(63, at = _t)), c), jt, st = E, Bt = () => (st(), st = V(l, (_t) => e(64, jt = _t)), l), dt, Z = E, de = () => (Z(), Z = V(a, (_t) => e(65, dt = _t)), a), ut, De = E, N = () => (De(), De = V(s, (_t) => e(66, ut = _t)), s), Vt, pt = E, Dt = () => (pt(), pt = V(B, (_t) => e(67, Vt = _t)), B), Nt, ot = E, Q = () => (ot(), ot = V(o, (_t) => e(68, Nt = _t)), o), It, zt = E, tr = () => (zt(), zt = V(i, (_t) => e(69, It = _t)), i), Xt, ye = E, Ue = () => (ye(), ye = V(z, (_t) => e(31, Xt = _t)), z);
  t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => Je()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => ct()), t.$$.on_destroy.push(() => st()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => De()), t.$$.on_destroy.push(() => pt()), t.$$.on_destroy.push(() => ot()), t.$$.on_destroy.push(() => zt()), t.$$.on_destroy.push(() => ye());
  let { componentContext: mt } = r, { layoutParams: ke = void 0 } = r;
  const rt = zr(xr), We = rt.direction;
  Cn(t, We, (_t) => e(54, O = _t));
  let nr, Le = hi, kt = !1, Tt = Dg, Mt = !1, hr, Be = "", Ct = "none", sr = "50% 50%", rr = !1, $t = "center", mr, Ar, Ot = "source_in", Er = "", Y = "", gt = 0, Kt = 0, At = 0, Cr = "", Tr = "", wr = !1, Nr = !1, Yr = !1;
  function or() {
    e(4, mr = void 0), e(40, rr = !1), e(38, Ct = "none"), e(39, sr = "50% 50%"), e(43, Ot = "source_in"), e(51, Nr = !1), e(10, Yr = !1);
  }
  function lt(_t) {
    e(2, Le = hi);
  }
  function St(_t) {
    e(39, sr = jg(_t, O, sr));
  }
  function er() {
    Le === hi && e(2, Le = zl);
  }
  function Qt() {
    Le === hi && e(2, Le = as);
  }
  cn(() => {
    rt.removeSvgFilter(Ar, Ot);
  });
  function pr(_t) {
    Pr[_t ? "unshift" : "push"](() => {
      nr = _t, e(8, nr);
    });
  }
  return t.$$set = (_t) => {
    "componentContext" in _t && e(0, mt = _t.componentContext), "layoutParams" in _t && e(1, ke = _t.layoutParams);
  }, t.$$.update = () => {
    var _t;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(52, n = mt.origJson), t.$$.dirty[1] & /*origJson*/
    2097152 && n && or(), t.$$.dirty[0] & /*componentContext*/
    1 && Q(e(30, o = mt.getDerivedFromVars(mt.json.image_url))), t.$$.dirty[0] & /*componentContext*/
    1 && tr(e(29, i = mt.getDerivedFromVars(mt.json.gif_url))), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(28, s = mt.getDerivedFromVars(mt.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(27, a = mt.getDerivedFromVars(mt.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && Bt(e(26, l = mt.getDerivedFromVars(mt.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && nt(e(25, c = mt.getDerivedFromVars(mt.json.preview_url))), t.$$.dirty[0] & /*componentContext*/
    1 && ze(e(24, u = mt.getDerivedFromVars(mt.json.placeholder_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(23, f = mt.getDerivedFromVars(mt.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(22, _ = mt.getDerivedFromVars({
      content_alignment_horizontal: mt.json.content_alignment_horizontal,
      content_alignment_vertical: mt.json.content_alignment_vertical
    }))), t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(21, p = mt.getDerivedFromVars(mt.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(20, m = mt.getDerivedFromVars(mt.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(19, h = mt.getDerivedFromVars(mt.json.tint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(18, y = mt.getDerivedFromVars(mt.json.tint_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(17, w = mt.getDerivedFromVars(mt.json.appearance_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && P(e(16, D = mt.getDerivedFromVars(mt.json.filters))), t.$$.dirty[0] & /*componentContext*/
    1 && Ue(e(15, z = mt.getDerivedFromVars(mt.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(14, B = mt.getDerivedFromVars(mt.json.high_priority_preview_show))), t.$$.dirty[0] & /*componentContext, imageUrl*/
    9 | t.$$.dirty[1] & /*isEmpty*/
    16 | t.$$.dirty[2] & /*$jsonGifUrl, $jsonImageUrl*/
    192) {
      const ie = mt.json.type === "gif";
      let vt = ie ? It : Nt;
      e(35, kt = vt === Ig), kt && (vt = Xl), e(3, hr = vt), !ie && hr && Dc.test(hr) && mt.logError(X(new Error(Fc), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*imageUrl*/
    8 && lt(), t.$$.dirty[1] & /*highPriorityPreview*/
    1048576 | t.$$.dirty[2] & /*$jsonHighPriorityPreviewShow*/
    32 && e(51, Nr = an(Vt, Nr)), t.$$.dirty[0] & /*imageUrl, componentContext*/
    9 && (hr ? e(9, Mt = !1) : (e(9, Mt = !0), mt.logError(X(new Error(`Missing "${mt.json.type === "gif" ? "gif_url" : "image_url"}" for "${mt.json.type}"`))))), t.$$.dirty[2] & /*$jsonWidth*/
    16 && e(7, ee = (ut == null ? void 0 : ut.type) === "wrap_content"), t.$$.dirty[2] & /*$jsonHeight*/
    8 && e(6, ue = (dt == null ? void 0 : dt.type) === "wrap_content"), t.$$.dirty[0] & /*componentContext, state*/
    5 | t.$$.dirty[1] & /*isEmpty, highPriorityPreview*/
    1048592 | t.$$.dirty[2] & /*$jsonPreview, $jsonPreviewUrl*/
    6) {
      const ie = mt.json.type === "gif", vt = jt, ir = at;
      (Le === hi || Le === as || kt) && (vt || ir) ? (e(37, Be = `url("${ir || Td(vt || "")}")`), e(10, Yr = Nr)) : (e(37, Be = ""), e(10, Yr = !1)), !ie && (ir && Dc.test(ir) || vt && vt.startsWith(Fg)) && mt.logError(X(new Error(Fc), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*state*/
    4 | t.$$.dirty[1] & /*isEmpty, placeholderColor*/
    48 | t.$$.dirty[2] & /*$jsonPlaceholderColor*/
    1 && (Le === hi || Le === as || kt ? e(36, Tt = gr(te, 1, Tt)) : e(36, Tt = "")), t.$$.dirty[1] & /*$jsonScale, scale*/
    1073741952 && e(38, Ct = Ad(Se) || Ct), t.$$.dirty[1] & /*$jsonPosition*/
    134217728 && St(Ke), t.$$.dirty[1] & /*$jsonA11y*/
    536870912 && e(13, M = (x == null ? void 0 : x.description) || ""), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAspect, aspectContent, $jsonPosition*/
    402653696) {
      e(41, $t = "center");
      const ie = pe == null ? void 0 : pe.ratio;
      ie && Rn(ie) ? (e(4, mr = ie), e(40, rr = ((_t = mt.json.width) == null ? void 0 : _t.type) === "wrap_content"), rr && (Ke.content_alignment_vertical === "top" ? e(41, $t = "top") : Ke.content_alignment_vertical === "bottom" && e(41, $t = "bottom"))) : e(4, mr = void 0);
    }
    if (t.$$.dirty[1] & /*$jsonTintColor, $jsonTintMode, tintMode, tintColor*/
    100669440) {
      const ie = re, vt = ie ? gr(ie) : void 0, ir = Dd(Ae, Ot);
      (vt !== Ar || ir !== Ot) && (rt.removeSvgFilter(Ar, Ot), e(5, Er = vt ? rt.addSvgFilter(vt, ir) : ""), e(42, Ar = vt), e(43, Ot = ir));
    }
    if (t.$$.dirty[1] & /*$jsonAppearanceAnimation*/
    16777216 && J && J.type === "fade") {
      const ie = J;
      e(44, Y = Sd(ie.interpolator, "ease_in_out").replace(/_/g, "-")), e(47, At = on(ie.duration, 300)), e(46, Kt = on(ie.start_delay, 0)), e(45, gt = on(ie.alpha, 0));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonFilters, $direction*/
    12582912) {
      let ie = "", vt = "";
      Array.isArray(A) && A.length && (ie = Id(A, mt.logError)), ie && (vt = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"), e(48, Cr = ie), e(49, Tr = vt), e(50, wr = O === "rtl" && Array.isArray(A) && A.some((ir) => ir.type === "rtl_mirror"));
    }
    t.$$.dirty[0] & /*aspectRatio, isWidthContent, isHeightContent, state*/
    212 | t.$$.dirty[1] & /*aspectContent, aspectContentVAlign, animationInterpolator, isRTLMirror*/
    534016 && e(12, q = {
      aspect: mr !== void 0,
      "aspect-content": rr,
      "aspect-valign": $t !== "center" ? $t : void 0,
      "is-width-content": ee,
      "is-height-content": ue,
      loaded: Le === zl,
      "before-appearance": !!Y && Le === hi,
      "is-rtl-mirror": wr
    }), t.$$.dirty[0] & /*aspectRatio, state, svgFilterId*/
    52 | t.$$.dirty[1] & /*backgroundImage, placeholderColor, scale, filterClipPath, position, filter, animationInterpolator, animationFadeStart, animationDelay, animationDuration*/
    516576 && e(11, ae = {
      // Image preview shows, if loading of original image is failed
      "background-image": Be,
      "background-color": Be ? void 0 : Tt,
      "background-size": mh(Ct),
      "clip-path": Tr || void 0,
      "object-fit": Ct,
      "object-position": sr,
      "aspect-ratio": mr,
      filter: [
        Le === zl && Er ? `url(#${Er})` : "",
        Cr
      ].filter(Boolean).join(" "),
      "--divkit-appearance-interpolator": Y || void 0,
      "--divkit-appearance-fade-start": Y ? gt : void 0,
      "--divkit-appearance-delay": Y ? `${Kt}ms` : void 0,
      "--divkit-appearance-duration": Y ? `${At}ms` : void 0
    });
  }, [
    mt,
    ke,
    Le,
    hr,
    mr,
    Er,
    ue,
    ee,
    nr,
    Mt,
    Yr,
    ae,
    q,
    M,
    B,
    z,
    D,
    w,
    y,
    h,
    m,
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
    Xt,
    We,
    er,
    Qt,
    kt,
    Tt,
    Be,
    Ct,
    sr,
    rr,
    $t,
    Ar,
    Ot,
    Y,
    gt,
    Kt,
    At,
    Cr,
    Tr,
    wr,
    Nr,
    n,
    A,
    O,
    J,
    Ae,
    re,
    Ke,
    pe,
    x,
    Se,
    te,
    at,
    jt,
    dt,
    ut,
    Vt,
    Nt,
    It,
    pr
  ];
}
class Tc extends Hr {
  constructor(r) {
    super(), Rr(this, r, Tg, Sg, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Mg = "appkit-grid", Pg = "appkit-grid_halign_start", Ng = "appkit-grid_halign_center", zg = "appkit-grid_halign_end", Bg = "appkit-grid_valign_start", Og = "appkit-grid_valign_center", Lg = "appkit-grid_valign_end", Mc = {
  grid: Mg,
  grid_halign_start: Pg,
  grid_halign_center: Ng,
  grid_halign_end: zg,
  grid_valign_start: Bg,
  grid_valign_center: Og,
  grid_valign_end: Lg
};
function Pc(t) {
  return t > 0 && t < 1;
}
function Nc(t) {
  return String(Math.ceil(t * 1e3) / 1e3);
}
function zc(t, r, e, n) {
  if (t.some(Pc)) {
    const l = Math.max(...t.filter(Pc).map((c) => 1 / c));
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
    i && !e[l] ? a[l] = `minmax(${_e(i * t[l] / s)},${Nc(t[l])}fr)` : o || !e[l] && t[l] ? a[l] = `${Nc(t[l])}fr` : a[l] = "auto";
  return a.join(" ");
}
function Bc(t, r, e) {
  const n = t.slice();
  return n[33] = r[e], n;
}
function Rg(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Hg(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt(
        "grid",
        Mc,
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
      $$slots: { default: [Wg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = wt(
        "grid",
        Mc,
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Oc(t) {
  let r, e;
  return r = new oo({
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
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Wg(t) {
  let r, e, n = lr(
    /*resultItems*/
    t[5]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Oc(Bc(t, n, s));
  const i = (s) => ne(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = He();
    },
    l(s) {
      for (let a = 0; a < o.length; a += 1)
        o[a].l(s);
      r = He();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      K(s, r, a), e = !0;
    },
    p(s, a) {
      if (a[0] & /*resultItems*/
      32) {
        n = lr(
          /*resultItems*/
          s[5]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const c = Bc(s, n, l);
          o[l] ? (o[l].p(c, a), U(o[l], 1)) : (o[l] = Oc(c), o[l].c(), U(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (dr(), l = n.length; l < o.length; l += 1)
          i(l);
        _r();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          U(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        ne(o[a]);
      e = !1;
    },
    d(s) {
      s && k(r), _n(o, s);
    }
  };
}
function Ug(t) {
  let r, e, n, o;
  const i = [Hg, Rg], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(l) {
      e && e.l(l), n = He();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (dr(), ne(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Gg(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _ = E, p = () => (_(), _ = V(a, (be) => e(27, f = be)), a), m, h = E, y = () => (h(), h = V(s, (be) => e(28, m = be)), s), w, D = E, z = () => (D(), D = V(O, (be) => e(29, w = be)), O), B, ee = E, ue = () => (ee(), ee = V(i, (be) => e(30, B = be)), i);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => ee());
  let { componentContext: M } = r, { layoutParams: q = void 0 } = r;
  const A = zr(xr).direction;
  Cn(t, A, (be) => e(26, u = be));
  let F = !1, P = 0, O, J, he = [], fe = [], Ae = [], me = [], Ie = [], re = [], tt = 0, qe = "start", Ke = "start", ve = [], Te;
  function pe() {
    e(3, F = !1), e(13, P = 0), e(21, qe = "start"), e(22, Ke = "start");
  }
  function ce(be) {
    e(0, M = e(23, Te = {
      ...M,
      json: {
        ...M.json,
        items: be.filter(Wo)
      }
    }));
  }
  return cn(() => {
    ve.forEach((be) => {
      be.destroy();
    });
  }), t.$$set = (be) => {
    "componentContext" in be && e(0, M = be.componentContext), "layoutParams" in be && e(1, q = be.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(25, n = M.origJson), t.$$.dirty[0] & /*origJson*/
    33554432 && n && pe(), t.$$.dirty[0] & /*componentContext*/
    1 && e(24, o = Array.isArray(M.json.items) && M.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(10, i = M.getDerivedFromVars(M.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && y(e(9, s = M.getDerivedFromVars(M.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && p(e(8, a = M.getDerivedFromVars(M.json.content_alignment_horizontal))), t.$$.dirty[0] & /*$jsonColumnCount, columnCount, componentContext*/
    1073750017 && (e(13, P = Xn(B, P)), P < 1 ? (e(3, F = !0), M.logError(X(new Error("Incorrect column_count for grid")))) : e(3, F = !1)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonItems*/
    25165829) {
      const be = new Set(ve), x = /* @__PURE__ */ new Map();
      Te === M && ve.forEach((ge) => {
        x.set(ge.json, ge);
      }), e(2, ve = o.map((ge, oe) => {
        const Se = x.get(ge);
        return Se ? (be.delete(Se), Se) : M.produceChildContext(ge, { path: oe });
      }));
      for (const ge of be)
        ge.destroy();
      e(23, Te = M);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    5) {
      let be = [];
      ve.forEach((x) => {
        be.push(M.getDerivedFromVars({
          rowSpan: x.json.row_span,
          columnSpan: x.json.column_span,
          width: x.json.width,
          height: x.json.height
        }));
      }), z(e(4, O = Xi(be, (x) => [...x])));
    }
    if (t.$$.dirty[0] & /*items, $childStore, columnCount, columnsWeight, rowsWeight, columnsMinWidth, rowsMinHeight*/
    537124868) {
      const be = {};
      let x = 0, ge = 0;
      e(14, he = []), e(15, fe = []), e(16, Ae = []), e(17, me = []), e(18, Ie = []), e(19, re = []);
      let oe = 0;
      e(5, J = ve.map((Se, Je) => {
        var st, Bt, dt, Z;
        const Ye = w[Je], te = Math.min(P, Number(Ye.columnSpan) || 1), Re = Number(Ye.rowSpan) || 1, ze = ((st = Ye.width) == null ? void 0 : st.type) === "match_parent" ? Number(Ye.width.weight || 1) / te : 0, at = ((Bt = Ye.height) == null ? void 0 : Bt.type) === "match_parent" ? Number(Ye.height.weight || 1) / Re : 0, ct = ((dt = Ye.width) == null ? void 0 : dt.type) === "fixed" && Ye.width.value ? Number(Ye.width.value) / te : 0, nt = ((Z = Ye.height) == null ? void 0 : Z.type) === "fixed" && Ye.height.value ? Number(Ye.height.value) / Re : 0;
        for (; ; ) {
          let de = !0;
          e: for (let ut = x; ut < x + te; ++ut)
            for (let De = ge; De < ge + Re; ++De)
              if (be[ut + "_" + De]) {
                de = !1;
                break e;
              }
          if (de)
            break;
          ++x, x > P - te && (x = 0, ++ge);
        }
        const jt = { x, y: ge, colSpan: te, rowSpan: Re };
        for (let de = x; de < x + te; ++de)
          for (let ut = ge; ut < ge + Re; ++ut)
            be[de + "_" + ut] = !0, (!he[de] || he[de] < ze) && e(14, he[de] = ze, he), (!fe[ut] || fe[ut] < at) && e(15, fe[ut] = at, fe), te === 1 && (!Ae[de] || Ae[de] < ct) && e(16, Ae[de] = ct, Ae), Re === 1 && (!me[ut] || me[ut] < nt) && e(17, me[ut] = nt, me), te === 1 && ct && e(18, Ie[de] = ct, Ie), Re === 1 && nt && e(19, re[de] = nt, re);
        return oe = Math.max(oe, ge + Re), {
          componentContext: Se,
          layoutParams: { gridArea: jt }
        };
      })), e(20, tt = Math.max(ge + 1, oe));
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    270532608 && e(21, qe = yl(m, qe)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    205520896 && e(22, Ke = bl(f, u, Ke)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    6291456 && e(7, l = {
      valign: qe,
      halign: Ke
    }), t.$$.dirty[0] & /*columnsWeight, columnsMinWidth, columnsWidth, columnCount, rowsWeight, rowsMinHeight, rowsHeight, rowCount*/
    2088960 && e(6, c = {
      "grid-template-columns": zc(he, Ae, Ie, P),
      "grid-template-rows": zc(fe, me, re, tt)
    });
  }, [
    M,
    q,
    ve,
    F,
    O,
    J,
    c,
    l,
    a,
    s,
    i,
    A,
    ce,
    P,
    he,
    fe,
    Ae,
    me,
    Ie,
    re,
    tt,
    qe,
    Ke,
    Te,
    o,
    n,
    u,
    f,
    m,
    w,
    B
  ];
}
class Jg extends Hr {
  constructor(r) {
    super(), Rr(this, r, Gg, Ug, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const qg = "appkit-outer_width_content", Kg = "appkit-outer_height_content", Yg = "appkit-gallery", Xg = "appkit-gallery__scroller", Zg = "appkit-gallery_scrollbar_none", Qg = "appkit-gallery_orientation_horizontal", xg = "appkit-gallery_orientation_vertical", $g = "appkit-gallery__items", em = "appkit-gallery__arrow", tm = "appkit-gallery__gap", mo = {
  outer_width_content: qg,
  outer_height_content: Kg,
  gallery: Yg,
  gallery__scroller: Xg,
  gallery_scrollbar_none: Zg,
  gallery_orientation_horizontal: Qg,
  gallery_orientation_vertical: xg,
  "gallery_scroll-snap": "appkit-gallery_scroll-snap",
  "gallery__items-grid": "appkit-gallery__items-grid",
  gallery__items: $g,
  gallery__arrow: em,
  "gallery__arrow-icon-path": "appkit-gallery__arrow-icon-path",
  gallery__gap: tm
}, rm = "appkit-arrow", nm = "appkit-arrow__icon", om = "appkit-arrow_left", im = "appkit-arrow_right", vo = {
  arrow: rm,
  arrow__icon: nm,
  arrow_left: om,
  arrow_right: im
};
function sm(t, r) {
  return t === "start" || t === "center" || t === "end" ? t : r;
}
function lm(t) {
  const r = [];
  let e = t[0], n = 1;
  for (let o = 1; o <= t.length; o++)
    t[o] !== e ? (r.push(n > 1 ? `repeat(${n}, ${e})` : e), e = t[o], n = 1) : n++;
  return r.join(" ");
}
function Po(t, r) {
  let e = t % r;
  return e < 0 && (e += r), e;
}
const { Boolean: Md, window: am } = Ro;
function Lc(t, r, e) {
  const n = t.slice();
  return n[86] = r[e], n[87] = r, n[88] = e, n;
}
function Rc(t, r, e) {
  const n = t.slice();
  return n[89] = r[e], n;
}
function Hc(t) {
  let r;
  return {
    c() {
      r = Me("div"), this.h();
    },
    l(e) {
      r = Ne(e, "DIV", { class: !0 }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", mo.gallery__gap), T(
        r,
        "width",
        /*orientation*/
        t[4] === "horizontal" ? (
          /*gridGap*/
          t[12]
        ) : void 0
      ), T(
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
      K(e, r, n);
    },
    p(e, n) {
      n[0] & /*orientation, gridGap*/
      4112 && T(
        r,
        "width",
        /*orientation*/
        e[4] === "horizontal" ? (
          /*gridGap*/
          e[12]
        ) : void 0
      ), n[0] & /*orientation, gridGap*/
      4112 && T(
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
      e && k(r);
    }
  };
}
function Wc(t) {
  let r, e, n, o = (
    /*item*/
    t[89].hasGapBefore && Hc(t)
  );
  return e = new oo({
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
      o && o.c(), r = br(), Ut(e.$$.fragment);
    },
    l(i) {
      o && o.l(i), r = yr(i), Jt(e.$$.fragment, i);
    },
    m(i, s) {
      o && o.m(i, s), K(i, r, s), Lt(e, i, s), n = !0;
    },
    p(i, s) {
      /*item*/
      i[89].hasGapBefore ? o ? o.p(i, s) : (o = Hc(i), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
      const a = {};
      s[0] & /*itemsGrid*/
      262144 && (a.componentContext = /*item*/
      i[89].componentContext), s[0] & /*childLayoutParams*/
      64 && (a.layoutParams = /*childLayoutParams*/
      i[6]), e.$set(a);
    },
    i(i) {
      n || (U(e.$$.fragment, i), n = !0);
    },
    o(i) {
      ne(e.$$.fragment, i), n = !1;
    },
    d(i) {
      i && k(r), o && o.d(i), Rt(e, i);
    }
  };
}
function Uc(t) {
  let r, e, n, o, i, s, a = (
    /*rowIndex*/
    t[88]
  ), l, c = lr(
    /*itemsRow*/
    t[86]
  ), u = [];
  for (let m = 0; m < c.length; m += 1)
    u[m] = Wc(Rc(t, c, m));
  const f = (m) => ne(u[m], 1, 1, () => {
    u[m] = null;
  }), _ = () => (
    /*div1_binding*/
    t[71](r, a)
  ), p = () => (
    /*div1_binding*/
    t[71](null, a)
  );
  return {
    c() {
      r = Me("div");
      for (let m = 0; m < u.length; m += 1)
        u[m].c();
      e = br(), n = Me("div"), i = br(), this.h();
    },
    l(m) {
      r = Ne(m, "DIV", { class: !0, style: !0 });
      var h = Ee(r);
      for (let y = 0; y < u.length; y += 1)
        u[y].l(h);
      e = yr(h), n = Ne(h, "DIV", { class: !0, style: !0 }), Ee(n).forEach(k), i = yr(h), h.forEach(k), this.h();
    },
    h() {
      g(n, "class", mo.gallery__gap), g(n, "style", o = fr(
        /*lastPaddingSize*/
        t[13]
      )), g(r, "class", mo.gallery__items), g(r, "style", s = fr(
        /*columnStyle*/
        t[16]
      ));
    },
    m(m, h) {
      K(m, r, h);
      for (let y = 0; y < u.length; y += 1)
        u[y] && u[y].m(r, null);
      Et(r, e), Et(r, n), Et(r, i), _(), l = !0;
    },
    p(m, h) {
      if (t = m, h[0] & /*itemsGrid, childLayoutParams, orientation, gridGap*/
      266320) {
        c = lr(
          /*itemsRow*/
          t[86]
        );
        let y;
        for (y = 0; y < c.length; y += 1) {
          const w = Rc(t, c, y);
          u[y] ? (u[y].p(w, h), U(u[y], 1)) : (u[y] = Wc(w), u[y].c(), U(u[y], 1), u[y].m(r, e));
        }
        for (dr(), y = c.length; y < u.length; y += 1)
          f(y);
        _r();
      }
      (!l || h[0] & /*lastPaddingSize*/
      8192 && o !== (o = fr(
        /*lastPaddingSize*/
        t[13]
      ))) && g(n, "style", o), (!l || h[0] & /*columnStyle*/
      65536 && s !== (s = fr(
        /*columnStyle*/
        t[16]
      ))) && g(r, "style", s), a !== /*rowIndex*/
      t[88] && (p(), a = /*rowIndex*/
      t[88], _());
    },
    i(m) {
      if (!l) {
        for (let h = 0; h < c.length; h += 1)
          U(u[h]);
        l = !0;
      }
    },
    o(m) {
      u = u.filter(Md);
      for (let h = 0; h < u.length; h += 1)
        ne(u[h]);
      l = !1;
    },
    d(m) {
      m && k(r), _n(u, m), p();
    }
  };
}
function Gc(t) {
  let r, e, n = (
    /*hasScrollLeft*/
    t[10] && /*shouldCheckArrows*/
    t[8] && Jc(t)
  ), o = (
    /*hasScrollRight*/
    t[11] && /*shouldCheckArrows*/
    t[8] && qc(t)
  );
  return {
    c() {
      n && n.c(), r = br(), o && o.c(), e = He();
    },
    l(i) {
      n && n.l(i), r = yr(i), o && o.l(i), e = He();
    },
    m(i, s) {
      n && n.m(i, s), K(i, r, s), o && o.m(i, s), K(i, e, s);
    },
    p(i, s) {
      /*hasScrollLeft*/
      i[10] && /*shouldCheckArrows*/
      i[8] ? n ? n.p(i, s) : (n = Jc(i), n.c(), n.m(r.parentNode, r)) : n && (n.d(1), n = null), /*hasScrollRight*/
      i[11] && /*shouldCheckArrows*/
      i[8] ? o ? o.p(i, s) : (o = qc(i), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null);
    },
    d(i) {
      i && (k(r), k(e)), n && n.d(i), o && o.d(i);
    }
  };
}
function Jc(t) {
  let r, e, n, o = !/*leftClass*/
  t[32] && cm();
  return {
    c() {
      r = Me("div"), o && o.c(), this.h();
    },
    l(i) {
      r = Ne(i, "DIV", { class: !0 });
      var s = Ee(r);
      o && o.l(s), s.forEach(k), this.h();
    },
    h() {
      g(
        r,
        "class",
        /*leftClass*/
        t[32] || `${mo.gallery__arrow} ${vo.arrow} ${vo.arrow_left}`
      );
    },
    m(i, s) {
      K(i, r, s), o && o.m(r, null), e || (n = $e(
        r,
        "click",
        /*click_handler*/
        t[74]
      ), e = !0);
    },
    p: E,
    d(i) {
      i && k(r), o && o.d(), e = !1, n();
    }
  };
}
function cm(t) {
  let r, e;
  return {
    c() {
      r = Qr("svg"), e = Qr("path"), this.h();
    },
    l(n) {
      r = nn(n, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0
      });
      var o = Ee(r);
      e = nn(o, "path", { class: !0, d: !0 }), Ee(e).forEach(k), o.forEach(k), this.h();
    },
    h() {
      g(e, "class", mo["gallery__arrow-icon-path"]), g(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", vo.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      K(n, r, o), Et(r, e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function qc(t) {
  let r, e, n, o = !/*rightClass*/
  t[33] && um();
  return {
    c() {
      r = Me("div"), o && o.c(), this.h();
    },
    l(i) {
      r = Ne(i, "DIV", { class: !0 });
      var s = Ee(r);
      o && o.l(s), s.forEach(k), this.h();
    },
    h() {
      g(
        r,
        "class",
        /*rightClass*/
        t[33] || `${mo.gallery__arrow} ${vo.arrow} ${vo.arrow_right}`
      );
    },
    m(i, s) {
      K(i, r, s), o && o.m(r, null), e || (n = $e(
        r,
        "click",
        /*click_handler_1*/
        t[75]
      ), e = !0);
    },
    p: E,
    d(i) {
      i && k(r), o && o.d(), e = !1, n();
    }
  };
}
function um(t) {
  let r, e;
  return {
    c() {
      r = Qr("svg"), e = Qr("path"), this.h();
    },
    l(n) {
      r = nn(n, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0
      });
      var o = Ee(r);
      e = nn(o, "path", { class: !0, d: !0 }), Ee(e).forEach(k), o.forEach(k), this.h();
    },
    h() {
      g(e, "class", mo["gallery__arrow-icon-path"]), g(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", vo.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      K(n, r, o), Et(r, e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function fm(t) {
  let r, e, n, o, i, s, a, l, c, u, f = lr(
    /*itemsGrid*/
    t[18]
  ), _ = [];
  for (let h = 0; h < f.length; h += 1)
    _[h] = Uc(Lc(t, f, h));
  const p = (h) => ne(_[h], 1, 1, () => {
    _[h] = null;
  });
  let m = (
    /*orientation*/
    t[4] === "horizontal" && Gc(t)
  );
  return {
    c() {
      r = Me("div"), e = Me("div");
      for (let h = 0; h < _.length; h += 1)
        _[h].c();
      s = br(), m && m.c(), a = He(), this.h();
    },
    l(h) {
      r = Ne(h, "DIV", { class: !0, style: !0 });
      var y = Ee(r);
      e = Ne(y, "DIV", { class: !0, style: !0 });
      var w = Ee(e);
      for (let D = 0; D < _.length; D += 1)
        _[D].l(w);
      w.forEach(k), y.forEach(k), s = yr(h), m && m.l(h), a = He(), this.h();
    },
    h() {
      g(e, "class", mo["gallery__items-grid"]), g(e, "style", n = fr(
        /*gridStyle*/
        t[17]
      )), g(r, "class", o = mo.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? Sr["root_restrict-scroll"] : "")), g(r, "style", i = fr(
        /*scrollerStyle*/
        t[5]
      ));
    },
    m(h, y) {
      K(h, r, y), Et(r, e);
      for (let w = 0; w < _.length; w += 1)
        _[w] && _[w].m(e, null);
      t[72](e), t[73](r), K(h, s, y), m && m.m(h, y), K(h, a, y), l = !0, c || (u = $e(r, "scroll", function() {
        Lr(
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
    p(h, y) {
      if (t = h, y[0] & /*columnStyle, galleryItemsWrappers, lastPaddingSize, itemsGrid, childLayoutParams, orientation, gridGap*/
      340560) {
        f = lr(
          /*itemsGrid*/
          t[18]
        );
        let w;
        for (w = 0; w < f.length; w += 1) {
          const D = Lc(t, f, w);
          _[w] ? (_[w].p(D, y), U(_[w], 1)) : (_[w] = Uc(D), _[w].c(), U(_[w], 1), _[w].m(e, null));
        }
        for (dr(), w = f.length; w < _.length; w += 1)
          p(w);
        _r();
      }
      (!l || y[0] & /*gridStyle*/
      131072 && n !== (n = fr(
        /*gridStyle*/
        t[17]
      ))) && g(e, "style", n), (!l || y[0] & /*$jsonRestrictParentScroll*/
      1073741824 && o !== (o = mo.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? Sr["root_restrict-scroll"] : ""))) && g(r, "class", o), (!l || y[0] & /*scrollerStyle*/
      32 && i !== (i = fr(
        /*scrollerStyle*/
        t[5]
      ))) && g(r, "style", i), /*orientation*/
      t[4] === "horizontal" ? m ? m.p(t, y) : (m = Gc(t), m.c(), m.m(a.parentNode, a)) : m && (m.d(1), m = null);
    },
    i(h) {
      if (!l) {
        for (let y = 0; y < f.length; y += 1)
          U(_[y]);
        l = !0;
      }
    },
    o(h) {
      _ = _.filter(Md);
      for (let y = 0; y < _.length; y += 1)
        ne(_[y]);
      l = !1;
    },
    d(h) {
      h && (k(r), k(s), k(a)), _n(_, h), t[72](null), t[73](null), m && m.d(h), c = !1, u();
    }
  };
}
function dm(t) {
  let r, e, n, o;
  return r = new vn({
    props: {
      cls: wt(
        "gallery",
        mo,
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
      $$slots: { default: [fm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(i) {
      Jt(r.$$.fragment, i);
    },
    m(i, s) {
      Lt(r, i, s), e = !0, n || (o = $e(am, "resize", function() {
        Lr(
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
      32768 && (a.cls = wt(
        "gallery",
        mo,
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
      e || (U(r.$$.fragment, i), e = !0);
    },
    o(i) {
      ne(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Rt(r, i), n = !1, o();
    }
  };
}
function _m(t, r, e) {
  let n = 0, o = [], i = [];
  for (let s = 0; s < t.length; ++s)
    o[n] || (o[n] = []), o[n].push({
      index: s,
      hasGapBefore: i[n] && r[s].visibility !== "gone",
      componentContext: t[s]
    }), !i[n] && r[s].visibility !== "gone" && (i[n] = !0), ++n >= e && (n = 0);
  return o;
}
function hm(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p, m, h, y, w, D, z, B, ee, ue, M, q, ae = E, A = () => (ae(), ae = V(h, (ie) => e(59, q = ie)), h), F, P = E, O = () => (P(), P = V(m, (ie) => e(60, F = ie)), m), J, he = E, fe = () => (he(), he = V(_, (ie) => e(61, J = ie)), _), Ae, me = E, Ie = () => (me(), me = V(Tt, (ie) => e(62, Ae = ie)), Tt), re, tt = E, qe = () => (tt(), tt = V(f, (ie) => e(63, re = ie)), f), Ke, ve = E, Te = () => (ve(), ve = V(u, (ie) => e(64, Ke = ie)), u), pe, ce = E, be = () => (ce(), ce = V(c, (ie) => e(65, pe = ie)), c), x, ge = E, oe = () => (ge(), ge = V(l, (ie) => e(66, x = ie)), l), Se, Je = E, Ye = () => (Je(), Je = V(a, (ie) => e(67, Se = ie)), a), te, Re, ze = E, at = () => (ze(), ze = V(i, (ie) => e(69, Re = ie)), i), ct, nt = E, jt = () => (nt(), nt = V(s, (ie) => e(70, ct = ie)), s), st, Bt = E, dt = () => (Bt(), Bt = V(p, (ie) => e(30, st = ie)), p);
  t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => P()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => Je()), t.$$.on_destroy.push(() => ze()), t.$$.on_destroy.push(() => nt()), t.$$.on_destroy.push(() => Bt());
  let { componentContext: Z } = r, { layoutParams: de = void 0 } = r;
  const ut = zr(xr), De = ut.direction;
  Cn(t, De, (ie) => e(58, M = ie));
  let N, Vt = [], pt = !1, Dt = !1, Nt = null, ot, Q = !1;
  const It = ut.getCustomization("galleryLeftClass"), zt = ut.getCustomization("galleryRightClass");
  let tr, Xt = 1, ye = "horizontal", Ue = "start", mt, ke = 8, rt, We, nr = "", Le, kt = [], Tt, Mt = {}, hr = !1, Be = {}, Ct = 0;
  function sr() {
    e(42, Xt = 1), e(4, ye = "horizontal"), e(43, Ue = "start"), e(44, ke = 8), e(47, nr = "");
  }
  let rr = null, $t = null;
  function mr() {
    var ir, vr;
    const ie = Xn(ct, Xt), vt = Z.json.responsive;
    if (!vt || typeof vt != "object") {
      e(42, Xt = ie);
      return;
    }
    rr != null && rr.matches && ((ir = vt.mobile) != null && ir.column_count) ? e(42, Xt = vt.mobile.column_count) : $t != null && $t.matches && ((vr = vt.tablet) != null && vr.column_count) ? e(42, Xt = vt.tablet.column_count) : e(42, Xt = ie);
  }
  function Ar(ie) {
    e(0, Z = e(53, Y = {
      ...Z,
      json: {
        ...Z.json,
        items: ie.filter(Wo)
      }
    }));
  }
  const Ot = ut.isDesktop;
  Cn(t, Ot, (ie) => e(68, te = ie));
  let Er = [], Y;
  function gt() {
    if (!N)
      return;
    let ie = N.scrollLeft;
    M === "rtl" && (ie *= -1);
    const vt = N.scrollWidth, ir = N.offsetWidth;
    M === "ltr" ? (e(10, pt = ie > 2), e(11, Dt = ie + ir < vt - 2)) : (e(11, Dt = ie > 2), e(10, pt = ie + ir < vt - 2));
  }
  const Kt = ja(gt, 50);
  function At(ie) {
    N.scroll({
      left: N.scrollLeft + N.offsetWidth * 0.75 * (ie === "right" ? 1 : -1),
      behavior: "smooth"
    });
  }
  function Cr() {
    let ie = [], vt = Vt[0].children.length;
    for (let ir = 0; ir < vt; ir += 2)
      for (let vr = 0; vr < Xt; ++vr) {
        const ar = Vt[vr].children[ir];
        ar && ie.push(ar);
      }
    return ie;
  }
  function Tr(ie, vt = !0) {
    const vr = ye === "horizontal" ? "left" : "top";
    N.scroll({
      [vr]: ie,
      behavior: vt ? "smooth" : "instant"
    });
  }
  function wr(ie, vt, { animated: ir = !0, extraOffset: vr = 0, overflow: ar = "clamp" } = {}) {
    const j = ye === "horizontal", se = j ? "offsetLeft" : "offsetTop";
    vt > ie.length - 1 ? vt = ar === "ring" ? Po(vt, ie.length) : ie.length - 1 : vt < 0 && (vt = ar === "ring" ? Po(vt, ie.length) : 0);
    const d = ie[vt];
    if (d) {
      let R;
      if (M === "ltr" || !j)
        R = d[se] + 0.01 - ke / 2;
      else {
        const Pe = N.offsetWidth;
        R = d[se] + d.offsetWidth + 0.01 - ke / 2 - Pe;
      }
      if (vr) {
        R += vr;
        const Pe = j ? N.scrollWidth - N.offsetWidth : N.scrollHeight - N.offsetHeight;
        R > Pe && (ar === "clamp" ? R = Pe : ar === "ring" && (R = Po(R, Pe))), R < 0 && (ar === "clamp" ? R = 0 : ar === "ring" && (R = Po(R, Pe)));
      }
      Tr(R, ir);
    }
  }
  function Nr(ie, { overflow: vt = "clamp", animated: ir = !0 } = {}) {
    const vr = ye === "horizontal", ar = M === "ltr" || !vr ? 1 : -1, j = vr ? N.scrollLeft : N.scrollTop, se = vr ? N.scrollWidth - N.offsetWidth : N.scrollHeight - N.offsetHeight;
    let d = j * ar + ie;
    d > se ? vt === "clamp" ? d = se : vt === "ring" && (d = Po(d, se)) : d < 0 && (vt === "clamp" ? d = 0 : vt === "ring" && (d = Po(d, se))), Tr(d * ar, ir);
  }
  function Yr(ie, vt) {
    return ye === "horizontal" ? vt.right > ie.left && ie.right > vt.left : vt.bottom > ie.top && ie.bottom > vt.top;
  }
  function or(ie, vt) {
    return ye === "horizontal" ? vt.left >= ie.left && vt.right <= ie.right : vt.top >= ie.top && vt.bottom <= ie.bottom;
  }
  function lt(ie) {
    const vt = Cr(), ir = N.getBoundingClientRect(), vr = vt.findIndex((se) => or(ir, se.getBoundingClientRect()));
    if (vr !== -1)
      return vr;
    const ar = vt.map((se) => Yr(ir, se.getBoundingClientRect())), j = ar.findIndex(Boolean);
    return j !== -1 ? ie === "prev" && ar.filter(Boolean).length === 2 ? j + 1 : j : ie === "prev" ? 1 : vt.length - 2;
  }
  no(() => {
    if (e(40, Q = !0), gt(), Ct) {
      const ie = Cr();
      wr(ie, Ct, { animated: !1 });
    }
  }), cn(() => {
    e(40, Q = !1), Er.forEach((ie) => {
      ie.destroy();
    }), tr && !Z.fakeElement && (ut.unregisterInstance(tr), e(41, tr = void 0)), rr && rr.removeEventListener("change", mr), $t && $t.removeEventListener("change", mr);
  });
  function St(ie, vt) {
    Pr[ie ? "unshift" : "push"](() => {
      Vt[vt] = ie, e(9, Vt);
    });
  }
  function er(ie) {
    Pr[ie ? "unshift" : "push"](() => {
      ot = ie, e(3, ot);
    });
  }
  function Qt(ie) {
    Pr[ie ? "unshift" : "push"](() => {
      N = ie, e(2, N);
    });
  }
  const pr = () => At("left"), _t = () => At("right");
  return t.$$set = (ie) => {
    "componentContext" in ie && e(0, Z = ie.componentContext), "layoutParams" in ie && e(1, de = ie.layoutParams);
  }, t.$$.update = () => {
    var ie, vt, ir, vr, ar, j;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(57, n = Z.origJson), t.$$.dirty[1] & /*origJson*/
    67108864 && n && sr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(56, o = Array.isArray(Z.json.items) && Z.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && at(e(29, i = typeof ((ie = Z.json.item_builder) == null ? void 0 : ie.data) == "string" ? Z.getDerivedFromVars((vt = Z.json.item_builder) == null ? void 0 : vt.data, void 0, !0) : (ir = Z.json.item_builder) != null && ir.data ? Xo(Z.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && jt(e(28, s = Z.getDerivedFromVars(Z.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(27, a = Z.getDerivedFromVars(Z.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*columns, mobileQuery, tabletQuery*/
    3147776 | t.$$.dirty[2] & /*$jsonColumnCount*/
    256) {
      const se = Xn(ct, Xt), d = Z.json.responsive;
      d && typeof d == "object" && typeof window < "u" ? (rr || (e(51, rr = window.matchMedia("(max-width: 767px)")), e(52, $t = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), rr.addEventListener("change", mr), $t.addEventListener("change", mr)), mr()) : e(42, Xt = se);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(26, l = Z.getDerivedFromVars(Z.json.cross_content_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(25, c = Z.getDerivedFromVars(Z.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(24, u = Z.getDerivedFromVars(Z.json.cross_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(23, f = Z.getDerivedFromVars(Z.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(22, _ = Z.getDerivedFromVars(Z.json.scroll_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && dt(e(21, p = Z.getDerivedFromVars(Z.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && O(e(20, m = Z.getDerivedFromVars(Z.json.scrollbar))), t.$$.dirty[0] & /*componentContext*/
    1 && A(e(19, h = Z.getDerivedFromVars(Z.json.default_item))), t.$$.dirty[0] & /*componentContext, items*/
    129 | t.$$.dirty[1] & /*jsonItems, prevContext*/
    37748736 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    128) {
      let se = [];
      if (Z.json.item_builder && Array.isArray(Re) && Array.isArray(Z.json.item_builder.prototypes)) {
        const Xe = Z.json.item_builder;
        se = wl(Re, ut, Z, Xe);
      } else
        se = (Array.isArray(o) && o || []).map((Xe, je) => ({
          div: Xe,
          key: Xe.id || { index: je, data: Xe }
        }));
      const d = new Set(Er), R = /* @__PURE__ */ new Map();
      let Pe = !1;
      Y === Z && Er.forEach((Xe) => {
        Xe.key && (typeof Xe.key == "string" && R.has(Xe.key) ? Pe || (Pe = !0, Z.logError(X(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: Xe.key } }))) : R.set(
          typeof Xe.key == "string" ? Xe.key : Xe.key.index,
          Xe
        ));
      }), e(7, Er = se.map((Xe, je) => {
        let H = !Pe && R.get(Xe.id), Pt = R.get(je);
        return !H && !Xe.id && typeof Xe.key == "object" && typeof (Pt == null ? void 0 : Pt.key) == "object" && Zi(Pt.key.data, Xe.key.data) && (H = Pt), H ? (d.delete(H), H) : Z.produceChildContext(Xe.div, {
          path: je,
          variables: Xe.vars,
          id: Xe.id,
          key: Xe.key
        });
      }));
      for (const Xe of d)
        Xe.destroy();
      e(53, Y = Z);
    }
    if (t.$$.dirty[1] & /*mounted*/
    512 | t.$$.dirty[2] & /*$isDesktop*/
    64 && e(8, y = te && Q), t.$$.dirty[0] & /*shouldCheckArrows, itemsGridElem*/
    264 | t.$$.dirty[1] & /*resizeObserver*/
    256 && (y ? typeof ResizeObserver < "u" && (e(39, Nt = new ResizeObserver(() => {
      Kt();
    })), Nt.observe(ot)) : Nt && (Nt.disconnect(), e(39, Nt = null))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[2] & /*$jsonOrientation*/
    32 && e(4, ye = Ea(Se, ye)), t.$$.dirty[1] & /*align*/
    4096 | t.$$.dirty[2] & /*$jsonCrossContentAlignment*/
    16 && e(43, Ue = sm(x, Ue)), t.$$.dirty[1] & /*itemSpacing*/
    8192 | t.$$.dirty[2] & /*$jsonItemSpacing*/
    8 && (e(44, ke = on(pe, ke)), e(12, mt = _e(ke))), t.$$.dirty[1] & /*itemSpacing, crossSpacing*/
    40960 | t.$$.dirty[2] & /*$jsonCrossSpacing*/
    4 && (e(46, We = on(Ke, ke)), e(45, rt = _e(We))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*$direction, padding*/
    134283264 | t.$$.dirty[2] & /*$jsonPaddings*/
    2) {
      e(47, nr = us(re, M, nr));
      const se = ye === "horizontal" ? (ar = (vr = re == null ? void 0 : re.end) != null ? vr : re == null ? void 0 : re[M === "ltr" ? "right" : "left"]) != null ? ar : 0 : (j = re == null ? void 0 : re.bottom) != null ? j : 0, d = _e(se);
      e(13, Le = {
        width: ye === "horizontal" ? d : "1px",
        height: ye === "horizontal" ? "1px" : d,
        "margin-right": ye === "horizontal" && M === "ltr" ? "-" + d : void 0,
        "margin-left": ye === "horizontal" && M === "rtl" ? "-" + d : void 0,
        "margin-bottom": ye === "vertical" ? "-" + d : void 0
      });
    }
    if (t.$$.dirty[0] & /*items, orientation*/
    144) {
      let se = [];
      Er.forEach((d) => {
        const R = ye === "horizontal" ? "width" : "height";
        se.push(d.getDerivedFromVars({
          size: d.json[R],
          visibility: d.json.visibility
        }));
      }), Ie(e(14, Tt = Xi(se, (d) => [...d])));
    }
    if (t.$$.dirty[0] & /*items*/
    128 | t.$$.dirty[1] & /*columns*/
    2048 | t.$$.dirty[2] & /*$childStore*/
    1 && e(18, w = _m(Er, Ae, Xt)), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*columns, templateSizes*/
    133120 | t.$$.dirty[2] & /*$childStore*/
    1 && (e(48, kt = []), Xt > 1 || Ae.forEach((se, d) => {
      var R;
      se.visibility !== "gone" && (!se.size && ye === "horizontal" || ((R = se.size) == null ? void 0 : R.type) === "match_parent" ? kt.push("100%") : kt.push("max-content"), d + 1 < Ae.length && kt.push("auto"));
    }), kt.push("auto")), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, D = Z.json.fixed_columns === !0), t.$$.dirty[0] & /*orientation, scrollerStyle, childLayoutParams*/
    112 | t.$$.dirty[1] & /*align, $jsonScrollMode, itemSpacing*/
    1073754112) {
      const se = {};
      let d = {};
      if (e(49, hr = !1), d.treatMatchParentAs100 = !0, ye === "horizontal" ? (d.parentVAlign = Ue, d.parentContainerOrientation = "horizontal") : (d.parentHAlign = Ue, d.parentContainerOrientation = "vertical"), J === "paging") {
        e(49, hr = !0), d.scrollSnap = "start";
        const R = ye === "horizontal" ? "scroll-padding-left" : "scroll-padding-top";
        se[R] = _e(ke / 2);
      }
      e(5, Mt = ri(se, Mt)), e(6, Be = ri(d, Be));
    }
    t.$$.dirty[0] & /*orientation*/
    16 && e(54, z = ye === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*padding, crossGridGap, fixedColumns, columns*/
    16861184 && e(17, B = {
      padding: nr,
      "grid-gap": rt,
      ...D && Xt > 1 && ye === "vertical" ? {
        display: "grid",
        "grid-template-columns": `repeat(${Xt}, 1fr)`
      } : {}
    }), t.$$.dirty[1] & /*gridTemplate, templateSizes*/
    8519680 && e(16, ee = {
      [z]: lm(kt)
    }), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*scrollSnap, $jsonScrollbar*/
    537133056 && e(15, ue = {
      orientation: ye,
      "scroll-snap": hr,
      scrollbar: F === "auto" ? "auto" : "none"
    }), t.$$.dirty[1] & /*$jsonDefaultItem, defaultItem*/
    268959744 && e(50, Ct = on(q, Ct)), t.$$.dirty[0] & /*componentContext*/
    1 && Z.json && Kt(), t.$$.dirty[0] & /*componentContext, orientation, scroller*/
    21 | t.$$.dirty[1] & /*prevId, $direction*/
    134218752 && Z.json && (tr && (ut.unregisterInstance(tr), e(41, tr = void 0)), Z.id && !Z.fakeElement && (e(41, tr = Z.id), ut.registerInstance(tr, {
      setCurrentItem(se, d) {
        const R = Cr();
        if (se < 0 || se > R.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        wr(R, se, { animated: d });
      },
      setPreviousItem(se, d, R) {
        const Pe = lt("prev"), Xe = Cr();
        let je = Pe - se;
        wr(Xe, je, { animated: R, overflow: d });
      },
      setNextItem(se, d, R) {
        const Pe = ye === "horizontal", Xe = M === "ltr" || !Pe ? 1 : -1, je = Pe ? N.scrollLeft * Xe + N.offsetWidth === N.scrollWidth : N.scrollTop + N.offsetHeight === N.scrollHeight, H = Cr();
        if (je && d === "ring") {
          wr(H, 0, { animated: R });
          return;
        }
        let Ht = lt("next") + se;
        wr(H, Ht, { animated: R, overflow: d });
      },
      scrollToStart(se) {
        Tr(0, se);
      },
      scrollToEnd(se) {
        Tr(
          M === "ltr" || ye !== "horizontal" ? 1e6 : -1e6,
          se
        );
      },
      scrollToPosition(se, d) {
        Tr(
          M === "ltr" || ye !== "horizontal" ? se : -se,
          d
        );
      },
      scrollCombined({ step: se, offset: d, overflow: R, animated: Pe }) {
        if (se) {
          const je = lt(se > 0 ? "next" : "prev") + se;
          wr(Cr(), je, { animated: Pe, extraOffset: d, overflow: R });
        } else d && Nr(d, { overflow: R, animated: Pe });
      }
    })));
  }, [
    Z,
    de,
    N,
    ot,
    ye,
    Mt,
    Be,
    Er,
    y,
    Vt,
    pt,
    Dt,
    mt,
    Le,
    Tt,
    ue,
    ee,
    B,
    w,
    h,
    m,
    p,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    st,
    De,
    It,
    zt,
    Ar,
    Ot,
    gt,
    Kt,
    At,
    Nt,
    Q,
    tr,
    Xt,
    Ue,
    ke,
    rt,
    We,
    nr,
    kt,
    hr,
    Ct,
    rr,
    $t,
    Y,
    z,
    D,
    o,
    n,
    M,
    q,
    F,
    J,
    Ae,
    re,
    Ke,
    pe,
    x,
    Se,
    te,
    Re,
    ct,
    St,
    er,
    Qt,
    pr,
    _t
  ];
}
class pm extends Hr {
  constructor(r) {
    super(), Rr(this, r, hm, dm, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const gm = "appkit-outer", mm = "appkit-tabs", bm = "appkit-tabs__list", ym = "appkit-tabs__item", wm = "appkit-tabs__item_selected", vm = "appkit-tabs_animation_fade", km = "appkit-tabs_animation_none", jm = "appkit-tabs__item_actionable", Em = "appkit-tabs__panels", Cm = "appkit-tabs__swiper", Am = "appkit-tabs__swiper_animated", Vm = "appkit-tabs__swiper_inited", Sm = "appkit-tabs__panel", Im = "appkit-tabs__panel_visible", Dm = "appkit-tabs__separator", Fm = "appkit-tabs__delimitier", Vn = {
  outer: gm,
  "root__any-actions": "appkit-root__any-actions",
  tabs: mm,
  tabs__list: bm,
  "tabs__items-bg": "appkit-tabs__items-bg",
  "tabs__items-text": "appkit-tabs__items-text",
  tabs__item: ym,
  tabs__item_selected: wm,
  tabs_animation_fade: vm,
  tabs_animation_none: km,
  tabs__item_actionable: jm,
  tabs__panels: Em,
  "tabs_own-height": "appkit-tabs_own-height",
  tabs__swiper: Cm,
  tabs__swiper_animated: Am,
  tabs__swiper_inited: Vm,
  tabs__panel: Sm,
  tabs__panel_visible: Im,
  "tabs_height-parent_yes": "appkit-tabs_height-parent_yes",
  tabs__separator: Dm,
  tabs__delimitier: Fm,
  "tabs__tabs-highlighter": "appkit-tabs__tabs-highlighter"
};
function Tm(t, r) {
  var n, o;
  if (!t || !t.image_url || typeof t.image_url != "string")
    return r;
  const e = {
    url: t.image_url,
    width: 12,
    height: 12
  };
  return ((n = t.width) == null ? void 0 : n.type) === "fixed" && Rn(t.width.value) && (e.width = t.width.value), ((o = t.height) == null ? void 0 : o.type) === "fixed" && Rn(t.height.value) && (e.height = t.height.value), e;
}
const Pd = 37, Nd = 39, zd = 36, Bd = 35;
function Mm(t, r, e, n) {
  const o = [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ];
  for (let i = 0; i < o.length; ++i)
    if (o[i] && !Ln(o[i]))
      return n;
  return Is(t, r, e);
}
function Kc(t) {
  const r = t.touches[0], e = r.clientX || r.pageX, n = r.clientY || r.pageY;
  return { x: e, y: n };
}
function Pm(t) {
  let r, e;
  return r = new oo({
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
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Nm(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r, { enabled: i } = r;
  const s = Bo(i);
  return mi(va, { isEnabled: s }), t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams), "enabled" in a && e(2, i = a.enabled);
  }, t.$$.update = () => {
    t.$$.dirty & /*enabled*/
    4 && s.set(i);
  }, [n, o, i];
}
class zm extends Hr {
  constructor(r) {
    super(), Rr(this, r, Nm, Pm, Fr, {
      componentContext: 0,
      layoutParams: 1,
      enabled: 2
    });
  }
}
const { Boolean: Yc, window: Bm } = Ro;
function Xc(t, r, e) {
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
function Zc(t, r, e) {
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
function Qc(t, r, e) {
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
function Om(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Lm(t) {
  let r, e;
  const n = [
    {
      cls: wt(
        "tabs",
        Vn,
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
    $$slots: { default: [Hm] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = Io(o, n[i]);
  return r = new vn({ props: o }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(i) {
      Jt(r.$$.fragment, i);
    },
    m(i, s) {
      Lt(r, i, s), e = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams*/
      16777219 | s[1] & /*parentOfItems, replaceItems, devapi*/
      6356992 ? Ho(n, [
        s[0] & /*mods*/
        16777216 && {
          cls: wt(
            "tabs",
            Vn,
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
        2097152 && jd(
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
      e || (U(r.$$.fragment, i), e = !0);
    },
    o(i) {
      ne(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Rt(r, i);
    }
  };
}
function xc(t) {
  let r;
  return {
    c() {
      r = Me("span"), this.h();
    },
    l(e) {
      r = Ne(e, "SPAN", { class: !0 }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", Vn.tabs__delimitier), T(
        r,
        "width",
        /*delimitierStyle*/
        t[15].width ? _e(
          /*delimitierStyle*/
          t[15].width
        ) : void 0
      ), T(
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
      K(e, r, n);
    },
    p(e, n) {
      n[0] & /*delimitierStyle*/
      32768 && T(
        r,
        "width",
        /*delimitierStyle*/
        e[15].width ? _e(
          /*delimitierStyle*/
          e[15].width
        ) : void 0
      ), n[0] & /*delimitierStyle*/
      32768 && T(
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
      e && k(r);
    }
  };
}
function $c(t) {
  let r, e, n = (
    /*item*/
    t[99].title + ""
  ), o, i, s = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && xc(t)
  );
  return {
    c() {
      s && s.c(), r = br(), e = Me("span"), o = Gn(n), this.h();
    },
    l(a) {
      s && s.l(a), r = yr(a), e = Ne(a, "SPAN", { class: !0 });
      var l = Ee(e);
      o = to(l, n), l.forEach(k), this.h();
    },
    h() {
      g(e, "class", i = wt("tabs__item", Vn, {
        selected: (
          /*isSelected*/
          t[104]
        ),
        actionable: !!/*item*/
        t[99].title_click_action
      }));
    },
    m(a, l) {
      s && s.m(a, l), K(a, r, l), K(a, e, l), Et(e, o);
    },
    p(a, l) {
      /*delimitierStyle*/
      a[15] && /*index*/
      a[100] > 0 ? s ? s.p(a, l) : (s = xc(a), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null), l[0] & /*$childStore*/
      262144 && n !== (n = /*item*/
      a[99].title + "") && ao(o, n), l[0] & /*$childStore, selected*/
      393216 && i !== (i = wt("tabs__item", Vn, {
        selected: (
          /*isSelected*/
          a[104]
        ),
        actionable: !!/*item*/
        a[99].title_click_action
      })) && g(e, "class", i);
    },
    d(a) {
      a && (k(r), k(e)), s && s.d(a);
    }
  };
}
function eu(t) {
  let r, e;
  return {
    c() {
      r = Me("div"), this.h();
    },
    l(n) {
      r = Ne(n, "DIV", { class: !0, style: !0 }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", Vn["tabs__tabs-highlighter"]), g(r, "style", e = fr(
        /*selectedTabStyles*/
        t[36]
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o[1] & /*selectedTabStyles*/
      32 && e !== (e = fr(
        /*selectedTabStyles*/
        n[36]
      )) && g(r, "style", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function tu(t) {
  let r, e;
  return {
    c() {
      r = Me("img"), this.h();
    },
    l(n) {
      r = Ne(n, "IMG", {
        class: !0,
        alt: !0,
        loading: !0,
        decoding: !0,
        src: !0
      }), this.h();
    },
    h() {
      g(r, "class", Vn.tabs__delimitier), g(r, "alt", ""), g(r, "loading", "lazy"), g(r, "decoding", "async"), eo(r.src, e = /*delimitierStyle*/
      t[15].url) || g(r, "src", e), T(
        r,
        "width",
        /*delimitierStyle*/
        t[15].width ? _e(
          /*delimitierStyle*/
          t[15].width
        ) : void 0
      ), T(
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
      K(n, r, o);
    },
    p(n, o) {
      o[0] & /*delimitierStyle*/
      32768 && !eo(r.src, e = /*delimitierStyle*/
      n[15].url) && g(r, "src", e), o[0] & /*delimitierStyle*/
      32768 && T(
        r,
        "width",
        /*delimitierStyle*/
        n[15].width ? _e(
          /*delimitierStyle*/
          n[15].width
        ) : void 0
      ), o[0] & /*delimitierStyle*/
      32768 && T(
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
      n && k(r);
    }
  };
}
function Rm(t) {
  let r = (
    /*item*/
    t[99].title + ""
  ), e;
  return {
    c() {
      e = Gn(r);
    },
    l(n) {
      e = to(n, r);
    },
    m(n, o) {
      K(n, e, o);
    },
    p(n, o) {
      o[0] & /*$childStore*/
      262144 && r !== (r = /*item*/
      n[99].title + "") && ao(e, r);
    },
    d(n) {
      n && k(e);
    }
  };
}
function ru(t) {
  let r, e, n, o = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && tu(t)
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
      cls: wt("tabs__item", Vn, {
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
        ].filter(Qs) : []
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
      $$slots: { default: [Rm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      o && o.c(), r = br(), Ut(e.$$.fragment);
    },
    l(s) {
      o && o.l(s), r = yr(s), Jt(e.$$.fragment, s);
    },
    m(s, a) {
      o && o.m(s, a), K(s, r, a), Lt(e, s, a), n = !0;
    },
    p(s, a) {
      t = s, /*delimitierStyle*/
      t[15] && /*index*/
      t[100] > 0 ? o ? o.p(t, a) : (o = tu(t), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
      const l = {};
      a[0] & /*componentContext*/
      1 && (l.componentContext = /*componentContext*/
      t[0]), a[0] & /*$childStore, selected*/
      393216 && (l.cls = wt("tabs__item", Vn, {
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
      ].filter(Qs) : []), a[0] & /*$childStore, selected, componentContext*/
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
      n || (U(e.$$.fragment, s), n = !0);
    },
    o(s) {
      ne(e.$$.fragment, s), n = !1;
    },
    d(s) {
      s && k(r), o && o.d(s), Rt(e, s);
    }
  };
}
function nu(t) {
  let r, e;
  return {
    c() {
      r = Me("div"), this.h();
    },
    l(n) {
      r = Ne(n, "DIV", { class: !0, style: !0 }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", Vn.tabs__separator), g(r, "style", e = fr(
        /*separatorStyle*/
        t[38]
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o[1] & /*separatorStyle*/
      128 && e !== (e = fr(
        /*separatorStyle*/
        n[38]
      )) && g(r, "style", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function ou(t) {
  let r, e;
  return r = new zm({
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
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function iu(t) {
  let r, e, n, o, i, s, a = (
    /*childComponentContext*/
    t[101] && ou(t)
  );
  return {
    c() {
      r = Me("div"), a && a.c(), e = br(), this.h();
    },
    l(l) {
      r = Ne(l, "DIV", {
        class: !0,
        role: !0,
        id: !0,
        "aria-labelledby": !0,
        style: !0
      });
      var c = Ee(r);
      a && a.l(c), e = yr(c), c.forEach(k), this.h();
    },
    h() {
      g(r, "class", n = wt("tabs__panel", Vn, {
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
      t[100]), T(
        r,
        "left",
        /*index*/
        t[100] * 100 + "%"
      );
    },
    m(l, c) {
      K(l, r, c), a && a.m(r, null), Et(r, e), s = !0;
    },
    p(l, c) {
      /*childComponentContext*/
      l[101] ? a ? (a.p(l, c), c[0] & /*$childStore*/
      262144 | c[1] & /*showedPanels*/
      4 && U(a, 1)) : (a = ou(l), a.c(), U(a, 1), a.m(r, e)) : a && (dr(), ne(a, 1, 1, () => {
        a = null;
      }), _r()), (!s || c[0] & /*$childStore*/
      262144 | c[1] & /*visiblePanels*/
      8 && n !== (n = wt("tabs__panel", Vn, {
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
      262144) && T(
        r,
        "left",
        /*index*/
        l[100] * 100 + "%"
      );
    },
    i(l) {
      s || (U(a), s = !0);
    },
    o(l) {
      ne(a), s = !1;
    },
    d(l) {
      l && k(r), a && a.d();
    }
  };
}
function Hm(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, p, m, h, y = lr(
    /*$childStore*/
    t[18]
  ), w = [];
  for (let A = 0; A < y.length; A += 1)
    w[A] = $c(Qc(t, y, A));
  let D = (
    /*animationType*/
    t[16] === "slide" && /*selectedTabStyles*/
    t[36] && eu(t)
  ), z = lr(
    /*$childStore*/
    t[18]
  ), B = [];
  for (let A = 0; A < z.length; A += 1)
    B[A] = ru(Zc(t, z, A));
  const ee = (A) => ne(B[A], 1, 1, () => {
    B[A] = null;
  });
  let ue = (
    /*$jsonSeparator*/
    t[20] && nu(t)
  ), M = lr(
    /*$childStore*/
    t[18]
  ), q = [];
  for (let A = 0; A < M.length; A += 1)
    q[A] = iu(Xc(t, M, A));
  const ae = (A) => ne(q[A], 1, 1, () => {
    q[A] = null;
  });
  return {
    c() {
      r = Me("div"), e = Me("div");
      for (let A = 0; A < w.length; A += 1)
        w[A].c();
      n = br(), D && D.c(), o = br(), i = Me("div");
      for (let A = 0; A < B.length; A += 1)
        B[A].c();
      a = br(), ue && ue.c(), l = br(), c = Me("div"), u = Me("div");
      for (let A = 0; A < q.length; A += 1)
        q[A].c();
      this.h();
    },
    l(A) {
      r = Ne(A, "DIV", { class: !0, role: !0 });
      var F = Ee(r);
      e = Ne(F, "DIV", { class: !0, "aria-hidden": !0 });
      var P = Ee(e);
      for (let fe = 0; fe < w.length; fe += 1)
        w[fe].l(P);
      n = yr(P), D && D.l(P), P.forEach(k), o = yr(F), i = Ne(F, "DIV", { class: !0 });
      var O = Ee(i);
      for (let fe = 0; fe < B.length; fe += 1)
        B[fe].l(O);
      O.forEach(k), F.forEach(k), a = yr(A), ue && ue.l(A), l = yr(A), c = Ne(A, "DIV", { class: !0 });
      var J = Ee(c);
      u = Ne(J, "DIV", { class: !0 });
      var he = Ee(u);
      for (let fe = 0; fe < q.length; fe += 1)
        q[fe].l(he);
      he.forEach(k), J.forEach(k), this.h();
    },
    h() {
      g(e, "class", Vn["tabs__items-bg"]), g(e, "aria-hidden", "true"), g(i, "class", Vn["tabs__items-text"]), g(r, "class", s = Vn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Sr["root_restrict-scroll"] : "")), g(r, "role", "tablist"), T(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? wo(
          /*titlePadding*/
          t[14],
          /*$direction*/
          t[19]
        ) : ""
      ), T(r, "--divkit-tabs-font-size", _e(
        /*tabFontSize*/
        t[4]
      )), T(
        r,
        "--divkit-tabs-paddings",
        /*tabPaddings*/
        t[5]
      ), T(
        r,
        "--divkit-tabs-line-height",
        /*tabLineHeight*/
        t[25]
      ), T(
        r,
        "--divkit-tabs-letter-spacing",
        /*tabLetterSpacing*/
        t[26]
      ), T(
        r,
        "--divkit-tabs-active-font-weight",
        /*tabActiveFontWeight*/
        t[7] || ""
      ), T(
        r,
        "--divkit-tabs-inactive-font-weight",
        /*tabInactiveFontWeight*/
        t[8] || ""
      ), T(
        r,
        "--divkit-tabs-active-font-family",
        /*tabActiveFontFamily*/
        t[27] || ""
      ), T(
        r,
        "--divkit-tabs-inactive-font-family",
        /*tabInactiveFontFamily*/
        t[29] || ""
      ), T(
        r,
        "--divkit-tabs-active-font-variation-settings",
        /*tabActiveFontVariationSettings*/
        t[28] || ""
      ), T(
        r,
        "--divkit-tabs-inactive-font-variation-settings",
        /*tabInactiveFontVariationSettings*/
        t[30] || ""
      ), T(
        r,
        "--divkit-tabs-active-text-color",
        /*tabActiveTextColor*/
        t[9]
      ), T(
        r,
        "--divkit-tabs-inactive-text-color",
        /*tabInactiveTextColor*/
        t[10]
      ), T(
        r,
        "--divkit-tabs-active-background-color",
        /*tabActiveBackground*/
        t[11]
      ), T(
        r,
        "--divkit-tabs-inactive-background-color",
        /*tabInactiveBackground*/
        t[12]
      ), T(
        r,
        "--divkit-tabs-border-radius",
        /*tabBorderRadius*/
        t[6]
      ), T(
        r,
        "--divkit-tabs-items-spacing",
        /*tabItemSpacing*/
        t[13] ? dn(
          /*tabItemSpacing*/
          t[13] * 10 / /*tabFontSize*/
          t[4]
        ) : ""
      ), T(
        r,
        "--divkit-tabs-animation-duration",
        /*animationDuration*/
        t[35] !== void 0 ? `${/*animationDuration*/
        t[35]}ms` : ""
      ), g(u, "class", f = wt("tabs__swiper", Vn, {
        inited: (
          /*isSwipeInitialized*/
          t[31]
        ),
        animated: (
          /*isAnimated*/
          t[32]
        )
      })), g(c, "class", _ = Vn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Sr["root_restrict-scroll"] : ""));
    },
    m(A, F) {
      K(A, r, F), Et(r, e);
      for (let P = 0; P < w.length; P += 1)
        w[P] && w[P].m(e, null);
      Et(e, n), D && D.m(e, null), Et(r, o), Et(r, i);
      for (let P = 0; P < B.length; P += 1)
        B[P] && B[P].m(i, null);
      t[74](r), K(A, a, F), ue && ue.m(A, F), K(A, l, F), K(A, c, F), Et(c, u);
      for (let P = 0; P < q.length; P += 1)
        q[P] && q[P].m(u, null);
      t[75](u), t[76](c), p = !0, m || (h = [
        $e(
          r,
          "keydown",
          /*onTabKeydown*/
          t[55]
        ),
        $e(c, "touchstart", function() {
          Lr(
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
        $e(c, "touchmove", function() {
          Lr(
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
        $e(c, "touchend", function() {
          Lr(
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
        $e(c, "touchcancel", function() {
          Lr(
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
    p(A, F) {
      if (t = A, F[0] & /*$childStore, selected, delimitierStyle*/
      425984) {
        y = lr(
          /*$childStore*/
          t[18]
        );
        let P;
        for (P = 0; P < y.length; P += 1) {
          const O = Qc(t, y, P);
          w[P] ? w[P].p(O, F) : (w[P] = $c(O), w[P].c(), w[P].m(e, n));
        }
        for (; P < w.length; P += 1)
          w[P].d(1);
        w.length = y.length;
      }
      if (/*animationType*/
      t[16] === "slide" && /*selectedTabStyles*/
      t[36] ? D ? D.p(t, F) : (D = eu(t), D.c(), D.m(e, null)) : D && (D.d(1), D = null), F[0] & /*componentContext, $childStore, selected, delimitierStyle*/
      425985 | F[1] & /*instId, selectItem*/
      8912896) {
        z = lr(
          /*$childStore*/
          t[18]
        );
        let P;
        for (P = 0; P < z.length; P += 1) {
          const O = Zc(t, z, P);
          B[P] ? (B[P].p(O, F), U(B[P], 1)) : (B[P] = ru(O), B[P].c(), U(B[P], 1), B[P].m(i, null));
        }
        for (dr(), P = z.length; P < B.length; P += 1)
          ee(P);
        _r();
      }
      if ((!p || F[1] & /*$jsonRestrictParentScroll*/
      131072 && s !== (s = Vn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Sr["root_restrict-scroll"] : ""))) && g(r, "class", s), F[0] & /*titlePadding, $direction*/
      540672 && T(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? wo(
          /*titlePadding*/
          t[14],
          /*$direction*/
          t[19]
        ) : ""
      ), F[0] & /*tabFontSize*/
      16 && T(r, "--divkit-tabs-font-size", _e(
        /*tabFontSize*/
        t[4]
      )), F[0] & /*tabPaddings*/
      32 && T(
        r,
        "--divkit-tabs-paddings",
        /*tabPaddings*/
        t[5]
      ), F[0] & /*tabLineHeight*/
      33554432 && T(
        r,
        "--divkit-tabs-line-height",
        /*tabLineHeight*/
        t[25]
      ), F[0] & /*tabLetterSpacing*/
      67108864 && T(
        r,
        "--divkit-tabs-letter-spacing",
        /*tabLetterSpacing*/
        t[26]
      ), F[0] & /*tabActiveFontWeight*/
      128 && T(
        r,
        "--divkit-tabs-active-font-weight",
        /*tabActiveFontWeight*/
        t[7] || ""
      ), F[0] & /*tabInactiveFontWeight*/
      256 && T(
        r,
        "--divkit-tabs-inactive-font-weight",
        /*tabInactiveFontWeight*/
        t[8] || ""
      ), F[0] & /*tabActiveFontFamily*/
      134217728 && T(
        r,
        "--divkit-tabs-active-font-family",
        /*tabActiveFontFamily*/
        t[27] || ""
      ), F[0] & /*tabInactiveFontFamily*/
      536870912 && T(
        r,
        "--divkit-tabs-inactive-font-family",
        /*tabInactiveFontFamily*/
        t[29] || ""
      ), F[0] & /*tabActiveFontVariationSettings*/
      268435456 && T(
        r,
        "--divkit-tabs-active-font-variation-settings",
        /*tabActiveFontVariationSettings*/
        t[28] || ""
      ), F[0] & /*tabInactiveFontVariationSettings*/
      1073741824 && T(
        r,
        "--divkit-tabs-inactive-font-variation-settings",
        /*tabInactiveFontVariationSettings*/
        t[30] || ""
      ), F[0] & /*tabActiveTextColor*/
      512 && T(
        r,
        "--divkit-tabs-active-text-color",
        /*tabActiveTextColor*/
        t[9]
      ), F[0] & /*tabInactiveTextColor*/
      1024 && T(
        r,
        "--divkit-tabs-inactive-text-color",
        /*tabInactiveTextColor*/
        t[10]
      ), F[0] & /*tabActiveBackground*/
      2048 && T(
        r,
        "--divkit-tabs-active-background-color",
        /*tabActiveBackground*/
        t[11]
      ), F[0] & /*tabInactiveBackground*/
      4096 && T(
        r,
        "--divkit-tabs-inactive-background-color",
        /*tabInactiveBackground*/
        t[12]
      ), F[0] & /*tabBorderRadius*/
      64 && T(
        r,
        "--divkit-tabs-border-radius",
        /*tabBorderRadius*/
        t[6]
      ), F[0] & /*tabItemSpacing, tabFontSize*/
      8208 && T(
        r,
        "--divkit-tabs-items-spacing",
        /*tabItemSpacing*/
        t[13] ? dn(
          /*tabItemSpacing*/
          t[13] * 10 / /*tabFontSize*/
          t[4]
        ) : ""
      ), F[1] & /*animationDuration*/
      16 && T(
        r,
        "--divkit-tabs-animation-duration",
        /*animationDuration*/
        t[35] !== void 0 ? `${/*animationDuration*/
        t[35]}ms` : ""
      ), /*$jsonSeparator*/
      t[20] ? ue ? ue.p(t, F) : (ue = nu(t), ue.c(), ue.m(l.parentNode, l)) : ue && (ue.d(1), ue = null), F[0] & /*$childStore, childLayoutParams, selected*/
      393224 | F[1] & /*visiblePanels, instId, showedPanels*/
      524300) {
        M = lr(
          /*$childStore*/
          t[18]
        );
        let P;
        for (P = 0; P < M.length; P += 1) {
          const O = Xc(t, M, P);
          q[P] ? (q[P].p(O, F), U(q[P], 1)) : (q[P] = iu(O), q[P].c(), U(q[P], 1), q[P].m(u, null));
        }
        for (dr(), P = M.length; P < q.length; P += 1)
          ae(P);
        _r();
      }
      (!p || F[1] & /*isSwipeInitialized, isAnimated*/
      3 && f !== (f = wt("tabs__swiper", Vn, {
        inited: (
          /*isSwipeInitialized*/
          t[31]
        ),
        animated: (
          /*isAnimated*/
          t[32]
        )
      }))) && g(u, "class", f), (!p || F[1] & /*$jsonRestrictParentScroll*/
      131072 && _ !== (_ = Vn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Sr["root_restrict-scroll"] : ""))) && g(c, "class", _);
    },
    i(A) {
      if (!p) {
        for (let F = 0; F < z.length; F += 1)
          U(B[F]);
        for (let F = 0; F < M.length; F += 1)
          U(q[F]);
        p = !0;
      }
    },
    o(A) {
      B = B.filter(Yc);
      for (let F = 0; F < B.length; F += 1)
        ne(B[F]);
      q = q.filter(Yc);
      for (let F = 0; F < q.length; F += 1)
        ne(q[F]);
      p = !1;
    },
    d(A) {
      A && (k(r), k(a), k(l), k(c)), _n(w, A), D && D.d(), _n(B, A), t[74](null), ue && ue.d(A), _n(q, A), t[75](null), t[76](null), m = !1, Kr(h);
    }
  };
}
function Wm(t) {
  let r, e, n, o, i, s;
  const a = [Lm, Om], l = [];
  function c(u, f) {
    return (
      /*hasError*/
      u[2] ? -1 : 0
    );
  }
  return ~(r = c(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(u) {
      e && e.l(u), n = He();
    },
    m(u, f) {
      ~r && l[r].m(u, f), K(u, n, f), o = !0, i || (s = $e(Bm, "resize", function() {
        Lr(
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
      r = c(t), r === _ ? ~r && l[r].p(t, f) : (e && (dr(), ne(l[_], 1, 1, () => {
        l[_] = null;
      }), _r()), ~r ? (e = l[r], e ? e.p(t, f) : (e = l[r] = a[r](t), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(u) {
      o || (U(e), o = !0);
    },
    o(u) {
      ne(e), o = !1;
    },
    d(u) {
      u && k(n), ~r && l[r].d(u), i = !1, s();
    }
  };
}
function Um(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p, m, h, y, w, D, z, B, ee = E, ue = () => (ee(), ee = V(a, (j) => e(67, B = j)), a), M, q = E, ae = () => (q(), q = V(m, (j) => e(68, M = j)), m), A, F = E, P = () => (F(), F = V(p, (j) => e(69, A = j)), p), O, J = E, he = () => (J(), J = V(f, (j) => e(70, O = j)), f), fe, Ae, me = E, Ie = () => (me(), me = V(u, (j) => e(71, Ae = j)), u), re, tt = E, qe = () => (tt(), tt = V(c, (j) => e(72, re = j)), c), Ke, ve = E, Te = () => (ve(), ve = V(l, (j) => e(20, Ke = j)), l), pe, ce = E, be = () => (ce(), ce = V(_, (j) => e(48, pe = j)), _);
  t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => J()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => ce());
  let { componentContext: x } = r, { layoutParams: ge = void 0 } = r;
  const oe = zr(xr), Se = oe.direction;
  Cn(t, Se, (j) => e(19, fe = j));
  const Je = oe.genId("tabs");
  let Ye, te = !1, Re = Bo([]);
  Cn(t, Re, (j) => e(18, z = j));
  let ze = {}, at, ct, nt, jt = {}, st = 12, Bt = "", dt = "", Z = "", de = "", ut, De = "", N = "", Vt, pt = "", Dt = "", Nt = "", ot = "", Q = "", It = "", zt = 0, tr = "", Xt = "", ye = null, Ue = !1, mt = !1, ke, rt = [], We = [], nr = null, Le = null, kt = null, Tt, Mt = !1, hr = !1, Be, Ct, sr, rr = "slide", $t, mr, Ar, Ot;
  function Er() {
    e(4, st = 12), e(5, Bt = ""), e(6, de = ""), e(7, ut = void 0), e(27, De = ""), e(28, N = ""), e(8, Vt = void 0), e(29, pt = ""), e(30, Dt = ""), e(9, Nt = ""), e(10, ot = ""), e(11, Q = ""), e(12, It = ""), e(13, zt = 0), e(61, tr = ""), e(62, Xt = ""), e(14, ye = null), e(15, sr = void 0), e(16, rr = "slide"), e(35, $t = 300), e(36, mr = void 0), ie();
  }
  function Y(j) {
    x.json.items && e(0, x = Ar = {
      ...x,
      json: {
        ...x.json,
        items: x.json.items.map((se, d) => ({ ...se, div: j[d] }))
      }
    });
  }
  function gt(j) {
    if (te)
      return;
    const se = new Set(rt.filter(Wo)), d = /* @__PURE__ */ new Map();
    Ar === x && rt.forEach((R) => {
      R && d.set(R.json, R);
    }), e(33, rt = j.map((R, Pe) => {
      if ((Pe === h || rt[Pe]) && (R != null && R.div)) {
        const Xe = d.get(R.div);
        return Xe ? (se.delete(Xe), Xe) : x.produceChildContext(R.div, { path: Pe });
      }
    })), e(34, We = j.map((R, Pe) => Pe === h));
    for (const R of se)
      R.destroy();
    Ar = x;
  }
  async function Kt(j, se, d) {
    if (ke = h, e(17, h = j), St(), Tr(d), ie(), se) {
      await Tn();
      const R = at.querySelector(`.${Vn.tabs__item_selected}`);
      R && R.focus();
    }
  }
  function At(j, se = !1) {
    const d = z == null ? void 0 : z.length;
    if (!d)
      return;
    const R = z.map((H) => H.index);
    let Xe = R.indexOf(h) + j;
    Xe >= d ? Xe = 0 : Xe < 0 && (Xe = d - 1);
    const je = R[Xe];
    Kt(je, se, !0);
  }
  function Cr(j, se) {
    return h !== se ? (Kt(se, !1, !0), !1) : !0;
  }
  function Tr(j = !0) {
    e(32, mt = j), wr(-h * 100), Nr(), Yr(), or(), Ct = -h * ct.clientWidth;
  }
  async function wr(j) {
    await Tn(), e(23, nt.style.transform = `translate3d(${j}%,0,0)`, nt);
  }
  function Nr(j = !1) {
    const se = j ? Math.max(0, h - 1) : Math.min(h, ke != null ? ke : h), d = j ? Math.min(o.length - 1, h + 1) : Math.max(h, ke != null ? ke : h);
    oe.devtoolCreateHierarchy, rt.forEach((R) => {
      R == null || R.destroy();
    }), e(33, rt = rt.map((R, Pe) => {
      var je;
      if (R)
        return R;
      const Xe = (je = o[Pe]) == null ? void 0 : je.div;
      if ((Pe >= se && Pe <= d || oe.devtoolCreateHierarchy === "eager" && !1) && Xe)
        return x.produceChildContext(Xe, { path: Pe });
    })), e(34, We = We.map((R, Pe) => Pe >= se && Pe <= d));
  }
  async function Yr() {
    var se;
    if (((se = x.json.height) == null ? void 0 : se.type) === "match_parent")
      return;
    await Tn();
    const j = document.getElementById(`${Je}-panel-${h}`);
    j && e(22, ct.style.height = _e(j.offsetHeight), ct);
  }
  function or() {
    nr && clearTimeout(nr), nr = window.setTimeout(
      () => {
        e(34, We = o.map((j, se) => se === h));
      },
      400
    );
  }
  function lt(j) {
    if (!(j.ctrlKey || j.shiftKey || j.altKey || j.metaKey) && o) {
      if (j.which === Pd)
        At(-1, !0);
      else if (j.which === Nd)
        At(1, !0);
      else if (j.which === zd)
        Kt(0, !0, !0);
      else if (j.which === Bd)
        Kt(o.length - 1, !0, !0);
      else
        return;
      j.preventDefault();
    }
  }
  function St() {
    Ue || (e(31, Ue = !0), e(22, ct.style.height = _e(ct.clientHeight), ct), e(23, nt.style.transform = `translate3d(${-(ke != null ? ke : h) * 100}%,0,0)`, nt));
  }
  function er(j) {
    var R;
    const se = j.target, d = (R = se == null ? void 0 : se.closest) == null ? void 0 : R.call(se, `.${Sr["root_restrict-scroll"]}`);
    o.length < 2 || j.touches.length > 1 || d && d !== ct || (Mt = !1, hr = !1, Le = Kc(j), kt = null, Tt = Date.now(), Be = Ct || -h * ct.clientWidth, e(32, mt = !1), nr && clearTimeout(nr));
  }
  function Qt(j) {
    const se = Kc(j);
    if (!Le || kt && kt.x === se.x && kt.y === se.y)
      return;
    kt = se;
    const d = ct.clientWidth;
    if (Mt) {
      Ct = se.x - Le.x + Be;
      const R = d * o.length;
      if (Ct > 0)
        Ct = Ct * d / (Ct + d * 3);
      else if (-Ct + d > R) {
        let Pe = -Ct + d - R;
        Pe = Pe * d / (Pe + d * 3), Ct = d - R - Pe;
      }
      wr(Ct * 100 / d);
    } else Math.abs(se.y - Le.y) > 10 ? hr = !0 : !hr && Math.abs(se.x - Le.x) > 8 && (St(), Mt = !0, Le = se, wr(-h * 100), Nr(!0));
    Mt && j.cancelable && j.preventDefault();
  }
  function pr() {
    hr = !1, Le = null;
    let j = h;
    if (!Mt)
      return;
    Mt = !1;
    const se = Math.min(512, ct.clientWidth), d = Math.abs(Be - Ct), R = Math.min(1, (Date.now() - Tt) / 750);
    d > se / 4 * R && (j += Be > Ct ? 1 : -1), j >= o.length ? j = o.length - 1 : j < 0 && (j = 0), j === h ? (e(32, mt = !0), Ct = -j * se, wr(-j * 100), or()) : Kt(j, !1, !0);
  }
  function _t(j, se) {
    return j > o.length - 1 ? se === "ring" ? Po(j, o.length) : o.length - 1 : j < 0 ? se === "ring" ? Po(j, o.length) : 0 : j;
  }
  function ie() {
    rr === "slide" && Tn().then(() => {
      const j = at == null ? void 0 : at.querySelector("." + Vn.tabs__item_selected);
      j && e(36, mr = {
        left: `${j.offsetLeft}px`,
        width: `${j.offsetWidth}px`,
        height: `${j.offsetHeight}px`
      });
    });
  }
  no(() => {
    ie(), oe.devtoolCreateHierarchy;
  }), cn(() => {
    rt.forEach((j) => {
      j == null || j.destroy();
    }), Ye && (oe.unregisterInstance(Ye), e(60, Ye = void 0));
  });
  const vt = (j, se) => Cr(se, j);
  function ir(j) {
    Pr[j ? "unshift" : "push"](() => {
      at = j, e(21, at);
    });
  }
  function vr(j) {
    Pr[j ? "unshift" : "push"](() => {
      nt = j, e(23, nt);
    });
  }
  function ar(j) {
    Pr[j ? "unshift" : "push"](() => {
      ct = j, e(22, ct);
    });
  }
  return t.$$set = (j) => {
    "componentContext" in j && e(0, x = j.componentContext), "layoutParams" in j && e(1, ge = j.layoutParams);
  }, t.$$.update = () => {
    var j, se, d, R, Pe, Xe, je, H, Pt, Ht;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(66, n = x.origJson), t.$$.dirty[2] & /*origJson*/
    16 && n && Er(), t.$$.dirty[0] & /*componentContext*/
    1 && e(63, o = Array.isArray(x.json.items) && x.json.items || []), t.$$.dirty[2] & /*items*/
    2 && e(47, i = o.map((Ze) => {
      var ht;
      return { json: Ze.div, id: (ht = Ze.div) == null ? void 0 : ht.id };
    })), t.$$.dirty[0] & /*componentContext*/
    1 && e(65, s = x.getJsonWithVars(x.json.selected_tab)), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(46, a = x.getDerivedFromVars(x.json.tab_title_style, void 0, !0))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(45, l = x.getDerivedFromVars(x.json.has_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(44, c = x.getDerivedFromVars(x.json.separator_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(43, u = x.getDerivedFromVars(x.json.separator_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(42, f = x.getDerivedFromVars(x.json.switch_tabs_by_content_swipe_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(41, _ = x.getDerivedFromVars(x.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && P(e(40, p = x.getDerivedFromVars(x.json.title_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(39, m = x.getDerivedFromVars(x.json.tab_title_delimiter))), t.$$.dirty[2] & /*jsonSelectedTab*/
    8 && e(17, h = s && Number(s) || 0), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*items*/
    2)
      if (Array.isArray(o) && o.length) {
        let Ze = [];
        o.forEach((ht, Yt) => {
          const Mr = x.getJsonWithVars({
            index: Yt,
            title: ht.title,
            title_click_action: ht.title_click_action
          });
          Mr.title && typeof Mr.title == "string" ? Ze.push(Mr) : x.logError(X(new Error("Incorrect title for the tab"), { additional: { index: Yt } }));
        }), Re.set(Ze);
      } else
        Re.set([]);
    if (t.$$.dirty[0] & /*$childStore, componentContext*/
    262145 && (z != null && z.length ? e(2, te = !1) : (e(2, te = !0), x.logError(X(new Error('Incorrect or empty "items" prop for div "tabs"'))))), t.$$.dirty[0] & /*componentContext, childLayoutParams*/
    9) {
      let Ze = { parentContainerOrientation: "horizontal" };
      ((j = x.json.width) == null ? void 0 : j.type) === "wrap_content" && (Ze.parentHorizontalWrapContent = !0), (!x.json.height || x.json.height.type === "wrap_content") && (Ze.parentVerticalWrapContent = !0), e(3, ze = ri(Ze, ze));
    }
    if (t.$$.dirty[0] & /*hasError, selected, componentContext*/
    131077 | t.$$.dirty[2] & /*items*/
    2 && !te && (h < 0 || h >= o.length) && (x.logError(X(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: x.json.selected_tab,
        length: o.length
      }
    })), e(17, h = h < 0 ? 0 : o.length - 1)), t.$$.dirty[0] & /*hasError, $childStore, selected, componentContext*/
    393221 && !te && !z.some((Ze) => h === Ze.index) && (x.logError(X(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: x.json.selected_tab
      }
    })), e(17, h = ((se = z[0]) == null ? void 0 : se.index) || 0)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && e(64, y = B || {}), t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(4, st = Xn(y.font_size, st)), t.$$.dirty[0] & /*tabFontSize, $direction, tabPaddings*/
    524336 | t.$$.dirty[2] & /*tabStyle*/
    4 && (y.font_size || y.paddings)) {
      const Ze = y.paddings || { top: 6, right: 8, bottom: 6, left: 8 }, ht = {
        top: (Number(Ze.top) || 0) / st * 10,
        right: (Number(fe === "ltr" ? Ze.end : Ze.start) || Number(Ze.right) || 0) / st * 10,
        bottom: (Number(Ze.bottom) || 0) / st * 10,
        left: (Number(fe === "ltr" ? Ze.start : Ze.end) || Number(Ze.left) || 0) / st * 10
      };
      e(5, Bt = us(ht, fe, Bt));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Ze = y.line_height;
      Ze !== void 0 && Rn(Ze) && e(25, dt = _e(Ze / st * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Ze = y.letter_spacing;
      Ze !== void 0 && Ln(Ze) && e(26, Z = _e(Ze / st * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize, tabBorderRadius*/
    80 | t.$$.dirty[2] & /*tabStyle*/
    4 && (y.corner_radius || y.corners_radius || y.font_size)) {
      const Ze = (d = y.corner_radius) != null ? d : 1e3;
      y.corners_radius ? e(6, de = Mm(y.corners_radius, Ze, st, de)) : Ln(Ze) && e(6, de = _e(Ze / st * 10));
    }
    t.$$.dirty[0] & /*tabActiveFontWeight*/
    128 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(7, ut = ki(y.active_font_weight || y.font_weight, void 0, ut)), y.font_family && typeof y.font_family == "string" ? e(27, De = oe.typefaceProvider(y.font_family, { fontWeight: ut || 400 })) : e(27, De = ""), e(28, N = Gi(y.active_font_variation_settings))), t.$$.dirty[0] & /*tabInactiveFontWeight*/
    256 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(8, Vt = ki(y.inactive_font_weight || y.font_weight, void 0, Vt)), y.font_family && typeof y.font_family == "string" ? e(29, pt = oe.typefaceProvider(y.font_family, { fontWeight: Vt || 400 })) : e(29, pt = ""), e(30, Dt = Gi(y.inactive_font_variation_settings))), t.$$.dirty[0] & /*tabActiveTextColor*/
    512 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(9, Nt = gr(y.active_text_color, 1, Nt)), t.$$.dirty[0] & /*tabInactiveTextColor*/
    1024 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(10, ot = gr(y.inactive_text_color, 1, ot)), t.$$.dirty[0] & /*tabActiveBackground*/
    2048 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(11, Q = gr(y.active_background_color, 1, Q)), t.$$.dirty[0] & /*tabInactiveBackground*/
    4096 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(12, It = gr(y.inactive_background_color, 1, It)), t.$$.dirty[0] & /*tabItemSpacing*/
    8192 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(13, zt = on(y.item_spacing, zt)), t.$$.dirty[0] & /*$jsonSeparator, $direction*/
    1572864 | t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*$jsonSeparatorColor, $jsonSeparatorPaddings, separatorMargins*/
    1537 && Ke && (re && e(61, tr = gr(re, 1, tr)), Ae && e(62, Xt = us(Ae, fe, Xt))), t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*separatorMargins*/
    1 && e(38, w = {
      background: tr,
      margin: Xt
    }), t.$$.dirty[2] & /*$jsonSwipeEnabled*/
    256 && e(37, D = typeof O > "u" ? !0 : !!O), t.$$.dirty[0] & /*titlePadding*/
    16384 | t.$$.dirty[2] & /*$jsonTitlePaddings*/
    128 && e(14, ye = vi(A || void 0, ye)), t.$$.dirty[0] & /*delimitierStyle*/
    32768 | t.$$.dirty[2] & /*$jsonDelimiterStyle*/
    64 && e(15, sr = Tm(M, sr)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && ((B == null ? void 0 : B.animation_type) === "fade" || (B == null ? void 0 : B.animation_type) === "none") && e(16, rr = B.animation_type), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && Ln(B == null ? void 0 : B.animation_duration) && e(35, $t = B.animation_duration), t.$$.dirty[2] & /*items*/
    2 && gt(o), t.$$.dirty[0] & /*componentContext, hasError, selected*/
    131077 | t.$$.dirty[1] & /*prevId*/
    536870912 | t.$$.dirty[2] & /*items*/
    2 && x.json && (Ye && (oe.unregisterInstance(Ye), e(60, Ye = void 0)), x.id && !te && !x.fakeElement && (e(60, Ye = x.id), oe.registerInstance(Ye, {
      setCurrentItem(Ze, ht) {
        if (Ze < 0 || Ze > o.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        Kt(Ze, !1, ht);
      },
      setPreviousItem(Ze, ht, Yt) {
        let Mr = _t(h - Ze, ht);
        Kt(Mr, !1, Yt);
      },
      setNextItem(Ze, ht, Yt) {
        let Mr = _t(h + Ze, ht);
        Kt(Mr, !1, Yt);
      },
      scrollToStart(Ze) {
        Kt(0, !1, Ze);
      },
      scrollToEnd(Ze) {
        Kt(o.length - 1, !1, Ze);
      },
      scrollCombined({ step: Ze, overflow: ht, animated: Yt }) {
        Ze && Kt(_t(h + Ze, ht || "clamp"), !1, Yt || !0);
      }
    }))), t.$$.dirty[0] & /*componentContext, selected, animationType*/
    196609 | t.$$.dirty[2] & /*items*/
    2 && e(24, jt = {
      "height-parent": ((R = x.json.height) == null ? void 0 : R.type) === "match_parent" ? "yes" : "",
      "own-height": (((Pe = x.json.height) == null ? void 0 : Pe.type) === "match_parent" || ((Xe = x.json.height) == null ? void 0 : Xe.type) === "fixed") && !(((Pt = (H = (je = o[h]) == null ? void 0 : je.div) == null ? void 0 : H.height) == null ? void 0 : Pt.type) === "wrap_content" && ((Ht = o[h].div) != null && Ht.height.constrained)),
      animation: rr
    });
  }, [
    x,
    ge,
    te,
    ze,
    st,
    Bt,
    de,
    ut,
    Vt,
    Nt,
    ot,
    Q,
    It,
    zt,
    ye,
    sr,
    rr,
    h,
    z,
    fe,
    Ke,
    at,
    ct,
    nt,
    jt,
    dt,
    Z,
    De,
    N,
    pt,
    Dt,
    Ue,
    mt,
    rt,
    We,
    $t,
    mr,
    D,
    w,
    m,
    p,
    _,
    f,
    u,
    c,
    l,
    a,
    i,
    pe,
    Se,
    Je,
    Re,
    Ot,
    Y,
    Cr,
    lt,
    er,
    Qt,
    pr,
    ie,
    Ye,
    tr,
    Xt,
    o,
    y,
    s,
    n,
    B,
    M,
    A,
    O,
    Ae,
    re,
    vt,
    ir,
    vr,
    ar
  ];
}
class Gm extends Hr {
  constructor(r) {
    super(), Rr(this, r, Um, Wm, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const Jm = "appkit-state", qm = "appkit-state_overflow_visible", Km = "appkit-state__animations", ji = {
  state: Jm,
  state_overflow_visible: qm,
  state__animations: Km,
  "state__animation-child": "appkit-state__animation-child",
  "state__animation-child-inner": "appkit-state__animation-child-inner"
};
function vl(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function Ym(t) {
  return t * t * t;
}
function Od(t) {
  const r = t - 1;
  return r * r * r + 1;
}
function Ld(t) {
  return (r) => {
    if (r <= 0)
      return 0;
    if (r >= 1)
      return 1;
    const e = r * t.length, n = Math.floor(e), o = t[n], i = t[n + 1], s = e - n;
    return o * s + i * (1 - s);
  };
}
const Xm = [
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
], Zm = Ld(Xm), Qm = [
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
], xm = Ld(Qm), Zl = {
  linear: sl,
  ease: Zm,
  ease_in: Ym,
  ease_out: Od,
  ease_in_out: vl,
  spring: xm
};
function Ca(t) {
  return Zl[t];
}
const Rd = 200, Hd = 0, $m = 0, e0 = 0;
function su(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || Rd) + (Number(r.start_delay) || Hd)
  ));
}
function t0(t, {
  transitions: r,
  elementBbox: e,
  rootBbox: n,
  direction: o,
  maxDuration: i,
  alpha: s
}) {
  const a = s != null ? s : 1;
  return {
    duration: Ui() ? 0 : i,
    css: (l) => {
      const c = l * i, u = r.map((w) => {
        var q, ae, A;
        const D = Number(w.start_delay) || Hd, z = Number(w.duration) || Rd, B = Math.max(0, Math.min(1, (c - D) / z)), ee = o === "in" ? 1 - B : B, M = (Ca(w.interpolator || "ease_in_out") || vl)(ee);
        if (w.type === "fade")
          return M >= 1 ? {
            active: !1,
            opacity: 0
          } : {
            active: M > 0 && M < 1,
            opacity: (1 - M) * a + M * (w.alpha || $m)
          };
        if (w.type === "slide") {
          const F = w.edge === "top" || w.edge === "left" ? -1 : 1, P = w.edge === "top" || w.edge === "bottom" || !w.edge ? "translateY" : "translateX";
          let O = (q = w.distance) == null ? void 0 : q.value;
          O === void 0 && (w.edge === "top" || w.edge === "bottom" || !w.edge ? O = Math.abs(
            n[w.edge === "bottom" ? "bottom" : "top"] - e[w.edge === "bottom" ? "top" : "bottom"]
          ) : O = Math.abs(
            n[w.edge === "left" ? "left" : "right"] - e[w.edge === "left" ? "right" : "left"]
          ));
          const J = O * M;
          return {
            active: M > 0 && M < 1,
            translate: `${P}(${J * F}px)`
          };
        } else if (w.type === "scale") {
          const F = 1 - M + M * (w.scale || e0), P = (ae = w.pivot_x) != null ? ae : 0.5, O = (A = w.pivot_y) != null ? A : 0.5, J = (1 - F) * e.width * P, he = (1 - F) * e.height * O;
          return {
            active: M > 0 && M < 1,
            scale: `translate(${J}px, ${he}px) scale(${F})`
          };
        }
        return {};
      }), f = u.map((w) => w.opacity).filter((w) => w !== void 0).reduce((w, D) => w * D, 1), _ = u.map((w) => w.translate).filter((w) => w !== void 0).join(" "), p = u.map((w) => w.scale).filter((w) => w !== void 0).join(" "), m = u.filter((w) => w.active).map((w) => w.scale).filter((w) => w !== void 0), h = m.length ? m[m.length - 1] : p;
      return `transform:${[_, h].filter(Boolean).join(" ") || "none"};opacity:${f}`;
    }
  };
}
function Ko(t, r, e) {
  return t * (1 - e) + r * e;
}
const r0 = 200, n0 = 0;
function o0(t, {
  rootBbox: r,
  beforeBbox: e,
  afterBbox: n,
  transition: o
}) {
  var i, s;
  return {
    delay: (i = o.start_delay) != null ? i : n0,
    duration: Ui() ? 0 : (s = o.duration) != null ? s : r0,
    easing: o.interpolator && o.interpolator in Zl ? Zl[o.interpolator] : vl,
    css: (a) => [
      `top:${Ko(e.top, n.top, a) - r.top}px`,
      `left:${Ko(e.left, n.left, a) - r.left}px`,
      `width:${Ko(e.width, n.width, a)}px`,
      `height:${Ko(e.height, n.height, a)}px`
    ].join(";")
  };
}
function Wd(t) {
  const r = [];
  return t.type === "set" ? (t.items || []).forEach((e) => {
    r.push(...Wd(e));
  }) : r.push(t), r;
}
const { Map: i0 } = Ro;
function lu(t, r, e) {
  const n = t.slice();
  return n[37] = r[e], n;
}
function s0(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function l0(t) {
  let r, e;
  const n = [
    {
      cls: wt(
        "state",
        ji,
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
    $$slots: { default: [u0] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = Io(o, n[i]);
  return r = new vn({ props: o }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(i) {
      Jt(r.$$.fragment, i);
    },
    m(i, s) {
      Lt(r, i, s), e = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams, parentOfItems, replaceItems, devapi*/
      6915 ? Ho(n, [
        s[0] & /*mods*/
        256 && {
          cls: wt(
            "state",
            ji,
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
        2048 && jd(
          /*devapi*/
          i[11]
        )
      ]) : {};
      s[0] & /*animationRoot, animationList, selectedId, selectedComponentContext, childContexts*/
      248 | s[1] & /*$$scope*/
      4096 && (a.$$scope = { dirty: s, ctx: i }), r.$set(a);
    },
    i(i) {
      e || (U(r.$$.fragment, i), e = !0);
    },
    o(i) {
      ne(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Rt(r, i);
    }
  };
}
function au(t) {
  let r = (
    /*selectedId*/
    t[5]
  ), e, n, o = cu(t);
  return {
    c() {
      o.c(), e = He();
    },
    l(i) {
      o.l(i), e = He();
    },
    m(i, s) {
      o.m(i, s), K(i, e, s), n = !0;
    },
    p(i, s) {
      s[0] & /*selectedId*/
      32 && Fr(r, r = /*selectedId*/
      i[5]) ? (dr(), ne(o, 1, 1, E), _r(), o = cu(i), o.c(), U(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
    },
    i(i) {
      n || (U(o), n = !0);
    },
    o(i) {
      ne(o), n = !1;
    },
    d(i) {
      i && k(e), o.d(i);
    }
  };
}
function cu(t) {
  let r, e;
  return r = new oo({
    props: {
      componentContext: (
        /*selectedComponentContext*/
        t[6]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*selectedComponentContext*/
      64 && (i.componentContext = /*selectedComponentContext*/
      n[6]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function a0(t) {
  let r, e, n, o, i, s, a, l;
  n = new oo({
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
      r = Me("div"), e = Me("div"), Ut(n.$$.fragment), o = br(), this.h();
    },
    l(u) {
      r = Ne(u, "DIV", { class: !0 });
      var f = Ee(r);
      e = Ne(f, "DIV", { class: !0 });
      var _ = Ee(e);
      Jt(n.$$.fragment, _), _.forEach(k), o = yr(f), f.forEach(k), this.h();
    },
    h() {
      g(e, "class", ji["state__animation-child-inner"]), g(r, "class", ji["state__animation-child"]);
    },
    m(u, f) {
      K(u, r, f), Et(r, e), Lt(n, e, null), Et(r, o), s = !0, a || (l = $e(r, "introend", c), a = !0);
    },
    p(u, f) {
      t = u;
      const _ = {};
      f[0] & /*animationList*/
      16 && (_.componentContext = /*item*/
      t[37].componentContextCopy), n.$set(_);
    },
    i(u) {
      s || (U(n.$$.fragment, u), i || bo(() => {
        i = hl(
          r,
          o0,
          /*item*/
          t[37]
        ), i.start();
      }), s = !0);
    },
    o(u) {
      ne(n.$$.fragment, u), s = !1;
    },
    d(u) {
      u && k(r), Rt(n), a = !1, l();
    }
  };
}
function c0(t) {
  let r, e, n, o, i, s = `${/*item*/
  t[37].offsetLeft}px`, a = `${/*item*/
  t[37].offsetTop}px`, l = `${/*item*/
  t[37].width}px`, c = `${/*item*/
  t[37].height}px`, u, f, _;
  n = new oo({
    props: {
      componentContext: (
        /*item*/
        t[37].componentContextCopy
      )
    }
  });
  function p() {
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
      r = Me("div"), e = Me("div"), Ut(n.$$.fragment), o = br(), this.h();
    },
    l(m) {
      r = Ne(m, "DIV", { class: !0 });
      var h = Ee(r);
      e = Ne(h, "DIV", { class: !0 });
      var y = Ee(e);
      Jt(n.$$.fragment, y), y.forEach(k), o = yr(h), h.forEach(k), this.h();
    },
    h() {
      g(e, "class", ji["state__animation-child-inner"]), g(r, "class", ji["state__animation-child"]), T(r, "left", s), T(r, "top", a), T(r, "width", l), T(r, "height", c);
    },
    m(m, h) {
      K(m, r, h), Et(r, e), Lt(n, e, null), Et(r, o), u = !0, f || (_ = $e(r, "introend", p), f = !0);
    },
    p(m, h) {
      t = m;
      const y = {};
      h[0] & /*animationList*/
      16 && (y.componentContext = /*item*/
      t[37].componentContextCopy), n.$set(y), h[0] & /*animationList*/
      16 && s !== (s = `${/*item*/
      t[37].offsetLeft}px`) && T(r, "left", s), h[0] & /*animationList*/
      16 && a !== (a = `${/*item*/
      t[37].offsetTop}px`) && T(r, "top", a), h[0] & /*animationList*/
      16 && l !== (l = `${/*item*/
      t[37].width}px`) && T(r, "width", l), h[0] & /*animationList*/
      16 && c !== (c = `${/*item*/
      t[37].height}px`) && T(r, "height", c);
    },
    i(m) {
      u || (U(n.$$.fragment, m), i || bo(() => {
        i = hl(
          r,
          t0,
          /*item*/
          t[37]
        ), i.start();
      }), u = !0);
    },
    o(m) {
      ne(n.$$.fragment, m), u = !1;
    },
    d(m) {
      m && k(r), Rt(n), f = !1, _();
    }
  };
}
function uu(t, r) {
  let e, n, o, i, s;
  const a = [c0, a0], l = [];
  function c(u, f) {
    return "direction" in /*item*/
    u[37] ? 0 : 1;
  }
  return n = c(r), o = l[n] = a[n](r), {
    key: t,
    first: null,
    c() {
      e = He(), o.c(), i = He(), this.h();
    },
    l(u) {
      e = He(), o.l(u), i = He(), this.h();
    },
    h() {
      this.first = e;
    },
    m(u, f) {
      K(u, e, f), l[n].m(u, f), K(u, i, f), s = !0;
    },
    p(u, f) {
      r = u;
      let _ = n;
      n = c(r), n === _ ? l[n].p(r, f) : (dr(), ne(l[_], 1, 1, () => {
        l[_] = null;
      }), _r(), o = l[n], o ? o.p(r, f) : (o = l[n] = a[n](r), o.c()), U(o, 1), o.m(i.parentNode, i));
    },
    i(u) {
      s || (U(o), s = !0);
    },
    o(u) {
      ne(o), s = !1;
    },
    d(u) {
      u && (k(e), k(i)), l[n].d(u);
    }
  };
}
function u0(t) {
  let r, e, n, o = [], i = new i0(), s, a = !1, l = (
    /*selectedComponentContext*/
    t[6] && au(t)
  ), c = lr(
    /*animationList*/
    t[4]
  );
  const u = (f) => (
    /*item*/
    f[37]
  );
  for (let f = 0; f < c.length; f += 1) {
    let _ = lu(t, c, f), p = u(_);
    i.set(p, o[f] = uu(p, _));
  }
  return {
    c() {
      r = br(), l && l.c(), e = br(), n = Me("div");
      for (let f = 0; f < o.length; f += 1)
        o[f].c();
      this.h();
    },
    l(f) {
      r = yr(f), l && l.l(f), e = yr(f), n = Ne(f, "DIV", { class: !0, "aria-hidden": !0 });
      var _ = Ee(n);
      for (let p = 0; p < o.length; p += 1)
        o[p].l(_);
      _.forEach(k), this.h();
    },
    h() {
      g(n, "class", ji.state__animations), g(n, "aria-hidden", "true");
    },
    m(f, _) {
      K(f, r, _), l && l.m(f, _), K(f, e, _), K(f, n, _);
      for (let p = 0; p < o.length; p += 1)
        o[p] && o[p].m(n, null);
      t[23](n), s = !0;
    },
    p(f, _) {
      /*selectedComponentContext*/
      f[6] ? l ? (l.p(f, _), _[0] & /*selectedComponentContext*/
      64 && U(l, 1)) : (l = au(f), l.c(), U(l, 1), l.m(e.parentNode, e)) : l && (dr(), ne(l, 1, 1, () => {
        l = null;
      }), _r()), _[0] & /*animationList, onOutro*/
      8208 && (c = lr(
        /*animationList*/
        f[4]
      ), dr(), o = kd(o, _, u, 1, f, c, i, n, vd, uu, null, lu), _r());
    },
    i(f) {
      if (!s) {
        U(a), U(l);
        for (let _ = 0; _ < c.length; _ += 1)
          U(o[_]);
        s = !0;
      }
    },
    o(f) {
      ne(a), ne(l);
      for (let _ = 0; _ < o.length; _ += 1)
        ne(o[_]);
      s = !1;
    },
    d(f) {
      f && (k(r), k(e), k(n)), l && l.d(f);
      for (let _ = 0; _ < o.length; _ += 1)
        o[_].d();
      t[23](null);
    }
  };
}
function f0(t) {
  let r, e, n, o;
  const i = [l0, s0], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[2] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(l) {
      e && e.l(l), n = He();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (dr(), ne(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function d0(t) {
  return t.some((r) => r.type === "fade");
}
function Ud(t) {
  return t.type === "change_bounds" ? t : t.type === "set" ? Ud(t.items[0]) : null;
}
function _0(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p = E, m = () => (p(), p = V(i, (pe) => e(20, _ = pe)), i);
  t.$$.on_destroy.push(() => p());
  let { componentContext: h } = r, { layoutParams: y = void 0 } = r;
  const w = zr(xr);
  let D = !1, z, B = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Set(), ue = [], M = [], q = [], ae = [], A, F, P, O, J = !1, he;
  function fe() {
    e(15, J = !1);
  }
  function Ae(pe) {
    P && P.destroy(), e(6, P = pe != null && pe.div ? h.produceChildContext(pe.div, {
      path: pe.state_id || "<unknown>"
    }) : void 0);
  }
  function me(pe) {
    const ce = h.json.states;
    if (!ce)
      return;
    const be = /* @__PURE__ */ new Set();
    e(16, c = ce.map((x, ge) => (c[ge].div !== pe[ge] && x.state_id && be.add(x.state_id), { ...x, div: pe[ge] }))), e(0, h.json = { ...h.json, states: c }, h), F && be.has(F) && Ae(c.find((x) => x.state_id === F) || null);
  }
  function Ie(pe, ce, be) {
    let { json: x, parentComponentContext: ge, transitions: oe, node: Se } = ce;
    x = h.getJsonWithVars(x), oe = h.getJsonWithVars(oe);
    const Je = Wd(oe), Ye = ce.bbox || Se.getBoundingClientRect(), te = {
      ...x,
      margins: void 0,
      alpha: d0(Je) ? void 0 : x.alpha
    };
    return {
      id: ge.id || "",
      json: te,
      componentContextCopy: ge.produceChildContext(te, { fake: Ya }),
      elementBbox: Ye,
      rootBbox: pe,
      transitions: Je,
      alpha: x.alpha,
      width: Ye.width,
      height: Ye.height,
      offsetTop: Ye.top - pe.top,
      offsetLeft: Ye.left - pe.left,
      direction: be,
      resolvePromise: ce.resolvePromise,
      node: ce.node
    };
  }
  async function re(pe) {
    if (F === pe)
      return h;
    w.setRunning("stateChange", !0);
    const ce = new Set(ee);
    ue.forEach((te) => {
      te.resolvePromise && te.resolvePromise();
    }), e(4, ue = []);
    let be = [];
    if (z) {
      const te = z.getBoundingClientRect();
      be = q.map((Re) => Ie(te, Re, "out"));
    }
    ae.forEach((te) => {
      te.transitions && B.set(te.id, {
        transitions: te.transitions,
        rect: te.node.getBoundingClientRect()
      });
    }), M = [], q = [], ae = [];
    const x = c.find((te) => te.state_id === pe) || null;
    if (x ? (e(5, F = pe), a == null || a.setValue(F), Ae(x)) : h.logError(X(new Error("Cannot find state with id"), { additional: { stateId: pe } })), await Tn(), !z)
      return;
    const ge = z.getBoundingClientRect();
    let oe = M.filter((te) => {
      var Re;
      return te.parentComponentContext.id && !ce.has(te.parentComponentContext.id) ? !0 : ((Re = te.resolvePromise) == null || Re.call(te), !1);
    }).map((te) => Ie(ge, te, "in"));
    be = be.filter((te) => {
      var Re;
      return te.id && !ee.has(te.id) ? !0 : ((Re = te.resolvePromise) == null || Re.call(te), !1);
    });
    const Se = be.concat(oe), Je = Se.reduce(
      (te, Re) => Math.max(te, su(Re.transitions)),
      0
    ), Ye = ae.filter((te) => B.has(te.id)).map((te) => {
      const Re = {
        ...te.json,
        margins: void 0,
        width: { type: "match_parent" },
        height: { type: "match_parent" }
      }, ze = B.get(te.id);
      return {
        id: te.parentComponentContext.id || "",
        json: Re,
        componentContextCopy: te.parentComponentContext.produceChildContext(Re, { fake: Ya }),
        rootBbox: ge,
        beforeBbox: ze.rect,
        afterBbox: te.node.getBoundingClientRect(),
        node: te.node,
        transition: h.getJsonWithVars(Ud(ze.transitions)),
        resolvePromise: te.resolvePromise
      };
    });
    return e(4, ue = [
      ...Se.map((te) => ({ ...te, maxDuration: Je })),
      ...Ye
    ]), B.clear(), w.setRunning("stateChange", !1), h;
  }
  mi(wa, {
    // eslint-disable-next-line max-params
    runVisibilityTransition(pe, ce, be, x, ge, oe) {
      if (!z)
        return Promise.resolve();
      const Se = z.getBoundingClientRect(), Je = Ie(
        Se,
        {
          json: pe,
          parentComponentContext: ce,
          transitions: be,
          node: x,
          bbox: oe
        },
        ge
      ), Ye = su(Je.transitions), te = { ...Je, maxDuration: Ye };
      return e(4, ue = [...ue.filter((Re) => Re.node !== Je.node), te]), new Promise((Re) => {
        te.resolvePromise = Re;
      });
    },
    registerChildWithTransitionIn(pe, ce, be, x) {
      const ge = {
        json: pe,
        parentComponentContext: ce,
        transitions: be,
        node: x
      };
      return M.push(ge), new Promise((oe) => {
        ge.resolvePromise = oe;
      });
    },
    registerChildWithTransitionOut(pe, ce, be, x) {
      const ge = {
        json: pe,
        parentComponentContext: ce,
        transitions: be,
        node: x
      };
      return q.push(ge), new Promise((oe) => {
        ge.resolvePromise = oe;
      });
    },
    registerChildWithTransitionChange(pe, ce, be, x) {
      const ge = ce.id;
      if (!ge)
        return Promise.resolve();
      const oe = {
        id: ge,
        json: pe,
        parentComponentContext: ce,
        transitions: be,
        node: x
      };
      return ae.push(oe), new Promise((Se) => {
        oe.resolvePromise = Se;
      });
    },
    hasTransitionChange(pe) {
      return pe ? B.has(pe) : !1;
    },
    registerChild(pe) {
      ee.add(pe);
    },
    unregisterChild(pe) {
      ee.delete(pe);
    }
  });
  function tt(pe) {
    if (!J && (e(15, J = !0), pe.length)) {
      const ce = (a == null ? void 0 : a.getValue()) || o;
      if (ce) {
        e(5, F = ce);
        const be = pe.find((x) => x.state_id === F) || null;
        Ae(be), be || h.logError(X(new Error("Cannot find state for default_state_id"), { additional: { selectedId: F } }));
      } else {
        const be = pe[0];
        e(5, F = be.state_id), Ae(be);
      }
      a && (a.setValue(F), a.subscribe((be) => {
        re(be);
      }));
    }
  }
  function qe(pe) {
    e(4, ue = ue.filter((ce) => ce !== pe)), pe.resolvePromise && pe.resolvePromise();
  }
  cn(() => {
    P && P.destroy(), A && (A(), e(14, A = void 0));
  });
  const Ke = (pe) => qe(pe), ve = (pe) => qe(pe);
  function Te(pe) {
    Pr[pe ? "unshift" : "push"](() => {
      z = pe, e(3, z);
    });
  }
  return t.$$set = (pe) => {
    "componentContext" in pe && e(0, h = pe.componentContext), "layoutParams" in pe && e(1, y = pe.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*componentContext*/
    1 && e(17, n = h.json.div_id || h.id), t.$$.dirty[0] & /*componentContext*/
    1 && (o = h.getJsonWithVars(h.json.default_state_id)), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(10, i = h.getDerivedFromVars(h.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, s = h.json.state_id_variable), t.$$.dirty[0] & /*stateVariableName, componentContext*/
    524289 && (a = s ? h.getVariable(s, "string") || w.awaitGlobalVariable(s, "string", "") : null), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, l = h.origJson), t.$$.dirty[0] & /*origJson*/
    262144 && l && fe(), t.$$.dirty[0] & /*stateId, componentContext*/
    131073 && (n ? e(2, D = !1) : (e(2, D = !0), h.logError(X(new Error('Missing "id" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext*/
    1 && h.json && (ee = /* @__PURE__ */ new Set()), t.$$.dirty[0] & /*componentContext*/
    1 && e(16, c = Array.isArray(h.json.states) && h.json.states || []), t.$$.dirty[0] & /*items*/
    65536 && e(9, u = c.map((pe) => {
      var ce;
      return { json: pe.div, id: (ce = pe.div) == null ? void 0 : ce.id };
    })), t.$$.dirty[0] & /*items, componentContext*/
    65537 && (c != null && c.length ? e(2, D = !1) : (e(2, D = !0), h.logError(X(new Error('Empty "states" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext, stateUnregister, stateId*/
    147457 && h.json && (A && (A(), e(14, A = void 0)), n && !(h != null && h.fakeElement) && e(14, A = h.registerState(n, re))), t.$$.dirty[0] & /*inited, items*/
    98304 && !J && tt(c), t.$$.dirty[0] & /*$jsonClipToBounds*/
    1048576 && e(8, f = {
      overflow: _ === !1 || _ === 0 ? "visible" : void 0
    });
  }, [
    h,
    y,
    D,
    z,
    ue,
    F,
    P,
    O,
    f,
    u,
    i,
    he,
    me,
    qe,
    A,
    J,
    c,
    n,
    l,
    s,
    _,
    Ke,
    ve,
    Te
  ];
}
class h0 extends Hr {
  constructor(r) {
    super(), Rr(this, r, _0, f0, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const p0 = "appkit-pager", g0 = "appkit-pager__items", m0 = "appkit-pager_animated", b0 = "appkit-pager__item", y0 = "appkit-pager_clip", w0 = "appkit-pager_orientation_horizontal", v0 = "appkit-pager_orientation_vertical", k0 = "appkit-pager__item_height_content", j0 = "appkit-pager__item_height_fixed", E0 = "appkit-pager__item_width_content", C0 = "appkit-pager__item_width_fixed", A0 = "appkit-pager__arrow", Lo = {
  pager: p0,
  pager__items: g0,
  pager_animated: m0,
  pager__item: b0,
  "pager_scroll-align_start": "appkit-pager_scroll-align_start",
  "pager_scroll-align_center": "appkit-pager_scroll-align_center",
  "pager_scroll-align_end": "appkit-pager_scroll-align_end",
  pager_clip: y0,
  pager_orientation_horizontal: w0,
  pager_orientation_vertical: v0,
  "pager_cross-align_center": "appkit-pager_cross-align_center",
  "pager_cross-align_end": "appkit-pager_cross-align_end",
  pager__item_height_content: k0,
  pager__item_height_fixed: j0,
  "pager__item_height-constrained": "appkit-pager__item_height-constrained",
  pager__item_width_content: E0,
  pager__item_width_fixed: C0,
  "pager__item_width-constrained": "appkit-pager__item_width-constrained",
  pager__arrow: A0,
  "pager__arrow-icon-path": "appkit-pager__arrow-icon-path"
}, { window: V0 } = Ro;
function fu(t, r, e) {
  const n = t.slice();
  return n[95] = r[e], n;
}
function S0(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function I0(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt(
        "pager",
        Lo,
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
      $$slots: { default: [T0] },
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
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      8192 && (i.cls = wt(
        "pager",
        Lo,
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function du(t) {
  let r, e, n, o, i, s, a;
  return e = new oo({
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
      r = Me("div"), Ut(e.$$.fragment), n = br(), this.h();
    },
    l(l) {
      r = Ne(l, "DIV", {
        class: !0,
        role: !0,
        id: !0,
        "aria-labelledby": !0
      });
      var c = Ee(r);
      Jt(e.$$.fragment, c), n = yr(c), c.forEach(k), this.h();
    },
    h() {
      g(r, "class", o = wt("pager__item", Lo, pu(
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
      K(l, r, c), Lt(e, r, null), Et(r, n), a = !0;
    },
    p(l, c) {
      const u = {};
      c[0] & /*visibleItems*/
      16 && (u.componentContext = /*item*/
      l[95].componentContext), c[0] & /*childLayoutParams*/
      512 && (u.layoutParams = /*childLayoutParams*/
      l[9]), e.$set(u), (!a || c[0] & /*orientation, visibleItems*/
      20 && o !== (o = wt("pager__item", Lo, pu(
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
      a || (U(e.$$.fragment, l), a = !0);
    },
    o(l) {
      ne(e.$$.fragment, l), a = !1;
    },
    d(l) {
      l && k(r), Rt(e);
    }
  };
}
function _u(t) {
  let r, e, n, o = !/*leftClass*/
  t[27] && D0();
  return {
    c() {
      r = Me("div"), o && o.c(), this.h();
    },
    l(i) {
      r = Ne(i, "DIV", { class: !0 });
      var s = Ee(r);
      o && o.l(s), s.forEach(k), this.h();
    },
    h() {
      g(
        r,
        "class",
        /*leftClass*/
        t[27] || `${Lo.pager__arrow} ${vo.arrow} ${vo.arrow_left}`
      );
    },
    m(i, s) {
      K(i, r, s), o && o.m(r, null), e || (n = $e(
        r,
        "click",
        /*click_handler*/
        t[70]
      ), e = !0);
    },
    p: E,
    d(i) {
      i && k(r), o && o.d(), e = !1, n();
    }
  };
}
function D0(t) {
  let r, e;
  return {
    c() {
      r = Qr("svg"), e = Qr("path"), this.h();
    },
    l(n) {
      r = nn(n, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0
      });
      var o = Ee(r);
      e = nn(o, "path", { class: !0, d: !0 }), Ee(e).forEach(k), o.forEach(k), this.h();
    },
    h() {
      g(e, "class", Lo["pager__arrow-icon-path"]), g(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", vo.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      K(n, r, o), Et(r, e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function hu(t) {
  let r, e, n, o = !/*rightClass*/
  t[28] && F0();
  return {
    c() {
      r = Me("div"), o && o.c(), this.h();
    },
    l(i) {
      r = Ne(i, "DIV", { class: !0 });
      var s = Ee(r);
      o && o.l(s), s.forEach(k), this.h();
    },
    h() {
      g(
        r,
        "class",
        /*rightClass*/
        t[28] || `${Lo.pager__arrow} ${vo.arrow} ${vo.arrow_right}`
      );
    },
    m(i, s) {
      K(i, r, s), o && o.m(r, null), e || (n = $e(
        r,
        "click",
        /*click_handler_1*/
        t[71]
      ), e = !0);
    },
    p: E,
    d(i) {
      i && k(r), o && o.d(), e = !1, n();
    }
  };
}
function F0(t) {
  let r, e;
  return {
    c() {
      r = Qr("svg"), e = Qr("path"), this.h();
    },
    l(n) {
      r = nn(n, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0
      });
      var o = Ee(r);
      e = nn(o, "path", { class: !0, d: !0 }), Ee(e).forEach(k), o.forEach(k), this.h();
    },
    h() {
      g(e, "class", Lo["pager__arrow-icon-path"]), g(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", vo.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      K(n, r, o), Et(r, e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function T0(t) {
  let r, e, n, o, i, s, a, l, c, u = lr(
    /*visibleItems*/
    t[4]
  ), f = [];
  for (let h = 0; h < u.length; h += 1)
    f[h] = du(fu(t, u, h));
  const _ = (h) => ne(f[h], 1, 1, () => {
    f[h] = null;
  });
  let p = (
    /*hasScrollLeft*/
    t[11] && /*shouldCheckArrows*/
    t[12] && _u(t)
  ), m = (
    /*hasScrollRight*/
    t[10] && /*shouldCheckArrows*/
    t[12] && hu(t)
  );
  return {
    c() {
      r = Me("div");
      for (let h = 0; h < f.length; h += 1)
        f[h].c();
      o = br(), p && p.c(), i = br(), m && m.c(), s = He(), this.h();
    },
    l(h) {
      r = Ne(h, "DIV", { class: !0, style: !0 });
      var y = Ee(r);
      for (let w = 0; w < f.length; w += 1)
        f[w].l(y);
      y.forEach(k), o = yr(h), p && p.l(h), i = yr(h), m && m.l(h), s = He(), this.h();
    },
    h() {
      g(r, "class", e = Lo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (t[24] ? Sr["root_restrict-scroll"] : "")), g(r, "style", n = fr(
        /*style*/
        t[14]
      ));
    },
    m(h, y) {
      K(h, r, y);
      for (let w = 0; w < f.length; w += 1)
        f[w] && f[w].m(r, null);
      t[69](r), K(h, o, y), p && p.m(h, y), K(h, i, y), m && m.m(h, y), K(h, s, y), a = !0, l || (c = [
        $e(
          r,
          "transitionend",
          /*onTransitionEnd*/
          t[37]
        ),
        $e(
          r,
          "focus",
          /*onFocus*/
          t[33],
          !0
        ),
        $e(
          r,
          "click",
          /*onItemsClick*/
          t[34],
          !0
        )
      ], l = !0);
    },
    p(h, y) {
      if (y[0] & /*orientation, visibleItems, instId, childLayoutParams*/
      67109396) {
        u = lr(
          /*visibleItems*/
          h[4]
        );
        let w;
        for (w = 0; w < u.length; w += 1) {
          const D = fu(h, u, w);
          f[w] ? (f[w].p(D, y), U(f[w], 1)) : (f[w] = du(D), f[w].c(), U(f[w], 1), f[w].m(r, null));
        }
        for (dr(), w = u.length; w < f.length; w += 1)
          _(w);
        _r();
      }
      (!a || y[0] & /*$jsonRestrictParentScroll*/
      16777216 && e !== (e = Lo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (h[24] ? Sr["root_restrict-scroll"] : ""))) && g(r, "class", e), (!a || y[0] & /*style*/
      16384 && n !== (n = fr(
        /*style*/
        h[14]
      ))) && g(r, "style", n), /*hasScrollLeft*/
      h[11] && /*shouldCheckArrows*/
      h[12] ? p ? p.p(h, y) : (p = _u(h), p.c(), p.m(i.parentNode, i)) : p && (p.d(1), p = null), /*hasScrollRight*/
      h[10] && /*shouldCheckArrows*/
      h[12] ? m ? m.p(h, y) : (m = hu(h), m.c(), m.m(s.parentNode, s)) : m && (m.d(1), m = null);
    },
    i(h) {
      if (!a) {
        for (let y = 0; y < u.length; y += 1)
          U(f[y]);
        a = !0;
      }
    },
    o(h) {
      f = f.filter(Boolean);
      for (let y = 0; y < f.length; y += 1)
        ne(f[y]);
      a = !1;
    },
    d(h) {
      h && (k(r), k(o), k(i), k(s)), _n(f, h), t[69](null), p && p.d(h), m && m.d(h), l = !1, Kr(c);
    }
  };
}
function M0(t) {
  let r, e, n, o, i, s;
  const a = [I0, S0], l = [];
  function c(u, f) {
    return (
      /*hasError*/
      u[5] ? -1 : 0
    );
  }
  return ~(r = c(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(u) {
      e && e.l(u), n = He();
    },
    m(u, f) {
      ~r && l[r].m(u, f), K(u, n, f), o = !0, i || (s = $e(
        V0,
        "resize",
        /*resnap*/
        t[38]
      ), i = !0);
    },
    p(u, f) {
      let _ = r;
      r = c(u), r === _ ? ~r && l[r].p(u, f) : (e && (dr(), ne(l[_], 1, 1, () => {
        l[_] = null;
      }), _r()), ~r ? (e = l[r], e ? e.p(u, f) : (e = l[r] = a[r](u), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(u) {
      o || (U(e), o = !0);
    },
    o(u) {
      ne(e), o = !1;
    },
    d(u) {
      u && k(n), ~r && l[r].d(u), i = !1, s();
    }
  };
}
const bs = {
  wrap_content: "content",
  fixed: "fixed",
  match_parent: "parent"
}, Co = 2, P0 = 400, N0 = 8;
function pu(t, r) {
  var n, o, i, s;
  if (t === "horizontal") {
    const a = ((n = r.height) == null ? void 0 : n.type) || "";
    return {
      height: a in bs ? bs[a] : "content",
      "height-constrained": ((o = r.height) == null ? void 0 : o.type) === "wrap_content" ? an(r.height.constrained, !1) : !1
    };
  }
  const e = ((i = r.width) == null ? void 0 : i.type) || "";
  return {
    width: e in bs ? bs[e] : "parent",
    "width-constrained": ((s = r.width) == null ? void 0 : s.type) === "wrap_content" ? an(r.width.constrained, !1) : !1
  };
}
function z0(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p, m, h, y, w, D, z, B, ee, ue, M, q = E, ae = () => (q(), q = V(u, (j) => e(60, M = j)), u), A, F = E, P = () => (F(), F = V(i, (j) => e(61, A = j)), i), O, J = E, he = () => (J(), J = V(f, (j) => e(62, O = j)), f), fe, Ae = E, me = () => (Ae(), Ae = V(l, (j) => e(63, fe = j)), l), Ie, re = E, tt = () => (re(), re = V(a, (j) => e(64, Ie = j)), a), qe, Ke = E, ve = () => (Ke(), Ke = V(s, (j) => e(65, qe = j)), s), Te, pe = E, ce = () => (pe(), pe = V(De, (j) => e(66, Te = j)), De), be, x = E, ge = () => (x(), x = V(o, (j) => e(67, be = j)), o), oe, Se = E, Je = () => (Se(), Se = V(_, (j) => e(68, oe = j)), _), Ye, te = E, Re = () => (te(), te = V(c, (j) => e(24, Ye = j)), c);
  t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => J()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => x()), t.$$.on_destroy.push(() => Se()), t.$$.on_destroy.push(() => te());
  let { componentContext: ze } = r, { layoutParams: at = void 0 } = r;
  const ct = zr(xr), nt = ct.direction;
  Cn(t, nt, (j) => e(6, ee = j));
  const jt = ct.genId("pager"), st = ct.getCustomization("pagerLeftClass"), Bt = ct.getCustomization("pagerRightClass"), dt = ct.isDesktop;
  Cn(t, dt, (j) => e(59, ue = j));
  let Z, de, ut = !1, De, N = 0, Vt = 0, pt = !1, Dt = "horizontal", Nt = "0em", ot = {}, Q = "", It = "", zt = "", tr = {}, Xt = "start", ye = "center", Ue = [], mt = 0, ke = [], rt = {}, We = {}, nr, Le, kt = 0, Tt = !1, Mt = !1, hr = !1, Be = !1, Ct = 0, sr = "", rr = 0, $t;
  function mr() {
    e(43, ot = {}), e(9, tr = {}), e(47, Xt = "start"), e(48, ye = "center"), e(52, Tt = !1), e(53, Mt = !1), Be = !1;
  }
  function Ar(j) {
    e(0, ze = e(51, nr = {
      ...ze,
      json: {
        ...ze.json,
        items: j.filter(Wo)
      }
    }));
  }
  function Ot(j, se) {
    Le && Le.update({
      instId: jt,
      currentItem: We[se],
      size: j,
      scrollToPagerItem(d) {
        Kt(rt[d]);
      }
    });
  }
  function Er(j) {
    var d;
    if (j === Vt || (Vt = j, !Ue[j]))
      return;
    const se = (d = Ue[j].json) == null ? void 0 : d.selected_actions;
    se != null && se.length && ze.execAnyActions(se);
  }
  function Y(j) {
    const se = Mt ? !1 : j === 0, d = Mt ? !1 : j === ke.length - 1, R = Dt === "horizontal", Pe = de.children[j + (Mt ? Co : 0)];
    if (!Pe)
      return 0;
    const Xe = R ? "offsetLeft" : "offsetTop", je = R ? "offsetWidth" : "offsetHeight", H = lt(), Pt = Yr(), Ht = or(), Ze = St();
    return H >= Ze + Pt + Ht || se ? 0 : d ? (H - Pt - Ht - Ze) * (ee === "rtl" ? -1 : 1) : ye === "start" && ee === "ltr" || ye === "end" && ee === "rtl" ? -(Pe[Xe] - Pt) : ye === "end" && ee === "ltr" || ye === "start" && ee === "rtl" ? -(Pe[Xe] + Pe[je] - H + Ht) : de[je] / 2 - (Pe[Xe] + Pe[je] / 2);
  }
  function gt(j, se) {
    if (!de)
      return;
    const d = Y(j);
    e(54, hr = se), Tn().then(() => {
      var R;
      Ct = d, e(55, sr = At(Ct)), e(40, N = (R = rt[j]) != null ? R : 0), Be = Mt && (j < 0 || j >= mt);
    });
  }
  function Kt(j, se = !0) {
    var d;
    gt((d = We[j]) != null ? d : 0, se);
  }
  function At(j) {
    return `${Dt === "horizontal" ? "translateX" : "translateY"}(${dn(j)})`;
  }
  function Cr(j, se) {
    return Mt && j >= -Co && j < mt + Co ? j : j > ke.length - 1 ? se === "ring" ? Po(j, ke.length) : ke.length - 1 : j < 0 ? se === "ring" ? Po(j, ke.length) : 0 : j;
  }
  function Tr(j, se, d) {
    const R = Cr(We[N] - j, se);
    gt(R, d);
  }
  function wr(j, se, d) {
    const R = Cr(We[N] + j, se);
    gt(R, d);
  }
  function Nr() {
    Le == null || Le.destroy(), Le = void 0, Z && (ct.unregisterInstance(Z), Z = void 0), ze.fakeElement || (Le = ze.registerPager(ze.id || void 0)), ze.id && !ze.fakeElement && (Z = ze.id, ct.registerInstance(
      Z,
      {
        setCurrentItem(j, se) {
          if (j < 0 || j > Ue.length - 1)
            throw new Error('Item is out of range in "set-current-item" action');
          Kt(j, se);
        },
        setPreviousItem: Tr,
        setNextItem: wr,
        scrollToStart(j) {
          Kt(ke[Mt ? Co : 0].index, j);
        },
        scrollToEnd(j) {
          Kt(ke[ke.length - 1 - (Mt ? Co : 0)].index, j);
        },
        scrollCombined({ step: j, overflow: se, animated: d }) {
          j && Kt(Cr(We[N] + j, se || "clamp"), d);
        }
      },
      "warn"
    ));
  }
  function Yr() {
    var se, d, R;
    return Dt === "horizontal" ? (d = (se = ot.start) != null ? se : ee === "ltr" ? ot.left : ot.right) != null ? d : 0 : (R = ot.top) != null ? R : 0;
  }
  function or() {
    var se, d, R;
    return Dt === "horizontal" ? (d = (se = ot.end) != null ? se : ee === "ltr" ? ot.right : ot.left) != null ? d : 0 : (R = ot.bottom) != null ? R : 0;
  }
  function lt() {
    var se, d;
    return de ? Dt === "horizontal" ? ((se = de.parentElement) == null ? void 0 : se.offsetWidth) || 0 : ((d = de.parentElement) == null ? void 0 : d.offsetHeight) || 0 : 0;
  }
  function St() {
    const j = Dt === "horizontal", se = Array.from(de.children), d = se[0].getBoundingClientRect(), R = se[se.length - 1].getBoundingClientRect();
    return j ? ee === "rtl" ? d.right - R.left : R.right - d.left : R.bottom - d.top;
  }
  function er(j) {
    const se = j.target;
    if (!(se instanceof Element) || !de)
      return;
    let d = se;
    for (; d.parentElement && d.parentElement !== de; )
      d = d.parentElement;
    if (!d)
      return;
    const R = Array.from(de.children).indexOf(d);
    if (R < 0)
      return;
    const Pe = R - (Mt ? Co : 0);
    gt(Pe, !0);
  }
  function Qt(j) {
    Date.now() - rr < 300 && (j.preventDefault(), j.stopImmediatePropagation());
  }
  function pr(j) {
    if (!ct.pagerMouseDragEnabled && j.pointerType === "mouse")
      return;
    const se = Dt === "horizontal", d = se ? j.pageX : j.pageY, R = Ct, Pe = lt() - Yr() - or(), Xe = St(), je = Date.now(), H = (Ht) => {
      const Ze = se ? Ht.pageX : Ht.pageY;
      let ht = R + Ze - d;
      if (!Mt) {
        if (ee === "rtl") {
          if (ht < 0)
            ht = ht * Pe / (ht + Pe * 3);
          else if (ht + Pe > Xe) {
            let Yt = ht + Pe - Xe;
            Yt = Yt * Pe / (Yt + Pe * 3), ht = -Pe + Xe + Yt;
          }
        } else if (ee === "ltr") {
          if (ht > 0)
            ht = ht * Pe / (ht + Pe * 3);
          else if (-ht + Pe > Xe) {
            let Yt = -ht + Pe - Xe;
            Yt = Yt * Pe / (Yt + Pe * 3), ht = Pe - Xe - Yt;
          }
        }
      }
      Ct = ht, e(55, sr = At(Ct)), Ht.preventDefault();
    }, Pt = (Ht) => {
      $t == null || $t(), $t = void 0;
      const Ze = Math.min(512, Pe), ht = Math.abs(R - Ct);
      if (ht < N0) {
        gt(We[N], !0);
        return;
      }
      Ht.preventDefault(), rr = Date.now();
      const Yt = Math.min(1, (Date.now() - je) / 750);
      let Mr = We[N];
      ht > Ze / 4 * Yt && (Mr += (R > Ct ? 1 : -1) * (ee === "rtl" ? -1 : 1)), Mt || (Mr >= ke.length ? Mr = ke.length - 1 : Mr < 0 && (Mr = 0)), gt(Mr, !0);
    };
    window.addEventListener("pointermove", H), window.addEventListener("pointerup", Pt), window.addEventListener("pointercancel", Pt), $t == null || $t(), $t = () => {
      window.removeEventListener("pointermove", H), window.removeEventListener("pointerup", Pt), window.removeEventListener("pointercancel", Pt);
    };
  }
  function _t(j) {
    if (!j.deltaX || Math.abs(j.deltaX) < Math.abs(j.deltaY))
      return;
    const se = Date.now();
    if (se - kt < P0)
      return;
    kt = se, (ee === "rtl" ? -1 : 1) * j.deltaX > 0 ? wr(1, "clamp", !0) : Tr(1, "clamp", !0);
  }
  function ie() {
    e(54, hr = !1), Be && Tn().then(() => {
      Kt(N, !1);
    });
  }
  function vt() {
    Tn().then(() => {
      Kt(N, !1);
    });
  }
  no(() => {
    e(39, ut = !0), de && Kt(N, !1);
  }), cn(() => {
    e(39, ut = !1), $t == null || $t(), Ue.forEach((j) => {
      j.destroy();
    }), Z && (ct.unregisterInstance(Z), Z = void 0), Le == null || Le.destroy(), Le = void 0;
  });
  function ir(j) {
    Pr[j ? "unshift" : "push"](() => {
      de = j, e(7, de);
    });
  }
  const vr = () => (ee === "ltr" ? Tr : wr)(1, "clamp", !0), ar = () => (ee === "ltr" ? wr : Tr)(1, "clamp", !0);
  return t.$$set = (j) => {
    "componentContext" in j && e(0, ze = j.componentContext), "layoutParams" in j && e(1, at = j.layoutParams);
  }, t.$$.update = () => {
    var j, se, d, R, Pe;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(58, n = ze.origJson), t.$$.dirty[1] & /*origJson*/
    134217728 && n && mr(), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(23, o = typeof ((j = ze.json.item_builder) == null ? void 0 : j.data) == "string" ? ze.getDerivedFromVars((se = ze.json.item_builder) == null ? void 0 : se.data, void 0, !0) : (d = ze.json.item_builder) != null && d.data ? Xo(ze.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && P(e(22, i = ze.getDerivedFromVars(ze.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && ve(e(21, s = ze.getDerivedFromVars(ze.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && tt(e(20, a = ze.getDerivedFromVars(ze.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(19, l = ze.getDerivedFromVars(ze.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Re(e(18, c = ze.getDerivedFromVars(ze.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(17, u = ze.getDerivedFromVars(ze.json.cross_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(16, f = ze.getDerivedFromVars(ze.json.scroll_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && Je(e(15, _ = ze.getDerivedFromVars(ze.json.infinite_scroll))), t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$jsonInfiniteScroll*/
    64 && e(52, Tt = an(oe, Tt)), t.$$.dirty[0] & /*componentContext, items*/
    9 | t.$$.dirty[1] & /*prevContext*/
    1048576 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    32) {
      let Xe = [];
      if (ze.json.item_builder && Array.isArray(be) && Array.isArray(ze.json.item_builder.prototypes)) {
        const Ht = ze.json.item_builder;
        Xe = wl(be, ct, ze, Ht);
      } else
        Xe = (Array.isArray(ze.json.items) && ze.json.items || []).map((Ht, Ze) => ({
          div: Ht,
          key: Ht.id || { index: Ze, data: Ht }
        }));
      const je = new Set(Ue), H = /* @__PURE__ */ new Map();
      let Pt = !1;
      nr === ze && Ue.forEach((Ht) => {
        Ht.key && (typeof Ht.key == "string" && H.has(Ht.key) ? Pt || (Pt = !0, ze.logError(X(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: Ht.key } }))) : H.set(
          typeof Ht.key == "string" ? Ht.key : Ht.key.index,
          Ht
        ));
      }), e(3, Ue = Xe.map((Ht, Ze) => {
        let ht = !Pt && H.get(Ht.id), Yt = H.get(Ze);
        return !ht && !Ht.id && typeof Ht.key == "object" && typeof (Yt == null ? void 0 : Yt.key) == "object" && Zi(Yt.key.data, Ht.key.data) && (ht = Yt), ht ? (je.delete(ht), ht) : ze.produceChildContext(Ht.div, {
          path: Ze,
          variables: Ht.vars,
          id: Ht.id,
          key: Ht.key
        });
      }));
      for (const Ht of je)
        Ht.destroy();
      e(51, nr = ze);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    9) {
      let Xe = [];
      Ue.forEach((je) => {
        Xe.push(ze.getDerivedFromVars({
          width: je.json.width,
          height: je.json.height,
          visibility: je.json.visibility
        }));
      }), ce(e(8, De = Xi(Xe, (je) => [...je])));
    }
    if (t.$$.dirty[0] & /*items, visibleItems*/
    24 | t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$childStore*/
    16) {
      if (e(50, We = {}), rt = {}, e(4, ke = Te.map((Xe, je) => ({
        width: Xe.width,
        height: Xe.height,
        index: je,
        componentContext: Ue[je]
      })).filter((Xe, je) => Te[je].visibility !== "gone")), ke.forEach((Xe, je) => {
        rt[je] = Xe.index, e(50, We[Xe.index] = je, We);
      }), e(49, mt = ke.length), Tt && ke.length >= Co) {
        const Xe = ke.slice(0, Co).map((H) => ({
          ...H,
          componentContext: H.componentContext.dup(si),
          duplicate: !0
        })), je = ke.slice(ke.length - Co).map((H) => ({
          ...H,
          componentContext: H.componentContext.dup(si),
          duplicate: !0
        }));
        Xe.forEach((H, Pt) => {
          rt[ke.length + Pt] = Pt;
        }), je.forEach((H, Pt) => {
          rt[Pt - Co] = ke.length - Co + Pt;
        }), e(4, ke = [].concat(je, ke, Xe)), e(53, Mt = !0);
      } else
        e(53, Mt = !1);
      vt();
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonLayoutMode*/
    1073741824 && (A ? A.type !== "percentage" && A.type !== "fixed" && A.type !== "wrap_content" ? (e(41, pt = !0), ze.logError(X(new Error('Incorrect value of "layout_mode.type" for div "pager"')))) : e(41, pt = !1) : (e(41, pt = !0), ze.logError(X(new Error('Empty "layout_mode" prop for div "pager"'))))), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[2] & /*$jsonOrientation*/
    8 && e(2, Dt = Ea(qe, Dt)), t.$$.dirty[2] & /*$jsonItemSpacing*/
    4) {
      const Xe = Ie == null ? void 0 : Ie.value;
      Xe && Ln(Xe) && e(42, Nt = dn(Xe || 0));
    }
    if (t.$$.dirty[0] & /*$direction*/
    64 | t.$$.dirty[1] & /*paddingObj*/
    4096 | t.$$.dirty[2] & /*$jsonPaddings*/
    2 && (e(43, ot = vi(fe, ot)), e(44, Q = wo(ot, ee))), t.$$.dirty[0] & /*orientation*/
    4 && e(57, p = Dt === "horizontal" ? "grid-auto-columns" : "grid-auto-rows"), t.$$.dirty[0] & /*orientation*/
    4 && e(56, m = Dt === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[2] & /*$jsonScrollAxisAlignment*/
    1 && (O === "start" || O === "center" || O === "end") && (e(48, ye = O), vt()), t.$$.dirty[0] & /*orientation, $direction, visibleItems*/
    84 | t.$$.dirty[1] & /*paddingObj, $jsonLayoutMode, scrollAxisAlignment, itemSpacing*/
    1073879040) {
      const Xe = dn(Dt === "horizontal" ? (ot == null ? void 0 : ot.start) || (ee === "ltr" ? ot == null ? void 0 : ot.left : ot == null ? void 0 : ot.right) || 0 : (ot == null ? void 0 : ot.top) || 0), je = dn(Dt === "horizontal" ? (ot == null ? void 0 : ot.end) || (ee === "ltr" ? ot == null ? void 0 : ot.right : ot == null ? void 0 : ot.left) || 0 : (ot == null ? void 0 : ot.bottom) || 0);
      if ((A == null ? void 0 : A.type) === "fixed") {
        const H = ((R = A.neighbour_page_width) == null ? void 0 : R.value) || 0;
        ye === "center" ? e(45, It = `calc(100% + ${Xe} + ${je} - 2 * ${dn(H)} - 2 * ${Nt})`) : ye === "start" ? e(45, It = `calc(100% + ${je} - ${dn(H)} - ${Nt})`) : e(45, It = `calc(100% + ${Xe} - ${dn(H)} - ${Nt})`), e(46, zt = "");
      } else if ((A == null ? void 0 : A.type) === "percentage") {
        let H = (Pe = A.page_width) == null ? void 0 : Pe.value;
        (typeof H != "number" || H < 0) && (H = 100), e(45, It = `calc(${(H / 100).toFixed(2)} * (100% + ${Xe} + ${je}))`), e(46, zt = "");
      } else (A == null ? void 0 : A.type) === "wrap_content" && (e(45, It = ""), e(46, zt = ke.map((H) => {
        var Ze, ht;
        const Pt = H[Dt === "horizontal" ? "width" : "height"];
        if ((Pt == null ? void 0 : Pt.type) === "fixed" || (Pt == null ? void 0 : Pt.type) === "wrap_content")
          return "minmax(max-content, auto)";
        let Ht = "100%";
        return (Pt == null ? void 0 : Pt.type) === "match_parent" && (Ln((Ze = Pt.max_size) == null ? void 0 : Ze.value) && (Ht = `min(${Ht}, ${dn(Pt.max_size.value)})`), Ln((ht = Pt.min_size) == null ? void 0 : ht.value) && (Ht = `max(${Ht}, ${dn(Pt.min_size.value)})`)), Ht;
      }).join(" ")));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonCrossAxisAlignment, crossAxisAlignment*/
    536936448 && (M === "start" || M === "center" || M === "end") && (e(47, Xt = M), e(9, tr = {
      [Dt === "horizontal" ? "parentVAlign" : "parentHAlign"]: Xt
    })), t.$$.dirty[1] & /*itemSpacing, padding, gridAutoSizeProp, autoSizeVal, gridTemplateSizeProp, templateSizeVal, transformStr*/
    117499904 && e(14, h = {
      "grid-gap": Nt,
      padding: Q,
      [p]: It,
      [m]: zt,
      transform: sr
    }), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*animated, crossAxisAlignment, scrollAxisAlignment*/
    8585216 && e(13, y = {
      animated: hr,
      clip: ct.pagerChildrenClipEnabled,
      orientation: Dt,
      "cross-align": Xt,
      "scroll-align": ye
    }), t.$$.dirty[1] & /*hasLayoutModeError*/
    1024 && e(5, w = pt), t.$$.dirty[0] & /*hasError*/
    32 | t.$$.dirty[1] & /*$isDesktop, mounted*/
    268435712 && e(12, D = ue && ut && !w), t.$$.dirty[0] & /*componentContext, items*/
    9 && ze.json) {
      const Xe = ze.getJsonWithVars(ze.json.default_item);
      typeof Xe == "number" && Xe >= 0 && Xe < Ue.length && (e(40, N = Vt = Xe), Ot(Ue.length, Xe)), Nr();
    }
    t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(11, z = Mt || (ee === "ltr" ? We[N] > 0 : We[N] + 1 < ke.length)), t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(10, B = Mt || (ee === "ltr" ? We[N] + 1 < ke.length : We[N] > 0)), t.$$.dirty[1] & /*visibleItemsWithOutDuplicates, currentItem*/
    262656 && Ot(mt, N), t.$$.dirty[1] & /*currentItem*/
    512 && Er(N);
  }, [
    ze,
    at,
    Dt,
    Ue,
    ke,
    w,
    ee,
    de,
    De,
    tr,
    B,
    z,
    D,
    y,
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
    Ye,
    nt,
    jt,
    st,
    Bt,
    dt,
    Ar,
    Tr,
    wr,
    er,
    Qt,
    pr,
    _t,
    ie,
    vt,
    ut,
    N,
    pt,
    Nt,
    ot,
    Q,
    It,
    zt,
    Xt,
    ye,
    mt,
    We,
    nr,
    Tt,
    Mt,
    hr,
    sr,
    m,
    p,
    n,
    ue,
    M,
    A,
    O,
    fe,
    Ie,
    qe,
    Te,
    be,
    oe,
    ir,
    vr,
    ar
  ];
}
class B0 extends Hr {
  constructor(r) {
    super(), Rr(this, r, z0, M0, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const O0 = "appkit-indicator", L0 = "appkit-indicator_visible", R0 = "appkit-indicator__scroller", H0 = "appkit-indicator__items", W0 = "appkit-indicator__item", U0 = "appkit-indicator_placement_default", G0 = "appkit-indicator__item_active", J0 = "appkit-indicator_direction_ltr", q0 = "appkit-indicator_direction_rtl", K0 = "appkit-indicator_placement_stretch", Ei = {
  indicator: O0,
  indicator_visible: L0,
  indicator__scroller: R0,
  indicator__items: H0,
  indicator__item: W0,
  indicator_placement_default: U0,
  indicator__item_active: G0,
  indicator_direction_ltr: J0,
  indicator_direction_rtl: q0,
  indicator_placement_stretch: K0
};
function gu(t, r, e) {
  const n = t.slice();
  n[43] = r[e], n[46] = e;
  const o = (
    /*index*/
    n[46] === /*pagerData*/
    n[8].currentItem
  );
  return n[44] = o, n;
}
function mu(t) {
  let r, e = lr(Array(
    /*pagerData*/
    t[8].size
  )), n = [];
  for (let o = 0; o < e.length; o += 1)
    n[o] = bu(gu(t, e, o));
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      r = He();
    },
    l(o) {
      for (let i = 0; i < n.length; i += 1)
        n[i].l(o);
      r = He();
    },
    m(o, i) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(o, i);
      K(o, r, i);
    },
    p(o, i) {
      if (i[0] & /*pagerData, onIndicatorItemClick, onIndicatorItemKeydown*/
      6291712) {
        e = lr(Array(
          /*pagerData*/
          o[8].size
        ));
        let s;
        for (s = 0; s < e.length; s += 1) {
          const a = gu(o, e, s);
          n[s] ? n[s].p(a, i) : (n[s] = bu(a), n[s].c(), n[s].m(r.parentNode, r));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = e.length;
      }
    },
    d(o) {
      o && k(r), _n(n, o);
    }
  };
}
function bu(t) {
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
      r = Me("div"), this.h();
    },
    l(u) {
      r = Ne(u, "DIV", {
        class: !0,
        role: !0,
        id: !0,
        "aria-controls": !0,
        "aria-selected": !0,
        tabindex: !0
      }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", e = wt("indicator__item", Ei, { active: (
        /*isActiveItem*/
        t[44]
      ) }) + " " + Sr.root__clickable), g(r, "role", "tab"), g(r, "id", n = /*pagerData*/
      t[8].instId + "-tab-" + /*index*/
      t[46]), g(r, "aria-controls", o = /*pagerData*/
      t[8].instId + "-panel-" + /*index*/
      t[46]), g(r, "aria-selected", i = /*isActiveItem*/
      t[44] ? "true" : "false"), g(r, "tabindex", s = /*isActiveItem*/
      t[44] ? 0 : -1);
    },
    m(u, f) {
      K(u, r, f), a || (l = [
        $e(r, "click", c),
        $e(
          r,
          "keydown",
          /*onIndicatorItemKeydown*/
          t[22]
        )
      ], a = !0);
    },
    p(u, f) {
      t = u, f[0] & /*pagerData*/
      256 && e !== (e = wt("indicator__item", Ei, { active: (
        /*isActiveItem*/
        t[44]
      ) }) + " " + Sr.root__clickable) && g(r, "class", e), f[0] & /*pagerData*/
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
      u && k(r), a = !1, Kr(l);
    }
  };
}
function Y0(t) {
  let r, e, n = (
    /*pagerData*/
    t[8] && mu(t)
  );
  return {
    c() {
      r = Me("div"), e = Me("div"), n && n.c(), this.h();
    },
    l(o) {
      r = Ne(o, "DIV", { class: !0 });
      var i = Ee(r);
      e = Ne(i, "DIV", { class: !0, role: !0 });
      var s = Ee(e);
      n && n.l(s), s.forEach(k), i.forEach(k), this.h();
    },
    h() {
      g(e, "class", Ei.indicator__items), g(e, "role", "tablist"), T(
        e,
        "margin",
        /*placement*/
        t[4] === "default" ? `0 ${_e(Math.max(
          0,
          /*activeStyle*/
          t[2].width - /*inactiveStyle*/
          t[3].width
        ) / 2)}` : ""
      ), T(e, "--divkit-indicator-inactive-width", _e(
        /*inactiveStyle*/
        t[3].width
      )), T(e, "--divkit-indicator-inactive-height", _e(
        /*inactiveStyle*/
        t[3].height
      )), T(e, "--divkit-indicator-inactive-border-radius", _e(
        /*inactiveStyle*/
        t[3].borderRadius
      )), T(
        e,
        "--divkit-indicator-inactive-background",
        /*inactiveStyle*/
        t[3].background || ""
      ), T(
        e,
        "--divkit-indicator-inactive-box-shadow",
        /*inactiveStyle*/
        t[3].boxShadow || ""
      ), T(e, "--divkit-indicator-active-width", _e(
        /*activeStyle*/
        t[2].width
      )), T(e, "--divkit-indicator-active-height", _e(
        /*activeStyle*/
        t[2].height
      )), T(e, "--divkit-indicator-active-border-radius", _e(
        /*activeStyle*/
        t[2].borderRadius
      )), T(
        e,
        "--divkit-indicator-active-background",
        /*activeStyle*/
        t[2].background || ""
      ), T(
        e,
        "--divkit-indicator-active-box-shadow",
        /*activeStyle*/
        t[2].boxShadow || ""
      ), T(
        e,
        "--divkit-indicator-active-scale",
        /*activeStyle*/
        t[2].width / /*inactiveStyle*/
        t[3].width
      ), T(
        e,
        "--divkit-indicator-default-margin",
        /*placement*/
        t[4] === "default" ? `0 ${_e(
          /*spaceBetweenCenters*/
          (t[5] - /*inactiveStyle*/
          t[3].width) / 2
        )}` : ""
      ), T(
        e,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        t[4] === "stretch" ? _e(
          /*itemSpacing*/
          t[7]
        ) : ""
      ), T(
        e,
        "--divkit-indicator-stretch-max-count",
        /*placement*/
        t[4] === "stretch" ? (
          /*maxVisibleItems*/
          t[6]
        ) : ""
      ), T(
        e,
        "--divkit-indicator-stretch-max-spacer",
        /*placement*/
        t[4] === "stretch" ? _e(
          /*maxVisibleItems*/
          (t[6] - 1) * /*itemSpacing*/
          t[7]
        ) : ""
      ), g(r, "class", Ei.indicator__scroller);
    },
    m(o, i) {
      K(o, r, i), Et(r, e), n && n.m(e, null), t[35](e), t[36](r);
    },
    p(o, i) {
      /*pagerData*/
      o[8] ? n ? n.p(o, i) : (n = mu(o), n.c(), n.m(e, null)) : n && (n.d(1), n = null), i[0] & /*placement, activeStyle, inactiveStyle*/
      28 && T(
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
      8 && T(e, "--divkit-indicator-inactive-width", _e(
        /*inactiveStyle*/
        o[3].width
      )), i[0] & /*inactiveStyle*/
      8 && T(e, "--divkit-indicator-inactive-height", _e(
        /*inactiveStyle*/
        o[3].height
      )), i[0] & /*inactiveStyle*/
      8 && T(e, "--divkit-indicator-inactive-border-radius", _e(
        /*inactiveStyle*/
        o[3].borderRadius
      )), i[0] & /*inactiveStyle*/
      8 && T(
        e,
        "--divkit-indicator-inactive-background",
        /*inactiveStyle*/
        o[3].background || ""
      ), i[0] & /*inactiveStyle*/
      8 && T(
        e,
        "--divkit-indicator-inactive-box-shadow",
        /*inactiveStyle*/
        o[3].boxShadow || ""
      ), i[0] & /*activeStyle*/
      4 && T(e, "--divkit-indicator-active-width", _e(
        /*activeStyle*/
        o[2].width
      )), i[0] & /*activeStyle*/
      4 && T(e, "--divkit-indicator-active-height", _e(
        /*activeStyle*/
        o[2].height
      )), i[0] & /*activeStyle*/
      4 && T(e, "--divkit-indicator-active-border-radius", _e(
        /*activeStyle*/
        o[2].borderRadius
      )), i[0] & /*activeStyle*/
      4 && T(
        e,
        "--divkit-indicator-active-background",
        /*activeStyle*/
        o[2].background || ""
      ), i[0] & /*activeStyle*/
      4 && T(
        e,
        "--divkit-indicator-active-box-shadow",
        /*activeStyle*/
        o[2].boxShadow || ""
      ), i[0] & /*activeStyle, inactiveStyle*/
      12 && T(
        e,
        "--divkit-indicator-active-scale",
        /*activeStyle*/
        o[2].width / /*inactiveStyle*/
        o[3].width
      ), i[0] & /*placement, spaceBetweenCenters, inactiveStyle*/
      56 && T(
        e,
        "--divkit-indicator-default-margin",
        /*placement*/
        o[4] === "default" ? `0 ${_e(
          /*spaceBetweenCenters*/
          (o[5] - /*inactiveStyle*/
          o[3].width) / 2
        )}` : ""
      ), i[0] & /*placement, itemSpacing*/
      144 && T(
        e,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        o[4] === "stretch" ? _e(
          /*itemSpacing*/
          o[7]
        ) : ""
      ), i[0] & /*placement, maxVisibleItems*/
      80 && T(
        e,
        "--divkit-indicator-stretch-max-count",
        /*placement*/
        o[4] === "stretch" ? (
          /*maxVisibleItems*/
          o[6]
        ) : ""
      ), i[0] & /*placement, maxVisibleItems, itemSpacing*/
      208 && T(
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
      o && k(r), n && n.d(), t[35](null), t[36](null);
    }
  };
}
function X0(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt(
        "indicator",
        Ei,
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
      $$slots: { default: [Y0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = wt(
        "indicator",
        Ei,
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
const Bl = ["rounded_rectangle", "circle"];
function Z0(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p, m, h = E, y = () => (h(), h = V(u, (de) => e(26, m = de)), u), w, D = E, z = () => (D(), D = V(f, (de) => e(27, w = de)), f), B, ee = E, ue = () => (ee(), ee = V(i, (de) => e(28, B = de)), i), M, q = E, ae = () => (q(), q = V(s, (de) => e(29, M = de)), s), A, F = E, P = () => (F(), F = V(o, (de) => e(30, A = de)), o), O, J = E, he = () => (J(), J = V(a, (de) => e(31, O = de)), a), fe, Ae = E, me = () => (Ae(), Ae = V(c, (de) => e(32, fe = de)), c), Ie, re = E, tt = () => (re(), re = V(l, (de) => e(33, Ie = de)), l);
  t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => J()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => re());
  let { componentContext: qe } = r, { layoutParams: Ke = void 0 } = r;
  const Te = zr(xr).direction;
  Cn(t, Te, (de) => e(25, p = de));
  let pe = {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    background: "#ffdc60"
  }, ce = {
    width: 10,
    height: 10,
    borderRadius: 5,
    background: "#33919cb5"
  }, be = "default", x = 15, ge = 10, oe = 5, Se, Je, Ye, te, Re = !1;
  function ze() {
    e(4, be = "default"), e(5, x = 15), e(6, ge = 10), e(7, oe = 5), e(2, pe = {
      width: 13,
      height: 13,
      borderRadius: 6.5,
      background: "#ffdc60"
    }), e(3, ce = {
      width: 10,
      height: 10,
      borderRadius: 5,
      background: "#33919cb5"
    });
  }
  async function at(de) {
    if (e(8, Ye = de), await Tn(), Je) {
      const ut = Je.children[Ye.currentItem];
      if (ut) {
        const De = ut.offsetLeft;
        Se.scroll({
          left: De - Se.clientWidth / 2,
          behavior: "smooth"
        });
      }
    }
  }
  function ct(de) {
    de !== Ye.currentItem && Ye.scrollToPagerItem(de);
  }
  function nt(de) {
    if (de.ctrlKey || de.shiftKey || de.altKey || de.metaKey)
      return;
    const { size: ut, currentItem: De } = Ye;
    if (de.which === Pd) {
      const N = De - 1 < 0 ? De : De - 1;
      jt(N);
    } else if (de.which === Nd) {
      const N = De + 1 >= ut ? De : De + 1;
      jt(N);
    } else if (de.which === zd)
      jt(0);
    else if (de.which === Bd)
      jt(ut - 1);
    else
      return;
    de.preventDefault();
  }
  async function jt(de) {
    Ye.scrollToPagerItem(de), await Tn();
    const ut = Je.querySelector(`.${Ei.indicator__item_active}`);
    ut && ut.focus();
  }
  function st() {
    te == null || te(), te = void 0;
    const de = qe.json.pager_id;
    te = qe.listenPager(de, at);
  }
  no(() => {
    e(23, Re = !0);
  }), cn(() => {
    e(23, Re = !1), te == null || te(), te = void 0;
  });
  const Bt = (de) => ct(de);
  function dt(de) {
    Pr[de ? "unshift" : "push"](() => {
      Je = de, e(10, Je);
    });
  }
  function Z(de) {
    Pr[de ? "unshift" : "push"](() => {
      Se = de, e(9, Se);
    });
  }
  return t.$$set = (de) => {
    "componentContext" in de && e(0, qe = de.componentContext), "layoutParams" in de && e(1, Ke = de.layoutParams);
  }, t.$$.update = () => {
    var de, ut;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(24, n = qe.origJson), t.$$.dirty[0] & /*origJson*/
    16777216 && n && ze(), t.$$.dirty[0] & /*origJson, mounted*/
    25165824 && n && Re && st(), t.$$.dirty[0] & /*componentContext*/
    1 && P(e(19, o = qe.getDerivedFromVars(qe.json.shape))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(18, i = qe.getDerivedFromVars(qe.json.active_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(17, s = qe.getDerivedFromVars(qe.json.inactive_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(16, a = qe.getDerivedFromVars(qe.json.active_item_size))), t.$$.dirty[0] & /*componentContext*/
    1 && tt(e(15, l = qe.getDerivedFromVars(qe.json.active_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(14, c = qe.getDerivedFromVars(qe.json.inactive_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && y(e(13, u = qe.getDerivedFromVars(qe.json.space_between_centers))), t.$$.dirty[0] & /*componentContext*/
    1 && z(e(12, f = qe.getDerivedFromVars(qe.json.items_placement))), t.$$.dirty[0] & /*activeStyle, inactiveStyle, $jsonShape, $jsonInactiveItemColor, $jsonActiveItemColor*/
    1879048204 | t.$$.dirty[1] & /*$jsonActiveShape, $jsonInactiveShape, $jsonActiveItemSize*/
    7 && (Ie && e(2, pe = po(
      {
        type: "shape_drawable",
        shape: Ie
      },
      Bl,
      pe
    )), fe && e(3, ce = po(
      {
        type: "shape_drawable",
        shape: fe
      },
      Bl,
      ce
    )), !Ie && !fe && A)) {
      const De = Xn(O, 1.3);
      e(3, ce = po(
        {
          type: "shape_drawable",
          shape: A,
          color: ce.background
        },
        Bl,
        ce
      )), e(3, ce.background = gr(M, 1, ce.background), ce), e(2, pe = {
        ...ce,
        width: ce.width * De,
        height: ce.height * De,
        borderRadius: ce.borderRadius * De,
        background: pe.background
      }), e(2, pe.background = gr(B, 1, pe.background), pe);
    }
    if (t.$$.dirty[0] & /*$jsonItemsPlacement, placement, spaceBetweenCenters, maxVisibleItems, itemSpacing, $jsonSpaceBetweenCenters*/
    201326832)
      if (w && (w.type === "default" || w.type === "stretch")) {
        if (e(4, be = w.type), be === "default")
          e(5, x = on((de = w.space_between_centers) == null ? void 0 : de.value, x));
        else if (be === "stretch") {
          const De = w;
          e(6, ge = Xn(De.max_visible_items, ge)), e(7, oe = on((ut = De.item_spacing) == null ? void 0 : ut.value, oe));
        }
      } else
        e(4, be = "default"), m && e(5, x = on(m.value, x));
    t.$$.dirty[0] & /*placement, $direction, pagerData*/
    33554704 && e(11, _ = {
      placement: be,
      direction: p,
      visible: (Ye == null ? void 0 : Ye.size) > 1
    });
  }, [
    qe,
    Ke,
    pe,
    ce,
    be,
    x,
    ge,
    oe,
    Ye,
    Se,
    Je,
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
    ct,
    nt,
    Re,
    n,
    p,
    m,
    w,
    B,
    M,
    A,
    O,
    fe,
    Ie,
    Bt,
    dt,
    Z
  ];
}
class Q0 extends Hr {
  constructor(r) {
    super(), Rr(this, r, Z0, X0, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const x0 = "appkit-slider", $0 = "appkit-slider__input", e1 = "appkit-slider__input_secondary", t1 = "appkit-slider__thumb", r1 = "appkit-slider_direction_rtl", n1 = "appkit-slider__thumb_secondary", o1 = "appkit-slider__track", i1 = "appkit-slider__tick", s1 = "appkit-slider__tick_active", l1 = "appkit-slider__tick_inactive", Jr = {
  slider: x0,
  slider__input: $0,
  slider__input_secondary: e1,
  slider__thumb: t1,
  slider_direction_rtl: r1,
  slider__thumb_secondary: n1,
  "slider__tracks-wrapper": "appkit-slider__tracks-wrapper",
  "slider__tracks-inner": "appkit-slider__tracks-inner",
  "slider__tracks-ranges": "appkit-slider__tracks-ranges",
  "slider__tracks-ranges_rtl": "appkit-slider__tracks-ranges_rtl",
  slider__track: o1,
  "slider__thumb-text": "appkit-slider__thumb-text",
  "slider__thumb-text_secondary": "appkit-slider__thumb-text_secondary",
  slider__tick: i1,
  slider__tick_active: s1,
  slider__tick_inactive: l1
};
function yu(t, r, e) {
  var a, l;
  if (!t || !t.font_size)
    return e;
  const n = t.offset, o = t.text_color && gr(t.text_color) || "#000", i = ki(t.font_weight, t.font_weight_value, void 0), s = Gi(t.font_variation_settings) || void 0;
  if (Rn(t.font_size) && o !== "transparent") {
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
function No(t, r, e) {
  return Math.max(r, Math.min(e, Number(t)));
}
function Aa(t) {
  return BigInt(t);
}
const _s = Aa("9223372036854775807"), hs = Aa("-9223372036854775808");
function yn(t) {
  const r = Aa(t);
  if (r > _s || r < hs)
    throw new Error("Integer overflow.");
  return r;
}
const Ci = yn(0);
function Gd(t) {
  let r = t;
  return r < 0 && (r = -r), r;
}
function Jd(t) {
  let r = 0;
  return t > 0 ? r = 1 : t < 0 && (r = -1), yn(r);
}
function uo(t, r) {
  var e;
  switch ((e = r[t.type]) == null || e.call(r, t), t.type) {
    case "TemplateLiteral":
      t.expressions.forEach((n) => {
        uo(n, r);
      });
      break;
    case "BinaryExpression":
    case "LogicalExpression":
      uo(t.left, r), uo(t.right, r);
      break;
    case "UnaryExpression":
      uo(t.argument, r);
      break;
    case "ConditionalExpression":
      uo(t.test, r), uo(t.consequent, r), uo(t.alternate, r);
      break;
    case "TryExpression":
      uo(t.test, r), uo(t.alternate, r);
      break;
    case "CallExpression":
      t.arguments.forEach((n) => {
        uo(n, r);
      });
      break;
    case "MethodExpression":
      uo(t.object, r), t.arguments.forEach((n) => {
        uo(n, r);
      });
      break;
  }
}
const a1 = 2147483647, c1 = -2147483648, u1 = Number.MAX_VALUE, f1 = Number.MIN_VALUE, Ge = "string", Oe = "integer", bt = "number", qr = "boolean", mn = "color", lo = "url", Or = "datetime", cr = "dict", ur = "array", d1 = "function";
class Va extends Error {
}
function xs(t) {
  return t.type === "url" || t.type === "color" ? {
    type: "string",
    value: t.value
  } : t;
}
function qd(t) {
  return t.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, "");
}
function Vi(t, r) {
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
      return qd(t.value);
    if (t.type === "color")
      return Ii(kl(t.value));
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
function bn(t) {
  let r = Vi(t, !1);
  return t.type === "string" && (r = "'" + r.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'"), r;
}
function ro(t) {
  return t === "datetime" ? "DateTime" : t.charAt(0).toUpperCase() + t.substring(1);
}
function Si(t, r) {
  return yn(r);
}
function Hn(t, r) {
  if (r < hs || r > _s)
    throw new Error("Integer overflow.");
}
function ko(t) {
  if (typeof t != "string")
    throw new Error("Incorrect url value.");
  try {
    new URL(t);
  } catch {
    throw new Error("Incorrect url value.");
  }
}
function _1(t) {
  try {
    return ko(t), !0;
  } catch {
    return !1;
  }
}
function h1(t) {
  const r = /* @__PURE__ */ new Set();
  return uo(t, {
    Variable(e) {
      r.add(e.id.name);
    }
  }), [...r];
}
function Fn(t, r) {
  throw new Va(`Failed to evaluate [${t}]. ${r}`);
}
function p1(t, r) {
  throw new Error(r);
}
function kl(t) {
  const r = yo(t);
  if (r)
    return r;
  throw new Error("Unable to convert value to Color, expected format #AARRGGBB.");
}
function Ii(t) {
  return `#${[t.a, t.r, t.g, t.b].map((r) => {
    if (r < 0 || r > 255)
      throw new Error("Value out of range 0..1.");
    return Ed(Math.round(r).toString(16), 2);
  }).join("").toUpperCase()}`;
}
function li(t) {
  return Ii(kl(t));
}
function Ql(t) {
  return {
    type: bt,
    value: Number(t.value)
  };
}
const g1 = {
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
function jl(t, r, e) {
  if (e === "function")
    throw new Error("Cannot convert function");
  const n = g1[e];
  let o = typeof r;
  if (n === "array" && !Array.isArray(r) || n !== "array" && o !== n || o === "object" && r === null)
    throw o === "object" && (Array.isArray(r) ? o = "array" : r === null ? o = "null" : o = "dict"), new Error(`Incorrect value type: expected ${ro(e)}, got ${ro(o)}.`);
  if (n === "number" && e === "integer") {
    t && Hn(t, r);
    try {
      r = yn(r);
    } catch {
      throw new Error("Cannot convert value to integer.");
    }
  }
  return n === "string" && e === "color" && (r = li(r)), n === "string" && e === "url" && ko(r), n === "boolean" && e === qr && (r = r ? 1 : 0), {
    type: e,
    value: r
  };
}
function m1(t) {
  return t.type === "number" || t.type === "integer" ? Number(t.value) : t.type === "boolean" ? !!t.value : t.value;
}
function El(t) {
  return m1(
    jl(void 0, t.value, t.type)
  );
}
class Qo {
  constructor(r, e) {
    jr(this, "name");
    jr(this, "value");
    jr(this, "store");
    const n = this.convertValue(e);
    this.name = r, this.value = n;
  }
  getName() {
    return this.name;
  }
  subscribe(r) {
    return this.store || (this.store = Bo(this.value)), this.store.subscribe(r);
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
class Kd extends Qo {
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
class Yd extends Qo {
  convertValue(r) {
    if (typeof r != "bigint" && typeof r != "number")
      throw new Error("Incorrect variable value");
    try {
      return yn(r);
    } catch {
      throw new Error("Incorrect variable value");
    }
  }
  fromString(r) {
    try {
      return yn(r);
    } catch {
      throw new Error("Incorrect variable value");
    }
  }
  getType() {
    return "integer";
  }
}
class Xd extends Qo {
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
class Zd extends Qo {
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
class Qd extends Qo {
  convertValue(r) {
    if (typeof r != "string" || !yo(r))
      throw new Error("Incorrect variable value");
    return li(r);
  }
  fromString(r) {
    return this.convertValue(r);
  }
  getType() {
    return "color";
  }
}
class xd extends Qo {
  convertValue(r) {
    if (typeof r != "string")
      throw new Error("Incorrect variable value");
    return ko(r), r;
  }
  fromString(r) {
    return ko(r), r;
  }
  getType() {
    return "url";
  }
}
class $d extends Qo {
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
class e_ extends Qo {
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
const xl = {
  string: Kd,
  number: Xd,
  integer: Yd,
  boolean: Zd,
  color: Qd,
  url: xd,
  dict: $d,
  array: e_
};
function _o(t, r, e) {
  if (!(r in xl))
    throw new Error("Unsupported variable type");
  return new xl[r](t, e);
}
function b1() {
}
function y1(t) {
  return t(this.value), b1;
}
function wu() {
  throw new Error("Cannot change the value of this type of variable");
}
class w1 extends Kd {
}
class v1 extends Xd {
}
class k1 extends Yd {
}
class j1 extends Zd {
}
class E1 extends Qd {
}
class C1 extends xd {
}
class A1 extends $d {
}
class V1 extends e_ {
}
class S1 extends Qo {
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
const $s = {
  string: w1,
  number: v1,
  integer: k1,
  boolean: j1,
  color: E1,
  url: C1,
  dict: A1,
  array: V1,
  datetime: S1
};
for (const t in $s) {
  const r = $s[t];
  r.prototype.subscribe = y1, r.prototype.set = wu, r.prototype.setValue = wu;
}
function Ds(t, r, e) {
  if (!(r in $s))
    throw new Error("Unsupported variable type");
  return new $s[r](t, e);
}
function I1(t) {
  const r = t.getType();
  let e = t.getValue();
  return r === qr && (e = e ? 1 : 0), {
    type: r,
    value: e
  };
}
function D1(t, r) {
  if (r === "string")
    return t;
  if (r === "integer")
    try {
      return yn(t);
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
    if (typeof t != "string" || !yo(t))
      throw new Error("Incorrect variable value");
    return li(t);
  } else if (r === "url") {
    if (typeof t != "string")
      throw new Error("Incorrect variable value");
    return ko(t), t;
  } else if (r === "dict" || r === "array")
    try {
      return JSON.parse(t);
    } catch {
      throw new Error("Incorrect dict value");
    }
  throw new Error(`Unexpected type ${r}`);
}
function vu(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function ku(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function ju(t, r, e) {
  const n = t.slice();
  return n[90] = r[e], n;
}
function F1(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function T1(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt(
        "slider",
        Jr,
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
          M1,
          ({ focusHandler: n, blurHandler: o }) => ({ 83: n, 84: o }),
          ({ focusHandler: n, blurHandler: o }) => [0, 0, (n ? 2097152 : 0) | (o ? 4194304 : 0)]
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      16777216 && (i.cls = wt(
        "slider",
        Jr,
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Eu(t) {
  let r;
  return {
    c() {
      r = Me("div"), this.h();
    },
    l(e) {
      r = Ne(e, "DIV", { class: !0 }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", Jr.slider__track), T(
        r,
        "left",
        /*range*/
        t[90].left
      ), T(
        r,
        "right",
        /*range*/
        t[90].right
      ), T(
        r,
        "height",
        /*range*/
        t[90].height
      ), T(
        r,
        "border-radius",
        /*range*/
        t[90].borderRadius
      ), T(
        r,
        "background",
        /*range*/
        t[90].background
      ), T(
        r,
        "box-shadow",
        /*range*/
        t[90].boxShadow
      );
    },
    m(e, n) {
      K(e, r, n);
    },
    p(e, n) {
      n[0] & /*renderRanges*/
      2097152 && T(
        r,
        "left",
        /*range*/
        e[90].left
      ), n[0] & /*renderRanges*/
      2097152 && T(
        r,
        "right",
        /*range*/
        e[90].right
      ), n[0] & /*renderRanges*/
      2097152 && T(
        r,
        "height",
        /*range*/
        e[90].height
      ), n[0] & /*renderRanges*/
      2097152 && T(
        r,
        "border-radius",
        /*range*/
        e[90].borderRadius
      ), n[0] & /*renderRanges*/
      2097152 && T(
        r,
        "background",
        /*range*/
        e[90].background
      ), n[0] & /*renderRanges*/
      2097152 && T(
        r,
        "box-shadow",
        /*range*/
        e[90].boxShadow
      );
    },
    d(e) {
      e && k(r);
    }
  };
}
function Cu(t) {
  let r;
  return {
    c() {
      r = Me("div"), this.h();
    },
    l(e) {
      r = Ne(e, "DIV", { class: !0 }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", Jr.slider__tick + " " + Jr.slider__tick_active), T(
        r,
        "--divkit-slider-tick",
        /*val*/
        t[85]
      );
    },
    m(e, n) {
      K(e, r, n);
    },
    p(e, n) {
      n[0] & /*markActiveTicks*/
      131072 && T(
        r,
        "--divkit-slider-tick",
        /*val*/
        e[85]
      );
    },
    d(e) {
      e && k(r);
    }
  };
}
function Au(t) {
  let r;
  return {
    c() {
      r = Me("div"), this.h();
    },
    l(e) {
      r = Ne(e, "DIV", { class: !0 }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", Jr.slider__tick + " " + Jr.slider__tick_inactive), T(
        r,
        "--divkit-slider-tick",
        /*val*/
        t[85]
      );
    },
    m(e, n) {
      K(e, r, n);
    },
    p(e, n) {
      n[0] & /*markInactiveTicks*/
      262144 && T(
        r,
        "--divkit-slider-tick",
        /*val*/
        e[85]
      );
    },
    d(e) {
      e && k(r);
    }
  };
}
function Vu(t) {
  let r, e, n;
  return {
    c() {
      r = Me("div"), e = Me("div"), n = Gn(
        /*value*/
        t[11]
      ), this.h();
    },
    l(o) {
      r = Ne(o, "DIV", { class: !0 });
      var i = Ee(r);
      e = Ne(i, "DIV", { class: !0 });
      var s = Ee(e);
      n = to(
        s,
        /*value*/
        t[11]
      ), s.forEach(k), i.forEach(k), this.h();
    },
    h() {
      var o, i, s, a, l;
      g(e, "class", Jr["slider__thumb-text-inner"]), T(
        e,
        "font-size",
        /*textStyle*/
        ((o = t[7]) == null ? void 0 : o.fontSize) || "1em"
      ), T(
        e,
        "font-weight",
        /*textStyle*/
        ((i = t[7]) == null ? void 0 : i.fontWeight) || ""
      ), T(
        e,
        "font-family",
        /*textStyle*/
        ((s = t[7]) == null ? void 0 : s.fontFamily) || ""
      ), T(
        e,
        "font-variation-settings",
        /*textStyle*/
        ((a = t[7]) == null ? void 0 : a.fontVariationSettings) || ""
      ), T(
        e,
        "color",
        /*textStyle*/
        ((l = t[7]) == null ? void 0 : l.textColor) || "#000"
      ), g(r, "class", Jr["slider__thumb-text"]);
    },
    m(o, i) {
      K(o, r, i), Et(r, e), Et(e, n);
    },
    p(o, i) {
      var s, a, l, c, u;
      i[0] & /*value*/
      2048 && ao(
        n,
        /*value*/
        o[11]
      ), i[0] & /*textStyle*/
      128 && T(
        e,
        "font-size",
        /*textStyle*/
        ((s = o[7]) == null ? void 0 : s.fontSize) || "1em"
      ), i[0] & /*textStyle*/
      128 && T(
        e,
        "font-weight",
        /*textStyle*/
        ((a = o[7]) == null ? void 0 : a.fontWeight) || ""
      ), i[0] & /*textStyle*/
      128 && T(
        e,
        "font-family",
        /*textStyle*/
        ((l = o[7]) == null ? void 0 : l.fontFamily) || ""
      ), i[0] & /*textStyle*/
      128 && T(
        e,
        "font-variation-settings",
        /*textStyle*/
        ((c = o[7]) == null ? void 0 : c.fontVariationSettings) || ""
      ), i[0] & /*textStyle*/
      128 && T(
        e,
        "color",
        /*textStyle*/
        ((u = o[7]) == null ? void 0 : u.textColor) || "#000"
      );
    },
    d(o) {
      o && k(r);
    }
  };
}
function Su(t) {
  let r, e = (
    /*textSecondaryStyle*/
    t[8] && Iu(t)
  );
  return {
    c() {
      r = Me("div"), e && e.c(), this.h();
    },
    l(n) {
      r = Ne(n, "DIV", { class: !0 });
      var o = Ee(r);
      e && e.l(o), o.forEach(k), this.h();
    },
    h() {
      g(r, "class", Jr.slider__thumb + " " + Jr.slider__thumb_secondary), T(r, "border-radius", _e(
        /*thumbSecondaryStyle*/
        t[6].borderRadius
      )), T(
        r,
        "background",
        /*thumbSecondaryStyle*/
        t[6].background
      ), T(
        r,
        "box-shadow",
        /*thumbSecondaryStyle*/
        t[6].boxShadow || ""
      );
    },
    m(n, o) {
      K(n, r, o), e && e.m(r, null);
    },
    p(n, o) {
      /*textSecondaryStyle*/
      n[8] ? e ? e.p(n, o) : (e = Iu(n), e.c(), e.m(r, null)) : e && (e.d(1), e = null), o[0] & /*thumbSecondaryStyle*/
      64 && T(r, "border-radius", _e(
        /*thumbSecondaryStyle*/
        n[6].borderRadius
      )), o[0] & /*thumbSecondaryStyle*/
      64 && T(
        r,
        "background",
        /*thumbSecondaryStyle*/
        n[6].background
      ), o[0] & /*thumbSecondaryStyle*/
      64 && T(
        r,
        "box-shadow",
        /*thumbSecondaryStyle*/
        n[6].boxShadow || ""
      );
    },
    d(n) {
      n && k(r), e && e.d();
    }
  };
}
function Iu(t) {
  let r, e, n;
  return {
    c() {
      r = Me("div"), e = Me("div"), n = Gn(
        /*value2*/
        t[12]
      ), this.h();
    },
    l(o) {
      r = Ne(o, "DIV", { class: !0 });
      var i = Ee(r);
      e = Ne(i, "DIV", { class: !0 });
      var s = Ee(e);
      n = to(
        s,
        /*value2*/
        t[12]
      ), s.forEach(k), i.forEach(k), this.h();
    },
    h() {
      var o, i, s, a, l;
      g(e, "class", Jr["slider__thumb-text-inner"]), T(
        e,
        "font-size",
        /*textSecondaryStyle*/
        ((o = t[8]) == null ? void 0 : o.fontSize) || "1em"
      ), T(
        e,
        "font-weight",
        /*textSecondaryStyle*/
        ((i = t[8]) == null ? void 0 : i.fontWeight) || ""
      ), T(
        e,
        "font-family",
        /*textSecondaryStyle*/
        ((s = t[8]) == null ? void 0 : s.fontFamily) || ""
      ), T(
        e,
        "font-variation-settings",
        /*textSecondaryStyle*/
        ((a = t[8]) == null ? void 0 : a.fontVariationSettings) || ""
      ), T(
        e,
        "color",
        /*textSecondaryStyle*/
        ((l = t[8]) == null ? void 0 : l.textColor) || "#000"
      ), g(r, "class", Jr["slider__thumb-text"] + " " + Jr["slider__thumb-text_secondary"]);
    },
    m(o, i) {
      K(o, r, i), Et(r, e), Et(e, n);
    },
    p(o, i) {
      var s, a, l, c, u;
      i[0] & /*value2*/
      4096 && ao(
        n,
        /*value2*/
        o[12]
      ), i[0] & /*textSecondaryStyle*/
      256 && T(
        e,
        "font-size",
        /*textSecondaryStyle*/
        ((s = o[8]) == null ? void 0 : s.fontSize) || "1em"
      ), i[0] & /*textSecondaryStyle*/
      256 && T(
        e,
        "font-weight",
        /*textSecondaryStyle*/
        ((a = o[8]) == null ? void 0 : a.fontWeight) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && T(
        e,
        "font-family",
        /*textSecondaryStyle*/
        ((l = o[8]) == null ? void 0 : l.fontFamily) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && T(
        e,
        "font-variation-settings",
        /*textSecondaryStyle*/
        ((c = o[8]) == null ? void 0 : c.fontVariationSettings) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && T(
        e,
        "color",
        /*textSecondaryStyle*/
        ((u = o[8]) == null ? void 0 : u.textColor) || "#000"
      );
    },
    d(o) {
      o && k(r);
    }
  };
}
function Du(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Me("input"), this.h();
    },
    l(a) {
      r = Ne(a, "INPUT", {
        type: !0,
        class: !0,
        min: !0,
        max: !0,
        step: !0,
        "aria-label": !0
      }), this.h();
    },
    h() {
      g(r, "type", "range"), g(r, "class", e = /*switchedTracks*/
      t[16] ? Jr.slider__input : `${Jr.slider__input} ${Jr.slider__input_secondary}`), g(
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
      K(a, r, l), i || (s = [
        $e(
          r,
          "input",
          /*input_handler_1*/
          t[75]
        ),
        $e(r, "mousedown", function() {
          Lr(
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
        $e(r, "touchstart", function() {
          Lr(
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
        $e(r, "focus", function() {
          Lr(
            /*focusHandler*/
            t[83]
          ) && t[83].apply(this, arguments);
        }),
        $e(r, "blur", function() {
          Lr(
            /*blurHandler*/
            t[84]
          ) && t[84].apply(this, arguments);
        })
      ], i = !0);
    },
    p(a, l) {
      t = a, l[0] & /*switchedTracks*/
      65536 && e !== (e = /*switchedTracks*/
      t[16] ? Jr.slider__input : `${Jr.slider__input} ${Jr.slider__input_secondary}`) && g(r, "class", e), l[0] & /*minValue*/
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
      a && k(r), i = !1, Kr(s);
    }
  };
}
function M1(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, p, m, h, y, w, D = lr(
    /*renderRanges*/
    t[21]
  ), z = [];
  for (let F = 0; F < D.length; F += 1)
    z[F] = Eu(ju(t, D, F));
  let B = lr(
    /*markActiveTicks*/
    t[17]
  ), ee = [];
  for (let F = 0; F < B.length; F += 1)
    ee[F] = Cu(ku(t, B, F));
  let ue = lr(
    /*markInactiveTicks*/
    t[18]
  ), M = [];
  for (let F = 0; F < ue.length; F += 1)
    M[F] = Au(vu(t, ue, F));
  let q = (
    /*textStyle*/
    t[7] && Vu(t)
  ), ae = (
    /*secondVariable*/
    t[13] && Su(t)
  ), A = (
    /*secondVariable*/
    t[13] && Du(t)
  );
  return {
    c() {
      r = Me("div"), e = Me("div"), n = Me("div");
      for (let F = 0; F < z.length; F += 1)
        z[F].c();
      i = br();
      for (let F = 0; F < ee.length; F += 1)
        ee[F].c();
      s = br();
      for (let F = 0; F < M.length; F += 1)
        M[F].c();
      a = br(), l = Me("div"), q && q.c(), c = br(), ae && ae.c(), u = br(), f = Me("input"), h = br(), A && A.c(), this.h();
    },
    l(F) {
      r = Ne(F, "DIV", { class: !0 });
      var P = Ee(r);
      e = Ne(P, "DIV", { class: !0 });
      var O = Ee(e);
      n = Ne(O, "DIV", { class: !0 });
      var J = Ee(n);
      for (let fe = 0; fe < z.length; fe += 1)
        z[fe].l(J);
      J.forEach(k), i = yr(O);
      for (let fe = 0; fe < ee.length; fe += 1)
        ee[fe].l(O);
      s = yr(O);
      for (let fe = 0; fe < M.length; fe += 1)
        M[fe].l(O);
      a = yr(O), l = Ne(O, "DIV", { class: !0 });
      var he = Ee(l);
      q && q.l(he), he.forEach(k), c = yr(O), ae && ae.l(O), u = yr(O), f = Ne(O, "INPUT", {
        type: !0,
        class: !0,
        min: !0,
        max: !0,
        step: !0,
        "aria-label": !0
      }), h = yr(O), A && A.l(O), O.forEach(k), P.forEach(k), this.h();
    },
    h() {
      g(n, "class", o = Jr["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Jr["slider__tracks-ranges_rtl"] : "")), g(l, "class", Jr.slider__thumb), T(l, "border-radius", _e(
        /*thumbStyle*/
        t[5].borderRadius
      )), T(
        l,
        "background",
        /*thumbStyle*/
        t[5].background
      ), T(
        l,
        "box-shadow",
        /*thumbStyle*/
        t[5].boxShadow || ""
      ), g(f, "type", "range"), g(f, "class", _ = /*switchedTracks*/
      t[16] ? `${Jr.slider__input} ${Jr.slider__input_secondary}` : Jr.slider__input), g(
        f,
        "min",
        /*minValue*/
        t[3]
      ), g(
        f,
        "max",
        /*maxValue*/
        t[4]
      ), g(f, "step", "1"), f.value = p = /*switchedTracks*/
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
      ), g(e, "class", Jr["slider__tracks-inner"]), g(r, "class", Jr["slider__tracks-wrapper"]);
    },
    m(F, P) {
      K(F, r, P), Et(r, e), Et(e, n);
      for (let O = 0; O < z.length; O += 1)
        z[O] && z[O].m(n, null);
      Et(e, i);
      for (let O = 0; O < ee.length; O += 1)
        ee[O] && ee[O].m(e, null);
      Et(e, s);
      for (let O = 0; O < M.length; O += 1)
        M[O] && M[O].m(e, null);
      Et(e, a), Et(e, l), q && q.m(l, null), Et(e, c), ae && ae.m(e, null), Et(e, u), Et(e, f), t[74](f), Et(e, h), A && A.m(e, null), t[76](e), y || (w = [
        $e(
          f,
          "input",
          /*input_handler*/
          t[73]
        ),
        $e(f, "focus", function() {
          Lr(
            /*focusHandler*/
            t[83]
          ) && t[83].apply(this, arguments);
        }),
        $e(f, "blur", function() {
          Lr(
            /*blurHandler*/
            t[84]
          ) && t[84].apply(this, arguments);
        })
      ], y = !0);
    },
    p(F, P) {
      if (t = F, P[0] & /*renderRanges*/
      2097152) {
        D = lr(
          /*renderRanges*/
          t[21]
        );
        let O;
        for (O = 0; O < D.length; O += 1) {
          const J = ju(t, D, O);
          z[O] ? z[O].p(J, P) : (z[O] = Eu(J), z[O].c(), z[O].m(n, null));
        }
        for (; O < z.length; O += 1)
          z[O].d(1);
        z.length = D.length;
      }
      if (P[0] & /*$direction*/
      16384 && o !== (o = Jr["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Jr["slider__tracks-ranges_rtl"] : "")) && g(n, "class", o), P[0] & /*markActiveTicks*/
      131072) {
        B = lr(
          /*markActiveTicks*/
          t[17]
        );
        let O;
        for (O = 0; O < B.length; O += 1) {
          const J = ku(t, B, O);
          ee[O] ? ee[O].p(J, P) : (ee[O] = Cu(J), ee[O].c(), ee[O].m(e, s));
        }
        for (; O < ee.length; O += 1)
          ee[O].d(1);
        ee.length = B.length;
      }
      if (P[0] & /*markInactiveTicks*/
      262144) {
        ue = lr(
          /*markInactiveTicks*/
          t[18]
        );
        let O;
        for (O = 0; O < ue.length; O += 1) {
          const J = vu(t, ue, O);
          M[O] ? M[O].p(J, P) : (M[O] = Au(J), M[O].c(), M[O].m(e, a));
        }
        for (; O < M.length; O += 1)
          M[O].d(1);
        M.length = ue.length;
      }
      /*textStyle*/
      t[7] ? q ? q.p(t, P) : (q = Vu(t), q.c(), q.m(l, null)) : q && (q.d(1), q = null), P[0] & /*thumbStyle*/
      32 && T(l, "border-radius", _e(
        /*thumbStyle*/
        t[5].borderRadius
      )), P[0] & /*thumbStyle*/
      32 && T(
        l,
        "background",
        /*thumbStyle*/
        t[5].background
      ), P[0] & /*thumbStyle*/
      32 && T(
        l,
        "box-shadow",
        /*thumbStyle*/
        t[5].boxShadow || ""
      ), /*secondVariable*/
      t[13] ? ae ? ae.p(t, P) : (ae = Su(t), ae.c(), ae.m(e, u)) : ae && (ae.d(1), ae = null), P[0] & /*switchedTracks*/
      65536 && _ !== (_ = /*switchedTracks*/
      t[16] ? `${Jr.slider__input} ${Jr.slider__input_secondary}` : Jr.slider__input) && g(f, "class", _), P[0] & /*minValue*/
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
      71680 && p !== (p = /*switchedTracks*/
      t[16] ? (
        /*value2*/
        t[12]
      ) : (
        /*value*/
        t[11]
      )) && (f.value = p), P[0] & /*isEnabled*/
      512 && m !== (m = !/*isEnabled*/
      t[9]) && (f.disabled = m), P[0] & /*description*/
      524288 && g(
        f,
        "aria-label",
        /*description*/
        t[19]
      ), /*secondVariable*/
      t[13] ? A ? A.p(t, P) : (A = Du(t), A.c(), A.m(e, null)) : A && (A.d(1), A = null);
    },
    d(F) {
      F && k(r), _n(z, F), _n(ee, F), _n(M, F), q && q.d(), ae && ae.d(), t[74](null), A && A.d(), t[76](null), y = !1, Kr(w);
    }
  };
}
function P1(t) {
  let r, e, n, o, i, s;
  const a = [T1, F1], l = [];
  function c(u, f) {
    return (
      /*hasError*/
      u[10] ? -1 : 0
    );
  }
  return ~(r = c(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(u) {
      e && e.l(u), n = He();
    },
    m(u, f) {
      ~r && l[r].m(u, f), K(u, n, f), o = !0, i || (s = $e(
        window,
        "resize",
        /*checkTicksDebounced*/
        t[43]
      ), i = !0);
    },
    p(u, f) {
      let _ = r;
      r = c(u), r === _ ? ~r && l[r].p(u, f) : (e && (dr(), ne(l[_], 1, 1, () => {
        l[_] = null;
      }), _r()), ~r ? (e = l[r], e ? e.p(u, f) : (e = l[r] = a[r](u), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(u) {
      o || (U(e), o = !0);
    },
    o(u) {
      ne(e), o = !1;
    },
    d(u) {
      u && k(n), ~r && l[r].d(u), i = !1, s();
    }
  };
}
const so = {
  width: 10,
  height: 10,
  borderRadius: 5,
  background: "#000"
}, ys = ["rounded_rectangle", "circle"], Ol = ["rounded_rectangle"];
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
function N1(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p, m, h, y, w, D, z, B, ee, ue, M, q, ae, A, F, P, O, J, he, fe = E, Ae = () => (fe(), fe = V(ee, (j) => e(57, he = j)), ee), me, Ie = E, re = () => (Ie(), Ie = V(z, (j) => e(58, me = j)), z), tt, qe = E, Ke = () => (qe(), qe = V(B, (j) => e(59, tt = j)), B), ve, Te = E, pe = () => (Te(), Te = V(D, (j) => e(60, ve = j)), D), ce, be = E, x = () => (be(), be = V(w, (j) => e(61, ce = j)), w), ge, oe = E, Se = () => (oe(), oe = V(y, (j) => e(62, ge = j)), y), Je, Ye = E, te = () => (Ye(), Ye = V(h, (j) => e(63, Je = j)), h), Re, ze = E, at = () => (ze(), ze = V(m, (j) => e(64, Re = j)), m), ct, nt = E, jt = () => (nt(), nt = V(p, (j) => e(65, ct = j)), p), st, Bt = E, dt = () => (Bt(), Bt = V(_, (j) => e(66, st = j)), _), Z, de = E, ut = () => (de(), de = V(f, (j) => e(67, Z = j)), f), De, N = E, Vt = () => (N(), N = V(u, (j) => e(68, De = j)), u), pt, Dt = E, Nt = () => (Dt(), Dt = V(a, (j) => e(69, pt = j)), a), ot, Q = E, It = () => (Q(), Q = V(s, (j) => e(70, ot = j)), s), zt, tr = E, Xt = () => (tr(), tr = V(c, (j) => e(71, zt = j)), c), ye, Ue = E, mt = () => (Ue(), Ue = V(l, (j) => e(72, ye = j)), l);
  t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => Ie()), t.$$.on_destroy.push(() => qe()), t.$$.on_destroy.push(() => Te()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => ze()), t.$$.on_destroy.push(() => nt()), t.$$.on_destroy.push(() => Bt()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => Dt()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => tr()), t.$$.on_destroy.push(() => Ue());
  let { componentContext: ke } = r, { layoutParams: rt = void 0 } = r;
  const We = zr(xr), nr = zr(Oo), Le = We.direction;
  Cn(t, Le, (j) => e(14, J = j));
  let kt, Tt, Mt, hr = !1, Be = 0, Ct = 100, sr = so, rr = sr, $t = so, mr = so, Ar, Ot = null, Er, Y = null, gt, Kt = gt, At = "", Cr = "", Tr = !0, wr = !1, Nr = [];
  function Yr() {
    e(5, sr = so), e(6, rr = sr), e(45, $t = so), e(46, mr = so), e(47, Ot = null), e(48, Y = null), e(7, gt = void 0), e(8, Kt = void 0), e(19, At = ""), e(9, Tr = !0), e(20, Cr = "");
  }
  let or = No(ot || 0, Be, Ct), lt = No(pt || 0, Be, Ct);
  function St({ direction: j, minValue: se, maxValue: d, trackActiveOffset: R, trackActivePart: Pe, trackInactiveStyle: Xe, trackActiveStyle: je, ranges: H = [] }) {
    const Pt = [], Ht = (ht, Yt, Mr) => {
      var Wr, Mn, Ve, Zr;
      const kr = ($r, kn, v, C) => {
        var W, et, Fe, Zt;
        const S = Math.max($r, Yt);
        if (Math.min(kn, Mr) - S > 0) {
          const Ft = C && (et = (W = C[j === "ltr" ? "start" : "end"]) != null ? W : C.left) != null ? et : 0, Qe = C && (Zt = (Fe = C[j === "ltr" ? "end" : "start"]) != null ? Fe : C.right) != null ? Zt : 0;
          Pt.push({
            left: $r,
            right: kn,
            totalLeft: Yt,
            totalRight: Mr,
            leftMargin: Ft,
            rightMargin: Qe,
            style: v
          });
        }
      };
      if ((!H[0] || ((Wr = H[0].start) != null ? Wr : se) > Yt) && kr(Yt, H[0] ? (Mn = H[0].start) != null ? Mn : se : Mr, ht === "inactive" ? Xe : je), H.forEach(($r, kn) => {
        var Zt, Ft, Qe, xt;
        const v = $r[ht === "inactive" ? "track_inactive_style" : "track_active_style"], S = v ? po(v, Ol, so) : ht === "inactive" ? Xe : je, le = H[kn - 1], W = H[kn + 1], et = (Ft = (Zt = $r.start) != null ? Zt : le == null ? void 0 : le.end) != null ? Ft : Yt, Fe = (xt = (Qe = $r.end) != null ? Qe : W == null ? void 0 : W.start) != null ? xt : Mr;
        kr(et, Fe, S, $r.margins);
      }), H[H.length - 1] && ((Ve = H[H.length - 1].end) != null ? Ve : d) < Mr) {
        const $r = (Zr = H[H.length - 1].end) != null ? Zr : d;
        kr($r, Mr, ht === "inactive" ? Xe : je);
      }
    };
    Ht("inactive", se, d), Ht("active", R, R + Pe);
    const Ze = d - se;
    e(21, Nr = Pt.map((ht) => {
      let Yt = `${(ht.left - se) * 100 / Ze}%`;
      ht.leftMargin && (Yt = `calc(${Yt} + ${dn(ht.leftMargin)})`);
      let Mr;
      ht.totalLeft < ht.left ? Mr = Yt : ht.leftMargin ? Mr = `max(${(ht.totalLeft - se) * 100 / Ze}%, ${Yt})` : Mr = `${(Math.max(ht.totalLeft, ht.left) - se) * 100 / Ze}%`;
      let kr = `${(1 - (ht.right - se) / Ze) * 100}%`;
      ht.rightMargin && (kr = `calc(${kr} + ${dn(ht.rightMargin)})`);
      let Wr;
      return ht.totalRight > ht.right ? Wr = kr : ht.rightMargin ? Wr = `max(${(1 - (ht.totalRight - se) / Ze) * 100}%, ${kr})` : Wr = `${(1 - (Math.max(ht.totalRight, ht.right) - se) / Ze) * 100}%`, {
        left: Mr,
        right: Wr,
        height: _e(ht.style.height),
        borderRadius: _e(ht.style.borderRadius),
        background: ht.style.background,
        boxShadow: ht.style.boxShadow || ""
      };
    }));
  }
  function er(j) {
    var H, Pt;
    if (!Tr)
      return;
    const se = "pageX" in j ? j.pageX : (Pt = (H = j.changedTouches) == null ? void 0 : H[0]) == null ? void 0 : Pt.pageX;
    if (se === void 0)
      return;
    const d = Mt.getBoundingClientRect();
    let R = (se - d.left) / d.width;
    J === "rtl" && (R = 1 - R);
    const Pe = Be + (Ct - Be) * R, Xe = Math.round(No(Pe, Be, Ct)), je = (or + lt) / 2;
    e(16, hr = Xe < je == or < lt);
  }
  function Qt(j, se) {
    const d = Number(j.target.value);
    hr === (se === "first") ? (e(12, lt = d), a.setValue(d)) : (e(11, or = d), s.setValue(d));
  }
  let pr = !1;
  function _t() {
    if (!Mt)
      return;
    const j = Ct - Be, se = (Ot == null ? void 0 : Ot.width) || 0, d = (Y == null ? void 0 : Y.width) || 0;
    Math.max(se, d) * j >= (Mt == null ? void 0 : Mt.clientWidth) ? pr || (ke.logError(X(new Error("Slider ticks overlap each other"), { level: "warn" })), pr = !0) : pr = !1;
  }
  const ie = ja(_t, 50);
  no(() => {
    _t();
  }), cn(() => {
    kt && (We.unregisterFocusable(kt), e(44, kt = void 0));
  });
  const vt = (j) => Qt(j, "first");
  function ir(j) {
    Pr[j ? "unshift" : "push"](() => {
      Tt = j, e(2, Tt);
    });
  }
  const vr = (j) => Qt(j, "second");
  function ar(j) {
    Pr[j ? "unshift" : "push"](() => {
      Mt = j, e(15, Mt);
    });
  }
  return t.$$set = (j) => {
    "componentContext" in j && e(0, ke = j.componentContext), "layoutParams" in j && e(1, rt = j.layoutParams);
  }, t.$$.update = () => {
    var j, se, d, R;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(56, n = ke.origJson), t.$$.dirty[1] & /*origJson*/
    33554432 && n && Yr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, o = ke.json.thumb_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(13, i = ke.json.thumb_secondary_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*firstVariable*/
    16777216 && It(e(22, s = o && (ke.getVariable(o, "integer") || We.awaitGlobalVariable(o, "integer", 0)) || _o("temp", "integer", 0))), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 && Nt(e(23, a = i && (ke.getVariable(i, "integer") || We.awaitGlobalVariable(i, "integer", 0)) || _o("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && mt(e(39, l = ke.getDerivedFromVars(ke.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Xt(e(38, c = ke.getDerivedFromVars(ke.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Vt(e(37, u = ke.getDerivedFromVars(ke.json.thumb_style))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(36, f = ke.getDerivedFromVars(ke.json.thumb_secondary_style))), t.$$.dirty[0] & /*componentContext*/
    1 && dt(e(35, _ = ke.getDerivedFromVars(ke.json.track_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && jt(e(34, p = ke.getDerivedFromVars(ke.json.track_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && at(e(33, m = ke.getDerivedFromVars(ke.json.tick_mark_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && te(e(32, h = ke.getDerivedFromVars(ke.json.tick_mark_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && Se(e(31, y = ke.getDerivedFromVars(ke.json.thumb_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && x(e(30, w = ke.getDerivedFromVars(ke.json.thumb_secondary_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(29, D = ke.getDerivedFromVars(ke.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && re(e(28, z = ke.getDerivedFromVars(ke.json.secondary_value_accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Ke(e(27, B = ke.getDerivedFromVars(ke.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(26, ee = ke.getDerivedFromVars(ke.json.ranges))), t.$$.dirty[0] & /*minValue, maxValue*/
    24 | t.$$.dirty[2] & /*$jsonMinValue, $jsonMaxValue*/
    1536 && (e(3, Be = fo(ye, Be)), e(4, Ct = fo(zt, Ct)), _t()), t.$$.dirty[0] & /*minValue, maxValue, value*/
    2072 | t.$$.dirty[2] & /*$valueVariable*/
    256) {
      const Pe = No(ot || 0, Be, Ct);
      Pe !== or && e(11, or = Pe);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue, value2*/
    4120 | t.$$.dirty[2] & /*$value2Variable*/
    128) {
      const Pe = No(pt || 0, Be, Ct);
      Pe !== lt && e(12, lt = Pe);
    }
    if (t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbStyle*/
    64 && e(5, sr = po(De, ys, sr)), t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbSecondaryStyle*/
    32 && e(6, rr = po(Z, ys, sr)), t.$$.dirty[1] & /*trackInactiveStyle*/
    16384 | t.$$.dirty[2] & /*$jsonTrackInactiveStyle*/
    16 && e(45, $t = po(st, Ol, $t)), t.$$.dirty[1] & /*trackActiveStyle*/
    32768 | t.$$.dirty[2] & /*$jsonTrackActiveStyle*/
    8 && e(46, mr = po(ct, Ol, mr)), t.$$.dirty[2] & /*$jsonMarkActiveStyle*/
    4) {
      let Pe = po(Re, ys, so);
      Pe !== so && e(47, Ot = Pe);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markActiveStyle*/
    65536 && (Ot ? (e(17, Ar = i ? ws(Math.min(or, lt), Math.max(or, lt) + 1, Be, Ct, !0) : ws(Be, or, Be, Ct, !0)), _t()) : e(17, Ar = [])), t.$$.dirty[2] & /*$jsonMarkInactiveStyle*/
    2) {
      let Pe = po(Je, ys, so);
      Pe !== so && e(48, Y = Pe);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markInactiveStyle*/
    131072 && (Y ? (e(18, Er = i ? ws(Math.min(or, lt), Math.max(or, lt) + 1, Be, Ct, !1) : ws(or + 1, Ct + 1, Be, Ct, !0)), _t()) : e(18, Er = [])), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[2] & /*$jsonTextStyle*/
    1 && e(7, gt = yu(ge, We.typefaceProvider, gt)), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[1] & /*$jsonSecondaryTextStyle*/
    1073741824 && e(8, Kt = yu(ce, We.typefaceProvider, gt)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    536870912 && (ve != null && ve.description ? e(19, At = ii(ve)) : ke.logError(X(new Error('Missing accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    512 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    268435456 && e(9, Tr = an(tt, Tr)), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 | t.$$.dirty[1] & /*$jsonSecondaryAccessibility*/
    134217728 && (me != null && me.description ? e(20, Cr = ii(me)) : i && ke.logError(X(new Error('Missing second accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext, thumbStyle, hasError*/
    1057 | t.$$.dirty[1] & /*trackActiveStyle, trackInactiveStyle*/
    49152) {
      let Pe = !1;
      nr.hasAction() ? (ke.logError(X(new Error('Cannot show "slider" inside component with an action or inside accessibility mode=exclude'))), Pe = !0) : sr === so ? (ke.logError(X(new Error('Missing "thumb_style" in slider'))), Pe = !0) : mr === so ? (ke.logError(X(new Error('Missing "track_active_style" in slider'))), Pe = !0) : $t === so && (ke.logError(X(new Error('Missing "track_inactive_style" in slider'))), Pe = !0), Pe !== wr && e(10, wr = Pe);
    }
    t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(52, ue = _e(Math.max(...[sr.width, rr.width, 0].filter(Ln)))), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(51, M = _e(Math.max(...[sr.height, rr.height, 0].filter(Ln)))), t.$$.dirty[0] & /*value, minValue, maxValue*/
    2072 && e(50, q = (or - Be) / (Ct - Be)), t.$$.dirty[0] & /*secondVariable, value2, minValue, maxValue*/
    12312 && e(49, ae = i ? (lt - Be) / (Ct - Be) : void 0), t.$$.dirty[0] & /*value, value2, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(54, A = ae !== void 0 ? Math.min(or, lt) : Be), t.$$.dirty[0] & /*value2, value, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(53, F = ae !== void 0 ? Math.abs(lt - or) : or - Be), t.$$.dirty[0] & /*$direction, minValue, maxValue*/
    16408 | t.$$.dirty[1] & /*trackActiveOffset, trackActivePart, trackInactiveStyle, trackActiveStyle, $jsonRanges*/
    79740928 && St({
      direction: J,
      minValue: Be,
      maxValue: Ct,
      trackActiveOffset: A,
      trackActivePart: F,
      trackInactiveStyle: $t,
      trackActiveStyle: mr,
      ranges: he
    }), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle, textStyle, textSecondaryStyle*/
    480 | t.$$.dirty[1] & /*markActiveStyle, markInactiveStyle, maxThumbWidth, maxThumbHeight, trackPart, trackSecondaryPart*/
    4128768 && e(25, P = {
      "--divkit-slider-thumb-width": _e(sr.width),
      "--divkit-slider-thumb-height": _e(sr.height),
      "--divkit-slider-thumb-secondary-width": _e(rr.width),
      "--divkit-slider-thumb-secondary-height": _e(rr.height),
      "--divkit-slider-text-offset-x": (j = gt == null ? void 0 : gt.offset) != null && j.x ? dn(gt.offset.x) : void 0,
      "--divkit-slider-text-offset-y": (se = gt == null ? void 0 : gt.offset) != null && se.y ? dn(gt.offset.y) : void 0,
      "--divkit-slider-text-secondary-offset-x": (d = Kt == null ? void 0 : Kt.offset) != null && d.x ? dn(Kt.offset.x) : void 0,
      "--divkit-slider-text-secondary-offset-y": (R = Kt == null ? void 0 : Kt.offset) != null && R.y ? dn(Kt.offset.y) : void 0,
      "--divkit-slider-tick-active-width": Ot ? _e(Ot.width) : void 0,
      "--divkit-slider-tick-active-height": Ot ? _e(Ot.height) : void 0,
      "--divkit-slider-tick-active-border-radius": Ot ? _e(Ot.borderRadius) : void 0,
      "--divkit-slider-tick-active-background": (Ot == null ? void 0 : Ot.background) || void 0,
      "--divkit-slider-tick-active-box-shadow": (Ot == null ? void 0 : Ot.boxShadow) || void 0,
      "--divkit-slider-tick-inactive-width": Y ? _e(Y.width) : void 0,
      "--divkit-slider-tick-inactive-height": Y ? _e(Y.height) : void 0,
      "--divkit-slider-tick-inactive-border-radius": Y ? _e(Y.borderRadius) : void 0,
      "--divkit-slider-tick-inactive-background": (Y == null ? void 0 : Y.background) || void 0,
      "--divkit-slider-tick-inactive-box-shadow": (Y == null ? void 0 : Y.boxShadow) || void 0,
      "--divkit-slider-max-thumb-width": ue,
      "--divkit-slider-max-thumb-height": M,
      "--divkit-slider-track-part": q,
      "--divkit-slider-track-secondary-part": ae
    }), t.$$.dirty[0] & /*$direction*/
    16384 && e(24, O = { direction: J }), t.$$.dirty[0] & /*componentContext, input*/
    5 | t.$$.dirty[1] & /*prevId*/
    8192 && ke.json && Tt && (kt && (We.unregisterFocusable(kt), e(44, kt = void 0)), ke.id && !ke.fakeElement && (e(44, kt = ke.id), We.registerFocusable(kt, {
      focus() {
        Tt && Tt.focus();
      }
    })));
  }, [
    ke,
    rt,
    Tt,
    Be,
    Ct,
    sr,
    rr,
    gt,
    Kt,
    Tr,
    wr,
    or,
    lt,
    i,
    J,
    Mt,
    hr,
    Ar,
    Er,
    At,
    Cr,
    Nr,
    s,
    a,
    O,
    P,
    ee,
    B,
    z,
    D,
    w,
    y,
    h,
    m,
    p,
    _,
    f,
    u,
    c,
    l,
    Le,
    er,
    Qt,
    ie,
    kt,
    $t,
    mr,
    Ot,
    Y,
    ae,
    q,
    M,
    ue,
    F,
    A,
    o,
    n,
    he,
    me,
    tt,
    ve,
    ce,
    ge,
    Je,
    Re,
    ct,
    st,
    Z,
    De,
    pt,
    ot,
    zt,
    ye,
    vt,
    ir,
    vr,
    ar
  ];
}
class z1 extends Hr {
  constructor(r) {
    super(), Rr(this, r, N1, P1, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const B1 = "appkit-input", O1 = "appkit-input__aligner", L1 = "appkit-input__input", R1 = "appkit-input__placeholder", H1 = "appkit-input__input_singleline", W1 = "appkit-input__input_multiline", Ji = {
  input: B1,
  "input_alignment-horizontal_center": "appkit-input_alignment-horizontal_center",
  "input_alignment-horizontal_end": "appkit-input_alignment-horizontal_end",
  input__aligner: O1,
  input__input: L1,
  input__placeholder: R1,
  "input_alignment-vertical_start": "appkit-input_alignment-vertical_start",
  "input_alignment-vertical_end": "appkit-input_alignment-vertical_end",
  "input_alignment-vertical_baseline": "appkit-input_alignment-vertical_baseline",
  "input_highlight-color": "appkit-input_highlight-color",
  input__input_singleline: H1,
  "input__scroll-wrapper": "appkit-input__scroll-wrapper",
  input__input_multiline: W1,
  "input__input_has-custom-focus": "appkit-input__input_has-custom-focus"
};
function ps(t, r) {
  if (t === r)
    return {
      start: t.length,
      added: 0,
      removed: 0
    };
  if (t.length > r.length) {
    const i = ps(r, t);
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
class Fu {
  constructor(r) {
    this.char = r;
  }
}
class Ao {
  constructor(r, e, n) {
    this.char = r, this.filter = e, this.placeholder = n;
  }
}
class Sa {
  constructor(r) {
    jr(this, "maskData");
    jr(this, "filters", /* @__PURE__ */ new Map());
    jr(this, "destructedValue", []);
    jr(this, "cursorPos", 0);
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
      if (n instanceof Fu)
        r += n.char;
      else if (n instanceof Ao)
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
    const r = this.destructedValue.findIndex((e) => e instanceof Ao && !e.char);
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
          this.onException(X(i, {
            level: "error",
            additional: {
              key: o.key
            }
          }));
        }
    }), this.destructedValue = this.maskData.pattern.split("").map((o) => {
      const i = this.maskData.decoding.find((s) => s.key === o);
      return i ? new Ao(
        null,
        this.filters.get(i.key),
        i.placeholder
      ) : new Fu(o);
    }), n !== null && this.overrideRawValue(n);
  }
  overrideRawValue(r) {
    this.clearRange(0, this.destructedValue.length), this.replaceChars(r, 0), this.cursorPos = Math.min(this.cursorPos, this.value.length);
  }
  applyChangeFrom(r, e) {
    const n = ps(this.value, r);
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
        this.destructedValue[s] instanceof Ao && ++i, ++s;
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
        if (n instanceof Ao && n.char !== null) {
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
      o instanceof Ao && (o.char = null), ++n;
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
      for (; o < this.destructedValue.length && !(this.destructedValue[o] instanceof Ao); )
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
      i instanceof Ao && i.char !== null && (n += i.char), ++o;
    }
    return n;
  }
  replaceChars(r, e, n) {
    let o = this.calculateInsertableSubstring(r, e);
    n !== void 0 && (o = o.substring(0, n));
    let i = e, s = 0;
    for (; i < this.destructedValue.length && s < o.length; ) {
      const a = this.destructedValue[i], l = o[s];
      a instanceof Ao && (a.char = l, ++s), ++i;
    }
  }
  firstHolderAfter(r) {
    let e = r;
    for (; e < this.destructedValue.length && !(this.destructedValue[e] instanceof Ao); )
      ++e;
    return e;
  }
}
class U1 extends Sa {
  constructor(r, e) {
    super(r), this.logError = e;
  }
  onException(r) {
    this.logError(r);
  }
}
function G1(t, r, e) {
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
    return e ? (e.updateMaskData(n), e) : new U1(n, r);
  }
  return e || null;
}
class J1 extends Sa {
  constructor(e = void 0, n) {
    super({
      pattern: "",
      decoding: [],
      alwaysVisible: !1
    });
    jr(this, "currencyFormatter", new Intl.NumberFormat());
    jr(this, "decimalSeparator", ".");
    jr(this, "localeDigits", {});
    jr(this, "trimZeroRegExp", new RegExp(""));
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
      this.onException(X(n, {
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
    const o = ps(this.value, e), i = this.value.lastIndexOf(this.decimalSeparator), s = e.lastIndexOf(this.decimalSeparator), a = i !== s || i === -1 && s === -1, l = this.validFormat(e, o);
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
      for (let p = 0; p < e.length; p++) {
        const m = e[p];
        m === this.decimalSeparator ? _ = !0 : !this.inDiff(n, p) && _ && this.isDigit(m) && l--;
      }
    }
    const c = e.includes(this.decimalSeparator) || s !== -1, u = [];
    i = e.length - 1;
    let f = !1;
    for (; i >= 0; ) {
      const _ = e[i], p = u.length <= a;
      this.isDigit(_) ? this.inDiff(n, i) && !f && c ? l > 0 && (u.push(_), l--) : u.push(_) : p && o === -1 && i === s ? (u.push(this.decimalSeparator), f = !0) : p && _ === this.decimalSeparator && (o === i || o === -1) && (u.push(this.decimalSeparator), f = !0, o = i), i--;
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
function q1(t, r, e) {
  return e ? (e.updateCurrencyParams(t.locale), e) : new J1(t.locale, r);
}
const K1 = {
  kotlin: {
    public_default_values: !0
  },
  swift: {
    public_default_values: !0
  }
}, Y1 = {
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
}, X1 = "object", Z1 = {
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
}, t_ = {
  codegen: K1,
  constants: Y1,
  type: X1,
  properties: Z1
}, Q1 = "000000000000000", Tu = "*", x1 = "00", Mu = [{
  key: "0",
  filter: "\\d",
  placeholder: "_"
}];
class $1 extends Sa {
  constructor(e) {
    super({
      pattern: Nu(""),
      decoding: Mu,
      alwaysVisible: !1
    });
    jr(this, "decimalSeparator", ".");
    jr(this, "localeDigits", {});
    jr(this, "trimZeroRegExp", new RegExp(""));
    this.logError = e;
  }
  overrideRawValue(e) {
    this.tryInvalidateMaskDataWith(e), super.overrideRawValue(e);
  }
  applyChangeFrom(e, n) {
    const o = ps(this.value, e);
    n !== void 0 && (o.start = Math.max(0, n - o.added));
    const i = this.rawValue, s = this.replaceBodyTail(o, e), a = this.rawValue, l = this.newMaskPatternFor(a);
    if (l == null) {
      this.calculateCursorPosition(o, s);
      return;
    }
    this.updateMaskDataWith(l), this.replaceChars(a, 0);
    const c = ps(i, a), u = c.start + c.added;
    this.calculateCursorPositionBy(u);
  }
  calculateCursorPositionBy(e) {
    let n = 0, o = 0;
    for (; n < this.destructedValue.length && o < e; )
      this.destructedValue[n++] instanceof Ao && o++;
    this.cursorPos = this.firstHolderAfter(n);
  }
  tryInvalidateMaskDataWith(e) {
    const n = this.newMaskPatternFor(e);
    n && this.updateMaskDataWith(n);
  }
  newMaskPatternFor(e) {
    const n = Nu(e), o = this.maskData.pattern;
    return n !== o ? n : null;
  }
  updateMaskDataWith(e) {
    return this.updateMaskData({
      pattern: e,
      decoding: Mu,
      alwaysVisible: this.maskData.alwaysVisible
    }, !1);
  }
  onException(e) {
    this.logError(e);
  }
}
function Pu(t) {
  return "$ref" in t ? t_.constants[t.$ref.split("/").pop()] : t;
}
function Nu(t) {
  if (!t)
    return Q1;
  let r = t_.properties.value.default_value, e = 0;
  for (; !("value" in r); ) {
    if (e >= t.length) {
      r = Pu(r[Tu]);
      break;
    }
    const n = t[e++];
    r = Pu(r[n in r ? n : Tu]);
  }
  return r.value + x1;
}
function eb(t, r) {
  return r || new $1(t);
}
function tb(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function rb(t) {
  let r, e;
  return r = new vn({
    props: {
      alwaysCustomFocus: !0,
      cls: wt(
        "input",
        Ji,
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
          ib,
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
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      262144 && (i.cls = wt(
        "input",
        Ji,
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function nb(t) {
  let r, e, n, o, i, s, a, l, c;
  return {
    c() {
      r = Me("input"), this.h();
    },
    l(u) {
      r = Ne(u, "INPUT", {
        type: !0,
        inputmode: !0,
        class: !0,
        autocomplete: !0,
        autocapitalize: !0,
        "aria-label": !0,
        "aria-describedby": !0,
        style: !0,
        maxlength: !0,
        placeholder: !0,
        enterkeyhint: !0
      }), this.h();
    },
    h() {
      g(
        r,
        "type",
        /*inputType*/
        t[9]
      ), g(
        r,
        "inputmode",
        /*inputMode*/
        t[10]
      ), g(r, "class", e = wt("input__input", Ji, {
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
      t[14] || void 0), g(r, "style", o = fr(
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
      K(u, r, f), t[102](r), l || (c = [
        $e(
          r,
          "input",
          /*onInput*/
          t[48]
        ),
        $e(
          r,
          "keydown",
          /*onKeyDown*/
          t[49]
        ),
        $e(r, "mousedown", function() {
          Lr(
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
        $e(r, "click", function() {
          Lr(
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
        $e(r, "focus", function() {
          Lr(
            /*focusHandler*/
            t[121]
          ) && t[121].apply(this, arguments);
        }),
        $e(r, "blur", function() {
          Lr(
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
      1073741824 && e !== (e = wt("input__input", Ji, {
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
      65536 && o !== (o = fr(
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
      u && k(r), t[102](null), l = !1, Kr(c);
    }
  };
}
function ob(t) {
  let r, e, n, o, i, s, a, l, c;
  return {
    c() {
      r = Me("textarea"), this.h();
    },
    l(u) {
      r = Ne(u, "TEXTAREA", {
        class: !0,
        autocapitalize: !0,
        "aria-label": !0,
        "aria-describedby": !0,
        enterkeyhint: !0,
        style: !0,
        maxlength: !0,
        placeholder: !0
      }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", e = wt("input__input", Ji, {
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
      )), g(r, "style", i = fr(
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
      K(u, r, f), t[101](r), l || (c = [
        $e(
          r,
          "input",
          /*onInput*/
          t[48]
        ),
        $e(
          r,
          "keydown",
          /*onKeyDown*/
          t[49]
        ),
        $e(r, "mousedown", function() {
          Lr(
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
        $e(r, "click", function() {
          Lr(
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
        $e(r, "focus", function() {
          Lr(
            /*focusHandler*/
            t[121]
          ) && t[121].apply(this, arguments);
        }),
        $e(r, "blur", function() {
          Lr(
            /*blurHandler*/
            t[122]
          ) && t[122].apply(this, arguments);
        })
      ], l = !0);
    },
    p(u, f) {
      t = u, f[3] & /*hasCustomFocus*/
      1073741824 && e !== (e = wt("input__input", Ji, {
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
      65536 && i !== (i = fr(
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
      u && k(r), t[101](null), l = !1, Kr(c);
    }
  };
}
function ib(t) {
  let r;
  function e(i, s) {
    return (
      /*isMultiline*/
      i[8] ? ob : nb
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = He();
    },
    l(i) {
      o.l(i), r = He();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function sb(t) {
  let r, e, n, o;
  const i = [rb, tb], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[4] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(l) {
      e && e.l(l), n = He();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (dr(), ne(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
const lb = typeof document < "u" && "inputMode" in document.createElement("input"), zu = {
  email: "email",
  number: "number",
  phone: "tel",
  single_line_text: "text",
  multi_line_text: "text",
  uri: "url",
  password: "password"
};
function ab(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p, m, h, y, w, D, z, B, ee, ue, M, q, ae, A, F, P, O, J, he, fe, Ae, me, Ie, re, tt, qe, Ke, ve = E, Te = () => (ve(), ve = V(s, (xe) => e(74, Ke = xe)), s), pe, ce = E, be = () => (ce(), ce = V(a, (xe) => e(75, pe = xe)), a), x, ge = E, oe = () => (ge(), ge = V(fe, (xe) => e(108, x = xe)), fe), Se, Je = E, Ye = () => (Je(), Je = V(J, (xe) => e(76, Se = xe)), J), te, Re = E, ze = () => (Re(), Re = V(ae, (xe) => e(77, te = xe)), ae), at, ct = E, nt = () => (ct(), ct = V(O, (xe) => e(78, at = xe)), O), jt, st, Bt = E, dt = () => (Bt(), Bt = V(q, (xe) => e(80, st = xe)), q), Z, de = E, ut = () => (de(), de = V(M, (xe) => e(81, Z = xe)), M), De, N = E, Vt = () => (N(), N = V(Ae, (xe) => e(82, De = xe)), Ae), pt, Dt = E, Nt = () => (Dt(), Dt = V(ue, (xe) => e(83, pt = xe)), ue), ot, Q = E, It = () => (Q(), Q = V(ee, (xe) => e(84, ot = xe)), ee), zt, tr = E, Xt = () => (tr(), tr = V(P, (xe) => e(85, zt = xe)), P), ye, Ue = E, mt = () => (Ue(), Ue = V(F, (xe) => e(86, ye = xe)), F), ke, rt = E, We = () => (rt(), rt = V(B, (xe) => e(87, ke = xe)), B), nr, Le = E, kt = () => (Le(), Le = V(z, (xe) => e(88, nr = xe)), z), Tt, Mt = E, hr = () => (Mt(), Mt = V(D, (xe) => e(89, Tt = xe)), D), Be, Ct = E, sr = () => (Ct(), Ct = V(w, (xe) => e(90, Be = xe)), w), rr, $t = E, mr = () => ($t(), $t = V(y, (xe) => e(91, rr = xe)), y), Ar, Ot = E, Er = () => (Ot(), Ot = V(h, (xe) => e(92, Ar = xe)), h), Y, gt = E, Kt = () => (gt(), gt = V(m, (xe) => e(93, Y = xe)), m), At, Cr = E, Tr = () => (Cr(), Cr = V(p, (xe) => e(94, At = xe)), p), wr, Nr = E, Yr = () => (Nr(), Nr = V(_, (xe) => e(95, wr = xe)), _), or, lt = E, St = () => (lt(), lt = V(f, (xe) => e(96, or = xe)), f), er, Qt = E, pr = () => (Qt(), Qt = V(u, (xe) => e(97, er = xe)), u), _t, ie = E, vt = () => (ie(), ie = V(c, (xe) => e(98, _t = xe)), c), ir, vr = E, ar = () => (vr(), vr = V(l, (xe) => e(99, ir = xe)), l), j, se = E, d = () => (se(), se = V(he, (xe) => e(100, j = xe)), he), R, Pe = E, Xe = () => (Pe(), Pe = V(A, (xe) => e(46, R = xe)), A);
  t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => Je()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => ct()), t.$$.on_destroy.push(() => Bt()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => Dt()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => tr()), t.$$.on_destroy.push(() => Ue()), t.$$.on_destroy.push(() => rt()), t.$$.on_destroy.push(() => Le()), t.$$.on_destroy.push(() => Mt()), t.$$.on_destroy.push(() => Ct()), t.$$.on_destroy.push(() => $t()), t.$$.on_destroy.push(() => Ot()), t.$$.on_destroy.push(() => gt()), t.$$.on_destroy.push(() => Cr()), t.$$.on_destroy.push(() => Nr()), t.$$.on_destroy.push(() => lt()), t.$$.on_destroy.push(() => Qt()), t.$$.on_destroy.push(() => ie()), t.$$.on_destroy.push(() => vr()), t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => Pe());
  let { componentContext: je } = r, { layoutParams: H = void 0 } = r;
  const Pt = zr(xr), Ht = zr(Oo), Ze = Pt.direction;
  Cn(t, Ze, (xe) => e(79, jt = xe));
  let ht, Yt, Mr = !1, kr = null, Wr = "", Mn = !1, Ve = "", Zr = 12, $r, kn = "", v = "", C, S = "", le = "#000", W = "", et = "start", Fe = "center", Zt = "multi_line_text", Ft = "text", Qe, xt = "", yt = null, Ir = "", Dr = "", jn = "", sn = !0, un = 1 / 0, fn = "off", In = "default", Zn = "", Jn = !1, io = !0, qt = 0, b = 0;
  function I() {
    e(54, Ve = ""), e(55, Zr = 12), e(56, $r = void 0), e(57, kn = ""), e(58, v = ""), e(59, C = void 0), e(61, le = "#000"), e(62, W = ""), e(63, et = "left"), e(64, Fe = "center"), e(65, Zt = "multi_line_text"), e(9, Ft = "text"), e(10, Qe = void 0), e(5, sn = !0), e(6, un = 1 / 0), e(12, fn = "off"), e(13, In = "default"), e(14, Zn = ""), qt = 0, b = 0;
  }
  function $(xe) {
    (xe == null ? void 0 : xe.type) === "fixed_length" ? e(53, kr = G1(xe, je.logError, kr)) : (xe == null ? void 0 : xe.type) === "currency" ? e(53, kr = q1(xe, je.logError, kr)) : (xe == null ? void 0 : xe.type) === "phone" && e(53, kr = eb(je.logError, kr)), kr && co();
  }
  function L(xe) {
    if (!Array.isArray(x))
      return !0;
    for (const Vr of x)
      if (Vr) {
        if (Vr.type === "regex")
          try {
            if (!new RegExp("^" + (Vr.pattern || "") + "$").test(xe))
              return !1;
          } catch (hn) {
            return je.logError(X(new Error("Failed to create a regex"), {
              additional: { originalError: String(hn) }
            })), !0;
          }
        else if (Vr.type === "expression" && !Vr.condition)
          return !1;
      }
    return !0;
  }
  function Ce(xe) {
    const Vr = xe.target;
    let hn = Vr.value || "";
    hn === `
` && (hn = ""), hn.length > un && (hn = Wr, Vr instanceof HTMLInputElement && (Vr.value = hn)), Wr !== hn && (L(hn) ? (e(3, Wr = hn), s.setValue(hn), kr && Do(), Qn()) : (e(3, Wr = hn), Vr instanceof HTMLInputElement && (Vr.value = hn), Tn().then(() => {
      Ur(qt, b);
    })));
  }
  function we(xe) {
    if (qt = Xr() || 0, b = Br() || 0, xe.ctrlKey || xe.metaKey || xe.altKey || xe.shiftKey)
      return;
    const Vr = je.json.enter_key_actions;
    xe.key === "Enter" && Array.isArray(Vr) && Vr.length && (xe.preventDefault(), je.execAnyActions(Vr));
  }
  function Wt() {
    Mr = !1, setTimeout(
      () => {
        Mr = !0;
      },
      250
    );
  }
  function Gt() {
    Mr || Yt.select();
  }
  function Xr() {
    const xe = Yt;
    return xe.selectionStart === null ? void 0 : xe.selectionStart;
  }
  function Br() {
    const xe = Yt;
    return xe.selectionEnd === null ? void 0 : xe.selectionEnd;
  }
  function Ur(xe, Vr) {
    const hn = Yt;
    hn.selectionStart = xe, hn.selectionEnd = Vr;
  }
  async function Do() {
    if (!Yt || !kr)
      return;
    const xe = Xr() || 0, Vr = Br() || 0;
    kr.applyChangeFrom(Wr, Vr === xe ? Vr : 0), a.set(kr.rawValue), Vl(s, Ke = e(3, Wr = kr.value), Ke);
    const hn = kr.cursorPosition;
    await Tn(), document.activeElement === Yt && Ur(hn, hn);
  }
  async function co() {
    if (!Yt || !kr)
      return;
    kr.overrideRawValue(pe), a.set(kr.rawValue), Vl(s, Ke = e(3, Wr = kr.value), Ke);
    const xe = kr.cursorPosition;
    await Tn(), document.activeElement === Yt && Ur(xe, xe);
  }
  function Qn() {
    const xe = io;
    io = !1;
    const Vr = je.json.validators;
    if (!Array.isArray(Vr) || !Vr.length)
      return;
    const Di = je.getJsonWithVars(Vr).filter((wn) => (wn.type === "regex" || wn.type === "expression") && wn.label_id && wn.variable), On = [];
    Di.forEach((wn) => {
      const jo = je.getVariable(wn.variable);
      if (!jo)
        return;
      if (jo.getType() !== "boolean") {
        xe && je.logError(X(new Error("Incorrect variable type for the validator"), {
          additional: { variable: wn.variable }
        }));
        return;
      }
      let di = !1;
      if (Wr === "" && (wn.allow_empty === !0 || wn.allow_empty === 1))
        di = !0;
      else if (wn.type === "regex") {
        if (!wn.pattern || typeof wn.pattern != "string")
          return;
        try {
          di = new RegExp("^" + wn.pattern + "$").test(Wr);
        } catch {
          xe && je.logError(X(new Error("Failed to create a regular expression using the validator pattern"), {
            additional: { pattern: wn.pattern }
          }));
          return;
        }
      } else if (wn.type === "expression")
        di = wn.condition === !0 || wn.condition === 1;
      else
        return;
      if (jo.setValue(di), !di) {
        const Fi = Pt.getComponentId(wn.label_id);
        Fi && On.push(Fi);
      }
    }), e(14, Zn = On.join(" "));
  }
  no(() => {
    e(70, Jn = !0), Yt && kr && pe && (kr.overrideRawValue(pe), Vl(s, Ke = e(3, Wr = kr.value), Ke));
  }), cn(() => {
    e(70, Jn = !1), ht && (Pt.unregisterFocusable(ht), e(52, ht = void 0));
  });
  function Pn(xe) {
    Pr[xe ? "unshift" : "push"](() => {
      Yt = xe, e(2, Yt);
    });
  }
  function xo(xe) {
    Pr[xe ? "unshift" : "push"](() => {
      Yt = xe, e(2, Yt);
    });
  }
  return t.$$set = (xe) => {
    "componentContext" in xe && e(0, je = xe.componentContext), "layoutParams" in xe && e(1, H = xe.layoutParams);
  }, t.$$.update = () => {
    var xe;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(73, n = je.origJson), t.$$.dirty[2] & /*origJson*/
    2048 && n && I(), t.$$.dirty[0] & /*componentContext*/
    1 && e(71, o = je.json.text_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(72, i = (xe = je.json.mask) == null ? void 0 : xe.raw_text_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*variable*/
    512 && Te(e(7, s = o && (je.getVariable(o, "string") || Pt.awaitGlobalVariable(o, "string", "")) || _o("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*rawVariable*/
    1024 && be(e(15, a = i && (je.getVariable(i, "string") || Pt.awaitGlobalVariable(i, "string", "")) || _o("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && ar(e(45, l = je.getDerivedFromVars(je.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && vt(e(44, c = je.getDerivedFromVars(je.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && pr(e(43, u = je.getDerivedFromVars(je.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && St(e(42, f = je.getDerivedFromVars(je.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && Yr(e(41, _ = je.getDerivedFromVars(je.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Tr(e(40, p = je.getDerivedFromVars(je.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && Kt(e(39, m = je.getDerivedFromVars(je.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && Er(e(38, h = je.getDerivedFromVars(je.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && mr(e(37, y = je.getDerivedFromVars(je.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && sr(e(36, w = je.getDerivedFromVars(je.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && hr(e(35, D = je.getDerivedFromVars(je.json.highlight_color))), t.$$.dirty[0] & /*componentContext*/
    1 && kt(e(34, z = je.getDerivedFromVars(je.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && We(e(33, B = je.getDerivedFromVars(je.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && It(e(32, ee = je.getDerivedFromVars(je.json.keyboard_type))), t.$$.dirty[0] & /*componentContext*/
    1 && Nt(e(31, ue = je.getDerivedFromVars(je.json.mask))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(30, M = je.getDerivedFromVars(je.json.max_visible_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && dt(e(29, q = je.getDerivedFromVars(je.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && ze(e(28, ae = je.getDerivedFromVars(je.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(27, A = je.getDerivedFromVars(je.json.select_all_on_focus))), t.$$.dirty[0] & /*componentContext*/
    1 && mt(e(26, F = je.getDerivedFromVars(je.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Xt(e(25, P = je.getDerivedFromVars(je.json.max_length))), t.$$.dirty[0] & /*componentContext*/
    1 && nt(e(24, O = je.getDerivedFromVars(je.json.autocapitalization))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(23, J = je.getDerivedFromVars(je.json.enter_key_type))), t.$$.dirty[0] & /*componentContext*/
    1 && d(e(22, he = je.getDerivedFromVars(je.json.validators))), t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(21, fe = je.getDerivedFromVars(je.json.filters))), t.$$.dirty[0] & /*componentContext*/
    1 && Vt(e(20, Ae = je.getDerivedFromVars(je.json.max_input_height))), t.$$.dirty[0] & /*componentContext, hasError*/
    17 | t.$$.dirty[2] & /*variable, $jsonAccessibility*/
    33280) {
      let Vr = !1;
      o ? (Ht.hasAction() || (te == null ? void 0 : te.mode) === "exclude") && (Vr = !0, je.logError(X(new Error('Cannot show "input" inside component with an action or inside accessibility mode=exclude')))) : (e(4, Mn = !0), je.logError(X(new Error('Missing "text_variable" in "input"')))), Mn !== Vr && e(4, Mn = Vr);
    }
    if (t.$$.dirty[2] & /*$jsonMask*/
    2097152 && $(pt), t.$$.dirty[0] & /*maxLength*/
    64 | t.$$.dirty[2] & /*$jsonMaxLength*/
    8388608 && e(6, un = Xn(zt, un)), t.$$.dirty[0] & /*value, maxLength, valueVariable*/
    200 | t.$$.dirty[1] & /*inputMask*/
    4194304 | t.$$.dirty[2] & /*$valueVariable*/
    4096 && !kr && Wr !== Ke) {
      let Vr = Ke;
      Vr.length > un && (Vr = Vr.slice(0, un), s.setValue(Vr)), e(3, Wr = Vr), Qn();
    }
    if (t.$$.dirty[1] & /*inputMask*/
    4194304 | t.$$.dirty[2] & /*$rawValueVariable*/
    8192 && kr && kr.rawValue !== pe && (co(), Qn()), t.$$.dirty[2] & /*mounted*/
    256 | t.$$.dirty[3] & /*$jsonValidators*/
    128 && j && Jn && Qn(), t.$$.dirty[3] & /*$jsonHintText*/
    64 && e(19, me = ir), t.$$.dirty[1] & /*hintColor*/
    8388608 | t.$$.dirty[3] & /*$jsonHintColor*/
    32 && e(54, Ve = gr(_t, 1, Ve)), t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[3] & /*$jsonFontSize*/
    16 && e(55, Zr = Xn(er, Zr)), t.$$.dirty[1] & /*fontWeight*/
    33554432 | t.$$.dirty[3] & /*$jsonFontWeight, $jsonFontWeightValue, $jsonFontFamily*/
    14 && (e(56, $r = ki(or, wr, $r)), At && typeof At == "string" ? e(57, kn = Pt.typefaceProvider(At, { fontWeight: $r || 400 })) : e(57, kn = "")), t.$$.dirty[1] & /*fontVariationSettings*/
    134217728 | t.$$.dirty[3] & /*$jsonFontVariationSettings*/
    1) {
      const Vr = Gi(Y);
      Vr !== v && e(58, v = Vr);
    }
    if (t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[2] & /*$jsonLineHeight*/
    1073741824) {
      const Vr = Ar;
      Rn(Vr) && e(59, C = Vr / Zr);
    }
    t.$$.dirty[2] & /*$jsonLetterSpacing*/
    536870912 && gl(rr) && e(60, S = _e(rr)), t.$$.dirty[1] & /*textColor*/
    1073741824 | t.$$.dirty[2] & /*$jsonTextColor*/
    268435456 && e(61, le = gr(Be, 1, le)), t.$$.dirty[2] & /*$jsonHighlightColor, highlightColor*/
    134217729 && e(62, W = gr(Tt, 1, W)), t.$$.dirty[2] & /*$jsonAlignmentHorizontal, $direction, alignmentHorizontal*/
    67239938 && e(63, et = bl(nr, jt, et)), t.$$.dirty[2] & /*$jsonAlignmentVertical, alignmentVertical*/
    33554436 && e(64, Fe = yl(ke, Fe)), t.$$.dirty[0] & /*isEnabled*/
    32 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    16777216 && e(5, sn = an(ye, sn)), t.$$.dirty[2] & /*$jsonKeyboardType, $jsonMask, keyboardType*/
    6291464 && (ot && ot in zu && (e(9, Ft = zu[ot]), e(65, Zt = ot)), (pt == null ? void 0 : pt.type) === "currency" ? (e(9, Ft = lb ? "text" : "tel"), e(10, Qe = "decimal")) : Zt === "number" ? e(10, Qe = "decimal") : e(10, Qe = void 0)), t.$$.dirty[2] & /*keyboardType*/
    8 && e(8, Ie = Zt === "multi_line_text"), t.$$.dirty[1] & /*lineHeight, fontSize*/
    285212672 | t.$$.dirty[2] & /*$jsonMaxInputHeight, $jsonVisibleMaxLines, $jsonPaddings, selfPadding, $direction*/
    1966112 && (Rn(De) ? e(66, xt = dn(De)) : Rn(Z) ? e(66, xt = `calc(${Z * (C || 1.25) * (Zr / 10) + "em"} + ${dn(on(st == null ? void 0 : st.top, 0) + on(st == null ? void 0 : st.bottom, 0))})`) : e(66, xt = ""), e(67, yt = vi(st || void 0, yt)), e(68, Ir = yt ? wo(
      {
        top: (Number(yt.top) || 0) / Zr * 10,
        right: (Number(jt === "ltr" ? yt.end : yt.start) || Number(yt.right) || 0) / Zr * 10,
        bottom: (Number(yt.bottom) || 0) / Zr * 10,
        left: (Number(jt === "ltr" ? yt.start : yt.end) || Number(yt.left) || 0) / Zr * 10
      },
      jt
    ) : ""), e(69, Dr = yt ? wo(
      {
        top: (Number(yt.top) || 0) / Zr * 10,
        bottom: (Number(yt.bottom) || 0) / Zr * 10
      },
      jt
    ) : "")), t.$$.dirty[2] & /*$jsonAutocapitalization*/
    65536 && (at === "all_characters" ? e(12, fn = "characters") : at === "sentences" ? e(12, fn = "sentences") : at === "words" ? e(12, fn = "words") : (at === "none" || at === "auto") && e(12, fn = "off")), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonAccessibility*/
    32768 && (te != null && te.description ? e(11, jn = ii(te)) : je.logError(X(new Error('Missing accessibility "description" for input'), { level: "warn" }))), t.$$.dirty[2] & /*$jsonEnterKeyType*/
    16384 && (Se === "default" || Se === "done" || Se === "go" || Se === "search" || Se === "send") && e(13, In = Se), t.$$.dirty[0] & /*isMultiline*/
    256 | t.$$.dirty[2] & /*highlightColor, alignmentHorizontal, alignmentVertical*/
    7 && e(18, re = {
      "highlight-color": !!W,
      multiline: Ie,
      "alignment-horizontal": et,
      "alignment-vertical": Fe
    }), t.$$.dirty[1] & /*hintColor, lineHeight, fontWeight, fontFamily, fontVariationSettings, letterSpacing, textColor*/
    2122317824 | t.$$.dirty[2] & /*highlightColor, maxHeight*/
    17 && e(17, tt = {
      "--divkit-input-hint-color": Ve,
      "--divkit-input-highlight-color": W,
      "--divkit-input-line-height": C,
      "font-weight": $r,
      "font-family": kn,
      "font-variation-settings": v,
      "letter-spacing": S,
      color: le,
      "max-height": xt
    }), t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[2] & /*padding*/
    64 && e(16, qe = { "font-size": _e(Zr), padding: Ir }), t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[2] & /*verticalPadding*/
    128, t.$$.dirty[0] & /*input, componentContext, value*/
    13 | t.$$.dirty[1] & /*prevId*/
    2097152 && Yt && je.json && (ht && (Pt.unregisterFocusable(ht), e(52, ht = void 0)), je.id && !je.fakeElement && (e(52, ht = je.id), Pt.registerFocusable(ht, {
      focus() {
        Yt && (Yt.focus(), Ur(Wr.length, Wr.length));
      }
    })));
  }, [
    je,
    H,
    Yt,
    Wr,
    Mn,
    sn,
    un,
    s,
    Ie,
    Ft,
    Qe,
    jn,
    fn,
    In,
    Zn,
    a,
    qe,
    tt,
    re,
    me,
    Ae,
    fe,
    he,
    J,
    O,
    P,
    F,
    A,
    ae,
    q,
    M,
    ue,
    ee,
    B,
    z,
    D,
    w,
    y,
    h,
    m,
    p,
    _,
    f,
    u,
    c,
    l,
    R,
    Ze,
    Ce,
    we,
    Wt,
    Gt,
    ht,
    kr,
    Ve,
    Zr,
    $r,
    kn,
    v,
    C,
    S,
    le,
    W,
    et,
    Fe,
    Zt,
    xt,
    yt,
    Ir,
    Dr,
    Jn,
    o,
    i,
    n,
    Ke,
    pe,
    Se,
    te,
    at,
    jt,
    st,
    Z,
    De,
    pt,
    ot,
    zt,
    ye,
    ke,
    nr,
    Tt,
    Be,
    rr,
    Ar,
    Y,
    At,
    wr,
    or,
    er,
    _t,
    ir,
    j,
    Pn,
    xo
  ];
}
class cb extends Hr {
  constructor(r) {
    super(), Rr(this, r, ab, sb, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1, -1]);
  }
}
const ub = "appkit-select", fb = "appkit-select_hint", db = "appkit-select__select", _b = "appkit-select__option", Hi = {
  select: ub,
  "select__select-text": "appkit-select__select-text",
  select_hint: fb,
  select__select: db,
  "select__select_has-custom-focused": "appkit-select__select_has-custom-focused",
  "has-custom-focused": "appkit-has-custom-focused",
  select__option: _b
};
function Bu(t, r, e) {
  const n = t.slice();
  return n[62] = r[e], n;
}
function hb(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function pb(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt(
        "select",
        Hi,
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
          gb,
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
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = wt(
        "select",
        Hi,
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Ou(t) {
  let r, e = (
    /*item*/
    (t[62].text || /*item*/
    t[62].value) + ""
  ), n, o;
  return {
    c() {
      r = Me("option"), n = Gn(e), this.h();
    },
    l(i) {
      r = Ne(i, "OPTION", { class: !0 });
      var s = Ee(r);
      n = to(s, e), s.forEach(k), this.h();
    },
    h() {
      g(r, "class", Hi.select__option), r.__value = o = /*item*/
      t[62].value, Ra(r, r.__value);
    },
    m(i, s) {
      K(i, r, s), Et(r, n);
    },
    p(i, s) {
      s[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      (i[62].text || /*item*/
      i[62].value) + "") && ao(n, e), s[0] & /*filteredItems*/
      32 && o !== (o = /*item*/
      i[62].value) && (r.__value = o, Ra(r, r.__value));
    },
    d(i) {
      i && k(r);
    }
  };
}
function gb(t) {
  let r, e = (
    /*selectText*/
    (t[4] || /*$jsonHintText*/
    t[25] || "​") + ""
  ), n, o, i, s, a, l, c, u, f = lr(
    /*filteredItems*/
    t[5]
  ), _ = [];
  for (let p = 0; p < f.length; p += 1)
    _[p] = Ou(Bu(t, f, p));
  return {
    c() {
      r = Me("span"), n = Gn(e), i = br(), s = Me("select");
      for (let p = 0; p < _.length; p += 1)
        _[p].c();
      this.h();
    },
    l(p) {
      r = Ne(p, "SPAN", {
        class: !0,
        style: !0,
        "aria-hidden": !0
      });
      var m = Ee(r);
      n = to(m, e), m.forEach(k), i = yr(p), s = Ne(p, "SELECT", {
        class: !0,
        "aria-label": !0,
        style: !0
      });
      var h = Ee(s);
      for (let y = 0; y < _.length; y += 1)
        _[y].l(h);
      h.forEach(k), this.h();
    },
    h() {
      g(r, "class", Hi["select__select-text"]), g(r, "style", o = fr(
        /*innerStl*/
        t[9]
      )), g(r, "aria-hidden", "true"), g(s, "class", a = wt("select__select", Hi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[59]
        )
      })), g(
        s,
        "aria-label",
        /*description*/
        t[7]
      ), g(s, "style", l = fr(
        /*selectStl*/
        t[8]
      )), /*$valueVariable*/
      t[6] === void 0 && bo(() => (
        /*select_1_change_handler*/
        t[55].call(s)
      ));
    },
    m(p, m) {
      K(p, r, m), Et(r, n), K(p, i, m), K(p, s, m);
      for (let h = 0; h < _.length; h += 1)
        _[h] && _[h].m(s, null);
      t[54](s), Ha(
        s,
        /*$valueVariable*/
        t[6],
        !0
      ), c || (u = [
        $e(
          s,
          "change",
          /*select_1_change_handler*/
          t[55]
        ),
        $e(s, "focus", function() {
          Lr(
            /*focusHandler*/
            t[60]
          ) && t[60].apply(this, arguments);
        }),
        $e(s, "blur", function() {
          Lr(
            /*blurHandler*/
            t[61]
          ) && t[61].apply(this, arguments);
        })
      ], c = !0);
    },
    p(p, m) {
      if (t = p, m[0] & /*selectText, $jsonHintText*/
      33554448 && e !== (e = /*selectText*/
      (t[4] || /*$jsonHintText*/
      t[25] || "​") + "") && ao(n, e), m[0] & /*innerStl*/
      512 && o !== (o = fr(
        /*innerStl*/
        t[9]
      )) && g(r, "style", o), m[0] & /*filteredItems*/
      32) {
        f = lr(
          /*filteredItems*/
          t[5]
        );
        let h;
        for (h = 0; h < f.length; h += 1) {
          const y = Bu(t, f, h);
          _[h] ? _[h].p(y, m) : (_[h] = Ou(y), _[h].c(), _[h].m(s, null));
        }
        for (; h < _.length; h += 1)
          _[h].d(1);
        _.length = f.length;
      }
      m[1] & /*hasCustomFocus*/
      268435456 && a !== (a = wt("select__select", Hi, {
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
      256 && l !== (l = fr(
        /*selectStl*/
        t[8]
      )) && g(s, "style", l), m[0] & /*$valueVariable, filteredItems*/
      96 && Ha(
        s,
        /*$valueVariable*/
        t[6]
      );
    },
    d(p) {
      p && (k(r), k(i), k(s)), _n(_, p), t[54](null), c = !1, Kr(u);
    }
  };
}
function mb(t) {
  let r, e, n, o;
  const i = [pb, hb], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(l) {
      e && e.l(l), n = He();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (dr(), ne(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function bb(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p, m, h, y, w, D, z, B, ee, ue, M, q, ae = E, A = () => (ae(), ae = V(z, (Be) => e(42, q = Be)), z), F, P = E, O = () => (P(), P = V(D, (Be) => e(43, F = Be)), D), J, he = E, fe = () => (he(), he = V(w, (Be) => e(44, J = Be)), w), Ae, me = E, Ie = () => (me(), me = V(y, (Be) => e(45, Ae = Be)), y), re, tt = E, qe = () => (tt(), tt = V(h, (Be) => e(46, re = Be)), h), Ke, ve = E, Te = () => (ve(), ve = V(m, (Be) => e(47, Ke = Be)), m), pe, ce = E, be = () => (ce(), ce = V(p, (Be) => e(48, pe = Be)), p), x, ge = E, oe = () => (ge(), ge = V(_, (Be) => e(49, x = Be)), _), Se, Je = E, Ye = () => (Je(), Je = V(f, (Be) => e(50, Se = Be)), f), te, Re = E, ze = () => (Re(), Re = V(u, (Be) => e(51, te = Be)), u), at, ct, nt = E, jt = () => (nt(), nt = V(l, (Be) => e(53, ct = Be)), l), st, Bt = E, dt = () => (Bt(), Bt = V(a, (Be) => e(6, st = Be)), a), Z, de = E, ut = () => (de(), de = V(c, (Be) => e(25, Z = Be)), c);
  t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => P()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => Je()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => nt()), t.$$.on_destroy.push(() => Bt()), t.$$.on_destroy.push(() => de());
  let { componentContext: De } = r, { layoutParams: N = void 0 } = r;
  const Vt = zr(xr), pt = zr(Oo), Dt = Vt.direction;
  Cn(t, Dt, (Be) => e(52, at = Be));
  let Nt, ot, Q = !1, It = "", zt = null, tr = "", Xt = "rgba(0,0,0,.45)", ye = 12, Ue, mt = "", ke = "", rt, We = "", nr = "#000", Le = "", kt;
  function Tt() {
    e(28, zt = null), e(30, Xt = "rgba(0,0,0,.45)"), e(31, ye = 12), e(32, Ue = void 0), e(33, mt = ""), e(34, ke = ""), e(35, rt = void 0), e(36, We = ""), e(37, nr = "#000"), e(7, Le = "");
  }
  cn(() => {
    Nt && (Vt.unregisterFocusable(Nt), e(27, Nt = void 0));
  });
  function Mt(Be) {
    Pr[Be ? "unshift" : "push"](() => {
      ot = Be, e(2, ot);
    });
  }
  function hr() {
    st = H_(this), a.set(st), e(5, s), e(40, i), e(0, De);
  }
  return t.$$set = (Be) => {
    "componentContext" in Be && e(0, De = Be.componentContext), "layoutParams" in Be && e(1, N = Be.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(41, n = De.origJson), t.$$.dirty[1] & /*origJson*/
    1024 && n && Tt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(39, o = De.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(40, i = De.json.options), t.$$.dirty[1] & /*items*/
    512 && e(5, s = Array.isArray(i) && i.filter((Be) => typeof Be.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    256 && dt(e(24, a = o && (De.getVariable(o, "string") || Vt.awaitGlobalVariable(o, "string", "")) || _o("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && jt(e(23, l = De.getDerivedFromVars(De.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(22, c = De.getDerivedFromVars(De.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && ze(e(21, u = De.getDerivedFromVars(De.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(20, f = De.getDerivedFromVars(De.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(19, _ = De.getDerivedFromVars(De.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(18, p = De.getDerivedFromVars(De.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(17, m = De.getDerivedFromVars(De.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(16, h = De.getDerivedFromVars(De.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(15, y = De.getDerivedFromVars(De.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(14, w = De.getDerivedFromVars(De.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && O(e(13, D = De.getDerivedFromVars(De.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && A(e(12, z = De.getDerivedFromVars(De.json.accessibility))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || De.logError(X(new Error('Empty selection "items" in "select"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    2304) {
      let Be = !1;
      o ? (pt.hasAction() || (q == null ? void 0 : q.mode) === "exclude") && (Be = !0, De.logError(X(new Error('Cannot show "select" inside component with an action or inside accessibility mode=exclude')))) : (e(3, Q = !0), De.logError(X(new Error('Missing "value_variable" in "select"')))), Q !== Be && e(3, Q = Be);
    }
    if (t.$$.dirty[0] & /*filteredItems, $valueVariable, componentContext*/
    97 | t.$$.dirty[1] & /*prevWarnValue*/
    128) {
      const Be = s.find((Ct) => Ct.value === st);
      Be ? e(4, It = (typeof Be.text == "string" ? Be.text : Be.value) || "") : (e(4, It = ""), st && kt !== st && (e(38, kt = st), De.logError(X(new Error('Value from the variable was not found in the selection items for "select"')))));
    }
    if (t.$$.dirty[1] & /*$jsonFontSize, fontSize*/
    524289 && e(31, ye = Xn(Se, ye)), t.$$.dirty[0] & /*selfPadding*/
    268435456 | t.$$.dirty[1] & /*$jsonPaddings, fontSize, $direction*/
    6291457 && (e(28, zt = vi(ct || void 0, zt)), e(29, tr = zt ? wo(
      {
        top: (Number(zt.top) || 0) / ye * 10,
        right: (Number(at === "ltr" ? zt.end : zt.start) || Number(zt.right) || 0) / ye * 10,
        bottom: (Number(zt.bottom) || 0) / ye * 10,
        left: (Number(at === "ltr" ? zt.start : zt.end) || Number(zt.left) || 0) / ye * 10
      },
      at
    ) : "")), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*$jsonHintColor*/
    1048576 && e(30, Xt = gr(te, 1, Xt)), t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontWeightValue, fontWeight, $jsonFontFamily*/
    458754 && (e(32, Ue = ki(x, pe, Ue)), Ke && typeof Ke == "string" ? e(33, mt = Vt.typefaceProvider(Ke, { fontWeight: Ue || 400 })) : e(33, mt = "")), t.$$.dirty[1] & /*$jsonFontVariationSettings, fontVariationSettings*/
    32776) {
      const Be = Gi(re);
      Be !== ke && e(34, ke = Be);
    }
    if (t.$$.dirty[1] & /*$jsonLineHeight, fontSize*/
    16385) {
      const Be = Ae;
      Rn(Be) && e(35, rt = Be / ye);
    }
    t.$$.dirty[1] & /*$jsonLetterSpacing, fontSize*/
    8193 && gl(J) && e(36, We = _e(J / ye * 10)), t.$$.dirty[1] & /*$jsonTextColor, textColor*/
    4160 && e(37, nr = gr(F, 1, nr)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    2048 && (q != null && q.description ? e(7, Le = ii(q)) : De.logError(X(new Error('Missing accessibility "description" for select'), { level: "warn" }))), t.$$.dirty[0] & /*selectText*/
    16 && e(11, B = { hint: !It }), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*fontWeight, fontFamily, fontVariationSettings, textColor*/
    78 && e(10, ee = {
      "--divkit-input-hint-color": Xt,
      "font-weight": Ue,
      "font-family": mt,
      "font-variation-settings": ke,
      color: nr
    }), t.$$.dirty[0] & /*padding*/
    536870912 | t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(9, ue = {
      padding: tr,
      "font-size": _e(ye),
      "line-height": rt,
      "letter-spacing": We
    }), t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(8, M = {
      "font-size": _e(ye),
      "line-height": rt,
      "letter-spacing": We
    }), t.$$.dirty[0] & /*componentContext, select, prevId*/
    134217733 && De.json && ot && (Nt && (Vt.unregisterFocusable(Nt), e(27, Nt = void 0)), De.id && !De.fakeElement && (e(27, Nt = De.id), Vt.registerFocusable(Nt, {
      focus() {
        ot && ot.focus();
      }
    })));
  }, [
    De,
    N,
    ot,
    Q,
    It,
    s,
    st,
    Le,
    M,
    ue,
    ee,
    B,
    z,
    D,
    w,
    y,
    h,
    m,
    p,
    _,
    f,
    u,
    c,
    l,
    a,
    Z,
    Dt,
    Nt,
    zt,
    tr,
    Xt,
    ye,
    Ue,
    mt,
    ke,
    rt,
    We,
    nr,
    kt,
    o,
    i,
    n,
    q,
    F,
    J,
    Ae,
    re,
    Ke,
    pe,
    x,
    Se,
    te,
    at,
    ct,
    Mt,
    hr
  ];
}
class yb extends Hr {
  constructor(r) {
    super(), Rr(this, r, bb, mb, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const wb = "appkit-video__video", vb = "appkit-video__container", kb = "appkit-video_absolute", Ai = {
  video__video: wb,
  video__container: vb,
  "video__aspect-wrapper": "appkit-video__aspect-wrapper",
  video_absolute: kb
};
function jb(t, r) {
  return Array.isArray(t) && t.length ? t.filter((e) => (e == null ? void 0 : e.type) === "video_source" && typeof e.url == "string" && typeof e.mime_type == "string").map((e) => {
    const n = {
      src: e.url
    };
    return e.mime_type && (n.type = e.mime_type), n;
  }) : r;
}
function Eb(t) {
  return t === "fill" ? "cover" : t === "no_scale" ? "none" : "contain";
}
function Lu(t, r, e) {
  const n = t.slice();
  return n[60] = r[e], n;
}
function Ru(t, r, e) {
  const n = t.slice();
  return n[60] = r[e], n;
}
function Cb(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Ab(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt(
        "video",
        Ai,
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
      $$slots: { default: [Tb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = wt(
        "video",
        Ai,
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Vb(t) {
  let r, e, n, o, i, s = lr(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = Wu(Lu(t, s, l));
  return {
    c() {
      r = Me("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      this.h();
    },
    l(l) {
      r = Ne(l, "VIDEO", {
        class: !0,
        style: !0,
        poster: !0,
        preload: !0
      });
      var c = Ee(r);
      for (let u = 0; u < a.length; u += 1)
        a[u].l(c);
      c.forEach(k), this.h();
    },
    h() {
      g(r, "class", Ai.video__video), g(r, "style", e = fr(
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
      K(l, r, c);
      for (let u = 0; u < a.length; u += 1)
        a[u] && a[u].m(r, null);
      t[52](r), o || (i = [
        $e(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          t[26]
        ),
        $e(
          r,
          "ended",
          /*onEnd*/
          t[27]
        ),
        $e(
          r,
          "playing",
          /*onPlaying*/
          t[28]
        ),
        $e(
          r,
          "pause",
          /*onPause*/
          t[29]
        ),
        $e(
          r,
          "waiting",
          /*onWaiting*/
          t[30]
        ),
        $e(
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
        s = lr(
          /*sources*/
          l[4]
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const f = Lu(l, s, u);
          a[u] ? a[u].p(f, c) : (a[u] = Wu(f), a[u].c(), a[u].m(r, null));
        }
        for (; u < a.length; u += 1)
          a[u].d(1);
        a.length = s.length;
      }
      c[0] & /*style*/
      16384 && e !== (e = fr(
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
      l && k(r), _n(a, l), t[52](null), o = !1, Kr(i);
    }
  };
}
function Sb(t) {
  let r, e;
  return {
    c() {
      r = Me("div"), e = new Li(!1), this.h();
    },
    l(n) {
      r = Ne(n, "DIV", { class: !0 });
      var o = Ee(r);
      e = ga(o, !1), o.forEach(k), this.h();
    },
    h() {
      e.a = null, g(r, "class", Ai.video__container);
    },
    m(n, o) {
      K(n, r, o), e.m(
        /*providedVideoTemplate*/
        t[12],
        r
      ), t[51](r);
    },
    p(n, o) {
      o[0] & /*providedVideoTemplate*/
      4096 && e.p(
        /*providedVideoTemplate*/
        n[12]
      );
    },
    d(n) {
      n && k(r), t[51](null);
    }
  };
}
function Ib(t) {
  let r, e = `${/*aspectPaddingBottom*/
  t[11]}%`;
  function n(s, a) {
    return (
      /*shouldUseVideoProvider*/
      s[13] ? Fb : Db
    );
  }
  let o = n(t), i = o(t);
  return {
    c() {
      r = Me("div"), i.c(), this.h();
    },
    l(s) {
      r = Ne(s, "DIV", { class: !0 });
      var a = Ee(r);
      i.l(a), a.forEach(k), this.h();
    },
    h() {
      g(r, "class", Ai["video__aspect-wrapper"]), T(r, "padding-bottom", e);
    },
    m(s, a) {
      K(s, r, a), i.m(r, null);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, null))), a[0] & /*aspectPaddingBottom*/
      2048 && e !== (e = `${/*aspectPaddingBottom*/
      s[11]}%`) && T(r, "padding-bottom", e);
    },
    d(s) {
      s && k(r), i.d();
    }
  };
}
function Hu(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Me("source"), this.h();
    },
    l(s) {
      r = Ne(s, "SOURCE", { src: !0, type: !0 }), this.h();
    },
    h() {
      eo(r.src, e = /*source*/
      t[60].src) || g(r, "src", e), g(r, "type", n = /*source*/
      t[60].type);
    },
    m(s, a) {
      K(s, r, a), o || (i = $e(
        r,
        "error",
        /*onError*/
        t[31]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*sources*/
      16 && !eo(r.src, e = /*source*/
      s[60].src) && g(r, "src", e), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && g(r, "type", n);
    },
    d(s) {
      s && k(r), o = !1, i();
    }
  };
}
function Wu(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = Hu(t);
  return {
    c() {
      n.c(), e = He();
    },
    l(o) {
      n.l(o), e = He();
    },
    m(o, i) {
      n.m(o, i), K(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Fr(r, r = /*source*/
      o[60]) ? (n.d(1), n = Hu(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && k(e), n.d(o);
    }
  };
}
function Db(t) {
  let r, e, n, o, i, s = lr(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = Gu(Ru(t, s, l));
  return {
    c() {
      r = Me("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      this.h();
    },
    l(l) {
      r = Ne(l, "VIDEO", {
        class: !0,
        style: !0,
        poster: !0,
        preload: !0
      });
      var c = Ee(r);
      for (let u = 0; u < a.length; u += 1)
        a[u].l(c);
      c.forEach(k), this.h();
    },
    h() {
      g(r, "class", Ai.video__video), g(r, "style", e = fr(
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
      K(l, r, c);
      for (let u = 0; u < a.length; u += 1)
        a[u] && a[u].m(r, null);
      t[50](r), o || (i = [
        $e(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          t[26]
        ),
        $e(
          r,
          "ended",
          /*onEnd*/
          t[27]
        ),
        $e(
          r,
          "playing",
          /*onPlaying*/
          t[28]
        ),
        $e(
          r,
          "pause",
          /*onPause*/
          t[29]
        ),
        $e(
          r,
          "waiting",
          /*onWaiting*/
          t[30]
        ),
        $e(
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
        s = lr(
          /*sources*/
          l[4]
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const f = Ru(l, s, u);
          a[u] ? a[u].p(f, c) : (a[u] = Gu(f), a[u].c(), a[u].m(r, null));
        }
        for (; u < a.length; u += 1)
          a[u].d(1);
        a.length = s.length;
      }
      c[0] & /*style*/
      16384 && e !== (e = fr(
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
      l && k(r), _n(a, l), t[50](null), o = !1, Kr(i);
    }
  };
}
function Fb(t) {
  let r, e;
  return {
    c() {
      r = Me("div"), e = new Li(!1), this.h();
    },
    l(n) {
      r = Ne(n, "DIV", { class: !0 });
      var o = Ee(r);
      e = ga(o, !1), o.forEach(k), this.h();
    },
    h() {
      e.a = null, g(r, "class", Ai.video__container);
    },
    m(n, o) {
      K(n, r, o), e.m(
        /*providedVideoTemplate*/
        t[12],
        r
      ), t[49](r);
    },
    p(n, o) {
      o[0] & /*providedVideoTemplate*/
      4096 && e.p(
        /*providedVideoTemplate*/
        n[12]
      );
    },
    d(n) {
      n && k(r), t[49](null);
    }
  };
}
function Uu(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Me("source"), this.h();
    },
    l(s) {
      r = Ne(s, "SOURCE", { src: !0, type: !0 }), this.h();
    },
    h() {
      eo(r.src, e = /*source*/
      t[60].src) || g(r, "src", e), g(r, "type", n = /*source*/
      t[60].type);
    },
    m(s, a) {
      K(s, r, a), o || (i = $e(
        r,
        "error",
        /*onError*/
        t[31]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*sources*/
      16 && !eo(r.src, e = /*source*/
      s[60].src) && g(r, "src", e), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && g(r, "type", n);
    },
    d(s) {
      s && k(r), o = !1, i();
    }
  };
}
function Gu(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = Uu(t);
  return {
    c() {
      n.c(), e = He();
    },
    l(o) {
      n.l(o), e = He();
    },
    m(o, i) {
      n.m(o, i), K(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Fr(r, r = /*source*/
      o[60]) ? (n.d(1), n = Uu(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && k(e), n.d(o);
    }
  };
}
function Tb(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[11] !== "0" ? Ib : (
        /*shouldUseVideoProvider*/
        i[13] ? Sb : Vb
      )
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = He();
    },
    l(i) {
      o.l(i), r = He();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function Mb(t) {
  let r, e, n, o;
  const i = [Ab, Cb], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[2] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(l) {
      e && e.l(l), n = He();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (dr(), ne(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Pb(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p, m, h, y, w, D = E, z = () => (D(), D = V(a, (Le) => e(39, w = Le)), a), B, ee = E, ue = () => (ee(), ee = V(m, (Le) => e(40, B = Le)), m), M, q = E, ae = () => (q(), q = V(p, (Le) => e(41, M = Le)), p), A, F = E, P = () => (F(), F = V(_, (Le) => e(42, A = Le)), _), O, J = E, he = () => (J(), J = V(f, (Le) => e(43, O = Le)), f), fe, Ae = E, me = () => (Ae(), Ae = V(u, (Le) => e(44, fe = Le)), u), Ie, re = E, tt = () => (re(), re = V(c, (Le) => e(45, Ie = Le)), c), qe, Ke = E, ve = () => (Ke(), Ke = V(l, (Le) => e(46, qe = Le)), l), Te, pe = E, ce = () => (pe(), pe = V(s, (Le) => e(47, Te = Le)), s), be, x = E, ge = () => (x(), x = V(i, (Le) => e(48, be = Le)), i);
  t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => J()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => x());
  let { componentContext: oe } = r, { layoutParams: Se = void 0 } = r;
  const Je = zr(xr), Ye = Je.videoPlayerProvider;
  let te, Re = !1, ze = !1, at, ct, nt = [], jt = !1, st = !1, Bt = !1, dt = !1, Z, de = "fit", ut = "0", De = !1, N, Vt = "", pt, Dt = !!Ye;
  function Nt(Le) {
    var sr, rr;
    const kt = oe.getJsonWithVars({
      sources: Le.video_sources,
      repeatable: Le.repeatable,
      autostart: Le.autostart,
      preloadRequired: Le.preload_required,
      muted: Le.muted,
      preview: Le.preview,
      aspect: Le.aspect,
      scale: Le.scale,
      payload: Le.player_settings_payload
    }), Tt = an(kt.repeatable, !1), Mt = an(kt.autostart, !1), hr = an(kt.preloadRequired, !1), Be = an(kt.muted, !1), Ct = (sr = kt.aspect) != null && sr.ratio && Rn(kt.aspect.ratio) ? kt.aspect.ratio : void 0;
    if ((rr = kt.sources) != null && rr.length)
      return {
        sources: kt.sources,
        repeatable: Tt,
        autostart: Mt,
        preloadRequired: hr,
        muted: Be,
        preview: kt.preview,
        aspect: Ct,
        scale: kt.scale,
        payload: kt.payload
      };
  }
  function ot(Le) {
    var kt;
    if (ze) {
      ze = !1;
      return;
    }
    pt ? (kt = pt.seek) == null || kt.call(pt, Number(Le)) : at && e(3, at.currentTime = Number(Le) / 1e3, at);
  }
  function Q() {
    pt ? pt.pause() : at == null || at.pause();
  }
  function It() {
    if (pt) {
      pt.play();
      return;
    }
    const Le = at == null ? void 0 : at.play();
    Le && Le.catch((kt) => {
      oe.logError(X(new Error("Video playing error"), {
        level: "error",
        additional: { originalText: String(kt) }
      }));
    });
  }
  function zt() {
    at && (ze = !0, o.setValue(Math.floor(at.currentTime * 1e3)));
  }
  function tr() {
    oe.execAnyActions(oe.json.end_actions);
  }
  function Xt() {
    oe.execAnyActions(oe.json.resume_actions);
  }
  function ye() {
    oe.execAnyActions(oe.json.pause_actions);
  }
  function Ue() {
    oe.execAnyActions(oe.json.buffering_actions);
  }
  function mt() {
    oe.execAnyActions(oe.json.fatal_actions);
  }
  no(() => {
    if (Ye && ct) {
      const Le = Nt(oe.json);
      if (Le) {
        const kt = Ye.instance(ct, Le);
        kt ? e(36, pt = kt) : e(13, Dt = !1);
      }
    }
  }), cn(() => {
    te && (Je.unregisterInstance(te), e(32, te = void 0)), N && (N(), e(35, N = void 0)), pt && (pt.destroy(), e(36, pt = void 0));
  });
  function ke(Le) {
    Pr[Le ? "unshift" : "push"](() => {
      ct = Le, e(10, ct);
    });
  }
  function rt(Le) {
    Pr[Le ? "unshift" : "push"](() => {
      at = Le, e(3, at);
    });
  }
  function We(Le) {
    Pr[Le ? "unshift" : "push"](() => {
      ct = Le, e(10, ct);
    });
  }
  function nr(Le) {
    Pr[Le ? "unshift" : "push"](() => {
      at = Le, e(3, at);
    });
  }
  return t.$$set = (Le) => {
    "componentContext" in Le && e(0, oe = Le.componentContext), "layoutParams" in Le && e(1, Se = Le.layoutParams);
  }, t.$$.update = () => {
    var Le;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && oe.json && (e(5, jt = !1), e(6, st = !1), e(7, Bt = !1), e(8, dt = !1), e(9, Z = void 0), e(33, de = "fit"), e(34, De = !1), e(13, Dt = !!Ye)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*customVideoInstance, $jsonSource, $jsonRepeatable, $jsonAutostart, $jsonMuted, $jsonPreload, $jsonPreview, $jsonScale, $jsonAspect*/
    260384 && oe.json && pt && (be || Te || w || qe || Ie || fe || O || A)) {
      const kt = Nt(oe.json);
      kt && ((Le = pt.update) == null || Le.call(pt, kt));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(38, n = oe.json.elapsed_time_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*elapsedVariableName*/
    128 && e(37, o = n && (oe.getVariable(n, "integer") || Je.awaitGlobalVariable(n, "integer", 0)) || _o("temp", "integer", 0)), t.$$.dirty[1] & /*elapsedVariable, elapsedVariableUnsubscriber*/
    80 && o && (N && N(), e(35, N = o.subscribe(ot))), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(25, i = oe.getDerivedFromVars(oe.json.video_sources))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(24, s = oe.getDerivedFromVars(oe.json.repeatable))), t.$$.dirty[0] & /*componentContext*/
    1 && z(e(23, a = oe.getDerivedFromVars(oe.json.autostart))), t.$$.dirty[0] & /*componentContext*/
    1 && ve(e(22, l = oe.getDerivedFromVars(oe.json.muted))), t.$$.dirty[0] & /*componentContext*/
    1 && tt(e(21, c = oe.getDerivedFromVars(oe.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(20, u = oe.getDerivedFromVars(oe.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(19, f = oe.getDerivedFromVars(oe.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && P(e(18, _ = oe.getDerivedFromVars(oe.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(17, p = oe.getDerivedFromVars(oe.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(16, m = oe.getDerivedFromVars(oe.json.height))), t.$$.dirty[0] & /*sources, componentContext*/
    17 | t.$$.dirty[1] & /*$jsonSource*/
    131072 && (e(4, nt = jb(be, nt)), nt.length ? e(2, Re = !1) : (e(2, Re = !0), oe.logError(X(new Error('Missing "video_sources" in "video"'))))), t.$$.dirty[0] & /*loop*/
    32 | t.$$.dirty[1] & /*$jsonRepeatable*/
    65536 && e(5, jt = an(Te, jt)), t.$$.dirty[0] & /*autoplay*/
    64 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && e(6, st = an(w, st)), t.$$.dirty[0] & /*muted*/
    128 | t.$$.dirty[1] & /*$jsonMuted*/
    32768 && e(7, Bt = an(qe, Bt)), t.$$.dirty[0] & /*preload*/
    256 | t.$$.dirty[1] & /*$jsonPreload*/
    16384 && e(8, dt = an(Ie, dt)), t.$$.dirty[0] & /*poster*/
    512 | t.$$.dirty[1] & /*$jsonPreview*/
    8192 && e(9, Z = typeof fe == "string" ? Td(fe) : Z), t.$$.dirty[1] & /*$jsonScale, scale*/
    4100 && e(33, de = Eb(O) || de), t.$$.dirty[1] & /*$jsonAspect, $jsonWidth, $jsonHeight*/
    3584) {
      const kt = A == null ? void 0 : A.ratio;
      kt && Rn(kt) ? (e(11, ut = (100 / Number(kt)).toFixed(2)), e(34, De = !0)) : (e(11, ut = "0"), e(34, De = (!M || M.type === "match_parent") && (B == null ? void 0 : B.type) === "match_parent"));
    }
    t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*prevId*/
    2 && oe.json && (te && (Je.unregisterInstance(te), e(32, te = void 0)), oe.id && !Re && !oe.fakeElement && (e(32, te = oe.id), Je.registerInstance(te, { pause: Q, start: It }))), t.$$.dirty[0] & /*componentContext, videoElem*/
    9 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && oe.json && w && at && It(), t.$$.dirty[1] & /*isAbsolute*/
    8 && e(15, h = { absolute: De }), t.$$.dirty[1] & /*scale*/
    4 && e(14, y = { "object-fit": de });
  }, [
    oe,
    Se,
    Re,
    at,
    nt,
    jt,
    st,
    Bt,
    dt,
    Z,
    ct,
    ut,
    Vt,
    Dt,
    y,
    h,
    m,
    p,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    zt,
    tr,
    Xt,
    ye,
    Ue,
    mt,
    te,
    de,
    De,
    N,
    pt,
    o,
    n,
    w,
    B,
    M,
    A,
    O,
    fe,
    Ie,
    qe,
    Te,
    be,
    ke,
    rt,
    We,
    nr
  ];
}
class Nb extends Hr {
  constructor(r) {
    super(), Rr(this, r, Pb, Mb, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const zb = "appkit-switch__tumbler", Bb = "appkit-switch__tumbler_checked", Ob = "appkit-switch_disabled", Lb = "appkit-switch__thumb", Rb = "appkit-switch_direction_rtl", Hb = "appkit-switch__input", pi = {
  switch: "appkit-switch",
  switch__tumbler: zb,
  switch__tumbler_checked: Bb,
  switch_disabled: Ob,
  switch__thumb: Lb,
  switch_direction_rtl: Rb,
  switch__input: Hb
};
function Wi(t) {
  return t === !0 || t === 1;
}
function Wb(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Ub(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt(
        "switch",
        pi,
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
          Gb,
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
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = wt(
        "switch",
        pi,
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Gb(t) {
  let r, e, n, o, i, s, a, l, c;
  return {
    c() {
      r = Me("div"), e = Me("div"), o = br(), i = Me("input"), this.h();
    },
    l(u) {
      r = Ne(u, "DIV", { class: !0 });
      var f = Ee(r);
      e = Ne(f, "DIV", { class: !0 }), Ee(e).forEach(k), f.forEach(k), o = yr(u), i = Ne(u, "INPUT", {
        type: !0,
        class: !0,
        autocomplete: !0,
        "aria-label": !0
      }), this.h();
    },
    h() {
      g(e, "class", pi.switch__thumb), g(r, "class", n = wt("switch__tumbler", pi, { checked: (
        /*value*/
        t[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = wt("switch__input", pi, {
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
      K(u, r, f), Et(r, e), K(u, o, f), K(u, i, f), t[25](i), l || (c = [
        $e(
          i,
          "input",
          /*onInput*/
          t[14]
        ),
        $e(i, "focus", function() {
          Lr(
            /*focusHandler*/
            t[29]
          ) && t[29].apply(this, arguments);
        }),
        $e(i, "blur", function() {
          Lr(
            /*blurHandler*/
            t[30]
          ) && t[30].apply(this, arguments);
        })
      ], l = !0);
    },
    p(u, f) {
      t = u, f[0] & /*value*/
      8 && n !== (n = wt("switch__tumbler", pi, { checked: (
        /*value*/
        t[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      1 && s !== (s = wt("switch__input", pi, {
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
      u && (k(r), k(o), k(i)), t[25](null), l = !1, Kr(c);
    }
  };
}
function Jb(t) {
  let r, e, n, o;
  const i = [Ub, Wb], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[4] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(l) {
      e && e.l(l), n = He();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (dr(), ne(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function qb(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p = E, m = () => (p(), p = V(s, (ve) => e(21, _ = ve)), s), h, y = E, w = () => (y(), y = V(l, (ve) => e(22, h = ve)), l), D, z = E, B = () => (z(), z = V(a, (ve) => e(23, D = ve)), a), ee, ue = E, M = () => (ue(), ue = V(i, (ve) => e(24, ee = ve)), i);
  t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => y()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => ue());
  let { componentContext: q } = r, { layoutParams: ae = void 0 } = r;
  const A = zr(xr), F = zr(Oo), P = A.direction;
  Cn(t, P, (ve) => e(20, f = ve));
  let O, J, he = !1, fe = !1, Ae = "", me = !0, Ie = "#129386", re = "#1293864c";
  function tt() {
    e(5, me = !0), e(16, Ie = "#129386"), e(17, re = "#1293864c");
  }
  function qe(ve) {
    e(3, he = ve.target.checked), i.setValue(he);
  }
  cn(() => {
    O && (A.unregisterFocusable(O), e(15, O = void 0));
  });
  function Ke(ve) {
    Pr[ve ? "unshift" : "push"](() => {
      J = ve, e(2, J);
    });
  }
  return t.$$set = (ve) => {
    "componentContext" in ve && e(0, q = ve.componentContext), "layoutParams" in ve && e(1, ae = ve.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(19, n = q.origJson), t.$$.dirty[0] & /*origJson*/
    524288 && n && tt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, o = q.json.is_on_variable), t.$$.dirty[0] & /*variable, componentContext*/
    262145 && M(e(7, i = o && (q.getVariable(o, "boolean") || A.awaitGlobalVariable(o, "boolean", !1)) || _o("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(12, s = q.getDerivedFromVars(q.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && B(e(11, a = q.getDerivedFromVars(q.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && w(e(10, l = q.getDerivedFromVars(q.json.on_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    2359313) {
      let ve = !1;
      o ? (F.hasAction() || (_ == null ? void 0 : _.mode) === "exclude") && (ve = !0, q.logError(X(new Error('Cannot show "switch" inside component with an action or inside accessibility mode=exclude')))) : (ve = !0, q.logError(X(new Error('Missing "is_on_variable" in "switch"')))), fe !== ve && e(4, fe = ve);
    }
    if (t.$$.dirty[0] & /*value, $valueVariable*/
    16777224 && Wi(he) !== Wi(ee) && e(3, he = Wi(ee)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    8388640 && e(5, me = an(D, me)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    4259840 && (e(16, Ie = gr(h, 1, Ie)), typeof h == "string")) {
      const ve = yo(h);
      ve && (ve.a *= 0.3, e(17, re = ya(ve)));
    }
    t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    2097153 && (_ != null && _.description ? e(6, Ae = ii(_)) : q.logError(X(new Error('Missing accessibility "description" for switch'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled, $direction*/
    1048608 && e(9, c = {
      disabled: !me,
      direction: f
    }), t.$$.dirty[0] & /*onColor, onSubColor*/
    196608 && e(8, u = {
      "--divkit-switch-on-color": Ie,
      "--divkit-switch-on-sub-color": re
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    32773 && J && q.json && (O && (A.unregisterFocusable(O), e(15, O = void 0)), q.id && !q.fakeElement && (e(15, O = q.id), A.registerFocusable(O, {
      focus() {
        J && J.focus();
      }
    })));
  }, [
    q,
    ae,
    J,
    he,
    fe,
    me,
    Ae,
    i,
    u,
    c,
    l,
    a,
    s,
    P,
    qe,
    O,
    Ie,
    re,
    o,
    n,
    f,
    _,
    h,
    D,
    ee,
    Ke
  ];
}
class Kb extends Hr {
  constructor(r) {
    super(), Rr(this, r, qb, Jb, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Yb = "appkit-checkbox", Xb = "appkit-checkbox__box", Zb = "appkit-checkbox__box_checked", Qb = "appkit-checkbox__checkmark", xb = "appkit-checkbox_disabled", $b = "appkit-checkbox__input", gi = {
  checkbox: Yb,
  checkbox__box: Xb,
  checkbox__box_checked: Zb,
  checkbox__checkmark: Qb,
  checkbox_disabled: xb,
  checkbox__input: $b
};
function ey(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function ty(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt(
        "checkbox",
        gi,
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
          ry,
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
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = wt(
        "checkbox",
        gi,
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function ry(t) {
  let r, e, n, o, i, s, a, l, c;
  return {
    c() {
      r = Me("div"), e = Me("div"), o = br(), i = Me("input"), this.h();
    },
    l(u) {
      r = Ne(u, "DIV", { class: !0 });
      var f = Ee(r);
      e = Ne(f, "DIV", { class: !0 }), Ee(e).forEach(k), f.forEach(k), o = yr(u), i = Ne(u, "INPUT", {
        type: !0,
        class: !0,
        autocomplete: !0,
        role: !0,
        "aria-checked": !0,
        "aria-label": !0
      }), this.h();
    },
    h() {
      g(e, "class", gi.checkbox__checkmark), g(r, "class", n = wt("checkbox__box", gi, { checked: (
        /*value*/
        t[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = wt("checkbox__input", gi, {
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
      K(u, r, f), Et(r, e), K(u, o, f), K(u, i, f), t[28](i), l || (c = [
        $e(
          i,
          "input",
          /*onInput*/
          t[15]
        ),
        $e(i, "focus", function() {
          Lr(
            /*focusHandler*/
            t[32]
          ) && t[32].apply(this, arguments);
        }),
        $e(i, "blur", function() {
          Lr(
            /*blurHandler*/
            t[33]
          ) && t[33].apply(this, arguments);
        })
      ], l = !0);
    },
    p(u, f) {
      t = u, f[0] & /*value*/
      8 && n !== (n = wt("checkbox__box", gi, { checked: (
        /*value*/
        t[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      8 && s !== (s = wt("checkbox__input", gi, {
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
      u && (k(r), k(o), k(i)), t[28](null), l = !1, Kr(c);
    }
  };
}
function ny(t) {
  let r, e, n, o;
  const i = [ty, ey], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[4] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(l) {
      e && e.l(l), n = He();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (dr(), ne(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function oy(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p, m = E, h = () => (m(), m = V(s, (oe) => e(22, p = oe)), s), y, w = E, D = () => (w(), w = V(u, (oe) => e(23, y = oe)), u), z, B = E, ee = () => (B(), B = V(c, (oe) => e(24, z = oe)), c), ue, M = E, q = () => (M(), M = V(l, (oe) => e(25, ue = oe)), l), ae, A = E, F = () => (A(), A = V(a, (oe) => e(26, ae = oe)), a), P, O = E, J = () => (O(), O = V(i, (oe) => e(27, P = oe)), i);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => B()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => A()), t.$$.on_destroy.push(() => O());
  let { componentContext: he } = r, { layoutParams: fe = void 0 } = r;
  const Ae = zr(xr), me = zr(Oo);
  let Ie, re, tt = !1, qe = !1, Ke = "", ve = !0, Te = "#129386", pe = "rgba(0, 0, 0, .3)", ce = "#fff";
  function be() {
    e(5, ve = !0), e(17, Te = "#129386"), e(18, pe = "rgba(0, 0, 0, .3)"), e(19, ce = "#fff");
  }
  function x(oe) {
    e(3, tt = oe.target.checked), i.setValue(tt);
  }
  cn(() => {
    Ie && (Ae.unregisterFocusable(Ie), e(16, Ie = void 0));
  });
  function ge(oe) {
    Pr[oe ? "unshift" : "push"](() => {
      re = oe, e(2, re);
    });
  }
  return t.$$set = (oe) => {
    "componentContext" in oe && e(0, he = oe.componentContext), "layoutParams" in oe && e(1, fe = oe.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(21, n = he.origJson), t.$$.dirty[0] & /*origJson*/
    2097152 && n && be(), t.$$.dirty[0] & /*componentContext*/
    1 && e(20, o = he.json.is_checked_variable), t.$$.dirty[0] & /*variable, componentContext*/
    1048577 && J(e(7, i = o && (he.getVariable(o, "boolean") || Ae.awaitGlobalVariable(o, "boolean", !1)) || _o("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && h(e(14, s = he.getDerivedFromVars(he.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && F(e(13, a = he.getDerivedFromVars(he.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && q(e(12, l = he.getDerivedFromVars(he.json.on_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ee(e(11, c = he.getDerivedFromVars(he.json.off_color))), t.$$.dirty[0] & /*componentContext*/
    1 && D(e(10, u = he.getDerivedFromVars(he.json.check_mark_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    5242897) {
      let oe = !1;
      o ? (me.hasAction() || (p == null ? void 0 : p.mode) === "exclude") && (oe = !0, he.logError(X(new Error('Cannot show "checkbox" inside component with an action or inside accessibility mode=exclude')))) : (oe = !0, he.logError(X(new Error('Missing "is_checked_variable" in "checkbox"')))), qe !== oe && e(4, qe = oe);
    }
    t.$$.dirty[0] & /*value, $valueVariable*/
    134217736 && Wi(tt) !== Wi(P) && e(3, tt = Wi(P)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    67108896 && e(5, ve = an(ae, ve)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    33685504 && e(17, Te = gr(ue, 1, Te)), t.$$.dirty[0] & /*$jsonOffColor, offColor*/
    17039360 && e(18, pe = gr(z, 1, pe)), t.$$.dirty[0] & /*$jsonCheckMarkColor, checkMarkColor*/
    8912896 && e(19, ce = gr(y, 1, ce)), t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    4194305 && (p != null && p.description ? e(6, Ke = ii(p)) : he.logError(X(new Error('Missing accessibility "description" for checkbox'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    32 && e(9, f = { disabled: !ve }), t.$$.dirty[0] & /*onColor, offColor, checkMarkColor*/
    917504 && e(8, _ = {
      "--divkit-checkbox-on-color": Te,
      "--divkit-checkbox-off-color": pe,
      "--divkit-checkbox-check-mark-color": ce
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    65541 && re && he.json && (Ie && (Ae.unregisterFocusable(Ie), e(16, Ie = void 0)), he.id && !he.fakeElement && (e(16, Ie = he.id), Ae.registerFocusable(Ie, {
      focus() {
        re && re.focus();
      }
    })));
  }, [
    he,
    fe,
    re,
    tt,
    qe,
    ve,
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
    Te,
    pe,
    ce,
    o,
    n,
    p,
    y,
    z,
    ue,
    ae,
    P,
    ge
  ];
}
class iy extends Hr {
  constructor(r) {
    super(), Rr(this, r, oy, ny, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const sy = "appkit-radio", ly = "appkit-radio__group", ay = "appkit-radio__group_vertical", cy = "appkit-radio__group_horizontal", uy = "appkit-radio__item", fy = "appkit-radio_disabled", dy = "appkit-radio__circle", _y = "appkit-radio__circle_selected", hy = "appkit-radio__dot", py = "appkit-radio__label", gy = "appkit-radio__input", Vo = {
  radio: sy,
  radio__group: ly,
  radio__group_vertical: ay,
  radio__group_horizontal: cy,
  radio__item: uy,
  radio_disabled: fy,
  radio__circle: dy,
  radio__circle_selected: _y,
  radio__dot: hy,
  radio__label: py,
  radio__input: gy
};
function Ju(t, r, e) {
  const n = t.slice();
  return n[55] = r[e], n;
}
function my(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function by(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt(
        "radio",
        Vo,
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
          vy,
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
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = wt(
        "radio",
        Vo,
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function yy(t) {
  let r, e = (
    /*item*/
    t[55].value + ""
  ), n;
  return {
    c() {
      r = Me("span"), n = Gn(e), this.h();
    },
    l(o) {
      r = Ne(o, "SPAN", { class: !0 });
      var i = Ee(r);
      n = to(i, e), i.forEach(k), this.h();
    },
    h() {
      g(r, "class", Vo.radio__label);
    },
    m(o, i) {
      K(o, r, i), Et(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      o[55].value + "") && ao(n, e);
    },
    d(o) {
      o && k(r);
    }
  };
}
function wy(t) {
  let r, e = (
    /*item*/
    t[55].text + ""
  ), n;
  return {
    c() {
      r = Me("span"), n = Gn(e), this.h();
    },
    l(o) {
      r = Ne(o, "SPAN", { class: !0 });
      var i = Ee(r);
      n = to(i, e), i.forEach(k), this.h();
    },
    h() {
      g(r, "class", Vo.radio__label);
    },
    m(o, i) {
      K(o, r, i), Et(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      o[55].text + "") && ao(n, e);
    },
    d(o) {
      o && k(r);
    }
  };
}
function qu(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, p;
  function m(D, z) {
    return (
      /*item*/
      D[55].text ? wy : yy
    );
  }
  let h = m(t), y = h(t);
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
      r = Me("label"), e = Me("div"), n = Me("div"), i = br(), y.c(), s = br(), a = Me("input"), f = br(), this.h();
    },
    l(D) {
      r = Ne(D, "LABEL", { class: !0 });
      var z = Ee(r);
      e = Ne(z, "DIV", { class: !0 });
      var B = Ee(e);
      n = Ne(B, "DIV", { class: !0 }), Ee(n).forEach(k), B.forEach(k), i = yr(z), y.l(z), s = yr(z), a = Ne(z, "INPUT", { type: !0, class: !0, name: !0 }), f = yr(z), z.forEach(k), this.h();
    },
    h() {
      g(n, "class", Vo.radio__dot), g(e, "class", o = wt("radio__circle", Vo, {
        selected: (
          /*$valueVariable*/
          t[23] === /*item*/
          t[55].value
        )
      })), g(a, "type", "radio"), g(a, "class", Vo.radio__input), g(
        a,
        "name",
        /*groupName*/
        t[12]
      ), a.value = l = /*item*/
      t[55].value, a.checked = c = /*$valueVariable*/
      t[23] === /*item*/
      t[55].value, a.disabled = u = !/*isEnabled*/
      t[4], g(r, "class", Vo.radio__item);
    },
    m(D, z) {
      K(D, r, z), Et(r, e), Et(e, n), Et(r, i), y.m(r, null), Et(r, s), Et(r, a), Et(r, f), _ || (p = [
        $e(a, "change", w),
        $e(a, "focus", function() {
          Lr(
            /*focusHandler*/
            t[52]
          ) && t[52].apply(this, arguments);
        }),
        $e(a, "blur", function() {
          Lr(
            /*blurHandler*/
            t[53]
          ) && t[53].apply(this, arguments);
        })
      ], _ = !0);
    },
    p(D, z) {
      t = D, z[0] & /*$valueVariable, filteredItems*/
      8388640 && o !== (o = wt("radio__circle", Vo, {
        selected: (
          /*$valueVariable*/
          t[23] === /*item*/
          t[55].value
        )
      })) && g(e, "class", o), h === (h = m(t)) && y ? y.p(t, z) : (y.d(1), y = h(t), y && (y.c(), y.m(r, s))), z[0] & /*groupName*/
      4096 && g(
        a,
        "name",
        /*groupName*/
        t[12]
      ), z[0] & /*filteredItems*/
      32 && l !== (l = /*item*/
      t[55].value) && (a.value = l), z[0] & /*$valueVariable, filteredItems*/
      8388640 && c !== (c = /*$valueVariable*/
      t[23] === /*item*/
      t[55].value) && (a.checked = c), z[0] & /*isEnabled*/
      16 && u !== (u = !/*isEnabled*/
      t[4]) && (a.disabled = u);
    },
    d(D) {
      D && k(r), y.d(), _ = !1, Kr(p);
    }
  };
}
function vy(t) {
  let r, e, n = lr(
    /*filteredItems*/
    t[5]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = qu(Ju(t, n, i));
  return {
    c() {
      r = Me("div");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      this.h();
    },
    l(i) {
      r = Ne(i, "DIV", {
        class: !0,
        style: !0,
        role: !0,
        "aria-label": !0
      });
      var s = Ee(r);
      for (let a = 0; a < o.length; a += 1)
        o[a].l(s);
      s.forEach(k), this.h();
    },
    h() {
      g(r, "class", e = wt(
        "radio__group",
        Vo,
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
      K(i, r, s);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(r, null);
      t[48](r);
    },
    p(i, s) {
      if (s[0] & /*groupName, filteredItems, $valueVariable, isEnabled, onChange*/
      25169968 | s[1] & /*focusHandler, blurHandler*/
      6291456) {
        n = lr(
          /*filteredItems*/
          i[5]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Ju(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = qu(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s[0] & /*groupMods*/
      1024 && e !== (e = wt(
        "radio__group",
        Vo,
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
      i && k(r), _n(o, i), t[48](null);
    }
  };
}
function ky(t) {
  let r, e, n, o;
  const i = [by, my], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(l) {
      e && e.l(l), n = He();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (dr(), ne(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function jy(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p, m, h, y, w, D, z, B, ee, ue, M, q = E, ae = () => (q(), q = V(l, (Ue) => e(37, M = Ue)), l), A, F = E, P = () => (F(), F = V(w, (Ue) => e(38, A = Ue)), w), O, J = E, he = () => (J(), J = V(y, (Ue) => e(39, O = Ue)), y), fe, Ae = E, me = () => (Ae(), Ae = V(h, (Ue) => e(40, fe = Ue)), h), Ie, re = E, tt = () => (re(), re = V(m, (Ue) => e(41, Ie = Ue)), m), qe, Ke = E, ve = () => (Ke(), Ke = V(p, (Ue) => e(42, qe = Ue)), p), Te, pe = E, ce = () => (pe(), pe = V(_, (Ue) => e(43, Te = Ue)), _), be, x = E, ge = () => (x(), x = V(f, (Ue) => e(44, be = Ue)), f), oe, Se = E, Je = () => (Se(), Se = V(u, (Ue) => e(45, oe = Ue)), u), Ye, te = E, Re = () => (te(), te = V(c, (Ue) => e(46, Ye = Ue)), c), ze, at = E, ct = () => (at(), at = V(a, (Ue) => e(23, ze = Ue)), a);
  t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => J()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => x()), t.$$.on_destroy.push(() => Se()), t.$$.on_destroy.push(() => te()), t.$$.on_destroy.push(() => at());
  let { componentContext: nt } = r, { layoutParams: jt = void 0 } = r;
  const st = zr(xr), Bt = zr(Oo);
  let dt, Z, de = !1, ut = "", De = !0, N = "#129386", Vt = "rgba(0, 0, 0, 0.3)", pt = "", Dt, Nt, ot = "", Q = "vertical", It = 8;
  function zt() {
    e(4, De = !0), e(26, N = "#129386"), e(27, Vt = "rgba(0, 0, 0, 0.3)"), e(28, pt = ""), e(29, Dt = void 0), e(30, Nt = void 0), e(31, ot = ""), e(32, Q = "vertical"), e(33, It = 8);
  }
  function tr(Ue) {
    a.setValue(Ue);
  }
  cn(() => {
    dt && (st.unregisterFocusable(dt), e(25, dt = void 0));
  });
  const Xt = (Ue) => tr(Ue.value);
  function ye(Ue) {
    Pr[Ue ? "unshift" : "push"](() => {
      Z = Ue, e(2, Z);
    });
  }
  return t.$$set = (Ue) => {
    "componentContext" in Ue && e(0, nt = Ue.componentContext), "layoutParams" in Ue && e(1, jt = Ue.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(36, n = nt.origJson), t.$$.dirty[1] & /*origJson*/
    32 && n && zt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(34, o = nt.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(35, i = nt.json.options), t.$$.dirty[1] & /*items*/
    16 && e(5, s = Array.isArray(i) && i.filter((Ue) => typeof Ue.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8 && ct(e(7, a = o && (nt.getVariable(o, "string") || st.awaitGlobalVariable(o, "string", "")) || _o("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(22, l = nt.getDerivedFromVars(nt.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Re(e(21, c = nt.getDerivedFromVars(nt.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Je(e(20, u = nt.getDerivedFromVars(nt.json.selected_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(19, f = nt.getDerivedFromVars(nt.json.default_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(18, _ = nt.getDerivedFromVars(nt.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ve(e(17, p = nt.getDerivedFromVars(nt.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && tt(e(16, m = nt.getDerivedFromVars(nt.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(15, h = nt.getDerivedFromVars(nt.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(14, y = nt.getDerivedFromVars(nt.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && P(e(13, w = nt.getDerivedFromVars(nt.json.item_spacing))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || nt.logError(X(new Error('Empty "options" in "radio"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    72) {
      let Ue = !1;
      o ? (Bt.hasAction() || (M == null ? void 0 : M.mode) === "exclude") && (Ue = !0, nt.logError(X(new Error('Cannot show "radio" inside component with an action or inside accessibility mode=exclude')))) : (Ue = !0, nt.logError(X(new Error('Missing "value_variable" in "radio"')))), de !== Ue && e(3, de = Ue);
    }
    t.$$.dirty[0] & /*isEnabled*/
    16 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    32768 && e(4, De = an(Ye, De)), t.$$.dirty[0] & /*selectedColor*/
    67108864 | t.$$.dirty[1] & /*$jsonSelectedColor*/
    16384 && e(26, N = gr(oe, 1, N)), t.$$.dirty[0] & /*defaultColor*/
    134217728 | t.$$.dirty[1] & /*$jsonDefaultColor*/
    8192 && e(27, Vt = gr(be, 1, Vt)), t.$$.dirty[0] & /*textColor*/
    268435456 | t.$$.dirty[1] & /*$jsonTextColor*/
    4096 && e(28, pt = gr(Te, 1, pt)), t.$$.dirty[0] & /*fontSize*/
    536870912 | t.$$.dirty[1] & /*$jsonFontSize*/
    2048 && e(29, Dt = typeof qe == "number" && qe > 0 ? qe : Dt), t.$$.dirty[0] & /*fontWeight*/
    1073741824 | t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontFamily*/
    1536 && (e(30, Nt = ki(Ie, void 0, Nt)), fe && typeof fe == "string" ? e(31, ot = st.typefaceProvider(fe, { fontWeight: Nt || 400 })) : e(31, ot = "")), t.$$.dirty[1] & /*$jsonOrientation, orientation*/
    258 && e(32, Q = O === "horizontal" || O === "vertical" ? O : Q), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    132 && e(33, It = typeof A == "number" && A >= 0 ? A : It), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    64 && (M != null && M.description ? e(6, ut = ii(M)) : nt.logError(X(new Error('Missing accessibility "description" for radio'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext*/
    1 && e(12, D = nt.id || `radio_${Math.random().toString(36).slice(2)}`), t.$$.dirty[0] & /*isEnabled*/
    16 && e(11, z = { disabled: !De }), t.$$.dirty[1] & /*orientation*/
    2 && e(10, B = { [Q]: !0 }), t.$$.dirty[0] & /*selectedColor, defaultColor, textColor, fontSize, fontWeight*/
    2080374784 | t.$$.dirty[1] & /*fontFamily*/
    1 && e(9, ee = {
      "--divkit-radio-selected-color": N,
      "--divkit-radio-default-color": Vt,
      ...pt ? { "--divkit-radio-text-color": pt } : {},
      ...Dt ? { "font-size": _e(Dt) } : {},
      ...Nt ? { "font-weight": Nt } : {},
      ...ot ? { "font-family": ot } : {}
    }), t.$$.dirty[1] & /*itemSpacing*/
    4 && e(8, ue = `gap: ${_e(It)}`), t.$$.dirty[0] & /*container, componentContext, prevId*/
    33554437 && Z && nt.json && (dt && (st.unregisterFocusable(dt), e(25, dt = void 0)), nt.id && !nt.fakeElement && (e(25, dt = nt.id), st.registerFocusable(dt, {
      focus() {
        if (Z) {
          const Ue = Z.querySelector("input");
          Ue && Ue.focus();
        }
      }
    })));
  }, [
    nt,
    jt,
    Z,
    de,
    De,
    s,
    ut,
    a,
    ue,
    ee,
    B,
    z,
    D,
    w,
    y,
    h,
    m,
    p,
    _,
    f,
    u,
    c,
    l,
    ze,
    tr,
    dt,
    N,
    Vt,
    pt,
    Dt,
    Nt,
    ot,
    Q,
    It,
    o,
    i,
    n,
    M,
    A,
    O,
    fe,
    Ie,
    qe,
    Te,
    be,
    oe,
    Ye,
    Xt,
    ye
  ];
}
class Ey extends Hr {
  constructor(r) {
    super(), Rr(this, r, jy, ky, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Cy = "appkit-progress", Ay = "appkit-progress__linear", Vy = "appkit-progress__circular", ni = {
  progress: Cy,
  progress__linear: Ay,
  "progress__linear-fill": "appkit-progress__linear-fill",
  "progress__linear-fill_indeterminate": "appkit-progress__linear-fill_indeterminate",
  "progress-linear-indeterminate": "appkit-progress-linear-indeterminate",
  progress__circular: Vy,
  "progress__circular-track": "appkit-progress__circular-track",
  "progress__circular-fill": "appkit-progress__circular-fill",
  "progress__circular-fill_indeterminate": "appkit-progress__circular-fill_indeterminate",
  "progress-circular-indeterminate": "appkit-progress-circular-indeterminate"
};
function Sy(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Iy(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt("progress", ni, {}),
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
      $$slots: { default: [Ty] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Dy(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Qr("svg"), e = Qr("circle"), n = Qr("circle"), this.h();
    },
    l(s) {
      r = nn(s, "svg", {
        class: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        role: !0,
        "aria-valuenow": !0,
        "aria-valuemin": !0,
        "aria-valuemax": !0
      });
      var a = Ee(r);
      e = nn(a, "circle", {
        class: !0,
        cx: !0,
        cy: !0,
        r: !0,
        "stroke-width": !0
      }), Ee(e).forEach(k), n = nn(a, "circle", {
        class: !0,
        cx: !0,
        cy: !0,
        r: !0,
        "stroke-width": !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0,
        "stroke-linecap": !0
      }), Ee(n).forEach(k), a.forEach(k), this.h();
    },
    h() {
      g(e, "class", ni["progress__circular-track"]), g(e, "cx", ei / 2), g(e, "cy", ei / 2), g(e, "r", $l), g(
        e,
        "stroke-width",
        /*trackThickness*/
        t[5]
      ), g(n, "class", o = wt("progress__circular-fill", ni, {
        indeterminate: (
          /*isIndeterminate*/
          t[4]
        )
      })), g(n, "cx", ei / 2), g(n, "cy", ei / 2), g(n, "r", $l), g(
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
      )), g(n, "stroke-linecap", "round"), g(r, "class", ni.progress__circular), g(r, "width", ei), g(r, "height", ei), g(r, "viewBox", "0 0 " + ei + " " + ei), g(r, "role", "progressbar"), g(
        r,
        "aria-valuenow",
        /*ariaValue*/
        t[6]
      ), g(r, "aria-valuemin", 0), g(r, "aria-valuemax", 100);
    },
    m(s, a) {
      K(s, r, a), Et(r, e), Et(r, n);
    },
    p(s, a) {
      a & /*trackThickness*/
      32 && g(
        e,
        "stroke-width",
        /*trackThickness*/
        s[5]
      ), a & /*isIndeterminate*/
      16 && o !== (o = wt("progress__circular-fill", ni, {
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
      s && k(r);
    }
  };
}
function Fy(t) {
  let r, e, n;
  return {
    c() {
      r = Me("div"), e = Me("div"), this.h();
    },
    l(o) {
      r = Ne(o, "DIV", {
        class: !0,
        style: !0,
        role: !0,
        "aria-valuenow": !0,
        "aria-valuemin": !0,
        "aria-valuemax": !0
      });
      var i = Ee(r);
      e = Ne(i, "DIV", { class: !0, style: !0 }), Ee(e).forEach(k), i.forEach(k), this.h();
    },
    h() {
      g(e, "class", n = wt("progress__linear-fill", ni, {
        indeterminate: (
          /*isIndeterminate*/
          t[4]
        )
      })), T(
        e,
        "width",
        /*isIndeterminate*/
        t[4] ? "30%" : (
          /*progressValue*/
          t[2] * 100 + "%"
        )
      ), g(r, "class", ni.progress__linear), T(r, "height", _e(
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
      K(o, r, i), Et(r, e);
    },
    p(o, i) {
      i & /*isIndeterminate*/
      16 && n !== (n = wt("progress__linear-fill", ni, {
        indeterminate: (
          /*isIndeterminate*/
          o[4]
        )
      })) && g(e, "class", n), i & /*isIndeterminate, progressValue*/
      20 && T(
        e,
        "width",
        /*isIndeterminate*/
        o[4] ? "30%" : (
          /*progressValue*/
          o[2] * 100 + "%"
        )
      ), i & /*trackThickness*/
      32 && T(r, "height", _e(
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
      o && k(r);
    }
  };
}
function Ty(t) {
  let r;
  function e(i, s) {
    return (
      /*progressStyle*/
      i[3] === "linear" ? Fy : Dy
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = He();
    },
    l(i) {
      o.l(i), r = He();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function My(t) {
  let r, e, n, o;
  const i = [Iy, Sy], s = [];
  function a(l, c) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(l) {
      e && e.l(l), n = He();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, [c]) {
      e && e.p(l, c);
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
const ei = 48, $l = 20;
function Py(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p, m = E, h = () => (m(), m = V(c, (Te) => e(19, p = Te)), c), y, w = E, D = () => (w(), w = V(l, (Te) => e(20, y = Te)), l), z, B = E, ee = () => (B(), B = V(a, (Te) => e(21, z = Te)), a), ue, M = E, q = () => (M(), M = V(s, (Te) => e(22, ue = Te)), s), ae, A = E, F = () => (A(), A = V(i, (Te) => e(23, ae = Te)), i), P, O = E, J = () => (O(), O = V(o, (Te) => e(24, P = Te)), o);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => B()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => A()), t.$$.on_destroy.push(() => O());
  let { componentContext: he } = r, { layoutParams: fe = void 0 } = r;
  zr(xr);
  let Ae = 0, me = "linear", Ie = !1, re = "#129386", tt = "rgba(0, 0, 0, .1)", qe = 4;
  function Ke() {
    e(2, Ae = 0), e(3, me = "linear"), e(4, Ie = !1), e(16, re = "#129386"), e(17, tt = "rgba(0, 0, 0, .1)"), e(5, qe = 4);
  }
  const ve = 2 * Math.PI * $l;
  return t.$$set = (Te) => {
    "componentContext" in Te && e(0, he = Te.componentContext), "layoutParams" in Te && e(1, fe = Te.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(18, n = he.origJson), t.$$.dirty & /*origJson*/
    262144 && n && Ke(), t.$$.dirty & /*componentContext*/
    1 && J(e(14, o = he.getDerivedFromVars(he.json.value))), t.$$.dirty & /*componentContext*/
    1 && F(e(13, i = he.getDerivedFromVars(he.json.style))), t.$$.dirty & /*componentContext*/
    1 && q(e(12, s = he.getDerivedFromVars(he.json.is_indeterminate))), t.$$.dirty & /*componentContext*/
    1 && ee(e(11, a = he.getDerivedFromVars(he.json.active_color))), t.$$.dirty & /*componentContext*/
    1 && D(e(10, l = he.getDerivedFromVars(he.json.inactive_color))), t.$$.dirty & /*componentContext*/
    1 && h(e(9, c = he.getDerivedFromVars(he.json.track_thickness))), t.$$.dirty & /*$jsonValue, progressValue*/
    16777220 && e(2, Ae = typeof P == "number" ? Math.max(0, Math.min(1, P)) : Ae), t.$$.dirty & /*$jsonStyle, progressStyle*/
    8388616 && e(3, me = ae === "linear" || ae === "circular" ? ae : me), t.$$.dirty & /*$jsonIsIndeterminate, isIndeterminate*/
    4194320 && e(4, Ie = an(ue, Ie)), t.$$.dirty & /*$jsonActiveColor, activeColor*/
    2162688 && e(16, re = gr(z, 1, re)), t.$$.dirty & /*$jsonInactiveColor, inactiveColor*/
    1179648 && e(17, tt = gr(y, 1, tt)), t.$$.dirty & /*$jsonTrackThickness, trackThickness*/
    524320 && e(5, qe = typeof p == "number" && p >= 0 ? p : qe), t.$$.dirty & /*progressValue*/
    4 && e(8, u = ve * (1 - Ae)), t.$$.dirty & /*activeColor, inactiveColor*/
    196608 && e(7, f = {
      "--divkit-progress-active-color": re,
      "--divkit-progress-inactive-color": tt
    }), t.$$.dirty & /*isIndeterminate, progressValue*/
    20 && e(6, _ = Ie ? void 0 : Math.round(Ae * 100));
  }, [
    he,
    fe,
    Ae,
    me,
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
    ve,
    re,
    tt,
    n,
    p,
    y,
    z,
    ue,
    ae,
    P
  ];
}
class Ny extends Hr {
  constructor(r) {
    super(), Rr(this, r, Py, My, Fr, { componentContext: 0, layoutParams: 1 });
  }
}
const zy = "appkit-table", By = "appkit-table_halign_start", Oy = "appkit-table_halign_center", Ly = "appkit-table_halign_end", Ry = "appkit-table_valign_start", Hy = "appkit-table_valign_center", Wy = "appkit-table_valign_end", Uy = "appkit-table__cell", Gy = "appkit-table__cell_halign_left", Jy = "appkit-table__cell_halign_start", qy = "appkit-table__cell_halign_center", Ky = "appkit-table__cell_halign_right", Yy = "appkit-table__cell_halign_end", Xy = "appkit-table__cell_valign_top", Zy = "appkit-table__cell_valign_center", Qy = "appkit-table__cell_valign_bottom", xy = "appkit-table__cell_valign_baseline", $y = "appkit-table__separator", ew = "appkit-table__separator_row", tw = "appkit-table__separator_col", Yo = {
  table: zy,
  table_halign_start: By,
  table_halign_center: Oy,
  table_halign_end: Ly,
  table_valign_start: Ry,
  table_valign_center: Hy,
  table_valign_end: Wy,
  table__cell: Uy,
  table__cell_halign_left: Gy,
  table__cell_halign_start: Jy,
  table__cell_halign_center: qy,
  table__cell_halign_right: Ky,
  table__cell_halign_end: Yy,
  table__cell_valign_top: Xy,
  table__cell_valign_center: Zy,
  table__cell_valign_bottom: Qy,
  table__cell_valign_baseline: xy,
  table__separator: $y,
  table__separator_row: ew,
  table__separator_col: tw
};
function Ku(t, r, e) {
  const n = t.slice();
  return n[35] = r[e], n;
}
function Yu(t, r, e) {
  const n = t.slice();
  return n[38] = r[e], n;
}
function rw(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function nw(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt(
        "table",
        Yo,
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
      $$slots: { default: [ow] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = wt(
        "table",
        Yo,
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Xu(t) {
  var a, l, c, u, f, _, p, m;
  let r, e, n, o = `${/*placement*/
  ((l = (a = t[38].layoutParams.gridArea) == null ? void 0 : a.x) != null ? l : 0) + 1} / span ${/*placement*/
  (u = (c = t[38].layoutParams.gridArea) == null ? void 0 : c.colSpan) != null ? u : 1}`, i = `${/*placement*/
  ((_ = (f = t[38].layoutParams.gridArea) == null ? void 0 : f.y) != null ? _ : 0) + 1} / span ${/*placement*/
  (m = (p = t[38].layoutParams.gridArea) == null ? void 0 : p.rowSpan) != null ? m : 1}`, s;
  return e = new oo({
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
      r = Me("div"), Ut(e.$$.fragment), this.h();
    },
    l(h) {
      r = Ne(h, "DIV", { class: !0 });
      var y = Ee(r);
      Jt(e.$$.fragment, y), y.forEach(k), this.h();
    },
    h() {
      g(r, "class", n = wt("table__cell", Yo, {
        halign: (
          /*placement*/
          t[38].cellHAlign
        ),
        valign: (
          /*placement*/
          t[38].cellVAlign
        )
      })), T(r, "grid-column", o), T(r, "grid-row", i), T(
        r,
        "background",
        /*placement*/
        t[38].backgroundStyle || void 0
      );
    },
    m(h, y) {
      K(h, r, y), Lt(e, r, null), s = !0;
    },
    p(h, y) {
      var D, z, B, ee, ue, M, q, ae;
      const w = {};
      y[0] & /*cellPlacements*/
      16 && (w.componentContext = /*placement*/
      h[38].componentContext), y[0] & /*cellPlacements*/
      16 && (w.layoutParams = /*placement*/
      h[38].layoutParams), e.$set(w), (!s || y[0] & /*cellPlacements*/
      16 && n !== (n = wt("table__cell", Yo, {
        halign: (
          /*placement*/
          h[38].cellHAlign
        ),
        valign: (
          /*placement*/
          h[38].cellVAlign
        )
      }))) && g(r, "class", n), y[0] & /*cellPlacements*/
      16 && o !== (o = `${/*placement*/
      ((z = (D = h[38].layoutParams.gridArea) == null ? void 0 : D.x) != null ? z : 0) + 1} / span ${/*placement*/
      (ee = (B = h[38].layoutParams.gridArea) == null ? void 0 : B.colSpan) != null ? ee : 1}`) && T(r, "grid-column", o), y[0] & /*cellPlacements*/
      16 && i !== (i = `${/*placement*/
      ((M = (ue = h[38].layoutParams.gridArea) == null ? void 0 : ue.y) != null ? M : 0) + 1} / span ${/*placement*/
      (ae = (q = h[38].layoutParams.gridArea) == null ? void 0 : q.rowSpan) != null ? ae : 1}`) && T(r, "grid-row", i), y[0] & /*cellPlacements*/
      16 && T(
        r,
        "background",
        /*placement*/
        h[38].backgroundStyle || void 0
      );
    },
    i(h) {
      s || (U(e.$$.fragment, h), s = !0);
    },
    o(h) {
      ne(e.$$.fragment, h), s = !1;
    },
    d(h) {
      h && k(r), Rt(e);
    }
  };
}
function Zu(t) {
  let r, e, n, o;
  return {
    c() {
      r = Me("div"), e = Me("div"), o = br(), this.h();
    },
    l(i) {
      r = Ne(i, "DIV", { class: !0 });
      var s = Ee(r);
      e = Ne(s, "DIV", { class: !0 }), Ee(e).forEach(k), o = yr(s), s.forEach(k), this.h();
    },
    h() {
      g(e, "class", n = /*sep*/
      t[35].width ? Yo.table__separator_col : Yo.table__separator_row), T(
        e,
        "background",
        /*sep*/
        t[35].background
      ), T(
        e,
        "height",
        /*sep*/
        t[35].height || void 0
      ), T(
        e,
        "width",
        /*sep*/
        t[35].width || void 0
      ), g(r, "class", Yo.table__separator), T(
        r,
        "grid-column",
        /*sep*/
        t[35].gridColumn
      ), T(
        r,
        "grid-row",
        /*sep*/
        t[35].gridRow
      ), T(
        r,
        "margin-top",
        /*sep*/
        t[35].marginTop || void 0
      ), T(
        r,
        "margin-bottom",
        /*sep*/
        t[35].marginBottom || void 0
      ), T(
        r,
        "margin-left",
        /*sep*/
        t[35].marginLeft || void 0
      ), T(
        r,
        "margin-right",
        /*sep*/
        t[35].marginRight || void 0
      );
    },
    m(i, s) {
      K(i, r, s), Et(r, e), Et(r, o);
    },
    p(i, s) {
      s[0] & /*separatorElements*/
      32 && n !== (n = /*sep*/
      i[35].width ? Yo.table__separator_col : Yo.table__separator_row) && g(e, "class", n), s[0] & /*separatorElements*/
      32 && T(
        e,
        "background",
        /*sep*/
        i[35].background
      ), s[0] & /*separatorElements*/
      32 && T(
        e,
        "height",
        /*sep*/
        i[35].height || void 0
      ), s[0] & /*separatorElements*/
      32 && T(
        e,
        "width",
        /*sep*/
        i[35].width || void 0
      ), s[0] & /*separatorElements*/
      32 && T(
        r,
        "grid-column",
        /*sep*/
        i[35].gridColumn
      ), s[0] & /*separatorElements*/
      32 && T(
        r,
        "grid-row",
        /*sep*/
        i[35].gridRow
      ), s[0] & /*separatorElements*/
      32 && T(
        r,
        "margin-top",
        /*sep*/
        i[35].marginTop || void 0
      ), s[0] & /*separatorElements*/
      32 && T(
        r,
        "margin-bottom",
        /*sep*/
        i[35].marginBottom || void 0
      ), s[0] & /*separatorElements*/
      32 && T(
        r,
        "margin-left",
        /*sep*/
        i[35].marginLeft || void 0
      ), s[0] & /*separatorElements*/
      32 && T(
        r,
        "margin-right",
        /*sep*/
        i[35].marginRight || void 0
      );
    },
    d(i) {
      i && k(r);
    }
  };
}
function ow(t) {
  let r, e, n, o = lr(
    /*cellPlacements*/
    t[4]
  ), i = [];
  for (let c = 0; c < o.length; c += 1)
    i[c] = Xu(Yu(t, o, c));
  const s = (c) => ne(i[c], 1, 1, () => {
    i[c] = null;
  });
  let a = lr(
    /*separatorElements*/
    t[5]
  ), l = [];
  for (let c = 0; c < a.length; c += 1)
    l[c] = Zu(Ku(t, a, c));
  return {
    c() {
      for (let c = 0; c < i.length; c += 1)
        i[c].c();
      r = br();
      for (let c = 0; c < l.length; c += 1)
        l[c].c();
      e = He();
    },
    l(c) {
      for (let u = 0; u < i.length; u += 1)
        i[u].l(c);
      r = yr(c);
      for (let u = 0; u < l.length; u += 1)
        l[u].l(c);
      e = He();
    },
    m(c, u) {
      for (let f = 0; f < i.length; f += 1)
        i[f] && i[f].m(c, u);
      K(c, r, u);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(c, u);
      K(c, e, u), n = !0;
    },
    p(c, u) {
      if (u[0] & /*cellPlacements*/
      16) {
        o = lr(
          /*cellPlacements*/
          c[4]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const _ = Yu(c, o, f);
          i[f] ? (i[f].p(_, u), U(i[f], 1)) : (i[f] = Xu(_), i[f].c(), U(i[f], 1), i[f].m(r.parentNode, r));
        }
        for (dr(), f = o.length; f < i.length; f += 1)
          s(f);
        _r();
      }
      if (u[0] & /*separatorElements*/
      32) {
        a = lr(
          /*separatorElements*/
          c[5]
        );
        let f;
        for (f = 0; f < a.length; f += 1) {
          const _ = Ku(c, a, f);
          l[f] ? l[f].p(_, u) : (l[f] = Zu(_), l[f].c(), l[f].m(e.parentNode, e));
        }
        for (; f < l.length; f += 1)
          l[f].d(1);
        l.length = a.length;
      }
    },
    i(c) {
      if (!n) {
        for (let u = 0; u < o.length; u += 1)
          U(i[u]);
        n = !0;
      }
    },
    o(c) {
      i = i.filter(Boolean);
      for (let u = 0; u < i.length; u += 1)
        ne(i[u]);
      n = !1;
    },
    d(c) {
      c && (k(r), k(e)), _n(i, c), _n(l, c);
    }
  };
}
function iw(t) {
  let r, e, n, o;
  const i = [nw, rw], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(l) {
      e && e.l(l), n = He();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (dr(), ne(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function sw(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p, m, h = E, y = () => (h(), h = V(s, (ge) => e(22, m = ge)), s), w, D = E, z = () => (D(), D = V(i, (ge) => e(23, w = ge)), i), B, ee = E, ue = () => (ee(), ee = V(a, (ge) => e(24, B = ge)), a), M, q = E, ae = () => (q(), q = V(l, (ge) => e(25, M = ge)), l);
  t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => q());
  let { componentContext: A } = r, { layoutParams: F = void 0 } = r;
  const P = zr(xr), O = P.direction;
  Cn(t, O, (ge) => e(21, p = ge));
  let J = !1, he = "start", fe = "start", Ae = [], me, Ie = [], re = [], tt = "";
  function qe() {
    e(3, J = !1), e(13, he = "start"), e(14, fe = "start");
  }
  function Ke(ge) {
    var te, Re;
    if (!ge || !ge.style) return null;
    let oe = "#E0E0E0", Se = 1;
    const Je = ge.style;
    if (Je.type === "shape_drawable" && Je.shape) {
      const ze = Je.shape;
      oe = gr(ze.background_color || Je.color || "#E0E0E0"), ze.type === "rounded_rectangle" && (Se = Number(((te = ze.item_height) == null ? void 0 : te.value) || ((Re = ze.item_width) == null ? void 0 : Re.value) || 1));
    } else Je.color && (oe = gr(Je.color));
    const Ye = ge.margins || {};
    return {
      color: oe,
      thickness: Se,
      show_at_start: ge.show_at_start === 1 || ge.show_at_start === !0,
      show_between: ge.show_between !== 0 && ge.show_between !== !1,
      show_at_end: ge.show_at_end === 1 || ge.show_at_end === !0,
      marginTop: Number(Ye.top) || 0,
      marginBottom: Number(Ye.bottom) || 0,
      marginLeft: Number(Ye.left) || 0,
      marginRight: Number(Ye.right) || 0
    };
  }
  function ve(ge, oe) {
    const Se = ge.header_row;
    let Je = [];
    return ge.row_builder && Array.isArray(oe) ? Je = wl(oe, P, A, ge.row_builder).map((te) => te.div) : Array.isArray(ge.rows) && (Je = ge.rows), { rows: Je, headerRow: Se };
  }
  let Te = [];
  function pe(ge, oe) {
    Te = [];
    for (let Se = 0; Se < ge; Se++)
      Te[Se] = new Array(oe).fill(!1);
  }
  function ce(ge, oe, Se, Je) {
    var Ye;
    for (let te = ge; te < ge + Se && te < Te.length; te++)
      for (let Re = oe; Re < oe + Je && Re < (((Ye = Te[0]) == null ? void 0 : Ye.length) || 0); Re++)
        Te[te][Re] = !0;
  }
  function be(ge, oe) {
    var Je;
    if (ge >= Te.length) return oe;
    let Se = oe;
    for (; Se < (((Je = Te[0]) == null ? void 0 : Je.length) || 0) && Te[ge][Se]; )
      Se++;
    return Se;
  }
  function x(ge, oe, Se, Je, Ye, te, Re, ze, at, ct) {
    const nt = Array.isArray(ge.cells) ? ge.cells : [];
    let jt = 0;
    for (let st = 0; st < nt.length; st++) {
      const Bt = nt[st];
      if (!Bt || !Bt.div) continue;
      const dt = Math.max(1, Number(Bt.column_span) || 1), Z = Math.max(1, Number(Bt.row_span) || 1);
      jt = be(oe, jt), ce(oe, jt, Z, dt);
      const de = Array.isArray(Se) && Se[jt], ut = Bt.content_alignment_horizontal || de && de.content_alignment_horizontal || void 0, De = Bt.content_alignment_vertical || de && de.content_alignment_vertical || void 0;
      let N;
      const Vt = Bt.background || Je;
      if (Vt && Array.isArray(Vt) && Vt.length > 0) {
        const Nt = Vt[0];
        Nt && Nt.type === "solid" && Nt.color && (N = gr(Nt.color));
      }
      const pt = at.get(Bt.div);
      let Dt;
      pt ? (ct.delete(pt), Dt = pt) : Dt = A.produceChildContext(Bt.div, { path: `${te}_${st}` }), Re.push(Dt), ze.push({
        componentContext: Dt,
        layoutParams: {
          gridArea: {
            x: jt,
            y: oe,
            colSpan: dt,
            rowSpan: Z
          }
        },
        cellHAlign: ut,
        cellVAlign: De,
        backgroundStyle: N
      }), jt += dt;
    }
  }
  return cn(() => {
    Ae.forEach((ge) => {
      ge.destroy();
    });
  }), t.$$set = (ge) => {
    "componentContext" in ge && e(0, A = ge.componentContext), "layoutParams" in ge && e(1, F = ge.layoutParams);
  }, t.$$.update = () => {
    var ge, oe, Se;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(20, n = A.origJson), t.$$.dirty[0] & /*origJson*/
    1048576 && n && qe(), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, o = A.json.columns), t.$$.dirty[0] & /*componentContext*/
    1 && z(e(11, i = A.getDerivedFromVars(A.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && y(e(10, s = A.getDerivedFromVars(A.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(9, a = A.getDerivedFromVars(A.json.striped))), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(8, l = typeof ((ge = A.json.row_builder) == null ? void 0 : ge.data) == "string" ? A.getDerivedFromVars((oe = A.json.row_builder) == null ? void 0 : oe.data, void 0, !0) : (Se = A.json.row_builder) != null && Se.data ? Xo(A.json.row_builder.data) : void 0)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && (!Array.isArray(o) || o.length === 0 ? e(3, J = !0) : e(3, J = !1)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && e(17, c = Array.isArray(o) ? o.length : 0), t.$$.dirty[0] & /*jsonColumns*/
    524288)
      if (Array.isArray(o)) {
        const Je = [];
        for (let Ye = 0; Ye < o.length; Ye++) {
          const te = o[Ye], Re = te == null ? void 0 : te.width;
          if ((Re == null ? void 0 : Re.type) === "fixed" && Re.value)
            Je.push(_e(Number(Re.value)));
          else if ((Re == null ? void 0 : Re.type) === "match_parent") {
            const ze = Number(Re.weight || 1);
            Je.push(`${ze}fr`);
          } else
            Je.push("auto");
        }
        e(16, tt = Je.join(" "));
      } else
        e(16, tt = "");
    if (t.$$.dirty[0] & /*componentContext, $jsonRowBuilderData*/
    33554433 && e(18, u = ve(A.json, M)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonColumns, allRows, columnCount, $jsonStriped*/
    17727493) {
      const Je = new Set(Ae), Ye = /* @__PURE__ */ new Map();
      me === A && Ae.forEach((N) => {
        Ye.set(N.json, N);
      });
      const te = [], Re = [], ze = [];
      let at = 0;
      const ct = A.json, nt = Array.isArray(o) ? o : [], jt = !!(u.headerRow && Array.isArray(u.headerRow.cells)), st = u.rows.length, Bt = (jt ? 1 : 0) + st;
      pe(Bt + 10, c + 10);
      const dt = Ke(ct.row_separator), Z = Ke(ct.column_separator), de = Ke(ct.header_separator);
      jt && (x(u.headerRow, at, nt, u.headerRow.background || ct.header_background, void 0, -1, te, Re, Ye, Je), at++);
      const ut = u.rows;
      for (let N = 0; N < ut.length; N++) {
        const Vt = ut[N];
        if (!Vt || !Array.isArray(Vt.cells)) continue;
        let pt = Vt.background;
        !pt && B && (N % 2 === 0 ? pt = B.even_row_background : pt = B.odd_row_background), x(Vt, at, nt, pt, void 0, N, te, Re, Ye, Je), at++;
      }
      const De = at;
      if (de && jt && st > 0 && ze.push({
        gridColumn: `1 / span ${c}`,
        gridRow: "1 / span 1",
        background: de.color,
        height: _e(de.thickness),
        marginTop: de.marginTop ? _e(de.marginTop) : void 0,
        marginBottom: de.marginBottom ? _e(de.marginBottom) : void 0,
        marginLeft: de.marginLeft ? _e(de.marginLeft) : void 0,
        marginRight: de.marginRight ? _e(de.marginRight) : void 0
      }), dt) {
        const N = jt ? 1 : 0;
        if (dt.show_at_start && st > 0 && ze.push({
          gridColumn: `1 / span ${c}`,
          gridRow: `${N + 1} / span 1`,
          background: dt.color,
          height: _e(dt.thickness),
          marginTop: dt.marginTop ? _e(dt.marginTop) : void 0,
          marginBottom: dt.marginBottom ? _e(dt.marginBottom) : void 0,
          marginLeft: dt.marginLeft ? _e(dt.marginLeft) : void 0,
          marginRight: dt.marginRight ? _e(dt.marginRight) : void 0
        }), dt.show_between)
          for (let Vt = N; Vt < De - 1; Vt++)
            ze.push({
              gridColumn: `1 / span ${c}`,
              gridRow: `${Vt + 1} / span 1`,
              background: dt.color,
              height: _e(dt.thickness),
              marginTop: dt.marginTop ? _e(dt.marginTop) : void 0,
              marginBottom: dt.marginBottom ? _e(dt.marginBottom) : void 0,
              marginLeft: dt.marginLeft ? _e(dt.marginLeft) : void 0,
              marginRight: dt.marginRight ? _e(dt.marginRight) : void 0
            });
        dt.show_at_end && st > 0 && ze.push({
          gridColumn: `1 / span ${c}`,
          gridRow: `${De} / span 1`,
          background: dt.color,
          height: _e(dt.thickness),
          marginTop: dt.marginTop ? _e(dt.marginTop) : void 0,
          marginBottom: dt.marginBottom ? _e(dt.marginBottom) : void 0,
          marginLeft: dt.marginLeft ? _e(dt.marginLeft) : void 0,
          marginRight: dt.marginRight ? _e(dt.marginRight) : void 0
        });
      }
      if (Z && c > 0) {
        if (Z.show_at_start && ze.push({
          gridColumn: "1 / span 1",
          gridRow: `1 / span ${De}`,
          background: Z.color,
          width: _e(Z.thickness),
          marginTop: Z.marginTop ? _e(Z.marginTop) : void 0,
          marginBottom: Z.marginBottom ? _e(Z.marginBottom) : void 0,
          marginLeft: Z.marginLeft ? _e(Z.marginLeft) : void 0,
          marginRight: Z.marginRight ? _e(Z.marginRight) : void 0
        }), Z.show_between)
          for (let N = 0; N < c - 1; N++)
            ze.push({
              gridColumn: `${N + 1} / span 1`,
              gridRow: `1 / span ${De}`,
              background: Z.color,
              width: _e(Z.thickness),
              marginTop: Z.marginTop ? _e(Z.marginTop) : void 0,
              marginBottom: Z.marginBottom ? _e(Z.marginBottom) : void 0,
              marginLeft: Z.marginLeft ? _e(Z.marginLeft) : void 0,
              marginRight: Z.marginRight ? _e(Z.marginRight) : void 0
            });
        Z.show_at_end && ze.push({
          gridColumn: `${c} / span 1`,
          gridRow: `1 / span ${De}`,
          background: Z.color,
          width: _e(Z.thickness),
          marginTop: Z.marginTop ? _e(Z.marginTop) : void 0,
          marginBottom: Z.marginBottom ? _e(Z.marginBottom) : void 0,
          marginLeft: Z.marginLeft ? _e(Z.marginLeft) : void 0,
          marginRight: Z.marginRight ? _e(Z.marginRight) : void 0
        });
      }
      for (const N of Je)
        N.destroy();
      e(2, Ae = te), e(4, Ie = Re), e(5, re = ze), e(15, me = A);
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    8396800 && e(13, he = yl(w, he)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    6307840 && e(14, fe = bl(m, p, fe)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    24576 && e(7, f = {
      valign: he,
      halign: fe
    }), t.$$.dirty[0] & /*gridTemplateColumns*/
    65536 && e(6, _ = {
      "grid-template-columns": tt
    });
  }, [
    A,
    F,
    Ae,
    J,
    Ie,
    re,
    _,
    f,
    l,
    a,
    s,
    i,
    O,
    he,
    fe,
    me,
    tt,
    c,
    u,
    o,
    n,
    p,
    m,
    w,
    B,
    M
  ];
}
class lw extends Hr {
  constructor(r) {
    super(), Rr(this, r, sw, iw, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const aw = "appkit-counter", cw = "appkit-counter__container", uw = "appkit-counter__button", fw = "appkit-counter__value", dw = "appkit-counter_disabled", Bi = {
  counter: aw,
  counter__container: cw,
  counter__button: uw,
  counter__value: fw,
  counter_disabled: dw
};
function _w(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function hw(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt(
        "counter",
        Bi,
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
      $$slots: { default: [pw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = wt(
        "counter",
        Bi,
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function pw(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _, p, m, h, y;
  return {
    c() {
      r = Me("div"), e = Me("button"), n = Qr("svg"), o = Qr("line"), s = br(), a = Me("div"), l = Gn(
        /*value*/
        t[17]
      ), c = br(), u = Me("button"), f = Qr("svg"), _ = Qr("line"), p = Qr("line"), this.h();
    },
    l(w) {
      r = Ne(w, "DIV", { class: !0 });
      var D = Ee(r);
      e = Ne(D, "BUTTON", { class: !0, "aria-label": !0 });
      var z = Ee(e);
      n = nn(z, "svg", { viewBox: !0, fill: !0, xmlns: !0 });
      var B = Ee(n);
      o = nn(B, "line", {
        x1: !0,
        y1: !0,
        x2: !0,
        y2: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0
      }), Ee(o).forEach(k), B.forEach(k), z.forEach(k), s = yr(D), a = Ne(D, "DIV", { class: !0 });
      var ee = Ee(a);
      l = to(
        ee,
        /*value*/
        t[17]
      ), ee.forEach(k), c = yr(D), u = Ne(D, "BUTTON", { class: !0, "aria-label": !0 });
      var ue = Ee(u);
      f = nn(ue, "svg", { viewBox: !0, fill: !0, xmlns: !0 });
      var M = Ee(f);
      _ = nn(M, "line", {
        x1: !0,
        y1: !0,
        x2: !0,
        y2: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0
      }), Ee(_).forEach(k), p = nn(M, "line", {
        x1: !0,
        y1: !0,
        x2: !0,
        y2: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0
      }), Ee(p).forEach(k), M.forEach(k), ue.forEach(k), D.forEach(k), this.h();
    },
    h() {
      g(o, "x1", "6"), g(o, "y1", "12"), g(o, "x2", "18"), g(o, "y2", "12"), g(
        o,
        "stroke",
        /*iconColor*/
        t[6]
      ), g(o, "stroke-width", "2.5"), g(o, "stroke-linecap", "round"), g(n, "viewBox", "0 0 24 24"), g(n, "fill", "none"), g(n, "xmlns", "http://www.w3.org/2000/svg"), g(e, "class", Bi.counter__button), e.disabled = i = !/*isEnabled*/
      t[3] || /*value*/
      t[17] <= /*minValue*/
      t[11], g(e, "aria-label", "Decrease value"), T(
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
      ), T(e, "width", _e(
        /*buttonSize*/
        t[5]
      )), T(e, "height", _e(
        /*buttonSize*/
        t[5]
      )), g(a, "class", Bi.counter__value), T(a, "width", _e(
        /*valueWidth*/
        t[10]
      )), T(
        a,
        "color",
        /*textColor*/
        t[8]
      ), T(a, "font-size", _e(
        /*fontSize*/
        t[9]
      )), T(
        a,
        "font-weight",
        /*fontWeight*/
        t[13]
      ), g(_, "x1", "12"), g(_, "y1", "6"), g(_, "x2", "12"), g(_, "y2", "18"), g(
        _,
        "stroke",
        /*iconColor*/
        t[6]
      ), g(_, "stroke-width", "2.5"), g(_, "stroke-linecap", "round"), g(p, "x1", "6"), g(p, "y1", "12"), g(p, "x2", "18"), g(p, "y2", "12"), g(
        p,
        "stroke",
        /*iconColor*/
        t[6]
      ), g(p, "stroke-width", "2.5"), g(p, "stroke-linecap", "round"), g(f, "viewBox", "0 0 24 24"), g(f, "fill", "none"), g(f, "xmlns", "http://www.w3.org/2000/svg"), g(u, "class", Bi.counter__button), u.disabled = m = !/*isEnabled*/
      t[3] || /*value*/
      t[17] >= /*maxValue*/
      t[12], g(u, "aria-label", "Increase value"), T(
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
      ), T(u, "width", _e(
        /*buttonSize*/
        t[5]
      )), T(u, "height", _e(
        /*buttonSize*/
        t[5]
      )), g(r, "class", Bi.counter__container);
    },
    m(w, D) {
      K(w, r, D), Et(r, e), Et(e, n), Et(n, o), Et(r, s), Et(r, a), Et(a, l), Et(r, c), Et(r, u), Et(u, f), Et(f, _), Et(f, p), h || (y = [
        $e(
          e,
          "click",
          /*decrement*/
          t[36]
        ),
        $e(
          u,
          "click",
          /*increment*/
          t[35]
        )
      ], h = !0);
    },
    p(w, D) {
      D[0] & /*iconColor*/
      64 && g(
        o,
        "stroke",
        /*iconColor*/
        w[6]
      ), D[0] & /*isEnabled, value, minValue*/
      133128 && i !== (i = !/*isEnabled*/
      w[3] || /*value*/
      w[17] <= /*minValue*/
      w[11]) && (e.disabled = i), D[0] & /*value, minValue, disabledButtonColor, buttonColor*/
      133264 && T(
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
      ), D[0] & /*buttonSize*/
      32 && T(e, "width", _e(
        /*buttonSize*/
        w[5]
      )), D[0] & /*buttonSize*/
      32 && T(e, "height", _e(
        /*buttonSize*/
        w[5]
      )), D[0] & /*value*/
      131072 && ao(
        l,
        /*value*/
        w[17]
      ), D[0] & /*valueWidth*/
      1024 && T(a, "width", _e(
        /*valueWidth*/
        w[10]
      )), D[0] & /*textColor*/
      256 && T(
        a,
        "color",
        /*textColor*/
        w[8]
      ), D[0] & /*fontSize*/
      512 && T(a, "font-size", _e(
        /*fontSize*/
        w[9]
      )), D[0] & /*fontWeight*/
      8192 && T(
        a,
        "font-weight",
        /*fontWeight*/
        w[13]
      ), D[0] & /*iconColor*/
      64 && g(
        _,
        "stroke",
        /*iconColor*/
        w[6]
      ), D[0] & /*iconColor*/
      64 && g(
        p,
        "stroke",
        /*iconColor*/
        w[6]
      ), D[0] & /*isEnabled, value, maxValue*/
      135176 && m !== (m = !/*isEnabled*/
      w[3] || /*value*/
      w[17] >= /*maxValue*/
      w[12]) && (u.disabled = m), D[0] & /*value, maxValue, disabledButtonColor, buttonColor*/
      135312 && T(
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
      ), D[0] & /*buttonSize*/
      32 && T(u, "width", _e(
        /*buttonSize*/
        w[5]
      )), D[0] & /*buttonSize*/
      32 && T(u, "height", _e(
        /*buttonSize*/
        w[5]
      ));
    },
    d(w) {
      w && k(r), h = !1, Kr(y);
    }
  };
}
function gw(t) {
  let r, e, n, o;
  const i = [hw, _w], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[2] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(l) {
      e && e.l(l), n = He();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (dr(), ne(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function mw(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p, m, h, y, w, D, z, B, ee, ue, M, q, ae, A, F = E, P = () => (F(), F = V(i, (lt) => e(46, A = lt)), i), O, J = E, he = () => (J(), J = V(ue, (lt) => e(47, O = lt)), ue), fe, Ae = E, me = () => (Ae(), Ae = V(ee, (lt) => e(48, fe = lt)), ee), Ie, re = E, tt = () => (re(), re = V(B, (lt) => e(49, Ie = lt)), B), qe, Ke = E, ve = () => (Ke(), Ke = V(z, (lt) => e(50, qe = lt)), z), Te, pe = E, ce = () => (pe(), pe = V(D, (lt) => e(51, Te = lt)), D), be, x = E, ge = () => (x(), x = V(w, (lt) => e(52, be = lt)), w), oe, Se = E, Je = () => (Se(), Se = V(y, (lt) => e(53, oe = lt)), y), Ye, te = E, Re = () => (te(), te = V(h, (lt) => e(54, Ye = lt)), h), ze, at = E, ct = () => (at(), at = V(m, (lt) => e(55, ze = lt)), m), nt, jt = E, st = () => (jt(), jt = V(p, (lt) => e(56, nt = lt)), p), Bt, dt = E, Z = () => (dt(), dt = V(_, (lt) => e(57, Bt = lt)), _), de, ut = E, De = () => (ut(), ut = V(f, (lt) => e(58, de = lt)), f), N, Vt = E, pt = () => (Vt(), Vt = V(u, (lt) => e(59, N = lt)), u), Dt, Nt = E, ot = () => (Nt(), Nt = V(c, (lt) => e(60, Dt = lt)), c), Q, It = E, zt = () => (It(), It = V(l, (lt) => e(61, Q = lt)), l), tr, Xt = E, ye = () => (Xt(), Xt = V(a, (lt) => e(62, tr = lt)), a), Ue, mt = E, ke = () => (mt(), mt = V(s, (lt) => e(63, Ue = lt)), s);
  t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => J()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => x()), t.$$.on_destroy.push(() => Se()), t.$$.on_destroy.push(() => te()), t.$$.on_destroy.push(() => at()), t.$$.on_destroy.push(() => jt()), t.$$.on_destroy.push(() => dt()), t.$$.on_destroy.push(() => ut()), t.$$.on_destroy.push(() => Vt()), t.$$.on_destroy.push(() => Nt()), t.$$.on_destroy.push(() => It()), t.$$.on_destroy.push(() => Xt()), t.$$.on_destroy.push(() => mt());
  let { componentContext: rt } = r, { layoutParams: We = void 0 } = r;
  const nr = zr(xr), Le = zr(Oo);
  let kt = !1, Tt = !0, Mt = "#4CAF50", hr = 36, Be = "#ffffff", Ct = "#cccccc", sr = "#1B2630", rr = 16, $t = 700, mr = 40, Ar = "#F5F5F5", Ot = "#E0E0E0", Er = 1, Y = 999, gt = 6, Kt = 0, At = 99, Cr = 1;
  const Tr = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  };
  function wr() {
    e(3, Tt = !0), e(4, Mt = "#4CAF50"), e(5, hr = 36), e(6, Be = "#ffffff"), e(7, Ct = "#cccccc"), e(8, sr = "#1B2630"), e(9, rr = 16), e(13, $t = 700), e(10, mr = 40), e(37, Ar = "#F5F5F5"), e(38, Ot = "#E0E0E0"), e(39, Er = 1), e(40, Y = 999), e(41, gt = 6), e(11, Kt = 0), e(12, At = 99), e(42, Cr = 1);
  }
  function Nr() {
    if (!Tt) return;
    const lt = Math.min(M + Cr, At);
    lt !== M && (i.setValue(lt), rt.json.on_increment_actions && rt.execAnyActions(rt.json.on_increment_actions), rt.json.on_value_change_actions && rt.execAnyActions(rt.json.on_value_change_actions));
  }
  function Yr() {
    if (!Tt) return;
    const lt = Math.max(M - Cr, Kt);
    lt !== M && (i.setValue(lt), rt.json.on_decrement_actions && rt.execAnyActions(rt.json.on_decrement_actions), rt.json.on_value_change_actions && rt.execAnyActions(rt.json.on_value_change_actions));
  }
  let or;
  return cn(() => {
    or && (nr.unregisterFocusable(or), e(43, or = void 0));
  }), t.$$set = (lt) => {
    "componentContext" in lt && e(0, rt = lt.componentContext), "layoutParams" in lt && e(1, We = lt.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(45, n = rt.origJson), t.$$.dirty[1] & /*origJson*/
    16384 && n && wr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(44, o = rt.json.counter_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8192 && P(e(16, i = o && (rt.getVariable(o, "integer") || nr.awaitGlobalVariable(o, "integer", 0)) || _o("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && ke(e(34, s = rt.getDerivedFromVars(rt.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && ye(e(33, a = rt.getDerivedFromVars(rt.json.button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && zt(e(32, l = rt.getDerivedFromVars(rt.json.button_size))), t.$$.dirty[0] & /*componentContext*/
    1 && ot(e(31, c = rt.getDerivedFromVars(rt.json.icon_color))), t.$$.dirty[0] & /*componentContext*/
    1 && pt(e(30, u = rt.getDerivedFromVars(rt.json.disabled_button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(29, f = rt.getDerivedFromVars(rt.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Z(e(28, _ = rt.getDerivedFromVars(rt.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(27, p = rt.getDerivedFromVars(rt.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(26, m = rt.getDerivedFromVars(rt.json.value_width))), t.$$.dirty[0] & /*componentContext*/
    1 && Re(e(25, h = rt.getDerivedFromVars(rt.json.background_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Je(e(24, y = rt.getDerivedFromVars(rt.json.border_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(23, w = rt.getDerivedFromVars(rt.json.border_width))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(22, D = rt.getDerivedFromVars(rt.json.corner_radius))), t.$$.dirty[0] & /*componentContext*/
    1 && ve(e(21, z = rt.getDerivedFromVars(rt.json.padding))), t.$$.dirty[0] & /*componentContext*/
    1 && tt(e(20, B = rt.getDerivedFromVars(rt.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(19, ee = rt.getDerivedFromVars(rt.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(18, ue = rt.getDerivedFromVars(rt.json.step))), t.$$.dirty[0] & /*isEnabled*/
    8 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    2 && e(3, Tt = an(Ue, Tt)), t.$$.dirty[0] & /*buttonColor*/
    16 | t.$$.dirty[2] & /*$jsonButtonColor*/
    1 && e(4, Mt = gr(tr, 1, Mt)), t.$$.dirty[0] & /*buttonSize*/
    32 | t.$$.dirty[1] & /*$jsonButtonSize*/
    1073741824 && e(5, hr = fo(Q, hr)), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*$jsonIconColor*/
    536870912 && e(6, Be = gr(Dt, 1, Be)), t.$$.dirty[0] & /*disabledButtonColor*/
    128 | t.$$.dirty[1] & /*$jsonDisabledButtonColor*/
    268435456 && e(7, Ct = gr(N, 1, Ct)), t.$$.dirty[0] & /*textColor*/
    256 | t.$$.dirty[1] & /*$jsonTextColor*/
    134217728 && e(8, sr = gr(de, 1, sr)), t.$$.dirty[0] & /*fontSize*/
    512 | t.$$.dirty[1] & /*$jsonFontSize*/
    67108864 && e(9, rr = fo(Bt, rr)), t.$$.dirty[1] & /*$jsonFontWeight*/
    33554432) {
      const lt = nt;
      if (typeof lt == "string")
        if (lt in Tr)
          e(13, $t = Tr[lt]);
        else {
          const St = parseInt(lt, 10);
          !Number.isNaN(St) && St > 0 && e(13, $t = St);
        }
      else typeof lt == "number" && lt > 0 && e(13, $t = lt);
    }
    if (t.$$.dirty[0] & /*valueWidth*/
    1024 | t.$$.dirty[1] & /*$jsonValueWidth*/
    16777216 && e(10, mr = fo(ze, mr)), t.$$.dirty[1] & /*$jsonBackgroundColor, backgroundColor*/
    8388672 && e(37, Ar = gr(Ye, 1, Ar)), t.$$.dirty[1] & /*$jsonBorderColor, borderColor*/
    4194432 && e(38, Ot = gr(oe, 1, Ot)), t.$$.dirty[1] & /*$jsonBorderWidth, borderWidth*/
    2097408 && e(39, Er = fo(be, Er)), t.$$.dirty[1] & /*$jsonCornerRadius, cornerRadius*/
    1049088 && e(40, Y = fo(Te, Y)), t.$$.dirty[1] & /*$jsonPadding, padding*/
    525312 && e(41, gt = fo(qe, gt)), t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$jsonMinValue, $jsonMaxValue*/
    393216 && (e(11, Kt = fo(Ie, Kt)), e(12, At = fo(fe, At))), t.$$.dirty[1] & /*$jsonStep, step*/
    67584) {
      const lt = fo(O, Cr);
      lt > 0 && e(42, Cr = lt);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$valueVariable*/
    32768 && e(17, M = No(A || 0, Kt, At)), t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*variable*/
    8192) {
      let lt = !1;
      o ? Le.hasAction() && (lt = !0, rt.logError(X(new Error('Cannot show "counter" inside component with an action')))) : (lt = !0, rt.logError(X(new Error('Missing "counter_value_variable" in "counter"')))), kt !== lt && e(2, kt = lt);
    }
    t.$$.dirty[0] & /*isEnabled*/
    8 && e(15, q = { disabled: !Tt }), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*backgroundColor, borderColor, borderWidth, cornerRadius, padding*/
    1984 && e(14, ae = {
      "--divkit-counter-bg": Ar,
      "--divkit-counter-border-color": Ot,
      "--divkit-counter-border-width": _e(Er),
      "--divkit-counter-radius": _e(Y),
      "--divkit-counter-padding": _e(gt),
      "--divkit-counter-icon-color": Be
    }), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*prevId*/
    4096 && rt.json && (or && (nr.unregisterFocusable(or), e(43, or = void 0)), rt.id && !rt.fakeElement && (e(43, or = rt.id), nr.registerFocusable(or, {
      focus() {
      }
    })));
  }, [
    rt,
    We,
    kt,
    Tt,
    Mt,
    hr,
    Be,
    Ct,
    sr,
    rr,
    mr,
    Kt,
    At,
    $t,
    ae,
    q,
    i,
    M,
    ue,
    ee,
    B,
    z,
    D,
    w,
    y,
    h,
    m,
    p,
    _,
    f,
    u,
    c,
    l,
    a,
    s,
    Nr,
    Yr,
    Ar,
    Ot,
    Er,
    Y,
    gt,
    Cr,
    or,
    o,
    n,
    A,
    O,
    fe,
    Ie,
    qe,
    Te,
    be,
    oe,
    Ye,
    ze,
    nt,
    Bt,
    de,
    N,
    Dt,
    Q,
    tr,
    Ue
  ];
}
class bw extends Hr {
  constructor(r) {
    super(), Rr(this, r, mw, gw, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const yw = "appkit-webview__frame", el = {
  webview__frame: yw,
  "webview__aspect-wrapper": "appkit-webview__aspect-wrapper"
};
function ww(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function vw(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt("webview", el, {}),
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
      $$slots: { default: [Ew] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function kw(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Me("iframe"), this.h();
    },
    l(a) {
      r = Ne(a, "IFRAME", {
        class: !0,
        src: !0,
        srcdoc: !0,
        sandbox: !0,
        scrolling: !0,
        title: !0
      }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", el.webview__frame), eo(r.src, e = /*url*/
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
      K(a, r, l), i || (s = [
        $e(
          r,
          "load",
          /*onLoad*/
          t[15]
        ),
        $e(
          r,
          "error",
          /*onError*/
          t[16]
        )
      ], i = !0);
    },
    p(a, l) {
      l & /*url*/
      4 && !eo(r.src, e = /*url*/
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
      a && k(r), i = !1, Kr(s);
    }
  };
}
function jw(t) {
  let r, e, n, o, i, s = `${/*aspectPaddingBottom*/
  t[6]}%`, a, l;
  return {
    c() {
      r = Me("div"), e = Me("iframe"), this.h();
    },
    l(c) {
      r = Ne(c, "DIV", { class: !0 });
      var u = Ee(r);
      e = Ne(u, "IFRAME", {
        class: !0,
        src: !0,
        srcdoc: !0,
        sandbox: !0,
        scrolling: !0,
        title: !0
      }), Ee(e).forEach(k), u.forEach(k), this.h();
    },
    h() {
      g(e, "class", el.webview__frame), eo(e.src, n = /*url*/
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
      t[4] ? "auto" : "no"), g(e, "title", "webview"), g(r, "class", el["webview__aspect-wrapper"]), T(r, "padding-bottom", s);
    },
    m(c, u) {
      K(c, r, u), Et(r, e), a || (l = [
        $e(
          e,
          "load",
          /*onLoad*/
          t[15]
        ),
        $e(
          e,
          "error",
          /*onError*/
          t[16]
        )
      ], a = !0);
    },
    p(c, u) {
      u & /*url*/
      4 && !eo(e.src, n = /*url*/
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
      c[6]}%`) && T(r, "padding-bottom", s);
    },
    d(c) {
      c && k(r), a = !1, Kr(l);
    }
  };
}
function Ew(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[6] !== "0" ? jw : kw
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = He();
    },
    l(i) {
      o.l(i), r = He();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function Cw(t) {
  let r, e, n, o;
  const i = [vw, ww], s = [];
  function a(l, c) {
    return (
      /*hasError*/
      l[5] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(l) {
      e && e.l(l), n = He();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, [c]) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (dr(), ne(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Aw(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _ = E, p = () => (_(), _ = V(c, (be) => e(20, f = be)), c), m, h = E, y = () => (h(), h = V(l, (be) => e(21, m = be)), l), w, D = E, z = () => (D(), D = V(a, (be) => e(22, w = be)), a), B, ee = E, ue = () => (ee(), ee = V(s, (be) => e(23, B = be)), s), M, q = E, ae = () => (q(), q = V(i, (be) => e(24, M = be)), i), A, F = E, P = () => (F(), F = V(o, (be) => e(25, A = be)), o), O, J = E, he = () => (J(), J = V(n, (be) => e(26, O = be)), n);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => J());
  let { componentContext: fe } = r, { layoutParams: Ae = void 0 } = r;
  zr(xr);
  let me = !1, Ie, re, tt = !1, qe = !0, Ke = !1, ve = !1, Te = "0";
  function pe() {
    fe.execAnyActions(fe.json.on_load_actions);
  }
  function ce() {
    fe.execAnyActions(fe.json.on_error_actions);
  }
  return t.$$set = (be) => {
    "componentContext" in be && e(0, fe = be.componentContext), "layoutParams" in be && e(1, Ae = be.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext*/
    1 && he(e(14, n = fe.getDerivedFromVars(fe.json.url))), t.$$.dirty & /*componentContext*/
    1 && P(e(13, o = fe.getDerivedFromVars(fe.json.html))), t.$$.dirty & /*componentContext*/
    1 && ae(e(12, i = fe.getDerivedFromVars(fe.json.javascript_enabled))), t.$$.dirty & /*componentContext*/
    1 && ue(e(11, s = fe.getDerivedFromVars(fe.json.allow_scrolling))), t.$$.dirty & /*componentContext*/
    1 && z(e(10, a = fe.getDerivedFromVars(fe.json.allow_navigation))), t.$$.dirty & /*componentContext*/
    1 && y(e(9, l = fe.getDerivedFromVars(fe.json.scale_to_fit))), t.$$.dirty & /*componentContext*/
    1 && p(e(8, c = fe.getDerivedFromVars(fe.json.aspect))), t.$$.dirty & /*$jsonUrl, $jsonHtml, url, html, componentContext*/
    100663309 && (e(2, Ie = typeof O == "string" ? O : void 0), e(3, re = typeof A == "string" ? A : void 0), !Ie && !re ? (e(5, me = !0), fe.logError(X(new Error('Missing "url" or "html" in "webview"')))) : e(5, me = !1)), t.$$.dirty & /*$jsonJsEnabled, javascriptEnabled*/
    16908288 && e(17, tt = an(M, tt)), t.$$.dirty & /*$jsonAllowScrolling, allowScrolling*/
    8388624 && e(4, qe = an(B, qe)), t.$$.dirty & /*$jsonAllowNavigation, allowNavigation*/
    4456448 && e(18, Ke = an(w, Ke)), t.$$.dirty & /*$jsonScaleToFit, scaleToFit*/
    2621440 && e(19, ve = an(m, ve)), t.$$.dirty & /*$jsonAspect*/
    1048576) {
      const be = f == null ? void 0 : f.ratio;
      be && Rn(be) ? e(6, Te = (100 / Number(be)).toFixed(2)) : e(6, Te = "0");
    }
    t.$$.dirty & /*javascriptEnabled, allowNavigation*/
    393216 && e(7, u = [
      "allow-same-origin",
      ...tt ? ["allow-scripts"] : [],
      ...Ke ? ["allow-popups"] : []
    ].join(" "));
  }, [
    fe,
    Ae,
    Ie,
    re,
    qe,
    me,
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
    ce,
    tt,
    Ke,
    ve,
    f,
    m,
    w,
    B,
    M,
    A,
    O
  ];
}
class Vw extends Hr {
  constructor(r) {
    super(), Rr(this, r, Aw, Cw, Fr, { componentContext: 0, layoutParams: 1 });
  }
}
const tl = {
  "google-map__frame": "appkit-google-map__frame",
  "google-map__aspect-wrapper": "appkit-google-map__aspect-wrapper"
};
function Sw(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Iw(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt("google-map", tl, {}),
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
      $$slots: { default: [Tw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Dw(t) {
  let r;
  return {
    c() {
      r = Me("iframe"), this.h();
    },
    l(e) {
      r = Ne(e, "IFRAME", {
        class: !0,
        srcdoc: !0,
        title: !0,
        sandbox: !0
      }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", tl["google-map__frame"]), g(
        r,
        "srcdoc",
        /*iframeDoc*/
        t[4]
      ), g(r, "title", "Google Map"), g(r, "sandbox", "allow-scripts allow-same-origin");
    },
    m(e, n) {
      K(e, r, n), t[35](r);
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
      e && k(r), t[35](null);
    }
  };
}
function Fw(t) {
  let r, e, n = `${/*aspectPaddingBottom*/
  t[3]}%`;
  return {
    c() {
      r = Me("div"), e = Me("iframe"), this.h();
    },
    l(o) {
      r = Ne(o, "DIV", { class: !0 });
      var i = Ee(r);
      e = Ne(i, "IFRAME", {
        class: !0,
        srcdoc: !0,
        title: !0,
        sandbox: !0
      }), Ee(e).forEach(k), i.forEach(k), this.h();
    },
    h() {
      g(e, "class", tl["google-map__frame"]), g(
        e,
        "srcdoc",
        /*iframeDoc*/
        t[4]
      ), g(e, "title", "Google Map"), g(e, "sandbox", "allow-scripts allow-same-origin"), g(r, "class", tl["google-map__aspect-wrapper"]), T(r, "padding-bottom", n);
    },
    m(o, i) {
      K(o, r, i), Et(r, e), t[34](e);
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
      o[3]}%`) && T(r, "padding-bottom", n);
    },
    d(o) {
      o && k(r), t[34](null);
    }
  };
}
function Tw(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[3] !== "0" ? Fw : Dw
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = He();
    },
    l(i) {
      o.l(i), r = He();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function Mw(t) {
  let r, e, n, o;
  const i = [Iw, Sw], s = [];
  function a(l, c) {
    return !/*hasError*/
    l[2] && /*iframeDoc*/
    l[4] ? 0 : -1;
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(l) {
      e && e.l(l), n = He();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, c) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (dr(), ne(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function ea(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Pw(t) {
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
function Nw(t) {
  return t.map((r, e) => {
    const n = Number(r.latitude) || 0, o = Number(r.longitude) || 0, i = r.title ? ea(String(r.title)) : "", s = r.color ? String(r.color) : "", a = r.on_click_actions && r.on_click_actions.length > 0;
    let l = "";
    s && (l = `,icon:{path:google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,fillColor:'${ea(s)}',fillOpacity:1,strokeColor:'#333',strokeWeight:1,scale:6,anchor:new google.maps.Point(0,0)}`);
    const c = a ? `m.addListener('click',function(){window.parent.postMessage({type:'marker_click',index:${e}},'*');});` : "";
    return `(function(){var m=new google.maps.Marker({position:{lat:${n},lng:${o}},map:map,title:'${i}'${l}});${c}})();`;
  }).join(`
`);
}
function zw(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p, m = E, h = () => (m(), m = V(_, (Z) => e(24, p = Z)), _), y, w = E, D = () => (w(), w = V(l, (Z) => e(25, y = Z)), l), z, B = E, ee = () => (B(), B = V(a, (Z) => e(26, z = Z)), a), ue, M = E, q = () => (M(), M = V(f, (Z) => e(27, ue = Z)), f), ae, A = E, F = () => (A(), A = V(c, (Z) => e(28, ae = Z)), c), P, O = E, J = () => (O(), O = V(u, (Z) => e(29, P = Z)), u), he, fe = E, Ae = () => (fe(), fe = V(s, (Z) => e(30, he = Z)), s), me, Ie = E, re = () => (Ie(), Ie = V(i, (Z) => e(31, me = Z)), i), tt, qe = E, Ke = () => (qe(), qe = V(o, (Z) => e(32, tt = Z)), o), ve, Te = E, pe = () => (Te(), Te = V(n, (Z) => e(33, ve = Z)), n);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => B()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => A()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => Ie()), t.$$.on_destroy.push(() => qe()), t.$$.on_destroy.push(() => Te());
  let { componentContext: ce } = r, { layoutParams: be = void 0 } = r;
  zr(xr);
  let x = !1, ge = "0", oe = 0, Se = 0, Je = 10, Ye = "normal", te = !0, Re = !0, ze, at = [], ct = "", nt, jt = !1;
  function st(Z) {
    if (!nt || Z.source !== nt.contentWindow) return;
    const de = Z.data;
    if (!(!de || typeof de != "object")) {
      if (de.type === "map_ready" && !jt)
        jt = !0, ce.execAnyActions(ce.json.on_ready_actions);
      else if (de.type === "map_error")
        ce.execAnyActions(ce.json.on_error_actions);
      else if (de.type === "marker_click" && typeof de.index == "number") {
        const ut = at[de.index];
        ut != null && ut.on_click_actions && ce.execAnyActions(ut.on_click_actions);
      }
    }
  }
  no(() => {
    window.addEventListener("message", st);
  }), cn(() => {
    window.removeEventListener("message", st);
  });
  function Bt(Z) {
    Pr[Z ? "unshift" : "push"](() => {
      nt = Z, e(5, nt);
    });
  }
  function dt(Z) {
    Pr[Z ? "unshift" : "push"](() => {
      nt = Z, e(5, nt);
    });
  }
  return t.$$set = (Z) => {
    "componentContext" in Z && e(0, ce = Z.componentContext), "layoutParams" in Z && e(1, be = Z.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(15, n = ce.getDerivedFromVars(ce.json.latitude))), t.$$.dirty[0] & /*componentContext*/
    1 && Ke(e(14, o = ce.getDerivedFromVars(ce.json.longitude))), t.$$.dirty[0] & /*componentContext*/
    1 && re(e(13, i = ce.getDerivedFromVars(ce.json.zoom))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(12, s = ce.getDerivedFromVars(ce.json.map_type))), t.$$.dirty[0] & /*componentContext*/
    1 && ee(e(11, a = ce.getDerivedFromVars(ce.json.allow_zoom))), t.$$.dirty[0] & /*componentContext*/
    1 && D(e(10, l = ce.getDerivedFromVars(ce.json.allow_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && F(e(9, c = ce.getDerivedFromVars(ce.json.api_key))), t.$$.dirty[0] & /*componentContext*/
    1 && J(e(8, u = ce.getDerivedFromVars(ce.json.api_key_web))), t.$$.dirty[0] & /*componentContext*/
    1 && q(e(7, f = ce.getDerivedFromVars(ce.json.markers))), t.$$.dirty[0] & /*componentContext*/
    1 && h(e(6, _ = ce.getDerivedFromVars(ce.json.aspect))), t.$$.dirty[0] & /*$jsonMapType, $jsonApiKeyWeb, $jsonApiKey, $jsonMarkers, resolvedApiKey, componentContext*/
    2017460225 | t.$$.dirty[1] & /*$jsonLatitude, $jsonLongitude, $jsonZoom*/
    7) {
      e(16, oe = typeof ve == "number" ? ve : 0), e(17, Se = typeof tt == "number" ? tt : 0), e(18, Je = typeof me == "number" ? me : 10), e(19, Ye = typeof he == "string" ? he : "normal");
      const Z = P, de = ae;
      e(22, ze = typeof Z == "string" ? Z : typeof de == "string" ? de : void 0), e(23, at = Array.isArray(ue) ? ue : []), ze ? e(2, x = !1) : (e(2, x = !0), ce.logError(X(new Error('Missing "api_key" or "api_key_web" in "google_map"'))));
    }
    if (t.$$.dirty[0] & /*$jsonAllowZoom, allowZoom*/
    68157440 && e(20, te = an(z, te)), t.$$.dirty[0] & /*$jsonAllowScroll, allowScroll*/
    35651584 && e(21, Re = an(y, Re)), t.$$.dirty[0] & /*$jsonAspect*/
    16777216) {
      const Z = p == null ? void 0 : p.ratio;
      Z && Rn(Z) ? e(3, ge = (100 / Number(Z)).toFixed(2)) : e(3, ge = "0");
    }
    if (t.$$.dirty[0] & /*resolvedApiKey, resolvedMarkers, mapType, allowScroll, allowZoom, latitude, longitude, zoom*/
    16711680)
      if (ze) {
        const Z = Nw(at), de = Pw(Ye), ut = Re || te ? "auto" : "none";
        e(4, ct = `<!DOCTYPE html>
<html><head>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>html,body,#map{width:100%;height:100%;margin:0;padding:0;}</style>
</head><body>
<div id="map"></div>
<script>
function initMap(){
var map=new google.maps.Map(document.getElementById('map'),{
center:{lat:${oe},lng:${Se}},
zoom:${Math.round(Je)},
mapTypeId:'${de}',
gestureHandling:'${ut}',
zoomControl:${te},
scrollwheel:${Re},
draggable:${Re},
fullscreenControl:false,
streetViewControl:false
});
${Z}
google.maps.event.addListenerOnce(map,'idle',function(){
window.parent.postMessage({type:'map_ready'},'*');
});
}
<\/script>
<script src="https://maps.googleapis.com/maps/api/js?key=${ea(ze)}&callback=initMap" async defer
onerror="window.parent.postMessage({type:'map_error'},'*')"><\/script>
</body></html>`);
      } else
        e(4, ct = "");
  }, [
    ce,
    be,
    x,
    ge,
    ct,
    nt,
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
    oe,
    Se,
    Je,
    Ye,
    te,
    Re,
    ze,
    at,
    p,
    y,
    z,
    ue,
    ae,
    P,
    he,
    me,
    tt,
    ve,
    Bt,
    dt
  ];
}
class Bw extends Hr {
  constructor(r) {
    super(), Rr(this, r, zw, Mw, Fr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
function Qu(t, r, e) {
  const n = t.slice();
  return n[11] = r[e], n;
}
function Ow(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Lw(t) {
  let r, e;
  return r = new vn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: { default: [Rw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function xu(t) {
  let r, e, n = [
    /*templateAttrs*/
    t[8]
  ], o = {};
  for (let i = 0; i < n.length; i += 1)
    o = Io(o, n[i]);
  return {
    c() {
      r = Me("template"), e = new Li(!1), this.h();
    },
    l(i) {
      r = Ne(i, "TEMPLATE", {});
      var s = Ee(r.content);
      e = ga(s, !1), s.forEach(k), this.h();
    },
    h() {
      e.a = null, Zo(r, o);
    },
    m(i, s) {
      K(i, r, s), e.m(
        /*templateContent*/
        t[7],
        r.content
      );
    },
    p(i, s) {
      s & /*templateContent*/
      128 && e.p(
        /*templateContent*/
        i[7]
      ), Zo(r, o = Ho(n, [s & /*templateAttrs*/
      256 && /*templateAttrs*/
      i[8]]));
    },
    d(i) {
      i && k(r);
    }
  };
}
function $u(t) {
  let r = (
    /*jsonItems*/
    t[5]
  ), e, n, o = tf(t);
  return {
    c() {
      o.c(), e = He();
    },
    l(i) {
      o.l(i), e = He();
    },
    m(i, s) {
      o.m(i, s), K(i, e, s), n = !0;
    },
    p(i, s) {
      s & /*jsonItems*/
      32 && Fr(r, r = /*jsonItems*/
      i[5]) ? (dr(), ne(o, 1, 1, E), _r(), o = tf(i), o.c(), U(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
    },
    i(i) {
      n || (U(o), n = !0);
    },
    o(i) {
      ne(o), n = !1;
    },
    d(i) {
      i && k(e), o.d(i);
    }
  };
}
function ef(t) {
  let r, e;
  return r = new oo({
    props: { componentContext: (
      /*item*/
      t[11]
    ) }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*items*/
      8 && (i.componentContext = /*item*/
      n[11]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function tf(t) {
  let r, e, n = lr(
    /*items*/
    t[3]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = ef(Qu(t, n, s));
  const i = (s) => ne(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = He();
    },
    l(s) {
      for (let a = 0; a < o.length; a += 1)
        o[a].l(s);
      r = He();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      K(s, r, a), e = !0;
    },
    p(s, a) {
      if (a & /*items*/
      8) {
        n = lr(
          /*items*/
          s[3]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const c = Qu(s, n, l);
          o[l] ? (o[l].p(c, a), U(o[l], 1)) : (o[l] = ef(c), o[l].c(), U(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (dr(), l = n.length; l < o.length; l += 1)
          i(l);
        _r();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          U(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        ne(o[a]);
      e = !1;
    },
    d(s) {
      s && k(r), _n(o, s);
    }
  };
}
function Ll(t) {
  let r, e, n, o = (
    /*templateContent*/
    t[7] && xu(t)
  ), i = !/*hasItemsError*/
  t[4] && /*jsonItems*/
  t[5] && $u(t), s = [
    /*componentContext*/
    t[0].json.custom_props || {}
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = Io(a, s[l]);
  return {
    c() {
      r = Me(
        /*desc*/
        t[2].element
      ), o && o.c(), e = br(), i && i.c(), this.h();
    },
    l(l) {
      r = Ne(
        l,
        /*desc*/
        (t[2].element || "null").toUpperCase(),
        {}
      );
      var c = Ee(r);
      o && o.l(c), e = yr(c), i && i.l(c), c.forEach(k), this.h();
    },
    h() {
      oi(
        /*desc*/
        t[2].element
      )(r, a);
    },
    m(l, c) {
      K(l, r, c), o && o.m(r, null), Et(r, e), i && i.m(r, null), t[9](r), n = !0;
    },
    p(l, c) {
      /*templateContent*/
      l[7] ? o ? o.p(l, c) : (o = xu(l), o.c(), o.m(r, e)) : o && (o.d(1), o = null), !/*hasItemsError*/
      l[4] && /*jsonItems*/
      l[5] ? i ? (i.p(l, c), c & /*hasItemsError, jsonItems*/
      48 && U(i, 1)) : (i = $u(l), i.c(), U(i, 1), i.m(r, null)) : i && (dr(), ne(i, 1, 1, () => {
        i = null;
      }), _r()), oi(
        /*desc*/
        l[2].element
      )(r, a = Ho(s, [
        c & /*componentContext*/
        1 && /*componentContext*/
        (l[0].json.custom_props || {})
      ]));
    },
    i(l) {
      n || (U(i), n = !0);
    },
    o(l) {
      ne(i), n = !1;
    },
    d(l) {
      l && k(r), o && o.d(), i && i.d(), t[9](null);
    }
  };
}
function Rw(t) {
  let r = (
    /*desc*/
    t[2].element
  ), e, n = (
    /*desc*/
    t[2].element && Ll(t)
  );
  return {
    c() {
      n && n.c(), e = He();
    },
    l(o) {
      n && n.l(o), e = He();
    },
    m(o, i) {
      n && n.m(o, i), K(o, e, i);
    },
    p(o, i) {
      /*desc*/
      o[2].element ? r ? Fr(
        r,
        /*desc*/
        o[2].element
      ) ? (n.d(1), n = Ll(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = Ll(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : r && (n.d(1), n = null, r = /*desc*/
      o[2].element);
    },
    i: E,
    o(o) {
      ne(n, o);
    },
    d(o) {
      o && k(e), n && n.d(o);
    }
  };
}
function Hw(t) {
  let r, e, n, o;
  const i = [Lw, Ow], s = [];
  function a(l, c) {
    return (
      /*desc*/
      l[2] ? 0 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(l) {
      e && e.l(l), n = He();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, [c]) {
      let u = r;
      r = a(l), r === u ? ~r && s[r].p(l, c) : (e && (dr(), ne(s[u], 1, 1, () => {
        s[u] = null;
      }), _r()), ~r ? (e = s[r], e ? e.p(l, c) : (e = s[r] = i[r](l), e.c()), U(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Ww(t, r, e) {
  let n, { componentContext: o } = r, { layoutParams: i = void 0 } = r;
  const s = zr(xr);
  let a, l = null, c = "", u = {}, f = [], _ = !1;
  no(() => {
    if (a && "divKitApiCallback" in a && typeof a.divKitApiCallback == "function") {
      const m = s.getExtensionContext(o);
      a.divKitApiCallback(m);
    }
  }), cn(() => {
    f.forEach((m) => {
      m.destroy();
    });
  });
  function p(m) {
    Pr[m ? "unshift" : "push"](() => {
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
          const h = s.getExtensionContext(o), y = /* @__PURE__ */ new Map();
          for (const [w, D] of h.variables)
            y.set(w, D.getValue());
          e(7, c = l.template({
            props: o.json.custom_props,
            variables: y
          }));
        } else l.template && typeof l.template == "string" ? e(7, c = l.template) : e(7, c = "");
        e(8, u = {
          shadowrootmode: l.shadowRootMode || "open"
        });
      } else
        e(2, l = null), e(7, c = ";"), o.logError(X(new Error('Unknown or incorrect "custom_type" prop for div "custom"')));
    t.$$.dirty & /*componentContext*/
    1 && e(5, n = o.json.items), t.$$.dirty & /*jsonItems, componentContext*/
    33 && (n !== void 0 && !Array.isArray(n) ? (e(4, _ = !0), o.logError(X(new Error('Incorrect "items" prop for div "custom"')))) : e(4, _ = !1)), t.$$.dirty & /*items, hasItemsError, jsonItems, componentContext*/
    57 && (f.forEach((h) => {
      h.destroy();
    }), e(3, f = (!_ && n || []).map((h, y) => o.produceChildContext(h, { path: y }))));
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
    p
  ];
}
class Uw extends Hr {
  constructor(r) {
    super(), Rr(this, r, Ww, Hw, Fr, { componentContext: 0, layoutParams: 1 });
  }
}
const Gw = "appkit-breadcrumb", Jw = "appkit-breadcrumb__list", qw = "appkit-breadcrumb__item", Kw = "appkit-breadcrumb__label", Yw = "appkit-breadcrumb__label_link", Xw = "appkit-breadcrumb__separator", wi = {
  breadcrumb: Gw,
  breadcrumb__list: Jw,
  breadcrumb__item: qw,
  breadcrumb__label: Kw,
  breadcrumb__label_link: Yw,
  breadcrumb__separator: Xw
};
function rf(t, r, e) {
  const n = t.slice();
  return n[26] = r[e], n[28] = e, n;
}
function Zw(t) {
  let r, e;
  return r = new Bn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Qw(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: wt("breadcrumb", wi, {}),
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
      $$slots: { default: [ev] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function xw(t) {
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
      r = Me("a"), n = Gn(e), i = br(), s = Me("span"), a = Gn(
        /*separator*/
        t[2]
      ), this.h();
    },
    l(f) {
      r = Ne(f, "A", { class: !0, href: !0 });
      var _ = Ee(r);
      n = to(_, e), _.forEach(k), i = yr(f), s = Ne(f, "SPAN", { class: !0, "aria-hidden": !0 });
      var p = Ee(s);
      a = to(
        p,
        /*separator*/
        t[2]
      ), p.forEach(k), this.h();
    },
    h() {
      g(r, "class", wi.breadcrumb__label + " " + wi.breadcrumb__label_link), g(r, "href", o = of(
        /*crumb*/
        t[26]
      )), g(s, "class", wi.breadcrumb__separator), g(s, "aria-hidden", "true");
    },
    m(f, _) {
      K(f, r, _), Et(r, n), K(f, i, _), K(f, s, _), Et(s, a), l || (c = $e(r, "click", u), l = !0);
    },
    p(f, _) {
      t = f, _ & /*crumbs*/
      16 && e !== (e = /*crumb*/
      t[26].title + "") && ao(n, e), _ & /*crumbs*/
      16 && o !== (o = of(
        /*crumb*/
        t[26]
      )) && g(r, "href", o), _ & /*separator*/
      4 && ao(
        a,
        /*separator*/
        t[2]
      );
    },
    d(f) {
      f && (k(r), k(i), k(s)), l = !1, c();
    }
  };
}
function $w(t) {
  let r, e = (
    /*crumb*/
    t[26].title + ""
  ), n;
  return {
    c() {
      r = Me("span"), n = Gn(e), this.h();
    },
    l(o) {
      r = Ne(o, "SPAN", { class: !0, "aria-current": !0 });
      var i = Ee(r);
      n = to(i, e), i.forEach(k), this.h();
    },
    h() {
      g(r, "class", wi.breadcrumb__label), g(r, "aria-current", "page");
    },
    m(o, i) {
      K(o, r, i), Et(r, n);
    },
    p(o, i) {
      i & /*crumbs*/
      16 && e !== (e = /*crumb*/
      o[26].title + "") && ao(n, e);
    },
    d(o) {
      o && k(r);
    }
  };
}
function nf(t) {
  let r, e;
  function n(s, a) {
    return (
      /*index*/
      s[28] === /*crumbs*/
      s[4].length - 1 ? $w : xw
    );
  }
  let o = n(t), i = o(t);
  return {
    c() {
      r = Me("li"), i.c(), e = br(), this.h();
    },
    l(s) {
      r = Ne(s, "LI", { class: !0 });
      var a = Ee(r);
      i.l(a), e = yr(a), a.forEach(k), this.h();
    },
    h() {
      g(r, "class", wi.breadcrumb__item);
    },
    m(s, a) {
      K(s, r, a), i.m(r, null), Et(r, e);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, e)));
    },
    d(s) {
      s && k(r), i.d();
    }
  };
}
function ev(t) {
  let r, e, n = lr(
    /*crumbs*/
    t[4]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = nf(rf(t, n, i));
  return {
    c() {
      r = Me("nav"), e = Me("ol");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      this.h();
    },
    l(i) {
      r = Ne(i, "NAV", { "aria-label": !0 });
      var s = Ee(r);
      e = Ne(s, "OL", { class: !0 });
      var a = Ee(e);
      for (let l = 0; l < o.length; l += 1)
        o[l].l(a);
      a.forEach(k), s.forEach(k), this.h();
    },
    h() {
      g(e, "class", wi.breadcrumb__list), g(r, "aria-label", "breadcrumb");
    },
    m(i, s) {
      K(i, r, s), Et(r, e);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(e, null);
    },
    p(i, s) {
      if (s & /*crumbs, separator, getHref, handleCrumbClick*/
      2068) {
        n = lr(
          /*crumbs*/
          i[4]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = rf(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = nf(l), o[a].c(), o[a].m(e, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && k(r), _n(o, i);
    }
  };
}
function tv(t) {
  let r, e, n, o;
  const i = [Qw, Zw], s = [];
  function a(l, c) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = He();
    },
    l(l) {
      e && e.l(l), n = He();
    },
    m(l, c) {
      ~r && s[r].m(l, c), K(l, n, c), o = !0;
    },
    p(l, [c]) {
      e && e.p(l, c);
    },
    i(l) {
      o || (U(e), o = !0);
    },
    o(l) {
      ne(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function of(t) {
  var r;
  return (r = t.action) != null && r.url && !t.action.url.startsWith("div-action://") ? t.action.url : "#";
}
function rv(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _, p = E, m = () => (p(), p = V(c, (Te) => e(16, _ = Te)), c), h, y = E, w = () => (y(), y = V(l, (Te) => e(17, h = Te)), l), D, z = E, B = () => (z(), z = V(a, (Te) => e(18, D = Te)), a), ee, ue = E, M = () => (ue(), ue = V(s, (Te) => e(19, ee = Te)), s), q, ae = E, A = () => (ae(), ae = V(i, (Te) => e(20, q = Te)), i), F, P = E, O = () => (P(), P = V(o, (Te) => e(21, F = Te)), o);
  t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => y()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => P());
  let { componentContext: J } = r, { layoutParams: he = void 0 } = r;
  const fe = zr(xr);
  let Ae = "/", me = "#0077CC", Ie = "#111111", re = 14;
  function tt() {
    e(2, Ae = "/"), e(12, me = "#0077CC"), e(13, Ie = "#111111"), e(14, re = 14);
  }
  function qe(Te, pe) {
    const ce = J.json.item_builder;
    if (ce && Array.isArray(pe) && Array.isArray(ce.prototypes)) {
      const be = [];
      return pe.forEach((x, ge) => {
        if (x === null || typeof x != "object")
          return;
        const oe = fe.preparePrototypeVariables(ce.data_element_name || "it", x, ge);
        for (let Se = 0; Se < ce.prototypes.length; ++Se) {
          const Je = ce.prototypes[Se];
          if (!Je.title || Je.selector !== void 0 && !J.getJsonWithVars(Je.selector, oe))
            continue;
          const te = { title: J.getJsonWithVars(Je.title, oe) };
          if (Je.action) {
            const Re = J.getJsonWithVars(Je.action, oe);
            Re && (te.action = Re);
          }
          be.push(te);
          break;
        }
      }), be;
    }
    return Array.isArray(Te) ? Te : J.json.crumbs || [];
  }
  function Ke(Te, pe) {
    pe.action && (Te.preventDefault(), J.execAnyActions([pe.action]));
  }
  const ve = (Te, pe) => Ke(pe, Te);
  return t.$$set = (Te) => {
    "componentContext" in Te && e(0, J = Te.componentContext), "layoutParams" in Te && e(1, he = Te.layoutParams);
  }, t.$$.update = () => {
    var Te, pe, ce;
    t.$$.dirty & /*componentContext*/
    1 && e(15, n = J.origJson), t.$$.dirty & /*origJson*/
    32768 && n && tt(), t.$$.dirty & /*componentContext*/
    1 && O(e(10, o = J.getDerivedFromVars(J.json.separator))), t.$$.dirty & /*componentContext*/
    1 && A(e(9, i = J.getDerivedFromVars(J.json.item_text_color))), t.$$.dirty & /*componentContext*/
    1 && M(e(8, s = J.getDerivedFromVars(J.json.active_text_color))), t.$$.dirty & /*componentContext*/
    1 && B(e(7, a = J.getDerivedFromVars(J.json.item_font_size))), t.$$.dirty & /*componentContext*/
    1 && w(e(6, l = J.getDerivedFromVars(J.json.crumbs))), t.$$.dirty & /*componentContext*/
    1 && m(e(5, c = typeof ((Te = J.json.item_builder) == null ? void 0 : Te.data) == "string" ? J.getDerivedFromVars((pe = J.json.item_builder) == null ? void 0 : pe.data, void 0, !0) : (ce = J.json.item_builder) != null && ce.data ? Xo(J.json.item_builder.data) : void 0)), t.$$.dirty & /*$jsonSeparator, separator*/
    2097156 && e(2, Ae = typeof F == "string" && F.length > 0 ? F : Ae), t.$$.dirty & /*$jsonItemTextColor, itemTextColor*/
    1052672 && e(12, me = gr(q, 1, me)), t.$$.dirty & /*$jsonActiveTextColor, activeTextColor*/
    532480 && e(13, Ie = gr(ee, 1, Ie)), t.$$.dirty & /*$jsonItemFontSize, itemFontSize*/
    278528 && e(14, re = Xn(D, re)), t.$$.dirty & /*$jsonCrumbs, $jsonItemBuilderData*/
    196608 && e(4, u = qe(h, _)), t.$$.dirty & /*itemTextColor, activeTextColor, itemFontSize*/
    28672 && e(3, f = {
      "--divkit-breadcrumb-item-color": me,
      "--divkit-breadcrumb-active-color": Ie,
      "--divkit-breadcrumb-font-size": _e(re)
    });
  }, [
    J,
    he,
    Ae,
    f,
    u,
    c,
    l,
    a,
    s,
    i,
    o,
    Ke,
    me,
    Ie,
    re,
    n,
    _,
    h,
    D,
    ee,
    q,
    F,
    ve
  ];
}
class nv extends Hr {
  constructor(r) {
    super(), Rr(this, r, rv, tv, Fr, { componentContext: 0, layoutParams: 1 });
  }
}
const r_ = {
  text: Ap,
  container: cg,
  separator: mg,
  image: Tc,
  gif: Tc,
  grid: Jg,
  gallery: pm,
  tabs: Gm,
  state: h0,
  pager: B0,
  indicator: Q0,
  slider: z1,
  input: cb,
  select: yb,
  video: Nb,
  switch: Kb,
  checkbox: iy,
  radio: Ey,
  progress: Ny,
  table: lw,
  counter: bw,
  webview: Vw,
  google_map: Bw,
  custom: Uw,
  breadcrumb: nv
};
function sf(t) {
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
  return o && (r = Wa(o, i(t))), {
    c() {
      r && Ut(r.$$.fragment), e = He();
    },
    l(s) {
      r && Jt(r.$$.fragment, s), e = He();
    },
    m(s, a) {
      r && Lt(r, s, a), K(s, e, a), n = !0;
    },
    p(s, a) {
      if (a & /*component*/
      4 && o !== (o = /*component*/
      s[2])) {
        if (r) {
          dr();
          const l = r;
          ne(l.$$.fragment, 1, 0, () => {
            Rt(l, 1);
          }), _r();
        }
        o ? (r = Wa(o, i(s)), Ut(r.$$.fragment), U(r.$$.fragment, 1), Lt(r, e.parentNode, e)) : r = null;
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
      n || (r && U(r.$$.fragment, s), n = !0);
    },
    o(s) {
      r && ne(r.$$.fragment, s), n = !1;
    },
    d(s) {
      s && k(e), r && Rt(r, s);
    }
  };
}
function ov(t) {
  let r, e, n = (
    /*component*/
    t[2] && sf(t)
  );
  return {
    c() {
      n && n.c(), r = He();
    },
    l(o) {
      n && n.l(o), r = He();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), e = !0;
    },
    p(o, [i]) {
      /*component*/
      o[2] ? n ? (n.p(o, i), i & /*component*/
      4 && U(n, 1)) : (n = sf(o), n.c(), U(n, 1), n.m(r.parentNode, r)) : n && (dr(), ne(n, 1, 1, () => {
        n = null;
      }), _r());
    },
    i(o) {
      e || (U(n), e = !0);
    },
    o(o) {
      ne(n), e = !1;
    },
    d(o) {
      o && k(r), n && n.d(o);
    }
  };
}
function iv(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r;
  const i = zr(xr);
  let s;
  return t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext, component*/
    5) {
      const a = n.json;
      if (e(2, s = (a == null ? void 0 : a.type) && r_[a.type] || void 0), !s) {
        let l;
        a != null && a.type && i.hasTemplate(a.type) ? l = "Recursive template" : l = "Unknown component", n.logError(X(new Error(l), {
          additional: {
            component: (a == null ? void 0 : a.type) || "<missing>"
          }
        }));
      }
    }
  }, [n, o, s];
}
class oo extends Hr {
  constructor(r) {
    super(), Rr(this, r, iv, ov, Fr, { componentContext: 0, layoutParams: 1 });
  }
}
const sv = {
  "root-svg-filters": "appkit-root-svg-filters"
};
function lf(t, r, e) {
  const n = t.slice();
  n[1] = r[e];
  const o = (
    /*filterKey*/
    n[1].split(":")
  );
  return n[2] = o[0], n[3] = o[1], n;
}
function af(t) {
  let r, e, n = lr([...Object.keys(
    /*svgFiltersMap*/
    t[0]
  )]), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = cf(lf(t, n, i));
  return {
    c() {
      r = Qr("svg"), e = Qr("defs");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      this.h();
    },
    l(i) {
      r = nn(i, "svg", { class: !0, "aria-hidden": !0 });
      var s = Ee(r);
      e = nn(s, "defs", {});
      var a = Ee(e);
      for (let l = 0; l < o.length; l += 1)
        o[l].l(a);
      a.forEach(k), s.forEach(k), this.h();
    },
    h() {
      g(r, "class", sv["root-svg-filters"]), g(r, "aria-hidden", "true");
    },
    m(i, s) {
      K(i, r, s), Et(r, e);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(e, null);
    },
    p(i, s) {
      if (s & /*svgFiltersMap, Object*/
      1) {
        n = lr([...Object.keys(
          /*svgFiltersMap*/
          i[0]
        )]);
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = lf(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = cf(l), o[a].c(), o[a].m(e, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && k(r), _n(o, i);
    }
  };
}
function lv(t) {
  let r, e;
  return {
    c() {
      r = Qr("feBlend"), this.h();
    },
    l(n) {
      r = nn(n, "feBlend", { in2: !0, mode: !0 }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "in2", "SourceGraphic"), g(r, "mode", e = /*filterMode*/
      t[3]);
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o & /*svgFiltersMap*/
      1 && e !== (e = /*filterMode*/
      n[3]) && g(r, "mode", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function av(t) {
  let r;
  return {
    c() {
      r = Qr("feComposite"), this.h();
    },
    l(e) {
      r = nn(e, "feComposite", {
        in2: !0,
        operator: !0,
        k1: !0,
        k2: !0,
        k3: !0,
        k4: !0
      }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "in2", "SourceGraphic"), g(r, "operator", "arithmetic"), g(r, "k1", "1"), g(r, "k2", "0"), g(r, "k3", "0"), g(r, "k4", "0");
    },
    m(e, n) {
      K(e, r, n);
    },
    p: E,
    d(e) {
      e && k(r);
    }
  };
}
function cv(t) {
  let r, e;
  return {
    c() {
      r = Qr("feComposite"), this.h();
    },
    l(n) {
      r = nn(n, "feComposite", { in2: !0, operator: !0 }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "in2", "SourceGraphic"), g(r, "operator", e = /*filterMode*/
      t[3].split("_")[1]);
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o & /*svgFiltersMap*/
      1 && e !== (e = /*filterMode*/
      n[3].split("_")[1]) && g(r, "operator", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function cf(t) {
  let r, e, n, o;
  function i(l, c) {
    return (
      /*filterMode*/
      l[3] === "source_in" || /*filterMode*/
      l[3] === "source_atop" ? cv : (
        /*filterMode*/
        l[3] === "multiply" ? av : lv
      )
    );
  }
  let s = i(t), a = s(t);
  return {
    c() {
      r = Qr("filter"), e = Qr("feFlood"), a.c(), this.h();
    },
    l(l) {
      r = nn(l, "filter", { id: !0 });
      var c = Ee(r);
      e = nn(c, "feFlood", { "flood-color": !0 }), Ee(e).forEach(k), a.l(c), c.forEach(k), this.h();
    },
    h() {
      g(e, "flood-color", n = /*filterColor*/
      t[2]), g(r, "id", o = /*svgFiltersMap*/
      t[0][
        /*filterKey*/
        t[1]
      ]);
    },
    m(l, c) {
      K(l, r, c), Et(r, e), a.m(r, null);
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
      l && k(r), a.d();
    }
  };
}
function uv(t) {
  let r = Object.keys(
    /*svgFiltersMap*/
    t[0]
  ).length, e, n = r && af(t);
  return {
    c() {
      n && n.c(), e = He();
    },
    l(o) {
      n && n.l(o), e = He();
    },
    m(o, i) {
      n && n.m(o, i), K(o, e, i);
    },
    p(o, [i]) {
      i & /*svgFiltersMap*/
      1 && (r = Object.keys(
        /*svgFiltersMap*/
        o[0]
      ).length), r ? n ? n.p(o, i) : (n = af(o), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: E,
    o: E,
    d(o) {
      o && k(e), n && n.d(o);
    }
  };
}
function fv(t, r, e) {
  let { svgFiltersMap: n } = r;
  return t.$$set = (o) => {
    "svgFiltersMap" in o && e(0, n = o.svgFiltersMap);
  }, [n];
}
class dv extends Hr {
  constructor(r) {
    super(), Rr(this, r, fv, uv, Fr, { svgFiltersMap: 0 });
  }
}
function _v(t, r, e, n) {
  const o = e[t.type];
  if (!o)
    return n(X(new Error("No such template"), {
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
    const f = Object.keys(u).filter((m) => m !== "__proto__"), _ = f.filter((m) => m.charAt(0) !== "$"), p = f.filter((m) => m.charAt(0) === "$");
    return _.forEach((m) => {
      const h = u[m];
      typeof h == "object" && h !== null ? (c[m] = Array.isArray(h) ? [] : {}, a(c[m], h)) : c[m] = h;
    }), p.forEach((m) => {
      const h = u[m], y = s[h];
      if (y !== void 0) {
        const w = m.substring(1);
        c[w] = y;
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
const Fs = /* @__PURE__ */ new Map(), ta = /* @__PURE__ */ new Map(), Ts = /* @__PURE__ */ new Map(), ra = /* @__PURE__ */ new Map();
function G(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = Fs.get(t) || [];
  Fs.has(t) || Fs.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  ta.set(i, n);
}
function Gr(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = Ts.get(t) || [];
  Ts.has(t) || Ts.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  ra.set(i, n);
}
function hv(t, r, e) {
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
    }), l.type === bt && r[a].type === Oe) {
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
function n_(t, r) {
  if (!t)
    return {
      type: "missing"
    };
  let e = null, n = null;
  for (let o = 0; o < t.length; ++o) {
    const i = hv(t[o], r, t.length > 1);
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
function na(t, r, e) {
  return n_(t.get(r), e);
}
function o_(t, r) {
  return r.map((e, n) => {
    let o = n >= t.args.length ? t.args[t.args.length - 1] : t.args[n];
    return typeof o != "object" && (o = {
      type: o
    }), o.type === bt && e.type === Oe ? Ql(e) : e;
  });
}
function uf(t, r) {
  return t + ":" + r.args.map((e) => typeof e == "string" ? e : e.type).join("#");
}
function Kn(t, r) {
  return {
    type: Ge,
    value: Vi(r, !0)
  };
}
function ff(t, r) {
  const e = Number(r.value);
  if (Number.isNaN(e) || !Number.isFinite(e))
    throw new Error("Unable to convert value to Number.");
  if (r.value === "")
    throw new Error("Unable to convert value to Number.");
  return {
    type: bt,
    value: e
  };
}
function pv(t, r) {
  if (r.value > _s || r.value < hs)
    throw new Error("Unable to convert value to Integer.");
  const e = r.value - r.value % 1;
  return {
    type: Oe,
    value: yn(e)
  };
}
function gv(t, r) {
  let e;
  try {
    e = yn(r.value);
  } catch {
    throw new Error("Unable to convert value to Integer.");
  }
  return {
    type: Oe,
    value: e
  };
}
function mv(t, r) {
  return {
    type: Oe,
    value: yn(r.value ? 1 : 0)
  };
}
function bv(t, r) {
  const e = Number(r.value);
  if (e !== 1 && e !== 0)
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: qr,
    value: e
  };
}
function yv(t, r) {
  if (r.value !== "true" && r.value !== "false")
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: qr,
    value: r.value === "true" ? 1 : 0
  };
}
function wv(t, r) {
  return {
    type: mn,
    value: li(r.value)
  };
}
function vv(t, r) {
  return ko(r.value), {
    type: lo,
    value: r.value
  };
}
function kv(t, r) {
  try {
    return {
      type: Ge,
      value: encodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to encodeUri string.");
  }
}
function jv(t, r) {
  try {
    return {
      type: Ge,
      value: decodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to decodeUri string.");
  }
}
function Ia(t, r, e, n) {
  const o = t.variables.get(r.value);
  let i;
  return o && o.getType() === n ? (i = o.getValue(), t.storeUsedVars || (t.storeUsedVars = /* @__PURE__ */ new Set()), t.storeUsedVars.add(o)) : i = e.value, n === "color" ? i = li(i) : n === "url" && ko(i), {
    type: n,
    // value is synced with type by params
    value: i
  };
}
function vs(t, r, e) {
  return Ia(t, r, e, e.type);
}
function df(t, r, e) {
  return Ia(t, r, e, "color");
}
function _f(t, r, e) {
  return Ia(t, r, e, "url");
}
function i_(t, r) {
  for (let e = 0; e < r.length; ++e) {
    const n = t.charAt(e), o = r.charAt(e);
    if (n !== o && o)
      return o;
  }
  return "";
}
const rl = 1234567890;
function hf(t) {
  const r = new Intl.NumberFormat(t, {
    maximumFractionDigits: 0
  }), e = new Intl.NumberFormat(t, {
    minimumFractionDigits: 1
  }), n = r.format(rl), o = e.format(rl);
  return i_(n, o);
}
function Ev(t) {
  const r = new Intl.NumberFormat(t, {
    useGrouping: !1
  }), e = new Intl.NumberFormat(t, {
    useGrouping: !0
  }), n = r.format(rl), o = e.format(rl);
  return i_(n, o);
}
function ti(t, r, e, n) {
  const o = e.value, i = o.replace(/,/g, "");
  if (!/^((#+)|(#*0+))(\.0*#*)?$/.test(i) && !/^#*0*\.((0*#*)|(#+))$/.test(i) || /,.*,/.test(o) || o.indexOf(",") > o.indexOf(".") && o.indexOf(".") > -1)
    throw new Error("Incorrect format pattern.");
  const s = o.split("."), a = s[0], l = s[1] || "", c = o.replace(/[^#0.]/g, "").split("."), u = c[0], f = c[1] || "", _ = a.indexOf(","), p = _ > -1 ? a.length - _ - 1 : -1;
  if (_ > -1 && p < 1 || l.indexOf(",") > -1)
    throw new Error("Incorrect format pattern.");
  try {
    let m = 0;
    for (; u[u.length - 1 - m] === "0"; )
      ++m;
    let h = 0;
    for (; f[h] === "0"; )
      ++h;
    let y = h;
    for (; f[y] === "#"; )
      ++y;
    let D = new Intl.NumberFormat((n == null ? void 0 : n.value) || void 0, {
      useGrouping: !1,
      minimumIntegerDigits: Math.min(Math.max(m, 1), 21),
      minimumFractionDigits: Math.min(Math.max(h, 0), 100),
      maximumFractionDigits: Math.min(Math.max(y, h, 0), 100),
      roundingMode: "halfEven"
    }).format(r.value);
    if (_ > -1 && p > 0) {
      const z = Ev(n == null ? void 0 : n.value), B = hf(n == null ? void 0 : n.value);
      if (z && B) {
        const ee = D.split(B), ue = ee[0];
        let M = "";
        for (let q = ue.length - 1; q >= 0; --q)
          M = ue[q] + M, q > 0 && (ue.length - q) % p === 0 && (M = z + M);
        D = M + (ee.length > 1 ? B + ee[1] : "");
      }
    }
    if (h === 0 && y === 0 && o.endsWith(".")) {
      const z = hf(n == null ? void 0 : n.value);
      z && (D += z);
    }
    return {
      type: Ge,
      value: D
    };
  } catch (m) {
    throw new Error("Incorrect or unsupported number format." + m + " " + (n == null ? void 0 : n.value) || void 0);
  }
}
function Cv() {
  G("toString", [Oe], Kn), G("toString", [bt], Kn), G("toString", [qr], Kn), G("toString", [mn], Kn), G("toString", [lo], Kn), G("toString", [Ge], Kn), G("toString", [ur], Kn), G("toString", [cr], Kn), G("toNumber", [Oe], ff), G("toNumber", [Ge], ff), G("toInteger", [bt], pv), G("toInteger", [Ge], gv), G("toInteger", [qr], mv), G("toBoolean", [Oe], bv), G("toBoolean", [Ge], yv), G("toColor", [Ge], wv), G("toUrl", [Ge], vv), G("encodeUri", [Ge], kv), G("decodeUri", [Ge], jv), G("getIntegerValue", [Ge, Oe], vs), G("getNumberValue", [Ge, bt], vs), G("getBooleanValue", [Ge, qr], vs), G("getStringValue", [Ge, Ge], vs), G("getColorValue", [Ge, mn], df), G("getColorValue", [Ge, Ge], df), G("getUrlValue", [Ge, lo], _f), G("getUrlValue", [Ge, Ge], _f), Gr("toString", [Oe], Kn), Gr("toString", [bt], Kn), Gr("toString", [qr], Kn), Gr("toString", [mn], Kn), Gr("toString", [lo], Kn), Gr("toString", [Ge], Kn), Gr("toString", [ur], Kn), Gr("toString", [cr], Kn), G("decimalFormat", [Oe, Ge], ti), G("decimalFormat", [bt, Ge], ti), G("decimalFormat", [Oe, Ge, Ge], ti), G("decimalFormat", [bt, Ge, Ge], ti), Gr("decimalFormat", [Oe, Ge], ti), Gr("decimalFormat", [bt, Ge], ti), Gr("decimalFormat", [Oe, Ge, Ge], ti), Gr("decimalFormat", [bt, Ge, Ge], ti);
}
function Yn(t, r) {
  return !t || !r ? t : t.padStart(r, "0");
}
const oa = {
  G(t, r) {
    let e;
    return t < 4 ? e = "short" : t === 5 ? e = "narrow" : e = "long", r({
      era: e
    }, "era");
  },
  d(t, r) {
    return Yn(r({
      day: "numeric"
    }, "day"), t > 1 ? t : 0);
  },
  D(t, r) {
    return Yn(r({}, "dayofyear"), t > 1 ? t : 0);
  },
  F(t, r) {
    return Yn(r({}, "dayofweekinmonth"), t > 1 ? t : 0);
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
    return Yn(r({
      year: t === 2 ? "2-digit" : "numeric"
    }, "year"), t > 2 ? t : void 0);
  },
  Y(t, r) {
    return Yn(r({
      year: t === 2 ? "2-digit" : "numeric"
    }, "weekyear"), t > 2 ? t : void 0);
  },
  u(t, r) {
    return Yn(r({
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
    return t > 2 ? oa.E(t, r) : Yn(r({}, "weekdaynumeric"), t > 1 ? t : void 0);
  },
  w(t, r) {
    return Yn(r({}, "week"), t > 1 ? t : void 0);
  },
  W(t, r) {
    return Yn(r({}, "weekofmonth"), t > 1 ? t : void 0);
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
    return Yn(n, t > 1 ? t : void 0);
  },
  h(t, r) {
    return Yn(r({
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
    return Yn(n, t > 1 ? t : void 0);
  },
  k(t, r) {
    return Yn(r({
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
    return Yn(r({
      minute: "numeric"
    }, "minute"), t > 1 ? t : void 0);
  },
  s(t, r) {
    return Yn(r({
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
    return (e >= 0 ? "+" : "-") + Yn(String(o), 4);
  }
}, Av = /(\w)\1*|''|'(''|[^'])+('|$)|./g, Vv = /^'([^]*?)'?$/, Sv = /''/g, Iv = /[a-zA-Z]/, Da = 1e3 * 60 * 60 * 24;
function Dv(t) {
  const r = t.match(Vv);
  return r ? r[1].replace(Sv, "'") : t;
}
function ia(t, r, e) {
  const n = t[r ? "getUTCDay" : "getDay"](), o = n < e ? e - n - 7 : e - n;
  return new Date(t.getTime() + Da * o);
}
function pf(t, r, e) {
  const n = new Date(t);
  return n[r ? "setUTCDate" : "setDate"](1), n[r ? "setUTCMonth" : "setMonth"](0), ia(n, r, e);
}
function gf(t, r) {
  return Math.round((t.getTime() - r.getTime()) / Da);
}
function mf(t, r, e) {
  let n = 0;
  const o = pf(t, r || !1, e), i = new Date(t);
  i[r ? "setUTCFullYear" : "setFullYear"](t[r ? "getUTCFullYear" : "getFullYear"]() + 1);
  const s = pf(i, r || !1, e), a = t.getTime() < o.getTime(), l = t.getTime() >= s.getTime();
  let c = t[r ? "getUTCFullYear" : "getFullYear"]();
  if (a) {
    --c, o[r ? "setUTCFullYear" : "setFullYear"](o[r ? "getUTCFullYear" : "getFullYear"]() - 1);
    const u = gf(ia(t, r, e), o);
    n = Math.round(u / 7) + 1;
  } else if (l)
    ++c, n = 1;
  else {
    const u = gf(ia(t, r, e), o);
    n = Math.round(u / 7) + 1;
  }
  return {
    week: n,
    year: c
  };
}
function Fv(t, r, {
  locale: e,
  isUTC: n,
  weekStartDay: o = 0
} = {}) {
  const i = (s, a) => {
    if (a === "week") {
      const { week: u } = mf(t, n || !1, o);
      return String(u);
    }
    if (a === "weekofmonth") {
      const u = t[n ? "getUTCDay" : "getDay"](), f = new Date(t);
      f[n ? "setUTCDate" : "setDate"](1);
      const _ = f[n ? "getUTCDay" : "getDay"](), p = t[n ? "getUTCDate" : "getDate"]();
      return String(Math.ceil(p / 7) + (u < _ ? 1 : 0));
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
      const f = Math.ceil((t.getTime() - u.getTime()) / Da);
      return String(f);
    }
    if (a === "weekyear") {
      let { year: u } = mf(t, n || !1, o);
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
  return (r.match(Av) || []).map((s) => {
    if (s === "''")
      return "'";
    const a = s[0];
    if (a === "'")
      return Dv(s);
    if (oa[a])
      return oa[a](s.length, i);
    if (a.match(Iv))
      throw new Error(
        `Format string contains an unescaped latin alphabet character "${a}"`
      );
    return s;
  }).join("");
}
function Tv(t) {
  const r = new Date(t);
  return r.setUTCMonth(r.getUTCMonth() + 1), r.setUTCDate(0), r.getUTCDate();
}
function Mv(t, r) {
  return {
    type: Or,
    value: new Date(Number(r.value) * 1e3)
  };
}
function Pv(t, r) {
  const e = new Date(Number(r.value) * 1e3), n = e.getTimezoneOffset();
  return e.setMinutes(e.getMinutes() - n), {
    type: Or,
    value: e
  };
}
function Nv() {
  return {
    type: Or,
    value: /* @__PURE__ */ new Date()
  };
}
function zv(t, r, e) {
  return {
    type: Or,
    value: new Date(r.value.getTime() + Number(e.value))
  };
}
function Bv(t, r, e) {
  const n = new Date(r.value);
  return n.setUTCFullYear(Number(e.value)), {
    type: Or,
    value: n
  };
}
function Ov(t, r, e) {
  const n = Number(e.value);
  if (n < 1 || n > 12)
    throw new Error(`Expecting month in [1..12], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMonth(n - 1), {
    type: Or,
    value: o
  };
}
function Lv(t, r, e) {
  const n = new Date(r.value), o = Number(e.value);
  if (o <= 0 && o !== -1 || o > Tv(n))
    throw new Error(`Unable to set day ${o} for date ${Vi(r, !1)}.`);
  return n.setUTCDate(o === -1 ? 0 : o), {
    type: Or,
    value: n
  };
}
function Rv(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 23)
    throw new Error(`Expecting hours in [0..23], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCHours(n), {
    type: Or,
    value: o
  };
}
function Hv(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting minutes in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMinutes(n), {
    type: Or,
    value: o
  };
}
function Wv(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting seconds in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCSeconds(n), {
    type: Or,
    value: o
  };
}
function Uv(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 999)
    throw new Error(`Expecting millis in [0..999], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMilliseconds(n), {
    type: Or,
    value: o
  };
}
const ai = (t) => (r, e) => {
  let o = new Date(e.value.getTime())[t]();
  return t === "getUTCMonth" ? ++o : t === "getUTCDay" && o === 0 && (o = 7), {
    type: Oe,
    value: yn(o)
  };
};
function s_(t) {
  return (r, e, n, o) => ({
    type: Ge,
    value: Fv(e.value, n.value, {
      locale: o == null ? void 0 : o.value,
      isUTC: t,
      weekStartDay: r.weekStartDay
    })
  });
}
const Gv = ai("getUTCFullYear"), Jv = ai("getUTCMonth"), qv = ai("getUTCDate"), Kv = ai("getUTCDay"), Yv = ai("getUTCHours"), Xv = ai("getUTCMinutes"), Zv = ai("getUTCSeconds"), Qv = ai("getUTCMilliseconds"), bf = s_(!1), yf = s_(!0);
function xv() {
  G("parseUnixTime", [Oe], Mv), G("parseUnixTimeAsLocal", [Oe], Pv), G("nowLocal", [], Nv), G("addMillis", [Or, Oe], zv), G("setYear", [Or, Oe], Bv), G("setMonth", [Or, Oe], Ov), G("setDay", [Or, Oe], Lv), G("setHours", [Or, Oe], Rv), G("setMinutes", [Or, Oe], Hv), G("setSeconds", [Or, Oe], Wv), G("setMillis", [Or, Oe], Uv), G("getYear", [Or], Gv), G("getMonth", [Or], Jv), G("getDay", [Or], qv), G("getDayOfWeek", [Or], Kv), G("getHours", [Or], Yv), G("getMinutes", [Or], Xv), G("getSeconds", [Or], Zv), G("getMillis", [Or], Qv), G("formatDateAsLocal", [Or, Ge], bf), G("formatDateAsUTC", [Or, Ge], yf), G("formatDateAsLocalWithLocale", [Or, Ge, Ge], bf), G("formatDateAsUTCWithLocale", [Or, Ge, Ge], yf);
}
function $v(t) {
  return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function ek(t, r) {
  return {
    type: Oe,
    value: yn(r.value.length)
  };
}
function tk(t, r, e) {
  return {
    type: qr,
    value: r.value.includes(e.value) ? 1 : 0
  };
}
function rk(t, r, e, n) {
  if (n.value < e.value)
    throw new Error("Indexes should be in ascending order.");
  if (e.value < 0 || e.value > r.value.length || n.value < 0 || n.value > r.value.length)
    throw new Error("Indexes are out of bounds.");
  return {
    type: Ge,
    value: r.value.substring(Number(e.value), Number(n.value))
  };
}
function nk(t, r, e, n) {
  let o;
  return e.value ? o = r.value.replace(new RegExp($v(e.value), "g"), n.value) : o = r.value, {
    type: Ge,
    value: o
  };
}
function ok(t, r, e) {
  return {
    type: Oe,
    value: yn(r.value.indexOf(e.value))
  };
}
function ik(t, r, e) {
  return {
    type: Oe,
    value: yn(r.value.lastIndexOf(e.value))
  };
}
function sk(t, r) {
  return {
    type: Ge,
    value: r.value.trim()
  };
}
function lk(t, r) {
  return {
    type: Ge,
    value: r.value.replace(/^\s+/, "")
  };
}
function ak(t, r) {
  return {
    type: Ge,
    value: r.value.replace(/\s+$/, "")
  };
}
function ck(t, r) {
  return {
    type: Ge,
    value: r.value.toUpperCase()
  };
}
function uk(t, r) {
  return {
    type: Ge,
    value: r.value.toLowerCase()
  };
}
function l_(t, r, e, n) {
  if (!n.value.length)
    return t.warnings.push(X(new Error("String for padding is empty."), {
      level: "warn"
    })), "";
  let o = "";
  const i = r.type === Ge ? r.value : Vi(r, !1);
  for (; o.length + i.length < e.value; )
    o += n.value;
  return o.length > 0 && o.length + i.length > e.value && (o = o.substring(0, Number(e.value) - Number(i.length))), o;
}
function wf(t, r, e, n) {
  const o = l_(t, r, e, n);
  return {
    type: Ge,
    value: o + Vi(r, !1)
  };
}
function vf(t, r, e, n) {
  const o = l_(t, r, e, n);
  return {
    type: Ge,
    value: Vi(r, !1) + o
  };
}
function fk(t, r, e) {
  let n;
  try {
    n = new RegExp(e.value);
  } catch {
    throw new Error("Invalid regular expression.");
  }
  return {
    type: qr,
    value: n.test(r.value) ? 1 : 0
  };
}
function dk(t, r) {
  return {
    type: Ge,
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping
    value: r.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  };
}
function _k() {
  G("len", [Ge], ek), G("contains", [Ge, Ge], tk), G("substring", [Ge, Oe, Oe], rk), G("replaceAll", [Ge, Ge, Ge], nk), G("index", [Ge, Ge], ok), G("lastIndex", [Ge, Ge], ik), G("trim", [Ge], sk), G("trimLeft", [Ge], lk), G("trimRight", [Ge], ak), G("toUpperCase", [Ge], ck), G("toLowerCase", [Ge], uk), G("padStart", [Ge, Oe, Ge], wf), G("padStart", [Oe, Oe, Ge], wf), G("padEnd", [Ge, Oe, Ge], vf), G("padEnd", [Oe, Oe, Ge], vf), G("testRegex", [Ge, Ge], fk), G("encodeRegex", [Ge], dk);
}
function hk(t, r, e) {
  if (e.value === Ci)
    throw new Error("Division by zero is not supported.");
  let n = r.value / e.value;
  return n = Si(t, n), Hn(t, n), {
    type: Oe,
    value: n
  };
}
function pk(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value / e.value;
  return {
    type: bt,
    value: n
  };
}
function gk(t, r, e) {
  if (e.value === Ci)
    throw new Error("Division by zero is not supported.");
  let n = r.value % e.value;
  return n = Si(t, n), Hn(t, n), {
    type: Oe,
    value: n
  };
}
function mk(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value % e.value;
  return {
    type: bt,
    value: n
  };
}
function bk(t, ...r) {
  let e = r.length ? r[0].value : Ci;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value, e = Si(t, e), Hn(t, e);
  return {
    type: Oe,
    value: e
  };
}
function yk(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value;
  return {
    type: bt,
    value: e
  };
}
function wk(t, ...r) {
  let e = r.length ? r[0].value : Ci;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value, e = Si(t, e), Hn(t, e);
  return {
    type: Oe,
    value: e
  };
}
function vk(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value;
  return {
    type: bt,
    value: e
  };
}
function kk(t, ...r) {
  let e = Ci;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value, e = Si(t, e), Hn(t, e);
  return {
    type: Oe,
    value: e
  };
}
function jk(t, ...r) {
  let e = 0;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value;
  return {
    type: bt,
    value: e
  };
}
function Ek(t, r) {
  const e = Gd(r.value);
  return Hn(t, e), {
    type: r.type,
    value: e
  };
}
function Ck(t, r) {
  const e = Math.abs(r.value);
  return {
    type: bt,
    value: e
  };
}
function Ak(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  let e = r[0].value;
  for (let n = 1; n < r.length; ++n)
    r[n].value > e && (e = r[n].value);
  return {
    type: Oe,
    value: e
  };
}
function Vk(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: bt,
    value: Math.max(...r.map((e) => e.value))
  };
}
function Sk(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  let e = r[0].value;
  for (let n = 1; n < r.length; ++n)
    r[n].value < e && (e = r[n].value);
  return {
    type: Oe,
    value: e
  };
}
function Ik(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: bt,
    value: Math.min(...r.map((e) => e.value))
  };
}
function Dk() {
  return {
    type: bt,
    value: u1
  };
}
function Fk() {
  return {
    type: bt,
    value: f1
  };
}
function Tk(t) {
  return Hn(t, _s), {
    type: Oe,
    value: _s
  };
}
function Mk(t) {
  return Hn(t, hs), {
    type: Oe,
    value: hs
  };
}
function Pk(t, r) {
  const e = Math.sign(r.value);
  return {
    type: bt,
    // js treats Math.round(-0.5) as 0, which is different to other platforms
    value: e * Math.round(Math.abs(r.value))
  };
}
function Nk(t, r) {
  return {
    type: bt,
    value: Math.floor(r.value)
  };
}
function zk(t, r) {
  return {
    type: bt,
    value: Math.ceil(r.value)
  };
}
function Bk(t, r) {
  return {
    type: Oe,
    value: Jd(r.value)
  };
}
function Ok(t, r) {
  return {
    type: bt,
    value: Math.sign(r.value)
  };
}
function Lk(t, r, e) {
  let n;
  if (e.value === Ci)
    n = r.value;
  else if (r.value === Ci)
    n = yn(0);
  else {
    const o = Jd(e.value);
    n = Gd(r.value) * o;
  }
  return Hn(t, n), {
    type: Oe,
    value: n
  };
}
function Rk(t, r, e) {
  let n = Math.sign(e.value);
  n === 0 && (n = Object.is(n, 0) ? 1 : -1);
  const o = Math.abs(r.value) * n;
  return {
    type: bt,
    value: o
  };
}
function Hk() {
  G("div", [Oe, Oe], hk), G("div", [bt, bt], pk), G("mod", [Oe, Oe], gk), G("mod", [bt, bt], mk), G("mul", [{
    type: Oe,
    isVararg: !0
  }], bk), G("mul", [{
    type: bt,
    isVararg: !0
  }], yk), G("sub", [{
    type: Oe,
    isVararg: !0
  }], wk), G("sub", [{
    type: bt,
    isVararg: !0
  }], vk), G("sum", [{
    type: Oe,
    isVararg: !0
  }], kk), G("sum", [{
    type: bt,
    isVararg: !0
  }], jk), G("abs", [Oe], Ek), G("abs", [bt], Ck), G("max", [{
    type: Oe,
    isVararg: !0
  }], Ak), G("max", [{
    type: bt,
    isVararg: !0
  }], Vk), G("min", [{
    type: Oe,
    isVararg: !0
  }], Sk), G("min", [{
    type: bt,
    isVararg: !0
  }], Ik), G("maxNumber", [], Dk), G("minNumber", [], Fk), G("maxInteger", [], Tk), G("minInteger", [], Mk), G("round", [bt], Pk), G("floor", [bt], Nk), G("ceil", [bt], zk), G("signum", [Oe], Bk), G("signum", [bt], Ok), G("copySign", [Oe, Oe], Lk), G("copySign", [bt, bt], Rk);
}
function Cl(t) {
  return (r, e) => {
    const n = kl(e.value);
    return {
      type: bt,
      value: n[t] / 255
    };
  };
}
function Al(t) {
  return (r, e, n) => {
    const o = kl(e.value);
    return o[t] = n.value * 255, {
      type: mn,
      value: Ii(o)
    };
  };
}
const kf = Cl("a"), jf = Cl("r"), Ef = Cl("g"), Cf = Cl("b"), Af = Al("a"), Vf = Al("r"), Sf = Al("g"), If = Al("b");
function Wk(t, r, e, n) {
  const o = {
    a: 255,
    r: r.value * 255,
    g: e.value * 255,
    b: n.value * 255
  };
  return {
    type: mn,
    value: Ii(o)
  };
}
function Uk(t, r, e, n, o) {
  const i = {
    a: r.value * 255,
    r: e.value * 255,
    g: n.value * 255,
    b: o.value * 255
  };
  return {
    type: mn,
    value: Ii(i)
  };
}
function Gk() {
  G("getColorAlpha", [Ge], kf), G("getColorAlpha", [mn], kf), G("getColorRed", [Ge], jf), G("getColorRed", [mn], jf), G("getColorGreen", [Ge], Ef), G("getColorGreen", [mn], Ef), G("getColorBlue", [Ge], Cf), G("getColorBlue", [mn], Cf), G("setColorAlpha", [Ge, bt], Af), G("setColorAlpha", [mn, bt], Af), G("setColorRed", [Ge, bt], Vf), G("setColorRed", [mn, bt], Vf), G("setColorGreen", [Ge, bt], Sf), G("setColorGreen", [mn, bt], Sf), G("setColorBlue", [Ge, bt], If), G("setColorBlue", [mn, bt], If), G("rgb", [bt, bt, bt], Wk), G("argb", [bt, bt, bt, bt], Uk);
}
function ci(t, r, e, n) {
  if (r.value < 0)
    throw new Error("Expecting non-negative number of milliseconds.");
  let o = yn(r.value) / yn(e);
  return Hn(t, o), n && (o = yn(o) % yn(n)), {
    type: Oe,
    value: o
  };
}
const a_ = 1e3, Jk = 60, c_ = 1e3 * 60, qk = 60, u_ = 1e3 * 60 * 60, Kk = 24, Yk = 1e3 * 60 * 60 * 24, Xk = 1e3 * 60 * 60 * 24 * 7;
function Zk(t, r) {
  return ci(t, r, a_, Jk);
}
function Qk(t, r) {
  return ci(t, r, a_);
}
function xk(t, r) {
  return ci(t, r, c_, qk);
}
function $k(t, r) {
  return ci(t, r, c_);
}
function e2(t, r) {
  return ci(t, r, u_, Kk);
}
function t2(t, r) {
  return ci(t, r, u_);
}
function r2(t, r) {
  return ci(t, r, Yk);
}
function n2(t, r) {
  return ci(t, r, Xk);
}
function o2() {
  G("getIntervalSeconds", [Oe], Zk), G("getIntervalTotalSeconds", [Oe], Qk), G("getIntervalMinutes", [Oe], xk), G("getIntervalTotalMinutes", [Oe], $k), G("getIntervalHours", [Oe], e2), G("getIntervalTotalHours", [Oe], t2), G("getIntervalTotalDays", [Oe], r2), G("getIntervalTotalWeeks", [Oe], n2);
}
function i2(t, r) {
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
function ui(t) {
  return (r, e, ...n) => {
    if (n.length === 0)
      throw new Error("Non empty argument list is required.");
    const o = i2(e.value, n.map((i) => i.value));
    return jl(r, o, t);
  };
}
function Qi(t, r) {
  return (e, n, o, ...i) => {
    try {
      return t(e, o, ...i);
    } catch {
      let a = n.value;
      return r === "color" ? a = li(a) : r === "url" && ko(a), {
        type: r,
        value: a
      };
    }
  };
}
const Ms = ui(Ge), Ps = ui(bt), Ns = ui(Oe), zs = ui(qr), Bs = ui(mn), Os = ui(lo), sa = ui(ur), la = ui(cr), Df = Qi(Ms, Ge), Ff = Qi(Ps, bt), Tf = Qi(Ns, Oe), Mf = Qi(zs, qr), ks = Qi(Bs, mn), js = Qi(Os, lo);
function s2(t, r, ...e) {
  try {
    return sa(t, r, ...e);
  } catch {
    return {
      type: ur,
      value: []
    };
  }
}
function l2(t, r, ...e) {
  try {
    return la(t, r, ...e);
  } catch {
    return {
      type: cr,
      value: {}
    };
  }
}
function a2(t, r, e) {
  return {
    type: qr,
    value: e.value in r.value ? 1 : 0
  };
}
function c2(t, r) {
  return {
    type: qr,
    value: Object.keys(r.value).length ? 0 : 1
  };
}
function u2(t, r) {
  return {
    type: Oe,
    value: yn(Object.keys(r.value).length)
  };
}
function Pf(t, r) {
  return {
    type: ur,
    value: Object.keys(r.value)
  };
}
function Nf(t, r) {
  return {
    type: ur,
    value: Object.values(r.value)
  };
}
function f2() {
  const t = {
    type: Ge,
    isVararg: !0
  };
  G("getDictString", [cr, t], Ms), G("getStringFromDict", [cr, t], Ms), G("getDictNumber", [cr, t], Ps), G("getNumberFromDict", [cr, t], Ps), G("getDictInteger", [cr, t], Ns), G("getIntegerFromDict", [cr, t], Ns), G("getDictBoolean", [cr, t], zs), G("getBooleanFromDict", [cr, t], zs), G("getDictColor", [cr, t], Bs), G("getColorFromDict", [cr, t], Bs), G("getDictUrl", [cr, t], Os), G("getUrlFromDict", [cr, t], Os), G("getDictOptString", [Ge, cr, t], Df), G("getOptStringFromDict", [Ge, cr, t], Df), G("getDictOptNumber", [bt, cr, t], Ff), G("getOptNumberFromDict", [bt, cr, t], Ff), G("getDictOptInteger", [Oe, cr, t], Tf), G("getOptIntegerFromDict", [Oe, cr, t], Tf), G("getDictOptBoolean", [qr, cr, t], Mf), G("getOptBooleanFromDict", [qr, cr, t], Mf), G("getDictOptColor", [mn, cr, t], ks), G("getOptColorFromDict", [mn, cr, t], ks), G("getDictOptColor", [Ge, cr, t], ks), G("getOptColorFromDict", [Ge, cr, t], ks), G("getDictOptUrl", [Ge, cr, t], js), G("getOptUrlFromDict", [Ge, cr, t], js), G("getDictOptUrl", [lo, cr, t], js), G("getOptUrlFromDict", [lo, cr, t], js), G("getDictFromDict", [cr, t], la), G("getArrayFromDict", [cr, t], sa), G("getOptArrayFromDict", [cr, t], s2), G("getOptDictFromDict", [cr, t], l2), G("len", [cr], u2), G("getDictKeys", [cr], Pf), G("getDictValues", [cr], Nf), Gr("getString", [cr, t], Ms), Gr("getBoolean", [cr, t], zs), Gr("getInteger", [cr, t], Ns), Gr("getNumber", [cr, t], Ps), Gr("getUrl", [cr, t], Os), Gr("getColor", [cr, t], Bs), Gr("getArray", [cr, t], sa), Gr("getDict", [cr, t], la), Gr("containsKey", [cr, Ge], a2), Gr("isEmpty", [cr], c2), Gr("getKeys", [cr], Pf), Gr("getValues", [cr], Nf);
}
function fi(t, r) {
  return (e, n, o) => {
    if (o.value < 0 || o.value >= n.value.length)
      throw new Error(`Requested index (${o.value}) out of bounds array size (${n.value.length}).`);
    let i = n.value[Number(o.value)], s = typeof i;
    if (t === "array" && !Array.isArray(i) || t !== "array" && s !== t || s === "object" && i === null)
      throw s === "object" && (Array.isArray(i) ? s = "Array" : i === null ? s = "Null" : s = "Dict"), new Error(`Incorrect value type: expected ${ro(r)}, got ${ro(s)}.`);
    if (t === "number" && r === "integer") {
      Hn(e, i);
      try {
        i = yn(i);
      } catch {
        throw new Error("Cannot convert value to integer.");
      }
    }
    return t === "string" && r === "color" && (i = li(i)), t === "string" && r === "url" && ko(i), {
      type: r,
      value: i
    };
  };
}
function xi(t, r) {
  return (e, n, o, i) => {
    try {
      return t(e, n, o);
    } catch {
      let a = i.value;
      return r === "color" ? a = li(a) : r === "url" && ko(a), {
        type: r,
        value: a
      };
    }
  };
}
const Ls = fi("string", "string"), Rs = fi("number", "number"), Hs = fi("number", "integer"), Ws = fi("boolean", "boolean"), Us = fi("string", "color"), Gs = fi("string", "url"), aa = fi("array", "array"), ca = fi("object", "dict"), zf = xi(Ls, "string"), Bf = xi(Rs, "number"), Of = xi(Hs, "integer"), Lf = xi(Ws, "boolean"), Es = xi(Us, "color"), Cs = xi(Gs, "url");
function d2(t, r, e) {
  try {
    return aa(t, r, e);
  } catch {
    return {
      type: ur,
      value: []
    };
  }
}
function _2(t, r, e) {
  try {
    return ca(t, r, e);
  } catch {
    return {
      type: cr,
      value: {}
    };
  }
}
function h2(t, r) {
  return {
    type: Oe,
    value: yn(r.value.length)
  };
}
function p2(t, r) {
  return {
    type: qr,
    value: r.value.length === 0 ? 1 : 0
  };
}
function g2(t, r, e) {
  return r.value.length ? {
    type: ur,
    value: r.value.filter((n) => {
      const o = [];
      if (typeof n == "string")
        yo(n) && o.push([{
          type: mn,
          value: n
        }]), _1(n) && o.push([{
          type: lo,
          value: n
        }]), o.push([{
          type: Ge,
          value: n
        }]);
      else if (typeof n == "number")
        Math.round(n) === n && (Hn(t, n), o.push([{
          type: Oe,
          value: yn(n)
        }])), o.push([{
          type: bt,
          value: n
        }]);
      else if (typeof n == "bigint")
        Hn(t, n), o.push([{
          type: Oe,
          value: n
        }]);
      else if (Array.isArray(n))
        o.push([{
          type: ur,
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
          type: qr,
          value: n ? 1 : 0
        }]);
      else
        throw new Error(`Incorrect value type: ${ro(typeof n)}`);
      let i = {
        type: "missing"
      };
      for (const u of o)
        if (i = n_(e.value, u), "func" in i)
          break;
      let s;
      if ("func" in i)
        s = i.func;
      else {
        const u = e.value[0];
        f_(u.name || "Function", o[0], i, !0);
      }
      const a = s.args[0], l = jl(
        t,
        n,
        typeof a == "string" ? a : a.type
      ), c = s.cb(t, l);
      if (c.type !== qr)
        throw new Error("Function must return boolean value.");
      return c.value;
    })
  } : {
    type: ur,
    value: []
  };
}
function m2() {
  G("getArrayString", [
    ur,
    Oe
  ], Ls), G("getStringFromArray", [
    ur,
    Oe
  ], Ls), G("getArrayNumber", [
    ur,
    Oe
  ], Rs), G("getNumberFromArray", [
    ur,
    Oe
  ], Rs), G("getArrayInteger", [
    ur,
    Oe
  ], Hs), G("getIntegerFromArray", [
    ur,
    Oe
  ], Hs), G("getArrayBoolean", [
    ur,
    Oe
  ], Ws), G("getBooleanFromArray", [
    ur,
    Oe
  ], Ws), G("getArrayColor", [
    ur,
    Oe
  ], Us), G("getColorFromArray", [
    ur,
    Oe
  ], Us), G("getArrayUrl", [
    ur,
    Oe
  ], Gs), G("getUrlFromArray", [
    ur,
    Oe
  ], Gs), G("getArrayFromArray", [
    ur,
    Oe
  ], aa), G("getDictFromArray", [
    ur,
    Oe
  ], ca), G("getArrayOptString", [
    ur,
    Oe,
    Ge
  ], zf), G("getOptStringFromArray", [
    ur,
    Oe,
    Ge
  ], zf), G("getArrayOptNumber", [
    ur,
    Oe,
    bt
  ], Bf), G("getOptNumberFromArray", [
    ur,
    Oe,
    bt
  ], Bf), G("getArrayOptInteger", [
    ur,
    Oe,
    Oe
  ], Of), G("getOptIntegerFromArray", [
    ur,
    Oe,
    Oe
  ], Of), G("getArrayOptBoolean", [
    ur,
    Oe,
    qr
  ], Lf), G("getOptBooleanFromArray", [
    ur,
    Oe,
    qr
  ], Lf), G("getArrayOptColor", [
    ur,
    Oe,
    mn
  ], Es), G("getOptColorFromArray", [
    ur,
    Oe,
    mn
  ], Es), G("getArrayOptColor", [
    ur,
    Oe,
    Ge
  ], Es), G("getOptColorFromArray", [
    ur,
    Oe,
    Ge
  ], Es), G("getArrayOptUrl", [
    ur,
    Oe,
    lo
  ], Cs), G("getOptUrlFromArray", [
    ur,
    Oe,
    lo
  ], Cs), G("getArrayOptUrl", [
    ur,
    Oe,
    Ge
  ], Cs), G("getOptUrlFromArray", [
    ur,
    Oe,
    Ge
  ], Cs), G("getOptArrayFromArray", [
    ur,
    Oe
  ], d2), G("getOptDictFromArray", [
    ur,
    Oe
  ], _2), G("len", [
    ur
  ], h2), Gr("getString", [ur, Oe], Ls), Gr("getInteger", [ur, Oe], Hs), Gr("getNumber", [ur, Oe], Rs), Gr("getBoolean", [ur, Oe], Ws), Gr("getUrl", [ur, Oe], Gs), Gr("getColor", [ur, Oe], Us), Gr("getArray", [ur, Oe], aa), Gr("getDict", [ur, Oe], ca), Gr("isEmpty", [ur], p2), Gr("filter", [ur, d1], g2);
}
function To(t) {
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
      return t === "url" && ko(n.value), {
        type: t,
        value: n.value
      };
    } else t === "url" && ko(i);
    return jl(r, i, t);
  };
}
function b2() {
  G("getStoredIntegerValue", [Ge, Oe], To(Oe)), G("getStoredNumberValue", [Ge, bt], To(bt)), G("getStoredStringValue", [Ge, Ge], To(Ge)), G("getStoredUrlValue", [Ge, lo], To(lo)), G("getStoredUrlValue", [Ge, Ge], To(lo)), G("getStoredColorValue", [Ge, mn], To(mn)), G("getStoredColorValue", [Ge, Ge], To(mn)), G("getStoredBooleanValue", [Ge, qr], To(qr)), G("getStoredArrayValue", [Ge], To(ur)), G("getStoredDictValue", [Ge], To(cr));
}
function y2() {
  return {
    type: bt,
    value: Math.PI
  };
}
function w2(t, r) {
  return {
    type: bt,
    value: r.value / 180 * Math.PI
  };
}
function v2(t, r) {
  return {
    type: bt,
    value: r.value / Math.PI * 180
  };
}
function k2(t, r) {
  return {
    type: bt,
    value: Math.sin(r.value)
  };
}
function j2(t, r) {
  return {
    type: bt,
    value: Math.cos(r.value)
  };
}
function E2(t, r) {
  return {
    type: bt,
    value: Math.tan(r.value)
  };
}
function C2(t, r) {
  const e = Math.tan(r.value);
  if (Math.abs(e) < 1e-12)
    throw new Error("Cotangent is undefined for the given value.");
  return {
    type: bt,
    value: 1 / e
  };
}
function A2(t, r) {
  return {
    type: bt,
    value: Math.atan(r.value)
  };
}
function V2(t, r, e) {
  return {
    type: bt,
    value: Math.atan2(r.value, e.value)
  };
}
function S2(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arcsine is undefined for the given value.");
  return {
    type: bt,
    value: Math.asin(r.value)
  };
}
function I2(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arccosine is undefined for the given value.");
  return {
    type: bt,
    value: Math.acos(r.value)
  };
}
function D2() {
  G("pi", [], y2), G("toRadians", [bt], w2), G("toDegrees", [bt], v2), G("sin", [bt], k2), G("cos", [bt], j2), G("tan", [bt], E2), G("cot", [bt], C2), G("atan", [bt], A2), G("atan2", [bt, bt], V2), G("asin", [bt], S2), G("acos", [bt], I2);
}
function F2() {
  Cv(), xv(), o2(), _k(), Hk(), Gk(), f2(), m2(), b2(), D2();
}
F2();
function T2(t, r) {
  return {
    type: Ge,
    value: r.value
  };
}
function M2(t, r) {
  return {
    type: bt,
    value: r.value
  };
}
function P2(t, r) {
  return Hn(t, r.value), {
    type: Oe,
    value: r.value
  };
}
function N2(t, r) {
  return {
    type: qr,
    value: r.value ? 1 : 0
  };
}
function z2(t, r) {
  const e = xs(Un(t, r.argument));
  switch (r.operator) {
    case "!":
      if (e.type === qr)
        return {
          type: qr,
          value: e.value ? 0 : 1
        };
      Fn(`${r.operator}${bn(e)}`, "A Boolean is expected after a unary not.");
    case "+":
    case "-":
      const n = r.operator === "+" ? 1 : -1;
      if (e.type === Oe) {
        const o = e.value * yn(n);
        return Hn(t, o), {
          type: Oe,
          value: o
        };
      } else {
        if (e.type === bt)
          return {
            type: bt,
            value: e.value * n
          };
        Fn(
          `${r.operator}${bn(e)}`,
          `A Number is expected after a unary ${r.operator === "+" ? "plus" : "minus"}.`
        );
      }
  }
}
function B2(t, r) {
  const e = xs(Un(t, r.test));
  if (e.type === qr)
    return e.value ? Un(t, r.consequent) : Un(t, r.alternate);
  Fn(
    `${bn(e)} ? ${bn(Un(t, r.consequent))} : ${bn(Un(t, r.alternate))}`,
    "Ternary must be called with a Boolean value as a condition."
  );
}
function O2(t, r) {
  try {
    return Un(t, r.test);
  } catch {
    return Un(t, r.alternate);
  }
}
function L2(t, r) {
  let e = "";
  if (r.quasis.length === 2 && r.quasis[0].value === "" && r.quasis[1].value === "")
    return Un(t, r.expressions[0]);
  for (let n = 0; n < r.expressions.length; ++n)
    e += r.quasis[n].value, e += Vi(Un(t, r.expressions[n]), !0);
  return e += r.quasis[r.quasis.length - 1].value, {
    type: Ge,
    value: e
  };
}
function R2(t, r) {
  const e = xs(Un(t, r.left));
  if (e.type !== qr && Fn(
    `${bn(e)} ${r.operator} ...`,
    `'${r.operator}' must be called with boolean operands.`
  ), r.operator === "||" && e.value)
    return e;
  if (r.operator === "&&" && !e.value)
    return {
      type: qr,
      value: 0
    };
  const n = xs(Un(t, r.right));
  return n.type !== qr && Fn(
    `${bn(e)} ${r.operator} ${bn(n)}`,
    `Operator '${r.operator}' cannot be applied to different types: Boolean and ${ro(n.type)}.`
  ), {
    type: qr,
    value: n.value
  };
}
function H2(t, r, e) {
  let n;
  return r.type === Or && e.type === Or ? n = r.value.getTime() === e.value.getTime() : n = r.value === e.value, t === "!=" && (n = !n), {
    type: qr,
    value: n ? 1 : 0
  };
}
function W2(t, r, e) {
  (r.type !== bt && r.type !== Oe && r.type !== Or || e.type !== bt && e.type !== Oe && e.type !== Or) && Fn(
    `${bn(r)} ${t} ${bn(e)}`,
    `Operator '${t}' cannot be applied to ${ro(r.type)} type.`
  );
  let n;
  const o = r.type === Or ? r.value.getTime() : r.value, i = e.type === Or ? e.value.getTime() : e.value;
  return t === ">" ? n = o > i : t === ">=" ? n = o >= i : t === "<" ? n = o < i : n = o <= i, {
    type: qr,
    value: n ? 1 : 0
  };
}
function U2(t, r, e, n) {
  if (e.type !== Ge && e.type !== bt && e.type !== Oe && Fn(
    `${bn(e)} ${r} ${bn(n)}`,
    `Operator '${r}' cannot be applied to ${ro(e.type)} type.`
  ), e.type === Ge)
    return r === "-" && Fn(
      `${bn(e)} - ${bn(n)}`,
      `Operator '${r}' cannot be applied to ${ro(e.type)} type.`
    ), {
      type: Ge,
      value: e.value + n.value
    };
  let o = r === "+" ? e.value + n.value : e.value - n.value;
  if (e.type === Oe)
    try {
      o = Si(t, o), Hn(t, o);
    } catch (i) {
      Fn(
        `${bn(e)} ${r} ${bn(n)}`,
        i.message
      );
    }
  return {
    type: e.type,
    value: o
  };
}
function G2(t, r, e, n) {
  e.type !== Oe && e.type !== bt && Fn(
    `${bn(e)} ${r} ${bn(n)}`,
    `Operator '${r}' cannot be applied to ${ro(e.type)} type.`
  );
  let o;
  if (r === "*")
    o = e.value * n.value;
  else if (r === "/" || r === "%")
    Number(n.value) === 0 && Fn(
      `${bn(e)} ${r} ${bn(n)}`,
      "Division by zero is not supported."
    ), r === "/" ? o = e.value / n.value : o = e.value % n.value;
  else
    throw new Error(`Unsupported operation ${r}`);
  if (e.type === Oe)
    try {
      o = Si(t, o), Hn(t, o);
    } catch (i) {
      Fn(
        `${bn(e)} ${r} ${bn(n)}`,
        i.message
      );
    }
  return {
    type: e.type,
    value: o
  };
}
function J2(t, r) {
  const e = r.operator;
  let n = Un(t, r.left), o = Un(t, r.right);
  if ((n.type === "number" && o.type === "integer" || n.type === "integer" && o.type === "number") && (n.type === "integer" ? n = Ql(n) : o.type === "integer" && (o = Ql(o))), n.type !== o.type && Fn(
    `${bn(n)} ${r.operator} ${bn(o)}`,
    `Operator '${e}' cannot be applied to different types: ${ro(n.type)} and ${ro(o.type)}.`
  ), e === "==" || e === "!=")
    return H2(e, n, o);
  if (e === ">" || e === ">=" || e === "<" || e === "<=")
    return W2(e, n, o);
  if (e === "+" || e === "-")
    return U2(t, e, n, o);
  if (e === "/" || e === "*" || e === "%")
    return G2(t, e, n, o);
  throw new Error(`Unsupported operation ${e}`);
}
function nl(t) {
  return t.map(bn).join(", ");
}
function q2(t, r) {
  const e = r.callee.name;
  let n, o = r.arguments.map((a) => Un(t, a));
  const i = e + ":" + o.map((a) => a.type).join("#");
  let s;
  if (t.customFunctions && (s = na(t.customFunctions, e, o)), !s || !("func" in s))
    if (ta.has(i))
      s = {
        func: ta.get(i),
        conversions: 0
      };
    else {
      const a = na(Fs, e, o);
      ("func" in a || !s || s.type === "missing") && (s = a);
    }
  if (s && (("expected" in s || "type" in s && s.type === "missing") && f_(e, o, s), n = s.func, s.conversions && (o = o_(n, o))), !n)
    throw new Error("Function not found");
  try {
    return n.cb(t, ...o);
  } catch (a) {
    if (a && a instanceof Va)
      throw a;
    const l = `${e}(${nl(o)})`;
    Fn(l, a.message);
  }
}
function f_(t, r, e, n = !1) {
  const o = r.map((a) => ro(a.type)).join(", "), i = `${t}(${nl(r)})`, s = n ? p1 : Fn;
  if (e.type === "few" && r.length === 0 && e.hasOverloads)
    s(i, "Function requires non empty argument list.");
  else if (e.type === "many" || e.type === "few" || e.type === "mismatch")
    if (e.hasOverloads)
      s(i, `Function has no matching overload for given argument types: ${o}.`);
    else if (e.type === "many" || e.type === "few")
      e.def.args.some((a) => typeof a == "object" && a.isVararg) ? s(i, `At least ${e.def.args.length} argument(s) expected.`) : s(i, `Exactly ${e.def.args.length} argument(s) expected.`);
    else {
      const a = e.def.args.map((l) => ro(typeof l == "string" ? l : l.type)).join(", ");
      s(i, `Invalid argument type: expected ${a}, got ${o}.`);
    }
  else
    s(i, `Unknown function name: ${t}.`);
}
function K2(t, r) {
  const e = r.method.name;
  let n, o = [r.object, ...r.arguments].map((s) => Un(t, s));
  const i = e + ":" + o.map((s) => s.type).join("#");
  if (ra.has(i))
    n = ra.get(i);
  else {
    const s = na(Ts, e, o);
    if ("expected" in s || "type" in s && s.type === "missing") {
      const a = o.slice(1).map((c) => ro(c.type)).join(", "), l = `${e}(${nl(o.slice(1))})`;
      s.type === "few" && o.length === 1 ? Fn(l, "Method requires non empty argument list.") : s.type === "many" ? Fn(l, `Method has no matching overload for given argument types: ${a}.`) : s.type === "few" || s.type === "mismatch" ? Fn(l, `Method has no matching overload for given argument types: ${a}.`) : Fn(l, `Unknown method name: ${e}.`);
    }
    n = s.func, s.conversions && (o = o_(n, o));
  }
  if (!n)
    throw new Error("Method not found");
  try {
    return n.cb(t, ...o);
  } catch (s) {
    if (s && s instanceof Va)
      throw s;
    const a = `${e}(${nl(o.slice(1))})`;
    Fn(a, s.message);
  }
}
function Y2(t, r) {
  var i;
  const e = r.id.name, n = (i = t.customFunctions) == null ? void 0 : i.get(e);
  if (n)
    return {
      type: "function",
      value: n
    };
  const o = t.variables.get(e);
  if (o)
    return I1(o);
  throw new Error(`Variable '${e}' is missing.`);
}
const Rf = {
  StringLiteral: T2,
  NumberLiteral: M2,
  IntegerLiteral: P2,
  BooleanLiteral: N2,
  UnaryExpression: z2,
  ConditionalExpression: B2,
  TryExpression: O2,
  TemplateLiteral: L2,
  LogicalExpression: R2,
  BinaryExpression: J2,
  CallExpression: q2,
  MethodExpression: K2,
  Variable: Y2
};
function Un(t, r) {
  if (r.type in Rf)
    return Rf[r.type](t, r);
  throw new Error("Unsupported expression");
}
function Fa(t, r, e, n, o) {
  try {
    const i = {
      variables: t,
      customFunctions: r,
      warnings: [],
      store: e,
      weekStartDay: (o == null ? void 0 : o.weekStartDay) || 0
    };
    return {
      result: Un(i, n),
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
function X2(t, r) {
  return r && r[3] && r[7] ? { type: "ConditionalExpression", test: t, consequent: r[3], alternate: r[7] } : t;
}
function Z2(t, r) {
  return r && r[3] ? { type: "TryExpression", test: t, alternate: r[3] } : t;
}
function As(t, r) {
  return r.length ? r.reduce((e, n) => ({
    type: "BinaryExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), t) : t;
}
function Hf(t, r) {
  return r.length ? r.reduce((e, n) => ({
    type: "LogicalExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), t) : t;
}
function Q2(t, r) {
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
function x2(t) {
  return t === "true" || t === "false" ? { type: "BooleanLiteral", value: t === "true" } : { type: "Variable", id: { type: "Identifier", name: t } };
}
function Wf(t) {
  if (t.every((e) => typeof e == "string"))
    return { type: "StringLiteral", value: t.join("") };
  let r = t.reduce((e, n) => (typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e), []).reduce((e, n) => (typeof n == "string" ? e.quasis.push({ type: "StringLiteral", value: n }) : (e.quasis.length === e.expressions.length && e.quasis.push({ type: "StringLiteral", value: "" }), e.expressions.push(n)), e), {
    type: "TemplateLiteral",
    quasis: [],
    expressions: []
  });
  return r.quasis.length === r.expressions.length && r.quasis.push({ type: "StringLiteral", value: "" }), r;
}
function $2(t) {
  try {
    return yn(t);
  } catch {
    throw new Error(`Value ${t} can't be converted to Integer type.`);
  }
}
function Uf(t) {
  if (t === "'" || t === "\\")
    return t;
  throw new Error("Incorrect string escape");
}
function e3(t, r) {
  function e() {
    this.constructor = t;
  }
  e.prototype = r.prototype, t.prototype = new e();
}
function qi(t, r, e, n) {
  var o = Error.call(this, t);
  return Object.setPrototypeOf && Object.setPrototypeOf(o, qi.prototype), o.expected = r, o.found = e, o.location = n, o.name = "SyntaxError", o;
}
e3(qi, Error);
function Rl(t, r, e) {
  return e = e || " ", t.length > r ? t : (r -= t.length, e += e.repeat(r), t + e.slice(0, r));
}
qi.prototype.format = function(t) {
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
      var a = this.location.end, l = Rl("", i.line.toString().length, " "), c = e[o.line - 1], u = o.line === a.line ? a.column : c.length + 1, f = u - o.column || 1;
      r += `
 --> ` + s + `
` + l + ` |
` + i.line + " | " + c + `
` + l + " | " + Rl("", o.column - 1, " ") + Rl("", f, "^");
    } else
      r += `
 at ` + s;
  }
  return r;
};
qi.buildMessage = function(t, r) {
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
function d_(t, r) {
  r = r !== void 0 ? r : {};
  var e = {}, n = r.grammarSource, o = { start: $r, JsonStringContents: kn }, i = $r, s = "@{", a = "}", l = "@{}", c = "\\", u = "?", f = ":", _ = "!:", p = "||", m = "&&", h = "==", y = "!=", w = ">=", D = ">", z = "<=", B = "<", ee = "+", ue = "-", M = "/", q = "*", ae = "%", A = "!", F = ".", P = "(", O = ")", J = ",", he = "'", fe = "e", Ae = "E", me = /^[^}]/, Ie = /^[^'}]/, re = /^[0-9]/, tt = /^[a-zA-Z_]/, qe = /^[a-zA-Z_0-9]/, Ke = /^[ \t\r\n]/, ve = Ze("@{", !1), Te = Ze("}", !1), pe = Ze("@{}", !1), ce = Ze("\\", !1), be = Yt(), x = ht(["}"], !0, !1), ge = Ze("?", !1), oe = Ze(":", !1), Se = Ze("!:", !1), Je = Ze("||", !1), Ye = Ze("&&", !1), te = Ze("==", !1), Re = Ze("!=", !1), ze = Ze(">=", !1), at = Ze(">", !1), ct = Ze("<=", !1), nt = Ze("<", !1), jt = Ze("+", !1), st = Ze("-", !1), Bt = Ze("/", !1), dt = Ze("*", !1), Z = Ze("%", !1), de = Ze("!", !1), ut = Ze(".", !1), De = Ze("(", !1), N = Ze(")", !1), Vt = Ze(",", !1), pt = kr("string"), Dt = Ze("'", !1), Nt = ht(["'", "}"], !0, !1), ot = kr("integer"), Q = ht([["0", "9"]], !1, !1), It = kr("number"), zt = Ze("e", !1), tr = Ze("E", !1), Xt = ht([["a", "z"], ["A", "Z"], "_"], !1, !1), ye = ht([["a", "z"], ["A", "Z"], "_", ["0", "9"]], !1, !1), Ue = kr("whitespace"), mt = ht([" ", "	", "\r", `
`], !1, !1), ke = function(b) {
    return b;
  }, rt = function(b) {
    return Wf(b);
  }, We = function(b) {
    return b;
  }, nr = function() {
    return "";
  }, Le = function() {
    return Ht();
  }, kt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, Tt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, Mt = function(b) {
    return b;
  }, hr = function(b) {
    return Uf(b);
  }, Be = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, Ct = function(b, I) {
    return X2(b, I);
  }, sr = function(b, I) {
    return Z2(b, I);
  }, rr = function(b, I) {
    return Hf(b, I);
  }, $t = function(b, I) {
    return Hf(b, I);
  }, mr = function(b, I) {
    return As(b, I);
  }, Ar = function(b, I) {
    return As(b, I);
  }, Ot = function(b, I) {
    return As(b, I);
  }, Er = function(b, I) {
    return As(b, I);
  }, Y = function(b) {
    return b;
  }, gt = function(b) {
    return b;
  }, Kt = function(b, I) {
    return { type: "UnaryExpression", operator: b, argument: I };
  }, At = function() {
    throw new Error("Incorrect unary operator");
  }, Cr = function(b, I) {
    return Q2(b, I);
  }, Tr = function(b, I) {
    return { type: "CallExpression", callee: b, arguments: I };
  }, wr = function(b, I) {
    return [b, ...I];
  }, Nr = function(b) {
    return b;
  }, Yr = function(b) {
    return b;
  }, or = function(b) {
    return Wf(b);
  }, lt = function(b) {
    return b;
  }, St = function() {
    return "";
  }, er = function() {
    return Ht();
  }, Qt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, pr = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, _t = function(b) {
    return b;
  }, ie = function(b) {
    return Uf(b);
  }, vt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, ir = function() {
    return { type: "IntegerLiteral", value: $2(Ht()) };
  }, vr = function() {
    return { type: "NumberLiteral", value: parseFloat(Ht()) };
  }, ar = function() {
    return { type: "NumberLiteral", value: parseFloat(Ht()) };
  }, j = function() {
    const b = Ht();
    if (/\.\./.test(b) || /\.$/.test(b))
      throw new Error("Unexpected token: .");
    return x2(b);
  }, se = function() {
    return { type: "Identifier", name: Ht() };
  }, d = 0, R = 0, Pe = [{ line: 1, column: 1 }], Xe = 0, je = [], H = 0, Pt;
  if ("startRule" in r) {
    if (!(r.startRule in o))
      throw new Error(`Can't start parsing from rule "` + r.startRule + '".');
    i = o[r.startRule];
  }
  function Ht() {
    return t.substring(R, d);
  }
  function Ze(b, I) {
    return { type: "literal", text: b, ignoreCase: I };
  }
  function ht(b, I, $) {
    return { type: "class", parts: b, inverted: I, ignoreCase: $ };
  }
  function Yt() {
    return { type: "any" };
  }
  function Mr() {
    return { type: "end" };
  }
  function kr(b) {
    return { type: "other", description: b };
  }
  function Wr(b) {
    var I = Pe[b], $;
    if (I)
      return I;
    for ($ = b - 1; !Pe[$]; )
      $--;
    for (I = Pe[$], I = {
      line: I.line,
      column: I.column
    }; $ < b; )
      t.charCodeAt($) === 10 ? (I.line++, I.column = 1) : I.column++, $++;
    return Pe[b] = I, I;
  }
  function Mn(b, I, $) {
    var L = Wr(b), Ce = Wr(I), we = {
      source: n,
      start: {
        offset: b,
        line: L.line,
        column: L.column
      },
      end: {
        offset: I,
        line: Ce.line,
        column: Ce.column
      }
    };
    return we;
  }
  function Ve(b) {
    d < Xe || (d > Xe && (Xe = d, je = []), je.push(b));
  }
  function Zr(b, I, $) {
    return new qi(
      qi.buildMessage(b, I),
      b,
      I,
      $
    );
  }
  function $r() {
    var b, I;
    return b = d, qt(), I = C(), I !== e ? (qt(), R = b, b = ke(I)) : (d = b, b = e), b;
  }
  function kn() {
    var b, I, $;
    for (b = d, I = [], $ = v(); $ !== e; )
      I.push($), $ = v();
    return R = b, I = rt(I), b = I, b;
  }
  function v() {
    var b, I, $, L, Ce;
    if (b = d, t.substr(d, 2) === s ? (I = s, d += 2) : (I = e, H === 0 && Ve(ve)), I !== e ? ($ = qt(), L = C(), L !== e ? (qt(), t.charCodeAt(d) === 125 ? (Ce = a, d++) : (Ce = e, H === 0 && Ve(Te)), Ce !== e ? (R = b, b = We(L)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.substr(d, 3) === l ? (I = l, d += 3) : (I = e, H === 0 && Ve(pe)), I !== e && (R = b, I = nr()), b = I, b === e && (b = d, I = d, H++, t.charCodeAt(d) === 92 ? ($ = c, d++) : ($ = e, H === 0 && Ve(ce)), $ === e && (t.substr(d, 2) === s ? ($ = s, d += 2) : ($ = e, H === 0 && Ve(ve))), H--, $ === e ? I = void 0 : (d = I, I = e), I !== e ? (t.length > d ? ($ = t.charAt(d), d++) : ($ = e, H === 0 && Ve(be)), $ !== e ? (R = b, b = Le()) : (d = b, b = e)) : (d = b, b = e), b === e))) {
      if (b = d, t.substr(d, 2) === s ? (I = s, d += 2) : (I = e, H === 0 && Ve(ve)), I !== e) {
        if ($ = [], me.test(t.charAt(d)) ? (L = t.charAt(d), d++) : (L = e, H === 0 && Ve(x)), L !== e)
          for (; L !== e; )
            $.push(L), me.test(t.charAt(d)) ? (L = t.charAt(d), d++) : (L = e, H === 0 && Ve(x));
        else
          $ = e;
        $ !== e ? (t.charCodeAt(d) === 125 ? (L = a, d++) : (L = e, H === 0 && Ve(Te)), L !== e ? (R = b, b = kt()) : (d = b, b = e)) : (d = b, b = e);
      } else
        d = b, b = e;
      b === e && (b = d, t.substr(d, 2) === s ? (I = s, d += 2) : (I = e, H === 0 && Ve(ve)), I !== e && (R = b, I = Tt()), b = I, b === e && (b = d, t.charCodeAt(d) === 92 ? (I = c, d++) : (I = e, H === 0 && Ve(ce)), I !== e ? (t.substr(d, 2) === s ? ($ = s, d += 2) : ($ = e, H === 0 && Ve(ve)), $ !== e ? (R = b, b = Mt($)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (I = c, d++) : (I = e, H === 0 && Ve(ce)), I !== e ? (t.length > d ? ($ = t.charAt(d), d++) : ($ = e, H === 0 && Ve(be)), $ !== e ? (R = b, b = hr($)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (I = c, d++) : (I = e, H === 0 && Ve(ce)), I !== e && (R = b, I = Be()), b = I))));
    }
    return b;
  }
  function C() {
    var b, I, $, L, Ce, we, Wt, Gt, Xr, Br, Ur;
    return b = d, I = S(), I !== e ? ($ = d, L = qt(), t.charCodeAt(d) === 63 ? (Ce = u, d++) : (Ce = e, H === 0 && Ve(ge)), Ce !== e ? (we = qt(), Wt = C(), Wt !== e ? (Gt = qt(), t.charCodeAt(d) === 58 ? (Xr = f, d++) : (Xr = e, H === 0 && Ve(oe)), Xr !== e ? (Br = qt(), Ur = C(), Ur !== e ? (L = [L, Ce, we, Wt, Gt, Xr, Br, Ur], $ = L) : (d = $, $ = e)) : (d = $, $ = e)) : (d = $, $ = e)) : (d = $, $ = e), $ === e && ($ = null), R = b, b = Ct(I, $)) : (d = b, b = e), b;
  }
  function S() {
    var b, I, $, L, Ce, we, Wt;
    return b = d, I = le(), I !== e ? ($ = d, L = qt(), t.substr(d, 2) === _ ? (Ce = _, d += 2) : (Ce = e, H === 0 && Ve(Se)), Ce !== e ? (we = qt(), Wt = C(), Wt !== e ? (L = [L, Ce, we, Wt], $ = L) : (d = $, $ = e)) : (d = $, $ = e), $ === e && ($ = null), R = b, b = sr(I, $)) : (d = b, b = e), b;
  }
  function le() {
    var b, I, $, L, Ce, we, Wt, Gt;
    if (b = d, I = W(), I !== e) {
      for ($ = [], L = d, Ce = qt(), t.substr(d, 2) === p ? (we = p, d += 2) : (we = e, H === 0 && Ve(Je)), we !== e ? (Wt = qt(), Gt = W(), Gt !== e ? (Ce = [Ce, we, Wt, Gt], L = Ce) : (d = L, L = e)) : (d = L, L = e); L !== e; )
        $.push(L), L = d, Ce = qt(), t.substr(d, 2) === p ? (we = p, d += 2) : (we = e, H === 0 && Ve(Je)), we !== e ? (Wt = qt(), Gt = W(), Gt !== e ? (Ce = [Ce, we, Wt, Gt], L = Ce) : (d = L, L = e)) : (d = L, L = e);
      R = b, b = rr(I, $);
    } else
      d = b, b = e;
    return b;
  }
  function W() {
    var b, I, $, L, Ce, we, Wt, Gt;
    if (b = d, I = et(), I !== e) {
      for ($ = [], L = d, Ce = qt(), t.substr(d, 2) === m ? (we = m, d += 2) : (we = e, H === 0 && Ve(Ye)), we !== e ? (Wt = qt(), Gt = et(), Gt !== e ? (Ce = [Ce, we, Wt, Gt], L = Ce) : (d = L, L = e)) : (d = L, L = e); L !== e; )
        $.push(L), L = d, Ce = qt(), t.substr(d, 2) === m ? (we = m, d += 2) : (we = e, H === 0 && Ve(Ye)), we !== e ? (Wt = qt(), Gt = et(), Gt !== e ? (Ce = [Ce, we, Wt, Gt], L = Ce) : (d = L, L = e)) : (d = L, L = e);
      R = b, b = $t(I, $);
    } else
      d = b, b = e;
    return b;
  }
  function et() {
    var b, I, $, L, Ce, we, Wt, Gt;
    if (b = d, I = Fe(), I !== e) {
      for ($ = [], L = d, Ce = qt(), t.substr(d, 2) === h ? (we = h, d += 2) : (we = e, H === 0 && Ve(te)), we === e && (t.substr(d, 2) === y ? (we = y, d += 2) : (we = e, H === 0 && Ve(Re))), we !== e ? (Wt = qt(), Gt = Fe(), Gt !== e ? (Ce = [Ce, we, Wt, Gt], L = Ce) : (d = L, L = e)) : (d = L, L = e); L !== e; )
        $.push(L), L = d, Ce = qt(), t.substr(d, 2) === h ? (we = h, d += 2) : (we = e, H === 0 && Ve(te)), we === e && (t.substr(d, 2) === y ? (we = y, d += 2) : (we = e, H === 0 && Ve(Re))), we !== e ? (Wt = qt(), Gt = Fe(), Gt !== e ? (Ce = [Ce, we, Wt, Gt], L = Ce) : (d = L, L = e)) : (d = L, L = e);
      R = b, b = mr(I, $);
    } else
      d = b, b = e;
    return b;
  }
  function Fe() {
    var b, I, $, L, Ce, we, Wt, Gt;
    if (b = d, I = Zt(), I !== e) {
      for ($ = [], L = d, Ce = qt(), t.substr(d, 2) === w ? (we = w, d += 2) : (we = e, H === 0 && Ve(ze)), we === e && (t.charCodeAt(d) === 62 ? (we = D, d++) : (we = e, H === 0 && Ve(at)), we === e && (t.substr(d, 2) === z ? (we = z, d += 2) : (we = e, H === 0 && Ve(ct)), we === e && (t.charCodeAt(d) === 60 ? (we = B, d++) : (we = e, H === 0 && Ve(nt))))), we !== e ? (Wt = qt(), Gt = Zt(), Gt !== e ? (Ce = [Ce, we, Wt, Gt], L = Ce) : (d = L, L = e)) : (d = L, L = e); L !== e; )
        $.push(L), L = d, Ce = qt(), t.substr(d, 2) === w ? (we = w, d += 2) : (we = e, H === 0 && Ve(ze)), we === e && (t.charCodeAt(d) === 62 ? (we = D, d++) : (we = e, H === 0 && Ve(at)), we === e && (t.substr(d, 2) === z ? (we = z, d += 2) : (we = e, H === 0 && Ve(ct)), we === e && (t.charCodeAt(d) === 60 ? (we = B, d++) : (we = e, H === 0 && Ve(nt))))), we !== e ? (Wt = qt(), Gt = Zt(), Gt !== e ? (Ce = [Ce, we, Wt, Gt], L = Ce) : (d = L, L = e)) : (d = L, L = e);
      R = b, b = Ar(I, $);
    } else
      d = b, b = e;
    return b;
  }
  function Zt() {
    var b, I, $, L, Ce, we, Wt, Gt;
    if (b = d, I = Ft(), I !== e) {
      for ($ = [], L = d, Ce = qt(), t.charCodeAt(d) === 43 ? (we = ee, d++) : (we = e, H === 0 && Ve(jt)), we === e && (t.charCodeAt(d) === 45 ? (we = ue, d++) : (we = e, H === 0 && Ve(st))), we !== e ? (Wt = qt(), Gt = Ft(), Gt !== e ? (Ce = [Ce, we, Wt, Gt], L = Ce) : (d = L, L = e)) : (d = L, L = e); L !== e; )
        $.push(L), L = d, Ce = qt(), t.charCodeAt(d) === 43 ? (we = ee, d++) : (we = e, H === 0 && Ve(jt)), we === e && (t.charCodeAt(d) === 45 ? (we = ue, d++) : (we = e, H === 0 && Ve(st))), we !== e ? (Wt = qt(), Gt = Ft(), Gt !== e ? (Ce = [Ce, we, Wt, Gt], L = Ce) : (d = L, L = e)) : (d = L, L = e);
      R = b, b = Ot(I, $);
    } else
      d = b, b = e;
    return b;
  }
  function Ft() {
    var b, I, $, L, Ce, we, Wt, Gt;
    if (b = d, I = Qe(), I !== e) {
      for ($ = [], L = d, Ce = qt(), t.charCodeAt(d) === 47 ? (we = M, d++) : (we = e, H === 0 && Ve(Bt)), we === e && (t.charCodeAt(d) === 42 ? (we = q, d++) : (we = e, H === 0 && Ve(dt)), we === e && (t.charCodeAt(d) === 37 ? (we = ae, d++) : (we = e, H === 0 && Ve(Z)))), we !== e ? (Wt = qt(), Gt = Qe(), Gt !== e ? (Ce = [Ce, we, Wt, Gt], L = Ce) : (d = L, L = e)) : (d = L, L = e); L !== e; )
        $.push(L), L = d, Ce = qt(), t.charCodeAt(d) === 47 ? (we = M, d++) : (we = e, H === 0 && Ve(Bt)), we === e && (t.charCodeAt(d) === 42 ? (we = q, d++) : (we = e, H === 0 && Ve(dt)), we === e && (t.charCodeAt(d) === 37 ? (we = ae, d++) : (we = e, H === 0 && Ve(Z)))), we !== e ? (Wt = qt(), Gt = Qe(), Gt !== e ? (Ce = [Ce, we, Wt, Gt], L = Ce) : (d = L, L = e)) : (d = L, L = e);
      R = b, b = Er(I, $);
    } else
      d = b, b = e;
    return b;
  }
  function Qe() {
    var b, I, $, L;
    return b = d, I = d, H++, t.charCodeAt(d) === 45 ? ($ = ue, d++) : ($ = e, H === 0 && Ve(st)), H--, $ !== e ? (d = I, I = void 0) : I = e, I !== e ? ($ = Zn(), $ !== e ? (R = b, b = Y($)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, I = d, H++, t.charCodeAt(d) === 45 ? ($ = ue, d++) : ($ = e, H === 0 && Ve(st)), H--, $ !== e ? (d = I, I = void 0) : I = e, I !== e ? ($ = In(), $ !== e ? (R = b, b = gt($)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 33 ? (I = A, d++) : (I = e, H === 0 && Ve(de)), I === e && (t.charCodeAt(d) === 43 ? (I = ee, d++) : (I = e, H === 0 && Ve(jt)), I === e && (t.charCodeAt(d) === 45 ? (I = ue, d++) : (I = e, H === 0 && Ve(st)))), I !== e ? ($ = qt(), L = xt(), L === e && (L = yt()), L !== e ? (R = b, b = Kt(I, L)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = yt()))), b;
  }
  function xt() {
    var b, I;
    return b = d, t.charCodeAt(d) === 43 ? (I = ee, d++) : (I = e, H === 0 && Ve(jt)), I === e && (t.charCodeAt(d) === 45 ? (I = ue, d++) : (I = e, H === 0 && Ve(st))), I !== e && (R = b, I = At()), b = I, b;
  }
  function yt() {
    var b, I, $, L, Ce, we, Wt, Gt, Xr, Br, Ur, Do, co, Qn, Pn;
    if (b = d, I = Ir(), I !== e) {
      for ($ = [], L = d, Ce = qt(), t.charCodeAt(d) === 46 ? (we = F, d++) : (we = e, H === 0 && Ve(ut)), we !== e ? (Wt = qt(), Gt = io(), Gt !== e ? (Xr = qt(), Br = d, t.charCodeAt(d) === 40 ? (Ur = P, d++) : (Ur = e, H === 0 && Ve(De)), Ur !== e ? (Do = qt(), co = Dr(), co !== e ? (Qn = qt(), t.charCodeAt(d) === 41 ? (Pn = O, d++) : (Pn = e, H === 0 && Ve(N)), Pn !== e ? (Ur = [Ur, Do, co, Qn, Pn], Br = Ur) : (d = Br, Br = e)) : (d = Br, Br = e)) : (d = Br, Br = e), Br === e && (Br = null), Ce = [Ce, we, Wt, Gt, Xr, Br], L = Ce) : (d = L, L = e)) : (d = L, L = e); L !== e; )
        $.push(L), L = d, Ce = qt(), t.charCodeAt(d) === 46 ? (we = F, d++) : (we = e, H === 0 && Ve(ut)), we !== e ? (Wt = qt(), Gt = io(), Gt !== e ? (Xr = qt(), Br = d, t.charCodeAt(d) === 40 ? (Ur = P, d++) : (Ur = e, H === 0 && Ve(De)), Ur !== e ? (Do = qt(), co = Dr(), co !== e ? (Qn = qt(), t.charCodeAt(d) === 41 ? (Pn = O, d++) : (Pn = e, H === 0 && Ve(N)), Pn !== e ? (Ur = [Ur, Do, co, Qn, Pn], Br = Ur) : (d = Br, Br = e)) : (d = Br, Br = e)) : (d = Br, Br = e), Br === e && (Br = null), Ce = [Ce, we, Wt, Gt, Xr, Br], L = Ce) : (d = L, L = e)) : (d = L, L = e);
      R = b, b = Cr(I, $);
    } else
      d = b, b = e;
    return b;
  }
  function Ir() {
    var b, I, $, L, Ce;
    return b = d, I = io(), I !== e ? (qt(), t.charCodeAt(d) === 40 ? ($ = P, d++) : ($ = e, H === 0 && Ve(De)), $ !== e ? (qt(), L = Dr(), L !== e ? (qt(), t.charCodeAt(d) === 41 ? (Ce = O, d++) : (Ce = e, H === 0 && Ve(N)), Ce !== e ? (R = b, b = Tr(I, L)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = jn()), b;
  }
  function Dr() {
    var b, I, $, L, Ce, we;
    if (b = d, I = C(), I !== e) {
      for ($ = [], L = d, qt(), t.charCodeAt(d) === 44 ? (Ce = J, d++) : (Ce = e, H === 0 && Ve(Vt)), Ce !== e ? (qt(), we = C(), we !== e ? L = we : (d = L, L = e)) : (d = L, L = e); L !== e; )
        $.push(L), L = d, qt(), t.charCodeAt(d) === 44 ? (Ce = J, d++) : (Ce = e, H === 0 && Ve(Vt)), Ce !== e ? (qt(), we = C(), we !== e ? L = we : (d = L, L = e)) : (d = L, L = e);
      R = b, b = wr(I, $);
    } else
      d = b, b = e;
    return b === e && (b = qt()), b;
  }
  function jn() {
    var b, I, $, L;
    return b = Jn(), b === e && (b = sn(), b === e && (b = Zn(), b === e && (b = In(), b === e && (b = d, t.charCodeAt(d) === 40 ? (I = P, d++) : (I = e, H === 0 && Ve(De)), I !== e ? (qt(), $ = C(), $ !== e ? (qt(), t.charCodeAt(d) === 41 ? (L = O, d++) : (L = e, H === 0 && Ve(N)), L !== e ? (R = b, b = Nr($)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e))))), b;
  }
  function sn() {
    var b, I, $, L;
    return H++, b = d, t.charCodeAt(d) === 39 ? (I = he, d++) : (I = e, H === 0 && Ve(Dt)), I !== e ? ($ = un(), t.charCodeAt(d) === 39 ? (L = he, d++) : (L = e, H === 0 && Ve(Dt)), L !== e ? (R = b, b = Yr($)) : (d = b, b = e)) : (d = b, b = e), H--, b === e && (I = e, H === 0 && Ve(pt)), b;
  }
  function un() {
    var b, I, $;
    for (b = d, I = [], $ = fn(); $ !== e; )
      I.push($), $ = fn();
    return R = b, I = or(I), b = I, b;
  }
  function fn() {
    var b, I, $, L, Ce;
    if (b = d, t.substr(d, 2) === s ? (I = s, d += 2) : (I = e, H === 0 && Ve(ve)), I !== e ? ($ = qt(), L = C(), L !== e ? (qt(), t.charCodeAt(d) === 125 ? (Ce = a, d++) : (Ce = e, H === 0 && Ve(Te)), Ce !== e ? (R = b, b = lt(L)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.substr(d, 3) === l ? (I = l, d += 3) : (I = e, H === 0 && Ve(pe)), I !== e && (R = b, I = St()), b = I, b === e && (b = d, I = d, H++, t.charCodeAt(d) === 92 ? ($ = c, d++) : ($ = e, H === 0 && Ve(ce)), $ === e && (t.charCodeAt(d) === 39 ? ($ = he, d++) : ($ = e, H === 0 && Ve(Dt)), $ === e && (t.substr(d, 2) === s ? ($ = s, d += 2) : ($ = e, H === 0 && Ve(ve)))), H--, $ === e ? I = void 0 : (d = I, I = e), I !== e ? (t.length > d ? ($ = t.charAt(d), d++) : ($ = e, H === 0 && Ve(be)), $ !== e ? (R = b, b = er()) : (d = b, b = e)) : (d = b, b = e), b === e))) {
      if (b = d, t.substr(d, 2) === s ? (I = s, d += 2) : (I = e, H === 0 && Ve(ve)), I !== e) {
        if ($ = [], Ie.test(t.charAt(d)) ? (L = t.charAt(d), d++) : (L = e, H === 0 && Ve(Nt)), L !== e)
          for (; L !== e; )
            $.push(L), Ie.test(t.charAt(d)) ? (L = t.charAt(d), d++) : (L = e, H === 0 && Ve(Nt));
        else
          $ = e;
        $ !== e ? (t.charCodeAt(d) === 125 ? (L = a, d++) : (L = e, H === 0 && Ve(Te)), L !== e ? (R = b, b = Qt()) : (d = b, b = e)) : (d = b, b = e);
      } else
        d = b, b = e;
      b === e && (b = d, t.substr(d, 2) === s ? (I = s, d += 2) : (I = e, H === 0 && Ve(ve)), I !== e && (R = b, I = pr()), b = I, b === e && (b = d, t.charCodeAt(d) === 92 ? (I = c, d++) : (I = e, H === 0 && Ve(ce)), I !== e ? (t.substr(d, 2) === s ? ($ = s, d += 2) : ($ = e, H === 0 && Ve(ve)), $ !== e ? (R = b, b = _t($)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (I = c, d++) : (I = e, H === 0 && Ve(ce)), I !== e ? (t.length > d ? ($ = t.charAt(d), d++) : ($ = e, H === 0 && Ve(be)), $ !== e ? (R = b, b = ie($)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (I = c, d++) : (I = e, H === 0 && Ve(ce)), I !== e && (R = b, I = vt()), b = I))));
    }
    return b;
  }
  function In() {
    var b, I, $;
    if (H++, b = d, t.charCodeAt(d) === 45 ? d++ : H === 0 && Ve(st), I = [], re.test(t.charAt(d)) ? ($ = t.charAt(d), d++) : ($ = e, H === 0 && Ve(Q)), $ !== e)
      for (; $ !== e; )
        I.push($), re.test(t.charAt(d)) ? ($ = t.charAt(d), d++) : ($ = e, H === 0 && Ve(Q));
    else
      I = e;
    return I !== e ? (R = b, b = ir()) : (d = b, b = e), H--, b === e && H === 0 && Ve(ot), b;
  }
  function Zn() {
    var b, I, $, L, Ce, we, Wt, Gt, Xr;
    for (H++, b = d, t.charCodeAt(d) === 45 ? d++ : H === 0 && Ve(st), I = [], re.test(t.charAt(d)) ? ($ = t.charAt(d), d++) : ($ = e, H === 0 && Ve(Q)); $ !== e; )
      I.push($), re.test(t.charAt(d)) ? ($ = t.charAt(d), d++) : ($ = e, H === 0 && Ve(Q));
    if (t.charCodeAt(d) === 46 ? ($ = F, d++) : ($ = e, H === 0 && Ve(ut)), $ !== e) {
      if (L = [], re.test(t.charAt(d)) ? (Ce = t.charAt(d), d++) : (Ce = e, H === 0 && Ve(Q)), Ce !== e)
        for (; Ce !== e; )
          L.push(Ce), re.test(t.charAt(d)) ? (Ce = t.charAt(d), d++) : (Ce = e, H === 0 && Ve(Q));
      else
        L = e;
      if (L !== e) {
        if (Ce = d, t.charCodeAt(d) === 101 ? (we = fe, d++) : (we = e, H === 0 && Ve(zt)), we === e && (t.charCodeAt(d) === 69 ? (we = Ae, d++) : (we = e, H === 0 && Ve(tr))), we !== e) {
          if (t.charCodeAt(d) === 43 ? (Wt = ee, d++) : (Wt = e, H === 0 && Ve(jt)), Wt === e && (t.charCodeAt(d) === 45 ? (Wt = ue, d++) : (Wt = e, H === 0 && Ve(st))), Wt === e && (Wt = null), Gt = [], re.test(t.charAt(d)) ? (Xr = t.charAt(d), d++) : (Xr = e, H === 0 && Ve(Q)), Xr !== e)
            for (; Xr !== e; )
              Gt.push(Xr), re.test(t.charAt(d)) ? (Xr = t.charAt(d), d++) : (Xr = e, H === 0 && Ve(Q));
          else
            Gt = e;
          Gt !== e ? (we = [we, Wt, Gt], Ce = we) : (d = Ce, Ce = e);
        } else
          d = Ce, Ce = e;
        Ce === e && (Ce = null), R = b, b = vr();
      } else
        d = b, b = e;
    } else
      d = b, b = e;
    if (b === e) {
      if (b = d, t.charCodeAt(d) === 45 ? d++ : H === 0 && Ve(st), I = [], re.test(t.charAt(d)) ? ($ = t.charAt(d), d++) : ($ = e, H === 0 && Ve(Q)), $ !== e)
        for (; $ !== e; )
          I.push($), re.test(t.charAt(d)) ? ($ = t.charAt(d), d++) : ($ = e, H === 0 && Ve(Q));
      else
        I = e;
      if (I !== e)
        if (t.charCodeAt(d) === 101 ? ($ = fe, d++) : ($ = e, H === 0 && Ve(zt)), $ === e && (t.charCodeAt(d) === 69 ? ($ = Ae, d++) : ($ = e, H === 0 && Ve(tr))), $ !== e) {
          if (t.charCodeAt(d) === 43 ? (L = ee, d++) : (L = e, H === 0 && Ve(jt)), L === e && (t.charCodeAt(d) === 45 ? (L = ue, d++) : (L = e, H === 0 && Ve(st))), L === e && (L = null), Ce = [], re.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, H === 0 && Ve(Q)), we !== e)
            for (; we !== e; )
              Ce.push(we), re.test(t.charAt(d)) ? (we = t.charAt(d), d++) : (we = e, H === 0 && Ve(Q));
          else
            Ce = e;
          Ce !== e ? (R = b, b = ar()) : (d = b, b = e);
        } else
          d = b, b = e;
      else
        d = b, b = e;
    }
    return H--, b === e && H === 0 && Ve(It), b;
  }
  function Jn() {
    var b, I, $, L, Ce, we, Wt, Gt, Xr, Br, Ur;
    if (b = d, tt.test(t.charAt(d)) ? (I = t.charAt(d), d++) : (I = e, H === 0 && Ve(Xt)), I !== e) {
      if ($ = [], L = [], qe.test(t.charAt(d)) ? (Ce = t.charAt(d), d++) : (Ce = e, H === 0 && Ve(ye)), Ce !== e)
        for (; Ce !== e; )
          L.push(Ce), qe.test(t.charAt(d)) ? (Ce = t.charAt(d), d++) : (Ce = e, H === 0 && Ve(ye));
      else
        L = e;
      for (L === e && (L = d, t.charCodeAt(d) === 46 ? (Ce = F, d++) : (Ce = e, H === 0 && Ve(ut)), Ce !== e ? (we = d, H++, Wt = d, Gt = qt(), Xr = io(), Xr !== e ? (Br = qt(), t.charCodeAt(d) === 40 ? (Ur = P, d++) : (Ur = e, H === 0 && Ve(De)), Ur !== e ? (Gt = [Gt, Xr, Br, Ur], Wt = Gt) : (d = Wt, Wt = e)) : (d = Wt, Wt = e), H--, Wt === e ? we = void 0 : (d = we, we = e), we !== e ? (Ce = [Ce, we], L = Ce) : (d = L, L = e)) : (d = L, L = e)); L !== e; ) {
        if ($.push(L), L = [], qe.test(t.charAt(d)) ? (Ce = t.charAt(d), d++) : (Ce = e, H === 0 && Ve(ye)), Ce !== e)
          for (; Ce !== e; )
            L.push(Ce), qe.test(t.charAt(d)) ? (Ce = t.charAt(d), d++) : (Ce = e, H === 0 && Ve(ye));
        else
          L = e;
        L === e && (L = d, t.charCodeAt(d) === 46 ? (Ce = F, d++) : (Ce = e, H === 0 && Ve(ut)), Ce !== e ? (we = d, H++, Wt = d, Gt = qt(), Xr = io(), Xr !== e ? (Br = qt(), t.charCodeAt(d) === 40 ? (Ur = P, d++) : (Ur = e, H === 0 && Ve(De)), Ur !== e ? (Gt = [Gt, Xr, Br, Ur], Wt = Gt) : (d = Wt, Wt = e)) : (d = Wt, Wt = e), H--, Wt === e ? we = void 0 : (d = we, we = e), we !== e ? (Ce = [Ce, we], L = Ce) : (d = L, L = e)) : (d = L, L = e));
      }
      R = b, b = j();
    } else
      d = b, b = e;
    return b;
  }
  function io() {
    var b, I, $, L;
    if (b = d, tt.test(t.charAt(d)) ? (I = t.charAt(d), d++) : (I = e, H === 0 && Ve(Xt)), I !== e) {
      for ($ = [], qe.test(t.charAt(d)) ? (L = t.charAt(d), d++) : (L = e, H === 0 && Ve(ye)); L !== e; )
        $.push(L), qe.test(t.charAt(d)) ? (L = t.charAt(d), d++) : (L = e, H === 0 && Ve(ye));
      R = b, b = se();
    } else
      d = b, b = e;
    return b;
  }
  function qt() {
    var b, I;
    for (H++, b = [], Ke.test(t.charAt(d)) ? (I = t.charAt(d), d++) : (I = e, H === 0 && Ve(mt)); I !== e; )
      b.push(I), Ke.test(t.charAt(d)) ? (I = t.charAt(d), d++) : (I = e, H === 0 && Ve(mt));
    return H--, I = e, H === 0 && Ve(Ue), b;
  }
  if (Pt = i(), Pt !== e && d === t.length)
    return Pt;
  throw Pt !== e && d < t.length && Ve(Mr()), Zr(
    je,
    Xe < t.length ? t.charAt(Xe) : null,
    Xe < t.length ? Mn(Xe, Xe + 1) : Mn(Xe, Xe)
  );
}
const t3 = 128, zi = /* @__PURE__ */ new Map();
let Gf;
function __(t) {
  return zi.get(t);
}
function h_(t, r) {
  t !== Gf && (zi.delete(t), zi.size >= t3 && zi.delete(zi.keys().next().value), zi.set(t, r), Gf = t);
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
function r3(t) {
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
function n3(t) {
  let r;
  return {
    name: t.name,
    args: t.arguments.map((e) => ({
      type: e.type
    })),
    cb(e, ...n) {
      r || (r = __(t.body) || d_(t.body, {
        startRule: "JsonStringContents"
      }), h_(t.body, r));
      const o = /* @__PURE__ */ new Map();
      n.forEach((a, l) => {
        if (a.type === "function")
          throw new Error("Incorrect argument type: function");
        const c = Ds(t.arguments[l].name, a.type, a.value);
        o.set(c.getName(), c);
      });
      const i = Fa(o, e.customFunctions, e.store, r, {
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
function o3(t, r) {
  if (!t)
    return r || void 0;
  if (!r)
    return t || void 0;
  const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
  for (const [o, i] of r) {
    for (const s of i) {
      const a = uf(o, s);
      n.add(a);
    }
    e.set(o, i);
  }
  for (const [o, i] of t)
    for (const s of i) {
      const a = uf(o, s);
      if (!n.has(a)) {
        n.add(a);
        const l = e.get(o) || [];
        l.push(s), e.set(o, l);
      }
    }
  return e;
}
function i3(t) {
  if (!t)
    return X(new Error("Missing object"));
  const r = t.card, e = t.templates || {};
  if (!r)
    return X(new Error("Missing card"));
  if (!r.states || !r.states.length)
    return X(new Error("Missing states"));
  for (const n in e)
    if (e.hasOwnProperty(n) && n in r_)
      return X(new Error("Template name collision"), {
        additional: {
          templateName: n
        }
      });
  for (let n = 0; n < r.states.length; ++n) {
    if (!r.states[n].div)
      return X(new Error("Missing state div"), {
        additional: {
          stateId: r.states[n].state_id
        }
      });
    if (typeof r.states[n].state_id != "number")
      return X(new Error("Missing state_id"), {
        additional: {
          index: n
        }
      });
  }
  return null;
}
function s3(t) {
  return [...new Set(t)];
}
class p_ {
  constructor(r, e) {
    jr(this, "ast");
    jr(this, "expr");
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
      a = Fa(r, e, o, this.ast, {
        weekStartDay: i
      }), a.warnings.forEach(n);
      const c = a.result;
      if (c.type === "error")
        return n(X(new Error("Expression execution error"), {
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
          result: qd(u),
          usedVars: a.usedVars
        };
      if (c.type === "boolean")
        return {
          result: !!u,
          usedVars: a.usedVars
        };
      if (c.type === "color") {
        const f = yo(String(u));
        if (f)
          return {
            result: Ii(f),
            usedVars: a.usedVars
          };
        n(X(new Error("Expression execution error")));
      }
      if (c.type === "integer")
        return u > a1 || u < c1 ? (n(X(new Error("Expression result is out of 32-bit int range"))), {
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
          return n(X(new Error(`Failed to stringify ${c.type}`))), {
            result: `<${c.type}>`,
            usedVars: a.usedVars
          };
        }
      return {
        result: u,
        usedVars: a.usedVars
      };
    } catch {
      return n(X(new Error("Expression execution error"), {
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
function l3(t) {
  return t.indexOf("@{") > -1 || t.indexOf("\\") > -1;
}
function ua(t, r, e, n) {
  if (t)
    if (typeof t == "string") {
      if (l3(t)) {
        r.hasExpression = !0;
        try {
          const o = __(t) || d_(t, {
            startRule: "JsonStringContents"
          });
          h_(t, o);
          const i = h1(o);
          return r.vars.push(...i), new p_(o, t);
        } catch {
          e(X(new Error("Unable to parse expression"), {
            additional: {
              expression: t
            }
          }));
          return;
        }
      }
    } else {
      if (Array.isArray(t) && n > 0)
        return t.map((o) => ua(o, r, e, n - 1));
      if (typeof t == "object" && n > 0) {
        const o = {};
        for (const i in t)
          o[i] = ua(t[i], r, e, n - 1);
        return o;
      }
    }
  return t;
}
function fa(t, r) {
  if (t) {
    if (t instanceof p_)
      return t.apply(r);
    if (Array.isArray(t)) {
      let e;
      return {
        result: t.map((o) => {
          const i = fa(o, r);
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
        const i = fa(t[o], r);
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
  }, s = ua(t, i, r, o);
  return {
    vars: s3(i.vars),
    hasExpression: i.hasExpression,
    applyVars(l, c, u) {
      return fa(s, {
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
class g_ {
  constructor() {
    jr(this, "_vars", /* @__PURE__ */ new Map());
    jr(this, "_lastAddedVariable", Bo(""));
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
function a4() {
  return new g_();
}
const a3 = ["start", "stop", "pause", "resume", "cancel", "reset"], c3 = new Set(a3);
class u3 {
  constructor(r) {
    jr(this, "timers", /* @__PURE__ */ new Map());
    jr(this, "logError");
    jr(this, "applyVars");
    jr(this, "hasVariableWithType");
    jr(this, "setVariableValue");
    jr(this, "execAnyActions");
    jr(this, "visibilityHandler");
    jr(this, "awaitActions", []);
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
      this.logError(X(new Error("Missing timer id")));
      return;
    }
    if (!(r.duration || r.tick_interval && (r.value_variable || r.tick_actions))) {
      this.logError(X(new Error("Misconfigured timer"), {
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
    if (!r || !e || !this.timers.has(r) || !c3.has(e)) {
      this.logError(X(new Error("Incorrect timer action"), {
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
      this.logError(X(new Error("The timer is already running")));
      return;
    } else if (r.state === "paused") {
      this.logError(X(new Error("The timer is paused")));
      return;
    }
    const e = r.definition.value_variable;
    if (e && !this.hasVariableWithType(e, "integer")) {
      this.logError(X(new Error("Cannot find variable"), {
        additional: {
          name: e
        }
      }));
      return;
    }
    if (e && this.setVariableValue(e, 0), r.definition.duration !== void 0 && (r.duration = this.applyVarsInt(r.definition.duration), r.duration === void 0 || r.duration < 0)) {
      this.logError(X(new Error("Incorrect timer properties"), {
        additional: {
          id: r.definition.id
        }
      }));
      return;
    }
    if (r.definition.tick_interval !== void 0 && (r.tick = this.applyVarsInt(r.definition.tick_interval), r.tick === void 0 || r.tick <= 0)) {
      this.logError(X(new Error("Incorrect timer properties"), {
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
      this.logError(X(new Error("The timer has already been stopped")));
      return;
    }
    r.state = "stopped", r.durationPassed = 0, r.tickPassed = 0, this.stopTimerTimeouts(r), this.callActions(r, "end");
  }
  pause(r) {
    if (r.state === "stopped") {
      this.logError(X(new Error("The timer has already been stopped")));
      return;
    } else if (r.state === "paused") {
      this.logError(X(new Error("The timer has already been paused")));
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
      this.logError(X(new Error("The timer has already been stopped")));
      return;
    } else if (r.state === "running") {
      this.logError(X(new Error("The timer is already running")));
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
function f3(t, r, e, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number" && i !== void 0) {
    e(X(new Error("Incorrect array_insert_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Ta(t, r, e, n, (a) => {
    const l = a.getValue();
    if (typeof i == "number" && (i < 0 || i > l.length))
      e(X(new Error(`Index out of bound for mutation ${n.type}`), {
        additional: {
          name: o,
          index: i,
          length: l.length
        }
      }));
    else if (!s.type)
      e(X(new Error("Incorrect value type"), {
        additional: {
          name: o
        }
      }));
    else {
      const c = l.slice(), u = El(s);
      typeof i == "number" ? c.splice(i, 0, u) : c.push(u), a.setValue(c);
    }
  });
}
function d3(t, r, e, n) {
  const { variable_name: o, index: i } = n;
  if (typeof i != "number") {
    e(X(new Error("Incorrect array_remove_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Ta(t, r, e, n, (s) => {
    const a = s.getValue();
    if (typeof i == "number" && (i < 0 || i >= a.length))
      e(X(new Error(`Index out of bound for mutation ${n.type}`), {
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
function _3(t, r, e, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number") {
    e(X(new Error("Incorrect array_set_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Ta(t, r, e, n, (a) => {
    const l = a.getValue();
    if (typeof i == "number" && (i < 0 || i >= l.length))
      e(X(new Error(`Index out of bound for mutation ${n.type}`), {
        additional: {
          name: o,
          index: i,
          length: l.length
        }
      }));
    else if (!s.type)
      e(X(new Error("Incorrect value type"), {
        additional: {
          name: o
        }
      }));
    else {
      const c = l.slice();
      c[i] = El(s), a.setValue(c);
    }
  });
}
function Ta(t, r, e, n, o) {
  const { variable_name: i } = n;
  if (!i) {
    e(X(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: i
      }
    }));
    return;
  }
  const s = (t == null ? void 0 : t.getVariable(i)) || r.get(i);
  if (!s) {
    e(X(new Error("Cannot find variable"), {
      additional: {
        name: i
      }
    }));
    return;
  }
  const a = s.getType();
  a === "array" ? o(s) : e(X(new Error("Trying to insert value into the non-array"), {
    additional: {
      name: i,
      type: a
    }
  }));
}
function h3(t, r, e, n) {
  const { variable_name: o, key: i, value: s } = n;
  if (typeof i != "string") {
    e(X(new Error("Incorrect dict_set_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  if (!o) {
    e(X(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  s && !s.type && e(X(new Error("Incorrect value type"), {
    additional: {
      name: o
    }
  }));
  const a = (t == null ? void 0 : t.getVariable(o)) || r.get(o);
  if (!a) {
    e(X(new Error("Cannot find variable"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  const l = a.getType();
  if (l === "dict") {
    const u = { ...a.getValue() };
    s ? u[i] = El(s) : delete u[i], a.setValue(u);
  } else
    e(X(new Error("Trying to set value into the non-dict"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function p3(t, r) {
  if (!(r.content && (r.content.type === "text" || r.content.type === "url") && typeof r.content.value == "string")) {
    t(X(new Error("Incorrect action"), {
      additional: {
        action: r
      }
    }));
    return;
  }
  if (!(typeof navigator < "u" && "clipboard" in navigator && navigator.clipboard && "writeText" in navigator.clipboard && typeof navigator.clipboard.writeText == "function")) {
    t(X(new Error("Clipboard is unavailable"), {
      additional: {
        action: r
      }
    }));
    return;
  }
  navigator.clipboard.writeText(r.content.value).catch((e) => {
    t(X(new Error("Failed to copy to the clipboard"), {
      additional: {
        originalError: String(e)
      }
    }));
  });
}
function g3(t) {
  if (t === "normal" || t === "reverse" || t === "alternate" || t === "alternate_reverse")
    return t;
}
function m3(t, r, e, n) {
  var z, B, ee, ue;
  const o = Xn(t.duration, 0);
  if (!o || t.type !== "color_animator" && t.type !== "number_animator")
    return;
  const i = (z = t.start_value_typed ? t.start_value_typed.value : t.start_value) != null ? z : r.getValue(), s = t.end_value_typed ? t.end_value_typed.value : t.end_value;
  if (i === void 0 || s === void 0 || t.type === "color_animator" && (typeof i != "string" && i !== void 0 || typeof s != "string") || t.type === "number_animator" && (typeof i != "number" && i !== void 0 || typeof s != "number"))
    return;
  const a = t.type === "color_animator" && yo(i), l = t.type === "color_animator" && yo(s);
  if (t.type === "color_animator" && (!a || !l))
    return;
  const c = on(t.start_delay, 0), u = Ca(t.interpolator || "linear"), f = g3(t.direction) || "normal", _ = ((B = t.repeat_count) == null ? void 0 : B.type) === "infinity" ? 1 / 0 : ((ee = t.repeat_count) == null ? void 0 : ee.type) === "fixed" ? on((ue = t.repeat_count) == null ? void 0 : ue.value, 1) : 1;
  let p = 0, m = performance.now();
  const h = _ === 1 / 0 ? 1 / 0 : _ * o + c;
  function y(M) {
    if (t.type === "color_animator") {
      if (!a || !l)
        throw new Error("Missing start/end value");
      return Ii({
        a: No(Ko(a.a, l.a, M), 0, 255),
        r: No(Ko(a.r, l.r, M), 0, 255),
        g: No(Ko(a.g, l.g, M), 0, 255),
        b: No(Ko(a.b, l.b, M), 0, 255)
      });
    }
    return Ko(i, s, M);
  }
  function w(M) {
    const q = M - m;
    if (m = M, p += q, p >= c) {
      let ae = Math.floor((p - c) / o), A = (p - c - ae * o) / o;
      ae >= _ && (ae = _ - 1, A = 1);
      let F;
      f === "normal" || f === "alternate" && ae % 2 === 0 || f === "alternate_reverse" && ae % 2 === 1 ? F = "normal" : F = "reverse", F === "reverse" && (A = 1 - A);
      const P = y(u(A));
      r.setValue(P);
    }
    p < h ? D = requestAnimationFrame(w) : (e(), n(t.end_actions));
  }
  let D = requestAnimationFrame(w);
  return {
    stop() {
      cancelAnimationFrame(D), n(t.cancel_actions), n(t.end_actions);
    }
  };
}
function b3(t) {
  let r = t;
  for (; r && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function y3(t) {
  let r = t;
  for (; r != null && r.parent && r.json.type !== "state" && !r.isRootState && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function ol(t) {
  return !!(t && typeof t == "string");
}
const w3 = /* @__PURE__ */ new Set([
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "head",
  "options"
]);
function v3(t) {
  return t === void 0 || w3.has(t);
}
function k3(t) {
  return t === void 0 || Array.isArray(t) && t.every((r) => ol(r.name) && ol(r.value));
}
function j3(t) {
  var r, e, n;
  return ol(t.container_id) && ol((r = t.request) == null ? void 0 : r.url) && v3((e = t.request) == null ? void 0 : e.method) && k3((n = t.request) == null ? void 0 : n.headers);
}
function E3(t, r, e, n) {
  const { variable_name: o, path: i, value: s } = n;
  if (!(s != null && s.value)) {
    e(X(new Error("Missing value for an action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  if (typeof i != "string" || !i || i.charAt(0) === "/" || i.charAt(i.length - 1) === "/") {
    e(X(new Error(`Value '${i}' for key 'path' is not valid`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  if (!o) {
    e(X(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  const a = (t == null ? void 0 : t.getVariable(o)) || r.get(o);
  if (!a) {
    e(X(new Error("Cannot find variable"), {
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
      e(X(new Error(`Value '${i}' for key 'path' is not valid`), {
        additional: {
          name: o,
          type: l,
          path: i
        }
      }));
      return;
    }
    const f = u.split("/"), _ = l === "array" ? c.slice() : { ...c };
    let p = _;
    for (let m = 0; m < f.length; ++m) {
      const h = f[m];
      if (!h) {
        e(X(new Error("Path is empty"), {
          additional: {
            name: o,
            type: l,
            path: i
          }
        }));
        return;
      }
      if (!p || typeof p != "object") {
        e(X(new Error(`Element with path '${f.slice(0, m).join("/")}' is not ${p === void 0 ? "found" : "a structure"}`), {
          additional: {
            name: o,
            type: l,
            path: i
          }
        }));
        return;
      }
      if (Array.isArray(p)) {
        const y = Number(h);
        if (Number.isNaN(y)) {
          e(X(new Error(`Unable to use '${h}' as array index`), {
            additional: {
              name: o,
              type: l,
              path: i
            }
          }));
          return;
        }
        if (m + 1 === f.length && (y < 0 || y > p.length)) {
          e(X(new Error(`Position '${y}' is out of array bounds`), {
            additional: {
              name: o,
              type: l,
              path: i
            }
          }));
          return;
        }
      }
      m + 1 < f.length && (p = p[h]);
    }
    p[f[f.length - 1]] = El(s), a.setValue(_);
  } else
    e(X(new Error("Action requires array or dictionary variable"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function Kf(t, { delay: r = 0, duration: e = 400, easing: n = Od, x: o = 0, y: i = 0, opacity: s = 0 } = {}) {
  const a = getComputedStyle(t), l = +a.opacity, c = a.transform === "none" ? "" : a.transform, u = l * (1 - s), [f, _] = Oa(o), [p, m] = Oa(i);
  return {
    delay: r,
    duration: e,
    easing: n,
    css: (h, y) => `
			transform: ${c} translate(${(1 - h) * f}${_}, ${(1 - h) * p}${m});
			opacity: ${l - u * y}`
  };
}
const C3 = "appkit-outer", A3 = "appkit-root__clickable", V3 = "undefined", S3 = "appkit-tooltip", I3 = "appkit-tooltip_visible", D3 = "appkit-tooltip_modal", F3 = "appkit-tooltip__inner", T3 = "appkit-tooltip__overlay", M3 = "appkit-tooltip__substrate", So = {
  outer: C3,
  root__clickable: A3,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  root__selectable: V3,
  tooltip: S3,
  tooltip_visible: I3,
  tooltip_modal: D3,
  tooltip__inner: F3,
  tooltip__overlay: T3,
  tooltip__substrate: M3
}, m_ = 300, b_ = 0;
function da(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || m_) + (Number(r.start_delay) || b_)
  ));
}
function il(t, {
  animations: r,
  direction: e
}) {
  if (!r)
    return {};
  const n = fs(r), o = da(n);
  return n.some((s) => s.name === "no_animation") ? {} : {
    duration: Ui() ? 0 : o,
    css: (s) => {
      const a = s * o, l = n.map((h) => {
        var ee, ue, M, q, ae, A, F, P, O, J, he, fe;
        const y = Number(h.start_delay) || b_, w = Number(h.duration) || m_, D = e === "in" ? Math.max(0, Math.min(1, (a - y) / w)) : Math.max(0, Math.min(1, (a - (o - w) + y) / w)), B = (Ca(h.interpolator || "ease_in_out") || vl)(D);
        if (h.name === "fade") {
          const Ae = e === "in" ? (ee = h.start_value) != null ? ee : 0 : (ue = h.end_value) != null ? ue : 0, me = e === "in" ? (M = h.end_value) != null ? M : 1 : (q = h.start_value) != null ? q : 1;
          return {
            active: B > 0 && B < 1,
            opacity: (1 - B) * Ae + B * me
          };
        } else if (h.name === "translate") {
          const Ae = -(e === "in" ? (ae = h.start_value) != null ? ae : 10 : (A = h.end_value) != null ? A : 10), me = -(e === "in" ? (F = h.end_value) != null ? F : 0 : (P = h.start_value) != null ? P : 0);
          return {
            active: B > 0 && B < 1,
            translate: `translateY(${(1 - B) * Ae + B * me}${e === "in" && h.start_value !== void 0 || e === "out" && h.end_value !== void 0 ? "%" : "px"})`
          };
        } else if (h.name === "scale") {
          const Ae = e === "in" ? (O = h.start_value) != null ? O : 0 : (J = h.end_value) != null ? J : 0, me = e === "in" ? (he = h.end_value) != null ? he : 1 : (fe = h.start_value) != null ? fe : 1;
          return {
            active: B > 0 && B < 1,
            scale: `scale(${(1 - B) * Ae + B * me})`
          };
        }
        return {};
      }), c = l.map((h) => h.opacity).filter((h) => h !== void 0).reduce((h, y) => h * y, 1), u = l.map((h) => h.translate).filter((h) => h !== void 0).join(" "), f = l.map((h) => h.scale).filter((h) => h !== void 0).join(" "), _ = l.filter((h) => h.active).map((h) => h.scale).filter((h) => h !== void 0), p = _.length ? _[_.length - 1] : f;
      return `transform:${[u, p].filter(Boolean).join(" ") || "none"};opacity:${c}`;
    }
  };
}
const ss = typeof window < "u" && "HTMLDialogElement" in window, { document: P3, window: N3 } = Ro;
function z3(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _ = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && Yf(t)
  ), p = (
    /*substrateComponentContext*/
    t[14] && Xf(t)
  );
  return i = new oo({
    props: {
      componentContext: (
        /*componentContext*/
        t[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = br(), p && p.c(), e = br(), n = Me("div"), o = Me("div"), Ut(i.$$.fragment), this.h();
    },
    l(m) {
      _ && _.l(m), r = yr(m), p && p.l(m), e = yr(m), n = Ne(m, "DIV", {
        class: !0,
        role: !0,
        "aria-modal": !0
      });
      var h = Ee(n);
      o = Ne(h, "DIV", { class: !0 });
      var y = Ee(o);
      Jt(i.$$.fragment, y), y.forEach(k), h.forEach(k), this.h();
    },
    h() {
      g(o, "class", So.tooltip__inner), g(n, "class", s = wt(
        "tooltip",
        So,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Sr.root_platform_desktop : "")), g(n, "role", "dialog"), g(
        n,
        "aria-modal",
        /*modal*/
        t[3]
      ), T(
        n,
        "top",
        /*tooltipY*/
        t[11]
      ), T(
        n,
        "left",
        /*tooltipX*/
        t[10]
      ), T(
        n,
        "width",
        /*tooltipWidth*/
        t[12]
      ), T(
        n,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    m(m, h) {
      _ && _.m(m, h), K(m, r, h), p && p.m(m, h), K(m, e, h), K(m, n, h), Et(n, o), Lt(i, o, null), t[40](o), t[41](n), c = !0, u || (f = [
        $e(
          n,
          "keydown",
          /*onKeyDown*/
          t[26]
        ),
        $e(
          n,
          "introstart",
          /*onIntroStart*/
          t[28]
        ),
        $e(
          n,
          "introend",
          /*onIntroEnd*/
          t[29]
        ),
        $e(
          n,
          "outrostart",
          /*onOutroStart*/
          t[30]
        )
      ], u = !0);
    },
    p(m, h) {
      t = m, /*visible*/
      t[1] && /*modal*/
      t[3] ? _ ? _.p(t, h) : (_ = Yf(t), _.c(), _.m(r.parentNode, r)) : _ && (_.d(1), _ = null), /*substrateComponentContext*/
      t[14] ? p ? (p.p(t, h), h[0] & /*substrateComponentContext*/
      16384 && U(p, 1)) : (p = Xf(t), p.c(), U(p, 1), p.m(e.parentNode, e)) : p && (dr(), ne(p, 1, 1, () => {
        p = null;
      }), _r());
      const y = {};
      h[0] & /*componentContext*/
      4 && (y.componentContext = /*componentContext*/
      t[2]), i.$set(y), (!c || h[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = wt(
        "tooltip",
        So,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Sr.root_platform_desktop : ""))) && g(n, "class", s), (!c || h[0] & /*modal*/
      8) && g(
        n,
        "aria-modal",
        /*modal*/
        t[3]
      ), h[0] & /*tooltipY*/
      2048 && T(
        n,
        "top",
        /*tooltipY*/
        t[11]
      ), h[0] & /*tooltipX*/
      1024 && T(
        n,
        "left",
        /*tooltipX*/
        t[10]
      ), h[0] & /*tooltipWidth*/
      4096 && T(
        n,
        "width",
        /*tooltipWidth*/
        t[12]
      ), h[0] & /*tooltipHeight*/
      8192 && T(
        n,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    i(m) {
      c || (U(p), U(i.$$.fragment, m), bo(() => {
        c && (l && l.end(1), a = hl(n, il, {
          animations: (
            /*$animationIn*/
            t[5] || Ki
          ),
          direction: "in"
        }), a.start());
      }), c = !0);
    },
    o(m) {
      ne(p), ne(i.$$.fragment, m), a && a.invalidate(), l = wd(n, il, {
        animations: (
          /*$animationOut*/
          t[4] || Ki
        ),
        direction: "out"
      }), c = !1;
    },
    d(m) {
      m && (k(r), k(e), k(n)), _ && _.d(m), p && p.d(m), Rt(i), t[40](null), t[41](null), m && l && l.end(), u = !1, Kr(f);
    }
  };
}
function B3(t) {
  let r, e, n, o, i, s, a, l, c, u, f, _ = (
    /*substrateComponentContext*/
    t[14] && Zf(t)
  ), p = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && /*data*/
    t[0].background_accessibility_description && Qf(t)
  );
  return i = new oo({
    props: {
      componentContext: (
        /*componentContext*/
        t[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = br(), e = Me("dialog"), p && p.c(), n = br(), o = Me("div"), Ut(i.$$.fragment), this.h();
    },
    l(m) {
      _ && _.l(m), r = yr(m), e = Ne(m, "DIALOG", { class: !0 });
      var h = Ee(e);
      p && p.l(h), n = yr(h), o = Ne(h, "DIV", { class: !0 });
      var y = Ee(o);
      Jt(i.$$.fragment, y), y.forEach(k), h.forEach(k), this.h();
    },
    h() {
      g(o, "class", So.tooltip__inner), g(e, "class", s = wt(
        "tooltip",
        So,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Sr.root_platform_desktop : "")), T(
        e,
        "top",
        /*tooltipY*/
        t[11]
      ), T(
        e,
        "left",
        /*tooltipX*/
        t[10]
      ), T(
        e,
        "width",
        /*tooltipWidth*/
        t[12]
      ), T(
        e,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    m(m, h) {
      _ && _.m(m, h), K(m, r, h), K(m, e, h), p && p.m(e, null), Et(e, n), Et(e, o), Lt(i, o, null), t[36](o), t[37](e), c = !0, u || (f = [
        $e(
          e,
          "keydown",
          /*onKeyDown*/
          t[26]
        ),
        $e(
          e,
          "close",
          /*onClose*/
          t[27]
        ),
        $e(
          e,
          "cancel",
          /*onClose*/
          t[27]
        ),
        $e(
          e,
          "click",
          /*onOutClick*/
          t[23]
        ),
        $e(
          e,
          "introstart",
          /*onIntroStart*/
          t[28]
        ),
        $e(
          e,
          "introend",
          /*onIntroEnd*/
          t[29]
        ),
        $e(
          e,
          "outrostart",
          /*onOutroStart*/
          t[30]
        )
      ], u = !0);
    },
    p(m, h) {
      t = m, /*substrateComponentContext*/
      t[14] ? _ ? (_.p(t, h), h[0] & /*substrateComponentContext*/
      16384 && U(_, 1)) : (_ = Zf(t), _.c(), U(_, 1), _.m(r.parentNode, r)) : _ && (dr(), ne(_, 1, 1, () => {
        _ = null;
      }), _r()), /*visible*/
      t[1] && /*modal*/
      t[3] && /*data*/
      t[0].background_accessibility_description ? p ? p.p(t, h) : (p = Qf(t), p.c(), p.m(e, n)) : p && (p.d(1), p = null);
      const y = {};
      h[0] & /*componentContext*/
      4 && (y.componentContext = /*componentContext*/
      t[2]), i.$set(y), (!c || h[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = wt(
        "tooltip",
        So,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Sr.root_platform_desktop : ""))) && g(e, "class", s), h[0] & /*tooltipY*/
      2048 && T(
        e,
        "top",
        /*tooltipY*/
        t[11]
      ), h[0] & /*tooltipX*/
      1024 && T(
        e,
        "left",
        /*tooltipX*/
        t[10]
      ), h[0] & /*tooltipWidth*/
      4096 && T(
        e,
        "width",
        /*tooltipWidth*/
        t[12]
      ), h[0] & /*tooltipHeight*/
      8192 && T(
        e,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    i(m) {
      c || (U(_), U(i.$$.fragment, m), bo(() => {
        c && (l && l.end(1), a = hl(e, il, {
          animations: (
            /*$animationIn*/
            t[5] || Ki
          ),
          direction: "in"
        }), a.start());
      }), c = !0);
    },
    o(m) {
      ne(_), ne(i.$$.fragment, m), a && a.invalidate(), l = wd(e, il, {
        animations: (
          /*$animationOut*/
          t[4] || Ki
        ),
        direction: "out"
      }), c = !1;
    },
    d(m) {
      m && (k(r), k(e)), _ && _.d(m), p && p.d(), Rt(i), t[36](null), t[37](null), m && l && l.end(), u = !1, Kr(f);
    }
  };
}
function Yf(t) {
  let r;
  function e(i, s) {
    return (
      /*data*/
      i[0].background_accessibility_description ? L3 : O3
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = He();
    },
    l(i) {
      o.l(i), r = He();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function O3(t) {
  let r, e, n;
  return {
    c() {
      r = Me("div"), this.h();
    },
    l(o) {
      r = Ne(o, "DIV", { class: !0 }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", So.tooltip__overlay);
    },
    m(o, i) {
      K(o, r, i), e || (n = $e(
        r,
        "click",
        /*closeByOutside*/
        t[24]
      ), e = !0);
    },
    p: E,
    d(o) {
      o && k(r), e = !1, n();
    }
  };
}
function L3(t) {
  let r, e, n, o;
  return {
    c() {
      r = Me("button"), this.h();
    },
    l(i) {
      r = Ne(i, "BUTTON", {
        class: !0,
        type: !0,
        "aria-label": !0
      }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", So.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", e = /*data*/
      t[0].background_accessibility_description);
    },
    m(i, s) {
      K(i, r, s), n || (o = $e(
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
      i && k(r), n = !1, o();
    }
  };
}
function Xf(t) {
  let r, e, n, o, i;
  return e = new oo({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        t[14]
      )
    }
  }), {
    c() {
      r = Me("div"), Ut(e.$$.fragment), n = br(), o = Me("div"), this.h();
    },
    l(s) {
      r = Ne(s, "DIV", { class: !0 });
      var a = Ee(r);
      Jt(e.$$.fragment, a), a.forEach(k), n = yr(s), o = Ne(s, "DIV", {}), Ee(o).forEach(k), this.h();
    },
    h() {
      g(r, "class", So.tooltip__substrate);
    },
    m(s, a) {
      K(s, r, a), Lt(e, r, null), t[38](r), K(s, n, a), K(s, o, a), t[39](o), i = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*substrateComponentContext*/
      16384 && (l.componentContext = /*substrateComponentContext*/
      s[14]), e.$set(l);
    },
    i(s) {
      i || (U(e.$$.fragment, s), i = !0);
    },
    o(s) {
      ne(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (k(r), k(n), k(o)), Rt(e), t[38](null), t[39](null);
    }
  };
}
function Zf(t) {
  let r, e, n, o, i;
  return e = new oo({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        t[14]
      )
    }
  }), {
    c() {
      r = Me("div"), Ut(e.$$.fragment), n = br(), o = Me("div"), this.h();
    },
    l(s) {
      r = Ne(s, "DIV", { class: !0 });
      var a = Ee(r);
      Jt(e.$$.fragment, a), a.forEach(k), n = yr(s), o = Ne(s, "DIV", {}), Ee(o).forEach(k), this.h();
    },
    h() {
      g(r, "class", So.tooltip__substrate);
    },
    m(s, a) {
      K(s, r, a), Lt(e, r, null), t[34](r), K(s, n, a), K(s, o, a), t[35](o), i = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*substrateComponentContext*/
      16384 && (l.componentContext = /*substrateComponentContext*/
      s[14]), e.$set(l);
    },
    i(s) {
      i || (U(e.$$.fragment, s), i = !0);
    },
    o(s) {
      ne(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (k(r), k(n), k(o)), Rt(e), t[34](null), t[35](null);
    }
  };
}
function Qf(t) {
  let r, e, n, o;
  return {
    c() {
      r = Me("button"), this.h();
    },
    l(i) {
      r = Ne(i, "BUTTON", {
        class: !0,
        type: !0,
        "aria-label": !0
      }), Ee(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", So.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", e = /*data*/
      t[0].background_accessibility_description);
    },
    m(i, s) {
      K(i, r, s), n || (o = $e(
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
      i && k(r), n = !1, o();
    }
  };
}
function R3(t) {
  let r, e, n, o, i, s, a;
  const l = [B3, z3], c = [];
  function u(f, _) {
    return ss ? 0 : 1;
  }
  return e = u(), n = c[e] = l[e](t), {
    c() {
      r = br(), n.c(), o = He();
    },
    l(f) {
      r = yr(f), n.l(f), o = He();
    },
    m(f, _) {
      K(f, r, _), c[e].m(f, _), K(f, o, _), i = !0, s || (a = [
        $e(
          N3,
          "resize",
          /*onWindowResize*/
          t[25]
        ),
        $e(
          P3.body,
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
      i || (U(n), i = !0);
    },
    o(f) {
      ne(n), i = !1;
    },
    d(f) {
      f && (k(r), k(o)), c[e].d(f), s = !1, Kr(a);
    }
  };
}
const Ki = {
  name: "set",
  items: [{ name: "translate" }, { name: "fade" }]
};
let $n = [];
function H3(t, r, e) {
  let n, o, i, s, a, l, c, u, f, _ = E, p = () => (_(), _ = V(i, (N) => e(46, f = N)), i), m, h = E, y = () => (h(), h = V(o, (N) => e(47, m = N)), o), w, D = E, z = () => (D(), D = V(n, (N) => e(48, w = N)), n), B, ee = E, ue = () => (ee(), ee = V(a, (N) => e(4, B = N)), a), M, q = E, ae = () => (q(), q = V(s, (N) => e(5, M = N)), s), A;
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => q());
  let { ownerNode: F } = r, { data: P } = r, { internalId: O } = r, { parentComponentContext: J } = r;
  const he = zr(xr), fe = he.isDesktop;
  Cn(t, fe, (N) => e(21, A = N));
  const Ae = Date.now();
  let me, Ie, re, tt, qe = !1, Ke = "", ve = "", Te = "", pe = "", ce = null, be, x, ge = !0, oe = null;
  function Se() {
    var mt, ke;
    if (!me || !F)
      return;
    const N = me.parentElement;
    if (!N)
      return;
    const Vt = me.style.cssText;
    e(6, me.style.cssText += ";transform: none !important", me);
    const pt = F.getBoundingClientRect(), Dt = me.getBoundingClientRect(), Nt = N.getBoundingClientRect();
    e(6, me.style.cssText = Vt, me);
    let ot = 0, Q = 0, It = null, zt = null, tr = 0, Xt = 0;
    const ye = (mt = be == null ? void 0 : be.json) == null ? void 0 : mt.width, Ue = (ke = be == null ? void 0 : be.json) == null ? void 0 : ke.height;
    if (!ye || ye.type === "match_parent" ? tr = It = window.innerWidth : ye.type === "fixed" && ye.value ? tr = It = ye.value : tr = Dt.width, (Ue == null ? void 0 : Ue.type) === "match_parent" ? Xt = zt = window.innerHeight : (Ue == null ? void 0 : Ue.type) === "fixed" && Ue.value ? Xt = zt = Ue.value : Xt = Dt.height, w === "left" || w === "bottom-left" || w === "top-left")
      ot = pt.left - tr;
    else if (w === "top" || w === "bottom" || w === "center")
      ot = (pt.left + pt.right) / 2 - tr / 2;
    else if (w === "right" || w === "bottom-right" || w === "top-right")
      ot = pt.right;
    else
      return;
    if (w === "top" || w === "top-left" || w === "top-right")
      Q = pt.top - Xt;
    else if (w === "left" || w === "right" || w === "center")
      Q = (pt.top + pt.bottom) / 2 - Xt / 2;
    else if (w === "bottom-left" || w === "bottom" || w === "bottom-right")
      Q = pt.bottom;
    else
      return;
    ss && ge || (ot -= Nt.left, Q -= Nt.top), ot += m || 0, Q += f || 0, e(10, Ke = `${ot}px`), e(11, ve = `${Q}px`), e(12, Te = It !== null ? `${It}px` : ""), e(13, pe = zt !== null ? `${zt}px` : ""), e(1, qe = !0), It === null || zt === null ? typeof ResizeObserver < "u" && !ce && (ce = new ResizeObserver(() => {
      requestAnimationFrame(Se);
    }), ce.observe(me)) : ce == null || ce.disconnect();
  }
  function Je(N) {
    if ($n.length && $n[$n.length - 1] !== me)
      return;
    const Vt = N.composedPath();
    Date.now() - Ae < 100 || Vt.includes(me) && !(ss && Vt[0] === me) || Ye();
  }
  function Ye(N) {
    N == null || N.stopPropagation(), N == null || N.preventDefault(), be.getJsonWithVars(P.close_by_tap_outside) !== !1 && ($n = $n.filter((Vt) => Vt !== me), he.onTooltipClose(O)), P.tap_outside_actions && be.execAnyActions(P.tap_outside_actions, { processUrls: !0 });
  }
  function te() {
    Se();
  }
  function Re(N) {
    $n.length && $n[$n.length - 1] !== me || N.key === "Escape" && !N.ctrlKey && !N.shiftKey && !N.altKey && !N.metaKey && ($n = $n.filter((Vt) => Vt !== me), he.onTooltipClose(O));
  }
  function ze(N) {
    $n = $n.filter((Vt) => Vt !== me), he.onTooltipClose(O), N.preventDefault();
  }
  function at() {
    re && re.animate({ opacity: [0, 1] }, {
      duration: l,
      easing: "ease-in-out"
    });
  }
  function ct() {
    re && me.insertBefore(re, Ie);
  }
  function nt() {
    tt != null && tt.parentElement && re && (tt.parentElement.insertBefore(re, tt), re.animate({ opacity: [1, 0] }, {
      duration: c,
      easing: "ease-in-out"
    }));
  }
  no(() => {
    try {
      oe = document.activeElement;
    } catch {
    }
    if (he.tooltipRoot) {
      const N = window.getComputedStyle(me);
      e(6, me.style.fontSize = N.fontSize, me), e(6, me.style.fontFamily = N.fontFamily, me), e(6, me.style.lineHeight = N.lineHeight, me), he.tooltipRoot.appendChild(me);
    }
    ss && me && me instanceof HTMLDialogElement && me[ge ? "showModal" : "show"](), ge && $n.push(me);
  }), _l(() => {
    qe || Se();
  }), cn(() => {
    if (be && be.destroy(), x && x.destroy(), ce == null || ce.disconnect(), $n = $n.filter((N) => N !== me), ge && oe && oe instanceof HTMLElement) {
      ss && me && me instanceof HTMLDialogElement && me.close();
      try {
        oe.focus({ preventScroll: !0 });
      } catch {
      }
    }
  });
  function jt(N) {
    Pr[N ? "unshift" : "push"](() => {
      re = N, e(8, re);
    });
  }
  function st(N) {
    Pr[N ? "unshift" : "push"](() => {
      tt = N, e(9, tt);
    });
  }
  function Bt(N) {
    Pr[N ? "unshift" : "push"](() => {
      Ie = N, e(7, Ie);
    });
  }
  function dt(N) {
    Pr[N ? "unshift" : "push"](() => {
      me = N, e(6, me);
    });
  }
  function Z(N) {
    Pr[N ? "unshift" : "push"](() => {
      re = N, e(8, re);
    });
  }
  function de(N) {
    Pr[N ? "unshift" : "push"](() => {
      tt = N, e(9, tt);
    });
  }
  function ut(N) {
    Pr[N ? "unshift" : "push"](() => {
      Ie = N, e(7, Ie);
    });
  }
  function De(N) {
    Pr[N ? "unshift" : "push"](() => {
      me = N, e(6, me);
    });
  }
  return t.$$set = (N) => {
    "ownerNode" in N && e(31, F = N.ownerNode), "data" in N && e(0, P = N.data), "internalId" in N && e(32, O = N.internalId), "parentComponentContext" in N && e(33, J = N.parentComponentContext);
  }, t.$$.update = () => {
    var N, Vt, pt, Dt, Nt;
    t.$$.dirty[0] & /*componentContext, data*/
    5 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && (be && be.destroy(), e(2, be = J.produceChildContext(P.div || {}, { isTooltipRoot: !0 })), P.substrate_div && e(14, x = J.produceChildContext(P.substrate_div, { isTooltipRoot: !0 }))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && z(e(20, n = J.getDerivedFromVars(P.position))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && y(e(19, o = J.getDerivedFromVars((Vt = (N = P.offset) == null ? void 0 : N.x) == null ? void 0 : Vt.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && p(e(18, i = J.getDerivedFromVars((Dt = (pt = P.offset) == null ? void 0 : pt.y) == null ? void 0 : Dt.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && ae(e(17, s = J.getDerivedFromVars(P.animation_in))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && ue(e(16, a = J.getDerivedFromVars(P.animation_out))), t.$$.dirty[0] & /*$animationIn*/
    32 && (l = Ui() ? 0 : da(fs(M || Ki))), t.$$.dirty[0] & /*$animationOut*/
    16 && (c = Ui() ? 0 : da(fs(B || Ki))), t.$$.dirty[0] & /*data*/
    1 && (((Nt = P.mode) == null ? void 0 : Nt.type) === "non_modal" ? e(3, ge = !1) : e(3, ge = !0)), t.$$.dirty[0] & /*visible, modal*/
    10 && e(15, u = { visible: qe, modal: ge });
  }, [
    P,
    qe,
    be,
    ge,
    B,
    M,
    me,
    Ie,
    re,
    tt,
    Ke,
    ve,
    Te,
    pe,
    x,
    u,
    a,
    s,
    i,
    o,
    n,
    A,
    fe,
    Je,
    Ye,
    te,
    Re,
    ze,
    at,
    ct,
    nt,
    F,
    O,
    J,
    jt,
    st,
    Bt,
    dt,
    Z,
    de,
    ut,
    De
  ];
}
class W3 extends Hr {
  constructor(r) {
    super(), Rr(
      this,
      r,
      H3,
      R3,
      Fr,
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
const U3 = "appkit-root_platform_desktop", G3 = "appkit-menu", J3 = "appkit-menu_visible", q3 = "appkit-menu__list", K3 = "appkit-menu__item", Js = {
  root_platform_desktop: U3,
  menu: G3,
  menu_visible: J3,
  menu__list: q3,
  menu__item: K3
}, { window: xf } = Ro;
function $f(t, r, e) {
  const n = t.slice();
  return n[23] = r[e], n;
}
function Y3(t) {
  let r = (
    /*item*/
    t[23].text + ""
  ), e;
  return {
    c() {
      e = Gn(r);
    },
    l(n) {
      e = to(n, r);
    },
    m(n, o) {
      K(n, e, o);
    },
    p(n, o) {
      o & /*items*/
      1 && r !== (r = /*item*/
      n[23].text + "") && ao(e, r);
    },
    d(n) {
      n && k(e);
    }
  };
}
function ed(t) {
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
      cls: Js.menu__item + " " + /*itemMix*/
      t[10],
      customAction: (
        /*onItemAction*/
        t[14]
      ),
      $$slots: { default: [Y3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      r = Me("li"), Ut(e.$$.fragment), n = br();
    },
    l(i) {
      r = Ne(i, "LI", {});
      var s = Ee(r);
      Jt(e.$$.fragment, s), n = yr(s), s.forEach(k);
    },
    m(i, s) {
      K(i, r, s), Lt(e, r, null), Et(r, n), o = !0;
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
      o || (U(e.$$.fragment, i), o = !0);
    },
    o(i) {
      ne(e.$$.fragment, i), o = !1;
    },
    d(i) {
      i && k(r), Rt(e);
    }
  };
}
function X3(t) {
  let r, e, n, o, i, s, a, l = lr(
    /*items*/
    t[0]
  ), c = [];
  for (let f = 0; f < l.length; f += 1)
    c[f] = ed($f(t, l, f));
  const u = (f) => ne(c[f], 1, 1, () => {
    c[f] = null;
  });
  return {
    c() {
      r = Me("div"), e = Me("ul");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      this.h();
    },
    l(f) {
      r = Ne(f, "DIV", { class: !0 });
      var _ = Ee(r);
      e = Ne(_, "UL", { class: !0 });
      var p = Ee(e);
      for (let m = 0; m < c.length; m += 1)
        c[m].l(p);
      p.forEach(k), _.forEach(k), this.h();
    },
    h() {
      g(e, "class", Js.menu__list), g(r, "class", n = wt(
        "menu",
        Js,
        /*mods*/
        t[7]
      ) + " " + /*$isDesktop*/
      (t[8] ? Sr.root_platform_desktop : "") + " " + /*popupMix*/
      t[9]), T(
        r,
        "top",
        /*menuY*/
        t[4]
      ), T(
        r,
        "left",
        /*menuX*/
        t[3]
      ), T(
        r,
        "width",
        /*menuWidth*/
        t[5]
      ), T(
        r,
        "height",
        /*menuHeight*/
        t[6]
      );
    },
    m(f, _) {
      K(f, r, _), Et(r, e);
      for (let p = 0; p < c.length; p += 1)
        c[p] && c[p].m(e, null);
      t[17](r), i = !0, s || (a = [
        $e(
          xf,
          "click",
          /*onWindowClick*/
          t[12]
        ),
        $e(
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
        l = lr(
          /*items*/
          f[0]
        );
        let p;
        for (p = 0; p < l.length; p += 1) {
          const m = $f(f, l, p);
          c[p] ? (c[p].p(m, _), U(c[p], 1)) : (c[p] = ed(m), c[p].c(), U(c[p], 1), c[p].m(e, null));
        }
        for (dr(), p = l.length; p < c.length; p += 1)
          u(p);
        _r();
      }
      (!i || _ & /*mods, $isDesktop*/
      384 && n !== (n = wt(
        "menu",
        Js,
        /*mods*/
        f[7]
      ) + " " + /*$isDesktop*/
      (f[8] ? Sr.root_platform_desktop : "") + " " + /*popupMix*/
      f[9])) && g(r, "class", n), _ & /*menuY*/
      16 && T(
        r,
        "top",
        /*menuY*/
        f[4]
      ), _ & /*menuX*/
      8 && T(
        r,
        "left",
        /*menuX*/
        f[3]
      ), _ & /*menuWidth*/
      32 && T(
        r,
        "width",
        /*menuWidth*/
        f[5]
      ), _ & /*menuHeight*/
      64 && T(
        r,
        "height",
        /*menuHeight*/
        f[6]
      );
    },
    i(f) {
      if (!i) {
        for (let _ = 0; _ < l.length; _ += 1)
          U(c[_]);
        f && bo(() => {
          i && (o || (o = Ga(r, Kf, { y: 20 }, !0)), o.run(1));
        }), i = !0;
      }
    },
    o(f) {
      c = c.filter(Boolean);
      for (let _ = 0; _ < c.length; _ += 1)
        ne(c[_]);
      f && (o || (o = Ga(r, Kf, { y: 20 }, !1)), o.run(0)), i = !1;
    },
    d(f) {
      f && k(r), _n(c, f), t[17](null), f && o && o.end(), s = !1, Kr(a);
    }
  };
}
function Z3(t, r, e) {
  let n, o, { ownerNode: i } = r, { items: s } = r, { parentComponentContext: a } = r;
  const l = zr(xr), c = l.getCustomization("menuPopupClass") || "", u = l.getCustomization("menuItemClass") || "", f = l.isDesktop;
  Cn(t, f, (A) => e(8, o = A));
  const _ = Date.now(), p = q_();
  let m, h = !1, y = "", w = "", D = "", z = "", B = null;
  function ee() {
    if (!m || !i)
      return;
    const A = m.parentElement;
    if (!A)
      return;
    const F = i.getBoundingClientRect(), P = m.getBoundingClientRect(), O = A.getBoundingClientRect(), J = window.innerWidth, he = window.innerHeight;
    let fe = 0, Ae = 0, me = P.width, Ie = P.height;
    fe = F.left - O.left, Ae = F.bottom - O.top, fe + me > J && (fe = J - me), fe < 0 && (fe = 0), Ae + Ie > he && (F.top - O.top - Ie > 0 ? Ae = F.top - O.top - Ie : Ae = he - Ie), Ae < 0 && (Ae = 0), e(3, y = `${fe}px`), e(4, w = `${Ae}px`), e(5, D = ""), e(6, z = ""), e(16, h = !0), typeof ResizeObserver < "u" && !B && (B = new ResizeObserver(() => {
      requestAnimationFrame(ee);
    }), B.observe(m));
  }
  function ue(A) {
    Date.now() - _ < 100 || A.composedPath().includes(m) || p("close");
  }
  function M() {
    ee();
  }
  function q() {
    return p("close"), !0;
  }
  no(() => {
    if (l.tooltipRoot) {
      const A = window.getComputedStyle(m);
      e(2, m.style.fontSize = A.fontSize, m), e(2, m.style.fontFamily = A.fontFamily, m), e(2, m.style.lineHeight = A.lineHeight, m), l.tooltipRoot.appendChild(m);
    }
  }), _l(() => {
    h || ee();
  }), cn(() => {
    B == null || B.disconnect();
  });
  function ae(A) {
    Pr[A ? "unshift" : "push"](() => {
      m = A, e(2, m);
    });
  }
  return t.$$set = (A) => {
    "ownerNode" in A && e(15, i = A.ownerNode), "items" in A && e(0, s = A.items), "parentComponentContext" in A && e(1, a = A.parentComponentContext);
  }, t.$$.update = () => {
    t.$$.dirty & /*visible*/
    65536 && e(7, n = { visible: h });
  }, [
    s,
    a,
    m,
    y,
    w,
    D,
    z,
    n,
    o,
    c,
    u,
    f,
    ue,
    M,
    q,
    i,
    h,
    ae
  ];
}
class Q3 extends Hr {
  constructor(r) {
    super(), Rr(this, r, Z3, X3, Fr, {
      ownerNode: 15,
      items: 0,
      parentComponentContext: 1
    });
  }
}
const { Map: x3 } = Ro;
function td(t, r, e) {
  const n = t.slice();
  return n[134] = r[e], n;
}
function rd(t) {
  let r, e, n, o, i, s, a, l, c, u;
  e = new dv({
    props: { svgFiltersMap: (
      /*svgFiltersMap*/
      t[5]
    ) }
  }), o = new oo({
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
      r = Me("div"), Ut(e.$$.fragment), n = br(), Ut(o.$$.fragment), i = br(), f && f.c(), s = br(), _ && _.c(), this.h();
    },
    l(p) {
      r = Ne(p, "DIV", { class: !0, dir: !0 });
      var m = Ee(r);
      Jt(e.$$.fragment, m), n = yr(m), Jt(o.$$.fragment, m), i = yr(m), f && f.l(m), s = yr(m), _ && _.l(m), m.forEach(k), this.h();
    },
    h() {
      g(r, "class", a = Sr.root + /*$isDesktop*/
      (t[7] ? ` ${Sr.root_platform_desktop}` : "") + /*mix*/
      (t[0] ? ` ${/*mix*/
      t[0]}` : "")), g(
        r,
        "dir",
        /*$directionStore*/
        t[8]
      );
    },
    m(p, m) {
      K(p, r, m), Lt(e, r, null), Et(r, n), Lt(o, r, null), Et(r, i), f && f.m(r, null), Et(r, s), _ && _.m(r, null), l = !0, c || (u = $e(r, "touchstart", r4, { passive: !0 }), c = !0);
    },
    p(p, m) {
      const h = {};
      m[0] & /*svgFiltersMap*/
      32 && (h.svgFiltersMap = /*svgFiltersMap*/
      p[5]), e.$set(h);
      const y = {};
      m[0] & /*rootStateComponentContext*/
      64 && (y.componentContext = /*rootStateComponentContext*/
      p[6]), o.$set(y), /*tooltips*/
      p[3] ? f ? (f.p(p, m), m[0] & /*tooltips*/
      8 && U(f, 1)) : (f = nd(p), f.c(), U(f, 1), f.m(r, s)) : f && (dr(), ne(f, 1, 1, () => {
        f = null;
      }), _r()), /*menu*/
      p[4] ? _ ? (_.p(p, m), m[0] & /*menu*/
      16 && U(_, 1)) : (_ = id(p), _.c(), U(_, 1), _.m(r, null)) : _ && (dr(), ne(_, 1, 1, () => {
        _ = null;
      }), _r()), (!l || m[0] & /*$isDesktop, mix*/
      129 && a !== (a = Sr.root + /*$isDesktop*/
      (p[7] ? ` ${Sr.root_platform_desktop}` : "") + /*mix*/
      (p[0] ? ` ${/*mix*/
      p[0]}` : ""))) && g(r, "class", a), (!l || m[0] & /*$directionStore*/
      256) && g(
        r,
        "dir",
        /*$directionStore*/
        p[8]
      );
    },
    i(p) {
      l || (U(e.$$.fragment, p), U(o.$$.fragment, p), U(f), U(_), l = !0);
    },
    o(p) {
      ne(e.$$.fragment, p), ne(o.$$.fragment, p), ne(f), ne(_), l = !1;
    },
    d(p) {
      p && k(r), Rt(e), Rt(o), f && f.d(), _ && _.d(), c = !1, u();
    }
  };
}
function nd(t) {
  let r = [], e = new x3(), n, o, i = lr(
    /*tooltips*/
    t[3]
  );
  const s = (a) => (
    /*item*/
    a[134].internalId
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = td(t, i, a), c = s(l);
    e.set(c, r[a] = od(c, l));
  }
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      n = He();
    },
    l(a) {
      for (let l = 0; l < r.length; l += 1)
        r[l].l(a);
      n = He();
    },
    m(a, l) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(a, l);
      K(a, n, l), o = !0;
    },
    p(a, l) {
      l[0] & /*tooltips, rootStateComponentContext*/
      72 && (i = lr(
        /*tooltips*/
        a[3]
      ), dr(), r = kd(r, l, s, 1, a, i, e, n.parentNode, vd, od, n, td), _r());
    },
    i(a) {
      if (!o) {
        for (let l = 0; l < i.length; l += 1)
          U(r[l]);
        o = !0;
      }
    },
    o(a) {
      for (let l = 0; l < r.length; l += 1)
        ne(r[l]);
      o = !1;
    },
    d(a) {
      a && k(n);
      for (let l = 0; l < r.length; l += 1)
        r[l].d(a);
    }
  };
}
function od(t, r) {
  let e, n, o;
  return n = new W3({
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
      e = He(), Ut(n.$$.fragment), this.h();
    },
    l(i) {
      e = He(), Jt(n.$$.fragment, i), this.h();
    },
    h() {
      this.first = e;
    },
    m(i, s) {
      K(i, e, s), Lt(n, i, s), o = !0;
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
      o || (U(n.$$.fragment, i), o = !0);
    },
    o(i) {
      ne(n.$$.fragment, i), o = !1;
    },
    d(i) {
      i && k(e), Rt(n, i);
    }
  };
}
function id(t) {
  let r, e;
  return r = new Q3({
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
      Ut(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Lt(r, n, o), e = !0;
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
      e || (U(r.$$.fragment, n), e = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function $3(t) {
  let r, e, n = !/*hasError*/
  t[1] && !/*hasIdError*/
  t[2] && /*rootStateComponentContext*/
  t[6] && rd(t);
  return {
    c() {
      n && n.c(), r = He();
    },
    l(o) {
      n && n.l(o), r = He();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), e = !0;
    },
    p(o, i) {
      !/*hasError*/
      o[1] && !/*hasIdError*/
      o[2] && /*rootStateComponentContext*/
      o[6] ? n ? (n.p(o, i), i[0] & /*hasError, hasIdError, rootStateComponentContext*/
      70 && U(n, 1)) : (n = rd(o), n.c(), U(n, 1), n.m(r.parentNode, r)) : n && (dr(), ne(n, 1, 1, () => {
        n = null;
      }), _r());
    },
    i(o) {
      e || (U(n), e = !0);
    },
    o(o) {
      ne(n), e = !1;
    },
    d(o) {
      o && k(r), n && n.d(o);
    }
  };
}
let Ma = Bo(!0), Vs = 0;
function sd() {
  Ma.set(!1);
}
function ld() {
  Ma.set(!0);
}
const e4 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean"]), t4 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean", "array", "dict"]);
function qo(t, r) {
  if (t && r)
    return new Map([...t, ...r]);
  if (t)
    return t;
  if (r)
    return r;
}
function r4() {
}
function n4(t, r, e) {
  var Zr, $r, kn;
  let n, o, i, s, { id: a } = r, { json: l = {} } = r, { platform: c = "auto" } = r, { theme: u = "system" } = r, { globalVariablesController: f = void 0 } = r, { mix: _ = "" } = r, { customization: p = {} } = r, { builtinProtocols: m = ["http", "https", "tel", "mailto", "intent"] } = r, { extensions: h = /* @__PURE__ */ new Map() } = r, { onError: y = void 0 } = r, { onStat: w = void 0 } = r, { onSubmit: D = void 0 } = r, { onCustomAction: z = void 0 } = r, { onComponent: B = void 0 } = r, { typefaceProvider: ee = (v) => "" } = r, { fetchInit: ue = {} } = r, { tooltipRoot: M = void 0 } = r, { customComponents: q = void 0 } = r, { direction: ae = "ltr" } = r, { store: A = void 0 } = r, { pagerChildrenClipEnabled: F = !0 } = r, { pagerMouseDragEnabled: P = !0 } = r, { weekStartDay: O = 0 } = r, { videoPlayerProvider: J = void 0 } = r, { devtoolCreateHierarchy: he = "lazy" } = r, fe = !0, Ae = Bo(c === "desktop");
  if (Cn(t, Ae, (v) => e(7, i = v)), c === "auto" && typeof matchMedia < "u") {
    const v = matchMedia("(any-pointer: coarse)");
    Ae.set(!v.matches), v.addListener(() => {
      Ae.set(!v.matches);
    });
  }
  let me = "light", Ie = null;
  const re = Bo(ae === "rtl" ? "rtl" : "ltr");
  Cn(t, re, (v) => e(8, s = v));
  function tt() {
    u !== "system" || !Ie || e(41, me = Ie.matches ? "dark" : "light");
  }
  function qe(v) {
    e(12, u = v);
  }
  function Ke() {
    return /* @__PURE__ */ new Map();
  }
  function ve() {
    return /* @__PURE__ */ new Map();
  }
  function Te(v) {
    e(11, l = v);
  }
  function pe(v) {
    return Be(v, N);
  }
  const ce = new Set(m);
  let be = !1, x = !1;
  a || (x = !0, N(X(new Error('"id" prop is required'))));
  const ge = { stateChange: !1 }, oe = f || new g_(), Se = oe.getLastAddedVariableStore(), Je = oe.getVariables(), Ye = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map();
  let at = null;
  const ct = /* @__PURE__ */ new Map();
  let nt = 0, jt = [];
  const st = /* @__PURE__ */ new Set();
  let Bt;
  const dt = [];
  function Z(v) {
    return p == null ? void 0 : p[v];
  }
  function de(v, C, { additionalVars: S, keepComplex: le = !1, customFunctions: W, emptyVarsError: et, maxDepth: Fe } = {}) {
    var xt;
    if (!C)
      return Xo(C);
    const Zt = qo(te, S), Ft = qf(C, v, A, O, Fe);
    if (!Ft.vars.length)
      if (Ft.hasExpression) {
        const yt = Ft.applyVars(Zt, W);
        if (!((xt = yt.usedVars) != null && xt.size))
          return et && et(), Xo(yt.result);
      } else
        return et && et(), Xo(C);
    const Qe = Ft.vars.map((yt) => Zt.get(yt) || vt(yt)).filter(Wo);
    return Bo(void 0, (yt) => {
      const Ir = /* @__PURE__ */ new Map();
      let Dr;
      const jn = () => {
        var un;
        const sn = Ft.applyVars(Zt, W, le);
        for (const [fn, In] of Ir)
          (un = sn.usedVars) != null && un.has(fn) || (In(), Ir.delete(fn));
        if (sn.usedVars) {
          for (const fn of sn.usedVars)
            if (!Ir.has(fn)) {
              let In = !0;
              Ir.set(fn, fn.subscribe(() => {
                In || yt(jn()), In = !1;
              }));
            }
        }
        return sn.result;
      };
      return Dr = Xi(Qe, jn).subscribe((sn) => {
        yt(sn);
      }), () => {
        Dr == null || Dr();
        for (const [sn, un] of Ir)
          un();
      };
    });
  }
  function ut(v, C, S, le = !1, W = void 0) {
    const et = qf(C, v, A, O);
    if (!et.hasExpression)
      return C;
    const Fe = qo(te, S);
    return et.applyVars(Fe, W, le).result;
  }
  function De(v, C, S) {
    const le = /* @__PURE__ */ new Map(), W = Ds(v, "dict", C);
    le.set(v, W);
    const et = Ds("index", "integer", S);
    return le.set("index", et), le;
  }
  function N(v) {
    y ? y({ error: v }) : (v == null ? void 0 : v.level) === "warn" ? console.warn(v) : console.error(v);
  }
  function Vt(v, C) {
    w && w({ type: v, action: C });
  }
  function pt(v) {
    return v in n;
  }
  function Dt(v, C) {
    if (!v)
      return { json: v, templateContext: C };
    const S = /* @__PURE__ */ new Set([v.type]);
    for (; v.type && v.type in n; ) {
      if ({ json: v, templateContext: C } = _v(v, C, n, N), S.has(v.type))
        return { json: v, templateContext: C };
      S.add(v.type);
    }
    return { json: v, templateContext: C };
  }
  let Nt = 0;
  function ot(v) {
    return `${a}-${Nt++}`;
  }
  function Q(v) {
    return `divkit-${ot()}`;
  }
  let It = {}, zt = {};
  function tr(v, C) {
    const S = `${v}:${C}`;
    if (zt[S] = zt[S] || 0, ++zt[S], It[S])
      return It[S];
    const le = `${ot()}-svg-filter`;
    return e(5, It = { ...It, [S]: le }), le;
  }
  function Xt(v, C) {
    if (!v)
      return;
    const S = `${v}:${C}`;
    zt[S] && --zt[S] === 0 && e(5, It = Object.keys(It).reduce(
      (le, W) => (zt[W] && (le[W] = It[W]), le),
      {}
    ));
  }
  const ye = ot() + "-id-", Ue = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map();
  function ke(v) {
    return ye + v;
  }
  function rt(v, C) {
    let S = Ue.get(v) || [];
    return Ue.has(v) || Ue.set(v, S), S.push(C), () => {
      S = S.filter((W) => W !== C), S.length || Ue.delete(v);
      const le = ke(v);
      mt.has(le) && mt.delete(le);
    };
  }
  function We(v) {
    var S, le;
    const C = (le = (S = Ue.get(v)) == null ? void 0 : S[0]) == null ? void 0 : le.node();
    if (C) {
      const W = ke(v), et = mt.get(W);
      return et && et !== C && et.removeAttribute("id"), C.setAttribute("id", W), mt.set(W, C), W;
    }
    return "";
  }
  async function nr(v, C) {
    var Fe, Zt;
    if (!v)
      throw new Error("Missing state id");
    let S = v.split("/");
    const le = S.length % 2 === 0 && b3(C);
    let W = le || kr;
    const et = (C == null ? void 0 : C.logError) || N;
    if (!le)
      if ((Fe = W.states) != null && Fe.root) {
        const Ft = W.states.root;
        if (Ft.length > 1) {
          et(X(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: v } }));
          return;
        }
        if (W = await Ft[0](S[0]), !W)
          return;
        S = S.slice(1);
      } else
        return;
    for (let Ft = 0; Ft < S.length; Ft += 2) {
      const Qe = S[Ft], xt = S[Ft + 1];
      if ((Zt = W.states) != null && Zt[Qe]) {
        const yt = W.states[Qe];
        if (yt.length > 1) {
          et(X(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: v } }));
          return;
        }
        if (W = await yt[0](xt), !W)
          return;
      } else
        return;
    }
  }
  async function Le(v, C, S) {
    var Ir;
    const le = (v == null ? void 0 : v.logError) || N;
    if (!j3(C)) {
      le(X(new Error("Incorrect submit action"), {
        additional: { containerId: C.container_id }
      }));
      return;
    }
    const W = Ue.get(C.container_id);
    if ((W == null ? void 0 : W.length) !== 1) {
      le(X(new Error("Error resolving container. Found multiple elements that respond to id"), {
        additional: { containerId: C.container_id }
      }));
      return;
    }
    const et = W[0].context(), Fe = {};
    if (et.variables)
      for (const [Dr, jn] of et.variables) {
        const sn = jn.getValue();
        typeof sn == "bigint" ? Fe[Dr] = Number(sn) : Fe[Dr] = sn;
      }
    if (D) {
      Promise.resolve().then(() => D(C, Fe)).then(() => {
        Ot(S.on_success_actions, { componentContext: v });
      }).catch(() => {
        Ot(S.on_fail_actions, { componentContext: v });
      });
      return;
    }
    const Zt = Object.keys(Fe).length > 0, Ft = (C.request.method || "post").toLowerCase();
    if ((Ft === "get" || Ft === "head") && Zt) {
      le(X(new Error("Can't send variables using the get/head method."), { additional: { url: C.request.url } }));
      return;
    }
    let Qe = !1;
    const xt = [];
    (Ir = C.request.headers) == null || Ir.forEach((Dr) => {
      xt.push([Dr.name, Dr.value]), Dr.name.toLowerCase() === "content-type" && (Qe = !0);
    }), Qe || xt.push(["Content-Type", "application/json"]);
    let yt;
    typeof ue == "function" ? yt = ue(C.request.url) : yt = ue, fetch(C.request.url, {
      ...yt,
      method: Ft,
      headers: xt,
      body: Zt ? JSON.stringify(Fe) : void 0
    }).then((Dr) => {
      if (!Dr.ok)
        throw new Error("Response is not ok");
      Ot(S.on_success_actions, { componentContext: v });
    }).catch((Dr) => {
      le(X(new Error("Failed to submit"), {
        additional: {
          url: C.request.url,
          originalError: Dr
        }
      })), Ot(S.on_fail_actions, { componentContext: v });
    });
  }
  function kt(v, C) {
    var W, et, Fe, Zt, Ft, Qe, xt, yt, Ir;
    const S = (v == null ? void 0 : v.logError) || N, le = C.id && lt(C.id);
    if (!le) {
      S(X(new Error('Missing component for "scroll_to" action'), { additional: { id: C.id } }));
      return;
    }
    if (C.animated !== void 0 && typeof C.animated != "boolean") {
      S(X(new Error('Missing properties for "scroll_to" action'), { additional: { id: C.id } }));
      return;
    }
    switch ((W = C.destination) == null ? void 0 : W.type) {
      case "index": {
        typeof C.destination.value == "number" && le.setCurrentItem(C.destination.value, (et = C.animated) != null ? et : !0);
        break;
      }
      case "offset": {
        typeof C.destination.value == "number" && ((Zt = le.scrollToPosition) == null || Zt.call(le, C.destination.value, (Fe = C.animated) != null ? Fe : !0));
        break;
      }
      case "start": {
        (Qe = le.scrollToStart) == null || Qe.call(le, (Ft = C.animated) != null ? Ft : !0);
        break;
      }
      case "end": {
        (yt = le.scrollToEnd) == null || yt.call(le, (xt = C.animated) != null ? xt : !0);
        break;
      }
      default:
        S(X(new Error('Unknown destination for "scroll_to" action'), {
          additional: {
            id: C.id,
            destination: (Ir = C.destination) == null ? void 0 : Ir.type
          }
        }));
    }
  }
  function Tt(v, C) {
    var W;
    const S = (v == null ? void 0 : v.logError) || N, le = C.id && lt(C.id);
    if (!le) {
      S(X(new Error('Missing component for "scroll_by" action'), { additional: { id: C.id } }));
      return;
    }
    if (typeof C.item_count != "number" && C.item_count !== void 0 || typeof C.offset != "number" && C.offset !== void 0 || C.overflow !== void 0 && C.overflow !== "clamp" && C.overflow !== "ring" || C.animated !== void 0 && typeof C.animated != "boolean") {
      S(X(new Error('Missing properties for "scroll_by" action'), { additional: { id: C.id } }));
      return;
    }
    (W = le.scrollCombined) == null || W.call(le, {
      step: C.item_count,
      offset: C.offset,
      overflow: C.overflow,
      animated: C.animated
    });
  }
  function Mt(v, C, { item: S, step: le, overflow: W, animated: et }) {
    var xt, yt, Ir, Dr, jn;
    if (!C)
      throw new Error(`Missing id for "${v}" action`);
    const Fe = Number(S);
    if (v === "set_current_item" && Number.isNaN(Fe))
      throw new Error(`Incorrect item for "${v}" action`);
    let Zt = Number(le);
    if (!le && (v === "set_previous_item" || v === "set_next_item") && (Zt = 1), !le && (v === "scroll_backward" || v === "scroll_forward" || v === "scroll_to_position") || Number.isNaN(Zt))
      throw new Error(`Incorrect step value for "${v}" action`);
    if (W && W !== "clamp" && W !== "ring")
      throw new Error(`Incorrect overflow value for "${v}" action`);
    W = W || "clamp";
    const Ft = et === null || et !== "0" && et !== "false", Qe = lt(C);
    if (Qe)
      switch (v) {
        case "set_current_item":
          Qe.setCurrentItem(Fe, Ft);
          return;
        case "set_previous_item":
          Qe.setPreviousItem(Zt, W, Ft);
          return;
        case "set_next_item":
          Qe.setNextItem(Zt, W, Ft);
          return;
        case "scroll_to_start":
          (xt = Qe.scrollToStart) == null || xt.call(Qe, Ft);
          return;
        case "scroll_to_end":
          (yt = Qe.scrollToEnd) == null || yt.call(Qe, Ft);
          return;
        case "scroll_backward":
          (Ir = Qe.scrollCombined) == null || Ir.call(Qe, {
            offset: -Zt,
            overflow: W,
            animated: Ft
          });
          return;
        case "scroll_forward":
          (Dr = Qe.scrollCombined) == null || Dr.call(Qe, {
            offset: Zt,
            overflow: W,
            animated: Ft
          });
          return;
        case "scroll_to_position":
          (jn = Qe.scrollToPosition) == null || jn.call(Qe, Zt, Ft);
          return;
      }
  }
  function hr(v, C, S) {
    const le = (S == null ? void 0 : S.logError) || N;
    if (v) {
      const W = lt(v);
      W ? C === "start" ? W.start() : C === "pause" ? W.pause() : le(X(new Error("Unknown video action"), { additional: { id: v, action: C } })) : le(X(new Error("Video component is not found"), { additional: { id: v, action: C } }));
    } else
      le(X(new Error("Missing id in video action"), { additional: { action: C } }));
  }
  function Be(v, C, S) {
    var le, W, et;
    if (v.templates)
      for (const Fe in v.templates)
        n.hasOwnProperty(Fe) || (n[Fe] = v.templates[Fe]);
    if (Array.isArray((le = v.patch) == null ? void 0 : le.changes)) {
      if (v.patch.mode === "transactional") {
        const Fe = v.patch.changes.find((Zt) => {
          const Ft = Cr.get(Zt.id);
          if (!Ft)
            return !0;
          const Qe = Array.isArray(Zt.items) ? Zt.items.length : 0;
          return !!(Ft.isSingleMode && Qe !== 1);
        });
        if (Fe)
          return C(X(new Error("Skipping transactional, child is not found or broken"), { additional: { url: S, id: Fe.id } })), Ot((W = v.patch) == null ? void 0 : W.on_failed_actions), !1;
      }
      return v.patch.changes.forEach((Fe) => {
        const Zt = Cr.get(Fe.id);
        Zt && Zt.replaceWith(Fe.id, Fe.items);
      }), Ot((et = v.patch) == null ? void 0 : et.on_applied_actions), !0;
    }
    return !1;
  }
  function Ct(v, C, S) {
    const le = (S == null ? void 0 : S.logError) || N;
    if (v) {
      let W;
      typeof ue == "function" ? W = ue(v) : W = ue, fetch(v, W).then((et) => {
        if (!et.ok)
          throw new Error("Response is not ok");
        return et.json();
      }).then((et) => {
        if (!et) {
          le(X(new Error("Incorrect patch"), { additional: { url: v } })), Ot(C == null ? void 0 : C.on_fail_actions, { componentContext: S });
          return;
        }
        Be(et, le, v) ? Ot(C == null ? void 0 : C.on_success_actions, { componentContext: S }) : Ot(C == null ? void 0 : C.on_fail_actions, { componentContext: S });
      }).catch((et) => {
        le(X(new Error("Failed to download the patch"), { additional: { url: v, originalError: et } })), Ot(C == null ? void 0 : C.on_fail_actions, { componentContext: S });
      });
    } else
      le(X(new Error("Missing url in download action"), { additional: { url: v } }));
  }
  function sr(v, C, S) {
    var Zt;
    const le = (S == null ? void 0 : S.logError) || N;
    if (!v) {
      le(X(new Error("Missing id in show_tooltip action")));
      return;
    }
    const W = wr.get(v);
    if (!W) {
      le(X(new Error("Tooltip with the provided id is not found"), { additional: { id: v } }));
      return;
    }
    if (C !== "true" && C !== !0 && st.has(v))
      return;
    st.add(v);
    const et = {
      internalId: ++nt,
      ownerNode: W.onwerNode,
      desc: W.tooltip,
      timeoutId: 0,
      componentContext: S
    };
    e(3, jt = [...jt, et]);
    const Fe = (Zt = W.tooltip.duration) != null ? Zt : 5e3;
    Fe && (et.timeoutId = window.setTimeout(
      () => {
        et.timeoutId = 0, e(3, jt = jt.filter((Ft) => Ft.internalId !== et.internalId));
      },
      Fe
    ));
  }
  function rr(v, C) {
    const S = (C == null ? void 0 : C.logError) || N;
    if (!v) {
      S(X(new Error("Missing id in hide_tooltip action")));
      return;
    }
    e(3, jt = jt.filter((le) => {
      const W = le.desc.id !== v;
      return !W && le.timeoutId && (clearTimeout(le.timeoutId), le.timeoutId = null), W;
    }));
  }
  function $t(v, C, S, le, W) {
    const et = (v == null ? void 0 : v.logError) || N;
    if (!A) {
      et(X(new Error("Store is not configured")));
      return;
    }
    let Fe = S;
    if (!C || !Fe || !le || !W) {
      et(X(new Error("Missing required params for set_stored_value")));
      return;
    }
    if (!t4.has(le)) {
      et(X(new Error("Incorrect stored type")));
      return;
    }
    if (le === "boolean" && (Fe = Fe === "true" || Fe === "1"), A.set)
      A.set(C, le, Fe, Number(W));
    else if (A.setValue) {
      if (!e4.has(le)) {
        et(X(new Error("Incorrect stored type")));
        return;
      }
      if (typeof Fe != "string" && typeof Fe != "number" && typeof Fe != "boolean") {
        et(X(new Error("Incorrect stored value")));
        return;
      }
      (le === "integer" || le === "number") && (Fe = Number(Fe)), A.setValue(C, le, Fe, Number(W));
    }
  }
  function mr(v) {
    Ar(ut(N, v, void 0, !0), v);
  }
  async function Ar(v, C, S) {
    var Zt, Ft;
    const le = v.scope_id, W = (S == null ? void 0 : S.logError) || N;
    if (le) {
      const Qe = Nr.get(le);
      if (Qe && (Qe == null ? void 0 : Qe.size) > 1)
        W(X(new Error(`Ambiguous scope id. There are ${Qe.size} divs with id '${le}'`), { additional: { count: Qe.size, scopeId: le } }));
      else if ((Qe == null ? void 0 : Qe.size) === 1) {
        const xt = Qe.values().next().value;
        xt && (S = xt);
      } else {
        W(X(new Error("The scope with the specified scope_id is missing"), { additional: { scopeId: le } }));
        return;
      }
    }
    const et = v.url ? String(v.url) : "", Fe = v.typed;
    if (Qs(v)) {
      if (Fe)
        switch (Fe.type) {
          case "set_variable": {
            const { variable_name: Qe, value: xt } = Fe;
            if (Qe && xt) {
              const yt = (S == null ? void 0 : S.getVariable(Qe)) || te.get(Qe);
              yt ? yt.getType() === xt.type ? yt.setValue(xt.value) : W(X(new Error("Trying to set value with invalid type"), { additional: { name: Qe, type: xt.type } })) : W(X(new Error("Cannot find variable"), { additional: { name: Qe } }));
            } else
              W(X(new Error("Incorrect set_variable action"), { additional: { name: Qe } }));
            break;
          }
          case "array_insert_value":
            f3(S, te, W, Fe);
            break;
          case "array_remove_value":
            d3(S, te, W, Fe);
            break;
          case "array_set_value":
            _3(S, te, W, Fe);
            break;
          case "copy_to_clipboard":
            p3(W, Fe);
            break;
          case "focus_element": {
            const Qe = Fe.element_id && Tr.get(Fe.element_id);
            Qe ? Qe.focus() : W(X(new Error("Incorrect focus_element action"), {
              additional: { elementId: Fe.element_id }
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
            h3(S, te, W, Fe);
            break;
          }
          case "animator_start": {
            const Qe = Fe.animator_id && (S == null ? void 0 : S.getAnimator(Fe.animator_id));
            if (!Qe) {
              W(X(new Error("Missing animator"), {
                additional: { animator_id: Fe.animator_id }
              }));
              return;
            }
            const { duration: xt, start_delay: yt, interpolator: Ir, direction: Dr, repeat_count: jn, start_value: sn, end_value: un } = Fe, fn = S ? S.getJsonWithVars(Qe) : ut(N, Qe), In = {
              ...fn,
              end_actions: Qe.end_actions,
              cancel_actions: Qe.cancel_actions,
              duration: xt !== void 0 ? xt : fn.duration,
              start_delay: yt !== void 0 ? yt : fn.start_delay,
              interpolator: Ir !== void 0 ? Ir : fn.interpolator,
              direction: Dr !== void 0 ? Dr : fn.direction,
              repeat_count: jn !== void 0 ? jn : fn.repeat_count,
              start_value_typed: sn,
              end_value_typed: un
            }, Zn = Qe.variable_name && ((S == null ? void 0 : S.getVariable(Qe.variable_name)) || te.get(Qe.variable_name));
            if (!Zn)
              return;
            const Jn = ct.get(Qe.id);
            Jn && Jn.stop();
            const io = m3(
              In,
              Zn,
              () => {
                ct.delete(Qe.id);
              },
              (qt, b) => ((S == null ? void 0 : S.execAnyActions) || Ot)(qt, b)
            );
            io && ct.set(Qe.id, io);
            break;
          }
          case "animator_stop": {
            const Qe = ct.get(Fe.animator_id);
            Qe && (Qe.stop(), ct.delete(Fe.animator_id));
            break;
          }
          case "show_tooltip": {
            sr(Fe.id, Fe.multiple, S);
            break;
          }
          case "hide_tooltip": {
            rr(Fe.id, S);
            break;
          }
          case "timer": {
            at ? at.execTimerAction(Fe.id, Fe.action) : W(X(new Error("Incorrect timer action"), {
              additional: {
                id: Fe.id,
                action: Fe.action
              }
            }));
            break;
          }
          case "download": {
            Ct(Fe.url, C.typed, S);
            break;
          }
          case "video": {
            hr(Fe.id, Fe.action, S);
            break;
          }
          case "set_stored_value": {
            $t(S, Fe.name, (Zt = Fe.value) == null ? void 0 : Zt.value, (Ft = Fe.value) == null ? void 0 : Ft.type, Fe.lifetime);
            break;
          }
          case "set_state": {
            await nr(Fe.state_id, S);
            break;
          }
          case "submit": {
            await Le(S, Fe, C.typed);
            break;
          }
          case "scroll_to": {
            kt(S, Fe);
            break;
          }
          case "scroll_by": {
            Tt(S, Fe);
            break;
          }
          case "update_structure": {
            E3(S, te, W, Fe);
            break;
          }
          case "custom": {
            Er({
              ...C,
              // todo remove in major release
              url: ""
            });
            break;
          }
          default:
            W(X(new Error("Unknown type of action"), { additional: { type: Fe.type } }));
        }
      else if (et)
        try {
          const Qe = et.replace(/div-action:\/\//, ""), xt = /([^?]+)\?(.+)/.exec(Qe);
          if (!xt)
            return;
          const yt = new URLSearchParams(xt[2]);
          switch (xt[1]) {
            case "set_state":
              await nr(yt.get("state_id"), S);
              break;
            case "set_current_item":
            case "set_previous_item":
            case "set_next_item":
            case "scroll_to_start":
            case "scroll_to_end":
            case "scroll_backward":
            case "scroll_forward":
            case "scroll_to_position":
              Mt(xt[1], yt.get("id"), {
                item: yt.get("item"),
                step: yt.get("step"),
                overflow: yt.get("overflow"),
                animated: yt.get("animated")
              });
              break;
            case "set_variable":
              const Ir = yt.get("name"), Dr = yt.get("value");
              if (Ir && Dr !== null) {
                const un = (S == null ? void 0 : S.getVariable(Ir)) || te.get(Ir);
                un ? un.set(Dr) : W(X(new Error("Cannot find variable"), { additional: { name: Ir } }));
              } else
                W(X(new Error("Incorrect set_variable_action"), { additional: { url: Qe } }));
              break;
            case "timer":
              const jn = yt.get("action"), sn = yt.get("id");
              at ? at.execTimerAction(sn, jn) : W(X(new Error("Incorrect timer action"), {
                additional: { id: sn, action: jn }
              }));
              break;
            case "video":
              hr(yt.get("id"), yt.get("action"), S);
              break;
            case "download":
              Ct(yt.get("url"), C.download_callbacks, S);
              break;
            case "show_tooltip":
              sr(yt.get("id"), yt.get("multiple"), S);
              break;
            case "hide_tooltip":
              rr(yt.get("id"), S);
              break;
            case "set_stored_value": {
              $t(S, yt.get("name"), yt.get("value"), yt.get("type"), yt.get("lifetime"));
              break;
            }
            default:
              W(X(new Error("Unknown type of action"), { additional: { url: et } }));
          }
        } catch (Qe) {
          W(X(Qe, { additional: { url: et } }));
        }
    }
  }
  async function Ot(v, C = {}) {
    var W;
    if (!v || !Array.isArray(v))
      return;
    const S = ((W = C.componentContext) == null ? void 0 : W.logError) || N, le = (et) => C.componentContext ? C.componentContext.getJsonWithVars(et, C.additionalVars, !0) : ut(S, et, C.additionalVars, !0);
    for (let et = 0; et < v.length; ++et) {
      let Fe = le(v[et]);
      const Zt = Fe.is_enabled;
      if (Zt === 0 || Zt === !1)
        continue;
      const Ft = Fe.url;
      if (Fe.typed)
        await Ar(Fe, v[et], C.componentContext);
      else if (Ft) {
        const xt = Gl(Ft);
        if (xt)
          if (Jl(xt, ce)) {
            if (C.processUrls)
              if (Fe.target === "_blank") {
                const yt = window.open("", "_blank");
                yt && (yt.opener = null, yt.location = Ft);
              } else
                location.href = Ft;
          } else xt === "div-action" ? (await Ar(Fe, v[et], C.componentContext), await Tn()) : Fe.log_id && (Er(Fe), await Tn());
      } else C.node && Array.isArray(Fe.menu_items) && Fe.menu_items.length && e(4, Bt = {
        items: Fe.menu_items,
        node: C.node,
        componentContext: C.componentContext
      });
    }
    v.forEach((et) => {
      et.log_id && Vt(C.logType || "click", et);
    });
  }
  function Er(v) {
    z == null || z(v);
  }
  function Y(v, C) {
    const S = (v == null ? void 0 : v.logError) || N;
    if (!Array.isArray(C) || !C.length)
      return;
    const le = [];
    return C.forEach((W) => {
      let et = !1;
      if (typeof W.condition != "string") {
        S(X(new Error("variable_trigger has a condition that is not a string"), {
          additional: { condition: W.condition }
        }));
        return;
      }
      if (!Array.isArray(W.actions)) {
        S(X(new Error("variable_trigger has no actions"), {
          additional: { condition: W.condition }
        }));
        return;
      }
      const Fe = W.mode || "on_condition";
      if (Fe !== "on_variable" && Fe !== "on_condition") {
        S(X(new Error("variable_trigger has an unsupported mode"), { additional: { mode: Fe } }));
        return;
      }
      const Ft = de(S, { condition: W.condition }, {
        additionalVars: v == null ? void 0 : v.variables,
        customFunctions: v == null ? void 0 : v.customFunctions,
        emptyVarsError: () => {
          S(X(new Error("variable_trigger must have variables in the condition"), {
            additional: { condition: W.condition }
          }));
        }
      }).subscribe(async (Qe) => {
        Qe.condition !== void 0 && (// if condition is truthy
        Qe.condition && // and trigger mode matches
        (Fe === "on_variable" || Fe === "on_condition" && et === !1) ? (et = !!Qe.condition, v ? await v.execAnyActions(W.actions, { logType: "trigger" }) : await Ot(W.actions, { logType: "trigger" })) : et = !!Qe.condition);
      });
      le.push(Ft);
    }), () => {
      le.forEach((W) => {
        W();
      });
    };
  }
  function gt(v) {
    return ge[v];
  }
  function Kt(v, C) {
    ge[v] = C;
  }
  const At = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Map(), Tr = /* @__PURE__ */ new Map(), wr = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map();
  function Yr(v, C, S = "error") {
    if (At.has(v)) {
      N(X(new Error("Duplicate instance id"), {
        level: S,
        additional: { id: v }
      }));
      return;
    }
    At.set(v, C);
  }
  function or(v) {
    At.delete(v);
  }
  function lt(v) {
    if (!At.has(v)) {
      N(X(new Error("Missing instance with id"), { additional: { id: v } }));
      return;
    }
    return At.get(v);
  }
  function St(v, C) {
    Cr.set(v, C);
  }
  function er(v) {
    Cr.delete(v);
  }
  function Qt(v, C) {
    Tr.set(v, C);
  }
  function pr(v) {
    Tr.delete(v);
  }
  function _t(v, C) {
    const S = C.id;
    S && (wr.has(S) && N(X(new Error("Duplicate tooltip id"), { additional: { id: S } })), wr.set(S, { onwerNode: v, tooltip: C }));
  }
  function ie(v) {
    const C = v.id;
    C && (wr.delete(C), jt.some((S) => S.desc.id === C) && e(3, jt = jt.filter((S) => S.desc.id !== C)));
  }
  function vt(v) {
    const C = Re.get(v) || Bo(void 0);
    return Re.has(v) || Re.set(v, C), C;
  }
  function ir(v, C, S) {
    const le = ze.get(v);
    if (le)
      return le;
    const W = _o(v, C, S);
    return ze.set(v, W), W;
  }
  function vr() {
    if (!ht)
      return;
    ht[me].forEach((C) => {
      const S = te.get(C.name);
      S && S.setValue(C.color);
    });
  }
  function ar() {
    return ce;
  }
  function j(v, C) {
    const S = h.get(v);
    if (S)
      return new S(C || {});
  }
  function se(v) {
    return {
      variables: qo(te, v.variables),
      derviedExpression(C) {
        return v.getDerivedFromVars(C);
      },
      processExpressions(C) {
        return v.getJsonWithVars(C);
      },
      execAction: mr,
      logError: N,
      getComponentProperty(C) {
        return v.getJsonWithVars(v.json[C]);
      },
      direction: ae
    };
  }
  function d(v, C) {
    const S = /* @__PURE__ */ new Map(), le = (C == null ? void 0 : C.logError) || N;
    return v.forEach((W) => {
      if (S) {
        try {
          r3(W);
        } catch (Zt) {
          le(X(Zt));
          return;
        }
        const et = W, Fe = S.get(et.name) || [];
        Fe.push(n3(et)), S.set(et.name, Fe);
      }
    }), S;
  }
  function R(v) {
    const C = {
      id: "",
      json: {},
      path: [],
      templateContext: {},
      logError(S) {
        S.additional = S.additional || {}, S.additional.path = C.path.join("/"), N(S);
      },
      execAnyActions(S, le = {}) {
        return Ot(S, {
          componentContext: C,
          processUrls: le.processUrls,
          node: le.node,
          logType: le.logType,
          additionalVars: le.additionalVars
        });
      },
      getDerivedFromVars(S, le, W = !1, et = 1 / 0) {
        return de(C.logError, S, {
          additionalVars: qo(C.variables, le),
          keepComplex: W,
          customFunctions: C.customFunctions,
          maxDepth: et
        });
      },
      getJsonWithVars(S, le, W = !1) {
        return ut(C.logError, S, qo(C.variables, le), W, C.customFunctions);
      },
      evalExpression(S, le, W) {
        return Fa(qo(te, C.variables), C.customFunctions, S, le, W);
      },
      produceChildContext(S, le = {}) {
        const W = R(this);
        let et = S, Fe = this.templateContext;
        const { templateContext: Zt, json: Ft } = Dt(et, Fe);
        if (W.json = Ft, W.templateContext = Zt, W.origJson = S, W.id = le.id || Ft.id || "", W.id) {
          let yt = Nr.get(W.id);
          yt || (yt = /* @__PURE__ */ new Set(), Nr.set(W.id, yt)), yt.add(W);
        }
        le.key && (W.key = le.key), le.path !== void 0 && W.path.push(String(le.path)), S.type && !le.isRootState && W.path.push(S.type), le.isTooltipRoot && (W.isTooltipRoot = !0);
        let Qe;
        Array.isArray(Ft.variables) ? (Qe = qo(this.variables, qo(le.variables, /* @__PURE__ */ new Map())), Ft.variables.forEach((yt) => {
          const Ir = Pt(yt, W, Qe);
          Ir && Qe && Qe.set(Ir.getName(), Ir);
        })) : le.variables ? Qe = qo(this.variables, le.variables) : this.variables && (Qe = this.variables), W.variables = Qe;
        let xt;
        return Array.isArray(Ft.functions) && (xt = d(Ft.functions, this)), W.customFunctions = o3(this.customFunctions, xt), Array.isArray(Ft.animators) && (W.animators = Ft.animators.reduce(
          (yt, Ir) => (Ir.id && (yt[Ir.id] = Ir), yt),
          {}
        )), le.fake && (W.fakeElement = le.fake), le.isRootState && (W.isRootState = !0), W;
      },
      dup(S) {
        return { ...C, fakeElement: S };
      },
      getVariable(S, le) {
        var et;
        const W = ((et = C.variables) == null ? void 0 : et.get(S)) || te.get(S);
        if (W) {
          const Fe = W.getType();
          if (le && Fe !== le) {
            C.logError(X(new Error(`Variable should have type "${le}"`), { additional: { name: S, foundType: Fe } }));
            return;
          }
        }
        return W;
      },
      getAnimator(S) {
        var le, W;
        return ((le = C.animators) == null ? void 0 : le[S]) || ((W = C.parent) == null ? void 0 : W.getAnimator(S)) || void 0;
      },
      registerState(S, le) {
        const W = y3(C.parent);
        return W && (W.states = W.states || {}, W.states[S] = W.states[S] || [], W.states[S].push(le)), () => {
          var et;
          (et = W == null ? void 0 : W.states) != null && et[S] && (W.states[S] = W.states[S].filter((Fe) => Fe !== le), W.states[S].length || delete W.states[S]);
        };
      },
      registerPager(S) {
        const le = C.parent;
        return le ? (le.pagers = le.pagers || /* @__PURE__ */ new Map(), le.pagers.has(S) ? {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          update() {
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          destroy() {
          }
        } : (le.pagers.set(S, null), {
          update(W) {
            var Ft, Qe;
            le.pagers && le.pagers.set(S, W);
            const et = S ? (Ft = le.pagerListeners) == null ? void 0 : Ft.get(S) : void 0, Fe = (Qe = le.pagerListeners) == null ? void 0 : Qe.get(void 0);
            [...et || [], ...Fe || []].forEach((xt) => {
              xt(W);
            });
          },
          destroy() {
            le.pagers && le.pagers.delete(S);
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
      listenPager(S, le) {
        var Ft, Qe, xt;
        let W = C.parent;
        for (; W && !(W.pagers && (S ? W.pagers.get(S) : (Ft = W.pagers) != null && Ft.size)); )
          W = W.parent;
        if (!W)
          return () => {
          };
        W.pagerListeners = C.pagerListeners || /* @__PURE__ */ new Map();
        const et = W.pagerListeners.get(S) || [];
        W.pagerListeners.has(S) || W.pagerListeners.set(S, et), et.push(le);
        const Fe = S || ((Qe = W.pagers) == null ? void 0 : Qe.keys().next().value) || void 0, Zt = (xt = W.pagers) == null ? void 0 : xt.get(Fe);
        return Zt && le(Zt), () => {
          if (!W.pagerListeners)
            return;
          let yt = W.pagerListeners.get(Fe);
          yt && (yt = yt.filter((Ir) => Ir !== le) || [], yt.length ? W.pagerListeners.set(S, yt) : W.pagerListeners.delete(S));
        };
      },
      destroy() {
        const S = Nr.get(C.id);
        S && (S.delete(C), S.size || Nr.delete(C.id));
      }
    };
    return v ? (C.parent = v, C.path = v.path.slice(), v.fakeElement && (C.fakeElement = v.fakeElement)) : (C.json = { type: "root" }, C.isRootState = !0), C;
  }
  function Pe(v) {
    fe ? dt.push(v) : clearTimeout(v);
  }
  mi(xr, {
    logStat: Vt,
    hasTemplate: pt,
    genId: ot,
    genClass: Q,
    execCustomAction: Er,
    processVariableTriggers: Y,
    isRunning: gt,
    setRunning: Kt,
    pagerChildrenClipEnabled: F,
    pagerMouseDragEnabled: P,
    registerInstance: Yr,
    unregisterInstance: or,
    registerParentOf: St,
    unregisterParentOf: er,
    registerTooltip: _t,
    unregisterTooltip: ie,
    onTooltipClose: Mn,
    tooltipRoot: M,
    registerFocusable: Qt,
    unregisterFocusable: pr,
    addSvgFilter: tr,
    removeSvgFilter: Xt,
    registerId: rt,
    getComponentId: We,
    preparePrototypeVariables: De,
    getCustomization: Z,
    getBuiltinProtocols: ar,
    getExtension: j,
    getExtensionContext: se,
    registerTimeout: Pe,
    typefaceProvider: ee,
    isDesktop: Ae,
    isPointerFocus: Ma,
    customComponents: q,
    direction: re,
    videoPlayerProvider: J,
    awaitGlobalVariable: ir,
    componentDevtool: void 0,
    devtoolCreateHierarchy: "lazy"
  }), mi(Oo, {
    hasAction() {
      return !1;
    }
  }), mi(wa, {
    runVisibilityTransition(v, C, S, le, W) {
      return Promise.resolve();
    },
    registerChildWithTransitionIn(v, C, S, le) {
      return Promise.resolve();
    },
    registerChildWithTransitionOut(v, C, S, le) {
      return Promise.resolve();
    },
    registerChildWithTransitionChange(v, C, S, le) {
      return Promise.resolve();
    },
    hasTransitionChange(v) {
      return !1;
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    registerChild(v) {
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    unregisterChild(v) {
    }
  }), mi(va, { isEnabled: Xo(!0) });
  function Xe(v, C) {
    const S = te.get(v);
    return (S == null ? void 0 : S.getType()) === C;
  }
  function je(v, C) {
    const S = te.get(v);
    S ? S.setValue(C) : N(X(new Error("Cannot find variable"), { additional: { name: v } }));
  }
  function H(v, C, S) {
    const le = (C == null ? void 0 : C.logError) || N, W = v.name, et = v.value_type;
    if (typeof v.get != "string" || !v.get) {
      le(X(new Error("Incorrect property getter"), { additional: { name: W } }));
      return;
    }
    if (!W) {
      le(X(new Error("Missing property name")));
      return;
    }
    if (!et) {
      le(X(new Error("Missing property value_type")));
      return;
    }
    const Fe = C ? C.getDerivedFromVars(v.get, void 0, !0) : de(N, v.get, { keepComplex: !0 });
    if (Hl(Fe) === void 0)
      return;
    const Ft = (Qe) => {
      const xt = Ds(v.new_value_variable_name || "new_value", v.value_type, Qe), yt = new Map(S);
      yt.set(xt.getName(), xt), Array.isArray(v.set) && v.set.length ? C ? C.execAnyActions(v.set, { additionalVars: yt }) : Ot(v.set, { additionalVars: yt }) : le(X(new Error("Cannot set property. No setters provided."), { additional: { name: W } }));
    };
    return {
      getName() {
        return W;
      },
      subscribe(Qe) {
        return Fe.subscribe(Qe);
      },
      set(Qe) {
        const xt = D1(Qe, et);
        Ft(xt);
      },
      setValue: Ft,
      getValue() {
        return Hl(Fe);
      },
      getType() {
        return et;
      }
    };
  }
  function Pt(v, C, S) {
    if (v.type === "property")
      return H(v, C, S);
    if (!v.type || !v.name || !(v.type in xl) || !("value" in v))
      return;
    const le = v.value;
    let W = C ? C.getJsonWithVars(le, S, !0) : ut(N, le, S, !0);
    if (!(le && typeof le == "string" && W === void 0)) {
      v.type === "integer" && typeof W == "number" && (W > Number.MAX_SAFE_INTEGER || W < Number.MIN_SAFE_INTEGER) && N(X(new Error("The value of the integer variable could lose accuracy"), {
        level: "warn",
        additional: { name: v.name, value: W }
      }));
      try {
        return _o(v.name, v.type, W);
      } catch (et) {
        N(X(et, { additional: { name: v.name } }));
      }
    }
  }
  function Ht(v) {
    const C = Pt(v);
    C && (Ye.set(v.name, C), te.set(v.name, C));
  }
  for (const [v, C] of Je)
    te.has(v) || te.set(v, C);
  const Ze = (Zr = l == null ? void 0 : l.card) == null ? void 0 : Zr.variables;
  Array.isArray(Ze) && Ze.forEach((v) => {
    if (v && v.name) {
      if (Ye.has(v.name)) {
        N(X(new Error("Duplicate variable"), { additional: { name: v.name } }));
        return;
      }
      Ht(v);
    }
  });
  const ht = l.palette;
  ht && ht[me].forEach((C) => {
    if (Ye.has(C.name)) {
      N(X(new Error("Duplicate variable"), { additional: { name: C.name } }));
      return;
    }
    try {
      const S = _o(C.name, "color", C.color);
      Ye.set(C.name, S), te.set(C.name, S);
    } catch (S) {
      N(X(S, { additional: { name: C.name } }));
    }
  }), Se.subscribe((v) => {
    if (v && !te.has(v)) {
      const C = Je.get(v);
      te.set(v, C);
      const S = Re.get(v);
      if (S) {
        let W = 0;
        C.subscribe(() => {
          S.set(++W);
        });
      }
      const le = ze.get(v);
      le && le.getType() === C.getType() && C.subscribe((W) => {
        le.set(W);
      });
    }
  });
  const Yt = () => {
    var v;
    Y(void 0, (v = l == null ? void 0 : l.card) == null ? void 0 : v.variable_triggers);
  }, Mr = ($r = l == null ? void 0 : l.card) == null ? void 0 : $r.timers;
  if (Mr && typeof document < "u") {
    const v = at = new u3({
      logError: N,
      applyVars: (C) => ut(N, C),
      hasVariableWithType: Xe,
      setVariableValue: je,
      execAnyActions: Ot
    });
    Mr.forEach((C) => v.createTimer(C));
  }
  const kr = R();
  Array.isArray((kn = l.card) == null ? void 0 : kn.functions) && (kr.customFunctions = d(l.card.functions));
  let Wr;
  function Mn(v) {
    e(3, jt = jt.filter((C) => C.internalId !== v));
  }
  no(() => {
    Vs++, Vs === 1 && (window.addEventListener("keydown", sd), window.addEventListener("pointerdown", ld)), Tn().then(() => {
      fe && Yt();
    });
  }), cn(() => {
    fe = !1, Vs--, Vs || (window.removeEventListener("keydown", sd), window.removeEventListener("pointerdown", ld));
    for (const [v, C] of ct)
      C.stop();
    at && at.destroy(), jt.forEach((v) => {
      v.timeoutId && (clearTimeout(v.timeoutId), v.timeoutId = null);
    }), dt.forEach((v) => {
      clearTimeout(v);
    });
  });
  const Ve = () => e(4, Bt = void 0);
  return t.$$set = (v) => {
    "id" in v && e(13, a = v.id), "json" in v && e(11, l = v.json), "platform" in v && e(14, c = v.platform), "theme" in v && e(12, u = v.theme), "globalVariablesController" in v && e(15, f = v.globalVariablesController), "mix" in v && e(0, _ = v.mix), "customization" in v && e(16, p = v.customization), "builtinProtocols" in v && e(17, m = v.builtinProtocols), "extensions" in v && e(18, h = v.extensions), "onError" in v && e(19, y = v.onError), "onStat" in v && e(20, w = v.onStat), "onSubmit" in v && e(21, D = v.onSubmit), "onCustomAction" in v && e(22, z = v.onCustomAction), "onComponent" in v && e(23, B = v.onComponent), "typefaceProvider" in v && e(24, ee = v.typefaceProvider), "fetchInit" in v && e(25, ue = v.fetchInit), "tooltipRoot" in v && e(26, M = v.tooltipRoot), "customComponents" in v && e(27, q = v.customComponents), "direction" in v && e(28, ae = v.direction), "store" in v && e(29, A = v.store), "pagerChildrenClipEnabled" in v && e(30, F = v.pagerChildrenClipEnabled), "pagerMouseDragEnabled" in v && e(31, P = v.pagerMouseDragEnabled), "weekStartDay" in v && e(32, O = v.weekStartDay), "videoPlayerProvider" in v && e(33, J = v.videoPlayerProvider), "devtoolCreateHierarchy" in v && e(34, he = v.devtoolCreateHierarchy);
  }, t.$$.update = () => {
    var v, C;
    if (t.$$.dirty[0] & /*theme*/
    4096 | t.$$.dirty[1] & /*themeQuery*/
    2048 && (u === "light" || u === "dark" ? e(41, me = u) : u === "system" ? typeof matchMedia < "u" ? (Ie || (e(42, Ie = matchMedia("(prefers-color-scheme: dark)")), Ie.addListener(tt)), e(41, me = Ie.matches ? "dark" : "light")) : e(41, me = "light") : N(X(new Error("Unsupported theme")))), t.$$.dirty[1] & /*currentTheme*/
    1024 && me && vr(), t.$$.dirty[0] & /*json*/
    2048) {
      e(1, be = !1);
      const S = i3(l);
      S && (e(1, be = !0), N(S));
    }
    if (t.$$.dirty[0] & /*json*/
    2048 && (n = l.templates || {}), t.$$.dirty[0] & /*json*/
    2048 && (v = l == null ? void 0 : l.card) != null && v.variables && Array.isArray(l.card.variables) && l.card.variables !== Ze && l.card.variables.forEach((S) => {
      S && S.name && !Ye.has(S.name) && !te.has(S.name) && Ht(S);
    }), t.$$.dirty[0] & /*json*/
    2048 && e(44, o = (C = l == null ? void 0 : l.card) == null ? void 0 : C.states), t.$$.dirty[0] & /*hasError, hasIdError*/
    6 | t.$$.dirty[1] & /*states, rootComponentContext*/
    12288 && o && !be && !x) {
      const S = {
        type: "state",
        id: "root",
        width: { type: "match_parent" },
        height: { type: "match_parent" },
        states: o.map((le) => ({
          state_id: le.state_id.toString(),
          div: le.div
        }))
      };
      e(6, Wr = kr.produceChildContext(S, { isRootState: !0 }));
    }
  }, [
    _,
    be,
    x,
    jt,
    Bt,
    It,
    Wr,
    i,
    s,
    Ae,
    re,
    l,
    u,
    a,
    c,
    f,
    p,
    m,
    h,
    y,
    w,
    D,
    z,
    B,
    ee,
    ue,
    M,
    q,
    ae,
    A,
    F,
    P,
    O,
    J,
    he,
    qe,
    Ke,
    ve,
    Te,
    pe,
    mr,
    me,
    Ie,
    kr,
    o,
    Ve
  ];
}
class o4 extends Hr {
  constructor(r) {
    super(), Rr(
      this,
      r,
      n4,
      $3,
      Fr,
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
const i4 = 8;
class c4 {
  constructor(r) {
    jr(this, "widthVariableName");
    jr(this, "heightVariableName");
    jr(this, "resizeObserver");
    jr(this, "context");
    jr(this, "node");
    jr(this, "sizeHistory", {});
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
        if (++o > i4) {
          const i = new Error("Recursive layout in size_provider");
          i.level = "warn", i.additional = {
            widthVariableName: this.widthVariableName,
            heightVariableName: this.heightVariableName
          }, e.logError(i);
          break;
        }
        await Tn();
      }
      this.sizeHistory = {};
    })), (n = this.resizeObserver) == null || n.observe(r), this.recalcProps();
  }
  unmountView(r, e) {
    var n;
    (n = this.resizeObserver) == null || n.disconnect(), this.resizeObserver = void 0;
  }
}
const Pi = 8;
class u4 {
  constructor(r) {
    jr(this, "context");
    jr(this, "params");
    jr(this, "startCoords");
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
    (Math.abs(e) > Pi || Math.abs(n) > Pi) && (Math.abs(e) > Math.abs(n) ? e > Pi ? this.processActions("swipe_right") : e < -Pi && this.processActions("swipe_left") : n > Pi ? this.processActions("swipe_down") : n < -Pi && this.processActions("swipe_up"), this.startCoords = void 0);
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
function s4(t) {
  return t instanceof HTMLElement;
}
function d4(t) {
  return class {
    constructor(e) {
      jr(this, "params");
      jr(this, "animItem");
      jr(this, "wrapper");
      jr(this, "isPlayingUnsubscriber");
      jr(this, "isPlaying", !0);
      jr(this, "unsubscribe");
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
      const o = Array.from(e.children).filter(s4);
      o.forEach((_) => {
        _.style.display = "none";
      }), e.setAttribute("data-lottie", "true");
      const i = this.wrapper = document.createElement("div");
      this.wrapper.style.width = "100%", this.wrapper.style.height = "100%";
      const s = this.getRatio(n), a = this.getScale(n);
      s && (this.wrapper.style.aspectRatio = String(s)), this.setWrapperScale(a), e.appendChild(this.wrapper);
      const l = Number((f = n.processExpressions(this.params.repeat_count)) != null ? f : -1), c = n.processExpressions(this.params.repeat_mode), u = () => {
        var p, m;
        (p = this.animItem) == null || p.destroy(), o.forEach((h) => {
          h.style.display = "";
        }), e.removeAttribute("data-lottie"), this.wrapper && ((m = this.wrapper.parentNode) == null || m.removeChild(this.wrapper), this.wrapper = void 0);
        const _ = new Error("Failed to load lottie animation");
        _.level = "error", _.additional = {
          url: this.params.lottie_url
        }, n.logError(_);
      };
      this.unsubscribe = n.derviedExpression(this.params.lottie_url).subscribe((_) => {
        this.loadData(_).then((p) => {
          var y;
          (y = this.animItem) == null || y.destroy();
          const m = l !== 0, h = this.animItem = t({
            container: i,
            animationData: p,
            renderer: "svg",
            loop: m,
            rendererSettings: {
              preserveAspectRatio: a.attribute
            }
          });
          if (this.setSvgScale(a), this.animItem.addEventListener("data_failed", u), m && (c === "reverse" || l !== -1)) {
            let w = 1, D = 0;
            h.addEventListener("loopComplete", () => {
              ++D, l !== -1 && D === l + 1 ? (h.stop(), h.goToAndStop(h.totalFrames, !0)) : (c === "reverse" && (w *= -1, h.setDirection(w)), h.goToAndPlay(w === 1 ? 0 : h.totalFrames, !0));
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
function h4(t, r = {}) {
  return class {
    constructor() {
      jr(this, "prevDOM", null);
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
        const p = u[f];
        (p.nodeType !== 1 || p !== s) && i.removeChild(p);
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
function p4(t) {
  const { target: r, hydrate: e, ...n } = t, o = new o4({
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
  u4 as Gesture,
  c4 as SizeProvider,
  a4 as createGlobalVariablesController,
  _o as createVariable,
  d4 as lottieExtensionBuilder,
  h4 as markdownExtensionBuilder,
  p4 as render
};
//# sourceMappingURL=client-hydratable.mjs.map

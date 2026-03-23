var V_ = Object.defineProperty;
var I_ = (t, r, e) => r in t ? V_(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var Er = (t, r, e) => I_(t, typeof r != "symbol" ? r + "" : r, e);
/*!
    DivKit v32.39.0
    https://github.com/divkit/divkit
    @licence Apache-2.0
*/
function S() {
}
const ll = (t) => t;
function Io(t, r) {
  for (const e in r) t[e] = r[e];
  return (
    /** @type {T & S} */
    t
  );
}
function fd(t) {
  return t();
}
function La() {
  return /* @__PURE__ */ Object.create(null);
}
function Ur(t) {
  t.forEach(fd);
}
function Lr(t) {
  return typeof t == "function";
}
function D_(t, r) {
  return t != t ? r == r : t !== r || t && typeof t == "object" || typeof t == "function";
}
let bs;
function eo(t, r) {
  return t === r ? !0 : (bs || (bs = document.createElement("a")), bs.href = r, t === bs.href);
}
function Tr(t, r) {
  return t != t ? r == r : t !== r;
}
function F_(t) {
  return Object.keys(t).length === 0;
}
function I(t, ...r) {
  if (t == null) {
    for (const n of r)
      n(void 0);
    return S;
  }
  const e = t.subscribe(...r);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function Wl(t) {
  let r;
  return I(t, (e) => r = e)(), r;
}
function En(t, r, e) {
  t.$$.on_destroy.push(I(r, e));
}
function al(t, r, e, n) {
  if (t) {
    const o = dd(t, r, e, n);
    return t[0](o);
  }
}
function dd(t, r, e, n) {
  return t[1] && n ? Io(e.ctx.slice(), t[1](n(r))) : e.ctx;
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
    const s = dd(r, e, n, i);
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
function Vl(t, r, e) {
  return t.set(e), r;
}
function dl(t) {
  return t && Lr(t.destroy) ? t.destroy : S;
}
function Ra(t) {
  const r = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return r ? [parseFloat(r[1]), r[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const _d = typeof window < "u";
let pa = _d ? () => window.performance.now() : () => Date.now(), ga = _d ? (t) => requestAnimationFrame(t) : S;
const Ri = /* @__PURE__ */ new Set();
function hd(t) {
  Ri.forEach((r) => {
    r.c(t) || (Ri.delete(r), r.f());
  }), Ri.size !== 0 && ga(hd);
}
function ma(t) {
  let r;
  return Ri.size === 0 && ga(hd), {
    promise: new Promise((e) => {
      Ri.add(r = { c: t, f: e });
    }),
    abort() {
      Ri.delete(r);
    }
  };
}
const Ho = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
let _l = !1;
function T_() {
  _l = !0;
}
function M_() {
  _l = !1;
}
function P_(t, r, e, n) {
  for (; t < r; ) {
    const o = t + (r - t >> 1);
    e(o) <= n ? t = o + 1 : r = o;
  }
  return t;
}
function N_(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let r = (
    /** @type {ArrayLike<NodeEx2>} */
    t.childNodes
  );
  if (t.nodeName === "HEAD") {
    const l = [];
    for (let u = 0; u < r.length; u++) {
      const c = r[u];
      c.claim_order !== void 0 && l.push(c);
    }
    r = l;
  }
  const e = new Int32Array(r.length + 1), n = new Int32Array(r.length);
  e[0] = -1;
  let o = 0;
  for (let l = 0; l < r.length; l++) {
    const u = r[l].claim_order, c = (o > 0 && r[e[o]].claim_order <= u ? o + 1 : P_(1, o, (d) => r[e[d]].claim_order, u)) - 1;
    n[l] = e[c] + 1;
    const f = c + 1;
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
  i.reverse(), s.sort((l, u) => l.claim_order - u.claim_order);
  for (let l = 0, u = 0; l < s.length; l++) {
    for (; u < i.length && s[l].claim_order >= i[u].claim_order; )
      u++;
    const c = u < i.length ? i[u] : null;
    t.insertBefore(s[l], c);
  }
}
function z_(t, r) {
  t.appendChild(r);
}
function pd(t) {
  if (!t) return document;
  const r = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return r && /** @type {ShadowRoot} */
  r.host ? (
    /** @type {ShadowRoot} */
    r
  ) : t.ownerDocument;
}
function O_(t) {
  const r = Ie("style");
  return r.textContent = "/* empty */", B_(pd(t), r), r.sheet;
}
function B_(t, r) {
  return z_(
    /** @type {Document} */
    t.head || t,
    r
  ), r.sheet;
}
function yt(t, r) {
  if (_l) {
    for (N_(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    r !== t.actual_end_child ? (r.claim_order !== void 0 || r.parentNode !== t) && t.insertBefore(r, t.actual_end_child) : t.actual_end_child = r.nextSibling;
  } else (r.parentNode !== t || r.nextSibling !== null) && t.appendChild(r);
}
function L_(t, r, e) {
  t.insertBefore(r, e || null);
}
function q(t, r, e) {
  _l && !e ? yt(t, r) : (r.parentNode !== t || r.nextSibling != e) && t.insertBefore(r, e || null);
}
function k(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function un(t, r) {
  for (let e = 0; e < t.length; e += 1)
    t[e] && t[e].d(r);
}
function Ie(t) {
  return document.createElement(t);
}
function Zr(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function On(t) {
  return document.createTextNode(t);
}
function dr() {
  return On(" ");
}
function We() {
  return On("");
}
function Je(t, r, e, n) {
  return t.addEventListener(r, e, n), () => t.removeEventListener(r, e, n);
}
function p(t, r, e) {
  e == null ? t.removeAttribute(r) : t.getAttribute(r) !== e && t.setAttribute(r, e);
}
const R_ = ["width", "height"];
function Qo(t, r) {
  const e = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in r)
    r[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = r[n] : n === "__value" ? t.value = t[n] = r[n] : e[n] && e[n].set && R_.indexOf(n) === -1 ? t[n] = r[n] : p(t, n, r[n]);
}
function H_(t, r) {
  Object.keys(r).forEach((e) => {
    W_(t, e, r[e]);
  });
}
function W_(t, r, e) {
  const n = r.toLowerCase();
  n in t ? t[n] = typeof t[n] == "boolean" && e === "" ? !0 : e : r in t ? t[r] = typeof t[r] == "boolean" && e === "" ? !0 : e : p(t, r, e);
}
function li(t) {
  return /-/.test(t) ? H_ : Qo;
}
function ve(t) {
  return Array.from(t.childNodes);
}
function gd(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function md(t, r, e, n, o = !1) {
  gd(t);
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
function bd(t, r, e, n) {
  return md(
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
function Fe(t, r, e) {
  return bd(t, r, e, Ie);
}
function sn(t, r, e) {
  return bd(t, r, e, Zr);
}
function Un(t, r) {
  return md(
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
    () => On(r),
    !0
    // Text nodes should not update last index since it is likely not worth it to eliminate an increasing subsequence of actual elements
  );
}
function _r(t) {
  return Un(t, " ");
}
function Ha(t, r, e) {
  for (let n = e; n < t.length; n += 1) {
    const o = t[n];
    if (o.nodeType === 8 && o.textContent.trim() === r)
      return n;
  }
  return -1;
}
function ba(t, r) {
  const e = Ha(t, "HTML_TAG_START", 0), n = Ha(t, "HTML_TAG_END", e + 1);
  if (e === -1 || n === -1)
    return new Hi(r);
  gd(t);
  const o = t.splice(e, n - e + 1);
  k(o[0]), k(o[o.length - 1]);
  const i = o.slice(1, o.length - 1);
  if (i.length === 0)
    return new Hi(r);
  for (const s of i)
    s.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1;
  return new Hi(r, i);
}
function to(t, r) {
  r = "" + r, t.data !== r && (t.data = /** @type {string} */
  r);
}
function Wa(t, r) {
  t.value = r == null ? "" : r;
}
function P(t, r, e, n) {
  e == null ? t.style.removeProperty(r) : t.style.setProperty(r, e, "");
}
function Ua(t, r, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const o = t.options[n];
    if (o.__value === r) {
      o.selected = !0;
      return;
    }
  }
  (!e || r !== void 0) && (t.selectedIndex = -1);
}
function U_(t) {
  const r = t.querySelector(":checked");
  return r && r.__value;
}
function yd(t, r, { bubbles: e = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: r, bubbles: e, cancelable: n });
}
class G_ {
  constructor(r = !1) {
    /**
     * @private
     * @default false
     */
    Er(this, "is_svg", !1);
    /** parent for creating node */
    Er(this, "e");
    /** html tag nodes */
    Er(this, "n");
    /** target */
    Er(this, "t");
    /** anchor */
    Er(this, "a");
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
    this.e || (this.is_svg ? this.e = Zr(
      /** @type {keyof SVGElementTagNameMap} */
      e.nodeName
    ) : this.e = Ie(
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
      L_(this.t, this.n[e], r);
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
class Hi extends G_ {
  constructor(e = !1, n) {
    super(e);
    /** @type {Element[]} hydration claimed nodes */
    Er(this, "l");
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
      q(this.t, this.n[n], e);
  }
}
function Ga(t, r) {
  return new t(r);
}
const Ks = /* @__PURE__ */ new Map();
let Xs = 0;
function J_(t) {
  let r = 5381, e = t.length;
  for (; e--; ) r = (r << 5) - r ^ t.charCodeAt(e);
  return r >>> 0;
}
function q_(t, r) {
  const e = { stylesheet: O_(r), rules: {} };
  return Ks.set(t, e), e;
}
function Zs(t, r, e, n, o, i, s, a = 0) {
  const l = 16.666 / n;
  let u = `{
`;
  for (let y = 0; y <= 1; y += l) {
    const w = r + (e - r) * i(y);
    u += y * 100 + `%{${s(w, 1 - w)}}
`;
  }
  const c = u + `100% {${s(e, 1 - e)}}
}`, f = `__svelte_${J_(c)}_${a}`, d = pd(t), { stylesheet: g, rules: m } = Ks.get(d) || q_(d, t);
  m[f] || (m[f] = !0, g.insertRule(`@keyframes ${f} ${c}`, g.cssRules.length));
  const h = t.style.animation || "";
  return t.style.animation = `${h ? `${h}, ` : ""}${f} ${n}ms linear ${o}ms 1 both`, Xs += 1, f;
}
function Qs(t, r) {
  const e = (t.style.animation || "").split(", "), n = e.filter(
    r ? (i) => i.indexOf(r) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), o = e.length - n.length;
  o && (t.style.animation = n.join(", "), Xs -= o, Xs || Y_());
}
function Y_() {
  ga(() => {
    Xs || (Ks.forEach((t) => {
      const { ownerNode: r } = t.stylesheet;
      r && k(r);
    }), Ks.clear());
  });
}
let fs;
function us(t) {
  fs = t;
}
function Xi() {
  if (!fs) throw new Error("Function called outside component initialization");
  return fs;
}
function ao(t) {
  Xi().$$.on_mount.push(t);
}
function hl(t) {
  Xi().$$.after_update.push(t);
}
function cn(t) {
  Xi().$$.on_destroy.push(t);
}
function K_() {
  const t = Xi();
  return (r, e, { cancelable: n = !1 } = {}) => {
    const o = t.$$.callbacks[r];
    if (o) {
      const i = yd(
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
function wi(t, r) {
  return Xi().$$.context.set(t, r), r;
}
function zr(t) {
  return Xi().$$.context.get(t);
}
function Hn(t, r) {
  const e = t.$$.callbacks[r.type];
  e && e.slice().forEach((n) => n.call(this, r));
}
const Oi = [], Pr = [];
let Wi = [];
const Ja = [], wd = /* @__PURE__ */ Promise.resolve();
let Ul = !1;
function vd() {
  Ul || (Ul = !0, wd.then(kd));
}
function Mn() {
  return vd(), wd;
}
function lo(t) {
  Wi.push(t);
}
const Il = /* @__PURE__ */ new Set();
let Pi = 0;
function kd() {
  if (Pi !== 0)
    return;
  const t = fs;
  do {
    try {
      for (; Pi < Oi.length; ) {
        const r = Oi[Pi];
        Pi++, us(r), X_(r.$$);
      }
    } catch (r) {
      throw Oi.length = 0, Pi = 0, r;
    }
    for (us(null), Oi.length = 0, Pi = 0; Pr.length; ) Pr.pop()();
    for (let r = 0; r < Wi.length; r += 1) {
      const e = Wi[r];
      Il.has(e) || (Il.add(e), e());
    }
    Wi.length = 0;
  } while (Oi.length);
  for (; Ja.length; )
    Ja.pop()();
  Ul = !1, Il.clear(), us(t);
}
function X_(t) {
  if (t.fragment !== null) {
    t.update(), Ur(t.before_update);
    const r = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, r), t.after_update.forEach(lo);
  }
}
function Z_(t) {
  const r = [], e = [];
  Wi.forEach((n) => t.indexOf(n) === -1 ? r.push(n) : e.push(n)), e.forEach((n) => n()), Wi = r;
}
let ss;
function ya() {
  return ss || (ss = Promise.resolve(), ss.then(() => {
    ss = null;
  })), ss;
}
function ki(t, r, e) {
  t.dispatchEvent(yd(`${r ? "intro" : "outro"}${e}`));
}
const Ds = /* @__PURE__ */ new Set();
let zo;
function mr() {
  zo = {
    r: 0,
    c: [],
    p: zo
    // parent group
  };
}
function br() {
  zo.r || Ur(zo.c), zo = zo.p;
}
function G(t, r) {
  t && t.i && (Ds.delete(t), t.i(r));
}
function $(t, r, e, n) {
  if (t && t.o) {
    if (Ds.has(t)) return;
    Ds.add(t), zo.c.push(() => {
      Ds.delete(t), n && (e && t.d(1), n());
    }), t.o(r);
  } else n && n();
}
const wa = { duration: 0 };
function pl(t, r, e) {
  const n = { direction: "in" };
  let o = r(t, e, n), i = !1, s, a, l = 0;
  function u() {
    s && Qs(t, s);
  }
  function c() {
    const {
      delay: d = 0,
      duration: g = 300,
      easing: m = ll,
      tick: h = S,
      css: y
    } = o || wa;
    y && (s = Zs(t, 0, 1, g, d, m, y, l++)), h(0, 1);
    const w = pa() + d, F = w + g;
    a && a.abort(), i = !0, lo(() => ki(t, !0, "start")), a = ma((R) => {
      if (i) {
        if (R >= F)
          return h(1, 0), ki(t, !0, "end"), u(), i = !1;
        if (R >= w) {
          const B = m((R - w) / g);
          h(B, 1 - B);
        }
      }
      return i;
    });
  }
  let f = !1;
  return {
    start() {
      f || (f = !0, Qs(t), Lr(o) ? (o = o(n), ya().then(c)) : c());
    },
    invalidate() {
      f = !1;
    },
    end() {
      i && (u(), i = !1);
    }
  };
}
function Ed(t, r, e) {
  const n = { direction: "out" };
  let o = r(t, e, n), i = !0, s;
  const a = zo;
  a.r += 1;
  let l;
  function u() {
    const {
      delay: c = 0,
      duration: f = 300,
      easing: d = ll,
      tick: g = S,
      css: m
    } = o || wa;
    m && (s = Zs(t, 1, 0, f, c, d, m));
    const h = pa() + c, y = h + f;
    lo(() => ki(t, !1, "start")), "inert" in t && (l = /** @type {HTMLElement} */
    t.inert, t.inert = !0), ma((w) => {
      if (i) {
        if (w >= y)
          return g(0, 1), ki(t, !1, "end"), --a.r || Ur(a.c), !1;
        if (w >= h) {
          const F = d((w - h) / f);
          g(1 - F, F);
        }
      }
      return i;
    });
  }
  return Lr(o) ? ya().then(() => {
    o = o(n), u();
  }) : u(), {
    end(c) {
      c && "inert" in t && (t.inert = l), c && o.tick && o.tick(1, 0), i && (s && Qs(t, s), i = !1);
    }
  };
}
function qa(t, r, e, n) {
  let i = r(t, e, { direction: "both" }), s = n ? 0 : 1, a = null, l = null, u = null, c;
  function f() {
    u && Qs(t, u);
  }
  function d(m, h) {
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
  function g(m) {
    const {
      delay: h = 0,
      duration: y = 300,
      easing: w = ll,
      tick: F = S,
      css: R
    } = i || wa, B = {
      start: pa() + h,
      b: m
    };
    m || (B.group = zo, zo.r += 1), "inert" in t && (m ? c !== void 0 && (t.inert = c) : (c = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), a || l ? l = B : (R && (f(), u = Zs(t, s, m, y, h, w, R)), m && F(0, 1), a = d(B, y), lo(() => ki(t, m, "start")), ma((Q) => {
      if (l && Q > l.start && (a = d(l, y), l = null, ki(t, a.b, "start"), R && (f(), u = Zs(
        t,
        s,
        a.b,
        a.duration,
        0,
        w,
        i.css
      ))), a) {
        if (Q >= a.end)
          F(s = a.b, 1 - s), ki(t, a.b, "end"), l || (a.b ? f() : --a.group.r || Ur(a.group.c)), a = null;
        else if (Q >= a.start) {
          const ae = Q - a.start;
          s = a.a + a.d * w(ae / a.duration), F(s, 1 - s);
        }
      }
      return !!(a || l);
    }));
  }
  return {
    run(m) {
      Lr(i) ? ya().then(() => {
        i = i({ direction: m ? "in" : "out" }), g(m);
      }) : g(m);
    },
    end() {
      f(), a = l = null;
    }
  };
}
function ar(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function jd(t, r) {
  $(t, 1, 1, () => {
    r.delete(t.key);
  });
}
function Cd(t, r, e, n, o, i, s, a, l, u, c, f) {
  let d = t.length, g = i.length, m = d;
  const h = {};
  for (; m--; ) h[t[m].key] = m;
  const y = [], w = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), R = [];
  for (m = g; m--; ) {
    const T = f(o, i, m), Y = e(T);
    let le = s.get(Y);
    le ? R.push(() => le.p(T, r)) : (le = u(Y, T), le.c()), w.set(Y, y[m] = le), Y in h && F.set(Y, Math.abs(m - h[Y]));
  }
  const B = /* @__PURE__ */ new Set(), Q = /* @__PURE__ */ new Set();
  function ae(T) {
    G(T, 1), T.m(a, c), s.set(T.key, T), c = T.first, g--;
  }
  for (; d && g; ) {
    const T = y[g - 1], Y = t[d - 1], le = T.key, C = Y.key;
    T === Y ? (c = T.first, d--, g--) : w.has(C) ? !s.has(le) || B.has(le) ? ae(T) : Q.has(C) ? d-- : F.get(le) > F.get(C) ? (Q.add(le), ae(T)) : (B.add(C), d--) : (l(Y, s), d--);
  }
  for (; d--; ) {
    const T = t[d];
    w.has(T.key) || l(T, s);
  }
  for (; g; ) ae(y[g - 1]);
  return Ur(R), y;
}
function Wo(t, r) {
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
function Ad(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Gt(t) {
  t && t.c();
}
function Jt(t, r) {
  t && t.l(r);
}
function Wt(t, r, e) {
  const { fragment: n, after_update: o } = t.$$;
  n && n.m(r, e), lo(() => {
    const i = t.$$.on_mount.map(fd).filter(Lr);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : Ur(i), t.$$.on_mount = [];
  }), o.forEach(lo);
}
function Ut(t, r) {
  const e = t.$$;
  e.fragment !== null && (Z_(e.after_update), Ur(e.on_destroy), e.fragment && e.fragment.d(r), e.on_destroy = e.fragment = null, e.ctx = []);
}
function Q_(t, r) {
  t.$$.dirty[0] === -1 && (Oi.push(t), vd(), t.$$.dirty.fill(0)), t.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function Rr(t, r, e, n, o, i, s = null, a = [-1]) {
  const l = fs;
  us(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: S,
    not_equal: o,
    bound: La(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(r.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: La(),
    dirty: a,
    skip_bound: !1,
    root: r.target || l.$$.root
  };
  s && s(u.root);
  let c = !1;
  if (u.ctx = e ? e(t, r.props || {}, (f, d, ...g) => {
    const m = g.length ? g[0] : d;
    return u.ctx && o(u.ctx[f], u.ctx[f] = m) && (!u.skip_bound && u.bound[f] && u.bound[f](m), c && Q_(t, f)), d;
  }) : [], u.update(), c = !0, Ur(u.before_update), u.fragment = n ? n(u.ctx) : !1, r.target) {
    if (r.hydrate) {
      T_();
      const f = ve(r.target);
      u.fragment && u.fragment.l(f), f.forEach(k);
    } else
      u.fragment && u.fragment.c();
    r.intro && G(t.$$.fragment), Wt(t, r.target, r.anchor), M_(), kd();
  }
  us(l);
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
    Ut(this, 1), this.$destroy = S;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(r, e) {
    if (!Lr(e))
      return S;
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
    this.$$set && !F_(r) && (this.$$.skip_bound = !0, this.$$set(r), this.$$.skip_bound = !1);
  }
}
const x_ = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(x_);
const Ni = [];
function $_(t, r) {
  return {
    subscribe: Oo(t, r).subscribe
  };
}
function Oo(t, r = S) {
  let e;
  const n = /* @__PURE__ */ new Set();
  function o(a) {
    if (D_(t, a) && (t = a, e)) {
      const l = !Ni.length;
      for (const u of n)
        u[1](), Ni.push(u, t);
      if (l) {
        for (let u = 0; u < Ni.length; u += 2)
          Ni[u][0](Ni[u + 1]);
        Ni.length = 0;
      }
    }
  }
  function i(a) {
    o(a(t));
  }
  function s(a, l = S) {
    const u = [a, l];
    return n.add(u), n.size === 1 && (e = r(o, i) || S), a(t), () => {
      n.delete(u), n.size === 0 && e && (e(), e = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Zi(t, r, e) {
  const n = !Array.isArray(t), o = n ? [t] : t;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = r.length < 2;
  return $_(e, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, f = S;
    const d = () => {
      if (c)
        return;
      f();
      const m = r(n ? u[0] : u, s, a);
      i ? s(m) : f = Lr(m) ? m : S;
    }, g = o.map(
      (m, h) => I(
        m,
        (y) => {
          u[h] = y, c &= ~(1 << h), l && d();
        },
        () => {
          c |= 1 << h;
        }
      )
    );
    return l = !0, d(), function() {
      Ur(g), f(), l = !1;
    };
  });
}
const eh = "appkit-root_platform_desktop", th = "appkit-root__clickable", rh = "appkit-root", nh = "appkit-root__selectable", oh = "appkit-root__unselectable", Ir = {
  root_platform_desktop: eh,
  root__clickable: th,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  "root__any-actions": "appkit-root__any-actions",
  root: rh,
  root__selectable: nh,
  root__unselectable: oh,
  "root__only-desktop": "appkit-root__only-desktop",
  "root_restrict-scroll": "appkit-root_restrict-scroll",
  "root_disabled-context-menu": "appkit-root_disabled-context-menu"
}, en = Symbol("root");
function K(t, r = {}) {
  const e = t;
  return e.level = r.level || "error", r.additional && (e.additional = r.additional), e;
}
const ih = "appkit-outer", sh = "appkit-outer_width_content", lh = "appkit-outer_height_content", ah = "appkit-root__clickable", uh = "appkit-outer__border", ch = "appkit-outer_visibility_invisible", fh = "appkit-outer_visibility_gone", xs = {
  outer: ih,
  outer_width_content: sh,
  outer_height_content: lh,
  root__clickable: ah,
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
  outer__border: uh,
  outer_visibility_invisible: ch,
  outer_visibility_gone: fh,
  "outer_has-action-animation": "appkit-outer_has-action-animation",
  "outer_has-custom-focus": "appkit-outer_has-custom-focus"
};
function nr(t) {
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
function ue(t) {
  if (typeof t != "number" && typeof t != "string" || !t)
    return "0";
  const r = Number(t);
  return Number.isNaN(r) ? "0" : Math.ceil(r * 1e3) / 1e4 + "em";
}
function hn(t) {
  let r = ue(t);
  return r === "0" && (r += "em"), r;
}
function Sd(t, r) {
  for (; t.length < r; )
    t = "0" + t;
  return t;
}
function gr(t, r = 1, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = bo(t);
  return n ? (n.a *= r, va(n)) : e;
}
function dh(t, r, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = bo(t);
  return n ? (n.a = r, va(n)) : e;
}
function va(t) {
  return t.a === 255 ? `#${[t.r, t.g, t.b].map((r) => Sd(Math.round(r).toString(16), 2)).join("")}` : `rgba(${t.r},${t.g},${t.b},${(t.a / 255).toFixed(2)})`;
}
function bo(t) {
  const r = (
    // #AARRGGBB
    t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #ARGB
    t.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])$/i) || // #RRGGBB
    t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #RGB
    t.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)
  );
  if (r) {
    if (r.length === 5) {
      const [u, c, f, d, g] = r, m = f.length === 2 ? f : f + f, h = d.length === 2 ? d : d + d, y = g.length === 2 ? g : g + g, w = c.length === 2 ? c : c + c;
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
function Gl(t) {
  let r = String(t);
  return r.indexOf("&") > -1 && (r = r.replace(/&/g, "&amp;")), r.indexOf("<") > -1 && (r = r.replace(/</g, "&lt;")), r.indexOf(">") > -1 && (r = r.replace(/>/g, "&gt;")), r.indexOf('"') > -1 && (r = r.replace(/"/g, "&quot;")), r;
}
const Uo = Boolean;
function gl(t, r) {
  if (t.length === 1 && t[0].type === "solid")
    return hh({
      bg: t[0]
    });
  const e = t.map((n) => {
    if (n.type === "solid")
      return _h({
        bg: n
      });
    if (n.type === "gradient")
      return ph({
        bg: n
      });
    if (n.type === "image")
      return bh({
        bg: n,
        direction: r
      });
    if (n.type === "radial_gradient")
      return mh({
        bg: n
      });
  }).filter(Uo).reverse().reduce(function(n, o) {
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
function _h(t) {
  const r = gr(t.bg.color || "transparent");
  return {
    size: void 0,
    pos: void 0,
    image: `linear-gradient(to bottom,${r},${r})`
  };
}
function hh(t) {
  return {
    color: gr(t.bg.color || "transparent"),
    size: "auto",
    position: "50% 50%"
  };
}
function Vd(t) {
  return t.every((n) => n.color && typeof n.position == "number" && n.position >= 0 && n.position <= 1) ? t.sort((n, o) => Math.abs(n.position - o.position) < 1e-6 ? 0 : n.position - o.position).map((n) => `${gr(n.color)} ${(n.position * 100).toFixed(2)}%`).join(",") : void 0;
}
function ph(t) {
  var n, o, i, s;
  if (!Array.isArray((n = t.bg) == null ? void 0 : n.colors) && !Array.isArray((o = t.bg) == null ? void 0 : o.color_map))
    return;
  const r = (i = t.bg.colors) == null ? void 0 : i.filter(Uo);
  if (!(r != null && r.length) && !((s = t.bg) != null && s.color_map))
    return;
  let e;
  if (t.bg.color_map) {
    const a = Vd(t.bg.color_map);
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
const gh = {
  nearest_corner: "closest-corner",
  farthest_corner: "farthest-corner",
  nearest_side: "closest-side",
  farthest_side: "farthest-side"
};
function Ya(t) {
  if (t && typeof t == "object" && "type" in t && t.value !== void 0) {
    if (t.type === "fixed")
      return hn(t.value);
    if (t.type === "relative")
      return `${Number(t.value) * 100}%`;
  }
  return "50%";
}
function mh(t) {
  var a, l, u, c;
  if (!Array.isArray((a = t.bg) == null ? void 0 : a.colors) && !Array.isArray((l = t.bg) == null ? void 0 : l.color_map))
    return;
  const r = (u = t.bg.colors) == null ? void 0 : u.filter(Uo);
  if (!(r != null && r.length) && !((c = t.bg) != null && c.color_map))
    return;
  let e;
  if (t.bg.color_map ? e = Vd(t.bg.color_map) : r && (e = r.map((f) => gr(f)).join(",")), !e)
    return;
  const n = t.bg.radius;
  let o;
  n && typeof n == "object" && "type" in n && n.value !== void 0 && (n.type === "fixed" ? o = hn(n.value) : n.type === "relative" && (o = gh[n.value]));
  const i = Ya(t.bg.center_x), s = Ya(t.bg.center_y);
  return {
    size: void 0,
    pos: void 0,
    image: `radial-gradient(circle ${o || "farthest-corner"} at ${i} ${s},` + e + ")"
  };
}
function bh(t) {
  var e;
  const r = (e = t.bg) == null ? void 0 : e.image_url;
  if (r)
    return {
      size: Id(t.bg.scale),
      pos: Dd(t.bg, t.direction),
      image: 'url("' + Gl(r) + '")'
    };
}
function Id(t) {
  return t === "fit" ? "contain" : t === "stretch" ? "fill" : t === "no_scale" ? "none" : "cover";
}
function yh(t) {
  return t === "none" ? "auto" : t === "fill" ? "100% 100%" : t;
}
function Dd(t, r) {
  let e, n;
  return t.content_alignment_horizontal === "left" || r === "ltr" && t.content_alignment_horizontal === "start" || r === "rtl" && t.content_alignment_horizontal === "end" ? e = "0%" : t.content_alignment_horizontal === "right" || r === "ltr" && t.content_alignment_horizontal === "end" || r === "rtl" && t.content_alignment_horizontal === "start" ? e = "100%" : e = "50%", t.content_alignment_vertical === "top" ? n = "0%" : t.content_alignment_vertical === "bottom" ? n = "100%" : n = "50%", e + " " + n;
}
function ln(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e < 0 ? r : e;
}
function Ka(t, r, e) {
  return typeof r == "number" && (t && r > 0 && r <= 100 || !t && r >= 0 && r < 100) ? r : e;
}
function wh(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1 && t.index !== void 0;
}
function vh(t, {
  visibilityActions: r,
  disappearActions: e,
  rootCtx: n,
  componentContext: o
}) {
  const i = [];
  r && r.forEach((g) => {
    i.push({
      type: "visibility",
      index: i.length,
      action: g,
      visible: !1,
      count: 0,
      finished: !1
    });
  }), e && e.forEach((g) => {
    i.push({
      type: "disappear",
      index: i.length,
      action: g,
      // false, so disappear only works after the element becomes visible
      visible: !1,
      count: 0,
      finished: !1
    });
  });
  const s = i.map((g, m) => {
    const h = g.type === "visibility";
    return o.getDerivedFromVars({
      index: m,
      visibility_percentage: g.action.visibility_percentage,
      visibility_duration: h ? g.action.visibility_duration : g.action.disappear_duration,
      log_limit: g.action.log_limit,
      is_enabled: g.action.is_enabled
    }, void 0, !0);
  });
  let a;
  const l = () => {
    a && a.disconnect(), i.forEach((g) => {
      g.timer && clearTimeout(g.timer);
    });
  }, u = Zi(s, (g) => g);
  let c;
  const f = (g) => {
    const m = g.type === "visibility";
    o.execAnyActions([g.action], {
      logType: m ? "visible" : "disappear",
      node: t,
      processUrls: !1
    });
  }, d = u.subscribe((g) => {
    c = g.filter(wh);
    const m = {};
    c.forEach((w) => {
      m[w.index] = w;
    }), l();
    const h = [...new Set(c.map((w) => {
      const F = i[w.index].type === "visibility";
      return Ka(
        F,
        w.visibility_percentage,
        F ? 50 : 0
      ) / 100;
    }))];
    if (!h.length)
      return;
    const y = (w) => {
      w.forEach((F) => {
        c.forEach((R) => {
          const B = i[R.index], Q = B.type === "visibility", ae = Ka(
            Q,
            R.visibility_percentage,
            Q ? 50 : 0
          );
          let T;
          ae === 0 ? T = F.intersectionRatio >= 1e-12 : T = F.intersectionRatio >= ae / 100, (Q ? !B.visible && T : B.visible && !T) ? B.finished || (B.timer = setTimeout(() => {
            ++B.count;
            const C = R.log_limit === 0 ? 1 / 0 : R.log_limit || 1;
            B.count >= C && (B.finished = !0), f(B);
          }, ln(R.visibility_duration, 800))) : (Q ? !T : T) && B.timer && clearTimeout(B.timer), B.visible = T;
        });
      });
    };
    a = new IntersectionObserver(y, {
      threshold: h
    }), a.observe(t);
  });
  return {
    destroy() {
      c == null || c.forEach((g) => {
        const m = i[g.index];
        !m || m.type !== "disappear" || !m.visible || m.finished || n.registerTimeout(window.setTimeout(() => {
          f(m);
        }, g.visibility_duration));
      }), l(), d();
    }
  };
}
function Xa(t, r) {
  r && t.push(r);
}
function wt(t, r, e) {
  const n = [];
  Xa(n, r[t]);
  for (const o in e)
    if (e.hasOwnProperty(o)) {
      const i = e[o];
      if (i) {
        const s = `${t}_${o}` + (typeof i == "string" ? `_${i}` : "");
        Xa(n, r[s]);
      }
    }
  return n.join(" ");
}
const ka = Symbol("state");
function yo(t, r) {
  var s, a;
  const e = t.top || 0, n = ((s = r === "ltr" ? t.end : t.start) != null ? s : t.right) || 0, o = t.bottom || 0, i = ((a = r === "ltr" ? t.start : t.end) != null ? a : t.left) || 0;
  return e === 0 && n === 0 && o === 0 && i === 0 ? "" : ue(e) + " " + ue(n) + " " + ue(o) + " " + ue(i);
}
function ml(t) {
  if (typeof t != "number" && typeof t != "string")
    return !1;
  const r = Number(t);
  return !Number.isNaN(r);
}
function Bn(t) {
  return ml(t) && t >= 0;
}
function ds(t, r, e) {
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
    if (n[s] && !Bn(n[s]))
      return e;
  return yo(t, r);
}
function kh(t, r) {
  return !Bn(t) || t === void 0 || t > 1 ? r : Number(t);
}
const Eh = Object.prototype.hasOwnProperty;
function Qi(t, r) {
  if (Object.is(t, r))
    return !0;
  if (typeof t != "object" || t === null || typeof r != "object" || r === null)
    return Object.is(t, r);
  const e = Object.keys(t), n = Object.keys(r);
  if (e.length !== n.length)
    return !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (!Eh.call(r, i) || !Qi(t[i], r[i]))
      return !1;
  }
  return !0;
}
function oi(t, r) {
  return Qi(t, r) ? r : t;
}
function jh(t, r) {
  return t === "visible" || t === "invisible" || t === "gone" ? t : r;
}
function Fd(t, r) {
  return t === "linear" || t === "ease" || t === "ease_in_out" || t === "ease_in" || t === "ease_out" ? t : r;
}
function co(t, r) {
  const e = Number(t);
  return Number.isNaN(e) ? r : e;
}
function _s(t) {
  const r = [];
  return t.name === "set" ? (t.items || []).forEach((e) => {
    r.push(..._s(e));
  }) : r.push(t), r;
}
function ji(t, r) {
  if (!t || typeof t != "object")
    return r;
  const e = [
    "top",
    "right",
    "bottom",
    "left"
  ];
  for (let n = 0; n < e.length; ++n)
    if (t[e[n]] && !Bn(t[e[n]]))
      return r;
  return t;
}
function Ch(t, r) {
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
function Ah(t, r) {
  const e = [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ];
  for (let n = 0; n < e.length; ++n)
    if (e[n] && !Bn(e[n]))
      return r;
  return t;
}
function Fs(t, r = 0, e = 10) {
  return [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ].map((n) => ue((n || r) / e * 10)).join(" ");
}
function Sh(t) {
  var r, e, n, o, i, s;
  return ue(((e = (r = t.offset) == null ? void 0 : r.x) == null ? void 0 : e.value) || 0) + " " + ue(((o = (n = t.offset) == null ? void 0 : n.y) == null ? void 0 : o.value) || 0) + " " + ue((i = t.blur) != null ? i : 2) + " " + gr(t.color || "#000000", (s = t.alpha) != null ? s : 0.19);
}
function Vh(t, r) {
  var e, n, o, i, s, a;
  return "drop-shadow(" + gr(t.color || "#000000", (e = t.alpha) != null ? e : 0.19) + " " + ue((((o = (n = t.offset) == null ? void 0 : n.x) == null ? void 0 : o.value) || 0) * 10 / r) + " " + ue((((s = (i = t.offset) == null ? void 0 : i.y) == null ? void 0 : s.value) || 0) * 10 / r) + " " + ue(((a = t.blur) != null ? a : 2) * 10 / r) + ")";
}
let Dl;
function Ji() {
  return typeof matchMedia > "u" ? !1 : (Dl || (Dl = window.matchMedia("(prefers-reduced-motion)")), Dl.matches);
}
const Ih = 8, Dh = (t, r, e, n) => {
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
          const d = new Error("Missing variable");
          d.level = "error", d.additional = {
            variableName: u
          }, r.logError(d);
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
      if (++i > Ih) {
        const u = new Error("Recursive layout in size_provider");
        u.level = "warn", u.additional = {
          widthVariableName: e,
          heightVariableName: n
        }, r.logError(u);
        break;
      }
      await Mn();
    }
  }), o.observe(t)), o;
}, Ea = Symbol("enabled");
function pn(t, r) {
  return t === 1 || t === 0 || t === !1 || t === !0 ? !!t : r;
}
function ai(t) {
  return [
    t.state_description,
    t.description,
    t.hint
  ].filter(Boolean).join(", ");
}
const Za = 1, ui = 2;
function Qa(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "translation-fixed")
      return ue(t.value * r);
    if (t.type === "translation-percentage")
      return `${t.value * r}%`;
  }
}
function ys(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "pivot-fixed")
      return ue(t.value * r);
    if (t.type === "pivot-percentage")
      return `${t.value * r}%`;
  }
}
function Fh(t) {
  return t.map((r) => {
    if (r.type === "rotation") {
      if (typeof r.angle == "number") {
        const e = ys(r.pivot_x) || "50%", n = ys(r.pivot_y) || "50%", o = ys(r.pivot_x, -1) || "-50%", i = ys(r.pivot_y, -1) || "-50%";
        return `translate(${e}, ${n}) rotate(${r.angle}deg) translate(${o}, ${i})`;
      }
    } else if (r.type === "translation") {
      const e = Qa(r.x) || 0, n = Qa(r.y) || 0;
      return `translate(${e}, ${n})`;
    }
  }).filter(Boolean).join(" ");
}
const Th = "appkit-actionable__button", xa = {
  actionable__button: Th
};
function Mh() {
}
const Bo = Symbol("action");
function Jl(t) {
  if (t.startsWith("tel:"))
    return "tel";
  if (t.startsWith("/"))
    return "https";
  const r = /^([^/]+):\/\//.exec(t);
  return r && r[1] || "";
}
function ql(t, r) {
  return r.has(t);
}
function Ph(t) {
  let r = (
    /*containerElement*/
    t[7]
  ), e, n, o = (
    /*containerElement*/
    t[7] && Fl(t)
  );
  return {
    c() {
      o && o.c(), e = We();
    },
    l(i) {
      o && o.l(i), e = We();
    },
    m(i, s) {
      o && o.m(i, s), q(i, e, s), n = !0;
    },
    p(i, s) {
      /*containerElement*/
      i[7] ? r ? Tr(
        r,
        /*containerElement*/
        i[7]
      ) ? (o.d(1), o = Fl(i), r = /*containerElement*/
      i[7], o.c(), o.m(e.parentNode, e)) : o.p(i, s) : (o = Fl(i), r = /*containerElement*/
      i[7], o.c(), o.m(e.parentNode, e)) : r && (o.d(1), o = null, r = /*containerElement*/
      i[7]);
    },
    i(i) {
      n || (G(o, i), n = !0);
    },
    o(i) {
      $(o, i), n = !1;
    },
    d(i) {
      i && k(e), o && o.d(i);
    }
  };
}
function Nh(t) {
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
      t[2] + " " + xa.actionable__button + " " + Ir["root__any-actions"] + ` ${/*isNativeActionAnimation*/
      t[6] ? Ir.root__clickable : Ir["root__clickable-no-transition"]} ${Ir.root__unselectable} ` + /*longTapActions*/
      ((f = t[1]) != null && f.length ? Ir["root_disabled-context-menu"] : "")
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
      t[0].fakeElement === ui ? -1 : null
    },
    /*attrs*/
    t[4]
  ], c = {};
  for (let d = 0; d < u.length; d += 1)
    c = Io(c, u[d]);
  return {
    c() {
      r = Ie("button"), l && l.c(), this.h();
    },
    l(d) {
      r = Fe(d, "BUTTON", {
        class: !0,
        style: !0,
        role: !0,
        "aria-checked": !0,
        type: !0,
        tabindex: !0
      });
      var g = ve(r);
      l && l.l(g), g.forEach(k), this.h();
    },
    h() {
      Qo(r, c);
    },
    m(d, g) {
      q(d, r, g), l && l.m(r, null), r.autofocus && r.focus(), t[48](r), o = !0, i || (s = [
        dl(
          /*use*/
          t[5].call(null, r)
        ),
        Je(
          r,
          "click",
          /*click_handler_1*/
          t[37]
        ),
        Je(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        Je(
          r,
          "focus",
          /*focus_handler_1*/
          t[38]
        ),
        Je(
          r,
          "blur",
          /*blur_handler_1*/
          t[39]
        ),
        Je(
          r,
          "pointerdown",
          /*pointerdown_handler_1*/
          t[40]
        ),
        Je(
          r,
          "wheel",
          /*wheel_handler_1*/
          t[41]
        )
      ], i = !0);
    },
    p(d, g) {
      var m;
      l && l.p && (!o || g[0] & /*$$scope*/
      1073741824) && cl(
        l,
        a,
        d,
        /*$$scope*/
        d[30],
        o ? ul(
          a,
          /*$$scope*/
          d[30],
          g,
          null
        ) : fl(
          /*$$scope*/
          d[30]
        ),
        null
      ), Qo(r, c = Wo(u, [
        (!o || g[0] & /*cls, isNativeActionAnimation, longTapActions*/
        70 && e !== (e = /*cls*/
        d[2] + " " + xa.actionable__button + " " + Ir["root__any-actions"] + ` ${/*isNativeActionAnimation*/
        d[6] ? Ir.root__clickable : Ir["root__clickable-no-transition"]} ${Ir.root__unselectable} ` + /*longTapActions*/
        ((m = d[1]) != null && m.length ? Ir["root_disabled-context-menu"] : ""))) && { class: e },
        (!o || g[0] & /*style*/
        8) && { style: (
          /*style*/
          d[3]
        ) },
        (!o || g[0] & /*role*/
        2048) && { role: (
          /*role*/
          d[11]
        ) },
        (!o || g[0] & /*isChecked*/
        32768) && { "aria-checked": (
          /*isChecked*/
          d[15]
        ) },
        { type: "button" },
        (!o || g[0] & /*componentContext*/
        1 && n !== (n = /*componentContext*/
        d[0].fakeElement === ui ? -1 : null)) && { tabindex: n },
        g[0] & /*attrs*/
        16 && /*attrs*/
        d[4]
      ]));
    },
    i(d) {
      o || (G(l, d), o = !0);
    },
    o(d) {
      $(l, d), o = !1;
    },
    d(d) {
      d && k(r), l && l.d(d), t[48](null), i = !1, Ur(s);
    }
  };
}
function zh(t) {
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
      t[2] + " " + Ir["root__any-actions"] + " " + /*isNativeActionAnimation*/
      (t[6] ? Ir.root__clickable : Ir["root__clickable-no-transition"]) + " " + /*longTapActions*/
      ((f = t[1]) != null && f.length ? Ir["root_disabled-context-menu"] : "")
    },
    {
      tabindex: n = /*componentContext*/
      t[0].fakeElement === ui ? -1 : null
    },
    /*attrs*/
    t[4]
  ], c = {};
  for (let d = 0; d < u.length; d += 1)
    c = Io(c, u[d]);
  return {
    c() {
      r = Ie("a"), l && l.c(), this.h();
    },
    l(d) {
      r = Fe(d, "A", {
        href: !0,
        target: !0,
        style: !0,
        role: !0,
        "aria-checked": !0,
        class: !0,
        tabindex: !0
      });
      var g = ve(r);
      l && l.l(g), g.forEach(k), this.h();
    },
    h() {
      Qo(r, c);
    },
    m(d, g) {
      q(d, r, g), l && l.m(r, null), t[47](r), o = !0, i || (s = [
        dl(
          /*use*/
          t[5].call(null, r)
        ),
        Je(
          r,
          "click",
          /*click_handler*/
          t[32]
        ),
        Je(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        Je(
          r,
          "focus",
          /*focus_handler*/
          t[33]
        ),
        Je(
          r,
          "blur",
          /*blur_handler*/
          t[34]
        ),
        Je(
          r,
          "pointerdown",
          /*pointerdown_handler*/
          t[35]
        ),
        Je(
          r,
          "wheel",
          /*wheel_handler*/
          t[36]
        )
      ], i = !0);
    },
    p(d, g) {
      var m;
      l && l.p && (!o || g[0] & /*$$scope*/
      1073741824) && cl(
        l,
        a,
        d,
        /*$$scope*/
        d[30],
        o ? ul(
          a,
          /*$$scope*/
          d[30],
          g,
          null
        ) : fl(
          /*$$scope*/
          d[30]
        ),
        null
      ), Qo(r, c = Wo(u, [
        (!o || g[0] & /*href*/
        512) && { href: (
          /*href*/
          d[9]
        ) },
        (!o || g[0] & /*target*/
        8192) && { target: (
          /*target*/
          d[13]
        ) },
        (!o || g[0] & /*style*/
        8) && { style: (
          /*style*/
          d[3]
        ) },
        (!o || g[0] & /*role*/
        2048) && { role: (
          /*role*/
          d[11]
        ) },
        (!o || g[0] & /*isChecked*/
        32768) && { "aria-checked": (
          /*isChecked*/
          d[15]
        ) },
        (!o || g[0] & /*cls, isNativeActionAnimation, longTapActions*/
        70 && e !== (e = /*cls*/
        d[2] + " " + Ir["root__any-actions"] + " " + /*isNativeActionAnimation*/
        (d[6] ? Ir.root__clickable : Ir["root__clickable-no-transition"]) + " " + /*longTapActions*/
        ((m = d[1]) != null && m.length ? Ir["root_disabled-context-menu"] : ""))) && { class: e },
        (!o || g[0] & /*componentContext*/
        1 && n !== (n = /*componentContext*/
        d[0].fakeElement === ui ? -1 : null)) && { tabindex: n },
        g[0] & /*attrs*/
        16 && /*attrs*/
        d[4]
      ]));
    },
    i(d) {
      o || (G(l, d), o = !0);
    },
    o(d) {
      $(l, d), o = !1;
    },
    d(d) {
      d && k(r), l && l.d(d), t[47](null), i = !1, Ur(s);
    }
  };
}
function Fl(t) {
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
      ((f = t[1]) != null && f.length ? Ir["root_disabled-context-menu"] : "") + " " + /*hasAnyActions*/
      (t[14] ? Ir["root__any-actions"] : "")
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
  for (let d = 0; d < u.length; d += 1)
    c = Io(c, u[d]);
  return {
    c() {
      r = Ie(
        /*containerElement*/
        t[7]
      ), l && l.c(), this.h();
    },
    l(d) {
      r = Fe(
        d,
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
      var g = ve(r);
      l && l.l(g), g.forEach(k), this.h();
    },
    h() {
      li(
        /*containerElement*/
        t[7]
      )(r, c);
    },
    m(d, g) {
      q(d, r, g), l && l.m(r, null), t[49](r), o = !0, i || (s = [
        dl(
          /*use*/
          t[5].call(null, r)
        ),
        Je(
          r,
          "click",
          /*click_handler_2*/
          t[42]
        ),
        Je(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        Je(
          r,
          "focus",
          /*focus_handler_2*/
          t[43]
        ),
        Je(
          r,
          "blur",
          /*blur_handler_2*/
          t[44]
        ),
        Je(
          r,
          "pointerdown",
          /*pointerdown_handler_2*/
          t[45]
        ),
        Je(
          r,
          "wheel",
          /*wheel_handler_2*/
          t[46]
        )
      ], i = !0);
    },
    p(d, g) {
      var m;
      l && l.p && (!o || g[0] & /*$$scope*/
      1073741824) && cl(
        l,
        a,
        d,
        /*$$scope*/
        d[30],
        o ? ul(
          a,
          /*$$scope*/
          d[30],
          g,
          null
        ) : fl(
          /*$$scope*/
          d[30]
        ),
        null
      ), li(
        /*containerElement*/
        d[7]
      )(r, c = Wo(u, [
        (!o || g[0] & /*cls, longTapActions, hasAnyActions*/
        16390 && e !== (e = /*cls*/
        d[2] + " " + /*longTapActions*/
        ((m = d[1]) != null && m.length ? Ir["root_disabled-context-menu"] : "") + " " + /*hasAnyActions*/
        (d[14] ? Ir["root__any-actions"] : ""))) && { class: e },
        (!o || g[0] & /*style*/
        8) && { style: (
          /*style*/
          d[3]
        ) },
        (!o || g[0] & /*role*/
        2048) && { role: (
          /*role*/
          d[11]
        ) },
        (!o || g[0] & /*isChecked*/
        32768) && { "aria-checked": (
          /*isChecked*/
          d[15]
        ) },
        (!o || g[0] & /*ariaHidden*/
        4096 && n !== (n = /*ariaHidden*/
        d[12] || void 0)) && {
          "aria-hidden": n
        },
        g[0] & /*attrs*/
        16 && /*attrs*/
        d[4]
      ]));
    },
    i(d) {
      o || (G(l, d), o = !0);
    },
    o(d) {
      $(l, d), o = !1;
    },
    d(d) {
      d && k(r), l && l.d(d), t[49](null), i = !1, Ur(s);
    }
  };
}
function Oh(t) {
  let r, e, n, o;
  const i = [zh, Nh, Ph], s = [];
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
      e.c(), n = We();
    },
    l(l) {
      e.l(l), n = We();
    },
    m(l, u) {
      s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? s[r].p(l, u) : (mr(), $(s[c], 1, 1, () => {
        s[c] = null;
      }), br(), e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n));
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && k(n), s[r].d(l);
    }
  };
}
const $a = 8, eu = 400, Tl = 400, Bh = /* @__PURE__ */ new Set(["button", "image", "checkbox", "radio", "header"]);
function tu(t) {
  t.preventDefault();
}
function Lh(t, r, e) {
  let n, o, i = S, s = () => (i(), i = I(n, (X) => e(29, o = X)), n);
  t.$$.on_destroy.push(() => i());
  let { $$slots: a = {}, $$scope: l } = r, { componentContext: u } = r, { id: c = "" } = r, { actions: f = void 0 } = r, { doubleTapActions: d = void 0 } = r, { longTapActions: g = void 0 } = r, { pressStartActions: m = void 0 } = r, { pressEndActions: h = void 0 } = r, { hoverStartActions: y = void 0 } = r, { hoverEndActions: w = void 0 } = r, { cls: F = "" } = r, { style: R = null } = r, { attrs: B = void 0 } = r, { use: Q = Mh } = r, { customAction: ae = null } = r, { isNativeActionAnimation: T = !0 } = r, { hasInnerFocusable: Y = !1 } = r, { customAccessibility: le = void 0 } = r, { captureFocusOnAction: C = !0 } = r, { containerElement: N = "span" } = r;
  const z = zr(en), O = zr(Bo);
  wi(Bo, {
    hasAction() {
      return !!(O.hasAction() || f != null && f.length || (le == null ? void 0 : le.mode) === "exclude");
    }
  });
  let oe, fe = "", ce, Ae = -1, _e = -1, Te = null, ee = !1, Me = !1, Xe = !1, Qe, Ee, it, we, Se = !1;
  function he() {
    return (o == null ? void 0 : o.some((X) => {
      if (X != null && X.typed)
        return !0;
      const It = X == null ? void 0 : X.url;
      if (!It)
        return !1;
      const zt = Jl(It);
      return zt && !ql(zt, z.getBuiltinProtocols());
    })) || !1;
  }
  async function x(X, It) {
    f && (X && he() && X.preventDefault(), u.execAnyActions(f, { node: oe, processUrls: It }));
  }
  async function de(X) {
    if (O.hasAction() || X.button !== void 0 && X.button !== 0)
      return;
    const It = Date.now();
    if (Ae > 0 && It > Ae + eu) {
      X.preventDefault();
      return;
    }
    if (d != null && d.length && _e > 0 && It - _e < Tl) {
      X.preventDefault(), u.execAnyActions(d, { processUrls: !0, node: oe }), _e = -1;
      return;
    }
    if (_e = It, d != null && d.length && Ae > 0 && It < Ae + Tl) {
      X.preventDefault(), clearTimeout(Ee), Ee = window.setTimeout(
        () => {
          x(void 0, !0);
        },
        Tl
      );
      return;
    }
    (ae == null ? void 0 : ae(X)) === !1 ? X.preventDefault() : x(X, !1);
  }
  function se(X) {
    O.hasAction() || (Te = { x: X.clientX, y: X.clientY }, ee = !1, Ae = Date.now(), Qe && clearTimeout(Qe), clearTimeout(Ee), u.execAnyActions(m, { node: oe }));
  }
  function De(X) {
    Te && (Math.abs(Te.x - X.clientX) > $a || Math.abs(Te.y - X.clientY) > $a) && (ee = !0);
  }
  function tt(X) {
    O.hasAction() || !Te || Ae < 0 || (!ee && Date.now() - Ae >= eu && (X.stopImmediatePropagation(), u.execAnyActions(g, { processUrls: !0, node: oe })), Qe && clearTimeout(Qe), Qe = window.setTimeout(
      () => {
        Te = null, Ae = -1;
      },
      100
    ), u.execAnyActions(h, { node: oe }));
  }
  function xe() {
    O.hasAction() || u.execAnyActions(y, { node: oe });
  }
  function ne() {
    O.hasAction() || u.execAnyActions(w, { node: oe });
  }
  function Ze(X) {
    const It = X.target;
    It instanceof HTMLElement && (It.tagName === "INPUT" || It.contentEditable === "true") || X.ctrlKey || X.metaKey || X.altKey || X.shiftKey || X.key === "Enter" && Array.isArray(f) && f.length && (u.execAnyActions(f), X.preventDefault());
  }
  ao(() => {
    c && !Y && z.registerFocusable(c, {
      focus() {
        oe && (fe || Me) && oe.focus();
      }
    });
  }), cn(() => {
    typeof window < "u" && (window.removeEventListener("pointermove", De), window.removeEventListener("pointerup", tt), window.removeEventListener("pointercancel", tt)), c && !Y && z.unregisterFocusable(c), Qe && clearTimeout(Qe), Ee && clearTimeout(Ee);
  });
  function Re(X) {
    Hn.call(this, t, X);
  }
  function ut(X) {
    Hn.call(this, t, X);
  }
  function ct(X) {
    Hn.call(this, t, X);
  }
  function ft(X) {
    Hn.call(this, t, X);
  }
  function Et(X) {
    Hn.call(this, t, X);
  }
  function st(X) {
    Hn.call(this, t, X);
  }
  function Lt(X) {
    Hn.call(this, t, X);
  }
  function _t(X) {
    Hn.call(this, t, X);
  }
  function pe(X) {
    Hn.call(this, t, X);
  }
  function ge(X) {
    Hn.call(this, t, X);
  }
  function gt(X) {
    Hn.call(this, t, X);
  }
  function Ce(X) {
    Hn.call(this, t, X);
  }
  function M(X) {
    Hn.call(this, t, X);
  }
  function Ct(X) {
    Hn.call(this, t, X);
  }
  function ht(X) {
    Hn.call(this, t, X);
  }
  function Dt(X) {
    Pr[X ? "unshift" : "push"](() => {
      oe = X, e(8, oe);
    });
  }
  function Nt(X) {
    Pr[X ? "unshift" : "push"](() => {
      oe = X, e(8, oe);
    });
  }
  function nt(X) {
    Pr[X ? "unshift" : "push"](() => {
      oe = X, e(8, oe);
    });
  }
  return t.$$set = (X) => {
    "componentContext" in X && e(0, u = X.componentContext), "id" in X && e(18, c = X.id), "actions" in X && e(19, f = X.actions), "doubleTapActions" in X && e(20, d = X.doubleTapActions), "longTapActions" in X && e(1, g = X.longTapActions), "pressStartActions" in X && e(21, m = X.pressStartActions), "pressEndActions" in X && e(22, h = X.pressEndActions), "hoverStartActions" in X && e(23, y = X.hoverStartActions), "hoverEndActions" in X && e(24, w = X.hoverEndActions), "cls" in X && e(2, F = X.cls), "style" in X && e(3, R = X.style), "attrs" in X && e(4, B = X.attrs), "use" in X && e(5, Q = X.use), "customAction" in X && e(25, ae = X.customAction), "isNativeActionAnimation" in X && e(6, T = X.isNativeActionAnimation), "hasInnerFocusable" in X && e(26, Y = X.hasInnerFocusable), "customAccessibility" in X && e(27, le = X.customAccessibility), "captureFocusOnAction" in X && e(28, C = X.captureFocusOnAction), "containerElement" in X && e(7, N = X.containerElement), "$$scope" in X && e(30, l = X.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*customAccessibility*/
    134217728 && e(12, Se = (le == null ? void 0 : le.mode) === "exclude"), t.$$.dirty[0] & /*componentContext, actions*/
    524289 && s(e(16, n = u.getDerivedFromVars(f, void 0, !0))), t.$$.dirty[0] & /*$processedActions, customAction, href, ariaHidden, componentContext*/
    570429953) {
      if (Array.isArray(o) && (o != null && o.length))
        for (let X = 0; X < o.length; ++X) {
          const It = o[X].url;
          if (It) {
            e(9, fe = It), e(13, ce = o[X].target || void 0);
            break;
          }
        }
      e(10, Me = !!ae), (fe || Array.isArray(o) && (o != null && o.length)) && (O.hasAction() || Se) ? (e(9, fe = ""), u.logError(K(new Error("Actionable element is forbidden inside other actionable element or inside accessibility mode=exlucde"), {
        level: "warn",
        additional: { actions: o }
      }))) : fe && !ql(Jl(fe), z.getBuiltinProtocols()) ? (e(9, fe = ""), e(10, Me = !0)) : !fe && Array.isArray(o) && (o != null && o.length) && (e(10, Me = !0), o.some((X) => X.url || X.typed || X.menu_items) || u.logError(K(new Error("The component has a list of actions, but does not have a real action"), {
        level: "warn",
        additional: { actions: o }
      })));
    }
    t.$$.dirty[0] & /*customAccessibility, href, hasJSAction, role*/
    134221312 && (le != null && le.type && Bh.has(le.type) ? le.type === "header" ? e(11, it = "heading") : e(11, it = le.type) : fe ? e(11, it = void 0) : Me && e(11, it = "button"), (it === "checkbox" || it === "radio") && typeof (le == null ? void 0 : le.is_checked) == "boolean" ? e(15, we = le.is_checked) : e(15, we = void 0)), t.$$.dirty[0] & /*node, href, hasJSAction, doubleTapActions, longTapActions, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions, captureFocusOnAction*/
    300943106 && oe && (fe || Me || d != null && d.length ? oe.addEventListener("click", de) : oe.removeEventListener("click", de), d != null && d.length || g != null && g.length || m != null && m.length || h != null && h.length ? (oe.addEventListener("pointerdown", se, { passive: !0 }), window.addEventListener("pointermove", De, { passive: !0 }), window.addEventListener("pointerup", tt, { passive: !0 }), window.addEventListener("pointercancel", tt, { passive: !0 })) : (oe.removeEventListener("pointerdown", se), window.removeEventListener("pointerup", tt), window.removeEventListener("pointermove", De), window.removeEventListener("pointercancel", tt)), y != null && y.length ? oe.addEventListener("pointerenter", xe) : oe.removeEventListener("pointerenter", xe), w != null && w.length ? oe.addEventListener("pointerleave", ne) : oe.removeEventListener("pointerleave", ne), C === !1 ? oe.addEventListener("mousedown", tu) : oe.removeEventListener("mousedown", tu), e(14, Xe = !!(fe || Me || d != null && d.length || g != null && g.length || m != null && m.length || h != null && h.length || y != null && y.length || w != null && w.length)));
  }, [
    u,
    g,
    F,
    R,
    B,
    Q,
    T,
    N,
    oe,
    fe,
    Me,
    it,
    Se,
    ce,
    Xe,
    we,
    n,
    Ze,
    c,
    f,
    d,
    m,
    h,
    y,
    w,
    ae,
    Y,
    le,
    C,
    o,
    l,
    a,
    Re,
    ut,
    ct,
    ft,
    Et,
    st,
    Lt,
    _t,
    pe,
    ge,
    gt,
    Ce,
    M,
    Ct,
    ht,
    Dt,
    Nt,
    nt
  ];
}
class bl extends Hr {
  constructor(r) {
    super(), Rr(
      this,
      r,
      Lh,
      Oh,
      Tr,
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
const vi = {
  "outer-background": "appkit-outer-background",
  "outer-background_clip": "appkit-outer-background_clip",
  "outer-background__item": "appkit-outer-background__item",
  "outer-background__item_hidden": "appkit-outer-background__item_hidden"
};
function Kn(t) {
  return ml(t) && t > 0;
}
function Td(t, r) {
  return t.map((e) => {
    if (!e) {
      r(K(new Error("Incorrect filter"), {
        level: "warn"
      }));
      return;
    }
    if (e.type === "blur") {
      if (Kn(e.radius))
        return `blur(${hn(e.radius / 2)})`;
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
function ru(t, r, e) {
  const n = t.slice();
  return n[6] = r[e], n;
}
function Rh(t) {
  let r, e;
  return {
    c() {
      r = Ie("span"), this.h();
    },
    l(n) {
      r = Fe(n, "SPAN", { class: !0, style: !0 }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "class", vi["outer-background__item"]), p(r, "style", e = nr(
        /*item*/
        t[6].style
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o & /*styles*/
      2 && e !== (e = nr(
        /*item*/
        n[6].style
      )) && p(r, "style", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function Hh(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Ie("img"), this.h();
    },
    l(s) {
      r = Fe(s, "IMG", {
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
      t[6].image_url) || p(r, "src", e), p(r, "alt", ""), p(r, "aria-hidden", "true"), p(r, "loading", "lazy"), p(r, "decoding", "async"), p(r, "class", vi["outer-background__item"]), p(r, "style", n = nr(
        /*item*/
        t[6].style
      ));
    },
    m(s, a) {
      q(s, r, a), o || (i = Je(
        r,
        "error",
        /*onImgError*/
        t[2]
      ), o = !0);
    },
    p(s, a) {
      a & /*styles*/
      2 && !eo(r.src, e = /*item*/
      s[6].image_url) && p(r, "src", e), a & /*styles*/
      2 && n !== (n = nr(
        /*item*/
        s[6].style
      )) && p(r, "style", n);
    },
    d(s) {
      s && k(r), o = !1, i();
    }
  };
}
function nu(t) {
  let r;
  function e(i, s) {
    return (
      /*item*/
      i[6].image_url ? Hh : Rh
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = We();
    },
    l(i) {
      o.l(i), r = We();
    },
    m(i, s) {
      o.m(i, s), q(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function Wh(t) {
  let r, e, n = ar(
    /*styles*/
    t[1]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = nu(ru(t, n, i));
  return {
    c() {
      r = Ie("span");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      this.h();
    },
    l(i) {
      r = Fe(i, "SPAN", { class: !0 });
      var s = ve(r);
      for (let a = 0; a < o.length; a += 1)
        o[a].l(s);
      s.forEach(k), this.h();
    },
    h() {
      p(r, "class", e = vi["outer-background"] + /*radius*/
      (t[0] ? " " + vi["outer-background_clip"] : "")), P(
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
        n = ar(
          /*styles*/
          i[1]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = ru(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = nu(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s & /*radius*/
      1 && e !== (e = vi["outer-background"] + /*radius*/
      (i[0] ? " " + vi["outer-background_clip"] : "")) && p(r, "class", e), s & /*radius*/
      1 && P(
        r,
        "border-radius",
        /*radius*/
        i[0]
      );
    },
    i: S,
    o: S,
    d(i) {
      i && k(r), un(o, i);
    }
  };
}
function Uh(t, r, e) {
  let n, { direction: o } = r, { componentContext: i } = r, { background: s = [] } = r, { radius: a = "" } = r;
  function l(u) {
    u.target && "classList" in u.target && u.target.classList.add(vi["outer-background__item_hidden"]);
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
        const d = gl([u], o);
        u.type === "solid" && (c["background-color"] = d.color), u.type === "gradient" && (c["background-image"] = d.image), u.type === "image" && (c.opacity = Number(u.alpha), f.image_url = u.image_url, c["object-fit"] = d.size, c["object-position"] = d.position, Array.isArray(u.filters) && u.filters.length && (c.filter = Td(u.filters, i.logError), o === "rtl" && u.filters.some((g) => g.type === "rtl_mirror") && (c.transform = "scale(-1,1)")));
      }
      return f;
    }));
  }, [a, n, l, o, i, s];
}
class Gh extends Hr {
  constructor(r) {
    super(), Rr(this, r, Uh, Wh, Tr, {
      direction: 3,
      componentContext: 4,
      background: 5,
      radius: 0
    });
  }
}
const Jh = (t) => ({
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
}), ou = (t) => ({
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
function iu(t) {
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
        t[1] + " " + wt(
          "outer",
          xs,
          /*mods*/
          t[31]
        ) + /*customClass*/
        (t[30] ? ` ${/*customClass*/
        t[30]}` : "") + /*hoverClassName*/
        (t[18] ? ` ${/*hoverClassName*/
        t[18]}` : "")
      ),
      style: nr(
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
      t[16].length || au(
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
      $$slots: { default: [qh] },
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
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
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
        xs,
        /*mods*/
        n[31]
      ) + /*customClass*/
      (n[30] ? ` ${/*customClass*/
      n[30]}` : "") + /*hoverClassName*/
      (n[18] ? ` ${/*hoverClassName*/
      n[18]}` : "")), o[0] & /*stl*/
      536870912 && (i.style = nr(
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
      n[16].length || au(
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function su(t) {
  let r, e;
  return r = new Gh({
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
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function lu(t) {
  let r, e;
  return {
    c() {
      r = Ie("span"), this.h();
    },
    l(n) {
      r = Fe(n, "SPAN", { class: !0, style: !0 }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "class", xs.outer__border), p(r, "style", e = nr(
        /*borderElemStyle*/
        t[4]
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o[0] & /*borderElemStyle*/
      16 && e !== (e = nr(
        /*borderElemStyle*/
        n[4]
      )) && p(r, "style", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function qh(t) {
  let r, e, n, o = (
    /*hasSeparateBg*/
    t[11] && su(t)
  );
  const i = (
    /*#slots*/
    t[146].default
  ), s = al(
    i,
    t,
    /*$$scope*/
    t[149],
    ou
  );
  let a = (
    /*hasBorder*/
    t[22] && lu(t)
  );
  return {
    c() {
      o && o.c(), r = We(), s && s.c(), a && a.c(), e = We();
    },
    l(l) {
      o && o.l(l), r = We(), s && s.l(l), a && a.l(l), e = We();
    },
    m(l, u) {
      o && o.m(l, u), q(l, r, u), s && s.m(l, u), a && a.m(l, u), q(l, e, u), n = !0;
    },
    p(l, u) {
      /*hasSeparateBg*/
      l[11] ? o ? (o.p(l, u), u[0] & /*hasSeparateBg*/
      2048 && G(o, 1)) : (o = su(l), o.c(), G(o, 1), o.m(r.parentNode, r)) : o && (mr(), $(o, 1, 1, () => {
        o = null;
      }), br()), s && s.p && (!n || u[0] & /*hasCustomFocus, widthMin, widthMax, heightMin, heightMax*/
      132032 | u[4] & /*$$scope*/
      33554432) && cl(
        s,
        i,
        l,
        /*$$scope*/
        l[149],
        n ? ul(
          i,
          /*$$scope*/
          l[149],
          u,
          Jh
        ) : fl(
          /*$$scope*/
          l[149]
        ),
        ou
      ), /*hasBorder*/
      l[22] ? a ? a.p(l, u) : (a = lu(l), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null);
    },
    i(l) {
      n || (G(o), G(s, l), n = !0);
    },
    o(l) {
      $(o), $(s, l), n = !1;
    },
    d(l) {
      l && (k(r), k(e)), o && o.d(l), s && s.d(l), a && a.d(l);
    }
  };
}
function Yh(t) {
  let r, e, n = !/*hasWidthError*/
  t[23] && !/*hasHeightError*/
  t[24] && iu(t);
  return {
    c() {
      n && n.c(), r = We();
    },
    l(o) {
      n && n.l(o), r = We();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, i) {
      !/*hasWidthError*/
      o[23] && !/*hasHeightError*/
      o[24] ? n ? (n.p(o, i), i[0] & /*hasWidthError, hasHeightError*/
      25165824 && G(n, 1)) : (n = iu(o), n.c(), G(n, 1), n.m(r.parentNode, r)) : n && (mr(), $(n, 1, 1, () => {
        n = null;
      }), br());
    },
    i(o) {
      e || (G(n), e = !0);
    },
    o(o) {
      $(n), e = !1;
    },
    d(o) {
      o && k(r), n && n.d(o);
    }
  };
}
const Kh = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
}, Xh = {
  left: "end",
  center: "center",
  right: "start",
  start: "start",
  end: "end"
}, Zh = {
  top: "start",
  center: "center",
  bottom: "end",
  baseline: "baseline"
}, Ml = (t) => `The component id with the "${t}" property for state change is missing. Either specify the id, or specify the "transition_trigger" property without "state_change" value.`;
function au(t) {
  return t.some((r) => r.name === "native");
}
function Qh(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g, m, h, y, w, F, R, B, Q, ae, T, Y, le, C, N, z, O, oe, fe, ce, Ae, _e, Te, ee, Me, Xe, Qe, Ee, it, we, Se, he, x, de, se = S, De = () => (se(), se = I(w, (at) => e(130, de = at)), w), tt, xe = S, ne = () => (xe(), xe = I(F, (at) => e(131, tt = at)), F), Ze, Re = S, ut = () => (Re(), Re = I(y, (at) => e(132, Ze = at)), y), ct, ft = S, Et = () => (ft(), ft = I(R, (at) => e(133, ct = at)), R), st, Lt = S, _t = () => (Lt(), Lt = I(h, (at) => e(134, st = at)), h), pe, ge = S, gt = () => (ge(), ge = I(m, (at) => e(135, pe = at)), m), Ce, M = S, Ct = () => (M(), M = I(o, (at) => e(136, Ce = at)), o), ht, Dt = S, Nt = () => (Dt(), Dt = I(g, (at) => e(20, ht = at)), g), nt, X = S, It = () => (X(), X = I(d, (at) => e(137, nt = at)), d), zt, er = S, Xt = () => (er(), er = I(f, (at) => e(138, zt = at)), f), me, Ue = S, mt = () => (Ue(), Ue = I(c, (at) => e(139, me = at)), c), ye, et = S, Le = () => (et(), et = I(a, (at) => e(140, ye = at)), a), or, Oe = S, kt = () => (Oe(), Oe = I(u, (at) => e(141, or = at)), u), Tt, Mt = S, hr = () => (Mt(), Mt = I(l, (at) => e(142, Tt = at)), l), Ne, jt = S, lr = () => (jt(), jt = I(s, (at) => e(143, Ne = at)), s), rr, xt = S, yr = () => (xt(), xt = I(i, (at) => e(144, rr = at)), i), Sr;
  t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => ft()), t.$$.on_destroy.push(() => Lt()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => Dt()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => er()), t.$$.on_destroy.push(() => Ue()), t.$$.on_destroy.push(() => et()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => Mt()), t.$$.on_destroy.push(() => jt()), t.$$.on_destroy.push(() => xt());
  let { $$slots: Bt = {}, $$scope: jr } = r, { componentContext: J } = r, { cls: pt = "" } = r, { style: Kt = void 0 } = r, { layoutParams: At = {} } = r, { customDescription: Cr = !1 } = r, { customPaddings: Dr = !1 } = r, { customActions: wr = "" } = r, { additionalPaddings: Mr = null } = r, { heightByAspect: qr = !1 } = r, { parentOf: ir = void 0 } = r, { parentOfSimpleMode: ot = void 0 } = r, { replaceItems: St = void 0 } = r, { hasInnerFocusable: $t = !1 } = r, { alwaysCustomFocus: Qt = !1 } = r, { containerElement: pr = "span" } = r, { devapi: dt = void 0 } = r;
  const te = zr(en), vt = zr(ka), { isEnabled: sr } = zr(Ea);
  En(t, sr, (at) => e(145, Sr = at));
  const vr = te.direction;
  En(t, vr, (at) => e(19, x = at));
  let ur, E, re = null, _ = [], j = {}, Pe = {}, He = !1, Ot = 1, H = "transparent", Pt = 0, lt = {
    "top-left": 0,
    "top-right": 0,
    "bottom-right": 0,
    "bottom-left": 0
  }, Ye = "", Ke = null, qt = "", kr = {}, Qr, fn, tn, je = 0, yn = 0, rn = 0, wn = !1, v = !1, A = {}, V, ie, W, $e = 0, Ve = 0, Zt = 0, Ft = !1, Be = !1, tr = 1, Vt, Fr, Vr, Kr, nn = [], Cn = !1, vn = !1, Vn, oo, Xn, Zn = [], Yt = [], b = [], D = [], Z = [], L = [], ke = [], be = [], Rt = [], Ht = [], Yr = "", Nr, Xr, ko, Qn, _o = !1, Pn = "visible", $o, Go, ei = !1, qe = !0, Ar, Or, Eo, Do;
  function Dn() {
    e(72, Ke = null), e(73, qt = ""), e(86, tr = 1), e(98, _o = !1), e(99, Pn = "visible"), e(100, $o = void 0), e(28, qe = !0), nn = J.fakeElement ? [] : J.json.transition_triggers || ["state_change", "visibility_change"], e(89, Cn = nn.indexOf("state_change") !== -1), vn = nn.indexOf("visibility_change") !== -1, ur && Oa(ur), Or == null || Or(), Sr && e(102, Or = te.processVariableTriggers(J, J.json.variable_triggers));
  }
  function es(at, xr) {
    if (!Array.isArray(ir) || !St || ot && (Array.isArray(xr) ? xr.length : 0) !== 1)
      return;
    const Fn = ir.findIndex((dn) => (dn == null ? void 0 : dn.id) === at), Gn = ir.slice();
    Gn.splice(Fn, 1, ...(xr || []).map((dn) => ({ json: dn, id: dn == null ? void 0 : dn.id }))), e(53, ir = Gn), St(Gn.map((dn) => dn == null ? void 0 : dn.json));
  }
  function pi(at) {
    const xr = co(at.start_value, 1), Fn = co(at.end_value, 1), Gn = ln(at.start_delay, 0), dn = Ji() ? 0 : ln(at.duration, 300), jo = Fd(at.interpolator, "ease_in_out").replace(/_/g, "-");
    switch (at.name) {
      case "fade":
        return e(94, Nr = xr), e(95, Xr = Fn), `opacity ${dn}ms ${jo} ${Gn}ms`;
      case "scale":
        return e(96, ko = xr), e(97, Qn = Fn), `transform ${dn}ms ${jo} ${Gn}ms`;
      case "native":
      case "no_animation":
        return "";
      default:
        return J.logError(K(new Error("Unknown action_animation name"), {
          additional: { animation: at.name }
        })), "";
    }
  }
  async function Mi(at) {
    e(99, Pn = at);
    const xr = at === "visible" ? "in" : "out", Fn = xr === "in" ? J.json.transition_in : J.json.transition_out;
    if (vn && Fn) {
      let Gn;
      at === "gone" && (Gn = ur.getBoundingClientRect()), await Mn(), xr === "in" && e(91, oo = !0), vt.runVisibilityTransition(
        {
          ...J.json,
          visibility: "visible"
        },
        J,
        Fn,
        ur,
        xr,
        Gn
      ).then(() => {
        xr === "in" && e(91, oo = !1);
      }).catch((dn) => {
        throw xr === "in" && e(91, oo = !1), dn;
      });
    }
  }
  function za() {
    if (re && ur) {
      const at = te.getExtensionContext(J);
      re.forEach((xr) => {
        var Fn;
        (Fn = xr.unmountView) == null || Fn.call(xr, ur, at);
      }), re = null;
    }
  }
  function E_() {
    if (re != null && re.length) {
      const at = te.getExtensionContext(J);
      re.forEach((xr) => {
        var Fn;
        (Fn = xr.updateView) == null || Fn.call(xr, ur, at);
      });
    }
  }
  let Fo = null, Jo = null, gi = "desktop";
  function ts() {
    Fo != null && Fo.matches ? e(105, gi = "mobile") : Jo != null && Jo.matches ? e(105, gi = "tablet") : e(105, gi = "desktop");
  }
  let ho = null, rs = "";
  function Oa(at) {
    var ns, os, is;
    Eo == null || Eo.destroy(), e(65, ur = at), Cn && J.json.transition_in && (J.id ? vt.registerChildWithTransitionIn(J.json, J, J.json.transition_in, at).then(() => {
      e(90, Vn = !1);
    }).catch((ti) => {
      throw e(90, Vn = !1), ti;
    }) : J.logError(K(new Error(Ml("transition_in")), { level: "warn" }))), Cn && J.json.transition_out && (J.id ? vt.registerChildWithTransitionOut(J.json, J, J.json.transition_out, at) : J.logError(K(new Error(Ml("transition_out")), { level: "warn" }))), J.fakeElement || (J.json.transition_change && !J.id && J.logError(K(new Error(Ml("transition_change")), { level: "warn" })), vt.registerChildWithTransitionChange(J.json, J, J.json.transition_change, at).then(() => {
      e(92, Xn = !1);
    }).catch((ti) => {
      throw e(92, Xn = !1), ti;
    }));
    const xr = !J.fakeElement || J.fakeElement === ui, Fn = xr ? J.json.visibility_actions || J.json.visibility_action && [J.json.visibility_action] : [], Gn = xr ? J.json.disappear_actions : [];
    let dn;
    (Array.isArray(Fn) && Fn.length || Array.isArray(Gn) && Gn.length) && (dn = vh(at, {
      visibilityActions: Fn,
      disappearActions: Gn,
      rootCtx: te,
      componentContext: J
    }));
    const jo = J.id;
    return jo && (Do == null || Do(), Do = te.registerId(jo, {
      context: () => J,
      node: () => ur
    }), vt.registerChild(jo)), (ns = J.json.tooltips) == null || ns.forEach((ti) => {
      te.registerTooltip(at, ti);
    }), Go && (Go.disconnect(), Go = void 0), Go = Dh(ur, J, (os = J.json.layout_provider) == null ? void 0 : os.width_variable_name, (is = J.json.layout_provider) == null ? void 0 : is.height_variable_name), Eo = {
      destroy() {
        Do && (Do(), Do = void 0), jo && vt.unregisterChild(jo), dn && dn.destroy();
      }
    }, Eo;
  }
  function j_() {
    J.json.focus && ((Qt || !Wl(te.isPointerFocus)) && e(17, ei = !0), J.execAnyActions(D));
  }
  function C_() {
    J.json.focus && (e(17, ei = !1), J.execAnyActions(Z));
  }
  hl(E_), cn(() => {
    var at;
    _.forEach((xr) => {
      te.unregisterParentOf(xr);
    }), e(66, _ = []), Go && (Go.disconnect(), Go = void 0), (at = J.json.tooltips) == null || at.forEach((xr) => {
      te.unregisterTooltip(xr);
    }), Or == null || Or(), za(), ho && (ho.remove(), e(106, ho = null)), Fo && (Fo.removeEventListener("change", ts), e(103, Fo = null)), Jo && (Jo.removeEventListener("change", ts), e(104, Jo = null));
  });
  function A_(at) {
    Hn.call(this, t, at);
  }
  function S_(at) {
    Hn.call(this, t, at);
  }
  return t.$$set = (at) => {
    "componentContext" in at && e(0, J = at.componentContext), "cls" in at && e(1, pt = at.cls), "style" in at && e(54, Kt = at.style), "layoutParams" in at && e(55, At = at.layoutParams), "customDescription" in at && e(56, Cr = at.customDescription), "customPaddings" in at && e(57, Dr = at.customPaddings), "customActions" in at && e(58, wr = at.customActions), "additionalPaddings" in at && e(59, Mr = at.additionalPaddings), "heightByAspect" in at && e(60, qr = at.heightByAspect), "parentOf" in at && e(53, ir = at.parentOf), "parentOfSimpleMode" in at && e(61, ot = at.parentOfSimpleMode), "replaceItems" in at && e(62, St = at.replaceItems), "hasInnerFocusable" in at && e(2, $t = at.hasInnerFocusable), "alwaysCustomFocus" in at && e(63, Qt = at.alwaysCustomFocus), "containerElement" in at && e(3, pr = at.containerElement), "devapi" in at && e(64, dt = at.devapi), "$$scope" in at && e(149, jr = at.$$scope);
  }, t.$$.update = () => {
    var at, xr, Fn, Gn, dn, jo, ns, os, is, ti, Ba;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(129, n = J.origJson), t.$$.dirty[4] & /*origJson*/
    32 && n && Dn(), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[3] & /*prevTriggersUnsubscribe*/
    512 | t.$$.dirty[4] & /*$isEnabled*/
    2097152 && (Sr ? (Or == null || Or(), e(102, Or = te.processVariableTriggers(J, J.json.variable_triggers))) : Or == null || Or()), t.$$.dirty[0] & /*componentContext*/
    1 && Ct(e(47, o = J.getDerivedFromVars(J.json.focus))), t.$$.dirty[0] & /*componentContext*/
    1 && yr(e(46, i = J.getDerivedFromVars(J.json.border))), t.$$.dirty[0] & /*componentContext*/
    1 && lr(e(45, s = J.getDerivedFromVars(J.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(44, a = J.getDerivedFromVars(J.json.margins))), t.$$.dirty[0] & /*componentContext*/
    1 && hr(e(43, l = J.getDerivedFromVars(J.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && kt(e(42, u = J.getDerivedFromVars(J.json.alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && mt(e(41, c = J.getDerivedFromVars(J.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && Xt(e(40, f = J.getDerivedFromVars(J.json.alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && It(e(39, d = J.getDerivedFromVars(J.json.alpha))), t.$$.dirty[0] & /*componentContext*/
    1 && Nt(e(38, g = J.getDerivedFromVars(J.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && gt(e(37, m = J.getDerivedFromVars(J.json.background))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(36, h = J.getDerivedFromVars(J.json.action_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(35, y = J.getDerivedFromVars(J.json.visibility))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(34, w = J.getDerivedFromVars(J.json.transform))), t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(33, F = J.getDerivedFromVars(J.json.transformations))), t.$$.dirty[0] & /*componentContext*/
    1 && Et(e(32, R = J.getDerivedFromVars(J.json.capture_focus_on_action))), t.$$.dirty[1] & /*parentOf, parentOfSimpleMode*/
    1077936128 | t.$$.dirty[2] & /*prevChilds*/
    16 && (_.forEach((rt) => {
      te.unregisterParentOf(rt);
    }), e(66, _ = []), ir && ir.forEach((rt) => {
      rt != null && rt.id && (_.push(rt.id), te.registerParentOf(rt.id, {
        replaceWith: es,
        isSingleMode: !!ot
      }));
    })), t.$$.dirty[0] & /*hasCustomFocus, borderElemStyle*/
    131088 | t.$$.dirty[2] & /*strokeWidth, strokeColor, cornersRadius, cornerRadius, borderStyle*/
    992 | t.$$.dirty[4] & /*$jsonFocus, $jsonBorder*/
    1052672) {
      const rt = ei && (Ce != null && Ce.border) ? Ce.border : rr;
      let on = {}, An = {}, Nn = !1, an = "";
      if (rt) {
        if (pn(rt.has_shadow, !1)) {
          const _n = rt.shadow;
          _n ? on["box-shadow"] = Sh(_n) : on["box-shadow"] = "0 1px 2px 0 rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.07)";
        }
        if (rt.stroke) {
          Nn = !0, e(68, Ot = ln(rt.stroke.width, Ot)), e(69, H = gr(rt.stroke.color, 1, H));
          const _n = ((at = rt.stroke.style) == null ? void 0 : at.type) === "dashed" ? "dashed" : "solid";
          An["--divkit-border"] = `${ue(Ot + 1)} ${_n} ${H}`;
        }
        if (rt.corners_radius && typeof rt.corners_radius == "object") {
          e(71, lt = Ah(rt.corners_radius, lt)), on["border-radius"] = Fs(lt);
          const _n = {};
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((xn) => {
            _n[xn] = (lt[xn] || 0) + 1;
          }), An["--divkit-border-radius"] = Fs(_n);
        } else rt.corner_radius && (e(70, Pt = ln(rt.corner_radius, Pt)), e(71, lt = {
          "top-left": Pt,
          "top-right": Pt,
          "bottom-right": Pt,
          "bottom-left": Pt
        }), on["border-radius"] = ue(Pt), An["--divkit-border-radius"] = ue(Pt + 1));
        if (Nn && Ot && (rt.corners_radius || rt.corner_radius)) {
          let _n = { ...lt };
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((xn) => {
            _n[xn] = (_n[xn] || 0) + Ot / 2;
          }), an = Fs(_n);
        }
      }
      e(67, j = oi(on, j)), e(4, Pe = oi(An, Pe)), e(22, He = Nn), e(5, Ye = an);
    }
    if (t.$$.dirty[1] & /*customPaddings*/
    67108864 | t.$$.dirty[2] & /*selfPadding*/
    1024 | t.$$.dirty[4] & /*$jsonPaddings*/
    524288 && e(72, Ke = ji(
      Ne && !Dr ? Ne : void 0,
      Ke
    )), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[1] & /*additionalPaddings*/
    268435456 | t.$$.dirty[2] & /*selfPadding*/
    1024 && e(119, B = yo(Ch(Ke, Mr), x)), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[2] & /*margin*/
    2048 | t.$$.dirty[4] & /*$jsonMargins*/
    65536 && e(73, qt = ds(ye, x, qt)), t.$$.dirty[0] & /*componentContext, $direction*/
    524289 | t.$$.dirty[1] & /*layoutParams*/
    16777216 | t.$$.dirty[2] & /*widthNum, widthMods*/
    20480 | t.$$.dirty[4] & /*$jsonWidth, $jsonMargins, $jsonAlignmentHorizontal*/
    458752) {
      let rt, on, An, Nn, an = {}, _n = 0, xn = 0, qo = !1, Yo = !1;
      const kn = (xr = J.json.width) == null ? void 0 : xr.type;
      if (kn === "fixed")
        e(76, je = ln(Tt == null ? void 0 : Tt.value, je)), on = ue(je);
      else if (kn === "wrap_content" || (kn === "match_parent" || !kn) && At.parentHorizontalWrapContent)
        rt = "content", (kn === "wrap_content" && (Tt != null && Tt.constrained) || (kn === "match_parent" || !kn) && At.parentHorizontalWrapContent) && (an["width-constrained"] = !0, At.parentContainerOrientation === "horizontal" && (xn = 1)), (kn === "match_parent" || !kn) && J.logError(K(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      else if (rt = "parent", At.parentContainerOrientation === "vertical" && At.parentContainerWrap && (Yo = !0, J.logError(K(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), At.parentContainerOrientation === "vertical" && At.parentContainerKnownWidth || At.stretchWidth || At.parentContainerOrientation === "horizontal" && At.treatMatchParentAs100) {
        const $r = (Gn = (Fn = x === "ltr" ? ye == null ? void 0 : ye.start : ye == null ? void 0 : ye.end) != null ? Fn : ye == null ? void 0 : ye.left) != null ? Gn : 0, zn = (jo = (dn = x === "ltr" ? ye == null ? void 0 : ye.end : ye == null ? void 0 : ye.start) != null ? dn : ye == null ? void 0 : ye.right) != null ? jo : 0, In = `calc(100% - ${hn($r + zn)})`;
        At.stretchWidth ? (on = "0", An = In) : on = In;
      } else At.parentContainerOrientation === "horizontal" && (_n = Tt && "weight" in Tt && Tt.weight || 1, At.parentContainerWrap && (qo = !0));
      if (kn === "wrap_content" || kn === "match_parent") {
        const $r = Tt;
        let zn, In;
        $r.min_size && Bn($r.min_size.value) && (zn = $r.min_size.value), $r.max_size && Bn($r.max_size.value) && (In = $r.max_size.value), zn !== void 0 && In !== void 0 && zn > In && (J.logError(K(new Error("Element has incorrect width constraints (min size is bigger than max size)."), {
          additional: {
            id: J.json.id,
            minSize: zn + "dp",
            maxSize: In + "dp"
          }
        })), zn = In = void 0), zn !== void 0 && (An = ue(zn)), In !== void 0 && (Nn = ue(In));
      }
      if (rt === "parent")
        an["halign-self"] = "stretch";
      else {
        const $r = or;
        $r === "left" || $r === "center" || $r === "right" || $r === "start" || $r === "end" ? an["halign-self"] = (x === "ltr" ? Kh : Xh)[$r] : an["halign-self"] = At.parentHAlign || "start";
      }
      rt && (an.width = rt), e(75, Qr = on), e(6, fn = An), e(7, tn = Nn), e(77, yn = _n), e(78, rn = xn), e(74, kr = oi(an, kr)), e(79, wn = qo), e(23, v = Yo);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*heightByAspect, layoutParams*/
    553648128 | t.$$.dirty[2] & /*heightNum, heightMods*/
    1310720 | t.$$.dirty[4] & /*$jsonHeight, $jsonMargins, $jsonAlignmentVertical*/
    114688) {
      let rt, on, An, Nn, an = {}, _n = 0, xn = 0, qo = !1, Yo = !1;
      const kn = (ns = J.json.height) == null ? void 0 : ns.type;
      if (!qr) if (kn === "fixed")
        e(82, $e = ln(me == null ? void 0 : me.value, $e)), on = ue($e);
      else if (kn === "match_parent" && !At.parentVerticalWrapContent)
        if (rt = "parent", At.parentContainerOrientation === "horizontal" && At.parentContainerWrap && (Yo = !0, J.logError(K(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), At.parentContainerOrientation === "horizontal" && At.parentContainerKnownHeight || At.stretchHeight || At.parentContainerOrientation === "vertical" && At.treatMatchParentAs100) {
          const $r = (os = ye == null ? void 0 : ye.top) != null ? os : 0, zn = (is = ye == null ? void 0 : ye.bottom) != null ? is : 0, In = `calc(100% - ${hn($r + zn)})`;
          At.stretchHeight ? (on = "0", An = In) : on = In;
        } else At.parentContainerOrientation === "vertical" && (_n = (me == null ? void 0 : me.weight) || 1, At.parentContainerWrap && (qo = !0));
      else
        rt = "content", (kn === "wrap_content" && (me != null && me.constrained) || kn === "match_parent" && At.parentVerticalWrapContent) && (an["height-constrained"] = !0, At.parentContainerOrientation === "vertical" && (xn = 1)), kn === "match_parent" && J.logError(K(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      if (!qr && (kn === "match_parent" || kn === "wrap_content")) {
        const $r = me;
        let zn, In;
        $r.min_size && Bn($r.min_size.value) && (zn = $r.min_size.value), $r.max_size && Bn($r.max_size.value) && (In = $r.max_size.value), zn !== void 0 && In !== void 0 && zn > In && (J.logError(K(new Error("Element has incorrect height constraints (min size is bigger than max size)."), {
          additional: {
            id: J.json.id,
            minSize: zn + "dp",
            maxSize: In + "dp"
          }
        })), zn = In = void 0), zn !== void 0 && (An = ue(zn)), In !== void 0 && (Nn = ue(In));
      }
      if (rt === "parent")
        an["valign-self"] = "stretch";
      else {
        const $r = zt;
        $r === "top" || $r === "center" || $r === "bottom" || $r === "baseline" && At.parentContainerOrientation === "horizontal" ? an["valign-self"] = Zh[$r] : an["valign-self"] = At.parentVAlign || "start";
      }
      rt && (an.height = rt), e(81, V = on), e(8, ie = An), e(9, W = Nn), e(83, Ve = _n), e(84, Zt = xn), e(80, A = oi(an, A)), e(85, Ft = qo), e(24, Be = Yo);
    }
    if (t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(128, Q = At.overlapParent ? !0 : void 0), t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(121, ae = At.gridArea ? `${At.gridArea.y + 1}/${At.gridArea.x + 1}/span ${At.gridArea.rowSpan}/span ${At.gridArea.colSpan}` : void 0), t.$$.dirty[2] & /*alpha*/
    16777216 | t.$$.dirty[4] & /*$jsonAlpha*/
    8192 && (e(86, tr = kh(nt, tr)), e(87, Vt = tr === 1 ? void 0 : tr)), t.$$.dirty[0] & /*$jsonAccessibility*/
    1048576 | t.$$.dirty[1] & /*customDescription*/
    33554432 && (e(21, E = void 0), ht && !Cr)) {
      const rt = ai(ht);
      rt && (e(21, E = {}), e(21, E["aria-label"] = rt, E));
    }
    if (t.$$.dirty[0] & /*hasCustomFocus, background, backgroundRadius, hasSeparateBg, $direction*/
    658464 | t.$$.dirty[4] & /*$jsonFocus, $jsonBackground*/
    6144 && (e(10, Fr = ei && (Ce != null && Ce.background) ? Ce.background : pe), e(88, Vr = {}), e(11, Kr = !1), Array.isArray(Fr) && (e(11, Kr = Fr.some((rt) => rt.type === "image" || rt.type === "nine_patch_image") || !!Ye), !Kr))) {
      const rt = gl(Fr, x);
      e(88, Vr["background-color"] = rt.color, Vr), e(88, Vr["background-image"] = rt.image, Vr), e(88, Vr["background-size"] = rt.size, Vr), e(88, Vr["background-position"] = rt.position, Vr), e(88, Vr["background-repeat"] = "no-repeat", Vr);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(90, Vn = void 0), Cn && J.id && J.json.transition_in && te.isRunning("stateChange") && e(90, Vn = !0)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(92, Xn = void 0), Cn && J.id && te.isRunning("stateChange") && vt.hasTransitionChange(J.id) && e(92, Xn = !0)), t.$$.dirty[0] & /*componentContext, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions*/
    61441 | t.$$.dirty[1] & /*customActions*/
    134217728) {
      const rt = J.json;
      let on = rt.actions || rt.action && [rt.action] || [], An = rt.doubletap_actions || [], Nn = rt.longtap_actions || [], an = ((ti = rt.focus) == null ? void 0 : ti.on_focus) || [], _n = ((Ba = rt.focus) == null ? void 0 : Ba.on_blur) || [], xn = rt.press_start_actions || [], qo = rt.press_end_actions || [], Yo = rt.hover_start_actions || [], kn = rt.hover_end_actions || [];
      J.fakeElement && J.fakeElement !== ui ? (on = [], An = [], Nn = [], an = [], _n = []) : (Array.isArray(on) || (on = [], J.logError(K(new Error("Actions should be array")))), Array.isArray(An) || (An = [], J.logError(K(new Error("DoubleTapActions should be array")))), Array.isArray(Nn) || (Nn = [], J.logError(K(new Error("LongTapActions should be array")))), Array.isArray(an) || (an = [], J.logError(K(new Error("FocusActions should be array")))), Array.isArray(_n) || (_n = [], J.logError(K(new Error("BlurActions should be array")))), Array.isArray(xn) || (xn = [], J.logError(K(new Error("PressStartActions should be array")))), Array.isArray(qo) || (qo = [], J.logError(K(new Error("PressEndActions should be array")))), Array.isArray(Yo) || (Yo = [], J.logError(K(new Error("HoverStartActions should be array")))), Array.isArray(kn) || (kn = [], J.logError(K(new Error("HoverEndActions should be array"))))), (on.length || An.length || Nn.length || L.length || ke.length || be.length || Rt.length) && wr && (on = [], An = [], Nn = [], e(12, L = []), e(13, ke = []), e(14, be = []), e(15, Rt = []), J.logError(K(new Error(`Cannot use action on component "${wr}"`)))), e(25, Zn = on), e(26, Yt = An), e(27, b = Nn), D = an, Z = _n, e(12, L = xn), e(13, ke = qo), e(14, be = Yo), e(15, Rt = kn);
    }
    if (t.$$.dirty[0] & /*actionAnimationList*/
    65536 | t.$$.dirty[4] & /*$jsonActionAnimation*/
    1024 && st && (e(16, Ht = _s(st)), e(93, Yr = Ht.map(pi).filter(Boolean).join(", "))), t.$$.dirty[4] & /*$jsonCaptureFocusOnAction*/
    512 && typeof ct == "boolean" && e(28, qe = ct), t.$$.dirty[3] & /*visibility, isVisibilityInited*/
    96 | t.$$.dirty[4] & /*$jsonVisibility*/
    256) {
      const rt = Pn, on = jh(Ze, Pn);
      rt !== on && (_o && (Pn === "visible" || on === "visible") ? Mi(on) : e(99, Pn = on)), _o || e(98, _o = !0);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*currentNode*/
    8 | t.$$.dirty[3] & /*prevExtensionsVal*/
    256 && J.json && ur && !Qi(J.json.extensions, Ar)) {
      let rt = e(101, Ar = J.json.extensions);
      Mn().then(() => {
        if (!(rt !== Ar || !ur) && (za(), Array.isArray(J.json.extensions))) {
          const on = te.getExtensionContext(J);
          re = J.json.extensions.map((An) => {
            var _n;
            const Nn = An.id;
            if (!Nn)
              return;
            const an = te.getExtension(Nn, An.params);
            return an && ((_n = an.mountView) == null || _n.call(an, ur, on)), an;
          }).filter(Uo);
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
      ...A,
      "parent-overlap": Q,
      "scroll-snap": At.scrollSnap,
      "hide-on-transition-in": Vn || oo || Xn,
      visibility: Pn,
      "has-action-animation": !!Yr,
      "parent-flex": At.parentContainerOrientation || void 0,
      "parent-grid": !!At.gridArea || void 0,
      "has-custom-focus": !!(ei && J.json.focus)
    }), t.$$.dirty[4] & /*$jsonTransformations, $jsonTransform*/
    192) {
      let rt;
      Array.isArray(tt) ? rt = tt : de && de.rotation !== void 0 && (rt = [
        {
          type: "rotation",
          angle: de.rotation,
          pivot_x: de.pivot_x,
          pivot_y: de.pivot_y
        }
      ]), rt ? e(100, $o = Fh(rt)) : e(100, $o = void 0);
    }
    if (t.$$.dirty[2] & /*widthFill, heightFill, widthFlexGrow, heightFlexGrow*/
    10649600 && e(115, Y = wn || Ft ? "100%" : yn || Ve ? 0 : void 0), t.$$.dirty[0] & /*componentContext*/
    1 && e(30, le = J.json["custom-class"] || ""), t.$$.dirty[0] & /*componentContext*/
    1 && e(113, C = J.json.position), t.$$.dirty[0] & /*componentContext*/
    1 && e(114, N = J.json.sticky_top), t.$$.dirty[0] & /*componentContext*/
    1 && e(112, z = J.json.sticky_bottom), t.$$.dirty[0] & /*componentContext*/
    1 && e(111, O = J.json.z_index), t.$$.dirty[0] & /*componentContext*/
    1 && e(110, oe = J.json.cursor), t.$$.dirty[0] & /*componentContext*/
    1 && e(109, fe = J.json.backdrop_filter), t.$$.dirty[0] & /*componentContext*/
    1 && e(108, ce = J.json.overflow), t.$$.dirty[0] & /*componentContext*/
    1 && e(107, Ae = J.json["box-shadow"]), t.$$.dirty[0] & /*componentContext*/
    1 && e(116, _e = J.json.custom_transition), t.$$.dirty[0] & /*componentContext*/
    1 && e(127, Te = J.json.responsive), t.$$.dirty[3] & /*responsiveMobileQuery, responsiveTabletQuery*/
    3072 | t.$$.dirty[4] & /*responsiveConfig*/
    8 && (Te && typeof Te == "object" && typeof window < "u" ? (Fo || (e(103, Fo = window.matchMedia("(max-width: 767px)")), e(104, Jo = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), Fo.addEventListener("change", ts), Jo.addEventListener("change", ts)), ts()) : e(105, gi = "desktop")), t.$$.dirty[3] & /*responsiveBreakpoint*/
    4096 | t.$$.dirty[4] & /*responsiveConfig*/
    8 && e(126, ee = gi !== "desktop" && (Te == null ? void 0 : Te[gi]) || null), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(120, Me = (() => {
      if (!(ee != null && ee.paddings)) return;
      const rt = ee.paddings;
      return yo(ji(rt, null), x);
    })()), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(118, Xe = (() => {
      if (!(ee != null && ee.margins)) return;
      const rt = ee.margins;
      return ds(rt, x, "");
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(123, Qe = (() => {
      if (ee != null && ee["max-width"] && typeof ee["max-width"] == "string")
        return ee["max-width"];
      if (!(ee != null && ee.max_width)) return;
      const rt = ee.max_width;
      if (rt.type === "fixed" && rt.value) return rt.value + "px";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(124, Ee = (() => {
      if (!(ee != null && ee.width)) return;
      const rt = ee.width;
      if (rt.type === "fixed" && rt.value) return ue(rt.value);
      if (rt.type === "match_parent") return "100%";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(122, it = (() => {
      if (!(ee != null && ee.height)) return;
      const rt = ee.height;
      if (rt.type === "fixed" && rt.value) return ue(rt.value);
      if (rt.type === "match_parent") return "100%";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(117, we = (ee == null ? void 0 : ee.opacity) !== void 0 ? ee.opacity : void 0), t.$$.dirty[4] & /*activeResponsive*/
    4 && (ee == null || ee.visibility), t.$$.dirty[0] & /*componentContext*/
    1 && e(125, Se = J.json.hover), t.$$.dirty[0] & /*hoverClassName*/
    262144 | t.$$.dirty[3] & /*hoverStyleEl*/
    8192 | t.$$.dirty[4] & /*hoverConfig*/
    2)
      if (Se && typeof Se == "object" && typeof document < "u") {
        rs || e(18, rs = "divkit-hover-" + Math.random().toString(36).slice(2, 9));
        let rt = "";
        Se.background_color && (rt += `background-color: ${Se.background_color} !important;`), Se.opacity !== void 0 && (rt += `opacity: ${Se.opacity} !important;`), Se.scale !== void 0 && (rt += `scale: ${Se.scale} !important;`), Se.color && (rt += `color: ${Se.color} !important;`), Se.border_color && (rt += `border-color: ${Se.border_color} !important;`), (Se["box-shadow"] || Se.box_shadow) && (rt += `box-shadow: ${Se["box-shadow"] || Se.box_shadow} !important;`), rt && (ho || (e(106, ho = document.createElement("style")), document.head.appendChild(ho)), e(106, ho.textContent = `.${rs}:hover { ${rt} }`, ho));
      } else ho && (ho.remove(), e(106, ho = null), e(18, rs = ""));
    t.$$.dirty[0] & /*widthMin, widthMax, componentContext, heightMin, heightMax*/
    961 | t.$$.dirty[1] & /*style*/
    8388608 | t.$$.dirty[2] & /*backgroundStyle, borderStyle, width, height, margin, opacity, widthFlexGrow, heightFlexGrow, widthFlexShrink, heightFlexShrink*/
    107587616 | t.$$.dirty[3] & /*responsiveMaxWidth, responsiveHeight, gridArea, responsivePadding, padding, responsiveMargin, responsiveOpacity, customTransition, actionAnimationTransition, transform, flexBasis, customPosition, customStickyTop, customStickyBottom, customZIndex, customCursor, customBackdropFilter, customOverflow, customBoxShadow, animationOpacityStart, animationOpacityEnd, animationScaleStart, animationScaleEnd*/
    2147467423 | t.$$.dirty[4] & /*responsiveWidth*/
    1 && e(29, he = {
      ...Kt,
      ...Vr,
      ...j,
      width: Ee || Qr,
      "min-width": fn,
      "max-width": Qe || tn || (() => {
        const rt = J.json.max_width;
        if ((rt == null ? void 0 : rt.type) === "fixed" && (rt != null && rt.value)) return ue(rt.value);
      })(),
      height: it || V,
      "min-height": ie,
      // input max-height
      "max-height": W || (Kt == null ? void 0 : Kt["max-height"]) || (() => {
        const rt = J.json.max_height;
        if ((rt == null ? void 0 : rt.type) === "fixed" && (rt != null && rt.value)) return ue(rt.value);
      })(),
      "grid-area": ae,
      padding: Me || B,
      margin: Xe || qt,
      opacity: we !== void 0 ? we : Vt,
      transition: _e || Yr,
      "transform-origin": $o ? "0 0" : void 0,
      transform: $o,
      "flex-grow": yn || Ve || void 0,
      "flex-shrink": rn || Zt ? 1 : void 0,
      "flex-basis": Y,
      position: C,
      top: C === "sticky" && N !== void 0 ? ue(N) : void 0,
      bottom: C === "sticky" && z !== void 0 ? ue(z) : void 0,
      "z-index": O,
      cursor: oe,
      "backdrop-filter": fe,
      "-webkit-backdrop-filter": fe,
      overflow: ce,
      "box-shadow": Ae,
      "--divkit-animation-opacity-start": Nr,
      "--divkit-animation-opacity-end": Xr,
      "--divkit-animation-scale-start": ko,
      "--divkit-animation-scale-end": Qn
    });
  }, [
    J,
    pt,
    $t,
    pr,
    Pe,
    Ye,
    fn,
    tn,
    ie,
    W,
    Fr,
    Kr,
    L,
    ke,
    be,
    Rt,
    Ht,
    ei,
    rs,
    x,
    ht,
    E,
    He,
    v,
    Be,
    Zn,
    Yt,
    b,
    qe,
    he,
    le,
    T,
    R,
    F,
    w,
    y,
    h,
    m,
    g,
    d,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    sr,
    vr,
    Oa,
    j_,
    C_,
    ir,
    Kt,
    At,
    Cr,
    Dr,
    wr,
    Mr,
    qr,
    ot,
    St,
    Qt,
    dt,
    ur,
    _,
    j,
    Ot,
    H,
    Pt,
    lt,
    Ke,
    qt,
    kr,
    Qr,
    je,
    yn,
    rn,
    wn,
    A,
    V,
    $e,
    Ve,
    Zt,
    Ft,
    tr,
    Vt,
    Vr,
    Cn,
    Vn,
    oo,
    Xn,
    Yr,
    Nr,
    Xr,
    ko,
    Qn,
    _o,
    Pn,
    $o,
    Ar,
    Or,
    Fo,
    Jo,
    gi,
    ho,
    Ae,
    ce,
    fe,
    oe,
    O,
    z,
    C,
    N,
    Y,
    _e,
    we,
    Xe,
    B,
    Me,
    ae,
    it,
    Qe,
    Ee,
    Se,
    ee,
    Te,
    Q,
    n,
    de,
    tt,
    Ze,
    ct,
    st,
    pe,
    Ce,
    nt,
    zt,
    me,
    ye,
    or,
    Tt,
    Ne,
    rr,
    Sr,
    Bt,
    A_,
    S_,
    jr
  ];
}
class jn extends Hr {
  constructor(r) {
    super(), Rr(
      this,
      r,
      Qh,
      Yh,
      Tr,
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
const xh = "appkit-text", $h = "appkit-text_halign_start", ep = "appkit-text_halign_center", tp = "appkit-text_halign_end", rp = "appkit-text_valign_start", np = "appkit-text_valign_center", op = "appkit-text_valign_end", ip = "appkit-text_valign_baseline", sp = "appkit-text__inner", lp = "appkit-text_singleline", ap = "appkit-text_multiline", up = "appkit-text_truncate_none", cp = "appkit-text__inner_gradient", fp = "appkit-text__image", dp = "appkit-text__image_hidden", go = {
  "text-range": "appkit-text-range",
  text: xh,
  text_halign_start: $h,
  text_halign_center: ep,
  text_halign_end: tp,
  text_valign_start: rp,
  text_valign_center: np,
  text_valign_end: op,
  text_valign_baseline: ip,
  text__inner: sp,
  text_singleline: lp,
  text_multiline: ap,
  text_truncate_none: up,
  "text__inner_has-cloud-bg": "appkit-text__inner_has-cloud-bg",
  "text__inner_cloud-bg": "appkit-text__inner_cloud-bg",
  text__inner_gradient: cp,
  "text__image-wrapper": "appkit-text__image-wrapper",
  "text__image-wrapper_crop": "appkit-text__image-wrapper_crop",
  "text__image-wrapper_align_top": "appkit-text__image-wrapper_align_top",
  "text__image-wrapper_align_center": "appkit-text__image-wrapper_align_center",
  "text__image-wrapper_align_bottom": "appkit-text__image-wrapper_align_bottom",
  "text__image-wrapper_align_baseline": "appkit-text__image-wrapper_align_baseline",
  text__image: fp,
  text__image_hidden: dp,
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
function Yn(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e <= 0 ? r : e;
}
function _p(t) {
  if (t === "light" || t === "medium" || t === "bold" || t === "regular" || t === "semi_bold")
    return t === "medium" ? 500 : t === "bold" ? 700 : t === "light" ? 300 : t === "semi_bold" ? 600 : 400;
}
function Ci(t, r, e) {
  return typeof r == "number" && r > 0 ? r : _p(t) || e;
}
function Yl(t, r) {
  if (!t)
    return {};
  const e = {};
  for (const n of ["left", "top", "right", "bottom", "start", "end"]) {
    const o = t[n];
    o && (e[n] = o * r);
  }
  return e;
}
function qi(t) {
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
function uu(t) {
  let r, e, n, o, i, s, a;
  return {
    c() {
      r = Zr("svg"), e = Zr("defs"), n = Zr("filter"), o = Zr("feGaussianBlur"), i = Zr("feColorMatrix"), a = Zr("feBlend"), this.h();
    },
    l(l) {
      r = sn(l, "svg", { class: !0 });
      var u = ve(r);
      e = sn(u, "defs", {});
      var c = ve(e);
      n = sn(c, "filter", { id: !0 });
      var f = ve(n);
      o = sn(f, "feGaussianBlur", {
        in: !0,
        result: !0,
        stdDeviation: !0
      }), ve(o).forEach(k), i = sn(f, "feColorMatrix", {
        in: !0,
        result: !0,
        type: !0,
        values: !0
      }), ve(i).forEach(k), a = sn(f, "feBlend", { in: !0, in2: !0 }), ve(a).forEach(k), f.forEach(k), c.forEach(k), u.forEach(k), this.h();
    },
    h() {
      p(o, "in", "SourceGraphic"), p(o, "result", "blurred"), p(o, "stdDeviation", "3"), p(i, "in", "blurred"), p(i, "result", "withMatrix"), p(i, "type", "matrix"), p(i, "values", s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      t[5] + " -" + /*borderRadius*/
      t[5]), p(a, "in", "SourceGraphic"), p(a, "in2", "withMatrix"), p(
        n,
        "id",
        /*cloudFilterId*/
        t[11]
      ), p(r, "class", Mo["text-range__cloud-svg"]);
    },
    m(l, u) {
      q(l, r, u), yt(r, e), yt(e, n), yt(n, o), yt(n, i), yt(n, a);
    },
    p(l, u) {
      u[0] & /*borderRadius*/
      32 && s !== (s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      l[5] + " -" + /*borderRadius*/
      l[5]) && p(i, "values", s);
    },
    d(l) {
      l && k(r);
    }
  };
}
function cu(t) {
  let r;
  return {
    c() {
      r = Ie("span"), this.h();
    },
    l(e) {
      r = Fe(e, "SPAN", { class: !0 }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "class", Mo["text-range__top-offset"]), P(
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
      512 && P(
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
function fu(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Ie("div"), e = Ie("div"), n = Ie("div"), o = Ie("div"), i = Ie("div"), s = Ie("div"), this.h();
    },
    l(a) {
      r = Fe(a, "DIV", { class: !0 }), ve(r).forEach(k), e = Fe(a, "DIV", { class: !0 }), ve(e).forEach(k), n = Fe(a, "DIV", { class: !0 }), ve(n).forEach(k), o = Fe(a, "DIV", { class: !0 }), ve(o).forEach(k), i = Fe(a, "DIV", { class: !0 }), ve(i).forEach(k), s = Fe(a, "DIV", { class: !0 }), ve(s).forEach(k), this.h();
    },
    h() {
      p(r, "class", Mo["text-range__mask-animation"]), p(e, "class", Mo["text-range__mask-animation"]), p(n, "class", Mo["text-range__mask-animation"]), p(o, "class", Mo["text-range__mask-animation"]), p(i, "class", Mo["text-range__mask-animation"]), p(s, "class", Mo["text-range__mask-animation"]);
    },
    m(a, l) {
      q(a, r, l), q(a, e, l), q(a, n, l), q(a, o, l), q(a, i, l), q(a, s, l);
    },
    d(a) {
      a && (k(r), k(e), k(n), k(o), k(i), k(s));
    }
  };
}
function hp(t) {
  let r = (
    /*text*/
    (t[1] || "​") + ""
  ), e, n = (
    /*maskColor*/
    t[4] && fu()
  );
  return {
    c() {
      n && n.c(), e = On(r);
    },
    l(o) {
      n && n.l(o), e = Un(o, r);
    },
    m(o, i) {
      n && n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      /*maskColor*/
      o[4] ? n || (n = fu(), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null), i[0] & /*text*/
      2 && r !== (r = /*text*/
      (o[1] || "​") + "") && to(e, r);
    },
    d(o) {
      o && k(e), n && n.d(o);
    }
  };
}
function pp(t) {
  let r, e, n, o, i = (
    /*cloudBg*/
    t[3] && /*hasCloudBg*/
    t[6] && uu(t)
  ), s = (
    /*topOffset*/
    t[9] && cu(t)
  );
  return n = new bl({
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
      style: nr(
        /*style*/
        t[7]
      ),
      $$slots: { default: [hp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      i && i.c(), r = We(), s && s.c(), e = We(), Gt(n.$$.fragment);
    },
    l(a) {
      i && i.l(a), r = We(), s && s.l(a), e = We(), Jt(n.$$.fragment, a);
    },
    m(a, l) {
      i && i.m(a, l), q(a, r, l), s && s.m(a, l), q(a, e, l), Wt(n, a, l), o = !0;
    },
    p(a, l) {
      /*cloudBg*/
      a[3] && /*hasCloudBg*/
      a[6] ? i ? i.p(a, l) : (i = uu(a), i.c(), i.m(r.parentNode, r)) : i && (i.d(1), i = null), /*topOffset*/
      a[9] ? s ? s.p(a, l) : (s = cu(a), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null);
      const u = {};
      l[0] & /*componentContext*/
      1 && (u.componentContext = /*componentContext*/
      a[0]), l[0] & /*mods*/
      256 && (u.cls = wt(
        "text-range",
        Mo,
        /*mods*/
        a[8]
      )), l[0] & /*actions*/
      4 && (u.actions = /*actions*/
      a[2]), l[0] & /*style*/
      128 && (u.style = nr(
        /*style*/
        a[7]
      )), l[0] & /*text, maskColor*/
      18 | l[1] & /*$$scope*/
      64 && (u.$$scope = { dirty: l, ctx: a }), n.$set(u);
    },
    i(a) {
      o || (G(n.$$.fragment, a), o = !0);
    },
    o(a) {
      $(n.$$.fragment, a), o = !1;
    },
    d(a) {
      a && (k(r), k(e)), i && i.d(a), s && s.d(a), Ut(n, a);
    }
  };
}
function gp(t, r, e) {
  let n, o, i, s, a, l, u, c, f, { componentContext: d } = r, { text: g } = r, { rootFontSize: m } = r, { textStyles: h = {} } = r, { singleline: y = !1 } = r, { actions: w = void 0 } = r, { cloudBg: F = !1 } = r, { cloudBgId: R = "" } = r, { customLineHeight: B = null } = r;
  const Q = zr(en), ae = Q.direction;
  En(t, ae, (Ee) => e(35, f = Ee));
  const T = F && R || Q.genId("text-range") || "";
  let Y = "none", le = 12, C = 1.25, N = "", z, O = "", oe = "", fe = "", ce, Ae = null, _e, Te, ee = !1, Me, Xe, Qe;
  return t.$$set = (Ee) => {
    "componentContext" in Ee && e(0, d = Ee.componentContext), "text" in Ee && e(1, g = Ee.text), "rootFontSize" in Ee && e(12, m = Ee.rootFontSize), "textStyles" in Ee && e(13, h = Ee.textStyles), "singleline" in Ee && e(14, y = Ee.singleline), "actions" in Ee && e(2, w = Ee.actions), "cloudBg" in Ee && e(3, F = Ee.cloudBg), "cloudBgId" in Ee && e(15, R = Ee.cloudBgId), "customLineHeight" in Ee && e(16, B = Ee.customLineHeight);
  }, t.$$.update = () => {
    var Ee, it, we, Se, he, x, de, se;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && d.json && (e(17, Y = "none"), e(18, le = 12), e(19, C = 1.25), e(20, N = ""), e(21, z = void 0), e(22, O = ""), e(23, oe = ""), e(24, fe = ""), e(25, ce = void 0), e(26, Ae = null), e(27, _e = void 0), e(28, Te = void 0), e(29, ee = !1), e(4, Me = void 0), e(30, Xe = void 0), e(31, Qe = void 0)), t.$$.dirty[0] & /*textStyles*/
    8192) {
      let De = "none";
      (h.underline || h.strike) && (h.underline === "single" && h.strike === "single" ? De = "both" : h.underline === "single" ? De = "underline" : h.strike === "single" && (De = "strike")), e(17, Y = De);
    }
    if (t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(18, le = Yn(h.font_size, le)), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && Kn(h.line_height) && e(19, C = Number(h.line_height) / le), t.$$.dirty[0] & /*textStyles*/
    8192 && Bn(h.letter_spacing) && e(20, N = ue(h.letter_spacing)), t.$$.dirty[0] & /*textStyles, fontWeight*/
    2105344 && (e(21, z = Ci(h.font_weight, h.font_weight_value, z)), typeof h.font_family == "string" && h.font_family ? e(22, O = Q.typefaceProvider(h.font_family, { fontWeight: z || 400 })) : e(22, O = "")), t.$$.dirty[0] & /*textStyles, fontVariationSettings*/
    8396800) {
      const De = qi(h.font_variation_settings);
      De !== oe && e(23, oe = De);
    }
    if (t.$$.dirty[0] & /*textStyles, color*/
    16785408 && e(24, fe = gr(h.text_color, 1, fe)), t.$$.dirty[0] & /*textStyles*/
    8192 && e(9, n = h.top_offset ? ue(h.top_offset) : ""), t.$$.dirty[0] & /*textStyles*/
    8192 && e(6, o = ((Ee = h.background) == null ? void 0 : Ee.type) === "cloud"), t.$$.dirty[0] & /*textStyles*/
    8192 && e(33, i = ((it = h.background) == null ? void 0 : it.type) === "cloud" ? h.background.paddings : void 0), t.$$.dirty[0] & /*textStyles, cloudBg, hasCloudBg, fontSize*/
    270408 | t.$$.dirty[1] & /*$direction*/
    16) {
      const De = h.mask, tt = !!(De && (De.type === "solid" || De.type === "particles") && De.is_enabled !== !1 && De.color);
      if (F || tt ? e(25, ce = "transparent") : e(25, ce = void 0), e(29, ee = !1), e(4, Me = void 0), e(30, Xe = void 0), e(31, Qe = void 0), F)
        o ? e(28, Te = dh(h.background.color, 255, "transparent")) : e(28, Te = void 0);
      else if (De && tt) {
        if (De.type === "solid")
          e(28, Te = gr(De.color));
        else if (De.type === "particles") {
          const xe = Yn((we = De.particle_size) == null ? void 0 : we.value, 1), ne = ue(xe * 10 / le), Ze = Yn(De.density, 0.8), Re = gr(De.color);
          e(28, Te = void 0), e(4, Me = Re), e(30, Xe = ne), e(31, Qe = String(Ze)), e(29, ee = De.is_animated === !0);
        }
      } else ((Se = h.background) == null ? void 0 : Se.type) === "solid" ? e(28, Te = gl([h.background], f).color) : e(28, Te = void 0);
    }
    t.$$.dirty[0] & /*textStyles*/
    8192 && ((he = h.border) != null && he.stroke && h.border.stroke.color && gr(h.border.stroke.color) !== "transparent" && Kn(h.border.stroke.width) && ((x = h.background) == null ? void 0 : x.type) !== "cloud" ? e(26, Ae = {
      color: h.border.stroke.color,
      width: h.border.stroke.width,
      corner_radius: h.border.corner_radius
    }) : e(26, Ae = null)), t.$$.dirty[0] & /*cloudBg, hasCloudBg, textStyles, border*/
    67117128 && e(5, s = F ? o && h.background.corner_radius || 0 : Ae ? Yn(Ae.corner_radius, 0) : 0), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(32, a = h.text_shadow ? Vh(h.text_shadow, le) : void 0), t.$$.dirty[0] & /*textStyles*/
    8192 && typeof h.baseline_offset == "number" && e(27, _e = h.baseline_offset), t.$$.dirty[0] & /*textStyles*/
    8192 && e(34, l = typeof h.baseline_offset == "number" ? void 0 : h.alignment_vertical), t.$$.dirty[0] & /*singleline, decoration, hasCloudBg, customLineHeight, verticalAlign, maskColor, maskAnimated*/
    671301712 | t.$$.dirty[1] & /*customVerticalAlign*/
    8 && e(8, u = {
      singleline: y,
      decoration: Y,
      align: l,
      cloud: o,
      "relative-vertical-align": !!(B && _e),
      "has-particles-mask": !!Me,
      "mask-animated": ee
    }), t.$$.dirty[0] & /*fontSize, rootFontSize, lineHeight, letterSpacing, fontWeight, fontFamily, customLineHeight, verticalAlign, cloudBg, hasCloudBg, cloudBgId, colorOverride, color, background, textStyles, border, borderRadius, fontVariationSettings, maskColor, maskSize*/
    1610461304 | t.$$.dirty[1] & /*customVerticalAlign, cloudPadding, $direction, shadow, maskDensity*/
    31 && e(7, c = {
      "font-size": ue(le * 10 / m),
      "line-height": l ? "normal" : C,
      "letter-spacing": N,
      "font-weight": z,
      "font-family": O,
      "vertical-align": B || _e === void 0 ? void 0 : ue(_e * 10 / le),
      top: B && _e !== void 0 ? ue(-_e * 10 / le) : void 0,
      margin: i ? yo(Yl(i, -10 / le), f) : void 0,
      padding: i ? yo(Yl(i, 10 / le), f) : void 0,
      filter: F && o && !R ? `url(#${T})` : a,
      color: ce || fe,
      background: Te,
      opacity: F && o && !R ? ((se = (de = bo(h.background.color)) == null ? void 0 : de.a) != null ? se : 255) / 255 : void 0,
      /**
      * box-shadow instead of border because:
      * 1) Doesn't take space as border does
      * 2) There should not be a border-radius on line breaks, but there should be a border
      */
      "box-shadow": Ae ? `inset 0 0 0 ${ue(Ae.width * 10 / le)} ${Ae.color}` : void 0,
      "border-radius": s ? ue(s * 10 / le) : void 0,
      "font-feature-settings": h.font_feature_settings || void 0,
      "font-variation-settings": oe || void 0,
      "--divkit-text-mask-color": Me,
      "--divkit-text-mask-size": Xe,
      "--divkit-text-mask-density": Qe
    });
  }, [
    d,
    g,
    w,
    F,
    Me,
    s,
    o,
    c,
    u,
    n,
    ae,
    T,
    m,
    h,
    y,
    R,
    B,
    Y,
    le,
    C,
    N,
    z,
    O,
    oe,
    fe,
    ce,
    Ae,
    _e,
    Te,
    ee,
    Xe,
    Qe,
    a,
    i,
    l,
    f
  ];
}
class ja extends Hr {
  constructor(r) {
    super(), Rr(
      this,
      r,
      gp,
      pp,
      Tr,
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
function mp(t) {
  return String(t != null ? t : "");
}
function Md(t, r) {
  return t === "source_in" || t === "source_atop" || t === "darken" || t === "lighten" || t === "multiply" || t === "screen" ? t : r;
}
function $s(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1;
}
function Ca(t, r) {
  let e;
  return function(...n) {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      t.apply(this, n), e = null;
    }, r);
  };
}
function bp(t, r) {
  let e = null;
  const n = () => {
    const a = getComputedStyle(t), l = parseFloat(a.lineHeight);
    t.style.webkitLineClamp = "", t.style.maxHeight = "";
    const u = t.offsetHeight, c = t.scrollHeight;
    let f = Math.max(1, Math.floor(u / l));
    r.maxLines && r.maxLines < f && (f = r.maxLines), c > f * l + 1e-9 && (t.style.webkitLineClamp = String(f), t.style.maxHeight = l * f + "px");
  }, o = Ca(n, 50), i = () => {
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
const { Boolean: Pd } = Ho;
function du(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function _u(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function hu(t) {
  let r = (
    /*htmlTag*/
    t[9]
  ), e, n = (
    /*htmlTag*/
    t[9] && Pl(t)
  );
  return {
    c() {
      n && n.c(), e = We();
    },
    l(o) {
      n && n.l(o), e = We();
    },
    m(o, i) {
      n && n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      /*htmlTag*/
      o[9] ? r ? Tr(
        r,
        /*htmlTag*/
        o[9]
      ) ? (n.d(1), n = Pl(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = Pl(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : r && (n.d(1), n = null, r = /*htmlTag*/
      o[9]);
    },
    i: S,
    o(o) {
      $(n, o);
    },
    d(o) {
      o && k(e), n && n.d(o);
    }
  };
}
function yp(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Ie("span"), e = Ie("span"), this.h();
    },
    l(s) {
      r = Fe(s, "SPAN", { style: !0 });
      var a = ve(r);
      e = Fe(a, "SPAN", { class: !0, style: !0 }), ve(e).forEach(k), a.forEach(k), this.h();
    },
    h() {
      p(e, "class", n = wt("text__image-wrapper", go, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), p(e, "style", o = nr({
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
      })), p(r, "style", i = nr(
        /*item*/
        t[71].image.wrapperStyle
      ));
    },
    m(s, a) {
      q(s, r, a), yt(r, e);
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
      })) && p(e, "class", n), a[0] & /*renderList, customLineHeight*/
      10240 && o !== (o = nr({
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
      })) && p(e, "style", o), a[0] & /*renderList*/
      8192 && i !== (i = nr(
        /*item*/
        s[71].image.wrapperStyle
      )) && p(r, "style", i);
    },
    i: S,
    o: S,
    d(s) {
      s && k(r);
    }
  };
}
function wp(t) {
  let r, e, n = (
    /*item*/
    t[71].text && pu(t)
  );
  return {
    c() {
      n && n.c(), r = We();
    },
    l(o) {
      n && n.l(o), r = We();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && G(n, 1)) : (n = pu(o), n.c(), G(n, 1), n.m(r.parentNode, r)) : n && (mr(), $(n, 1, 1, () => {
        n = null;
      }), br());
    },
    i(o) {
      e || (G(n), e = !0);
    },
    o(o) {
      $(n), e = !1;
    },
    d(o) {
      o && k(r), n && n.d(o);
    }
  };
}
function pu(t) {
  let r, e;
  return r = new ja({
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
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function gu(t) {
  let r, e, n, o;
  const i = [wp, yp], s = [];
  function a(l, u) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(l) {
      e && e.l(l), n = We();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (mr(), $(s[c], 1, 1, () => {
        s[c] = null;
      }), br()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Pl(t) {
  let r, e, n, o, i = ar(
    /*renderList*/
    t[13]
  ), s = [];
  for (let c = 0; c < i.length; c += 1)
    s[c] = gu(_u(t, i, c));
  const a = (c) => $(s[c], 1, 1, () => {
    s[c] = null;
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
      style: n = nr({
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
    u = Io(u, l[c]);
  return {
    c() {
      r = Ie(
        /*htmlTag*/
        t[9]
      );
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      this.h();
    },
    l(c) {
      r = Fe(
        c,
        /*htmlTag*/
        (t[9] || "null").toUpperCase(),
        { class: !0, style: !0 }
      );
      var f = ve(r);
      for (let d = 0; d < s.length; d += 1)
        s[d].l(f);
      f.forEach(k), this.h();
    },
    h() {
      li(
        /*htmlTag*/
        t[9]
      )(r, u);
    },
    m(c, f) {
      q(c, r, f);
      for (let d = 0; d < s.length; d += 1)
        s[d] && s[d].m(r, null);
      o = !0;
    },
    p(c, f) {
      if (f[0] & /*componentContext, renderList, fontSize, singleline, wholeTextCloudBgId, customLineHeight*/
      26889) {
        i = ar(
          /*renderList*/
          c[13]
        );
        let d;
        for (d = 0; d < i.length; d += 1) {
          const g = _u(c, i, d);
          s[d] ? (s[d].p(g, f), G(s[d], 1)) : (s[d] = gu(g), s[d].c(), G(s[d], 1), s[d].m(r, null));
        }
        for (mr(), d = i.length; d < s.length; d += 1)
          a(d);
        br();
      }
      li(
        /*htmlTag*/
        c[9]
      )(r, u = Wo(l, [
        (!o || f[0] & /*innerMods*/
        524288 && e !== (e = wt("text__inner", go, {
          .../*innerMods*/
          c[19],
          "cloud-bg": !0
        }))) && { class: e },
        (!o || f[0] & /*style, cloudPadding, wholeTextCloudBgId, wholeTextCloudBgOpacity*/
        442368 && n !== (n = nr({
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
          G(s[f]);
        o = !0;
      }
    },
    o(c) {
      s = s.filter(Pd);
      for (let f = 0; f < s.length; f += 1)
        $(s[f]);
      o = !1;
    },
    d(c) {
      c && k(r), un(s, c);
    }
  };
}
function vp(t) {
  let r, e;
  return r = new ja({
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
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function kp(t) {
  let r, e, n = ar(
    /*renderList*/
    t[13]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = bu(du(t, n, s));
  const i = (s) => $(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = We();
    },
    l(s) {
      for (let a = 0; a < o.length; a += 1)
        o[a].l(s);
      r = We();
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
        n = ar(
          /*renderList*/
          s[13]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = du(s, n, l);
          o[l] ? (o[l].p(u, a), G(o[l], 1)) : (o[l] = bu(u), o[l].c(), G(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (mr(), l = n.length; l < o.length; l += 1)
          i(l);
        br();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          G(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Pd);
      for (let a = 0; a < o.length; a += 1)
        $(o[a]);
      e = !1;
    },
    d(s) {
      s && k(r), un(o, s);
    }
  };
}
function Ep(t) {
  let r, e, n, o, i, s, a, l, u, c, f, d, g, m = [
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
      style: l = nr({
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
      r = Ie("span"), e = Ie("span"), n = Ie("img"), this.h();
    },
    l(y) {
      r = Fe(y, "SPAN", { style: !0 });
      var w = ve(r);
      e = Fe(w, "SPAN", { class: !0, style: !0 });
      var F = ve(e);
      n = Fe(F, "IMG", {
        class: !0,
        src: !0,
        loading: !0,
        decoding: !0,
        alt: !0,
        style: !0
      }), F.forEach(k), w.forEach(k), this.h();
    },
    h() {
      Qo(n, h), p(e, "class", u = wt("text__image-wrapper", go, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), p(e, "style", c = nr({
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
      })), p(r, "style", f = nr(
        /*item*/
        t[71].image.wrapperStyle
      ));
    },
    m(y, w) {
      q(y, r, w), yt(r, e), yt(e, n), d || (g = Je(
        n,
        "error",
        /*onImgError*/
        t[39]
      ), d = !0);
    },
    p(y, w) {
      Qo(n, h = Wo(m, [
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
        8192 && l !== (l = nr({
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
      10240 && u !== (u = wt("text__image-wrapper", go, {
        align: (
          /*item*/
          y[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          y[11] !== null
        )
      })) && p(e, "class", u), w[0] & /*renderList, customLineHeight*/
      10240 && c !== (c = nr({
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
      })) && p(e, "style", c), w[0] & /*renderList*/
      8192 && f !== (f = nr(
        /*item*/
        y[71].image.wrapperStyle
      )) && p(r, "style", f);
    },
    i: S,
    o: S,
    d(y) {
      y && k(r), d = !1, g();
    }
  };
}
function jp(t) {
  let r, e, n = (
    /*item*/
    t[71].text && mu(t)
  );
  return {
    c() {
      n && n.c(), r = We();
    },
    l(o) {
      n && n.l(o), r = We();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && G(n, 1)) : (n = mu(o), n.c(), G(n, 1), n.m(r.parentNode, r)) : n && (mr(), $(n, 1, 1, () => {
        n = null;
      }), br());
    },
    i(o) {
      e || (G(n), e = !0);
    },
    o(o) {
      $(n), e = !1;
    },
    d(o) {
      o && k(r), n && n.d(o);
    }
  };
}
function mu(t) {
  let r, e;
  return r = new ja({
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
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function bu(t) {
  let r, e, n, o;
  const i = [jp, Ep], s = [];
  function a(l, u) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(l) {
      e && e.l(l), n = We();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (mr(), $(s[c], 1, 1, () => {
        s[c] = null;
      }), br()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Nl(t) {
  let r, e, n, o, i, s, a, l, u;
  const c = [kp, vp], f = [];
  function d(h, y) {
    return (
      /*renderList*/
      h[13].length ? 0 : 1
    );
  }
  e = d(t), n = f[e] = c[e](t);
  let g = [
    {
      class: o = wt(
        "text__inner",
        go,
        /*innerMods*/
        t[19]
      )
    },
    {
      style: i = nr(
        /*style*/
        t[18]
      )
    }
  ], m = {};
  for (let h = 0; h < g.length; h += 1)
    m = Io(m, g[h]);
  return {
    c() {
      r = Ie(
        /*htmlTag*/
        t[9]
      ), n.c(), this.h();
    },
    l(h) {
      r = Fe(
        h,
        /*htmlTag*/
        (t[9] || "null").toUpperCase(),
        { class: !0, style: !0 }
      );
      var y = ve(r);
      n.l(y), y.forEach(k), this.h();
    },
    h() {
      li(
        /*htmlTag*/
        t[9]
      )(r, m);
    },
    m(h, y) {
      q(h, r, y), f[e].m(r, null), a = !0, l || (u = dl(s = bp.call(null, r, {
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
      e = d(h), e === w ? f[e].p(h, y) : (mr(), $(f[w], 1, 1, () => {
        f[w] = null;
      }), br(), n = f[e], n ? n.p(h, y) : (n = f[e] = c[e](h), n.c()), G(n, 1), n.m(r, null)), li(
        /*htmlTag*/
        h[9]
      )(r, m = Wo(g, [
        (!a || y[0] & /*innerMods*/
        524288 && o !== (o = wt(
          "text__inner",
          go,
          /*innerMods*/
          h[19]
        ))) && { class: o },
        (!a || y[0] & /*style*/
        262144 && i !== (i = nr(
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
      a || (G(n), a = !0);
    },
    o(h) {
      $(n), a = !1;
    },
    d(h) {
      h && k(r), f[e].d(), l = !1, u();
    }
  };
}
function Cp(t) {
  let r, e = (
    /*htmlTag*/
    t[9]
  ), n, o, i = (
    /*hasCloudBg*/
    t[6] && hu(t)
  ), s = (
    /*htmlTag*/
    t[9] && Nl(t)
  );
  return {
    c() {
      i && i.c(), r = dr(), s && s.c(), n = We();
    },
    l(a) {
      i && i.l(a), r = _r(a), s && s.l(a), n = We();
    },
    m(a, l) {
      i && i.m(a, l), q(a, r, l), s && s.m(a, l), q(a, n, l), o = !0;
    },
    p(a, l) {
      /*hasCloudBg*/
      a[6] ? i ? (i.p(a, l), l[0] & /*hasCloudBg*/
      64 && G(i, 1)) : (i = hu(a), i.c(), G(i, 1), i.m(r.parentNode, r)) : i && (mr(), $(i, 1, 1, () => {
        i = null;
      }), br()), /*htmlTag*/
      a[9] ? e ? Tr(
        e,
        /*htmlTag*/
        a[9]
      ) ? (s.d(1), s = Nl(a), e = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : s.p(a, l) : (s = Nl(a), e = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : e && (s.d(1), s = null, e = /*htmlTag*/
      a[9]);
    },
    i(a) {
      o || (G(i), o = !0);
    },
    o(a) {
      $(i), $(s, a), o = !1;
    },
    d(a) {
      a && (k(r), k(n)), i && i.d(a), s && s.d(a);
    }
  };
}
function Ap(t) {
  let r, e;
  return r = new jn({
    props: {
      cls: wt(
        "text",
        go,
        /*mods*/
        t[20]
      ) + " " + /*selectable*/
      (t[5] ? Ir.root__selectable : Ir.root__unselectable),
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
      $$slots: { default: [Cp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
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
      (n[5] ? Ir.root__selectable : Ir.root__unselectable)), o[0] & /*componentContext*/
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Sp(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g, m, h, y, w, F, R, B, Q, ae, T, Y, le, C, N, z, O, oe, fe = S, ce = () => (fe(), fe = I(F, (St) => e(52, oe = St)), F), Ae, _e = S, Te = () => (_e(), _e = I(i, (St) => e(53, Ae = St)), i), ee, Me = S, Xe = () => (Me(), Me = I(o, (St) => e(54, ee = St)), o), Qe, Ee = S, it = () => (Ee(), Ee = I(y, (St) => e(55, Qe = St)), y), we, Se = S, he = () => (Se(), Se = I(h, (St) => e(56, we = St)), h), x, de = S, se = () => (de(), de = I(m, (St) => e(57, x = St)), m), De, tt = S, xe = () => (tt(), tt = I(g, (St) => e(58, De = St)), g), ne, Ze = S, Re = () => (Ze(), Ze = I(d, (St) => e(59, ne = St)), d), ut, ct = S, ft = () => (ct(), ct = I(u, (St) => e(60, ut = St)), u), Et, st = S, Lt = () => (st(), st = I(f, (St) => e(61, Et = St)), f), _t, pe = S, ge = () => (pe(), pe = I(c, (St) => e(62, _t = St)), c), gt, Ce = S, M = () => (Ce(), Ce = I(w, (St) => e(10, gt = St)), w), Ct, ht = S, Dt = () => (ht(), ht = I(l, (St) => e(63, Ct = St)), l), Nt, nt = S, X = () => (nt(), nt = I(a, (St) => e(64, Nt = St)), a), It, zt = S, er = () => (zt(), zt = I(s, (St) => e(65, It = St)), s), Xt, me = S, Ue = () => (me(), me = I(n, (St) => e(66, Xt = St)), n), mt, ye = S, et = () => (ye(), ye = I(R, (St) => e(67, mt = St)), R);
  t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => Me()), t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => Se()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => Ze()), t.$$.on_destroy.push(() => ct()), t.$$.on_destroy.push(() => st()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => Ce()), t.$$.on_destroy.push(() => ht()), t.$$.on_destroy.push(() => nt()), t.$$.on_destroy.push(() => zt()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => ye());
  let { componentContext: Le } = r, { layoutParams: or = void 0 } = r;
  const Oe = zr(en), kt = Oe.direction;
  En(t, kt, (St) => e(51, O = St));
  let Tt = "", Mt = 12, hr = 1.25, Ne = null, jt = "", lr, rr = "", xt = !1, yr = "start", Sr = "start", Bt = "", jr = "", J = "", pt = !1, Kt = [], At = !1, Cr = "", Dr, wr = [], Mr = {}, qr = "span";
  function ir(St, $t, Qt, pr) {
    var re, _;
    let dt = [];
    if (wr.forEach(([j, Pe]) => {
      Oe.removeSvgFilter(j, Pe);
    }), wr = [], !(Array.isArray($t) && $t.length || Array.isArray(Qt) && Qt.length && St)) {
      e(13, Kt = []);
      return;
    }
    const te = St;
    let vt = $t || [{ start: 0, end: te.length }], sr = Qt || [], vr = 0, ur = [], E = [];
    vt.forEach((j) => {
      const Pe = j.start || 0, He = j.end || St.length, Ot = {
        top_offset: 0,
        ...j,
        start: Pe,
        end: He
      };
      E.push({
        index: Pe,
        range: Ot,
        type: "rangeStart",
        isStart: !0
      }), E.push({
        index: He,
        range: Ot,
        type: "rangeEnd"
      });
    }), sr.forEach((j, Pe) => {
      j.start !== void 0 && j.url && j.start <= te.length && E.push({
        index: j.indexing_direction === "reversed" ? St.length - j.start : j.start,
        image: j,
        type: "image",
        arrayIndex: Pe
      });
    }), E.sort((j, Pe) => j.index === Pe.index ? j.type !== Pe.type ? j.type === "image" ? -1 : Pe.type === "image" ? 1 : j.type < Pe.type ? -1 : 1 : j.type === "image" && Pe.type === "image" ? Pe.arrayIndex - j.arrayIndex : j.type === "rangeStart" && Pe.type === "rangeStart" ? j.range.end - Pe.range.end : j.type === "rangeStart" ? 1 : Pe.type === "rangeStart" ? -1 : j.type !== "image" && Pe.type !== "image" ? j.range.start - Pe.range.start : 0 : j.index - Pe.index), E.forEach((j) => {
      var Ot, H, Pt, lt;
      let Pe = j.type === "image" ? null : j.range, He = j.index;
      if (He > vr) {
        let Ye = Object.assign({ ...pr }, ...ur);
        ur.length && ur[ur.length - 1].start !== vr && (Ye.top_offset = 0), dt.push({
          text: te.substring(vr, He),
          textStyles: Ye,
          actions: j.type === "rangeEnd" && ((H = (Ot = j.range) == null ? void 0 : Ot.actions) == null ? void 0 : H.filter($s)) || void 0
        });
      }
      if (j.type === "rangeStart" && Pe)
        ur.push(Pe);
      else if (j.type === "rangeEnd")
        ur = ur.filter((Ye) => Ye !== j.range);
      else if (j.type === "image") {
        let Ye = Object.assign({ ...pr }, ...ur), Ke = ue((j.image.width && j.image.width.value || 20) * 10 / (Ye.font_size || 12)), qt = ue((j.image.height && j.image.height.value || 20) * 10 / (Ye.font_size || 12));
        const kr = {
          "font-size": ue((Number(Ye.font_size) || 12) * 10 / Mt)
        };
        let Qr = "";
        const fn = j.image.tint_color, tn = Md(j.image.tint_mode, "source_in");
        if (fn) {
          const wn = gr(j.image.tint_color);
          Qr = Oe.addSvgFilter(wn, tn), wr.push([wn, tn]);
        }
        const je = {}, yn = (Pt = j.image.accessibility) == null ? void 0 : Pt.type, rn = ((lt = j.image.accessibility) == null ? void 0 : lt.description) || "";
        (yn === "button" || yn === "image") && rn ? je.role = yn : (!rn || yn === "none") && (je["aria-hidden"] = "true"), dt.push({
          image: {
            url: j.image.url,
            width: Ke,
            height: qt,
            wrapperStyle: kr,
            svgFilterId: Qr,
            preloadRequired: !!j.image.preload_required,
            verticalAlign: j.image.alignment_vertical,
            description: rn,
            a11yAttrs: je
          }
        });
      }
      vr = He;
    }), vr < te.length && dt.push({
      text: te.substring(vr),
      textStyles: { ...pr }
    }), e(13, Kt = dt), e(6, At = dt.some((j) => {
      var Pe;
      return "text" in j && ((Pe = j.textStyles.background) == null ? void 0 : Pe.type) === "cloud";
    })), e(14, Cr = At && dt.length === 1 ? Oe.genId("text-whole-bg") : ""), e(15, Dr = Cr ? ((_ = (re = bo(dt[0].textStyles.background.color)) == null ? void 0 : re.a) != null ? _ : 255) / 255 : void 0);
  }
  function ot(St) {
    St.target && "classList" in St.target && St.target.classList.add(go.text__image_hidden);
  }
  return cn(() => {
    wr.forEach(([St, $t]) => {
      Oe.removeSvgFilter(St, $t);
    });
  }), t.$$set = (St) => {
    "componentContext" in St && e(0, Le = St.componentContext), "layoutParams" in St && e(1, or = St.layoutParams);
  }, t.$$.update = () => {
    var St, $t;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && Le.json && (e(3, Mt = 12), e(40, hr = 1.25), e(11, Ne = null), e(41, jt = ""), e(12, lr = void 0), e(4, rr = ""), e(42, xt = !1), e(43, yr = "start"), e(44, Sr = "start"), e(45, Bt = ""), e(47, J = ""), e(5, pt = !1)), t.$$.dirty[0] & /*componentContext*/
    1 && Ue(e(37, n = Le.getDerivedFromVars(Le.json.text))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(36, o = Le.getDerivedFromVars(Le.json.ranges, void 0, !0, 3))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(35, i = Le.getDerivedFromVars(Le.json.images))), t.$$.dirty[0] & /*componentContext*/
    1 && er(e(34, s = Le.getDerivedFromVars(
      {
        font_size: Le.json.font_size,
        letter_spacing: Le.json.letter_spacing,
        font_weight: Le.json.font_weight,
        font_weight_value: Le.json.font_weight_value,
        font_family: Le.json.font_family,
        text_color: Le.json.text_color,
        underline: Le.json.underline,
        strike: Le.json.strike,
        line_height: Le.json.line_height,
        text_shadow: Le.json.text_shadow,
        font_feature_settings: Le.json.font_feature_settings,
        font_variation_settings: Le.json.font_variation_settings
      },
      void 0,
      !0,
      1
    ))), t.$$.dirty[0] & /*componentContext*/
    1 && X(e(33, a = Le.getDerivedFromVars(Le.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(32, l = Le.getDerivedFromVars(Le.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(31, u = Le.getDerivedFromVars(Le.json.max_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(30, c = Le.getDerivedFromVars(Le.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Lt(e(29, f = Le.getDerivedFromVars(Le.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Re(e(28, d = Le.getDerivedFromVars(Le.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(27, g = Le.getDerivedFromVars(Le.json.focused_text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && se(e(26, m = Le.getDerivedFromVars(Le.json.truncate))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(25, h = Le.getDerivedFromVars(Le.json.text_gradient))), t.$$.dirty[0] & /*componentContext*/
    1 && it(e(24, y = Le.getDerivedFromVars(Le.json.selectable))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(23, w = Le.getDerivedFromVars(Le.json.auto_ellipsize))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(22, F = Le.getDerivedFromVars(Le.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(21, R = Le.getDerivedFromVars(Le.json.heading_type))), t.$$.dirty[2] & /*$jsonHeadingType*/
    32 && e(9, B = (() => {
      const Qt = mt;
      if (Qt && typeof Qt == "string") {
        const pr = Qt.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(pr))
          return pr;
      }
      return "span";
    })()), t.$$.dirty[0] & /*htmlTag*/
    512 && e(16, qr = B !== "span" ? "div" : "span"), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonText*/
    16 && (typeof Le.json.text == "string" ? e(2, Tt = mp(Xt)) : (e(2, Tt = ""), Le.logError(K(new Error("Incorrect text value type"))))), t.$$.dirty[1] & /*$jsonTextGradient, $direction*/
    34603008) {
      let Qt = "";
      if (we) {
        const pr = gl([we], O);
        pr.image && (Qt = pr.image);
      }
      e(47, J = Qt);
    }
    if (t.$$.dirty[1] & /*gradient*/
    65536 | t.$$.dirty[2] & /*$jsonRootTextStyles*/
    8 && e(7, Mr = J ? { ...It, text_color: "" } : It), t.$$.dirty[0] & /*fontSize, componentContext*/
    9 | t.$$.dirty[2] & /*$jsonTextSize*/
    4) {
      e(3, Mt = Yn(Nt, Mt));
      const Qt = Le.json.responsive;
      if (Qt && typeof Qt == "object" && typeof window < "u") {
        const pr = window.matchMedia("(max-width: 767px)").matches, dt = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
        pr && ((St = Qt.mobile) != null && St.font_size) ? e(3, Mt = Qt.mobile.font_size) : dt && (($t = Qt.tablet) != null && $t.font_size) && e(3, Mt = Qt.tablet.font_size);
      }
    }
    if (t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*lineHeight*/
    512 | t.$$.dirty[2] & /*$jsonLineHeight*/
    2) {
      const Qt = Ct;
      Kn(Qt) ? (e(40, hr = Number(Qt) / Mt), e(11, Ne = hr)) : e(11, Ne = null);
    }
    if (t.$$.dirty[1] & /*$jsonMaxLines*/
    536870912 && e(8, Q = ut === 1), t.$$.dirty[0] & /*$jsonAutoEllipsize*/
    1024 | t.$$.dirty[1] & /*$jsonMaxLines, lineHeight*/
    536871424) {
      let Qt = "", pr, dt = "", te = !1;
      if (ut && ut > 1) {
        const vt = Number(ut);
        Qt = vt * hr + "em", pr = vt, dt = vt, te = !0;
      } else gt && ut !== 1 && (te = !0);
      e(41, jt = Qt), e(12, lr = pr), e(4, rr = dt), e(42, xt = te);
    }
    if (t.$$.dirty[1] & /*$direction, halign*/
    1052672 | t.$$.dirty[2] & /*$jsonHAlign*/
    1 && e(43, yr = yl(_t, O, yr)), t.$$.dirty[1] & /*$jsonVAlign, valign*/
    1073750016 && e(44, Sr = wl(Et, Sr)), t.$$.dirty[0] & /*text*/
    4 | t.$$.dirty[1] & /*$jsonRanges*/
    8388608 && e(50, ae = !ee || Tt && ee.length === 1 && ee[0] && (!ee[0].start || ee[0].start === 0) && (!ee[0].end || typeof ee[0].end == "number" && ee[0].end >= Tt.length)), t.$$.dirty[1] & /*gradient, $jsonTextColor, $jsonRanges*/
    276889600 && e(49, T = !!(!J && ne) != !!(ee && ee[0] && ee[0].text_color)), t.$$.dirty[1] & /*$jsonMaxLines, isAllTextSameColor, isOnlyOneColorDefined, $jsonTextColor, $jsonRanges, rootTextColor*/
    814497792) {
      let Qt = "";
      ut && ae && T && (Qt = gr(ne || ee && ee[0] && ee[0].text_color, 1, Bt)), e(45, Bt = Qt);
    }
    t.$$.dirty[1] & /*$jsonFocusTextColor, focusTextColor*/
    134250496 && e(46, jr = gr(De, 1, jr)), t.$$.dirty[1] & /*$jsonTruncate*/
    67108864 && e(48, Y = x === "none" ? "none" : ""), t.$$.dirty[0] & /*selectable*/
    32 | t.$$.dirty[1] & /*$jsonSelectable*/
    16777216 && e(5, pt = pn(Qe, pt)), t.$$.dirty[0] & /*text, rootTextStyles*/
    132 | t.$$.dirty[1] & /*$jsonRanges, $jsonImages*/
    12582912 && ir(Tt, ee, Ae, Mr), t.$$.dirty[0] & /*singleline*/
    256 | t.$$.dirty[1] & /*multiline, halign, valign, truncate, focusTextColor*/
    178176 && e(20, le = {
      singleline: Q,
      multiline: xt,
      halign: yr,
      valign: Sr,
      truncate: Y,
      "has-focus-color": !!jr
    }), t.$$.dirty[0] & /*hasCloudBg*/
    64 | t.$$.dirty[1] & /*gradient*/
    65536 && e(19, C = {
      gradient: !!J,
      "has-cloud-bg": At
    }), t.$$.dirty[0] & /*fontSize, lineClamp*/
    24 | t.$$.dirty[1] & /*lineHeight, maxHeight, rootTextColor, gradient, focusTextColor*/
    116224 && e(18, N = {
      "font-size": ue(Mt),
      "line-height": hr,
      "max-height": jt,
      "-webkit-line-clamp": rr,
      color: Bt,
      "background-image": J,
      "--divkit-text-focus-color": jr
    }), t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*$jsonPaddings, $direction*/
    3145728 && e(17, z = yo(Yl(ji(oe, {}) || {}, 10 / Mt), O));
  }, [
    Le,
    or,
    Tt,
    Mt,
    rr,
    pt,
    At,
    Mr,
    Q,
    B,
    gt,
    Ne,
    lr,
    Kt,
    Cr,
    Dr,
    qr,
    z,
    N,
    C,
    le,
    R,
    F,
    w,
    y,
    h,
    m,
    g,
    d,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    n,
    kt,
    ot,
    hr,
    jt,
    xt,
    yr,
    Sr,
    Bt,
    jr,
    J,
    Y,
    T,
    ae,
    O,
    oe,
    Ae,
    ee,
    Qe,
    we,
    x,
    De,
    ne,
    ut,
    Et,
    _t,
    Ct,
    Nt,
    It,
    Xt,
    mt
  ];
}
class Vp extends Hr {
  constructor(r) {
    super(), Rr(this, r, Sp, Ap, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Ip = "appkit-container", Dp = "appkit-container_wrap", Fp = "appkit-container_overflow_visible", Tp = "appkit-container_orientation_vertical", Mp = "appkit-container_valign_start", Pp = "appkit-container_valign_center", Np = "appkit-container_valign_end", zp = "appkit-container_halign_start", Op = "appkit-container_halign_center", Bp = "appkit-container_halign_end", Lp = "appkit-container_orientation_horizontal", Rp = "appkit-container_orientation_overlap", yu = {
  container: Ip,
  container_wrap: Dp,
  container_overflow_visible: Fp,
  container_orientation_vertical: Tp,
  container_valign_start: Mp,
  container_valign_center: Pp,
  container_valign_end: Np,
  "container_valign_space-between": "appkit-container_valign_space-between",
  "container_valign_space-around": "appkit-container_valign_space-around",
  "container_valign_space-evenly": "appkit-container_valign_space-evenly",
  container_halign_start: zp,
  container_halign_center: Op,
  container_halign_end: Bp,
  "container_halign_space-between": "appkit-container_halign_space-between",
  "container_halign_space-around": "appkit-container_halign_space-around",
  "container_halign_space-evenly": "appkit-container_halign_space-evenly",
  container_orientation_horizontal: Lp,
  container_orientation_overlap: Rp,
  "container_fixed-container": "appkit-container_fixed-container",
  "container_responsive-mobile-vertical": "appkit-container_responsive-mobile-vertical",
  "container_responsive-mobile-horizontal": "appkit-container_responsive-mobile-horizontal",
  "container_responsive-mobile-has-height": "appkit-container_responsive-mobile-has-height",
  "container_responsive-tablet-vertical": "appkit-container_responsive-tablet-vertical",
  "container_responsive-tablet-horizontal": "appkit-container_responsive-tablet-horizontal",
  "container_responsive-tablet-has-height": "appkit-container_responsive-tablet-has-height"
};
function wu(t) {
  return {
    top: Number(t == null ? void 0 : t.top) || 0,
    right: Number(t == null ? void 0 : t.right) || 0,
    bottom: Number(t == null ? void 0 : t.bottom) || 0,
    left: Number(t == null ? void 0 : t.left) || 0
  };
}
function vu(t, r, e) {
  const n = ((r == null ? void 0 : r.margins.left) || 0) + ((r == null ? void 0 : r.margins.right) || 0), o = ((r == null ? void 0 : r.margins.top) || 0) + ((r == null ? void 0 : r.margins.bottom) || 0);
  r != null && r.show_at_start && (e ? t.top = r.style.height + o : t.left = r.style.width + n), r != null && r.show_at_end && (e ? t.bottom = r.style.height + o : t.right = r.style.width + n);
}
function Hp(t, r, e) {
  const n = {};
  return vu(n, r, t === "vertical"), vu(n, e, t === "horizontal"), n;
}
function Wp({
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
  ], i.map(ue).join(" ");
}
function Up(t) {
  var e;
  const r = (e = t.width) == null ? void 0 : e.type;
  return r !== "wrap_content" && r !== "fixed";
}
function Gp(t) {
  var e;
  return ((e = t.height) == null ? void 0 : e.type) === "match_parent";
}
function Jp(t, r) {
  return t === "vertical" || t === "horizontal" || t === "overlap" ? t : r;
}
function qp(t) {
  var r, e, n;
  return {
    width: ln((r = t.item_width) == null ? void 0 : r.value, 10),
    height: ln((e = t.item_height) == null ? void 0 : e.value, 10),
    radius: ln((n = t.corner_radius) == null ? void 0 : n.value, 5)
  };
}
function Yp(t) {
  var e;
  const r = ln((e = t.radius) == null ? void 0 : e.value, 10) * 2;
  return {
    width: r,
    height: r,
    radius: r
  };
}
function Kp(t, r, e) {
  var l;
  const n = {}, o = r.stroke || (e == null ? void 0 : e.stroke), i = o != null && o.color ? gr(o.color) : "", s = o != null && o.width ? Number((l = o.width) != null ? l : 1) : "";
  n.width = t.width, n.height = t.height, n.borderRadius = t.radius;
  const a = r.background_color || (e == null ? void 0 : e.color);
  return n.background = gr(a), i && s && (n.boxShadow = `inset 0 0 0 ${ue(s)} ${i}`), n;
}
function po(t, r, e) {
  if (!t || !t.shape || !t.shape.type || !r.includes(t.shape.type) || t.type !== "shape_drawable")
    return e;
  let n;
  if (t.shape.type === "rounded_rectangle")
    n = qp(t.shape);
  else if (t.shape.type === "circle")
    n = Yp(t.shape);
  else
    return e;
  return Kp(n, t.shape, {
    color: t.color,
    stroke: t.stroke
  });
}
let ls;
function ku() {
  if (typeof document > "u" && (ls = !0), ls !== void 0)
    return ls;
  const t = document.createElement("div");
  return t.style.position = "absolute", t.style.display = "flex", t.style.flexDirection = "column", t.style.gap = "1px", t.appendChild(document.createElement("div")), t.appendChild(document.createElement("div")), document.body.appendChild(t), ls = t.scrollHeight === 1, document.body.removeChild(t), ls;
}
function Xp(t, r) {
  return t === "top" || t === "center" || t === "bottom" || t === "baseline" || t === "space-between" || t === "space-around" || t === "space-evenly" ? t === "top" ? "start" : t === "bottom" ? "end" : t : r;
}
function Zp(t, r, e) {
  return t === "left" || t === "center" || t === "right" || t === "space-between" || t === "space-around" || t === "space-evenly" || t === "start" || t === "end" ? t === "left" ? r === "ltr" ? "start" : "end" : t === "right" ? r === "ltr" ? "end" : "start" : t : e;
}
function Qp() {
}
function ii(t) {
  return {
    subscribe(r) {
      return r(t), Qp;
    }
  };
}
function vl(t, r, e, n) {
  const o = [], i = n.prototypes;
  return i && t.forEach((s, a) => {
    if (s === null || typeof s != "object")
      return;
    const l = r.preparePrototypeVariables(n.data_element_name || "it", s, a);
    let u, c;
    for (let f = 0; f < i.length; ++f) {
      const d = i[f];
      if (!d.div)
        continue;
      if (d.selector === void 0) {
        u = d.div, c = e.getJsonWithVars(d.id, l);
        break;
      }
      if (e.getJsonWithVars(d.selector, l)) {
        u = d.div, c = e.getJsonWithVars(d.id, l);
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
const hs = {
  "container-separator": "appkit-container-separator",
  "container-separator__item": "appkit-container-separator__item",
  "container-separator__shape": "appkit-container-separator__shape"
};
function xp(t, r) {
  let e = 0, n, o = !1;
  return function() {
    const i = Date.now();
    return !e || Math.abs(i - e) > r ? (e = i, n = t.apply(this, arguments)) : (o || (o = !0, setTimeout(() => {
      o = !1, n = t.apply(this, arguments);
    }, r)), n);
  };
}
function $p(t) {
  const r = t.getBoundingClientRect(), e = getComputedStyle(t);
  return {
    top: r.top - parseFloat(e.marginTop),
    right: r.right + parseFloat(e.marginRight),
    bottom: r.bottom + parseFloat(e.marginBottom),
    left: r.left - parseFloat(e.marginLeft)
  };
}
const { window: eg } = Ho;
function Eu(t, r, e) {
  const n = t.slice();
  return n[16] = r[e], n;
}
function ju(t) {
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
      r = Ie("div"), e = Ie("div"), s = dr(), this.h();
    },
    l(f) {
      r = Fe(f, "DIV", { class: !0 });
      var d = ve(r);
      e = Fe(d, "DIV", { class: !0 }), ve(e).forEach(k), s = _r(d), d.forEach(k), this.h();
    },
    h() {
      p(e, "class", hs["container-separator__shape"]), P(e, "width", n), P(e, "height", o), P(e, "border-radius", i), P(
        e,
        "background",
        /*item*/
        t[16].style.background
      ), P(
        e,
        "box-shadow",
        /*item*/
        t[16].style.boxShadow
      ), p(r, "class", hs["container-separator__item"]), P(r, "left", a), P(r, "top", l), P(r, "width", u), P(r, "height", c);
    },
    m(f, d) {
      q(f, r, d), yt(r, e), yt(r, s);
    },
    p(f, d) {
      d & /*separators*/
      2 && n !== (n = `${/*item*/
      f[16].style.width}px`) && P(e, "width", n), d & /*separators*/
      2 && o !== (o = `${/*item*/
      f[16].style.height}px`) && P(e, "height", o), d & /*separators*/
      2 && i !== (i = `${/*item*/
      f[16].style.borderRadius}px`) && P(e, "border-radius", i), d & /*separators*/
      2 && P(
        e,
        "background",
        /*item*/
        f[16].style.background
      ), d & /*separators*/
      2 && P(
        e,
        "box-shadow",
        /*item*/
        f[16].style.boxShadow
      ), d & /*separators*/
      2 && a !== (a = `${/*item*/
      f[16].left}px`) && P(r, "left", a), d & /*separators*/
      2 && l !== (l = `${/*item*/
      f[16].top}px`) && P(r, "top", l), d & /*separators*/
      2 && u !== (u = `${/*item*/
      f[16].width}px`) && P(r, "width", u), d & /*separators*/
      2 && c !== (c = `${/*item*/
      f[16].height}px`) && P(r, "height", c);
    },
    d(f) {
      f && k(r);
    }
  };
}
function tg(t) {
  let r, e, n, o = ar(
    /*separators*/
    t[1]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = ju(Eu(t, o, s));
  return {
    c() {
      r = Ie("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      this.h();
    },
    l(s) {
      r = Fe(s, "DIV", { class: !0 });
      var a = ve(r);
      for (let l = 0; l < i.length; l += 1)
        i[l].l(a);
      a.forEach(k), this.h();
    },
    h() {
      p(r, "class", hs["container-separator"]);
    },
    m(s, a) {
      q(s, r, a);
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, null);
      t[13](r), e || (n = Je(
        eg,
        "resize",
        /*throttledUpdated*/
        t[2]
      ), e = !0);
    },
    p(s, [a]) {
      if (a & /*separators*/
      2) {
        o = ar(
          /*separators*/
          s[1]
        );
        let l;
        for (l = 0; l < o.length; l += 1) {
          const u = Eu(s, o, l);
          i[l] ? i[l].p(u, a) : (i[l] = ju(u), i[l].c(), i[l].m(r, null));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = o.length;
      }
    },
    i: S,
    o: S,
    d(s) {
      s && k(r), un(i, s), t[13](null), e = !1, n();
    }
  };
}
const rg = 10;
function zl(t, r, e, n, o, i) {
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
function Cu(t, r, e, n, o, i) {
  const s = {
    top: Math.min(...e.map((a) => a.top)),
    right: Math.max(...e.map((a) => a.right)),
    bottom: Math.max(...e.map((a) => a.bottom)),
    left: Math.min(...e.map((a) => a.left))
  };
  if (r != null && r.show_at_start) {
    let a, l;
    o === "space-around" || o === "space-evenly" ? (a = i.left - r.style.width, l = i.top - r.style.height) : (a = e[0].left - r.style.width - r.margins.left - r.margins.right, l = e[0].top - r.style.height - r.margins.top - r.margins.bottom), zl(
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
      zl(t, r, e[a], e[a + 1], s, n);
  if (r != null && r.show_at_end) {
    const a = e[e.length - 1];
    let l, u;
    o === "space-around" || o === "space-evenly" ? (l = i.bottom + r.style.height, u = i.right + r.style.width) : (l = a.bottom + r.style.height + r.margins.top + r.margins.bottom, u = a.right + r.style.width + r.margins.left + r.margins.right), zl(
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
function ng(t, r, e) {
  let n, { orientation: o } = r, { separator: i } = r, { lineSeparator: s } = r, { contentHAlign: a } = r, { contentVAlign: l } = r, { direction: u } = r;
  const c = xp(w, rg);
  let f = [], d, g = !1, m = null, h = null;
  function y(R) {
    R.some((B) => {
      var ae;
      const Q = (ae = B.target) == null ? void 0 : ae.classList;
      return !(Q != null && Q.contains(hs["container-separator__shape"])) && !(Q != null && Q.contains(hs["container-separator"]));
    }) && c();
  }
  function w() {
    if (!n)
      return;
    const R = n.getBoundingClientRect(), B = window.getComputedStyle(n), Q = {
      top: R.top + parseFloat(B.paddingTop),
      right: R.right - parseFloat(B.paddingRight),
      bottom: R.bottom - parseFloat(B.paddingBottom),
      left: R.left + parseFloat(B.paddingLeft)
    };
    e(1, f = []);
    let ae = [...n.children].filter((le) => le !== d && le instanceof HTMLElement && !le.classList.contains(xs.outer__border) && getComputedStyle(le).display !== "none"), T = [];
    for (; ae.length; ) {
      const le = [], C = ae.shift();
      le.push(C);
      let N = C.getBoundingClientRect(), z = N.left, O = N.right, oe = N.bottom;
      for (; ae.length; ) {
        let fe = ae[0], ce = fe.getBoundingClientRect();
        if (o === "vertical") {
          if (ce.top < oe)
            break;
        } else if (u === "ltr" ? ce.left < O : ce.right > z)
          break;
        O = Math.max(O, ce.right), z = Math.min(z, ce.left), oe = Math.max(oe, ce.bottom), le.push(fe), ae.shift();
      }
      T.push(le);
    }
    const Y = [];
    T.forEach((le) => {
      const C = le.map((z) => $p(z));
      u === "rtl" && o === "horizontal" && C.reverse(), i && Cu(
        f,
        i,
        C,
        o === "vertical",
        o === "vertical" ? l : a,
        Q
      );
      const N = {
        top: Math.min(...C.map((z) => z.top)),
        right: Math.max(...C.map((z) => z.right)),
        bottom: Math.max(...C.map((z) => z.bottom)),
        left: Math.min(...C.map((z) => z.left))
      };
      Y.push(N);
    }), u === "rtl" && o === "vertical" && Y.reverse(), s && Cu(
      f,
      s,
      Y,
      o === "horizontal",
      o === "vertical" ? a : l,
      Q
    ), f.forEach((le) => {
      le.top -= R.top, le.left -= R.left;
    });
  }
  ao(() => {
    e(9, g = !0);
  }), cn(() => {
    e(9, g = !1);
  });
  function F(R) {
    Pr[R ? "unshift" : "push"](() => {
      d = R, e(0, d);
    });
  }
  return t.$$set = (R) => {
    "orientation" in R && e(3, o = R.orientation), "separator" in R && e(4, i = R.separator), "lineSeparator" in R && e(5, s = R.lineSeparator), "contentHAlign" in R && e(6, a = R.contentHAlign), "contentVAlign" in R && e(7, l = R.contentVAlign), "direction" in R && e(8, u = R.direction);
  }, t.$$.update = () => {
    t.$$.dirty & /*node*/
    1 && e(12, n = (d == null ? void 0 : d.parentElement) || null), t.$$.dirty & /*mounted, parentElement, mutationObserver, resizeObserver*/
    7680 && (g && n || m || h) && (m && (m.disconnect(), e(10, m = null)), h && (h.disconnect(), e(11, h = null)), g && n && (typeof MutationObserver < "u" && (e(10, m = new MutationObserver(y)), m.observe(n, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    })), typeof ResizeObserver < "u" && (e(11, h = new ResizeObserver(c)), h.observe(n)))), t.$$.dirty & /*mounted, parentElement*/
    4608 && g && n && c();
  }, [
    d,
    f,
    c,
    o,
    i,
    s,
    a,
    l,
    u,
    g,
    m,
    h,
    n,
    F
  ];
}
class og extends Hr {
  constructor(r) {
    super(), Rr(this, r, ng, tg, Tr, {
      orientation: 3,
      separator: 4,
      lineSeparator: 5,
      contentHAlign: 6,
      contentVAlign: 7,
      direction: 8
    });
  }
}
const { Boolean: ig } = Ho;
function Au(t, r, e) {
  const n = t.slice();
  return n[63] = r[e], n;
}
function Su(t) {
  let r, e;
  return r = new no({
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
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Vu(t) {
  let r, e;
  return r = new og({
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
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function sg(t) {
  let r, e, n, o = ar(
    /*items*/
    t[9]
  ), i = [];
  for (let l = 0; l < o.length; l += 1)
    i[l] = Su(Au(t, o, l));
  const s = (l) => $(i[l], 1, 1, () => {
    i[l] = null;
  });
  let a = (
    /*separator*/
    (t[5] || /*lineSeparator*/
    t[6]) && Vu(t)
  );
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      r = dr(), a && a.c(), e = We();
    },
    l(l) {
      for (let u = 0; u < i.length; u += 1)
        i[u].l(l);
      r = _r(l), a && a.l(l), e = We();
    },
    m(l, u) {
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(l, u);
      q(l, r, u), a && a.m(l, u), q(l, e, u), n = !0;
    },
    p(l, u) {
      if (u[0] & /*items, childLayoutParams*/
      768) {
        o = ar(
          /*items*/
          l[9]
        );
        let c;
        for (c = 0; c < o.length; c += 1) {
          const f = Au(l, o, c);
          i[c] ? (i[c].p(f, u), G(i[c], 1)) : (i[c] = Su(f), i[c].c(), G(i[c], 1), i[c].m(r.parentNode, r));
        }
        for (mr(), c = o.length; c < i.length; c += 1)
          s(c);
        br();
      }
      /*separator*/
      l[5] || /*lineSeparator*/
      l[6] ? a ? (a.p(l, u), u[0] & /*separator, lineSeparator*/
      96 && G(a, 1)) : (a = Vu(l), a.c(), G(a, 1), a.m(e.parentNode, e)) : a && (mr(), $(a, 1, 1, () => {
        a = null;
      }), br());
    },
    i(l) {
      if (!n) {
        for (let u = 0; u < o.length; u += 1)
          G(i[u]);
        G(a), n = !0;
      }
    },
    o(l) {
      i = i.filter(ig);
      for (let u = 0; u < i.length; u += 1)
        $(i[u]);
      $(a), n = !1;
    },
    d(l) {
      l && (k(r), k(e)), un(i, l), a && a.d(l);
    }
  };
}
function lg(t) {
  let r, e;
  return r = new jn({
    props: {
      cls: wt(
        "container",
        yu,
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
      $$slots: { default: [sg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = wt(
        "container",
        yu,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
const ag = {
  start: "start",
  center: "center",
  end: "end",
  // 'space-*' values doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, ug = {
  start: "start",
  center: "center",
  end: "end",
  baseline: "baseline",
  // 'space-*' doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, Iu = ["rounded_rectangle", "circle"];
function cg(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g, m, h, y, w, F, R, B, Q, ae, T, Y, le, C, N, z = S, O = () => (z(), z = I(w, (pt) => e(45, N = pt)), w), oe, fe = S, ce = () => (fe(), fe = I(R, (pt) => e(46, oe = pt)), R), Ae, _e = S, Te = () => (_e(), _e = I(F, (pt) => e(47, Ae = pt)), F), ee, Me = S, Xe = () => (Me(), Me = I(y, (pt) => e(48, ee = pt)), y), Qe, Ee = S, it = () => (Ee(), Ee = I(h, (pt) => e(49, Qe = pt)), h), we, Se = S, he = () => (Se(), Se = I(m, (pt) => e(50, we = pt)), m), x, de = S, se = () => (de(), de = I(f, (pt) => e(51, x = pt)), f), De, tt = S, xe = () => (tt(), tt = I(c, (pt) => e(52, De = pt)), c), ne, Ze = S, Re = () => (Ze(), Ze = I(g, (pt) => e(53, ne = pt)), g), ut, ct = S, ft = () => (ct(), ct = I(d, (pt) => e(54, ut = pt)), d), Et, st, Lt = S, _t = () => (Lt(), Lt = I(u, (pt) => e(55, st = pt)), u), pe, ge = S, gt = () => (ge(), ge = I(l, (pt) => e(56, pe = pt)), l), Ce, M = S, Ct = () => (M(), M = I(et, (pt) => e(57, Ce = pt)), et), ht, Dt = S, Nt = () => (Dt(), Dt = I(a, (pt) => e(58, ht = pt)), a), nt, X = S, It = () => (X(), X = I(s, (pt) => e(59, nt = pt)), s), zt, er = S, Xt = () => (er(), er = I(i, (pt) => e(60, zt = pt)), i);
  t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => Me()), t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => Se()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => Ze()), t.$$.on_destroy.push(() => ct()), t.$$.on_destroy.push(() => Lt()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => Dt()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => er());
  let { componentContext: me } = r, { layoutParams: Ue = void 0 } = r;
  const mt = zr(en), ye = mt.direction;
  En(t, ye, (pt) => e(10, Et = pt));
  let et, Le = "vertical", or = "start", Oe = "start", kt = null, Tt = null, Mt, hr = {}, Ne = 0, jt = 0, lr = !1;
  function rr() {
    e(2, Le = "vertical"), e(3, or = "start"), e(4, Oe = "start"), e(7, Mt = void 0), e(32, Ne = 0), e(33, jt = 0), e(34, lr = !1);
  }
  function xt(pt) {
    e(0, me = e(35, Sr = {
      ...me,
      json: {
        ...me.json,
        items: pt.filter(Uo)
      }
    }));
  }
  let yr = [], Sr, Bt = {}, jr, J;
  return cn(() => {
    yr.forEach((pt) => {
      pt.destroy();
    });
  }), t.$$set = (pt) => {
    "componentContext" in pt && e(0, me = pt.componentContext), "layoutParams" in pt && e(1, Ue = pt.layoutParams);
  }, t.$$.update = () => {
    var pt, Kt, At, Cr, Dr, wr, Mr, qr, ir, ot, St;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(44, n = me.origJson), t.$$.dirty[1] & /*origJson*/
    8192 && n && rr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(43, o = me.json.items), t.$$.dirty[0] & /*componentContext*/
    1 && Xt(e(29, i = typeof ((pt = me.json.item_builder) == null ? void 0 : pt.data) == "string" ? me.getDerivedFromVars((Kt = me.json.item_builder) == null ? void 0 : Kt.data, void 0, !0) : (At = me.json.item_builder) != null && At.data ? ii(me.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && It(e(28, s = me.getDerivedFromVars(me.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && Nt(e(27, a = me.getDerivedFromVars(me.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && gt(e(26, l = me.getDerivedFromVars(me.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(25, u = me.getDerivedFromVars(me.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(24, c = me.getDerivedFromVars(me.json.separator))), t.$$.dirty[0] & /*componentContext*/
    1 && se(e(23, f = me.getDerivedFromVars(me.json.line_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(22, d = me.getDerivedFromVars(me.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Re(e(21, g = me.getDerivedFromVars(me.json.line_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(20, m = me.getDerivedFromVars(me.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && it(e(19, h = me.getDerivedFromVars(me.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(18, y = me.getDerivedFromVars(me.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && O(e(17, w = me.getDerivedFromVars(me.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(16, F = me.getDerivedFromVars(me.json.max_width))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(15, R = me.getDerivedFromVars(me.json.responsive))), t.$$.dirty[0] & /*componentContext, items*/
    513 | t.$$.dirty[1] & /*$jsonItemBuilderData, jsonItems, prevContext*/
    536875024) {
      let $t = [];
      if (me.json.item_builder && Array.isArray(zt) && Array.isArray(me.json.item_builder.prototypes)) {
        const te = me.json.item_builder;
        $t = vl(zt, mt, me, te);
      } else
        $t = (Array.isArray(o) && o || []).map((te, vt) => ({
          div: te,
          key: te.id || { index: vt, data: te }
        }));
      const Qt = new Set(yr), pr = /* @__PURE__ */ new Map();
      let dt = !1;
      Sr === me && yr.forEach((te) => {
        te.key && (typeof te.key == "string" && pr.has(te.key) ? dt || (dt = !0, me.logError(K(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: te.key } }))) : pr.set(
          typeof te.key == "string" ? te.key : te.key.index,
          te
        ));
      }), e(9, yr = $t.map((te, vt) => {
        let sr = !dt && pr.get(te.id), vr = pr.get(vt);
        return !sr && !te.id && typeof te.key == "object" && typeof (vr == null ? void 0 : vr.key) == "object" && Qi(vr.key.data, te.key.data) && (sr = vr), sr ? (Qt.delete(sr), sr) : me.produceChildContext(te.div, {
          path: vt,
          variables: te.vars,
          id: te.id,
          key: te.key
        });
      }));
      for (const te of Qt)
        te.destroy();
      e(35, Sr = me);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    513) {
      let $t = [];
      yr.forEach((Qt) => {
        $t.push(me.getDerivedFromVars({
          width: Qt.json.width,
          height: Qt.json.height
        }));
      }), Ct(e(11, et = Zi($t, (Qt) => [...Qt])));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonOrientation*/
    268435456 && e(2, Le = Jp(nt, Le)), t.$$.dirty[1] & /*$jsonLayoutMode*/
    134217728 && e(38, B = ht === "wrap"), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(42, Q = Le !== "horizontal" && !B), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(41, ae = Le !== "vertical" && !B), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(40, T = Le === "overlap" && !Ce.every(Up)), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(39, Y = Le === "overlap" && !Ce.every(Gp)), t.$$.dirty[0] & /*contentVAlign*/
    8 | t.$$.dirty[1] & /*$jsonContentVAlign*/
    33554432 && e(3, or = Xp(pe, or)), t.$$.dirty[0] & /*$direction, contentHAlign*/
    1040 | t.$$.dirty[1] & /*$jsonContentHAlign*/
    16777216 && e(4, Oe = Zp(st, Et, Oe)), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    8388610 && e(32, Ne = ln(ut, Ne)), t.$$.dirty[1] & /*$jsonLineSpacing, lineSpacing*/
    4194308 && e(33, jt = ln(ne, jt)), t.$$.dirty[0] & /*orientation, separator, componentContext*/
    37 | t.$$.dirty[1] & /*$jsonSeparator, itemSpacing*/
    2097154)
      if (De != null && De.style && Le !== "overlap" && ku()) {
        const $t = po(De.style, Iu, (kt == null ? void 0 : kt.style) || null);
        $t ? (e(5, kt = {
          show_at_start: !!((Cr = De.show_at_start) != null && Cr),
          show_at_end: !!((Dr = De.show_at_end) != null && Dr),
          show_between: !!((wr = De.show_between) == null || wr),
          style: $t,
          margins: wu(De.margins)
        }), kt.show_between && Ne && me.logError(K(new Error("item_spacing will be ignored due to the 'separator' property."), { level: "warn" }))) : e(5, kt = null);
      } else
        e(5, kt = null);
    if (t.$$.dirty[0] & /*orientation, lineSeparator, componentContext*/
    69 | t.$$.dirty[1] & /*$jsonLineSeparator, lineSpacing*/
    1048580)
      if (x != null && x.style && Le !== "overlap" && ku()) {
        const $t = po(x.style, Iu, (Tt == null ? void 0 : Tt.style) || null);
        $t ? (e(6, Tt = {
          show_at_start: !!((Mr = x.show_at_start) != null && Mr),
          show_at_end: !!((qr = x.show_at_end) != null && qr),
          show_between: !!((ir = x.show_between) == null || ir),
          style: $t,
          margins: wu(x.margins)
        }), Tt.show_between && jt && me.logError(K(new Error("line_spacing will be ignored due to the 'line_separator' property."), { level: "warn" }))) : e(6, Tt = null);
      } else
        e(6, Tt = null);
    if (t.$$.dirty[0] & /*separator, lineSeparator, orientation*/
    100 && e(14, le = kt || Tt ? Hp(Le, kt, Tt) : null), t.$$.dirty[1] & /*$jsonAspect*/
    524288) {
      const $t = we == null ? void 0 : we.ratio;
      $t && Kn($t) ? e(7, Mt = $t) : e(7, Mt = void 0);
    }
    if (t.$$.dirty[0] & /*orientation, contentHAlign, contentVAlign, layoutParams, aspect, childLayoutParams*/
    414 | t.$$.dirty[1] & /*wrap, $jsonWidth, $jsonHeight, supportWidthWrapContent, supportHeightWrapContent, stretchWidth, stretchHeight*/
    397184) {
      let $t = {};
      Le === "overlap" && ($t.overlapParent = !0), Le !== "horizontal" && ($t.parentHAlign = B ? "start" : ag[Oe]), Le !== "vertical" && ($t.parentVAlign = B ? "start" : ug[or]);
      const Qt = (Qe == null ? void 0 : Qe.type) === "wrap_content" || (Qe == null ? void 0 : Qe.type) === "match_parent" && (Ue == null ? void 0 : Ue.parentHorizontalWrapContent), pr = !ee || ee.type === "wrap_content" || ee.type === "match_parent" && (Ue == null ? void 0 : Ue.parentVerticalWrapContent);
      !Q && Qt && ($t.parentHorizontalWrapContent = !0), !Mt && !ae && pr && ($t.parentVerticalWrapContent = !0), Qt || ($t.parentContainerKnownWidth = !0), pr || ($t.parentContainerKnownHeight = !0), $t.stretchWidth = T, $t.stretchHeight = Y, Le === "horizontal" && ($t.parentContainerOrientation = "horizontal"), Le === "vertical" && ($t.parentContainerOrientation = "vertical"), B && ($t.parentContainerWrap = !0), e(8, hr = oi($t, hr));
    }
    if (t.$$.dirty[1] & /*$jsonMaxWidth*/
    65536 && e(34, lr = (Ae == null ? void 0 : Ae.type) === "fixed"), t.$$.dirty[0] & /*orientation, contentVAlign, contentHAlign*/
    28 | t.$$.dirty[1] & /*$jsonResponsive, wrap, $jsonClipToBounds, isFixedContainer, responsiveMobileHeight, responsiveTabletHeight*/
    49384) {
      let $t, Qt;
      if (e(36, jr = void 0), e(37, J = void 0), oe) {
        const pr = oe == null ? void 0 : oe.mobile, dt = oe == null ? void 0 : oe.tablet;
        if (pr != null && pr.orientation && ($t = String(pr.orientation)), dt != null && dt.orientation && (Qt = String(dt.orientation)), ((ot = pr == null ? void 0 : pr.height) == null ? void 0 : ot.type) === "fixed" && pr.height.value !== void 0) {
          const te = ln(pr.height.value, 0);
          e(36, jr = te > 0 ? te : void 0);
        }
        if (((St = dt == null ? void 0 : dt.height) == null ? void 0 : St.type) === "fixed" && dt.height.value !== void 0) {
          const te = ln(dt.height.value, 0);
          e(37, J = te > 0 ? te : void 0);
        }
      }
      e(12, Bt = {
        orientation: Le,
        valign: or,
        halign: Oe,
        wrap: B,
        overflow: N === !1 || N === 0 ? "visible" : void 0,
        "fixed-container": lr,
        "responsive-mobile-vertical": $t === "vertical",
        "responsive-mobile-horizontal": $t === "horizontal",
        "responsive-tablet-vertical": Qt === "vertical",
        "responsive-tablet-horizontal": Qt === "horizontal",
        "responsive-mobile-has-height": jr !== void 0,
        "responsive-tablet-has-height": J !== void 0
      });
    }
    t.$$.dirty[0] & /*separator, lineSeparator, orientation, aspect*/
    228 | t.$$.dirty[1] & /*itemSpacing, lineSpacing, responsiveMobileHeight, responsiveTabletHeight*/
    102 && e(13, C = {
      gap: kt || Tt || Ne || jt ? Wp({
        orientation: Le,
        separator: kt,
        lineSeparator: Tt,
        itemSpacing: Ne,
        lineSpacing: jt
      }) : void 0,
      "aspect-ratio": Mt,
      "--responsive-mobile-height": jr !== void 0 ? ue(jr) : void 0,
      "--responsive-tablet-height": J !== void 0 ? ue(J) : void 0
    });
  }, [
    me,
    Ue,
    Le,
    or,
    Oe,
    kt,
    Tt,
    Mt,
    hr,
    yr,
    Et,
    et,
    Bt,
    C,
    le,
    R,
    F,
    w,
    y,
    h,
    m,
    g,
    d,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    ye,
    xt,
    Ne,
    jt,
    lr,
    Sr,
    jr,
    J,
    B,
    Y,
    T,
    ae,
    Q,
    o,
    n,
    N,
    oe,
    Ae,
    ee,
    Qe,
    we,
    x,
    De,
    ne,
    ut,
    st,
    pe,
    Ce,
    ht,
    nt,
    zt
  ];
}
class fg extends Hr {
  constructor(r) {
    super(), Rr(this, r, cg, lg, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const dg = "appkit-separator", _g = "appkit-separator_orientation_horizontal", hg = "appkit-separator_orientation_vertical", pg = "appkit-separator__inner", Kl = {
  separator: dg,
  separator_orientation_horizontal: _g,
  separator_orientation_vertical: hg,
  separator__inner: pg
};
function Aa(t, r) {
  return t === "vertical" || t === "horizontal" ? t : r;
}
function Du(t) {
  let r, e;
  return {
    c() {
      r = Ie("span"), this.h();
    },
    l(n) {
      r = Fe(n, "SPAN", { class: !0, style: !0 }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "class", Kl.separator__inner), p(r, "style", e = nr(
        /*style*/
        t[3]
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o & /*style*/
      8 && e !== (e = nr(
        /*style*/
        n[3]
      )) && p(r, "style", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function gg(t) {
  let r, e = (
    /*hasContent*/
    t[4] && Du(t)
  );
  return {
    c() {
      e && e.c(), r = We();
    },
    l(n) {
      e && e.l(n), r = We();
    },
    m(n, o) {
      e && e.m(n, o), q(n, r, o);
    },
    p(n, o) {
      /*hasContent*/
      n[4] ? e ? e.p(n, o) : (e = Du(n), e.c(), e.m(r.parentNode, r)) : e && (e.d(1), e = null);
    },
    d(n) {
      n && k(r), e && e.d(n);
    }
  };
}
function mg(t) {
  let r, e;
  return r = new jn({
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
      $$slots: { default: [gg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function bg(t, r, e) {
  let n, o, i, s, a, l, u, c, f = S, d = () => (f(), f = I(o, (F) => e(11, c = F)), o);
  t.$$.on_destroy.push(() => f());
  let { componentContext: g } = r, { layoutParams: m = void 0 } = r, h = "horizontal", y = "rgba(0,0,0,0.08)";
  function w() {
    e(6, h = "horizontal"), e(7, y = "rgba(0,0,0,0.08)");
  }
  return t.$$set = (F) => {
    "componentContext" in F && e(0, g = F.componentContext), "layoutParams" in F && e(1, m = F.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(10, n = g.origJson), t.$$.dirty & /*origJson*/
    1024 && n && w(), t.$$.dirty & /*componentContext*/
    1 && d(e(5, o = g.getDerivedFromVars(g.json.delimiter_style))), t.$$.dirty & /*$jsonDelimiterStyle, orientation*/
    2112 && e(6, h = Aa(c == null ? void 0 : c.orientation, h)), t.$$.dirty & /*$jsonDelimiterStyle*/
    2048 && e(4, i = !(c != null && c.color && (c.color === "transparent" || c.color.length === 9 && c.color.indexOf("#00") === 0))), t.$$.dirty & /*$jsonDelimiterStyle, background*/
    2176 && e(7, y = gr(c == null ? void 0 : c.color, 1, y)), t.$$.dirty & /*orientation*/
    64 && e(9, s = h === "horizontal" ? "100%" : ue(1)), t.$$.dirty & /*orientation*/
    64 && e(8, a = h === "horizontal" ? ue(1) : "100%"), t.$$.dirty & /*background, width, height*/
    896 && e(3, l = { background: y, width: s, height: a }), t.$$.dirty & /*orientation*/
    64 && e(2, u = { orientation: h });
  }, [
    g,
    m,
    u,
    l,
    i,
    o,
    h,
    y,
    a,
    s,
    n,
    c
  ];
}
class yg extends Hr {
  constructor(r) {
    super(), Rr(this, r, bg, mg, Tr, { componentContext: 0, layoutParams: 1 });
  }
}
const wg = "appkit-image", vg = "appkit-image__image", kg = "appkit-image_error", Eg = "appkit-image_aspect", jg = "appkit-image_loaded", Xl = {
  image: wg,
  "image_is-width-content": "appkit-image_is-width-content",
  "image_is-height-content": "appkit-image_is-height-content",
  image__image: vg,
  image_error: kg,
  "image_is-rtl-mirror": "appkit-image_is-rtl-mirror",
  image_aspect: Eg,
  "image_aspect-content": "appkit-image_aspect-content",
  image_loaded: jg,
  "divkit-image-appearance": "appkit-divkit-image-appearance",
  "image_before-appearance": "appkit-image_before-appearance"
};
function Cg(t, r, e) {
  const n = t.content_alignment_horizontal, o = t.content_alignment_vertical;
  return n && n !== "left" && n !== "center" && n !== "right" && n !== "start" && n !== "end" || o && o !== "top" && o !== "center" && o !== "bottom" ? e : Dd({
    content_alignment_horizontal: n,
    content_alignment_vertical: o
  }, r);
}
function Nd(t) {
  return t.startsWith("data:") ? Gl(t) : `data:image/jpg;base64,${Gl(t)}`;
}
function Ag(t, r, e) {
  let { componentContext: n } = r;
  zr(en);
  function o() {
  }
  return ao(() => {
  }), hl(o), cn(() => {
  }), t.$$set = (i) => {
    "componentContext" in i && e(0, n = i.componentContext);
  }, [n];
}
class Rn extends Hr {
  constructor(r) {
    super(), Rr(this, r, Ag, null, Tr, { componentContext: 0 });
  }
}
function Sg(t) {
  let r, e;
  return r = new Rn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Vg(t) {
  let r, e;
  return r = new jn({
    props: {
      cls: wt(
        "image",
        Xl,
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
          Ig,
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
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = wt(
        "image",
        Xl,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Fu(t) {
  let r, e, n, o, i, s, a, l;
  return {
    c() {
      r = Ie("img"), this.h();
    },
    l(u) {
      r = Fe(u, "IMG", {
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
      p(r, "class", Xl.image__image), eo(r.src, e = /*state*/
      t[2] === cs ? Zl : (
        /*imageUrl*/
        t[3]
      )) || p(r, "src", e), p(r, "loading", n = /*$jsonPreloadRequired*/
      t[31] || /*highPrority*/
      t[10] ? "eager" : "lazy"), p(r, "decoding", o = /*highPrority*/
      t[10] ? "sync" : "async"), p(r, "style", i = nr({
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
      })), p(
        r,
        "alt",
        /*alt*/
        t[13]
      ), p(r, "aria-hidden", s = /*alt*/
      t[13] ? null : "true");
    },
    m(u, c) {
      q(u, r, c), t[70](r), a || (l = [
        Je(
          r,
          "load",
          /*onLoad*/
          t[33]
        ),
        Je(
          r,
          "error",
          /*onError*/
          t[34]
        )
      ], a = !0);
    },
    p(u, c) {
      c[0] & /*state, imageUrl*/
      12 && !eo(r.src, e = /*state*/
      u[2] === cs ? Zl : (
        /*imageUrl*/
        u[3]
      )) && p(r, "src", e), c[0] & /*highPrority*/
      1024 | c[1] & /*$jsonPreloadRequired*/
      1 && n !== (n = /*$jsonPreloadRequired*/
      u[31] || /*highPrority*/
      u[10] ? "eager" : "lazy") && p(r, "loading", n), c[0] & /*highPrority*/
      1024 && o !== (o = /*highPrority*/
      u[10] ? "sync" : "async") && p(r, "decoding", o), c[0] & /*style, isWidthContent, isHeightContent*/
      2240 | c[2] & /*widthMin, widthMax, heightMin, heightMax*/
      122880 && i !== (i = nr({
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
      })) && p(r, "style", i), c[0] & /*alt*/
      8192 && p(
        r,
        "alt",
        /*alt*/
        u[13]
      ), c[0] & /*alt*/
      8192 && s !== (s = /*alt*/
      u[13] ? null : "true") && p(r, "aria-hidden", s);
    },
    d(u) {
      u && k(r), t[70](null), a = !1, Ur(l);
    }
  };
}
function Ig(t) {
  let r = (
    /*svgFilterId*/
    t[5]
  ), e, n = Fu(t);
  return {
    c() {
      n.c(), e = We();
    },
    l(o) {
      n.l(o), e = We();
    },
    m(o, i) {
      n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      i[0] & /*svgFilterId*/
      32 && Tr(r, r = /*svgFilterId*/
      o[5]) ? (n.d(1), n = Fu(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && k(e), n.d(o);
    }
  };
}
function Dg(t) {
  let r, e, n, o;
  const i = [Vg, Sg], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[9] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(l) {
      e && e.l(l), n = We();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (mr(), $(s[c], 1, 1, () => {
        s[c] = null;
      }), br()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
const Zl = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Fg = "empty://", Tg = "rgba(0,0,0,0.08)", mi = 0, Ol = 1, cs = 2, Tu = /\.gif($|\?)/i, Mg = "data:image/gif", Mu = 'A Gif image was used for the "Image" component. The animation will be played on the web platform, but it does not match the behavior of other platforms.';
function Pg(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g, m, h, y, w, F, R, B, Q, ae, T, Y, le, C, N = S, z = () => (N(), N = I(F, (dt) => e(53, C = dt)), F), O, oe, fe = S, ce = () => (fe(), fe = I(w, (dt) => e(55, oe = dt)), w), Ae, _e = S, Te = () => (_e(), _e = I(y, (dt) => e(56, Ae = dt)), y), ee, Me = S, Xe = () => (Me(), Me = I(h, (dt) => e(57, ee = dt)), h), Qe, Ee = S, it = () => (Ee(), Ee = I(d, (dt) => e(58, Qe = dt)), d), we, Se = S, he = () => (Se(), Se = I(m, (dt) => e(59, we = dt)), m), x, de = S, se = () => (de(), de = I(g, (dt) => e(60, x = dt)), g), De, tt = S, xe = () => (tt(), tt = I(f, (dt) => e(61, De = dt)), f), ne, Ze = S, Re = () => (Ze(), Ze = I(c, (dt) => e(62, ne = dt)), c), ut, ct = S, ft = () => (ct(), ct = I(u, (dt) => e(63, ut = dt)), u), Et, st = S, Lt = () => (st(), st = I(l, (dt) => e(64, Et = dt)), l), _t, pe = S, ge = () => (pe(), pe = I(a, (dt) => e(65, _t = dt)), a), gt, Ce = S, M = () => (Ce(), Ce = I(s, (dt) => e(66, gt = dt)), s), Ct, ht = S, Dt = () => (ht(), ht = I(B, (dt) => e(67, Ct = dt)), B), Nt, nt = S, X = () => (nt(), nt = I(o, (dt) => e(68, Nt = dt)), o), It, zt = S, er = () => (zt(), zt = I(i, (dt) => e(69, It = dt)), i), Xt, me = S, Ue = () => (me(), me = I(R, (dt) => e(31, Xt = dt)), R);
  t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => Me()), t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => Se()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => Ze()), t.$$.on_destroy.push(() => ct()), t.$$.on_destroy.push(() => st()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => Ce()), t.$$.on_destroy.push(() => ht()), t.$$.on_destroy.push(() => nt()), t.$$.on_destroy.push(() => zt()), t.$$.on_destroy.push(() => me());
  let { componentContext: mt } = r, { layoutParams: ye = void 0 } = r;
  const et = zr(en), Le = et.direction;
  En(t, Le, (dt) => e(54, O = dt));
  let or, Oe = mi, kt = !1, Tt = Tg, Mt = !1, hr, Ne = "", jt = "none", lr = "50% 50%", rr = !1, xt = "center", yr, Sr, Bt = "source_in", jr = "", J = "", pt = 0, Kt = 0, At = 0, Cr = "", Dr = "", wr = !1, Mr = !1, qr = !1;
  function ir() {
    e(4, yr = void 0), e(40, rr = !1), e(38, jt = "none"), e(39, lr = "50% 50%"), e(43, Bt = "source_in"), e(51, Mr = !1), e(10, qr = !1);
  }
  function ot(dt) {
    e(2, Oe = mi);
  }
  function St(dt) {
    e(39, lr = Cg(dt, O, lr));
  }
  function $t() {
    Oe === mi && e(2, Oe = Ol);
  }
  function Qt() {
    Oe === mi && e(2, Oe = cs);
  }
  cn(() => {
    et.removeSvgFilter(Sr, Bt);
  });
  function pr(dt) {
    Pr[dt ? "unshift" : "push"](() => {
      or = dt, e(8, or);
    });
  }
  return t.$$set = (dt) => {
    "componentContext" in dt && e(0, mt = dt.componentContext), "layoutParams" in dt && e(1, ye = dt.layoutParams);
  }, t.$$.update = () => {
    var dt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(52, n = mt.origJson), t.$$.dirty[1] & /*origJson*/
    2097152 && n && ir(), t.$$.dirty[0] & /*componentContext*/
    1 && X(e(30, o = mt.getDerivedFromVars(mt.json.image_url))), t.$$.dirty[0] & /*componentContext*/
    1 && er(e(29, i = mt.getDerivedFromVars(mt.json.gif_url))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(28, s = mt.getDerivedFromVars(mt.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(27, a = mt.getDerivedFromVars(mt.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && Lt(e(26, l = mt.getDerivedFromVars(mt.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(25, u = mt.getDerivedFromVars(mt.json.preview_url))), t.$$.dirty[0] & /*componentContext*/
    1 && Re(e(24, c = mt.getDerivedFromVars(mt.json.placeholder_color))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(23, f = mt.getDerivedFromVars(mt.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && it(e(22, d = mt.getDerivedFromVars({
      content_alignment_horizontal: mt.json.content_alignment_horizontal,
      content_alignment_vertical: mt.json.content_alignment_vertical
    }))), t.$$.dirty[0] & /*componentContext*/
    1 && se(e(21, g = mt.getDerivedFromVars(mt.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(20, m = mt.getDerivedFromVars(mt.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(19, h = mt.getDerivedFromVars(mt.json.tint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(18, y = mt.getDerivedFromVars(mt.json.tint_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(17, w = mt.getDerivedFromVars(mt.json.appearance_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && z(e(16, F = mt.getDerivedFromVars(mt.json.filters))), t.$$.dirty[0] & /*componentContext*/
    1 && Ue(e(15, R = mt.getDerivedFromVars(mt.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(14, B = mt.getDerivedFromVars(mt.json.high_priority_preview_show))), t.$$.dirty[0] & /*componentContext, imageUrl*/
    9 | t.$$.dirty[1] & /*isEmpty*/
    16 | t.$$.dirty[2] & /*$jsonGifUrl, $jsonImageUrl*/
    192) {
      const te = mt.json.type === "gif";
      let vt = te ? It : Nt;
      e(35, kt = vt === Fg), kt && (vt = Zl), e(3, hr = vt), !te && hr && Tu.test(hr) && mt.logError(K(new Error(Mu), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*imageUrl*/
    8 && ot(), t.$$.dirty[1] & /*highPriorityPreview*/
    1048576 | t.$$.dirty[2] & /*$jsonHighPriorityPreviewShow*/
    32 && e(51, Mr = pn(Ct, Mr)), t.$$.dirty[0] & /*imageUrl, componentContext*/
    9 && (hr ? e(9, Mt = !1) : (e(9, Mt = !0), mt.logError(K(new Error(`Missing "${mt.json.type === "gif" ? "gif_url" : "image_url"}" for "${mt.json.type}"`))))), t.$$.dirty[2] & /*$jsonWidth*/
    16 && e(7, Q = (gt == null ? void 0 : gt.type) === "wrap_content"), t.$$.dirty[2] & /*$jsonHeight*/
    8 && e(6, ae = (_t == null ? void 0 : _t.type) === "wrap_content"), t.$$.dirty[0] & /*componentContext, state*/
    5 | t.$$.dirty[1] & /*isEmpty, highPriorityPreview*/
    1048592 | t.$$.dirty[2] & /*$jsonPreview, $jsonPreviewUrl*/
    6) {
      const te = mt.json.type === "gif", vt = Et, sr = ut;
      (Oe === mi || Oe === cs || kt) && (vt || sr) ? (e(37, Ne = `url("${sr || Nd(vt || "")}")`), e(10, qr = Mr)) : (e(37, Ne = ""), e(10, qr = !1)), !te && (sr && Tu.test(sr) || vt && vt.startsWith(Mg)) && mt.logError(K(new Error(Mu), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*state*/
    4 | t.$$.dirty[1] & /*isEmpty, placeholderColor*/
    48 | t.$$.dirty[2] & /*$jsonPlaceholderColor*/
    1 && (Oe === mi || Oe === cs || kt ? e(36, Tt = gr(ne, 1, Tt)) : e(36, Tt = "")), t.$$.dirty[1] & /*$jsonScale, scale*/
    1073741952 && e(38, jt = Id(De) || jt), t.$$.dirty[1] & /*$jsonPosition*/
    134217728 && St(Qe), t.$$.dirty[1] & /*$jsonA11y*/
    536870912 && e(13, T = (x == null ? void 0 : x.description) || ""), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAspect, aspectContent, $jsonPosition*/
    402653696) {
      e(41, xt = "center");
      const te = we == null ? void 0 : we.ratio;
      te && Kn(te) ? (e(4, yr = te), e(40, rr = ((dt = mt.json.width) == null ? void 0 : dt.type) === "wrap_content"), rr && (Qe.content_alignment_vertical === "top" ? e(41, xt = "top") : Qe.content_alignment_vertical === "bottom" && e(41, xt = "bottom"))) : e(4, yr = void 0);
    }
    if (t.$$.dirty[1] & /*$jsonTintColor, $jsonTintMode, tintMode, tintColor*/
    100669440) {
      const te = ee, vt = te ? gr(te) : void 0, sr = Md(Ae, Bt);
      (vt !== Sr || sr !== Bt) && (et.removeSvgFilter(Sr, Bt), e(5, jr = vt ? et.addSvgFilter(vt, sr) : ""), e(42, Sr = vt), e(43, Bt = sr));
    }
    if (t.$$.dirty[1] & /*$jsonAppearanceAnimation*/
    16777216 && oe && oe.type === "fade") {
      const te = oe;
      e(44, J = Fd(te.interpolator, "ease_in_out").replace(/_/g, "-")), e(47, At = ln(te.duration, 300)), e(46, Kt = ln(te.start_delay, 0)), e(45, pt = ln(te.alpha, 0));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonFilters, $direction*/
    12582912) {
      let te = "", vt = "";
      Array.isArray(C) && C.length && (te = Td(C, mt.logError)), te && (vt = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"), e(48, Cr = te), e(49, Dr = vt), e(50, wr = O === "rtl" && Array.isArray(C) && C.some((sr) => sr.type === "rtl_mirror"));
    }
    t.$$.dirty[0] & /*aspectRatio, isWidthContent, isHeightContent, state*/
    212 | t.$$.dirty[1] & /*aspectContent, aspectContentVAlign, animationInterpolator, isRTLMirror*/
    534016 && e(12, Y = {
      aspect: yr !== void 0,
      "aspect-content": rr,
      "aspect-valign": xt !== "center" ? xt : void 0,
      "is-width-content": Q,
      "is-height-content": ae,
      loaded: Oe === Ol,
      "before-appearance": !!J && Oe === mi,
      "is-rtl-mirror": wr
    }), t.$$.dirty[0] & /*aspectRatio, state, svgFilterId*/
    52 | t.$$.dirty[1] & /*backgroundImage, placeholderColor, scale, filterClipPath, position, filter, animationInterpolator, animationFadeStart, animationDelay, animationDuration*/
    516576 && e(11, le = {
      // Image preview shows, if loading of original image is failed
      "background-image": Ne,
      "background-color": Ne ? void 0 : Tt,
      "background-size": yh(jt),
      "clip-path": Dr || void 0,
      "object-fit": jt,
      "object-position": lr,
      "aspect-ratio": yr,
      filter: [
        Oe === Ol && jr ? `url(#${jr})` : "",
        Cr
      ].filter(Boolean).join(" "),
      "--divkit-appearance-interpolator": J || void 0,
      "--divkit-appearance-fade-start": J ? pt : void 0,
      "--divkit-appearance-delay": J ? `${Kt}ms` : void 0,
      "--divkit-appearance-duration": J ? `${At}ms` : void 0
    });
  }, [
    mt,
    ye,
    Oe,
    hr,
    yr,
    jr,
    ae,
    Q,
    or,
    Mt,
    qr,
    le,
    Y,
    T,
    B,
    R,
    F,
    w,
    y,
    h,
    m,
    g,
    d,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    Xt,
    Le,
    $t,
    Qt,
    kt,
    Tt,
    Ne,
    jt,
    lr,
    rr,
    xt,
    Sr,
    Bt,
    J,
    pt,
    Kt,
    At,
    Cr,
    Dr,
    wr,
    Mr,
    n,
    C,
    O,
    oe,
    Ae,
    ee,
    Qe,
    we,
    x,
    De,
    ne,
    ut,
    Et,
    _t,
    gt,
    Ct,
    Nt,
    It,
    pr
  ];
}
class Pu extends Hr {
  constructor(r) {
    super(), Rr(this, r, Pg, Dg, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Ng = "appkit-grid", zg = "appkit-grid_halign_start", Og = "appkit-grid_halign_center", Bg = "appkit-grid_halign_end", Lg = "appkit-grid_valign_start", Rg = "appkit-grid_valign_center", Hg = "appkit-grid_valign_end", Nu = {
  grid: Ng,
  grid_halign_start: zg,
  grid_halign_center: Og,
  grid_halign_end: Bg,
  grid_valign_start: Lg,
  grid_valign_center: Rg,
  grid_valign_end: Hg
};
function zu(t) {
  return t > 0 && t < 1;
}
function Ou(t) {
  return String(Math.ceil(t * 1e3) / 1e3);
}
function Bu(t, r, e, n) {
  if (t.some(zu)) {
    const l = Math.max(...t.filter(zu).map((u) => 1 / u));
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
    i && !e[l] ? a[l] = `minmax(${ue(i * t[l] / s)},${Ou(t[l])}fr)` : o || !e[l] && t[l] ? a[l] = `${Ou(t[l])}fr` : a[l] = "auto";
  return a.join(" ");
}
function Lu(t, r, e) {
  const n = t.slice();
  return n[33] = r[e], n;
}
function Wg(t) {
  let r, e;
  return r = new Rn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Ug(t) {
  let r, e;
  return r = new jn({
    props: {
      cls: wt(
        "grid",
        Nu,
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
      $$slots: { default: [Gg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = wt(
        "grid",
        Nu,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Ru(t) {
  let r, e;
  return r = new no({
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
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Gg(t) {
  let r, e, n = ar(
    /*resultItems*/
    t[5]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Ru(Lu(t, n, s));
  const i = (s) => $(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = We();
    },
    l(s) {
      for (let a = 0; a < o.length; a += 1)
        o[a].l(s);
      r = We();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      q(s, r, a), e = !0;
    },
    p(s, a) {
      if (a[0] & /*resultItems*/
      32) {
        n = ar(
          /*resultItems*/
          s[5]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = Lu(s, n, l);
          o[l] ? (o[l].p(u, a), G(o[l], 1)) : (o[l] = Ru(u), o[l].c(), G(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (mr(), l = n.length; l < o.length; l += 1)
          i(l);
        br();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          G(o[a]);
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
      s && k(r), un(o, s);
    }
  };
}
function Jg(t) {
  let r, e, n, o;
  const i = [Ug, Wg], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(l) {
      e && e.l(l), n = We();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (mr(), $(s[c], 1, 1, () => {
        s[c] = null;
      }), br()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function qg(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d = S, g = () => (d(), d = I(a, (he) => e(27, f = he)), a), m, h = S, y = () => (h(), h = I(s, (he) => e(28, m = he)), s), w, F = S, R = () => (F(), F = I(O, (he) => e(29, w = he)), O), B, Q = S, ae = () => (Q(), Q = I(i, (he) => e(30, B = he)), i);
  t.$$.on_destroy.push(() => d()), t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => Q());
  let { componentContext: T } = r, { layoutParams: Y = void 0 } = r;
  const C = zr(en).direction;
  En(t, C, (he) => e(26, c = he));
  let N = !1, z = 0, O, oe, fe = [], ce = [], Ae = [], _e = [], Te = [], ee = [], Me = 0, Xe = "start", Qe = "start", Ee = [], it;
  function we() {
    e(3, N = !1), e(13, z = 0), e(21, Xe = "start"), e(22, Qe = "start");
  }
  function Se(he) {
    e(0, T = e(23, it = {
      ...T,
      json: {
        ...T.json,
        items: he.filter(Uo)
      }
    }));
  }
  return cn(() => {
    Ee.forEach((he) => {
      he.destroy();
    });
  }), t.$$set = (he) => {
    "componentContext" in he && e(0, T = he.componentContext), "layoutParams" in he && e(1, Y = he.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(25, n = T.origJson), t.$$.dirty[0] & /*origJson*/
    33554432 && n && we(), t.$$.dirty[0] & /*componentContext*/
    1 && e(24, o = Array.isArray(T.json.items) && T.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(10, i = T.getDerivedFromVars(T.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && y(e(9, s = T.getDerivedFromVars(T.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && g(e(8, a = T.getDerivedFromVars(T.json.content_alignment_horizontal))), t.$$.dirty[0] & /*$jsonColumnCount, columnCount, componentContext*/
    1073750017 && (e(13, z = Yn(B, z)), z < 1 ? (e(3, N = !0), T.logError(K(new Error("Incorrect column_count for grid")))) : e(3, N = !1)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonItems*/
    25165829) {
      const he = new Set(Ee), x = /* @__PURE__ */ new Map();
      it === T && Ee.forEach((de) => {
        x.set(de.json, de);
      }), e(2, Ee = o.map((de, se) => {
        const De = x.get(de);
        return De ? (he.delete(De), De) : T.produceChildContext(de, { path: se });
      }));
      for (const de of he)
        de.destroy();
      e(23, it = T);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    5) {
      let he = [];
      Ee.forEach((x) => {
        he.push(T.getDerivedFromVars({
          rowSpan: x.json.row_span,
          columnSpan: x.json.column_span,
          width: x.json.width,
          height: x.json.height
        }));
      }), R(e(4, O = Zi(he, (x) => [...x])));
    }
    if (t.$$.dirty[0] & /*items, $childStore, columnCount, columnsWeight, rowsWeight, columnsMinWidth, rowsMinHeight*/
    537124868) {
      const he = {};
      let x = 0, de = 0;
      e(14, fe = []), e(15, ce = []), e(16, Ae = []), e(17, _e = []), e(18, Te = []), e(19, ee = []);
      let se = 0;
      e(5, oe = Ee.map((De, tt) => {
        var st, Lt, _t, pe;
        const xe = w[tt], ne = Math.min(z, Number(xe.columnSpan) || 1), Ze = Number(xe.rowSpan) || 1, Re = ((st = xe.width) == null ? void 0 : st.type) === "match_parent" ? Number(xe.width.weight || 1) / ne : 0, ut = ((Lt = xe.height) == null ? void 0 : Lt.type) === "match_parent" ? Number(xe.height.weight || 1) / Ze : 0, ct = ((_t = xe.width) == null ? void 0 : _t.type) === "fixed" && xe.width.value ? Number(xe.width.value) / ne : 0, ft = ((pe = xe.height) == null ? void 0 : pe.type) === "fixed" && xe.height.value ? Number(xe.height.value) / Ze : 0;
        for (; ; ) {
          let ge = !0;
          e: for (let gt = x; gt < x + ne; ++gt)
            for (let Ce = de; Ce < de + Ze; ++Ce)
              if (he[gt + "_" + Ce]) {
                ge = !1;
                break e;
              }
          if (ge)
            break;
          ++x, x > z - ne && (x = 0, ++de);
        }
        const Et = { x, y: de, colSpan: ne, rowSpan: Ze };
        for (let ge = x; ge < x + ne; ++ge)
          for (let gt = de; gt < de + Ze; ++gt)
            he[ge + "_" + gt] = !0, (!fe[ge] || fe[ge] < Re) && e(14, fe[ge] = Re, fe), (!ce[gt] || ce[gt] < ut) && e(15, ce[gt] = ut, ce), ne === 1 && (!Ae[ge] || Ae[ge] < ct) && e(16, Ae[ge] = ct, Ae), Ze === 1 && (!_e[gt] || _e[gt] < ft) && e(17, _e[gt] = ft, _e), ne === 1 && ct && e(18, Te[ge] = ct, Te), Ze === 1 && ft && e(19, ee[ge] = ft, ee);
        return se = Math.max(se, de + Ze), {
          componentContext: De,
          layoutParams: { gridArea: Et }
        };
      })), e(20, Me = Math.max(de + 1, se));
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    270532608 && e(21, Xe = wl(m, Xe)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    205520896 && e(22, Qe = yl(f, c, Qe)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    6291456 && e(7, l = {
      valign: Xe,
      halign: Qe
    }), t.$$.dirty[0] & /*columnsWeight, columnsMinWidth, columnsWidth, columnCount, rowsWeight, rowsMinHeight, rowsHeight, rowCount*/
    2088960 && e(6, u = {
      "grid-template-columns": Bu(fe, Ae, Te, z),
      "grid-template-rows": Bu(ce, _e, ee, Me)
    });
  }, [
    T,
    Y,
    Ee,
    N,
    O,
    oe,
    u,
    l,
    a,
    s,
    i,
    C,
    Se,
    z,
    fe,
    ce,
    Ae,
    _e,
    Te,
    ee,
    Me,
    Xe,
    Qe,
    it,
    o,
    n,
    c,
    f,
    m,
    w,
    B
  ];
}
class Yg extends Hr {
  constructor(r) {
    super(), Rr(this, r, qg, Jg, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Kg = "appkit-outer_width_content", Xg = "appkit-outer_height_content", Zg = "appkit-gallery", Qg = "appkit-gallery__scroller", xg = "appkit-gallery_scrollbar_none", $g = "appkit-gallery_orientation_horizontal", em = "appkit-gallery_orientation_vertical", tm = "appkit-gallery__items", rm = "appkit-gallery__arrow", nm = "appkit-gallery__gap", mo = {
  outer_width_content: Kg,
  outer_height_content: Xg,
  gallery: Zg,
  gallery__scroller: Qg,
  gallery_scrollbar_none: xg,
  gallery_orientation_horizontal: $g,
  gallery_orientation_vertical: em,
  "gallery_scroll-snap": "appkit-gallery_scroll-snap",
  "gallery__items-grid": "appkit-gallery__items-grid",
  gallery__items: tm,
  gallery__arrow: rm,
  "gallery__arrow-icon-path": "appkit-gallery__arrow-icon-path",
  gallery__gap: nm
}, om = "appkit-arrow", im = "appkit-arrow__icon", sm = "appkit-arrow_left", lm = "appkit-arrow_right", wo = {
  arrow: om,
  arrow__icon: im,
  arrow_left: sm,
  arrow_right: lm
};
function am(t, r) {
  return t === "start" || t === "center" || t === "end" ? t : r;
}
function um(t) {
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
const { Boolean: zd, window: cm } = Ho;
function Hu(t, r, e) {
  const n = t.slice();
  return n[86] = r[e], n[87] = r, n[88] = e, n;
}
function Wu(t, r, e) {
  const n = t.slice();
  return n[89] = r[e], n;
}
function Uu(t) {
  let r;
  return {
    c() {
      r = Ie("div"), this.h();
    },
    l(e) {
      r = Fe(e, "DIV", { class: !0 }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "class", mo.gallery__gap), P(
        r,
        "width",
        /*orientation*/
        t[4] === "horizontal" ? (
          /*gridGap*/
          t[12]
        ) : void 0
      ), P(
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
      4112 && P(
        r,
        "width",
        /*orientation*/
        e[4] === "horizontal" ? (
          /*gridGap*/
          e[12]
        ) : void 0
      ), n[0] & /*orientation, gridGap*/
      4112 && P(
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
function Gu(t) {
  let r, e, n, o = (
    /*item*/
    t[89].hasGapBefore && Uu(t)
  );
  return e = new no({
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
      o && o.c(), r = dr(), Gt(e.$$.fragment);
    },
    l(i) {
      o && o.l(i), r = _r(i), Jt(e.$$.fragment, i);
    },
    m(i, s) {
      o && o.m(i, s), q(i, r, s), Wt(e, i, s), n = !0;
    },
    p(i, s) {
      /*item*/
      i[89].hasGapBefore ? o ? o.p(i, s) : (o = Uu(i), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
      const a = {};
      s[0] & /*itemsGrid*/
      262144 && (a.componentContext = /*item*/
      i[89].componentContext), s[0] & /*childLayoutParams*/
      64 && (a.layoutParams = /*childLayoutParams*/
      i[6]), e.$set(a);
    },
    i(i) {
      n || (G(e.$$.fragment, i), n = !0);
    },
    o(i) {
      $(e.$$.fragment, i), n = !1;
    },
    d(i) {
      i && k(r), o && o.d(i), Ut(e, i);
    }
  };
}
function Ju(t) {
  let r, e, n, o, i, s, a = (
    /*rowIndex*/
    t[88]
  ), l, u = ar(
    /*itemsRow*/
    t[86]
  ), c = [];
  for (let m = 0; m < u.length; m += 1)
    c[m] = Gu(Wu(t, u, m));
  const f = (m) => $(c[m], 1, 1, () => {
    c[m] = null;
  }), d = () => (
    /*div1_binding*/
    t[71](r, a)
  ), g = () => (
    /*div1_binding*/
    t[71](null, a)
  );
  return {
    c() {
      r = Ie("div");
      for (let m = 0; m < c.length; m += 1)
        c[m].c();
      e = dr(), n = Ie("div"), i = dr(), this.h();
    },
    l(m) {
      r = Fe(m, "DIV", { class: !0, style: !0 });
      var h = ve(r);
      for (let y = 0; y < c.length; y += 1)
        c[y].l(h);
      e = _r(h), n = Fe(h, "DIV", { class: !0, style: !0 }), ve(n).forEach(k), i = _r(h), h.forEach(k), this.h();
    },
    h() {
      p(n, "class", mo.gallery__gap), p(n, "style", o = nr(
        /*lastPaddingSize*/
        t[13]
      )), p(r, "class", mo.gallery__items), p(r, "style", s = nr(
        /*columnStyle*/
        t[16]
      ));
    },
    m(m, h) {
      q(m, r, h);
      for (let y = 0; y < c.length; y += 1)
        c[y] && c[y].m(r, null);
      yt(r, e), yt(r, n), yt(r, i), d(), l = !0;
    },
    p(m, h) {
      if (t = m, h[0] & /*itemsGrid, childLayoutParams, orientation, gridGap*/
      266320) {
        u = ar(
          /*itemsRow*/
          t[86]
        );
        let y;
        for (y = 0; y < u.length; y += 1) {
          const w = Wu(t, u, y);
          c[y] ? (c[y].p(w, h), G(c[y], 1)) : (c[y] = Gu(w), c[y].c(), G(c[y], 1), c[y].m(r, e));
        }
        for (mr(), y = u.length; y < c.length; y += 1)
          f(y);
        br();
      }
      (!l || h[0] & /*lastPaddingSize*/
      8192 && o !== (o = nr(
        /*lastPaddingSize*/
        t[13]
      ))) && p(n, "style", o), (!l || h[0] & /*columnStyle*/
      65536 && s !== (s = nr(
        /*columnStyle*/
        t[16]
      ))) && p(r, "style", s), a !== /*rowIndex*/
      t[88] && (g(), a = /*rowIndex*/
      t[88], d());
    },
    i(m) {
      if (!l) {
        for (let h = 0; h < u.length; h += 1)
          G(c[h]);
        l = !0;
      }
    },
    o(m) {
      c = c.filter(zd);
      for (let h = 0; h < c.length; h += 1)
        $(c[h]);
      l = !1;
    },
    d(m) {
      m && k(r), un(c, m), g();
    }
  };
}
function qu(t) {
  let r, e, n = (
    /*hasScrollLeft*/
    t[10] && /*shouldCheckArrows*/
    t[8] && Yu(t)
  ), o = (
    /*hasScrollRight*/
    t[11] && /*shouldCheckArrows*/
    t[8] && Ku(t)
  );
  return {
    c() {
      n && n.c(), r = dr(), o && o.c(), e = We();
    },
    l(i) {
      n && n.l(i), r = _r(i), o && o.l(i), e = We();
    },
    m(i, s) {
      n && n.m(i, s), q(i, r, s), o && o.m(i, s), q(i, e, s);
    },
    p(i, s) {
      /*hasScrollLeft*/
      i[10] && /*shouldCheckArrows*/
      i[8] ? n ? n.p(i, s) : (n = Yu(i), n.c(), n.m(r.parentNode, r)) : n && (n.d(1), n = null), /*hasScrollRight*/
      i[11] && /*shouldCheckArrows*/
      i[8] ? o ? o.p(i, s) : (o = Ku(i), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null);
    },
    d(i) {
      i && (k(r), k(e)), n && n.d(i), o && o.d(i);
    }
  };
}
function Yu(t) {
  let r, e, n, o = !/*leftClass*/
  t[32] && fm();
  return {
    c() {
      r = Ie("div"), o && o.c(), this.h();
    },
    l(i) {
      r = Fe(i, "DIV", { class: !0 });
      var s = ve(r);
      o && o.l(s), s.forEach(k), this.h();
    },
    h() {
      p(
        r,
        "class",
        /*leftClass*/
        t[32] || `${mo.gallery__arrow} ${wo.arrow} ${wo.arrow_left}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = Je(
        r,
        "click",
        /*click_handler*/
        t[74]
      ), e = !0);
    },
    p: S,
    d(i) {
      i && k(r), o && o.d(), e = !1, n();
    }
  };
}
function fm(t) {
  let r, e;
  return {
    c() {
      r = Zr("svg"), e = Zr("path"), this.h();
    },
    l(n) {
      r = sn(n, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0
      });
      var o = ve(r);
      e = sn(o, "path", { class: !0, d: !0 }), ve(e).forEach(k), o.forEach(k), this.h();
    },
    h() {
      p(e, "class", mo["gallery__arrow-icon-path"]), p(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), p(r, "class", wo.arrow__icon), p(r, "xmlns", "http://www.w3.org/2000/svg"), p(r, "width", "32"), p(r, "height", "32"), p(r, "viewBox", "0 0 32 32"), p(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), yt(r, e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function Ku(t) {
  let r, e, n, o = !/*rightClass*/
  t[33] && dm();
  return {
    c() {
      r = Ie("div"), o && o.c(), this.h();
    },
    l(i) {
      r = Fe(i, "DIV", { class: !0 });
      var s = ve(r);
      o && o.l(s), s.forEach(k), this.h();
    },
    h() {
      p(
        r,
        "class",
        /*rightClass*/
        t[33] || `${mo.gallery__arrow} ${wo.arrow} ${wo.arrow_right}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = Je(
        r,
        "click",
        /*click_handler_1*/
        t[75]
      ), e = !0);
    },
    p: S,
    d(i) {
      i && k(r), o && o.d(), e = !1, n();
    }
  };
}
function dm(t) {
  let r, e;
  return {
    c() {
      r = Zr("svg"), e = Zr("path"), this.h();
    },
    l(n) {
      r = sn(n, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0
      });
      var o = ve(r);
      e = sn(o, "path", { class: !0, d: !0 }), ve(e).forEach(k), o.forEach(k), this.h();
    },
    h() {
      p(e, "class", mo["gallery__arrow-icon-path"]), p(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), p(r, "class", wo.arrow__icon), p(r, "xmlns", "http://www.w3.org/2000/svg"), p(r, "width", "32"), p(r, "height", "32"), p(r, "viewBox", "0 0 32 32"), p(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), yt(r, e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function _m(t) {
  let r, e, n, o, i, s, a, l, u, c, f = ar(
    /*itemsGrid*/
    t[18]
  ), d = [];
  for (let h = 0; h < f.length; h += 1)
    d[h] = Ju(Hu(t, f, h));
  const g = (h) => $(d[h], 1, 1, () => {
    d[h] = null;
  });
  let m = (
    /*orientation*/
    t[4] === "horizontal" && qu(t)
  );
  return {
    c() {
      r = Ie("div"), e = Ie("div");
      for (let h = 0; h < d.length; h += 1)
        d[h].c();
      s = dr(), m && m.c(), a = We(), this.h();
    },
    l(h) {
      r = Fe(h, "DIV", { class: !0, style: !0 });
      var y = ve(r);
      e = Fe(y, "DIV", { class: !0, style: !0 });
      var w = ve(e);
      for (let F = 0; F < d.length; F += 1)
        d[F].l(w);
      w.forEach(k), y.forEach(k), s = _r(h), m && m.l(h), a = We(), this.h();
    },
    h() {
      p(e, "class", mo["gallery__items-grid"]), p(e, "style", n = nr(
        /*gridStyle*/
        t[17]
      )), p(r, "class", o = mo.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? Ir["root_restrict-scroll"] : "")), p(r, "style", i = nr(
        /*scrollerStyle*/
        t[5]
      ));
    },
    m(h, y) {
      q(h, r, y), yt(r, e);
      for (let w = 0; w < d.length; w += 1)
        d[w] && d[w].m(e, null);
      t[72](e), t[73](r), q(h, s, y), m && m.m(h, y), q(h, a, y), l = !0, u || (c = Je(r, "scroll", function() {
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
      }), u = !0);
    },
    p(h, y) {
      if (t = h, y[0] & /*columnStyle, galleryItemsWrappers, lastPaddingSize, itemsGrid, childLayoutParams, orientation, gridGap*/
      340560) {
        f = ar(
          /*itemsGrid*/
          t[18]
        );
        let w;
        for (w = 0; w < f.length; w += 1) {
          const F = Hu(t, f, w);
          d[w] ? (d[w].p(F, y), G(d[w], 1)) : (d[w] = Ju(F), d[w].c(), G(d[w], 1), d[w].m(e, null));
        }
        for (mr(), w = f.length; w < d.length; w += 1)
          g(w);
        br();
      }
      (!l || y[0] & /*gridStyle*/
      131072 && n !== (n = nr(
        /*gridStyle*/
        t[17]
      ))) && p(e, "style", n), (!l || y[0] & /*$jsonRestrictParentScroll*/
      1073741824 && o !== (o = mo.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? Ir["root_restrict-scroll"] : ""))) && p(r, "class", o), (!l || y[0] & /*scrollerStyle*/
      32 && i !== (i = nr(
        /*scrollerStyle*/
        t[5]
      ))) && p(r, "style", i), /*orientation*/
      t[4] === "horizontal" ? m ? m.p(t, y) : (m = qu(t), m.c(), m.m(a.parentNode, a)) : m && (m.d(1), m = null);
    },
    i(h) {
      if (!l) {
        for (let y = 0; y < f.length; y += 1)
          G(d[y]);
        l = !0;
      }
    },
    o(h) {
      d = d.filter(zd);
      for (let y = 0; y < d.length; y += 1)
        $(d[y]);
      l = !1;
    },
    d(h) {
      h && (k(r), k(s), k(a)), un(d, h), t[72](null), t[73](null), m && m.d(h), u = !1, c();
    }
  };
}
function hm(t) {
  let r, e, n, o;
  return r = new jn({
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
      $$slots: { default: [_m] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(i) {
      Jt(r.$$.fragment, i);
    },
    m(i, s) {
      Wt(r, i, s), e = !0, n || (o = Je(cm, "resize", function() {
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
      e || (G(r.$$.fragment, i), e = !0);
    },
    o(i) {
      $(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Ut(r, i), n = !1, o();
    }
  };
}
function pm(t, r, e) {
  let n = 0, o = [], i = [];
  for (let s = 0; s < t.length; ++s)
    o[n] || (o[n] = []), o[n].push({
      index: s,
      hasGapBefore: i[n] && r[s].visibility !== "gone",
      componentContext: t[s]
    }), !i[n] && r[s].visibility !== "gone" && (i[n] = !0), ++n >= e && (n = 0);
  return o;
}
function gm(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g, m, h, y, w, F, R, B, Q, ae, T, Y, le = S, C = () => (le(), le = I(h, (te) => e(59, Y = te)), h), N, z = S, O = () => (z(), z = I(m, (te) => e(60, N = te)), m), oe, fe = S, ce = () => (fe(), fe = I(d, (te) => e(61, oe = te)), d), Ae, _e = S, Te = () => (_e(), _e = I(Tt, (te) => e(62, Ae = te)), Tt), ee, Me = S, Xe = () => (Me(), Me = I(f, (te) => e(63, ee = te)), f), Qe, Ee = S, it = () => (Ee(), Ee = I(c, (te) => e(64, Qe = te)), c), we, Se = S, he = () => (Se(), Se = I(u, (te) => e(65, we = te)), u), x, de = S, se = () => (de(), de = I(l, (te) => e(66, x = te)), l), De, tt = S, xe = () => (tt(), tt = I(a, (te) => e(67, De = te)), a), ne, Ze, Re = S, ut = () => (Re(), Re = I(i, (te) => e(69, Ze = te)), i), ct, ft = S, Et = () => (ft(), ft = I(s, (te) => e(70, ct = te)), s), st, Lt = S, _t = () => (Lt(), Lt = I(g, (te) => e(30, st = te)), g);
  t.$$.on_destroy.push(() => le()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => Me()), t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => Se()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => ft()), t.$$.on_destroy.push(() => Lt());
  let { componentContext: pe } = r, { layoutParams: ge = void 0 } = r;
  const gt = zr(en), Ce = gt.direction;
  En(t, Ce, (te) => e(58, T = te));
  let M, Ct = [], ht = !1, Dt = !1, Nt = null, nt, X = !1;
  const It = gt.getCustomization("galleryLeftClass"), zt = gt.getCustomization("galleryRightClass");
  let er, Xt = 1, me = "horizontal", Ue = "start", mt, ye = 8, et, Le, or = "", Oe, kt = [], Tt, Mt = {}, hr = !1, Ne = {}, jt = 0;
  function lr() {
    e(42, Xt = 1), e(4, me = "horizontal"), e(43, Ue = "start"), e(44, ye = 8), e(47, or = "");
  }
  let rr = null, xt = null;
  function yr() {
    var sr, vr;
    const te = Yn(ct, Xt), vt = pe.json.responsive;
    if (!vt || typeof vt != "object") {
      e(42, Xt = te);
      return;
    }
    rr != null && rr.matches && ((sr = vt.mobile) != null && sr.column_count) ? e(42, Xt = vt.mobile.column_count) : xt != null && xt.matches && ((vr = vt.tablet) != null && vr.column_count) ? e(42, Xt = vt.tablet.column_count) : e(42, Xt = te);
  }
  function Sr(te) {
    e(0, pe = e(53, J = {
      ...pe,
      json: {
        ...pe.json,
        items: te.filter(Uo)
      }
    }));
  }
  const Bt = gt.isDesktop;
  En(t, Bt, (te) => e(68, ne = te));
  let jr = [], J;
  function pt() {
    if (!M)
      return;
    let te = M.scrollLeft;
    T === "rtl" && (te *= -1);
    const vt = M.scrollWidth, sr = M.offsetWidth;
    T === "ltr" ? (e(10, ht = te > 2), e(11, Dt = te + sr < vt - 2)) : (e(11, Dt = te > 2), e(10, ht = te + sr < vt - 2));
  }
  const Kt = Ca(pt, 50);
  function At(te) {
    M.scroll({
      left: M.scrollLeft + M.offsetWidth * 0.75 * (te === "right" ? 1 : -1),
      behavior: "smooth"
    });
  }
  function Cr() {
    let te = [], vt = Ct[0].children.length;
    for (let sr = 0; sr < vt; sr += 2)
      for (let vr = 0; vr < Xt; ++vr) {
        const ur = Ct[vr].children[sr];
        ur && te.push(ur);
      }
    return te;
  }
  function Dr(te, vt = !0) {
    const vr = me === "horizontal" ? "left" : "top";
    M.scroll({
      [vr]: te,
      behavior: vt ? "smooth" : "instant"
    });
  }
  function wr(te, vt, { animated: sr = !0, extraOffset: vr = 0, overflow: ur = "clamp" } = {}) {
    const E = me === "horizontal", re = E ? "offsetLeft" : "offsetTop";
    vt > te.length - 1 ? vt = ur === "ring" ? Po(vt, te.length) : te.length - 1 : vt < 0 && (vt = ur === "ring" ? Po(vt, te.length) : 0);
    const _ = te[vt];
    if (_) {
      let j;
      if (T === "ltr" || !E)
        j = _[re] + 0.01 - ye / 2;
      else {
        const Pe = M.offsetWidth;
        j = _[re] + _.offsetWidth + 0.01 - ye / 2 - Pe;
      }
      if (vr) {
        j += vr;
        const Pe = E ? M.scrollWidth - M.offsetWidth : M.scrollHeight - M.offsetHeight;
        j > Pe && (ur === "clamp" ? j = Pe : ur === "ring" && (j = Po(j, Pe))), j < 0 && (ur === "clamp" ? j = 0 : ur === "ring" && (j = Po(j, Pe)));
      }
      Dr(j, sr);
    }
  }
  function Mr(te, { overflow: vt = "clamp", animated: sr = !0 } = {}) {
    const vr = me === "horizontal", ur = T === "ltr" || !vr ? 1 : -1, E = vr ? M.scrollLeft : M.scrollTop, re = vr ? M.scrollWidth - M.offsetWidth : M.scrollHeight - M.offsetHeight;
    let _ = E * ur + te;
    _ > re ? vt === "clamp" ? _ = re : vt === "ring" && (_ = Po(_, re)) : _ < 0 && (vt === "clamp" ? _ = 0 : vt === "ring" && (_ = Po(_, re))), Dr(_ * ur, sr);
  }
  function qr(te, vt) {
    return me === "horizontal" ? vt.right > te.left && te.right > vt.left : vt.bottom > te.top && te.bottom > vt.top;
  }
  function ir(te, vt) {
    return me === "horizontal" ? vt.left >= te.left && vt.right <= te.right : vt.top >= te.top && vt.bottom <= te.bottom;
  }
  function ot(te) {
    const vt = Cr(), sr = M.getBoundingClientRect(), vr = vt.findIndex((re) => ir(sr, re.getBoundingClientRect()));
    if (vr !== -1)
      return vr;
    const ur = vt.map((re) => qr(sr, re.getBoundingClientRect())), E = ur.findIndex(Boolean);
    return E !== -1 ? te === "prev" && ur.filter(Boolean).length === 2 ? E + 1 : E : te === "prev" ? 1 : vt.length - 2;
  }
  ao(() => {
    if (e(40, X = !0), pt(), jt) {
      const te = Cr();
      wr(te, jt, { animated: !1 });
    }
  }), cn(() => {
    e(40, X = !1), jr.forEach((te) => {
      te.destroy();
    }), er && !pe.fakeElement && (gt.unregisterInstance(er), e(41, er = void 0)), rr && rr.removeEventListener("change", yr), xt && xt.removeEventListener("change", yr);
  });
  function St(te, vt) {
    Pr[te ? "unshift" : "push"](() => {
      Ct[vt] = te, e(9, Ct);
    });
  }
  function $t(te) {
    Pr[te ? "unshift" : "push"](() => {
      nt = te, e(3, nt);
    });
  }
  function Qt(te) {
    Pr[te ? "unshift" : "push"](() => {
      M = te, e(2, M);
    });
  }
  const pr = () => At("left"), dt = () => At("right");
  return t.$$set = (te) => {
    "componentContext" in te && e(0, pe = te.componentContext), "layoutParams" in te && e(1, ge = te.layoutParams);
  }, t.$$.update = () => {
    var te, vt, sr, vr, ur, E;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(57, n = pe.origJson), t.$$.dirty[1] & /*origJson*/
    67108864 && n && lr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(56, o = Array.isArray(pe.json.items) && pe.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(29, i = typeof ((te = pe.json.item_builder) == null ? void 0 : te.data) == "string" ? pe.getDerivedFromVars((vt = pe.json.item_builder) == null ? void 0 : vt.data, void 0, !0) : (sr = pe.json.item_builder) != null && sr.data ? ii(pe.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && Et(e(28, s = pe.getDerivedFromVars(pe.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(27, a = pe.getDerivedFromVars(pe.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*columns, mobileQuery, tabletQuery*/
    3147776 | t.$$.dirty[2] & /*$jsonColumnCount*/
    256) {
      const re = Yn(ct, Xt), _ = pe.json.responsive;
      _ && typeof _ == "object" && typeof window < "u" ? (rr || (e(51, rr = window.matchMedia("(max-width: 767px)")), e(52, xt = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), rr.addEventListener("change", yr), xt.addEventListener("change", yr)), yr()) : e(42, Xt = re);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && se(e(26, l = pe.getDerivedFromVars(pe.json.cross_content_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(25, u = pe.getDerivedFromVars(pe.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && it(e(24, c = pe.getDerivedFromVars(pe.json.cross_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(23, f = pe.getDerivedFromVars(pe.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(22, d = pe.getDerivedFromVars(pe.json.scroll_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(21, g = pe.getDerivedFromVars(pe.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && O(e(20, m = pe.getDerivedFromVars(pe.json.scrollbar))), t.$$.dirty[0] & /*componentContext*/
    1 && C(e(19, h = pe.getDerivedFromVars(pe.json.default_item))), t.$$.dirty[0] & /*componentContext, items*/
    129 | t.$$.dirty[1] & /*jsonItems, prevContext*/
    37748736 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    128) {
      let re = [];
      if (pe.json.item_builder && Array.isArray(Ze) && Array.isArray(pe.json.item_builder.prototypes)) {
        const He = pe.json.item_builder;
        re = vl(Ze, gt, pe, He);
      } else
        re = (Array.isArray(o) && o || []).map((He, Ot) => ({
          div: He,
          key: He.id || { index: Ot, data: He }
        }));
      const _ = new Set(jr), j = /* @__PURE__ */ new Map();
      let Pe = !1;
      J === pe && jr.forEach((He) => {
        He.key && (typeof He.key == "string" && j.has(He.key) ? Pe || (Pe = !0, pe.logError(K(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: He.key } }))) : j.set(
          typeof He.key == "string" ? He.key : He.key.index,
          He
        ));
      }), e(7, jr = re.map((He, Ot) => {
        let H = !Pe && j.get(He.id), Pt = j.get(Ot);
        return !H && !He.id && typeof He.key == "object" && typeof (Pt == null ? void 0 : Pt.key) == "object" && Qi(Pt.key.data, He.key.data) && (H = Pt), H ? (_.delete(H), H) : pe.produceChildContext(He.div, {
          path: Ot,
          variables: He.vars,
          id: He.id,
          key: He.key
        });
      }));
      for (const He of _)
        He.destroy();
      e(53, J = pe);
    }
    if (t.$$.dirty[1] & /*mounted*/
    512 | t.$$.dirty[2] & /*$isDesktop*/
    64 && e(8, y = ne && X), t.$$.dirty[0] & /*shouldCheckArrows, itemsGridElem*/
    264 | t.$$.dirty[1] & /*resizeObserver*/
    256 && (y ? typeof ResizeObserver < "u" && (e(39, Nt = new ResizeObserver(() => {
      Kt();
    })), Nt.observe(nt)) : Nt && (Nt.disconnect(), e(39, Nt = null))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[2] & /*$jsonOrientation*/
    32 && e(4, me = Aa(De, me)), t.$$.dirty[1] & /*align*/
    4096 | t.$$.dirty[2] & /*$jsonCrossContentAlignment*/
    16 && e(43, Ue = am(x, Ue)), t.$$.dirty[1] & /*itemSpacing*/
    8192 | t.$$.dirty[2] & /*$jsonItemSpacing*/
    8 && (e(44, ye = ln(we, ye)), e(12, mt = ue(ye))), t.$$.dirty[1] & /*itemSpacing, crossSpacing*/
    40960 | t.$$.dirty[2] & /*$jsonCrossSpacing*/
    4 && (e(46, Le = ln(Qe, ye)), e(45, et = ue(Le))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*$direction, padding*/
    134283264 | t.$$.dirty[2] & /*$jsonPaddings*/
    2) {
      e(47, or = ds(ee, T, or));
      const re = me === "horizontal" ? (ur = (vr = ee == null ? void 0 : ee.end) != null ? vr : ee == null ? void 0 : ee[T === "ltr" ? "right" : "left"]) != null ? ur : 0 : (E = ee == null ? void 0 : ee.bottom) != null ? E : 0, _ = ue(re);
      e(13, Oe = {
        width: me === "horizontal" ? _ : "1px",
        height: me === "horizontal" ? "1px" : _,
        "margin-right": me === "horizontal" && T === "ltr" ? "-" + _ : void 0,
        "margin-left": me === "horizontal" && T === "rtl" ? "-" + _ : void 0,
        "margin-bottom": me === "vertical" ? "-" + _ : void 0
      });
    }
    if (t.$$.dirty[0] & /*items, orientation*/
    144) {
      let re = [];
      jr.forEach((_) => {
        const j = me === "horizontal" ? "width" : "height";
        re.push(_.getDerivedFromVars({
          size: _.json[j],
          visibility: _.json.visibility
        }));
      }), Te(e(14, Tt = Zi(re, (_) => [..._])));
    }
    if (t.$$.dirty[0] & /*items*/
    128 | t.$$.dirty[1] & /*columns*/
    2048 | t.$$.dirty[2] & /*$childStore*/
    1 && e(18, w = pm(jr, Ae, Xt)), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*columns, templateSizes*/
    133120 | t.$$.dirty[2] & /*$childStore*/
    1 && (e(48, kt = []), Xt > 1 || Ae.forEach((re, _) => {
      var j;
      re.visibility !== "gone" && (!re.size && me === "horizontal" || ((j = re.size) == null ? void 0 : j.type) === "match_parent" ? kt.push("100%") : kt.push("max-content"), _ + 1 < Ae.length && kt.push("auto"));
    }), kt.push("auto")), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, F = pe.json.fixed_columns === !0), t.$$.dirty[0] & /*orientation, scrollerStyle, childLayoutParams*/
    112 | t.$$.dirty[1] & /*align, $jsonScrollMode, itemSpacing*/
    1073754112) {
      const re = {};
      let _ = {};
      if (e(49, hr = !1), _.treatMatchParentAs100 = !0, me === "horizontal" ? (_.parentVAlign = Ue, _.parentContainerOrientation = "horizontal") : (_.parentHAlign = Ue, _.parentContainerOrientation = "vertical"), oe === "paging") {
        e(49, hr = !0), _.scrollSnap = "start";
        const j = me === "horizontal" ? "scroll-padding-left" : "scroll-padding-top";
        re[j] = ue(ye / 2);
      }
      e(5, Mt = oi(re, Mt)), e(6, Ne = oi(_, Ne));
    }
    t.$$.dirty[0] & /*orientation*/
    16 && e(54, R = me === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*padding, crossGridGap, fixedColumns, columns*/
    16861184 && e(17, B = {
      padding: or,
      "grid-gap": et,
      ...F && Xt > 1 && me === "vertical" ? {
        display: "grid",
        "grid-template-columns": `repeat(${Xt}, 1fr)`
      } : {}
    }), t.$$.dirty[1] & /*gridTemplate, templateSizes*/
    8519680 && e(16, Q = {
      [R]: um(kt)
    }), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*scrollSnap, $jsonScrollbar*/
    537133056 && e(15, ae = {
      orientation: me,
      "scroll-snap": hr,
      scrollbar: N === "auto" ? "auto" : "none"
    }), t.$$.dirty[1] & /*$jsonDefaultItem, defaultItem*/
    268959744 && e(50, jt = ln(Y, jt)), t.$$.dirty[0] & /*componentContext*/
    1 && pe.json && Kt(), t.$$.dirty[0] & /*componentContext, orientation, scroller*/
    21 | t.$$.dirty[1] & /*prevId, $direction*/
    134218752 && pe.json && (er && (gt.unregisterInstance(er), e(41, er = void 0)), pe.id && !pe.fakeElement && (e(41, er = pe.id), gt.registerInstance(er, {
      setCurrentItem(re, _) {
        const j = Cr();
        if (re < 0 || re > j.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        wr(j, re, { animated: _ });
      },
      setPreviousItem(re, _, j) {
        const Pe = ot("prev"), He = Cr();
        let Ot = Pe - re;
        wr(He, Ot, { animated: j, overflow: _ });
      },
      setNextItem(re, _, j) {
        const Pe = me === "horizontal", He = T === "ltr" || !Pe ? 1 : -1, Ot = Pe ? M.scrollLeft * He + M.offsetWidth === M.scrollWidth : M.scrollTop + M.offsetHeight === M.scrollHeight, H = Cr();
        if (Ot && _ === "ring") {
          wr(H, 0, { animated: j });
          return;
        }
        let lt = ot("next") + re;
        wr(H, lt, { animated: j, overflow: _ });
      },
      scrollToStart(re) {
        Dr(0, re);
      },
      scrollToEnd(re) {
        Dr(
          T === "ltr" || me !== "horizontal" ? 1e6 : -1e6,
          re
        );
      },
      scrollToPosition(re, _) {
        Dr(
          T === "ltr" || me !== "horizontal" ? re : -re,
          _
        );
      },
      scrollCombined({ step: re, offset: _, overflow: j, animated: Pe }) {
        if (re) {
          const Ot = ot(re > 0 ? "next" : "prev") + re;
          wr(Cr(), Ot, { animated: Pe, extraOffset: _, overflow: j });
        } else _ && Mr(_, { overflow: j, animated: Pe });
      }
    })));
  }, [
    pe,
    ge,
    M,
    nt,
    me,
    Mt,
    Ne,
    jr,
    y,
    Ct,
    ht,
    Dt,
    mt,
    Oe,
    Tt,
    ae,
    Q,
    B,
    w,
    h,
    m,
    g,
    d,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    st,
    Ce,
    It,
    zt,
    Sr,
    Bt,
    pt,
    Kt,
    At,
    Nt,
    X,
    er,
    Xt,
    Ue,
    ye,
    et,
    Le,
    or,
    kt,
    hr,
    jt,
    rr,
    xt,
    J,
    R,
    F,
    o,
    n,
    T,
    Y,
    N,
    oe,
    Ae,
    ee,
    Qe,
    we,
    x,
    De,
    ne,
    Ze,
    ct,
    St,
    $t,
    Qt,
    pr,
    dt
  ];
}
class mm extends Hr {
  constructor(r) {
    super(), Rr(this, r, gm, hm, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const bm = "appkit-outer", ym = "appkit-tabs", wm = "appkit-tabs__list", vm = "appkit-tabs__item", km = "appkit-tabs__item_selected", Em = "appkit-tabs_animation_fade", jm = "appkit-tabs_animation_none", Cm = "appkit-tabs__item_actionable", Am = "appkit-tabs__panels", Sm = "appkit-tabs__swiper", Vm = "appkit-tabs__swiper_animated", Im = "appkit-tabs__swiper_inited", Dm = "appkit-tabs__panel", Fm = "appkit-tabs__panel_visible", Tm = "appkit-tabs__separator", Mm = "appkit-tabs__delimitier", Sn = {
  outer: bm,
  "root__any-actions": "appkit-root__any-actions",
  tabs: ym,
  tabs__list: wm,
  "tabs__items-bg": "appkit-tabs__items-bg",
  "tabs__items-text": "appkit-tabs__items-text",
  tabs__item: vm,
  tabs__item_selected: km,
  tabs_animation_fade: Em,
  tabs_animation_none: jm,
  tabs__item_actionable: Cm,
  tabs__panels: Am,
  "tabs_own-height": "appkit-tabs_own-height",
  tabs__swiper: Sm,
  tabs__swiper_animated: Vm,
  tabs__swiper_inited: Im,
  tabs__panel: Dm,
  tabs__panel_visible: Fm,
  "tabs_height-parent_yes": "appkit-tabs_height-parent_yes",
  tabs__separator: Tm,
  tabs__delimitier: Mm,
  "tabs__tabs-highlighter": "appkit-tabs__tabs-highlighter"
};
function Pm(t, r) {
  var n, o;
  if (!t || !t.image_url || typeof t.image_url != "string")
    return r;
  const e = {
    url: t.image_url,
    width: 12,
    height: 12
  };
  return ((n = t.width) == null ? void 0 : n.type) === "fixed" && Kn(t.width.value) && (e.width = t.width.value), ((o = t.height) == null ? void 0 : o.type) === "fixed" && Kn(t.height.value) && (e.height = t.height.value), e;
}
const Od = 37, Bd = 39, Ld = 36, Rd = 35;
function Nm(t, r, e, n) {
  const o = [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ];
  for (let i = 0; i < o.length; ++i)
    if (o[i] && !Bn(o[i]))
      return n;
  return Fs(t, r, e);
}
function Xu(t) {
  const r = t.touches[0], e = r.clientX || r.pageX, n = r.clientY || r.pageY;
  return { x: e, y: n };
}
function zm(t) {
  let r, e;
  return r = new no({
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
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Om(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r, { enabled: i } = r;
  const s = Oo(i);
  return wi(Ea, { isEnabled: s }), t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams), "enabled" in a && e(2, i = a.enabled);
  }, t.$$.update = () => {
    t.$$.dirty & /*enabled*/
    4 && s.set(i);
  }, [n, o, i];
}
class Bm extends Hr {
  constructor(r) {
    super(), Rr(this, r, Om, zm, Tr, {
      componentContext: 0,
      layoutParams: 1,
      enabled: 2
    });
  }
}
const { Boolean: Zu, window: Lm } = Ho;
function Qu(t, r, e) {
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
function xu(t, r, e) {
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
function $u(t, r, e) {
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
function Rm(t) {
  let r, e;
  return r = new Rn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Hm(t) {
  let r, e;
  const n = [
    {
      cls: wt(
        "tabs",
        Sn,
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
    $$slots: { default: [Um] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = Io(o, n[i]);
  return r = new jn({ props: o }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(i) {
      Jt(r.$$.fragment, i);
    },
    m(i, s) {
      Wt(r, i, s), e = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams*/
      16777219 | s[1] & /*parentOfItems, replaceItems, devapi*/
      6356992 ? Wo(n, [
        s[0] & /*mods*/
        16777216 && {
          cls: wt(
            "tabs",
            Sn,
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
        2097152 && Ad(
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
      e || (G(r.$$.fragment, i), e = !0);
    },
    o(i) {
      $(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Ut(r, i);
    }
  };
}
function ec(t) {
  let r;
  return {
    c() {
      r = Ie("span"), this.h();
    },
    l(e) {
      r = Fe(e, "SPAN", { class: !0 }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "class", Sn.tabs__delimitier), P(
        r,
        "width",
        /*delimitierStyle*/
        t[15].width ? ue(
          /*delimitierStyle*/
          t[15].width
        ) : void 0
      ), P(
        r,
        "height",
        /*delimitierStyle*/
        t[15].height ? ue(
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
      32768 && P(
        r,
        "width",
        /*delimitierStyle*/
        e[15].width ? ue(
          /*delimitierStyle*/
          e[15].width
        ) : void 0
      ), n[0] & /*delimitierStyle*/
      32768 && P(
        r,
        "height",
        /*delimitierStyle*/
        e[15].height ? ue(
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
function tc(t) {
  let r, e, n = (
    /*item*/
    t[99].title + ""
  ), o, i, s = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && ec(t)
  );
  return {
    c() {
      s && s.c(), r = dr(), e = Ie("span"), o = On(n), this.h();
    },
    l(a) {
      s && s.l(a), r = _r(a), e = Fe(a, "SPAN", { class: !0 });
      var l = ve(e);
      o = Un(l, n), l.forEach(k), this.h();
    },
    h() {
      p(e, "class", i = wt("tabs__item", Sn, {
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
      a[100] > 0 ? s ? s.p(a, l) : (s = ec(a), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null), l[0] & /*$childStore*/
      262144 && n !== (n = /*item*/
      a[99].title + "") && to(o, n), l[0] & /*$childStore, selected*/
      393216 && i !== (i = wt("tabs__item", Sn, {
        selected: (
          /*isSelected*/
          a[104]
        ),
        actionable: !!/*item*/
        a[99].title_click_action
      })) && p(e, "class", i);
    },
    d(a) {
      a && (k(r), k(e)), s && s.d(a);
    }
  };
}
function rc(t) {
  let r, e;
  return {
    c() {
      r = Ie("div"), this.h();
    },
    l(n) {
      r = Fe(n, "DIV", { class: !0, style: !0 }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "class", Sn["tabs__tabs-highlighter"]), p(r, "style", e = nr(
        /*selectedTabStyles*/
        t[36]
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o[1] & /*selectedTabStyles*/
      32 && e !== (e = nr(
        /*selectedTabStyles*/
        n[36]
      )) && p(r, "style", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function nc(t) {
  let r, e;
  return {
    c() {
      r = Ie("img"), this.h();
    },
    l(n) {
      r = Fe(n, "IMG", {
        class: !0,
        alt: !0,
        loading: !0,
        decoding: !0,
        src: !0
      }), this.h();
    },
    h() {
      p(r, "class", Sn.tabs__delimitier), p(r, "alt", ""), p(r, "loading", "lazy"), p(r, "decoding", "async"), eo(r.src, e = /*delimitierStyle*/
      t[15].url) || p(r, "src", e), P(
        r,
        "width",
        /*delimitierStyle*/
        t[15].width ? ue(
          /*delimitierStyle*/
          t[15].width
        ) : void 0
      ), P(
        r,
        "height",
        /*delimitierStyle*/
        t[15].height ? ue(
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
      32768 && !eo(r.src, e = /*delimitierStyle*/
      n[15].url) && p(r, "src", e), o[0] & /*delimitierStyle*/
      32768 && P(
        r,
        "width",
        /*delimitierStyle*/
        n[15].width ? ue(
          /*delimitierStyle*/
          n[15].width
        ) : void 0
      ), o[0] & /*delimitierStyle*/
      32768 && P(
        r,
        "height",
        /*delimitierStyle*/
        n[15].height ? ue(
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
function Wm(t) {
  let r = (
    /*item*/
    t[99].title + ""
  ), e;
  return {
    c() {
      e = On(r);
    },
    l(n) {
      e = Un(n, r);
    },
    m(n, o) {
      q(n, e, o);
    },
    p(n, o) {
      o[0] & /*$childStore*/
      262144 && r !== (r = /*item*/
      n[99].title + "") && to(e, r);
    },
    d(n) {
      n && k(e);
    }
  };
}
function oc(t) {
  let r, e, n, o = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && nc(t)
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
      cls: wt("tabs__item", Sn, {
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
        ].filter($s) : []
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
      $$slots: { default: [Wm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      o && o.c(), r = dr(), Gt(e.$$.fragment);
    },
    l(s) {
      o && o.l(s), r = _r(s), Jt(e.$$.fragment, s);
    },
    m(s, a) {
      o && o.m(s, a), q(s, r, a), Wt(e, s, a), n = !0;
    },
    p(s, a) {
      t = s, /*delimitierStyle*/
      t[15] && /*index*/
      t[100] > 0 ? o ? o.p(t, a) : (o = nc(t), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
      const l = {};
      a[0] & /*componentContext*/
      1 && (l.componentContext = /*componentContext*/
      t[0]), a[0] & /*$childStore, selected*/
      393216 && (l.cls = wt("tabs__item", Sn, {
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
      ].filter($s) : []), a[0] & /*$childStore, selected, componentContext*/
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
      n || (G(e.$$.fragment, s), n = !0);
    },
    o(s) {
      $(e.$$.fragment, s), n = !1;
    },
    d(s) {
      s && k(r), o && o.d(s), Ut(e, s);
    }
  };
}
function ic(t) {
  let r, e;
  return {
    c() {
      r = Ie("div"), this.h();
    },
    l(n) {
      r = Fe(n, "DIV", { class: !0, style: !0 }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "class", Sn.tabs__separator), p(r, "style", e = nr(
        /*separatorStyle*/
        t[38]
      ));
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o[1] & /*separatorStyle*/
      128 && e !== (e = nr(
        /*separatorStyle*/
        n[38]
      )) && p(r, "style", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function sc(t) {
  let r, e;
  return r = new Bm({
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
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function lc(t) {
  let r, e, n, o, i, s, a = (
    /*childComponentContext*/
    t[101] && sc(t)
  );
  return {
    c() {
      r = Ie("div"), a && a.c(), e = dr(), this.h();
    },
    l(l) {
      r = Fe(l, "DIV", {
        class: !0,
        role: !0,
        id: !0,
        "aria-labelledby": !0,
        style: !0
      });
      var u = ve(r);
      a && a.l(u), e = _r(u), u.forEach(k), this.h();
    },
    h() {
      p(r, "class", n = wt("tabs__panel", Sn, {
        visible: (
          /*visiblePanels*/
          t[34][
            /*index*/
            t[100]
          ]
        )
      })), p(r, "role", "tabpanel"), p(r, "id", o = /*instId*/
      t[50] + "-panel-" + /*index*/
      t[100]), p(r, "aria-labelledby", i = /*instId*/
      t[50] + "-tab-" + /*index*/
      t[100]), P(
        r,
        "left",
        /*index*/
        t[100] * 100 + "%"
      );
    },
    m(l, u) {
      q(l, r, u), a && a.m(r, null), yt(r, e), s = !0;
    },
    p(l, u) {
      /*childComponentContext*/
      l[101] ? a ? (a.p(l, u), u[0] & /*$childStore*/
      262144 | u[1] & /*showedPanels*/
      4 && G(a, 1)) : (a = sc(l), a.c(), G(a, 1), a.m(r, e)) : a && (mr(), $(a, 1, 1, () => {
        a = null;
      }), br()), (!s || u[0] & /*$childStore*/
      262144 | u[1] & /*visiblePanels*/
      8 && n !== (n = wt("tabs__panel", Sn, {
        visible: (
          /*visiblePanels*/
          l[34][
            /*index*/
            l[100]
          ]
        )
      }))) && p(r, "class", n), (!s || u[0] & /*$childStore*/
      262144 && o !== (o = /*instId*/
      l[50] + "-panel-" + /*index*/
      l[100])) && p(r, "id", o), (!s || u[0] & /*$childStore*/
      262144 && i !== (i = /*instId*/
      l[50] + "-tab-" + /*index*/
      l[100])) && p(r, "aria-labelledby", i), (!s || u[0] & /*$childStore*/
      262144) && P(
        r,
        "left",
        /*index*/
        l[100] * 100 + "%"
      );
    },
    i(l) {
      s || (G(a), s = !0);
    },
    o(l) {
      $(a), s = !1;
    },
    d(l) {
      l && k(r), a && a.d();
    }
  };
}
function Um(t) {
  let r, e, n, o, i, s, a, l, u, c, f, d, g, m, h, y = ar(
    /*$childStore*/
    t[18]
  ), w = [];
  for (let C = 0; C < y.length; C += 1)
    w[C] = tc($u(t, y, C));
  let F = (
    /*animationType*/
    t[16] === "slide" && /*selectedTabStyles*/
    t[36] && rc(t)
  ), R = ar(
    /*$childStore*/
    t[18]
  ), B = [];
  for (let C = 0; C < R.length; C += 1)
    B[C] = oc(xu(t, R, C));
  const Q = (C) => $(B[C], 1, 1, () => {
    B[C] = null;
  });
  let ae = (
    /*$jsonSeparator*/
    t[20] && ic(t)
  ), T = ar(
    /*$childStore*/
    t[18]
  ), Y = [];
  for (let C = 0; C < T.length; C += 1)
    Y[C] = lc(Qu(t, T, C));
  const le = (C) => $(Y[C], 1, 1, () => {
    Y[C] = null;
  });
  return {
    c() {
      r = Ie("div"), e = Ie("div");
      for (let C = 0; C < w.length; C += 1)
        w[C].c();
      n = dr(), F && F.c(), o = dr(), i = Ie("div");
      for (let C = 0; C < B.length; C += 1)
        B[C].c();
      a = dr(), ae && ae.c(), l = dr(), u = Ie("div"), c = Ie("div");
      for (let C = 0; C < Y.length; C += 1)
        Y[C].c();
      this.h();
    },
    l(C) {
      r = Fe(C, "DIV", { class: !0, role: !0 });
      var N = ve(r);
      e = Fe(N, "DIV", { class: !0, "aria-hidden": !0 });
      var z = ve(e);
      for (let ce = 0; ce < w.length; ce += 1)
        w[ce].l(z);
      n = _r(z), F && F.l(z), z.forEach(k), o = _r(N), i = Fe(N, "DIV", { class: !0 });
      var O = ve(i);
      for (let ce = 0; ce < B.length; ce += 1)
        B[ce].l(O);
      O.forEach(k), N.forEach(k), a = _r(C), ae && ae.l(C), l = _r(C), u = Fe(C, "DIV", { class: !0 });
      var oe = ve(u);
      c = Fe(oe, "DIV", { class: !0 });
      var fe = ve(c);
      for (let ce = 0; ce < Y.length; ce += 1)
        Y[ce].l(fe);
      fe.forEach(k), oe.forEach(k), this.h();
    },
    h() {
      p(e, "class", Sn["tabs__items-bg"]), p(e, "aria-hidden", "true"), p(i, "class", Sn["tabs__items-text"]), p(r, "class", s = Sn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Ir["root_restrict-scroll"] : "")), p(r, "role", "tablist"), P(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? yo(
          /*titlePadding*/
          t[14],
          /*$direction*/
          t[19]
        ) : ""
      ), P(r, "--divkit-tabs-font-size", ue(
        /*tabFontSize*/
        t[4]
      )), P(
        r,
        "--divkit-tabs-paddings",
        /*tabPaddings*/
        t[5]
      ), P(
        r,
        "--divkit-tabs-line-height",
        /*tabLineHeight*/
        t[25]
      ), P(
        r,
        "--divkit-tabs-letter-spacing",
        /*tabLetterSpacing*/
        t[26]
      ), P(
        r,
        "--divkit-tabs-active-font-weight",
        /*tabActiveFontWeight*/
        t[7] || ""
      ), P(
        r,
        "--divkit-tabs-inactive-font-weight",
        /*tabInactiveFontWeight*/
        t[8] || ""
      ), P(
        r,
        "--divkit-tabs-active-font-family",
        /*tabActiveFontFamily*/
        t[27] || ""
      ), P(
        r,
        "--divkit-tabs-inactive-font-family",
        /*tabInactiveFontFamily*/
        t[29] || ""
      ), P(
        r,
        "--divkit-tabs-active-font-variation-settings",
        /*tabActiveFontVariationSettings*/
        t[28] || ""
      ), P(
        r,
        "--divkit-tabs-inactive-font-variation-settings",
        /*tabInactiveFontVariationSettings*/
        t[30] || ""
      ), P(
        r,
        "--divkit-tabs-active-text-color",
        /*tabActiveTextColor*/
        t[9]
      ), P(
        r,
        "--divkit-tabs-inactive-text-color",
        /*tabInactiveTextColor*/
        t[10]
      ), P(
        r,
        "--divkit-tabs-active-background-color",
        /*tabActiveBackground*/
        t[11]
      ), P(
        r,
        "--divkit-tabs-inactive-background-color",
        /*tabInactiveBackground*/
        t[12]
      ), P(
        r,
        "--divkit-tabs-border-radius",
        /*tabBorderRadius*/
        t[6]
      ), P(
        r,
        "--divkit-tabs-items-spacing",
        /*tabItemSpacing*/
        t[13] ? hn(
          /*tabItemSpacing*/
          t[13] * 10 / /*tabFontSize*/
          t[4]
        ) : ""
      ), P(
        r,
        "--divkit-tabs-animation-duration",
        /*animationDuration*/
        t[35] !== void 0 ? `${/*animationDuration*/
        t[35]}ms` : ""
      ), p(c, "class", f = wt("tabs__swiper", Sn, {
        inited: (
          /*isSwipeInitialized*/
          t[31]
        ),
        animated: (
          /*isAnimated*/
          t[32]
        )
      })), p(u, "class", d = Sn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Ir["root_restrict-scroll"] : ""));
    },
    m(C, N) {
      q(C, r, N), yt(r, e);
      for (let z = 0; z < w.length; z += 1)
        w[z] && w[z].m(e, null);
      yt(e, n), F && F.m(e, null), yt(r, o), yt(r, i);
      for (let z = 0; z < B.length; z += 1)
        B[z] && B[z].m(i, null);
      t[74](r), q(C, a, N), ae && ae.m(C, N), q(C, l, N), q(C, u, N), yt(u, c);
      for (let z = 0; z < Y.length; z += 1)
        Y[z] && Y[z].m(c, null);
      t[75](c), t[76](u), g = !0, m || (h = [
        Je(
          r,
          "keydown",
          /*onTabKeydown*/
          t[55]
        ),
        Je(u, "touchstart", function() {
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
        Je(u, "touchmove", function() {
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
        Je(u, "touchend", function() {
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
        Je(u, "touchcancel", function() {
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
    p(C, N) {
      if (t = C, N[0] & /*$childStore, selected, delimitierStyle*/
      425984) {
        y = ar(
          /*$childStore*/
          t[18]
        );
        let z;
        for (z = 0; z < y.length; z += 1) {
          const O = $u(t, y, z);
          w[z] ? w[z].p(O, N) : (w[z] = tc(O), w[z].c(), w[z].m(e, n));
        }
        for (; z < w.length; z += 1)
          w[z].d(1);
        w.length = y.length;
      }
      if (/*animationType*/
      t[16] === "slide" && /*selectedTabStyles*/
      t[36] ? F ? F.p(t, N) : (F = rc(t), F.c(), F.m(e, null)) : F && (F.d(1), F = null), N[0] & /*componentContext, $childStore, selected, delimitierStyle*/
      425985 | N[1] & /*instId, selectItem*/
      8912896) {
        R = ar(
          /*$childStore*/
          t[18]
        );
        let z;
        for (z = 0; z < R.length; z += 1) {
          const O = xu(t, R, z);
          B[z] ? (B[z].p(O, N), G(B[z], 1)) : (B[z] = oc(O), B[z].c(), G(B[z], 1), B[z].m(i, null));
        }
        for (mr(), z = R.length; z < B.length; z += 1)
          Q(z);
        br();
      }
      if ((!g || N[1] & /*$jsonRestrictParentScroll*/
      131072 && s !== (s = Sn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Ir["root_restrict-scroll"] : ""))) && p(r, "class", s), N[0] & /*titlePadding, $direction*/
      540672 && P(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? yo(
          /*titlePadding*/
          t[14],
          /*$direction*/
          t[19]
        ) : ""
      ), N[0] & /*tabFontSize*/
      16 && P(r, "--divkit-tabs-font-size", ue(
        /*tabFontSize*/
        t[4]
      )), N[0] & /*tabPaddings*/
      32 && P(
        r,
        "--divkit-tabs-paddings",
        /*tabPaddings*/
        t[5]
      ), N[0] & /*tabLineHeight*/
      33554432 && P(
        r,
        "--divkit-tabs-line-height",
        /*tabLineHeight*/
        t[25]
      ), N[0] & /*tabLetterSpacing*/
      67108864 && P(
        r,
        "--divkit-tabs-letter-spacing",
        /*tabLetterSpacing*/
        t[26]
      ), N[0] & /*tabActiveFontWeight*/
      128 && P(
        r,
        "--divkit-tabs-active-font-weight",
        /*tabActiveFontWeight*/
        t[7] || ""
      ), N[0] & /*tabInactiveFontWeight*/
      256 && P(
        r,
        "--divkit-tabs-inactive-font-weight",
        /*tabInactiveFontWeight*/
        t[8] || ""
      ), N[0] & /*tabActiveFontFamily*/
      134217728 && P(
        r,
        "--divkit-tabs-active-font-family",
        /*tabActiveFontFamily*/
        t[27] || ""
      ), N[0] & /*tabInactiveFontFamily*/
      536870912 && P(
        r,
        "--divkit-tabs-inactive-font-family",
        /*tabInactiveFontFamily*/
        t[29] || ""
      ), N[0] & /*tabActiveFontVariationSettings*/
      268435456 && P(
        r,
        "--divkit-tabs-active-font-variation-settings",
        /*tabActiveFontVariationSettings*/
        t[28] || ""
      ), N[0] & /*tabInactiveFontVariationSettings*/
      1073741824 && P(
        r,
        "--divkit-tabs-inactive-font-variation-settings",
        /*tabInactiveFontVariationSettings*/
        t[30] || ""
      ), N[0] & /*tabActiveTextColor*/
      512 && P(
        r,
        "--divkit-tabs-active-text-color",
        /*tabActiveTextColor*/
        t[9]
      ), N[0] & /*tabInactiveTextColor*/
      1024 && P(
        r,
        "--divkit-tabs-inactive-text-color",
        /*tabInactiveTextColor*/
        t[10]
      ), N[0] & /*tabActiveBackground*/
      2048 && P(
        r,
        "--divkit-tabs-active-background-color",
        /*tabActiveBackground*/
        t[11]
      ), N[0] & /*tabInactiveBackground*/
      4096 && P(
        r,
        "--divkit-tabs-inactive-background-color",
        /*tabInactiveBackground*/
        t[12]
      ), N[0] & /*tabBorderRadius*/
      64 && P(
        r,
        "--divkit-tabs-border-radius",
        /*tabBorderRadius*/
        t[6]
      ), N[0] & /*tabItemSpacing, tabFontSize*/
      8208 && P(
        r,
        "--divkit-tabs-items-spacing",
        /*tabItemSpacing*/
        t[13] ? hn(
          /*tabItemSpacing*/
          t[13] * 10 / /*tabFontSize*/
          t[4]
        ) : ""
      ), N[1] & /*animationDuration*/
      16 && P(
        r,
        "--divkit-tabs-animation-duration",
        /*animationDuration*/
        t[35] !== void 0 ? `${/*animationDuration*/
        t[35]}ms` : ""
      ), /*$jsonSeparator*/
      t[20] ? ae ? ae.p(t, N) : (ae = ic(t), ae.c(), ae.m(l.parentNode, l)) : ae && (ae.d(1), ae = null), N[0] & /*$childStore, childLayoutParams, selected*/
      393224 | N[1] & /*visiblePanels, instId, showedPanels*/
      524300) {
        T = ar(
          /*$childStore*/
          t[18]
        );
        let z;
        for (z = 0; z < T.length; z += 1) {
          const O = Qu(t, T, z);
          Y[z] ? (Y[z].p(O, N), G(Y[z], 1)) : (Y[z] = lc(O), Y[z].c(), G(Y[z], 1), Y[z].m(c, null));
        }
        for (mr(), z = T.length; z < Y.length; z += 1)
          le(z);
        br();
      }
      (!g || N[1] & /*isSwipeInitialized, isAnimated*/
      3 && f !== (f = wt("tabs__swiper", Sn, {
        inited: (
          /*isSwipeInitialized*/
          t[31]
        ),
        animated: (
          /*isAnimated*/
          t[32]
        )
      }))) && p(c, "class", f), (!g || N[1] & /*$jsonRestrictParentScroll*/
      131072 && d !== (d = Sn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Ir["root_restrict-scroll"] : ""))) && p(u, "class", d);
    },
    i(C) {
      if (!g) {
        for (let N = 0; N < R.length; N += 1)
          G(B[N]);
        for (let N = 0; N < T.length; N += 1)
          G(Y[N]);
        g = !0;
      }
    },
    o(C) {
      B = B.filter(Zu);
      for (let N = 0; N < B.length; N += 1)
        $(B[N]);
      Y = Y.filter(Zu);
      for (let N = 0; N < Y.length; N += 1)
        $(Y[N]);
      g = !1;
    },
    d(C) {
      C && (k(r), k(a), k(l), k(u)), un(w, C), F && F.d(), un(B, C), t[74](null), ae && ae.d(C), un(Y, C), t[75](null), t[76](null), m = !1, Ur(h);
    }
  };
}
function Gm(t) {
  let r, e, n, o, i, s;
  const a = [Hm, Rm], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[2] ? -1 : 0
    );
  }
  return ~(r = u(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(c) {
      e && e.l(c), n = We();
    },
    m(c, f) {
      ~r && l[r].m(c, f), q(c, n, f), o = !0, i || (s = Je(Lm, "resize", function() {
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
    p(c, f) {
      t = c;
      let d = r;
      r = u(t), r === d ? ~r && l[r].p(t, f) : (e && (mr(), $(l[d], 1, 1, () => {
        l[d] = null;
      }), br()), ~r ? (e = l[r], e ? e.p(t, f) : (e = l[r] = a[r](t), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(c) {
      o || (G(e), o = !0);
    },
    o(c) {
      $(e), o = !1;
    },
    d(c) {
      c && k(n), ~r && l[r].d(c), i = !1, s();
    }
  };
}
function Jm(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g, m, h, y, w, F, R, B, Q = S, ae = () => (Q(), Q = I(a, (E) => e(67, B = E)), a), T, Y = S, le = () => (Y(), Y = I(m, (E) => e(68, T = E)), m), C, N = S, z = () => (N(), N = I(g, (E) => e(69, C = E)), g), O, oe = S, fe = () => (oe(), oe = I(f, (E) => e(70, O = E)), f), ce, Ae, _e = S, Te = () => (_e(), _e = I(c, (E) => e(71, Ae = E)), c), ee, Me = S, Xe = () => (Me(), Me = I(u, (E) => e(72, ee = E)), u), Qe, Ee = S, it = () => (Ee(), Ee = I(l, (E) => e(20, Qe = E)), l), we, Se = S, he = () => (Se(), Se = I(d, (E) => e(48, we = E)), d);
  t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => Me()), t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => Se());
  let { componentContext: x } = r, { layoutParams: de = void 0 } = r;
  const se = zr(en), De = se.direction;
  En(t, De, (E) => e(19, ce = E));
  const tt = se.genId("tabs");
  let xe, ne = !1, Ze = Oo([]);
  En(t, Ze, (E) => e(18, R = E));
  let Re = {}, ut, ct, ft, Et = {}, st = 12, Lt = "", _t = "", pe = "", ge = "", gt, Ce = "", M = "", Ct, ht = "", Dt = "", Nt = "", nt = "", X = "", It = "", zt = 0, er = "", Xt = "", me = null, Ue = !1, mt = !1, ye, et = [], Le = [], or = null, Oe = null, kt = null, Tt, Mt = !1, hr = !1, Ne, jt, lr, rr = "slide", xt, yr, Sr, Bt;
  function jr() {
    e(4, st = 12), e(5, Lt = ""), e(6, ge = ""), e(7, gt = void 0), e(27, Ce = ""), e(28, M = ""), e(8, Ct = void 0), e(29, ht = ""), e(30, Dt = ""), e(9, Nt = ""), e(10, nt = ""), e(11, X = ""), e(12, It = ""), e(13, zt = 0), e(61, er = ""), e(62, Xt = ""), e(14, me = null), e(15, lr = void 0), e(16, rr = "slide"), e(35, xt = 300), e(36, yr = void 0), te();
  }
  function J(E) {
    x.json.items && e(0, x = Sr = {
      ...x,
      json: {
        ...x.json,
        items: x.json.items.map((re, _) => ({ ...re, div: E[_] }))
      }
    });
  }
  function pt(E) {
    if (ne)
      return;
    const re = new Set(et.filter(Uo)), _ = /* @__PURE__ */ new Map();
    Sr === x && et.forEach((j) => {
      j && _.set(j.json, j);
    }), e(33, et = E.map((j, Pe) => {
      if ((Pe === h || et[Pe]) && (j != null && j.div)) {
        const He = _.get(j.div);
        return He ? (re.delete(He), He) : x.produceChildContext(j.div, { path: Pe });
      }
    })), e(34, Le = E.map((j, Pe) => Pe === h));
    for (const j of re)
      j.destroy();
    Sr = x;
  }
  async function Kt(E, re, _) {
    if (ye = h, e(17, h = E), St(), Dr(_), te(), re) {
      await Mn();
      const j = ut.querySelector(`.${Sn.tabs__item_selected}`);
      j && j.focus();
    }
  }
  function At(E, re = !1) {
    const _ = R == null ? void 0 : R.length;
    if (!_)
      return;
    const j = R.map((H) => H.index);
    let He = j.indexOf(h) + E;
    He >= _ ? He = 0 : He < 0 && (He = _ - 1);
    const Ot = j[He];
    Kt(Ot, re, !0);
  }
  function Cr(E, re) {
    return h !== re ? (Kt(re, !1, !0), !1) : !0;
  }
  function Dr(E = !0) {
    e(32, mt = E), wr(-h * 100), Mr(), qr(), ir(), jt = -h * ct.clientWidth;
  }
  async function wr(E) {
    await Mn(), e(23, ft.style.transform = `translate3d(${E}%,0,0)`, ft);
  }
  function Mr(E = !1) {
    const re = E ? Math.max(0, h - 1) : Math.min(h, ye != null ? ye : h), _ = E ? Math.min(o.length - 1, h + 1) : Math.max(h, ye != null ? ye : h);
    se.devtoolCreateHierarchy, et.forEach((j) => {
      j == null || j.destroy();
    }), e(33, et = et.map((j, Pe) => {
      var Ot;
      if (j)
        return j;
      const He = (Ot = o[Pe]) == null ? void 0 : Ot.div;
      if ((Pe >= re && Pe <= _ || se.devtoolCreateHierarchy === "eager" && !1) && He)
        return x.produceChildContext(He, { path: Pe });
    })), e(34, Le = Le.map((j, Pe) => Pe >= re && Pe <= _));
  }
  async function qr() {
    var re;
    if (((re = x.json.height) == null ? void 0 : re.type) === "match_parent")
      return;
    await Mn();
    const E = document.getElementById(`${tt}-panel-${h}`);
    E && e(22, ct.style.height = ue(E.offsetHeight), ct);
  }
  function ir() {
    or && clearTimeout(or), or = window.setTimeout(
      () => {
        e(34, Le = o.map((E, re) => re === h));
      },
      400
    );
  }
  function ot(E) {
    if (!(E.ctrlKey || E.shiftKey || E.altKey || E.metaKey) && o) {
      if (E.which === Od)
        At(-1, !0);
      else if (E.which === Bd)
        At(1, !0);
      else if (E.which === Ld)
        Kt(0, !0, !0);
      else if (E.which === Rd)
        Kt(o.length - 1, !0, !0);
      else
        return;
      E.preventDefault();
    }
  }
  function St() {
    Ue || (e(31, Ue = !0), e(22, ct.style.height = ue(ct.clientHeight), ct), e(23, ft.style.transform = `translate3d(${-(ye != null ? ye : h) * 100}%,0,0)`, ft));
  }
  function $t(E) {
    var j;
    const re = E.target, _ = (j = re == null ? void 0 : re.closest) == null ? void 0 : j.call(re, `.${Ir["root_restrict-scroll"]}`);
    o.length < 2 || E.touches.length > 1 || _ && _ !== ct || (Mt = !1, hr = !1, Oe = Xu(E), kt = null, Tt = Date.now(), Ne = jt || -h * ct.clientWidth, e(32, mt = !1), or && clearTimeout(or));
  }
  function Qt(E) {
    const re = Xu(E);
    if (!Oe || kt && kt.x === re.x && kt.y === re.y)
      return;
    kt = re;
    const _ = ct.clientWidth;
    if (Mt) {
      jt = re.x - Oe.x + Ne;
      const j = _ * o.length;
      if (jt > 0)
        jt = jt * _ / (jt + _ * 3);
      else if (-jt + _ > j) {
        let Pe = -jt + _ - j;
        Pe = Pe * _ / (Pe + _ * 3), jt = _ - j - Pe;
      }
      wr(jt * 100 / _);
    } else Math.abs(re.y - Oe.y) > 10 ? hr = !0 : !hr && Math.abs(re.x - Oe.x) > 8 && (St(), Mt = !0, Oe = re, wr(-h * 100), Mr(!0));
    Mt && E.cancelable && E.preventDefault();
  }
  function pr() {
    hr = !1, Oe = null;
    let E = h;
    if (!Mt)
      return;
    Mt = !1;
    const re = Math.min(512, ct.clientWidth), _ = Math.abs(Ne - jt), j = Math.min(1, (Date.now() - Tt) / 750);
    _ > re / 4 * j && (E += Ne > jt ? 1 : -1), E >= o.length ? E = o.length - 1 : E < 0 && (E = 0), E === h ? (e(32, mt = !0), jt = -E * re, wr(-E * 100), ir()) : Kt(E, !1, !0);
  }
  function dt(E, re) {
    return E > o.length - 1 ? re === "ring" ? Po(E, o.length) : o.length - 1 : E < 0 ? re === "ring" ? Po(E, o.length) : 0 : E;
  }
  function te() {
    rr === "slide" && Mn().then(() => {
      const E = ut == null ? void 0 : ut.querySelector("." + Sn.tabs__item_selected);
      E && e(36, yr = {
        left: `${E.offsetLeft}px`,
        width: `${E.offsetWidth}px`,
        height: `${E.offsetHeight}px`
      });
    });
  }
  ao(() => {
    te(), se.devtoolCreateHierarchy;
  }), cn(() => {
    et.forEach((E) => {
      E == null || E.destroy();
    }), xe && (se.unregisterInstance(xe), e(60, xe = void 0));
  });
  const vt = (E, re) => Cr(re, E);
  function sr(E) {
    Pr[E ? "unshift" : "push"](() => {
      ut = E, e(21, ut);
    });
  }
  function vr(E) {
    Pr[E ? "unshift" : "push"](() => {
      ft = E, e(23, ft);
    });
  }
  function ur(E) {
    Pr[E ? "unshift" : "push"](() => {
      ct = E, e(22, ct);
    });
  }
  return t.$$set = (E) => {
    "componentContext" in E && e(0, x = E.componentContext), "layoutParams" in E && e(1, de = E.layoutParams);
  }, t.$$.update = () => {
    var E, re, _, j, Pe, He, Ot, H, Pt, lt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(66, n = x.origJson), t.$$.dirty[2] & /*origJson*/
    16 && n && jr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(63, o = Array.isArray(x.json.items) && x.json.items || []), t.$$.dirty[2] & /*items*/
    2 && e(47, i = o.map((Ye) => {
      var Ke;
      return { json: Ye.div, id: (Ke = Ye.div) == null ? void 0 : Ke.id };
    })), t.$$.dirty[0] & /*componentContext*/
    1 && e(65, s = x.getJsonWithVars(x.json.selected_tab)), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(46, a = x.getDerivedFromVars(x.json.tab_title_style, void 0, !0))), t.$$.dirty[0] & /*componentContext*/
    1 && it(e(45, l = x.getDerivedFromVars(x.json.has_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(44, u = x.getDerivedFromVars(x.json.separator_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(43, c = x.getDerivedFromVars(x.json.separator_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(42, f = x.getDerivedFromVars(x.json.switch_tabs_by_content_swipe_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(41, d = x.getDerivedFromVars(x.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && z(e(40, g = x.getDerivedFromVars(x.json.title_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(39, m = x.getDerivedFromVars(x.json.tab_title_delimiter))), t.$$.dirty[2] & /*jsonSelectedTab*/
    8 && e(17, h = s && Number(s) || 0), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*items*/
    2)
      if (Array.isArray(o) && o.length) {
        let Ye = [];
        o.forEach((Ke, qt) => {
          const kr = x.getJsonWithVars({
            index: qt,
            title: Ke.title,
            title_click_action: Ke.title_click_action
          });
          kr.title && typeof kr.title == "string" ? Ye.push(kr) : x.logError(K(new Error("Incorrect title for the tab"), { additional: { index: qt } }));
        }), Ze.set(Ye);
      } else
        Ze.set([]);
    if (t.$$.dirty[0] & /*$childStore, componentContext*/
    262145 && (R != null && R.length ? e(2, ne = !1) : (e(2, ne = !0), x.logError(K(new Error('Incorrect or empty "items" prop for div "tabs"'))))), t.$$.dirty[0] & /*componentContext, childLayoutParams*/
    9) {
      let Ye = { parentContainerOrientation: "horizontal" };
      ((E = x.json.width) == null ? void 0 : E.type) === "wrap_content" && (Ye.parentHorizontalWrapContent = !0), (!x.json.height || x.json.height.type === "wrap_content") && (Ye.parentVerticalWrapContent = !0), e(3, Re = oi(Ye, Re));
    }
    if (t.$$.dirty[0] & /*hasError, selected, componentContext*/
    131077 | t.$$.dirty[2] & /*items*/
    2 && !ne && (h < 0 || h >= o.length) && (x.logError(K(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: x.json.selected_tab,
        length: o.length
      }
    })), e(17, h = h < 0 ? 0 : o.length - 1)), t.$$.dirty[0] & /*hasError, $childStore, selected, componentContext*/
    393221 && !ne && !R.some((Ye) => h === Ye.index) && (x.logError(K(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: x.json.selected_tab
      }
    })), e(17, h = ((re = R[0]) == null ? void 0 : re.index) || 0)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && e(64, y = B || {}), t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(4, st = Yn(y.font_size, st)), t.$$.dirty[0] & /*tabFontSize, $direction, tabPaddings*/
    524336 | t.$$.dirty[2] & /*tabStyle*/
    4 && (y.font_size || y.paddings)) {
      const Ye = y.paddings || { top: 6, right: 8, bottom: 6, left: 8 }, Ke = {
        top: (Number(Ye.top) || 0) / st * 10,
        right: (Number(ce === "ltr" ? Ye.end : Ye.start) || Number(Ye.right) || 0) / st * 10,
        bottom: (Number(Ye.bottom) || 0) / st * 10,
        left: (Number(ce === "ltr" ? Ye.start : Ye.end) || Number(Ye.left) || 0) / st * 10
      };
      e(5, Lt = ds(Ke, ce, Lt));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Ye = y.line_height;
      Ye !== void 0 && Kn(Ye) && e(25, _t = ue(Ye / st * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Ye = y.letter_spacing;
      Ye !== void 0 && Bn(Ye) && e(26, pe = ue(Ye / st * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize, tabBorderRadius*/
    80 | t.$$.dirty[2] & /*tabStyle*/
    4 && (y.corner_radius || y.corners_radius || y.font_size)) {
      const Ye = (_ = y.corner_radius) != null ? _ : 1e3;
      y.corners_radius ? e(6, ge = Nm(y.corners_radius, Ye, st, ge)) : Bn(Ye) && e(6, ge = ue(Ye / st * 10));
    }
    t.$$.dirty[0] & /*tabActiveFontWeight*/
    128 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(7, gt = Ci(y.active_font_weight || y.font_weight, void 0, gt)), y.font_family && typeof y.font_family == "string" ? e(27, Ce = se.typefaceProvider(y.font_family, { fontWeight: gt || 400 })) : e(27, Ce = ""), e(28, M = qi(y.active_font_variation_settings))), t.$$.dirty[0] & /*tabInactiveFontWeight*/
    256 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(8, Ct = Ci(y.inactive_font_weight || y.font_weight, void 0, Ct)), y.font_family && typeof y.font_family == "string" ? e(29, ht = se.typefaceProvider(y.font_family, { fontWeight: Ct || 400 })) : e(29, ht = ""), e(30, Dt = qi(y.inactive_font_variation_settings))), t.$$.dirty[0] & /*tabActiveTextColor*/
    512 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(9, Nt = gr(y.active_text_color, 1, Nt)), t.$$.dirty[0] & /*tabInactiveTextColor*/
    1024 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(10, nt = gr(y.inactive_text_color, 1, nt)), t.$$.dirty[0] & /*tabActiveBackground*/
    2048 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(11, X = gr(y.active_background_color, 1, X)), t.$$.dirty[0] & /*tabInactiveBackground*/
    4096 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(12, It = gr(y.inactive_background_color, 1, It)), t.$$.dirty[0] & /*tabItemSpacing*/
    8192 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(13, zt = ln(y.item_spacing, zt)), t.$$.dirty[0] & /*$jsonSeparator, $direction*/
    1572864 | t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*$jsonSeparatorColor, $jsonSeparatorPaddings, separatorMargins*/
    1537 && Qe && (ee && e(61, er = gr(ee, 1, er)), Ae && e(62, Xt = ds(Ae, ce, Xt))), t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*separatorMargins*/
    1 && e(38, w = {
      background: er,
      margin: Xt
    }), t.$$.dirty[2] & /*$jsonSwipeEnabled*/
    256 && e(37, F = typeof O > "u" ? !0 : !!O), t.$$.dirty[0] & /*titlePadding*/
    16384 | t.$$.dirty[2] & /*$jsonTitlePaddings*/
    128 && e(14, me = ji(C || void 0, me)), t.$$.dirty[0] & /*delimitierStyle*/
    32768 | t.$$.dirty[2] & /*$jsonDelimiterStyle*/
    64 && e(15, lr = Pm(T, lr)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && ((B == null ? void 0 : B.animation_type) === "fade" || (B == null ? void 0 : B.animation_type) === "none") && e(16, rr = B.animation_type), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && Bn(B == null ? void 0 : B.animation_duration) && e(35, xt = B.animation_duration), t.$$.dirty[2] & /*items*/
    2 && pt(o), t.$$.dirty[0] & /*componentContext, hasError, selected*/
    131077 | t.$$.dirty[1] & /*prevId*/
    536870912 | t.$$.dirty[2] & /*items*/
    2 && x.json && (xe && (se.unregisterInstance(xe), e(60, xe = void 0)), x.id && !ne && !x.fakeElement && (e(60, xe = x.id), se.registerInstance(xe, {
      setCurrentItem(Ye, Ke) {
        if (Ye < 0 || Ye > o.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        Kt(Ye, !1, Ke);
      },
      setPreviousItem(Ye, Ke, qt) {
        let kr = dt(h - Ye, Ke);
        Kt(kr, !1, qt);
      },
      setNextItem(Ye, Ke, qt) {
        let kr = dt(h + Ye, Ke);
        Kt(kr, !1, qt);
      },
      scrollToStart(Ye) {
        Kt(0, !1, Ye);
      },
      scrollToEnd(Ye) {
        Kt(o.length - 1, !1, Ye);
      },
      scrollCombined({ step: Ye, overflow: Ke, animated: qt }) {
        Ye && Kt(dt(h + Ye, Ke || "clamp"), !1, qt || !0);
      }
    }))), t.$$.dirty[0] & /*componentContext, selected, animationType*/
    196609 | t.$$.dirty[2] & /*items*/
    2 && e(24, Et = {
      "height-parent": ((j = x.json.height) == null ? void 0 : j.type) === "match_parent" ? "yes" : "",
      "own-height": (((Pe = x.json.height) == null ? void 0 : Pe.type) === "match_parent" || ((He = x.json.height) == null ? void 0 : He.type) === "fixed") && !(((Pt = (H = (Ot = o[h]) == null ? void 0 : Ot.div) == null ? void 0 : H.height) == null ? void 0 : Pt.type) === "wrap_content" && ((lt = o[h].div) != null && lt.height.constrained)),
      animation: rr
    });
  }, [
    x,
    de,
    ne,
    Re,
    st,
    Lt,
    ge,
    gt,
    Ct,
    Nt,
    nt,
    X,
    It,
    zt,
    me,
    lr,
    rr,
    h,
    R,
    ce,
    Qe,
    ut,
    ct,
    ft,
    Et,
    _t,
    pe,
    Ce,
    M,
    ht,
    Dt,
    Ue,
    mt,
    et,
    Le,
    xt,
    yr,
    F,
    w,
    m,
    g,
    d,
    f,
    c,
    u,
    l,
    a,
    i,
    we,
    De,
    tt,
    Ze,
    Bt,
    J,
    Cr,
    ot,
    $t,
    Qt,
    pr,
    te,
    xe,
    er,
    Xt,
    o,
    y,
    s,
    n,
    B,
    T,
    C,
    O,
    Ae,
    ee,
    vt,
    sr,
    vr,
    ur
  ];
}
class qm extends Hr {
  constructor(r) {
    super(), Rr(this, r, Jm, Gm, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const Ym = "appkit-state", Km = "appkit-state_overflow_visible", Xm = "appkit-state__animations", Ai = {
  state: Ym,
  state_overflow_visible: Km,
  state__animations: Xm,
  "state__animation-child": "appkit-state__animation-child",
  "state__animation-child-inner": "appkit-state__animation-child-inner"
};
function kl(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function Zm(t) {
  return t * t * t;
}
function Hd(t) {
  const r = t - 1;
  return r * r * r + 1;
}
function Wd(t) {
  return (r) => {
    if (r <= 0)
      return 0;
    if (r >= 1)
      return 1;
    const e = r * t.length, n = Math.floor(e), o = t[n], i = t[n + 1], s = e - n;
    return o * s + i * (1 - s);
  };
}
const Qm = [
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
], xm = Wd(Qm), $m = [
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
], e0 = Wd($m), Ql = {
  linear: ll,
  ease: xm,
  ease_in: Zm,
  ease_out: Hd,
  ease_in_out: kl,
  spring: e0
};
function Sa(t) {
  return Ql[t];
}
const Ud = 200, Gd = 0, t0 = 0, r0 = 0;
function ac(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || Ud) + (Number(r.start_delay) || Gd)
  ));
}
function n0(t, {
  transitions: r,
  elementBbox: e,
  rootBbox: n,
  direction: o,
  maxDuration: i,
  alpha: s
}) {
  const a = s != null ? s : 1;
  return {
    duration: Ji() ? 0 : i,
    css: (l) => {
      const u = l * i, c = r.map((w) => {
        var Y, le, C;
        const F = Number(w.start_delay) || Gd, R = Number(w.duration) || Ud, B = Math.max(0, Math.min(1, (u - F) / R)), Q = o === "in" ? 1 - B : B, T = (Sa(w.interpolator || "ease_in_out") || kl)(Q);
        if (w.type === "fade")
          return T >= 1 ? {
            active: !1,
            opacity: 0
          } : {
            active: T > 0 && T < 1,
            opacity: (1 - T) * a + T * (w.alpha || t0)
          };
        if (w.type === "slide") {
          const N = w.edge === "top" || w.edge === "left" ? -1 : 1, z = w.edge === "top" || w.edge === "bottom" || !w.edge ? "translateY" : "translateX";
          let O = (Y = w.distance) == null ? void 0 : Y.value;
          O === void 0 && (w.edge === "top" || w.edge === "bottom" || !w.edge ? O = Math.abs(
            n[w.edge === "bottom" ? "bottom" : "top"] - e[w.edge === "bottom" ? "top" : "bottom"]
          ) : O = Math.abs(
            n[w.edge === "left" ? "left" : "right"] - e[w.edge === "left" ? "right" : "left"]
          ));
          const oe = O * T;
          return {
            active: T > 0 && T < 1,
            translate: `${z}(${oe * N}px)`
          };
        } else if (w.type === "scale") {
          const N = 1 - T + T * (w.scale || r0), z = (le = w.pivot_x) != null ? le : 0.5, O = (C = w.pivot_y) != null ? C : 0.5, oe = (1 - N) * e.width * z, fe = (1 - N) * e.height * O;
          return {
            active: T > 0 && T < 1,
            scale: `translate(${oe}px, ${fe}px) scale(${N})`
          };
        }
        return {};
      }), f = c.map((w) => w.opacity).filter((w) => w !== void 0).reduce((w, F) => w * F, 1), d = c.map((w) => w.translate).filter((w) => w !== void 0).join(" "), g = c.map((w) => w.scale).filter((w) => w !== void 0).join(" "), m = c.filter((w) => w.active).map((w) => w.scale).filter((w) => w !== void 0), h = m.length ? m[m.length - 1] : g;
      return `transform:${[d, h].filter(Boolean).join(" ") || "none"};opacity:${f}`;
    }
  };
}
function Xo(t, r, e) {
  return t * (1 - e) + r * e;
}
const o0 = 200, i0 = 0;
function s0(t, {
  rootBbox: r,
  beforeBbox: e,
  afterBbox: n,
  transition: o
}) {
  var i, s;
  return {
    delay: (i = o.start_delay) != null ? i : i0,
    duration: Ji() ? 0 : (s = o.duration) != null ? s : o0,
    easing: o.interpolator && o.interpolator in Ql ? Ql[o.interpolator] : kl,
    css: (a) => [
      `top:${Xo(e.top, n.top, a) - r.top}px`,
      `left:${Xo(e.left, n.left, a) - r.left}px`,
      `width:${Xo(e.width, n.width, a)}px`,
      `height:${Xo(e.height, n.height, a)}px`
    ].join(";")
  };
}
function Jd(t) {
  const r = [];
  return t.type === "set" ? (t.items || []).forEach((e) => {
    r.push(...Jd(e));
  }) : r.push(t), r;
}
const { Map: l0 } = Ho;
function uc(t, r, e) {
  const n = t.slice();
  return n[37] = r[e], n;
}
function a0(t) {
  let r, e;
  return r = new Rn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function u0(t) {
  let r, e;
  const n = [
    {
      cls: wt(
        "state",
        Ai,
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
    $$slots: { default: [d0] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = Io(o, n[i]);
  return r = new jn({ props: o }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(i) {
      Jt(r.$$.fragment, i);
    },
    m(i, s) {
      Wt(r, i, s), e = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams, parentOfItems, replaceItems, devapi*/
      6915 ? Wo(n, [
        s[0] & /*mods*/
        256 && {
          cls: wt(
            "state",
            Ai,
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
        2048 && Ad(
          /*devapi*/
          i[11]
        )
      ]) : {};
      s[0] & /*animationRoot, animationList, selectedId, selectedComponentContext, childContexts*/
      248 | s[1] & /*$$scope*/
      4096 && (a.$$scope = { dirty: s, ctx: i }), r.$set(a);
    },
    i(i) {
      e || (G(r.$$.fragment, i), e = !0);
    },
    o(i) {
      $(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Ut(r, i);
    }
  };
}
function cc(t) {
  let r = (
    /*selectedId*/
    t[5]
  ), e, n, o = fc(t);
  return {
    c() {
      o.c(), e = We();
    },
    l(i) {
      o.l(i), e = We();
    },
    m(i, s) {
      o.m(i, s), q(i, e, s), n = !0;
    },
    p(i, s) {
      s[0] & /*selectedId*/
      32 && Tr(r, r = /*selectedId*/
      i[5]) ? (mr(), $(o, 1, 1, S), br(), o = fc(i), o.c(), G(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
    },
    i(i) {
      n || (G(o), n = !0);
    },
    o(i) {
      $(o), n = !1;
    },
    d(i) {
      i && k(e), o.d(i);
    }
  };
}
function fc(t) {
  let r, e;
  return r = new no({
    props: {
      componentContext: (
        /*selectedComponentContext*/
        t[6]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*selectedComponentContext*/
      64 && (i.componentContext = /*selectedComponentContext*/
      n[6]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function c0(t) {
  let r, e, n, o, i, s, a, l;
  n = new no({
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
      r = Ie("div"), e = Ie("div"), Gt(n.$$.fragment), o = dr(), this.h();
    },
    l(c) {
      r = Fe(c, "DIV", { class: !0 });
      var f = ve(r);
      e = Fe(f, "DIV", { class: !0 });
      var d = ve(e);
      Jt(n.$$.fragment, d), d.forEach(k), o = _r(f), f.forEach(k), this.h();
    },
    h() {
      p(e, "class", Ai["state__animation-child-inner"]), p(r, "class", Ai["state__animation-child"]);
    },
    m(c, f) {
      q(c, r, f), yt(r, e), Wt(n, e, null), yt(r, o), s = !0, a || (l = Je(r, "introend", u), a = !0);
    },
    p(c, f) {
      t = c;
      const d = {};
      f[0] & /*animationList*/
      16 && (d.componentContext = /*item*/
      t[37].componentContextCopy), n.$set(d);
    },
    i(c) {
      s || (G(n.$$.fragment, c), i || lo(() => {
        i = pl(
          r,
          s0,
          /*item*/
          t[37]
        ), i.start();
      }), s = !0);
    },
    o(c) {
      $(n.$$.fragment, c), s = !1;
    },
    d(c) {
      c && k(r), Ut(n), a = !1, l();
    }
  };
}
function f0(t) {
  let r, e, n, o, i, s = `${/*item*/
  t[37].offsetLeft}px`, a = `${/*item*/
  t[37].offsetTop}px`, l = `${/*item*/
  t[37].width}px`, u = `${/*item*/
  t[37].height}px`, c, f, d;
  n = new no({
    props: {
      componentContext: (
        /*item*/
        t[37].componentContextCopy
      )
    }
  });
  function g() {
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
      r = Ie("div"), e = Ie("div"), Gt(n.$$.fragment), o = dr(), this.h();
    },
    l(m) {
      r = Fe(m, "DIV", { class: !0 });
      var h = ve(r);
      e = Fe(h, "DIV", { class: !0 });
      var y = ve(e);
      Jt(n.$$.fragment, y), y.forEach(k), o = _r(h), h.forEach(k), this.h();
    },
    h() {
      p(e, "class", Ai["state__animation-child-inner"]), p(r, "class", Ai["state__animation-child"]), P(r, "left", s), P(r, "top", a), P(r, "width", l), P(r, "height", u);
    },
    m(m, h) {
      q(m, r, h), yt(r, e), Wt(n, e, null), yt(r, o), c = !0, f || (d = Je(r, "introend", g), f = !0);
    },
    p(m, h) {
      t = m;
      const y = {};
      h[0] & /*animationList*/
      16 && (y.componentContext = /*item*/
      t[37].componentContextCopy), n.$set(y), h[0] & /*animationList*/
      16 && s !== (s = `${/*item*/
      t[37].offsetLeft}px`) && P(r, "left", s), h[0] & /*animationList*/
      16 && a !== (a = `${/*item*/
      t[37].offsetTop}px`) && P(r, "top", a), h[0] & /*animationList*/
      16 && l !== (l = `${/*item*/
      t[37].width}px`) && P(r, "width", l), h[0] & /*animationList*/
      16 && u !== (u = `${/*item*/
      t[37].height}px`) && P(r, "height", u);
    },
    i(m) {
      c || (G(n.$$.fragment, m), i || lo(() => {
        i = pl(
          r,
          n0,
          /*item*/
          t[37]
        ), i.start();
      }), c = !0);
    },
    o(m) {
      $(n.$$.fragment, m), c = !1;
    },
    d(m) {
      m && k(r), Ut(n), f = !1, d();
    }
  };
}
function dc(t, r) {
  let e, n, o, i, s;
  const a = [f0, c0], l = [];
  function u(c, f) {
    return "direction" in /*item*/
    c[37] ? 0 : 1;
  }
  return n = u(r), o = l[n] = a[n](r), {
    key: t,
    first: null,
    c() {
      e = We(), o.c(), i = We(), this.h();
    },
    l(c) {
      e = We(), o.l(c), i = We(), this.h();
    },
    h() {
      this.first = e;
    },
    m(c, f) {
      q(c, e, f), l[n].m(c, f), q(c, i, f), s = !0;
    },
    p(c, f) {
      r = c;
      let d = n;
      n = u(r), n === d ? l[n].p(r, f) : (mr(), $(l[d], 1, 1, () => {
        l[d] = null;
      }), br(), o = l[n], o ? o.p(r, f) : (o = l[n] = a[n](r), o.c()), G(o, 1), o.m(i.parentNode, i));
    },
    i(c) {
      s || (G(o), s = !0);
    },
    o(c) {
      $(o), s = !1;
    },
    d(c) {
      c && (k(e), k(i)), l[n].d(c);
    }
  };
}
function d0(t) {
  let r, e, n, o = [], i = new l0(), s, a = !1, l = (
    /*selectedComponentContext*/
    t[6] && cc(t)
  ), u = ar(
    /*animationList*/
    t[4]
  );
  const c = (f) => (
    /*item*/
    f[37]
  );
  for (let f = 0; f < u.length; f += 1) {
    let d = uc(t, u, f), g = c(d);
    i.set(g, o[f] = dc(g, d));
  }
  return {
    c() {
      r = dr(), l && l.c(), e = dr(), n = Ie("div");
      for (let f = 0; f < o.length; f += 1)
        o[f].c();
      this.h();
    },
    l(f) {
      r = _r(f), l && l.l(f), e = _r(f), n = Fe(f, "DIV", { class: !0, "aria-hidden": !0 });
      var d = ve(n);
      for (let g = 0; g < o.length; g += 1)
        o[g].l(d);
      d.forEach(k), this.h();
    },
    h() {
      p(n, "class", Ai.state__animations), p(n, "aria-hidden", "true");
    },
    m(f, d) {
      q(f, r, d), l && l.m(f, d), q(f, e, d), q(f, n, d);
      for (let g = 0; g < o.length; g += 1)
        o[g] && o[g].m(n, null);
      t[23](n), s = !0;
    },
    p(f, d) {
      /*selectedComponentContext*/
      f[6] ? l ? (l.p(f, d), d[0] & /*selectedComponentContext*/
      64 && G(l, 1)) : (l = cc(f), l.c(), G(l, 1), l.m(e.parentNode, e)) : l && (mr(), $(l, 1, 1, () => {
        l = null;
      }), br()), d[0] & /*animationList, onOutro*/
      8208 && (u = ar(
        /*animationList*/
        f[4]
      ), mr(), o = Cd(o, d, c, 1, f, u, i, n, jd, dc, null, uc), br());
    },
    i(f) {
      if (!s) {
        G(a), G(l);
        for (let d = 0; d < u.length; d += 1)
          G(o[d]);
        s = !0;
      }
    },
    o(f) {
      $(a), $(l);
      for (let d = 0; d < o.length; d += 1)
        $(o[d]);
      s = !1;
    },
    d(f) {
      f && (k(r), k(e), k(n)), l && l.d(f);
      for (let d = 0; d < o.length; d += 1)
        o[d].d();
      t[23](null);
    }
  };
}
function _0(t) {
  let r, e, n, o;
  const i = [u0, a0], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(l) {
      e && e.l(l), n = We();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (mr(), $(s[c], 1, 1, () => {
        s[c] = null;
      }), br()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function h0(t) {
  return t.some((r) => r.type === "fade");
}
function qd(t) {
  return t.type === "change_bounds" ? t : t.type === "set" ? qd(t.items[0]) : null;
}
function p0(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g = S, m = () => (g(), g = I(i, (we) => e(20, d = we)), i);
  t.$$.on_destroy.push(() => g());
  let { componentContext: h } = r, { layoutParams: y = void 0 } = r;
  const w = zr(en);
  let F = !1, R, B = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Set(), ae = [], T = [], Y = [], le = [], C, N, z, O, oe = !1, fe;
  function ce() {
    e(15, oe = !1);
  }
  function Ae(we) {
    z && z.destroy(), e(6, z = we != null && we.div ? h.produceChildContext(we.div, {
      path: we.state_id || "<unknown>"
    }) : void 0);
  }
  function _e(we) {
    const Se = h.json.states;
    if (!Se)
      return;
    const he = /* @__PURE__ */ new Set();
    e(16, u = Se.map((x, de) => (u[de].div !== we[de] && x.state_id && he.add(x.state_id), { ...x, div: we[de] }))), e(0, h.json = { ...h.json, states: u }, h), N && he.has(N) && Ae(u.find((x) => x.state_id === N) || null);
  }
  function Te(we, Se, he) {
    let { json: x, parentComponentContext: de, transitions: se, node: De } = Se;
    x = h.getJsonWithVars(x), se = h.getJsonWithVars(se);
    const tt = Jd(se), xe = Se.bbox || De.getBoundingClientRect(), ne = {
      ...x,
      margins: void 0,
      alpha: h0(tt) ? void 0 : x.alpha
    };
    return {
      id: de.id || "",
      json: ne,
      componentContextCopy: de.produceChildContext(ne, { fake: Za }),
      elementBbox: xe,
      rootBbox: we,
      transitions: tt,
      alpha: x.alpha,
      width: xe.width,
      height: xe.height,
      offsetTop: xe.top - we.top,
      offsetLeft: xe.left - we.left,
      direction: he,
      resolvePromise: Se.resolvePromise,
      node: Se.node
    };
  }
  async function ee(we) {
    if (N === we)
      return h;
    w.setRunning("stateChange", !0);
    const Se = new Set(Q);
    ae.forEach((ne) => {
      ne.resolvePromise && ne.resolvePromise();
    }), e(4, ae = []);
    let he = [];
    if (R) {
      const ne = R.getBoundingClientRect();
      he = Y.map((Ze) => Te(ne, Ze, "out"));
    }
    le.forEach((ne) => {
      ne.transitions && B.set(ne.id, {
        transitions: ne.transitions,
        rect: ne.node.getBoundingClientRect()
      });
    }), T = [], Y = [], le = [];
    const x = u.find((ne) => ne.state_id === we) || null;
    if (x ? (e(5, N = we), a == null || a.setValue(N), Ae(x)) : h.logError(K(new Error("Cannot find state with id"), { additional: { stateId: we } })), await Mn(), !R)
      return;
    const de = R.getBoundingClientRect();
    let se = T.filter((ne) => {
      var Ze;
      return ne.parentComponentContext.id && !Se.has(ne.parentComponentContext.id) ? !0 : ((Ze = ne.resolvePromise) == null || Ze.call(ne), !1);
    }).map((ne) => Te(de, ne, "in"));
    he = he.filter((ne) => {
      var Ze;
      return ne.id && !Q.has(ne.id) ? !0 : ((Ze = ne.resolvePromise) == null || Ze.call(ne), !1);
    });
    const De = he.concat(se), tt = De.reduce(
      (ne, Ze) => Math.max(ne, ac(Ze.transitions)),
      0
    ), xe = le.filter((ne) => B.has(ne.id)).map((ne) => {
      const Ze = {
        ...ne.json,
        margins: void 0,
        width: { type: "match_parent" },
        height: { type: "match_parent" }
      }, Re = B.get(ne.id);
      return {
        id: ne.parentComponentContext.id || "",
        json: Ze,
        componentContextCopy: ne.parentComponentContext.produceChildContext(Ze, { fake: Za }),
        rootBbox: de,
        beforeBbox: Re.rect,
        afterBbox: ne.node.getBoundingClientRect(),
        node: ne.node,
        transition: h.getJsonWithVars(qd(Re.transitions)),
        resolvePromise: ne.resolvePromise
      };
    });
    return e(4, ae = [
      ...De.map((ne) => ({ ...ne, maxDuration: tt })),
      ...xe
    ]), B.clear(), w.setRunning("stateChange", !1), h;
  }
  wi(ka, {
    // eslint-disable-next-line max-params
    runVisibilityTransition(we, Se, he, x, de, se) {
      if (!R)
        return Promise.resolve();
      const De = R.getBoundingClientRect(), tt = Te(
        De,
        {
          json: we,
          parentComponentContext: Se,
          transitions: he,
          node: x,
          bbox: se
        },
        de
      ), xe = ac(tt.transitions), ne = { ...tt, maxDuration: xe };
      return e(4, ae = [...ae.filter((Ze) => Ze.node !== tt.node), ne]), new Promise((Ze) => {
        ne.resolvePromise = Ze;
      });
    },
    registerChildWithTransitionIn(we, Se, he, x) {
      const de = {
        json: we,
        parentComponentContext: Se,
        transitions: he,
        node: x
      };
      return T.push(de), new Promise((se) => {
        de.resolvePromise = se;
      });
    },
    registerChildWithTransitionOut(we, Se, he, x) {
      const de = {
        json: we,
        parentComponentContext: Se,
        transitions: he,
        node: x
      };
      return Y.push(de), new Promise((se) => {
        de.resolvePromise = se;
      });
    },
    registerChildWithTransitionChange(we, Se, he, x) {
      const de = Se.id;
      if (!de)
        return Promise.resolve();
      const se = {
        id: de,
        json: we,
        parentComponentContext: Se,
        transitions: he,
        node: x
      };
      return le.push(se), new Promise((De) => {
        se.resolvePromise = De;
      });
    },
    hasTransitionChange(we) {
      return we ? B.has(we) : !1;
    },
    registerChild(we) {
      Q.add(we);
    },
    unregisterChild(we) {
      Q.delete(we);
    }
  });
  function Me(we) {
    if (!oe && (e(15, oe = !0), we.length)) {
      const Se = (a == null ? void 0 : a.getValue()) || o;
      if (Se) {
        e(5, N = Se);
        const he = we.find((x) => x.state_id === N) || null;
        Ae(he), he || h.logError(K(new Error("Cannot find state for default_state_id"), { additional: { selectedId: N } }));
      } else {
        const he = we[0];
        e(5, N = he.state_id), Ae(he);
      }
      a && (a.setValue(N), a.subscribe((he) => {
        ee(he);
      }));
    }
  }
  function Xe(we) {
    e(4, ae = ae.filter((Se) => Se !== we)), we.resolvePromise && we.resolvePromise();
  }
  cn(() => {
    z && z.destroy(), C && (C(), e(14, C = void 0));
  });
  const Qe = (we) => Xe(we), Ee = (we) => Xe(we);
  function it(we) {
    Pr[we ? "unshift" : "push"](() => {
      R = we, e(3, R);
    });
  }
  return t.$$set = (we) => {
    "componentContext" in we && e(0, h = we.componentContext), "layoutParams" in we && e(1, y = we.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*componentContext*/
    1 && e(17, n = h.json.div_id || h.id), t.$$.dirty[0] & /*componentContext*/
    1 && (o = h.getJsonWithVars(h.json.default_state_id)), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(10, i = h.getDerivedFromVars(h.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, s = h.json.state_id_variable), t.$$.dirty[0] & /*stateVariableName, componentContext*/
    524289 && (a = s ? h.getVariable(s, "string") || w.awaitGlobalVariable(s, "string", "") : null), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, l = h.origJson), t.$$.dirty[0] & /*origJson*/
    262144 && l && ce(), t.$$.dirty[0] & /*stateId, componentContext*/
    131073 && (n ? e(2, F = !1) : (e(2, F = !0), h.logError(K(new Error('Missing "id" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext*/
    1 && h.json && (Q = /* @__PURE__ */ new Set()), t.$$.dirty[0] & /*componentContext*/
    1 && e(16, u = Array.isArray(h.json.states) && h.json.states || []), t.$$.dirty[0] & /*items*/
    65536 && e(9, c = u.map((we) => {
      var Se;
      return { json: we.div, id: (Se = we.div) == null ? void 0 : Se.id };
    })), t.$$.dirty[0] & /*items, componentContext*/
    65537 && (u != null && u.length ? e(2, F = !1) : (e(2, F = !0), h.logError(K(new Error('Empty "states" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext, stateUnregister, stateId*/
    147457 && h.json && (C && (C(), e(14, C = void 0)), n && !(h != null && h.fakeElement) && e(14, C = h.registerState(n, ee))), t.$$.dirty[0] & /*inited, items*/
    98304 && !oe && Me(u), t.$$.dirty[0] & /*$jsonClipToBounds*/
    1048576 && e(8, f = {
      overflow: d === !1 || d === 0 ? "visible" : void 0
    });
  }, [
    h,
    y,
    F,
    R,
    ae,
    N,
    z,
    O,
    f,
    c,
    i,
    fe,
    _e,
    Xe,
    C,
    oe,
    u,
    n,
    l,
    s,
    d,
    Qe,
    Ee,
    it
  ];
}
class g0 extends Hr {
  constructor(r) {
    super(), Rr(this, r, p0, _0, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const m0 = "appkit-pager", b0 = "appkit-pager__items", y0 = "appkit-pager_animated", w0 = "appkit-pager__item", v0 = "appkit-pager_clip", k0 = "appkit-pager_orientation_horizontal", E0 = "appkit-pager_orientation_vertical", j0 = "appkit-pager__item_height_content", C0 = "appkit-pager__item_height_fixed", A0 = "appkit-pager__item_width_content", S0 = "appkit-pager__item_width_fixed", V0 = "appkit-pager__arrow", Lo = {
  pager: m0,
  pager__items: b0,
  pager_animated: y0,
  pager__item: w0,
  "pager_scroll-align_start": "appkit-pager_scroll-align_start",
  "pager_scroll-align_center": "appkit-pager_scroll-align_center",
  "pager_scroll-align_end": "appkit-pager_scroll-align_end",
  pager_clip: v0,
  pager_orientation_horizontal: k0,
  pager_orientation_vertical: E0,
  "pager_cross-align_center": "appkit-pager_cross-align_center",
  "pager_cross-align_end": "appkit-pager_cross-align_end",
  pager__item_height_content: j0,
  pager__item_height_fixed: C0,
  "pager__item_height-constrained": "appkit-pager__item_height-constrained",
  pager__item_width_content: A0,
  pager__item_width_fixed: S0,
  "pager__item_width-constrained": "appkit-pager__item_width-constrained",
  pager__arrow: V0,
  "pager__arrow-icon-path": "appkit-pager__arrow-icon-path"
}, { window: I0 } = Ho;
function _c(t, r, e) {
  const n = t.slice();
  return n[95] = r[e], n;
}
function D0(t) {
  let r, e;
  return r = new Rn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function F0(t) {
  let r, e;
  return r = new jn({
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
      $$slots: { default: [P0] },
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
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function hc(t) {
  let r, e, n, o, i, s, a;
  return e = new no({
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
      r = Ie("div"), Gt(e.$$.fragment), n = dr(), this.h();
    },
    l(l) {
      r = Fe(l, "DIV", {
        class: !0,
        role: !0,
        id: !0,
        "aria-labelledby": !0
      });
      var u = ve(r);
      Jt(e.$$.fragment, u), n = _r(u), u.forEach(k), this.h();
    },
    h() {
      p(r, "class", o = wt("pager__item", Lo, mc(
        /*orientation*/
        t[2],
        /*item*/
        t[95]
      ))), p(r, "role", "tabpanel"), p(r, "id", i = /*instId*/
      t[26] + "-panel-" + /*item*/
      t[95].index), p(r, "aria-labelledby", s = /*instId*/
      t[26] + "-tab-" + /*item*/
      t[95].index);
    },
    m(l, u) {
      q(l, r, u), Wt(e, r, null), yt(r, n), a = !0;
    },
    p(l, u) {
      const c = {};
      u[0] & /*visibleItems*/
      16 && (c.componentContext = /*item*/
      l[95].componentContext), u[0] & /*childLayoutParams*/
      512 && (c.layoutParams = /*childLayoutParams*/
      l[9]), e.$set(c), (!a || u[0] & /*orientation, visibleItems*/
      20 && o !== (o = wt("pager__item", Lo, mc(
        /*orientation*/
        l[2],
        /*item*/
        l[95]
      )))) && p(r, "class", o), (!a || u[0] & /*visibleItems*/
      16 && i !== (i = /*instId*/
      l[26] + "-panel-" + /*item*/
      l[95].index)) && p(r, "id", i), (!a || u[0] & /*visibleItems*/
      16 && s !== (s = /*instId*/
      l[26] + "-tab-" + /*item*/
      l[95].index)) && p(r, "aria-labelledby", s);
    },
    i(l) {
      a || (G(e.$$.fragment, l), a = !0);
    },
    o(l) {
      $(e.$$.fragment, l), a = !1;
    },
    d(l) {
      l && k(r), Ut(e);
    }
  };
}
function pc(t) {
  let r, e, n, o = !/*leftClass*/
  t[27] && T0();
  return {
    c() {
      r = Ie("div"), o && o.c(), this.h();
    },
    l(i) {
      r = Fe(i, "DIV", { class: !0 });
      var s = ve(r);
      o && o.l(s), s.forEach(k), this.h();
    },
    h() {
      p(
        r,
        "class",
        /*leftClass*/
        t[27] || `${Lo.pager__arrow} ${wo.arrow} ${wo.arrow_left}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = Je(
        r,
        "click",
        /*click_handler*/
        t[70]
      ), e = !0);
    },
    p: S,
    d(i) {
      i && k(r), o && o.d(), e = !1, n();
    }
  };
}
function T0(t) {
  let r, e;
  return {
    c() {
      r = Zr("svg"), e = Zr("path"), this.h();
    },
    l(n) {
      r = sn(n, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0
      });
      var o = ve(r);
      e = sn(o, "path", { class: !0, d: !0 }), ve(e).forEach(k), o.forEach(k), this.h();
    },
    h() {
      p(e, "class", Lo["pager__arrow-icon-path"]), p(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), p(r, "class", wo.arrow__icon), p(r, "xmlns", "http://www.w3.org/2000/svg"), p(r, "width", "32"), p(r, "height", "32"), p(r, "viewBox", "0 0 32 32"), p(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), yt(r, e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function gc(t) {
  let r, e, n, o = !/*rightClass*/
  t[28] && M0();
  return {
    c() {
      r = Ie("div"), o && o.c(), this.h();
    },
    l(i) {
      r = Fe(i, "DIV", { class: !0 });
      var s = ve(r);
      o && o.l(s), s.forEach(k), this.h();
    },
    h() {
      p(
        r,
        "class",
        /*rightClass*/
        t[28] || `${Lo.pager__arrow} ${wo.arrow} ${wo.arrow_right}`
      );
    },
    m(i, s) {
      q(i, r, s), o && o.m(r, null), e || (n = Je(
        r,
        "click",
        /*click_handler_1*/
        t[71]
      ), e = !0);
    },
    p: S,
    d(i) {
      i && k(r), o && o.d(), e = !1, n();
    }
  };
}
function M0(t) {
  let r, e;
  return {
    c() {
      r = Zr("svg"), e = Zr("path"), this.h();
    },
    l(n) {
      r = sn(n, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0
      });
      var o = ve(r);
      e = sn(o, "path", { class: !0, d: !0 }), ve(e).forEach(k), o.forEach(k), this.h();
    },
    h() {
      p(e, "class", Lo["pager__arrow-icon-path"]), p(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), p(r, "class", wo.arrow__icon), p(r, "xmlns", "http://www.w3.org/2000/svg"), p(r, "width", "32"), p(r, "height", "32"), p(r, "viewBox", "0 0 32 32"), p(r, "fill", "none");
    },
    m(n, o) {
      q(n, r, o), yt(r, e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function P0(t) {
  let r, e, n, o, i, s, a, l, u, c = ar(
    /*visibleItems*/
    t[4]
  ), f = [];
  for (let h = 0; h < c.length; h += 1)
    f[h] = hc(_c(t, c, h));
  const d = (h) => $(f[h], 1, 1, () => {
    f[h] = null;
  });
  let g = (
    /*hasScrollLeft*/
    t[11] && /*shouldCheckArrows*/
    t[12] && pc(t)
  ), m = (
    /*hasScrollRight*/
    t[10] && /*shouldCheckArrows*/
    t[12] && gc(t)
  );
  return {
    c() {
      r = Ie("div");
      for (let h = 0; h < f.length; h += 1)
        f[h].c();
      o = dr(), g && g.c(), i = dr(), m && m.c(), s = We(), this.h();
    },
    l(h) {
      r = Fe(h, "DIV", { class: !0, style: !0 });
      var y = ve(r);
      for (let w = 0; w < f.length; w += 1)
        f[w].l(y);
      y.forEach(k), o = _r(h), g && g.l(h), i = _r(h), m && m.l(h), s = We(), this.h();
    },
    h() {
      p(r, "class", e = Lo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (t[24] ? Ir["root_restrict-scroll"] : "")), p(r, "style", n = nr(
        /*style*/
        t[14]
      ));
    },
    m(h, y) {
      q(h, r, y);
      for (let w = 0; w < f.length; w += 1)
        f[w] && f[w].m(r, null);
      t[69](r), q(h, o, y), g && g.m(h, y), q(h, i, y), m && m.m(h, y), q(h, s, y), a = !0, l || (u = [
        Je(
          r,
          "transitionend",
          /*onTransitionEnd*/
          t[37]
        ),
        Je(
          r,
          "focus",
          /*onFocus*/
          t[33],
          !0
        ),
        Je(
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
        c = ar(
          /*visibleItems*/
          h[4]
        );
        let w;
        for (w = 0; w < c.length; w += 1) {
          const F = _c(h, c, w);
          f[w] ? (f[w].p(F, y), G(f[w], 1)) : (f[w] = hc(F), f[w].c(), G(f[w], 1), f[w].m(r, null));
        }
        for (mr(), w = c.length; w < f.length; w += 1)
          d(w);
        br();
      }
      (!a || y[0] & /*$jsonRestrictParentScroll*/
      16777216 && e !== (e = Lo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (h[24] ? Ir["root_restrict-scroll"] : ""))) && p(r, "class", e), (!a || y[0] & /*style*/
      16384 && n !== (n = nr(
        /*style*/
        h[14]
      ))) && p(r, "style", n), /*hasScrollLeft*/
      h[11] && /*shouldCheckArrows*/
      h[12] ? g ? g.p(h, y) : (g = pc(h), g.c(), g.m(i.parentNode, i)) : g && (g.d(1), g = null), /*hasScrollRight*/
      h[10] && /*shouldCheckArrows*/
      h[12] ? m ? m.p(h, y) : (m = gc(h), m.c(), m.m(s.parentNode, s)) : m && (m.d(1), m = null);
    },
    i(h) {
      if (!a) {
        for (let y = 0; y < c.length; y += 1)
          G(f[y]);
        a = !0;
      }
    },
    o(h) {
      f = f.filter(Boolean);
      for (let y = 0; y < f.length; y += 1)
        $(f[y]);
      a = !1;
    },
    d(h) {
      h && (k(r), k(o), k(i), k(s)), un(f, h), t[69](null), g && g.d(h), m && m.d(h), l = !1, Ur(u);
    }
  };
}
function N0(t) {
  let r, e, n, o, i, s;
  const a = [F0, D0], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[5] ? -1 : 0
    );
  }
  return ~(r = u(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(c) {
      e && e.l(c), n = We();
    },
    m(c, f) {
      ~r && l[r].m(c, f), q(c, n, f), o = !0, i || (s = Je(
        I0,
        "resize",
        /*resnap*/
        t[38]
      ), i = !0);
    },
    p(c, f) {
      let d = r;
      r = u(c), r === d ? ~r && l[r].p(c, f) : (e && (mr(), $(l[d], 1, 1, () => {
        l[d] = null;
      }), br()), ~r ? (e = l[r], e ? e.p(c, f) : (e = l[r] = a[r](c), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(c) {
      o || (G(e), o = !0);
    },
    o(c) {
      $(e), o = !1;
    },
    d(c) {
      c && k(n), ~r && l[r].d(c), i = !1, s();
    }
  };
}
const ws = {
  wrap_content: "content",
  fixed: "fixed",
  match_parent: "parent"
}, Co = 2, z0 = 400, O0 = 8;
function mc(t, r) {
  var n, o, i, s;
  if (t === "horizontal") {
    const a = ((n = r.height) == null ? void 0 : n.type) || "";
    return {
      height: a in ws ? ws[a] : "content",
      "height-constrained": ((o = r.height) == null ? void 0 : o.type) === "wrap_content" ? pn(r.height.constrained, !1) : !1
    };
  }
  const e = ((i = r.width) == null ? void 0 : i.type) || "";
  return {
    width: e in ws ? ws[e] : "parent",
    "width-constrained": ((s = r.width) == null ? void 0 : s.type) === "wrap_content" ? pn(r.width.constrained, !1) : !1
  };
}
function B0(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g, m, h, y, w, F, R, B, Q, ae, T, Y = S, le = () => (Y(), Y = I(c, (E) => e(60, T = E)), c), C, N = S, z = () => (N(), N = I(i, (E) => e(61, C = E)), i), O, oe = S, fe = () => (oe(), oe = I(f, (E) => e(62, O = E)), f), ce, Ae = S, _e = () => (Ae(), Ae = I(l, (E) => e(63, ce = E)), l), Te, ee = S, Me = () => (ee(), ee = I(a, (E) => e(64, Te = E)), a), Xe, Qe = S, Ee = () => (Qe(), Qe = I(s, (E) => e(65, Xe = E)), s), it, we = S, Se = () => (we(), we = I(Ce, (E) => e(66, it = E)), Ce), he, x = S, de = () => (x(), x = I(o, (E) => e(67, he = E)), o), se, De = S, tt = () => (De(), De = I(d, (E) => e(68, se = E)), d), xe, ne = S, Ze = () => (ne(), ne = I(u, (E) => e(24, xe = E)), u);
  t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Qe()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => x()), t.$$.on_destroy.push(() => De()), t.$$.on_destroy.push(() => ne());
  let { componentContext: Re } = r, { layoutParams: ut = void 0 } = r;
  const ct = zr(en), ft = ct.direction;
  En(t, ft, (E) => e(6, Q = E));
  const Et = ct.genId("pager"), st = ct.getCustomization("pagerLeftClass"), Lt = ct.getCustomization("pagerRightClass"), _t = ct.isDesktop;
  En(t, _t, (E) => e(59, ae = E));
  let pe, ge, gt = !1, Ce, M = 0, Ct = 0, ht = !1, Dt = "horizontal", Nt = "0em", nt = {}, X = "", It = "", zt = "", er = {}, Xt = "start", me = "center", Ue = [], mt = 0, ye = [], et = {}, Le = {}, or, Oe, kt = 0, Tt = !1, Mt = !1, hr = !1, Ne = !1, jt = 0, lr = "", rr = 0, xt;
  function yr() {
    e(43, nt = {}), e(9, er = {}), e(47, Xt = "start"), e(48, me = "center"), e(52, Tt = !1), e(53, Mt = !1), Ne = !1;
  }
  function Sr(E) {
    e(0, Re = e(51, or = {
      ...Re,
      json: {
        ...Re.json,
        items: E.filter(Uo)
      }
    }));
  }
  function Bt(E, re) {
    Oe && Oe.update({
      instId: Et,
      currentItem: Le[re],
      size: E,
      scrollToPagerItem(_) {
        Kt(et[_]);
      }
    });
  }
  function jr(E) {
    var _;
    if (E === Ct || (Ct = E, !Ue[E]))
      return;
    const re = (_ = Ue[E].json) == null ? void 0 : _.selected_actions;
    re != null && re.length && Re.execAnyActions(re);
  }
  function J(E) {
    const re = Mt ? !1 : E === 0, _ = Mt ? !1 : E === ye.length - 1, j = Dt === "horizontal", Pe = ge.children[E + (Mt ? Co : 0)];
    if (!Pe)
      return 0;
    const He = j ? "offsetLeft" : "offsetTop", Ot = j ? "offsetWidth" : "offsetHeight", H = ot(), Pt = qr(), lt = ir(), Ye = St();
    return H >= Ye + Pt + lt || re ? 0 : _ ? (H - Pt - lt - Ye) * (Q === "rtl" ? -1 : 1) : me === "start" && Q === "ltr" || me === "end" && Q === "rtl" ? -(Pe[He] - Pt) : me === "end" && Q === "ltr" || me === "start" && Q === "rtl" ? -(Pe[He] + Pe[Ot] - H + lt) : ge[Ot] / 2 - (Pe[He] + Pe[Ot] / 2);
  }
  function pt(E, re) {
    if (!ge)
      return;
    const _ = J(E);
    e(54, hr = re), Mn().then(() => {
      var j;
      jt = _, e(55, lr = At(jt)), e(40, M = (j = et[E]) != null ? j : 0), Ne = Mt && (E < 0 || E >= mt);
    });
  }
  function Kt(E, re = !0) {
    var _;
    pt((_ = Le[E]) != null ? _ : 0, re);
  }
  function At(E) {
    return `${Dt === "horizontal" ? "translateX" : "translateY"}(${hn(E)})`;
  }
  function Cr(E, re) {
    return Mt && E >= -Co && E < mt + Co ? E : E > ye.length - 1 ? re === "ring" ? Po(E, ye.length) : ye.length - 1 : E < 0 ? re === "ring" ? Po(E, ye.length) : 0 : E;
  }
  function Dr(E, re, _) {
    const j = Cr(Le[M] - E, re);
    pt(j, _);
  }
  function wr(E, re, _) {
    const j = Cr(Le[M] + E, re);
    pt(j, _);
  }
  function Mr() {
    Oe == null || Oe.destroy(), Oe = void 0, pe && (ct.unregisterInstance(pe), pe = void 0), Re.fakeElement || (Oe = Re.registerPager(Re.id || void 0)), Re.id && !Re.fakeElement && (pe = Re.id, ct.registerInstance(
      pe,
      {
        setCurrentItem(E, re) {
          if (E < 0 || E > Ue.length - 1)
            throw new Error('Item is out of range in "set-current-item" action');
          Kt(E, re);
        },
        setPreviousItem: Dr,
        setNextItem: wr,
        scrollToStart(E) {
          Kt(ye[Mt ? Co : 0].index, E);
        },
        scrollToEnd(E) {
          Kt(ye[ye.length - 1 - (Mt ? Co : 0)].index, E);
        },
        scrollCombined({ step: E, overflow: re, animated: _ }) {
          E && Kt(Cr(Le[M] + E, re || "clamp"), _);
        }
      },
      "warn"
    ));
  }
  function qr() {
    var re, _, j;
    return Dt === "horizontal" ? (_ = (re = nt.start) != null ? re : Q === "ltr" ? nt.left : nt.right) != null ? _ : 0 : (j = nt.top) != null ? j : 0;
  }
  function ir() {
    var re, _, j;
    return Dt === "horizontal" ? (_ = (re = nt.end) != null ? re : Q === "ltr" ? nt.right : nt.left) != null ? _ : 0 : (j = nt.bottom) != null ? j : 0;
  }
  function ot() {
    var re, _;
    return ge ? Dt === "horizontal" ? ((re = ge.parentElement) == null ? void 0 : re.offsetWidth) || 0 : ((_ = ge.parentElement) == null ? void 0 : _.offsetHeight) || 0 : 0;
  }
  function St() {
    const E = Dt === "horizontal", re = Array.from(ge.children), _ = re[0].getBoundingClientRect(), j = re[re.length - 1].getBoundingClientRect();
    return E ? Q === "rtl" ? _.right - j.left : j.right - _.left : j.bottom - _.top;
  }
  function $t(E) {
    const re = E.target;
    if (!(re instanceof Element) || !ge)
      return;
    let _ = re;
    for (; _.parentElement && _.parentElement !== ge; )
      _ = _.parentElement;
    if (!_)
      return;
    const j = Array.from(ge.children).indexOf(_);
    if (j < 0)
      return;
    const Pe = j - (Mt ? Co : 0);
    pt(Pe, !0);
  }
  function Qt(E) {
    Date.now() - rr < 300 && (E.preventDefault(), E.stopImmediatePropagation());
  }
  function pr(E) {
    if (!ct.pagerMouseDragEnabled && E.pointerType === "mouse")
      return;
    const re = Dt === "horizontal", _ = re ? E.pageX : E.pageY, j = jt, Pe = ot() - qr() - ir(), He = St(), Ot = Date.now(), H = (lt) => {
      const Ye = re ? lt.pageX : lt.pageY;
      let Ke = j + Ye - _;
      if (!Mt) {
        if (Q === "rtl") {
          if (Ke < 0)
            Ke = Ke * Pe / (Ke + Pe * 3);
          else if (Ke + Pe > He) {
            let qt = Ke + Pe - He;
            qt = qt * Pe / (qt + Pe * 3), Ke = -Pe + He + qt;
          }
        } else if (Q === "ltr") {
          if (Ke > 0)
            Ke = Ke * Pe / (Ke + Pe * 3);
          else if (-Ke + Pe > He) {
            let qt = -Ke + Pe - He;
            qt = qt * Pe / (qt + Pe * 3), Ke = Pe - He - qt;
          }
        }
      }
      jt = Ke, e(55, lr = At(jt)), lt.preventDefault();
    }, Pt = (lt) => {
      xt == null || xt(), xt = void 0;
      const Ye = Math.min(512, Pe), Ke = Math.abs(j - jt);
      if (Ke < O0) {
        pt(Le[M], !0);
        return;
      }
      lt.preventDefault(), rr = Date.now();
      const qt = Math.min(1, (Date.now() - Ot) / 750);
      let kr = Le[M];
      Ke > Ye / 4 * qt && (kr += (j > jt ? 1 : -1) * (Q === "rtl" ? -1 : 1)), Mt || (kr >= ye.length ? kr = ye.length - 1 : kr < 0 && (kr = 0)), pt(kr, !0);
    };
    window.addEventListener("pointermove", H), window.addEventListener("pointerup", Pt), window.addEventListener("pointercancel", Pt), xt == null || xt(), xt = () => {
      window.removeEventListener("pointermove", H), window.removeEventListener("pointerup", Pt), window.removeEventListener("pointercancel", Pt);
    };
  }
  function dt(E) {
    if (!E.deltaX || Math.abs(E.deltaX) < Math.abs(E.deltaY))
      return;
    const re = Date.now();
    if (re - kt < z0)
      return;
    kt = re, (Q === "rtl" ? -1 : 1) * E.deltaX > 0 ? wr(1, "clamp", !0) : Dr(1, "clamp", !0);
  }
  function te() {
    e(54, hr = !1), Ne && Mn().then(() => {
      Kt(M, !1);
    });
  }
  function vt() {
    Mn().then(() => {
      Kt(M, !1);
    });
  }
  ao(() => {
    e(39, gt = !0), ge && Kt(M, !1);
  }), cn(() => {
    e(39, gt = !1), xt == null || xt(), Ue.forEach((E) => {
      E.destroy();
    }), pe && (ct.unregisterInstance(pe), pe = void 0), Oe == null || Oe.destroy(), Oe = void 0;
  });
  function sr(E) {
    Pr[E ? "unshift" : "push"](() => {
      ge = E, e(7, ge);
    });
  }
  const vr = () => (Q === "ltr" ? Dr : wr)(1, "clamp", !0), ur = () => (Q === "ltr" ? wr : Dr)(1, "clamp", !0);
  return t.$$set = (E) => {
    "componentContext" in E && e(0, Re = E.componentContext), "layoutParams" in E && e(1, ut = E.layoutParams);
  }, t.$$.update = () => {
    var E, re, _, j, Pe;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(58, n = Re.origJson), t.$$.dirty[1] & /*origJson*/
    134217728 && n && yr(), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(23, o = typeof ((E = Re.json.item_builder) == null ? void 0 : E.data) == "string" ? Re.getDerivedFromVars((re = Re.json.item_builder) == null ? void 0 : re.data, void 0, !0) : (_ = Re.json.item_builder) != null && _.data ? ii(Re.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && z(e(22, i = Re.getDerivedFromVars(Re.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(21, s = Re.getDerivedFromVars(Re.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && Me(e(20, a = Re.getDerivedFromVars(Re.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(19, l = Re.getDerivedFromVars(Re.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Ze(e(18, u = Re.getDerivedFromVars(Re.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(17, c = Re.getDerivedFromVars(Re.json.cross_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(16, f = Re.getDerivedFromVars(Re.json.scroll_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && tt(e(15, d = Re.getDerivedFromVars(Re.json.infinite_scroll))), t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$jsonInfiniteScroll*/
    64 && e(52, Tt = pn(se, Tt)), t.$$.dirty[0] & /*componentContext, items*/
    9 | t.$$.dirty[1] & /*prevContext*/
    1048576 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    32) {
      let He = [];
      if (Re.json.item_builder && Array.isArray(he) && Array.isArray(Re.json.item_builder.prototypes)) {
        const lt = Re.json.item_builder;
        He = vl(he, ct, Re, lt);
      } else
        He = (Array.isArray(Re.json.items) && Re.json.items || []).map((lt, Ye) => ({
          div: lt,
          key: lt.id || { index: Ye, data: lt }
        }));
      const Ot = new Set(Ue), H = /* @__PURE__ */ new Map();
      let Pt = !1;
      or === Re && Ue.forEach((lt) => {
        lt.key && (typeof lt.key == "string" && H.has(lt.key) ? Pt || (Pt = !0, Re.logError(K(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: lt.key } }))) : H.set(
          typeof lt.key == "string" ? lt.key : lt.key.index,
          lt
        ));
      }), e(3, Ue = He.map((lt, Ye) => {
        let Ke = !Pt && H.get(lt.id), qt = H.get(Ye);
        return !Ke && !lt.id && typeof lt.key == "object" && typeof (qt == null ? void 0 : qt.key) == "object" && Qi(qt.key.data, lt.key.data) && (Ke = qt), Ke ? (Ot.delete(Ke), Ke) : Re.produceChildContext(lt.div, {
          path: Ye,
          variables: lt.vars,
          id: lt.id,
          key: lt.key
        });
      }));
      for (const lt of Ot)
        lt.destroy();
      e(51, or = Re);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    9) {
      let He = [];
      Ue.forEach((Ot) => {
        He.push(Re.getDerivedFromVars({
          width: Ot.json.width,
          height: Ot.json.height,
          visibility: Ot.json.visibility
        }));
      }), Se(e(8, Ce = Zi(He, (Ot) => [...Ot])));
    }
    if (t.$$.dirty[0] & /*items, visibleItems*/
    24 | t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$childStore*/
    16) {
      if (e(50, Le = {}), et = {}, e(4, ye = it.map((He, Ot) => ({
        width: He.width,
        height: He.height,
        index: Ot,
        componentContext: Ue[Ot]
      })).filter((He, Ot) => it[Ot].visibility !== "gone")), ye.forEach((He, Ot) => {
        et[Ot] = He.index, e(50, Le[He.index] = Ot, Le);
      }), e(49, mt = ye.length), Tt && ye.length >= Co) {
        const He = ye.slice(0, Co).map((H) => ({
          ...H,
          componentContext: H.componentContext.dup(ui),
          duplicate: !0
        })), Ot = ye.slice(ye.length - Co).map((H) => ({
          ...H,
          componentContext: H.componentContext.dup(ui),
          duplicate: !0
        }));
        He.forEach((H, Pt) => {
          et[ye.length + Pt] = Pt;
        }), Ot.forEach((H, Pt) => {
          et[Pt - Co] = ye.length - Co + Pt;
        }), e(4, ye = [].concat(Ot, ye, He)), e(53, Mt = !0);
      } else
        e(53, Mt = !1);
      vt();
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonLayoutMode*/
    1073741824 && (C ? C.type !== "percentage" && C.type !== "fixed" && C.type !== "wrap_content" ? (e(41, ht = !0), Re.logError(K(new Error('Incorrect value of "layout_mode.type" for div "pager"')))) : e(41, ht = !1) : (e(41, ht = !0), Re.logError(K(new Error('Empty "layout_mode" prop for div "pager"'))))), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[2] & /*$jsonOrientation*/
    8 && e(2, Dt = Aa(Xe, Dt)), t.$$.dirty[2] & /*$jsonItemSpacing*/
    4) {
      const He = Te == null ? void 0 : Te.value;
      He && Bn(He) && e(42, Nt = hn(He || 0));
    }
    if (t.$$.dirty[0] & /*$direction*/
    64 | t.$$.dirty[1] & /*paddingObj*/
    4096 | t.$$.dirty[2] & /*$jsonPaddings*/
    2 && (e(43, nt = ji(ce, nt)), e(44, X = yo(nt, Q))), t.$$.dirty[0] & /*orientation*/
    4 && e(57, g = Dt === "horizontal" ? "grid-auto-columns" : "grid-auto-rows"), t.$$.dirty[0] & /*orientation*/
    4 && e(56, m = Dt === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[2] & /*$jsonScrollAxisAlignment*/
    1 && (O === "start" || O === "center" || O === "end") && (e(48, me = O), vt()), t.$$.dirty[0] & /*orientation, $direction, visibleItems*/
    84 | t.$$.dirty[1] & /*paddingObj, $jsonLayoutMode, scrollAxisAlignment, itemSpacing*/
    1073879040) {
      const He = hn(Dt === "horizontal" ? (nt == null ? void 0 : nt.start) || (Q === "ltr" ? nt == null ? void 0 : nt.left : nt == null ? void 0 : nt.right) || 0 : (nt == null ? void 0 : nt.top) || 0), Ot = hn(Dt === "horizontal" ? (nt == null ? void 0 : nt.end) || (Q === "ltr" ? nt == null ? void 0 : nt.right : nt == null ? void 0 : nt.left) || 0 : (nt == null ? void 0 : nt.bottom) || 0);
      if ((C == null ? void 0 : C.type) === "fixed") {
        const H = ((j = C.neighbour_page_width) == null ? void 0 : j.value) || 0;
        me === "center" ? e(45, It = `calc(100% + ${He} + ${Ot} - 2 * ${hn(H)} - 2 * ${Nt})`) : me === "start" ? e(45, It = `calc(100% + ${Ot} - ${hn(H)} - ${Nt})`) : e(45, It = `calc(100% + ${He} - ${hn(H)} - ${Nt})`), e(46, zt = "");
      } else if ((C == null ? void 0 : C.type) === "percentage") {
        let H = (Pe = C.page_width) == null ? void 0 : Pe.value;
        (typeof H != "number" || H < 0) && (H = 100), e(45, It = `calc(${(H / 100).toFixed(2)} * (100% + ${He} + ${Ot}))`), e(46, zt = "");
      } else (C == null ? void 0 : C.type) === "wrap_content" && (e(45, It = ""), e(46, zt = ye.map((H) => {
        var Ye, Ke;
        const Pt = H[Dt === "horizontal" ? "width" : "height"];
        if ((Pt == null ? void 0 : Pt.type) === "fixed" || (Pt == null ? void 0 : Pt.type) === "wrap_content")
          return "minmax(max-content, auto)";
        let lt = "100%";
        return (Pt == null ? void 0 : Pt.type) === "match_parent" && (Bn((Ye = Pt.max_size) == null ? void 0 : Ye.value) && (lt = `min(${lt}, ${hn(Pt.max_size.value)})`), Bn((Ke = Pt.min_size) == null ? void 0 : Ke.value) && (lt = `max(${lt}, ${hn(Pt.min_size.value)})`)), lt;
      }).join(" ")));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonCrossAxisAlignment, crossAxisAlignment*/
    536936448 && (T === "start" || T === "center" || T === "end") && (e(47, Xt = T), e(9, er = {
      [Dt === "horizontal" ? "parentVAlign" : "parentHAlign"]: Xt
    })), t.$$.dirty[1] & /*itemSpacing, padding, gridAutoSizeProp, autoSizeVal, gridTemplateSizeProp, templateSizeVal, transformStr*/
    117499904 && e(14, h = {
      "grid-gap": Nt,
      padding: X,
      [g]: It,
      [m]: zt,
      transform: lr
    }), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*animated, crossAxisAlignment, scrollAxisAlignment*/
    8585216 && e(13, y = {
      animated: hr,
      clip: ct.pagerChildrenClipEnabled,
      orientation: Dt,
      "cross-align": Xt,
      "scroll-align": me
    }), t.$$.dirty[1] & /*hasLayoutModeError*/
    1024 && e(5, w = ht), t.$$.dirty[0] & /*hasError*/
    32 | t.$$.dirty[1] & /*$isDesktop, mounted*/
    268435712 && e(12, F = ae && gt && !w), t.$$.dirty[0] & /*componentContext, items*/
    9 && Re.json) {
      const He = Re.getJsonWithVars(Re.json.default_item);
      typeof He == "number" && He >= 0 && He < Ue.length && (e(40, M = Ct = He), Bt(Ue.length, He)), Mr();
    }
    t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(11, R = Mt || (Q === "ltr" ? Le[M] > 0 : Le[M] + 1 < ye.length)), t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(10, B = Mt || (Q === "ltr" ? Le[M] + 1 < ye.length : Le[M] > 0)), t.$$.dirty[1] & /*visibleItemsWithOutDuplicates, currentItem*/
    262656 && Bt(mt, M), t.$$.dirty[1] & /*currentItem*/
    512 && jr(M);
  }, [
    Re,
    ut,
    Dt,
    Ue,
    ye,
    w,
    Q,
    ge,
    Ce,
    er,
    B,
    R,
    F,
    y,
    h,
    d,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    xe,
    ft,
    Et,
    st,
    Lt,
    _t,
    Sr,
    Dr,
    wr,
    $t,
    Qt,
    pr,
    dt,
    te,
    vt,
    gt,
    M,
    ht,
    Nt,
    nt,
    X,
    It,
    zt,
    Xt,
    me,
    mt,
    Le,
    or,
    Tt,
    Mt,
    hr,
    lr,
    m,
    g,
    n,
    ae,
    T,
    C,
    O,
    ce,
    Te,
    Xe,
    it,
    he,
    se,
    sr,
    vr,
    ur
  ];
}
class L0 extends Hr {
  constructor(r) {
    super(), Rr(this, r, B0, N0, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const R0 = "appkit-indicator", H0 = "appkit-indicator_visible", W0 = "appkit-indicator__scroller", U0 = "appkit-indicator__items", G0 = "appkit-indicator__item", J0 = "appkit-indicator_placement_default", q0 = "appkit-indicator__item_active", Y0 = "appkit-indicator_direction_ltr", K0 = "appkit-indicator_direction_rtl", X0 = "appkit-indicator_placement_stretch", Si = {
  indicator: R0,
  indicator_visible: H0,
  indicator__scroller: W0,
  indicator__items: U0,
  indicator__item: G0,
  indicator_placement_default: J0,
  indicator__item_active: q0,
  indicator_direction_ltr: Y0,
  indicator_direction_rtl: K0,
  indicator_placement_stretch: X0
};
function bc(t, r, e) {
  const n = t.slice();
  n[43] = r[e], n[46] = e;
  const o = (
    /*index*/
    n[46] === /*pagerData*/
    n[8].currentItem
  );
  return n[44] = o, n;
}
function yc(t) {
  let r, e = ar(Array(
    /*pagerData*/
    t[8].size
  )), n = [];
  for (let o = 0; o < e.length; o += 1)
    n[o] = wc(bc(t, e, o));
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      r = We();
    },
    l(o) {
      for (let i = 0; i < n.length; i += 1)
        n[i].l(o);
      r = We();
    },
    m(o, i) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(o, i);
      q(o, r, i);
    },
    p(o, i) {
      if (i[0] & /*pagerData, onIndicatorItemClick, onIndicatorItemKeydown*/
      6291712) {
        e = ar(Array(
          /*pagerData*/
          o[8].size
        ));
        let s;
        for (s = 0; s < e.length; s += 1) {
          const a = bc(o, e, s);
          n[s] ? n[s].p(a, i) : (n[s] = wc(a), n[s].c(), n[s].m(r.parentNode, r));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = e.length;
      }
    },
    d(o) {
      o && k(r), un(n, o);
    }
  };
}
function wc(t) {
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
      r = Ie("div"), this.h();
    },
    l(c) {
      r = Fe(c, "DIV", {
        class: !0,
        role: !0,
        id: !0,
        "aria-controls": !0,
        "aria-selected": !0,
        tabindex: !0
      }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "class", e = wt("indicator__item", Si, { active: (
        /*isActiveItem*/
        t[44]
      ) }) + " " + Ir.root__clickable), p(r, "role", "tab"), p(r, "id", n = /*pagerData*/
      t[8].instId + "-tab-" + /*index*/
      t[46]), p(r, "aria-controls", o = /*pagerData*/
      t[8].instId + "-panel-" + /*index*/
      t[46]), p(r, "aria-selected", i = /*isActiveItem*/
      t[44] ? "true" : "false"), p(r, "tabindex", s = /*isActiveItem*/
      t[44] ? 0 : -1);
    },
    m(c, f) {
      q(c, r, f), a || (l = [
        Je(r, "click", u),
        Je(
          r,
          "keydown",
          /*onIndicatorItemKeydown*/
          t[22]
        )
      ], a = !0);
    },
    p(c, f) {
      t = c, f[0] & /*pagerData*/
      256 && e !== (e = wt("indicator__item", Si, { active: (
        /*isActiveItem*/
        t[44]
      ) }) + " " + Ir.root__clickable) && p(r, "class", e), f[0] & /*pagerData*/
      256 && n !== (n = /*pagerData*/
      t[8].instId + "-tab-" + /*index*/
      t[46]) && p(r, "id", n), f[0] & /*pagerData*/
      256 && o !== (o = /*pagerData*/
      t[8].instId + "-panel-" + /*index*/
      t[46]) && p(r, "aria-controls", o), f[0] & /*pagerData*/
      256 && i !== (i = /*isActiveItem*/
      t[44] ? "true" : "false") && p(r, "aria-selected", i), f[0] & /*pagerData*/
      256 && s !== (s = /*isActiveItem*/
      t[44] ? 0 : -1) && p(r, "tabindex", s);
    },
    d(c) {
      c && k(r), a = !1, Ur(l);
    }
  };
}
function Z0(t) {
  let r, e, n = (
    /*pagerData*/
    t[8] && yc(t)
  );
  return {
    c() {
      r = Ie("div"), e = Ie("div"), n && n.c(), this.h();
    },
    l(o) {
      r = Fe(o, "DIV", { class: !0 });
      var i = ve(r);
      e = Fe(i, "DIV", { class: !0, role: !0 });
      var s = ve(e);
      n && n.l(s), s.forEach(k), i.forEach(k), this.h();
    },
    h() {
      p(e, "class", Si.indicator__items), p(e, "role", "tablist"), P(
        e,
        "margin",
        /*placement*/
        t[4] === "default" ? `0 ${ue(Math.max(
          0,
          /*activeStyle*/
          t[2].width - /*inactiveStyle*/
          t[3].width
        ) / 2)}` : ""
      ), P(e, "--divkit-indicator-inactive-width", ue(
        /*inactiveStyle*/
        t[3].width
      )), P(e, "--divkit-indicator-inactive-height", ue(
        /*inactiveStyle*/
        t[3].height
      )), P(e, "--divkit-indicator-inactive-border-radius", ue(
        /*inactiveStyle*/
        t[3].borderRadius
      )), P(
        e,
        "--divkit-indicator-inactive-background",
        /*inactiveStyle*/
        t[3].background || ""
      ), P(
        e,
        "--divkit-indicator-inactive-box-shadow",
        /*inactiveStyle*/
        t[3].boxShadow || ""
      ), P(e, "--divkit-indicator-active-width", ue(
        /*activeStyle*/
        t[2].width
      )), P(e, "--divkit-indicator-active-height", ue(
        /*activeStyle*/
        t[2].height
      )), P(e, "--divkit-indicator-active-border-radius", ue(
        /*activeStyle*/
        t[2].borderRadius
      )), P(
        e,
        "--divkit-indicator-active-background",
        /*activeStyle*/
        t[2].background || ""
      ), P(
        e,
        "--divkit-indicator-active-box-shadow",
        /*activeStyle*/
        t[2].boxShadow || ""
      ), P(
        e,
        "--divkit-indicator-active-scale",
        /*activeStyle*/
        t[2].width / /*inactiveStyle*/
        t[3].width
      ), P(
        e,
        "--divkit-indicator-default-margin",
        /*placement*/
        t[4] === "default" ? `0 ${ue(
          /*spaceBetweenCenters*/
          (t[5] - /*inactiveStyle*/
          t[3].width) / 2
        )}` : ""
      ), P(
        e,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        t[4] === "stretch" ? ue(
          /*itemSpacing*/
          t[7]
        ) : ""
      ), P(
        e,
        "--divkit-indicator-stretch-max-count",
        /*placement*/
        t[4] === "stretch" ? (
          /*maxVisibleItems*/
          t[6]
        ) : ""
      ), P(
        e,
        "--divkit-indicator-stretch-max-spacer",
        /*placement*/
        t[4] === "stretch" ? ue(
          /*maxVisibleItems*/
          (t[6] - 1) * /*itemSpacing*/
          t[7]
        ) : ""
      ), p(r, "class", Si.indicator__scroller);
    },
    m(o, i) {
      q(o, r, i), yt(r, e), n && n.m(e, null), t[35](e), t[36](r);
    },
    p(o, i) {
      /*pagerData*/
      o[8] ? n ? n.p(o, i) : (n = yc(o), n.c(), n.m(e, null)) : n && (n.d(1), n = null), i[0] & /*placement, activeStyle, inactiveStyle*/
      28 && P(
        e,
        "margin",
        /*placement*/
        o[4] === "default" ? `0 ${ue(Math.max(
          0,
          /*activeStyle*/
          o[2].width - /*inactiveStyle*/
          o[3].width
        ) / 2)}` : ""
      ), i[0] & /*inactiveStyle*/
      8 && P(e, "--divkit-indicator-inactive-width", ue(
        /*inactiveStyle*/
        o[3].width
      )), i[0] & /*inactiveStyle*/
      8 && P(e, "--divkit-indicator-inactive-height", ue(
        /*inactiveStyle*/
        o[3].height
      )), i[0] & /*inactiveStyle*/
      8 && P(e, "--divkit-indicator-inactive-border-radius", ue(
        /*inactiveStyle*/
        o[3].borderRadius
      )), i[0] & /*inactiveStyle*/
      8 && P(
        e,
        "--divkit-indicator-inactive-background",
        /*inactiveStyle*/
        o[3].background || ""
      ), i[0] & /*inactiveStyle*/
      8 && P(
        e,
        "--divkit-indicator-inactive-box-shadow",
        /*inactiveStyle*/
        o[3].boxShadow || ""
      ), i[0] & /*activeStyle*/
      4 && P(e, "--divkit-indicator-active-width", ue(
        /*activeStyle*/
        o[2].width
      )), i[0] & /*activeStyle*/
      4 && P(e, "--divkit-indicator-active-height", ue(
        /*activeStyle*/
        o[2].height
      )), i[0] & /*activeStyle*/
      4 && P(e, "--divkit-indicator-active-border-radius", ue(
        /*activeStyle*/
        o[2].borderRadius
      )), i[0] & /*activeStyle*/
      4 && P(
        e,
        "--divkit-indicator-active-background",
        /*activeStyle*/
        o[2].background || ""
      ), i[0] & /*activeStyle*/
      4 && P(
        e,
        "--divkit-indicator-active-box-shadow",
        /*activeStyle*/
        o[2].boxShadow || ""
      ), i[0] & /*activeStyle, inactiveStyle*/
      12 && P(
        e,
        "--divkit-indicator-active-scale",
        /*activeStyle*/
        o[2].width / /*inactiveStyle*/
        o[3].width
      ), i[0] & /*placement, spaceBetweenCenters, inactiveStyle*/
      56 && P(
        e,
        "--divkit-indicator-default-margin",
        /*placement*/
        o[4] === "default" ? `0 ${ue(
          /*spaceBetweenCenters*/
          (o[5] - /*inactiveStyle*/
          o[3].width) / 2
        )}` : ""
      ), i[0] & /*placement, itemSpacing*/
      144 && P(
        e,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        o[4] === "stretch" ? ue(
          /*itemSpacing*/
          o[7]
        ) : ""
      ), i[0] & /*placement, maxVisibleItems*/
      80 && P(
        e,
        "--divkit-indicator-stretch-max-count",
        /*placement*/
        o[4] === "stretch" ? (
          /*maxVisibleItems*/
          o[6]
        ) : ""
      ), i[0] & /*placement, maxVisibleItems, itemSpacing*/
      208 && P(
        e,
        "--divkit-indicator-stretch-max-spacer",
        /*placement*/
        o[4] === "stretch" ? ue(
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
function Q0(t) {
  let r, e;
  return r = new jn({
    props: {
      cls: wt(
        "indicator",
        Si,
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
      $$slots: { default: [Z0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = wt(
        "indicator",
        Si,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
const Bl = ["rounded_rectangle", "circle"];
function x0(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g, m, h = S, y = () => (h(), h = I(c, (ge) => e(26, m = ge)), c), w, F = S, R = () => (F(), F = I(f, (ge) => e(27, w = ge)), f), B, Q = S, ae = () => (Q(), Q = I(i, (ge) => e(28, B = ge)), i), T, Y = S, le = () => (Y(), Y = I(s, (ge) => e(29, T = ge)), s), C, N = S, z = () => (N(), N = I(o, (ge) => e(30, C = ge)), o), O, oe = S, fe = () => (oe(), oe = I(a, (ge) => e(31, O = ge)), a), ce, Ae = S, _e = () => (Ae(), Ae = I(u, (ge) => e(32, ce = ge)), u), Te, ee = S, Me = () => (ee(), ee = I(l, (ge) => e(33, Te = ge)), l);
  t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => ee());
  let { componentContext: Xe } = r, { layoutParams: Qe = void 0 } = r;
  const it = zr(en).direction;
  En(t, it, (ge) => e(25, g = ge));
  let we = {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    background: "#ffdc60"
  }, Se = {
    width: 10,
    height: 10,
    borderRadius: 5,
    background: "#33919cb5"
  }, he = "default", x = 15, de = 10, se = 5, De, tt, xe, ne, Ze = !1;
  function Re() {
    e(4, he = "default"), e(5, x = 15), e(6, de = 10), e(7, se = 5), e(2, we = {
      width: 13,
      height: 13,
      borderRadius: 6.5,
      background: "#ffdc60"
    }), e(3, Se = {
      width: 10,
      height: 10,
      borderRadius: 5,
      background: "#33919cb5"
    });
  }
  async function ut(ge) {
    if (e(8, xe = ge), await Mn(), tt) {
      const gt = tt.children[xe.currentItem];
      if (gt) {
        const Ce = gt.offsetLeft;
        De.scroll({
          left: Ce - De.clientWidth / 2,
          behavior: "smooth"
        });
      }
    }
  }
  function ct(ge) {
    ge !== xe.currentItem && xe.scrollToPagerItem(ge);
  }
  function ft(ge) {
    if (ge.ctrlKey || ge.shiftKey || ge.altKey || ge.metaKey)
      return;
    const { size: gt, currentItem: Ce } = xe;
    if (ge.which === Od) {
      const M = Ce - 1 < 0 ? Ce : Ce - 1;
      Et(M);
    } else if (ge.which === Bd) {
      const M = Ce + 1 >= gt ? Ce : Ce + 1;
      Et(M);
    } else if (ge.which === Ld)
      Et(0);
    else if (ge.which === Rd)
      Et(gt - 1);
    else
      return;
    ge.preventDefault();
  }
  async function Et(ge) {
    xe.scrollToPagerItem(ge), await Mn();
    const gt = tt.querySelector(`.${Si.indicator__item_active}`);
    gt && gt.focus();
  }
  function st() {
    ne == null || ne(), ne = void 0;
    const ge = Xe.json.pager_id;
    ne = Xe.listenPager(ge, ut);
  }
  ao(() => {
    e(23, Ze = !0);
  }), cn(() => {
    e(23, Ze = !1), ne == null || ne(), ne = void 0;
  });
  const Lt = (ge) => ct(ge);
  function _t(ge) {
    Pr[ge ? "unshift" : "push"](() => {
      tt = ge, e(10, tt);
    });
  }
  function pe(ge) {
    Pr[ge ? "unshift" : "push"](() => {
      De = ge, e(9, De);
    });
  }
  return t.$$set = (ge) => {
    "componentContext" in ge && e(0, Xe = ge.componentContext), "layoutParams" in ge && e(1, Qe = ge.layoutParams);
  }, t.$$.update = () => {
    var ge, gt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(24, n = Xe.origJson), t.$$.dirty[0] & /*origJson*/
    16777216 && n && Re(), t.$$.dirty[0] & /*origJson, mounted*/
    25165824 && n && Ze && st(), t.$$.dirty[0] & /*componentContext*/
    1 && z(e(19, o = Xe.getDerivedFromVars(Xe.json.shape))), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(18, i = Xe.getDerivedFromVars(Xe.json.active_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(17, s = Xe.getDerivedFromVars(Xe.json.inactive_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(16, a = Xe.getDerivedFromVars(Xe.json.active_item_size))), t.$$.dirty[0] & /*componentContext*/
    1 && Me(e(15, l = Xe.getDerivedFromVars(Xe.json.active_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(14, u = Xe.getDerivedFromVars(Xe.json.inactive_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && y(e(13, c = Xe.getDerivedFromVars(Xe.json.space_between_centers))), t.$$.dirty[0] & /*componentContext*/
    1 && R(e(12, f = Xe.getDerivedFromVars(Xe.json.items_placement))), t.$$.dirty[0] & /*activeStyle, inactiveStyle, $jsonShape, $jsonInactiveItemColor, $jsonActiveItemColor*/
    1879048204 | t.$$.dirty[1] & /*$jsonActiveShape, $jsonInactiveShape, $jsonActiveItemSize*/
    7 && (Te && e(2, we = po(
      {
        type: "shape_drawable",
        shape: Te
      },
      Bl,
      we
    )), ce && e(3, Se = po(
      {
        type: "shape_drawable",
        shape: ce
      },
      Bl,
      Se
    )), !Te && !ce && C)) {
      const Ce = Yn(O, 1.3);
      e(3, Se = po(
        {
          type: "shape_drawable",
          shape: C,
          color: Se.background
        },
        Bl,
        Se
      )), e(3, Se.background = gr(T, 1, Se.background), Se), e(2, we = {
        ...Se,
        width: Se.width * Ce,
        height: Se.height * Ce,
        borderRadius: Se.borderRadius * Ce,
        background: we.background
      }), e(2, we.background = gr(B, 1, we.background), we);
    }
    if (t.$$.dirty[0] & /*$jsonItemsPlacement, placement, spaceBetweenCenters, maxVisibleItems, itemSpacing, $jsonSpaceBetweenCenters*/
    201326832)
      if (w && (w.type === "default" || w.type === "stretch")) {
        if (e(4, he = w.type), he === "default")
          e(5, x = ln((ge = w.space_between_centers) == null ? void 0 : ge.value, x));
        else if (he === "stretch") {
          const Ce = w;
          e(6, de = Yn(Ce.max_visible_items, de)), e(7, se = ln((gt = Ce.item_spacing) == null ? void 0 : gt.value, se));
        }
      } else
        e(4, he = "default"), m && e(5, x = ln(m.value, x));
    t.$$.dirty[0] & /*placement, $direction, pagerData*/
    33554704 && e(11, d = {
      placement: he,
      direction: g,
      visible: (xe == null ? void 0 : xe.size) > 1
    });
  }, [
    Xe,
    Qe,
    we,
    Se,
    he,
    x,
    de,
    se,
    xe,
    De,
    tt,
    d,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    it,
    ct,
    ft,
    Ze,
    n,
    g,
    m,
    w,
    B,
    T,
    C,
    O,
    ce,
    Te,
    Lt,
    _t,
    pe
  ];
}
class $0 extends Hr {
  constructor(r) {
    super(), Rr(this, r, x0, Q0, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const e1 = "appkit-slider", t1 = "appkit-slider__input", r1 = "appkit-slider__input_secondary", n1 = "appkit-slider__thumb", o1 = "appkit-slider_direction_rtl", i1 = "appkit-slider__thumb_secondary", s1 = "appkit-slider__track", l1 = "appkit-slider__tick", a1 = "appkit-slider__tick_active", u1 = "appkit-slider__tick_inactive", Gr = {
  slider: e1,
  slider__input: t1,
  slider__input_secondary: r1,
  slider__thumb: n1,
  slider_direction_rtl: o1,
  slider__thumb_secondary: i1,
  "slider__tracks-wrapper": "appkit-slider__tracks-wrapper",
  "slider__tracks-inner": "appkit-slider__tracks-inner",
  "slider__tracks-ranges": "appkit-slider__tracks-ranges",
  "slider__tracks-ranges_rtl": "appkit-slider__tracks-ranges_rtl",
  slider__track: s1,
  "slider__thumb-text": "appkit-slider__thumb-text",
  "slider__thumb-text_secondary": "appkit-slider__thumb-text_secondary",
  slider__tick: l1,
  slider__tick_active: a1,
  slider__tick_inactive: u1
};
function vc(t, r, e) {
  var a, l;
  if (!t || !t.font_size)
    return e;
  const n = t.offset, o = t.text_color && gr(t.text_color) || "#000", i = Ci(t.font_weight, t.font_weight_value, void 0), s = qi(t.font_variation_settings) || void 0;
  if (Kn(t.font_size) && o !== "transparent") {
    const u = {
      fontSize: ue(t.font_size),
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
function No(t, r, e) {
  return Math.max(r, Math.min(e, Number(t)));
}
function Va(t) {
  return BigInt(t);
}
const ps = Va("9223372036854775807"), gs = Va("-9223372036854775808");
function bn(t) {
  const r = Va(t);
  if (r > ps || r < gs)
    throw new Error("Integer overflow.");
  return r;
}
const Vi = bn(0);
function Yd(t) {
  let r = t;
  return r < 0 && (r = -r), r;
}
function Kd(t) {
  let r = 0;
  return t > 0 ? r = 1 : t < 0 && (r = -1), bn(r);
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
const c1 = 2147483647, f1 = -2147483648, d1 = Number.MAX_VALUE, _1 = Number.MIN_VALUE, Ge = "string", ze = "integer", bt = "number", Jr = "boolean", gn = "color", so = "url", Br = "datetime", cr = "dict", fr = "array", h1 = "function";
class Ia extends Error {
}
function el(t) {
  return t.type === "url" || t.type === "color" ? {
    type: "string",
    value: t.value
  } : t;
}
function Xd(t) {
  return t.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, "");
}
function Di(t, r) {
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
      return Xd(t.value);
    if (t.type === "color")
      return Ti(El(t.value));
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
function mn(t) {
  let r = Di(t, !1);
  return t.type === "string" && (r = "'" + r.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'"), r;
}
function ro(t) {
  return t === "datetime" ? "DateTime" : t.charAt(0).toUpperCase() + t.substring(1);
}
function Fi(t, r) {
  return bn(r);
}
function Ln(t, r) {
  if (r < gs || r > ps)
    throw new Error("Integer overflow.");
}
function vo(t) {
  if (typeof t != "string")
    throw new Error("Incorrect url value.");
  try {
    new URL(t);
  } catch {
    throw new Error("Incorrect url value.");
  }
}
function p1(t) {
  try {
    return vo(t), !0;
  } catch {
    return !1;
  }
}
function g1(t) {
  const r = /* @__PURE__ */ new Set();
  return uo(t, {
    Variable(e) {
      r.add(e.id.name);
    }
  }), [...r];
}
function Tn(t, r) {
  throw new Ia(`Failed to evaluate [${t}]. ${r}`);
}
function m1(t, r) {
  throw new Error(r);
}
function El(t) {
  const r = bo(t);
  if (r)
    return r;
  throw new Error("Unable to convert value to Color, expected format #AARRGGBB.");
}
function Ti(t) {
  return `#${[t.a, t.r, t.g, t.b].map((r) => {
    if (r < 0 || r > 255)
      throw new Error("Value out of range 0..1.");
    return Sd(Math.round(r).toString(16), 2);
  }).join("").toUpperCase()}`;
}
function ci(t) {
  return Ti(El(t));
}
function xl(t) {
  return {
    type: bt,
    value: Number(t.value)
  };
}
const b1 = {
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
  const n = b1[e];
  let o = typeof r;
  if (n === "array" && !Array.isArray(r) || n !== "array" && o !== n || o === "object" && r === null)
    throw o === "object" && (Array.isArray(r) ? o = "array" : r === null ? o = "null" : o = "dict"), new Error(`Incorrect value type: expected ${ro(e)}, got ${ro(o)}.`);
  if (n === "number" && e === "integer") {
    t && Ln(t, r);
    try {
      r = bn(r);
    } catch {
      throw new Error("Cannot convert value to integer.");
    }
  }
  return n === "string" && e === "color" && (r = ci(r)), n === "string" && e === "url" && vo(r), n === "boolean" && e === Jr && (r = r ? 1 : 0), {
    type: e,
    value: r
  };
}
function y1(t) {
  return t.type === "number" || t.type === "integer" ? Number(t.value) : t.type === "boolean" ? !!t.value : t.value;
}
function Cl(t) {
  return y1(
    jl(void 0, t.value, t.type)
  );
}
class xo {
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
    return this.store || (this.store = Oo(this.value)), this.store.subscribe(r);
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
class Zd extends xo {
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
class Qd extends xo {
  convertValue(r) {
    if (typeof r != "bigint" && typeof r != "number")
      throw new Error("Incorrect variable value");
    try {
      return bn(r);
    } catch {
      throw new Error("Incorrect variable value");
    }
  }
  fromString(r) {
    try {
      return bn(r);
    } catch {
      throw new Error("Incorrect variable value");
    }
  }
  getType() {
    return "integer";
  }
}
class xd extends xo {
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
class $d extends xo {
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
class e_ extends xo {
  convertValue(r) {
    if (typeof r != "string" || !bo(r))
      throw new Error("Incorrect variable value");
    return ci(r);
  }
  fromString(r) {
    return this.convertValue(r);
  }
  getType() {
    return "color";
  }
}
class t_ extends xo {
  convertValue(r) {
    if (typeof r != "string")
      throw new Error("Incorrect variable value");
    return vo(r), r;
  }
  fromString(r) {
    return vo(r), r;
  }
  getType() {
    return "url";
  }
}
class r_ extends xo {
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
class n_ extends xo {
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
const $l = {
  string: Zd,
  number: xd,
  integer: Qd,
  boolean: $d,
  color: e_,
  url: t_,
  dict: r_,
  array: n_
};
function fo(t, r, e) {
  if (!(r in $l))
    throw new Error("Unsupported variable type");
  return new $l[r](t, e);
}
function w1() {
}
function v1(t) {
  return t(this.value), w1;
}
function kc() {
  throw new Error("Cannot change the value of this type of variable");
}
class k1 extends Zd {
}
class E1 extends xd {
}
class j1 extends Qd {
}
class C1 extends $d {
}
class A1 extends e_ {
}
class S1 extends t_ {
}
class V1 extends r_ {
}
class I1 extends n_ {
}
class D1 extends xo {
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
const tl = {
  string: k1,
  number: E1,
  integer: j1,
  boolean: C1,
  color: A1,
  url: S1,
  dict: V1,
  array: I1,
  datetime: D1
};
for (const t in tl) {
  const r = tl[t];
  r.prototype.subscribe = v1, r.prototype.set = kc, r.prototype.setValue = kc;
}
function Ts(t, r, e) {
  if (!(r in tl))
    throw new Error("Unsupported variable type");
  return new tl[r](t, e);
}
function F1(t) {
  const r = t.getType();
  let e = t.getValue();
  return r === Jr && (e = e ? 1 : 0), {
    type: r,
    value: e
  };
}
function T1(t, r) {
  if (r === "string")
    return t;
  if (r === "integer")
    try {
      return bn(t);
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
    if (typeof t != "string" || !bo(t))
      throw new Error("Incorrect variable value");
    return ci(t);
  } else if (r === "url") {
    if (typeof t != "string")
      throw new Error("Incorrect variable value");
    return vo(t), t;
  } else if (r === "dict" || r === "array")
    try {
      return JSON.parse(t);
    } catch {
      throw new Error("Incorrect dict value");
    }
  throw new Error(`Unexpected type ${r}`);
}
function Ec(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function jc(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function Cc(t, r, e) {
  const n = t.slice();
  return n[90] = r[e], n;
}
function M1(t) {
  let r, e;
  return r = new Rn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function P1(t) {
  let r, e;
  return r = new jn({
    props: {
      cls: wt(
        "slider",
        Gr,
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
          N1,
          ({ focusHandler: n, blurHandler: o }) => ({ 83: n, 84: o }),
          ({ focusHandler: n, blurHandler: o }) => [0, 0, (n ? 2097152 : 0) | (o ? 4194304 : 0)]
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      16777216 && (i.cls = wt(
        "slider",
        Gr,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Ac(t) {
  let r;
  return {
    c() {
      r = Ie("div"), this.h();
    },
    l(e) {
      r = Fe(e, "DIV", { class: !0 }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "class", Gr.slider__track), P(
        r,
        "left",
        /*range*/
        t[90].left
      ), P(
        r,
        "right",
        /*range*/
        t[90].right
      ), P(
        r,
        "height",
        /*range*/
        t[90].height
      ), P(
        r,
        "border-radius",
        /*range*/
        t[90].borderRadius
      ), P(
        r,
        "background",
        /*range*/
        t[90].background
      ), P(
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
      2097152 && P(
        r,
        "left",
        /*range*/
        e[90].left
      ), n[0] & /*renderRanges*/
      2097152 && P(
        r,
        "right",
        /*range*/
        e[90].right
      ), n[0] & /*renderRanges*/
      2097152 && P(
        r,
        "height",
        /*range*/
        e[90].height
      ), n[0] & /*renderRanges*/
      2097152 && P(
        r,
        "border-radius",
        /*range*/
        e[90].borderRadius
      ), n[0] & /*renderRanges*/
      2097152 && P(
        r,
        "background",
        /*range*/
        e[90].background
      ), n[0] & /*renderRanges*/
      2097152 && P(
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
function Sc(t) {
  let r;
  return {
    c() {
      r = Ie("div"), this.h();
    },
    l(e) {
      r = Fe(e, "DIV", { class: !0 }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "class", Gr.slider__tick + " " + Gr.slider__tick_active), P(
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
      131072 && P(
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
function Vc(t) {
  let r;
  return {
    c() {
      r = Ie("div"), this.h();
    },
    l(e) {
      r = Fe(e, "DIV", { class: !0 }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "class", Gr.slider__tick + " " + Gr.slider__tick_inactive), P(
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
      262144 && P(
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
function Ic(t) {
  let r, e, n;
  return {
    c() {
      r = Ie("div"), e = Ie("div"), n = On(
        /*value*/
        t[11]
      ), this.h();
    },
    l(o) {
      r = Fe(o, "DIV", { class: !0 });
      var i = ve(r);
      e = Fe(i, "DIV", { class: !0 });
      var s = ve(e);
      n = Un(
        s,
        /*value*/
        t[11]
      ), s.forEach(k), i.forEach(k), this.h();
    },
    h() {
      var o, i, s, a, l;
      p(e, "class", Gr["slider__thumb-text-inner"]), P(
        e,
        "font-size",
        /*textStyle*/
        ((o = t[7]) == null ? void 0 : o.fontSize) || "1em"
      ), P(
        e,
        "font-weight",
        /*textStyle*/
        ((i = t[7]) == null ? void 0 : i.fontWeight) || ""
      ), P(
        e,
        "font-family",
        /*textStyle*/
        ((s = t[7]) == null ? void 0 : s.fontFamily) || ""
      ), P(
        e,
        "font-variation-settings",
        /*textStyle*/
        ((a = t[7]) == null ? void 0 : a.fontVariationSettings) || ""
      ), P(
        e,
        "color",
        /*textStyle*/
        ((l = t[7]) == null ? void 0 : l.textColor) || "#000"
      ), p(r, "class", Gr["slider__thumb-text"]);
    },
    m(o, i) {
      q(o, r, i), yt(r, e), yt(e, n);
    },
    p(o, i) {
      var s, a, l, u, c;
      i[0] & /*value*/
      2048 && to(
        n,
        /*value*/
        o[11]
      ), i[0] & /*textStyle*/
      128 && P(
        e,
        "font-size",
        /*textStyle*/
        ((s = o[7]) == null ? void 0 : s.fontSize) || "1em"
      ), i[0] & /*textStyle*/
      128 && P(
        e,
        "font-weight",
        /*textStyle*/
        ((a = o[7]) == null ? void 0 : a.fontWeight) || ""
      ), i[0] & /*textStyle*/
      128 && P(
        e,
        "font-family",
        /*textStyle*/
        ((l = o[7]) == null ? void 0 : l.fontFamily) || ""
      ), i[0] & /*textStyle*/
      128 && P(
        e,
        "font-variation-settings",
        /*textStyle*/
        ((u = o[7]) == null ? void 0 : u.fontVariationSettings) || ""
      ), i[0] & /*textStyle*/
      128 && P(
        e,
        "color",
        /*textStyle*/
        ((c = o[7]) == null ? void 0 : c.textColor) || "#000"
      );
    },
    d(o) {
      o && k(r);
    }
  };
}
function Dc(t) {
  let r, e = (
    /*textSecondaryStyle*/
    t[8] && Fc(t)
  );
  return {
    c() {
      r = Ie("div"), e && e.c(), this.h();
    },
    l(n) {
      r = Fe(n, "DIV", { class: !0 });
      var o = ve(r);
      e && e.l(o), o.forEach(k), this.h();
    },
    h() {
      p(r, "class", Gr.slider__thumb + " " + Gr.slider__thumb_secondary), P(r, "border-radius", ue(
        /*thumbSecondaryStyle*/
        t[6].borderRadius
      )), P(
        r,
        "background",
        /*thumbSecondaryStyle*/
        t[6].background
      ), P(
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
      n[8] ? e ? e.p(n, o) : (e = Fc(n), e.c(), e.m(r, null)) : e && (e.d(1), e = null), o[0] & /*thumbSecondaryStyle*/
      64 && P(r, "border-radius", ue(
        /*thumbSecondaryStyle*/
        n[6].borderRadius
      )), o[0] & /*thumbSecondaryStyle*/
      64 && P(
        r,
        "background",
        /*thumbSecondaryStyle*/
        n[6].background
      ), o[0] & /*thumbSecondaryStyle*/
      64 && P(
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
function Fc(t) {
  let r, e, n;
  return {
    c() {
      r = Ie("div"), e = Ie("div"), n = On(
        /*value2*/
        t[12]
      ), this.h();
    },
    l(o) {
      r = Fe(o, "DIV", { class: !0 });
      var i = ve(r);
      e = Fe(i, "DIV", { class: !0 });
      var s = ve(e);
      n = Un(
        s,
        /*value2*/
        t[12]
      ), s.forEach(k), i.forEach(k), this.h();
    },
    h() {
      var o, i, s, a, l;
      p(e, "class", Gr["slider__thumb-text-inner"]), P(
        e,
        "font-size",
        /*textSecondaryStyle*/
        ((o = t[8]) == null ? void 0 : o.fontSize) || "1em"
      ), P(
        e,
        "font-weight",
        /*textSecondaryStyle*/
        ((i = t[8]) == null ? void 0 : i.fontWeight) || ""
      ), P(
        e,
        "font-family",
        /*textSecondaryStyle*/
        ((s = t[8]) == null ? void 0 : s.fontFamily) || ""
      ), P(
        e,
        "font-variation-settings",
        /*textSecondaryStyle*/
        ((a = t[8]) == null ? void 0 : a.fontVariationSettings) || ""
      ), P(
        e,
        "color",
        /*textSecondaryStyle*/
        ((l = t[8]) == null ? void 0 : l.textColor) || "#000"
      ), p(r, "class", Gr["slider__thumb-text"] + " " + Gr["slider__thumb-text_secondary"]);
    },
    m(o, i) {
      q(o, r, i), yt(r, e), yt(e, n);
    },
    p(o, i) {
      var s, a, l, u, c;
      i[0] & /*value2*/
      4096 && to(
        n,
        /*value2*/
        o[12]
      ), i[0] & /*textSecondaryStyle*/
      256 && P(
        e,
        "font-size",
        /*textSecondaryStyle*/
        ((s = o[8]) == null ? void 0 : s.fontSize) || "1em"
      ), i[0] & /*textSecondaryStyle*/
      256 && P(
        e,
        "font-weight",
        /*textSecondaryStyle*/
        ((a = o[8]) == null ? void 0 : a.fontWeight) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && P(
        e,
        "font-family",
        /*textSecondaryStyle*/
        ((l = o[8]) == null ? void 0 : l.fontFamily) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && P(
        e,
        "font-variation-settings",
        /*textSecondaryStyle*/
        ((u = o[8]) == null ? void 0 : u.fontVariationSettings) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && P(
        e,
        "color",
        /*textSecondaryStyle*/
        ((c = o[8]) == null ? void 0 : c.textColor) || "#000"
      );
    },
    d(o) {
      o && k(r);
    }
  };
}
function Tc(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Ie("input"), this.h();
    },
    l(a) {
      r = Fe(a, "INPUT", {
        type: !0,
        class: !0,
        min: !0,
        max: !0,
        step: !0,
        "aria-label": !0
      }), this.h();
    },
    h() {
      p(r, "type", "range"), p(r, "class", e = /*switchedTracks*/
      t[16] ? Gr.slider__input : `${Gr.slider__input} ${Gr.slider__input_secondary}`), p(
        r,
        "min",
        /*minValue*/
        t[3]
      ), p(
        r,
        "max",
        /*maxValue*/
        t[4]
      ), p(r, "step", "1"), r.value = n = /*switchedTracks*/
      t[16] ? (
        /*value*/
        t[11]
      ) : (
        /*value2*/
        t[12]
      ), r.disabled = o = !/*isEnabled*/
      t[9], p(
        r,
        "aria-label",
        /*secondaryDescription*/
        t[20]
      );
    },
    m(a, l) {
      q(a, r, l), i || (s = [
        Je(
          r,
          "input",
          /*input_handler_1*/
          t[75]
        ),
        Je(r, "mousedown", function() {
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
        Je(r, "touchstart", function() {
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
        Je(r, "focus", function() {
          Lr(
            /*focusHandler*/
            t[83]
          ) && t[83].apply(this, arguments);
        }),
        Je(r, "blur", function() {
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
      t[16] ? Gr.slider__input : `${Gr.slider__input} ${Gr.slider__input_secondary}`) && p(r, "class", e), l[0] & /*minValue*/
      8 && p(
        r,
        "min",
        /*minValue*/
        t[3]
      ), l[0] & /*maxValue*/
      16 && p(
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
      1048576 && p(
        r,
        "aria-label",
        /*secondaryDescription*/
        t[20]
      );
    },
    d(a) {
      a && k(r), i = !1, Ur(s);
    }
  };
}
function N1(t) {
  let r, e, n, o, i, s, a, l, u, c, f, d, g, m, h, y, w, F = ar(
    /*renderRanges*/
    t[21]
  ), R = [];
  for (let N = 0; N < F.length; N += 1)
    R[N] = Ac(Cc(t, F, N));
  let B = ar(
    /*markActiveTicks*/
    t[17]
  ), Q = [];
  for (let N = 0; N < B.length; N += 1)
    Q[N] = Sc(jc(t, B, N));
  let ae = ar(
    /*markInactiveTicks*/
    t[18]
  ), T = [];
  for (let N = 0; N < ae.length; N += 1)
    T[N] = Vc(Ec(t, ae, N));
  let Y = (
    /*textStyle*/
    t[7] && Ic(t)
  ), le = (
    /*secondVariable*/
    t[13] && Dc(t)
  ), C = (
    /*secondVariable*/
    t[13] && Tc(t)
  );
  return {
    c() {
      r = Ie("div"), e = Ie("div"), n = Ie("div");
      for (let N = 0; N < R.length; N += 1)
        R[N].c();
      i = dr();
      for (let N = 0; N < Q.length; N += 1)
        Q[N].c();
      s = dr();
      for (let N = 0; N < T.length; N += 1)
        T[N].c();
      a = dr(), l = Ie("div"), Y && Y.c(), u = dr(), le && le.c(), c = dr(), f = Ie("input"), h = dr(), C && C.c(), this.h();
    },
    l(N) {
      r = Fe(N, "DIV", { class: !0 });
      var z = ve(r);
      e = Fe(z, "DIV", { class: !0 });
      var O = ve(e);
      n = Fe(O, "DIV", { class: !0 });
      var oe = ve(n);
      for (let ce = 0; ce < R.length; ce += 1)
        R[ce].l(oe);
      oe.forEach(k), i = _r(O);
      for (let ce = 0; ce < Q.length; ce += 1)
        Q[ce].l(O);
      s = _r(O);
      for (let ce = 0; ce < T.length; ce += 1)
        T[ce].l(O);
      a = _r(O), l = Fe(O, "DIV", { class: !0 });
      var fe = ve(l);
      Y && Y.l(fe), fe.forEach(k), u = _r(O), le && le.l(O), c = _r(O), f = Fe(O, "INPUT", {
        type: !0,
        class: !0,
        min: !0,
        max: !0,
        step: !0,
        "aria-label": !0
      }), h = _r(O), C && C.l(O), O.forEach(k), z.forEach(k), this.h();
    },
    h() {
      p(n, "class", o = Gr["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Gr["slider__tracks-ranges_rtl"] : "")), p(l, "class", Gr.slider__thumb), P(l, "border-radius", ue(
        /*thumbStyle*/
        t[5].borderRadius
      )), P(
        l,
        "background",
        /*thumbStyle*/
        t[5].background
      ), P(
        l,
        "box-shadow",
        /*thumbStyle*/
        t[5].boxShadow || ""
      ), p(f, "type", "range"), p(f, "class", d = /*switchedTracks*/
      t[16] ? `${Gr.slider__input} ${Gr.slider__input_secondary}` : Gr.slider__input), p(
        f,
        "min",
        /*minValue*/
        t[3]
      ), p(
        f,
        "max",
        /*maxValue*/
        t[4]
      ), p(f, "step", "1"), f.value = g = /*switchedTracks*/
      t[16] ? (
        /*value2*/
        t[12]
      ) : (
        /*value*/
        t[11]
      ), f.disabled = m = !/*isEnabled*/
      t[9], p(
        f,
        "aria-label",
        /*description*/
        t[19]
      ), p(e, "class", Gr["slider__tracks-inner"]), p(r, "class", Gr["slider__tracks-wrapper"]);
    },
    m(N, z) {
      q(N, r, z), yt(r, e), yt(e, n);
      for (let O = 0; O < R.length; O += 1)
        R[O] && R[O].m(n, null);
      yt(e, i);
      for (let O = 0; O < Q.length; O += 1)
        Q[O] && Q[O].m(e, null);
      yt(e, s);
      for (let O = 0; O < T.length; O += 1)
        T[O] && T[O].m(e, null);
      yt(e, a), yt(e, l), Y && Y.m(l, null), yt(e, u), le && le.m(e, null), yt(e, c), yt(e, f), t[74](f), yt(e, h), C && C.m(e, null), t[76](e), y || (w = [
        Je(
          f,
          "input",
          /*input_handler*/
          t[73]
        ),
        Je(f, "focus", function() {
          Lr(
            /*focusHandler*/
            t[83]
          ) && t[83].apply(this, arguments);
        }),
        Je(f, "blur", function() {
          Lr(
            /*blurHandler*/
            t[84]
          ) && t[84].apply(this, arguments);
        })
      ], y = !0);
    },
    p(N, z) {
      if (t = N, z[0] & /*renderRanges*/
      2097152) {
        F = ar(
          /*renderRanges*/
          t[21]
        );
        let O;
        for (O = 0; O < F.length; O += 1) {
          const oe = Cc(t, F, O);
          R[O] ? R[O].p(oe, z) : (R[O] = Ac(oe), R[O].c(), R[O].m(n, null));
        }
        for (; O < R.length; O += 1)
          R[O].d(1);
        R.length = F.length;
      }
      if (z[0] & /*$direction*/
      16384 && o !== (o = Gr["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Gr["slider__tracks-ranges_rtl"] : "")) && p(n, "class", o), z[0] & /*markActiveTicks*/
      131072) {
        B = ar(
          /*markActiveTicks*/
          t[17]
        );
        let O;
        for (O = 0; O < B.length; O += 1) {
          const oe = jc(t, B, O);
          Q[O] ? Q[O].p(oe, z) : (Q[O] = Sc(oe), Q[O].c(), Q[O].m(e, s));
        }
        for (; O < Q.length; O += 1)
          Q[O].d(1);
        Q.length = B.length;
      }
      if (z[0] & /*markInactiveTicks*/
      262144) {
        ae = ar(
          /*markInactiveTicks*/
          t[18]
        );
        let O;
        for (O = 0; O < ae.length; O += 1) {
          const oe = Ec(t, ae, O);
          T[O] ? T[O].p(oe, z) : (T[O] = Vc(oe), T[O].c(), T[O].m(e, a));
        }
        for (; O < T.length; O += 1)
          T[O].d(1);
        T.length = ae.length;
      }
      /*textStyle*/
      t[7] ? Y ? Y.p(t, z) : (Y = Ic(t), Y.c(), Y.m(l, null)) : Y && (Y.d(1), Y = null), z[0] & /*thumbStyle*/
      32 && P(l, "border-radius", ue(
        /*thumbStyle*/
        t[5].borderRadius
      )), z[0] & /*thumbStyle*/
      32 && P(
        l,
        "background",
        /*thumbStyle*/
        t[5].background
      ), z[0] & /*thumbStyle*/
      32 && P(
        l,
        "box-shadow",
        /*thumbStyle*/
        t[5].boxShadow || ""
      ), /*secondVariable*/
      t[13] ? le ? le.p(t, z) : (le = Dc(t), le.c(), le.m(e, c)) : le && (le.d(1), le = null), z[0] & /*switchedTracks*/
      65536 && d !== (d = /*switchedTracks*/
      t[16] ? `${Gr.slider__input} ${Gr.slider__input_secondary}` : Gr.slider__input) && p(f, "class", d), z[0] & /*minValue*/
      8 && p(
        f,
        "min",
        /*minValue*/
        t[3]
      ), z[0] & /*maxValue*/
      16 && p(
        f,
        "max",
        /*maxValue*/
        t[4]
      ), z[0] & /*switchedTracks, value2, value*/
      71680 && g !== (g = /*switchedTracks*/
      t[16] ? (
        /*value2*/
        t[12]
      ) : (
        /*value*/
        t[11]
      )) && (f.value = g), z[0] & /*isEnabled*/
      512 && m !== (m = !/*isEnabled*/
      t[9]) && (f.disabled = m), z[0] & /*description*/
      524288 && p(
        f,
        "aria-label",
        /*description*/
        t[19]
      ), /*secondVariable*/
      t[13] ? C ? C.p(t, z) : (C = Tc(t), C.c(), C.m(e, null)) : C && (C.d(1), C = null);
    },
    d(N) {
      N && k(r), un(R, N), un(Q, N), un(T, N), Y && Y.d(), le && le.d(), t[74](null), C && C.d(), t[76](null), y = !1, Ur(w);
    }
  };
}
function z1(t) {
  let r, e, n, o, i, s;
  const a = [P1, M1], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[10] ? -1 : 0
    );
  }
  return ~(r = u(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(c) {
      e && e.l(c), n = We();
    },
    m(c, f) {
      ~r && l[r].m(c, f), q(c, n, f), o = !0, i || (s = Je(
        window,
        "resize",
        /*checkTicksDebounced*/
        t[43]
      ), i = !0);
    },
    p(c, f) {
      let d = r;
      r = u(c), r === d ? ~r && l[r].p(c, f) : (e && (mr(), $(l[d], 1, 1, () => {
        l[d] = null;
      }), br()), ~r ? (e = l[r], e ? e.p(c, f) : (e = l[r] = a[r](c), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(c) {
      o || (G(e), o = !0);
    },
    o(c) {
      $(e), o = !1;
    },
    d(c) {
      c && k(n), ~r && l[r].d(c), i = !1, s();
    }
  };
}
const io = {
  width: 10,
  height: 10,
  borderRadius: 5,
  background: "#000"
}, vs = ["rounded_rectangle", "circle"], Ll = ["rounded_rectangle"];
function ks(t, r, e, n, o) {
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
function O1(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g, m, h, y, w, F, R, B, Q, ae, T, Y, le, C, N, z, O, oe, fe, ce = S, Ae = () => (ce(), ce = I(Q, (E) => e(57, fe = E)), Q), _e, Te = S, ee = () => (Te(), Te = I(R, (E) => e(58, _e = E)), R), Me, Xe = S, Qe = () => (Xe(), Xe = I(B, (E) => e(59, Me = E)), B), Ee, it = S, we = () => (it(), it = I(F, (E) => e(60, Ee = E)), F), Se, he = S, x = () => (he(), he = I(w, (E) => e(61, Se = E)), w), de, se = S, De = () => (se(), se = I(y, (E) => e(62, de = E)), y), tt, xe = S, ne = () => (xe(), xe = I(h, (E) => e(63, tt = E)), h), Ze, Re = S, ut = () => (Re(), Re = I(m, (E) => e(64, Ze = E)), m), ct, ft = S, Et = () => (ft(), ft = I(g, (E) => e(65, ct = E)), g), st, Lt = S, _t = () => (Lt(), Lt = I(d, (E) => e(66, st = E)), d), pe, ge = S, gt = () => (ge(), ge = I(f, (E) => e(67, pe = E)), f), Ce, M = S, Ct = () => (M(), M = I(c, (E) => e(68, Ce = E)), c), ht, Dt = S, Nt = () => (Dt(), Dt = I(a, (E) => e(69, ht = E)), a), nt, X = S, It = () => (X(), X = I(s, (E) => e(70, nt = E)), s), zt, er = S, Xt = () => (er(), er = I(u, (E) => e(71, zt = E)), u), me, Ue = S, mt = () => (Ue(), Ue = I(l, (E) => e(72, me = E)), l);
  t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => Te()), t.$$.on_destroy.push(() => Xe()), t.$$.on_destroy.push(() => it()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => Re()), t.$$.on_destroy.push(() => ft()), t.$$.on_destroy.push(() => Lt()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => Dt()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => er()), t.$$.on_destroy.push(() => Ue());
  let { componentContext: ye } = r, { layoutParams: et = void 0 } = r;
  const Le = zr(en), or = zr(Bo), Oe = Le.direction;
  En(t, Oe, (E) => e(14, oe = E));
  let kt, Tt, Mt, hr = !1, Ne = 0, jt = 100, lr = io, rr = lr, xt = io, yr = io, Sr, Bt = null, jr, J = null, pt, Kt = pt, At = "", Cr = "", Dr = !0, wr = !1, Mr = [];
  function qr() {
    e(5, lr = io), e(6, rr = lr), e(45, xt = io), e(46, yr = io), e(47, Bt = null), e(48, J = null), e(7, pt = void 0), e(8, Kt = void 0), e(19, At = ""), e(9, Dr = !0), e(20, Cr = "");
  }
  let ir = No(nt || 0, Ne, jt), ot = No(ht || 0, Ne, jt);
  function St({ direction: E, minValue: re, maxValue: _, trackActiveOffset: j, trackActivePart: Pe, trackInactiveStyle: He, trackActiveStyle: Ot, ranges: H = [] }) {
    const Pt = [], lt = (Ke, qt, kr) => {
      var fn, tn, je, yn;
      const Qr = (rn, wn, v, A) => {
        var W, $e, Ve, Zt;
        const V = Math.max(rn, qt);
        if (Math.min(wn, kr) - V > 0) {
          const Ft = A && ($e = (W = A[E === "ltr" ? "start" : "end"]) != null ? W : A.left) != null ? $e : 0, Be = A && (Zt = (Ve = A[E === "ltr" ? "end" : "start"]) != null ? Ve : A.right) != null ? Zt : 0;
          Pt.push({
            left: rn,
            right: wn,
            totalLeft: qt,
            totalRight: kr,
            leftMargin: Ft,
            rightMargin: Be,
            style: v
          });
        }
      };
      if ((!H[0] || ((fn = H[0].start) != null ? fn : re) > qt) && Qr(qt, H[0] ? (tn = H[0].start) != null ? tn : re : kr, Ke === "inactive" ? He : Ot), H.forEach((rn, wn) => {
        var Zt, Ft, Be, tr;
        const v = rn[Ke === "inactive" ? "track_inactive_style" : "track_active_style"], V = v ? po(v, Ll, io) : Ke === "inactive" ? He : Ot, ie = H[wn - 1], W = H[wn + 1], $e = (Ft = (Zt = rn.start) != null ? Zt : ie == null ? void 0 : ie.end) != null ? Ft : qt, Ve = (tr = (Be = rn.end) != null ? Be : W == null ? void 0 : W.start) != null ? tr : kr;
        Qr($e, Ve, V, rn.margins);
      }), H[H.length - 1] && ((je = H[H.length - 1].end) != null ? je : _) < kr) {
        const rn = (yn = H[H.length - 1].end) != null ? yn : _;
        Qr(rn, kr, Ke === "inactive" ? He : Ot);
      }
    };
    lt("inactive", re, _), lt("active", j, j + Pe);
    const Ye = _ - re;
    e(21, Mr = Pt.map((Ke) => {
      let qt = `${(Ke.left - re) * 100 / Ye}%`;
      Ke.leftMargin && (qt = `calc(${qt} + ${hn(Ke.leftMargin)})`);
      let kr;
      Ke.totalLeft < Ke.left ? kr = qt : Ke.leftMargin ? kr = `max(${(Ke.totalLeft - re) * 100 / Ye}%, ${qt})` : kr = `${(Math.max(Ke.totalLeft, Ke.left) - re) * 100 / Ye}%`;
      let Qr = `${(1 - (Ke.right - re) / Ye) * 100}%`;
      Ke.rightMargin && (Qr = `calc(${Qr} + ${hn(Ke.rightMargin)})`);
      let fn;
      return Ke.totalRight > Ke.right ? fn = Qr : Ke.rightMargin ? fn = `max(${(1 - (Ke.totalRight - re) / Ye) * 100}%, ${Qr})` : fn = `${(1 - (Math.max(Ke.totalRight, Ke.right) - re) / Ye) * 100}%`, {
        left: kr,
        right: fn,
        height: ue(Ke.style.height),
        borderRadius: ue(Ke.style.borderRadius),
        background: Ke.style.background,
        boxShadow: Ke.style.boxShadow || ""
      };
    }));
  }
  function $t(E) {
    var H, Pt;
    if (!Dr)
      return;
    const re = "pageX" in E ? E.pageX : (Pt = (H = E.changedTouches) == null ? void 0 : H[0]) == null ? void 0 : Pt.pageX;
    if (re === void 0)
      return;
    const _ = Mt.getBoundingClientRect();
    let j = (re - _.left) / _.width;
    oe === "rtl" && (j = 1 - j);
    const Pe = Ne + (jt - Ne) * j, He = Math.round(No(Pe, Ne, jt)), Ot = (ir + ot) / 2;
    e(16, hr = He < Ot == ir < ot);
  }
  function Qt(E, re) {
    const _ = Number(E.target.value);
    hr === (re === "first") ? (e(12, ot = _), a.setValue(_)) : (e(11, ir = _), s.setValue(_));
  }
  let pr = !1;
  function dt() {
    if (!Mt)
      return;
    const E = jt - Ne, re = (Bt == null ? void 0 : Bt.width) || 0, _ = (J == null ? void 0 : J.width) || 0;
    Math.max(re, _) * E >= (Mt == null ? void 0 : Mt.clientWidth) ? pr || (ye.logError(K(new Error("Slider ticks overlap each other"), { level: "warn" })), pr = !0) : pr = !1;
  }
  const te = Ca(dt, 50);
  ao(() => {
    dt();
  }), cn(() => {
    kt && (Le.unregisterFocusable(kt), e(44, kt = void 0));
  });
  const vt = (E) => Qt(E, "first");
  function sr(E) {
    Pr[E ? "unshift" : "push"](() => {
      Tt = E, e(2, Tt);
    });
  }
  const vr = (E) => Qt(E, "second");
  function ur(E) {
    Pr[E ? "unshift" : "push"](() => {
      Mt = E, e(15, Mt);
    });
  }
  return t.$$set = (E) => {
    "componentContext" in E && e(0, ye = E.componentContext), "layoutParams" in E && e(1, et = E.layoutParams);
  }, t.$$.update = () => {
    var E, re, _, j;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(56, n = ye.origJson), t.$$.dirty[1] & /*origJson*/
    33554432 && n && qr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, o = ye.json.thumb_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(13, i = ye.json.thumb_secondary_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*firstVariable*/
    16777216 && It(e(22, s = o && (ye.getVariable(o, "integer") || Le.awaitGlobalVariable(o, "integer", 0)) || fo("temp", "integer", 0))), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 && Nt(e(23, a = i && (ye.getVariable(i, "integer") || Le.awaitGlobalVariable(i, "integer", 0)) || fo("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && mt(e(39, l = ye.getDerivedFromVars(ye.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Xt(e(38, u = ye.getDerivedFromVars(ye.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Ct(e(37, c = ye.getDerivedFromVars(ye.json.thumb_style))), t.$$.dirty[0] & /*componentContext*/
    1 && gt(e(36, f = ye.getDerivedFromVars(ye.json.thumb_secondary_style))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(35, d = ye.getDerivedFromVars(ye.json.track_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && Et(e(34, g = ye.getDerivedFromVars(ye.json.track_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(33, m = ye.getDerivedFromVars(ye.json.tick_mark_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(32, h = ye.getDerivedFromVars(ye.json.tick_mark_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && De(e(31, y = ye.getDerivedFromVars(ye.json.thumb_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && x(e(30, w = ye.getDerivedFromVars(ye.json.thumb_secondary_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && we(e(29, F = ye.getDerivedFromVars(ye.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && ee(e(28, R = ye.getDerivedFromVars(ye.json.secondary_value_accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Qe(e(27, B = ye.getDerivedFromVars(ye.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(26, Q = ye.getDerivedFromVars(ye.json.ranges))), t.$$.dirty[0] & /*minValue, maxValue*/
    24 | t.$$.dirty[2] & /*$jsonMinValue, $jsonMaxValue*/
    1536 && (e(3, Ne = co(me, Ne)), e(4, jt = co(zt, jt)), dt()), t.$$.dirty[0] & /*minValue, maxValue, value*/
    2072 | t.$$.dirty[2] & /*$valueVariable*/
    256) {
      const Pe = No(nt || 0, Ne, jt);
      Pe !== ir && e(11, ir = Pe);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue, value2*/
    4120 | t.$$.dirty[2] & /*$value2Variable*/
    128) {
      const Pe = No(ht || 0, Ne, jt);
      Pe !== ot && e(12, ot = Pe);
    }
    if (t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbStyle*/
    64 && e(5, lr = po(Ce, vs, lr)), t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbSecondaryStyle*/
    32 && e(6, rr = po(pe, vs, lr)), t.$$.dirty[1] & /*trackInactiveStyle*/
    16384 | t.$$.dirty[2] & /*$jsonTrackInactiveStyle*/
    16 && e(45, xt = po(st, Ll, xt)), t.$$.dirty[1] & /*trackActiveStyle*/
    32768 | t.$$.dirty[2] & /*$jsonTrackActiveStyle*/
    8 && e(46, yr = po(ct, Ll, yr)), t.$$.dirty[2] & /*$jsonMarkActiveStyle*/
    4) {
      let Pe = po(Ze, vs, io);
      Pe !== io && e(47, Bt = Pe);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markActiveStyle*/
    65536 && (Bt ? (e(17, Sr = i ? ks(Math.min(ir, ot), Math.max(ir, ot) + 1, Ne, jt, !0) : ks(Ne, ir, Ne, jt, !0)), dt()) : e(17, Sr = [])), t.$$.dirty[2] & /*$jsonMarkInactiveStyle*/
    2) {
      let Pe = po(tt, vs, io);
      Pe !== io && e(48, J = Pe);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markInactiveStyle*/
    131072 && (J ? (e(18, jr = i ? ks(Math.min(ir, ot), Math.max(ir, ot) + 1, Ne, jt, !1) : ks(ir + 1, jt + 1, Ne, jt, !0)), dt()) : e(18, jr = [])), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[2] & /*$jsonTextStyle*/
    1 && e(7, pt = vc(de, Le.typefaceProvider, pt)), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[1] & /*$jsonSecondaryTextStyle*/
    1073741824 && e(8, Kt = vc(Se, Le.typefaceProvider, pt)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    536870912 && (Ee != null && Ee.description ? e(19, At = ai(Ee)) : ye.logError(K(new Error('Missing accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    512 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    268435456 && e(9, Dr = pn(Me, Dr)), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 | t.$$.dirty[1] & /*$jsonSecondaryAccessibility*/
    134217728 && (_e != null && _e.description ? e(20, Cr = ai(_e)) : i && ye.logError(K(new Error('Missing second accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext, thumbStyle, hasError*/
    1057 | t.$$.dirty[1] & /*trackActiveStyle, trackInactiveStyle*/
    49152) {
      let Pe = !1;
      or.hasAction() ? (ye.logError(K(new Error('Cannot show "slider" inside component with an action or inside accessibility mode=exclude'))), Pe = !0) : lr === io ? (ye.logError(K(new Error('Missing "thumb_style" in slider'))), Pe = !0) : yr === io ? (ye.logError(K(new Error('Missing "track_active_style" in slider'))), Pe = !0) : xt === io && (ye.logError(K(new Error('Missing "track_inactive_style" in slider'))), Pe = !0), Pe !== wr && e(10, wr = Pe);
    }
    t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(52, ae = ue(Math.max(...[lr.width, rr.width, 0].filter(Bn)))), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(51, T = ue(Math.max(...[lr.height, rr.height, 0].filter(Bn)))), t.$$.dirty[0] & /*value, minValue, maxValue*/
    2072 && e(50, Y = (ir - Ne) / (jt - Ne)), t.$$.dirty[0] & /*secondVariable, value2, minValue, maxValue*/
    12312 && e(49, le = i ? (ot - Ne) / (jt - Ne) : void 0), t.$$.dirty[0] & /*value, value2, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(54, C = le !== void 0 ? Math.min(ir, ot) : Ne), t.$$.dirty[0] & /*value2, value, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(53, N = le !== void 0 ? Math.abs(ot - ir) : ir - Ne), t.$$.dirty[0] & /*$direction, minValue, maxValue*/
    16408 | t.$$.dirty[1] & /*trackActiveOffset, trackActivePart, trackInactiveStyle, trackActiveStyle, $jsonRanges*/
    79740928 && St({
      direction: oe,
      minValue: Ne,
      maxValue: jt,
      trackActiveOffset: C,
      trackActivePart: N,
      trackInactiveStyle: xt,
      trackActiveStyle: yr,
      ranges: fe
    }), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle, textStyle, textSecondaryStyle*/
    480 | t.$$.dirty[1] & /*markActiveStyle, markInactiveStyle, maxThumbWidth, maxThumbHeight, trackPart, trackSecondaryPart*/
    4128768 && e(25, z = {
      "--divkit-slider-thumb-width": ue(lr.width),
      "--divkit-slider-thumb-height": ue(lr.height),
      "--divkit-slider-thumb-secondary-width": ue(rr.width),
      "--divkit-slider-thumb-secondary-height": ue(rr.height),
      "--divkit-slider-text-offset-x": (E = pt == null ? void 0 : pt.offset) != null && E.x ? hn(pt.offset.x) : void 0,
      "--divkit-slider-text-offset-y": (re = pt == null ? void 0 : pt.offset) != null && re.y ? hn(pt.offset.y) : void 0,
      "--divkit-slider-text-secondary-offset-x": (_ = Kt == null ? void 0 : Kt.offset) != null && _.x ? hn(Kt.offset.x) : void 0,
      "--divkit-slider-text-secondary-offset-y": (j = Kt == null ? void 0 : Kt.offset) != null && j.y ? hn(Kt.offset.y) : void 0,
      "--divkit-slider-tick-active-width": Bt ? ue(Bt.width) : void 0,
      "--divkit-slider-tick-active-height": Bt ? ue(Bt.height) : void 0,
      "--divkit-slider-tick-active-border-radius": Bt ? ue(Bt.borderRadius) : void 0,
      "--divkit-slider-tick-active-background": (Bt == null ? void 0 : Bt.background) || void 0,
      "--divkit-slider-tick-active-box-shadow": (Bt == null ? void 0 : Bt.boxShadow) || void 0,
      "--divkit-slider-tick-inactive-width": J ? ue(J.width) : void 0,
      "--divkit-slider-tick-inactive-height": J ? ue(J.height) : void 0,
      "--divkit-slider-tick-inactive-border-radius": J ? ue(J.borderRadius) : void 0,
      "--divkit-slider-tick-inactive-background": (J == null ? void 0 : J.background) || void 0,
      "--divkit-slider-tick-inactive-box-shadow": (J == null ? void 0 : J.boxShadow) || void 0,
      "--divkit-slider-max-thumb-width": ae,
      "--divkit-slider-max-thumb-height": T,
      "--divkit-slider-track-part": Y,
      "--divkit-slider-track-secondary-part": le
    }), t.$$.dirty[0] & /*$direction*/
    16384 && e(24, O = { direction: oe }), t.$$.dirty[0] & /*componentContext, input*/
    5 | t.$$.dirty[1] & /*prevId*/
    8192 && ye.json && Tt && (kt && (Le.unregisterFocusable(kt), e(44, kt = void 0)), ye.id && !ye.fakeElement && (e(44, kt = ye.id), Le.registerFocusable(kt, {
      focus() {
        Tt && Tt.focus();
      }
    })));
  }, [
    ye,
    et,
    Tt,
    Ne,
    jt,
    lr,
    rr,
    pt,
    Kt,
    Dr,
    wr,
    ir,
    ot,
    i,
    oe,
    Mt,
    hr,
    Sr,
    jr,
    At,
    Cr,
    Mr,
    s,
    a,
    O,
    z,
    Q,
    B,
    R,
    F,
    w,
    y,
    h,
    m,
    g,
    d,
    f,
    c,
    u,
    l,
    Oe,
    $t,
    Qt,
    te,
    kt,
    xt,
    yr,
    Bt,
    J,
    le,
    Y,
    T,
    ae,
    N,
    C,
    o,
    n,
    fe,
    _e,
    Me,
    Ee,
    Se,
    de,
    tt,
    Ze,
    ct,
    st,
    pe,
    Ce,
    ht,
    nt,
    zt,
    me,
    vt,
    sr,
    vr,
    ur
  ];
}
class B1 extends Hr {
  constructor(r) {
    super(), Rr(this, r, O1, z1, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const L1 = "appkit-input", R1 = "appkit-input__aligner", H1 = "appkit-input__input", W1 = "appkit-input__placeholder", U1 = "appkit-input__input_singleline", G1 = "appkit-input__input_multiline", Ro = {
  input: L1,
  "input_alignment-horizontal_center": "appkit-input_alignment-horizontal_center",
  "input_alignment-horizontal_end": "appkit-input_alignment-horizontal_end",
  input__aligner: R1,
  input__input: H1,
  input__placeholder: W1,
  "input_alignment-vertical_start": "appkit-input_alignment-vertical_start",
  "input_alignment-vertical_end": "appkit-input_alignment-vertical_end",
  "input_alignment-vertical_baseline": "appkit-input_alignment-vertical_baseline",
  "input_highlight-color": "appkit-input_highlight-color",
  input__input_singleline: U1,
  "input__scroll-wrapper": "appkit-input__scroll-wrapper",
  input__input_multiline: G1,
  "input__input_has-custom-focus": "appkit-input__input_has-custom-focus"
};
function ms(t, r) {
  if (t === r)
    return {
      start: t.length,
      added: 0,
      removed: 0
    };
  if (t.length > r.length) {
    const i = ms(r, t);
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
class Mc {
  constructor(r) {
    this.char = r;
  }
}
class Ao {
  constructor(r, e, n) {
    this.char = r, this.filter = e, this.placeholder = n;
  }
}
class Da {
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
      if (n instanceof Mc)
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
          this.onException(K(i, {
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
      ) : new Mc(o);
    }), n !== null && this.overrideRawValue(n);
  }
  overrideRawValue(r) {
    this.clearRange(0, this.destructedValue.length), this.replaceChars(r, 0), this.cursorPos = Math.min(this.cursorPos, this.value.length);
  }
  applyChangeFrom(r, e) {
    const n = ms(this.value, r);
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
class J1 extends Da {
  constructor(r, e) {
    super(r), this.logError = e;
  }
  onException(r) {
    this.logError(r);
  }
}
function q1(t, r, e) {
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
    return e ? (e.updateMaskData(n), e) : new J1(n, r);
  }
  return e || null;
}
class Y1 extends Da {
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
    const o = ms(this.value, e), i = this.value.lastIndexOf(this.decimalSeparator), s = e.lastIndexOf(this.decimalSeparator), a = i !== s || i === -1 && s === -1, l = this.validFormat(e, o);
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
      let d = !1;
      for (let g = 0; g < e.length; g++) {
        const m = e[g];
        m === this.decimalSeparator ? d = !0 : !this.inDiff(n, g) && d && this.isDigit(m) && l--;
      }
    }
    const u = e.includes(this.decimalSeparator) || s !== -1, c = [];
    i = e.length - 1;
    let f = !1;
    for (; i >= 0; ) {
      const d = e[i], g = c.length <= a;
      this.isDigit(d) ? this.inDiff(n, i) && !f && u ? l > 0 && (c.push(d), l--) : c.push(d) : g && o === -1 && i === s ? (c.push(this.decimalSeparator), f = !0) : g && d === this.decimalSeparator && (o === i || o === -1) && (c.push(this.decimalSeparator), f = !0, o = i), i--;
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
function K1(t, r, e) {
  return e ? (e.updateCurrencyParams(t.locale), e) : new Y1(t.locale, r);
}
const o_ = 3;
function ea(t) {
  const r = t.textContent;
  let e = 0;
  return typeof r == "string" && (e += r.length, t instanceof HTMLElement && (t.tagName === "DIV" || t.tagName === "BR") && ++e), e;
}
function Pc(t, r) {
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
        a += ea(s.childNodes[l]);
      n = a;
    }
    for (; s && s !== t; ) {
      const a = s.parentNode;
      if (!a)
        return 0;
      const l = Array.from(a.childNodes).indexOf(s);
      for (let u = 0; u < l; ++u) {
        const c = a.childNodes[u];
        n += ea(c);
      }
      s instanceof HTMLElement && (s.tagName === "DIV" && ((e = a.childNodes[l - 1]) == null ? void 0 : e.nodeType) === o_ || s.tagName === "BR") && ++n, s = a;
    }
    return n;
  } catch {
    return 0;
  }
}
function ta(t, r, e, n) {
  if (t.nodeType === o_) {
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
    const s = t.childNodes[o], a = ea(s);
    if (n <= a) {
      ta(s, r, e, n);
      return;
    }
    n -= a;
  }
}
const X1 = {
  kotlin: {
    public_default_values: !0
  },
  swift: {
    public_default_values: !0
  }
}, Z1 = {
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
}, Q1 = "object", x1 = {
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
}, i_ = {
  codegen: X1,
  constants: Z1,
  type: Q1,
  properties: x1
}, $1 = "000000000000000", Nc = "*", eb = "00", zc = [{
  key: "0",
  filter: "\\d",
  placeholder: "_"
}];
class tb extends Da {
  constructor(e) {
    super({
      pattern: Bc(""),
      decoding: zc,
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
    const o = ms(this.value, e);
    n !== void 0 && (o.start = Math.max(0, n - o.added));
    const i = this.rawValue, s = this.replaceBodyTail(o, e), a = this.rawValue, l = this.newMaskPatternFor(a);
    if (l == null) {
      this.calculateCursorPosition(o, s);
      return;
    }
    this.updateMaskDataWith(l), this.replaceChars(a, 0);
    const u = ms(i, a), c = u.start + u.added;
    this.calculateCursorPositionBy(c);
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
    const n = Bc(e), o = this.maskData.pattern;
    return n !== o ? n : null;
  }
  updateMaskDataWith(e) {
    return this.updateMaskData({
      pattern: e,
      decoding: zc,
      alwaysVisible: this.maskData.alwaysVisible
    }, !1);
  }
  onException(e) {
    this.logError(e);
  }
}
function Oc(t) {
  return "$ref" in t ? i_.constants[t.$ref.split("/").pop()] : t;
}
function Bc(t) {
  if (!t)
    return $1;
  let r = i_.properties.value.default_value, e = 0;
  for (; !("value" in r); ) {
    if (e >= t.length) {
      r = Oc(r[Nc]);
      break;
    }
    const n = t[e++];
    r = Oc(r[n in r ? n : Nc]);
  }
  return r.value + eb;
}
function rb(t, r) {
  return r || new tb(t);
}
function nb(t) {
  let r, e;
  return r = new Rn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function ob(t) {
  let r, e;
  return r = new jn({
    props: {
      alwaysCustomFocus: !0,
      cls: wt(
        "input",
        Ro,
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
          ub,
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
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      1048576 && (i.cls = wt(
        "input",
        Ro,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function ib(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Ie("input"), this.h();
    },
    l(c) {
      r = Fe(c, "INPUT", {
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
      p(
        r,
        "type",
        /*inputType*/
        t[10]
      ), p(
        r,
        "inputmode",
        /*inputMode*/
        t[11]
      ), p(r, "class", e = wt("input__input", Ro, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[125]
        ),
        singleline: !0
      })), p(r, "autocomplete", "off"), p(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[13]
      ), p(
        r,
        "aria-label",
        /*description*/
        t[12]
      ), p(r, "aria-describedby", n = /*describedBy*/
      t[15] || void 0), p(r, "style", o = nr(
        /*paddingStl*/
        t[18]
      )), r.disabled = i = !/*isEnabled*/
      t[5], p(r, "maxlength", s = /*maxLength*/
      t[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        t[6]
      )), p(
        r,
        "placeholder",
        /*placeholder*/
        t[21]
      ), r.value = /*value*/
      t[3], p(r, "enterkeyhint", a = /*enterKeyType*/
      t[14] === "default" ? void 0 : (
        /*enterKeyType*/
        t[14]
      ));
    },
    m(c, f) {
      q(c, r, f), t[106](r), l || (u = [
        Je(
          r,
          "input",
          /*onInput*/
          t[49]
        ),
        Je(
          r,
          "keydown",
          /*onKeyDown*/
          t[51]
        ),
        Je(r, "mousedown", function() {
          Lr(
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
        Je(r, "click", function() {
          Lr(
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
        Je(r, "focus", function() {
          Lr(
            /*focusHandler*/
            t[123]
          ) && t[123].apply(this, arguments);
        }),
        Je(r, "blur", function() {
          Lr(
            /*blurHandler*/
            t[124]
          ) && t[124].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[0] & /*inputType*/
      1024 && p(
        r,
        "type",
        /*inputType*/
        t[10]
      ), f[0] & /*inputMode*/
      2048 && p(
        r,
        "inputmode",
        /*inputMode*/
        t[11]
      ), f[4] & /*hasCustomFocus*/
      2 && e !== (e = wt("input__input", Ro, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[125]
        ),
        singleline: !0
      })) && p(r, "class", e), f[0] & /*autocapitalization*/
      8192 && p(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[13]
      ), f[0] & /*description*/
      4096 && p(
        r,
        "aria-label",
        /*description*/
        t[12]
      ), f[0] & /*describedBy*/
      32768 && n !== (n = /*describedBy*/
      t[15] || void 0) && p(r, "aria-describedby", n), f[0] & /*paddingStl*/
      262144 && o !== (o = nr(
        /*paddingStl*/
        t[18]
      )) && p(r, "style", o), f[0] & /*isEnabled*/
      32 && i !== (i = !/*isEnabled*/
      t[5]) && (r.disabled = i), f[0] & /*maxLength*/
      64 && s !== (s = /*maxLength*/
      t[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        t[6]
      )) && p(r, "maxlength", s), f[0] & /*placeholder*/
      2097152 && p(
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
      )) && p(r, "enterkeyhint", a);
    },
    d(c) {
      c && k(r), t[106](null), l = !1, Ur(u);
    }
  };
}
function sb(t) {
  let r, e, n, o, i, s, a = !/*contentEditableValue*/
  t[9] && /*placeholder*/
  t[21] && Lc(t);
  function l(f, d) {
    return (
      /*isEnabled*/
      f[5] ? ab : lb
    );
  }
  let u = l(t), c = u(t);
  return {
    c() {
      r = Ie("span"), a && a.c(), e = dr(), n = Ie("span"), o = On("​"), s = dr(), c.c(), this.h();
    },
    l(f) {
      r = Fe(f, "SPAN", { class: !0 });
      var d = ve(r);
      a && a.l(d), e = _r(d), n = Fe(d, "SPAN", {
        class: !0,
        "aria-hidden": !0,
        style: !0
      });
      var g = ve(n);
      o = Un(g, "​"), g.forEach(k), s = _r(d), c.l(d), d.forEach(k), this.h();
    },
    h() {
      p(n, "class", Ro.input__aligner), p(n, "aria-hidden", "true"), p(n, "style", i = nr(
        /*verticalPaddingStl*/
        t[17]
      )), p(r, "class", Ro["input__scroll-wrapper"]);
    },
    m(f, d) {
      q(f, r, d), a && a.m(r, null), yt(r, e), yt(r, n), yt(n, o), yt(r, s), c.m(r, null);
    },
    p(f, d) {
      !/*contentEditableValue*/
      f[9] && /*placeholder*/
      f[21] ? a ? a.p(f, d) : (a = Lc(f), a.c(), a.m(r, e)) : a && (a.d(1), a = null), d[0] & /*verticalPaddingStl*/
      131072 && i !== (i = nr(
        /*verticalPaddingStl*/
        f[17]
      )) && p(n, "style", i), u === (u = l(f)) && c ? c.p(f, d) : (c.d(1), c = u(f), c && (c.c(), c.m(r, null)));
    },
    d(f) {
      f && k(r), a && a.d(), c.d();
    }
  };
}
function Lc(t) {
  let r, e, n;
  return {
    c() {
      r = Ie("div"), e = On(
        /*placeholder*/
        t[21]
      ), this.h();
    },
    l(o) {
      r = Fe(o, "DIV", {
        class: !0,
        "aria-hidden": !0,
        style: !0
      });
      var i = ve(r);
      e = Un(
        i,
        /*placeholder*/
        t[21]
      ), i.forEach(k), this.h();
    },
    h() {
      p(r, "class", Ro.input__placeholder), p(r, "aria-hidden", "true"), p(r, "style", n = nr(
        /*paddingStl*/
        t[18]
      ));
    },
    m(o, i) {
      q(o, r, i), yt(r, e);
    },
    p(o, i) {
      i[0] & /*placeholder*/
      2097152 && to(
        e,
        /*placeholder*/
        o[21]
      ), i[0] & /*paddingStl*/
      262144 && n !== (n = nr(
        /*paddingStl*/
        o[18]
      )) && p(r, "style", n);
    },
    d(o) {
      o && k(r);
    }
  };
}
function lb(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Ie("span"), this.h();
    },
    l(s) {
      r = Fe(s, "SPAN", {
        class: !0,
        autocapitalize: !0,
        contenteditable: !0,
        role: !0,
        "aria-label": !0,
        "aria-disabled": !0,
        "aria-multiline": !0,
        "aria-describedby": !0,
        style: !0
      });
      var a = ve(r);
      a.forEach(k), this.h();
    },
    h() {
      p(r, "class", wt("input__input", Ro, { multiline: !0 })), p(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[13]
      ), p(r, "contenteditable", "false"), p(r, "role", "textbox"), p(
        r,
        "aria-label",
        /*description*/
        t[12]
      ), p(r, "aria-disabled", "true"), p(r, "aria-multiline", "true"), p(r, "aria-describedby", e = /*describedBy*/
      t[15] || void 0), p(r, "style", n = nr(
        /*paddingStl*/
        t[18]
      )), /*contentEditableValue*/
      t[9] === void 0 && lo(() => (
        /*span_input_handler_1*/
        t[105].call(r)
      ));
    },
    m(s, a) {
      q(s, r, a), t[104](r), /*contentEditableValue*/
      t[9] !== void 0 && (r.innerText = /*contentEditableValue*/
      t[9]), o || (i = Je(
        r,
        "input",
        /*span_input_handler_1*/
        t[105]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*autocapitalization*/
      8192 && p(
        r,
        "autocapitalize",
        /*autocapitalization*/
        s[13]
      ), a[0] & /*description*/
      4096 && p(
        r,
        "aria-label",
        /*description*/
        s[12]
      ), a[0] & /*describedBy*/
      32768 && e !== (e = /*describedBy*/
      s[15] || void 0) && p(r, "aria-describedby", e), a[0] & /*paddingStl*/
      262144 && n !== (n = nr(
        /*paddingStl*/
        s[18]
      )) && p(r, "style", n), a[0] & /*contentEditableValue*/
      512 && /*contentEditableValue*/
      s[9] !== r.innerText && (r.innerText = /*contentEditableValue*/
      s[9]);
    },
    d(s) {
      s && k(r), t[104](null), o = !1, i();
    }
  };
}
function ab(t) {
  let r, e, n, o, i, s, a;
  return {
    c() {
      r = Ie("span"), this.h();
    },
    l(l) {
      r = Fe(l, "SPAN", {
        class: !0,
        autocapitalize: !0,
        contenteditable: !0,
        role: !0,
        tabindex: !0,
        "aria-label": !0,
        "aria-multiline": !0,
        enterkeyhint: !0,
        "aria-describedby": !0,
        style: !0
      });
      var u = ve(r);
      u.forEach(k), this.h();
    },
    h() {
      p(r, "class", e = wt("input__input", Ro, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[125]
        ),
        multiline: !0
      })), p(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[13]
      ), p(r, "contenteditable", "true"), p(r, "role", "textbox"), p(r, "tabindex", "0"), p(
        r,
        "aria-label",
        /*description*/
        t[12]
      ), p(r, "aria-multiline", "true"), p(r, "enterkeyhint", n = /*enterKeyType*/
      t[14] === "default" ? void 0 : (
        /*enterKeyType*/
        t[14]
      )), p(r, "aria-describedby", o = /*describedBy*/
      t[15] || void 0), p(r, "style", i = nr(
        /*paddingStl*/
        t[18]
      )), /*contentEditableValue*/
      t[9] === void 0 && lo(() => (
        /*span_input_handler*/
        t[103].call(r)
      ));
    },
    m(l, u) {
      q(l, r, u), t[102](r), /*contentEditableValue*/
      t[9] !== void 0 && (r.innerText = /*contentEditableValue*/
      t[9]), s || (a = [
        Je(
          r,
          "input",
          /*span_input_handler*/
          t[103]
        ),
        Je(
          r,
          "input",
          /*onInput*/
          t[49]
        ),
        Je(
          r,
          "keydown",
          /*blockOverflow*/
          t[50]
        ),
        Je(
          r,
          "keydown",
          /*onKeyDown*/
          t[51]
        ),
        Je(r, "paste", _b),
        Je(r, "mousedown", function() {
          Lr(
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
        Je(r, "click", function() {
          Lr(
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
        Je(r, "focus", function() {
          Lr(
            /*focusHandler*/
            t[123]
          ) && t[123].apply(this, arguments);
        }),
        Je(r, "blur", function() {
          Lr(
            /*blurHandler*/
            t[124]
          ) && t[124].apply(this, arguments);
        })
      ], s = !0);
    },
    p(l, u) {
      t = l, u[4] & /*hasCustomFocus*/
      2 && e !== (e = wt("input__input", Ro, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[125]
        ),
        multiline: !0
      })) && p(r, "class", e), u[0] & /*autocapitalization*/
      8192 && p(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[13]
      ), u[0] & /*description*/
      4096 && p(
        r,
        "aria-label",
        /*description*/
        t[12]
      ), u[0] & /*enterKeyType*/
      16384 && n !== (n = /*enterKeyType*/
      t[14] === "default" ? void 0 : (
        /*enterKeyType*/
        t[14]
      )) && p(r, "enterkeyhint", n), u[0] & /*describedBy*/
      32768 && o !== (o = /*describedBy*/
      t[15] || void 0) && p(r, "aria-describedby", o), u[0] & /*paddingStl*/
      262144 && i !== (i = nr(
        /*paddingStl*/
        t[18]
      )) && p(r, "style", i), u[0] & /*contentEditableValue*/
      512 && /*contentEditableValue*/
      t[9] !== r.innerText && (r.innerText = /*contentEditableValue*/
      t[9]);
    },
    d(l) {
      l && k(r), t[102](null), s = !1, Ur(a);
    }
  };
}
function ub(t) {
  let r;
  function e(i, s) {
    return (
      /*isMultiline*/
      i[8] ? sb : ib
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = We();
    },
    l(i) {
      o.l(i), r = We();
    },
    m(i, s) {
      o.m(i, s), q(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function cb(t) {
  let r, e, n, o;
  const i = [ob, nb], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(l) {
      e && e.l(l), n = We();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (mr(), $(s[c], 1, 1, () => {
        s[c] = null;
      }), br()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
const fb = typeof document < "u" && "inputMode" in document.createElement("input"), Rc = {
  email: "email",
  number: "number",
  phone: "tel",
  single_line_text: "text",
  multi_line_text: "text",
  uri: "url",
  password: "password"
}, db = /* @__PURE__ */ new Set([
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
function _b(t) {
  if (t.preventDefault(), t.clipboardData) {
    let r = t.clipboardData.getData("text/plain");
    r = r.trim(), document.execCommand("inserttext", !1, r);
  }
}
function hb(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g, m, h, y, w, F, R, B, Q, ae, T, Y, le, C, N, z, O, oe, fe, ce, Ae, _e, Te, ee, Me, Xe, Qe, Ee = S, it = () => (Ee(), Ee = I(s, (qe) => e(76, Qe = qe)), s), we, Se = S, he = () => (Se(), Se = I(a, (qe) => e(77, we = qe)), a), x, de = S, se = () => (de(), de = I(ce, (qe) => e(111, x = qe)), ce), De, tt = S, xe = () => (tt(), tt = I(oe, (qe) => e(78, De = qe)), oe), ne, Ze = S, Re = () => (Ze(), Ze = I(le, (qe) => e(79, ne = qe)), le), ut, ct = S, ft = () => (ct(), ct = I(O, (qe) => e(80, ut = qe)), O), Et, st, Lt = S, _t = () => (Lt(), Lt = I(Y, (qe) => e(82, st = qe)), Y), pe, ge = S, gt = () => (ge(), ge = I(T, (qe) => e(83, pe = qe)), T), Ce, M = S, Ct = () => (M(), M = I(ae, (qe) => e(84, Ce = qe)), ae), ht, Dt = S, Nt = () => (Dt(), Dt = I(Q, (qe) => e(85, ht = qe)), Q), nt, X = S, It = () => (X(), X = I(z, (qe) => e(86, nt = qe)), z), zt, er = S, Xt = () => (er(), er = I(N, (qe) => e(87, zt = qe)), N), me, Ue = S, mt = () => (Ue(), Ue = I(B, (qe) => e(88, me = qe)), B), ye, et = S, Le = () => (et(), et = I(R, (qe) => e(89, ye = qe)), R), or, Oe = S, kt = () => (Oe(), Oe = I(F, (qe) => e(90, or = qe)), F), Tt, Mt = S, hr = () => (Mt(), Mt = I(w, (qe) => e(91, Tt = qe)), w), Ne, jt = S, lr = () => (jt(), jt = I(y, (qe) => e(92, Ne = qe)), y), rr, xt = S, yr = () => (xt(), xt = I(h, (qe) => e(93, rr = qe)), h), Sr, Bt = S, jr = () => (Bt(), Bt = I(m, (qe) => e(94, Sr = qe)), m), J, pt = S, Kt = () => (pt(), pt = I(g, (qe) => e(95, J = qe)), g), At, Cr = S, Dr = () => (Cr(), Cr = I(d, (qe) => e(96, At = qe)), d), wr, Mr = S, qr = () => (Mr(), Mr = I(f, (qe) => e(97, wr = qe)), f), ir, ot = S, St = () => (ot(), ot = I(c, (qe) => e(98, ir = qe)), c), $t, Qt = S, pr = () => (Qt(), Qt = I(u, (qe) => e(99, $t = qe)), u), dt, te = S, vt = () => (te(), te = I(l, (qe) => e(100, dt = qe)), l), sr, vr = S, ur = () => (vr(), vr = I(fe, (qe) => e(101, sr = qe)), fe), E, re = S, _ = () => (re(), re = I(C, (qe) => e(47, E = qe)), C);
  t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => Se()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => Ze()), t.$$.on_destroy.push(() => ct()), t.$$.on_destroy.push(() => Lt()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => Dt()), t.$$.on_destroy.push(() => X()), t.$$.on_destroy.push(() => er()), t.$$.on_destroy.push(() => Ue()), t.$$.on_destroy.push(() => et()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => Mt()), t.$$.on_destroy.push(() => jt()), t.$$.on_destroy.push(() => xt()), t.$$.on_destroy.push(() => Bt()), t.$$.on_destroy.push(() => pt()), t.$$.on_destroy.push(() => Cr()), t.$$.on_destroy.push(() => Mr()), t.$$.on_destroy.push(() => ot()), t.$$.on_destroy.push(() => Qt()), t.$$.on_destroy.push(() => te()), t.$$.on_destroy.push(() => vr()), t.$$.on_destroy.push(() => re());
  let { componentContext: j } = r, { layoutParams: Pe = void 0 } = r;
  const He = zr(en), Ot = zr(Bo), H = He.direction;
  En(t, H, (qe) => e(81, Et = qe));
  let Pt, lt, Ye = !1, Ke = null, qt = "", kr = "", Qr = !1, fn = "", tn = 12, je, yn = "", rn = "", wn, v = "", A = "#000", V = "", ie = "start", W = "center", $e = "multi_line_text", Ve = "text", Zt, Ft = "", Be = null, tr = "", Vt = "", Fr = "", Vr = !0, Kr = 1 / 0, nn = "off", Cn = "default", vn = "", Vn = !1, oo = !0, Xn = 0, Zn = 0;
  function Yt() {
    e(56, fn = ""), e(57, tn = 12), e(58, je = void 0), e(59, yn = ""), e(60, rn = ""), e(61, wn = void 0), e(63, A = "#000"), e(64, V = ""), e(65, ie = "left"), e(66, W = "center"), e(67, $e = "multi_line_text"), e(10, Ve = "text"), e(11, Zt = void 0), e(5, Vr = !0), e(6, Kr = 1 / 0), e(13, nn = "off"), e(14, Cn = "default"), e(15, vn = ""), Xn = 0, Zn = 0;
  }
  function b(qe) {
    (qe == null ? void 0 : qe.type) === "fixed_length" ? e(55, Ke = q1(qe, j.logError, Ke)) : (qe == null ? void 0 : qe.type) === "currency" ? e(55, Ke = K1(qe, j.logError, Ke)) : (qe == null ? void 0 : qe.type) === "phone" && e(55, Ke = rb(j.logError, Ke)), Ke && ko();
  }
  function D(qe) {
    if (!Array.isArray(x))
      return !0;
    for (const Ar of x)
      if (Ar) {
        if (Ar.type === "regex")
          try {
            if (!new RegExp("^" + (Ar.pattern || "") + "$").test(qe))
              return !1;
          } catch (Or) {
            return j.logError(K(new Error("Failed to create a regex"), {
              additional: { originalError: String(Or) }
            })), !0;
          }
        else if (Ar.type === "expression" && !Ar.condition)
          return !1;
      }
    return !0;
  }
  function Z(qe) {
    const Ar = qe.target;
    let Or = (_e ? Ar.innerText : Ar.value) || "";
    Or === `
` && (Or = ""), Or.length > Kr && (Or = e(9, kr = qt), Ar instanceof HTMLInputElement && (Ar.value = Or)), qt !== Or && (D(Or) ? (e(3, qt = e(9, kr = Or)), s.setValue(Or), Ke && Xr(), Qn()) : (e(3, qt = e(9, kr = Or)), Ar instanceof HTMLInputElement && (Ar.value = Or), Mn().then(() => {
      Nr(Xn, Zn);
    })));
  }
  function L(qe) {
    qt.length >= Kr && !db.has(qe.key) && !(qe.ctrlKey || qe.altKey || qe.metaKey) && qe.preventDefault();
  }
  function ke(qe) {
    if (Xn = Ht() || 0, Zn = Yr() || 0, qe.ctrlKey || qe.metaKey || qe.altKey || qe.shiftKey)
      return;
    const Ar = j.json.enter_key_actions;
    qe.key === "Enter" && Array.isArray(Ar) && Ar.length && (qe.preventDefault(), j.execAnyActions(Ar));
  }
  function be() {
    Ye = !1, setTimeout(
      () => {
        Ye = !0;
      },
      250
    );
  }
  function Rt() {
    if (!Ye)
      if (lt instanceof HTMLInputElement)
        lt.select();
      else {
        const qe = window.getSelection(), Ar = document.createRange();
        Ar.selectNodeContents(lt), qe && (qe.removeAllRanges(), qe.addRange(Ar));
      }
  }
  function Ht() {
    return lt instanceof HTMLInputElement ? lt.selectionStart === null ? void 0 : lt.selectionStart : Pc(lt, "start");
  }
  function Yr() {
    return lt instanceof HTMLInputElement ? lt.selectionEnd === null ? void 0 : lt.selectionEnd : Pc(lt, "end");
  }
  function Nr(qe, Ar) {
    if (lt instanceof HTMLInputElement)
      e(2, lt.selectionStart = qe, lt), e(2, lt.selectionEnd = Ar, lt);
    else {
      const Or = window.getSelection();
      if (Or) {
        Or.removeAllRanges();
        const Eo = document.createRange();
        ta(lt, Eo, "start", qe), ta(lt, Eo, "end", Ar), Or.addRange(Eo);
      }
    }
  }
  async function Xr() {
    if (!lt || !Ke)
      return;
    const qe = Ht() || 0, Ar = Yr() || 0;
    Ke.applyChangeFrom(qt, Ar === qe ? Ar : 0), a.set(Ke.rawValue), Vl(s, Qe = e(3, qt = e(9, kr = Ke.value)), Qe);
    const Or = Ke.cursorPosition;
    await Mn(), document.activeElement === lt && Nr(Or, Or);
  }
  async function ko() {
    if (!lt || !Ke)
      return;
    Ke.overrideRawValue(we), a.set(Ke.rawValue), Vl(s, Qe = e(3, qt = e(9, kr = Ke.value)), Qe);
    const qe = Ke.cursorPosition;
    await Mn(), document.activeElement === lt && Nr(qe, qe);
  }
  function Qn() {
    const qe = oo;
    oo = !1;
    const Ar = j.json.validators;
    if (!Array.isArray(Ar) || !Ar.length)
      return;
    const Eo = j.getJsonWithVars(Ar).filter((Dn) => (Dn.type === "regex" || Dn.type === "expression") && Dn.label_id && Dn.variable), Do = [];
    Eo.forEach((Dn) => {
      const es = j.getVariable(Dn.variable);
      if (!es)
        return;
      if (es.getType() !== "boolean") {
        qe && j.logError(K(new Error("Incorrect variable type for the validator"), {
          additional: { variable: Dn.variable }
        }));
        return;
      }
      let pi = !1;
      if (qt === "" && (Dn.allow_empty === !0 || Dn.allow_empty === 1))
        pi = !0;
      else if (Dn.type === "regex") {
        if (!Dn.pattern || typeof Dn.pattern != "string")
          return;
        try {
          pi = new RegExp("^" + Dn.pattern + "$").test(qt);
        } catch {
          qe && j.logError(K(new Error("Failed to create a regular expression using the validator pattern"), {
            additional: { pattern: Dn.pattern }
          }));
          return;
        }
      } else if (Dn.type === "expression")
        pi = Dn.condition === !0 || Dn.condition === 1;
      else
        return;
      if (es.setValue(pi), !pi) {
        const Mi = He.getComponentId(Dn.label_id);
        Mi && Do.push(Mi);
      }
    }), e(15, vn = Do.join(" "));
  }
  ao(() => {
    e(72, Vn = !0), lt && Ke && we && (Ke.overrideRawValue(we), Vl(s, Qe = e(3, qt = e(9, kr = Ke.value)), Qe));
  }), cn(() => {
    e(72, Vn = !1), Pt && (He.unregisterFocusable(Pt), e(54, Pt = void 0));
  });
  function _o(qe) {
    Pr[qe ? "unshift" : "push"](() => {
      lt = qe, e(2, lt);
    });
  }
  function Pn() {
    kr = this.innerText, e(9, kr), e(55, Ke), e(3, qt), e(76, Qe), e(6, Kr), e(7, s), e(86, nt), e(73, o), e(0, j);
  }
  function $o(qe) {
    Pr[qe ? "unshift" : "push"](() => {
      lt = qe, e(2, lt);
    });
  }
  function Go() {
    kr = this.innerText, e(9, kr), e(55, Ke), e(3, qt), e(76, Qe), e(6, Kr), e(7, s), e(86, nt), e(73, o), e(0, j);
  }
  function ei(qe) {
    Pr[qe ? "unshift" : "push"](() => {
      lt = qe, e(2, lt);
    });
  }
  return t.$$set = (qe) => {
    "componentContext" in qe && e(0, j = qe.componentContext), "layoutParams" in qe && e(1, Pe = qe.layoutParams);
  }, t.$$.update = () => {
    var qe;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(75, n = j.origJson), t.$$.dirty[2] & /*origJson*/
    8192 && n && Yt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(73, o = j.json.text_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(74, i = (qe = j.json.mask) == null ? void 0 : qe.raw_text_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*variable*/
    2048 && it(e(7, s = o && (j.getVariable(o, "string") || He.awaitGlobalVariable(o, "string", "")) || fo("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*rawVariable*/
    4096 && he(e(16, a = i && (j.getVariable(i, "string") || He.awaitGlobalVariable(i, "string", "")) || fo("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && vt(e(46, l = j.getDerivedFromVars(j.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && pr(e(45, u = j.getDerivedFromVars(j.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && St(e(44, c = j.getDerivedFromVars(j.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && qr(e(43, f = j.getDerivedFromVars(j.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && Dr(e(42, d = j.getDerivedFromVars(j.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Kt(e(41, g = j.getDerivedFromVars(j.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && jr(e(40, m = j.getDerivedFromVars(j.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && yr(e(39, h = j.getDerivedFromVars(j.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && lr(e(38, y = j.getDerivedFromVars(j.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && hr(e(37, w = j.getDerivedFromVars(j.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && kt(e(36, F = j.getDerivedFromVars(j.json.highlight_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(35, R = j.getDerivedFromVars(j.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && mt(e(34, B = j.getDerivedFromVars(j.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Nt(e(33, Q = j.getDerivedFromVars(j.json.keyboard_type))), t.$$.dirty[0] & /*componentContext*/
    1 && Ct(e(32, ae = j.getDerivedFromVars(j.json.mask))), t.$$.dirty[0] & /*componentContext*/
    1 && gt(e(31, T = j.getDerivedFromVars(j.json.max_visible_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(30, Y = j.getDerivedFromVars(j.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Re(e(29, le = j.getDerivedFromVars(j.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && _(e(28, C = j.getDerivedFromVars(j.json.select_all_on_focus))), t.$$.dirty[0] & /*componentContext*/
    1 && Xt(e(27, N = j.getDerivedFromVars(j.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && It(e(26, z = j.getDerivedFromVars(j.json.max_length))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(25, O = j.getDerivedFromVars(j.json.autocapitalization))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(24, oe = j.getDerivedFromVars(j.json.enter_key_type))), t.$$.dirty[0] & /*componentContext*/
    1 && ur(e(23, fe = j.getDerivedFromVars(j.json.validators))), t.$$.dirty[0] & /*componentContext*/
    1 && se(e(22, ce = j.getDerivedFromVars(j.json.filters))), t.$$.dirty[0] & /*componentContext, hasError*/
    17 | t.$$.dirty[2] & /*variable, $jsonAccessibility*/
    133120) {
      let Ar = !1;
      o ? (Ot.hasAction() || (ne == null ? void 0 : ne.mode) === "exclude") && (Ar = !0, j.logError(K(new Error('Cannot show "input" inside component with an action or inside accessibility mode=exclude')))) : (e(4, Qr = !0), j.logError(K(new Error('Missing "text_variable" in "input"')))), Qr !== Ar && e(4, Qr = Ar);
    }
    if (t.$$.dirty[2] & /*$jsonMask*/
    4194304 && b(Ce), t.$$.dirty[0] & /*maxLength*/
    64 | t.$$.dirty[2] & /*$jsonMaxLength*/
    16777216 && e(6, Kr = Yn(nt, Kr)), t.$$.dirty[0] & /*value, maxLength, valueVariable*/
    200 | t.$$.dirty[1] & /*inputMask*/
    16777216 | t.$$.dirty[2] & /*$valueVariable*/
    16384 && !Ke && qt !== Qe) {
      let Ar = Qe;
      Ar.length > Kr && (Ar = Ar.slice(0, Kr), s.setValue(Ar)), e(3, qt = e(9, kr = Ar)), Qn();
    }
    if (t.$$.dirty[1] & /*inputMask*/
    16777216 | t.$$.dirty[2] & /*$rawValueVariable*/
    32768 && Ke && Ke.rawValue !== we && (ko(), Qn()), t.$$.dirty[2] & /*mounted*/
    1024 | t.$$.dirty[3] & /*$jsonValidators*/
    256 && sr && Vn && Qn(), t.$$.dirty[3] & /*$jsonHintText*/
    128 && e(21, Ae = dt), t.$$.dirty[1] & /*hintColor*/
    33554432 | t.$$.dirty[3] & /*$jsonHintColor*/
    64 && e(56, fn = gr($t, 1, fn)), t.$$.dirty[1] & /*fontSize*/
    67108864 | t.$$.dirty[3] & /*$jsonFontSize*/
    32 && e(57, tn = Yn(ir, tn)), t.$$.dirty[1] & /*fontWeight*/
    134217728 | t.$$.dirty[3] & /*$jsonFontWeight, $jsonFontWeightValue, $jsonFontFamily*/
    28 && (e(58, je = Ci(wr, At, je)), J && typeof J == "string" ? e(59, yn = He.typefaceProvider(J, { fontWeight: je || 400 })) : e(59, yn = "")), t.$$.dirty[1] & /*fontVariationSettings*/
    536870912 | t.$$.dirty[3] & /*$jsonFontVariationSettings*/
    2) {
      const Ar = qi(Sr);
      Ar !== rn && e(60, rn = Ar);
    }
    if (t.$$.dirty[1] & /*fontSize*/
    67108864 | t.$$.dirty[3] & /*$jsonLineHeight*/
    1) {
      const Ar = rr;
      Kn(Ar) && e(61, wn = Ar / tn);
    }
    t.$$.dirty[2] & /*$jsonLetterSpacing*/
    1073741824 && ml(Ne) && e(62, v = ue(Ne)), t.$$.dirty[2] & /*$jsonTextColor, textColor*/
    536870914 && e(63, A = gr(Tt, 1, A)), t.$$.dirty[2] & /*$jsonHighlightColor, highlightColor*/
    268435460 && e(64, V = gr(or, 1, V)), t.$$.dirty[2] & /*$jsonAlignmentHorizontal, $direction, alignmentHorizontal*/
    134742024 && e(65, ie = yl(ye, Et, ie)), t.$$.dirty[2] & /*$jsonAlignmentVertical, alignmentVertical*/
    67108880 && e(66, W = wl(me, W)), t.$$.dirty[0] & /*isEnabled*/
    32 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    33554432 && e(5, Vr = pn(zt, Vr)), t.$$.dirty[2] & /*$jsonKeyboardType, $jsonMask, keyboardType*/
    12582944 && (ht && ht in Rc && (e(10, Ve = Rc[ht]), e(67, $e = ht)), (Ce == null ? void 0 : Ce.type) === "currency" ? (e(10, Ve = fb ? "text" : "tel"), e(11, Zt = "decimal")) : $e === "number" ? e(11, Zt = "decimal") : e(11, Zt = void 0)), t.$$.dirty[2] & /*keyboardType*/
    32 && e(8, _e = $e === "multi_line_text"), t.$$.dirty[1] & /*lineHeight, fontSize*/
    1140850688 | t.$$.dirty[2] & /*$jsonVisibleMaxLines, $jsonPaddings, selfPadding, $direction*/
    3670144 && (Kn(pe) ? e(68, Ft = `calc(${pe * (wn || 1.25) * (tn / 10) + "em"} + ${hn(ln(st == null ? void 0 : st.top, 0) + ln(st == null ? void 0 : st.bottom, 0))})`) : e(68, Ft = ""), e(69, Be = ji(st || void 0, Be)), e(70, tr = Be ? yo(
      {
        top: (Number(Be.top) || 0) / tn * 10,
        right: (Number(Et === "ltr" ? Be.end : Be.start) || Number(Be.right) || 0) / tn * 10,
        bottom: (Number(Be.bottom) || 0) / tn * 10,
        left: (Number(Et === "ltr" ? Be.start : Be.end) || Number(Be.left) || 0) / tn * 10
      },
      Et
    ) : ""), e(71, Vt = Be ? yo(
      {
        top: (Number(Be.top) || 0) / tn * 10,
        bottom: (Number(Be.bottom) || 0) / tn * 10
      },
      Et
    ) : "")), t.$$.dirty[2] & /*$jsonAutocapitalization*/
    262144 && (ut === "all_characters" ? e(13, nn = "characters") : ut === "sentences" ? e(13, nn = "sentences") : ut === "words" ? e(13, nn = "words") : (ut === "none" || ut === "auto") && e(13, nn = "off")), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonAccessibility*/
    131072 && (ne != null && ne.description ? e(12, Fr = ai(ne)) : j.logError(K(new Error('Missing accessibility "description" for input'), { level: "warn" }))), t.$$.dirty[2] & /*$jsonEnterKeyType*/
    65536 && (De === "default" || De === "done" || De === "go" || De === "search" || De === "send") && e(14, Cn = De), t.$$.dirty[0] & /*isMultiline*/
    256 | t.$$.dirty[2] & /*highlightColor, alignmentHorizontal, alignmentVertical*/
    28 && e(20, Te = {
      "highlight-color": !!V,
      multiline: _e,
      "alignment-horizontal": ie,
      "alignment-vertical": W
    }), t.$$.dirty[1] & /*hintColor, lineHeight, fontWeight, fontFamily, fontVariationSettings*/
    2046820352 | t.$$.dirty[2] & /*highlightColor, letterSpacing, textColor, maxHeight*/
    71 && e(19, ee = {
      "--divkit-input-hint-color": fn,
      "--divkit-input-highlight-color": V,
      "--divkit-input-line-height": wn,
      "font-weight": je,
      "font-family": yn,
      "font-variation-settings": rn,
      "letter-spacing": v,
      color: A,
      "max-height": Ft
    }), t.$$.dirty[1] & /*fontSize*/
    67108864 | t.$$.dirty[2] & /*padding*/
    256 && e(18, Me = { "font-size": ue(tn), padding: tr }), t.$$.dirty[1] & /*fontSize*/
    67108864 | t.$$.dirty[2] & /*verticalPadding*/
    512 && e(17, Xe = {
      "font-size": ue(tn),
      padding: Vt
    }), t.$$.dirty[0] & /*input, componentContext, value*/
    13 | t.$$.dirty[1] & /*prevId*/
    8388608 && lt && j.json && (Pt && (He.unregisterFocusable(Pt), e(54, Pt = void 0)), j.id && !j.fakeElement && (e(54, Pt = j.id), He.registerFocusable(Pt, {
      focus() {
        lt && (lt.focus(), Nr(qt.length, qt.length));
      }
    })));
  }, [
    j,
    Pe,
    lt,
    qt,
    Qr,
    Vr,
    Kr,
    s,
    _e,
    kr,
    Ve,
    Zt,
    Fr,
    nn,
    Cn,
    vn,
    a,
    Xe,
    Me,
    ee,
    Te,
    Ae,
    ce,
    fe,
    oe,
    O,
    z,
    N,
    C,
    le,
    Y,
    T,
    ae,
    Q,
    B,
    R,
    F,
    w,
    y,
    h,
    m,
    g,
    d,
    f,
    c,
    u,
    l,
    E,
    H,
    Z,
    L,
    ke,
    be,
    Rt,
    Pt,
    Ke,
    fn,
    tn,
    je,
    yn,
    rn,
    wn,
    v,
    A,
    V,
    ie,
    W,
    $e,
    Ft,
    Be,
    tr,
    Vt,
    Vn,
    o,
    i,
    n,
    Qe,
    we,
    De,
    ne,
    ut,
    Et,
    st,
    pe,
    Ce,
    ht,
    nt,
    zt,
    me,
    ye,
    or,
    Tt,
    Ne,
    rr,
    Sr,
    J,
    At,
    wr,
    ir,
    $t,
    dt,
    sr,
    _o,
    Pn,
    $o,
    Go,
    ei
  ];
}
class pb extends Hr {
  constructor(r) {
    super(), Rr(this, r, hb, cb, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1, -1]);
  }
}
const gb = "appkit-select", mb = "appkit-select_hint", bb = "appkit-select__select", yb = "appkit-select__option", Ui = {
  select: gb,
  "select__select-text": "appkit-select__select-text",
  select_hint: mb,
  select__select: bb,
  "select__select_has-custom-focused": "appkit-select__select_has-custom-focused",
  "has-custom-focused": "appkit-has-custom-focused",
  select__option: yb
};
function Hc(t, r, e) {
  const n = t.slice();
  return n[62] = r[e], n;
}
function wb(t) {
  let r, e;
  return r = new Rn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function vb(t) {
  let r, e;
  return r = new jn({
    props: {
      cls: wt(
        "select",
        Ui,
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
          kb,
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
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = wt(
        "select",
        Ui,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Wc(t) {
  let r, e = (
    /*item*/
    (t[62].text || /*item*/
    t[62].value) + ""
  ), n, o;
  return {
    c() {
      r = Ie("option"), n = On(e), this.h();
    },
    l(i) {
      r = Fe(i, "OPTION", { class: !0 });
      var s = ve(r);
      n = Un(s, e), s.forEach(k), this.h();
    },
    h() {
      p(r, "class", Ui.select__option), r.__value = o = /*item*/
      t[62].value, Wa(r, r.__value);
    },
    m(i, s) {
      q(i, r, s), yt(r, n);
    },
    p(i, s) {
      s[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      (i[62].text || /*item*/
      i[62].value) + "") && to(n, e), s[0] & /*filteredItems*/
      32 && o !== (o = /*item*/
      i[62].value) && (r.__value = o, Wa(r, r.__value));
    },
    d(i) {
      i && k(r);
    }
  };
}
function kb(t) {
  let r, e = (
    /*selectText*/
    (t[4] || /*$jsonHintText*/
    t[25] || "​") + ""
  ), n, o, i, s, a, l, u, c, f = ar(
    /*filteredItems*/
    t[5]
  ), d = [];
  for (let g = 0; g < f.length; g += 1)
    d[g] = Wc(Hc(t, f, g));
  return {
    c() {
      r = Ie("span"), n = On(e), i = dr(), s = Ie("select");
      for (let g = 0; g < d.length; g += 1)
        d[g].c();
      this.h();
    },
    l(g) {
      r = Fe(g, "SPAN", {
        class: !0,
        style: !0,
        "aria-hidden": !0
      });
      var m = ve(r);
      n = Un(m, e), m.forEach(k), i = _r(g), s = Fe(g, "SELECT", {
        class: !0,
        "aria-label": !0,
        style: !0
      });
      var h = ve(s);
      for (let y = 0; y < d.length; y += 1)
        d[y].l(h);
      h.forEach(k), this.h();
    },
    h() {
      p(r, "class", Ui["select__select-text"]), p(r, "style", o = nr(
        /*innerStl*/
        t[9]
      )), p(r, "aria-hidden", "true"), p(s, "class", a = wt("select__select", Ui, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[59]
        )
      })), p(
        s,
        "aria-label",
        /*description*/
        t[7]
      ), p(s, "style", l = nr(
        /*selectStl*/
        t[8]
      )), /*$valueVariable*/
      t[6] === void 0 && lo(() => (
        /*select_1_change_handler*/
        t[55].call(s)
      ));
    },
    m(g, m) {
      q(g, r, m), yt(r, n), q(g, i, m), q(g, s, m);
      for (let h = 0; h < d.length; h += 1)
        d[h] && d[h].m(s, null);
      t[54](s), Ua(
        s,
        /*$valueVariable*/
        t[6],
        !0
      ), u || (c = [
        Je(
          s,
          "change",
          /*select_1_change_handler*/
          t[55]
        ),
        Je(s, "focus", function() {
          Lr(
            /*focusHandler*/
            t[60]
          ) && t[60].apply(this, arguments);
        }),
        Je(s, "blur", function() {
          Lr(
            /*blurHandler*/
            t[61]
          ) && t[61].apply(this, arguments);
        })
      ], u = !0);
    },
    p(g, m) {
      if (t = g, m[0] & /*selectText, $jsonHintText*/
      33554448 && e !== (e = /*selectText*/
      (t[4] || /*$jsonHintText*/
      t[25] || "​") + "") && to(n, e), m[0] & /*innerStl*/
      512 && o !== (o = nr(
        /*innerStl*/
        t[9]
      )) && p(r, "style", o), m[0] & /*filteredItems*/
      32) {
        f = ar(
          /*filteredItems*/
          t[5]
        );
        let h;
        for (h = 0; h < f.length; h += 1) {
          const y = Hc(t, f, h);
          d[h] ? d[h].p(y, m) : (d[h] = Wc(y), d[h].c(), d[h].m(s, null));
        }
        for (; h < d.length; h += 1)
          d[h].d(1);
        d.length = f.length;
      }
      m[1] & /*hasCustomFocus*/
      268435456 && a !== (a = wt("select__select", Ui, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[59]
        )
      })) && p(s, "class", a), m[0] & /*description*/
      128 && p(
        s,
        "aria-label",
        /*description*/
        t[7]
      ), m[0] & /*selectStl*/
      256 && l !== (l = nr(
        /*selectStl*/
        t[8]
      )) && p(s, "style", l), m[0] & /*$valueVariable, filteredItems*/
      96 && Ua(
        s,
        /*$valueVariable*/
        t[6]
      );
    },
    d(g) {
      g && (k(r), k(i), k(s)), un(d, g), t[54](null), u = !1, Ur(c);
    }
  };
}
function Eb(t) {
  let r, e, n, o;
  const i = [vb, wb], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(l) {
      e && e.l(l), n = We();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (mr(), $(s[c], 1, 1, () => {
        s[c] = null;
      }), br()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function jb(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g, m, h, y, w, F, R, B, Q, ae, T, Y, le = S, C = () => (le(), le = I(R, (Ne) => e(42, Y = Ne)), R), N, z = S, O = () => (z(), z = I(F, (Ne) => e(43, N = Ne)), F), oe, fe = S, ce = () => (fe(), fe = I(w, (Ne) => e(44, oe = Ne)), w), Ae, _e = S, Te = () => (_e(), _e = I(y, (Ne) => e(45, Ae = Ne)), y), ee, Me = S, Xe = () => (Me(), Me = I(h, (Ne) => e(46, ee = Ne)), h), Qe, Ee = S, it = () => (Ee(), Ee = I(m, (Ne) => e(47, Qe = Ne)), m), we, Se = S, he = () => (Se(), Se = I(g, (Ne) => e(48, we = Ne)), g), x, de = S, se = () => (de(), de = I(d, (Ne) => e(49, x = Ne)), d), De, tt = S, xe = () => (tt(), tt = I(f, (Ne) => e(50, De = Ne)), f), ne, Ze = S, Re = () => (Ze(), Ze = I(c, (Ne) => e(51, ne = Ne)), c), ut, ct, ft = S, Et = () => (ft(), ft = I(l, (Ne) => e(53, ct = Ne)), l), st, Lt = S, _t = () => (Lt(), Lt = I(a, (Ne) => e(6, st = Ne)), a), pe, ge = S, gt = () => (ge(), ge = I(u, (Ne) => e(25, pe = Ne)), u);
  t.$$.on_destroy.push(() => le()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => Me()), t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => Se()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => Ze()), t.$$.on_destroy.push(() => ft()), t.$$.on_destroy.push(() => Lt()), t.$$.on_destroy.push(() => ge());
  let { componentContext: Ce } = r, { layoutParams: M = void 0 } = r;
  const Ct = zr(en), ht = zr(Bo), Dt = Ct.direction;
  En(t, Dt, (Ne) => e(52, ut = Ne));
  let Nt, nt, X = !1, It = "", zt = null, er = "", Xt = "rgba(0,0,0,.45)", me = 12, Ue, mt = "", ye = "", et, Le = "", or = "#000", Oe = "", kt;
  function Tt() {
    e(28, zt = null), e(30, Xt = "rgba(0,0,0,.45)"), e(31, me = 12), e(32, Ue = void 0), e(33, mt = ""), e(34, ye = ""), e(35, et = void 0), e(36, Le = ""), e(37, or = "#000"), e(7, Oe = "");
  }
  cn(() => {
    Nt && (Ct.unregisterFocusable(Nt), e(27, Nt = void 0));
  });
  function Mt(Ne) {
    Pr[Ne ? "unshift" : "push"](() => {
      nt = Ne, e(2, nt);
    });
  }
  function hr() {
    st = U_(this), a.set(st), e(5, s), e(40, i), e(0, Ce);
  }
  return t.$$set = (Ne) => {
    "componentContext" in Ne && e(0, Ce = Ne.componentContext), "layoutParams" in Ne && e(1, M = Ne.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(41, n = Ce.origJson), t.$$.dirty[1] & /*origJson*/
    1024 && n && Tt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(39, o = Ce.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(40, i = Ce.json.options), t.$$.dirty[1] & /*items*/
    512 && e(5, s = Array.isArray(i) && i.filter((Ne) => typeof Ne.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    256 && _t(e(24, a = o && (Ce.getVariable(o, "string") || Ct.awaitGlobalVariable(o, "string", "")) || fo("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && Et(e(23, l = Ce.getDerivedFromVars(Ce.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && gt(e(22, u = Ce.getDerivedFromVars(Ce.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && Re(e(21, c = Ce.getDerivedFromVars(Ce.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(20, f = Ce.getDerivedFromVars(Ce.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && se(e(19, d = Ce.getDerivedFromVars(Ce.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(18, g = Ce.getDerivedFromVars(Ce.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && it(e(17, m = Ce.getDerivedFromVars(Ce.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(16, h = Ce.getDerivedFromVars(Ce.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(15, y = Ce.getDerivedFromVars(Ce.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(14, w = Ce.getDerivedFromVars(Ce.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && O(e(13, F = Ce.getDerivedFromVars(Ce.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && C(e(12, R = Ce.getDerivedFromVars(Ce.json.accessibility))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || Ce.logError(K(new Error('Empty selection "items" in "select"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    2304) {
      let Ne = !1;
      o ? (ht.hasAction() || (Y == null ? void 0 : Y.mode) === "exclude") && (Ne = !0, Ce.logError(K(new Error('Cannot show "select" inside component with an action or inside accessibility mode=exclude')))) : (e(3, X = !0), Ce.logError(K(new Error('Missing "value_variable" in "select"')))), X !== Ne && e(3, X = Ne);
    }
    if (t.$$.dirty[0] & /*filteredItems, $valueVariable, componentContext*/
    97 | t.$$.dirty[1] & /*prevWarnValue*/
    128) {
      const Ne = s.find((jt) => jt.value === st);
      Ne ? e(4, It = (typeof Ne.text == "string" ? Ne.text : Ne.value) || "") : (e(4, It = ""), st && kt !== st && (e(38, kt = st), Ce.logError(K(new Error('Value from the variable was not found in the selection items for "select"')))));
    }
    if (t.$$.dirty[1] & /*$jsonFontSize, fontSize*/
    524289 && e(31, me = Yn(De, me)), t.$$.dirty[0] & /*selfPadding*/
    268435456 | t.$$.dirty[1] & /*$jsonPaddings, fontSize, $direction*/
    6291457 && (e(28, zt = ji(ct || void 0, zt)), e(29, er = zt ? yo(
      {
        top: (Number(zt.top) || 0) / me * 10,
        right: (Number(ut === "ltr" ? zt.end : zt.start) || Number(zt.right) || 0) / me * 10,
        bottom: (Number(zt.bottom) || 0) / me * 10,
        left: (Number(ut === "ltr" ? zt.start : zt.end) || Number(zt.left) || 0) / me * 10
      },
      ut
    ) : "")), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*$jsonHintColor*/
    1048576 && e(30, Xt = gr(ne, 1, Xt)), t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontWeightValue, fontWeight, $jsonFontFamily*/
    458754 && (e(32, Ue = Ci(x, we, Ue)), Qe && typeof Qe == "string" ? e(33, mt = Ct.typefaceProvider(Qe, { fontWeight: Ue || 400 })) : e(33, mt = "")), t.$$.dirty[1] & /*$jsonFontVariationSettings, fontVariationSettings*/
    32776) {
      const Ne = qi(ee);
      Ne !== ye && e(34, ye = Ne);
    }
    if (t.$$.dirty[1] & /*$jsonLineHeight, fontSize*/
    16385) {
      const Ne = Ae;
      Kn(Ne) && e(35, et = Ne / me);
    }
    t.$$.dirty[1] & /*$jsonLetterSpacing, fontSize*/
    8193 && ml(oe) && e(36, Le = ue(oe / me * 10)), t.$$.dirty[1] & /*$jsonTextColor, textColor*/
    4160 && e(37, or = gr(N, 1, or)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    2048 && (Y != null && Y.description ? e(7, Oe = ai(Y)) : Ce.logError(K(new Error('Missing accessibility "description" for select'), { level: "warn" }))), t.$$.dirty[0] & /*selectText*/
    16 && e(11, B = { hint: !It }), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*fontWeight, fontFamily, fontVariationSettings, textColor*/
    78 && e(10, Q = {
      "--divkit-input-hint-color": Xt,
      "font-weight": Ue,
      "font-family": mt,
      "font-variation-settings": ye,
      color: or
    }), t.$$.dirty[0] & /*padding*/
    536870912 | t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(9, ae = {
      padding: er,
      "font-size": ue(me),
      "line-height": et,
      "letter-spacing": Le
    }), t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(8, T = {
      "font-size": ue(me),
      "line-height": et,
      "letter-spacing": Le
    }), t.$$.dirty[0] & /*componentContext, select, prevId*/
    134217733 && Ce.json && nt && (Nt && (Ct.unregisterFocusable(Nt), e(27, Nt = void 0)), Ce.id && !Ce.fakeElement && (e(27, Nt = Ce.id), Ct.registerFocusable(Nt, {
      focus() {
        nt && nt.focus();
      }
    })));
  }, [
    Ce,
    M,
    nt,
    X,
    It,
    s,
    st,
    Oe,
    T,
    ae,
    Q,
    B,
    R,
    F,
    w,
    y,
    h,
    m,
    g,
    d,
    f,
    c,
    u,
    l,
    a,
    pe,
    Dt,
    Nt,
    zt,
    er,
    Xt,
    me,
    Ue,
    mt,
    ye,
    et,
    Le,
    or,
    kt,
    o,
    i,
    n,
    Y,
    N,
    oe,
    Ae,
    ee,
    Qe,
    we,
    x,
    De,
    ne,
    ut,
    ct,
    Mt,
    hr
  ];
}
class Cb extends Hr {
  constructor(r) {
    super(), Rr(this, r, jb, Eb, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Ab = "appkit-video__video", Sb = "appkit-video__container", Vb = "appkit-video_absolute", Ii = {
  video__video: Ab,
  video__container: Sb,
  "video__aspect-wrapper": "appkit-video__aspect-wrapper",
  video_absolute: Vb
};
function Ib(t, r) {
  return Array.isArray(t) && t.length ? t.filter((e) => (e == null ? void 0 : e.type) === "video_source" && typeof e.url == "string" && typeof e.mime_type == "string").map((e) => {
    const n = {
      src: e.url
    };
    return e.mime_type && (n.type = e.mime_type), n;
  }) : r;
}
function Db(t) {
  return t === "fill" ? "cover" : t === "no_scale" ? "none" : "contain";
}
function Uc(t, r, e) {
  const n = t.slice();
  return n[60] = r[e], n;
}
function Gc(t, r, e) {
  const n = t.slice();
  return n[60] = r[e], n;
}
function Fb(t) {
  let r, e;
  return r = new Rn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Tb(t) {
  let r, e;
  return r = new jn({
    props: {
      cls: wt(
        "video",
        Ii,
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
      $$slots: { default: [Bb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = wt(
        "video",
        Ii,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Mb(t) {
  let r, e, n, o, i, s = ar(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = qc(Uc(t, s, l));
  return {
    c() {
      r = Ie("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      this.h();
    },
    l(l) {
      r = Fe(l, "VIDEO", {
        class: !0,
        style: !0,
        poster: !0,
        preload: !0
      });
      var u = ve(r);
      for (let c = 0; c < a.length; c += 1)
        a[c].l(u);
      u.forEach(k), this.h();
    },
    h() {
      p(r, "class", Ii.video__video), p(r, "style", e = nr(
        /*style*/
        t[14]
      )), r.playsInline = !0, r.loop = /*loop*/
      t[5], r.autoplay = /*autoplay*/
      t[6], r.muted = /*muted*/
      t[7], p(
        r,
        "poster",
        /*poster*/
        t[9]
      ), p(r, "preload", n = /*preload*/
      t[8] ? "metadata" : "auto");
    },
    m(l, u) {
      q(l, r, u);
      for (let c = 0; c < a.length; c += 1)
        a[c] && a[c].m(r, null);
      t[52](r), o || (i = [
        Je(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          t[26]
        ),
        Je(
          r,
          "ended",
          /*onEnd*/
          t[27]
        ),
        Je(
          r,
          "playing",
          /*onPlaying*/
          t[28]
        ),
        Je(
          r,
          "pause",
          /*onPause*/
          t[29]
        ),
        Je(
          r,
          "waiting",
          /*onWaiting*/
          t[30]
        ),
        Je(
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
        s = ar(
          /*sources*/
          l[4]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = Uc(l, s, c);
          a[c] ? a[c].p(f, u) : (a[c] = qc(f), a[c].c(), a[c].m(r, null));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = s.length;
      }
      u[0] & /*style*/
      16384 && e !== (e = nr(
        /*style*/
        l[14]
      )) && p(r, "style", e), u[0] & /*loop*/
      32 && (r.loop = /*loop*/
      l[5]), u[0] & /*autoplay*/
      64 && (r.autoplay = /*autoplay*/
      l[6]), u[0] & /*muted*/
      128 && (r.muted = /*muted*/
      l[7]), u[0] & /*poster*/
      512 && p(
        r,
        "poster",
        /*poster*/
        l[9]
      ), u[0] & /*preload*/
      256 && n !== (n = /*preload*/
      l[8] ? "metadata" : "auto") && p(r, "preload", n);
    },
    d(l) {
      l && k(r), un(a, l), t[52](null), o = !1, Ur(i);
    }
  };
}
function Pb(t) {
  let r, e;
  return {
    c() {
      r = Ie("div"), e = new Hi(!1), this.h();
    },
    l(n) {
      r = Fe(n, "DIV", { class: !0 });
      var o = ve(r);
      e = ba(o, !1), o.forEach(k), this.h();
    },
    h() {
      e.a = null, p(r, "class", Ii.video__container);
    },
    m(n, o) {
      q(n, r, o), e.m(
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
function Nb(t) {
  let r, e = `${/*aspectPaddingBottom*/
  t[11]}%`;
  function n(s, a) {
    return (
      /*shouldUseVideoProvider*/
      s[13] ? Ob : zb
    );
  }
  let o = n(t), i = o(t);
  return {
    c() {
      r = Ie("div"), i.c(), this.h();
    },
    l(s) {
      r = Fe(s, "DIV", { class: !0 });
      var a = ve(r);
      i.l(a), a.forEach(k), this.h();
    },
    h() {
      p(r, "class", Ii["video__aspect-wrapper"]), P(r, "padding-bottom", e);
    },
    m(s, a) {
      q(s, r, a), i.m(r, null);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, null))), a[0] & /*aspectPaddingBottom*/
      2048 && e !== (e = `${/*aspectPaddingBottom*/
      s[11]}%`) && P(r, "padding-bottom", e);
    },
    d(s) {
      s && k(r), i.d();
    }
  };
}
function Jc(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Ie("source"), this.h();
    },
    l(s) {
      r = Fe(s, "SOURCE", { src: !0, type: !0 }), this.h();
    },
    h() {
      eo(r.src, e = /*source*/
      t[60].src) || p(r, "src", e), p(r, "type", n = /*source*/
      t[60].type);
    },
    m(s, a) {
      q(s, r, a), o || (i = Je(
        r,
        "error",
        /*onError*/
        t[31]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*sources*/
      16 && !eo(r.src, e = /*source*/
      s[60].src) && p(r, "src", e), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && p(r, "type", n);
    },
    d(s) {
      s && k(r), o = !1, i();
    }
  };
}
function qc(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = Jc(t);
  return {
    c() {
      n.c(), e = We();
    },
    l(o) {
      n.l(o), e = We();
    },
    m(o, i) {
      n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Tr(r, r = /*source*/
      o[60]) ? (n.d(1), n = Jc(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && k(e), n.d(o);
    }
  };
}
function zb(t) {
  let r, e, n, o, i, s = ar(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = Kc(Gc(t, s, l));
  return {
    c() {
      r = Ie("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      this.h();
    },
    l(l) {
      r = Fe(l, "VIDEO", {
        class: !0,
        style: !0,
        poster: !0,
        preload: !0
      });
      var u = ve(r);
      for (let c = 0; c < a.length; c += 1)
        a[c].l(u);
      u.forEach(k), this.h();
    },
    h() {
      p(r, "class", Ii.video__video), p(r, "style", e = nr(
        /*style*/
        t[14]
      )), r.playsInline = !0, r.loop = /*loop*/
      t[5], r.autoplay = /*autoplay*/
      t[6], r.muted = /*muted*/
      t[7], p(
        r,
        "poster",
        /*poster*/
        t[9]
      ), p(r, "preload", n = /*preload*/
      t[8] ? "metadata" : "auto");
    },
    m(l, u) {
      q(l, r, u);
      for (let c = 0; c < a.length; c += 1)
        a[c] && a[c].m(r, null);
      t[50](r), o || (i = [
        Je(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          t[26]
        ),
        Je(
          r,
          "ended",
          /*onEnd*/
          t[27]
        ),
        Je(
          r,
          "playing",
          /*onPlaying*/
          t[28]
        ),
        Je(
          r,
          "pause",
          /*onPause*/
          t[29]
        ),
        Je(
          r,
          "waiting",
          /*onWaiting*/
          t[30]
        ),
        Je(
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
        s = ar(
          /*sources*/
          l[4]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = Gc(l, s, c);
          a[c] ? a[c].p(f, u) : (a[c] = Kc(f), a[c].c(), a[c].m(r, null));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = s.length;
      }
      u[0] & /*style*/
      16384 && e !== (e = nr(
        /*style*/
        l[14]
      )) && p(r, "style", e), u[0] & /*loop*/
      32 && (r.loop = /*loop*/
      l[5]), u[0] & /*autoplay*/
      64 && (r.autoplay = /*autoplay*/
      l[6]), u[0] & /*muted*/
      128 && (r.muted = /*muted*/
      l[7]), u[0] & /*poster*/
      512 && p(
        r,
        "poster",
        /*poster*/
        l[9]
      ), u[0] & /*preload*/
      256 && n !== (n = /*preload*/
      l[8] ? "metadata" : "auto") && p(r, "preload", n);
    },
    d(l) {
      l && k(r), un(a, l), t[50](null), o = !1, Ur(i);
    }
  };
}
function Ob(t) {
  let r, e;
  return {
    c() {
      r = Ie("div"), e = new Hi(!1), this.h();
    },
    l(n) {
      r = Fe(n, "DIV", { class: !0 });
      var o = ve(r);
      e = ba(o, !1), o.forEach(k), this.h();
    },
    h() {
      e.a = null, p(r, "class", Ii.video__container);
    },
    m(n, o) {
      q(n, r, o), e.m(
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
function Yc(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Ie("source"), this.h();
    },
    l(s) {
      r = Fe(s, "SOURCE", { src: !0, type: !0 }), this.h();
    },
    h() {
      eo(r.src, e = /*source*/
      t[60].src) || p(r, "src", e), p(r, "type", n = /*source*/
      t[60].type);
    },
    m(s, a) {
      q(s, r, a), o || (i = Je(
        r,
        "error",
        /*onError*/
        t[31]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*sources*/
      16 && !eo(r.src, e = /*source*/
      s[60].src) && p(r, "src", e), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && p(r, "type", n);
    },
    d(s) {
      s && k(r), o = !1, i();
    }
  };
}
function Kc(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = Yc(t);
  return {
    c() {
      n.c(), e = We();
    },
    l(o) {
      n.l(o), e = We();
    },
    m(o, i) {
      n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Tr(r, r = /*source*/
      o[60]) ? (n.d(1), n = Yc(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && k(e), n.d(o);
    }
  };
}
function Bb(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[11] !== "0" ? Nb : (
        /*shouldUseVideoProvider*/
        i[13] ? Pb : Mb
      )
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = We();
    },
    l(i) {
      o.l(i), r = We();
    },
    m(i, s) {
      o.m(i, s), q(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function Lb(t) {
  let r, e, n, o;
  const i = [Tb, Fb], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(l) {
      e && e.l(l), n = We();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (mr(), $(s[c], 1, 1, () => {
        s[c] = null;
      }), br()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Rb(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g, m, h, y, w, F = S, R = () => (F(), F = I(a, (Oe) => e(39, w = Oe)), a), B, Q = S, ae = () => (Q(), Q = I(m, (Oe) => e(40, B = Oe)), m), T, Y = S, le = () => (Y(), Y = I(g, (Oe) => e(41, T = Oe)), g), C, N = S, z = () => (N(), N = I(d, (Oe) => e(42, C = Oe)), d), O, oe = S, fe = () => (oe(), oe = I(f, (Oe) => e(43, O = Oe)), f), ce, Ae = S, _e = () => (Ae(), Ae = I(c, (Oe) => e(44, ce = Oe)), c), Te, ee = S, Me = () => (ee(), ee = I(u, (Oe) => e(45, Te = Oe)), u), Xe, Qe = S, Ee = () => (Qe(), Qe = I(l, (Oe) => e(46, Xe = Oe)), l), it, we = S, Se = () => (we(), we = I(s, (Oe) => e(47, it = Oe)), s), he, x = S, de = () => (x(), x = I(i, (Oe) => e(48, he = Oe)), i);
  t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Qe()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => x());
  let { componentContext: se } = r, { layoutParams: De = void 0 } = r;
  const tt = zr(en), xe = tt.videoPlayerProvider;
  let ne, Ze = !1, Re = !1, ut, ct, ft = [], Et = !1, st = !1, Lt = !1, _t = !1, pe, ge = "fit", gt = "0", Ce = !1, M, Ct = "", ht, Dt = !!xe;
  function Nt(Oe) {
    var lr, rr;
    const kt = se.getJsonWithVars({
      sources: Oe.video_sources,
      repeatable: Oe.repeatable,
      autostart: Oe.autostart,
      preloadRequired: Oe.preload_required,
      muted: Oe.muted,
      preview: Oe.preview,
      aspect: Oe.aspect,
      scale: Oe.scale,
      payload: Oe.player_settings_payload
    }), Tt = pn(kt.repeatable, !1), Mt = pn(kt.autostart, !1), hr = pn(kt.preloadRequired, !1), Ne = pn(kt.muted, !1), jt = (lr = kt.aspect) != null && lr.ratio && Kn(kt.aspect.ratio) ? kt.aspect.ratio : void 0;
    if ((rr = kt.sources) != null && rr.length)
      return {
        sources: kt.sources,
        repeatable: Tt,
        autostart: Mt,
        preloadRequired: hr,
        muted: Ne,
        preview: kt.preview,
        aspect: jt,
        scale: kt.scale,
        payload: kt.payload
      };
  }
  function nt(Oe) {
    var kt;
    if (Re) {
      Re = !1;
      return;
    }
    ht ? (kt = ht.seek) == null || kt.call(ht, Number(Oe)) : ut && e(3, ut.currentTime = Number(Oe) / 1e3, ut);
  }
  function X() {
    ht ? ht.pause() : ut == null || ut.pause();
  }
  function It() {
    if (ht) {
      ht.play();
      return;
    }
    const Oe = ut == null ? void 0 : ut.play();
    Oe && Oe.catch((kt) => {
      se.logError(K(new Error("Video playing error"), {
        level: "error",
        additional: { originalText: String(kt) }
      }));
    });
  }
  function zt() {
    ut && (Re = !0, o.setValue(Math.floor(ut.currentTime * 1e3)));
  }
  function er() {
    se.execAnyActions(se.json.end_actions);
  }
  function Xt() {
    se.execAnyActions(se.json.resume_actions);
  }
  function me() {
    se.execAnyActions(se.json.pause_actions);
  }
  function Ue() {
    se.execAnyActions(se.json.buffering_actions);
  }
  function mt() {
    se.execAnyActions(se.json.fatal_actions);
  }
  ao(() => {
    if (xe && ct) {
      const Oe = Nt(se.json);
      if (Oe) {
        const kt = xe.instance(ct, Oe);
        kt ? e(36, ht = kt) : e(13, Dt = !1);
      }
    }
  }), cn(() => {
    ne && (tt.unregisterInstance(ne), e(32, ne = void 0)), M && (M(), e(35, M = void 0)), ht && (ht.destroy(), e(36, ht = void 0));
  });
  function ye(Oe) {
    Pr[Oe ? "unshift" : "push"](() => {
      ct = Oe, e(10, ct);
    });
  }
  function et(Oe) {
    Pr[Oe ? "unshift" : "push"](() => {
      ut = Oe, e(3, ut);
    });
  }
  function Le(Oe) {
    Pr[Oe ? "unshift" : "push"](() => {
      ct = Oe, e(10, ct);
    });
  }
  function or(Oe) {
    Pr[Oe ? "unshift" : "push"](() => {
      ut = Oe, e(3, ut);
    });
  }
  return t.$$set = (Oe) => {
    "componentContext" in Oe && e(0, se = Oe.componentContext), "layoutParams" in Oe && e(1, De = Oe.layoutParams);
  }, t.$$.update = () => {
    var Oe;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && se.json && (e(5, Et = !1), e(6, st = !1), e(7, Lt = !1), e(8, _t = !1), e(9, pe = void 0), e(33, ge = "fit"), e(34, Ce = !1), e(13, Dt = !!xe)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*customVideoInstance, $jsonSource, $jsonRepeatable, $jsonAutostart, $jsonMuted, $jsonPreload, $jsonPreview, $jsonScale, $jsonAspect*/
    260384 && se.json && ht && (he || it || w || Xe || Te || ce || O || C)) {
      const kt = Nt(se.json);
      kt && ((Oe = ht.update) == null || Oe.call(ht, kt));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(38, n = se.json.elapsed_time_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*elapsedVariableName*/
    128 && e(37, o = n && (se.getVariable(n, "integer") || tt.awaitGlobalVariable(n, "integer", 0)) || fo("temp", "integer", 0)), t.$$.dirty[1] & /*elapsedVariable, elapsedVariableUnsubscriber*/
    80 && o && (M && M(), e(35, M = o.subscribe(nt))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(25, i = se.getDerivedFromVars(se.json.video_sources))), t.$$.dirty[0] & /*componentContext*/
    1 && Se(e(24, s = se.getDerivedFromVars(se.json.repeatable))), t.$$.dirty[0] & /*componentContext*/
    1 && R(e(23, a = se.getDerivedFromVars(se.json.autostart))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(22, l = se.getDerivedFromVars(se.json.muted))), t.$$.dirty[0] & /*componentContext*/
    1 && Me(e(21, u = se.getDerivedFromVars(se.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(20, c = se.getDerivedFromVars(se.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(19, f = se.getDerivedFromVars(se.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && z(e(18, d = se.getDerivedFromVars(se.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(17, g = se.getDerivedFromVars(se.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(16, m = se.getDerivedFromVars(se.json.height))), t.$$.dirty[0] & /*sources, componentContext*/
    17 | t.$$.dirty[1] & /*$jsonSource*/
    131072 && (e(4, ft = Ib(he, ft)), ft.length ? e(2, Ze = !1) : (e(2, Ze = !0), se.logError(K(new Error('Missing "video_sources" in "video"'))))), t.$$.dirty[0] & /*loop*/
    32 | t.$$.dirty[1] & /*$jsonRepeatable*/
    65536 && e(5, Et = pn(it, Et)), t.$$.dirty[0] & /*autoplay*/
    64 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && e(6, st = pn(w, st)), t.$$.dirty[0] & /*muted*/
    128 | t.$$.dirty[1] & /*$jsonMuted*/
    32768 && e(7, Lt = pn(Xe, Lt)), t.$$.dirty[0] & /*preload*/
    256 | t.$$.dirty[1] & /*$jsonPreload*/
    16384 && e(8, _t = pn(Te, _t)), t.$$.dirty[0] & /*poster*/
    512 | t.$$.dirty[1] & /*$jsonPreview*/
    8192 && e(9, pe = typeof ce == "string" ? Nd(ce) : pe), t.$$.dirty[1] & /*$jsonScale, scale*/
    4100 && e(33, ge = Db(O) || ge), t.$$.dirty[1] & /*$jsonAspect, $jsonWidth, $jsonHeight*/
    3584) {
      const kt = C == null ? void 0 : C.ratio;
      kt && Kn(kt) ? (e(11, gt = (100 / Number(kt)).toFixed(2)), e(34, Ce = !0)) : (e(11, gt = "0"), e(34, Ce = (!T || T.type === "match_parent") && (B == null ? void 0 : B.type) === "match_parent"));
    }
    t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*prevId*/
    2 && se.json && (ne && (tt.unregisterInstance(ne), e(32, ne = void 0)), se.id && !Ze && !se.fakeElement && (e(32, ne = se.id), tt.registerInstance(ne, { pause: X, start: It }))), t.$$.dirty[0] & /*componentContext, videoElem*/
    9 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && se.json && w && ut && It(), t.$$.dirty[1] & /*isAbsolute*/
    8 && e(15, h = { absolute: Ce }), t.$$.dirty[1] & /*scale*/
    4 && e(14, y = { "object-fit": ge });
  }, [
    se,
    De,
    Ze,
    ut,
    ft,
    Et,
    st,
    Lt,
    _t,
    pe,
    ct,
    gt,
    Ct,
    Dt,
    y,
    h,
    m,
    g,
    d,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    zt,
    er,
    Xt,
    me,
    Ue,
    mt,
    ne,
    ge,
    Ce,
    M,
    ht,
    o,
    n,
    w,
    B,
    T,
    C,
    O,
    ce,
    Te,
    Xe,
    it,
    he,
    ye,
    et,
    Le,
    or
  ];
}
class Hb extends Hr {
  constructor(r) {
    super(), Rr(this, r, Rb, Lb, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Wb = "appkit-switch__tumbler", Ub = "appkit-switch__tumbler_checked", Gb = "appkit-switch_disabled", Jb = "appkit-switch__thumb", qb = "appkit-switch_direction_rtl", Yb = "appkit-switch__input", bi = {
  switch: "appkit-switch",
  switch__tumbler: Wb,
  switch__tumbler_checked: Ub,
  switch_disabled: Gb,
  switch__thumb: Jb,
  switch_direction_rtl: qb,
  switch__input: Yb
};
function Gi(t) {
  return t === !0 || t === 1;
}
function Kb(t) {
  let r, e;
  return r = new Rn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Xb(t) {
  let r, e;
  return r = new jn({
    props: {
      cls: wt(
        "switch",
        bi,
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
          Zb,
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
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = wt(
        "switch",
        bi,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Zb(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Ie("div"), e = Ie("div"), o = dr(), i = Ie("input"), this.h();
    },
    l(c) {
      r = Fe(c, "DIV", { class: !0 });
      var f = ve(r);
      e = Fe(f, "DIV", { class: !0 }), ve(e).forEach(k), f.forEach(k), o = _r(c), i = Fe(c, "INPUT", {
        type: !0,
        class: !0,
        autocomplete: !0,
        "aria-label": !0
      }), this.h();
    },
    h() {
      p(e, "class", bi.switch__thumb), p(r, "class", n = wt("switch__tumbler", bi, { checked: (
        /*value*/
        t[3]
      ) })), p(i, "type", "checkbox"), p(i, "class", s = wt("switch__input", bi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[31]
        )
      })), p(i, "autocomplete", "off"), p(
        i,
        "aria-label",
        /*description*/
        t[6]
      ), i.disabled = a = !/*isEnabled*/
      t[5], i.checked = /*value*/
      t[3];
    },
    m(c, f) {
      q(c, r, f), yt(r, e), q(c, o, f), q(c, i, f), t[25](i), l || (u = [
        Je(
          i,
          "input",
          /*onInput*/
          t[14]
        ),
        Je(i, "focus", function() {
          Lr(
            /*focusHandler*/
            t[29]
          ) && t[29].apply(this, arguments);
        }),
        Je(i, "blur", function() {
          Lr(
            /*blurHandler*/
            t[30]
          ) && t[30].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[0] & /*value*/
      8 && n !== (n = wt("switch__tumbler", bi, { checked: (
        /*value*/
        t[3]
      ) })) && p(r, "class", n), f[1] & /*hasCustomFocus*/
      1 && s !== (s = wt("switch__input", bi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[31]
        )
      })) && p(i, "class", s), f[0] & /*description*/
      64 && p(
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
      c && (k(r), k(o), k(i)), t[25](null), l = !1, Ur(u);
    }
  };
}
function Qb(t) {
  let r, e, n, o;
  const i = [Xb, Kb], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(l) {
      e && e.l(l), n = We();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (mr(), $(s[c], 1, 1, () => {
        s[c] = null;
      }), br()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function xb(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g = S, m = () => (g(), g = I(s, (Ee) => e(21, d = Ee)), s), h, y = S, w = () => (y(), y = I(l, (Ee) => e(22, h = Ee)), l), F, R = S, B = () => (R(), R = I(a, (Ee) => e(23, F = Ee)), a), Q, ae = S, T = () => (ae(), ae = I(i, (Ee) => e(24, Q = Ee)), i);
  t.$$.on_destroy.push(() => g()), t.$$.on_destroy.push(() => y()), t.$$.on_destroy.push(() => R()), t.$$.on_destroy.push(() => ae());
  let { componentContext: Y } = r, { layoutParams: le = void 0 } = r;
  const C = zr(en), N = zr(Bo), z = C.direction;
  En(t, z, (Ee) => e(20, f = Ee));
  let O, oe, fe = !1, ce = !1, Ae = "", _e = !0, Te = "#129386", ee = "#1293864c";
  function Me() {
    e(5, _e = !0), e(16, Te = "#129386"), e(17, ee = "#1293864c");
  }
  function Xe(Ee) {
    e(3, fe = Ee.target.checked), i.setValue(fe);
  }
  cn(() => {
    O && (C.unregisterFocusable(O), e(15, O = void 0));
  });
  function Qe(Ee) {
    Pr[Ee ? "unshift" : "push"](() => {
      oe = Ee, e(2, oe);
    });
  }
  return t.$$set = (Ee) => {
    "componentContext" in Ee && e(0, Y = Ee.componentContext), "layoutParams" in Ee && e(1, le = Ee.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(19, n = Y.origJson), t.$$.dirty[0] & /*origJson*/
    524288 && n && Me(), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, o = Y.json.is_on_variable), t.$$.dirty[0] & /*variable, componentContext*/
    262145 && T(e(7, i = o && (Y.getVariable(o, "boolean") || C.awaitGlobalVariable(o, "boolean", !1)) || fo("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(12, s = Y.getDerivedFromVars(Y.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && B(e(11, a = Y.getDerivedFromVars(Y.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && w(e(10, l = Y.getDerivedFromVars(Y.json.on_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    2359313) {
      let Ee = !1;
      o ? (N.hasAction() || (d == null ? void 0 : d.mode) === "exclude") && (Ee = !0, Y.logError(K(new Error('Cannot show "switch" inside component with an action or inside accessibility mode=exclude')))) : (Ee = !0, Y.logError(K(new Error('Missing "is_on_variable" in "switch"')))), ce !== Ee && e(4, ce = Ee);
    }
    if (t.$$.dirty[0] & /*value, $valueVariable*/
    16777224 && Gi(fe) !== Gi(Q) && e(3, fe = Gi(Q)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    8388640 && e(5, _e = pn(F, _e)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    4259840 && (e(16, Te = gr(h, 1, Te)), typeof h == "string")) {
      const Ee = bo(h);
      Ee && (Ee.a *= 0.3, e(17, ee = va(Ee)));
    }
    t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    2097153 && (d != null && d.description ? e(6, Ae = ai(d)) : Y.logError(K(new Error('Missing accessibility "description" for switch'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled, $direction*/
    1048608 && e(9, u = {
      disabled: !_e,
      direction: f
    }), t.$$.dirty[0] & /*onColor, onSubColor*/
    196608 && e(8, c = {
      "--divkit-switch-on-color": Te,
      "--divkit-switch-on-sub-color": ee
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    32773 && oe && Y.json && (O && (C.unregisterFocusable(O), e(15, O = void 0)), Y.id && !Y.fakeElement && (e(15, O = Y.id), C.registerFocusable(O, {
      focus() {
        oe && oe.focus();
      }
    })));
  }, [
    Y,
    le,
    oe,
    fe,
    ce,
    _e,
    Ae,
    i,
    c,
    u,
    l,
    a,
    s,
    z,
    Xe,
    O,
    Te,
    ee,
    o,
    n,
    f,
    d,
    h,
    F,
    Q,
    Qe
  ];
}
class $b extends Hr {
  constructor(r) {
    super(), Rr(this, r, xb, Qb, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const ey = "appkit-checkbox", ty = "appkit-checkbox__box", ry = "appkit-checkbox__box_checked", ny = "appkit-checkbox__checkmark", oy = "appkit-checkbox_disabled", iy = "appkit-checkbox__input", yi = {
  checkbox: ey,
  checkbox__box: ty,
  checkbox__box_checked: ry,
  checkbox__checkmark: ny,
  checkbox_disabled: oy,
  checkbox__input: iy
};
function sy(t) {
  let r, e;
  return r = new Rn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function ly(t) {
  let r, e;
  return r = new jn({
    props: {
      cls: wt(
        "checkbox",
        yi,
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
          ay,
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
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = wt(
        "checkbox",
        yi,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function ay(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Ie("div"), e = Ie("div"), o = dr(), i = Ie("input"), this.h();
    },
    l(c) {
      r = Fe(c, "DIV", { class: !0 });
      var f = ve(r);
      e = Fe(f, "DIV", { class: !0 }), ve(e).forEach(k), f.forEach(k), o = _r(c), i = Fe(c, "INPUT", {
        type: !0,
        class: !0,
        autocomplete: !0,
        role: !0,
        "aria-checked": !0,
        "aria-label": !0
      }), this.h();
    },
    h() {
      p(e, "class", yi.checkbox__checkmark), p(r, "class", n = wt("checkbox__box", yi, { checked: (
        /*value*/
        t[3]
      ) })), p(i, "type", "checkbox"), p(i, "class", s = wt("checkbox__input", yi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[34]
        )
      })), p(i, "autocomplete", "off"), p(i, "role", "checkbox"), p(
        i,
        "aria-checked",
        /*value*/
        t[3]
      ), p(
        i,
        "aria-label",
        /*description*/
        t[6]
      ), i.disabled = a = !/*isEnabled*/
      t[5], i.checked = /*value*/
      t[3];
    },
    m(c, f) {
      q(c, r, f), yt(r, e), q(c, o, f), q(c, i, f), t[28](i), l || (u = [
        Je(
          i,
          "input",
          /*onInput*/
          t[15]
        ),
        Je(i, "focus", function() {
          Lr(
            /*focusHandler*/
            t[32]
          ) && t[32].apply(this, arguments);
        }),
        Je(i, "blur", function() {
          Lr(
            /*blurHandler*/
            t[33]
          ) && t[33].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[0] & /*value*/
      8 && n !== (n = wt("checkbox__box", yi, { checked: (
        /*value*/
        t[3]
      ) })) && p(r, "class", n), f[1] & /*hasCustomFocus*/
      8 && s !== (s = wt("checkbox__input", yi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[34]
        )
      })) && p(i, "class", s), f[0] & /*value*/
      8 && p(
        i,
        "aria-checked",
        /*value*/
        t[3]
      ), f[0] & /*description*/
      64 && p(
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
      c && (k(r), k(o), k(i)), t[28](null), l = !1, Ur(u);
    }
  };
}
function uy(t) {
  let r, e, n, o;
  const i = [ly, sy], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(l) {
      e && e.l(l), n = We();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (mr(), $(s[c], 1, 1, () => {
        s[c] = null;
      }), br()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function cy(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g, m = S, h = () => (m(), m = I(s, (se) => e(22, g = se)), s), y, w = S, F = () => (w(), w = I(c, (se) => e(23, y = se)), c), R, B = S, Q = () => (B(), B = I(u, (se) => e(24, R = se)), u), ae, T = S, Y = () => (T(), T = I(l, (se) => e(25, ae = se)), l), le, C = S, N = () => (C(), C = I(a, (se) => e(26, le = se)), a), z, O = S, oe = () => (O(), O = I(i, (se) => e(27, z = se)), i);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => B()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => C()), t.$$.on_destroy.push(() => O());
  let { componentContext: fe } = r, { layoutParams: ce = void 0 } = r;
  const Ae = zr(en), _e = zr(Bo);
  let Te, ee, Me = !1, Xe = !1, Qe = "", Ee = !0, it = "#129386", we = "rgba(0, 0, 0, .3)", Se = "#fff";
  function he() {
    e(5, Ee = !0), e(17, it = "#129386"), e(18, we = "rgba(0, 0, 0, .3)"), e(19, Se = "#fff");
  }
  function x(se) {
    e(3, Me = se.target.checked), i.setValue(Me);
  }
  cn(() => {
    Te && (Ae.unregisterFocusable(Te), e(16, Te = void 0));
  });
  function de(se) {
    Pr[se ? "unshift" : "push"](() => {
      ee = se, e(2, ee);
    });
  }
  return t.$$set = (se) => {
    "componentContext" in se && e(0, fe = se.componentContext), "layoutParams" in se && e(1, ce = se.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(21, n = fe.origJson), t.$$.dirty[0] & /*origJson*/
    2097152 && n && he(), t.$$.dirty[0] & /*componentContext*/
    1 && e(20, o = fe.json.is_checked_variable), t.$$.dirty[0] & /*variable, componentContext*/
    1048577 && oe(e(7, i = o && (fe.getVariable(o, "boolean") || Ae.awaitGlobalVariable(o, "boolean", !1)) || fo("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && h(e(14, s = fe.getDerivedFromVars(fe.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(13, a = fe.getDerivedFromVars(fe.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Y(e(12, l = fe.getDerivedFromVars(fe.json.on_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Q(e(11, u = fe.getDerivedFromVars(fe.json.off_color))), t.$$.dirty[0] & /*componentContext*/
    1 && F(e(10, c = fe.getDerivedFromVars(fe.json.check_mark_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    5242897) {
      let se = !1;
      o ? (_e.hasAction() || (g == null ? void 0 : g.mode) === "exclude") && (se = !0, fe.logError(K(new Error('Cannot show "checkbox" inside component with an action or inside accessibility mode=exclude')))) : (se = !0, fe.logError(K(new Error('Missing "is_checked_variable" in "checkbox"')))), Xe !== se && e(4, Xe = se);
    }
    t.$$.dirty[0] & /*value, $valueVariable*/
    134217736 && Gi(Me) !== Gi(z) && e(3, Me = Gi(z)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    67108896 && e(5, Ee = pn(le, Ee)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    33685504 && e(17, it = gr(ae, 1, it)), t.$$.dirty[0] & /*$jsonOffColor, offColor*/
    17039360 && e(18, we = gr(R, 1, we)), t.$$.dirty[0] & /*$jsonCheckMarkColor, checkMarkColor*/
    8912896 && e(19, Se = gr(y, 1, Se)), t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    4194305 && (g != null && g.description ? e(6, Qe = ai(g)) : fe.logError(K(new Error('Missing accessibility "description" for checkbox'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    32 && e(9, f = { disabled: !Ee }), t.$$.dirty[0] & /*onColor, offColor, checkMarkColor*/
    917504 && e(8, d = {
      "--divkit-checkbox-on-color": it,
      "--divkit-checkbox-off-color": we,
      "--divkit-checkbox-check-mark-color": Se
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    65541 && ee && fe.json && (Te && (Ae.unregisterFocusable(Te), e(16, Te = void 0)), fe.id && !fe.fakeElement && (e(16, Te = fe.id), Ae.registerFocusable(Te, {
      focus() {
        ee && ee.focus();
      }
    })));
  }, [
    fe,
    ce,
    ee,
    Me,
    Xe,
    Ee,
    Qe,
    i,
    d,
    f,
    c,
    u,
    l,
    a,
    s,
    x,
    Te,
    it,
    we,
    Se,
    o,
    n,
    g,
    y,
    R,
    ae,
    le,
    z,
    de
  ];
}
class fy extends Hr {
  constructor(r) {
    super(), Rr(this, r, cy, uy, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const dy = "appkit-radio", _y = "appkit-radio__group", hy = "appkit-radio__group_vertical", py = "appkit-radio__group_horizontal", gy = "appkit-radio__item", my = "appkit-radio_disabled", by = "appkit-radio__circle", yy = "appkit-radio__circle_selected", wy = "appkit-radio__dot", vy = "appkit-radio__label", ky = "appkit-radio__input", So = {
  radio: dy,
  radio__group: _y,
  radio__group_vertical: hy,
  radio__group_horizontal: py,
  radio__item: gy,
  radio_disabled: my,
  radio__circle: by,
  radio__circle_selected: yy,
  radio__dot: wy,
  radio__label: vy,
  radio__input: ky
};
function Xc(t, r, e) {
  const n = t.slice();
  return n[55] = r[e], n;
}
function Ey(t) {
  let r, e;
  return r = new Rn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function jy(t) {
  let r, e;
  return r = new jn({
    props: {
      cls: wt(
        "radio",
        So,
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
          Sy,
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
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = wt(
        "radio",
        So,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Cy(t) {
  let r, e = (
    /*item*/
    t[55].value + ""
  ), n;
  return {
    c() {
      r = Ie("span"), n = On(e), this.h();
    },
    l(o) {
      r = Fe(o, "SPAN", { class: !0 });
      var i = ve(r);
      n = Un(i, e), i.forEach(k), this.h();
    },
    h() {
      p(r, "class", So.radio__label);
    },
    m(o, i) {
      q(o, r, i), yt(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      o[55].value + "") && to(n, e);
    },
    d(o) {
      o && k(r);
    }
  };
}
function Ay(t) {
  let r, e = (
    /*item*/
    t[55].text + ""
  ), n;
  return {
    c() {
      r = Ie("span"), n = On(e), this.h();
    },
    l(o) {
      r = Fe(o, "SPAN", { class: !0 });
      var i = ve(r);
      n = Un(i, e), i.forEach(k), this.h();
    },
    h() {
      p(r, "class", So.radio__label);
    },
    m(o, i) {
      q(o, r, i), yt(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      o[55].text + "") && to(n, e);
    },
    d(o) {
      o && k(r);
    }
  };
}
function Zc(t) {
  let r, e, n, o, i, s, a, l, u, c, f, d, g;
  function m(F, R) {
    return (
      /*item*/
      F[55].text ? Ay : Cy
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
      r = Ie("label"), e = Ie("div"), n = Ie("div"), i = dr(), y.c(), s = dr(), a = Ie("input"), f = dr(), this.h();
    },
    l(F) {
      r = Fe(F, "LABEL", { class: !0 });
      var R = ve(r);
      e = Fe(R, "DIV", { class: !0 });
      var B = ve(e);
      n = Fe(B, "DIV", { class: !0 }), ve(n).forEach(k), B.forEach(k), i = _r(R), y.l(R), s = _r(R), a = Fe(R, "INPUT", { type: !0, class: !0, name: !0 }), f = _r(R), R.forEach(k), this.h();
    },
    h() {
      p(n, "class", So.radio__dot), p(e, "class", o = wt("radio__circle", So, {
        selected: (
          /*$valueVariable*/
          t[23] === /*item*/
          t[55].value
        )
      })), p(a, "type", "radio"), p(a, "class", So.radio__input), p(
        a,
        "name",
        /*groupName*/
        t[12]
      ), a.value = l = /*item*/
      t[55].value, a.checked = u = /*$valueVariable*/
      t[23] === /*item*/
      t[55].value, a.disabled = c = !/*isEnabled*/
      t[4], p(r, "class", So.radio__item);
    },
    m(F, R) {
      q(F, r, R), yt(r, e), yt(e, n), yt(r, i), y.m(r, null), yt(r, s), yt(r, a), yt(r, f), d || (g = [
        Je(a, "change", w),
        Je(a, "focus", function() {
          Lr(
            /*focusHandler*/
            t[52]
          ) && t[52].apply(this, arguments);
        }),
        Je(a, "blur", function() {
          Lr(
            /*blurHandler*/
            t[53]
          ) && t[53].apply(this, arguments);
        })
      ], d = !0);
    },
    p(F, R) {
      t = F, R[0] & /*$valueVariable, filteredItems*/
      8388640 && o !== (o = wt("radio__circle", So, {
        selected: (
          /*$valueVariable*/
          t[23] === /*item*/
          t[55].value
        )
      })) && p(e, "class", o), h === (h = m(t)) && y ? y.p(t, R) : (y.d(1), y = h(t), y && (y.c(), y.m(r, s))), R[0] & /*groupName*/
      4096 && p(
        a,
        "name",
        /*groupName*/
        t[12]
      ), R[0] & /*filteredItems*/
      32 && l !== (l = /*item*/
      t[55].value) && (a.value = l), R[0] & /*$valueVariable, filteredItems*/
      8388640 && u !== (u = /*$valueVariable*/
      t[23] === /*item*/
      t[55].value) && (a.checked = u), R[0] & /*isEnabled*/
      16 && c !== (c = !/*isEnabled*/
      t[4]) && (a.disabled = c);
    },
    d(F) {
      F && k(r), y.d(), d = !1, Ur(g);
    }
  };
}
function Sy(t) {
  let r, e, n = ar(
    /*filteredItems*/
    t[5]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Zc(Xc(t, n, i));
  return {
    c() {
      r = Ie("div");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      this.h();
    },
    l(i) {
      r = Fe(i, "DIV", {
        class: !0,
        style: !0,
        role: !0,
        "aria-label": !0
      });
      var s = ve(r);
      for (let a = 0; a < o.length; a += 1)
        o[a].l(s);
      s.forEach(k), this.h();
    },
    h() {
      p(r, "class", e = wt(
        "radio__group",
        So,
        /*groupMods*/
        t[10]
      )), p(
        r,
        "style",
        /*groupStl*/
        t[8]
      ), p(r, "role", "radiogroup"), p(
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
        n = ar(
          /*filteredItems*/
          i[5]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Xc(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Zc(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s[0] & /*groupMods*/
      1024 && e !== (e = wt(
        "radio__group",
        So,
        /*groupMods*/
        i[10]
      )) && p(r, "class", e), s[0] & /*groupStl*/
      256 && p(
        r,
        "style",
        /*groupStl*/
        i[8]
      ), s[0] & /*description*/
      64 && p(
        r,
        "aria-label",
        /*description*/
        i[6]
      );
    },
    d(i) {
      i && k(r), un(o, i), t[48](null);
    }
  };
}
function Vy(t) {
  let r, e, n, o;
  const i = [jy, Ey], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(l) {
      e && e.l(l), n = We();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (mr(), $(s[c], 1, 1, () => {
        s[c] = null;
      }), br()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Iy(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g, m, h, y, w, F, R, B, Q, ae, T, Y = S, le = () => (Y(), Y = I(l, (Ue) => e(37, T = Ue)), l), C, N = S, z = () => (N(), N = I(w, (Ue) => e(38, C = Ue)), w), O, oe = S, fe = () => (oe(), oe = I(y, (Ue) => e(39, O = Ue)), y), ce, Ae = S, _e = () => (Ae(), Ae = I(h, (Ue) => e(40, ce = Ue)), h), Te, ee = S, Me = () => (ee(), ee = I(m, (Ue) => e(41, Te = Ue)), m), Xe, Qe = S, Ee = () => (Qe(), Qe = I(g, (Ue) => e(42, Xe = Ue)), g), it, we = S, Se = () => (we(), we = I(d, (Ue) => e(43, it = Ue)), d), he, x = S, de = () => (x(), x = I(f, (Ue) => e(44, he = Ue)), f), se, De = S, tt = () => (De(), De = I(c, (Ue) => e(45, se = Ue)), c), xe, ne = S, Ze = () => (ne(), ne = I(u, (Ue) => e(46, xe = Ue)), u), Re, ut = S, ct = () => (ut(), ut = I(a, (Ue) => e(23, Re = Ue)), a);
  t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Qe()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => x()), t.$$.on_destroy.push(() => De()), t.$$.on_destroy.push(() => ne()), t.$$.on_destroy.push(() => ut());
  let { componentContext: ft } = r, { layoutParams: Et = void 0 } = r;
  const st = zr(en), Lt = zr(Bo);
  let _t, pe, ge = !1, gt = "", Ce = !0, M = "#129386", Ct = "rgba(0, 0, 0, 0.3)", ht = "", Dt, Nt, nt = "", X = "vertical", It = 8;
  function zt() {
    e(4, Ce = !0), e(26, M = "#129386"), e(27, Ct = "rgba(0, 0, 0, 0.3)"), e(28, ht = ""), e(29, Dt = void 0), e(30, Nt = void 0), e(31, nt = ""), e(32, X = "vertical"), e(33, It = 8);
  }
  function er(Ue) {
    a.setValue(Ue);
  }
  cn(() => {
    _t && (st.unregisterFocusable(_t), e(25, _t = void 0));
  });
  const Xt = (Ue) => er(Ue.value);
  function me(Ue) {
    Pr[Ue ? "unshift" : "push"](() => {
      pe = Ue, e(2, pe);
    });
  }
  return t.$$set = (Ue) => {
    "componentContext" in Ue && e(0, ft = Ue.componentContext), "layoutParams" in Ue && e(1, Et = Ue.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(36, n = ft.origJson), t.$$.dirty[1] & /*origJson*/
    32 && n && zt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(34, o = ft.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(35, i = ft.json.options), t.$$.dirty[1] & /*items*/
    16 && e(5, s = Array.isArray(i) && i.filter((Ue) => typeof Ue.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8 && ct(e(7, a = o && (ft.getVariable(o, "string") || st.awaitGlobalVariable(o, "string", "")) || fo("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(22, l = ft.getDerivedFromVars(ft.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Ze(e(21, u = ft.getDerivedFromVars(ft.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && tt(e(20, c = ft.getDerivedFromVars(ft.json.selected_color))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(19, f = ft.getDerivedFromVars(ft.json.default_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Se(e(18, d = ft.getDerivedFromVars(ft.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(17, g = ft.getDerivedFromVars(ft.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && Me(e(16, m = ft.getDerivedFromVars(ft.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(15, h = ft.getDerivedFromVars(ft.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(14, y = ft.getDerivedFromVars(ft.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && z(e(13, w = ft.getDerivedFromVars(ft.json.item_spacing))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || ft.logError(K(new Error('Empty "options" in "radio"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    72) {
      let Ue = !1;
      o ? (Lt.hasAction() || (T == null ? void 0 : T.mode) === "exclude") && (Ue = !0, ft.logError(K(new Error('Cannot show "radio" inside component with an action or inside accessibility mode=exclude')))) : (Ue = !0, ft.logError(K(new Error('Missing "value_variable" in "radio"')))), ge !== Ue && e(3, ge = Ue);
    }
    t.$$.dirty[0] & /*isEnabled*/
    16 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    32768 && e(4, Ce = pn(xe, Ce)), t.$$.dirty[0] & /*selectedColor*/
    67108864 | t.$$.dirty[1] & /*$jsonSelectedColor*/
    16384 && e(26, M = gr(se, 1, M)), t.$$.dirty[0] & /*defaultColor*/
    134217728 | t.$$.dirty[1] & /*$jsonDefaultColor*/
    8192 && e(27, Ct = gr(he, 1, Ct)), t.$$.dirty[0] & /*textColor*/
    268435456 | t.$$.dirty[1] & /*$jsonTextColor*/
    4096 && e(28, ht = gr(it, 1, ht)), t.$$.dirty[0] & /*fontSize*/
    536870912 | t.$$.dirty[1] & /*$jsonFontSize*/
    2048 && e(29, Dt = typeof Xe == "number" && Xe > 0 ? Xe : Dt), t.$$.dirty[0] & /*fontWeight*/
    1073741824 | t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontFamily*/
    1536 && (e(30, Nt = Ci(Te, void 0, Nt)), ce && typeof ce == "string" ? e(31, nt = st.typefaceProvider(ce, { fontWeight: Nt || 400 })) : e(31, nt = "")), t.$$.dirty[1] & /*$jsonOrientation, orientation*/
    258 && e(32, X = O === "horizontal" || O === "vertical" ? O : X), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    132 && e(33, It = typeof C == "number" && C >= 0 ? C : It), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    64 && (T != null && T.description ? e(6, gt = ai(T)) : ft.logError(K(new Error('Missing accessibility "description" for radio'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext*/
    1 && e(12, F = ft.id || `radio_${Math.random().toString(36).slice(2)}`), t.$$.dirty[0] & /*isEnabled*/
    16 && e(11, R = { disabled: !Ce }), t.$$.dirty[1] & /*orientation*/
    2 && e(10, B = { [X]: !0 }), t.$$.dirty[0] & /*selectedColor, defaultColor, textColor, fontSize, fontWeight*/
    2080374784 | t.$$.dirty[1] & /*fontFamily*/
    1 && e(9, Q = {
      "--divkit-radio-selected-color": M,
      "--divkit-radio-default-color": Ct,
      ...ht ? { "--divkit-radio-text-color": ht } : {},
      ...Dt ? { "font-size": ue(Dt) } : {},
      ...Nt ? { "font-weight": Nt } : {},
      ...nt ? { "font-family": nt } : {}
    }), t.$$.dirty[1] & /*itemSpacing*/
    4 && e(8, ae = `gap: ${ue(It)}`), t.$$.dirty[0] & /*container, componentContext, prevId*/
    33554437 && pe && ft.json && (_t && (st.unregisterFocusable(_t), e(25, _t = void 0)), ft.id && !ft.fakeElement && (e(25, _t = ft.id), st.registerFocusable(_t, {
      focus() {
        if (pe) {
          const Ue = pe.querySelector("input");
          Ue && Ue.focus();
        }
      }
    })));
  }, [
    ft,
    Et,
    pe,
    ge,
    Ce,
    s,
    gt,
    a,
    ae,
    Q,
    B,
    R,
    F,
    w,
    y,
    h,
    m,
    g,
    d,
    f,
    c,
    u,
    l,
    Re,
    er,
    _t,
    M,
    Ct,
    ht,
    Dt,
    Nt,
    nt,
    X,
    It,
    o,
    i,
    n,
    T,
    C,
    O,
    ce,
    Te,
    Xe,
    it,
    he,
    se,
    xe,
    Xt,
    me
  ];
}
class Dy extends Hr {
  constructor(r) {
    super(), Rr(this, r, Iy, Vy, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Fy = "appkit-progress", Ty = "appkit-progress__linear", My = "appkit-progress__circular", si = {
  progress: Fy,
  progress__linear: Ty,
  "progress__linear-fill": "appkit-progress__linear-fill",
  "progress__linear-fill_indeterminate": "appkit-progress__linear-fill_indeterminate",
  "progress-linear-indeterminate": "appkit-progress-linear-indeterminate",
  progress__circular: My,
  "progress__circular-track": "appkit-progress__circular-track",
  "progress__circular-fill": "appkit-progress__circular-fill",
  "progress__circular-fill_indeterminate": "appkit-progress__circular-fill_indeterminate",
  "progress-circular-indeterminate": "appkit-progress-circular-indeterminate"
};
function Py(t) {
  let r, e;
  return r = new Rn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Ny(t) {
  let r, e;
  return r = new jn({
    props: {
      cls: wt("progress", si, {}),
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
      $$slots: { default: [By] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function zy(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Zr("svg"), e = Zr("circle"), n = Zr("circle"), this.h();
    },
    l(s) {
      r = sn(s, "svg", {
        class: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        role: !0,
        "aria-valuenow": !0,
        "aria-valuemin": !0,
        "aria-valuemax": !0
      });
      var a = ve(r);
      e = sn(a, "circle", {
        class: !0,
        cx: !0,
        cy: !0,
        r: !0,
        "stroke-width": !0
      }), ve(e).forEach(k), n = sn(a, "circle", {
        class: !0,
        cx: !0,
        cy: !0,
        r: !0,
        "stroke-width": !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0,
        "stroke-linecap": !0
      }), ve(n).forEach(k), a.forEach(k), this.h();
    },
    h() {
      p(e, "class", si["progress__circular-track"]), p(e, "cx", ri / 2), p(e, "cy", ri / 2), p(e, "r", ra), p(
        e,
        "stroke-width",
        /*trackThickness*/
        t[5]
      ), p(n, "class", o = wt("progress__circular-fill", si, {
        indeterminate: (
          /*isIndeterminate*/
          t[4]
        )
      })), p(n, "cx", ri / 2), p(n, "cy", ri / 2), p(n, "r", ra), p(
        n,
        "stroke-width",
        /*trackThickness*/
        t[5]
      ), p(
        n,
        "stroke-dasharray",
        /*circularCircumference*/
        t[15]
      ), p(n, "stroke-dashoffset", i = /*isIndeterminate*/
      t[4] ? (
        /*circularCircumference*/
        t[15] * 0.75
      ) : (
        /*circularOffset*/
        t[8]
      )), p(n, "stroke-linecap", "round"), p(r, "class", si.progress__circular), p(r, "width", ri), p(r, "height", ri), p(r, "viewBox", "0 0 " + ri + " " + ri), p(r, "role", "progressbar"), p(
        r,
        "aria-valuenow",
        /*ariaValue*/
        t[6]
      ), p(r, "aria-valuemin", 0), p(r, "aria-valuemax", 100);
    },
    m(s, a) {
      q(s, r, a), yt(r, e), yt(r, n);
    },
    p(s, a) {
      a & /*trackThickness*/
      32 && p(
        e,
        "stroke-width",
        /*trackThickness*/
        s[5]
      ), a & /*isIndeterminate*/
      16 && o !== (o = wt("progress__circular-fill", si, {
        indeterminate: (
          /*isIndeterminate*/
          s[4]
        )
      })) && p(n, "class", o), a & /*trackThickness*/
      32 && p(
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
      )) && p(n, "stroke-dashoffset", i), a & /*ariaValue*/
      64 && p(
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
function Oy(t) {
  let r, e, n;
  return {
    c() {
      r = Ie("div"), e = Ie("div"), this.h();
    },
    l(o) {
      r = Fe(o, "DIV", {
        class: !0,
        style: !0,
        role: !0,
        "aria-valuenow": !0,
        "aria-valuemin": !0,
        "aria-valuemax": !0
      });
      var i = ve(r);
      e = Fe(i, "DIV", { class: !0, style: !0 }), ve(e).forEach(k), i.forEach(k), this.h();
    },
    h() {
      p(e, "class", n = wt("progress__linear-fill", si, {
        indeterminate: (
          /*isIndeterminate*/
          t[4]
        )
      })), P(
        e,
        "width",
        /*isIndeterminate*/
        t[4] ? "30%" : (
          /*progressValue*/
          t[2] * 100 + "%"
        )
      ), p(r, "class", si.progress__linear), P(r, "height", ue(
        /*trackThickness*/
        t[5]
      )), p(r, "role", "progressbar"), p(
        r,
        "aria-valuenow",
        /*ariaValue*/
        t[6]
      ), p(r, "aria-valuemin", 0), p(r, "aria-valuemax", 100);
    },
    m(o, i) {
      q(o, r, i), yt(r, e);
    },
    p(o, i) {
      i & /*isIndeterminate*/
      16 && n !== (n = wt("progress__linear-fill", si, {
        indeterminate: (
          /*isIndeterminate*/
          o[4]
        )
      })) && p(e, "class", n), i & /*isIndeterminate, progressValue*/
      20 && P(
        e,
        "width",
        /*isIndeterminate*/
        o[4] ? "30%" : (
          /*progressValue*/
          o[2] * 100 + "%"
        )
      ), i & /*trackThickness*/
      32 && P(r, "height", ue(
        /*trackThickness*/
        o[5]
      )), i & /*ariaValue*/
      64 && p(
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
function By(t) {
  let r;
  function e(i, s) {
    return (
      /*progressStyle*/
      i[3] === "linear" ? Oy : zy
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = We();
    },
    l(i) {
      o.l(i), r = We();
    },
    m(i, s) {
      o.m(i, s), q(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function Ly(t) {
  let r, e, n, o;
  const i = [Ny, Py], s = [];
  function a(l, u) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(l) {
      e && e.l(l), n = We();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, [u]) {
      e && e.p(l, u);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
const ri = 48, ra = 20;
function Ry(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g, m = S, h = () => (m(), m = I(u, (it) => e(19, g = it)), u), y, w = S, F = () => (w(), w = I(l, (it) => e(20, y = it)), l), R, B = S, Q = () => (B(), B = I(a, (it) => e(21, R = it)), a), ae, T = S, Y = () => (T(), T = I(s, (it) => e(22, ae = it)), s), le, C = S, N = () => (C(), C = I(i, (it) => e(23, le = it)), i), z, O = S, oe = () => (O(), O = I(o, (it) => e(24, z = it)), o);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => B()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => C()), t.$$.on_destroy.push(() => O());
  let { componentContext: fe } = r, { layoutParams: ce = void 0 } = r;
  zr(en);
  let Ae = 0, _e = "linear", Te = !1, ee = "#129386", Me = "rgba(0, 0, 0, .1)", Xe = 4;
  function Qe() {
    e(2, Ae = 0), e(3, _e = "linear"), e(4, Te = !1), e(16, ee = "#129386"), e(17, Me = "rgba(0, 0, 0, .1)"), e(5, Xe = 4);
  }
  const Ee = 2 * Math.PI * ra;
  return t.$$set = (it) => {
    "componentContext" in it && e(0, fe = it.componentContext), "layoutParams" in it && e(1, ce = it.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(18, n = fe.origJson), t.$$.dirty & /*origJson*/
    262144 && n && Qe(), t.$$.dirty & /*componentContext*/
    1 && oe(e(14, o = fe.getDerivedFromVars(fe.json.value))), t.$$.dirty & /*componentContext*/
    1 && N(e(13, i = fe.getDerivedFromVars(fe.json.style))), t.$$.dirty & /*componentContext*/
    1 && Y(e(12, s = fe.getDerivedFromVars(fe.json.is_indeterminate))), t.$$.dirty & /*componentContext*/
    1 && Q(e(11, a = fe.getDerivedFromVars(fe.json.active_color))), t.$$.dirty & /*componentContext*/
    1 && F(e(10, l = fe.getDerivedFromVars(fe.json.inactive_color))), t.$$.dirty & /*componentContext*/
    1 && h(e(9, u = fe.getDerivedFromVars(fe.json.track_thickness))), t.$$.dirty & /*$jsonValue, progressValue*/
    16777220 && e(2, Ae = typeof z == "number" ? Math.max(0, Math.min(1, z)) : Ae), t.$$.dirty & /*$jsonStyle, progressStyle*/
    8388616 && e(3, _e = le === "linear" || le === "circular" ? le : _e), t.$$.dirty & /*$jsonIsIndeterminate, isIndeterminate*/
    4194320 && e(4, Te = pn(ae, Te)), t.$$.dirty & /*$jsonActiveColor, activeColor*/
    2162688 && e(16, ee = gr(R, 1, ee)), t.$$.dirty & /*$jsonInactiveColor, inactiveColor*/
    1179648 && e(17, Me = gr(y, 1, Me)), t.$$.dirty & /*$jsonTrackThickness, trackThickness*/
    524320 && e(5, Xe = typeof g == "number" && g >= 0 ? g : Xe), t.$$.dirty & /*progressValue*/
    4 && e(8, c = Ee * (1 - Ae)), t.$$.dirty & /*activeColor, inactiveColor*/
    196608 && e(7, f = {
      "--divkit-progress-active-color": ee,
      "--divkit-progress-inactive-color": Me
    }), t.$$.dirty & /*isIndeterminate, progressValue*/
    20 && e(6, d = Te ? void 0 : Math.round(Ae * 100));
  }, [
    fe,
    ce,
    Ae,
    _e,
    Te,
    Xe,
    d,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    Ee,
    ee,
    Me,
    n,
    g,
    y,
    R,
    ae,
    le,
    z
  ];
}
class Hy extends Hr {
  constructor(r) {
    super(), Rr(this, r, Ry, Ly, Tr, { componentContext: 0, layoutParams: 1 });
  }
}
const Wy = "appkit-table", Uy = "appkit-table_halign_start", Gy = "appkit-table_halign_center", Jy = "appkit-table_halign_end", qy = "appkit-table_valign_start", Yy = "appkit-table_valign_center", Ky = "appkit-table_valign_end", Xy = "appkit-table__cell", Zy = "appkit-table__cell_halign_left", Qy = "appkit-table__cell_halign_start", xy = "appkit-table__cell_halign_center", $y = "appkit-table__cell_halign_right", ew = "appkit-table__cell_halign_end", tw = "appkit-table__cell_valign_top", rw = "appkit-table__cell_valign_center", nw = "appkit-table__cell_valign_bottom", ow = "appkit-table__cell_valign_baseline", iw = "appkit-table__separator", sw = "appkit-table__separator_row", lw = "appkit-table__separator_col", Zo = {
  table: Wy,
  table_halign_start: Uy,
  table_halign_center: Gy,
  table_halign_end: Jy,
  table_valign_start: qy,
  table_valign_center: Yy,
  table_valign_end: Ky,
  table__cell: Xy,
  table__cell_halign_left: Zy,
  table__cell_halign_start: Qy,
  table__cell_halign_center: xy,
  table__cell_halign_right: $y,
  table__cell_halign_end: ew,
  table__cell_valign_top: tw,
  table__cell_valign_center: rw,
  table__cell_valign_bottom: nw,
  table__cell_valign_baseline: ow,
  table__separator: iw,
  table__separator_row: sw,
  table__separator_col: lw
};
function Qc(t, r, e) {
  const n = t.slice();
  return n[35] = r[e], n;
}
function xc(t, r, e) {
  const n = t.slice();
  return n[38] = r[e], n;
}
function aw(t) {
  let r, e;
  return r = new Rn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function uw(t) {
  let r, e;
  return r = new jn({
    props: {
      cls: wt(
        "table",
        Zo,
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
      $$slots: { default: [cw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = wt(
        "table",
        Zo,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function $c(t) {
  var a, l, u, c, f, d, g, m;
  let r, e, n, o = `${/*placement*/
  ((l = (a = t[38].layoutParams.gridArea) == null ? void 0 : a.x) != null ? l : 0) + 1} / span ${/*placement*/
  (c = (u = t[38].layoutParams.gridArea) == null ? void 0 : u.colSpan) != null ? c : 1}`, i = `${/*placement*/
  ((d = (f = t[38].layoutParams.gridArea) == null ? void 0 : f.y) != null ? d : 0) + 1} / span ${/*placement*/
  (m = (g = t[38].layoutParams.gridArea) == null ? void 0 : g.rowSpan) != null ? m : 1}`, s;
  return e = new no({
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
      r = Ie("div"), Gt(e.$$.fragment), this.h();
    },
    l(h) {
      r = Fe(h, "DIV", { class: !0 });
      var y = ve(r);
      Jt(e.$$.fragment, y), y.forEach(k), this.h();
    },
    h() {
      p(r, "class", n = wt("table__cell", Zo, {
        halign: (
          /*placement*/
          t[38].cellHAlign
        ),
        valign: (
          /*placement*/
          t[38].cellVAlign
        )
      })), P(r, "grid-column", o), P(r, "grid-row", i), P(
        r,
        "background",
        /*placement*/
        t[38].backgroundStyle || void 0
      );
    },
    m(h, y) {
      q(h, r, y), Wt(e, r, null), s = !0;
    },
    p(h, y) {
      var F, R, B, Q, ae, T, Y, le;
      const w = {};
      y[0] & /*cellPlacements*/
      16 && (w.componentContext = /*placement*/
      h[38].componentContext), y[0] & /*cellPlacements*/
      16 && (w.layoutParams = /*placement*/
      h[38].layoutParams), e.$set(w), (!s || y[0] & /*cellPlacements*/
      16 && n !== (n = wt("table__cell", Zo, {
        halign: (
          /*placement*/
          h[38].cellHAlign
        ),
        valign: (
          /*placement*/
          h[38].cellVAlign
        )
      }))) && p(r, "class", n), y[0] & /*cellPlacements*/
      16 && o !== (o = `${/*placement*/
      ((R = (F = h[38].layoutParams.gridArea) == null ? void 0 : F.x) != null ? R : 0) + 1} / span ${/*placement*/
      (Q = (B = h[38].layoutParams.gridArea) == null ? void 0 : B.colSpan) != null ? Q : 1}`) && P(r, "grid-column", o), y[0] & /*cellPlacements*/
      16 && i !== (i = `${/*placement*/
      ((T = (ae = h[38].layoutParams.gridArea) == null ? void 0 : ae.y) != null ? T : 0) + 1} / span ${/*placement*/
      (le = (Y = h[38].layoutParams.gridArea) == null ? void 0 : Y.rowSpan) != null ? le : 1}`) && P(r, "grid-row", i), y[0] & /*cellPlacements*/
      16 && P(
        r,
        "background",
        /*placement*/
        h[38].backgroundStyle || void 0
      );
    },
    i(h) {
      s || (G(e.$$.fragment, h), s = !0);
    },
    o(h) {
      $(e.$$.fragment, h), s = !1;
    },
    d(h) {
      h && k(r), Ut(e);
    }
  };
}
function ef(t) {
  let r, e, n, o;
  return {
    c() {
      r = Ie("div"), e = Ie("div"), o = dr(), this.h();
    },
    l(i) {
      r = Fe(i, "DIV", { class: !0 });
      var s = ve(r);
      e = Fe(s, "DIV", { class: !0 }), ve(e).forEach(k), o = _r(s), s.forEach(k), this.h();
    },
    h() {
      p(e, "class", n = /*sep*/
      t[35].width ? Zo.table__separator_col : Zo.table__separator_row), P(
        e,
        "background",
        /*sep*/
        t[35].background
      ), P(
        e,
        "height",
        /*sep*/
        t[35].height || void 0
      ), P(
        e,
        "width",
        /*sep*/
        t[35].width || void 0
      ), p(r, "class", Zo.table__separator), P(
        r,
        "grid-column",
        /*sep*/
        t[35].gridColumn
      ), P(
        r,
        "grid-row",
        /*sep*/
        t[35].gridRow
      ), P(
        r,
        "margin-top",
        /*sep*/
        t[35].marginTop || void 0
      ), P(
        r,
        "margin-bottom",
        /*sep*/
        t[35].marginBottom || void 0
      ), P(
        r,
        "margin-left",
        /*sep*/
        t[35].marginLeft || void 0
      ), P(
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
      i[35].width ? Zo.table__separator_col : Zo.table__separator_row) && p(e, "class", n), s[0] & /*separatorElements*/
      32 && P(
        e,
        "background",
        /*sep*/
        i[35].background
      ), s[0] & /*separatorElements*/
      32 && P(
        e,
        "height",
        /*sep*/
        i[35].height || void 0
      ), s[0] & /*separatorElements*/
      32 && P(
        e,
        "width",
        /*sep*/
        i[35].width || void 0
      ), s[0] & /*separatorElements*/
      32 && P(
        r,
        "grid-column",
        /*sep*/
        i[35].gridColumn
      ), s[0] & /*separatorElements*/
      32 && P(
        r,
        "grid-row",
        /*sep*/
        i[35].gridRow
      ), s[0] & /*separatorElements*/
      32 && P(
        r,
        "margin-top",
        /*sep*/
        i[35].marginTop || void 0
      ), s[0] & /*separatorElements*/
      32 && P(
        r,
        "margin-bottom",
        /*sep*/
        i[35].marginBottom || void 0
      ), s[0] & /*separatorElements*/
      32 && P(
        r,
        "margin-left",
        /*sep*/
        i[35].marginLeft || void 0
      ), s[0] & /*separatorElements*/
      32 && P(
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
function cw(t) {
  let r, e, n, o = ar(
    /*cellPlacements*/
    t[4]
  ), i = [];
  for (let u = 0; u < o.length; u += 1)
    i[u] = $c(xc(t, o, u));
  const s = (u) => $(i[u], 1, 1, () => {
    i[u] = null;
  });
  let a = ar(
    /*separatorElements*/
    t[5]
  ), l = [];
  for (let u = 0; u < a.length; u += 1)
    l[u] = ef(Qc(t, a, u));
  return {
    c() {
      for (let u = 0; u < i.length; u += 1)
        i[u].c();
      r = dr();
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      e = We();
    },
    l(u) {
      for (let c = 0; c < i.length; c += 1)
        i[c].l(u);
      r = _r(u);
      for (let c = 0; c < l.length; c += 1)
        l[c].l(u);
      e = We();
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
        o = ar(
          /*cellPlacements*/
          u[4]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const d = xc(u, o, f);
          i[f] ? (i[f].p(d, c), G(i[f], 1)) : (i[f] = $c(d), i[f].c(), G(i[f], 1), i[f].m(r.parentNode, r));
        }
        for (mr(), f = o.length; f < i.length; f += 1)
          s(f);
        br();
      }
      if (c[0] & /*separatorElements*/
      32) {
        a = ar(
          /*separatorElements*/
          u[5]
        );
        let f;
        for (f = 0; f < a.length; f += 1) {
          const d = Qc(u, a, f);
          l[f] ? l[f].p(d, c) : (l[f] = ef(d), l[f].c(), l[f].m(e.parentNode, e));
        }
        for (; f < l.length; f += 1)
          l[f].d(1);
        l.length = a.length;
      }
    },
    i(u) {
      if (!n) {
        for (let c = 0; c < o.length; c += 1)
          G(i[c]);
        n = !0;
      }
    },
    o(u) {
      i = i.filter(Boolean);
      for (let c = 0; c < i.length; c += 1)
        $(i[c]);
      n = !1;
    },
    d(u) {
      u && (k(r), k(e)), un(i, u), un(l, u);
    }
  };
}
function fw(t) {
  let r, e, n, o;
  const i = [uw, aw], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(l) {
      e && e.l(l), n = We();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (mr(), $(s[c], 1, 1, () => {
        s[c] = null;
      }), br()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function dw(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g, m, h = S, y = () => (h(), h = I(s, (de) => e(22, m = de)), s), w, F = S, R = () => (F(), F = I(i, (de) => e(23, w = de)), i), B, Q = S, ae = () => (Q(), Q = I(a, (de) => e(24, B = de)), a), T, Y = S, le = () => (Y(), Y = I(l, (de) => e(25, T = de)), l);
  t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Y());
  let { componentContext: C } = r, { layoutParams: N = void 0 } = r;
  const z = zr(en), O = z.direction;
  En(t, O, (de) => e(21, g = de));
  let oe = !1, fe = "start", ce = "start", Ae = [], _e, Te = [], ee = [], Me = "";
  function Xe() {
    e(3, oe = !1), e(13, fe = "start"), e(14, ce = "start");
  }
  function Qe(de) {
    var ne, Ze;
    if (!de || !de.style) return null;
    let se = "#E0E0E0", De = 1;
    const tt = de.style;
    if (tt.type === "shape_drawable" && tt.shape) {
      const Re = tt.shape;
      se = gr(Re.background_color || tt.color || "#E0E0E0"), Re.type === "rounded_rectangle" && (De = Number(((ne = Re.item_height) == null ? void 0 : ne.value) || ((Ze = Re.item_width) == null ? void 0 : Ze.value) || 1));
    } else tt.color && (se = gr(tt.color));
    const xe = de.margins || {};
    return {
      color: se,
      thickness: De,
      show_at_start: de.show_at_start === 1 || de.show_at_start === !0,
      show_between: de.show_between !== 0 && de.show_between !== !1,
      show_at_end: de.show_at_end === 1 || de.show_at_end === !0,
      marginTop: Number(xe.top) || 0,
      marginBottom: Number(xe.bottom) || 0,
      marginLeft: Number(xe.left) || 0,
      marginRight: Number(xe.right) || 0
    };
  }
  function Ee(de, se) {
    const De = de.header_row;
    let tt = [];
    return de.row_builder && Array.isArray(se) ? tt = vl(se, z, C, de.row_builder).map((ne) => ne.div) : Array.isArray(de.rows) && (tt = de.rows), { rows: tt, headerRow: De };
  }
  let it = [];
  function we(de, se) {
    it = [];
    for (let De = 0; De < de; De++)
      it[De] = new Array(se).fill(!1);
  }
  function Se(de, se, De, tt) {
    var xe;
    for (let ne = de; ne < de + De && ne < it.length; ne++)
      for (let Ze = se; Ze < se + tt && Ze < (((xe = it[0]) == null ? void 0 : xe.length) || 0); Ze++)
        it[ne][Ze] = !0;
  }
  function he(de, se) {
    var tt;
    if (de >= it.length) return se;
    let De = se;
    for (; De < (((tt = it[0]) == null ? void 0 : tt.length) || 0) && it[de][De]; )
      De++;
    return De;
  }
  function x(de, se, De, tt, xe, ne, Ze, Re, ut, ct) {
    const ft = Array.isArray(de.cells) ? de.cells : [];
    let Et = 0;
    for (let st = 0; st < ft.length; st++) {
      const Lt = ft[st];
      if (!Lt || !Lt.div) continue;
      const _t = Math.max(1, Number(Lt.column_span) || 1), pe = Math.max(1, Number(Lt.row_span) || 1);
      Et = he(se, Et), Se(se, Et, pe, _t);
      const ge = Array.isArray(De) && De[Et], gt = Lt.content_alignment_horizontal || ge && ge.content_alignment_horizontal || void 0, Ce = Lt.content_alignment_vertical || ge && ge.content_alignment_vertical || void 0;
      let M;
      const Ct = Lt.background || tt;
      if (Ct && Array.isArray(Ct) && Ct.length > 0) {
        const Nt = Ct[0];
        Nt && Nt.type === "solid" && Nt.color && (M = gr(Nt.color));
      }
      const ht = ut.get(Lt.div);
      let Dt;
      ht ? (ct.delete(ht), Dt = ht) : Dt = C.produceChildContext(Lt.div, { path: `${ne}_${st}` }), Ze.push(Dt), Re.push({
        componentContext: Dt,
        layoutParams: {
          gridArea: {
            x: Et,
            y: se,
            colSpan: _t,
            rowSpan: pe
          }
        },
        cellHAlign: gt,
        cellVAlign: Ce,
        backgroundStyle: M
      }), Et += _t;
    }
  }
  return cn(() => {
    Ae.forEach((de) => {
      de.destroy();
    });
  }), t.$$set = (de) => {
    "componentContext" in de && e(0, C = de.componentContext), "layoutParams" in de && e(1, N = de.layoutParams);
  }, t.$$.update = () => {
    var de, se, De;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(20, n = C.origJson), t.$$.dirty[0] & /*origJson*/
    1048576 && n && Xe(), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, o = C.json.columns), t.$$.dirty[0] & /*componentContext*/
    1 && R(e(11, i = C.getDerivedFromVars(C.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && y(e(10, s = C.getDerivedFromVars(C.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && ae(e(9, a = C.getDerivedFromVars(C.json.striped))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(8, l = typeof ((de = C.json.row_builder) == null ? void 0 : de.data) == "string" ? C.getDerivedFromVars((se = C.json.row_builder) == null ? void 0 : se.data, void 0, !0) : (De = C.json.row_builder) != null && De.data ? ii(C.json.row_builder.data) : void 0)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && (!Array.isArray(o) || o.length === 0 ? e(3, oe = !0) : e(3, oe = !1)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && e(17, u = Array.isArray(o) ? o.length : 0), t.$$.dirty[0] & /*jsonColumns*/
    524288)
      if (Array.isArray(o)) {
        const tt = [];
        for (let xe = 0; xe < o.length; xe++) {
          const ne = o[xe], Ze = ne == null ? void 0 : ne.width;
          if ((Ze == null ? void 0 : Ze.type) === "fixed" && Ze.value)
            tt.push(ue(Number(Ze.value)));
          else if ((Ze == null ? void 0 : Ze.type) === "match_parent") {
            const Re = Number(Ze.weight || 1);
            tt.push(`${Re}fr`);
          } else
            tt.push("auto");
        }
        e(16, Me = tt.join(" "));
      } else
        e(16, Me = "");
    if (t.$$.dirty[0] & /*componentContext, $jsonRowBuilderData*/
    33554433 && e(18, c = Ee(C.json, T)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonColumns, allRows, columnCount, $jsonStriped*/
    17727493) {
      const tt = new Set(Ae), xe = /* @__PURE__ */ new Map();
      _e === C && Ae.forEach((M) => {
        xe.set(M.json, M);
      });
      const ne = [], Ze = [], Re = [];
      let ut = 0;
      const ct = C.json, ft = Array.isArray(o) ? o : [], Et = !!(c.headerRow && Array.isArray(c.headerRow.cells)), st = c.rows.length, Lt = (Et ? 1 : 0) + st;
      we(Lt + 10, u + 10);
      const _t = Qe(ct.row_separator), pe = Qe(ct.column_separator), ge = Qe(ct.header_separator);
      Et && (x(c.headerRow, ut, ft, c.headerRow.background || ct.header_background, void 0, -1, ne, Ze, xe, tt), ut++);
      const gt = c.rows;
      for (let M = 0; M < gt.length; M++) {
        const Ct = gt[M];
        if (!Ct || !Array.isArray(Ct.cells)) continue;
        let ht = Ct.background;
        !ht && B && (M % 2 === 0 ? ht = B.even_row_background : ht = B.odd_row_background), x(Ct, ut, ft, ht, void 0, M, ne, Ze, xe, tt), ut++;
      }
      const Ce = ut;
      if (ge && Et && st > 0 && Re.push({
        gridColumn: `1 / span ${u}`,
        gridRow: "1 / span 1",
        background: ge.color,
        height: ue(ge.thickness),
        marginTop: ge.marginTop ? ue(ge.marginTop) : void 0,
        marginBottom: ge.marginBottom ? ue(ge.marginBottom) : void 0,
        marginLeft: ge.marginLeft ? ue(ge.marginLeft) : void 0,
        marginRight: ge.marginRight ? ue(ge.marginRight) : void 0
      }), _t) {
        const M = Et ? 1 : 0;
        if (_t.show_at_start && st > 0 && Re.push({
          gridColumn: `1 / span ${u}`,
          gridRow: `${M + 1} / span 1`,
          background: _t.color,
          height: ue(_t.thickness),
          marginTop: _t.marginTop ? ue(_t.marginTop) : void 0,
          marginBottom: _t.marginBottom ? ue(_t.marginBottom) : void 0,
          marginLeft: _t.marginLeft ? ue(_t.marginLeft) : void 0,
          marginRight: _t.marginRight ? ue(_t.marginRight) : void 0
        }), _t.show_between)
          for (let Ct = M; Ct < Ce - 1; Ct++)
            Re.push({
              gridColumn: `1 / span ${u}`,
              gridRow: `${Ct + 1} / span 1`,
              background: _t.color,
              height: ue(_t.thickness),
              marginTop: _t.marginTop ? ue(_t.marginTop) : void 0,
              marginBottom: _t.marginBottom ? ue(_t.marginBottom) : void 0,
              marginLeft: _t.marginLeft ? ue(_t.marginLeft) : void 0,
              marginRight: _t.marginRight ? ue(_t.marginRight) : void 0
            });
        _t.show_at_end && st > 0 && Re.push({
          gridColumn: `1 / span ${u}`,
          gridRow: `${Ce} / span 1`,
          background: _t.color,
          height: ue(_t.thickness),
          marginTop: _t.marginTop ? ue(_t.marginTop) : void 0,
          marginBottom: _t.marginBottom ? ue(_t.marginBottom) : void 0,
          marginLeft: _t.marginLeft ? ue(_t.marginLeft) : void 0,
          marginRight: _t.marginRight ? ue(_t.marginRight) : void 0
        });
      }
      if (pe && u > 0) {
        if (pe.show_at_start && Re.push({
          gridColumn: "1 / span 1",
          gridRow: `1 / span ${Ce}`,
          background: pe.color,
          width: ue(pe.thickness),
          marginTop: pe.marginTop ? ue(pe.marginTop) : void 0,
          marginBottom: pe.marginBottom ? ue(pe.marginBottom) : void 0,
          marginLeft: pe.marginLeft ? ue(pe.marginLeft) : void 0,
          marginRight: pe.marginRight ? ue(pe.marginRight) : void 0
        }), pe.show_between)
          for (let M = 0; M < u - 1; M++)
            Re.push({
              gridColumn: `${M + 1} / span 1`,
              gridRow: `1 / span ${Ce}`,
              background: pe.color,
              width: ue(pe.thickness),
              marginTop: pe.marginTop ? ue(pe.marginTop) : void 0,
              marginBottom: pe.marginBottom ? ue(pe.marginBottom) : void 0,
              marginLeft: pe.marginLeft ? ue(pe.marginLeft) : void 0,
              marginRight: pe.marginRight ? ue(pe.marginRight) : void 0
            });
        pe.show_at_end && Re.push({
          gridColumn: `${u} / span 1`,
          gridRow: `1 / span ${Ce}`,
          background: pe.color,
          width: ue(pe.thickness),
          marginTop: pe.marginTop ? ue(pe.marginTop) : void 0,
          marginBottom: pe.marginBottom ? ue(pe.marginBottom) : void 0,
          marginLeft: pe.marginLeft ? ue(pe.marginLeft) : void 0,
          marginRight: pe.marginRight ? ue(pe.marginRight) : void 0
        });
      }
      for (const M of tt)
        M.destroy();
      e(2, Ae = ne), e(4, Te = Ze), e(5, ee = Re), e(15, _e = C);
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    8396800 && e(13, fe = wl(w, fe)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    6307840 && e(14, ce = yl(m, g, ce)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    24576 && e(7, f = {
      valign: fe,
      halign: ce
    }), t.$$.dirty[0] & /*gridTemplateColumns*/
    65536 && e(6, d = {
      "grid-template-columns": Me
    });
  }, [
    C,
    N,
    Ae,
    oe,
    Te,
    ee,
    d,
    f,
    l,
    a,
    s,
    i,
    O,
    fe,
    ce,
    _e,
    Me,
    u,
    c,
    o,
    n,
    g,
    m,
    w,
    B,
    T
  ];
}
class _w extends Hr {
  constructor(r) {
    super(), Rr(this, r, dw, fw, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const hw = "appkit-counter", pw = "appkit-counter__container", gw = "appkit-counter__button", mw = "appkit-counter__value", bw = "appkit-counter_disabled", Li = {
  counter: hw,
  counter__container: pw,
  counter__button: gw,
  counter__value: mw,
  counter_disabled: bw
};
function yw(t) {
  let r, e;
  return r = new Rn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function ww(t) {
  let r, e;
  return r = new jn({
    props: {
      cls: wt(
        "counter",
        Li,
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
      $$slots: { default: [vw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = wt(
        "counter",
        Li,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function vw(t) {
  let r, e, n, o, i, s, a, l, u, c, f, d, g, m, h, y;
  return {
    c() {
      r = Ie("div"), e = Ie("button"), n = Zr("svg"), o = Zr("line"), s = dr(), a = Ie("div"), l = On(
        /*value*/
        t[17]
      ), u = dr(), c = Ie("button"), f = Zr("svg"), d = Zr("line"), g = Zr("line"), this.h();
    },
    l(w) {
      r = Fe(w, "DIV", { class: !0 });
      var F = ve(r);
      e = Fe(F, "BUTTON", { class: !0, "aria-label": !0 });
      var R = ve(e);
      n = sn(R, "svg", { viewBox: !0, fill: !0, xmlns: !0 });
      var B = ve(n);
      o = sn(B, "line", {
        x1: !0,
        y1: !0,
        x2: !0,
        y2: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0
      }), ve(o).forEach(k), B.forEach(k), R.forEach(k), s = _r(F), a = Fe(F, "DIV", { class: !0 });
      var Q = ve(a);
      l = Un(
        Q,
        /*value*/
        t[17]
      ), Q.forEach(k), u = _r(F), c = Fe(F, "BUTTON", { class: !0, "aria-label": !0 });
      var ae = ve(c);
      f = sn(ae, "svg", { viewBox: !0, fill: !0, xmlns: !0 });
      var T = ve(f);
      d = sn(T, "line", {
        x1: !0,
        y1: !0,
        x2: !0,
        y2: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0
      }), ve(d).forEach(k), g = sn(T, "line", {
        x1: !0,
        y1: !0,
        x2: !0,
        y2: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0
      }), ve(g).forEach(k), T.forEach(k), ae.forEach(k), F.forEach(k), this.h();
    },
    h() {
      p(o, "x1", "6"), p(o, "y1", "12"), p(o, "x2", "18"), p(o, "y2", "12"), p(
        o,
        "stroke",
        /*iconColor*/
        t[6]
      ), p(o, "stroke-width", "2.5"), p(o, "stroke-linecap", "round"), p(n, "viewBox", "0 0 24 24"), p(n, "fill", "none"), p(n, "xmlns", "http://www.w3.org/2000/svg"), p(e, "class", Li.counter__button), e.disabled = i = !/*isEnabled*/
      t[3] || /*value*/
      t[17] <= /*minValue*/
      t[11], p(e, "aria-label", "Decrease value"), P(
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
      ), P(e, "width", ue(
        /*buttonSize*/
        t[5]
      )), P(e, "height", ue(
        /*buttonSize*/
        t[5]
      )), p(a, "class", Li.counter__value), P(a, "width", ue(
        /*valueWidth*/
        t[10]
      )), P(
        a,
        "color",
        /*textColor*/
        t[8]
      ), P(a, "font-size", ue(
        /*fontSize*/
        t[9]
      )), P(
        a,
        "font-weight",
        /*fontWeight*/
        t[13]
      ), p(d, "x1", "12"), p(d, "y1", "6"), p(d, "x2", "12"), p(d, "y2", "18"), p(
        d,
        "stroke",
        /*iconColor*/
        t[6]
      ), p(d, "stroke-width", "2.5"), p(d, "stroke-linecap", "round"), p(g, "x1", "6"), p(g, "y1", "12"), p(g, "x2", "18"), p(g, "y2", "12"), p(
        g,
        "stroke",
        /*iconColor*/
        t[6]
      ), p(g, "stroke-width", "2.5"), p(g, "stroke-linecap", "round"), p(f, "viewBox", "0 0 24 24"), p(f, "fill", "none"), p(f, "xmlns", "http://www.w3.org/2000/svg"), p(c, "class", Li.counter__button), c.disabled = m = !/*isEnabled*/
      t[3] || /*value*/
      t[17] >= /*maxValue*/
      t[12], p(c, "aria-label", "Increase value"), P(
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
      ), P(c, "width", ue(
        /*buttonSize*/
        t[5]
      )), P(c, "height", ue(
        /*buttonSize*/
        t[5]
      )), p(r, "class", Li.counter__container);
    },
    m(w, F) {
      q(w, r, F), yt(r, e), yt(e, n), yt(n, o), yt(r, s), yt(r, a), yt(a, l), yt(r, u), yt(r, c), yt(c, f), yt(f, d), yt(f, g), h || (y = [
        Je(
          e,
          "click",
          /*decrement*/
          t[36]
        ),
        Je(
          c,
          "click",
          /*increment*/
          t[35]
        )
      ], h = !0);
    },
    p(w, F) {
      F[0] & /*iconColor*/
      64 && p(
        o,
        "stroke",
        /*iconColor*/
        w[6]
      ), F[0] & /*isEnabled, value, minValue*/
      133128 && i !== (i = !/*isEnabled*/
      w[3] || /*value*/
      w[17] <= /*minValue*/
      w[11]) && (e.disabled = i), F[0] & /*value, minValue, disabledButtonColor, buttonColor*/
      133264 && P(
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
      ), F[0] & /*buttonSize*/
      32 && P(e, "width", ue(
        /*buttonSize*/
        w[5]
      )), F[0] & /*buttonSize*/
      32 && P(e, "height", ue(
        /*buttonSize*/
        w[5]
      )), F[0] & /*value*/
      131072 && to(
        l,
        /*value*/
        w[17]
      ), F[0] & /*valueWidth*/
      1024 && P(a, "width", ue(
        /*valueWidth*/
        w[10]
      )), F[0] & /*textColor*/
      256 && P(
        a,
        "color",
        /*textColor*/
        w[8]
      ), F[0] & /*fontSize*/
      512 && P(a, "font-size", ue(
        /*fontSize*/
        w[9]
      )), F[0] & /*fontWeight*/
      8192 && P(
        a,
        "font-weight",
        /*fontWeight*/
        w[13]
      ), F[0] & /*iconColor*/
      64 && p(
        d,
        "stroke",
        /*iconColor*/
        w[6]
      ), F[0] & /*iconColor*/
      64 && p(
        g,
        "stroke",
        /*iconColor*/
        w[6]
      ), F[0] & /*isEnabled, value, maxValue*/
      135176 && m !== (m = !/*isEnabled*/
      w[3] || /*value*/
      w[17] >= /*maxValue*/
      w[12]) && (c.disabled = m), F[0] & /*value, maxValue, disabledButtonColor, buttonColor*/
      135312 && P(
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
      ), F[0] & /*buttonSize*/
      32 && P(c, "width", ue(
        /*buttonSize*/
        w[5]
      )), F[0] & /*buttonSize*/
      32 && P(c, "height", ue(
        /*buttonSize*/
        w[5]
      ));
    },
    d(w) {
      w && k(r), h = !1, Ur(y);
    }
  };
}
function kw(t) {
  let r, e, n, o;
  const i = [ww, yw], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(l) {
      e && e.l(l), n = We();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (mr(), $(s[c], 1, 1, () => {
        s[c] = null;
      }), br()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Ew(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d, g, m, h, y, w, F, R, B, Q, ae, T, Y, le, C, N = S, z = () => (N(), N = I(i, (ot) => e(46, C = ot)), i), O, oe = S, fe = () => (oe(), oe = I(ae, (ot) => e(47, O = ot)), ae), ce, Ae = S, _e = () => (Ae(), Ae = I(Q, (ot) => e(48, ce = ot)), Q), Te, ee = S, Me = () => (ee(), ee = I(B, (ot) => e(49, Te = ot)), B), Xe, Qe = S, Ee = () => (Qe(), Qe = I(R, (ot) => e(50, Xe = ot)), R), it, we = S, Se = () => (we(), we = I(F, (ot) => e(51, it = ot)), F), he, x = S, de = () => (x(), x = I(w, (ot) => e(52, he = ot)), w), se, De = S, tt = () => (De(), De = I(y, (ot) => e(53, se = ot)), y), xe, ne = S, Ze = () => (ne(), ne = I(h, (ot) => e(54, xe = ot)), h), Re, ut = S, ct = () => (ut(), ut = I(m, (ot) => e(55, Re = ot)), m), ft, Et = S, st = () => (Et(), Et = I(g, (ot) => e(56, ft = ot)), g), Lt, _t = S, pe = () => (_t(), _t = I(d, (ot) => e(57, Lt = ot)), d), ge, gt = S, Ce = () => (gt(), gt = I(f, (ot) => e(58, ge = ot)), f), M, Ct = S, ht = () => (Ct(), Ct = I(c, (ot) => e(59, M = ot)), c), Dt, Nt = S, nt = () => (Nt(), Nt = I(u, (ot) => e(60, Dt = ot)), u), X, It = S, zt = () => (It(), It = I(l, (ot) => e(61, X = ot)), l), er, Xt = S, me = () => (Xt(), Xt = I(a, (ot) => e(62, er = ot)), a), Ue, mt = S, ye = () => (mt(), mt = I(s, (ot) => e(63, Ue = ot)), s);
  t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => Qe()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => x()), t.$$.on_destroy.push(() => De()), t.$$.on_destroy.push(() => ne()), t.$$.on_destroy.push(() => ut()), t.$$.on_destroy.push(() => Et()), t.$$.on_destroy.push(() => _t()), t.$$.on_destroy.push(() => gt()), t.$$.on_destroy.push(() => Ct()), t.$$.on_destroy.push(() => Nt()), t.$$.on_destroy.push(() => It()), t.$$.on_destroy.push(() => Xt()), t.$$.on_destroy.push(() => mt());
  let { componentContext: et } = r, { layoutParams: Le = void 0 } = r;
  const or = zr(en), Oe = zr(Bo);
  let kt = !1, Tt = !0, Mt = "#4CAF50", hr = 36, Ne = "#ffffff", jt = "#cccccc", lr = "#1B2630", rr = 16, xt = 700, yr = 40, Sr = "#F5F5F5", Bt = "#E0E0E0", jr = 1, J = 999, pt = 6, Kt = 0, At = 99, Cr = 1;
  const Dr = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  };
  function wr() {
    e(3, Tt = !0), e(4, Mt = "#4CAF50"), e(5, hr = 36), e(6, Ne = "#ffffff"), e(7, jt = "#cccccc"), e(8, lr = "#1B2630"), e(9, rr = 16), e(13, xt = 700), e(10, yr = 40), e(37, Sr = "#F5F5F5"), e(38, Bt = "#E0E0E0"), e(39, jr = 1), e(40, J = 999), e(41, pt = 6), e(11, Kt = 0), e(12, At = 99), e(42, Cr = 1);
  }
  function Mr() {
    if (!Tt) return;
    const ot = Math.min(T + Cr, At);
    ot !== T && (i.setValue(ot), et.json.on_increment_actions && et.execAnyActions(et.json.on_increment_actions), et.json.on_value_change_actions && et.execAnyActions(et.json.on_value_change_actions));
  }
  function qr() {
    if (!Tt) return;
    const ot = Math.max(T - Cr, Kt);
    ot !== T && (i.setValue(ot), et.json.on_decrement_actions && et.execAnyActions(et.json.on_decrement_actions), et.json.on_value_change_actions && et.execAnyActions(et.json.on_value_change_actions));
  }
  let ir;
  return cn(() => {
    ir && (or.unregisterFocusable(ir), e(43, ir = void 0));
  }), t.$$set = (ot) => {
    "componentContext" in ot && e(0, et = ot.componentContext), "layoutParams" in ot && e(1, Le = ot.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(45, n = et.origJson), t.$$.dirty[1] & /*origJson*/
    16384 && n && wr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(44, o = et.json.counter_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8192 && z(e(16, i = o && (et.getVariable(o, "integer") || or.awaitGlobalVariable(o, "integer", 0)) || fo("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && ye(e(34, s = et.getDerivedFromVars(et.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(33, a = et.getDerivedFromVars(et.json.button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && zt(e(32, l = et.getDerivedFromVars(et.json.button_size))), t.$$.dirty[0] & /*componentContext*/
    1 && nt(e(31, u = et.getDerivedFromVars(et.json.icon_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ht(e(30, c = et.getDerivedFromVars(et.json.disabled_button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ce(e(29, f = et.getDerivedFromVars(et.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(28, d = et.getDerivedFromVars(et.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(27, g = et.getDerivedFromVars(et.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(26, m = et.getDerivedFromVars(et.json.value_width))), t.$$.dirty[0] & /*componentContext*/
    1 && Ze(e(25, h = et.getDerivedFromVars(et.json.background_color))), t.$$.dirty[0] & /*componentContext*/
    1 && tt(e(24, y = et.getDerivedFromVars(et.json.border_color))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(23, w = et.getDerivedFromVars(et.json.border_width))), t.$$.dirty[0] & /*componentContext*/
    1 && Se(e(22, F = et.getDerivedFromVars(et.json.corner_radius))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(21, R = et.getDerivedFromVars(et.json.padding))), t.$$.dirty[0] & /*componentContext*/
    1 && Me(e(20, B = et.getDerivedFromVars(et.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(19, Q = et.getDerivedFromVars(et.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(18, ae = et.getDerivedFromVars(et.json.step))), t.$$.dirty[0] & /*isEnabled*/
    8 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    2 && e(3, Tt = pn(Ue, Tt)), t.$$.dirty[0] & /*buttonColor*/
    16 | t.$$.dirty[2] & /*$jsonButtonColor*/
    1 && e(4, Mt = gr(er, 1, Mt)), t.$$.dirty[0] & /*buttonSize*/
    32 | t.$$.dirty[1] & /*$jsonButtonSize*/
    1073741824 && e(5, hr = co(X, hr)), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*$jsonIconColor*/
    536870912 && e(6, Ne = gr(Dt, 1, Ne)), t.$$.dirty[0] & /*disabledButtonColor*/
    128 | t.$$.dirty[1] & /*$jsonDisabledButtonColor*/
    268435456 && e(7, jt = gr(M, 1, jt)), t.$$.dirty[0] & /*textColor*/
    256 | t.$$.dirty[1] & /*$jsonTextColor*/
    134217728 && e(8, lr = gr(ge, 1, lr)), t.$$.dirty[0] & /*fontSize*/
    512 | t.$$.dirty[1] & /*$jsonFontSize*/
    67108864 && e(9, rr = co(Lt, rr)), t.$$.dirty[1] & /*$jsonFontWeight*/
    33554432) {
      const ot = ft;
      if (typeof ot == "string")
        if (ot in Dr)
          e(13, xt = Dr[ot]);
        else {
          const St = parseInt(ot, 10);
          !Number.isNaN(St) && St > 0 && e(13, xt = St);
        }
      else typeof ot == "number" && ot > 0 && e(13, xt = ot);
    }
    if (t.$$.dirty[0] & /*valueWidth*/
    1024 | t.$$.dirty[1] & /*$jsonValueWidth*/
    16777216 && e(10, yr = co(Re, yr)), t.$$.dirty[1] & /*$jsonBackgroundColor, backgroundColor*/
    8388672 && e(37, Sr = gr(xe, 1, Sr)), t.$$.dirty[1] & /*$jsonBorderColor, borderColor*/
    4194432 && e(38, Bt = gr(se, 1, Bt)), t.$$.dirty[1] & /*$jsonBorderWidth, borderWidth*/
    2097408 && e(39, jr = co(he, jr)), t.$$.dirty[1] & /*$jsonCornerRadius, cornerRadius*/
    1049088 && e(40, J = co(it, J)), t.$$.dirty[1] & /*$jsonPadding, padding*/
    525312 && e(41, pt = co(Xe, pt)), t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$jsonMinValue, $jsonMaxValue*/
    393216 && (e(11, Kt = co(Te, Kt)), e(12, At = co(ce, At))), t.$$.dirty[1] & /*$jsonStep, step*/
    67584) {
      const ot = co(O, Cr);
      ot > 0 && e(42, Cr = ot);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$valueVariable*/
    32768 && e(17, T = No(C || 0, Kt, At)), t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*variable*/
    8192) {
      let ot = !1;
      o ? Oe.hasAction() && (ot = !0, et.logError(K(new Error('Cannot show "counter" inside component with an action')))) : (ot = !0, et.logError(K(new Error('Missing "counter_value_variable" in "counter"')))), kt !== ot && e(2, kt = ot);
    }
    t.$$.dirty[0] & /*isEnabled*/
    8 && e(15, Y = { disabled: !Tt }), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*backgroundColor, borderColor, borderWidth, cornerRadius, padding*/
    1984 && e(14, le = {
      "--divkit-counter-bg": Sr,
      "--divkit-counter-border-color": Bt,
      "--divkit-counter-border-width": ue(jr),
      "--divkit-counter-radius": ue(J),
      "--divkit-counter-padding": ue(pt),
      "--divkit-counter-icon-color": Ne
    }), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*prevId*/
    4096 && et.json && (ir && (or.unregisterFocusable(ir), e(43, ir = void 0)), et.id && !et.fakeElement && (e(43, ir = et.id), or.registerFocusable(ir, {
      focus() {
      }
    })));
  }, [
    et,
    Le,
    kt,
    Tt,
    Mt,
    hr,
    Ne,
    jt,
    lr,
    rr,
    yr,
    Kt,
    At,
    xt,
    le,
    Y,
    i,
    T,
    ae,
    Q,
    B,
    R,
    F,
    w,
    y,
    h,
    m,
    g,
    d,
    f,
    c,
    u,
    l,
    a,
    s,
    Mr,
    qr,
    Sr,
    Bt,
    jr,
    J,
    pt,
    Cr,
    ir,
    o,
    n,
    C,
    O,
    ce,
    Te,
    Xe,
    it,
    he,
    se,
    xe,
    Re,
    ft,
    Lt,
    ge,
    M,
    Dt,
    X,
    er,
    Ue
  ];
}
class jw extends Hr {
  constructor(r) {
    super(), Rr(this, r, Ew, kw, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Cw = "appkit-webview__frame", rl = {
  webview__frame: Cw,
  "webview__aspect-wrapper": "appkit-webview__aspect-wrapper"
};
function Aw(t) {
  let r, e;
  return r = new Rn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Sw(t) {
  let r, e;
  return r = new jn({
    props: {
      cls: wt("webview", rl, {}),
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
      $$slots: { default: [Dw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Vw(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Ie("iframe"), this.h();
    },
    l(a) {
      r = Fe(a, "IFRAME", {
        class: !0,
        src: !0,
        srcdoc: !0,
        sandbox: !0,
        scrolling: !0,
        title: !0
      }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "class", rl.webview__frame), eo(r.src, e = /*url*/
      t[2] || void 0) || p(r, "src", e), p(r, "srcdoc", n = /*url*/
      t[2] ? void 0 : (
        /*html*/
        t[3]
      )), p(
        r,
        "sandbox",
        /*sandbox*/
        t[7]
      ), p(r, "scrolling", o = /*allowScrolling*/
      t[4] ? "auto" : "no"), p(r, "title", "webview");
    },
    m(a, l) {
      q(a, r, l), i || (s = [
        Je(
          r,
          "load",
          /*onLoad*/
          t[15]
        ),
        Je(
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
      a[2] || void 0) && p(r, "src", e), l & /*url, html*/
      12 && n !== (n = /*url*/
      a[2] ? void 0 : (
        /*html*/
        a[3]
      )) && p(r, "srcdoc", n), l & /*sandbox*/
      128 && p(
        r,
        "sandbox",
        /*sandbox*/
        a[7]
      ), l & /*allowScrolling*/
      16 && o !== (o = /*allowScrolling*/
      a[4] ? "auto" : "no") && p(r, "scrolling", o);
    },
    d(a) {
      a && k(r), i = !1, Ur(s);
    }
  };
}
function Iw(t) {
  let r, e, n, o, i, s = `${/*aspectPaddingBottom*/
  t[6]}%`, a, l;
  return {
    c() {
      r = Ie("div"), e = Ie("iframe"), this.h();
    },
    l(u) {
      r = Fe(u, "DIV", { class: !0 });
      var c = ve(r);
      e = Fe(c, "IFRAME", {
        class: !0,
        src: !0,
        srcdoc: !0,
        sandbox: !0,
        scrolling: !0,
        title: !0
      }), ve(e).forEach(k), c.forEach(k), this.h();
    },
    h() {
      p(e, "class", rl.webview__frame), eo(e.src, n = /*url*/
      t[2] || void 0) || p(e, "src", n), p(e, "srcdoc", o = /*url*/
      t[2] ? void 0 : (
        /*html*/
        t[3]
      )), p(
        e,
        "sandbox",
        /*sandbox*/
        t[7]
      ), p(e, "scrolling", i = /*allowScrolling*/
      t[4] ? "auto" : "no"), p(e, "title", "webview"), p(r, "class", rl["webview__aspect-wrapper"]), P(r, "padding-bottom", s);
    },
    m(u, c) {
      q(u, r, c), yt(r, e), a || (l = [
        Je(
          e,
          "load",
          /*onLoad*/
          t[15]
        ),
        Je(
          e,
          "error",
          /*onError*/
          t[16]
        )
      ], a = !0);
    },
    p(u, c) {
      c & /*url*/
      4 && !eo(e.src, n = /*url*/
      u[2] || void 0) && p(e, "src", n), c & /*url, html*/
      12 && o !== (o = /*url*/
      u[2] ? void 0 : (
        /*html*/
        u[3]
      )) && p(e, "srcdoc", o), c & /*sandbox*/
      128 && p(
        e,
        "sandbox",
        /*sandbox*/
        u[7]
      ), c & /*allowScrolling*/
      16 && i !== (i = /*allowScrolling*/
      u[4] ? "auto" : "no") && p(e, "scrolling", i), c & /*aspectPaddingBottom*/
      64 && s !== (s = `${/*aspectPaddingBottom*/
      u[6]}%`) && P(r, "padding-bottom", s);
    },
    d(u) {
      u && k(r), a = !1, Ur(l);
    }
  };
}
function Dw(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[6] !== "0" ? Iw : Vw
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = We();
    },
    l(i) {
      o.l(i), r = We();
    },
    m(i, s) {
      o.m(i, s), q(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function Fw(t) {
  let r, e, n, o;
  const i = [Sw, Aw], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[5] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(l) {
      e && e.l(l), n = We();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, [u]) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (mr(), $(s[c], 1, 1, () => {
        s[c] = null;
      }), br()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Tw(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d = S, g = () => (d(), d = I(u, (he) => e(20, f = he)), u), m, h = S, y = () => (h(), h = I(l, (he) => e(21, m = he)), l), w, F = S, R = () => (F(), F = I(a, (he) => e(22, w = he)), a), B, Q = S, ae = () => (Q(), Q = I(s, (he) => e(23, B = he)), s), T, Y = S, le = () => (Y(), Y = I(i, (he) => e(24, T = he)), i), C, N = S, z = () => (N(), N = I(o, (he) => e(25, C = he)), o), O, oe = S, fe = () => (oe(), oe = I(n, (he) => e(26, O = he)), n);
  t.$$.on_destroy.push(() => d()), t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => oe());
  let { componentContext: ce } = r, { layoutParams: Ae = void 0 } = r;
  zr(en);
  let _e = !1, Te, ee, Me = !1, Xe = !0, Qe = !1, Ee = !1, it = "0";
  function we() {
    ce.execAnyActions(ce.json.on_load_actions);
  }
  function Se() {
    ce.execAnyActions(ce.json.on_error_actions);
  }
  return t.$$set = (he) => {
    "componentContext" in he && e(0, ce = he.componentContext), "layoutParams" in he && e(1, Ae = he.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext*/
    1 && fe(e(14, n = ce.getDerivedFromVars(ce.json.url))), t.$$.dirty & /*componentContext*/
    1 && z(e(13, o = ce.getDerivedFromVars(ce.json.html))), t.$$.dirty & /*componentContext*/
    1 && le(e(12, i = ce.getDerivedFromVars(ce.json.javascript_enabled))), t.$$.dirty & /*componentContext*/
    1 && ae(e(11, s = ce.getDerivedFromVars(ce.json.allow_scrolling))), t.$$.dirty & /*componentContext*/
    1 && R(e(10, a = ce.getDerivedFromVars(ce.json.allow_navigation))), t.$$.dirty & /*componentContext*/
    1 && y(e(9, l = ce.getDerivedFromVars(ce.json.scale_to_fit))), t.$$.dirty & /*componentContext*/
    1 && g(e(8, u = ce.getDerivedFromVars(ce.json.aspect))), t.$$.dirty & /*$jsonUrl, $jsonHtml, url, html, componentContext*/
    100663309 && (e(2, Te = typeof O == "string" ? O : void 0), e(3, ee = typeof C == "string" ? C : void 0), !Te && !ee ? (e(5, _e = !0), ce.logError(K(new Error('Missing "url" or "html" in "webview"')))) : e(5, _e = !1)), t.$$.dirty & /*$jsonJsEnabled, javascriptEnabled*/
    16908288 && e(17, Me = pn(T, Me)), t.$$.dirty & /*$jsonAllowScrolling, allowScrolling*/
    8388624 && e(4, Xe = pn(B, Xe)), t.$$.dirty & /*$jsonAllowNavigation, allowNavigation*/
    4456448 && e(18, Qe = pn(w, Qe)), t.$$.dirty & /*$jsonScaleToFit, scaleToFit*/
    2621440 && e(19, Ee = pn(m, Ee)), t.$$.dirty & /*$jsonAspect*/
    1048576) {
      const he = f == null ? void 0 : f.ratio;
      he && Kn(he) ? e(6, it = (100 / Number(he)).toFixed(2)) : e(6, it = "0");
    }
    t.$$.dirty & /*javascriptEnabled, allowNavigation*/
    393216 && e(7, c = [
      "allow-same-origin",
      ...Me ? ["allow-scripts"] : [],
      ...Qe ? ["allow-popups"] : []
    ].join(" "));
  }, [
    ce,
    Ae,
    Te,
    ee,
    Xe,
    _e,
    it,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    n,
    we,
    Se,
    Me,
    Qe,
    Ee,
    f,
    m,
    w,
    B,
    T,
    C,
    O
  ];
}
class Mw extends Hr {
  constructor(r) {
    super(), Rr(this, r, Tw, Fw, Tr, { componentContext: 0, layoutParams: 1 });
  }
}
function tf(t, r, e) {
  const n = t.slice();
  return n[11] = r[e], n;
}
function Pw(t) {
  let r, e;
  return r = new Rn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Nw(t) {
  let r, e;
  return r = new jn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: { default: [zw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function rf(t) {
  let r, e, n = [
    /*templateAttrs*/
    t[8]
  ], o = {};
  for (let i = 0; i < n.length; i += 1)
    o = Io(o, n[i]);
  return {
    c() {
      r = Ie("template"), e = new Hi(!1), this.h();
    },
    l(i) {
      r = Fe(i, "TEMPLATE", {});
      var s = ve(r.content);
      e = ba(s, !1), s.forEach(k), this.h();
    },
    h() {
      e.a = null, Qo(r, o);
    },
    m(i, s) {
      q(i, r, s), e.m(
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
      ), Qo(r, o = Wo(n, [s & /*templateAttrs*/
      256 && /*templateAttrs*/
      i[8]]));
    },
    d(i) {
      i && k(r);
    }
  };
}
function nf(t) {
  let r = (
    /*jsonItems*/
    t[5]
  ), e, n, o = sf(t);
  return {
    c() {
      o.c(), e = We();
    },
    l(i) {
      o.l(i), e = We();
    },
    m(i, s) {
      o.m(i, s), q(i, e, s), n = !0;
    },
    p(i, s) {
      s & /*jsonItems*/
      32 && Tr(r, r = /*jsonItems*/
      i[5]) ? (mr(), $(o, 1, 1, S), br(), o = sf(i), o.c(), G(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
    },
    i(i) {
      n || (G(o), n = !0);
    },
    o(i) {
      $(o), n = !1;
    },
    d(i) {
      i && k(e), o.d(i);
    }
  };
}
function of(t) {
  let r, e;
  return r = new no({
    props: { componentContext: (
      /*item*/
      t[11]
    ) }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*items*/
      8 && (i.componentContext = /*item*/
      n[11]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function sf(t) {
  let r, e, n = ar(
    /*items*/
    t[3]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = of(tf(t, n, s));
  const i = (s) => $(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = We();
    },
    l(s) {
      for (let a = 0; a < o.length; a += 1)
        o[a].l(s);
      r = We();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      q(s, r, a), e = !0;
    },
    p(s, a) {
      if (a & /*items*/
      8) {
        n = ar(
          /*items*/
          s[3]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = tf(s, n, l);
          o[l] ? (o[l].p(u, a), G(o[l], 1)) : (o[l] = of(u), o[l].c(), G(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (mr(), l = n.length; l < o.length; l += 1)
          i(l);
        br();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          G(o[a]);
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
      s && k(r), un(o, s);
    }
  };
}
function Rl(t) {
  let r, e, n, o = (
    /*templateContent*/
    t[7] && rf(t)
  ), i = !/*hasItemsError*/
  t[4] && /*jsonItems*/
  t[5] && nf(t), s = [
    /*componentContext*/
    t[0].json.custom_props || {}
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = Io(a, s[l]);
  return {
    c() {
      r = Ie(
        /*desc*/
        t[2].element
      ), o && o.c(), e = dr(), i && i.c(), this.h();
    },
    l(l) {
      r = Fe(
        l,
        /*desc*/
        (t[2].element || "null").toUpperCase(),
        {}
      );
      var u = ve(r);
      o && o.l(u), e = _r(u), i && i.l(u), u.forEach(k), this.h();
    },
    h() {
      li(
        /*desc*/
        t[2].element
      )(r, a);
    },
    m(l, u) {
      q(l, r, u), o && o.m(r, null), yt(r, e), i && i.m(r, null), t[9](r), n = !0;
    },
    p(l, u) {
      /*templateContent*/
      l[7] ? o ? o.p(l, u) : (o = rf(l), o.c(), o.m(r, e)) : o && (o.d(1), o = null), !/*hasItemsError*/
      l[4] && /*jsonItems*/
      l[5] ? i ? (i.p(l, u), u & /*hasItemsError, jsonItems*/
      48 && G(i, 1)) : (i = nf(l), i.c(), G(i, 1), i.m(r, null)) : i && (mr(), $(i, 1, 1, () => {
        i = null;
      }), br()), li(
        /*desc*/
        l[2].element
      )(r, a = Wo(s, [
        u & /*componentContext*/
        1 && /*componentContext*/
        (l[0].json.custom_props || {})
      ]));
    },
    i(l) {
      n || (G(i), n = !0);
    },
    o(l) {
      $(i), n = !1;
    },
    d(l) {
      l && k(r), o && o.d(), i && i.d(), t[9](null);
    }
  };
}
function zw(t) {
  let r = (
    /*desc*/
    t[2].element
  ), e, n = (
    /*desc*/
    t[2].element && Rl(t)
  );
  return {
    c() {
      n && n.c(), e = We();
    },
    l(o) {
      n && n.l(o), e = We();
    },
    m(o, i) {
      n && n.m(o, i), q(o, e, i);
    },
    p(o, i) {
      /*desc*/
      o[2].element ? r ? Tr(
        r,
        /*desc*/
        o[2].element
      ) ? (n.d(1), n = Rl(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = Rl(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : r && (n.d(1), n = null, r = /*desc*/
      o[2].element);
    },
    i: S,
    o(o) {
      $(n, o);
    },
    d(o) {
      o && k(e), n && n.d(o);
    }
  };
}
function Ow(t) {
  let r, e, n, o;
  const i = [Nw, Pw], s = [];
  function a(l, u) {
    return (
      /*desc*/
      l[2] ? 0 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(l) {
      e && e.l(l), n = We();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, [u]) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (mr(), $(s[c], 1, 1, () => {
        s[c] = null;
      }), br()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Bw(t, r, e) {
  let n, { componentContext: o } = r, { layoutParams: i = void 0 } = r;
  const s = zr(en);
  let a, l = null, u = "", c = {}, f = [], d = !1;
  ao(() => {
    if (a && "divKitApiCallback" in a && typeof a.divKitApiCallback == "function") {
      const m = s.getExtensionContext(o);
      a.divKitApiCallback(m);
    }
  }), cn(() => {
    f.forEach((m) => {
      m.destroy();
    });
  });
  function g(m) {
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
          for (const [w, F] of h.variables)
            y.set(w, F.getValue());
          e(7, u = l.template({
            props: o.json.custom_props,
            variables: y
          }));
        } else l.template && typeof l.template == "string" ? e(7, u = l.template) : e(7, u = "");
        e(8, c = {
          shadowrootmode: l.shadowRootMode || "open"
        });
      } else
        e(2, l = null), e(7, u = ";"), o.logError(K(new Error('Unknown or incorrect "custom_type" prop for div "custom"')));
    t.$$.dirty & /*componentContext*/
    1 && e(5, n = o.json.items), t.$$.dirty & /*jsonItems, componentContext*/
    33 && (n !== void 0 && !Array.isArray(n) ? (e(4, d = !0), o.logError(K(new Error('Incorrect "items" prop for div "custom"')))) : e(4, d = !1)), t.$$.dirty & /*items, hasItemsError, jsonItems, componentContext*/
    57 && (f.forEach((h) => {
      h.destroy();
    }), e(3, f = (!d && n || []).map((h, y) => o.produceChildContext(h, { path: y }))));
  }, [
    o,
    i,
    l,
    f,
    d,
    n,
    a,
    u,
    c,
    g
  ];
}
class Lw extends Hr {
  constructor(r) {
    super(), Rr(this, r, Bw, Ow, Tr, { componentContext: 0, layoutParams: 1 });
  }
}
const Rw = "appkit-breadcrumb", Hw = "appkit-breadcrumb__list", Ww = "appkit-breadcrumb__item", Uw = "appkit-breadcrumb__label", Gw = "appkit-breadcrumb__label_link", Jw = "appkit-breadcrumb__separator", Ei = {
  breadcrumb: Rw,
  breadcrumb__list: Hw,
  breadcrumb__item: Ww,
  breadcrumb__label: Uw,
  breadcrumb__label_link: Gw,
  breadcrumb__separator: Jw
};
function lf(t, r, e) {
  const n = t.slice();
  return n[25] = r[e], n[27] = e, n;
}
function qw(t) {
  let r, e;
  return r = new Rn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Yw(t) {
  let r, e;
  return r = new jn({
    props: {
      cls: wt("breadcrumb", Ei, {}),
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
      $$slots: { default: [Zw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function Kw(t) {
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
      r = Ie("span"), n = On(e), o = dr(), i = Ie("span"), s = On(
        /*separator*/
        t[2]
      ), this.h();
    },
    l(f) {
      r = Fe(f, "SPAN", { class: !0, role: !0, tabindex: !0 });
      var d = ve(r);
      n = Un(d, e), d.forEach(k), o = _r(f), i = Fe(f, "SPAN", { class: !0, "aria-hidden": !0 });
      var g = ve(i);
      s = Un(
        g,
        /*separator*/
        t[2]
      ), g.forEach(k), this.h();
    },
    h() {
      p(r, "class", Ei.breadcrumb__label + " " + Ei.breadcrumb__label_link), p(r, "role", "link"), p(r, "tabindex", "0"), p(i, "class", Ei.breadcrumb__separator), p(i, "aria-hidden", "true");
    },
    m(f, d) {
      q(f, r, d), yt(r, n), q(f, o, d), q(f, i, d), yt(i, s), a || (l = [
        Je(r, "click", u),
        Je(r, "keydown", c)
      ], a = !0);
    },
    p(f, d) {
      t = f, d & /*crumbs*/
      16 && e !== (e = /*crumb*/
      t[25].title + "") && to(n, e), d & /*separator*/
      4 && to(
        s,
        /*separator*/
        t[2]
      );
    },
    d(f) {
      f && (k(r), k(o), k(i)), a = !1, Ur(l);
    }
  };
}
function Xw(t) {
  let r, e = (
    /*crumb*/
    t[25].title + ""
  ), n;
  return {
    c() {
      r = Ie("span"), n = On(e), this.h();
    },
    l(o) {
      r = Fe(o, "SPAN", { class: !0, "aria-current": !0 });
      var i = ve(r);
      n = Un(i, e), i.forEach(k), this.h();
    },
    h() {
      p(r, "class", Ei.breadcrumb__label), p(r, "aria-current", "page");
    },
    m(o, i) {
      q(o, r, i), yt(r, n);
    },
    p(o, i) {
      i & /*crumbs*/
      16 && e !== (e = /*crumb*/
      o[25].title + "") && to(n, e);
    },
    d(o) {
      o && k(r);
    }
  };
}
function af(t) {
  let r, e;
  function n(s, a) {
    return (
      /*index*/
      s[27] === /*crumbs*/
      s[4].length - 1 ? Xw : Kw
    );
  }
  let o = n(t), i = o(t);
  return {
    c() {
      r = Ie("li"), i.c(), e = dr(), this.h();
    },
    l(s) {
      r = Fe(s, "LI", { class: !0 });
      var a = ve(r);
      i.l(a), e = _r(a), a.forEach(k), this.h();
    },
    h() {
      p(r, "class", Ei.breadcrumb__item);
    },
    m(s, a) {
      q(s, r, a), i.m(r, null), yt(r, e);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, e)));
    },
    d(s) {
      s && k(r), i.d();
    }
  };
}
function Zw(t) {
  let r, e, n = ar(
    /*crumbs*/
    t[4]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = af(lf(t, n, i));
  return {
    c() {
      r = Ie("nav"), e = Ie("ol");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      this.h();
    },
    l(i) {
      r = Fe(i, "NAV", { "aria-label": !0 });
      var s = ve(r);
      e = Fe(s, "OL", { class: !0 });
      var a = ve(e);
      for (let l = 0; l < o.length; l += 1)
        o[l].l(a);
      a.forEach(k), s.forEach(k), this.h();
    },
    h() {
      p(e, "class", Ei.breadcrumb__list), p(r, "aria-label", "breadcrumb");
    },
    m(i, s) {
      q(i, r, s), yt(r, e);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(e, null);
    },
    p(i, s) {
      if (s & /*crumbs, separator, handleCrumbClick, handleCrumbKeydown*/
      3092) {
        n = ar(
          /*crumbs*/
          i[4]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = lf(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = af(l), o[a].c(), o[a].m(e, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && k(r), un(o, i);
    }
  };
}
function Qw(t) {
  let r, e, n, o;
  const i = [Yw, qw], s = [];
  function a(l, u) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = We();
    },
    l(l) {
      e && e.l(l), n = We();
    },
    m(l, u) {
      ~r && s[r].m(l, u), q(l, n, u), o = !0;
    },
    p(l, [u]) {
      e && e.p(l, u);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      $(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function xw(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d = S, g = () => (d(), d = I(l, (Me) => e(16, f = Me)), l), m, h = S, y = () => (h(), h = I(a, (Me) => e(17, m = Me)), a), w, F = S, R = () => (F(), F = I(s, (Me) => e(18, w = Me)), s), B, Q = S, ae = () => (Q(), Q = I(i, (Me) => e(19, B = Me)), i), T, Y = S, le = () => (Y(), Y = I(o, (Me) => e(20, T = Me)), o);
  t.$$.on_destroy.push(() => d()), t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Y());
  let { componentContext: C } = r, { layoutParams: N = void 0 } = r;
  zr(en);
  let z = "/", O = "#0077CC", oe = "#111111", fe = 14;
  function ce() {
    e(2, z = "/"), e(12, O = "#0077CC"), e(13, oe = "#111111"), e(14, fe = 14);
  }
  function Ae(Me) {
    Me.action && C.execAnyActions([Me.action]);
  }
  function _e(Me, Xe) {
    Xe.action && (Me.key === "Enter" || Me.key === " ") && (C.execAnyActions([Xe.action]), Me.preventDefault());
  }
  const Te = (Me) => Ae(Me), ee = (Me, Xe) => _e(Xe, Me);
  return t.$$set = (Me) => {
    "componentContext" in Me && e(0, C = Me.componentContext), "layoutParams" in Me && e(1, N = Me.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(15, n = C.origJson), t.$$.dirty & /*origJson*/
    32768 && n && ce(), t.$$.dirty & /*componentContext*/
    1 && le(e(9, o = C.getDerivedFromVars(C.json.separator))), t.$$.dirty & /*componentContext*/
    1 && ae(e(8, i = C.getDerivedFromVars(C.json.item_text_color))), t.$$.dirty & /*componentContext*/
    1 && R(e(7, s = C.getDerivedFromVars(C.json.active_text_color))), t.$$.dirty & /*componentContext*/
    1 && y(e(6, a = C.getDerivedFromVars(C.json.item_font_size))), t.$$.dirty & /*componentContext*/
    1 && g(e(5, l = C.getDerivedFromVars(C.json.crumbs))), t.$$.dirty & /*$jsonSeparator, separator*/
    1048580 && e(2, z = typeof T == "string" && T.length > 0 ? T : z), t.$$.dirty & /*$jsonItemTextColor, itemTextColor*/
    528384 && e(12, O = gr(B, 1, O)), t.$$.dirty & /*$jsonActiveTextColor, activeTextColor*/
    270336 && e(13, oe = gr(w, 1, oe)), t.$$.dirty & /*$jsonItemFontSize, itemFontSize*/
    147456 && e(14, fe = Yn(m, fe)), t.$$.dirty & /*$jsonCrumbs, componentContext*/
    65537 && e(4, u = Array.isArray(f) ? f : C.json.crumbs || []), t.$$.dirty & /*itemTextColor, activeTextColor, itemFontSize*/
    28672 && e(3, c = {
      "--divkit-breadcrumb-item-color": O,
      "--divkit-breadcrumb-active-color": oe,
      "--divkit-breadcrumb-font-size": ue(fe)
    });
  }, [
    C,
    N,
    z,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    Ae,
    _e,
    O,
    oe,
    fe,
    n,
    f,
    m,
    w,
    B,
    T,
    Te,
    ee
  ];
}
class $w extends Hr {
  constructor(r) {
    super(), Rr(this, r, xw, Qw, Tr, { componentContext: 0, layoutParams: 1 });
  }
}
const s_ = {
  text: Vp,
  container: fg,
  separator: yg,
  image: Pu,
  gif: Pu,
  grid: Yg,
  gallery: mm,
  tabs: qm,
  state: g0,
  pager: L0,
  indicator: $0,
  slider: B1,
  input: pb,
  select: Cb,
  video: Hb,
  switch: $b,
  checkbox: fy,
  radio: Dy,
  progress: Hy,
  table: _w,
  counter: jw,
  webview: Mw,
  custom: Lw,
  breadcrumb: $w
};
function uf(t) {
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
  return o && (r = Ga(o, i(t))), {
    c() {
      r && Gt(r.$$.fragment), e = We();
    },
    l(s) {
      r && Jt(r.$$.fragment, s), e = We();
    },
    m(s, a) {
      r && Wt(r, s, a), q(s, e, a), n = !0;
    },
    p(s, a) {
      if (a & /*component*/
      4 && o !== (o = /*component*/
      s[2])) {
        if (r) {
          mr();
          const l = r;
          $(l.$$.fragment, 1, 0, () => {
            Ut(l, 1);
          }), br();
        }
        o ? (r = Ga(o, i(s)), Gt(r.$$.fragment), G(r.$$.fragment, 1), Wt(r, e.parentNode, e)) : r = null;
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
      n || (r && G(r.$$.fragment, s), n = !0);
    },
    o(s) {
      r && $(r.$$.fragment, s), n = !1;
    },
    d(s) {
      s && k(e), r && Ut(r, s);
    }
  };
}
function ev(t) {
  let r, e, n = (
    /*component*/
    t[2] && uf(t)
  );
  return {
    c() {
      n && n.c(), r = We();
    },
    l(o) {
      n && n.l(o), r = We();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, [i]) {
      /*component*/
      o[2] ? n ? (n.p(o, i), i & /*component*/
      4 && G(n, 1)) : (n = uf(o), n.c(), G(n, 1), n.m(r.parentNode, r)) : n && (mr(), $(n, 1, 1, () => {
        n = null;
      }), br());
    },
    i(o) {
      e || (G(n), e = !0);
    },
    o(o) {
      $(n), e = !1;
    },
    d(o) {
      o && k(r), n && n.d(o);
    }
  };
}
function tv(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r;
  const i = zr(en);
  let s;
  return t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext, component*/
    5) {
      const a = n.json;
      if (e(2, s = (a == null ? void 0 : a.type) && s_[a.type] || void 0), !s) {
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
class no extends Hr {
  constructor(r) {
    super(), Rr(this, r, tv, ev, Tr, { componentContext: 0, layoutParams: 1 });
  }
}
const rv = {
  "root-svg-filters": "appkit-root-svg-filters"
};
function cf(t, r, e) {
  const n = t.slice();
  n[1] = r[e];
  const o = (
    /*filterKey*/
    n[1].split(":")
  );
  return n[2] = o[0], n[3] = o[1], n;
}
function ff(t) {
  let r, e, n = ar([...Object.keys(
    /*svgFiltersMap*/
    t[0]
  )]), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = df(cf(t, n, i));
  return {
    c() {
      r = Zr("svg"), e = Zr("defs");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      this.h();
    },
    l(i) {
      r = sn(i, "svg", { class: !0, "aria-hidden": !0 });
      var s = ve(r);
      e = sn(s, "defs", {});
      var a = ve(e);
      for (let l = 0; l < o.length; l += 1)
        o[l].l(a);
      a.forEach(k), s.forEach(k), this.h();
    },
    h() {
      p(r, "class", rv["root-svg-filters"]), p(r, "aria-hidden", "true");
    },
    m(i, s) {
      q(i, r, s), yt(r, e);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(e, null);
    },
    p(i, s) {
      if (s & /*svgFiltersMap, Object*/
      1) {
        n = ar([...Object.keys(
          /*svgFiltersMap*/
          i[0]
        )]);
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = cf(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = df(l), o[a].c(), o[a].m(e, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && k(r), un(o, i);
    }
  };
}
function nv(t) {
  let r, e;
  return {
    c() {
      r = Zr("feBlend"), this.h();
    },
    l(n) {
      r = sn(n, "feBlend", { in2: !0, mode: !0 }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "in2", "SourceGraphic"), p(r, "mode", e = /*filterMode*/
      t[3]);
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o & /*svgFiltersMap*/
      1 && e !== (e = /*filterMode*/
      n[3]) && p(r, "mode", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function ov(t) {
  let r;
  return {
    c() {
      r = Zr("feComposite"), this.h();
    },
    l(e) {
      r = sn(e, "feComposite", {
        in2: !0,
        operator: !0,
        k1: !0,
        k2: !0,
        k3: !0,
        k4: !0
      }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "in2", "SourceGraphic"), p(r, "operator", "arithmetic"), p(r, "k1", "1"), p(r, "k2", "0"), p(r, "k3", "0"), p(r, "k4", "0");
    },
    m(e, n) {
      q(e, r, n);
    },
    p: S,
    d(e) {
      e && k(r);
    }
  };
}
function iv(t) {
  let r, e;
  return {
    c() {
      r = Zr("feComposite"), this.h();
    },
    l(n) {
      r = sn(n, "feComposite", { in2: !0, operator: !0 }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "in2", "SourceGraphic"), p(r, "operator", e = /*filterMode*/
      t[3].split("_")[1]);
    },
    m(n, o) {
      q(n, r, o);
    },
    p(n, o) {
      o & /*svgFiltersMap*/
      1 && e !== (e = /*filterMode*/
      n[3].split("_")[1]) && p(r, "operator", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function df(t) {
  let r, e, n, o;
  function i(l, u) {
    return (
      /*filterMode*/
      l[3] === "source_in" || /*filterMode*/
      l[3] === "source_atop" ? iv : (
        /*filterMode*/
        l[3] === "multiply" ? ov : nv
      )
    );
  }
  let s = i(t), a = s(t);
  return {
    c() {
      r = Zr("filter"), e = Zr("feFlood"), a.c(), this.h();
    },
    l(l) {
      r = sn(l, "filter", { id: !0 });
      var u = ve(r);
      e = sn(u, "feFlood", { "flood-color": !0 }), ve(e).forEach(k), a.l(u), u.forEach(k), this.h();
    },
    h() {
      p(e, "flood-color", n = /*filterColor*/
      t[2]), p(r, "id", o = /*svgFiltersMap*/
      t[0][
        /*filterKey*/
        t[1]
      ]);
    },
    m(l, u) {
      q(l, r, u), yt(r, e), a.m(r, null);
    },
    p(l, u) {
      u & /*svgFiltersMap*/
      1 && n !== (n = /*filterColor*/
      l[2]) && p(e, "flood-color", n), s === (s = i(l)) && a ? a.p(l, u) : (a.d(1), a = s(l), a && (a.c(), a.m(r, null))), u & /*svgFiltersMap*/
      1 && o !== (o = /*svgFiltersMap*/
      l[0][
        /*filterKey*/
        l[1]
      ]) && p(r, "id", o);
    },
    d(l) {
      l && k(r), a.d();
    }
  };
}
function sv(t) {
  let r = Object.keys(
    /*svgFiltersMap*/
    t[0]
  ).length, e, n = r && ff(t);
  return {
    c() {
      n && n.c(), e = We();
    },
    l(o) {
      n && n.l(o), e = We();
    },
    m(o, i) {
      n && n.m(o, i), q(o, e, i);
    },
    p(o, [i]) {
      i & /*svgFiltersMap*/
      1 && (r = Object.keys(
        /*svgFiltersMap*/
        o[0]
      ).length), r ? n ? n.p(o, i) : (n = ff(o), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: S,
    o: S,
    d(o) {
      o && k(e), n && n.d(o);
    }
  };
}
function lv(t, r, e) {
  let { svgFiltersMap: n } = r;
  return t.$$set = (o) => {
    "svgFiltersMap" in o && e(0, n = o.svgFiltersMap);
  }, [n];
}
class av extends Hr {
  constructor(r) {
    super(), Rr(this, r, lv, sv, Tr, { svgFiltersMap: 0 });
  }
}
function uv(t, r, e, n) {
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
    const f = Object.keys(c).filter((m) => m !== "__proto__"), d = f.filter((m) => m.charAt(0) !== "$"), g = f.filter((m) => m.charAt(0) === "$");
    return d.forEach((m) => {
      const h = c[m];
      typeof h == "object" && h !== null ? (u[m] = Array.isArray(h) ? [] : {}, a(u[m], h)) : u[m] = h;
    }), g.forEach((m) => {
      const h = c[m], y = s[h];
      if (y !== void 0) {
        const w = m.substring(1);
        u[w] = y;
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
const Ms = /* @__PURE__ */ new Map(), na = /* @__PURE__ */ new Map(), Ps = /* @__PURE__ */ new Map(), oa = /* @__PURE__ */ new Map();
function U(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = Ms.get(t) || [];
  Ms.has(t) || Ms.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  na.set(i, n);
}
function Wr(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = Ps.get(t) || [];
  Ps.has(t) || Ps.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  oa.set(i, n);
}
function cv(t, r, e) {
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
    }), l.type === bt && r[a].type === ze) {
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
function l_(t, r) {
  if (!t)
    return {
      type: "missing"
    };
  let e = null, n = null;
  for (let o = 0; o < t.length; ++o) {
    const i = cv(t[o], r, t.length > 1);
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
function ia(t, r, e) {
  return l_(t.get(r), e);
}
function a_(t, r) {
  return r.map((e, n) => {
    let o = n >= t.args.length ? t.args[t.args.length - 1] : t.args[n];
    return typeof o != "object" && (o = {
      type: o
    }), o.type === bt && e.type === ze ? xl(e) : e;
  });
}
function _f(t, r) {
  return t + ":" + r.args.map((e) => typeof e == "string" ? e : e.type).join("#");
}
function Jn(t, r) {
  return {
    type: Ge,
    value: Di(r, !0)
  };
}
function hf(t, r) {
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
function fv(t, r) {
  if (r.value > ps || r.value < gs)
    throw new Error("Unable to convert value to Integer.");
  const e = r.value - r.value % 1;
  return {
    type: ze,
    value: bn(e)
  };
}
function dv(t, r) {
  let e;
  try {
    e = bn(r.value);
  } catch {
    throw new Error("Unable to convert value to Integer.");
  }
  return {
    type: ze,
    value: e
  };
}
function _v(t, r) {
  return {
    type: ze,
    value: bn(r.value ? 1 : 0)
  };
}
function hv(t, r) {
  const e = Number(r.value);
  if (e !== 1 && e !== 0)
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Jr,
    value: e
  };
}
function pv(t, r) {
  if (r.value !== "true" && r.value !== "false")
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Jr,
    value: r.value === "true" ? 1 : 0
  };
}
function gv(t, r) {
  return {
    type: gn,
    value: ci(r.value)
  };
}
function mv(t, r) {
  return vo(r.value), {
    type: so,
    value: r.value
  };
}
function bv(t, r) {
  try {
    return {
      type: Ge,
      value: encodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to encodeUri string.");
  }
}
function yv(t, r) {
  try {
    return {
      type: Ge,
      value: decodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to decodeUri string.");
  }
}
function Fa(t, r, e, n) {
  const o = t.variables.get(r.value);
  let i;
  return o && o.getType() === n ? (i = o.getValue(), t.storeUsedVars || (t.storeUsedVars = /* @__PURE__ */ new Set()), t.storeUsedVars.add(o)) : i = e.value, n === "color" ? i = ci(i) : n === "url" && vo(i), {
    type: n,
    // value is synced with type by params
    value: i
  };
}
function Es(t, r, e) {
  return Fa(t, r, e, e.type);
}
function pf(t, r, e) {
  return Fa(t, r, e, "color");
}
function gf(t, r, e) {
  return Fa(t, r, e, "url");
}
function u_(t, r) {
  for (let e = 0; e < r.length; ++e) {
    const n = t.charAt(e), o = r.charAt(e);
    if (n !== o && o)
      return o;
  }
  return "";
}
const nl = 1234567890;
function mf(t) {
  const r = new Intl.NumberFormat(t, {
    maximumFractionDigits: 0
  }), e = new Intl.NumberFormat(t, {
    minimumFractionDigits: 1
  }), n = r.format(nl), o = e.format(nl);
  return u_(n, o);
}
function wv(t) {
  const r = new Intl.NumberFormat(t, {
    useGrouping: !1
  }), e = new Intl.NumberFormat(t, {
    useGrouping: !0
  }), n = r.format(nl), o = e.format(nl);
  return u_(n, o);
}
function ni(t, r, e, n) {
  const o = e.value, i = o.replace(/,/g, "");
  if (!/^((#+)|(#*0+))(\.0*#*)?$/.test(i) && !/^#*0*\.((0*#*)|(#+))$/.test(i) || /,.*,/.test(o) || o.indexOf(",") > o.indexOf(".") && o.indexOf(".") > -1)
    throw new Error("Incorrect format pattern.");
  const s = o.split("."), a = s[0], l = s[1] || "", u = o.replace(/[^#0.]/g, "").split("."), c = u[0], f = u[1] || "", d = a.indexOf(","), g = d > -1 ? a.length - d - 1 : -1;
  if (d > -1 && g < 1 || l.indexOf(",") > -1)
    throw new Error("Incorrect format pattern.");
  try {
    let m = 0;
    for (; c[c.length - 1 - m] === "0"; )
      ++m;
    let h = 0;
    for (; f[h] === "0"; )
      ++h;
    let y = h;
    for (; f[y] === "#"; )
      ++y;
    let F = new Intl.NumberFormat((n == null ? void 0 : n.value) || void 0, {
      useGrouping: !1,
      minimumIntegerDigits: Math.min(Math.max(m, 1), 21),
      minimumFractionDigits: Math.min(Math.max(h, 0), 100),
      maximumFractionDigits: Math.min(Math.max(y, h, 0), 100),
      roundingMode: "halfEven"
    }).format(r.value);
    if (d > -1 && g > 0) {
      const R = wv(n == null ? void 0 : n.value), B = mf(n == null ? void 0 : n.value);
      if (R && B) {
        const Q = F.split(B), ae = Q[0];
        let T = "";
        for (let Y = ae.length - 1; Y >= 0; --Y)
          T = ae[Y] + T, Y > 0 && (ae.length - Y) % g === 0 && (T = R + T);
        F = T + (Q.length > 1 ? B + Q[1] : "");
      }
    }
    if (h === 0 && y === 0 && o.endsWith(".")) {
      const R = mf(n == null ? void 0 : n.value);
      R && (F += R);
    }
    return {
      type: Ge,
      value: F
    };
  } catch (m) {
    throw new Error("Incorrect or unsupported number format." + m + " " + (n == null ? void 0 : n.value) || void 0);
  }
}
function vv() {
  U("toString", [ze], Jn), U("toString", [bt], Jn), U("toString", [Jr], Jn), U("toString", [gn], Jn), U("toString", [so], Jn), U("toString", [Ge], Jn), U("toString", [fr], Jn), U("toString", [cr], Jn), U("toNumber", [ze], hf), U("toNumber", [Ge], hf), U("toInteger", [bt], fv), U("toInteger", [Ge], dv), U("toInteger", [Jr], _v), U("toBoolean", [ze], hv), U("toBoolean", [Ge], pv), U("toColor", [Ge], gv), U("toUrl", [Ge], mv), U("encodeUri", [Ge], bv), U("decodeUri", [Ge], yv), U("getIntegerValue", [Ge, ze], Es), U("getNumberValue", [Ge, bt], Es), U("getBooleanValue", [Ge, Jr], Es), U("getStringValue", [Ge, Ge], Es), U("getColorValue", [Ge, gn], pf), U("getColorValue", [Ge, Ge], pf), U("getUrlValue", [Ge, so], gf), U("getUrlValue", [Ge, Ge], gf), Wr("toString", [ze], Jn), Wr("toString", [bt], Jn), Wr("toString", [Jr], Jn), Wr("toString", [gn], Jn), Wr("toString", [so], Jn), Wr("toString", [Ge], Jn), Wr("toString", [fr], Jn), Wr("toString", [cr], Jn), U("decimalFormat", [ze, Ge], ni), U("decimalFormat", [bt, Ge], ni), U("decimalFormat", [ze, Ge, Ge], ni), U("decimalFormat", [bt, Ge, Ge], ni), Wr("decimalFormat", [ze, Ge], ni), Wr("decimalFormat", [bt, Ge], ni), Wr("decimalFormat", [ze, Ge, Ge], ni), Wr("decimalFormat", [bt, Ge, Ge], ni);
}
function qn(t, r) {
  return !t || !r ? t : t.padStart(r, "0");
}
const sa = {
  G(t, r) {
    let e;
    return t < 4 ? e = "short" : t === 5 ? e = "narrow" : e = "long", r({
      era: e
    }, "era");
  },
  d(t, r) {
    return qn(r({
      day: "numeric"
    }, "day"), t > 1 ? t : 0);
  },
  D(t, r) {
    return qn(r({}, "dayofyear"), t > 1 ? t : 0);
  },
  F(t, r) {
    return qn(r({}, "dayofweekinmonth"), t > 1 ? t : 0);
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
    return qn(r({
      year: t === 2 ? "2-digit" : "numeric"
    }, "year"), t > 2 ? t : void 0);
  },
  Y(t, r) {
    return qn(r({
      year: t === 2 ? "2-digit" : "numeric"
    }, "weekyear"), t > 2 ? t : void 0);
  },
  u(t, r) {
    return qn(r({
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
    return t > 2 ? sa.E(t, r) : qn(r({}, "weekdaynumeric"), t > 1 ? t : void 0);
  },
  w(t, r) {
    return qn(r({}, "week"), t > 1 ? t : void 0);
  },
  W(t, r) {
    return qn(r({}, "weekofmonth"), t > 1 ? t : void 0);
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
    return qn(n, t > 1 ? t : void 0);
  },
  h(t, r) {
    return qn(r({
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
    return qn(n, t > 1 ? t : void 0);
  },
  k(t, r) {
    return qn(r({
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
    return qn(r({
      minute: "numeric"
    }, "minute"), t > 1 ? t : void 0);
  },
  s(t, r) {
    return qn(r({
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
    return (e >= 0 ? "+" : "-") + qn(String(o), 4);
  }
}, kv = /(\w)\1*|''|'(''|[^'])+('|$)|./g, Ev = /^'([^]*?)'?$/, jv = /''/g, Cv = /[a-zA-Z]/, Ta = 1e3 * 60 * 60 * 24;
function Av(t) {
  const r = t.match(Ev);
  return r ? r[1].replace(jv, "'") : t;
}
function la(t, r, e) {
  const n = t[r ? "getUTCDay" : "getDay"](), o = n < e ? e - n - 7 : e - n;
  return new Date(t.getTime() + Ta * o);
}
function bf(t, r, e) {
  const n = new Date(t);
  return n[r ? "setUTCDate" : "setDate"](1), n[r ? "setUTCMonth" : "setMonth"](0), la(n, r, e);
}
function yf(t, r) {
  return Math.round((t.getTime() - r.getTime()) / Ta);
}
function wf(t, r, e) {
  let n = 0;
  const o = bf(t, r || !1, e), i = new Date(t);
  i[r ? "setUTCFullYear" : "setFullYear"](t[r ? "getUTCFullYear" : "getFullYear"]() + 1);
  const s = bf(i, r || !1, e), a = t.getTime() < o.getTime(), l = t.getTime() >= s.getTime();
  let u = t[r ? "getUTCFullYear" : "getFullYear"]();
  if (a) {
    --u, o[r ? "setUTCFullYear" : "setFullYear"](o[r ? "getUTCFullYear" : "getFullYear"]() - 1);
    const c = yf(la(t, r, e), o);
    n = Math.round(c / 7) + 1;
  } else if (l)
    ++u, n = 1;
  else {
    const c = yf(la(t, r, e), o);
    n = Math.round(c / 7) + 1;
  }
  return {
    week: n,
    year: u
  };
}
function Sv(t, r, {
  locale: e,
  isUTC: n,
  weekStartDay: o = 0
} = {}) {
  const i = (s, a) => {
    if (a === "week") {
      const { week: c } = wf(t, n || !1, o);
      return String(c);
    }
    if (a === "weekofmonth") {
      const c = t[n ? "getUTCDay" : "getDay"](), f = new Date(t);
      f[n ? "setUTCDate" : "setDate"](1);
      const d = f[n ? "getUTCDay" : "getDay"](), g = t[n ? "getUTCDate" : "getDate"]();
      return String(Math.ceil(g / 7) + (c < d ? 1 : 0));
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
      const f = Math.ceil((t.getTime() - c.getTime()) / Ta);
      return String(f);
    }
    if (a === "weekyear") {
      let { year: c } = wf(t, n || !1, o);
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
  return (r.match(kv) || []).map((s) => {
    if (s === "''")
      return "'";
    const a = s[0];
    if (a === "'")
      return Av(s);
    if (sa[a])
      return sa[a](s.length, i);
    if (a.match(Cv))
      throw new Error(
        `Format string contains an unescaped latin alphabet character "${a}"`
      );
    return s;
  }).join("");
}
function Vv(t) {
  const r = new Date(t);
  return r.setUTCMonth(r.getUTCMonth() + 1), r.setUTCDate(0), r.getUTCDate();
}
function Iv(t, r) {
  return {
    type: Br,
    value: new Date(Number(r.value) * 1e3)
  };
}
function Dv(t, r) {
  const e = new Date(Number(r.value) * 1e3), n = e.getTimezoneOffset();
  return e.setMinutes(e.getMinutes() - n), {
    type: Br,
    value: e
  };
}
function Fv() {
  return {
    type: Br,
    value: /* @__PURE__ */ new Date()
  };
}
function Tv(t, r, e) {
  return {
    type: Br,
    value: new Date(r.value.getTime() + Number(e.value))
  };
}
function Mv(t, r, e) {
  const n = new Date(r.value);
  return n.setUTCFullYear(Number(e.value)), {
    type: Br,
    value: n
  };
}
function Pv(t, r, e) {
  const n = Number(e.value);
  if (n < 1 || n > 12)
    throw new Error(`Expecting month in [1..12], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMonth(n - 1), {
    type: Br,
    value: o
  };
}
function Nv(t, r, e) {
  const n = new Date(r.value), o = Number(e.value);
  if (o <= 0 && o !== -1 || o > Vv(n))
    throw new Error(`Unable to set day ${o} for date ${Di(r, !1)}.`);
  return n.setUTCDate(o === -1 ? 0 : o), {
    type: Br,
    value: n
  };
}
function zv(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 23)
    throw new Error(`Expecting hours in [0..23], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCHours(n), {
    type: Br,
    value: o
  };
}
function Ov(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting minutes in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMinutes(n), {
    type: Br,
    value: o
  };
}
function Bv(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting seconds in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCSeconds(n), {
    type: Br,
    value: o
  };
}
function Lv(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 999)
    throw new Error(`Expecting millis in [0..999], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMilliseconds(n), {
    type: Br,
    value: o
  };
}
const fi = (t) => (r, e) => {
  let o = new Date(e.value.getTime())[t]();
  return t === "getUTCMonth" ? ++o : t === "getUTCDay" && o === 0 && (o = 7), {
    type: ze,
    value: bn(o)
  };
};
function c_(t) {
  return (r, e, n, o) => ({
    type: Ge,
    value: Sv(e.value, n.value, {
      locale: o == null ? void 0 : o.value,
      isUTC: t,
      weekStartDay: r.weekStartDay
    })
  });
}
const Rv = fi("getUTCFullYear"), Hv = fi("getUTCMonth"), Wv = fi("getUTCDate"), Uv = fi("getUTCDay"), Gv = fi("getUTCHours"), Jv = fi("getUTCMinutes"), qv = fi("getUTCSeconds"), Yv = fi("getUTCMilliseconds"), vf = c_(!1), kf = c_(!0);
function Kv() {
  U("parseUnixTime", [ze], Iv), U("parseUnixTimeAsLocal", [ze], Dv), U("nowLocal", [], Fv), U("addMillis", [Br, ze], Tv), U("setYear", [Br, ze], Mv), U("setMonth", [Br, ze], Pv), U("setDay", [Br, ze], Nv), U("setHours", [Br, ze], zv), U("setMinutes", [Br, ze], Ov), U("setSeconds", [Br, ze], Bv), U("setMillis", [Br, ze], Lv), U("getYear", [Br], Rv), U("getMonth", [Br], Hv), U("getDay", [Br], Wv), U("getDayOfWeek", [Br], Uv), U("getHours", [Br], Gv), U("getMinutes", [Br], Jv), U("getSeconds", [Br], qv), U("getMillis", [Br], Yv), U("formatDateAsLocal", [Br, Ge], vf), U("formatDateAsUTC", [Br, Ge], kf), U("formatDateAsLocalWithLocale", [Br, Ge, Ge], vf), U("formatDateAsUTCWithLocale", [Br, Ge, Ge], kf);
}
function Xv(t) {
  return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Zv(t, r) {
  return {
    type: ze,
    value: bn(r.value.length)
  };
}
function Qv(t, r, e) {
  return {
    type: Jr,
    value: r.value.includes(e.value) ? 1 : 0
  };
}
function xv(t, r, e, n) {
  if (n.value < e.value)
    throw new Error("Indexes should be in ascending order.");
  if (e.value < 0 || e.value > r.value.length || n.value < 0 || n.value > r.value.length)
    throw new Error("Indexes are out of bounds.");
  return {
    type: Ge,
    value: r.value.substring(Number(e.value), Number(n.value))
  };
}
function $v(t, r, e, n) {
  let o;
  return e.value ? o = r.value.replace(new RegExp(Xv(e.value), "g"), n.value) : o = r.value, {
    type: Ge,
    value: o
  };
}
function ek(t, r, e) {
  return {
    type: ze,
    value: bn(r.value.indexOf(e.value))
  };
}
function tk(t, r, e) {
  return {
    type: ze,
    value: bn(r.value.lastIndexOf(e.value))
  };
}
function rk(t, r) {
  return {
    type: Ge,
    value: r.value.trim()
  };
}
function nk(t, r) {
  return {
    type: Ge,
    value: r.value.replace(/^\s+/, "")
  };
}
function ok(t, r) {
  return {
    type: Ge,
    value: r.value.replace(/\s+$/, "")
  };
}
function ik(t, r) {
  return {
    type: Ge,
    value: r.value.toUpperCase()
  };
}
function sk(t, r) {
  return {
    type: Ge,
    value: r.value.toLowerCase()
  };
}
function f_(t, r, e, n) {
  if (!n.value.length)
    return t.warnings.push(K(new Error("String for padding is empty."), {
      level: "warn"
    })), "";
  let o = "";
  const i = r.type === Ge ? r.value : Di(r, !1);
  for (; o.length + i.length < e.value; )
    o += n.value;
  return o.length > 0 && o.length + i.length > e.value && (o = o.substring(0, Number(e.value) - Number(i.length))), o;
}
function Ef(t, r, e, n) {
  const o = f_(t, r, e, n);
  return {
    type: Ge,
    value: o + Di(r, !1)
  };
}
function jf(t, r, e, n) {
  const o = f_(t, r, e, n);
  return {
    type: Ge,
    value: Di(r, !1) + o
  };
}
function lk(t, r, e) {
  let n;
  try {
    n = new RegExp(e.value);
  } catch {
    throw new Error("Invalid regular expression.");
  }
  return {
    type: Jr,
    value: n.test(r.value) ? 1 : 0
  };
}
function ak(t, r) {
  return {
    type: Ge,
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping
    value: r.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  };
}
function uk() {
  U("len", [Ge], Zv), U("contains", [Ge, Ge], Qv), U("substring", [Ge, ze, ze], xv), U("replaceAll", [Ge, Ge, Ge], $v), U("index", [Ge, Ge], ek), U("lastIndex", [Ge, Ge], tk), U("trim", [Ge], rk), U("trimLeft", [Ge], nk), U("trimRight", [Ge], ok), U("toUpperCase", [Ge], ik), U("toLowerCase", [Ge], sk), U("padStart", [Ge, ze, Ge], Ef), U("padStart", [ze, ze, Ge], Ef), U("padEnd", [Ge, ze, Ge], jf), U("padEnd", [ze, ze, Ge], jf), U("testRegex", [Ge, Ge], lk), U("encodeRegex", [Ge], ak);
}
function ck(t, r, e) {
  if (e.value === Vi)
    throw new Error("Division by zero is not supported.");
  let n = r.value / e.value;
  return n = Fi(t, n), Ln(t, n), {
    type: ze,
    value: n
  };
}
function fk(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value / e.value;
  return {
    type: bt,
    value: n
  };
}
function dk(t, r, e) {
  if (e.value === Vi)
    throw new Error("Division by zero is not supported.");
  let n = r.value % e.value;
  return n = Fi(t, n), Ln(t, n), {
    type: ze,
    value: n
  };
}
function _k(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value % e.value;
  return {
    type: bt,
    value: n
  };
}
function hk(t, ...r) {
  let e = r.length ? r[0].value : Vi;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value, e = Fi(t, e), Ln(t, e);
  return {
    type: ze,
    value: e
  };
}
function pk(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value;
  return {
    type: bt,
    value: e
  };
}
function gk(t, ...r) {
  let e = r.length ? r[0].value : Vi;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value, e = Fi(t, e), Ln(t, e);
  return {
    type: ze,
    value: e
  };
}
function mk(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value;
  return {
    type: bt,
    value: e
  };
}
function bk(t, ...r) {
  let e = Vi;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value, e = Fi(t, e), Ln(t, e);
  return {
    type: ze,
    value: e
  };
}
function yk(t, ...r) {
  let e = 0;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value;
  return {
    type: bt,
    value: e
  };
}
function wk(t, r) {
  const e = Yd(r.value);
  return Ln(t, e), {
    type: r.type,
    value: e
  };
}
function vk(t, r) {
  const e = Math.abs(r.value);
  return {
    type: bt,
    value: e
  };
}
function kk(t, ...r) {
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
function Ek(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: bt,
    value: Math.max(...r.map((e) => e.value))
  };
}
function jk(t, ...r) {
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
function Ck(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: bt,
    value: Math.min(...r.map((e) => e.value))
  };
}
function Ak() {
  return {
    type: bt,
    value: d1
  };
}
function Sk() {
  return {
    type: bt,
    value: _1
  };
}
function Vk(t) {
  return Ln(t, ps), {
    type: ze,
    value: ps
  };
}
function Ik(t) {
  return Ln(t, gs), {
    type: ze,
    value: gs
  };
}
function Dk(t, r) {
  const e = Math.sign(r.value);
  return {
    type: bt,
    // js treats Math.round(-0.5) as 0, which is different to other platforms
    value: e * Math.round(Math.abs(r.value))
  };
}
function Fk(t, r) {
  return {
    type: bt,
    value: Math.floor(r.value)
  };
}
function Tk(t, r) {
  return {
    type: bt,
    value: Math.ceil(r.value)
  };
}
function Mk(t, r) {
  return {
    type: ze,
    value: Kd(r.value)
  };
}
function Pk(t, r) {
  return {
    type: bt,
    value: Math.sign(r.value)
  };
}
function Nk(t, r, e) {
  let n;
  if (e.value === Vi)
    n = r.value;
  else if (r.value === Vi)
    n = bn(0);
  else {
    const o = Kd(e.value);
    n = Yd(r.value) * o;
  }
  return Ln(t, n), {
    type: ze,
    value: n
  };
}
function zk(t, r, e) {
  let n = Math.sign(e.value);
  n === 0 && (n = Object.is(n, 0) ? 1 : -1);
  const o = Math.abs(r.value) * n;
  return {
    type: bt,
    value: o
  };
}
function Ok() {
  U("div", [ze, ze], ck), U("div", [bt, bt], fk), U("mod", [ze, ze], dk), U("mod", [bt, bt], _k), U("mul", [{
    type: ze,
    isVararg: !0
  }], hk), U("mul", [{
    type: bt,
    isVararg: !0
  }], pk), U("sub", [{
    type: ze,
    isVararg: !0
  }], gk), U("sub", [{
    type: bt,
    isVararg: !0
  }], mk), U("sum", [{
    type: ze,
    isVararg: !0
  }], bk), U("sum", [{
    type: bt,
    isVararg: !0
  }], yk), U("abs", [ze], wk), U("abs", [bt], vk), U("max", [{
    type: ze,
    isVararg: !0
  }], kk), U("max", [{
    type: bt,
    isVararg: !0
  }], Ek), U("min", [{
    type: ze,
    isVararg: !0
  }], jk), U("min", [{
    type: bt,
    isVararg: !0
  }], Ck), U("maxNumber", [], Ak), U("minNumber", [], Sk), U("maxInteger", [], Vk), U("minInteger", [], Ik), U("round", [bt], Dk), U("floor", [bt], Fk), U("ceil", [bt], Tk), U("signum", [ze], Mk), U("signum", [bt], Pk), U("copySign", [ze, ze], Nk), U("copySign", [bt, bt], zk);
}
function Al(t) {
  return (r, e) => {
    const n = El(e.value);
    return {
      type: bt,
      value: n[t] / 255
    };
  };
}
function Sl(t) {
  return (r, e, n) => {
    const o = El(e.value);
    return o[t] = n.value * 255, {
      type: gn,
      value: Ti(o)
    };
  };
}
const Cf = Al("a"), Af = Al("r"), Sf = Al("g"), Vf = Al("b"), If = Sl("a"), Df = Sl("r"), Ff = Sl("g"), Tf = Sl("b");
function Bk(t, r, e, n) {
  const o = {
    a: 255,
    r: r.value * 255,
    g: e.value * 255,
    b: n.value * 255
  };
  return {
    type: gn,
    value: Ti(o)
  };
}
function Lk(t, r, e, n, o) {
  const i = {
    a: r.value * 255,
    r: e.value * 255,
    g: n.value * 255,
    b: o.value * 255
  };
  return {
    type: gn,
    value: Ti(i)
  };
}
function Rk() {
  U("getColorAlpha", [Ge], Cf), U("getColorAlpha", [gn], Cf), U("getColorRed", [Ge], Af), U("getColorRed", [gn], Af), U("getColorGreen", [Ge], Sf), U("getColorGreen", [gn], Sf), U("getColorBlue", [Ge], Vf), U("getColorBlue", [gn], Vf), U("setColorAlpha", [Ge, bt], If), U("setColorAlpha", [gn, bt], If), U("setColorRed", [Ge, bt], Df), U("setColorRed", [gn, bt], Df), U("setColorGreen", [Ge, bt], Ff), U("setColorGreen", [gn, bt], Ff), U("setColorBlue", [Ge, bt], Tf), U("setColorBlue", [gn, bt], Tf), U("rgb", [bt, bt, bt], Bk), U("argb", [bt, bt, bt, bt], Lk);
}
function di(t, r, e, n) {
  if (r.value < 0)
    throw new Error("Expecting non-negative number of milliseconds.");
  let o = bn(r.value) / bn(e);
  return Ln(t, o), n && (o = bn(o) % bn(n)), {
    type: ze,
    value: o
  };
}
const d_ = 1e3, Hk = 60, __ = 1e3 * 60, Wk = 60, h_ = 1e3 * 60 * 60, Uk = 24, Gk = 1e3 * 60 * 60 * 24, Jk = 1e3 * 60 * 60 * 24 * 7;
function qk(t, r) {
  return di(t, r, d_, Hk);
}
function Yk(t, r) {
  return di(t, r, d_);
}
function Kk(t, r) {
  return di(t, r, __, Wk);
}
function Xk(t, r) {
  return di(t, r, __);
}
function Zk(t, r) {
  return di(t, r, h_, Uk);
}
function Qk(t, r) {
  return di(t, r, h_);
}
function xk(t, r) {
  return di(t, r, Gk);
}
function $k(t, r) {
  return di(t, r, Jk);
}
function e2() {
  U("getIntervalSeconds", [ze], qk), U("getIntervalTotalSeconds", [ze], Yk), U("getIntervalMinutes", [ze], Kk), U("getIntervalTotalMinutes", [ze], Xk), U("getIntervalHours", [ze], Zk), U("getIntervalTotalHours", [ze], Qk), U("getIntervalTotalDays", [ze], xk), U("getIntervalTotalWeeks", [ze], $k);
}
function t2(t, r) {
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
function _i(t) {
  return (r, e, ...n) => {
    if (n.length === 0)
      throw new Error("Non empty argument list is required.");
    const o = t2(e.value, n.map((i) => i.value));
    return jl(r, o, t);
  };
}
function xi(t, r) {
  return (e, n, o, ...i) => {
    try {
      return t(e, o, ...i);
    } catch {
      let a = n.value;
      return r === "color" ? a = ci(a) : r === "url" && vo(a), {
        type: r,
        value: a
      };
    }
  };
}
const Ns = _i(Ge), zs = _i(bt), Os = _i(ze), Bs = _i(Jr), Ls = _i(gn), Rs = _i(so), aa = _i(fr), ua = _i(cr), Mf = xi(Ns, Ge), Pf = xi(zs, bt), Nf = xi(Os, ze), zf = xi(Bs, Jr), js = xi(Ls, gn), Cs = xi(Rs, so);
function r2(t, r, ...e) {
  try {
    return aa(t, r, ...e);
  } catch {
    return {
      type: fr,
      value: []
    };
  }
}
function n2(t, r, ...e) {
  try {
    return ua(t, r, ...e);
  } catch {
    return {
      type: cr,
      value: {}
    };
  }
}
function o2(t, r, e) {
  return {
    type: Jr,
    value: e.value in r.value ? 1 : 0
  };
}
function i2(t, r) {
  return {
    type: Jr,
    value: Object.keys(r.value).length ? 0 : 1
  };
}
function s2(t, r) {
  return {
    type: ze,
    value: bn(Object.keys(r.value).length)
  };
}
function Of(t, r) {
  return {
    type: fr,
    value: Object.keys(r.value)
  };
}
function Bf(t, r) {
  return {
    type: fr,
    value: Object.values(r.value)
  };
}
function l2() {
  const t = {
    type: Ge,
    isVararg: !0
  };
  U("getDictString", [cr, t], Ns), U("getStringFromDict", [cr, t], Ns), U("getDictNumber", [cr, t], zs), U("getNumberFromDict", [cr, t], zs), U("getDictInteger", [cr, t], Os), U("getIntegerFromDict", [cr, t], Os), U("getDictBoolean", [cr, t], Bs), U("getBooleanFromDict", [cr, t], Bs), U("getDictColor", [cr, t], Ls), U("getColorFromDict", [cr, t], Ls), U("getDictUrl", [cr, t], Rs), U("getUrlFromDict", [cr, t], Rs), U("getDictOptString", [Ge, cr, t], Mf), U("getOptStringFromDict", [Ge, cr, t], Mf), U("getDictOptNumber", [bt, cr, t], Pf), U("getOptNumberFromDict", [bt, cr, t], Pf), U("getDictOptInteger", [ze, cr, t], Nf), U("getOptIntegerFromDict", [ze, cr, t], Nf), U("getDictOptBoolean", [Jr, cr, t], zf), U("getOptBooleanFromDict", [Jr, cr, t], zf), U("getDictOptColor", [gn, cr, t], js), U("getOptColorFromDict", [gn, cr, t], js), U("getDictOptColor", [Ge, cr, t], js), U("getOptColorFromDict", [Ge, cr, t], js), U("getDictOptUrl", [Ge, cr, t], Cs), U("getOptUrlFromDict", [Ge, cr, t], Cs), U("getDictOptUrl", [so, cr, t], Cs), U("getOptUrlFromDict", [so, cr, t], Cs), U("getDictFromDict", [cr, t], ua), U("getArrayFromDict", [cr, t], aa), U("getOptArrayFromDict", [cr, t], r2), U("getOptDictFromDict", [cr, t], n2), U("len", [cr], s2), U("getDictKeys", [cr], Of), U("getDictValues", [cr], Bf), Wr("getString", [cr, t], Ns), Wr("getBoolean", [cr, t], Bs), Wr("getInteger", [cr, t], Os), Wr("getNumber", [cr, t], zs), Wr("getUrl", [cr, t], Rs), Wr("getColor", [cr, t], Ls), Wr("getArray", [cr, t], aa), Wr("getDict", [cr, t], ua), Wr("containsKey", [cr, Ge], o2), Wr("isEmpty", [cr], i2), Wr("getKeys", [cr], Of), Wr("getValues", [cr], Bf);
}
function hi(t, r) {
  return (e, n, o) => {
    if (o.value < 0 || o.value >= n.value.length)
      throw new Error(`Requested index (${o.value}) out of bounds array size (${n.value.length}).`);
    let i = n.value[Number(o.value)], s = typeof i;
    if (t === "array" && !Array.isArray(i) || t !== "array" && s !== t || s === "object" && i === null)
      throw s === "object" && (Array.isArray(i) ? s = "Array" : i === null ? s = "Null" : s = "Dict"), new Error(`Incorrect value type: expected ${ro(r)}, got ${ro(s)}.`);
    if (t === "number" && r === "integer") {
      Ln(e, i);
      try {
        i = bn(i);
      } catch {
        throw new Error("Cannot convert value to integer.");
      }
    }
    return t === "string" && r === "color" && (i = ci(i)), t === "string" && r === "url" && vo(i), {
      type: r,
      value: i
    };
  };
}
function $i(t, r) {
  return (e, n, o, i) => {
    try {
      return t(e, n, o);
    } catch {
      let a = i.value;
      return r === "color" ? a = ci(a) : r === "url" && vo(a), {
        type: r,
        value: a
      };
    }
  };
}
const Hs = hi("string", "string"), Ws = hi("number", "number"), Us = hi("number", "integer"), Gs = hi("boolean", "boolean"), Js = hi("string", "color"), qs = hi("string", "url"), ca = hi("array", "array"), fa = hi("object", "dict"), Lf = $i(Hs, "string"), Rf = $i(Ws, "number"), Hf = $i(Us, "integer"), Wf = $i(Gs, "boolean"), As = $i(Js, "color"), Ss = $i(qs, "url");
function a2(t, r, e) {
  try {
    return ca(t, r, e);
  } catch {
    return {
      type: fr,
      value: []
    };
  }
}
function u2(t, r, e) {
  try {
    return fa(t, r, e);
  } catch {
    return {
      type: cr,
      value: {}
    };
  }
}
function c2(t, r) {
  return {
    type: ze,
    value: bn(r.value.length)
  };
}
function f2(t, r) {
  return {
    type: Jr,
    value: r.value.length === 0 ? 1 : 0
  };
}
function d2(t, r, e) {
  return r.value.length ? {
    type: fr,
    value: r.value.filter((n) => {
      const o = [];
      if (typeof n == "string")
        bo(n) && o.push([{
          type: gn,
          value: n
        }]), p1(n) && o.push([{
          type: so,
          value: n
        }]), o.push([{
          type: Ge,
          value: n
        }]);
      else if (typeof n == "number")
        Math.round(n) === n && (Ln(t, n), o.push([{
          type: ze,
          value: bn(n)
        }])), o.push([{
          type: bt,
          value: n
        }]);
      else if (typeof n == "bigint")
        Ln(t, n), o.push([{
          type: ze,
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
          type: Jr,
          value: n ? 1 : 0
        }]);
      else
        throw new Error(`Incorrect value type: ${ro(typeof n)}`);
      let i = {
        type: "missing"
      };
      for (const c of o)
        if (i = l_(e.value, c), "func" in i)
          break;
      let s;
      if ("func" in i)
        s = i.func;
      else {
        const c = e.value[0];
        p_(c.name || "Function", o[0], i, !0);
      }
      const a = s.args[0], l = jl(
        t,
        n,
        typeof a == "string" ? a : a.type
      ), u = s.cb(t, l);
      if (u.type !== Jr)
        throw new Error("Function must return boolean value.");
      return u.value;
    })
  } : {
    type: fr,
    value: []
  };
}
function _2() {
  U("getArrayString", [
    fr,
    ze
  ], Hs), U("getStringFromArray", [
    fr,
    ze
  ], Hs), U("getArrayNumber", [
    fr,
    ze
  ], Ws), U("getNumberFromArray", [
    fr,
    ze
  ], Ws), U("getArrayInteger", [
    fr,
    ze
  ], Us), U("getIntegerFromArray", [
    fr,
    ze
  ], Us), U("getArrayBoolean", [
    fr,
    ze
  ], Gs), U("getBooleanFromArray", [
    fr,
    ze
  ], Gs), U("getArrayColor", [
    fr,
    ze
  ], Js), U("getColorFromArray", [
    fr,
    ze
  ], Js), U("getArrayUrl", [
    fr,
    ze
  ], qs), U("getUrlFromArray", [
    fr,
    ze
  ], qs), U("getArrayFromArray", [
    fr,
    ze
  ], ca), U("getDictFromArray", [
    fr,
    ze
  ], fa), U("getArrayOptString", [
    fr,
    ze,
    Ge
  ], Lf), U("getOptStringFromArray", [
    fr,
    ze,
    Ge
  ], Lf), U("getArrayOptNumber", [
    fr,
    ze,
    bt
  ], Rf), U("getOptNumberFromArray", [
    fr,
    ze,
    bt
  ], Rf), U("getArrayOptInteger", [
    fr,
    ze,
    ze
  ], Hf), U("getOptIntegerFromArray", [
    fr,
    ze,
    ze
  ], Hf), U("getArrayOptBoolean", [
    fr,
    ze,
    Jr
  ], Wf), U("getOptBooleanFromArray", [
    fr,
    ze,
    Jr
  ], Wf), U("getArrayOptColor", [
    fr,
    ze,
    gn
  ], As), U("getOptColorFromArray", [
    fr,
    ze,
    gn
  ], As), U("getArrayOptColor", [
    fr,
    ze,
    Ge
  ], As), U("getOptColorFromArray", [
    fr,
    ze,
    Ge
  ], As), U("getArrayOptUrl", [
    fr,
    ze,
    so
  ], Ss), U("getOptUrlFromArray", [
    fr,
    ze,
    so
  ], Ss), U("getArrayOptUrl", [
    fr,
    ze,
    Ge
  ], Ss), U("getOptUrlFromArray", [
    fr,
    ze,
    Ge
  ], Ss), U("getOptArrayFromArray", [
    fr,
    ze
  ], a2), U("getOptDictFromArray", [
    fr,
    ze
  ], u2), U("len", [
    fr
  ], c2), Wr("getString", [fr, ze], Hs), Wr("getInteger", [fr, ze], Us), Wr("getNumber", [fr, ze], Ws), Wr("getBoolean", [fr, ze], Gs), Wr("getUrl", [fr, ze], qs), Wr("getColor", [fr, ze], Js), Wr("getArray", [fr, ze], ca), Wr("getDict", [fr, ze], fa), Wr("isEmpty", [fr], f2), Wr("filter", [fr, h1], d2);
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
      return t === "url" && vo(n.value), {
        type: t,
        value: n.value
      };
    } else t === "url" && vo(i);
    return jl(r, i, t);
  };
}
function h2() {
  U("getStoredIntegerValue", [Ge, ze], To(ze)), U("getStoredNumberValue", [Ge, bt], To(bt)), U("getStoredStringValue", [Ge, Ge], To(Ge)), U("getStoredUrlValue", [Ge, so], To(so)), U("getStoredUrlValue", [Ge, Ge], To(so)), U("getStoredColorValue", [Ge, gn], To(gn)), U("getStoredColorValue", [Ge, Ge], To(gn)), U("getStoredBooleanValue", [Ge, Jr], To(Jr)), U("getStoredArrayValue", [Ge], To(fr)), U("getStoredDictValue", [Ge], To(cr));
}
function p2() {
  return {
    type: bt,
    value: Math.PI
  };
}
function g2(t, r) {
  return {
    type: bt,
    value: r.value / 180 * Math.PI
  };
}
function m2(t, r) {
  return {
    type: bt,
    value: r.value / Math.PI * 180
  };
}
function b2(t, r) {
  return {
    type: bt,
    value: Math.sin(r.value)
  };
}
function y2(t, r) {
  return {
    type: bt,
    value: Math.cos(r.value)
  };
}
function w2(t, r) {
  return {
    type: bt,
    value: Math.tan(r.value)
  };
}
function v2(t, r) {
  const e = Math.tan(r.value);
  if (Math.abs(e) < 1e-12)
    throw new Error("Cotangent is undefined for the given value.");
  return {
    type: bt,
    value: 1 / e
  };
}
function k2(t, r) {
  return {
    type: bt,
    value: Math.atan(r.value)
  };
}
function E2(t, r, e) {
  return {
    type: bt,
    value: Math.atan2(r.value, e.value)
  };
}
function j2(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arcsine is undefined for the given value.");
  return {
    type: bt,
    value: Math.asin(r.value)
  };
}
function C2(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arccosine is undefined for the given value.");
  return {
    type: bt,
    value: Math.acos(r.value)
  };
}
function A2() {
  U("pi", [], p2), U("toRadians", [bt], g2), U("toDegrees", [bt], m2), U("sin", [bt], b2), U("cos", [bt], y2), U("tan", [bt], w2), U("cot", [bt], v2), U("atan", [bt], k2), U("atan2", [bt, bt], E2), U("asin", [bt], j2), U("acos", [bt], C2);
}
function S2() {
  vv(), Kv(), e2(), uk(), Ok(), Rk(), l2(), _2(), h2(), A2();
}
S2();
function V2(t, r) {
  return {
    type: Ge,
    value: r.value
  };
}
function I2(t, r) {
  return {
    type: bt,
    value: r.value
  };
}
function D2(t, r) {
  return Ln(t, r.value), {
    type: ze,
    value: r.value
  };
}
function F2(t, r) {
  return {
    type: Jr,
    value: r.value ? 1 : 0
  };
}
function T2(t, r) {
  const e = el(Wn(t, r.argument));
  switch (r.operator) {
    case "!":
      if (e.type === Jr)
        return {
          type: Jr,
          value: e.value ? 0 : 1
        };
      Tn(`${r.operator}${mn(e)}`, "A Boolean is expected after a unary not.");
    case "+":
    case "-":
      const n = r.operator === "+" ? 1 : -1;
      if (e.type === ze) {
        const o = e.value * bn(n);
        return Ln(t, o), {
          type: ze,
          value: o
        };
      } else {
        if (e.type === bt)
          return {
            type: bt,
            value: e.value * n
          };
        Tn(
          `${r.operator}${mn(e)}`,
          `A Number is expected after a unary ${r.operator === "+" ? "plus" : "minus"}.`
        );
      }
  }
}
function M2(t, r) {
  const e = el(Wn(t, r.test));
  if (e.type === Jr)
    return e.value ? Wn(t, r.consequent) : Wn(t, r.alternate);
  Tn(
    `${mn(e)} ? ${mn(Wn(t, r.consequent))} : ${mn(Wn(t, r.alternate))}`,
    "Ternary must be called with a Boolean value as a condition."
  );
}
function P2(t, r) {
  try {
    return Wn(t, r.test);
  } catch {
    return Wn(t, r.alternate);
  }
}
function N2(t, r) {
  let e = "";
  if (r.quasis.length === 2 && r.quasis[0].value === "" && r.quasis[1].value === "")
    return Wn(t, r.expressions[0]);
  for (let n = 0; n < r.expressions.length; ++n)
    e += r.quasis[n].value, e += Di(Wn(t, r.expressions[n]), !0);
  return e += r.quasis[r.quasis.length - 1].value, {
    type: Ge,
    value: e
  };
}
function z2(t, r) {
  const e = el(Wn(t, r.left));
  if (e.type !== Jr && Tn(
    `${mn(e)} ${r.operator} ...`,
    `'${r.operator}' must be called with boolean operands.`
  ), r.operator === "||" && e.value)
    return e;
  if (r.operator === "&&" && !e.value)
    return {
      type: Jr,
      value: 0
    };
  const n = el(Wn(t, r.right));
  return n.type !== Jr && Tn(
    `${mn(e)} ${r.operator} ${mn(n)}`,
    `Operator '${r.operator}' cannot be applied to different types: Boolean and ${ro(n.type)}.`
  ), {
    type: Jr,
    value: n.value
  };
}
function O2(t, r, e) {
  let n;
  return r.type === Br && e.type === Br ? n = r.value.getTime() === e.value.getTime() : n = r.value === e.value, t === "!=" && (n = !n), {
    type: Jr,
    value: n ? 1 : 0
  };
}
function B2(t, r, e) {
  (r.type !== bt && r.type !== ze && r.type !== Br || e.type !== bt && e.type !== ze && e.type !== Br) && Tn(
    `${mn(r)} ${t} ${mn(e)}`,
    `Operator '${t}' cannot be applied to ${ro(r.type)} type.`
  );
  let n;
  const o = r.type === Br ? r.value.getTime() : r.value, i = e.type === Br ? e.value.getTime() : e.value;
  return t === ">" ? n = o > i : t === ">=" ? n = o >= i : t === "<" ? n = o < i : n = o <= i, {
    type: Jr,
    value: n ? 1 : 0
  };
}
function L2(t, r, e, n) {
  if (e.type !== Ge && e.type !== bt && e.type !== ze && Tn(
    `${mn(e)} ${r} ${mn(n)}`,
    `Operator '${r}' cannot be applied to ${ro(e.type)} type.`
  ), e.type === Ge)
    return r === "-" && Tn(
      `${mn(e)} - ${mn(n)}`,
      `Operator '${r}' cannot be applied to ${ro(e.type)} type.`
    ), {
      type: Ge,
      value: e.value + n.value
    };
  let o = r === "+" ? e.value + n.value : e.value - n.value;
  if (e.type === ze)
    try {
      o = Fi(t, o), Ln(t, o);
    } catch (i) {
      Tn(
        `${mn(e)} ${r} ${mn(n)}`,
        i.message
      );
    }
  return {
    type: e.type,
    value: o
  };
}
function R2(t, r, e, n) {
  e.type !== ze && e.type !== bt && Tn(
    `${mn(e)} ${r} ${mn(n)}`,
    `Operator '${r}' cannot be applied to ${ro(e.type)} type.`
  );
  let o;
  if (r === "*")
    o = e.value * n.value;
  else if (r === "/" || r === "%")
    Number(n.value) === 0 && Tn(
      `${mn(e)} ${r} ${mn(n)}`,
      "Division by zero is not supported."
    ), r === "/" ? o = e.value / n.value : o = e.value % n.value;
  else
    throw new Error(`Unsupported operation ${r}`);
  if (e.type === ze)
    try {
      o = Fi(t, o), Ln(t, o);
    } catch (i) {
      Tn(
        `${mn(e)} ${r} ${mn(n)}`,
        i.message
      );
    }
  return {
    type: e.type,
    value: o
  };
}
function H2(t, r) {
  const e = r.operator;
  let n = Wn(t, r.left), o = Wn(t, r.right);
  if ((n.type === "number" && o.type === "integer" || n.type === "integer" && o.type === "number") && (n.type === "integer" ? n = xl(n) : o.type === "integer" && (o = xl(o))), n.type !== o.type && Tn(
    `${mn(n)} ${r.operator} ${mn(o)}`,
    `Operator '${e}' cannot be applied to different types: ${ro(n.type)} and ${ro(o.type)}.`
  ), e === "==" || e === "!=")
    return O2(e, n, o);
  if (e === ">" || e === ">=" || e === "<" || e === "<=")
    return B2(e, n, o);
  if (e === "+" || e === "-")
    return L2(t, e, n, o);
  if (e === "/" || e === "*" || e === "%")
    return R2(t, e, n, o);
  throw new Error(`Unsupported operation ${e}`);
}
function ol(t) {
  return t.map(mn).join(", ");
}
function W2(t, r) {
  const e = r.callee.name;
  let n, o = r.arguments.map((a) => Wn(t, a));
  const i = e + ":" + o.map((a) => a.type).join("#");
  let s;
  if (t.customFunctions && (s = ia(t.customFunctions, e, o)), !s || !("func" in s))
    if (na.has(i))
      s = {
        func: na.get(i),
        conversions: 0
      };
    else {
      const a = ia(Ms, e, o);
      ("func" in a || !s || s.type === "missing") && (s = a);
    }
  if (s && (("expected" in s || "type" in s && s.type === "missing") && p_(e, o, s), n = s.func, s.conversions && (o = a_(n, o))), !n)
    throw new Error("Function not found");
  try {
    return n.cb(t, ...o);
  } catch (a) {
    if (a && a instanceof Ia)
      throw a;
    const l = `${e}(${ol(o)})`;
    Tn(l, a.message);
  }
}
function p_(t, r, e, n = !1) {
  const o = r.map((a) => ro(a.type)).join(", "), i = `${t}(${ol(r)})`, s = n ? m1 : Tn;
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
function U2(t, r) {
  const e = r.method.name;
  let n, o = [r.object, ...r.arguments].map((s) => Wn(t, s));
  const i = e + ":" + o.map((s) => s.type).join("#");
  if (oa.has(i))
    n = oa.get(i);
  else {
    const s = ia(Ps, e, o);
    if ("expected" in s || "type" in s && s.type === "missing") {
      const a = o.slice(1).map((u) => ro(u.type)).join(", "), l = `${e}(${ol(o.slice(1))})`;
      s.type === "few" && o.length === 1 ? Tn(l, "Method requires non empty argument list.") : s.type === "many" ? Tn(l, `Method has no matching overload for given argument types: ${a}.`) : s.type === "few" || s.type === "mismatch" ? Tn(l, `Method has no matching overload for given argument types: ${a}.`) : Tn(l, `Unknown method name: ${e}.`);
    }
    n = s.func, s.conversions && (o = a_(n, o));
  }
  if (!n)
    throw new Error("Method not found");
  try {
    return n.cb(t, ...o);
  } catch (s) {
    if (s && s instanceof Ia)
      throw s;
    const a = `${e}(${ol(o.slice(1))})`;
    Tn(a, s.message);
  }
}
function G2(t, r) {
  var i;
  const e = r.id.name, n = (i = t.customFunctions) == null ? void 0 : i.get(e);
  if (n)
    return {
      type: "function",
      value: n
    };
  const o = t.variables.get(e);
  if (o)
    return F1(o);
  throw new Error(`Variable '${e}' is missing.`);
}
const Uf = {
  StringLiteral: V2,
  NumberLiteral: I2,
  IntegerLiteral: D2,
  BooleanLiteral: F2,
  UnaryExpression: T2,
  ConditionalExpression: M2,
  TryExpression: P2,
  TemplateLiteral: N2,
  LogicalExpression: z2,
  BinaryExpression: H2,
  CallExpression: W2,
  MethodExpression: U2,
  Variable: G2
};
function Wn(t, r) {
  if (r.type in Uf)
    return Uf[r.type](t, r);
  throw new Error("Unsupported expression");
}
function Ma(t, r, e, n, o) {
  try {
    const i = {
      variables: t,
      customFunctions: r,
      warnings: [],
      store: e,
      weekStartDay: (o == null ? void 0 : o.weekStartDay) || 0
    };
    return {
      result: Wn(i, n),
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
function J2(t, r) {
  return r && r[3] && r[7] ? { type: "ConditionalExpression", test: t, consequent: r[3], alternate: r[7] } : t;
}
function q2(t, r) {
  return r && r[3] ? { type: "TryExpression", test: t, alternate: r[3] } : t;
}
function Vs(t, r) {
  return r.length ? r.reduce((e, n) => ({
    type: "BinaryExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), t) : t;
}
function Gf(t, r) {
  return r.length ? r.reduce((e, n) => ({
    type: "LogicalExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), t) : t;
}
function Y2(t, r) {
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
function K2(t) {
  return t === "true" || t === "false" ? { type: "BooleanLiteral", value: t === "true" } : { type: "Variable", id: { type: "Identifier", name: t } };
}
function Jf(t) {
  if (t.every((e) => typeof e == "string"))
    return { type: "StringLiteral", value: t.join("") };
  let r = t.reduce((e, n) => (typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e), []).reduce((e, n) => (typeof n == "string" ? e.quasis.push({ type: "StringLiteral", value: n }) : (e.quasis.length === e.expressions.length && e.quasis.push({ type: "StringLiteral", value: "" }), e.expressions.push(n)), e), {
    type: "TemplateLiteral",
    quasis: [],
    expressions: []
  });
  return r.quasis.length === r.expressions.length && r.quasis.push({ type: "StringLiteral", value: "" }), r;
}
function X2(t) {
  try {
    return bn(t);
  } catch {
    throw new Error(`Value ${t} can't be converted to Integer type.`);
  }
}
function qf(t) {
  if (t === "'" || t === "\\")
    return t;
  throw new Error("Incorrect string escape");
}
function Z2(t, r) {
  function e() {
    this.constructor = t;
  }
  e.prototype = r.prototype, t.prototype = new e();
}
function Yi(t, r, e, n) {
  var o = Error.call(this, t);
  return Object.setPrototypeOf && Object.setPrototypeOf(o, Yi.prototype), o.expected = r, o.found = e, o.location = n, o.name = "SyntaxError", o;
}
Z2(Yi, Error);
function Hl(t, r, e) {
  return e = e || " ", t.length > r ? t : (r -= t.length, e += e.repeat(r), t + e.slice(0, r));
}
Yi.prototype.format = function(t) {
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
      var a = this.location.end, l = Hl("", i.line.toString().length, " "), u = e[o.line - 1], c = o.line === a.line ? a.column : u.length + 1, f = c - o.column || 1;
      r += `
 --> ` + s + `
` + l + ` |
` + i.line + " | " + u + `
` + l + " | " + Hl("", o.column - 1, " ") + Hl("", f, "^");
    } else
      r += `
 at ` + s;
  }
  return r;
};
Yi.buildMessage = function(t, r) {
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
    var c = u.map(s), f, d;
    if (c.sort(), c.length > 0) {
      for (f = 1, d = 1; f < c.length; f++)
        c[f - 1] !== c[f] && (c[d] = c[f], d++);
      c.length = d;
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
function g_(t, r) {
  r = r !== void 0 ? r : {};
  var e = {}, n = r.grammarSource, o = { start: rn, JsonStringContents: wn }, i = rn, s = "@{", a = "}", l = "@{}", u = "\\", c = "?", f = ":", d = "!:", g = "||", m = "&&", h = "==", y = "!=", w = ">=", F = ">", R = "<=", B = "<", Q = "+", ae = "-", T = "/", Y = "*", le = "%", C = "!", N = ".", z = "(", O = ")", oe = ",", fe = "'", ce = "e", Ae = "E", _e = /^[^}]/, Te = /^[^'}]/, ee = /^[0-9]/, Me = /^[a-zA-Z_]/, Xe = /^[a-zA-Z_0-9]/, Qe = /^[ \t\r\n]/, Ee = Ye("@{", !1), it = Ye("}", !1), we = Ye("@{}", !1), Se = Ye("\\", !1), he = qt(), x = Ke(["}"], !0, !1), de = Ye("?", !1), se = Ye(":", !1), De = Ye("!:", !1), tt = Ye("||", !1), xe = Ye("&&", !1), ne = Ye("==", !1), Ze = Ye("!=", !1), Re = Ye(">=", !1), ut = Ye(">", !1), ct = Ye("<=", !1), ft = Ye("<", !1), Et = Ye("+", !1), st = Ye("-", !1), Lt = Ye("/", !1), _t = Ye("*", !1), pe = Ye("%", !1), ge = Ye("!", !1), gt = Ye(".", !1), Ce = Ye("(", !1), M = Ye(")", !1), Ct = Ye(",", !1), ht = Qr("string"), Dt = Ye("'", !1), Nt = Ke(["'", "}"], !0, !1), nt = Qr("integer"), X = Ke([["0", "9"]], !1, !1), It = Qr("number"), zt = Ye("e", !1), er = Ye("E", !1), Xt = Ke([["a", "z"], ["A", "Z"], "_"], !1, !1), me = Ke([["a", "z"], ["A", "Z"], "_", ["0", "9"]], !1, !1), Ue = Qr("whitespace"), mt = Ke([" ", "	", "\r", `
`], !1, !1), ye = function(b) {
    return b;
  }, et = function(b) {
    return Jf(b);
  }, Le = function(b) {
    return b;
  }, or = function() {
    return "";
  }, Oe = function() {
    return lt();
  }, kt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, Tt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, Mt = function(b) {
    return b;
  }, hr = function(b) {
    return qf(b);
  }, Ne = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, jt = function(b, D) {
    return J2(b, D);
  }, lr = function(b, D) {
    return q2(b, D);
  }, rr = function(b, D) {
    return Gf(b, D);
  }, xt = function(b, D) {
    return Gf(b, D);
  }, yr = function(b, D) {
    return Vs(b, D);
  }, Sr = function(b, D) {
    return Vs(b, D);
  }, Bt = function(b, D) {
    return Vs(b, D);
  }, jr = function(b, D) {
    return Vs(b, D);
  }, J = function(b) {
    return b;
  }, pt = function(b) {
    return b;
  }, Kt = function(b, D) {
    return { type: "UnaryExpression", operator: b, argument: D };
  }, At = function() {
    throw new Error("Incorrect unary operator");
  }, Cr = function(b, D) {
    return Y2(b, D);
  }, Dr = function(b, D) {
    return { type: "CallExpression", callee: b, arguments: D };
  }, wr = function(b, D) {
    return [b, ...D];
  }, Mr = function(b) {
    return b;
  }, qr = function(b) {
    return b;
  }, ir = function(b) {
    return Jf(b);
  }, ot = function(b) {
    return b;
  }, St = function() {
    return "";
  }, $t = function() {
    return lt();
  }, Qt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, pr = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, dt = function(b) {
    return b;
  }, te = function(b) {
    return qf(b);
  }, vt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, sr = function() {
    return { type: "IntegerLiteral", value: X2(lt()) };
  }, vr = function() {
    return { type: "NumberLiteral", value: parseFloat(lt()) };
  }, ur = function() {
    return { type: "NumberLiteral", value: parseFloat(lt()) };
  }, E = function() {
    const b = lt();
    if (/\.\./.test(b) || /\.$/.test(b))
      throw new Error("Unexpected token: .");
    return K2(b);
  }, re = function() {
    return { type: "Identifier", name: lt() };
  }, _ = 0, j = 0, Pe = [{ line: 1, column: 1 }], He = 0, Ot = [], H = 0, Pt;
  if ("startRule" in r) {
    if (!(r.startRule in o))
      throw new Error(`Can't start parsing from rule "` + r.startRule + '".');
    i = o[r.startRule];
  }
  function lt() {
    return t.substring(j, _);
  }
  function Ye(b, D) {
    return { type: "literal", text: b, ignoreCase: D };
  }
  function Ke(b, D, Z) {
    return { type: "class", parts: b, inverted: D, ignoreCase: Z };
  }
  function qt() {
    return { type: "any" };
  }
  function kr() {
    return { type: "end" };
  }
  function Qr(b) {
    return { type: "other", description: b };
  }
  function fn(b) {
    var D = Pe[b], Z;
    if (D)
      return D;
    for (Z = b - 1; !Pe[Z]; )
      Z--;
    for (D = Pe[Z], D = {
      line: D.line,
      column: D.column
    }; Z < b; )
      t.charCodeAt(Z) === 10 ? (D.line++, D.column = 1) : D.column++, Z++;
    return Pe[b] = D, D;
  }
  function tn(b, D, Z) {
    var L = fn(b), ke = fn(D), be = {
      source: n,
      start: {
        offset: b,
        line: L.line,
        column: L.column
      },
      end: {
        offset: D,
        line: ke.line,
        column: ke.column
      }
    };
    return be;
  }
  function je(b) {
    _ < He || (_ > He && (He = _, Ot = []), Ot.push(b));
  }
  function yn(b, D, Z) {
    return new Yi(
      Yi.buildMessage(b, D),
      b,
      D,
      Z
    );
  }
  function rn() {
    var b, D;
    return b = _, Yt(), D = A(), D !== e ? (Yt(), j = b, b = ye(D)) : (_ = b, b = e), b;
  }
  function wn() {
    var b, D, Z;
    for (b = _, D = [], Z = v(); Z !== e; )
      D.push(Z), Z = v();
    return j = b, D = et(D), b = D, b;
  }
  function v() {
    var b, D, Z, L, ke;
    if (b = _, t.substr(_, 2) === s ? (D = s, _ += 2) : (D = e, H === 0 && je(Ee)), D !== e ? (Z = Yt(), L = A(), L !== e ? (Yt(), t.charCodeAt(_) === 125 ? (ke = a, _++) : (ke = e, H === 0 && je(it)), ke !== e ? (j = b, b = Le(L)) : (_ = b, b = e)) : (_ = b, b = e)) : (_ = b, b = e), b === e && (b = _, t.substr(_, 3) === l ? (D = l, _ += 3) : (D = e, H === 0 && je(we)), D !== e && (j = b, D = or()), b = D, b === e && (b = _, D = _, H++, t.charCodeAt(_) === 92 ? (Z = u, _++) : (Z = e, H === 0 && je(Se)), Z === e && (t.substr(_, 2) === s ? (Z = s, _ += 2) : (Z = e, H === 0 && je(Ee))), H--, Z === e ? D = void 0 : (_ = D, D = e), D !== e ? (t.length > _ ? (Z = t.charAt(_), _++) : (Z = e, H === 0 && je(he)), Z !== e ? (j = b, b = Oe()) : (_ = b, b = e)) : (_ = b, b = e), b === e))) {
      if (b = _, t.substr(_, 2) === s ? (D = s, _ += 2) : (D = e, H === 0 && je(Ee)), D !== e) {
        if (Z = [], _e.test(t.charAt(_)) ? (L = t.charAt(_), _++) : (L = e, H === 0 && je(x)), L !== e)
          for (; L !== e; )
            Z.push(L), _e.test(t.charAt(_)) ? (L = t.charAt(_), _++) : (L = e, H === 0 && je(x));
        else
          Z = e;
        Z !== e ? (t.charCodeAt(_) === 125 ? (L = a, _++) : (L = e, H === 0 && je(it)), L !== e ? (j = b, b = kt()) : (_ = b, b = e)) : (_ = b, b = e);
      } else
        _ = b, b = e;
      b === e && (b = _, t.substr(_, 2) === s ? (D = s, _ += 2) : (D = e, H === 0 && je(Ee)), D !== e && (j = b, D = Tt()), b = D, b === e && (b = _, t.charCodeAt(_) === 92 ? (D = u, _++) : (D = e, H === 0 && je(Se)), D !== e ? (t.substr(_, 2) === s ? (Z = s, _ += 2) : (Z = e, H === 0 && je(Ee)), Z !== e ? (j = b, b = Mt(Z)) : (_ = b, b = e)) : (_ = b, b = e), b === e && (b = _, t.charCodeAt(_) === 92 ? (D = u, _++) : (D = e, H === 0 && je(Se)), D !== e ? (t.length > _ ? (Z = t.charAt(_), _++) : (Z = e, H === 0 && je(he)), Z !== e ? (j = b, b = hr(Z)) : (_ = b, b = e)) : (_ = b, b = e), b === e && (b = _, t.charCodeAt(_) === 92 ? (D = u, _++) : (D = e, H === 0 && je(Se)), D !== e && (j = b, D = Ne()), b = D))));
    }
    return b;
  }
  function A() {
    var b, D, Z, L, ke, be, Rt, Ht, Yr, Nr, Xr;
    return b = _, D = V(), D !== e ? (Z = _, L = Yt(), t.charCodeAt(_) === 63 ? (ke = c, _++) : (ke = e, H === 0 && je(de)), ke !== e ? (be = Yt(), Rt = A(), Rt !== e ? (Ht = Yt(), t.charCodeAt(_) === 58 ? (Yr = f, _++) : (Yr = e, H === 0 && je(se)), Yr !== e ? (Nr = Yt(), Xr = A(), Xr !== e ? (L = [L, ke, be, Rt, Ht, Yr, Nr, Xr], Z = L) : (_ = Z, Z = e)) : (_ = Z, Z = e)) : (_ = Z, Z = e)) : (_ = Z, Z = e), Z === e && (Z = null), j = b, b = jt(D, Z)) : (_ = b, b = e), b;
  }
  function V() {
    var b, D, Z, L, ke, be, Rt;
    return b = _, D = ie(), D !== e ? (Z = _, L = Yt(), t.substr(_, 2) === d ? (ke = d, _ += 2) : (ke = e, H === 0 && je(De)), ke !== e ? (be = Yt(), Rt = A(), Rt !== e ? (L = [L, ke, be, Rt], Z = L) : (_ = Z, Z = e)) : (_ = Z, Z = e), Z === e && (Z = null), j = b, b = lr(D, Z)) : (_ = b, b = e), b;
  }
  function ie() {
    var b, D, Z, L, ke, be, Rt, Ht;
    if (b = _, D = W(), D !== e) {
      for (Z = [], L = _, ke = Yt(), t.substr(_, 2) === g ? (be = g, _ += 2) : (be = e, H === 0 && je(tt)), be !== e ? (Rt = Yt(), Ht = W(), Ht !== e ? (ke = [ke, be, Rt, Ht], L = ke) : (_ = L, L = e)) : (_ = L, L = e); L !== e; )
        Z.push(L), L = _, ke = Yt(), t.substr(_, 2) === g ? (be = g, _ += 2) : (be = e, H === 0 && je(tt)), be !== e ? (Rt = Yt(), Ht = W(), Ht !== e ? (ke = [ke, be, Rt, Ht], L = ke) : (_ = L, L = e)) : (_ = L, L = e);
      j = b, b = rr(D, Z);
    } else
      _ = b, b = e;
    return b;
  }
  function W() {
    var b, D, Z, L, ke, be, Rt, Ht;
    if (b = _, D = $e(), D !== e) {
      for (Z = [], L = _, ke = Yt(), t.substr(_, 2) === m ? (be = m, _ += 2) : (be = e, H === 0 && je(xe)), be !== e ? (Rt = Yt(), Ht = $e(), Ht !== e ? (ke = [ke, be, Rt, Ht], L = ke) : (_ = L, L = e)) : (_ = L, L = e); L !== e; )
        Z.push(L), L = _, ke = Yt(), t.substr(_, 2) === m ? (be = m, _ += 2) : (be = e, H === 0 && je(xe)), be !== e ? (Rt = Yt(), Ht = $e(), Ht !== e ? (ke = [ke, be, Rt, Ht], L = ke) : (_ = L, L = e)) : (_ = L, L = e);
      j = b, b = xt(D, Z);
    } else
      _ = b, b = e;
    return b;
  }
  function $e() {
    var b, D, Z, L, ke, be, Rt, Ht;
    if (b = _, D = Ve(), D !== e) {
      for (Z = [], L = _, ke = Yt(), t.substr(_, 2) === h ? (be = h, _ += 2) : (be = e, H === 0 && je(ne)), be === e && (t.substr(_, 2) === y ? (be = y, _ += 2) : (be = e, H === 0 && je(Ze))), be !== e ? (Rt = Yt(), Ht = Ve(), Ht !== e ? (ke = [ke, be, Rt, Ht], L = ke) : (_ = L, L = e)) : (_ = L, L = e); L !== e; )
        Z.push(L), L = _, ke = Yt(), t.substr(_, 2) === h ? (be = h, _ += 2) : (be = e, H === 0 && je(ne)), be === e && (t.substr(_, 2) === y ? (be = y, _ += 2) : (be = e, H === 0 && je(Ze))), be !== e ? (Rt = Yt(), Ht = Ve(), Ht !== e ? (ke = [ke, be, Rt, Ht], L = ke) : (_ = L, L = e)) : (_ = L, L = e);
      j = b, b = yr(D, Z);
    } else
      _ = b, b = e;
    return b;
  }
  function Ve() {
    var b, D, Z, L, ke, be, Rt, Ht;
    if (b = _, D = Zt(), D !== e) {
      for (Z = [], L = _, ke = Yt(), t.substr(_, 2) === w ? (be = w, _ += 2) : (be = e, H === 0 && je(Re)), be === e && (t.charCodeAt(_) === 62 ? (be = F, _++) : (be = e, H === 0 && je(ut)), be === e && (t.substr(_, 2) === R ? (be = R, _ += 2) : (be = e, H === 0 && je(ct)), be === e && (t.charCodeAt(_) === 60 ? (be = B, _++) : (be = e, H === 0 && je(ft))))), be !== e ? (Rt = Yt(), Ht = Zt(), Ht !== e ? (ke = [ke, be, Rt, Ht], L = ke) : (_ = L, L = e)) : (_ = L, L = e); L !== e; )
        Z.push(L), L = _, ke = Yt(), t.substr(_, 2) === w ? (be = w, _ += 2) : (be = e, H === 0 && je(Re)), be === e && (t.charCodeAt(_) === 62 ? (be = F, _++) : (be = e, H === 0 && je(ut)), be === e && (t.substr(_, 2) === R ? (be = R, _ += 2) : (be = e, H === 0 && je(ct)), be === e && (t.charCodeAt(_) === 60 ? (be = B, _++) : (be = e, H === 0 && je(ft))))), be !== e ? (Rt = Yt(), Ht = Zt(), Ht !== e ? (ke = [ke, be, Rt, Ht], L = ke) : (_ = L, L = e)) : (_ = L, L = e);
      j = b, b = Sr(D, Z);
    } else
      _ = b, b = e;
    return b;
  }
  function Zt() {
    var b, D, Z, L, ke, be, Rt, Ht;
    if (b = _, D = Ft(), D !== e) {
      for (Z = [], L = _, ke = Yt(), t.charCodeAt(_) === 43 ? (be = Q, _++) : (be = e, H === 0 && je(Et)), be === e && (t.charCodeAt(_) === 45 ? (be = ae, _++) : (be = e, H === 0 && je(st))), be !== e ? (Rt = Yt(), Ht = Ft(), Ht !== e ? (ke = [ke, be, Rt, Ht], L = ke) : (_ = L, L = e)) : (_ = L, L = e); L !== e; )
        Z.push(L), L = _, ke = Yt(), t.charCodeAt(_) === 43 ? (be = Q, _++) : (be = e, H === 0 && je(Et)), be === e && (t.charCodeAt(_) === 45 ? (be = ae, _++) : (be = e, H === 0 && je(st))), be !== e ? (Rt = Yt(), Ht = Ft(), Ht !== e ? (ke = [ke, be, Rt, Ht], L = ke) : (_ = L, L = e)) : (_ = L, L = e);
      j = b, b = Bt(D, Z);
    } else
      _ = b, b = e;
    return b;
  }
  function Ft() {
    var b, D, Z, L, ke, be, Rt, Ht;
    if (b = _, D = Be(), D !== e) {
      for (Z = [], L = _, ke = Yt(), t.charCodeAt(_) === 47 ? (be = T, _++) : (be = e, H === 0 && je(Lt)), be === e && (t.charCodeAt(_) === 42 ? (be = Y, _++) : (be = e, H === 0 && je(_t)), be === e && (t.charCodeAt(_) === 37 ? (be = le, _++) : (be = e, H === 0 && je(pe)))), be !== e ? (Rt = Yt(), Ht = Be(), Ht !== e ? (ke = [ke, be, Rt, Ht], L = ke) : (_ = L, L = e)) : (_ = L, L = e); L !== e; )
        Z.push(L), L = _, ke = Yt(), t.charCodeAt(_) === 47 ? (be = T, _++) : (be = e, H === 0 && je(Lt)), be === e && (t.charCodeAt(_) === 42 ? (be = Y, _++) : (be = e, H === 0 && je(_t)), be === e && (t.charCodeAt(_) === 37 ? (be = le, _++) : (be = e, H === 0 && je(pe)))), be !== e ? (Rt = Yt(), Ht = Be(), Ht !== e ? (ke = [ke, be, Rt, Ht], L = ke) : (_ = L, L = e)) : (_ = L, L = e);
      j = b, b = jr(D, Z);
    } else
      _ = b, b = e;
    return b;
  }
  function Be() {
    var b, D, Z, L;
    return b = _, D = _, H++, t.charCodeAt(_) === 45 ? (Z = ae, _++) : (Z = e, H === 0 && je(st)), H--, Z !== e ? (_ = D, D = void 0) : D = e, D !== e ? (Z = oo(), Z !== e ? (j = b, b = J(Z)) : (_ = b, b = e)) : (_ = b, b = e), b === e && (b = _, D = _, H++, t.charCodeAt(_) === 45 ? (Z = ae, _++) : (Z = e, H === 0 && je(st)), H--, Z !== e ? (_ = D, D = void 0) : D = e, D !== e ? (Z = Vn(), Z !== e ? (j = b, b = pt(Z)) : (_ = b, b = e)) : (_ = b, b = e), b === e && (b = _, t.charCodeAt(_) === 33 ? (D = C, _++) : (D = e, H === 0 && je(ge)), D === e && (t.charCodeAt(_) === 43 ? (D = Q, _++) : (D = e, H === 0 && je(Et)), D === e && (t.charCodeAt(_) === 45 ? (D = ae, _++) : (D = e, H === 0 && je(st)))), D !== e ? (Z = Yt(), L = tr(), L === e && (L = Vt()), L !== e ? (j = b, b = Kt(D, L)) : (_ = b, b = e)) : (_ = b, b = e), b === e && (b = Vt()))), b;
  }
  function tr() {
    var b, D;
    return b = _, t.charCodeAt(_) === 43 ? (D = Q, _++) : (D = e, H === 0 && je(Et)), D === e && (t.charCodeAt(_) === 45 ? (D = ae, _++) : (D = e, H === 0 && je(st))), D !== e && (j = b, D = At()), b = D, b;
  }
  function Vt() {
    var b, D, Z, L, ke, be, Rt, Ht, Yr, Nr, Xr, ko, Qn, _o, Pn;
    if (b = _, D = Fr(), D !== e) {
      for (Z = [], L = _, ke = Yt(), t.charCodeAt(_) === 46 ? (be = N, _++) : (be = e, H === 0 && je(gt)), be !== e ? (Rt = Yt(), Ht = Zn(), Ht !== e ? (Yr = Yt(), Nr = _, t.charCodeAt(_) === 40 ? (Xr = z, _++) : (Xr = e, H === 0 && je(Ce)), Xr !== e ? (ko = Yt(), Qn = Vr(), Qn !== e ? (_o = Yt(), t.charCodeAt(_) === 41 ? (Pn = O, _++) : (Pn = e, H === 0 && je(M)), Pn !== e ? (Xr = [Xr, ko, Qn, _o, Pn], Nr = Xr) : (_ = Nr, Nr = e)) : (_ = Nr, Nr = e)) : (_ = Nr, Nr = e), Nr === e && (Nr = null), ke = [ke, be, Rt, Ht, Yr, Nr], L = ke) : (_ = L, L = e)) : (_ = L, L = e); L !== e; )
        Z.push(L), L = _, ke = Yt(), t.charCodeAt(_) === 46 ? (be = N, _++) : (be = e, H === 0 && je(gt)), be !== e ? (Rt = Yt(), Ht = Zn(), Ht !== e ? (Yr = Yt(), Nr = _, t.charCodeAt(_) === 40 ? (Xr = z, _++) : (Xr = e, H === 0 && je(Ce)), Xr !== e ? (ko = Yt(), Qn = Vr(), Qn !== e ? (_o = Yt(), t.charCodeAt(_) === 41 ? (Pn = O, _++) : (Pn = e, H === 0 && je(M)), Pn !== e ? (Xr = [Xr, ko, Qn, _o, Pn], Nr = Xr) : (_ = Nr, Nr = e)) : (_ = Nr, Nr = e)) : (_ = Nr, Nr = e), Nr === e && (Nr = null), ke = [ke, be, Rt, Ht, Yr, Nr], L = ke) : (_ = L, L = e)) : (_ = L, L = e);
      j = b, b = Cr(D, Z);
    } else
      _ = b, b = e;
    return b;
  }
  function Fr() {
    var b, D, Z, L, ke;
    return b = _, D = Zn(), D !== e ? (Yt(), t.charCodeAt(_) === 40 ? (Z = z, _++) : (Z = e, H === 0 && je(Ce)), Z !== e ? (Yt(), L = Vr(), L !== e ? (Yt(), t.charCodeAt(_) === 41 ? (ke = O, _++) : (ke = e, H === 0 && je(M)), ke !== e ? (j = b, b = Dr(D, L)) : (_ = b, b = e)) : (_ = b, b = e)) : (_ = b, b = e)) : (_ = b, b = e), b === e && (b = Kr()), b;
  }
  function Vr() {
    var b, D, Z, L, ke, be;
    if (b = _, D = A(), D !== e) {
      for (Z = [], L = _, Yt(), t.charCodeAt(_) === 44 ? (ke = oe, _++) : (ke = e, H === 0 && je(Ct)), ke !== e ? (Yt(), be = A(), be !== e ? L = be : (_ = L, L = e)) : (_ = L, L = e); L !== e; )
        Z.push(L), L = _, Yt(), t.charCodeAt(_) === 44 ? (ke = oe, _++) : (ke = e, H === 0 && je(Ct)), ke !== e ? (Yt(), be = A(), be !== e ? L = be : (_ = L, L = e)) : (_ = L, L = e);
      j = b, b = wr(D, Z);
    } else
      _ = b, b = e;
    return b === e && (b = Yt()), b;
  }
  function Kr() {
    var b, D, Z, L;
    return b = Xn(), b === e && (b = nn(), b === e && (b = oo(), b === e && (b = Vn(), b === e && (b = _, t.charCodeAt(_) === 40 ? (D = z, _++) : (D = e, H === 0 && je(Ce)), D !== e ? (Yt(), Z = A(), Z !== e ? (Yt(), t.charCodeAt(_) === 41 ? (L = O, _++) : (L = e, H === 0 && je(M)), L !== e ? (j = b, b = Mr(Z)) : (_ = b, b = e)) : (_ = b, b = e)) : (_ = b, b = e))))), b;
  }
  function nn() {
    var b, D, Z, L;
    return H++, b = _, t.charCodeAt(_) === 39 ? (D = fe, _++) : (D = e, H === 0 && je(Dt)), D !== e ? (Z = Cn(), t.charCodeAt(_) === 39 ? (L = fe, _++) : (L = e, H === 0 && je(Dt)), L !== e ? (j = b, b = qr(Z)) : (_ = b, b = e)) : (_ = b, b = e), H--, b === e && (D = e, H === 0 && je(ht)), b;
  }
  function Cn() {
    var b, D, Z;
    for (b = _, D = [], Z = vn(); Z !== e; )
      D.push(Z), Z = vn();
    return j = b, D = ir(D), b = D, b;
  }
  function vn() {
    var b, D, Z, L, ke;
    if (b = _, t.substr(_, 2) === s ? (D = s, _ += 2) : (D = e, H === 0 && je(Ee)), D !== e ? (Z = Yt(), L = A(), L !== e ? (Yt(), t.charCodeAt(_) === 125 ? (ke = a, _++) : (ke = e, H === 0 && je(it)), ke !== e ? (j = b, b = ot(L)) : (_ = b, b = e)) : (_ = b, b = e)) : (_ = b, b = e), b === e && (b = _, t.substr(_, 3) === l ? (D = l, _ += 3) : (D = e, H === 0 && je(we)), D !== e && (j = b, D = St()), b = D, b === e && (b = _, D = _, H++, t.charCodeAt(_) === 92 ? (Z = u, _++) : (Z = e, H === 0 && je(Se)), Z === e && (t.charCodeAt(_) === 39 ? (Z = fe, _++) : (Z = e, H === 0 && je(Dt)), Z === e && (t.substr(_, 2) === s ? (Z = s, _ += 2) : (Z = e, H === 0 && je(Ee)))), H--, Z === e ? D = void 0 : (_ = D, D = e), D !== e ? (t.length > _ ? (Z = t.charAt(_), _++) : (Z = e, H === 0 && je(he)), Z !== e ? (j = b, b = $t()) : (_ = b, b = e)) : (_ = b, b = e), b === e))) {
      if (b = _, t.substr(_, 2) === s ? (D = s, _ += 2) : (D = e, H === 0 && je(Ee)), D !== e) {
        if (Z = [], Te.test(t.charAt(_)) ? (L = t.charAt(_), _++) : (L = e, H === 0 && je(Nt)), L !== e)
          for (; L !== e; )
            Z.push(L), Te.test(t.charAt(_)) ? (L = t.charAt(_), _++) : (L = e, H === 0 && je(Nt));
        else
          Z = e;
        Z !== e ? (t.charCodeAt(_) === 125 ? (L = a, _++) : (L = e, H === 0 && je(it)), L !== e ? (j = b, b = Qt()) : (_ = b, b = e)) : (_ = b, b = e);
      } else
        _ = b, b = e;
      b === e && (b = _, t.substr(_, 2) === s ? (D = s, _ += 2) : (D = e, H === 0 && je(Ee)), D !== e && (j = b, D = pr()), b = D, b === e && (b = _, t.charCodeAt(_) === 92 ? (D = u, _++) : (D = e, H === 0 && je(Se)), D !== e ? (t.substr(_, 2) === s ? (Z = s, _ += 2) : (Z = e, H === 0 && je(Ee)), Z !== e ? (j = b, b = dt(Z)) : (_ = b, b = e)) : (_ = b, b = e), b === e && (b = _, t.charCodeAt(_) === 92 ? (D = u, _++) : (D = e, H === 0 && je(Se)), D !== e ? (t.length > _ ? (Z = t.charAt(_), _++) : (Z = e, H === 0 && je(he)), Z !== e ? (j = b, b = te(Z)) : (_ = b, b = e)) : (_ = b, b = e), b === e && (b = _, t.charCodeAt(_) === 92 ? (D = u, _++) : (D = e, H === 0 && je(Se)), D !== e && (j = b, D = vt()), b = D))));
    }
    return b;
  }
  function Vn() {
    var b, D, Z;
    if (H++, b = _, t.charCodeAt(_) === 45 ? _++ : H === 0 && je(st), D = [], ee.test(t.charAt(_)) ? (Z = t.charAt(_), _++) : (Z = e, H === 0 && je(X)), Z !== e)
      for (; Z !== e; )
        D.push(Z), ee.test(t.charAt(_)) ? (Z = t.charAt(_), _++) : (Z = e, H === 0 && je(X));
    else
      D = e;
    return D !== e ? (j = b, b = sr()) : (_ = b, b = e), H--, b === e && H === 0 && je(nt), b;
  }
  function oo() {
    var b, D, Z, L, ke, be, Rt, Ht, Yr;
    for (H++, b = _, t.charCodeAt(_) === 45 ? _++ : H === 0 && je(st), D = [], ee.test(t.charAt(_)) ? (Z = t.charAt(_), _++) : (Z = e, H === 0 && je(X)); Z !== e; )
      D.push(Z), ee.test(t.charAt(_)) ? (Z = t.charAt(_), _++) : (Z = e, H === 0 && je(X));
    if (t.charCodeAt(_) === 46 ? (Z = N, _++) : (Z = e, H === 0 && je(gt)), Z !== e) {
      if (L = [], ee.test(t.charAt(_)) ? (ke = t.charAt(_), _++) : (ke = e, H === 0 && je(X)), ke !== e)
        for (; ke !== e; )
          L.push(ke), ee.test(t.charAt(_)) ? (ke = t.charAt(_), _++) : (ke = e, H === 0 && je(X));
      else
        L = e;
      if (L !== e) {
        if (ke = _, t.charCodeAt(_) === 101 ? (be = ce, _++) : (be = e, H === 0 && je(zt)), be === e && (t.charCodeAt(_) === 69 ? (be = Ae, _++) : (be = e, H === 0 && je(er))), be !== e) {
          if (t.charCodeAt(_) === 43 ? (Rt = Q, _++) : (Rt = e, H === 0 && je(Et)), Rt === e && (t.charCodeAt(_) === 45 ? (Rt = ae, _++) : (Rt = e, H === 0 && je(st))), Rt === e && (Rt = null), Ht = [], ee.test(t.charAt(_)) ? (Yr = t.charAt(_), _++) : (Yr = e, H === 0 && je(X)), Yr !== e)
            for (; Yr !== e; )
              Ht.push(Yr), ee.test(t.charAt(_)) ? (Yr = t.charAt(_), _++) : (Yr = e, H === 0 && je(X));
          else
            Ht = e;
          Ht !== e ? (be = [be, Rt, Ht], ke = be) : (_ = ke, ke = e);
        } else
          _ = ke, ke = e;
        ke === e && (ke = null), j = b, b = vr();
      } else
        _ = b, b = e;
    } else
      _ = b, b = e;
    if (b === e) {
      if (b = _, t.charCodeAt(_) === 45 ? _++ : H === 0 && je(st), D = [], ee.test(t.charAt(_)) ? (Z = t.charAt(_), _++) : (Z = e, H === 0 && je(X)), Z !== e)
        for (; Z !== e; )
          D.push(Z), ee.test(t.charAt(_)) ? (Z = t.charAt(_), _++) : (Z = e, H === 0 && je(X));
      else
        D = e;
      if (D !== e)
        if (t.charCodeAt(_) === 101 ? (Z = ce, _++) : (Z = e, H === 0 && je(zt)), Z === e && (t.charCodeAt(_) === 69 ? (Z = Ae, _++) : (Z = e, H === 0 && je(er))), Z !== e) {
          if (t.charCodeAt(_) === 43 ? (L = Q, _++) : (L = e, H === 0 && je(Et)), L === e && (t.charCodeAt(_) === 45 ? (L = ae, _++) : (L = e, H === 0 && je(st))), L === e && (L = null), ke = [], ee.test(t.charAt(_)) ? (be = t.charAt(_), _++) : (be = e, H === 0 && je(X)), be !== e)
            for (; be !== e; )
              ke.push(be), ee.test(t.charAt(_)) ? (be = t.charAt(_), _++) : (be = e, H === 0 && je(X));
          else
            ke = e;
          ke !== e ? (j = b, b = ur()) : (_ = b, b = e);
        } else
          _ = b, b = e;
      else
        _ = b, b = e;
    }
    return H--, b === e && H === 0 && je(It), b;
  }
  function Xn() {
    var b, D, Z, L, ke, be, Rt, Ht, Yr, Nr, Xr;
    if (b = _, Me.test(t.charAt(_)) ? (D = t.charAt(_), _++) : (D = e, H === 0 && je(Xt)), D !== e) {
      if (Z = [], L = [], Xe.test(t.charAt(_)) ? (ke = t.charAt(_), _++) : (ke = e, H === 0 && je(me)), ke !== e)
        for (; ke !== e; )
          L.push(ke), Xe.test(t.charAt(_)) ? (ke = t.charAt(_), _++) : (ke = e, H === 0 && je(me));
      else
        L = e;
      for (L === e && (L = _, t.charCodeAt(_) === 46 ? (ke = N, _++) : (ke = e, H === 0 && je(gt)), ke !== e ? (be = _, H++, Rt = _, Ht = Yt(), Yr = Zn(), Yr !== e ? (Nr = Yt(), t.charCodeAt(_) === 40 ? (Xr = z, _++) : (Xr = e, H === 0 && je(Ce)), Xr !== e ? (Ht = [Ht, Yr, Nr, Xr], Rt = Ht) : (_ = Rt, Rt = e)) : (_ = Rt, Rt = e), H--, Rt === e ? be = void 0 : (_ = be, be = e), be !== e ? (ke = [ke, be], L = ke) : (_ = L, L = e)) : (_ = L, L = e)); L !== e; ) {
        if (Z.push(L), L = [], Xe.test(t.charAt(_)) ? (ke = t.charAt(_), _++) : (ke = e, H === 0 && je(me)), ke !== e)
          for (; ke !== e; )
            L.push(ke), Xe.test(t.charAt(_)) ? (ke = t.charAt(_), _++) : (ke = e, H === 0 && je(me));
        else
          L = e;
        L === e && (L = _, t.charCodeAt(_) === 46 ? (ke = N, _++) : (ke = e, H === 0 && je(gt)), ke !== e ? (be = _, H++, Rt = _, Ht = Yt(), Yr = Zn(), Yr !== e ? (Nr = Yt(), t.charCodeAt(_) === 40 ? (Xr = z, _++) : (Xr = e, H === 0 && je(Ce)), Xr !== e ? (Ht = [Ht, Yr, Nr, Xr], Rt = Ht) : (_ = Rt, Rt = e)) : (_ = Rt, Rt = e), H--, Rt === e ? be = void 0 : (_ = be, be = e), be !== e ? (ke = [ke, be], L = ke) : (_ = L, L = e)) : (_ = L, L = e));
      }
      j = b, b = E();
    } else
      _ = b, b = e;
    return b;
  }
  function Zn() {
    var b, D, Z, L;
    if (b = _, Me.test(t.charAt(_)) ? (D = t.charAt(_), _++) : (D = e, H === 0 && je(Xt)), D !== e) {
      for (Z = [], Xe.test(t.charAt(_)) ? (L = t.charAt(_), _++) : (L = e, H === 0 && je(me)); L !== e; )
        Z.push(L), Xe.test(t.charAt(_)) ? (L = t.charAt(_), _++) : (L = e, H === 0 && je(me));
      j = b, b = re();
    } else
      _ = b, b = e;
    return b;
  }
  function Yt() {
    var b, D;
    for (H++, b = [], Qe.test(t.charAt(_)) ? (D = t.charAt(_), _++) : (D = e, H === 0 && je(mt)); D !== e; )
      b.push(D), Qe.test(t.charAt(_)) ? (D = t.charAt(_), _++) : (D = e, H === 0 && je(mt));
    return H--, D = e, H === 0 && je(Ue), b;
  }
  if (Pt = i(), Pt !== e && _ === t.length)
    return Pt;
  throw Pt !== e && _ < t.length && je(kr()), yn(
    Ot,
    He < t.length ? t.charAt(He) : null,
    He < t.length ? tn(He, He + 1) : tn(He, He)
  );
}
const Q2 = 128, Bi = /* @__PURE__ */ new Map();
let Yf;
function m_(t) {
  return Bi.get(t);
}
function b_(t, r) {
  t !== Yf && (Bi.delete(t), Bi.size >= Q2 && Bi.delete(Bi.keys().next().value), Bi.set(t, r), Yf = t);
}
const Kf = /* @__PURE__ */ new Set([
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
function x2(t) {
  if (!(typeof t.name == "string" && t.name))
    throw new Error("Incorrect function name");
  if (!(typeof t.body == "string" && t.body))
    throw new Error("Incorrect function body");
  if (!(t.return_type && Kf.has(t.return_type)))
    throw new Error("Incorrect function return_type");
  if (!Array.isArray(t.arguments))
    throw new Error("Incorrect function arguments");
  const r = /* @__PURE__ */ new Set();
  t.arguments.forEach((e) => {
    if (!(typeof e.name == "string" && e.name))
      throw new Error("Incorrect argument name");
    if (!(e.type && Kf.has(e.type)))
      throw new Error("Incorrect argument type");
    if (r.has(e.name))
      throw new Error("Duplicate argument name");
    r.add(e.name);
  });
}
function $2(t) {
  let r;
  return {
    name: t.name,
    args: t.arguments.map((e) => ({
      type: e.type
    })),
    cb(e, ...n) {
      r || (r = m_(t.body) || g_(t.body, {
        startRule: "JsonStringContents"
      }), b_(t.body, r));
      const o = /* @__PURE__ */ new Map();
      n.forEach((a, l) => {
        if (a.type === "function")
          throw new Error("Incorrect argument type: function");
        const u = Ts(t.arguments[l].name, a.type, a.value);
        o.set(u.getName(), u);
      });
      const i = Ma(o, e.customFunctions, e.store, r, {
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
function e3(t, r) {
  if (!t)
    return r || void 0;
  if (!r)
    return t || void 0;
  const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
  for (const [o, i] of r) {
    for (const s of i) {
      const a = _f(o, s);
      n.add(a);
    }
    e.set(o, i);
  }
  for (const [o, i] of t)
    for (const s of i) {
      const a = _f(o, s);
      if (!n.has(a)) {
        n.add(a);
        const l = e.get(o) || [];
        l.push(s), e.set(o, l);
      }
    }
  return e;
}
function t3(t) {
  if (!t)
    return K(new Error("Missing object"));
  const r = t.card, e = t.templates || {};
  if (!r)
    return K(new Error("Missing card"));
  if (!r.states || !r.states.length)
    return K(new Error("Missing states"));
  for (const n in e)
    if (e.hasOwnProperty(n) && n in s_)
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
function r3(t) {
  return [...new Set(t)];
}
class y_ {
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
      a = Ma(r, e, o, this.ast, {
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
          result: Xd(c),
          usedVars: a.usedVars
        };
      if (u.type === "boolean")
        return {
          result: !!c,
          usedVars: a.usedVars
        };
      if (u.type === "color") {
        const f = bo(String(c));
        if (f)
          return {
            result: Ti(f),
            usedVars: a.usedVars
          };
        n(K(new Error("Expression execution error")));
      }
      if (u.type === "integer")
        return c > c1 || c < f1 ? (n(K(new Error("Expression result is out of 32-bit int range"))), {
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
function n3(t) {
  return t.indexOf("@{") > -1 || t.indexOf("\\") > -1;
}
function da(t, r, e, n) {
  if (t)
    if (typeof t == "string") {
      if (n3(t)) {
        r.hasExpression = !0;
        try {
          const o = m_(t) || g_(t, {
            startRule: "JsonStringContents"
          });
          b_(t, o);
          const i = g1(o);
          return r.vars.push(...i), new y_(o, t);
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
        return t.map((o) => da(o, r, e, n - 1));
      if (typeof t == "object" && n > 0) {
        const o = {};
        for (const i in t)
          o[i] = da(t[i], r, e, n - 1);
        return o;
      }
    }
  return t;
}
function _a(t, r) {
  if (t) {
    if (t instanceof y_)
      return t.apply(r);
    if (Array.isArray(t)) {
      let e;
      return {
        result: t.map((o) => {
          const i = _a(o, r);
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
        const i = _a(t[o], r);
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
function Xf(t, r, e, n, o = 1 / 0) {
  const i = {
    vars: [],
    hasExpression: !1
  }, s = da(t, i, r, o);
  return {
    vars: r3(i.vars),
    hasExpression: i.hasExpression,
    applyVars(l, u, c) {
      return _a(s, {
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
class w_ {
  constructor() {
    Er(this, "_vars", /* @__PURE__ */ new Map());
    Er(this, "_lastAddedVariable", Oo(""));
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
function o4() {
  return new w_();
}
const o3 = ["start", "stop", "pause", "resume", "cancel", "reset"], i3 = new Set(o3);
class s3 {
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
    if (!r || !e || !this.timers.has(r) || !i3.has(e)) {
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
function l3(t, r, e, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number" && i !== void 0) {
    e(K(new Error("Incorrect array_insert_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Pa(t, r, e, n, (a) => {
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
      const u = l.slice(), c = Cl(s);
      typeof i == "number" ? u.splice(i, 0, c) : u.push(c), a.setValue(u);
    }
  });
}
function a3(t, r, e, n) {
  const { variable_name: o, index: i } = n;
  if (typeof i != "number") {
    e(K(new Error("Incorrect array_remove_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Pa(t, r, e, n, (s) => {
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
function u3(t, r, e, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number") {
    e(K(new Error("Incorrect array_set_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Pa(t, r, e, n, (a) => {
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
      u[i] = Cl(s), a.setValue(u);
    }
  });
}
function Pa(t, r, e, n, o) {
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
function c3(t, r, e, n) {
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
    s ? c[i] = Cl(s) : delete c[i], a.setValue(c);
  } else
    e(K(new Error("Trying to set value into the non-dict"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function f3(t, r) {
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
function d3(t) {
  if (t === "normal" || t === "reverse" || t === "alternate" || t === "alternate_reverse")
    return t;
}
function _3(t, r, e, n) {
  var R, B, Q, ae;
  const o = Yn(t.duration, 0);
  if (!o || t.type !== "color_animator" && t.type !== "number_animator")
    return;
  const i = (R = t.start_value_typed ? t.start_value_typed.value : t.start_value) != null ? R : r.getValue(), s = t.end_value_typed ? t.end_value_typed.value : t.end_value;
  if (i === void 0 || s === void 0 || t.type === "color_animator" && (typeof i != "string" && i !== void 0 || typeof s != "string") || t.type === "number_animator" && (typeof i != "number" && i !== void 0 || typeof s != "number"))
    return;
  const a = t.type === "color_animator" && bo(i), l = t.type === "color_animator" && bo(s);
  if (t.type === "color_animator" && (!a || !l))
    return;
  const u = ln(t.start_delay, 0), c = Sa(t.interpolator || "linear"), f = d3(t.direction) || "normal", d = ((B = t.repeat_count) == null ? void 0 : B.type) === "infinity" ? 1 / 0 : ((Q = t.repeat_count) == null ? void 0 : Q.type) === "fixed" ? ln((ae = t.repeat_count) == null ? void 0 : ae.value, 1) : 1;
  let g = 0, m = performance.now();
  const h = d === 1 / 0 ? 1 / 0 : d * o + u;
  function y(T) {
    if (t.type === "color_animator") {
      if (!a || !l)
        throw new Error("Missing start/end value");
      return Ti({
        a: No(Xo(a.a, l.a, T), 0, 255),
        r: No(Xo(a.r, l.r, T), 0, 255),
        g: No(Xo(a.g, l.g, T), 0, 255),
        b: No(Xo(a.b, l.b, T), 0, 255)
      });
    }
    return Xo(i, s, T);
  }
  function w(T) {
    const Y = T - m;
    if (m = T, g += Y, g >= u) {
      let le = Math.floor((g - u) / o), C = (g - u - le * o) / o;
      le >= d && (le = d - 1, C = 1);
      let N;
      f === "normal" || f === "alternate" && le % 2 === 0 || f === "alternate_reverse" && le % 2 === 1 ? N = "normal" : N = "reverse", N === "reverse" && (C = 1 - C);
      const z = y(c(C));
      r.setValue(z);
    }
    g < h ? F = requestAnimationFrame(w) : (e(), n(t.end_actions));
  }
  let F = requestAnimationFrame(w);
  return {
    stop() {
      cancelAnimationFrame(F), n(t.cancel_actions), n(t.end_actions);
    }
  };
}
function h3(t) {
  let r = t;
  for (; r && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function p3(t) {
  let r = t;
  for (; r != null && r.parent && r.json.type !== "state" && !r.isRootState && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function il(t) {
  return !!(t && typeof t == "string");
}
const g3 = /* @__PURE__ */ new Set([
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "head",
  "options"
]);
function m3(t) {
  return t === void 0 || g3.has(t);
}
function b3(t) {
  return t === void 0 || Array.isArray(t) && t.every((r) => il(r.name) && il(r.value));
}
function y3(t) {
  var r, e, n;
  return il(t.container_id) && il((r = t.request) == null ? void 0 : r.url) && m3((e = t.request) == null ? void 0 : e.method) && b3((n = t.request) == null ? void 0 : n.headers);
}
function w3(t, r, e, n) {
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
    const f = c.split("/"), d = l === "array" ? u.slice() : { ...u };
    let g = d;
    for (let m = 0; m < f.length; ++m) {
      const h = f[m];
      if (!h) {
        e(K(new Error("Path is empty"), {
          additional: {
            name: o,
            type: l,
            path: i
          }
        }));
        return;
      }
      if (!g || typeof g != "object") {
        e(K(new Error(`Element with path '${f.slice(0, m).join("/")}' is not ${g === void 0 ? "found" : "a structure"}`), {
          additional: {
            name: o,
            type: l,
            path: i
          }
        }));
        return;
      }
      if (Array.isArray(g)) {
        const y = Number(h);
        if (Number.isNaN(y)) {
          e(K(new Error(`Unable to use '${h}' as array index`), {
            additional: {
              name: o,
              type: l,
              path: i
            }
          }));
          return;
        }
        if (m + 1 === f.length && (y < 0 || y > g.length)) {
          e(K(new Error(`Position '${y}' is out of array bounds`), {
            additional: {
              name: o,
              type: l,
              path: i
            }
          }));
          return;
        }
      }
      m + 1 < f.length && (g = g[h]);
    }
    g[f[f.length - 1]] = Cl(s), a.setValue(d);
  } else
    e(K(new Error("Action requires array or dictionary variable"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function Zf(t, { delay: r = 0, duration: e = 400, easing: n = Hd, x: o = 0, y: i = 0, opacity: s = 0 } = {}) {
  const a = getComputedStyle(t), l = +a.opacity, u = a.transform === "none" ? "" : a.transform, c = l * (1 - s), [f, d] = Ra(o), [g, m] = Ra(i);
  return {
    delay: r,
    duration: e,
    easing: n,
    css: (h, y) => `
			transform: ${u} translate(${(1 - h) * f}${d}, ${(1 - h) * g}${m});
			opacity: ${l - c * y}`
  };
}
const v3 = "appkit-outer", k3 = "appkit-root__clickable", E3 = "undefined", j3 = "appkit-tooltip", C3 = "appkit-tooltip_visible", A3 = "appkit-tooltip_modal", S3 = "appkit-tooltip__inner", V3 = "appkit-tooltip__overlay", I3 = "appkit-tooltip__substrate", Vo = {
  outer: v3,
  root__clickable: k3,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  root__selectable: E3,
  tooltip: j3,
  tooltip_visible: C3,
  tooltip_modal: A3,
  tooltip__inner: S3,
  tooltip__overlay: V3,
  tooltip__substrate: I3
}, v_ = 300, k_ = 0;
function ha(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || v_) + (Number(r.start_delay) || k_)
  ));
}
function sl(t, {
  animations: r,
  direction: e
}) {
  if (!r)
    return {};
  const n = _s(r), o = ha(n);
  return n.some((s) => s.name === "no_animation") ? {} : {
    duration: Ji() ? 0 : o,
    css: (s) => {
      const a = s * o, l = n.map((h) => {
        var Q, ae, T, Y, le, C, N, z, O, oe, fe, ce;
        const y = Number(h.start_delay) || k_, w = Number(h.duration) || v_, F = e === "in" ? Math.max(0, Math.min(1, (a - y) / w)) : Math.max(0, Math.min(1, (a - (o - w) + y) / w)), B = (Sa(h.interpolator || "ease_in_out") || kl)(F);
        if (h.name === "fade") {
          const Ae = e === "in" ? (Q = h.start_value) != null ? Q : 0 : (ae = h.end_value) != null ? ae : 0, _e = e === "in" ? (T = h.end_value) != null ? T : 1 : (Y = h.start_value) != null ? Y : 1;
          return {
            active: B > 0 && B < 1,
            opacity: (1 - B) * Ae + B * _e
          };
        } else if (h.name === "translate") {
          const Ae = -(e === "in" ? (le = h.start_value) != null ? le : 10 : (C = h.end_value) != null ? C : 10), _e = -(e === "in" ? (N = h.end_value) != null ? N : 0 : (z = h.start_value) != null ? z : 0);
          return {
            active: B > 0 && B < 1,
            translate: `translateY(${(1 - B) * Ae + B * _e}${e === "in" && h.start_value !== void 0 || e === "out" && h.end_value !== void 0 ? "%" : "px"})`
          };
        } else if (h.name === "scale") {
          const Ae = e === "in" ? (O = h.start_value) != null ? O : 0 : (oe = h.end_value) != null ? oe : 0, _e = e === "in" ? (fe = h.end_value) != null ? fe : 1 : (ce = h.start_value) != null ? ce : 1;
          return {
            active: B > 0 && B < 1,
            scale: `scale(${(1 - B) * Ae + B * _e})`
          };
        }
        return {};
      }), u = l.map((h) => h.opacity).filter((h) => h !== void 0).reduce((h, y) => h * y, 1), c = l.map((h) => h.translate).filter((h) => h !== void 0).join(" "), f = l.map((h) => h.scale).filter((h) => h !== void 0).join(" "), d = l.filter((h) => h.active).map((h) => h.scale).filter((h) => h !== void 0), g = d.length ? d[d.length - 1] : f;
      return `transform:${[c, g].filter(Boolean).join(" ") || "none"};opacity:${u}`;
    }
  };
}
const as = typeof window < "u" && "HTMLDialogElement" in window, { document: D3, window: F3 } = Ho;
function T3(t) {
  let r, e, n, o, i, s, a, l, u, c, f, d = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && Qf(t)
  ), g = (
    /*substrateComponentContext*/
    t[14] && xf(t)
  );
  return i = new no({
    props: {
      componentContext: (
        /*componentContext*/
        t[2]
      )
    }
  }), {
    c() {
      d && d.c(), r = dr(), g && g.c(), e = dr(), n = Ie("div"), o = Ie("div"), Gt(i.$$.fragment), this.h();
    },
    l(m) {
      d && d.l(m), r = _r(m), g && g.l(m), e = _r(m), n = Fe(m, "DIV", {
        class: !0,
        role: !0,
        "aria-modal": !0
      });
      var h = ve(n);
      o = Fe(h, "DIV", { class: !0 });
      var y = ve(o);
      Jt(i.$$.fragment, y), y.forEach(k), h.forEach(k), this.h();
    },
    h() {
      p(o, "class", Vo.tooltip__inner), p(n, "class", s = wt(
        "tooltip",
        Vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Ir.root_platform_desktop : "")), p(n, "role", "dialog"), p(
        n,
        "aria-modal",
        /*modal*/
        t[3]
      ), P(
        n,
        "top",
        /*tooltipY*/
        t[11]
      ), P(
        n,
        "left",
        /*tooltipX*/
        t[10]
      ), P(
        n,
        "width",
        /*tooltipWidth*/
        t[12]
      ), P(
        n,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    m(m, h) {
      d && d.m(m, h), q(m, r, h), g && g.m(m, h), q(m, e, h), q(m, n, h), yt(n, o), Wt(i, o, null), t[40](o), t[41](n), u = !0, c || (f = [
        Je(
          n,
          "keydown",
          /*onKeyDown*/
          t[26]
        ),
        Je(
          n,
          "introstart",
          /*onIntroStart*/
          t[28]
        ),
        Je(
          n,
          "introend",
          /*onIntroEnd*/
          t[29]
        ),
        Je(
          n,
          "outrostart",
          /*onOutroStart*/
          t[30]
        )
      ], c = !0);
    },
    p(m, h) {
      t = m, /*visible*/
      t[1] && /*modal*/
      t[3] ? d ? d.p(t, h) : (d = Qf(t), d.c(), d.m(r.parentNode, r)) : d && (d.d(1), d = null), /*substrateComponentContext*/
      t[14] ? g ? (g.p(t, h), h[0] & /*substrateComponentContext*/
      16384 && G(g, 1)) : (g = xf(t), g.c(), G(g, 1), g.m(e.parentNode, e)) : g && (mr(), $(g, 1, 1, () => {
        g = null;
      }), br());
      const y = {};
      h[0] & /*componentContext*/
      4 && (y.componentContext = /*componentContext*/
      t[2]), i.$set(y), (!u || h[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = wt(
        "tooltip",
        Vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Ir.root_platform_desktop : ""))) && p(n, "class", s), (!u || h[0] & /*modal*/
      8) && p(
        n,
        "aria-modal",
        /*modal*/
        t[3]
      ), h[0] & /*tooltipY*/
      2048 && P(
        n,
        "top",
        /*tooltipY*/
        t[11]
      ), h[0] & /*tooltipX*/
      1024 && P(
        n,
        "left",
        /*tooltipX*/
        t[10]
      ), h[0] & /*tooltipWidth*/
      4096 && P(
        n,
        "width",
        /*tooltipWidth*/
        t[12]
      ), h[0] & /*tooltipHeight*/
      8192 && P(
        n,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    i(m) {
      u || (G(g), G(i.$$.fragment, m), lo(() => {
        u && (l && l.end(1), a = pl(n, sl, {
          animations: (
            /*$animationIn*/
            t[5] || Ki
          ),
          direction: "in"
        }), a.start());
      }), u = !0);
    },
    o(m) {
      $(g), $(i.$$.fragment, m), a && a.invalidate(), l = Ed(n, sl, {
        animations: (
          /*$animationOut*/
          t[4] || Ki
        ),
        direction: "out"
      }), u = !1;
    },
    d(m) {
      m && (k(r), k(e), k(n)), d && d.d(m), g && g.d(m), Ut(i), t[40](null), t[41](null), m && l && l.end(), c = !1, Ur(f);
    }
  };
}
function M3(t) {
  let r, e, n, o, i, s, a, l, u, c, f, d = (
    /*substrateComponentContext*/
    t[14] && $f(t)
  ), g = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && /*data*/
    t[0].background_accessibility_description && ed(t)
  );
  return i = new no({
    props: {
      componentContext: (
        /*componentContext*/
        t[2]
      )
    }
  }), {
    c() {
      d && d.c(), r = dr(), e = Ie("dialog"), g && g.c(), n = dr(), o = Ie("div"), Gt(i.$$.fragment), this.h();
    },
    l(m) {
      d && d.l(m), r = _r(m), e = Fe(m, "DIALOG", { class: !0 });
      var h = ve(e);
      g && g.l(h), n = _r(h), o = Fe(h, "DIV", { class: !0 });
      var y = ve(o);
      Jt(i.$$.fragment, y), y.forEach(k), h.forEach(k), this.h();
    },
    h() {
      p(o, "class", Vo.tooltip__inner), p(e, "class", s = wt(
        "tooltip",
        Vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Ir.root_platform_desktop : "")), P(
        e,
        "top",
        /*tooltipY*/
        t[11]
      ), P(
        e,
        "left",
        /*tooltipX*/
        t[10]
      ), P(
        e,
        "width",
        /*tooltipWidth*/
        t[12]
      ), P(
        e,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    m(m, h) {
      d && d.m(m, h), q(m, r, h), q(m, e, h), g && g.m(e, null), yt(e, n), yt(e, o), Wt(i, o, null), t[36](o), t[37](e), u = !0, c || (f = [
        Je(
          e,
          "keydown",
          /*onKeyDown*/
          t[26]
        ),
        Je(
          e,
          "close",
          /*onClose*/
          t[27]
        ),
        Je(
          e,
          "cancel",
          /*onClose*/
          t[27]
        ),
        Je(
          e,
          "click",
          /*onOutClick*/
          t[23]
        ),
        Je(
          e,
          "introstart",
          /*onIntroStart*/
          t[28]
        ),
        Je(
          e,
          "introend",
          /*onIntroEnd*/
          t[29]
        ),
        Je(
          e,
          "outrostart",
          /*onOutroStart*/
          t[30]
        )
      ], c = !0);
    },
    p(m, h) {
      t = m, /*substrateComponentContext*/
      t[14] ? d ? (d.p(t, h), h[0] & /*substrateComponentContext*/
      16384 && G(d, 1)) : (d = $f(t), d.c(), G(d, 1), d.m(r.parentNode, r)) : d && (mr(), $(d, 1, 1, () => {
        d = null;
      }), br()), /*visible*/
      t[1] && /*modal*/
      t[3] && /*data*/
      t[0].background_accessibility_description ? g ? g.p(t, h) : (g = ed(t), g.c(), g.m(e, n)) : g && (g.d(1), g = null);
      const y = {};
      h[0] & /*componentContext*/
      4 && (y.componentContext = /*componentContext*/
      t[2]), i.$set(y), (!u || h[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = wt(
        "tooltip",
        Vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Ir.root_platform_desktop : ""))) && p(e, "class", s), h[0] & /*tooltipY*/
      2048 && P(
        e,
        "top",
        /*tooltipY*/
        t[11]
      ), h[0] & /*tooltipX*/
      1024 && P(
        e,
        "left",
        /*tooltipX*/
        t[10]
      ), h[0] & /*tooltipWidth*/
      4096 && P(
        e,
        "width",
        /*tooltipWidth*/
        t[12]
      ), h[0] & /*tooltipHeight*/
      8192 && P(
        e,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    i(m) {
      u || (G(d), G(i.$$.fragment, m), lo(() => {
        u && (l && l.end(1), a = pl(e, sl, {
          animations: (
            /*$animationIn*/
            t[5] || Ki
          ),
          direction: "in"
        }), a.start());
      }), u = !0);
    },
    o(m) {
      $(d), $(i.$$.fragment, m), a && a.invalidate(), l = Ed(e, sl, {
        animations: (
          /*$animationOut*/
          t[4] || Ki
        ),
        direction: "out"
      }), u = !1;
    },
    d(m) {
      m && (k(r), k(e)), d && d.d(m), g && g.d(), Ut(i), t[36](null), t[37](null), m && l && l.end(), c = !1, Ur(f);
    }
  };
}
function Qf(t) {
  let r;
  function e(i, s) {
    return (
      /*data*/
      i[0].background_accessibility_description ? N3 : P3
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = We();
    },
    l(i) {
      o.l(i), r = We();
    },
    m(i, s) {
      o.m(i, s), q(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function P3(t) {
  let r, e, n;
  return {
    c() {
      r = Ie("div"), this.h();
    },
    l(o) {
      r = Fe(o, "DIV", { class: !0 }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "class", Vo.tooltip__overlay);
    },
    m(o, i) {
      q(o, r, i), e || (n = Je(
        r,
        "click",
        /*closeByOutside*/
        t[24]
      ), e = !0);
    },
    p: S,
    d(o) {
      o && k(r), e = !1, n();
    }
  };
}
function N3(t) {
  let r, e, n, o;
  return {
    c() {
      r = Ie("button"), this.h();
    },
    l(i) {
      r = Fe(i, "BUTTON", {
        class: !0,
        type: !0,
        "aria-label": !0
      }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "class", Vo.tooltip__overlay), p(r, "type", "button"), p(r, "aria-label", e = /*data*/
      t[0].background_accessibility_description);
    },
    m(i, s) {
      q(i, r, s), n || (o = Je(
        r,
        "click",
        /*closeByOutside*/
        t[24]
      ), n = !0);
    },
    p(i, s) {
      s[0] & /*data*/
      1 && e !== (e = /*data*/
      i[0].background_accessibility_description) && p(r, "aria-label", e);
    },
    d(i) {
      i && k(r), n = !1, o();
    }
  };
}
function xf(t) {
  let r, e, n, o, i;
  return e = new no({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        t[14]
      )
    }
  }), {
    c() {
      r = Ie("div"), Gt(e.$$.fragment), n = dr(), o = Ie("div"), this.h();
    },
    l(s) {
      r = Fe(s, "DIV", { class: !0 });
      var a = ve(r);
      Jt(e.$$.fragment, a), a.forEach(k), n = _r(s), o = Fe(s, "DIV", {}), ve(o).forEach(k), this.h();
    },
    h() {
      p(r, "class", Vo.tooltip__substrate);
    },
    m(s, a) {
      q(s, r, a), Wt(e, r, null), t[38](r), q(s, n, a), q(s, o, a), t[39](o), i = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*substrateComponentContext*/
      16384 && (l.componentContext = /*substrateComponentContext*/
      s[14]), e.$set(l);
    },
    i(s) {
      i || (G(e.$$.fragment, s), i = !0);
    },
    o(s) {
      $(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (k(r), k(n), k(o)), Ut(e), t[38](null), t[39](null);
    }
  };
}
function $f(t) {
  let r, e, n, o, i;
  return e = new no({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        t[14]
      )
    }
  }), {
    c() {
      r = Ie("div"), Gt(e.$$.fragment), n = dr(), o = Ie("div"), this.h();
    },
    l(s) {
      r = Fe(s, "DIV", { class: !0 });
      var a = ve(r);
      Jt(e.$$.fragment, a), a.forEach(k), n = _r(s), o = Fe(s, "DIV", {}), ve(o).forEach(k), this.h();
    },
    h() {
      p(r, "class", Vo.tooltip__substrate);
    },
    m(s, a) {
      q(s, r, a), Wt(e, r, null), t[34](r), q(s, n, a), q(s, o, a), t[35](o), i = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*substrateComponentContext*/
      16384 && (l.componentContext = /*substrateComponentContext*/
      s[14]), e.$set(l);
    },
    i(s) {
      i || (G(e.$$.fragment, s), i = !0);
    },
    o(s) {
      $(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (k(r), k(n), k(o)), Ut(e), t[34](null), t[35](null);
    }
  };
}
function ed(t) {
  let r, e, n, o;
  return {
    c() {
      r = Ie("button"), this.h();
    },
    l(i) {
      r = Fe(i, "BUTTON", {
        class: !0,
        type: !0,
        "aria-label": !0
      }), ve(r).forEach(k), this.h();
    },
    h() {
      p(r, "class", Vo.tooltip__overlay), p(r, "type", "button"), p(r, "aria-label", e = /*data*/
      t[0].background_accessibility_description);
    },
    m(i, s) {
      q(i, r, s), n || (o = Je(
        r,
        "click",
        /*closeByOutside*/
        t[24]
      ), n = !0);
    },
    p(i, s) {
      s[0] & /*data*/
      1 && e !== (e = /*data*/
      i[0].background_accessibility_description) && p(r, "aria-label", e);
    },
    d(i) {
      i && k(r), n = !1, o();
    }
  };
}
function z3(t) {
  let r, e, n, o, i, s, a;
  const l = [M3, T3], u = [];
  function c(f, d) {
    return as ? 0 : 1;
  }
  return e = c(), n = u[e] = l[e](t), {
    c() {
      r = dr(), n.c(), o = We();
    },
    l(f) {
      r = _r(f), n.l(f), o = We();
    },
    m(f, d) {
      q(f, r, d), u[e].m(f, d), q(f, o, d), i = !0, s || (a = [
        Je(
          F3,
          "resize",
          /*onWindowResize*/
          t[25]
        ),
        Je(
          D3.body,
          "click",
          /*onOutClick*/
          t[23],
          !0
        )
      ], s = !0);
    },
    p(f, d) {
      n.p(f, d);
    },
    i(f) {
      i || (G(n), i = !0);
    },
    o(f) {
      $(n), i = !1;
    },
    d(f) {
      f && (k(r), k(o)), u[e].d(f), s = !1, Ur(a);
    }
  };
}
const Ki = {
  name: "set",
  items: [{ name: "translate" }, { name: "fade" }]
};
let $n = [];
function O3(t, r, e) {
  let n, o, i, s, a, l, u, c, f, d = S, g = () => (d(), d = I(i, (M) => e(46, f = M)), i), m, h = S, y = () => (h(), h = I(o, (M) => e(47, m = M)), o), w, F = S, R = () => (F(), F = I(n, (M) => e(48, w = M)), n), B, Q = S, ae = () => (Q(), Q = I(a, (M) => e(4, B = M)), a), T, Y = S, le = () => (Y(), Y = I(s, (M) => e(5, T = M)), s), C;
  t.$$.on_destroy.push(() => d()), t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Y());
  let { ownerNode: N } = r, { data: z } = r, { internalId: O } = r, { parentComponentContext: oe } = r;
  const fe = zr(en), ce = fe.isDesktop;
  En(t, ce, (M) => e(21, C = M));
  const Ae = Date.now();
  let _e, Te, ee, Me, Xe = !1, Qe = "", Ee = "", it = "", we = "", Se = null, he, x, de = !0, se = null;
  function De() {
    var mt, ye;
    if (!_e || !N)
      return;
    const M = _e.parentElement;
    if (!M)
      return;
    const Ct = _e.style.cssText;
    e(6, _e.style.cssText += ";transform: none !important", _e);
    const ht = N.getBoundingClientRect(), Dt = _e.getBoundingClientRect(), Nt = M.getBoundingClientRect();
    e(6, _e.style.cssText = Ct, _e);
    let nt = 0, X = 0, It = null, zt = null, er = 0, Xt = 0;
    const me = (mt = he == null ? void 0 : he.json) == null ? void 0 : mt.width, Ue = (ye = he == null ? void 0 : he.json) == null ? void 0 : ye.height;
    if (!me || me.type === "match_parent" ? er = It = window.innerWidth : me.type === "fixed" && me.value ? er = It = me.value : er = Dt.width, (Ue == null ? void 0 : Ue.type) === "match_parent" ? Xt = zt = window.innerHeight : (Ue == null ? void 0 : Ue.type) === "fixed" && Ue.value ? Xt = zt = Ue.value : Xt = Dt.height, w === "left" || w === "bottom-left" || w === "top-left")
      nt = ht.left - er;
    else if (w === "top" || w === "bottom" || w === "center")
      nt = (ht.left + ht.right) / 2 - er / 2;
    else if (w === "right" || w === "bottom-right" || w === "top-right")
      nt = ht.right;
    else
      return;
    if (w === "top" || w === "top-left" || w === "top-right")
      X = ht.top - Xt;
    else if (w === "left" || w === "right" || w === "center")
      X = (ht.top + ht.bottom) / 2 - Xt / 2;
    else if (w === "bottom-left" || w === "bottom" || w === "bottom-right")
      X = ht.bottom;
    else
      return;
    as && de || (nt -= Nt.left, X -= Nt.top), nt += m || 0, X += f || 0, e(10, Qe = `${nt}px`), e(11, Ee = `${X}px`), e(12, it = It !== null ? `${It}px` : ""), e(13, we = zt !== null ? `${zt}px` : ""), e(1, Xe = !0), It === null || zt === null ? typeof ResizeObserver < "u" && !Se && (Se = new ResizeObserver(() => {
      requestAnimationFrame(De);
    }), Se.observe(_e)) : Se == null || Se.disconnect();
  }
  function tt(M) {
    if ($n.length && $n[$n.length - 1] !== _e)
      return;
    const Ct = M.composedPath();
    Date.now() - Ae < 100 || Ct.includes(_e) && !(as && Ct[0] === _e) || xe();
  }
  function xe(M) {
    M == null || M.stopPropagation(), M == null || M.preventDefault(), he.getJsonWithVars(z.close_by_tap_outside) !== !1 && ($n = $n.filter((Ct) => Ct !== _e), fe.onTooltipClose(O)), z.tap_outside_actions && he.execAnyActions(z.tap_outside_actions, { processUrls: !0 });
  }
  function ne() {
    De();
  }
  function Ze(M) {
    $n.length && $n[$n.length - 1] !== _e || M.key === "Escape" && !M.ctrlKey && !M.shiftKey && !M.altKey && !M.metaKey && ($n = $n.filter((Ct) => Ct !== _e), fe.onTooltipClose(O));
  }
  function Re(M) {
    $n = $n.filter((Ct) => Ct !== _e), fe.onTooltipClose(O), M.preventDefault();
  }
  function ut() {
    ee && ee.animate({ opacity: [0, 1] }, {
      duration: l,
      easing: "ease-in-out"
    });
  }
  function ct() {
    ee && _e.insertBefore(ee, Te);
  }
  function ft() {
    Me != null && Me.parentElement && ee && (Me.parentElement.insertBefore(ee, Me), ee.animate({ opacity: [1, 0] }, {
      duration: u,
      easing: "ease-in-out"
    }));
  }
  ao(() => {
    try {
      se = document.activeElement;
    } catch {
    }
    if (fe.tooltipRoot) {
      const M = window.getComputedStyle(_e);
      e(6, _e.style.fontSize = M.fontSize, _e), e(6, _e.style.fontFamily = M.fontFamily, _e), e(6, _e.style.lineHeight = M.lineHeight, _e), fe.tooltipRoot.appendChild(_e);
    }
    as && _e && _e instanceof HTMLDialogElement && _e[de ? "showModal" : "show"](), de && $n.push(_e);
  }), hl(() => {
    Xe || De();
  }), cn(() => {
    if (he && he.destroy(), x && x.destroy(), Se == null || Se.disconnect(), $n = $n.filter((M) => M !== _e), de && se && se instanceof HTMLElement) {
      as && _e && _e instanceof HTMLDialogElement && _e.close();
      try {
        se.focus({ preventScroll: !0 });
      } catch {
      }
    }
  });
  function Et(M) {
    Pr[M ? "unshift" : "push"](() => {
      ee = M, e(8, ee);
    });
  }
  function st(M) {
    Pr[M ? "unshift" : "push"](() => {
      Me = M, e(9, Me);
    });
  }
  function Lt(M) {
    Pr[M ? "unshift" : "push"](() => {
      Te = M, e(7, Te);
    });
  }
  function _t(M) {
    Pr[M ? "unshift" : "push"](() => {
      _e = M, e(6, _e);
    });
  }
  function pe(M) {
    Pr[M ? "unshift" : "push"](() => {
      ee = M, e(8, ee);
    });
  }
  function ge(M) {
    Pr[M ? "unshift" : "push"](() => {
      Me = M, e(9, Me);
    });
  }
  function gt(M) {
    Pr[M ? "unshift" : "push"](() => {
      Te = M, e(7, Te);
    });
  }
  function Ce(M) {
    Pr[M ? "unshift" : "push"](() => {
      _e = M, e(6, _e);
    });
  }
  return t.$$set = (M) => {
    "ownerNode" in M && e(31, N = M.ownerNode), "data" in M && e(0, z = M.data), "internalId" in M && e(32, O = M.internalId), "parentComponentContext" in M && e(33, oe = M.parentComponentContext);
  }, t.$$.update = () => {
    var M, Ct, ht, Dt, Nt;
    t.$$.dirty[0] & /*componentContext, data*/
    5 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && (he && he.destroy(), e(2, he = oe.produceChildContext(z.div || {}, { isTooltipRoot: !0 })), z.substrate_div && e(14, x = oe.produceChildContext(z.substrate_div, { isTooltipRoot: !0 }))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && R(e(20, n = oe.getDerivedFromVars(z.position))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && y(e(19, o = oe.getDerivedFromVars((Ct = (M = z.offset) == null ? void 0 : M.x) == null ? void 0 : Ct.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && g(e(18, i = oe.getDerivedFromVars((Dt = (ht = z.offset) == null ? void 0 : ht.y) == null ? void 0 : Dt.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && le(e(17, s = oe.getDerivedFromVars(z.animation_in))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && ae(e(16, a = oe.getDerivedFromVars(z.animation_out))), t.$$.dirty[0] & /*$animationIn*/
    32 && (l = Ji() ? 0 : ha(_s(T || Ki))), t.$$.dirty[0] & /*$animationOut*/
    16 && (u = Ji() ? 0 : ha(_s(B || Ki))), t.$$.dirty[0] & /*data*/
    1 && (((Nt = z.mode) == null ? void 0 : Nt.type) === "non_modal" ? e(3, de = !1) : e(3, de = !0)), t.$$.dirty[0] & /*visible, modal*/
    10 && e(15, c = { visible: Xe, modal: de });
  }, [
    z,
    Xe,
    he,
    de,
    B,
    T,
    _e,
    Te,
    ee,
    Me,
    Qe,
    Ee,
    it,
    we,
    x,
    c,
    a,
    s,
    i,
    o,
    n,
    C,
    ce,
    tt,
    xe,
    ne,
    Ze,
    Re,
    ut,
    ct,
    ft,
    N,
    O,
    oe,
    Et,
    st,
    Lt,
    _t,
    pe,
    ge,
    gt,
    Ce
  ];
}
class B3 extends Hr {
  constructor(r) {
    super(), Rr(
      this,
      r,
      O3,
      z3,
      Tr,
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
const L3 = "appkit-root_platform_desktop", R3 = "appkit-menu", H3 = "appkit-menu_visible", W3 = "appkit-menu__list", U3 = "appkit-menu__item", Ys = {
  root_platform_desktop: L3,
  menu: R3,
  menu_visible: H3,
  menu__list: W3,
  menu__item: U3
}, { window: td } = Ho;
function rd(t, r, e) {
  const n = t.slice();
  return n[23] = r[e], n;
}
function G3(t) {
  let r = (
    /*item*/
    t[23].text + ""
  ), e;
  return {
    c() {
      e = On(r);
    },
    l(n) {
      e = Un(n, r);
    },
    m(n, o) {
      q(n, e, o);
    },
    p(n, o) {
      o & /*items*/
      1 && r !== (r = /*item*/
      n[23].text + "") && to(e, r);
    },
    d(n) {
      n && k(e);
    }
  };
}
function nd(t) {
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
      cls: Ys.menu__item + " " + /*itemMix*/
      t[10],
      customAction: (
        /*onItemAction*/
        t[14]
      ),
      $$slots: { default: [G3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      r = Ie("li"), Gt(e.$$.fragment), n = dr();
    },
    l(i) {
      r = Fe(i, "LI", {});
      var s = ve(r);
      Jt(e.$$.fragment, s), n = _r(s), s.forEach(k);
    },
    m(i, s) {
      q(i, r, s), Wt(e, r, null), yt(r, n), o = !0;
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
      o || (G(e.$$.fragment, i), o = !0);
    },
    o(i) {
      $(e.$$.fragment, i), o = !1;
    },
    d(i) {
      i && k(r), Ut(e);
    }
  };
}
function J3(t) {
  let r, e, n, o, i, s, a, l = ar(
    /*items*/
    t[0]
  ), u = [];
  for (let f = 0; f < l.length; f += 1)
    u[f] = nd(rd(t, l, f));
  const c = (f) => $(u[f], 1, 1, () => {
    u[f] = null;
  });
  return {
    c() {
      r = Ie("div"), e = Ie("ul");
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      this.h();
    },
    l(f) {
      r = Fe(f, "DIV", { class: !0 });
      var d = ve(r);
      e = Fe(d, "UL", { class: !0 });
      var g = ve(e);
      for (let m = 0; m < u.length; m += 1)
        u[m].l(g);
      g.forEach(k), d.forEach(k), this.h();
    },
    h() {
      p(e, "class", Ys.menu__list), p(r, "class", n = wt(
        "menu",
        Ys,
        /*mods*/
        t[7]
      ) + " " + /*$isDesktop*/
      (t[8] ? Ir.root_platform_desktop : "") + " " + /*popupMix*/
      t[9]), P(
        r,
        "top",
        /*menuY*/
        t[4]
      ), P(
        r,
        "left",
        /*menuX*/
        t[3]
      ), P(
        r,
        "width",
        /*menuWidth*/
        t[5]
      ), P(
        r,
        "height",
        /*menuHeight*/
        t[6]
      );
    },
    m(f, d) {
      q(f, r, d), yt(r, e);
      for (let g = 0; g < u.length; g += 1)
        u[g] && u[g].m(e, null);
      t[17](r), i = !0, s || (a = [
        Je(
          td,
          "click",
          /*onWindowClick*/
          t[12]
        ),
        Je(
          td,
          "resize",
          /*onWindowResize*/
          t[13]
        )
      ], s = !0);
    },
    p(f, [d]) {
      if (d & /*parentComponentContext, items, itemMix, onItemAction*/
      17411) {
        l = ar(
          /*items*/
          f[0]
        );
        let g;
        for (g = 0; g < l.length; g += 1) {
          const m = rd(f, l, g);
          u[g] ? (u[g].p(m, d), G(u[g], 1)) : (u[g] = nd(m), u[g].c(), G(u[g], 1), u[g].m(e, null));
        }
        for (mr(), g = l.length; g < u.length; g += 1)
          c(g);
        br();
      }
      (!i || d & /*mods, $isDesktop*/
      384 && n !== (n = wt(
        "menu",
        Ys,
        /*mods*/
        f[7]
      ) + " " + /*$isDesktop*/
      (f[8] ? Ir.root_platform_desktop : "") + " " + /*popupMix*/
      f[9])) && p(r, "class", n), d & /*menuY*/
      16 && P(
        r,
        "top",
        /*menuY*/
        f[4]
      ), d & /*menuX*/
      8 && P(
        r,
        "left",
        /*menuX*/
        f[3]
      ), d & /*menuWidth*/
      32 && P(
        r,
        "width",
        /*menuWidth*/
        f[5]
      ), d & /*menuHeight*/
      64 && P(
        r,
        "height",
        /*menuHeight*/
        f[6]
      );
    },
    i(f) {
      if (!i) {
        for (let d = 0; d < l.length; d += 1)
          G(u[d]);
        f && lo(() => {
          i && (o || (o = qa(r, Zf, { y: 20 }, !0)), o.run(1));
        }), i = !0;
      }
    },
    o(f) {
      u = u.filter(Boolean);
      for (let d = 0; d < u.length; d += 1)
        $(u[d]);
      f && (o || (o = qa(r, Zf, { y: 20 }, !1)), o.run(0)), i = !1;
    },
    d(f) {
      f && k(r), un(u, f), t[17](null), f && o && o.end(), s = !1, Ur(a);
    }
  };
}
function q3(t, r, e) {
  let n, o, { ownerNode: i } = r, { items: s } = r, { parentComponentContext: a } = r;
  const l = zr(en), u = l.getCustomization("menuPopupClass") || "", c = l.getCustomization("menuItemClass") || "", f = l.isDesktop;
  En(t, f, (C) => e(8, o = C));
  const d = Date.now(), g = K_();
  let m, h = !1, y = "", w = "", F = "", R = "", B = null;
  function Q() {
    if (!m || !i)
      return;
    const C = m.parentElement;
    if (!C)
      return;
    const N = i.getBoundingClientRect(), z = m.getBoundingClientRect(), O = C.getBoundingClientRect(), oe = window.innerWidth, fe = window.innerHeight;
    let ce = 0, Ae = 0, _e = z.width, Te = z.height;
    ce = N.left - O.left, Ae = N.bottom - O.top, ce + _e > oe && (ce = oe - _e), ce < 0 && (ce = 0), Ae + Te > fe && (N.top - O.top - Te > 0 ? Ae = N.top - O.top - Te : Ae = fe - Te), Ae < 0 && (Ae = 0), e(3, y = `${ce}px`), e(4, w = `${Ae}px`), e(5, F = ""), e(6, R = ""), e(16, h = !0), typeof ResizeObserver < "u" && !B && (B = new ResizeObserver(() => {
      requestAnimationFrame(Q);
    }), B.observe(m));
  }
  function ae(C) {
    Date.now() - d < 100 || C.composedPath().includes(m) || g("close");
  }
  function T() {
    Q();
  }
  function Y() {
    return g("close"), !0;
  }
  ao(() => {
    if (l.tooltipRoot) {
      const C = window.getComputedStyle(m);
      e(2, m.style.fontSize = C.fontSize, m), e(2, m.style.fontFamily = C.fontFamily, m), e(2, m.style.lineHeight = C.lineHeight, m), l.tooltipRoot.appendChild(m);
    }
  }), hl(() => {
    h || Q();
  }), cn(() => {
    B == null || B.disconnect();
  });
  function le(C) {
    Pr[C ? "unshift" : "push"](() => {
      m = C, e(2, m);
    });
  }
  return t.$$set = (C) => {
    "ownerNode" in C && e(15, i = C.ownerNode), "items" in C && e(0, s = C.items), "parentComponentContext" in C && e(1, a = C.parentComponentContext);
  }, t.$$.update = () => {
    t.$$.dirty & /*visible*/
    65536 && e(7, n = { visible: h });
  }, [
    s,
    a,
    m,
    y,
    w,
    F,
    R,
    n,
    o,
    u,
    c,
    f,
    ae,
    T,
    Y,
    i,
    h,
    le
  ];
}
class Y3 extends Hr {
  constructor(r) {
    super(), Rr(this, r, q3, J3, Tr, {
      ownerNode: 15,
      items: 0,
      parentComponentContext: 1
    });
  }
}
const { Map: K3 } = Ho;
function od(t, r, e) {
  const n = t.slice();
  return n[134] = r[e], n;
}
function id(t) {
  let r, e, n, o, i, s, a, l, u, c;
  e = new av({
    props: { svgFiltersMap: (
      /*svgFiltersMap*/
      t[5]
    ) }
  }), o = new no({
    props: {
      componentContext: (
        /*rootStateComponentContext*/
        t[6]
      )
    }
  });
  let f = (
    /*tooltips*/
    t[3] && sd(t)
  ), d = (
    /*menu*/
    t[4] && ad(t)
  );
  return {
    c() {
      r = Ie("div"), Gt(e.$$.fragment), n = dr(), Gt(o.$$.fragment), i = dr(), f && f.c(), s = dr(), d && d.c(), this.h();
    },
    l(g) {
      r = Fe(g, "DIV", { class: !0, dir: !0 });
      var m = ve(r);
      Jt(e.$$.fragment, m), n = _r(m), Jt(o.$$.fragment, m), i = _r(m), f && f.l(m), s = _r(m), d && d.l(m), m.forEach(k), this.h();
    },
    h() {
      p(r, "class", a = Ir.root + /*$isDesktop*/
      (t[7] ? ` ${Ir.root_platform_desktop}` : "") + /*mix*/
      (t[0] ? ` ${/*mix*/
      t[0]}` : "")), p(
        r,
        "dir",
        /*$directionStore*/
        t[8]
      );
    },
    m(g, m) {
      q(g, r, m), Wt(e, r, null), yt(r, n), Wt(o, r, null), yt(r, i), f && f.m(r, null), yt(r, s), d && d.m(r, null), l = !0, u || (c = Je(r, "touchstart", x3, { passive: !0 }), u = !0);
    },
    p(g, m) {
      const h = {};
      m[0] & /*svgFiltersMap*/
      32 && (h.svgFiltersMap = /*svgFiltersMap*/
      g[5]), e.$set(h);
      const y = {};
      m[0] & /*rootStateComponentContext*/
      64 && (y.componentContext = /*rootStateComponentContext*/
      g[6]), o.$set(y), /*tooltips*/
      g[3] ? f ? (f.p(g, m), m[0] & /*tooltips*/
      8 && G(f, 1)) : (f = sd(g), f.c(), G(f, 1), f.m(r, s)) : f && (mr(), $(f, 1, 1, () => {
        f = null;
      }), br()), /*menu*/
      g[4] ? d ? (d.p(g, m), m[0] & /*menu*/
      16 && G(d, 1)) : (d = ad(g), d.c(), G(d, 1), d.m(r, null)) : d && (mr(), $(d, 1, 1, () => {
        d = null;
      }), br()), (!l || m[0] & /*$isDesktop, mix*/
      129 && a !== (a = Ir.root + /*$isDesktop*/
      (g[7] ? ` ${Ir.root_platform_desktop}` : "") + /*mix*/
      (g[0] ? ` ${/*mix*/
      g[0]}` : ""))) && p(r, "class", a), (!l || m[0] & /*$directionStore*/
      256) && p(
        r,
        "dir",
        /*$directionStore*/
        g[8]
      );
    },
    i(g) {
      l || (G(e.$$.fragment, g), G(o.$$.fragment, g), G(f), G(d), l = !0);
    },
    o(g) {
      $(e.$$.fragment, g), $(o.$$.fragment, g), $(f), $(d), l = !1;
    },
    d(g) {
      g && k(r), Ut(e), Ut(o), f && f.d(), d && d.d(), u = !1, c();
    }
  };
}
function sd(t) {
  let r = [], e = new K3(), n, o, i = ar(
    /*tooltips*/
    t[3]
  );
  const s = (a) => (
    /*item*/
    a[134].internalId
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = od(t, i, a), u = s(l);
    e.set(u, r[a] = ld(u, l));
  }
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      n = We();
    },
    l(a) {
      for (let l = 0; l < r.length; l += 1)
        r[l].l(a);
      n = We();
    },
    m(a, l) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(a, l);
      q(a, n, l), o = !0;
    },
    p(a, l) {
      l[0] & /*tooltips, rootStateComponentContext*/
      72 && (i = ar(
        /*tooltips*/
        a[3]
      ), mr(), r = Cd(r, l, s, 1, a, i, e, n.parentNode, jd, ld, n, od), br());
    },
    i(a) {
      if (!o) {
        for (let l = 0; l < i.length; l += 1)
          G(r[l]);
        o = !0;
      }
    },
    o(a) {
      for (let l = 0; l < r.length; l += 1)
        $(r[l]);
      o = !1;
    },
    d(a) {
      a && k(n);
      for (let l = 0; l < r.length; l += 1)
        r[l].d(a);
    }
  };
}
function ld(t, r) {
  let e, n, o;
  return n = new B3({
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
      e = We(), Gt(n.$$.fragment), this.h();
    },
    l(i) {
      e = We(), Jt(n.$$.fragment, i), this.h();
    },
    h() {
      this.first = e;
    },
    m(i, s) {
      q(i, e, s), Wt(n, i, s), o = !0;
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
      o || (G(n.$$.fragment, i), o = !0);
    },
    o(i) {
      $(n.$$.fragment, i), o = !1;
    },
    d(i) {
      i && k(e), Ut(n, i);
    }
  };
}
function ad(t) {
  let r, e;
  return r = new Y3({
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
      Gt(r.$$.fragment);
    },
    l(n) {
      Jt(r.$$.fragment, n);
    },
    m(n, o) {
      Wt(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      $(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Ut(r, n);
    }
  };
}
function X3(t) {
  let r, e, n = !/*hasError*/
  t[1] && !/*hasIdError*/
  t[2] && /*rootStateComponentContext*/
  t[6] && id(t);
  return {
    c() {
      n && n.c(), r = We();
    },
    l(o) {
      n && n.l(o), r = We();
    },
    m(o, i) {
      n && n.m(o, i), q(o, r, i), e = !0;
    },
    p(o, i) {
      !/*hasError*/
      o[1] && !/*hasIdError*/
      o[2] && /*rootStateComponentContext*/
      o[6] ? n ? (n.p(o, i), i[0] & /*hasError, hasIdError, rootStateComponentContext*/
      70 && G(n, 1)) : (n = id(o), n.c(), G(n, 1), n.m(r.parentNode, r)) : n && (mr(), $(n, 1, 1, () => {
        n = null;
      }), br());
    },
    i(o) {
      e || (G(n), e = !0);
    },
    o(o) {
      $(n), e = !1;
    },
    d(o) {
      o && k(r), n && n.d(o);
    }
  };
}
let Na = Oo(!0), Is = 0;
function ud() {
  Na.set(!1);
}
function cd() {
  Na.set(!0);
}
const Z3 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean"]), Q3 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean", "array", "dict"]);
function Ko(t, r) {
  if (t && r)
    return new Map([...t, ...r]);
  if (t)
    return t;
  if (r)
    return r;
}
function x3() {
}
function $3(t, r, e) {
  var yn, rn, wn;
  let n, o, i, s, { id: a } = r, { json: l = {} } = r, { platform: u = "auto" } = r, { theme: c = "system" } = r, { globalVariablesController: f = void 0 } = r, { mix: d = "" } = r, { customization: g = {} } = r, { builtinProtocols: m = ["http", "https", "tel", "mailto", "intent"] } = r, { extensions: h = /* @__PURE__ */ new Map() } = r, { onError: y = void 0 } = r, { onStat: w = void 0 } = r, { onSubmit: F = void 0 } = r, { onCustomAction: R = void 0 } = r, { onComponent: B = void 0 } = r, { typefaceProvider: Q = (v) => "" } = r, { fetchInit: ae = {} } = r, { tooltipRoot: T = void 0 } = r, { customComponents: Y = void 0 } = r, { direction: le = "ltr" } = r, { store: C = void 0 } = r, { pagerChildrenClipEnabled: N = !0 } = r, { pagerMouseDragEnabled: z = !0 } = r, { weekStartDay: O = 0 } = r, { videoPlayerProvider: oe = void 0 } = r, { devtoolCreateHierarchy: fe = "lazy" } = r, ce = !0, Ae = Oo(u === "desktop");
  if (En(t, Ae, (v) => e(7, i = v)), u === "auto" && typeof matchMedia < "u") {
    const v = matchMedia("(any-pointer: coarse)");
    Ae.set(!v.matches), v.addListener(() => {
      Ae.set(!v.matches);
    });
  }
  let _e = "light", Te = null;
  const ee = Oo(le === "rtl" ? "rtl" : "ltr");
  En(t, ee, (v) => e(8, s = v));
  function Me() {
    c !== "system" || !Te || e(41, _e = Te.matches ? "dark" : "light");
  }
  function Xe(v) {
    e(12, c = v);
  }
  function Qe() {
    return /* @__PURE__ */ new Map();
  }
  function Ee() {
    return /* @__PURE__ */ new Map();
  }
  function it(v) {
    e(11, l = v);
  }
  function we(v) {
    return Ne(v, M);
  }
  const Se = new Set(m);
  let he = !1, x = !1;
  a || (x = !0, M(K(new Error('"id" prop is required'))));
  const de = { stateChange: !1 }, se = f || new w_(), De = se.getLastAddedVariableStore(), tt = se.getVariables(), xe = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map();
  let ut = null;
  const ct = /* @__PURE__ */ new Map();
  let ft = 0, Et = [];
  const st = /* @__PURE__ */ new Set();
  let Lt;
  const _t = [];
  function pe(v) {
    return g == null ? void 0 : g[v];
  }
  function ge(v, A, { additionalVars: V, keepComplex: ie = !1, customFunctions: W, emptyVarsError: $e, maxDepth: Ve } = {}) {
    var tr;
    if (!A)
      return ii(A);
    const Zt = Ko(ne, V), Ft = Xf(A, v, C, O, Ve);
    if (!Ft.vars.length)
      if (Ft.hasExpression) {
        const Vt = Ft.applyVars(Zt, W);
        if (!((tr = Vt.usedVars) != null && tr.size))
          return $e && $e(), ii(Vt.result);
      } else
        return $e && $e(), ii(A);
    const Be = Ft.vars.map((Vt) => Zt.get(Vt) || vt(Vt)).filter(Uo);
    return Oo(void 0, (Vt) => {
      const Fr = /* @__PURE__ */ new Map();
      let Vr;
      const Kr = () => {
        var Cn;
        const nn = Ft.applyVars(Zt, W, ie);
        for (const [vn, Vn] of Fr)
          (Cn = nn.usedVars) != null && Cn.has(vn) || (Vn(), Fr.delete(vn));
        if (nn.usedVars) {
          for (const vn of nn.usedVars)
            if (!Fr.has(vn)) {
              let Vn = !0;
              Fr.set(vn, vn.subscribe(() => {
                Vn || Vt(Kr()), Vn = !1;
              }));
            }
        }
        return nn.result;
      };
      return Vr = Zi(Be, Kr).subscribe((nn) => {
        Vt(nn);
      }), () => {
        Vr == null || Vr();
        for (const [nn, Cn] of Fr)
          Cn();
      };
    });
  }
  function gt(v, A, V, ie = !1, W = void 0) {
    const $e = Xf(A, v, C, O);
    if (!$e.hasExpression)
      return A;
    const Ve = Ko(ne, V);
    return $e.applyVars(Ve, W, ie).result;
  }
  function Ce(v, A, V) {
    const ie = /* @__PURE__ */ new Map(), W = Ts(v, "dict", A);
    ie.set(v, W);
    const $e = Ts("index", "integer", V);
    return ie.set("index", $e), ie;
  }
  function M(v) {
    y ? y({ error: v }) : (v == null ? void 0 : v.level) === "warn" ? console.warn(v) : console.error(v);
  }
  function Ct(v, A) {
    w && w({ type: v, action: A });
  }
  function ht(v) {
    return v in n;
  }
  function Dt(v, A) {
    if (!v)
      return { json: v, templateContext: A };
    const V = /* @__PURE__ */ new Set([v.type]);
    for (; v.type && v.type in n; ) {
      if ({ json: v, templateContext: A } = uv(v, A, n, M), V.has(v.type))
        return { json: v, templateContext: A };
      V.add(v.type);
    }
    return { json: v, templateContext: A };
  }
  let Nt = 0;
  function nt(v) {
    return `${a}-${Nt++}`;
  }
  function X(v) {
    return `divkit-${nt()}`;
  }
  let It = {}, zt = {};
  function er(v, A) {
    const V = `${v}:${A}`;
    if (zt[V] = zt[V] || 0, ++zt[V], It[V])
      return It[V];
    const ie = `${nt()}-svg-filter`;
    return e(5, It = { ...It, [V]: ie }), ie;
  }
  function Xt(v, A) {
    if (!v)
      return;
    const V = `${v}:${A}`;
    zt[V] && --zt[V] === 0 && e(5, It = Object.keys(It).reduce(
      (ie, W) => (zt[W] && (ie[W] = It[W]), ie),
      {}
    ));
  }
  const me = nt() + "-id-", Ue = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map();
  function ye(v) {
    return me + v;
  }
  function et(v, A) {
    let V = Ue.get(v) || [];
    return Ue.has(v) || Ue.set(v, V), V.push(A), () => {
      V = V.filter((W) => W !== A), V.length || Ue.delete(v);
      const ie = ye(v);
      mt.has(ie) && mt.delete(ie);
    };
  }
  function Le(v) {
    var V, ie;
    const A = (ie = (V = Ue.get(v)) == null ? void 0 : V[0]) == null ? void 0 : ie.node();
    if (A) {
      const W = ye(v), $e = mt.get(W);
      return $e && $e !== A && $e.removeAttribute("id"), A.setAttribute("id", W), mt.set(W, A), W;
    }
    return "";
  }
  async function or(v, A) {
    var Ve, Zt;
    if (!v)
      throw new Error("Missing state id");
    let V = v.split("/");
    const ie = V.length % 2 === 0 && h3(A);
    let W = ie || Qr;
    const $e = (A == null ? void 0 : A.logError) || M;
    if (!ie)
      if ((Ve = W.states) != null && Ve.root) {
        const Ft = W.states.root;
        if (Ft.length > 1) {
          $e(K(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: v } }));
          return;
        }
        if (W = await Ft[0](V[0]), !W)
          return;
        V = V.slice(1);
      } else
        return;
    for (let Ft = 0; Ft < V.length; Ft += 2) {
      const Be = V[Ft], tr = V[Ft + 1];
      if ((Zt = W.states) != null && Zt[Be]) {
        const Vt = W.states[Be];
        if (Vt.length > 1) {
          $e(K(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: v } }));
          return;
        }
        if (W = await Vt[0](tr), !W)
          return;
      } else
        return;
    }
  }
  async function Oe(v, A, V) {
    var Fr;
    const ie = (v == null ? void 0 : v.logError) || M;
    if (!y3(A)) {
      ie(K(new Error("Incorrect submit action"), {
        additional: { containerId: A.container_id }
      }));
      return;
    }
    const W = Ue.get(A.container_id);
    if ((W == null ? void 0 : W.length) !== 1) {
      ie(K(new Error("Error resolving container. Found multiple elements that respond to id"), {
        additional: { containerId: A.container_id }
      }));
      return;
    }
    const $e = W[0].context(), Ve = {};
    if ($e.variables)
      for (const [Vr, Kr] of $e.variables) {
        const nn = Kr.getValue();
        typeof nn == "bigint" ? Ve[Vr] = Number(nn) : Ve[Vr] = nn;
      }
    if (F) {
      Promise.resolve().then(() => F(A, Ve)).then(() => {
        Bt(V.on_success_actions, { componentContext: v });
      }).catch(() => {
        Bt(V.on_fail_actions, { componentContext: v });
      });
      return;
    }
    const Zt = Object.keys(Ve).length > 0, Ft = (A.request.method || "post").toLowerCase();
    if ((Ft === "get" || Ft === "head") && Zt) {
      ie(K(new Error("Can't send variables using the get/head method."), { additional: { url: A.request.url } }));
      return;
    }
    let Be = !1;
    const tr = [];
    (Fr = A.request.headers) == null || Fr.forEach((Vr) => {
      tr.push([Vr.name, Vr.value]), Vr.name.toLowerCase() === "content-type" && (Be = !0);
    }), Be || tr.push(["Content-Type", "application/json"]);
    let Vt;
    typeof ae == "function" ? Vt = ae(A.request.url) : Vt = ae, fetch(A.request.url, {
      ...Vt,
      method: Ft,
      headers: tr,
      body: Zt ? JSON.stringify(Ve) : void 0
    }).then((Vr) => {
      if (!Vr.ok)
        throw new Error("Response is not ok");
      Bt(V.on_success_actions, { componentContext: v });
    }).catch((Vr) => {
      ie(K(new Error("Failed to submit"), {
        additional: {
          url: A.request.url,
          originalError: Vr
        }
      })), Bt(V.on_fail_actions, { componentContext: v });
    });
  }
  function kt(v, A) {
    var W, $e, Ve, Zt, Ft, Be, tr, Vt, Fr;
    const V = (v == null ? void 0 : v.logError) || M, ie = A.id && ot(A.id);
    if (!ie) {
      V(K(new Error('Missing component for "scroll_to" action'), { additional: { id: A.id } }));
      return;
    }
    if (A.animated !== void 0 && typeof A.animated != "boolean") {
      V(K(new Error('Missing properties for "scroll_to" action'), { additional: { id: A.id } }));
      return;
    }
    switch ((W = A.destination) == null ? void 0 : W.type) {
      case "index": {
        typeof A.destination.value == "number" && ie.setCurrentItem(A.destination.value, ($e = A.animated) != null ? $e : !0);
        break;
      }
      case "offset": {
        typeof A.destination.value == "number" && ((Zt = ie.scrollToPosition) == null || Zt.call(ie, A.destination.value, (Ve = A.animated) != null ? Ve : !0));
        break;
      }
      case "start": {
        (Be = ie.scrollToStart) == null || Be.call(ie, (Ft = A.animated) != null ? Ft : !0);
        break;
      }
      case "end": {
        (Vt = ie.scrollToEnd) == null || Vt.call(ie, (tr = A.animated) != null ? tr : !0);
        break;
      }
      default:
        V(K(new Error('Unknown destination for "scroll_to" action'), {
          additional: {
            id: A.id,
            destination: (Fr = A.destination) == null ? void 0 : Fr.type
          }
        }));
    }
  }
  function Tt(v, A) {
    var W;
    const V = (v == null ? void 0 : v.logError) || M, ie = A.id && ot(A.id);
    if (!ie) {
      V(K(new Error('Missing component for "scroll_by" action'), { additional: { id: A.id } }));
      return;
    }
    if (typeof A.item_count != "number" && A.item_count !== void 0 || typeof A.offset != "number" && A.offset !== void 0 || A.overflow !== void 0 && A.overflow !== "clamp" && A.overflow !== "ring" || A.animated !== void 0 && typeof A.animated != "boolean") {
      V(K(new Error('Missing properties for "scroll_by" action'), { additional: { id: A.id } }));
      return;
    }
    (W = ie.scrollCombined) == null || W.call(ie, {
      step: A.item_count,
      offset: A.offset,
      overflow: A.overflow,
      animated: A.animated
    });
  }
  function Mt(v, A, { item: V, step: ie, overflow: W, animated: $e }) {
    var tr, Vt, Fr, Vr, Kr;
    if (!A)
      throw new Error(`Missing id for "${v}" action`);
    const Ve = Number(V);
    if (v === "set_current_item" && Number.isNaN(Ve))
      throw new Error(`Incorrect item for "${v}" action`);
    let Zt = Number(ie);
    if (!ie && (v === "set_previous_item" || v === "set_next_item") && (Zt = 1), !ie && (v === "scroll_backward" || v === "scroll_forward" || v === "scroll_to_position") || Number.isNaN(Zt))
      throw new Error(`Incorrect step value for "${v}" action`);
    if (W && W !== "clamp" && W !== "ring")
      throw new Error(`Incorrect overflow value for "${v}" action`);
    W = W || "clamp";
    const Ft = $e === null || $e !== "0" && $e !== "false", Be = ot(A);
    if (Be)
      switch (v) {
        case "set_current_item":
          Be.setCurrentItem(Ve, Ft);
          return;
        case "set_previous_item":
          Be.setPreviousItem(Zt, W, Ft);
          return;
        case "set_next_item":
          Be.setNextItem(Zt, W, Ft);
          return;
        case "scroll_to_start":
          (tr = Be.scrollToStart) == null || tr.call(Be, Ft);
          return;
        case "scroll_to_end":
          (Vt = Be.scrollToEnd) == null || Vt.call(Be, Ft);
          return;
        case "scroll_backward":
          (Fr = Be.scrollCombined) == null || Fr.call(Be, {
            offset: -Zt,
            overflow: W,
            animated: Ft
          });
          return;
        case "scroll_forward":
          (Vr = Be.scrollCombined) == null || Vr.call(Be, {
            offset: Zt,
            overflow: W,
            animated: Ft
          });
          return;
        case "scroll_to_position":
          (Kr = Be.scrollToPosition) == null || Kr.call(Be, Zt, Ft);
          return;
      }
  }
  function hr(v, A, V) {
    const ie = (V == null ? void 0 : V.logError) || M;
    if (v) {
      const W = ot(v);
      W ? A === "start" ? W.start() : A === "pause" ? W.pause() : ie(K(new Error("Unknown video action"), { additional: { id: v, action: A } })) : ie(K(new Error("Video component is not found"), { additional: { id: v, action: A } }));
    } else
      ie(K(new Error("Missing id in video action"), { additional: { action: A } }));
  }
  function Ne(v, A, V) {
    var ie, W, $e;
    if (v.templates)
      for (const Ve in v.templates)
        n.hasOwnProperty(Ve) || (n[Ve] = v.templates[Ve]);
    if (Array.isArray((ie = v.patch) == null ? void 0 : ie.changes)) {
      if (v.patch.mode === "transactional") {
        const Ve = v.patch.changes.find((Zt) => {
          const Ft = Cr.get(Zt.id);
          if (!Ft)
            return !0;
          const Be = Array.isArray(Zt.items) ? Zt.items.length : 0;
          return !!(Ft.isSingleMode && Be !== 1);
        });
        if (Ve)
          return A(K(new Error("Skipping transactional, child is not found or broken"), { additional: { url: V, id: Ve.id } })), Bt((W = v.patch) == null ? void 0 : W.on_failed_actions), !1;
      }
      return v.patch.changes.forEach((Ve) => {
        const Zt = Cr.get(Ve.id);
        Zt && Zt.replaceWith(Ve.id, Ve.items);
      }), Bt(($e = v.patch) == null ? void 0 : $e.on_applied_actions), !0;
    }
    return !1;
  }
  function jt(v, A, V) {
    const ie = (V == null ? void 0 : V.logError) || M;
    if (v) {
      let W;
      typeof ae == "function" ? W = ae(v) : W = ae, fetch(v, W).then(($e) => {
        if (!$e.ok)
          throw new Error("Response is not ok");
        return $e.json();
      }).then(($e) => {
        if (!$e) {
          ie(K(new Error("Incorrect patch"), { additional: { url: v } })), Bt(A == null ? void 0 : A.on_fail_actions, { componentContext: V });
          return;
        }
        Ne($e, ie, v) ? Bt(A == null ? void 0 : A.on_success_actions, { componentContext: V }) : Bt(A == null ? void 0 : A.on_fail_actions, { componentContext: V });
      }).catch(($e) => {
        ie(K(new Error("Failed to download the patch"), { additional: { url: v, originalError: $e } })), Bt(A == null ? void 0 : A.on_fail_actions, { componentContext: V });
      });
    } else
      ie(K(new Error("Missing url in download action"), { additional: { url: v } }));
  }
  function lr(v, A, V) {
    var Zt;
    const ie = (V == null ? void 0 : V.logError) || M;
    if (!v) {
      ie(K(new Error("Missing id in show_tooltip action")));
      return;
    }
    const W = wr.get(v);
    if (!W) {
      ie(K(new Error("Tooltip with the provided id is not found"), { additional: { id: v } }));
      return;
    }
    if (A !== "true" && A !== !0 && st.has(v))
      return;
    st.add(v);
    const $e = {
      internalId: ++ft,
      ownerNode: W.onwerNode,
      desc: W.tooltip,
      timeoutId: 0,
      componentContext: V
    };
    e(3, Et = [...Et, $e]);
    const Ve = (Zt = W.tooltip.duration) != null ? Zt : 5e3;
    Ve && ($e.timeoutId = window.setTimeout(
      () => {
        $e.timeoutId = 0, e(3, Et = Et.filter((Ft) => Ft.internalId !== $e.internalId));
      },
      Ve
    ));
  }
  function rr(v, A) {
    const V = (A == null ? void 0 : A.logError) || M;
    if (!v) {
      V(K(new Error("Missing id in hide_tooltip action")));
      return;
    }
    e(3, Et = Et.filter((ie) => {
      const W = ie.desc.id !== v;
      return !W && ie.timeoutId && (clearTimeout(ie.timeoutId), ie.timeoutId = null), W;
    }));
  }
  function xt(v, A, V, ie, W) {
    const $e = (v == null ? void 0 : v.logError) || M;
    if (!C) {
      $e(K(new Error("Store is not configured")));
      return;
    }
    let Ve = V;
    if (!A || !Ve || !ie || !W) {
      $e(K(new Error("Missing required params for set_stored_value")));
      return;
    }
    if (!Q3.has(ie)) {
      $e(K(new Error("Incorrect stored type")));
      return;
    }
    if (ie === "boolean" && (Ve = Ve === "true" || Ve === "1"), C.set)
      C.set(A, ie, Ve, Number(W));
    else if (C.setValue) {
      if (!Z3.has(ie)) {
        $e(K(new Error("Incorrect stored type")));
        return;
      }
      if (typeof Ve != "string" && typeof Ve != "number" && typeof Ve != "boolean") {
        $e(K(new Error("Incorrect stored value")));
        return;
      }
      (ie === "integer" || ie === "number") && (Ve = Number(Ve)), C.setValue(A, ie, Ve, Number(W));
    }
  }
  function yr(v) {
    Sr(gt(M, v, void 0, !0), v);
  }
  async function Sr(v, A, V) {
    var Zt, Ft;
    const ie = v.scope_id, W = (V == null ? void 0 : V.logError) || M;
    if (ie) {
      const Be = Mr.get(ie);
      if (Be && (Be == null ? void 0 : Be.size) > 1)
        W(K(new Error(`Ambiguous scope id. There are ${Be.size} divs with id '${ie}'`), { additional: { count: Be.size, scopeId: ie } }));
      else if ((Be == null ? void 0 : Be.size) === 1) {
        const tr = Be.values().next().value;
        tr && (V = tr);
      } else {
        W(K(new Error("The scope with the specified scope_id is missing"), { additional: { scopeId: ie } }));
        return;
      }
    }
    const $e = v.url ? String(v.url) : "", Ve = v.typed;
    if ($s(v)) {
      if (Ve)
        switch (Ve.type) {
          case "set_variable": {
            const { variable_name: Be, value: tr } = Ve;
            if (Be && tr) {
              const Vt = (V == null ? void 0 : V.getVariable(Be)) || ne.get(Be);
              Vt ? Vt.getType() === tr.type ? Vt.setValue(tr.value) : W(K(new Error("Trying to set value with invalid type"), { additional: { name: Be, type: tr.type } })) : W(K(new Error("Cannot find variable"), { additional: { name: Be } }));
            } else
              W(K(new Error("Incorrect set_variable action"), { additional: { name: Be } }));
            break;
          }
          case "array_insert_value":
            l3(V, ne, W, Ve);
            break;
          case "array_remove_value":
            a3(V, ne, W, Ve);
            break;
          case "array_set_value":
            u3(V, ne, W, Ve);
            break;
          case "copy_to_clipboard":
            f3(W, Ve);
            break;
          case "focus_element": {
            const Be = Ve.element_id && Dr.get(Ve.element_id);
            Be ? Be.focus() : W(K(new Error("Incorrect focus_element action"), {
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
            c3(V, ne, W, Ve);
            break;
          }
          case "animator_start": {
            const Be = Ve.animator_id && (V == null ? void 0 : V.getAnimator(Ve.animator_id));
            if (!Be) {
              W(K(new Error("Missing animator"), {
                additional: { animator_id: Ve.animator_id }
              }));
              return;
            }
            const { duration: tr, start_delay: Vt, interpolator: Fr, direction: Vr, repeat_count: Kr, start_value: nn, end_value: Cn } = Ve, vn = V ? V.getJsonWithVars(Be) : gt(M, Be), Vn = {
              ...vn,
              end_actions: Be.end_actions,
              cancel_actions: Be.cancel_actions,
              duration: tr !== void 0 ? tr : vn.duration,
              start_delay: Vt !== void 0 ? Vt : vn.start_delay,
              interpolator: Fr !== void 0 ? Fr : vn.interpolator,
              direction: Vr !== void 0 ? Vr : vn.direction,
              repeat_count: Kr !== void 0 ? Kr : vn.repeat_count,
              start_value_typed: nn,
              end_value_typed: Cn
            }, oo = Be.variable_name && ((V == null ? void 0 : V.getVariable(Be.variable_name)) || ne.get(Be.variable_name));
            if (!oo)
              return;
            const Xn = ct.get(Be.id);
            Xn && Xn.stop();
            const Zn = _3(
              Vn,
              oo,
              () => {
                ct.delete(Be.id);
              },
              (Yt, b) => ((V == null ? void 0 : V.execAnyActions) || Bt)(Yt, b)
            );
            Zn && ct.set(Be.id, Zn);
            break;
          }
          case "animator_stop": {
            const Be = ct.get(Ve.animator_id);
            Be && (Be.stop(), ct.delete(Ve.animator_id));
            break;
          }
          case "show_tooltip": {
            lr(Ve.id, Ve.multiple, V);
            break;
          }
          case "hide_tooltip": {
            rr(Ve.id, V);
            break;
          }
          case "timer": {
            ut ? ut.execTimerAction(Ve.id, Ve.action) : W(K(new Error("Incorrect timer action"), {
              additional: {
                id: Ve.id,
                action: Ve.action
              }
            }));
            break;
          }
          case "download": {
            jt(Ve.url, A.typed, V);
            break;
          }
          case "video": {
            hr(Ve.id, Ve.action, V);
            break;
          }
          case "set_stored_value": {
            xt(V, Ve.name, (Zt = Ve.value) == null ? void 0 : Zt.value, (Ft = Ve.value) == null ? void 0 : Ft.type, Ve.lifetime);
            break;
          }
          case "set_state": {
            await or(Ve.state_id, V);
            break;
          }
          case "submit": {
            await Oe(V, Ve, A.typed);
            break;
          }
          case "scroll_to": {
            kt(V, Ve);
            break;
          }
          case "scroll_by": {
            Tt(V, Ve);
            break;
          }
          case "update_structure": {
            w3(V, ne, W, Ve);
            break;
          }
          case "custom": {
            jr({
              ...A,
              // todo remove in major release
              url: ""
            });
            break;
          }
          default:
            W(K(new Error("Unknown type of action"), { additional: { type: Ve.type } }));
        }
      else if ($e)
        try {
          const Be = $e.replace(/div-action:\/\//, ""), tr = /([^?]+)\?(.+)/.exec(Be);
          if (!tr)
            return;
          const Vt = new URLSearchParams(tr[2]);
          switch (tr[1]) {
            case "set_state":
              await or(Vt.get("state_id"), V);
              break;
            case "set_current_item":
            case "set_previous_item":
            case "set_next_item":
            case "scroll_to_start":
            case "scroll_to_end":
            case "scroll_backward":
            case "scroll_forward":
            case "scroll_to_position":
              Mt(tr[1], Vt.get("id"), {
                item: Vt.get("item"),
                step: Vt.get("step"),
                overflow: Vt.get("overflow"),
                animated: Vt.get("animated")
              });
              break;
            case "set_variable":
              const Fr = Vt.get("name"), Vr = Vt.get("value");
              if (Fr && Vr !== null) {
                const Cn = (V == null ? void 0 : V.getVariable(Fr)) || ne.get(Fr);
                Cn ? Cn.set(Vr) : W(K(new Error("Cannot find variable"), { additional: { name: Fr } }));
              } else
                W(K(new Error("Incorrect set_variable_action"), { additional: { url: Be } }));
              break;
            case "timer":
              const Kr = Vt.get("action"), nn = Vt.get("id");
              ut ? ut.execTimerAction(nn, Kr) : W(K(new Error("Incorrect timer action"), {
                additional: { id: nn, action: Kr }
              }));
              break;
            case "video":
              hr(Vt.get("id"), Vt.get("action"), V);
              break;
            case "download":
              jt(Vt.get("url"), A.download_callbacks, V);
              break;
            case "show_tooltip":
              lr(Vt.get("id"), Vt.get("multiple"), V);
              break;
            case "hide_tooltip":
              rr(Vt.get("id"), V);
              break;
            case "set_stored_value": {
              xt(V, Vt.get("name"), Vt.get("value"), Vt.get("type"), Vt.get("lifetime"));
              break;
            }
            default:
              W(K(new Error("Unknown type of action"), { additional: { url: $e } }));
          }
        } catch (Be) {
          W(K(Be, { additional: { url: $e } }));
        }
    }
  }
  async function Bt(v, A = {}) {
    var W;
    if (!v || !Array.isArray(v))
      return;
    const V = ((W = A.componentContext) == null ? void 0 : W.logError) || M, ie = ($e) => A.componentContext ? A.componentContext.getJsonWithVars($e, A.additionalVars, !0) : gt(V, $e, A.additionalVars, !0);
    for (let $e = 0; $e < v.length; ++$e) {
      let Ve = ie(v[$e]);
      const Zt = Ve.is_enabled;
      if (Zt === 0 || Zt === !1)
        continue;
      const Ft = Ve.url;
      if (Ve.typed)
        await Sr(Ve, v[$e], A.componentContext);
      else if (Ft) {
        const tr = Jl(Ft);
        if (tr)
          if (ql(tr, Se)) {
            if (A.processUrls)
              if (Ve.target === "_blank") {
                const Vt = window.open("", "_blank");
                Vt && (Vt.opener = null, Vt.location = Ft);
              } else
                location.href = Ft;
          } else tr === "div-action" ? (await Sr(Ve, v[$e], A.componentContext), await Mn()) : Ve.log_id && (jr(Ve), await Mn());
      } else A.node && Array.isArray(Ve.menu_items) && Ve.menu_items.length && e(4, Lt = {
        items: Ve.menu_items,
        node: A.node,
        componentContext: A.componentContext
      });
    }
    v.forEach(($e) => {
      $e.log_id && Ct(A.logType || "click", $e);
    });
  }
  function jr(v) {
    R == null || R(v);
  }
  function J(v, A) {
    const V = (v == null ? void 0 : v.logError) || M;
    if (!Array.isArray(A) || !A.length)
      return;
    const ie = [];
    return A.forEach((W) => {
      let $e = !1;
      if (typeof W.condition != "string") {
        V(K(new Error("variable_trigger has a condition that is not a string"), {
          additional: { condition: W.condition }
        }));
        return;
      }
      if (!Array.isArray(W.actions)) {
        V(K(new Error("variable_trigger has no actions"), {
          additional: { condition: W.condition }
        }));
        return;
      }
      const Ve = W.mode || "on_condition";
      if (Ve !== "on_variable" && Ve !== "on_condition") {
        V(K(new Error("variable_trigger has an unsupported mode"), { additional: { mode: Ve } }));
        return;
      }
      const Ft = ge(V, { condition: W.condition }, {
        additionalVars: v == null ? void 0 : v.variables,
        customFunctions: v == null ? void 0 : v.customFunctions,
        emptyVarsError: () => {
          V(K(new Error("variable_trigger must have variables in the condition"), {
            additional: { condition: W.condition }
          }));
        }
      }).subscribe(async (Be) => {
        Be.condition !== void 0 && (// if condition is truthy
        Be.condition && // and trigger mode matches
        (Ve === "on_variable" || Ve === "on_condition" && $e === !1) ? ($e = !!Be.condition, v ? await v.execAnyActions(W.actions, { logType: "trigger" }) : await Bt(W.actions, { logType: "trigger" })) : $e = !!Be.condition);
      });
      ie.push(Ft);
    }), () => {
      ie.forEach((W) => {
        W();
      });
    };
  }
  function pt(v) {
    return de[v];
  }
  function Kt(v, A) {
    de[v] = A;
  }
  const At = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Map(), Dr = /* @__PURE__ */ new Map(), wr = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map();
  function qr(v, A, V = "error") {
    if (At.has(v)) {
      M(K(new Error("Duplicate instance id"), {
        level: V,
        additional: { id: v }
      }));
      return;
    }
    At.set(v, A);
  }
  function ir(v) {
    At.delete(v);
  }
  function ot(v) {
    if (!At.has(v)) {
      M(K(new Error("Missing instance with id"), { additional: { id: v } }));
      return;
    }
    return At.get(v);
  }
  function St(v, A) {
    Cr.set(v, A);
  }
  function $t(v) {
    Cr.delete(v);
  }
  function Qt(v, A) {
    Dr.set(v, A);
  }
  function pr(v) {
    Dr.delete(v);
  }
  function dt(v, A) {
    const V = A.id;
    V && (wr.has(V) && M(K(new Error("Duplicate tooltip id"), { additional: { id: V } })), wr.set(V, { onwerNode: v, tooltip: A }));
  }
  function te(v) {
    const A = v.id;
    A && (wr.delete(A), Et.some((V) => V.desc.id === A) && e(3, Et = Et.filter((V) => V.desc.id !== A)));
  }
  function vt(v) {
    const A = Ze.get(v) || Oo(void 0);
    return Ze.has(v) || Ze.set(v, A), A;
  }
  function sr(v, A, V) {
    const ie = Re.get(v);
    if (ie)
      return ie;
    const W = fo(v, A, V);
    return Re.set(v, W), W;
  }
  function vr() {
    if (!Ke)
      return;
    Ke[_e].forEach((A) => {
      const V = ne.get(A.name);
      V && V.setValue(A.color);
    });
  }
  function ur() {
    return Se;
  }
  function E(v, A) {
    const V = h.get(v);
    if (V)
      return new V(A || {});
  }
  function re(v) {
    return {
      variables: Ko(ne, v.variables),
      derviedExpression(A) {
        return v.getDerivedFromVars(A);
      },
      processExpressions(A) {
        return v.getJsonWithVars(A);
      },
      execAction: yr,
      logError: M,
      getComponentProperty(A) {
        return v.getJsonWithVars(v.json[A]);
      },
      direction: le
    };
  }
  function _(v, A) {
    const V = /* @__PURE__ */ new Map(), ie = (A == null ? void 0 : A.logError) || M;
    return v.forEach((W) => {
      if (V) {
        try {
          x2(W);
        } catch (Zt) {
          ie(K(Zt));
          return;
        }
        const $e = W, Ve = V.get($e.name) || [];
        Ve.push($2($e)), V.set($e.name, Ve);
      }
    }), V;
  }
  function j(v) {
    const A = {
      id: "",
      json: {},
      path: [],
      templateContext: {},
      logError(V) {
        V.additional = V.additional || {}, V.additional.path = A.path.join("/"), M(V);
      },
      execAnyActions(V, ie = {}) {
        return Bt(V, {
          componentContext: A,
          processUrls: ie.processUrls,
          node: ie.node,
          logType: ie.logType,
          additionalVars: ie.additionalVars
        });
      },
      getDerivedFromVars(V, ie, W = !1, $e = 1 / 0) {
        return ge(A.logError, V, {
          additionalVars: Ko(A.variables, ie),
          keepComplex: W,
          customFunctions: A.customFunctions,
          maxDepth: $e
        });
      },
      getJsonWithVars(V, ie, W = !1) {
        return gt(A.logError, V, Ko(A.variables, ie), W, A.customFunctions);
      },
      evalExpression(V, ie, W) {
        return Ma(Ko(ne, A.variables), A.customFunctions, V, ie, W);
      },
      produceChildContext(V, ie = {}) {
        const W = j(this);
        let $e = V, Ve = this.templateContext;
        const { templateContext: Zt, json: Ft } = Dt($e, Ve);
        if (W.json = Ft, W.templateContext = Zt, W.origJson = V, W.id = ie.id || Ft.id || "", W.id) {
          let Vt = Mr.get(W.id);
          Vt || (Vt = /* @__PURE__ */ new Set(), Mr.set(W.id, Vt)), Vt.add(W);
        }
        ie.key && (W.key = ie.key), ie.path !== void 0 && W.path.push(String(ie.path)), V.type && !ie.isRootState && W.path.push(V.type), ie.isTooltipRoot && (W.isTooltipRoot = !0);
        let Be;
        Array.isArray(Ft.variables) ? (Be = Ko(this.variables, Ko(ie.variables, /* @__PURE__ */ new Map())), Ft.variables.forEach((Vt) => {
          const Fr = Pt(Vt, W, Be);
          Fr && Be && Be.set(Fr.getName(), Fr);
        })) : ie.variables ? Be = Ko(this.variables, ie.variables) : this.variables && (Be = this.variables), W.variables = Be;
        let tr;
        return Array.isArray(Ft.functions) && (tr = _(Ft.functions, this)), W.customFunctions = e3(this.customFunctions, tr), Array.isArray(Ft.animators) && (W.animators = Ft.animators.reduce(
          (Vt, Fr) => (Fr.id && (Vt[Fr.id] = Fr), Vt),
          {}
        )), ie.fake && (W.fakeElement = ie.fake), ie.isRootState && (W.isRootState = !0), W;
      },
      dup(V) {
        return { ...A, fakeElement: V };
      },
      getVariable(V, ie) {
        var $e;
        const W = (($e = A.variables) == null ? void 0 : $e.get(V)) || ne.get(V);
        if (W) {
          const Ve = W.getType();
          if (ie && Ve !== ie) {
            A.logError(K(new Error(`Variable should have type "${ie}"`), { additional: { name: V, foundType: Ve } }));
            return;
          }
        }
        return W;
      },
      getAnimator(V) {
        var ie, W;
        return ((ie = A.animators) == null ? void 0 : ie[V]) || ((W = A.parent) == null ? void 0 : W.getAnimator(V)) || void 0;
      },
      registerState(V, ie) {
        const W = p3(A.parent);
        return W && (W.states = W.states || {}, W.states[V] = W.states[V] || [], W.states[V].push(ie)), () => {
          var $e;
          ($e = W == null ? void 0 : W.states) != null && $e[V] && (W.states[V] = W.states[V].filter((Ve) => Ve !== ie), W.states[V].length || delete W.states[V]);
        };
      },
      registerPager(V) {
        const ie = A.parent;
        return ie ? (ie.pagers = ie.pagers || /* @__PURE__ */ new Map(), ie.pagers.has(V) ? {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          update() {
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          destroy() {
          }
        } : (ie.pagers.set(V, null), {
          update(W) {
            var Ft, Be;
            ie.pagers && ie.pagers.set(V, W);
            const $e = V ? (Ft = ie.pagerListeners) == null ? void 0 : Ft.get(V) : void 0, Ve = (Be = ie.pagerListeners) == null ? void 0 : Be.get(void 0);
            [...$e || [], ...Ve || []].forEach((tr) => {
              tr(W);
            });
          },
          destroy() {
            ie.pagers && ie.pagers.delete(V);
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
      listenPager(V, ie) {
        var Ft, Be, tr;
        let W = A.parent;
        for (; W && !(W.pagers && (V ? W.pagers.get(V) : (Ft = W.pagers) != null && Ft.size)); )
          W = W.parent;
        if (!W)
          return () => {
          };
        W.pagerListeners = A.pagerListeners || /* @__PURE__ */ new Map();
        const $e = W.pagerListeners.get(V) || [];
        W.pagerListeners.has(V) || W.pagerListeners.set(V, $e), $e.push(ie);
        const Ve = V || ((Be = W.pagers) == null ? void 0 : Be.keys().next().value) || void 0, Zt = (tr = W.pagers) == null ? void 0 : tr.get(Ve);
        return Zt && ie(Zt), () => {
          if (!W.pagerListeners)
            return;
          let Vt = W.pagerListeners.get(Ve);
          Vt && (Vt = Vt.filter((Fr) => Fr !== ie) || [], Vt.length ? W.pagerListeners.set(V, Vt) : W.pagerListeners.delete(V));
        };
      },
      destroy() {
        const V = Mr.get(A.id);
        V && (V.delete(A), V.size || Mr.delete(A.id));
      }
    };
    return v ? (A.parent = v, A.path = v.path.slice(), v.fakeElement && (A.fakeElement = v.fakeElement)) : (A.json = { type: "root" }, A.isRootState = !0), A;
  }
  function Pe(v) {
    ce ? _t.push(v) : clearTimeout(v);
  }
  wi(en, {
    logStat: Ct,
    hasTemplate: ht,
    genId: nt,
    genClass: X,
    execCustomAction: jr,
    processVariableTriggers: J,
    isRunning: pt,
    setRunning: Kt,
    pagerChildrenClipEnabled: N,
    pagerMouseDragEnabled: z,
    registerInstance: qr,
    unregisterInstance: ir,
    registerParentOf: St,
    unregisterParentOf: $t,
    registerTooltip: dt,
    unregisterTooltip: te,
    onTooltipClose: tn,
    tooltipRoot: T,
    registerFocusable: Qt,
    unregisterFocusable: pr,
    addSvgFilter: er,
    removeSvgFilter: Xt,
    registerId: et,
    getComponentId: Le,
    preparePrototypeVariables: Ce,
    getCustomization: pe,
    getBuiltinProtocols: ur,
    getExtension: E,
    getExtensionContext: re,
    registerTimeout: Pe,
    typefaceProvider: Q,
    isDesktop: Ae,
    isPointerFocus: Na,
    customComponents: Y,
    direction: ee,
    videoPlayerProvider: oe,
    awaitGlobalVariable: sr,
    componentDevtool: void 0,
    devtoolCreateHierarchy: "lazy"
  }), wi(Bo, {
    hasAction() {
      return !1;
    }
  }), wi(ka, {
    runVisibilityTransition(v, A, V, ie, W) {
      return Promise.resolve();
    },
    registerChildWithTransitionIn(v, A, V, ie) {
      return Promise.resolve();
    },
    registerChildWithTransitionOut(v, A, V, ie) {
      return Promise.resolve();
    },
    registerChildWithTransitionChange(v, A, V, ie) {
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
  }), wi(Ea, { isEnabled: ii(!0) });
  function He(v, A) {
    const V = ne.get(v);
    return (V == null ? void 0 : V.getType()) === A;
  }
  function Ot(v, A) {
    const V = ne.get(v);
    V ? V.setValue(A) : M(K(new Error("Cannot find variable"), { additional: { name: v } }));
  }
  function H(v, A, V) {
    const ie = (A == null ? void 0 : A.logError) || M, W = v.name, $e = v.value_type;
    if (typeof v.get != "string" || !v.get) {
      ie(K(new Error("Incorrect property getter"), { additional: { name: W } }));
      return;
    }
    if (!W) {
      ie(K(new Error("Missing property name")));
      return;
    }
    if (!$e) {
      ie(K(new Error("Missing property value_type")));
      return;
    }
    const Ve = A ? A.getDerivedFromVars(v.get, void 0, !0) : ge(M, v.get, { keepComplex: !0 });
    if (Wl(Ve) === void 0)
      return;
    const Ft = (Be) => {
      const tr = Ts(v.new_value_variable_name || "new_value", v.value_type, Be), Vt = new Map(V);
      Vt.set(tr.getName(), tr), Array.isArray(v.set) && v.set.length ? A ? A.execAnyActions(v.set, { additionalVars: Vt }) : Bt(v.set, { additionalVars: Vt }) : ie(K(new Error("Cannot set property. No setters provided."), { additional: { name: W } }));
    };
    return {
      getName() {
        return W;
      },
      subscribe(Be) {
        return Ve.subscribe(Be);
      },
      set(Be) {
        const tr = T1(Be, $e);
        Ft(tr);
      },
      setValue: Ft,
      getValue() {
        return Wl(Ve);
      },
      getType() {
        return $e;
      }
    };
  }
  function Pt(v, A, V) {
    if (v.type === "property")
      return H(v, A, V);
    if (!v.type || !v.name || !(v.type in $l) || !("value" in v))
      return;
    const ie = v.value;
    let W = A ? A.getJsonWithVars(ie, V, !0) : gt(M, ie, V, !0);
    if (!(ie && typeof ie == "string" && W === void 0)) {
      v.type === "integer" && typeof W == "number" && (W > Number.MAX_SAFE_INTEGER || W < Number.MIN_SAFE_INTEGER) && M(K(new Error("The value of the integer variable could lose accuracy"), {
        level: "warn",
        additional: { name: v.name, value: W }
      }));
      try {
        return fo(v.name, v.type, W);
      } catch ($e) {
        M(K($e, { additional: { name: v.name } }));
      }
    }
  }
  function lt(v) {
    const A = Pt(v);
    A && (xe.set(v.name, A), ne.set(v.name, A));
  }
  for (const [v, A] of tt)
    ne.has(v) || ne.set(v, A);
  const Ye = (yn = l == null ? void 0 : l.card) == null ? void 0 : yn.variables;
  Array.isArray(Ye) && Ye.forEach((v) => {
    if (v && v.name) {
      if (xe.has(v.name)) {
        M(K(new Error("Duplicate variable"), { additional: { name: v.name } }));
        return;
      }
      lt(v);
    }
  });
  const Ke = l.palette;
  Ke && Ke[_e].forEach((A) => {
    if (xe.has(A.name)) {
      M(K(new Error("Duplicate variable"), { additional: { name: A.name } }));
      return;
    }
    try {
      const V = fo(A.name, "color", A.color);
      xe.set(A.name, V), ne.set(A.name, V);
    } catch (V) {
      M(K(V, { additional: { name: A.name } }));
    }
  }), De.subscribe((v) => {
    if (v && !ne.has(v)) {
      const A = tt.get(v);
      ne.set(v, A);
      const V = Ze.get(v);
      if (V) {
        let W = 0;
        A.subscribe(() => {
          V.set(++W);
        });
      }
      const ie = Re.get(v);
      ie && ie.getType() === A.getType() && A.subscribe((W) => {
        ie.set(W);
      });
    }
  });
  const qt = () => {
    var v;
    J(void 0, (v = l == null ? void 0 : l.card) == null ? void 0 : v.variable_triggers);
  }, kr = (rn = l == null ? void 0 : l.card) == null ? void 0 : rn.timers;
  if (kr && typeof document < "u") {
    const v = ut = new s3({
      logError: M,
      applyVars: (A) => gt(M, A),
      hasVariableWithType: He,
      setVariableValue: Ot,
      execAnyActions: Bt
    });
    kr.forEach((A) => v.createTimer(A));
  }
  const Qr = j();
  Array.isArray((wn = l.card) == null ? void 0 : wn.functions) && (Qr.customFunctions = _(l.card.functions));
  let fn;
  function tn(v) {
    e(3, Et = Et.filter((A) => A.internalId !== v));
  }
  ao(() => {
    Is++, Is === 1 && (window.addEventListener("keydown", ud), window.addEventListener("pointerdown", cd)), Mn().then(() => {
      ce && qt();
    });
  }), cn(() => {
    ce = !1, Is--, Is || (window.removeEventListener("keydown", ud), window.removeEventListener("pointerdown", cd));
    for (const [v, A] of ct)
      A.stop();
    ut && ut.destroy(), Et.forEach((v) => {
      v.timeoutId && (clearTimeout(v.timeoutId), v.timeoutId = null);
    }), _t.forEach((v) => {
      clearTimeout(v);
    });
  });
  const je = () => e(4, Lt = void 0);
  return t.$$set = (v) => {
    "id" in v && e(13, a = v.id), "json" in v && e(11, l = v.json), "platform" in v && e(14, u = v.platform), "theme" in v && e(12, c = v.theme), "globalVariablesController" in v && e(15, f = v.globalVariablesController), "mix" in v && e(0, d = v.mix), "customization" in v && e(16, g = v.customization), "builtinProtocols" in v && e(17, m = v.builtinProtocols), "extensions" in v && e(18, h = v.extensions), "onError" in v && e(19, y = v.onError), "onStat" in v && e(20, w = v.onStat), "onSubmit" in v && e(21, F = v.onSubmit), "onCustomAction" in v && e(22, R = v.onCustomAction), "onComponent" in v && e(23, B = v.onComponent), "typefaceProvider" in v && e(24, Q = v.typefaceProvider), "fetchInit" in v && e(25, ae = v.fetchInit), "tooltipRoot" in v && e(26, T = v.tooltipRoot), "customComponents" in v && e(27, Y = v.customComponents), "direction" in v && e(28, le = v.direction), "store" in v && e(29, C = v.store), "pagerChildrenClipEnabled" in v && e(30, N = v.pagerChildrenClipEnabled), "pagerMouseDragEnabled" in v && e(31, z = v.pagerMouseDragEnabled), "weekStartDay" in v && e(32, O = v.weekStartDay), "videoPlayerProvider" in v && e(33, oe = v.videoPlayerProvider), "devtoolCreateHierarchy" in v && e(34, fe = v.devtoolCreateHierarchy);
  }, t.$$.update = () => {
    var v, A;
    if (t.$$.dirty[0] & /*theme*/
    4096 | t.$$.dirty[1] & /*themeQuery*/
    2048 && (c === "light" || c === "dark" ? e(41, _e = c) : c === "system" ? typeof matchMedia < "u" ? (Te || (e(42, Te = matchMedia("(prefers-color-scheme: dark)")), Te.addListener(Me)), e(41, _e = Te.matches ? "dark" : "light")) : e(41, _e = "light") : M(K(new Error("Unsupported theme")))), t.$$.dirty[1] & /*currentTheme*/
    1024 && _e && vr(), t.$$.dirty[0] & /*json*/
    2048) {
      e(1, he = !1);
      const V = t3(l);
      V && (e(1, he = !0), M(V));
    }
    if (t.$$.dirty[0] & /*json*/
    2048 && (n = l.templates || {}), t.$$.dirty[0] & /*json*/
    2048 && (v = l == null ? void 0 : l.card) != null && v.variables && Array.isArray(l.card.variables) && l.card.variables !== Ye && l.card.variables.forEach((V) => {
      V && V.name && !xe.has(V.name) && !ne.has(V.name) && lt(V);
    }), t.$$.dirty[0] & /*json*/
    2048 && e(44, o = (A = l == null ? void 0 : l.card) == null ? void 0 : A.states), t.$$.dirty[0] & /*hasError, hasIdError*/
    6 | t.$$.dirty[1] & /*states, rootComponentContext*/
    12288 && o && !he && !x) {
      const V = {
        type: "state",
        id: "root",
        width: { type: "match_parent" },
        height: { type: "match_parent" },
        states: o.map((ie) => ({
          state_id: ie.state_id.toString(),
          div: ie.div
        }))
      };
      e(6, fn = Qr.produceChildContext(V, { isRootState: !0 }));
    }
  }, [
    d,
    he,
    x,
    Et,
    Lt,
    It,
    fn,
    i,
    s,
    Ae,
    ee,
    l,
    c,
    a,
    u,
    f,
    g,
    m,
    h,
    y,
    w,
    F,
    R,
    B,
    Q,
    ae,
    T,
    Y,
    le,
    C,
    N,
    z,
    O,
    oe,
    fe,
    Xe,
    Qe,
    Ee,
    it,
    we,
    yr,
    _e,
    Te,
    Qr,
    o,
    je
  ];
}
class e4 extends Hr {
  constructor(r) {
    super(), Rr(
      this,
      r,
      $3,
      X3,
      Tr,
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
const t4 = 8;
class i4 {
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
        if (++o > t4) {
          const i = new Error("Recursive layout in size_provider");
          i.level = "warn", i.additional = {
            widthVariableName: this.widthVariableName,
            heightVariableName: this.heightVariableName
          }, e.logError(i);
          break;
        }
        await Mn();
      }
      this.sizeHistory = {};
    })), (n = this.resizeObserver) == null || n.observe(r), this.recalcProps();
  }
  unmountView(r, e) {
    var n;
    (n = this.resizeObserver) == null || n.disconnect(), this.resizeObserver = void 0;
  }
}
const zi = 8;
class s4 {
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
    (Math.abs(e) > zi || Math.abs(n) > zi) && (Math.abs(e) > Math.abs(n) ? e > zi ? this.processActions("swipe_right") : e < -zi && this.processActions("swipe_left") : n > zi ? this.processActions("swipe_down") : n < -zi && this.processActions("swipe_up"), this.startCoords = void 0);
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
function r4(t) {
  return t instanceof HTMLElement;
}
function a4(t) {
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
      const o = Array.from(e.children).filter(r4);
      o.forEach((d) => {
        d.style.display = "none";
      }), e.setAttribute("data-lottie", "true");
      const i = this.wrapper = document.createElement("div");
      this.wrapper.style.width = "100%", this.wrapper.style.height = "100%";
      const s = this.getRatio(n), a = this.getScale(n);
      s && (this.wrapper.style.aspectRatio = String(s)), this.setWrapperScale(a), e.appendChild(this.wrapper);
      const l = Number((f = n.processExpressions(this.params.repeat_count)) != null ? f : -1), u = n.processExpressions(this.params.repeat_mode), c = () => {
        var g, m;
        (g = this.animItem) == null || g.destroy(), o.forEach((h) => {
          h.style.display = "";
        }), e.removeAttribute("data-lottie"), this.wrapper && ((m = this.wrapper.parentNode) == null || m.removeChild(this.wrapper), this.wrapper = void 0);
        const d = new Error("Failed to load lottie animation");
        d.level = "error", d.additional = {
          url: this.params.lottie_url
        }, n.logError(d);
      };
      this.unsubscribe = n.derviedExpression(this.params.lottie_url).subscribe((d) => {
        this.loadData(d).then((g) => {
          var y;
          (y = this.animItem) == null || y.destroy();
          const m = l !== 0, h = this.animItem = t({
            container: i,
            animationData: g,
            renderer: "svg",
            loop: m,
            rendererSettings: {
              preserveAspectRatio: a.attribute
            }
          });
          if (this.setSvgScale(a), this.animItem.addEventListener("data_failed", c), m && (u === "reverse" || l !== -1)) {
            let w = 1, F = 0;
            h.addEventListener("loopComplete", () => {
              ++F, l !== -1 && F === l + 1 ? (h.stop(), h.goToAndStop(h.totalFrames, !0)) : (u === "reverse" && (w *= -1, h.setDirection(w)), h.goToAndPlay(w === 1 ? 0 : h.totalFrames, !0));
            });
          }
        }).catch(c);
      }), this.isPlayingUnsubscriber = n.derviedExpression(this.params.is_playing).subscribe((d) => {
        this.isPlaying = d !== !1, this.animItem && this.animItem[this.isPlaying ? "play" : "pause"]();
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
function c4(t, r = {}) {
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
      for (let f = 0, d = c.length; f < d; ++f) {
        const g = c[f];
        (g.nodeType !== 1 || g !== s) && i.removeChild(g);
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
function f4(t) {
  const { target: r, hydrate: e, ...n } = t, o = new e4({
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
  s4 as Gesture,
  i4 as SizeProvider,
  o4 as createGlobalVariablesController,
  fo as createVariable,
  a4 as lottieExtensionBuilder,
  c4 as markdownExtensionBuilder,
  f4 as render
};
//# sourceMappingURL=client-hydratable.mjs.map

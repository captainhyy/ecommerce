/* ===== ECOM ENGINE =====
   Chuyển file data (số gốc) thành cấu trúc hiển thị mà index.html dùng: PERIOD, CAT, MONTHLY.
   Mọi chỉ số phái sinh tính ở đây, không lưu trong file data:
     - TikTok Market Share, Top 10 Contribution, Leading Brand, thị phần thương hiệu, Others
     - format số (Tỷ / Tr / Triệu / Nghìn / K / % / pp)
     - CAT.all (cộng các category) và kỳ YTD (cộng các quý trong `parts`)
   Cần nạp trước: data/catalog.js, data/brand_colors.js. Chạy được cả trong trình duyệt và Node.
   Cấu trúc file data: xem .claude/skills/update-ecom-from-raw/reference.md
*/
var ECOM = (function () {
  'use strict';

  /* ---------- tiện ích số ---------- */
  function round(x, d) { var f = Math.pow(10, d); return Math.sign(x) * Math.round(Math.abs(x) * f + 1e-9) / f; }
  function fx(x, d) { return round(x, d).toFixed(d); }
  function trim0(s) { return s.replace(/\.0$/, ''); }
  function isNum(x) { return typeof x === 'number' && isFinite(x); }
  function pctStr(g) { if (!isNum(g)) return ''; var r = Math.round(g); return (r > 0 ? '+' : '') + r + '%'; }
  function growth(cur, pre) { return pre > 0 ? (cur / pre - 1) * 100 : null; }
  function lc(s) { return String(s || '').trim().toLowerCase(); }

  /* ---------- tra cứu ---------- */
  var CATALOG = typeof ECOM_CATALOG !== 'undefined' ? ECOM_CATALOG : null;
  var COLORS = typeof BRAND_COLORS !== 'undefined' ? BRAND_COLORS : {};
  var COLOR_LC = {}, NAME_LC = {};
  Object.keys(COLORS).forEach(function (k) { COLOR_LC[lc(k)] = COLORS[k]; NAME_LC[lc(k)] = k; });
  var warnings = [];
  function warn(msg) { if (warnings.indexOf(msg) < 0) { warnings.push(msg); if (typeof console !== 'undefined') console.warn('[ECOM] ' + msg); } }
  function brandColor(name) {
    var c = COLOR_LC[lc(name)];
    if (!c) { warn('Thương hiệu chưa có màu trong data/brand_colors.js: ' + name); return '#94a3b8'; }
    return c;
  }
  /* Tên chuẩn theo bảng màu (gộp biến thể hoa/thường) */
  function brandName(name) { return NAME_LC[lc(name)] || String(name).trim(); }

  function normRange(r) {
    return String(r).trim().replace(/^<\s*/, '< ').replace(/(\d)\.0M/g, '$1M');
  }

  /* ---------- format hiển thị ---------- */
  function moneyTy(x) { return x >= 1 ? fx(x, 1) + ' tỷ' : fx(x * 1000, 1) + ' triệu'; }        // tỷ → chữ (sub)
  function vndShort(v) {                                                                          // VND → '2.1 Tỷ' / '838.8 Tr'
    if (!isNum(v)) return '';
    return v >= 1e9 ? fx(v / 1e9, 1) + ' Tỷ' : fx(v / 1e6, 1) + ' Tr';
  }
  function priceShort(v) {                                                                        // VND → '31.5K' / '1.2M'
    if (!isNum(v)) return '';
    return v >= 1e6 ? String(parseFloat(fx(v / 1e6, 2))) + 'M' : trim0(fx(v / 1e3, 1)) + 'K';
  }
  function countShort(v) {                                                                        // số lượng → '64.3K' / '850'
    if (!isNum(v)) return '';
    return v >= 1000 ? trim0(fx(v / 1e3, 1)) + 'K' : String(Math.round(v));
  }
  function thousands(v) { return isNum(v) ? Math.round(v).toLocaleString('en-US') : ''; }
  function unitsFmt(v, forceMillion) {                                                            // → [v, u, chữ cho sub]
    if (forceMillion || v >= 1e6) return [fx(v / 1e6, 1), 'Triệu', fx(v / 1e6, 1) + ' triệu'];
    return [fx(v / 1e3, 1), 'Nghìn', fx(v / 1e3, 1) + ' nghìn'];
  }
  function storesFmt(v) {
    if (v >= 1000) return [fx(v / 1e3, 1), 'Nghìn', fx(v / 1e3, 1) + ' nghìn'];
    return [String(Math.round(v)), '', String(Math.round(v))];
  }

  /* ---------- 1 scope: số gốc → cấu trúc hiển thị ---------- */
  function buildScope(r, scKey, isCat, PERIOD) {
    var pre = PERIOD.pre;
    var G = r.gross.cur, Gp = r.gross.pre;

    // Nền tảng
    var plat = CATALOG.platforms.map(function (p) {
      var v = (r.plat && r.plat[p.k]) || [0, 0];
      return { n: p.n, cur: v[0] || 0, pre: v[1] || 0, c: p.c };
    });
    var tt = (r.plat && r.plat.tiktok) || [0, 0];
    var tsCur = G > 0 ? round(tt[0] / G * 100, 1) : 0;
    var tsPre = Gp > 0 ? round((tt[1] || 0) / Gp * 100, 1) : null;
    var tsG = tsPre === null ? '' : (function (d) { return (d > 0 ? '+' : '') + d.toFixed(1) + 'pp'; })(round(tsCur - tsPre, 1));

    // KPI
    var u = unitsFmt(r.units.cur, isCat), up = unitsFmt(r.units.pre, isCat);
    var s = storesFmt(r.stores.cur), sp = storesFmt(r.stores.pre);
    var kpi = [
      { l: 'Gross Sales (VND)', v: fx(G, G < 1 ? 2 : 1), u: 'Tỷ', g: pctStr(isNum(r.gross.g) ? r.gross.g : growth(G, Gp)), sub: 'vs ' + moneyTy(Gp) + ' in ' + pre, ic: 'blue' },
      { l: 'Units Sold', v: u[0], u: u[1], g: pctStr(isNum(r.units.g) ? r.units.g : growth(r.units.cur, r.units.pre)), sub: 'vs ' + up[2] + ' in ' + pre, ic: 'green' },
      { l: 'TikTok Market Share', v: tsCur.toFixed(1) + '%', u: '', g: tsG, sub: tsPre === null ? '' : 'vs ' + tsPre.toFixed(1) + '% in ' + pre, ic: 'teal' },
      { l: 'Active Storefronts', v: s[0], u: s[1], g: pctStr(isNum(r.stores.g) ? r.stores.g : growth(r.stores.cur, r.stores.pre)), sub: 'vs ' + sp[2] + ' in ' + pre, ic: 'orange' }
    ];

    // Thương hiệu: top 5 + Others, thị phần = doanh số ÷ Gross Sales
    var named = (r.brand || []).filter(function (b) { return lc(b[0]) !== 'others'; })
      .slice().sort(function (a, b) { return b[1] - a[1]; }).slice(0, 5);
    var brand = named.map(function (b) {
      var nm = brandName(b[0]);
      return { n: nm, cur: G > 0 ? round(b[1] / G * 100, 1) : 0, pre: (isNum(b[2]) && Gp > 0) ? round(b[2] / Gp * 100, 1) : 0, c: brandColor(nm) };
    });
    var sc = brand.reduce(function (a, b) { return a + b.cur; }, 0), sp2 = brand.reduce(function (a, b) { return a + b.pre; }, 0);
    brand.push({ n: 'Others', cur: round(Math.max(0, 100 - sc), 1), pre: round(Math.max(0, 100 - sp2), 1), c: brandColor('Others') });

    // Phân khúc giá: 18 khoảng chuẩn, bỏ các khoảng 0 ở đuôi
    var pmap = {};
    Object.keys(r.price || {}).forEach(function (k) { var nk = normRange(k); pmap[nk] = (pmap[nk] || 0) + (r.price[k] || 0); });
    var price = CATALOG.priceRanges.map(function (k) { return { r: k, s: round(pmap[k] || 0, 2), l: 0, t: 0 }; });
    Object.keys(pmap).forEach(function (k) {
      if (CATALOG.priceRanges.indexOf(k) < 0) { warn('Khoảng giá không chuẩn "' + k + '" (' + PERIOD.cur + ')'); price.push({ r: k, s: round(pmap[k], 2), l: 0, t: 0 }); }
    });
    while (price.length > 1 && price[price.length - 1].s === 0) price.pop();

    // Top SKU
    var prodRaw = (r.prod || []).slice(0, 10);
    var prod = prodRaw.map(function (p) {
      return {
        n: p.n, sc: p.sc || scKey, br: p.br ? brandName(p.br) : 'OEM', ch: p.ch, pr: priceShort(p.pr), fm: p.fm || '',
        rv: vndShort(p.rv), g: pctStr(p.g), us: countShort(p.us), ug: pctStr(p.ug),
        tr: vndShort(p.tr), tu: countShort(p.tu), re: thousands(p.re), url: p.url || ''
      };
    });

    // dkpi
    var top10 = prodRaw.reduce(function (a, p) { return a + (p.rv || 0); }, 0);
    var top10Pct = G > 0 ? top10 / (G * 1e9) * 100 : 0;
    var lead = brand[0] && brand[0].n !== 'Others' ? brand[0] : null;
    var leadCnt = lead ? prod.filter(function (p) { return lc(p.br) === lc(lead.n); }).length : 0;
    var dkpi = [
      { l: kpi[0].l, v: kpi[0].v, u: kpi[0].u, g: kpi[0].g, ic: 'blue' },
      { l: 'Top 10 Contribution', v: '~' + trim0(fx(top10Pct, 1)) + '%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' },
      kpi[2],
      { l: 'Leading Brand', v: lead ? lead.n + ' (' + lead.cur.toFixed(1) + '%)' : 'N/A', u: '', g: '', sub: leadCnt + '/' + prod.length + ' Top SKU Spots', ic: 'orange' }
    ];

    return { kpi: kpi, dkpi: dkpi, plat: plat, brand: brand, price: price, prod: prod };
  }

  /* ---------- cộng nhiều scope số gốc ----------
     mode 'period': cộng các quý (YTD) — SKU trùng url thì cộng doanh thu, lượt bán.
     mode 'cats'  : cộng các category cùng kỳ (CAT.all) — SKU trùng url chỉ lấy 1 lần. */
  function sumPair(list, key) {
    return {
      cur: list.reduce(function (a, r) { return a + (r[key].cur || 0); }, 0),
      pre: list.reduce(function (a, r) { return a + (r[key].pre || 0); }, 0)
    };
  }
  function aggregate(list, mode) {
    var out = { gross: sumPair(list, 'gross'), units: sumPair(list, 'units'), stores: sumPair(list, 'stores'), plat: {}, brand: [], price: {}, prod: [] };
    var bmap = {};
    list.forEach(function (r) {
      Object.keys(r.plat || {}).forEach(function (k) {
        var o = out.plat[k] || (out.plat[k] = [0, 0]);
        o[0] += r.plat[k][0] || 0; o[1] += r.plat[k][1] || 0;
      });
      (r.brand || []).forEach(function (b) {
        if (lc(b[0]) === 'others') return;
        var key = lc(b[0]);
        var o = bmap[key] || (bmap[key] = [brandName(b[0]), 0, null]);
        o[1] += b[1] || 0;
        if (isNum(b[2])) o[2] = (o[2] || 0) + b[2];
      });
      Object.keys(r.price || {}).forEach(function (k) { var nk = normRange(k); out.price[nk] = (out.price[nk] || 0) + (r.price[k] || 0); });
    });
    out.brand = Object.keys(bmap).map(function (k) { return bmap[k]; });

    // SKU
    var pmap = {}, order = [];
    list.forEach(function (r, idx) {
      (r.prod || []).forEach(function (p) {
        var key = p.url || (p.n + '|' + p.ch);
        var e = pmap[key];
        if (!e) {
          e = pmap[key] = { p: Object.assign({}, p), rv: 0, us: 0, rvPre: 0, usPre: 0, gOk: true, ugOk: true };
          order.push(key);
        } else if (mode === 'cats') {
          return; // cùng kỳ: đã có SKU này ở category khác
        } else {
          Object.assign(e.p, p, { rv: e.p.rv, us: e.p.us }); // lấy thông tin quý mới nhất
        }
        e.rv += p.rv || 0; e.us += p.us || 0;
        if (isNum(p.g)) e.rvPre += (p.rv || 0) / (1 + p.g / 100); else e.gOk = false;
        if (isNum(p.ug)) e.usPre += (p.us || 0) / (1 + p.ug / 100); else e.ugOk = false;
      });
    });
    out.prod = order.map(function (k) {
      var e = pmap[k], p = e.p;
      p.rv = e.rv; p.us = e.us;
      if (mode === 'period') {
        p.g = e.gOk && e.rvPre > 0 ? growth(e.rv, e.rvPre) : null;
        p.ug = e.ugOk && e.usPre > 0 ? growth(e.us, e.usPre) : null;
      }
      return p;
    }).sort(function (a, b) { return (b.rv || 0) - (a.rv || 0); });
    return out;
  }

  /* YTD: gộp các quý thành 1 bộ data số gốc */
  function mergePeriods(parts) {
    var cats = {};
    parts.forEach(function (d) {
      Object.keys(d.cats).forEach(function (ck) {
        Object.keys(d.cats[ck]).forEach(function (sk) {
          ((cats[ck] = cats[ck] || {})[sk] = cats[ck][sk] || []).push(d.cats[ck][sk]);
        });
      });
    });
    var out = {};
    Object.keys(cats).forEach(function (ck) {
      out[ck] = {};
      Object.keys(cats[ck]).forEach(function (sk) { out[ck][sk] = aggregate(cats[ck][sk], 'period'); });
    });
    return out;
  }

  /* ---------- dựng CAT cho 1 kỳ ---------- */
  function build(p) {
    var DATA = typeof ECOM_DATA !== 'undefined' ? ECOM_DATA : {};
    var def = DATA[p];
    if (!def) throw new Error('Không có data cho kỳ "' + p + '"');
    var PERIOD = def.period, rawCats, MONTHLY;
    if (def.parts) {
      var parts = def.parts.map(function (q) {
        if (!DATA[q]) throw new Error('Kỳ ' + p + ' cần data kỳ "' + q + '"');
        return DATA[q];
      });
      rawCats = mergePeriods(parts);
      MONTHLY = def.monthly || parts.reduce(function (a, d) { return a.concat(d.monthly || []); }, []);
    } else {
      rawCats = def.cats;
      MONTHLY = def.monthly || [];
    }

    var CAT = {}, catRaw = [];
    CATALOG.cats.forEach(function (c) {
      var rc = rawCats[c.k];
      if (!rc) return;
      if (!rc.all) { warn(c.n + ' có sub-category nhưng thiếu cấp category (all) → bỏ qua'); return; }
      var obj = Object.assign({ n: c.n, i: c.i, sc: [{ k: 'all', n: 'All', i: '📊' }] }, buildScope(rc.all, 'all', true, PERIOD));
      var sdata = {};
      c.subs.forEach(function (s) {
        if (!rc[s.k]) return;
        obj.sc.push({ k: s.k, n: s.n, i: s.i });
        sdata[s.k] = buildScope(rc[s.k], s.k, false, PERIOD);
      });
      Object.keys(rc).forEach(function (sk) {
        if (sk !== 'all' && !sdata[sk]) warn('Sub-category "' + c.k + '.' + sk + '" chưa có trong data/catalog.js');
      });
      if (Object.keys(sdata).length) obj.sdata = sdata;
      CAT[c.k] = obj;
      catRaw.push(rc.all);
    });
    Object.keys(rawCats).forEach(function (ck) {
      if (!CATALOG.cats.some(function (c) { return c.k === ck; })) warn('Category "' + ck + '" chưa có trong data/catalog.js');
    });

    if (catRaw.length) {
      var all = Object.assign({ n: 'All Cate', i: '🌐', sc: [{ k: 'all', n: 'All', i: '📊' }] }, buildScope(aggregate(catRaw, 'cats'), 'all', true, PERIOD));
      CAT = Object.assign({ all: all }, CAT);
    }
    return { PERIOD: PERIOD, CAT: CAT, MONTHLY: MONTHLY, RAW: rawCats };
  }

  return { build: build, warnings: warnings, aggregate: aggregate, buildScope: buildScope, brandColor: brandColor, normRange: normRange };
})();

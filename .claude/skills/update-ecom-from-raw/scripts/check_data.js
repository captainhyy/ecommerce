// Kiểm tra 1 file data/2026/ecom_data_*.js (schema số gốc) sau khi sửa.
// Cách chạy (từ gốc repo): node .claude/skills/update-ecom-from-raw/scripts/check_data.js data/2026/ecom_data_q3.js
// Không truyền file → kiểm tra mọi file data/2026/ecom_data_*.js.
// Thoát với mã 1 nếu có lỗi (ERR). WARN là cảnh báo cần xem lại.
const fs = require('fs'), path = require('path'), vm = require('vm');

function findRoot(start) {
  let d = path.resolve(start);
  while (d !== path.dirname(d)) { if (fs.existsSync(path.join(d, 'data', 'catalog.js'))) return d; d = path.dirname(d); }
  throw new Error('Không tìm thấy gốc repo (thư mục có data/catalog.js)');
}

function checkFile(file) {
  const ROOT = findRoot(path.dirname(file));
  const P = (path.basename(file).match(/^ecom_data_([a-z0-9]+)\.js$/) || [])[1];
  const errs = [], warns = [];
  if (!P) { console.log('ERR: tên file phải có dạng ecom_data_<kỳ>.js'); return 1; }
  const src = fs.readFileSync(file, 'utf8');
  if (/^(const|let)\s/m.test(src)) errs.push('Có khai báo top-level bằng const/let — phải dùng var');

  // Nạp như trong trình duyệt: catalog → màu → file kỳ (+ các kỳ thành phần) → engine
  const engineWarns = [];
  const ctx = { console: { warn: m => engineWarns.push(String(m).replace(/^\[ECOM\] /, '')), log() {}, error() {} } };
  ctx.document = { write(html) { const m = html.match(/src="([^"]+)"/); if (m) run(path.join(ROOT, m[1])); } };
  vm.createContext(ctx);
  function run(f) {
    try { vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f }); }
    catch (e) { errs.push(`${path.relative(ROOT, f)}: không chạy được — ${e.message}`); }
  }
  run(path.join(ROOT, 'data/catalog.js'));
  run(path.join(ROOT, 'data/brand_colors.js'));
  run(file);
  run(path.join(ROOT, 'data/ecom_engine.js'));
  if (errs.length) return report(P, null, errs, warns);

  const def = ctx.ECOM_DATA && ctx.ECOM_DATA[P];
  if (!def) { errs.push(`File không khai báo ECOM_DATA.${P}`); return report(P, null, errs, warns); }
  if (!def.period || !def.period.cur || !def.period.pre) errs.push('Thiếu period.cur / period.pre');

  const CATALOG = ctx.ECOM_CATALOG;
  const PLAT_KEYS = CATALOG.platforms.map(p => p.k);
  const isNum = x => typeof x === 'number' && isFinite(x);
  const near = (a, b, tol) => Math.abs(a - b) <= tol;

  function checkRaw(name, r, isCat) {
    for (const k of ['gross', 'units', 'stores']) {
      if (!r[k] || !isNum(r[k].cur) || !isNum(r[k].pre)) errs.push(`${name}: ${k} phải có dạng { cur: số, pre: số, g?: số }`);
      else if (r[k].g !== undefined && r[k].g !== null && !isNum(r[k].g)) errs.push(`${name}: ${k}.g phải là số`);
    }
    if (!r.plat) errs.push(`${name}: thiếu plat`);
    else Object.keys(r.plat).forEach(k => { if (!PLAT_KEYS.includes(k)) errs.push(`${name}: plat có key lạ "${k}" (chỉ dùng ${PLAT_KEYS.join(', ')})`); });
    if (!Array.isArray(r.brand)) errs.push(`${name}: thiếu brand`);
    if (!r.price) errs.push(`${name}: thiếu price`);
    if (!Array.isArray(r.prod)) errs.push(`${name}: thiếu prod`);
    if (errs.length) return;

    const G = r.gross.cur, Gp = r.gross.pre;
    const platCur = Object.values(r.plat).reduce((a, v) => a + (v[0] || 0), 0);
    const platPre = Object.values(r.plat).reduce((a, v) => a + (v[1] || 0), 0);
    if (!near(platCur, G, G * 0.02 + 0.05)) warns.push(`${name}: tổng plat kỳ này ${platCur.toFixed(2)} ≠ Gross ${G}`);
    if (Gp && !near(platPre, Gp, Gp * 0.02 + 0.05)) warns.push(`${name}: tổng plat cùng kỳ ${platPre.toFixed(2)} ≠ Gross cùng kỳ ${Gp}`);
    const priceSum = Object.values(r.price).reduce((a, v) => a + (v || 0), 0);
    if (!near(priceSum, G, G * 0.02 + 0.05)) warns.push(`${name}: tổng price ${priceSum.toFixed(2)} ≠ Gross ${G} (MG khác kỳ hoặc khác bộ từ khoá?)`);
    Object.keys(r.price).forEach(k => { if (!CATALOG.priceRanges.includes(ctx.ECOM.normRange(k))) warns.push(`${name}: khoảng giá không chuẩn "${k}"`); });
    r.brand.forEach(b => {
      if (!Array.isArray(b) || typeof b[0] !== 'string' || !isNum(b[1]) || !(b[2] === null || isNum(b[2]))) errs.push(`${name}: brand phải có dạng [tên, số, số|null], gặp ${JSON.stringify(b)}`);
    });
    const bSum = r.brand.filter(b => isNum(b[1])).sort((a, b) => b[1] - a[1]).slice(0, 5).reduce((a, b) => a + b[1], 0);
    if (bSum > G * 1.001) errs.push(`${name}: tổng doanh số top 5 thương hiệu ${bSum.toFixed(2)} > Gross ${G}`);
    if (r.brand.length > 5) warns.push(`${name}: brand có ${r.brand.length} dòng — engine chỉ dùng 5 dòng cao nhất`);
    r.prod.forEach((p, i) => {
      const at = `${name}: prod[${i}]`;
      if (!p.n) errs.push(`${at} thiếu tên`);
      if (!PLAT_KEYS.includes(p.ch)) errs.push(`${at} ch "${p.ch}" không hợp lệ`);
      for (const f of ['pr', 'rv']) if (!isNum(p[f])) errs.push(`${at} ${f} phải là số (VND)`);
      for (const f of ['g', 'us', 'ug', 'tr', 'tu', 're']) if (p[f] !== null && p[f] !== undefined && !isNum(p[f])) errs.push(`${at} ${f} phải là số hoặc null`);
      if (isNum(p.rv) && p.rv < 1e5) warns.push(`${at} rv = ${p.rv} — có phải VND không?`);
      if (/^(others|generic|oem\/khác)$/i.test(p.br || '')) warns.push(`${at} br "${p.br}" → dùng 'OEM' cho SKU không có thương hiệu`);
      if (!p.url) warns.push(`${at} thiếu url`);
      else if (/shop-vn\.tiktok\.com\/pdp|shopee\.vn\/[^/]+-i\.\d+\.\d+/.test(p.url)) warns.push(`${at} url chưa chuẩn hoá`);
      if (i > 0 && isNum(p.rv) && isNum(r.prod[i - 1].rv) && p.rv > r.prod[i - 1].rv) warns.push(`${at} chưa sắp theo doanh thu giảm dần`);
    });
    if (r.prod.length !== 10) warns.push(`${name}: prod có ${r.prod.length} SKU (thường là 10)`);
  }

  if (def.parts) {
    console.log(`${P}: kỳ cộng dồn từ ${def.parts.join(' + ')}`);
    def.parts.forEach(q => { if (!ctx.ECOM_DATA[q]) errs.push(`Thiếu data kỳ thành phần "${q}"`); });
  } else {
    if (!def.cats) errs.push('Thiếu cats');
    if (def.monthly && !Array.isArray(def.monthly)) errs.push('monthly phải là mảng');
    for (const [ck, c] of Object.entries(def.cats || {})) {
      if (!c.all) errs.push(`${ck}: thiếu scope "all" (cấp category) — category chỉ có sub-category sẽ bị bỏ qua`);
      for (const [sk, r] of Object.entries(c)) checkRaw(sk === 'all' ? ck : `${ck}.${sk}`, r, sk === 'all');
    }
  }
  if (errs.length) return report(P, null, errs, warns);

  let B;
  try { B = ctx.ECOM.build(P); } catch (e) { errs.push('Engine lỗi: ' + e.message); return report(P, null, errs, warns); }
  engineWarns.forEach(w => {
    if (/^Khoảng giá không chuẩn/.test(w)) { if (def.parts) warns.push(w); return; } // kỳ thường: đã báo theo từng scope ở trên
    (/chưa có màu|chưa có trong data\/catalog/.test(w) ? errs : warns).push(w);
  });

  // Trùng màu trong cùng 1 biểu đồ Brand Landscape (sau khi engine chọn top 5)
  for (const [ck, c] of Object.entries(B.CAT)) {
    for (const [sk, d] of [['', c], ...Object.entries(c.sdata || {})]) {
      const seen = {};
      d.brand.filter(b => b.n !== 'Others').forEach(b => {
        if (seen[b.c]) warns.push(`${ck}${sk ? '.' + sk : ''}: "${b.n}" và "${seen[b.c]}" cùng màu ${b.c} trong 1 biểu đồ`);
        seen[b.c] = b.n;
      });
    }
  }
  return report(P, B, errs, warns);
}

function report(P, B, errs, warns) {
  if (B) {
    console.log(`${P}: ${B.PERIOD.cur} vs ${B.PERIOD.pre} | MONTHLY: ${B.MONTHLY.length} tháng`);
    for (const [k, c] of Object.entries(B.CAT)) if (k !== 'all') console.log(`  ${k}: ${c.sc.map(s => s.k).join(', ')}`);
    if (B.CAT.all) console.log('  Tất cả:', B.CAT.all.kpi.map(x => `${x.l}=${x.v}${x.u ? ' ' + x.u : ''} (${x.g})`).join(' | '));
  }
  warns.forEach(w => console.log('WARN:', w));
  errs.forEach(e => console.log('ERR:', e));
  console.log(errs.length ? `FAIL (${errs.length} lỗi)` : `OK (${warns.length} cảnh báo)`);
  return errs.length ? 1 : 0;
}

let files = process.argv.slice(2);
if (!files.length) {
  const dir = path.join(findRoot(process.cwd()), 'data', '2026');
  files = fs.readdirSync(dir).filter(f => /^ecom_data_.+\.js$/.test(f)).map(f => path.join(dir, f));
}
let code = 0;
files.forEach((f, i) => { if (i) console.log(''); code |= checkFile(f); });
process.exit(code);

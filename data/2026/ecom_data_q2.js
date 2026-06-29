/* ===== PERIOD CONFIG ===== */
var PERIOD = {
  cur: 'Q2 2026',
  pre: 'Q2 2025',
  label: 'Strategic Report Q2 2026'
};

/* ===== DATA ===== */
var CAT = {
  but_viet: {
    n: 'Bút Viết', i: '🖊️',
    sc: [{ k: 'all', n: 'All', i: '📊' }, { k: 'but_bi', n: 'Bút Bi', i: '🖊️' }, { k: 'but_gel', n: 'Bút Gel', i: '✒️' }],
    kpi: [],
    dkpi: [],
    plat: [],
    brand: [],
    price: [],
    prod: [],
    sdata: {
      but_bi: {
        kpi: [
          { l: 'Gross Sales (VND)', v: '29.7', u: 'Tỷ', g: '+25%', sub: 'vs 23.7 tỷ in Q2 2025', ic: 'blue' },
          { l: 'Units Sold', v: '914.8', u: 'Nghìn', g: '-32%', sub: 'vs 1.3 triệu in Q2 2025', ic: 'green' },
          { l: 'TikTok Market Share', v: '35.3%', u: '', g: '+5.5pp', sub: 'vs 29.8% in Q2 2025', ic: 'teal' },
          { l: 'Active Storefronts', v: '3.6', u: 'Nghìn', g: '-3%', sub: 'vs 3.7 nghìn in Q2 2025', ic: 'orange' }
        ],
        dkpi: [
          { l: 'Gross Sales (VND)', v: '29.7', u: 'Tỷ', g: '+25%', ic: 'blue' },
          { l: 'Top 10 Contribution', v: '~16.5%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' },
          { l: 'TikTok Market Share', v: '35.3%', u: '', g: '+5.5pp', sub: 'vs 29.8% in Q2 2025', ic: 'teal' },
          { l: 'Leading Brand', v: 'TL (42.1%)', u: '', g: '', sub: '7/10 Top SKU Spots', ic: 'orange' }
        ],
        plat: [
          { n: 'Shopee', cur: 18.6, pre: 15.5, c: '#f97316' },
          { n: 'TikTok Shop', cur: 10.5, pre: 7.047, c: '#0f172a' },
          { n: 'Lazada', cur: 0.6245, pre: 1.1152, c: '#3b82f6' },
          { n: 'Tiki', cur: 0.0115, pre: 0.0209, c: '#1a94ff' }
        ],
        brand: [
          { n: 'Thiên Long', cur: 42.1, pre: 37.1, c: '#1a56db' },
          { n: 'Deli', cur: 6.4, pre: 6.5, c: '#ef4444' },
          { n: 'G-Star', cur: 3.3, pre: 3.6, c: '#10b981' },
          { n: 'Flexoffice', cur: 1.9, pre: 0, c: '#8b5cf6' },
          { n: 'Aihao', cur: 1.3, pre: 3.2, c: '#f97316' },
          { n: 'Others', cur: 45, pre: 49.5, c: '#cbd5e1' }
        ],
        price: [
          { r: '< 10K', s: 0.78, l: 0, t: 0 },
          { r: '10K-30K', s: 7.708, l: 0, t: 0 },
          { r: '30K-50K', s: 6.411, l: 0, t: 0 },
          { r: '50K-75K', s: 3.962, l: 0, t: 0 },
          { r: '75K-100K', s: 4.507, l: 0, t: 0 },
          { r: '100K-150K', s: 3.48, l: 0, t: 0 },
          { r: '150K-200K', s: 0.903, l: 0, t: 0 },
          { r: '200K-350K', s: 0.944, l: 0, t: 0 },
          { r: '350K-500K', s: 0.113, l: 0, t: 0 },
          { r: '500K-750K', s: 0.216, l: 0, t: 0 },
          { r: '750K-1M', s: 0.48, l: 0, t: 0 },
          { r: '1M-1.5M', s: 0.084, l: 0, t: 0 }
        ],
        prod: [
          { n: 'Combo 5 10 20 Bút bi màu pastel PRO 027 Thiên Long TL-105', sc: 'but_bi', br: 'Thiên Long', ch: 'tiktok', pr: '32.2K', fm: 'Combo', rv: '1.1 Tỷ', g: '-20%', us: '31.6K', ug: '-7%', tr: '5.8 Tỷ', tu: '192.2K', re: '15,436', url: 'https://www.tiktok.com/view/product/1729758198371814393' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long Pro 027 TL-105 - 3 màu mực', sc: 'but_bi', br: 'Thiên Long', ch: 'shopee', pr: '30.5K', fm: 'Combo', rv: '826.9 Tr', g: '-7%', us: '28.5K', ug: '-3%', tr: '4.9 Tỷ', tu: '183.0K', re: '35,588', url: 'https://shopee.vn/product/101480242/21193760161' },
          { n: 'Combo 20 Bút bi Thiên Long 027 Pro ngòi 0.5mm mực xanh đen', sc: 'but_bi', br: 'Thiên Long', ch: 'tiktok', pr: '109.7K', fm: 'Combo', rv: '478.7 Tr', g: '-25%', us: '4.4K', ug: '-26%', tr: '3.0 Tỷ', tu: '31.3K', re: '2,855', url: 'https://www.tiktok.com/view/product/1729758201010228217' },
          { n: 'Combo Bút bi Thiên Long Pro 027 TL-105 màu pastel ngòi 0.5mm', sc: 'but_bi', br: 'Thiên Long', ch: 'shopee', pr: '27K', fm: 'Combo', rv: '459.7 Tr', g: '-26%', us: '18.2K', ug: '-17%', tr: '2.8 Tỷ', tu: '114.7K', re: '21,965', url: 'https://shopee.vn/product/368671137/23577091247' },
          { n: 'Combo 20 Bút bi Thiên Long TL-027 ngòi 0.5mm - Bút bi viết 4 màu', sc: 'but_bi', br: 'Thiên Long', ch: 'shopee', pr: '94K', fm: 'Combo', rv: '395.8 Tr', g: '+5%', us: '4.6K', ug: '+2%', tr: '5.3 Tỷ', tu: '79.7K', re: '14,902', url: 'https://shopee.vn/product/368671137/16065421545' },
          { n: 'Combo 20 Bút bi Thiên Long 027 Pro ngòi 0.5mm mực xanh đen (160K)', sc: 'but_bi', br: 'Thiên Long', ch: 'shopee', pr: '160K', fm: 'Combo', rv: '371.6 Tr', g: '+27%', us: '3.5K', ug: '+31%', tr: '1.4 Tỷ', tu: '13.4K', re: '2,452', url: 'https://shopee.vn/product/101480242/22056666298' },
          { n: 'Hộp 12 24 48 Cây Bút Bi Bấm Todo Suyo Gstar Mực Xanh Ngòi 0.7mm', sc: 'but_bi', br: 'G-Star', ch: 'tiktok', pr: '105.9K', fm: 'Combo', rv: '342.8 Tr', g: '+6%', us: '3.2K', ug: '+3%', tr: '1.3 Tỷ', tu: '13.1K', re: '700', url: 'https://www.tiktok.com/view/product/1731655653452318567' },
          { n: 'DEAL SỐC Combo 5 10 20 Bút bi đầu màu pastel Deli EQ32', sc: 'but_bi', br: 'Deli', ch: 'tiktok', pr: '21.9K', fm: 'Combo', rv: '327.9 Tr', g: '-48%', us: '11.2K', ug: '-37%', tr: '958.6 Tr', tu: '29.1K', re: '1,686', url: 'https://www.tiktok.com/view/product/1733976532781139583' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long TL-027 mực xanh đỏ đen tím', sc: 'but_bi', br: 'Thiên Long', ch: 'shopee', pr: '25K', fm: 'Combo', rv: '306.1 Tr', g: '-12%', us: '13.7K', ug: '-11%', tr: '2.7 Tỷ', tu: '135.8K', re: '24,276', url: 'https://shopee.vn/product/101480242/23576151410' },
          { n: 'Combo 10 Bút bi Thiên Long TL-095 mực xanh', sc: 'but_bi', br: 'Thiên Long', ch: 'shopee', pr: '93K', fm: 'Combo', rv: '294.7 Tr', g: '+970%', us: '3.2K', ug: '+968%', tr: '374.9 Tr', tu: '4.2K', re: '212', url: 'https://shopee.vn/product/368671137/11556561855' }
        ]
      }
    }
  }
};

/* ===== MONTHLY TREND DATA (Q2 2026 — Apr to Jun) =====
   rv = Gross Revenue (tỷ VND) | ts = TikTok Share (%) | pre_* = same month prev year
*/
var MONTHLY = [];

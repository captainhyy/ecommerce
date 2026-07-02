/* ===== PERIOD CONFIG ===== */
var PERIOD = {
  cur: 'YTD H1 2026',
  pre: 'YTD H1 2025',
  label: 'Strategic Report YTD H1 2026'
};

/* ===== DATA (YTD H1 2026 = Q1 2026 + Q2 2026 merged) ===== */
var CAT = {
  but_viet: {
    n: 'Bút Viết', i: '🖊️',
    sc: [{ k: 'all', n: 'All', i: '📊' }, { k: 'but_bi', n: 'Bút Bi', i: '🖊️' }, { k: 'but_gel', n: 'Bút Gel', i: '✒️' }],
    kpi: [{ l: 'Gross Sales (VND)', v: '213.2', u: 'Tỷ', g: '+36%', sub: 'vs 156.5 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '6.8', u: 'Triệu', g: '-44%', sub: 'vs 12.1 triệu in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '37.9%', u: '', g: '+5.9pp', sub: 'vs 32% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '12', u: 'Nghìn', g: '-6%', sub: 'vs 12.7 nghìn in YTD H1 2025', ic: 'orange' }],
    dkpi: [{ l: 'Gross Sales (VND)', v: '213.2', u: 'Tỷ', g: '+36%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~6%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '37.9%', u: '', g: '+5.9pp', sub: 'vs 32% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'TL (20.2%)', u: '', g: '', sub: '7/10 Top SKU Spots', ic: 'orange' }],
    plat: [{ n: 'Shopee', cur: 129.4, pre: 100.98, c: '#f97316' }, { n: 'TikTok Shop', cur: 80.8, pre: 50.02, c: '#0f172a' }, { n: 'Lazada', cur: 2.8, pre: 5.3, c: '#3b82f6' }],
    brand: [{ n: 'Thiên Long', cur: 20.22, pre: 16.62, c: '#1a56db' }, { n: 'Deli', cur: 10.78, pre: 10.2, c: '#ef4444' }, { n: 'G-Star', cur: 1.95, pre: 2.25, c: '#10b981' }, { n: 'Bossee', cur: 1.95, pre: 1.02, c: '#f97316' }, { n: 'Classmate', cur: 1.88, pre: 1.02, c: '#8b5cf6' }, { n: 'Others', cur: 63.22, pre: 68.9, c: '#cbd5e1' }],
    price: [{ r: '< 10K', s: 10.09, l: 0, t: 0 }, { r: '10K-30K', s: 52.02, l: 0, t: 0 }, { r: '30K-50K', s: 48, l: 0, t: 0 }, { r: '50K-75K', s: 34.09, l: 0, t: 0 }, { r: '75K-100K', s: 28.91, l: 0, t: 0 }, { r: '100K-150K', s: 14.84, l: 0, t: 0 }, { r: '150K-200K', s: 5.67, l: 0, t: 0 }, { r: '200K-350K', s: 6.91, l: 0, t: 0 }, { r: '350K-500K', s: 5.38, l: 0, t: 0 }, { r: '500K-750K', s: 1.56, l: 0, t: 0 }, { r: '750K-1M', s: 1.14, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.74, l: 0, t: 0 }, { r: '1.5M-2M', s: 0.38, l: 0, t: 0 }, { r: '2M-3.5M', s: 0.27, l: 0, t: 0 }, { r: '3.5M-5M', s: 0.1, l: 0, t: 0 }, { r: '5M-7.5M', s: 0.1, l: 0, t: 0 }, { r: '7.5M-10M', s: 0.11, l: 0, t: 0 }, { r: '10M-15M', s: 0.02, l: 0, t: 0 }],
    prod: [
      { n: 'Combo 5 10 20 Bút gel Fasgel GEL-068', sc: 'but_gel', br: 'Thiên Long', ch: 'tiktok', pr: '31.5K', fm: 'Combo', rv: '2.7 Tỷ', g: '+24%', us: '89.5K', ug: '+26%', tr: '3.6 Tỷ', tu: '117.8K', re: '9,239', url: 'https://www.tiktok.com/view/product/1732616810831906809' },
      { n: 'Combo 5 10 20 Bút bi màu pastel PRO 027 Thiên Long TL-105', sc: 'but_bi', br: 'Thiên Long', ch: 'tiktok', pr: '32.2K', fm: 'Combo', rv: '2.4 Tỷ', g: '-28%', us: '61.7K', ug: '-37%', tr: '5.9 Tỷ', tu: '194.5K', re: '15,436', url: 'https://www.tiktok.com/view/product/1729758198371814393' },
      { n: 'Combo 5 10 20 Bút bi Thiên Long Pro 027 TL-105 - 3 màu mực', sc: 'but_bi', br: 'Thiên Long', ch: 'shopee', pr: '30.5K', fm: 'Combo', rv: '1.7 Tỷ', g: '-4%', us: '58.6K', ug: '-12%', tr: '5.0 Tỷ', tu: '185.2K', re: '35,883', url: 'https://shopee.vn/product/101480242/21193760161' },
      { n: 'TẶNG NGÒI Bút Bi Nước Deli Viết Gel Bấm A575 Ngòi 0.5mm', sc: 'but_gel', br: 'Deli', ch: 'shopee', pr: '10K', fm: 'Single', rv: '1.3 Tỷ', g: '-9%', us: '150.7K', ug: '-5%', tr: '6.7 Tỷ', tu: '2000.0K', re: '127,796', url: 'https://shopee.vn/product/127805122/18109428728' },
      { n: 'Combo Bút bi Thiên Long Pro 027 TL-105 màu pastel ngòi 0.5mm', sc: 'but_bi', br: 'Thiên Long', ch: 'shopee', pr: '26K', fm: 'Combo', rv: '1.0 Tỷ', g: '-26%', us: '37.6K', ug: '-31%', tr: '2.8 Tỷ', tu: '115.2K', re: '22,089', url: 'https://shopee.vn/product/368671137/23577091247' },
      { n: '10 bút tặng 20 ruột-COMBO bút gel xóa được', sc: 'but_gel', br: 'Thiên Long', ch: 'tiktok', pr: '86K', fm: 'Combo 10', rv: '834.8 Tr', g: '-54%', us: '9.4K', ug: '-55%', tr: '2.9 Tỷ', tu: '33.2K', re: '2,212', url: 'https://www.tiktok.com/view/product/1732466130837866215' },
      { n: 'Combo 5 10 20 Bút bi dầu màu pastel Deli EQ32', sc: 'but_bi', br: 'Deli', ch: 'tiktok', pr: '30K', fm: 'Combo 20', rv: '815.2 Tr', g: '', us: '23.9K', ug: '', tr: '931.1 Tr', tu: '27.8K', re: '1,035', url: 'https://www.tiktok.com/view/product/1733976532781139583' },
      { n: 'Combo 5 10 20 Bút Gel Xóa được Thiên Long TP-GELE01', sc: 'but_gel', br: 'Thiên Long', ch: 'shopee', pr: '58K', fm: 'Combo 20', rv: '727.0 Tr', g: '+29%', us: '12.7K', ug: '+17%', tr: '3.1 Tỷ', tu: '62.5K', re: '13,427', url: 'https://shopee.vn/product/101480242/19292039434' },
      { n: 'DEAL SỐC 4K 1C Combo 5 10 20 Bút gel bấm ngòi ST 0.5mm', sc: 'all', br: 'Deli', ch: 'tiktok', pr: '28.8K', fm: 'Combo', rv: '669.0 Tr', g: '+18416%', us: '23.7K', ug: '+21844%', tr: '685.5 Tr', tu: '25.1K', re: '1,113', url: 'https://www.tiktok.com/view/product/1731593973247936127' },
      { n: 'Combo 20 Bút bi Thiên Long 027 Pro ngòi 0.5mm mực xanh đen thân bút pastel', sc: 'but_bi', br: 'Thiên Long', ch: 'tiktok', pr: '110K', fm: 'Combo 20', rv: '603.8 Tr', g: '-19%', us: '5.6K', ug: '-30%', tr: '2.6 Tỷ', tu: '27.4K', re: '3,287', url: 'https://www.tiktok.com/view/product/1729758201010228217' }
    ],
    sdata: {
      but_bi: {
        kpi: [{ l: 'Gross Sales (VND)', v: '57.4', u: 'Tỷ', g: '+30%', sub: 'vs 44.3 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '1.7', u: 'Triệu', g: '-33%', sub: 'vs 2.6 triệu in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '38.2%', u: '', g: '+12.1pp', sub: 'vs 26.1% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '7', u: 'Nghìn', g: '-7%', sub: 'vs 7.5 nghìn in YTD H1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '57.4', u: 'Tỷ', g: '+30%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~17.3%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '38.2%', u: '', g: '+12.1pp', sub: 'vs 26.1% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'TL (41.3%)', u: '', g: '', sub: '8/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 34.3, pre: 30.6, c: '#f97316' }, { n: 'TikTok Shop', cur: 21.9, pre: 11.55, c: '#0f172a' }, { n: 'Lazada', cur: 1.2, pre: 2.03, c: '#3b82f6' }],
        brand: [{ n: 'Thiên Long', cur: 41.28, pre: 34.03, c: '#1a56db' }, { n: 'Deli', cur: 6.64, pre: 6.31, c: '#ef4444' }, { n: 'G-Star', cur: 3.78, pre: 3.23, c: '#10b981' }, { n: 'Flexoffice', cur: 1.71, pre: 0.51, c: '#8b5cf6' }, { n: 'Vâng Thiên', cur: 1.01, pre: 0.79, c: '#f97316' }, { n: 'Aihao', cur: 0.67, pre: 1.71, c: '#f97316' }, { n: 'Others', cur: 44.9, pre: 53.36, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 1.68, l: 0, t: 0 }, { r: '10K-30K', s: 14.82, l: 0, t: 0 }, { r: '30K-50K', s: 13.42, l: 0, t: 0 }, { r: '50K-75K', s: 7.85, l: 0, t: 0 }, { r: '75K-100K', s: 9.07, l: 0, t: 0 }, { r: '100K-150K', s: 5.66, l: 0, t: 0 }, { r: '150K-200K', s: 1.5, l: 0, t: 0 }, { r: '200K-350K', s: 1.39, l: 0, t: 0 }, { r: '350K-500K', s: 0.31, l: 0, t: 0 }, { r: '500K-750K', s: 0.5, l: 0, t: 0 }, { r: '750K-1M', s: 0.79, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.08, l: 0, t: 0 }, { r: '1.5M-2M', s: 0, l: 0, t: 0 }, { r: '2M-3.5M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Combo 5 10 20 Bút bi màu pastel PRO 027 Thiên Long TL-105', sc: 'but_bi', br: 'Thiên Long', ch: 'tiktok', pr: '32.2K', fm: 'Combo', rv: '2.3 Tỷ', g: '-34%', us: '60.5K', ug: '-41%', tr: '5.8 Tỷ', tu: '192.2K', re: '15,436', url: 'https://www.tiktok.com/view/product/1729758198371814393' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long Pro 027 TL-105 - 3 màu mực', sc: 'but_bi', br: 'Thiên Long', ch: 'shopee', pr: '30.5K', fm: 'Combo', rv: '1.7 Tỷ', g: '-4%', us: '58.2K', ug: '-12%', tr: '4.9 Tỷ', tu: '183.0K', re: '35,588', url: 'https://shopee.vn/product/101480242/21193760161' },
          { n: 'DEAL SỐC Combo 5 10 20 Bút bi đầu màu pastel Deli EQ32', sc: 'but_bi', br: 'Deli', ch: 'tiktok', pr: '21.9K', fm: 'Combo', rv: '1.1 Tỷ', g: '+81%', us: '35.1K', ug: '+97%', tr: '958.6 Tr', tu: '29.1K', re: '1,686', url: 'https://www.tiktok.com/view/product/1733976532781139583' },
          { n: 'Combo 20 Bút bi Thiên Long 027 Pro ngòi 0.5mm mực xanh đen', sc: 'but_bi', br: 'Thiên Long', ch: 'tiktok', pr: '109.7K', fm: 'Combo', rv: '1.1 Tỷ', g: '-22%', us: '10.0K', ug: '-28%', tr: '3.0 Tỷ', tu: '31.3K', re: '2,855', url: 'https://www.tiktok.com/view/product/1729758201010228217' },
          { n: 'Combo Bút bi Thiên Long Pro 027 TL-105 màu pastel ngòi 0.5mm', sc: 'but_bi', br: 'Thiên Long', ch: 'shopee', pr: '27K', fm: 'Combo', rv: '1.0 Tỷ', g: '-29%', us: '37.7K', ug: '-34%', tr: '2.8 Tỷ', tu: '114.7K', re: '21,965', url: 'https://shopee.vn/product/368671137/23577091247' },
          { n: 'Combo 20 Bút bi Thiên Long TL-027 ngòi 0.5mm - Bút bi viết 4 màu', sc: 'but_bi', br: 'Thiên Long', ch: 'shopee', pr: '94K', fm: 'Combo', rv: '777.6 Tr', g: '+5%', us: '9.2K', ug: '-2%', tr: '5.3 Tỷ', tu: '79.7K', re: '14,902', url: 'https://shopee.vn/product/368671137/16065421545' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long TL-027 mực xanh đỏ đen tím', sc: 'but_bi', br: 'Thiên Long', ch: 'shopee', pr: '25K', fm: 'Combo', rv: '670.9 Tr', g: '-11%', us: '29.7K', ug: '-15%', tr: '2.7 Tỷ', tu: '135.8K', re: '24,276', url: 'https://shopee.vn/product/101480242/23576151410' },
          { n: 'Bộ Bút Và Mực 5 Cái 0.5mm (Xanh/Đen/Đỏ)', sc: 'but_bi', br: 'Other', ch: 'tiktok', pr: '20K', fm: 'Combo 5', rv: '452.6 Tr', g: '-24%', us: '17.5K', ug: '+15%', tr: '3.2 Tỷ', tu: '84.1K', re: '9,285', url: 'https://www.tiktok.com/view/product/1730805887918246790' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long TL-095 Butter Ink ngòi 0.5mm', sc: 'but_bi', br: 'Thiên Long', ch: 'shopee', pr: '47.5K', fm: 'Combo 20', rv: '391.0 Tr', g: '-15%', us: '8.1K', ug: '-24%', tr: '3.2 Tỷ', tu: '79.5K', re: '16,264', url: 'https://shopee.vn/product/101480242/23576151438' },
          { n: 'Combo 20 Bút bi Thiên Long 027 Pro ngòi 0.5mm mực xanh đen (160K)', sc: 'but_bi', br: 'Thiên Long', ch: 'shopee', pr: '160K', fm: 'Combo', rv: '371.6 Tr', g: '+27%', us: '3.5K', ug: '+31%', tr: '1.4 Tỷ', tu: '13.4K', re: '2,452', url: 'https://shopee.vn/product/101480242/22056666298' }
        ]
      },
      but_gel: {
        kpi: [{ l: 'Gross Sales (VND)', v: '104.5', u: 'Tỷ', g: '+44%', sub: 'vs 72.4 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '4.2', u: 'Triệu', g: '-52%', sub: 'vs 8.8 triệu in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '41.4%', u: '', g: '+5.6pp', sub: 'vs 35.8% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '7.8', u: 'Nghìn', g: '-7%', sub: 'vs 8.4 nghìn in YTD H1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '104.5', u: 'Tỷ', g: '+44%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~9.5%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '41.4%', u: '', g: '+5.6pp', sub: 'vs 35.8% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'TL (16.9%)', u: '', g: '', sub: '4/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 60, pre: 43.85, c: '#f97316' }, { n: 'TikTok Shop', cur: 43.3, pre: 25.88, c: '#0f172a' }, { n: 'Lazada', cur: 1.31, pre: 2.65, c: '#3b82f6' }],
        brand: [{ n: 'Thiên Long', cur: 16.94, pre: 13.96, c: '#1a56db' }, { n: 'Deli', cur: 15.13, pre: 13.99, c: '#ef4444' }, { n: 'Classmate', cur: 3.9, pre: 2.18, c: '#8b5cf6' }, { n: 'Bossee', cur: 3.06, pre: 1.39, c: '#f97316' }, { n: 'G-Star', cur: 2.48, pre: 2.92, c: '#10b981' }, { n: 'M&G', cur: 0.68, pre: 1.02, c: '#f59e0b' }, { n: 'Others', cur: 57.81, pre: 64.48, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 8.279, l: 0, t: 0 }, { r: '10K-30K', s: 29.731, l: 0, t: 0 }, { r: '30K-50K', s: 26.375, l: 0, t: 0 }, { r: '50K-75K', s: 17.886, l: 0, t: 0 }, { r: '75K-100K', s: 12.631, l: 0, t: 0 }, { r: '100K-150K', s: 5.568, l: 0, t: 0 }, { r: '150K-200K', s: 1.622, l: 0, t: 0 }, { r: '200K-350K', s: 1.689, l: 0, t: 0 }, { r: '350K-500K', s: 0.295, l: 0, t: 0 }, { r: '500K-750K', s: 0.17, l: 0, t: 0 }, { r: '750K-1M', s: 0.11, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.01, l: 0, t: 0 }, { r: '1.5M-2M', s: 0.02, l: 0, t: 0 }],
        prod: [
          { n: 'Combo 5 10 20 Bút gel Fasgel GEL-068', sc: 'but_gel', br: 'Thiên Long', ch: 'tiktok', pr: '34K', fm: 'Combo', rv: '2.7 Tỷ', g: '+24%', us: '89.5K', ug: '+26%', tr: '3.6 Tỷ', tu: '118.4K', re: '9,674', url: 'https://www.tiktok.com/view/product/1732616810831906809' },
          { n: 'TẶNG NGÒI Bút Bi Nước Deli Viết Gel Bấm A575 Ngòi 0.5mm', sc: 'but_gel', br: 'Deli', ch: 'shopee', pr: '10K', fm: 'Single', rv: '1.3 Tỷ', g: '-9%', us: '150.7K', ug: '-5%', tr: '6.7 Tỷ', tu: '2000.0K', re: '127,796', url: 'https://shopee.vn/product/127805122/18109428728' },
          { n: 'ẢNH THẬT SET 8 bút gel Cao Cấp DUDU ngòi 0.5mm mực xanh đen', sc: 'but_gel', br: 'DUDU', ch: 'tiktok', pr: '21.7K', fm: 'Combo', rv: '1.0 Tỷ', g: '+28%', us: '48.9K', ug: '+24%', tr: '1.3 Tỷ', tu: '64.2K', re: '5,537', url: 'https://www.tiktok.com/view/product/1732776664365893367' },
          { n: 'Combo 5 10 20 Bút gel Fasgel Thiên Long GEL-068', sc: 'but_gel', br: 'Thiên Long', ch: 'shopee', pr: '30K', fm: 'Combo', rv: '916.3 Tr', g: '+39%', us: '32.7K', ug: '+37%', tr: '1.1 Tỷ', tu: '40.9K', re: '6,985', url: 'https://shopee.vn/product/101480242/42170566678' },
          { n: '10 bút tặng 20 ruột - Combo bút gel xóa được', sc: 'but_gel', br: 'OEM', ch: 'tiktok', pr: '86K', fm: 'Combo 10', rv: '834.8 Tr', g: '-54%', us: '9.4K', ug: '-55%', tr: '2.9 Tỷ', tu: '33.2K', re: '2,212', url: 'https://www.tiktok.com/view/product/1732466130837866215' },
          { n: 'Combo 5-10-20 Bút Gel Xóa được TP-GELE01', sc: 'but_gel', br: 'Thiên Long', ch: 'shopee', pr: '58K', fm: 'Combo 20', rv: '727.0 Tr', g: '+29%', us: '12.7K', ug: '+17%', tr: '3.1 Tỷ', tu: '62.5K', re: '13,427', url: 'https://shopee.vn/product/101480242/19292039434' },
          { n: 'DEAL SỐC 4K 1C Combo 5 10 20 Bút gel bấm ngòi ST 0.5mm', sc: 'but_gel', br: 'Deli', ch: 'tiktok', pr: '27.9K', fm: 'Combo', rv: '667.9 Tr', g: '+18386%', us: '23.7K', ug: '+21844%', tr: '686.0 Tr', tu: '25.2K', re: '1,526', url: 'https://www.tiktok.com/view/product/1731593973247936127' },
          { n: 'Combo 5-10-20 Bút gel Happ Obby GEL-056', sc: 'but_gel', br: 'Thiên Long', ch: 'tiktok', pr: '44K', fm: 'Combo 20', rv: '571.4 Tr', g: '+126%', us: '12.7K', ug: '+119%', tr: '866.5 Tr', tu: '19.4K', re: '993', url: 'https://www.tiktok.com/view/product/1732234716280294393' },
          { n: 'Bút đánh dấu sơn chống nước gốc dầu trắng Bút Graffiti', sc: 'but_gel', br: 'Topick Global', ch: 'shopee', pr: '41K', fm: 'Single', rv: '556.0 Tr', g: '', us: '13.5K', ug: '', tr: '556.8 Tr', tu: '13.6K', re: '791', url: 'https://shopee.vn/product/196261835/26875711128' },
          { n: 'HOT Bút Semi-gel Hồng Hà ngòi 0.5mm viết trơn mướt êm ru', sc: 'but_gel', br: 'Hồng Hà', ch: 'tiktok', pr: '49.1K', fm: 'Single', rv: '553.0 Tr', g: '+79543%', us: '12.7K', ug: '+140622%', tr: '568.7 Tr', tu: '13.0K', re: '613', url: 'https://www.tiktok.com/view/product/1730909398612019406' }
        ]
      }
    }
  },
  hoc_cu: {
    n: 'Học Cụ', i: '📐',
    sc: [{ k: 'all', n: 'All', i: '📊' }, { k: 'may_tinh', n: 'Máy Tính KH', i: '🔢' }, { k: 'tap_vo', n: 'Tập Vở Sổ', i: '📓' }, { k: 'balo', n: 'Balo Học Sinh', i: '🎒' }, { k: 'but_chi', n: 'Bút Chì', i: '✏️' }, { k: 'gom', n: 'Gôm Tẩy', i: '🧽' }],
    kpi: [{ l: 'Gross Sales (VND)', v: '230.4', u: 'Tỷ', g: '+30%', sub: 'vs 177.8 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '5.2', u: 'Triệu', g: '-26%', sub: 'vs 7 triệu in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '38.6%', u: '', g: '+6.9pp', sub: 'vs 31.7% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '16.8', u: 'Nghìn', g: '-4%', sub: 'vs 17.5 nghìn in YTD H1 2025', ic: 'orange' }],
    dkpi: [{ l: 'Gross Sales (VND)', v: '230.4', u: 'Tỷ', g: '+30%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~17.3%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '38.6%', u: '', g: '+6.9pp', sub: 'vs 31.7% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Casio (12.7%)', u: '', g: '', sub: '2/10 Top SKU Spots', ic: 'orange' }],
    plat: [{ n: 'Shopee', cur: 139.4, pre: 116.59, c: '#f97316' }, { n: 'TikTok Shop', cur: 88.9, pre: 56.29, c: '#0f172a' }, { n: 'Lazada', cur: 1.99, pre: 4.84, c: '#3b82f6' }],
    brand: [{ n: 'Casio', cur: 12.74, pre: 13.91, c: '#8b5cf6' }, { n: 'Flexio', cur: 10.97, pre: 3.18, c: '#10b981' }, { n: 'Thiên Long', cur: 9.8, pre: 4.31, c: '#1a56db' }, { n: 'Deli', cur: 6.69, pre: 4.81, c: '#ef4444' }, { n: 'Classmate', cur: 1.47, pre: 0, c: '#8b5cf6' }, { n: 'Hà My Bookstore', cur: 0.64, pre: 1.14, c: '#3b82f6' }, { n: 'Others', cur: 57.65, pre: 72.64, c: '#cbd5e1' }],
    price: [{ r: '< 10K', s: 7.138, l: 0, t: 0 }, { r: '10K-30K', s: 39.36, l: 0, t: 0 }, { r: '30K-50K', s: 27.073, l: 0, t: 0 }, { r: '50K-75K', s: 28.122, l: 0, t: 0 }, { r: '75K-100K', s: 16.733, l: 0, t: 0 }, { r: '100K-150K', s: 19.481, l: 0, t: 0 }, { r: '150K-200K', s: 11.769, l: 0, t: 0 }, { r: '200K-350K', s: 22.385, l: 0, t: 0 }, { r: '350K-500K', s: 5.487, l: 0, t: 0 }, { r: '500K-750K', s: 44.741, l: 0, t: 0 }, { r: '750K-1M', s: 6.453, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.897, l: 0, t: 0 }, { r: '1.5M-2M', s: 0.03, l: 0, t: 0 }, { r: '2M-3.5M', s: 0.01, l: 0, t: 0 }, { r: '3.5M-5M', s: 0.15, l: 0, t: 0 }, { r: '5M-7.5M', s: 0.1, l: 0, t: 0 }],
    prod: [
      { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới', sc: 'may_tinh', br: 'Thiên Long', ch: 'tiktok', pr: '664.2K', fm: 'Single', rv: '9.3 Tỷ', g: '-18%', us: '14.7K', ug: '-25%', tr: '28.2 Tỷ', tu: '51.5K', re: '6,708', url: 'https://www.tiktok.com/view/product/1729647692608932857' },
      { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN - Máy tính học sinh', sc: 'may_tinh', br: 'Thiên Long', ch: 'shopee', pr: '641.5K', fm: 'Single', rv: '8.6 Tỷ', g: '+29%', us: '14.4K', ug: '+24%', tr: '19.0 Tỷ', tu: '33.0K', re: '8,466', url: 'https://shopee.vn/product/101480242/22471594302' },
      { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới', sc: 'may_tinh', br: 'Thiên Long', ch: 'tiktok', pr: '679.5K', fm: 'Single', rv: '6.6 Tỷ', g: '-18%', us: '11.2K', ug: '-21%', tr: '20.6 Tỷ', tu: '38.1K', re: '5,163', url: 'https://www.tiktok.com/view/product/1729672334167935993' },
      { n: 'Máy tính cầm tay Flexio Fx799VN Thiên Long - Máy tính học', sc: 'may_tinh', br: 'Thiên Long', ch: 'shopee', pr: '641K', fm: 'Single', rv: '4.6 Tỷ', g: '+12%', us: '7.7K', ug: '+5%', tr: '14.4 Tỷ', tu: '25.7K', re: '7,063', url: 'https://shopee.vn/product/368671137/23077933746' },
      { n: 'FS Máy Tính Học Sinh Casio FX-880BTG Chính Hãng Bitex - 4 Màu', sc: 'may_tinh', br: 'Casio', ch: 'shopee', pr: '564K', fm: 'Single', rv: '3.0 Tỷ', g: '+12%', us: '4.8K', ug: '+17%', tr: '23.3 Tỷ', tu: '33.4K', re: '9,386', url: 'https://shopee.vn/product/140792708/18134522949' },
      { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới', sc: 'may_tinh', br: 'Thiên Long', ch: 'shopee', pr: '641.5K', fm: 'Single', rv: '2.6 Tỷ', g: '+41%', us: '4.4K', ug: '+40%', tr: '4.2 Tỷ', tu: '7.2K', re: '1,773', url: 'https://shopee.vn/product/101480242/22675511601' },
      { n: 'Hộp Bút Chì 2B Cao Cấp NoiR ClassMate Ngòi Chì Cứng Không Dễ Gãy', sc: 'all', br: 'Classmate', ch: 'tiktok', pr: '42.5K', fm: 'Combo', rv: '2.0 Tỷ', g: '', us: '45.6K', ug: '', tr: '2.0 Tỷ', tu: '46.4K', re: '2,596', url: 'https://www.tiktok.com/view/product/1734745827748513125' },
      { n: 'Balo đi học nam nữ chống nước NATOLI', sc: 'balo', br: 'Natoli', ch: 'shopee', pr: '259K', fm: 'Single', rv: '1.2 Tỷ', g: '+29%', us: '4.8K', ug: '+11%', tr: '14.0 Tỷ', tu: '60.4K', re: '16,733', url: 'https://shopee.vn/product/515748887/12786241026' },
      { n: 'Máy Tính Khoa Học Casio FX-580VNX (Bitex HN)', sc: 'may_tinh', br: 'Casio', ch: 'shopee', pr: '804K', fm: 'Single', rv: '1.0 Tỷ', g: '-43%', us: '1.3K', ug: '-46%', tr: '5.2 Tỷ', tu: '6.9K', re: '1,566', url: 'https://shopee.vn/product/292001772/23973252157' },
      { n: 'Balo đi học thương hiệu NATOLI Basic', sc: 'balo', br: 'Natoli', ch: 'tiktok', pr: '259K', fm: 'Single', rv: '953.8 Tr', g: '+28%', us: '3.4K', ug: '+13%', tr: '8.9 Tỷ', tu: '39.5K', re: '4,490', url: 'https://www.tiktok.com/view/product/1729439994934889330' }
    ],
    sdata: {
      may_tinh: {
        kpi: [{ l: 'Gross Sales (VND)', v: '117.8', u: 'Tỷ', g: '+72%', sub: 'vs 68.5 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '351.7', u: 'Nghìn', g: '+34%', sub: 'vs 261.5 nghìn in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '43.3%', u: '', g: '+17.8pp', sub: 'vs 25.5% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.7', u: 'Nghìn', g: '-10%', sub: 'vs 1.9 nghìn in YTD H1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '117.8', u: 'Tỷ', g: '+72%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~52%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '43.3%', u: '', g: '+17.8pp', sub: 'vs 25.5% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Casio (46.0%)', u: '', g: '', sub: '5/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 65.6, pre: 47.41, c: '#f97316' }, { n: 'TikTok Shop', cur: 51, pre: 17.43, c: '#0f172a' }, { n: 'Lazada', cur: 1.06, pre: 3.48, c: '#3b82f6' }],
        brand: [{ n: 'Casio', cur: 45.99, pre: 61.99, c: '#8b5cf6' }, { n: 'Flexio', cur: 22.31, pre: 9.33, c: '#10b981' }, { n: 'Thiên Long', cur: 13.16, pre: 6.77, c: '#1a56db' }, { n: 'Deli', cur: 0.81, pre: 1.28, c: '#ef4444' }, { n: 'Fahasa', cur: 0.72, pre: 3.64, c: '#3b82f6' }, { n: 'Texas Instruments', cur: 0.28, pre: 0.3, c: '#f59e0b' }, { n: 'Others', cur: 16.74, pre: 16.68, c: '#cbd5e1' }],
        price: [{ r: '10K-30K', s: 0.577, l: 0, t: 0 }, { r: '30K-50K', s: 1.875, l: 0, t: 0 }, { r: '50K-75K', s: 2.549, l: 0, t: 0 }, { r: '75K-100K', s: 0.693, l: 0, t: 0 }, { r: '100K-150K', s: 1.168, l: 0, t: 0 }, { r: '150K-200K', s: 3.362, l: 0, t: 0 }, { r: '200K-350K', s: 9.262, l: 0, t: 0 }, { r: '350K-500K', s: 3.964, l: 0, t: 0 }, { r: '500K-750K', s: 51.074, l: 0, t: 0 }, { r: '750K-1M', s: 41.24, l: 0, t: 0 }, { r: '< 10K', s: 0.01, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.51, l: 0, t: 0 }, { r: '1.5M-2M', s: 0.47, l: 0, t: 0 }, { r: '2M-3.5M', s: 0.35, l: 0, t: 0 }, { r: '3.5M-5M', s: 0.23, l: 0, t: 0 }, { r: '5M-7.5M', s: 0.1, l: 0, t: 0 }],
        prod: [
          { n: 'Máy tính Casio Fx-580VNX nhiều màu được mang vào phòng thi', sc: 'may_tinh', br: 'Casio', ch: 'tiktok', pr: '962K', fm: 'Single', rv: '9.8 Tỷ', g: '-5%', us: '12.1K', ug: '-9%', tr: '29.4 Tỷ', tu: 'N/A', re: '4,041', url: 'https://www.tiktok.com/view/product/1729430797999508070' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới', sc: 'may_tinh', br: 'Thiên Long', ch: 'tiktok', pr: '664.2K', fm: 'Single', rv: '9.3 Tỷ', g: '-18%', us: '14.7K', ug: '-25%', tr: '28.2 Tỷ', tu: 'N/A', re: '6,708', url: 'https://www.tiktok.com/view/product/1729647692608932857' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN', sc: 'may_tinh', br: 'Thiên Long', ch: 'shopee', pr: '641.5K', fm: 'Single', rv: '8.6 Tỷ', g: '+29%', us: '14.4K', ug: '+24%', tr: '19.0 Tỷ', tu: 'N/A', re: '8,466', url: 'https://shopee.vn/product/101480242/22471594302' },
          { n: 'FS Máy Tính Casio FX-580VN X dành cho học sinh cấp 2 cấp 3', sc: 'may_tinh', br: 'Casio', ch: 'shopee', pr: '874K', fm: 'Single', rv: '8.2 Tỷ', g: '-30%', us: '10.0K', ug: '-34%', tr: '65.3 Tỷ', tu: 'N/A', re: '24,941', url: 'https://shopee.vn/product/140792708/4558727890' },
          { n: 'Máy Tính Casio FX 580 - Màu Đen Hồng Xanh', sc: 'may_tinh', br: 'Casio', ch: 'shopee', pr: '786K', fm: 'Single', rv: '8.0 Tỷ', g: '-32%', us: '10.1K', ug: '-35%', tr: '40.0 Tỷ', tu: 'N/A', re: '11,385', url: 'https://shopee.vn/product/142856269/9633799567' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới', sc: 'may_tinh', br: 'Thiên Long', ch: 'tiktok', pr: '679.5K', fm: 'Single', rv: '6.6 Tỷ', g: '-18%', us: '11.2K', ug: '-21%', tr: '20.6 Tỷ', tu: 'N/A', re: '5,163', url: 'https://www.tiktok.com/view/product/1729672334167935993' },
          { n: 'Máy tính cầm tay Flexio Fx799VN Thiên Long', sc: 'may_tinh', br: 'Thiên Long', ch: 'shopee', pr: '641K', fm: 'Single', rv: '4.6 Tỷ', g: '+12%', us: '7.7K', ug: '+5%', tr: '14.4 Tỷ', tu: 'N/A', re: '7,063', url: 'https://shopee.vn/product/368671137/23077933746' },
          { n: 'FS Máy Tính Học Sinh Casio FX-880BTG Chính Hãng Bitex - 4 Màu', sc: 'may_tinh', br: 'Casio', ch: 'shopee', pr: '564K', fm: 'Single', rv: '3.0 Tỷ', g: '+12%', us: '4.8K', ug: '+17%', tr: '23.3 Tỷ', tu: 'N/A', re: '9,386', url: 'https://shopee.vn/product/140792708/18134522949' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới', sc: 'may_tinh', br: 'Thiên Long', ch: 'shopee', pr: '641.5K', fm: 'Single', rv: '1.7 Tỷ', g: '+87%', us: '2.8K', ug: '+78%', tr: '4.2 Tỷ', tu: 'N/A', re: '1,773', url: 'https://shopee.vn/product/101480242/22675511601' },
          { n: 'SALE Máy tính Casio Fx-580VNX (Bitex TikTok)', sc: 'may_tinh', br: 'Casio', ch: 'tiktok', pr: '827K', fm: 'Single', rv: '1.5 Tỷ', g: '+64%', us: '1.8K', ug: '+48%', tr: '4.5 Tỷ', tu: '5.8K', re: '542', url: 'https://www.tiktok.com/view/product/1730689555810650726' }
        ]
      },
      but_chi: {
        kpi: [{ l: 'Gross Sales (VND)', v: '17', u: 'Tỷ', g: '+63%', sub: 'vs 10.4 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '687.8', u: 'Nghìn', g: '-24%', sub: 'vs 901 nghìn in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '32.8%', u: '', g: '+4.1pp', sub: 'vs 28.7% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '3', u: 'Nghìn', g: '-9%', sub: 'vs 3.3 nghìn in YTD H1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '17', u: 'Tỷ', g: '+63%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~19.2%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '32.8%', u: '', g: '+4.1pp', sub: 'vs 28.7% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (27.7%)', u: '', g: '', sub: '3/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 11.3, pre: 7.14, c: '#f97316' }, { n: 'TikTok Shop', cur: 5.6, pre: 3.02, c: '#0f172a' }, { n: 'Lazada', cur: 0.16, pre: 0.35, c: '#3b82f6' }],
        brand: [{ n: 'Deli', cur: 27.66, pre: 21.43, c: '#ef4444' }, { n: 'Thiên Long', cur: 13.31, pre: 11.33, c: '#1a56db' }, { n: 'Classmate', cur: 3.65, pre: 1.27, c: '#8b5cf6' }, { n: 'G-Star', cur: 3.29, pre: 2.74, c: '#10b981' }, { n: 'Angel Mark', cur: 1.79, pre: 0, c: '#f97316' }, { n: 'Staedtler', cur: 1.63, pre: 2.05, c: '#f59e0b' }, { n: 'Kohno', cur: 0.74, pre: 0.91, c: '#8b5cf6' }, { n: 'Others', cur: 48.02, pre: 60.19, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.919, l: 0, t: 0 }, { r: '10K-30K', s: 0.979, l: 0, t: 0 }, { r: '30K-50K', s: 1.74, l: 0, t: 0 }, { r: '50K-75K', s: 0.298, l: 0, t: 0 }, { r: '75K-100K', s: 0.105, l: 0, t: 0 }, { r: '100K-150K', s: 0.138, l: 0, t: 0 }, { r: '150K-200K', s: 0.082, l: 0, t: 0 }, { r: '200K-350K', s: 0.101, l: 0, t: 0 }, { r: '10K-50K', s: 8.11, l: 0, t: 0 }, { r: '50K-100K', s: 2.8, l: 0, t: 0 }, { r: '100K-200K', s: 1, l: 0, t: 0 }, { r: '200K-500K', s: 0.54, l: 0, t: 0 }, { r: '500K-1M', s: 0.05, l: 0, t: 0 }, { r: '1M-2M', s: 0.29, l: 0, t: 0 }, { r: '2M-5M', s: 0, l: 0, t: 0 }, { r: '>5M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'GIÁ ĐỘC QUYỀN TIKTOK Bút Chì HB 2B Gỗ Đen SIÊU CỨNG', sc: 'but_chi', br: 'Deli', ch: 'tiktok', pr: '56.7K', fm: 'Combo', rv: '588.2 Tr', g: '+457%', us: '10.8K', ug: '+254%', tr: '951.1 Tr', tu: '33.8K', re: '2,133', url: 'https://www.tiktok.com/view/product/1729774420086721151' },
          { n: 'Hộp 10 bút chì học sinh Thiên Long - Viết chì HB 2B lục giác', sc: 'but_chi', br: 'Thiên Long', ch: 'shopee', pr: '41K', fm: 'Combo', rv: '403.8 Tr', g: '+49%', us: '11.1K', ug: '+35%', tr: '1.3 Tỷ', tu: '39.5K', re: '6,522', url: 'https://shopee.vn/product/101480242/23990060019' },
          { n: 'Bút Chì Cơ 2B M.Y Ruột 2mm - Kèm Dao Gọt Chống Gãy Điều Chỉnh', sc: 'but_chi', br: 'M.Y Stationery', ch: 'tiktok', pr: '13.3K', fm: 'Single', rv: '347.6 Tr', g: '+274%', us: '26.2K', ug: '+270%', tr: '445.9 Tr', tu: '33.6K', re: '2,839', url: 'https://www.tiktok.com/view/product/1733830967505093930' },
          { n: 'Bút chì Cơ Chính Tư Thế 2B với chì đậm 2.0mm Thích hợp vẽ viết', sc: 'but_chi', br: 'Big-K Store', ch: 'tiktok', pr: '16.4K', fm: 'Single', rv: '326.2 Tr', g: '-51%', us: '21.1K', ug: '-50%', tr: '1.3 Tỷ', tu: '83.4K', re: '6,702', url: 'https://www.tiktok.com/view/product/1732294558552655401' },
          { n: 'Hộp 10 cây Bút chì gỗ Thiên Long GP-01 thân lục giác độ cứng', sc: 'but_chi', br: 'Thiên Long', ch: 'shopee', pr: '47K', fm: 'Combo', rv: '321.3 Tr', g: '-15%', us: '8.4K', ug: '-17%', tr: '1.6 Tỷ', tu: '47.6K', re: '8,572', url: 'https://shopee.vn/product/101480242/1673220598' },
          { n: 'QUÀ TẶNG TRONG LIVE Bút chì 2B HB Deli - Bút lục giác tam giác', sc: 'but_chi', br: 'Deli', ch: 'tiktok', pr: '1.1M', fm: 'Single', rv: '287.5 Tr', g: '+274%', us: '0.3K', ug: '-34%', tr: '388.5 Tr', tu: '1.0K', re: '49', url: 'https://www.tiktok.com/view/product/1732147576692967039' },
          { n: 'Vỉ 10 12 Bút Chì Gỗ 2B HB Học Sinh Deli Chì Đậm An Toàn', sc: 'but_chi', br: 'Deli', ch: 'shopee', pr: '12.5K', fm: 'Combo', rv: '284.6 Tr', g: '-16%', us: '11.6K', ug: '-2%', tr: '3.2 Tỷ', tu: '191.2K', re: '39,555', url: 'https://shopee.vn/product/127805122/5431388748' },
          { n: 'Angel Mark Bút Chì Mài Phác Thảo Than Tranh Nghệ Thuật Đặc Biệt', sc: 'but_chi', br: 'Angel Mark', ch: 'shopee', pr: '299K', fm: 'Single', rv: '257.7 Tr', g: '+286%', us: '0.9K', ug: '+239%', tr: '399.5 Tr', tu: '1.5K', re: '461', url: 'https://shopee.vn/product/518500675/27477052514' },
          { n: 'Hộp 10 bút chì học sinh Thiên Long - Viết chì HB 2B lục giác', sc: 'but_chi', br: 'Thiên Long', ch: 'tiktok', pr: '55.4K', fm: 'Combo', rv: '228.6 Tr', g: '+1264%', us: '5.5K', ug: '+1295%', tr: '414.7 Tr', tu: '11.3K', re: '593', url: 'https://www.tiktok.com/view/product/1729549834191145977' },
          { n: 'Bộ Combo 3 Bút Gel + 20 Ruột Thay - Ngòi 0.5mm 3 Màu Đen Xanh', sc: 'but_chi', br: 'CN1 Stationery', ch: 'tiktok', pr: '16.6K', fm: 'Combo', rv: '223.6 Tr', g: '-6%', us: '10.4K', ug: '-8%', tr: '999.2 Tr', tu: '65.2K', re: '6,691', url: 'https://www.tiktok.com/view/product/1731882042517521598' }
        ]
      },
      tap_vo: {
        kpi: [{ l: 'Gross Sales (VND)', v: '28.7', u: 'Tỷ', g: '+32%', sub: 'vs 21.8 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '771.5', u: 'Nghìn', g: '-21%', sub: 'vs 975.7 nghìn in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '27.3%', u: '', g: '+6.3pp', sub: 'vs 21% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '2.5', u: 'Nghìn', g: '-7%', sub: 'vs 2.7 nghìn in YTD H1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '28.7', u: 'Tỷ', g: '+32%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~15.3%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '27.3%', u: '', g: '+6.3pp', sub: 'vs 21% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Thiên Long (12.4%)', u: '', g: '', sub: '1/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 20.4, pre: 16.59, c: '#f97316' }, { n: 'TikTok Shop', cur: 7.8, pre: 4.59, c: '#0f172a' }, { n: 'Lazada', cur: 0.42, pre: 0.67, c: '#3b82f6' }],
        brand: [{ n: 'Thiên Long', cur: 12.44, pre: 6.77, c: '#1a56db' }, { n: 'Hà My Bookstore', cur: 5.23, pre: 9.31, c: '#3b82f6' }, { n: 'Total', cur: 4.7, pre: 4.19, c: '#10b981' }, { n: 'H H T Hải Tiến', cur: 4.5, pre: 3.53, c: '#f97316' }, { n: 'Hồng Hà', cur: 4.02, pre: 3.72, c: '#ef4444' }, { n: 'Hải Tiến', cur: 3.92, pre: 4.52, c: '#8b5cf6' }, { n: 'Hong Ha', cur: 3.84, pre: 3.53, c: '#f59e0b' }, { n: 'Hiệp Phong', cur: 3.51, pre: 5.32, c: '#3b82f6' }, { n: 'Classmate', cur: 3.01, pre: 1.41, c: '#8b5cf6' }, { n: 'Others', cur: 54.83, pre: 57.72, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 1.101, l: 0, t: 0 }, { r: '10K-30K', s: 5.019, l: 0, t: 0 }, { r: '30K-50K', s: 4.336, l: 0, t: 0 }, { r: '50K-75K', s: 6.814, l: 0, t: 0 }, { r: '75K-100K', s: 5.194, l: 0, t: 0 }, { r: '100K-150K', s: 3.777, l: 0, t: 0 }, { r: '150K-200K', s: 1.478, l: 0, t: 0 }, { r: '200K-350K', s: 0.747, l: 0, t: 0 }, { r: '350K-500K', s: 0.01, l: 0, t: 0 }, { r: '500K-750K', s: 0.03, l: 0, t: 0 }, { r: '750K-1M', s: 0.15, l: 0, t: 0 }, { r: '1M-1.5M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'TẶNG 02 CUỐN Combo 10 Tập học sinh 96 trang 4 ô ly vuông 2mm', sc: 'tap_vo', br: 'Thiên Long', ch: 'shopee', pr: '136K', fm: 'Combo', rv: '830.1 Tr', g: '+32%', us: '6.0K', ug: '+28%', tr: '1.6 Tỷ', tu: '11.9K', re: '1,602', url: 'https://shopee.vn/product/101480242/29587705915' },
          { n: 'SIÊU SALE HỜI 10 TẶNG 10 CUỐN Vở 96 TRANG 4 ÔLI', sc: 'tap_vo', br: 'Việt Long', ch: 'tiktok', pr: '163.9K', fm: 'Combo', rv: '748.6 Tr', g: '+1515%', us: '4.8K', ug: '+1440%', tr: '1.4 Tỷ', tu: '10.2K', re: '986', url: 'https://www.tiktok.com/view/product/1730317625553030129' },
          { n: 'Tập Vở Học Tập B5 - A3 Dạng Ngang S67-S80 Kẻ Caro 30-50 Trang', sc: 'tap_vo', br: 'Tuệ Minh', ch: 'tiktok', pr: '29.6K', fm: 'Combo', rv: '515.5 Tr', g: '+44%', us: '18.7K', ug: '+45%', tr: '669.3 Tr', tu: '24.0K', re: '1,313', url: 'https://www.tiktok.com/view/product/1731613652387529894' },
          { n: 'NY LỐC 10 QUYỂN TẬP 96 TRANG ĐỊNH LƯỢNG 60-70-80-100-120', sc: 'tap_vo', br: 'Hải Hà', ch: 'shopee', pr: '57.6K', fm: 'Combo', rv: '408.6 Tr', g: '+30%', us: '7.2K', ug: '+25%', tr: '1.1 Tỷ', tu: '20.2K', re: '1,568', url: 'https://shopee.vn/product/87162080/29908288406' },
          { n: 'Vở Kẻ Ngang B5 HUERARUMO 300-500 Trang Bìa Bồi Cứng Giấy viết', sc: 'tap_vo', br: 'HUERARUMO', ch: 'tiktok', pr: '80.3K', fm: 'Single', rv: '393.7 Tr', g: '+127%', us: '5.4K', ug: '+121%', tr: '401.8 Tr', tu: '5.5K', re: '301', url: 'https://www.tiktok.com/view/product/1732864714683221266' },
          { n: 'Combo 10 Quyển Tập Vở Học Sinh ABC 96 Trang Khổ A5 70 80gsm', sc: 'tap_vo', br: 'Hà My Bookstore', ch: 'shopee', pr: '77K', fm: 'Combo', rv: '390.3 Tr', g: '+321%', us: '4.9K', ug: '+337%', tr: '2.7 Tỷ', tu: '37.9K', re: '4,332', url: 'https://shopee.vn/product/268018871/9628493947' },
          { n: 'QUÀ TẶNG 7 1 HÌNH Sticker NGẦU NHIÊN DÁN trang trí dán tập vở', sc: 'tap_vo', br: 'VCM Dragon 1991', ch: 'shopee', pr: '300K', fm: 'Single', rv: '385.8 Tr', g: '+61%', us: '1.3K', ug: '+61%', tr: '625.5 Tr', tu: '2.1K', re: '392', url: 'https://shopee.vn/product/878113998/45857314078' },
          { n: 'Vở Ô Ly Hồng Hà Cho Học Sinh Bạn Nhỏ Chất Giấy Bền Siêu Dài', sc: 'tap_vo', br: 'Hong Ha', ch: 'shopee', pr: '114K', fm: 'Single', rv: '279.6 Tr', g: '+267%', us: '2.7K', ug: '+252%', tr: '536.6 Tr', tu: '5.3K', re: '444', url: 'https://shopee.vn/product/880096618/27956762947' },
          { n: 'Combo 10 quyển Tập Vở Học Sinh ABC 96 Trang A5 Giấy 70Gsm', sc: 'tap_vo', br: 'Hà My Bookstore', ch: 'tiktok', pr: '86.1K', fm: 'Combo', rv: '239.7 Tr', g: '+310%', us: '2.9K', ug: '+280%', tr: '1.3 Tỷ', tu: '17.8K', re: '1,233', url: 'https://www.tiktok.com/view/product/1730999647168989590' },
          { n: 'TẶNG STICKER Vở 300 500 trang bìa bồi cứng kẻ ngang 70gsm', sc: 'tap_vo', br: 'Crabit', ch: 'shopee', pr: '54K', fm: 'Single', rv: '208.3 Tr', g: '+155%', us: '3.9K', ug: '+182%', tr: '334.6 Tr', tu: '6.1K', re: '861', url: 'https://shopee.vn/product/19268307/41725318199' }
        ]
      },
      balo: {
        kpi: [{ l: 'Gross Sales (VND)', v: '54.7', u: 'Tỷ', g: '-13%', sub: 'vs 63 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '374', u: 'Nghìn', g: '-6%', sub: 'vs 396.4 nghìn in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '48.9%', u: '', g: '+14.1pp', sub: 'vs 34.8% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '2.4', u: 'Nghìn', g: '-7%', sub: 'vs 2.6 nghìn in YTD H1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '54.7', u: 'Tỷ', g: '-13%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~14%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '48.9%', u: '', g: '+14.1pp', sub: 'vs 34.8% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Natoli (5.3%)', u: '', g: '', sub: '2/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 27.6, pre: 40.26, c: '#f97316' }, { n: 'TikTok Shop', cur: 26.76, pre: 21.92, c: '#0f172a' }, { n: 'Lazada', cur: 0.34, pre: 0.79, c: '#3b82f6' }],
        brand: [{ n: 'Natoli', cur: 5.31, pre: 2.86, c: '#f97316' }, { n: 'Genbag', cur: 1.83, pre: 2.66, c: '#1a56db' }, { n: 'Như Ý Shop', cur: 1.35, pre: 0, c: '#10b981' }, { n: 'Tee Sik', cur: 1.25, pre: 0, c: '#8b5cf6' }, { n: 'Ez Balo', cur: 1.25, pre: 0.89, c: '#ef4444' }, { n: 'Deli', cur: 0.89, pre: 0.35, c: '#ef4444' }, { n: 'Classmate', cur: 0.63, pre: 0.07, c: '#8b5cf6' }, { n: 'Thiên Long', cur: 0.45, pre: 0.19, c: '#1a56db' }, { n: 'Quaff', cur: 0.02, pre: 0, c: '#f97316' }, { n: 'Yowei', cur: 0.01, pre: 0, c: '#f59e0b' }, { n: 'Others', cur: 86.99, pre: 92.98, c: '#cbd5e1' }],
        price: [{ r: '10K-30K', s: 0.371, l: 0, t: 0 }, { r: '30K-50K', s: 1.812, l: 0, t: 0 }, { r: '50K-75K', s: 3.535, l: 0, t: 0 }, { r: '75K-100K', s: 3.742, l: 0, t: 0 }, { r: '100K-150K', s: 8.674, l: 0, t: 0 }, { r: '150K-200K', s: 9.798, l: 0, t: 0 }, { r: '200K-350K', s: 17.145, l: 0, t: 0 }, { r: '350K-500K', s: 5.849, l: 0, t: 0 }, { r: '500K-750K', s: 2.298, l: 0, t: 0 }, { r: '750K-1M', s: 1.084, l: 0, t: 0 }, { r: '< 10K', s: 0, l: 0, t: 0 }, { r: '1M-1.5M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Balo Đi Học Thời Trang Hip Balo', sc: 'balo', br: 'Balo HIP', ch: 'tiktok', pr: '228K', fm: 'Trend', rv: '1.6 Tỷ', g: '+19%', us: '7.0K', ug: '-5%', tr: '22.4 Tỷ', tu: '139.0K', re: '13,798', url: 'https://www.tiktok.com/view/product/1730256379947223841' },
          { n: 'Balo nam nữ Natoli chống nước (Mã 1)', sc: 'balo', br: 'Natoli', ch: 'shopee', pr: '250K', fm: 'Single', rv: '1.2 Tỷ', g: '+29%', us: '4.8K', ug: '+11%', tr: '14.0 Tỷ', tu: '60.4K', re: '16,733', url: 'https://shopee.vn/product/515748887/12786241026' },
          { n: 'Balo thương hiệu Natoli Basic (Mã 2)', sc: 'balo', br: 'Natoli', ch: 'tiktok', pr: '280K', fm: 'Basic', rv: '953.8 Tr', g: '+28%', us: '3.4K', ug: '+13%', tr: '9.0 Tỷ', tu: '39.6K', re: '4,490', url: 'https://www.tiktok.com/view/product/1729439994934889330' },
          { n: 'Balo vải bố in hình gấu dễ thương', sc: 'balo', br: 'LION store', ch: 'tiktok', pr: '40K', fm: 'Cute', rv: '801.0 Tr', g: '+88%', us: '19.8K', ug: '+72%', tr: '1.7 Tỷ', tu: '46.9K', re: '5,642', url: 'https://www.tiktok.com/view/product/1730110922353182764' },
          { n: 'Balo nữ GENBAG ulzzang trơn basic', sc: 'balo', br: 'Genbag', ch: 'tiktok', pr: '227K', fm: 'Ulzzang', rv: '771.5 Tr', g: '+75%', us: '3.4K', ug: '+46%', tr: '4.7 Tỷ', tu: '22.3K', re: '2,665', url: 'https://www.tiktok.com/view/product/1729818001856957009' },
          { n: 'Balo họa tiết dễ thương (Mihachi)', sc: 'balo', br: 'Mihachi', ch: 'tiktok', pr: '76K', fm: 'Họa tiết', rv: '509.5 Tr', g: '+217%', us: '6.7K', ug: '+188%', tr: '706.2 Tr', tu: '11.4K', re: '3,178', url: 'https://shopee.vn/product/29037116/44458528652' },
          { n: 'Balo Hello Kitty dáng yêu cute', sc: 'balo', br: 'OEM/Khác', ch: 'tiktok', pr: '94K', fm: 'Cute', rv: '498.9 Tr', g: '+37%', us: '5.3K', ug: '+22%', tr: '1.4 Tỷ', tu: '15.8K', re: '2,097', url: 'https://www.tiktok.com/view/product/1731967841856358013' },
          { n: 'Balo mẫu giáo 1-5 tuổi (Baloha)', sc: 'balo', br: 'Baloha', ch: 'tiktok', pr: '95K', fm: 'Kids', rv: '447.0 Tr', g: '+136%', us: '4.7K', ug: '+87%', tr: '3.0 Tỷ', tu: '46.2K', re: '4,868', url: 'https://www.tiktok.com/view/product/1729596877973456992' },
          { n: 'Balo học sinh siêu nhẹ cấp 1-2', sc: 'balo', br: 'OEM/Khác', ch: 'tiktok', pr: '165K', fm: 'Siêu nhẹ', rv: '446.5 Tr', g: '+28%', us: '2.7K', ug: '+16%', tr: '4.3 Tỷ', tu: '28.6K', re: '2,074', url: 'https://www.tiktok.com/view/product/1730326057829960444' },
          { n: 'Balo Ulzzang Hàn Quốc trơn basic', sc: 'balo', br: 'Belle Bag', ch: 'shopee', pr: '114K', fm: 'Ulzzang', rv: '444.5 Tr', g: '+47%', us: '3.9K', ug: '+53%', tr: '7.3 Tỷ', tu: '71.3K', re: '16,085', url: 'https://shopee.vn/product/975629330/20977181092' }
        ]
      },
      gom: {
        kpi: [{ l: 'Gross Sales (VND)', v: '9.3', u: 'Tỷ', g: '+52%', sub: 'vs 6.1 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '759.2', u: 'Nghìn', g: '-38%', sub: 'vs 1221.3 nghìn in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '28.8%', u: '', g: '+10pp', sub: 'vs 18.8% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '3.4', u: 'Nghìn', g: '-11%', sub: 'vs 3.8 nghìn in YTD H1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '9.3', u: 'Tỷ', g: '+52%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~21.6%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '28.8%', u: '', g: '+10pp', sub: 'vs 18.8% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (57%)', u: '', g: '', sub: '10/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 6.5, pre: 4.7, c: '#f97316' }, { n: 'TikTok Shop', cur: 2.65, pre: 1.14, c: '#0f172a' }, { n: 'Lazada', cur: 0.06, pre: 0.22, c: '#3b82f6' }],
        brand: [{ n: 'Deli', cur: 57, pre: 39.87, c: '#ef4444' }, { n: 'Thiên Long', cur: 5.61, pre: 9.81, c: '#1a56db' }, { n: 'Tombow', cur: 1.79, pre: 2.78, c: '#8b5cf6' }, { n: 'Four Candies', cur: 1.21, pre: 0.63, c: '#10b981' }, { n: 'G-Star', cur: 1.03, pre: 1.24, c: '#10b981' }, { n: 'Quaff', cur: 0.94, pre: 0, c: '#f97316' }, { n: 'Sao Thiên', cur: 0.73, pre: 0, c: '#f97316' }, { n: 'Others', cur: 31.69, pre: 45.66, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 2.455, l: 0, t: 0 }, { r: '10K-30K', s: 3.658, l: 0, t: 0 }, { r: '30K-50K', s: 1.973, l: 0, t: 0 }, { r: '50K-75K', s: 0.547, l: 0, t: 0 }, { r: '75K-100K', s: 0.333, l: 0, t: 0 }, { r: '100K-150K', s: 0.168, l: 0, t: 0 }, { r: '150K-200K', s: 0.057, l: 0, t: 0 }, { r: '200K-350K', s: 0.04, l: 0, t: 0 }, { r: '350K-500K', s: 0, l: 0, t: 0 }, { r: '500K-750K', s: 0.03, l: 0, t: 0 }, { r: '750K-1M', s: 0.15, l: 0, t: 0 }, { r: '1M-1.5M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Set 4 5 6 tẩy không vụn Nusign x Deli - Cục gôm tẩy trắng siêu sạch', sc: 'gom', br: 'Deli', ch: 'tiktok', pr: '40K', fm: 'Single', rv: '935.4 Tr', g: '+22%', us: '30.4K', ug: '+39%', tr: '1.8 Tỷ', tu: 'N/A', re: '4,653', url: 'https://www.tiktok.com/view/product/1730991643525286527' },
          { n: 'Hộp 6 Gôm Tẩy Siêu Sạch Deli Nusign Cao Cấp Tẩy Mềm Siêu Sạch', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '18K', fm: 'Single', rv: '172.4 Tr', g: '-19%', us: '7.5K', ug: '-1%', tr: '490.9 Tr', tu: 'N/A', re: '4,417', url: 'https://shopee.vn/product/127805122/26213312447' },
          { n: 'Gôm Tẩy Deli Màu Trắng - Tẩy Sạch Ít Vụn Phù Hợp Cho Học Sinh', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '3K', fm: 'Single', rv: '166.1 Tr', g: '+59%', us: '45.1K', ug: '+107%', tr: '629.6 Tr', tu: 'N/A', re: '20,661', url: 'https://shopee.vn/product/127805122/3824689315' },
          { n: 'Gôm Tẩy Định Vị Tẩy Bút Chì Deli Tẩy Sạch Ít Vụn Không Mòn', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '9K', fm: 'Single', rv: '161.8 Tr', g: '+30%', us: '19.0K', ug: '+28%', tr: '472.6 Tr', tu: 'N/A', re: '8,469', url: 'https://shopee.vn/product/127805122/28757886370' },
          { n: 'Hộp 6 Gôm Tẩy Siêu Sạch Deli Nusign Cao Cấp Tẩy Mềm Ít Vụn', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '18K', fm: 'Single', rv: '140.3 Tr', g: '+24%', us: '7.4K', ug: '+2%', tr: '300.4 Tr', tu: 'N/A', re: '3,181', url: 'https://shopee.vn/product/348955539/29568624298' },
          { n: 'Gôm tẩy 2 đầu Deli 71115 - Tẩy bút mực và tẩy chì hai đầu', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '35K', fm: 'Single', rv: '125.2 Tr', g: '+278%', us: '3.8K', ug: '+241%', tr: '250.9 Tr', tu: 'N/A', re: '1,226', url: 'https://shopee.vn/product/113413980/27967048282' },
          { n: 'Gôm Tẩy Chì 2B 4B Deli Màu Đen Tẩy Sạch Ít Vụn Tẩy Nhỏ Gọn', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '3K', fm: 'Single', rv: '95.4 Tr', g: '+122%', us: '30.5K', ug: '+245%', tr: '679.8 Tr', tu: 'N/A', re: '27,605', url: 'https://shopee.vn/product/127805122/6175440807' },
          { n: 'Gôm Tẩy Bút Chì Siêu Sạch Chuyên Dùng Cho Học Sinh Deli', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '3K', fm: 'Single', rv: '73.2 Tr', g: '+79%', us: '25.0K', ug: '+168%', tr: '476.6 Tr', tu: 'N/A', re: '13,723', url: 'https://shopee.vn/product/348955539/9951634937' },
          { n: 'Gôm Tẩy Chì 2B Deli - Nhiều Màu - Tẩy sạch ít vụn không mòn', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '4.5K', fm: 'Single', rv: '70.7 Tr', g: '+93%', us: '13.8K', ug: '+164%', tr: '520.7 Tr', tu: 'N/A', re: '12,987', url: 'https://shopee.vn/product/127805122/7288839925' },
          { n: 'Hộp 6 Gôm Tẩy Bút Chì Nusign Cao Cấp Siêu Sạch Ít Vụn Không Mòn', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '6.5K', fm: 'Single', rv: '64.4 Tr', g: '+483%', us: '7.8K', ug: '+292%', tr: '87.9 Tr', tu: 'N/A', re: '1,862', url: 'https://shopee.vn/product/464418479/27074209091' }
        ]
      }
    }
  },
  my_thuat: {
    n: 'Mỹ Thuật', i: '🎨',
    sc: [{ k: 'all', n: 'All', i: '📊' }, { k: 'sap_mau', n: 'Sáp Màu', i: '🖍️' }, { k: 'acrylic', n: 'Acrylic Markers', i: '🖋️' }, { k: 'long_mt', n: 'Bút Lông Màu', i: '🖌️' }, { k: 'chi_mau', n: 'Bút Chì Màu', i: '✏️' }, { k: 'mau_nuoc', n: 'Màu Nước', i: '💧' }],
    kpi: [{ l: 'Gross Sales (VND)', v: '187.7', u: 'Tỷ', g: '+27%', sub: 'vs 147.5 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '4.4', u: 'Triệu', g: '-17%', sub: 'vs 5.3 triệu in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '35.5%', u: '', g: '+6.4pp', sub: 'vs 29.1% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '14.9', u: 'Nghìn', g: '-5%', sub: 'vs 15.7 nghìn in YTD H1 2025', ic: 'orange' }],
    dkpi: [{ l: 'Gross Sales (VND)', v: '187.7', u: 'Tỷ', g: '+27%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~6.9%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '35.5%', u: '', g: '+6.4pp', sub: 'vs 29.1% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (21.3%)', u: '', g: '', sub: '1/10 Top SKU Spots', ic: 'orange' }],
    plat: [{ n: 'Shopee', cur: 119.6, pre: 100.39, c: '#f97316' }, { n: 'TikTok Shop', cur: 66.6, pre: 42.97, c: '#0f172a' }, { n: 'Lazada', cur: 1.56, pre: 4.05, c: '#3b82f6' }],
    brand: [{ n: 'Deli', cur: 21.29, pre: 17.48, c: '#ef4444' }, { n: 'Bossee', cur: 6.03, pre: 0.61, c: '#f97316' }, { n: 'Colokit', cur: 5.81, pre: 4.63, c: '#fbbf24' }, { n: 'Global Art', cur: 5.21, pre: 3.09, c: '#10b981' }, { n: 'Mont Marte', cur: 5.14, pre: 4.24, c: '#8b5cf6' }, { n: 'Thiên Long', cur: 2.19, pre: 2.4, c: '#1a56db' }, { n: 'Pentel', cur: 1.44, pre: 1.25, c: '#f97316' }, { n: 'Others', cur: 52.9, pre: 66.31, c: '#cbd5e1' }],
    price: [{ r: '< 10K', s: 1.19, l: 0, t: 0 }, { r: '10K-30K', s: 34.63, l: 0, t: 0 }, { r: '30K-50K', s: 36.74, l: 0, t: 0 }, { r: '50K-75K', s: 34.86, l: 0, t: 0 }, { r: '75K-100K', s: 20.34, l: 0, t: 0 }, { r: '100K-150K', s: 18.13, l: 0, t: 0 }, { r: '150K-200K', s: 9.29, l: 0, t: 0 }, { r: '200K-350K', s: 18.47, l: 0, t: 0 }, { r: '350K-500K', s: 6.2, l: 0, t: 0 }, { r: '500K-750K', s: 3.28, l: 0, t: 0 }, { r: '750K-1M', s: 1.07, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.72, l: 0, t: 0 }, { r: '1.5M-2M', s: 0.39, l: 0, t: 0 }, { r: '<10K', s: 1.88, l: 0, t: 0 }, { r: '2M-3.5M', s: 0.38, l: 0, t: 0 }, { r: '3.5M-5M', s: 0.03, l: 0, t: 0 }, { r: '5M-7.5M', s: 0.02, l: 0, t: 0 }, { r: '7.5M-10M', s: 0.02, l: 0, t: 0 }],
    prod: [
      { n: 'Hộp 60 bút màu Acrylic Marker cao cấp chống nước màu sắc tươi sáng', sc: 'acrylic', br: 'Others', ch: 'tiktok', pr: '75.4K', fm: 'Single', rv: '5.1 Tỷ', g: '-38%', us: '74.6K', ug: '-40%', tr: '13.7 Tỷ', tu: 'N/A', re: '16,462', url: 'https://www.tiktok.com/view/product/1730750363609630947' },
      { n: 'Hộp Bút Chì Màu Gốc Dầu Cao Cấp Global Art 36 72 Màu Đậm', sc: 'chi_mau', br: 'Others', ch: 'tiktok', pr: '407K', fm: 'Single', rv: '1.6 Tỷ', g: '-11%', us: '5.0K', ug: '-18%', tr: '3.5 Tỷ', tu: 'N/A', re: '1,448', url: 'https://www.tiktok.com/view/product/1730350149081336202' },
      { n: 'Bút vẽ màu sơn Bút sửa chữa Chống thấm nước', sc: 'all', br: 'Others', ch: 'tiktok', pr: '17K', fm: 'Single', rv: '1.4 Tỷ', g: '-61%', us: '87.1K', ug: '-63%', tr: '7.2 Tỷ', tu: 'N/A', re: '35,374', url: 'https://www.tiktok.com/view/product/1729618020483369405' },
      { n: 'TOP 1 TẶNG 80% MỰC Bút Sơn Acrylic Marker Deli Chính Hãng', sc: 'all', br: 'Deli', ch: 'shopee', pr: '39K', fm: 'Single', rv: '799.7 Tr', g: '+241%', us: '13.3K', ug: '+137%', tr: '2.1 Tỷ', tu: 'N/A', re: '18,600', url: 'https://shopee.vn/product/348955539/25215129183' },
      { n: 'Bút sáp màu lụa JUPIEARTH', sc: 'sap_mau', br: 'JUPIEARTH', ch: 'tiktok', pr: '89K', fm: 'Lụa', rv: '782.9 Tr', g: '+152%', us: '8.8K', ug: '+77%', tr: '1.6 Tỷ', tu: '20.8K', re: '1,418', url: 'https://www.tiktok.com/view/product/1731970909916859173' },
      { n: 'Túi Hồ Sơ 13 Ngăn M.Y.Never 24.5x37x3cm PP Chống Nước', sc: 'all', br: 'Others', ch: 'tiktok', pr: '39.5K', fm: 'Single', rv: '767.8 Tr', g: '+140%', us: '20.0K', ug: '+126%', tr: '1.1 Tỷ', tu: 'N/A', re: '1,504', url: 'https://www.tiktok.com/view/product/1733043773277112211' },
      { n: 'Bút Màu Dạ 120 Màu Marker Acrylic', sc: 'acrylic', br: 'Bossee', ch: 'shopee', pr: '38K', fm: '120 Colors', rv: '668.7 Tr', g: '-29%', us: '17.7K', ug: '-29%', tr: '1.8 Tỷ', tu: '48.5K', re: '9,991', url: 'https://shopee.vn/product/1437074218/42500627746' },
      { n: 'Hộp 60 bút màu Acrylic (Gấu xoăn)', sc: 'acrylic', br: 'OEM/Khác', ch: 'tiktok', pr: '72K', fm: 'Set 60', rv: '664.2 Tr', g: '+118%', us: '9.3K', ug: '+98%', tr: '1.7 Tỷ', tu: '25.3K', re: '2,631', url: 'https://www.tiktok.com/view/product/1730998624837732431' },
      { n: 'Thẻ Thực Hành Đồ Chơi Bộ 4 Thẻ Và 1 Bút Màu Vui Nhộn Số Đồ Đỏ', sc: 'all', br: 'Others', ch: 'tiktok', pr: '81.3K', fm: 'Single', rv: '587.4 Tr', g: '+51%', us: '8.1K', ug: '+43%', tr: '1.8 Tỷ', tu: 'N/A', re: '1,398', url: 'https://www.tiktok.com/view/product/1732072840465515874' },
      { n: 'Bút Màu Sáp Vặn Hữu Cơ ClassMate', sc: 'sap_mau', br: 'Classmate', ch: 'tiktok', pr: '38K', fm: 'Hữu cơ', rv: '585.6 Tr', g: '+14%', us: '15.5K', ug: '+8%', tr: '1.1 Tỷ', tu: '31.0K', re: '2.128', url: 'https://www.tiktok.com/view/product/1732744932751476069' }
    ],
    sdata: {
      sap_mau: {
        kpi: [{ l: 'Gross Sales (VND)', v: '10', u: 'Tỷ', g: '+22%', sub: 'vs 8.2 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '313.5', u: 'Nghìn', g: '-17%', sub: 'vs 375.7 nghìn in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '33%', u: '', g: '+1.5pp', sub: 'vs 31.5% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '2.1', u: 'Nghìn', g: '-14%', sub: 'vs 2.4 nghìn in YTD H1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '10', u: 'Tỷ', g: '+22%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~29.4%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '33%', u: '', g: '+1.5pp', sub: 'vs 31.5% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Jupitearth (12.8%)', u: '', g: '', sub: '0/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 6.6, pre: 5.36, c: '#f97316' }, { n: 'TikTok Shop', cur: 3.3, pre: 2.57, c: '#0f172a' }, { n: 'Lazada', cur: 0.09, pre: 0.23, c: '#3b82f6' }],
        brand: [{ n: 'Jupitearth', cur: 12.85, pre: 2.87, c: '#3b82f6' }, { n: 'Deli', cur: 12.63, pre: 11.1, c: '#ef4444' }, { n: 'Colokit', cur: 10.15, pre: 10.14, c: '#fbbf24' }, { n: 'Classmate', cur: 7.61, pre: 0.25, c: '#8b5cf6' }, { n: 'Thiên Long', cur: 6.16, pre: 9.28, c: '#1a56db' }, { n: 'Mideer', cur: 0.83, pre: 0.64, c: '#06b6d4' }, { n: 'Others', cur: 49.78, pre: 65.74, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.09, l: 0, t: 0 }, { r: '10K-30K', s: 3.075, l: 0, t: 0 }, { r: '30K-50K', s: 2.146, l: 0, t: 0 }, { r: '50K-75K', s: 0.869, l: 0, t: 0 }, { r: '75K-100K', s: 1.152, l: 0, t: 0 }, { r: '100K-150K', s: 1.168, l: 0, t: 0 }, { r: '150K-200K', s: 0.447, l: 0, t: 0 }, { r: '200K-350K', s: 0.666, l: 0, t: 0 }, { r: '350K-500K', s: 0.132, l: 0, t: 0 }, { r: '500K-750K', s: 0.052, l: 0, t: 0 }, { r: '<10K', s: 0.16, l: 0, t: 0 }, { r: '750K-1M', s: 0, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.03, l: 0, t: 0 }, { r: '1.5M-2M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Bút màu lụa JUPIEARTH Có các loại 12 24 36 màu sắc tươi sáng', sc: 'sap_mau', br: 'Others', ch: 'tiktok', pr: '104K', fm: 'Single', rv: '1.2 Tỷ', g: '+14%', us: '13.6K', ug: '-1%', tr: '2.1 Tỷ', tu: 'N/A', re: '1,856', url: 'https://www.tiktok.com/view/product/1731970909916859173' },
          { n: 'Bút Màu Sáp Vặn Màu Sáp Hữu Cơ ClassMate Màu Mịn Tô Đậm Hạn', sc: 'sap_mau', br: 'Classmate', ch: 'tiktok', pr: '40.5K', fm: 'Single', rv: '420.7 Tr', g: '-28%', us: '11.3K', ug: '-27%', tr: '1.5 Tỷ', tu: 'N/A', re: '3,294', url: 'https://www.tiktok.com/view/product/1732744932751476069' },
          { n: 'Tú cầu phối hoa sáp dáng tròn có 2 màu tặng túi giấy', sc: 'sap_mau', br: 'Others', ch: 'shopee', pr: '209.6K', fm: 'Single', rv: '268.1 Tr', g: '+65%', us: '6.4K', ug: '+7%', tr: '111.9 Tr', tu: 'N/A', re: '42', url: 'https://shopee.vn/product/101480242/1636049426' },
          { n: 'Bút Sáp màu Thiên Long Colokit 24 màu tươi sáng thông dụng tiêu dùng', sc: 'sap_mau', br: 'Thiên Long', ch: 'shopee', pr: '23K', fm: 'Single', rv: '252.1 Tr', g: '-16%', us: '12.9K', ug: '-6%', tr: '1.6 Tỷ', tu: 'N/A', re: '9,869', url: 'https://shopee.vn/product/101480242/1636049068' },
          { n: 'Sáp Màu Hữu Cơ 12 18 24 36 Màu Màu Tươi Đẹp Không Dính Tay An Toàn', sc: 'sap_mau', br: 'Others', ch: 'tiktok', pr: '43.3K', fm: 'Single', rv: '174.9 Tr', g: '-24%', us: '4.3K', ug: '-41%', tr: '496.4 Tr', tu: 'N/A', re: '1,175', url: 'https://www.tiktok.com/view/product/1729602424186768231' },
          { n: 'Sáp đa năng 12 màu rửa được Colo Art Thiên Long Colokit Sáng', sc: 'sap_mau', br: 'Thiên Long', ch: 'shopee', pr: '105.2K', fm: 'Single', rv: '138.6 Tr', g: '+818%', us: '1.7K', ug: '+524%', tr: '181.2 Tr', tu: 'N/A', re: '435', url: 'https://shopee.vn/product/101480242/14492465290' },
          { n: 'TẶNG SỔ PHÁC THẢO Bộ Bút Chì Màu Sáp 48 72 120 Màu Sắc Tươi', sc: 'sap_mau', br: 'Others', ch: 'tiktok', pr: '177.9K', fm: 'Single', rv: '132.7 Tr', g: '-32%', us: '0.8K', ug: '-34%', tr: '720.1 Tr', tu: 'N/A', re: '883', url: 'https://www.tiktok.com/view/product/1729607695017478457' },
          { n: 'Bút Sáp Màu Colokit Doraemon', sc: 'sap_mau', br: 'Colokit', ch: 'shopee', pr: '22K', fm: 'Doraemon', rv: '106.4 Tr', g: '-53%', us: '5.2K', ug: '-54%', tr: '990.0 Tr', tu: '53.1K', re: '7,958', url: 'https://shopee.vn/product/101480242/1636049269' },
          { n: 'TẶNG 6 QUÀ Bút Sáp Màu Deli 12 24 Màu Tươi Sáng Màu Sáp Mịn', sc: 'sap_mau', br: 'Deli', ch: 'tiktok', pr: '10.9K', fm: 'Single', rv: '101.4 Tr', g: '', us: '6.5K', ug: '', tr: '101.9 Tr', tu: 'N/A', re: '255', url: 'https://www.tiktok.com/view/product/1734691480685938258' },
          { n: 'Bút màu cho bé quà sinh nhật cho bé gái hộp màu 150 chi tiết quà', sc: 'sap_mau', br: 'Others', ch: 'shopee', pr: '295K', fm: 'Single', rv: '99.5 Tr', g: '+42%', us: '0.4K', ug: '+37%', tr: '2.0 Tỷ', tu: 'N/A', re: '1,411', url: 'https://shopee.vn/product/884990462/55008852578' }
        ]
      },
      acrylic: {
        kpi: [{ l: 'Gross Sales (VND)', v: '41', u: 'Tỷ', g: '+39%', sub: 'vs 29.4 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '796.4', u: 'Nghìn', g: '-15%', sub: 'vs 940.6 nghìn in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '40.2%', u: '', g: '-0.1pp', sub: 'vs 40.3% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '3.6', u: 'Nghìn', g: '-8%', sub: 'vs 3.9 nghìn in YTD H1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '41', u: 'Tỷ', g: '+39%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~27.2%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '40.2%', u: '', g: '-0.1pp', sub: 'vs 40.3% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (33.8%)', u: '', g: '', sub: '4/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 24.1, pre: 16.38, c: '#f97316' }, { n: 'TikTok Shop', cur: 16.5, pre: 11.8, c: '#0f172a' }, { n: 'Lazada', cur: 0.4, pre: 1.13, c: '#3b82f6' }],
        brand: [{ n: 'Deli', cur: 33.83, pre: 16.58, c: '#ef4444' }, { n: 'Bossee', cur: 18.89, pre: 2.5, c: '#f97316' }, { n: 'Enmy', cur: 4.62, pre: 0, c: '#84cc16' }, { n: 'Colokit', cur: 4.04, pre: 1.74, c: '#fbbf24' }, { n: 'Thiên Long', cur: 1.93, pre: 1.42, c: '#1a56db' }, { n: 'Smartkids', cur: 1.7, pre: 2.28, c: '#f43f5e' }, { n: 'Grasp', cur: 0.6, pre: 0, c: '#f59e0b' }, { n: 'Others', cur: 34.39, pre: 75.48, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.488, l: 0, t: 0 }, { r: '10K-30K', s: 5.096, l: 0, t: 0 }, { r: '30K-50K', s: 7.902, l: 0, t: 0 }, { r: '50K-75K', s: 9.548, l: 0, t: 0 }, { r: '75K-100K', s: 5.314, l: 0, t: 0 }, { r: '100K-150K', s: 2.529, l: 0, t: 0 }, { r: '150K-200K', s: 1.984, l: 0, t: 0 }, { r: '200K-350K', s: 5.29, l: 0, t: 0 }, { r: '350K-500K', s: 1.853, l: 0, t: 0 }, { r: '500K-750K', s: 0.44, l: 0, t: 0 }, { r: '750K-1M', s: 0.254, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.15, l: 0, t: 0 }, { r: '1.5M-2M', s: 0.02, l: 0, t: 0 }, { r: '2M-3.5M', s: 0.1, l: 0, t: 0 }, { r: '3.5M-5M', s: 0, l: 0, t: 0 }, { r: '5M-7.5M', s: 0.01, l: 0, t: 0 }, { r: '7.5M-10M', s: 0, l: 0, t: 0 }, { r: '10M-15M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Hộp 60 bút màu Acrylic Marker cao cấp chống nước màu sắc tươi sáng', sc: 'acrylic', br: 'BinBon Decor', ch: 'tiktok', pr: '75.4K', fm: 'Combo', rv: '5.1 Tỷ', g: '-38%', us: '74.6K', ug: '-40%', tr: '13.7 Tỷ', tu: '210.9K', re: '16,462', url: 'https://www.tiktok.com/view/product/1730750363609630947' },
          { n: 'TOP 1 TẶNG 80% MỰC Bút Sơn Acrylic Marker Deli Chính Hãng', sc: 'acrylic', br: 'Deli', ch: 'shopee', pr: '39K', fm: 'Combo', rv: '1.0 Tỷ', g: '+207%', us: '18.9K', ug: '+39%', tr: '2.1 Tỷ', tu: '97.3K', re: '18,600', url: 'https://shopee.vn/product/348955539/25215129183' },
          { n: 'Bút Màu Dạ Bossee 120 Màu Marker Acrylic Họa Cụ Tô Màu Dạ Vẽ Tranh', sc: 'acrylic', br: 'Bossee', ch: 'shopee', pr: '45K', fm: 'Combo', rv: '995.9 Tr', g: '-38%', us: '25.2K', ug: '-41%', tr: '2.2 Tỷ', tu: '56.1K', re: '11,308', url: 'https://shopee.vn/product/1437074218/42500627746' },
          { n: 'TOP 1 GIÁ SỈ Bút Sơn Acrylic Marker 84 Màu Deli HM335 Dạng Roller', sc: 'acrylic', br: 'Deli', ch: 'shopee', pr: '395K', fm: 'Combo', rv: '896.9 Tr', g: '-16%', us: '2.9K', ug: '-37%', tr: '2.0 Tỷ', tu: '8.9K', re: '1,731', url: 'https://shopee.vn/product/127805122/28935215038' },
          { n: 'VOUCHER GIẢM 52% Bút Sơn Màu Acrylic Maker Roller Deli', sc: 'acrylic', br: 'Deli', ch: 'tiktok', pr: '370.3K', fm: 'Combo', rv: '757.2 Tr', g: '-21%', us: '2.4K', ug: '-42%', tr: '1.6 Tỷ', tu: '10.2K', re: '940', url: 'https://www.tiktok.com/view/product/1731288240825665151' },
          { n: 'Hộp 60 bút màu Acrylic (Gấu xoăn)', sc: 'acrylic', br: 'OEM/Khác', ch: 'tiktok', pr: '65K', fm: 'Set 60', rv: '664.2 Tr', g: '+118%', us: '9.3K', ug: '+98%', tr: '1.7 Tỷ', tu: '25.3K', re: '2,631', url: 'https://www.tiktok.com/view/product/1730998624837732431' },
          { n: 'Bút lông màu Acrylic Marker hộp 60 màu cao cấp dùng cho nhiều bề mặt', sc: 'acrylic', br: 'NTT Store HN', ch: 'tiktok', pr: '58K', fm: 'Combo', rv: '576.0 Tr', g: '+261%', us: '10.9K', ug: '+262%', tr: '1.2 Tỷ', tu: '23.0K', re: '2,248', url: 'https://www.tiktok.com/view/product/1732131667763169918' },
          { n: 'TOP 1 - 84 MÀU Bút Sơn Màu Acrylic Maker Deli Dạng Roller Hộp', sc: 'acrylic', br: 'Deli', ch: 'shopee', pr: '395K', fm: 'Combo', rv: '508.1 Tr', g: '+81%', us: '1.5K', ug: '+59%', tr: '1.0 Tỷ', tu: '3.9K', re: '787', url: 'https://shopee.vn/product/348955539/43803090618' },
          { n: 'MW Bộ bút dạ lông, Acrylic Marker, đầu cọ mềm 48 60 80 120 màu', sc: 'acrylic', br: 'Miracle Works', ch: 'shopee', pr: '339K', fm: 'Combo', rv: '333.9 Tr', g: '+3032%', us: '1.2K', ug: '+2180%', tr: '344.5 Tr', tu: '1.2K', re: '240', url: 'https://shopee.vn/product/1370113610/46454533197' },
          { n: 'Bộ 12 24 36 48 60 80 120 Bút Màu Acrylic Marker Đầu Tròn Thân Bút', sc: 'acrylic', br: 'Bossee', ch: 'tiktok', pr: '29.9K', fm: 'Combo', rv: '277.1 Tr', g: '+78%', us: '16.2K', ug: '+52%', tr: '871.6 Tr', tu: '48.7K', re: '4,104', url: 'https://www.tiktok.com/view/product/1731376175186413203' }
        ]
      },
      long_mt: {
        kpi: [{ l: 'Gross Sales (VND)', v: '7.8', u: 'Tỷ', g: '+42%', sub: 'vs 5.5 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '178.4', u: 'Nghìn', g: '-2%', sub: 'vs 182.4 nghìn in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '39.7%', u: '', g: '+13.5pp', sub: 'vs 26.2% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.3', u: 'Nghìn', g: '-19%', sub: 'vs 1.6 nghìn in YTD H1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '7.8', u: 'Tỷ', g: '+42%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~31.8%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '39.7%', u: '', g: '+13.5pp', sub: 'vs 26.2% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Colokit (31.2%)', u: '', g: '', sub: '0/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 4.6, pre: 3.89, c: '#f97316' }, { n: 'TikTok Shop', cur: 3.1, pre: 1.44, c: '#0f172a' }, { n: 'Lazada', cur: 0.1, pre: 0.17, c: '#3b82f6' }],
        brand: [{ n: 'Colokit', cur: 31.19, pre: 42.82, c: '#fbbf24' }, { n: 'Thiên Long', cur: 23.08, pre: 21.53, c: '#1a56db' }, { n: 'Deli', cur: 6.74, pre: 5.46, c: '#ef4444' }, { n: 'Enmy', cur: 2.47, pre: 0, c: '#84cc16' }, { n: 'Bossee', cur: 1.27, pre: 0, c: '#f97316' }, { n: 'Classmate', cur: 0.38, pre: 0.21, c: '#8b5cf6' }, { n: 'Others', cur: 34.86, pre: 29.99, c: '#cbd5e1' }],
        price: [{ r: '10K-30K', s: 3.009, l: 0, t: 0 }, { r: '30K-50K', s: 3.745, l: 0, t: 0 }, { r: '50K-75K', s: 4.822, l: 0, t: 0 }, { r: '75K-100K', s: 4.167, l: 0, t: 0 }, { r: '100K-150K', s: 3.032, l: 0, t: 0 }, { r: '150K-200K', s: 1.429, l: 0, t: 0 }, { r: '200K-350K', s: 0.812, l: 0, t: 0 }, { r: '< 10K', s: 0.77, l: 0, t: 0 }, { r: '350K-500K', s: 0.01, l: 0, t: 0 }, { r: '500K-750K', s: 0.03, l: 0, t: 0 }, { r: '750K-1M', s: 0.15, l: 0, t: 0 }, { r: '1M-1.5M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Bút lông màu Acrylic Marker hộp 60 màu cao cấp màu sắc tươi sáng', sc: 'long_mt', br: 'Others', ch: 'shopee', pr: '58K', fm: 'Single', rv: '576.0 Tr', g: '+261%', us: '10.9K', ug: '+262%', tr: '1.2 Tỷ', tu: 'N/A', re: '2,248', url: 'https://shopee.vn/product/291755819/19685261142' },
          { n: 'Bút lông Fiber Pen Morandi (Mã 1)', sc: 'long_mt', br: 'Thiên Long', ch: 'tiktok', pr: '35K', fm: 'Morandi', rv: '431.7 Tr', g: '-25%', us: '9.0K', ug: '-46%', tr: '1.2 Tỷ', tu: '35.4K', re: '3,865', url: 'https://www.tiktok.com/view/product/1732234717911157753' },
          { n: 'Hộp Bút Lông 48 60 Màu Washable (Mã 1)', sc: 'long_mt', br: 'Thiên Long', ch: 'tiktok', pr: '125K', fm: 'Washable', rv: '287.1 Tr', g: '+310%', us: '1.8K', ug: '+256%', tr: '366.0 Tr', tu: '2.4K', re: '283', url: 'https://www.tiktok.com/view/product/1732761890580236281' },
          { n: 'Bút lông màu Fiber Pen Thiên Long Colokit 5 12 24 màu Morandi', sc: 'long_mt', br: 'Thiên Long', ch: 'shopee', pr: '44.9K', fm: 'Single', rv: '272.5 Tr', g: '-37%', us: '6.3K', ug: '-29%', tr: '1.4 Tỷ', tu: 'N/A', re: '4,756', url: 'https://shopee.vn/product/1085507384/22256665441' },
          { n: 'Tặng 2 4 6 màu Acrylic Markers 12 24 36 màu Thiên Long Colokit', sc: 'long_mt', br: 'Thiên Long', ch: 'shopee', pr: '65K', fm: 'Single', rv: '235.4 Tr', g: '+12%', us: '3.4K', ug: '-23%', tr: '766.7 Tr', tu: 'N/A', re: '2,555', url: 'https://shopee.vn/product/364058386/6396654253' },
          { n: 'Bút lông Fiber Pen Colokit (Có thể rửa)', sc: 'long_mt', br: 'Thiên Long', ch: 'shopee', pr: '48K', fm: 'Fiber Pen', rv: '163.0 Tr', g: '-20%', us: '3.8K', ug: '-14%', tr: '4.8 Tỷ', tu: '97.2K', re: '30,740', url: 'https://shopee.vn/product/101480242/8327433608' },
          { n: 'Bút lông Fiber Pen Morandi (Mã 2)', sc: 'long_mt', br: 'Thiên Long', ch: 'shopee', pr: '35K', fm: 'Morandi', rv: '155.4 Tr', g: '-17%', us: '6.7K', ug: '+3%', tr: '625.0 Tr', tu: '23.4K', re: '5,785', url: 'https://shopee.vn/product/101480242/29931655506' },
          { n: 'Bộ Bút Lông 20 36 Màu Rửa Được', sc: 'long_mt', br: 'Thiên Long', ch: 'tiktok', pr: '65K', fm: 'Washable', rv: '140.6 Tr', g: '-38%', us: '2.6K', ug: '-45%', tr: '585.5 Tr', tu: '12.3K', re: '1,352', url: 'https://www.tiktok.com/view/product/1729549833724529657' },
          { n: 'Bút lông màu Felt Pen Deli 20 36 màu - Màu an toàn có thể rửa', sc: 'long_mt', br: 'Deli', ch: 'tiktok', pr: '58.3K', fm: 'Single', rv: '112.4 Tr', g: '+17%', us: '2.2K', ug: '+25%', tr: '549.2 Tr', tu: 'N/A', re: '1,410', url: 'https://www.tiktok.com/view/product/1732260110127171841' },
          { n: 'Bút lông màu Fiber Pen Thiên Long Colokit 20 36 màu', sc: 'long_mt', br: 'Thiên Long', ch: 'shopee', pr: '66K', fm: 'Single', rv: '105.4 Tr', g: '+28%', us: '2.0K', ug: '+27%', tr: '1.5 Tỷ', tu: 'N/A', re: '9,921', url: 'https://shopee.vn/product/978296801/29282148614' }
        ]
      },
      chi_mau: { /* single-quarter fallback: only one quarter had this sub-category */
        kpi: [{ l: 'Gross Sales (VND)', v: '6.7', u: 'Tỷ', g: '+47%', sub: 'vs 4.5 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '89.0', u: 'Nghìn', g: '0%', sub: 'vs 89.4 nghìn in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '45.1%', u: '', g: '+14.7pp', sub: 'vs 30.4% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '968', u: '', g: '+2%', sub: 'vs 950 in YTD H1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '6.7', u: 'Tỷ', g: '+47%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~47.0%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '45.1%', u: '', g: '+14.7pp', sub: 'vs 30.4% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Global Art (41.7%)', u: '', g: '', sub: '3/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 3.6, pre: 2.98, c: '#f97316' }, { n: 'TikTok Shop', cur: 3, pre: 1.37, c: '#0f172a' }, { n: 'Lazada', cur: 0.0499, pre: 0.161, c: '#3b82f6' }],
        brand: [{ n: 'Global Art', cur: 41.7, pre: 8.9, c: '#10b981' }, { n: 'Deli', cur: 39.4, pre: 48.2, c: '#ef4444' }, { n: 'Gia Hưng', cur: 7.5, pre: 2.5, c: '#a855f7' }, { n: 'Finenolo', cur: 3.5, pre: 7.1, c: '#6366f1' }, { n: 'Colokit', cur: 2.6, pre: 0.9, c: '#fbbf24' }, { n: 'Others', cur: 5.3, pre: 32.4, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.129, l: 0, t: 0 }, { r: '10K-30K', s: 0.712, l: 0, t: 0 }, { r: '30K-50K', s: 0.514, l: 0, t: 0 }, { r: '50K-75K', s: 0.45, l: 0, t: 0 }, { r: '75K-100K', s: 0.34, l: 0, t: 0 }, { r: '100K-150K', s: 1.061, l: 0, t: 0 }, { r: '150K-200K', s: 0.834, l: 0, t: 0 }, { r: '200K-350K', s: 2.396, l: 0, t: 0 }, { r: '350K-500K', s: 0.106, l: 0, t: 0 }, { r: '500K-750K', s: 0.073, l: 0, t: 0 }],
        prod: [
          { n: 'Hộp Bút Chì Màu Gốc Dầu Global Art (Mã 1)', sc: 'chi_mau', br: 'Global Art', ch: 'tiktok', pr: '318K', fm: 'Gốc dầu', rv: '1.1 Tỷ', g: '+53%', us: '3.5K', ug: '+31%', tr: '3.0 Tỷ', tu: '11.0K', re: '1,221', url: 'https://www.tiktok.com/view/product/1730350149081336202' },
          { n: 'Bút Chì Màu Gốc Dầu Global Art (Hộp thiếc)', sc: 'chi_mau', br: 'Global Art', ch: 'shopee', pr: '250K', fm: 'Hộp thiếc', rv: '511.2 Tr', g: '-22%', us: '2.2K', ug: '-18%', tr: '2.3 Tỷ', tu: '10.9K', re: '3,077', url: 'https://shopee.vn/product/1224175038/26150549051' },
          { n: 'Bút Chì Màu Gốc Dầu Gốc Nước Deli', sc: 'chi_mau', br: 'Deli', ch: 'shopee', pr: '118K', fm: 'Dầu/Nước', rv: '251.4 Tr', g: '-18%', us: '1.7K', ug: '-15%', tr: '2.0 Tỷ', tu: '15.3K', re: '3,771', url: 'https://shopee.vn/product/348955539/15498058138' },
          { n: 'Bộ Bút chì màu Finenolo x Deli (Tặng quà)', sc: 'chi_mau', br: 'Finenolo', ch: 'shopee', pr: '189K', fm: 'Set', rv: '239.4 Tr', g: '-13%', us: '1.2K', ug: '-30%', tr: '1.2 Tỷ', tu: '15.4K', re: '1,837', url: 'https://www.tiktok.com/view/product/1729561816511187583' },
          { n: 'Bộ Bút Chì Màu Sáp 48-120 Màu Gia Hưng', sc: 'chi_mau', br: 'Gia Hưng', ch: 'tiktok', pr: '151K', fm: 'Sáp', rv: '194.3 Tr', g: '+229%', us: '1.2K', ug: '+229%', tr: '587.4 Tr', tu: '4.6K', re: '731', url: 'https://www.tiktok.com/view/product/1729607695017478457' },
          { n: 'Bút Chì Màu Gốc Dầu Finenolo (Giảm 31K)', sc: 'chi_mau', br: 'Finenolo', ch: 'shopee', pr: '96K', fm: 'Gốc dầu', rv: '176.0 Tr', g: '+7%', us: '1.5K', ug: '+14%', tr: '1.8 Tỷ', tu: '14.9K', re: '4,215', url: 'https://shopee.vn/product/884990462/16597346699' },
          { n: 'Bút Chì Màu Gốc Dầu Global Art (Mã 2)', sc: 'chi_mau', br: 'Global Art', ch: 'tiktok', pr: '253K', fm: 'Gốc dầu', rv: '174.5 Tr', g: '+333%', us: '735', ug: '+318%', tr: '214.8 Tr', tu: '911', re: '211', url: 'https://shopee.vn/product/1647865670/27642641820' },
          { n: '72 MÀU Bút Chì Màu Gốc Dầu Deli', sc: 'chi_mau', br: 'Deli', ch: 'shopee', pr: '107K', fm: '72 Màu', rv: '160.2 Tr', g: '-20%', us: '1.1K', ug: '-4%', tr: '1.4 Tỷ', tu: '10.4K', re: '2,951', url: 'https://shopee.vn/product/127805122/23000300409' },
          { n: 'Bộ Bút Chì Màu 48-120 Cây Gia Hưng', sc: 'chi_mau', br: 'Gia Hưng', ch: 'tiktok', pr: '151K', fm: 'Set', rv: '128.8 Tr', g: '+140%', us: '785', ug: '+121%', tr: '283.8 Tr', tu: '1.8K', re: '240', url: 'https://www.tiktok.com/view/product/1732247417957681885' },
          { n: 'Bút Chì Màu Gốc Dầu Gốc Nước Deli (TOP 1)', sc: 'chi_mau', br: 'Deli', ch: 'shopee', pr: '129K', fm: 'TOP 1', rv: '110.6 Tr', g: '-38%', us: '720', ug: '-40%', tr: '4.7 Tỷ', tu: '41.2K', re: '15,912', url: 'https://shopee.vn/product/127805122/4531417577' }
        ]
      },
      mau_nuoc: { /* single-quarter fallback: only one quarter had this sub-category */
        kpi: [{ l: 'Gross Sales (VND)', v: '13.3', u: 'Tỷ', g: '+5%', sub: 'vs 12.7 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '298.3', u: 'Nghìn', g: '-25%', sub: 'vs 396.6 nghìn in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '21.9%', u: '', g: '+1.3pp', sub: 'vs 20.6% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.7', u: 'Nghìn', g: '-6%', sub: 'vs 1.8 nghìn in YTD H1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '13.3', u: 'Tỷ', g: '+5%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~11%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '21.9%', u: '', g: '+1.3pp', sub: 'vs 20.6% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (12.0%)', u: '', g: '', sub: '3/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 10.2, pre: 9.81, c: '#f97316' }, { n: 'TikTok Shop', cur: 2.9, pre: 2.61, c: '#0f172a' }, { n: 'Lazada', cur: 0.13, pre: 0.27, c: '#3b82f6' }],
        brand: [{ n: 'Deli', cur: 12.03, pre: 10.86, c: '#ef4444' }, { n: 'Mont Marte', cur: 3.42, pre: 2.43, c: '#8b5cf6' }, { n: 'Enmy', cur: 3.01, pre: 0, c: '#84cc16' }, { n: 'Global Art', cur: 2.57, pre: 1.73, c: '#10b981' }, { n: 'Nevskaya Palitra', cur: 1.93, pre: 2.24, c: '#3b82f6' }, { n: 'Others', cur: 77.04, pre: 82.74, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.15, l: 0, t: 0 }, { r: '10K-30K', s: 2.17, l: 0, t: 0 }, { r: '30K-50K', s: 2.16, l: 0, t: 0 }, { r: '50K-75K', s: 1.85, l: 0, t: 0 }, { r: '75K-100K', s: 1.73, l: 0, t: 0 }, { r: '100K-150K', s: 2.04, l: 0, t: 0 }, { r: '150K-200K', s: 0.87, l: 0, t: 0 }, { r: '200K-350K', s: 1.47, l: 0, t: 0 }, { r: '350K-500K', s: 0.31, l: 0, t: 0 }, { r: '500K-750K', s: 0.18, l: 0, t: 0 }, { r: '750K-1M', s: 0.2, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.05, l: 0, t: 0 }, { r: '1.5M-2M', s: 0.03, l: 0, t: 0 }, { r: '2M-3.5M', s: 0.02, l: 0, t: 0 }, { r: '3.5M-5M', s: 0.02, l: 0, t: 0 }, { r: '5M-7.5M', s: 0.01, l: 0, t: 0 }, { r: '7.5M-10M', s: 0, l: 0, t: 0 }, { r: '10M-15M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'SALE 29K 12MÀU+ BÚT VẼ Màu Nước Dạng Nén Solid Watercolor', sc: 'mau_nuoc', br: 'Deli', ch: 'shopee', pr: '138K', fm: 'Combo', rv: '262.3 Tr', g: '+8789%', us: '1.3K', ug: '+5959%', tr: '285.2 Tr', tu: '1.6K', re: '225', url: 'https://shopee.vn/product/884990462/41751947520' },
          { n: 'COD ENMY Bộ Bút Lông Màu Nước Dầu Mềm 24 36 48 60 80 Màu', sc: 'mau_nuoc', br: 'Enmy', ch: 'shopee', pr: '299K', fm: 'Combo', rv: '219.8 Tr', g: '+54%', us: '0.7K', ug: '+27%', tr: '654.7 Tr', tu: '2.6K', re: '552', url: 'https://shopee.vn/product/1530752783/42900744498' },
          { n: 'DEAL SỐC -55% Bút Chì Màu Gốc Nước Deli - Hộp Thiếc Tặng Kèm', sc: 'mau_nuoc', br: 'Deli', ch: 'tiktok', pr: '150.9K', fm: 'Combo', rv: '173.8 Tr', g: '+131%', us: '1.3K', ug: '+184%', tr: '1.3 Tỷ', tu: '10.6K', re: '1,308', url: 'https://www.tiktok.com/view/product/1730992905271872127' },
          { n: 'Màu nước acrylic dạng hũ 100ml chuyên nghiệp Deli', sc: 'mau_nuoc', br: 'Deli', ch: 'tiktok', pr: '29.7K', fm: 'Single', rv: '145.4 Tr', g: '+16%', us: '6.3K', ug: '+21%', tr: '525.3 Tr', tu: '31.3K', re: '2,091', url: 'https://www.tiktok.com/view/product/1729554490192333439' },
          { n: 'Sáp đa năng 12 màu rửa được Colo Art Thiên Long Colokit', sc: 'mau_nuoc', br: 'Thiên Long', ch: 'shopee', pr: '105.2K', fm: 'Combo', rv: '138.6 Tr', g: '+818%', us: '1.7K', ug: '+524%', tr: '181.2 Tr', tu: '2.3K', re: '435', url: 'https://shopee.vn/product/101480242/14492465290' },
          { n: 'Số phác thảo phong cảnh A4 16K – Dành cho tranh màu nước sơn dầu', sc: 'mau_nuoc', br: 'Chayo Stationery', ch: 'tiktok', pr: '37.3K', fm: 'Single', rv: '121.6 Tr', g: '-22%', us: '3.5K', ug: '-21%', tr: '328.1 Tr', tu: '9.4K', re: '1,146', url: 'https://www.tiktok.com/view/product/1732804299057104467' },
          { n: 'Số Vẽ Phác Thảo Phong Cảnh A4 16K – Dùng Cho Màu Nước Sơn Dầu', sc: 'mau_nuoc', br: 'KIMI Shop8B', ch: 'tiktok', pr: '33.4K', fm: 'Single', rv: '113.9 Tr', g: '-19%', us: '3.4K', ug: '-16%', tr: '474.0 Tr', tu: '14.4K', re: '1,758', url: 'https://www.tiktok.com/view/product/1731714560774801296' },
          { n: 'COD ENMY Enmy Acrylic Bút Lông Màu Nước Dầu Mềm Tô Viết Êm', sc: 'mau_nuoc', br: 'Enmy', ch: 'shopee', pr: '308K', fm: 'Single', rv: '101.0 Tr', g: '+17%', us: '0.4K', ug: '+5%', tr: '249.5 Tr', tu: '1.0K', re: '199', url: 'https://shopee.vn/product/1530752783/43860217946' },
          { n: 'Bút màu cho bé quà sinh nhật hộp màu 150 chi tiết', sc: 'mau_nuoc', br: 'UMENA', ch: 'shopee', pr: '295K', fm: 'Combo', rv: '99.5 Tr', g: '+42%', us: '0.4K', ug: '+37%', tr: '2.0 Tỷ', tu: '7.2K', re: '1,411', url: 'https://shopee.vn/product/1011453451/22547000186' },
          { n: 'Màu Nước Poster Mont Marte 500ml Cao Cấp An Toàn Cho Trẻ Em', sc: 'mau_nuoc', br: 'Mont Marte', ch: 'shopee', pr: '90.9K', fm: 'Single', rv: '92.0 Tr', g: '+2%', us: '1.1K', ug: '-11%', tr: '466.8 Tr', tu: '6.4K', re: '228', url: 'https://shopee.vn/product/335211485/22940134765' }
        ]
      }
    }
  },
  van_phong_pham: {
    n: 'Văn Phòng Phẩm', i: '📎',
    sc: [{ k: 'all', n: 'All', i: '📊' }, { k: 'da_quang', n: 'Bút Dạ Quang', i: '🔆' }, { k: 'long_bang', n: 'Bút Lông Bảng', i: '📝' }, { k: 'long_dau', n: 'Bút Lông Dầu', i: '🖍️' }, { k: 'xoa_nuoc', n: 'Bút Xóa Nước', i: '🖋️' }, { k: 'file_folder', n: 'File & Folder', i: '📂' }, { k: 'giay_copy', n: 'Giấy Photocopy', i: '📄' }],
    kpi: [{ l: 'Gross Sales (VND)', v: '405.2', u: 'Tỷ', g: '+44%', sub: 'vs 281.7 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '9', u: 'Triệu', g: '-17%', sub: 'vs 10.8 triệu in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '27.4%', u: '', g: '+4.8pp', sub: 'vs 22.6% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '27', u: 'Nghìn', g: '-2%', sub: 'vs 27.5 nghìn in YTD H1 2025', ic: 'orange' }],
    dkpi: [{ l: 'Gross Sales (VND)', v: '405.2', u: 'Tỷ', g: '+44%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~7.1%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '27.4%', u: '', g: '+4.8pp', sub: 'vs 22.6% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (8.5%)', u: '', g: '', sub: '1/10 Top SKU Spots', ic: 'orange' }],
    plat: [{ n: 'Shopee', cur: 290.6, pre: 210.11, c: '#f97316' }, { n: 'TikTok Shop', cur: 111, pre: 63.61, c: '#0f172a' }, { n: 'Lazada', cur: 3.5, pre: 8.12, c: '#3b82f6' }],
    brand: [{ n: 'Deli', cur: 8.5, pre: 5.34, c: '#ef4444' }, { n: 'IK Copy', cur: 7.59, pre: 6.8, c: '#8b5cf6' }, { n: 'Thiên Long', cur: 5.2, pre: 7.33, c: '#1a56db' }, { n: 'Hồng Hà', cur: 0.97, pre: 0.03, c: '#ef4444' }, { n: 'Oji', cur: 0.96, pre: 0.6, c: '#f97316' }, { n: 'America Tape', cur: 0.4, pre: 0.49, c: '#f59e0b' }, { n: 'Others', cur: 76.38, pre: 79.43, c: '#cbd5e1' }],
    price: [{ r: '< 10K', s: 8.32, l: 0, t: 0 }, { r: '10K-30K', s: 67.75, l: 0, t: 0 }, { r: '30K-50K', s: 63.2, l: 0, t: 0 }, { r: '50K-75K', s: 52.76, l: 0, t: 0 }, { r: '75K-100K', s: 45.94, l: 0, t: 0 }, { r: '100K-150K', s: 34.65, l: 0, t: 0 }, { r: '150K-200K', s: 21.03, l: 0, t: 0 }, { r: '200K-350K', s: 27.25, l: 0, t: 0 }, { r: '350K-500K', s: 40.43, l: 0, t: 0 }, { r: '500K-750K', s: 16.86, l: 0, t: 0 }, { r: '750K-1.0M', s: 3.34, l: 0, t: 0 }, { r: '1.0M-1.5M', s: 0.43, l: 0, t: 0 }, { r: '1.5M-2.0M', s: 0.34, l: 0, t: 0 }, { r: '2M-3.5M', s: 3.01, l: 0, t: 0 }, { r: '750K-1M', s: 12.23, l: 0, t: 0 }, { r: '1M-1.5M', s: 4.82, l: 0, t: 0 }, { r: '1.5M-2M', s: 2.22, l: 0, t: 0 }, { r: '3.5M-5M', s: 0.23, l: 0, t: 0 }, { r: '5M-7.5M', s: 0.25, l: 0, t: 0 }, { r: '7.5M-10M', s: 0.02, l: 0, t: 0 }, { r: '10M-15M', s: 0, l: 0, t: 0 }],
    prod: [
      { n: 'Combo 5 ream Giấy in A4 photo Thiên Long IK Copy 70 gsm đều màu', sc: 'all', br: 'IK Copy', ch: 'shopee', pr: '466K', fm: 'Combo', rv: '5.2 Tỷ', g: '+6%', us: '13.1K', ug: '-4%', tr: '25.7 Tỷ', tu: '76.4K', re: '16,955', url: 'https://shopee.vn/product/101480242/16794017668' },
      { n: '10 ream Giấy in A4 70 gsm giấy A4 photo IK Copy Paper Thiên Long', sc: 'all', br: 'IK Copy', ch: 'shopee', pr: '932K', fm: 'Combo', rv: '5.0 Tỷ', g: '+50%', us: '6.1K', ug: '+36%', tr: '11.4 Tỷ', tu: '15.8K', re: '3,538', url: 'https://shopee.vn/product/101480242/10499808000' },
      { n: 'XÃ KHO Băng Keo Băng Dính Trong Đục 4.8cm 200Yard 1.8kg cây', sc: 'all', br: 'Generic', ch: 'shopee', pr: '60K', fm: 'Combo', rv: '4.2 Tỷ', g: '+19%', us: '76.1K', ug: '-14%', tr: '21.0 Tỷ', tu: '478.5K', re: '30,564', url: 'https://shopee.vn/product/242520587/18320575698' },
      { n: 'Combo 10 ream giấy A4 Thiên Long IK Copy 70 80gsm - Thùng giấy', sc: 'all', br: 'IK Copy', ch: 'shopee', pr: '835K', fm: 'Combo', rv: '3.7 Tỷ', g: '+46%', us: '5.0K', ug: '+33%', tr: '6.8 Tỷ', tu: '9.7K', re: '1,984', url: 'https://shopee.vn/product/368671137/23940020482' },
      { n: 'Giấy In Nhiệt Tự Dính Dạng Tập 500 Tờ A6 100x150 A7 75x100', sc: 'all', br: 'Generic', ch: 'shopee', pr: '45.5K', fm: 'Combo', rv: '2.6 Tỷ', g: '-12%', us: '57.7K', ug: '-13%', tr: '29.2 Tỷ', tu: '622.8K', re: '17,032', url: 'https://shopee.vn/product/415458622/5084344482' },
      { n: 'Combo 20 tệp giấy in nhiệt A6 100x150 500 tờ tự dính in vận đơn', sc: 'all', br: 'Generic', ch: 'shopee', pr: '1.4M', fm: 'Combo', rv: '2.1 Tỷ', g: '+6%', us: '1.6K', ug: '-1%', tr: '9.4 Tỷ', tu: '8.6K', re: '813', url: 'https://shopee.vn/product/122616467/22143549219' },
      { n: 'THÙNG 50 CUỘN K80X80 - GIẤY IN BILL K80X80', sc: 'all', br: 'Generic', ch: 'shopee', pr: '540K', fm: 'Combo', rv: '1.6 Tỷ', g: '+208%', us: '2.9K', ug: '+204%', tr: '3.0 Tỷ', tu: '5.5K', re: '522', url: 'https://shopee.vn/product/264150416/26012930758' },
      { n: 'File Lá Đựng Tài Liệu A4 Túi Bia Đựng Hồ Sơ 30 40 60 Lá Lưu Giữ', sc: 'all', br: 'Generic', ch: 'tiktok', pr: '33.6K', fm: 'Combo', rv: '1.5 Tỷ', g: '+886%', us: '49.6K', ug: '+884%', tr: '2.2 Tỷ', tu: '72.6K', re: '3,979', url: 'https://www.tiktok.com/view/product/1731643251315148754' },
      { n: 'Chuột máy tính gaming SIDOTECH INPHIC B1 có app hỗ trợ', sc: 'all', br: 'Sidotech', ch: 'tiktok', pr: '173.7K', fm: 'Single', rv: '1.5 Tỷ', g: '-4%', us: '9.1K', ug: '-3%', tr: '10.3 Tỷ', tu: '84.6K', re: '7,316', url: 'https://www.tiktok.com/view/product/1729644961478707665' },
      { n: 'Voucher Live Thùng 5-10 ream Giấy Deli', sc: 'all', br: 'Deli', ch: 'shopee', pr: '375K', fm: 'Thùng', rv: '1.3 Tỷ', g: '-53%', us: '3.7K', ug: '-60%', tr: '7.6 Tỷ', tu: '30.8K', re: '6,256', url: 'https://shopee.vn/product/127805122/29227911732' }
    ],
    sdata: {
      da_quang: {
        kpi: [{ l: 'Gross Sales (VND)', v: '7.2', u: 'Tỷ', g: '+33%', sub: 'vs 5.4 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '379.4', u: 'Nghìn', g: '-23%', sub: 'vs 491.3 nghìn in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '27.3%', u: '', g: '+11pp', sub: 'vs 16.3% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '2.4', u: 'Nghìn', g: '-14%', sub: 'vs 2.8 nghìn in YTD H1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '7.2', u: 'Tỷ', g: '+33%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~25.3%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '27.3%', u: '', g: '+11pp', sub: 'vs 16.3% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (17.4%)', u: '', g: '', sub: '3/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 5.2, pre: 4.18, c: '#f97316' }, { n: 'TikTok Shop', cur: 1.98, pre: 0.87, c: '#0f172a' }, { n: 'Lazada', cur: 0.08, pre: 0.3, c: '#3b82f6' }],
        brand: [{ n: 'Deli', cur: 17.42, pre: 14.64, c: '#ef4444' }, { n: 'Thiên Long', cur: 8.91, pre: 7.33, c: '#1a56db' }, { n: 'Bossee', cur: 8.52, pre: 0, c: '#f97316' }, { n: 'Mcbooks', cur: 1.21, pre: 1.19, c: '#10b981' }, { n: 'Quaff', cur: 0.83, pre: 0, c: '#f97316' }, { n: 'Zebra', cur: 0.81, pre: 0.72, c: '#f59e0b' }, { n: 'Stabilo', cur: 0.63, pre: 0.77, c: '#8b5cf6' }, { n: 'Others', cur: 61.68, pre: 75.35, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 1.114, l: 0, t: 0 }, { r: '10K-30K', s: 2.614, l: 0, t: 0 }, { r: '30K-50K', s: 1.851, l: 0, t: 0 }, { r: '50K-75K', s: 0.839, l: 0, t: 0 }, { r: '75K-100K', s: 0.143, l: 0, t: 0 }, { r: '100K-150K', s: 0.347, l: 0, t: 0 }, { r: '150K-200K', s: 0.06, l: 0, t: 0 }, { r: '200K-350K', s: 0.01, l: 0, t: 0 }, { r: '350K-500K', s: 0.01, l: 0, t: 0 }, { r: '500K-750K', s: 0.22, l: 0, t: 0 }, { r: '750K-1M', s: 0, l: 0, t: 0 }, { r: '1M-1.5M', s: 0, l: 0, t: 0 }, { r: '1.5M-2M', s: 0, l: 0, t: 0 }, { r: '2M-3.5M', s: 0, l: 0, t: 0 }, { r: '3.5M-5M', s: 0, l: 0, t: 0 }, { r: '5M-7.5M', s: 0, l: 0, t: 0 }, { r: '7.5M-10M', s: 0, l: 0, t: 0 }, { r: '10M-15M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Bút Highlight Bút Đánh Dấu Dạ Quang Pastel Đủ 6 Màu - Bút Nhớ TakeNote', sc: 'da_quang', br: 'Bossee', ch: 'tiktok', pr: '31.8K', fm: 'Combo', rv: '395.5 Tr', g: '-8%', us: '12.3K', ug: '-14%', tr: '651.2 Tr', tu: '21.5K', re: '1,661', url: 'https://www.tiktok.com/view/product/1732230778223233811' },
          { n: 'Bút Nhũ Kim Tuyến Lấp Lánh 12 Màu - Bút Highlight Đánh Dấu Sáng Tạo', sc: 'da_quang', br: 'Thiên Thành', ch: 'tiktok', pr: '17.8K', fm: 'Combo', rv: '262.6 Tr', g: '+90%', us: '8.2K', ug: '+215%', tr: '283.7 Tr', tu: '8.7K', re: '543', url: 'https://www.tiktok.com/view/product/1733191836290548787' },
          { n: 'FULL MÀU Bút Highlight Bút Nhớ Dòng Đánh Dấu Dạ Quang TakeNote', sc: 'da_quang', br: 'Deli', ch: 'shopee', pr: '9K', fm: 'Single', rv: '208.3 Tr', g: '+13%', us: '27.0K', ug: '+22%', tr: '861.1 Tr', tu: '133.9K', re: '12,891', url: 'https://shopee.vn/product/348955539/9286931469' },
          { n: 'Biến led huỳnh quang Biến led dạ quang 60x80cm 50x70cm 40x60cm', sc: 'da_quang', br: 'Điện Tử Định Tuấn', ch: 'shopee', pr: '530K', fm: 'Single', rv: '203.7 Tr', g: '+28%', us: '0.4K', ug: '+17%', tr: '904.4 Tr', tu: '3.8K', re: '588', url: 'https://shopee.vn/product/368864437/25967978891' },
          { n: 'Set 5 Bút Highlight 2 Đầu M.Y - Viết Êm Tay Dành Cho Học Sinh', sc: 'da_quang', br: 'M.Y', ch: 'tiktok', pr: '38.8K', fm: 'Combo', rv: '169.0 Tr', g: '+176%', us: '5.1K', ug: '+150%', tr: '178.5 Tr', tu: '5.4K', re: '310', url: 'https://www.tiktok.com/view/product/1732952252567618858' },
          { n: 'Bút highlight Deli 25 màu đánh dấu nhỏ dòng dạ quang Deli', sc: 'da_quang', br: 'Deli', ch: 'shopee', pr: '5K', fm: 'Single', rv: '153.9 Tr', g: '-9%', us: '19.8K', ug: '-18%', tr: '1.2 Tỷ', tu: '212.1K', re: '28,214', url: 'https://shopee.vn/product/127805122/11115991321' },
          { n: 'Bút highlight đánh dầu màu macaron Deli - Bút dạ quang đánh dấu', sc: 'da_quang', br: 'Deli', ch: 'shopee', pr: '10K', fm: 'Single', rv: '128.8 Tr', g: '+59%', us: '15.2K', ug: '+57%', tr: '322.4 Tr', tu: '45.9K', re: '5,175', url: 'https://shopee.vn/product/127805122/24568758870' },
          { n: 'Một bút dạ Highlight tặng một số tay linh kiện điện tử dành cho người học', sc: 'da_quang', br: 'Tiến Tools', ch: 'tiktok', pr: '149.7K', fm: 'Single', rv: '108.1 Tr', g: '-9%', us: '0.8K', ug: '-13%', tr: '252.7 Tr', tu: '2.0K', re: '184', url: 'https://www.tiktok.com/view/product/1731718202861782716' },
          { n: 'Bút Highlight Bút Đánh Dấu Dạ Quang Pastel Đủ 6 Màu - Bút Nhớ Học Sinh', sc: 'da_quang', br: 'Bossee', ch: 'shopee', pr: '28K', fm: 'Combo', rv: '107.3 Tr', g: '+24%', us: '3.6K', ug: '+22%', tr: '161.5 Tr', tu: '6.1K', re: '990', url: 'https://shopee.vn/product/1366221078/26317103425' },
          { n: 'Bút đánh dấu highlight bút nhớ (Mcbooks)', sc: 'da_quang', br: 'Mcbooks', ch: 'shopee', pr: '25K', fm: 'Mcbooks', rv: '82.6 Tr', g: '+53%', us: '3.3K', ug: '+83%', tr: '1.0 Tỷ', tu: '83.4K', re: '23,559', url: 'https://shopee.vn/product/272432350/12357840047' }
        ]
      },
      long_dau: {
        kpi: [{ l: 'Gross Sales (VND)', v: '11', u: 'Tỷ', g: '+21%', sub: 'vs 9.1 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '310.2', u: 'Nghìn', g: '-38%', sub: 'vs 504.2 nghìn in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '43.8%', u: '', g: '+5.4pp', sub: 'vs 38.4% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '2.2', u: 'Nghìn', g: '-8%', sub: 'vs 2.4 nghìn in YTD H1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '11', u: 'Tỷ', g: '+21%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~28%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '43.8%', u: '', g: '+5.4pp', sub: 'vs 38.4% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Thiên Long (29.1%)', u: '', g: '', sub: '5/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 6, pre: 5.24, c: '#f97316' }, { n: 'TikTok Shop', cur: 4.8, pre: 3.47, c: '#0f172a' }, { n: 'Lazada', cur: 0.16, pre: 0.33, c: '#3b82f6' }],
        brand: [{ n: 'Thiên Long', cur: 29.08, pre: 25.78, c: '#1a56db' }, { n: 'Leyue', cur: 8.22, pre: 0, c: '#3b82f6' }, { n: 'G-Star', cur: 2.85, pre: 3.21, c: '#10b981' }, { n: 'But Viet', cur: 2.33, pre: 0, c: '#f97316' }, { n: 'But', cur: 1.49, pre: 0, c: '#f59e0b' }, { n: 'Deli', cur: 0.7, pre: 0.8, c: '#ef4444' }, { n: 'Artline', cur: 0.52, pre: 0.99, c: '#8b5cf6' }, { n: 'Others', cur: 54.81, pre: 69.22, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.413, l: 0, t: 0 }, { r: '10K-30K', s: 1.851, l: 0, t: 0 }, { r: '30K-50K', s: 2.137, l: 0, t: 0 }, { r: '50K-75K', s: 4.261, l: 0, t: 0 }, { r: '75K-100K', s: 0.552, l: 0, t: 0 }, { r: '100K-150K', s: 1.335, l: 0, t: 0 }, { r: '150K-200K', s: 0.249, l: 0, t: 0 }, { r: '200K-350K', s: 0.14, l: 0, t: 0 }, { r: '350K-500K', s: 0.02, l: 0, t: 0 }, { r: '500K-750K', s: 0, l: 0, t: 0 }, { r: '750K-1M', s: 0, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.01, l: 0, t: 0 }, { r: '1.5M-2M', s: 0, l: 0, t: 0 }, { r: '2M-3.5M', s: 0, l: 0, t: 0 }, { r: '3.5M-5M', s: 0, l: 0, t: 0 }, { r: '5M-7.5M', s: 0, l: 0, t: 0 }, { r: '7.5M-10M', s: 0, l: 0, t: 0 }, { r: '10M-15M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Combo 10 cây bút lông dầu màu trắng không xóa được khô nhanh bền màu', sc: 'long_dau', br: 'Generic', ch: 'tiktok', pr: '64.2K', fm: 'Combo', rv: '836.1 Tr', g: '+54%', us: '12.3K', ug: '+65%', tr: '839.8 Tr', tu: '12.4K', re: '448', url: 'https://www.tiktok.com/view/product/1733890170414531648' },
          { n: 'Combo 5 10 20 Bút lông dầu 2 đầu Thiên Long PM-04 bám dính', sc: 'long_dau', br: 'Thiên Long', ch: 'shopee', pr: '59K', fm: 'Combo', rv: '487.0 Tr', g: '-29%', us: '9.1K', ug: '-32%', tr: '1.6 Tỷ', tu: '33.0K', re: '4,662', url: 'https://shopee.vn/product/101480242/23576151442' },
          { n: 'Combo 5 10 20 Bút lông dầu 2 đầu Thiên Long PM-09 mực đạt tiêu chuẩn', sc: 'long_dau', br: 'Thiên Long', ch: 'shopee', pr: '51K', fm: 'Combo', rv: '417.3 Tr', g: '-4%', us: '7.6K', ug: '-5%', tr: '1.1 Tỷ', tu: '21.2K', re: '2,767', url: 'https://shopee.vn/product/101480242/22050668198' },
          { n: 'Combo Bút lông dầu Thiên Long 2 đầu PM-04 - Bút lông dầu bấm', sc: 'long_dau', br: 'Thiên Long', ch: 'shopee', pr: '108K', fm: 'Combo', rv: '293.6 Tr', g: '+1%', us: '2.9K', ug: '0%', tr: '1.4 Tỷ', tu: '15.9K', re: '1,540', url: 'https://shopee.vn/product/368671137/13249566333' },
          { n: 'Combo 3 hộp 30 chiếc bút lông đầu kim', sc: 'long_dau', br: 'Generic', ch: 'tiktok', pr: '159.3K', fm: 'Combo', rv: '248.5 Tr', g: '-39%', us: '2.0K', ug: '-53%', tr: '3.0 Tỷ', tu: '36.2K', re: '1,683', url: 'https://www.tiktok.com/view/product/1730844958738057785' },
          { n: 'Combo 50-30 Bút Lông Dầu TL Dầu Kim Đủ 3 Màu Xanh Đỏ Đen', sc: 'long_dau', br: 'Thiên Long', ch: 'tiktok', pr: '56.1K', fm: 'Combo', rv: '224.1 Tr', g: '0%', us: '4.4K', ug: '0%', tr: '233.6 Tr', tu: '4.6K', re: '212', url: 'https://www.tiktok.com/view/product/1734690032513157018' },
          { n: 'Combo 10 cây bút lông dầu trắng (Minh Tuấn)', sc: 'long_dau', br: 'OEM/Khác', ch: 'tiktok', pr: '64K', fm: 'Combo 10', rv: '185.3 Tr', g: '+2483%', us: '3.0K', ug: '+1558%', tr: '210.9 Tr', tu: '3.5K', re: '134', url: 'https://www.tiktok.com/view/product/1733562689888421193' },
          { n: 'COMBO 10 Bút đánh dầu màu trắng đa năng không xóa được bền màu', sc: 'long_dau', br: 'Generic', ch: 'tiktok', pr: '60.8K', fm: 'Combo', rv: '154.8 Tr', g: '+114%', us: '2.3K', ug: '+149%', tr: '230.1 Tr', tu: '3.3K', re: '126', url: 'https://www.tiktok.com/view/product/1733864467857114598' },
          { n: 'Combo 10-30-50 Thiên Long Đầu To', sc: 'long_dau', br: 'Thiên Long', ch: 'tiktok', pr: '55K', fm: 'PM-Lớn', rv: '119.4 Tr', g: '-61%', us: '2.3K', ug: '-66%', tr: '616.0 Tr', tu: '13.5K', re: '546', url: 'https://www.tiktok.com/view/product/1732144720901474385' },
          { n: 'Hộp 12 Cây Bút Lông Dầu Kim 2 Đầu Gstar CD-01 Xanh Đỏ Đen', sc: 'long_dau', br: 'G-Star', ch: 'shopee', pr: '67K', fm: 'Combo', rv: '116.6 Tr', g: '+650%', us: '1.7K', ug: '+634%', tr: '137.7 Tr', tu: '2.1K', re: '199', url: 'https://shopee.vn/product/81243419/24816146246' }
        ]
      },
      long_bang: {
        kpi: [{ l: 'Gross Sales (VND)', v: '7.2', u: 'Tỷ', g: '+33%', sub: 'vs 5.4 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '231.2', u: 'Nghìn', g: '-42%', sub: 'vs 397.9 nghìn in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '12.2%', u: '', g: '+2.2pp', sub: 'vs 10% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.3', u: 'Nghìn', g: '-17%', sub: 'vs 1.5 nghìn in YTD H1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '7.2', u: 'Tỷ', g: '+33%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~36%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '12.2%', u: '', g: '+2.2pp', sub: 'vs 10% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Thiên Long (50.0%)', u: '', g: '', sub: '7/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 6.2, pre: 4.53, c: '#f97316' }, { n: 'TikTok Shop', cur: 0.88, pre: 0.54, c: '#0f172a' }, { n: 'Lazada', cur: 0.13, pre: 0.31, c: '#3b82f6' }],
        brand: [{ n: 'Thiên Long', cur: 50.01, pre: 53.87, c: '#1a56db' }, { n: 'Deli', cur: 14.02, pre: 11.12, c: '#ef4444' }, { n: 'Thiên An', cur: 1.36, pre: 1.01, c: '#8b5cf6' }, { n: 'Flexoffice', cur: 0.89, pre: 0.89, c: '#8b5cf6' }, { n: 'Gxin', cur: 0.73, pre: 0, c: '#10b981' }, { n: 'Artline', cur: 0.55, pre: 0.46, c: '#8b5cf6' }, { n: 'Adiva', cur: 0.47, pre: 0, c: '#f59e0b' }, { n: 'Others', cur: 31.95, pre: 32.64, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.385, l: 0, t: 0 }, { r: '10K-30K', s: 1.482, l: 0, t: 0 }, { r: '30K-50K', s: 1.801, l: 0, t: 0 }, { r: '50K-75K', s: 0.91, l: 0, t: 0 }, { r: '75K-100K', s: 1.523, l: 0, t: 0 }, { r: '100K-150K', s: 0.417, l: 0, t: 0 }, { r: '150K-200K', s: 0.12, l: 0, t: 0 }, { r: '200K-350K', s: 0.18, l: 0, t: 0 }, { r: '350K-500K', s: 0.05, l: 0, t: 0 }, { r: '500K-750K', s: 0.02, l: 0, t: 0 }, { r: '750K-1M', s: 0.04, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.05, l: 0, t: 0 }, { r: '1.5M-2M', s: 0.13, l: 0, t: 0 }, { r: '2M-3.5M', s: 0.06, l: 0, t: 0 }, { r: '3.5M-5M', s: 0, l: 0, t: 0 }, { r: '5M-7.5M', s: 0, l: 0, t: 0 }, { r: '7.5M-10M', s: 0, l: 0, t: 0 }, { r: '10M-15M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Combo Bút lông bảng Thiên Long WB-03 - Bút viết bảng xoá được', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '90K', fm: 'Combo', rv: '683.2 Tr', g: '+32%', us: '8.7K', ug: '+30%', tr: '1.6 Tỷ', tu: '21.1K', re: '2,302', url: 'https://shopee.vn/product/368671137/5576960676' },
          { n: 'Combo 5 10 20 Bút lông bảng Thiên Long WB-03 mực Xanh Đỏ Đen', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '58.5K', fm: 'Combo', rv: '468.8 Tr', g: '-6%', us: '11.6K', ug: '-4%', tr: '1.3 Tỷ', tu: '33.3K', re: '4,893', url: 'https://shopee.vn/product/101480242/23576151446' },
          { n: 'Combo 5 10 20 Bút lông bảng Thiên Long WB-03 - Bút dạ viết bảng', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '39.9K', fm: 'Combo', rv: '331.1 Tr', g: '-20%', us: '8.1K', ug: '-22%', tr: '2.7 Tỷ', tu: '50.4K', re: '5,757', url: 'https://shopee.vn/product/367619913/15326547530' },
          { n: 'TẶNG KÈM PHỤ KIỆN Bảng Từ Trắng Dán Tường Deli - Hút Nam Châm', sc: 'long_bang', br: 'Deli', ch: 'shopee', pr: '88K', fm: 'Single', rv: '324.9 Tr', g: '+40%', us: '2.5K', ug: '+5%', tr: '1.0 Tỷ', tu: '9.9K', re: '1,261', url: 'https://shopee.vn/product/127805122/41858697411' },
          { n: 'Bút lông bảng Hoshi Thiên Long WB-025 HS - Công nghệ Nhật Bản', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '14.3K', fm: 'Single', rv: '269.8 Tr', g: '-40%', us: '20.5K', ug: '-38%', tr: '937.9 Tr', tu: '71.7K', re: '7,096', url: 'https://shopee.vn/product/101480242/29970555826' },
          { n: 'Bút lông bảng Hoshi Thiên Long WB-025 HS - Công nghệ Nhật Bản', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '14.3K', fm: 'Single', rv: '151.3 Tr', g: '-44%', us: '8.8K', ug: '-23%', tr: '371.3 Tr', tu: '17.8K', re: '1,302', url: 'https://shopee.vn/product/367619913/55600034017' },
          { n: 'Combo 5 10 20 Bút Lông Bảng Xóa Được DELI Thêm Mực Đầu Bút', sc: 'long_bang', br: 'Deli', ch: 'shopee', pr: '45K', fm: 'Combo', rv: '114.9 Tr', g: '+7%', us: '2.4K', ug: '-9%', tr: '434.1 Tr', tu: '12.9K', re: '1,610', url: 'https://shopee.vn/product/127805122/25724132256' },
          { n: 'Combo 5-10-20 Flexoffice FO-WB02', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '36K', fm: 'FO-WB02', rv: '84.0 Tr', g: '+87%', us: '1.9K', ug: '+41%', tr: '225.4 Tr', tu: '7.1K', re: '842', url: 'https://shopee.vn/product/101480242/22347224257' },
          { n: 'TẶNG HỘP 10 BÚT LÔNG Bảng Flipchart Hai Mặt Deli Bảng Viết Bút', sc: 'long_bang', br: 'Deli', ch: 'shopee', pr: '2M', fm: 'Combo', rv: '83.8 Tr', g: '+18%', us: '0.0K', ug: '', tr: '181.5 Tr', tu: '0.1K', re: '15', url: 'https://shopee.vn/product/348955539/57152225116' },
          { n: 'Combo 10 Bút lông bảng Thiên Long WB-03 đầu bút viết êm trơn', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '90K', fm: 'Combo', rv: '77.7 Tr', g: '+24%', us: '0.9K', ug: '+38%', tr: '514.9 Tr', tu: '34.2K', re: '3,718', url: 'https://shopee.vn/product/367619913/13364398128' }
        ]
      },
      xoa_nuoc: {
        kpi: [{ l: 'Gross Sales (VND)', v: '2.2', u: 'Tỷ', g: '-100%', sub: 'vs 881 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '91', u: 'Nghìn', g: '-3%', sub: 'vs 93.6 nghìn in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '24.1%', u: '', g: '+1.5pp', sub: 'vs 22.6% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '873', u: '', g: '-15%', sub: 'vs 1029 in YTD H1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '2.2', u: 'Tỷ', g: '-100%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~46.3%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '24.1%', u: '', g: '+1.5pp', sub: 'vs 22.6% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Thiên Long (41.5%)', u: '', g: '', sub: '6/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 1.61, pre: 1.05, c: '#f97316' }, { n: 'TikTok Shop', cur: 0.53, pre: 0.33, c: '#0f172a' }, { n: 'Lazada', cur: 0.06, pre: 0.08, c: '#3b82f6' }],
        brand: [{ n: 'Thiên Long', cur: 41.46, pre: 34.21, c: '#1a56db' }, { n: 'Deli', cur: 6.07, pre: 3.5, c: '#ef4444' }, { n: 'Besta', cur: 3.71, pre: 0, c: '#10b981' }, { n: 'King', cur: 2.26, pre: 1.6, c: '#f59e0b' }, { n: 'G-Star', cur: 0.75, pre: 0, c: '#10b981' }, { n: 'Plus', cur: 0.66, pre: 0.8, c: '#8b5cf6' }, { n: 'Others', cur: 45.09, pre: 59.89, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.083, l: 0, t: 0 }, { r: '10K-30K', s: 1.218, l: 0, t: 0 }, { r: '30K-50K', s: 0.124, l: 0, t: 0 }, { r: '50K-75K', s: 0.401, l: 0, t: 0 }, { r: '75K-100K', s: 0.179, l: 0, t: 0 }, { r: '100K-150K', s: 0.1, l: 0, t: 0 }, { r: '150K-200K', s: 0.078, l: 0, t: 0 }, { r: '200K-350K', s: 0.025, l: 0, t: 0 }, { r: '350K-500K', s: 0, l: 0, t: 0 }, { r: '500K-750K', s: 0, l: 0, t: 0 }, { r: '750K-1M', s: 0, l: 0, t: 0 }, { r: '1M-1.5M', s: 0, l: 0, t: 0 }, { r: '1.5M-2M', s: 0, l: 0, t: 0 }, { r: '2M-3.5M', s: 0, l: 0, t: 0 }, { r: '3.5M-5M', s: 0, l: 0, t: 0 }, { r: '5M-7.5M', s: 0, l: 0, t: 0 }, { r: '7.5M-10M', s: 0, l: 0, t: 0 }, { r: '10M-15M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Bút xóa nước 12ml Thiên Long CP-02 - Viết xóa sạch nhanh khô', sc: 'xoa_nuoc', br: 'Thiên Long', ch: 'shopee', pr: '27.4K', fm: 'Single', rv: '499.7 Tr', g: '-26%', us: '20.2K', ug: '-29%', tr: '2.0 Tỷ', tu: '88.9K', re: '8,626', url: 'https://shopee.vn/product/101480242/1635050758' },
          { n: 'Bút Xóa Nước 12ml Besta CP-01 Đầu Bút Bằng Thép Siêu Bền', sc: 'xoa_nuoc', br: 'Besta', ch: 'shopee', pr: '11.8K', fm: 'Single', rv: '80.7 Tr', g: '+30%', us: '8.8K', ug: '+29%', tr: '137.6 Tr', tu: '14.8K', re: '2,865', url: 'https://shopee.vn/product/946543924/18389263613' },
          { n: 'Bút xóa Thiên Long CP-02 (Mã 2)', sc: 'xoa_nuoc', br: 'Thiên Long', ch: 'shopee', pr: '25K', fm: 'CP-02', rv: '72.3 Tr', g: '+4%', us: '2.9K', ug: '-1%', tr: '329.8 Tr', tu: '15.1K', re: '1,777', url: 'https://shopee.vn/product/368671137/23081877413' },
          { n: 'Bút Xóa Nước Rẻ CP08 16ml 1 Hộp 12 Cây', sc: 'xoa_nuoc', br: 'Generic', ch: 'shopee', pr: '61K', fm: 'Combo', rv: '66.7 Tr', g: '+31%', us: '1.1K', ug: '+26%', tr: '326.3 Tr', tu: '8.3K', re: '1,496', url: 'https://shopee.vn/product/204094877/17481153691' },
          { n: 'Bút xóa dạng bấm xoay 360 độ M.Y', sc: 'xoa_nuoc', br: 'OEM/Khác', ch: 'tiktok', pr: '14K', fm: 'Xoay 360', rv: '58.8 Tr', g: '+251%', us: '4.0K', ug: '+232%', tr: '78.6 Tr', tu: '5.4K', re: '373', url: 'https://www.tiktok.com/view/product/1732910021645272362' },
          { n: '10 Bút Xóa Nước Thiên Long Nhanh Khô Đánh Siêu Sạch Dùng Cho Học Sinh', sc: 'xoa_nuoc', br: 'Thiên Long', ch: 'shopee', pr: '140K', fm: 'Combo', rv: '57.2 Tr', g: '+56%', us: '0.7K', ug: '+41%', tr: '69.0 Tr', tu: '0.8K', re: '64', url: 'https://shopee.vn/product/1473624456/45152286579' },
          { n: 'Hộp 10 Bút Xóa Nước Thiên Long 12ml Xóa Sạch Nhanh Khô', sc: 'xoa_nuoc', br: 'Thiên Long', ch: 'tiktok', pr: '58.2K', fm: 'Combo', rv: '57.1 Tr', g: '+7880%', us: '0.9K', ug: '+7146%', tr: '59.0 Tr', tu: '1.0K', re: '52', url: 'https://www.tiktok.com/view/product/1734726564517742586' },
          { n: 'DEAL 9K Bút Xóa Nước 12ml Deli Bút Xóa Sạch Nhanh Khô An Toàn', sc: 'xoa_nuoc', br: 'Deli', ch: 'shopee', pr: '12K', fm: 'Single', rv: '44.0 Tr', g: '+100%', us: '3.7K', ug: '+85%', tr: '317.3 Tr', tu: '29.4K', re: '6,716', url: 'https://shopee.vn/product/127805122/2093863777' },
          { n: 'Bút xóa nước 12ml Thiên Long Combo 5 10 bút xóa sạch nhanh', sc: 'xoa_nuoc', br: 'Thiên Long', ch: 'shopee', pr: '50K', fm: 'Combo', rv: '36.7 Tr', g: '+92%', us: '0.7K', ug: '+66%', tr: '106.4 Tr', tu: '2.6K', re: '571', url: 'https://shopee.vn/product/1331588213/25735179077' },
          { n: 'Bút xóa Thiên Long CP-05 (Thân trụ)', sc: 'xoa_nuoc', br: 'Thiên Long', ch: 'shopee', pr: '15K', fm: 'CP-05', rv: '36.5 Tr', g: '+35%', us: '2.4K', ug: '+34%', tr: '127.7 Tr', tu: '8.1K', re: '1,033', url: 'https://shopee.vn/product/101480242/1635050763' }
        ]
      },
      file_folder: {
        kpi: [{ l: 'Gross Sales (VND)', v: '21.6', u: 'Tỷ', g: '+44%', sub: 'vs 15 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '601.9', u: 'Nghìn', g: '-17%', sub: 'vs 724.8 nghìn in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '24%', u: '', g: '+10.8pp', sub: 'vs 13.2% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '2.7', u: 'Nghìn', g: '-4%', sub: 'vs 2.8 nghìn in YTD H1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '21.6', u: 'Tỷ', g: '+44%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~19.7%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '24%', u: '', g: '+10.8pp', sub: 'vs 13.2% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (13.0%)', u: '', g: '', sub: '2/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 16.2, pre: 12.53, c: '#f97316' }, { n: 'TikTok Shop', cur: 5.2, pre: 1.97, c: '#0f172a' }, { n: 'Lazada', cur: 0.26, pre: 0.47, c: '#3b82f6' }],
        brand: [{ n: 'Deli', cur: 12.97, pre: 16.59, c: '#ef4444' }, { n: 'Flexoffice', cur: 4.09, pre: 4.45, c: '#8b5cf6' }, { n: 'Knote', cur: 2.12, pre: 0, c: '#10b981' }, { n: 'Plus', cur: 1.81, pre: 3.07, c: '#8b5cf6' }, { n: 'Decorme', cur: 1.18, pre: 0, c: '#8b5cf6' }, { n: 'Qpenz', cur: 0.91, pre: 0, c: '#3b82f6' }, { n: 'Others', cur: 76.93, pre: 75.89, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.163, l: 0, t: 0 }, { r: '10K-30K', s: 4.736, l: 0, t: 0 }, { r: '30K-50K', s: 8.54, l: 0, t: 0 }, { r: '50K-75K', s: 4.295, l: 0, t: 0 }, { r: '75K-100K', s: 1.506, l: 0, t: 0 }, { r: '100K-150K', s: 1.07, l: 0, t: 0 }, { r: '150K-200K', s: 0.78, l: 0, t: 0 }, { r: '200K-350K', s: 0.274, l: 0, t: 0 }, { r: '350K-500K', s: 0.145, l: 0, t: 0 }, { r: '500K-750K', s: 0.042, l: 0, t: 0 }, { r: '750K-1.0M', s: 0.01, l: 0, t: 0 }, { r: '1.0M-1.5M', s: 0.012, l: 0, t: 0 }, { r: '750K-1M', s: 0.02, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.04, l: 0, t: 0 }, { r: '1.5M-2M', s: 0, l: 0, t: 0 }, { r: '2M-3.5M', s: 0, l: 0, t: 0 }, { r: '3.5M-5M', s: 0, l: 0, t: 0 }, { r: '5M-7.5M', s: 0, l: 0, t: 0 }, { r: '7.5M-10M', s: 0, l: 0, t: 0 }, { r: '10M-15M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'TẶNG STICKER File Lá Đa Năng - Số Đa Năng Lưu Giữ Đề Thi Hình', sc: 'file_folder', br: 'Deli', ch: 'tiktok', pr: '54.4K', fm: 'Combo', rv: '1.7 Tỷ', g: '+23%', us: '39.9K', ug: '+20%', tr: '8.4 Tỷ', tu: '238.2K', re: '16,189', url: 'https://www.tiktok.com/view/product/1729454663877888639' },
          { n: 'File lá đựng tài liệu A4 KNOTE túi bia hồ sơ 100 lá siêu tiết kiệm', sc: 'file_folder', br: 'Knote', ch: 'shopee', pr: '59K', fm: 'Combo', rv: '444.7 Tr', g: '+1%', us: '7.6K', ug: '-3%', tr: '1.2 Tỷ', tu: '22.7K', re: '2,787', url: 'https://shopee.vn/product/1426030880/26172006082' },
          { n: 'Túi đựng hồ sơ khổ A4 túi đựng hồ sơ hoạt hình 30 60 trang bảo vệ', sc: 'file_folder', br: 'Generic', ch: 'tiktok', pr: '60.9K', fm: 'Combo', rv: '357.6 Tr', g: '+73%', us: '7.5K', ug: '+41%', tr: '418.7 Tr', tu: '9.4K', re: '549', url: 'https://www.tiktok.com/view/product/1732263026713461931' },
          { n: 'Tập 100 túi đựng tài liệu A4 So mi lỗ đựng tài liệu chống nước', sc: 'file_folder', br: 'Generic', ch: 'shopee', pr: '47.7K', fm: 'Combo', rv: '337.1 Tr', g: '+23%', us: '7.9K', ug: '+13%', tr: '888.0 Tr', tu: '24.3K', re: '2,566', url: 'https://shopee.vn/product/38778987/1909033407' },
          { n: 'Bia Lá File A4 30 60 Lá Dày Dặn Cao Cấp - File Nhựa Lưu Trữ Tài Liệu', sc: 'file_folder', br: 'Generic', ch: 'shopee', pr: '30.4K', fm: 'Combo', rv: '286.1 Tr', g: '+5348%', us: '10.0K', ug: '+5008%', tr: '293.1 Tr', tu: '10.2K', re: '1,614', url: 'https://shopee.vn/product/1566396955/43460734274' },
          { n: 'Bia Lá File A4 30 60 Lá Dày Dặn Cao Cấp - File Nhựa MTK31', sc: 'file_folder', br: 'Generic', ch: 'shopee', pr: '34.6K', fm: 'Combo', rv: '261.4 Tr', g: '+271%', us: '7.4K', ug: '+268%', tr: '158.9 Tr', tu: '4.5K', re: '238', url: 'https://shopee.vn/product/38778987/1609419730' },
          { n: 'File lá đựng tài liệu A4 QPENZ túi bia hồ sơ 100 lá siêu tiết kiệm', sc: 'file_folder', br: 'Qpenz', ch: 'shopee', pr: '86.4K', fm: 'Combo', rv: '227.5 Tr', g: '+1%', us: '2.2K', ug: '+7%', tr: '349.5 Tr', tu: '4.2K', re: '210', url: 'https://shopee.vn/product/14668875/4934838718' },
          { n: 'M.Y Túi Đựng Tài Liệu A4 5 8 12 Ngăn - Cặp Hồ Sơ Nhiều Ngăn', sc: 'file_folder', br: 'M.Y Stationery', ch: 'tiktok', pr: '29K', fm: 'Combo', rv: '225.3 Tr', g: '+11%', us: '6.4K', ug: '+15%', tr: '345.0 Tr', tu: '14.0K', re: '2,763', url: 'https://www.tiktok.com/view/product/1732643968477464269' },
          { n: 'Bìa kẹp tài liệu da A4 (DecorMe)', sc: 'file_folder', br: 'Decorme', ch: 'tiktok', pr: '140K', fm: 'Da A4', rv: '220.3 Tr', g: '+1223%', us: '1.6K', ug: '+1268%', tr: '248.4 Tr', tu: '1.8K', re: '61', url: 'https://www.tiktok.com/view/product/1729695118761429492' },
          { n: 'File Tài Liệu File Lá 20 30 40 Túi Đựng Tài Liệu Màu Pastel Học Sinh', sc: 'file_folder', br: 'Deli', ch: 'shopee', pr: '29K', fm: 'Combo', rv: '212.4 Tr', g: '+8%', us: '8.5K', ug: '+15%', tr: '3.3 Tỷ', tu: '98.1K', re: '19,790', url: 'https://shopee.vn/product/1451947204/40606966998' }
        ]
      },
      giay_copy: {
        kpi: [{ l: 'Gross Sales (VND)', v: '68.6', u: 'Tỷ', g: '+47%', sub: 'vs 46.7 tỷ in YTD H1 2025', ic: 'blue' }, { l: 'Units Sold', v: '430.8', u: 'Nghìn', g: '+16%', sub: 'vs 370.1 nghìn in YTD H1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '7.3%', u: '', g: '-6.2pp', sub: 'vs 13.5% in YTD H1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.5', u: 'Nghìn', g: '-1%', sub: 'vs 1.5 nghìn in YTD H1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '68.6', u: 'Tỷ', g: '+47%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~38.8%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '7.3%', u: '', g: '-6.2pp', sub: 'vs 13.5% in YTD H1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'IK Copy (44.1%)', u: '', g: '', sub: '7/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 62.9, pre: 39.32, c: '#f97316' }, { n: 'TikTok Shop', cur: 5, pre: 6.27, c: '#0f172a' }, { n: 'Lazada', cur: 0.58, pre: 0.96, c: '#3b82f6' }],
        brand: [{ n: 'IK Copy', cur: 44.13, pre: 48.1, c: '#8b5cf6' }, { n: 'Deli', cur: 14.45, pre: 2.65, c: '#ef4444' }, { n: 'Thiên Long', cur: 10.1, pre: 16.93, c: '#1a56db' }, { n: 'Paper One', cur: 4.81, pre: 4.22, c: '#10b981' }, { n: 'IK Plus', cur: 3.79, pre: 1.91, c: '#f97316' }, { n: 'Double A', cur: 1.19, pre: 1.17, c: '#8b5cf6' }, { n: 'Others', cur: 21.53, pre: 25.03, c: '#cbd5e1' }],
        price: [{ r: '10K-30K', s: 1.283, l: 0, t: 0 }, { r: '30K-50K', s: 2.016, l: 0, t: 0 }, { r: '50K-75K', s: 3.265, l: 0, t: 0 }, { r: '75K-100K', s: 9.386, l: 0, t: 0 }, { r: '100K-150K', s: 3.166, l: 0, t: 0 }, { r: '150K-200K', s: 0.642, l: 0, t: 0 }, { r: '200K-350K', s: 4.823, l: 0, t: 0 }, { r: '350K-500K', s: 27.233, l: 0, t: 0 }, { r: '500K-750K', s: 5.751, l: 0, t: 0 }, { r: '750K-1.0M', s: 2.526, l: 0, t: 0 }, { r: '< 10K', s: 0.01, l: 0, t: 0 }, { r: '750K-1M', s: 7.77, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.45, l: 0, t: 0 }, { r: '1.5M-2M', s: 0.02, l: 0, t: 0 }, { r: '2M-3.5M', s: 0, l: 0, t: 0 }, { r: '3.5M-5M', s: 0, l: 0, t: 0 }, { r: '5M-7.5M', s: 0, l: 0, t: 0 }, { r: '7.5M-10M', s: 0, l: 0, t: 0 }, { r: '10M-15M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Combo 5 ream Giấy in A4 photo Thiên Long IK Copy 70 gsm đều màu', sc: 'giay_copy', br: 'IK Copy', ch: 'shopee', pr: '466K', fm: 'Combo', rv: '5.2 Tỷ', g: '+6%', us: '13.1K', ug: '-4%', tr: '25.7 Tỷ', tu: '76.4K', re: '16,955', url: 'https://shopee.vn/product/101480242/16794017668' },
          { n: '10 ream Giấy in A4 70 gsm giấy A4 photo IK Copy Paper Thiên Long', sc: 'giay_copy', br: 'IK Copy', ch: 'shopee', pr: '932K', fm: 'Combo', rv: '5.0 Tỷ', g: '+50%', us: '6.1K', ug: '+36%', tr: '11.4 Tỷ', tu: '15.8K', re: '3,538', url: 'https://shopee.vn/product/101480242/10499808000' },
          { n: 'Combo 10 ream giấy A4 Thiên Long IK Copy 70 80gsm - Thùng giấy', sc: 'giay_copy', br: 'IK Copy', ch: 'shopee', pr: '835K', fm: 'Combo', rv: '3.7 Tỷ', g: '+46%', us: '5.0K', ug: '+33%', tr: '6.8 Tỷ', tu: '9.7K', re: '1,984', url: 'https://shopee.vn/product/368671137/23940020482' },
          { n: 'VOUCHER LIVE 30K Thùng 5 10 Ream Giấy A4 Deli Giấy In Photo', sc: 'giay_copy', br: 'Deli', ch: 'shopee', pr: '445K', fm: 'Combo', rv: '2.2 Tỷ', g: '-46%', us: '6.1K', ug: '-53%', tr: '8.5 Tỷ', tu: '33.2K', re: '6,716', url: 'https://shopee.vn/product/127805122/29227911732' },
          { n: 'Combo 5 ream Giấy A4 giấy photo IK Copy Copy Plus 70 80gsm', sc: 'giay_copy', br: 'IK Copy', ch: 'shopee', pr: '417K', fm: 'Combo', rv: '2.2 Tỷ', g: '+1%', us: '5.9K', ug: '-8%', tr: '10.1 Tỷ', tu: '30.7K', re: '6,962', url: 'https://shopee.vn/product/368671137/23228967167' },
          { n: 'Combo 5 Ream Giấy In Giấy A4 70 gsm - Giấy Photo Copy Giá Tốt Deli', sc: 'giay_copy', br: 'Deli', ch: 'shopee', pr: '455K', fm: 'Combo', rv: '2.1 Tỷ', g: '-20%', us: '5.6K', ug: '-31%', tr: '5.5 Tỷ', tu: '20.7K', re: '3,927', url: 'https://shopee.vn/product/348955539/28678999911' },
          { n: 'Giấy A4 500 tờ IK Copy 70 gsm - Giấy in A4 Thiên Long nhập khẩu', sc: 'giay_copy', br: 'IK Copy', ch: 'shopee', pr: '93.2K', fm: 'Single', rv: '1.9 Tỷ', g: '-16%', us: '23.6K', ug: '-24%', tr: '8.9 Tỷ', tu: '128.6K', re: '20,770', url: 'https://shopee.vn/product/101480242/12922307639' },
          { n: 'Combo 5 ream giấy in A4 giấy photo 70 80gsm Thiên Long IK Copy', sc: 'giay_copy', br: 'IK Copy', ch: 'shopee', pr: '417.5K', fm: 'Combo', rv: '1.9 Tỷ', g: '+11%', us: '4.9K', ug: '+3%', tr: '10.7 Tỷ', tu: '32.7K', re: '8,119', url: 'https://shopee.vn/product/367619913/21772657261' },
          { n: 'Combo 10 ream Giấy IK Copy 70gsm (MT)', sc: 'giay_copy', br: 'IK Copy', ch: 'shopee', pr: '725K', fm: '70gsm', rv: '1.2 Tỷ', g: '+145%', us: '1.7K', ug: '+128%', tr: '5.6 Tỷ', tu: '8.4K', re: '2,309', url: 'https://shopee.vn/product/367619913/23630511462' },
          { n: 'COMBO 2 Thùng Giấy In A4 IK Plus Giấy Photo IK Plus 70gsm dày dặn', sc: 'giay_copy', br: 'IK Plus', ch: 'shopee', pr: '795K', fm: 'Combo', rv: '1.2 Tỷ', g: '+132%', us: '1.6K', ug: '+126%', tr: '2.0 Tỷ', tu: '2.8K', re: '593', url: 'https://shopee.vn/product/548229539/29180146841' }
        ]
      }
    }
  }
};

/* ===== DYNAMIC AGGREGATION FOR ALL CATE ===== */
(function buildAllCate() {
  const cats = ['but_viet', 'hoc_cu', 'my_thuat', 'van_phong_pham'];
  let totalCur = 0, totalPre = 0;
  let unitsCur = 0, unitsPre = 0;
  let storeCur = 0, storePre = 0;
  
  let platMap = {};
  let brandMapCur = {};
  let priceMap = {};
  let allProds = [];

  cats.forEach(k => {
    if(!CAT[k]) return;
    const d = CAT[k];
    
    const getVal = (str) => {
      let m = String(str).match(/[\d.]+/);
      return m ? parseFloat(m[0]) : 0;
    };
    
    // KPI 0: Gross Sales
    let curG = getVal(d.kpi[0].v);
    let preGMatch = String(d.kpi[0].sub).match(/[\d.]+/);
    let preG = preGMatch ? parseFloat(preGMatch[0]) : 0;
    
    totalCur += curG; totalPre += preG;
    
    // KPI 1: Units
    let curU = getVal(d.kpi[1].v);
    let preUMatch = String(d.kpi[1].sub).match(/[\d.]+/);
    let preU = preUMatch ? parseFloat(preUMatch[0]) : 0;
    unitsCur += curU; unitsPre += preU;
    
    // KPI 3: Storefronts
    let getStore = (str) => {
      let s = String(str);
      let v = getVal(s.replace(/,/g, ''));
      return s.toLowerCase().includes('nghìn') || v < 100 ? v * 1000 : v;
    };
    storeCur += getStore(d.kpi[3].v);
    storePre += getStore(d.kpi[3].sub);
    
    // Platforms
    if (d.plat) {
      d.plat.forEach(p => {
         if(!platMap[p.n]) platMap[p.n] = {n: p.n, cur:0, pre:0, c: p.c};
         platMap[p.n].cur += p.cur;
         platMap[p.n].pre += p.pre;
      });
    }
    
    // Brands
    if (d.brand) {
      d.brand.forEach(b => {
         let n = b.n === 'TL' ? 'Thiên Long' : b.n;
         if(!brandMapCur[n]) { brandMapCur[n] = {n: n, curAbs: 0, preAbs: 0, c: b.c}; }
         brandMapCur[n].curAbs += (b.cur / 100) * curG;
         brandMapCur[n].preAbs += (b.pre / 100) * preG;
      });
    }
    
    // Prices
    if (d.price) {
      d.price.forEach(p => {
        let r = p.r.replace('.0M', 'M');
        if(!priceMap[r]) priceMap[r] = {r: r, s:0, l:0, t:0};
        priceMap[r].s += p.s||0;
        priceMap[r].l += p.l||0;
        priceMap[r].t += p.t||0;
      });
    }
    
    // Prod
    if (d.prod) {
      d.prod.forEach(p => { allProds.push({...p, cat: d.n}); });
    }
  });

  const pFmt = (v) => v > 0 ? '+'+Math.abs(v) : v == 0 ? '0' : '-'+Math.abs(v);
  const groG = ((totalCur - totalPre)/totalPre * 100).toFixed(0);
  const groU = ((unitsCur - unitsPre)/unitsPre * 100).toFixed(0);
  const groSt = ((storeCur - storePre)/storePre * 100).toFixed(0);
  
  // TikTok Market Share: computed directly from the merged platform totals (not a weighted average of shares)
  const platCurTotal = Object.values(platMap).reduce((s,p)=>s+p.cur,0);
  const platPreTotal = Object.values(platMap).reduce((s,p)=>s+p.pre,0);
  const tikTotal = platMap['TikTok Shop'] || {cur:0,pre:0};
  const tShrCur = (tikTotal.cur/platCurTotal*100).toFixed(1);
  const tShrPre = (tikTotal.pre/platPreTotal*100).toFixed(1);
  const groShr = (tShrCur - tShrPre).toFixed(1);
  
  const fmtSt = storeCur > 1000 ? (storeCur/1000).toFixed(1) : storeCur.toFixed(0);
  const fmtStU = storeCur > 1000 ? 'Nghìn' : '';
  const fmtStPre = storePre > 1000 ? (storePre/1000).toFixed(1) + ' nghìn' : storePre.toFixed(0);

  const kpis = [
    { l: 'Gross Sales (VND)', v: totalCur.toFixed(1), u: 'Tỷ', g: pFmt(groG)+'%', sub: `vs ${totalPre.toFixed(1)} tỷ in ${PERIOD.pre}`, ic: 'blue' },
    { l: 'Units Sold', v: unitsCur.toFixed(1), u: 'Triệu', g: pFmt(groU)+'%', sub: `vs ${unitsPre.toFixed(1)} triệu in ${PERIOD.pre}`, ic: 'green' },
    { l: 'TikTok Market Share', v: tShrCur+'%', u: '', g: pFmt(groShr)+'pp', sub: `vs ${tShrPre}% in ${PERIOD.pre}`, ic: 'teal' },
    { l: 'Active Storefronts', v: fmtSt, u: fmtStU, g: pFmt(groSt)+'%', sub: `vs ${fmtStPre} in ${PERIOD.pre}`, ic: 'orange' }
  ];
  
  let platArr = Object.values(platMap).sort((a,b)=>b.cur - a.cur);
  
  let brands = Object.values(brandMapCur);
  brands.forEach(b => {
     b.cur = (b.curAbs / totalCur) * 100;
     b.pre = totalPre > 0 ? (b.preAbs / totalPre) * 100 : 0;
  });
  brands.sort((a,b)=>b.cur - a.cur);
  
  let finalBrands = [];
  let othersCur = 0, othersPre = 0;
  brands.forEach(b => {
     if(finalBrands.length < 5 && b.n.toLowerCase() !== 'others') {
         finalBrands.push(b);
     } else {
         othersCur += b.cur; othersPre += b.pre;
     }
  });
  finalBrands.push({n: 'Others', cur: othersCur, pre: othersPre, c: '#cbd5e1'});

  const priceOrder = [
    '< 10K','10K-30K','30K-50K','50K-75K','75K-100K','100K-150K','150K-200K',
    '200K-350K','350K-500K','500K-750K','750K-1M','1M-1.5M','1.5M-2M','2M-3.5M',
    '3.5M-5M','5M-7.5M','7.5M-10M','10M-15M','10K-50K','50K-100K','100K-200K','200K-500K','500K-1M','1M-2M','2M-5M','>5M'
  ];
  let finalPrices = [];
  priceOrder.forEach(r => { if(priceMap[r]) finalPrices.push(priceMap[r]); });
  Object.keys(priceMap).forEach(r => { if(!priceOrder.includes(r)) finalPrices.push(priceMap[r]); });
  
  const getRv = (str) => {
    if(!str) return 0;
    let s = str.toString();
    if(s.includes('Tỷ')) return parseFloat(s) * 1000;
    if(s.includes('Tr')) return parseFloat(s);
    return 0;
  };
  allProds.sort((a,b) => getRv(b.rv) - getRv(a.rv));
  let topProds = allProds.slice(0, 10);

  let top10Rv = 0;
  for(let i=0; i<10 && i<topProds.length; i++) top10Rv += getRv(topProds[i].rv) / 1000; // in ty
  let top10Contri = (top10Rv / totalCur * 100).toFixed(1);
  
  let topBrandShare = finalBrands[0] || {n:'N/A', cur:0};
  let prodCnt = topProds.slice(0,10).filter(p=>{
     let n = (p.br||'').toLowerCase();
     let tn = topBrandShare.n.toLowerCase();
     return n.includes(tn) || tn.includes(n) || (tn==='thiên long' && (n==='tl' || n==='colokit' || n==='flexoffice'));
  }).length;
  
  const allObj = {
    n: 'All Cate', i: '🌐',
    sc: [{ k: 'all', n: 'All', i: '📊' }],
    kpi: kpis,
    dkpi: [
      kpis[0],
      { l: 'Top 10 Contribution', v: '~' + top10Contri + '%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' },
      kpis[2],
      { l: 'Leading Brand', v: `${topBrandShare.n} (${topBrandShare.cur.toFixed(1)}%)`, u: '', g: '', sub: `${prodCnt}/10 Top SKU Spots`, ic: 'orange' }
    ],
    plat: platArr,
    brand: finalBrands,
    price: finalPrices,
    prod: topProds
  };

  // Reorder: place 'all' first in one clean pass
  const _ordered = Object.assign({all: allObj}, CAT);
  Object.keys(CAT).forEach(k => delete CAT[k]);
  Object.assign(CAT, _ordered);
})();

/* ===== MONTHLY TREND DATA (YTD H1 2026 — Jan to Jun; Apr-Jun pending until Q2 MONTHLY data is filled in) =====
   rv = Gross Revenue (tỷ VND) | ts = TikTok Share (%) | pre_* = same month prev year
*/
var MONTHLY = [{m:'Jan',rv:120.5,pre_rv:95.2,ts:40.1,pre_ts:30.2},{m:'Feb',rv:98.3,pre_rv:78.5,ts:41.3,pre_ts:31.8},{m:'Mar',rv:115.8,pre_rv:89.4,ts:43.8,pre_ts:35.1}];

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
    kpi: [{ l: 'Gross Sales (VND)', v: '104.4', u: 'Tỷ', g: '+36%', sub: 'vs 77 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '3.4', u: 'Triệu', g: '-41%', sub: 'vs 5.8 triệu in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '35.5%', u: '', g: '+0.9pp', sub: 'vs 34.6% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '6.2', u: 'Nghìn', g: '-2%', sub: 'vs 6.3 nghìn in Q2 2025', ic: 'orange' }],
    dkpi: [{ l: 'Gross Sales (VND)', v: '104.4', u: 'Tỷ', g: '+36%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~7%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '35.5%', u: '', g: '+0.9pp', sub: 'vs 34.6% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'TL (19.4%)', u: '', g: '', sub: '5/10 Top SKU Spots', ic: 'orange' }],
    plat: [{ n: 'Shopee', cur: 66, pre: 48.18, c: '#f97316' }, { n: 'TikTok Shop', cur: 37, pre: 26.62, c: '#0f172a' }, { n: 'Lazada', cur: 1.3, pre: 2.2, c: '#3b82f6' }],
    brand: [{ n: 'Thiên Long', cur: 19.4, pre: 18.3, c: '#1a56db' }, { n: 'Deli', cur: 11.6, pre: 10.4, c: '#ef4444' }, { n: 'Classmate', cur: 2.8, pre: 0, c: '#8b5cf6' }, { n: 'Bossee', cur: 1.9, pre: 0, c: '#f97316' }, { n: 'G-Star', cur: 1.9, pre: 2.5, c: '#10b981' }, { n: 'Others', cur: 62.4, pre: 68.8, c: '#cbd5e1' }],
    price: [{ r: '< 10K', s: 4.72, l: 0, t: 0 }, { r: '10K-30K', s: 25.14, l: 0, t: 0 }, { r: '30K-50K', s: 23.26, l: 0, t: 0 }, { r: '50K-75K', s: 15.69, l: 0, t: 0 }, { r: '75K-100K', s: 11.67, l: 0, t: 0 }, { r: '100K-150K', s: 8.96, l: 0, t: 0 }, { r: '150K-200K', s: 2.95, l: 0, t: 0 }, { r: '200K-350K', s: 4.07, l: 0, t: 0 }, { r: '350K-500K', s: 3.5, l: 0, t: 0 }, { r: '500K-750K', s: 1.56, l: 0, t: 0 }, { r: '750K-1M', s: 1.14, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.74, l: 0, t: 0 }, { r: '1.5M-2M', s: 0.38, l: 0, t: 0 }, { r: '2M-3.5M', s: 0.27, l: 0, t: 0 }, { r: '3.5M-5M', s: 0.1, l: 0, t: 0 }, { r: '5M-7.5M', s: 0.1, l: 0, t: 0 }, { r: '7.5M-10M', s: 0.11, l: 0, t: 0 }, { r: '10M-15M', s: 0.02, l: 0, t: 0 }],
    prod: [
      { n: 'Combo 5 10 20 Bút gel Fasgel GEL-068', sc: 'all', br: 'Thiên Long', ch: 'tiktok', pr: '31.5K', fm: 'Combo', rv: '1.4 Tỷ', g: '+4%', us: '46.6K', ug: '+9%', tr: '3.6 Tỷ', tu: '117.8K', re: '9,239', url: 'https://www.tiktok.com/view/product/1732616810831906809' },
      { n: 'Combo 5 10 20 Bút bi màu pastel PRO 027 Thiên Long TL-105', sc: 'all', br: 'Thiên Long', ch: 'tiktok', pr: '32.2K', fm: 'Combo', rv: '1.2 Tỷ', g: '-3%', us: '32.8K', ug: '+14%', tr: '5.9 Tỷ', tu: '194.5K', re: '15,436', url: 'https://www.tiktok.com/view/product/1729758198371814393' },
      { n: 'Combo 5 10 20 Bút bi Thiên Long Pro 027 TL-105 - 3 màu mực', sc: 'all', br: 'Thiên Long', ch: 'shopee', pr: '30.5K', fm: 'Combo', rv: '838.8 Tr', g: '-7%', us: '28.9K', ug: '-3%', tr: '5.0 Tỷ', tu: '185.2K', re: '35,883', url: 'https://shopee.vn/product/101480242/21193760161' },
      { n: 'TẶNG NGÒI Bút Bi Nước Deli Viết Gel Bấm A575 Ngòi 0.5mm', sc: 'all', br: 'Deli', ch: 'shopee', pr: '10K', fm: 'Single', rv: '721.3 Tr', g: '+15%', us: '83.1K', ug: '+23%', tr: '6.7 Tỷ', tu: '2000.0K', re: '127,796', url: 'https://shopee.vn/product/127805122/18109428728' },
      { n: 'DEAL SỐC 4K 1C Combo 5 10 20 Bút gel bấm ngòi ST 0.5mm', sc: 'all', br: 'Deli', ch: 'tiktok', pr: '28.8K', fm: 'Combo', rv: '669.0 Tr', g: '+18416%', us: '23.7K', ug: '+21844%', tr: '685.5 Tr', tu: '25.1K', re: '1,113', url: 'https://www.tiktok.com/view/product/1731593973247936127' },
      { n: 'Hộp 12 24 48 Cây Bút Gel Đầu Bấm King TR5 Aodemei 6119', sc: 'all', br: 'Aodemei', ch: 'tiktok', pr: '58.6K', fm: 'Combo', rv: '541.5 Tr', g: '+955%', us: '10.0K', ug: '+851%', tr: '632.0 Tr', tu: '12.2K', re: '859', url: 'https://www.tiktok.com/view/product/1730185571302607719' },
      { n: 'Combo Bút Máy Gel FP34 Mực Nhanh Khô Viết Êm Trơn Ngòi', sc: 'all', br: 'VPP. KINH BẮC', ch: 'tiktok', pr: '41.2K', fm: 'Combo', rv: '510.4 Tr', g: '+27%', us: '12.9K', ug: '+30%', tr: '1.0 Tỷ', tu: '25.4K', re: '1,609', url: 'https://www.tiktok.com/view/product/1733208624875865231' },
      { n: 'ẢNH THẬT SET 8 bút gel Cao Cấp DUDU ngòi 0.5mm mực xanh đen', sc: 'all', br: 'DUDU', ch: 'tiktok', pr: '23.4K', fm: 'Combo', rv: '510.3 Tr', g: '+1%', us: '24.4K', ug: '0%', tr: '1.3 Tỷ', tu: '63.9K', re: '5,235', url: 'https://www.tiktok.com/view/product/1732776664365893367' },
      { n: 'Combo 5 10 20 Bút gel Fasgel Thiên Long GEL-068', sc: 'all', br: 'Thiên Long', ch: 'shopee', pr: '30K', fm: 'Combo', rv: '467.3 Tr', g: '+4%', us: '16.9K', ug: '+7%', tr: '1.1 Tỷ', tu: '40.9K', re: '6,985', url: 'https://shopee.vn/product/101480242/42170566678' },
      { n: 'Combo Bút bi Thiên Long Pro 027 TL-105 màu pastel ngòi 0.5mm', sc: 'all', br: 'Thiên Long', ch: 'shopee', pr: '26K', fm: 'Combo', rv: '456.8 Tr', g: '-18%', us: '18.1K', ug: '-7%', tr: '2.8 Tỷ', tu: '115.2K', re: '22,089', url: 'https://shopee.vn/product/368671137/23577091247' }
    ],
    sdata: {
      but_bi: {
        kpi: [{ l: 'Gross Sales (VND)', v: '29.7', u: 'Tỷ', g: '+25%', sub: 'vs 23.7 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '914.8', u: 'Nghìn', g: '-32%', sub: 'vs 1.3 triệu in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '35.3%', u: '', g: '+5.5pp', sub: 'vs 29.8% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '3.6', u: 'Nghìn', g: '-3%', sub: 'vs 3.7 nghìn in Q2 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '29.7', u: 'Tỷ', g: '+25%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~16.5%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '35.3%', u: '', g: '+5.5pp', sub: 'vs 29.8% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'TL (42.1%)', u: '', g: '', sub: '8/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 18.6, pre: 15.5, c: '#f97316' }, { n: 'TikTok Shop', cur: 10.5, pre: 7.05, c: '#0f172a' }, { n: 'Lazada', cur: 0.62, pre: 1.12, c: '#3b82f6' }],
        brand: [{ n: 'Thiên Long', cur: 42.1, pre: 37.1, c: '#1a56db' }, { n: 'Deli', cur: 6.4, pre: 6.5, c: '#ef4444' }, { n: 'G-Star', cur: 3.3, pre: 3.6, c: '#10b981' }, { n: 'Flexoffice', cur: 1.9, pre: 0, c: '#8b5cf6' }, { n: 'Aihao', cur: 1.3, pre: 3.2, c: '#f97316' }, { n: 'Others', cur: 45, pre: 49.5, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.78, l: 0, t: 0 }, { r: '10K-30K', s: 7.71, l: 0, t: 0 }, { r: '30K-50K', s: 6.41, l: 0, t: 0 }, { r: '50K-75K', s: 3.96, l: 0, t: 0 }, { r: '75K-100K', s: 4.51, l: 0, t: 0 }, { r: '100K-150K', s: 3.48, l: 0, t: 0 }, { r: '150K-200K', s: 0.9, l: 0, t: 0 }, { r: '200K-350K', s: 0.94, l: 0, t: 0 }, { r: '350K-500K', s: 0.11, l: 0, t: 0 }, { r: '500K-750K', s: 0.22, l: 0, t: 0 }, { r: '750K-1M', s: 0.48, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.08, l: 0, t: 0 }, { r: '1.5M-2M', s: 0, l: 0, t: 0 }, { r: '2M-3.5M', s: 0, l: 0, t: 0 }],
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
      },
      but_gel: {
        kpi: [{ l: 'Gross Sales (VND)', v: '54.7', u: 'Tỷ', g: '+41%', sub: 'vs 38.9 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '2.3', u: 'Triệu', g: '-52%', sub: 'vs 4.8 triệu in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '38.6%', u: '', g: '+1.9pp', sub: 'vs 36.7% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '4.4', u: 'Nghìn', g: '-4%', sub: 'vs 4.6 nghìn in Q2 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '54.7', u: 'Tỷ', g: '+41%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~11.7%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '38.6%', u: '', g: '+1.9pp', sub: 'vs 36.7% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (16.8%)', u: '', g: '', sub: '2/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 33, pre: 23.4, c: '#f97316' }, { n: 'TikTok Shop', cur: 21.1, pre: 14.26, c: '#0f172a' }, { n: 'Lazada', cur: 0.63, pre: 1.18, c: '#3b82f6' }],
        brand: [{ n: 'Deli', cur: 16.8, pre: 14.5, c: '#ef4444' }, { n: 'Thiên Long', cur: 13.7, pre: 12.9, c: '#1a56db' }, { n: 'Classmate', cur: 4.9, pre: 1.3, c: '#8b5cf6' }, { n: 'Bossee', cur: 3.3, pre: 0, c: '#f97316' }, { n: 'G-Star', cur: 2, pre: 2.6, c: '#10b981' }, { n: 'M&G', cur: 1.3, pre: 1.9, c: '#f59e0b' }, { n: 'Others', cur: 58, pre: 66.7, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 4.13, l: 0, t: 0 }, { r: '10K-30K', s: 15.63, l: 0, t: 0 }, { r: '30K-50K', s: 15.16, l: 0, t: 0 }, { r: '50K-75K', s: 9.43, l: 0, t: 0 }, { r: '75K-100K', s: 4.39, l: 0, t: 0 }, { r: '100K-150K', s: 3.56, l: 0, t: 0 }, { r: '150K-200K', s: 0.8, l: 0, t: 0 }, { r: '200K-350K', s: 1.2, l: 0, t: 0 }, { r: '350K-500K', s: 0.13, l: 0, t: 0 }, { r: '500K-750K', s: 0.17, l: 0, t: 0 }, { r: '750K-1M', s: 0.11, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.01, l: 0, t: 0 }, { r: '1.5M-2M', s: 0.02, l: 0, t: 0 }],
        prod: [
          { n: 'Combo 5 10 20 Bút gel Fasgel GEL-068', sc: 'but_gel', br: 'Thiên Long', ch: 'tiktok', pr: '34K', fm: 'Combo', rv: '1.4 Tỷ', g: '+4%', us: '46.6K', ug: '+9%', tr: '3.6 Tỷ', tu: '118.4K', re: '9,674', url: 'https://www.tiktok.com/view/product/1732616810831906809' },
          { n: 'TẶNG NGÒI Bút Bi Nước Deli Viết Gel Bấm A575 Ngòi 0.5mm', sc: 'but_gel', br: 'Deli', ch: 'shopee', pr: '10K', fm: 'Single', rv: '721.3 Tr', g: '+15%', us: '83.1K', ug: '+23%', tr: '6.7 Tỷ', tu: '2000.0K', re: '127,796', url: 'https://shopee.vn/product/127805122/18109428728' },
          { n: 'DEAL SỐC 4K 1C Combo 5 10 20 Bút gel bấm ngòi ST 0.5mm', sc: 'but_gel', br: 'Deli', ch: 'tiktok', pr: '27.9K', fm: 'Combo', rv: '667.9 Tr', g: '+18386%', us: '23.7K', ug: '+21844%', tr: '686.0 Tr', tu: '25.2K', re: '1,526', url: 'https://www.tiktok.com/view/product/1731593973247936127' },
          { n: 'Bút đánh dấu sơn chống nước gốc dầu trắng Bút Graffiti', sc: 'but_gel', br: 'Topick Global', ch: 'shopee', pr: '41K', fm: 'Single', rv: '556.0 Tr', g: '', us: '13.5K', ug: '', tr: '556.8 Tr', tu: '13.6K', re: '791', url: 'https://shopee.vn/product/196261835/26875711128' },
          { n: 'HOT Bút Semi-gel Hồng Hà ngòi 0.5mm viết trơn mướt êm ru', sc: 'but_gel', br: 'Hồng Hà', ch: 'tiktok', pr: '49.1K', fm: 'Single', rv: '553.0 Tr', g: '+79543%', us: '12.7K', ug: '+140622%', tr: '568.7 Tr', tu: '13.0K', re: '613', url: 'https://www.tiktok.com/view/product/1730909398612019406' },
          { n: 'Hộp 12 24 48 Cây Bút Gel Đầu Bấm King TR5 Aodemei 6119', sc: 'but_gel', br: 'Aodemei', ch: 'tiktok', pr: '58.6K', fm: 'Combo', rv: '541.5 Tr', g: '+955%', us: '10.0K', ug: '+851%', tr: '652.7 Tr', tu: '12.6K', re: '859', url: 'https://www.tiktok.com/view/product/1730185571302607719' },
          { n: 'Combo Bút Máy Gel FP34 Mực Nhanh Khô Viết Êm Trơn Ngòi', sc: 'but_gel', br: 'VPP. KINH BẮC', ch: 'tiktok', pr: '44.1K', fm: 'Combo', rv: '511.1 Tr', g: '+27%', us: '12.9K', ug: '+30%', tr: '1.0 Tỷ', tu: '25.5K', re: '1,647', url: 'https://www.tiktok.com/view/product/1733208624875865231' },
          { n: 'ẢNH THẬT SET 8 bút gel Cao Cấp DUDU ngòi 0.5mm mực xanh đen', sc: 'but_gel', br: 'DUDU', ch: 'tiktok', pr: '21.7K', fm: 'Combo', rv: '509.3 Tr', g: '+1%', us: '24.4K', ug: '0%', tr: '1.3 Tỷ', tu: '64.2K', re: '5,537', url: 'https://www.tiktok.com/view/product/1732776664365893367' },
          { n: 'Combo 5 10 20 Bút gel Fasgel Thiên Long GEL-068', sc: 'but_gel', br: 'Thiên Long', ch: 'shopee', pr: '30K', fm: 'Combo', rv: '467.3 Tr', g: '+4%', us: '16.9K', ug: '+7%', tr: '1.1 Tỷ', tu: '40.9K', re: '6,985', url: 'https://shopee.vn/product/101480242/42170566678' },
          { n: 'Hộp 10 12 Bút Gel Bấm Nắp ClassMate Ngòi ST 2 Bi Siêu Trơn', sc: 'but_gel', br: 'Classmate', ch: 'tiktok', pr: '33K', fm: 'Combo', rv: '445.2 Tr', g: '+64%', us: '14.4K', ug: '+25%', tr: '2.0 Tỷ', tu: '88.7K', re: '7,030', url: 'https://www.tiktok.com/view/product/1731356450781955429' }
        ]
      }
    }
  },
  hoc_cu: {
    n: 'Học Cụ', i: '📐',
    sc: [{ k: 'all', n: 'All', i: '📊' }, { k: 'may_tinh', n: 'Máy Tính KH', i: '🔢' }, { k: 'tap_vo', n: 'Tập Vở Sổ', i: '📓' }, { k: 'balo', n: 'Balo Học Sinh', i: '🎒' }, { k: 'but_chi', n: 'Bút Chì', i: '✏️' }, { k: 'gom', n: 'Gôm Tẩy', i: '🧽' }],
    kpi: [{ l: 'Gross Sales (VND)', v: '105.5', u: 'Tỷ', g: '+56%', sub: 'vs 67.7 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '2.8', u: 'Triệu', g: '-26%', sub: 'vs 3.8 triệu in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '33.8%', u: '', g: '+6.1pp', sub: 'vs 27.7% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '7.5', u: 'Nghìn', g: '-1%', sub: 'vs 7.6 nghìn in Q2 2025', ic: 'orange' }],
    dkpi: [{ l: 'Gross Sales (VND)', v: '105.5', u: 'Tỷ', g: '+56%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~20.6%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '33.8%', u: '', g: '+6.1pp', sub: 'vs 27.7% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Thiên Long (18.8%)', u: '', g: '', sub: '7/10 Top SKU Spots', ic: 'orange' }],
    plat: [{ n: 'Shopee', cur: 69, pre: 47.59, c: '#f97316' }, { n: 'TikTok Shop', cur: 35.7, pre: 18.79, c: '#0f172a' }, { n: 'Lazada', cur: 0.79, pre: 1.44, c: '#3b82f6' }],
    brand: [{ n: 'Thiên Long', cur: 18.8, pre: 9.7, c: '#1a56db' }, { n: 'Deli', cur: 10.7, pre: 8.9, c: '#ef4444' }, { n: 'Flexio', cur: 4.9, pre: 1.2, c: '#10b981' }, { n: 'Casio', cur: 3.2, pre: 4, c: '#8b5cf6' }, { n: 'Classmate', cur: 3.2, pre: 0, c: '#8b5cf6' }, { n: 'Hà My Bookstore', cur: 1.4, pre: 3, c: '#3b82f6' }, { n: 'Others', cur: 57.7, pre: 73.2, c: '#cbd5e1' }],
    price: [{ r: '< 10K', s: 3.84, l: 0, t: 0 }, { r: '10K-30K', s: 21.8, l: 0, t: 0 }, { r: '30K-50K', s: 15.29, l: 0, t: 0 }, { r: '50K-75K', s: 14.78, l: 0, t: 0 }, { r: '75K-100K', s: 7.48, l: 0, t: 0 }, { r: '100K-150K', s: 7.55, l: 0, t: 0 }, { r: '150K-200K', s: 2.25, l: 0, t: 0 }, { r: '200K-350K', s: 4.7, l: 0, t: 0 }, { r: '350K-500K', s: 1.55, l: 0, t: 0 }, { r: '500K-750K', s: 21.94, l: 0, t: 0 }, { r: '750K-1M', s: 3.72, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.34, l: 0, t: 0 }, { r: '1.5M-2M', s: 0.03, l: 0, t: 0 }, { r: '2M-3.5M', s: 0.01, l: 0, t: 0 }, { r: '3.5M-5M', s: 0.15, l: 0, t: 0 }, { r: '5M-7.5M', s: 0.1, l: 0, t: 0 }],
    prod: [
      { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN - Máy tính học sinh', sc: 'all', br: 'Thiên Long', ch: 'shopee', pr: '641.5K', fm: 'Single', rv: '5.2 Tỷ', g: '+54%', us: '8.5K', ug: '+45%', tr: '19.0 Tỷ', tu: '33.0K', re: '8,466', url: 'https://shopee.vn/product/101480242/22471594302' },
      { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới', sc: 'all', br: 'Thiên Long', ch: 'tiktok', pr: '664.2K', fm: 'Single', rv: '3.8 Tỷ', g: '-31%', us: '6.2K', ug: '-27%', tr: '28.2 Tỷ', tu: '51.5K', re: '6,708', url: 'https://www.tiktok.com/view/product/1729647692608932857' },
      { n: 'Máy tính cầm tay Flexio Fx799VN Thiên Long - Máy tính học', sc: 'all', br: 'Thiên Long', ch: 'shopee', pr: '641K', fm: 'Single', rv: '2.8 Tỷ', g: '+52%', us: '4.6K', ug: '+48%', tr: '14.4 Tỷ', tu: '25.7K', re: '7,063', url: 'https://shopee.vn/product/368671137/23077933746' },
      { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới', sc: 'all', br: 'Thiên Long', ch: 'tiktok', pr: '679.5K', fm: 'Single', rv: '2.3 Tỷ', g: '-47%', us: '3.9K', ug: '-47%', tr: '20.6 Tỷ', tu: '38.1K', re: '5,163', url: 'https://www.tiktok.com/view/product/1729672334167935993' },
      { n: 'Hộp Bút Chì 2B Cao Cấp NoiR ClassMate Ngòi Chì Cứng Không Dễ Gãy', sc: 'all', br: 'Classmate', ch: 'tiktok', pr: '42.5K', fm: 'Combo', rv: '2.0 Tỷ', g: '', us: '45.6K', ug: '', tr: '2.0 Tỷ', tu: '46.4K', re: '2,596', url: 'https://www.tiktok.com/view/product/1734745827748513125' },
      { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới', sc: 'all', br: 'Thiên Long', ch: 'shopee', pr: '641.5K', fm: 'Single', rv: '1.7 Tỷ', g: '+87%', us: '2.8K', ug: '+78%', tr: '4.2 Tỷ', tu: '7.2K', re: '1,773', url: 'https://shopee.vn/product/101480242/22675511601' },
      { n: 'FS Máy Tính Học Sinh Casio FX-880BTG Chính Hãng Bitex - 4 Màu', sc: 'all', br: 'Casio', ch: 'shopee', pr: '564K', fm: 'Single', rv: '1.6 Tỷ', g: '+8%', us: '2.5K', ug: '+11%', tr: '23.3 Tỷ', tu: '33.4K', re: '9,386', url: 'https://shopee.vn/product/140792708/18134522949' },
      { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN - Bảo hành 84 tháng', sc: 'all', br: 'Thiên Long', ch: 'tiktok', pr: '756.3K', fm: 'Single', rv: '895.0 Tr', g: '+142%', us: '1.4K', ug: '+152%', tr: '2.5 Tỷ', tu: '4.1K', re: '451', url: 'https://www.tiktok.com/view/product/1733173201144219641' },
      { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới bảo hành', sc: 'all', br: 'Thiên Long', ch: 'tiktok', pr: '761.5K', fm: 'Single', rv: '775.4 Tr', g: '+723%', us: '1.2K', ug: '+725%', tr: '949.8 Tr', tu: '1.5K', re: '151', url: 'https://www.tiktok.com/view/product/1729770161754180559' },
      { n: 'QUÀ TẶNG THEO GIÁ TRỊ ĐƠN - 1 SP 1 ĐƠN Hộp bút cho bé', sc: 'all', br: 'Ladoda.VN', ch: 'shopee', pr: '500K', fm: 'Single', rv: '694.0 Tr', g: '', us: '1.4K', ug: '', tr: '694.0 Tr', tu: '1.4K', re: '246', url: 'https://shopee.vn/product/1474890934/41181067934' }
    ],
    sdata: {
      balo: {
        kpi: [{ l: 'Gross Sales (VND)', v: '1.9', u: 'Tỷ', g: '+112%', sub: 'vs 0.9 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '32.9', u: 'Nghìn', g: '+48%', sub: 'vs 22.3 nghìn in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '51.3%', u: '', g: '+4.6pp', sub: 'vs 46.7% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '245', u: '', g: '+6%', sub: 'vs 231 in Q2 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '1.9', u: 'Tỷ', g: '+112%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~49.9%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '51.3%', u: '', g: '+4.6pp', sub: 'vs 46.7% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (25.6%)', u: '', g: '', sub: '1/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 0.9, pre: 0.46, c: '#f97316' }, { n: 'TikTok Shop', cur: 0.96, pre: 0.42, c: '#0f172a' }, { n: 'Lazada', cur: 0.01, pre: 0.02, c: '#3b82f6' }],
        brand: [{ n: 'Deli', cur: 25.56, pre: 24.21, c: '#ef4444' }, { n: 'Classmate', cur: 18.24, pre: 5.24, c: '#8b5cf6' }, { n: 'Thiên Long', cur: 12.91, pre: 13.42, c: '#1a56db' }, { n: 'Quaff', cur: 0.57, pre: 0, c: '#f97316' }, { n: 'Yowei', cur: 0.39, pre: 0.18, c: '#f59e0b' }, { n: 'Others', cur: 42.32, pre: 56.96, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0, l: 0, t: 0 }, { r: '10K-30K', s: 0.15, l: 0, t: 0 }, { r: '30K-50K', s: 0.17, l: 0, t: 0 }, { r: '50K-75K', s: 0.98, l: 0, t: 0 }, { r: '75K-100K', s: 0.07, l: 0, t: 0 }, { r: '100K-150K', s: 0.07, l: 0, t: 0 }, { r: '150K-200K', s: 0.05, l: 0, t: 0 }, { r: '200K-350K', s: 0.08, l: 0, t: 0 }, { r: '350K-500K', s: 0.25, l: 0, t: 0 }, { r: '500K-750K', s: 0.02, l: 0, t: 0 }, { r: '750K-1M', s: 0.01, l: 0, t: 0 }, { r: '1M-1.5M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Cặp Học Thêm 2 Ngăn CLASSMATE MONDEZ Hình Ngô', sc: 'balo', br: 'Classmate', ch: 'tiktok', pr: '65.2K', fm: 'Single', rv: '314.5 Tr', g: '+331%', us: '5.1K', ug: '+440%', tr: '503.3 Tr', tu: 'N/A', re: '403', url: 'https://www.tiktok.com/view/product/1734283384739759870' },
          { n: 'DEAL ĐỘC QUYỀN TIKTOK Cặp Túi Đựng Tài Liệu A4 Deli', sc: 'balo', br: 'Deli', ch: 'tiktok', pr: '69.6K', fm: 'Single', rv: '248.3 Tr', g: '+177%', us: '5.7K', ug: '+243%', tr: '722.0 Tr', tu: 'N/A', re: '1,402', url: 'https://www.tiktok.com/view/product/1730322172440774845' },
          { n: 'Cặp chống gù Thiên Long - Đệm mút dày dặn hơn', sc: 'balo', br: 'Thiên Long', ch: 'tiktok', pr: '450.7K', fm: 'Single', rv: '165.9 Tr', g: '', us: '399.0K', ug: '', tr: '330.4 Tr', tu: 'N/A', re: '146', url: 'https://www.tiktok.com/view/product/1730322168490724038' },
          { n: 'M.Y Túi Đựng Tài Liệu A4 5 8 12 Ngăn – Cặp Hồ Sơ Nhiều Ngăn', sc: 'balo', br: 'Others', ch: 'shopee', pr: '29K', fm: 'Single', rv: '122.1 Tr', g: '+30%', us: '5.2K', ug: '+23%', tr: '345.0 Tr', tu: 'N/A', re: '2,763', url: 'https://shopee.vn/product/450143049/21580495338' },
          { n: 'Cặp sách cho bé ngăn tiện lợi cặp học thêm túi xách đi học 3 ngăn', sc: 'balo', br: 'Others', ch: 'tiktok', pr: '65K', fm: 'Single', rv: '90.5 Tr', g: '+55916%', us: '2.1K', ug: '+10716%', tr: '91.0 Tr', tu: 'N/A', re: '163', url: 'https://www.tiktok.com/view/product/1732062442905175331' },
          { n: 'Cặp học thêm 2 ngăn CLASSMATE CL-SB310 Thiết Kế Ca', sc: 'balo', br: 'Classmate', ch: 'shopee', pr: '78K', fm: 'Single', rv: '0.1 Tr', g: '', us: '1.0K', ug: '', tr: '0.3 Tr', tu: 'N/A', re: '1', url: 'https://shopee.vn/product/483558617/25989055201' },
          { n: 'Có quà tặng kèm Huy Hiệu Pin Cài Áo Balo Túi Xách Học Sinh', sc: 'balo', br: 'Others', ch: 'shopee', pr: '4.5K', fm: 'Single', rv: '0.0 Tr', g: '-83%', us: '2.0K', ug: '-87%', tr: '0.2 Tr', tu: 'N/A', re: '12', url: 'https://shopee.vn/product/25166226/23720578433' },
          { n: 'Mẫu mới Balo Vải Họa Tiết Gấu Nơ Kitty Size 40 Dễ Thương', sc: 'balo', br: 'Others', ch: 'tiktok', pr: '171.2K', fm: 'Single', rv: '1.5 Tr', g: '', us: '9.0K', ug: '', tr: '1.9 Tr', tu: 'N/A', re: '1', url: 'https://www.tiktok.com/view/product/1735457350576145972' },
          { n: 'Ảnh Thật Balo đi học cho bé size to thời trang đi chơi du lịch', sc: 'balo', br: 'Others', ch: 'shopee', pr: '120K', fm: 'Single', rv: '5.7 Tr', g: '-50%', us: '50.0K', ug: '-50%', tr: '32.9 Tr', tu: 'N/A', re: '127', url: 'https://shopee.vn/product/1469285574/40764529775' },
          { n: 'Bình Tân Shop - Balo Họa Tiết Khủng Long Cho Bé Đi Mẫu Giáo', sc: 'balo', br: 'Others', ch: 'tiktok', pr: '34.2K', fm: 'Single', rv: '0.0 Tr', g: '-99%', us: '1.0K', ug: '-99%', tr: '4.0 Tr', tu: 'N/A', re: '9', url: 'https://www.tiktok.com/view/product/1730645731497445541' }
        ]
      },
      but_chi: {
        kpi: [{ l: 'Gross Sales (VND)', v: '13.2', u: 'Tỷ', g: '+67%', sub: 'vs 7.9 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '522.6', u: 'Nghìn', g: '-18%', sub: 'vs 641.2 nghìn in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '34.1%', u: '', g: '+2.2pp', sub: 'vs 31.9% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.9', u: 'Nghìn', g: '-5%', sub: 'vs 2 nghìn in Q2 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '13.2', u: 'Tỷ', g: '+67%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~22.5%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '34.1%', u: '', g: '+2.2pp', sub: 'vs 31.9% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (27.3%)', u: '', g: '', sub: '3/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 8.6, pre: 5.24, c: '#f97316' }, { n: 'TikTok Shop', cur: 4.5, pre: 2.53, c: '#0f172a' }, { n: 'Lazada', cur: 0.11, pre: 0.17, c: '#3b82f6' }],
        brand: [{ n: 'Deli', cur: 27.3, pre: 19.1, c: '#ef4444' }, { n: 'Thiên Long', cur: 12.1, pre: 10.8, c: '#1a56db' }, { n: 'Classmate', cur: 4.1, pre: 1.2, c: '#8b5cf6' }, { n: 'G-Star', cur: 3, pre: 2.5, c: '#10b981' }, { n: 'Angel Mark', cur: 2.3, pre: 0, c: '#f97316' }, { n: 'Staedtler', cur: 2.1, pre: 2.7, c: '#f59e0b' }, { n: 'Others', cur: 49.2, pre: 63.6, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.61, l: 0, t: 0 }, { r: '10K-50K', s: 8.11, l: 0, t: 0 }, { r: '50K-100K', s: 2.8, l: 0, t: 0 }, { r: '100K-200K', s: 1, l: 0, t: 0 }, { r: '200K-500K', s: 0.54, l: 0, t: 0 }, { r: '500K-1M', s: 0.05, l: 0, t: 0 }, { r: '1M-2M', s: 0.29, l: 0, t: 0 }, { r: '2M-5M', s: 0, l: 0, t: 0 }, { r: '>5M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'GIÁ ĐỘC QUYỀN TIKTOK Bút Chì HB 2B Gỗ Đen SIÊU CỨNG', sc: 'but_chi', br: 'Deli', ch: 'tiktok', pr: '56.7K', fm: 'Combo', rv: '588.2 Tr', g: '+457%', us: '10.8K', ug: '+254%', tr: '951.1 Tr', tu: '33.8K', re: '2,133', url: 'https://www.tiktok.com/view/product/1729774420086721151' },
          { n: 'Bút Chì Cơ 2B M.Y Ruột 2mm - Kèm Dao Gọt Chống Gãy Điều Chỉnh', sc: 'but_chi', br: 'M.Y Stationery', ch: 'tiktok', pr: '13.3K', fm: 'Single', rv: '347.6 Tr', g: '+274%', us: '26.2K', ug: '+270%', tr: '445.9 Tr', tu: '33.6K', re: '2,839', url: 'https://www.tiktok.com/view/product/1733830967505093930' },
          { n: 'Hộp 10 bút chì học sinh Thiên Long - Viết chì HB 2B lục giác', sc: 'but_chi', br: 'Thiên Long', ch: 'shopee', pr: '41K', fm: 'Combo', rv: '336.7 Tr', g: '+402%', us: '9.2K', ug: '+395%', tr: '1.3 Tỷ', tu: '39.5K', re: '6,522', url: 'https://shopee.vn/product/101480242/23990060019' },
          { n: 'Bút chì Cơ Chính Tư Thế 2B với chì đậm 2.0mm Thích hợp vẽ viết', sc: 'but_chi', br: 'Big-K Store', ch: 'tiktok', pr: '16.4K', fm: 'Single', rv: '326.2 Tr', g: '-51%', us: '21.1K', ug: '-50%', tr: '1.3 Tỷ', tu: '83.4K', re: '6,702', url: 'https://www.tiktok.com/view/product/1732294558552655401' },
          { n: 'QUÀ TẶNG TRONG LIVE Bút chì 2B HB Deli - Bút lục giác tam giác', sc: 'but_chi', br: 'Deli', ch: 'tiktok', pr: '1.1M', fm: 'Single', rv: '287.5 Tr', g: '+274%', us: '0.3K', ug: '-34%', tr: '388.5 Tr', tu: '1.0K', re: '49', url: 'https://www.tiktok.com/view/product/1732147576692967039' },
          { n: 'Angel Mark Bút Chì Mài Phác Thảo Than Tranh Nghệ Thuật Đặc Biệt', sc: 'but_chi', br: 'Angel Mark', ch: 'shopee', pr: '299K', fm: 'Single', rv: '257.7 Tr', g: '+286%', us: '0.9K', ug: '+239%', tr: '399.5 Tr', tu: '1.5K', re: '461', url: 'https://shopee.vn/product/518500675/27477052514' },
          { n: 'Hộp 10 bút chì học sinh Thiên Long - Viết chì HB 2B lục giác', sc: 'but_chi', br: 'Thiên Long', ch: 'tiktok', pr: '55.4K', fm: 'Combo', rv: '228.6 Tr', g: '+1264%', us: '5.5K', ug: '+1295%', tr: '414.7 Tr', tu: '11.3K', re: '593', url: 'https://www.tiktok.com/view/product/1729549834191145977' },
          { n: 'Bộ Combo 3 Bút Gel + 20 Ruột Thay - Ngòi 0.5mm 3 Màu Đen Xanh', sc: 'but_chi', br: 'CN1 Stationery', ch: 'tiktok', pr: '16.6K', fm: 'Combo', rv: '223.6 Tr', g: '-6%', us: '10.4K', ug: '-8%', tr: '999.2 Tr', tu: '65.2K', re: '6,691', url: 'https://www.tiktok.com/view/product/1731882042517521598' },
          { n: 'Hộp 10 cây Bút chì gỗ Thiên Long GP-01 thân lục giác độ cứng', sc: 'but_chi', br: 'Thiên Long', ch: 'shopee', pr: '47K', fm: 'Combo', rv: '191.5 Tr', g: '+47%', us: '4.9K', ug: '+40%', tr: '1.6 Tỷ', tu: '47.6K', re: '8,572', url: 'https://shopee.vn/product/101480242/1673220598' },
          { n: 'Vỉ 10 12 Bút Chì Gỗ 2B HB Học Sinh Deli Chì Đậm An Toàn', sc: 'but_chi', br: 'Deli', ch: 'shopee', pr: '12.5K', fm: 'Combo', rv: '178.4 Tr', g: '+68%', us: '8.1K', ug: '+134%', tr: '3.2 Tỷ', tu: '191.2K', re: '39,555', url: 'https://shopee.vn/product/127805122/5431388748' }
        ]
      },
      gom: {
        kpi: [{ l: 'Gross Sales (VND)', v: '5.9', u: 'Tỷ', g: '+59%', sub: 'vs 3.7 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '491.5', u: 'Nghìn', g: '-30%', sub: 'vs 700 nghìn in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '29.2%', u: '', g: '+10.1pp', sub: 'vs 19.1% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.8', u: 'Nghìn', g: '-10%', sub: 'vs 2 nghìn in Q2 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '5.9', u: 'Tỷ', g: '+59%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~25.8%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '29.2%', u: '', g: '+10.1pp', sub: 'vs 19.1% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (45.8%)', u: '', g: '', sub: '10/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 4.1, pre: 2.87, c: '#f97316' }, { n: 'TikTok Shop', cur: 1.7, pre: 0.7, c: '#0f172a' }, { n: 'Lazada', cur: 0.03, pre: 0.09, c: '#3b82f6' }],
        brand: [{ n: 'Deli', cur: 45.76, pre: 29.66, c: '#ef4444' }, { n: 'Thiên Long', cur: 3.08, pre: 8.2, c: '#1a56db' }, { n: 'G-Star', cur: 1.62, pre: 2.05, c: '#10b981' }, { n: 'Quaff', cur: 1.48, pre: 0, c: '#f97316' }, { n: 'Tombow', cur: 1.32, pre: 2.12, c: '#8b5cf6' }, { n: 'Others', cur: 46.73, pre: 57.96, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 1.48, l: 0, t: 0 }, { r: '10K-30K', s: 2.21, l: 0, t: 0 }, { r: '30K-50K', s: 1.38, l: 0, t: 0 }, { r: '50K-75K', s: 0.35, l: 0, t: 0 }, { r: '75K-100K', s: 0.29, l: 0, t: 0 }, { r: '100K-150K', s: 0.08, l: 0, t: 0 }, { r: '150K-200K', s: 0.03, l: 0, t: 0 }, { r: '200K-350K', s: 0.04, l: 0, t: 0 }, { r: '350K-500K', s: 0, l: 0, t: 0 }, { r: '500K-750K', s: 0.03, l: 0, t: 0 }, { r: '750K-1M', s: 0.15, l: 0, t: 0 }, { r: '1M-1.5M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Set 4 5 6 tẩy không vụn Nusign x Deli - Cục gôm tẩy trắng siêu sạch', sc: 'gom', br: 'Deli', ch: 'tiktok', pr: '40K', fm: 'Single', rv: '689.9 Tr', g: '+181%', us: '23.4K', ug: '+236%', tr: '1.8 Tỷ', tu: 'N/A', re: '4,653', url: 'https://www.tiktok.com/view/product/1730991643525286527' },
          { n: 'Gôm tẩy 2 đầu Deli 71115 - Tẩy bút mực và tẩy chì hai đầu', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '35K', fm: 'Single', rv: '125.2 Tr', g: '+278%', us: '3.8K', ug: '+241%', tr: '250.9 Tr', tu: 'N/A', re: '1,226', url: 'https://shopee.vn/product/113413980/27967048282' },
          { n: 'Gôm Tẩy Deli Màu Trắng - Tẩy Sạch Ít Vụn Phù Hợp Cho Học Sinh', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '3K', fm: 'Single', rv: '119.0 Tr', g: '+152%', us: '35.2K', ug: '+257%', tr: '629.6 Tr', tu: 'N/A', re: '20,661', url: 'https://shopee.vn/product/127805122/3824689315' },
          { n: 'Gôm Tẩy Định Vị Tẩy Bút Chì Deli Tẩy Sạch Ít Vụn Không Mòn', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '9K', fm: 'Single', rv: '111.0 Tr', g: '+118%', us: '13.3K', ug: '+134%', tr: '472.6 Tr', tu: 'N/A', re: '8,469', url: 'https://shopee.vn/product/127805122/28757886370' },
          { n: 'Hộp 6 Gôm Tẩy Siêu Sạch Deli Nusign Cao Cấp Tẩy Mềm Siêu Sạch', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '18K', fm: 'Single', rv: '109.4 Tr', g: '+74%', us: '5.3K', ug: '+142%', tr: '490.9 Tr', tu: 'N/A', re: '4,417', url: 'https://shopee.vn/product/127805122/26213312447' },
          { n: 'Gôm Tẩy Chì 2B 4B Deli Màu Đen Tẩy Sạch Ít Vụn Tẩy Nhỏ Gọn', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '3K', fm: 'Single', rv: '95.4 Tr', g: '+122%', us: '30.5K', ug: '+245%', tr: '679.8 Tr', tu: 'N/A', re: '27,605', url: 'https://shopee.vn/product/127805122/6175440807' },
          { n: 'Gôm Tẩy Bút Chì Siêu Sạch Chuyên Dùng Cho Học Sinh Deli', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '3K', fm: 'Single', rv: '73.2 Tr', g: '+79%', us: '25.0K', ug: '+168%', tr: '476.6 Tr', tu: 'N/A', re: '13,723', url: 'https://shopee.vn/product/348955539/9951634937' },
          { n: 'Gôm Tẩy Chì 2B Deli - Nhiều Màu - Tẩy sạch ít vụn không mòn', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '4.5K', fm: 'Single', rv: '70.7 Tr', g: '+93%', us: '13.8K', ug: '+164%', tr: '520.7 Tr', tu: 'N/A', re: '12,987', url: 'https://shopee.vn/product/127805122/7288839925' },
          { n: 'Hộp 6 Gôm Tẩy Siêu Sạch Deli Nusign Cao Cấp Tẩy Mềm Ít Vụn', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '18K', fm: 'Single', rv: '65.5 Tr', g: '-12%', us: '3.7K', ug: '-1%', tr: '300.4 Tr', tu: 'N/A', re: '3,181', url: 'https://shopee.vn/product/348955539/29568624298' },
          { n: 'Hộp 6 Gôm Tẩy Bút Chì Nusign Cao Cấp Siêu Sạch Ít Vụn Không Mòn', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '6.5K', fm: 'Single', rv: '64.4 Tr', g: '+483%', us: '7.8K', ug: '+292%', tr: '87.9 Tr', tu: 'N/A', re: '1,862', url: 'https://shopee.vn/product/464418479/27074209091' }
        ]
      },
      may_tinh: {
        kpi: [{ l: 'Gross Sales (VND)', v: '63.1', u: 'Tỷ', g: '+83%', sub: 'vs 34.5 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '185.8', u: 'Nghìn', g: '+25%', sub: 'vs 148.1 nghìn in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '42%', u: '', g: '+14.4pp', sub: 'vs 27.6% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1', u: 'Nghìn', g: '-9%', sub: 'vs 1.1 nghìn in Q2 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '63.1', u: 'Tỷ', g: '+83%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~52.5%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '42%', u: '', g: '+14.4pp', sub: 'vs 27.6% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Casio (44.7%)', u: '', g: '', sub: '5/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 36.2, pre: 23.51, c: '#f97316' }, { n: 'TikTok Shop', cur: 26.5, pre: 9.53, c: '#0f172a' }, { n: 'Lazada', cur: 0.46, pre: 1.48, c: '#3b82f6' }],
        brand: [{ n: 'Casio', cur: 44.69, pre: 59.23, c: '#8b5cf6' }, { n: 'Thiên Long', cur: 24.56, pre: 13.45, c: '#1a56db' }, { n: 'Flexio', cur: 9.83, pre: 4.63, c: '#10b981' }, { n: 'Deli', cur: 0.9, pre: 1.07, c: '#ef4444' }, { n: 'Fahasa', cur: 0.74, pre: 1.51, c: '#3b82f6' }, { n: 'Others', cur: 19.28, pre: 20.1, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.01, l: 0, t: 0 }, { r: '10K-30K', s: 0.36, l: 0, t: 0 }, { r: '30K-50K', s: 0.47, l: 0, t: 0 }, { r: '50K-75K', s: 1.67, l: 0, t: 0 }, { r: '75K-100K', s: 0.39, l: 0, t: 0 }, { r: '100K-150K', s: 0.63, l: 0, t: 0 }, { r: '150K-200K', s: 1.51, l: 0, t: 0 }, { r: '200K-350K', s: 5.13, l: 0, t: 0 }, { r: '350K-500K', s: 2.73, l: 0, t: 0 }, { r: '500K-750K', s: 25.12, l: 0, t: 0 }, { r: '750K-1M', s: 23.46, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.51, l: 0, t: 0 }, { r: '1.5M-2M', s: 0.47, l: 0, t: 0 }, { r: '2M-3.5M', s: 0.35, l: 0, t: 0 }, { r: '3.5M-5M', s: 0.23, l: 0, t: 0 }, { r: '5M-7.5M', s: 0.1, l: 0, t: 0 }],
        prod: [
          { n: 'Máy tính Casio Fx-580VNX nhiều màu được mang vào phòng thi', sc: 'may_tinh', br: 'Casio', ch: 'tiktok', pr: '962K', fm: 'Single', rv: '5.2 Tỷ', g: '+13%', us: '6.4K', ug: '+11%', tr: '29.4 Tỷ', tu: 'N/A', re: '4,041', url: 'https://www.tiktok.com/view/product/1729430797999508070' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN', sc: 'may_tinh', br: 'Thiên Long', ch: 'shopee', pr: '641.5K', fm: 'Single', rv: '5.2 Tỷ', g: '+54%', us: '8.5K', ug: '+45%', tr: '19.0 Tỷ', tu: 'N/A', re: '8,466', url: 'https://shopee.vn/product/101480242/22471594302' },
          { n: 'Máy Tính Casio FX 580 - Màu Đen Hồng Xanh', sc: 'may_tinh', br: 'Casio', ch: 'shopee', pr: '786K', fm: 'Single', rv: '5.0 Tỷ', g: '+69%', us: '6.3K', ug: '+68%', tr: '40.0 Tỷ', tu: 'N/A', re: '11,385', url: 'https://shopee.vn/product/142856269/9633799567' },
          { n: 'FS Máy Tính Casio FX-580VN X dành cho học sinh cấp 2 cấp 3', sc: 'may_tinh', br: 'Casio', ch: 'shopee', pr: '874K', fm: 'Single', rv: '4.0 Tỷ', g: '-4%', us: '4.8K', ug: '-7%', tr: '65.3 Tỷ', tu: 'N/A', re: '24,941', url: 'https://shopee.vn/product/140792708/4558727890' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới', sc: 'may_tinh', br: 'Thiên Long', ch: 'tiktok', pr: '664.2K', fm: 'Single', rv: '3.8 Tỷ', g: '-31%', us: '6.2K', ug: '-27%', tr: '28.2 Tỷ', tu: 'N/A', re: '6,708', url: 'https://www.tiktok.com/view/product/1729647692608932857' },
          { n: 'Máy tính cầm tay Flexio Fx799VN Thiên Long', sc: 'may_tinh', br: 'Thiên Long', ch: 'shopee', pr: '641K', fm: 'Single', rv: '2.8 Tỷ', g: '+52%', us: '4.6K', ug: '+48%', tr: '14.4 Tỷ', tu: 'N/A', re: '7,063', url: 'https://shopee.vn/product/368671137/23077933746' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới', sc: 'may_tinh', br: 'Thiên Long', ch: 'tiktok', pr: '679.5K', fm: 'Single', rv: '2.3 Tỷ', g: '-47%', us: '3.9K', ug: '-47%', tr: '20.6 Tỷ', tu: 'N/A', re: '5,163', url: 'https://www.tiktok.com/view/product/1729672334167935993' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới', sc: 'may_tinh', br: 'Thiên Long', ch: 'shopee', pr: '641.5K', fm: 'Single', rv: '1.7 Tỷ', g: '+87%', us: '2.8K', ug: '+78%', tr: '4.2 Tỷ', tu: 'N/A', re: '1,773', url: 'https://shopee.vn/product/101480242/22675511601' },
          { n: 'FS Máy Tính Học Sinh Casio FX-880BTG Chính Hãng Bitex - 4 Màu', sc: 'may_tinh', br: 'Casio', ch: 'shopee', pr: '564K', fm: 'Single', rv: '1.6 Tỷ', g: '+8%', us: '2.5K', ug: '+11%', tr: '23.3 Tỷ', tu: 'N/A', re: '9,386', url: 'https://shopee.vn/product/140792708/18134522949' },
          { n: 'FS Máy Tính Casio Fx-580VNX dành cho học sinh cấp 2 cấp 3', sc: 'may_tinh', br: 'Casio', ch: 'tiktok', pr: '881.8K', fm: 'Single', rv: '1.5 Tỷ', g: '+2875%', us: '1.9K', ug: '+3085%', tr: '5.0 Tỷ', tu: 'N/A', re: '673', url: 'https://www.tiktok.com/view/product/1730341775370521190' }
        ]
      },
      tap_vo: {
        kpi: [{ l: 'Gross Sales (VND)', v: '19', u: 'Tỷ', g: '+31%', sub: 'vs 14.5 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '488.7', u: 'Nghìn', g: '-21%', sub: 'vs 620.6 nghìn in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '26.9%', u: '', g: '+6.1pp', sub: 'vs 20.8% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.3', u: 'Nghìn', g: '-7%', sub: 'vs 1.4 nghìn in Q2 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '19', u: 'Tỷ', g: '+31%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~19.2%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '26.9%', u: '', g: '+6.1pp', sub: 'vs 20.8% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Thiên Long (9.5%)', u: '', g: '', sub: '1/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 13.6, pre: 11.15, c: '#f97316' }, { n: 'TikTok Shop', cur: 5.1, pre: 3.02, c: '#0f172a' }, { n: 'Lazada', cur: 0.25, pre: 0.38, c: '#3b82f6' }],
        brand: [{ n: 'Thiên Long', cur: 9.5, pre: 7.1, c: '#1a56db' }, { n: 'Hà My Bookstore', cur: 7.9, pre: 14, c: '#3b82f6' }, { n: 'H H T Hải Tiến', cur: 6.8, pre: 5.3, c: '#f97316' }, { n: 'Hong Ha', cur: 5.8, pre: 5.3, c: '#f59e0b' }, { n: 'Hiệp Phong', cur: 5.3, pre: 8, c: '#3b82f6' }, { n: 'Others', cur: 64.7, pre: 60.3, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.77, l: 0, t: 0 }, { r: '10K-30K', s: 2.64, l: 0, t: 0 }, { r: '30K-50K', s: 2.5, l: 0, t: 0 }, { r: '50K-75K', s: 4.43, l: 0, t: 0 }, { r: '75K-100K', s: 3.9, l: 0, t: 0 }, { r: '100K-150K', s: 2.58, l: 0, t: 0 }, { r: '150K-200K', s: 1.29, l: 0, t: 0 }, { r: '200K-350K', s: 0.67, l: 0, t: 0 }, { r: '350K-500K', s: 0.01, l: 0, t: 0 }, { r: '500K-750K', s: 0.03, l: 0, t: 0 }, { r: '750K-1M', s: 0.15, l: 0, t: 0 }, { r: '1M-1.5M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'SIÊU SALE HỜI 10 TẶNG 10 CUỐN Vở 96 TRANG 4 ÔLI', sc: 'tap_vo', br: 'Việt Long', ch: 'tiktok', pr: '163.9K', fm: 'Combo', rv: '748.6 Tr', g: '+1515%', us: '4.8K', ug: '+1440%', tr: '1.4 Tỷ', tu: '10.2K', re: '986', url: 'https://www.tiktok.com/view/product/1730317625553030129' },
          { n: 'TẶNG 02 CUỐN Combo 10 Tập học sinh 96 trang 4 ô ly vuông 2mm', sc: 'tap_vo', br: 'Thiên Long', ch: 'shopee', pr: '136K', fm: 'Combo', rv: '582.1 Tr', g: '+135%', us: '4.2K', ug: '+131%', tr: '1.6 Tỷ', tu: '11.9K', re: '1,602', url: 'https://shopee.vn/product/101480242/29587705915' },
          { n: 'Combo 10 Quyển Tập Vở Học Sinh ABC 96 Trang Khổ A5 70 80gsm', sc: 'tap_vo', br: 'Hà My Bookstore', ch: 'shopee', pr: '77K', fm: 'Combo', rv: '390.3 Tr', g: '+321%', us: '4.9K', ug: '+337%', tr: '2.7 Tỷ', tu: '37.9K', re: '4,332', url: 'https://shopee.vn/product/268018871/9628493947' },
          { n: 'QUÀ TẶNG 7 1 HÌNH Sticker NGẦU NHIÊN DÁN trang trí dán tập vở', sc: 'tap_vo', br: 'VCM Dragon 1991', ch: 'shopee', pr: '300K', fm: 'Single', rv: '385.8 Tr', g: '+61%', us: '1.3K', ug: '+61%', tr: '625.5 Tr', tu: '2.1K', re: '392', url: 'https://shopee.vn/product/878113998/45857314078' },
          { n: 'NY LỐC 10 QUYỂN TẬP 96 TRANG ĐỊNH LƯỢNG 60-70-80-100-120', sc: 'tap_vo', br: 'Hải Hà', ch: 'shopee', pr: '57.6K', fm: 'Combo', rv: '299.5 Tr', g: '+174%', us: '5.2K', ug: '+162%', tr: '1.1 Tỷ', tu: '20.2K', re: '1,568', url: 'https://shopee.vn/product/87162080/29908288406' },
          { n: 'Tập Vở Học Tập B5 - A3 Dạng Ngang S67-S80 Kẻ Caro 30-50 Trang', sc: 'tap_vo', br: 'Tuệ Minh', ch: 'tiktok', pr: '29.6K', fm: 'Combo', rv: '288.6 Tr', g: '+27%', us: '10.5K', ug: '+27%', tr: '669.3 Tr', tu: '24.0K', re: '1,313', url: 'https://www.tiktok.com/view/product/1731613652387529894' },
          { n: 'Vở Ô Ly Hồng Hà Cho Học Sinh Bạn Nhỏ Chất Giấy Bền Siêu Dài', sc: 'tap_vo', br: 'Hong Ha', ch: 'shopee', pr: '114K', fm: 'Single', rv: '279.6 Tr', g: '+267%', us: '2.7K', ug: '+252%', tr: '536.6 Tr', tu: '5.3K', re: '444', url: 'https://shopee.vn/product/880096618/27956762947' },
          { n: 'Combo 10 quyển Tập Vở Học Sinh ABC 96 Trang A5 Giấy 70Gsm', sc: 'tap_vo', br: 'Hà My Bookstore', ch: 'tiktok', pr: '86.1K', fm: 'Combo', rv: '239.7 Tr', g: '+310%', us: '2.9K', ug: '+280%', tr: '1.3 Tỷ', tu: '17.8K', re: '1,233', url: 'https://www.tiktok.com/view/product/1730999647168989590' },
          { n: 'Vở Kẻ Ngang B5 HUERARUMO 300-500 Trang Bìa Bồi Cứng Giấy viết', sc: 'tap_vo', br: 'HUERARUMO', ch: 'tiktok', pr: '80.3K', fm: 'Single', rv: '223.0 Tr', g: '+31%', us: '3.0K', ug: '+25%', tr: '401.8 Tr', tu: '5.5K', re: '301', url: 'https://www.tiktok.com/view/product/1732864714683221266' },
          { n: 'TẶNG STICKER Vở 300 500 trang bìa bồi cứng kẻ ngang 70gsm', sc: 'tap_vo', br: 'Crabit', ch: 'shopee', pr: '54K', fm: 'Single', rv: '208.3 Tr', g: '+155%', us: '3.9K', ug: '+182%', tr: '334.6 Tr', tu: '6.1K', re: '861', url: 'https://shopee.vn/product/19268307/41725318199' }
        ]
      }
    }
  },
  my_thuat: {
    n: 'Mỹ Thuật', i: '🎨',
    sc: [{ k: 'all', n: 'All', i: '📊' }, { k: 'sap_mau', n: 'Sáp Màu', i: '🖍️' }, { k: 'acrylic', n: 'Acrylic Markers', i: '🖋️' }, { k: 'long_mt', n: 'Bút Lông Màu', i: '🖌️' }, { k: 'mau_nuoc', n: 'Màu Nước', i: '💧' }],
    kpi: [{ l: 'Gross Sales (VND)', v: '117.3', u: 'Tỷ', g: '+29%', sub: 'vs 90.6 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '2.9', u: 'Triệu', g: '-17%', sub: 'vs 3.5 triệu in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '34.4%', u: '', g: '+6pp', sub: 'vs 28.4% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '9', u: 'Nghìn', g: '-2%', sub: 'vs 9.2 nghìn in Q2 2025', ic: 'orange' }],
    dkpi: [{ l: 'Gross Sales (VND)', v: '117.3', u: 'Tỷ', g: '+29%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~7.1%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '34.4%', u: '', g: '+6pp', sub: 'vs 28.4% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (13.3%)', u: '', g: '', sub: '2/10 Top SKU Spots', ic: 'orange' }],
    plat: [{ n: 'Shopee', cur: 76.1, pre: 62.89, c: '#f97316' }, { n: 'TikTok Shop', cur: 40.3, pre: 25.67, c: '#0f172a' }, { n: 'Lazada', cur: 0.92, pre: 1.92, c: '#3b82f6' }],
    brand: [{ n: 'Deli', cur: 13.3, pre: 9.62, c: '#ef4444' }, { n: 'Bossee', cur: 4.18, pre: 0.99, c: '#f97316' }, { n: 'Thiên Long', cur: 3.5, pre: 3.9, c: '#1a56db' }, { n: 'Pentel', cur: 2.3, pre: 2.04, c: '#f97316' }, { n: 'Mont Marte', cur: 2.05, pre: 1.88, c: '#8b5cf6' }, { n: 'Others', cur: 74.68, pre: 81.58, c: '#cbd5e1' }],
    price: [{ r: '<10K', s: 1.88, l: 0, t: 0 }, { r: '10K-30K', s: 22.92, l: 0, t: 0 }, { r: '30K-50K', s: 23.8, l: 0, t: 0 }, { r: '50K-75K', s: 19.07, l: 0, t: 0 }, { r: '75K-100K', s: 12.85, l: 0, t: 0 }, { r: '100K-150K', s: 12.08, l: 0, t: 0 }, { r: '150K-200K', s: 5.65, l: 0, t: 0 }, { r: '200K-350K', s: 10.64, l: 0, t: 0 }, { r: '350K-500K', s: 4.39, l: 0, t: 0 }, { r: '500K-750K', s: 2.17, l: 0, t: 0 }, { r: '750K-1M', s: 0.69, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.48, l: 0, t: 0 }, { r: '1.5M-2M', s: 0.24, l: 0, t: 0 }, { r: '2M-3.5M', s: 0.38, l: 0, t: 0 }, { r: '3.5M-5M', s: 0.03, l: 0, t: 0 }, { r: '5M-7.5M', s: 0.02, l: 0, t: 0 }, { r: '7.5M-10M', s: 0.02, l: 0, t: 0 }],
    prod: [
      { n: 'Hộp 60 bút màu Acrylic Marker cao cấp chống nước màu sắc tươi sáng', sc: 'all', br: 'Others', ch: 'tiktok', pr: '75.4K', fm: 'Single', rv: '2.1 Tỷ', g: '-30%', us: '30.7K', ug: '-30%', tr: '13.7 Tỷ', tu: 'N/A', re: '16,462', url: 'https://www.tiktok.com/view/product/1730750363609630947' },
      { n: 'Bút vẽ màu sơn Bút sửa chữa Chống thấm nước', sc: 'all', br: 'Others', ch: 'tiktok', pr: '17K', fm: 'Single', rv: '1.4 Tỷ', g: '-61%', us: '87.1K', ug: '-63%', tr: '7.2 Tỷ', tu: 'N/A', re: '35,374', url: 'https://www.tiktok.com/view/product/1729618020483369405' },
      { n: 'TOP 1 TẶNG 80% MỰC Bút Sơn Acrylic Marker Deli Chính Hãng', sc: 'all', br: 'Deli', ch: 'shopee', pr: '39K', fm: 'Single', rv: '799.7 Tr', g: '+241%', us: '13.3K', ug: '+137%', tr: '2.1 Tỷ', tu: 'N/A', re: '18,600', url: 'https://shopee.vn/product/348955539/25215129183' },
      { n: 'Túi Hồ Sơ 13 Ngăn M.Y.Never 24.5x37x3cm PP Chống Nước', sc: 'all', br: 'Others', ch: 'tiktok', pr: '39.5K', fm: 'Single', rv: '767.8 Tr', g: '+140%', us: '20.0K', ug: '+126%', tr: '1.1 Tỷ', tu: 'N/A', re: '1,504', url: 'https://www.tiktok.com/view/product/1733043773277112211' },
      { n: 'Thẻ Thực Hành Đồ Chơi Bộ 4 Thẻ Và 1 Bút Màu Vui Nhộn Số Đồ Đỏ', sc: 'all', br: 'Others', ch: 'tiktok', pr: '81.3K', fm: 'Single', rv: '587.4 Tr', g: '+51%', us: '8.1K', ug: '+43%', tr: '1.8 Tỷ', tu: 'N/A', re: '1,398', url: 'https://www.tiktok.com/view/product/1732072840465515874' },
      { n: 'Bút lông màu Acrylic Marker hộp 60 màu cao cấp màu sắc tươi sáng', sc: 'all', br: 'Others', ch: 'tiktok', pr: '58K', fm: 'Single', rv: '576.0 Tr', g: '+261%', us: '10.9K', ug: '+262%', tr: '1.2 Tỷ', tu: 'N/A', re: '2,248', url: 'https://www.tiktok.com/view/product/1732131667763169918' },
      { n: 'Bút đánh dấu sơn chống nước gốc dầu trắng Bút Graffiti', sc: 'all', br: 'Others', ch: 'shopee', pr: '41K', fm: 'Single', rv: '556.0 Tr', g: '', us: '13.5K', ug: '', tr: '556.8 Tr', tu: 'N/A', re: '791', url: 'https://shopee.vn/product/196261835/26875711128' },
      { n: 'Hộp Bút Chì Màu Gốc Dầu Cao Cấp Global Art 36 72 Màu Đậm', sc: 'all', br: 'Others', ch: 'tiktok', pr: '407K', fm: 'Single', rv: '549.6 Tr', g: '-52%', us: '1.5K', ug: '-56%', tr: '3.5 Tỷ', tu: 'N/A', re: '1,448', url: 'https://www.tiktok.com/view/product/1730350149081336202' },
      { n: 'Thẻ Thực Hành Đồ Chơi Bộ 4 Thẻ Và 1 Bút Màu Vui Nhộn Số Đồ Đỏ', sc: 'all', br: 'Others', ch: 'tiktok', pr: '73.1K', fm: 'Single', rv: '519.4 Tr', g: '+49%', us: '7.5K', ug: '+48%', tr: '1.7 Tỷ', tu: 'N/A', re: '1,420', url: 'https://www.tiktok.com/view/product/1731595687833405285' },
      { n: 'TOP 1 84 MÀU Bút Sơn Màu Acrylic Maker Deli Dạng Roller Hộp', sc: 'all', br: 'Deli', ch: 'shopee', pr: '395K', fm: 'Single', rv: '508.1 Tr', g: '+81%', us: '1.5K', ug: '+59%', tr: '1.0 Tỷ', tu: 'N/A', re: '767', url: 'https://shopee.vn/product/348955539/43803090618' }
    ],
    sdata: {
      acrylic: {
        kpi: [{ l: 'Gross Sales (VND)', v: '22.2', u: 'Tỷ', g: '+50%', sub: 'vs 14.8 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '437.9', u: 'Nghìn', g: '-15%', sub: 'vs 515.2 nghìn in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '35.6%', u: '', g: '-0.3pp', sub: 'vs 35.9% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.9', u: 'Nghìn', g: '-5%', sub: 'vs 2 nghìn in Q2 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '22.2', u: 'Tỷ', g: '+50%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~26.7%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '35.6%', u: '', g: '-0.3pp', sub: 'vs 35.9% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (23.9%)', u: '', g: '', sub: '5/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 14.1, pre: 8.98, c: '#f97316' }, { n: 'TikTok Shop', cur: 7.9, pre: 5.3, c: '#0f172a' }, { n: 'Lazada', cur: 0.19, pre: 0.49, c: '#3b82f6' }],
        brand: [{ n: 'Deli', cur: 23.87, pre: 12.22, c: '#ef4444' }, { n: 'Bossee', cur: 15.32, pre: 2.99, c: '#f97316' }, { n: 'Thiên Long', cur: 3.56, pre: 2.82, c: '#1a56db' }, { n: 'Enmy', cur: 2.78, pre: 0, c: '#84cc16' }, { n: 'Grasp', cur: 1.11, pre: 0, c: '#f59e0b' }, { n: 'Others', cur: 53.36, pre: 81.97, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.17, l: 0, t: 0 }, { r: '10K-30K', s: 2.8, l: 0, t: 0 }, { r: '30K-50K', s: 4.27, l: 0, t: 0 }, { r: '50K-75K', s: 3.76, l: 0, t: 0 }, { r: '75K-100K', s: 3.67, l: 0, t: 0 }, { r: '100K-150K', s: 1.35, l: 0, t: 0 }, { r: '150K-200K', s: 1.05, l: 0, t: 0 }, { r: '200K-350K', s: 2.83, l: 0, t: 0 }, { r: '350K-500K', s: 1.66, l: 0, t: 0 }, { r: '500K-750K', s: 0.29, l: 0, t: 0 }, { r: '750K-1M', s: 0.17, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.04, l: 0, t: 0 }, { r: '1.5M-2M', s: 0.02, l: 0, t: 0 }, { r: '2M-3.5M', s: 0.1, l: 0, t: 0 }, { r: '3.5M-5M', s: 0, l: 0, t: 0 }, { r: '5M-7.5M', s: 0.01, l: 0, t: 0 }, { r: '7.5M-10M', s: 0, l: 0, t: 0 }, { r: '10M-15M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Hộp 60 bút màu Acrylic Marker cao cấp chống nước màu sắc tươi sáng', sc: 'acrylic', br: 'BinBon Decor', ch: 'tiktok', pr: '75.4K', fm: 'Combo', rv: '2.1 Tỷ', g: '-30%', us: '30.7K', ug: '-30%', tr: '13.7 Tỷ', tu: '210.9K', re: '16,462', url: 'https://www.tiktok.com/view/product/1730750363609630947' },
          { n: 'TOP 1 TẶNG 80% MỰC Bút Sơn Acrylic Marker Deli Chính Hãng', sc: 'acrylic', br: 'Deli', ch: 'shopee', pr: '39K', fm: 'Combo', rv: '799.7 Tr', g: '+241%', us: '13.3K', ug: '+137%', tr: '2.1 Tỷ', tu: '97.3K', re: '18,600', url: 'https://shopee.vn/product/348955539/25215129183' },
          { n: 'Bút lông màu Acrylic Marker hộp 60 màu cao cấp dùng cho nhiều bề mặt', sc: 'acrylic', br: 'NTT Store HN', ch: 'tiktok', pr: '58K', fm: 'Combo', rv: '576.0 Tr', g: '+261%', us: '10.9K', ug: '+262%', tr: '1.2 Tỷ', tu: '23.0K', re: '2,248', url: 'https://www.tiktok.com/view/product/1732131667763169918' },
          { n: 'TOP 1 - 84 MÀU Bút Sơn Màu Acrylic Maker Deli Dạng Roller Hộp', sc: 'acrylic', br: 'Deli', ch: 'shopee', pr: '395K', fm: 'Combo', rv: '508.1 Tr', g: '+81%', us: '1.5K', ug: '+59%', tr: '1.0 Tỷ', tu: '3.9K', re: '787', url: 'https://shopee.vn/product/348955539/43803090618' },
          { n: 'TOP 1 GIÁ SỈ Bút Sơn Acrylic Marker 84 Màu Deli HM335 Dạng Roller', sc: 'acrylic', br: 'Deli', ch: 'shopee', pr: '395K', fm: 'Combo', rv: '452.2 Tr', g: '+2%', us: '1.4K', ug: '-8%', tr: '2.0 Tỷ', tu: '8.9K', re: '1,731', url: 'https://shopee.vn/product/127805122/28935215038' },
          { n: 'MW Bộ bút dạ lông, Acrylic Marker, đầu cọ mềm 48 60 80 120 màu', sc: 'acrylic', br: 'Miracle Works', ch: 'shopee', pr: '339K', fm: 'Combo', rv: '333.9 Tr', g: '+3032%', us: '1.2K', ug: '+2180%', tr: '344.5 Tr', tu: '1.2K', re: '240', url: 'https://shopee.vn/product/1370113610/46454533197' },
          { n: 'Bút Màu Dạ Bossee 120 Màu Marker Acrylic Họa Cụ Tô Màu Dạ Vẽ Tranh', sc: 'acrylic', br: 'Bossee', ch: 'shopee', pr: '45K', fm: 'Combo', rv: '327.2 Tr', g: '-51%', us: '7.5K', ug: '-58%', tr: '2.2 Tỷ', tu: '56.1K', re: '11,308', url: 'https://shopee.vn/product/1437074218/42500627746' },
          { n: 'VOUCHER GIẢM 52% Bút Sơn Màu Acrylic Maker Roller Deli', sc: 'acrylic', br: 'Deli', ch: 'tiktok', pr: '370.3K', fm: 'Combo', rv: '295.3 Tr', g: '-36%', us: '1.0K', ug: '-34%', tr: '1.6 Tỷ', tu: '10.2K', re: '940', url: 'https://www.tiktok.com/view/product/1731288240825665151' },
          { n: 'Bộ 12 24 36 48 60 80 120 Bút Màu Acrylic Marker Đầu Tròn Thân Bút', sc: 'acrylic', br: 'Bossee', ch: 'tiktok', pr: '29.9K', fm: 'Combo', rv: '277.1 Tr', g: '+78%', us: '16.2K', ug: '+52%', tr: '871.6 Tr', tu: '48.7K', re: '4,104', url: 'https://www.tiktok.com/view/product/1731376175186413203' },
          { n: 'THÊM 80% MỰC Bút Sơn Màu Acrylic Marker Deli CHÍNH HÀNG Tô Màu', sc: 'acrylic', br: 'Deli', ch: 'shopee', pr: '215K', fm: 'Combo', rv: '259.6 Tr', g: '+242%', us: '1.3K', ug: '+221%', tr: '783.4 Tr', tu: '4.1K', re: '782', url: 'https://shopee.vn/product/348955539/29725671402' }
        ]
      },
      long_mt: {
        kpi: [{ l: 'Gross Sales (VND)', v: '4.8', u: 'Tỷ', g: '+50%', sub: 'vs 3.2 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '119.9', u: 'Nghìn', g: '-12%', sub: 'vs 135.9 nghìn in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '37.7%', u: '', g: '+14.1pp', sub: 'vs 23.6% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '894', u: '', g: '-19%', sub: 'vs 1100 in Q2 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '4.8', u: 'Tỷ', g: '+50%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~27.2%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '37.7%', u: '', g: '+14.1pp', sub: 'vs 23.6% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Thiên Long (37.5%)', u: '', g: '', sub: '5/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 2.9, pre: 2.36, c: '#f97316' }, { n: 'TikTok Shop', cur: 1.8, pre: 0.76, c: '#0f172a' }, { n: 'Lazada', cur: 0.08, pre: 0.1, c: '#3b82f6' }],
        brand: [{ n: 'Thiên Long', cur: 37.5, pre: 37.01, c: '#1a56db' }, { n: 'Deli', cur: 7.33, pre: 7.8, c: '#ef4444' }, { n: 'Colokit', cur: 4.69, pre: 15.3, c: '#fbbf24' }, { n: 'Enmy', cur: 2.2, pre: 0, c: '#84cc16' }, { n: 'Bossee', cur: 1.32, pre: 0, c: '#f97316' }, { n: 'Others', cur: 46.96, pre: 39.9, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.77, l: 0, t: 0 }, { r: '10K-30K', s: 2.64, l: 0, t: 0 }, { r: '30K-50K', s: 2.5, l: 0, t: 0 }, { r: '50K-75K', s: 4.43, l: 0, t: 0 }, { r: '75K-100K', s: 3.9, l: 0, t: 0 }, { r: '100K-150K', s: 2.58, l: 0, t: 0 }, { r: '150K-200K', s: 1.29, l: 0, t: 0 }, { r: '200K-350K', s: 0.67, l: 0, t: 0 }, { r: '350K-500K', s: 0.01, l: 0, t: 0 }, { r: '500K-750K', s: 0.03, l: 0, t: 0 }, { r: '750K-1M', s: 0.15, l: 0, t: 0 }, { r: '1M-1.5M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Bút lông màu Acrylic Marker hộp 60 màu cao cấp màu sắc tươi sáng', sc: 'long_mt', br: 'Others', ch: 'shopee', pr: '58K', fm: 'Single', rv: '576.0 Tr', g: '+261%', us: '10.9K', ug: '+262%', tr: '1.2 Tỷ', tu: 'N/A', re: '2,248', url: 'https://shopee.vn/product/291755819/19685261142' },
          { n: 'Bút lông màu Fiber Pen Thiên Long Colokit 5 12 24 màu Morandi', sc: 'long_mt', br: 'Thiên Long', ch: 'shopee', pr: '44.9K', fm: 'Single', rv: '272.5 Tr', g: '-37%', us: '6.3K', ug: '-29%', tr: '1.4 Tỷ', tu: 'N/A', re: '4,756', url: 'https://shopee.vn/product/1085507384/22256665441' },
          { n: 'Tặng 2 4 6 màu Acrylic Markers 12 24 36 màu Thiên Long Colokit', sc: 'long_mt', br: 'Thiên Long', ch: 'shopee', pr: '65K', fm: 'Single', rv: '235.4 Tr', g: '+12%', us: '3.4K', ug: '-23%', tr: '766.7 Tr', tu: 'N/A', re: '2,555', url: 'https://shopee.vn/product/364058386/6396654253' },
          { n: 'Bút lông màu Felt Pen Deli 20 36 màu - Màu an toàn có thể rửa', sc: 'long_mt', br: 'Deli', ch: 'tiktok', pr: '58.3K', fm: 'Single', rv: '112.4 Tr', g: '+17%', us: '2.2K', ug: '+25%', tr: '549.2 Tr', tu: 'N/A', re: '1,410', url: 'https://www.tiktok.com/view/product/1732260110127171841' },
          { n: 'Bút lông màu Fiber Pen Thiên Long Colokit 20 36 màu', sc: 'long_mt', br: 'Thiên Long', ch: 'shopee', pr: '66K', fm: 'Single', rv: '105.4 Tr', g: '+28%', us: '2.0K', ug: '+27%', tr: '1.5 Tỷ', tu: 'N/A', re: '9,921', url: 'https://shopee.vn/product/978296801/29282148614' },
          { n: 'COMBO 10 BÚT LÔNG MARKER ĐÁNH DẤU 2 ĐẦU NHỎ TIỆN DỤNG', sc: 'long_mt', br: 'Others', ch: 'shopee', pr: '8.5K', fm: 'Single', rv: '0.6 Tr', g: '+235%', us: '0.1K', ug: '+232%', tr: '1.2 Tr', tu: 'N/A', re: '22', url: 'https://shopee.vn/product/978296801/55056370856' },
          { n: 'BÚT LÔNG MARKER ĐÁNH DẤU 2 ĐẦU NHỎ CHẤT LƯỢNG KHÔNG', sc: 'long_mt', br: 'Others', ch: 'shopee', pr: '9.2K', fm: 'Single', rv: '0.0 Tr', g: '-32%', us: '2.0K', ug: '-33%', tr: '0.0 Tr', tu: 'N/A', re: '2', url: 'https://shopee.vn/product/99581210/5365000829' },
          { n: 'Hộp 10 Bút Dạ Kim - Bút lông kim Doreamon TL Màu Tím FL04 DO', sc: 'long_mt', br: 'Thiên Long', ch: 'shopee', pr: '89K', fm: 'Single', rv: '1.4 Tr', g: '+2113%', us: '18.0K', ug: '+1700%', tr: '2.4 Tr', tu: 'N/A', re: '8', url: 'https://shopee.vn/product/95314687/24836151270' },
          { n: 'Bút lông đầu cọ Artline Supreme Brush blend màu nước', sc: 'long_mt', br: 'Others', ch: 'shopee', pr: '26K', fm: 'Single', rv: '0.0 Tr', g: '-75%', us: '1.0K', ug: '-75%', tr: '0.4 Tr', tu: 'N/A', re: '4', url: 'https://shopee.vn/product/67990878/25733613256' },
          { n: 'Bút lông màu FP-C03 20 màu thiên Long', sc: 'long_mt', br: 'Thiên Long', ch: 'shopee', pr: '82K', fm: 'Single', rv: '0.1 Tr', g: '', us: '1.0K', ug: '', tr: '0.2 Tr', tu: 'N/A', re: '1', url: 'https://shopee.vn/product/969726253/23166609805' }
        ]
      },
      mau_nuoc: {
        kpi: [{ l: 'Gross Sales (VND)', v: '13.3', u: 'Tỷ', g: '+5%', sub: 'vs 12.7 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '298.3', u: 'Nghìn', g: '-25%', sub: 'vs 396.6 nghìn in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '21.9%', u: '', g: '+1.3pp', sub: 'vs 20.6% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.7', u: 'Nghìn', g: '-6%', sub: 'vs 1.8 nghìn in Q2 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '13.3', u: 'Tỷ', g: '+5%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~11%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '21.9%', u: '', g: '+1.3pp', sub: 'vs 20.6% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (12.0%)', u: '', g: '', sub: '3/10 Top SKU Spots', ic: 'orange' }],
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
      },
      sap_mau: {
        kpi: [{ l: 'Gross Sales (VND)', v: '6.7', u: 'Tỷ', g: '+26%', sub: 'vs 5.3 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '210.2', u: 'Nghìn', g: '-21%', sub: 'vs 266 nghìn in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '30%', u: '', g: '+7.4pp', sub: 'vs 22.6% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.3', u: 'Nghìn', g: '-13%', sub: 'vs 1.5 nghìn in Q2 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '6.7', u: 'Tỷ', g: '+26%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~27.1%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '30%', u: '', g: '+7.4pp', sub: 'vs 22.6% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (13.1%)', u: '', g: '', sub: '1/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 4.6, pre: 3.93, c: '#f97316' }, { n: 'TikTok Shop', cur: 2, pre: 1.18, c: '#0f172a' }, { n: 'Lazada', cur: 0.06, pre: 0.11, c: '#3b82f6' }],
        brand: [{ n: 'Deli', cur: 13.13, pre: 10.99, c: '#ef4444' }, { n: 'Classmate', cur: 9.78, pre: 0, c: '#8b5cf6' }, { n: 'Thiên Long', cur: 9.19, pre: 14.35, c: '#1a56db' }, { n: 'Jupitearth', cur: 7.51, pre: 4.44, c: '#3b82f6' }, { n: 'Colokit', cur: 5.79, pre: 8.41, c: '#fbbf24' }, { n: 'Others', cur: 54.6, pre: 61.82, c: '#cbd5e1' }],
        price: [{ r: '<10K', s: 0.16, l: 0, t: 0 }, { r: '10K-30K', s: 1.99, l: 0, t: 0 }, { r: '30K-50K', s: 1.67, l: 0, t: 0 }, { r: '50K-75K', s: 0.56, l: 0, t: 0 }, { r: '75K-100K', s: 0.27, l: 0, t: 0 }, { r: '100K-150K', s: 1.07, l: 0, t: 0 }, { r: '150K-200K', s: 0.34, l: 0, t: 0 }, { r: '200K-350K', s: 0.57, l: 0, t: 0 }, { r: '350K-500K', s: 0.06, l: 0, t: 0 }, { r: '500K-750K', s: 0.01, l: 0, t: 0 }, { r: '750K-1M', s: 0, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.03, l: 0, t: 0 }, { r: '1.5M-2M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Bút màu lụa JUPIEARTH Có các loại 12 24 36 màu sắc tươi sáng', sc: 'sap_mau', br: 'Others', ch: 'tiktok', pr: '104K', fm: 'Single', rv: '465.1 Tr', g: '-41%', us: '4.8K', ug: '-45%', tr: '2.1 Tỷ', tu: 'N/A', re: '1,856', url: 'https://www.tiktok.com/view/product/1731970909916859173' },
          { n: 'Bút Màu Sáp Vặn Màu Sáp Hữu Cơ ClassMate Màu Mịn Tô Đậm Hạn', sc: 'sap_mau', br: 'Classmate', ch: 'tiktok', pr: '40.5K', fm: 'Single', rv: '420.7 Tr', g: '-28%', us: '11.3K', ug: '-27%', tr: '1.5 Tỷ', tu: 'N/A', re: '3,294', url: 'https://www.tiktok.com/view/product/1732744932751476069' },
          { n: 'Sáp đa năng 12 màu rửa được Colo Art Thiên Long Colokit Sáng', sc: 'sap_mau', br: 'Thiên Long', ch: 'shopee', pr: '105.2K', fm: 'Single', rv: '138.6 Tr', g: '+818%', us: '1.7K', ug: '+524%', tr: '181.2 Tr', tu: 'N/A', re: '435', url: 'https://shopee.vn/product/101480242/14492465290' },
          { n: 'TẶNG SỔ PHÁC THẢO Bộ Bút Chì Màu Sáp 48 72 120 Màu Sắc Tươi', sc: 'sap_mau', br: 'Others', ch: 'tiktok', pr: '177.9K', fm: 'Single', rv: '132.7 Tr', g: '-32%', us: '0.8K', ug: '-34%', tr: '720.1 Tr', tu: 'N/A', re: '883', url: 'https://www.tiktok.com/view/product/1729607695017478457' },
          { n: 'Sáp Màu Hữu Cơ 12 18 24 36 Màu Màu Tươi Đẹp Không Dính Tay An Toàn', sc: 'sap_mau', br: 'Others', ch: 'tiktok', pr: '43.3K', fm: 'Single', rv: '128.7 Tr', g: '+178%', us: '3.0K', ug: '+124%', tr: '496.4 Tr', tu: 'N/A', re: '1,175', url: 'https://www.tiktok.com/view/product/1729602424186768231' },
          { n: 'Bút Sáp màu Thiên Long Colokit 24 màu tươi sáng thông dụng tiêu dùng', sc: 'sap_mau', br: 'Thiên Long', ch: 'shopee', pr: '23K', fm: 'Single', rv: '123.3 Tr', g: '-23%', us: '5.7K', ug: '-4%', tr: '1.6 Tỷ', tu: 'N/A', re: '9,869', url: 'https://shopee.vn/product/101480242/1636049068' },
          { n: 'Tú cầu phối hoa sáp dáng tròn có 2 màu tặng túi giấy', sc: 'sap_mau', br: 'Others', ch: 'shopee', pr: '209.6K', fm: 'Single', rv: '107.7 Tr', g: '', us: '0.5K', ug: '', tr: '111.9 Tr', tu: 'N/A', re: '42', url: 'https://shopee.vn/product/101480242/1636049426' },
          { n: 'TẶNG 6 QUÀ Bút Sáp Màu Deli 12 24 Màu Tươi Sáng Màu Sáp Mịn', sc: 'sap_mau', br: 'Deli', ch: 'tiktok', pr: '10.9K', fm: 'Single', rv: '101.4 Tr', g: '', us: '6.5K', ug: '', tr: '101.9 Tr', tu: 'N/A', re: '255', url: 'https://www.tiktok.com/view/product/1734691480685938258' },
          { n: 'Bút màu cho bé quà sinh nhật cho bé gái hộp màu 150 chi tiết quà', sc: 'sap_mau', br: 'Others', ch: 'shopee', pr: '295K', fm: 'Single', rv: '99.5 Tr', g: '+42%', us: '0.4K', ug: '+37%', tr: '2.0 Tỷ', tu: 'N/A', re: '1,411', url: 'https://shopee.vn/product/884990462/55008852578' },
          { n: 'Xả kho Sáp màu hữu cơ màu sắc tươi sáng an toàn cho bé 12 16 24 màu', sc: 'sap_mau', br: 'Others', ch: 'shopee', pr: '8.1K', fm: 'Single', rv: '97.6 Tr', g: '+899%', us: '11.7K', ug: '+943%', tr: '128.7 Tr', tu: 'N/A', re: '950', url: 'https://shopee.vn/product/1011453451/22547000186' }
        ]
      }
    }
  },
  van_phong_pham: {
    n: 'Văn Phòng Phẩm', i: '📎',
    sc: [{ k: 'all', n: 'All', i: '📊' }, { k: 'da_quang', n: 'Bút Dạ Quang', i: '🔆' }, { k: 'long_bang', n: 'Bút Lông Bảng', i: '📝' }, { k: 'long_dau', n: 'Bút Lông Dầu', i: '🖍️' }, { k: 'xoa_nuoc', n: 'Bút Xóa Nước', i: '🖋️' }, { k: 'file_folder', n: 'File & Folder', i: '📂' }, { k: 'giay_copy', n: 'Giấy Photocopy', i: '📄' }],
    kpi: [{ l: 'Gross Sales (VND)', v: '269.3', u: 'Tỷ', g: '+41%', sub: 'vs 190.5 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '5.7', u: 'Triệu', g: '-20%', sub: 'vs 7.1 triệu in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '27.2%', u: '', g: '+3.6pp', sub: 'vs 23.6% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '15.3', u: 'Nghìn', g: '+1%', sub: 'vs 15.2 nghìn in Q2 2025', ic: 'orange' }],
    dkpi: [{ l: 'Gross Sales (VND)', v: '269.3', u: 'Tỷ', g: '+41%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~7.9%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '27.2%', u: '', g: '+3.6pp', sub: 'vs 23.6% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (8.0%)', u: '', g: '', sub: '0/10 Top SKU Spots', ic: 'orange' }],
    plat: [{ n: 'Shopee', cur: 194, pre: 141.61, c: '#f97316' }, { n: 'TikTok Shop', cur: 73.2, pre: 44.91, c: '#0f172a' }, { n: 'Lazada', cur: 2, pre: 4.17, c: '#3b82f6' }],
    brand: [{ n: 'Deli', cur: 7.95, pre: 6.17, c: '#ef4444' }, { n: 'IK Copy', cur: 5.46, pre: 6.22, c: '#8b5cf6' }, { n: 'Thiên Long', cur: 5.05, pre: 8.92, c: '#1a56db' }, { n: 'Oji', cur: 1.45, pre: 0.88, c: '#f97316' }, { n: 'Others', cur: 80.1, pre: 77.81, c: '#cbd5e1' }],
    price: [{ r: '< 10K', s: 4.64, l: 0, t: 0 }, { r: '10K-30K', s: 41.18, l: 0, t: 0 }, { r: '30K-50K', s: 44.8, l: 0, t: 0 }, { r: '50K-75K', s: 37.84, l: 0, t: 0 }, { r: '75K-100K', s: 27.22, l: 0, t: 0 }, { r: '100K-150K', s: 24.53, l: 0, t: 0 }, { r: '150K-200K', s: 12.07, l: 0, t: 0 }, { r: '200K-350K', s: 19.81, l: 0, t: 0 }, { r: '350K-500K', s: 22.66, l: 0, t: 0 }, { r: '500K-750K', s: 12.04, l: 0, t: 0 }, { r: '750K-1M', s: 12.23, l: 0, t: 0 }, { r: '1M-1.5M', s: 4.82, l: 0, t: 0 }, { r: '1.5M-2M', s: 2.22, l: 0, t: 0 }, { r: '2M-3.5M', s: 2.7, l: 0, t: 0 }, { r: '3.5M-5M', s: 0.23, l: 0, t: 0 }, { r: '5M-7.5M', s: 0.25, l: 0, t: 0 }, { r: '7.5M-10M', s: 0.02, l: 0, t: 0 }, { r: '10M-15M', s: 0, l: 0, t: 0 }],
    prod: [
      { n: '10 ream Giấy in A4 70 gsm giấy A4 photo IK Copy Paper Thiên Long', sc: 'all', br: 'IK Copy', ch: 'shopee', pr: '932K', fm: 'Combo', rv: '3.2 Tỷ', g: '+82%', us: '3.8K', ug: '+64%', tr: '11.4 Tỷ', tu: '15.8K', re: '3,538', url: 'https://shopee.vn/product/101480242/10499808000' },
      { n: 'Combo 5 ream Giấy in A4 photo Thiên Long IK Copy 70 gsm đều màu', sc: 'all', br: 'IK Copy', ch: 'shopee', pr: '466K', fm: 'Combo', rv: '2.7 Tỷ', g: '+5%', us: '6.3K', ug: '-7%', tr: '25.7 Tỷ', tu: '76.4K', re: '16,955', url: 'https://shopee.vn/product/101480242/16794017668' },
      { n: 'Giấy In Nhiệt Tự Dính Dạng Tập 500 Tờ A6 100x150 A7 75x100', sc: 'all', br: 'Generic', ch: 'shopee', pr: '45.5K', fm: 'Combo', rv: '2.6 Tỷ', g: '-12%', us: '57.7K', ug: '-13%', tr: '29.2 Tỷ', tu: '622.8K', re: '17,032', url: 'https://shopee.vn/product/415458622/5084344482' },
      { n: 'XÃ KHO Băng Keo Băng Dính Trong Đục 4.8cm 200Yard 1.8kg cây', sc: 'all', br: 'Generic', ch: 'shopee', pr: '60K', fm: 'Combo', rv: '2.6 Tỷ', g: '+58%', us: '38.3K', ug: '+1%', tr: '21.0 Tỷ', tu: '478.5K', re: '30,564', url: 'https://shopee.vn/product/242520587/18320575698' },
      { n: 'Combo 10 ream giấy A4 Thiên Long IK Copy 70 80gsm - Thùng giấy', sc: 'all', br: 'IK Copy', ch: 'shopee', pr: '835K', fm: 'Combo', rv: '2.3 Tỷ', g: '+59%', us: '2.9K', ug: '+39%', tr: '6.8 Tỷ', tu: '9.7K', re: '1,984', url: 'https://shopee.vn/product/368671137/23940020482' },
      { n: 'Combo 20 tệp giấy in nhiệt A6 100x150 500 tờ tự dính in vận đơn', sc: 'all', br: 'Generic', ch: 'shopee', pr: '1.4M', fm: 'Combo', rv: '2.1 Tỷ', g: '+6%', us: '1.6K', ug: '-1%', tr: '9.4 Tỷ', tu: '8.6K', re: '813', url: 'https://shopee.vn/product/122616467/22143549219' },
      { n: 'THÙNG 50 CUỘN K80X80 - GIẤY IN BILL K80X80', sc: 'all', br: 'Generic', ch: 'shopee', pr: '540K', fm: 'Combo', rv: '1.6 Tỷ', g: '+208%', us: '2.9K', ug: '+204%', tr: '3.0 Tỷ', tu: '5.5K', re: '522', url: 'https://shopee.vn/product/264150416/26012930758' },
      { n: 'File Lá Đựng Tài Liệu A4 Túi Bia Đựng Hồ Sơ 30 40 60 Lá Lưu Giữ', sc: 'all', br: 'Generic', ch: 'tiktok', pr: '33.6K', fm: 'Combo', rv: '1.5 Tỷ', g: '+886%', us: '49.6K', ug: '+884%', tr: '2.2 Tỷ', tu: '72.6K', re: '3,979', url: 'https://www.tiktok.com/view/product/1731643251315148754' },
      { n: 'Chuột máy tính gaming SIDOTECH INPHIC B1 có app hỗ trợ', sc: 'all', br: 'Sidotech', ch: 'tiktok', pr: '173.7K', fm: 'Single', rv: '1.5 Tỷ', g: '-4%', us: '9.1K', ug: '-3%', tr: '10.3 Tỷ', tu: '84.6K', re: '7,316', url: 'https://www.tiktok.com/view/product/1729644961478707665' },
      { n: 'THÙNG 50 CUỘN Giấy In bill K80x80 Giấy In Hóa Đơn K80x80', sc: 'all', br: 'Generic', ch: 'shopee', pr: '650K', fm: 'Combo', rv: '1.2 Tỷ', g: '-38%', us: '2.0K', ug: '-44%', tr: '6.5 Tỷ', tu: '11.3K', re: '1,102', url: 'https://shopee.vn/product/264150416/22231715268' }
    ],
    sdata: {
      long_bang: {
        kpi: [{ l: 'Gross Sales (VND)', v: '4.1', u: 'Tỷ', g: '+37%', sub: 'vs 3 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '124.7', u: 'Nghìn', g: '-43%', sub: 'vs 220 nghìn in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '11.2%', u: '', g: '+1.3pp', sub: 'vs 9.9% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '0.65', u: 'Nghìn', g: '-15%', sub: 'vs 0.77 nghìn in Q2 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '4.1', u: 'Tỷ', g: '+37%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~37.8%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '11.2%', u: '', g: '+1.3pp', sub: 'vs 9.9% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Thiên Long (43.9%)', u: '', g: '', sub: '7/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 3.6, pre: 2.59, c: '#f97316' }, { n: 'TikTok Shop', cur: 0.46, pre: 0.3, c: '#0f172a' }, { n: 'Lazada', cur: 0.06, pre: 0.14, c: '#3b82f6' }],
        brand: [{ n: 'Thiên Long', cur: 43.9, pre: 57.13, c: '#1a56db' }, { n: 'Deli', cur: 19.85, pre: 10.9, c: '#ef4444' }, { n: 'Flexoffice', cur: 1.57, pre: 1.6, c: '#8b5cf6' }, { n: 'Thiên An', cur: 1.26, pre: 0.93, c: '#8b5cf6' }, { n: 'Artline', cur: 0.97, pre: 0.83, c: '#8b5cf6' }, { n: 'Others', cur: 32.44, pre: 28.6, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.22, l: 0, t: 0 }, { r: '10K-30K', s: 0.77, l: 0, t: 0 }, { r: '30K-50K', s: 0.78, l: 0, t: 0 }, { r: '50K-75K', s: 0.64, l: 0, t: 0 }, { r: '75K-100K', s: 0.97, l: 0, t: 0 }, { r: '100K-150K', s: 0.24, l: 0, t: 0 }, { r: '150K-200K', s: 0.05, l: 0, t: 0 }, { r: '200K-350K', s: 0.11, l: 0, t: 0 }, { r: '350K-500K', s: 0.05, l: 0, t: 0 }, { r: '500K-750K', s: 0.02, l: 0, t: 0 }, { r: '750K-1M', s: 0.04, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.05, l: 0, t: 0 }, { r: '1.5M-2M', s: 0.13, l: 0, t: 0 }, { r: '2M-3.5M', s: 0.06, l: 0, t: 0 }, { r: '3.5M-5M', s: 0, l: 0, t: 0 }, { r: '5M-7.5M', s: 0, l: 0, t: 0 }, { r: '7.5M-10M', s: 0, l: 0, t: 0 }, { r: '10M-15M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Combo Bút lông bảng Thiên Long WB-03 - Bút viết bảng xoá được', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '90K', fm: 'Combo', rv: '349.2 Tr', g: '+5%', us: '4.2K', ug: '-6%', tr: '1.6 Tỷ', tu: '21.1K', re: '2,302', url: 'https://shopee.vn/product/368671137/5576960676' },
          { n: 'TẶNG KÈM PHỤ KIỆN Bảng Từ Trắng Dán Tường Deli - Hút Nam Châm', sc: 'long_bang', br: 'Deli', ch: 'shopee', pr: '88K', fm: 'Single', rv: '324.9 Tr', g: '+40%', us: '2.5K', ug: '+5%', tr: '1.0 Tỷ', tu: '9.9K', re: '1,261', url: 'https://shopee.vn/product/127805122/41858697411' },
          { n: 'Combo 5 10 20 Bút lông bảng Thiên Long WB-03 mực Xanh Đỏ Đen', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '58.5K', fm: 'Combo', rv: '207.8 Tr', g: '-20%', us: '5.4K', ug: '-13%', tr: '1.3 Tỷ', tu: '33.3K', re: '4,893', url: 'https://shopee.vn/product/101480242/23576151446' },
          { n: 'Combo 5 10 20 Bút lông bảng Thiên Long WB-03 - Bút dạ viết bảng', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '39.9K', fm: 'Combo', rv: '173.5 Tr', g: '+10%', us: '4.3K', ug: '+13%', tr: '2.7 Tỷ', tu: '50.4K', re: '5,757', url: 'https://shopee.vn/product/367619913/15326547530' },
          { n: 'Bút lông bảng Hoshi Thiên Long WB-025 HS - Công nghệ Nhật Bản', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '14.3K', fm: 'Single', rv: '101.6 Tr', g: '+11%', us: '6.2K', ug: '+41%', tr: '371.3 Tr', tu: '17.8K', re: '1,302', url: 'https://shopee.vn/product/367619913/55600034017' },
          { n: 'Bút lông bảng Hoshi Thiên Long WB-025 HS - Công nghệ Nhật Bản', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '14.3K', fm: 'Single', rv: '99.0 Tr', g: '-42%', us: '7.7K', ug: '-40%', tr: '937.9 Tr', tu: '71.7K', re: '7,096', url: 'https://shopee.vn/product/101480242/29970555826' },
          { n: 'TẶNG HỘP 10 BÚT LÔNG Bảng Flipchart Hai Mặt Deli Bảng Viết Bút', sc: 'long_bang', br: 'Deli', ch: 'shopee', pr: '2M', fm: 'Combo', rv: '83.8 Tr', g: '+18%', us: '0.0K', ug: '+9%', tr: '181.5 Tr', tu: '0.1K', re: '15', url: 'https://shopee.vn/product/348955539/57152225116' },
          { n: 'Combo 10 Bút lông bảng Thiên Long WB-03 đầu bút viết êm trơn', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '90K', fm: 'Combo', rv: '77.7 Tr', g: '+24%', us: '0.9K', ug: '+38%', tr: '514.9 Tr', tu: '34.2K', re: '3,718', url: 'https://shopee.vn/product/367619913/13364398128' },
          { n: 'Combo Bút lông bảng Thiên Long WB-02 viết bảng trắng nhỏ phù hợp', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '42.6K', fm: 'Combo', rv: '68.6 Tr', g: '+111%', us: '2.0K', ug: '+100%', tr: '166.3 Tr', tu: '5.3K', re: '802', url: 'https://shopee.vn/product/368671137/25701822513' },
          { n: 'Combo 5 10 20 Bút Lông Bảng Xóa Được DELI Thêm Mực Đầu Bút', sc: 'long_bang', br: 'Deli', ch: 'shopee', pr: '45K', fm: 'Combo', rv: '65.7 Tr', g: '+33%', us: '1.3K', ug: '+18%', tr: '434.1 Tr', tu: '12.9K', re: '1,610', url: 'https://shopee.vn/product/127805122/25724132256' }
        ]
      },
      long_dau: {
        kpi: [{ l: 'Gross Sales (VND)', v: '6.2', u: 'Tỷ', g: '+29%', sub: 'vs 4.8 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '173.1', u: 'Nghìn', g: '-38%', sub: 'vs 279.9 nghìn in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '45.3%', u: '', g: '+7.7pp', sub: 'vs 37.6% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.1', u: 'Nghìn', g: '-8%', sub: 'vs 1.2 nghìn in Q2 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '6.2', u: 'Tỷ', g: '+29%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~25.7%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '45.3%', u: '', g: '+7.7pp', sub: 'vs 37.6% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Thiên Long (25.8%)', u: '', g: '', sub: '6/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 3.3, pre: 2.85, c: '#f97316' }, { n: 'TikTok Shop', cur: 2.8, pre: 1.8, c: '#0f172a' }, { n: 'Lazada', cur: 0.08, pre: 0.14, c: '#3b82f6' }],
        brand: [{ n: 'Thiên Long', cur: 25.81, pre: 28.98, c: '#1a56db' }, { n: 'Leyue', cur: 5.84, pre: 0, c: '#3b82f6' }, { n: 'But Viet', cur: 4.14, pre: 0, c: '#f97316' }, { n: 'But', cur: 2.65, pre: 0, c: '#f59e0b' }, { n: 'G-Star', cur: 2.42, pre: 3.4, c: '#10b981' }, { n: 'Others', cur: 59.15, pre: 67.62, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.22, l: 0, t: 0 }, { r: '10K-30K', s: 0.99, l: 0, t: 0 }, { r: '30K-50K', s: 1.24, l: 0, t: 0 }, { r: '50K-75K', s: 2.45, l: 0, t: 0 }, { r: '75K-100K', s: 0.18, l: 0, t: 0 }, { r: '100K-150K', s: 0.89, l: 0, t: 0 }, { r: '150K-200K', s: 0.15, l: 0, t: 0 }, { r: '200K-350K', s: 0.07, l: 0, t: 0 }, { r: '350K-500K', s: 0.01, l: 0, t: 0 }, { r: '500K-750K', s: 0, l: 0, t: 0 }, { r: '750K-1M', s: 0, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.01, l: 0, t: 0 }, { r: '1.5M-2M', s: 0, l: 0, t: 0 }, { r: '2M-3.5M', s: 0, l: 0, t: 0 }, { r: '3.5M-5M', s: 0, l: 0, t: 0 }, { r: '5M-7.5M', s: 0, l: 0, t: 0 }, { r: '7.5M-10M', s: 0, l: 0, t: 0 }, { r: '10M-15M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Combo 10 cây bút lông dầu màu trắng không xóa được khô nhanh bền màu', sc: 'long_dau', br: 'Generic', ch: 'tiktok', pr: '64.2K', fm: 'Combo', rv: '297.7 Tr', g: '-45%', us: '4.7K', ug: '-37%', tr: '839.8 Tr', tu: '12.4K', re: '448', url: 'https://www.tiktok.com/view/product/1733890170414531648' },
          { n: 'Combo 50-30 Bút Lông Dầu TL Dầu Kim Đủ 3 Màu Xanh Đỏ Đen', sc: 'long_dau', br: 'Thiên Long', ch: 'tiktok', pr: '56.1K', fm: 'Combo', rv: '224.1 Tr', g: '0%', us: '4.4K', ug: '0%', tr: '233.6 Tr', tu: '4.6K', re: '212', url: 'https://www.tiktok.com/view/product/1734690032513157018' },
          { n: 'Combo Bút lông dầu Thiên Long 2 đầu PM-04 - Bút lông dầu bấm', sc: 'long_dau', br: 'Thiên Long', ch: 'shopee', pr: '108K', fm: 'Combo', rv: '185.4 Tr', g: '+71%', us: '1.8K', ug: '+71%', tr: '1.4 Tỷ', tu: '15.9K', re: '1,540', url: 'https://shopee.vn/product/368671137/13249566333' },
          { n: 'Combo 5 10 20 Bút lông dầu 2 đầu Thiên Long PM-09 mực đạt tiêu chuẩn', sc: 'long_dau', br: 'Thiên Long', ch: 'shopee', pr: '51K', fm: 'Combo', rv: '169.2 Tr', g: '-32%', us: '3.2K', ug: '-27%', tr: '1.1 Tỷ', tu: '21.2K', re: '2,767', url: 'https://shopee.vn/product/101480242/22050668198' },
          { n: 'COMBO 10 Bút đánh dầu màu trắng đa năng không xóa được bền màu', sc: 'long_dau', br: 'Generic', ch: 'tiktok', pr: '60.8K', fm: 'Combo', rv: '154.8 Tr', g: '+114%', us: '2.3K', ug: '+149%', tr: '230.1 Tr', tu: '3.3K', re: '126', url: 'https://www.tiktok.com/view/product/1733864467857114598' },
          { n: 'Combo 5 10 20 Bút lông dầu 2 đầu Thiên Long PM-04 bám dính', sc: 'long_dau', br: 'Thiên Long', ch: 'shopee', pr: '59K', fm: 'Combo', rv: '119.4 Tr', g: '-68%', us: '2.3K', ug: '-67%', tr: '1.6 Tỷ', tu: '33.0K', re: '4,662', url: 'https://shopee.vn/product/101480242/23576151442' },
          { n: 'Hộp 12 Cây Bút Lông Dầu Kim 2 Đầu Gstar CD-01 Xanh Đỏ Đen', sc: 'long_dau', br: 'G-Star', ch: 'shopee', pr: '67K', fm: 'Combo', rv: '116.6 Tr', g: '+650%', us: '1.7K', ug: '+634%', tr: '137.7 Tr', tu: '2.1K', re: '199', url: 'https://shopee.vn/product/81243419/24816146246' },
          { n: 'Combo 10 Bút lông dầu Thiên Long PM-04 gồm đầu lớn 1.0mm', sc: 'long_dau', br: 'Thiên Long', ch: 'shopee', pr: '108K', fm: 'Combo', rv: '110.4 Tr', g: '+1947%', us: '1.1K', ug: '+1969%', tr: '249.9 Tr', tu: '10.0K', re: '808', url: 'https://shopee.vn/product/367619913/3380058526' },
          { n: 'Combo 10 Bút lông dầu 2 đầu Thiên Long PM-09 mực đạt tiêu chuẩn', sc: 'long_dau', br: 'Thiên Long', ch: 'shopee', pr: '49K', fm: 'Combo', rv: '109.9 Tr', g: '+124%', us: '2.3K', ug: '+119%', tr: '158.8 Tr', tu: '3.3K', re: '275', url: 'https://shopee.vn/product/1473624456/49954744615' },
          { n: 'Combo 3 hộp 30 chiếc bút lông đầu kim', sc: 'long_dau', br: 'Generic', ch: 'tiktok', pr: '159.3K', fm: 'Combo', rv: '103.0 Tr', g: '-29%', us: '0.7K', ug: '-45%', tr: '3.0 Tỷ', tu: '36.2K', re: '1,683', url: 'https://www.tiktok.com/view/product/1730844958738057785' }
        ]
      },
      xoa_nuoc: {
        kpi: [{ l: 'Gross Sales (VND)', v: '0.98', u: 'Tỷ', g: '+72%', sub: 'vs 0.57 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '40.2', u: 'Nghìn', g: '-3%', sub: 'vs 41.6 nghìn in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '24.5%', u: '', g: '+3.8pp', sub: 'vs 20.7% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '0.31', u: 'Nghìn', g: '-16%', sub: 'vs 0.36 nghìn in Q2 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '0.98', u: 'Tỷ', g: '+72%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~58.7%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '24.5%', u: '', g: '+3.8pp', sub: 'vs 20.7% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Thiên Long (36.1%)', u: '', g: '', sub: '5/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 0.72, pre: 0.43, c: '#f97316' }, { n: 'TikTok Shop', cur: 0.24, pre: 0.12, c: '#0f172a' }, { n: 'Lazada', cur: 0.02, pre: 0.03, c: '#3b82f6' }],
        brand: [{ n: 'Thiên Long', cur: 36.15, pre: 46.24, c: '#1a56db' }, { n: 'Deli', cur: 9.58, pre: 6.82, c: '#ef4444' }, { n: 'Besta', cur: 4.57, pre: 1.09, c: '#10b981' }, { n: 'King', cur: 3.56, pre: 4.73, c: '#f59e0b' }, { n: 'G-Star', cur: 1.67, pre: 2.3, c: '#10b981' }, { n: 'Others', cur: 44.47, pre: 38.82, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.02, l: 0, t: 0 }, { r: '10K-30K', s: 0.51, l: 0, t: 0 }, { r: '30K-50K', s: 0.03, l: 0, t: 0 }, { r: '50K-75K', s: 0.24, l: 0, t: 0 }, { r: '75K-100K', s: 0.08, l: 0, t: 0 }, { r: '100K-150K', s: 0.08, l: 0, t: 0 }, { r: '150K-200K', s: 0.01, l: 0, t: 0 }, { r: '200K-350K', s: 0.02, l: 0, t: 0 }, { r: '350K-500K', s: 0, l: 0, t: 0 }, { r: '500K-750K', s: 0, l: 0, t: 0 }, { r: '750K-1M', s: 0, l: 0, t: 0 }, { r: '1M-1.5M', s: 0, l: 0, t: 0 }, { r: '1.5M-2M', s: 0, l: 0, t: 0 }, { r: '2M-3.5M', s: 0, l: 0, t: 0 }, { r: '3.5M-5M', s: 0, l: 0, t: 0 }, { r: '5M-7.5M', s: 0, l: 0, t: 0 }, { r: '7.5M-10M', s: 0, l: 0, t: 0 }, { r: '10M-15M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Bút xóa nước 12ml Thiên Long CP-02 - Viết xóa sạch nhanh khô', sc: 'xoa_nuoc', br: 'Thiên Long', ch: 'shopee', pr: '27.4K', fm: 'Single', rv: '245.0 Tr', g: '-4%', us: '9.8K', ug: '-5%', tr: '2.0 Tỷ', tu: '88.9K', re: '8,626', url: 'https://shopee.vn/product/101480242/1635050758' },
          { n: 'Hộp 10 Bút Xóa Nước Thiên Long 12ml Xóa Sạch Nhanh Khô', sc: 'xoa_nuoc', br: 'Thiên Long', ch: 'tiktok', pr: '58.2K', fm: 'Combo', rv: '57.1 Tr', g: '+7880%', us: '0.9K', ug: '+7146%', tr: '59.0 Tr', tu: '1.0K', re: '52', url: 'https://www.tiktok.com/view/product/1734726564517742586' },
          { n: 'Bút Xóa Nước 12ml Besta CP-01 Đầu Bút Bằng Thép Siêu Bền', sc: 'xoa_nuoc', br: 'Besta', ch: 'shopee', pr: '11.8K', fm: 'Single', rv: '44.7 Tr', g: '+14%', us: '4.8K', ug: '+9%', tr: '137.6 Tr', tu: '14.8K', re: '2,865', url: 'https://shopee.vn/product/946543924/18389263613' },
          { n: 'DEAL 9K Bút Xóa Nước 12ml Deli Bút Xóa Sạch Nhanh Khô An Toàn', sc: 'xoa_nuoc', br: 'Deli', ch: 'shopee', pr: '12K', fm: 'Single', rv: '44.0 Tr', g: '+100%', us: '3.7K', ug: '+85%', tr: '317.3 Tr', tu: '29.4K', re: '6,716', url: 'https://shopee.vn/product/127805122/2093863777' },
          { n: 'Bút Xóa Nước Rẻ CP08 16ml 1 Hộp 12 Cây', sc: 'xoa_nuoc', br: 'Generic', ch: 'shopee', pr: '61K', fm: 'Combo', rv: '43.8 Tr', g: '+91%', us: '0.7K', ug: '+89%', tr: '326.3 Tr', tu: '8.3K', re: '1,496', url: 'https://shopee.vn/product/204094877/17481153691' },
          { n: 'Bút xóa nước 12ml Thiên Long Combo 5 10 bút xóa sạch nhanh', sc: 'xoa_nuoc', br: 'Thiên Long', ch: 'shopee', pr: '50K', fm: 'Combo', rv: '36.7 Tr', g: '+92%', us: '0.7K', ug: '+66%', tr: '106.4 Tr', tu: '2.6K', re: '571', url: 'https://shopee.vn/product/1331588213/25735179077' },
          { n: 'Sỉ KING CP09 Hộp 12 Cây Bút Xóa Nước Viết Xóa Nước KING CP-09', sc: 'xoa_nuoc', br: 'King', ch: 'tiktok', pr: '81.5K', fm: 'Combo', rv: '32.7 Tr', g: '+221%', us: '0.4K', ug: '+221%', tr: '99.5 Tr', tu: '1.8K', re: '145', url: 'https://www.tiktok.com/view/product/1730603732733168603' },
          { n: '10 Bút Xóa Nước Thiên Long Nhanh Khô Đánh Siêu Sạch Dùng Cho Học Sinh', sc: 'xoa_nuoc', br: 'Thiên Long', ch: 'shopee', pr: '140K', fm: 'Combo', rv: '32.2 Tr', g: '+14%', us: '0.4K', ug: '-1%', tr: '69.0 Tr', tu: '0.8K', re: '64', url: 'https://shopee.vn/product/1473624456/45152286579' },
          { n: '12 Cây Bút Xóa Nước Rẻ 16ml', sc: 'xoa_nuoc', br: 'Generic', ch: 'shopee', pr: '65K', fm: 'Combo', rv: '19.2 Tr', g: '+93%', us: '0.3K', ug: '+108%', tr: '48.9 Tr', tu: '0.8K', re: '142', url: 'https://shopee.vn/product/34880242/26708927554' },
          { n: 'SALE Bút Xóa CP-02 Hộp 10 Bút Xóa Thiên Long CP-02', sc: 'xoa_nuoc', br: 'Thiên Long', ch: 'tiktok', pr: '109.9K', fm: 'Combo', rv: '18.4 Tr', g: '0%', us: '0.2K', ug: '0%', tr: '19.0 Tr', tu: '0.2K', re: '5', url: 'https://www.tiktok.com/view/product/1735227104992986787' }
        ]
      },
      file_folder: {
        kpi: [{ l: 'Gross Sales (VND)', v: '12.5', u: 'Tỷ', g: '+42%', sub: 'vs 8.8 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '343.9', u: 'Nghìn', g: '-19%', sub: 'vs 426.3 nghìn in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '22.3%', u: '', g: '+7.2pp', sub: 'vs 15.1% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.4', u: 'Nghìn', g: '0%', sub: 'vs 1.4 nghìn in Q2 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '12.5', u: 'Tỷ', g: '+42%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~19.4%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '22.3%', u: '', g: '+7.2pp', sub: 'vs 15.1% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (12%)', u: '', g: '', sub: '2/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 9.6, pre: 7.16, c: '#f97316' }, { n: 'TikTok Shop', cur: 2.8, pre: 1.32, c: '#0f172a' }, { n: 'Lazada', cur: 0.13, pre: 0.25, c: '#3b82f6' }],
        brand: [{ n: 'Deli', cur: 12, pre: 16.72, c: '#ef4444' }, { n: 'Flexoffice', cur: 3.87, pre: 4.69, c: '#8b5cf6' }, { n: 'Knote', cur: 2.2, pre: 0, c: '#10b981' }, { n: 'Plus', cur: 1.74, pre: 2.91, c: '#8b5cf6' }, { n: 'Qpenz', cur: 1.58, pre: 0, c: '#3b82f6' }, { n: 'Others', cur: 78.62, pre: 75.68, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.07, l: 0, t: 0 }, { r: '10K-30K', s: 2.52, l: 0, t: 0 }, { r: '30K-50K', s: 4.78, l: 0, t: 0 }, { r: '50K-75K', s: 2.99, l: 0, t: 0 }, { r: '75K-100K', s: 0.81, l: 0, t: 0 }, { r: '100K-150K', s: 0.54, l: 0, t: 0 }, { r: '150K-200K', s: 0.47, l: 0, t: 0 }, { r: '200K-350K', s: 0.17, l: 0, t: 0 }, { r: '350K-500K', s: 0.09, l: 0, t: 0 }, { r: '500K-750K', s: 0.02, l: 0, t: 0 }, { r: '750K-1M', s: 0.02, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.04, l: 0, t: 0 }, { r: '1.5M-2M', s: 0, l: 0, t: 0 }, { r: '2M-3.5M', s: 0, l: 0, t: 0 }, { r: '3.5M-5M', s: 0, l: 0, t: 0 }, { r: '5M-7.5M', s: 0, l: 0, t: 0 }, { r: '7.5M-10M', s: 0, l: 0, t: 0 }, { r: '10M-15M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'TẶNG STICKER File Lá Đa Năng - Số Đa Năng Lưu Giữ Đề Thi Hình', sc: 'file_folder', br: 'Deli', ch: 'tiktok', pr: '54.4K', fm: 'Combo', rv: '830.3 Tr', g: '-2%', us: '19.9K', ug: '0%', tr: '8.4 Tỷ', tu: '238.2K', re: '16,189', url: 'https://www.tiktok.com/view/product/1729454663877888639' },
          { n: 'Bia Lá File A4 30 60 Lá Dày Dặn Cao Cấp - File Nhựa Lưu Trữ Tài Liệu', sc: 'file_folder', br: 'Generic', ch: 'shopee', pr: '30.4K', fm: 'Combo', rv: '286.1 Tr', g: '+5348%', us: '10.0K', ug: '+5008%', tr: '293.1 Tr', tu: '10.2K', re: '1,614', url: 'https://shopee.vn/product/1566396955/43460734274' },
          { n: 'File lá đựng tài liệu A4 KNOTE túi bia hồ sơ 100 lá siêu tiết kiệm', sc: 'file_folder', br: 'Knote', ch: 'shopee', pr: '59K', fm: 'Combo', rv: '268.8 Tr', g: '+53%', us: '4.6K', ug: '+54%', tr: '1.2 Tỷ', tu: '22.7K', re: '2,787', url: 'https://shopee.vn/product/1426030880/26172006082' },
          { n: 'Tập 100 túi đựng tài liệu A4 So mi lỗ đựng tài liệu chống nước', sc: 'file_folder', br: 'Generic', ch: 'shopee', pr: '47.7K', fm: 'Combo', rv: '198.2 Tr', g: '+43%', us: '4.4K', ug: '+27%', tr: '888.0 Tr', tu: '24.3K', re: '2,566', url: 'https://shopee.vn/product/38778987/1909033407' },
          { n: 'Túi đựng hồ sơ khổ A4 túi đựng hồ sơ hoạt hình 30 60 trang bảo vệ', sc: 'file_folder', br: 'Generic', ch: 'tiktok', pr: '60.9K', fm: 'Combo', rv: '192.9 Tr', g: '+17%', us: '3.5K', ug: '-13%', tr: '418.7 Tr', tu: '9.4K', re: '549', url: 'https://www.tiktok.com/view/product/1732263026713461931' },
          { n: 'Bia Lá File A4 30 60 Lá Dày Dặn Cao Cấp - File Nhựa MTK31', sc: 'file_folder', br: 'Generic', ch: 'shopee', pr: '34.6K', fm: 'Combo', rv: '140.7 Tr', g: '+1600%', us: '4.0K', ug: '+1496%', tr: '158.9 Tr', tu: '4.5K', re: '238', url: 'https://shopee.vn/product/38778987/1609419730' },
          { n: 'Xấp 100 bia lá A4 Plus', sc: 'file_folder', br: 'Plus', ch: 'tiktok', pr: '167.6K', fm: 'Combo', rv: '138.2 Tr', g: '+45%', us: '0.8K', ug: '+39%', tr: '950.0 Tr', tu: '6.4K', re: '813', url: 'https://www.tiktok.com/view/product/1732100478984553712' },
          { n: 'File lá đựng tài liệu A4 QPENZ túi bia hồ sơ 100 lá siêu tiết kiệm', sc: 'file_folder', br: 'Qpenz', ch: 'shopee', pr: '86.4K', fm: 'Combo', rv: '132.4 Tr', g: '+28%', us: '1.6K', ug: '+25%', tr: '349.5 Tr', tu: '4.2K', re: '210', url: 'https://shopee.vn/product/14668875/4934838718' },
          { n: 'M.Y Túi Đựng Tài Liệu A4 5 8 12 Ngăn - Cặp Hồ Sơ Nhiều Ngăn', sc: 'file_folder', br: 'M.Y Stationery', ch: 'tiktok', pr: '29K', fm: 'Combo', rv: '122.1 Tr', g: '+30%', us: '5.2K', ug: '+23%', tr: '345.0 Tr', tu: '14.0K', re: '2,763', url: 'https://www.tiktok.com/view/product/1732643968477464269' },
          { n: 'File Tài Liệu File Lá 20 30 40 Túi Đựng Tài Liệu Màu Pastel Học Sinh', sc: 'file_folder', br: 'Deli', ch: 'shopee', pr: '29K', fm: 'Combo', rv: '118.3 Tr', g: '+30%', us: '4.3K', ug: '+18%', tr: '3.3 Tỷ', tu: '98.1K', re: '19,790', url: 'https://shopee.vn/product/1451947204/40606966998' }
        ]
      },
      giay_copy: {
        kpi: [{ l: 'Gross Sales (VND)', v: '36', u: 'Tỷ', g: '+32%', sub: 'vs 27.2 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '197.6', u: 'Nghìn', g: '0%', sub: 'vs 198.1 nghìn in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '7%', u: '', g: '-5.6pp', sub: 'vs 12.6% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '0.76', u: 'Nghìn', g: '+1%', sub: 'vs 0.74 nghìn in Q2 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '36', u: 'Tỷ', g: '+32%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~41.7%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '7%', u: '', g: '-5.6pp', sub: 'vs 12.6% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'IK Copy (39.4%)', u: '', g: '', sub: '6/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 33.2, pre: 23.22, c: '#f97316' }, { n: 'TikTok Shop', cur: 2.5, pre: 3.43, c: '#0f172a' }, { n: 'Lazada', cur: 0.24, pre: 0.48, c: '#3b82f6' }],
        brand: [{ n: 'IK Copy', cur: 39.44, pre: 42.79, c: '#8b5cf6' }, { n: 'Deli', cur: 12.78, pre: 3.54, c: '#ef4444' }, { n: 'Thiên Long', cur: 10.56, pre: 19.68, c: '#1a56db' }, { n: 'IK Plus', cur: 7.22, pre: 3.28, c: '#f97316' }, { n: 'Paper One', cur: 5.28, pre: 4.66, c: '#10b981' }, { n: 'Others', cur: 24.72, pre: 26.06, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.01, l: 0, t: 0 }, { r: '10K-30K', s: 0.31, l: 0, t: 0 }, { r: '30K-50K', s: 1, l: 0, t: 0 }, { r: '50K-75K', s: 0.95, l: 0, t: 0 }, { r: '75K-100K', s: 5.16, l: 0, t: 0 }, { r: '100K-150K', s: 2.08, l: 0, t: 0 }, { r: '150K-200K', s: 0.33, l: 0, t: 0 }, { r: '200K-350K', s: 2.63, l: 0, t: 0 }, { r: '350K-500K', s: 13.35, l: 0, t: 0 }, { r: '500K-750K', s: 1.91, l: 0, t: 0 }, { r: '750K-1M', s: 7.77, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.45, l: 0, t: 0 }, { r: '1.5M-2M', s: 0.02, l: 0, t: 0 }, { r: '2M-3.5M', s: 0, l: 0, t: 0 }, { r: '3.5M-5M', s: 0, l: 0, t: 0 }, { r: '5M-7.5M', s: 0, l: 0, t: 0 }, { r: '7.5M-10M', s: 0, l: 0, t: 0 }, { r: '10M-15M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: '10 ream Giấy in A4 70 gsm giấy A4 photo IK Copy Paper Thiên Long', sc: 'giay_copy', br: 'IK Copy', ch: 'shopee', pr: '932K', fm: 'Combo', rv: '3.2 Tỷ', g: '+82%', us: '3.8K', ug: '+64%', tr: '11.4 Tỷ', tu: '15.8K', re: '3,538', url: 'https://shopee.vn/product/101480242/10499808000' },
          { n: 'Combo 5 ream Giấy in A4 photo Thiên Long IK Copy 70 gsm đều màu', sc: 'giay_copy', br: 'IK Copy', ch: 'shopee', pr: '466K', fm: 'Combo', rv: '2.7 Tỷ', g: '+5%', us: '6.3K', ug: '-7%', tr: '25.7 Tỷ', tu: '76.4K', re: '16,955', url: 'https://shopee.vn/product/101480242/16794017668' },
          { n: 'Combo 10 ream giấy A4 Thiên Long IK Copy 70 80gsm - Thùng giấy', sc: 'giay_copy', br: 'IK Copy', ch: 'shopee', pr: '835K', fm: 'Combo', rv: '2.3 Tỷ', g: '+59%', us: '2.9K', ug: '+39%', tr: '6.8 Tỷ', tu: '9.7K', re: '1,984', url: 'https://shopee.vn/product/368671137/23940020482' },
          { n: 'COMBO 2 Thùng Giấy In A4 IK Plus Giấy Photo IK Plus 70gsm dày dặn', sc: 'giay_copy', br: 'IK Plus', ch: 'shopee', pr: '795K', fm: 'Combo', rv: '1.2 Tỷ', g: '+132%', us: '1.6K', ug: '+126%', tr: '2.0 Tỷ', tu: '2.8K', re: '593', url: 'https://shopee.vn/product/548229539/29180146841' },
          { n: 'Combo 5 ream Giấy A4 giấy photo IK Copy Copy Plus 70 80gsm', sc: 'giay_copy', br: 'IK Copy', ch: 'shopee', pr: '417K', fm: 'Combo', rv: '1.2 Tỷ', g: '+14%', us: '3.0K', ug: '+5%', tr: '10.1 Tỷ', tu: '30.7K', re: '6,962', url: 'https://shopee.vn/product/368671137/23228967167' },
          { n: 'Giấy A4 500 tờ IK Copy 70 gsm - Giấy in A4 Thiên Long nhập khẩu', sc: 'giay_copy', br: 'IK Copy', ch: 'shopee', pr: '93.2K', fm: 'Single', rv: '982.6 Tr', g: '+5%', us: '11.4K', ug: '-6%', tr: '8.9 Tỷ', tu: '128.6K', re: '20,770', url: 'https://shopee.vn/product/101480242/12922307639' },
          { n: 'VOUCHER LIVE 30K Thùng 5 10 Ream Giấy A4 Deli Giấy In Photo', sc: 'giay_copy', br: 'Deli', ch: 'shopee', pr: '445K', fm: 'Combo', rv: '920.5 Tr', g: '-30%', us: '2.4K', ug: '-36%', tr: '8.5 Tỷ', tu: '33.2K', re: '6,716', url: 'https://shopee.vn/product/127805122/29227911732' },
          { n: 'Combo 5 Ream Giấy In Giấy A4 70 gsm - Giấy Photo Copy Giá Tốt Deli', sc: 'giay_copy', br: 'Deli', ch: 'shopee', pr: '455K', fm: 'Combo', rv: '899.0 Tr', g: '-24%', us: '2.3K', ug: '-29%', tr: '5.5 Tỷ', tu: '20.7K', re: '3,927', url: 'https://shopee.vn/product/348955539/28678999911' },
          { n: 'Combo 5 ream giấy in A4 giấy photo 70 80gsm Thiên Long IK Copy', sc: 'giay_copy', br: 'IK Copy', ch: 'shopee', pr: '417.5K', fm: 'Combo', rv: '890.3 Tr', g: '-7%', us: '2.2K', ug: '-17%', tr: '10.7 Tỷ', tu: '32.7K', re: '8,119', url: 'https://shopee.vn/product/367619913/21772657261' },
          { n: 'Thùng 5 ream giấy in A4 PaperOne Copier 70 gsm', sc: 'giay_copy', br: 'Paper One', ch: 'shopee', pr: '435K', fm: 'Combo', rv: '729.9 Tr', g: '+24%', us: '1.8K', ug: '+22%', tr: '6.0 Tỷ', tu: '16.2K', re: '3,116', url: 'https://shopee.vn/product/483383841/10018451558' }
        ]
      },
      da_quang: {
        kpi: [{ l: 'Gross Sales (VND)', v: '4.2', u: 'Tỷ', g: '+35%', sub: 'vs 3.1 tỷ in Q2 2025', ic: 'blue' }, { l: 'Units Sold', v: '230.1', u: 'Nghìn', g: '-18%', sub: 'vs 282.1 nghìn in Q2 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '26%', u: '', g: '+10.7pp', sub: 'vs 15.3% in Q2 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.3', u: 'Nghìn', g: '-13%', sub: 'vs 1.5 nghìn in Q2 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '4.2', u: 'Tỷ', g: '+35%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~26.7%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '26%', u: '', g: '+10.7pp', sub: 'vs 15.3% in Q2 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (18.2%)', u: '', g: '', sub: '3/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 3.1, pre: 2.37, c: '#f97316' }, { n: 'TikTok Shop', cur: 1.1, pre: 0.47, c: '#0f172a' }, { n: 'Lazada', cur: 0.03, pre: 0.23, c: '#3b82f6' }],
        brand: [{ n: 'Deli', cur: 18.22, pre: 15.42, c: '#ef4444' }, { n: 'Thiên Long', cur: 8.49, pre: 8.1, c: '#1a56db' }, { n: 'Bossee', cur: 7.47, pre: 0, c: '#f97316' }, { n: 'Quaff', cur: 1.42, pre: 0, c: '#f97316' }, { n: 'Zebra', cur: 1.38, pre: 1.26, c: '#f59e0b' }, { n: 'Others', cur: 63.02, pre: 75.23, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.63, l: 0, t: 0 }, { r: '10K-30K', s: 1.6, l: 0, t: 0 }, { r: '30K-50K', s: 1, l: 0, t: 0 }, { r: '50K-75K', s: 0.45, l: 0, t: 0 }, { r: '75K-100K', s: 0.09, l: 0, t: 0 }, { r: '100K-150K', s: 0.18, l: 0, t: 0 }, { r: '150K-200K', s: 0.06, l: 0, t: 0 }, { r: '200K-350K', s: 0.01, l: 0, t: 0 }, { r: '350K-500K', s: 0.01, l: 0, t: 0 }, { r: '500K-750K', s: 0.22, l: 0, t: 0 }, { r: '750K-1M', s: 0, l: 0, t: 0 }, { r: '1M-1.5M', s: 0, l: 0, t: 0 }, { r: '1.5M-2M', s: 0, l: 0, t: 0 }, { r: '2M-3.5M', s: 0, l: 0, t: 0 }, { r: '3.5M-5M', s: 0, l: 0, t: 0 }, { r: '5M-7.5M', s: 0, l: 0, t: 0 }, { r: '7.5M-10M', s: 0, l: 0, t: 0 }, { r: '10M-15M', s: 0, l: 0, t: 0 }],
        prod: [
          { n: 'Biến led huỳnh quang Biến led dạ quang 60x80cm 50x70cm 40x60cm', sc: 'da_quang', br: 'Điện Tử Định Tuấn', ch: 'shopee', pr: '530K', fm: 'Single', rv: '203.7 Tr', g: '+28%', us: '0.4K', ug: '+17%', tr: '904.4 Tr', tu: '3.8K', re: '588', url: 'https://shopee.vn/product/368864437/25967978891' },
          { n: 'Bút Highlight Bút Đánh Dấu Dạ Quang Pastel Đủ 6 Màu - Bút Nhớ TakeNote', sc: 'da_quang', br: 'Bossee', ch: 'tiktok', pr: '31.8K', fm: 'Combo', rv: '180.5 Tr', g: '-16%', us: '5.6K', ug: '-16%', tr: '651.2 Tr', tu: '21.5K', re: '1,661', url: 'https://www.tiktok.com/view/product/1732230778223233811' },
          { n: 'Bút Nhũ Kim Tuyến Lấp Lánh 12 Màu - Bút Highlight Đánh Dấu Sáng Tạo', sc: 'da_quang', br: 'Thiên Thành', ch: 'tiktok', pr: '17.8K', fm: 'Combo', rv: '143.2 Tr', g: '+20%', us: '6.0K', ug: '+173%', tr: '283.7 Tr', tu: '8.7K', re: '543', url: 'https://www.tiktok.com/view/product/1733191836290548787' },
          { n: 'FULL MÀU Bút Highlight Bút Nhớ Dòng Đánh Dấu Dạ Quang TakeNote', sc: 'da_quang', br: 'Deli', ch: 'shopee', pr: '9K', fm: 'Single', rv: '129.9 Tr', g: '+66%', us: '17.5K', ug: '+85%', tr: '861.1 Tr', tu: '133.9K', re: '12,891', url: 'https://shopee.vn/product/348955539/9286931469' },
          { n: 'Set 5 Bút Highlight 2 Đầu M.Y - Viết Êm Tay Dành Cho Học Sinh', sc: 'da_quang', br: 'M.Y', ch: 'tiktok', pr: '38.8K', fm: 'Combo', rv: '115.8 Tr', g: '+118%', us: '3.3K', ug: '+90%', tr: '178.5 Tr', tu: '5.4K', re: '310', url: 'https://www.tiktok.com/view/product/1732952252567618858' },
          { n: 'Bút highlight đánh dầu màu macaron Deli - Bút dạ quang đánh dấu', sc: 'da_quang', br: 'Deli', ch: 'shopee', pr: '10K', fm: 'Single', rv: '88.6 Tr', g: '+120%', us: '10.3K', ug: '+110%', tr: '322.4 Tr', tu: '45.9K', re: '5,175', url: 'https://shopee.vn/product/127805122/24568758870' },
          { n: 'Bút đánh dấu highlight dạ quang 18 màu lựa chọn', sc: 'da_quang', br: 'KugoMall', ch: 'shopee', pr: '7.8K', fm: 'Combo', rv: '78.6 Tr', g: '+115%', us: '12.8K', ug: '+110%', tr: '2.8 Tỷ', tu: '549.6K', re: '61,290', url: 'https://shopee.vn/product/513961787/11730839899' },
          { n: 'Bút highlight Deli 25 màu đánh dấu nhỏ dòng dạ quang Deli', sc: 'da_quang', br: 'Deli', ch: 'shopee', pr: '5K', fm: 'Single', rv: '76.1 Tr', g: '-2%', us: '10.4K', ug: '+11%', tr: '1.2 Tỷ', tu: '212.1K', re: '28,214', url: 'https://shopee.vn/product/127805122/11115991321' },
          { n: 'Một bút dạ Highlight tặng một số tay linh kiện điện tử dành cho người học', sc: 'da_quang', br: 'Tiến Tools', ch: 'tiktok', pr: '149.7K', fm: 'Single', rv: '57.0 Tr', g: '+12%', us: '0.4K', ug: '+13%', tr: '252.7 Tr', tu: '2.0K', re: '184', url: 'https://www.tiktok.com/view/product/1731718202861782716' },
          { n: 'Bút Highlight Bút Đánh Dấu Dạ Quang Pastel Đủ 6 Màu - Bút Nhớ Học Sinh', sc: 'da_quang', br: 'Bossee', ch: 'shopee', pr: '28K', fm: 'Combo', rv: '49.8 Tr', g: '-13%', us: '1.7K', ug: '-11%', tr: '161.5 Tr', tu: '6.1K', re: '990', url: 'https://shopee.vn/product/1366221078/26317103425' }
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
  let shareCurSum = 0, sharePreSum = 0;
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
    
    // KPI 2: TikTok Market Share
    let curS = getVal(d.kpi[2].v);
    let preSMatch = String(d.kpi[2].sub).match(/[\d.]+/);
    let preS = preSMatch ? parseFloat(preSMatch[0]) : 0;
    shareCurSum += curG * curS;
    if (preS) sharePreSum += preG * preS;
    
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
  
  const tShrCur = (shareCurSum / totalCur).toFixed(1);
  const tShrPre = (sharePreSum / totalPre).toFixed(1);
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
    '3.5M-5M','5M-7.5M','7.5M-10M','10M-15M'
  ];
  let finalPrices = [];
  priceOrder.forEach(r => { if(priceMap[r]) finalPrices.push(priceMap[r]); });
  
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

/* ===== MONTHLY TREND DATA (Q2 2026 — Apr to Jun) =====
   rv = Gross Revenue (tỷ VND) | ts = TikTok Share (%) | pre_* = same month prev year
*/
var MONTHLY = [];

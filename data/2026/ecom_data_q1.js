/* ===== DATA Q1 2026 — SỐ GỐC =====
   File này chỉ chứa số gốc. Mọi format và chỉ số phái sinh do data/ecom_engine.js tính.
   Cấu trúc và nguồn từng trường: .claude/skills/update-ecom-from-raw/reference.md

   Đơn vị:
     gross, plat, brand, price : tỷ VND
     units, stores             : số lượng (sản phẩm, gian hàng)
     prod.pr, prod.rv, prod.tr : VND
     prod.us, prod.tu, prod.re : số lượng
     *.g, prod.g, prod.ug      : % tăng trưởng so với cùng kỳ (lấy từ Metric; null = không có)
   brand: [tên, doanh số kỳ này, doanh số cùng kỳ] — cùng kỳ null = Metric ghi N/A.
   Mỗi category bắt buộc có scope `all` (cấp category). Sub-category: key theo data/catalog.js.
*/
var ECOM_DATA = ECOM_DATA || {};

ECOM_DATA.q1 = {
  period: { cur: 'Q1 2026', pre: 'Q1 2025', label: 'Strategic Report Q1 2026' },

  /* Theo tháng (tỷ, %). [] nếu chưa có. */
  monthly: [
    { m: 'Jan', rv: 120.5, pre_rv: 95.2, ts: 40.1, pre_ts: 30.2 },
    { m: 'Feb', rv: 98.3, pre_rv: 78.5, ts: 41.3, pre_ts: 31.8 },
    { m: 'Mar', rv: 115.8, pre_rv: 89.4, ts: 43.8, pre_ts: 35.1 }
  ],

  cats: {
    but_viet: {
      all: {
        gross: { cur: 108.8, pre: 79.5, g: 37 },
        units: { cur: 3400000, pre: 6300000, g: -46 },
        stores: { cur: 5800, pre: 6400, g: -9 },
        plat: { shopee: [63.4, 52.8], tiktok: [43.8, 23.4], lazada: [1.5, 3.1] },
        brand: [['Thiên Long', 22.848, 11.925], ['Deli', 10.88, 7.95], ['G-Star', 2.176, 1.59], ['Bossee', 2.176, 1.59], ['Classmate', 1.088, 1.59]],
        price: { '< 10K': 5.37, '10K-30K': 26.88, '30K-50K': 24.74, '50K-75K': 18.4, '75K-100K': 17.24, '100K-150K': 5.88, '150K-200K': 2.72, '200K-350K': 2.84, '350K-500K': 1.88 },
        prod: [
          { n: 'Combo 5 10 20 Bút gel Fasgel GEL-068', br: 'Thiên Long', ch: 'tiktok', pr: 27000, fm: 'Combo 20', rv: 1300000000, g: 57, us: 42900, ug: 52, tr: 2200000000, tu: 71700, re: 5334, url: 'https://www.tiktok.com/view/product/1732616810831906809' },
          { n: 'Combo 5 10 20 Bút bi màu pastel PRO 027 Thiên Long TL-105', br: 'Thiên Long', ch: 'tiktok', pr: 36000, fm: 'Combo 20', rv: 1200000000, g: -43, us: 28900, ug: -58, tr: 4700000000, tu: 161800, re: 12918, url: 'https://www.tiktok.com/view/product/1729758198371814393' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long Pro 027 TL-105 - 3 màu mực thân bút pastel', br: 'Thiên Long', ch: 'shopee', pr: 30500, fm: 'Combo 20', rv: 899500000, g: -2, us: 29700, ug: -19, tr: 4100000000, tu: 156200, re: 31340, url: 'https://shopee.vn/product/101480242/21193760161' },
          { n: '10 bút tặng 20 ruột-COMBO bút gel xóa được', br: 'Thiên Long', ch: 'tiktok', pr: 86000, fm: 'Combo 10', rv: 834800000, g: -54, us: 9400, ug: -55, tr: 2900000000, tu: 33200, re: 2212, url: 'https://www.tiktok.com/view/product/1732466130837866215' },
          { n: 'Combo 5 10 20 Bút bi dầu màu pastel Deli EQ32', br: 'Deli', ch: 'tiktok', pr: 30000, fm: 'Combo 20', rv: 815200000, g: null, us: 23900, ug: null, tr: 931100000, tu: 27800, re: 1035, url: 'https://www.tiktok.com/view/product/1733976532781139583' },
          { n: 'Combo 5 10 20 Bút Gel Xóa được Thiên Long TP-GELE01', br: 'Thiên Long', ch: 'shopee', pr: 58000, fm: 'Combo 20', rv: 727000000, g: 29, us: 12700, ug: 17, tr: 3100000000, tu: 62500, re: 13427, url: 'https://shopee.vn/product/101480242/19292039434' },
          { n: 'NÂNG CẤP 2026 Bút Bi Nước Deli Viết Gel Bấm A575 Ngòi 0.5mm', br: 'Deli', ch: 'shopee', pr: 9000, fm: 'Single', rv: 628000000, g: -26, us: 67600, ug: -26, tr: 6000000000, tu: 1900000, re: 121481, url: 'https://shopee.vn/product/127805122/18109428728' },
          { n: 'Combo 20 Bút bi Thiên Long 027 Pro ngòi 0.5mm mực xanh đen thân bút pastel', br: 'Thiên Long', ch: 'tiktok', pr: 110000, fm: 'Combo 20', rv: 603800000, g: -19, us: 5600, ug: -30, tr: 2600000000, tu: 27400, re: 3287, url: 'https://www.tiktok.com/view/product/1729758201010228217' },
          { n: 'Combo 5 10 20 Bút gel Thiên Long Happ Obby GEL-056', br: 'Thiên Long', ch: 'tiktok', pr: 44000, fm: 'Combo 10', rv: 571400000, g: 126, us: 12700, ug: 119, tr: 834500000, tu: 18700, re: 893, url: 'https://www.tiktok.com/view/product/1732234716280294393' },
          { n: 'Combo Bút bi Thiên Long Pro 027 TL-105 màu pastel ngòi 0.5mm', br: 'Thiên Long', ch: 'tiktok', pr: 26250, fm: 'Combo 5', rv: 554900000, g: -32, us: 19500, ug: -44, tr: 2300000000, tu: 97100, re: 19347, url: 'https://shopee.vn/product/368671137/23577091247' }
        ]
      },

      but_bi: {
        gross: { cur: 27.7, pre: 20.6, g: 34 },
        units: { cur: 816500, pre: 1300000, g: -37 },
        stores: { cur: 3400, pre: 3800, g: -11 },
        plat: { shopee: [15.7, 15.1], tiktok: [11.4, 4.5], lazada: [0.581, 0.908] },
        brand: [['Thiên Long', 11.1908, 6.283], ['Deli', 1.9113, 1.2566], ['G-Star', 1.1911, 0.5768], ['Vâng Thiên', 0.5817, 0.3502], ['Flexoffice', 0.4155, 0.2266]],
        price: { '< 10K': 0.9, '10K-30K': 7.11, '30K-50K': 7.01, '50K-75K': 3.89, '75K-100K': 4.56, '100K-150K': 2.18, '150K-200K': 0.6, '200K-350K': 0.45, '350K-500K': 0.2, '500K-750K': 0.28, '750K-1M': 0.31 },
        prod: [
          { n: 'Combo 5 10 20 Bút bi màu pastel PRO 027 Thiên Long TL-105', br: 'Thiên Long', ch: 'tiktok', pr: 36000, fm: 'Combo 20', rv: 1190000000, g: -43, us: 28900, ug: -58, tr: 4700000000, tu: 161800, re: 12918, url: 'https://www.tiktok.com/view/product/1729758198371814393' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long Pro 027 TL-105 - 3 màu mực thân bút pastel', br: 'Thiên Long', ch: 'shopee', pr: 30500, fm: 'Combo 20', rv: 899500000, g: -2, us: 29700, ug: -19, tr: 4100000000, tu: 156200, re: 31340, url: 'https://shopee.vn/product/101480242/21193760161' },
          { n: 'Combo 5 10 20 Bút bi dầu màu pastel Deli EQ32', br: 'Deli', ch: 'tiktok', pr: 30000, fm: 'Combo 20', rv: 815200000, g: null, us: 23900, ug: null, tr: 931100000, tu: 27800, re: 1035, url: 'https://www.tiktok.com/view/product/1733976532781139583' },
          { n: 'Combo 20 Bút bi Thiên Long 027 Pro ngòi 0.5mm mực xanh đen thân bút pastel', br: 'Thiên Long', ch: 'tiktok', pr: 110000, fm: 'Combo 20', rv: 603800000, g: -19, us: 5600, ug: -30, tr: 2600000000, tu: 27400, re: 2397, url: 'https://www.tiktok.com/view/product/1729758201010228217' },
          { n: 'Combo Bút bi Thiên Long Pro 027 TL-105 màu pastel ngòi 0.5mm', br: 'Thiên Long', ch: 'shopee', pr: 26250, fm: 'Combo 5', rv: 554900000, g: -32, us: 19500, ug: -44, tr: 2300000000, tu: 97100, re: 19247, url: 'https://shopee.vn/product/368671137/23577091247' },
          { n: 'Bộ Bút Và Mực 5 Cái 0.5mm (Xanh/Đen/Đỏ)', br: 'Other', ch: 'tiktok', pr: 20000, fm: 'Combo 5', rv: 452600000, g: -24, us: 17500, ug: 15, tr: 3200000000, tu: 84100, re: 9285, url: 'https://www.tiktok.com/view/product/1730805887918246790' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long TL-095 Butter Ink ngòi 0.5mm', br: 'Thiên Long', ch: 'shopee', pr: 47500, fm: 'Combo 20', rv: 391000000, g: -15, us: 8100, ug: -24, tr: 3200000000, tu: 79500, re: 16264, url: 'https://shopee.vn/product/101480242/23576151438' },
          { n: 'Combo 20 Bút bi Thiên Long TL-027 ngòi 0.5mm - 4 màu mực', br: 'Thiên Long', ch: 'shopee', pr: 84000, fm: 'Combo 20', rv: 381800000, g: 4, us: 4600, ug: -5, tr: 4900000000, tu: 75600, re: 14426, url: 'https://shopee.vn/product/368671137/16065421545' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long TL-027 mực xanh đỏ đen tím ngòi 0.5mm', br: 'Thiên Long', ch: 'shopee', pr: 22000, fm: 'Combo 20', rv: 364800000, g: -10, us: 16000, ug: -18, tr: 2400000000, tu: 123300, re: 22451, url: 'https://shopee.vn/product/101480242/23576151410' },
          { n: 'Vĩ 12 cây bút bi bấm Todosoyo mực xanh đầu bi 0.7mm', br: 'Todosoyo', ch: 'tiktok', pr: 88100, fm: 'Vĩ 12', rv: 352000000, g: 92, us: 3700, ug: 78, tr: 584000000, tu: 6400, re: 316, url: 'https://www.tiktok.com/view/product/1731005552529541547' }
        ]
      },

      but_gel: {
        gross: { cur: 49.8, pre: 33.5, g: 49 },
        units: { cur: 1900000, pre: 4000000, g: -54 },
        stores: { cur: 3400, pre: 3800, g: -11 },
        plat: { shopee: [27, 20.45], tiktok: [22.2, 11.62], lazada: [0.677, 1.47] },
        brand: [['Thiên Long', 10.209, 5.092], ['Deli', 6.6234, 4.489], ['G-Star', 1.494, 1.1055], ['Bossee', 1.3944, 1.005], ['Classmate', 1.3944, 1.072]],
        price: { '< 10K': 4.149, '10K-30K': 14.101, '30K-50K': 11.215, '50K-75K': 8.456, '75K-100K': 8.241, '100K-150K': 2.008, '150K-200K': 0.822, '200K-350K': 0.489, '350K-500K': 0.165 },
        prod: [
          { n: 'Combo 5-10-20 Bút gel Fasgel GEL-068', br: 'Thiên Long', ch: 'tiktok', pr: 30000, fm: 'Combo 20', rv: 1300000000, g: 57, us: 42900, ug: 52, tr: 2200000000, tu: 73500, re: 5334, url: 'https://www.tiktok.com/view/product/1732616810831906809' },
          { n: '10 bút tặng 20 ruột - Combo bút gel xóa được', br: 'OEM', ch: 'tiktok', pr: 86000, fm: 'Combo 10', rv: 834800000, g: -54, us: 9400, ug: -55, tr: 2900000000, tu: 33200, re: 2212, url: 'https://www.tiktok.com/view/product/1732466130837866215' },
          { n: 'Combo 5-10-20 Bút Gel Xóa được TP-GELE01', br: 'Thiên Long', ch: 'shopee', pr: 58000, fm: 'Combo 20', rv: 727000000, g: 29, us: 12700, ug: 17, tr: 3100000000, tu: 62500, re: 13427, url: 'https://shopee.vn/product/101480242/19292039434' },
          { n: 'Bút Bi Nước Deli Gel Bấm A575 (Nâng cấp 2026)', br: 'Deli', ch: 'shopee', pr: 9000, fm: 'Single', rv: 628000000, g: -26, us: 67600, ug: -26, tr: 6000000000, tu: 1900000, re: 121481, url: 'https://shopee.vn/product/127805122/18109428728' },
          { n: 'Combo 5-10-20 Bút gel Happ Obby GEL-056', br: 'Thiên Long', ch: 'tiktok', pr: 44000, fm: 'Combo 20', rv: 571400000, g: 126, us: 12700, ug: 119, tr: 866500000, tu: 19400, re: 993, url: 'https://www.tiktok.com/view/product/1732234716280294393' },
          { n: 'Set 8 bút gel Cao Cấp DUDU 0.5mm', br: 'DUDU', ch: 'tiktok', pr: 20000, fm: 'Set 8', rv: 504100000, g: 76, us: 24500, ug: 62, tr: 881700000, tu: 44100, re: 2499, url: 'https://www.tiktok.com/view/product/1732776664365893367' },
          { n: 'Bút bi nước mực gel bấm EG118', br: 'Deli', ch: 'shopee', pr: 9000, fm: 'Single', rv: 493000000, g: -15, us: 57300, ug: -15, tr: 3300000000, tu: 882500, re: 54594, url: 'https://shopee.vn/product/127805122/11463887013' },
          { n: 'Combo 24 bút gel khô nhanh GPKC-1001', br: 'OEM', ch: 'tiktok', pr: 75000, fm: 'Combo 24', rv: 457500000, g: 146, us: 6400, ug: 136, tr: 1600000000, tu: 24200, re: 1767, url: 'https://www.tiktok.com/view/product/1730497909468793620' },
          { n: 'Mẫu mới Combo 30 Bút Gel Xóa được', br: 'OEM', ch: 'tiktok', pr: 99000, fm: 'Combo 30', rv: 451600000, g: 21, us: 4500, ug: 18, tr: 1100000000, tu: 10600, re: 816, url: 'https://www.tiktok.com/view/product/1730476333332400331' },
          { n: 'Combo 5-10-20 Bút gel Fasgel GEL-068 (Mall)', br: 'Thiên Long', ch: 'shopee', pr: 29500, fm: 'Combo 20', rv: 449000000, g: 114, us: 15800, ug: 94, tr: 659100000, tu: 24000, re: 4209, url: 'https://shopee.vn/product/101480242/42170566678' }
        ]
      }
    },
    hoc_cu: {
      all: {
        gross: { cur: 124.9, pre: 110.1, g: 13 },
        units: { cur: 2400000, pre: 3200000, g: -26 },
        stores: { cur: 9300, pre: 9900, g: -5 },
        plat: { shopee: [70.4, 69], tiktok: [53.2, 37.5], lazada: [1.2, 3.4] },
        brand: [['Casio', 25.9792, 22.02], ['Flexio', 20.1089, 4.8444], ['Deli', 4.1217, 2.5323], ['Thiên Long', 2.7478, 1.101]],
        price: { '< 10K': 3.298, '10K-30K': 17.56, '30K-50K': 11.783, '50K-75K': 13.342, '75K-100K': 9.253, '100K-150K': 11.931, '150K-200K': 9.519, '200K-350K': 17.685, '350K-500K': 3.937, '500K-750K': 22.801, '750K-1M': 2.733, '1M-1.5M': 0.557 },
        prod: [
          { n: 'Máy tính Flexio Fx799VN 4 màu pastel (Mã 1)', br: 'Flexio', ch: 'tiktok', pr: 662000, fm: 'Single', rv: 5500000000, g: -6, us: 8500, ug: -24, tr: 24400000000, tu: 45400, re: 5876, url: 'https://www.tiktok.com/view/product/1729647692608932857' },
          { n: 'Máy tính Flexio Fx799VN 4 màu pastel (Mã 2)', br: 'Flexio', ch: 'tiktok', pr: 662000, fm: 'Single', rv: 4300000000, g: 15, us: 7300, ug: 6, tr: 18300000000, tu: 34300, re: 4612, url: 'https://www.tiktok.com/view/product/1729672334167935993' },
          { n: 'Máy tính Flexio Fx799VN - Máy tính học sinh', br: 'Flexio', ch: 'shopee', pr: 586000, fm: 'Single', rv: 3400000000, g: 4, us: 5900, ug: 3, tr: 13800000000, tu: 24500, re: 6853, url: 'https://shopee.vn/product/101480242/22471594302' },
          { n: 'Máy tính cầm tay Flexio Fx799VN (Miền Bắc)', br: 'Flexio', ch: 'shopee', pr: 586000, fm: 'Single', rv: 1800000000, g: -21, us: 3100, ug: -27, tr: 11600000000, tu: 21100, re: 6205, url: 'https://shopee.vn/product/368671137/23077933746' },
          { n: 'Máy tính Casio FX-880BTG Chính hãng Bitex', br: 'Casio', ch: 'shopee', pr: 636000, fm: 'Single', rv: 1400000000, g: 18, us: 2300, ug: 24, tr: 21800000000, tu: 30900, re: 8853, url: 'https://shopee.vn/product/140792708/18134522949' },
          { n: 'Balo đi học nam nữ chống nước NATOLI', br: 'Natoli', ch: 'shopee', pr: 259000, fm: 'Single', rv: 1200000000, g: 29, us: 4800, ug: 11, tr: 14000000000, tu: 60400, re: 16733, url: 'https://shopee.vn/product/515748887/12786241026' },
          { n: 'Máy Tính Khoa Học Casio FX-580VNX (Bitex HN)', br: 'Casio', ch: 'shopee', pr: 804000, fm: 'Single', rv: 1000000000, g: -43, us: 1300, ug: -46, tr: 5200000000, tu: 6900, re: 1566, url: 'https://shopee.vn/product/292001772/23973252157' },
          { n: 'Balo đi học thương hiệu NATOLI Basic', br: 'Natoli', ch: 'tiktok', pr: 259000, fm: 'Single', rv: 953800000, g: 28, us: 3400, ug: 13, tr: 8900000000, tu: 39500, re: 4490, url: 'https://www.tiktok.com/view/product/1729439994934889330' },
          { n: 'Máy tính Flexio Fx799VN 4 màu pastel (Mã 3)', br: 'Flexio', ch: 'shopee', pr: 586000, fm: 'Single', rv: 892500000, g: -4, us: 1600, ug: 2, tr: 2500000000, tu: 4400, re: 1219, url: 'https://shopee.vn/product/101480242/22675511601' },
          { n: 'Balo đi học vải bố in hình gấu dễ thương', br: 'OEM', ch: 'tiktok', pr: 42900, fm: 'Single', rv: 801000000, g: 88, us: 19800, ug: 72, tr: 1700000000, tu: 46800, re: 5642, url: 'https://www.tiktok.com/view/product/1730110922353182764' }
        ]
      },

      may_tinh: {
        gross: { cur: 54.7, pre: 34, g: 61 },
        units: { cur: 165900, pre: 113400, g: 46 },
        stores: { cur: 694, pre: 788, g: -12 },
        plat: { shopee: [29.4, 23.9], tiktok: [24.5, 7.9], lazada: [0.604, 2] },
        brand: [['Casio', 25.9825, 22.032], ['Thiên Long', 20.0749, 4.794], ['Deli', 0.3829, 0.51], ['Fahasa', 0.3829, 1.972], ['Texas Instruments', 0.3282, 0.204]],
        price: { '10K-30K': 0.217, '30K-50K': 1.405, '50K-75K': 0.879, '75K-100K': 0.303, '100K-150K': 0.538, '150K-200K': 1.852, '200K-350K': 4.132, '350K-500K': 1.234, '500K-750K': 25.954, '750K-1M': 17.78 },
        prod: [
          { n: 'Máy tính Flexio Fx799VN 4 màu pastel (Mã 1)', br: 'Thiên Long', ch: 'tiktok', pr: 586100, fm: 'Pastel', rv: 5500000000, g: -6, us: 8500, ug: -24, tr: 24500000000, tu: 45600, re: 5876, url: 'https://www.tiktok.com/view/product/1729647692608932857' },
          { n: 'Máy tính Casio Fx-580VNX đa sắc màu', br: 'Casio', ch: 'tiktok', pr: 780000, fm: 'Color', rv: 4600000000, g: -19, us: 5700, ug: -25, tr: 24100000000, tu: 32600, re: 3304, url: 'https://www.tiktok.com/view/product/1729430797999508070' },
          { n: 'Máy tính Flexio Fx799VN 4 màu pastel (Mã 2)', br: 'Thiên Long', ch: 'tiktok', pr: 586100, fm: 'Pastel', rv: 4300000000, g: 15, us: 7300, ug: 6, tr: 18400000000, tu: 34300, re: 4612, url: 'https://www.tiktok.com/view/product/1729672334167935993' },
          { n: 'Máy Tính Casio FX-580VN X (Bitex Official)', br: 'Casio', ch: 'shopee', pr: 805000, fm: 'Single', rv: 4200000000, g: -44, us: 5200, ug: -48, tr: 61300000000, tu: 86000, re: 23919, url: 'https://shopee.vn/product/140792708/4558727890' },
          { n: 'Máy tính Flexio Fx799VN (Thiên Long Store)', br: 'Thiên Long', ch: 'shopee', pr: 586100, fm: 'Single', rv: 3400000000, g: 4, us: 5900, ug: 3, tr: 13800000000, tu: 24500, re: 6853, url: 'https://shopee.vn/product/101480242/22471594302' },
          { n: 'Máy Tính Casio FX 580 (Nhà sách FAHASA)', br: 'Casio', ch: 'shopee', pr: 805200, fm: 'Single', rv: 3000000000, g: -66, us: 3800, ug: -68, tr: 35000000000, tu: 49200, re: 10222, url: 'https://shopee.vn/product/142856269/9633799567' },
          { n: 'Máy tính cầm tay Flexio Fx799VN (Miền Bắc)', br: 'Thiên Long', ch: 'shopee', pr: 586000, fm: 'Single', rv: 1800000000, g: -21, us: 3100, ug: -27, tr: 11600000000, tu: 21100, re: 6205, url: 'https://shopee.vn/product/368671137/23077933746' },
          { n: 'SALE Máy tính Casio Fx-580VNX (Bitex TikTok)', br: 'Casio', ch: 'tiktok', pr: 827000, fm: 'Single', rv: 1500000000, g: 64, us: 1800, ug: 48, tr: 4500000000, tu: 5800, re: 542, url: 'https://www.tiktok.com/view/product/1730689555810650726' },
          { n: 'Máy Tính Casio FX-880BTG (Bitex Official)', br: 'Casio', ch: 'shopee', pr: 636000, fm: 'Single', rv: 1400000000, g: 18, us: 2300, ug: 24, tr: 21800000000, tu: 30900, re: 8853, url: 'https://shopee.vn/product/140792708/18134522949' },
          { n: 'Máy tính cầm tay Flexio Fx799VN (Miền Trung)', br: 'Thiên Long', ch: 'shopee', pr: 586000, fm: 'Single', rv: 1400000000, g: 49, us: 2400, ug: 38, tr: 4300000000, tu: 7900, re: 2159, url: 'https://shopee.vn/product/367619913/23371607410' }
        ]
      },

      but_chi: {
        gross: { cur: 3.8, pre: 2.5, g: 49 },
        units: { cur: 165200, pre: 259800, g: -36 },
        stores: { cur: 1100, pre: 1300, g: -9 },
        plat: { shopee: [2.7, 1.9], tiktok: [1.1, 0.49], lazada: [0.052, 0.18] },
        brand: [['Deli', 1.0982, 0.72], ['Thiên Long', 0.665, 0.325], ['G-Star', 0.1634, 0.0875], ['Kohno', 0.1254, 0.095], ['Classmate', 0.0798, 0.0375]],
        price: { '< 10K': 0.309, '10K-30K': 0.979, '30K-50K': 1.74, '50K-75K': 0.298, '75K-100K': 0.105, '100K-150K': 0.138, '150K-200K': 0.082, '200K-350K': 0.101 },
        prod: [
          { n: 'Hộp 10 bút chì gỗ Deli gradient', br: 'Deli', ch: 'tiktok', pr: 30000, fm: 'Hộp 10', rv: 188600000, g: -33, us: 5700, ug: -19, tr: 649000000, tu: 19300, re: 1242, url: 'https://www.tiktok.com/view/product/1731706412921292415' },
          { n: 'Bút Chì Ngũ Sắc Phác Thảo', br: 'OEM', ch: 'tiktok', pr: 15800, fm: 'Single', rv: 150800000, g: 77, us: 8800, ug: 78, tr: 239600000, tu: 14000, re: 1220, url: 'https://www.tiktok.com/view/product/1732959231009326668' },
          { n: 'Hộp 10 cây Bút chì Thiên Long GP-018', br: 'Thiên Long', ch: 'shopee', pr: 42000, fm: 'Hộp 10', rv: 135800000, g: 310, us: 3200, ug: 305, tr: 560000000, tu: 13800, re: 2325, url: 'https://shopee.vn/product/101480242/1635055148' },
          { n: 'Hộp 10 cây Bút chì Thiên Long GP-01', br: 'Thiên Long', ch: 'shopee', pr: 41800, fm: 'Hộp 10', rv: 129800000, g: -48, us: 3500, ug: -47, tr: 1400000000, tu: 42600, re: 7887, url: 'https://shopee.vn/product/101480242/1673220598' },
          { n: 'Vỉ 10-12 Bút Chì Gỗ Deli', br: 'Deli', ch: 'shopee', pr: 30000, fm: 'Vỉ 10-12', rv: 106200000, g: -54, us: 3500, ug: -58, tr: 3000000000, tu: 183000, re: 38570, url: 'https://shopee.vn/product/127805122/5431388748' },
          { n: 'Hộp 10 bút chì học sinh Thiên Long 2B', br: 'Thiên Long', ch: 'shopee', pr: 37000, fm: 'Hộp 10', rv: 67100000, g: -67, us: 1900, ug: -70, tr: 928300000, tu: 30300, re: 5140, url: 'https://shopee.vn/product/101480242/23990060019' },
          { n: 'Hộp 10 Bút Chì Gỗ Deli gradient', br: 'Deli', ch: 'shopee', pr: 35000, fm: 'Hộp 10', rv: 58200000, g: -38, us: 1400, ug: -36, tr: 224300000, tu: 5300, re: 952, url: 'https://shopee.vn/product/127805122/43752642686' },
          { n: 'Combo 10 Bút Chì Gỗ HB Có Tẩy', br: 'OEM', ch: 'tiktok', pr: 19000, fm: 'Combo 10', rv: 58200000, g: -75, us: 3400, ug: -78, tr: 587000000, tu: 41600, re: 3196, url: 'https://www.tiktok.com/view/product/1731545738222273558' },
          { n: 'Bút Chì 2B HB Nusign Deli', br: 'Deli', ch: 'shopee', pr: 8000, fm: 'Single', rv: 52500000, g: -42, us: 7000, ug: -48, tr: 561400000, tu: 132700, re: 9660, url: 'https://shopee.vn/product/127805122/23083762317' },
          { n: 'Bút chì gỗ Strive Thiên Long', br: 'Thiên Long', ch: 'shopee', pr: 116000, fm: 'Single', rv: 52300000, g: -40, us: 579, ug: -40, tr: 139800000, tu: 1600, re: 360, url: 'https://shopee.vn/product/368671137/26542621598' }
        ]
      },

      tap_vo: {
        gross: { cur: 9.7, pre: 7.3, g: 33 },
        units: { cur: 282800, pre: 355100, g: -20 },
        stores: { cur: 1200, pre: 1300, g: -6 },
        plat: { shopee: [6.8, 5.44], tiktok: [2.7, 1.57], lazada: [0.17, 0.29] },
        brand: [['Thiên Long', 1.7654, 0.4453], ['Total', 1.3483, 0.9125], ['Hồng Hà', 1.1543, 0.8103], ['Hải Tiến', 1.1252, 0.9855], ['Classmate', 0.8633, 0.3066]],
        price: { '< 10K': 0.331, '10K-30K': 2.379, '30K-50K': 1.836, '50K-75K': 2.384, '75K-100K': 1.294, '100K-150K': 1.197, '150K-200K': 0.188, '200K-350K': 0.077 },
        prod: [
          { n: 'Combo 10 Tập học sinh 96 trang 4 ô ly', br: 'Thiên Long', ch: 'shopee', pr: 133000, fm: 'Combo 10', rv: 248000000, g: -35, us: 1800, ug: -37, tr: 1000000000, tu: 7700, re: 1145, url: 'https://shopee.vn/product/101480242/29587705915' },
          { n: 'Tập Vở Học Tập B5 Kẻ Caro 30 Tờ', br: 'Tuệ Minh', ch: 'tiktok', pr: 26400, fm: 'Single', rv: 226900000, g: 73, us: 8200, ug: 78, tr: 398700000, tu: 14200, re: 14200, url: 'https://www.tiktok.com/view/product/1731613652387529894' },
          { n: 'Combo 5 quyển Vở kẻ ngang 80 trang Total', br: 'Total', ch: 'tiktok', pr: 28200, fm: 'Combo 5', rv: 174200000, g: 750, us: 5700, ug: 683, tr: 254700000, tu: 8500, re: 294, url: 'https://www.tiktok.com/view/product/1730579631691172532' },
          { n: 'Vở Kẻ Ngang B5 HUERARUMO 300–500 Trang', br: 'OEM', ch: 'tiktok', pr: 66200, fm: 'Single', rv: 170700000, g: 5754, us: 2400, ug: 5229, tr: 184700000, tu: 2600, re: 74, url: 'https://www.tiktok.com/view/product/1732864714683221266' },
          { n: 'Combo 10 Quyển Tập Vở Học Sinh 96 Trang', br: 'OEM', ch: 'tiktok', pr: 62000, fm: 'Combo 10', rv: 138100000, g: -2, us: 2200, ug: -2, tr: 696200000, tu: 11200, re: 808, url: 'https://www.tiktok.com/view/product/1731017686634629528' },
          { n: 'Combo 10 Vở 4 ô ly Thiên Long 80 trang', br: 'Thiên Long', ch: 'shopee', pr: 120000, fm: 'Combo 10', rv: 121100000, g: 72, us: 1000, ug: 51, tr: 496500000, tu: 4900, re: 2325, url: 'https://shopee.vn/product/368671137/40908455201' },
          { n: 'Combo Tập vở dán gáy Thiên Long 80-120tr', br: 'Thiên Long', ch: 'shopee', pr: 95000, fm: 'Combo 2', rv: 111700000, g: 211, us: 1500, ug: 288, tr: 147700000, tu: 1800, re: 1800, url: 'https://shopee.vn/product/368671137/44652393969' },
          { n: 'Lốc 10 QUYỂN TẬP 96 TRANG (Hải Hà)', br: 'Hải Tiến', ch: 'shopee', pr: 54900, fm: 'Combo 10', rv: 109100000, g: -47, us: 2000, ug: -47, tr: 778200000, tu: 15000, re: 15000, url: 'https://shopee.vn/product/87162080/29908288406' },
          { n: 'Vở kẻ ngang chấm dán gáy Crabit', br: 'Crabit', ch: 'shopee', pr: 54000, fm: 'Single', rv: 102000000, g: 15, us: 1900, ug: 18, tr: 1400000000, tu: 29400, re: 29400, url: 'https://shopee.vn/product/19268307/19580909018' },
          { n: 'Vở Ô Ly Hồng Hà Cho Học Sinh', br: 'Hồng Hà', ch: 'shopee', pr: 100500, fm: 'Single', rv: 101900000, g: 35, us: 1000, ug: 30, tr: 280900000, tu: 3100, re: 3100, url: 'https://shopee.vn/product/1089361687/24774375032' }
        ]
      },

      balo: {
        gross: { cur: 52.8, pre: 62.1, g: -15 },
        units: { cur: 341100, pre: 374100, g: -9 },
        stores: { cur: 2200, pre: 2400, g: -7 },
        plat: { shopee: [26.7, 39.8], tiktok: [25.8, 21.5], lazada: [0.3269, 0.77] },
        brand: [['Natoli', 2.904, 1.8009], ['Genbag', 1.0032, 1.6767], ['Như Ý Shop', 0.7392, null], ['Tee Sik', 0.6864, null], ['Ez Balo', 0.6864, 0.5589]],
        price: { '10K-30K': 0.221, '30K-50K': 1.642, '50K-75K': 2.555, '75K-100K': 3.672, '100K-150K': 8.604, '150K-200K': 9.748, '200K-350K': 17.065, '350K-500K': 5.599, '500K-750K': 2.278, '750K-1M': 1.074 },
        prod: [
          { n: 'Balo Đi Học Thời Trang Hip Balo', br: 'Balo HIP', ch: 'tiktok', pr: 228000, fm: 'Trend', rv: 1600000000, g: 19, us: 7000, ug: -5, tr: 22400000000, tu: 139000, re: 13798, url: 'https://www.tiktok.com/view/product/1730256379947223841' },
          { n: 'Balo nam nữ Natoli chống nước (Mã 1)', br: 'Natoli', ch: 'shopee', pr: 250000, fm: 'Single', rv: 1200000000, g: 29, us: 4800, ug: 11, tr: 14000000000, tu: 60400, re: 16733, url: 'https://shopee.vn/product/515748887/12786241026' },
          { n: 'Balo thương hiệu Natoli Basic (Mã 2)', br: 'Natoli', ch: 'tiktok', pr: 280000, fm: 'Basic', rv: 953800000, g: 28, us: 3400, ug: 13, tr: 9000000000, tu: 39600, re: 4490, url: 'https://www.tiktok.com/view/product/1729439994934889330' },
          { n: 'Balo vải bố in hình gấu dễ thương', br: 'LION store', ch: 'tiktok', pr: 40000, fm: 'Cute', rv: 801000000, g: 88, us: 19800, ug: 72, tr: 1700000000, tu: 46900, re: 5642, url: 'https://www.tiktok.com/view/product/1730110922353182764' },
          { n: 'Balo nữ GENBAG ulzzang trơn basic', br: 'Genbag', ch: 'tiktok', pr: 227000, fm: 'Ulzzang', rv: 771500000, g: 75, us: 3400, ug: 46, tr: 4700000000, tu: 22300, re: 2665, url: 'https://www.tiktok.com/view/product/1729818001856957009' },
          { n: 'Balo họa tiết dễ thương (Mihachi)', br: 'Mihachi', ch: 'tiktok', pr: 76000, fm: 'Họa tiết', rv: 509500000, g: 217, us: 6700, ug: 188, tr: 706200000, tu: 11400, re: 3178, url: 'https://shopee.vn/product/29037116/44458528652' },
          { n: 'Balo Hello Kitty dáng yêu cute', br: 'OEM', ch: 'tiktok', pr: 94000, fm: 'Cute', rv: 498900000, g: 37, us: 5300, ug: 22, tr: 1400000000, tu: 15800, re: 2097, url: 'https://www.tiktok.com/view/product/1731967841856358013' },
          { n: 'Balo mẫu giáo 1-5 tuổi (Baloha)', br: 'Baloha', ch: 'tiktok', pr: 95000, fm: 'Kids', rv: 447000000, g: 136, us: 4700, ug: 87, tr: 3000000000, tu: 46200, re: 4868, url: 'https://www.tiktok.com/view/product/1729596877973456992' },
          { n: 'Balo học sinh siêu nhẹ cấp 1-2', br: 'OEM', ch: 'tiktok', pr: 165000, fm: 'Siêu nhẹ', rv: 446500000, g: 28, us: 2700, ug: 16, tr: 4300000000, tu: 28600, re: 2074, url: 'https://www.tiktok.com/view/product/1730326057829960444' },
          { n: 'Balo Ulzzang Hàn Quốc trơn basic', br: 'Belle Bag', ch: 'shopee', pr: 114000, fm: 'Ulzzang', rv: 444500000, g: 47, us: 3900, ug: 53, tr: 7300000000, tu: 71300, re: 16085, url: 'https://shopee.vn/product/975629330/20977181092' }
        ]
      },

      gom: {
        gross: { cur: 3.4, pre: 2.4, g: 40 },
        units: { cur: 267700, pre: 521300, g: -49 },
        stores: { cur: 1600, pre: 1800, g: -12 },
        plat: { shopee: [2.4, 1.83], tiktok: [0.947, 0.44], lazada: [0.0321, 0.128] },
        brand: [['Deli', 2.601, 1.3344], ['Thiên Long', 0.34, 0.2952], ['Four Candies', 0.1122, 0.0384], ['Tombow', 0.0884, 0.0912], ['Sao Thiên', 0.068, null]],
        price: { '< 10K': 0.975, '10K-30K': 1.448, '30K-50K': 0.593, '50K-75K': 0.197, '75K-100K': 0.043, '100K-150K': 0.088, '150K-200K': 0.027 },
        prod: [
          { n: 'Set 4 5 6 tẩy không vụn Nusign x Deli', br: 'Deli', ch: 'tiktok', pr: 35000, fm: 'Set 4-6', rv: 245500000, g: -53, us: 7000, ug: -53, tr: 1100000000, tu: 36200, re: 2531, url: 'https://www.tiktok.com/view/product/1730991643525286527' },
          { n: 'Hộp 6 Gôm Tẩy Siêu Sạch Deli Nusign (Mã 1)', br: 'Deli', ch: 'shopee', pr: 20000, fm: 'Hộp 6', rv: 74800000, g: 94, us: 3700, ug: 5, tr: 234900000, tu: 11300, re: 2547, url: 'https://shopee.vn/product/348955539/29568624298' },
          { n: 'Hộp 6 Gôm Tẩy Siêu Sạch Deli Nusign (Mã 2)', br: 'Deli', ch: 'tiktok', pr: 28000, fm: 'Hộp 6', rv: 63000000, g: -58, us: 2200, ug: -59, tr: 381400000, tu: 17600, re: 3679, url: 'https://shopee.vn/product/127805122/26213312447' },
          { n: 'Gôm tẩy 2 đầu Deli - Tẩy chì và mài giấy', br: 'Deli', ch: 'tiktok', pr: 18000, fm: '2 Đầu', rv: 58800000, g: -1, us: 3200, ug: -30, tr: 230300000, tu: 35000, re: 1213, url: 'https://www.tiktok.com/view/product/1729756485631576703' },
          { n: 'Gôm Tẩy Định Vị Tẩy Bút Chì Deli', br: 'Deli', ch: 'tiktok', pr: 9000, fm: 'Single', rv: 50800000, g: -31, us: 5700, ug: -38, tr: 361600000, tu: 43400, re: 6618, url: 'https://shopee.vn/product/127805122/28757886370' },
          { n: 'Combo Gôm Tẩy bút chì Thiên Long', br: 'Thiên Long', ch: 'shopee', pr: 22000, fm: 'Combo 10', rv: 49400000, g: -78, us: 2200, ug: -70, tr: 345000000, tu: 19700, re: 3468, url: 'https://shopee.vn/product/368671137/23922638238' },
          { n: 'Gôm Tẩy Deli Màu Trắng - Tẩy Sạch Ít Vụn', br: 'Deli', ch: 'shopee', pr: 4800, fm: 'Single', rv: 47100000, g: -18, us: 9900, ug: -17, tr: 510600000, tu: 169400, re: 17846, url: 'https://shopee.vn/product/127805122/3824689315' },
          { n: 'Gôm tẩy không bụi mịn Thiên Long Strive', br: 'Thiên Long', ch: 'shopee', pr: 4800, fm: 'Single', rv: 46800000, g: -59, us: 9700, ug: -59, tr: 317700000, tu: 61000, re: 8824, url: 'https://shopee.vn/product/101480242/26355337705' },
          { n: 'Gôm Tẩy Chì 2 Đầu Deli - Mã 45,5tr', br: 'Deli', ch: 'shopee', pr: 9200, fm: 'Single', rv: 45500000, g: -37, us: 4900, ug: -14, tr: 255000000, tu: 26200, re: 3545, url: 'https://shopee.vn/product/127805122/23858398597' },
          { n: 'Gôm Tẩy Chì Và Mực 2 Đầu Deli', br: 'Deli', ch: 'shopee', pr: 11000, fm: 'Single', rv: 45400000, g: -1, us: 4000, ug: 10, tr: 165000000, tu: 15800, re: 2273, url: 'https://shopee.vn/product/348955539/25051528382' }
        ]
      }
    },
    my_thuat: {
      all: {
        gross: { cur: 70.4, pre: 56.9, g: 24 },
        units: { cur: 1500000, pre: 1800000, g: -14 },
        stores: { cur: 5900, pre: 6500, g: -9 },
        plat: { shopee: [43.5, 37.5], tiktok: [26.3, 17.3], lazada: [0.6394, 2.13] },
        brand: [['Deli', 24.3584, 17.07], ['Colokit', 10.912, 6.828], ['Global Art', 9.7856, 4.552], ['Mont Marte', 7.2512, 4.552], ['Bossee', 6.4064, null]],
        price: { '< 10K': 1.19, '10K-30K': 11.71, '30K-50K': 12.94, '50K-75K': 15.79, '75K-100K': 7.49, '100K-150K': 6.05, '150K-200K': 3.64, '200K-350K': 7.83, '350K-500K': 1.81, '500K-750K': 1.11, '750K-1M': 0.38, '1M-1.5M': 0.24, '1.5M-2M': 0.15 },
        prod: [
          { n: 'Hộp 60 bút màu Acrylic Marker (BinBon)', br: 'OEM', ch: 'tiktok', pr: 68000, fm: 'Set 60', rv: 3000000000, g: -43, us: 43900, ug: -46, tr: 11800000000, tu: 182500, re: 13679, url: 'https://www.tiktok.com/view/product/1730750363609630947' },
          { n: 'Hộp Bút Chì Màu Gốc Dầu Global Art', br: 'Global Art', ch: 'tiktok', pr: 315000, fm: 'Dầu', rv: 1100000000, g: 53, us: 3500, ug: 31, tr: 3000000000, tu: 11000, re: 1221, url: 'https://www.tiktok.com/view/product/1730350149081336202' },
          { n: 'Bút sáp màu lụa JUPIEARTH', br: 'JUPIEARTH', ch: 'tiktok', pr: 89000, fm: 'Lụa', rv: 782900000, g: 152, us: 8800, ug: 77, tr: 1600000000, tu: 20800, re: 1418, url: 'https://www.tiktok.com/view/product/1731970909916859173' },
          { n: 'Bút Màu Dạ 120 Màu Marker Acrylic', br: 'Bossee', ch: 'shopee', pr: 38000, fm: '120 Colors', rv: 668700000, g: -29, us: 17700, ug: -29, tr: 1800000000, tu: 48500, re: 9991, url: 'https://shopee.vn/product/1437074218/42500627746' },
          { n: 'Hộp 60 bút màu Acrylic (Gấu xoăn)', br: 'OEM', ch: 'tiktok', pr: 72000, fm: 'Set 60', rv: 664200000, g: 118, us: 9300, ug: 98, tr: 1700000000, tu: 25300, re: 2631, url: 'https://www.tiktok.com/view/product/1730998624837732431' },
          { n: 'Bút Màu Sáp Vặn Hữu Cơ ClassMate', br: 'Classmate', ch: 'tiktok', pr: 38000, fm: 'Hữu cơ', rv: 585600000, g: 14, us: 15500, ug: 8, tr: 1100000000, tu: 31000, re: 2128, url: 'https://www.tiktok.com/view/product/1732744932751476069' },
          { n: 'Hộp 60 Bút Màu Acrylic Make', br: 'OEM', ch: 'tiktok', pr: 58000, fm: 'Set 60', rv: 550400000, g: -4, us: 9500, ug: -2, tr: 1700000000, tu: 30000, re: 2301, url: 'https://www.tiktok.com/view/product/1730557972311673383' },
          { n: 'Tặng Bộ 12 bút chì màu 5000 hình', br: 'OEM', ch: 'tiktok', pr: 50000, fm: 'Set 12', rv: 519600000, g: -21, us: 10300, ug: -27, tr: 4400000000, tu: 93200, re: 5998, url: 'https://www.tiktok.com/view/product/1729732248230595147' },
          { n: 'Bút Chì Màu Gốc Dầu Hộp Thiếc Global Art', br: 'Global Art', ch: 'shopee', pr: 235000, fm: 'Hộp thiếc', rv: 511200000, g: -22, us: 2200, ug: -18, tr: 2300000000, tu: 10900, re: 3077, url: 'https://shopee.vn/product/1224175038/26150549051' },
          { n: 'Bút Sơn Màu Acrylic Maker Roller Deli', br: 'Deli', ch: 'tiktok', pr: 325000, fm: 'Acrylic', rv: 461900000, g: -6, us: 1400, ug: -46, tr: 1300000000, tu: 9300, re: 843, url: 'https://www.tiktok.com/view/product/1731288240825665151' }
        ]
      },

      sap_mau: {
        gross: { cur: 3.3, pre: 2.9, g: 13 },
        units: { cur: 103300, pre: 109700, g: -6 },
        stores: { cur: 800, pre: 931, g: -14 },
        plat: { shopee: [2, 1.43], tiktok: [1.3, 1.39], lazada: [0.0282, 0.117] },
        brand: [['Jupitearth', 0.7821, null], ['Colokit', 0.627, 0.3857], ['Deli', 0.3828, 0.3277], ['Classmate', 0.1056, 0.0203], ['Mideer', 0.0825, 0.0522]],
        price: { '< 10K': 0.09, '10K-30K': 1.085, '30K-50K': 0.476, '50K-75K': 0.309, '75K-100K': 0.882, '100K-150K': 0.098, '150K-200K': 0.107, '200K-350K': 0.096, '350K-500K': 0.072, '500K-750K': 0.042 },
        prod: [
          { n: 'Bút sáp màu lụa JUPIEARTH', br: 'Jupitearth', ch: 'tiktok', pr: 89000, fm: 'Lụa', rv: 782900000, g: 152, us: 8800, ug: 77, tr: 1600000000, tu: 20800, re: 1418, url: 'https://www.tiktok.com/view/product/1731970909916859173' },
          { n: 'Bút sáp màu Colokit 24 màu tươi sáng', br: 'Colokit', ch: 'shopee', pr: 35000, fm: '24 Colors', rv: 160400000, g: -1, us: 5900, ug: -1, tr: 1500000000, tu: 62000, re: 9445, url: 'https://shopee.vn/product/101480242/1636049426' },
          { n: 'Sáp màu Colokit 10-36 màu mịn tươi', br: 'Colokit', ch: 'shopee', pr: 18000, fm: '10-36 Colors', rv: 128800000, g: -7, us: 7200, ug: -7, tr: 912900000, tu: 72800, re: 5164, url: 'https://shopee.vn/product/101480242/1636049068' },
          { n: 'Bút Sáp Màu Colokit Doraemon', br: 'Colokit', ch: 'shopee', pr: 22000, fm: 'Doraemon', rv: 106400000, g: -53, us: 5200, ug: -54, tr: 990000000, tu: 53100, re: 7958, url: 'https://shopee.vn/product/101480242/1636049269' },
          { n: 'Bút sáp màu hữu cơ gấu con Deli', br: 'Deli', ch: 'shopee', pr: 65000, fm: 'Hữu cơ', rv: 82400000, g: -10, us: 1300, ug: -13, tr: 602800000, tu: 12800, re: 2150, url: 'https://shopee.vn/product/127805122/22270856739' },
          { n: 'Bút Sáp Màu Lụa Vặn Kiêm Màu Nước', br: 'OEM', ch: 'shopee', pr: 105000, fm: 'Vặn', rv: 61600000, g: 4, us: 593, ug: 5, tr: 179300000, tu: 1900, re: 317, url: 'https://shopee.vn/product/51635805/27281707163' },
          { n: 'Bút Sáp Màu Sáng Tạo Đa Năng', br: 'OEM', ch: 'tiktok', pr: 52000, fm: 'Đa năng', rv: 56600000, g: -59, us: 1100, ug: -60, tr: 206800000, tu: 4100, re: 182, url: 'https://www.tiktok.com/view/product/1732521901834274164' },
          { n: 'Bút sáp màu Baby Color 12 màu Nhật', br: 'Baby Color', ch: 'shopee', pr: 435000, fm: '12 Colors', rv: 47100000, g: 49, us: 108, ug: 33, tr: 109300000, tu: 315, re: 44, url: 'https://shopee.vn/product/63074404/1059385462' },
          { n: 'Bút Sáp Màu Hữu Cơ tự nhiên dễ thương', br: 'OEM', ch: 'tiktok', pr: 35000, fm: 'Hữu cơ', rv: 46200000, g: -75, us: 1300, ug: -78, tr: 368500000, tu: 12400, re: 997, url: 'https://www.tiktok.com/view/product/1729602424186768231' },
          { n: 'Bút Sáp Màu Hữu Cơ Cute Deli', br: 'Deli', ch: 'shopee', pr: 62000, fm: 'Hữu cơ', rv: 40500000, g: 5, us: 651, ug: 7, tr: 370300000, tu: 8000, re: 1442, url: 'https://shopee.vn/product/348955539/23658963786' }
        ]
      },

      acrylic: {
        gross: { cur: 18.8, pre: 14.6, g: 29 },
        units: { cur: 358500, pre: 425400, g: -16 },
        stores: { cur: 1700, pre: 1900, g: -14 },
        plat: { shopee: [10, 7.4], tiktok: [8.6, 6.5], lazada: [0.212, 0.642] },
        brand: [['Deli', 8.5728, 3.066], ['Bossee', 4.3428, 0.292], ['Colokit', 1.6544, 0.511], ['Enmy', 1.2784, null], ['Smartkids', 0.6956, 0.6716]],
        price: { '< 10K': 0.318, '10K-30K': 2.296, '30K-50K': 3.632, '50K-75K': 5.788, '75K-100K': 1.644, '100K-150K': 1.179, '150K-200K': 0.934, '200K-350K': 2.46, '350K-500K': 0.193, '500K-750K': 0.15, '750K-1M': 0.084, '1M-1.5M': 0.11 },
        prod: [
          { n: 'Hộp 60 bút màu Acrylic Marker (BinBon)', br: 'OEM', ch: 'tiktok', pr: 65000, fm: 'Set 60', rv: 3000000000, g: -43, us: 43900, ug: -46, tr: 11800000000, tu: 182500, re: 13679, url: 'https://www.tiktok.com/view/product/1730750363609630947' },
          { n: 'Bút Màu Dạ 120 Màu Marker Acrylic', br: 'Bossee', ch: 'shopee', pr: 37000, fm: '120 Colors', rv: 668700000, g: -29, us: 17700, ug: -29, tr: 1800000000, tu: 48500, re: 9991, url: 'https://shopee.vn/product/1437074218/42500627746' },
          { n: 'Hộp 60 bút màu Acrylic (Gấu xoăn)', br: 'OEM', ch: 'tiktok', pr: 65000, fm: 'Set 60', rv: 664200000, g: 118, us: 9300, ug: 98, tr: 1700000000, tu: 25300, re: 2631, url: 'https://www.tiktok.com/view/product/1730998624837732431' },
          { n: 'Bút Sơn Màu Acrylic Roller Deli (Bản mới)', br: 'Deli', ch: 'tiktok', pr: 299000, fm: 'Roller', rv: 461900000, g: -6, us: 1400, ug: -46, tr: 1300000000, tu: 9300, re: 843, url: 'https://www.tiktok.com/view/product/1731288240825665151' },
          { n: 'Chính hãng Bút Sơn Acrylic Deli 84 màu', br: 'Deli', ch: 'shopee', pr: 285000, fm: '84 Colors', rv: 444700000, g: -29, us: 1500, ug: -51, tr: 1600000000, tu: 7500, re: 7500, url: 'https://shopee.vn/product/127805122/28935215038' },
          { n: 'Bút Màu Acrylic Marker 12-60 màu', br: 'Smartkids', ch: 'shopee', pr: 29000, fm: '12-60 Colors', rv: 254500000, g: -17, us: 8000, ug: -28, tr: 3000000000, tu: 110300, re: 110340, url: 'https://shopee.vn/product/807547610/25808745119' },
          { n: 'Bút Màu Acrylic Đầu Lông Mềm', br: 'Bossee', ch: 'tiktok', pr: 85000, fm: 'Lông mềm', rv: 253200000, g: -1, us: 2900, ug: -26, tr: 532100000, tu: 7300, re: 7321, url: 'https://www.tiktok.com/view/product/1732304016722593668' },
          { n: 'Hộp 80 màu Acrylic Marker Deli (Live)', br: 'Deli', ch: 'tiktok', pr: 149000, fm: 'Set 80', rv: 252900000, g: -24, us: 1500, ug: -30, tr: 972200000, tu: 5500, re: 5555, url: 'https://www.tiktok.com/view/product/1731117528939268735' },
          { n: 'Mã 40K LIVE Bút Sơn Acrylic Deli', br: 'Deli', ch: 'shopee', pr: 40000, fm: 'Acrylic', rv: 234600000, g: 129, us: 5600, ug: -30, tr: 1300000000, tu: 83900, re: 83900, url: 'https://shopee.vn/product/348955539/25215129183' },
          { n: 'Tặng 2 4 6 màu Acrylic Markers Colokit', br: 'Colokit', ch: 'shopee', pr: 48500, fm: 'Acrylic', rv: 210900000, g: -27, us: 4400, ug: -23, tr: 531300000, tu: 10800, re: 10879, url: 'https://shopee.vn/product/101480242/44467560697' }
        ]
      },

      long_mt: {
        gross: { cur: 3, pre: 2.3, g: 33 },
        units: { cur: 58500, pre: 46500, g: 26 },
        stores: { cur: 386, pre: 479, g: -19 },
        plat: { shopee: [1.7, 1.53], tiktok: [1.3, 0.677], lazada: [0.0191, 0.07] },
        brand: [['Colokit', 2.208, 1.8653], ['Deli', 0.174, 0.0506], ['Enmy', 0.087, null], ['Bossee', 0.036, null], ['Classmate', 0.03, 0.0115]],
        price: { '10K-30K': 0.369, '30K-50K': 1.245, '50K-75K': 0.392, '75K-100K': 0.267, '100K-150K': 0.452, '150K-200K': 0.139, '200K-350K': 0.142 },
        prod: [
          { n: 'Bút lông Fiber Pen Morandi (Mã 1)', br: 'Thiên Long', ch: 'tiktok', pr: 35000, fm: 'Morandi', rv: 431700000, g: -25, us: 9000, ug: -46, tr: 1200000000, tu: 35400, re: 3865, url: 'https://www.tiktok.com/view/product/1732234717911157753' },
          { n: 'Hộp Bút Lông 48 60 Màu Washable (Mã 1)', br: 'Thiên Long', ch: 'tiktok', pr: 125000, fm: 'Washable', rv: 287100000, g: 310, us: 1800, ug: 256, tr: 366000000, tu: 2400, re: 283, url: 'https://www.tiktok.com/view/product/1732761890580236281' },
          { n: 'Bút lông Fiber Pen Colokit (Có thể rửa)', br: 'Thiên Long', ch: 'shopee', pr: 48000, fm: 'Fiber Pen', rv: 163000000, g: -20, us: 3800, ug: -14, tr: 4800000000, tu: 97200, re: 30740, url: 'https://shopee.vn/product/101480242/8327433608' },
          { n: 'Bút lông Fiber Pen Morandi (Mã 2)', br: 'Thiên Long', ch: 'shopee', pr: 35000, fm: 'Morandi', rv: 155400000, g: -17, us: 6700, ug: 3, tr: 625000000, tu: 23400, re: 5785, url: 'https://shopee.vn/product/101480242/29931655506' },
          { n: 'Bộ Bút Lông 20 36 Màu Rửa Được', br: 'Thiên Long', ch: 'tiktok', pr: 65000, fm: 'Washable', rv: 140600000, g: -38, us: 2600, ug: -45, tr: 585500000, tu: 12300, re: 1352, url: 'https://www.tiktok.com/view/product/1729549833724529657' },
          { n: 'Bút lông màu Acrylic Markers 2 đầu', br: 'Thiên Long', ch: 'shopee', pr: 185000, fm: 'Acrylic', rv: 102300000, g: -36, us: 1100, ug: -44, tr: 866100000, tu: 10000, re: 2238, url: 'https://shopee.vn/product/101480242/29703771630' },
          { n: 'Bút lông màu Felt Pen Deli', br: 'Deli', ch: 'tiktok', pr: 45000, fm: 'Felt Pen', rv: 95700000, g: -26, us: 1800, ug: -33, tr: 441900000, tu: 8700, re: 1065, url: 'https://www.tiktok.com/view/product/1731283592261502591' },
          { n: 'Hộp Bút Lông 48 60 Màu Washable (Mã 2)', br: 'Thiên Long', ch: 'shopee', pr: 125000, fm: 'Washable', rv: 93200000, g: 600, us: 601, ug: 615, tr: 106500000, tu: 685, re: 189, url: 'https://shopee.vn/product/101480242/40172986410' },
          { n: 'COD ENMY Enmy Acrylic Bút Lông', br: 'Enmy', ch: 'shopee', pr: 245000, fm: 'Acrylic', rv: 86600000, g: 135, us: 334, ug: 115, tr: 148200000, tu: 609, re: 130, url: 'https://shopee.vn/product/1530752783/43860217946' },
          { n: 'Bút lông màu Fiber Pen Colokit 20 36', br: 'Thiên Long', ch: 'shopee', pr: 42000, fm: 'Fiber Pen', rv: 82600000, g: -17, us: 1600, ug: -20, tr: 1400000000, tu: 29000, re: 9549, url: 'https://shopee.vn/product/368671137/21176193704' }
        ]
      },

      chi_mau: {
        gross: { cur: 6.7, pre: 4.5, g: 47 },
        units: { cur: 89000, pre: 89400, g: 0 },
        stores: { cur: 968, pre: 950, g: 2 },
        plat: { shopee: [3.6, 2.98], tiktok: [3, 1.37], lazada: [0.0499, 0.161] },
        brand: [['Global Art', 2.7939, 0.4005], ['Deli', 2.6398, 2.169], ['Gia Hưng', 0.5025, 0.1125], ['Finenolo', 0.2345, 0.3195], ['Colokit', 0.1742, 0.0405]],
        price: { '< 10K': 0.129, '10K-30K': 0.712, '30K-50K': 0.514, '50K-75K': 0.45, '75K-100K': 0.34, '100K-150K': 1.061, '150K-200K': 0.834, '200K-350K': 2.396, '350K-500K': 0.106, '500K-750K': 0.073 },
        prod: [
          { n: 'Hộp Bút Chì Màu Gốc Dầu Global Art (Mã 1)', br: 'Global Art', ch: 'tiktok', pr: 318000, fm: 'Gốc dầu', rv: 1100000000, g: 53, us: 3500, ug: 31, tr: 3000000000, tu: 11000, re: 1221, url: 'https://www.tiktok.com/view/product/1730350149081336202' },
          { n: 'Bút Chì Màu Gốc Dầu Global Art (Hộp thiếc)', br: 'Global Art', ch: 'shopee', pr: 250000, fm: 'Hộp thiếc', rv: 511200000, g: -22, us: 2200, ug: -18, tr: 2300000000, tu: 10900, re: 3077, url: 'https://shopee.vn/product/1224175038/26150549051' },
          { n: 'Bút Chì Màu Gốc Dầu Gốc Nước Deli', br: 'Deli', ch: 'shopee', pr: 118000, fm: 'Dầu/Nước', rv: 251400000, g: -18, us: 1700, ug: -15, tr: 2000000000, tu: 15300, re: 3771, url: 'https://shopee.vn/product/348955539/15498058138' },
          { n: 'Bộ Bút chì màu Finenolo x Deli (Tặng quà)', br: 'Finenolo', ch: 'shopee', pr: 189000, fm: 'Set', rv: 239400000, g: -13, us: 1200, ug: -30, tr: 1200000000, tu: 15400, re: 1837, url: 'https://www.tiktok.com/view/product/1729561816511187583' },
          { n: 'Bộ Bút Chì Màu Sáp 48-120 Màu Gia Hưng', br: 'Gia Hưng', ch: 'tiktok', pr: 151000, fm: 'Sáp', rv: 194300000, g: 229, us: 1200, ug: 229, tr: 587400000, tu: 4600, re: 731, url: 'https://www.tiktok.com/view/product/1729607695017478457' },
          { n: 'Bút Chì Màu Gốc Dầu Finenolo (Giảm 31K)', br: 'Finenolo', ch: 'shopee', pr: 96000, fm: 'Gốc dầu', rv: 176000000, g: 7, us: 1500, ug: 14, tr: 1800000000, tu: 14900, re: 4215, url: 'https://shopee.vn/product/884990462/16597346699' },
          { n: 'Bút Chì Màu Gốc Dầu Global Art (Mã 2)', br: 'Global Art', ch: 'tiktok', pr: 253000, fm: 'Gốc dầu', rv: 174500000, g: 333, us: 735, ug: 318, tr: 214800000, tu: 911, re: 211, url: 'https://shopee.vn/product/1647865670/27642641820' },
          { n: '72 MÀU Bút Chì Màu Gốc Dầu Deli', br: 'Deli', ch: 'shopee', pr: 107000, fm: '72 Màu', rv: 160200000, g: -20, us: 1100, ug: -4, tr: 1400000000, tu: 10400, re: 2951, url: 'https://shopee.vn/product/127805122/23000300409' },
          { n: 'Bộ Bút Chì Màu 48-120 Cây Gia Hưng', br: 'Gia Hưng', ch: 'tiktok', pr: 151000, fm: 'Set', rv: 128800000, g: 140, us: 785, ug: 121, tr: 283800000, tu: 1800, re: 240, url: 'https://www.tiktok.com/view/product/1732247417957681885' },
          { n: 'Bút Chì Màu Gốc Dầu Gốc Nước Deli (TOP 1)', br: 'Deli', ch: 'shopee', pr: 129000, fm: 'TOP 1', rv: 110600000, g: -38, us: 720, ug: -40, tr: 4700000000, tu: 41200, re: 15912, url: 'https://shopee.vn/product/127805122/4531417577' }
        ]
      }
    },
    van_phong_pham: {
      all: {
        gross: { cur: 135.9, pre: 91.2, g: 49 },
        units: { cur: 3300000, pre: 3700000, g: -11 },
        stores: { cur: 11700, pre: 12300, g: -5 },
        plat: { shopee: [96.6, 68.5], tiktok: [37.8, 18.7], lazada: [1.5, 3.95] },
        brand: [['IK Copy', 16.0362, 7.296], ['Deli', 13.0464, 3.2832], ['Thiên Long', 7.4745, 3.648], ['Hồng Hà', 3.9411, 0.0912], ['America Tape', 1.6308, 1.368]],
        price: { '< 10K': 3.68, '10K-30K': 26.57, '30K-50K': 18.4, '50K-75K': 14.92, '75K-100K': 18.72, '100K-150K': 10.12, '150K-200K': 8.96, '200K-350K': 7.44, '350K-500K': 17.77, '500K-750K': 4.82, '750K-1.0M': 3.34, '1.0M-1.5M': 0.43, '1.5M-2.0M': 0.34, '2M-3.5M': 0.31 },
        prod: [
          { n: 'Combo 5 ream Giấy IK Copy 70gsm', br: 'IK Copy', ch: 'shopee', pr: 408500, fm: '5 ream', rv: 2500000000, g: 7, us: 6800, ug: -1, tr: 23000000000, tu: 70200, re: 15994, url: 'https://shopee.vn/product/101480242/16794017668' },
          { n: '10 ream Giấy A4 IK Copy 70gsm', br: 'IK Copy', ch: 'shopee', pr: 817000, fm: '10 ream', rv: 1800000000, g: 14, us: 2300, ug: 6, tr: 8200000000, tu: 12000, re: 2950, url: 'https://shopee.vn/product/101480242/10499808000' },
          { n: 'Băng Keo Trong Đục 4.8cm (Cây 6)', br: 'OEM', ch: 'shopee', pr: 80000, fm: 'Cây 6', rv: 1600000000, g: -15, us: 37800, ug: -26, tr: 18400000000, tu: 440200, re: 28254, url: 'https://shopee.vn/product/242520587/18320575698' },
          { n: 'Combo 10 ream Giấy IK Copy 80gsm', br: 'IK Copy', ch: 'shopee', pr: 709000, fm: '10 ream', rv: 1400000000, g: 28, us: 2100, ug: 25, tr: 4600000000, tu: 6900, re: 1505, url: 'https://shopee.vn/product/368671137/23940020482' },
          { n: 'Voucher Live Thùng 5-10 ream Giấy Deli', br: 'Deli', ch: 'shopee', pr: 375000, fm: 'Thùng', rv: 1300000000, g: -53, us: 3700, ug: -60, tr: 7600000000, tu: 30800, re: 6256, url: 'https://shopee.vn/product/127805122/29227911732' },
          { n: 'Combo 10 ream Giấy IK Copy 70gsm (MT)', br: 'IK Copy', ch: 'shopee', pr: 725000, fm: '10 ream', rv: 1200000000, g: 145, us: 1700, ug: 128, tr: 5600000000, tu: 8400, re: 2309, url: 'https://shopee.vn/product/367619913/23630511462' },
          { n: 'Mã 60K Live Combo 5 ream Giấy Deli', br: 'Deli', ch: 'shopee', pr: 375000, fm: '5 ream', rv: 1200000000, g: -17, us: 3300, ug: -32, tr: 4600000000, tu: 18300, re: 3473, url: 'https://shopee.vn/product/348955539/28678999911' },
          { n: 'Giấy A4 Deli - 500 tờ (Bán lẻ)', br: 'Deli', ch: 'tiktok', pr: 75000, fm: '500 tờ', rv: 1100000000, g: 144, us: 14400, ug: 119, tr: 2500000000, tu: 34000, re: 1945, url: 'https://www.tiktok.com/view/product/1731968576949684863' },
          { n: 'Combo 5 ream Giấy IK Copy Plus 80gsm', br: 'IK Copy', ch: 'shopee', pr: 354000, fm: '5 ream', rv: 1000000000, g: -12, us: 2900, ug: -18, tr: 9000000000, tu: 27700, re: 6548, url: 'https://shopee.vn/product/368671137/23228967167' },
          { n: 'Combo 5 ream Giấy IK Copy 80gsm (MT)', br: 'IK Copy', ch: 'shopee', pr: 354000, fm: '5 ream', rv: 960500000, g: 35, us: 2700, ug: 27, tr: 9800000000, tu: 30500, re: 7798, url: 'https://shopee.vn/product/367619913/21772657261' }
        ]
      },

      da_quang: {
        gross: { cur: 3, pre: 2.3, g: 33 },
        units: { cur: 149300, pre: 209200, g: -29 },
        stores: { cur: 1100, pre: 1300, g: -19 },
        plat: { shopee: [2.1, 1.81], tiktok: [0.8793, 0.401], lazada: [0.0476, 0.066] },
        brand: [['Deli', 0.489, 0.3128], ['Bossee', 0.3, null], ['Thiên Long', 0.285, 0.1449], ['Mcbooks', 0.087, 0.0644], ['Stabilo', 0.045, 0.0414]],
        price: { '< 10K': 0.484, '10K-30K': 1.014, '30K-50K': 0.851, '50K-75K': 0.389, '75K-100K': 0.053, '100K-150K': 0.167 },
        prod: [
          { n: 'Bút Highlight Pastel đủ 6 màu (Mã 1)', br: 'Bossee', ch: 'tiktok', pr: 32000, fm: 'Pastel', rv: 215000000, g: -1, us: 6700, ug: -13, tr: 472000000, tu: 16000, re: 1132, url: 'https://www.tiktok.com/view/product/1732230778223233811' },
          { n: 'Bút Nhũ Kim Tuyến Lấp Lánh 12 Màu', br: 'OEM', ch: 'tiktok', pr: 51000, fm: 'Set 12', rv: 119400000, g: 530, us: 2200, ug: 448, tr: 154500000, tu: 2900, re: 85, url: 'https://www.tiktok.com/view/product/1733191836290548787' },
          { n: 'Bút đánh dấu highlight bút nhớ (Mcbooks)', br: 'Mcbooks', ch: 'shopee', pr: 25000, fm: 'Mcbooks', rv: 82600000, g: 53, us: 3300, ug: 83, tr: 1000000000, tu: 83400, re: 23559, url: 'https://shopee.vn/product/272432350/12357840047' },
          { n: 'Full màu Bút Highlight Deli (Mã 1)', br: 'Deli', ch: 'shopee', pr: 6000, fm: 'Deli', rv: 78400000, g: -26, us: 9500, ug: -25, tr: 731200000, tu: 116400, re: 11386, url: 'https://shopee.vn/product/348955539/9286931469' },
          { n: 'Bút Highlight Deli 25 màu (Mã 2)', br: 'Deli', ch: 'shopee', pr: 9000, fm: '25 màu', rv: 77800000, g: -15, us: 9400, ug: -36, tr: 1100000000, tu: 201700, re: 26797, url: 'https://shopee.vn/product/127805122/11115991321' },
          { n: 'Bút Highlight Pastel đủ 6 màu (Mã 2)', br: 'Bossee', ch: 'shopee', pr: 32000, fm: 'Pastel', rv: 57500000, g: 98, us: 1900, ug: 81, tr: 111800000, tu: 4500, re: 752, url: 'https://shopee.vn/product/1366221078/26317103425' },
          { n: 'Set 5 Bút Highlight 2 Đầu M.Y', br: 'OEM', ch: 'tiktok', pr: 29000, fm: 'Set 5', rv: 53200000, g: 559, us: 1800, ug: 488, tr: 70200000, tu: 2400, re: 113, url: 'https://www.tiktok.com/view/product/1732952252567618858' },
          { n: 'Một bút dạ quang tặng một sổ tay', br: 'OEM', ch: 'tiktok', pr: 125000, fm: 'Combo', rv: 51100000, g: -25, us: 387, ug: -30, tr: 201300000, tu: 1600, re: 141, url: 'https://www.tiktok.com/view/product/1731718202861782716' },
          { n: 'Bút highlight màu macaron Deli', br: 'Deli', ch: 'shopee', pr: 8000, fm: 'Macaron', rv: 40200000, g: -1, us: 4900, ug: 2, tr: 233800000, tu: 35600, re: 4177, url: 'https://shopee.vn/product/127805122/24568758870' },
          { n: 'Set Bút Dạ Quang bút nhớ 4 màu', br: 'OEM', ch: 'shopee', pr: 20000, fm: 'Set 4', rv: 39900000, g: -54, us: 2000, ug: -63, tr: 681500000, tu: 48100, re: 12722, url: 'https://shopee.vn/product/19717279/23914151150' }
        ]
      },

      long_dau: {
        gross: { cur: 4.8, pre: 4.3, g: 12 },
        units: { cur: 137100, pre: 224300, g: -39 },
        stores: { cur: 1100, pre: 1200, g: -9 },
        plat: { shopee: [2.7, 2.39], tiktok: [2, 1.67], lazada: [0.075, 0.192] },
        brand: [['Thiên Long', 1.5984, 0.9546], ['Leyue', 0.5424, null], ['G-Star', 0.1632, 0.129], ['Deli', 0.0768, 0.0731], ['Artline', 0.0576, 0.0903]],
        price: { '< 10K': 0.193, '10K-30K': 0.861, '30K-50K': 0.897, '50K-75K': 1.811, '75K-100K': 0.372, '100K-150K': 0.445, '150K-200K': 0.099, '200K-350K': 0.07, '350K-500K': 0.01 },
        prod: [
          { n: 'Combo 10 cây bút lông dầu trắng (DUC SHOP)', br: 'OEM', ch: 'tiktok', pr: 69000, fm: 'Combo 10', rv: 538400000, g: null, us: 7600, ug: null, tr: 550500000, tu: 7800, re: 176, url: 'https://www.tiktok.com/view/product/1733890170414531648' },
          { n: 'Combo 5-10-20 Thiên Long PM-04', br: 'Thiên Long', ch: 'shopee', pr: 51000, fm: 'PM-04', rv: 367600000, g: 19, us: 6800, ug: 6, tr: 1500000000, tu: 30700, re: 4360, url: 'https://shopee.vn/product/101480242/23576151442' },
          { n: 'Combo 5-10-20 Thiên Long PM-09', br: 'Thiên Long', ch: 'shopee', pr: 54000, fm: 'PM-09', rv: 248100000, g: 35, us: 4400, ug: 22, tr: 958100000, tu: 18000, re: 2404, url: 'https://shopee.vn/product/101480242/22050668198' },
          { n: 'Combo 10 cây bút lông dầu trắng (Minh Tuấn)', br: 'OEM', ch: 'tiktok', pr: 64000, fm: 'Combo 10', rv: 185300000, g: 2483, us: 3000, ug: 1558, tr: 210900000, tu: 3500, re: 134, url: 'https://www.tiktok.com/view/product/1733562689888421193' },
          { n: 'Combo 3 hộp 30 chiếc bút lông dầu đầu kim', br: 'OEM', ch: 'tiktok', pr: 135000, fm: 'Combo 30', rv: 145500000, g: -44, us: 1300, ug: -56, tr: 2900000000, tu: 35500, re: 1662, url: 'https://www.tiktok.com/view/product/1730844958738057785' },
          { n: 'Combo 10-30-50 Thiên Long Đầu To', br: 'Thiên Long', ch: 'tiktok', pr: 55000, fm: 'PM-Lớn', rv: 119400000, g: -61, us: 2300, ug: -66, tr: 616000000, tu: 13500, re: 546, url: 'https://www.tiktok.com/view/product/1732144720901474385' },
          { n: 'Combo Bút lông dầu Thiên Long PM-04 (Lớn)', br: 'Thiên Long', ch: 'shopee', pr: 98000, fm: 'PM-04', rv: 108200000, g: -41, us: 1100, ug: -40, tr: 1200000000, tu: 14000, re: 1430, url: 'https://shopee.vn/product/368671137/13249566333' },
          { n: 'Combo 10 Bút lông dầu Thiên Long PM-09', br: 'Thiên Long', ch: 'shopee', pr: 109000, fm: 'PM-09', rv: 69500000, g: -33, us: 668, ug: -28, tr: 393500000, tu: 4000, re: 356, url: 'https://shopee.vn/product/367619913/15701574737' },
          { n: 'Bút Lông Dầu Không Phai (Bán lẻ)', br: 'OEM', ch: 'tiktok', pr: 7000, fm: 'Lẻ', rv: 65200000, g: -24, us: 8600, ug: -56, tr: 170700000, tu: 34400, re: 2931, url: 'https://www.tiktok.com/view/product/1731889030779405591' },
          { n: 'Combo 30-50 Bút Lông Dầu TL Đầu Kim', br: 'Thiên Long', ch: 'tiktok', pr: 150000, fm: 'PM-Kim', rv: 64100000, g: -18, us: 506, ug: -41, tr: 241600000, tu: 2500, re: 128, url: 'https://www.tiktok.com/view/product/1732146962376591441' }
        ]
      },

      long_bang: {
        gross: { cur: 3.1, pre: 2.4, g: 31 },
        units: { cur: 106500, pre: 177900, g: -40 },
        stores: { cur: 619, pre: 760, g: -19 },
        plat: { shopee: [2.6, 1.94], tiktok: [0.421, 0.24], lazada: [0.0696, 0.174] },
        brand: [['Thiên Long', 1.8011, 1.1952], ['Deli', 0.1953, 0.2736], ['Gxin', 0.0527, null], ['Thiên An', 0.0465, 0.0264], ['Adiva', 0.0341, null]],
        price: { '< 10K': 0.165, '10K-30K': 0.712, '30K-50K': 1.021, '50K-75K': 0.27, '75K-100K': 0.553, '100K-150K': 0.177, '150K-200K': 0.07, '200K-350K': 0.07 },
        prod: [
          { n: 'Combo Bút lông bảng Thiên Long WB-03', br: 'Thiên Long', ch: 'shopee', pr: 81000, fm: 'Combo', rv: 334000000, g: 81, us: 4500, ug: 104, tr: 1200000000, tu: 16900, re: 1825, url: 'https://shopee.vn/product/368671137/5576960676' },
          { n: 'Combo 5-10-20 Bút lông bảng WB-03 (Xanh Đỏ)', br: 'Thiên Long', ch: 'shopee', pr: 35000, fm: 'WB-03', rv: 261000000, g: 10, us: 6200, ug: 6, tr: 1100000000, tu: 27900, re: 4030, url: 'https://shopee.vn/product/101480242/23576151446' },
          { n: 'Bút lông bảng Hoshi Thiên Long WB-025', br: 'Thiên Long', ch: 'shopee', pr: 13000, fm: 'WB-025', rv: 170800000, g: -39, us: 12800, ug: -36, tr: 838900000, tu: 64000, re: 6593, url: 'https://shopee.vn/product/101480242/29970555826' },
          { n: 'Combo 5-10-20 Bút dạ viết bảng WB-03', br: 'Thiên Long', ch: 'shopee', pr: 40000, fm: 'WB-03', rv: 157600000, g: -39, us: 3800, ug: -42, tr: 2500000000, tu: 46000, re: 5313, url: 'https://shopee.vn/product/367619913/15326547530' },
          { n: 'Combo 5-10-20 Flexoffice FO-WB02', br: 'Thiên Long', ch: 'shopee', pr: 36000, fm: 'FO-WB02', rv: 84000000, g: 87, us: 1900, ug: 41, tr: 225400000, tu: 7100, re: 842, url: 'https://shopee.vn/product/101480242/22347224257' },
          { n: 'Hộp 10 Bút lông bảng WB-03 (Lẻ thùng)', br: 'Thiên Long', ch: 'shopee', pr: 91000, fm: 'Hộp 10', rv: 59500000, g: -51, us: 662, ug: -54, tr: 979700000, tu: 12400, re: 1732, url: 'https://shopee.vn/product/101480242/1673217775' },
          { n: 'Bút lông bảng xóa được Thiên Long WB-03 (Lẻ)', br: 'Thiên Long', ch: 'shopee', pr: 9000, fm: 'Lẻ', rv: 56500000, g: -31, us: 6300, ug: -32, tr: 1100000000, tu: 134700, re: 134682, url: 'https://shopee.vn/product/101480242/1635050528' },
          { n: 'Combo 10 Bút lông bảng Hoshi WB-025', br: 'Thiên Long', ch: 'shopee', pr: 136000, fm: 'WB-025', rv: 51100000, g: 5, us: 389, ug: 5, tr: 133500000, tu: 1100, re: 144, url: 'https://shopee.vn/product/101480242/29970555771' },
          { n: 'Bút lông bảng Hoshi WB-025 (Công nghệ Nhật)', br: 'Thiên Long', ch: 'shopee', pr: 25000, fm: 'Hoshi', rv: 49700000, g: -72, us: 2600, ug: -63, tr: 227200000, tu: 9700, re: 679, url: 'https://shopee.vn/product/367619913/55600034017' },
          { n: 'Combo 5-10-20 Bút Lông Bảng DELI', br: 'Deli', ch: 'shopee', pr: 40000, fm: 'Deli', rv: 49200000, g: -15, us: 1100, ug: -28, tr: 368400000, tu: 11600, re: 1474, url: 'https://shopee.vn/product/127805122/25724132256' }
        ]
      },

      xoa_nuoc: {
        gross: { cur: 1.2, pre: 0.8804, g: 39 },
        units: { cur: 50800, pre: 52000, g: -2 },
        stores: { cur: 563, pre: 669, g: -16 },
        plat: { shopee: [0.8898, 0.622], tiktok: [0.2941, 0.207], lazada: [0.0364, 0.052] },
        brand: [['Thiên Long', 0.5496, 0.3011], ['Deli', 0.0384, 0.0308], ['Besta', 0.036, null], ['Plus', 0.0144, 0.007], ['King', 0.0144, 0.0141]],
        price: { '< 10K': 0.063, '10K-30K': 0.708, '30K-50K': 0.094, '50K-75K': 0.161, '75K-100K': 0.099, '100K-150K': 0.02, '150K-200K': 0.068, '200K-350K': 0.005 },
        prod: [
          { n: 'Bút xóa nước Thiên Long CP-02 (Mã 1)', br: 'Thiên Long', ch: 'shopee', pr: 25000, fm: 'CP-02', rv: 254700000, g: -39, us: 10400, ug: -43, tr: 1700000000, tu: 79000, re: 8043, url: 'https://shopee.vn/product/101480242/1635050758' },
          { n: 'Bút xóa Thiên Long CP-02 (Mã 2)', br: 'Thiên Long', ch: 'shopee', pr: 25000, fm: 'CP-02', rv: 72300000, g: 4, us: 2900, ug: -1, tr: 329800000, tu: 15100, re: 1777, url: 'https://shopee.vn/product/368671137/23081877413' },
          { n: 'Bút xóa dạng bấm xoay 360 độ M.Y', br: 'OEM', ch: 'tiktok', pr: 14000, fm: 'Xoay 360', rv: 58800000, g: 251, us: 4000, ug: 232, tr: 78600000, tu: 5400, re: 373, url: 'https://www.tiktok.com/view/product/1732910021645272362' },
          { n: 'Bút xóa Thiên Long CP-05 (Thân trụ)', br: 'Thiên Long', ch: 'shopee', pr: 15000, fm: 'CP-05', rv: 36500000, g: 35, us: 2400, ug: 34, tr: 127700000, tu: 8100, re: 1033, url: 'https://shopee.vn/product/101480242/1635050763' },
          { n: 'Bút xóa nước Besta CP-01', br: 'Besta', ch: 'shopee', pr: 9000, fm: 'CP-01', rv: 36000000, g: 59, us: 4000, ug: 67, tr: 89700000, tu: 9700, re: 1927, url: 'https://shopee.vn/product/946543924/18389263613' },
          { n: 'Sỉ 12 cây bút xóa nước Yoto CP08', br: 'Yoto', ch: 'shopee', pr: 67000, fm: 'Hộp 12', rv: 34300000, g: -32, us: 543, ug: -38, tr: 192900000, tu: 3700, re: 663, url: 'https://shopee.vn/product/24781091/20994842389' },
          { n: 'Hộp 10 Bút xóa nước Thiên Long', br: 'Thiên Long', ch: 'tiktok', pr: 84000, fm: 'Hộp 10', rv: 25400000, g: null, us: 302, ug: null, tr: 25400000, tu: 302, re: 18, url: 'https://www.tiktok.com/view/product/1734011599075313581' },
          { n: '10 Bút xóa nước Thiên Long nhanh khô', br: 'Thiên Long', ch: 'shopee', pr: 80000, fm: '10 cây', rv: 25000000, g: 195, us: 323, ug: 194, tr: 33500000, tu: 433, re: 28, url: 'https://shopee.vn/product/1473624456/45152286579' },
          { n: 'Combo 10 Bút xóa nước Thiên Long CP-02', br: 'Thiên Long', ch: 'shopee', pr: 191000, fm: 'CP-02', rv: 25000000, g: 15, us: 126, ug: 4, tr: 80500000, tu: 410, re: 97, url: 'https://www.lazada.vn/products/thien-long-van-phong-pham-i2598473689.html' },
          { n: 'Bút xóa nước rẻ CP08 (Hộp 12 cây)', br: 'OEM', ch: 'shopee', pr: 60000, fm: 'Hộp 12', rv: 22900000, g: -18, us: 382, ug: -22, tr: 282500000, tu: 7600, re: 1410, url: 'https://shopee.vn/product/204094877/17481153691' }
        ]
      },

      file_folder: {
        gross: { cur: 9.1, pre: 6.2, g: 46 },
        units: { cur: 258000, pre: 298500, g: -14 },
        stores: { cur: 1300, pre: 1400, g: -8 },
        plat: { shopee: [6.6, 5.37], tiktok: [2.4, 0.65], lazada: [0.1282, 0.217] },
        brand: [['Deli', 1.3013, 1.0168], ['Flexoffice', 0.4004, 0.2542], ['Decorme', 0.2548, null], ['Knote', 0.182, null], ['Plus', 0.1729, 0.2046]],
        price: { '< 10K': 0.093, '10K-30K': 2.216, '30K-50K': 3.76, '50K-75K': 1.305, '75K-100K': 0.696, '100K-150K': 0.53, '150K-200K': 0.31, '200K-350K': 0.104, '350K-500K': 0.055, '500K-750K': 0.022, '750K-1.0M': 0.01, '1.0M-1.5M': 0.012 },
        prod: [
          { n: 'File Lá Đa Năng Deli (Lưu ảnh/giấy)', br: 'Deli', ch: 'shopee', pr: 39000, fm: 'Đa năng', rv: 844200000, g: 64, us: 20000, ug: 51, tr: 7600000000, tu: 219300, re: 15314, url: 'https://www.tiktok.com/view/product/1729454663877888639' },
          { n: 'Bìa kẹp tài liệu da A4 (DecorMe)', br: 'Decorme', ch: 'tiktok', pr: 140000, fm: 'Da A4', rv: 220300000, g: 1223, us: 1600, ug: 1268, tr: 248400000, tu: 1800, re: 61, url: 'https://www.tiktok.com/view/product/1729695118761429492' },
          { n: 'File lá đựng tài liệu KNOTE (100 lá)', br: 'Knote', ch: 'shopee', pr: 59000, fm: '100 lá', rv: 175900000, g: -33, us: 3000, ug: -38, tr: 909100000, tu: 18000, re: 2315, url: 'https://shopee.vn/product/1426030880/26172006082' },
          { n: 'Túi đựng hồ sơ hoạt hình (MIGE HOME)', br: 'OEM', ch: 'tiktok', pr: 52000, fm: 'Hoạt hình', rv: 164700000, g: 299, us: 4000, ug: 212, tr: 235400000, tu: 6100, re: 308, url: 'https://www.tiktok.com/view/product/1732263026713461931' },
          { n: 'Tập 100 túi sơ mi lỗ A4 (MIYABI)', br: 'OEM', ch: 'shopee', pr: 41000, fm: '100 túi', rv: 138900000, g: 3, us: 3500, ug: 0, tr: 689900000, tu: 19900, re: 2185, url: 'https://shopee.vn/product/38778987/1909033407' },
          { n: 'Bìa còng A4 lưu trữ hồ sơ (MIYABI)', br: 'OEM', ch: 'shopee', pr: 35000, fm: 'Bìa còng', rv: 120700000, g: 94, us: 3400, ug: 93, tr: 637400000, tu: 26300, re: 1352, url: 'https://shopee.vn/product/38778987/1609419730' },
          { n: 'File lá đựng tài liệu QPENZ (100 lá)', br: 'Qpenz', ch: 'tiktok', pr: 79000, fm: '100 lá', rv: 103200000, g: -6, us: 1200, ug: -10, tr: 217300000, tu: 2700, re: 131, url: 'https://www.tiktok.com/view/product/1732643968477464269' },
          { n: 'Xấp 100 bìa lá A4 Plus', br: 'Plus', ch: 'shopee', pr: 160000, fm: '100 bìa', rv: 95100000, g: -22, us: 596, ug: -22, tr: 811800000, tu: 5500, re: 734, url: 'https://shopee.vn/product/14668875/4934838718' },
          { n: 'Túi đựng tài liệu nhiều ngăn M.Y', br: 'M.Y', ch: 'shopee', pr: 22000, fm: 'Nhiều ngăn', rv: 94100000, g: -11, us: 4200, ug: 12, tr: 222800000, tu: 8900, re: 1810, url: 'https://shopee.vn/product/1451947204/40606966998' },
          { n: 'Bìa lỗ 320g (Giấy in Hải Hà)', br: 'OEM', ch: 'shopee', pr: 32000, fm: '320g', rv: 93900000, g: 18, us: 3300, ug: 12, tr: 539500000, tu: 21200, re: 2024, url: 'https://shopee.vn/product/14668875/2044884400' }
        ]
      },

      giay_copy: {
        gross: { cur: 32.6, pre: 19.5, g: 67 },
        units: { cur: 233200, pre: 172000, g: 36 },
        stores: { cur: 729, pre: 763, g: -4 },
        plat: { shopee: [29.7, 16.1], tiktok: [2.5, 2.84], lazada: [0.3396, 0.478] },
        brand: [['IK Copy', 16.0718, 10.8225], ['Deli', 5.3138, 0.273], ['Thiên Long', 3.1296, 2.5545], ['Paper One', 1.4018, 0.702], ['Double A', 0.815, 0.546]],
        price: { '10K-30K': 0.973, '30K-50K': 1.016, '50K-75K': 2.315, '75K-100K': 4.226, '100K-150K': 1.086, '150K-200K': 0.312, '200K-350K': 2.193, '350K-500K': 13.883, '500K-750K': 3.841, '750K-1.0M': 2.526 },
        prod: [
          { n: 'Combo 5 ream Giấy IK Copy 70gsm', br: 'IK Copy', ch: 'shopee', pr: 408000, fm: '70gsm', rv: 2500000000, g: 7, us: 6800, ug: -1, tr: 23000000000, tu: 70200, re: 15994, url: 'https://shopee.vn/product/101480242/16794017668' },
          { n: '10 ream Giấy A4 IK Copy 70gsm', br: 'IK Copy', ch: 'shopee', pr: 817000, fm: '70gsm', rv: 1800000000, g: 14, us: 2300, ug: 6, tr: 8200000000, tu: 12000, re: 2950, url: 'https://shopee.vn/product/101480242/10499808000' },
          { n: 'Combo 10 ream Giấy IK Copy 80gsm', br: 'IK Copy', ch: 'shopee', pr: 709000, fm: '80gsm', rv: 1400000000, g: 28, us: 2100, ug: 25, tr: 4600000000, tu: 6900, re: 1505, url: 'https://shopee.vn/product/368671137/23940020482' },
          { n: 'Voucher Live Thùng 5-10 ream Deli', br: 'Deli', ch: 'shopee', pr: 375000, fm: 'Thùng', rv: 1300000000, g: -53, us: 3700, ug: -60, tr: 7600000000, tu: 30800, re: 6256, url: 'https://shopee.vn/product/127805122/29227911732' },
          { n: 'Combo 10 ream Giấy IK Copy 70gsm (MT)', br: 'IK Copy', ch: 'shopee', pr: 725000, fm: '70gsm', rv: 1200000000, g: 145, us: 1700, ug: 128, tr: 5600000000, tu: 8400, re: 2309, url: 'https://shopee.vn/product/367619913/23630511462' },
          { n: 'Mã 60K Live Combo 5 ream Deli', br: 'Deli', ch: 'shopee', pr: 375000, fm: '5 ream', rv: 1200000000, g: -17, us: 3300, ug: -32, tr: 4600000000, tu: 18300, re: 3473, url: 'https://shopee.vn/product/348955539/28678999911' },
          { n: 'Combo 5 ream Giấy IK Copy Plus 80gsm', br: 'IK Copy', ch: 'shopee', pr: 354000, fm: '80gsm', rv: 1000000000, g: -12, us: 2900, ug: -18, tr: 9000000000, tu: 27700, re: 6548, url: 'https://shopee.vn/product/368671137/23228967167' },
          { n: 'Combo 5 ream Giấy IK Copy 80gsm (MT)', br: 'IK Copy', ch: 'shopee', pr: 354000, fm: '80gsm', rv: 960500000, g: 35, us: 2700, ug: 27, tr: 9800000000, tu: 30500, re: 7798, url: 'https://shopee.vn/product/367619913/21772657261' },
          { n: 'Giấy A4 500 tờ lẻ IK Copy 70gsm', br: 'IK Copy', ch: 'shopee', pr: 81000, fm: 'Lẻ', rv: 938600000, g: -30, us: 12200, ug: -36, tr: 7900000000, tu: 117100, re: 19484, url: 'https://shopee.vn/product/101480242/12922307639' },
          { n: 'Combo 5-10 thùng Giấy IK Copy Plus', br: 'IK Copy', ch: 'shopee', pr: 408000, fm: 'Thùng', rv: 803900000, g: 19, us: 1900, ug: 6, tr: 1600000000, tu: 4200, re: 852, url: 'https://shopee.vn/product/101480242/28336031353' }
        ]
      }
    }
  }
};

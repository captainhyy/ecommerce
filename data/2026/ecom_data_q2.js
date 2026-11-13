/* ===== DATA Q2 2026 — SỐ GỐC =====
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

ECOM_DATA.q2 = {
  period: { cur: 'Q2 2026', pre: 'Q2 2025', label: 'Strategic Report Q2 2026' },

  /* Theo tháng (tỷ, %). [] nếu chưa có. */
  monthly: [],

  cats: {
    but_viet: {
      all: {
        gross: { cur: 104.4, pre: 77, g: 36 },
        units: { cur: 3400000, pre: 5800000, g: -41 },
        stores: { cur: 6200, pre: 6300, g: -2 },
        plat: { shopee: [66, 48.18], tiktok: [37, 26.62], lazada: [1.3, 2.2] },
        brand: [['Thiên Long', 20.2536, 14.091], ['Deli', 12.1104, 8.008], ['Classmate', 2.9232, null], ['Bossee', 1.9836, null], ['G-Star', 1.9836, 1.925]],
        price: { '< 10K': 4.72, '10K-30K': 25.14, '30K-50K': 23.26, '50K-75K': 15.69, '75K-100K': 11.67, '100K-150K': 8.96, '150K-200K': 2.95, '200K-350K': 4.07, '350K-500K': 3.5, '500K-750K': 1.56, '750K-1M': 1.14, '1M-1.5M': 0.74, '1.5M-2M': 0.38, '2M-3.5M': 0.27, '3.5M-5M': 0.1, '5M-7.5M': 0.1, '7.5M-10M': 0.11, '10M-15M': 0.02 },
        prod: [
          { n: 'Combo 5 10 20 Bút gel Fasgel GEL-068', br: 'Thiên Long', ch: 'tiktok', pr: 31500, fm: 'Combo', rv: 1400000000, g: 4, us: 46600, ug: 9, tr: 3600000000, tu: 117800, re: 9239, url: 'https://www.tiktok.com/view/product/1732616810831906809' },
          { n: 'Combo 5 10 20 Bút bi màu pastel PRO 027 Thiên Long TL-105', br: 'Thiên Long', ch: 'tiktok', pr: 32200, fm: 'Combo', rv: 1200000000, g: -3, us: 32800, ug: 14, tr: 5900000000, tu: 194500, re: 15436, url: 'https://www.tiktok.com/view/product/1729758198371814393' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long Pro 027 TL-105 - 3 màu mực', br: 'Thiên Long', ch: 'shopee', pr: 30500, fm: 'Combo', rv: 838800000, g: -7, us: 28900, ug: -3, tr: 5000000000, tu: 185200, re: 35883, url: 'https://shopee.vn/product/101480242/21193760161' },
          { n: 'TẶNG NGÒI Bút Bi Nước Deli Viết Gel Bấm A575 Ngòi 0.5mm', br: 'Deli', ch: 'shopee', pr: 10000, fm: 'Single', rv: 721300000, g: 15, us: 83100, ug: 23, tr: 6700000000, tu: 2000000, re: 127796, url: 'https://shopee.vn/product/127805122/18109428728' },
          { n: 'DEAL SỐC 4K 1C Combo 5 10 20 Bút gel bấm ngòi ST 0.5mm', br: 'Deli', ch: 'tiktok', pr: 28800, fm: 'Combo', rv: 669000000, g: 18416, us: 23700, ug: 21844, tr: 685500000, tu: 25100, re: 1113, url: 'https://www.tiktok.com/view/product/1731593973247936127' },
          { n: 'Hộp 12 24 48 Cây Bút Gel Đầu Bấm King TR5 Aodemei 6119', br: 'Aodemei', ch: 'tiktok', pr: 58600, fm: 'Combo', rv: 541500000, g: 955, us: 10000, ug: 851, tr: 632000000, tu: 12200, re: 859, url: 'https://www.tiktok.com/view/product/1730185571302607719' },
          { n: 'Combo Bút Máy Gel FP34 Mực Nhanh Khô Viết Êm Trơn Ngòi', br: 'VPP. KINH BẮC', ch: 'tiktok', pr: 41200, fm: 'Combo', rv: 510400000, g: 27, us: 12900, ug: 30, tr: 1000000000, tu: 25400, re: 1609, url: 'https://www.tiktok.com/view/product/1733208624875865231' },
          { n: 'ẢNH THẬT SET 8 bút gel Cao Cấp DUDU ngòi 0.5mm mực xanh đen', br: 'DUDU', ch: 'tiktok', pr: 23400, fm: 'Combo', rv: 510300000, g: 1, us: 24400, ug: 0, tr: 1300000000, tu: 63900, re: 5235, url: 'https://www.tiktok.com/view/product/1732776664365893367' },
          { n: 'Combo 5 10 20 Bút gel Fasgel Thiên Long GEL-068', br: 'Thiên Long', ch: 'shopee', pr: 30000, fm: 'Combo', rv: 467300000, g: 4, us: 16900, ug: 7, tr: 1100000000, tu: 40900, re: 6985, url: 'https://shopee.vn/product/101480242/42170566678' },
          { n: 'Combo Bút bi Thiên Long Pro 027 TL-105 màu pastel ngòi 0.5mm', br: 'Thiên Long', ch: 'shopee', pr: 26000, fm: 'Combo', rv: 456800000, g: -18, us: 18100, ug: -7, tr: 2800000000, tu: 115200, re: 22089, url: 'https://shopee.vn/product/368671137/23577091247' }
        ]
      },

      but_bi: {
        gross: { cur: 29.7, pre: 23.7, g: 25 },
        units: { cur: 914800, pre: 1300000, g: -32 },
        stores: { cur: 3600, pre: 3700, g: -3 },
        plat: { shopee: [18.6, 15.5], tiktok: [10.5, 7.05], lazada: [0.62, 1.12] },
        brand: [['Thiên Long', 12.5037, 8.7927], ['Deli', 1.9008, 1.5405], ['G-Star', 0.9801, 0.8532], ['Flexoffice', 0.5643, null], ['Aihao', 0.3861, 0.7584]],
        price: { '< 10K': 0.78, '10K-30K': 7.71, '30K-50K': 6.41, '50K-75K': 3.96, '75K-100K': 4.51, '100K-150K': 3.48, '150K-200K': 0.9, '200K-350K': 0.94, '350K-500K': 0.11, '500K-750K': 0.22, '750K-1M': 0.48, '1M-1.5M': 0.08 },
        prod: [
          { n: 'Combo 5 10 20 Bút bi màu pastel PRO 027 Thiên Long TL-105', br: 'Thiên Long', ch: 'tiktok', pr: 32200, fm: 'Combo', rv: 1100000000, g: -20, us: 31600, ug: -7, tr: 5800000000, tu: 192200, re: 15436, url: 'https://www.tiktok.com/view/product/1729758198371814393' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long Pro 027 TL-105 - 3 màu mực', br: 'Thiên Long', ch: 'shopee', pr: 30500, fm: 'Combo', rv: 826900000, g: -7, us: 28500, ug: -3, tr: 4900000000, tu: 183000, re: 35588, url: 'https://shopee.vn/product/101480242/21193760161' },
          { n: 'Combo 20 Bút bi Thiên Long 027 Pro ngòi 0.5mm mực xanh đen', br: 'Thiên Long', ch: 'tiktok', pr: 109700, fm: 'Combo', rv: 478700000, g: -25, us: 4400, ug: -26, tr: 3000000000, tu: 31300, re: 2855, url: 'https://www.tiktok.com/view/product/1729758201010228217' },
          { n: 'Combo Bút bi Thiên Long Pro 027 TL-105 màu pastel ngòi 0.5mm', br: 'Thiên Long', ch: 'shopee', pr: 27000, fm: 'Combo', rv: 459700000, g: -26, us: 18200, ug: -17, tr: 2800000000, tu: 114700, re: 21965, url: 'https://shopee.vn/product/368671137/23577091247' },
          { n: 'Combo 20 Bút bi Thiên Long TL-027 ngòi 0.5mm - Bút bi viết 4 màu', br: 'Thiên Long', ch: 'shopee', pr: 94000, fm: 'Combo', rv: 395800000, g: 5, us: 4600, ug: 2, tr: 5300000000, tu: 79700, re: 14902, url: 'https://shopee.vn/product/368671137/16065421545' },
          { n: 'Combo 20 Bút bi Thiên Long 027 Pro ngòi 0.5mm mực xanh đen (160K)', br: 'Thiên Long', ch: 'shopee', pr: 160000, fm: 'Combo', rv: 371600000, g: 27, us: 3500, ug: 31, tr: 1400000000, tu: 13400, re: 2452, url: 'https://shopee.vn/product/101480242/22056666298' },
          { n: 'Hộp 12 24 48 Cây Bút Bi Bấm Todo Suyo Gstar Mực Xanh Ngòi 0.7mm', br: 'G-Star', ch: 'tiktok', pr: 105900, fm: 'Combo', rv: 342800000, g: 6, us: 3200, ug: 3, tr: 1300000000, tu: 13100, re: 700, url: 'https://www.tiktok.com/view/product/1731655653452318567' },
          { n: 'DEAL SỐC Combo 5 10 20 Bút bi đầu màu pastel Deli EQ32', br: 'Deli', ch: 'tiktok', pr: 21900, fm: 'Combo', rv: 327900000, g: -48, us: 11200, ug: -37, tr: 958600000, tu: 29100, re: 1686, url: 'https://www.tiktok.com/view/product/1733976532781139583' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long TL-027 mực xanh đỏ đen tím', br: 'Thiên Long', ch: 'shopee', pr: 25000, fm: 'Combo', rv: 306100000, g: -12, us: 13700, ug: -11, tr: 2700000000, tu: 135800, re: 24276, url: 'https://shopee.vn/product/101480242/23576151410' },
          { n: 'Combo 10 Bút bi Thiên Long TL-095 mực xanh', br: 'Thiên Long', ch: 'shopee', pr: 93000, fm: 'Combo', rv: 294700000, g: 970, us: 3200, ug: 968, tr: 374900000, tu: 4200, re: 212, url: 'https://shopee.vn/product/368671137/11556561855' }
        ]
      },

      but_gel: {
        gross: { cur: 54.7, pre: 38.9, g: 41 },
        units: { cur: 2300000, pre: 4800000, g: -52 },
        stores: { cur: 4400, pre: 4600, g: -4 },
        plat: { shopee: [33, 23.4], tiktok: [21.1, 14.26], lazada: [0.63, 1.18] },
        brand: [['Deli', 9.1896, 5.6405], ['Thiên Long', 7.4939, 5.0181], ['Classmate', 2.6803, 0.5057], ['Bossee', 1.8051, null], ['G-Star', 1.094, 1.0114], ['M&G', 0.7111, 0.7391]],
        price: { '< 10K': 4.13, '10K-30K': 15.63, '30K-50K': 15.16, '50K-75K': 9.43, '75K-100K': 4.39, '100K-150K': 3.56, '150K-200K': 0.8, '200K-350K': 1.2, '350K-500K': 0.13, '500K-750K': 0.17, '750K-1M': 0.11, '1M-1.5M': 0.01, '1.5M-2M': 0.02 },
        prod: [
          { n: 'Combo 5 10 20 Bút gel Fasgel GEL-068', br: 'Thiên Long', ch: 'tiktok', pr: 34000, fm: 'Combo', rv: 1400000000, g: 4, us: 46600, ug: 9, tr: 3600000000, tu: 118400, re: 9674, url: 'https://www.tiktok.com/view/product/1732616810831906809' },
          { n: 'TẶNG NGÒI Bút Bi Nước Deli Viết Gel Bấm A575 Ngòi 0.5mm', br: 'Deli', ch: 'shopee', pr: 10000, fm: 'Single', rv: 721300000, g: 15, us: 83100, ug: 23, tr: 6700000000, tu: 2000000, re: 127796, url: 'https://shopee.vn/product/127805122/18109428728' },
          { n: 'DEAL SỐC 4K 1C Combo 5 10 20 Bút gel bấm ngòi ST 0.5mm', br: 'Deli', ch: 'tiktok', pr: 27900, fm: 'Combo', rv: 667900000, g: 18386, us: 23700, ug: 21844, tr: 686000000, tu: 25200, re: 1526, url: 'https://www.tiktok.com/view/product/1731593973247936127' },
          { n: 'Bút đánh dấu sơn chống nước gốc dầu trắng Bút Graffiti', br: 'Topick Global', ch: 'shopee', pr: 41000, fm: 'Single', rv: 556000000, g: null, us: 13500, ug: null, tr: 556800000, tu: 13600, re: 791, url: 'https://shopee.vn/product/196261835/26875711128' },
          { n: 'HOT Bút Semi-gel Hồng Hà ngòi 0.5mm viết trơn mướt êm ru', br: 'Hồng Hà', ch: 'tiktok', pr: 49100, fm: 'Single', rv: 553000000, g: 79543, us: 12700, ug: 140622, tr: 568700000, tu: 13000, re: 613, url: 'https://www.tiktok.com/view/product/1730909398612019406' },
          { n: 'Hộp 12 24 48 Cây Bút Gel Đầu Bấm King TR5 Aodemei 6119', br: 'Aodemei', ch: 'tiktok', pr: 58600, fm: 'Combo', rv: 541500000, g: 955, us: 10000, ug: 851, tr: 652700000, tu: 12600, re: 859, url: 'https://www.tiktok.com/view/product/1730185571302607719' },
          { n: 'Combo Bút Máy Gel FP34 Mực Nhanh Khô Viết Êm Trơn Ngòi', br: 'VPP. KINH BẮC', ch: 'tiktok', pr: 44100, fm: 'Combo', rv: 511100000, g: 27, us: 12900, ug: 30, tr: 1000000000, tu: 25500, re: 1647, url: 'https://www.tiktok.com/view/product/1733208624875865231' },
          { n: 'ẢNH THẬT SET 8 bút gel Cao Cấp DUDU ngòi 0.5mm mực xanh đen', br: 'DUDU', ch: 'tiktok', pr: 21700, fm: 'Combo', rv: 509300000, g: 1, us: 24400, ug: 0, tr: 1300000000, tu: 64200, re: 5537, url: 'https://www.tiktok.com/view/product/1732776664365893367' },
          { n: 'Combo 5 10 20 Bút gel Fasgel Thiên Long GEL-068', br: 'Thiên Long', ch: 'shopee', pr: 30000, fm: 'Combo', rv: 467300000, g: 4, us: 16900, ug: 7, tr: 1100000000, tu: 40900, re: 6985, url: 'https://shopee.vn/product/101480242/42170566678' },
          { n: 'Hộp 10 12 Bút Gel Bấm Nắp ClassMate Ngòi ST 2 Bi Siêu Trơn', br: 'Classmate', ch: 'tiktok', pr: 33000, fm: 'Combo', rv: 445200000, g: 64, us: 14400, ug: 25, tr: 2000000000, tu: 88700, re: 7030, url: 'https://www.tiktok.com/view/product/1731356450781955429' }
        ]
      }
    },
    hoc_cu: {
      all: {
        gross: { cur: 105.5, pre: 67.7, g: 56 },
        units: { cur: 2800000, pre: 3800000, g: -26 },
        stores: { cur: 7500, pre: 7600, g: -1 },
        plat: { shopee: [69, 47.59], tiktok: [35.7, 18.79], lazada: [0.79, 1.44] },
        brand: [['Thiên Long', 19.834, 6.5669], ['Deli', 11.2885, 6.0253], ['Flexio', 5.1695, 0.8124], ['Casio', 3.376, 2.708], ['Classmate', 3.376, null], ['Hà My Bookstore', 1.477, 2.031]],
        price: { '< 10K': 3.84, '10K-30K': 21.8, '30K-50K': 15.29, '50K-75K': 14.78, '75K-100K': 7.48, '100K-150K': 7.55, '150K-200K': 2.25, '200K-350K': 4.7, '350K-500K': 1.55, '500K-750K': 21.94, '750K-1M': 3.72, '1M-1.5M': 0.34, '1.5M-2M': 0.03, '2M-3.5M': 0.01, '3.5M-5M': 0.15, '5M-7.5M': 0.1 },
        prod: [
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN - Máy tính học sinh', br: 'Thiên Long', ch: 'shopee', pr: 641500, fm: 'Single', rv: 5200000000, g: 54, us: 8500, ug: 45, tr: 19000000000, tu: 33000, re: 8466, url: 'https://shopee.vn/product/101480242/22471594302' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới', br: 'Thiên Long', ch: 'tiktok', pr: 664200, fm: 'Single', rv: 3800000000, g: -31, us: 6200, ug: -27, tr: 28200000000, tu: 51500, re: 6708, url: 'https://www.tiktok.com/view/product/1729647692608932857' },
          { n: 'Máy tính cầm tay Flexio Fx799VN Thiên Long - Máy tính học', br: 'Thiên Long', ch: 'shopee', pr: 641000, fm: 'Single', rv: 2800000000, g: 52, us: 4600, ug: 48, tr: 14400000000, tu: 25700, re: 7063, url: 'https://shopee.vn/product/368671137/23077933746' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới', br: 'Thiên Long', ch: 'tiktok', pr: 679500, fm: 'Single', rv: 2300000000, g: -47, us: 3900, ug: -47, tr: 20600000000, tu: 38100, re: 5163, url: 'https://www.tiktok.com/view/product/1729672334167935993' },
          { n: 'Hộp Bút Chì 2B Cao Cấp NoiR ClassMate Ngòi Chì Cứng Không Dễ Gãy', br: 'Classmate', ch: 'tiktok', pr: 42500, fm: 'Combo', rv: 2000000000, g: null, us: 45600, ug: null, tr: 2000000000, tu: 46400, re: 2596, url: 'https://www.tiktok.com/view/product/1734745827748513125' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới', br: 'Thiên Long', ch: 'shopee', pr: 641500, fm: 'Single', rv: 1700000000, g: 87, us: 2800, ug: 78, tr: 4200000000, tu: 7200, re: 1773, url: 'https://shopee.vn/product/101480242/22675511601' },
          { n: 'FS Máy Tính Học Sinh Casio FX-880BTG Chính Hãng Bitex - 4 Màu', br: 'Casio', ch: 'shopee', pr: 564000, fm: 'Single', rv: 1600000000, g: 8, us: 2500, ug: 11, tr: 23300000000, tu: 33400, re: 9386, url: 'https://shopee.vn/product/140792708/18134522949' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN - Bảo hành 84 tháng', br: 'Thiên Long', ch: 'tiktok', pr: 756300, fm: 'Single', rv: 895000000, g: 142, us: 1400, ug: 152, tr: 2500000000, tu: 4100, re: 451, url: 'https://www.tiktok.com/view/product/1733173201144219641' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới bảo hành', br: 'Thiên Long', ch: 'tiktok', pr: 761500, fm: 'Single', rv: 775400000, g: 723, us: 1200, ug: 725, tr: 949800000, tu: 1500, re: 151, url: 'https://www.tiktok.com/view/product/1729770161754180559' },
          { n: 'QUÀ TẶNG THEO GIÁ TRỊ ĐƠN - 1 SP 1 ĐƠN Hộp bút cho bé', br: 'Ladoda.VN', ch: 'shopee', pr: 500000, fm: 'Single', rv: 694000000, g: null, us: 1400, ug: null, tr: 694000000, tu: 1400, re: 246, url: 'https://shopee.vn/product/1474890934/41181067934' }
        ]
      },

      balo: {
        gross: { cur: 47.1747, pre: 39.4, g: 20 },
        units: { cur: 284600, pre: 266700, g: 7 },
        stores: { cur: 1600, pre: 1700, g: -5 },
        plat: { shopee: [21.7308, 17.4], tiktok: [25.1074, 21.2], lazada: [0.3364, 0.822] },
        brand: [['Hanama', 2.5425, 1.4731], ['Natoli', 1.6673, 0.8939], ['Ez Balo', 0.9624, 0.4202], ['M4m', 0.8773, null], ['Xbei', 0.77, 0.235]],
        price: { '< 10K': 0.0001, '10K-30K': 0.1197, '30K-50K': 0.5994, '50K-75K': 3.2661, '75K-100K': 2.2737, '100K-150K': 4.7676, '150K-200K': 6.5926, '200K-350K': 17.1747, '350K-500K': 5.7824, '500K-750K': 5.084, '750K-1M': 1.3531, '1M-1.5M': 0.0878, '1.5M-2M': 0.0565, '2M-3.5M': 0.0139, '3.5M-5M': 0.0031 },
        prod: [
          { n: 'HiP Balo - Balo Đi Học Thời Trang – Chống Nước Cao Cấp', br: 'OEM', ch: 'tiktok', pr: 260811, fm: 'Single', rv: 2258972586, g: 41, us: 10682, ug: 49, tr: 29190603294, tu: 170883, re: 16287, url: 'https://www.tiktok.com/view/product/1730256379947223841' },
          { n: 'Balo đi học Dabag nam thời trang cỡ lớn chống sốc 5 mặt', br: 'Hanama', ch: 'tiktok', pr: 221005, fm: 'Single', rv: 1517451000, g: null, us: 8979, ug: null, tr: 9232295347, tu: 56394, re: 6002, url: 'https://www.tiktok.com/view/product/1729715170138687987' },
          { n: 'Balo đi học nam nữ thương hiệu NATOLI nhiều ngăn chống nước tốt', br: 'Natoli', ch: 'shopee', pr: 279000, fm: 'Single', rv: 959527300, g: -22, us: 3705, ug: -23, tr: 20656986483, tu: 84971, re: 21770, url: 'https://shopee.vn/product/515748887/12786241026' },
          { n: 'Balo Học Sinh Kuromi Ba Lô Capyparaa Chống Gù Cho Bé', br: 'OEM', ch: 'tiktok', pr: 188720, fm: 'Single', rv: 803899781, g: 191, us: 4578, ug: 180, tr: 4584231824, tu: 28098, re: 3605, url: 'https://www.tiktok.com/view/product/1730597885657844601' },
          { n: 'Set 2 món balo đi học thời trang tiện lợi', br: 'OEM', ch: 'tiktok', pr: 99780, fm: 'Combo', rv: 709798693, g: 183, us: 8379, ug: 181, tr: 1285503272, tu: 15428, re: 1189, url: 'https://www.tiktok.com/view/product/1730577509546560056' },
          { n: 'Balo khổ A4 Túi học thêm Cặp học sinh lớp 1~6 chất liệu vải', br: 'OEM', ch: 'tiktok', pr: 130696, fm: 'Single', rv: 671240542, g: 135, us: 5940, ug: 117, tr: 2444464572, tu: 21972, re: 1443, url: 'https://www.tiktok.com/view/product/1730587877252892861' },
          { n: 'Balo Đi Học đeo Vai da cao cấp BON2 bản cao cấp chống sốc 6 mặt', br: 'Hanama', ch: 'tiktok', pr: 222006, fm: 'Single', rv: 617900651, g: -71, us: 3495, ug: -72, tr: 30354963403, tu: 189879, re: 22063, url: 'https://www.tiktok.com/view/product/1729607606810020339' },
          { n: 'Balo đi học thương hiệu NATOLI nhiều ngăn chống nước tốt', br: 'Natoli', ch: 'tiktok', pr: 311423, fm: 'Single', rv: 573126471, g: -41, us: 2042, ug: -40, tr: 14728004849, tu: 58738, re: 6289, url: 'https://www.tiktok.com/view/product/1729439994934889330' },
          { n: 'Balo đi học đi làm MOONLAB vải chống nước đựng vừa laptop 15.6inch', br: 'OEM', ch: 'shopee', pr: 241500, fm: 'Single', rv: 568936000, g: -15, us: 2484, ug: -15, tr: 1404347175, tu: 6097, re: 202, url: 'https://shopee.vn/product/1471603085/56606144991' },
          { n: 'BAGSMART Ba lô nữ chống nước 15.8L vừa laptop 14.3 inch', br: 'Bagsmart', ch: 'shopee', pr: 678000, fm: 'Single', rv: 563840708, g: -3, us: 972, ug: -16, tr: 4522185096, tu: 7577, re: 8398, url: 'https://shopee.vn/product/1251008067/43556339364' }
        ]
      },

      but_chi: {
        gross: { cur: 8.3783, pre: 4.2, g: 99 },
        units: { cur: 345000, pre: 431500, g: -20 },
        stores: { cur: 1200, pre: 1100, g: 3 },
        plat: { shopee: [6.2255, 3.4], tiktok: [2.078, 0.6665], lazada: [0.0748, 0.1113] },
        brand: [['Deli', 2.829, 1.3339], ['Thiên Long', 1.6001, 0.761], ['Classmate', 0.5368, 0.0756], ['G-Star', 0.4059, 0.1774], ['Điểm 10', 0.2273, 0.1175]],
        price: { '< 10K': 0.7333, '10K-30K': 1.8622, '30K-50K': 2.828, '50K-75K': 1.4917, '75K-100K': 0.2487, '100K-150K': 0.5375, '150K-200K': 0.2885, '200K-350K': 0.1058, '350K-500K': 0.0114, '500K-750K': 0.0014, '1M-1.5M': 0.2696 },
        prod: [
          { n: 'Hộp 10 bút chì học sinh Thiên Long', br: 'Thiên Long', ch: 'shopee', pr: 41000, fm: 'Combo', rv: 337649000, g: 402, us: 9240, ug: 396, tr: 1548219790, tu: 46748, re: 7536, url: 'https://shopee.vn/product/101480242/23990060019' },
          { n: 'Bút chì 2B HB Deli - Bút lục giác tam giác vẽ mỹ thuật', br: 'Deli', ch: 'tiktok', pr: 1169858, fm: 'Single', rv: 268196184, g: 119, us: 243, ug: -38, tr: 415114740, tu: 1032, re: 47, url: 'https://www.tiktok.com/view/product/1732147576692967039' },
          { n: 'Hộp 10 bút chì học sinh Thiên Long', br: 'Thiên Long', ch: 'tiktok', pr: 40584, fm: 'Combo', rv: 231374764, g: 1279, us: 5594, ug: 1302, tr: 993632164, tu: 22626, re: 696, url: 'https://www.tiktok.com/view/product/1729549834191145977' },
          { n: 'Hộp 10 cây Bút chì gỗ Thiên Long GP-01 thân lục giác độ cứng', br: 'Thiên Long', ch: 'shopee', pr: 47000, fm: 'Combo', rv: 205369350, g: 58, us: 5213, ug: 48, tr: 2479114231, tu: 66690, re: 11827, url: 'https://shopee.vn/product/101480242/1673220598' },
          { n: 'Vỉ 10 12 Bút Chì Gỗ 2B HB Lục Giác Deli', br: 'Deli', ch: 'shopee', pr: 10500, fm: 'Single', rv: 178873000, g: 178, us: 7261, ug: 175, tr: 1484509900, tu: 82599, re: 12687, url: 'https://shopee.vn/product/348955539/5567612537' },
          { n: 'Vỉ 10 12 Bút Chì Gỗ 2B HB Học Sinh Deli Chì Đậm Cho Bé Lớp 1', br: 'Deli', ch: 'shopee', pr: 9000, fm: 'Single', rv: 177327200, g: 62, us: 8331, ug: 133, tr: 3622517850, tu: 212625, re: 42127, url: 'https://shopee.vn/product/127805122/5431388748' },
          { n: 'Hộp 10 Bút Chì 2B Gỗ Đen NoiR CLASSMATE Ngòi Chì Cứng Cáp', br: 'Classmate', ch: 'shopee', pr: 30000, fm: 'Combo', rv: 167250000, g: 159186, us: 5518, ug: 183833, tr: 302211500, tu: 9558, re: 1533, url: 'https://shopee.vn/product/234655640/40029184999' },
          { n: 'Hộp 50 Bút Chì Gỗ 2B HB Deli Than Mềm Đậm Cao Cấp', br: 'Deli', ch: 'shopee', pr: 150000, fm: 'Combo', rv: 163965000, g: 401, us: 950, ug: 465, tr: 851677340, tu: 7082, re: 1275, url: 'https://shopee.vn/product/127805122/10239301896' },
          { n: 'Hộp 10 cây Bút chì gỗ lục giác Thiên Long GP-018', br: 'Thiên Long', ch: 'shopee', pr: 55000, fm: 'Combo', rv: 163739000, g: 17, us: 3829, ug: 15, tr: 1042511820, tu: 24456, re: 3724, url: 'https://shopee.vn/product/101480242/1635055148' },
          { n: 'Hộp 12 Cây Bút Chì Gỗ 2B G-Star VT405 King 8800 Thân Đen', br: 'G-Star', ch: 'tiktok', pr: 59016, fm: 'Combo', rv: 153449448, g: 664, us: 2427, ug: 491, tr: 434251463, tu: 7860, re: 559, url: 'https://www.tiktok.com/view/product/1729445494459894539' }
        ]
      },

      gom: {
        gross: { cur: 5.9, pre: 3.7, g: 59 },
        units: { cur: 491500, pre: 700000, g: -30 },
        stores: { cur: 1800, pre: 2000, g: -10 },
        plat: { shopee: [4.1, 2.87], tiktok: [1.7, 0.7], lazada: [0.03, 0.09] },
        brand: [['Deli', 2.6998, 1.0974], ['Thiên Long', 0.1817, 0.3034], ['G-Star', 0.0956, 0.0759], ['Quaff', 0.0873, null], ['Tombow', 0.0779, 0.0784]],
        price: { '< 10K': 1.48, '10K-30K': 2.21, '30K-50K': 1.38, '50K-75K': 0.35, '75K-100K': 0.29, '100K-150K': 0.08, '150K-200K': 0.03, '200K-350K': 0.04, '500K-750K': 0.03, '750K-1M': 0.15 },
        prod: [
          { n: 'Set 4 5 6 tẩy không vụn Nusign x Deli - Cục gôm tẩy trắng siêu sạch', br: 'Deli', ch: 'tiktok', pr: 40000, fm: 'Single', rv: 689900000, g: 181, us: 23400, ug: 236, tr: 1800000000, tu: null, re: 4653, url: 'https://www.tiktok.com/view/product/1730991643525286527' },
          { n: 'Gôm tẩy 2 đầu Deli 71115 - Tẩy bút mực và tẩy chì hai đầu', br: 'Deli', ch: 'shopee', pr: 35000, fm: 'Single', rv: 125200000, g: 278, us: 3800, ug: 241, tr: 250900000, tu: null, re: 1226, url: 'https://shopee.vn/product/113413980/27967048282' },
          { n: 'Gôm Tẩy Deli Màu Trắng - Tẩy Sạch Ít Vụn Phù Hợp Cho Học Sinh', br: 'Deli', ch: 'shopee', pr: 3000, fm: 'Single', rv: 119000000, g: 152, us: 35200, ug: 257, tr: 629600000, tu: null, re: 20661, url: 'https://shopee.vn/product/127805122/3824689315' },
          { n: 'Gôm Tẩy Định Vị Tẩy Bút Chì Deli Tẩy Sạch Ít Vụn Không Mòn', br: 'Deli', ch: 'shopee', pr: 9000, fm: 'Single', rv: 111000000, g: 118, us: 13300, ug: 134, tr: 472600000, tu: null, re: 8469, url: 'https://shopee.vn/product/127805122/28757886370' },
          { n: 'Hộp 6 Gôm Tẩy Siêu Sạch Deli Nusign Cao Cấp Tẩy Mềm Siêu Sạch', br: 'Deli', ch: 'shopee', pr: 18000, fm: 'Single', rv: 109400000, g: 74, us: 5300, ug: 142, tr: 490900000, tu: null, re: 4417, url: 'https://shopee.vn/product/127805122/26213312447' },
          { n: 'Gôm Tẩy Chì 2B 4B Deli Màu Đen Tẩy Sạch Ít Vụn Tẩy Nhỏ Gọn', br: 'Deli', ch: 'shopee', pr: 3000, fm: 'Single', rv: 95400000, g: 122, us: 30500, ug: 245, tr: 679800000, tu: null, re: 27605, url: 'https://shopee.vn/product/127805122/6175440807' },
          { n: 'Gôm Tẩy Bút Chì Siêu Sạch Chuyên Dùng Cho Học Sinh Deli', br: 'Deli', ch: 'shopee', pr: 3000, fm: 'Single', rv: 73200000, g: 79, us: 25000, ug: 168, tr: 476600000, tu: null, re: 13723, url: 'https://shopee.vn/product/348955539/9951634937' },
          { n: 'Gôm Tẩy Chì 2B Deli - Nhiều Màu - Tẩy sạch ít vụn không mòn', br: 'Deli', ch: 'shopee', pr: 4500, fm: 'Single', rv: 70700000, g: 93, us: 13800, ug: 164, tr: 520700000, tu: null, re: 12987, url: 'https://shopee.vn/product/127805122/7288839925' },
          { n: 'Hộp 6 Gôm Tẩy Siêu Sạch Deli Nusign Cao Cấp Tẩy Mềm Ít Vụn', br: 'Deli', ch: 'shopee', pr: 18000, fm: 'Single', rv: 65500000, g: -12, us: 3700, ug: -1, tr: 300400000, tu: null, re: 3181, url: 'https://shopee.vn/product/348955539/29568624298' },
          { n: 'Hộp 6 Gôm Tẩy Bút Chì Nusign Cao Cấp Siêu Sạch Ít Vụn Không Mòn', br: 'Deli', ch: 'shopee', pr: 6500, fm: 'Single', rv: 64400000, g: 483, us: 7800, ug: 292, tr: 87900000, tu: null, re: 1862, url: 'https://shopee.vn/product/464418479/27074209091' }
        ]
      },

      may_tinh: {
        gross: { cur: 63.1, pre: 34.5, g: 83 },
        units: { cur: 185800, pre: 148100, g: 25 },
        stores: { cur: 1000, pre: 1100, g: -9 },
        plat: { shopee: [36.2, 23.51], tiktok: [26.5, 9.53], lazada: [0.46, 1.48] },
        brand: [['Casio', 28.1994, 20.4343], ['Thiên Long', 21.7001, 6.2376], ['Deli', 0.5679, 0.3692], ['Fahasa', 0.4669, 0.521]],
        price: { '< 10K': 0.01, '10K-30K': 0.36, '30K-50K': 0.47, '50K-75K': 1.67, '75K-100K': 0.39, '100K-150K': 0.63, '150K-200K': 1.51, '200K-350K': 5.13, '350K-500K': 2.73, '500K-750K': 25.12, '750K-1M': 23.46, '1M-1.5M': 0.51, '1.5M-2M': 0.47, '2M-3.5M': 0.35, '3.5M-5M': 0.23, '5M-7.5M': 0.1 },
        prod: [
          { n: 'Máy tính Casio Fx-580VNX nhiều màu được mang vào phòng thi', br: 'Casio', ch: 'tiktok', pr: 962000, fm: 'Single', rv: 5200000000, g: 13, us: 6400, ug: 11, tr: 29400000000, tu: null, re: 4041, url: 'https://www.tiktok.com/view/product/1729430797999508070' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN', br: 'Thiên Long', ch: 'shopee', pr: 641500, fm: 'Single', rv: 5200000000, g: 54, us: 8500, ug: 45, tr: 19000000000, tu: null, re: 8466, url: 'https://shopee.vn/product/101480242/22471594302' },
          { n: 'Máy Tính Casio FX 580 - Màu Đen Hồng Xanh', br: 'Casio', ch: 'shopee', pr: 786000, fm: 'Single', rv: 5000000000, g: 69, us: 6300, ug: 68, tr: 40000000000, tu: null, re: 11385, url: 'https://shopee.vn/product/142856269/9633799567' },
          { n: 'FS Máy Tính Casio FX-580VN X dành cho học sinh cấp 2 cấp 3', br: 'Casio', ch: 'shopee', pr: 874000, fm: 'Single', rv: 4000000000, g: -4, us: 4800, ug: -7, tr: 65300000000, tu: null, re: 24941, url: 'https://shopee.vn/product/140792708/4558727890' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới', br: 'Thiên Long', ch: 'tiktok', pr: 664200, fm: 'Single', rv: 3800000000, g: -31, us: 6200, ug: -27, tr: 28200000000, tu: null, re: 6708, url: 'https://www.tiktok.com/view/product/1729647692608932857' },
          { n: 'Máy tính cầm tay Flexio Fx799VN Thiên Long', br: 'Thiên Long', ch: 'shopee', pr: 641000, fm: 'Single', rv: 2800000000, g: 52, us: 4600, ug: 48, tr: 14400000000, tu: null, re: 7063, url: 'https://shopee.vn/product/368671137/23077933746' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới', br: 'Thiên Long', ch: 'tiktok', pr: 679500, fm: 'Single', rv: 2300000000, g: -47, us: 3900, ug: -47, tr: 20600000000, tu: null, re: 5163, url: 'https://www.tiktok.com/view/product/1729672334167935993' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN 4 màu pastel mới', br: 'Thiên Long', ch: 'shopee', pr: 641500, fm: 'Single', rv: 1700000000, g: 87, us: 2800, ug: 78, tr: 4200000000, tu: null, re: 1773, url: 'https://shopee.vn/product/101480242/22675511601' },
          { n: 'FS Máy Tính Học Sinh Casio FX-880BTG Chính Hãng Bitex - 4 Màu', br: 'Casio', ch: 'shopee', pr: 564000, fm: 'Single', rv: 1600000000, g: 8, us: 2500, ug: 11, tr: 23300000000, tu: null, re: 9386, url: 'https://shopee.vn/product/140792708/18134522949' },
          { n: 'FS Máy Tính Casio Fx-580VNX dành cho học sinh cấp 2 cấp 3', br: 'Casio', ch: 'tiktok', pr: 881800, fm: 'Single', rv: 1500000000, g: 2875, us: 1900, ug: 3085, tr: 5000000000, tu: null, re: 673, url: 'https://www.tiktok.com/view/product/1730341775370521190' }
        ]
      },

      tap_vo: {
        gross: { cur: 19, pre: 14.5, g: 31 },
        units: { cur: 488700, pre: 620600, g: -21 },
        stores: { cur: 1300, pre: 1400, g: -7 },
        plat: { shopee: [13.6, 11.15], tiktok: [5.1, 3.02], lazada: [0.25, 0.38] },
        brand: [['Thiên Long', 1.805, 1.0295], ['Hà My Bookstore', 1.501, 2.03], ['H H T Hải Tiến', 1.292, 0.7685], ['Hồng Hà', 1.102, 0.7685], ['Hiệp Phong', 1.007, 1.16]],
        price: { '< 10K': 0.77, '10K-30K': 2.64, '30K-50K': 2.5, '50K-75K': 4.43, '75K-100K': 3.9, '100K-150K': 2.58, '150K-200K': 1.29, '200K-350K': 0.67, '350K-500K': 0.01, '500K-750K': 0.03, '750K-1M': 0.15 },
        prod: [
          { n: 'SIÊU SALE HỜI 10 TẶNG 10 CUỐN Vở 96 TRANG 4 ÔLI', br: 'Việt Long', ch: 'tiktok', pr: 163900, fm: 'Combo', rv: 748600000, g: 1515, us: 4800, ug: 1440, tr: 1400000000, tu: 10200, re: 986, url: 'https://www.tiktok.com/view/product/1730317625553030129' },
          { n: 'TẶNG 02 CUỐN Combo 10 Tập học sinh 96 trang 4 ô ly vuông 2mm', br: 'Thiên Long', ch: 'shopee', pr: 136000, fm: 'Combo', rv: 582100000, g: 135, us: 4200, ug: 131, tr: 1600000000, tu: 11900, re: 1602, url: 'https://shopee.vn/product/101480242/29587705915' },
          { n: 'Combo 10 Quyển Tập Vở Học Sinh ABC 96 Trang Khổ A5 70 80gsm', br: 'Hà My Bookstore', ch: 'shopee', pr: 77000, fm: 'Combo', rv: 390300000, g: 321, us: 4900, ug: 337, tr: 2700000000, tu: 37900, re: 4332, url: 'https://shopee.vn/product/268018871/9628493947' },
          { n: 'QUÀ TẶNG 7 1 HÌNH Sticker NGẦU NHIÊN DÁN trang trí dán tập vở', br: 'VCM Dragon 1991', ch: 'shopee', pr: 300000, fm: 'Single', rv: 385800000, g: 61, us: 1300, ug: 61, tr: 625500000, tu: 2100, re: 392, url: 'https://shopee.vn/product/878113998/45857314078' },
          { n: 'NY LỐC 10 QUYỂN TẬP 96 TRANG ĐỊNH LƯỢNG 60-70-80-100-120', br: 'Hải Hà', ch: 'shopee', pr: 57600, fm: 'Combo', rv: 299500000, g: 174, us: 5200, ug: 162, tr: 1100000000, tu: 20200, re: 1568, url: 'https://shopee.vn/product/87162080/29908288406' },
          { n: 'Tập Vở Học Tập B5 - A3 Dạng Ngang S67-S80 Kẻ Caro 30-50 Trang', br: 'Tuệ Minh', ch: 'tiktok', pr: 29600, fm: 'Combo', rv: 288600000, g: 27, us: 10500, ug: 27, tr: 669300000, tu: 24000, re: 1313, url: 'https://www.tiktok.com/view/product/1731613652387529894' },
          { n: 'Vở Ô Ly Hồng Hà Cho Học Sinh Bạn Nhỏ Chất Giấy Bền Siêu Dài', br: 'Hồng Hà', ch: 'shopee', pr: 114000, fm: 'Single', rv: 279600000, g: 267, us: 2700, ug: 252, tr: 536600000, tu: 5300, re: 444, url: 'https://shopee.vn/product/880096618/27956762947' },
          { n: 'Combo 10 quyển Tập Vở Học Sinh ABC 96 Trang A5 Giấy 70Gsm', br: 'Hà My Bookstore', ch: 'tiktok', pr: 86100, fm: 'Combo', rv: 239700000, g: 310, us: 2900, ug: 280, tr: 1300000000, tu: 17800, re: 1233, url: 'https://www.tiktok.com/view/product/1730999647168989590' },
          { n: 'Vở Kẻ Ngang B5 HUERARUMO 300-500 Trang Bìa Bồi Cứng Giấy viết', br: 'HUERARUMO', ch: 'tiktok', pr: 80300, fm: 'Single', rv: 223000000, g: 31, us: 3000, ug: 25, tr: 401800000, tu: 5500, re: 301, url: 'https://www.tiktok.com/view/product/1732864714683221266' },
          { n: 'TẶNG STICKER Vở 300 500 trang bìa bồi cứng kẻ ngang 70gsm', br: 'Crabit', ch: 'shopee', pr: 54000, fm: 'Single', rv: 208300000, g: 155, us: 3900, ug: 182, tr: 334600000, tu: 6100, re: 861, url: 'https://shopee.vn/product/19268307/41725318199' }
        ]
      }
    },
    my_thuat: {
      all: {
        gross: { cur: 117.3, pre: 90.6, g: 29 },
        units: { cur: 2900000, pre: 3500000, g: -17 },
        stores: { cur: 9000, pre: 9200, g: -2 },
        plat: { shopee: [76.1, 62.89], tiktok: [40.3, 25.67], lazada: [0.92, 1.92] },
        brand: [['Deli', 15.6009, 8.7157], ['Bossee', 4.9031, 0.8969], ['Thiên Long', 4.1055, 3.5334], ['Pentel', 2.6979, 1.8482], ['Mont Marte', 2.4046, 1.7033]],
        price: { '<10K': 1.88, '10K-30K': 22.92, '30K-50K': 23.8, '50K-75K': 19.07, '75K-100K': 12.85, '100K-150K': 12.08, '150K-200K': 5.65, '200K-350K': 10.64, '350K-500K': 4.39, '500K-750K': 2.17, '750K-1M': 0.69, '1M-1.5M': 0.48, '1.5M-2M': 0.24, '2M-3.5M': 0.38, '3.5M-5M': 0.03, '5M-7.5M': 0.02, '7.5M-10M': 0.02 },
        prod: [
          { n: 'Hộp 60 bút màu Acrylic Marker cao cấp chống nước màu sắc tươi sáng', br: 'OEM', ch: 'tiktok', pr: 75400, fm: 'Single', rv: 2100000000, g: -30, us: 30700, ug: -30, tr: 13700000000, tu: null, re: 16462, url: 'https://www.tiktok.com/view/product/1730750363609630947' },
          { n: 'Bút vẽ màu sơn Bút sửa chữa Chống thấm nước', br: 'OEM', ch: 'tiktok', pr: 17000, fm: 'Single', rv: 1400000000, g: -61, us: 87100, ug: -63, tr: 7200000000, tu: null, re: 35374, url: 'https://www.tiktok.com/view/product/1729618020483369405' },
          { n: 'TOP 1 TẶNG 80% MỰC Bút Sơn Acrylic Marker Deli Chính Hãng', br: 'Deli', ch: 'shopee', pr: 39000, fm: 'Single', rv: 799700000, g: 241, us: 13300, ug: 137, tr: 2100000000, tu: null, re: 18600, url: 'https://shopee.vn/product/348955539/25215129183' },
          { n: 'Túi Hồ Sơ 13 Ngăn M.Y.Never 24.5x37x3cm PP Chống Nước', br: 'OEM', ch: 'tiktok', pr: 39500, fm: 'Single', rv: 767800000, g: 140, us: 20000, ug: 126, tr: 1100000000, tu: null, re: 1504, url: 'https://www.tiktok.com/view/product/1733043773277112211' },
          { n: 'Thẻ Thực Hành Đồ Chơi Bộ 4 Thẻ Và 1 Bút Màu Vui Nhộn Số Đồ Đỏ', br: 'OEM', ch: 'tiktok', pr: 81300, fm: 'Single', rv: 587400000, g: 51, us: 8100, ug: 43, tr: 1800000000, tu: null, re: 1398, url: 'https://www.tiktok.com/view/product/1732072840465515874' },
          { n: 'Bút lông màu Acrylic Marker hộp 60 màu cao cấp màu sắc tươi sáng', br: 'OEM', ch: 'tiktok', pr: 58000, fm: 'Single', rv: 576000000, g: 261, us: 10900, ug: 262, tr: 1200000000, tu: null, re: 2248, url: 'https://www.tiktok.com/view/product/1732131667763169918' },
          { n: 'Bút đánh dấu sơn chống nước gốc dầu trắng Bút Graffiti', br: 'OEM', ch: 'shopee', pr: 41000, fm: 'Single', rv: 556000000, g: null, us: 13500, ug: null, tr: 556800000, tu: null, re: 791, url: 'https://shopee.vn/product/196261835/26875711128' },
          { n: 'Hộp Bút Chì Màu Gốc Dầu Cao Cấp Global Art 36 72 Màu Đậm', br: 'OEM', ch: 'tiktok', pr: 407000, fm: 'Single', rv: 549600000, g: -52, us: 1500, ug: -56, tr: 3500000000, tu: null, re: 1448, url: 'https://www.tiktok.com/view/product/1730350149081336202' },
          { n: 'Thẻ Thực Hành Đồ Chơi Bộ 4 Thẻ Và 1 Bút Màu Vui Nhộn Số Đồ Đỏ', br: 'OEM', ch: 'tiktok', pr: 73100, fm: 'Single', rv: 519400000, g: 49, us: 7500, ug: 48, tr: 1700000000, tu: null, re: 1420, url: 'https://www.tiktok.com/view/product/1731595687833405285' },
          { n: 'TOP 1 84 MÀU Bút Sơn Màu Acrylic Maker Deli Dạng Roller Hộp', br: 'Deli', ch: 'shopee', pr: 395000, fm: 'Single', rv: 508100000, g: 81, us: 1500, ug: 59, tr: 1000000000, tu: null, re: 767, url: 'https://shopee.vn/product/348955539/43803090618' }
        ]
      },

      acrylic: {
        gross: { cur: 22.2, pre: 14.8, g: 50 },
        units: { cur: 437900, pre: 515200, g: -15 },
        stores: { cur: 1900, pre: 2000, g: -5 },
        plat: { shopee: [14.1, 8.98], tiktok: [7.9, 5.3], lazada: [0.19, 0.49] },
        brand: [['Deli', 5.2991, 1.8086], ['Bossee', 3.401, 0.4425], ['Thiên Long', 0.7903, 0.4174], ['Enmy', 0.6172, null], ['Grasp', 0.2464, null]],
        price: { '< 10K': 0.17, '10K-30K': 2.8, '30K-50K': 4.27, '50K-75K': 3.76, '75K-100K': 3.67, '100K-150K': 1.35, '150K-200K': 1.05, '200K-350K': 2.83, '350K-500K': 1.66, '500K-750K': 0.29, '750K-1M': 0.17, '1M-1.5M': 0.04, '1.5M-2M': 0.02, '2M-3.5M': 0.1, '5M-7.5M': 0.01 },
        prod: [
          { n: 'Hộp 60 bút màu Acrylic Marker cao cấp chống nước màu sắc tươi sáng', br: 'BinBon Decor', ch: 'tiktok', pr: 75400, fm: 'Combo', rv: 2100000000, g: -30, us: 30700, ug: -30, tr: 13700000000, tu: 210900, re: 16462, url: 'https://www.tiktok.com/view/product/1730750363609630947' },
          { n: 'TOP 1 TẶNG 80% MỰC Bút Sơn Acrylic Marker Deli Chính Hãng', br: 'Deli', ch: 'shopee', pr: 39000, fm: 'Combo', rv: 799700000, g: 241, us: 13300, ug: 137, tr: 2100000000, tu: 97300, re: 18600, url: 'https://shopee.vn/product/348955539/25215129183' },
          { n: 'Bút lông màu Acrylic Marker hộp 60 màu cao cấp dùng cho nhiều bề mặt', br: 'NTT Store HN', ch: 'tiktok', pr: 58000, fm: 'Combo', rv: 576000000, g: 261, us: 10900, ug: 262, tr: 1200000000, tu: 23000, re: 2248, url: 'https://www.tiktok.com/view/product/1732131667763169918' },
          { n: 'TOP 1 - 84 MÀU Bút Sơn Màu Acrylic Maker Deli Dạng Roller Hộp', br: 'Deli', ch: 'shopee', pr: 395000, fm: 'Combo', rv: 508100000, g: 81, us: 1500, ug: 59, tr: 1000000000, tu: 3900, re: 787, url: 'https://shopee.vn/product/348955539/43803090618' },
          { n: 'TOP 1 GIÁ SỈ Bút Sơn Acrylic Marker 84 Màu Deli HM335 Dạng Roller', br: 'Deli', ch: 'shopee', pr: 395000, fm: 'Combo', rv: 452200000, g: 2, us: 1400, ug: -8, tr: 2000000000, tu: 8900, re: 1731, url: 'https://shopee.vn/product/127805122/28935215038' },
          { n: 'MW Bộ bút dạ lông, Acrylic Marker, đầu cọ mềm 48 60 80 120 màu', br: 'Miracle Works', ch: 'shopee', pr: 339000, fm: 'Combo', rv: 333900000, g: 3032, us: 1200, ug: 2180, tr: 344500000, tu: 1200, re: 240, url: 'https://shopee.vn/product/1370113610/46454533197' },
          { n: 'Bút Màu Dạ Bossee 120 Màu Marker Acrylic Họa Cụ Tô Màu Dạ Vẽ Tranh', br: 'Bossee', ch: 'shopee', pr: 45000, fm: 'Combo', rv: 327200000, g: -51, us: 7500, ug: -58, tr: 2200000000, tu: 56100, re: 11308, url: 'https://shopee.vn/product/1437074218/42500627746' },
          { n: 'VOUCHER GIẢM 52% Bút Sơn Màu Acrylic Maker Roller Deli', br: 'Deli', ch: 'tiktok', pr: 370300, fm: 'Combo', rv: 295300000, g: -36, us: 1000, ug: -34, tr: 1600000000, tu: 10200, re: 940, url: 'https://www.tiktok.com/view/product/1731288240825665151' },
          { n: 'Bộ 12 24 36 48 60 80 120 Bút Màu Acrylic Marker Đầu Tròn Thân Bút', br: 'Bossee', ch: 'tiktok', pr: 29900, fm: 'Combo', rv: 277100000, g: 78, us: 16200, ug: 52, tr: 871600000, tu: 48700, re: 4104, url: 'https://www.tiktok.com/view/product/1731376175186413203' },
          { n: 'THÊM 80% MỰC Bút Sơn Màu Acrylic Marker Deli CHÍNH HÀNG Tô Màu', br: 'Deli', ch: 'shopee', pr: 215000, fm: 'Combo', rv: 259600000, g: 242, us: 1300, ug: 221, tr: 783400000, tu: 4100, re: 782, url: 'https://shopee.vn/product/348955539/29725671402' }
        ]
      },

      long_mt: {
        gross: { cur: 2.0046, pre: 1.8, g: 13 },
        units: { cur: 44200, pre: 42600, g: 4 },
        stores: { cur: 354, pre: 397, g: -11 },
        plat: { shopee: [1.2391, 1.2], tiktok: [0.7569, 0.5705], lazada: [0.0086, 0.0226] },
        brand: [['Colokit', 1.3689, 1.2301], ['Deli', 0.2475, 0.1306], ['Flexoffice', 0.0274, 0.0042], ['Mesibo', 0.0248, null], ['Stacom', 0.0159, 0.0024]],
        price: { '< 10K': 0.0016, '10K-30K': 0.2828, '30K-50K': 0.6495, '50K-75K': 0.5315, '75K-100K': 0.1013, '100K-150K': 0.2259, '150K-200K': 0.1738, '200K-350K': 0.0259, '350K-500K': 0.0056, '1M-1.5M': 0.0067 },
        prod: [
          { n: 'Bút lông màu Fiber Pen Thiên Long Colokit 5 12 24 màu Morandi', br: 'Colokit', ch: 'tiktok', pr: 42615, fm: 'Single', rv: 273484118, g: -37, us: 6337, ug: -30, tr: 2337995889, tu: 63783, re: 7132, url: 'https://www.tiktok.com/view/product/1732234717911157753' },
          { n: 'Bút lông màu Felt Pen Deli 20 36 màu', br: 'Deli', ch: 'tiktok', pr: 64761, fm: 'Single', rv: 110555238, g: 11, us: 2176, ug: 17, tr: 685121977, tu: 12907, re: 1680, url: 'https://www.tiktok.com/view/product/1731283592261502591' },
          { n: 'Bút lông màu Fiber Pen Thiên Long Colokit 20 36 màu', br: 'Colokit', ch: 'shopee', pr: 49000, fm: 'Single', rv: 106162191, g: 23, us: 2019, ug: 20, tr: 1784528421, tu: 36365, re: 10800, url: 'https://shopee.vn/product/368671137/21176193704' },
          { n: 'Bút lông 12 24 màu rửa siêu sạch', br: 'Colokit', ch: 'shopee', pr: 53000, fm: 'Single', rv: 94183900, g: 237, us: 1339, ug: 100, tr: 234916000, tu: 4482, re: 723, url: 'https://shopee.vn/product/101480242/26331643823' },
          { n: 'Bút lông màu Fiber Pen Thiên Long Colokit', br: 'Colokit', ch: 'shopee', pr: 38300, fm: 'Single', rv: 80163000, g: -51, us: 1873, ug: -51, tr: 5151792896, tu: 105067, re: 32086, url: 'https://shopee.vn/product/101480242/8327433608' },
          { n: 'Bút lông màu Fiber Pen Thiên Long Colokit 5 12 24 màu Morandi', br: 'Colokit', ch: 'shopee', pr: 22000, fm: 'Single', rv: 76773600, g: -50, us: 3992, ug: -41, tr: 1011262220, tu: 38470, re: 8622, url: 'https://shopee.vn/product/101480242/29931655506' },
          { n: 'Hộp Bút Lông 48 60 Màu Thiên Long Fiber Pen Washable', br: 'Colokit', ch: 'shopee', pr: 171600, fm: 'Combo', rv: 70025700, g: -28, us: 448, ug: -28, tr: 394785312, tu: 2704, re: 586, url: 'https://shopee.vn/product/101480242/40172986410' },
          { n: 'Hộp Bút Lông 48 60 Màu Thiên Long Fiber Pen Washable', br: 'Colokit', ch: 'tiktok', pr: 142244, fm: 'Combo', rv: 57718804, g: -80, us: 375, ug: -80, tr: 1165713285, tu: 7882, re: 1041, url: 'https://www.tiktok.com/view/product/1732761890580236281' },
          { n: 'Bút Lông Màu Fiber Pen Deli 20 36 56 Màu Mực An Toàn Có Thể', br: 'Deli', ch: 'shopee', pr: 60000, fm: 'Single', rv: 57056000, g: 103, us: 1178, ug: 106, tr: 345859460, tu: 6861, re: 1609, url: 'https://shopee.vn/product/348955539/27536279868' },
          { n: 'Bộ Bút Lông 20 36 Màu Rửa Được Fiber Pen Thiên Long Colokit', br: 'Colokit', ch: 'tiktok', pr: 50711, fm: 'Combo', rv: 54949179, g: -60, us: 966, ug: -62, tr: 910726611, tu: 17549, re: 1825, url: 'https://www.tiktok.com/view/product/1729549833724529657' }
        ]
      },

      sap_mau: {
        gross: { cur: 6.7, pre: 5.3, g: 26 },
        units: { cur: 210200, pre: 266000, g: -21 },
        stores: { cur: 1300, pre: 1500, g: -13 },
        plat: { shopee: [4.6, 3.93], tiktok: [2, 1.18], lazada: [0.06, 0.11] },
        brand: [['Deli', 0.8797, 0.5825], ['Classmate', 0.6553, null], ['Thiên Long', 0.6157, 0.7605], ['Jupitearth', 0.5032, 0.2353], ['Colokit', 0.3879, 0.4457]],
        price: { '<10K': 0.16, '10K-30K': 1.99, '30K-50K': 1.67, '50K-75K': 0.56, '75K-100K': 0.27, '100K-150K': 1.07, '150K-200K': 0.34, '200K-350K': 0.57, '350K-500K': 0.06, '500K-750K': 0.01, '1M-1.5M': 0.03 },
        prod: [
          { n: 'Bút màu lụa JUPIEARTH Có các loại 12 24 36 màu sắc tươi sáng', br: 'OEM', ch: 'tiktok', pr: 104000, fm: 'Single', rv: 465100000, g: -41, us: 4800, ug: -45, tr: 2100000000, tu: null, re: 1856, url: 'https://www.tiktok.com/view/product/1731970909916859173' },
          { n: 'Bút Màu Sáp Vặn Màu Sáp Hữu Cơ ClassMate Màu Mịn Tô Đậm Hạn', br: 'Classmate', ch: 'tiktok', pr: 40500, fm: 'Single', rv: 420700000, g: -28, us: 11300, ug: -27, tr: 1500000000, tu: null, re: 3294, url: 'https://www.tiktok.com/view/product/1732744932751476069' },
          { n: 'Sáp đa năng 12 màu rửa được Colo Art Thiên Long Colokit Sáng', br: 'Thiên Long', ch: 'shopee', pr: 105200, fm: 'Single', rv: 138600000, g: 818, us: 1700, ug: 524, tr: 181200000, tu: null, re: 435, url: 'https://shopee.vn/product/101480242/14492465290' },
          { n: 'TẶNG SỔ PHÁC THẢO Bộ Bút Chì Màu Sáp 48 72 120 Màu Sắc Tươi', br: 'OEM', ch: 'tiktok', pr: 177900, fm: 'Single', rv: 132700000, g: -32, us: 800, ug: -34, tr: 720100000, tu: null, re: 883, url: 'https://www.tiktok.com/view/product/1729607695017478457' },
          { n: 'Sáp Màu Hữu Cơ 12 18 24 36 Màu Màu Tươi Đẹp Không Dính Tay An Toàn', br: 'OEM', ch: 'tiktok', pr: 43300, fm: 'Single', rv: 128700000, g: 178, us: 3000, ug: 124, tr: 496400000, tu: null, re: 1175, url: 'https://www.tiktok.com/view/product/1729602424186768231' },
          { n: 'Bút Sáp màu Thiên Long Colokit 24 màu tươi sáng thông dụng tiêu dùng', br: 'Thiên Long', ch: 'shopee', pr: 23000, fm: 'Single', rv: 123300000, g: -23, us: 5700, ug: -4, tr: 1600000000, tu: null, re: 9869, url: 'https://shopee.vn/product/101480242/1636049068' },
          { n: 'Tú cầu phối hoa sáp dáng tròn có 2 màu tặng túi giấy', br: 'OEM', ch: 'shopee', pr: 209600, fm: 'Single', rv: 107700000, g: null, us: 500, ug: null, tr: 111900000, tu: null, re: 42, url: 'https://shopee.vn/product/101480242/1636049426' },
          { n: 'TẶNG 6 QUÀ Bút Sáp Màu Deli 12 24 Màu Tươi Sáng Màu Sáp Mịn', br: 'Deli', ch: 'tiktok', pr: 10900, fm: 'Single', rv: 101400000, g: null, us: 6500, ug: null, tr: 101900000, tu: null, re: 255, url: 'https://www.tiktok.com/view/product/1734691480685938258' },
          { n: 'Bút màu cho bé quà sinh nhật cho bé gái hộp màu 150 chi tiết quà', br: 'OEM', ch: 'shopee', pr: 295000, fm: 'Single', rv: 99500000, g: 42, us: 400, ug: 37, tr: 2000000000, tu: null, re: 1411, url: 'https://shopee.vn/product/884990462/55008852578' },
          { n: 'Xả kho Sáp màu hữu cơ màu sắc tươi sáng an toàn cho bé 12 16 24 màu', br: 'OEM', ch: 'shopee', pr: 8100, fm: 'Single', rv: 97600000, g: 899, us: 11700, ug: 943, tr: 128700000, tu: null, re: 950, url: 'https://shopee.vn/product/1011453451/22547000186' }
        ]
      }
    },
    van_phong_pham: {
      all: {
        gross: { cur: 269.3, pre: 190.5, g: 41 },
        units: { cur: 5700000, pre: 7100000, g: -20 },
        stores: { cur: 15300, pre: 15200, g: 1 },
        plat: { shopee: [194, 141.61], tiktok: [73.2, 44.91], lazada: [2, 4.17] },
        brand: [['Deli', 21.4094, 11.7539], ['IK Copy', 14.7038, 11.8491], ['Thiên Long', 13.5997, 16.9926], ['Oji', 3.9049, 1.6764]],
        price: { '< 10K': 4.64, '10K-30K': 41.18, '30K-50K': 44.8, '50K-75K': 37.84, '75K-100K': 27.22, '100K-150K': 24.53, '150K-200K': 12.07, '200K-350K': 19.81, '350K-500K': 22.66, '500K-750K': 12.04, '750K-1M': 12.23, '1M-1.5M': 4.82, '1.5M-2M': 2.22, '2M-3.5M': 2.7, '3.5M-5M': 0.23, '5M-7.5M': 0.25, '7.5M-10M': 0.02 },
        prod: [
          { n: '10 ream Giấy in A4 70 gsm giấy A4 photo IK Copy Paper Thiên Long', br: 'IK Copy', ch: 'shopee', pr: 932000, fm: 'Combo', rv: 3200000000, g: 82, us: 3800, ug: 64, tr: 11400000000, tu: 15800, re: 3538, url: 'https://shopee.vn/product/101480242/10499808000' },
          { n: 'Combo 5 ream Giấy in A4 photo Thiên Long IK Copy 70 gsm đều màu', br: 'IK Copy', ch: 'shopee', pr: 466000, fm: 'Combo', rv: 2700000000, g: 5, us: 6300, ug: -7, tr: 25700000000, tu: 76400, re: 16955, url: 'https://shopee.vn/product/101480242/16794017668' },
          { n: 'Giấy In Nhiệt Tự Dính Dạng Tập 500 Tờ A6 100x150 A7 75x100', br: 'OEM', ch: 'shopee', pr: 45500, fm: 'Combo', rv: 2600000000, g: -12, us: 57700, ug: -13, tr: 29200000000, tu: 622800, re: 17032, url: 'https://shopee.vn/product/415458622/5084344482' },
          { n: 'XÃ KHO Băng Keo Băng Dính Trong Đục 4.8cm 200Yard 1.8kg cây', br: 'OEM', ch: 'shopee', pr: 60000, fm: 'Combo', rv: 2600000000, g: 58, us: 38300, ug: 1, tr: 21000000000, tu: 478500, re: 30564, url: 'https://shopee.vn/product/242520587/18320575698' },
          { n: 'Combo 10 ream giấy A4 Thiên Long IK Copy 70 80gsm - Thùng giấy', br: 'IK Copy', ch: 'shopee', pr: 835000, fm: 'Combo', rv: 2300000000, g: 59, us: 2900, ug: 39, tr: 6800000000, tu: 9700, re: 1984, url: 'https://shopee.vn/product/368671137/23940020482' },
          { n: 'Combo 20 tệp giấy in nhiệt A6 100x150 500 tờ tự dính in vận đơn', br: 'OEM', ch: 'shopee', pr: 1400000, fm: 'Combo', rv: 2100000000, g: 6, us: 1600, ug: -1, tr: 9400000000, tu: 8600, re: 813, url: 'https://shopee.vn/product/122616467/22143549219' },
          { n: 'THÙNG 50 CUỘN K80X80 - GIẤY IN BILL K80X80', br: 'OEM', ch: 'shopee', pr: 540000, fm: 'Combo', rv: 1600000000, g: 208, us: 2900, ug: 204, tr: 3000000000, tu: 5500, re: 522, url: 'https://shopee.vn/product/264150416/26012930758' },
          { n: 'File Lá Đựng Tài Liệu A4 Túi Bia Đựng Hồ Sơ 30 40 60 Lá Lưu Giữ', br: 'OEM', ch: 'tiktok', pr: 33600, fm: 'Combo', rv: 1500000000, g: 886, us: 49600, ug: 884, tr: 2200000000, tu: 72600, re: 3979, url: 'https://www.tiktok.com/view/product/1731643251315148754' },
          { n: 'Chuột máy tính gaming SIDOTECH INPHIC B1 có app hỗ trợ', br: 'Sidotech', ch: 'tiktok', pr: 173700, fm: 'Single', rv: 1500000000, g: -4, us: 9100, ug: -3, tr: 10300000000, tu: 84600, re: 7316, url: 'https://www.tiktok.com/view/product/1729644961478707665' },
          { n: 'THÙNG 50 CUỘN Giấy In bill K80x80 Giấy In Hóa Đơn K80x80', br: 'OEM', ch: 'shopee', pr: 650000, fm: 'Combo', rv: 1200000000, g: -38, us: 2000, ug: -44, tr: 6500000000, tu: 11300, re: 1102, url: 'https://shopee.vn/product/264150416/22231715268' }
        ]
      },

      long_bang: {
        gross: { cur: 4.1, pre: 3, g: 37 },
        units: { cur: 124700, pre: 220000, g: -43 },
        stores: { cur: 650, pre: 770, g: -15 },
        plat: { shopee: [3.6, 2.59], tiktok: [0.46, 0.3], lazada: [0.06, 0.14] },
        brand: [['Thiên Long', 1.7999, 1.7139], ['Deli', 0.8139, 0.327], ['Flexoffice', 0.0644, 0.048], ['Thiên An', 0.0517, 0.0279], ['Artline', 0.0398, 0.0249]],
        price: { '< 10K': 0.22, '10K-30K': 0.77, '30K-50K': 0.78, '50K-75K': 0.64, '75K-100K': 0.97, '100K-150K': 0.24, '150K-200K': 0.05, '200K-350K': 0.11, '350K-500K': 0.05, '500K-750K': 0.02, '750K-1M': 0.04, '1M-1.5M': 0.05, '1.5M-2M': 0.13, '2M-3.5M': 0.06 },
        prod: [
          { n: 'Combo Bút lông bảng Thiên Long WB-03 - Bút viết bảng xoá được', br: 'Thiên Long', ch: 'shopee', pr: 90000, fm: 'Combo', rv: 349200000, g: 5, us: 4200, ug: -6, tr: 1600000000, tu: 21100, re: 2302, url: 'https://shopee.vn/product/368671137/5576960676' },
          { n: 'TẶNG KÈM PHỤ KIỆN Bảng Từ Trắng Dán Tường Deli - Hút Nam Châm', br: 'Deli', ch: 'shopee', pr: 88000, fm: 'Single', rv: 324900000, g: 40, us: 2500, ug: 5, tr: 1000000000, tu: 9900, re: 1261, url: 'https://shopee.vn/product/127805122/41858697411' },
          { n: 'Combo 5 10 20 Bút lông bảng Thiên Long WB-03 mực Xanh Đỏ Đen', br: 'Thiên Long', ch: 'shopee', pr: 58500, fm: 'Combo', rv: 207800000, g: -20, us: 5400, ug: -13, tr: 1300000000, tu: 33300, re: 4893, url: 'https://shopee.vn/product/101480242/23576151446' },
          { n: 'Combo 5 10 20 Bút lông bảng Thiên Long WB-03 - Bút dạ viết bảng', br: 'Thiên Long', ch: 'shopee', pr: 39900, fm: 'Combo', rv: 173500000, g: 10, us: 4300, ug: 13, tr: 2700000000, tu: 50400, re: 5757, url: 'https://shopee.vn/product/367619913/15326547530' },
          { n: 'Bút lông bảng Hoshi Thiên Long WB-025 HS - Công nghệ Nhật Bản', br: 'Thiên Long', ch: 'shopee', pr: 14300, fm: 'Single', rv: 101600000, g: 11, us: 6200, ug: 41, tr: 371300000, tu: 17800, re: 1302, url: 'https://shopee.vn/product/367619913/55600034017' },
          { n: 'Bút lông bảng Hoshi Thiên Long WB-025 HS - Công nghệ Nhật Bản', br: 'Thiên Long', ch: 'shopee', pr: 14300, fm: 'Single', rv: 99000000, g: -42, us: 7700, ug: -40, tr: 937900000, tu: 71700, re: 7096, url: 'https://shopee.vn/product/101480242/29970555826' },
          { n: 'TẶNG HỘP 10 BÚT LÔNG Bảng Flipchart Hai Mặt Deli Bảng Viết Bút', br: 'Deli', ch: 'shopee', pr: 2000000, fm: 'Combo', rv: 83800000, g: 18, us: 0, ug: 9, tr: 181500000, tu: 100, re: 15, url: 'https://shopee.vn/product/348955539/57152225116' },
          { n: 'Combo 10 Bút lông bảng Thiên Long WB-03 đầu bút viết êm trơn', br: 'Thiên Long', ch: 'shopee', pr: 90000, fm: 'Combo', rv: 77700000, g: 24, us: 900, ug: 38, tr: 514900000, tu: 34200, re: 3718, url: 'https://shopee.vn/product/367619913/13364398128' },
          { n: 'Combo Bút lông bảng Thiên Long WB-02 viết bảng trắng nhỏ phù hợp', br: 'Thiên Long', ch: 'shopee', pr: 42600, fm: 'Combo', rv: 68600000, g: 111, us: 2000, ug: 100, tr: 166300000, tu: 5300, re: 802, url: 'https://shopee.vn/product/368671137/25701822513' },
          { n: 'Combo 5 10 20 Bút Lông Bảng Xóa Được DELI Thêm Mực Đầu Bút', br: 'Deli', ch: 'shopee', pr: 45000, fm: 'Combo', rv: 65700000, g: 33, us: 1300, ug: 18, tr: 434100000, tu: 12900, re: 1610, url: 'https://shopee.vn/product/127805122/25724132256' }
        ]
      },

      long_dau: {
        gross: { cur: 6.2, pre: 4.8, g: 29 },
        units: { cur: 173100, pre: 279900, g: -38 },
        stores: { cur: 1100, pre: 1200, g: -8 },
        plat: { shopee: [3.3, 2.85], tiktok: [2.8, 1.8], lazada: [0.08, 0.14] },
        brand: [['Thiên Long', 1.6002, 1.391], ['Leyue', 0.3621, null], ['But Viet', 0.2567, null], ['But', 0.1643, null], ['G-Star', 0.15, 0.1632]],
        price: { '< 10K': 0.22, '10K-30K': 0.99, '30K-50K': 1.24, '50K-75K': 2.45, '75K-100K': 0.18, '100K-150K': 0.89, '150K-200K': 0.15, '200K-350K': 0.07, '350K-500K': 0.01, '1M-1.5M': 0.01 },
        prod: [
          { n: 'Combo 10 cây bút lông dầu màu trắng không xóa được khô nhanh bền màu', br: 'OEM', ch: 'tiktok', pr: 64200, fm: 'Combo', rv: 297700000, g: -45, us: 4700, ug: -37, tr: 839800000, tu: 12400, re: 448, url: 'https://www.tiktok.com/view/product/1733890170414531648' },
          { n: 'Combo 50-30 Bút Lông Dầu TL Dầu Kim Đủ 3 Màu Xanh Đỏ Đen', br: 'Thiên Long', ch: 'tiktok', pr: 56100, fm: 'Combo', rv: 224100000, g: 0, us: 4400, ug: 0, tr: 233600000, tu: 4600, re: 212, url: 'https://www.tiktok.com/view/product/1734690032513157018' },
          { n: 'Combo Bút lông dầu Thiên Long 2 đầu PM-04 - Bút lông dầu bấm', br: 'Thiên Long', ch: 'shopee', pr: 108000, fm: 'Combo', rv: 185400000, g: 71, us: 1800, ug: 71, tr: 1400000000, tu: 15900, re: 1540, url: 'https://shopee.vn/product/368671137/13249566333' },
          { n: 'Combo 5 10 20 Bút lông dầu 2 đầu Thiên Long PM-09 mực đạt tiêu chuẩn', br: 'Thiên Long', ch: 'shopee', pr: 51000, fm: 'Combo', rv: 169200000, g: -32, us: 3200, ug: -27, tr: 1100000000, tu: 21200, re: 2767, url: 'https://shopee.vn/product/101480242/22050668198' },
          { n: 'COMBO 10 Bút đánh dầu màu trắng đa năng không xóa được bền màu', br: 'OEM', ch: 'tiktok', pr: 60800, fm: 'Combo', rv: 154800000, g: 114, us: 2300, ug: 149, tr: 230100000, tu: 3300, re: 126, url: 'https://www.tiktok.com/view/product/1733864467857114598' },
          { n: 'Combo 5 10 20 Bút lông dầu 2 đầu Thiên Long PM-04 bám dính', br: 'Thiên Long', ch: 'shopee', pr: 59000, fm: 'Combo', rv: 119400000, g: -68, us: 2300, ug: -67, tr: 1600000000, tu: 33000, re: 4662, url: 'https://shopee.vn/product/101480242/23576151442' },
          { n: 'Hộp 12 Cây Bút Lông Dầu Kim 2 Đầu Gstar CD-01 Xanh Đỏ Đen', br: 'G-Star', ch: 'shopee', pr: 67000, fm: 'Combo', rv: 116600000, g: 650, us: 1700, ug: 634, tr: 137700000, tu: 2100, re: 199, url: 'https://shopee.vn/product/81243419/24816146246' },
          { n: 'Combo 10 Bút lông dầu Thiên Long PM-04 gồm đầu lớn 1.0mm', br: 'Thiên Long', ch: 'shopee', pr: 108000, fm: 'Combo', rv: 110400000, g: 1947, us: 1100, ug: 1969, tr: 249900000, tu: 10000, re: 808, url: 'https://shopee.vn/product/367619913/3380058526' },
          { n: 'Combo 10 Bút lông dầu 2 đầu Thiên Long PM-09 mực đạt tiêu chuẩn', br: 'Thiên Long', ch: 'shopee', pr: 49000, fm: 'Combo', rv: 109900000, g: 124, us: 2300, ug: 119, tr: 158800000, tu: 3300, re: 275, url: 'https://shopee.vn/product/1473624456/49954744615' },
          { n: 'Combo 3 hộp 30 chiếc bút lông đầu kim', br: 'OEM', ch: 'tiktok', pr: 159300, fm: 'Combo', rv: 103000000, g: -29, us: 700, ug: -45, tr: 3000000000, tu: 36200, re: 1683, url: 'https://www.tiktok.com/view/product/1730844958738057785' }
        ]
      },

      xoa_nuoc: {
        gross: { cur: 0.98, pre: 0.57, g: 72 },
        units: { cur: 40200, pre: 41600, g: -3 },
        stores: { cur: 310, pre: 360, g: -16 },
        plat: { shopee: [0.72, 0.43], tiktok: [0.24, 0.12], lazada: [0.02, 0.03] },
        brand: [['Thiên Long', 0.3543, 0.2636], ['Deli', 0.0939, 0.0389], ['Besta', 0.0448, 0.0062], ['King', 0.0349, 0.027], ['G-Star', 0.0164, 0.0131]],
        price: { '< 10K': 0.02, '10K-30K': 0.51, '30K-50K': 0.03, '50K-75K': 0.24, '75K-100K': 0.08, '100K-150K': 0.08, '150K-200K': 0.01, '200K-350K': 0.02 },
        prod: [
          { n: 'Bút xóa nước 12ml Thiên Long CP-02 - Viết xóa sạch nhanh khô', br: 'Thiên Long', ch: 'shopee', pr: 27400, fm: 'Single', rv: 245000000, g: -4, us: 9800, ug: -5, tr: 2000000000, tu: 88900, re: 8626, url: 'https://shopee.vn/product/101480242/1635050758' },
          { n: 'Hộp 10 Bút Xóa Nước Thiên Long 12ml Xóa Sạch Nhanh Khô', br: 'Thiên Long', ch: 'tiktok', pr: 58200, fm: 'Combo', rv: 57100000, g: 7880, us: 900, ug: 7146, tr: 59000000, tu: 1000, re: 52, url: 'https://www.tiktok.com/view/product/1734726564517742586' },
          { n: 'Bút Xóa Nước 12ml Besta CP-01 Đầu Bút Bằng Thép Siêu Bền', br: 'Besta', ch: 'shopee', pr: 11800, fm: 'Single', rv: 44700000, g: 14, us: 4800, ug: 9, tr: 137600000, tu: 14800, re: 2865, url: 'https://shopee.vn/product/946543924/18389263613' },
          { n: 'DEAL 9K Bút Xóa Nước 12ml Deli Bút Xóa Sạch Nhanh Khô An Toàn', br: 'Deli', ch: 'shopee', pr: 12000, fm: 'Single', rv: 44000000, g: 100, us: 3700, ug: 85, tr: 317300000, tu: 29400, re: 6716, url: 'https://shopee.vn/product/127805122/2093863777' },
          { n: 'Bút Xóa Nước Rẻ CP08 16ml 1 Hộp 12 Cây', br: 'OEM', ch: 'shopee', pr: 61000, fm: 'Combo', rv: 43800000, g: 91, us: 700, ug: 89, tr: 326300000, tu: 8300, re: 1496, url: 'https://shopee.vn/product/204094877/17481153691' },
          { n: 'Bút xóa nước 12ml Thiên Long Combo 5 10 bút xóa sạch nhanh', br: 'Thiên Long', ch: 'shopee', pr: 50000, fm: 'Combo', rv: 36700000, g: 92, us: 700, ug: 66, tr: 106400000, tu: 2600, re: 571, url: 'https://shopee.vn/product/1331588213/25735179077' },
          { n: 'Sỉ KING CP09 Hộp 12 Cây Bút Xóa Nước Viết Xóa Nước KING CP-09', br: 'King', ch: 'tiktok', pr: 81500, fm: 'Combo', rv: 32700000, g: 221, us: 400, ug: 221, tr: 99500000, tu: 1800, re: 145, url: 'https://www.tiktok.com/view/product/1730603732733168603' },
          { n: '10 Bút Xóa Nước Thiên Long Nhanh Khô Đánh Siêu Sạch Dùng Cho Học Sinh', br: 'Thiên Long', ch: 'shopee', pr: 140000, fm: 'Combo', rv: 32200000, g: 14, us: 400, ug: -1, tr: 69000000, tu: 800, re: 64, url: 'https://shopee.vn/product/1473624456/45152286579' },
          { n: '12 Cây Bút Xóa Nước Rẻ 16ml', br: 'OEM', ch: 'shopee', pr: 65000, fm: 'Combo', rv: 19200000, g: 93, us: 300, ug: 108, tr: 48900000, tu: 800, re: 142, url: 'https://shopee.vn/product/34880242/26708927554' },
          { n: 'SALE Bút Xóa CP-02 Hộp 10 Bút Xóa Thiên Long CP-02', br: 'Thiên Long', ch: 'tiktok', pr: 109900, fm: 'Combo', rv: 18400000, g: 0, us: 200, ug: 0, tr: 19000000, tu: 200, re: 5, url: 'https://www.tiktok.com/view/product/1735227104992986787' }
        ]
      },

      file_folder: {
        gross: { cur: 12.5, pre: 8.8, g: 42 },
        units: { cur: 343900, pre: 426300, g: -19 },
        stores: { cur: 1400, pre: 1400, g: 0 },
        plat: { shopee: [9.6, 7.16], tiktok: [2.8, 1.32], lazada: [0.13, 0.25] },
        brand: [['Deli', 1.5, 1.4714], ['Flexoffice', 0.4838, 0.4127], ['Knote', 0.275, null], ['Plus', 0.2175, 0.2561], ['Qpenz', 0.1975, null]],
        price: { '< 10K': 0.07, '10K-30K': 2.52, '30K-50K': 4.78, '50K-75K': 2.99, '75K-100K': 0.81, '100K-150K': 0.54, '150K-200K': 0.47, '200K-350K': 0.17, '350K-500K': 0.09, '500K-750K': 0.02, '750K-1M': 0.02, '1M-1.5M': 0.04 },
        prod: [
          { n: 'TẶNG STICKER File Lá Đa Năng - Số Đa Năng Lưu Giữ Đề Thi Hình', br: 'Deli', ch: 'tiktok', pr: 54400, fm: 'Combo', rv: 830300000, g: -2, us: 19900, ug: 0, tr: 8400000000, tu: 238200, re: 16189, url: 'https://www.tiktok.com/view/product/1729454663877888639' },
          { n: 'Bia Lá File A4 30 60 Lá Dày Dặn Cao Cấp - File Nhựa Lưu Trữ Tài Liệu', br: 'OEM', ch: 'shopee', pr: 30400, fm: 'Combo', rv: 286100000, g: 5348, us: 10000, ug: 5008, tr: 293100000, tu: 10200, re: 1614, url: 'https://shopee.vn/product/1566396955/43460734274' },
          { n: 'File lá đựng tài liệu A4 KNOTE túi bia hồ sơ 100 lá siêu tiết kiệm', br: 'Knote', ch: 'shopee', pr: 59000, fm: 'Combo', rv: 268800000, g: 53, us: 4600, ug: 54, tr: 1200000000, tu: 22700, re: 2787, url: 'https://shopee.vn/product/1426030880/26172006082' },
          { n: 'Tập 100 túi đựng tài liệu A4 So mi lỗ đựng tài liệu chống nước', br: 'OEM', ch: 'shopee', pr: 47700, fm: 'Combo', rv: 198200000, g: 43, us: 4400, ug: 27, tr: 888000000, tu: 24300, re: 2566, url: 'https://shopee.vn/product/38778987/1909033407' },
          { n: 'Túi đựng hồ sơ khổ A4 túi đựng hồ sơ hoạt hình 30 60 trang bảo vệ', br: 'OEM', ch: 'tiktok', pr: 60900, fm: 'Combo', rv: 192900000, g: 17, us: 3500, ug: -13, tr: 418700000, tu: 9400, re: 549, url: 'https://www.tiktok.com/view/product/1732263026713461931' },
          { n: 'Bia Lá File A4 30 60 Lá Dày Dặn Cao Cấp - File Nhựa MTK31', br: 'OEM', ch: 'shopee', pr: 34600, fm: 'Combo', rv: 140700000, g: 1600, us: 4000, ug: 1496, tr: 158900000, tu: 4500, re: 238, url: 'https://shopee.vn/product/38778987/1609419730' },
          { n: 'Xấp 100 bia lá A4 Plus', br: 'Plus', ch: 'tiktok', pr: 167600, fm: 'Combo', rv: 138200000, g: 45, us: 800, ug: 39, tr: 950000000, tu: 6400, re: 813, url: 'https://www.tiktok.com/view/product/1732100478984553712' },
          { n: 'File lá đựng tài liệu A4 QPENZ túi bia hồ sơ 100 lá siêu tiết kiệm', br: 'Qpenz', ch: 'shopee', pr: 86400, fm: 'Combo', rv: 132400000, g: 28, us: 1600, ug: 25, tr: 349500000, tu: 4200, re: 210, url: 'https://shopee.vn/product/14668875/4934838718' },
          { n: 'M.Y Túi Đựng Tài Liệu A4 5 8 12 Ngăn - Cặp Hồ Sơ Nhiều Ngăn', br: 'M.Y Stationery', ch: 'tiktok', pr: 29000, fm: 'Combo', rv: 122100000, g: 30, us: 5200, ug: 23, tr: 345000000, tu: 14000, re: 2763, url: 'https://www.tiktok.com/view/product/1732643968477464269' },
          { n: 'File Tài Liệu File Lá 20 30 40 Túi Đựng Tài Liệu Màu Pastel Học Sinh', br: 'Deli', ch: 'shopee', pr: 29000, fm: 'Combo', rv: 118300000, g: 30, us: 4300, ug: 18, tr: 3300000000, tu: 98100, re: 19790, url: 'https://shopee.vn/product/1451947204/40606966998' }
        ]
      },

      giay_copy: {
        gross: { cur: 36, pre: 27.2, g: 32 },
        units: { cur: 197600, pre: 198100, g: 0 },
        stores: { cur: 760, pre: 740, g: 1 },
        plat: { shopee: [33.2, 23.22], tiktok: [2.5, 3.43], lazada: [0.24, 0.48] },
        brand: [['IK Copy', 14.1984, 11.6389], ['Deli', 4.6008, 0.9629], ['Thiên Long', 3.8016, 5.353], ['IK Plus', 2.5992, 0.8922], ['Paper One', 1.9008, 1.2675]],
        price: { '< 10K': 0.01, '10K-30K': 0.31, '30K-50K': 1, '50K-75K': 0.95, '75K-100K': 5.16, '100K-150K': 2.08, '150K-200K': 0.33, '200K-350K': 2.63, '350K-500K': 13.35, '500K-750K': 1.91, '750K-1M': 7.77, '1M-1.5M': 0.45, '1.5M-2M': 0.02 },
        prod: [
          { n: '10 ream Giấy in A4 70 gsm giấy A4 photo IK Copy Paper Thiên Long', br: 'IK Copy', ch: 'shopee', pr: 932000, fm: 'Combo', rv: 3200000000, g: 82, us: 3800, ug: 64, tr: 11400000000, tu: 15800, re: 3538, url: 'https://shopee.vn/product/101480242/10499808000' },
          { n: 'Combo 5 ream Giấy in A4 photo Thiên Long IK Copy 70 gsm đều màu', br: 'IK Copy', ch: 'shopee', pr: 466000, fm: 'Combo', rv: 2700000000, g: 5, us: 6300, ug: -7, tr: 25700000000, tu: 76400, re: 16955, url: 'https://shopee.vn/product/101480242/16794017668' },
          { n: 'Combo 10 ream giấy A4 Thiên Long IK Copy 70 80gsm - Thùng giấy', br: 'IK Copy', ch: 'shopee', pr: 835000, fm: 'Combo', rv: 2300000000, g: 59, us: 2900, ug: 39, tr: 6800000000, tu: 9700, re: 1984, url: 'https://shopee.vn/product/368671137/23940020482' },
          { n: 'COMBO 2 Thùng Giấy In A4 IK Plus Giấy Photo IK Plus 70gsm dày dặn', br: 'IK Plus', ch: 'shopee', pr: 795000, fm: 'Combo', rv: 1200000000, g: 132, us: 1600, ug: 126, tr: 2000000000, tu: 2800, re: 593, url: 'https://shopee.vn/product/548229539/29180146841' },
          { n: 'Combo 5 ream Giấy A4 giấy photo IK Copy Copy Plus 70 80gsm', br: 'IK Copy', ch: 'shopee', pr: 417000, fm: 'Combo', rv: 1200000000, g: 14, us: 3000, ug: 5, tr: 10100000000, tu: 30700, re: 6962, url: 'https://shopee.vn/product/368671137/23228967167' },
          { n: 'Giấy A4 500 tờ IK Copy 70 gsm - Giấy in A4 Thiên Long nhập khẩu', br: 'IK Copy', ch: 'shopee', pr: 93200, fm: 'Single', rv: 982600000, g: 5, us: 11400, ug: -6, tr: 8900000000, tu: 128600, re: 20770, url: 'https://shopee.vn/product/101480242/12922307639' },
          { n: 'VOUCHER LIVE 30K Thùng 5 10 Ream Giấy A4 Deli Giấy In Photo', br: 'Deli', ch: 'shopee', pr: 445000, fm: 'Combo', rv: 920500000, g: -30, us: 2400, ug: -36, tr: 8500000000, tu: 33200, re: 6716, url: 'https://shopee.vn/product/127805122/29227911732' },
          { n: 'Combo 5 Ream Giấy In Giấy A4 70 gsm - Giấy Photo Copy Giá Tốt Deli', br: 'Deli', ch: 'shopee', pr: 455000, fm: 'Combo', rv: 899000000, g: -24, us: 2300, ug: -29, tr: 5500000000, tu: 20700, re: 3927, url: 'https://shopee.vn/product/348955539/28678999911' },
          { n: 'Combo 5 ream giấy in A4 giấy photo 70 80gsm Thiên Long IK Copy', br: 'IK Copy', ch: 'shopee', pr: 417500, fm: 'Combo', rv: 890300000, g: -7, us: 2200, ug: -17, tr: 10700000000, tu: 32700, re: 8119, url: 'https://shopee.vn/product/367619913/21772657261' },
          { n: 'Thùng 5 ream giấy in A4 PaperOne Copier 70 gsm', br: 'Paper One', ch: 'shopee', pr: 435000, fm: 'Combo', rv: 729900000, g: 24, us: 1800, ug: 22, tr: 6000000000, tu: 16200, re: 3116, url: 'https://shopee.vn/product/483383841/10018451558' }
        ]
      },

      da_quang: {
        gross: { cur: 4.2, pre: 3.1, g: 35 },
        units: { cur: 230100, pre: 282100, g: -18 },
        stores: { cur: 1300, pre: 1500, g: -13 },
        plat: { shopee: [3.1, 2.37], tiktok: [1.1, 0.47], lazada: [0.03, 0.23] },
        brand: [['Deli', 0.7652, 0.478], ['Thiên Long', 0.3566, 0.2511], ['Bossee', 0.3137, null], ['Quaff', 0.0596, null], ['Zebra', 0.058, 0.0391]],
        price: { '< 10K': 0.63, '10K-30K': 1.6, '30K-50K': 1, '50K-75K': 0.45, '75K-100K': 0.09, '100K-150K': 0.18, '150K-200K': 0.06, '200K-350K': 0.01, '350K-500K': 0.01, '500K-750K': 0.22 },
        prod: [
          { n: 'Biến led huỳnh quang Biến led dạ quang 60x80cm 50x70cm 40x60cm', br: 'Điện Tử Định Tuấn', ch: 'shopee', pr: 530000, fm: 'Single', rv: 203700000, g: 28, us: 400, ug: 17, tr: 904400000, tu: 3800, re: 588, url: 'https://shopee.vn/product/368864437/25967978891' },
          { n: 'Bút Highlight Bút Đánh Dấu Dạ Quang Pastel Đủ 6 Màu - Bút Nhớ TakeNote', br: 'Bossee', ch: 'tiktok', pr: 31800, fm: 'Combo', rv: 180500000, g: -16, us: 5600, ug: -16, tr: 651200000, tu: 21500, re: 1661, url: 'https://www.tiktok.com/view/product/1732230778223233811' },
          { n: 'Bút Nhũ Kim Tuyến Lấp Lánh 12 Màu - Bút Highlight Đánh Dấu Sáng Tạo', br: 'Thiên Thành', ch: 'tiktok', pr: 17800, fm: 'Combo', rv: 143200000, g: 20, us: 6000, ug: 173, tr: 283700000, tu: 8700, re: 543, url: 'https://www.tiktok.com/view/product/1733191836290548787' },
          { n: 'FULL MÀU Bút Highlight Bút Nhớ Dòng Đánh Dấu Dạ Quang TakeNote', br: 'Deli', ch: 'shopee', pr: 9000, fm: 'Single', rv: 129900000, g: 66, us: 17500, ug: 85, tr: 861100000, tu: 133900, re: 12891, url: 'https://shopee.vn/product/348955539/9286931469' },
          { n: 'Set 5 Bút Highlight 2 Đầu M.Y - Viết Êm Tay Dành Cho Học Sinh', br: 'M.Y', ch: 'tiktok', pr: 38800, fm: 'Combo', rv: 115800000, g: 118, us: 3300, ug: 90, tr: 178500000, tu: 5400, re: 310, url: 'https://www.tiktok.com/view/product/1732952252567618858' },
          { n: 'Bút highlight đánh dầu màu macaron Deli - Bút dạ quang đánh dấu', br: 'Deli', ch: 'shopee', pr: 10000, fm: 'Single', rv: 88600000, g: 120, us: 10300, ug: 110, tr: 322400000, tu: 45900, re: 5175, url: 'https://shopee.vn/product/127805122/24568758870' },
          { n: 'Bút đánh dấu highlight dạ quang 18 màu lựa chọn', br: 'KugoMall', ch: 'shopee', pr: 7800, fm: 'Combo', rv: 78600000, g: 115, us: 12800, ug: 110, tr: 2800000000, tu: 549600, re: 61290, url: 'https://shopee.vn/product/513961787/11730839899' },
          { n: 'Bút highlight Deli 25 màu đánh dấu nhỏ dòng dạ quang Deli', br: 'Deli', ch: 'shopee', pr: 5000, fm: 'Single', rv: 76100000, g: -2, us: 10400, ug: 11, tr: 1200000000, tu: 212100, re: 28214, url: 'https://shopee.vn/product/127805122/11115991321' },
          { n: 'Một bút dạ Highlight tặng một số tay linh kiện điện tử dành cho người học', br: 'Tiến Tools', ch: 'tiktok', pr: 149700, fm: 'Single', rv: 57000000, g: 12, us: 400, ug: 13, tr: 252700000, tu: 2000, re: 184, url: 'https://www.tiktok.com/view/product/1731718202861782716' },
          { n: 'Bút Highlight Bút Đánh Dấu Dạ Quang Pastel Đủ 6 Màu - Bút Nhớ Học Sinh', br: 'Bossee', ch: 'shopee', pr: 28000, fm: 'Combo', rv: 49800000, g: -13, us: 1700, ug: -11, tr: 161500000, tu: 6100, re: 990, url: 'https://shopee.vn/product/1366221078/26317103425' }
        ]
      }
    }
  }
};

/* ===== DATA Q3 2026 — SỐ GỐC =====
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

ECOM_DATA.q3 = {
  period: { cur: 'Q3 2026', pre: 'Q3 2025', label: 'Strategic Report Q3 2026' },

  /* Theo tháng (tỷ, %). [] nếu chưa có. */
  monthly: [],

  cats: {
    but_viet: {
      all: {
        gross: { cur: 170.3, pre: 133.3, g: 28 },
        units: { cur: 4900000, pre: 7100000, g: -31 },
        stores: { cur: 5100, pre: 6000, g: -15 },
        plat: { shopee: [103.2, 80.1], tiktok: [66, 50.7], lazada: [1.1, 2.5] },
        brand: [['Thiên Long', 42.0641, 26.1268], ['Deli', 26.7371, 12.1303], ['Classmate', 5.7902, 1.8662], ['Bossee', 2.8951, 2.2661], ['Hồng Hà', 2.5545, null]],
        price: { '< 10K': 7.07, '10K-30K': 49.9, '30K-50K': 39.51, '50K-75K': 25.2, '75K-100K': 18.59, '100K-150K': 13.99, '150K-200K': 3.95, '200K-350K': 5, '350K-500K': 2.68, '500K-750K': 1.47, '750K-1M': 1.21, '1M-1.5M': 0.83, '1.5M-2M': 0.51, '2M-3.5M': 0.17, '3.5M-5M': 0.04, '7.5M-10M': 0.05, '10M-15M': 0.1 },
        prod: [
          { n: 'Combo 5 10 20 Bút gel bấm ngòi ST 0.5mm EG08S Deli', br: 'Deli', ch: 'tiktok', pr: 18100, fm: 'Combo', rv: 2900000000, g: 327, us: 135700, ug: 471, tr: 4800000000, tu: 227200, re: 13196, url: 'https://www.tiktok.com/view/product/1731593973247936127' },
          { n: 'Combo 10 20 Bút bi dầu màu pastel Deli EQ32', br: 'Deli', ch: 'tiktok', pr: 26100, fm: 'Combo', rv: 2600000000, g: 1532, us: 104300, ug: 1662, tr: 4400000000, tu: 165700, re: 12340, url: 'https://www.tiktok.com/view/product/1733976532781139583' },
          { n: 'Combo 5 10 20 Bút bi màu pastel PRO 027 Thiên Long TL-105', br: 'Thiên Long', ch: 'tiktok', pr: 31500, fm: 'Combo', rv: 2200000000, g: 86, us: 71200, ug: 109, tr: 9100000000, tu: 298700, re: 23890, url: 'https://www.tiktok.com/view/product/1729758198371814393' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long Pro 027 TL-105 - 3 màu mực', br: 'Thiên Long', ch: 'shopee', pr: 26000, fm: 'Combo', rv: 1600000000, g: 80, us: 35400, ug: 18, tr: 7300000000, tu: 244700, re: 44494, url: 'https://shopee.vn/product/101480242/21193760161' },
          { n: 'Combo 5 10 15 Bút Gel Minions Hồng Hà ngòi 0.5mm - 2760', br: 'Hồng Hà', ch: 'tiktok', pr: 49400, fm: 'Combo', rv: 1500000000, g: 16775, us: 30200, ug: 28412, tr: 2200000000, tu: 42300, re: 1952, url: 'https://www.tiktok.com/view/product/1730725163447388366' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long Candee TL-093 ngòi 0.6mm', br: 'Thiên Long', ch: 'tiktok', pr: 23900, fm: 'Combo', rv: 1400000000, g: 516, us: 57800, ug: 441, tr: 2800000000, tu: 130900, re: 10956, url: 'https://www.tiktok.com/view/product/1729758198860712953' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long TL-095 Butter Ink ngòi 0.5mm', br: 'Thiên Long', ch: 'shopee', pr: 44000, fm: 'Combo', rv: 1300000000, g: 348, us: 14400, ug: 142, tr: 5000000000, tu: 104600, re: 19877, url: 'https://shopee.vn/product/101480242/23576151438' },
          { n: 'Combo 5 10 20 Bút gel Fasgel Thiên Long GEL-068', br: 'Thiên Long', ch: 'tiktok', pr: 32300, fm: 'Combo', rv: 1200000000, g: -13, us: 37500, ug: -20, tr: 5900000000, tu: 191400, re: 15569, url: 'https://www.tiktok.com/view/product/1732616810831906809' },
          { n: 'Combo 5 10 20 Bút Gel Xóa được Thiên Long TP-GELE01', br: 'Thiên Long', ch: 'shopee', pr: 54000, fm: 'Combo', rv: 1200000000, g: 444, us: 10400, ug: 175, tr: 5000000000, tu: 82900, re: 16674, url: 'https://shopee.vn/product/101480242/19292039434' },
          { n: 'Combo Bút bi Thiên Long Pro 027 TL-105 màu pastel ngòi 0.5mm', br: 'Thiên Long', ch: 'shopee', pr: 26000, fm: 'Combo', rv: 1100000000, g: 133, us: 25400, ug: 36, tr: 4400000000, tu: 152500, re: 27116, url: 'https://shopee.vn/product/368671137/23577091247' }
        ]
      },

      but_bi: {
        gross: { cur: 54.2, pre: 40.6, g: 34 },
        units: { cur: 1400000, pre: 1600000, g: -14 },
        stores: { cur: 3000, pre: 3600, g: -16 },
        plat: { shopee: [31.1, 23.6], tiktok: [22.7, 16.1], lazada: [0.45, 0.84] },
        brand: [['Thiên Long', 25.8534, 16.1994], ['Deli', 5.7452, 1.6646], ['Aihao', 1.1382, 2.1112], ['G-Star', 0.8672, 2.5578], ['Flexoffice', 0.7588, 0.6902]],
        price: { '< 10K': 1.09, '10K-30K': 18.48, '30K-50K': 12.31, '50K-75K': 5.35, '75K-100K': 8.13, '100K-150K': 5.46, '150K-200K': 0.75, '200K-350K': 1.5, '350K-500K': 0.15, '500K-750K': 0.26, '750K-1M': 0.5, '1M-1.5M': 0.12, '1.5M-2M': 0.04, '2M-3.5M': 0.02, '3.5M-5M': 0.02 },
        prod: [
          { n: 'Combo 10 20 Bút bi dầu màu pastel Deli EQ32', br: 'Deli', ch: 'tiktok', pr: 26100, fm: 'Combo', rv: 2600000000, g: 1532, us: 104300, ug: 1662, tr: 4400000000, tu: 165700, re: 12340, url: 'https://www.tiktok.com/view/product/1733976532781139583' },
          { n: 'Combo 5 10 20 Bút bi màu pastel PRO 027 Thiên Long TL-105', br: 'Thiên Long', ch: 'tiktok', pr: 31500, fm: 'Combo', rv: 2200000000, g: 86, us: 71200, ug: 109, tr: 9100000000, tu: 298700, re: 23890, url: 'https://www.tiktok.com/view/product/1729758198371814393' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long Pro 027 TL-105 - 3 màu mực', br: 'Thiên Long', ch: 'shopee', pr: 26000, fm: 'Combo', rv: 1600000000, g: 80, us: 35400, ug: 18, tr: 7300000000, tu: 244700, re: 44494, url: 'https://shopee.vn/product/101480242/21193760161' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long Candee TL-093 ngòi 0.6mm', br: 'Thiên Long', ch: 'tiktok', pr: 23900, fm: 'Combo', rv: 1400000000, g: 516, us: 57800, ug: 441, tr: 2800000000, tu: 130900, re: 10956, url: 'https://www.tiktok.com/view/product/1729758198860712953' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long TL-095 Butter Ink ngòi 0.5mm', br: 'Thiên Long', ch: 'shopee', pr: 44000, fm: 'Combo', rv: 1300000000, g: 348, us: 14400, ug: 142, tr: 5000000000, tu: 104600, re: 19877, url: 'https://shopee.vn/product/101480242/23576151438' },
          { n: 'Combo Bút bi Thiên Long Pro 027 TL-105 màu pastel ngòi 0.5mm', br: 'Thiên Long', ch: 'shopee', pr: 26000, fm: 'Combo', rv: 1100000000, g: 133, us: 25400, ug: 36, tr: 4400000000, tu: 152500, re: 27116, url: 'https://shopee.vn/product/368671137/23577091247' },
          { n: 'Combo 20 Bút bi Thiên Long 027 Pro ngòi 0.5mm mực xanh đen', br: 'Thiên Long', ch: 'tiktok', pr: 120800, fm: 'Combo', rv: 868700000, g: 102, us: 7000, ug: 78, tr: 4500000000, tu: 43600, re: 4096, url: 'https://www.tiktok.com/view/product/1729758201010228217' },
          { n: 'Combo 20 Bút bi Thiên Long Pro 027 ngòi cao cấp 0.5mm', br: 'Thiên Long', ch: 'shopee', pr: 104000, fm: 'Combo', rv: 752600000, g: 121, us: 7100, ug: 129, tr: 1800000000, tu: 16900, re: 2794, url: 'https://shopee.vn/product/368671137/24129323180' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long TL-027 mực xanh đỏ đen tím', br: 'Thiên Long', ch: 'shopee', pr: 22000, fm: 'Combo', rv: 642700000, g: 108, us: 22200, ug: 63, tr: 3500000000, tu: 166100, re: 28396, url: 'https://shopee.vn/product/101480242/23576151410' },
          { n: 'Combo 20 cây bút bi xanh DF207', br: 'Denfeng', ch: 'tiktok', pr: 43800, fm: 'Combo', rv: 605500000, g: 797, us: 15100, ug: 761, tr: 734900000, tu: 18300, re: 1581, url: 'https://www.tiktok.com/view/product/1733416570167199248' }
        ]
      },

      but_gel: {
        gross: { cur: 76.9, pre: 59.6, g: 29 },
        units: { cur: 2700000, pre: 4200000, g: -36 },
        stores: { cur: 3000, pre: 3500, g: -15 },
        plat: { shopee: [45.9, 33.9], tiktok: [30.5, 24.5], lazada: [0.45, 1.1] },
        brand: [['Deli', 17.687, 8.1652], ['Thiên Long', 14.3803, 7.9864], ['Classmate', 5.383, 1.788], ['Bossee', 2.2301, 1.7284], ['Hồng Hà', 1.8456, null]],
        price: { '< 10K': 5.24, '10K-30K': 24.45, '30K-50K': 20.05, '50K-75K': 13.48, '75K-100K': 5.91, '100K-150K': 4.9, '150K-200K': 1.69, '200K-350K': 0.81, '350K-500K': 0.13, '500K-750K': 0.07, '750K-1M': 0.04, '1M-1.5M': 0.1, '1.5M-2M': 0.02 },
        prod: [
          { n: 'Combo 5 10 20 Bút gel bấm ngòi ST 0.5mm EG08S Deli', br: 'Deli', ch: 'tiktok', pr: 18100, fm: 'Combo', rv: 2900000000, g: 327, us: 135700, ug: 471, tr: 4800000000, tu: 227200, re: 13196, url: 'https://www.tiktok.com/view/product/1731593973247936127' },
          { n: 'Combo 5 10 15 Bút Gel Minions Hồng Hà ngòi 0.5mm - 2760', br: 'Hồng Hà', ch: 'tiktok', pr: 49400, fm: 'Combo', rv: 1500000000, g: 16775, us: 30200, ug: 28412, tr: 2200000000, tu: 42300, re: 1952, url: 'https://www.tiktok.com/view/product/1730725163447388366' },
          { n: 'Combo 5 10 20 Bút gel Fasgel Thiên Long GEL-068', br: 'Thiên Long', ch: 'tiktok', pr: 32300, fm: 'Combo', rv: 1200000000, g: -13, us: 37500, ug: -20, tr: 5900000000, tu: 191400, re: 15569, url: 'https://www.tiktok.com/view/product/1732616810831906809' },
          { n: 'Combo 5 10 20 Bút Gel Xóa được Thiên Long TP-GELE01', br: 'Thiên Long', ch: 'shopee', pr: 54000, fm: 'Combo', rv: 1200000000, g: 444, us: 10400, ug: 175, tr: 5000000000, tu: 82900, re: 16674, url: 'https://shopee.vn/product/101480242/19292039434' },
          { n: 'Bút Bi Nước Deli Viết Gel Bấm A575 Ngòi 0.5mm', br: 'Deli', ch: 'shopee', pr: 13000, fm: 'Single', rv: 1100000000, g: 50, us: 95300, ug: 14, tr: 8400000000, tu: 2096900, re: 136673, url: 'https://shopee.vn/product/127805122/18109428728' },
          { n: 'Hộp 12 Bút Gel Bấm EG08S Deli Ngòi ST 0.5mm', br: 'Deli', ch: 'shopee', pr: 13000, fm: 'Combo', rv: 967300000, g: 1932, us: 24300, ug: 516, tr: 1400000000, tu: 50800, re: 5661, url: 'https://shopee.vn/product/127805122/44353075829' },
          { n: 'Combo 5 10 20 Bút gel Fasgel Thiên Long GEL-068', br: 'Thiên Long', ch: 'shopee', pr: 26500, fm: 'Combo', rv: 871400000, g: 77, us: 20300, ug: 14, tr: 2400000000, tu: 72600, re: 12167, url: 'https://shopee.vn/product/101480242/42170566678' },
          { n: 'Hộp 12 24 48 Cây Bút Gel Đầu Bấm King TR5 AODEMEI 6119', br: 'King', ch: 'tiktok', pr: 58700, fm: 'Combo', rv: 770000000, g: 36, us: 12100, ug: 16, tr: 2100000000, tu: 36000, re: 2126, url: 'https://www.tiktok.com/view/product/1730185571302607719' },
          { n: 'Combo 5 10 20 Bút Gel Thiên Long Doraemon GEL-012 DO', br: 'Thiên Long', ch: 'shopee', pr: 38000, fm: 'Combo', rv: 726300000, g: 769, us: 9900, ug: 358, tr: 2800000000, tu: 66800, re: 12394, url: 'https://shopee.vn/product/101480242/22050668196' },
          { n: 'Hộp 10 12 Bút Gel Bấm Nắp ClassMate Ngòi ST 2 Bi Siêu Trơn', br: 'Classmate', ch: 'tiktok', pr: 35000, fm: 'Combo', rv: 597500000, g: 33, us: 18400, ug: 28, tr: 2800000000, tu: 111800, re: 8461, url: 'https://www.tiktok.com/view/product/1731356450781955429' }
        ]
      }
    },
    hoc_cu: {
      all: {
        gross: { cur: 379.3, pre: 287.9, g: 32 },
        units: { cur: 6500000, pre: 7000000, g: -8 },
        stores: { cur: 8300, pre: 9300, g: -11 },
        plat: { shopee: [168.1, 135.3], tiktok: [210.1, 149.2], lazada: [1.2, 3.4] },
        brand: [['Thiên Long', 26.1717, 26.1989], ['Deli', 24.6545, 11.2281], ['Casio', 11.379, 6.0459], ['Classmate', 8.3446, 1.4395], ['Natoli', 7.9653, 5.758]],
        price: { '< 10K': 7.69, '10K-30K': 46.68, '30K-50K': 36.99, '50K-75K': 45.31, '75K-100K': 28.41, '100K-150K': 33.9, '150K-200K': 40.13, '200K-350K': 70.23, '350K-500K': 22.89, '500K-750K': 27.63, '750K-1M': 11.28, '1M-1.5M': 7.32, '1.5M-2M': 0.28, '2M-3.5M': 0.19, '3.5M-5M': 0.11, '5M-7.5M': 0.28 },
        prod: [
          { n: 'Balo đi học thương hiệu NATOLI nhiều ngăn chống nước tốt', br: 'Natoli', ch: 'tiktok', pr: 311400, fm: 'Single', rv: 4900000000, g: 734, us: 16000, ug: 669, tr: 14700000000, tu: 58700, re: 6289, url: 'https://www.tiktok.com/view/product/1729439994934889330' },
          { n: 'Balo đi học nam nữ thương hiệu NATOLI nhiều ngăn chống nước tốt', br: 'Natoli', ch: 'shopee', pr: 279000, fm: 'Single', rv: 4800000000, g: 395, us: 17800, ug: 375, tr: 20600000000, tu: 84600, re: 21713, url: 'https://shopee.vn/product/515748887/12786241026' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN - Máy tính học sinh', br: 'Flexio', ch: 'shopee', pr: 666100, fm: 'Single', rv: 3900000000, g: -23, us: 6700, ug: -21, tr: 26600000000, tu: 44700, re: 10607, url: 'https://shopee.vn/product/101480242/22471594302' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN - Bảo hành 84 tháng', br: 'Thiên Long', ch: 'tiktok', pr: 678100, fm: 'Single', rv: 3900000000, g: 336, us: 5600, ug: 297, tr: 9900000000, tu: 14900, re: 1412, url: 'https://www.tiktok.com/view/product/1733173201144219641' },
          { n: 'Máy tính CASIO fx-880BTG PLUS_JAPAN QUALITY', br: 'Casio', ch: 'tiktok', pr: 1020000, fm: 'Single', rv: 3500000000, g: 1360, us: 3800, ug: 1312, tr: 6200000000, tu: 6700, re: 709, url: 'https://www.tiktok.com/view/product/1736117994305783398' },
          { n: 'Balo Đi Học đeo Vai da cao cấp BON2 bản cao cấp chống sốc 6 mặt', br: 'Hanama', ch: 'tiktok', pr: 222000, fm: 'Single', rv: 3300000000, g: 424, us: 16200, ug: 360, tr: 30400000000, tu: 189900, re: 22063, url: 'https://www.tiktok.com/view/product/1729607606810020339' },
          { n: 'Balo học sinh siêu nhẹ cho bé trai bé gái balo hoc sinh di hoc', br: 'OEM', ch: 'tiktok', pr: 175400, fm: 'Single', rv: 3200000000, g: 1001, us: 19000, ug: 952, tr: 4000000000, tu: 24400, re: 1550, url: 'https://www.tiktok.com/view/product/1731627160875927060' },
          { n: 'Hộp Bút Chì 2B Cao Cấp NoiR ClassMate Ngòi Chì Cứng Không Dễ Gãy', br: 'Classmate', ch: 'tiktok', pr: 47200, fm: 'Combo', rv: 2900000000, g: 43, us: 65600, ug: 40, tr: 5700000000, tu: 128500, re: 6838, url: 'https://www.tiktok.com/view/product/1734745827748513125' },
          { n: 'balo đi học nam nữ Natoli đơn giản nhiều ngăn chống nước', br: 'Nato Your Choice - Your Future', ch: 'tiktok', pr: 328000, fm: 'Single', rv: 2900000000, g: 4128, us: 9500, ug: 3994, tr: 3300000000, tu: 10800, re: 863, url: 'https://www.tiktok.com/view/product/1731609840446375896' },
          { n: 'Balo Chống Gù Capybara Dành cho Bé Trai,Bé Gái Lớp 1-6', br: 'OEM', ch: 'tiktok', pr: 173400, fm: 'Single', rv: 2600000000, g: 500, us: 14000, ug: 448, tr: 3000000000, tu: 16500, re: 1690, url: 'https://www.tiktok.com/view/product/1735603411934021318' }
        ]
      },

      may_tinh: {
        gross: { cur: 108.7, pre: 68, g: 60 },
        units: { cur: 269500, pre: 199900, g: 35 },
        stores: { cur: 615, pre: 661, g: -7 },
        plat: { shopee: [55.3, 38.5], tiktok: [52.7, 27.9], lazada: [0.64, 1.6] },
        brand: [['Casio', 72.2855, 40.8], ['Thiên Long', 16.8485, 20.06], ['Bitex', 1.8479, 0.612], ['Fahasa', 0.4348, 0.544]],
        price: { '< 10K': 0.03, '10K-30K': 0.48, '30K-50K': 0.29, '50K-75K': 3.81, '75K-100K': 0.63, '100K-150K': 0.75, '150K-200K': 0.79, '200K-350K': 7.34, '350K-500K': 2.85, '500K-750K': 26.8, '750K-1M': 60.81, '1M-1.5M': 3.67, '3.5M-5M': 0.11, '5M-7.5M': 0.29 },
        prod: [
          { n: 'Máy tính Casio Fx-580VNX nhiều màu được mang vào phòng thi', br: 'Casio', ch: 'tiktok', pr: 924600, fm: 'Single', rv: 14300000000, g: 163, us: 16500, ug: 152, tr: 52400000000, tu: 64600, re: 6644, url: 'https://www.tiktok.com/view/product/1729430797999508070' },
          { n: 'Máy tính Casio Fx-580VNX dành cho học sinh cấp 2 cấp 3', br: 'Casio', ch: 'tiktok', pr: 910000, fm: 'Single', rv: 9500000000, g: 492, us: 10200, ug: 414, tr: 14500000000, tu: 16800, re: 1717, url: 'https://www.tiktok.com/view/product/1730341775370521190' },
          { n: 'Máy Tính Casio FX-580VN X dành cho học sinh cấp 3 cấp 2', br: 'Casio', ch: 'shopee', pr: 840000, fm: 'Single', rv: 8700000000, g: 116, us: 10500, ug: 116, tr: 77000000000, tu: 105000, re: 27783, url: 'https://shopee.vn/product/140792708/4558727890' },
          { n: 'Máy tính Casio Fx-580VNX màu đen xanh hồng dành cho học sinh', br: 'Casio', ch: 'shopee', pr: 852000, fm: 'Single', rv: 4400000000, g: 4276, us: 5700, ug: 4888, tr: 13800000000, tu: 17700, re: 3783, url: 'https://shopee.vn/product/140792708/12566682447' },
          { n: 'MÁY TÍNH CASIO fx-880BTG DÀNH CHO HỌC SINH CẤP 2-3', br: 'Casio', ch: 'tiktok', pr: 579400, fm: 'Single', rv: 4100000000, g: 203, us: 7000, ug: 228, tr: 11000000000, tu: 18000, re: 2033, url: 'https://www.tiktok.com/view/product/1730341649338305126' },
          { n: 'Máy Tính Casio FX-580VN X - Màu Đen Hồng Xanh - Fahasa x Bitex', br: 'Casio', ch: 'shopee', pr: 839000, fm: 'Single', rv: 4000000000, g: -25, us: 5000, ug: -25, tr: 45700000000, tu: 62500, re: 12769, url: 'https://shopee.vn/product/142856269/9633799567' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN', br: 'Thiên Long', ch: 'shopee', pr: 666100, fm: 'Single', rv: 3900000000, g: -23, us: 6700, ug: -21, tr: 26100000000, tu: 44300, re: 10771, url: 'https://shopee.vn/product/101480242/22471594302' },
          { n: 'Máy tính khoa học Thiên Long Flexio Fx799VN', br: 'Thiên Long', ch: 'tiktok', pr: 678100, fm: 'Single', rv: 3900000000, g: 336, us: 5600, ug: 297, tr: 9900000000, tu: 14900, re: 1412, url: 'https://www.tiktok.com/view/product/1733173201144219641' },
          { n: 'Máy tính CASIO fx-880BTG PLUS_JAPAN QUALITY', br: 'Casio', ch: 'tiktok', pr: 1020000, fm: 'Single', rv: 3500000000, g: 1360, us: 3800, ug: 1312, tr: 6200000000, tu: 6700, re: 709, url: 'https://www.tiktok.com/view/product/1736117994305783398' },
          { n: 'Máy Tính Casio fx-580VN X Chính Hãng Bitex', br: 'Casio', ch: 'shopee', pr: 845000, fm: 'Single', rv: 2300000000, g: 95, us: 1800, ug: 29, tr: 4200000000, tu: 4200, re: 821, url: 'https://shopee.vn/product/1654326356/45855695808' }
        ]
      },

      tap_vo: {
        gross: { cur: 71.6, pre: 45.5, g: 57 },
        units: { cur: 1800000, pre: 1700000, g: 4 },
        stores: { cur: 1300, pre: 1500, g: -10 },
        plat: { shopee: [45.4, 35.6], tiktok: [25.9, 9.2], lazada: [0.32, 0.72] },
        brand: [['Classmate', 15.3224, 3.5945], ['Thiên Long', 7.3032, 4.095], ['Hồng Hà', 4.7256, 3.2305], ['H H T Hải Tiến', 4.5108, 3.0485], ['Việt Long', 4.0096, 1.1375]],
        price: { '< 10K': 2.66, '10K-30K': 13.42, '30K-50K': 12.29, '50K-75K': 17.28, '75K-100K': 12.57, '100K-150K': 4.47, '150K-200K': 6.92, '200K-350K': 1.47, '350K-500K': 0.09, '500K-750K': 0.17, '750K-1M': 0.01, '1M-1.5M': 0.29, '1.5M-2M': 0.01 },
        prod: [
          { n: 'VỞ 96 TRANG 4 ÔLI 70GMS GIẤY VIẾT CAO CẤP CHO HỌC SINH CẤP 2-3', br: 'Việt Long', ch: 'tiktok', pr: 165500, fm: 'Single', rv: 2600000000, g: 197, us: 16500, ug: 193, tr: 4100000000, tu: 27200, re: 2494, url: 'https://www.tiktok.com/view/product/1730317625553030129' },
          { n: 'TẬP HỌC SINH MIỀN NAM HPBOOK 4 ÔLY 100 TRANG', br: 'Hp', ch: 'tiktok', pr: 163400, fm: 'Single', rv: 1500000000, g: 446, us: 8900, ug: 417, tr: 1800000000, tu: 11400, re: 1239, url: 'https://www.tiktok.com/view/product/1732051050193716782' },
          { n: 'Combo 10 Vở Kẻ Ngang B5 ClassMate BankMee HappyDay Matcha', br: 'Classmate', ch: 'shopee', pr: 72000, fm: 'Combo', rv: 1400000000, g: 5454, us: 18800, ug: 5553, tr: 1800000000, tu: 24700, re: 3843, url: 'https://shopee.vn/product/1326137699/26357685549' },
          { n: 'Combo 2 5 10 Tập 4 Ôly & Vở Kẻ Ngang BST Happy Day CLASSMATE', br: 'Classmate', ch: 'tiktok', pr: 26600, fm: 'Combo', rv: 1300000000, g: 2102, us: 50200, ug: 2138, tr: 1400000000, tu: 55800, re: 4420, url: 'https://www.tiktok.com/view/product/1736105206295594341' },
          { n: 'Combo 10 Vở Kẻ Ngang ClassMate 80 120 200 Trang Happy Day', br: 'Classmate', ch: 'shopee', pr: 80000, fm: 'Combo', rv: 1100000000, g: 1502, us: 13000, ug: 1507, tr: 1600000000, tu: 19400, re: 3055, url: 'https://shopee.vn/product/988766468/24832964095' },
          { n: 'Combo 5 10 Tập học sinh 96 trang 4 ô ly vuông Điểm 10', br: 'Thiên Long', ch: 'tiktok', pr: 55200, fm: 'Combo', rv: 1000000000, g: 3901, us: 28800, ug: 5905, tr: 1100000000, tu: 29300, re: 2170, url: 'https://www.tiktok.com/view/product/1730811196244790265' },
          { n: 'Combo 10 quyển vở kẻ ngang HẢI TIẾN Vở kẻ Bingo NEON ĐL 60g m2', br: 'H H T Hải Tiến', ch: 'tiktok', pr: 65500, fm: 'Combo', rv: 733200000, g: 18477, us: 11000, ug: 17402, tr: 753200000, tu: 11300, re: 1011, url: 'https://www.tiktok.com/view/product/1735742498775533208' },
          { n: 'Combo 10 Vở Kẻ Ngang CLASSMATE 80 120 200 Trang Bìa Dày Chống Nước', br: 'Classmate', ch: 'shopee', pr: 80000, fm: 'Combo', rv: 699300000, g: 374, us: 8900, ug: 416, tr: 2400000000, tu: 33200, re: 5423, url: 'https://shopee.vn/product/234655640/23072575903' },
          { n: 'Combo 10 cuốn Tập học sinh 4 ô ly 96 trang Thiên Long Điểm 10 TP-NB039', br: 'Thiên Long', ch: 'shopee', pr: 92000, fm: 'Combo', rv: 632000000, g: 323, us: 7400, ug: 310, tr: 2300000000, tu: 31500, re: 4021, url: 'https://shopee.vn/product/101480242/20082661083' },
          { n: 'Combo 10 Quyển Tập Vở Học Sinh ABC 96 Trang Khổ A5 70 80gsm', br: 'Hà My Bookstore', ch: 'shopee', pr: 75500, fm: 'Combo', rv: 609600000, g: 50, us: 8000, ug: 59, tr: 3400000000, tu: 46600, re: 5250, url: 'https://shopee.vn/product/268018871/9628493947' }
        ]
      },

      balo: {
        gross: { cur: 206.8, pre: 187.3, g: 10 },
        units: { cur: 1100000, pre: 1100000, g: -5 },
        stores: { cur: 1800, pre: 2100, g: -13 },
        plat: { shopee: [66.6, 68.3], tiktok: [139.8, 117.4], lazada: [0.44, 1.5] },
        brand: [['Natoli', 7.8584, 5.4317], ['Genbag', 4.9632, 5.0571], ['Hanama', 4.136, 7.8666], ['Xbei', 3.3088, 0.9365], ['Nato Your Choice - Your Future', 3.102, null]],
        price: { '10K-30K': 0.3, '30K-50K': 2.35, '50K-75K': 6.99, '75K-100K': 7.19, '100K-150K': 25.06, '150K-200K': 35.56, '200K-350K': 83.95, '350K-500K': 25.1, '500K-750K': 16.14, '750K-1M': 3.6, '1M-1.5M': 0.29, '1.5M-2M': 0.24, '2M-3.5M': 0.01 },
        prod: [
          { n: 'Balo đi học thương hiệu NATOLI nhiều ngăn chống nước tốt', br: 'Natoli', ch: 'tiktok', pr: 311400, fm: 'Single', rv: 4900000000, g: 734, us: 16000, ug: 669, tr: 14700000000, tu: 58700, re: 6289, url: 'https://www.tiktok.com/view/product/1729439994934889330' },
          { n: 'Balo đi học nam nữ thương hiệu NATOLI nhiều ngăn chống nước tốt', br: 'Natoli', ch: 'shopee', pr: 279000, fm: 'Single', rv: 4800000000, g: 395, us: 17800, ug: 375, tr: 20400000000, tu: 83900, re: 21759, url: 'https://shopee.vn/product/515748887/12786241026' },
          { n: 'HiP Balo - Balo Đi Học Thời Trang – Chống Nước Cao Cấp', br: 'OEM', ch: 'tiktok', pr: 260800, fm: 'Single', rv: 4400000000, g: 92, us: 20500, ug: 89, tr: 29200000000, tu: 170900, re: 16287, url: 'https://www.tiktok.com/view/product/1730256379947223841' },
          { n: 'Balo Đi Học đeo Vai da cao cấp BON2 bản cao cấp chống sốc 6 mặt', br: 'Hanama', ch: 'tiktok', pr: 222000, fm: 'Single', rv: 3300000000, g: 424, us: 16200, ug: 360, tr: 30400000000, tu: 189900, re: 22063, url: 'https://www.tiktok.com/view/product/1729607606810020339' },
          { n: 'Balo học sinh siêu nhẹ cho bé trai bé gái balo hoc sinh di hoc', br: 'OEM', ch: 'tiktok', pr: 175400, fm: 'Single', rv: 3200000000, g: 1001, us: 19000, ug: 952, tr: 4000000000, tu: 24400, re: 1550, url: 'https://www.tiktok.com/view/product/1731627160875927060' },
          { n: 'balo đi học nam nữ Natoli đơn giản nhiều ngăn chống nước', br: 'Nato Your Choice - Your Future', ch: 'tiktok', pr: 328000, fm: 'Single', rv: 2900000000, g: 4128, us: 9500, ug: 3994, tr: 3300000000, tu: 10800, re: 863, url: 'https://www.tiktok.com/view/product/1731609840446375896' },
          { n: 'Balo vải trượt nước DREAMY lấp lánh balo đi học GENBAG ulzzang', br: 'Genbag', ch: 'tiktok', pr: 282500, fm: 'Single', rv: 2700000000, g: 10129, us: 9300, ug: 9968, tr: 3000000000, tu: 10300, re: 897, url: 'https://www.tiktok.com/view/product/1736359128678499921' },
          { n: 'Balo Chống Gù Capybara Dành cho Bé Trai,Bé Gái Lớp 1-6', br: 'OEM', ch: 'tiktok', pr: 173400, fm: 'Single', rv: 2600000000, g: 500, us: 14000, ug: 448, tr: 3000000000, tu: 16500, re: 1690, url: 'https://www.tiktok.com/view/product/1735603411934021318' },
          { n: 'Balo học sinh siêu nhẹ cho bé trai bé gái balo hoc sinh di hoc', br: 'OEM', ch: 'tiktok', pr: 169100, fm: 'Single', rv: 2300000000, g: 440, us: 14100, ug: 417, tr: 7100000000, tu: 45700, re: 3478, url: 'https://www.tiktok.com/view/product/1730326057829960444' },
          { n: 'Balo đi học đi chơi dễ thương cuteeee', br: 'OEM', ch: 'tiktok', pr: 230500, fm: 'Single', rv: 2300000000, g: 589, us: 11100, ug: 582, tr: 3000000000, tu: 14800, re: 1024, url: 'https://www.tiktok.com/view/product/1729853400085334817' }
        ]
      },

      but_chi: {
        gross: { cur: 15.5, pre: 9, g: 72 },
        units: { cur: 514000, pre: 537500, g: -4 },
        stores: { cur: 1100, pre: 1300, g: -14 },
        plat: { shopee: [10.4, 6.6], tiktok: [5, 2.3], lazada: [0.08, 0.14] },
        brand: [['Deli', 4.402, 2.628], ['Thiên Long', 2.914, 1.755], ['Classmate', 2.573, 0.144], ['Nusign', 0.589, null], ['G-Star', 0.5425, 0.495]],
        price: { '< 10K': 1.15, '10K-30K': 3.22, '30K-50K': 5.27, '50K-75K': 4.23, '75K-100K': 0.3, '100K-150K': 0.79, '150K-200K': 0.28, '200K-350K': 0.26, '350K-500K': 0.02 },
        prod: [
          { n: 'Hộp 10 20 Bút Chì 2B Matcha ClassMate Ngòi Cứng Không Dễ Gãy', br: 'Classmate', ch: 'tiktok', pr: 69800, fm: 'Combo', rv: 1300000000, g: null, us: 23800, ug: null, tr: 3300000000, tu: 53100, re: 3002, url: 'https://www.tiktok.com/view/product/1736734664758429029' },
          { n: 'Hộp 10 cây Bút chì gỗ Thiên Long GP-01 thân lục giác', br: 'Thiên Long', ch: 'shopee', pr: 40000, fm: 'Combo', rv: 736900000, g: 257, us: 16600, ug: 217, tr: 2500000000, tu: 66200, re: 11818, url: 'https://shopee.vn/product/101480242/1673220598' },
          { n: 'Hộp 10 bút chì học sinh Thiên Long', br: 'Thiên Long', ch: 'tiktok', pr: 40600, fm: 'Combo', rv: 559400000, g: 142, us: 10900, ug: 94, tr: 993600000, tu: 22600, re: 696, url: 'https://www.tiktok.com/view/product/1729549834191145977' },
          { n: 'Vỉ 20 bút chì 2B HB Deli - Bút lục giác tam giác vẽ mỹ thuật', br: 'Deli', ch: 'tiktok', pr: 55500, fm: 'Single', rv: 526300000, g: 449, us: 15400, ug: 272, tr: 1300000000, tu: 50700, re: 3793, url: 'https://www.tiktok.com/view/product/1729430136140302975' },
          { n: 'Combo 10 Bút chì gỗ Thiên Long Signature Coach Exam Grade 2B', br: 'Thiên Long', ch: 'shopee', pr: 49000, fm: 'Combo', rv: 349300000, g: 215, us: 5900, ug: 223, tr: 845000000, tu: 15200, re: 2709, url: 'https://shopee.vn/product/101480242/24898158549' },
          { n: 'Hộp 10 Bút Chì NoiR Classmate Bút Chì 2B Đậm Chuẩn 2B', br: 'Classmate', ch: 'shopee', pr: 50000, fm: 'Combo', rv: 340300000, g: 224, us: 9200, ug: 198, tr: 741500000, tu: 18200, re: 2484, url: 'https://shopee.vn/product/560774951/57907058607' },
          { n: 'Vỉ 10 12 Bút Chì Gỗ 2B HB Học Sinh Deli Chì Đậm Cho Bé', br: 'Deli', ch: 'shopee', pr: 16000, fm: 'Single', rv: 311400000, g: 74, us: 16300, ug: 94, tr: 3600000000, tu: 212300, re: 42093, url: 'https://shopee.vn/product/127805122/5431388748' },
          { n: 'Combo 10 Bút Chì Đen 2B HB Nusign Cao Cấp Ngòi Chì Cứng', br: 'Nusign', ch: 'shopee', pr: 24500, fm: 'Combo', rv: 278500000, g: 541, us: 9400, ug: 173, tr: 484200000, tu: 18700, re: 2679, url: 'https://shopee.vn/product/464418479/26951471159' },
          { n: 'Vỉ 10 12 Bút Chì Gỗ 2B HB Lục Giác Deli', br: 'Deli', ch: 'shopee', pr: 9000, fm: 'Single', rv: 211400000, g: 18, us: 9900, ug: 35, tr: 1500000000, tu: 81900, re: 12665, url: 'https://shopee.vn/product/348955539/5567612537' },
          { n: 'Hộp 10 cây Bút chì gỗ lục giác Thiên Long GP-018', br: 'Thiên Long', ch: 'shopee', pr: 40000, fm: 'Combo', rv: 211200000, g: 27, us: 4600, ug: 19, tr: 1000000000, tu: 24100, re: 3710, url: 'https://shopee.vn/product/101480242/1635055148' }
        ]
      },

      gom: {
        gross: { cur: 11.1, pre: 6.4, g: 74 },
        units: { cur: 801000, pre: 953500, g: -16 },
        stores: { cur: 1500, pre: 1800, g: -16 },
        plat: { shopee: [6.4, 4.6], tiktok: [4.6, 1.6], lazada: [0.03, 0.1] },
        brand: [['Deli', 5.6055, 1.9392], ['Classmate', 0.9213, 0.032], ['Thiên Long', 0.3663, 0.6656], ['Quaff', 0.2664, 0.0384], ['Nusign', 0.2331, null]],
        price: { '< 10K': 2.83, '10K-30K': 3.56, '30K-50K': 3.72, '50K-75K': 0.38, '75K-100K': 0.23, '100K-150K': 0.31, '150K-200K': 0.03, '200K-350K': 0.02 },
        prod: [
          { n: 'Set 4 5 6 tẩy không vụn Nusign x Deli', br: 'Deli', ch: 'tiktok', pr: 36800, fm: 'Combo', rv: 1600000000, g: 124, us: 43900, ug: 82, tr: 3800000000, tu: 112800, re: 8155, url: 'https://www.tiktok.com/view/product/1730991643525286527' },
          { n: 'Hộp 6 Gôm Tẩy NoiR ClassMate Siêu Sạch Không Bụi Vụn', br: 'Classmate', ch: 'tiktok', pr: 41400, fm: 'Combo', rv: 673000000, g: null, us: 18100, ug: null, tr: 1200000000, tu: 31700, re: 1835, url: 'https://www.tiktok.com/view/product/1736871398245303653' },
          { n: 'Gôm Tẩy Định Vị Tẩy Bút Chì Deli Tẩy Sạch Sẽ Ít Vụn', br: 'Deli', ch: 'shopee', pr: 9000, fm: 'Single', rv: 277000000, g: 178, us: 30800, ug: 163, tr: 406800000, tu: 45900, re: 1122, url: 'https://shopee.vn/product/1021392906/29858633368' },
          { n: 'Hộp 6 Gôm Tẩy Siêu Sạch Deli Nusign Cao Cấp Tẩy Mềm', br: 'Deli', ch: 'shopee', pr: 18000, fm: 'Combo', rv: 245700000, g: 116, us: 13600, ug: 146, tr: 821600000, tu: 41300, re: 6921, url: 'https://shopee.vn/product/127805122/26213312447' },
          { n: 'Gôm Tẩy Định Vị Tẩy Bút Chì Deli Tẩy Sạch Sẽ Ít Vụn', br: 'Deli', ch: 'shopee', pr: 9000, fm: 'Single', rv: 189400000, g: 66, us: 21000, ug: 54, tr: 738800000, tu: 86300, re: 12407, url: 'https://shopee.vn/product/127805122/28757886370' },
          { n: 'Hộp 6 Gôm Tẩy Nusign Cao Cấp Siêu Sạch Ít Vụn', br: 'Nusign', ch: 'shopee', pr: 9000, fm: 'Combo', rv: 181900000, g: 177, us: 11000, ug: 38, tr: 338600000, tu: 24400, re: 4000, url: 'https://shopee.vn/product/464418479/27074209091' },
          { n: 'Gôm Tẩy Chì 2 Đầu Deli - Tẩy Xóa Cả Chì 2B HB Sạch Sẽ Ít Vụn', br: 'Deli', ch: 'shopee', pr: 7000, fm: 'Single', rv: 161300000, g: 731, us: 6300, ug: 254, tr: 270200000, tu: 13400, re: 1991, url: 'https://shopee.vn/product/1021396369/29853380935' },
          { n: 'Gôm Tẩy Chì 2B 4B Deli Màu Đen Tẩy Sạch Ít Vụn Tẩy Nhỏ Gọn', br: 'Deli', ch: 'shopee', pr: 3000, fm: 'Single', rv: 139300000, g: 42, us: 46400, ug: 47, tr: 865200000, tu: 274800, re: 32810, url: 'https://shopee.vn/product/127805122/6175440807' },
          { n: 'Gôm Tẩy Deli Màu Trắng - Tẩy Sạch Ít Vụn Tẩy', br: 'Deli', ch: 'shopee', pr: 3000, fm: 'Single', rv: 134700000, g: 11, us: 44900, ug: 24, tr: 816600000, tu: 266800, re: 26051, url: 'https://shopee.vn/product/127805122/3824689315' },
          { n: 'Gôm Tẩy Bút Chì 2B 4B Deli - Tẩy Sạch Sẽ Ít Vụn Không Mòn Giấy', br: 'Deli', ch: 'tiktok', pr: 21000, fm: 'Single', rv: 132500000, g: 90, us: 4800, ug: 46, tr: 268400000, tu: 8900, re: 182, url: 'https://www.tiktok.com/view/product/1734911308682462847' }
        ]
      }
    },
    my_thuat: {
      all: {
        gross: { cur: 104.8, pre: 84, g: 25 },
        units: { cur: 2200000, pre: 2400000, g: -10 },
        stores: { cur: 5300, pre: 6100, g: -14 },
        plat: { shopee: [70.6, 57], tiktok: [33.8, 25], lazada: [0.43, 2] },
        brand: [['Deli', 17.5016, 9.156], ['Thiên Long', 8.2792, 6.552], ['Bossee', 3.7728, 1.344], ['Mont Marte', 2.5152, 2.016], ['Global Art', 2.096, 1.512]],
        price: { '< 10K': 0.66, '10K-30K': 21.31, '30K-50K': 21.12, '50K-75K': 21.98, '75K-100K': 9.53, '100K-150K': 8.88, '150K-200K': 4.74, '200K-350K': 9.77, '350K-500K': 2.91, '500K-750K': 1.94, '750K-1M': 0.79, '1M-1.5M': 0.6, '1.5M-2M': 0.39, '2M-3.5M': 0.18, '3.5M-5M': 0.04, '5M-7.5M': 0.01, '7.5M-10M': 0.01 },
        prod: [
          { n: 'Hộp 60 bút màu Acrylic Marker cao cấp chống nước màu sắc tươi sáng', br: 'OEM', ch: 'tiktok', pr: 64100, fm: 'Combo', rv: 2300000000, g: 13, us: 35700, ug: 19, tr: 16900000000, tu: 261200, re: 19699, url: 'https://www.tiktok.com/view/product/1730750363609630947' },
          { n: 'Bộ Bút Lông Màu Acrylic Marker Hộp 60 Màu Màu Sắc Tươi Sáng', br: 'OEM', ch: 'tiktok', pr: 60100, fm: 'Combo', rv: 1400000000, g: 142, us: 22900, ug: 106, tr: 2800000000, tu: 48100, re: 4788, url: 'https://www.tiktok.com/view/product/1732131667763169918' },
          { n: 'Bút Sơn Màu Acrylic Markers Deli Hộp 12 24 36 64 Box Màu', br: 'Deli', ch: 'shopee', pr: 12000, fm: 'Combo', rv: 1300000000, g: 457, us: 15100, ug: 5, tr: 3200000000, tu: 168100, re: 31017, url: 'https://shopee.vn/product/127805122/24261863092' },
          { n: 'Bút Sơn Màu Acrylic Markers Deli Hộp 12 24 36 64 Box Màu', br: 'Deli', ch: 'shopee', pr: 12000, fm: 'Combo', rv: 1200000000, g: 45, us: 11300, ug: -17, tr: 3500000000, tu: 112600, re: 20780, url: 'https://shopee.vn/product/348955539/25215129183' },
          { n: 'Bút lông màu Fiber Pen Thiên Long Colokit 5 12 24 màu Morandi', br: 'Thiên Long', ch: 'tiktok', pr: 42600, fm: 'Single', rv: 810000000, g: 195, us: 19800, ug: 211, tr: 2300000000, tu: 63800, re: 7132, url: 'https://www.tiktok.com/view/product/1732234717911157753' },
          { n: 'MW Bộ bút dạ lỏng, Acrylic Marker, đầu cọ mềm 48 60 80 120 168 màu', br: 'OEM', ch: 'shopee', pr: 219000, fm: 'Combo', rv: 768800000, g: 116, us: 2300, ug: 90, tr: 1200000000, tu: 4100, re: 801, url: 'https://shopee.vn/product/1370113610/46454533197' },
          { n: 'Hộp Bút Lông 48 60 Màu Thiên Long Fiber Pen Washable', br: 'Thiên Long', ch: 'tiktok', pr: 142200, fm: 'Combo', rv: 706600000, g: 1087, us: 4900, ug: 1150, tr: 1200000000, tu: 7900, re: 1041, url: 'https://www.tiktok.com/view/product/1732761890580236281' },
          { n: 'Thẻ Thực Hành Đồ Chơi Bộ 4 Thẻ Và 1 Bút Bút Màu Vui Nhộn Số Đỏ', br: 'OEM', ch: 'tiktok', pr: 75100, fm: 'Combo', rv: 706600000, g: 18, us: 9300, ug: 13, tr: 3100000000, tu: 43000, re: 2205, url: 'https://www.tiktok.com/view/product/1732072840465515874' },
          { n: 'Acrylic Markers 12 24 36 màu Thiên Long Colokit bút màu lông', br: 'Thiên Long', ch: 'shopee', pr: 50500, fm: 'Single', rv: 604300000, g: 161, us: 8300, ug: 149, tr: 1600000000, tu: 26000, re: 4395, url: 'https://shopee.vn/product/101480242/44467560697' },
          { n: 'Bút sáp màu Thiên Long Colokit 24 màu tươi sáng tiêu chuẩn Châu Âu', br: 'Thiên Long', ch: 'tiktok', pr: 32100, fm: 'Single', rv: 585300000, g: 44051, us: 17000, ug: 43390, tr: 742400000, tu: 21400, re: 1754, url: 'https://www.tiktok.com/view/product/1729845121958710223' }
        ]
      },

      sap_mau: {
        gross: { cur: 9.1, pre: 6.2, g: 46 },
        units: { cur: 302500, pre: 309300, g: -2 },
        stores: { cur: 809, pre: 929, g: -13 },
        plat: { shopee: [5.6, 4.1], tiktok: [3.4, 2.1], lazada: [0.04, 0.09] },
        brand: [['Colokit', 2.2568, 2.6722], ['Deli', 2.1021, 0.8246], ['Duka', 0.6461, null], ['Jupitearth', 0.5642, 0.2728], ['Stacom', 0.3003, 0.0124]],
        price: { '< 10K': 0.09, '10K-30K': 2.86, '30K-50K': 2.9, '50K-75K': 1.51, '75K-100K': 1.04, '100K-150K': 0.37, '150K-200K': 0.08, '200K-350K': 0.12, '350K-500K': 0.04, '500K-750K': 0.04 },
        prod: [
          { n: 'Bút sáp màu Thiên Long Colokit 24 màu tươi sáng tiêu chuẩn', br: 'Colokit', ch: 'tiktok', pr: 32100, fm: 'Single', rv: 585300000, g: 44051, us: 17000, ug: 43390, tr: 742400000, tu: 21400, re: 1754, url: 'https://www.tiktok.com/view/product/1729845121958710223' },
          { n: 'Bút sáp màu lụa JUPIEARTH: Có các loại 12 24 36 màu màu sắc', br: 'Jupitearth', ch: 'tiktok', pr: 98700, fm: 'Single', rv: 458900000, g: -1, us: 5400, ug: 13, tr: 3000000000, tu: 34800, re: 2440, url: 'https://www.tiktok.com/view/product/1731970909916859173' },
          { n: 'Bút sáp màu hữu cơ gấu con Deli', br: 'Deli', ch: 'tiktok', pr: 64300, fm: 'Single', rv: 283600000, g: 679, us: 4900, ug: 721, tr: 372500000, tu: 6300, re: 363, url: 'https://www.tiktok.com/view/product/1733450687467849343' },
          { n: 'Sáp Màu Hữu Cơ 12 18 24 36 Màu – Màu Tươi Đẹp Không Dính Tay', br: 'OEM', ch: 'tiktok', pr: 44300, fm: 'Single', rv: 265900000, g: 101, us: 5900, ug: 95, tr: 1100000000, tu: 28500, re: 1875, url: 'https://www.tiktok.com/view/product/1729602424186768231' },
          { n: 'Sáp màu Thiên Long Colokit 10 12 16 18 24 36 màu mịn tươi sáng', br: 'Colokit', ch: 'shopee', pr: 10100, fm: 'Single', rv: 226600000, g: 764, us: 19900, ug: 1047, tr: 404700000, tu: 34400, re: 2955, url: 'https://shopee.vn/product/367619913/29001940839' },
          { n: 'Bút sáp màu hữu cơ gấu con Deli', br: 'Deli', ch: 'shopee', pr: 56000, fm: 'Single', rv: 226100000, g: 143, us: 4100, ug: 154, tr: 1200000000, tu: 22800, re: 3282, url: 'https://shopee.vn/product/127805122/22270856739' },
          { n: 'Sáp màu hữu cơ Stacom màu sắc tươi sáng an toàn cho bé 12 16', br: 'Stacom', ch: 'shopee', pr: 12000, fm: 'Single', rv: 208700000, g: 101, us: 20400, ug: 64, tr: 464200000, tu: 46300, re: 4872, url: 'https://shopee.vn/product/86567181/8875963505' },
          { n: 'Bút Sáp Màu Hữu Cơ 12 24 36 48 Màu Gấu Con Deli', br: 'Deli', ch: 'shopee', pr: 56000, fm: 'Single', rv: 200200000, g: 115, us: 3600, ug: 168, tr: 752800000, tu: 14400, re: 2249, url: 'https://shopee.vn/product/348955539/23658963786' },
          { n: 'Bút Sáp Màu Xoay Cho Bé Các Loại', br: 'Duka', ch: 'tiktok', pr: 40600, fm: 'Single', rv: 186400000, g: 194, us: 4900, ug: 122, tr: 268600000, tu: 7300, re: 603, url: 'https://www.tiktok.com/view/product/1732222034800838640' },
          { n: 'Sáp màu Thiên Long Colokit 10 12 16 18 24 36 màu mịn tươi sáng', br: 'Colokit', ch: 'shopee', pr: 18200, fm: 'Single', rv: 185000000, g: 48, us: 5800, ug: -5, tr: 1300000000, tu: 87600, re: 6581, url: 'https://shopee.vn/product/101480242/1636049068' }
        ]
      },

      acrylic: {
        gross: { cur: 29.2, pre: 18.7, g: 56 },
        units: { cur: 466600, pre: 492300, g: -5 },
        stores: { cur: 1600, pre: 1800, g: -13 },
        plat: { shopee: [17.5, 10.1], tiktok: [11.6, 8.2], lazada: [0.14, 0.42] },
        brand: [['Deli', 7.0664, 2.8611], ['Bossee', 2.8616, 1.2716], ['Colokit', 1.6352, 0.6732], ['Mesibo', 0.8176, null], ['Global Art', 0.73, 0.1683]],
        price: { '< 10K': 0.1, '10K-30K': 5.09, '30K-50K': 4.78, '50K-75K': 10.67, '75K-100K': 1.29, '100K-150K': 1.33, '150K-200K': 0.79, '200K-350K': 3.31, '350K-500K': 0.79, '500K-750K': 0.87, '750K-1M': 0.12, '1M-1.5M': 0.04, '1.5M-2M': 0.03, '2M-3.5M': 0.02 },
        prod: [
          { n: 'Hộp 60 bút màu Acrylic Marker cao cấp chống nước màu sắc tươi sáng', br: 'OEM', ch: 'tiktok', pr: 64100, fm: 'Combo', rv: 2300000000, g: 13, us: 35700, ug: 19, tr: 16900000000, tu: 261200, re: 19699, url: 'https://www.tiktok.com/view/product/1730750363609630947' },
          { n: 'Bộ Bút Lông Màu Acrylic Marker Hộp 60 Màu Màu Sắc Tươi Sáng', br: 'OEM', ch: 'tiktok', pr: 60100, fm: 'Combo', rv: 1400000000, g: 142, us: 22900, ug: 106, tr: 2800000000, tu: 48100, re: 4788, url: 'https://www.tiktok.com/view/product/1732131667763169918' },
          { n: 'Bút Sơn Màu Acrylic Markers Deli Hộp 12 24 36 64 Box Màu', br: 'Deli', ch: 'shopee', pr: 12000, fm: 'Combo', rv: 1300000000, g: 457, us: 15100, ug: 5, tr: 3200000000, tu: 168100, re: 31017, url: 'https://shopee.vn/product/127805122/24261863092' },
          { n: 'Bút Sơn Màu Acrylic Markers Deli Hộp 12 24 36 64 Box Màu', br: 'Deli', ch: 'shopee', pr: 12000, fm: 'Combo', rv: 1200000000, g: 45, us: 11300, ug: -17, tr: 3500000000, tu: 112600, re: 20780, url: 'https://shopee.vn/product/348955539/25215129183' },
          { n: 'Acrylic Markers 12 24 36 màu Thiên Long Colokit bút màu lông', br: 'Colokit', ch: 'shopee', pr: 50500, fm: 'Single', rv: 604300000, g: 161, us: 8300, ug: 149, tr: 1600000000, tu: 26000, re: 4395, url: 'https://shopee.vn/product/101480242/44467560697' },
          { n: 'Hộp 60 Bút Màu Acrylic Make Cao Cấp Chống Nước Vẽ Trên Mọi', br: 'OEM', ch: 'tiktok', pr: 64800, fm: 'Combo', rv: 564000000, g: 556, us: 8400, ug: 519, tr: 2400000000, tu: 40900, re: 3600, url: 'https://www.tiktok.com/view/product/1730557972311673383' },
          { n: 'Bút Sơn Acrylic Marker Deli TĂNG 80% MỰC Bút Lông Màu 120 Màu', br: 'Deli', ch: 'shopee', pr: 17000, fm: 'Single', rv: 514000000, g: 673, us: 5600, ug: 20, tr: 1000000000, tu: 37700, re: 6518, url: 'https://shopee.vn/product/884990462/24115942581' },
          { n: 'Bộ Màu Marker Nhũ 2 Đầu Brush Deli', br: 'Deli', ch: 'tiktok', pr: 51100, fm: 'Combo', rv: 340400000, g: 207, us: 7000, ug: 244, tr: 502400000, tu: 10000, re: 597, url: 'https://www.tiktok.com/view/product/1735557759638668927' },
          { n: 'Bút Màu Acrylic Marker 120 Màu Dạ Bossee Chính Hãng Họa Cụ', br: 'Bossee', ch: 'shopee', pr: 45000, fm: 'Single', rv: 314300000, g: -6, us: 7100, ug: -6, tr: 2600000000, tu: 65300, re: 12668, url: 'https://shopee.vn/product/1437074218/42500627746' },
          { n: 'Global Art x Lê Bảo Châu Màu Acrylic Marker "Cúc" Dải Màu', br: 'Global Art', ch: 'shopee', pr: 500000, fm: 'Combo', rv: 306300000, g: 2220, us: 500, ug: 2373, tr: 440100000, tu: 800, re: 143, url: 'https://shopee.vn/product/1224175038/53462612577' }
        ]
      },

      long_mt: {
        gross: { cur: 5.7, pre: 4.2, g: 33 },
        units: { cur: 107100, pre: 95700, g: 12 },
        stores: { cur: 326, pre: 422, g: -23 },
        plat: { shopee: [2.7, 2.6], tiktok: [3, 1.6], lazada: [0.02, 0.05] },
        brand: [['Colokit', 4.5828, 3.024], ['Deli', 0.3135, 0.4284], ['Xipan', 0.1083, 0.1092], ['Fahasa', 0.0684, 0.063], ['Stacom', 0.0627, 0.0084]],
        price: { '10K-30K': 0.8, '30K-50K': 1.71, '50K-75K': 1.42, '75K-100K': 0.15, '100K-150K': 1.26, '150K-200K': 0.23, '200K-350K': 0.02, '350K-500K': 0.01, '1M-1.5M': 0.06 },
        prod: [
          { n: 'Bút lông màu Fiber Pen Thiên Long Colokit 5 12 24 màu Morandi', br: 'Colokit', ch: 'tiktok', pr: 42600, fm: 'Single', rv: 810000000, g: 195, us: 19800, ug: 211, tr: 2300000000, tu: 63800, re: 7132, url: 'https://www.tiktok.com/view/product/1732234717911157753' },
          { n: 'Hộp Bút Lông 48 60 Màu Thiên Long Fiber Pen Washable', br: 'Colokit', ch: 'tiktok', pr: 142200, fm: 'Combo', rv: 706600000, g: 1087, us: 4900, ug: 1150, tr: 1200000000, tu: 7900, re: 1041, url: 'https://www.tiktok.com/view/product/1732761890580236281' },
          { n: 'Bút lông màu Fiber Pen Thiên Long Colokit 5 12 24 màu Morandi', br: 'Colokit', ch: 'shopee', pr: 15800, fm: 'Single', rv: 268900000, g: 246, us: 9000, ug: 124, tr: 1000000000, tu: 38000, re: 8618, url: 'https://shopee.vn/product/101480242/29931655506' },
          { n: 'Bút lông màu bấm 6 12 màu Retractable Fiber Pens', br: 'Colokit', ch: 'tiktok', pr: 71900, fm: 'Single', rv: 250000000, g: 5407, us: 3000, ug: 5051, tr: 419800000, tu: 5700, re: 267, url: 'https://www.tiktok.com/view/product/1731721057908001785' },
          { n: 'Bút lông màu Fiber Pen Thiên Long Colokit 20 36 màu', br: 'Colokit', ch: 'shopee', pr: 49000, fm: 'Single', rv: 208400000, g: 93, us: 4000, ug: 94, tr: 1800000000, tu: 36000, re: 10797, url: 'https://shopee.vn/product/368671137/21176193704' },
          { n: 'Bộ Bút Lông 20 36 Màu Rửa Được Fiber Pen Thiên Long Colokit', br: 'Colokit', ch: 'tiktok', pr: 50700, fm: 'Combo', rv: 205500000, g: 270, us: 3200, ug: 229, tr: 910700000, tu: 17500, re: 1825, url: 'https://www.tiktok.com/view/product/1729549833724529657' },
          { n: 'Bút lông màu Fiber Pen Thiên Long Colokit', br: 'Colokit', ch: 'shopee', pr: 35000, fm: 'Single', rv: 196800000, g: 142, us: 4500, ug: 136, tr: 5100000000, tu: 104600, re: 32084, url: 'https://shopee.vn/product/101480242/8327433608' },
          { n: 'Bút lông màu Fiber Pen Thiên Long Colokit 5 12 24 màu Morandi', br: 'Colokit', ch: 'shopee', pr: 15800, fm: 'Single', rv: 176300000, g: 274, us: 6000, ug: 111, tr: 406300000, tu: 14900, re: 3182, url: 'https://shopee.vn/product/367619913/29685391193' },
          { n: 'Hộp Bút Lông 48 60 Màu Thiên Long Fiber Pen Washable', br: 'Colokit', ch: 'shopee', pr: 144300, fm: 'Combo', rv: 154500000, g: 116, us: 1100, ug: 141, tr: 385000000, tu: 2600, re: 585, url: 'https://shopee.vn/product/101480242/40172986410' },
          { n: 'Bút Lông Màu Thiên Long Fiber Pen Washable SWM-C006', br: 'Colokit', ch: 'tiktok', pr: 148500, fm: 'Single', rv: 144200000, g: 340, us: 1100, ug: 333, tr: 2400000000, tu: 26100, re: 3967, url: 'https://www.tiktok.com/view/product/1729549833832336377' }
        ]
      }
    },
    van_phong_pham: {
      all: {
        gross: { cur: 263.7, pre: 189, g: 39 },
        units: { cur: 5200000, pre: 6000000, g: -13 },
        stores: { cur: 11500, pre: 12600, g: -9 },
        plat: { shopee: [189.4, 145.2], tiktok: [73.3, 41.2], lazada: [1, 2.7] },
        brand: [['IK Copy', 23.4693, 13.797], ['Deli', 19.7775, 17.01], ['Thiên Long', 17.4042, 11.529], ['Flashlabel', 4.7466, 2.268], ['Oji', 4.4829, 1.89]],
        price: { '< 10K': 5.48, '10K-30K': 42.13, '30K-50K': 44.77, '50K-75K': 27.51, '75K-100K': 28.82, '100K-150K': 24.75, '150K-200K': 8.9, '200K-350K': 16.15, '350K-500K': 24.66, '500K-750K': 15.44, '750K-1M': 16.34, '1M-1.5M': 4.84, '1.5M-2M': 1.72, '2M-3.5M': 0.52, '3.5M-5M': 0.2, '5M-7.5M': 1.48 },
        prod: [
          { n: '10 ream Giấy in A4 70 gsm giấy A4 photo IK Copy Paper Thiên Long', br: 'IK Copy', ch: 'shopee', pr: 890000, fm: 'Single', rv: 3800000000, g: 6, us: 4400, ug: 6, tr: 16800000000, tu: 21900, re: 4733, url: 'https://shopee.vn/product/101480242/10499808000' },
          { n: 'Combo 5 ream Giấy in A4 photo Thiên Long IK Copy 70 gsm đều màu', br: 'IK Copy', ch: 'shopee', pr: 445000, fm: 'Combo', rv: 3600000000, g: 27, us: 8700, ug: 30, tr: 31100000000, tu: 89000, re: 19062, url: 'https://shopee.vn/product/101480242/16794017668' },
          { n: 'Combo 10 ream giấy A4 Thiên Long IK Copy 70 80gsm', br: 'IK Copy', ch: 'shopee', pr: 889600, fm: 'Combo', rv: 3100000000, g: 31, us: 3700, ug: 28, tr: 10600000000, tu: 14200, re: 2789, url: 'https://shopee.vn/product/368671137/23940020482' },
          { n: 'Băng Keo Đóng Gói Băng Dính Trong Đục 5F', br: 'America Usa Tape', ch: 'shopee', pr: 80000, fm: 'Single', rv: 2800000000, g: 8, us: 37800, ug: -4, tr: 24900000000, tu: 532200, re: 33976, url: 'https://shopee.vn/product/242520587/18320575698' },
          { n: 'THÙNG 50 CUỘN K80X80 - GIẤY IN BILL K80X80', br: 'OEM', ch: 'shopee', pr: 555000, fm: 'Single', rv: 2800000000, g: 61, us: 5100, ug: 63, tr: 7300000000, tu: 13300, re: 1270, url: 'https://shopee.vn/product/264150416/26012930758' },
          { n: 'Giấy In Nhiệt Tự Dính Dạng Tập 500 Tờ A6 100x150', br: 'OEM', ch: 'shopee', pr: 48500, fm: 'Single', rv: 2700000000, g: -1, us: 58500, ug: 0, tr: 32900000000, tu: 703400, re: 18480, url: 'https://shopee.vn/product/415458622/5084344482' },
          { n: 'Combo 10 ream Giấy in A4 70 giấy photo 70gsm IK Copy 500 tờ', br: 'IK Copy', ch: 'shopee', pr: 890000, fm: 'Combo', rv: 2400000000, g: 312, us: 3000, ug: 331, tr: 9000000000, tu: 12500, re: 3036, url: 'https://shopee.vn/product/367619913/23630511462' },
          { n: 'Băng keo trong 200ya 1.6kg 6 cuộn', br: 'Đại Phát', ch: 'tiktok', pr: 123500, fm: 'Single', rv: 2000000000, g: 886, us: 19100, ug: 799, tr: 2300000000, tu: 22300, re: 722, url: 'https://www.tiktok.com/view/product/1734753643085989461' },
          { n: 'Combo 5 ream giấy in A4 giấy photo 70 80gsm Thiên Long IK Copy', br: 'Thiên Long', ch: 'shopee', pr: 444800, fm: 'Combo', rv: 1800000000, g: 100, us: 4500, ug: 98, tr: 12900000000, tu: 37900, re: 8943, url: 'https://shopee.vn/product/367619913/21772657261' },
          { n: 'BĂNG KEO TRONG ĐỤC - 200Y 400Y 300Y 100Y 1CÂY 6CUỘN', br: 'Hồng Hà', ch: 'shopee', pr: 46000, fm: 'Single', rv: 1600000000, g: 58, us: 34100, ug: 67, tr: 3300000000, tu: 71900, re: 4807, url: 'https://shopee.vn/product/1743607791/47657421271' }
        ]
      },

      da_quang: {
        gross: { cur: 6.7, pre: 5.3, g: 26 },
        units: { cur: 383400, pre: 397600, g: -4 },
        stores: { cur: 1000, pre: 1200, g: -16 },
        plat: { shopee: [4.8, 4], tiktok: [1.8, 1.1], lazada: [0.02, 0.16] },
        brand: [['Deli', 1.9966, 0.8798], ['Thiên Long', 0.4288, 0.8003], ['Quaff', 0.3886, 0.0265], ['Pilot', 0.2345, 0.0795], ['Bossee', 0.1876, 0.0848]],
        price: { '< 10K': 1.42, '10K-30K': 2.84, '30K-50K': 1.52, '50K-75K': 0.53, '75K-100K': 0.1, '100K-150K': 0.19, '150K-200K': 0.07, '350K-500K': 0.01, '500K-750K': 0.01 },
        prod: [
          { n: 'Bút Highlight Bút Nhớ Dòng Đánh Dấu Dạ Quang Take Note Deli', br: 'Deli', ch: 'shopee', pr: 7000, fm: 'Single', rv: 196700000, g: 43, us: 22400, ug: 23, tr: 1100000000, tu: 164200, re: 15697, url: 'https://shopee.vn/product/348955539/9286931469' },
          { n: 'Bút dạ quang xóa được Pilot Frixion Light SFL-10SL', br: 'Pilot', ch: 'shopee', pr: 27000, fm: 'Single', rv: 180200000, g: 2225, us: 6000, ug: 1750, tr: 271200000, tu: 12000, re: 1456, url: 'https://shopee.vn/product/140792708/25322389704' },
          { n: 'Bút highlight Deli 25 màu đánh dấu nhớ dòng dạ quang Deli', br: 'Deli', ch: 'shopee', pr: 7500, fm: 'Single', rv: 172000000, g: 116, us: 12200, ug: 11, tr: 1400000000, tu: 228000, re: 30086, url: 'https://shopee.vn/product/127805122/11115991321' },
          { n: 'Bút Highlight Deli Nhiều Màu Đánh Dấu Nhớ Dòng Dạ Quang Pastel', br: 'Deli', ch: 'shopee', pr: 6000, fm: 'Single', rv: 157300000, g: 257, us: 23000, ug: 267, tr: 273000000, tu: 39600, re: 5462, url: 'https://shopee.vn/product/1021396369/28008906411' },
          { n: 'Set 5 Bút Highlight 2 Đầu M.Y – Viết Êm Tay Dành Cho Học Sinh', br: 'OEM', ch: 'tiktok', pr: 48300, fm: 'Combo', rv: 142300000, g: 24, us: 3400, ug: 3, tr: 335400000, tu: 9100, re: 539, url: 'https://www.tiktok.com/view/product/1732952252567618858' },
          { n: 'Bút dạ quang Mực đậm nổi bật không thấm sang trang sau', br: 'OEM', ch: 'tiktok', pr: 9300, fm: 'Single', rv: 141900000, g: null, us: 16500, ug: null, tr: 198500000, tu: 22800, re: 1827, url: 'https://www.tiktok.com/view/product/1735967995536705237' },
          { n: 'Bút highlight đánh dầu màu macaron Deli', br: 'Deli', ch: 'shopee', pr: 10000, fm: 'Single', rv: 106500000, g: 21, us: 10300, ug: 1, tr: 456600000, tu: 58700, re: 6365, url: 'https://shopee.vn/product/127805122/24568758870' },
          { n: 'Bút Highlight Bút Đánh Dấu Dạ Quang Pastel Đủ 6 Màu', br: 'Bossee', ch: 'tiktok', pr: 32400, fm: 'Single', rv: 106000000, g: -44, us: 3300, ug: -44, tr: 835300000, tu: 27200, re: 2087, url: 'https://www.tiktok.com/view/product/1732230778223233811' },
          { n: 'Bút Dạ Quang Hai Đầu 6 Màu Pastel Highlighter Combo 6 Bút Nhớ', br: 'Aimilo', ch: 'tiktok', pr: 23300, fm: 'Combo', rv: 96900000, g: 3637, us: 5400, ug: 3544, tr: 228300000, tu: 11900, re: 1181, url: 'https://www.tiktok.com/view/product/1735784288969655514' },
          { n: 'Bút highlight đánh dầu màu macaron Deli', br: 'Deli', ch: 'shopee', pr: 9500, fm: 'Single', rv: 96300000, g: 632, us: 10100, ug: 620, tr: 206600000, tu: 22900, re: 2490, url: 'https://shopee.vn/product/1021396369/28850549530' }
        ]
      },

      long_bang: {
        gross: { cur: 5.6, pre: 5, g: 12 },
        units: { cur: 147500, pre: 265500, g: -44 },
        stores: { cur: 664, pre: 751, g: -12 },
        plat: { shopee: [4.9, 4.5], tiktok: [0.63, 0.35], lazada: [0.07, 0.18] },
        brand: [['Thiên Long', 3.1528, 3.475], ['Deli', 0.5936, 0.165], ['Flexoffice', 0.1176, 0.095], ['Mesibo', 0.0672, null], ['Artline', 0.0504, 0.03]],
        price: { '< 10K': 0.54, '10K-30K': 1.08, '30K-50K': 2.2, '50K-75K': 0.51, '75K-100K': 0.75, '100K-150K': 0.4, '150K-200K': 0.09, '200K-350K': 0.07 },
        prod: [
          { n: 'Combo 5 10 20 Bút lông bảng Thiên Long WB-03', br: 'Thiên Long', ch: 'shopee', pr: 42000, fm: 'Combo', rv: 402000000, g: 132, us: 5600, ug: 30, tr: 3200000000, tu: 58900, re: 6589, url: 'https://shopee.vn/product/367619913/15326547530' },
          { n: 'Combo 5 10 20 Bút lông bảng Thiên Long WB-03 mực Xanh Đỏ Đen', br: 'Thiên Long', ch: 'shopee', pr: 39000, fm: 'Combo', rv: 371600000, g: 70, us: 4300, ug: -22, tr: 1800000000, tu: 40300, re: 5511, url: 'https://shopee.vn/product/101480242/23576151446' },
          { n: 'Hộp 10 Bút lông bảng WB-03 Thiên Long', br: 'Thiên Long', ch: 'shopee', pr: 85000, fm: 'Combo', rv: 270300000, g: 401, us: 2900, ug: 407, tr: 1400000000, tu: 16900, re: 2156, url: 'https://shopee.vn/product/101480242/1673217775' },
          { n: 'Combo Bút lông bảng Thiên Long WB-02 viết bảng trắng nhỏ', br: 'Thiên Long', ch: 'shopee', pr: 32300, fm: 'Combo', rv: 265300000, g: 272, us: 3800, ug: 87, tr: 518900000, tu: 10800, re: 1476, url: 'https://shopee.vn/product/368671137/25701822513' },
          { n: 'Hộp 12 Bút Lông Bảng Thế Hệ Mới Deli W-Mate Thay Được Mực', br: 'Deli', ch: 'shopee', pr: 8500, fm: 'Combo', rv: 192400000, g: 568, us: 6100, ug: 123, tr: 270900000, tu: 10800, re: 1103, url: 'https://shopee.vn/product/127805122/53410142220' },
          { n: 'Combo 10 Bút lông bảng Thiên Long WB-03 đầu bút viết êm trơn', br: 'Thiên Long', ch: 'shopee', pr: 84000, fm: 'Combo', rv: 167100000, g: 118, us: 2000, ug: 117, tr: 775900000, tu: 37200, re: 4018, url: 'https://shopee.vn/product/367619913/13364398128' },
          { n: 'Combo 3 5 12 Bút lông bảng Deli EU003B Mực Xanh Đỏ Đen', br: 'Deli', ch: 'shopee', pr: 8000, fm: 'Combo', rv: 162900000, g: 565, us: 5300, ug: 58, tr: 238400000, tu: 10900, re: 1161, url: 'https://shopee.vn/product/348955539/47408974933' },
          { n: 'Bút lông bảng Hoshi Thiên Long WB-025 HS', br: 'Thiên Long', ch: 'shopee', pr: 14300, fm: 'Single', rv: 121200000, g: 16, us: 8500, ug: 32, tr: 500500000, tu: 26900, re: 2192, url: 'https://shopee.vn/product/367619913/55600034017' },
          { n: 'Combo 5 10 20 Bút lông bảng xóa được Thiên Long WB-03 nét 2.5mm', br: 'Thiên Long', ch: 'shopee', pr: 42000, fm: 'Combo', rv: 119900000, g: null, us: 1500, ug: null, tr: 336400000, tu: 23800, re: 4146, url: 'https://shopee.vn/product/368671137/11126487073' },
          { n: 'Combo 5 10 20 Bút lông bảng Thiên Long Flexoffice FO-WB02 XK', br: 'Flexoffice', ch: 'shopee', pr: 39000, fm: 'Combo', rv: 100700000, g: 162, us: 1100, ug: 13, tr: 393600000, tu: 9700, re: 1194, url: 'https://shopee.vn/product/101480242/22347224257' }
        ]
      },

      long_dau: {
        gross: { cur: 7.5, pre: 5.6, g: 33 },
        units: { cur: 183900, pre: 254700, g: -28 },
        stores: { cur: 1000, pre: 1200, g: -13 },
        plat: { shopee: [4.6, 3.8], tiktok: [2.8, 1.7], lazada: [0.05, 0.12] },
        brand: [['Thiên Long', 2.28, 2.2848], ['Deli', 0.21, 0.112], ['G-Star', 0.1575, 0.14], ['Leyue', 0.1575, null], ['Hvt', 0.1125, 0.028]],
        price: { '< 10K': 0.13, '10K-30K': 1.14, '30K-50K': 2.6, '50K-75K': 2.45, '75K-100K': 0.3, '100K-150K': 0.65, '150K-200K': 0.12, '200K-350K': 0.05, '500K-750K': 0.01 },
        prod: [
          { n: 'Combo 5 10 20 Bút lông dầu 2 đầu bút Thiên Long PM-04', br: 'Thiên Long', ch: 'shopee', pr: 47000, fm: 'Combo', rv: 489600000, g: 301, us: 4200, ug: 82, tr: 2300000000, tu: 39600, re: 5410, url: 'https://shopee.vn/product/101480242/23576151442' },
          { n: 'Combo 10-30-50 Chiếc Bút Lông Dầu TL Đầu To', br: 'Thiên Long', ch: 'tiktok', pr: 67100, fm: 'Combo', rv: 480200000, g: 16, us: 7300, ug: 4, tr: 1100000000, tu: 17600, re: 512, url: 'https://www.tiktok.com/view/product/1734609263299692442' },
          { n: 'Combo 5 10 20 Bút lông dầu 2 đầu bút Thiên Long PM-09', br: 'Thiên Long', ch: 'shopee', pr: 40500, fm: 'Combo', rv: 436200000, g: 146, us: 4400, ug: 29, tr: 1700000000, tu: 27600, re: 3451, url: 'https://shopee.vn/product/101480242/22050668198' },
          { n: 'Combo 50 - 30 Bút Lông Dầu TL Đầu Kim', br: 'Thiên Long', ch: 'tiktok', pr: 56800, fm: 'Combo', rv: 395500000, g: 67, us: 7100, ug: 51, tr: 826500000, tu: 15200, re: 544, url: 'https://www.tiktok.com/view/product/1734690032513157018' },
          { n: 'Combo 10 Bút Lông Dầu 2 Đầu Bút TL- PM-04', br: 'Thiên Long', ch: 'shopee', pr: 46000, fm: 'Combo', rv: 168800000, g: 517, us: 3600, ug: 527, tr: 270600000, tu: 5800, re: 509, url: 'https://shopee.vn/product/1442182483/46111609343' },
          { n: 'COMBO 10 30 50 Bút lông dầu thiên long-bút lông PM-09', br: 'Thiên Long', ch: 'tiktok', pr: 59400, fm: 'Combo', rv: 167000000, g: 184, us: 3100, ug: 158, tr: 242500000, tu: 4600, re: 226, url: 'https://www.tiktok.com/view/product/1733607638820291858' },
          { n: 'Combo Bút lông dầu Thiên Long 2 đầu PM-04', br: 'Thiên Long', ch: 'shopee', pr: 104000, fm: 'Combo', rv: 154400000, g: -18, us: 1500, ug: -21, tr: 1600000000, tu: 18000, re: 1674, url: 'https://shopee.vn/product/368671137/13249566333' },
          { n: 'combo 10 cây bút lông dầu màu trắng không xoá được', br: 'Leyue', ch: 'tiktok', pr: 70600, fm: 'Combo', rv: 144700000, g: -52, us: 2200, ug: -54, tr: 1100000000, tu: 15600, re: 567, url: 'https://www.tiktok.com/view/product/1733890170414531648' },
          { n: 'Bút Lông Dầu TL Marker Chống Nước', br: 'Thiên Long', ch: 'shopee', pr: 48000, fm: 'Single', rv: 117500000, g: 44, us: 2500, ug: 44, tr: 281000000, tu: 5900, re: 616, url: 'https://shopee.vn/product/1688881566/47554047889' },
          { n: 'Hộp 12 Cây Bút Lông Dầu Kim 2 Đầu Gstar CD-01 Xanh Đỏ Đen', br: 'G-Star', ch: 'shopee', pr: 76000, fm: 'Combo', rv: 97900000, g: -19, us: 1500, ug: -18, tr: 284300000, tu: 4200, re: 418, url: 'https://shopee.vn/product/81243419/24816146246' }
        ]
      },

      xoa_nuoc: {
        gross: { cur: 2.4, pre: 1.7, g: 43 },
        units: { cur: 100100, pre: 102600, g: -3 },
        stores: { cur: 520, pre: 600, g: -13 },
        plat: { shopee: [1.8, 1.4], tiktok: [0.5635, 0.3118], lazada: [0.02, 0.02] },
        brand: [['Thiên Long', 0.9816, 0.9486], ['Deli', 0.2688, 0.0527], ['Stacom', 0.1008, 0.0085], ['Flexoffice', 0.0984, 0.0748], ['Besta', 0.0504, 0.0187]],
        price: { '< 10K': 0.02, '10K-30K': 1.49, '30K-50K': 0.17, '50K-75K': 0.27, '75K-100K': 0.26, '100K-150K': 0.16, '150K-200K': 0.01, '200K-350K': 0.05 },
        prod: [
          { n: 'Bút xóa nước 12ml Thiên Long CP-02', br: 'Thiên Long', ch: 'shopee', pr: 23100, fm: 'Single', rv: 394300000, g: 59, us: 15500, ug: 56, tr: 2500000000, tu: 110200, re: 10427, url: 'https://shopee.vn/product/101480242/1635050758' },
          { n: 'Bút xóa Thiên Long CP-02', br: 'Thiên Long', ch: 'shopee', pr: 22900, fm: 'Single', rv: 157600000, g: 668, us: 3300, ug: 307, tr: 347700000, tu: 9900, re: 1164, url: 'https://shopee.vn/product/368671137/22854643392' },
          { n: 'Combo 10 Bút xóa Cp-02 nước xóa sạch,nhanh khô', br: 'Thiên Long', ch: 'tiktok', pr: 107600, fm: 'Combo', rv: 114600000, g: -41, us: 1100, ug: -43, tr: 412500000, tu: 4700, re: 164, url: 'https://www.tiktok.com/view/product/1732112152827167857' },
          { n: 'Bút xóa FlexOffice FO-CP01 PLUS 12ml che phủ tốt', br: 'Flexoffice', ch: 'shopee', pr: 12600, fm: 'Single', rv: 80500000, g: 530, us: 5700, ug: 544, tr: 160300000, tu: 11000, re: 963, url: 'https://shopee.vn/product/367619913/8822863120' },
          { n: '10 Bút Xóa Nước Thiên Long Nhanh Khô Dành Siêu Sạch', br: 'Thiên Long', ch: 'shopee', pr: 93000, fm: 'Single', rv: 77600000, g: 148, us: 900, ug: 140, tr: 183500000, tu: 2100, re: 227, url: 'https://shopee.vn/product/1473624456/45152286579' },
          { n: 'Bút Xóa Nước 12ml Deli Bút Xóa Sạch Nhanh Khô An Toàn', br: 'Deli', ch: 'shopee', pr: 13000, fm: 'Single', rv: 77400000, g: 65, us: 6300, ug: 60, tr: 424300000, tu: 37900, re: 8043, url: 'https://shopee.vn/product/127805122/2093863777' },
          { n: 'Bút Xóa Nước 12ml Stacom CP101 Thế Hệ Mới', br: 'Stacom', ch: 'shopee', pr: 11900, fm: 'Single', rv: 70200000, g: 473, us: 7600, ug: 407, tr: 160800000, tu: 20700, re: 4047, url: 'https://shopee.vn/product/86567181/1465024793' },
          { n: 'Bút xóa Thiên Long CP-02,mực xóa nhanh khô che phủ tốt', br: 'Thiên Long', ch: 'shopee', pr: 24200, fm: 'Single', rv: 69900000, g: 267, us: 2800, ug: 276, tr: 200700000, tu: 8900, re: 945, url: 'https://shopee.vn/product/367619913/18813884810' },
          { n: 'Bút Xóa Nước Deli 10ml Khô Nhanh Che Phủ Tốt', br: 'Deli', ch: 'shopee', pr: 13000, fm: 'Single', rv: 66400000, g: 253, us: 5500, ug: 225, tr: 99300000, tu: 8200, re: 1153, url: 'https://shopee.vn/product/127805122/40829163460' },
          { n: 'Bút Xóa Nước Deli Đầu Kim Xóa Chính Xác Khô Nhanh', br: 'Deli', ch: 'shopee', pr: 13500, fm: 'Single', rv: 65100000, g: 237, us: 5300, ug: 243, tr: 91000000, tu: 7400, re: 1176, url: 'https://shopee.vn/product/1021396369/45706796175' }
        ]
      },

      file_folder: {
        gross: { cur: 15.4, pre: 13.9, g: 11 },
        units: { cur: 413700, pre: 533000, g: -22 },
        stores: { cur: 1300, pre: 1500, g: -10 },
        plat: { shopee: [11.9, 11.3], tiktok: [3.4, 2.5], lazada: [0.09, 0.19] },
        brand: [['Deli', 1.2936, 1.9182], ['Flexoffice', 0.6468, 0.7645], ['Bossee', 0.4312, 0.1251], ['Thiên Long', 0.2926, 0.2641], ['Knote', 0.2464, 0.417]],
        price: { '< 10K': 0.18, '10K-30K': 2.87, '30K-50K': 6.59, '50K-75K': 3.28, '75K-100K': 0.92, '100K-150K': 0.77, '150K-200K': 0.51, '200K-350K': 0.15, '350K-500K': 0.08, '500K-750K': 0.03, '750K-1M': 0.02, '1M-1.5M': 0.02 },
        prod: [
          { n: 'File Lá Đa Năng - Sổ Đa Năng Lưu Giữ Đề Thi Hình Ảnh Giấy Tờ', br: 'Deli', ch: 'tiktok', pr: 52000, fm: 'Single', rv: 529900000, g: -36, us: 10700, ug: -46, tr: 9000000000, tu: 251600, re: 16581, url: 'https://www.tiktok.com/view/product/1729454663877888639' },
          { n: 'Túi Đựng Tài Liệu A4 Nhiều Ngăn 5 8 12 Ngăn Khóa Dây File Lá', br: 'Bossee', ch: 'tiktok', pr: 36900, fm: 'Single', rv: 323800000, g: 52578, us: 11800, ug: 49250, tr: 395300000, tu: 14200, re: 1138, url: 'https://www.tiktok.com/view/product/1736190044996798024' },
          { n: 'File lá đựng tài liệu A4 30 40 lá', br: 'OEM', ch: 'shopee', pr: 34000, fm: 'Single', rv: 284900000, g: 592, us: 8500, ug: 584, tr: 419500000, tu: 12700, re: 2238, url: 'https://shopee.vn/product/1382883972/41910005644' },
          { n: 'File lá đựng tài liệu A4 KNOTE túi bìa hồ sơ 100 lá', br: 'Knote', ch: 'shopee', pr: 59000, fm: 'Single', rv: 234600000, g: -16, us: 4000, ug: -17, tr: 1500000000, tu: 28400, re: 3336, url: 'https://shopee.vn/product/1426030880/26172006082' },
          { n: 'M.Y Túi Đựng Tài Liệu A4 5 8 12 Ngăn – Cặp Hồ Sơ Nhiều Ngăn', br: 'OEM', ch: 'shopee', pr: 32000, fm: 'Single', rv: 188800000, g: 52, us: 5700, ug: 8, tr: 572400000, tu: 20900, re: 4140, url: 'https://shopee.vn/product/1451947204/40606966998' },
          { n: 'Tập 100 túi đựng tài liệu A4 Sơ mi lỗ chống nước', br: 'OEM', ch: 'shopee', pr: 33800, fm: 'Single', rv: 183600000, g: -11, us: 4500, ug: -3, tr: 1200000000, tu: 31300, re: 3089, url: 'https://shopee.vn/product/38778987/1909033407' },
          { n: 'Túi đựng hồ sơ khổ A4 hoạt hình 30 60 trang', br: 'Kinglife', ch: 'tiktok', pr: 62900, fm: 'Single', rv: 170300000, g: -12, us: 2800, ug: -19, tr: 670800000, tu: 13500, re: 729, url: 'https://www.tiktok.com/view/product/1732263026713461931' },
          { n: 'Combo 50 25 20 15 10 Bìa Lá A4 Hở Góc', br: 'Vĩnh Cường Vina', ch: 'shopee', pr: 28100, fm: 'Combo', rv: 145800000, g: 119, us: 2500, ug: -1, tr: 425600000, tu: 26700, re: 2511, url: 'https://shopee.vn/product/966992205/25685494534' },
          { n: 'Bìa Lá File A4 30 60 Lá Dày Dặn Cao Cấp', br: 'OEM', ch: 'shopee', pr: 30400, fm: 'Single', rv: 134500000, g: -54, us: 4500, ug: -56, tr: 460100000, tu: 15800, re: 2565, url: 'https://shopee.vn/product/1566396955/43460734274' },
          { n: 'Xấp 100 bìa lá A4 Plus chính hãng', br: 'OEM', ch: 'shopee', pr: 184400, fm: 'Single', rv: 130100000, g: -7, us: 700, ug: -12, tr: 1100000000, tu: 7400, re: 928, url: 'https://shopee.vn/product/14668875/4934838718' }
        ]
      },

      giay_copy: {
        gross: { cur: 49.6, pre: 31.7, g: 57 },
        units: { cur: 254100, pre: 250900, g: 1 },
        stores: { cur: 700, pre: 720, g: -2 },
        plat: { shopee: [43.4, 29.6], tiktok: [6, 1.6], lazada: [0.2, 0.56] },
        brand: [['IK Copy', 23.4608, 13.8529], ['Thiên Long', 9.2752, 3.17], ['Deli', 3.2736, 6.974], ['IK Plus', 2.8272, 0.5706], ['Pine Forest', 1.8352, 0.0634]],
        price: { '< 10K': 0.03, '10K-30K': 0.38, '30K-50K': 1.4, '50K-75K': 0.82, '75K-100K': 6.07, '100K-150K': 3.71, '150K-200K': 0.51, '200K-350K': 3.69, '350K-500K': 15.71, '500K-750K': 4.34, '750K-1M': 12.16, '1M-1.5M': 0.76, '1.5M-2M': 0.03, '2M-3.5M': 0.03 },
        prod: [
          { n: '10 ream Giấy in A4 70 gsm IK Copy Paper Thiên Long', br: 'IK Copy', ch: 'shopee', pr: 890000, fm: 'Single', rv: 3800000000, g: 6, us: 4400, ug: 6, tr: 16800000000, tu: 21900, re: 4733, url: 'https://shopee.vn/product/101480242/10499808000' },
          { n: 'Combo 5 ream Giấy in A4 photo Thiên Long IK Copy 70 gsm', br: 'IK Copy', ch: 'shopee', pr: 445000, fm: 'Combo', rv: 3600000000, g: 27, us: 8700, ug: 30, tr: 31100000000, tu: 89000, re: 19062, url: 'https://shopee.vn/product/101480242/16794017668' },
          { n: 'Combo 10 ream giấy A4 Thiên Long IK Copy 70 80gsm', br: 'IK Copy', ch: 'shopee', pr: 889600, fm: 'Combo', rv: 3100000000, g: 31, us: 3700, ug: 28, tr: 10600000000, tu: 14200, re: 2789, url: 'https://shopee.vn/product/368671137/23940020482' },
          { n: 'Combo 10 ream Giấy in A4 70 giấy photo 70gsm IK Copy 500 tờ', br: 'IK Copy', ch: 'shopee', pr: 890000, fm: 'Combo', rv: 2400000000, g: 312, us: 3000, ug: 331, tr: 9000000000, tu: 12500, re: 3036, url: 'https://shopee.vn/product/367619913/23630511462' },
          { n: 'Combo 5 ream giấy in A4 70 80gsm Thiên Long IK Copy Copy Plus', br: 'Thiên Long', ch: 'shopee', pr: 444800, fm: 'Combo', rv: 1800000000, g: 100, us: 4500, ug: 98, tr: 12900000000, tu: 37900, re: 8943, url: 'https://shopee.vn/product/367619913/21772657261' },
          { n: 'Giấy A4 500 tờ IK Copy 70 gsm - Giấy in A4 Thiên Long', br: 'IK Copy', ch: 'shopee', pr: 89000, fm: 'Single', rv: 1500000000, g: 43, us: 17400, ug: 45, tr: 10900000000, tu: 152000, re: 23695, url: 'https://shopee.vn/product/101480242/12922307639' },
          { n: 'Combo 5 10 thùng Giấy in A4 70 gsm Thiên Long Copy Plus', br: 'Thiên Long', ch: 'shopee', pr: 445000, fm: 'Combo', rv: 1400000000, g: 76, us: 3300, ug: 82, tr: 4200000000, tu: 10300, re: 1980, url: 'https://shopee.vn/product/101480242/28336031353' },
          { n: 'Combo 5 ream Giấy A4 giấy photo IK Copy Copy Plus 70 80gsm', br: 'IK Copy', ch: 'shopee', pr: 444800, fm: 'Combo', rv: 1300000000, g: 13, us: 3300, ug: 9, tr: 11800000000, tu: 34700, re: 7630, url: 'https://shopee.vn/product/368671137/23228967167' },
          { n: 'Thùng 5 ram Giấy A4 Giấy in giấy photo các loại', br: 'Pine Forest', ch: 'shopee', pr: 332900, fm: 'Single', rv: 1300000000, g: 76, us: 4000, ug: 67, tr: 4500000000, tu: 14700, re: 2475, url: 'https://shopee.vn/product/548229539/24160537314' },
          { n: 'Combo 5 Ream Giấy in A4 70 gsm Thiên Long Copy Plus PP-003', br: 'Thiên Long', ch: 'tiktok', pr: 512600, fm: 'Combo', rv: 1100000000, g: 61, us: 2300, ug: 43, tr: 2800000000, tu: 6500, re: 562, url: 'https://www.tiktok.com/view/product/1731337249754089465' }
        ]
      }
    }
  }
};

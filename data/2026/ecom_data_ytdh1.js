/* ===== DATA YTD H1 2026 = Q1 2026 + Q2 2026 =====
   Kỳ cộng dồn: không lưu số. data/ecom_engine.js tự cộng các kỳ trong `parts`.
   Sửa số Q1/Q2 → YTD tự cập nhật theo.
   Quy tắc cộng: Gross, Units, Storefronts, sàn, thương hiệu, phân khúc giá cộng thẳng;
   SKU trùng link thì cộng doanh thu và lượt bán, tăng trưởng tính lại từ số cùng kỳ của từng quý.
*/
var ECOM_DATA = ECOM_DATA || {};

ECOM_DATA.ytdh1 = {
  period: { cur: 'YTD 2026', pre: 'YTD 2025', label: 'Strategic Report YTD 2026' },
  parts: ['q1', 'q2']
};

/* Nạp data các quý thành phần (đường dẫn tính từ index.html) */
ECOM_DATA.ytdh1.parts.forEach(function (q) {
  if (!ECOM_DATA[q] && typeof document !== 'undefined') document.write('<scr' + 'ipt src="data/2026/ecom_data_' + q + '.js"><\/scr' + 'ipt>');
});

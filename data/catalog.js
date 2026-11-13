/* ===== DANH MỤC CỐ ĐỊNH (dùng chung mọi kỳ) =====
   - cats: thứ tự category, tên, icon và danh sách sub-category có thể có.
     Pill sub-category chỉ hiện khi kỳ đó có data cho sub đó.
   - platforms: key dùng trong file data (plat, prod.ch) → tên hiển thị và màu.
   - priceRanges: 18 khoảng giá chuẩn, theo đúng thứ tự hiển thị.
*/
var ECOM_CATALOG = {
  cats: [
    { k: 'but_viet', n: 'Bút Viết', i: '🖊️', subs: [
      { k: 'but_bi', n: 'Bút Bi', i: '🖊️' },
      { k: 'but_gel', n: 'Bút Gel', i: '✒️' }
    ] },
    { k: 'hoc_cu', n: 'Học Cụ', i: '📐', subs: [
      { k: 'may_tinh', n: 'Máy Tính KH', i: '🔢' },
      { k: 'tap_vo', n: 'Tập Vở Sổ', i: '📓' },
      { k: 'balo', n: 'Balo Học Sinh', i: '🎒' },
      { k: 'but_chi', n: 'Bút Chì', i: '✏️' },
      { k: 'gom', n: 'Gôm Tẩy', i: '🧽' }
    ] },
    { k: 'my_thuat', n: 'Mỹ Thuật', i: '🎨', subs: [
      { k: 'sap_mau', n: 'Sáp Màu', i: '🖍️' },
      { k: 'acrylic', n: 'Acrylic Markers', i: '🖋️' },
      { k: 'long_mt', n: 'Bút Lông Màu', i: '🖌️' },
      { k: 'chi_mau', n: 'Bút Chì Màu', i: '✏️' }
    ] },
    { k: 'van_phong_pham', n: 'Văn Phòng Phẩm', i: '📎', subs: [
      { k: 'da_quang', n: 'Bút Dạ Quang', i: '🔆' },
      { k: 'long_bang', n: 'Bút Lông Bảng', i: '📝' },
      { k: 'long_dau', n: 'Bút Lông Dầu', i: '🖍️' },
      { k: 'xoa_nuoc', n: 'Bút Xóa Nước', i: '🖋️' },
      { k: 'file_folder', n: 'File & Folder', i: '📂' },
      { k: 'giay_copy', n: 'Giấy Photocopy', i: '📄' }
    ] }
  ],
  platforms: [
    { k: 'shopee', n: 'Shopee', c: '#f97316' },
    { k: 'tiktok', n: 'TikTok Shop', c: '#0f172a' },
    { k: 'lazada', n: 'Lazada', c: '#3b82f6' }
  ],
  priceRanges: [
    '< 10K', '10K-30K', '30K-50K', '50K-75K', '75K-100K', '100K-150K', '150K-200K', '200K-350K', '350K-500K',
    '500K-750K', '750K-1M', '1M-1.5M', '1.5M-2M', '2M-3.5M', '3.5M-5M', '5M-7.5M', '7.5M-10M', '10M-15M'
  ]
};

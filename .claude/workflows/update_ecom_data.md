---
description: Tự động cập nhật dữ liệu báo cáo Ecom vào file ecom_data_*.js
---
Workflow này hướng dẫn AI cách cập nhật dữ liệu mới vào file dữ liệu có cấu trúc dùng cho báo cáo E-commerce.

## Tổng quan kiến trúc

**Hệ thống đa kỳ:**
- Mỗi **quý** có 1 file dữ liệu riêng: `ecom_data_q1.js`, `ecom_data_q2.js`, `ecom_data_q3.js`, `ecom_data_q4.js`
- `index.html` load đúng file dựa vào tham số URL `?p=` (`q1`, `q2`)
- Mảng `DATASETS` trong `index.html` quyết định các tab kỳ hiển thị trên giao diện
- **Không có YTD** — đã bị xóa khỏi dự án (tháng 6/2026)

**Cấu trúc thư mục hiện tại:**
```
data/2026/
├── ecom_data_q1.js    # Dữ liệu Q1 2026 (thực tế)
└── ecom_data_q2.js    # Dữ liệu Q2 2026 (hiện là mock, sẽ thay thế bằng data thực)

reports/2026/
├── index.html         # Giao diện + logic merge YTD + data loader
└── README.md
```

**Định dạng file dữ liệu (mỗi `ecom_data_qN.js`):**
```javascript
// BẮT BUỘC dùng `var` (KHÔNG dùng `const`) cho tất cả khai báo top-level
// để YTD merger có thể ghi đè lúc runtime
var PERIOD = { cur: 'Q2 2026', pre: 'Q2 2025', label: 'Strategic Report Q2 2026' };
var CAT = { /* dữ liệu danh mục */ };
var MONTHLY = [ /* dữ liệu trend theo tháng cho quý này */ ];
```

**Cấu trúc dữ liệu chính trong `CAT`:**
```javascript
CAT = {
  but_viet: {           // Key danh mục
    n: 'Bút Viết',      // Tên hiển thị
    i: '🖊️',            // Icon
    sc: [...],           // Các pill lọc sub-category
    kpi: [{...}, ...],   // 4 thẻ KPI (Gross Sales, Units, TikTok Share, Storefronts)
    dkpi: [{...}, ...],  // 4 KPI chi tiết cho Slide 2
    plat: [{...}, ...],  // Dữ liệu nền tảng (Shopee, TikTok Shop, Lazada, Tiki)
    brand: [{...}, ...], // Dữ liệu thị phần thương hiệu
    price: [{...}, ...], // Dữ liệu phân khúc giá
    prod: [{...}, ...],  // Top 10 sản phẩm
    sdata: {             // Phân rã theo sub-category
      but_bi: { kpi, dkpi, plat, brand, price, prod },
      but_gel: { kpi, dkpi, plat, brand, price, prod }
    }
  },
  hoc_cu: { ... },
  my_thuat: { ... },
  van_phong_pham: { ... },
  all: { ... }           // Tổng hợp "Tất cả danh mục" — tự tính lại cho YTD
};
```

**Mảng MONTHLY (cho trend chart, chỉ dùng ở chế độ YTD):**
```javascript
var MONTHLY = [
  { m: 'Apr', rv: 110.2, pre_rv: 88.0, ts: 42.0, pre_ts: 32.0 },
  { m: 'May', rv: 125.6, pre_rv: 95.5, ts: 43.5, pre_ts: 33.0 },
  { m: 'Jun', rv: 138.9, pre_rv: 102.0, ts: 44.0, pre_ts: 34.0 }
];
// Q1 chứa Jan/Feb/Mar, Q2 chứa Apr/May/Jun — merger nối chúng lại
```

## Dữ liệu đầu vào

### Nguồn dữ liệu: thư mục `input/`

File Excel được đặt trong `input/` theo quy ước đặt tên:
```
input/{cate_key}_{subcate_key}.xlsx    → sub-category level
input/{cate_key}_all.xlsx              → category level (toàn bộ)
```

Ví dụ:
```
input/butviet_butbi.xlsx   → CAT.but_viet.sdata.but_bi
input/butviet_butgel.xlsx  → CAT.but_viet.sdata.but_gel
input/butviet_all.xlsx     → CAT.but_viet (category level)
input/hoccu_maytinh.xlsx   → CAT.hoc_cu.sdata.may_tinh
```

Mỗi file có 1 sheet `Update_Data` với cấu trúc cố định gồm 6 section:
1. **Config** (rows 2–7): `target_category_key`, `target_sub_category_key`, `period_current`, `period_previous`
2. **KPI** (rows 10–13): Gross Sales, Units Sold, Active Storefronts — cur + pre values + unit
3. **Platform** (rows 15–20): Shopee, TikTok Shop, Lazada, Tiki — cur + pre sales (tỷ VND)
4. **Brand Market Share** (rows 22–29): brand name, cur %, pre %
5. **Price Segments** (rows 31–46): price range, cur sales (tỷ VND)
6. **Top 10 SKUs** (rows 50–59): name, brand, platform, price (VND), format, rev cur (tỷ), rev growth %, units cur, units growth %, total rev (tỷ), total units, reviews, URL

**Lưu ý về dữ liệu thiếu:** Nếu một section có toàn giá trị 0 (ví dụ brand/price/prod trong file `_all.xlsx` chưa có data), hỏi người dùng trước khi xử lý — thường nên để trống `[]` chờ data thực tế.

Người dùng có thể cung cấp tên theo dạng key chuẩn hóa (ví dụ `but_viet`, `but_bi`) hoặc tên tiếng Việt (ví dụ `Bút Viết`, `Bút Bi`). Cần map về đúng key trong `CAT` trước khi chỉnh sửa.

## Các bước thực hiện

1. **Xác định file dữ liệu cần sửa** (tất cả nằm trong `data/2026/`):
   - Dữ liệu Q1 → `data/2026/ecom_data_q1.js`
   - Dữ liệu Q2 → `data/2026/ecom_data_q2.js`
   - Dữ liệu Q3 → tạo `data/2026/ecom_data_q3.js` (copy từ q1 làm template, cập nhật PERIOD)
   - Dữ liệu Q4 → tạo `data/2026/ecom_data_q4.js`
   - **KHÔNG sửa phần dữ liệu trong `index.html`.** Chỉ sửa `index.html` để thêm entry mới vào mảng `DATASETS` hoặc cập nhật thứ tự load của data loader cho YTD.

2. **Nếu tạo file quý mới:**
   - Copy `ecom_data_q1.js` làm template
   - Cập nhật `PERIOD` ở đầu file: `{ cur: 'Q3 2026', pre: 'Q3 2025', label: 'Strategic Report Q3 2026' }`
   - Cập nhật `MONTHLY` với 3 tháng tương ứng của quý đó
   - Thêm entry vào mảng `DATASETS` trong `index.html`: `{ p: 'q3', label: 'Q3 2026' }`
   - Cập nhật data loader YTD trong `index.html` để load thêm file mới theo đúng thứ tự (sau q2)
   - Tất cả khai báo PHẢI dùng `var` (không phải `const`) để tương thích với YTD merger

3. **Đọc cấu trúc hiện tại:** Dùng `view_file` để xem file dữ liệu hiện có. Chú ý cấu trúc phân cấp:
   - Danh mục → KPI + Nền tảng + Thương hiệu + Phân khúc giá + Sản phẩm
   - Danh mục → sdata → Sub-category → KPI + Nền tảng + Thương hiệu + Phân khúc giá + Sản phẩm

4. **Chỉ tính các chỉ số phái sinh được phê duyệt:**
   - `TikTok Market Share`: `Doanh số TikTok Shop kỳ hiện tại / Tổng doanh số kỳ hiện tại`
   - `Top 10 Contribution`: `Tổng doanh thu Top 10 SKU / Tổng doanh số`, `sub` = `of Total Gross Sales`
   - `Leading Brand`: thương hiệu có thị phần hiện tại cao nhất, `sub` = `{số lượng}/10 Top SKU Spots`
   - Tăng trưởng TikTok Share tính theo điểm phần trăm: `share hiện tại - share cùng kỳ`, format `+X.Xpp`
   - KHÔNG tính các chỉ số khác trừ khi được yêu cầu rõ ràng. Dùng giá trị từ dữ liệu người dùng cung cấp.
   - Giữ nguyên format đơn vị: `Tỷ`, `Tr`, `Nghìn`, `%`, `pp`

5. **Cập nhật dữ liệu trong file JS:**
   - Dùng `replace_file_content` hoặc `multi_replace_file_content` để thay thế CHỈ phần dữ liệu liên quan
   - KHÔNG ghi đè toàn bộ file
   - Đảm bảo cú pháp JavaScript hợp lệ (dấu phẩy, ngoặc nhọn, ngoặc kép)
   - Giữ khai báo `var` (không đổi thành `const`)

6. **Xác minh và báo cáo:** Sau khi cập nhật, báo lại cho người dùng chính xác những nhóm/danh mục nào đã được cập nhật thành công.

## Quy tắc quan trọng

- **`CAT.all`** trong file dữ liệu quý chứa tổng hợp "Tất cả danh mục" cho riêng quý đó.
- **Không bao giờ đổi `var` thành `const`** trong file dữ liệu — sẽ gây lỗi runtime khi merge YTD.

## Cách sử dụng workflow này

Chỉ cần gọi `/update_ecom_data` kèm theo nội dung dữ liệu, ví dụ paste dữ liệu từ Excel hoặc cung cấp thông tin cập nhật cho nhóm Bút Viết.

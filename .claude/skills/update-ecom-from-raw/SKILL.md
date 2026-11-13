---
name: update-ecom-from-raw
description: Use when the user asks to update Ecom dashboard data from a folder under raw/ (e.g. raw/but-viet_all, raw/hoc-cu_balo), or drops Metric exports — screenshot "Báo cáo Phân tích thị trường", "Phân tích sâu Mức giá/Thương hiệu" xlsx, metric-vn-product-list xlsx — and wants them written into data/2026/ecom_data_*.js for a category or sub-category.
---

# Cập nhật data Ecom từ folder raw/

## Tổng quan

Mỗi folder `raw/<cate>_<sub>/` chứa file xuất từ Metric cho **1 scope**: 1 category (`_all`) hoặc 1 sub-category. Skill này đọc các file đó, lấy **số gốc** (`gross`, `units`, `stores`, `plat`, `brand`, `price`, `prod`), rồi ghi vào đúng scope trong `data/2026/ecom_data_<kỳ>.js`. Không tính chỉ số phái sinh, không format số: `data/ecom_engine.js` làm việc đó khi dashboard nạp.

Nguyên tắc chính: **số liệu lấy từ file, kỳ báo cáo lấy từ ngày trong file — không đoán.** Thiếu gì thì báo thiếu, không bịa.

Quy tắc chung của dự án (dùng `var`, tên `'Thiên Long'`, màu thương hiệu) nằm trong `.claude/CLAUDE.md` và `.claude/rules/brand_colors.md`. Cấu trúc file data và nguồn từng trường: [reference.md](reference.md). Đọc 3 file đó trước.

## Các bước

1. **Xác định scope từ tên folder** `raw/<cate>_<sub>`:
   - Tách tại dấu `_`. Trong từng phần, đổi `-` thành `_` (`but-viet` → `but_viet`, `but-bi` → `but_bi`).
   - `<sub>` = `all` → `cats.<cate>.all`. Khác `all` → `cats.<cate>.<sub>`.
   - Đối chiếu key với `data/catalog.js`. Tên folder có thể không theo quy ước (vd `raw/hoc cu/may tinh`). Nếu không khớp chắc chắn, thì hỏi người dùng.
2. **Đọc toàn bộ file trong folder:**
   ```bash
   python -I -X utf8 .claude/skills/update-ecom-from-raw/scripts/read_raw.py "raw/<folder>" "<thư mục tạm>"
   ```
   Script copy xlsx ra thư mục tạm (file OneDrive/Excel hay bị khoá), in nội dung mọi sheet, và cắt ảnh chụp dài thành các lát full-resolution. Đọc **từng lát** bằng Read tool. Ảnh gốc bị thu nhỏ, không đọc được số.
3. **Xác định kỳ báo cáo** từ khoảng ngày trên ảnh ("Từ 01-07-2026 đến 30-09-2026 so sánh với …") và tên file product-list (`__01-07-2026_30-09-2026`). Map sang `q1`…`q4`. Nếu 2 nguồn lệch nhau, hoặc kỳ khác với kỳ người dùng nói, thì DỪNG và hỏi.
4. **Kiểm tra các file cùng 1 lần phân tích.** File MG và TH không ghi kỳ, chỉ ghi ngày xuất. Đối chiếu:
   - Tổng MG ("Tất cả các sàn") ≈ Gross Sales trên ảnh (lệch ≤ 2%).
   - Doanh số TY của thương hiệu đứng đầu trong TH ≈ số trên ảnh.
   - Nếu lệch nhiều, thì DỪNG và hỏi người dùng.
5. **Ghi lại bộ từ khoá** ở ô "Từ khoá" trên ảnh. Tên tab trên Metric (vd "bút bi") có thể khác scope. Không tự sửa, nhưng nêu bộ từ khoá trong báo cáo để người dùng xác nhận đúng scope.
6. **Chọn file đích** `data/2026/ecom_data_<kỳ>.js`:
   - File đã có → chỉ thay khối của scope này, giữ nguyên phần khác.
   - File chưa có → tạo mới theo mục "Tạo file kỳ mới" bên dưới.
7. **Lấy số gốc từng trường** theo [reference.md](reference.md). Giữ độ chính xác cao nhất nguồn có; không làm tròn.
8. **Ghi vào file.** Chỉ sửa đúng scope. Pill sub-category tự hiện khi scope có data.
   - Sub-category chưa có trong `data/catalog.js` → thêm vào catalog (key, tên, icon) trước.
   - Thương hiệu chưa có trong `data/brand_colors.js` → thêm 1 dòng theo mục 4 của `brand_colors.md`.
9. **Kiểm tra:**
   ```bash
   node .claude/skills/update-ecom-from-raw/scripts/check_data.js data/2026/ecom_data_<kỳ>.js
   ```
   Phải `OK`. Đọc từng `WARN` mới phát sinh và giải thích trong báo cáo. Script in luôn KPI của tab "Tất cả" do engine tính. Không truyền file → kiểm tra mọi kỳ (nên chạy khi sửa `data/brand_colors.js` hoặc `data/catalog.js`).
10. **Báo cáo** cho người dùng: scope + kỳ đã ghi, bộ từ khoá, nguồn của từng khối, những gì còn thiếu, các WARN, và các quyết định cần người dùng xác nhận.

## Tạo file kỳ mới

Chép phần đầu (comment đơn vị) của file quý gần nhất, rồi khai báo:

```js
var ECOM_DATA = ECOM_DATA || {};

ECOM_DATA.q4 = {
  period: { cur: 'Q4 2026', pre: 'Q4 2025', label: 'Strategic Report Q4 2026' },
  monthly: [],
  cats: { /* chỉ category đã có scope `all` */ }
};
```

Kỳ cộng dồn (vd YTD 9 tháng): tạo file chỉ có `period` và `parts` (xem `ecom_data_ytdh1.js`), không chép số.

**Không** thêm kỳ mới vào `DATASETS` trong `index.html`, trừ khi người dùng đồng ý. Lý do: tab mới sẽ hiện công khai khi push lên `master`.

## Sau khi ghi

- Cập nhật mục "Trạng thái hiện tại" trong `.claude/CLAUDE.md` (scope nào đã có, còn thiếu gì).
- Người dùng chốt quyết định nghiệp vụ mới (vd gộp tên thương hiệu, đổi cách tính) → ghi vào bảng "Quyết định đã chốt" trong `KNOWLEDGE.md`.

## Chỉ có data sub-category, chưa có cấp category

Không tạo category chỉ có sub-category. Category bắt buộc có scope `all`. Hỏi người dùng có folder `<cate>_all` chưa. Nếu chưa có, thì chỉ báo lại các số đã tính, không ghi file.

## Lỗi hay gặp

| Lỗi | Cách đúng |
|---|---|
| Ghi chuỗi đã format (`'2.1 Tỷ'`, `'+15%'`, `'64.3K'`) | Ghi số gốc: `2100000000`, `15`, `64300` (đơn vị theo reference.md) |
| Ghi % thương hiệu, dòng `Others`, màu `c` | `brand` chỉ ghi `[tên, doanh số TY, doanh số LY]` (tỷ); engine tính % và Others, tra màu |
| Lấy % thương hiệu trên Metric (% trong top 10) | Lấy doanh số tỷ trong TH |
| Làm tròn số sàn dưới 1 tỷ (`563,5 Tr` → `0.56`) | Ghi đủ `0.5635` — TikTok share tính từ số này |
| Ghi data Q3 vào file Q2 vì "đang làm Q2" | Kỳ lấy từ ngày trong file, không lấy từ file data đang mở |
| Dùng khoảng giá thô trên ảnh (10K–50K…) | Dùng file "Phân tích sâu Mức giá", key theo 18 khoảng chuẩn |
| Để `url` trống vì ảnh không có link | Lấy từ file `metric-vn-product-list…xlsx` |
| Lấy tăng trưởng SKU (`g`, `ug`) từ product-list | File đó không có tăng trưởng; đọc trên ảnh, phần "Sản phẩm bán chạy" |
| Giữ tên thương hiệu gốc "Văn Phòng Phẩm Hồng Hà", "Deli Group" | Chuẩn hoá theo tên trong file "Phân tích sâu Thương hiệu" và `data/brand_colors.js` |
| SKU không có thương hiệu ghi `Generic`/`Others` | Theo reference.md, mục "SKU không có thương hiệu" (`Thiên Long`, `G-Star` hoặc `OEM`) |
| Tự đổi màu khi 2 thương hiệu trùng màu trong cùng biểu đồ | Báo người dùng quyết định; đổi thì sửa 1 dòng trong `data/brand_colors.js` |
| Khai báo category chỉ có sub-category | Không khai báo category đó cho đến khi có scope `all` |
| Viết tay số cho tab "Tất cả" hoặc file YTD | Engine tự cộng; không lưu |
| Link sản phẩm giữ dạng `shop-vn.tiktok.com/pdp/…` | Chuẩn hoá theo reference.md |
| Mở xlsx trực tiếp → `PermissionError` | Dùng `read_raw.py` (tự copy ra thư mục tạm) |
| `python` không có `-I -X utf8` → `UnicodeEncodeError` | Luôn chạy với `-I -X utf8` |

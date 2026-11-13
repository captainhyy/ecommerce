# Quy tắc màu thương hiệu (Brand Colors)

Quy tắc này áp dụng cho màu thương hiệu trên biểu đồ Brand Landscape. File data không lưu màu: `data/ecom_engine.js` tra màu theo tên trong `data/brand_colors.js`.

## 1. Nguồn chuẩn: `data/brand_colors.js`

**`data/brand_colors.js` là nguồn chuẩn duy nhất (source of truth).** Một thương hiệu (theo tên) có **đúng 1 màu**, dùng ở mọi category, sub-category và mọi kỳ (Q1, Q2, Q3…, YTD). Bảng được lập từ Q1 2026 và bổ sung dần qua các kỳ.

- Đổi màu một thương hiệu → sửa 1 dòng trong `data/brand_colors.js`. Mọi kỳ tự đổi theo. Sau đó chạy `check_data.js` (không truyền file) để kiểm tra trùng màu ở mọi kỳ.
- `"Others"` luôn là `#cbd5e1` (xám).

## 2. Không phân biệt hoa/thường khi so khớp tên

Hai tên thương hiệu **chỉ khác nhau về cách viết hoa/thường** (vd `Ik Copy` vs `IK Copy`, `ClassMate` vs `Classmate`) được coi là **cùng 1 thương hiệu** — không được tách thành 2 dòng riêng trong `brand[]`, và phải dùng chung 1 màu.

**Cách chọn chính tả chuẩn khi phát hiện biến thể:**
1. Đếm số lần xuất hiện của mỗi cách viết (tính cả trong `brand[].n` lẫn `prod[].br`) trên toàn bộ dữ liệu đã có.
2. Cách viết xuất hiện **nhiều hơn** → thành chuẩn.
3. Nếu hoà → ưu tiên cách viết đang dùng trong mảng `brand[]` (vì đó là nguồn xác định danh tính thương hiệu, còn `prod[].br` chỉ là gắn nhãn theo từng SKU).

Áp dụng chuẩn hoá này cho **cả tên trong `brand` lẫn `prod[].br`** ở mọi scope bị ảnh hưởng. Engine tự tính lại thẻ Leading Brand. Engine cũng tự đổi tên về đúng cách viết trong `data/brand_colors.js` khi chỉ khác hoa/thường.

**Tên chỉ khác dấu** (vd `Hong Ha` / `Hồng Hà`): không tự gộp. Hỏi người dùng. Nếu người dùng xác nhận là 1 thương hiệu, thì gộp theo cách trên. Nếu 2 dòng cùng nằm trong 1 `brand[]`, thì cộng `cur` và `pre` thành 1 dòng.

Các cặp đã được người dùng xác nhận là cùng 1 thương hiệu:

| Biến thể | Tên chuẩn | Ngày xác nhận |
|---|---|---|
| `Hong Ha` | `Hồng Hà` | 2026-11-11 |
| `Flexio` | `Thiên Long` — **chỉ trong `hoc_cu.may_tinh`** (gộp cả `brand[]` và `prod[].br`, mọi kỳ). Scope khác giữ `Flexio` riêng, trừ khi người dùng yêu cầu. | 2026-11-13 |

## 3. Bảng màu chuẩn

Bảng màu nằm trong `data/brand_colors.js` (thứ tự ABC, mỗi dòng 1 thương hiệu).

3 thương hiệu neo (anchor) — **luôn cố định**, không đổi kể cả khi build lại từ đầu:

| Thương hiệu | Màu |
|---|---|
| Thiên Long | `#1a56db` |
| Deli | `#ef4444` |
| G-Star | `#10b981` |
| Others | `#cbd5e1` |

> **Lưu ý:** nhiều thương hiệu dùng chung 1 mã màu (vd `#8b5cf6`). Điều này chấp nhận được khi chúng không nằm chung 1 biểu đồ Brand Landscape. `check_data.js` báo `WARN` khi 2 thương hiệu cùng màu nằm chung 1 `brand[]`. Khi đó, báo người dùng quyết định đổi màu; không tự đổi. Thương hiệu chưa có trong `data/brand_colors.js` → `check_data.js` báo `ERR`.

## 4. Khi gặp thương hiệu mới

1. Tra tên thương hiệu mới (không phân biệt hoa/thường) trong `data/brand_colors.js`.
2. Nếu đã có trong bảng → dùng đúng màu đó.
3. Nếu **chưa từng xuất hiện** ở bất kỳ kỳ nào trước đó → gán màu mới từ bảng màu dự phòng bên dưới (chọn màu **chưa dùng cho brand nào khác trong cùng 1 category/sub-category** để tránh trùng màu trong cùng 1 biểu đồ), rồi **thêm 1 dòng vào `data/brand_colors.js`** (giữ thứ tự ABC) để làm chuẩn cho các kỳ sau.

**Bảng màu dự phòng (cycle khi cần gán mới):**
```
#8b5cf6, #f97316, #f59e0b, #3b82f6, #06b6d4, #ec4899, #84cc16
```

## 5. Áp dụng

- Skill `/update-ecom-from-raw` áp dụng file này mỗi lần ghi `brand` và `prod[].br`.
- Kỳ YTD do engine cộng từ các quý; màu lấy từ `data/brand_colors.js`, không sinh màu mới.

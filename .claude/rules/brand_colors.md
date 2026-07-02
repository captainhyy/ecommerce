# Quy tắc màu thương hiệu (Brand Colors)

Quy tắc này áp dụng cho trường `c` (màu hex) trong mọi mảng `brand[]` của `data/2026/ecom_data_*.js` (category-level và `sdata.<sub>`).

## 1. Nguồn chuẩn: Q1 2026

**`data/2026/ecom_data_q1.js` là nguồn chuẩn (source of truth) cho màu thương hiệu.** Một thương hiệu (theo tên) chỉ có **đúng 1 màu duy nhất**, dùng xuyên suốt mọi category, sub-category, và mọi kỳ báo cáo (Q1, Q2, Q3..., YTD).

- Nếu thương hiệu đã xuất hiện ở Q1 → dùng lại đúng màu đó cho mọi nơi khác.
- Nếu thương hiệu chỉ xuất hiện lần đầu ở kỳ sau (Q2 trở đi, chưa từng có ở Q1) → giữ nguyên màu đã gán ở kỳ đó, đồng thời màu này trở thành chuẩn cho các kỳ tiếp theo.
- `"Others"` luôn cố định `#cbd5e1` (xám), không đổi.

## 2. Không phân biệt hoa/thường khi so khớp tên

Hai tên thương hiệu **chỉ khác nhau về cách viết hoa/thường** (vd `Ik Copy` vs `IK Copy`, `ClassMate` vs `Classmate`) được coi là **cùng 1 thương hiệu** — không được tách thành 2 dòng riêng trong `brand[]`, và phải dùng chung 1 màu.

**Cách chọn chính tả chuẩn khi phát hiện biến thể:**
1. Đếm số lần xuất hiện của mỗi cách viết (tính cả trong `brand[].n` lẫn `prod[].br`) trên toàn bộ dữ liệu đã có.
2. Cách viết xuất hiện **nhiều hơn** → thành chuẩn.
3. Nếu hoà → ưu tiên cách viết đang dùng trong mảng `brand[]` (vì đó là nguồn xác định danh tính thương hiệu, còn `prod[].br` chỉ là gắn nhãn theo từng SKU).

Áp dụng chuẩn hoá này cho **cả `brand[].n` lẫn `prod[].br`** ở mọi scope bị ảnh hưởng, và tính lại thẻ **Leading Brand** (dkpi) nếu số đếm SKU thay đổi do gộp tên.

## 3. Bảng màu chuẩn hiện tại (67 thương hiệu, tính đến Q1+Q2 2026)

3 thương hiệu neo (anchor) — **luôn cố định**, không đổi kể cả khi build lại từ đầu:

| Thương hiệu | Màu |
|---|---|
| Thiên Long | `#1a56db` |
| Deli | `#ef4444` |
| G-Star | `#10b981` |
| Others | `#cbd5e1` |

Toàn bộ bảng màu (JSON, brand → hex):

```json
{
  "Adiva": "#f59e0b",
  "Aihao": "#f97316",
  "America Tape": "#f59e0b",
  "Angel Mark": "#f97316",
  "Artline": "#8b5cf6",
  "Besta": "#10b981",
  "Bossee": "#f97316",
  "But Viet": "#f97316",
  "But": "#f59e0b",
  "Casio": "#8b5cf6",
  "Classmate": "#8b5cf6",
  "Colokit": "#fbbf24",
  "Decorme": "#8b5cf6",
  "Deli": "#ef4444",
  "Double A": "#8b5cf6",
  "Enmy": "#84cc16",
  "Ez Balo": "#ef4444",
  "Fahasa": "#3b82f6",
  "Finenolo": "#6366f1",
  "Flexio": "#10b981",
  "Flexoffice": "#8b5cf6",
  "Four Candies": "#10b981",
  "G-Star": "#10b981",
  "Genbag": "#1a56db",
  "Gia Hưng": "#a855f7",
  "Global Art": "#10b981",
  "Grasp": "#f59e0b",
  "Gxin": "#10b981",
  "H H T Hải Tiến": "#f97316",
  "Hiệp Phong": "#3b82f6",
  "Hong Ha": "#f59e0b",
  "Hà My Bookstore": "#3b82f6",
  "Hải Tiến": "#8b5cf6",
  "Hồng Hà": "#ef4444",
  "IK Copy": "#8b5cf6",
  "IK Plus": "#f97316",
  "Jupitearth": "#3b82f6",
  "King": "#f59e0b",
  "Knote": "#10b981",
  "Kohno": "#8b5cf6",
  "Leyue": "#3b82f6",
  "M&G": "#f59e0b",
  "Mcbooks": "#10b981",
  "Mideer": "#06b6d4",
  "Mont Marte": "#8b5cf6",
  "Natoli": "#f97316",
  "Nevskaya Palitra": "#3b82f6",
  "Như Ý Shop": "#10b981",
  "Oji": "#f97316",
  "Paper One": "#10b981",
  "Pentel": "#f97316",
  "Plus": "#8b5cf6",
  "Qpenz": "#3b82f6",
  "Quaff": "#f97316",
  "Sao Thiên": "#f97316",
  "Smartkids": "#f43f5e",
  "Stabilo": "#8b5cf6",
  "Staedtler": "#f59e0b",
  "Tee Sik": "#8b5cf6",
  "Texas Instruments": "#f59e0b",
  "Thiên An": "#8b5cf6",
  "Thiên Long": "#1a56db",
  "Tombow": "#8b5cf6",
  "Total": "#10b981",
  "Vâng Thiên": "#f97316",
  "Yowei": "#f59e0b",
  "Zebra": "#f59e0b"
}
```

> **Lưu ý:** một vài mã màu bị trùng nhau giữa các thương hiệu khác nhau (vd nhiều brand cùng dùng `#8b5cf6`). Điều này chấp nhận được vì các brand trùng màu hiếm khi xuất hiện chung trong cùng 1 biểu đồ Brand Landscape (mỗi biểu đồ chỉ hiển thị top 5 + Others của 1 category/sub-category cụ thể).

## 4. Khi thêm thương hiệu mới (kỳ báo cáo mới, vd Q3)

1. Tra tên thương hiệu mới (không phân biệt hoa/thường) trong bảng ở mục 3.
2. Nếu đã có trong bảng → dùng đúng màu đó.
3. Nếu **chưa từng xuất hiện** ở bất kỳ kỳ nào trước đó → gán màu mới từ bảng màu dự phòng bên dưới (chọn màu **chưa dùng cho brand nào khác trong cùng 1 category/sub-category** để tránh trùng màu trong cùng 1 biểu đồ), rồi **thêm thương hiệu này vào bảng ở mục 3** để làm chuẩn cho các kỳ sau.

**Bảng màu dự phòng (cycle khi cần gán mới):**
```
#8b5cf6, #f97316, #f59e0b, #3b82f6, #06b6d4, #ec4899, #84cc16
```

## 5. Tham chiếu

- Áp dụng cùng lúc với workflow cập nhật dữ liệu: [.claude/workflows/update_ecom_data.md](../workflows/update_ecom_data.md).
- Nếu build lại `ecom_data_ytdh1.js` (hoặc YTD kỳ khác) từ nhiều quý gộp, màu thương hiệu phải kế thừa nguyên trạng từ các file quý nguồn (đã áp dụng đúng rule này) — không tự sinh màu mới trong bước gộp.

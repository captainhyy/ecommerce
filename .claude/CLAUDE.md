# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the Dashboard

**Bắt buộc dùng Live Server** — không mở `file:///` trực tiếp vì trình duyệt chặn dynamic `<script>` loading do CORS.

```bash
# VS Code: Dùng extension "Live Server" (chuột phải index.html → Open with Live Server)
# Hoặc Python:
python -m http.server 8000
# Truy cập: http://localhost:8000/
```

**URL params để test:**
- `?p=q1` — xem Q1 2026
- `?p=q2` — xem Q2 2026
- `?p=ytdh1` — xem YTD H1 2026 (Q1+Q2 gộp)
- `?cat=but_viet&sub=but_bi` — filter category/sub-category

## Cập nhật dữ liệu

Dùng workflow `/update_ecom_data` — xem hướng dẫn đầy đủ tại [.claude/workflows/update_ecom_data.md](.claude/workflows/update_ecom_data.md).

Tóm tắt: người dùng để file Excel vào `input/` theo quy ước `{cate}_{subcate}.xlsx` (ví dụ `butviet_butbi.xlsx`) → AI đọc sheet `Update_Data` → map vào đúng section trong `data/2026/ecom_data_qN.js`.

## Kiến trúc quan trọng

### Multi-Period Flow

```
?p=q1  → load ecom_data_q1.js → render trực tiếp
?p=q2  → load ecom_data_q2.js → render trực tiếp
```

### Cấu trúc data file (`ecom_data_qN.js`)

Mỗi file khai báo 3 biến top-level — **BẮT BUỘC dùng `var`**, KHÔNG dùng `const`:

```javascript
var PERIOD = { cur: 'Q2 2026', pre: 'Q2 2025', label: 'Strategic Report Q2 2026' };
var CAT = { but_viet, hoc_cu, my_thuat, van_phong_pham, all };
var MONTHLY = [{ m: 'Apr', rv, pre_rv, ts, pre_ts }, ...]; // 3 tháng/quý
```

### Thêm quý mới (ví dụ Q3)

1. Copy `ecom_data_q1.js` → `ecom_data_q3.js`, cập nhật PERIOD và MONTHLY
2. Thêm `{ p: 'q3', label: 'Q3 2026' }` vào mảng `DATASETS` trong `index.html`

## Quy tắc bắt buộc

| Quy tắc | Chi tiết |
|---------|---------|
| **`var` không `const`** | Tất cả khai báo top-level trong file data |
| **Không sửa `index.html`** | Trừ khi thêm kỳ mới vào DATASETS hoặc được yêu cầu rõ ràng |
| **Tên thương hiệu** | `'Thiên Long'` (có dấu), không phải `'Thien Long'` |
| **Thứ tự cột bar chart** | Cột Previous (năm trước) bên TRÁI, Current (năm nay) bên PHẢI |
| **Format đơn vị** | `Tỷ`, `Tr`, `Nghìn`, `%`, `pp` — giữ nhất quán |
| **Màu thương hiệu (`brand[].c`)** | 1 tên = 1 màu duy nhất, không phân biệt hoa/thường, chuẩn theo Q1 2026 — xem [.claude/rules/brand_colors.md](.claude/rules/brand_colors.md) |

## Danh mục sản phẩm (key mapping)

| Key | Tên | Sub-categories |
|-----|-----|----------------|
| `but_viet` | Bút Viết | `but_bi`, `but_gel` |
| `hoc_cu` | Học Cụ | `may_tinh`, `tap_vo`, `balo`, `but_chi`, `gom` |
| `my_thuat` | Mỹ Thuật | `sap_mau`, `acrylic`, `long_mt`, `chi_mau` |
| `van_phong_pham` | Văn Phòng Phẩm | `bang_keo`, `keo_dan`, `ghim_kep` |
| `all` | Tất cả | *(tổng hợp từ tất cả category)* |

## Chỉ số phái sinh (tính khi cập nhật data)

- **TikTok Market Share** = Doanh số TikTok / Tổng doanh số kỳ hiện tại
- **Top 10 Contribution** = Tổng top 10 SKU / Tổng doanh số; `sub` = `"of Total Gross Sales"`
- **Leading Brand** = thương hiệu thị phần cao nhất; `sub` = `"{n}/10 Top SKU Spots"`
- **TikTok Share growth** = share hiện tại − share cùng kỳ, format `"+X.Xpp"`
- KHÔNG tự tính chỉ số khác ngoài danh sách này

## Cấu trúc thư mục

```
Ecom/
├── .claude/
│   ├── CLAUDE.md                           # File này
│   ├── rules/brand_colors.md               # Quy tắc màu thương hiệu
│   └── workflows/update_ecom_data.md       # Workflow cập nhật data
├── .github/workflows/static.yml            # Deploy GitHub Pages
├── input/                                  # Excel đầu vào: {cate}_{subcate}.xlsx
├── data/2026/
│   ├── ecom_data_q1.js                     # Data Q1 (thực tế)
│   ├── ecom_data_q2.js                     # Data Q2 (thực tế)
│   └── ecom_data_ytdh1.js                  # Data YTD H1 (Q1+Q2 gộp)
├── index.html                              # Dashboard (UI + data loader) — ở gốc repo để phục vụ GitHub Pages
├── templates/data_update_template.xlsx     # Template Excel mẫu
├── KNOWLEDGE.md / README.md
```

## Trạng thái hiện tại

- Q1 2026: data thực tế ✅
- Q2 2026: data thực tế ✅ (Tiki đã loại bỏ khỏi platform breakdown, TikTok Market Share tính lại theo mẫu số mới)
- YTD H1 2026: gộp từ Q1+Q2 ✅ — xem cách tính tại các chỉ số phái sinh bên dưới
- MONTHLY Q2 (và do đó YTD Apr-Jun): chờ data thực tế ⬜ — trend chart tạm thời chỉ có Jan-Mar
- Phân khúc giá theo nền tảng (Lazada, TikTok): chưa có (`price[].l` và `price[].t` đang là `0`) ⬜
- Màu thương hiệu: đã chuẩn hoá theo Q1 2026, xem [.claude/rules/brand_colors.md](rules/brand_colors.md)

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Kiến trúc

- **HTML/JS thuần + Tailwind CSS (Play CDN) + Chart.js 4 (CDN)**. Không build tool, không `package.json`. UI nằm trong `index.html` (ở gốc repo). Bản giao diện cũ (2 slide, CSS tự viết): `index_legacy.html`.
- **Data 2 lớp:**
  - `data/2026/ecom_data_<kỳ>.js`: chỉ **số gốc** lấy từ Metric.
  - `data/ecom_engine.js`: chuyển số gốc thành `PERIOD`, `CAT`, `MONTHLY` mà `index.html` vẽ. Engine tính mọi chỉ số phái sinh, format đơn vị, tab "Tất cả" và kỳ YTD.
  - Dùng chung: `data/catalog.js` (category, sub-category, sàn, 18 khoảng giá), `data/brand_colors.js` (màu thương hiệu).
- **Không có lệnh build/lint/test.** Kiểm tra bằng mắt qua Live Server. Kiểm tra file data bằng `check_data.js` (xem "Cập nhật dữ liệu").
- **1 trang dashboard** (thiết kế lại 2026-11-13): header (trái: tên + scope đang xem; phải: chọn kỳ, không có Export) → 4 KPI (Gross, Units, Storefronts, TikTok Share) → cột trái (xếp hạng category/sub-category, thị phần thương hiệu) + cột phải (trend theo quý/tháng, doanh số theo sàn, phân khúc giá) → bảng Top SKU.
- **Key Insights** (card ngay dưới 4 KPI): `buildInsights()` trong `index.html` tự sinh tối đa 6 ý từ số, cho mọi kỳ và scope. Chỉ dùng số đã hiện trên trang. Không có phần Implication (người dùng bỏ, 2026-11-13).
- Đổi kỳ không tải lại trang: `switchPeriod()` dựng kỳ mới bằng `ECOM.build()` (có cache `QB`), làm mờ rồi vẽ lại các khối `.fade-target`, và ghi `?p=` bằng `history.pushState` (nút Back chạy được). Kỳ chưa được nạp → tải lại trang như cũ.
- `index.html` nạp file data của **mọi kỳ trong `DATASETS`** để vẽ trend theo quý. Nó dùng `RAW` của `ECOM.build()` và `ECOM.aggregate()` để lấy số gốc cho biểu đồ.
- **Deploy:** GitHub Pages qua `.github/workflows/static.yml`. Push lên `master` → tự deploy **toàn bộ repo**, công khai. Vì vậy `raw/` nằm trong `.gitignore`.

## Chạy dashboard

Bắt buộc qua HTTP server. Mở `file:///` thì trình duyệt chặn việc nạp file data.

```bash
python -m http.server 8000      # hoặc VS Code Live Server
# http://localhost:8000/?p=q2
```

| Param | Ý nghĩa |
|---|---|
| `?p=q1` / `q2` / `q3` / `ytdh1` | Kỳ báo cáo → nạp `data/2026/ecom_data_<p>.js`. Không có `p` → `q1`. `p` lạ → trang báo lỗi. |
| `?cat=but_viet&sub=but_bi` | Lọc category / sub-category |

Tab kỳ trên giao diện lấy từ mảng `DATASETS` trong `index.html`. Một kỳ có file data nhưng chưa có trong `DATASETS` vẫn xem được qua `?p=`.

## Cập nhật dữ liệu

Dùng skill **`/update-ecom-from-raw`** ([.claude/skills/update-ecom-from-raw/](skills/update-ecom-from-raw/SKILL.md)).

1. Người dùng đặt file xuất từ Metric vào `raw/<cate>_<sub>/` (vd `raw/but-viet_all/`, `raw/hoc-cu_balo/`): ảnh chụp trang "Báo cáo Phân tích thị trường", `Phân tích sâu Mức giá *.xlsx`, `Phân tích sâu Thương hiệu *.xlsx`, `metric-vn-product-list-*.xlsx`.
2. Skill đọc file, xác định kỳ từ ngày trong file, lấy số gốc và ghi vào đúng scope.
3. Kiểm tra: `node .claude/skills/update-ecom-from-raw/scripts/check_data.js data/2026/ecom_data_<kỳ>.js`

Nguồn và cấu trúc từng trường: [reference.md](skills/update-ecom-from-raw/reference.md).

## File data `data/2026/ecom_data_<kỳ>.js`

Cấu trúc đầy đủ, đơn vị và nguồn từng trường: [reference.md](skills/update-ecom-from-raw/reference.md). Tóm tắt:

```javascript
var ECOM_DATA = ECOM_DATA || {};
ECOM_DATA.q3 = {
  period: { cur: 'Q3 2026', pre: 'Q3 2025', label: 'Strategic Report Q3 2026' },
  monthly: [],
  cats: {
    but_viet: { all: { gross, units, stores, plat, brand, price, prod }, but_bi: {...}, but_gel: {...} },
    ...
  }
};
```

- Mỗi category bắt buộc có scope `all`. Category chưa có `all` thì không khai báo.
- Không lưu: chuỗi đã format, `kpi`/`dkpi`, % thương hiệu, dòng `Others`, màu, tên/icon, `CAT.all`.
- Kỳ YTD (`ecom_data_ytdh1.js`) chỉ có `period` và `parts: ['q1', 'q2']`. Engine tự cộng; sửa số quý thì YTD tự cập nhật.

### Thêm kỳ mới

Skill tự tạo file kỳ mới khi gặp data của kỳ chưa có file (xem SKILL.md). Sau đó chỉ thêm `{ p: 'q3', label: 'Q3 2026' }` vào `DATASETS` khi người dùng đồng ý, vì tab sẽ hiện công khai.

## Quy tắc bắt buộc

| Quy tắc | Chi tiết |
|---|---|
| `var`, không `const` | Mọi khai báo top-level trong file data và file dùng chung trong `data/` |
| Chỉ lưu số gốc | File data không chứa chuỗi đã format hay chỉ số phái sinh |
| Không sửa `index.html` | Trừ khi thêm kỳ vào `DATASETS` hoặc người dùng yêu cầu rõ |
| Tên thương hiệu | `'Thiên Long'` có dấu. Màu: `data/brand_colors.js`. Biến thể tên: [rules/brand_colors.md](rules/brand_colors.md) |
| Bar chart | Cột năm trước bên trái, năm nay bên phải |
| Đơn vị | `Tỷ`, `Tr`, `Triệu`, `Nghìn`, `K`, `%`, `pp` |
| Nền tảng | Shopee, TikTok Shop, Lazada. Không có Tiki (bỏ từ Q2 2026) |

## Chỉ số phái sinh

Chỉ có các chỉ số dưới đây. Tất cả do `data/ecom_engine.js` tính; không ghi vào file data.

- **TikTok Market Share** = doanh số TikTok ÷ Gross Sales. **Growth** = share đã làm tròn − share cùng kỳ đã làm tròn, format `+X.Xpp`.
- **Top 10 Contribution** = tổng doanh thu top 10 SKU ÷ Gross Sales; `sub: 'of Total Gross Sales'`.
- **Leading Brand** = thương hiệu thị phần cao nhất; `sub: '{n}/10 Top SKU Spots'`.
- **Thị phần thương hiệu** = doanh số thương hiệu ÷ Gross Sales của scope (không dùng % trong top 10 của Metric). Lấy top 5; `Others` = 100% − top 5.

## Danh mục (key)

Danh sách đầy đủ, tên và icon: `data/catalog.js`. Pill sub-category chỉ hiện khi kỳ đó có data (vd chỉ Q1 có `chi_mau`).

| Key | Tên | Sub-category |
|---|---|---|
| `but_viet` | Bút Viết | `but_bi`, `but_gel` |
| `hoc_cu` | Học Cụ | `may_tinh`, `tap_vo`, `balo`, `but_chi`, `gom` |
| `my_thuat` | Mỹ Thuật | `sap_mau`, `acrylic`, `long_mt`, `chi_mau` (chỉ Q1). Không có Màu Nước (`mau_nuoc`): người dùng bỏ ở mọi kỳ, 2026-11-13 |
| `van_phong_pham` | Văn Phòng Phẩm | `da_quang`, `long_bang`, `long_dau`, `xoa_nuoc`, `file_folder`, `giay_copy` |

Tên folder `raw/` → key: đổi `-` thành `_` (`raw/van-phong-pham_long-bang/` → `cats.van_phong_pham.long_bang`). Folder không theo quy ước (vd `raw/vpp/but long bang`) → đối chiếu `data/catalog.js`.

## Trạng thái hiện tại

- Q1 2026 ✅, Q2 2026 ✅, YTD H1 2026 (Q1+Q2) ✅.
- Q3 2026 ✅: `ecom_data_q3.js` có đủ 4 category và 16 sub-category (nguồn `raw/{but viet, hoc cu, my thuat, vpp}/*`). Đã thêm vào `DATASETS` (chưa push). Không làm `my_thuat.mau_nuoc` (người dùng bỏ ở Q3 ngày 2026-11-12; đã xoá khỏi Q2 và `data/catalog.js` ngày 2026-11-13). Một số thương hiệu có doanh số cùng kỳ `null` (Metric ghi N/A); giữ nguyên theo quyết định 2026-11-12.
- Q2 2026 `my_thuat.long_mt`, `hoc_cu.balo`, `hoc_cu.but_chi` đã làm lại từ file raw Q2 (2026-11-13) ✅. Q2 không còn lỗi data cũ đã biết.
- `MONTHLY` Q2, Q3 chưa có ⬜. Trend chart YTD chỉ có Jan–Mar.
- Phân khúc giá chỉ có tổng mọi sàn; chưa tách theo Lazada/TikTok ⬜.

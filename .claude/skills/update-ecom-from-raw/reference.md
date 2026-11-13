# Nguồn và cấu trúc file data (schema số gốc)

Ký hiệu: **ảnh** = ảnh chụp trang "Báo cáo Phân tích thị trường" của Metric. **TH** = file `Phân tích sâu Thương hiệu *.xlsx`. **MG** = file `Phân tích sâu Mức giá *.xlsx`. **PL** = file `metric-vn-product-list-*.xlsx`.

Mọi số trong file này là **số minh hoạ**, không phải data thật.

## Nguyên tắc

- File data **chỉ lưu số gốc**, đúng như Metric cho. Không lưu chuỗi đã format (`'2.1 Tỷ'`, `'+15%'`), không lưu chỉ số phái sinh.
- `data/ecom_engine.js` tính và format mọi thứ còn lại khi dashboard nạp:
  - TikTok Market Share (= TikTok ÷ Gross Sales) và growth `pp`.
  - Top 10 Contribution, Leading Brand và số SKU của Leading Brand.
  - Thị phần thương hiệu (= doanh số ÷ Gross Sales), chọn top 5, dòng `Others`.
  - Màu thương hiệu (tra `data/brand_colors.js`), màu sàn, tên/icon category và sub-category (tra `data/catalog.js`).
  - Đơn vị hiển thị: `Tỷ`/`Tr`, `Triệu`/`Nghìn`, `K`/`M`, `%`, `pp`.
  - `CAT.all` (cộng 4 category) và kỳ YTD (cộng các quý).
- Giữ **độ chính xác cao nhất** mà nguồn có. Ví dụ: MG cho số VND chính xác → ghi 2–4 chữ số thập phân (tỷ), không làm tròn về 1 chữ số. Ảnh cho `563,5 Tr` → ghi `0.5635`.
- Dấu thập phân là dấu chấm (`120.5`), dù Metric hiển thị dấu phẩy (`120,5`).

## Cấu trúc file `data/2026/ecom_data_<kỳ>.js`

```js
var ECOM_DATA = ECOM_DATA || {};

ECOM_DATA.q3 = {
  period: { cur: 'Q3 2026', pre: 'Q3 2025', label: 'Strategic Report Q3 2026' },
  monthly: [],                       // [{ m: 'Jul', rv, pre_rv, ts, pre_ts }] — tỷ, %; [] nếu chưa có
  cats: {
    but_viet: {
      all:    { gross, units, stores, plat, brand, price, prod },   // cấp category — BẮT BUỘC
      but_bi: { gross, units, stores, plat, brand, price, prod }    // sub-category (key theo data/catalog.js)
    },
    hoc_cu: { all: {...}, may_tinh: {...} }
  }
};
```

- Thứ tự category và sub-category trên dashboard lấy từ `data/catalog.js`, không theo thứ tự trong file.
- Category chưa có data cấp category (`all`) → không khai báo category đó.
- Sub-category mới chưa có trong `data/catalog.js` → thêm vào catalog trước (key, tên, icon), rồi mới ghi data.

### Kỳ cộng dồn (YTD)

```js
ECOM_DATA.ytdh1 = { period: {...}, parts: ['q1', 'q2'] };
```

File YTD không lưu số. Engine cộng các kỳ trong `parts`. Quy tắc cộng:
- Gross, Units, Storefronts, `plat`, `price`, doanh số thương hiệu: cộng thẳng.
- Thương hiệu chỉ có trong top 5 của 1 quý → phần quý kia nằm trong `Others`.
- SKU trùng `url`: cộng `rv`, `us`. Growth `g`, `ug` tính lại từ số cùng kỳ suy ra của từng quý (`rv ÷ (1 + g)`); nếu 1 quý thiếu growth thì để trống. Các trường khác lấy theo quý mới nhất.
- `monthly`: nối `monthly` của các quý.

## Từng trường của 1 scope

### gross, units, stores — nguồn: ảnh, phần "Tổng quan thị trường"

```js
gross:  { cur: 170.3,   pre: 133.3,   g: 28 },    // "Doanh số (VND)" — tỷ VND
units:  { cur: 4912000, pre: 7105000, g: -31 },   // "Lượt bán" — số sản phẩm
stores: { cur: 5123,    pre: 6008,    g: -15 },   // "Gian hàng có lượt bán" — số gian hàng
```

- `g` = % tăng trưởng Metric hiển thị trên ảnh (số nguyên, có dấu). Ghi `g` vì Metric tính trên số chưa làm tròn, chính xác hơn khi tính lại. Không có thì bỏ `g`; engine tự tính từ `cur`/`pre`.
- Ảnh ghi `914,8 nghìn` → `914800`. Ảnh ghi `1,2 triệu` → `1200000`.
- Engine format: Units cấp category luôn `Triệu`; cấp sub-category `Triệu` nếu ≥ 1 triệu, ngược lại `Nghìn`. Storefronts ≥ 1000 → `Nghìn`, ngược lại số đếm.

### plat — nguồn: ảnh, phần "Các sàn", 2 bảng "Nền tảng" (kỳ này / 1 năm trước)

```js
plat: { shopee: [103.2, 80.1], tiktok: [66.0, 50.7], lazada: [1.1, 2.5] },   // [kỳ này, cùng kỳ] — tỷ VND
```

- Key: `shopee`, `tiktok`, `lazada` (theo `data/catalog.js`). Không có Tiki.
- Số dưới 1 tỷ trên ảnh (vd `563,5 Tr`) → ghi đủ (`0.5635`), không làm tròn.
- Kiểm tra: tổng kỳ này ≈ `gross.cur`, tổng cùng kỳ ≈ `gross.pre` (lệch ≤ 2%).

### brand — nguồn ưu tiên: TH

```js
brand: [['Thiên Long', 42.06, 26.13], ['Deli', 26.74, 12.13], ['Hồng Hà', 2.55, null]],   // [tên, doanh số kỳ này, doanh số cùng kỳ] — tỷ VND
```

- Lấy cột `Doanh số TY`, `Doanh số LY` của TH. Nếu không có TH, thì dùng bảng "Top Thương hiệu" trên ảnh (cột doanh số, không dùng cột %).
- Ghi 5 thương hiệu TY cao nhất. Ghi thêm cũng được; engine chỉ lấy 5 dòng cao nhất. **Không** ghi dòng `Others`.
- LY là `N/A` → ghi `null`. Không ước tính (quyết định 2026-11-12).
- Tên: dùng tên trong TH, chuẩn hoá theo `data/brand_colors.js` và `.claude/rules/brand_colors.md` (vd `Ik Copy` → `IK Copy`, `Hong Ha` → `Hồng Hà`).
- Thương hiệu chưa có trong `data/brand_colors.js` → thêm 1 dòng vào file đó (mục 4 của `brand_colors.md`). Nếu không thêm, `check_data.js` báo `ERR`.

### price — nguồn: MG, chỉ dòng `Kênh bán` = `"Tất cả các sàn"`

```js
price: { '< 10K': 7.0712, '10K-30K': 49.9013, '30K-50K': 39.5108 },   // tỷ VND
```

| Khoảng trong MG | Key |
|---|---|
| < 10.000₫ | `< 10K` |
| 10.000₫ - 30.000₫ | `10K-30K` |
| 30.000₫ - 50.000₫ | `30K-50K` |
| 50.000₫ - 75.000₫ | `50K-75K` |
| 75.000₫ - 100.000₫ | `75K-100K` |
| 100.000₫ - 150.000₫ | `100K-150K` |
| 150.000₫ - 200.000₫ | `150K-200K` |
| 200.000₫ - 350.000₫ | `200K-350K` |
| 350.000₫ - 500.000₫ | `350K-500K` |
| 500.000₫ - 750.000₫ | `500K-750K` |
| 750.000₫ - 1.000.000₫ | `750K-1M` |
| 1.000.000₫ - 1.500.000₫ | `1M-1.5M` |
| 1.500.000₫ - 2.000.000₫ | `1.5M-2M` |
| 2.000.000₫ - 3.500.000₫ | `2M-3.5M` |
| 3.500.000₫ - 5.000.000₫ | `3.5M-5M` |
| 5.000.000₫ - 7.500.000₫ | `5M-7.5M` |
| 7.500.000₫ - 10.000.000₫ | `7.5M-10M` |
| 10.000.000₫ - 15.000.000₫ | `10M-15M` |

- Chỉ ghi khoảng có doanh số. Engine tự điền 0 cho khoảng thiếu và bỏ các khoảng 0 ở cuối.
- Tổng phải ≈ `gross.cur` (lệch ≤ 2%). `read_raw.py` in sẵn tổng. Lệch nhiều → MG có thể khác kỳ hoặc khác bộ từ khoá → DỪNG, hỏi người dùng.
- Không có MG → hỏi người dùng. Không dùng khoảng giá thô trên ảnh.

### prod — top 10 SKU, nguồn chính: PL (đã sắp theo `Doanh thu` giảm dần)

```js
{ n: 'Combo 5 10 20 Bút gel bấm ngòi ST 0.5mm EG08S Deli', br: 'Deli', ch: 'tiktok', pr: 18100, fm: 'Combo',
  rv: 2912345678, g: 327, us: 135712, ug: 471, tr: 4801234567, tu: 227200, re: 13196,
  url: 'https://www.tiktok.com/view/product/1731593973247936127' }
```

| Trường | Nguồn | Kiểu |
|---|---|---|
| `n` | `Tên sản phẩm`, rút gọn (xem dưới) | chuỗi |
| `br` | `Thương hiệu`, chuẩn hoá theo tên dùng trong `brand`. Trống → xem "SKU không có thương hiệu" | chuỗi |
| `ch` | Domain của `Link sản phẩm`: `shopee`, `tiktok`, `lazada` | chuỗi |
| `pr` | `Giá` | VND |
| `fm` | `Combo` nếu tên có "Combo", "Hộp", "Set", "Bộ"; ngược lại `Single` | chuỗi |
| `rv` | `Doanh thu` | VND |
| `g` | Ảnh: % cạnh "Doanh số trong khoảng ngày đã chọn" (▲ = dương, ▼ = âm); không có → `null` | số |
| `us` | `Số đã bán` | số lượng |
| `ug` | Ảnh: % cạnh "Đã bán trong khoảng ngày đã chọn"; không có → `null` | số |
| `tr` | `Tổng doanh số` | VND |
| `tu` | `Tổng số đã bán`; không có → `null` | số lượng |
| `re` | `Tổng số đánh giá` | số lượng |
| `url` | `Link sản phẩm`, chuẩn hoá (xem dưới) | chuỗi |

- Không ghi `sc`: engine tự gán theo scope.
- Sắp theo `rv` giảm dần. Engine chỉ dùng 10 SKU đầu.

**SKU không có thương hiệu** (PL để trống):
1. Tên có "Thiên Long", "TL" hoặc mã sản phẩm Thiên Long (vd `PM-04`, `CP-02`) → `'Thiên Long'`. Tên có "Gstar" → `'G-Star'` (quyết định 2026-11-12).
2. Còn lại → `'OEM'`. Không dùng `Generic`, `Others`, `OEM/Khác`.

**Rút gọn tên `n`:**
1. Bỏ khoảng trắng đầu/cuối.
2. Bỏ cụm quảng cáo ở đầu tên, trước từ mô tả sản phẩm đầu tiên ("Combo", "Bút", "Hộp", "Set"…). Ví dụ: "DEAL SỐC 5K C", "HOT", "TẶNG NGÒI", "NÂNG CẤP 2026", "ẢNH THẬT".
3. Cắt tại " - " đầu tiên nếu phần trước dài ≥ 30 ký tự; sau đó cắt ở ranh giới từ, tối đa ~60 ký tự.
4. Giữ tên thương hiệu và mã sản phẩm (vd `TL-105`, `EG08S`) nếu nằm trong phần giữ lại.

**Chuẩn hoá `url`:**
- TikTok `https://shop-vn.tiktok.com/pdp/<id>` → `https://www.tiktok.com/view/product/<id>`.
- Shopee `https://shopee.vn/<slug>-i.<shopId>.<itemId>` → `https://shopee.vn/product/<shopId>/<itemId>`.
- Lazada: giữ nguyên.

## Màu thương hiệu, danh mục

- Màu: `data/brand_colors.js` là nguồn duy nhất. Quy tắc chọn và đổi màu: `.claude/rules/brand_colors.md`.
- Category, sub-category, sàn, 18 khoảng giá: `data/catalog.js`.
- Không ghi màu, tên hiển thị hay icon vào file data.

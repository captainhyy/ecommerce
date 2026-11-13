# Knowledge Base — Ecom Dashboard

Bối cảnh nghiệp vụ và các quyết định đã chốt. Cách dùng: [README.md](README.md). Chi tiết kỹ thuật: [.claude/CLAUDE.md](.claude/CLAUDE.md).

## Mục tiêu

Dashboard dạng trình chiếu (2 slide) cho Ban điều hành Thiên Long Group: so sánh hiệu suất ngành hàng văn phòng phẩm trên TMĐT giữa Thiên Long và đối thủ, theo quý và lũy kế, so với cùng kỳ năm trước.

- Slide 1 — Executive Overview: KPI, tăng trưởng theo sàn, thị phần thương hiệu, phân khúc giá, xu hướng theo tháng.
- Slide 2 — Segment Deep-Dive: KPI chi tiết và top 10 SKU theo danh mục / phân khúc.

## Nguồn dữ liệu

- **Metric (metric.vn)**: doanh số, lượt bán, gian hàng, thương hiệu, mức giá, sản phẩm trên Shopee, TikTok Shop, Lazada.
- Mỗi danh mục / phân khúc được phân tích bằng 1 bộ từ khoá trên Metric. Bộ từ khoá quyết định phạm vi số liệu, nên cần giữ ổn định giữa các kỳ để so sánh được.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa |
|---|---|
| Gross Sales | Doanh số (VND) trong kỳ, mọi sàn |
| Units Sold | Lượt bán trong kỳ |
| Active Storefronts | Số gian hàng có lượt bán |
| TikTok Market Share | Doanh số TikTok Shop ÷ Gross Sales |
| Thị phần thương hiệu | Doanh số thương hiệu ÷ Gross Sales của danh mục / phân khúc (không phải % trong top 10 của Metric) |
| Top 10 Contribution | Doanh số top 10 SKU ÷ Gross Sales |
| Leading Brand | Thương hiệu thị phần cao nhất, kèm số SKU của thương hiệu đó trong top 10 |

## Quyết định đã chốt

| Ngày | Quyết định |
|---|---|
| 2026 Q2 | Bỏ Tiki khỏi phân tích theo sàn; TikTok Market Share tính lại theo mẫu số không có Tiki |
| 2026 Q2 | Màu thương hiệu chuẩn hoá: 1 thương hiệu = 1 màu ở mọi kỳ ([brand_colors.md](.claude/rules/brand_colors.md)) |
| 2026-11-11 | Quy trình cập nhật chuyển sang file xuất từ Metric trong `raw/` + skill `/update-ecom-from-raw` (thay workflow Excel template trong `input/`) |
| 2026-11-11 | Thị phần thương hiệu tính trên Gross Sales, không dùng % trong top 10 của Metric |
| 2026-11-11 | Phân khúc giá dùng 18 khoảng cố định, lấy từ file "Phân tích sâu Mức giá", dòng "Tất cả các sàn" |
| 2026-11-11 | `Hong Ha` và `Hồng Hà` là 1 thương hiệu (tên chuẩn `Hồng Hà`, màu `#ec4899`) |
| 2026-11-11 | Kỳ mới chỉ hiện tab trên dashboard khi được duyệt (đủ data) |
| 2026-11-12 | Sub-category Mỹ Thuật (`long_mt`, `sap_mau`, `acrylic`): dùng `Colokit` theo file Thương hiệu (gộp số Thiên Long). SKU Thiên Long trong `prod` của các scope này ghi `br: 'Colokit'` |
| 2026-11-12 | Đổi màu để hết trùng trong cùng biểu đồ: Casio `#06b6d4`, Quaff `#ec4899`, Artline `#84cc16` (áp cho mọi kỳ) |
| 2026-11-12 | SKU trống thương hiệu trong product-list nhưng tên có "Thiên Long", "TL" hoặc mã sản phẩm Thiên Long (vd PM-04, CP-02) → `br: 'Thiên Long'`; tên có "Gstar" → `G-Star`. Áp dụng từ Q3 `long_dau`, `xoa_nuoc`. Chỉ đổi `prod[].br` và thẻ Leading Brand, không đổi `brand[]` |
| 2026-11-12 | Thương hiệu có LY = N/A trong file Thương hiệu → giữ `brand.pre: 0`, không ước tính (phần LY thật nằm trong `Others.pre`) |
| 2026-11-12 | File data chỉ lưu số gốc; `data/ecom_engine.js` tính và format mọi chỉ số, tab "Tất cả" và YTD. Màu thương hiệu chỉ lưu ở `data/brand_colors.js` |
| 2026-11-12 | SKU không có thương hiệu (không suy được từ tên) ghi `OEM` ở mọi kỳ (thay `Generic`, `Others`, `OEM/Khác`) |
| 2026-11-12 | YTD: Storefronts cộng thẳng các quý (giữ như cách cũ; 1 gian hàng bán ở 2 quý được đếm 2 lần) |

Trạng thái data và việc còn mở: mục "Trạng thái hiện tại" trong [.claude/CLAUDE.md](.claude/CLAUDE.md).

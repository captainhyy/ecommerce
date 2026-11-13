# CLAUDE.md

Dashboard TMĐT (Shopee, TikTok Shop, Lazada) của Thiên Long, số liệu từ Metric. 1 trang `index.html`, deploy GitHub Pages.

## Kiến trúc

- HTML/JS thuần + Tailwind (Play CDN) + Chart.js 4 (CDN). Không build, không `package.json`, không test. Kiểm tra bằng mắt qua HTTP server.
- Data 2 lớp:
  - `data/2026/ecom_data_<kỳ>.js`: **chỉ số gốc** từ Metric. Schema và nguồn từng trường: [reference.md](.claude/skills/update-ecom-from-raw/reference.md).
  - `data/ecom_engine.js`: số gốc → `PERIOD`, `CAT`, `MONTHLY`, `RAW`. Engine tính mọi chỉ số phái sinh, format đơn vị, "All Cate" và kỳ YTD.
  - Dùng chung: `data/catalog.js` (category, sub-category, sàn, khoảng giá; là nguồn chuẩn của key), `data/brand_colors.js` (màu thương hiệu).
- Kỳ YTD (`ecom_data_ytdh1.js`) chỉ có `period` và `parts: ['q1','q2','q3']`. Engine tự cộng. Có quý mới thì thêm vào `parts`.
- `index.html` nạp data của mọi kỳ trong mảng `DATASETS` (tab kỳ + trend theo quý). Đổi kỳ không tải lại trang.

## Chạy

```bash
python -m http.server 8000   # mở file:/// thì trình duyệt chặn nạp data
# http://localhost:8000/?p=q3&cat=but_viet&sub=but_bi
```

`?p=` = `q1` | `q2` | `q3` | `ytdh1` (mặc định `q3`, biến `DEFAULT_P` trong `index.html`).

## Cập nhật dữ liệu

1. Dùng skill `/update-ecom-from-raw` với folder trong `raw/<cate>_<sub>/` (đổi `-` thành `_` để ra key).
2. Kiểm tra: `node .claude/skills/update-ecom-from-raw/scripts/check_data.js [file]`. Không truyền file → kiểm tra mọi kỳ, kể cả trùng màu thương hiệu.
3. Kỳ mới: skill tạo file. Chỉ thêm kỳ vào `DATASETS` khi người dùng đồng ý, vì tab hiện công khai.

## Quy tắc bắt buộc

- **Công khai:** push `master` → deploy toàn bộ repo, ai cũng xem được. Không commit `raw/`, `q2/` (file xuất Metric) hay `index_legacy.html` (bản giao diện cũ, chỉ để local). Chỉ commit/push khi người dùng yêu cầu.
- Không sửa `index.html`, trừ khi thêm kỳ vào `DATASETS` hoặc người dùng yêu cầu rõ.
- File data: dùng `var` (không `const`); chỉ số gốc, không chuỗi đã format, không chỉ số phái sinh.
- Chỉ số phái sinh chỉ gồm: TikTok Market Share (+ growth `pp`), Top 10 Contribution, Leading Brand, thị phần thương hiệu (doanh số ÷ Gross Sales của scope, top 5 + `Others`). Không thêm chỉ số mới, kể cả trong Key Insights.
- Thương hiệu: `'Thiên Long'` có dấu. Tên, biến thể, gộp và màu theo [.claude/rules/brand_colors.md](.claude/rules/brand_colors.md).
- Bar chart: năm trước bên trái (hoặc trên), năm nay bên phải (hoặc dưới).
- Đơn vị: `Tỷ`, `Tr`, `Triệu`, `Nghìn`, `K`, `%`, `pp`. Sàn: chỉ Shopee, TikTok Shop, Lazada (không Tiki).

## Quyết định đã chốt

- Không có sub-category Màu Nước (`mau_nuoc`) ở mọi kỳ (2026-11-13).
- `hoc_cu.may_tinh`: Flexio gộp vào Thiên Long (2026-11-13). Scope khác giữ Flexio riêng.
- Kỳ YTD hiển thị là "YTD 2026" / "YTD 2025", key vẫn là `ytdh1`.
- Thương hiệu có doanh số cùng kỳ `null` (Metric ghi N/A): giữ nguyên.
- Trang không có Export và không có Implication; chỉ có Key Insights tự sinh.

## Việc còn mở

- `monthly` của Q2, Q3 chưa có → tab "Theo tháng" chỉ chạy ở Q1 và YTD.
- Phân khúc giá chỉ có tổng mọi sàn, chưa tách theo sàn.

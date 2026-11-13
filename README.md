# Ecom Dashboard — Thiên Long Group

Dashboard báo cáo thương mại điện tử: hiệu suất bán hàng trên Shopee, TikTok Shop và Lazada theo quý và lũy kế YTD, so với cùng kỳ năm trước.

**Đối tượng:** Ban điều hành và đội Business Intelligence — Thiên Long Group
**Trạng thái:** Q1 2026 ✅ · Q2 2026 ✅ · YTD H1 2026 ✅ · Q3 2026 ⬜ (đang cập nhật)

## Xem dashboard

- Bản online: GitHub Pages, tự cập nhật khi push lên `master`.
- Chạy local (bắt buộc qua HTTP server, không mở file trực tiếp):

  ```bash
  python -m http.server 8000
  # http://localhost:8000/?p=q2
  ```

  `?p=q1` | `q2` | `ytdh1` chọn kỳ. `?cat=but_viet&sub=but_bi` lọc danh mục. `?slide=2` mở slide 2.

## Cập nhật dữ liệu mỗi quý

1. Trên Metric, phân tích từng danh mục / phân khúc cho đúng quý cần báo cáo.
2. Tạo folder `raw/<danh-mục>_<phân-khúc>/`, ví dụ `raw/but-viet_all/` (cả danh mục) hoặc `raw/but-viet_but-bi/` (phân khúc Bút Bi).
3. Đặt vào folder:
   - Ảnh chụp toàn trang "Báo cáo Phân tích thị trường".
   - `Phân tích sâu Mức giá *.xlsx`
   - `Phân tích sâu Thương hiệu *.xlsx`
   - `metric-vn-product-list-*.xlsx` (top 10 sản phẩm)
4. Trong Claude Code, gõ `/update-ecom-from-raw` kèm tên folder. Claude ghi data vào `data/2026/ecom_data_<kỳ>.js` và báo lại những gì còn thiếu.
5. Xem lại trên local, rồi commit và push.

Folder `raw/` không được đưa lên git (repo được public qua GitHub Pages).

## Cấu trúc

```
Ecom/
├── index.html                 # Dashboard (UI)
├── data/
│   ├── 2026/                  # 1 file số gốc / kỳ: ecom_data_q1.js, q2, q3; ytdh1 = q1 + q2
│   ├── ecom_engine.js         # Số gốc → số hiển thị; tính chỉ số, tab "Tất cả", YTD
│   ├── catalog.js             # Category, sub-category, sàn, khoảng giá
│   └── brand_colors.js        # Màu chuẩn của thương hiệu (nguồn duy nhất)
├── raw/                       # File xuất từ Metric (local, không commit)
├── .claude/
│   ├── CLAUDE.md              # Hướng dẫn kỹ thuật cho Claude Code
│   ├── rules/brand_colors.md  # Quy tắc tên + màu thương hiệu
│   └── skills/update-ecom-from-raw/   # Quy trình cập nhật data
├── KNOWLEDGE.md               # Bối cảnh và các quyết định nghiệp vụ
└── .github/workflows/static.yml       # Deploy GitHub Pages
```

---

**Thiên Long Group — Confidential | Business Intelligence 2026**

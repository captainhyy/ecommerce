# 📘 Knowledge Base — Dự án Ecom Dashboard

> Ngữ cảnh dự án cho AI và con người. Phần kỹ thuật chi tiết xem tại [CLAUDE.md](CLAUDE.md).

---

## 1. Mục tiêu dự án

Xây dựng **dashboard tương tác báo cáo thương mại điện tử** cho **Thiên Long Group** — phân tích hiệu suất bán hàng trên các sàn TMĐT (Shopee, TikTok Shop, Lazada, Tiki) theo từng quý và lũy kế Year-To-Date.

**Đối tượng sử dụng:** Ban điều hành Thiên Long Group, đội ngũ Business Intelligence.

**Yêu cầu chính:**
- Dashboard đẹp, premium, kiểu presentation (slide-based)
- Không framework (vanilla HTML/CSS/JS), file tĩnh, host trên GitHub Pages
- Dữ liệu tách riêng khỏi giao diện để dễ cập nhật
- Cập nhật mỗi quý 1 lần bằng workflow `/update_ecom_data`

---

## 2. Cấu trúc thư mục

```
Ecom/
├── .claude/
│   └── workflows/
│       └── update_ecom_data.md    # Workflow hướng dẫn AI cập nhật data
├── data/
│   └── 2026/
│       ├── ecom_data_q1.js        # Dữ liệu Q1 2026 (thực tế)
│       └── ecom_data_q2.js        # Dữ liệu Q2 2026 (hiện là mock)
├── reports/
│   └── 2026/
│       ├── index.html             # Giao diện + logic merge YTD + data loader
│       └── README.md
├── templates/
│   └── data_update_template.xlsx  # Template Excel để nhập data mới
├── CLAUDE.md                      # Hướng dẫn kỹ thuật cho Claude Code
└── KNOWLEDGE.md                   # File này
```

---

## 3. Thiết kế & Công nghệ

- **Thuần HTML/CSS/JS** — không framework, không build tool
- **Hosting:** GitHub Pages (static files)
- **Font:** Plus Jakarta Sans + JetBrains Mono (Google Fonts)
- **Thiết kế:** Dark glassmorphism, animated transitions, responsive
- **Layout:** 2 slide — Slide 1 Executive Overview, Slide 2 Segment Deep-Dive

---

## 4. Danh mục sản phẩm

| Key | Tên | Icon | Sub-categories |
|-----|-----|------|----------------|
| `but_viet` | Bút Viết | 🖊️ | but_bi, but_gel |
| `hoc_cu` | Học Cụ | 📐 | may_tinh, tap_vo, balo, but_chi, gom |
| `my_thuat` | Mỹ Thuật | 🎨 | sap_mau, acrylic, long_mt, chi_mau |
| `van_phong_pham` | Văn Phòng Phẩm | 💼 | bang_keo, keo_dan, ghim_kep |
| `all` | Tất cả | 📊 | *(tự động tổng hợp bởi YTD merger)* |

---

## 5. Trạng thái hiện tại (cập nhật: 2026-06-22)

### Đã hoàn thành
- ✅ Dashboard Q1 2026 với data thực tế
- ✅ Kiến trúc đa kỳ (Q1, Q2)
- ✅ Brand Landscape giới hạn Top 5 + Others
- ✅ Monthly Performance Trend chart (toggle Gross Sales / TikTok Share)
- ✅ Chuẩn hóa tên thương hiệu (`'Thiên Long'` có dấu)
- ✅ Open Graph meta tags
- ✅ Sub-category đúng cho Mỹ Thuật
- ✅ Workflow `/update_ecom_data` (tiếng Việt)
- ✅ Đổi thư mục `.agents/` → `.claude/`

### Chưa hoàn thành
- ⬜ Data Q2 2026 thực tế (hiện là mock/copy từ Q1)
- ⬜ Data MONTHLY thực tế (hiện là giả lập)
- ⬜ Data phân khúc giá theo nền tảng (Lazada, TikTok — `price[].l` và `price[].t` đang là `0`)
- ⬜ Cập nhật README.md cho phù hợp kiến trúc hiện tại

# Ecom Dashboard — Thiên Long Group

Dashboard tương tác báo cáo thương mại điện tử, phân tích hiệu suất bán hàng trên Shopee, TikTok Shop, Lazada, Tiki theo từng quý và lũy kế YTD.

**Đối tượng:** Ban điều hành & đội Business Intelligence — Thiên Long Group  
**Trạng thái:** Q1 2026 ✅ | Q2 2026 ⬜ (chờ data thực tế)

---

## Cấu trúc thư mục

```
Ecom/
├── .claude/
│   └── workflows/
│       └── update_ecom_data.md     # Workflow hướng dẫn AI cập nhật data
├── data/
│   ├── q1_2026/                    # Raw input Q1: CSV, ảnh, text nguồn
│   └── q2_2026/                    # Raw input Q2: CSV, ảnh, text nguồn
├── reports/
│   └── 2026/
│       ├── index.html              # Dashboard chính (UI + YTD merger)
│       ├── ecom_data_q1.js         # Data Q1 2026 (thực tế)
│       ├── ecom_data_q2.js         # Data Q2 2026 (mock, chờ cập nhật)
│       └── README.md               # Hướng dẫn kỹ thuật dashboard
├── templates/
│   └── data_update_template.xlsx   # Template Excel nhập liệu
├── CLAUDE.md                       # Hướng dẫn cho Claude AI
└── KNOWLEDGE.md                    # Knowledge base kiến trúc dự án
```

---

## Chạy dashboard

Bắt buộc dùng Live Server (không mở `file:///` do CORS):

```bash
# Python
python -m http.server 8000
# Truy cập: http://localhost:8000/reports/2026/
```

URL params: `?p=q1` | `?p=q2` | `?p=ytd` | `?cat=but_viet&sub=but_bi`

---

## Cập nhật data

1. Để raw data (CSV, ảnh, text) vào `data/q2_2026/`
2. Gọi workflow `/update_ecom_data` — AI tự map vào `ecom_data_q2.js`
3. YTD tự tính lại runtime, không cần chỉnh thêm

---

**Thiên Long Group — Confidential | Business Intelligence 2026**

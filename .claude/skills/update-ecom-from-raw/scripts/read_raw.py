"""Đọc toàn bộ file trong 1 folder raw/<cate>_<sub>/ để cập nhật data Ecom.

Cách chạy (bắt buộc -I -X utf8 vì tên file/nội dung có tiếng Việt):
    python -I -X utf8 read_raw.py "<đường dẫn folder raw/...>" "<thư mục tạm>"

Script làm 4 việc:
1. Copy mọi file .xlsx sang thư mục tạm rồi mới mở. Lý do: file trong OneDrive
   hay bị khoá (PermissionError) khi mở trực tiếp.
2. In toàn bộ nội dung mọi sheet của mọi file .xlsx.
3. Cắt mọi file .png/.jpg cao hơn 1400px thành nhiều lát 1920x1300 ở full
   resolution (ảnh chụp toàn trang Metric bị thu nhỏ khi đọc trực tiếp nên
   không đọc được số). In đường dẫn các lát để đọc bằng Read tool.
4. Nếu có file "Phân tích sâu Mức giá": in tổng doanh số dòng "Tất cả các sàn"
   theo từng khoảng giá (tỷ VND) + tổng cộng, để đối chiếu với Gross Sales.
"""
import os
import shutil
import subprocess
import sys

import openpyxl

try:
    from PIL import Image
except ImportError:  # ảnh vẫn đọc được bằng Read tool, chỉ không cắt được
    Image = None


def main(src, tmp):
    os.makedirs(tmp, exist_ok=True)
    files = sorted(os.listdir(src))
    print("FILES:", files)
    for i, name in enumerate(files):
        path = os.path.join(src, name)
        low = name.lower()
        if low.endswith(".xlsx"):
            dst = os.path.join(tmp, f"x{i}.xlsx")
            try:
                shutil.copyfile(path, dst)
            except PermissionError:
                # File đang mở trong Excel/OneDrive: Python không mở được,
                # nhưng `cp` của Git Bash vẫn copy được.
                if not shutil.which("cp") or subprocess.run(["cp", path, dst]).returncode:
                    print(f"\nERR: không copy được '{name}'. Đóng file trong Excel rồi chạy lại.")
                    continue
            wb = openpyxl.load_workbook(dst, data_only=True)
            for ws in wb.worksheets:
                rows = list(ws.iter_rows(values_only=True))
                print(f"\n===== {name} | sheet '{ws.title}' | {len(rows)} rows")
                for r in rows:
                    print(r)
                if "mức giá" in name.lower():
                    total = 0
                    print("\n--- Mức giá, dòng 'Tất cả các sàn' (tỷ VND):")
                    for r in rows[1:]:
                        if len(r) > 3 and r[2] == "Tất cả các sàn" and r[3]:
                            total += r[3]
                            print(f"  {r[1]}: {r[3] / 1e9:.2f}")
                    print(f"  TỔNG: {total / 1e9:.2f}")
        elif low.endswith((".png", ".jpg", ".jpeg")) and Image:
            im = Image.open(path)
            w, h = im.size
            print(f"\n===== IMAGE {name} {w}x{h}")
            if h <= 1400:
                print("  (đủ nhỏ, đọc trực tiếp)")
                continue
            for j, y in enumerate(range(0, h, 1300)):
                out = os.path.join(tmp, f"img{i}_{j:02d}.png")
                im.crop((0, y, w, min(h, y + 1300))).save(out)
                print("  slice:", os.path.abspath(out))


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])

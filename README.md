# Web kế hoạch đi chơi Ba Vì – Suối Mơ

## Các file
| File | Tác dụng |
|---|---|
| `index.html` | Trang chính |
| `config.js` | Giờ xuất phát (đồng hồ đếm ngược) |
| `sw.js` | Lưu sẵn trang trên điện thoại để xem được khi mất sóng |
| `images/` | Ảnh thực đơn và bảng giá Suối Mơ (ảnh gốc, mở khi phóng to) |
| `images/thumb/` | Ảnh thu nhỏ cho thư viện thực đơn, tải nhanh hơn |

## Đưa lên GitHub Pages
1. Vào github.com → **New repository** → đặt tên, ví dụ `bavi2026`. Chọn **Public** (tài khoản miễn phí chỉ bật được Pages cho repo public).
2. Bấm **uploading an existing file**, kéo **toàn bộ nội dung thư mục `web`** vào (gồm cả thư mục `images`) → **Commit changes**.
3. Vào **Settings → Pages**. Ở mục *Source* chọn **Deploy from a branch**, *Branch* chọn **main**, thư mục **/(root)** → **Save**.
4. Đợi 1–2 phút. Link sẽ có dạng `https://<tên-tài-khoản>.github.io/bavi2026/`.

## Lưu ý về bảo mật
Trang **không có mật khẩu**, ai có link đều xem được, và repo public nên mã nguồn cũng công khai. Vì vậy **không đưa lên số tài khoản, số CCCD, số điện thoại cá nhân** của thành viên.

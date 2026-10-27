# Web kế hoạch đi chơi Ba Vì – Suối Mơ

## Các file
| File | Tác dụng |
|---|---|
| `index.html` | Trang chính |
| `config.js` | **Mật khẩu** (dạng mã SHA-256) và giờ xuất phát |
| `sha256.js` | Hàm tính mã mật khẩu |
| `tao-mat-khau.html` | Công cụ tạo mã khi muốn đổi mật khẩu |
| `sw.js` | Lưu sẵn trang trên điện thoại để xem được khi mất sóng |
| `images/` | Ảnh thực đơn và bảng giá Suối Mơ (ảnh gốc, mở khi phóng to) |
| `images/thumb/` | Ảnh thu nhỏ cho thư viện thực đơn, tải nhanh hơn |

Mật khẩu chỉ gửi trong nhóm Zalo, không ghi vào file nào trong thư mục này.

## Đưa lên GitHub Pages
1. Vào github.com → **New repository** → đặt tên, ví dụ `bavi2026`. Chọn **Public** (tài khoản miễn phí chỉ bật được Pages cho repo public).
2. Bấm **uploading an existing file**, kéo **toàn bộ nội dung thư mục `web`** vào (gồm cả thư mục `images`) → **Commit changes**.
3. Vào **Settings → Pages**. Ở mục *Source* chọn **Deploy from a branch**, *Branch* chọn **main**, thư mục **/(root)** → **Save**.
4. Đợi 1–2 phút. Link sẽ có dạng `https://<tên-tài-khoản>.github.io/bavi2026/`.

## Đổi mật khẩu
1. Mở `tao-mat-khau.html`, có thể mở trên máy hoặc theo link `.../bavi2026/tao-mat-khau.html`.
2. Gõ mật khẩu mới → **Tạo mã** → **Copy mã**.
3. Trên GitHub mở `config.js` → bấm biểu tượng ✏️ → dán mã vào `PASSWORD_SHA256: "…"` → **Commit**.
4. Mọi người sẽ phải nhập mật khẩu mới. Ai đã đăng nhập trước đó cũng bị khóa lại, vì máy họ còn nhớ mã cũ.

## Lưu ý về bảo mật
Mật khẩu chỉ là lớp khóa ngoài để người lạ không đọc lướt được. Mã SHA-256 nằm công khai trong `config.js`, nên mật khẩu chỉ gồm số (như 7 chữ số) có thể bị dò ra trong vài giây; nên dùng mật khẩu dài, có cả chữ và số, ví dụ `suoimo-bavi-2026`. Repo public thì ai biết cách vẫn xem được mã nguồn và nội dung trang. Vì vậy **không đưa lên số tài khoản, số CCCD, số điện thoại cá nhân** của thành viên.

## Sửa nội dung
Toàn bộ dữ liệu (thành viên, phân công, xe, lịch trình, danh sách đi chợ, ngân sách, checklist) nằm trong khối `/* DỮ LIỆU */` ở cuối `index.html`. Sửa chữ trong đó rồi commit lại là trang tự cập nhật.

Thêm ảnh thực đơn mới: bỏ ảnh gốc vào `images/`, ảnh thu nhỏ (rộng khoảng 400px) cùng tên vào `images/thumb/`, thêm tên vào mảng `MENUS` trong `index.html` và trong `sw.js`, rồi tăng `CACHE` trong `sw.js` (ví dụ `bavi-v2`).

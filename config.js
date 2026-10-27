/* =========================================================
   CẤU HÌNH WEB – KẾ HOẠCH ĐI CHƠI BA VÌ
   ---------------------------------------------------------
   ĐỔI MẬT KHẨU:
   1. Mở file "tao-mat-khau.html" bằng trình duyệt
   2. Gõ mật khẩu mới -> bấm "Tạo mã"
   3. Copy chuỗi mã, dán thay vào PASSWORD_SHA256 bên dưới
   4. Lưu file, đẩy (commit) lại lên GitHub
   KHÔNG ghi mật khẩu dạng chữ vào file này: repo public, ai cũng đọc được.
   ========================================================= */
window.SITE_CONFIG = {
  PASSWORD_SHA256: "158a323a7ba44870f23d96f1516dd70aa48e9a72db4ebb026b0a89e212a208ab",

  // Nhớ đăng nhập trên máy này (true = không phải nhập lại lần sau)
  REMEMBER_LOGIN: true,

  // Giờ xuất phát (dùng cho đồng hồ đếm ngược)
  DEPARTURE: "2026-11-06T13:00:00+07:00"
};

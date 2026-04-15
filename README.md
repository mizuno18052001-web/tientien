# Digital Profile with Telegram Integration

Trang profile cá nhân với tính năng gửi tin nhắn tới Telegram.

## 🚀 Cách sử dụng

### 1. Cài đặt Dependencies
```bash
npm install
```

### 2. Chạy Server
```bash
npm start
```

Server sẽ chạy trên `http://localhost:3000`

### 3. Mở Trang Web
- Mở file `BAITAPDAUTIEN.html` trong browser
- Hoặc truy cập `http://localhost:3000/BAITAPDAUTIEN.html`

## 📋 Cấu hình

Thông tin Telegram đã được cấu hình sẵn trong `server.js`:
- **Bot Token**: `8303180543:AAE3dPXBZLq61wAoeENMRIiHMJiOdoiqSxc`
- **Chat ID**: `8466554460`

Nếu muốn thay đổi, sửa lại trong file `server.js`

## ✨ Tính năng

- ✅ Giao diện đẹp với gradient và animations
- ✅ Form gửi tin nhắn
- ✅ Tự động gửi tới Telegram
- ✅ Hiển thị thông báo thành công/lỗi
- ✅ Hiệu ứng pháo hoa khi bấm "Tặng quà"
- ✅ Responsive trên mobile

## 📱 API Endpoints

### POST /api/send-message
Gửi tin nhắn tới Telegram

**Request:**
```json
{
  "name": "Tên người gửi",
  "message": "Nội dung lời nhắn"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Lời nhắn đã gửi thành công! 🎉"
}
```

## 🔧 Requirement

- Node.js v14 hoặc cao hơn
- npm hoặc yarn

## 📝 Lưu ý

- Đảm bảo bot Telegram của bạn đã được thêm vào cuộc trò chuyện
- Kiểm tra Token và Chat ID có chính xác không
- Server phải chạy để tính năng gửi Telegram hoạt động

---

**Tác giả**: Phạm Văn Tiến

# 🚀 Hướng dẫn Deploy lên Vercel

Đây là giải pháp hoàn toàn **FREE** - không cần chạy server trên máy!

## 📋 Các bước deploy (Rất đơn giản!)

### Bước 1: Tạo tài khoản Vercel
1. Truy cập https://vercel.com
2. Bấm **"Sign up"**
3. Đăng nhập với **GitHub** (hoặc Google/email)

### Bước 2: Upload project lên GitHub
1. Truy cập https://github.com
2. Tạo tài khoản nếu chưa có
3. Tạo repo mới tên **`telegram-profile`**
4. Upload tất cả files từ folder `c:\Users\admin\New folder (2)\` lên repo

**Hoặc dùng git command:**
```bash
cd "c:\Users\admin\New folder (2)"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/telegram-profile.git
git push -u origin main
```

### Bước 3: Deploy lên Vercel
1. Đăng nhập vào https://vercel.com
2. Bấm **"New Project"**
3. Chọn repo **telegram-profile**
4. Bấm **"Deploy"** (không cần config gì)

Vercel sẽ tự động deploy sau vài giây! 🎉

### Bước 4: Sử dụng
Khi deploy xong, Vercel sẽ cho bạn một URL:
```
https://telegram-profile-xxxxx.vercel.app
```

Chỉ cần truy cập URL này và trang web sẽ hoạt động **hoàn toàn**!

---

## ✅ Chức năng

- ✨ Giao diện đẹp
- 📝 Form gửi lời nhắn
- 🎉 Hiệu ứng pháo hoa
- 📱 Gửi tự động tới Telegram
- ✅ Hoạt động 24/7 (không cần chạy server)

---

## 🔧 Testing Local trước khi deploy

Nếu muốn test trên máy trước:

```bash
cd "c:\Users\admin\New folder (2)"
npm install
npm start
```

Rồi mở http://localhost:3000/BAITAPDAUTIEN.html

---

## 🆘 Nếu gặp lỗi

1. **CORS error**: Kiểm tra API key Telegram có đúng không
2. **Message không gửi**: Chắc chắn bot Telegram đã được thêm vào
3. **Deploy thất bại**: Xem logs trong Vercel dashboard

---

**Bây giờ bạn có trang profile hoàn toàn hoạt động, gửi Telegram tự động, không cần chạy server! 🚀**

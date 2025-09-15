# Portfolio Website - Sinh viên Công nghệ Phần mềm

Một website portfolio cá nhân được xây dựng bằng Next.js 13+ với App Router, TailwindCSS và shadcn/ui. 
Dành cho sinh viên chuyên ngành Công nghệ Phần mềm tại Đại học Ngoại Ngữ - Tin học TP.HCM.

## 🚀 Tính năng

- **Trang chủ**: Giới thiệu ngắn gọn với tech stack và thống kê
- **Giới thiệu**: Thông tin chi tiết về kỹ năng, mục tiêu và sở thích
- **Dự án**: Danh sách các dự án đã thực hiện với demo và source code
- **Kinh nghiệm**: Timeline học vấn, chứng chỉ và kinh nghiệm làm việc
- **Liên hệ**: Form liên hệ và thông tin cá nhân
- **🌙 Dark Mode**: Toggle dark/light mode với theme switcher
- **🎬 Animations**: Smooth animations với Framer Motion
- **📱 Mobile-First**: Responsive design tối ưu cho mọi thiết bị
- **🔍 SEO Optimized**: Meta tags, Open Graph, sitemap, robots.txt
- **Modern UI**: Sử dụng shadcn/ui components với TailwindCSS

## 🛠️ Công nghệ sử dụng

- **Next.js 13+** - React framework với App Router
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **Framer Motion** - Animation library
- **next-themes** - Dark mode support
- **JavaScript** - Ngôn ngữ lập trình chính
- **Vercel** - Platform để deploy

## 📦 Cài đặt

1. Clone repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

4. Mở [http://localhost:3000](http://localhost:3000) để xem website

## 🎨 Tùy chỉnh

### Thay đổi thông tin cá nhân

1. **Trang chủ** (`src/app/page.js`):
   - Thay đổi tên, tagline và thông tin giới thiệu
   - Cập nhật tech stack và skill levels

2. **Giới thiệu** (`src/app/about/page.js`):
   - Cập nhật câu chuyện cá nhân
   - Thay đổi danh sách kỹ năng
   - Sửa thông tin học vấn

3. **Dự án** (`src/app/projects/page.js`):
   - Thêm/sửa các dự án của bạn
   - Cập nhật links GitHub và demo
   - Thay đổi technologies sử dụng

4. **Kinh nghiệm** (`src/app/experience/page.js`):
   - Cập nhật timeline học vấn
   - Thêm kinh nghiệm làm việc
   - Sửa thông tin chứng chỉ

5. **Liên hệ** (`src/app/contact/page.js`):
   - Thay đổi thông tin liên hệ
   - Cập nhật social media links
   - Tùy chỉnh form fields

### Thay đổi màu sắc

Chỉnh sửa file `src/app/globals.css` để thay đổi color scheme:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* Thêm các màu khác... */
}
```

## 🚀 Deploy

### Deploy lên Vercel (Khuyến nghị)

1. Push code lên GitHub
2. Kết nối repository với Vercel
3. Deploy tự động

### Deploy lên các platform khác

```bash
# Build production
npm run build

# Start production server
npm start
```

## 📱 Responsive Design

Website được tối ưu cho:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🎯 Cấu trúc dự án

```
src/
├── app/                    # App Router pages
│   ├── about/             # Trang giới thiệu
│   ├── contact/           # Trang liên hệ
│   ├── experience/        # Trang kinh nghiệm
│   ├── projects/          # Trang dự án
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Trang chủ
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── Navigation.jsx    # Navigation component
└── lib/                  # Utility functions
    └── utils.js          # Helper functions
```

## 🔧 Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run start` - Chạy production server
- `npm run lint` - Kiểm tra linting

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request.

## 📞 Liên hệ

- Email: your.email@example.com
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- GitHub: [github.com/yourusername](https://github.com/yourusername)

---

⭐ Nếu bạn thấy dự án này hữu ích, hãy cho một star nhé!
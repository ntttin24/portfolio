# Portfolio Website - Sinh viên Công nghệ Phần mềm

Một website portfolio cá nhân được xây dựng bằng Next.js 13+ với App Router, TailwindCSS và shadcn/ui. 
Link demo: https://portfolio-ntttin24.vercel.app/
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
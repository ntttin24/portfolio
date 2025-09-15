import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig, generateMetadata as generateSiteMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = generateSiteMetadata({
  title: "Trang chủ",
  description: "Portfolio cá nhân của sinh viên chuyên ngành Công nghệ Phần mềm tại Đại học Ngoại Ngữ - Tin học TP.HCM. Đam mê phát triển web với React & Next.js và đang tìm kiếm cơ hội thực tập.",
});

export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd />
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

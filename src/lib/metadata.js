export const siteConfig = {
  name: "Portfolio - Nguyễn Thiện Trung Tín",
  description: "Portfolio cá nhân của Nguyễn Thiện Trung Tín - Sinh viên năm 4 chuyên ngành Công nghệ Phần mềm tại Đại học Ngoại Ngữ - Tin học TP.HCM. Đam mê phát triển web với React & Next.js",
  url: "https://your-portfolio.vercel.app", // Thay đổi URL thực tế của bạn
  ogImage: "/avatar.jpg", // Avatar của bạn
  links: {
    twitter: "https://twitter.com/ntttin24",
    github: "https://github.com/ntttin24",
    linkedin: "https://linkedin.com/in/ntttin24",
  },
  keywords: [
    "portfolio",
    "frontend developer",
    "react",
    "nextjs",
    "javascript",
    "sinh viên",
    "công nghệ phần mềm",
    "thực tập",
    "web development",
    "tailwindcss",
    "typescript"
  ]
};

export function generateMetadata({ title, description, image, url }) {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description: description || siteConfig.description,
    keywords: siteConfig.keywords.join(", "),
  authors: [{ name: "Nguyễn Thiện Trung Tín" }],
  creator: "Nguyễn Thiện Trung Tín",
  publisher: "Nguyễn Thiện Trung Tín",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url || "/",
    },
    openGraph: {
      type: "website",
      locale: "vi_VN",
      url: url || siteConfig.url,
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: description || siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: description || siteConfig.description,
      images: [image || siteConfig.ogImage],
      creator: "@yourusername",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code", // Thay đổi code thực tế
      yandex: "your-yandex-verification-code", // Thay đổi code thực tế
    },
  };
}

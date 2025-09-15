import { siteConfig } from '@/lib/metadata';

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nguyễn Thiện Trung Tín",
    "jobTitle": "Sinh viên năm 4 Công nghệ Phần mềm",
    "description": siteConfig.description,
    "url": siteConfig.url,
    "image": siteConfig.ogImage,
    "email": "tin3519237@gmail.com",
    "telephone": "0784723481",
    "sameAs": [
      siteConfig.links.linkedin,
      siteConfig.links.github,
      siteConfig.links.twitter,
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Đại học Ngoại Ngữ - Tin học TP.HCM",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "TP. Hồ Chí Minh",
        "addressCountry": "VN"
      }
    },
    "knowsAbout": [
      "React",
      "Next.js", 
      "JavaScript",
      "HTML",
      "CSS",
      "TailwindCSS",
      "Web Development",
      "Frontend Development"
    ],
    "seeks": "Cơ hội thực tập Frontend Developer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "TP. Hồ Chí Minh",
      "addressCountry": "VN"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

import { generateMetadata } from "@/lib/metadata";
import AnimatedAbout from "@/components/AnimatedAbout";

export const metadata = generateMetadata({
  title: "Giới thiệu",
  description: "Tìm hiểu về câu chuyện, kỹ năng và mục tiêu nghề nghiệp của tôi. Sinh viên chuyên ngành Công nghệ Phần mềm với đam mê phát triển web hiện đại.",
});

export default function About() {
  return <AnimatedAbout />;
}
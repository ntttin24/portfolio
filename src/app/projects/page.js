import { generateMetadata } from "@/lib/metadata";
import AnimatedProjects from "@/components/AnimatedProjects";

export const metadata = generateMetadata({
  title: "Dự án",
  description: "Khám phá các dự án web tôi đã thực hiện với React, Next.js và các công nghệ hiện đại. Từ e-commerce đến task management app.",
});

export default function Projects() {
  return <AnimatedProjects />;
}
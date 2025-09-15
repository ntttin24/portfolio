import { generateMetadata } from "@/lib/metadata";
import AnimatedExperience from "@/components/AnimatedExperience";

export const metadata = generateMetadata({
  title: "Kinh nghiệm",
  description: "Timeline học vấn, chứng chỉ và kinh nghiệm làm việc của tôi. Sinh viên Đại học Ngoại Ngữ - Tin học TP.HCM với GPA 3.1/4.0.",
});

export default function Experience() {
  return <AnimatedExperience />;
}
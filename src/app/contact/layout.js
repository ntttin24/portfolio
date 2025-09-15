import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Liên hệ",
  description: "Liên hệ với tôi để thảo luận về cơ hội thực tập hoặc hợp tác. Sinh viên Công nghệ Phần mềm sẵn sàng học hỏi và đóng góp.",
});

export default function ContactLayout({ children }) {
  return children;
}

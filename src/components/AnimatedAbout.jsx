'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AnimatedAbout() {
  const skills = [
    { name: "HTML5", level: 95, color: "from-orange-500 to-red-500" },
    { name: "CSS3", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
    { name: "React", level: 80, color: "from-cyan-500 to-blue-500" },
    { name: "Next.js", level: 75, color: "from-gray-700 to-gray-900" },
    { name: "TailwindCSS", level: 85, color: "from-teal-500 to-cyan-500" },
    { name: "Git", level: 70, color: "from-orange-600 to-red-600" },
    { name: "Node.js", level: 65, color: "from-green-500 to-emerald-500" },
  ];

  const softSkills = [
    "Tự học và nghiên cứu",
    "Làm việc nhóm",
    "Giải quyết vấn đề",
    "Quản lý thời gian",
    "Giao tiếp hiệu quả",
    "Sáng tạo trong thiết kế"
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Về tôi
          </motion.h1>
          <motion.p 
            className="text-xl lg:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Một Frontend Developer đầy đam mê với việc tạo ra những trải nghiệm web tuyệt vời
          </motion.p>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Story */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Câu chuyện của tôi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    Tôi là Nguyễn Thiện Trung Tín, sinh viên năm 4 chuyên ngành Công nghệ Phần mềm tại Đại học Ngoại Ngữ - Tin học TP.HCM, 
                    với GPA 3.1/4.0. Hành trình học tập của tôi tập trung vào việc phát triển 
                    các ứng dụng web hiện đại và trải nghiệm người dùng tuyệt vời.
                  </p>
                  <p>
                    Với nền tảng vững chắc về lập trình và cơ sở dữ liệu từ chương trình đại học, 
                    tôi đã tự học và thực hành với React, Next.js để có thể xây dựng những 
                    ứng dụng web hiệu suất cao và responsive.
                  </p>
                  <p>
                    Hiện tại, tôi đang tìm kiếm cơ hội thực tập để có thể áp dụng 
                    kiến thức lý thuyết vào thực tế và học hỏi thêm từ các chuyên gia 
                    trong ngành phát triển phần mềm.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Mục tiêu nghề nghiệp</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700 dark:text-gray-300">
                  {[
                    "Trở thành một Frontend Developer chuyên nghiệp",
                    "Học hỏi và làm chủ các công nghệ mới nhất",
                    "Đóng góp vào các dự án có tác động tích cực",
                    "Phát triển kỹ năng lãnh đạo và mentoring"
                  ].map((goal, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p>{goal}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Kỹ năng kỹ thuật</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={skill.name} 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <motion.div 
                          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 0.8 + index * 0.1 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Kỹ năng mềm</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {softSkills.map((skill, index) => (
                      <motion.div 
                        key={skill} 
                        className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Sở thích</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {["🎨 Thiết kế UI/UX", "📚 Đọc sách công nghệ", "🏃‍♂️ Chạy bộ", "☕ Cà phê", "🎵 Nghe nhạc", "✈️ Du lịch"].map((hobby, index) => (
                      <motion.span 
                        key={hobby} 
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {hobby}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center text-gray-900 dark:text-white mb-8">Học vấn & Chứng chỉ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <motion.div 
                    className="border-l-4 border-blue-500 pl-6"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Cử nhân Công nghệ Phần mềm</h3>
                    <p className="text-gray-600 dark:text-gray-400">Đại học Ngoại Ngữ - Tin học TP.HCM (2020 - 2024)</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">GPA: 3.1/4.0 - Chuyên ngành: Công nghệ Phần mềm</p>
                  </motion.div>
                </div>
                
                <div className="space-y-4">
                  <motion.div 
                    className="border-l-4 border-green-500 pl-6"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tự học và Phát triển</h3>
                    <p className="text-gray-600 dark:text-gray-400">Tự học các công nghệ web hiện đại</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">React, Next.js, JavaScript, HTML/CSS, TailwindCSS</p>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

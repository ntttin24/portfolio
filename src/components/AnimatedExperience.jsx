'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AnimatedExperience() {
  const experiences = [
    {
      type: "education",
      title: "Sinh viên năm 4 Công nghệ Phần mềm",
      organization: "Đại học Ngoại Ngữ - Tin học TP.HCM",
      period: "2022 - 2026",
      description: "Chuyên ngành Công nghệ Phần mềm, GPA: 3.1/4.0",
      achievements: [
        "Học tập chuyên ngành Công nghệ Phần mềm",
        "Tham gia các dự án thực hành trong chương trình học",
        "Làm việc nhóm trong các bài tập lớn",
        "Tích cực tham gia các hoạt động ngoại khóa"
      ],
      skills: ["Java", "C#", "C++", "Database Design", "Software Engineering", "OOP"]
    },
    {
      type: "project",
      title: "Open Source Contributor",
      organization: "GitHub",
      period: "2024 - Hiện tại",
      description: "Đóng góp vào các dự án mã nguồn mở",
      achievements: [
        "Đóng góp cho 5+ dự án open source",
        "Fix 20+ bugs và cải thiện performance",
        "Viết documentation cho 3 dự án"
      ],
      skills: ["Git", "GitHub", "Code Review", "Documentation"]
    }
  ];

  const timeline = experiences.map((exp, index) => ({
    ...exp,
    id: index + 1
  }));

  const getTypeColor = (type) => {
    switch (type) {
      case 'education': return 'from-blue-500 to-blue-600';
      case 'certification': return 'from-green-500 to-green-600';
      case 'project': return 'from-purple-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'education': return '🎓';
      case 'certification': return '🏆';
      case 'project': return '💼';
      default: return '📋';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'education': return 'Học vấn';
      case 'certification': return 'Chứng chỉ';
      case 'project': return 'Dự án';
      default: return 'Khác';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20"
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
            Kinh nghiệm & Học vấn
          </motion.h1>
          <motion.p 
            className="text-xl lg:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hành trình học tập và phát triển kỹ năng của tôi
          </motion.p>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-16">
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Timeline Line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <motion.div 
                    className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${getTypeColor(item.type)} flex items-center justify-center text-white text-2xl shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {getTypeIcon(item.type)}
                  </motion.div>
                  
                  {/* Content */}
                  <motion.div 
                    className="flex-1"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div>
                            <CardTitle className="text-xl text-gray-900 dark:text-white">{item.title}</CardTitle>
                            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{item.organization}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <motion.span 
                              className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getTypeColor(item.type)} text-white`}
                              whileHover={{ scale: 1.1 }}
                            >
                              {getTypeLabel(item.type)}
                            </motion.span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                              {item.period}
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                        
                        {/* Achievements */}
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Thành tích nổi bật:</h4>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, idx) => (
                              <motion.li 
                                key={idx} 
                                className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                              >
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Skills */}
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Kỹ năng áp dụng:</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, skillIndex) => (
                              <motion.span 
                                key={skill} 
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + skillIndex * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <motion.section 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center text-gray-900 dark:text-white mb-8">Tổng kết kỹ năng</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: "💻", title: "Frontend Development", description: "Thành thạo React, Next.js, HTML/CSS và các công cụ hiện đại" },
                  { icon: "🎨", title: "UI/UX Design", description: "Có kinh nghiệm thiết kế giao diện và trải nghiệm người dùng" },
                  { icon: "🚀", title: "Project Management", description: "Kinh nghiệm quản lý dự án và làm việc nhóm hiệu quả" }
                ].map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div 
                      className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-3xl">{skill.icon}</span>
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{skill.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 border-0">
            <CardContent className="py-12">
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Bạn muốn tìm hiểu thêm về tôi?
              </motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Tôi luôn sẵn sàng chia sẻ thêm về kinh nghiệm và kỹ năng của mình. 
                Hãy xem các dự án tôi đã làm hoặc liên hệ trực tiếp!
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <motion.a 
                  href="/projects" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Xem dự án
                </motion.a>
                <motion.a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Liên hệ
                </motion.a>
              </motion.div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}

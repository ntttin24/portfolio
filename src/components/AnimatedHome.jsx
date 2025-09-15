'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AnimatedHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div className="mb-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto lg:mx-0 mb-4 sm:mb-6 relative">
                <motion.div 
                  className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src="/avatar.jpg" 
                    alt="Nguyễn Thiện Trung Tín" 
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                    <span className="text-white text-2xl sm:text-4xl font-bold">NT</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 sm:border-4 border-white shadow-lg"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.div>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Xin chào! Tôi là
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block sm:inline"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                {" "}Nguyễn Thiện Trung Tín
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Sinh viên năm 4 chuyên ngành Công nghệ Phần mềm tại Đại học Ngoại Ngữ - Tin học TP.HCM. 
              Đam mê phát triển web với React & Next.js và đang tìm kiếm cơ hội thực tập để áp dụng kiến thức vào thực tế.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto shadow-lg">
                  <Link href="/projects">Xem dự án của tôi</Link>
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button asChild variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto shadow-lg">
                  <Link href="/contact">Liên hệ với tôi</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Tech Stack */}
          <motion.div 
            className="flex-1 max-w-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center">
                Công nghệ tôi sử dụng
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { name: "React", icon: "⚛️", level: 85 },
                  { name: "Next.js", icon: "▲", level: 80 },
                  { name: "JavaScript", icon: "🟨", level: 90 },
                  { name: "TailwindCSS", icon: "🎨", level: 85 },
                  { name: "HTML/CSS", icon: "🌐", level: 95 },
                  { name: "Git", icon: "📦", level: 75 },
                ].map((tech, index) => (
                  <motion.div 
                    key={tech.name} 
                    className="text-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <motion.div 
                      className="text-2xl sm:text-3xl mb-2"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.2
                      }}
                    >
                      {tech.icon}
                    </motion.div>
                    <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">{tech.name}</div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 sm:h-2 mt-2">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 sm:h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.level}%` }}
                        transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                      ></motion.div>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">{tech.level}%</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <motion.section 
        className="bg-white dark:bg-gray-800 py-12 sm:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              { number: "3+", label: "Dự án đã hoàn thành", color: "text-blue-600" },
              { number: "6+", label: "Công nghệ thành thạo", color: "text-purple-600" },
              { number: "100%", label: "Sẵn sàng học hỏi", color: "text-green-600" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="p-4 sm:p-6"
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    delay: index * 0.2 
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
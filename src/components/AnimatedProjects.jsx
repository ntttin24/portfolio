'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AnimatedProjects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Website portfolio cá nhân với thiết kế responsive và hiệu ứng animation mượt mà.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Framer Motion", "TailwindCSS", "Vercel"],
      github: "https://github.com/ntttin24/portfolio",
      demo: "https://portfolio-ntttin24.vercel.app/",
      status: "Hiện tại",
      featured: true,
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "E-commerce Fashion Store Website",
      description: "Website thương mại điện tử demo với giỏ hàng, và quản lý sản phẩm. Sử dụng Next.js 15, React 18, TypeScript",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Next.js", "TypeScript", ],
      github: "https://github.com/ntttin24/fashion-store",
      demo: "https://fashion-store-fay9.vercel.app/",
      status: "Hoàn thành",
      featured: true,
      icon: "👗",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      id: 3,
      title: "E-commerce Phone Store Website",
      description: "Website thương mại điện tử hoàn chỉnh với giỏ hàng, thanh toán và quản lý sản phẩm. Sử dụng React, Node.js và MongoDB.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Paypal", ],
      github: "https://github.com/ntttin24/phones-store",
      demo: "https://ecommerce-demo.vercel.app",
      status: "Hoàn thành",
      featured: true,
      icon: "📱",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: "Task Management App",
      description: "Ứng dụng quản lý công việc với drag & drop, thời gian thực và phân quyền người dùng.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      github: "https://github.com/username/taskmanager",
      demo: "https://taskmanager-demo.vercel.app",
      status: "Demo",
      featured: true,
      icon: "📋",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Dashboard hiển thị thông tin thời tiết với biểu đồ tương tác và dự báo 7 ngày.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS Modules"],
      github: "https://github.com/username/weather-dashboard",
      demo: "https://weather-demo.vercel.app",
      status: "Demo",
      featured: false,
      icon: "🌤️",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      title: "Social Media Clone",
      description: "Ứng dụng mạng xã hội với đăng bài, like, comment và follow. Đang trong quá trình phát triển.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Firebase", "TailwindCSS", "NextAuth"],
      github: "https://github.com/username/social-clone",
      demo: null,
      status: "Demo",
      featured: false,
      icon: "💬",
      gradient: "from-indigo-500 to-purple-500"
    },
    
    {
      id: 7,
      title: "AI Chat Application",
      description: "Ứng dụng chat với AI sử dụng OpenAI API. Có tính năng lưu lịch sử chat và export.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "OpenAI API", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/username/ai-chat",
      demo: "https://ai-chat-demo.vercel.app",
      status: "Demo",
      featured: false,
      icon: "🤖",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20"
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
            Dự án của tôi
          </motion.h1>
          <motion.p 
            className="text-xl lg:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Những dự án tôi đã thực hiện trong quá trình học tập và phát triển kỹ năng
          </motion.p>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Projects */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Dự án nổi bật
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <motion.div 
                    className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="text-6xl relative z-10 drop-shadow-lg">{project.icon}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </motion.div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                      <motion.span 
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === 'Hoàn thành' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        }`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {project.status}
                      </motion.span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span 
                          key={tech} 
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + techIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button asChild variant="default" size="sm">
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                          </Link>
                        </Button>
                      </motion.div>
                      {project.demo && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild variant="outline" size="sm">
                            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                              Demo
                            </Link>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Other Projects */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Dự án khác
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <motion.div 
                    className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="text-4xl relative z-10 drop-shadow-lg">{project.icon}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </motion.div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-gray-900 dark:text-white">{project.title}</CardTitle>
                      <motion.span 
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Hoàn thành' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        }`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {project.status}
                      </motion.span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <motion.span 
                          key={tech} 
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + techIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button asChild variant="outline" size="sm" className="text-xs">
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            Code
                          </Link>
                        </Button>
                      </motion.div>
                      {project.demo && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild variant="ghost" size="sm" className="text-xs">
                            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                              Live
                            </Link>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-0">
            <CardContent className="py-12">
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Bạn có dự án muốn hợp tác?
              </motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Tôi luôn sẵn sàng tham gia vào các dự án thú vị và có ý nghĩa. 
                Hãy liên hệ với tôi để thảo luận về cơ hội hợp tác!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg">
                    <Link href="/contact">Liên hệ ngay</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}

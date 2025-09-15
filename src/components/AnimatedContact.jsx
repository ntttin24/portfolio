'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function AnimatedContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "tin3519237@gmail.com",
      link: "mailto:tin3519237@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "0784723481",
      link: "tel:+84784723481"
    },
    {
      icon: "📍",
      title: "Location",
      value: "TP. Hồ Chí Minh, Việt Nam",
      link: null
    },
    {
      icon: "💼",
      title: "GitHub",
      value: "github.com/ntttin24",
      link: "https://github.com/ntttin24"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "🐙",
      url: "https://github.com/ntttin24",
      color: "hover:bg-gray-900"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/in/ntttin24",
      color: "hover:bg-blue-600"
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com/ntttin24",
      color: "hover:bg-blue-400"
    },
    {
      name: "Facebook",
      icon: "📘",
      url: "https://facebook.com/ntttin24",
      color: "hover:bg-blue-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20"
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
            Liên hệ với tôi
          </motion.h1>
          <motion.p 
            className="text-xl lg:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tôi luôn sẵn sàng lắng nghe và trao đổi về các cơ hội hợp tác thú vị
          </motion.p>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
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
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Gửi tin nhắn</CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">
                    Hãy điền thông tin bên dưới và tôi sẽ phản hồi trong thời gian sớm nhất
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Họ và tên *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Nhập họ và tên của bạn"
                          className="w-full"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="w-full"
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Chủ đề *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Chủ đề bạn muốn trao đổi"
                        className="w-full"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Tin nhắn *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Hãy chia sẻ chi tiết về dự án hoặc cơ hội hợp tác..."
                        rows={6}
                        className="w-full"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button 
                          type="submit" 
                          className="w-full" 
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center space-x-2">
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Đang gửi...</span>
                            </div>
                          ) : (
                            'Gửi tin nhắn'
                          )}
                        </Button>
                      </motion.div>
                    </motion.div>
                    
                    {submitStatus === 'success' && (
                      <motion.div 
                        className="p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 rounded-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        ✅ Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể.
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Contact Details */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Thông tin liên hệ</CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bạn cũng có thể liên hệ với tôi qua các kênh khác
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="text-2xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {info.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Mạng xã hội</CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">
                    Kết nối với tôi trên các nền tảng khác
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-all duration-200 ${social.color} hover:text-white`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-2xl">{social.icon}</span>
                        <span className="font-medium">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Response Time */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-0">
                <CardContent className="p-6">
                  <div className="text-center">
                    <motion.div 
                      className="text-4xl mb-4"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      ⚡
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Thời gian phản hồi</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Tôi thường phản hồi trong vòng <strong>24 giờ</strong> 
                      cho tất cả các tin nhắn. Trong trường hợp khẩn cấp, 
                      hãy gọi điện trực tiếp!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center text-gray-900 dark:text-white mb-8">
                Câu hỏi thường gặp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    {
                      q: "Bạn có sẵn sàng làm việc remote không?",
                      a: "Có, tôi hoàn toàn sẵn sàng làm việc remote và có kinh nghiệm sử dụng các công cụ collaboration như Slack, Zoom, Trello."
                    },
                    {
                      q: "Bạn có thể bắt đầu khi nào?",
                      a: "Tôi có thể bắt đầu ngay lập tức và sẵn sàng dành 40+ giờ/tuần cho dự án thực tập."
                    }
                  ].map((faq, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {faq.q}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.a}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      q: "Bạn có kinh nghiệm với team work không?",
                      a: "Có, tôi đã làm việc nhóm trong nhiều dự án học tập và freelance, có kinh nghiệm sử dụng Git và code review."
                    },
                    {
                      q: "Bạn có thể học công nghệ mới không?",
                      a: "Hoàn toàn có thể! Tôi có khả năng tự học tốt và đã tự học React, Next.js trong thời gian ngắn."
                    }
                  ].map((faq, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ x: -5 }}
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {faq.q}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.a}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}

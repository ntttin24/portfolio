'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn };

export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0,
  ...props 
}) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

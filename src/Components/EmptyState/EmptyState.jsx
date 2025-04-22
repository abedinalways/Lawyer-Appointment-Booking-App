import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const EmptyState = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };
  return (
   <motion.div
      className="min-h-screen flex flex-col items-center justify-center max-w-xl mx-auto px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-2xl md:text-3xl font-extrabold text-blue-800 mb-6 text-center font-[sora]"
        variants={itemVariants}
      >
        No Appointments Scheduled
      </motion.h2>
      <motion.p
        className="text-[12px] text-gray-600 mb-8 text-center leading-relaxed font-[sora] "
        variants={itemVariants}>
        It looks like you don't have any appointments booked at the moment. Schedule a
        consultation with one of our expert lawyers to discuss your legal needs. Click
        below to explore our services or return to the homepage.
      </motion.p>
      <motion.div variants={itemVariants}>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium  hover:bg-blue-700 transition-colors duration-300 rounded-2xl"
        >
          Back to Homepage
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default EmptyState;
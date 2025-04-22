import React from 'react';
import { motion } from 'framer-motion';
const Banner = () => {
  return (
    <div
      className="hero md:min-h-[550px] min-h-[250px] min-w-[320px] mx-auto rounded-2xl  mt-4 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/pBmnQZn6/banner-img-1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-0 rounded-2xl"></div>
      <div className=" hero-content text-neutral-content text-center relative z-10">
        <div className="max-w-lg md:max-w-6xl md:mt-12 md:px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-sm md:text-3xl font-[Mulish] md:font-extrabold font-semibold leading-snug text-white"
          >
            Empowering you to take control of your legal matters—
            <br className="hidden md:block" />
            connect, consult, and conquer with professional legal assistance.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="m-6 text-[7px] md:text-[15px] mx-auto max-w-xl text-white/80"
          >
            Our platform connects you with verified, experienced lawyers across
            various specialties — all at your convenience. Whether it’s legal
            advice or document support, book appointments in minutes and get
            trusted help.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header 
      className="relative max-w-full h-[90vh] bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/assets/HOMEPAGE.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white">
        <motion.h1 
          className="text-8xl mb-2"
          style={{ fontFamily: 'Salina-Book, sans-serif' }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          “EAT FINE,”
        </motion.h1>

        <motion.h1 
          className="text-8xl mb-2"
          style={{ fontFamily: 'Salina-Book, sans-serif' }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          DRINK FINE,
        </motion.h1>

        <motion.h2 
          className="text-8xl mb-2"
          style={{ fontFamily: 'Salina-MediumItalic, sans-serif' }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          FEEL FAYN”
        </motion.h2>

        <motion.p 
          className="text-lg mb-6 lg:w-1/3 sm:w-1/2 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita voluptatibus earum dolorem temporibus, eaque, pariatur voluptatum odit est ipsam recusandae maiores illum.
        </motion.p>

        <motion.a 
          href="/Menu"
          className="px-6 py-2 bg-stone-500 text-white rounded-full hover:bg-stone-400 transition duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Explore the Menu
        </motion.a>
      </div>
    </header>
  );
};

export default Header;

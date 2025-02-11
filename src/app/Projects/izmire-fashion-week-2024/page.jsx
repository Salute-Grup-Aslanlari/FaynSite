"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const IzmirFashionWeek = () => {
  return (
    <motion.div 
      className="mb-48"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.p 
        className="text-white text-center mb-12 mt-10 text-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        001
      </motion.p>

      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-white text-center mb-4 text-6xl" style={{ maxWidth: "1200px", fontFamily: "Salina-TrialLight, sans-serif" }}>
          FAYN & IZMIR FASHION WEEK 2024, CELEBRATİNG FASHION AND FUN.
        </h1>
      </motion.div>

      <motion.p 
        className="text-white text-center mb-4 mt-5 text-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        August 30th 2024
      </motion.p>

      <motion.div
        className="relative w-2/3 h-[400px] mx-auto mb-16 rounded-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src="/assets/fashiondetail1.webp" alt="Izmir Fashion Week" layout="fill" objectFit="cover" />
      </motion.div>

      <div className="flex justify-between w-full mt-8 xl:pl-72 lg:pl-64">
        <motion.div 
          className="w-3/4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-5/6 h-[600px]">
            <Image src="/assets/fashiondetail2.webp" alt="Izmir Fashion Week" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </motion.div>

        <motion.div 
          className="text-white w-full text-left mr-72"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mb-8 text-4xl lg:w-full xl:w-full" style={{ fontFamily: "Salina-TrialLight, sans-serif", lineHeight: "1.4" }}>
            Fayn Cocktails & More proudly sponsored İzmir Fashion Week 2024, celebrating creativity and style.
          </h1>
          <p className="text-xl leading-relaxed font-light w-full" style={{ lineHeight: "1.4" }}>
            The event concluded with an unforgettable after-party at Fayn, where guests enjoyed signature cocktails, lively conversations, and captured memories in our vibrant atmosphere.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IzmirFashionWeek;

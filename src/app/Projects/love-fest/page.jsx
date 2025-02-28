"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MissMrmodel = () => {
  return (
    <div className="mb-36">
      <motion.p
        className="text-white text-center mb-12 mt-10 text-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        004
      </motion.p>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1
          className="text-white text-center mb-6 text-6xl"
          style={{
            maxWidth: "1200px",
            fontFamily: "Salina-TrialLight, sans-serif",
          }}
        >
        Fayn Presents: Love Fest; A Night of Cocktails, Fashion, and Celebration 
        </h1>
      </motion.div>

      {/* Tarih */}
      <motion.p
        className="text-white text-center mb-4 mt-5 text-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        August 30th 2024
      </motion.p>

      {/* İlk Görsel */}
      <motion.div
        className="relative w-3/4 h-[400px] mx-auto mb-16 rounded-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/assets/lovefestyatay.webp"
          alt="Izmir Fashion Week"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      {/* İkinci Görsel ve Metin */}
      <div className="flex justify-between w-full mt-8 xl:pl-72 lg:pl-64">
        {/* Soldaki Görsel */}
        <motion.div
          className="w-3/4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, delay: 0.3 }}
        >
          <div className="relative w-5/6 h-[600px]">
            <Image
              src="/assets/lovefestdikey.webp"
              alt="Izmir Fashion Week"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>

        {/* Sağdaki Metin */}
        <motion.div
          className="text-white w-full text-left mr-72"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <h1
            className="mb-8 text-4xl lg:w-full xl:w-full"
            style={{
              fontFamily: "Salina-TrialLight, sans-serif",
              lineHeight: "1.4",
            }}
          >
            Fayn proudly hosted Love Fest, an unforgettable evening where style, flavor, and connection came together in perfect harmony. 
          </h1>

          <p
            className="text-xl leading-relaxed font-light w-full"
            style={{ lineHeight: "1.4" }}
          >
           The event brought together a vibrant crowd to celebrate love in all its forms, with an atmosphere filled with energy, creativity, and of course, exceptional cocktails.  Guests indulged in Fayn’s signature handcrafted cocktails, each sip delivering a unique blend of flavors designed to elevate the experience. As the night unfolded, a spectacular fashion show took center stage, showcasing stunning designs that embodied elegance and innovation.
           With the support of Salute Group as our valued sponsor, Love Fest became more than just an event;it was a celebration of passion, artistry, and unforgettable moments.  
           Stay tuned for more extraordinary experiences from Fayn where every event is crafted with taste, style, and a touch of magic.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MissMrmodel;

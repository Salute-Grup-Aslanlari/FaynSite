"use client";

import React from "react";
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import { motion } from "framer-motion";

const MissMrmodel = () => {
    const { t } = useTranslation();
  return (
    <div className="mb-36">
      <motion.p
        className="text-white text-center mb-12 mt-10 text-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        002
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
         {t('missandmrmodel.title')}
        </h1>
      </motion.div>
      <motion.p
        className="text-white text-center mb-4 mt-5 text-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        {t('missandmrmodel.date')}
      </motion.p>
      <motion.div
        className="relative w-2/3 h-[400px] mx-auto mb-16 rounded-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/assets/beachdetail1.webp"
          alt="Izmir Fashion Week"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <div className="flex justify-between w-full mt-8 xl:pl-80 lg:pl-56">
        <motion.div
          className="w-3/4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, delay: 0.3 }}
        >
          <div className="relative w-5/6 h-[600px]">
            <Image
              src="/assets/beachdetail2.webp"
              alt="Izmir Fashion Week"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>
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
           {t('missandmrmodel.description')}
          </h1>

          <p
            className="text-xl leading-relaxed font-light w-full"
            style={{ lineHeight: "1.4" }}
          >
         {t('missandmrmodel.descriptiontwo')}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MissMrmodel;

'use client';

import React from "react";
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from "react-i18next";

const Card = ({ i, titleKey, descriptionKey, src, link, color, progress, range, targetScale, date }) => {
  const container = useRef(null);
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: container.current ? container : null,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 2], [2, 0]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-[70vh] flex items-center justify-center sticky top-10">
     <motion.div
        style={{ backgroundColor: color, scale, top: `calc(${i * 50}px)` }}
        className="relative flex flex-col h-[600px] w-[1000px] rounded-3xl p-12 transform-origin-top"
      >
        <h2 className="text-center text-4xl" style={{ fontFamily: 'Salina-book, sans-serif' }}>{t(titleKey)}</h2>
        <div className="flex h-full lg:mt-2 gap-12 flex-col sm:flex-row">
          <div className="w-full sm:w-3/5 relative top-10">
            <p className="lg:text-2xl sm:text-lg leading-7 first-letter:text-xl font-bold" style={{ fontFamily: 'Source Sans 3, sans-serif', fontWeight: 100, lineHeight: '1.4'}}>
              {t(descriptionKey)}
            </p>
            <span className="mt-6 mb-2 flex flex-col items-start gap-4" style={{ fontFamily: 'Source Sans 3, sans-serif', fontWeight: 150, lineHeight: '1.2'}}>
            <Link href={link} className="text-lg cursor-pointer border border-black px-6 py-[-1]">
              {t('seeMore')}
            </Link>
              <p className="lg:text-lg text-black text-center" style={{ fontFamily: 'Source Sans 3, sans-serif', fontWeight: 100, lineHeight: '1.4'}}>{new Date(date).toLocaleDateString()}</p>
            </span>
          </div>
          <div className="w-full sm:w-3/5 top-10 h-[90%] rounded-3xl overflow-hidden flex justify-center items-center relative">
            <motion.div className="w-full h-full relative" style={{ scale: imageScale }}>
              <Image
                fill
                src={src ? src : '/assets/flavor.jpg'}
                alt="image"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;

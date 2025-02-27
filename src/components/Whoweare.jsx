'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Whoweare = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div className="w-[2px] h-12 sm:h-16 md:h-20 bg-white my-4"></div>
      <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        {t('whoweareTitle')}
      </h1>
      <div className="text-white text-center px-6 sm:px-12 lg:px-20 max-w-[80%] sm:max-w-[60%] md:max-w-[50%] mt-10 sm:mt-16 z-10">
        <p className="text-base sm:text-8xl md:text-xl lg:text-6xl" style={{ lineHeight: '1.5', fontFamily: 'Salina-Book, sans-serif' }}>
          {t('whoweareDescription')}
        </p>
      </div>
      <Image 
        src="/assets/whowearee.webp" 
        alt={t('whoweareTitle')}
        width={5000} 
        height={4000}
        className="object-cover w-[90%] sm:w-[60%] md:w-[40%] lg:w-[33%] h-auto transform scale-110"
      />
      <div className="flex flex-col items-center mt-10">
        <div className="w-[2px] h-[80px] sm:h-[100px] md:h-[120px] bg-white mb-4"></div>
        <h2 className="text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl text-center italic" style={{ fontFamily: 'Salina-BookItalic, sans-serif' }}>
          {t('weAreFayn')}
        </h2>
      </div>

    </div>
  );
};

export default Whoweare;

'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header 
      className="relative max-w-full h-[90vh] sm:h-[20vh] bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/assets/HOMEPAGE.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2 opacity-0 animate-fade-in animate-delay-1000" style={{ fontFamily: 'Salina-Book, sans-serif' }}>
          “{t('eatFine')}”
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2 opacity-0 animate-fade-in animate-delay-1500" style={{ fontFamily: 'Salina-Book, sans-serif' }}>
          {t('drinkFine')},
        </h1>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2 opacity-0 animate-fade-in animate-delay-2000" style={{ fontFamily: 'Salina-MediumItalic, sans-serif' }}>
          {t('feelFayn')}”
        </h2>
        <p className="text-md sm:text-base md:text-lg lg:text-4xl mb-6 lg:w-1/3 sm:w-1/2 mt-4 opacity-0 animate-slide-in animate-delay-2500">
          {t('description')}
        </p>
        <a href="/Menu" className="px-6 py-2 bg-stone-500 text-white rounded-full hover:bg-stone-400 transition duration-300 opacity-0 animate-slide-in animate-delay-3000">
          {t('exploreMenu')}
        </a>
      </div>
    </header>
  );
};

export default Header;

'use client';

import React from "react";
import Card from '../index';
import { useTranslation } from 'react-i18next';

const CardWrapper = ({ cards = [] }) => {
   const { t } = useTranslation();
  return (
    <div className="relative top-[-20px] flex flex-col items-center">
      <div className="flex flex-col items-center mt-2">
        <div className="absolute top-[-100px] sm:top-[-50px] md:top-[10px] lg:top-[-20px] left-1/2 transform -translate-x-1/2 text-white text-2xl sm:text-2xl md:text-xl">
          STAY IN THE LOOP
        </div>
        <div className="w-[1px] h-[100px] sm:h-[150px] md:h-[100px] bg-white mb-4"></div>
        <h2
          className="text-white text-lg sm:text-3xl md:text-4xl lg:text-8xl text-center mb-4 italic"
          style={{ fontFamily: 'Salina-BookItalic, sans-serif' }}
        >
          {t('newsletter.title')}
        </h2>
        <p
          className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl text-center px-8 mt-10 max-w-[1500px] leading-[1.5]"
        >
         {t('newsletter.description')}
        </p>
      </div>
      {cards.length > 0 && 
        cards.map((card, index) => (
          <div key={index} className="mb-2 last:mb-0">
            <Card {...card} i={index} />
          </div>
        ))
      }
    </div>
  );
};

export default CardWrapper;

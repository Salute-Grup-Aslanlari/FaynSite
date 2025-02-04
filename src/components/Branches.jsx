'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Branches = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/assets/location2.jpg',
    '/assets/location2.jpg',
    '/assets/location2.jpg',
    '/assets/location2.jpg',
    '/assets/location2.jpg',
  ];

  const handleDrag = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }
  };

  return (
    <div className="relative flex justify-center items-center h-[300px] overflow-hidden">
      <div
        className="flex items-center justify-center gap-4 transition-all duration-500"
        onTouchStart={(e) => (e.clientX = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const endX = e.changedTouches[0].clientX;
          if (e.clientX - endX > 50) handleDrag('right');
          if (e.clientX - endX < -50) handleDrag('left');
        }}
      >
        {images.map((src, index) => {
          const position = (index - currentIndex + images.length) % images.length;

          const isCenter = position === 0;
          const isSide = position === 1 || position === images.length - 1;

          const scale = isCenter ? 'scale-110' : isSide ? 'scale-90' : 'scale-75';
          const opacity = isCenter ? 'opacity-100' : isSide ? 'opacity-75' : 'opacity-0';
          const rotation = isSide ? 'rotate-6' : 'rotate-0';

          return (
            <div
              key={index}
              className={`relative transform ${scale} ${opacity} ${rotation} transition-all duration-500`}
              style={{
                zIndex: isCenter ? 10 : 5,
                display: isCenter || isSide ? 'block' : 'none',
              }}
            >
              <Image
                src={src}
                alt={`Branch ${index + 1}`}
                width={200}
                height={200}
                className="rounded-lg cursor-pointer"
              />
            </div>
          );
        })}
      </div>

      <div
        className="absolute left-0 h-full w-[50px] cursor-pointer z-10 flex items-center justify-center bg-black/50"
        onClick={() => handleDrag('left')}
      >
        <span className="text-white text-lg">{'<'}</span>
      </div>
      <div
        className="absolute right-0 h-full w-[50px] cursor-pointer z-10 flex items-center justify-center bg-black/50"
        onClick={() => handleDrag('right')}
      >
        <span className="text-white text-lg">{'>'}</span>
      </div>
    </div>
  );
};

export default Branches;

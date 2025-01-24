'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Branches = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/assets/location2.jpg',
    '/assets/HOMEPAGE.webp',
    '/assets/faynalsancak1.webp',
    '/assets/faynalsancak2.webp',
    '/assets/faynalsancak1.webp',
  ];

  const handleDrag = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }
  };

  const handleTouchStart = (e) => {
    e.target.dataset.startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const startX = parseFloat(e.target.dataset.startX);
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      handleDrag('right');
    } else if (endX - startX > 50) {
      handleDrag('left');
    }
  };

  return (
    <div
      className="relative flex justify-center items-center h-[800px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex items-center justify-center gap-16">
        {images.map((src, index) => {
          const position = (index - currentIndex + images.length) % images.length;

          const isCenter = position === 0;
          const isLeft = position === images.length - 1;
          const isRight = position === 1;

          const transformClasses = isCenter
            ? 'scale-110 rotate-0 z-10'
            : isLeft
            ? '-rotate-15 translate-x-[-50%] opacity-75 z-5'
            : isRight
            ? 'rotate-15 translate-x-[50%] opacity-75 z-5'
            : 'opacity-0 scale-75';

          return (
            <div
              key={index}
              className={`relative transition-all duration-500 ease-in-out ${transformClasses}`}
              style={{ display: isCenter || isLeft || isRight ? 'block' : 'none' }}
            >
              <Image
                src={src}
                alt={`Branch ${index + 1}`}
                width={600}
                height={600}
                className="rounded-lg shadow-lg cursor-pointer"
              />
            </div>
          );
        })}
      </div>

      <div
        className="absolute left-0 h-full w-[120px] cursor-pointer z-10 flex items-center justify-center bg-black/50"
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

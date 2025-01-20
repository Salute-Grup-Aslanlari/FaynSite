'use client';

import { useState } from 'react';
import Image from 'next/image';

const Flavor = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = [
    { imageSrc: '/assets/flavor.jpg', text: 'FLAVOR' },
    { imageSrc: '/assets/quality.webp', text: 'QUALITY' },
    { imageSrc: '/assets/style.webp', text: 'STYLE' },
  ];

  const handleScroll = (event) => {
    event.preventDefault(); // Sayfanın kaymasını engeller
    const direction = event.deltaY > 0 ? 1 : -1;
    const nextIndex = (currentIndex + direction + sections.length) % sections.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div
      style={{
        marginTop: '80px',
        width: '100%',
        height: '500px',
        overflow: 'hidden',
        position: 'relative',
        textAlign: 'center',
      }}
      onWheel={handleScroll}
    >
      {sections.map((section, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            transition: 'opacity 0.5s ease',
            opacity: currentIndex === index ? 1 : 0,
            zIndex: currentIndex === index ? 1 : 0,
          }}
        >
          <Image
            src={section.imageSrc}
            alt={`${section.text} Image`}
            layout="fill"
            objectFit="contain"
          />
          <div
            style={{
              position: 'absolute',
              top: '80%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '12rem',
              color: 'white',
            }}
          >
            <h6
              className="text-16xl mb-2"
              style={{ fontFamily: 'Salina-TrialLight, sans-serif' }}
            >
              {section.text}
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Flavor;

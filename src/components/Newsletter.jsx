'use client';

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const newsData = [
  {
    title: "Cocktail Masterclass",
    description: "Fayn Cocktails & More recently hosted a series of exciting cocktail workshops, led by the acclaimed bartender Çağatay Ercan.",
    date: "January 24, 2025",
    image: "/assets/newsletter1.webp",
  },
  {
    title: "İzmir Fashion Week 2024",
    description: "Fayn Cocktails & More proudly sponsored İzmir Fashion Week 2024, celebrating creativity and style.",
    date: "January 23, 2025",
    image: "/assets/newsletter2.webp",
  },
  {
    title: "Miss & Mr. Model 2024",
    description: "Last summer, Fayn’99 Beach hosted the highly anticipated Miss & Mr. Model selection and the after-party, providing a glamorous setting for a night full of style and excitement.",
    date: "January 22, 2025",
    image: "/assets/newsletter3.webp",
  },
  {
    title: "News Title 4",
    description: "Short description of the news article goes here.",
    date: "January 21, 2025",
    image: "/assets/quality.jpg",
  },
  {
    title: "News Title 5",
    description: "Short description of the news article goes here.",
    date: "January 20, 2025",
    image: "/assets/quality.jpg",
  },
];

const Newsletter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < newsData.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(newsData.length - 3);
    }
  };

  return (
    <div className="relative mb-64 top-[-90px] flex flex-col items-center">
      {/* Yeni kısım */}
      <div className="flex flex-col items-center mt-8">
        <div className="absolute top-[-100px] sm:top-[-50px] md:top-[10px] lg:top-[-20px] left-1/2 transform -translate-x-1/2 text-white text-2xl sm:text-2xl md:text-xl">
          STAY IN THE LOOP
        </div>
        <div className="w-[1px] h-[100px] sm:h-[150px] md:h-[100px] bg-white mb-4"></div>
        <h2 
            className="text-white text-lg sm:text-3xl md:text-4xl lg:text-8xl text-center mb-4" 
            style={{ fontFamily: 'Salina-BookItalic, sans-serif', fontStyle: 'italic' }}
        >
            NEWSLETTER
        </h2>
        <p 
            className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl text-center px-8 mt-10" 
            style={{ maxWidth: '1500px', lineHeight: '1.5' }}
        > Stay in the loop with the latest news, events, and exclusive updates from Fayn Cocktails & More. 
        Discover what’s happening behind the bar and beyond as we continue to craft unforgettable experiences for our guests
        </p>
      </div>

      <div className="absolute left-5 top-[800px] z-10">
        <button
          onClick={prevSlide}
          className="bg-white p-2 rounded-full shadow-lg text-gray-800 hover:bg-gray-300"
        >
          <FaChevronLeft />
        </button>
      </div>

      <div className="absolute right-5 top-[800px] z-10">
        <button
          onClick={nextSlide}
          className="bg-white p-2 rounded-full shadow-lg text-gray-800 hover:bg-gray-300"
        >
          <FaChevronRight />
        </button>
      </div>

    </div>
  );
};

export default Newsletter;

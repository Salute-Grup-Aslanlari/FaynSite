'use client';

import React from 'react';

const Header = () => {
  return (
    <header 
      className="relative max-w-full h-[90vh] bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/assets/HOMEPAGE.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-8xl mb-2" style={{ fontFamily: 'Salina-Book, sans-serif' }}>
          “EAT FINE,”
        </h1>
        <h1 className="text-8xl mb-2" style={{ fontFamily: 'Salina-Book, sans-serif' }}>
          DRINK FINE,
        </h1>
        <h2 className="text-8xl mb-2" style={{ fontFamily: 'Salina-MediumItalic, sans-serif' }}>
          FEEL FAYN”
        </h2>
        <p className="text-lg mb-6 lg:w-1/3 sm:w-1/2 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita voluptatibus earum dolorem temporibus, eaque, pariatur voluptatum odit est ipsam recusandae maiores illum.</p>
        <a href="/Menu" className="px-6 py-2 bg-stone-500 text-white rounded-full hover:bg-stone-400 transition duration-300">
          Explore the Menu
        </a>
      </div>
    </header>
  );
};

export default Header;

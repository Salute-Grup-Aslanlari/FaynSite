'use client';

import React from 'react';

const Header = () => {
  return (
    <header 
      className="relative max-w-full h-[90vh] bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/assets/HOMEPAGE.webp')", // Fotoğraf yolu doğru olduğundan emin olun
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-bold mb-4">“EAT FINE, DRINK FINE, FEEL FAYN”</h1>
        <p className="text-lg mb-6">Discover our signature cocktails and vibrant atmosphere!</p>
        <a href="#menu" className="px-6 py-2 bg-black text-white rounded-full hover:bg-slate-600 transition duration-300">
          Explore the Menu
        </a>
      </div>
    </header>
  );
};

export default Header;

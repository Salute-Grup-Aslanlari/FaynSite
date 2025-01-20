'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Fayn Cocktail Bar. All rights reserved.</p>
        </div>
        <div className="space-x-6">
          <a href="#" className="text-sm hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="text-sm hover:text-gray-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

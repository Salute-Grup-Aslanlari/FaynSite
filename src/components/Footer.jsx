'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-start">
          <img src="/assets/FAYNLOGOBEYAZ.png" alt="Fayn Logo" className="w-48 mb-4" />
          <p className="text-lg">Eat Fine</p>
          <p className="text-lg">Drink Fine</p>
          <p className="text-lg">Feel Fine</p>
        </div>

        {/* Center Section */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:text-gray-300">Cocktails</a></li>
            <li><a href="#" className="text-sm hover:text-gray-300">Wines</a></li>
            <li><a href="#" className="text-sm hover:text-gray-300">Appetizers</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="text-sm hover:text-gray-300">Contact</a></li>
            <li><a href="#" className="text-sm hover:text-gray-300">Careers</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Fayn Cocktail Bar. All rights reserved.</p>
        <div className="space-x-6 mt-2">
          <a href="#" className="text-sm hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="text-sm hover:text-gray-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

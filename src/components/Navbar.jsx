'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md sticky top-0 z-50 font-sans">
      <div className="max-w-5sm mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center justify-start space-x-6 pl-7">
          <img src="/assets/FAYNLOGOBEYAZ.png" alt="Logo" className="w-28" />
        </div>

        <ul className="hidden lg:flex space-x-8 mx-auto mr-20">
          <li><a href="/" className="hover:text-gray-300 text-sm mr-10">HOME</a></li>
          {/* <li><a href="/Menu" className="hover:text-gray-300 text-sm mr-10">MENU</a></li> */}
          <li><a href="/About" className="hover:text-gray-300 text-sm mr-10">ABOUT US</a></li>
          <li><a href="/Locations" className="hover:text-gray-300 text-sm mr-10">LOCATIONS</a></li>
          <li><a href="/Products" className="hover:text-gray-300 text-sm mr-10">PRODUCTS</a></li>
          <li><a href="/Contact" className="hover:text-gray-300 text-sm">CONTACT</a></li>
        </ul>

        <div className="hidden lg:flex space-x-4 ml-auto">
          <button className="hover:text-gray-300 text-sm">TR</button>
          <span>/</span>
          <button className="hover:text-gray-300 text-sm">EN</button>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-black text-white py-4 px-6">
          <ul>
            <li className="py-2"><a href="/" className="hover:text-gray-300">HOME</a></li>
            {/* <li className="py-2"><a href="/Menu" className="hover:text-gray-300">MENU</a></li> */}
            <li className="py-2"><a href="/About" className="hover:text-gray-300">ABOUT</a></li>
            <li className="py-2"><a href="/Locations" className="hover:text-gray-300">LOCATIONS</a></li>
            <li className="py-2"><a href="/Contact" className="hover:text-gray-300">CONTACT</a></li>
          </ul>

          <div className="mt-4 space-x-4 flex justify-center pr-4">
            <button className="hover:text-gray-300 text-sm">TR</button>
            <button className="hover:text-gray-300 text-sm">EN</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

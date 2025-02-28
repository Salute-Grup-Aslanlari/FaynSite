'use client';

import React, { useState } from 'react';  // React importunu ekleyin
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import i18n from '../translate/i18n';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-black text-white shadow-md sticky top-0 z-50 font-sans">
      <div className="max-w-5sm mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center justify-start space-x-6 pl-7">
          <img src="/assets/FAYNLOGOBEYAZ.png" alt="Logo" className="w-28" />
        </div>

        <ul className="hidden lg:flex space-x-8 mx-auto mr-20">
          <li><Link href="/" className="hover:text-gray-300 text-lg mr-10">{t('home')}</Link></li>
          <li><Link href="/About" className="hover:text-gray-300 text-lg mr-10">{t('about')}</Link></li>
          <li><Link href="/Locations" className="hover:text-gray-300 text-lg mr-10">{t('locations')}</Link></li>
          <li><Link href="/Products" className="hover:text-gray-300 text-lg mr-10">{t('products')}</Link></li>
        </ul>

        <div className="hidden lg:flex space-x-4 ml-auto">
          <button onClick={() => changeLanguage('tr')} className="hover:text-gray-300 text-lg">TR</button>
          <span>/</span>
          <button onClick={() => changeLanguage('en')} className="hover:text-gray-300 text-lg">EN</button>
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
            <li className="py-2"><Link href="/" className="hover:text-gray-300">{t('home')}</Link></li>
            <li className="py-2"><Link href="/About" className="hover:text-gray-300">{t('about')}</Link></li>
            <li className="py-2"><Link href="/Locations" className="hover:text-gray-300">{t('locations')}</Link></li>
            <li className="py-2"><Link href="/Products" className="hover:text-gray-300">{t('products')}</Link></li>
          </ul>

          <div className="mt-4 space-x-4 flex justify-center pr-4">
            <button onClick={() => changeLanguage('tr')} className="hover:text-gray-300 text-sm">TR</button>
            <button onClick={() => changeLanguage('en')} className="hover:text-gray-300 text-sm">EN</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

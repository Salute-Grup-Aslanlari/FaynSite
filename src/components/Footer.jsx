'use client';

import React from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import { LINKS } from '../data';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const currentYear = new Date().getFullYear();

const Footer = () => {
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_m0zxmur',
      'template_ha7lvn4',
      e.target,
      '0oS1q33k3QF2Ubm7Y'
    ).then(
      () => {
        toast.success(t('footer.successMessage'));
      },
      () => {
        toast.error(t('footer.errorMessage'));
      }
    );

    e.target.reset();
  };

  return (
    <footer className="w-full bg-black text-white py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-start">
            <Image 
              src="/assets/FAYNLOGOBEYAZ.png" 
              alt={t('footer.logoAlt')} 
              width={240} 
              height={100} 
              className="w-36 h-auto lg:w-60"
            />
            <div className="mt-4 text-white text-4xl text-left" style={{ fontFamily: 'Salina-TrialLight, sans-serif', fontWeight: 400 }}>
              <span className="block">{t('eatFine')}</span>
              <span className="block">{t('drinkFine')}</span>
              <span className="block">{t('feelFayn')}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-32">
            {LINKS.map(({ titleKey, items }) => (
              <div key={titleKey}>
                <h6 className="mb-3 text-3xl" style={{ fontFamily: 'Salina-TrialLight, sans-serif', fontWeight: 400 }}>{t(titleKey)}</h6>
                <ul>
                  {items.map(({ nameKey, url }) => (
                    <li key={nameKey}>
                      <a href={url} className="text-gray-400 text-2xl hover:text-white transition">
                        {t(nameKey)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h6 className="mb-3 text-3xl" style={{ fontFamily: 'Salina-TrialLight, sans-serif', fontWeight: 400 }}>{t('footer.contactUs')}</h6>
            <form onSubmit={sendEmail} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder={t('footer.yourName')}
                required
                className="w-full p-2 bg-gray-800 transition-transform duration-300 ease-in-out hover:scale-105 text-white border border-gray-600 rounded-md focus:outline-none"
              />
              <input
                type="email"
                name="reply_to"
                placeholder={t('footer.email')}
                required
                className="w-full p-2 bg-gray-800 transition-transform duration-300 ease-in-out hover:scale-105 text-white border border-gray-600 rounded-md focus:outline-none"
              />
              <textarea
                name="message"
                placeholder={t('footer.yourMessage')}
                required
                className="w-full p-2 bg-gray-800 transition-transform duration-300 ease-in-out hover:scale-105 text-white border border-gray-600 rounded-md focus:outline-none"
                rows="3"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gray-600 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-800 text-white py-2 rounded-md"
              >
                {t('footer.send')}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-2 mb-2 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{t('footer.copyright', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

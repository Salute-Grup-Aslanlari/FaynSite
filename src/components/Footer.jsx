'use client';

import React from 'react';
import { LINKS } from '../data';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-start">
          <img src="/assets/FAYNLOGOBEYAZ.png" alt="Şirket Logosu" className="w-60 h-auto" />
          <div className="mt-4 text-white text-4xl text-left" style={{ fontFamily: 'Salina-TrialLight, sans-serif', fontWeight: 400 }}>
            <span className="block">Eat Fine</span>
            <span className="block">Drink Fine</span>
            <span className="block">Feel Fayn</span>
          </div>
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pr-32">
            {LINKS.map(({ title, items }) => (
              <div key={title}>
                <h6 className="mb-3 text-3xl" style={{ fontFamily: 'Salina-TrialLight, sans-serif', fontWeight: 400 }}>{title}</h6>
                <ul>
                  {items.map(({ name, url }) => (
                    <li key={name}>
                      <a href={url} className="text-gray-400 text-2xl hover:text-white transition">
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h6 className="mb-3 text-3xl" style={{ fontFamily: 'Salina-TrialLight, sans-serif', fontWeight: 400 }}>Bize Ulaşın</h6>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Adınız"
                className="w-full p-2 bg-gray-800  transition-transform duration-300 ease-in-out hover:scale-105  text-white border border-gray-600 rounded-md focus:outline-none"
              />
              <input
                type="email"
                placeholder="E-posta"
                className="w-full p-2 bg-gray-800  transition-transform duration-300 ease-in-out hover:scale-105  text-white border border-gray-600 rounded-md focus:outline-none"
              />
              <textarea
                placeholder="Mesajınız"
                className="w-full p-2 bg-gray-800  transition-transform duration-300 ease-in-out hover:scale-105  text-white border border-gray-600 rounded-md focus:outline-none"
                rows="3"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gray-600  transition-transform duration-300 ease-in-out hover:scale-105  hover:bg-gray-800 transition text-white py-2 rounded-md"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} Fayn. Tüm Hakları Saklıdır.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89h2.238v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

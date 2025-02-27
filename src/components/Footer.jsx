'use client';

import React from 'react';
import emailjs from 'emailjs-com';
import { LINKS } from '../data';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const currentYear = new Date().getFullYear();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_m0zxmur',
    'template_ha7lvn4',
    e.target,
    '0oS1q33k3QF2Ubm7Y'
  ).then(
    (result) => {
      console.log('Email gönderildi:', result.text);
      toast.success('Mesajınız başarıyla gönderildi!');
    },
    (error) => {
      console.log('Email gönderilemedi:', error.text);
      toast.error('Mesaj gönderilirken hata oluştu.');
    }
  );

  e.target.reset();
};

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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-32">
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
            <form onSubmit={sendEmail} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Adınız"
                required
                className="w-full p-2 bg-gray-800 transition-transform duration-300 ease-in-out hover:scale-105 text-white border border-gray-600 rounded-md focus:outline-none"
              />
              <input
                type="email"
                name="reply_to"
                placeholder="E-posta"
                required
                className="w-full p-2 bg-gray-800 transition-transform duration-300 ease-in-out hover:scale-105 text-white border border-gray-600 rounded-md focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Mesajınız"
                required
                className="w-full p-2 bg-gray-800 transition-transform duration-300 ease-in-out hover:scale-105 text-white border border-gray-600 rounded-md focus:outline-none"
                rows="3"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gray-600 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-800 text-white py-2 rounded-md"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} Fayn. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
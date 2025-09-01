'use client';
import React from "react";
import Navbar from '../../components/Navbar';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <main className="bg-gray-100 min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">{t('home.welcome')}</h1>
      </main>
    </div>
  );
};

export default HomePage;

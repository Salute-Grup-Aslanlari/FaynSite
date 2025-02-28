import React from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export const metadata = {
  title: "Fayn Cocktail",
  description: "A cocktail bar website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceSans.className} antialiased`}
      >
        <Navbar />
        <ToastContainer position="top-right" autoClose={3000} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

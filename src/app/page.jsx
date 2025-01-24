'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Flavor from '../components/Flavor';
import Whoweare from '../components/Whoweare';
import Branches from '../components/Branches';
import Newsletter from '../components/Newsletter';

export default function HomePage() {
  return (
    <div className="App">
      <Header />
      <Whoweare />
      <Newsletter />
      <div className="navigation-links">
        <Link href="/about">About</Link>
        <Link href="/locations">Locations</Link>
        <Link href="/Menu">Menu</Link>
      </div>
    </div>
  );
}

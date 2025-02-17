'use client';
import styles from './page.module.scss';
import { projects } from '../data';
import { quality } from '../data'; // quality verisini içe aktarıyoruz
import { images } from '../data';
import Card from '../components/Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Header from '../components/Header';
import Branches from '../components/Branches';
import Whoweare from '../components/Whoweare';
import { Quality } from '../components/Quality'; // Eğer Quality bileşeni components klasöründeyse

import CardWrapper from '../components/Card/CardWrapper/cardwrapper';
import Link from 'next/link';
import Flavor from '../components/Flavor/page';

export default function HomePage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.carouselSection}>
        <Quality images={quality} />
      </div>
      <Whoweare />
      <div className={styles.carouselSection}>
        <Branches images={images} />
      </div>
      <CardWrapper />
      <main ref={container} className={styles.main}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
      <Flavor />
     

      <div className="navigation-links">
        <Link href="/about">About</Link>
        <Link href="/locations">Locations</Link>
        <Link href="/Products">Products</Link>
        <Link href="/Menu">Menu</Link>
      </div>
    </div>
  );
}

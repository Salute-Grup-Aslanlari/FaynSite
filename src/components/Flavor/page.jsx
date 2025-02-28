'use client'

import React from "react";
import { useRef, useEffect, useState } from 'react';
import styles from './page.module.scss';

export default function Home() {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 70;
  const easing = 0.15;

  const [easedScrollProgress, setEasedScrollProgress] = useState(0);

  useEffect(() => {
    if (stickyMask.current && container.current) {
      const animate = () => {
        const maskSizeProgress = targetMaskSize * getScrollProgress();
        stickyMask.current.style.webkitMaskSize = `${(initialMaskSize + maskSizeProgress) * 100}%`;
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }
  }, []);

  const getScrollProgress = () => {
    if (stickyMask.current && container.current) {
      const scrollProgress =
        stickyMask.current.offsetTop /
        (container.current.getBoundingClientRect().height - window.innerHeight);
      const delta = scrollProgress - easedScrollProgress;
      const newEasedProgress = easedScrollProgress + delta * easing;
      setEasedScrollProgress(newEasedProgress);
      return newEasedProgress;
    }
    return easedScrollProgress;
  };

  return (
    <main className={styles.main}>
      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop>
            <source src="/medias/nature.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
}

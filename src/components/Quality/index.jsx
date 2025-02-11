'use client';
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Quality = ({ i, title, src, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  console.log('scrollYProgress', scrollYProgress);

  const y = useParallax(scrollYProgress, 300);

  const opacity = useTransform(scrollYProgress, [i * 0.2, (i + 1) * 0.2], [1, 0]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <div className={styles.body}>
          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image fill src={src} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.h2
        initial={{ visibility: 'hidden' }}
        animate={{ visibility: 'visible' }}
        style={{ y, opacity, color: 'red' }}
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default Quality;

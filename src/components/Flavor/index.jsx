'use client';
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const Flavor = ({ i, title, src, progress, range, targetScale }) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className={styles.card}
      >
        <div className={styles.body}>
          <div className={styles.description}>
          </div>

          <div className={styles.imageContainer}>
            <motion.div className={styles.inner}>
              <Image
                fill
                src={src ? src : '/assets/flavor.jpg'}
                alt="image"
              />
            </motion.div>
            <h2 className={styles.title}>{title}</h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Flavor;

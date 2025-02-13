'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { quality } from '@/data';

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const Quality = ({ i, src, color, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(progress, range, [1, targetScale]);
    const y = useParallax(scrollYProgress, 100);

    // **Opacity ayarı: Scroll ilerledikçe eski başlık kaybolur**
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 1, 0, 0]);

    // **Z-index ayarı: Yeni başlık en önde olur**
    const zIndex = useTransform(scrollYProgress, [0, 0.5, 1], [10, 5, 0]);

    return (
        <div ref={container} className={styles.cardContainer}>
            <motion.div 
                style={{ 
                    backgroundColor: color, 
                    scale, 
                    top: `calc(-5vh + ${i * 25}px)`, 
                    zIndex 
                }} 
                className={styles.card}
            >
                <div className={styles.body}>
                    <div className={styles.imageContainer}>
                        <motion.div className={styles.inner}>
                            <Image
                                fill
                                src={src}
                                alt="image" 
                            />
                        </motion.div>
                        <motion.h2
                            style={{ y, opacity }}
                        >
                            {quality[i].title}
                        </motion.h2>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Quality;

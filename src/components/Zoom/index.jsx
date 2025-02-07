'use client'

import styles from './styles.module.scss';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Index() {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        { src: '/images/6.jpg', scale: scale4 },
        { src: '/images/faynals.webp', scale: scale5 },
        { src: '/images/9.jpg', scale: scale6 },
        { src: '/images/5.jpg', scale: scale5 },
        { src: '/images/11.jpg', scale: scale6 },
        { src: '/images/10.jpg', scale: scale8 },
        { src: '/images/8.jpg', scale: scale9 }
    ];

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map(({ src, scale }, index) => (
                        <motion.div key={index} style={{ scale }} className={styles.el}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={src}
                                    fill
                                    alt="image"
                                    placeholder="blur"
                                    blurDataURL={src}
                                />
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
}

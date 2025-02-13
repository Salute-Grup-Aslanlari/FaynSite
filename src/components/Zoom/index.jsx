'use client'

import styles from './styles.module.scss';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Index() {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const [scales, setScales] = useState({
        scale4: [1, 4],
        scale5: [1, 5],
        scale6: [1, 6],
        scale8: [1, 8],
        scale9: [1, 9]
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setScales({
                    scale4: [1.2, 4.5],
                    scale5: [1.3, 5.5],
                    scale6: [1.4, 6.5],
                    scale8: [1.5, 8.5],
                    scale9: [1.6, 9.5]
                });
            } else {
                setScales({
                    scale4: [1, 4],
                    scale5: [1, 5],
                    scale6: [1, 6],
                    scale8: [1, 8],
                    scale9: [1, 9]
                });
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scale4 = useTransform(scrollYProgress, [0, 1], scales.scale4);
    const scale5 = useTransform(scrollYProgress, [0, 1], scales.scale5);
    const scale6 = useTransform(scrollYProgress, [0, 1], scales.scale6);
    const scale8 = useTransform(scrollYProgress, [0, 1], scales.scale8);
    const scale9 = useTransform(scrollYProgress, [0, 1], scales.scale9);

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

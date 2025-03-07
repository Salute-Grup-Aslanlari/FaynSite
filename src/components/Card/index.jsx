'use client';

import React from "react";
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const Card = ({ i, title, description, src, link, color, progress, range, targetScale, date }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container.current ? container : null,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 2], [2, 0]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-[90vh] flex items-center justify-center sticky top-10">
     <motion.div
        style={{ backgroundColor: color, scale, top: `calc(${i * 50}px)` }}
        className="relative flex flex-col h-[600px] w-[1000px] rounded-3xl p-12 transform-origin-top"
      >
        <h2 className="text-center text-4xl italic font-serif">{title}</h2>
        <div className="flex h-full mt-12 gap-12 flex-col sm:flex-row">
          <div className="w-full sm:w-2/5 relative top-10">
            <p className="text-2xl leading-7 first-letter:text-2xl first-letter:font-bold">
              {description}
            </p>
            <span className="mt-5 flex flex-col items-start gap-2">
              <Link href={link} className="text-xl underline cursor-pointer">
                See more
              </Link>
              <p className="text-lg text-black text-center italic font-serif">{new Date(date).toLocaleDateString()}</p>
            </span>
          </div>
          <div className="w-full sm:w-3/5 h-[90%] rounded-3xl overflow-hidden flex justify-center items-center relative">
            <motion.div className="w-full h-full relative" style={{ scale: imageScale }}>
              <Image
                fill
                src={src ? src : '/assets/flavor.jpg'}
                alt="image"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;

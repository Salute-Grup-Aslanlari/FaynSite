"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const data = [
  { title: "Image 1", src: "./assets/katman/fugu.png" }
];

const StackedImages = () => {
  const [currentTitle, setCurrentTitle] = useState("Image 1");
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setCurrentTitle(data[activeIndex].title);
  }, [activeIndex]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(450)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-200 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,  // Rastgele boyutlar
              height: `${Math.random() * 20 + 10}px`, // Damla şeklinde
              opacity: Math.random() * 0.5 + 0.1,  // Şeffaflık
              borderRadius: "50% 50% 0 50%",  // Damla şekli
            }}
            animate={{ 
              y: [0, 15, 0], // Damlanın yavaşça düşmesi
              rotate: [0, Math.random() * 360, 0], // Yavaş dönüş
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {data.map((item, index) => (
        <ImageSection
          key={index}
          data={item}
          index={index}
          setActiveIndex={setActiveIndex}
          currentTitle={currentTitle}
        />
      ))}
    </div>
  );
};

const ImageSection = ({ data, index, setActiveIndex, currentTitle }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    let prevScroll = 0;
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > prevScroll && latest > 0.1) {
        setActiveIndex(index);
      } else if (latest < prevScroll && latest < 0.1) {
        if (index > 0) {
          setActiveIndex(index - 1);
        }
      }
      prevScroll = latest;
    });
    return () => unsubscribe();
  }, [scrollYProgress, index, setActiveIndex]);

  const initial = index === 0 ? { y: 100, opacity: 0 } : false;

  return (
    <div ref={sectionRef} className="h-screen flex items-center justify-center sticky top-[-20]">
      <motion.div
        className="w-full max-w-9xl mx-auto px-0 relative flex items-center justify-between"
        style={{ y, opacity }}
        initial={initial}
        transition={{
          y: { type: "spring", stiffness: 100, damping: 15 },
          opacity: { duration: 0.15, ease: "easeOut" },
        }}
      >
        {/* Görseli büyük yapıyoruz ve sola yerleştiriyoruz */}
        <img
          src={data.src}
          alt={data.title}
          className="w-[1100px] max-w-none rounded-lg shadow-lg"
        />
        
        {/* Sağda başlık ve metin */}
        <div className="ml-16 max-w-2/3">
          <motion.div
            className="text-8xl font-extrabold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {currentTitle}
          </motion.div>
          <p className="mt-6 text-3xl text-white w-2/3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Saepe architecto provident porro ipsa quo et rem quis repudiandae,
          minima fuga dolore natus temporibus vel enim voluptatibus reprehenderit ipsum sit molestiae?
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default StackedImages;

"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const items = [
  {
    title: "Image 1",
    src: "./assets/cocktails/BERGAMOTFIZZ.webp",
  },
  {
    title: "Image 2",
    src: "",
  },
  {
    title: "Image 3",
    src: "/images/my-image3.jpg",
  },
];

const data = [
  {
    title: "Image 1",
    src: "./assets/katman/2.png",
  },
  {
    title: "Image 3",
    src: "./assets/katman/4.png",
  },
  {
    title: "Image 4",
    src: "./assets/katman/5.png",
  },
  {
    title: "Image 4",
    src: "./assets/katman/6.png",
  },
  {
    title: "Image 4",
    src: "./assets/katman/7.png",
  },
  {
    title: "Image 4",
    src: "./assets/katman/8.png",
  },
  {
    title: "Image 4",
    src: "./assets/katman/layer8.png",
  },
];

const StackedImages = () => {
  const [currentTitle, setCurrentTitle] = useState("Image 1");
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setCurrentTitle(data[activeIndex].title);
  }, [activeIndex]);

  return (
    <div className="relative w-full" ref={containerRef}>
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
    <div ref={sectionRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        className="w-full max-w-4xl mx-auto px-5 relative"
        style={{
          y,
          opacity,
        }}
        initial={initial}
        transition={{
          y: { type: "spring", stiffness: 100, damping: 15 },
          opacity: { duration: 0.15, ease: "easeOut" },
        }}
>
  <img src={data.src} alt={data.title} className="w-full rounded-lg shadow-lg block" />
  <motion.div
    className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-2xl font-bold text-white z-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    key={currentTitle}
  >
    {currentTitle}
  </motion.div>
</motion.div>

    </div>
  );
};

export default StackedImages;

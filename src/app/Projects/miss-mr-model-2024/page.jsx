"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MissMrmodel = () => {
  const pathname = usePathname();

  return (
    <div className="mb-36 px-8 sm:px-8 md:px-12 max-w-screen-2xl mx-auto">
      <motion.p
        className="text-white text-center mb-4 mt-12 text-sm relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        002
        <span className="absolute left-1/2 -bottom-2 w-16 h-[1px] bg-white transform -translate-x-1/2"></span>
      </motion.p>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1
          className="text-white text-center mb-12 text-4xl md:text-5xl lg:text-6xl"
          style={{
            maxWidth: "1200px",
            fontFamily: "Salina-TrialLight, sans-serif",
          }}
        >
          PROVIDING A GLAMOROUS SETTING FOR A NIGHT FULL OF STYLE.
        </h1>
      </motion.div>

      <motion.p
        className="text-white text-center mb-4 mt-5 text-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        August 30th 2024
      </motion.p>

      <motion.div
        className="relative w-full h-[150px] sm:h-[400px] md:h-[500px] lg:h-[500px] mx-auto mb-16 rounded-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/assets/beachdetail1.webp"
          alt="Izmir Fashion Week"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between w-full mt-8">
        <motion.div
          className="w-full md:w-3/4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, delay: 0.3 }}
        >
          <div className="relative w-full h-[200px] sm:h-[200px] md:h-[500px] lg:h-[500px]">
            <Image
              src="/assets/beachdetail2.webp"
              alt="Izmir Fashion Week"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>

        <motion.div
          className="text-white w-full text-left mt-6 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <h1
            className="mb-6 text-2xl sm:text-3xl lg:text-4xl lg:w-4/5 lg:pl-20"
            style={{
              fontFamily: "Salina-TrialLight, sans-serif",
              lineHeight: "1.4",
            }}
          >
            Last summer, Fayn’99 Beach hosted the highly anticipated Miss & Mr.
            Model selection and the after-party, providing a glamorous setting
            for a night full of style and excitement.
          </h1>

          <p
            className="text-lg sm:text-xl leading-relaxed font-light lg:w-4/5 lg:pl-20"
            style={{ lineHeight: "1.4" }}
          >
            The event brought together models from all over, who competed for
            the prestigious title, while guests enjoyed a vibrant atmosphere
            with live entertainment, delicious cocktails, and unforgettable
            memories. The after-party at Fayn’99 Beach was the perfect
            conclusion to the evening, offering a dynamic mix of fashion, fun,
            and flair. With expert-crafted cocktails, lively conversations, and
            a lively crowd, Fayn’99 Beach once again proved to be the ultimate
            destination for unforgettable events.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="flex justify-center gap-6 mt-20 border-t-2 border-white pt-4 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link
          href="/Projects/izmire-fashion-week-2024/page-1"
          className={`text-white text-xl px-4 py-2 ${pathname.includes("page-1") || pathname === "/Projects/izmire-fashion-week-2024" ? "border-b-2 border-white" : ""}`}
        >
          1
        </Link>

        <Link
          href="/Projects/izmire-fashion-week-2024/page-2"
          className={`text-white text-2xl px-4 py-2 ${pathname.includes("page-2") ? "border-b-2 border-white" : ""}`}
        >
          2
        </Link>

        <Link
          href="/Projects/izmire-fashion-week-2024/page-3"
          className={`text-white text-xl px-4 py-2 ${pathname.includes("page-3") ? "border-b-2 border-white" : ""}`}
        >
          3
        </Link>
      </motion.div>
    </div>
  );
};

export default MissMrmodel;

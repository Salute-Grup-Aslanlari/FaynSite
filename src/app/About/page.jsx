"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

const logos = [
  "/assets/logos/absolut.webp",
  "/assets/logos/arkaslogo.webp",
  "/assets/logos/hendricksgin.webp",
  "/assets/logos/izmirfashionweek.webp",
  "/assets/logos/missmodel.webp",
  "/assets/logos/pernordricord.webp",
];

const AboutUs = () => {
  const [countries, setCountries] = useState(0);
  const [branches, setBranches] = useState(0);
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountries(prevCountries => prevCountries < 3 ? prevCountries + 1 : prevCountries);
      setBranches(prevBranches => prevBranches < 6 ? prevBranches + 1 : prevBranches);
      setCustomers(prevCustomers => prevCustomers < 1500 ? prevCustomers + 50 : prevCustomers);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-96">
      <div className="flex flex-col lg:flex-row justify-start w-full mt-0">
        <div className="w-full lg:w-full">
          <div className="relative w-full lg:h-[900px] sm:h-[100px]">
            <Image
              src="/assets/aboutus/aboutus1.webp"
              alt="About Us"
              layout="intrinsic"
              width={1600}
              height={900}
              objectFit="cover"
              objectPosition="center"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="text-white w-full lg:text-pretty mt-8 lg:mt-12 lg:ml-48 sm:ml-8 px-4 sm:px-8 lg:text-right">
          <motion.h1
            className="flex justify-center mb-4 text-2xl lg:text-4xl xl:text-8xl lg:pr-48 lg:mt-4 sm:mt-32 sm:w-full"
            style={{
              fontFamily: 'Salina-TrialLight, sans-serif',
              lineHeight: '1.4'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            ABOUT US
          </motion.h1>
          <motion.p
            className="justify-end sm:text-pretty sm:p-6 text-xl lg:text-3xl leading-relaxed font-light lg:w-3/4 sm:w-full lg:text-right"
            style={{ lineHeight: '1.6' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Fayn, located in the heart of the city, is a vibrant gathering place where guests can enjoy cocktails, cuisine,
            live music, and great company. With its chic decor, inviting ambiance, and attentive staff, Fayn is the ideal choice for both casual meetings and special celebrations.
          </motion.p>

          <div className="flex flex-wrap justify-center space-x-5 mt-12 px-4 sm:pl-20 lg:pr-60 text-center">
            <div>
              <motion.span
                className="text-4xl lg:text-6xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                {countries < 10 ? `0${countries}` : countries}
              </motion.span>
              <div className="text-sm lg:text-3xl">COUNTRIES</div>
            </div>
            <div>
              <motion.span
                className="text-4xl lg:text-6xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5 }}
              >
                {branches < 10 ? `0${branches}` : branches}
              </motion.span>
              <div className="text-sm lg:text-3xl">BRANCHES</div>
            </div>
            <div>
              <motion.span
                className="text-4xl lg:text-6xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
              >
                {customers.toLocaleString()}
              </motion.span>
              <div className="text-sm lg:text-3xl">CUSTOMERS</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-4 px-4 sm:px-0 lg:mt-24">
        <div className="w-full lg:w-1/2 flex flex-col items-center sm:items-start lg:pl-20">
          <motion.div
            className="text-white text-center sm:text-left mt-16 sm:mt-48"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <p 
            className="text-2xl sm:text-4xl lg:text-3xl leading-relaxed"
            style={{ lineHeight: '1.6' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
              
              Fayn is the perfect venue for both business gatherings and celebratory events.
              Its carefully curated menu showcases a fusion of global flavors,
              complemented by signature cocktails crafted with precision and dishes prepared using premium, fresh ingredients.
              <br></br>
              Fayn enhances the guest experience with dynamic live DJ performances,
              providing an engaging atmosphere that complements its premium offerings.
              Committed to excellence, Fayn strives daily to exceed expectations,
              ensuring every visit leaves a lasting impression and fosters memorable experiences.
              
            </p>
          </motion.div>

          <div className="relative w-full mt-36">
            <div className="absolute top-[-50px] left-0 text-left z-10">
              <motion.h2
                className="text-white text-sm sm:text-4xl"
                style={{ fontSize: "28px", fontFamily: 'Salina-TrialLight, sans-serif' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.8 }}
              >
                Our Collaborations
              </motion.h2>
            </div>
            <div className="overflow-hidden w-full">
              <motion.div
                className="flex space-x-16"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              >
                {[...logos, ...logos, ...logos].map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`Logo ${index + 1}`}
                    width={1200}
                    height={600}
                    className="w-20 h-16 lg:w-95 lg:h-20 mt-10 mb-20"
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-full flex justify-center sm:justify-end pl-0 sm:pl-36">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[800px] -top-30">
            <Image
              src="/assets/aboutus/aboutus2.webp"
              alt="Our Mission"
              layout="intrinsic"
              width={600}
              height={300}
              objectFit="cover"
              objectPosition="center"
              className="rounded-xl sm:mt-32 lg:mt-20"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-56 lg:mt-32 sm:mt-72 xl:mt-60 px-4 sm:px-8 lg:px-0">
        <div className="w-full lg:w-1/2 flex items-center lg:pr-20 justify-center lg:justify-end pl-4 lg:pl-36 relative">
          <div className="text-white text-center lg:text-left mb-20 lg:mb-60 relative z-10 top-8 lg:top-16">
            <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-32 h-32 sm:w-50 sm:h-60 lg:w-40 lg:h-40">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="w-full h-full"
              >
                <Image
                  src="/assets/aboutus/limon.png"
                  alt="Lemon Slice"
                  width={160}
                  height={160}
                  objectFit="contain"
                />
              </motion.div>
            </div>
            <motion.p
              className="sm:text-2xl w-[95%] max-w-4xl lg:text-3xl font-light mt-32 lg:mt-80 leading-relaxed"
              style={{ fontFamily: 'Source Sans 3, sans-serif', fontWeight: 100, lineHeight: '1.6'}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Our dedicated factory serves as the heart of our operation,
              where we produce the premium ingredients that define the food and cocktails served across all our branches.
              By creating our own ingredients, we ensure unmatched quality, consistency, and flavor in every dish and drink.
              This commitment to in-house production allows us to deliver a seamless and exceptional experience,
              uniting all our locations with the same standard of taste and excellence.
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end pl-0 lg:pl-36">
          <div className="relative w-full max-w-[800px] h-[300px] sm:h-[400px] lg:h-[500px]">
            <motion.h2
              className="text-white text-3xl sm:text-4xl lg:text-6xl absolute top-[20%] sm:top-[30%] left-1/2 lg:left-[-20%] transform -translate-x-1/2 -translate-y-1/2 
                z-20 p-4 sm:p-6 rounded-lg w-[95%] max-w-3xl leading-snug text-center lg:text-right"
              style={{ fontFamily: 'Salina-TrialLight, sans-serif', fontWeight: 400 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
            >
              AT FAYN, WE TAKE FAYN PRIDE IN CRAFTING THE BEST.
            </motion.h2>
            <Image
              src="/assets/aboutus/aboutus3.webp"
              alt="Factory Production"
              layout="intrinsic"
              width={900}
              height={600}
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

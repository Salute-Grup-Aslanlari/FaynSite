"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

const logos = [
  "/assets/logos/absolutlogo.webp",
  "/assets/logos/arkaslogo.webp",
  "/assets/logos/hendrickslogo.webp",
  "/assets/logos/izmirfashionlogo.webp",
  "/assets/logos/missmodellogo.webp",
  "/assets/logos/pernodlogo.webp",
];

const AboutUs = () => {
  const [countries, setCountries] = useState(0);
  const [branches, setBranches] = useState(0);
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countries < 3) setCountries(countries + 1);
      if (branches < 6) setBranches(branches + 1);
      if (customers < 1500) setCustomers(customers + 50);
    }, 60);

    return () => clearInterval(interval);
  }, [countries, branches, customers]);

  return (
    <div className="mb-96">
      <div className="flex flex-col lg:flex-row justify-start w-full mt-0">
        <div className="w-full lg:w-3/4">
          <div className="relative w-full h-[500px] lg:h-[700px]">
            <Image
              src="/assets/aboutus/aboutus1.webp"
              alt="About Us"
              layout="intrinsic"
              width={1200}
              height={500}
              objectFit="cover"
              objectPosition="center"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="text-white w-full text-right mt-8 lg:mt-0 lg:ml-8">
          <h1
            className="flex justify-end mb-8 text-2xl lg:text-4xl xl:text-8xl pr-80 mt-8"
            style={{
              fontFamily: 'Salina-TrialLight, sans-serif',
              lineHeight: '1.4'
            }}
          >
            ABOUT US
          </h1>
          <p
            className="flex justify-end text-xl lg:text-2xl leading-relaxed font-light w-3/4 text-right"
            style={{ lineHeight: '1.4' }}
          >
            Fayn, located in the heart of the city, is a vibrant gathering place where guests can enjoy cocktails, cuisine,
            live music, and great company. With its chic decor, inviting ambiance, and attentive staff, Fayn is the ideal choice for both casual meetings and special celebrations.
          </p>

          <div className="flex space-x-5 mt-16 pl-40 text-center">
            <div className="text-center">
              <span className="text-4xl lg:text-6xl">{countries < 10 ? `0${countries}` : countries}</span>
              <div className="text-sm lg:text-3xl">COUNTRIES</div>
            </div>
            <div className="text-center">
              <span className="text-4xl lg:text-6xl">{branches < 10 ? `0${branches}` : branches}</span>
              <div className="text-sm lg:text-3xl">BRANCHES</div>
            </div>
            <div className="text-center">
              <span className="text-4xl lg:text-6xl">{customers.toLocaleString()}</span>
              <div className="text-sm lg:text-3xl">CUSTOMERS</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-16">
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-20">
        <div className="text-white text-left mt-48 px-4 lg:px-0">
          <p className="text-4xl lg:text-2xl leading-relaxed">
            Fayn enhances the guest experience with dynamic live DJ performances, 
            providing an engaging atmosphere that complements its premium offerings.
            Committed to excellence, Fayn strives daily to exceed expectations, 
            ensuring every visit leaves a lasting impression and fosters memorable experiences.
            Fayn is the perfect venue for both business gatherings and celebratory events.
            Its carefully curated menu showcases a fusion of global flavors, 
            complemented by signature cocktails crafted with precision and dishes prepared using premium, fresh ingredients.
          </p>
        </div>
        <div className="w-full mt-28 overflow-hidden">
          <motion.div
            className="flex space-x-10"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            style={{ display: "flex", width: "200%" }}
          >
            {[...logos, ...logos, ...logos].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Logo ${index + 1}`}
                width={60}
                height={30}
                className="w-10 h-8 lg:w-32 lg:h-12"
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Sağ Taraf: Resim Alanı */}
      <div className="w-full lg:w-1/2 lg:mt-0 flex justify-end pl-36">
        <div className="relative w-full h-[400px] lg:h-[500px]">
          <Image
            src="/assets/aboutus/aboutus2.webp"
            alt="Our Mission"
            layout="intrinsic"
            width={600}
            height={300}
            objectFit="cover"
            objectPosition="center"
            className="rounded-xl mt-16"
          />
        </div>
      </div>
    </div>
      <div className="flex flex-col lg:flex-row mt-60">
  <div className="w-full lg:w-1/2 flex items-center lg:pr-20 justify-end pl-36 relative">
    <div className="text-white text-left mb-60 relative z-10 top-16">
    <div className="absolute -top-30 left-0 w-16 h-16 lg:w-40 lg:h-40 animate-spin-slow">
        <Image
          src="/assets/aboutus/limon.png"
          alt="Lemon Slice"
          width={160}
          height={160}
          objectFit="contain"
        />
      </div>
      <p
        className="text-3xl w-[95%] max-w-4xl lg:text-3xl xl:text-2xl leading-loose font-light mt-80"
        style={{
          fontFamily: 'Source Sans 3, sans-serif',
          fontWeight: 100
        }}
      >
        Our dedicated factory serves as the heart of our operation,
        where we produce the premium ingredients that define the food and cocktails served across all our branches.
        By creating our own ingredients, we ensure unmatched quality, consistency, and flavor in every dish and drink.
        This commitment to in-house production allows us to deliver a seamless and exceptional experience,
        uniting all our locations with the same standard of taste and excellence.
      </p>
    </div>
  </div>

  <div className="w-full lg:w-1/2 mt-8 lg:mt-0 justify-end pl-36">
    <div className="relative w-full h-[400px] lg:h-[500px]">
      <h2
        className="text-white text-4xl lg:text-6xl absolute top-[30%] -left-[25%] transform -translate-x-1/2 -translate-y-1/2 
          z-20 p-6 rounded-lg w-[95%] max-w-3xl leading-snug text-right"
        style={{ fontFamily: 'Salina-TrialLight, sans-serif', fontWeight: 400 }}
      >
        AT FAYN, WE TAKE FAYN PRIDE IN CRAFTING EXCELLENCE FROM THE GROUND UP.
      </h2>
      <Image
        src="/assets/aboutus/aboutus3.webp"
        alt="Our Team"
        layout="intrinsic"
        width={800}
        height={400}
        objectFit="cover"
        objectPosition="center"
        className="rounded-xl mt-4"
      />
    </div>
  </div>
</div>


    </div>
  );
};

export default AboutUs;

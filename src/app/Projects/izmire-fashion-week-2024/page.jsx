import React from 'react';
import Image from 'next/image';

const IzmirFashionWeek = () => {
  return (
    <div className="mb-48">
      <p className="text-white text-center mb-12 mt-10 text-sm">
        001
      </p>
      
      <div className="flex justify-center">
        <h1 className="text-white text-center mb-4 text-6xl" style={{ maxWidth: '1200px', fontFamily: 'Salina-TrialLight, sans-serif' }}>
            FAYN & IZMIR FASHION WEEK 2024, CELEBRATİNG FASHION AND FUN.
        </h1>
      </div>
      <p className="text-white text-center mb-4 mt-5 text-sm">
      August 30th 2024
      </p>
        <div className="relative w-2/3 h-[400px] mx-auto mb-16 rounded-xl overflow-hidden">
        <Image
            src="/assets/fashiondetail1.webp"
            alt="Izmir Fashion Week"
            layout="fill"
            objectFit="cover"
        />
        </div>

        <div className="flex justify-between w-full mt-8 xl:pl-72 lg:pl-64">
        <div className="w-3/4">
            <div className="relative w-5/6 h-[600px]">
            <Image
                src="/assets/fashiondetail2.webp"
                alt="Izmir Fashion Week"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
            />
            </div>
        </div>
        <div className="text-white w-full text-left mr-72">
        <h1
            className="mb-8 text-4xl lg:w-full xl:w-full"
            style={{
            fontFamily: 'Salina-TrialLight, sans-serif',
            lineHeight: '1.4'
            }}
        >
            Fayn Cocktails & More proudly sponsored İzmir Fashion Week 2024, celebrating creativity and style.
        </h1>
            <p 
          className="text-xl leading-relaxed font-light w-full" style={{ lineHeight: '1.4' }} >
            The event concluded with an unforgettable after-party at Fayn, where guests enjoyed signature cocktails,
            lively conversations, and captured memories in our vibrant atmosphere. 
            It was a night filled with fun, fashion, and flair, perfectly reflecting the spirit of Fayn. 
            Guests danced the night away, surrounded by a stunning blend of fashion and expertly crafted drinks. 
            The event marked just the beginning of Fayn’s continued commitment to bringing people together through unforgettable experiences. 
            Stay tuned for more events where we continue to mix creativity with community!
            </p>
        </div>
        </div>
    </div>
  );
};

export default IzmirFashionWeek;

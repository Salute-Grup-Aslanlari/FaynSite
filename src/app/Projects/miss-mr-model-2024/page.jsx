import React from 'react';
import Image from 'next/image';

const MissMrmodel = () => {
 return (
    <div className="mb-36">
      <p className="text-white text-center mb-12 mt-10 text-sm">
        002
      </p>
      
      <div className="flex justify-center">
        <h1 className="text-white text-center mb-6 text-6xl" style={{ maxWidth: '1200px', fontFamily: 'Salina-TrialLight, sans-serif' }}>
        PROVIDING A GLAMOURS SETTING FOR A NIGHT FULL OF STYLE.
        </h1>
      </div>
      <p className="text-white text-center mb-4 mt-5 text-sm">
      August 30th 2024
      </p>
        <div className="relative w-2/3 h-[400px] mx-auto mb-16 rounded-xl overflow-hidden">
        <Image
            src="/assets/beachdetail1.webp"
            alt="Izmir Fashion Week"
            layout="fill"
            objectFit="cover"
        />
        </div>

        <div className="flex justify-between w-full mt-8 xl:pl-72 lg:pl-64">
        <div className="w-3/4">
            <div className="relative w-5/6 h-[600px]">
            <Image
                src="/assets/beachdetail2.webp"
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
           Last summer, Fayn’99 Beach hosted the highly anticipated Miss & Mr. Model selection and the after-party, providing a glamorous setting for a night full of style and excitement.
        </h1>
            <p 
          className="text-xl leading-relaxed font-light w-full" style={{ lineHeight: '1.4' }} >
           The event brought together models from all over, who competed for the prestigious title, 
           while guests enjoyed a vibrant atmosphere with live entertainment, delicious cocktails, and unforgettable memories.
           The after-party at Fayn’99 Beach was the perfect conclusion to the evening, offering a dynamic mix of fashion, fun, and flair.
           With expert-crafted cocktails, lively conversations, and a lively crowd,
           Fayn’99 Beach once again proved to be the ultimate destination for unforgettable events.
            </p>
        </div>
        </div>
    </div>
  );
};

export default MissMrmodel;

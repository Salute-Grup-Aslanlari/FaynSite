import React from 'react';
import Image from 'next/image';

const CoctailMasterclass = () => {
  return (
     <div className="mb-48">
       <p className="text-white text-center mb-12 mt-10 text-sm">
         003
       </p>
       
       <div className="flex justify-center">
         <h1 className="text-white text-center mb-12 text-6xl" style={{ maxWidth: '1200px', fontFamily: 'Salina-TrialLight, sans-serif' }}>
         Fayn Cocktails & More recently hosted a series of exciting cocktail workshops
         </h1>
       </div>
       <p className="text-white text-center mb-4 mt-5 text-sm">
      August 30th 2024
      </p>
         <div className="relative w-2/3 h-[400px] mx-auto mb-16 rounded-xl overflow-hidden">
         <Image
             src="/assets/coctaildetail1.webp"
             alt="Izmir Fashion Week"
             layout="fill"
             objectFit="cover"
         />
         </div>
 
         <div className="flex justify-between w-full mt-8 xl:pl-72 lg:pl-64">
         <div className="w-3/4">
             <div className="relative w-5/6 h-[500px]">
             <Image
                 src="/assets/coctaildetail2.webp"
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
             Fayn Cocktails & More recently hosted a series of exciting cocktail workshops, led by the acclaimed bartender Çağatay Ercan
         </h1>
             <p 
           className="text-xl leading-relaxed font-light w-full" style={{ lineHeight: '1.4' }} >
            During these engaging sessions, participants had the opportunity to learn the fine art of cocktail making,
            from selecting premium ingredients to mastering the perfect mix.
            Çağatay’s expert guidance helped attendees refine their skills and craft their own signature drinks.
            The workshops were a great success, providing a fun and educational experience for cocktail enthusiasts of all levels. Fayn continues to offer unique opportunities like these, blending creativity with expert knowledge to elevate the cocktail experience.
             </p>
         </div>
         </div>
     </div>
   );
};

export default CoctailMasterclass;

'use client';
import Image from 'next/image';

const Whoweare = () => {
  return (
    <div className="flex justify-center items-start overflow-hidden">
      <Image 
        src="/assets/whoust.webp" 
        alt="Who we are"
        width={8600} 
        height={5000}
        className="object-cover w-[70%] h-full transform scale-110 mt-[-10%]"  // Görseli büyütme ve hizalama
        objectFit="contain"
      />
    </div>
  );
};

export default Whoweare;

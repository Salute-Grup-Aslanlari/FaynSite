'use client';
import Image from 'next/image';

const Whowearetwo = () => {
  return (
    <div className="flex justify-center items-start overflow-hidden">
      <Image 
        src="/assets/whoalt.webp" 
        alt="Who we are two"
        width={8600} 
        height={5000}
        className="object-cover w-[80%] h-full transform scale-70  mb-[120%] pl-14"
        objectFit="contain"
      />
    </div>
  );
};

export default Whowearetwo;

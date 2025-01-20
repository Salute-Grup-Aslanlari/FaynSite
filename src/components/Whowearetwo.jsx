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
        className="object-cover w-[70%] h-full transform scale-110 mb-[100%] pl-8"  // Görseli büyütme ve üst kısmı hizalama
        objectFit="contain"
      />
    </div>
  );
};

export default Whowearetwo;

'use client';
import Image from 'next/image';

const Whoweare = () => {
  return (
    <div className="relative mb-40 top-[-250px] flex flex-col items-center overflow-hidden">
      <Image 
        src="/assets/whowearee.webp" 
        alt="Who we are"
        width={5000} 
        height={4000}
        className="object-cover mb-16 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[33%] h-auto transform scale-110 mt-[50%]"
      />

      <div className="absolute top-[-80px] sm:top-[10px] md:top-[60px] lg:top-[400px] left-1/2 transform -translate-x-1/2 text-white text-2xl sm:text-2xl md:text-xl">
        WHO ARE WE
      </div>

      <div className="absolute top-[10px] sm:top-[10px] md:top-[2px] lg:top-[450px] left-1/2 transform -translate-x-1/2 w-[1px] h-20 sm:h-16 md:h-20 bg-white"></div>

      <div className="absolute top-[80px] sm:top-[30px] md:top-[200px] lg:top-[500px] left-1/2 transform -translate-x-1/2 text-white text-center px-16 sm:px-4 lg:px-8 py-28 rounded-md"
        style={{
            fontFamily: 'Salina-Book, sans-serif',
            fontSize: '0.1rem',
            whiteSpace: 'normal',
            overflow: 'visible',
            width: '40%',
            letterSpacing: '0.1em',
        }}
      >
        <p className="text-sm sm:text-xl md:text-sm lg:text-sm xl:text-5xl" style={{ lineHeight: '1.2' }}>
          FAYN, IS A VIBRANT GATHERING PLACE WHERE GUESTS
          (<span style={{ fontFamily: 'Salina-BookItalic, sans-serif' }}>bar</span>)
          (<span style={{ fontFamily: 'Salina-BookItalic, sans-serif', fontStyle: 'italic' }}>will</span>)
          CAN ENJOY COCKTAILS, CUISINE, LIVE MUSIC,
          AND GREAT COMPANY.
        </p>
      </div>

      <div className="flex flex-col items-center mt-2">
        <div className="w-[1px] h-[100px] sm:h-[150px] md:h-[80px] bg-white mb-4"></div>
        <h2 
            className="text-white text-lg sm:text-3xl md:text-4xl lg:text-7xl text-center mb-4" 
            style={{ fontFamily: 'Salina-BookItalic, sans-serif', fontStyle: 'italic' }}
        >
            We Are Fayn.
        </h2>
        <p 
            className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center px-8 mt-10 w-1/2" 
            style={{ maxWidth: '1500px', lineHeight: '1.5' }}
        > A destination where every detail is designed to inspire connection and enjoyment. 
            Here, exceptional cocktails, world-class cuisine, and live music come together to create 
            an atmosphere that’s as vibrant as the city itself. Whether you're here to celebrate, 
            unwind, or explore new flavors.
        </p>
      </div>
    </div>
  );
};

export default Whoweare;

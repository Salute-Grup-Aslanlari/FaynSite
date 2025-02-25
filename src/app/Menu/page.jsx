'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CocktailAnimation() {
  const liquidRef = useRef(null);
  const garnishRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(liquidRef.current, 
      { y: "100%" },
      { 
        y: "0%",
        duration: 3,
        ease: "power1.inOut"
      }
    );

    gsap.to(garnishRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, []);

  return (
    <div className="flex items-center justify-center w-11/12 h-screen">
      <div className="relative w-[90vh] h-[90vh] overflow-hidden">
        <div 
          className="cocktail-glass w-full h-full absolute bottom-0"
          style={{ backgroundImage: 'url(/assets/katman/katman1.webp)', backgroundSize: 'cover' }}
        ></div>

        <div 
          ref={liquidRef} 
          className="cocktail-liquid w-full h-full absolute bottom-0"
          style={{ backgroundImage: 'url(/assets/katman/katman2.webp)', backgroundSize: 'cover' }}
        ></div>

        <div 
          ref={garnishRef} 
          className="cocktail-garnish absolute top-[2%] w-full h-[200vh]"
          style={{ backgroundImage: 'url(/assets/katman/katman2.webp)', backgroundSize: 'cover' }}
        ></div>
      </div>

      <div className="ml-10 w-1/2">
        <h1 className="text-4xl font-bold text-gray-800">Lezzetli Kokteyl</h1>
        <p className="mt-4 text-lg text-gray-600">
          Bu eşsiz içecekle ferahlayın! Özel tarifimizle hazırlanan bu kokteyl, 
          damaklarınıza eşsiz bir tat sunacak.
        </p>
      </div>
    </div>
  );
}

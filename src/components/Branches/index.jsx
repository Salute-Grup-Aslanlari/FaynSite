import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useSwipeable } from 'react-swipeable';

const Branches = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useTranslation();
  if (!images || images.length === 0) {
    return <p className="text-center text-lg text-gray-600">No images available</p>;
  }

  const calculatePosition = (offset) => {
    const positions = {
      "-1": { x: window.innerWidth < 640 ? -50 : -200, y: 0, scale: 0.8, opacity: 0.7, zIndex: 0, rotate: -10 },
      "0": { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 2, rotate: 0 },
      "1": { x: window.innerWidth < 640 ? 50 : 200, y: 0, scale: 0.8, opacity: 0.7, zIndex: 0, rotate: 10 },
    };
    return positions[offset] || { x: 0, y: -500, scale: 0, opacity: 0, zIndex: -1, rotate: 0 };
  };
  

  const getVisibleImages = () => {
    if (!images || images.length === 0) return [];

    const visibleIndexes = [-1, 0, 1];
    return visibleIndexes.map(offset => {
      const index = (currentIndex + offset + images.length) % images.length;
      return {
        src: images[index]?.src || "",
        title: images[index]?.title || "",
        description: images[index]?.description || "",
        position: calculatePosition(offset.toString()),
        key: index
      };
    });
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  const visibleImages = getVisibleImages();
  const centerImage = visibleImages.find(img => img.position.zIndex === 2);

  return (
    <div {...swipeHandlers} className="flex flex-col items-center justify-center gap-6 sm:gap-8 mb-96 py-20 px-4 min-h-[350px] sm:min-h-[500px] md:min-h-[600px] bg-[#E4E0D8]">
      <div className="flex flex-col items-center mt-6 sm:mt-16">
        <h2 className="text-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: 'Salina-Book, sans-serif', fontStyle: 'italic' }}>{t('branches.title')}</h2>
      </div>
      <div className="flex items-center justify-center gap-1 sm:gap-8 md:gap-4 w-full max-w-[1600px] overflow-x-visible">

        <button 
          className="bg-white bg-opacity-80 rounded-full w-12 h-12 sm:w-14 sm:h-14 text-2xl sm:text-3xl flex items-center justify-center shadow-lg transform transition-all ease-in-out hover:bg-white hover:scale-110 active:scale-95"
          onClick={handlePrev}
        >
          &#8592;
        </button>

        <div className="relative w-full min-h-[300px] sm:min-h-[100px] md:min-h-[500px] flex justify-center items-center overflow-visible">
          <div className="w-1/2 h-full relative flex justify-center items-center transform-style-preserve-3d perspective-[1800px]">
            {visibleImages.map(({ src, position, key }) => (
           <motion.div
           key={key}
           className="absolute sm:max-w-full overflow-hidden flex items-center justify-center w-[70vw] sm:w-[20vw] md:w-[40vw] lg:w-[35vw] max-w-[900px] h-[300px] sm:h-[300px] md:h-[400px] will-change-transform transform-style-preserve-3d transform-origin-center-center backface-hidden"
           initial={false}
           animate={{
             x: position.x,
             y: position.y,
             scale: position.scale,
             opacity: position.opacity,
             zIndex: position.zIndex,
             rotate: position.rotate
           }}
           transition={{ duration: 0.2, ease: "easeInOut" }}
         >
         
                <img
                  src={src}
                  alt={`Slide ${key}`}
                  className="w-1/2 h-full object-contain rounded-lg shadow-lg pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <button 
          className="bg-white bg-opacity-80 rounded-full w-12 h-12 sm:w-14 sm:h-14 text-2xl sm:text-3xl flex items-center justify-center shadow-lg transform transition-all ease-in-out hover:bg-white hover:scale-110 active:scale-95"
          onClick={handleNext}
        >
          &#8594;
        </button>
      </div>

      {centerImage && (
        <div className="text-center mt-2 sm:mt-4 md:mt-6">
          <h3 className="text-black text-xl sm:text-3xl" style={{ fontFamily: 'Salina-Book, sans-serif' }}>{centerImage.title}</h3>
          {centerImage.description && (
            <p className="text-black text-md sm:text-xl mt-1 w-full px-4 sm:px-6 text-center">{centerImage.description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Branches;
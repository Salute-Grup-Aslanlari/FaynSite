import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const Branches = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useTranslation();
  if (!images || images.length === 0) {
    return <p className="text-center text-lg text-gray-600">No images available</p>;
  }

  const calculatePosition = (offset) => {
    const positions = {
      "-1": { x: -450, y: 0, scale: 0.8, opacity: 0.7, zIndex: 0, rotate: -10 },
      "0": { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 2, rotate: 0 },
      "1": { x: 450, y: 0, scale: 0.8, opacity: 0.7, zIndex: 0, rotate: 10 },
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

  const visibleImages = getVisibleImages();
  const centerImage = visibleImages.find(img => img.position.zIndex === 2);

  return (
    <div className="flex flex-col items-center justify-center gap-8 mb-96 py-20 px-8 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] bg-[#E4E0D8]">
      <div className="flex flex-col items-center mb-10 sm:mb-16">
        <h2 className="text-black text-4xl sm:text-3xl md:text-8xl" style={{ fontFamily: 'Salina-Book, sans-serif', fontStyle: 'italic' }}>{t('branches.title')}</h2>
      </div>
      <div className="flex items-center justify-center gap-2 sm:gap-4 w-full max-w-[1600px] overflow-x-visible">
        <button 
          className="bg-white bg-opacity-80 rounded-full w-10 h-10 sm:w-12 sm:h-12 text-xl sm:text-2xl flex items-center justify-center shadow-lg transform transition-all ease-in-out hover:bg-white hover:scale-110 active:scale-95"
          onClick={handlePrev}
        >
          &#8592;
        </button>

        <div className="relative w-full min-h-[250px] sm:min-h-[300px] md:min-h-[350px] flex justify-center items-center overflow-visible">
          <div className="w-full h-full relative flex justify-center items-center transform-style-preserve-3d perspective-[1800px]">
            {visibleImages.map(({ src, position, key }) => (
              <motion.div
                key={key}
                className="absolute flex items-center justify-center 
                w-[100vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] 
                max-w-[500px] h-[250px] sm:h-[300px] md:h-auto 
                will-change-transform transform-style-preserve-3d 
                transform-origin-center-center backface-hidden"
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
                  className="w-full h-full object-cover rounded-lg shadow-lg pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <button 
          className="bg-white bg-opacity-80 rounded-full w-10 h-10 sm:w-12 sm:h-12 text-xl sm:text-2xl flex items-center justify-center shadow-lg transform transition-all ease-in-out hover:bg-white hover:scale-110 active:scale-95"
          onClick={handleNext}
        >
          &#8594;
        </button>
      </div>

      {centerImage && (
        <div className="text-center mt-2 sm:mt-4 md:mt-6">
          <h3 className="text-black text-2xl sm:text-3xl" style={{ fontFamily: 'Salina-Book, sans-serif' }}>{centerImage.title}</h3>
          {centerImage.description && (
            <p className="text-black text-lg sm:text-xl mt-1 w-full px-4 sm:px-6 text-center">{centerImage.description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Branches;
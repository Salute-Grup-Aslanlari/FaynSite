/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";

const Branches = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  if (!images || images.length === 0) {
    return <p className="text-center text-lg text-gray-600">No images available</p>;
  }

  const calculatePosition = (offset) => {
    const positions = {
      "-1": { x: -350, y: 0, scale: 0.8, opacity: 0.7, zIndex: 0, rotate: -10 },
      "0": { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 2, rotate: 0 },
      "1": { x: 350, y: 0, scale: 0.8, opacity: 0.7, zIndex: 0, rotate: 10 },
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
    <div className="flex flex-col items-center justify-center gap-8 mb-36 py-2 px-4 min-h-[400px]">
      <div className="flex flex-col items-center mb-2">
        <h2 className="text-white text-4xl sm:text-2xl md:text-8xl" style={{ fontFamily: 'Salina-Book, sans-serif', fontStyle: 'italic' }}>BRANCHES</h2>
      </div>

      <div className="flex items-center justify-center gap-8 w-full max-w-[1300px]">
        <button 
          className="bg-white bg-opacity-80 rounded-full w-12 h-12 text-2xl flex items-center justify-center shadow-lg transform transition-all ease-in-out hover:bg-white hover:scale-110 active:scale-95"
          onClick={handlePrev}
        >
          &#8592;
        </button>

        <div className="relative w-full h-[400px] flex justify-center items-center overflow-visible">
          <div className="w-full h-full relative flex justify-center items-center transform-style-preserve-3d perspective-[1800px]">
            {visibleImages.map(({ src, position, key }) => (
              <motion.div
                key={key}
                className="absolute flex items-center justify-center w-[200px] sm:w-[350px] md:w-[500px] mb-[20px] sm:mb-[50px] md:mb-[10px] will-change-transform transform-style-preserve-3d transform-origin-center-center backface-hidden"
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
          className="bg-white bg-opacity-80 rounded-full w-12 h-12 text-2xl flex items-center justify-center shadow-lg transform transition-all ease-in-out hover:bg-white hover:scale-110 active:scale-95"
          onClick={handleNext}
        >
          &#8594;
        </button>
      </div>
      {centerImage && (
  <div className="text-center pt-[-10]">
    <h3 className="text-white text-xl" style={{ fontFamily: 'Salina-Book, sans-serif' }}>{centerImage.title}</h3>
    {centerImage.description && (
      <p className="text-white text-lg mt-1 w-full pl-[20px] text-center">{centerImage.description}</p>
    )}
  </div>
)}

    </div>
  );
};

export default Branches;

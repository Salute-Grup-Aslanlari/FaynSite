"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const cocktails = [
  { 
    id: 1, 
    name: "Margarita", 
    image1: "assets/cocktails/BERGAMOTFIZZ.webp", 
    image2: "assets/cocktails/CLEARTOUCH.webp", 
    recipe: "Lime suyu, tekila ve portakal likörü ile hazırlanır.", 
    ingredients: ["Tekila", "Lime", "Portakal Likörü", "Tuz"]
  },
  { 
    id: 2, 
    name: "Mojito", 
    image1: "/mojito1.jpg", 
    image2: "/mojito2.jpg", 
    recipe: "Beyaz rom, taze nane, lime ve soda ile hazırlanır.", 
    ingredients: ["Beyaz Rom", "Nane", "Lime", "Soda", "Şeker"]
  }
];

export default function CocktailGallery() {
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="grid grid-cols-2 gap-4">
        {cocktails.map((cocktail) => (
          <motion.div 
            key={cocktail.id} 
            whileHover={{ scale: 1.1 }} 
            className="cursor-pointer"
            onClick={() => setSelectedCocktail(cocktail)}
          >
            <img src={cocktail.image1} alt={cocktail.name} className="w-40 h-40 rounded-lg" />
          </motion.div>
        ))}
      </div>

      {selectedCocktail && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative flex justify-center items-center mt-8"
        >
          <motion.img 
            src={selectedCocktail.image1} 
            alt="İlk Görsel"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-48 h-48 rounded-lg shadow-lg"
          />
          <motion.img 
            src={selectedCocktail.image2} 
            alt="İkinci Görsel"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="w-48 h-48 rounded-lg shadow-lg ml-4"
          />
          
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-full mt-4 bg-white p-4 rounded-lg shadow-lg w-96"
          >
            <h2 className="text-lg font-bold">{selectedCocktail.name}</h2>
            <p className="mt-2 text-sm">{selectedCocktail.recipe}</p>
            <ul className="mt-2 text-sm list-disc list-inside">
              {selectedCocktail.ingredients.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

'use client';

import Card from '../index';

const CardWrapper = ({ cards = [] }) => {
  console.log(cards);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative top-[-50px] flex flex-col items-center">
        <div className="flex flex-col items-center mt-2">
          <div className="absolute top-[-100px] sm:top-[-50px] md:top-[10px] lg:top-[-20px] left-1/2 transform -translate-x-1/2 text-white text-2xl sm:text-2xl md:text-xl">
            STAY IN THE LOOP
          </div>
          <div className="w-[1px] h-[100px] sm:h-[150px] md:h-[100px] bg-white mb-4"></div>
          <h2
            className="text-white text-lg sm:text-3xl md:text-4xl lg:text-8xl text-center mb-4 font-salina"
          >
            NEWSLETTER
          </h2>
          <p
            className="text-white text-lg sm:text-xl md:text-xl lg:text-3xl text-center text-light px-8 mt-10 max-w-[1500px]"
          >
            Stay in the loop with the latest news, events, and exclusive updates from Fayn Cocktails & More.
            Discover what’s happening behind the bar and beyond as we continue to craft unforgettable experiences
            for our guests.
          </p>
        </div>
      </div>
      {cards.length > 0 ? (
        cards.map((card, index) => (
          <div key={index} className="mb-2 last:mb-0">
            <Card {...card} i={index} />
          </div>
        ))
      ) : (
        <p className="text-white">No cards available</p>
      )}
    </div>
  );
};

export default CardWrapper;

'use client';

import React, { useState } from "react";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-20 lg:pt-[80px] bg-[#E4E0D8]">
        <div className="container mx-auto px-0 max-w-full">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
            <h1 className="text-2xl text-black text-center mt-2 mb-28">OUR PRODUCT</h1>
            <div className="absolute top-[10px] sm:top-[10px] md:top-[2px] lg:top-[220px] left-1/2 transform -translate-x-1/2 w-[1px] h-20 sm:h-16 md:h-20 bg-black"></div>
              <div className="mx-auto mb-[10px] max-w-[510px] text-center">
                <span className="text-primary mb-6 block text-5xl mt-4 text-black" style={{ fontFamily: 'Salina-TrialLight, sans-serif' }}>
                  OUR <span className="text-black mt-4" style={{ fontFamily: 'Salina-BookItalic, sans-serif' }}>(finest)</span> DRINKS & DISHES FROM THE MENU
                </span>
                <p className="text-black text-body-color mt-6 dark:text-dark-6 text-3xl font-light">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-16 mt-10 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block bg-black text-white py-2 px-5 text-center transition-transform duration-300 ease-in-out hover:scale-105 md:py-3 lg:px-8 ${
                      showCard === "all" ? "activeClasses bg-primary text-white" : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    <p style={{ fontSize: "14px", fontFamily: "Source Sans 3, sans-serif", fontWeight: 100 }}>ALL</p>
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("foods")}
                    className={`inline-block bg-black py-2 text-white px-5 text-center transition-transform duration-300 ease-in-out hover:scale-105 md:py-3 lg:px-8 ${
                      showCard === "foods" ? "activeClasses bg-primary text-white" : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    <p style={{ fontSize: "14px", fontFamily: "Source Sans 3, sans-serif", fontWeight: 100 }}>DISHES</p>
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("cocktails")}
                    className={`bg-black inline-block py-2 px-5 text-center transition-transform duration-300 ease-in-out hover:scale-105 md:py-3 lg:px-8 ${
                      showCard === "cocktails" ? "activeClasses bg-primary text-white" : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary text-white hover:text-white"
                    }`}
                  >
                    <p style={{ fontSize: "14px", fontFamily: "Source Sans 3, sans-serif", fontWeight: 100 }}>COCKTAILS</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-0">
            <PortfolioCard
              ImageHref="/assets/cocktails/BERGAMOTFIZZ.webp"
              category="cocktails"
              title="Bergamot Fizz"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/assets/cocktails/CHOCOLATENEGRONI.webp"
              category="Cocktails"
              title="Chocolate Negroni"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/assets/cocktails/CLEARTOUCH.webp"
              category="Cocktails"
              title="Clear Touch"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/assets/cocktails/FAYNTHANKSANDYOU.webp"
              category="Cocktails"
              title="Fayn Thanks And You"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/assets/cocktails/FLORALZING.webp"
              category="Cocktails"
              title="Floral Zing"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/assets/cocktails/FUGUWILLBEFAYN.webp"
              category="Cocktails"
              title="Fugu Will Be Fayn"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/assets/cocktails/KALIPSO.webp"
              category="Cocktails"
              title="Kalipso"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/assets/cocktails/LIBIDO.webp"
              category="Cocktails"
              title="Libido"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/assets/cocktails/MANGOBLOSSOM.webp"
              category="Cocktails"
              title="Mango Blossom"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/assets/cocktails/PRETTYINGREEN.webp"
              category="Cocktails"
              title="Pretty In Green"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/assets/foods/ARTICHOKESEABASS.webp"
              category="foods"
              title="ARTICHOKESEABASS"
              description="SIGNATURE DISHES"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/assets/foods/BEEFKATSUVEGGIERICE.webp"
              category="foods"
              title="BEEFKATSUVEGGIERICE"
              description="SIGNATURE DISHES"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/assets/foods/CALIFORNIAROLL.webp"
              category="foods"
              title="CALIFORNIA ROLL"
              description="SIGNATURE DISHES"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/assets/foods/FARFROMHOME.webp"
              category="foods"
              title="FAR FROM HOME"
              description="SIGNATURE DISHES"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/assets/foods/OCTOPUSCORN.webp"
              category="foods"
              title="OCTOPUS CORN"
              description="SIGNATURE DISHES"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
             <PortfolioCard
              ImageHref="/assets/foods/CALIFORNIAROLL.webp"
              category="foods"
              title="CALIFORNIA ROLL"
              description="SIGNATURE DISHES"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/assets/foods/FARFROMHOME.webp"
              category="foods"
              title="FAR FROM HOME"
              description="SIGNATURE DISHES"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/assets/foods/OCTOPUSCORN.webp"
              category="foods"
              title="OCTOPUS CORN"
              description="SIGNATURE DISHES"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;


const PortfolioCard = ({ ImageHref, category, title, description, button, showCard }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => setIsOpen(true);
  const handleClosePopup = () => setIsOpen(false);

  return (
    <>
      <div
        className={`w-full md:w-1/2 xl:w-1/4 px-0 mx-0 ${showCard === "all" || showCard === category.toLowerCase() ? "block" : "hidden"}`}
      >
        <div className="card" onClick={handleOpenPopup}>
          <img src={ImageHref} alt={title} className="w-full h-full object-cover portfolio" />
          <div className="absolute top-0 left-0 p-4 text-white z-10">
            <p className="text-opacity-10" style={{ fontSize: "8px", fontFamily: 'Source Sans 3, sans-serif', fontWeight: 100 }}>
              {description}
            </p>
            <h3 className="text-md font-light" style={{ fontSize: "18px", fontFamily: 'Salina-TrialLight, sans-serif', weight: 400 }}>
              {title}
            </h3>
          </div>
        </div>

        {isOpen && (
          <div className="popup-overlay" onClick={handleClosePopup}>
            <div className="popup-content">
              <img src="/assets/tarif1.webp" className="popup-image left" />
              <img src="/assets/tarif2.webp" className="popup-image right" />
            </div>
          </div>
        )}
      </div>
   
      <style jsx>{`
      .cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
          .card {
        width: full;
        height: full;
        padding: 30px;
        cursor: pointer;
        text-align: center;
        padding: 0px;
        border-radius: 20px;
        transition: 0.6s;
      }
      .card:hover {
        transform: scale(1.05);
      }
      .popup-overlay {
      position: fixed;
      gap: 80px;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
    }
      .card {
          width: full;
          height: full;
          padding: 30px;
          cursor: pointer;
          text-align: center;
          padding: 0px;
          border-radius: 20px;
          transition: 0.6s;
        }

    .popup-content {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 80%;
      height: 400px;
      transform: scale(0.9);
      animation: popup-slide 0.5s forwards;
    }

    .left {
      width: 60%;
      transform: translateX(-100%) rotate(-10deg);
      animation: slide-left 0.9s forwards;
      z-index: 1; /* Keep the left image below */
    }

    .right {
      width: 30%;
      transform: translateX(100%) rotate(10deg);
      animation: slide-right 0.9s forwards;
      z-index: 2; /* Make the right image appear on top */
    }

    @keyframes slide-left {
      0% {
        transform: translateX(-100%) rotate(-10deg);
      }
      100% {
        transform: translateX(0) rotate(0deg);
      }
    }

    @keyframes slide-right {
      0% {
        transform: translateX(100%) rotate(10deg);
      }
      100% {
        transform: translateX(0) rotate(0deg);
      }
    }

    @keyframes popup-slide {
      0% {
        transform: scale(0.9);
      }
      100% {
        transform: scale(1);
      }
    }
`}</style>


    </>
  );
};





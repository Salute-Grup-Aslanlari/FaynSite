'use client';

import React, { useState } from "react";
import Image from 'next/image';

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
            <h1 className="text-2xl text-black text-center mt-4 mb-28">OUR PRODUCT</h1>
            <div className="absolute top-[210px] md:top-[90x] lg:top-[220px] left-1/2 transform -translate-x-1/2 w-[1px] h-20 sm:h-2 md:h-20 bg-black"></div>
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
            leftImage="/assets/popups/reyhankart1.webp"
            rightImage="/assets/popups/reyhankart2.webp"
          />

            <PortfolioCard
              ImageHref="/assets/cocktails/CHOCOLATENEGRONI.webp"
              category="Cocktails"
              title="Chocolate Negroni"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
              leftImage="/assets/popups/negronikart1.webp"
              rightImage="/assets/popups/negronikart2.webp"
            />
            <PortfolioCard
              ImageHref="/assets/cocktails/CLEARTOUCH.webp"
              category="Cocktails"
              title="Clear Touch"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
              leftImage="/assets/popups/cleartouchkart1.webp"
              rightImage="/assets/popups/cleartouchkart2.webp"
            />
            <PortfolioCard
              ImageHref="/assets/cocktails/FAYNTHANKSANDYOU.webp"
              category="Cocktails"
              title="Fayn Thanks And You"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
              leftImage="/assets/popups/faynthankskart1.webp"
              rightImage="/assets/popups/faynthankskart2.webp"
            />
            <PortfolioCard
              ImageHref="/assets/cocktails/FLORALZING.webp"
              category="Cocktails"
              title="Floral Zing"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
              leftImage="/assets/popups/floralzingkart1.webp"
              rightImage="/assets/popups/floralzingkart2.webp"
            />
            <PortfolioCard
              ImageHref="/assets/cocktails/FUGUWILLBEFAYN.webp"
              category="Cocktails"
              title="Fugu Will Be Fayn"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
              leftImage="/assets/popups/fugukart1.webp"
              rightImage="/assets/popups/fugukart2.webp"
            />
            <PortfolioCard
              ImageHref="/assets/cocktails/KALIPSO.webp"
              category="Cocktails"
              title="Kalipso"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
              leftImage="/assets/popups/kalipsokart1.webp"
              rightImage="/assets/popups/kalipsokart2.webp"
            />
            <PortfolioCard
              ImageHref="/assets/cocktails/LIBIDO.webp"
              category="Cocktails"
              title="Libido"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
              leftImage="/assets/popups/libidokart1.webp"
              rightImage="/assets/popups/libidokart2.webp"
            />
            <PortfolioCard
              ImageHref="/assets/cocktails/MANGOBLOSSOM.webp"
              category="Cocktails"
              title="Mango Blossom"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
              leftImage="/assets/popups/mangoblossomkart1.webp"
              rightImage="/assets/popups/mangoblossomkart2.webp"
            />
            <PortfolioCard
              ImageHref="/assets/cocktails/PRETTYINGREEN.webp"
              category="Cocktails"
              title="Pretty In Green"
              description="SIGNATURE COCKTAILS"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
              leftImage="/assets/popups/prettyingreenKART1.webp"
              rightImage="/assets/popups/prettyingreenKART2.webp"
            />
            <PortfolioCard
              ImageHref="/assets/foods/ARTICHOKESEABASS.webp"
              category="foods"
              title="ARTICHOKESEABASS"
              description="SIGNATURE DISHES"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
              leftImage="/assets/tarif1.webp"
              rightImage="/assets/tarif2.webp"
            />
            <PortfolioCard
              ImageHref="/assets/foods/BEEFKATSUVEGGIERICE.webp"
              category="foods"
              title="BEEFKATSUVEGGIERICE"
              description="SIGNATURE DISHES"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
              leftImage="/assets/tarif1.webp"
              rightImage="/assets/tarif2.webp"
            />
            <PortfolioCard
              ImageHref="/assets/foods/CALIFORNIAROLL.webp"
              category="foods"
              title="CALIFORNIA ROLL"
              description="SIGNATURE DISHES"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
              leftImage="/assets/tarif1.webp"
              rightImage="/assets/tarif2.webp"
            />
            <PortfolioCard
              ImageHref="/assets/foods/FARFROMHOME.webp"
              category="foods"
              title="FAR FROM HOME"
              description="SIGNATURE DISHES"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
              leftImage="/assets/tarif1.webp"
              rightImage="/assets/tarif2.webp"
            />
            <PortfolioCard
              ImageHref="/assets/foods/OCTOPUSCORN.webp"
              category="foods"
              title="OCTOPUS CORN"
              description="SIGNATURE DISHES"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
              leftImage="/assets/tarif1.webp"
              rightImage="/assets/tarif2.webp"
            />
             <PortfolioCard
              ImageHref="/assets/foods/CALIFORNIAROLL.webp"
              category="foods"
              title="CALIFORNIA ROLL"
              description="SIGNATURE DISHES"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
              leftImage="/assets/tarif1.webp"
              rightImage="/assets/tarif2.webp"
            />
            <PortfolioCard
              ImageHref="/assets/foods/FARFROMHOME.webp"
              category="foods"
              title="FAR FROM HOME"
              description="SIGNATURE DISHES"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
              leftImage="/assets/tarif1.webp"
              rightImage="/assets/tarif2.webp"
            />
            <PortfolioCard
              ImageHref="/assets/foods/OCTOPUSCORN.webp"
              category="foods"
              title="OCTOPUS CORN"
              description="SIGNATURE DISHES"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
              leftImage="/assets/tarif1.webp"
              rightImage="/assets/tarif2.webp"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;


const PortfolioCard = ({ ImageHref, category, title, description, button, showCard, leftImage, rightImage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => setIsOpen(true);
  const handleClosePopup = () => setIsOpen(false);

  return (
    <>
      <div
        className={`w-full md:w-1/2 xl:w-1/4 px-0 mx-0 ${showCard === "all" || showCard === category.toLowerCase() ? "block" : "hidden"}`}
      >
        <div className="card" onClick={handleOpenPopup}>
          <Image 
            src={ImageHref} 
            alt={title} 
            layout="responsive" 
            width={500} 
            height={500} 
            className="w-full h-full object-cover portfolio" 
          />
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
              <img 
                src={leftImage} 
                width={800} 
                height={500} 
                className="popup-image left" 
              />
              <img 
                src={rightImage} 
                width={800} 
                height={500} 
                className="popup-image right" 
              />
            </div>
          </div>
        )}
      </div>

      <style>{`
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
      width: 85%;
      height: 400px;
      transform: scale(0.9);
      animation: popup-slide 0.5s forwards;
    }

    .left {
      width: 60%;
      transform: translateX(-100%) rotate(-20deg);
      animation: slide-left 0.9s forwards;
      z-index: -1;
    }

    .right {
      width: 30%;
      transform: translateX(100%) rotate(-10deg);
      animation: slide-right 0.9s forwards;
      z-index: 2;
    }

    @keyframes slide-left {
      0% {
        transform: translateX(-130%) rotate(-10deg);
      }
      100% {
        transform: translateX(10%) rotate(0deg);
      }
    }

    @keyframes slide-right {
      0% {
        transform: translateX(100%) rotate(10deg);
      }
      100% {
        transform: translateX(-10%) rotate(0deg);
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

  @media (max-width: 768px) {
    .popup-content {
      display: flex;
      flex-direction: column;
      height: auto;
    }

    .left {
       width: 120%; /* Daha büyük bir değer ile dene */
    min-width: 127%; /* Genişliği gar anti altına al */
    margin-left: -60px; /* Sola kaydır */
      width: 180%; /* Sol popup'ı daha da büyüttük */
      transform: translateX(60px) rotate(15deg); /* Daha iyi hizalama için sola kaydırdık ve açıyı düzenledik */
      z-index: -1;
    }

    .right {
      width: 75%;
      transform: translateX(0) rotate(0deg);
      z-index: 1;
      margin-top: -70px;
    }
        @keyframes slide-left {
        0% {
          transform: translateX(-130%) rotate(0deg);
        }
        100% {
          transform: translateX(10%) rotate(0deg);
        }
      }

      @keyframes slide-right {
        0% {
          transform: translateX(100%) rotate(10deg);
        }
        100% {
          transform: translateX(25%) rotate(-0deg);
        }
      }
  }


`}</style>

    </>
  );
};






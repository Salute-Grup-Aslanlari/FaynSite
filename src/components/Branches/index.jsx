import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Branches() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const branchesData = [
    {
      src: "/assets/beachbranches.webp",
      title: "Fayn'99 Beach",
      description: "Alaçatı, 12015 SK NO: 1, 35450 Çeşme/İzmir",
    },
    {
      src: "/assets/faynalsancak1.webp",
      title: "Fayn Alsancak",
      description: "Kültür Mahallesi, Alsancak, Meksika sokağı No:11/B, 35220 İzmir",
    },
    {
      src: "/assets/bostanlibranches.webp",
      title: "Fayn Bostanlı",
      description: "Bostanlı, Cemal Gürsel Cd. NO: 534/D NO: 534/C, 35590 Karşıyaka/İzmir",
    },
  ];

  return (
    <div className="max-w-full mx-auto px-4 overflow-hidden my-56 pl-16 pr-16">
      <div className="text-center mb-20">
        <h2 className="text-7xl text-white uppercase font-italic">Branches</h2>
      </div>

      <Slider {...settings}>
        {branchesData.map((branch, index) => (
          <div
            key={index}
            className={`relative rounded-lg px-32 overflow-hidden shadow-lg mx-8 transition-all duration-300 transform
              ${index === 1  ? "scale-125" : index === 0 ? "-rotate-6" : "rotate-6"}`}
          >
            <img
              src={branch.src}
              alt={branch.title}
              className="w-full h-auto object-cover rounded-3xl transition-all duration-500 ease-in-out"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl text-white font-italic">{branch.title}</h3>
              <p className="text-sm text-white">{branch.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Branches;

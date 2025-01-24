import { useState, useEffect } from 'react';
import Image from 'next/image';

const CapabilityCards = () => {
  const cards = [
    {
      title: 'Strategy',
      letter: 's',
      list: [
        'Experience Strategy',
        'Technology Strategy',
        'Creative Direction',
        'Discovery',
        'Research',
      ],
      imageSrc: '/assets/flavor.jpg',
    },
    {
      title: 'Creative',
      letter: 'c',
      list: [
        'Art Direction',
        'UX/UI Design',
        'Motion Design',
        'Game Design',
        'Illustration',
      ],
      imageSrc: '/assets/flavor.jpg',
    },
    {
      title: 'Tech',
      letter: 't',
      list: [
        'WebGL Development',
        'Web Development',
        'Unity/Unreal',
        'Interactive Installations',
        'VR/AR',
      ],
      imageSrc: '/assets/flavor.jpg',
    },
    {
      title: 'Production',
      letter: 'p',
      list: [
        'Procedural Modeling',
        '3D Asset Creation',
        '3D Asset Optimization',
        'Animation',
        '3D Pipeline',
      ],
      imageSrc: '/assets/flavor.jpg',
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="about-capability-cards-wrapper" style={{ perspective: '1000px' }}>
      <div id="about-capability-cards" style={{ position: 'relative', height: '500px' }}>
        {cards.map((card, index) => {
          const rotateValue = Math.min(1280, scrollPosition - index * 200); // Dönüş açısını hesapla
          const opacity = scrollPosition > index * 200 ? 1 : 0; // Görünürlük ayarı

          return (
            <div
              key={index}
              className="about-capability-card"
              style={{
                transform: `rotateY(${rotateValue}deg) translateZ(${opacity ? '0' : '-200px'})`,
                opacity: opacity,
                transition: 'transform 0.8s ease, opacity 0.8s ease',
                position: 'absolute',
                top: 0,
                left: `${index * 25}%`,
              }}
            >
              <div className="about-capability-card-front">
                <div className="about-capability-card-header">
                  <p className="about-capability-card-header-text">{card.title}</p>
                  <div className="about-capability-card-header-letter">{card.letter}</div>
                </div>
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  width={600}
                  height={400}
                  style={{ borderRadius: '10px', marginBottom: '10px' }}
                />
                <ul className="about-capability-list">
                  {card.list.map((item, idx) => (
                    <li className="about-capability-list-item" key={idx}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="about-capability-card-back" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CapabilityCards;

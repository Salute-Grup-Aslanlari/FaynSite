'use client';
import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default function Home() {
  const { t } = useTranslation();
  const phrase = t('weAreFaynDescription');
  let refs = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "top 30%",
        end: `+=${window.innerHeight / 3}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.5,
    });
  };

  const splitWords = (phrase) => {
    return phrase.split(" ").map((word, i) => (
      <span key={word + "_" + i} className="mr-6">
        {splitLetters(word)}
      </span>
    ));
  };

  const splitLetters = (word) => {
    return word.split("").map((letter, i) => (
      <span
        key={letter + "_" + i}
        ref={(el) => {
          refs.current.push(el);
        }}
        className="opacity-20"
      >
        {letter}
      </span>
    ));
  };

  return (
    <main
      ref={container}
      className="flex items-center justify-center h-[900px] mt-[10vh] text-gray-300"
    >
      <div className="w-4/5 flex flex-wrap justify-center text-6xl text-center">
        {splitWords(phrase)}
      </div>
    </main>
  );
}

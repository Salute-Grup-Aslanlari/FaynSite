'use client';
import { useState, useEffect } from 'react';
import { locations } from "../../data";
import { useTranslation } from 'react-i18next';

export default function LocationsPage() {
   const { t } = useTranslation();
  const [selectedBranch, setSelectedBranch] = useState(locations[0]);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey(prevKey => prevKey + 1);
  }, [selectedBranch]);

  const translatedBranch = {
    name: t(`location.branch_${selectedBranch.id}.name`),
    location: t(`location.branch_${selectedBranch.id}.location`),
    description: t(`location.branch_${selectedBranch.id}.description`),
    reservation: t(`location.branch_${selectedBranch.id}.reservation`),
  };
  

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row mt-20 h-auto text-white">
        <div className="w-full md:w-1/3 p-4 md:p-10 border-b md:border-b-0 md:border-r">
          <h1
            className="text-white text-center mt-1 mb-20 md:text-5xl opacity-0 animate-fade-in"
            style={{ fontFamily: 'Salina-TrialLight, sans-serif', lineHeight: '1.4'}}
          >
            {t('location.title')}
          </h1>
          <ul>
            {locations.map((branch) => (
              <li
                key={branch.id}
                className="cursor-pointer pl-12 font-bold p-4 text-xl md:text-5xl transition-all duration-300 ease-in-out hover:translate-x-3 hover:text-yellow-300 animate-fade-in"
                onClick={() => setSelectedBranch(branch)}
              >
                {branch.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-full p-4 md:p-14 flex flex-col md:flex-row gap-36 ml-auto mr-0 justify-end">
          <div
            className="w-full md:w-1/3 sm:w-[500px] transition-all duration-500 ease-in-out hover:scale-105"
            key={animationKey}
          >
            <img
              src={selectedBranch.image}
              alt={selectedBranch.name}
              className="w-full h-auto md:h-[700px] object-cover rounded-2xl animate-slide-in"
            />
          </div>
          <div className="w-3/4 md:w-1/2 flex flex-col mb-8 animate-slide-in">
            <div className="mb-8">
              <p className="text-lg md:text-xl font-extralight opacity-0 animate-fade-in">{selectedBranch.location}</p>
              <h2
                className="text-3xl md:text-3xl mb-14 opacity-0 animate-fade-in"
                style={{ fontFamily: 'Salina-BookItalic, sans-serif' }}
              >
                {selectedBranch.name}
              </h2>
              <p className="text-md md:text-lg font-extralight mb-4 opacity-0 animate-fade-in">{selectedBranch.description}</p>
              <p className="text-md md:text-xl font-extralight mb-2 opacity-0 animate-fade-in">
                <span className="font-bold">{t('location.reservation')}:</span> {selectedBranch.reservation}
              </p>
              <p className="text-md md:text-xl font-extralight opacity-0 animate-fade-in">{selectedBranch.web}</p>
            </div>

            <div className="w-2/3">
              <iframe
                src={selectedBranch.mapUrl}
                className="rounded-lg w-full h-64 md:h-[400px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';

const branches = [
  {
    id: 1,
    name: 'FAYN ALSANCAK',
    location: 'ALSANCAK',
    image: '/assets/locations/faynals.webp',
    reservation: '0 501 152 60 14',
    web: 'iamfayn.com/alsancak',
    description: 'Enjoy our signature cocktails at our Alsancak branch.',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.526640241342!2d27.1375635!3d38.432206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd98b721b12fb%3A0x71c07ada9638cd7c!2sFayn%20Cocktails%20%26%20More!5e0!3m2!1str!2str!4v1706789209001!5m2!1str!2str',
  },
  {
    id: 2,
    name: 'FAYN BOSTANLI',
    location: 'BOSTANLI',
    reservation: '0 501 152 60 14',
    web: 'iamfayn.com/alsancak',
    image: '/assets/locations/faynals.webp',
    description: 'Enjoy our signature cocktails at our Bostanlı branch.',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.1627775191215!2d27.092747!3d38.4585162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9a9894b33dd%3A0xa521bda2efb4b453!2sFayn%20Bostanl%C4%B1!5e0!3m2!1str!2str!4v1706790201234!5m2!1str!2str',
  },
  {
    id: 3,
    name: 'FAYN ALAÇATI',
    location: 'ALAÇATI',
    reservation: '0 501 152 60 14',
    web: 'iamfayn.com/alsancak',
    image: '/assets/locations/faynals.webp',
    description: 'Experience the vibrant atmosphere of our Alaçatı branch.',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.133564289737!2d26.3720333!3d38.2821877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb79c3a9f8f27f%3A0x387d559611810001!2sFayn%20Ala%C3%A7at%C4%B1!5e0!3m2!1str!2str!4v1706790456789!5m2!1str!2str',
  },  
  {
    id: 4,
    name: 'FAYN’99',
    location: 'MARINA',
    reservation: '0 501 152 60 14',
    web: 'iamfayn.com/alsancak',
    image: '/assets/locations/faynals.webp',
    description: 'Enjoy the unique ambiance of FAYN’99 by the marina.',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.9829485953016!2d26.3334085!3d38.282252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb7f9ffa87019f%3A0x57d377a394b74b4e!2sFayn%E2%80%9999!5e0!3m2!1str!2str!4v1706791289876!5m2!1str!2str',
  },
  {
    id: 5,
    name: 'FAYN DOHA',
    location: 'DOHA',
    image: '/assets/locations/faynals.webp',
    reservation: '0 501 152 60 14',
    web: 'iamfayn.com/alsancak',
    description: 'Our Doha branch offers premium services.',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.010539651544!2d51.5274876!3d25.3504423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c3003205cbb1%3A0x560f877d61abce2d!2sThe%20Barn%20Doha!5e0!3m2!1sen!2str!4v1700000000000',
  },
];

export default function LocationsPage() {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  return (
    <div className="flex flex-col md:flex-row mt-8 h-auto md:h-screen text-white">
      <div className="w-full md:w-1/3 p-4 md:p-10 border-b md:border-b-0 md:border-r">
        <h2 className="mb-6 text-3xl md:text-4xl" style={{ fontFamily: 'Salina-TrialLight, sans-serif' }}>
          OUR LOCATIONS
        </h2>
        <ul>
          {branches.map((branch) => (
            <li
              key={branch.id}
              className={`cursor-pointer p-4 text-xl md:text-3xl ${
                selectedBranch.id === branch.id ? 'border-b border-white' : ''
              }`}
              onClick={() => setSelectedBranch(branch)}
            >
              {branch.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-2/3 p-4 md:p-14 flex flex-col">
        <img
          src={selectedBranch.image}
          alt={selectedBranch.name}
          className="w-full h-48 md:h-64 object-cover rounded-lg mb-4"
        />

        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 p-4">
            <p className="text-lg md:text-1xl font-extralight mb-2">{selectedBranch.location}</p>
            <h2 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: 'Salina-BookItalic, sans-serif' }}>
              {selectedBranch.name}
            </h2>
            <p className="text-md md:text-lg font-extralight mb-4">{selectedBranch.description}</p>
            <p className="text-md md:text-xl font-extralight mb-4">
              <span className="font-bold">Reservation:</span> {selectedBranch.reservation}
            </p>
            <p className="text-md md:text-xl font-extralight">{selectedBranch.web}</p>
          </div>
          <div className="w-full md:w-1/2 p-4 rounded-lg">
            <iframe
              src={selectedBranch.mapUrl}
              className="rounded-lg"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

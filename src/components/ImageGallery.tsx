import React from 'react';

const images = [
  {
    url: "/src/components/images/pic1.png",
    alt: "Heart shaped hands"
  },
  {
    url: "/src/components/images/pic2.png",
    alt: "Love letters"
  },
  {
    url: "/src/components/images/pic3.png",
    alt: "Heart in nature"
  },
  {
    url: "/src/components/images/pic4.png",
    alt: "Red roses"
  },
  {
    url: "/src/components/images/pic5.png",
    alt: "Love decoration"
  }
];

export function ImageGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <img
            src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
            alt={image.alt}
            className="w-full h-64 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
}
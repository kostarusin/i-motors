import { useState, useEffect } from 'react';
import Image from 'next/image';

const images: string[] = [
  '/motor-2595269.jpg',
  '/transport-3175766.jpg',
  '/tuv-3206059.jpg',
  '/imotors.jpg',
];

const SlideshowTwo: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      {images.map((src: string, index: number) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Slideshow image ${index + 1}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            style={{ objectFit: 'cover' }}
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default SlideshowTwo;

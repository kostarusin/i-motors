import { useState, useEffect } from 'react';
import Image from 'next/image';

const images: string[] = [
  '/antique-car-4804725.jpg',
  '/auto-repair-shop-1954636.jpg',
  '/transport-3175766.jpg',
];

const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Auto change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="absolute inset-0 z-0">
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
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;

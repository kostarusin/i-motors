import Image from 'next/image';

const images: string[] = [
  '/auto-repair-shop-1954636.jpg',
  '/antique-car-4804725.jpg',
  '/automobile-3230876.jpg',
  '/workshop-97.jpg',
];

const HomePageImages: React.FC = () => {
  return (
    <>
      {images.map((src: string, index: number) => (
        <div key={index} className="relative w-80 h-72">
          {' '}
          {/* Adjust height as needed */}
          <Image
            src={src}
            alt={`Slideshow image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-xl"
          />
        </div>
      ))}
    </>
  );
};

export default HomePageImages;

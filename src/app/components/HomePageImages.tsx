import Image from 'next/image';

const images: string[] = [
  '/auto-repair-shop-1954636.jpg',
  '/antique-car-4804725.jpg',
  '/automobile-3230876.jpg',
  '/workshop-97.jpg',
  '/tuv-3206059.jpg',
];

const HomePageImages: React.FC = () => {
  return (
    <div className="relative mx-auto flex gap-10 max-w-7xl h-full lg:px-8">
      {images.map((src: string, index: number) => (
        <div key={index} className="relative w-56 h-56">
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
    </div>
  );
};

export default HomePageImages;

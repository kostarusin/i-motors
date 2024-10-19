import Image from 'next/image';

const images: string[] = [
  '/auto-repair-shop-1954636.jpg',
  '/antique-car-4804725.jpg',
  '/automobile-3230876.jpg',
  '/workshop-97.jpg',
  '/motor-2595269.jpg',
  '/transport-3175766.jpg',
  '/tuv-3206059.jpg',
  '/imotors.jpg',
];

const HomePageImages: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {images.map((src: string, index: number) => (
        <div key={index} className="relative w-full h-72">
          <Image
            src={src}
            alt={`Slideshow image ${index + 1}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-xl shadow-xl"
          />
        </div>
      ))}
    </div>
  );
};

export default HomePageImages;

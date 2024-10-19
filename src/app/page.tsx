import CardHomepage from './components/CardHomepage';
import HomePageImages from './components/HomePageImages';
import Image from 'next/image';
import {
  WrenchScrewdriverIcon,
  WrenchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <main className="flex-grow">
      <div
        className="relative isolate px-6 lg:px-8 "
        style={{
          backgroundImage: "url('/imotors.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-65 z-10"></div>{' '}
        <div className="relative z-20 flex flex-col items-center justify-center pt-32 sm:h-full">
          <div className="px-6 lg:px-8 text-center">
            <div className="flex justify-center">
              <Image
                src="/herologo.png"
                alt="Logo"
                width={100}
                height={100}
                className="w-10 h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24"
              />
              <h1 className="text-4xl pl-2 md:pl-8 font-bold tracking-tight text-gray-200 sm:text-6xl lg:text-8xl">
                i-motors
              </h1>
            </div>
            <h2 className="pt-4 text-2xl font-bold tracking-tight text-gray-200 sm:text-4xl">
              Mietwerkstatt & Autoteile
            </h2>
            <p className="mt-6 text-2xl leading-8 text-green-500">
              Alles für dein Auto in Stadt Recklinghausen - Mietwerkstatt,
              Werkzeuge, Teile, und aus einer Hand!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#information"
                className="text-lg font-bold leading-6 text-yellow-400 transition-all duration-500
                   hover:text-green-300 hover:transition-all ease-in-out hover:duration-300"
              >
                Erfahren mehr <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section
        id="information"
        className="bg-gray-200 py-12 px-6 flex flex-col gap-8 lg:flex-row lg:gap-4"
      >
        <CardHomepage />
      </section>
      <section className="bg-gray-200 pb-12 px-6 flex justify-center">
        <div className=" w-full">
          <HomePageImages />
        </div>
      </section>
    </main>
  );
}

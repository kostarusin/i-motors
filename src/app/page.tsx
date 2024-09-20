'use client';
import Slideshow from './components/HomepageSlideshow';
import SearchInput from './components/SearchInput';
import ImageHomepageSection from './components/HomePageImages';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex-grow">
      <div className="relative h-screen w-full">
        <Slideshow />
        <div className="absolute inset-0 bg-black opacity-65 z-10"></div>{' '}
        <div className="relative z-20 flex flex-col items-center justify-center h-full">
          <div className="px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold italic tracking-tight text-gray-200 sm:text-8xl">
              I-MOTORS
            </h1>
            <p className="pt-4 text-2xl font-bold tracking-tight text-gray-200 sm:text-4xl">
              Mietwerkstatt & Autoteile
            </p>
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
      <section className="bg-gray-200 py-16 grid gap-16 ">
        <ImageHomepageSection />
      </section>
      <section
        id="information"
        className="bg-gray-200 py-12 px-6 flex flex-col gap-4 lg:flex-row lg:gap-4"
      >
        {/* Mietwerkstatt */}
        <div className="flex-1 max-w-full mx-auto">
          <div className="bg-white p-4 rounded-xl shadow-xl h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-center text-gray-800">
                Mietwerkstatt
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                I-MOTORS bietet dir alles, was du für dein Auto brauchst, aus
                einer Hand. Egal ob Mietwerkstatt, Autoteile oder Werkzeuge, wir
                haben alles, um dein Auto in Schuss zu halten.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Sehr bequeme Arbeitszeiten: Montag bis Freitag von 9 bis 19 Uhr
                und samstags von 9 bis 15 Uhr. Du kannst eine Hebebühne mit oder
                ohne Werkzeuge für den ganzen Tag oder auch nur für eine Stunde
                mieten.
              </p>
            </div>
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

        {/* Autoteile */}
        <div className="flex-1 max-w-full mx-auto">
          <div className="bg-white p-4 rounded-xl shadow-xl h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-center text-gray-800">
                Autoteile
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                I-MOTORS bietet dir alles, was du für dein Auto brauchst, aus
                einer Hand. Egal ob Mietwerkstatt, Autoteile oder Werkzeuge, wir
                haben alles, um dein Auto in Schuss zu halten.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Sehr bequeme Arbeitszeiten: Montag bis Freitag von 9 bis 19 Uhr
                und samstags von 9 bis 15 Uhr. Du kannst eine Hebebühne mit oder
                ohne Werkzeuge für den ganzen Tag oder auch nur für eine Stunde
                mieten. Sehr bequeme Arbeitszeiten: Montag bis Freitag von 9 bis
                19 Uhr und samstags von 9 bis 15 Uhr. Du kannst eine Hebebühne
                mit oder ohne Werkzeuge für den ganzen Tag oder auch nur für
                eine Stunde mieten. Sehr bequeme Arbeitszeiten: Montag bis
                Freitag von 9 bis 19 Uhr und samstags von 9 bis 15 Uhr. Du
                kannst eine Hebebühne mit oder ohne Werkzeuge für den ganzen Tag
                oder auch nur für eine Stunde mieten.
              </p>
            </div>
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
        {/* Extra */}
        <div className="flex-1 max-w-full mx-auto">
          <div className="bg-white p-4 rounded-xl shadow-xl h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-center text-gray-800">
                Extra
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                I-MOTORS bietet dir alles, was du für dein Auto brauchst, aus
                einer Hand. Egal ob Mietwerkstatt, Autoteile oder Werkzeuge, wir
                haben alles, um dein Auto in Schuss zu halten.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Sehr bequeme Arbeitszeiten: Montag bis Freitag von 9 bis 19 Uhr
                und samstags von 9 bis 15 Uhr. Du kannst eine Hebebühne mit oder
                ohne Werkzeuge für den ganzen Tag oder auch nur für eine Stunde
                mieten. Sehr bequeme Arbeitszeiten: Montag bis Freitag von 9 bis
                19 Uhr und samstags von 9 bis 15 Uhr. Du kannst eine Hebebühne
                mit oder ohne Werkzeuge für den ganzen Tag oder auch nur für
                eine Stunde mieten. Sehr bequeme Arbeitszeiten: Montag bis
                Freitag von 9 bis 19 Uhr und samstags von 9 bis 15 Uhr. Du
                kannst eine Hebebühne mit oder ohne Werkzeuge für den ganzen Tag
                oder auch nur für eine Stunde mieten.
              </p>
            </div>
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
      </section>
      <section className="bg-gray-200 py-16 grid gap-16 ">
        <ImageHomepageSection />
      </section>
    </main>
  );
}

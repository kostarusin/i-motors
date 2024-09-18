'use client';
import Slideshow from './components/Slideshow';
import SearchInput from './components/SearchInput';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex-grow scroll-smooth">
      <div className="relative h-screen w-full">
        <Slideshow />
        <div className="absolute inset-0 bg-black opacity-65 z-10"></div>{' '}
        <div className="relative z-20 flex flex-col items-center justify-center h-full">
          <div className="px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
              I-MOTORS
            </h1>
            <p className="pt-4 text-2xl font-bold tracking-tight text-gray-200 sm:text-4xl">
              Mietwerkstatt & Autoteile
            </p>
            <p className="mt-6 text-xl leading-8 text-green-500">
              Alles für dein Auto - Mietwerkstatt, Werkzeuge, Teile, und aus
              einer Hand!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#information"
                className="text-sm font-semibold leading-6 text-gray-300 transition-all duration-500
                   hover:text-green-300 hover:transition-all ease-in-out hover:duration-300"
              >
                Erfahren mehr <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section id="information" className="bg-gray-200 py-16 grid gap-16 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-4 rounded-xl shadow-xl">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
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
                mieten. Wir bieten dir Reifenmontage-Ausrüstung, Druckluft und
                vieles mehr. Egal, welche schwere Aufgabe an deinem Auto ansteht
                – wir haben das passende Werkzeug. Ob Ölwechsel oder Reparatur
                von Motor und Getriebe, bei uns kannst du alles selbst
                erledigen.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#information"
                  className="text-sm font-semibold leading-6 text-gray-300 transition-all duration-500
                     hover:text-green-300 hover:transition-all ease-in-out hover:duration-300"
                >
                  Für Preise und Bedingungen hier klicken{' '}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-4 rounded-xl shadow-xl">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Autoteile</h2>
              <p className="mt-4 text-lg text-gray-600">
                I-MOTORS bietet dir alles, was du für dein Auto brauchst, aus
                einer Hand. Egal ob Mietwerkstatt, Autoteile oder Werkzeuge, wir
                haben alles, um dein Auto in Schuss zu halten.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Sehr bequeme Arbeitszeiten: Montag bis Freitag von 9 bis 19 Uhr
                und samstags von 9 bis 15 Uhr. Du kannst eine Hebebühne mit oder
                ohne Werkzeuge für den ganzen Tag oder auch nur für eine Stunde
                mieten. Wir bieten dir Reifenmontage-Ausrüstung, Druckluft und
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#information"
                  className="text-sm font-semibold leading-6 text-gray-300 transition-all duration-500
                     hover:text-green-300 hover:transition-all ease-in-out hover:duration-300"
                >
                  Für Preise und Bedingungen hier klicken{' '}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="information" className="bg-gray-200 py-16 grid gap-16 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex gap-10">
          <div>
            <Image
              src={'/auto-repair-shop-1954636.jpg'}
              alt={`Slideshow image`}
              width={180}
              height={180}
              className="w-full h-full"
            />
          </div>
          <div>
            <Image
              src={'/antique-car-4804725.jpg'}
              alt={`Slideshow image`}
              width={180}
              height={180}
              className="w-full h-full"
            />
          </div>
          <div>
            <Image
              src={'/transport-3175766.jpg'}
              alt={`Slideshow image`}
              width={180}
              height={180}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

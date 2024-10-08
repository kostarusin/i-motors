'use client';
import SlideshowOne from '../components/SlideshowOne';
import SlideshowTwo from '../components/SlideshowTwo';

export default function Rental() {
  return (
    <main>
      {/* Main Section with Slideshow and Info */}
      <section className="relative w-full min-h-screen bg-white">
        <div className="flex flex-col lg:flex-row items-start justify-between h-full">
          {/* Slideshow Section (50%) */}
          <div className=" hidden w-full lg:w-1/2 h-screen relative lg:block ">
            <SlideshowOne />
          </div>

          {/* Info Section (50%) */}
          <div className="w-full lg:w-1/2 bg-white px-6 lg:px-10 lg:pt-8">
            <div className="mx-auto max-w-lg lg:max-w-none py-12">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
                  i-Werkstatt
                </h1>
                <p className="text-green-500 text-2xl font-semibold pt-8">
                  Do It Yourself!
                </p>
                <p className="text-gray-600 text-lg text-left font-semibold sm:text-xl pt-4">
                  Herzlich willkommen bei der Kfz. Miet- und Hobbywerkstatt
                  i-motors. Bei uns können Sie Ihr Auto bequem und einfach
                  reparieren. Wir bieten Ihnen:
                </p>
                <div className="text-left mt-8">
                  <ul className="text-gray-600 text-lg font-semibold sm:text-xl list-disc list-inside space-y-3">
                    <li>3 Hebebühnen (3.2 - 4.2 Tonnen)</li>
                    <li>Schweißgerät</li>
                    <li>Klimabefüllung</li>
                    <li>Motorkran</li>
                    <li>Getriebeheber</li>
                    <li>Reifenmontagegerät</li>
                    <li>Hallendeckenkran</li>
                    <li>
                      Vollausgestattete Werkzeugwagen je Bühne oder Platz (gegen
                      Aufpreis)
                    </li>
                  </ul>
                </div>
                <div className="mt-10 flex justify-start gap-x-6">
                  <a
                    href="#preise"
                    className="text-lg font-bold leading-6 text-yellow-400 transition-colors duration-300
                    hover:text-green-300"
                  >
                    Preise & Öffnungszeiten <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-1/2 h-screen relative lg:hidden ">
            <SlideshowOne />
          </div>
        </div>
      </section>

      {/* Pricing and Operating Hours Section */}
      <section
        id="preise"
        className="relative w-full min-h-screen bg-white scroll-smooth"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between h-full">
          {/* Pricing & Hours Info (50%) */}
          <div className="w-full lg:w-1/2 bg-white px-6 lg:px-10 lg:pt-8">
            <div className="mx-auto max-w-lg lg:max-w-none py-12 lg:py-32">
              <div className="text-center lg:text-left">
                <p className="text-green-500 text-2xl font-semibold">Preise:</p>
                <ul className="text-left mt-4 text-gray-600 text-lg sm:text-xl list-disc list-inside space-y-3">
                  <li>
                    <span className="text-gray-600 font-semibold">
                      1 Stunde:
                    </span>{' '}
                    15,- €
                  </li>
                  <li>
                    <span className="text-gray-600 font-semibold">
                      Tagespreis:
                    </span>{' '}
                    Auf Anfrage (nur an Werktagen)
                  </li>
                </ul>

                <p className="text-green-500 text-2xl font-semibold mt-12">
                  Öffnungszeiten:
                </p>
                <ul className="text-left mt-4 text-gray-600 text-lg sm:text-xl list-disc list-inside space-y-3">
                  <li>
                    <span className="text-gray-600 font-semibold">
                      Montag bis Freitag:
                    </span>{' '}
                    09:00 - 18:00 Uhr
                  </li>
                  <li>
                    <span className="text-gray-600 font-semibold">
                      Samstags:
                    </span>{' '}
                    09:00 - 15:00 Uhr
                  </li>
                  <li>
                    <span className="text-gray-600 font-semibold">
                      Sonntags & Feiertage:
                    </span>{' '}
                    Geschlossen
                  </li>
                </ul>
                <div className="mt-10 flex justify-start gap-x-6">
                  <a
                    href="#contacts"
                    className="text-lg font-bold leading-6 text-yellow-400 transition-colors duration-300
                    hover:text-green-300"
                  >
                    Kontaktieren Sie uns <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Slideshow (50%) */}
          <div className="w-full lg:w-1/2 h-screen relative">
            <SlideshowTwo />
          </div>
        </div>
      </section>
    </main>
  );
}

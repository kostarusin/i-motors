'use client';
import SlideshowOne from '../components/SlideshowOne';
import SlideshowTwo from '../components/SlideshowTwo';
import {
  LockOpenIcon,
  LockClosedIcon,
  WrenchIcon,
  CurrencyEuroIcon,
} from '@heroicons/react/24/outline';

const listIcon = (
  <WrenchIcon aria-hidden="true" className="h-6 w-6 text-green-500" />
);

const listIcon2 = (
  <CurrencyEuroIcon aria-hidden="true" className="h-6 w-6 text-green-500" />
);

const listElementStyle = 'flex items-center gap-4';

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
                <div className="flex">
                  <WrenchIcon
                    aria-hidden="true"
                    className="h-12 w-12 text-gray-800"
                  />
                  <h1 className="text-4xl font-bold pl-4 tracking-tight text-gray-800 sm:text-6xl">
                    i-werkstatt
                  </h1>
                </div>
                <p className="text-green-500 text-2xl font-semibold pt-8">
                  Do It Yourself!
                </p>
                <p className="text-gray-600 text-lg text-left font-semibold sm:text-xl pt-4">
                  Herzlich willkommen bei der Kfz. Miet- und Hobbywerkstatt
                  i-motors. Bei uns können Sie Ihr Auto bequem und einfach
                  reparieren. Wir bieten Ihnen:
                </p>
                <div className="text-left mt-8">
                  <ul className="text-gray-600 text-lg font-semibold sm:text-xl space-y-3">
                    <li className={listElementStyle}>
                      {listIcon}3 Hebebühnen (3.2 - 4.2 Tonnen)
                    </li>
                    <li className={listElementStyle}>{listIcon}Schweißgerät</li>
                    <li className={listElementStyle}>
                      {listIcon}Klimabefüllung
                    </li>
                    <li className={listElementStyle}>{listIcon}Motorkran</li>
                    <li className={listElementStyle}>
                      {listIcon}Getriebeheber
                    </li>
                    <li className={listElementStyle}>
                      {listIcon}Reifenmontagegerät
                    </li>
                    <li className={listElementStyle}>
                      {listIcon}Hallendeckenkran
                    </li>
                    <li className={listElementStyle}>
                      {listIcon}
                      Werkzeugwagen je Bühne
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
                <ul className="text-left mt-4 text-gray-600 text-lg sm:text-xl space-y-3">
                  <li className={listElementStyle}>
                    {listIcon2}
                    <span className="font-semibold">1 Stunde:</span> 20,- €
                  </li>
                  <li className={listElementStyle}>
                    {listIcon2}
                    <span className="text-gray-600 font-semibold">
                      Tagespreis:
                    </span>{' '}
                    Auf Anfrage
                  </li>
                  <li className={listElementStyle}>
                    {listIcon2}
                    <span className="text-gray-600 font-semibold">
                      wichtiger Hinweis:
                    </span>{' '}
                  </li>
                  <li className="ml-9 text-gray-600 text-sm sm:text-base leading-snug border-l-4 border-green-500 pl-3">
                    Wenn der gemietete Platz für die Hebebühnen dreckig
                    hinterlassen wird, z.B. durch Öl oder andere Flüssigkeiten,
                    berechnen wir eine Reinigungsgebühr von{' '}
                    <span className="font-semibold text-green-500">15 €</span>.
                    Wir bitten um Ihr Verständnis.
                  </li>
                </ul>

                <p className="text-green-500 text-2xl font-semibold mt-12">
                  Öffnungszeiten:
                </p>
                <ul className="text-left mt-4 text-gray-600 text-lg sm:text-xl space-y-3">
                  <li className={listElementStyle}>
                    <LockOpenIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-green-500"
                    />
                    <span className="text-gray-600 font-semibold">
                      Montag bis Freitag:
                    </span>{' '}
                    09:00 - 18:00 Uhr
                  </li>
                  <li className={listElementStyle}>
                    <LockOpenIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-green-500"
                    />
                    <span className="text-gray-600 font-semibold">
                      Samstags:
                    </span>{' '}
                    09:00 - 15:00 Uhr
                  </li>
                  <li className={listElementStyle}>
                    <LockClosedIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-green-500"
                    />
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

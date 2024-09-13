'use client';
import Slideshow from './components/Slideshow';
import SearchInput from './components/SearchInput';

export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Slideshow />

      <div className="absolute inset-0 bg-black opacity-65 z-10"></div>

      <main className="relative z-20 flex-grow flex items-center justify-center">
        <div className="relative min-h-screen flex flex-col">
          <div className="relative isolate px-6 lg:px-8 w-full">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            ></div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                {/* <SearchInput /> */}
                {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-yellow-400 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Mietwerkstatt Preise.{' '}
                  <a href="#" className="font-semibold text-indigo-300">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Entdecken <span aria-hidden="true">&rarr;</span>
                  </a>
                </div> */}
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  I-MOTORS
                </h1>
                <p className="pt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                  Mietwerkstatt & Autoteile
                </p>
                <p className="mt-6 text-lg leading-8 text-yellow-400">
                  Alles für dein Auto - Mietwerkstatt, Werkzeuge, Teile, und aus
                  einer Hand!
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  {/* <a
                    href="#"
                    className="rounded-md bg-indigo-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Jetzt starten
                  </a> */}
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-indigo-300"
                  >
                    Erfahren mehr <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            ></div>
          </div>
        </div>
      </main>
    </div>
  );
}

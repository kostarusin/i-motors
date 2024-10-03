// 'use client';
// import Slideshow from './components/HomepageSlideshow';
// import SearchInput from './components/SearchInput';
import ImageHomepageSection from './components/HomePageImages';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex-grow">
      <div
        className="relative isolate px-6 lg:px-8 "
        style={{
          backgroundImage: "url('/antique-car-4804725.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Adjust the height as needed
        }}
      >
        {/* <Slideshow /> */}
        <div className="absolute inset-0 bg-black opacity-65 z-10"></div>{' '}
        <div className="relative z-20 flex flex-col items-center justify-center h-full">
          <div className="px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold italic tracking-tight text-gray-200 sm:text-8xl">
              I-MOTORS
            </h1>
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
        {/* Card 1: Mietwerkstatt */}
        <div className="flex-1 max-w-full mx-auto">
          <div className="bg-white rounded-xl shadow-xl h-full flex flex-col justify-between">
            <div className="relative w-full h-64">
              <Image
                src="/automobile-3230876.jpg"
                alt="Mietwerkstatt"
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-6 flex-grow">
              <h2 className="text-3xl font-bold text-center text-gray-800">
                Mietwerkstatt
              </h2>
              <h3 className="mt-4 text-xl font-bold text-center text-gray-800">
                Schrauben leicht gemacht!
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Sie möchten selbst Hand an Ihr Auto legen, aber Ihnen fehlt das
                richtige Werkzeug oder der Platz? In unserer Mietwerkstatt
                können Sie professionelle Hebebühnen, Spezialwerkzeuge und
                Ausrüstung stundenweise oder für den ganzen Tag mieten.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Kommen Sie vorbei und nutzen Sie unsere voll ausgestattete
                Werkstatt – Sie machen die Arbeit, wir stellen das Equipment!
              </p>
            </div>
            <div className="pb-6 flex items-center justify-center">
              <a
                href="/rental"
                className="text-lg font-bold text-yellow-400 transition-all duration-500
          hover:text-green-300 ease-in-out"
              >
                Erfahren mehr <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Autoteile */}
        <div className="flex-1 max-w-full mx-auto">
          <div className="bg-white rounded-xl shadow-xl h-full flex flex-col justify-between">
            <div className="relative w-full h-64">
              <Image
                src="/motor-2595269.jpg"
                alt="Autoteile"
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-6 flex-grow">
              <h2 className="text-3xl font-bold text-center text-gray-800">
                Autoteile
              </h2>
              <h3 className="mt-4 text-xl font-bold text-center text-gray-800">
                Qualität zum günstigen Preis!
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Suchen Sie nach hochwertigen, geprüften Autoteilen zu fairen
                Preisen? In unserem Geschäft für gebrauchte Autoteile finden Sie
                eine große Auswahl an Ersatzteilen für vielen Fahrzeugmarken und
                -modelle.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Nachhaltig, preiswert und sofort verfügbar!
              </p>
            </div>
            <div className="pb-6 flex items-center justify-center">
              <a
                href="/shop"
                className="text-lg font-bold text-yellow-400 transition-all duration-500
          hover:text-green-300 ease-in-out"
              >
                Erfahren mehr <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 3: Autoschrottplatz */}
        <div className="flex-1 max-w-full mx-auto">
          <div className="bg-white rounded-xl shadow-xl h-full flex flex-col justify-between">
            <div className="relative w-full h-64">
              <Image
                src="/workshop-97.jpg"
                alt="Autoschrottplatz"
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-6 flex-grow">
              <h2 className="text-3xl font-bold text-center text-gray-800">
                Autoschrottplatz
              </h2>
              <h3 className="mt-4 text-xl font-bold text-center text-gray-800">
                Selbst finden, selbst abbauen!
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Suchen, abschrauben, sparen! Entdecken Sie unsere Vielfalt an
                Autos zum Ausschlachten und finden Sie genau das Teil, das Sie
                brauchen.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Suchen, abschrauben, sparen! Entdecken Sie unsere Vielfalt an
                Autos zum Ausschlachten und finden Sie genau das Teil, das Sie
                brauchen.
              </p>
            </div>
            <div className="pb-6 flex items-center justify-center">
              <a
                href="/carsdismanting"
                className="text-lg font-bold text-yellow-400 transition-all duration-500
          hover:text-green-300 ease-in-out"
              >
                Erfahren mehr <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 pb-12 px-6 flex flex-wrap justify-center items-center gap-4 md:justify-center md:gap-12 xl:gap-4">
        <ImageHomepageSection />
      </section>
    </main>
  );
}

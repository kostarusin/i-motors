import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Shop() {
  return (
    <main>
      <div
        className="relative isolate px-6 lg:px-8 "
        style={{
          backgroundImage: "url('/motor-2595269.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-20 isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Autoteile
              </h1>
              <p className="text-white pt-10">
                Die Seite wird aktuell überarbeitet. Besuchen Sie unser
                Kleinanzeigen-Profil, um alle Angebote zu entdecken.
              </p>
              <a
                href="https://www.kleinanzeigen.de/s-anzeige/hobbywerkstatt-kfz-mietwerkstatt-hebebuehne-kran-reparatur/2379287664-280-1988"
                target="_blank"
                className="text-xl text-green-500 flex justify-center pt-10 hover:text-green-700"
              >
                <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" />
                <span className="pl-4">Kleinanzeigen</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

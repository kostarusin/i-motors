'use client';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import CardOfGoods from '../components/CardOfGoods';
import SchopPageSearch from '../components/ShopPageSearch';

export default function Shop() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero section or banner */}
      <section
        className="relative isolate px-6 py-6 lg:px-6 bg-no-repeat bg-cover bg-center h-auto"
        style={{
          backgroundImage: "url('/auto-repair-shop-1954636.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <p className="text-lg sm:text-xl text-gray-200 mb-8 text-center">
            Finden Sie noch heute die besten Teile für Ihr Auto!
          </p>
          <SchopPageSearch />
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="mx-auto px-6 py-12">
        <div className="flex flex-col items-center">
          <p className="text-gray-800 text-center">
            Die Seite wird aktuell überarbeitet. Besuchen Sie unser
            Kleinanzeigen-Profil, um alle Angebote zu entdecken.
          </p>
          <a
            href="https://www.kleinanzeigen.de/s-anzeige/hobbywerkstatt-kfz-mietwerkstatt-hebebuehne-kran-reparatur/2379287664-280-1988"
            target="_blank"
            className="text-xl mb-4 text-green-500 w-56 flex justify-center pt-10 hover:text-green-700"
          >
            <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" />
            <span className="pl-4">Kleinanzeigen</span>
          </a>
        </div>
        <CardOfGoods />
      </section>
    </main>
  );
}

'use client';
import CardOfGoods from '../components/CardOfGoods';
import ShopPageSearch from '../components/ShopPageSearch';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Drower from '../components/Drawer';

export default function Shop() {
  return (
    <main className="px-6 py-12 bg-white">
      {/* <p className="text-gray-600 font-semibold text-center py-10">
        Die Seite wird aktuell überarbeitet. Besuchen Sie unser
        Kleinanzeigen-Profil, um alle Angebote zu entdecken.
      </p>
      <a
        href="https://www.kleinanzeigen.de/s-anzeige/hobbywerkstatt-kfz-mietwerkstatt-hebebuehne-kran-reparatur/2379287664-280-1988"
        target="_blank"
        className="text-xl text-green-500 flex justify-center pb-4 hover:text-green-700"
      >
        <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" />
        <span className="pl-4">Kleinanzeigen</span>
      </a> */}

      {/* <Drower /> */}
      <div className="pb-12 items-center">
        <ShopPageSearch />
      </div>
      <CardOfGoods />
    </main>
  );
}

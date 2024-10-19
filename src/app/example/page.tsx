'use client';
import CardOfGoods from '../components/CardOfGoods';
import SchopPageSearch from '../components/ShopPageSearch';

const Example = () => {
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
        <CardOfGoods />
      </section>
    </main>
  );
};

export default Example;

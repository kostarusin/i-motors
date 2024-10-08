export default function Information() {
  return (
    <main>
      <div
        className="relative isolate px-6 lg:px-8 "
        style={{
          // backgroundImage: "url('/contact-3994018.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Adjust the height as needed
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-20 isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Impressum
              </h1>
              <p className="text-white pt-10">
                Die Seite befindet sich derzeit in Entwicklung
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

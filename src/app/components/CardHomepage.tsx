import Image from 'next/image';
import {
  WrenchScrewdriverIcon,
  WrenchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

const cardData = [
  {
    imageSrc: '/automobile-3230876.jpg',
    title: 'Mietwerkstatt',
    motto: 'Schrauben leicht gemacht!',
    description:
      'Sie möchten selbst Hand an Ihr Auto legen, aber Ihnen fehlt das richtige Werkzeug oder der Platz? In unserer Mietwerkstatt können Sie professionelle Hebebühnen, Spezialwerkzeuge und Ausrüstung stundenweise oder für den ganzen Tag mieten.',
    description2:
      'Kommen Sie vorbei und nutzen Sie unsere voll ausgestattete Werkstatt – Sie machen die Arbeit, wir stellen das Equipment!',
    link: '/rental',
    buttonText: 'Erfahren mehr',
    icon: WrenchIcon,
  },
  {
    imageSrc: '/motor-2595269.jpg',
    title: 'Autoteile',
    motto: 'Qualität zum günstigen Preis!',
    description:
      'Suchen Sie nach hochwertigen, geprüften Autoteilen zu fairen Preisen? In unserem Geschäft für gebrauchte Autoteile finden Sie eine große Auswahl an Ersatzteilen für vielen Fahrzeugmarken und -modelle.',
    description2: 'Nachhaltig, preiswert und sofort verfügbar!',
    link: '/shop',
    buttonText: 'Erfahren mehr',
    icon: ShoppingCartIcon,
  },
  {
    imageSrc: '/workshop-97.jpg',
    title: 'Autoschrottplatz',
    motto: 'Selbst finden, selbst abbauen!',
    description: 'Suchen, abschrauben, sparen!',
    description2:
      'Entdecken Sie unsere Vielfalt an Autos zum Ausschlachten und finden Sie genau das Teil, das Sie brauchen.',
    link: '/carsdismanting',
    buttonText: 'Erfahren mehr',
    icon: WrenchScrewdriverIcon,
  },
];

const CardHomepage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {cardData.map((card, index) => (
        <div key={index} className="flex-1 max-w-full mx-auto">
          <div className="bg-white rounded-xl shadow-xl h-full flex flex-col justify-between">
            <div className="relative w-full h-64">
              <Image
                src={card.imageSrc}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="rounded-t-xl"
              />
            </div>
            <div className="p-6 flex-grow">
              <a
                href={card.link}
                className="flex justify-center items-center bg-green-500 text-white rounded-xl drop-shadow-2xl py-3 px-6 transition-all duration-300 group hover:bg-green-600 hover:shadow-lg"
              >
                <card.icon
                  aria-hidden="true"
                  className="h-8 w-8 text-white group-hover:text-white transition-colors duration-300"
                />
                <h2 className="text-2xl font-bold text-center pl-2 group-hover:text-white transition-colors duration-300">
                  {card.title}
                </h2>
              </a>

              <h3 className="mt-4 text-xl font-bold text-center text-gray-800">
                {card.motto}
              </h3>
              <p className="mt-4 text-lg text-gray-600">{card.description}</p>
              <p className="mt-4 text-lg text-gray-600">{card.description2}</p>
            </div>
            <div className="pb-6 flex items-center justify-center">
              <a
                href={card.link}
                className="text-lg font-bold text-yellow-400 transition-all duration-500
              hover:text-green-500 ease-in-out"
              >
                {card.buttonText} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardHomepage;

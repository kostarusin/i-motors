import Image from 'next/image';
import goodsData from '../shop/carPartsData';

const CardOfGoods: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {goodsData.map((card) => (
        <div
          key={card.itemIndex}
          className="relative bg-gray-200 shadow-sm border border-slate-200 rounded-lg"
        >
          <div className="relative p-2.5 h-96 overflow-hidden rounded-lg bg-clip-border">
            <Image
              src={card.itemImg}
              alt={card.itemName}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          {/* container */}
          <div className="p-4 h-full flex flex-col justify-between">
            {/* first div */}

            <div>
              <div className="mb-2 flex items-center justify-between">
                <p className="text-gray-800 text-xl w-4/5 font-semibold">
                  {card.itemName}
                </p>
                <p className="text-green-500 text-xl w-1/5 font-semibold mb-auto text-right">
                  € {card.itemPrise}
                </p>
              </div>
              <p className="text-slate-600 leading-normal font-light">
                {card.itemDescription}
              </p>
            </div>
            {/* second div */}

            <div>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="text-gray-500">
                  <strong>Marke:</strong>{' '}
                  {Array.isArray(card.itemMark)
                    ? card.itemMark.join(' ')
                    : card.itemMark}
                </li>
                <li className="text-gray-500">
                  <strong>Modell:</strong>{' '}
                  {Array.isArray(card.itemModel)
                    ? card.itemModel.join(' ')
                    : card.itemModel}
                </li>
                <li className="text-gray-500">
                  <strong>Baujahr:</strong> {card.itemYear}
                </li>
              </ul>
              <button
                className="rounded-md w-full mt-6 bg-green-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-600 focus:shadow-none active:bg-green-600 hover:bg-green-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Erfahren mehr
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardOfGoods;

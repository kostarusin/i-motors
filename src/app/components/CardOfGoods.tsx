import Image from 'next/image';
import goodsData from '../shop/carPartsData';

const CardOfGoods: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {goodsData.map((card) => (
        <div
          key={card.itemIndex}
          className="bg-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
        >
          <div className="relative w-full h-44">
            <Image
              src={card.itemImg}
              alt={card.itemName}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              priority
              className="w-full h-full"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {card.itemName}
            </h2>
            <p className="text-sm text-gray-600 mt-1">{card.itemDescription}</p>
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
            <p className="text-lg font-bold text-green-600 mt-3">
              {card.itemPrise} €
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardOfGoods;

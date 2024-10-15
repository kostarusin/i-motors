import Image from 'next/image';
import goodsData from '../shop/carPartsData';

const CardOfGoods: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {goodsData.map((card) => (
        <div
          key={card.itemIndex}
          className="w-auto bg-white shadow-md rounded-lg overflow-hidden"
        >
          {/* Card Header with Image */}
          <div className="h-96">
            <Image
              src={card.itemImg}
              alt="Apple AirPods"
              width={360}
              height={360}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Card Body */}
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-blue-gray-800 font-medium">{card.itemName}</p>
              <p className="text-blue-gray-800 font-medium">
                € {card.itemPrise}
              </p>
            </div>
            <p className="text-gray-600 text-sm opacity-75">
              {card.itemDescription}
            </p>
          </div>

          {/* Card Footer */}
          {/* <div className="p-4 pt-0">
            <button className="w-full py-2 bg-blue-gray-100 text-blue-gray-900 rounded-md transition-transform duration-200 hover:scale-105 active:scale-100">
              Add to Cart
            </button>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default CardOfGoods;

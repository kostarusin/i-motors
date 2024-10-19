import Image from 'next/image';
import goodsData from '../shop/carPartsData';
import Link from 'next/link';

const CardOfGoods: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {goodsData.map((card) => (
        <Link
          href="#"
          key={card.itemIndex}
          className="w-auto bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-200 hover:scale-105"
          // className="w-auto bg-white shadow-md rounded-lg overflow-hidden"
        >
          {/* Card Header with Image */}
          <div className="h-96">
            <Image
              src={card.itemImg}
              priority={false}
              alt={card.itemName}
              width={360}
              height={360}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Card Body */}
          <div className="p-4 ">
            <div className="mb-4 flex justify-between">
              <div className="text-blue-gray-800 font-medium w-3/4">
                {card.itemName}
              </div>
              <p className="text-green-500 font-semibold w-1/4 text-right">
                € {card.itemPrise}
              </p>
            </div>
            <p className="text-gray-600 text-sm opacity-75 text">
              {card.itemDescription}
            </p>
          </div>

          {/* Card Footer */}
          {/* <div className="p-4 pt-0">
            <button className="w-full py-2 bg-blue-gray-100 text-blue-gray-900 rounded-md transition-transform duration-200 hover:scale-105 active:scale-100">
              Zu Favoriten hinzufügen
            </button>
          </div> */}
        </Link>
      ))}
    </div>
  );
};

export default CardOfGoods;

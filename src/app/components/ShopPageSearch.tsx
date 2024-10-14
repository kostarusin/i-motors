import { DivideIcon } from '@heroicons/react/24/outline';

const inputNames: string[] = ['Was suchen Sie?', 'Marke', 'Model', 'Baujahr'];

const CataloguePageForm: React.FC = () => {
  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-flow-col mx-auto gap-4">
      {inputNames.map((inputName: string) => (
        <div key={inputName} className="flex flex-col w-full">
          <label
            htmlFor="brand"
            className="mb-2 text-gray-600 text-sm font-medium text-center sm:text-left"
          >
            {inputName}
          </label>
          <input
            type="text"
            id="brand"
            placeholder=""
            list="browsers"
            className="w-full h-12 px-4 bg-gray-100 rounded-lg shadow-md text-black text-lg font-medium
          focus:outline-none hover:outline-none"
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-1/4 sm:w-1/2 sm:col-span-2 lg:col-span-4 xl:w-32 h-12 mx-auto mt-4 xl:mt-auto bg-green-500 shadow-md text-white text-sm font-semibold rounded-lg
        transition-colors duration-300 hover:bg-green-600 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

export default CataloguePageForm;

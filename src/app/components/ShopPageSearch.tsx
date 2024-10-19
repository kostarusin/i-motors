import {
  DivideIcon,
  MagnifyingGlassIcon,
  MagnifyingGlassCircleIcon,
} from '@heroicons/react/24/outline';
import { Input } from '@material-tailwind/react';

const inputNames: string[] = ['Ersatzteil', 'Marke', 'Model', 'Baujahr'];

const CataloguePageForm: React.FC = () => {
  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-flow-col mx-6">
      {inputNames.map((inputName: string) => (
        <Input
          {...({} as any)}
          key={inputName}
          label={inputName}
          color="white"
          className="w-60 md:w-72 lg:w-48 xl:w-56 2xl:w-64"
        />
      ))}
      <button
        type="submit"
        className="w-1/4 sm:w-1/2 lg:w-1/4 sm:col-span-2 lg:col-span-4 xl:w-32 h-full mx-auto xl:mt-auto bg-green-500 shadow-md rounded-lg
  transition-colors duration-300 hover:bg-green-600 focus:outline-none flex items-center justify-center"
      >
        <MagnifyingGlassIcon className="aria-hidden=true h-8 w-8 text-white py-2" />
      </button>
    </form>
  );
};

export default CataloguePageForm;

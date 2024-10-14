import {
  DivideIcon,
  MagnifyingGlassIcon,
  MagnifyingGlassCircleIcon,
} from '@heroicons/react/24/outline';

const inputNames: string[] = [
  'Welches Teil suchen Sie?',
  'Marke',
  'Model',
  'Baujahr',
];

const CataloguePageForm: React.FC = () => {
  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-flow-col mx-auto gap-4">
      {inputNames.map((inputName: string) => (
        <div key={inputName} className="w-full max-w-sm min-w-[200px]">
          <div className="relative">
            <input className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
            <label className="absolute cursor-text font-semibold text-gray-700 bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
              {inputName}
            </label>
          </div>
        </div>
      ))}
      <button
        type="submit"
        className="w-1/4 sm:w-1/2 lg:w-1/4 sm:col-span-2 lg:col-span-4 xl:w-32 h-full mx-auto mt-4 xl:mt-auto bg-green-500 shadow-md rounded-lg
  transition-colors duration-300 hover:bg-green-600 focus:outline-none flex items-center justify-center"
      >
        <MagnifyingGlassIcon className="aria-hidden=true h-8 w-8 text-white" />
      </button>
    </form>
  );
};

export default CataloguePageForm;

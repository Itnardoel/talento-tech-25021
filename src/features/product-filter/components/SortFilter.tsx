import { useSearchParams } from "react-router";

import { useProductFilter } from "../hooks/use-product-filter";

import { ChevronDown } from "./Icons";

export const SortFilter = () => {
  const { selectedSort, setSelectedSort } = useProductFilter();

  const [, setSearchParams] = useSearchParams();

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = event.target.value;

    setSelectedSort(sort);

    setSearchParams((prevURLSearchParams) => {
      if (sort === "") {
        prevURLSearchParams.delete("sort");
      } else {
        prevURLSearchParams.set("sort", sort);
      }

      return prevURLSearchParams;
    });
  };

  return (
    <div className="relative">
      <select
        onChange={handleOnChange}
        value={selectedSort}
        name="sort"
        className="appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-8 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option value="">Ordenar</option>
        <option value="price-low">Menor precio</option>
        <option value="price-high">Mayor precio</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center px-2">
        <ChevronDown className="size-4 text-gray-400" />
      </div>
    </div>
  );
};

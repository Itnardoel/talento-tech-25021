import { useSearchParams } from "react-router";

import { useProductFilter } from "../hooks/use-product-filter";

import { Search } from "./Icons";

interface SearchBarProps {
  isMobile?: boolean;
}

export const SearchBar = ({ isMobile = false }: SearchBarProps) => {
  const { searchQuery, setSearchQuery } = useProductFilter();

  const [, setSearchParams] = useSearchParams();

  const scrollToSection = () => {
    const $element = document.getElementById("productos");
    if ($element) {
      $element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    scrollToSection();

    setSearchParams((prevURLSearchParams) => {
      if (query === "") {
        prevURLSearchParams.delete("search");
      } else {
        prevURLSearchParams.set("search", query);
      }

      prevURLSearchParams.set("page", "1");
      return prevURLSearchParams;
    });
  };

  return (
    <div
      className={
        isMobile
          ? "px-4 pb-4 sm:px-6 md:hidden"
          : "mx-8 hidden max-w-2xl flex-1 md:block"
      }
    >
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="size-5 text-gray-400" />
        </div>
        <input
          type="search"
          name="search"
          inputMode="search"
          value={searchQuery}
          onChange={handleOnChange}
          className="block w-full rounded-full border border-gray-300 py-2 pr-3 pl-10 text-sm leading-5 text-black placeholder-gray-500 transition-all duration-200 focus:border-transparent focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Buscar productos"
        />
      </div>
    </div>
  );
};

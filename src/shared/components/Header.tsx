import { Link } from "react-router";

import { SearchBar } from "@/features/product-filter/components/SearchBar";
import { useProductFilter } from "@/features/product-filter/hooks/use-product-filter";
import { Nav } from "@/shared/components/Nav";

export const Header = () => {
  const { setSearchQuery, setSelectedCategory } = useProductFilter();

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/15 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to={{ pathname: "/" }} onClick={handleResetFilters}>
          <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
            HardNexus
          </h1>
        </Link>
        <SearchBar />
        <Nav />
      </div>
      <SearchBar isMobile />
    </header>
  );
};

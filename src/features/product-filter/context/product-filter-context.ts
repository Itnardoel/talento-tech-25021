import { createContext } from "react";

interface ProductFilterContextType {
  searchQuery: string;
  debouncedSearchQuery: string;
  selectedCategory: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const ProductFilterContext = createContext<
  ProductFilterContextType | undefined
>(undefined);

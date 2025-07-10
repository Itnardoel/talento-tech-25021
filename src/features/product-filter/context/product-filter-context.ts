import { createContext } from "react";

interface ProductFilterContextType {
  searchQuery: string;
  debouncedSearchQuery: string;
  selectedCategory: string;
  selectedSort: string;
  isCategoryFilterDrawerOpen: boolean;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
  setIsCategoryFilterDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductFilterContext = createContext<
  ProductFilterContextType | undefined
>(undefined);

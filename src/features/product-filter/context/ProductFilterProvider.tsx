import { useMemo, useState } from "react";

import { UseDebounce } from "../hooks/use-debounce";

import { ProductFilterContext } from "./product-filter-context";

interface ProductFilterContextProps {
  children: React.ReactNode;
}

export const ProductFilterProvider = ({
  children,
}: ProductFilterContextProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = UseDebounce(searchQuery);
  const [selectedCategory, setSelectedCategory] = useState("");

  const value = useMemo(
    () => ({
      searchQuery,
      debouncedSearchQuery,
      selectedCategory,
      setSearchQuery,
      setSelectedCategory,
    }),
    [searchQuery, debouncedSearchQuery, selectedCategory],
  );

  return <ProductFilterContext value={value}>{children}</ProductFilterContext>;
};

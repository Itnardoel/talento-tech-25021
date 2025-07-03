import { useMemo, useState } from "react";
import { useSearchParams } from "react-router";

import { UseDebounce } from "../hooks/use-debounce";

import { ProductFilterContext } from "./product-filter-context";

interface ProductFilterContextProps {
  children: React.ReactNode;
}

export const ProductFilterProvider = ({
  children,
}: ProductFilterContextProps) => {
  const [searchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") ?? "",
  );
  const debouncedSearchQuery = UseDebounce(searchQuery);
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") ?? "",
  );

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

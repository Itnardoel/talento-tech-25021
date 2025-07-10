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

  const [selectedSort, setSelectedSort] = useState(
    searchParams.get("sort") ?? "",
  );

  const [isCategoryFilterDrawerOpen, setIsCategoryFilterDrawerOpen] =
    useState(false);

  const value = useMemo(
    () => ({
      searchQuery,
      debouncedSearchQuery,
      selectedCategory,
      selectedSort,
      isCategoryFilterDrawerOpen,
      setSearchQuery,
      setSelectedCategory,
      setSelectedSort,
      setIsCategoryFilterDrawerOpen,
    }),
    [
      searchQuery,
      debouncedSearchQuery,
      selectedCategory,
      selectedSort,
      isCategoryFilterDrawerOpen,
    ],
  );

  return <ProductFilterContext value={value}>{children}</ProductFilterContext>;
};

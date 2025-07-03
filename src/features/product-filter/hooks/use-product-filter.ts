import { use } from "react";

import { ProductFilterContext } from "../context/product-filter-context";

export function useProductFilter() {
  const context = use(ProductFilterContext);

  if (context === undefined) {
    throw new Error(
      "useProductFilter must be used within a ProductFilterProvider",
    );
  }

  return context;
}

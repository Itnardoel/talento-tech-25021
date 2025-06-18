import { use } from "react";

import { ProductContext } from "@/features/product/context/product-context";

export function useProduct() {
  const context = use(ProductContext);

  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider");
  }

  return context;
}

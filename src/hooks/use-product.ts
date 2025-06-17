import { use } from "react";

import { ProductContext } from "@/context/product-context";

export function useProduct() {
  const context = use(ProductContext);

  if (context === undefined) {
    throw new Error("useProduct must be used within an AuthProvider");
  }

  return context;
}

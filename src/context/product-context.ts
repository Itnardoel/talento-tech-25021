import { createContext } from "react";

import type { Product, ProductToAdd } from "@/types/product-type";

interface ProductContext {
  products: Product[];
  loading: boolean;
  error: string | null;
  getAllProducts: () => Promise<void>;
  addProduct: (product: ProductToAdd) => Promise<void>;
}

export const ProductContext = createContext<ProductContext | undefined>(
  undefined,
);

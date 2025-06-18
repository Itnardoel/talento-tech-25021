import { createContext } from "react";

import type {
  Product,
  ProductToAdd,
  ProductToEdit,
} from "@/shared/types/product-type";

interface ProductContext {
  products: Product[];
  loading: boolean;
  error: string | null;
  getAllProducts: () => Promise<void>;
  getProductById: (id: string | undefined) => Product | undefined;
  addProduct: (product: ProductToAdd) => Promise<void>;
  editProduct: (product: ProductToEdit) => Promise<void>;
  deleteProduct: (product: ProductToEdit) => Promise<void>;
}

export const ProductContext = createContext<ProductContext | undefined>(
  undefined,
);

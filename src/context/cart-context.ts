import { createContext } from "react";

import type { Product, ProductInCart } from "@/types/product-type";

export interface AddProductParams {
  productToAdd: Product;
  count: number;
}

interface CartContext {
  cart: ProductInCart[];
  handleAddProduct: ({ productToAdd, count }: AddProductParams) => void;
  handleDeleteProduct: (id: string) => void;
  handleClearCart: () => void;
}

export const CartContext = createContext<CartContext | undefined>(undefined);

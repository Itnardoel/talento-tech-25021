import { createContext } from "react";

import type { ProductInCart } from "@/types/product-type";

interface CartContext {
  cart: ProductInCart[];
  handleAddProduct: (product: ProductInCart) => void;
  handleDeleteProduct: (id: string) => void;
  handleClearCart: () => void;
}

export const CartContext = createContext<CartContext | undefined>(undefined);

import { createContext } from "react";

import type { ProductInCart } from "@/shared/types/product-type";

interface CartContext {
  cart: ProductInCart[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  handleAddProduct: (product: ProductInCart) => void;
  handleUpdateQuantity: ({
    id,
    quantity,
  }: Pick<ProductInCart, "id" | "quantity">) => void;
  handleDeleteProduct: (id: string) => void;
  handleClearCart: () => void;
}

export const CartContext = createContext<CartContext | undefined>(undefined);

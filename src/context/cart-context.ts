import { createContext } from "react";
import type { Product } from "@/types/product-type";

export interface AddProductParams {
  product: Product;
  count: number;
}

interface CartContext {
  cart: Product[] | null;
  handleAddProduct: ({ product, count }: AddProductParams) => void;
}

export const CartContext = createContext<CartContext | undefined>(undefined);

import { useState, useMemo, type PropsWithChildren } from "react";
import { CartContext, type AddProductParams } from "./cart-context";
import type { Product } from "@/types/product-type";

type CartProviderProps = PropsWithChildren;

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddProduct = ({ count, product }: AddProductParams) => {
    console.log("AGREGASTE", product.name, count);
    // setCart((prevCart) => [...prevCart, product]);
  };

  const value = useMemo(() => ({ cart, handleAddProduct }), [cart]);

  return <CartContext value={value}>{children}</CartContext>;
};

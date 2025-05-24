import { useState, useMemo, type ReactNode, useCallback } from "react";
import { CartContext, type AddProductParams } from "./cart-context";
import type { ProductInCart } from "@/types/product-type";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductInCart[]>([]);

  const handleAddProduct = useCallback(
    ({ count, productToAdd }: AddProductParams) => {
      const isInCart = cart.findIndex(
        (product) => product.id === productToAdd.id,
      );

      if (isInCart !== -1) {
        setCart((prevCart) => {
          const productToUpdate = prevCart[isInCart];

          productToUpdate.quantity += count;

          return prevCart;
        });
      } else {
        setCart((prevCart) => [
          ...prevCart,
          { ...productToAdd, quantity: count },
        ]);
      }
    },
    [cart],
  );

  const handleDeleteProduct = useCallback((id: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((product) => product.id !== id);

      return updatedCart;
    });
  }, []);

  const handleClearCart = () => {
    setCart([]);
  };

  const value = useMemo(
    () => ({ cart, handleAddProduct, handleDeleteProduct, handleClearCart }),
    [cart, handleAddProduct, handleDeleteProduct],
  );

  return <CartContext value={value}>{children}</CartContext>;
};

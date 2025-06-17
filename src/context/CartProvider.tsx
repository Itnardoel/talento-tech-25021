import { useState, useMemo, type ReactNode, useCallback } from "react";

import { CartContext } from "./cart-context";

import type { ProductInCart } from "@/types/product-type";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductInCart[]>([]);

  const handleAddProduct = useCallback(
    (productToAdd: ProductInCart) => {
      const isInCart = cart.findIndex(
        (product) => product.id === productToAdd.id,
      );

      if (isInCart !== -1) {
        setCart((prevCart) => {
          const productToUpdate = prevCart[isInCart];

          productToUpdate.quantity += productToAdd.quantity;

          return prevCart;
        });
      } else {
        setCart((prevCart) => [...prevCart, { ...productToAdd }]);
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

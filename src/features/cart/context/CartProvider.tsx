import { useState, useMemo, type ReactNode, useCallback } from "react";

import { CartContext } from "./cart-context";

import type { ProductInCart } from "@/shared/types/product-type";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductInCart[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeCart = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const handleAddProduct = useCallback(
    (productToAdd: ProductInCart) => {
      const index = cart.findIndex((product) => product.id === productToAdd.id);

      if (index !== -1) {
        setCart((prevCart) => {
          const draftCart = [...prevCart];
          const updatedProduct = {
            ...draftCart[index],
            quantity: draftCart[index].quantity + productToAdd.quantity,
          };
          draftCart[index] = updatedProduct;

          return draftCart;
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

  const handleUpdateQuantity = useCallback(
    ({
      id,
      quantity: nextQuantity,
    }: Pick<ProductInCart, "id" | "quantity">) => {
      if (nextQuantity === 0) return;

      setCart((prevCart) => {
        const index = prevCart.findIndex((product) => product.id === id);

        if (index === -1) return prevCart;

        const draftCart = [...prevCart];
        const updatedProduct = { ...draftCart[index], quantity: nextQuantity };
        draftCart[index] = updatedProduct;

        return draftCart;
      });
    },
    [],
  );

  const handleClearCart = () => {
    setCart([]);
  };

  const value = useMemo(
    () => ({
      cart,
      isOpen,
      openCart,
      closeCart,
      handleAddProduct,
      handleDeleteProduct,
      handleUpdateQuantity,
      handleClearCart,
    }),
    [cart, isOpen, handleAddProduct, handleDeleteProduct, handleUpdateQuantity],
  );

  return <CartContext value={value}>{children}</CartContext>;
};

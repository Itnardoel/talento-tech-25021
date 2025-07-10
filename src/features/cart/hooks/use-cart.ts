import { use } from "react";

import { CartContext } from "@/features/cart/context/cart-context";

export function useCart() {
  const context = use(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}

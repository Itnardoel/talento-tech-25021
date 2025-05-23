import { use } from "react";
import { CartContext } from "@/context/cart-context";

export function useCart() {
  const context = use(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within an AuthProvider");
  }

  return context;
}

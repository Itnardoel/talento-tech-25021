import type { ProductInCart } from "@/types/product-type";

type Value = "totalProducts" | "totalPrice";

export function cartReducer(products: ProductInCart[], value: Value) {
  return value === "totalProducts"
    ? products.reduce(
        (totalProducts, product) => (totalProducts += product.quantity),
        0,
      )
    : products
        .reduce(
          (totalPrice, product) =>
            (totalPrice += Number(product.price) * product.quantity),
          0,
        )
        .toFixed(2);
}

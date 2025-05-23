import { useCart } from "@/hooks/use-cart";
import type { Product } from "@/types/product-type";
import { useState, type MouseEvent } from "react";
import { useParams } from "react-router";

interface ProductDetailProps {
  products: Product[];
}

export const ProductDetail = ({ products }: ProductDetailProps) => {
  const [count, setCount] = useState(1);

  const { id } = useParams() as { id: string };

  const { handleAddProduct } = useCart();

  const productById = products.find((product) => product.id === id);

  if (!productById)
    return (
      <main className="mx-auto grid max-w-7xl content-center">
        <p className="font-bold text-red-500">{`El producto con el ID ${id.toString()} no existe`}</p>
      </main>
    );

  const handleCountOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    const buttonText = event.currentTarget.textContent;
    if (buttonText === "+") {
      setCount((prevCount) => prevCount + 1);
    } else if (buttonText === "-") {
      setCount((prevCount) => Math.max(1, prevCount - 1));
    }
  };

  return (
    <>
      <main className="mx-auto grid max-w-7xl grid-cols-1 content-center gap-4 xl:grid-cols-2">
        <img
          src={productById.avatar}
          alt={productById.name}
          className="h-auto max-h-[700px] w-full max-w-[700px] rounded-2xl object-contain p-4"
        />

        <div className="flex flex-col justify-around gap-4 p-4">
          <h2 className="text-4xl font-bold">{productById.name}</h2>
          <p>{productById.description}</p>
          <p>$ {productById.price}</p>
          <div className="flex items-center gap-4 text-xl">
            <button
              type="button"
              onClick={handleCountOnClick}
              className="size-8 cursor-pointer rounded-lg bg-gray-500 font-bold"
            >
              -
            </button>
            <span>{count}</span>
            <button
              type="button"
              onClick={handleCountOnClick}
              className="size-8 cursor-pointer rounded-lg bg-gray-500 font-bold"
            >
              +
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              handleAddProduct({ product: productById, count });
            }}
            className="cursor-pointer rounded-lg bg-gray-500 font-bold"
          >
            Agregar al carrito
          </button>
        </div>
      </main>
    </>
  );
};

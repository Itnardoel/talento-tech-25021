import { useNavigate } from "react-router";

import type { Product } from "@/shared/types/product-type";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[400px] w-80 flex-col rounded-2xl border sm:w-96">
      <img
        src={product.avatar}
        alt="Product image"
        className="max-h-60 w-auto flex-1/2 rounded-t-2xl object-cover"
      />
      <div className="flex flex-1/2 flex-col justify-between gap-4 p-4">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p>{product.description}</p>
        <p className="font-semibold">$ {product.price}</p>
        <button
          type="button"
          onClick={() => {
            navigate(`/product/${product.id}`);
          }}
          className="cursor-pointer self-center rounded-lg bg-gray-400 px-4 py-2"
        >
          Detalles
        </button>
      </div>
    </div>
  );
};

import { useNavigate } from "react-router";
import { toast } from "sonner";

import { CartIcon } from "@/features/cart/components/CartIcons";
import { useCart } from "@/features/cart/hooks/use-cart";
import { useUser } from "@/features/user/hooks/use-user";
import type { Product } from "@/shared/types/product-type";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { handleAddProduct } = useCart();
  const { user } = useUser();

  const navigate = useNavigate();

  const onAddProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleAddProduct({ ...product, quantity: 1 });
    toast.success(`Se agregó 1 ${product.name} al carrito`);
  };

  return (
    <article
      className="group flex cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
      onClick={() => {
        navigate(`/product/${product.id}`);
      }}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.avatar}
          alt={product.name}
          className="aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute right-3 bottom-3 left-3 hidden opacity-0 transition-opacity group-hover:opacity-100 sm:block">
          <button
            type="button"
            disabled={!user?.includes("USER")}
            className="inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-semibold whitespace-nowrap text-white shadow-lg transition-colors hover:bg-blue-600/90 hover:shadow-xl disabled:pointer-events-none disabled:opacity-50"
            onClick={onAddProduct}
          >
            <CartIcon className="mr-2 size-4" />
            Agregar al carrito
          </button>
        </div>
      </div>

      <div className="mb-2 flex flex-1 flex-col p-4">
        <p className="mb-1 text-sm text-gray-500">{product.category}</p>
        <h3 className="line-clamp-2 flex-1 font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
          {product.name}
        </h3>
        <span className="text-lg font-bold text-gray-900">
          ${product.price.toLocaleString()}
        </span>
      </div>
    </article>
  );
};

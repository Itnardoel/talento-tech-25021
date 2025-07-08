import { useState, type MouseEvent } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "sonner";

import { ProductDetailSkeleton } from "./ProductDetailSkeleton";

import {
  CartIcon,
  Minus,
  Plus,
  Trash2,
} from "@/features/cart/components/CartIcons";
import { useCart } from "@/features/cart/hooks/use-cart";
import { useProduct } from "@/features/product/hooks/use-product";
import { useUser } from "@/features/user/hooks/use-user";
import {
  ArrowRight,
  RotateCcw,
  Shield,
  Truck,
} from "@/shared/components/Icons";
import { useModalConfirm } from "@/shared/hooks/use-modal-confirm";

export const ProductDetail = () => {
  const [count, setCount] = useState(1);

  const navigate = useNavigate();
  const { id } = useParams() as { id: string };

  const { user } = useUser();
  const { products, loading, deleteProduct } = useProduct();
  const { handleAddProduct } = useCart();
  const confirm = useModalConfirm();

  const productById = products.find((product) => product.id === id);
  const isAdmin = user?.includes("ADMIN");

  if (!productById) {
    return (
      <>
        {loading || products.length === 0 ? (
          <ProductDetailSkeleton />
        ) : (
          <main className="mx-auto grid max-w-7xl content-center">
            <p className="font-bold text-red-500">
              No se encuentra un producto con el ID {id.toString()}
            </p>
          </main>
        )}
      </>
    );
  }

  const onAddProduct = () => {
    toast.success(
      `Se agregó ${count.toString()} ${productById.name} al carrito`,
    );
    handleAddProduct({ ...productById, quantity: count });
  };

  const handleCountOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    const type = event.currentTarget.getAttribute("datatype");

    if (type === "plus") {
      setCount((prevCount) => prevCount + 1);
    } else if (type === "minus") {
      setCount((prevCount) => Math.max(1, prevCount - 1));
    }
  };

  const handleOnDeleteClick = async () => {
    const confirmed = await confirm({
      message: "¿Estás seguro de eliminar este ítem?",
    });

    if (confirmed) {
      deleteProduct(productById);
      navigate("/");
    }
  };

  return (
    <>
      <title>{`${productById.name} | HardNexus`}</title>
      <meta name="description" content={productById.description} />

      <main className="mx-auto mt-4 grid w-full max-w-7xl content-center sm:mt-0">
        <button
          type="button"
          onClick={() => void navigate(-1)}
          className="flex cursor-pointer items-center gap-1 px-6 text-lg font-semibold text-gray-500"
        >
          <ArrowRight className="rotate-180" /> Volver
        </button>
        <div className="grid gap-8 p-6 md:grid-cols-2">
          <img
            src={productById.avatar}
            alt={productById.name}
            width={500}
            height={500}
            loading="lazy"
            className="aspect-square place-self-center overflow-hidden rounded-lg bg-gray-100 object-cover"
          />

          <div className="flex flex-col justify-around gap-6 p-4">
            <div>
              <p className="mb-2 text-sm text-gray-500">
                {productById.category}
              </p>
              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                {productById.name}
              </h2>
              <p className="mb-4 text-3xl font-bold text-gray-900">
                ${productById.price}
              </p>
              <p className="mb-6 text-gray-600">{productById.description}</p>
            </div>
            {user && !isAdmin && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label htmlFor="count" className="text-sm font-medium">
                    Cantidad:
                  </label>
                  <div className="flex items-center rounded border px-0.5">
                    <button
                      type="button"
                      aria-label="Disminuir cantidad en 1"
                      datatype="minus"
                      disabled={count === 1}
                      onClick={handleCountOnClick}
                      className="flex size-9 cursor-pointer items-center justify-center rounded-md px-3 font-bold transition-colors hover:bg-gray-300 disabled:pointer-events-none"
                    >
                      <Minus className="size-5" />
                    </button>
                    <span
                      id="count"
                      className="min-w-[3rem] px-4 py-2 text-center font-semibold"
                    >
                      {count}
                    </span>
                    <button
                      type="button"
                      aria-label="Aumentar cantidad en 1"
                      datatype="plus"
                      onClick={handleCountOnClick}
                      className="flex size-9 cursor-pointer items-center justify-center rounded-md px-3 font-bold transition-colors hover:bg-gray-300 disabled:pointer-events-none"
                    >
                      <Plus className="size-5" />
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onAddProduct}
                  className="inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-semibold whitespace-nowrap text-white shadow-lg transition-colors hover:bg-blue-600/90 hover:shadow-xl"
                >
                  <CartIcon className="mr-2 size-4" />
                  Agregar al carrito
                </button>
              </div>
            )}
            <div className="grid grid-cols-3 gap-4 border-t border-b border-gray-300 py-4">
              <div className="text-center">
                <Truck className="mx-auto mb-2 text-green-600" />
                <p className="text-xs text-gray-600">Envío gratis</p>
              </div>
              <div className="text-center">
                <Shield className="mx-auto mb-2 text-blue-600" />
                <p className="text-xs text-gray-600">2 años de garantía</p>
              </div>
              <div className="text-center">
                <RotateCcw className="mx-auto mb-2 text-orange-600" />
                <p className="text-xs text-gray-600">Devoluciones en 30 días</p>
              </div>
            </div>
            {isAdmin && (
              <div className="grid gap-4">
                <Link
                  to={`/admin/${id}`}
                  className="inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-semibold whitespace-nowrap text-white shadow-lg transition-colors hover:bg-blue-600/90 hover:shadow-xl"
                >
                  Editar producto
                </Link>
                <button
                  type="button"
                  className="inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-gray-300 px-4 py-2 font-semibold whitespace-nowrap text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:bg-white/70"
                  onClick={() => void handleOnDeleteClick()}
                >
                  <Trash2 className="size-4 text-red-400 transition-colors hover:text-red-600" />
                  Eliminar producto
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

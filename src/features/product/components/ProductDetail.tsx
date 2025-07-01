import { useState, type MouseEvent } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "sonner";

import { Minus, Plus } from "@/features/cart/components/CartIcons";
import { useCart } from "@/features/cart/hooks/use-cart";
import { useProduct } from "@/features/product/hooks/use-product";
import { useUser } from "@/features/user/hooks/use-user";
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

  if (!productById)
    return (
      <main className="mx-auto grid max-w-7xl content-center">
        <p className={`font-bold ${loading ? "" : "text-red-500"} `}>
          {loading
            ? "Cargando..."
            : `El producto con el ID ${id.toString()} no existe`}
        </p>
      </main>
    );

  const onAddProduct = () => {
    toast.success(
      `Agregaste ${count.toString()} ${productById.name} al carrito`,
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
          {user && !isAdmin && (
            <>
              <div className="flex items-center gap-4 text-xl">
                <button
                  type="button"
                  datatype="minus"
                  onClick={handleCountOnClick}
                  className="flex size-8 cursor-pointer items-center justify-center rounded-lg bg-gray-500 font-bold"
                >
                  <Minus className="size-5" />
                </button>
                <span>{count}</span>
                <button
                  type="button"
                  datatype="plus"
                  onClick={handleCountOnClick}
                  className="flex size-8 cursor-pointer items-center justify-center rounded-lg bg-gray-500 font-bold"
                >
                  <Plus className="size-5" />
                </button>
              </div>
              <button
                type="button"
                onClick={onAddProduct}
                className="cursor-pointer rounded-lg bg-gray-500 px-4 py-2 font-bold"
              >
                Agregar al carrito
              </button>
            </>
          )}
          {isAdmin && (
            <>
              <Link
                to={`/admin/${id}`}
                className="cursor-pointer rounded-lg bg-gray-500 px-4 py-2 text-center font-bold"
              >
                Editar producto
              </Link>
              <button
                type="button"
                className="cursor-pointer rounded-lg bg-gray-500 px-4 py-2 font-bold"
                onClick={() => void handleOnDeleteClick()}
              >
                Eliminar producto
              </button>
            </>
          )}
        </div>
      </main>
    </>
  );
};

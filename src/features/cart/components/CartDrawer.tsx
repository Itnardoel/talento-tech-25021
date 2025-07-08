import { toast } from "sonner";

import { useCart } from "../hooks/use-cart";
import { cartReducer } from "../utils/cart-reducer";

import { Minus, Plus, ShoppingBagIcon, Trash, Trash2, X } from "./CartIcons";

import { useModalConfirm } from "@/shared/hooks/use-modal-confirm";

interface onDeleteProductParams {
  id: string;
  name: string;
}

export const CartDrawer = () => {
  const {
    cart,
    closeCart,
    isOpen,
    handleDeleteProduct,
    handleClearCart,
    handleUpdateQuantity,
  } = useCart();

  const confirm = useModalConfirm();

  const onDeleteProduct = async ({ id, name }: onDeleteProductParams) => {
    const confirmed = await confirm({
      message: "¿Estás seguro de eliminar este ítem?",
    });

    if (confirmed) {
      toast.error(`${name} fue eliminado del carrito`);
      handleDeleteProduct(id);
    }
  };

  const onClearCart = async () => {
    const confirmed = await confirm({
      message: "¿Estás seguro de vaciar el carrito?",
      confirm: "Vaciar",
    });

    if (confirmed) {
      toast.info("Se vació el carrito");
      handleClearCart();
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={closeCart} />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-40 flex h-dvh w-full max-w-sm flex-col bg-white text-black shadow-lg transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="flex items-center justify-between border-b border-gray-200 p-6">
          <div className="flex items-center space-x-2">
            <ShoppingBagIcon />
            <h2 className="text-lg font-bold">{`Tu carrito (${cartReducer(cart, "totalProducts").toString()})`}</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="cursor-pointer rounded p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-500"
          >
            <X />
          </button>
        </header>

        <main className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center p-6 text-center">
              <ShoppingBagIcon className="mb-4 h-16 w-16 text-gray-300" />
              <h3 className="mb-2 text-lg font-medium text-gray-900">
                Tu carrito esta vacio
              </h3>
              <p className="mb-6 text-gray-500">
                ¡Agrega algunos productos para comenzar!
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="cursor-pointer rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
              >
                Seguir comprando
              </button>
            </div>
          ) : (
            <div className="space-y-4 p-6">
              {cart.map(({ avatar, id, name, price, quantity }) => (
                <div
                  key={id}
                  className="flex items-center space-x-4 rounded-lg bg-gray-50 p-4"
                >
                  <img
                    src={avatar}
                    alt={name}
                    className="size-16 rounded-lg object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-medium text-gray-900">
                      {name}
                    </h3>
                    <p className="text-sm text-gray-500">${price}</p>

                    <div className="mt-2 flex items-center space-x-2">
                      <button
                        type="button"
                        disabled={quantity === 1}
                        onClick={() => {
                          handleUpdateQuantity({ id, quantity: quantity - 1 });
                        }}
                        className="cursor-pointer rounded p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 disabled:pointer-events-none"
                      >
                        <Minus className="size-4" />
                      </button>
                      <span className="min-w-[2rem] text-center text-sm font-medium text-gray-900">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          handleUpdateQuantity({ id, quantity: quantity + 1 });
                        }}
                        className="cursor-pointer rounded p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600"
                      >
                        <Plus className="size-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end space-y-2">
                    <span className="text-sm font-semibold text-gray-900">
                      ${(Number(price) * quantity).toFixed(2)}
                    </span>
                    <button
                      type="button"
                      title="Eliminar producto"
                      onClick={() => {
                        onDeleteProduct({ id, name });
                      }}
                      className="cursor-pointer rounded p-2 text-red-400 transition-colors duration-200 hover:bg-gray-100 hover:text-red-600"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>

        {cart.length > 0 && (
          <footer className="space-y-4 border-t border-gray-200 p-6">
            <div className="flex items-center justify-between text-lg font-semibold">
              <p>Total: ${cartReducer(cart, "totalPrice")}</p>
              <button
                type="button"
                title="Vaciar carrito"
                onClick={() => void onClearCart()}
                className="cursor-pointer self-center rounded p-2 text-red-400 transition-colors duration-200 hover:bg-gray-100 hover:text-red-600"
              >
                <Trash className="size-5" />
              </button>
            </div>
            <button
              type="button"
              className="w-full transform cursor-pointer rounded-full bg-blue-600 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
            >
              Finalizar compra
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full cursor-pointer rounded-full border-2 border-gray-300 py-3 font-semibold text-gray-700 transition-colors duration-200 hover:border-gray-400"
            >
              Seguir comprando
            </button>
          </footer>
        )}
      </aside>
    </>
  );
};

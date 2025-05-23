import { useCart } from "@/hooks/use-cart";
import { cartReducer } from "@/utils/cart-reducer";

export const CartPage = () => {
  const { cart, handleDeleteProduct } = useCart();

  return (
    <main
      className={`mx-auto ${cart.length === 0 ? "grid" : ""} w-full max-w-7xl overflow-x-auto sm:w-auto`}
    >
      {cart.length === 0 ? (
        <p className="content-center">Tu carrito esta vacio</p>
      ) : (
        <>
          <section className="overflow-x-auto p-4">
            <table className="min-w-xl border-collapse border md:min-w-2xl lg:min-w-4xl xl:min-w-6xl">
              <thead>
                <tr className="border-b-2">
                  <td className="p-4 font-semibold">Cant</td>
                  <td className="p-2 text-left font-semibold">Nombre</td>
                  <td className="min-w-24 p-4 font-semibold">Precio U</td>
                  <td className="min-w-24 p-4 font-semibold">Precio T</td>
                  <td className="min-w-20 p-4 font-semibold">Foto</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {cart.map(({ avatar, quantity, id, name, price }) => (
                  <tr className="h-20 border-b" key={id}>
                    <td className="p-4 text-center font-semibold">
                      {quantity}
                    </td>
                    <td className="p-2 text-left font-semibold">{name}</td>
                    <td className="min-w-24 p-4 font-semibold">{price}</td>
                    <td className="min-w-24 p-4 font-semibold">
                      {(Number(price) * quantity).toFixed(2)}
                    </td>
                    <td>
                      <img
                        src={avatar}
                        alt={name}
                        className="mx-auto size-28 min-w-28 object-contain p-2"
                      />
                    </td>
                    <td className="p-2">
                      <button
                        type="button"
                        onClick={() => {
                          handleDeleteProduct(id);
                        }}
                        className="size-8 cursor-pointer rounded-lg bg-gray-500 font-bold"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <div className="flex flex-col items-start p-4 leading-4">
            <p className="text-xl font-bold">
              Total: $ {cartReducer(cart, "totalPrice")}
            </p>
            <p className="font-semibold">
              Productos agregados: {cartReducer(cart, "totalProducts")}
            </p>
          </div>
        </>
      )}
    </main>
  );
};

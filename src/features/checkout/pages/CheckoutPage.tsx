import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { useCart } from "@/features/cart/hooks/use-cart";
import { cartReducer } from "@/features/cart/utils/cart-reducer";

export const CheckoutPage = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  const handleConfirm = () => {
    setIsLoading(true);

    setTimeout(() => {
      navigate("/success");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto w-full max-w-3xl rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Resumen de tu compra
        </h1>

        <ul className="divide-y divide-gray-200">
          {cart.map(
            ({ id, name, price, quantity, avatar, category, description }) => (
              <li key={id} className="flex items-start space-x-4 py-4">
                <img
                  src={avatar}
                  alt={name}
                  className="mt-1 size-16 rounded border border-gray-200 object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-gray-900">
                    {name}
                  </h2>
                  <p className="text-xs text-gray-500">{category}</p>
                  <p className="mt-1 line-clamp-2 text-xs text-gray-500">
                    {description}
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    Cantidad: <span className="font-medium">{quantity}</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-700">Subtotal</p>
                  <p className="font-semibold text-gray-900">
                    ${(Number(price) * quantity).toFixed(2)}
                  </p>
                </div>
              </li>
            ),
          )}
        </ul>

        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between text-lg font-semibold text-gray-900">
            <span>Total:</span>
            <span>${cartReducer(cart, "totalPrice")}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleConfirm}
          disabled={isLoading}
          className={`mt-6 w-full rounded-lg py-3 font-semibold transition-all ${
            isLoading
              ? "cursor-not-allowed bg-gray-400 text-white"
              : "cursor-pointer bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {isLoading ? "Procesando compra..." : "Confirmar compra"}
        </button>
      </div>
    </div>
  );
};

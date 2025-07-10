import { useMemo } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import { Check } from "../components/Check";

import { useCart } from "@/features/cart/hooks/use-cart";

export const ThankYouPage = () => {
  const { handleClearCart } = useCart();
  const navigate = useNavigate();

  const orderId = useMemo(() => {
    return `ORD-${Math.floor(100000 + Math.random() * 900000).toString()}`;
  }, []);

  const handleSuccessButton = () => {
    handleClearCart();
    toast.success("¡Gracias por tu compra!");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 text-center shadow-md">
        <div className="flex justify-center">
          <Check className="size-16 text-green-500" />
        </div>

        <h1 className="text-2xl font-bold text-green-600">
          Compra realizada con éxito
        </h1>

        <p className="text-gray-700">Pedido confirmado con el número:</p>

        <p className="font-mono text-lg font-semibold text-blue-600">
          {orderId}
        </p>

        <p className="text-sm text-gray-500">
          Se enviará una confirmación al correo electrónico en breve.
        </p>

        <button
          type="button"
          onClick={handleSuccessButton}
          className="mt-4 w-full cursor-pointer rounded bg-blue-600 py-3 font-semibold text-white transition-all hover:bg-blue-700"
        >
          Ir al inicio
        </button>
      </div>
    </div>
  );
};

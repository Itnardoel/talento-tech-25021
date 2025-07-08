import { toast } from "sonner";

import { useCart } from "@/features/cart/hooks/use-cart";
import { LoginForm } from "@/features/user/components/LoginForm";
import { useUser } from "@/features/user/hooks/use-user";

export const UserPage = () => {
  const { user, handleLogout } = useUser();
  const { handleClearCart } = useCart();

  const handleClick = () => {
    handleLogout();
    handleClearCart();
    toast.info("Saliste de la cuenta");
  };

  return (
    <>
      <title>Iniciar sesión | HardNexus</title>

      <main className="mx-auto grid w-full max-w-7xl place-items-center gap-2">
        {user ? (
          <button
            type="button"
            onClick={handleClick}
            className="inline-flex h-10 w-full max-w-80 cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-semibold whitespace-nowrap text-white shadow-lg transition-colors hover:bg-blue-600/90 hover:shadow-xl"
          >
            Logout
          </button>
        ) : (
          <LoginForm />
        )}
      </main>
    </>
  );
};

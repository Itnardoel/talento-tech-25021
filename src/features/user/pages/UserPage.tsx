import { toast } from "sonner";

import { LoginForm } from "@/features/user/components/LoginForm";
import { useUser } from "@/features/user/hooks/use-user";

export const UserPage = () => {
  const { user, handleLogout } = useUser();

  const handleClick = () => {
    handleLogout();
    toast.info("Saliste de la cuenta");
  };

  return (
    <main className="grid place-content-center gap-2">
      {user ? (
        <button
          type="button"
          onClick={handleClick}
          className="cursor-pointer rounded-lg bg-gray-500 px-4 py-2"
        >
          Logout
        </button>
      ) : (
        <LoginForm />
      )}
    </main>
  );
};

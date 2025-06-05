import { toast } from "sonner";

import { useUser } from "@/hooks/use-user";

export const UserPage = () => {
  const { user, handleLogin, handleLogout } = useUser();

  const onUserLog = () => {
    if (!user) {
      handleLogin();
      toast.success("Ingresaste con éxito");
    } else {
      handleLogout();
      toast.info("Saliste de la cuenta");
    }
  };

  return (
    <main className="grid place-content-center gap-2">
      <h2 className="text-2xl font-bold">Logueate para ver la ruta privada</h2>
      <button
        type="button"
        onClick={onUserLog}
        className="cursor-pointer rounded-lg bg-gray-500 px-4 py-2"
      >
        {user ? "Logout" : "Login"}
      </button>
    </main>
  );
};

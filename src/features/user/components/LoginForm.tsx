import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import type { User } from "../types/user-type";

import { useUser } from "@/features/user/hooks/use-user";

export const LoginForm = () => {
  const [formValues, setFormValues] = useState<User>({
    email: "",
    password: "",
    role: "USER",
  });

  const { handleLogin } = useUser();

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formValues.email === "admin" && formValues.password === "1234") {
      navigate("/");
      handleLogin({ ...formValues, role: "ADMIN" });
      toast.success("Ingresaste con éxito como Admin");
    } else if (formValues.email === "user" && formValues.password === "1234") {
      navigate("/");
      handleLogin(formValues);
      toast.success("Ingresaste con éxito como User");
    } else {
      toast.info("Credenciales incorrectas");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-80 flex-col gap-2"
    >
      <h2 className="text-2xl font-bold">Iniciar sesión</h2>

      <label className="flex flex-col gap-2">
        Email:
        <input
          type="text"
          name="email"
          autoComplete="off"
          value={formValues.email}
          onChange={(event) => {
            setFormValues({ ...formValues, email: event.target.value });
          }}
          className="rounded border px-2 py-1"
        />
      </label>

      <label className="flex flex-col gap-2">
        Contraseña:
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={(event) => {
            setFormValues({ ...formValues, password: event.target.value });
          }}
          className="rounded border px-2 py-1"
        />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-semibold whitespace-nowrap text-white shadow-lg transition-colors hover:bg-blue-600/90 hover:shadow-xl"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

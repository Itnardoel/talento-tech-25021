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

    navigate("/");
    if (formValues.email === "admin" && formValues.password === "1234") {
      handleLogin({ ...formValues, role: "ADMIN" });
      toast.success("Ingresaste con éxito como Admin");
    } else if (formValues.email === "user" && formValues.password === "1234") {
      handleLogin(formValues);
      toast.success("Ingresaste con éxito como User");
    } else {
      toast.info("Credenciales incorrectas");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">Iniciar sesión</h2>

      <label className="flex flex-col gap-2">
        Email:
        <input
          type="text"
          value={formValues.email}
          onChange={(event) => {
            setFormValues({ ...formValues, email: event.target.value });
          }}
        />
      </label>

      <label className="flex flex-col gap-2">
        Contraseña:
        <input
          type="password"
          value={formValues.password}
          onChange={(event) => {
            setFormValues({ ...formValues, password: event.target.value });
          }}
        />
      </label>

      <button
        type="submit"
        className="cursor-pointer rounded-lg bg-gray-500 px-4 py-2"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

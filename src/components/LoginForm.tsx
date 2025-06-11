import { useState } from "react";

export const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
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

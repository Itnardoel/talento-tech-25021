import Dropdown from "./Dropdown";
import { User } from "./Icons";

import { useAuth0User } from "@/features/user/hooks/use-auth0-user";

export default function AuthDropdown() {
  const { user, isAuthenticated, isLoading, login, logout } = useAuth0User();

  if (isLoading)
    return (
      <User className="mr-2 text-gray-400 transition-colors duration-200 hover:text-gray-500" />
    );

  const options = isAuthenticated
    ? [
        {
          label: user?.email,
        },
        {
          label: "Cerrar sesión",
          onClick: () => logout(),
        },
      ]
    : [
        {
          label: "Registrarse",
          onClick: () =>
            login({ authorizationParams: { screen_hint: "signup" } }),
        },
        {
          label: "Iniciar sesión",
          onClick: () => login(),
        },
      ];

  return (
    <Dropdown
      name={
        <User className="text-gray-400 transition-colors duration-200 hover:text-gray-500" />
      }
      options={options}
    />
  );
}

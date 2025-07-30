import { useAuth0 } from "@auth0/auth0-react";

export const useAuth0User = () => {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0();

  const role = user?.["https://talento-tech-25021.netlify.app/role"] as string;
  const isAdmin = role === "ADMIN";

  return {
    user,
    isAuthenticated,
    isLoading,
    login: loginWithRedirect,
    logout,
    role,
    isAdmin,
  };
};

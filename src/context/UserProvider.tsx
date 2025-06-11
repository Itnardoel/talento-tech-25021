import { useState, useMemo, type ReactNode } from "react";

import { UserContext } from "./user-context";

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState(false);

  const handleLogin = (userName: string) => {
    const token = `fake-token-${userName}`;
    localStorage.setItem("authToken", token);
    setUser(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUser(false);
  };

  const value = useMemo(() => ({ user, handleLogin, handleLogout }), [user]);

  return <UserContext value={value}>{children}</UserContext>;
};

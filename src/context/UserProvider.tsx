import { useState, useMemo, type ReactNode } from "react";

import { UserContext } from "./user-context";

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState(false);

  const handleLogin = () => {
    setUser(true);
  };

  const handleLogout = () => {
    setUser(false);
  };

  const value = useMemo(() => ({ user, handleLogin, handleLogout }), [user]);

  return <UserContext value={value}>{children}</UserContext>;
};

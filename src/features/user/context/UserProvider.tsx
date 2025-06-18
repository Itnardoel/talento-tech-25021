import { useState, useMemo, type ReactNode } from "react";

import type { User } from "../types/user-type";

import { UserContext } from "./user-context";

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState(localStorage.getItem("authToken"));

  const handleLogin = (user: User) => {
    const token = `fake-token-${user.email}-${user.role}`;
    localStorage.setItem("authToken", token);
    setUser(token);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  const value = useMemo(() => ({ user, handleLogin, handleLogout }), [user]);

  return <UserContext value={value}>{children}</UserContext>;
};

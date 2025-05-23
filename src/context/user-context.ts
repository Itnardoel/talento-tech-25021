import { createContext } from "react";

interface UserContext {
  user: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
}

export const UserContext = createContext<UserContext | undefined>(undefined);

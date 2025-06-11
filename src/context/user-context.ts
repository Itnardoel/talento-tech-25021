import { createContext } from "react";

interface UserContext {
  user: boolean;
  handleLogin: (userName: string) => void;
  handleLogout: () => void;
}

export const UserContext = createContext<UserContext | undefined>(undefined);

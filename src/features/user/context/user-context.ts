import { createContext } from "react";

import type { User } from "../types/user-type";

interface UserContext {
  user: string | null;
  handleLogin: (user: User) => void;
  handleLogout: () => void;
}

export const UserContext = createContext<UserContext | undefined>(undefined);

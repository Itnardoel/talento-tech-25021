import { use } from "react";

import { UserContext } from "@/features/user/context/user-context";

export function useUser() {
  const context = use(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}

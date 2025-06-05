import { use } from "react";

import { UserContext } from "@/context/user-context";

export function useUser() {
  const context = use(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within an AuthProvider");
  }

  return context;
}

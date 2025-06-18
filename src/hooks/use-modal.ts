import { use } from "react";

import { ModalContext } from "@/context/modal-context";

export const useModal = () => {
  const context = use(ModalContext);

  if (context === undefined) {
    throw new Error("useCart must be used within an AuthProvider");
  }

  return context;
};

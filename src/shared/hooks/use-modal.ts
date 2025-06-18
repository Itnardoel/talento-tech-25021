import { use } from "react";

import { ModalContext } from "@/shared/context/modal-context";

export const useModal = () => {
  const context = use(ModalContext);

  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};

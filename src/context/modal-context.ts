import { createContext, type ReactNode } from "react";

interface ModalContext {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContext | undefined>(undefined);

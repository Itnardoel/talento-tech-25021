import { type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

import { useModal } from "@/shared/hooks/use-modal";

interface ModalProps {
  children: ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  const { closeModal } = useModal();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [closeModal]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  const $modalRoot = document.getElementById("modal-root");
  if (!$modalRoot || !children) return null;

  return createPortal(
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
    >
      <div className="w-full max-w-lg rounded-lg bg-gray-50 p-6 shadow-lg">
        {children}
      </div>
    </div>,
    $modalRoot,
  );
};

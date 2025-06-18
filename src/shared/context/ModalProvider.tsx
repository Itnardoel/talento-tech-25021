import { useMemo, useState, type ReactNode } from "react";

import { Modal } from "@/shared/components/Modal";
import { ModalContext } from "@/shared/context/modal-context";

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
  };
  const closeModal = () => {
    setModalContent(null);
  };

  const value = useMemo(() => ({ openModal, closeModal }), []);

  return (
    <ModalContext value={value}>
      {children}
      <Modal>{modalContent}</Modal>
    </ModalContext>
  );
};

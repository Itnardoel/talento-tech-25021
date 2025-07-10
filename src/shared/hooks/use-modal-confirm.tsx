import { ModalConfirm } from "@/shared/components/ModalConfirm";
import { useModal } from "@/shared/hooks/use-modal";

interface useModalConfirmParams {
  message: string;
  confirm?: string;
  cancel?: string;
}

export const useModalConfirm = () => {
  const { openModal, closeModal } = useModal();

  return ({
    message,
    confirm,
    cancel,
  }: useModalConfirmParams): Promise<boolean> =>
    new Promise((resolve) => {
      const handleConfirm = () => {
        resolve(true);
        closeModal();
      };

      const handleCancel = () => {
        resolve(false);
        closeModal();
      };

      openModal(
        <ModalConfirm
          message={message}
          confirm={confirm}
          cancel={cancel}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />,
      );
    });
};

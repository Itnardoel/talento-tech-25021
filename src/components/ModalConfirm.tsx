interface ModalConfirmProps {
  message: string;
  confirm?: string;
  cancel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ModalConfirm = ({
  message,
  confirm,
  cancel,
  onConfirm,
  onCancel,
}: ModalConfirmProps) => {
  return (
    <div className="text-center">
      <p className="mb-4 text-lg">{message}</p>
      <div className="flex justify-center gap-4">
        <button
          type="button"
          className="cursor-pointer rounded-md bg-red-600 px-4 py-2 text-white"
          onClick={onConfirm}
        >
          {confirm ?? "Eliminar"}
        </button>
        <button
          type="button"
          className="cursor-pointer rounded-md bg-gray-300 px-4 py-2 text-gray-800"
          onClick={onCancel}
        >
          {cancel ?? "Cancelar"}
        </button>
      </div>
    </div>
  );
};

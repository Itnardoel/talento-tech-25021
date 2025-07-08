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
          className="cursor-pointer rounded-md bg-gray-300 px-4 py-2 text-gray-800 transition-colors hover:bg-gray-200"
          onClick={onCancel}
        >
          {cancel ?? "Cancelar"}
        </button>
        <button
          type="button"
          className="cursor-pointer rounded-md bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
          onClick={onConfirm}
        >
          {confirm ?? "Eliminar"}
        </button>
      </div>
    </div>
  );
};

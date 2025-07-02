import { MessageSquareWarning } from "@/shared/components/Icons";

export const ProductsNotFound = () => {
  return (
    <div className="place-content-center py-12 text-center">
      <div className="mb-4 text-gray-400">
        <MessageSquareWarning className="mx-auto size-12" />
      </div>
      <h3 className="mb-2 text-lg font-medium text-gray-900">
        No se encontraron productos
      </h3>
      <p className="text-gray-500">
        Intenta ajustar tus criterios de búsqueda o filtros.
      </p>
    </div>
  );
};

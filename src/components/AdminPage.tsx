import { isAxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";

import { ProductForm } from "./ProductForm";

import type { ProductToAdd } from "@/types/product-type";
import { api } from "@/utils/axios-instance";

export const AdminPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addProduct = async (product: ProductToAdd) => {
    setLoading(true);
    try {
      await api.post<ProductToAdd>("/products", product);

      toast.success(`Se agrego ${product.name} con éxito`);
    } catch (error) {
      if (isAxiosError(error)) {
        console.error("Error al obtener productos:", error.response);
        setError(error.message);
      } else {
        console.error("Error desconocido", error);
        setError("Ocurrió un error inesperado.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="grid place-content-center">
      <ProductForm onAddProduct={addProduct} loading={loading} error={error} />
    </main>
  );
};

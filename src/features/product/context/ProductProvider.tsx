import { isAxiosError } from "axios";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { toast } from "sonner";

import { ProductContext } from "./product-context";

import type {
  Product,
  ProductToAdd,
  ProductToEdit,
} from "@/shared/types/product-type";
import { api } from "@/shared/utils/axios-instance";

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const { data: products } = await api.get<Product[]>("/products");
      setProducts(products);
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

  const getProductById = useCallback(
    (id: string | undefined) => {
      return products.find((product) => product.id === id);
    },
    [products],
  );

  const addProduct = useCallback(async (product: ProductToAdd) => {
    setLoading(true);
    try {
      await api.post<ProductToAdd>("/products", product);

      toast.success(`Se agregó ${product.name} con éxito`);
      getAllProducts();
    } catch (error) {
      if (isAxiosError(error)) {
        console.error("Error al agregar producto:", error.response);
        setError(error.message);
      } else {
        console.error("Error desconocido", error);
        setError("Ocurrió un error inesperado.");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const editProduct = useCallback(async (product: ProductToEdit) => {
    setLoading(true);
    try {
      await api.put<ProductToEdit>(`/products/${product.id}`, product);

      toast.success(`Se editó ${product.name} con éxito`);
      getAllProducts();
    } catch (error) {
      if (isAxiosError(error)) {
        console.error("Error al editar producto:", error.response);
        setError(error.message);
      } else {
        console.error("Error desconocido", error);
        setError("Ocurrió un error inesperado.");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteProduct = useCallback(async (product: ProductToEdit) => {
    setLoading(true);
    try {
      await api.delete<ProductToEdit>(`/products/${product.id}`);

      toast.success(`Se eliminó ${product.name} con éxito`);
      getAllProducts();
    } catch (error) {
      if (isAxiosError(error)) {
        console.error("Error al editar producto:", error.response);
        setError(error.message);
      } else {
        console.error("Error desconocido", error);
        setError("Ocurrió un error inesperado.");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllProducts();
  }, []);

  const value = useMemo(
    () => ({
      products,
      loading,
      error,
      getAllProducts,
      getProductById,
      addProduct,
      editProduct,
      deleteProduct,
    }),
    [
      products,
      error,
      loading,
      addProduct,
      getProductById,
      editProduct,
      deleteProduct,
    ],
  );

  return <ProductContext value={value}>{children}</ProductContext>;
};

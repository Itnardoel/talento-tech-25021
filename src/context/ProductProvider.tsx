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

import type { Product, ProductToAdd } from "@/types/product-type";
import { api } from "@/utils/axios-instance";

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

  const addProduct = useCallback(async (product: ProductToAdd) => {
    setLoading(true);
    try {
      await api.post<ProductToAdd>("/products", product);

      toast.success(`Se agrego ${product.name} con éxito`);
      getAllProducts();
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
  }, []);

  useEffect(() => {
    getAllProducts();
  }, []);

  const value = useMemo(
    () => ({ products, loading, error, getAllProducts, addProduct }),
    [products, error, loading, addProduct],
  );

  return <ProductContext value={value}>{children}</ProductContext>;
};

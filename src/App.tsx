import { Route, Routes } from "react-router";
import { MainLayout } from "./layout/MainLayout";
import { MainPage } from "./components/MainPage";
import { ProductDetail } from "./components/ProductDetail";
import { CartPage } from "./components/CartPage";
import { useEffect, useState } from "react";
import { isAxiosError } from "axios";
import { api } from "./utils/axios-instance";
import type { Product } from "./types/product-type";
import { UserPage } from "./components/UserPage";
import { PrivatePage } from "./components/PrivatePage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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

    getAllProducts();
  }, []);

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <MainPage loading={loading} error={error} products={products} />
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/product/:id"
            element={<ProductDetail products={products} />}
          />
          <Route path="/user" element={<UserPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/protected" element={<PrivatePage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

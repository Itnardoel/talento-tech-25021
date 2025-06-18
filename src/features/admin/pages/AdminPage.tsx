import { useLocation, useParams } from "react-router";

import { AdminProductForm } from "@/features/admin/components/AdminProductForm";
import { useProduct } from "@/features/product/hooks/use-product";

export const AdminPage = () => {
  const location = useLocation();
  const { id } = useParams();

  const { getProductById } = useProduct();
  const productById = getProductById(id);

  if (id && !productById) {
    return <div className="grid place-content-center">Cargando...</div>;
  }

  return (
    <main className="grid place-content-center">
      <AdminProductForm key={location.pathname} productForEdit={productById} />
    </main>
  );
};

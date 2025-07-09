import { useLocation, useParams } from "react-router";

import { AdminProductFormSkeleton } from "../components/AdminProductFormSkeleton";

import { AdminProductForm } from "@/features/admin/components/AdminProductForm";
import { useProduct } from "@/features/product/hooks/use-product";

export const AdminPage = () => {
  const location = useLocation();
  const { id } = useParams();

  const { getProductById } = useProduct();
  const productById = getProductById(id);

  return (
    <>
      <title>Admin dashboard | HardNexus</title>
      <main className="mx-auto grid w-full max-w-7xl place-items-center">
        {id && !productById ? (
          <AdminProductFormSkeleton />
        ) : (
          <AdminProductForm
            key={location.pathname}
            productForEdit={productById}
          />
        )}
      </main>
    </>
  );
};

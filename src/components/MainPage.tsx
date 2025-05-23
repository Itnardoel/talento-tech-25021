import type { Product } from "@/types/product-type";
import { ProductCard } from "./ProductCard";

interface MainPageProps {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const MainPage = ({ error, loading, products }: MainPageProps) => {
  return (
    <main className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] justify-items-center gap-4 p-2 sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] sm:p-5">
      {loading && <p className="content-center">Cargando productos...</p>}
      {error && <p className="content-center text-red-500">{error}</p>}

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
};

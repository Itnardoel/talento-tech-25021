import { ProductCard } from "@/features/product/components/ProductCard";
import { useProduct } from "@/features/product/hooks/use-product";
import { ProductsNotFound } from "@/features/product-filter/components/ProductsNotFound";
import { useProductFilter } from "@/features/product-filter/hooks/use-product-filter";

export const MainPage = () => {
  const { error, loading, products } = useProduct();
  const { debouncedSearchQuery } = useProductFilter();

  const filteredProducts = debouncedSearchQuery
    ? products.filter((product) =>
        product.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()),
      )
    : products;

  return (
    <main className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] justify-items-center gap-4 p-2 sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] sm:p-5">
      {loading && <p className="content-center">Cargando productos...</p>}
      {error && <p className="content-center text-red-500">{error}</p>}

      {filteredProducts.length === 0 ? (
        <ProductsNotFound />
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </main>
  );
};

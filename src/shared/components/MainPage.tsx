import { ProductCard } from "@/features/product/components/ProductCard";
import { useProduct } from "@/features/product/hooks/use-product";
import { CategoryFilter } from "@/features/product-filter/components/CategoryFilter";
import { ProductsNotFound } from "@/features/product-filter/components/ProductsNotFound";
import { useProductFilter } from "@/features/product-filter/hooks/use-product-filter";

export const MainPage = () => {
  const { error, loading, products } = useProduct();
  const { debouncedSearchQuery, selectedCategory } = useProductFilter();

  const filteredProducts = products.filter((product) => {
    const matchName = product.name
      .toLowerCase()
      .includes(debouncedSearchQuery.toLowerCase());

    const matchCategory = selectedCategory
      ? product.category === selectedCategory
      : true;

    return matchName && matchCategory;
  });

  return (
    <>
      <main className="mx-auto flex w-full max-w-7xl flex-col px-4 py-12 sm:px-6 md:flex-row lg:px-8">
        <CategoryFilter />
        {loading && <p className="content-center">Cargando productos...</p>}
        {error && <p className="content-center text-red-500">{error}</p>}
        <section className="grid flex-1 grid-cols-[repeat(auto-fit,minmax(340px,1fr))] justify-items-center gap-4 p-2 sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] sm:p-5">
          {filteredProducts.length === 0 ? (
            <ProductsNotFound />
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </section>
      </main>
    </>
  );
};

import { Hero } from "./Hero";

import { ProductCard } from "@/features/product/components/ProductCard";
import { ProductPager } from "@/features/product/components/ProductPager";
import { ProductSkeleton } from "@/features/product/components/ProductSkeleton";
import { useProduct } from "@/features/product/hooks/use-product";
import { UseProductPager } from "@/features/product/hooks/use-product-pager";
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

  const { productsInPage, changePage, page, totalPages } =
    UseProductPager(filteredProducts);

  return (
    <>
      <Hero />
      <main
        id="productos"
        className="mx-auto flex w-full max-w-7xl flex-col px-4 py-12 sm:px-6 md:flex-row lg:px-8"
      >
        <CategoryFilter />
        <section className="flex flex-1 flex-col justify-center">
          <header
            className={`${loading || productsInPage.length === 0 ? "invisible" : "block"} px-2 sm:px-5`}
          >{`Mostrando ${productsInPage.length.toString()} productos`}</header>

          <div
            className={`grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] place-content-start gap-6 p-2 sm:p-5`}
          >
            {loading &&
              Array.from({ length: 8 }, (_, index) => (
                <ProductSkeleton key={index} />
              ))}

            {error && (
              <p className="col-span-full text-center text-red-500">{error}</p>
            )}

            {!loading && !error && productsInPage.length === 0 ? (
              <ProductsNotFound />
            ) : (
              productsInPage.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>

          {productsInPage.length > 0 && (
            <ProductPager
              page={page}
              totalPages={totalPages}
              onChangePage={changePage}
            />
          )}
        </section>
      </main>
    </>
  );
};

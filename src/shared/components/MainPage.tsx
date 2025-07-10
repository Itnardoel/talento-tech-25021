import { Hero } from "./Hero";

import { ProductCard } from "@/features/product/components/ProductCard";
import { ProductCardSkeleton } from "@/features/product/components/ProductCardSkeleton";
import { ProductPager } from "@/features/product/components/ProductPager";
import { useProduct } from "@/features/product/hooks/use-product";
import { UseProductPager } from "@/features/product/hooks/use-product-pager";
import { CategoryFilter } from "@/features/product-filter/components/CategoryFilter";
import { ProductsNotFound } from "@/features/product-filter/components/ProductsNotFound";
import { SortFilter } from "@/features/product-filter/components/SortFilter";
import { useProductFilter } from "@/features/product-filter/hooks/use-product-filter";

export const MainPage = () => {
  const { error, loading, products } = useProduct();
  const { debouncedSearchQuery, selectedCategory, selectedSort } =
    useProductFilter();

  const filteredProducts = products
    .filter((product) => {
      const matchName = product.name
        .toLowerCase()
        .includes(debouncedSearchQuery.toLowerCase());

      const matchCategory = selectedCategory
        ? product.category.toLowerCase() === selectedCategory
        : true;

      return matchName && matchCategory;
    })
    .sort((a, b) => {
      if (selectedSort === "price-low") {
        return Number(a.price) - Number(b.price);
      }

      if (selectedSort === "price-high") {
        return Number(b.price) - Number(a.price);
      }

      return 0;
    });

  const { productsInPage, changePage, page, totalPages } =
    UseProductPager(filteredProducts);

  return (
    <>
      <Hero />
      <main
        id="productos"
        className="mx-auto flex w-full max-w-7xl flex-col px-4 py-12 sm:px-6 md:flex-row lg:px-8 lg:py-24"
      >
        <CategoryFilter products={products} />
        <section className="mt-6 flex flex-1 flex-col">
          <header
            className={`${loading || productsInPage.length === 0 ? "invisible" : "flex justify-between gap-2"} py-2 text-sm sm:px-5 sm:text-base`}
          >
            {`Mostrando ${productsInPage.length.toString()} productos`}
            <SortFilter />
          </header>

          <div
            className={`grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] place-content-start gap-6 py-5 sm:p-5`}
          >
            {loading &&
              Array.from({ length: 8 }, (_, index) => (
                <ProductCardSkeleton key={index} />
              ))}

            {error && (
              <p className="col-span-full text-center text-red-500">{error}</p>
            )}

            {!(loading || products.length === 0) &&
            !error &&
            productsInPage.length === 0 ? (
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

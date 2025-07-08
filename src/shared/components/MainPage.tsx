import { useEffect } from "react";
import { useLocation } from "react-router";

import { Hero } from "./Hero";

import { ProductCard } from "@/features/product/components/ProductCard";
import { ProductCardSkeleton } from "@/features/product/components/ProductCardSkeleton";
import { ProductPager } from "@/features/product/components/ProductPager";
import { useProduct } from "@/features/product/hooks/use-product";
import { UseProductPager } from "@/features/product/hooks/use-product-pager";
import { CategoryFilter } from "@/features/product-filter/components/CategoryFilter";
import { ProductsNotFound } from "@/features/product-filter/components/ProductsNotFound";
import { useProductFilter } from "@/features/product-filter/hooks/use-product-filter";

export const MainPage = () => {
  const { error, loading, products } = useProduct();
  const { debouncedSearchQuery, selectedCategory } = useProductFilter();

  const location = useLocation();

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

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <main
        id="productos"
        className="mx-auto flex w-full max-w-7xl flex-col px-4 py-12 sm:px-6 md:flex-row lg:px-8 lg:py-24"
      >
        <CategoryFilter />
        <section className="mt-6 flex flex-1 flex-col justify-center">
          <header
            className={`${loading || productsInPage.length === 0 ? "invisible" : "block"} py-2 sm:px-5`}
          >{`Mostrando ${productsInPage.length.toString()} productos`}</header>

          <div
            className={`grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] place-content-start gap-6 sm:p-5`}
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

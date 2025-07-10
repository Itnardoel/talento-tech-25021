import { useProductFilter } from "../hooks/use-product-filter";

import { CategoryFilter } from "./CategoryFilter";

import { useProduct } from "@/features/product/hooks/use-product";

export const CategoryFilterDrawer = () => {
  const { products } = useProduct();

  const { isCategoryFilterDrawerOpen, setIsCategoryFilterDrawerOpen } =
    useProductFilter();

  return (
    <>
      {/* Overlay */}
      {isCategoryFilterDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => {
            setIsCategoryFilterDrawerOpen(false);
            document.body.classList.remove("overflow-hidden");
          }}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-40 flex h-dvh w-full max-w-sm flex-col bg-white text-black shadow-lg transition-transform duration-300 ${isCategoryFilterDrawerOpen ? "translate-x-0" : "translate-x-full"} `}
      >
        <CategoryFilter products={products} isMobile />
      </aside>
    </>
  );
};

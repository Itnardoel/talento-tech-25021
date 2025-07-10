import { useNavigate, useSearchParams } from "react-router";

import { categories } from "../const/categories";
import { useProductFilter } from "../hooks/use-product-filter";

import type { Product } from "@/shared/types/product-type";

interface CategoryFilterProps {
  products: Product[];
  isMobile?: boolean;
}

export const CategoryFilter = ({ products, isMobile }: CategoryFilterProps) => {
  const {
    selectedCategory,
    setSelectedCategory,
    setIsCategoryFilterDrawerOpen,
  } = useProductFilter();

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const handleOnClick = (category: string) => {
    setSelectedCategory(category);

    setSearchParams((prevURLSearchParams) => {
      if (category === "") {
        prevURLSearchParams.delete("category");
      } else {
        prevURLSearchParams.set("category", category);
      }

      prevURLSearchParams.set("page", "1");
      return prevURLSearchParams;
    });
  };

  const scrollToSection = () => {
    const $element = document.getElementById("productos");
    if ($element) {
      $element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      className={`h-fit bg-white p-6 ${isMobile ? "overflow-y-auto" : "hidden rounded-xl border border-gray-200 shadow-sm md:block"}`}
    >
      <h3 className="mb-4 text-lg font-semibold text-gray-900">Categorias</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            type="button"
            key={category.id}
            onClick={() => {
              handleOnClick(category.id);
              if (isMobile) {
                setIsCategoryFilterDrawerOpen(false);
                document.body.classList.remove("overflow-hidden");
                scrollToSection();
                navigate({
                  pathname: "/",
                  search: searchParams.toString(),
                });
              }
            }}
            className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg p-3 transition-all duration-200 ${
              selectedCategory === category.id
                ? "border border-blue-200 bg-blue-50 text-blue-700"
                : "border border-transparent text-gray-700 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center space-x-3">
              {category.icon}
              <span className="font-medium">{category.name}</span>
            </div>
            <span
              className={`inline-flex w-7 items-center justify-center rounded-full px-2 py-1 text-sm ${
                selectedCategory === category.id
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {category.name === "Todos"
                ? products.length
                : products.filter(
                    (product) => product.category === category.name,
                  ).length}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
};

import { categories } from "../const/categories";
import { useProductFilter } from "../hooks/use-product-filter";

import { Search } from "./SearchIcon";
export const CategoryFilter = () => {
  const { selectedCategory, setSelectedCategory } = useProductFilter();

  return (
    <aside className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">Categorias</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            type="button"
            key={category.id}
            onClick={() => {
              setSelectedCategory(category.id);
            }}
            className={`flex w-full cursor-pointer items-center justify-between rounded-lg p-3 transition-all duration-200 ${
              selectedCategory === category.id
                ? "border border-blue-200 bg-blue-50 text-blue-700"
                : "border border-transparent text-gray-700 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center space-x-3">
              {/* {IconComponent && <IconComponent className="h-5 w-5" />} */}
              <Search />
              <span className="font-medium">{category.name}</span>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
};

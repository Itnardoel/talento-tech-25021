import { useSearchParams } from "react-router";

import type { Product } from "@/shared/types/product-type";

export const UseProductPager = (products: Product[]) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const productPerPage = 8;

  const totalPages = Math.max(1, Math.ceil(products.length / productPerPage));

  let currentPage = Number(searchParams.get("page")) || 1;

  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages) currentPage = totalPages;

  const lastIndex = currentPage * productPerPage;
  const firstIndex = lastIndex - productPerPage;

  const productsInPage = products.slice(firstIndex, lastIndex);

  const changePage = (pageNumber: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", pageNumber.toString());
    setSearchParams(newParams);
  };

  return { productsInPage, page: currentPage, totalPages, changePage };
};

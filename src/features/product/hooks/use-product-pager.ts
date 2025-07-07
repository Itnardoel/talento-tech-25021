import { useState } from "react";

import type { Product } from "@/shared/types/product-type";

export const UseProductPager = (products: Product[]) => {
  const [page, setPage] = useState(1);

  const productPerPage = 8;
  const totalPages = Math.max(1, Math.ceil(products.length / productPerPage));

  if (page > totalPages) {
    setPage(1);
  }

  const lastIndex = page * productPerPage;
  const firstIndex = lastIndex - productPerPage;

  const productsInPage = products.slice(firstIndex, lastIndex);

  const changePage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return { productsInPage, page, totalPages, changePage };
};

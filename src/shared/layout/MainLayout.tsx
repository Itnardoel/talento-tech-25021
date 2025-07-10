import { Outlet } from "react-router";

import { CartDrawer } from "@/features/cart/components/CartDrawer";
import { CategoryFilterDrawer } from "@/features/product-filter/components/CategoryFilterDrawer";
import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";

export const MainLayout = () => {
  return (
    <>
      <div className="grid min-h-dvh grid-rows-[auto_1fr_auto] bg-gray-50">
        <Header />
        <Outlet />
        <Footer />
      </div>
      <CartDrawer />
      <CategoryFilterDrawer />
    </>
  );
};

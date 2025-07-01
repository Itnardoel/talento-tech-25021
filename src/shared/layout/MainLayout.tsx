import { Outlet } from "react-router";

import { CartDrawer } from "@/features/cart/components/CartDrawer";
import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";

export const MainLayout = () => {
  return (
    <>
      <div className="relative grid min-h-dvh grid-rows-[auto_1fr_auto] overflow-x-hidden">
        <Header />
        <Outlet />
        <Footer />
      </div>
      <CartDrawer />
    </>
  );
};

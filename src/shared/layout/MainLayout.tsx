import { Outlet } from "react-router";

import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";

export const MainLayout = () => {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

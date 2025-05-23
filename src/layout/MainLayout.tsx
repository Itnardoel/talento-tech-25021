import { Outlet } from "react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const MainLayout = () => {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

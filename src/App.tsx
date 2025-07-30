import { Route, Routes } from "react-router";

import { AdminProductFormSkeleton } from "./features/admin/components/AdminProductFormSkeleton";
import { CheckoutPage } from "./features/checkout/pages/CheckoutPage";
import { ThankYouPage } from "./features/checkout/pages/ThankYouPage";

import { AdminPage } from "@/features/admin/pages/AdminPage";
import { ProductDetail } from "@/features/product/components/ProductDetail";
import { MainPage } from "@/shared/components/MainPage";
import ProtectedRoute from "@/shared/components/ProtectedRoute";
import { MainLayout } from "@/shared/layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route
          element={
            <ProtectedRoute
              allowedRole={"ADMIN"}
              fallback={<AdminProductFormSkeleton />}
            />
          }
        >
          <Route path="/admin/:id?" element={<AdminPage />} />
        </Route>
      </Route>
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/success" element={<ThankYouPage />} />
    </Routes>
  );
}

export default App;

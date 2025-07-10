import { Route, Routes } from "react-router";

import { CheckoutPage } from "./features/checkout/pages/CheckoutPage";
import { ThankYouPage } from "./features/checkout/pages/ThankYouPage";

import { AdminPage } from "@/features/admin/pages/AdminPage";
import { ProductDetail } from "@/features/product/components/ProductDetail";
import { UserPage } from "@/features/user/pages/UserPage";
import { MainPage } from "@/shared/components/MainPage";
import ProtectedRoute from "@/shared/components/ProtectedRoute";
import { MainLayout } from "@/shared/layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/user" element={<UserPage />} />
        <Route element={<ProtectedRoute allowedRole={"ADMIN"} />}>
          <Route path="/admin/:id?" element={<AdminPage />} />
        </Route>
      </Route>
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/success" element={<ThankYouPage />} />
    </Routes>
  );
}

export default App;

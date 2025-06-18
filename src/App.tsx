import { Route, Routes } from "react-router";

import { AdminPage } from "@/features/admin/pages/AdminPage";
import { CartPage } from "@/features/cart/pages/CartPage";
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
        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route element={<ProtectedRoute allowedRole={"ADMIN"} />}>
          <Route path="/admin/:id?" element={<AdminPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

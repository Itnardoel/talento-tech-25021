import { Route, Routes } from "react-router";

import { AdminPage } from "./components/AdminPage";
import { CartPage } from "./components/CartPage";
import { MainPage } from "./components/MainPage";
import { ProductDetail } from "./components/ProductDetail";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserPage } from "./components/UserPage";
import { MainLayout } from "./layout/MainLayout";

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

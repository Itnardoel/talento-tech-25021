import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Toaster } from "sonner";

import App from "@/App.tsx";
import { CartProvider } from "@/features/cart/context/CartProvider";
import { ProductProvider } from "@/features/product/context/ProductProvider";
import { UserProvider } from "@/features/user/context/UserProvider";
import { ModalProvider } from "@/shared/context/ModalProvider";

import "./index.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <UserProvider>
        <ProductProvider>
          <ModalProvider>
            <BrowserRouter>
              <Toaster richColors />
              <App />
            </BrowserRouter>
          </ModalProvider>
        </ProductProvider>
      </UserProvider>
    </CartProvider>
  </StrictMode>,
);

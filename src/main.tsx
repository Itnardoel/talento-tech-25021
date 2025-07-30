import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Toaster } from "sonner";

import App from "@/App.tsx";
import { CartProvider } from "@/features/cart/context/CartProvider";
import { ProductProvider } from "@/features/product/context/ProductProvider";
import { ProductFilterProvider } from "@/features/product-filter/context/ProductFilterProvider";
import { Auth0ProviderWithNavigate } from "@/features/user/context/Auth0ProviderWithNavigate";
import { ModalProvider } from "@/shared/context/ModalProvider";

import "./index.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <CartProvider>
          <ProductProvider>
            <ProductFilterProvider>
              <ModalProvider>
                <Toaster richColors />
                <App />
              </ModalProvider>
            </ProductFilterProvider>
          </ProductProvider>
        </CartProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </StrictMode>,
);

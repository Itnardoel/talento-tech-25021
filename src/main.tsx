import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Toaster } from "sonner";

import App from "./App.tsx";
import { CartProvider } from "./context/CartProvider.tsx";
import "./index.css";
import { ModalProvider } from "./context/ModalProvider.tsx";
import { ProductProvider } from "./context/ProductProvider.tsx";
import { UserProvider } from "./context/UserProvider.tsx";

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

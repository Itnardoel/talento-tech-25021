import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { CartProvider } from "./context/CartProvider.tsx";
import App from "./App.tsx";
import "./index.css";
import { UserProvider } from "./context/UserProvider.tsx";
import { Toaster } from "sonner";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <UserProvider>
        <BrowserRouter>
          <Toaster richColors />
          <App />
        </BrowserRouter>
      </UserProvider>
    </CartProvider>
  </StrictMode>,
);

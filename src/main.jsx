import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CartContextProvider from "./context/CartContext.jsx";
import HomeContextProvider from "./context/homeContext.jsx";
import ProductsContextProvider from "./context/ProductsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomeContextProvider>
      <CartContextProvider>
        <ProductsContextProvider>
        <App />
        </ProductsContextProvider>
      </CartContextProvider>
    </HomeContextProvider>
  </StrictMode>
);

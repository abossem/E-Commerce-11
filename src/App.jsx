import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import GuestRoute from "./Components/GuestRoute/GuestRoute";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import ProductsPage from "./Pages/ProductsPage";
import Cart from "./Components/Cart/Cart";
import UserProvider from "./context/User.context";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import FilterProductsByCategory from "./pages/FilterProductsByCategory";
import CartContextProvider from "./context/CartContext";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <GuestRoute>
          <Layout />
        </GuestRoute>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/signup", element: <RegisterPage /> },
        { path: "/products", element: <ProductsPage /> },
        {
          path: "/products/category/:category",
          element: <FilterProductsByCategory />,
        },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);

  return (
    <>
      <UserProvider>
        <CartContextProvider>
          <RouterProvider router={routes}></RouterProvider>
        </CartContextProvider>
      </UserProvider>
    </>
  );
}

export default App;

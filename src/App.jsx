import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import GuestRoute from "./Components/GuestRoute/GuestRoute";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import Cart from "./Components/Cart/Cart";
import FilteredProducts from "./Pages/FilteredProducts";
import ProductDetails from "./Pages/ProductDetails";
import ErrorPage from "./Pages/ErrorPage";
import Orders from "./pages/Orders/Orders";
import { Toaster } from "react-hot-toast";
import UserProvider from "./context/User.context";
import HomeContextProvider from "./context/homeContext";
import CartContextProvider from "./context/CartContext";
import ProductsContextProvider from "./context/ProductsContext";
import OrderMethodPage from "./Pages/Orders/OrderMethodPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <GuestRoute>
          <Layout />
        </GuestRoute>
      ),
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/signup", element: <RegisterPage /> },
        { path: "/products", element: <ProductsPage /> },
        {
          path: "/products/:type/:value",
          element: <FilteredProducts />,
        },
        { path: "/cart", element: <Cart /> },
        {
          path: "/product/:productId",
          element: <ProductDetails />,
        },
        { path: "/orders", element: <Orders /> },
        { path: "/order-method", element: <OrderMethodPage /> },
      ],
    },
  ]);

  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <UserProvider>
        <HomeContextProvider>
          <CartContextProvider>
            <ProductsContextProvider>
              <RouterProvider router={routes}></RouterProvider>
            </ProductsContextProvider>
          </CartContextProvider>
        </HomeContextProvider>
      </UserProvider>
    </>
  );
}

export default App;

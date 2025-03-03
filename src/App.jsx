import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import GuestRoute from "./Components/GuestRoute/GuestRoute";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import ProductsPage from "./Pages/ProductsPage";
import Cart from "./Components/Cart/Cart";
import FilteredProducts from "./Pages/FilteredProducts";
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./Pages/ErrorPage";
import Orders from "./pages/Orders/Orders";
<<<<<<< HEAD
import { Toaster } from "react-hot-toast";
=======
import UserProvider from "./context/User.context";
import HomeContextProvider from "./context/homeContext";
import CartContextProvider from "./context/CartContext";
import ProductsContextProvider from "./context/ProductsContext";
import OrderMethodPage from "./Pages/Orders/OrderMethodPage";
>>>>>>> 4db08592fec098e334dc3e840ce21b52471f1794

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
          path: "/product/:id",
          element: <ProductDetails />,
        },
        { path: "/orders", element: <Orders /> },
        { path: "/order-method", element: <OrderMethodPage /> },
      ],
    },
  ]);

  return (
    <>
<<<<<<< HEAD
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={routes}></RouterProvider>
=======
      <UserProvider>
        <HomeContextProvider>
          <CartContextProvider>
            <ProductsContextProvider>
              <RouterProvider router={routes}></RouterProvider>
            </ProductsContextProvider>
          </CartContextProvider>
        </HomeContextProvider>
      </UserProvider>
>>>>>>> 4db08592fec098e334dc3e840ce21b52471f1794
    </>
  );
}

export default App;

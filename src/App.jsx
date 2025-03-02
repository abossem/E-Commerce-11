import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import GuestRoute from "./Components/GuestRoute/GuestRoute";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import ProductsPage from "./Pages/ProductsPage";
import Cart from "./Components/Cart/Cart";
import FilterProductsByCategory from "./Pages/FilteredProducts";
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./Pages/ErrorPage";
import Orders from "./pages/Orders/Orders";
import { Toaster } from "react-hot-toast";

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
          element: <FilterProductsByCategory />,
        },
        { path: "/cart", element: <Cart /> },
        {
          path: "/product/:id",
          element: <ProductDetails />,
        },
        { path: "/orders", element: <Orders /> },
      ],
    },
  ]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;

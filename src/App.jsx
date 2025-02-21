import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Pages/Layout';
import ProductsPage from "./Pages/ProductsPage";

const router = createBrowserRouter( [
  {
    path: "/",
    element: <Layout />,
    children: [
      {path: "products", element: <ProductsPage/>}
    ]
  }
] );

function App ()
{
  return <>
  <RouterProvider router={router} />
  </>;
}

export default App;

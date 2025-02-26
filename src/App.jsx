import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import ProductsPage from "./Pages/ProductsPage";
import Home from "./pages/Home";
import ProductsContextProvider from "./store/products-context";

function App() {
  return (
    <>
      <NavBar />
      {/* <Home /> */}
      <ProductsContextProvider>
        <ProductsPage />
      </ProductsContextProvider>
      <Footer />
    </>
  );
}

export default App;

import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <ProductsPage />
      <Cart />
      <Footer />
    </>
  );
}

export default App;

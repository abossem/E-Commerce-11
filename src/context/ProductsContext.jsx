import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useEffect, useRef, useState } from "react";

export const ProductsContext = createContext({
  products: [],
});

export default function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const lastProductRef = useRef(null);
  async function getProductsByBrand(brandName) {
    const options = {
      url: `https://e-commerce-11-api.vercel.app/api/api/products/brand/${brandName}`,
      method: "GET",
    };
    let { data } = await axios.request(options);
    console.log(data);
  }
  useEffect(() => {
    if (page > 7) return;
    const fetchProducts = async () => {
      setLoading(true);

      const url = "https://e-commerce-11-api.vercel.app/api/api/products?page=";
      const res = await fetch(url + page);
      const { data } = await res.json();
      setProducts((prev) => {
        // ✅ إزالة التكرارات بناءً على `id`
        const uniqueProducts = [...prev, ...data].reduce((acc, item) => {
          if (!acc.some((p) => p.id === item.id)) {
            acc.push(item);
          }
          return acc;
        }, []);
        return uniqueProducts;
      });
      // there is problem here

      setLoading(false);
    };

    fetchProducts();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (lastProductRef.current) {
      observer.observe(lastProductRef.current);
    }

    return () => {
      if (lastProductRef.current) {
        observer.unobserve(lastProductRef.current);
      }
    };
  }, [products]);

  const ctxValue = {
    products,
    lastProductRef,
    loading,
    getProductsByBrand,
  };

  return (
    <ProductsContext.Provider value={ctxValue}>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

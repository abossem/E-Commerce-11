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
  const lastProductRef = useRef( null );
  

  async function getProductsByBrand(brandName) {
    const options = {
      url: `https://e-commerce-11-api.vercel.app/api/api/products/brand/${brandName}`,
      method: "GET",
    };
    let { data } = await axios.request(options);
    if (data.status == "success") {
      setProducts(data.data);
    }
  }

  async function getProductsByRating ( rate )
  {
    const options = {
      url: `https://e-commerce-11-api.vercel.app/api/api/products/rating/${ rate }`,
      method: "GET",
    };
    let { data } = await axios.request( options );
    if ( data.status == "success" )
    {
      // this is work put take alot of time
      setProducts( Object.values(data.data) );
    }
  }

  async function getProductsByPrice ( range )
  {
    console.log( range );
    const options = {
      url: `https://e-commerce-11-api.vercel.app/api/api/products/price/${ range }`,
      method: "GET",
    };
    let { data } = await axios.request( options );
    if ( data.status == "success" )
    {
      setProducts( data.data );
    }
  }
  
  async function fetchProducts ()
  {
    setLoading( true );
    const url = "https://e-commerce-11-api.vercel.app/api/api/products?page=";
    const res = await fetch( url + page );
    const { data } = await res.json();
    setProducts( ( prev ) =>
    {
      const uniqueProducts = [ ...prev, ...data ].reduce( ( acc, item ) =>
      {
        if ( !acc.some( ( p ) => p.id === item.id ) )
        {
          acc.push( item );
        }
        return acc;
      }, [] );
      return uniqueProducts;
    } );
    setLoading( false );
  };

  useEffect(() => {
    if (page > 7) return;
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
    getProductsByRating,
    getProductsByPrice,
    fetchProducts
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

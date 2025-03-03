import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useEffect, useRef, useState } from "react";

export const ProductsContext = createContext({
  products: [],
});

export default function ProductsContextProvider({ children }) {
  const [ filteredProducts, setFilteredProducts ] = useState([]);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const lastProductRef = useRef( null );

  async function getProductsByBrand ( brandName )
  {
    setFilteredProducts( [] );
    const options = {
      url: `https://e-commerce-11-api.vercel.app/api/api/products/brand/${brandName}`,
      method: "GET",
    };
    setLoading(true);
    let { data } = await axios.request(options);
    if (data.status == "success") {
      setFilteredProducts(data.data);
    }
    setLoading(false);
  }

  async function getProductsByCategory ( categoryName )
  {
    setFilteredProducts( [] );
    const options = {
      url: `https://e-commerce-11-api.vercel.app/api/api/products/category/${categoryName}`,
      method: "GET",
    };
    setLoading( true );
    let { data } = await axios.request(options);
    if (data.status == "success") {
      setFilteredProducts(data.data);
    }
    setLoading( false );
  }

  async function getProductsByRating ( rate )
  {
    setFilteredProducts( [] );
    const options = {
      url: `https://e-commerce-11-api.vercel.app/api/api/products/rating/${ rate }`,
      method: "GET",
    };
    setLoading( true );
    let { data } = await axios.request( options );
    if ( data.status == "success" )
    {
      // this is work put take alot of time
      setFilteredProducts( Object.values(data.data) );
    }
    setLoading( false );
  }

  async function getProductsByPrice ( range )
  {
    setFilteredProducts( [] );
    const options = {
      url: `https://e-commerce-11-api.vercel.app/api/api/products/price/${ range }`,
      method: "GET",
    };
    setLoading( true );
    let { data } = await axios.request( options );
    if ( data.status == "success" )
    {
      setFilteredProducts( data.data );
    }
    setLoading( false );
  }
  
  async function fetchProducts (page=1)
  {
    setLoading( true );
    const options = {
      url: `https://e-commerce-11-api.vercel.app/api/api/products?page=${ page }`,
      method: "GET",
    };
    let { data } = await axios.request( options );
    data = data.data;// ;)
    setProducts( ( prev ) =>
    {
      const uniqueProducts = [ ...prev, ...data ].reduce( ( acc, item ) =>
      {
        if ( !acc.some( ( p ) => p.id === item.id ) ) acc.push( item );
        return acc;
      }, [] );
      return uniqueProducts;
    } );
    setLoading( false );
  };

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
    filteredProducts,
    page,
    fetchProducts,
    getProductsByBrand,
    getProductsByRating,
    getProductsByPrice,
    getProductsByCategory
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

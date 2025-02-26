import { createContext, useEffect, useRef, useState } from "react";

export const ProductsContext = createContext( {
  products: []
} );

export default function ProductsContextProvider ( { children } )
{
  const [ products, setProducts ] = useState( [] );
  const [ page, setPage ] = useState( 1 );
  const [ loading, setLoading ] = useState( false );
  const lastProductRef = useRef( null );

  // 🛒 جلب البيانات عندما يتغير رقم الصفحة
  useEffect( () =>
  {
    const fetchProducts = async () =>
    {
      setLoading( true );

        const url = 'https://e-commerce-11-api.vercel.app/api/api/products?page=';
        const res = await fetch( url+page );
        const {data} = await res.json();
      setProducts( ( prev ) =>
      {
        return Array.from(new Set( [...prev,...data ] ));
      } ); 
        // there is problem here

      setLoading( false );
    };

    fetchProducts();
  }, [ page ] );


  useEffect( () =>
  {
    const observer = new IntersectionObserver(
      ( entries ) =>
      {
        if ( entries[ 0 ].isIntersecting )
        {
          setPage( ( prev ) => prev + 1 ); 
        }
      },
      { threshold: 1.0 }
    );

    if ( lastProductRef.current )
    {
      observer.observe( lastProductRef.current );
    }

    return () =>
    {
      if ( lastProductRef.current )
      {
        observer.unobserve( lastProductRef.current );
      }
    };
  }, [ products ] ); 

  const ctxValue = {
    products,
    loading,
    lastProductRef 
  };

  return (
    <ProductsContext.Provider value={ ctxValue }>
      { children }
    </ProductsContext.Provider>
  );
}
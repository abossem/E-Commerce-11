import { useParams } from "react-router-dom";
import ProductSidebar from "../Components/Product/ProductSidebar";
import { useContext, useEffect } from "react";
import ProductCard from "../Components/Product/ProductCard";
import StaticLoading from "../Components/loading/StaticLoading";
import { ProductsContext } from "../context/ProductsContext";

function FilteredProducts ()
{
  const { type, value } = useParams();
  const {
    getProductsByBrand,
    getProductsByPrice,
    getProductsByRating,
    getProductsByCategory,
    filteredProducts,
    loading
  } = useContext( ProductsContext );
  
  useEffect(() => {
    if ( type === "brand" )
      getProductsByBrand( value );
    if ( type === "rating" )
      getProductsByRating( value );
    if ( type === "price" )
      getProductsByPrice( value );
    if ( type === "category" ) 
      getProductsByCategory( value );
  }, [type, value]);

  return (
    <div className="relative px-4 flex flex-col gap-3 lg:gap-0 lg:max-w-[1400px] lg:mx-auto lg:p-4 lg:grid lg:grid-cols-5">
      <ProductSidebar />

      <div
        className=" 
          lg:col-span-4 grid lg:grid-cols-3 xl:grid-cols-4 gap-3 content-start
          "
      >
        { filteredProducts &&
          filteredProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          } ) }
        { loading && <StaticLoading /> }
      </div>
      </div>
  );
}

export default FilteredProducts;

import ProductSidebar from "../Components/Product/ProductSidebar";
import ProductCard from "../Components/Product/ProductCard";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function ProductsPage() {
  const { products, loading, lastProductRef, fetchProducts } = useContext(ProductsContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="relative px-4 flex flex-col gap-3 lg:gap-0 lg:max-w-[1400px] lg:mx-auto lg:p-4 lg:grid lg:grid-cols-5">
        <ProductSidebar />
        <div
          className=" 
      lg:col-span-4 grid lg:grid-cols-3 xl:grid-cols-4 gap-3
      "
        >
          {products &&
            products.map((product, index) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  ref={index === products.length - 1 ? lastProductRef : null} // fix this
                />
              );
            })}
          {loading && <p>Loading more products...</p>}
        </div>
      </div>
    </>
  );
}

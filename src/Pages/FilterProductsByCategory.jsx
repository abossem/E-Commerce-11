import { useParams } from "react-router-dom";
import ProductSidebar from "../Components/Product/ProductSidebar";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "../Components/Product/ProductCard";
import Loading from "../components/loading/Loading";

function FilterProductsByCategory() {
  const { category } = useParams();
  const [filterProduct, setFilterProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log("Filtered...............", filterProduct);

  useEffect(() => {
    async function getData(category) {
      try {
        setIsLoading(true);

        const res = await fetch(
          `https://e-commerce-11-api.vercel.app/api/api/products/category/${category}`
        );

        const data = await res.json();

        setFilterProduct(data.data);
      } catch (err) {
        console.error("Cant fetch the categories", err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getData(category);
  }, [category]);

  return (
    <div className="relative px-4 flex flex-col gap-3 lg:gap-0 lg:max-w-[1400px] lg:mx-auto lg:p-4 lg:grid lg:grid-cols-5">
      <ProductSidebar />

      <div
        className=" 
          lg:col-span-4 grid lg:grid-cols-3 xl:grid-cols-4 gap-3
          "
      >
        {isLoading && <Loading />}
        {filterProduct &&
          filterProduct.map((product, index) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}

export default FilterProductsByCategory;

import PRODUCTS from '../data/Products';
import ProductSidebar from '../Components/Product/ProductSidebar';
import ProductCard from '../Components/Product/ProductCard';

export default function ProductsPage ()
{
  return <>
    <div
      className="relative px-4 flex flex-col gap-3 lg:gap-0 lg:max-w-[1400px] lg:mx-auto lg:p-4 lg:grid lg:grid-cols-5"
    >
      <ProductSidebar />
      <div className=" 
      lg:col-span-4 grid lg:grid-cols-3 xl:grid-cols-4 gap-3
      ">
        { PRODUCTS.map( ( product ) =>
        {
          return <ProductCard key={ product.id } product={ product } />;
        } ) }
      </div>
    </div>
  </>;
}
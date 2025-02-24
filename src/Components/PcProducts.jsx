import ProductSidebar from './ProductSidebar';
import ProductCard from './ProductCard';
import PRODUCTS from '../data/Products.json';

export default function PcProducts ()
{
  return <>
    <div className="max-w-[1400px] mx-auto p-4 lg:grid grid-cols-5 hidden">
      <ProductSidebar />
      <div
        className="cardContainer col-span-4 grid grid-cols-3 xl:grid-cols-4 gap-3">
        { PRODUCTS.map( product =>
        {
          return <ProductCard
            key={ product.id }
            name={ product.name }
            image_link={ product.image_link }
            price={ product.price }
            delivery_date={ product.delivery_date }
            reviews={ product.reviews }
          />;
        } ) }
      </div>
    </div>
  </>;
}
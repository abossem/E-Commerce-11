import PropTypes from "prop-types";
import StarRating from "./StarRating";
import { forwardRef } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = forwardRef(({ product }, ref) => {
  // console.log({ product });

  const { addItemToCart } = useCartContext();
  function formatCustomDate(dateString) {
    const date = new Date(dateString);

    // Get weekday and month abbreviation
    const options = { weekday: "short", day: "numeric", month: "short" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    // Define time range
    const timeRange = "7:00 am - 9:00 pm";

    return `${formattedDate} ${timeRange}`;
  }

  return (
    <div
      ref={ref}
      className="
        flex lg:flex-col self-stretch items-center border-1 border-[#D9D9D9]
        lg:gap-3 lg:justify-start lg:items-start lg:p-3 mb-7
      "
    >
      <div className="img w-[40%] max-h-[300px] lg:w-full">
        <Link
          to={ `/product/${ product.id }` }>
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full md:h-[200px] mx-auto object-cover "
          />
        </Link>
      </div>
      <div className="details w-[60%] lg:w-full p-5 flex flex-col gap-1">
        <Link
          to={`/product/${product.id}`}
          className="font-medium text-sm lg:text-base lg:hover:text-[#c45500] cursor-pointer"
        >
          {product.name}
        </Link>
        <div className="rating flex items-center gap-2">
          <span>{product.reviews_avg}</span>
          <div className="starts flex">
            <StarRating rating={Math.floor(product.reviews_avg)} />
          </div>
          <span>({product.reviews_count})</span>
        </div>
        <div className="price flex items-start font-medium">
          <span>USD</span>
          <span className="text-2xl">{product.price.split(".")[0]}</span>
          <span>{product.price.split(".")[1]}</span>
        </div>
        <div className="text-sm">
          <span>Get it as soon as </span>
          <span className="font-medium">
            {formatCustomDate(product.delivery_time)}
          </span>
        </div>
        <button
          onClick={ () =>
          {
            
            addItemToCart(product);
          }}
          className="w-full bg-amber-300 rounded-4xl py-3 text-sm mt-1 cursor-pointer hover:bg-yellow-300"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
});

ProductCard.displayName = "ProductCard";

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    reviews_avg: PropTypes.number.isRequired,
    reviews_count: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    delivery_time: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;

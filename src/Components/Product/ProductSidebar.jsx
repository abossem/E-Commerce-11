import { ChevronDown } from "lucide-react";
import { useState } from "react";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

export default function ProductSidebar() {
  const [showFilters, setShowFilters] = useState(false);

  const brands = ["Apple", "Dell", "Sony", "IKEA", "Nike", "Zara", "MAC"];

  const prices = [
    "All",
    "$100 to $200",
    "$200 to $300",
    "$300 to $500",
    "$500 to $1000",
  ];

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <>
      <div className="sticky bg-white top-0 flex justify-between lg:hidden">
        <p></p>
        <p
          className="p-5 text-lg font-medium flex items-center gap-2 cursor-pointer"
          onClick={toggleFilters}
        >
          Filters
          <ChevronDown
            className={`transition-transform ${
              showFilters ? "rotate-180" : ""
            }`}
          />
        </p>
      </div>

      {/* Black Overlay */}
      {showFilters && (
        <div
          className="fixed lg:hidden inset-0 bg-[#00000030] z-40"
          onClick={toggleFilters}
        ></div>
      )}

      <div
        className={`font-(family-name:--font-inter) px-4 lg:p-0 fixed lg:relative inset-x-0  max-h-[70%] lg:h-full overflow-auto lg:overflow-visible rounded-t-2xl lg:rounded-none bottom-0 lg:!top-0 bg-white shadow-lg lg:shadow-none transform lg:transform-none transition-transform duration-300 ease-in-out z-50  lg:!translate-y-0
          ${showFilters ? "translate-y-0" : "translate-y-full"}
          `}
      >
        <div className="p-5">
          <div className="delivery-day text-black">
            <h3 className="font-bold mb-3 text-lg">Delivery Day</h3>
            <div className="flex items-center gap-2">
              <input type="radio" id="dd" />
              <label htmlFor="dd" className="cursor-pointer">
                Get it in 2 days
              </label>
            </div>
          </div>
          <div className="coustomer-reviews mt-8">
            <h3 className="font-bold mb-3 text-lg">Coustomer Reviews</h3>
            {[4, 3, 2, 1].map((i) => {
              return (
                <Link key={i} to={`/products/rating/${i}`}>
                  <div className="flex items-center gap-2 mt-1 cursor-pointer transition-all duration-300 hover:ms-2">
                    <StarRating rating={i} />
                    <span className="ms-2">& up</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="brands mt-8">
            <h3 className="font-bold mb-1 text-lg">Brands</h3>
            {brands.map((brand, i) => {
              return (
                <Link key={brand} to={`/products/brand/${brand}`}>
                  <div className="flex items-center gap-2 mt-1">
                    <input type="radio" name="brand" id={"b" + i} />
                    <label
                      htmlFor={"b" + i}
                      className="cursor-pointer hover:text-[#c45500]"
                    >
                      {brand}
                    </label>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="Price mt-8">
            <h3 className="font-bold mb-1 text-lg">Price</h3>
            {prices.map((p, i) => {
              p = p.replace(" to ", "-");
              p = p.replace(/\$/g, "");
              return (
                <Link key={p} to={`/products/price/${p}`}>
                  <div className="flex items-center gap-2 mt-1">
                    <input type="radio" name="price" id={"p-" + i} />
                    <label
                      htmlFor={"p-" + i}
                      className="cursor-pointer hover:text-[#c45500]"
                    >
                      {p}
                    </label>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

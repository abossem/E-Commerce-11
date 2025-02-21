import { ChevronDown, Star } from "lucide-react";
import { useState } from "react";

export default function MobileProductsSidebar ()
{
  const [ showFilters, setShowFilters ] = useState( false );

  const brands = [
    'Samsung',
    'LG',
    'Haier',
    'Daikin',
    'Godrej',
    'IFB',
    'Panasonic'
  ];
  const prices = [
    'All',
    '₹5900 to ₹10,000',
    '₹10,000 to ₹20,000',
    '₹20,000 to ₹30,000',
    '₹30,000 to ₹45,000'
  ];

  const toggleFilters = () =>
  {
    setShowFilters( !showFilters );
  };

  return (
    <>
      <div className="sticky bg-white top-0 flex justify-between">
        <p></p>
        <p
          className="p-5 text-lg font-medium flex items-center gap-2 cursor-pointer"
          onClick={ toggleFilters }
        >
          Filters
          <ChevronDown className={ `transition-transform ${ showFilters ? "rotate-180" : "" }` } />
        </p>
      </div>

      {/* Black Overlay */ }
      { showFilters && (
        <div
          className="fixed inset-0 bg-[#00000030] z-40"
          onClick={ toggleFilters }
        ></div>
      ) }

      <div
        className={ `fixed inset-x-0 max-h-[70%] overflow-auto rounded-s-2xl rounded-e-2xl bottom-0 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${ showFilters ? "translate-y-0" : "translate-y-full"
          }` }
      >
        <div className="p-5">
          <div className="delivery-day text-black">
            <h3 className="font-bold mb-3 text-lg">Delivery Day</h3>
            <div className="flex items-center gap-2">
              <input type="radio" id="dd" />
              <label htmlFor="dd" className="cursor-pointer">Get it in 2 days</label>
            </div>
          </div>
          <div className="coustomer-reviews mt-8">
            <h3 className="font-bold mb-3 text-lg">Coustomer Reviews</h3>
            <div className="flex items-center">
              <Star color='#FF9900' fill='#FFCC00' size={ 16 } />
              <Star color='#FF9900' fill='#FFCC00' size={ 16 } />
              <Star color='#FF9900' fill='#FFCC00' size={ 16 } />
              <Star color='#FF9900' fill='#FFCC00' size={ 16 } />
              <Star color='#FF9900' size={ 16 } />
              <span className="ms-2">& up</span>
            </div>
          </div>
          <div className="brands mt-8">
            <h3 className="font-bold mb-1 text-lg">Brands</h3>
            { brands.map( ( brand, i ) =>
            {
              return <div key={ brand } className="flex items-center gap-2 mt-1">
                <input type="radio" name="brand" id={ 'b' + i } />
                <label htmlFor={ 'b' + i } className="cursor-pointer hover:text-[#c45500]">
                  { brand }
                </label>
              </div>;
            } ) }
          </div>
          <div className="Price mt-8">
            <h3 className="font-bold mb-1 text-lg">Price</h3>
            { prices.map( ( p, i ) =>
            {
              return <div key={ p } className="flex items-center gap-2 mt-1">
                <input type="radio" name="price" id={ "p-" + i } />
                <label htmlFor={ "p-" + i } className="cursor-pointer hover:text-[#c45500]">
                  { p }
                </label>
              </div>;
            } ) }
          </div>
        </div>
      </div>
    </>
  );
}
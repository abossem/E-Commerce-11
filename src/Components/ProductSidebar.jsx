import { Star } from "lucide-react";

export default function ProductSidebar ()
{
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

  return <div className="font-(family-name:--font-inter)">
  <div className="delivery-day text-black">
      <h3 className="font-bold mb-3 text-lg">Delivery Day</h3>
      <div className="flex items-center gap-2">
        <input type="radio" id="dd"/>
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
                  <input type="radio" name="brand" id={'b'+i} />
                  <label htmlFor={'b'+i} className="cursor-pointer hover:text-[#c45500]">
                    {brand}
                  </label>
                </div>;
      })}
  </div>
  <div className="Price mt-8">
      <h3 className="font-bold mb-1 text-lg">Price</h3>
    {prices.map((p,i) => {
      return <div key={ p } className="flex items-center gap-2 mt-1">
              <input type="radio" name="price" id={"p-"+i} />
              <label htmlFor={"p-"+i} className="cursor-pointer hover:text-[#c45500]">
                {p}
              </label>
            </div>;
    })}
  </div>
  </div>;
}
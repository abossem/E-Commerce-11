import PropTypes from 'prop-types';
import img from '../../assets/default_images/image2.png';
import { Star } from 'lucide-react';

export default function ProductCard ( { product } )
{
  return <div className='
    flex lg:flex-col items-center border-1 border-[#D9D9D9]
    lg:gap-3 lg:justify-start lg:items-start  lg:p-3
  '>
    <div className="img w-[40%] lg:w-full">
      <img src={ img } alt="" />
    </div>
    <div className="details w-[60%] lg:w-full p-5 flex flex-col gap-1">
      <h4 className='font-medium text-sm lg:text-base lg:hover:text-[#c45500] cursor-pointer'>{ product.name }</h4>
      <div className="rating flex items-center gap-2">
        <span>4.4</span>
        <div className="starts flex">
          <Star color='#FF9900' fill='#FFCC00' size={ 16 } />
          <Star color='#FF9900' fill='#FFCC00' size={ 16 } />
          <Star color='#FF9900' fill='#FFCC00' size={ 16 } />
          <Star color='#FF9900' fill='#FFCC00' size={ 16 } />
          <Star color='#FF9900' size={ 16 } />
        </div>
        <span>(175)</span>
      </div>
      <div className="price flex items-start font-medium">
        <span>EGP</span>
        <span className='text-2xl'>{ product.price }</span>
        <span>00</span>
      </div>
      <div className='text-sm'>
        <span>Get it as soon as </span>
        <span className='font-medium'>{ product.delivery_date }</span>
      </div>
      <button className='w-full bg-amber-300 rounded-4xl py-3 text-sm mt-1 cursor-pointer hover:bg-yellow-300'>Add to cart</button>
    </div>
  </div>;
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
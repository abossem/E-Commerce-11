import PropTypes from 'prop-types';
import { ChevronDown, Star } from 'lucide-react';
import img from "../assets/default_images/image2.png";

export default function ProductCard ( { name, reviews, price, delivery_date } )
{
  return <div className='flex flex-col gap-3 justify-start items-start border-1 border-[#D9D9D9] p-3'>
    <img src={img} alt="" />
    <a href='#' className='text-base font-medium hover:text-[#c45500]'>{ name }</a>
    <div>
      <p className='flex items-center'>
        <Star color='#FF9900' fill='#FFCC00' size={ 16 } />
        <Star color='#FF9900' fill='#FFCC00' size={ 16 } />
        <Star color='#FF9900' fill='#FFCC00' size={ 16 } />
        <Star color='#FF9900' fill='#FFCC00' size={ 16 } />
        <Star color='#FF9900' size={ 16 } />
        <ChevronDown size={20} />
        <span className='text-xl text-[#1F8394]'>
        { reviews.length }
        </span>
      </p>
      <p className='text-[#717171] text-sm'>300+ bought in past month</p>
    </div>
    <div>
      <p className='text-2xl inline-block'>${ price }</p>
      <span className='ps-2 text-[#717171]'>(46% off)</span>
      <p className='text-[#7F7F7F] text-sm'>Save extra with No Cost EMI</p>
    </div>
    <div className='text-[#717171]'>
      FREE delivery by
      <span className='ps-2 text-black'>{ delivery_date }</span>
    </div>
    <button className='bg-[#FFCC00] px-5 py-2 rounded-4xl cursor-pointer hover:bg-yellow-300'>Add to cart</button>
  </div>
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image_link: PropTypes.string.isRequired,
  reviews: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  delivery_date: PropTypes.string.isRequired,
};
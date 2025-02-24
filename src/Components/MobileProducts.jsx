import PRODUCTS from '../data/Products.json';
import img from '../assets/default_images/image2.png';
import { Star } from 'lucide-react';
import MobileProductsSidebar from './MobileProductsSidebar';

export default function MobileProducts ()
{
  return <>
    <div className="lg:hidden relative px-4 flex flex-col gap-3">
      <MobileProductsSidebar />
      { PRODUCTS.map( ( product ) =>
      {
        return <div key={ product.id } className='w-full flex items-center border-1 border-[#D9D9D9]'>
          <div className="img w-[40%]">
            <img src={img} alt="" />
          </div>
          <div className="details w-[60%] p-5 flex flex-col gap-1">
            <h4 className='font-medium text-sm'>{ product.name }</h4>
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
            <button className='w-full bg-amber-300 rounded-4xl py-3 text-sm mt-1'>Add to cart</button>
          </div>
        </div>
      })}
    </div>
  </>;
}
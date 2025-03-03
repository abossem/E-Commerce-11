import { Plus } from "lucide-react";
import cardLogo from '../../assets/card-logo.gif'
import valu from '../../assets/valu.jpeg'
import payments from '../../assets/meza.png'
import { useState } from "react";
import OrderCard from './OrderCard';

export default function OrderMethods ()
{
  const [ proceed, setProceed ] = useState( false );
  return <div className="flex-1 bg-white lg:p-5">
    { proceed && <div>
      <button className="lg:hidden w-full py-3 rounded-4xl bg-amber-300">Contineue to application</button>
      <OrderCard show={false} />
    </div> }
    {!proceed && <div>
    <button onClick={() => setProceed(true)} className="lg:hidden w-full py-3 rounded-4xl bg-amber-300">Contineue</button>
    <h4 className="text-2xl lg:text-xl lg:font-bold my-5 lg:my-0">Select a payment method</h4>
    <div className="lg:m-3 lg:p-5 lg:border border-[#cecece] flex flex-col gap-5">
      <div>
        <h4 className="text-xl font-bold mb-1 hidden lg:block">Your available balance</h4>
        <hr className="border-[#cecece] hidden lg:block" />
        <div className="lg:mt-3 lg:ml-10 relative border-[#cecece] lg:text-sm border lg:border-none p-4 lg:p-0 rounded-2xl">
          <Plus color="#cecece" className="absolute bottom-1.5 -left-7 hidden lg:block"/>
          <p className="lg:font-bold mb-1 capitalize">
            <span className="hidden lg:inline">
            Enter a gift card, voucher or promotional code
            </span>
            <span className="lg:hidden">
            gift card and promotional code
            </span>
          </p>
          <div className="flex items-center w-full">
          <input className="px-2 py-1 border w-[70%] lg:w-fit rounded lg:rounded-none" type="text" placeholder="Enter code" />
          <a href="#" className="block py-1 px-3 rounded-3xl border ml-3">Apply</a>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-1 hidden lg:block">Your credit and debit cards</h4>
        <hr className="border-[#cecece] hidden lg:block" />
        <div className="lg:mt-3 border-[#cecece] border lg:border-none p-4 lg:p-0 rounded-2xl flex flex-col lg:flex-row items-center gap-3">
          <Plus color="#cecece" className="hidden lg:inline" />
          <img src={ cardLogo } className="h-[20px] hidden lg:inline" alt="" />
          <a href="#" className="text-blue hidden lg:inline">Add credit or debit card</a>
          <p>Amazon accepts all major credit cards</p>
          <img src={payments} className="h-[30px] mr-auto lg:hidden" alt="" />
          <button className="lg:hidden border py-2 w-full rounded-4xl">Add a payment method</button>
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-1 hidden lg:block">Buy Now, Pay Layter</h4>
        <hr className="border-[#cecece] hidden lg:block" />
        <div className="lg:ml-2 flex items-center gap-3 border-[#cecece] border lg:border-none p-4 lg:p-0 rounded-2xl">
          <input type="radio" />
          <img src={valu} className="h-[50px]" alt="" />
          <p className="text-sm font-bold">Buy Now, Pay Layter with Valu</p>
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-1 hidden lg:block">Other payment methods</h4>
        <hr className="border-[#cecece] hidden lg:block" />
        <div className="border-[#cecece] border lg:border-none p-4 lg:p-0 rounded-2xl">
        <div className="lg:ml-2 lg:mt-3 flex items-center gap-3">
          <input type="radio" />
          <p className="text-sm font-bold">Cash on Delivery (COD)</p>
        </div>
        <p className="lg:ml-8 ml-5 mt-1 text-sm">Pay by cash on delivery. Non-refundable COD fees of <b>EGP 12</b> may apply.</p>
        </div>
      </div>
    </div>
      <button onClick={ () => setProceed( true ) } className="lg:hidden mt-5 w-full py-3 rounded-4xl bg-amber-300">Contineue</button>
    </div>}
  </div>;
}
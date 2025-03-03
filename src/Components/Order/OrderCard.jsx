export default function OrderCard ({show=true})
{
  return <>
    <div className={`flex-0 min-w-[300px] bg-white p-5 sticky right-0 top-5 ${show ? 'hidden': ''} lg:flex flex-col gap-5 font-medium text-sm h-fit`}>
    <button className="w-full rounded-4xl bg-amber-300 py-2 hidden lg:block">Use this payment method</button>
      <hr className="border-[#cecece] hidden lg:block" />
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center text-gray-600">
        <p>items:</p>
        <p>$4.81</p>
      </div>
      <div className="flex justify-between items-center text-gray-600">
        <p>Shipping & handling:</p>
        <p>$4.81</p>
      </div>
      <div className="flex justify-between items-center text-gray-600">
        <p>Estimated tax to be collected:</p>
        <p>$4.81</p>
      </div>
      <div className="flex justify-between items-center font-bold text-xl">
        <p>Order total:</p>
        <p>$4.81</p>
      </div>
    </div>
  </div>
  </>;
}
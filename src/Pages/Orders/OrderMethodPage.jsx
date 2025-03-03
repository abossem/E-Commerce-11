import OrderCard from "../../Components/Order/OrderCard";
import OrderMethods from "../../Components/Order/OrderMethods";

export default function OrderMethodPage() {
  return (
    <div
      className="font-(family-name:--font-inter) lg:bg-[#f8f8f8]">
      <div className="flex max-w-[1400px] px-5 mx-auto py-10 gap-5 relative">
        <OrderMethods />
        <OrderCard/>
      </div>
    </div>
  );
}
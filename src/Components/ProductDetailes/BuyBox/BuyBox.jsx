import React from "react";
import Button from "../Button/Button";
import Select from "../Select/Select";
import { Info } from "lucide-react";
import SelectItem from "../Select/SelectItem";

const BuyBox = ({ product, quantity, handleQuantityChange, addToCart, buyNow }) => {
  return (
    <div className="lg:w-[25%]">
      <div className="border rounded-lg p-4 bg-white shadow-sm">
        <div className="flex items-baseline">
          <span className="text-sm">SAR</span>
          <span className="text-3xl font-medium mx-1">
            {Math.floor(product.price)}
          </span>
          <span className="text-sm">
            {(product.price % 1).toFixed(2).substring(2)}
          </span>
        </div>
        <div className="text-sm mt-1">All prices include VAT.</div>
        <div className="mt-4">
          <div className="flex items-start gap-2">
            <Info className="h-4 w-4 text-[#007185] mt-1" />
            <div>
              <p className="text-sm">
                <span className="font-medium">SAR96 delivery</span> 6-9 October.
              </p>
              <p className="text-[#007185] text-sm cursor-pointer mt-1">
                Delivery to Riyadh - Update location
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#007600] text-sm mt-4">
          Usually ships within 4 to 5 days
        </div>
        <div className="mt-4">
          <label className="text-sm mb-1 block">Quantity:</label>
          <Select
            defaultValue={quantity.toString()}
            onChange={handleQuantityChange}
            className="w-20"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <SelectItem key={num}>{num}</SelectItem>
            ))}
          </Select>
        </div>
        <Button
          className="w-full bg-[#FFD814] text-black hover:bg-[#F7CA00] mt-4 rounded-full"
          onClick={addToCart}
        >
          Add to Cart
        </Button>
        <Button
          className="w-full bg-[#FFA41C] text-black hover:bg-[#FA8900] mt-2 rounded-full"
          onClick={buyNow}
        >
          Buy Now
        </Button>
        <div className="mt-4 text-sm space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Ships from</span>
            <span>{product.saler.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Sold by</span>
            <span>{product.saler.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Payment</span>
            <span className="text-[#007185]">Secure transaction</span>
          </div>
        </div>
        <Button variant="outline" className="w-full mt-4">
          Add to List
        </Button>
      </div>
    </div>
  );
};

export default BuyBox;
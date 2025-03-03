import React from "react";
import { Star, Search, CreditCard, Truck, Shield } from "lucide-react";

const ProductInfo = ({ product }) => {
  return (
    <div className="lg:w-[40%]">
      <div>
        <p className="text-sm mb-1">
          Brand: <span className="text-[#007185]">{product.brand}</span>
        </p>
        <h1 className="text-xl font-medium">{product.name}</h1>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= product.reviews_avg
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-[#007185] text-sm">
              {product.reviews_count} ratings
            </span>
          </div>
          <button className="text-[#007185] text-sm flex items-center gap-1">
            <Search className="h-3 w-3" />
            Search this page
          </button>
        </div>
        <div className="border-b border-gray-200 my-4" />
        <div className="flex items-baseline mb-4">
          <span className="text-sm">SAR</span>
          <span className="text-3xl font-medium mx-1">
            {Math.floor(product.price)}
          </span>
          <span className="text-sm">
            {(product.price % 1).toFixed(2).substring(2)}
          </span>
        </div>
        <div className="mt-6 p-3 bg-[#F5F7F7] rounded-lg">
          <div className="text-sm">
            <span className="font-medium">Sign in to redeem. </span>
            <span className="bg-[#E3F2FD] px-1">Extra 20% off</span> with
            meem credit cards.
          </div>
          <div className="text-sm mt-1">
            Enter code MEEM20 at checkout. Discount by Amazon.
          </div>
        </div>
        <div className="border-b border-gray-200 my-4" />
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-gray-600" />
            <span className="text-xs leading-tight">
              Electronic<br />payment Only
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-gray-600" />
            <span className="text-xs leading-tight">
              30 days<br />Returnable
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-gray-600" />
            <span className="text-xs leading-tight">
              Secure<br />transaction
            </span>
          </div>
        </div>
        <div className="border-b border-gray-200 my-4" />
        <div className="mt-4">
          <h3 className="font-medium">About this item</h3>
          <ul className="list-disc pl-4 space-y-2 text-sm mt-2">
            {product.description.split(". ").map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
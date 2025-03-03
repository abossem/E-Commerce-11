import React, { useState } from "react";

const ProductImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="lg:w-[35%]">
      <div className="sticky top-20">
        <div className="flex gap-4">
          <div className="w-16 space-y-2">
            {images.map((src, index) => (
              <div
                key={index}
                className={`border-2 ${
                  selectedImage === index
                    ? "border-orange-400"
                    : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Product thumbnail ${index + 1}`}
                  className="w-14 h-14 object-cover cursor-pointer"
                />
              </div>
            ))}
          </div>
          <div className="flex-1">
            <img
              src={images[selectedImage] || "/placeholder.svg"}
              alt="Product main image"
              className="w-full h-auto max-h-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
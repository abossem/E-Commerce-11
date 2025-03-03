import React, { useState, useCallback, useEffect } from "react";
import {
  Star,
  Truck,
  Shield,
  CreditCard,
  Info,
  ChevronDown,
  Search,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../service/ProductService";

import { useCartContext } from "../context/CartContext";
import Loading from "../components/loading/Loading";

// Custom Button component
const Button = React.forwardRef(
  ({ children, className, variant = "default", ...props }, ref) => {
    const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors";
    const variantStyles = {
      default: "text-white",
      outline: "border border-gray-300 hover:bg-gray-100",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

// Custom Select components
const Select = React.forwardRef(
  ({ defaultValue, onChange, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const handleSelect = useCallback(
      (value) => {
        setSelectedValue(value);
        setIsOpen(false);
        if (onChange) onChange(value);
      },
      [onChange]
    );

    return (
      <div ref={ref} className="relative" {...props}>
        <div
          className="flex items-center justify-between p-2 border border-gray-300 rounded-md cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedValue}</span>
          <ChevronDown className="h-4 w-4" />
        </div>
        {isOpen && (
          <div className="absolute z-10 min-w-[150px] max-w-[300px] mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            {React.Children.map(children, (child) =>
              React.cloneElement(child, {
                onClick: () => handleSelect(child.props.children),
              })
            )}
          </div>
        )}
      </div>
    );
  }
);

const SelectItem = React.forwardRef(({ children, onClick, ...props }, ref) => (
  <div
    ref={ref}
    className="p-2 cursor-pointer hover:bg-gray-100"
    onClick={onClick}
    {...props}
  >
    {children}
  </div>
));

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState(0);
  const { addItemToCart } = useCartContext();
  const [showNotification, setShowNotification] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Extract productId from the URL

  // Fetch product details based on productId
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await fetchProductById(id); // Fetch product details
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to fetch product details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    console.log(id);
    fetchProduct();
    console.log(product);
  }, [id]); // Re-fetch when productId changes

  // Function to handle adding item to cart

  // Function to handle buying now
  const buyNow = useCallback(() => {
    console.log(`Buying ${quantity} item(s) now`);
    alert(`Proceeding to checkout with ${quantity} item(s)`);
  }, [quantity]);

  // Function to handle quantity change
  const handleQuantityChange = useCallback((value) => {
    const newQuantity = parseInt(value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
    }
  }, []);

  const addToCart = useCallback(() => {
    setCartItems((prevItems) => prevItems + quantity);
    addItemToCart(product, quantity);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  }, [quantity, product, addItemToCart]);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Electronics</span>
          <span>›</span>
          <span>Tech</span>
          <span>›</span>
          <span>{product.category}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Product Images */}
          <div className="lg:w-[35%]">
            <div className="sticky top-20">
              <div className="flex gap-4">
                <div className="w-16 space-y-2">
                  {product.images.map((src, index) => (
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
                    src={product.images[selectedImage] || "/placeholder.svg"}
                    alt="Product main image"
                    className="w-full h-auto max-h-[500px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Middle - Product Info */}
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
                    Electronic
                    <br />
                    payment Only
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-gray-600" />
                  <span className="text-xs leading-tight">
                    30 days
                    <br />
                    Returnable
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-gray-600" />
                  <span className="text-xs leading-tight">
                    Secure
                    <br />
                    transaction
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

          {/* Right side - Buy Box */}
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
                      <span className="font-medium">SAR96 delivery</span> 6-9
                      October.
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
        </div>

        {/* Reviews Section */}
        <div className="mt-12" id="reviews">
          <h2 className="text-xl font-medium mb-4">Customer Reviews</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-64">
              <div className="flex items-center mb-2">
                <span className="font-medium mr-2">
                  {product.reviews_avg} out of 5
                </span>
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
              </div>
              <p className="text-sm text-[#007185]">
                {product.reviews_count} global ratings
              </p>

              <div className="mt-4 space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-2">
                    <span className="text-sm text-[#007185] w-12">
                      {rating} star
                    </span>
                    <div className="flex-1 h-4 bg-gray-200 rounded">
                      <div
                        className="h-full bg-[#FFA41C] rounded"
                        style={{
                          width: `${
                            (product.reviews.filter((r) => r.rating === rating)
                              .length /
                              product.reviews.length) *
                            100
                          }%`,
                        }}
                      />
                    </div>
                    <span className="text-sm w-8">
                      {Math.round(
                        (product.reviews.filter((r) => r.rating === rating)
                          .length /
                          product.reviews.length) *
                          100
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1">
              {product.reviews.map((review, index) => (
                <div key={index} className="border-b pb-4 mb-4 last:border-b-0">
                  <div className="flex items-center gap-2">
                    <img
                      src={review.writer.avatar || "/placeholder.svg"}
                      alt={review.writer.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="font-medium">{review.writer.name}</span>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{review.title}</span>
                  </div>

                  <div className="text-sm text-gray-500 mt-1">
                    Reviewed on{" "}
                    {new Date(review.created_at).toLocaleDateString()}
                  </div>

                  <p className="text-sm mt-2 whitespace-pre-line">
                    {review.comment}
                  </p>

                  <button className="text-sm text-[#007185] mt-2">
                    Report
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Notification for adding to cart */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-md shadow-lg">
          {quantity} item(s) added to cart
        </div>
      )}

      {/* Cart icon with item count */}
    </div>
  );
}

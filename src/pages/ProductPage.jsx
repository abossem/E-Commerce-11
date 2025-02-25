import React, { useState, useCallback } from 'react';
import { Star, ShoppingCart, Truck, Shield, CreditCard, Search, Info, ChevronDown } from 'lucide-react';
import productImage from "../assets/shopping.webp";

// Custom Button component
const Button = React.forwardRef(({ children, className, variant = "default", ...props }, ref) => {
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
});

// Custom Select components
const Select = React.forwardRef(({ defaultValue, onChange, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelect = useCallback((value) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onChange) onChange(value);
  }, [onChange]);

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
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              onClick: () => handleSelect(child.props.children),
            })
          )}
        </div>
      )}
    </div>
  );
});

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

// Review data
const reviews = [
  {
    name: "Brooke",
    rating: 4,
    title: "Favorite dress",
    date: "6 August 2024",
    location: "United States",
    verified: true,
    content: "I initially purchased this dress on sale. It turned out to be my favorite dress of this summer. It is extremely versatile and unexpectedly flattering. When I accidentally tore it, I was really upset. My husband told me to buy it again, which I typically wouldn't do. It wasn't on sale and I am so frugal. The dress washes very well and I always get compliments when I wear it.",
    size: "40",
    color: "Black"
  },
  {
    name: "Elva S.D.",
    rating: 5,
    title: "Lindo!!",
    date: "11 August 2023",
    location: "Mexico",
    verified: true,
    content: "Bien hecho, bonita tela y bonita caída, fresco y casual.\nLa marca lo dice!!",
  },
  {
    name: "Ana Patricia Rodriguez",
    rating: 3,
    title: "COMODIDAD",
    date: "29 June 2023",
    location: "United State",
    verified: true,
    content: "ES LINDO COMODO Y LIGERO PARA CLIMA CALIDO, ES LA TELA ADECUADA",
  },
  {
    name: "Ivelisse",
    rating: 4,
    title: "Excellent dress",
    date: "3 April 2019",
    location: "United State",
    verified: true,
    content: "Lovely dress... I'm 5'1\" with pear form body (149 pounds mostly in hips and booty) and it fits perfect.",
  }
];

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const images = [productImage , productImage];

  // Function to handle adding item to cart
  const addToCart = useCallback(() => {
    setCartItems((prevItems) => prevItems + quantity);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  }, [quantity]);

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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      {/* <nav className="bg-[#131921] text-white p-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg" alt="Amazon" width={100} height={30} className="cursor-pointer" />
            <div className="text-sm">
              <p className="text-gray-300">Delivering to</p>
              <p className="font-bold">Update location</p>
            </div>
          </div>
          <div className="flex-1 max-w-2xl mx-4">
            <div className="flex">
              <Select defaultValue="All" className="w-24 rounded-l bg-gray-100 border-0">
                <SelectItem>All</SelectItem>
                <SelectItem>Electronics</SelectItem>
              </Select>
              <input
                type="text"
                placeholder="Search Amazon.in"
                className="flex-1 p-2 outline-none border-0"
              />
              <button className="bg-[#febd69] px-4 rounded-r hover:bg-[#f3a847]">
                <Search className="h-5 w-5 text-gray-800" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-sm">
              <p>Hello, sign in</p>
              <p className="font-bold">Account & Lists</p>
            </div>
            <div className="text-sm">
              <p>Returns</p>
              <p className="font-bold">& Orders</p>
            </div>
            <div className="flex items-center">
              <ShoppingCart className="h-8 w-8" />
              <span className="font-bold">Cart</span>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="text-sm breadcrumbs text-gray-600 mb-4">
          Fashion › Women › Clothing › Dresses
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Product Images */}
          <div className="lg:w-1/3">
            <div className="sticky top-20">
              <div className="flex gap-4">
                <div className="w-16 space-y-4">
                  {images.map((src, index) => (
                    <div
                      key={index}
                      className={`border-2 ${selectedImage === index ? 'border-orange-400' : 'border-gray-200'}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={productImage} alt={`Product thumbnail ${index + 1}`} width={60} height={60} className="cursor-pointer" />
                    </div>
                  ))}
                </div>
                <div className="flex-1">
                  <img
                    src={images[selectedImage] || "/placeholder.svg"}
                    alt="Product main image"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Middle - Product Info */}
          <div className="lg:w-1/3">
            <p className="text-sm">Brand: <span className="text-[#007185]">WDIRARA</span></p>
            <h1 className="text-xl font-medium mt-2">
              LG 7 Kg, 5 Star, Direct Drive Technology, Steam Wash, 6 Motion DD, Smart Diagnosis, Fully-Automatic Front Load
            </h1>
            
            <div className="flex items-center mt-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className={`h-4 w-4 ${star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <a href="#reviews" className="text-[#007185] ml-2 text-sm">67 ratings</a>
            </div>

            <div className="mt-4">
              <div className="text-sm text-gray-700">
                Sign in to redeem. <span className="bg-[#E3F2FD] px-1">Extra 20% off</span> with meem credit cards.
              </div>
              <div className="text-sm text-gray-700">
                Enter code MEEM20 at checkout. Discount by Amazon.
              </div>
            </div>

            <div className="flex items-center gap-8 mt-6">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-gray-600" />
                <span className="text-xs">Electronic<br />payment Only</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-gray-600" />
                <span className="text-xs">30 days<br />Returnable</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-gray-600" />
                <span className="text-xs">Secure<br />transaction</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium">About this item</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm mt-2">
                <li>Feature: square neck, cutout, puff sleeve, ruffle hem, tie back sline dress</li>
                <li>Fabric has some stretch and it's soft and comfortable</li>
                <li>Suitable for daily wear, holidays, dating, vacation, weekend or casual</li>
                <li>Care Instructions: Machine wash or professional dry clean</li>
              </ul>
            </div>
          </div>

          {/* Right side - Buy Box */}
          <div className="lg:w-1/3">
            <div className="border rounded-lg p-4">
              <div className="flex items-baseline">
                <span className="text-sm">SAR</span>
                <span className="text-3xl font-medium mx-1">203</span>
                <span className="text-sm">34</span>
              </div>
              
              <div className="text-sm mt-1">All prices include VAT.</div>
              
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-[#007185]" />
                  <span className="text-sm">
                    <span className="font-medium">SAR96 delivery</span> 6-9 October.
                  </span>
                </div>
                <div className="text-sm text-[#007185] mt-1 cursor-pointer">
                  Delivery to Riyadh - Update location
                </div>
              </div>

              <div className="text-[#007600] text-sm mt-4">
                Usually ships within 4 to 5 days
              </div>

              <div className="mt-4">
                <label className="text-sm">Quantity:</label>
                <Select 
                  defaultValue={quantity.toString()} 
                  onChange={handleQuantityChange}
                  className="w-full mt-1"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num}>{num}</SelectItem>
                  ))}
                </Select>
              </div>

              <Button 
                className="w-full bg-[#FFD814] text-black hover:bg-[#F7CA00] mt-4"
                onClick={addToCart}
              >
                Add to Cart
              </Button>
              <Button 
                className="w-full bg-[#FFA41C] text-black hover:bg-[#FA8900] mt-2"
                onClick={buyNow}
              >
                Buy Now
              </Button>

              <div className="mt-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Ships from</span>
                  <span>Monalık LLC</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-gray-500">Sold by</span>
                  <span>Monalık LLC</span>
                </div>
                <div className="flex justify-between mt-1">
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
                <span className="font-medium mr-2">4.1 out of 5</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`h-4 w-4 ${star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
              </div>
              <p className="text-sm text-[#007185]">4 global ratings</p>
              
              <div className="mt-4 space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-2">
                    <span className="text-sm text-[#007185] w-12">{rating} star</span>
                    <div className="flex-1 h-4 bg-gray-200 rounded">
                      <div
                        className="h-full bg-[#FFA41C] rounded"
                        style={{ width: `${(reviews.filter(r => r.rating === rating).length / reviews.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm w-8">
                      {Math.round((reviews.filter(r => r.rating === rating).length / reviews.length) * 100)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1">
              {reviews.map((review, index) => (
                <div key={index} className="border-b pb-4 mb-4 last:border-b-0">
                  <div className="flex items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      alt={review.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="font-medium">{review.name}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{review.title}</span>
                  </div>
                  
                  <div className="text-sm text-gray-500 mt-1">
                    Reviewed in {review.location} on {review.date}
                  </div>
                  
                  {review.size && review.color && (
                    <div className="text-sm mt-1">
                      Size: {review.size} | Color: {review.color}
                    </div>
                  )}
                  
                  {review.verified && (
                    <div className="text-[#C45500] text-sm mt-1">Verified Purchase</div>
                  )}
                  
                  <p className="text-sm mt-2 whitespace-pre-line">{review.content}</p>
                  
                  <button className="text-sm text-[#007185] mt-2">Report</button>
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
      <div className="fixed top-4 right-4 bg-yellow-400 text-black p-2 rounded-full">
        <ShoppingCart className="h-6 w-6" />
        {cartItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {cartItems}
          </span>
        )}
      </div>
    </div>
  );
}
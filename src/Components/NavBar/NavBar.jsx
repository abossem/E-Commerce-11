import Amazon from "../../assets/amazon.png";
import India from "../../assets/india.png";
import { MapPin, Search, ShoppingCart, Menu, ChevronDown } from "lucide-react";

export default function NavBar() {
  return (
    <>
      <section className="navbar bg-primary-dark ">
        <div className="px-4 text-primary-white  w-full">
          <div className="head  flex items-center justify-between gap-3 lg:gap-5 lg:py-3 flex-wrap md:flex-nowrap">
            <div className="logo order-first flex items-center gap-1">
              <Menu size={24} className="md:hidden" />
              <img src={Amazon} alt="Amazon Logo" />
            </div>
            <div className="location md:flex  items-end  hidden">
              <MapPin size={26} strokeWidth={1} />
              <div className="">
                <span className="text-gray-200 font-lato text-[12px] lg:text-[14px]">
                  Delivering to
                </span>
                <p className="text-primary-white font-bold font-lato text-[14px] lg:text-[18px] ">
                  Update location
                </p>
              </div>
            </div>
            <div className="rounded-md border-none  overflow-hidden h-[50px] flex items-center justify-center grow order-last md:order-none">
              <select
                name="categories"
                id="categories"
                className="bg-gray-300 h-full px-2 hidden md:flex"
              >
                <option value="All">All</option>
              </select>
              <input
                type="search"
                name="search"
                placeholder="Search Amazon.in"
                className="bg-primary-white h-full placeholder:text-gray-300 border-0 focus:outline-0 text-primary-black px-2 grow"
              />
              <div className="icon bg-orange-light h-full flex items-center justify-center px-3 text-primary-black">
                <Search size={24} />
              </div>
            </div>
            <div className=" items-center  hidden md:flex ">
              <img src={India} className="w-full" alt="India Flag Image" />
              <select
                name="lang"
                id="lang"
                className="border-none rounded-none focus:outline-none px-1"
              >
                <option className=" text-primary-black" value="EN">
                  EN
                </option>
                <option className=" text-primary-black" value="AR">
                  AR
                </option>
              </select>
            </div>
            <div className="sign-in hidden md:flex flex-col items-start relative group">
              <p className="font-lato font-bold">Hello, Sign in</p>
              <p className="font-lato flex items-center gap-1">
                Account & Lists <ChevronDown className="w-4 h-4" />
              </p>
              <div className="dropdown hidden group-hover:block absolute top-12 left-0 bg-primary-white text-primary-black p-4 w-[200px]">
                <ul>
                  <li>sign in</li>
                  <li>sign up</li>
                </ul>
              </div>
            </div>
            <div className="orders hidden md:flex flex-col justify-center items-start ">
              <span className="capitalize font-lato">returns &</span>
              <p className="capitalize font-lato font-bold">Orders</p>
            </div>
            <div className="cart flex items-center gap-2  ">
              <ShoppingCart className="sm:w-[50px] sm:h-[50px] md:w-[20px] md:h-[20px] lg:w-[40px] lg:h-[40px]" />
              <span className="font-lato font-bold hidden lg:flex">Cart</span>
            </div>
          </div>
        </div>
        <div className=" w-full bg-secondary-dark ">
          <div className=" container px-4 flex items-center overflow-hidden overflow-x-scroll  md:overflow-visible md:overflow-x-visible  text-primary-white gap-1 ">
            <a href="#" className=" flex items-center justify-center">
              <Menu size={24} />
              All
            </a>
            <a href="#" className="py-4 px-2.5 min-w-fit ">
              Amazon mini TV
            </a>
            <a href="#" className="py-4 px-2.5 min-w-fit ">
              Sell
            </a>
            <a href="#" className="py-4 px-2.5 min-w-fit ">
              Best Sellers
            </a>
            <a href="#" className="py-4 px-2.5 min-w-fit ">
              Today’s Deals
            </a>
            <a href="#" className="py-4 px-2.5 min-w-fit ">
              Mobiles
            </a>
            <a href="#" className="py-4 px-2.5 min-w-fit ">
              Customer Service
            </a>
            <a href="#" className="py-4 px-2.5 min-w-fit ">
              Prime
            </a>
            <a href="#" className="py-4 px-2.5 min-w-fit ">
              Electronics
            </a>
            <a href="#" className="py-4 px-2.5 min-w-fit ">
              Fashion
            </a>
            <a href="#" className="py-4 px-2.5 min-w-fit ">
              New Releases
            </a>
            <a href="#" className="py-4 px-2.5 min-w-fit ">
              Home & Kitchen
            </a>
            <a href="#" className="py-4 px-2.5 min-w-fit ">
              Amazon Pay
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import Amazon from "../../assets/amazon.png";
import India from "../../assets/india.png";
import { MapPin, Search, ShoppingCart, Menu } from "lucide-react";

export default function NavBar() {
  return (
    <>
      <section className="navbar bg-primary-dark ">
        <div className="px-4 text-primary-white mx-auto w-full">
          <div className="head py-3 flex items-center gap-5">
            <div className="logo px-2.5">
              <img src={Amazon} alt="Amazon Logo" />
            </div>
            <div className="location flex  items-end px-2.5">
              <MapPin size={26} strokeWidth={1} />
              <div className="">
                <span className="text-gray-200 font-lato text-[15px]">
                  Delivering to Surat 394210
                </span>
                <p className="text-primary-white font-bold font-lato text-[18px] ">
                  Update location
                </p>
              </div>
            </div>
            <div className="rounded-md border-none  overflow-hidden h-[50px] flex items-center justify-center grow">
              <select
                name="categories"
                id="categories"
                className="bg-gray-300 h-full px-2"
              >
                <option value="All">All</option>
              </select>
              <input
                type="search"
                placeholder="Search Amazon.in"
                className="bg-primary-white h-full placeholder:text-gray-300 border-0 focus:outline-0 text-primary-black px-2 grow"
              />
              <div className="icon bg-orange-light h-full flex items-center justify-center px-3 text-primary-black">
                <Search size={24} />
              </div>
            </div>
            <div className="flex items-center px-2.5">
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
            <div className="flex items-center justify-center gap-2 px-2.5">
              <a href="#">Sign in</a>
              <a href="#">Sign up</a>
              <a href="#">Sign out</a>
            </div>
            <div className="orders px-2.5">
              <span className="capitalize font-lato">returns</span>
              <p className="capitalize font-lato font-bold">& Orders</p>
            </div>
            <div className="cart flex items-center gap-2 px-2.5">
              <ShoppingCart size={40} />
              <span className="font-lato font-bold">Cart</span>
            </div>
          </div>
        </div>
        <div className=" w-full bg-secondary-dark">
          <div className=" container px-4 flex items-center text-primary-white gap-1 ">
            <a
              href="#"
              className="py-4 px-2.5 flex items-center justify-center"
            >
              <Menu size={24} />
              All
            </a>
            <a href="#" className="py-4 px-2.5">
              Amazon mini TV
            </a>
            <a href="#" className="py-4 px-2.5">
              Sell
            </a>
            <a href="#" className="py-4 px-2.5">
              Best Sellers
            </a>
            <a href="#" className="py-4 px-2.5">
              Today’s Deals
            </a>
            <a href="#" className="py-4 px-2.5">
              Mobiles
            </a>
            <a href="#" className="py-4 px-2.5">
              Customer Service
            </a>
            <a href="#" className="py-4 px-2.5">
              Prime
            </a>
            <a href="#" className="py-4 px-2.5">
              Electronics
            </a>
            <a href="#" className="py-4 px-2.5">
              Fashion
            </a>
            <a href="#" className="py-4 px-2.5">
              New Releases
            </a>
            <a href="#" className="py-4 px-2.5">
              Home & Kitchen
            </a>
            <a href="#" className="py-4 px-2.5">
              Amazon Pay
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

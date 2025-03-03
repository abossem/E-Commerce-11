import { Link, useNavigate } from "react-router-dom";
import Amazon from "../../assets/amazon.png";
import India from "../../assets/india.png";
import { MapPin, Search, ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { useUserContext } from "../../context/User.context";
import { useState } from "react";

export default function NavBar() {
  const { token, userInfo, logOut } = useUserContext();

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const lowerQuery = search.toLowerCase();

  function onClick() {
    const searchQuery = lowerQuery.replace(/^./, (char) => char.toUpperCase());
    navigate(`/products/category/${searchQuery}`);
  }

  return (
    <>
      <section className="navbar bg-primary-dark">
        <div className="px-4 text-primary-white  w-full">
          <div className="head  flex items-center justify-between gap-3 lg:gap-5 lg:py-3 flex-wrap md:flex-nowrap">
            <Link to={"/"} className="logo order-first flex items-center gap-1">
              <Menu size={24} className="md:hidden" />
              <img src={Amazon} alt="Amazon Logo" />
            </Link>
            <div className="location md:flex  items-end  hidden">
              <MapPin size={26} strokeWidth={1} />
              <div className="cursor-pointer">
                <span className="text-gray-200 font-lato text-[12px] lg:text-[14px]">
                  Delivering to
                </span>
                <p className="text-primary-white font-bold font-lato text-[14px] lg:text-[18px] ">
                  Update location
                </p>
              </div>
            </div>
            <form
              onSubmit={onClick}
              className="rounded-md border-none  overflow-hidden h-[50px] flex items-center justify-center grow order-last md:order-none"
            >
              <select
                name="categories"
                id="categories"
                className="bg-gray-300 h-full px-2 hidden md:flex cursor-pointer"
              >
                <option value="All">All</option>
              </select>

              <input
                type="search"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Amazon.in"
                className="bg-primary-white h-full placeholder:text-gray-300 border-0 focus:outline-0 text-primary-black px-2 grow"
              />
              <button
                onClick={onClick}
                className="icon bg-orange-light h-full flex items-center justify-center px-3 text-primary-black"
              >
                <Search size={24} />
              </button>
            </form>
            <div className=" items-center  hidden md:flex ">
              <img src={India} className="w-full" alt="India Flag Image" />
              <select
                name="lang"
                id="lang"
                className="border-none rounded-none focus:outline-none px-1 cursor-pointer"
              >
                <option className=" text-primary-black" value="EN">
                  EN
                </option>
                <option className=" text-primary-black" value="AR">
                  AR
                </option>
              </select>
            </div>
            <div className="sign-in hidden md:flex flex-col items-start relative group cursor-pointer">
              <p className="font-lato font-bold">
                Hello,{" "}
                {token ? <span>{userInfo?.name}</span> : <span>Sign in</span>}
              </p>
              <p className="font-lato flex items-center gap-1">
                Account & Lists <ChevronDown className="w-4 h-4" />
              </p>
              <div className=" hidden group-hover:block absolute top-12 -left-1/2 rounded-md bg-gray-50 text-primary-black z-[1000] p-4 ">
                <div className="flex flex-col justify-center items-center ">
                  {token ? (
                    <Link
                      className="py-1 px-2 text-primary-white bg-yellow w-fit flex mb-4 rounded-md hover:bg-amber-300 "
                      to={"/products"}
                    >
                      Shop Now
                    </Link>
                  ) : (
                    <Link
                      className="py-1 px-2 text-primary-white bg-yellow w-fit flex mb-4 rounded-md hover:bg-amber-300"
                      to={"/signup"}
                    >
                      Create Account
                    </Link>
                  )}

                  <div className="flex items-start gap-10">
                    <ul className="w-[80px]">
                      <h3 className="text-xl font-bold">Account </h3>
                      {token ? (
                        <li
                          onClick={logOut}
                          className="cursor-pointer py-1 px-2 text-primary-white bg-yellow w-fit flex mb-4 rounded-md text-xs hover:bg-yellow-300"
                        >
                          Log out
                        </li>
                      ) : (
                        <li>
                          <Link
                            className="cursor-pointer py-1 px-2 text-primary-white bg-yellow w-fit flex mb-4 rounded-md text-xs hover:bg-yellow-300"
                            to={"/login"}
                          >
                            Log In
                          </Link>
                        </li>
                      )}
                    </ul>
                    <div className="flex flex-col w-[150px]">
                      <h3 className="text-xl font-bold">Your Account</h3>
                      <ul className="flex flex-col gap-2 pl-1">
                        <li className="cursor-pointer hover:text-yellow text-xs font-light">
                          your account
                        </li>
                        <li className="cursor-pointer hover:text-yellow text-xs font-light">
                          <Link to={"/orders"}>your orders</Link>
                        </li>
                        <li className="cursor-pointer hover:text-yellow text-xs font-light">
                          your list
                        </li>
                        <li className="cursor-pointer hover:text-yellow text-xs font-light">
                          your addresses
                        </li>
                        <li className="cursor-pointer hover:text-yellow text-xs font-light">
                          your recommendations
                        </li>
                        <li className="cursor-pointer hover:text-yellow text-xs font-light">
                          your subscribe & save items
                        </li>
                        <li className="cursor-pointer hover:text-yellow text-xs font-light">
                          your seller account
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to={"/orders"}
              className="orders hidden md:flex flex-col justify-center items-start "
            >
              <span className="capitalize font-lato">returns &</span>
              <p className="capitalize font-lato font-bold">Orders</p>
            </Link>
            <Link to={"/cart"} className="cart flex items-center gap-2  ">
              <ShoppingCart className="sm:w-[50px] sm:h-[50px] md:w-[20px] md:h-[20px] lg:w-[40px] lg:h-[40px]" />
              <span className="font-lato font-bold hidden lg:flex">Cart</span>
            </Link>
          </div>
        </div>
        <div className=" w-full bg-secondary-dark overflow-x-auto max-sm:mt-3 ">
          <div className=" container px-4 flex items-center overflow-hidden overflow-x-scroll  md:overflow-visible md:overflow-x-visible  text-primary-white gap-1 ">
            <Link
              to={"/products"}
              className=" flex items-center justify-center"
            >
              <Menu size={24} />
              All
            </Link>
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

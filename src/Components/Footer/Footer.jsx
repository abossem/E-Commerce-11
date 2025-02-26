import Amazon from "../../assets/amazon.png";
import India from "../../assets/india.png";
import { Globe } from "lucide-react";
export default function Footer() {
  return (
    <section className="footer bg-secondary-dark  text-primary-white pt-10  font-noto-serif-gujarati ">
      <div className="container mx-auto mb-12">
        <div className="info flex flex-col md:flex-row md:justify-between md:ml-0 justify-center items-start gap-10  mx-auto pl-6">
          <div className="know-us flex flex-col gap-1">
            <h3 className="text-[18.5px] font-semibold">
              Get to know <br /> Us
            </h3>
            <ul>
              <li>
                <a className="font-light text-[16px]" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Press Releases
                </a>
              </li>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Amazon Science
                </a>
              </li>
            </ul>
          </div>
          <div className="connect flex flex-col gap-1 ">
            <h3 className="text-[18.5px] font-semibold">
              Connect with <br /> Us
            </h3>
            <ul>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Twitter
                </a>
              </li>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="money flex flex-col gap-1 ">
            <h3 className="text-[18.5px] font-semibold">Make Money with Us</h3>
            <ul>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Sell on Amazon
                </a>
              </li>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Sell under Amazon Accelerator
                </a>
              </li>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Protect and Build Your Brand
                </a>
              </li>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Amazon Global Selling
                </a>
              </li>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Supply to Amazon
                </a>
              </li>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Become an Affiliate
                </a>
              </li>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Fulfilment by Amazon
                </a>
              </li>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Advertise Your Products
                </a>
              </li>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Amazon Pay on Merchants
                </a>
              </li>
            </ul>
          </div>
          <div className="help flex flex-col gap-1 ">
            <h3 className="text-[18.5px] font-semibold">Let Us Help You</h3>
            <ul>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Your Account
                </a>
              </li>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Returns Center
                </a>
              </li>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Recalls and Products Safety Alerts
                </a>
              </li>
              <li>
                <a className="font-light text-[16px]" href="#">
                  100% Purchase Protection
                </a>
              </li>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Amazon App Download
                </a>
              </li>
              <li>
                <a className="font-light text-[16px]" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray-700  ">
        <div className="container mx-auto flex flex-col md:flex-row md:ml-0 justify-center items-center my-6 gap-5 text-gray-200">
          <div className="logo w-[109px]">
            <img className="w-full" src={Amazon} alt="" />
          </div>
          <div className="flex items-center gap-2">
            <div className="lang border rounded-sm border-primary-white p-3 flex items-center gap-2">
              <Globe size={24} />
              <select
                name="languages"
                id="languages"
                className=" focus:outline-none "
              >
                <option className=" text-primary-black" value="EN">
                  English
                </option>
                <option className=" text-primary-black" value="AR">
                  Arabic
                </option>
              </select>
            </div>
            <div className="country border rounded-sm border-primary-white p-3 flex items-center gap-2">
              <div className="image">
                <img src={India} alt="India Flag Image" />
              </div>
              <p>India</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-primary-dark mt-4 py-8  ">
        <div className="container flex flex-col md:flex-row md:ml-0 justify-between pl-6 items-start gap-5">
          <div className="  flex flex-col items-start gap-6 ">
            <div className="flex flex-col ">
              <h4 className="font-medium">AbeBooks</h4>
              <p className="text-[14px] font-light text-gray-200">
                Books, art <br /> & collectibles
              </p>
            </div>
            <div className="flex flex-col ">
              <h4 className="font-medium">Shop bop</h4>
              <p className="text-[14px] font-light text-gray-200">Designer</p>
              <p className="text-[14px] font-light text-gray-200">
                Fashion Brands
              </p>
            </div>
          </div>
          <div className="  flex flex-col items-start gap-6 ">
            <div className="flex flex-col ">
              <h4 className="font-medium">Amazon web Services</h4>
              <p className="text-[14px] font-light text-gray-200">
                Scalable Cloud <br />
                Computing Services
              </p>
            </div>
            <div className="flex flex-col ">
              <h4 className="font-medium">Amazon Business</h4>
              <p className="text-[14px] font-light text-gray-200">
                Everything For <br />
                Your Business
              </p>
            </div>
          </div>
          <div className="  flex flex-col items-start gap-6 ">
            <div className="flex flex-col ">
              <h4 className="font-medium">Audible</h4>
              <p className="text-[14px] font-light text-gray-200">
                Download <br />
                Audio Books
              </p>
            </div>
            <div className="flex flex-col ">
              <h4 className="font-medium">Prime Now</h4>
              <p className="text-[14px] font-light text-gray-200">
                2-Hour Delivery
                <br />
                on Everyday Items
              </p>
            </div>
          </div>
          <div className="  flex flex-col items-start gap-6 ">
            <div className="flex flex-col ">
              <h4 className="font-medium">IMDb</h4>
              <p className="text-[14px] font-light text-gray-200">
                Movies, TV <br />& Celebrities
              </p>
            </div>
            <div className="flex flex-col ">
              <h4 className="font-medium">Amazon Prime Music</h4>
              <p className="text-[14px] font-light text-gray-200">
                100 million sings, ad-free
                <br />
                Over 15 million podcast episodes
              </p>
            </div>
          </div>
        </div>
        <div className="copy-right flex flex-col md:ml-0 justify-center items-center mt-6 gap-2 ml-6">
          <div className="info flex items-center gap-5">
            <p className="font-medium text-[12px]">Conditons of Use & Sale</p>
            <p className="font-medium text-[12px]">Privacy Notice</p>
            <p className="font-medium text-[12px]">Interset-Based Ads</p>
          </div>
          <p className="font-medium text-[12px]">
            1996-2024, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </section>
  );
}

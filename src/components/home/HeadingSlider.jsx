import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeadingSlider({ products, isLoading }) {
  return (
    <div className="relative w-full ">
      {/*  Custom Navigation Buttons */}
      <button className="prev-btn absolute left-0 sm:top-[-30px] top-[-30px] h-[300px]  max-sm:hidden  z-10 bg-transparent text-[#212121] p-3 rounded-md  cursor-pointer">
        <ChevronLeft size={50} />
      </button>

      <button className="next-btn absolute right-0 sm:top-[-30px] top-[-30px] h-[300px]  max-sm:hidden  z-10 bg-transparent text-[#212121] p-3 rounded-md  cursor-pointer">
        <ChevronRight size={50} />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        loop={true}
        className="rounded-md overflow-hidden"
      >
        {isLoading && (
          <p className="h-full w-screen flex justify-center items-center text-red">
            Loading.....
          </p>
        )}

        {products.map((category, i) => (
          <SwiperSlide key={i}>
            <a href={`/Products/${category.name}`}>
              <img
                src={category.sub_categories.at(0).image}
                alt={category.sub_categories.at(0).name}
                loading="lazy"
                className="w-full max-h-[600px] sm:max-h-[500px] md:max-h-[600px] rounded-md shadow-md object-cover"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

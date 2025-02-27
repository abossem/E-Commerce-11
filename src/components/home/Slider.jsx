import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import SliderButtons from "../../ui/SliderButtons";

import { useHomeContext } from "../../context/homeContext";
import { Link } from "react-router-dom";

export default function Slider({
  title = "Best Sellers in Clothing & Accessories",
}) {
  const { categories } = useHomeContext();

  return (
    <div className="space-y-4 px-[30px] relative py-[25px] bg-primary-white h-[320px]  pb-[50px]">
      <h2 className="font-[700] text-[16px] md:text-[22px] md:leading-[30px] leading-[20px] text-primary-black max-sm:text-[12px]">
        {title}
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1} // Default for small screens
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 7 },
        }}
        navigation={{ nextEl: ".next-btn" }}
        scrollbar={{ draggable: true }}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        className="h-full relative max-sm:[&_.swiper-scrollbar]{hidden}"
      >
        {categories.map((category, i) => (
          <SwiperSlide key={category?.id}>
            <Link
              to={`/products/category/${category.sub_categories.at(0).name}`}
            >
              <img
                src={category?.sub_categories.at(0).image}
                alt={category.sub_categories.at(0).name}
                className="md:h-[225px] max-sm:mx-auto max-sm:h-[200px] object-cover max-w-[280px] flex justify-center items-center space-x-2 h-[190px] "
              />
            </Link>
          </SwiperSlide>
        ))}

        <SliderButtons
          direction="prev"
          className="absolute bg-primary-white/70 h-[100px] shadow-2xl top-18 left-0 text-[rgba(33,33,33,1)] z-50"
        />

        <SliderButtons
          direction="next"
          className="absolute bg-primary-white/70 h-[100px] shadow-2xl top-18 right-0 text-[rgba(33,33,33,1)] z-50"
        />
      </Swiper>
    </div>
  );
}

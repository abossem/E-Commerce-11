import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SliderButtons from "../../ui/SliderButtons";

const images = [
  {
    imageUrl: "../../../public/heading-slider.png",
  },
  {
    imageUrl: "../../../public/heading-slider.png",
  },
  {
    imageUrl: "../../../public/heading-slider.png",
  },
  {
    imageUrl: "../../../public/heading-slider.png",
  },
  {
    imageUrl: "../../../public/heading-slider.png",
  },
  {
    imageUrl: "../../../public/heading-slider.png",
  },
  {
    imageUrl: "../../../public/heading-slider.png",
  },
  {
    imageUrl: "../../../public/heading-slider.png",
  },
];

export default function Slider({
  title = "Best Sellers in Clothing & Accessories",
}) {
  return (
    <div className="space-y-4 px-[30px] w-full relative py-[25px] bg-primary-white h-[320px]">
      <h2 className="font-[700] text-[16px] md:text-[22px] leading-[30px] text-primary-black">
        {title}
      </h2>

      {/* <SliderButtons
        icon={<ChevronRight />}
        className={
          "prev-btn absolute right-0 sm:top-[-30px] top-[-30px] h-[300px]  max-sm:hidden  z-10 bg-transparent text-[#212121] p-3 rounded-md  cursor-pointer"
        }
        size={50}
      />

      <button className="prev-btn absolute left-0 sm:top-[-30px] top-[-30px] h-[300px]  max-sm:hidden  z-10 bg-transparent text-[#212121] p-3 rounded-md  cursor-pointer">
        <ChevronLeft size={50} />
      </button> */}

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={7}
        navigation={{ nextEl: ".next-btn" }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        className="h-full relative"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <img
              src={image.imageUrl}
              alt="product-img"
              className="h-[225px] object-cover max-w-[160px] space-x-2"
            />
          </SwiperSlide>
        ))}

        <SliderButtons
          direction="prev"
          className="absolute bg-transparent top-23 left-0 text-[rgba(33,33,33,1)] z-50"
        />

        <SliderButtons
          direction="next"
          className="absolute bg-transparent top-23 right-0 text-[rgba(33,33,33,1)] z-50"
        />
      </Swiper>
    </div>
  );
}

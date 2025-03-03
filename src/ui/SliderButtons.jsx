import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwiper } from "swiper/react";

const SliderButtons = ({ direction = "next", className = "" }) => {
  const swiper = useSwiper();

  const handleClick = () => {
    if (!swiper) return;
    direction === "next" ? swiper.slideNext() : swiper.slidePrev();
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 max-sm:hidden cursor-pointer rounded-sm ${className}`}
    >
      {direction === "next" ? (
        <ChevronRight size={30} />
      ) : (
        <ChevronLeft size={30} />
      )}
    </button>
  );
};

export default SliderButtons;

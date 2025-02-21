import { ChevronLeft, ChevronRight } from "lucide-react"; // أيقونات من Lucide أو ممكن تستخدم أي مكتبة
import { useSwiper } from "swiper/react";

const SliderButtons = ({ direction = "next", className = "" }) => {
  const swiper = useSwiper();

  const handleClick = () => {
    if (!swiper) return;
    direction === "next" ? swiper.slideNext() : swiper.slidePrev();
  };

  return (
    <button onClick={handleClick} className={`p-2 cursor-pointer ${className}`}>
      {direction === "next" ? (
        <ChevronRight size={30} />
      ) : (
        <ChevronLeft size={30} />
      )}
    </button>
  );
};

export default SliderButtons;

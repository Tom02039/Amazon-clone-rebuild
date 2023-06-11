import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 4500,
        }}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img alt="carousel" src={"../images/carousel_1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="carousel" src={"../images/carousel_2.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <video controls muted="muted">
            <source src={"../images/carousel_vid.mp4"} />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="carousel" src={"../images/carousel_3.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="carousel" src={"../images/carousel_4.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="carousel" src={"../images/carousel_5.jpg"} />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900"></div>
    </div>
  );
};

export default Carousel;

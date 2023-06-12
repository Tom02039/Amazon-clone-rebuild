import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const CarouselProduct = () => {
  return (
    <div className="bg-white m-3 p-3">
      <div className="text-xl xl:text-2xl font-semibold m-3">Best Sellers</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        modules={[Navigation]}
        navigation
        className="p-3"
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            <Link to={`/product/${i}`}>
              <img
                className="cursor-pointer"
                alt="product"
                src={`../images/product_${i}_small.jpg`}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProduct;

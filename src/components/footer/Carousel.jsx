import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./Carousel.css";

export default function Carousel({ children }) {
  return (
    <div className="carousel">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        navigation={{
          nextEl: ".carousel__button-next",
          prevEl: ".carousel__button-prev",
        }}
        breakpoints={{
          1300: {
            slidesPerView: 3,
          },
          730: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {React.Children.map(children, (child) => (
          <SwiperSlide className="carousel__slide">{child}</SwiperSlide>
        ))}
      </Swiper>
      <div className="carousel__buttons">
        {/* <button className="carousel__button carousel__button--prev">←</button>
        <button className="carousel__button carousel__button--next">→</button> */}
      </div>
    </div>
  );
}

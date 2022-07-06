import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"

// import "../styles/swipe.css";

export default function Slider() {
  return (
    <>
    <Swiper
      cssMode
      navigation
      pagination 
      mousewheel
      keyboard
      modules={[Navigation, Pagination, Mousewheel, Keyboard]} 
      className="mySwiper"

    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
  
    </Swiper>
    </>
  );
};


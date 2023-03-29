import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swiper.css";
import image1 from "../assets/img/image1.jpg"
import image2 from "../assets/img/image2.jpg"
import image3 from "../assets/img/image3.jpg"
import image4 from "../assets/img/image4.jpg"
import image5 from "../assets/img/image5.jpg"
import image6 from "../assets/img/image6.jpg"
import image7 from "../assets/img/image7.jpg"
import image8 from "../assets/img/image8.jpg"
import image9 from "../assets/img/image9.jpg"
import image10 from "../assets/img/image10.jpg"
import image11 from "../assets/img/image11.jpg"
import image12 from "../assets/img/image12.jpg"
import image13 from "../assets/img/image13.jpg"
import image14 from "../assets/img/image14.jpg"
import image15 from "../assets/img/image15.jpg"
import image16 from "../assets/img/image16.jpg"

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Swipers = () => {
  return (
    <>
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={image1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image4} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image5} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image6} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image7} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image8} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image9} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image10} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image11} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image12} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image13} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image14} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image15} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image16} />
      </SwiperSlide>

      
    </Swiper>
  </>
  )
}

export default Swipers
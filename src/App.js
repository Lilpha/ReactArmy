import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={require("./images/A.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("./images/B.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("./images/C.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("./images/D.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("./images/E.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("./images/F.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("./images/G.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("./images/H.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("./images/I.jpg")} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="homeSwiper"
      >
        <SwiperSlide><img src='/images/fachada.png' alt='Oficina/Edificio NYC'/></SwiperSlide>
        <SwiperSlide><img src='/images/oficina-nyc.jpeg' alt='Oficinas NYC'/></SwiperSlide>
        <SwiperSlide><img src='/images/garita-vigilancia.jpeg' alt='Garita vigilancia'/></SwiperSlide>
        <SwiperSlide><img src='/images/guardias.jpg' alt='Vigilancia' /></SwiperSlide>
      </Swiper>
    </>
  );
}

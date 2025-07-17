import React from 'react';
import Image from 'next/image';
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
        <SwiperSlide>
          <Image 
            src='/images/edificio-oficina-nyc.png' 
            alt='Oficina/Edificio NYC'
            width={800}
            height={600}
            priority={true}
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <Image 
            src='/images/oficina-nyc.jpeg' 
            alt='Oficinas NYC'
            width={800}
            height={600}
            loading="lazy"
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <Image 
            src='/images/garita-vigilancia.jpeg' 
            alt='Garita vigilancia'
            width={800}
            height={600}
            loading="lazy"
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <Image 
            src='/images/guardias.jpg' 
            alt='Vigilancia'
            width={800}
            height={600}
            loading="lazy"
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
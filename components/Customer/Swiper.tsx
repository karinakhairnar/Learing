import React from 'react'
import s from "./Customer.module.scss";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
const Swiper = () => {
  return (
    <div className={s.swipers}>
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 500,
        disableOnInteraction: false
    }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
      <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/slack.png" alt="" width={150} />
      </SwiperSlide>
      <SwiperSlide>
      <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/envato.png" alt="" width={150}/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/paypal.png" alt="" width={150}/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/spoty.png" alt="" width={150}/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/shopboat.png" alt="" width={150}/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/slack.png" alt="" width={150} />
      </SwiperSlide>
     
      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}
    </Swiper>
  </div>
  )
}

export default Swiper
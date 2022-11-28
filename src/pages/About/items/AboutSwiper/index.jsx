import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.scss';

import swiperImage1 from '../../../../images/image-on-swiper-1.png';
import swiperImage2 from '../../../../images/image-on-swiper-2.png';
import swiperImage3 from '../../../../images/image-on-swiper-3.png';
import swiperImage4 from '../../../../images/image-on-swiper-4.png';

const AboutSwiper = () => {
  return (
    <>
      <Swiper
        className="about_swiper"
        slidesPerView={1}
        spaceBetween={120}
        speed={1500}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <div className="about_slide_title">
            <h2>About Yopta Store</h2>
            <p>This store was created for entertainment and educational purposes, as part of a self-education course in learning web programming.</p>
            <p>Thanks to SnailDog and Muloversic!</p>
          </div>
          <img className="about_slide_image" src={swiperImage1} alt="swiperImage1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="about_slide_image" src={swiperImage2} alt="swiperImage2" />
          <div className="about_slide_title">
            <h2>About Yopta Store</h2>
            <p>This store was created for entertainment and educational purposes, as part of a self-education course in learning web programming.</p>
            <p>Thanks to SnailDog and Muloversic!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="about_slide_title">
            <h2>About Yopta Store</h2>
            <p>This store was created for entertainment and educational purposes, as part of a self-education course in learning web programming.</p>
            <p>Thanks to SnailDog and Muloversic!</p>
          </div>
          <img className="about_slide_image" src={swiperImage3} alt="swiperImage3" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="about_slide_image" src={swiperImage4} alt="swiperImage4" />
          <div className="about_slide_title">
            <h2>About Yopta Store</h2>
            <p>This store was created for entertainment and educational purposes, as part of a self-education course in learning web programming.</p>
            <p>Thanks to SnailDog and Muloversic!</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AboutSwiper;

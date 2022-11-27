import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import swiperImage1 from '../../images/swiper-image-1.png';
import swiperImage2 from '../../images/swiper-image-2.png';
import swiperImage3 from '../../images/swiper-image-3.png';
import swiperImage4 from '../../images/swiper-image-4.png';

import './style.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const About = () => {
  return (
    <div className="about_wrapper">
      <div className="about_container">
        <Swiper
          className="about_swiper"
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img src={swiperImage1} alt="swiperImage1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperImage2} alt="swiperImage2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperImage3} alt="swiperImage3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperImage4} alt="swiperImage4" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default About;

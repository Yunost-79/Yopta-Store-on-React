import React, { useState } from 'react';

import LoginBlockForm from './item/LoginForm';
import RegistrationBlockForm from './item/RegistrationForm';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import './style.scss';

// import loginImage1 from '../../images/image-on-swiper-login-1.png';
// import loginImage2 from '../../images/image-on-swiper-login-2.png';
// import loginImage3 from '../../images/image-on-swiper-login-3.png';

const Login = () => {
  const [formRenderSignUp, setFormRenderSignUp] = useState(null);

  //Render login on registration menu
  const handleFormRenderSignUp = () => {
    setFormRenderSignUp('SignUp');
  };

  //Render login on registration menu
  const handleFormRenderLogin = () => {
    setFormRenderSignUp(null);
  };

  return (
    <div className="login_page">
      <div className="login_container">
        <div className="login_block_swiper">
          swiper
          {/* <Swiper
            className="login_swiper"
            slidesPerView={1}
            spaceBetween={120}
            speed={1500}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              type: 'bullets',
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
          >
            <SwiperSlide>
              <img className="login_slide_image" src={loginImage1} alt="loginImage1" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="login_slide_image" src={loginImage2} alt="loginImage2" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="login_slide_image" src={loginImage3} alt="loginImage3" />
            </SwiperSlide>
          </Swiper> */}
        </div>
        {formRenderSignUp != null ? (
          <RegistrationBlockForm handleFormRenderLogin={handleFormRenderLogin} />
        ) : (
          <LoginBlockForm handleFormRenderSignUp={handleFormRenderSignUp} />
        )}
      </div>
    </div>
  );
};

export default Login;

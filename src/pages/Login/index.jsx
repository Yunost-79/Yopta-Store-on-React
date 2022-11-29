import React, { useState } from 'react';

import LoginBlockForm from './item/LoginForm';
import RegistrationBlockForm from './item/RegistrationForm';

import './style.scss';

import loginImage1 from '../../images/image-on-swiper-login-1.png';
import loginImage2 from '../../images/image-on-swiper-login-2.png';
import loginImage3 from '../../images/image-on-swiper-login-3.png';

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
        <div className="login_block_info">
          <h2 className='info_title'>Entry or create a new account on Yopta Store</h2>

          <img className='info_image' src={loginImage2} alt="" />
        </div>
        <form className="login_block_form">
          {formRenderSignUp != null ? (
            <RegistrationBlockForm handleFormRenderLogin={handleFormRenderLogin} />
          ) : (
            <LoginBlockForm handleFormRenderSignUp={handleFormRenderSignUp} />
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;

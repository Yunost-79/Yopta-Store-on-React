import React from 'react';

import './AuthPage.scss';

import loginImage from '../../images/image-on-swiper-login-2.png';
import { Outlet } from 'react-router-dom';

const AuthPage = () => {

  return (
    <div className="login_page">
      <div className="login_container">
        <div className="login_block_info">
          <h2 className="info_title">Entry or create a new account on Yopta Store</h2>

          <img className="info_image" src={loginImage} alt="" />
        </div>
        <div className="form_block">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

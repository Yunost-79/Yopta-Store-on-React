import React from 'react';


import AboutSwiper from './items/AboutSwiper';

import './style.scss';

const About = () => {
  return (
    <div className="about_wrapper">
      <div className="about_container">
        <AboutSwiper />
      </div>
    </div>
  );
};

export default About;

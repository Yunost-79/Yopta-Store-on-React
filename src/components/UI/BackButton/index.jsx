import React from 'react';

import './style.scss';

import LeftArrow from '../../../images/arrow-left.svg';

const BackButton = (props) => {
  const { children, className, text, ...restProps } = props;
  return (
    <button className={`back_btn ${className ? className : ''}`} {...restProps}>
      <img src={LeftArrow} alt="" />
      <h3>{text}</h3>
    </button>
  );
};

export default BackButton;

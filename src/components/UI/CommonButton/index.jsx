import React from 'react';

import './style.scss';

const CommonButton = (props) => {
  const { children, className, ...restProps } = props;
  return <button  className={`common_btn ${className}`} {...restProps}>{children}</button>;
};

export default CommonButton;

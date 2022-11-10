import React from 'react';

import './style.scss';

const CommonButton = (props) => {
  return <button className="common_btn">{props.children}</button>;
};

export default CommonButton;

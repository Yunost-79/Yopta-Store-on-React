import React from 'react';
import { Button } from '@mui/material';

import './style.scss';

const CommonButton = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <Button variant="contained" className={`common_btn ${className ? className : ''}`} {...restProps}>
      {children}
    </Button>
  );
};

export default CommonButton;

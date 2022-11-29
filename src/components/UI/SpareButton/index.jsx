import React from 'react';

import { Button } from '@mui/material';



import './style.scss';

const SpareButton = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <Button variant="outlined" className={`spare_btn ${className ? className : ''}`} {...restProps}>
      {children}
    </Button>

  );
};

export default SpareButton;

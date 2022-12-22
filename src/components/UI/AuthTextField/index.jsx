import React from 'react';
import { TextField } from '@mui/material';

import './style.scss';

const AuthTextField = (props) => {
  const { children, className, ...restProps } = props;

  return <TextField className={`Mui-yopta-input ${className ? className : null}`} variant="standard" margin="normal" fullWidth {...restProps} />;
};

export default AuthTextField;

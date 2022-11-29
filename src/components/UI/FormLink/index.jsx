import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const FormLink = (props) => {
  const { children, className, ...restProps } = props;
  return <Link className={`form_link ${className ? className : ''}`} {...restProps}>{children}</Link>;
};

export default FormLink;

import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const FormLink = (props) => {
  const { children, className, path, ...restProps } = props;
  return (
    <Link to={path} className={`form_link ${className ? className : null}`} {...restProps}>
      {children}
    </Link>
  );
};

export default FormLink;

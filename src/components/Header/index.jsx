import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HEADER_AUTH_LINKS_ITEMS, HEADER_DEFAULT_LINKS_ITEMS } from '../../variables/variablesScripts';
import { isTokenValid } from '../../helpers/tokenHelper';

import LogoImg from '../../images/Logo.svg';

import './style.scss';

const Header = () => {
  const location = useLocation();



  const getLinks = () => {
    console.log(isTokenValid());
    if (isTokenValid()) {
      return HEADER_AUTH_LINKS_ITEMS;
    }
    return HEADER_DEFAULT_LINKS_ITEMS;
  };

  return (
    <header className="header">
      <div className="header_wrapper">
        <div className="header_logo">
          <Link to="/" className="logo_link">
            <img src={LogoImg} alt="" />
            <h1>Yopta Store</h1>
          </Link>
        </div>
        <div className="header_links">
          <ul>
            {getLinks().map(({ to, label }) => (
              <li key={label}>
                <Link to={to} className={`link ${to === location.pathname ? 'active' : ''}`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

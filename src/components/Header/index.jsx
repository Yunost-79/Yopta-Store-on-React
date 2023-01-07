import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HEADER_AUTH_LINKS_ITEMS, HEADER_DEFAULT_LINKS_ITEMS } from '../../variables/variablesScripts';
import { getTokenData, isTokenValid, loadToken, saveToken } from '../../helpers/tokenHelper';

import LogoImg from '../../images/Logo.svg';

import './style.scss';

const Header = () => {
  const location = useLocation();
  const isAuth = () => {
    const token = localStorage.getItem('access_token');
    if (token) {
      return true;
    }
    return false;
  };

  console.log(isAuth());

  useEffect(() => {
    getLinks();
    isAuth();
  }, []);

  const getLinks = () => {
    // console.log('isTokenValid', isTokenValid());
    // console.log('saveToken', saveToken());
    // console.log('loadToken', loadToken());

    if (isAuth()) {
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
            {getLinks().map(({ to, label, func }) => (
              <li key={label}>
                <Link to={to} onClick={func} className={`link ${to === location.pathname ? 'active' : ''}`}>
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

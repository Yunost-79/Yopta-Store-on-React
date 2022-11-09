import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HEADER_LINKS_ITEMS } from '../../variables/variablesScripts';

import LogoImg from '../../images/Logo.svg';

import './style.scss';

const data = HEADER_LINKS_ITEMS;

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header_logo">
        <Link to="/" className="logo_link">
          <img src={LogoImg} />
          <h1>Yopta Store</h1>
        </Link>
      </div>
      <div className="header_links">
        <ul>
          {data.map(({ to, label }) => (
            <li key={label}>
              <Link to={to} className={`link ${to === location.pathname ? 'active' : ''}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;

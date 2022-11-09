import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { nanoid } from 'nanoid';

import './Layout.scss';
import { HEADER_LINKS_ITEMS } from '../../variables';

import LogoImg from '../../images/Logo.svg';



const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="header_logo">
          <Link to='/' className='logo_link'>
          <img src={LogoImg} />
          <h1>Yopta Store</h1>
          </Link>
        </div>
        <div className="header_links">
          <ul>
            {HEADER_LINKS_ITEMS.map(({ to, label }) => (
              <li key={nanoid()}>
                <Link to={to} className="link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <Outlet />

      <footer className="footer">This is footer</footer>
    </>
  );
};

export default Layout;

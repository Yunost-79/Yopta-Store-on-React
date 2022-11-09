import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './Layout.scss';

import LogoImg from '../../images/Logo.svg';

const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="header_logo">
          <img src={LogoImg} />
          <h1>Yopta Store</h1>
        </div>
        <div className="header_links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Basket</NavLink>
          <NavLink to="/">Log in</NavLink>
        </div>
      </header>

      <Outlet />

      <footer className="footer">This is footer</footer>
    </>
  );
};

export default Layout;

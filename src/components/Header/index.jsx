import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions';
import { removeToken } from '../../helpers/tokenHelper';

import { HEADER_AUTH_LINKS_ITEMS, HEADER_DEFAULT_LINKS_ITEMS } from '../../variables/variablesScripts';

import CountCircle from '../CountCircle/CountCircle';

import LogoImg from '../../images/Logo.svg';

import './style.scss';

const Header = ({ isAuthenticated, logoutUserAction, basketCounter }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const clearLocalStore = () => localStorage.clear();

  useEffect(() => {
    getLinks();
  }, [isAuthenticated]);

  const getLinks = () => {
    if (isAuthenticated) {
      return HEADER_AUTH_LINKS_ITEMS;
    }
    return HEADER_DEFAULT_LINKS_ITEMS;
  };

  const handleLogout = (e) => {
    e.preventDefault();
    removeToken();
    logoutUserAction();
    clearLocalStore();
    navigate('/');
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
            {getLinks().map(({ to, label, isActions }) => {
              if (isActions) {
                return (
                  <li key={label}>
                    <Link to={to} onClick={handleLogout} className={`link ${label} ${to === location.pathname ? 'active' : ''}`}>
                      {label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={label}>
                  <Link to={to} className={`link ${label} ${to === location.pathname ? 'active' : ''}`}>
                    {label}
                    {basketCounter !== 0 && to === '/basket' ? <CountCircle basketCounter={basketCounter} /> : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

// export default Header;

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
  basketCounter: state.productsBasket.basketCounter,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // setUserLoginData: (payload) => dispatch(setUserLoginData(payload)),
    logoutUserAction: (payload) => dispatch(logoutUser(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

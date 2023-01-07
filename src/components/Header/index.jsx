import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions';
// import {logoutUser} from '../../helpers/tokenHelper'

import { HEADER_AUTH_LINKS_ITEMS, HEADER_DEFAULT_LINKS_ITEMS } from '../../variables/variablesScripts';
import { getTokenData, isTokenValid, loadToken, saveToken } from '../../helpers/tokenHelper';

import LogoImg from '../../images/Logo.svg';

import './style.scss';

const Header = ({isAuthenticated, logoutUserAction}) => {
  const location = useLocation();
  // const isAuth = () => {
  //   const token = localStorage.getItem('access_token');
  //   if (token) {
  //     return true;
  //   }
  //   return false;
  // };

  // console.log(isAuth());

  useEffect(() => {
    console.log('isAuthenticated', isAuthenticated);
    getLinks();
    // isAuth();
  }, [isAuthenticated]);

  const getLinks = () => {
    // console.log('isTokenValid', isTokenValid());
    // console.log('saveToken', saveToken());
    // console.log('loadToken', loadToken());

    if (isAuthenticated) {
      return HEADER_AUTH_LINKS_ITEMS;
    }
    return HEADER_DEFAULT_LINKS_ITEMS;
  };

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('access_token')
    logoutUserAction()
  }


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
              if(isActions){
               return ( <li key={label}>
                <Link to={to} onClick={handleLogout} className={`link ${to === location.pathname ? 'active' : ''}`}>
                  {label}
                </Link>
              </li>)
              }
                return (<li key={label}>
                  <Link to={to} className={`link ${to === location.pathname ? 'active' : ''}`}>
                    {label}
                  </Link>
                </li>)
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

// export default Header;

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated
});

const mapDispatchToProps = (dispatch) => {
  return {
    // setUserLoginData: (payload) => dispatch(setUserLoginData(payload)),
    logoutUserAction: payload => dispatch(logoutUser(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
import React from 'react';
import { connect } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { setUserData } from '../../../redux/actions/userActions';

import AuthTextField from '../../../components/UI/AuthTextField';
import FormLink from '../../../components/UI/FormLink';
import SpareButton from '../../../components/UI/SpareButton';

const AuthLogin = ({ userData, setUserData }) => {
  const handleSubmit = useOutletContext();
  
  // setUserData()

  // console.log(userData);


  return (
    <>
      <form className="form_auth" onSubmit={handleSubmit}>
        <h3 className="auth_title">Login</h3>
        <AuthTextField label="E-mail" placeholder="Enter your E-mail..." name="email" type="email" required autoFocus />
        <AuthTextField label="Password" placeholder="Enter your password..." name="password" type="password" required />
        <SpareButton className="auth_button">Sign In</SpareButton>
        <FormLink to="/auth/sign-up" className="auth_link">
          or Sign up
        </FormLink>
        <FormLink to="/auth/test" className="auth_link">
          Test
        </FormLink>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (payload) => dispatch(setUserData(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin);

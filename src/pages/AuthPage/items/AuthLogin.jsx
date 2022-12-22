import React from 'react';
import { useOutletContext } from 'react-router-dom';

import AuthTextField from '../../../components/UI/AuthTextField';
import FormLink from '../../../components/UI/FormLink';
import SpareButton from '../../../components/UI/SpareButton';

const AuthLogin = () => {
  const handleSubmit = useOutletContext();

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
      </form>
    </>
  );
};

export default AuthLogin;

import React from 'react';
import AuthTextField from '../../../components/UI/AuthTextField';
import FormLink from '../../../components/UI/FormLink';
import SpareButton from '../../../components/UI/SpareButton';

const AuthSignUp = () => {
  return (
    <div>
      <>
        <form className="form_auth">
          <h3 className="auth_title">Registration</h3>
          <AuthTextField label="Username" placeholder="Enter your username..." name="username" type="username" required autoFocus />
          <AuthTextField label="E-mail" placeholder="Enter your E-mail..." name="email" type="email" required />
          <AuthTextField label="Password" placeholder="Enter your password..." name="password" type="password" required />
          <AuthTextField label="Confirm password" placeholder="Enter your password againe..." name="password" type="password" required />
          <SpareButton className='auth_button'>Sign Up</SpareButton>
          <FormLink to="/auth" className='auth_link'>or Login</FormLink>
        </form>
      </>
    </div>
  );
};

export default AuthSignUp;

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserSignUpData } from '../../../redux/actions/userActions';
import { Field, reduxForm } from 'redux-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import validate from './validateSignUp';

import AuthTextField from '../../../components/UI/AuthTextField';
import FormLink from '../../../components/UI/FormLink';
import SpareButton from '../../../components/UI/SpareButton';

const renderAuthField = ({ input, className, helperText, meta: { touched, error }, ...custom }) => (
  <AuthTextField
    className={` Mui-auth-input ${className} ${touched && error ? 'Mui-input-error' : ''}`}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);
let AuthSignUp = ({ reset, userSignUpData, setUserSignUpData, formValueSignUp }) => {
  const [changeIconPassword, setChangeIconPassword] = useState(false);

  const handleSubmitSignUp = (event) => {
    event.preventDefault();
    console.log(formValueSignUp);
    setUserSignUpData(formValueSignUp);
    alert(userSignUpData)
  };

  console.log('userSignUpData:', userSignUpData);
  

  const handleShowPasswords = () => {
    setChangeIconPassword(true);
  };

  const handleHidePaswords = () => {
    setChangeIconPassword(false);
  };

  

  return (
    <div>
      <>
        <form className="form_auth" onSubmit={handleSubmitSignUp}>
          <h3 className="auth_title">Registration</h3>
          <Field component={renderAuthField} label="Username" placeholder="Enter your username..." name="name" required autoFocus />
          <Field component={renderAuthField} label="E-mail" placeholder="Enter your E-mail..." name="email" required />
          <Field
            component={renderAuthField}
            label="Password"
            placeholder="Create your password..."
            name="password"
            type={changeIconPassword ? 'text' : 'password'}
            required
          />
          <Field
            component={renderAuthField}
            label="Password confirmation"
            placeholder="Enter your password againe..."
            name="passwordConfirm"
            type={changeIconPassword ? 'text' : 'password'}
            required
          />

          <div className="show_password">
            <span className="show_password_title">{changeIconPassword ? 'Hide password' : 'Show password'}</span>
            <div className="show_password_icons">
              {changeIconPassword ? (
                <VisibilityOffIcon className="password_icons_item" onClick={handleHidePaswords} />
              ) : (
                <VisibilityIcon className="password_icons_item" onClick={handleShowPasswords} />
              )}
            </div>
          </div>

          <SpareButton className="auth_button" type="submit">
            Sign Up
          </SpareButton>

          <div className="auth_links">
            <FormLink to="/auth/login" className="auth_links_item">
              or Login
            </FormLink>
            <FormLink className="auth_links_item" onClick={reset}>
              Clear fields
            </FormLink>
          </div>
        </form>
      </>
    </div>
  );
};

AuthSignUp = reduxForm({ form: 'AuthSignUp', validate })(AuthSignUp);

const mapStateToProps = (state) => ({
  formValueSignUp: state.form.AuthSignUp?.values,
  userSignUpData: state.users.userLoginData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUserSignUpData: (payload) => dispatch(setUserSignUpData(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthSignUp);

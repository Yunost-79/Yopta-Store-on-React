import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserLoginData } from '../../../redux/actions/userActions';
import { Field, Form, reduxForm } from 'redux-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { getTokenData, saveToken } from '../../../helpers/tokenHelper';

import validate from './validateLogin';

import AuthTextField from '../../../components/UI/AuthTextField';
import FormLink from '../../../components/UI/FormLink';
import SpareButton from '../../../components/UI/SpareButton';
import axios from 'axios';

const renderAuthField = ({ input, className, helperText, meta: { touched, error }, ...custom }) => (
  <AuthTextField
    className={` Mui-auth-input ${className} ${touched && error ? 'Mui-input-error' : ''}`}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);
let AuthLogin = ({ reset, userLoginData, setUserLoginData, formValueLogin }) => {
  const [changeIconPassword, setChangeIconPassword] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const postLoginData = await axios({
        url: 'https://fakestoreapi.com/auth/login',
        method: 'POST',
        data: {
          username: 'mor_2314',
          password: '83r5^_',
        },
      });
      console.log(postLoginData);
      console.log(postLoginData.data.token);
      saveToken(postLoginData.data.token);
      const getUserData = await axios({
        url: `https://fakestoreapi.com/users/${getTokenData().sub}`,
        method: 'GET',
      });
      setUserLoginData(getUserData)
    } catch (error) {
      console.log(error);
    }

    // .then((res) => {
    //   console.log(res);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  //Function to submit login form

  console.log('userLogindData:', userLoginData);

  const handleShowPasswords = () => {
    setChangeIconPassword(true);
  };

  const handleHidePaswords = () => {
    setChangeIconPassword(false);
  };

  return (
    <>
      <Form className="form_auth" onSubmit={handleOnSubmit}>
        <h3 className="auth_title">Login</h3>
        <Field component={renderAuthField} label="Username" placeholder="Enter your username..." name="username" required autoFocus />
        {/* <Field component={renderAuthField} label="E-mail" placeholder="Enter your E-mail..." name="email" required  /> */}
        <Field
          component={renderAuthField}
          label="Password"
          placeholder="Enter your password..."
          name="password"
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
          Sign In
        </SpareButton>
        <div className="auth_links">
          <FormLink to="/auth/sign-up" className="auth_links_item">
            or Sign up
          </FormLink>
          <FormLink className="auth_links_item" onClick={reset}>
            Clear fields
          </FormLink>
        </div>
      </Form>
    </>
  );
};

AuthLogin = reduxForm({ form: 'AuthLogin', validate })(AuthLogin);

const mapStateToProps = (state) => ({
  formValueLogin: state.form.AuthLogin?.values,
  userLoginData: state.users.userLoginData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUserLoginData: (payload) => dispatch(setUserLoginData(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin);

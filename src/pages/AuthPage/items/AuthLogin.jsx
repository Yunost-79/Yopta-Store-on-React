import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from 'redux-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { getTokenData, saveToken } from '../../../helpers/tokenHelper';

import { setUserData, loginUser } from '../../../redux/actions/userActions';
import validate from './validateLogin';
import { postLoginData } from '../../../API/postUserLogin';
import { getLoginUserData } from '../../../API/getUserData';

import AuthTextField from '../../../components/UI/AuthTextField';
import FormLink from '../../../components/UI/FormLink';
import SpareButton from '../../../components/UI/SpareButton';
import { useNavigate } from 'react-router-dom';
import { getRandomGeolocation } from '../../../API/getRandomGeo';

const renderAuthField = ({ input, className, helperText, defaultValue, meta: { touched, error }, ...custom }) => (
  <AuthTextField
    className={` Mui-auth-input ${className} ${touched && error ? 'Mui-input-error' : ''}`}
    defaultValue={defaultValue}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);
let AuthLogin = ({ reset, userData, setUserData, formValueLogin, loginUserAction }) => {
  const navigate = useNavigate();
  const [changeIconPassword, setChangeIconPassword] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = await postLoginData(formValueLogin.username, formValueLogin.password);
      const loginToken = postData.data.token;
      saveToken(loginToken);

      const getData = await getLoginUserData(getTokenData().sub);
      const userData = getData.data;

      const geoData = await getRandomGeolocation();
      // console.log('AuthgeoData', geoData);

      localStorage.setItem(
        'user_data',
        JSON.stringify({
          isAuth: true,
          profileUserData: userData,
          userGeoData: geoData,
        })
      );
      console.log('AUTHPAGE setUserData', setUserData);

      setUserData(userData);
      loginUserAction(userData);
      navigate('/');
    } catch (error) {
      // console.log(error);
      loginUserAction(error.response.status || error);
    }
  };

  //Function to change hide/show icons

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
  userData: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (payload) => dispatch(setUserData(payload)),
    loginUserAction: (payload) => dispatch(loginUser(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin);

import React from 'react';
import { connect } from 'react-redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import AuthTextField from '../../../components/UI/AuthTextField';
import SpareButton from '../../../components/UI/SpareButton';
import validate from './validateLogin';

const renderTextField = ({ input, className, helperText, meta: { touched, error }, ...custom }) => (
  <AuthTextField
    className={`${className} Mui-auth-input ${touched && error ? 'Mui-input-error' : ''}`}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

let AuthTest = ({ reset, formValue }) => {
  const handleSubmitTest = (event) => {
    event.preventDefault();
  };

  console.log(formValue);

  return (
    <form className="form_auth" onSubmit={handleSubmitTest}>
      <h3 className="auth_title">Test</h3>

      <Field component={renderTextField} className="Test_input" label="E-mail" placeholder="Enter your E-mail..." name="email" required autoFocus />

      <Field
        component={renderTextField}
        label="Password"
        placeholder="Enter your password..."
        helperText="Wrong password"
        name="password"
        type="password"
        required
      />
      <SpareButton className="auth_button" type="submit">
        Sign In
      </SpareButton>
      <SpareButton className="auth_button" type="button" onClick={reset}>
        Clear Inputs
      </SpareButton>
    </form>
  );
};

AuthTest = reduxForm({
  form: 'AuthTest',
  validate,
})(AuthTest);

const mapStateToProps = (state) => ({
  formValue: state.form.AuthTest?.values,
});

export default connect(mapStateToProps)(AuthTest);

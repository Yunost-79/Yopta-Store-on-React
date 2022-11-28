import React from 'react';

import { FormControl, TextField } from '@mui/material';
import CommonButton from '../../../../components/UI/CommonButton';

import './style.scss';

const LoginBlockForm = () => {
  return (
    <form className="login_block_form">
      <FormControl className="form_wrapper">
        <h3 className="form_title">Login</h3>
        <TextField
          className="form_input"
          id="standard"
          label="Enter your YoptaLogin"
          // defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          className="form_input"
          id="standard"
          label="Enter your E-mail"
          // defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          className="form_input"
          id="standard-password-input"
          type="password"
          label="Enter your YoptaPassword"
          // defaultValue="Hello World"
          variant="standard"
        />
        <div className="form_buttons">
          <CommonButton className="button_item">Login</CommonButton>
          <CommonButton className="button_item">Registration</CommonButton>
        </div>
      </FormControl>
    </form>
  );
};

export default LoginBlockForm;

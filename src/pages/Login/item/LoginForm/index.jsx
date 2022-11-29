import React from 'react';

import { FormControl, TextField } from '@mui/material';

import './style.scss';
import SpareButton from '../../../../components/UI/SpareButton';

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
          <SpareButton className="button_item">Login</SpareButton>
          <SpareButton className="button_item">Registration</SpareButton>
        </div>
      </FormControl>
    </form>
  );
};

export default LoginBlockForm;

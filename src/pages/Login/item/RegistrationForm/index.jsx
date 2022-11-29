import React from 'react';

import { FormControl, TextField } from '@mui/material';

import './style.scss';
import SpareButton from '../../../../components/UI/SpareButton';
import FormLink from '../../../../components/UI/FormLink';

const RegistrationBlockForm = ({ handleFormRenderLogin }) => {
  return (
    <form className="login_block_form">
      <FormControl className="form_wrapper">
        <h3 className="form_title">Sign up</h3>
        <TextField
          className="form_input"
          id="standard"
          label="Enter your YoptaLogin"
          variant="standard"
        />
        <TextField
          className="form_input"
          id="standard"
          label="Enter your E-mail"
          variant="standard"
        />
        <TextField
          className="form_input"
          id="standard-password-input"
          type="password"
          label="Enter your YoptaPassword"
          variant="standard"
        />
        <TextField
          className="form_input"
          id="standard-password-input"
          type="password"
          label="Enter your YoptaPassword again"
          variant="standard"
        />
        <div className="form_buttons">
          <SpareButton className="button_item">Sing up</SpareButton>
          <FormLink className='link_item' onClick={(e) => handleFormRenderLogin()}>Login</FormLink>
        </div>
      </FormControl>
    </form>
  );
};

export default RegistrationBlockForm;

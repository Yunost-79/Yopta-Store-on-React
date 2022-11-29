import React from 'react';

import { FormControl, TextField } from '@mui/material';

import './style.scss';
import SpareButton from '../../../../components/UI/SpareButton';
import FormLink from '../../../../components/UI/FormLink';

const LoginBlockForm = ({ handleFormRenderSignUp }) => {
  return (
    <>
      <FormControl className="form_wrapper">
        <h3 className="form_title">Login</h3>
        <TextField className="form_input" id="standard" label="Enter your YoptaLogin" variant="standard" />
        <TextField className="form_input" id="standard" label="Enter your E-mail" variant="standard" />
        <TextField className="form_input" id="standard-password-input" type="password" label="Enter your YoptaPassword" variant="standard" />
        <div className="form_buttons">
          <SpareButton className="button_item">Login</SpareButton>
          <FormLink onClick={(e) => handleFormRenderSignUp(e)} className="link_item">
            Sign up
          </FormLink>
        </div>
      </FormControl>
    </>
  );
};

export default LoginBlockForm;

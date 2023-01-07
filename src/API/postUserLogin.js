import axios from 'axios';
import { urlAPI } from '../variables/variablesScripts';

export const postLoginData = async (userName, userPassword) => {
  const postData = await axios({
    url: `${urlAPI}/auth/login`,
    method: 'POST',
    data: {
      username: userName,
      password: userPassword,
    },
  });
  return postData;
};

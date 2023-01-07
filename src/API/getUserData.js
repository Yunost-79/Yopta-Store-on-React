import axios from 'axios';
import { urlAPI } from '../variables/variablesScripts';

export const getLoginUserData = async (getToken) => {
  const getData = await axios({
    url: `${urlAPI}/users/${getToken}`,
    method: 'GET',
  });
  return getData;
};

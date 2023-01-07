import axios from 'axios';
import { urlAPI } from '../variables/variablesScripts';

export const fetchData = async (url) => {
  const result = await axios(urlAPI + url);
  return result;
};

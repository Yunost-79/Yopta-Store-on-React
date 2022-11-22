import axios from 'axios';

const urlAPI = 'https://fakestoreapi.com';

export const fetchData = async (url) => {
  const result = await axios(urlAPI + url);
  return result;
};



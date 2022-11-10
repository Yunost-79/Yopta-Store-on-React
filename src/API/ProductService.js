import axios from 'axios';

export const fetchData = async () => {
  const result = await axios('https://api.escuelajs.co/api/v1/products');
  return result;
};

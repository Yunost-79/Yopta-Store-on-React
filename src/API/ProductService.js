import axios from 'axios';

export const fetchData = async () => {
  const result = await axios('https://fakestoreapi.com/products');
  return result;
};

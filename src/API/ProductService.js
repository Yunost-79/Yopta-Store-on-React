import axios from 'axios';

// const urlAPI = 'https://fakestoreapi.com';

export const fetchData = async () => {
  const result = await axios('https://fakestoreapi.com/products');
  
  return result;
};



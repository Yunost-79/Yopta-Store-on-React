import jwt_decode from 'jwt-decode';

const getTokenData = () => jwt_decode(loadToken());

const saveToken = (token) => localStorage.setItem('access_token', token);

const loadToken = () => localStorage.getItem('access_token');


const isTokenValid = () => {
  // console.log("WTF", !!loadToken());
  return !!loadToken();
};

const removeToken = () => localStorage.removeItem('access_token');

export { saveToken, isTokenValid, loadToken, removeToken, getTokenData };

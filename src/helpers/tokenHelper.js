import jwt_decode from 'jwt-decode';

const getTokenData = () => jwt_decode(loadToken());

const saveToken = (token) => localStorage.setItem('access_token', token);

const loadToken = () => localStorage.getItem('access_token');

const isTokenValid = () => {
  return !!loadToken();
};

const removeToken = () => localStorage.removeItem('access_token');

const clearLocalStore = () => localStorage.clear();

export { saveToken, isTokenValid, loadToken, getTokenData, removeToken, clearLocalStore };

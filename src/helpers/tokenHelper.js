import jwt_decode from 'jwt-decode';
import { logoutUser as logoutUserAction } from '../redux/actions/userActions';

const getTokenData = () => jwt_decode(loadToken());

const saveToken = (token) => localStorage.setItem('access_token', token);

const loadToken = () => localStorage.getItem('access_token');


const isTokenValid = () => {
  // console.log("WTF", !!loadToken());
  return !!loadToken();
};

// const logoutUser = () => {
//   localStorage.removeItem('access_token')
//   logoutUserAction()
// };

export { saveToken, isTokenValid, loadToken, getTokenData };

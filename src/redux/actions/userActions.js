export const setUserData = (payload) => {
  return { type: 'SET_USER_DATA', payload: payload };
};

export const setUserSignUpData = (payload) => {
  return { type: 'SET_SIGN_UP_USER_DATA', payload: payload };
};

export const loginUser = (payload) => ({ type: 'USER_DATA_REQUEST', payload: payload });
export const logoutUser = (payload) => ({ type: 'LOGOUT_USER', payload: payload });
export const userIsAuth = (payload) => ({ type: 'USER_IS_AUTH', payload: payload });

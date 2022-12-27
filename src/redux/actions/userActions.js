export const setUserLoginData = (payload) => {
  console.log(payload);
  return { type: 'SET_LOGIN_USER_DATA', payload: payload };
};

export const setUserSignUpData = (payload) => {
  return { type: 'SET_SIGN_UP_USER_DATA', payload: payload };
};

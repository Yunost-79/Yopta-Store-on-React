const initialState = { userLoginData: null, userSignUpData: null };

export const usersReducer = (state = initialState, action) => {


  switch (action.type) {
    case 'SET_LOGIN_USER_DATA':
      return { userLoginData: action.payload };

    case 'SET_SIGN_UP_USER_DATA':
      return { userSignUpData: action.payload };

    default:
      return state;
  }
};

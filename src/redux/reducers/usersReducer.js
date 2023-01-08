const initialState = { userData: null, userSignUpData: null, isAuthenticated: false };

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return { userData: action.payload };

    case 'SET_SIGN_UP_USER_DATA':
      return { userSignUpData: action.payload };

    case 'LOGIN_USER_REQUEST':
      if (action.payload !== 401) {
        // console.log('action.payload', action.payload);
        return { isAuthenticated: true };
      }
      return false;

    case 'LOGOUT_USER':
      return { isAuthenticated: false };

    case 'USER_IS_AUTH':
      return { isAuthenticated: true };
    default:
      return state;
  }
};

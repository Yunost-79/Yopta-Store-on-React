const initialState = { userData: null, userSignUpData: null, isAuthenticated: false, loginData: null };

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return { ...state, userData: action.payload };

    case 'SET_SIGN_UP_USER_DATA':
      return { ...state, userSignUpData: action.payload };

    case 'USER_DATA_REQUEST':
      if (action.payload !== 401) {
        return { ...state, isAuthenticated: true };
      }
      return { isAuthenticated: false };

    case 'LOGOUT_USER':
      return { ...state, isAuthenticated: false };

    case 'USER_IS_AUTH':
      return { ...state, isAuthenticated: true };

    default:
      return state;
  }
};

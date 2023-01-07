const initialState = { userLoginData: null, userSignUpData: null, isAuthenticated: false };

export const usersReducer = (state = initialState, action) => {


  switch (action.type) {
    case 'SET_LOGIN_USER_DATA':
      return { userLoginData: action.payload };

    case 'SET_SIGN_UP_USER_DATA':
      return { userSignUpData: action.payload };

    case 'LOGIN_USER_REQUEST':
      if(action.payload !== 401){
        console.log('action.payload', action.payload);
        return {isAuthenticated: true}
      }
      return false

      case 'LOGOUT_USER_REQUEST':
        return {isAuthenticated: false}
    default:
      return state;
  }
};

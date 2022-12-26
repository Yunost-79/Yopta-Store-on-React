const initialState = { loginTest: null };

export const loginTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN_TEST':
      return {
        ...state,
        password: action.payload
      };
    default:
      return state;
  }
};

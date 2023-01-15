const initialState = { productList: [] };

export const productsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS_DATA':
      return { ...state, productList: action.payload };

    default:
      return state;
  }
};

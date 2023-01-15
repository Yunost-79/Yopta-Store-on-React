const initialState = { productBasketData: [] };

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS_DATA':
      console.log('action.payload', action.payload);
      return { ...state, productBasketData: action.payload };

    case 'ADD_PRODUCTS_DATA':
      if (action.payload !== null) {
        return { ...state, productBasketData: [...state.productBasketData, action.payload] };
      }
    case 'DELETE_PRODUCTS_DATA':
      const deleteData = state.productBasketData.filter((item) => item.id !== action.payload.id);
      return { ...state, productBasketData: deleteData };

    case 'TOGGLE_PRODUCT_DATA':
      const toggleItem = state.productBasketData.find((item) => item.id === action.payload.id);

      return { ...state, productsReducer: toggleItem };

    default:
      return state;
  }
};

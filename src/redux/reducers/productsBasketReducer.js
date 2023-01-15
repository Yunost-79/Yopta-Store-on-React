const initialState = { productBasketData: [], basketCounter: 0 };

export const productsBasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS_BASKET_DATA':
      return { ...state, productBasketData: action.payload };

    case 'ADD_PRODUCTS_BASKET_DATA':
      return { ...state, productBasketData: [...state.productBasketData, action.payload] };

    case 'DELETE_PRODUCTS_BASKET_DATA':
      const deleteData = state.productBasketData.filter((item) => item.id !== action.payload.id);
      return { ...state, productBasketData: deleteData };

    case 'DELETE_PRODUCTS_BASKET_DATA_ALL':
      return { ...state, productBasketData: [] };

    case 'COUNT_PRODUCTS_BASKET_DATA':
      return { ...state, basketCounter: action.payload };

    // case 'TOGGLE_PRODUCT_DATA':
    //   const toggleItem = state.productBasketData.find((item) => item.id === action.payload.id);

    //   return { ...state, productsReducer: toggleItem };

    default:
      return state;
  }
};

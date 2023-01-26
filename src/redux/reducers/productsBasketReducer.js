const initialState = { productBasketData: [], basketCounter: 0, defaulteQuantity: 1, quantity: null };

export const productsBasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS_BASKET_DATA':
      return { ...state, productBasketData: action.payload };

    case 'ADD_PRODUCTS_BASKET_DATA':
      return { ...state, productBasketData: [...state.productBasketData, { ...action.payload, quantity: 1 }] };

    case 'DELETE_PRODUCTS_BASKET_ITEM':
      const deleteData = state.productBasketData.filter((item) => item.id !== action.payload);
      return { ...state, productBasketData: deleteData };

    case 'DELETE_PRODUCTS_BASKET_DATA_ALL':
      return { ...state, productBasketData: [] };

    case 'COUNT_PRODUCTS_BASKET_DATA':
      return { ...state, basketCounter: action.payload };

    case 'UPDATE_BASKET_ITEM':
      const list = state.productBasketData.filter((item) => item.id !== action.payload.id);

      // const { id, newQuantity } = action.payload;
      // const itemQuantity = state.productBasketData;
      // if (itemQuantity.id === id) {
      //   return {
      //     ...itemQuantity,
      //     quantity: newQuantity,
      //   };
      // }

      return { ...state, productBasketData: [...list, action.payload] };

    case 'INCREMENT_QUANTITY_BASKET_ITEM':
      return { ...state, quantity: state.quantity + 1 };

    case 'DECREMENT_QUANTITY_BASKET_ITEM':
      return { ...state, quantity: state.quantity - 1 };

    // case 'TOGGLE_PRODUCT_DATA':
    //   const toggleItem = state.productBasketData.finFd((item) => item.id === action.payload.id);

    //   return { ...state, productsReducer: toggleItem };

    default:
      return state;
  }
};

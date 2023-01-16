const initialState = { productBasketData: [], basketCounter: 0, quantityDataByItem: 0 };

export const productsBasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS_BASKET_DATA':
      return { ...state, productBasketData: action.payload };

    case 'ADD_PRODUCTS_BASKET_DATA':
      // const idById = (item) => {
      //   item.id === action.payload.id;
      // };
      // const addItem = state.productBasketData.find(idById(item));
      // if (addItem) {
      //   const quantityItem = state.productBasketData.map((item) => {
      //     idById(item) ? { ...state, quantityDataByItem: addItem.quantityDataByItem + 1 } : item;
      //   });
      // }
      // // console.log('action.payload', action.payload);
      return { ...state, productBasketData: [...state.productBasketData, action.payload] };

    case 'DELETE_PRODUCTS_BASKET_ITEM':
      const deleteData = state.productBasketData.filter((item) => item.id !== action.payload);
      return { ...state, productBasketData: deleteData };

    case 'DELETE_PRODUCTS_BASKET_DATA_ALL':
      return { ...state, productBasketData: [] };

    case 'COUNT_PRODUCTS_BASKET_DATA':
      return { ...state, basketCounter: action.payload };

    case 'BASKET_ITEM_COUNTER':
      const findItem = state.productBasketData.find((item) => item.id === action.payload.id);
      console.log('BASKET_ITEM_COUNTER findItem', findItem);

      return;

    // case 'TOGGLE_PRODUCT_DATA':
    //   const toggleItem = state.productBasketData.finFd((item) => item.id === action.payload.id);

    //   return { ...state, productsReducer: toggleItem };

    default:
      return state;
  }
};

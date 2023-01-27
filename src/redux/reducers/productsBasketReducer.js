const initialState = { productBasketData: [], basketCounter: 0, basketPrice: 0, quantity: 0 };

const sumOfArray = (arr) => arr.reduce((acc, num) => acc + num, 0);

export const productsBasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS_BASKET_DATA':
      return { ...state, productBasketData: action.payload };

    case 'ADD_PRODUCTS_BASKET_DATA':
      const productInBasket = state.productBasketData.find((item) => item.id === action.payload.id);

      if (!productInBasket) {
        return {
          ...state,
          productBasketData: [...state.productBasketData, { ...action.payload, quantity: 1 }].sort((a, b) => b.id - a.id),
        };
      } else {
        return {
          ...state,
          productBasketData: state.productBasketData.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          }),
        };
      }

    case 'DELETE_PRODUCTS_BASKET_ITEM':
      const deleteData = state.productBasketData.filter((item) => item.id !== action.payload);
      return { ...state, productBasketData: deleteData };

    case 'DELETE_PRODUCTS_BASKET_DATA_ALL':
      return { ...state, productBasketData: [] };

    case 'COUNT_PRODUCTS_BASKET_DATA':
      const itemCount = state.productBasketData.map((item) => item.quantity);
      const resultAmount = sumOfArray(itemCount);
      return { ...state, basketCounter: resultAmount };

    case 'PRICE_PRODUCT_BASKET_DATA':
      const itemPrice = state.productBasketData.map((item) => {
        return item.price * item.quantity;
      });
      const roundedPrice = sumOfArray(itemPrice);
      return { ...state, basketPrice: roundedPrice };

    case 'UPDATE_BASKET_ITEM':
      const list = state.productBasketData.filter((item) => item.id !== action.payload.id);
      const result = [...list, action.payload].sort((a, b) => b.id - a.id);

      return { ...state, productBasketData: result };

    default:
      return state;
  }
};

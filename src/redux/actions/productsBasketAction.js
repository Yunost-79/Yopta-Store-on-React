export const setProductsBasketData = (payload) => {
  return { type: 'SET_PRODUCTS_BASKET_DATA', payload: payload };
};
export const setAddBasketItem = (payload) => {
  return { type: 'ADD_PRODUCTS_BASKET_DATA', payload: payload };
};
export const setDeleteBasketDataItem = (payload) => {
  return { type: 'DELETE_PRODUCTS_BASKET_ITEM', payload: payload };
};
export const setDeleteBasketDataAll = (payload) => {
  return { type: 'DELETE_PRODUCTS_BASKET_DATA_ALL', payload: payload };
};
export const setBasketCounter = (payload) => {
  return { type: 'COUNT_PRODUCTS_BASKET_DATA', payload: payload };
};
export const setBasketItemCounter = (payload) => {
  return { type: 'BASKET_ITEM_COUNTER', payload: payload };
};
export const editBasketItem = (payload) => {
  return { type: 'UPDATE_BASKET_ITEM', payload: payload };
};
export const setBasketPrice = (payload) => {
  return { type: 'PRICE_PRODUCT_BASKET_DATA', payload: payload };
};


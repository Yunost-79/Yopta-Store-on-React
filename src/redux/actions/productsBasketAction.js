export const setProductsBasketData = (payload) => {
  return { type: 'SET_PRODUCTS_BASKET_DATA', payload: payload };
};
export const setAddProductsData = (payload) => {
  return { type: 'ADD_PRODUCTS_BASKET_DATA', payload: payload };
};
export const setDeleteProductsData = (payload) => {
  return { type: 'DELETE_PRODUCTS_BASKET_DATA', payload: payload };
};
export const setDeleteProductsDataAll = (payload) => {
  return { type: 'DELETE_PRODUCTS_BASKET_DATA_ALL', payload: payload };
};
export const setBasketCounter = (payload) => {
  return { type: 'COUNT_PRODUCTS_BASKET_DATA', payload: payload };
};

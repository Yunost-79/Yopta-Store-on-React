export const setProductsData = (payload) => {
  console.log('payload=', payload);
  return { type: 'SET_PRODUCTS_DATA', payload: payload };
};
export const setAddProductsData = (payload) => {
  return { type: 'ADD_PRODUCTS_DATA', payload: payload };
};
export const setDeleteProductsData = (payload) => {
  return { type: 'DELETE_PRODUCTS_DATA', payload: payload };
};

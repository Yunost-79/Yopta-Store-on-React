import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { usersReducer } from './reducers/usersReducer';
import { loginTestReducer } from './reducers/loginTestReducer';
import { productsBasketReducer } from './reducers/productsBasketReducer';
import { productsDataReducer } from './reducers/productDataReducer';
import { reducer as formReducer } from 'redux-form';

import logger from 'redux-logger';

const reducer = combineReducers({
  users: usersReducer,
  productsBasket: productsBasketReducer,
  productsData: productsDataReducer,

  form: formReducer.plugin({ loginTestReducer }),
});

export const store = configureStore({ reducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) });

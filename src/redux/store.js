import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { usersReducer } from './reducers/usersReducer';
import { loginTestReducer } from './reducers/loginTestReducer';
import { productsReducer } from './reducers/productsReducer';
import { reducer as formReducer } from 'redux-form';

import logger from 'redux-logger';

const reducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  form: formReducer.plugin({ loginTestReducer }),
});

export const store = configureStore({ reducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) });

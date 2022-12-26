import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { usersReducer } from './reducers/usersReducer';
import { reducer as formReducer } from 'redux-form'

import logger from 'redux-logger';

const reducer = combineReducers({
  users: usersReducer,
  form: formReducer,
});

export const store = configureStore({ reducer , middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) });

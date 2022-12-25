import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { usersReducer } from './reducers/usersReducer';
import logger from 'redux-logger';

const reducer = combineReducers({
  users: usersReducer,
});

export const store = configureStore({ reducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) });

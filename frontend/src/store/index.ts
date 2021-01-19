import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import user from './user';

const reducer = combineReducers({
  user,
});

const store = configureStore({
  reducer,
  devTools: true,
})

export default store;
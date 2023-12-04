import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart';
import userReducer from './reducers/user';

const reducer = {
  cart: cartReducer,
  user: userReducer,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

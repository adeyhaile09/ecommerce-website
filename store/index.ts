import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import cartReducer from './reducers/cart';
import userReducer from './reducers/user';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

//COMBINING ALL REDUCERS
const reducer = {
  cart: cartReducer,
  user: userReducer,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

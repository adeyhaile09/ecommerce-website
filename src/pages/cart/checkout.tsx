import Checkout from '@/components/cart/checkout';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../store';

const CheckoutPage = () => {
  return (
    <Provider store={store}>
      <Checkout />
    </Provider>
  );
};

export default CheckoutPage;

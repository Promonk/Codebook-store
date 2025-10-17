import React from 'react'
import { useTitle } from '../../hooks/useTitle';
import { useLocation } from 'react-router-dom';
import { OrderSuccess, OrderFail } from './components';

export const OrderSummary = () => {
  useTitle("Order Summary");
  const { state } = useLocation();
  return (
    <main>
      { state.status ? <OrderSuccess data={state.data} /> : <OrderFail /> }
    </main>
  )
}

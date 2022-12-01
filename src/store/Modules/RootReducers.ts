import { combineReducers } from '@reduxjs/toolkit';
import saldo from './saldoSlice';
import TransactionsSlice from './TransacoesSlice';

export default combineReducers({
  saldo,
  TransactionsSlice
});

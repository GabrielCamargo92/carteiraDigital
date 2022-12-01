import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import EntradaType from '../../Types/EntradaType';

const adapter = createEntityAdapter<EntradaType>({
  selectId: item => item.id
});

export const { selectAll: selectTransactions, selectById: selectTransactionsById } = adapter.getSelectors(
  (state: RootState) => state.TransactionsSlice
);

const TransactiosSlice = createSlice({
  name: 'TransactiosSlice',
  initialState: adapter.getInitialState({ status: '' }),
  reducers: {
    addTransaction: adapter.addOne
  }
});

export const { addTransaction } = TransactiosSlice.actions;
export default TransactiosSlice.reducer;

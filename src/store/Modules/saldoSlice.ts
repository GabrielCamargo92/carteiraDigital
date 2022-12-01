import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SaldoState {
  saldo: number;
}

const initialState = { saldo: 0 } as SaldoState;

const saldoSlice = createSlice({
  name: 'saldo',
  initialState,
  reducers: {
    somaEntrada(state, action: PayloadAction<number>) {
      state.saldo += action.payload;
    },
    somaSaida(state, action: PayloadAction<number>) {
      state.saldo -= action.payload;
    }
  }
});

export const { somaEntrada, somaSaida } = saldoSlice.actions;
export default saldoSlice.reducer;

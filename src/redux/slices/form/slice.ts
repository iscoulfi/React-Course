import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICard } from '../../../types/formTypes';
import { FormsState } from './types';

const initialState: FormsState = {
  cards: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    refreshCards: (state, action: PayloadAction<ICard>) => {
      state.cards = [...state.cards, action.payload];
    },
  },
});

export const { refreshCards } = formSlice.actions;

export default formSlice.reducer;

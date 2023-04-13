import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SearchState, Status } from './types';
import { getCharacter, getCharactersByQuery } from './asyncActions';

const initialState: SearchState = {
  searchValue: '',
  cards: [],
  card: null,
  status: Status.IDLE,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCharactersByQuery.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(getCharactersByQuery.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      if (action.payload) state.cards = action.payload;
    });
    builder.addCase(getCharactersByQuery.rejected, (state) => {
      state.status = Status.ERROR;
    });

    builder.addCase(getCharacter.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(getCharacter.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      if (action.payload) state.card = action.payload;
    });
    builder.addCase(getCharacter.rejected, (state) => {
      state.status = Status.ERROR;
    });
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;

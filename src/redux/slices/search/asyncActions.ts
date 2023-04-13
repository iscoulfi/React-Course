import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CardData } from '../../../types/formTypes';

export const getCharactersByQuery = createAsyncThunk(
  'search/getCharactersByQuery',
  async (searchValue: string) => {
    try {
      const { data } = await axios.get<CardData[]>(
        `https://rickandmortyapi.com/api/character/?name=${searchValue}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCharacter = createAsyncThunk('comment/getCharacter', async (id: number) => {
  try {
    const { data } = await axios.get<CardData>(`https://rickandmortyapi.com/api/character/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

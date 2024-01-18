'use client'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const options = {
    method: 'GET',
    url: 'http://127.0.0.1:8000/information',
  };

  const initialState = {
    informations: [],
    isLoading: false,
    hasError: false,
    searched: '',
  }


  export const fetchInformations = createAsyncThunk('information/fetchInformations', async (thunkAPI) => {
    try {
      const response = await axios.request(options);
      const informations = await response.data;
      console.log('-----------------------', informations)
      return informations;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  });


  const informationSlice = createSlice({
    name: 'informations',
    initialState,
    reducers: {
      addSearched: (state, action) => ({ ...state, searched: action.payload }),
    },
    extraReducers: (builder) => {
      builder.addCase(fetchInformations.pending, (state) => ({ ...state, isLoading: true }));
      builder.addCase(fetchInformations.fulfilled, (state, action) => {
        const informationFetched = action.payload;
        return { ...state, isLoading: false, informations: informationFetched };
      });
      builder.addCase(fetchInformations.rejected,
        (state) => ({ ...state, isLoading: false, hasError: true }));
    },
  });
  

export default informationSlice.reducer;

export const { addSearched } = informationSlice.actions;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



const options = {
    method: 'GET',
    url: 'http://127.0.0.1:8000/information',
  };


  const initialState = {
    information: [],
    isLoading: false,
    hasError: false,
    searched: '',
  }


  export const fetchInformation = createAsyncThunk('information/fetchInformation', async (thunkAPI) => {
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  });


  const informationSlice = createSlice({
    name: 'information',
    initialState,
    reducers: {
      addSearched: (state, action) => ({ ...state, searched: action.payload }),
    },
    extraReducers: (builder) => {
      builder.addCase(fetchInformation.pending, (state) => ({ ...state, isLoading: true }));
      builder.addCase(fetchInformation.fulfilled, (state, action) => {
        const moviesFetched = action.payload;
        return { ...state, isLoading: false, games: moviesFetched };
      });
      builder.addCase(fetchInformation.rejected,
        (state) => ({ ...state, isLoading: false, hasError: true }));
    },
  });
  

export default informationSlice.reducer;

export const { addSearched } = informationSlice.actions;
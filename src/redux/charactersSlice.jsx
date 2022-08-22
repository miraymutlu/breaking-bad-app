import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const char_limit=12;

export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (page) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=${char_limit}&offset=${page*char_limit}`);
    return res.data;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    isLoading: false,
    page: -1,
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state) => {
      state.isLoading=true;
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.items=[...state.items, ...action.payload];
      state.isLoading=false;
      state.page += 1;
    },
    [fetchCharacters.rejected]: (state,action) => {
      state.isLoading=false;
      state.error=action.error.message;
    },
  },
});

export default charactersSlice.reducer;

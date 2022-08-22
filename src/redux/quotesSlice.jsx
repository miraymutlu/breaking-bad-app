import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuotes = createAsyncThunk("quotes/getQuotes", async () => {
  const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes`);
  return res.data;
});

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: {},
  reducers: {
    items: [],
  },
  extraReducers: {
    [fetchQuotes.fulfilled]: (state,action) => {
      state.items = action.payload;
    },
  },
});

export default quotesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
   query: string;
   result: any[];
}

const initialState: SearchState = {
   query: "",
   result: [],
};

export const searchSlice = createSlice({
   name: "search",
   initialState,
   reducers: {
      setQuery: (state, action) => {

      },
      setResult: (state, action) => {

      }
   }
});
import { RootState } from "@/app/redux/store";
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
         state.query = action.payload;
      },
   }
});

export const { setQuery } = searchSlice.actions;

export default searchSlice.reducer;

export const selectQuery = (state: RootState) => state.search.query;
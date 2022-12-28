import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/app/redux/store";
import { SingleAnime } from "@/types";

interface FavoritesState {
    favorites: SingleAnime[];
}

const initialState: FavoritesState = {
    favorites: []
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action) {
            state.favorites.push(action.payload);
        },
        deleteFavorite(state, action) {
            // const id = action.payload;
            // TODO HANDLE DELETE
        }
    }
});

export const { addFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;

export const selectFavorites = (state: RootState) => state.favorites.favorites;
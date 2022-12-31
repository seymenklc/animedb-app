import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/app/redux/store";
import { SingleAnime } from "@/types";
import { loadState, saveState } from "@/utils";

interface FavoritesState {
    favorites: SingleAnime[];
}

const initialState: FavoritesState = {
    favorites: loadState("favorites") || [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action) {
            state.favorites.push(action.payload);
            saveState(state.favorites, 'favorites');
        },
        deleteFavorite(state, action) {
            state.favorites = state.favorites.filter(favorite => {
                favorite.mal_id !== action.payload.id;
            });
            saveState(state.favorites, 'favorites');
        }
    }
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;

export const selectFavorites = (state: RootState) => state.favorites.favorites;
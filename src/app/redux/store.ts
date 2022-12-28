import { configureStore } from "@reduxjs/toolkit";;
// reducers
import { apiSlice } from "@/features/api/apiSlice";
import favoritesReducer from "@/features/favorites/favoritesSlice";

export const store = configureStore({
    devTools: true,
    reducer: {
        favorites: favoritesReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

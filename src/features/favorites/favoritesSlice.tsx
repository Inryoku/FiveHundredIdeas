import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../movies/moviesSlice";

interface FavoritesState {
  items: Movie[];
}

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      if (
        !state.items.some((movie) => movie.imdbID === action.payload.imdbID)
      ) {
        state.items.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (movie) => movie.imdbID !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;

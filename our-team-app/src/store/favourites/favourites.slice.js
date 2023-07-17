import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('favourites')) ?? [];

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    toggleFavourites: (state, { payload }) => {
      const userId = payload;
      const isExist = state.some(id => id === userId);

      if (isExist) {
        const index = state.findIndex(id => id === userId)
        if (index !== -1) {
          state.splice(index, 1);
        }
      } else { 
        state.push(userId); 
      }

      localStorage.setItem('favourites', JSON.stringify(state));
    },
    clearFavourites: (state) => {
      localStorage.removeItem('favourites');
      state.length = 0;
    }
  }
})

export const { toggleFavourites, clearFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;
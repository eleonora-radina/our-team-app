import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    toggleFavourites: (state, { payload }) => {
      const user = payload;
      const isExist = state.some(u => u.id === user.id);

      //чего?
      if (isExist) {
        const index = state.findIndex(u => u.id !== user.id)
        if (index !== -1) {
          state.splice(index, 1);
        }
      } else { 
        state.push(user); 
      }
    }
  }
})

export const { toggleFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;
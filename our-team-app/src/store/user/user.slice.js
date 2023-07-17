import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: "",
  email: "",
  isLoggedIn: localStorage.getItem('token') ? true : false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logInUser: (state, { payload }) => {
      state.id = payload.id;
      state.name = payload.name;
      state.email = payload.email;

      localStorage.setItem('token', payload.token);
      if (payload.token) {
        state.isLoggedIn = true;
      }
    },

    logOutUser: (state) => {
      state.id = initialState.id;
      state.name = initialState.name;
      state.email = initialState.email;
      localStorage.removeItem('token');
    },
  }
})

export const { logInUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
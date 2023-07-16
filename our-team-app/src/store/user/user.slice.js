import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: "",
  email: "",
  isLoggedIn: null
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

    checkLogIn: (state) => {
      if (localStorage.getItem('token')) {
        state.isLoggedIn = true;
      }
    }
  }
})

export const { logInUser, logOutUser, checkLogIn } = userSlice.actions;
export default userSlice.reducer;